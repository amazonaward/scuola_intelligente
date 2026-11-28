TOPIC('en', {
  id: "l2-mat-equazioni-secondo-grado",
  title: "Quadratic equations",
  intro: "A ball thrown upwards, the area of a football pitch whose perimeter you know, the best price to maximise a profit: in all these situations the unknown appears <b>squared</b>. <b>Quadratic equations</b> (second-degree equations) are among the oldest problems in mathematics (the Babylonians already solved them) and they have a powerful, compact formula. We will learn to use it, understand the role of the <b>discriminant</b> (the number that decides how many solutions there are), link the solutions to the coefficients and <b>factorise</b> trinomials.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Standard form and the first cases",
      html: `<p>A <b>second-degree</b> (or quadratic) equation in x, written in <b>standard form</b>, is:</p>
<p style="text-align:center"><b>ax² + bx + c = 0 &nbsp;&nbsp; with a ≠ 0</b></p>
<p>a, b, c are the <b>coefficients</b> (a is the coefficient of x², b that of x, c the <b>constant term</b>). If a = 0 the equation would be of the first degree. The <b>solutions</b> (or roots) are the values of x that make it true; there are at most two.</p>
<p>If b or c (or both) are zero, the equation is <b>incomplete</b> and can be solved without the formula:</p>
<ul>
<li><b>Pure</b> (b = 0): ax² + c = 0 → x² = −c/a. If −c/a &gt; 0 the solutions are <b>x = ±√(−c/a)</b>; if −c/a &lt; 0 there are no real solutions. E.g.: 3x² − 12 = 0 → x² = 4 → x = ±2.</li>
<li><b>No constant term</b> (c = 0): ax² + bx = 0 → <b>x(ax + b) = 0</b> (taking out the common factor) → x = 0 or x = −b/a. We use the <b>zero product property</b>: a product is zero if and only if at least one factor is zero. E.g.: x² − 7x = 0 → x(x − 7) = 0 → x = 0 or x = 7. One solution is always 0!</li>
<li><b>Monomial</b> (b = c = 0): ax² = 0 → <b>x = 0</b> (double root).</li>
</ul>
<p>⚠️ Classic mistake: in x² = 7x do not divide by x (you would lose x = 0): bring everything to the left and factorise.</p>`
    },
    {
      type: "text",
      title: "The quadratic formula and the discriminant",
      html: `<p>For the complete equation ax² + bx + c = 0 we use the <b>quadratic formula</b>:</p>
<p style="text-align:center"><b>x = (−b ± √Δ) / (2a) &nbsp;&nbsp; with &nbsp; Δ = b² − 4ac</b></p>
<p>The number <b>Δ</b> (delta, or the <b>discriminant</b>) decides how many real solutions there are:</p>
<ul>
<li><b>Δ &gt; 0</b>: <b>two distinct real solutions</b> x₁ = (−b − √Δ)/(2a) and x₂ = (−b + √Δ)/(2a).</li>
<li><b>Δ = 0</b>: <b>two equal real solutions</b> (a double root): x = −b/(2a).</li>
<li><b>Δ &lt; 0</b>: <b>no real solutions</b>, because a negative number has no real square root.</li>
</ul>
<p><b>Examples.</b></p>
<ul>
<li>x² − 5x + 6 = 0: Δ = 25 − 24 = 1 → x = (5 ± 1)/2 → <b>x = 2 or x = 3</b>.</li>
<li>x² − 4x + 4 = 0: Δ = 16 − 16 = 0 → <b>x = 2</b> (double).</li>
<li>x² + x + 1 = 0: Δ = 1 − 4 = −3 &lt; 0 → <b>no real solutions</b>.</li>
<li>2x² − 3x − 2 = 0: Δ = 9 + 16 = 25 → x = (3 ± 5)/4 → <b>x = 2 or x = −1/2</b>.</li>
</ul>
<p><b>Reduced formula</b>: if b is even, b = 2k (that is k = b/2), it is easier to use Δ/4 = k² − ac and <b>x = (−k ± √(Δ/4))/a</b>. E.g.: x² − 6x − 7 = 0: k = −3, Δ/4 = 9 + 7 = 16 → x = 3 ± 4 → <b>x = 7 or x = −1</b>.</p>`
    },
    {
      type: "svg",
      title: "The discriminant and the parabola",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="100" y="26" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">Δ &gt; 0</text>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#9a3412" font-weight="bold">Δ = 0</text>
<text x="500" y="26" font-size="16" text-anchor="middle" fill="#991b1b" font-weight="bold">Δ &lt; 0</text>
<line x1="10" y1="140" x2="190" y2="140" stroke="#475569" stroke-width="2"/>
<path d="M20 70 Q100 270 180 70" fill="none" stroke="#2563eb" stroke-width="4"/>
<circle cx="56" cy="140" r="7" fill="#16a34a"/>
<circle cx="144" cy="140" r="7" fill="#16a34a"/>
<text x="100" y="220" font-size="16" text-anchor="middle" fill="#166534">2 solutions</text>
<line x1="210" y1="170" x2="390" y2="170" stroke="#475569" stroke-width="2"/>
<path d="M220 70 Q300 270 380 70" fill="none" stroke="#2563eb" stroke-width="4"/>
<circle cx="300" cy="170" r="7" fill="#ea580c"/>
<text x="300" y="220" font-size="16" text-anchor="middle" fill="#9a3412">1 solution (double)</text>
<line x1="410" y1="200" x2="590" y2="200" stroke="#475569" stroke-width="2"/>
<path d="M420 70 Q500 270 580 70" fill="none" stroke="#2563eb" stroke-width="4"/>
<text x="500" y="240" font-size="16" text-anchor="middle" fill="#991b1b">no real solutions</text>
<text x="300" y="282" font-size="14" text-anchor="middle" fill="#334155">The solutions are the points where the parabola y = ax² + bx + c meets the x-axis</text>
</svg>`,
      caption: "The graph of y = ax² + bx + c is a parabola: the solutions of the equation are the x-coordinates of the points where it touches the x-axis."
    },
    {
      type: "remember",
      title: "The method",
      html: `<ol>
<li>Write the equation in <b>standard form</b> ax² + bx + c = 0 (with a &gt; 0 if possible).</li>
<li>If it is <b>incomplete</b>, take out the common factor or take the square root (pure / no constant term).</li>
<li>If it is complete, calculate <b>Δ = b² − 4ac</b> (or Δ/4 if b is even).</li>
<li>Look at the sign: Δ &lt; 0 no real solutions; Δ = 0 one double root; Δ &gt; 0 two distinct roots.</li>
<li>Apply the formula and simplify.</li>
<li><b>Check</b>: substitute the solutions, or check the sum and product (see below).</li>
</ol>`
    },
    {
      type: "widget",
      title: "How many solutions does it have?",
      widget: "classify",
      options: { groups: ["Two distinct solutions", "One double solution", "No real solutions"], items: [
        ["x² − 5x + 6 = 0", 0],
        ["x² − 4x + 4 = 0", 1],
        ["x² + 2x + 5 = 0", 2],
        ["2x² − x − 1 = 0", 0],
        ["x² + 6x + 9 = 0", 1],
        ["x² + x + 1 = 0", 2],
        ["x² − 3 = 0", 0]
      ] },
      caption: "Calculate Δ = b² − 4ac and look at its sign: it tells you how many real solutions there are."
    },
    {
      type: "example",
      title: "Worked example: the rectangular field",
      html: `<p>A rectangular field has a perimeter of 28 m and an area of 48 m². What are its dimensions?</p>
<ul>
<li>Half the perimeter: base + height = 14. Let x be the base: the height is 14 − x.</li>
<li>Area: x(14 − x) = 48 → 14x − x² = 48 → <b>x² − 14x + 48 = 0</b>.</li>
<li>Δ/4 = 49 − 48 = 1 → x = 7 ± 1 → x = 6 or x = 8.</li>
<li>The two solutions correspond to the same rectangle (6 × 8 or 8 × 6). Check: perimeter 2(6 + 8) = 28 ✔️, area 48 ✔️.</li>
</ul>`
    },
    {
      type: "example",
      title: "Worked example: the ball thrown upwards",
      html: `<p>A ball is thrown upwards from the ground at 20 m/s. With g ≈ 10 m/s², the height after t seconds is, in a simplified model, h(t) = 20t − 5t². After how long does it land?</p>
<ul>
<li>It lands when h = 0: 20t − 5t² = 0 → 5t(4 − t) = 0 (an equation with <b>no constant term</b>).</li>
<li>t = 0 (the throw) or <b>t = 4 s</b> (the landing).</li>
<li>By the symmetry of the parabola, the highest point is halfway, at t = 2 s, with h(2) = 40 − 20 = <b>20 m</b>.</li>
<li>When is the ball at 15 m? 20t − 5t² = 15 → t² − 4t + 3 = 0 → t = 1 or t = 3: it passes 15 m <b>twice</b>, on the way up and on the way down.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: formula and discriminant",
      questions: [
        { type: "num", q: "Calculate the discriminant of x² − 6x + 5 = 0.", answer: 16, explain: "Δ = 36 − 20 = 16." },
        { type: "mc", q: "The equation x² + 4 = 0 has…", options: ["x = ±2", "no real solutions", "x = 0"], answer: 1, explain: "x² = −4 is impossible in ℝ: a square cannot be negative." },
        { type: "mc", q: "The solutions of x² − 7x = 0 are…", options: ["0 and 7", "only 7", "±7"], answer: 0, explain: "x(x − 7) = 0 → x = 0 or x = 7." }
      ]
    },
    {
      type: "text",
      title: "Relations between roots and coefficients",
      html: `<p>If the equation ax² + bx + c = 0 has roots x₁ and x₂ (real, with Δ ≥ 0), the quadratic formula reveals two surprising relations (<b>Viète's formulas</b>):</p>
<p style="text-align:center"><b>sum: x₁ + x₂ = −b/a &nbsp;&nbsp;&nbsp;&nbsp; product: x₁ · x₂ = c/a</b></p>
<p><b>Why?</b> Adding (−b − √Δ)/(2a) + (−b + √Δ)/(2a) the radicals cancel out, leaving −2b/(2a) = −b/a. Multiplying gives (b² − Δ)/(4a²) = 4ac/(4a²) = c/a.</p>
<p><b>Practical uses.</b></p>
<ul>
<li><b>Checking</b> the solutions without substituting them: x² − 5x + 6 = 0 has sum 5 and product 6; indeed 2 + 3 = 5 and 2 · 3 = 6.</li>
<li><b>Solving in your head</b> equations with a = 1: look for two numbers whose sum is s = −b and whose product is p = c. x² − 7x + 12 = 0: two numbers with sum 7 and product 12 → <b>3 and 4</b>.</li>
<li><b>Building an equation</b> with two given roots: <b>x² − s·x + p = 0</b>. Roots 2 and −5: s = −3, p = −10 → x² + 3x − 10 = 0.</li>
<li><b>Working out the signs of the roots</b>: if p &lt; 0 the roots have opposite signs; if p &gt; 0 and s &gt; 0 they are both positive; if p &gt; 0 and s &lt; 0 both negative.</li>
</ul>
<p><b>Factorising the trinomial.</b> If Δ ≥ 0, <b>ax² + bx + c = a(x − x₁)(x − x₂)</b>. E.g.: 2x² − 3x − 2 = 2(x − 2)(x + 1/2) = (x − 2)(2x + 1). If Δ &lt; 0 the trinomial <b>cannot be factorised</b> (in ℝ): it is called irreducible.</p>`
    },
    {
      type: "example",
      title: "Example: equations with a parameter and fractional equations",
      html: `<p><b>With a parameter.</b> For which values of k does the equation x² − 4x + k = 0 have two distinct real solutions? We need Δ &gt; 0: 16 − 4k &gt; 0 → <b>k &lt; 4</b>. With k = 4 there is a double root (x = 2); with k &gt; 4 there are none.</p>
<p><b>Fractional.</b> 1/(x − 1) + 1/x = 3/2. Domain: x ≠ 0, x ≠ 1. LCM = 2x(x − 1): 2x + 2(x − 1) = 3x(x − 1) → 4x − 2 = 3x² − 3x → 3x² − 7x + 2 = 0. Δ = 49 − 24 = 25 → x = (7 ± 5)/6 → x = 2 or x = 1/3. Both satisfy the domain conditions: <b>acceptable solutions</b>.</p>
<p>As always, with fractional equations you check the domain conditions at the end.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Four thousand years of quadratics",
      html: `<p>Babylonian clay tablets from about <b>4000 years ago</b> contain problems that translate into quadratic equations (areas of rectangles with a given half-perimeter, like our field example), with procedures equivalent to the formula. In the 9th century <b>al-Khwārizmī</b> classified them and solved them with geometric constructions (<b>completing the square</b>); modern symbols came much later, with <b>Viète</b> and <b>Descartes</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? What about the third, fourth and fifth degree?",
      html: `<p>A formula for cubic equations was found in the 16th century (Scipione del Ferro, Niccolò Tartaglia, Gerolamo Cardano), and soon afterwards one for quartic equations (Lodovico Ferrari). For the <b>fifth degree</b>, however, in 1824 the Norwegian <b>Niels Henrik Abel</b> (after an attempt by Paolo Ruffini) proved that <b>there is no general formula using radicals</b>. Even the famous <b>golden ratio</b> φ is the solution of a quadratic: x² − x − 1 = 0, with Δ = 5 and φ = (1 + √5)/2 ≈ 1.618.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to solve",
      intro: "The formula is a powerful tool, but not the only one. Here are historical and visual methods that help you understand where it comes from.",
      tabs: [
        {
          label: "🟦 Completing the square",
          html: `<p>This is al-Khwārizmī's method, and the formula is derived from it. Take <b>x² + 6x = 16</b>: imagine a square with side x and two 3 × x rectangles next to it; to turn this into a bigger square, a small 3 × 3 = 9 square is missing. Add 9 to both sides: <b>x² + 6x + 9 = 25</b>, that is <b>(x + 3)² = 25</b>. So x + 3 = ±5 → <b>x = 2 or x = −8</b>. The same step with general coefficients (divide by a, add (b/2a)² to both sides) leads to the quadratic formula.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><rect x="60" y="50" width="120" height="120" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/><text x="120" y="118" font-size="18" text-anchor="middle" fill="#1d4ed8" font-weight="bold">x²</text><rect x="180" y="50" width="60" height="120" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/><text x="210" y="118" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">3x</text><rect x="60" y="170" width="120" height="60" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/><text x="120" y="206" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">3x</text><rect x="180" y="170" width="60" height="60" fill="#fecaca" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/><text x="210" y="206" font-size="16" text-anchor="middle" fill="#991b1b" font-weight="bold">9</text><text x="270" y="110" font-size="16" fill="#334155">x² + 6x = 16</text><text x="270" y="140" font-size="16" fill="#334155">+ 9 to complete it</text><text x="270" y="170" font-size="16" fill="#334155">(x + 3)² = 25</text><text x="270" y="200" font-size="16" fill="#334155" font-weight="bold">x = 2 or x = −8</text></svg>`
        },
        {
          label: "🔍 Sum and product",
          html: `<p>For x² + bx + c = 0 with leading coefficient 1, look for two numbers that <b>multiply</b> to give c and <b>add</b> to give −b. Example: x² − 8x + 15 = 0. Pairs with product 15: (1, 15), (3, 5). With sum 8: <b>3 and 5</b>. So x = 3 or x = 5. This is the factorisation (x − 3)(x − 5) = 0 plus the zero product property. It works with small whole numbers; otherwise use the formula.</p>`
        },
        {
          label: "📈 With the parabola",
          html: `<p>Draw y = x² − 4x + 3. It is a parabola that meets the x-axis at x = 1 and x = 3: these are the solutions of x² − 4x + 3 = 0. The <b>vertex</b> lies halfway between the two roots, at x = −b/(2a) = 2, where y = −1 (the minimum). Δ &gt; 0: the parabola crosses the axis; Δ = 0: it just touches it at the vertex; Δ &lt; 0: it does not reach it. If a &lt; 0 the parabola "opens downwards", but the solutions are still the points on the x-axis.</p>`,
          widget: "numberLine",
          options: { min: -2, max: 6, step: 1, marks: [1, 3, 2] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of quadratic equations",
      nodes: [
        { id: "eq", label: "ax² + bx + c = 0", x: 50, y: 6, color: "#6366f1", html: "Quadratic equation (a ≠ 0).", why: "It arises from problems about areas and motion, as far back as ancient Babylon; the unknown appears squared." },
        { id: "inc", label: "Incomplete equations", x: 15, y: 30, color: "#16a34a", html: "Pure (b = 0), no constant term (c = 0), monomial (b = c = 0).", why: "They are solved by taking the square root or by factorising and using the zero product property." },
        { id: "delta", label: "Discriminant Δ", x: 50, y: 32, color: "#f59e0b", html: "Δ = b² − 4ac: decides the number of solutions.", why: "It is the number under the root in the formula: you cannot take the square root of a negative number (in ℝ), so with Δ &lt; 0 there are no real solutions." },
        { id: "formula", label: "Quadratic formula", x: 85, y: 30, color: "#a855f7", html: "x = (−b ± √Δ)/(2a).", why: "It comes from completing the square on ax² + bx + c, al-Khwārizmī's geometric method." },
        { id: "viete", label: "Sum and product", x: 20, y: 58, color: "#0ea5e9", html: "x₁ + x₂ = −b/a; x₁x₂ = c/a.", why: "It follows from the formula (the radicals cancel in the sum and the product gives a difference of squares); it is Viète's idea." },
        { id: "scomp", label: "Factorisation", x: 80, y: 58, color: "#ef4444", html: "ax² + bx + c = a(x − x₁)(x − x₂).", why: "If x₁ is a root, (x − x₁) is a factor: the factor theorem (Ruffini's theorem) on the roots of polynomials." },
        { id: "para", label: "Parabola", x: 50, y: 78, color: "#14b8a6", html: "y = ax² + bx + c: the solutions are the intersections with the x-axis.", why: "It links algebra to coordinate geometry: Δ tells you whether the parabola crosses, touches or misses the x-axis." },
        { id: "prob", label: "Word problems", x: 50, y: 94, color: "#22c55e", html: "Areas, motion, optimisation: two solutions, often only one acceptable.", why: "The context can rule out a solution (negative lengths, times before the start)." }
      ],
      edges: [
        ["eq", "inc", "if b or c is zero"],
        ["eq", "delta", "studied with"],
        ["delta", "formula", "appears in"],
        ["formula", "viete", "implies"],
        ["viete", "scomp", "leads to"],
        ["delta", "para", "seen in"],
        ["prob", "eq", "translated into"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: roots and factorisation",
      questions: [
        { type: "num", q: "In x² − 9x + 14 = 0, what is the sum of the roots?", answer: 9, explain: "x₁ + x₂ = −b/a = 9 (the roots are 2 and 7)." },
        { type: "mc", q: "The trinomial x² − 5x + 6 factorises as…", options: ["(x − 2)(x − 3)", "(x + 2)(x + 3)", "(x − 1)(x − 6)"], answer: 0, explain: "The roots are 2 and 3: (x − 2)(x − 3)." },
        { type: "tf", q: "A quadratic equation with c = 0 always has the solution x = 0.", answer: true, explain: "ax² + bx = x(ax + b) = 0: one root is 0 and the other is −b/a." }
      ]
    }
  ],
  glossary: [
    { t: "Quadratic equation", d: "An equation that can be written as ax² + bx + c = 0 with a ≠ 0." },
    { t: "Discriminant", d: "The number Δ = b² − 4ac that determines how many real solutions the equation has." },
    { t: "Roots (solutions)", d: "Values of x that make the equation true." },
    { t: "Pure equation", d: "ax² + c = 0, with no x term." },
    { t: "Equation with no constant term", d: "ax² + bx = 0, with no constant term (in Italian, equazione spuria)." },
    { t: "Zero product property", d: "A product is zero if and only if at least one factor is zero." },
    { t: "Reduced formula", d: "A formula with Δ/4 that can be used when b is even." },
    { t: "Viète's formulas", d: "x₁ + x₂ = −b/a and x₁·x₂ = c/a." },
    { t: "Parabola", d: "The curve that is the graph of y = ax² + bx + c." },
    { t: "Completing the square", d: "Turning x² + bx into the square of a binomial by adding (b/2)²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "The solutions of x² − 5x + 4 = 0 are…", options: ["1 and 4", "−1 and −4", "2 and 3"], answer: 0, explain: "Δ = 25 − 16 = 9 → x = (5 ± 3)/2 = 4 or 1." },
      { type: "num", q: "Calculate Δ for 2x² + 3x − 2 = 0.", answer: 25, explain: "Δ = 9 − 4·2·(−2) = 25." },
      { type: "mc", q: "The equation x² + 2x + 5 = 0 has…", options: ["two real solutions", "one double solution", "no real solutions"], answer: 2, explain: "Δ = 4 − 20 = −16 &lt; 0." },
      { type: "mc", q: "The solutions of 4x² − 16 = 0 are…", options: ["x = ±2", "x = 4", "x = ±4"], answer: 0, explain: "x² = 4 → x = ±2." },
      { type: "mc", q: "The solutions of x² − 3x = 0 are…", options: ["0 and 3", "3 and −3", "only 3"], answer: 0, explain: "x(x − 3) = 0 → x = 0 or x = 3." },
      { type: "num", q: "In 2x² − 8x + 6 = 0, what is the product of the roots?", answer: 3, explain: "x₁x₂ = c/a = 6/2 = 3 (the roots are 1 and 3)." },
      { type: "num", q: "Two numbers have a sum of 11 and a product of 24. What is the larger one?", answer: 8, explain: "x² − 11x + 24 = 0 → 3 and 8." },
      { type: "tf", q: "If Δ = 0 the quadratic equation has no solutions.", answer: false, explain: "With Δ = 0 there is a double root x = −b/(2a)." },
      { type: "num", q: "For which value of k does the equation x² − 6x + k = 0 have a double root?", answer: 9, explain: "Δ = 36 − 4k = 0 → k = 9 (x = 3)." },
      { type: "order", q: "Put the steps for solving a complete quadratic equation in order.", items: ["Write it in standard form ax² + bx + c = 0", "Calculate Δ = b² − 4ac", "Study the sign of Δ", "Apply x = (−b ± √Δ)/(2a)", "Check with the sum and product"], explain: "The standard form and the sign of Δ come before the formula; the check comes last." }
    ]
  }
});
