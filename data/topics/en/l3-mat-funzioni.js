TOPIC('en', {
  id: "l3-mat-funzioni",
  title: "Functions",
  intro: "Every time your sat nav works out the travel time from the distance, an app turns your marks into an average, or a bill depends on how much you've used, there is a <b>function</b>: a rule that assigns to each input value <b>one and only one</b> output value. In this lesson we define functions rigorously, learn how to find the <b>domain</b> and <b>range</b>, distinguish <b>injective, surjective and bijective</b> functions, and build <b>inverse</b> and <b>composite</b> functions. It is the common language of all the calculus you will study up to your final exam.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "What is a function?",
      html: `<p>A <b>function</b> from a set A to a set B is a rule f that assigns to <b>every</b> element x of A <b>one and only one</b> element y of B. We write <b>f: A → B</b> and y = f(x), and we say that y is the <b>image</b> of x and x is a <b>preimage</b> of y.</p>
<ul>
<li><b>A</b> is the <b>domain</b> (the starting set, or set of definition); <b>B</b> is the <b>codomain</b> (the target set).</li>
<li>The <b>range</b> (or image set) of f is the subset of B made up of the values <b>actually</b> taken: Im(f) = { f(x) : x ∈ A }. It can be smaller than the codomain.</li>
<li>The <b>graph</b> of f is the set of pairs (x, f(x)) in the Cartesian plane.</li>
</ul>
<p>Both conditions are essential: <b>every</b> element of the domain must have an image (none is left "unconnected"), and it must have <b>only one</b>. Graphically: a curve is the graph of a function of x if every <b>vertical line</b> meets it <b>at most once</b> (the vertical line test). So a circle x² + y² = 1 is <b>not</b> the graph of a function y = f(x): the line x = 0 meets it at (0, 1) and (0, −1).</p>
<p>Numerical functions (A, B ⊆ ℝ) are often given by a <b>formula</b>, such as f(x) = 2x + 3; but they can also be given by a <b>table</b>, a <b>graph</b>, a <b>description in words</b> or a <b>piecewise definition</b>, like the absolute value f(x) = |x| = x if x ≥ 0, −x if x &lt; 0.</p>`
    },
    {
      type: "example",
      title: "Real-life example: the phone tariff",
      html: `<p>A provider charges €5 a month plus €0.10 for every GB used, with a monthly cap of €15. The monthly cost C as a function of GB (g ≥ 0) is a <b>piecewise</b> function: C(g) = 5 + 0.1g for 0 ≤ g ≤ 100, and C(g) = 15 for g &gt; 100. Domain: [0, +∞). Range: [5, 15] (the minimum cost is €5 at 0 GB, the maximum €15 after 100 GB). Every g has <b>only one</b> cost, but equal costs (€15) correspond to infinitely many values of g: the function is <b>not injective</b> (we'll see what this means shortly).</p>`
    },
    {
      type: "text",
      title: "The domain of a numerical function",
      html: `<p>When a function is given only by its formula, its <b>domain</b> (or <b>natural domain</b>) is the set of real numbers for which the formula makes sense. For now there are three conditions to check:</p>
<ul>
<li><b>Denominator ≠ 0</b>: you cannot divide by zero. For f(x) = 1/(x − 3): x ≠ 3, that is D = ℝ \\ {3}.</li>
<li><b>Radicand ≥ 0</b> for roots of even index: for f(x) = √(x − 1): x ≥ 1, that is D = [1, +∞). Roots of odd index (∛x) exist for every x.</li>
<li><b>Argument &gt; 0</b> for the logarithm (and a positive base ≠ 1), plus other conditions (tangent, arcsine...) that you will meet later.</li>
</ul>
<p>If there are several conditions, they are combined in a <b>system</b>. Examples:</p>
<ul>
<li>f(x) = √(x − 1)/(x − 3): { x − 1 ≥ 0 ; x − 3 ≠ 0 } → x ≥ 1 ∧ x ≠ 3, that is D = [1, 3) ∪ (3, +∞).</li>
<li>f(x) = 1/√(4 − x²): we need 4 − x² &gt; 0 (radicand ≥ 0 and denominator ≠ 0 together) → −2 &lt; x &lt; 2, D = (−2, 2). Here we use a quadratic inequality!</li>
<li>f(x) = √(x² − 5x + 6) : x² − 5x + 6 ≥ 0 → x ≤ 2 ∨ x ≥ 3.</li>
</ul>
<p>To find the <b>range</b> you can use the graph, solve the equation y = f(x) for x (the values of y for which it has a solution in the domain), or reason directly (a square is ≥ 0; √ ≥ 0...). Example: f(x) = x² + 1 has range [1, +∞); f(x) = 2x + 3 has range ℝ.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: domain",
      questions: [
        { type: "mc", q: "What is the domain of f(x) = √(x + 4)?", options: ["x ≥ −4", "x &gt; −4", "x ≥ 4"], answer: 0, explain: "We need x + 4 ≥ 0, that is x ≥ −4." },
        { type: "mc", q: "What is the domain of f(x) = (x + 1)/(x² − 9)?", options: ["x ≠ 3", "x ≠ 3 and x ≠ −3", "x ≠ −1"], answer: 1, explain: "The denominator is zero for x = ±3, which must be excluded." },
        { type: "tf", q: "A circle is the graph of a function y = f(x).", answer: false, explain: "For almost every x there are two values of y: there is no single image." }
      ]
    },
    {
      type: "svg",
      title: "Injective, surjective, bijective functions: arrow diagrams",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#334155" stroke-width="2" fill="none">
<ellipse cx="60" cy="130" rx="32" ry="75"/><ellipse cx="160" cy="130" rx="32" ry="75"/>
<ellipse cx="260" cy="130" rx="32" ry="75"/><ellipse cx="360" cy="130" rx="32" ry="75"/>
<ellipse cx="460" cy="130" rx="32" ry="75"/><ellipse cx="560" cy="130" rx="32" ry="75"/>
</g>
<g fill="#1e293b">
<circle cx="60" cy="90" r="5"/><circle cx="60" cy="130" r="5"/><circle cx="60" cy="170" r="5"/>
<circle cx="160" cy="80" r="5"/><circle cx="160" cy="130" r="5"/><circle cx="160" cy="180" r="5"/>
<circle cx="260" cy="90" r="5"/><circle cx="260" cy="130" r="5"/><circle cx="260" cy="170" r="5"/>
<circle cx="360" cy="110" r="5"/><circle cx="360" cy="150" r="5"/>
<circle cx="460" cy="90" r="5"/><circle cx="460" cy="130" r="5"/><circle cx="460" cy="170" r="5"/>
<circle cx="560" cy="90" r="5"/><circle cx="560" cy="130" r="5"/><circle cx="560" cy="170" r="5"/>
</g>
<g stroke="#16a34a" stroke-width="3">
<line x1="60" y1="90" x2="160" y2="80"/><line x1="60" y1="130" x2="160" y2="130"/><line x1="60" y1="170" x2="160" y2="180"/>
</g>
<g stroke="#2563eb" stroke-width="3">
<line x1="260" y1="90" x2="360" y2="110"/><line x1="260" y1="130" x2="360" y2="110"/><line x1="260" y1="170" x2="360" y2="150"/>
</g>
<g stroke="#ea580c" stroke-width="3">
<line x1="460" y1="90" x2="560" y2="90"/><line x1="460" y1="130" x2="560" y2="90"/><line x1="460" y1="170" x2="560" y2="130"/>
</g>
<text x="110" y="240" font-size="16" fill="#166534" text-anchor="middle" font-weight="bold">bijective</text>
<text x="110" y="262" font-size="14" fill="#334155" text-anchor="middle">one-to-one, none left over</text>
<text x="310" y="240" font-size="16" fill="#1d4ed8" text-anchor="middle" font-weight="bold">surjective</text>
<text x="310" y="262" font-size="14" fill="#334155" text-anchor="middle">all reached, not injective</text>
<text x="510" y="240" font-size="16" fill="#9a3412" text-anchor="middle" font-weight="bold">neither</text>
<text x="510" y="262" font-size="14" fill="#334155" text-anchor="middle">one point left over, two arrows</text>
<text x="510" y="280" font-size="14" fill="#334155" text-anchor="middle">reach the same point</text>
</svg>`,
      caption: "Each pair of ovals is a domain (left) and codomain (right); an arrow joins x to f(x). In the third case one target point is not reached and two starting points have the same image."
    },
    {
      type: "text",
      title: "Injective, surjective, bijective",
      html: `<p>Given f: A → B:</p>
<ul>
<li><b>Injective</b> (one-to-one): <b>different</b> elements have <b>different</b> images. In symbols: x₁ ≠ x₂ ⟹ f(x₁) ≠ f(x₂); equivalently f(x₁) = f(x₂) ⟹ x₁ = x₂. Every element of B has <b>at most one</b> preimage. <i>Graphical test</i>: every <b>horizontal</b> line meets the graph <b>at most once</b>.</li>
<li><b>Surjective</b> (onto): <b>every</b> element of B is the image of <b>at least one</b> element of A, that is Im(f) = B. <i>Graphical test</i>: every horizontal line y = k, with k in the codomain, meets the graph <b>at least once</b>.</li>
<li><b>Bijective</b> (a one-to-one correspondence): injective <b>and</b> surjective. Every element of B has <b>exactly one</b> preimage. Only bijective functions can be inverted.</li>
</ul>
<p>Careful: injectivity and surjectivity depend <b>on the domain and codomain</b>, not just on the formula. The same formula f(x) = x² can be:</p>
<ul>
<li>f: ℝ → ℝ: <b>neither injective nor surjective</b> (f(2) = f(−2); no x gives −1);</li>
<li>f: ℝ → [0, +∞): <b>surjective</b> but not injective;</li>
<li>f: [0, +∞) → ℝ: <b>injective</b> but not surjective;</li>
<li>f: [0, +∞) → [0, +∞): <b>bijective</b>.</li>
</ul>
<p><b>Example</b>: f(x) = 2x + 3 from ℝ to ℝ is bijective: from 2x₁ + 3 = 2x₂ + 3 it follows that x₁ = x₂ (injective), and for every y we have x = (y − 3)/2 (surjective).</p>
<p><b>Finite sets</b>: if A has k elements and B has n, there are <b>nᵏ</b> functions from A to B; the injective ones (possible if k ≤ n) number n(n − 1)...(n − k + 1). If k = n, a function is injective if and only if it is surjective if and only if it is bijective (and there are n! of them).</p>`
    },
    {
      type: "text",
      title: "Monotonicity, symmetry and other properties",
      html: `<p>Other useful properties for describing a function:</p>
<ul>
<li><b>Increasing</b> (strictly) on an interval: x₁ &lt; x₂ ⟹ f(x₁) &lt; f(x₂). <b>Decreasing</b>: x₁ &lt; x₂ ⟹ f(x₁) &gt; f(x₂). A <b>strictly monotonic</b> function is always injective (by the horizontal line test).</li>
<li><b>Even</b>: f(−x) = f(x) for every x in the domain (symmetric domain); the graph is <b>symmetric about the y-axis</b>. E.g.: x², |x|, cos x.</li>
<li><b>Odd</b>: f(−x) = −f(x); the graph is <b>symmetric about the origin</b>. E.g.: x, x³, sin x.</li>
<li><b>Periodic</b> with period T: f(x + T) = f(x) for every x (trigonometric functions, for example).</li>
<li><b>Zeros</b>: the values of x for which f(x) = 0 (intersections with the x-axis); <b>sign</b>: where f(x) &gt; 0 or &lt; 0 (inequalities!).</li>
</ul>
<p>Example: f(x) = x³ − x. We have f(−x) = −x³ + x = −f(x): it is odd. Zeros: x(x − 1)(x + 1) = 0 → −1, 0, 1. Sign: positive for −1 &lt; x &lt; 0 and for x &gt; 1.</p>`
    },
    {
      type: "svg",
      title: "The inverse function: symmetry about the line y = x",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="90" y1="250" x2="420" y2="250" stroke="#475569" stroke-width="2"/>
<line x1="100" y1="260" x2="100" y2="30" stroke="#475569" stroke-width="2"/>
<line x1="100" y1="250" x2="285" y2="65" stroke="#94a3b8" stroke-width="2" stroke-dasharray="7 5"/>
<polyline points="100,250 109,230 118,222 127,215 136,210 145,205 154,201 163,197 172,193 181,190 190,186 199,183 208,180 217,177 226,175 235,172 244,170 253,167 262,165 271,162 280,160" fill="none" stroke="#2563eb" stroke-width="4"/>
<polyline points="100,250 104,250 109,248 114,246 118,243 122,239 127,234 132,228 136,221 140,214 145,205 150,196 154,185 158,174 163,162 168,149 172,135 176,120 181,104 186,88 190,70" fill="none" stroke="#ea580c" stroke-width="4"/>
<circle cx="280" cy="160" r="6" fill="#2563eb"/>
<circle cx="190" cy="70" r="6" fill="#ea580c"/>
<text x="290" y="168" font-size="16" fill="#1d4ed8" font-weight="bold">(4; 2)</text>
<text x="200" y="68" font-size="16" fill="#9a3412" font-weight="bold">(2; 4)</text>
<text x="300" y="62" font-size="16" fill="#475569">y = x</text>
<text x="300" y="206" font-size="16" fill="#1d4ed8" font-weight="bold">f(x) = √x</text>
<text x="440" y="110" font-size="16" fill="#9a3412" font-weight="bold">f⁻¹(x) = x²  (x ≥ 0)</text>
<text x="440" y="140" font-size="14" fill="#334155">(x, y) ↔ (y, x):</text>
<text x="440" y="160" font-size="14" fill="#334155">swapping the x- and</text>
<text x="440" y="180" font-size="14" fill="#334155">y-coordinates</text>
</svg>`,
      caption: "The graphs of √x and of x² (for x ≥ 0) are symmetric about the line y = x: each point (a, b) of the first corresponds to (b, a) of the second."
    },
    {
      type: "text",
      title: "The inverse function",
      html: `<p>If f: A → B is <b>bijective</b>, each y in B corresponds to <b>exactly one</b> x in A with f(x) = y: the rule "y ↦ x" is a function from B to A, called the <b>inverse function</b> and written <b>f⁻¹</b> (careful: f⁻¹ is <i>not</i> 1/f!). The following hold:</p>
<ul>
<li><b>f⁻¹(f(x)) = x</b> for every x in A and <b>f(f⁻¹(y)) = y</b> for every y in B: the inverse "undoes" the function.</li>
<li>Domain of f⁻¹ = codomain (= range) of f, and vice versa.</li>
<li>The graph of f⁻¹ is the reflection of the graph of f in the <b>line y = x</b> (because (a, b) is on the graph of f ⟺ (b, a) is on the graph of f⁻¹).</li>
</ul>
<p><b>How to find it.</b> (1) Check that f is bijective (restricting the domain and codomain if necessary). (2) Write y = f(x) and <b>solve for x in terms of y</b>. (3) Swap the names of the variables (x ↔ y).</p>
<p><b>Example 1.</b> f(x) = 2x + 3: y = 2x + 3 → x = (y − 3)/2 → <b>f⁻¹(x) = (x − 3)/2</b>.</p>
<p><b>Example 2.</b> f(x) = (x + 1)/(x − 2) with domain ℝ \\ {2}. From y(x − 2) = x + 1 → xy − 2y = x + 1 → x(y − 1) = 2y + 1 → x = (2y + 1)/(y − 1) (possible if y ≠ 1). So the range is ℝ \\ {1} and <b>f⁻¹(x) = (2x + 1)/(x − 1)</b>, from ℝ \\ {1} to ℝ \\ {2}.</p>
<p><b>Example 3: restriction.</b> f(x) = x² is not invertible on ℝ. But on [0, +∞) it is, with inverse <b>√x</b>. On (−∞, 0] the inverse would be −√x. This is why the "inverse functions" of even powers require choosing a branch.</p>
<p><b>Example 4: exponentials and logarithms</b> (a preview): f(x) = 2ˣ from ℝ to (0, +∞) is bijective and its inverse is log₂ x: "the logarithm is the inverse of the exponential".</p>`
    },
    {
      type: "text",
      title: "Composition of functions",
      html: `<p>Given f: A → B and g: B → C (or more generally with the range of f contained in the domain of g), the <b>composite function</b> g ∘ f ("g after f") is the function from A to C defined by <b>(g ∘ f)(x) = g(f(x))</b>: first apply f, then apply g to the output of f.</p>
<ul>
<li>Composition is <b>not commutative</b>: in general g ∘ f ≠ f ∘ g.</li>
<li>It is <b>associative</b>: h ∘ (g ∘ f) = (h ∘ g) ∘ f.</li>
<li>The <b>identity function</b> id(x) = x is the neutral element: f ∘ id = id ∘ f = f. If f is bijective, f⁻¹ ∘ f = id and f ∘ f⁻¹ = id.</li>
<li>The <b>domain</b> of g ∘ f is the set of x in the domain of f such that f(x) belongs to the domain of g.</li>
</ul>
<p><b>Example.</b> f(x) = x + 1, g(x) = x². (g ∘ f)(x) = g(x + 1) = (x + 1)²; (f ∘ g)(x) = f(x²) = x² + 1. For x = 3 we get 16 versus 10: order matters! (Like putting on your socks and then your shoes: the reverse order is not the same thing.)</p>
<p><b>Example with domain.</b> f(x) = x − 4, g(x) = √x. (g ∘ f)(x) = √(x − 4), defined only for x ≥ 4, even though f is defined everywhere. On the other hand (f ∘ g)(x) = √x − 4 is defined for x ≥ 0.</p>
<p><b>Decomposing.</b> Being able to recognise a function as a composite helps you understand its structure: h(x) = √(3x − 5) = g(f(x)) with f(x) = 3x − 5 and g(x) = √x; h(x) = (x² + 1)³ = g(f(x)) with f(x) = x² + 1, g(x) = x³ (the "chain rule" for derivatives, which you will meet in your last two years, starts exactly from this decomposition).</p>`
    },
    {
      type: "example",
      title: "Real-life example: converting temperatures... and back again",
      html: `<p>Converting degrees Celsius to Fahrenheit is F(c) = 1.8c + 32, a bijective function from ℝ to ℝ. Its inverse is C(f) = (f − 32)/1.8 (from Fahrenheit to Celsius). Check: 25 °C → F = 45 + 32 = 77 °F; then (77 − 32)/1.8 = 25 ✔️. If a thermostat then converts the temperature to kelvin, K(c) = c + 273.15, the composition K ∘ C converts directly from Fahrenheit to kelvin: (K ∘ C)(f) = (f − 32)/1.8 + 273.15. This is why in software conversions are "chained": each step is a function and the result is their composite. Note: when converting, the formula is not all that matters; the inverse is needed to go back, and that is why it is good for conversions to be <b>bijective</b>.</p>`
    },
    {
      type: "example",
      title: "Real-life example: searching on your phone",
      html: `<p>Think of your smartphone's contacts: the rule that assigns each person their main number is a function (each person has only one main number). It is <b>injective</b> if two different people never have the same number (if two friends share a home phone number, it isn't). If there are numbers not assigned to anyone, it is not surjective onto the set of all possible numbers. The <b>inverse</b> ("given a number, who is it?") exists only if the function is bijective: this is why caller ID works well with unique numbers. The same happens with tax codes, student numbers and IDs: they are designed to be <b>injective functions</b> from people to codes.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The history of the concept of function",
      html: `<p>The word <i>function</i> was used by <b>Leibniz</b> at the end of the 17th century, but the concept was tied to formulas and curves. The notation <b>f(x)</b> is due to <b>Euler</b> (mid-18th century). The modern definition, in which a function is an <i>arbitrary correspondence</i> and not necessarily a formula, became established in the 19th century with <b>Dirichlet</b> (1837); as an example he proposed (already in 1829) the function that equals 1 on the rationals and 0 on the irrationals, which is impossible to draw! Today, in set theory, a function is simply a set of ordered pairs.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The pigeonhole principle",
      html: `<p>If you put 11 socks into 10 drawers, at least one drawer contains two. This is Dirichlet's <b>pigeonhole principle</b> (or "drawer principle"): <b>no function from a set of 11 elements to a set of 10 can be injective</b>. A surprising consequence follows: in a city of several million inhabitants there are certainly two people with exactly the same number of hairs, because nobody has more than a few hundred thousand (the function inhabitant → number of hairs cannot be injective). Discrete mathematics is full of arguments like this.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand functions",
      intro: "The word \"function\" can seem abstract. Here are three concrete ways to see it.",
      tabs: [
        {
          label: "🏭 The machine",
          html: `<p>Imagine a <b>machine</b> with an input slot and an output slot: put in x, out comes f(x). The machine must be <b>deterministic</b>: the same input always gives the same output (otherwise it is not a function). The composition g ∘ f means putting two machines <b>in series</b>: the output of the first goes into the second. The inverse is the machine that "runs backwards", and it can only be built if the machine does not "squash" two different inputs onto the same output (injectivity) and if every possible output can be obtained (surjectivity).</p>`
        },
        {
          label: "📊 Table and graph",
          html: `<p>A function can be just a <b>table</b>: x = 1, 2, 3, 4 → y = 2, 4, 6, 8. The <b>graph</b> places it in the plane: if the points lie on a straight line, it is y = 2x. The <b>inverse</b> is obtained by <b>swapping the columns</b> of the table: x = 2, 4, 6, 8 → y = 1, 2, 3, 4, that is y = x/2. Graphically, swapping the columns = reflecting in the line y = x.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="60" y1="260" x2="320" y2="260" stroke="#475569" stroke-width="2"/><line x1="70" y1="270" x2="70" y2="30" stroke="#475569" stroke-width="2"/><line x1="70" y1="260" x2="290" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="7 5"/><line x1="70" y1="260" x2="220" y2="40" stroke="#2563eb" stroke-width="4"/><line x1="70" y1="260" x2="290" y2="150" stroke="#ea580c" stroke-width="4"/><text x="226" y="48" font-size="16" fill="#1d4ed8" font-weight="bold">y = 2x</text><text x="295" y="152" font-size="16" fill="#9a3412" font-weight="bold">y = x/2</text><text x="300" y="38" font-size="16" fill="#475569">y = x</text><text x="350" y="100" font-size="16" fill="#334155">x:  1  2  3  4</text><text x="350" y="125" font-size="16" fill="#1d4ed8">f:  2  4  6  8</text><text x="350" y="165" font-size="16" fill="#334155">x:  2  4  6  8</text><text x="350" y="190" font-size="16" fill="#9a3412">f⁻¹: 1  2  3  4</text></svg>`
        },
        {
          label: "🧩 Sets of points and arrows",
          html: `<p>Draw two "bags" of points and connect each point of A with <b>a single arrow</b> to a point of B. <b>Injective</b> = <b>at most one arrow</b> reaches each point of B. <b>Surjective</b> = <b>at least one arrow</b> reaches each point of B. <b>Bijective</b> = exactly one: you can reverse all the arrows and still get a function. Try it yourself: can a function from A (3 elements) to B (3 elements) be injective but not surjective? <i>No</i>: for finite sets with the same number of elements the two properties coincide.</p>`,
          widget: "classify",
          options: { groups: ["Injective", "Not injective"], items: [["f(x) = 2x + 1 on ℝ", 0], ["f(x) = x² on ℝ", 1], ["f(x) = x³ on ℝ", 0], ["f(x) = |x| on ℝ", 1], ["f(x) = √x on [0, +∞)", 0]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of functions",
      nodes: [
        { id: "def", label: "Function", x: 50, y: 6, color: "#6366f1", html: "A rule that assigns to each x in the domain one and only one y in the codomain.", why: "Dirichlet (1837) made it an arbitrary correspondence; in the 20th century it became a set of ordered pairs, the foundation of all mathematics." },
        { id: "dom", label: "Domain and range", x: 18, y: 30, color: "#16a34a", html: "Where the formula makes sense and which values it takes.", why: "You need the domain conditions: denominators ≠ 0, even-index radicands ≥ 0 (and arguments of logarithms &gt; 0)." },
        { id: "tipi", label: "Injective, surjective, bijective", x: 82, y: 30, color: "#f59e0b", html: "How the arrows between A and B behave.", why: "This is the notion that lets us compare the \"size\" of sets (Cantor): two sets have the same number of elements if there is a bijection between them." },
        { id: "inv", label: "Inverse function", x: 82, y: 62, color: "#ef4444", html: "It exists only if f is bijective; the graph is reflected in y = x.", why: "Solving an equation y = f(x) means exactly finding the preimages: if there is only one, the inverse exists." },
        { id: "comp", label: "Composition", x: 18, y: 62, color: "#0ea5e9", html: "g ∘ f: first f, then g; not commutative.", why: "It describes multi-stage processes; the inverse is defined by f⁻¹ ∘ f = id." },
        { id: "prop", label: "Properties (monotonicity, symmetry, zeros)", x: 50, y: 88, color: "#a855f7", html: "They describe the shape of the graph.", why: "Tools of calculus: strict monotonicity implies injectivity, and therefore invertibility." }
      ],
      edges: [
        ["def", "dom", "has"],
        ["def", "tipi", "classifies"],
        ["tipi", "inv", "bijective ⇒"],
        ["def", "comp", "can be composed"],
        ["comp", "inv", "f⁻¹∘f = id"],
        ["dom", "prop", "study of"],
        ["inv", "prop", "monotonic ⇒ invertible"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: inverse and composite",
      questions: [
        { type: "mc", q: "The inverse of f(x) = 3x − 6 is…", options: ["(x + 6)/3", "(x − 6)/3", "1/(3x − 6)"], answer: 0, explain: "y = 3x − 6 → x = (y + 6)/3; swapping the names: (x + 6)/3." },
        { type: "num", q: "If f(x) = x + 1 and g(x) = x², what is (g ∘ f)(2)?", answer: 9, explain: "(g ∘ f)(2) = g(f(2)) = g(3) = 9." },
        { type: "tf", q: "The function f(x) = x² from ℝ to ℝ is invertible.", answer: false, explain: "It is not injective: f(2) = f(−2) = 4. It can only be inverted on [0, +∞) or on (−∞, 0]." }
      ]
    }
  ],
  glossary: [
    { t: "Function", d: "A rule that assigns to each element of the domain one and only one element of the codomain." },
    { t: "Domain", d: "The set of elements on which the function is defined." },
    { t: "Codomain", d: "The set in which the function takes its values." },
    { t: "Range (image)", d: "The set of values actually taken by the function." },
    { t: "Injective function", d: "Different elements have different images." },
    { t: "Surjective function", d: "Every element of the codomain is the image of at least one element of the domain." },
    { t: "Bijective function", d: "Injective and surjective: a one-to-one correspondence." },
    { t: "Inverse function", d: "The function f⁻¹ that maps f(x) back to x; it exists if f is bijective." },
    { t: "Composite function", d: "g ∘ f, defined by (g ∘ f)(x) = g(f(x))." },
    { t: "Even / odd function", d: "Even: f(−x) = f(x); odd: f(−x) = −f(x)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "The domain of f(x) = √(x − 1)/(x − 3) is…", options: ["[1, 3) ∪ (3, +∞)", "[1, +∞)", "ℝ \\ {3}"], answer: 0, explain: "We need x ≥ 1 (radicand) and x ≠ 3 (denominator)." },
      { type: "mc", q: "The domain of f(x) = 1/√(4 − x²) is…", options: ["[−2, 2]", "(−2, 2)", "ℝ \\ {2}"], answer: 1, explain: "The radicand must be strictly positive: 4 − x² &gt; 0 → −2 &lt; x &lt; 2." },
      { type: "tf", q: "A vertical line can intersect the graph of a function y = f(x) at two points.", answer: false, explain: "Otherwise the same x would correspond to two values of y." },
      { type: "mc", q: "The function f(x) = x² from ℝ to [0, +∞) is…", options: ["bijective", "surjective but not injective", "injective but not surjective"], answer: 1, explain: "Every y ≥ 0 is reached (surjective), but f(2) = f(−2) (not injective)." },
      { type: "mc", q: "The inverse function of f(x) = 2x + 3 is…", options: ["(x − 3)/2", "2x − 3", "1/(2x + 3)"], answer: 0, explain: "x = (y − 3)/2, then swap the names." },
      { type: "num", q: "If f(x) = x − 4 and g(x) = x², what is (f ∘ g)(3)?", answer: 5, explain: "g(3) = 9; f(9) = 5." },
      { type: "mc", q: "Which function is odd?", options: ["x²", "x³ − x", "|x|"], answer: 1, explain: "f(−x) = −x³ + x = −f(x)." },
      { type: "num", q: "How many functions are there from a set of 2 elements to a set of 3 elements?", answer: 9, explain: "3² = 9: each of the 2 elements has 3 possible images." },
      { type: "order", q: "Put in order the steps for finding the inverse function.", items: ["Check that f is bijective (restricting it if necessary)", "Write y = f(x)", "Solve for x in terms of y", "Swap the names of the variables", "Check with f⁻¹(f(x)) = x"], explain: "Check invertibility, solve for x, swap x and y, and verify." },
      { type: "text", q: "What is the line of symmetry about which the graphs of f and f⁻¹ are symmetric? (equation)", answer: ["y = x", "y=x", "the line y = x", "line y = x", "x = y", "bisector", "the bisector"], explain: "The graph of the inverse is obtained by reflecting the graph of f in the line y = x." }
    ]
  }
});
