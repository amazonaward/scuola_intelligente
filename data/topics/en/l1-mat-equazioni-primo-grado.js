TOPIC('en', {
  id: "l1-mat-equazioni-primo-grado",
  title: "Linear equations",
  intro: "How many minutes of calls make one phone plan better value than another? When do two trains leaving from different cities meet? These are questions with an <b>unknown</b>, and the answer goes through an <b>equation</b>. In middle school you learned numerical equations; now we consolidate them by using the <b>equivalence principles</b> rigorously, add <b>rational equations</b> (with domain conditions) and learn to turn real problems into equations.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Equations and equivalence principles",
      html: `<p>An <b>equation</b> is an equality between two expressions that contains at least one <b>unknown</b> and is true only for certain values of it (the <b>solutions</b> or roots). It is <b>linear</b> (of the first degree) if, once simplified, the unknown appears with exponent 1.</p>
<p>Two equations are <b>equivalent</b> if they have the same solutions. Solving means moving, through safe transformations, to simpler and simpler equivalent equations:</p>
<ul>
<li><b>1st principle</b>: adding or subtracting the <b>same expression</b> to both sides gives an equivalent equation. (Hence the transposition rule: a term moves to the other side by changing sign.)</li>
<li><b>2nd principle</b>: multiplying or dividing both sides by the same <b>non-zero</b> number gives an equivalent equation.</li>
</ul>
<p>⚠️ Be careful with the 2nd principle and <b>expressions containing x</b>: if you divide by x, you lose the possibility that x = 0 is a solution; if you multiply by (x − 2) you may introduce a \"solution\" x = 2 that wasn't there. You can't multiply or divide by expressions in x carelessly: that is why rational equations require domain conditions.</p>
<p>Once reduced to the <b>standard form ax = b</b>, the equation is: <b>determinate</b> if a ≠ 0 (x = b/a), <b>impossible</b> if a = 0 and b ≠ 0, <b>indeterminate</b> if a = 0 and b = 0.</p>`
    },
    {
      type: "remember",
      title: "The method for polynomial equations",
      html: `<ol>
<li>Remove the <b>brackets</b> (distributive property).</li>
<li>If there are <b>numerical denominators</b>, multiply everything by their LCM.</li>
<li><b>Transpose</b>: terms with x on the left, numbers on the right.</li>
<li><b>Simplify</b>: you get ax = b.</li>
<li><b>Divide</b> by a, if a ≠ 0.</li>
<li><b>Check</b> by substituting into the original equation.</li>
</ol>`
    },
    {
      type: "example",
      title: "Worked example: an equation with numerical fractions",
      html: `<p>Solve <b>(2x − 1)/3 − (x + 2)/2 = 1</b>.</p>
<ol>
<li>LCM(3, 2) = 6: multiply everything by 6 → 2(2x − 1) − 3(x + 2) = 6</li>
<li>Brackets (watch the minus sign!): 4x − 2 − 3x − 6 = 6</li>
<li>Simplify: x − 8 = 6 → <b>x = 14</b></li>
<li>Check: (28 − 1)/3 − (14 + 2)/2 = 9 − 8 = 1 ✔️</li>
</ol>`
    },
    {
      type: "svg",
      title: "The solution is a crossing point",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="260" x2="560" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="260" x2="40" y2="30" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="187" x2="540" y2="113" stroke="#2563eb" stroke-width="4"/>
<line x1="40" y1="260" x2="540" y2="40" stroke="#ea580c" stroke-width="4"/>
<line x1="290" y1="150" x2="290" y2="260" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/>
<circle cx="290" cy="150" r="8" fill="#16a34a"/>
<text x="290" y="282" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">100 minutes</text>
<text x="300" y="140" font-size="16" fill="#166534" font-weight="bold">same cost: €15</text>
<text x="400" y="85" font-size="16" fill="#9a3412" font-weight="bold">Plan B: 0.15 · m</text>
<text x="330" y="215" font-size="16" fill="#1d4ed8" font-weight="bold">Plan A: 10 + 0.05 · m</text>
<text x="50" y="24" font-size="16" fill="#334155">Cost (€)</text>
<text x="545" y="282" font-size="16" fill="#334155" text-anchor="end">minutes per month</text>
</svg>`,
      caption: "The equation 10 + 0.05m = 0.15m is solved by finding the point where the two lines meet."
    },
    {
      type: "example",
      title: "Practical example: which plan is better value?",
      html: `<p>Plan <b>A</b> costs €10 a month plus €0.05 per minute; plan <b>B</b> has no monthly fee but costs €0.15 per minute. From how many minutes is A better value?</p>
<ul>
<li>Unknown: m = minutes per month.</li>
<li>Equal costs: 10 + 0.05m = 0.15m → 10 = 0.10m → <b>m = 100</b>.</li>
<li>Interpretation: below 100 minutes B is cheaper, above it A is cheaper. The solution of the equation is the <i>break-even</i> point, a concept every business uses in economics.</li>
</ul>`
    },
    {
      type: "example",
      title: "Practical example: when the trains meet",
      html: `<p>Two stations are 360 km apart. At 9:00 one train leaves the first at 80 km/h and another leaves the second towards the first at 100 km/h. When do they meet?</p>
<ul>
<li>Unknown: t = hours elapsed. Distances travelled: 80t and 100t, and together they cover 360 km.</li>
<li>Equation: 80t + 100t = 360 → 180t = 360 → <b>t = 2 hours</b>: they meet at 11:00, 160 km from the first station.</li>
<li>Check: 160 + 200 = 360 ✔️</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: polynomial equations",
      questions: [
        { type: "num", q: "Solve: 3x − 7 = 11", answer: 6, explain: "3x = 18, so x = 6." },
        { type: "num", q: "Solve: x/4 + 1 = 4", answer: 12, explain: "x/4 = 3, so x = 12." },
        { type: "tf", q: "To solve an equation you can always divide both sides by x.", answer: false, explain: "If x = 0 the division is not allowed and you may lose the solution x = 0: for example x² = 3x." }
      ]
    },
    {
      type: "text",
      title: "Rational equations: domain conditions",
      html: `<p>An equation is <b>rational</b> (fractional) when the unknown appears in a denominator. The procedure changes because you have to exclude the values that make a denominator zero:</p>
<ol>
<li><b>Factorise</b> the denominators.</li>
<li>Write the <b>DC</b> (domain conditions): denominators ≠ 0.</li>
<li>Find the LCM and <b>multiply both sides</b> by it (this is allowed because, with the DC, the LCM is not zero): the denominators disappear.</li>
<li>Solve the resulting polynomial equation.</li>
<li><b>Compare with the DC</b>: the solution is <b>acceptable</b> only if it does not violate the DC; otherwise it must be rejected.</li>
</ol>
<p><b>Example 1</b>: 1/(x − 1) + 1/(x + 1) = 4/(x² − 1). DC: x ≠ ±1. Multiply by (x − 1)(x + 1): (x + 1) + (x − 1) = 4 → 2x = 4 → <b>x = 2</b>, acceptable.</p>
<p><b>Example 2</b>: x/(x − 3) = 3/(x − 3). DC: x ≠ 3. Multiply by (x − 3): x = 3. But x = 3 violates the DC! The solution is not acceptable: the equation is <b>impossible</b>.</p>
<p><b>Example 3</b>: x/(x − 2) = 2/(x − 2) + 1. DC: x ≠ 2. Multiply by (x − 2): x = 2 + x − 2 → x = x: an identity. The solutions are <b>all numbers except 2</b>.</p>`
    },
    {
      type: "widget",
      title: "How many solutions does it have?",
      widget: "classify",
      options: { groups: ["One solution", "Impossible", "Indeterminate"], items: [
        ["3x − 5 = 2x + 1", 0],
        ["2(x + 1) = 2x + 3", 1],
        ["4x − 4 = 4(x − 1)", 2],
        ["x/(x − 3) = 3/(x − 3)", 1],
        ["x/2 + x/3 = 5", 0],
        ["x/(x − 2) = 2/(x − 2) + 1", 2],
        ["5 − x = x − 5", 0]
      ] },
      caption: "Reduce to ax = b and, for rational equations, remember to check the DC."
    },
    {
      type: "curiosity",
      title: "Did you know? The word \"algebra\"",
      html: `<p>The word <b>algebra</b> comes from the Arabic <i>al-jabr</i>, \"restoration\", and appears in the title of the treatise that the Persian mathematician <b>Muhammad ibn Mūsā al-Khwārizmī</b> wrote in Baghdad around 820 AD. His Latinised name, <i>Algoritmi</i>, gave us the word <b>algorithm</b>. Al-jabr meant moving a subtracted term to the other side; <i>al-muqābala</i> (\"balancing\") meant collecting like terms: these are our two equivalence principles, but without symbols, all in words!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know? Who invented the letters?",
      html: `<p>For centuries equations were written in words. The Frenchman <b>François Viète</b> (1540–1603) was the first to use letters systematically for quantities, including known data. In the 17th century <b>René Descartes</b> established the convention we use today, x, y, z for unknowns and a, b, c for known values, while the = sign comes from the Welshman <b>Robert Recorde</b> (1557).</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to solve an equation",
      intro: "The mechanical method works, but understanding why it works is another matter. Here are some historical and visual methods.",
      tabs: [
        {
          label: "🕌 Al-jabr and al-muqābala",
          html: `<p>Al-Khwārizmī solved equations by reasoning about \"things\" (<i>shay</i>, our x) and numbers. An example, in our symbols: <b>5x − 3 = 2x + 9</b>.</p>
<ul>
<li><b>al-jabr</b> (\"restoring\"): the −3 makes the side \"incomplete\"; add 3 to both sides: 5x = 2x + 12.</li>
<li><b>al-muqābala</b> (\"comparing\"): take 2x from both sides: 3x = 12.</li>
<li>Divide: <b>x = 4</b>.</li>
</ul>
<p>They are exactly the transposing and collecting of terms that you do, but described as \"restoring\" and \"evening out\" a situation of balance.</p>`
        },
        {
          label: "🏺 False position (Egypt)",
          html: `<p>Egyptian scribes solved the problem \"a quantity and its seventh make 19\" (x + x/7 = 19) with the method of <b>false position</b>: choose a convenient value (7), work out the result (7 + 1 = 8) and correct it proportionally.</p>
<ul>
<li>Try x = 7: 7 + 1 = 8, but I need 19.</li>
<li>Correction factor: 19/8. So x = 7 · 19/8 = <b>133/8</b>.</li>
<li>Check: 133/8 + 19/8 = 152/8 = 19 ✔️</li>
</ul>
<p>It works because in an equation ax = b the result is <b>proportional</b> to x: doubling x doubles the result. It is the \"trial and correction\" method, still used today (under another name) in numerical algorithms.</p>`
        },
        {
          label: "📈 With a graph",
          html: `<p>Each side of a linear equation is a <b>straight line</b> if you look at it as a function of x. Solving the equation means finding the x for which the two lines have the <b>same value</b>, that is, where they cross (as in the phone-plan graph). If the lines are parallel they never meet: the equation is <b>impossible</b>; if they are the same line they meet everywhere: the equation is <b>indeterminate</b>.</p>`
        },
        {
          label: "🔁 Inverse operations",
          html: `<p>If the unknown appears only once, you can \"unroll\" the sequence of operations backwards. 3x − 7 = 11 means: start from x, multiply by 3, subtract 7, get 11. Walk the path backwards with the inverse operations: 11 + 7 = 18, then 18 ÷ 3 = 6. So <b>x = 6</b>.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [6, 11, 18] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of linear equations",
      nodes: [
        { id: "eq", label: "Equation", x: 50, y: 6, color: "#6366f1", html: "An equality that is true only for some values of the unknown.", why: "It expresses a problem in mathematical form: 'find the value that satisfies this condition'. Examples are already found in the Rhind papyrus and on Babylonian tablets." },
        { id: "p1", label: "1st principle", x: 20, y: 28, color: "#16a34a", html: "Add or subtract the same expression on both sides.", why: "If two quantities are equal, adding the same quantity keeps them equal: one of Euclid's 'common notions'. It is al-Khwārizmī's al-jabr." },
        { id: "p2", label: "2nd principle", x: 80, y: 28, color: "#f59e0b", html: "Multiply or divide by the same number ≠ 0.", why: "Multiplying by 0 wipes out all the information; with expressions in x, multiplying can introduce extraneous solutions and dividing can lose some." },
        { id: "forma", label: "Standard form ax = b", x: 50, y: 50, color: "#a855f7", html: "The result of the transformations.", why: "From here, with the cases a ≠ 0 / a = 0, every linear equation can be classified." },
        { id: "casi", label: "Three cases", x: 20, y: 72, color: "#ef4444", html: "Determinate, impossible, indeterminate.", why: "Geometrically: intersecting lines, distinct parallel lines, coincident lines." },
        { id: "fratte", label: "Rational equations", x: 80, y: 62, color: "#0ea5e9", html: "The unknown appears in a denominator: DC are needed.", why: "Dividing by zero is impossible, so the values that make a denominator zero must be excluded before solving." },
        { id: "acc", label: "Acceptability", x: 80, y: 88, color: "#14b8a6", html: "A solution that violates the DC must be rejected.", why: "Multiplying by the LCM gives an equation that may have solutions 'extraneous' to the original equation." },
        { id: "probl", label: "Word problems", x: 40, y: 92, color: "#22c55e", html: "Choose the unknown, translate, solve, interpret.", why: "The key step is modelling: from natural language to the language of algebra, thanks to Viète and Descartes." }
      ],
      edges: [
        ["eq", "p1", "transformed with"],
        ["eq", "p2", "transformed with"],
        ["p1", "forma", "leads to"],
        ["p2", "forma", "leads to"],
        ["forma", "casi", "decides"],
        ["eq", "fratte", "if x in a denominator"],
        ["fratte", "acc", "final check"],
        ["probl", "eq", "translated into"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: rational equations and problems",
      questions: [
        { type: "mc", q: "The equation x/(x − 3) = 3/(x − 3) has as solutions…", options: ["x = 3", "no solution", "all numbers"], answer: 1, explain: "You get x = 3, but x = 3 makes the denominator zero: the solution is not acceptable, so the equation is impossible." },
        { type: "num", q: "Solve: 2/(x + 1) = 1", answer: 1, explain: "With x ≠ −1: 2 = x + 1, so x = 1." },
        { type: "num", q: "Three times a number, minus 4, is 26. What is the number?", answer: 10, explain: "3x − 4 = 26 → 3x = 30 → x = 10." }
      ]
    }
  ],
  glossary: [
    { t: "Equation", d: "An equality between expressions that holds only for some values of the unknown." },
    { t: "Solution (root)", d: "A value of the unknown that makes the equation true." },
    { t: "Equivalent equations", d: "Equations with the same solutions." },
    { t: "Equivalence principles", d: "Rules (addition/subtraction, and multiplication/division by a number ≠ 0) that turn an equation into an equivalent one." },
    { t: "Standard form", d: "The form ax = b to which a linear equation is reduced." },
    { t: "Rational equation", d: "An equation with the unknown in a denominator." },
    { t: "Domain conditions", d: "Values of the unknown that must be excluded because they make a denominator zero." },
    { t: "Acceptable solution", d: "A solution that satisfies the domain conditions." },
    { t: "Break-even", d: "The point at which two costs, or costs and revenues, are equal." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Solve: 5(x − 2) − 3 = 2x + 8", answer: 7, explain: "5x − 13 = 2x + 8 → 3x = 21 → x = 7." },
      { type: "num", q: "Solve: (2x − 1)/3 − (x + 2)/2 = 1", answer: 14, explain: "Multiplying by 6: 4x − 2 − 3x − 6 = 6 → x = 14." },
      { type: "mc", q: "The equation 3(x − 1) + 2 = 3x − 1 is…", options: ["determinate", "impossible", "indeterminate"], answer: 2, explain: "3x − 1 = 3x − 1: it reduces to 0x = 0, so there are infinitely many solutions." },
      { type: "mc", q: "The equation x/(x − 4) = 4/(x − 4) has…", options: ["the solution x = 4", "no acceptable solution", "infinitely many solutions"], answer: 1, explain: "With DC x ≠ 4, multiplying by (x − 4) gives x = 4, which violates the DC: the equation is impossible." },
      { type: "num", q: "Solve: 1/(x − 1) + 1/(x + 1) = 4/(x² − 1)", answer: 2, explain: "DC x ≠ ±1; 2x = 4 → x = 2, acceptable." },
      { type: "tf", q: "Multiplying both sides by an expression containing x is always an equivalence transformation.", answer: false, explain: "If the expression can be zero, you may introduce extraneous solutions: that is why you check the DC." },
      { type: "num", q: "Two trains leave at the same moment from two stations 450 km apart and travel towards each other at 70 km/h and 80 km/h. After how many hours do they meet?", answer: 3, unit: "h", explain: "(70 + 80)t = 450 → t = 3." },
      { type: "order", q: "Put in order the steps for a rational equation.", items: ["Factorise the denominators", "Write the DC", "Multiply by the LCM", "Solve the polynomial equation", "Check the solution against the DC"], explain: "The DC come first; checking acceptability completes the procedure." },
      { type: "text", q: "What was the name of the Persian mathematician from whom the words \"algebra\" and \"algorithm\" derive?", answer: ["al-khwarizmi", "al khwarizmi", "khwarizmi", "alkhwarizmi", "al-khwarizmi", "al khuwarizmi", "al-khuwarizmi"], explain: "Al-Khwārizmī (9th century): al-jabr is in the title of his work, and his Latinised name gives 'algorithm'." },
      { type: "num", q: "Plan A: €12 fixed + €0.04/min. Plan B: €0.10/min. For how many minutes do the two plans cost the same?", answer: 200, unit: "min", explain: "12 + 0.04m = 0.10m → 12 = 0.06m → m = 200." }
    ]
  }
});
