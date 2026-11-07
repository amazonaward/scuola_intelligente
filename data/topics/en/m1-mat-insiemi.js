TOPIC('en', {
  id: "m1-mat-insiemi",
  title: "Sets",
  intro: "A <b>set</b> is a collection of objects chosen by a precise rule. With sets we can organise ideas, classify, solve problems and understand the language used by all of mathematics. Let's learn to <b>represent</b> them and to do the <b>operations</b>: intersection, union, difference, complement and the Cartesian product.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "What is a set?",
      html: `<p>In mathematics a <b>set</b> is a grouping of objects (called <b>elements</b>) for which it is possible to decide <b>without ambiguity</b> whether an object belongs to it or not.</p>
<ul>
<li>"The months of the year that begin with the letter M" → <b>it is a set</b>: March, May. No doubt.</li>
<li>"The even numbers smaller than 10" → <b>it is a set</b>: 0, 2, 4, 6, 8.</li>
<li>"The best films" → <b>it is not a set</b>: "best" depends on taste!</li>
</ul>
<p><b>Symbols</b>:</p>
<ul>
<li>sets are named with <b>capital</b> letters: A, B, C…; elements with lower-case letters or numbers;</li>
<li><b>∈</b> means "<b>belongs to</b>": 4 ∈ P (4 belongs to the set of even numbers);</li>
<li><b>∉</b> means "<b>does not belong to</b>": 7 ∉ P;</li>
<li>a set with no elements is the <b>empty set</b>: ∅ or { } (e.g. "the months with 32 days");</li>
<li>the number of elements is called the <b>cardinality</b>: |A| or n(A). A set can be <b>finite</b> (the letters of the alphabet) or <b>infinite</b> (the natural numbers).</li>
</ul>`
    },
    {
      type: "text",
      title: "Three ways to represent a set",
      html: `<p>The same set can be written in three ways. Let's take A = the vowels of the alphabet.</p>
<ol>
<li><b>Representation by listing</b> (or tabular): you write all the elements between curly brackets, separated by commas, <b>without repeats</b> and in any order:<br><b>A = { a, e, i, o, u }</b></li>
<li><b>Representation by property</b>: you write the property they all share:<br><b>A = { x | x is a vowel of the alphabet }</b><br>(read: "A is the set of the x such that x is a vowel"). It is very useful for infinite sets: P = { x | x is an even natural number }.</li>
<li><b>Graphical representation</b> (<b>Euler-Venn</b> diagram): you draw a closed line and put the elements inside it as dots. What is outside does not belong.</li>
</ol>
<p>Careful: { 1, 2, 3 } and { 3, 1, 2 } are the <b>same</b> set (the order doesn't matter), and { 1, 1, 2 } is simply written { 1, 2 }.</p>`
    },
    {
      type: "svg",
      title: "The Euler-Venn diagram",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<ellipse cx="180" cy="150" rx="140" ry="105" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="4"/>
<text x="60" y="55" font-size="28" font-weight="bold" fill="#1d4ed8">A</text>
<g font-size="22" font-weight="bold" fill="#1e3a8a">
<circle cx="120" cy="110" r="5"/><text x="132" y="117">a</text>
<circle cx="210" cy="100" r="5"/><text x="222" y="107">e</text>
<circle cx="140" cy="180" r="5"/><text x="152" y="187">i</text>
<circle cx="230" cy="170" r="5"/><text x="242" y="177">o</text>
<circle cx="185" cy="225" r="5"/><text x="197" y="232">u</text>
</g>
<g font-size="22" fill="#64748b">
<circle cx="380" cy="80" r="5"/><text x="392" y="87">b</text>
<circle cx="430" cy="160" r="5"/><text x="442" y="167">m</text>
<circle cx="370" cy="230" r="5"/><text x="382" y="237">z</text>
</g>
<text x="480" y="60" font-size="18" fill="#0f172a">a ∈ A</text>
<text x="480" y="95" font-size="18" fill="#0f172a">m ∉ A</text>
<text x="480" y="130" font-size="18" fill="#0f172a">|A| = 5</text>
<text x="330" y="285" font-size="15" fill="#475569">outside the line: they don't belong</text>
</svg>`,
      caption: "It is named in honour of Leonhard Euler (1707–1783) and John Venn (1834–1923), who used these drawings to reason in logic."
    },
    {
      type: "text",
      title: "Subsets and equality",
      html: `<p>A set B is a <b>subset</b> of A if <b>every</b> element of B is also an element of A. We write <b>B ⊆ A</b> (B is <b>included</b> in A).</p>
<p>Example: A = { 1, 2, 3, 4, 5, 6 }, B = { 2, 4, 6 } → B ⊆ A. In the diagram B is drawn <b>inside</b> A.</p>
<ul>
<li>If B ⊆ A and A has at least one more element, B is a <b>proper</b> subset: <b>B ⊂ A</b>.</li>
<li>Every set is a subset of itself, and the empty set is a subset of <b>any</b> set: these are called <b>improper</b> subsets.</li>
<li>Two sets are <b>equal</b> if they have exactly the same elements: A ⊆ B and B ⊆ A.</li>
</ul>
<p>The set of <b>all</b> the subsets of A is called the <b>power set</b> P(A). If A has n elements, there are <b>2ⁿ</b> subsets. For A = { x, y }: ∅, {x}, {y}, {x, y} → 4 = 2².</p>
<p>Careful with the symbols: <b>∈</b> links an <b>element</b> to a set (2 ∈ A); <b>⊆</b> links a <b>set</b> to a set ({2} ⊆ A).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: representing sets",
      questions: [
        { type: "tf", q: "\"The nice pupils in the class\" is a set in the mathematical sense.", answer: false, explain: "\"Nice\" is a personal judgement: you can't decide without ambiguity who belongs." },
        { type: "mc", q: "How do you write by listing the set of the letters of the word \"MAMMA\"?", options: ["{ M, A, M, M, A }", "{ M, A }", "{ MAMMA }", "{ M, M, M }"], answer: 1, explain: "Elements are not repeated: the different letters are only M and A." },
        { type: "mc", q: "If A = { 3, 5, 7 }, which notation is correct?", options: ["5 ⊆ A", "{5} ∈ A", "5 ∈ A", "4 ∈ A"], answer: 2, explain: "5 is an element: we use ∈. {5} is a set: we would write {5} ⊆ A." },
        { type: "num", q: "How many subsets does a set of 3 elements have?", answer: 8, tol: 0, explain: "2³ = 8, counting also the empty set and the set itself." }
      ]
    },
    {
      type: "text",
      title: "Operations with sets",
      html: `<p>Let's take A = { 1, 2, 3, 4, 5, 6 } (the numbers on a die) and B = { 2, 4, 6, 8 } (even numbers smaller than 10, without 0).</p>
<table>
<tr><th>Operation</th><th>Symbol</th><th>Meaning</th><th>Result</th></tr>
<tr><td><b>Intersection</b></td><td>A ∩ B</td><td>elements that are <b>in A and in B</b> (common)</td><td>{ 2, 4, 6 }</td></tr>
<tr><td><b>Union</b></td><td>A ∪ B</td><td>elements that are <b>in A or in B</b> (in at least one), taken only once</td><td>{ 1, 2, 3, 4, 5, 6, 8 }</td></tr>
<tr><td><b>Difference</b></td><td>A − B (or A \\ B)</td><td>elements of A that are <b>not</b> in B</td><td>{ 1, 3, 5 }</td></tr>
<tr><td><b>Difference</b></td><td>B − A</td><td>elements of B that are not in A</td><td>{ 8 }</td></tr>
</table>
<ul>
<li>If A ∩ B = ∅ the sets are called <b>disjoint</b> (e.g. even and odd numbers).</li>
<li>Union and intersection have the <b>commutative</b> property: A ∪ B = B ∪ A. Difference does <b>not</b>!</li>
<li>If B ⊆ U (U = the <b>universal</b> set, which contains everything), the difference U − B is called the <b>complement</b> of B in U: B̄ or C<sub>U</sub>B.</li>
<li><b>Counting rule</b>: |A ∪ B| = |A| + |B| − |A ∩ B|. The common elements are subtracted because otherwise we would count them twice. Here: 6 + 4 − 3 = 7 ✔️</li>
</ul>`
    },
    {
      type: "svg",
      title: "The operations drawn",
      svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#ffffff"/>
<defs>
<clipPath id="ia"><circle cx="80" cy="95" r="55"/></clipPath>

</defs>
<circle cx="80" cy="95" r="55" fill="#ffffff" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="130" cy="95" r="55" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<circle cx="130" cy="95" r="55" fill="#a855f7" clip-path="url(#ia)"/>
<circle cx="80" cy="95" r="55" fill="none" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="130" cy="95" r="55" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="105" y="185" font-size="22" font-weight="bold" text-anchor="middle" fill="#581c87">A ∩ B</text>
<circle cx="280" cy="95" r="55" fill="#a855f7" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="330" cy="95" r="55" fill="#a855f7" stroke="#dc2626" stroke-width="3"/>
<circle cx="280" cy="95" r="55" fill="none" stroke="#1d4ed8" stroke-width="3"/>
<text x="305" y="185" font-size="22" font-weight="bold" text-anchor="middle" fill="#581c87">A ∪ B</text>
<circle cx="470" cy="95" r="55" fill="#a855f7" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="520" cy="95" r="55" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<circle cx="470" cy="95" r="55" fill="none" stroke="#1d4ed8" stroke-width="3"/>
<text x="495" y="185" font-size="22" font-weight="bold" text-anchor="middle" fill="#581c87">A − B</text>
<g font-size="18" font-weight="bold"><text x="45" y="40" fill="#1d4ed8">A</text><text x="160" y="40" fill="#dc2626">B</text><text x="245" y="40" fill="#1d4ed8">A</text><text x="360" y="40" fill="#dc2626">B</text><text x="435" y="40" fill="#1d4ed8">A</text><text x="550" y="40" fill="#dc2626">B</text></g>
<text x="300" y="212" font-size="15" text-anchor="middle" fill="#475569">in purple: the result of the operation</text>
</svg>`,
      caption: "Intersection = the part in common (the \"and\"); union = everything (the \"or\"); difference = A with the part of B taken away."
    },
    {
      type: "example",
      title: "Practical example: sport in the class",
      html: `<p>In a class of <b>24</b> pupils, <b>14</b> play football, <b>9</b> do swimming and <b>5</b> do both sports. How many do neither?</p>
<ol>
<li>Draw two overlapping circles: F (football) and S (swimming), inside the rectangle U (the class).</li>
<li>In the intersection write <b>5</b>.</li>
<li>Football only: 14 − 5 = <b>9</b>. Swimming only: 9 − 5 = <b>4</b>.</li>
<li>At least one sport: |F ∪ S| = 14 + 9 − 5 = <b>18</b> (or 9 + 5 + 4).</li>
<li>No sport (complement): 24 − 18 = <b>6</b> pupils.</li>
</ol>
<p>Typical mistake: adding 14 + 9 = 23 and concluding that only 1 does no sport. But then the 5 who do both are counted <b>twice</b>!</p>`
    },
    {
      type: "text",
      title: "The Cartesian product",
      html: `<p>The <b>Cartesian product</b> A × B is the set of all the <b>ordered pairs</b> (a; b) with the first element taken from A and the second from B.</p>
<p>A = { pasta, rice }, B = { tomato, pesto, butter } →<br>A × B = { (pasta; tomato), (pasta; pesto), (pasta; butter), (rice; tomato), (rice; pesto), (rice; butter) }</p>
<ul>
<li>The number of pairs is <b>|A| × |B|</b> = 2 × 3 = 6. That is why it is called a "product"!</li>
<li>The pairs are <b>ordered</b>: (pasta; pesto) ≠ (pesto; pasta), so in general A × B ≠ B × A.</li>
<li>It is represented with a <b>two-way table</b>, with an <b>arrow diagram</b> or with a <b>Cartesian plane</b> (a grid of points).</li>
</ul>
<p>It is named in honour of <b>René Descartes</b> (1596–1650), the French philosopher who invented the Cartesian plane with the coordinates (x; y).</p>`
    },
    {
      type: "example",
      title: "Practical example: how many outfits?",
      html: `<p>You have <b>3 T-shirts</b> (red, blue, green) and <b>2 pairs of trousers</b> (jeans, tracksuit). How many different outfits can you make?</p>
<table>
<tr><th>×</th><th>jeans</th><th>tracksuit</th></tr>
<tr><td><b>red</b></td><td>(red; jeans)</td><td>(red; tracksuit)</td></tr>
<tr><td><b>blue</b></td><td>(blue; jeans)</td><td>(blue; tracksuit)</td></tr>
<tr><td><b>green</b></td><td>(green; jeans)</td><td>(green; tracksuit)</td></tr>
</table>
<p>3 × 2 = <b>6 outfits</b>. If you add 4 pairs of shoes: 6 × 4 = 24 combinations! It is the same reasoning used to count car number plates or possible passwords.</p>`
    },
    {
      type: "widget",
      title: "Where does each number go?",
      widget: "classify",
      options: {
        groups: ["Multiples of 2 only", "Multiples of 2 and of 3 (intersection)", "Multiples of 3 only", "Neither"],
        items: [["4", 0], ["6", 1], ["9", 2], ["12", 1], ["5", 3], ["8", 0], ["15", 2], ["18", 1], ["7", 3], ["10", 0], ["21", 2], ["1", 3]]
      },
      caption: "With U = {1…21}, A = multiples of 2, B = multiples of 3: the intersection A ∩ B is the multiples of 6!"
    },
    {
      type: "curiosity",
      title: "Cantor and infinities of different sizes",
      html: `<p>Set theory was created by the German mathematician <b>Georg Cantor</b> between <b>1874</b> and 1897. He discovered something that left the mathematicians of his time speechless: <b>some infinities are bigger than others</b>!</p>
<p>The natural numbers (0, 1, 2, 3…) and the even numbers are "equally many": you can pair them 0↔0, 1↔2, 2↔4, 3↔6… without any being left over. The points on a line, however, are "more" than the natural numbers: they cannot be counted one by one even in an infinite time. The mathematician David Hilbert said: "No one shall expel us from the paradise that Cantor has created for us."</p>`
    },
    {
      type: "curiosity",
      title: "The barber paradox",
      html: `<p>In <b>1901</b> the English philosopher <b>Bertrand Russell</b> discovered a problem in set theory, which he explained like this: in a village the barber shaves <b>all and only</b> the men who do <b>not</b> shave themselves. Who shaves the barber?</p>
<ul>
<li>If he shaves himself, then he shouldn't (he shaves only those who don't shave themselves).</li>
<li>If he doesn't shave himself, then he should!</li>
</ul>
<p>It is a <b>paradox</b>: such a barber cannot exist. To avoid similar problems mathematicians had to set stricter rules about what can be a set. That is why the definition says "without ambiguity"!</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand it",
      intro: "Sets are everywhere around you: try seeing them in these ways.",
      tabs: [
        {
          label: "🧺 With rope hoops",
          html: `<p>In schools in many countries (and in the Montessori method) sets are done in the gym: two rope circles on the floor that overlap a little. Everyone goes where they belong: in the red circle those who have a brother or sister, in the blue one those who have a pet. Those who have both stand in the shared part (the <b>intersection</b>); those who have neither stay <b>outside</b> (the complement).</p><p>Try it at home with two shoelaces and your toys: red cars and toys with wheels… where does the red car go?</p>`
        },
        {
          label: "🔍 Like a search engine",
          html: `<p>When you search the internet or filter the products in an online shop, you use operations between sets!</p><ul><li>"shoes <b>AND</b> red" → <b>intersection</b>: only the shoes that are also red;</li><li>"cats <b>OR</b> dogs" → <b>union</b>: all the pages that talk about at least one of the two;</li><li>"pizza <b>NOT</b> pineapple" → <b>difference</b>: the pages about pizza, minus those with pineapple.</li></ul><p>These operators are called <b>AND, OR, NOT</b> and come from <b>Boolean algebra</b> (George Boole, 1854). They are the basis of how computers work!</p>`
        },
        {
          label: "📊 The Carroll diagram",
          html: `<p>The writer of <i>Alice in Wonderland</i>, <b>Lewis Carroll</b>, was also a mathematician! He invented another way of drawing sets: a table. It is widely used in British schools.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#ffffff"/><rect x="150" y="50" width="420" height="190" fill="#f8fafc" stroke="#0f172a" stroke-width="3"/><line x1="360" y1="50" x2="360" y2="240" stroke="#0f172a" stroke-width="3"/><line x1="150" y1="145" x2="570" y2="145" stroke="#0f172a" stroke-width="3"/><g font-size="18" font-weight="bold" text-anchor="middle"><text x="255" y="38" fill="#1d4ed8">even</text><text x="465" y="38" fill="#1d4ed8">NOT even</text><text x="75" y="102" fill="#dc2626">multiples</text><text x="75" y="122" fill="#dc2626">of 3</text><text x="75" y="192" fill="#dc2626">NOT multiples</text><text x="75" y="212" fill="#dc2626">of 3</text></g><g font-size="24" text-anchor="middle" fill="#0f172a"><text x="255" y="105">6, 12, 18</text><text x="465" y="105">3, 9, 15</text><text x="255" y="200">2, 4, 8, 10</text><text x="465" y="200">1, 5, 7, 11</text></g><rect x="150" y="50" width="210" height="95" fill="#a855f7" fill-opacity="0.25"/></svg>`
        },
        {
          label: "🧊 The Cartesian product in 3D",
          html: `<p>The Cartesian product A × B can be "seen" as a <b>rectangle of cubes</b>: each row is an element of A, each column an element of B, and each cube is a pair. With 3 T-shirts and 4 pairs of trousers you get 3 × 4 = 12 cubes = 12 outfits. Change the numbers with the sliders!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "🧩 Match symbol and meaning",
          html: "<p>Connect each symbol with its meaning.</p>",
          widget: "match",
          options: { pairs: [["∈", "belongs to"], ["∉", "does not belong to"], ["∅", "empty set"], ["⊆", "is a subset of"], ["∩", "intersection"], ["∪", "union"], ["×", "Cartesian product"]] }
        },
        {
          "label": "🇫🇷 The French \"potatoes\"",
          "html": "<p>In <b>France</b> many teachers and students jokingly call Euler-Venn diagrams <b>\"les patates\"</b> (the potatoes), because they are drawn as roundish closed lines, not necessarily perfect circles. It is an important idea: <b>the shape doesn't matter</b>, only <b>who is inside and who is outside</b> counts.</p><p>Let's try. Universe U = numbers from 1 to 12. A = multiples of 2, B = multiples of 3.</p><ol><li>Draw two \"potatoes\" that <b>overlap</b> a little, inside a rectangle (the universe).</li><li>Always start from the <b>shared part</b>: which numbers are multiples of both 2 and 3? <b>6 and 12</b> → A ∩ B = {6, 12}.</li><li>Then the rest of A: 2, 4, 8, 10.</li><li>Then the rest of B: 3, 9.</li><li>Finally, <b>outside the potatoes</b> but inside the universe: 1, 5, 7, 11.</li></ol><p>Now read the drawing: A ∪ B = {2, 3, 4, 6, 8, 9, 10, 12} (everything that is in at least one potato); the <b>complement</b> of A ∪ B = {1, 5, 7, 11}. You have also discovered a rule: the common multiples of 2 and 3 are the <b>multiples of 6</b>!</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><rect x=\"20\" y=\"20\" width=\"560\" height=\"260\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"32\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">U = {1, 2, …, 12}</text><path d=\"M120,150 C110,70 230,50 300,90 C350,120 360,200 300,230 C230,265 130,230 120,150 Z\" fill=\"#bfdbfe\" fill-opacity=\"0.7\" stroke=\"#1d4ed8\" stroke-width=\"3\"/><path d=\"M260,140 C250,80 360,55 430,85 C500,115 490,215 420,235 C340,258 270,210 260,140 Z\" fill=\"#fbcfe8\" fill-opacity=\"0.7\" stroke=\"#be185d\" stroke-width=\"3\"/><text x=\"150\" y=\"80\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">A: multiples of 2</text><text x=\"380\" y=\"72\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#be185d\" font-weight=\"bold\">B: multiples of 3</text><text x=\"160\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">2</text><text x=\"200\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">4</text><text x=\"170\" y=\"190\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">8</text><text x=\"220\" y=\"210\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">10</text><text x=\"282\" y=\"150\" font-size=\"22\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">6</text><text x=\"286\" y=\"190\" font-size=\"22\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">12</text><text x=\"380\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">3</text><text x=\"410\" y=\"195\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">9</text><text x=\"60\" y=\"260\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">1</text><text x=\"510\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">5</text><text x=\"530\" y=\"250\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">7</text><text x=\"60\" y=\"110\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">11</text></svg>"
        },
        {
          "label": "🇺🇸 The American \"New Math\": counting by pairing",
          "html": "<p>In the 1960s, in the <b>United States</b>, a big school reform called the <b>\"New Math\"</b> brought sets into primary schools. One of the key ideas, taken from Cantor, was this: <b>two sets have the same number of elements if you can pair them up one to one</b>, with none left over (this is called a <b>one-to-one correspondence</b>). You don't even need to know how to count!</p><ol><li>A = {🍎, 🍐, 🍌} and B = {a, b, c}. Pair them: 🍎↔a, 🍐↔b, 🍌↔c. None is left alone → A and B have the <b>same number</b> of elements (3).</li><li>C = {🐶, 🐱, 🐭, 🐰} and B = {a, b, c}: after the pairing one animal is left over → C has <b>more</b> elements than B.</li><li>Now the surprise. N = {1, 2, 3, 4, …} and P = {2, 4, 6, 8, …}. Pair each number with its double: 1↔2, 2↔4, 3↔6, 4↔8… None is ever left over!</li></ol><p>So the even numbers are \"as many as\" all the natural numbers, even though P is only a part of N. With <b>infinite</b> sets things happen that are impossible with finite ones: this is exactly what Cantor discovered.</p><p>🎯 Try it: how do you pair N with the set of the multiples of 10?</p>"
        }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: operations",
      questions: [
        { type: "mc", q: "A = { 1, 3, 5, 7 }, B = { 3, 4, 5 }. What is A ∩ B?", options: ["{ 1, 3, 4, 5, 7 }", "{ 3, 5 }", "{ 1, 7 }", "{ 4 }"], answer: 1, explain: "The common elements are 3 and 5." },
        { type: "mc", q: "With the same sets, what is A − B?", options: ["{ 1, 7 }", "{ 4 }", "{ 3, 5 }", "∅"], answer: 0, explain: "You remove from A the elements that are also in B: 1 and 7 remain." },
        { type: "num", q: "|A| = 10, |B| = 7, |A ∩ B| = 3. What is |A ∪ B|?", answer: 14, tol: 0, explain: "10 + 7 − 3 = 14: the common elements are counted only once." },
        { type: "tf", q: "A × B and B × A are always the same set.", answer: false, explain: "The pairs are ordered: (1; a) is different from (a; 1). They do, however, have the same number of elements." }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: why sets are the language of mathematics",
      nodes: [
        { id: "classificare", label: "Classifying", x: 50, y: 6, color: "#64748b", html: "Grouping objects according to a feature.", why: "It is one of the first activities of thought: already Aristotle (4th century BC) classified animals and concepts into genera and species." },
        { id: "insieme", label: "Set", x: 50, y: 22, color: "#2563eb", html: "A well-defined collection of elements.", why: "Georg Cantor (1874) made it a rigorous mathematical concept: \"a set is a collection of distinct objects, thought of as a whole\"." },
        { id: "appartenenza", label: "Membership ∈", x: 15, y: 36, color: "#0ea5e9", html: "An element belongs or does not belong: no middle way.", why: "It is the logical principle of the \"excluded middle\" (Aristotle): a thing either is or is not. The symbol ∈ comes from the Greek letter epsilon, the initial of \"is\", chosen by Giuseppe Peano in 1889." },
        { id: "rappresentazioni", label: "Representations", x: 85, y: 36, color: "#16a34a", html: "Listing, property, Euler-Venn diagram.", why: "Euler used circles in the \"Letters to a German Princess\" (1768); John Venn refined them in 1880 for logic." },
        { id: "sottoinsiemi", label: "Subsets", x: 25, y: 56, color: "#9333ea", html: "B ⊆ A if every element of B is in A.", why: "The subsets of a set of n elements are 2ⁿ: for each element you decide \"in\" or \"out\", 2 choices repeated n times." },
        { id: "operazioni", label: "Operations ∩ ∪ −", x: 50, y: 56, color: "#ea580c", html: "Intersection, union, difference, complement.", why: "They correspond to the words \"and\", \"or\", \"not\" of logic. George Boole (1854) created an algebra of logic that today makes computer circuits work." },
        { id: "cartesiano", label: "Cartesian product", x: 78, y: 56, color: "#dc2626", html: "All the ordered pairs (a; b).", why: "It comes from Descartes's idea (1637) of describing every point of the plane with a pair of numbers: the coordinates." },
        { id: "contare", label: "Counting: |A ∪ B|", x: 35, y: 80, color: "#f59e0b", html: "|A ∪ B| = |A| + |B| − |A ∩ B|.", why: "It is the \"inclusion-exclusion principle\": the intersection is subtracted because it was counted twice." },
        { id: "fondamenti", label: "Foundations of mathematics", x: 72, y: 82, color: "#0f766e", html: "Numbers, functions, geometry are defined using sets.", why: "After Russell's paradox (1901), Zermelo (1908) and Fraenkel set out the axioms of set theory (ZF), the basis of almost all modern mathematics." }
      ],
      edges: [["classificare", "insieme", "is formalised as"], ["insieme", "appartenenza", "is based on"], ["insieme", "rappresentazioni", "is written with"], ["insieme", "sottoinsiemi", "contains"], ["insieme", "operazioni", "is combined with"], ["insieme", "cartesiano", "is multiplied"], ["operazioni", "contare", "makes possible"], ["sottoinsiemi", "fondamenti", "structure"], ["operazioni", "fondamenti", "logic"], ["cartesiano", "fondamenti", "coordinates"]]
    }
  ],
  glossary: [
    { t: "Set", d: "A grouping of objects for which you can say without ambiguity whether an object belongs to it." },
    { t: "Element", d: "Each of the objects that make up a set." },
    { t: "Empty set", d: "A set with no elements: ∅." },
    { t: "Cardinality", d: "The number of elements of a set." },
    { t: "Subset", d: "A set whose elements all belong to another set." },
    { t: "Intersection", d: "The set of the elements common to two sets: A ∩ B." },
    { t: "Union", d: "The set of the elements that belong to at least one of the two sets: A ∪ B." },
    { t: "Difference", d: "The elements of the first set that do not belong to the second: A − B." },
    { t: "Complement", d: "The elements of the universe that do not belong to a set." },
    { t: "Cartesian product", d: "The set of all ordered pairs (a; b) with a ∈ A and b ∈ B." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which of these is a set in the mathematical sense?", options: ["Interesting books", "The odd numbers smaller than 10", "The most beautiful songs", "Tall boys"], answer: 1, explain: "{ 1, 3, 5, 7, 9 }: it can be decided without doubt who belongs." },
      { type: "num", q: "How many elements does the set of the letters of the word \"MATEMATICA\" have?", answer: 6, tol: 0, explain: "{ M, A, T, E, I, C }: 6 different letters." },
      { type: "mc", q: "The set of the months with 32 days is…", options: ["infinite", "empty", "made of one element", "not a set"], answer: 1, explain: "No month has 32 days: it is the empty set ∅." },
      { type: "mc", q: "A = { a, b, c, d }, B = { c, d, e }. A ∪ B = ?", options: ["{ c, d }", "{ a, b }", "{ a, b, c, d, e }", "{ a, b, c, d, c, d, e }"], answer: 2, explain: "All the elements, each one only once." },
      { type: "tf", q: "The empty set is a subset of every set.", answer: true, explain: "It has no elements that could be \"outside\": it is an improper subset of any set." },
      { type: "mc", q: "Two sets are called disjoint when…", options: ["they are equal", "their intersection is empty", "one is a subset of the other", "they have the same number of elements"], answer: 1, explain: "They have no elements in common: A ∩ B = ∅." },
      { type: "num", q: "In a class of 25 pupils, 15 study extra English, 12 extra French and 7 both. How many study no extra language?", answer: 5, tol: 0, explain: "At least one: 15 + 12 − 7 = 20. None: 25 − 20 = 5." },
      { type: "num", q: "A has 4 elements and B has 5. How many pairs does A × B have?", answer: 20, tol: 0, explain: "|A × B| = 4 × 5 = 20." },
      { type: "text", q: "What is the diagram with closed lines used to represent sets called? (the surnames of the two mathematicians)", answer: ["euler-venn", "euler venn", "venn", "euler", "euler-venn diagram", "venn-euler", "venn euler", "venn diagram"], explain: "The Euler-Venn diagram." },
      { type: "mc", q: "U = { 1, 2, 3, 4, 5, 6 }, B = { 2, 3 }. The complement of B in U is…", options: ["{ 2, 3 }", "{ 1, 4, 5, 6 }", "∅", "{ 1, 2, 3, 4, 5, 6 }"], answer: 1, explain: "The elements of U that are not in B." },
      { type: "order", q: "Put the steps for solving a problem with the Venn diagram in order", items: ["Draw the universe and the overlapping sets", "Write the number of common elements", "Work out the \"A only\" and \"B only\" parts", "Work out what is left outside"], explain: "You always start from the intersection, then the exclusive parts, finally the complement." },
      { type: "mc", q: "Who founded set theory?", options: ["Euclid", "Georg Cantor", "Pythagoras", "Isaac Newton"], answer: 1, explain: "Georg Cantor, starting from 1874." }
    ]
  }
});
