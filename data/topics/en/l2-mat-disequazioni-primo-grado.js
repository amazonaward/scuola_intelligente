TOPIC('en', {
  id: "l2-mat-disequazioni-primo-grado",
  title: "Linear inequalities",
  intro: "A lift can carry <i>at most</i> 600 kg; a season ticket pays off <i>from</i> a certain number of visits onwards; to pass the exam you need <i>at least</i> 18 points. In real life we often don't look for one exact value, but for a <b>range</b> of acceptable values. <b>Inequalities</b> are the tool that makes this possible. Let's recall last year's linear equations and discover the new, dangerous rule: <b>what happens when you multiply by a negative number</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Inequality statements and inequalities",
      html: `<p>An <b>inequality statement</b> compares two quantities using one of the symbols <b>&lt;</b> (less than), <b>&gt;</b> (greater than), <b>≤</b> (less than or equal to), <b>≥</b> (greater than or equal to). An <b>inequality</b> in the algebraic sense is one that contains an <b>unknown</b>: it is true for some values of x and false for others. The set of values that make it true is the <b>solution set</b> and, unlike a linear equation, it usually contains <b>infinitely many numbers</b>.</p>
<p>Example: <b>x + 3 &gt; 7</b> is true for x = 5, x = 4.1, x = 100… and false for x = 4 or x = 0. The solutions are all the numbers <b>greater than 4</b>.</p>
<p>Solutions can be written in three equivalent ways:</p>
<ul>
<li><b>Inequality</b>: x &gt; 4</li>
<li><b>Interval</b>: (4, +∞), with a <b>round</b> bracket when the endpoint is excluded and a <b>square</b> bracket when it is included: x ≥ 4 becomes [4, +∞). Infinity always takes a round bracket.</li>
<li><b>Graph</b> on the number line: an <b>open dot</b> (○) if the endpoint is excluded, a <b>filled dot</b> (●) if it is included, with a line over the part that solves the inequality.</li>
</ul>
<p>Two inequalities are <b>equivalent</b> if they have the same solutions. If no number satisfies it, the inequality is <b>impossible</b> (solution: the empty set); if every real number satisfies it, it is an <b>identity</b>.</p>`
    },
    {
      type: "text",
      title: "The two equivalence principles (and the rule that changes)",
      html: `<p>As with equations, we solve by turning the inequality into simpler and simpler equivalent ones:</p>
<ul>
<li><b>1st principle</b>: adding or subtracting the <b>same expression</b> on both sides does not change the direction of the inequality. (This gives the rule for moving terms: a term moves to the other side by changing its sign.)</li>
<li><b>2nd principle</b>: multiplying or dividing both sides by a <b>positive number</b> does <b>not change</b> the direction; by a <b>negative number</b>, the direction is <b>reversed</b> (&lt; becomes &gt;, ≤ becomes ≥ and vice versa).</li>
</ul>
<p>Why? Try it with a true statement: 2 &lt; 5. Multiplying by 3: 6 &lt; 15, still true. Multiplying by −3: −6 and −15; but −6 lies to the <b>right</b> of −15 on the number line, so −6 &gt; −15. Changing sign “reflects” the number line and the order is reversed.</p>
<p>⚠️ This is the most common mistake: <b>−2x &gt; 6</b> gives <b>x &lt; −3</b>, not x &gt; −3. Always check with a test value: x = −5 → −2·(−5) = 10 &gt; 6 ✔️; whereas x = 0 → 0 &gt; 6 is false.</p>`
    },
    {
      type: "remember",
      title: "The method in six steps",
      html: `<ol>
<li>Remove the <b>brackets</b>.</li>
<li>If there are numerical denominators, multiply everything by their <b>LCM</b> (lowest common multiple; it is positive, so the direction stays the same).</li>
<li><b>Move</b> the terms with x to the left and the numbers to the right (changing sign).</li>
<li><b>Collect</b> like terms: ax &gt; b (or &lt;, ≥, ≤).</li>
<li><b>Divide</b> by a: if a is <b>negative</b>, reverse the direction.</li>
<li><b>Write</b> the solutions as an inequality, an interval or a graph, and <b>check</b> with a test number.</li>
</ol>`
    },
    {
      type: "example",
      title: "Worked example",
      html: `<p>Solve <b>(x − 1)/2 − (2x + 3)/3 ≤ 1</b>.</p>
<ol>
<li>LCM(2, 3) = 6: 3(x − 1) − 2(2x + 3) ≤ 6</li>
<li>Brackets: 3x − 3 − 4x − 6 ≤ 6</li>
<li>Simplify: −x − 9 ≤ 6 → −x ≤ 15</li>
<li>Divide by −1 and <b>reverse the direction</b>: <b>x ≥ −15</b>, that is [−15, +∞).</li>
<li>Test with x = 0: −1/2 − 1 = −3/2 ≤ 1 ✔️. Test with x = −20: −21/2 − (−37/3) = −10.5 + 12.33… ≈ 1.83 &gt; 1, not satisfied, as expected.</li>
</ol>`
    },
    {
      type: "svg",
      title: "The number line: filled or open dot?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="30" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">Same number 2, two different inequalities</text>
<line x1="40" y1="100" x2="560" y2="100" stroke="#475569" stroke-width="2"/>
<line x1="300" y1="92" x2="300" y2="108" stroke="#475569" stroke-width="2"/>
<text x="300" y="128" font-size="16" text-anchor="middle" fill="#334155">2</text>
<line x1="300" y1="100" x2="560" y2="100" stroke="#2563eb" stroke-width="6"/>
<circle cx="300" cy="100" r="9" fill="#f8fafc" stroke="#2563eb" stroke-width="3"/>
<text x="40" y="70" font-size="16" fill="#1d4ed8" font-weight="bold">x &gt; 2   →   (2, +∞)   2 excluded</text>
<line x1="40" y1="210" x2="560" y2="210" stroke="#475569" stroke-width="2"/>
<line x1="300" y1="202" x2="300" y2="218" stroke="#475569" stroke-width="2"/>
<text x="300" y="238" font-size="16" text-anchor="middle" fill="#334155">2</text>
<line x1="40" y1="210" x2="300" y2="210" stroke="#ea580c" stroke-width="6"/>
<circle cx="300" cy="210" r="9" fill="#ea580c" stroke="#ea580c" stroke-width="3"/>
<text x="40" y="180" font-size="16" fill="#9a3412" font-weight="bold">x ≤ 2   →   (−∞, 2]   2 included</text>
<text x="300" y="280" font-size="14" text-anchor="middle" fill="#475569">Open dot = excluded · Filled dot = included</text>
</svg>`,
      caption: "The graph on the number line shows at a glance which numbers solve the inequality."
    },
    {
      type: "widget",
      title: "Try it: where does the number fall?",
      widget: "numberLine",
      options: { min: -10, max: 10, step: 1, marks: [-3] },
      caption: "Solve −2x > 6: the solution is x < −3. Move along the line and check that the numbers to the left of −3 (such as −4 and −5) work, while those to the right do not."
    },
    {
      type: "example",
      title: "Practical example: the gym membership",
      html: `<p>A gym offers two options: a <b>single entry</b> for €8, or a <b>membership</b> at €30 a month plus €4 per visit. From how many visits a month is the membership worth it?</p>
<ul>
<li>Unknown: n = number of visits per month.</li>
<li>The membership is worth it if it costs <i>less</i>: 30 + 4n &lt; 8n.</li>
<li>30 &lt; 4n → n &gt; 7.5. Since n is a whole number, it is worth it from <b>8 visits</b> onwards.</li>
<li>Note: the context requires the solution to be a natural number, so from the algebraic solution set (n &gt; 7.5) we choose the part that makes sense in the problem.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: the basic rules",
      questions: [
        { type: "mc", q: "Solving −3x &lt; 12 gives…", options: ["x &lt; −4", "x &gt; −4", "x &gt; 4"], answer: 1, explain: "Dividing by −3 reverses the direction: x &gt; −4." },
        { type: "tf", q: "Dividing both sides of an inequality by a positive number changes the direction.", answer: false, explain: "The direction changes only when you multiply or divide by a negative number." },
        { type: "mc", q: "The interval [2, 7) contains…", options: ["2 but not 7", "7 but not 2", "both 2 and 7"], answer: 0, explain: "The square bracket includes the endpoint (2), the round one excludes it (7)." }
      ]
    },
    {
      type: "text",
      title: "Rational (fractional) inequalities and sign analysis",
      html: `<p>An inequality is <b>rational</b> (fractional) when the unknown appears in a denominator, for example <b>(x − 1)/(x + 2) ≥ 0</b>. Here you <b>cannot clear the denominators</b> as you do with equations: multiplying by (x + 2) is only allowed if you know the sign of (x + 2), which changes depending on x! Instead we use <b>sign analysis</b>.</p>
<ol>
<li>Move everything to the left, with 0 on the right, and reduce to <b>a single fraction</b> N(x)/D(x).</li>
<li><b>Domain condition</b>: D(x) ≠ 0.</li>
<li>Study the <b>sign of the numerator</b> (N &gt; 0) and the <b>sign of the denominator</b> (D &gt; 0), each on its own line.</li>
<li>Build the <b>sign chart</b>: under each region write the sign of the quotient (+·+ = +, +·− = −, −·− = +).</li>
<li>Choose the regions that satisfy the requirement (&gt; 0 or &lt; 0). With ≥ or ≤ the zeros of the <b>numerator</b> are included, those of the <b>denominator</b> never.</li>
</ol>
<p><b>Example</b>: (x − 1)/(x + 2) ≥ 0. Domain: x ≠ −2. Numerator ≥ 0 for x ≥ 1. Denominator &gt; 0 for x &gt; −2. Chart: for x &lt; −2 numerator − and denominator − → fraction +; between −2 and 1 numerator − and denominator + → −; for x ≥ 1 both + → +. Solution: <b>x &lt; −2 or x ≥ 1</b>, that is (−∞, −2) ∪ [1, +∞).</p>`
    },
    {
      type: "svg",
      title: "The sign chart",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">(x − 1)/(x + 2) ≥ 0</text>
<line x1="150" y1="50" x2="150" y2="250" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="380" y1="50" x2="380" y2="250" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<text x="150" y="268" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">−2</text>
<text x="380" y="268" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">1</text>
<text x="20" y="90" font-size="16" fill="#334155">N: x − 1 ≥ 0</text>
<line x1="150" y1="104" x2="380" y2="104" stroke="#dc2626" stroke-width="3" stroke-dasharray="3 4"/>
<line x1="380" y1="104" x2="580" y2="104" stroke="#16a34a" stroke-width="4"/>
<line x1="20" y1="104" x2="150" y2="104" stroke="#dc2626" stroke-width="3" stroke-dasharray="3 4"/>
<circle cx="380" cy="104" r="7" fill="#16a34a"/>
<text x="20" y="150" font-size="16" fill="#334155">D: x + 2 &gt; 0</text>
<line x1="20" y1="164" x2="150" y2="164" stroke="#dc2626" stroke-width="3" stroke-dasharray="3 4"/>
<line x1="150" y1="164" x2="580" y2="164" stroke="#16a34a" stroke-width="4"/>
<circle cx="150" cy="164" r="7" fill="#f8fafc" stroke="#16a34a" stroke-width="3"/>
<text x="20" y="215" font-size="16" fill="#334155" font-weight="bold">N/D</text>
<text x="85" y="215" font-size="20" text-anchor="middle" fill="#16a34a" font-weight="bold">+</text>
<text x="265" y="215" font-size="20" text-anchor="middle" fill="#dc2626" font-weight="bold">−</text>
<text x="480" y="215" font-size="20" text-anchor="middle" fill="#16a34a" font-weight="bold">+</text>
</svg>`,
      caption: "Solid green line = positive; red dashes = negative. The fraction is ≥ 0 to the left of −2 (excluded) and from 1 onwards (included)."
    },
    {
      type: "example",
      title: "Example: the delivery van",
      html: `<p>A delivery company has to deliver a parcel within 3 hours. Loading and unloading take a fixed 40 minutes; the road is 120 km long. What minimum average speed (in km/h) must the van travel at?</p>
<ul>
<li>Time available for driving: 3 h − 2/3 h = 7/3 h.</li>
<li>The driving time must be at most 7/3 h: 120/v ≤ 7/3, with v &gt; 0.</li>
<li>Multiply by v (positive, so the direction stays the same): 120 ≤ (7/3)v → v ≥ 120 · 3/7 = 360/7 ≈ 51.4.</li>
<li>The van must keep an average of at least <b>about 51.4 km/h</b>. It is a rational inequality in which the denominator is certainly positive: that is why we can multiply without studying the sign.</li>
</ul>`
    },
    {
      type: "text",
      title: "Systems of inequalities",
      html: `<p>Sometimes one condition is not enough: the number of passengers in a car must be <i>at least 1</i> <b>and</b> <i>at most 5</i>. A <b>system of inequalities</b> requires <b>all</b> the inequalities to be true at the same time: the solutions are the <b>intersection</b> (∩) of the solution sets.</p>
<ol>
<li>Solve <b>each</b> inequality separately.</li>
<li>Represent them on <b>parallel lines</b>, one below the other, lining up the numbers.</li>
<li>Look for the region where <b>all</b> the lines are present (usually a solid line is drawn for the solutions).</li>
<li>Write the result; if there is no common region, the system is <b>impossible</b>.</li>
</ol>
<p><b>Example</b>: { x − 1 &gt; 0 ; 2x + 4 ≤ 10 }. First: x &gt; 1. Second: 2x ≤ 6 → x ≤ 3. Intersection: <b>1 &lt; x ≤ 3</b>, that is (1, 3].</p>
<p><b>Impossible example</b>: { x &gt; 5 ; x &lt; 2 }. No number is both greater than 5 and less than 2.</p>
<p>A <b>double inequality</b> such as 2 &lt; 3x − 1 ≤ 8 is a system in disguise: 2 &lt; 3x − 1 and 3x − 1 ≤ 8, which is equivalent to 3 &lt; 3x ≤ 9, so 1 &lt; x ≤ 3.</p>`
    },
    {
      type: "svg",
      title: "Intersection of solutions",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">{ x &gt; 1 ; x ≤ 3 }  →  1 &lt; x ≤ 3</text>
<line x1="40" y1="90" x2="560" y2="90" stroke="#475569" stroke-width="2"/>
<line x1="200" y1="90" x2="560" y2="90" stroke="#2563eb" stroke-width="6"/>
<circle cx="200" cy="90" r="9" fill="#f8fafc" stroke="#2563eb" stroke-width="3"/>
<text x="200" y="125" font-size="16" text-anchor="middle" fill="#334155">1</text>
<text x="40" y="70" font-size="16" fill="#1d4ed8" font-weight="bold">x &gt; 1</text>
<line x1="40" y1="180" x2="560" y2="180" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="180" x2="360" y2="180" stroke="#ea580c" stroke-width="6"/>
<circle cx="360" cy="180" r="9" fill="#ea580c"/>
<text x="360" y="215" font-size="16" text-anchor="middle" fill="#334155">3</text>
<text x="40" y="160" font-size="16" fill="#9a3412" font-weight="bold">x ≤ 3</text>
<rect x="200" y="245" width="160" height="14" fill="#16a34a" opacity="0.8"/>
<circle cx="200" cy="252" r="9" fill="#f8fafc" stroke="#16a34a" stroke-width="3"/>
<circle cx="360" cy="252" r="9" fill="#16a34a"/>
<text x="40" y="270" font-size="16" fill="#166534" font-weight="bold">Common</text>
<line x1="200" y1="55" x2="200" y2="250" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
<line x1="360" y1="55" x2="360" y2="250" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
</svg>`,
      caption: "The green part is the region where both conditions are true: the intersection of the solutions."
    },
    {
      type: "curiosity",
      title: "Did you know…? Where &lt; and &gt; come from",
      html: `<p>The symbols <b>&lt;</b> and <b>&gt;</b> were introduced by the English mathematician and astronomer <b>Thomas Harriot</b> in his posthumous treatise <i>Artis Analyticae Praxis</i> (1631). Before him, inequalities were written in words. The = sign had appeared in 1557 with Robert Recorde, who chose two parallel lines “because no two things can be more equal” than a pair of twin lines.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Inequalities and optimisation",
      html: `<p>Companies use systems of inequalities every day: <i>“with 40 hours of work and 200 kg of raw material, how many products A and B should we make to earn the most?”</i> This is <b>linear programming</b>, formalised in the 20th century, born largely from the logistical needs of the Second World War and used today for train timetables, hospital shifts and flight routes. Every constraint is a linear inequality.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand inequalities",
      intro: "If the “reverse the direction” rule seems arbitrary, here are three ways to see it for yourself.",
      tabs: [
        {
          label: "📏 The reflected line",
          html: `<p>Take the number line and imagine multiplying every point by −1: 3 goes to −3, −5 goes to 5. The result is a <b>reflection</b> about zero: what was on the right goes to the left and vice versa. The order is reversed, so 2 &lt; 5 becomes −2 &gt; −5. Multiplying by −3 is a reflection followed by a stretch: the reversal remains.</p>`,
          widget: "numberLine",
          options: { min: -6, max: 6, step: 1, marks: [-5, -2, 2, 5] }
        },
        {
          label: "🌡️ The thermometer",
          html: `<p>Think of an expression as the <b>level on a thermometer</b>. Saying “5 − x &gt; 2” means “the temperature 5 − x is above 2”. If x increases, 5 − x <i>goes down</i>: x must be small enough, that is x &lt; 3. Understanding whether a function <b>increases or decreases</b> with x (positive or negative coefficient) explains why the direction is reversed in the second case.</p>`
        },
        {
          label: "📈 With the graph",
          html: `<p>Draw the line y = ax + b and the line y = 0 (the x-axis). The inequality ax + b &gt; 0 asks <b>where the line is above the axis</b>. If the line goes up (a &gt; 0) it is above the axis to the right of its zero; if it goes down (a &lt; 0) it is above to the left: that explains why the direction is reversed. Inequalities become <b>“when is the graph above or below?”</b>.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="30" y1="150" x2="570" y2="150" stroke="#475569" stroke-width="2"/><line x1="300" y1="20" x2="300" y2="280" stroke="#475569" stroke-width="2"/><line x1="80" y1="250" x2="260" y2="50" stroke="#2563eb" stroke-width="4"/><line x1="340" y1="50" x2="520" y2="250" stroke="#ea580c" stroke-width="4"/><text x="40" y="270" font-size="16" fill="#1d4ed8" font-weight="bold">a &gt; 0: goes up</text><text x="400" y="270" font-size="16" fill="#9a3412" font-weight="bold">a &lt; 0: goes down</text><text x="310" y="170" font-size="16" fill="#334155">x</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of inequalities",
      nodes: [
        { id: "dis", label: "Inequality", x: 50, y: 6, color: "#6366f1", html: "An inequality with an unknown: its solutions are usually an interval.", why: "It expresses conditions such as “at least”, “at most”, “within”, typical of real problems: costs, capacities, times." },
        { id: "p1", label: "1st principle", x: 18, y: 28, color: "#16a34a", html: "Adding or subtracting the same expression: the direction does not change.", why: "Moving both numbers by the same amount along the line does not change their order." },
        { id: "p2", label: "2nd principle", x: 82, y: 28, color: "#f59e0b", html: "Multiplying/dividing by a number ≠ 0: if it is negative, the direction is reversed.", why: "Multiplying by a negative number reflects the line about zero: the order is reversed. That is why it is the most important rule to remember." },
        { id: "intervalli", label: "Intervals", x: 50, y: 48, color: "#a855f7", html: "Notation for solution sets: a round bracket excludes, a square bracket includes.", why: "A set of infinitely many real numbers cannot be listed: it is described by its endpoints, a basic concept of calculus." },
        { id: "fratte", label: "Rational inequalities", x: 18, y: 72, color: "#0ea5e9", html: "They are rewritten as N/D ≷ 0 and the sign is studied with a chart.", why: "You cannot multiply by D(x) without knowing its sign: that is why we study the signs of numerator and denominator." },
        { id: "sistemi", label: "Systems", x: 82, y: 72, color: "#ef4444", html: "Several inequalities together: solutions = intersection.", why: "The logical connective “and” corresponds to the intersection of sets: it recalls the logic of earlier years." },
        { id: "prob", label: "Problems", x: 50, y: 92, color: "#22c55e", html: "Constraints are translated into inequalities and the interval is interpreted.", why: "The algebraic solution must always be compared with the context: for example, people are counted with positive whole numbers." }
      ],
      edges: [
        ["dis", "p1", "is transformed with"],
        ["dis", "p2", "is transformed with"],
        ["p1", "intervalli", "leads to"],
        ["p2", "intervalli", "leads to"],
        ["intervalli", "fratte", "sign analysis"],
        ["intervalli", "sistemi", "intersect"],
        ["sistemi", "prob", "model"],
        ["fratte", "prob", "model"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: rational inequalities and systems",
      questions: [
        { type: "mc", q: "The solution of the system { x &gt; 2 ; x ≤ 6 } is…", options: ["2 &lt; x ≤ 6", "x &gt; 6", "x ≤ 2"], answer: 0, explain: "The intersection of x &gt; 2 and x ≤ 6 is the interval (2, 6]." },
        { type: "mc", q: "In a rational inequality with ≥ 0, the zeros of the denominator…", options: ["are always included", "are never included", "are included only if the numerator is positive"], answer: 1, explain: "The denominator cannot be zero: its zeros are always excluded (domain condition)." },
        { type: "mc", q: "{ x &gt; 5 ; x &lt; 2 } is…", options: ["determinate", "impossible", "indeterminate"], answer: 1, explain: "There are no numbers greater than 5 and less than 2: no solution." }
      ]
    }
  ],
  glossary: [
    { t: "Inequality", d: "An inequality statement containing an unknown, satisfied by a set of values." },
    { t: "Interval", d: "A set of numbers between two endpoints; round bracket if the endpoint is excluded, square if included." },
    { t: "Direction", d: "The symbol (&lt;, &gt;, ≤, ≥) that tells you which side is greater." },
    { t: "Equivalent inequalities", d: "Inequalities with the same solution set." },
    { t: "Rational inequality", d: "An inequality with the unknown in the denominator." },
    { t: "Sign chart", d: "A diagram showing the sign of each factor and of the product or quotient in the various regions." },
    { t: "System of inequalities", d: "A set of inequalities that must all be satisfied at once: the solutions are the intersection." },
    { t: "Intersection", d: "The set of elements that belong to all the sets considered." },
    { t: "Empty set", d: "A set with no elements: it is the solution of an impossible inequality." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Solve: −4x + 3 &lt; 11", options: ["x &lt; −2", "x &gt; −2", "x &gt; 2"], answer: 1, explain: "−4x &lt; 8; dividing by −4 reverses the direction: x &gt; −2." },
      { type: "mc", q: "The solution set of 3x − 2 ≥ 7 is…", options: ["(3, +∞)", "[3, +∞)", "(−∞, 3]"], answer: 1, explain: "3x ≥ 9 → x ≥ 3, with 3 included: [3, +∞)." },
      { type: "num", q: "What is the smallest integer that satisfies 2(x − 1) &gt; 7?", answer: 5, explain: "2x − 2 &gt; 7 → x &gt; 4.5; the first integer greater than 4.5 is 5." },
      { type: "tf", q: "Multiplying both sides of 2 &lt; 5 by −1 gives −2 &lt; −5.", answer: false, explain: "The direction is reversed: −2 &gt; −5." },
      { type: "mc", q: "(x − 4)/(x + 1) &gt; 0 is satisfied for…", options: ["x &lt; −1 or x &gt; 4", "−1 &lt; x &lt; 4", "x &gt; 4 only"], answer: 0, explain: "N &gt; 0 for x &gt; 4; D &gt; 0 for x &gt; −1; the quotient is positive to the left of −1 and to the right of 4." },
      { type: "mc", q: "The system { 2x − 1 &gt; 3 ; x &lt; 5 } has the solution…", options: ["2 &lt; x &lt; 5", "x &gt; 5", "x &lt; 2"], answer: 0, explain: "The first gives x &gt; 2; with x &lt; 5 the intersection is (2, 5)." },
      { type: "tf", q: "The inequality 3(x + 1) &gt; 3x + 5 is impossible.", answer: true, explain: "It reduces to 3 &gt; 5, which is false for every x: no solution." },
      { type: "num", q: "A taxi costs a fixed €3 plus €1.50 per km. With a budget of €18, what is the maximum number of kilometres you can travel?", answer: 10, unit: "km", explain: "3 + 1.5x ≤ 18 → 1.5x ≤ 15 → x ≤ 10." },
      { type: "order", q: "Put the steps for solving a rational inequality in order.", items: ["Move everything to the left with 0 on the right", "Reduce to a single fraction N/D", "Write the domain conditions", "Study the sign of N and of D", "Build the sign chart and choose the regions"], explain: "First prepare the form N/D ≷ 0, then study the sign and read the solution from the chart." },
      { type: "text", q: "What is the name of the English mathematician who introduced the symbols &lt; and &gt; in 1631 (first name or surname)?", answer: ["harriot", "thomas harriot", "hariot", "thomas hariot"], explain: "Thomas Harriot used them in the posthumous treatise Artis Analyticae Praxis (1631)." }
    ]
  }
});
