TOPIC('en', {
  id: "l1-mat-scomposizione",
  title: "Factorising polynomials",
  intro: "Just as a number like 84 can be written as 2·2·3·7, a polynomial can also be broken down into a <b>product of simpler factors</b>. <b>Factorising</b> is the opposite of expanding: it is the tool that will make algebraic fractions, equations of degree higher than one and almost all the algebra of the coming years possible. In this lesson we look at the basic techniques: taking out a common factor, special products, the special trinomial and Ruffini's rule.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "What factorising means",
      html: `<p><b>Factorising</b> a polynomial means writing it as a <b>product of polynomials</b> of lower degree (the <b>factors</b>). It is the inverse of multiplication:</p>
<p style="text-align:center"><b>(x + 2)(x + 3) = x² + 5x + 6</b><br>expanding →<br>← factorising</p>
<p>A polynomial that can no longer be broken into factors of lower degree (with rational coefficients) is called <b>irreducible</b>, like prime numbers: x + 1 and x² + 1 are irreducible. Factorising "completely" means stopping only when all the factors are irreducible.</p>
<p>What's the point? A product is <b>zero</b> only if one of its factors is zero (zero product property), so once a polynomial is factorised you can immediately see the values that make it zero; moreover, common factors can be <b>cancelled</b> in fractions. Factorising is the key to everything.</p>`
    },
    {
      type: "text",
      title: "1) Taking out a common factor",
      html: `<p>This is the distributive property applied "in reverse": a·b + a·c = <b>a(b + c)</b>. Look for the <b>greatest common divisor</b> (GCD) of all the terms: the largest number that divides all the coefficients, and the common letters with the <b>smallest exponent</b>.</p>
<p>Example: <b>6x³ − 9x² + 3x</b>. The GCD of the coefficients 6, 9, 3 is 3; the letter x appears in all terms with smallest exponent 1. So:</p>
<p style="text-align:center">6x³ − 9x² + 3x = <b>3x(2x² − 3x + 1)</b></p>
<p>Check: multiply 3x by each term in the brackets and you get back the original. Careful: if a term is equal to the GCD, what remains in the brackets is <b>1</b> (not zero!): 3x ÷ 3x = 1.</p>
<p><b>Factorising by grouping</b>: with four terms, take out factors in groups, hoping that the same factor is left in the brackets:</p>
<p style="text-align:center">ax + ay + bx + by = a(x + y) + b(x + y) = <b>(x + y)(a + b)</b></p>`
    },
    {
      type: "svg",
      title: "Factorising means rebuilding a rectangle",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="50" width="160" height="150" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="220" y="50" width="90" height="150" fill="#86efac" stroke="#166534" stroke-width="3"/>
<rect x="60" y="200" width="160" height="60" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<rect x="220" y="200" width="90" height="60" fill="#fca5a5" stroke="#991b1b" stroke-width="3"/>
<text x="140" y="132" font-size="26" text-anchor="middle" fill="#1e1b4b" font-weight="bold">x²</text>
<text x="265" y="132" font-size="22" text-anchor="middle" fill="#14532d" font-weight="bold">3x</text>
<text x="140" y="238" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">2x</text>
<text x="265" y="238" font-size="22" text-anchor="middle" fill="#7f1d1d" font-weight="bold">6</text>
<text x="140" y="38" font-size="18" text-anchor="middle" fill="#334155">x</text>
<text x="265" y="38" font-size="18" text-anchor="middle" fill="#334155">3</text>
<text x="42" y="130" font-size="18" text-anchor="middle" fill="#334155">x</text>
<text x="42" y="237" font-size="18" text-anchor="middle" fill="#334155">2</text>
<text x="340" y="100" font-size="18" fill="#1f2937" font-weight="bold">Total area:</text>
<text x="340" y="130" font-size="18" fill="#1f2937">x² + 3x + 2x + 6 = x² + 5x + 6</text>
<text x="340" y="170" font-size="18" fill="#1f2937" font-weight="bold">Sides: (x + 3) and (x + 2)</text>
<text x="340" y="210" font-size="20" fill="#4338ca" font-weight="bold">x² + 5x + 6 = (x + 2)(x + 3)</text>
</svg>`,
      caption: "A quadratic polynomial as an area: factorising it means finding the side lengths of the rectangle."
    },
    {
      type: "text",
      title: "2) Factorising with special products",
      html: `<p>Reading the special products "backwards" gives the most useful factorisations:</p>
<table>
<tr><th>Polynomial</th><th>Factorisation</th><th>Name</th></tr>
<tr><td>A² − B²</td><td>(A + B)(A − B)</td><td>difference of two squares</td></tr>
<tr><td>A² + 2AB + B²</td><td>(A + B)²</td><td>perfect square trinomial</td></tr>
<tr><td>A² − 2AB + B²</td><td>(A − B)²</td><td>perfect square trinomial</td></tr>
<tr><td>A³ + 3A²B + 3AB² + B³</td><td>(A + B)³</td><td>cube of a binomial</td></tr>
<tr><td>A³ + B³</td><td>(A + B)(A² − AB + B²)</td><td>sum of cubes</td></tr>
<tr><td>A³ − B³</td><td>(A − B)(A² + AB + B²)</td><td>difference of cubes</td></tr>
</table>
<p><b>Examples.</b></p>
<ul>
<li>4x² − 25 = (2x)² − 5² = <b>(2x + 5)(2x − 5)</b></li>
<li>9x² + 12x + 4: the squares are (3x)² and 2²; the double product 2·3x·2 = 12x ✔ → <b>(3x + 2)²</b></li>
<li>x⁴ − 16 = (x²)² − 4² = (x² + 4)(x² − 4) = <b>(x² + 4)(x + 2)(x − 2)</b>: the factor x² + 4 is irreducible, but x² − 4 can be factorised further!</li>
<li>x³ + 8 = x³ + 2³ = <b>(x + 2)(x² − 2x + 4)</b></li>
</ul>
<p>⚠️ The <b>sum</b> of two squares (x² + 9) does <b>not</b> factorise: (x + 3)² gives x² + 6x + 9, not x² + 9.</p>`
    },
    {
      type: "example",
      title: "Mental arithmetic with the difference of two squares",
      html: `<p>What is <b>99 × 101</b> without a calculator? Write 99 = 100 − 1 and 101 = 100 + 1: it is (a − b)(a + b) = a² − b².</p>
<p>99 × 101 = 100² − 1² = 10 000 − 1 = <b>9 999</b>.</p>
<p>In the same way, 48 × 52 = (50 − 2)(50 + 2) = 2 500 − 4 = <b>2 496</b>. An algebraic identity that becomes a mental-arithmetic champion's trick.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: common factors and special products",
      questions: [
        { type: "num", q: "6x + 12 = 6(x + ?). What number goes in place of the question mark?", answer: 2, explain: "12 ÷ 6 = 2, so 6x + 12 = 6(x + 2)." },
        { type: "mc", q: "How does x² − 49 factorise?", options: ["(x − 7)²", "(x + 7)(x − 7)", "(x + 49)(x − 1)"], answer: 1, explain: "It is a difference of two squares: x² − 7² = (x + 7)(x − 7)." },
        { type: "tf", q: "x² + 9 = (x + 3)².", answer: false, explain: "(x + 3)² = x² + 6x + 9: the double product is missing. The sum of squares x² + 9 is irreducible." }
      ]
    },
    {
      type: "text",
      title: "3) The special trinomial x² + sx + p",
      html: `<p>A quadratic trinomial with coefficient 1 in front of x² is factorised, when possible, by looking for <b>two numbers m and n</b> such that:</p>
<p style="text-align:center">m + n = s (coefficient of x) &nbsp;&nbsp; and &nbsp;&nbsp; m · n = p (constant term)</p>
<p>Then <b>x² + sx + p = (x + m)(x + n)</b>. The reason is simple: (x + m)(x + n) = x² + (m + n)x + m·n.</p>
<p><b>Example 1</b>: x² − 5x + 6. I look for two numbers with product 6 and sum −5: they are −2 and −3. So <b>(x − 2)(x − 3)</b>.</p>
<p><b>Example 2</b>: x² + x − 12. Product −12 (opposite signs), sum +1: factor pairs of 12: (1,12), (2,6), (3,4); the one with difference 1 is 3 and 4, and the larger must be positive: +4 and −3. So <b>(x + 4)(x − 3)</b>.</p>
<p><b>Sign trick</b>: if p &gt; 0 the two numbers have the same sign (that of s); if p &lt; 0 they have opposite signs and the one with larger absolute value has the sign of s. If no suitable integers exist, the trinomial is (usually) irreducible.</p>`
    },
    {
      type: "widget",
      title: "Which technique should I use?",
      widget: "classify",
      options: { groups: ["Common factor", "Difference of squares", "Special trinomial", "Perfect square"], items: [
        ["6x² + 9x", 0],
        ["x² − 36", 1],
        ["x² + 5x + 6", 2],
        ["4x² + 12x + 9", 3],
        ["4a² − 9b²", 1],
        ["x² − x − 12", 2],
        ["9x² − 6x + 1", 3],
        ["ab + ac", 0]
      ] },
      caption: "Before calculating, recognise the form: that's half the work."
    },
    {
      type: "text",
      title: "4) Ruffini's rule",
      html: `<p>For polynomials of degree 3 or higher without a "special" form we use <b>Ruffini's theorem</b> (known in English as the factor theorem):</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>A polynomial P(x) is divisible by (x − a) if and only if P(a) = 0.</b></p>
<p>So it is enough to find a number <b>a</b> that makes the polynomial zero: then (x − a) is a factor. For a polynomial with integer coefficients and leading coefficient 1, the integer candidates are the <b>divisors of the constant term</b> (with both signs).</p>
<p><b>Example</b>: P(x) = x³ − 2x² − 5x + 6. Constant term 6, divisors ±1, ±2, ±3, ±6.</p>
<ul>
<li>P(1) = 1 − 2 − 5 + 6 = 0 ✔ → (x − 1) is a factor.</li>
<li>Division with <b>Ruffini's rule</b> (synthetic division): write the coefficients 1, −2, −5, 6; bring down the 1; multiply by a = 1 and add down the column: 1 → (−2 + 1) = −1 → (−5 − 1) = −6 → (6 − 6) = 0 (remainder zero ✔).</li>
<li>The quotient has coefficients 1, −1, −6: x² − x − 6.</li>
<li>This is a special trinomial: sum −1, product −6 → −3 and +2: (x − 3)(x + 2).</li>
</ul>
<p>Result: <b>x³ − 2x² − 5x + 6 = (x − 1)(x − 3)(x + 2)</b>. The roots (1, 3, −2) are exactly the values that make the polynomial zero.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know? Paolo Ruffini",
      html: `<p><b>Paolo Ruffini</b> (1765–1822) was an Italian doctor and mathematician, born in Valentano and who lived in Modena. He developed the division method that bears his name at the beginning of the 19th century, but he is even more famous for trying, as early as 1799, to prove that the general <b>quintic equation cannot be solved by radicals</b>: the proof was incomplete, but it paved the way for Abel and then Galois, who settled the question. So a rule taught to first-year high-school students comes from a great story in mathematics.</p>`
    },
    {
      type: "example",
      title: "Practical example: the garden with a flower bed",
      html: `<p>A square garden with side x metres has a square flower bed with side 3 m in the middle. The area of grass is x² − 9. Factorising: <b>(x + 3)(x − 3)</b>. This means you can think of the grass as a rectangle with sides (x + 3) and (x − 3). For x = 13 m: 16 · 10 = 160 m², the same as 169 − 9 = 160 m², but with a quicker calculation.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know? Fermat and big numbers",
      html: `<p>The French mathematician <b>Pierre de Fermat</b> (1601–1665) used the difference of two squares to factorise whole numbers: if a number N can be written as a² − b², then N = (a + b)(a − b). His method works well when the two factors are close together. The security of many modern cryptography systems also relies on the fact that factorising huge numbers into primes is extremely hard.</p>`
    },
    {
      type: "remember",
      title: "The strategy: in what order to try",
      html: `<ol>
<li><b>Common factor</b>: is there a factor common to all the terms? Always take it out first.</li>
<li>Count the terms: <b>2</b> → difference of squares or of cubes; <b>3</b> → perfect square or special trinomial; <b>4</b> → grouping or cube of a binomial.</li>
<li>If you don't recognise any form and the degree is ≥ 3: <b>Ruffini</b>.</li>
<li><b>Check</b> whether any factor can be factorised further (like x² − 4).</li>
<li><b>Verify</b> by multiplying the factors: you must get back the original polynomial.</li>
</ol>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand factorising",
      intro: "If factorising feels like a collection of formulas to learn by heart, try these other routes.",
      tabs: [
        {
          label: "📐 With areas",
          html: `<p>You can \"see\" the difference of two squares. Take a square with side <b>a</b> and remove a small square with side <b>b</b> from one corner: what remains is an \"L\" with area <b>a² − b²</b>. Cut the L and reassemble the pieces: it becomes a <b>rectangle</b> with sides <b>(a + b)</b> and <b>(a − b)</b>. Same area, so <b>a² − b² = (a + b)(a − b)</b>.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="30" y="60" width="160" height="160" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="130" y="60" width="60" height="60" fill="#ffffff" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/>
<text x="160" y="97" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">b²</text>
<text x="80" y="150" font-size="20" text-anchor="middle" fill="#1e1b4b" font-weight="bold">a² − b²</text>
<text x="110" y="248" font-size="18" text-anchor="middle" fill="#334155">side a</text>
<text x="270" y="150" font-size="34" text-anchor="middle" fill="#334155" font-weight="bold">→</text>
<rect x="330" y="90" width="160" height="100" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="490" y="90" width="60" height="100" fill="#fdba74" stroke="#9a3412" stroke-width="3"/>
<text x="410" y="145" font-size="18" text-anchor="middle" fill="#1e1b4b" font-weight="bold">a · (a − b)</text>
<text x="520" y="145" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">b·(a−b)</text>
<text x="440" y="75" font-size="18" text-anchor="middle" fill="#334155">base a + b</text>
<text x="440" y="220" font-size="18" text-anchor="middle" fill="#334155">height a − b</text>
</svg>`
        },
        {
          label: "🇨🇳 The cross method",
          html: `<p>In China, <b>cross multiplication</b> (十字相乘) has been used for centuries to factorise trinomials. Write the two numbers m and n in an \"X\" and check two things:</p>
<ul>
<li><b>vertically</b> (product m·n) you must get the constant term;</li>
<li><b>diagonally</b> (sum m + n) you must get the coefficient of x.</li>
</ul>
<p>For x² − 5x + 6: product 6, sum −5. Try (−1, −6): sum −7 ✗. Try (−2, −3): sum −5 ✔. So (x − 2)(x − 3). In the United States the same game is called the <i>diamond problem</i>. Same idea, different names: finding two numbers with a given product and a given sum.</p>`
        },
        {
          label: "🔢 Like prime numbers",
          html: `<p>84 = 2 · 2 · 3 · 7 is obtained by dividing by prime numbers as long as you can. Polynomials behave the same way: the \"building blocks\" are the irreducible polynomials.</p>
<p>x² − 1 = (x − 1)(x + 1) is like 15 = 3 · 5. And just as 15 can be written in only one way as a product of primes (apart from the order), a polynomial also has a <b>unique factorisation</b> into irreducible factors. Taking out a common factor corresponds to finding the GCD, complete factorisation to prime factorisation: the same structure, in another world.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of factorising",
      nodes: [
        { id: "scomp", label: "Factorising", x: 50, y: 6, color: "#6366f1", html: "Writing a polynomial as a product of irreducible factors.", why: "It is useful because a product is zero only if one of its factors is zero: this is how equations are solved and algebraic fractions simplified." },
        { id: "distrib", label: "Distributive property", x: 15, y: 30, color: "#64748b", html: "a(b + c) = ab + ac.", why: "It is the axiom everything comes from: read from right to left it is taking out a common factor. Every factorisation is a multiplication read backwards." },
        { id: "racc", label: "Common factor", x: 15, y: 55, color: "#16a34a", html: "Take out the GCD of the terms.", why: "It extends the idea of the GCD of numbers to algebra: you take out what all the terms have in common." },
        { id: "notevoli", label: "Special products", x: 50, y: 32, color: "#f59e0b", html: "Perfect square, difference of squares, cubes.", why: "They are identities obtained by multiplying. Euclid (Elements, Book II) already proved the square of a sum with areas and rectangles." },
        { id: "trin", label: "Special trinomial", x: 50, y: 58, color: "#a855f7", html: "x² + sx + p = (x + m)(x + n).", why: "It comes from the expansion (x + m)(x + n) = x² + (m + n)x + mn: the relations between the sum and product of the roots." },
        { id: "ruff", label: "Ruffini's theorem", x: 85, y: 40, color: "#ef4444", html: "P(a) = 0 ⟺ (x − a) divides P(x).", why: "If you divide P(x) by (x − a) you get a quotient Q and a constant remainder R: P(x) = (x − a)Q(x) + R. Setting x = a gives P(a) = R, so the remainder is zero exactly when P(a) = 0." },
        { id: "irr", label: "Irreducible factors", x: 50, y: 88, color: "#0ea5e9", html: "Factors that cannot be broken down any further.", why: "They are the 'prime numbers' of polynomials: as with numbers, the complete factorisation is unique apart from the order." },
        { id: "uso", label: "Equations and fractions", x: 85, y: 78, color: "#14b8a6", html: "Applications: solving equations, simplifying algebraic fractions.", why: "In fractions you can only cancel factors, not terms: that is why you must factorise first." }
      ],
      edges: [
        ["distrib", "racc", "read backwards"],
        ["notevoli", "scomp", "recognised"],
        ["racc", "scomp", "first attempt"],
        ["trin", "scomp", "for trinomials"],
        ["ruff", "scomp", "degree ≥ 3"],
        ["scomp", "irr", "down to"],
        ["irr", "uso", "used for"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: trinomials and Ruffini",
      questions: [
        { type: "num", q: "x² − 7x + 10 = (x − 2)(x − k). What is k?", answer: 5, explain: "You need two numbers with sum −7 and product 10: −2 and −5." },
        { type: "num", q: "Given P(x) = x³ − 7x + 6, what is P(1)?", answer: 0, explain: "1 − 7 + 6 = 0: so (x − 1) divides P(x)." },
        { type: "mc", q: "Which of these polynomials is divisible by (x − 2)?", options: ["x³ − 8", "x³ + 8", "x² + 4"], answer: 0, explain: "For x = 2: 2³ − 8 = 0. Indeed x³ − 8 = (x − 2)(x² + 2x + 4)." }
      ]
    }
  ],
  glossary: [
    { t: "Factorisation", d: "Writing a polynomial as a product of factors of lower degree." },
    { t: "Factor", d: "Each of the polynomials that are multiplied together in a product." },
    { t: "Irreducible polynomial", d: "A polynomial that cannot be written as a product of polynomials of lower degree." },
    { t: "Common factor", d: "Taking the greatest common divisor out of all the terms." },
    { t: "Factorising by grouping", d: "Taking out factors from groups of terms, followed by taking out a common bracket." },
    { t: "Difference of two squares", d: "A² − B² = (A + B)(A − B)." },
    { t: "Special trinomial", d: "A trinomial x² + sx + p that factorises as (x + m)(x + n) with m + n = s and m·n = p." },
    { t: "Ruffini's theorem", d: "P(x) is divisible by (x − a) if and only if P(a) = 0 (the factor theorem)." },
    { t: "Root", d: "A value of the variable that makes the polynomial zero." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What do you get by taking out the common factor of 4x²y − 6xy²?", options: ["2xy(2x − 3y)", "4xy(x − y)", "2x²y²(2 − 3)"], answer: 0, explain: "The GCD of the coefficients 4 and 6 is 2; the common letters with the smallest exponent are x and y. 4x²y ÷ 2xy = 2x; 6xy² ÷ 2xy = 3y." },
      { type: "mc", q: "The factorisation of 9x² + 12x + 4 is…", options: ["(3x + 2)²", "(9x + 4)²", "(3x + 4)(3x + 1)"], answer: 0, explain: "(3x)² + 2·3x·2 + 2² = (3x + 2)²." },
      { type: "num", q: "x² − 3x − 10 = (x + 2)(x − k). Find k.", answer: 5, explain: "Sum −3, product −10: the numbers are +2 and −5." },
      { type: "num", q: "Work out 98 × 102 in your head using the difference of two squares.", answer: 9996, explain: "(100 − 2)(100 + 2) = 100² − 2² = 10 000 − 4 = 9 996." },
      { type: "tf", q: "If P(3) = 0, then (x − 3) is a factor of P(x).", answer: true, explain: "This is Ruffini's theorem." },
      { type: "order", q: "Put the factorising strategy in order.", items: ["Take out a common factor", "Recognise special products or a special trinomial", "Grouping or Ruffini", "Check that the factors are irreducible", "Verify by multiplying"], explain: "Always start by taking out a common factor and finish by checking." },
      { type: "text", q: "Which Italian mathematician gives his name to a rule for dividing a polynomial by x − a?", answer: ["ruffini", "paolo ruffini"], explain: "Paolo Ruffini (1765–1822)." },
      { type: "num", q: "Factorise 2x³ − 8x = 2x(x − 2)(x + 2) and find its value for x = 3.", answer: 30, explain: "2·3·1·5 = 30. Directly: 2·27 − 24 = 30." },
      { type: "mc", q: "The complete factorisation of x⁴ − 1 is…", options: ["(x² + 1)(x + 1)(x − 1)", "(x² − 1)²", "(x + 1)⁴"], answer: 0, explain: "x⁴ − 1 = (x² + 1)(x² − 1) = (x² + 1)(x + 1)(x − 1); x² + 1 is irreducible." },
      { type: "mc", q: "Why is factorising useful for simplifying algebraic fractions?", options: ["Because you can only cancel factors, not the terms of a sum", "Because it makes polynomials longer", "Because it gets rid of the letters"], answer: 0, explain: "You can only cancel the common factors of the numerator and denominator." }
    ]
  }
});
