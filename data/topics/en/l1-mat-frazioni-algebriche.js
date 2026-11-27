TOPIC('en', {
  id: "l1-mat-frazioni-algebriche",
  title: "Algebraic fractions",
  intro: "You have known numerical fractions for years. What happens if the numerator and denominator contain <b>letters</b>? You get <b>algebraic fractions</b>: they are used to describe average speeds, electrical resistances and ratios between changing quantities. There is only one secret: everything you know about fractions still holds, but you must watch out for one enemy, the <b>denominator that becomes zero</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "What an algebraic fraction is",
      html: `<p>An <b>algebraic fraction</b> is an expression of the form <b>A / B</b> where A and B are polynomials and B is <b>not the zero polynomial</b>. For example:</p>
<p style="text-align:center">(x + 1)/(x − 3) &nbsp;&nbsp;&nbsp; 5/(x² − 4) &nbsp;&nbsp;&nbsp; (a² + b)/(2a)</p>
<p>An algebraic fraction is not always a number: it depends on the values we give the letters. And for some values it <b>does not exist</b>: division by zero is impossible. So:</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>Domain conditions (DC)</b>: the values of the letters for which the denominator is <b>not zero</b>. They are found by setting <b>denominator ≠ 0</b>.</p>
<p>Example: for 5/(x² − 4) we require x² − 4 ≠ 0, that is (x − 2)(x + 2) ≠ 0, so <b>x ≠ 2 and x ≠ −2</b>. The trick is always the same: <b>factorise the denominator</b> and exclude the values that make each factor zero (by the zero product property).</p>
<p>Write the DC <b>before</b> doing any simplification, because the transformations can make the problem \"disappear\" without solving it.</p>`
    },
    {
      type: "svg",
      title: "The hole in the graph",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="240" x2="560" y2="240" stroke="#475569" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="280" stroke="#475569" stroke-width="2"/>
<line x1="70" y1="270" x2="420" y2="40" stroke="#2563eb" stroke-width="4"/>
<circle cx="293" cy="176" r="9" fill="#f8fafc" stroke="#dc2626" stroke-width="4"/>
<line x1="293" y1="176" x2="293" y2="240" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="150" y1="176" x2="293" y2="176" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 5"/>
<text x="293" y="262" font-size="16" text-anchor="middle" fill="#dc2626" font-weight="bold">x = 2</text>
<text x="118" y="181" font-size="16" text-anchor="middle" fill="#dc2626" font-weight="bold">4</text>
<text x="430" y="40" font-size="16" fill="#1d4ed8" font-weight="bold">y = x + 2</text>
<text x="330" y="150" font-size="16" fill="#334155">at x = 2 the fraction does not exist</text>
<text x="300" y="25" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">y = (x² − 4)/(x − 2) = x + 2 with x ≠ 2</text>
</svg>`,
      caption: "The fraction (x² − 4)/(x − 2) simplifies to x + 2, but its graph has a hole at x = 2: simplifying must not make you forget the DC."
    },
    {
      type: "text",
      title: "Simplifying an algebraic fraction",
      html: `<p>As with numbers (15/35 = 3/5 by dividing by 5), you can simplify by dividing the numerator and denominator by a <b>common factor</b>. But be careful: you can only cancel <b>factors</b>, never the <b>terms of a sum</b>!</p>
<p><b>Procedure</b>:</p>
<ol>
<li>Factorise the numerator and denominator (common factor, special products, trinomial…).</li>
<li>Write the <b>DC</b> using the <b>original</b> factorised denominator.</li>
<li>Cancel the equal factors.</li>
</ol>
<p>Example: <b>(x² − 4)/(x² − 2x)</b> = (x + 2)(x − 2)/[x(x − 2)] = <b>(x + 2)/x</b>, with DC <b>x ≠ 0 and x ≠ 2</b>.</p>
<p>⚠️ Typical mistake: (x + 2)/(x + 3) is <b>not</b> equal to 2/3. The \"+\" joins x and 2: they are not factors. Try x = 1: 3/4 ≠ 2/3. A numerical check exposes most mistakes straight away.</p>`
    },
    {
      type: "widget",
      title: "Match each fraction with its simplified form",
      widget: "match",
      options: { pairs: [
        ["(x² − 9)/(x − 3)", "x + 3"],
        ["(x² − 2x)/x", "x − 2"],
        ["(2x + 4)/(x + 2)", "2"],
        ["(x² + 2x + 1)/(x + 1)", "x + 1"],
        ["(x² − 1)/(x² + x)", "(x − 1)/x"]
      ] },
      caption: "Factorise, cancel the common factors, remember the DC."
    },
    {
      type: "example",
      title: "Example: simplifying with a trinomial",
      html: `<p>Simplify <b>(x² − 5x + 6)/(x² − 4)</b>.</p>
<ul>
<li>Numerator: special trinomial, sum −5 and product 6 → (x − 2)(x − 3).</li>
<li>Denominator: difference of two squares → (x − 2)(x + 2).</li>
<li>DC: x ≠ 2 and x ≠ −2.</li>
<li>Cancel (x − 2): result <b>(x − 3)/(x + 2)</b>.</li>
<li>Check with x = 4: original (16 − 20 + 6)/(16 − 4) = 2/12 = 1/6; simplified (4 − 3)/(4 + 2) = 1/6 ✔️</li>
</ul>`
    },
    {
      type: "text",
      title: "Multiplication, division and powers",
      html: `<p>The rules are those of numerical fractions:</p>
<ul>
<li><b>Product</b>: A/B · C/D = (A·C)/(B·D). It is best to factorise and cancel <b>before</b> multiplying.</li>
<li><b>Quotient</b>: A/B ÷ C/D = A/B · <b>D/C</b> (multiply by the <b>reciprocal</b>). In addition, the divisor must not be zero: <b>C ≠ 0</b>.</li>
<li><b>Power</b>: (A/B)ⁿ = Aⁿ/Bⁿ.</li>
</ul>
<p><b>Product example</b>: (x² − 1)/(x² + 2x) · x/(x + 1) = (x − 1)(x + 1)/[x(x + 2)] · x/(x + 1) = <b>(x − 1)/(x + 2)</b>, with DC x ≠ 0, −2, −1.</p>
<p><b>Quotient example</b>: x/(x − 2) ÷ x²/(x² − 4) = x/(x − 2) · (x − 2)(x + 2)/x² = <b>(x + 2)/x</b>. DC: x ≠ 2, −2 and also x ≠ 0 (the divisor x²/(x² − 4) must not be zero, and x is in the denominator).</p>`
    },
    {
      type: "text",
      title: "Addition and subtraction",
      html: `<p>As for 1/6 + 1/4, you need <b>equal denominators</b>: use the <b>LCM</b> of the <b>factorised</b> denominators.</p>
<ol>
<li>Factorise the denominators and write the DC.</li>
<li>Find the LCM (common and non-common factors, with the highest exponent).</li>
<li>Transform each fraction: multiply the numerator by the missing factor.</li>
<li>Add the numerators (watch the signs in front of brackets!).</li>
<li>Simplify if possible.</li>
</ol>
<p><b>Example</b>: 1/(x − 1) + 1/(x + 1). The LCM is (x − 1)(x + 1) = x² − 1. Then [(x + 1) + (x − 1)]/(x² − 1) = <b>2x/(x² − 1)</b>, with DC x ≠ ±1.</p>
<p><b>Example with subtraction</b>: 3/x − 2/(x + 1) = [3(x + 1) − 2x]/[x(x + 1)] = (3x + 3 − 2x)/[x(x + 1)] = <b>(x + 3)/[x(x + 1)]</b>. The minus sign changes every term of −2x: forgetting it is a classic mistake!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: DC and simplification",
      questions: [
        { type: "num", q: "For which value of x does the fraction 1/(x − 5) not exist?", answer: 5, explain: "The denominator is zero for x = 5." },
        { type: "mc", q: "The DC of (x + 3)/(x² − 9) are…", options: ["x ≠ 3 and x ≠ −3", "x ≠ 9", "x ≠ −3 only"], answer: 0, explain: "x² − 9 = (x − 3)(x + 3), which is zero for x = 3 and for x = −3." },
        { type: "tf", q: "(x + 2)/(x + 3) = 2/3, because you can cancel x.", answer: false, explain: "x is a term of a sum, not a factor: it cannot be cancelled. With x = 1 you get 3/4, not 2/3." }
      ]
    },
    {
      type: "example",
      title: "Practical example: there at 60 km/h, back at 40",
      html: `<p>You drive into town at 60 km/h and come back at 40 km/h on the same road. What is the average speed for the whole trip? It is not 50! If the distance is d km: time there d/60, time back d/40; total time <b>d/60 + d/40 = 5d/120 = d/24</b>. The average speed is (2d)/(d/24) = <b>48 km/h</b>. The letter d cancels: the result does not depend on the distance. In general the average speed is 2v₁v₂/(v₁ + v₂): an algebraic fraction in every sense (the <b>harmonic mean</b>).</p>`
    },
    {
      type: "example",
      title: "Practical example: resistors in parallel",
      html: `<p>In physics, two resistors R₁ and R₂ connected in <b>parallel</b> are equivalent to a resistance R with <b>1/R = 1/R₁ + 1/R₂</b>. Adding the fractions: 1/R = (R₂ + R₁)/(R₁R₂), so <b>R = R₁R₂/(R₁ + R₂)</b>. With R₁ = 6 Ω and R₂ = 3 Ω: R = 18/9 = <b>2 Ω</b>. The parallel circuit has a lower resistance than either of the two: it's like opening a second lane on the motorway.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know? The proof that 1 = 2",
      html: `<p>Take a = b. Multiply by a: a² = ab. Subtract b²: a² − b² = ab − b². Factorise: (a + b)(a − b) = b(a − b). \"Cancel\" (a − b): a + b = b, that is 2b = b, so <b>2 = 1</b>! Where's the trick? If a = b, then a − b = 0, and you have divided by zero. This is exactly why <b>domain conditions</b> are not a formality.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know? The Egyptians and unit fractions",
      html: `<p>The <b>Rhind papyrus</b> (Egypt, about 1650 BC) contains a table that writes 2/n, for odd n from 3 to 101, as a sum of <b>fractions with numerator 1</b>: for example 2/5 = 1/3 + 1/15. The ancient Egyptians hardly used any other fractions (apart from 2/3). In short, humanity has been calculating with fractions for at least four thousand years.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand algebraic fractions",
      intro: "If letters scare you, bring everything back to numbers or look at the same idea from another angle.",
      tabs: [
        {
          label: "🔢 Just like with numbers",
          html: `<p>To simplify 84/126, break it into primes: 84 = 2²·3·7 and 126 = 2·3²·7. Cancel 2·3·7 and you are left with 2/3. With polynomials you do <b>exactly the same</b>: factorise into irreducible factors and cancel the equal ones.</p>
<p>Addition is the same too: 1/6 + 1/4 → LCM 12 → 2/12 + 3/12 = 5/12. Replace 6 and 4 with x − 1 and x + 1 and you have the sum seen earlier. If you are unsure about a step, <b>try a number</b> instead of x.</p>`
        },
        {
          label: "✨ Multiplying by 1",
          html: `<p>Why, to add, do we multiply the numerator by the \"missing factor\"? Because we are multiplying the fraction by <b>1 in disguise</b>:</p>
<p style="text-align:center">1/(x − 1) = 1/(x − 1) · <b>(x + 1)/(x + 1)</b> = (x + 1)/(x² − 1)</p>
<p>(x + 1)/(x + 1) equals 1 (for x ≠ −1), so the value of the fraction doesn't change: only its \"outfit\" does. This is the invariance property: multiplying or dividing the numerator and denominator by the same non-zero polynomial does not change the fraction.</p>`
        },
        {
          label: "🧪 The number test",
          html: `<p>Have you simplified and are not sure? Choose a value of x that respects the DC and calculate <b>both the original fraction and the result</b>.</p>
<p>(x² − 1)/(x + 1) → x − 1. Try x = 5: (25 − 1)/6 = 24/6 = 4 and 5 − 1 = 4 ✔️. Now try x = −1: the original fraction does not exist, while x − 1 equals −2: that's why the DC must be stated. The test is not a proof, but if the two numbers differ you have definitely made a mistake.</p>`,
          widget: "numberLine",
          options: { min: -5, max: 10, step: 1, marks: [-1, 5] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of algebraic fractions",
      nodes: [
        { id: "frnum", label: "Numerical fraction", x: 15, y: 8, color: "#64748b", html: "A ratio of two integers (denominator ≠ 0).", why: "Fractions arose for measuring and sharing: the Egyptians (Rhind papyrus) and the Babylonians already used them. The denominator cannot be zero because no number multiplied by 0 gives a number other than 0." },
        { id: "fralg", label: "Algebraic fraction", x: 55, y: 8, color: "#6366f1", html: "A ratio A/B of two polynomials, with B non-zero.", why: "When a quantity depends on a variable (speed, resistance, average price) the ratio becomes a fraction with letters." },
        { id: "ce", label: "Domain conditions", x: 85, y: 30, color: "#ef4444", html: "Values of the letters that do not make the denominator zero.", why: "Dividing by zero is impossible: a/0 = c would mean c·0 = a, but c·0 = 0 for every c, so a would have to be 0 and any value of c would do." },
        { id: "scomp", label: "Factorising", x: 20, y: 38, color: "#16a34a", html: "Writing the numerator and denominator as factors.", why: "You cancel factors, not terms: only a product can be divided by a common factor." },
        { id: "inv", label: "Invariance property", x: 55, y: 42, color: "#f59e0b", html: "Multiplying or dividing num. and den. by the same factor ≠ 0 does not change the fraction.", why: "It comes from the fact that a/a = 1 and 1 is the identity element of multiplication." },
        { id: "sempl", label: "Simplification", x: 20, y: 68, color: "#22c55e", html: "Cancel the common factors.", why: "You apply the invariance property by dividing by the common factor." },
        { id: "mcm", label: "LCM and addition", x: 55, y: 70, color: "#a855f7", html: "Bring the fractions to the same denominator.", why: "You can only add quantities 'of the same unit', like 3 apples + 2 apples: the denominator is the unit." },
        { id: "prod", label: "Product and quotient", x: 85, y: 70, color: "#0ea5e9", html: "Multiply by the reciprocal.", why: "Dividing by C/D is the same as multiplying by D/C, because C/D · D/C = 1." },
        { id: "app", label: "Applications", x: 50, y: 94, color: "#14b8a6", html: "Average speed, resistors in parallel, rational equations.", why: "Algebraic fractions link algebra to physics and prepare the ground for rational equations and rational functions." }
      ],
      edges: [
        ["frnum", "fralg", "generalises to"],
        ["fralg", "ce", "requires"],
        ["fralg", "inv", "satisfies the"],
        ["scomp", "sempl", "allows"],
        ["inv", "sempl", "justifies"],
        ["inv", "mcm", "justifies"],
        ["fralg", "prod", "operations"],
        ["mcm", "app", "uses"],
        ["prod", "app", "uses"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: operations",
      questions: [
        { type: "num", q: "The value of 5/x + 5/x for x = 5 is…", answer: 2, explain: "5/5 + 5/5 = 1 + 1 = 2." },
        { type: "mc", q: "The reciprocal of (x − 1)/(x + 2) is…", options: ["(x + 2)/(x − 1)", "(1 − x)/(x + 2)", "(x − 1)/(x + 2)"], answer: 0, explain: "The reciprocal is obtained by swapping the numerator and denominator." },
        { type: "num", q: "Calculate (x² − 4)/(x − 2) for x = 7.", answer: 9, explain: "It simplifies to x + 2; for x = 7 it equals 9. Check: 45/5 = 9." }
      ]
    }
  ],
  glossary: [
    { t: "Algebraic fraction", d: "A ratio A/B of two polynomials with B different from the zero polynomial." },
    { t: "Domain conditions (DC)", d: "The values of the letters for which the denominator is not zero (in Italian, condizioni di esistenza)." },
    { t: "Simplification", d: "Dividing the numerator and denominator by a common factor." },
    { t: "LCM", d: "Lowest common multiple of the denominators, used as the common denominator when adding." },
    { t: "Reciprocal", d: "The fraction obtained by swapping the numerator and denominator." },
    { t: "Invariance property", d: "The value of a fraction does not change if the numerator and denominator are multiplied or divided by the same non-zero factor." },
    { t: "Harmonic mean", d: "The reciprocal of the mean of the reciprocals: for example the average speed over an outward and return trip." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "The DC of (x + 1)/(x² − 4x + 3) are…", options: ["x ≠ 1 and x ≠ 3", "x ≠ −1", "x ≠ 3 only"], answer: 0, explain: "x² − 4x + 3 = (x − 1)(x − 3), which is zero for x = 1 and x = 3." },
      { type: "mc", q: "Simplifying (x² − 6x + 9)/(x² − 9) gives…", options: ["(x − 3)/(x + 3)", "(x + 3)/(x − 3)", "−6x/(−9)"], answer: 0, explain: "(x − 3)²/[(x − 3)(x + 3)] = (x − 3)/(x + 3), with x ≠ ±3." },
      { type: "num", q: "Calculate (x² − 1)/(x + 1) for x = 10.", answer: 9, explain: "It simplifies to x − 1 = 9. Check: 99/11 = 9." },
      { type: "tf", q: "(x + 5)/5 = x + 1.", answer: false, explain: "You can only cancel if 5 is a factor of the whole numerator: (x + 5)/5 = x/5 + 1." },
      { type: "mc", q: "1/(x − 2) + 1/(x + 2) =", options: ["2x/(x² − 4)", "2/(x² − 4)", "2/(2x)"], answer: 0, explain: "[(x + 2) + (x − 2)]/[(x − 2)(x + 2)] = 2x/(x² − 4)." },
      { type: "num", q: "A car covers a stretch of road at 30 km/h and drives back along it at 60 km/h. What is the average speed for the whole journey in km/h?", answer: 40, unit: "km/h", explain: "2·30·60/(30 + 60) = 3600/90 = 40." },
      { type: "order", q: "Put in order the steps to add two algebraic fractions.", items: ["Factorise the denominators and write the DC", "Find the LCM", "Rewrite the fractions over the common denominator", "Add the numerators", "Simplify the result"], explain: "The DC must always be written before any transformation." },
      { type: "text", q: "What are the conditions that exclude the values making the denominator zero called?", answer: ["domain conditions", "dc", "conditions of existence", "existence conditions", "domain", "the domain"], explain: "They are the domain conditions (DC; in Italian, condizioni di esistenza)." },
      { type: "mc", q: "Dividing by the fraction A/B is the same as…", options: ["multiplying by B/A", "multiplying by A/B", "subtracting B/A"], answer: 0, explain: "You multiply by the reciprocal (with A ≠ 0)." },
      { type: "num", q: "Two resistors of 6 Ω and 3 Ω are connected in parallel. What is the equivalent resistance in ohms?", answer: 2, unit: "Ω", explain: "R = 6·3/(6 + 3) = 2 Ω." }
    ]
  }
});
