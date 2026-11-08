TOPIC('en', {
  id: "m3-mat-calcolo-letterale",
  title: "Algebraic expressions (literal calculus)",
  intro: "What do the formula for the area of a rectangle (A = b × h), the price of 3 notebooks and a rule that holds for all numbers have in common? They use <b>letters</b> in place of numbers. With <b>literal calculus</b> we learn to do operations with <b>monomials</b> and <b>polynomials</b>: it is the gateway to algebra.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Why use letters",
      html: `<p>A <b>letter</b> in mathematics stands for <b>any number</b> (a <b>variable</b>) or for a number we do not know yet (an <b>unknown</b>). It is used to:</p>
<ul>
<li><b>generalise</b> a rule: "the sum of a number and its opposite is 0" → <b>a + (−a) = 0</b>;</li>
<li>write <b>formulas</b>: perimeter of a square <b>P = 4l</b>; area of a circle <b>A = πr²</b>;</li>
<li><b>translate</b> problems: "twice a number increased by 5" → <b>2x + 5</b>.</li>
</ul>
<p>An expression with numbers and letters is called an <b>algebraic (literal) expression</b>. If you replace the letters with numbers you can work out its <b>value</b>: for x = 3, 2x + 5 = 2·3 + 5 = 11.</p>
<p>Conventions: the × sign between a number and a letter is left out (2·x = <b>2x</b>), and the number is written first and then the letters in alphabetical order (<b>3ab²</b>, not b²3a).</p>`
    },
    {
      type: "text",
      title: "Monomials",
      html: `<p>A <b>monomial</b> is an algebraic expression in which there are <b>only multiplications</b> between numbers and letters (with whole-number exponents). Examples: <b>5x²</b>, <b>−3ab</b>, <b>¾y</b>, <b>7</b>.</p>
<ul>
<li><b>Coefficient</b>: the numerical part, with its sign (in −3ab it is −3). If nothing is written, it is 1 (x²y = 1·x²y).</li>
<li><b>Literal part</b>: the letters with their exponents (in −3ab it is ab).</li>
<li><b>Degree</b>: the <b>sum of the exponents</b> of the letters. 5x²y³ has degree 2 + 3 = <b>5</b>. A number on its own has degree 0.</li>
</ul>
<p>Two monomials are:</p>
<ul>
<li><b>like</b> (similar) if they have the <b>same literal part</b>: 4x²y and −7x²y;</li>
<li><b>equal</b> if they are like and have the same coefficient;</li>
<li><b>opposite</b> if they are like and have opposite coefficients: 3ab and −3ab.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Anatomy of a monomial",
      svg: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="260" fill="#f0fdf4"/>
<text x="320" y="130" font-size="78" text-anchor="middle" font-family="serif"><tspan fill="#dc2626">−5</tspan><tspan fill="#2563eb">a</tspan><tspan fill="#2563eb" font-size="42" dy="-34">3</tspan><tspan fill="#2563eb" dy="34">b</tspan><tspan fill="#2563eb" font-size="42" dy="-34">2</tspan></text>
<path d="M210 150 L210 175 L270 175 L270 150" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="240" y="205" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">coefficient</text>
<text x="240" y="228" font-size="15" text-anchor="middle" fill="#dc2626">(number with sign)</text>
<path d="M285 150 L285 175 L440 175 L440 150" fill="none" stroke="#2563eb" stroke-width="3"/>
<text x="362" y="205" font-size="18" text-anchor="middle" fill="#2563eb" font-weight="bold">literal part</text>
<text x="362" y="228" font-size="15" text-anchor="middle" fill="#2563eb">a³b²</text>
<rect x="470" y="40" width="150" height="80" rx="10" fill="#a855f7"/>
<text x="545" y="72" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">degree</text>
<text x="545" y="100" font-size="20" text-anchor="middle" fill="#fff">3 + 2 = 5</text>
<text x="545" y="150" font-size="14" text-anchor="middle" fill="#6b21a8">degree in a: 3</text>
<text x="545" y="170" font-size="14" text-anchor="middle" fill="#6b21a8">degree in b: 2</text>
</svg>`,
      caption: "Every monomial has a coefficient, a literal part and a degree."
    },
    {
      type: "text",
      title: "Operations with monomials",
      html: `<ul>
<li><b>Algebraic sum</b>: you can add <b>only like monomials</b>. You add the coefficients and keep the literal part: 3x² + 5x² − x² = <b>7x²</b>. If they are not like, the sum stays as it is: 2a + 3b cannot be simplified (it is not a monomial, it is a <b>polynomial</b>).</li>
<li><b>Multiplication</b>: you multiply the coefficients and multiply the letters by <b>adding the exponents</b> of equal letters: (2a²b)·(−3ab³) = <b>−6a³b⁴</b>.</li>
<li><b>Division</b>: you divide the coefficients and <b>subtract the exponents</b>: (12x⁵y²) : (4x²y) = <b>3x³y</b>. (The result is a monomial only if each exponent of the divisor does not exceed that of the dividend.)</li>
<li><b>Power</b>: you raise the coefficient to the power and <b>multiply the exponents</b>: (−2a³b)² = <b>4a⁶b²</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: monomials",
      questions: [
        { type: "num", q: "What is the degree of the monomial 7x³y⁴z?", answer: 8, explain: "3 + 4 + 1 = 8 (z has exponent 1)." },
        { type: "mc", q: "Which monomial is like −2ab²?", options: ["5a²b", "9ab²", "−2ab"], answer: 1, explain: "It has the same literal part ab²." },
        { type: "mc", q: "(3x²)·(4x³) = ?", options: ["12x⁵", "12x⁶", "7x⁵"], answer: 0, explain: "3·4 = 12; x²·x³ = x⁵ (exponents are added)." }
      ]
    },
    {
      type: "text",
      title: "Polynomials and their operations",
      html: `<p>A <b>polynomial</b> is the <b>algebraic sum of monomials</b> that are not like each other (after "reducing" it). With 2 terms it is a <b>binomial</b> (a + b), with 3 a <b>trinomial</b> (x² + 2x + 1).</p>
<ul>
<li><b>Reduction</b>: you add the like monomials: 3x + 2y − x + 5y = <b>2x + 7y</b>.</li>
<li><b>Degree</b> of the polynomial: the <b>highest</b> degree among its monomials. x³ + 4x² − 1 has degree 3.</li>
<li><b>Ordering</b>: you write the terms in decreasing powers of one letter.</li>
<li><b>Sum/difference</b> of polynomials: you remove the brackets (careful, the − changes the signs!) and reduce: (2x + 3) − (x − 5) = 2x + 3 − x + 5 = <b>x + 8</b>.</li>
<li><b>Monomial × polynomial</b>: <b>distributive</b> property: 3a(2a − 4) = <b>6a² − 12a</b>.</li>
<li><b>Polynomial × polynomial</b>: every term of the first times every term of the second: (x + 2)(x + 3) = x² + 3x + 2x + 6 = <b>x² + 5x + 6</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "Special products",
      html: `<p>Some products come up so often that it pays to remember them by heart:</p>
<ul>
<li><b>Square of a binomial</b>: (a + b)² = <b>a² + 2ab + b²</b> &nbsp;&nbsp; (a − b)² = <b>a² − 2ab + b²</b></li>
<li><b>Sum times difference</b>: (a + b)(a − b) = <b>a² − b²</b></li>
</ul>
<p>⚠️ Classic mistake: (a + b)² is <b>not</b> a² + b²! The "double product" 2ab is missing. Check with numbers: (3 + 2)² = 25, but 3² + 2² = 13.</p>
<p>Mental-arithmetic trick: 21 × 19 = (20 + 1)(20 − 1) = 400 − 1 = <b>399</b>.</p>`
    },
    {
      type: "svg",
      title: "The square of a binomial, seen with areas",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#fff7ed"/>
<rect x="60" y="40" width="180" height="180" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="240" y="40" width="80" height="180" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<rect x="60" y="220" width="180" height="80" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<rect x="240" y="220" width="80" height="80" fill="#f87171" stroke="#991b1b" stroke-width="3"/>
<text x="150" y="140" font-size="34" text-anchor="middle" fill="#fff" font-weight="bold">a²</text>
<text x="280" y="140" font-size="26" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="150" y="270" font-size="26" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="280" y="270" font-size="26" text-anchor="middle" fill="#fff" font-weight="bold">b²</text>
<text x="150" y="30" font-size="20" text-anchor="middle" fill="#1f2937">a</text>
<text x="280" y="30" font-size="20" text-anchor="middle" fill="#1f2937">b</text>
<text x="40" y="135" font-size="20" text-anchor="middle" fill="#1f2937">a</text>
<text x="40" y="265" font-size="20" text-anchor="middle" fill="#1f2937">b</text>
<text x="480" y="130" font-size="26" text-anchor="middle" fill="#1f2937" font-weight="bold">(a + b)² =</text>
<text x="480" y="175" font-size="26" text-anchor="middle" fill="#1f2937"><tspan fill="#2563eb">a²</tspan> + <tspan fill="#b45309">2ab</tspan> + <tspan fill="#dc2626">b²</tspan></text>
<text x="480" y="230" font-size="16" text-anchor="middle" fill="#78350f">the two yellow rectangles</text>
<text x="480" y="252" font-size="16" text-anchor="middle" fill="#78350f">are the "double product"</text>
</svg>`,
      caption: "A square of side a + b divides into a square a², a square b² and two rectangles ab. The Greeks already knew this: it is proposition II.4 of Euclid's Elements."
    },
    {
      type: "example",
      title: "Worked example: from the problem to the expression",
      html: `<p>At the café a croissant costs <b>c</b> euros and a cappuccino <b>p</b> euros. A class orders 12 croissants and 9 cappuccinos; the teachers 3 croissants and 4 cappuccinos.</p>
<ul>
<li>The class's spending: <b>12c + 9p</b></li>
<li>The teachers' spending: <b>3c + 4p</b></li>
<li>Total spending: (12c + 9p) + (3c + 4p) = <b>15c + 13p</b> (you add the like monomials: croissants with croissants, cappuccinos with cappuccinos!)</li>
<li>If c = €1.20 and p = €1.50: 15·1.20 + 13·1.50 = 18 + 19.50 = <b>€37.50</b>.</li>
</ul>`
    },
    {
      type: "example",
      title: "Worked example: the flower bed with a border",
      html: `<p>A square flower bed has side <b>x</b> metres. A gravel border 1 m wide is added all around: the new square has side <b>x + 2</b>.</p>
<ul>
<li>Total area: (x + 2)² = <b>x² + 4x + 4</b></li>
<li>Area of the gravel = total area − area of the flower bed = x² + 4x + 4 − x² = <b>4x + 4</b></li>
<li>If x = 5 m: gravel = 4·5 + 4 = <b>24 m²</b>. Check: 7² − 5² = 49 − 25 = 24 ✔️</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Who invented letters in mathematics",
      html: `<p>For centuries problems were written <b>in words</b> ("rhetorical" algebra). The Greek <b>Diophantus</b> (3rd century AD) used the first abbreviations. The Frenchman <b>François Viète</b>, in 1591, had the idea of using letters systematically: vowels for the unknowns, consonants for the known numbers. Then <b>Descartes</b>, in the <i>Géométrie</i> of 1637, chose the last letters of the alphabet (<b>x, y, z</b>) for the unknowns and the first ones (<b>a, b, c</b>) for the known numbers: the convention we still use today!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The name \"algebra\"",
      html: `<p>The word <b>algebra</b> comes from the Arabic <i>al-jabr</i>, "restoring, putting back together" (the same term was used for someone who set broken bones!). It is in the title of the book by the Persian mathematician <b>al-Khwārizmī</b>, written in Baghdad around 820 AD. The word <b>algorithm</b> also derives from his name.</p>`
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>Monomial: only products. Degree = sum of the exponents.</li>
<li>You add <b>only like monomials</b> (same literal part).</li>
<li>Product: exponents are <b>added</b>; quotient: they are <b>subtracted</b>; power: they are <b>multiplied</b>.</li>
<li>(a + b)² = a² + 2ab + b²; &nbsp;(a + b)(a − b) = a² − b².</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand algebraic expressions",
      intro: "Do letters confuse you? Try seeing them as objects, as areas or as building blocks.",
      tabs: [
        {
          label: "🍎 Apples and pears",
          html: `<p>Imagine that <b>x</b> is an apple 🍎 and <b>y</b> a pear 🍐.</p>
<ul>
<li>3x + 2x = 🍎🍎🍎 + 🍎🍎 = <b>5x</b> (5 apples).</li>
<li>3x + 2y = 🍎🍎🍎 + 🍐🍐: I can't say "5 applepears"! It stays <b>3x + 2y</b>. That is why you add only <b>like</b> monomials.</li>
<li>But careful: x and x² are different objects (an apple and a square crate of apples), so x + x² does <b>not</b> make 2x³!</li>
</ul>
<p>The analogy works for sums and subtractions; for multiplications it is better to use areas (next tab).</p>`
        },
        {
          label: "🇺🇸 Algebra tiles: areas",
          html: `<p>In the United States they use <b>algebra tiles</b>: a big square = x², a rectangle = x, a little square = 1.</p>
<p>Multiplying two polynomials means building a <b>rectangle</b> with those sides and counting the tiles. (x + 2)(x + 3):</p>
<ul><li>1 square x², 5 rectangles x (2 + 3), 6 little squares → <b>x² + 5x + 6</b>.</li></ul>
<p>In the picture: base x + 3, height x + 2. Count the tiles of each colour!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="40" width="150" height="150" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<text x="135" y="125" font-size="30" text-anchor="middle" fill="#fff" font-weight="bold">x²</text>
<g fill="#4ade80" stroke="#166534" stroke-width="3">
<rect x="210" y="40" width="40" height="150"/><rect x="250" y="40" width="40" height="150"/><rect x="290" y="40" width="40" height="150"/>
<rect x="60" y="190" width="150" height="40"/><rect x="60" y="230" width="150" height="40"/>
</g>
<g fill="#facc15" stroke="#854d0e" stroke-width="3">
<rect x="210" y="190" width="40" height="40"/><rect x="250" y="190" width="40" height="40"/><rect x="290" y="190" width="40" height="40"/>
<rect x="210" y="230" width="40" height="40"/><rect x="250" y="230" width="40" height="40"/><rect x="290" y="230" width="40" height="40"/>
</g>
<text x="135" y="30" font-size="18" text-anchor="middle">x</text><text x="270" y="30" font-size="18" text-anchor="middle">+ 3</text>
<text x="40" y="120" font-size="18" text-anchor="middle">x</text><text x="40" y="235" font-size="18" text-anchor="middle">+2</text>
<text x="460" y="110" font-size="22" text-anchor="middle" fill="#1e3a8a">1 × x²</text>
<text x="460" y="150" font-size="22" text-anchor="middle" fill="#166534">5 × x</text>
<text x="460" y="190" font-size="22" text-anchor="middle" fill="#854d0e">6 × 1</text>
<text x="460" y="240" font-size="22" text-anchor="middle" fill="#1f2937" font-weight="bold">x² + 5x + 6</text>
</svg>`
        },
        {
          label: "🧊 Monomials in 3D",
          html: `<p>A monomial of <b>degree 3</b> like <b>abc</b> is the <b>volume</b> of a box with edges a, b, c. A monomial of degree 2 (ab) is an area, one of degree 1 (a) a length. That is why "degree" and "dimensions" are linked!</p>
<p>Change the measurements: if a = 4, b = 3, c = 2 the volume is 4·3·2 = 24 little cubes. If you double only a, the volume doubles; if you double all three, it becomes 2³ = 8 times bigger: (2a)(2b)(2c) = 8abc.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 2 }
        },
        {
          label: "📐 The growing rectangle",
          html: `<p>A rectangle with base <b>b</b> and height <b>h</b> has area <b>bh</b> and perimeter <b>2b + 2h</b>: two polynomials! Use the widget: increase the base by 1. The area increases by <b>h</b> (a column of little squares) and the perimeter by <b>2</b>. In letters: (b + 1)h = bh + h.</p>`,
          widget: "areaGrid",
          options: { w: 5, h: 3, max: 12 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of algebraic expressions",
      nodes: [
        { id: "lettere", label: "Letters in place of numbers", x: 50, y: 6, color: "#64748b", html: "Variables and unknowns that stand for numbers.", why: "From 'rhetorical' algebra in words (Babylonians, al-Khwārizmī) people moved to 'syncopated' (Diophantus) and then 'symbolic' algebra with Viète (1591) and Descartes (1637). Letters let us write rules valid for all numbers." },
        { id: "monomio", label: "Monomial", x: 25, y: 28, color: "#2563eb", html: "Product of a coefficient and letters with whole-number exponents.", why: "From the Greek <i>mónos</i>, \"single\", and <i>nómos</i>, \"part\": a single term. It is the 'building brick' of all algebraic expressions." },
        { id: "polinomio", label: "Polynomial", x: 75, y: 28, color: "#16a34a", html: "Algebraic sum of monomials.", why: "From the Greek <i>polýs</i>, \"many\": many terms. Every number written in base 10 is basically a polynomial: 345 = 3·10² + 4·10 + 5." },
        { id: "grado", label: "Degree", x: 10, y: 52, color: "#a855f7", html: "Sum of the exponents (monomial) or highest degree (polynomial).", why: "It links algebra to geometry: degree 1 = length, 2 = area, 3 = volume. The Greeks in fact called x² 'square' and x³ 'cube'." },
        { id: "simili", label: "Like monomials", x: 38, y: 52, color: "#f59e0b", html: "Same literal part: they can be added.", why: "It is the distributive property in reverse: 3x + 5x = (3 + 5)x = 8x. If the literal parts differ, there is no common factor to take out." },
        { id: "potenze", label: "Properties of powers", x: 62, y: 52, color: "#ef4444", html: "aᵐ·aⁿ = aᵐ⁺ⁿ; aᵐ:aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ.", why: "They derive from the definition of power as repeated multiplication: a²·a³ = (a·a)·(a·a·a) = a⁵. Nicolas Chuquet already used them in 1484; the notation with the raised exponent is due to Descartes." },
        { id: "distributiva", label: "Distributive property", x: 88, y: 52, color: "#0ea5e9", html: "a(b + c) = ab + ac: used to multiply polynomials.", why: "It is a property of numbers that is easy to see with areas: a rectangle with base b + c and height a divides into two rectangles ab and ac." },
        { id: "notevoli", label: "Special products", x: 75, y: 80, color: "#14b8a6", html: "(a + b)² = a² + 2ab + b²; (a + b)(a − b) = a² − b².", why: "Euclid proved them with figures in the Elements (book II, around 300 BC), without algebraic letters: for him they were properties of squares and rectangles." },
        { id: "equazioni", label: "Towards equations", x: 30, y: 85, color: "#7c3aed", html: "Literal calculus is used to solve equations and to use formulas.", why: "To find an unknown you have to be able to simplify expressions: it is the next step of algebra." }
      ],
      edges: [
        ["lettere", "monomio", "form"],
        ["monomio", "polinomio", "added give"],
        ["monomio", "grado", "has a"],
        ["monomio", "simili", "can be"],
        ["monomio", "potenze", "are multiplied with"],
        ["polinomio", "distributiva", "are multiplied with"],
        ["distributiva", "notevoli", "special cases"],
        ["polinomio", "equazioni", "are needed for"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: polynomials",
      questions: [
        { type: "mc", q: "Reduce: 4a + 3b − a + 2b", options: ["3a + 5b", "8ab", "5a + 5b"], answer: 0, explain: "4a − a = 3a; 3b + 2b = 5b." },
        { type: "mc", q: "(x + 5)² = ?", options: ["x² + 25", "x² + 10x + 25", "x² + 5x + 25"], answer: 1, explain: "Square of a binomial: x² + 2·5·x + 25." },
        { type: "num", q: "What is 31 × 29 using sum times difference?", answer: 899, explain: "(30 + 1)(30 − 1) = 900 − 1 = 899." }
      ]
    }
  ],
  glossary: [
    { t: "Algebraic expression", d: "Expression with numbers and letters linked by operations." },
    { t: "Monomial", d: "Algebraic expression with only multiplications between numbers and letters." },
    { t: "Coefficient", d: "The numerical part of a monomial, with its sign." },
    { t: "Literal part", d: "The letters of a monomial with their exponents." },
    { t: "Degree", d: "Sum of the exponents of the letters of a monomial; for a polynomial, the highest degree of its terms." },
    { t: "Like monomials", d: "Monomials with the same literal part." },
    { t: "Polynomial", d: "Algebraic sum of monomials (binomial: 2 terms; trinomial: 3)." },
    { t: "Special products", d: "Products with a known result, like the square of a binomial and sum times difference." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is the coefficient of −x²y?", options: ["1", "−1", "2"], answer: 1, explain: "When there is only the minus sign, the coefficient is −1." },
      { type: "num", q: "Degree of the polynomial 3x⁴ − 2x²y³ + 5", answer: 5, explain: "The degrees of the terms are 4, 5 and 0: the maximum is 5." },
      { type: "mc", q: "5ab − 8ab = ?", options: ["−3ab", "3ab", "−3a²b²"], answer: 0, explain: "Like monomials: 5 − 8 = −3." },
      { type: "mc", q: "(−2x³)·(5x²y) = ?", options: ["−10x⁵y", "10x⁶y", "3x⁵y"], answer: 0, explain: "−2·5 = −10; x³·x² = x⁵; y stays." },
      { type: "mc", q: "(18a⁶b³) : (6a²b) = ?", options: ["3a³b³", "3a⁴b²", "12a⁴b²"], answer: 1, explain: "18 : 6 = 3; a⁶⁻² = a⁴; b³⁻¹ = b²." },
      { type: "mc", q: "(3a²)³ = ?", options: ["9a⁵", "27a⁶", "27a⁵"], answer: 1, explain: "3³ = 27; (a²)³ = a⁶." },
      { type: "tf", q: "(a + b)² = a² + b²", answer: false, explain: "The double product is missing: (a + b)² = a² + 2ab + b²." },
      { type: "mc", q: "(x + 4)(x − 4) = ?", options: ["x² − 16", "x² + 16", "x² − 8x − 16"], answer: 0, explain: "Sum times difference: x² − 4² = x² − 16." },
      { type: "num", q: "Calculate the value of 2x² − 3x + 1 for x = 3.", answer: 10, explain: "2·9 − 9 + 1 = 18 − 9 + 1 = 10." },
      { type: "mc", q: "Three times a number decreased by 7 is written…", options: ["3(x − 7)", "3x − 7", "x³ − 7"], answer: 1, explain: "First three times the number (3x), then you take away 7." },
      { type: "mc", q: "2a(3a − 5) = ?", options: ["6a² − 10a", "6a − 10", "5a² − 10a"], answer: 0, explain: "Distributive property: 2a·3a − 2a·5." },
      { type: "text", q: "What is a polynomial made of two terms called?", answer: ["binomial", "a binomial"], explain: "Binomial (bi = two)." }
    ],
    gen: [["power", 2]]
  }
});
