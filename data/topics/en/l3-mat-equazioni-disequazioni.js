TOPIC('en', {
  id: "l3-mat-equazioni-disequazioni",
  title: "Higher-degree equations and inequalities",
  intro: "How much should a ticket cost so that the concert doesn't make a loss? During what time interval does a drone fly above 20 metres? Almost always the answer is not <i>one</i> number but <b>a set of values</b>: an inequality. After linear inequalities, we now tackle <b>quadratic inequalities</b> (using the parabola as a tool), <b>rational</b> (fractional) inequalities, inequalities with <b>absolute value</b> and <b>irrational</b> (radical) inequalities, and we see how to lower the degree of higher-degree equations (<b>biquadratic</b> equations, factorisation, Ruffini's rule).",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "What changes compared with the first degree",
      html: `<p>In your first two years you solved quadratic equations and linear inequalities. Let's recall the essentials: an <b>inequality</b> is a statement of inequality involving an unknown; its <b>solution set</b> (S) is usually an interval or a union of intervals. You can add quantities to both sides; you can multiply or divide by a positive number; but <b>multiplying or dividing by a negative number reverses the inequality sign</b>.</p>
<p>The problem with the second degree is that the sign of an expression like x² − 5x + 6 <b>changes</b> depending on x: simply "isolating x" is no longer enough. We need a tool that tells us <b>where</b> the expression is positive, negative or zero. This tool is the <b>sign analysis</b>, and for the quadratic trinomial it is the graph of the <b>parabola</b>.</p>
<p>Guiding idea of the whole lesson: every inequality, however complicated, comes down to <b>studying the sign of a product or quotient of simple factors</b> (linear or quadratic), and then combining the information on a number line.</p>`
    },
    {
      type: "text",
      title: "Quadratic inequalities: the parabola tells us the sign",
      html: `<p>Consider ax² + bx + c &gt; 0 (or &lt;, ≥, ≤), with a &gt; 0 (if a &lt; 0, multiply by −1 and reverse the sign). The graph of y = ax² + bx + c is a parabola <b>opening upwards</b>. The solutions depend on the discriminant <b>Δ = b² − 4ac</b>:</p>
<ul>
<li><b>Δ &gt; 0</b>: two real roots x₁ &lt; x₂. The parabola lies <b>below the x-axis between the roots</b> and above it outside them: ax² + bx + c &gt; 0 for <b>x &lt; x₁ ∨ x &gt; x₂</b> (<i>outer</i> values); &lt; 0 for <b>x₁ &lt; x &lt; x₂</b> (<i>inner</i> values).</li>
<li><b>Δ = 0</b>: one double root x₀ (the parabola is tangent to the x-axis). The trinomial is always ≥ 0 and equals 0 only at x₀: "&gt; 0" for <b>x ≠ x₀</b>; "≥ 0" for every x; "&lt; 0" <b>impossible</b>; "≤ 0" only for <b>x = x₀</b>.</li>
<li><b>Δ &lt; 0</b>: no roots, the parabola lies entirely above the axis: "&gt; 0" and "≥ 0" are true <b>for every x</b> (S = ℝ), "&lt; 0" and "≤ 0" are <b>impossible</b> (S = ∅).</li>
</ul>
<p><b>Example 1.</b> x² − 5x + 6 &gt; 0. The roots are x = 2 and x = 3 (because (x − 2)(x − 3) = x² − 5x + 6). The sign is "&gt;", so outer values: <b>x &lt; 2 ∨ x &gt; 3</b>. For x = 0 the trinomial equals 6 &gt; 0 ✔️; for x = 2.5 it equals −0.25 &lt; 0 (indeed 2.5 lies between the roots).</p>
<p><b>Example 2.</b> x² − 4x + 4 ≤ 0, that is (x − 2)² ≤ 0: a square is never negative, so only <b>x = 2</b>.</p>
<p><b>Example 3.</b> x² + 1 &lt; 0 or 2x² − 3x + 5 &gt; 0: Δ = 9 − 40 &lt; 0 and a &gt; 0, so the second is true for every x (S = ℝ) and the first is impossible (S = ∅).</p>`
    },
    {
      type: "svg",
      title: "The parabola and the sign of the trinomial",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="150" x2="590" y2="150" stroke="#475569" stroke-width="2"/>
<polyline points="104,34 123,53 142,71 162,88 181,102 200,115 219,126 239,136 258,143 277,149 296,154 316,156 335,157 354,156 373,154 393,149 412,143 431,136 450,126 470,115 489,102 508,88 527,71 547,53 566,34" fill="none" stroke="#7c3aed" stroke-width="4"/>
<circle cx="280" cy="150" r="7" fill="#dc2626"/>
<circle cx="390" cy="150" r="7" fill="#dc2626"/>
<text x="280" y="176" font-size="16" fill="#991b1b" font-weight="bold" text-anchor="middle">x = 2</text>
<text x="390" y="176" font-size="16" fill="#991b1b" font-weight="bold" text-anchor="middle">x = 3</text>
<text x="150" y="120" font-size="18" fill="#166534" font-weight="bold" text-anchor="middle">+</text>
<text x="335" y="132" font-size="18" fill="#b91c1c" font-weight="bold" text-anchor="middle">−</text>
<text x="525" y="120" font-size="18" fill="#166534" font-weight="bold" text-anchor="middle">+</text>
<text x="300" y="215" font-size="16" fill="#334155" text-anchor="middle">y = x² − 5x + 6   (Δ = 1 &gt; 0, a &gt; 0)</text>
<text x="300" y="245" font-size="16" fill="#1d4ed8" text-anchor="middle">&gt; 0 if x &lt; 2 or x &gt; 3  (outer)</text>
<text x="300" y="272" font-size="16" fill="#9a3412" text-anchor="middle">&lt; 0 if 2 &lt; x &lt; 3  (inner)</text>
</svg>`,
      caption: "Where the parabola is above the x-axis the trinomial is positive, where it is below it is negative; at the roots it equals zero."
    },
    {
      type: "remember",
      title: "Quick summary (a &gt; 0, Δ &gt; 0, roots x₁ &lt; x₂)",
      html: `<ul>
<li><b>&gt; 0</b>: x &lt; x₁ ∨ x &gt; x₂ (outer, endpoints excluded).</li>
<li><b>≥ 0</b>: x ≤ x₁ ∨ x ≥ x₂ (outer, endpoints included).</li>
<li><b>&lt; 0</b>: x₁ &lt; x &lt; x₂ (inner).</li>
<li><b>≤ 0</b>: x₁ ≤ x ≤ x₂ (inner, endpoints included).</li>
</ul>
<p>Rule of thumb: "<i>different</i> → inner, <i>same</i> → outer": if the inequality sign is <b>opposite</b> to the sign of a, take the <b>inner</b> values; if it is the <b>same</b>, take the <b>outer</b> values. Always sketch the parabola: it is safer than learning things by heart.</p>`
    },
    {
      type: "widget",
      title: "Try it on the number line",
      widget: "numberLine",
      options: { min: -2, max: 6, step: 1, marks: [2, 3] },
      caption: "Mark the roots 2 and 3 of x² − 5x + 6 on the line: the line is divided into three regions (left of 2, between 2 and 3, right of 3) and the sign of the trinomial is + − + ."
    },
    {
      type: "text",
      title: "Higher-degree and rational inequalities: the sign chart method",
      html: `<p>For inequalities of degree higher than two, or for rational ones, we use the <b>sign chart method</b> (or "sign table"):</p>
<ol>
<li>Bring everything to one side, so that you have <b>expression ⋚ 0</b> (for rational inequalities, reduce to a single fraction N(x)/D(x)).</li>
<li><b>Factorise</b> numerator and denominator into linear and quadratic factors (common factors, special products, trinomials, Ruffini's rule).</li>
<li>For each factor, work out <b>where it is positive</b> (&gt; 0) and mark it on a number line; factors that are always positive (Δ &lt; 0, a &gt; 0) can be ignored.</li>
<li>Apply the <b>rule of signs</b> to the product/quotient, and choose the regions with the required sign.</li>
<li>For rational inequalities: values that make the <b>denominator</b> zero are <b>always excluded</b> (you cannot divide by zero), even if the inequality is "≥".</li>
</ol>
<p><b>Example (rational).</b> (x − 1)/(x + 2) ≥ 0. N ≥ 0 for x ≥ 1; D &gt; 0 for x &gt; −2. Signs: for x &lt; −2 numerator −, denominator − → quotient +; between −2 and 1: − / + = −; for x &gt; 1: +. The quotient is ≥ 0 for <b>x &lt; −2 ∨ x ≥ 1</b> (−2 excluded: it makes the denominator zero; 1 included: it makes the numerator zero).</p>
<p><b>Watch out for the classic mistake</b>: you must not "get rid of the denominator" by multiplying by D(x), because D(x) may be negative (and then the sign would be reversed!). The sign chart method avoids this problem.</p>
<p><b>Example (third degree).</b> x³ − 2x² − 5x + 6 &gt; 0. Try x = 1: 1 − 2 − 5 + 6 = 0 ✔️, so (x − 1) is a factor. With Ruffini's rule (see below) we get (x − 1)(x² − x − 6) = (x − 1)(x − 3)(x + 2). Roots −2, 1, 3. Sign of the product (a &gt; 0, odd degree): − for x &lt; −2, + between −2 and 1, − between 1 and 3, + for x &gt; 3. Solution: <b>−2 &lt; x &lt; 1 ∨ x &gt; 3</b>.</p>`
    },
    {
      type: "example",
      title: "Real-life example: concert at a loss or at a profit",
      html: `<p>A club is organising a concert. If a ticket costs x euros, the number of tickets sold is (200 − 5x), and the fixed costs are €600. The profit is P(x) = x(200 − 5x) − 600 = −5x² + 200x − 600. For which prices is there a profit?</p>
<p>We need P(x) &gt; 0, that is −5x² + 200x − 600 &gt; 0 → dividing by −5 (sign reversed): x² − 40x + 120 &lt; 0. Δ/4 = 400 − 120 = 280, so x = 20 ± √280 ≈ 20 ± 16.73, that is, between about <b>€3.27</b> and <b>€36.73</b> (inner values, because the sign is "&lt;" and a &gt; 0). Below €3.27 the costs are not covered; above €36.73 too few tickets are sold. The maximum profit is at the vertex, x = €20: P = 20·100 − 600 = €1400. You see: the quadratic inequality nicely describes a trade-off between price and quantity.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: quadratic and rational inequalities",
      questions: [
        { type: "mc", q: "What is the solution set of x² − 9 &lt; 0?", options: ["x &lt; −3 ∨ x &gt; 3", "−3 &lt; x &lt; 3", "x &lt; 3"], answer: 1, explain: "Roots ±3, sign opposite to the sign of a (a &gt; 0, \"&lt;\"): inner values, −3 &lt; x &lt; 3." },
        { type: "tf", q: "The inequality x² − 6x + 9 &gt; 0 holds for every real number.", answer: false, explain: "It is equivalent to (x − 3)² &gt; 0: true for every x except x = 3, where the square equals 0." },
        { type: "mc", q: "In the inequality (x + 1)/(x − 4) &lt; 0, the value x = 4…", options: ["is a solution", "is not a solution, because it makes the denominator zero", "is a solution only if the sign is reversed"], answer: 1, explain: "The denominator cannot be zero: x = 4 is always excluded." }
      ]
    },
    {
      type: "text",
      title: "Equations and inequalities with absolute value",
      html: `<p>The <b>absolute value</b> of a number is its distance from 0: |x| = x if x ≥ 0, |x| = −x if x &lt; 0. More generally, |x − a| is the <b>distance</b> between x and a on the number line: this geometric reading solves many cases in an instant.</p>
<ul>
<li><b>|A| = k</b> (k &gt; 0) ⟺ A = k ∨ A = −k. If k &lt; 0 it is impossible.</li>
<li><b>|A| &lt; k</b> (k &gt; 0) ⟺ −k &lt; A &lt; k (small distance: inside). If k ≤ 0 it is impossible.</li>
<li><b>|A| &gt; k</b> (k &gt; 0) ⟺ A &lt; −k ∨ A &gt; k (large distance: outside). If k &lt; 0 it is always true.</li>
<li><b>|A| = |B|</b> ⟺ A = B ∨ A = −B (or A² = B²).</li>
<li><b>|A| &lt; B</b> ⟺ −B &lt; A &lt; B (and this requires B &gt; 0); <b>|A| &gt; B</b> ⟺ (B &lt; 0) ∨ (A &lt; −B ∨ A &gt; B).</li>
</ul>
<p><b>Example 1.</b> |2x − 1| = 5 → 2x − 1 = 5 ∨ 2x − 1 = −5 → x = 3 ∨ x = −2.</p>
<p><b>Example 2.</b> |x − 3| &lt; 5 → −5 &lt; x − 3 &lt; 5 → <b>−2 &lt; x &lt; 8</b>: the numbers less than 5 away from 3.</p>
<p><b>Example 3.</b> |x − 1| &gt; 2 → x − 1 &lt; −2 ∨ x − 1 &gt; 2 → <b>x &lt; −1 ∨ x &gt; 3</b>.</p>
<p><b>Case with several absolute values</b>: |x − 1| + |x + 2| = 5. "Split" the line at the points where the arguments are zero (x = 1 and x = −2) and solve in each region, removing the absolute value signs with the correct sign. For x ≥ 1: (x − 1) + (x + 2) = 5 → 2x = 4 → x = 2 ✔️ (≥ 1). For −2 ≤ x &lt; 1: −(x − 1) + (x + 2) = 3 ≠ 5: no solution. For x &lt; −2: −(x − 1) − (x + 2) = −2x − 1 = 5 → x = −3 ✔️. Solutions <b>x = −3 ∨ x = 2</b>. Geometric reading: the points whose distances from 1 and from −2 add up to 5.</p>`
    },
    {
      type: "text",
      title: "Irrational inequalities",
      html: `<p>Inequalities with square roots (even index) require two precautions: the <b>radicand must be ≥ 0</b> (domain condition), and <b>squaring</b> both sides keeps the inequality equivalent only if both sides are non-negative. Two fundamental patterns (index 2):</p>
<ul>
<li><b>√A &lt; B</b> ⟺ system { A ≥ 0 , B &gt; 0 , A &lt; B² }.</li>
<li><b>√A &gt; B</b> ⟺ union of two systems: { B &lt; 0 , A ≥ 0 } ∪ { B ≥ 0 , A &gt; B² }. (If B is negative, the root, which is ≥ 0, is automatically greater.)</li>
</ul>
<p><b>Example 1.</b> √(x + 2) &lt; x. Conditions: x + 2 ≥ 0 → x ≥ −2; x &gt; 0; x + 2 &lt; x² → x² − x − 2 &gt; 0 → x &lt; −1 ∨ x &gt; 2. Putting them together: <b>x &gt; 2</b>. Check: x = 3 → √5 ≈ 2.24 &lt; 3 ✔️; x = 1 → √3 ≈ 1.73 is not &lt; 1.</p>
<p><b>Example 2.</b> √(x + 2) &gt; x. First system: x &lt; 0 and x ≥ −2 → −2 ≤ x &lt; 0. Second system: x ≥ 0 and x + 2 &gt; x² → x² − x − 2 &lt; 0 → −1 &lt; x &lt; 2 → 0 ≤ x &lt; 2. Union: <b>−2 ≤ x &lt; 2</b>.</p>
<p><b>Irrational equations</b>: √(2x + 3) = x. Conditions: x ≥ 0 (the root is non-negative) and 2x + 3 ≥ 0. Squaring: 2x + 3 = x² → x² − 2x − 3 = 0 → x = 3 ∨ x = −1. We reject x = −1 because it does not satisfy x ≥ 0 (√1 = 1 ≠ −1): <b>x = 3</b> (√9 = 3 ✔️). "Extraneous" solutions appear because squaring loses the sign: <b>always check them</b>.</p>`
    },
    {
      type: "svg",
      title: "Absolute value as distance",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="120" x2="570" y2="120" stroke="#475569" stroke-width="3"/>
<line x1="150" y1="108" x2="150" y2="132" stroke="#475569" stroke-width="3"/>
<line x1="270" y1="108" x2="270" y2="132" stroke="#475569" stroke-width="3"/>
<line x1="450" y1="108" x2="450" y2="132" stroke="#475569" stroke-width="3"/>
<rect x="150" y="112" width="300" height="16" fill="#22c55e" opacity="0.55"/>
<circle cx="150" cy="120" r="8" fill="#ffffff" stroke="#166534" stroke-width="3"/>
<circle cx="450" cy="120" r="8" fill="#ffffff" stroke="#166534" stroke-width="3"/>
<circle cx="300" cy="120" r="7" fill="#2563eb"/>
<text x="150" y="155" font-size="16" fill="#1e293b" text-anchor="middle">−2</text>
<text x="300" y="155" font-size="16" fill="#1d4ed8" text-anchor="middle" font-weight="bold">3</text>
<text x="450" y="155" font-size="16" fill="#1e293b" text-anchor="middle">8</text>
<text x="225" y="95" font-size="16" fill="#9a3412" text-anchor="middle">distance 5</text>
<text x="375" y="95" font-size="16" fill="#9a3412" text-anchor="middle">distance 5</text>
<text x="300" y="215" font-size="18" fill="#166534" text-anchor="middle" font-weight="bold">|x − 3| &lt; 5  ⟺  −2 &lt; x &lt; 8</text>
<text x="300" y="250" font-size="16" fill="#334155" text-anchor="middle">the points less than 5 away from 3</text>
</svg>`,
      caption: "The absolute value |x − a| is the distance of x from a: the inequality |x − 3| < 5 asks for all the points within 5 units of 3."
    },
    {
      type: "text",
      title: "Higher-degree equations: biquadratics, factorisation, Ruffini",
      html: `<p>For equations of degree &gt; 2 there is no simple formula (for the 3rd and 4th degree there are solving formulas, discovered in the 16th century by Italian mathematicians, but they are complicated; for the 5th degree, in the 19th century, Abel and Galois proved that there is <b>no</b> general formula using radicals alone). So we use three strategies:</p>
<ol>
<li><b>Factorisation</b> and the <b>zero-product property</b>: A·B = 0 ⟺ A = 0 ∨ B = 0. E.g.: x³ − 4x = x(x − 2)(x + 2) = 0 → x = 0, ±2.</li>
<li><b>Binomial equations</b> (xⁿ = k) and <b>trinomial equations</b>, in particular <b>biquadratic</b> equations ax⁴ + bx² + c = 0: set <b>t = x²</b> and solve at² + bt + c = 0, then solve x² = t for each t ≥ 0 (if t &lt; 0, there is no real solution).</li>
<li><b>Remainder theorem and Ruffini's rule</b> (synthetic division): a polynomial P(x) is divisible by (x − a) ⟺ P(a) = 0. If the coefficients are integers, any rational root p/q has p dividing the constant term and q dividing the leading coefficient: try the divisors.</li>
</ol>
<p><b>Biquadratic example.</b> x⁴ − 5x² + 4 = 0. With t = x²: t² − 5t + 4 = 0 → t = 1 ∨ t = 4. So x² = 1 → x = ±1; x² = 4 → x = ±2. Four solutions: <b>−2, −1, 1, 2</b>. For x⁴ + x² + 1 = 0, on the other hand, t = (−1 ± √(−3))/2 is not real: no solution.</p>
<p><b>Ruffini example.</b> Let's divide x³ − 2x² − 5x + 6 by (x − 1): write the coefficients 1, −2, −5, 6 and "bring down" the 1; then at each step multiply by 1 and add: 1 → 1·1 + (−2) = −1 → (−1)·1 + (−5) = −6 → (−6)·1 + 6 = 0 (the remainder is zero ✔️). Quotient: x² − x − 6.</p>
<p><b>Higher-degree inequalities</b> are handled in the same way: factorise, then use the sign chart method. A biquadratic such as x⁴ − 5x² + 4 &gt; 0 factorises as (x² − 1)(x² − 4) = (x − 1)(x + 1)(x − 2)(x + 2) &gt; 0 → <b>x &lt; −2 ∨ −1 &lt; x &lt; 1 ∨ x &gt; 2</b>.</p>`
    },
    {
      type: "example",
      title: "Real-life example: the open-top box",
      html: `<p>From a square sheet of cardboard with side 12 cm, four small squares of side x are cut from the corners and the sides are folded up to make an open-top box. The volume is V(x) = x(12 − 2x)² (with 0 &lt; x &lt; 6). For which x is the volume at least 128 cm³?</p>
<p>Expanding: V = x(144 − 48x + 4x²) = 4x³ − 48x² + 144x. The condition V ≥ 128 becomes 4x³ − 48x² + 144x − 128 ≥ 0, that is x³ − 12x² + 36x − 32 ≥ 0. Try x = 2: 8 − 48 + 72 − 32 = 0 ✔️. Ruffini: quotient x² − 10x + 16 = (x − 2)(x − 8). So (x − 2)²(x − 8) ≥ 0. The factor (x − 2)² is ≥ 0, so we need x − 8 ≥ 0 or x = 2: but with x &lt; 6 only <b>x = 2</b> remains, where V = 2·8² = 128 cm³. This means that 128 is exactly the <b>maximum</b> possible volume! (The maximum really does occur at x = 2 cm.) A remarkable piece of information, obtained with factorisation alone.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Tartaglia, Cardano and the cubic challenge",
      html: `<p>The formula for solving cubic equations was found in 16th-century Italy. <b>Scipione del Ferro</b> (Bologna) discovered it for a special case, <b>Niccolò Tartaglia</b> rediscovered it in 1535 during a public contest, and <b>Gerolamo Cardano</b> published it in 1545 in his <i>Ars Magna</i>, together with the method for the quartic, found by his pupil <b>Ludovico Ferrari</b>. This started a dispute over who deserved the credit. While working with those formulas, square roots of negative numbers appeared for the first time, and from them complex numbers were born.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Tolerances and absolute value",
      html: `<p>In industry, absolute value is used for <b>tolerances</b>: if a screw must measure 8 mm with a maximum error of 0.05 mm, the condition is |d − 8| ≤ 0.05, that is 7.95 ≤ d ≤ 8.05. The same model describes the error of a measurement, the precision of a sensor or the maximum acceptable distance from a target. In calculus, which you will study in your final year, <b>limits</b> are defined precisely with absolute value inequalities.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand inequalities",
      intro: "If the sign chart method feels like a recipe, here are three ways to see why it works.",
      tabs: [
        {
          label: "📈 The graph",
          html: `<p>Solving <b>f(x) &gt; 0</b> means asking: "for which x does the <b>graph</b> lie above the x-axis?". Solving <b>f(x) &gt; g(x)</b>: "where does the graph of f lie above the graph of g?". Draw the parabola y = x² − 5x + 6 and the line y = 0: the regions where the parabola is above the axis are the two outer branches. If you don't want to do the calculations, sketch a "qualitative" graph freehand: all you need to know is the roots and whether the parabola opens upwards or downwards.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="30" y1="160" x2="570" y2="160" stroke="#475569" stroke-width="2"/><path d="M 100 30 Q 300 330 500 30" fill="none" stroke="#7c3aed" stroke-width="4"/><rect x="30" y="150" width="190" height="20" fill="#22c55e" opacity="0.5"/><rect x="380" y="150" width="190" height="20" fill="#22c55e" opacity="0.5"/><text x="300" y="60" font-size="16" fill="#334155" text-anchor="middle">the green parts: where y &gt; 0</text><text x="125" y="200" font-size="16" fill="#166534" font-weight="bold" text-anchor="middle">x &lt; x₁</text><text x="475" y="200" font-size="16" fill="#166534" font-weight="bold" text-anchor="middle">x &gt; x₂</text></svg>`
        },
        {
          label: "🌡️ The sign thermometer",
          html: `<p>Think of each factor as a <b>switch</b> that changes state (from − to +) at a precise point: its root. The product changes sign every time you cross a root of <b>odd multiplicity</b> and does <b>not</b> change sign when crossing a double root (the factor (x − 2)² is always ≥ 0). So you just line up the roots from smallest to largest and alternate + and − starting from the far right, where the sign is that of the leading coefficient.</p>`
        },
        {
          label: "🧮 Absolute value as distance",
          html: `<p>Read |x − a| as "<b>the distance between x and a</b>". Then |x − 3| &lt; 5 means "x is less than 5 away from 3": an interval centred at 3 with radius 5, that is (−2; 8). And |x − 1| + |x + 2| is the <b>sum of the distances</b> of x from 1 and from −2. With this picture many solutions can be "seen" without any calculation: the sum of the distances from two points can never be less than the distance between the two points, here 3.</p>`,
          widget: "numberLine",
          options: { min: -5, max: 8, step: 1, marks: [3, -2, 8] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of equations and inequalities",
      nodes: [
        { id: "segno", label: "Sign analysis", x: 50, y: 8, color: "#6366f1", html: "Saying where an expression is positive, negative or zero.", why: "An inequality asks about a sign; the continuity of polynomial functions means the sign can only change when crossing a root." },
        { id: "par", label: "Parabola and Δ", x: 18, y: 32, color: "#a855f7", html: "The sign of ax² + bx + c depends on Δ and on which way the parabola opens.", why: "Completing the square, ax² + bx + c = a[(x + b/2a)² − Δ/4a²]: the sign depends on Δ and on the sign of a." },
        { id: "frat", label: "Rational and products", x: 82, y: 32, color: "#f59e0b", html: "Sign chart of numerator and denominator.", why: "A quotient has the same sign as the product; but the denominator cannot be zero: its zeros are excluded." },
        { id: "abs", label: "Absolute value", x: 18, y: 62, color: "#16a34a", html: "|A| &lt; k and |A| &gt; k become systems or unions.", why: "It is the distance from zero: the piecewise definition (x ≥ 0 or x &lt; 0) explains every rule." },
        { id: "irr", label: "Roots and irrational", x: 82, y: 62, color: "#ef4444", html: "Domain conditions + careful squaring.", why: "A square root is ≥ 0 by definition; squaring is equivalent only if both sides are non-negative: hence the conditions." },
        { id: "grad", label: "Higher degree", x: 50, y: 88, color: "#0ea5e9", html: "Factorisation, Ruffini, biquadratics.", why: "The fundamental theorem of algebra (Gauss, 1799) guarantees that a polynomial of degree n factorises into n complex linear factors; over the reals, into factors of degree ≤ 2." }
      ],
      edges: [
        ["segno", "par", "degree 2"],
        ["segno", "frat", "quotients"],
        ["segno", "abs", "split into cases"],
        ["segno", "irr", "with conditions"],
        ["par", "grad", "generalises"],
        ["frat", "grad", "factorise"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: absolute value and irrational inequalities",
      questions: [
        { type: "mc", q: "The solutions of |x − 1| &gt; 2 are…", options: ["−1 &lt; x &lt; 3", "x &lt; −1 ∨ x &gt; 3", "x &gt; 3"], answer: 1, explain: "|A| &gt; k → A &lt; −k ∨ A &gt; k: x − 1 &lt; −2 ∨ x − 1 &gt; 2." },
        { type: "num", q: "Solve √(2x + 3) = x: how many acceptable solutions are there?", answer: 1, explain: "We find x = 3 and x = −1, but −1 does not satisfy x ≥ 0. Only x = 3 remains." },
        { type: "tf", q: "Squaring both sides of an irrational equation always gives an equivalent equation.", answer: false, explain: "It can introduce extraneous solutions (for example x = −1 above). You must check the sign or substitute." }
      ]
    }
  ],
  glossary: [
    { t: "Inequality", d: "A statement that two expressions involving an unknown are unequal; its solutions form a set of values." },
    { t: "Discriminant (Δ)", d: "The number b² − 4ac: the number of real roots of a quadratic equation depends on it." },
    { t: "Inner / outer values", d: "Solutions lying between the roots (inner) or outside the interval of the roots (outer)." },
    { t: "Sign chart", d: "A diagram showing the sign of each factor and of their product or quotient." },
    { t: "Absolute value", d: "|x| is the distance of x from 0: x if x ≥ 0, −x if x &lt; 0." },
    { t: "Biquadratic", d: "An equation of the form ax⁴ + bx² + c = 0, which reduces to the second degree with t = x²." },
    { t: "Ruffini's rule", d: "A quick method (synthetic division) for dividing a polynomial by (x − a)." },
    { t: "Remainder theorem", d: "The remainder when P(x) is divided by (x − a) is P(a)." },
    { t: "Extraneous solution", d: "A value found while solving that does not satisfy the original equation, for example after squaring." },
    { t: "Domain condition", d: "The set of values for which an expression makes sense (radicands ≥ 0, denominators ≠ 0)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Solve x² − 7x + 10 &lt; 0.", options: ["2 &lt; x &lt; 5", "x &lt; 2 ∨ x &gt; 5", "x &lt; 5"], answer: 0, explain: "Roots 2 and 5; sign \"&lt;\" with a &gt; 0: inner values." },
      { type: "mc", q: "Solve x² + 4 &gt; 0.", options: ["No solution", "x &gt; 0", "Every real number"], answer: 2, explain: "x² ≥ 0, so x² + 4 ≥ 4 &gt; 0 for every x." },
      { type: "tf", q: "The only solution of the inequality (x − 2)² ≤ 0 is x = 2.", answer: true, explain: "A square is ≥ 0; it is ≤ 0 only if it is 0, that is x = 2." },
      { type: "mc", q: "Solve (x − 1)/(x + 2) &gt; 0.", options: ["x &lt; −2 ∨ x &gt; 1", "−2 &lt; x &lt; 1", "x &gt; 1"], answer: 0, explain: "Numerator and denominator must have the same sign: zeros −2 and 1, outer values." },
      { type: "mc", q: "Solve |x − 3| &lt; 5.", options: ["x &lt; −2 ∨ x &gt; 8", "−2 &lt; x &lt; 8", "x &lt; 8"], answer: 1, explain: "−5 &lt; x − 3 &lt; 5 → −2 &lt; x &lt; 8." },
      { type: "num", q: "How many real solutions does x⁴ − 5x² + 4 = 0 have?", answer: 4, explain: "t = x² equals 1 or 4, so x = ±1, ±2: four solutions." },
      { type: "mc", q: "Solve √(x + 2) &lt; x.", options: ["x &gt; 2", "x &gt; 0", "−2 ≤ x &lt; 2"], answer: 0, explain: "Conditions: x ≥ −2, x &gt; 0, x + 2 &lt; x² (x &lt; −1 ∨ x &gt; 2): x &gt; 2 remains." },
      { type: "num", q: "What is the smallest positive root of x³ − 2x² − 5x + 6 = 0? (Try the divisors of 6)", answer: 1, explain: "P(1) = 1 − 2 − 5 + 6 = 0. The roots are −2, 1, 3: the smallest positive one is 1." },
      { type: "order", q: "Put in order the steps for solving a rational inequality.", items: ["Bring everything to one side and reduce to a single fraction ⋚ 0", "Factorise numerator and denominator", "Study the sign of each factor", "Apply the rule of signs and choose the required regions", "Exclude the values that make the denominator zero"], explain: "Reduce, factorise, study the signs, read off the solution and exclude the zeros of the denominator." },
      { type: "text", q: "What is the name of the method for dividing a polynomial by (x − a) using only the coefficients? (the mathematician's surname)", answer: ["ruffini", "ruffini's rule", "ruffinis rule", "ruffini rule", "paolo ruffini"], explain: "It is the rule of Paolo Ruffini (1765–1822), an Italian mathematician; in English it is also called synthetic division." }
    ]
  }
});
