TOPIC('en', {
  id: "l2-mat-radicali",
  title: "Real numbers and radicals",
  intro: "Draw a square with side 1 and its diagonal: how long is it? No fraction can measure it exactly. This was one of the most shocking discoveries of Greek mathematics: there are lengths that are not ratios of whole numbers. To describe them we need <b>irrational numbers</b> and <b>radicals</b>. In this lesson we complete the set of <b>real numbers</b>, learn to calculate with roots (simplifying, multiplying, adding) and to <b>rationalise</b> fractions with roots in the denominator.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "From rational to real numbers",
      html: `<p>In previous years you met <b>ℕ</b> (natural numbers), <b>ℤ</b> (integers) and <b>ℚ</b> (rational numbers: fractions a/b with b ≠ 0, whose decimal form is <b>terminating or recurring</b>). But they are not enough. The number whose square is 2, √2, <b>is not rational</b>: its decimal expansion is infinite and <b>non-recurring</b>: 1.41421356237…</p>
<p>Numbers with an infinite, non-recurring decimal expansion are called <b>irrational</b> (ℚᶜ or 𝕀). Rational and irrational numbers together form the set of <b>real numbers ℝ</b>. The real numbers can be put into one-to-one correspondence with the points of a <b>line</b>: every point is a number and every number is a point, with no gaps. That is why we speak of the <b>real number line</b>.</p>
<p>Examples of irrational numbers: √2, √3, √5, the golden ratio φ = (1 + √5)/2 ≈ 1.618, and the famous <b>π</b> ≈ 3.14159… (the ratio of circumference to diameter) and <b>e</b> ≈ 2.71828… (the base of natural logarithms). Careful: √4 = 2 and √(9/25) = 3/5 are roots of rational numbers, but they are rational!</p>
<p><b>Approximations</b> are needed in practical calculations: √2 ≈ 1.41 rounded down (to the nearest hundredth) and ≈ 1.42 rounded up. For an irrational number you can always give a <b>lower and an upper approximation</b> to any precision you like.</p>`
    },
    {
      type: "svg",
      title: "The diagonal of a square with side 1",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="30" width="150" height="150" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<line x1="60" y1="180" x2="210" y2="30" stroke="#ea580c" stroke-width="4"/>
<text x="135" y="205" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">1</text>
<text x="40" y="110" font-size="16" text-anchor="end" fill="#1d4ed8" font-weight="bold">1</text>
<text x="150" y="95" font-size="16" fill="#9a3412" font-weight="bold">d = √2</text>
<text x="240" y="60" font-size="16" fill="#334155">d² = 1² + 1² = 2</text>
<text x="240" y="90" font-size="16" fill="#334155">d ≈ 1.41421356…</text>
<text x="240" y="120" font-size="16" fill="#334155">infinite, non-recurring decimals</text>
<line x1="40" y1="260" x2="560" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="252" x2="60" y2="268" stroke="#475569" stroke-width="2"/>
<line x1="272" y1="252" x2="272" y2="268" stroke="#475569" stroke-width="2"/>
<line x1="272" y1="260" x2="272" y2="260" stroke="#ea580c"/>
<line x1="60" y1="260" x2="272" y2="260" stroke="#ea580c" stroke-width="5"/>
<circle cx="272" cy="260" r="7" fill="#ea580c"/>
<text x="60" y="288" font-size="16" text-anchor="middle" fill="#334155">0</text>
<text x="272" y="288" font-size="16" text-anchor="middle" fill="#9a3412" font-weight="bold">√2</text>
<text x="132" y="248" font-size="14" text-anchor="middle" fill="#9a3412">transferred with compasses</text>
</svg>`,
      caption: "By Pythagoras' theorem the diagonal of a square with side 1 measures √2; transferred onto the number line with compasses, it marks the point of the number √2."
    },
    {
      type: "text",
      title: "Why √2 is not rational",
      html: `<p>The proof, already known to the Greeks, is a masterpiece of <b>proof by contradiction</b>:</p>
<ol>
<li>Suppose that √2 = a/b with a and b integers, and the fraction <b>in its lowest terms</b> (a and b with no common factors).</li>
<li>Squaring: 2 = a²/b², that is <b>a² = 2b²</b>. So a² is even, and therefore <b>a is even</b> (the square of an odd number is odd): a = 2k.</li>
<li>Substituting: 4k² = 2b² → <b>b² = 2k²</b>, so <b>b is even</b> too.</li>
<li>But then a and b are both even: the fraction was not in its lowest terms. <b>Contradiction.</b> So √2 is not rational.</li>
</ol>
<p>The same reasoning shows that √n is irrational whenever n is not a perfect square.</p>`
    },
    {
      type: "text",
      title: "Definition of the n-th root",
      html: `<p>The <b>n-th root</b> of a real number a, written ⁿ√a, is the number which, raised to the power n, gives a. We need to distinguish:</p>
<ul>
<li><b>Even index n</b> (square root, fourth root…): the radicand must be <b>a ≥ 0</b>, and ⁿ√a is by definition the <b>non-negative</b> value. So √9 = 3 (not ±3; the solutions of x² = 9 are ±3, but the symbol √9 means only 3). Also √(a²) = <b>|a|</b>: √((−5)²) = √25 = 5, not −5.</li>
<li><b>Odd index n</b> (cube root…): the radicand can be <b>any</b> real number, and the sign is kept: ³√(−8) = −2.</li>
</ul>
<p>For the <b>domain</b> (conditions of existence) of an expression with radicals: with an even index the radicand must be ≥ 0 (&gt; 0 if the even root is in a denominator); with an odd index there is no restriction. Example: √(x − 3) exists for x ≥ 3; 1/√(x − 3) for x &gt; 3.</p>
<p>A <b>radical</b> is an expression ⁿ√a; two radicals are called <b>like radicals</b> if they have the same index and the same radicand, and differ only in the coefficient (e.g. 3√2 and 5√2).</p>`
    },
    {
      type: "remember",
      title: "Properties of radicals (a, b ≥ 0)",
      html: `<ul>
<li><b>Invariance property</b>: ⁿ√(aᵐ) = ⁿᵏ√(aᵐᵏ). E.g. ⁴√4 = √2 (simplify by 2: ⁴√(2²) = √2).</li>
<li><b>Product</b>: ⁿ√a · ⁿ√b = ⁿ√(a·b) (same index).</li>
<li><b>Quotient</b>: ⁿ√a : ⁿ√b = ⁿ√(a : b), with b ≠ 0.</li>
<li><b>Power</b>: (ⁿ√a)ᵐ = ⁿ√(aᵐ).</li>
<li><b>Root of a root</b>: ᵐ√(ⁿ√a) = ᵐⁿ√a.</li>
<li><b>Taking a factor out of the root</b>: √(a²b) = a√b (if a ≥ 0). <b>Bringing it inside</b>: a√b = √(a²b).</li>
</ul>
<p>⚠️ A sum does <b>not</b> split: √(a + b) ≠ √a + √b. Example: √(9 + 16) = 5, whereas 3 + 4 = 7.</p>`
    },
    {
      type: "example",
      title: "Guided example: simplifying",
      html: `<p>Simplify <b>√72</b> and <b>³√54</b>.</p>
<ul>
<li>√72: factorise 72 = 2³ · 3² = 2 · 2² · 3² → √72 = <b>6√2</b> (take out 2 and 3: 2·3 = 6).</li>
<li>³√54: 54 = 2 · 3³ → ³√54 = <b>3·³√2</b> (take out the 3 with exponent 3).</li>
</ul>
<p>Rule: factorise into primes and take out the factors whose exponent is <b>at least equal to the index</b>: each group of n equal factors under ⁿ√ comes out as 1 factor.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: roots and real numbers",
      questions: [
        { type: "mc", q: "Which of these numbers is irrational?", options: ["√49", "√50", "√(1/4)"], answer: 1, explain: "√49 = 7 and √(1/4) = 1/2 are rational; 50 is not a perfect square, so √50 is irrational." },
        { type: "num", q: "What is √((−7)²)?", answer: 7, explain: "√(a²) = |a|: √49 = 7." },
        { type: "mc", q: "For which x does √(x − 3) exist?", options: ["x &gt; 3", "x ≥ 3", "for every x"], answer: 1, explain: "The radicand must be ≥ 0: x − 3 ≥ 0 → x ≥ 3." }
      ]
    },
    {
      type: "text",
      title: "Operations with radicals",
      html: `<p><b>Addition and subtraction.</b> You can add <b>only like radicals</b>, by adding their coefficients, just like like monomials. Often you need to <b>simplify</b> first.</p>
<p>Example: √8 + √18 − √2 = 2√2 + 3√2 − √2 = <b>4√2</b>.</p>
<p><b>Product and quotient.</b> If the indices are the same: √6 · √3 = √18 = 3√2; √20 : √5 = √4 = 2. If the indices are different, <b>reduce them to the same index</b> (using the LCM of the indices): √2 · ³√2 = ⁶√(2³) · ⁶√(2²) = ⁶√32.</p>
<p><b>Power and root of a root.</b> (³√2)² = ³√4; √(³√5) = ⁶√5.</p>
<p><b>Special products with radicals.</b> All the special products still apply: (√a + √b)(√a − √b) = a − b, and (√a ± √b)² = a + b ± 2√(ab). Examples: (√3 + √2)(√3 − √2) = 3 − 2 = <b>1</b>; (√5 + 1)² = 5 + 1 + 2√5 = <b>6 + 2√5</b>.</p>
<p><b>Comparison.</b> To compare two radicals with different indices, reduce them to the same index: √3 and ³√5 → ⁶√27 and ⁶√25 → √3 &gt; ³√5.</p>`
    },
    {
      type: "text",
      title: "Rationalising the denominator",
      html: `<p>To <b>rationalise</b> a fraction means to turn it into an equivalent one <b>with no roots in the denominator</b>. It is useful for comparing values and for calculations (historically, dividing by a number like 1.41421… by hand was painful; now computers do it, but the technique is still valuable in algebra).</p>
<p><b>Case 1: single-term denominator.</b> Multiply numerator and denominator by the root that appears:</p>
<p style="text-align:center">3/√5 = 3√5 / (√5·√5) = <b>3√5 / 5</b></p>
<p>With a root of index n, multiply by the radical that brings the exponent up to n: 1/³√2 = ³√4 / (³√2·³√4) = <b>³√4 / 2</b>.</p>
<p><b>Case 2: two-term denominator with a square root.</b> Multiply by the <b>conjugate</b> (same terms, opposite sign), so the denominator becomes a difference of squares: (a − b)(a + b) = a² − b².</p>
<p>2/(√5 − 1) = 2(√5 + 1) / ((√5 − 1)(√5 + 1)) = 2(√5 + 1)/(5 − 1) = <b>(√5 + 1)/2</b></p>
<p>1/(√3 + √2) = (√3 − √2) / (3 − 2) = <b>√3 − √2</b></p>`
    },
    {
      type: "example",
      title: "Example: the A4 sheet",
      html: `<p>Sheets in the <b>A</b> series (A4, A3…) have a long side equal to <b>√2</b> times the short side. If the short side is s, the long side is s√2. Folding the sheet in half gives a rectangle with short side s√2/2 and long side s, and the ratio is s : (s√2/2) = 2/√2 = <b>√2</b>: folding keeps the shape, so all A formats are <b>similar</b> to each other.</p>
<p>If the short side of A4 is 21 cm, the long side is 21√2 ≈ 29.7 cm: indeed an A4 sheet measures 21 × 29.7 cm. Rationalising the short/long ratio gives 1/√2 = <b>√2/2 ≈ 0.707</b>.</p>`
    },
    {
      type: "widget",
      title: "Pythagoras' theorem and radicals",
      widget: "pythagoras",
      options: {},
      caption: "Try legs 1 and 1: the hypotenuse is √2. With legs 1 and 2 it is √5. With 3 and 4 it is 5, a rational number: only certain triples give whole numbers."
    },
    {
      type: "curiosity",
      title: "Did you know…? The Pythagorean secret",
      html: `<p>According to tradition, the discovery that the diagonal of a square is <b>incommensurable</b> with its side shocked the Pythagorean school, which believed that "all is number", meaning ratios of whole numbers. A legend handed down by ancient sources, whose details historians doubt, credits the discovery to <b>Hippasus of Metapontum</b>, who was supposedly punished for revealing it. The historical fact remains: Greek mathematicians discovered that <i>incommensurable</i> quantities exist, and this led Euclid to a rigorous treatment of proportions in his <i>Elements</i>.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? π is not rational",
      html: `<p>That π is irrational was proved in 1761 by <b>Johann Heinrich Lambert</b>; that <b>e</b> is irrational had already been shown by <b>Euler</b> in 1737. In 1882 <b>Ferdinand von Lindemann</b> showed that π is also <b>transcendental</b> (it is not the solution of any polynomial equation with integer coefficients), which settled the thousand-year-old problem of <b>squaring the circle</b>: constructing with straightedge and compasses a square with the same area as a given circle is impossible.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand radicals",
      intro: "A radical is not just a symbol to manipulate: here are some ways of seeing it.",
      tabs: [
        {
          label: "📐 As the side of a square",
          html: `<p>√a is <b>the side of a square with area a</b>. So √2 is the side of a square with area 2: doubling the area of a square with side 1 does not double the side, it multiplies it by √2 ≈ 1.41. In general, if the area is multiplied by k, the side is multiplied by √k. Simplifying √72 = 6√2 means that a square of area 72 has a side 6 times longer than a square of area 2 (indeed 6² · 2 = 72).</p>`
        },
        {
          label: "🔢 Approximating by hand",
          html: `<p>To estimate √2 you can narrow it down with <b>intervals</b> (the bisection method): 1² = 1 &lt; 2 &lt; 4 = 2²; so 1 &lt; √2 &lt; 2. Try 1.5: 2.25 &gt; 2 → 1 &lt; √2 &lt; 1.5; try 1.4: 1.96 &lt; 2 → 1.4 &lt; √2 &lt; 1.5; try 1.41: 1.9881; 1.42: 2.0164 → <b>1.41 &lt; √2 &lt; 1.42</b>. Each step gains one decimal place. The Babylonians (tablet YBC 7289, around 1800–1600 BC) knew a value for √2 of about 1.41421, which is very accurate.</p>`
        },
        {
          label: "🔼 As a fractional power",
          html: `<p>You can write ⁿ√a = a<sup>1/n</sup>, and in general ⁿ√(aᵐ) = a<sup>m/n</sup>. This way the properties of radicals become the properties of powers you already know: √a · √a = a^(1/2)·a^(1/2) = a^1 = a; the root of a root is (a^(1/n))^(1/m) = a^(1/(nm)). This notation, used systematically by Newton, simplifies calculations and makes it possible to define powers with real exponents, the basis of logarithms and exponential functions.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of real numbers and radicals",
      nodes: [
        { id: "Q", label: "Rational numbers ℚ", x: 18, y: 8, color: "#16a34a", html: "Fractions a/b: terminating or recurring decimals.", why: "They arise so that we can divide and measure precisely, but they are not enough to measure every length." },
        { id: "irr", label: "Irrational numbers", x: 82, y: 8, color: "#f59e0b", html: "Infinite non-recurring decimals: √2, π, e…", why: "The diagonal of a square is not commensurable with its side: a Greek discovery, provable by contradiction." },
        { id: "R", label: "Real numbers ℝ", x: 50, y: 30, color: "#6366f1", html: "The union of rational and irrational numbers: all the points of the line.", why: "The correspondence between numbers and points on the line makes ℝ the foundation of calculus." },
        { id: "rad", label: "Radicals", x: 20, y: 55, color: "#a855f7", html: "ⁿ√a: the number which, raised to the power n, gives a.", why: "They are the inverse operation of raising to a power; with an even index there is the condition a ≥ 0." },
        { id: "prop", label: "Properties", x: 50, y: 62, color: "#0ea5e9", html: "Product, quotient, power, invariance.", why: "They come from the properties of powers: ⁿ√a = a^(1/n)." },
        { id: "op", label: "Operations", x: 80, y: 55, color: "#ef4444", html: "Simplify, add like radicals, multiply, rationalise.", why: "Writing results in standard form lets us compare them and check equalities." },
        { id: "raz", label: "Rationalisation", x: 80, y: 85, color: "#14b8a6", html: "Removing roots from the denominator, using the conjugate if it has two terms.", why: "It relies on the special product (a − b)(a + b) = a² − b², which 'cancels' square roots." },
        { id: "geo", label: "Geometry", x: 20, y: 85, color: "#22c55e", html: "Roots measure diagonals, heights, apothems.", why: "Pythagoras' theorem naturally produces radicals: this is how irrational numbers were discovered." }
      ],
      edges: [
        ["Q", "R", "completed into"],
        ["irr", "R", "completed into"],
        ["R", "rad", "allows"],
        ["rad", "prop", "obey"],
        ["prop", "op", "make possible"],
        ["op", "raz", "include"],
        ["geo", "irr", "led to the discovery of"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: calculations",
      questions: [
        { type: "mc", q: "√12 is equal to…", options: ["2√3", "3√2", "6"], answer: 0, explain: "12 = 2² · 3 → √12 = 2√3." },
        { type: "mc", q: "Rationalising 6/√3 gives…", options: ["2√3", "6√3", "√3/2"], answer: 0, explain: "6√3/3 = 2√3." },
        { type: "num", q: "Calculate (√7 + √3)(√7 − √3).", answer: 4, explain: "Difference of squares: 7 − 3 = 4." }
      ]
    }
  ],
  glossary: [
    { t: "Irrational number", d: "A number with an infinite, non-recurring decimal expansion; it cannot be written as a fraction." },
    { t: "Real numbers", d: "The set ℝ made up of rational and irrational numbers: it corresponds to all the points of the line." },
    { t: "n-th root", d: "ⁿ√a is the number which, raised to the power n, gives a." },
    { t: "Radicand", d: "The number or expression under the root sign." },
    { t: "Index", d: "The number n that indicates the root (2 for the square root, 3 for the cube root…)." },
    { t: "Like radicals", d: "Radicals with the same index and the same radicand: they are added like like monomials." },
    { t: "Invariance property", d: "Multiplying or dividing the index and the exponent of the radicand by the same number does not change the radical." },
    { t: "Rationalisation", d: "Turning a fraction into an equivalent one with no radicals in the denominator." },
    { t: "Conjugate", d: "The binomial with the same terms but the opposite sign in the middle: √a + √b and √a − √b." },
    { t: "Proof by contradiction", d: "A proof that starts from the opposite of what is to be proved and arrives at a contradiction." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which number is irrational?", options: ["√81", "√8", "0.333…"], answer: 1, explain: "√81 = 9 and 0.333… = 1/3 are rational; √8 = 2√2 is irrational." },
      { type: "mc", q: "√75 is equal to…", options: ["5√3", "3√5", "15√5"], answer: 0, explain: "75 = 5² · 3, so √75 = 5√3." },
      { type: "num", q: "Calculate 3√2 + 5√2 − √2 and give the coefficient of √2.", answer: 7, explain: "(3 + 5 − 1)√2 = 7√2." },
      { type: "mc", q: "The value of √(a²) for a = −4 is…", options: ["−4", "4", "it does not exist"], answer: 1, explain: "√(a²) = |a| = 4." },
      { type: "mc", q: "Rationalise 4/(√5 − 1).", options: ["√5 + 1", "(√5 + 1)/4", "4(√5 − 1)"], answer: 0, explain: "4(√5 + 1)/(5 − 1) = √5 + 1." },
      { type: "num", q: "Calculate (√5 + 2)(√5 − 2).", answer: 1, explain: "5 − 4 = 1." },
      { type: "tf", q: "√(a + b) = √a + √b for all a, b ≥ 0.", answer: false, explain: "√(9 + 16) = 5, but √9 + √16 = 7." },
      { type: "mc", q: "The expression √(2x − 6) is defined for…", options: ["x ≥ 3", "x &gt; 6", "every x"], answer: 0, explain: "2x − 6 ≥ 0 → x ≥ 3." },
      { type: "order", q: "Put the steps of the proof that √2 is irrational in order.", items: ["Suppose √2 = a/b with the fraction in lowest terms", "We get a² = 2b², so a is even", "We get that b is even too", "Contradiction with the fraction being in lowest terms"], explain: "The proof by contradiction leads to two even numbers in a fraction that was supposed to be in lowest terms." },
      { type: "text", q: "What is the binomial √a − √b called with respect to √a + √b, used for rationalising?", answer: ["conjugate", "the conjugate", "conjugate binomial"], explain: "The conjugate: multiplying them gives a − b." }
    ]
  }
});
