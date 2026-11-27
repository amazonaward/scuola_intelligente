TOPIC('en', {
  id: "l1-mat-insiemi-numerici",
  title: "Natural numbers, integers and rational numbers",
  intro: "Counting sheep, recording a debt, sharing a pizza into equal slices: throughout history, each everyday problem has called for a new kind of number. From the <b>natural numbers</b> to the <b>integers</b> and on to the <b>rational numbers</b>, we build, one step at a time, a system in which every addition, subtraction, multiplication and division (except by zero) always has a result. In this lesson we carefully review the <b>properties of operations</b>, <b>powers</b>, <b>fractions</b> and <b>recurring decimals</b>, with one question in the background: why do we keep needing new numbers?",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "ℕ, ℤ, ℚ: three sets, three needs",
      html: `<p>The <b>natural numbers</b> ℕ = {0, 1, 2, 3, …} are used for counting. In ℕ, addition and multiplication always give a natural number (we say ℕ is <b>closed</b> under them), but subtraction does not: 3 − 5 is not a natural number.</p>
<p>That is why we introduce the <b>integers</b> ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}, which include the <b>opposites</b> of the natural numbers. In ℤ you can always add, subtract and multiply. But 7 ÷ 2 is not an integer.</p>
<p>To make division always possible (by a non-zero number) we build the <b>rational numbers</b> ℚ, that is, the numbers that can be written as a <b>fraction</b> a/b with a ∈ ℤ and b ∈ ℤ, b ≠ 0. For example 3/4, −5/2, 7 = 7/1.</p>
<p>We have the inclusions <b>ℕ ⊂ ℤ ⊂ ℚ</b>. Each step \"solves\" an equation that previously had no solution: x + 5 = 3 has a solution in ℤ (x = −2), 2x = 7 in ℚ (x = 7/2). But the extension is not over: x² = 2 has no solution in ℚ, which is why we need the real numbers (you will see them in the coming years).</p>
<p>Remember the notation: ℤ⁺ (positive), ℤ⁻ (negative), ℤ* (without zero), ℚ⁺ and so on. In many Italian textbooks <b>zero</b> is a natural number; some authors leave zero out of ℕ and write ℕ₀ to include it.</p>`
    },
    {
      type: "svg",
      title: "Number sets, one inside the other",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<ellipse cx="300" cy="150" rx="280" ry="135" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<ellipse cx="300" cy="165" rx="205" ry="100" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<ellipse cx="300" cy="180" rx="125" ry="62" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<text x="300" y="42" font-size="18" text-anchor="middle" fill="#78350f" font-weight="bold">ℚ: fractions a/b (b ≠ 0)  ·  2/3, −5/4, 0.(3)</text>
<text x="300" y="96" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">ℤ: …, −2, −1, 0, 1, 2, …</text>
<text x="300" y="187" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">ℕ: 0, 1, 2, 3, …</text>
<text x="300" y="270" font-size="16" text-anchor="middle" fill="#334155">Outside ℚ there are numbers like √2 and π: you will meet them among the reals.</text>
</svg>`,
      caption: "Each set contains the previous one: every natural number is an integer, every integer is a rational number (n = n/1)."
    },
    {
      type: "text",
      title: "Properties of operations",
      html: `<p>Operations follow precise rules. Let a, b, c be any numbers:</p>
<table>
<tr><th>Property</th><th>Addition</th><th>Multiplication</th></tr>
<tr><td><b>Commutative</b></td><td>a + b = b + a</td><td>a · b = b · a</td></tr>
<tr><td><b>Associative</b></td><td>(a + b) + c = a + (b + c)</td><td>(a · b) · c = a · (b · c)</td></tr>
<tr><td><b>Identity element</b></td><td>a + 0 = a</td><td>a · 1 = a</td></tr>
<tr><td><b>Inverse</b></td><td>opposite: a + (−a) = 0 (in ℤ and ℚ)</td><td>reciprocal: a · (1/a) = 1, if a ≠ 0 (in ℚ)</td></tr>
</table>
<p>The two operations are linked by the <b>distributive property</b>: <b>a · (b + c) = a·b + a·c</b>. This is the rule that lets you \"remove brackets\" and, the other way round, \"factor out\": 7·38 + 7·62 = 7·(38 + 62) = 700.</p>
<p>Subtraction and division are <b>neither</b> commutative nor associative: 8 − 3 ≠ 3 − 8 and (20 ÷ 4) ÷ 5 = 1 ≠ 20 ÷ (4 ÷ 5) = 25. But they can be <b>reduced</b> to the other two: a − b = a + (−b) and a ÷ b = a · (1/b). So in ℚ the sign rule becomes simple: the product of two numbers is + if the factors have the same sign, − if they have different signs.</p>
<p>Other useful properties: the <b>invariance property</b> of subtraction (a − b = (a + k) − (b + k)) and of division (a ÷ b = (a·k) ÷ (b·k), k ≠ 0), the <b>zero product property</b> (a·b = 0 ⇒ a = 0 or b = 0), and the fact that <b>you cannot divide by zero</b>: 5 ÷ 0 makes no sense (no number times 0 gives 5), and 0 ÷ 0 is indeterminate (any number times 0 gives 0).</p>
<p><b>Order of operations</b>: first brackets (round, square, curly, from the inside out), then powers, then multiplication and division (from left to right), and finally addition and subtraction. Example: 2 + 3 · 4² − (10 − 4) ÷ 2 = 2 + 3·16 − 6 ÷ 2 = 2 + 48 − 3 = 47.</p>`
    },
    {
      type: "example",
      title: "Example: mental arithmetic with the properties",
      html: `<p>The properties are not just formalities: they help you calculate faster.</p>
<ul>
<li><b>25 · 37 · 4</b>: by the commutative and associative properties, (25 · 4) · 37 = 100 · 37 = <b>3700</b>.</li>
<li><b>99 · 46</b>: 99 = 100 − 1, so 99·46 = 100·46 − 46 = 4600 − 46 = <b>4554</b> (distributive).</li>
<li><b>1000 − 487</b>: by the invariance property (add 13 to both) = 1013 − 500 = <b>513</b>.</li>
<li><b>2.5 · 48</b> = (10/4) · 48 = 10 · 12 = <b>120</b>.</li>
</ul>
<p>According to tradition, the young Gauss computed 1 + 2 + … + 100 at school by grouping the numbers into 50 pairs that each add up to 101: 50 · 101 = 5050. A brilliant use of the commutative, associative and distributive properties!</p>`
    },
    {
      type: "text",
      title: "Powers",
      html: `<p>The <b>power</b> a<sup>n</sup> (with n a natural number) is the product of n factors equal to a: a<sup>n</sup> = a·a·…·a. a is the <b>base</b>, n the <b>exponent</b>. Important extensions:</p>
<ul>
<li>a<sup>1</sup> = a;</li>
<li><b>a<sup>0</sup> = 1</b> for a ≠ 0 (0<sup>0</sup> is indeterminate);</li>
<li><b>a<sup>−n</sup> = 1/a<sup>n</sup></b> = (1/a)<sup>n</sup> for a ≠ 0: 2<sup>−3</sup> = 1/8, (2/3)<sup>−2</sup> = 9/4.</li>
</ul>
<p>Properties (a, b ≠ 0; m, n integers):</p>
<table>
<tr><td>Product of powers with the same base</td><td>a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup></td></tr>
<tr><td>Quotient of powers with the same base</td><td>a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup></td></tr>
<tr><td>Power of a power</td><td>(a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup></td></tr>
<tr><td>Product with the same exponent</td><td>a<sup>n</sup> · b<sup>n</sup> = (a·b)<sup>n</sup></td></tr>
<tr><td>Quotient with the same exponent</td><td>a<sup>n</sup> ÷ b<sup>n</sup> = (a ÷ b)<sup>n</sup></td></tr>
</table>
<p>Why is a<sup>0</sup> = 1? Because a<sup>n</sup> ÷ a<sup>n</sup> = a<sup>n−n</sup> = a<sup>0</sup> must hold, but on the other hand it equals 1. Why is a<sup>−n</sup> = 1/a<sup>n</sup>? Because a<sup>0</sup> = a<sup>n</sup> · a<sup>−n</sup> = 1. The definitions are chosen so that the properties always hold: this is how a concept is extended in mathematics.</p>
<p><b>Watch the signs</b>: (−2)<sup>2</sup> = 4, but −2<sup>2</sup> = −4 (the power takes precedence over the minus sign). A power with a negative base is positive if the exponent is even, negative if it is odd. Also, (a + b)<sup>2</sup> is <b>not</b> a<sup>2</sup> + b<sup>2</sup>: you will see why soon with special products.</p>
<p>Powers of 10 give <b>scientific notation</b>: 300 000 000 = 3 · 10<sup>8</sup>; 0.00000052 = 5.2 · 10<sup>−7</sup>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: properties and powers",
      questions: [
        { type: "num", q: "Calculate: 2 + 3 · 4² − (10 − 4) ÷ 2", answer: 47, explain: "Powers: 4² = 16; then 3 · 16 = 48; (10 − 4) ÷ 2 = 3. So 2 + 48 − 3 = 47." },
        { type: "num", q: "Calculate: 2⁵ · 2⁻² ÷ 2²", answer: 2, explain: "The bases are the same: exponent 5 − 2 − 2 = 1, so 2¹ = 2." },
        { type: "mc", q: "What is −3²?", options: ["9", "−9", "6"], answer: 1, explain: "The power is calculated before the minus sign: −(3²) = −9. Whereas (−3)² = 9." },
        { type: "tf", q: "Division is a commutative operation.", answer: false, explain: "For example, 8 ÷ 2 = 4 but 2 ÷ 8 = 1/4." }
      ]
    },
    {
      type: "text",
      title: "Fractions and rational numbers",
      html: `<p>A <b>fraction</b> a/b means a parts of a whole divided into b equal parts (b = <b>denominator</b>, a = <b>numerator</b>). Two fractions are <b>equivalent</b> if they represent the same number: a/b = c/d ⇔ a·d = b·c. Multiplying or dividing numerator and denominator by the same non-zero number gives an equivalent fraction (<b>invariance property</b>): 2/3 = 4/6 = 10/15. A rational number is the class of all equivalent fractions. A fraction is <b>reduced to lowest terms</b> by dividing by the GCD: 18/24 = 3/4.</p>
<p><b>Operations in ℚ</b>:</p>
<ul>
<li><b>Sum/difference</b>: bring to a common denominator (LCM): 1/6 + 3/4 = 2/12 + 9/12 = 11/12.</li>
<li><b>Product</b>: numerator times numerator, denominator times denominator (simplify first!): (4/9) · (3/8) = 12/72 = 1/6.</li>
<li><b>Quotient</b>: multiply by the <b>reciprocal</b> of the divisor: (3/5) ÷ (9/10) = 3/5 · 10/9 = 30/45 = 2/3.</li>
<li><b>Comparison</b>: bring to a common denominator and compare the numerators: 5/8 &gt; 3/5, because 25/40 &gt; 24/40. Or compare the \"cross\" products: 5·5 = 25 &gt; 3·8 = 24.</li>
</ul>
<p>The rationals are <b>dense</b>: between any two rationals there is always another one (for example their mean). So between 0 and 1 there are infinitely many rationals, with no \"next number\": unlike the natural numbers, you cannot say what comes right after 1/2. And yet the number line still has \"gaps\": √2 is not rational, as the Pythagoreans already discovered (5th century BC) with a proof by contradiction.</p>`
    },
    {
      type: "example",
      title: "Example: recipes and fractions",
      html: `<p>A recipe for 4 people needs 3/4 of a litre of milk, but you are cooking for 6. And you only have 1 litre. Is it enough?</p>
<ol>
<li>Scale factor: 6/4 = 3/2.</li>
<li>Milk needed: (3/4) · (3/2) = 9/8 of a litre = 1 + 1/8 of a litre = 1.125 L.</li>
<li>Compare with 1 L = 8/8: 9/8 &gt; 8/8 → <b>not enough</b>, you are 1/8 of a litre (125 mL) short.</li>
</ol>
<p>Another example, with a negative: your bank charges you 2/5 of a €150 debt: (−150) · (2/5) = −€60. The product of a negative and a positive number is negative.</p>`
    },
    {
      type: "text",
      title: "Decimal numbers: terminating and recurring",
      html: `<p>Every fraction can be turned into a <b>decimal number</b> by carrying out the division. It may happen that:</p>
<ul>
<li>the division <b>ends</b>: a <b>terminating decimal</b>. 3/4 = 0.75; 7/20 = 0.35;</li>
<li>the division <b>does not end</b> but the digits repeat: a <b>recurring decimal</b>. 1/3 = 0.3333… = 0.<span style="text-decoration:overline">3</span> (written 0.(3)); 5/6 = 0.8333… = 0.8(3); 1/7 = 0.(142857).</li>
</ul>
<p>Why does it always repeat? When dividing by b there are only b possible remainders (from 0 to b − 1): after at most b steps a remainder repeats, and from then on everything repeats. The group of repeating digits is the <b>period</b> (repetend); the digits between the decimal point and the period form the <b>non-repeating part</b>.</p>
<p><b>Rule</b>: a fraction in lowest terms gives a <b>terminating</b> decimal if the only prime factors of its denominator are 2 and/or 5 (the factors of 10); otherwise it is <b>recurring</b>. For example 7/20 (20 = 2²·5) terminates; 7/12 (12 = 2²·3) is a mixed recurring decimal.</p>
<p><b>Generating fraction</b> (from decimal to fraction):</p>
<ul>
<li><b>Pure recurring</b>: numerator = the number without the decimal point, <i>minus</i> the integer part; denominator = as many 9s as there are digits in the period. 2.(45) = (245 − 2)/99 = 243/99 = 27/11.</li>
<li><b>Mixed recurring</b>: numerator = the number without the decimal point up to the end of the period, <i>minus</i> the number up to the end of the non-repeating part; denominator = as many 9s as digits in the period, followed by as many 0s as digits in the non-repeating part. 0.1(6) = (16 − 1)/90 = 15/90 = 1/6; 3.2(7) = (327 − 32)/90 = 295/90 = 59/18.</li>
</ul>
<p>A curiosity: <b>0.(9) = 1</b>. Indeed 0.(9) = 9/9 = 1. Another way: 1/3 = 0.(3), so 3 · (1/3) = 3 · 0.(3) = 0.(9) and at the same time = 1. There is no number between 0.(9) and 1: they are the same number written in two ways.</p>`
    },
    {
      type: "example",
      title: "Example: from fraction to decimal and back",
      html: `<p><b>From fraction to decimal</b>: 5/7 = 0.714285 714285… = 0.(714285), a period of 6 digits. For 7 the possible remainders are 1, …, 6: the period of 1/7 uses all the remainders, which is why it is so long.</p>
<p><b>From decimal to fraction</b>: convert 0.(36).</p>
<ol>
<li>It is pure recurring with integer part 0 and period 36 (two digits): 36/99.</li>
<li>Simplify by 9: 36/99 = 4/11.</li>
<li>Check: 4 ÷ 11 = 0.363636… ✔</li>
</ol>
<p>With this method every recurring decimal (and every terminating one) can be recognised as a rational number. Conversely, a decimal with infinitely many <b>non-repeating</b> digits, such as 0.1011011101111…, cannot be rational: it is an irrational number.</p>`
    },
    {
      type: "widget",
      title: "Which set does it belong to?",
      widget: "classify",
      options: { groups: ["Natural", "Integer, not natural", "Rational, not integer", "Neither rational nor integer"], items: [
        ["7", 0], ["0", 0], ["√16", 0],
        ["−4", 1], ["−12", 1], ["−20 ÷ 5", 1],
        ["3/4", 2], ["−2/5", 2], ["0.(3)", 2], ["2.5", 2],
        ["√2", 3], ["π", 3]
      ] },
      caption: "√16 = 4 is natural; −20 ÷ 5 = −4 is an integer; 0.(3) = 1/3 is rational; √2 and π are not rational."
    },
    {
      type: "curiosity",
      title: "The number that shocked the Pythagoreans",
      html: `<p>The Pythagoreans believed that \"all is number\", meaning a ratio of whole numbers. But applying their own theorem to a square with side 1, the diagonal measures √2, and <b>there are no two integers a and b with (a/b)² = 2</b>. The proof is by contradiction: if a/b were in lowest terms, a² = 2b² would make a even, so a = 2k and 4k² = 2b² → b² = 2k² → b is even too, contradicting the assumption that a/b was in lowest terms. According to a legend (which historians doubt), the Pythagorean Hippasus of Metapontum, who revealed the existence of incommensurable magnitudes, was thrown into the sea. The discovery of these \"irrational numbers\" changed Greek mathematics for ever.</p>`
    },
    {
      type: "curiosity",
      title: "Zero and negative numbers had a difficult history",
      html: `<p>Zero as a genuine number was developed in India: in the <i>Brahmasphutasiddhanta</i> (628 AD) Brahmagupta gives the rules for calculating with it, as well as the rules for negative numbers, interpreted as \"debts\" (positive numbers were \"fortunes\"). In Europe negative numbers were accepted very late: as late as the 16th century many mathematicians called them \"absurd\" or \"fictitious\" numbers. Leonardo of Pisa (Fibonacci), in his <i>Liber abaci</i> (1202), brought the Hindu-Arabic numerals and zero to Europe, but it took centuries for them to spread. The + and − signs first appeared in print at the end of the 15th century.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand numbers and fractions",
      intro: "If the sign rule or fractions feel like formulas to memorise, try these images.",
      tabs: [
        {
          label: "🍕 The pizza",
          html: `<p>A fraction n/d is a pizza cut into d equal slices, of which you take n. Drag the sliders to see that 2/3 and 4/6 cover the <b>same amount</b> of pizza: equivalent fractions are just different ways of cutting the same pizza. Adding 1/2 and 1/3 means finding a cut (into sixths) that works for both: 3/6 + 2/6 = 5/6.</p>`,
          widget: "fractionPie",
          options: { n: 2, d: 3 }
        },
        {
          label: "🌡️ The number line and temperature",
          html: `<p>Signed numbers are the numbers on a thermometer: if it is −3 °C and the temperature rises by 5 °C, it reaches +2 °C. On the number line, adding a positive number is a jump to the right, adding a negative one is a jump to the left. Multiplying by −1 means \"reflecting\" across zero. Try it: start from −3 and jump 5.</p>`,
          widget: "numberLine",
          options: { min: -10, max: 10, step: 5, start: -3 }
        },
        {
          label: "💰 Fortunes and debts",
          html: `<p>The way Indian mathematicians of the 7th century thought of it: positive = gain, negative = debt.</p>
<ul>
<li>(+5) + (−3): I have €5 and owe €3: I am left with €2.</li>
<li>(−5) − (−3): I have a €5 debt and someone <b>takes away</b> a €3 debt: the debt drops to €2, that is −2.</li>
<li>(−4) · (+3): three debts of €4 = −€12.</li>
<li>(−4) · (−3): I <b>take away</b> three debts of €4 = +€12. That is why \"minus times minus makes plus\".</li>
</ul>`
        },
        {
          label: "📏 0.(9) = 1 with a trick",
          html: `<p>Let x = 0.999… Multiply by 10: 10x = 9.999… Subtract: 10x − x = 9.999… − 0.999… = 9, so 9x = 9 and <b>x = 1</b>. The same trick works for every recurring decimal: for x = 0.(36) multiply by 100: 100x = 36.(36), subtract x: 99x = 36, so x = 36/99. This is the proof of the generating-fraction rule.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of numbers",
      nodes: [
        { id: "naturali", label: "Natural numbers ℕ", x: 15, y: 8, color: "#2563eb", html: "0, 1, 2, 3, …: used for counting.", why: "They are the first numbers in history: tally marks on bones date back more than 20,000 years. Peano (1889) axiomatised them: 0 is a number, every number has a successor, and the principle of induction holds." },
        { id: "interi", label: "Integers ℤ", x: 50, y: 22, color: "#16a34a", html: "Natural numbers and their opposites: …, −2, −1, 0, 1, …", why: "They make subtraction always possible. Introduced with the idea of debt by Brahmagupta (628 AD) and accepted in Europe only in the 16th–17th centuries." },
        { id: "razionali", label: "Rationals ℚ", x: 80, y: 40, color: "#f59e0b", html: "Fractions a/b with b ≠ 0.", why: "They make division (by non-zero numbers) always possible. They arise from measurement: if a length is not a multiple of the unit, it is expressed as a fraction. The Egyptians already used unit fractions." },
        { id: "proprieta", label: "Properties of operations", x: 20, y: 38, color: "#9333ea", html: "Commutative, associative, distributive, identity and inverse elements.", why: "They are the \"axioms\" of algebra: ℚ is a field. All the techniques of algebraic manipulation (coming soon) derive from these rules." },
        { id: "potenze", label: "Powers", x: 12, y: 66, color: "#ef4444", html: "Repeated product: aⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ.", why: "The definitions of a⁰ and a⁻ⁿ are chosen to keep the properties valid: mathematics extends concepts while preserving the rules." },
        { id: "frazioni", label: "Fractions and operations", x: 50, y: 62, color: "#0ea5e9", html: "Equivalence, common denominator, reciprocal.", why: "The reciprocal rule comes from the fact that dividing by b means finding the number which, multiplied by b, gives the dividend: x·b = a → x = a/b." },
        { id: "decimali", label: "Terminating and recurring decimals", x: 85, y: 78, color: "#22c55e", html: "Base-10 representations of the rationals.", why: "Division has only finitely many possible remainders, so it either stops or repeats: every rational has a terminating or recurring decimal expansion, and vice versa." },
        { id: "irrazionali", label: "Beyond ℚ: irrationals", x: 55, y: 92, color: "#64748b", html: "√2, π: infinite non-repeating decimals.", why: "The discovery of √2 (Pythagoreans, 5th century BC) showed that fractions are not enough to measure every length: we need the real numbers." }
      ],
      edges: [["naturali", "interi", "extension"], ["interi", "razionali", "extension"], ["naturali", "proprieta", "operations"], ["proprieta", "potenze", "extend to"], ["razionali", "frazioni", "written as"], ["frazioni", "decimali", "division"], ["razionali", "decimali", "have"], ["decimali", "irrazionali", "the limit"]]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>ℕ ⊂ ℤ ⊂ ℚ: each set solves a new kind of equation (subtraction, division).</li>
<li>Properties: commutative, associative, distributive; subtraction and division are <b>neither</b> commutative nor associative; never divide by 0.</li>
<li>a⁰ = 1; a⁻ⁿ = 1/aⁿ; aᵐ·aⁿ = aᵐ⁺ⁿ; (aᵐ)ⁿ = aᵐⁿ. Careful: −2² = −4 but (−2)² = 4.</li>
<li>Fractions: dividing by a fraction = multiplying by its reciprocal.</li>
<li>A decimal terminates if the (reduced) denominator has only the factors 2 and 5; otherwise it recurs. Generating fraction: 0.(a) = a/9 and so on.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: fractions and decimals",
      questions: [
        { type: "num", q: "Calculate: 1/6 + 3/4 (give the result in twelfths, i.e. the numerator over the denominator 12).", answer: 11, explain: "1/6 = 2/12 and 3/4 = 9/12; the sum is 11/12: the numerator is 11." },
        { type: "mc", q: "What is the generating fraction of 0.(6)?", options: ["6/10", "2/3", "6/100"], answer: 1, explain: "0.(6) = 6/9 = 2/3." },
        { type: "mc", q: "Which fraction has a recurring decimal expansion?", options: ["3/8", "7/20", "5/12"], answer: 2, explain: "12 = 2²·3 contains the factor 3, so 5/12 = 0.41(6). 8 = 2³ and 20 = 2²·5 give terminating decimals (0.375 and 0.35)." },
        { type: "tf", q: "0.(9) is a number less than 1.", answer: false, explain: "0.(9) = 9/9 = 1: it is the same number." }
      ]
    }
  ],
  glossary: [
    { t: "Natural numbers (ℕ)", d: "The numbers 0, 1, 2, 3, … used for counting." },
    { t: "Integers (ℤ)", d: "The natural numbers and their negative opposites." },
    { t: "Rational numbers (ℚ)", d: "Numbers that can be written as a fraction a/b of integers with b ≠ 0." },
    { t: "Closure", d: "A set is closed under an operation if the result still belongs to the set." },
    { t: "Opposite", d: "The number −a which, added to a, gives 0." },
    { t: "Reciprocal", d: "The number 1/a which, multiplied by a (≠ 0), gives 1." },
    { t: "Distributive property", d: "a·(b + c) = a·b + a·c." },
    { t: "Power", d: "aⁿ: the product of n factors equal to a; for negative exponents, a⁻ⁿ = 1/aⁿ." },
    { t: "Equivalent fractions", d: "Fractions that represent the same rational number." },
    { t: "Period", d: "The group of digits that repeats infinitely after the decimal point." },
    { t: "Generating fraction", d: "The fraction that produces a given recurring decimal." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which equation has no solution in ℕ but has one in ℤ?", options: ["x + 4 = 9", "x + 7 = 3", "2x = 7"], answer: 1, explain: "x + 7 = 3 gives x = −4: an integer, not a natural number. 2x = 7 has no solution in ℤ, only in ℚ." },
      { type: "num", q: "Calculate: 5 − 2 · (3 − 7) + 6 ÷ 3", answer: 15, explain: "3 − 7 = −4; 2 · (−4) = −8; 5 + 8 = 13; 6 ÷ 3 = 2; 13 + 2 = 15." },
      { type: "num", q: "Calculate: (2³ · 2⁻⁵) ÷ 2⁻² (give the result as a number).", answer: 1, explain: "Exponents: 3 − 5 − (−2) = 0, so 2⁰ = 1." },
      { type: "num", q: "Calculate (3/5) ÷ (9/10) and write the result as a decimal (round to two decimal places).", answer: 0.67, tol: 0.01, explain: "(3/5) · (10/9) = 30/45 = 2/3 ≈ 0.67." },
      { type: "mc", q: "What is 18/24 reduced to lowest terms?", options: ["3/4", "9/12", "6/8"], answer: 0, explain: "GCD(18, 24) = 6: 18/24 = 3/4. The other two are not fully reduced." },
      { type: "mc", q: "What is the generating fraction of 0.1(6)?", options: ["16/100", "1/6", "16/99"], answer: 1, explain: "(16 − 1)/90 = 15/90 = 1/6." },
      { type: "num", q: "What is the generating fraction of 2.(3)? Give the numerator of the fraction in lowest terms.", answer: 7, explain: "2.(3) = (23 − 2)/9 = 21/9 = 7/3." },
      { type: "tf", q: "The fraction 7/40 has a terminating decimal expansion.", answer: true, explain: "40 = 2³·5: only the factors 2 and 5. 7/40 = 0.175." },
      { type: "tf", q: "Between two different rational numbers there is always another rational number.", answer: true, explain: "This is the density of ℚ: the mean (a + b)/2 lies between the two." },
      { type: "order", q: "Put in order from smallest to largest.", items: ["−3/2", "−1", "0.(3)", "2/3", "1.5"], explain: "−1.5 < −1 < 0.333… < 0.666… < 1.5." },
      { type: "text", q: "What do you call the number by which you multiply a number (≠ 0) to get 1?", answer: ["reciprocal", "the reciprocal", "inverse", "multiplicative inverse", "the multiplicative inverse"], explain: "It is the reciprocal: the multiplicative inverse of a is 1/a." }
    ]
  }
});
