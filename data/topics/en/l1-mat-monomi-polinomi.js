TOPIC('en', {
  id: "l1-mat-monomi-polinomi",
  title: "Monomials and polynomials",
  intro: "What is the area of a square garden with side <i>a</i> if we extend each side by <i>b</i> metres? And what if we want to write it once and for all, for any a and b? <b>Algebra with letters</b> lets us use letters instead of numbers to write general rules. Let's learn its \"alphabet\" (<b>monomials</b>), its \"words\" (<b>polynomials</b>) and a few \"magic formulas\" that save hours of calculation: the <b>special products</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Why use letters",
      html: `<p>An <b>algebraic expression</b> contains numbers, letters and operations. The letters stand for any numbers (variables) and let us state a rule that holds in infinitely many cases. For example:</p>
<ul>
<li>the perimeter of a rectangle with base b and height h is 2b + 2h, for <i>any</i> rectangle;</li>
<li>any even number can be written 2n, an odd one 2n + 1 (n ∈ ℤ), three consecutive numbers n, n + 1, n + 2.</li>
</ul>
<p>The <b>numerical value</b> of an expression is found by substituting numbers for the letters: for 3a − 2b with a = 4 and b = −1 we get 3·4 − 2·(−1) = 14.</p>
<p>Letters follow the same properties as numbers (commutative, associative, distributive); that is why algebra has no \"new rules\" but is an <b>extension</b> of arithmetic. It was the French mathematician François Viète (1540-1603) who introduced the systematic use of letters, and Descartes who established the modern convention: the first letters (a, b, c…) for known values, the last ones (x, y, z) for unknowns.</p>`
    },
    {
      type: "text",
      title: "Monomials",
      html: `<p>A <b>monomial</b> is an algebraic expression containing only <b>multiplications</b> (and powers with natural exponents) of numbers and letters. Examples: 5a²b, −x, 3/4 xy³, 7. These are not monomials: a + b (a sum), 1/x (a letter in the denominator), √x.</p>
<p>In a monomial in <b>standard form</b> (simplified) we distinguish:</p>
<ul>
<li>the <b>coefficient</b>: the numerical factor (in the monomial −3x²y it is −3; in xy it is 1);</li>
<li>the <b>literal part</b>: the letters with their exponents (x²y);</li>
<li>the <b>total degree</b>: the sum of the exponents (x²y has degree 3);</li>
<li>the <b>degree with respect to a letter</b>: the exponent of that letter (x²y has degree 2 in x and 1 in y).</li>
</ul>
<p>Two monomials are <b>like terms</b> (similar) if they have the <b>same literal part</b> (any coefficients): 3x²y, −5x²y and (1/2)yx² are like terms. They are <b>opposite</b> if they are like terms with opposite coefficients (4ab and −4ab). A monomial with coefficient 0 is the zero monomial (its degree is undefined); a non-zero number is a monomial of degree 0.</p>
<p><b>Operations</b>:</p>
<ul>
<li><b>Algebraic sum</b>: <i>only</i> between like terms: add the coefficients and keep the literal part unchanged. 5x²y − 8x²y + x²y = −2x²y. Unlike terms stay as an indicated sum (3x + 2y cannot be simplified).</li>
<li><b>Product</b>: multiply the coefficients and add the exponents of the same letters: (3a²b)·(−2ab³) = −6a³b⁴.</li>
<li><b>Power</b>: (−2x²y)³ = (−2)³·x⁶·y³ = −8x⁶y³.</li>
<li><b>Quotient</b>: divide the coefficients and subtract the exponents: 12a⁵b² ÷ (−4a²b) = −3a³b. The result is a monomial only if each letter of the divisor appears in the dividend with an exponent at least as large (otherwise the division gives an algebraic fraction).</li>
<li><b>GCD and LCM</b>: the GCD has the <i>common</i> letters with the <i>smallest</i> exponent and the GCD of the coefficients; the LCM has all the letters with the <i>largest</i> exponent and the LCM of the coefficients. For 12a³b and 18a²b²: GCD = 6a²b, LCM = 36a³b².</li>
</ul>`
    },
    {
      type: "widget",
      title: "Like term or not?",
      widget: "classify",
      options: { groups: ["Like term of 3x²y", "Not a like term of 3x²y"], items: [
        ["−5x²y", 0], ["x²y", 0], ["7yx²", 0], ["(2/3)x²y", 0],
        ["3xy²", 1], ["3x²", 1], ["2x²y²", 1], ["3x + y", 1], ["4xy", 1]
      ] },
      caption: "What matters is the letters and their exponents, not the coefficients or the order of the letters (7yx² = 7x²y)."
    },
    {
      type: "example",
      title: "Example: simplifying an expression with monomials",
      html: `<p>Simplify: <b>2a²b · (−3ab²) − 5a³b³ + (4a⁶b⁶) ÷ (2a³b³)</b></p>
<ol>
<li>First product: 2·(−3) = −6; a²·a = a³; b·b² = b³ → −6a³b³.</li>
<li>Quotient: 4 ÷ 2 = 2; a⁶ ÷ a³ = a³; b⁶ ÷ b³ = b³ → 2a³b³.</li>
<li>Sum of like terms (all a³b³): −6 − 5 + 2 = −9 → <b>−9a³b³</b>.</li>
</ol>
<p>Check with a = 1, b = 1: 2·(−3) − 5 + 4/2 = −6 − 5 + 2 = −9 ✔. Substituting simple values is a quick way to check a result (it doesn't fully prove it, but it catches many mistakes).</p>`
    },
    {
      type: "text",
      title: "Polynomials",
      html: `<p>A <b>polynomial</b> is an <b>algebraic sum of monomials</b>. The monomials that make it up are called <b>terms</b>. A polynomial with two terms is called a <b>binomial</b>, with three a <b>trinomial</b>. For example 3x²y − 5xy + 7 is a trinomial.</p>
<p>A polynomial is in <b>standard form</b> (simplified) when it contains no like terms (they must be added) and no operations left to do. We define:</p>
<ul>
<li><b>degree of the polynomial</b>: the highest degree among its terms (3x²y − 5xy + 7 has degree 3);</li>
<li><b>degree with respect to a letter</b>: the highest exponent of that letter (in x²y: degree 2 in x);</li>
<li><b>ordered</b> by decreasing (or increasing) powers of a letter;</li>
<li><b>complete</b> with respect to a letter, if all the powers from 0 up to the degree appear (x³ − 2x² + x − 5 is complete; x³ + 4 is not);</li>
<li><b>homogeneous</b>, if all the terms have the same degree (a² + 3ab − b² is homogeneous of degree 2);</li>
<li><b>constant term</b>: the term of degree 0, with no letters.</li>
</ul>
<p>Two polynomials are <b>equal</b> if, once in standard form, they have the same terms. A polynomial is <b>identically zero</b> if, once simplified, it is 0.</p>
<p>For a polynomial in one variable, P(x) = aₙxⁿ + … + a₁x + a₀, the <b>numerical value</b> P(k) is found by substituting x = k. If P(k) = 0, k is a <b>zero</b> (root) of the polynomial (a solution of the equation P(x) = 0): this is the link with equations.</p>`
    },
    {
      type: "text",
      title: "Operations with polynomials",
      html: `<p><b>Sum and difference</b>: remove the brackets (changing the signs if there is a minus in front) and collect like terms.</p>
<p>(3x² − 2x + 1) − (x² − 5x − 4) = 3x² − 2x + 1 − x² + 5x + 4 = <b>2x² + 3x + 5</b>.</p>
<p><b>Product of a monomial and a polynomial</b> (distributive property): 2x · (3x² − x + 4) = 6x³ − 2x² + 8x.</p>
<p><b>Product of two polynomials</b>: multiply <b>each term of the first by each term of the second</b>, then collect like terms.</p>
<p>(x + 3)(2x − 5) = 2x² − 5x + 6x − 15 = <b>2x² + x − 15</b>.</p>
<p>The degree of the product is the <b>sum</b> of the degrees (with non-zero coefficients): 1 + 1 = 2. The number of partial products to compute is the product of the numbers of terms: 2 × 2 = 4.</p>
<p><b>Quotient of a polynomial by a monomial</b>: divide each term: (6x³ − 9x² + 3x) ÷ (3x) = 2x² − 3x + 1.</p>
<p><b>Division of two polynomials</b> is more complex: given A(x) (dividend) and B(x) (divisor, non-zero) there are two polynomials Q(x) (quotient) and R(x) (remainder), with the degree of R less than the degree of B, such that <b>A = B · Q + R</b>. If R = 0 the polynomial is <b>divisible</b>. The procedure (similar to long division of numbers) and Ruffini's rule will be covered in the lesson on factorising.</p>`
    },
    {
      type: "example",
      title: "Example: the area of a growing garden",
      html: `<p>A rectangular garden has sides x and x + 4 metres. You extend each side by 2 m. By how much does the area increase?</p>
<ol>
<li>Initial area: x(x + 4) = x² + 4x.</li>
<li>New sides: (x + 2) and (x + 6). Area: (x + 2)(x + 6) = x² + 6x + 2x + 12 = x² + 8x + 12.</li>
<li>Increase: (x² + 8x + 12) − (x² + 4x) = <b>4x + 12</b> m².</li>
</ol>
<p>For x = 10 m: initial garden 10 × 14 = 140 m²; new one 12 × 16 = 192 m²; increase 52 m². Check: 4·10 + 12 = 52 ✔. A single formula describes every possible garden: that is the power of algebra.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: monomials and polynomials",
      questions: [
        { type: "mc", q: "What is the total degree of the monomial −7a²b³c?", options: ["3", "6", "7"], answer: 1, explain: "Add the exponents: 2 + 3 + 1 = 6." },
        { type: "num", q: "Find the coefficient of the monomial (−2x²y)·(3xy³) · (1/6).", answer: -1, explain: "(−2)·3·(1/6) = −1: the monomial is −x³y⁴." },
        { type: "num", q: "The polynomial 5x³ − 2x + x⁴ − 7 has degree…", answer: 4, explain: "The term with the highest degree is x⁴." },
        { type: "num", q: "How many terms does the product (a + b + c)(x + y) have before collecting like terms?", answer: 6, explain: "Each term of the first (3) times each term of the second (2): 3 × 2 = 6." }
      ]
    },
    {
      type: "svg",
      title: "(a + b)² is not a² + b²",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="30" width="170" height="170" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="230" y="30" width="70" height="170" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="60" y="200" width="170" height="70" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="230" y="200" width="70" height="70" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="145" y="122" font-size="26" text-anchor="middle" fill="#1e3a8a" font-weight="bold">a²</text>
<text x="265" y="122" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="145" y="242" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="265" y="242" font-size="22" text-anchor="middle" fill="#14532d" font-weight="bold">b²</text>
<text x="145" y="22" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">a</text>
<text x="265" y="22" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">b</text>
<text x="40" y="120" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">a</text>
<text x="40" y="240" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">b</text>
<text x="330" y="100" font-size="20" fill="#1f2937" font-weight="bold">(a + b)² = a² + 2ab + b²</text>
<text x="330" y="140" font-size="17" fill="#475569">The big square splits into:</text>
<text x="330" y="168" font-size="17" fill="#1d4ed8">a square with side a (a²),</text>
<text x="330" y="194" font-size="17" fill="#15803d">a square with side b (b²),</text>
<text x="330" y="220" font-size="17" fill="#b45309">and two a × b rectangles (2ab).</text>
</svg>`,
      caption: "The \"double product\" 2ab is exactly the area of the two leftover rectangles: forgetting it is the most common mistake."
    },
    {
      type: "text",
      title: "Special products",
      html: `<p>Some products of polynomials come up so often that it pays to remember the result:</p>
<table>
<tr><th>Name</th><th>Formula</th></tr>
<tr><td><b>Square of a binomial</b></td><td>(a + b)² = a² + 2ab + b² &nbsp;&nbsp; (a − b)² = a² − 2ab + b²</td></tr>
<tr><td><b>Sum times difference</b></td><td>(a + b)(a − b) = a² − b²</td></tr>
<tr><td><b>Square of a trinomial</b></td><td>(a + b + c)² = a² + b² + c² + 2ab + 2ac + 2bc</td></tr>
<tr><td><b>Cube of a binomial</b></td><td>(a + b)³ = a³ + 3a²b + 3ab² + b³ &nbsp;&nbsp; (a − b)³ = a³ − 3a²b + 3ab² − b³</td></tr>
<tr><td><b>Sum and difference of cubes (for factorising)</b></td><td>(a + b)(a² − ab + b²) = a³ + b³ &nbsp;&nbsp; (a − b)(a² + ab + b²) = a³ − b³</td></tr>
</table>
<p>You can remember the square of a binomial as: \"the square of the first, plus twice the product, plus the square of the second\". The sign of the double product is the sign in the binomial; the other two terms are always positive.</p>
<p>Examples:</p>
<ul>
<li>(2x + 3y)² = 4x² + 12xy + 9y²;</li>
<li>(5a − 1)² = 25a² − 10a + 1;</li>
<li>(3x + 2)(3x − 2) = 9x² − 4;</li>
<li>(x − 2)³ = x³ − 6x² + 12x − 8.</li>
</ul>
<p><b>For mental arithmetic</b>: 51² = (50 + 1)² = 2500 + 100 + 1 = 2601; 49 · 51 = (50 − 1)(50 + 1) = 2500 − 1 = 2499; 99² = (100 − 1)² = 10 000 − 200 + 1 = 9801.</p>
<p><b>Coefficients of the powers of a binomial</b>: the coefficients of (a + b)ⁿ are row n of <b>Pascal's triangle</b> (called Tartaglia's triangle in Italy, Yang Hui's triangle in China): each number is the sum of the two above it.</p>
<p style="text-align:center;font-family:monospace;line-height:1.6">1<br>1&nbsp;&nbsp;1<br>1&nbsp;&nbsp;2&nbsp;&nbsp;1<br>1&nbsp;&nbsp;3&nbsp;&nbsp;3&nbsp;&nbsp;1<br>1&nbsp;&nbsp;4&nbsp;&nbsp;6&nbsp;&nbsp;4&nbsp;&nbsp;1<br>1&nbsp;&nbsp;5&nbsp;&nbsp;10&nbsp;&nbsp;10&nbsp;&nbsp;5&nbsp;&nbsp;1</p>
<p>So (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴ and (a + b)⁵ = a⁵ + 5a⁴b + 10a³b² + 10a²b³ + 5ab⁴ + b⁵.</p>`
    },
    {
      type: "example",
      title: "Example: from a mistake to a proof",
      html: `<p>A classic mistake: (x + 3)² = x² + 9. For x = 2 it would give 4 + 9 = 13, but (2 + 3)² = 25. The same calculation with the correct formula: x² + 6x + 9 = 4 + 12 + 9 = 25 ✔.</p>
<p>Algebra is also used to <b>prove</b> things. For example: the difference between the squares of two consecutive numbers n and n + 1 is always odd.</p>
<ol>
<li>(n + 1)² − n² = n² + 2n + 1 − n² = 2n + 1.</li>
<li>2n + 1 is, by definition, an odd number. ∎</li>
</ol>
<p>Check: 5² − 4² = 25 − 16 = 9, which is odd. But now we know it happens for <i>all</i> consecutive numbers, not just the ones we tried.</p>`
    },
    {
      type: "curiosity",
      title: "Al-Khwarizmi and \"completing the square\"",
      html: `<p>The Persian mathematician Muhammad ibn Musa al-Khwarizmi (about 780-850), who worked at the House of Wisdom in Baghdad, wrote around 820 the treatise <i>al-Kitab al-mukhtasar fi hisab al-jabr wa-l-muqabala</i> (\"The Compendious Book on Calculation by Completion and Balancing\"). The word <b>algebra</b> comes from <i>al-jabr</i>, and the word <b>algorithm</b> comes from his name. Al-Khwarizmi solved quadratic equations with geometric figures, adding a missing small square to \"complete\" a square: this was exactly the square of a binomial (a + b)² = a² + 2ab + b² read geometrically. Euclid too, in Book II of the <i>Elements</i> (about 300 BC), proves the identity of the square of a binomial with figures.</p>`
    },
    {
      type: "curiosity",
      title: "Why \"monomial\" and \"polynomial\"?",
      html: `<p>The words come from Greek: <i>monos</i> (single), <i>polys</i> (many) and from Latin <i>nomen</i> (name, term). So \"monomial\" = \"a single term\", \"polynomial\" = \"many terms\", \"binomial\" = \"two terms\". The word <i>polynomial</i> spread in 16th-century Europe, at the time when Italian mathematicians such as Cardano, Tartaglia and Ferrari discovered the formulas for solving cubic and quartic equations. A contest between Tartaglia and Antonio Maria Fior in 1535 on cubic equations is one of the most famous mathematical challenges in history.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to multiply polynomials",
      intro: "Multiplying every term by every term is easy to say but easy to get wrong. Here are alternative methods used in other countries.",
      tabs: [
        {
          label: "🔲 The grid (box) method",
          html: `<p>Many teachers in English-speaking countries use the <b>area grid</b>: write the terms of one polynomial along the rows, those of the other along the columns, and fill each cell with the product. Then add the like cells.</p>
<p>(x + 3)(2x − 5):</p>
<table>
<tr><th></th><th>2x</th><th>−5</th></tr>
<tr><th>x</th><td>2x²</td><td>−5x</td></tr>
<tr><th>+3</th><td>6x</td><td>−15</td></tr>
</table>
<p>Sum: 2x² + (−5x + 6x) − 15 = <b>2x² + x − 15</b>. The method stops you skipping products and makes it clear why there are as many partial products as rows × columns.</p>`
        },
        {
          label: "📐 Drawing the square",
          html: `<p>Draw a square with side a + b and divide it as in the figure: the total area (a + b)² is the sum of the four regions a², ab, ab, b². This geometric proof was already known to Euclid. With the widget below, build a 5 × 5 square: it is (3 + 2)², and it splits into 3² + 3·2 + 2·3 + 2² = 9 + 6 + 6 + 4 = 25 small squares.</p>`,
          widget: "areaGrid",
          options: { w: 5, h: 5, max: 12 }
        },
        {
          label: "🧊 The cube of a binomial",
          html: `<p>(a + b)³ is the volume of a cube with side a + b. With a = 3 and b = 2, the cube with side 5 contains 125 small cubes, which split into: one big cube a³ = 27, three slabs a²b (3·9·2 = 54), three rods ab² (3·3·4 = 36) and one small cube b³ = 8. Total: 27 + 54 + 36 + 8 = 125 ✔. Rotate the 3D model and count the cubes.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 5, b: 5, c: 5 }
        },
        {
          label: "🔢 With numbers (split and multiply)",
          html: `<p>Multiplying polynomials is an extension of long multiplication. Think of 23 × 14: it is (2·10 + 3)(1·10 + 4). The product (2x + 3)(x + 4) with x = 10 gives exactly the same calculation: 2x² + 11x + 12 → 200 + 110 + 12 = 322. A polynomial is like a \"number in base x\", and multiplying polynomials is like long multiplication without carrying.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of algebra with letters",
      nodes: [
        { id: "letterale", label: "Algebra with letters", x: 50, y: 6, color: "#64748b", html: "Using letters instead of numbers.", why: "Viète (1591) introduced letters to stand for any numbers, moving from the algebra of single cases to that of general rules. Descartes (1637) fixed the modern convention." },
        { id: "monomio", label: "Monomial", x: 20, y: 28, color: "#2563eb", html: "Coefficient × literal part; degree = sum of exponents.", why: "It is the \"atom\" of algebra. To add monomials they must be like terms (same literal part), because the letters stand for different numbers and cannot be \"mixed\"." },
        { id: "polinomio", label: "Polynomial", x: 80, y: 28, color: "#16a34a", html: "An algebraic sum of monomials.", why: "Formulas such as areas and volumes are polynomials in the side lengths. Later, polynomials will be used to approximate any function (Taylor polynomials)." },
        { id: "proprieta", label: "Properties of operations", x: 50, y: 50, color: "#f59e0b", html: "Commutative, associative, distributive.", why: "They are the same as in ℤ and ℚ: every algebraic formula holds because it holds for numbers. That is why (a + b)² can always be expanded as (a + b)(a + b)." },
        { id: "prodotto", label: "Product of polynomials", x: 18, y: 68, color: "#9333ea", html: "Every term times every term.", why: "It is the distributive property applied twice: (a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd." },
        { id: "notevoli", label: "Special products", x: 55, y: 80, color: "#ef4444", html: "Square of a binomial, sum times difference, cube.", why: "They are proved with the distributive property and can be read with geometric figures (Euclid, Book II; al-Khwarizmi). They are used to simplify calculations and to factorise." },
        { id: "tartaglia", label: "Pascal's (Tartaglia's) triangle", x: 85, y: 62, color: "#0ea5e9", html: "Coefficients of (a + b)ⁿ.", why: "Each coefficient counts the ways of choosing a or b from each bracket: it is a binomial coefficient, and each number is the sum of the two above because (a + b)ⁿ = (a + b)(a + b)ⁿ⁻¹." },
        { id: "applicazioni", label: "Proofs and problems", x: 82, y: 92, color: "#22c55e", html: "General truths, areas, volumes, equations.", why: "With letters you can prove that a statement holds for all numbers. This is the step that separates mathematics from arithmetic." }
      ],
      edges: [["letterale", "monomio", "building blocks"], ["letterale", "polinomio", "made of"], ["monomio", "polinomio", "sum of"], ["proprieta", "prodotto", "justify"], ["polinomio", "prodotto", "operation"], ["prodotto", "notevoli", "frequent cases"], ["notevoli", "tartaglia", "generalised by"], ["notevoli", "applicazioni", "used in"]]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>Monomial = number × letters. Only like terms can be <b>added</b>; in a <b>product</b> the exponents are <b>added</b>, in a <b>quotient</b> they are <b>subtracted</b>.</li>
<li>Degree of a polynomial = highest degree of its terms; degree of a product = sum of the degrees.</li>
<li>(a ± b)² = a² ± 2ab + b² — <b>not</b> a² ± b².</li>
<li>(a + b)(a − b) = a² − b² (the difference of two squares).</li>
<li>(a ± b)³ = a³ ± 3a²b + 3ab² ± b³; coefficients from Pascal's triangle.</li>
<li>To check a result, substitute simple values for the letters.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: special products",
      questions: [
        { type: "num", q: "Use a special product to calculate 103 · 97.", answer: 9991, explain: "(100 + 3)(100 − 3) = 100² − 3² = 10 000 − 9 = 9991." },
        { type: "mc", q: "Which expression equals (x − 4)²?", options: ["x² − 16", "x² − 8x + 16", "x² + 8x + 16"], answer: 1, explain: "The square of the first, minus twice the product (2·x·4 = 8x), plus the square of the second (16)." },
        { type: "mc", q: "What is the coefficient of a²b in the expansion of (a + b)³?", options: ["1", "3", "6"], answer: 1, explain: "(a + b)³ = a³ + 3a²b + 3ab² + b³: row 1-3-3-1 of Pascal's triangle." },
        { type: "tf", q: "(x + y)² is always equal to x² + y².", answer: false, explain: "The double product 2xy is missing: the equality holds only if xy = 0." }
      ]
    }
  ],
  glossary: [
    { t: "Monomial", d: "An algebraic expression with only products of numbers and letters (with natural exponents)." },
    { t: "Coefficient", d: "The numerical part of a monomial." },
    { t: "Literal part", d: "The letters of a monomial together with their exponents." },
    { t: "Like terms", d: "Monomials with the same literal part." },
    { t: "Degree of a monomial", d: "The sum of the exponents of the letters (total degree)." },
    { t: "Polynomial", d: "An algebraic sum of monomials." },
    { t: "Standard form", d: "A way of writing a polynomial with no like terms and no operations left to do." },
    { t: "Homogeneous polynomial", d: "A polynomial whose terms all have the same degree." },
    { t: "Special product", d: "A product of polynomials with a standard-form result, such as (a + b)²." },
    { t: "Pascal's triangle", d: "A table of binomial coefficients (called Tartaglia's triangle in Italy); row n gives the coefficients of (a + b)ⁿ." },
    { t: "Zero of a polynomial", d: "A value k of the variable for which P(k) = 0." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which of the following is not a monomial?", options: ["−5x²y", "3/x", "(2/3)ab"], answer: 1, explain: "A letter in the denominator is not allowed in a monomial: 3/x is an algebraic fraction." },
      { type: "num", q: "What is the total degree of 4a³b²c?", answer: 6, explain: "3 + 2 + 1 = 6." },
      { type: "mc", q: "Simplify: 7x²y − 3xy² + 2x²y − xy²", options: ["9x²y − 4xy²", "9x²y + 4xy²", "5x²y − 2xy²"], answer: 0, explain: "Like terms: x²y: 7 + 2 = 9; xy²: −3 − 1 = −4." },
      { type: "mc", q: "What is (−2a²b)³?", options: ["−8a⁶b³", "−6a⁶b³", "8a⁵b³"], answer: 0, explain: "(−2)³ = −8; (a²)³ = a⁶; b³." },
      { type: "num", q: "Find the numerical value of 3x² − 2x + 1 for x = −2.", answer: 17, explain: "3·4 − 2·(−2) + 1 = 12 + 4 + 1 = 17." },
      { type: "mc", q: "Expand (x + 3)(x − 5).", options: ["x² − 2x − 15", "x² + 2x − 15", "x² − 15"], answer: 0, explain: "x² − 5x + 3x − 15 = x² − 2x − 15." },
      { type: "mc", q: "Expand (2a − 3b)².", options: ["4a² − 9b²", "4a² − 12ab + 9b²", "4a² + 12ab + 9b²"], answer: 1, explain: "(2a)² − 2·2a·3b + (3b)² = 4a² − 12ab + 9b²." },
      { type: "num", q: "Use a special product to calculate 62². Give the result.", answer: 3844, explain: "(60 + 2)² = 3600 + 240 + 4 = 3844." },
      { type: "tf", q: "(a + b)(a − b) = a² − 2ab + b².", answer: false, explain: "Sum times difference gives a² − b²: the double products cancel out." },
      { type: "order", q: "Put in order the steps to multiply (x + 2)(3x − 1).", items: ["Multiply x by 3x and by −1", "Multiply 2 by 3x and by −1", "Write all the products: 3x² − x + 6x − 2", "Collect like terms", "Result: 3x² + 5x − 2"], explain: "Every term times every term, then add the like terms: −x + 6x = 5x." },
      { type: "text", q: "What is the name of the number triangle (called Tartaglia's triangle in Italy) that gives the coefficients of (a + b)ⁿ?", answer: ["pascal's triangle", "pascal", "pascals triangle", "the pascal triangle", "pascal triangle", "tartaglia's triangle", "tartaglia"], explain: "In English it is called Pascal's triangle; in Italy it is named after Tartaglia." }
    ]
  }
});
