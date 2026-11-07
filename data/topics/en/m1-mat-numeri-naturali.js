TOPIC('en', {
  id: "m1-mat-numeri-naturali",
  title: "Natural numbers and the four operations",
  intro: "<b>Natural numbers</b> are the numbers we count with: 0, 1, 2, 3… In middle school we learn to look at them as a real <b>set</b> (ℕ), to know the <b>decimal place-value system</b> well and to use the <b>properties</b> of the four operations to calculate faster and solve <b>expressions</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "The set ℕ and the number line",
      html: `<p>The set of natural numbers is written <b>ℕ</b>: ℕ = { 0, 1, 2, 3, 4, … }.</p>
<ul>
<li>It has a <b>first</b> element, <b>0</b>, but <b>no last one</b>: it is infinite. Every number n has a <b>successor</b> n + 1.</li>
<li>Every number (except 0) has a <b>predecessor</b> n − 1.</li>
<li>It is an <b>ordered</b> set: given two different numbers, one is always smaller than the other (symbols <b>&lt;</b>, <b>&gt;</b>, <b>=</b>).</li>
<li>It is <b>discrete</b>: between two consecutive naturals (e.g. 4 and 5) there is no other natural number.</li>
</ul>
<p>Natural numbers can be shown on the <b>directed half-line</b>: we fix a point for 0 (the <b>origin</b>), a direction (the arrow) and a <b>unit of measure</b> (a segment that is always the same). Each number matches a point.</p>`
    },
    {
      type: "widget",
      title: "The half-line of natural numbers",
      widget: "numberLine",
      options: { min: 0, max: 20, step: 1, marks: [7, 15] },
      caption: "Make the jumps: how many steps are there from 7 to 15? It is the subtraction 15 − 7 = 8!"
    },
    {
      type: "text",
      title: "The decimal place-value system",
      html: `<p>Our number system is:</p>
<ul>
<li><b>decimal</b>: it uses 10 digits (0, 1, 2, … 9) and every 10 units of one order make 1 unit of the next order up (10 units = 1 ten, 10 tens = 1 hundred…);</li>
<li><b>positional</b>: the value of a digit depends on its <b>position</b>. In <b>333</b> the three digits are the same but are worth 300, 30 and 3!</li>
</ul>
<p>Digits are grouped into <b>classes</b> of three: units, thousands, millions, billions. We read from the left and separate the classes with a comma (or a space): <b>4,507,230</b> = four million five hundred and seven thousand two hundred and thirty.</p>
<p><b>Expanded form</b>: 4,507 = 4 × 1000 + 5 × 100 + 0 × 10 + 7 × 1.</p>
<p>The <b>value</b> of a digit changes with its position, and <b>zero</b> is essential: it shows that that place is empty (407 ≠ 47).</p>`
    },
    {
      type: "3d",
      title: "Place value with cubes",
      scene: "blocks",
      options: { mode: "base10", value: 245 },
      caption: "A flat = 1 hundred (10 × 10 cubes), a rod = 1 ten, a cube = 1 unit. 245 = 2 hundreds + 4 tens + 5 units. Change the number with the slider."
    },
    {
      type: "text",
      title: "The four operations and their terms",
      html: `<table>
<tr><th>Operation</th><th>Terms</th><th>Result</th><th>Example</th></tr>
<tr><td><b>Addition</b> +</td><td>addends</td><td>sum</td><td>12 + 8 = 20</td></tr>
<tr><td><b>Subtraction</b> −</td><td>minuend, subtrahend</td><td>difference</td><td>20 − 8 = 12</td></tr>
<tr><td><b>Multiplication</b> ×</td><td>factors</td><td>product</td><td>6 × 4 = 24</td></tr>
<tr><td><b>Division</b> ÷</td><td>dividend, divisor</td><td>quotient (and remainder)</td><td>24 ÷ 4 = 6</td></tr>
</table>
<p>Subtraction and division are the <b>inverse</b> operations of addition and multiplication: 20 − 8 = 12 because 12 + 8 = 20; 24 ÷ 4 = 6 because 6 × 4 = 24.</p>
<p><b>In ℕ you can't always do everything</b>:</p>
<ul>
<li>addition and multiplication <b>always</b> give a natural number: they are said to be <b>closed</b> operations in ℕ;</li>
<li>subtraction can be done only if the minuend is ≥ the subtrahend (3 − 5 doesn't give a natural number);</li>
<li>exact division can be done only if the dividend is a <b>multiple</b> of the divisor; otherwise there is a <b>remainder</b>: 25 ÷ 4 = 6 remainder 1, that is 25 = 4 × 6 + 1.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Zero and one: special numbers",
      html: `<ul>
<li><b>0 is the identity element of addition</b>: a + 0 = a. Also a − 0 = a.</li>
<li><b>1 is the identity element of multiplication</b>: a × 1 = a. Also a ÷ 1 = a.</li>
<li><b>0 is the absorbing element of multiplication</b>: a × 0 = 0 (zero-product law: if a product is 0, at least one factor is 0).</li>
<li><b>0 ÷ a = 0</b> (with a ≠ 0): zero sweets shared among 5 friends = 0 sweets each.</li>
<li><b>a ÷ 0 is impossible</b>: no number multiplied by 0 gives a.</li>
<li><b>0 ÷ 0 is indeterminate</b>: any number multiplied by 0 gives 0, so there is no single answer.</li>
</ul>`
    },
    {
      type: "text",
      title: "The properties of the operations",
      html: `<p>Properties are "rules of the game" that are always true, and they help you <b>calculate in your head</b> faster.</p>
<ul>
<li><b>Commutative</b> (addition and multiplication): changing the order of the terms doesn't change the result.<br>7 + 25 = 25 + 7 &nbsp;&nbsp; 4 × 9 = 9 × 4</li>
<li><b>Associative</b> (addition and multiplication): you can replace two or more terms with their result.<br>17 + 8 + 2 = 17 + (8 + 2) = 17 + 10 = 27 &nbsp;&nbsp; 25 × 7 × 4 = (25 × 4) × 7 = 700</li>
<li><b>Dissociative</b>: you can break a term into a sum (or a product).<br>48 + 7 = 48 + 2 + 5 = 55 &nbsp;&nbsp; 15 × 6 = 15 × 2 × 3 = 30 × 3 = 90</li>
<li><b>Distributive</b> property of multiplication over addition (and subtraction):<br>7 × 12 = 7 × (10 + 2) = 70 + 14 = 84 &nbsp;&nbsp; 9 × 98 = 9 × (100 − 2) = 900 − 18 = 882</li>
<li><b>Invariance property of subtraction</b>: adding or taking away the same number from minuend and subtrahend doesn't change the difference.<br>83 − 29 = (83 + 1) − (29 + 1) = 84 − 30 = 54</li>
<li><b>Invariance property of division</b>: multiplying or dividing dividend and divisor by the same number (≠ 0) doesn't change the quotient.<br>350 ÷ 50 = 35 ÷ 5 = 7 &nbsp;&nbsp; 140 ÷ 5 = 280 ÷ 10 = 28</li>
</ul>
<p>Careful: subtraction and division are <b>not</b> commutative (8 − 3 ≠ 3 − 8) nor associative ((24 ÷ 4) ÷ 2 = 3, but 24 ÷ (4 ÷ 2) = 12).</p>`
    },
    {
      type: "example",
      title: "Practical example: quick calculation at the supermarket",
      html: `<p>You buy <b>4</b> packs of juice at <b>€2.99</b> each... let's think in cents: 299 cents.</p>
<p>4 × 299 = 4 × (300 − 1) = 1200 − 4 = <b>1196</b> cents = <b>€11.96</b> (distributive property).</p>
<p>Then you pay with <b>€20</b>: 2000 − 1196 = ? With the invariance property I add 4 to both: 2004 − 1200 = <b>804</b> cents = <b>€8.04</b> change.</p>
<p>Finally you share the bill of <b>€36</b> among <b>4</b> friends, using the invariance property of division: 36 ÷ 4 = 18 ÷ 2 = <b>€9</b> each.</p>
<p>No calculator: just properties!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: properties",
      questions: [
        { type: "mc", q: "Which property is used in 25 × 13 × 4 = (25 × 4) × 13?", options: ["Distributive", "Commutative and associative", "Invariance", "Dissociative"], answer: 1, explain: "The order is swapped (commutative) and 25 × 4 = 100 is grouped (associative)." },
        { type: "num", q: "Calculate in your head with the distributive property: 6 × 102 = ?", answer: 612, tol: 0, explain: "6 × 100 + 6 × 2 = 600 + 12 = 612." },
        { type: "tf", q: "Subtraction has the commutative property.", answer: false, explain: "10 − 4 = 6, but 4 − 10 is not even a natural number." },
        { type: "mc", q: "What is 7 ÷ 0?", options: ["0", "7", "1", "It is impossible"], answer: 3, explain: "No number multiplied by 0 gives 7: division by zero is impossible." }
      ]
    },
    {
      type: "text",
      title: "Expressions: the order of operations",
      html: `<p>An <b>expression</b> is a series of operations to carry out. For everybody to get the same result we follow a precise order:</p>
<ol>
<li>first solve the <b>brackets</b>: round ( ), then square [ ], then curly { };</li>
<li>inside the brackets (and outside) do <b>multiplications and divisions</b> first, in the order they appear from left to right;</li>
<li>then <b>additions and subtractions</b>, from left to right.</li>
</ol>
<p>Example: <b>{ 30 − [ 4 × (7 − 2) + 3 ] } ÷ 7</b></p>
<ul>
<li>round: 7 − 2 = 5 → { 30 − [ 4 × 5 + 3 ] } ÷ 7</li>
<li>square: 4 × 5 + 3 = 20 + 3 = 23 → { 30 − 23 } ÷ 7</li>
<li>curly: 30 − 23 = 7 → 7 ÷ 7 = <b>1</b></li>
</ul>
<p>Typical mistake: in 2 + 3 × 4 doing 2 + 3 = 5 first and then × 4 = 20. Wrong! Multiplication first: 2 + 12 = <b>14</b>.</p>`
    },
    {
      type: "example",
      title: "Practical example: from the problem to the expression",
      html: `<p><b>Problem</b>: class 1A goes on a trip. The coach costs €450 and the museum entrance €6 per person. There are 22 pupils and 3 supervisors (who also pay the entrance). The teachers divide the total cost among the <b>pupils</b> only. How much does each pupil pay?</p>
<p><b>Expression</b>: [ 450 + 6 × (22 + 3) ] ÷ 22</p>
<ul>
<li>(22 + 3) = 25 people</li>
<li>6 × 25 = €150 of entrance fees</li>
<li>450 + 150 = €600 in all</li>
<li>600 ÷ 22 = 27 remainder 6 → each pupil pays €27 and €6 remain to be covered (or you round up: 22 × 28 = €616, leaving €16 over for a snack!).</li>
</ul>
<p>Writing a single expression helps you see the whole structure of the problem.</p>`
    },
    {
      type: "curiosity",
      title: "Zero: an Indian invention",
      html: `<p>The ancient Romans had no zero and used a <b>non-positional</b> system: in MMXXVI the M is always worth 1000 wherever it is. Doing a multiplication with Roman numerals was a nightmare: people used the abacus!</p>
<p>The digits we use and <b>zero</b> as a number were born in <b>India</b>: the mathematician <b>Brahmagupta</b> in <b>AD 628</b> wrote the first rules for calculating with zero. The Arabs spread them (that is why we call them "Arabic numerals"), and <b>Leonardo Fibonacci</b> of Pisa brought them to Europe with the <i>Liber abaci</i> in <b>1202</b>. The word "zero" comes from the Arabic <i>ṣifr</i>, "empty", from which "cipher" also comes!</p>`
    },
    {
      type: "curiosity",
      title: "Little Gauss and the sum from 1 to 100",
      html: `<p>The story goes that, around 1785, the teacher of <b>Carl Friedrich Gauss</b>, who was about 8 years old, asked the class to add up all the numbers from 1 to 100, to keep them busy. Gauss answered after a few seconds: <b>5050</b>!</p>
<p>His trick uses the commutative and associative properties: 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101… There are 50 pairs that make 101: 50 × 101 = <b>5050</b>.</p>
<p>Now you try: what is the sum from 1 to 20? (10 pairs of 21 = 210)</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to multiply",
      intro: "Around the world and through history people multiply in many different ways. They all work thanks to the distributive property!",
      tabs: [
        {
          label: "🇯🇵 The line method",
          html: "<p>In Japan and China children are taught to multiply by drawing lines: the tens of one factor in one direction, the units in the other. You count the crossing points in each zone: they are hundreds, tens and units. Watch the animation.</p>",
          widget: "lineMultiply",
          options: { a: 23, b: 12 }
        },
        {
          label: "🇷🇺 The Russian peasant",
          html: "<p>A very old method, used by Russian peasants: you <b>halve</b> one number and <b>double</b> the other; you cross out the rows where the halved number is even, and add up the ones that are left. It works because, deep down, it is writing the number in base 2!</p>",
          widget: "russianPeasant",
          options: { a: 37, b: 24 }
        },
        {
          label: "🏺 The Egyptian method",
          html: "<p>The Egyptians, 4,000 years ago (Rhind papyrus), multiplied using only <b>doubling</b>: 1, 2, 4, 8, 16… times the number, and then added up the right rows. It is the distributive property: 13 × 21 = (8 + 4 + 1) × 21.</p>",
          widget: "egyptianMultiply",
          options: { a: 13, b: 21 }
        },
        {
          label: "🔢 Lattice (Fibonacci)",
          html: "<p>The lattice method (it is called \"gelosia\" in Italian because the grid looks like the window grilles called \"gelosie\") reached Europe with Fibonacci from the Arab world. Each box holds the product of two digits and you add up the diagonals.</p>",
          widget: "lattice",
          options: { a: 47, b: 36 }
        },
        {
          label: "🧊 The distributive property with cubes",
          html: "<p>A rectangle of 7 × 12 cubes can be split into a 7 × 10 rectangle and a 7 × 2 one: 70 + 14 = 84. That is exactly the distributive property, seen in 3D. Try changing the measures.</p>",
          scene: "blocks",
          options: { mode: "array", a: 7, b: 12 }
        }
      ]
    },
    {
      type: "widget",
      title: "Recognise the property",
      widget: "match",
      options: { pairs: [["5 + 9 = 9 + 5", "commutative"], ["(6 + 4) + 7 = 6 + (4 + 7)", "associative"], ["8 × 15 = 8 × 10 + 8 × 5", "distributive"], ["90 − 38 = 92 − 40", "invariance of subtraction"], ["600 ÷ 30 = 60 ÷ 3", "invariance of division"], ["a × 1 = a", "identity element"], ["a × 0 = 0", "absorbing element"]] },
      caption: "Connect each equality with the property it uses."
    },
    {
      type: "quiz",
      title: "Mini-quiz: expressions",
      questions: [
        { type: "num", q: "What is 5 + 3 × 4?", answer: 17, tol: 0, explain: "Multiplication first: 3 × 4 = 12; then 5 + 12 = 17." },
        { type: "num", q: "What is (5 + 3) × 4?", answer: 32, tol: 0, explain: "Brackets first: 8 × 4 = 32." },
        { type: "num", q: "Solve: [ 20 − (3 + 2) × 3 ] × 2", answer: 10, tol: 0, explain: "(3 + 2) = 5; 5 × 3 = 15; 20 − 15 = 5; 5 × 2 = 10." },
        { type: "mc", q: "In 48 ÷ 6 × 2 what is the correct result?", options: ["4", "16", "8", "96"], answer: 1, explain: "Multiplications and divisions are done from left to right: 48 ÷ 6 = 8; 8 × 2 = 16." }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: why the operations work this way",
      nodes: [
        { id: "contare", label: "Counting", x: 50, y: 5, color: "#64748b", html: "Matching a number to each object: 1, 2, 3…", why: "The Ishango bone (Congo, about 20,000 years ago) has notches that may have been used for counting: the need to count is very ancient." },
        { id: "naturali", label: "The set ℕ", x: 50, y: 20, color: "#2563eb", html: "0, 1, 2, 3… ordered, infinite, discrete.", why: "Giuseppe Peano, a mathematician from Cuneo, in 1889 described ℕ with five axioms: there is a 0, every number has a successor, different numbers have different successors, 0 is not the successor of anything, and the principle of induction holds." },
        { id: "posizionale", label: "Place-value system", x: 15, y: 34, color: "#0ea5e9", html: "10 digits, the value depends on the position.", why: "We use base 10 probably because we have 10 fingers. The Indian zero (Brahmagupta, 628) made the system possible; Fibonacci brought it to Europe in 1202." },
        { id: "addizione", label: "Addition", x: 35, y: 42, color: "#16a34a", html: "Putting quantities together; identity element 0.", why: "Peano defines it with the \"successor\": a + 1 is the successor of a, a + 2 the successor of the successor… From this come the commutative and associative properties." },
        { id: "moltiplicazione", label: "Multiplication", x: 65, y: 42, color: "#ea580c", html: "Repeated addition; identity element 1, absorbing element 0.", why: "3 × 4 = 4 + 4 + 4. Drawn as a rectangle of 3 rows and 4 columns, you can see that turning it round (4 × 3) doesn't change the number of squares: that is the commutative property." },
        { id: "inverse", label: "Subtraction and division", x: 85, y: 30, color: "#dc2626", html: "Inverse operations; not always possible in ℕ.", why: "To make subtraction always possible mathematicians invented negative numbers (ℤ); for division, fractions (ℚ)." },
        { id: "distributiva", label: "Distributive", x: 50, y: 62, color: "#9333ea", html: "a × (b + c) = a × b + a × c.", why: "A rectangle with sides a and (b + c) is split into two rectangles a × b and a × c. It is the basis of all the column multiplication algorithms." },
        { id: "invariantive", label: "Invariance properties", x: 85, y: 62, color: "#db2777", html: "Subtraction: + or − the same number; division: × or ÷ the same number.", why: "Subtraction: if two people each get a year older, their age difference doesn't change. Division: it is the same principle as equivalent fractions." },
        { id: "espressioni", label: "Expressions", x: 30, y: 84, color: "#f59e0b", html: "Brackets, then × and ÷, then + and −.", why: "It is a convention shared by mathematicians (set between the 1600s and the 1800s) so that everyone gets the same result; multiplication \"binds tighter\" because it is a shortened addition." },
        { id: "calcolomentale", label: "Quick calculation", x: 70, y: 86, color: "#0f766e", html: "Properties used to calculate in your head.", why: "The methods from other countries (Japanese lines, Russian peasant, Egyptian, lattice) are all different ways of applying the distributive property." }
      ],
      edges: [["contare", "naturali", "gives rise to"], ["naturali", "posizionale", "is written with"], ["naturali", "addizione", "operation"], ["addizione", "moltiplicazione", "repeated"], ["addizione", "inverse", "inverse"], ["moltiplicazione", "inverse", "inverse"], ["moltiplicazione", "distributiva", "over +"], ["inverse", "invariantive", "have"], ["distributiva", "calcolomentale", "makes possible"], ["addizione", "espressioni", "order"], ["moltiplicazione", "espressioni", "order"]]
    }
  ],
  glossary: [
    { t: "Natural numbers (ℕ)", d: "The numbers 0, 1, 2, 3… used for counting." },
    { t: "Place-value system", d: "A system in which the value of a digit depends on its position." },
    { t: "Addends / sum", d: "The terms and the result of addition." },
    { t: "Minuend, subtrahend, difference", d: "The terms and the result of subtraction." },
    { t: "Factors / product", d: "The terms and the result of multiplication." },
    { t: "Dividend, divisor, quotient", d: "The terms and the result of division." },
    { t: "Identity element", d: "A number that, in an operation, leaves the other term unchanged (0 for +, 1 for ×)." },
    { t: "Absorbing element", d: "Zero in multiplication: any number times 0 gives 0." },
    { t: "Distributive property", d: "a × (b + c) = a × b + a × c." },
    { t: "Expression", d: "A sequence of operations to be carried out in a set order." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "tf", q: "The set of natural numbers has a last element.", answer: false, explain: "Every number has a successor: ℕ is infinite." },
      { type: "mc", q: "In the number 3,582,104 the digit 8 is worth…", options: ["8", "8,000", "80,000", "800,000"], answer: 2, explain: "It is in the ten-thousands place: 80,000." },
      { type: "mc", q: "What is the result of a division called?", options: ["Product", "Difference", "Quotient", "Sum"], answer: 2, explain: "Dividend ÷ divisor = quotient." },
      { type: "num", q: "Calculate with the invariance property: 1,000 − 397 = ?", answer: 603, tol: 0, explain: "I add 3 to both: 1,003 − 400 = 603." },
      { type: "num", q: "Calculate with the distributive property: 15 × 99 = ?", answer: 1485, tol: 0, explain: "15 × 100 − 15 = 1500 − 15 = 1485." },
      { type: "mc", q: "Which equality shows the associative property?", options: ["3 + 7 = 7 + 3", "(2 × 5) × 9 = 2 × (5 × 9)", "4 × (3 + 2) = 12 + 8", "40 ÷ 8 = 20 ÷ 4"], answer: 1, explain: "The factors are grouped in a different way, the product doesn't change." },
      { type: "num", q: "Solve: 36 ÷ (2 + 7) × 5 − 4", answer: 16, tol: 0, explain: "(2 + 7) = 9; 36 ÷ 9 = 4; 4 × 5 = 20; 20 − 4 = 16." },
      { type: "num", q: "Solve: { 50 − [ 3 × (4 + 6) − 5 ] } ÷ 5", answer: 5, tol: 0, explain: "(4 + 6) = 10; 3 × 10 − 5 = 25; 50 − 25 = 25; 25 ÷ 5 = 5." },
      { type: "tf", q: "0 ÷ 8 = 0", answer: true, explain: "Indeed 0 × 8 = 0. On the other hand 8 ÷ 0 is impossible." },
      { type: "num", q: "What is the sum of all the numbers from 1 to 10 (Gauss's trick)?", answer: 55, tol: 0, explain: "5 pairs of 11: 5 × 11 = 55." },
      { type: "order", q: "Put the steps for solving an expression in order", items: ["Round brackets", "Square brackets", "Curly brackets", "Outside the brackets: × and ÷", "Outside the brackets: + and −"], explain: "From the inside to the outside; within each level × and ÷ first, then + and −." },
      { type: "mc", q: "Who brought the Indo-Arabic numerals to Europe with the Liber abaci (1202)?", options: ["Pythagoras", "Leonardo Fibonacci", "Galileo", "Euclid"], answer: 1, explain: "Leonardo of Pisa, known as Fibonacci." }
    ],
    gen: [["mult2", 1], ["div2", 1]]
  }
});
