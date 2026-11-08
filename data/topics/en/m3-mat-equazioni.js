TOPIC('en', {
  id: "m3-mat-equazioni",
  title: "First-degree equations",
  intro: "\"I think of a number, multiply it by 3, add 5 and get 26: what number did I think of?\" To answer you need an <b>equation</b>. Let's learn to solve first-degree (linear) equations with the two <b>equivalence principles</b>, as if they were a balance in equilibrium, and to use them to solve problems.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Identities and equations",
      html: `<p>An <b>equality</b> between two algebraic expressions can be:</p>
<ul>
<li>an <b>identity</b>, if it is true <b>for any value</b> of the letters: 2(x + 3) = 2x + 6 is always true;</li>
<li>an <b>equation</b>, if it is true <b>only for some values</b> (or for none): x + 3 = 10 is true only if x = 7.</li>
</ul>
<p>In an equation:</p>
<ul>
<li>the letter is the <b>unknown</b> (usually x);</li>
<li>what stands to the left of the equals sign is the <b>left-hand side</b> (first member), what stands to the right the <b>right-hand side</b> (second member);</li>
<li>the value that makes the equality true is the <b>solution</b> (or root);</li>
<li>an equation is <b>first-degree</b> if the unknown appears with a highest exponent of 1 (no x², x³…).</li>
</ul>
<p>Two equations are <b>equivalent</b> if they have the same solutions: x + 3 = 10 and x = 7 are equivalent. Solving an equation means turning it into ever simpler equivalent equations, until you reach <b>x = number</b>.</p>`
    },
    {
      type: "svg",
      title: "An equation is a balance",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f0f9ff"/>
<polygon points="320,260 290,290 350,290" fill="#475569"/>
<rect x="315" y="110" width="10" height="150" fill="#475569"/>
<rect x="90" y="105" width="460" height="10" rx="5" fill="#334155"/>
<line x1="150" y1="115" x2="150" y2="170" stroke="#334155" stroke-width="3"/>
<line x1="490" y1="115" x2="490" y2="170" stroke="#334155" stroke-width="3"/>
<path d="M70 170 L230 170 L210 195 L90 195 Z" fill="#94a3b8"/>
<path d="M410 170 L570 170 L550 195 L430 195 Z" fill="#94a3b8"/>
<rect x="85" y="120" width="44" height="50" rx="6" fill="#a855f7"/><text x="107" y="153" font-size="22" text-anchor="middle" fill="#fff" font-weight="bold">x</text>
<rect x="133" y="120" width="44" height="50" rx="6" fill="#a855f7"/><text x="155" y="153" font-size="22" text-anchor="middle" fill="#fff" font-weight="bold">x</text>
<circle cx="195" cy="155" r="14" fill="#f59e0b"/><text x="195" y="161" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<circle cx="215" cy="140" r="14" fill="#f59e0b"/><text x="215" y="146" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<circle cx="195" cy="127" r="14" fill="#f59e0b"/><text x="195" y="133" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<g fill="#f59e0b"><circle cx="430" cy="155" r="14"/><circle cx="460" cy="155" r="14"/><circle cx="490" cy="155" r="14"/><circle cx="520" cy="155" r="14"/><circle cx="550" cy="155" r="14"/><circle cx="445" cy="128" r="14"/><circle cx="475" cy="128" r="14"/><circle cx="505" cy="128" r="14"/><circle cx="535" cy="128" r="14"/><circle cx="490" cy="101" r="14"/><circle cx="460" cy="101" r="14"/></g>
<text x="150" y="235" font-size="26" text-anchor="middle" fill="#1f2937" font-weight="bold">2x + 3</text>
<text x="320" y="60" font-size="34" text-anchor="middle" fill="#1f2937" font-weight="bold">=</text>
<text x="490" y="235" font-size="26" text-anchor="middle" fill="#1f2937" font-weight="bold">11</text>
<text x="320" y="30" font-size="17" text-anchor="middle" fill="#0369a1">Take 3 from both pans, then halve: x = 4</text>
</svg>`,
      caption: "Whatever you do to one pan, you must do to the other: that way the balance stays level."
    },
    {
      type: "text",
      title: "The first equivalence principle",
      html: `<p><b>Adding or subtracting</b> the <b>same number</b> (or the same expression) to both sides gives an equivalent equation.</p>
<p>Example: x + 5 = 12 → I subtract 5 from both sides: x + 5 − 5 = 12 − 5 → <b>x = 7</b>.</p>
<p>Practical consequences:</p>
<ul>
<li><b>Transposition rule</b>: a term can be <b>moved</b> from one side to the other <b>changing its sign</b>. 3x − 4 = 2x + 6 → 3x − 2x = 6 + 4 → x = 10.</li>
<li><b>Cancellation rule</b>: two <b>equal</b> terms on the two sides can be cancelled. x + 7 = 2 + 7 → x = 2.</li>
</ul>`
    },
    {
      type: "text",
      title: "The second equivalence principle",
      html: `<p><b>Multiplying or dividing</b> both sides by the <b>same non-zero number</b> gives an equivalent equation.</p>
<p>Example: 4x = 28 → I divide both sides by 4: <b>x = 7</b>.</p>
<p>Practical consequences:</p>
<ul>
<li><b>Changing all the signs</b> (multiplying by −1): −3x = −12 → 3x = 12 → x = 4.</li>
<li><b>Clearing the denominators</b>: you multiply everything by the LCM of the denominators. x/2 + x/3 = 5 → (×6) → 3x + 2x = 30 → 5x = 30 → x = 6.</li>
<li><b>Simplifying</b>: if all the terms have a common divisor, you divide: 6x + 9 = 15 → (:3) → 2x + 3 = 5.</li>
</ul>
<p>⚠️ Why "non-zero"? If you multiply by 0 any equation becomes 0 = 0, and all the information is lost!</p>`
    },
    {
      type: "remember",
      title: "The 6-step method",
      html: `<ol>
<li>Remove the <b>brackets</b> (distributive property).</li>
<li>Clear the <b>denominators</b> (multiply by the LCM).</li>
<li><b>Transpose</b>: terms with x on the left, numbers on the right (changing sign!).</li>
<li><b>Reduce</b> the like terms: you reach the <b>normal form</b> ax = b.</li>
<li><b>Divide</b> by the coefficient of x: x = b/a.</li>
<li><b>Check</b>: substitute the solution in the original equation.</li>
</ol>`
    },
    {
      type: "example",
      title: "Guided example",
      html: `<p>Solve: <b>3(x − 2) + 4 = x + 10</b></p>
<ol>
<li>Brackets: 3x − 6 + 4 = x + 10</li>
<li>Transposition: 3x − x = 10 + 6 − 4</li>
<li>Reduction: 2x = 12</li>
<li>Division by 2: <b>x = 6</b></li>
<li>Check: 3(6 − 2) + 4 = 12 + 4 = 16; 6 + 10 = 16 ✔️</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: equivalence principles",
      questions: [
        { type: "num", q: "Solve: x − 9 = 4", answer: 13, explain: "I move the −9: x = 4 + 9 = 13." },
        { type: "num", q: "Solve: 5x = −35", answer: -7, explain: "I divide by 5: x = −7." },
        { type: "tf", q: "You can multiply both sides by 0.", answer: false, explain: "The second principle holds only for non-zero numbers." }
      ]
    },
    {
      type: "text",
      title: "Determinate, impossible, indeterminate",
      html: `<p>When you reach the normal form <b>ax = b</b>:</p>
<table>
<tr><th>Case</th><th>Example</th><th>Solutions</th></tr>
<tr><td>a ≠ 0 → <b>determinate</b></td><td>4x = 12</td><td>just one: x = 3</td></tr>
<tr><td>a = 0, b ≠ 0 → <b>impossible</b></td><td>0x = 5</td><td>none: no number times 0 gives 5</td></tr>
<tr><td>a = 0, b = 0 → <b>indeterminate</b></td><td>0x = 0</td><td>infinitely many: it is an identity</td></tr>
</table>
<p>Impossible example: x + 3 = x + 5 → 0x = 2. Indeterminate example: 2(x + 1) = 2x + 2 → 0x = 0.</p>`
    },
    {
      type: "widget",
      title: "Classify the equations",
      widget: "classify",
      options: { groups: ["Determinate", "Impossible", "Indeterminate"], items: [
        ["3x = 12", 0],
        ["0x = 7", 1],
        ["0x = 0", 2],
        ["x + 1 = x + 4", 1],
        ["2x + 2 = 2(x + 1)", 2],
        ["5x − 1 = 9", 0],
        ["4(x − 1) = 4x", 1],
        ["x/2 = 3", 0]
      ] },
      caption: "Reduce to the normal form ax = b and look at a and b."
    },
    {
      type: "example",
      title: "Worked example: the ticket problem",
      html: `<p>A class goes to the museum. The full-price ticket costs <b>€8</b>, the reduced one for students <b>€5</b>. There are 2 teachers (full price) and they spend <b>€131</b> in all. How many students are there?</p>
<ol>
<li><b>Unknown</b>: x = number of students.</li>
<li><b>Equation</b>: 5x + 2·8 = 131 → 5x + 16 = 131</li>
<li><b>Solution</b>: 5x = 115 → x = <b>23</b> students.</li>
<li><b>Check</b>: 23·5 + 16 = 115 + 16 = 131 ✔️ (and 23 is a positive whole number, so it is acceptable).</li>
</ol>`
    },
    {
      type: "example",
      title: "Worked example: ages",
      html: `<p>Marco is 3 times as old as his daughter Sofia. In 12 years he will be twice Sofia's age. How old are they?</p>
<ul>
<li>Sofia's age = x; Marco's age = 3x.</li>
<li>In 12 years: 3x + 12 = 2(x + 12)</li>
<li>3x + 12 = 2x + 24 → x = <b>12</b>. Sofia is 12, Marco <b>36</b>.</li>
<li>Check: in 12 years 48 and 24, and 48 = 2·24 ✔️</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The \"=\" sign",
      html: `<p>The sign <b>=</b> was invented by the Welsh doctor and mathematician <b>Robert Recorde</b> in 1557, in the book <i>The Whetstone of Witte</i>. He wrote that he had chosen two parallel lines of the same length "because no two things can be more equal". Before him people wrote "is equal to" in full (in Latin <i>aequales</i>, abbreviated "ae").</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Diophantus's epitaph",
      html: `<p>An ancient Greek riddle tells the life of the mathematician <b>Diophantus</b>: "His childhood lasted 1/6 of his life; after 1/12 his beard grew; after 1/7 he married; 5 years later a son was born, who lived half as many years as his father; the father died 4 years after the son." Equation: x/6 + x/12 + x/7 + 5 + x/2 + 4 = x → <b>x = 84</b>. And already in the <b>Rhind papyrus</b> (Egypt, around 1650 BC) there are "aha" problems that are real first-degree equations: "a quantity and its seventh make 19".</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to solve equations",
      intro: "Does transposing with a change of sign seem like magic? Here is where it comes from, with methods used in other countries.",
      tabs: [
        {
          label: "⚖️ The balance",
          html: `<p>Think of the equation as a <b>two-pan balance</b> in equilibrium. The x's are mystery bags all of the same weight, the numbers are little weights of 1.</p>
<ul>
<li>You can <b>remove the same weight</b> from both pans (1st principle).</li>
<li>You can <b>halve</b> both pans (2nd principle).</li>
</ul>
<p>"Transposing with a change of sign" is just a shortcut: taking 3 little weights from both pans makes the +3 on the left disappear and a −3 appears on the right!</p>
<p>3x + 2 = x + 10 → I take x from both → 2x + 2 = 10 → I take 2 → 2x = 8 → I halve → <b>x = 4</b>.</p>`
        },
        {
          label: "🇸🇬 Singapore's bar model",
          html: `<p>In Singapore, one of the countries with the best results in mathematics, problems are solved with <b>bars</b> even before using letters.</p>
<p>"Luke has 3 times as many stickers as Anna; together they have 48." Draw one bar for Anna and 3 equal bars for Luke: in all <b>4 bars = 48</b>, so one bar = 12. Anna has 12 stickers, Luke 36. In algebra: x + 3x = 48 → 4x = 48 → x = 12.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<text x="20" y="60" font-size="20" fill="#1f2937" font-weight="bold">Anna</text>
<rect x="110" y="35" width="100" height="40" fill="#f472b6" stroke="#9d174d" stroke-width="3"/>
<text x="160" y="62" font-size="18" text-anchor="middle" fill="#fff">x</text>
<text x="20" y="130" font-size="20" fill="#1f2937" font-weight="bold">Luke</text>
<rect x="110" y="105" width="100" height="40" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="210" y="105" width="100" height="40" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="310" y="105" width="100" height="40" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<text x="160" y="132" font-size="18" text-anchor="middle" fill="#fff">x</text><text x="260" y="132" font-size="18" text-anchor="middle" fill="#fff">x</text><text x="360" y="132" font-size="18" text-anchor="middle" fill="#fff">x</text>
<path d="M430 35 Q450 90 430 145" fill="none" stroke="#1f2937" stroke-width="3"/>
<text x="460" y="97" font-size="24" fill="#1f2937" font-weight="bold">48</text>
<text x="300" y="195" font-size="20" text-anchor="middle" fill="#166534" font-weight="bold">4 bars = 48 → 1 bar = 12</text>
</svg>`
        },
        {
          label: "🇬🇧 The machine in reverse",
          html: `<p>In English schools they use <b>function machines</b>: the unknown goes into a machine that performs some operations.</p>
<p>x → <b>× 3</b> → <b>+ 5</b> → 26</p>
<p>To find x, you run the machine <b>backwards</b>, with the <b>inverse</b> operations and in reverse order:</p>
<p>26 → <b>− 5</b> → 21 → <b>÷ 3</b> → <b>7</b>. So x = 7.</p>
<p>This is exactly what you do with the equivalence principles: to "undo" a +5 you subtract 5, to undo a ×3 you divide by 3. It is like taking your clothes off: the last thing you put on (the jacket) is the first one you take off!</p>`
        },
        {
          label: "🐸 On the number line",
          html: `<p>Solve <b>x + 7 = 3</b> on the line: which number must I start from to reach 3 by making a jump of +7? Start from 3 and go back 7: you land on <b>−4</b>. So x = −4. Try it with the widget: set the start at 3 and the jump at 7, then press "−".</p>`,
          widget: "numberLine",
          options: { min: -10, max: 10, step: 7, start: 3 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of first-degree equations",
      nodes: [
        { id: "uguaglianza", label: "Equality", x: 50, y: 6, color: "#64748b", html: "Two expressions linked by the = sign.", why: "The = sign was introduced by Robert Recorde in 1557. An equality between algebraic expressions can be always true or true only sometimes." },
        { id: "identita", label: "Identity", x: 20, y: 26, color: "#94a3b8", html: "Equality true for every value of the letters.", why: "It comes from the properties of operations (e.g. the distributive property): the formulas of literal calculus are identities." },
        { id: "equazione", label: "Equation", x: 70, y: 26, color: "#2563eb", html: "Equality true only for certain values of the unknown.", why: "From the Latin <i>aequatio</i>, 'making equal'. Problems of this kind are already found in the Rhind papyrus (around 1650 BC) and in Babylonian tablets." },
        { id: "principio1", label: "1st principle", x: 45, y: 50, color: "#16a34a", html: "You can add or subtract the same quantity to both sides.", why: "It corresponds to al-Khwārizmī's <i>al-jabr</i> and <i>al-muqābala</i> (around 820 AD): 'restoring' the subtracted terms and 'balancing' the equal ones." },
        { id: "principio2", label: "2nd principle", x: 80, y: 50, color: "#f59e0b", html: "You can multiply or divide both sides by the same number ≠ 0.", why: "If two quantities are equal, so are their doubles, their halves… It is one of Euclid's axioms ('common notions'). Zero is excluded because division by zero makes no sense." },
        { id: "trasporto", label: "Transposition rule", x: 20, y: 70, color: "#22c55e", html: "A term passes to the other side changing sign.", why: "It is a shortcut of the 1st principle: adding the opposite to both sides makes the term 'disappear' from one side and 'appear' with the opposite sign on the other." },
        { id: "forma", label: "Normal form ax = b", x: 60, y: 72, color: "#a855f7", html: "The end point after the transformations.", why: "Every first-degree equation can be reduced to this form; from it you immediately see whether it is determinate, impossible or indeterminate." },
        { id: "casi", label: "Determinate / impossible / indeterminate", x: 60, y: 92, color: "#ef4444", html: "One solution / none / infinitely many.", why: "It depends on a and b: if a ≠ 0 I can divide; if a = 0 the left side is always 0, so everything depends on b." },
        { id: "problemi", label: "Problems", x: 20, y: 92, color: "#0ea5e9", html: "Translating a real situation into an equation.", why: "This is the reason equations were born: dividing inheritances, calculating taxes, prices, distances. Fibonacci's Liber Abaci (1202) is full of commercial problems solved this way." }
      ],
      edges: [
        ["uguaglianza", "identita", "always true"],
        ["uguaglianza", "equazione", "sometimes true"],
        ["equazione", "principio1", "is transformed with"],
        ["equazione", "principio2", "is transformed with"],
        ["principio1", "trasporto", "shortcut"],
        ["principio1", "forma", "leads to"],
        ["principio2", "forma", "leads to"],
        ["forma", "casi", "decides"],
        ["problemi", "equazione", "are translated into"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: solve and check",
      questions: [
        { type: "num", q: "Solve: 7x − 4 = 3x + 20", answer: 6, explain: "7x − 3x = 20 + 4 → 4x = 24 → x = 6." },
        { type: "num", q: "Solve: x/3 + 2 = 6", answer: 12, explain: "x/3 = 4 → x = 12." },
        { type: "mc", q: "The equation 2(x + 3) = 2x + 1 is…", options: ["determinate", "impossible", "indeterminate"], answer: 1, explain: "2x + 6 = 2x + 1 → 0x = −5: impossible." }
      ]
    }
  ],
  glossary: [
    { t: "Equation", d: "Equality between two expressions that holds only for some values of the unknown." },
    { t: "Identity", d: "Equality true for any value of the letters." },
    { t: "Unknown", d: "The letter whose value is being sought." },
    { t: "Sides (members)", d: "The two expressions to the left (first) and to the right (second) of the equals sign." },
    { t: "Solution (root)", d: "The value of the unknown that makes the equation true." },
    { t: "Equivalent equations", d: "Equations that have the same solutions." },
    { t: "Equivalence principles", d: "Rules that turn an equation into an equivalent one." },
    { t: "Normal form", d: "The form ax = b of a first-degree equation." },
    { t: "Check", d: "Testing the solution by substituting it in the equation." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which of these is an identity?", options: ["x + 2 = 5", "3(x + 1) = 3x + 3", "2x = 0"], answer: 1, explain: "It is true for every x thanks to the distributive property." },
      { type: "num", q: "Solve: 4x + 7 = 31", answer: 6, explain: "4x = 24 → x = 6." },
      { type: "num", q: "Solve: 2(x − 5) = x + 3", answer: 13, explain: "2x − 10 = x + 3 → x = 13." },
      { type: "num", q: "Solve: −3x + 2 = 14", answer: -4, explain: "−3x = 12 → x = −4." },
      { type: "num", q: "Solve: x/4 − 1 = x/6", answer: 12, explain: "I multiply by 12: 3x − 12 = 2x → x = 12." },
      { type: "tf", q: "With the first principle you can subtract the same number from both sides.", answer: true, explain: "That is exactly the statement of the first principle." },
      { type: "mc", q: "An equation that reduces to 0x = 0 is…", options: ["impossible", "determinate", "indeterminate"], answer: 2, explain: "Every number satisfies it: infinitely many solutions." },
      { type: "order", q: "Put the steps for solving an equation in order.", items: ["Remove the brackets", "Clear the denominators", "Transpose the terms", "Reduce to the form ax = b", "Divide by the coefficient", "Check"], explain: "This is the standard 6-step method." },
      { type: "num", q: "The sum of three consecutive numbers is 72. Which is the smallest?", answer: 23, explain: "x + (x + 1) + (x + 2) = 72 → 3x + 3 = 72 → x = 23." },
      { type: "num", q: "The perimeter of a rectangle is 50 cm; the base is 7 cm longer than the height. How long is the height?", answer: 9, unit: "cm", explain: "2(h + 7) + 2h = 50 → 4h + 14 = 50 → h = 9." },
      { type: "mc", q: "To clear the denominators in x/2 + x/5 = 7 you multiply everything by…", options: ["7", "10", "2"], answer: 1, explain: "The LCM of 2 and 5 is 10." },
      { type: "text", q: "Who invented the \"=\" sign in 1557?", answer: ["robert recorde", "recorde"], explain: "The Welshman Robert Recorde." }
    ],
    gen: [["equation", 3]]
  }
});
