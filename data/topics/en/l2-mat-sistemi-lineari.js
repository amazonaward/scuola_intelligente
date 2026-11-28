TOPIC('en', {
  id: "l2-mat-sistemi-lineari",
  title: "Systems of linear equations",
  intro: "A cinema sold 120 tickets, some full price and some reduced, taking in €840: how many of each type did it sell? Here there are <b>two</b> unknowns and a single equation is not enough: we need <b>two conditions at the same time</b>. A <b>system of linear equations</b> is exactly this: several first-degree equations that must be satisfied simultaneously. Let's learn the four classic methods (<b>substitution, comparison, elimination, Cramer's rule</b>), see what they mean on the plane and how to use them to solve real problems.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "What is a system of linear equations?",
      html: `<p>A linear equation in two unknowns, such as <b>x + y = 5</b>, has <b>infinitely many solutions</b> (the pairs (0,5), (1,4), (2,3)…). But if we require that <b>x − y = 1</b> holds <i>as well</i>, only one pair satisfies both: (3, 2). Putting together several equations that must hold at the same time means writing a <b>system</b>, with a curly bracket on the left:</p>
<p style="text-align:center"><b>{ x + y = 5 ; x − y = 1 }</b></p>
<p>A <b>solution</b> of the system is a pair (x, y) that makes <b>all</b> the equations true. The system is called <b>linear</b> because all its equations are of the first degree, and <b>2 × 2</b> if it has two equations and two unknowns.</p>
<p>The <b>standard form</b> (or canonical form) is:</p>
<p style="text-align:center"><b>{ a x + b y = c ; a′ x + b′ y = c′ }</b></p>
<p>Before solving, we rewrite the equations in this form: unknowns on the left, constant terms on the right.</p>
<p>A system can be:</p>
<ul>
<li><b>consistent and independent</b>: it has <b>exactly one</b> solution;</li>
<li><b>inconsistent</b> (impossible): it has none;</li>
<li><b>dependent</b> (indeterminate): it has <b>infinitely many</b>.</li>
</ul>
<p>Two systems with the same solutions are called <b>equivalent</b>: the methods below turn a system into a simpler equivalent one.</p>`
    },
    {
      type: "svg",
      title: "What it means geometrically",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="20" y1="200" x2="580" y2="200" stroke="#475569" stroke-width="2"/>
<line x1="200" y1="10" x2="200" y2="290" stroke="#475569" stroke-width="2"/>
<line x1="200" y1="25" x2="325" y2="275" stroke="#2563eb" stroke-width="4"/>
<line x1="175" y1="275" x2="350" y2="100" stroke="#ea580c" stroke-width="4"/>
<circle cx="275" cy="175" r="8" fill="#16a34a"/>
<text x="290" y="160" font-size="16" fill="#166534" font-weight="bold">(3, 1)</text>
<text x="210" y="30" font-size="16" fill="#1d4ed8" font-weight="bold">2x + y = 7</text>
<text x="360" y="105" font-size="16" fill="#9a3412" font-weight="bold">x − y = 2</text>
<text x="420" y="200" font-size="16" fill="#334155" dy="-8">x</text>
<text x="210" y="22" font-size="16" fill="#334155" dx="-30">y</text>
<text x="420" y="260" font-size="16" fill="#334155">Each equation is a line;</text>
<text x="420" y="280" font-size="16" fill="#334155">the solution is where they cross.</text>
</svg>`,
      caption: "Every linear equation in x and y is a line in the plane. The system { 2x + y = 7 ; x − y = 2 } is solved by the point where the two lines meet."
    },
    {
      type: "remember",
      title: "The three cases and the lines",
      html: `<ul>
<li><b>One solution</b>: the lines are <b>intersecting</b> (they meet at exactly one point).</li>
<li><b>Inconsistent</b>: the lines are <b>distinct parallel lines</b> (they never meet).</li>
<li><b>Dependent</b>: the lines are <b>coincident</b> (they have all their points in common).</li>
</ul>
<p>Examples: { x + y = 3 ; 2x + 2y = 8 } is inconsistent (the second is x + y = 4, parallel to the first); { x + y = 3 ; 2x + 2y = 6 } is dependent (the second is the first one doubled).</p>`
    },
    {
      type: "text",
      title: "The substitution method",
      html: `<p>The idea: <b>solve</b> one equation for one unknown and <b>substitute</b> it into the other, which is then left with just one unknown.</p>
<ol>
<li>Choose the most convenient equation and unknown (the one with coefficient 1 or −1).</li>
<li>Express that unknown in terms of the other.</li>
<li>Substitute into the <b>other</b> equation and solve the resulting first-degree equation.</li>
<li>Put the value you found back into the expression from step 2 to find the second unknown.</li>
<li>Check in both original equations.</li>
</ol>
<p><b>Example</b>: { x − 2y = 1 ; 3x − y = 8 }.</p>
<ul>
<li>From the first: x = 2y + 1.</li>
<li>In the second: 3(2y + 1) − y = 8 → 6y + 3 − y = 8 → 5y = 5 → y = 1.</li>
<li>x = 2·1 + 1 = 3. Solution <b>(3, 1)</b>.</li>
<li>Check: 3 − 2 = 1 ✔️; 9 − 1 = 8 ✔️.</li>
</ul>
<p>If you end up with a false statement (for example 0 = 5) the system is <b>inconsistent</b>; if you end up with one that is always true (0 = 0) it is <b>dependent</b>.</p>`
    },
    {
      type: "text",
      title: "The comparison method",
      html: `<p>If <b>the same unknown</b> is already isolated (or easy to isolate) in <b>both</b> equations, you <b>set the two expressions equal</b>: things that are equal to the same thing are equal to each other.</p>
<p><b>Example</b>: { y = 2x − 1 ; y = x + 2 }. The two expressions for y must be the same: 2x − 1 = x + 2 → x = 3, and then y = 3 + 2 = 5. Solution <b>(3, 5)</b>.</p>
<p>Comparison is really an "effortless" substitution: it is handy when the system is already written in the explicit form y = mx + q (equations of lines).</p>`
    },
    {
      type: "text",
      title: "The elimination method (addition and subtraction)",
      html: `<p>The idea: <b>add or subtract</b> the two equations side by side to make one unknown <b>disappear</b>. It works because adding equalities gives an equality.</p>
<ol>
<li>Multiply the equations by suitable numbers so that one of the unknowns has <b>opposite coefficients</b> (then add) or <b>equal coefficients</b> (then subtract).</li>
<li>Add or subtract side by side: you are left with an equation in one unknown.</li>
<li>Solve it, then repeat the procedure for the other unknown (or substitute).</li>
</ol>
<p><b>Example</b>: { 3x + 2y = 12 ; 2x − 3y = −5 }.</p>
<ul>
<li>To eliminate y: multiply the first by 3 and the second by 2 → { 9x + 6y = 36 ; 4x − 6y = −10 }.</li>
<li>Add: 13x = 26 → <b>x = 2</b>.</li>
<li>Substitute into the first: 6 + 2y = 12 → y = 3. Solution <b>(2, 3)</b>.</li>
<li>Check: 6 + 6 = 12 ✔️; 4 − 9 = −5 ✔️.</li>
</ul>
<p>It is the most widely used method when the coefficients are not 1, and the one from which the methods for solving systems with many equations are derived.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: the three methods",
      questions: [
        { type: "num", q: "Solve { x + y = 9 ; x − y = 3 } and give the value of x.", answer: 6, explain: "Adding: 2x = 12, so x = 6 (and y = 3)." },
        { type: "mc", q: "Adding the equations of { 2x + 3y = 7 ; 4x − 3y = 5 } side by side gives…", options: ["6x = 12", "6x + 6y = 12", "2x = 2"], answer: 0, explain: "The y terms cancel out (3y − 3y = 0): 6x = 12." },
        { type: "tf", q: "If substitution leads to 0 = 5, the system is dependent.", answer: false, explain: "0 = 5 is false: the system is inconsistent. It is dependent if you get 0 = 0." }
      ]
    },
    {
      type: "widget",
      title: "One solution, inconsistent or dependent?",
      widget: "classify",
      options: { groups: ["One solution", "Inconsistent", "Dependent"], items: [
        ["x + y = 4 ; x − y = 2", 0],
        ["x + y = 3 ; 2x + 2y = 8", 1],
        ["x + y = 3 ; 2x + 2y = 6", 2],
        ["y = 2x ; y = 2x + 5", 1],
        ["y = 3x − 1 ; 2y = 6x − 2", 2],
        ["2x + y = 5 ; x − y = 1", 0]
      ] },
      caption: "Hint: check whether one equation is a multiple of the other (same ratio between the coefficients)."
    },
    {
      type: "text",
      title: "Cramer's rule (with determinants)",
      html: `<p>Cramer's rule gives the solution with a <b>formula</b>, with no intermediate steps. For the system { ax + by = c ; a′x + b′y = c′ } we define the <b>determinant</b> of the coefficient matrix:</p>
<p style="text-align:center"><b>D = a b′ − a′ b</b></p>
<p>and the determinants obtained by replacing the column of x or of y with the column of constant terms:</p>
<p style="text-align:center"><b>Dₓ = c b′ − c′ b &nbsp;&nbsp;&nbsp; D<sub>y</sub> = a c′ − a′ c</b></p>
<ul>
<li>If <b>D ≠ 0</b>: the system has <b>one solution</b>, with <b>x = Dₓ / D</b> and <b>y = D<sub>y</sub> / D</b>.</li>
<li>If <b>D = 0</b> and Dₓ ≠ 0 or D<sub>y</sub> ≠ 0: the system is <b>inconsistent</b>.</li>
<li>If <b>D = Dₓ = D<sub>y</sub> = 0</b>: the system is <b>dependent</b> (or has trivial equations).</li>
</ul>
<p><b>Example</b>, the same as before: { 3x + 2y = 12 ; 2x − 3y = −5 }.</p>
<ul>
<li>D = 3·(−3) − 2·2 = −9 − 4 = −13</li>
<li>Dₓ = 12·(−3) − 2·(−5) = −36 + 10 = −26 → x = −26/−13 = <b>2</b></li>
<li>D<sub>y</sub> = 3·(−5) − 12·2 = −15 − 24 = −39 → y = −39/−13 = <b>3</b></li>
</ul>
<p>You get (2, 3), just as with elimination. The determinant D has a geometric meaning: if D = 0 the lines have the same slope (they are parallel or coincident).</p>`
    },
    {
      type: "example",
      title: "Worked example: cinema tickets",
      html: `<p>A cinema sold 120 tickets, some at €8 (full price) and others at €5 (reduced), taking in €840. How many tickets of each type?</p>
<ul>
<li>Unknowns: x = full-price tickets, y = reduced tickets.</li>
<li>System: { x + y = 120 ; 8x + 5y = 840 }.</li>
<li>Substitution: y = 120 − x → 8x + 5(120 − x) = 840 → 3x + 600 = 840 → x = 80, y = 40.</li>
<li>Check: 80 + 40 = 120 ✔️; 640 + 200 = 840 ✔️.</li>
</ul>`
    },
    {
      type: "example",
      title: "Worked example: speeds and currents",
      html: `<p>A boat travels 24 km downstream in 2 hours and the same 24 km upstream in 3 hours. What are the speed of the boat in still water and the speed of the current?</p>
<ul>
<li>x = speed of the boat, y = speed of the current (km/h).</li>
<li>Downstream: x + y = 24/2 = 12. Upstream: x − y = 24/3 = 8.</li>
<li>Adding: 2x = 20 → x = 10 km/h; then y = 2 km/h.</li>
<li>Check: 12 · 2 = 24 ✔️; 8 · 3 = 24 ✔️.</li>
</ul>`
    },
    {
      type: "remember",
      title: "How to solve a word problem with a system",
      html: `<ol>
<li><b>Read</b> and identify the two unknown quantities; call them x and y, with their units.</li>
<li><b>Translate</b> each condition in the text into an equation.</li>
<li><b>Solve</b> with the most convenient method.</li>
<li><b>Check</b> that the solution makes sense (no negative or fractional people, etc.).</li>
<li><b>Verify</b> against the text and write the answer in words.</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The Nine Chapters",
      html: `<p>The Chinese text <b>The Nine Chapters on the Mathematical Art</b> (<i>Jiuzhang suanshu</i>), compiled about two thousand years ago, solves linear systems with several unknowns by arranging the coefficients in a <b>table</b> and eliminating the unknowns one after another: it is essentially the elimination method that in the West would be called "Gaussian elimination", after the German mathematician Carl Friedrich Gauss (1777–1855), who used and systematised it many centuries later.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Gabriel Cramer",
      html: `<p>The rule that bears his name was published by the Swiss mathematician <b>Gabriel Cramer</b> (1704–1752) in 1750 in the book <i>Introduction à l'analyse des lignes courbes algébriques</i>. Today linear systems are solved by computer, and problems with <b>millions of unknowns</b> (weather forecasts, simulations of bridges and aircraft, 3D graphics, search engines) come down to huge linear systems.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways of seeing a system",
      intro: "Calculation is one way. Here are three other routes to understanding what is going on.",
      tabs: [
        {
          label: "⚖️ The balance",
          html: `<p>Imagine two balanced scales with unknown weights: each equation is a scale. If one shows x + y = 12 and the other x − y = 8, putting them together (adding the pans) cancels y: twice x weighs 20, so x = 10. Adding equations = "pouring" one scale onto the other, and elimination becomes a concrete action.</p>`
        },
        {
          label: "📈 The graph",
          html: `<p>Each equation is a line: write y in terms of x and draw it through two points. The solution is the <b>intersection</b>. If the lines are parallel they do not cross (inconsistent); if they coincide they have all points in common (dependent). The graph gives a visual estimate and a quick check, although the exact coordinates are found with algebraic methods.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="20" y1="150" x2="580" y2="150" stroke="#475569" stroke-width="2"/><line x1="300" y1="10" x2="300" y2="290" stroke="#475569" stroke-width="2"/><line x1="60" y1="260" x2="320" y2="40" stroke="#2563eb" stroke-width="4"/><line x1="60" y1="60" x2="320" y2="260" stroke="#ea580c" stroke-width="4"/><circle cx="191" cy="150" r="8" fill="#16a34a"/><text x="330" y="55" font-size="16" fill="#1d4ed8" font-weight="bold">Intersecting: one solution</text><text x="330" y="250" font-size="16" fill="#9a3412" font-weight="bold">Parallel: none</text></svg>`
        },
        {
          label: "🔢 Guided trial and error",
          html: `<p>With small numbers, a <b>table of trials</b> also works: in the cinema problem, if there are 60 full-price tickets, there are 60 reduced ones and the takings are 480 + 300 = 780 (too little); with 80 full-price and 40 reduced you reach 840. Each ticket that changes from reduced to full price raises the takings by €3. The Egyptians and Babylonians solved the first problems of this kind this way, but algebraic methods are faster and more general.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 120, step: 10, marks: [60, 80] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of linear systems",
      nodes: [
        { id: "sis", label: "Linear system", x: 50, y: 6, color: "#6366f1", html: "Several first-degree equations to be satisfied together.", why: "It is needed when a problem has several unknowns and several conditions: one equation alone is not enough to determine them." },
        { id: "sost", label: "Substitution", x: 15, y: 30, color: "#16a34a", html: "Solve for one unknown and substitute it into the other equation.", why: "It reduces a problem with two unknowns to one with a single unknown, already solved with first-degree equations." },
        { id: "conf", label: "Comparison", x: 50, y: 30, color: "#f59e0b", html: "Set the two expressions for the same unknown equal.", why: "If two things are equal to a third, they are equal to each other: the transitive property of equality." },
        { id: "rid", label: "Elimination", x: 85, y: 30, color: "#a855f7", html: "Add or subtract the equations to eliminate an unknown.", why: "Adding two equalities side by side still gives an equality (first principle of equivalence)." },
        { id: "cram", label: "Cramer", x: 50, y: 56, color: "#0ea5e9", html: "x = Dₓ/D, y = D_y/D if D ≠ 0.", why: "It comes from applying elimination to the general coefficients a, b, c, a′, b′, c′: it is the 'formula solution' of the system." },
        { id: "casi", label: "Three cases", x: 15, y: 80, color: "#ef4444", html: "One solution, inconsistent, dependent.", why: "They depend on D: if D ≠ 0 one solution; if D = 0 parallel lines (none) or coincident lines (infinitely many)." },
        { id: "geo", label: "Lines in the plane", x: 85, y: 80, color: "#14b8a6", html: "Each equation is a line; the solution is the intersection.", why: "It links algebra and geometry, an idea of Descartes and Fermat in the 17th century: equations as figures." },
        { id: "prob", label: "Word problems", x: 50, y: 92, color: "#22c55e", html: "The conditions are translated into equations and the result is interpreted.", why: "Modelling is the key skill: from the text to the system, and back to the context with a sense check." }
      ],
      edges: [
        ["sis", "sost", "solved by"],
        ["sis", "conf", "solved by"],
        ["sis", "rid", "solved by"],
        ["rid", "cram", "generalised into"],
        ["cram", "casi", "decides"],
        ["casi", "geo", "seen as"],
        ["prob", "sis", "translated into"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: Cramer and word problems",
      questions: [
        { type: "num", q: "Calculate the determinant D of { 2x + 3y = 5 ; x + 4y = 6 }.", answer: 5, explain: "D = 2·4 − 1·3 = 8 − 3 = 5." },
        { type: "mc", q: "If D = 0 and Dₓ ≠ 0, the system is…", options: ["consistent and independent (one solution)", "inconsistent", "dependent"], answer: 1, explain: "D = 0 means lines with the same slope; if Dₓ ≠ 0 they do not coincide: they are distinct parallel lines, so the system is inconsistent." },
        { type: "num", q: "Two numbers have a sum of 25 and a difference of 7. What is the larger one?", answer: 16, explain: "{ x + y = 25 ; x − y = 7 } → 2x = 32 → x = 16 (the other is 9)." }
      ]
    }
  ],
  glossary: [
    { t: "Linear system", d: "A set of first-degree equations for which we look for values that satisfy all of them together." },
    { t: "Solution of a system", d: "A pair (or n-tuple) of values that makes all the equations true." },
    { t: "System with one solution", d: "It has exactly one solution (consistent and independent): the lines meet at one point." },
    { t: "Inconsistent system", d: "It has no solutions: the lines are distinct and parallel." },
    { t: "Dependent system", d: "It has infinitely many solutions: the lines coincide." },
    { t: "Standard form", d: "ax + by = c, with the unknowns on the left and the constant term on the right." },
    { t: "Substitution", d: "Method: solve for one unknown and substitute it into the other equation." },
    { t: "Elimination", d: "Method: add or subtract the equations to eliminate an unknown." },
    { t: "Determinant", d: "The number D = ab′ − a′b that decides whether a 2×2 system has exactly one solution." },
    { t: "Equivalent systems", d: "Systems with the same solutions." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Solve { x + y = 10 ; x − y = 4 }.", options: ["(7, 3)", "(6, 4)", "(5, 5)"], answer: 0, explain: "Adding: 2x = 14 → x = 7, y = 3." },
      { type: "num", q: "Solve { y = 2x − 3 ; y = x + 1 } and give the value of x.", answer: 4, explain: "Comparison: 2x − 3 = x + 1 → x = 4 (and y = 5)." },
      { type: "num", q: "Solve { 2x + y = 11 ; x − y = 1 } and give the value of y.", answer: 3, explain: "Adding: 3x = 12 → x = 4; y = 4 − 1 = 3." },
      { type: "mc", q: "The system { x + 2y = 4 ; 3x + 6y = 5 } is…", options: ["consistent and independent (one solution)", "inconsistent", "dependent"], answer: 1, explain: "The second equation gives x + 2y = 5/3, parallel to x + 2y = 4 but different: no solution." },
      { type: "mc", q: "The system { 2x − y = 3 ; 4x − 2y = 6 } is…", options: ["consistent and independent (one solution)", "inconsistent", "dependent"], answer: 2, explain: "The second equation is twice the first: the lines coincide and there are infinitely many solutions." },
      { type: "num", q: "Using Cramer's rule, calculate D for { 3x + 2y = 12 ; 2x − 3y = −5 }.", answer: -13, explain: "D = 3·(−3) − 2·2 = −13." },
      { type: "num", q: "A car park has 50 vehicles, cars (4 wheels) and motorbikes (2 wheels), with 160 wheels in total. How many cars are there?", answer: 30, explain: "{ a + m = 50 ; 4a + 2m = 160 } → 2a = 60 → a = 30 (and m = 20)." },
      { type: "tf", q: "A 2×2 linear system can have exactly two solutions.", answer: false, explain: "Two lines have 0, 1 or infinitely many points in common: never exactly two." },
      { type: "order", q: "Put the steps of the substitution method in order.", items: ["Solve one equation for one unknown", "Substitute it into the other equation", "Solve the equation in one unknown", "Calculate the other unknown", "Check in the original equations"], explain: "The system is reduced to a single unknown, then you work back to the second and check." },
      { type: "text", q: "What was the name of the Swiss mathematician who published the rule for solving systems with determinants in 1750?", answer: ["cramer", "gabriel cramer"], explain: "Gabriel Cramer (1704–1752)." }
    ]
  }
});
