TOPIC('en', {
  id: "l1-mat-insiemi-logica",
  title: "Sets and logic",
  intro: "\"All cats are mammals; Felix is a cat; therefore Felix is a mammal.\" Reasoning correctly is not a mysterious art: it has precise rules. In this lesson we learn the language mathematics uses to organise the world, <b>sets</b>, and the one it uses to argue, <b>logic</b>: propositions, connectives, implications and quantifiers. These are tools you will use throughout upper secondary maths, and also in law, computer science and everyday life (for example, to take apart a faulty argument).",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "What a set is",
      html: `<p>A <b>set</b> is a well-defined collection of objects, called <b>elements</b>: given an object, it must be possible to decide without ambiguity whether or not it belongs to the set. \"The even numbers less than 10\" is a set; \"good films\" is not, because \"good\" is subjective.</p>
<p>Notation: sets are written with capital letters (A, B, C…), elements with lower-case letters. We write:</p>
<ul>
<li><b>a ∈ A</b>: a <b>belongs to</b> A (is an element of A); <b>a ∉ A</b>: it does not belong.</li>
<li><b>∅</b>: the <b>empty set</b>, with no elements (for example, the real solutions of x² = −1).</li>
<li>The number sets: ℕ (natural numbers), ℤ (integers), ℚ (rational numbers), ℝ (real numbers).</li>
</ul>
<p>There are three ways to <b>define</b> a set:</p>
<ol>
<li><b>Listing</b> (roster notation): A = {2, 4, 6, 8}. Order does not matter and elements are not repeated: {1, 2, 3} = {3, 2, 1} = {1, 1, 2, 3}.</li>
<li><b>Defining property</b> (set-builder notation): A = {x ∈ ℕ | x is even and x &lt; 10}. Read \"x such that\".</li>
<li><b>Euler-Venn diagram</b>: a closed curve enclosing the elements. It was used by Leonhard Euler (1768) and made systematic by John Venn (1880).</li>
</ol>
<p>A set is <b>finite</b> if it has a finite number of elements (its <b>cardinality</b> |A| is that number), <b>infinite</b> otherwise (ℕ, ℤ, ℝ…). Georg Cantor (1845-1918) founded set theory and showed that even infinities can have different \"sizes\": ℕ and ℝ are both infinite, but they are not the same size.</p>`
    },
    {
      type: "text",
      title: "Subsets",
      html: `<p>B is a <b>subset</b> of A (B ⊆ A) if <b>every</b> element of B also belongs to A. If in addition B ≠ A, B is a <b>proper</b> subset (B ⊂ A).</p>
<p>Example: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Also {2, 4} ⊂ {1, 2, 3, 4}.</p>
<ul>
<li>The empty set is a subset of <b>every</b> set (∅ ⊆ A: there are no elements that break the condition).</li>
<li>Every set is a subset of itself (A ⊆ A).</li>
<li>Two sets are <b>equal</b> if A ⊆ B and B ⊆ A, that is, if they have the same elements.</li>
</ul>
<p>The set of <b>all subsets</b> of A is called the <b>power set</b> 𝒫(A). If A has n elements, 𝒫(A) has <b>2<sup>n</sup></b>: for each element we choose \"in\" or \"out\". For A = {a, b, c} there are 2³ = 8 subsets: ∅, {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, {a, b, c}.</p>
<p>Be careful not to confuse ∈ and ⊂: 2 ∈ {1, 2, 3} (2 is an <i>element</i>), {2} ⊂ {1, 2, 3} (the set {2} is a <i>subset</i>).</p>`
    },
    {
      type: "svg",
      title: "Set operations with Venn diagrams",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="10" y="20" width="570" height="270" fill="none" stroke="#475569" stroke-width="2"/>
<text x="22" y="46" font-size="16" fill="#475569" font-weight="bold">U (universal set)</text>
<circle cx="230" cy="165" r="95" fill="#3b82f6" fill-opacity="0.35" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="350" cy="165" r="95" fill="#f59e0b" fill-opacity="0.35" stroke="#b45309" stroke-width="3"/>
<text x="165" y="170" font-size="22" fill="#1e3a8a" font-weight="bold">A \\ B</text>
<text x="290" y="170" font-size="20" fill="#1f2937" font-weight="bold">A ∩ B</text>
<text x="370" y="170" font-size="22" fill="#78350f" font-weight="bold">B \\ A</text>
<text x="190" y="80" font-size="22" fill="#1d4ed8" font-weight="bold">A</text>
<text x="380" y="80" font-size="22" fill="#b45309" font-weight="bold">B</text>
<text x="480" y="130" font-size="16" fill="#1f2937">A ∪ B: all the coloured area</text>
<text x="480" y="160" font-size="16" fill="#1f2937">A ∩ B: the common part</text>
<text x="480" y="190" font-size="16" fill="#1f2937">A \\ B: only in A</text>
<text x="480" y="220" font-size="16" fill="#1f2937">complement: outside A</text>
</svg>`,
      caption: "Union (everything in A or in B), intersection (what is in both), difference (in A but not in B) and complement (in the universal set but not in A)."
    },
    {
      type: "text",
      title: "Set operations",
      html: `<p>Let A and B be two sets contained in a <b>universal set</b> U.</p>
<ul>
<li><b>Union</b> A ∪ B = {x | x ∈ A <b>or</b> x ∈ B} (the \"or\" is <i>inclusive</i>: it is fine if x is in both).</li>
<li><b>Intersection</b> A ∩ B = {x | x ∈ A <b>and</b> x ∈ B}. If A ∩ B = ∅ the two sets are <b>disjoint</b>.</li>
<li><b>Difference</b> A \\ B = {x | x ∈ A and x ∉ B}.</li>
<li><b>Complement</b> of A with respect to U: Ā = U \\ A = {x ∈ U | x ∉ A}.</li>
<li><b>Cartesian product</b> A × B = {(a, b) | a ∈ A, b ∈ B}: the set of <i>ordered</i> pairs. If |A| = m and |B| = n, then |A × B| = m·n. It is named after René Descartes, who, with the Cartesian plane, associated a pair of numbers with every point (ℝ × ℝ).</li>
</ul>
<p>Useful properties:</p>
<ul>
<li>commutative and associative for ∪ and ∩; distributive: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C);</li>
<li><b>De Morgan's laws</b>: the complement of A ∪ B is Ā ∩ B̄; the complement of A ∩ B is Ā ∪ B̄ (Augustus De Morgan, 1806-1871);</li>
<li><b>Inclusion-exclusion formula</b> for finite sets: |A ∪ B| = |A| + |B| − |A ∩ B| (we subtract the intersection, otherwise it would be counted twice).</li>
</ul>
<p>A <b>partition</b> of A is a family of non-empty, pairwise disjoint subsets whose union is A: for example, ℤ is partitioned into even and odd numbers.</p>`
    },
    {
      type: "example",
      title: "Example: the activities survey",
      html: `<p>In a class of 28 students, 15 play a sport (S), 12 play an instrument (M) and 6 do both. How many do neither?</p>
<ol>
<li>|S ∪ M| = |S| + |M| − |S ∩ M| = 15 + 12 − 6 = <b>21</b>.</li>
<li>Students who do neither: 28 − 21 = <b>7</b>.</li>
<li>Sport only: 15 − 6 = 9; music only: 12 − 6 = 6.</li>
</ol>
<p>Check: 9 + 6 + 6 + 7 = 28 ✔. If we had simply added 15 + 12 = 27, we would have counted the 6 who do both twice: this is the classic mistake in surveys.</p>`
    },
    {
      type: "widget",
      title: "Which region of the diagram?",
      widget: "classify",
      options: { groups: ["Only A (multiples of 2)", "Only B (multiples of 3)", "In both A and B", "In neither A nor B"], items: [
        ["1", 3], ["2", 0], ["3", 1], ["4", 0], ["5", 3], ["6", 2],
        ["8", 0], ["9", 1], ["10", 0], ["11", 3], ["12", 2], ["7", 3]
      ] },
      caption: "With A = multiples of 2 and B = multiples of 3 between 1 and 12: the intersection contains the multiples of 6."
    },
    {
      type: "quiz",
      title: "Mini-quiz: sets",
      questions: [
        { type: "num", q: "A = {1, 2, 3, 4} and B = {3, 4, 5}. How many elements does A ∪ B have?", answer: 5, explain: "A ∪ B = {1, 2, 3, 4, 5}: 5 elements (4 + 3 − 2 = 5)." },
        { type: "num", q: "How many subsets does a set with 4 elements have?", answer: 16, explain: "2⁴ = 16, including ∅ and the set itself." },
        { type: "mc", q: "Which statement is correct?", options: ["2 ⊂ {1, 2, 3}", "{2} ⊂ {1, 2, 3}", "{2} ∈ {1, 2, 3}"], answer: 1, explain: "{2} is a set contained in {1, 2, 3}, so it is a subset; 2 is an element." }
      ]
    },
    {
      type: "text",
      title: "Propositions and logical connectives",
      html: `<p>A <b>proposition</b> (statement) is a sentence that can be said without ambiguity to be <b>true</b> (T) or <b>false</b> (F). \"7 is a prime number\" (T) and \"8 is odd\" (F) are propositions. \"What time is it?\" and \"x + 1 = 5\" (as long as we do not know what x is) are not. The latter is a <b>predicate</b> (open sentence): it becomes a proposition when we substitute a value for x or use a quantifier.</p>
<p><b>Connectives</b> are used to build compound propositions, whose truth value depends only on those of their components:</p>
<table>
<tr><th>Name</th><th>Symbol</th><th>Read as</th><th>True when…</th></tr>
<tr><td>Negation</td><td>¬p</td><td>not p</td><td>p is false</td></tr>
<tr><td>Conjunction</td><td>p ∧ q</td><td>p and q</td><td><b>both</b> are true</td></tr>
<tr><td>Disjunction</td><td>p ∨ q</td><td>p or q (inclusive)</td><td>at least one is true</td></tr>
<tr><td>Implication (conditional)</td><td>p ⇒ q</td><td>if p then q</td><td>false only if p is T and q is F</td></tr>
<tr><td>Double implication (biconditional)</td><td>p ⇔ q</td><td>p if and only if q</td><td>p and q have the same value</td></tr>
</table>
<p><b>Truth table</b> for p ⇒ q:</p>
<table>
<tr><th>p</th><th>q</th><th>p ⇒ q</th></tr>
<tr><td>T</td><td>T</td><td>T</td></tr>
<tr><td>T</td><td>F</td><td><b>F</b></td></tr>
<tr><td>F</td><td>T</td><td>T</td></tr>
<tr><td>F</td><td>F</td><td>T</td></tr>
</table>
<p>Implication can be surprising: if p is false, \"p ⇒ q\" is true <i>whatever</i> q is. Think of a promise: \"if it rains tomorrow, I'll bring you an umbrella\". If it does not rain, I have not broken the promise in any case. The only way to prove me wrong is for it to rain and for me not to bring it.</p>`
    },
    {
      type: "example",
      title: "Example: converse, contrapositive and negation",
      html: `<p>Let's start from: <b>p ⇒ q</b> = \"if a number is a multiple of 6, then it is even\" (true).</p>
<ul>
<li><b>Converse</b>: q ⇒ p = \"if it is even, then it is a multiple of 6\" → <b>false</b> (4 is even but not a multiple of 6).</li>
<li><b>Contrapositive</b>: ¬q ⇒ ¬p = \"if a number is not even (odd), then it is not a multiple of 6\" → <b>true</b>. The contrapositive is <b>always equivalent</b> to the original implication.</li>
<li><b>Negation</b> of the implication: p ∧ ¬q = \"it is a multiple of 6 and it is not even\" → false, as it should be.</li>
</ul>
<p>This explains two different ways of speaking:</p>
<ul>
<li>p is a <b>sufficient</b> condition for q (p ⇒ q): being a multiple of 6 is enough to be even;</li>
<li>q is a <b>necessary</b> condition for p: if it is not even, it cannot be a multiple of 6.</li>
</ul>
<p>If both implications hold (p ⇔ q), p is a necessary and sufficient condition for q. Example: a number is divisible by 6 if and only if it is divisible by 2 and by 3.</p>`
    },
    {
      type: "text",
      title: "Tautologies, contradictions and reasoning",
      html: `<p>A compound proposition is a <b>tautology</b> if it is true for every truth value of its components (p ∨ ¬p: \"either it rains or it doesn't\"), a <b>contradiction</b> if it is always false (p ∧ ¬p). Two propositions are <b>logically equivalent</b> if they have the same truth table. Important equivalences:</p>
<ul>
<li>p ⇒ q ≡ ¬q ⇒ ¬p (contraposition);</li>
<li>p ⇒ q ≡ ¬p ∨ q;</li>
<li><b>De Morgan</b>: ¬(p ∧ q) ≡ ¬p ∨ ¬q and ¬(p ∨ q) ≡ ¬p ∧ ¬q. Example: the negation of \"he is tall and blond\" is \"he is not tall <i>or</i> he is not blond\".</li>
</ul>
<p><b>Proof by contradiction</b> is based on contraposition: to prove p we assume ¬p and reach a contradiction. This is how the ancient Greeks proved that √2 is not rational and that there are infinitely many prime numbers.</p>
<p>Aristotle's <b>syllogisms</b> (4th century BC) are the first system of formal logic: \"All men are mortal; Socrates is a man; therefore Socrates is mortal\". In terms of sets: if U ⊆ M and s ∈ U, then s ∈ M. Logic and sets are two sides of the same coin: ∧ corresponds to ∩, ∨ to ∪, ¬ to the complement, ⇒ to ⊆.</p>`
    },
    {
      type: "text",
      title: "Predicates and quantifiers",
      html: `<p>A <b>predicate</b> P(x) is a sentence with a variable that becomes true or false when x is fixed. <b>Quantifiers</b> turn a predicate into a proposition:</p>
<ul>
<li><b>∀x P(x)</b>: \"for every x, P(x) holds\" (universal quantifier);</li>
<li><b>∃x P(x)</b>: \"there exists at least one x for which P(x) holds\" (existential quantifier);</li>
<li><b>∃!x P(x)</b>: \"there exists exactly one x\".</li>
</ul>
<p>Examples in ℝ: ∀x, x² ≥ 0 (true); ∃x, x² = 4 (true: x = 2 or −2); ∃x, x² = −1 (false in ℝ); ∀x, x &gt; 3 (false: the counterexample x = 0 is enough).</p>
<p><b>How to negate them</b> (very important):</p>
<ul>
<li>¬(∀x P(x)) ≡ ∃x ¬P(x): to negate \"all\", <b>one counterexample</b> is enough. The negation of \"all swans are white\" is \"there is at least one swan that is not white\" (not \"all swans are black\"!). Black swans were actually discovered by Europeans in Australia at the end of the 17th century.</li>
<li>¬(∃x P(x)) ≡ ∀x ¬P(x): to negate \"there exists\", you must show that <b>no</b> element has the property.</li>
</ul>
<p>A single numerical check never proves a universal statement (\"it works for 1, 2, 3, 4… so it works for all\" is not a proof), while one counterexample is enough to disprove it.</p>`
    },
    {
      type: "curiosity",
      title: "Russell's paradox",
      html: `<p>In 1901 the philosopher and mathematician Bertrand Russell found a problem in \"naive\" set theory. Consider \"the set R of all sets that do <b>not</b> contain themselves\". Does R contain itself? If yes, by definition it should not contain itself; if no, it should contain itself. Contradiction! A fun version: \"In a village the barber shaves all and only the men who do not shave themselves. Who shaves the barber?\". The paradox forced mathematicians to rebuild the theory with stricter rules (the Zermelo-Fraenkel axioms). It shows that even mathematics needs care when talking about \"sets of all sets\".</p>`
    },
    {
      type: "curiosity",
      title: "Boole, logic and your smartphone",
      html: `<p>In 1854 the English mathematician George Boole published <i>The Laws of Thought</i>, in which he showed that logic could be handled with an algebra: today called <b>Boolean algebra</b>, it uses only two values (1 = true, 0 = false) and the operations AND, OR, NOT. In 1937 Claude Shannon realised that electrical switches behave exactly like logical connectives: two switches <b>in series</b> are an AND (current flows only if both are closed), two <b>in parallel</b> are an OR. All digital circuits, from calculators to computer processors, are based on this idea.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand logic",
      intro: "Truth tables are precise but abstract: here are other images to help you recognise the connectives.",
      tabs: [
        {
          label: "💡 Switches",
          html: `<p>Think of a light bulb and two switches p and q (closed = true).</p>
<ul>
<li><b>p ∧ q</b>: switches <b>in series</b>. The bulb lights up only if both are closed.</li>
<li><b>p ∨ q</b>: switches <b>in parallel</b>. One closed switch is enough.</li>
<li><b>¬p</b>: an \"inverted\" switch, on when p is off.</li>
</ul>
<p>In practice, every logical formula is a circuit, and vice versa. Try it by drawing the circuits for ¬(p ∧ q) and for ¬p ∨ ¬q: they behave the same way (De Morgan!).</p>`
        },
        {
          label: "🧮 With sets",
          html: `<p>To every predicate P(x) we associate the set of elements that satisfy it, A = {x | P(x)}. Then: \"P and Q\" corresponds to the intersection A ∩ B; \"P or Q\" to the union A ∪ B; \"not P\" to the complement Ā; \"P ⇒ Q\" to A ⊆ B. For example, \"all squares are rhombuses\" means that the set of squares is contained in the set of rhombuses: you can see it by drawing one circle inside another.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<ellipse cx="300" cy="130" rx="230" ry="105" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<ellipse cx="300" cy="140" rx="130" ry="65" fill="#86efac" stroke="#166534" stroke-width="3"/>
<text x="300" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">Rhombuses</text>
<text x="300" y="145" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">Squares</text>
<text x="300" y="235" font-size="16" text-anchor="middle" fill="#1f2937">Square ⇒ rhombus, but rhombus ⇒ square is false</text>
</svg>`
        },
        {
          label: "⚖️ The promise",
          html: `<p>To understand why \"p ⇒ q\" is true when p is false, think of a promise: \"if I get top marks in the exam, I'll give you a video game\". When do I <b>break</b> the promise? Only if I get top marks and the present does not arrive. If I get a lower mark, the promise is still true, whatever I do: it has not been proved wrong. Logic considers an implication false only if we find the case \"true premise, false conclusion\".</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of sets and logic",
      nodes: [
        { id: "insieme", label: "Set", x: 25, y: 6, color: "#2563eb", html: "A well-defined collection of elements.", why: "Cantor (1870-1890) introduced sets to study infinity. Today they are the common language of all mathematics: numbers, functions and figures are sets with a structure." },
        { id: "operazioni", label: "Union, intersection, difference", x: 12, y: 32, color: "#16a34a", html: "They build new sets from known ones.", why: "They follow the laws of Boolean algebra: commutative, associative, distributive and De Morgan. Boole (1854) discovered them while studying logic." },
        { id: "cartesiano", label: "Cartesian product", x: 12, y: 60, color: "#f59e0b", html: "Ordered pairs (a, b).", why: "Descartes (1637) associated a pair of numbers with every point of the plane. Functions and relations are subsets of a Cartesian product." },
        { id: "proposizione", label: "Proposition", x: 72, y: 6, color: "#9333ea", html: "A sentence that is true or false, not both.", why: "The principles of non-contradiction and of the excluded middle, already in Aristotle (4th century BC): in classical logic every proposition is T or F." },
        { id: "connettivi", label: "Connectives", x: 62, y: 32, color: "#ef4444", html: "¬, ∧, ∨, ⇒, ⇔ and truth tables.", why: "The value of a compound proposition depends only on the values of its parts (truth-functionality). Frege and Peano (late 19th century) established the modern symbols." },
        { id: "implicazione", label: "Implication and contrapositive", x: 85, y: 55, color: "#0ea5e9", html: "p ⇒ q ≡ ¬q ⇒ ¬p.", why: "It is the basis of proof by contradiction. If p ⇒ q, p is sufficient and q is necessary: the converse does not hold in general." },
        { id: "quantificatori", label: "Quantifiers ∀, ∃", x: 55, y: 62, color: "#22c55e", html: "They turn a predicate into a proposition.", why: "Introduced by Frege (1879) and Peano. Negating a ∀ requires a counterexample: this is how science progresses (black swans disproved \"all swans are white\")." },
        { id: "dimostrazione", label: "Proof", x: 50, y: 88, color: "#64748b", html: "A chain of deductions from axioms to theorems.", why: "Euclid's Elements (around 300 BC) is the first treatise that starts from axioms and deduces theorems by the rules of logic." }
      ],
      edges: [["insieme", "operazioni", "has"], ["insieme", "cartesiano", "has"], ["proposizione", "connettivi", "combine with"], ["connettivi", "implicazione", "includes"], ["proposizione", "quantificatori", "generalise"], ["operazioni", "connettivi", "correspond to"], ["implicazione", "dimostrazione", "used in"], ["quantificatori", "dimostrazione", "used in"]]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>∪ = \"or\" (inclusive), ∩ = \"and\", \\ = \"but not\". |A ∪ B| = |A| + |B| − |A ∩ B|. A set with n elements has 2<sup>n</sup> subsets.</li>
<li><b>p ⇒ q</b> is false <b>only</b> if p is true and q is false. It is equivalent to the contrapositive ¬q ⇒ ¬p, <b>not</b> to the converse q ⇒ p.</li>
<li><b>De Morgan</b>: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q.</li>
<li>Negations: ¬(∀x P) ≡ ∃x ¬P; ¬(∃x P) ≡ ∀x ¬P.</li>
<li>One counterexample disproves a universal statement; a thousand examples do not prove it.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: logic",
      questions: [
        { type: "mc", q: "What is the negation of \"all the students passed the test\"?", options: ["No student passed the test", "At least one student did not pass the test", "All the students failed the test"], answer: 1, explain: "The negation of ∀ is ∃ with the predicate negated: one student who did not pass the test is enough." },
        { type: "tf", q: "If p ⇒ q is true, then q ⇒ p is also true.", answer: false, explain: "The converse is not equivalent: \"if it rains, the road is wet\" does not imply \"if the road is wet, it is raining\"." },
        { type: "mc", q: "The proposition p ∧ q is true when…", options: ["at least one of p and q is true", "p and q are both true", "p and q are both false"], answer: 1, explain: "The conjunction (\"and\") requires both to be true." },
        { type: "mc", q: "The negation of \"x > 3 and x < 8\" is…", options: ["x ≤ 3 and x ≥ 8", "x ≤ 3 or x ≥ 8", "x < 3 or x > 8"], answer: 1, explain: "De Morgan: the negation of an \"and\" is an \"or\" of the negations. Negating x > 3 gives x ≤ 3, negating x < 8 gives x ≥ 8." }
      ]
    }
  ],
  glossary: [
    { t: "Set", d: "A well-defined collection of objects, called elements." },
    { t: "Subset", d: "B ⊆ A if every element of B belongs to A." },
    { t: "Empty set", d: "The set ∅ with no elements; it is a subset of every set." },
    { t: "Union", d: "A ∪ B: the elements that are in A or in B (or in both)." },
    { t: "Intersection", d: "A ∩ B: the elements common to A and B." },
    { t: "Cartesian product", d: "A × B: the set of ordered pairs (a, b) with a in A and b in B." },
    { t: "Proposition", d: "A statement that can be said to be true or false." },
    { t: "Connective", d: "A logical operation (not, and, or, if… then, if and only if) that combines propositions." },
    { t: "Tautology", d: "A compound proposition that is always true." },
    { t: "Contrapositive", d: "The proposition ¬q ⇒ ¬p, equivalent to p ⇒ q." },
    { t: "Quantifier", d: "The symbol ∀ (for all) or ∃ (there exists) that specifies the scope of a predicate." },
    { t: "Counterexample", d: "A case that disproves a universal statement." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which of the following is a well-defined set?", options: ["The prime numbers less than 20", "The most beautiful songs", "The nice students"], answer: 0, explain: "Only the first has an objective criterion for membership." },
      { type: "num", q: "A = {1, 2, 3, 4, 5, 6} and B = {4, 5, 6, 7, 8}. How many elements does A ∩ B have?", answer: 3, explain: "A ∩ B = {4, 5, 6}: 3 elements." },
      { type: "num", q: "In a school, 40 students study French, 35 Spanish and 15 both. How many students study at least one of the two languages?", answer: 60, explain: "|F ∪ S| = 40 + 35 − 15 = 60." },
      { type: "num", q: "How many subsets does the set {a, b, c, d, e} have?", answer: 32, explain: "2⁵ = 32." },
      { type: "num", q: "A has 5 elements and B has 4. How many elements does the Cartesian product A × B have?", answer: 20, explain: "|A × B| = 5 × 4 = 20." },
      { type: "mc", q: "The implication p ⇒ q is false when…", options: ["p is false and q is true", "p is true and q is false", "p and q are both false"], answer: 1, explain: "It is the only case in which the promise is broken." },
      { type: "tf", q: "The contrapositive of \"if it rains, I take my umbrella\" is \"if I don't take my umbrella, it is not raining\".", answer: true, explain: "Contrapositive: ¬q ⇒ ¬p. It is equivalent to the original implication." },
      { type: "mc", q: "What is the negation of \"there is an even prime number greater than 2\"?", options: ["Every even prime number is less than or equal to 2", "There is an odd prime number", "Every prime number is even"], answer: 0, explain: "¬(∃x P(x)) ≡ ∀x ¬P(x): all even prime numbers are ≤ 2 (in fact the only one is 2)." },
      { type: "tf", q: "Checking that a statement holds for the first 100 natural numbers proves that it holds for all natural numbers.", answer: false, explain: "Checking particular cases is not a proof. A counterexample, on the other hand, is enough to disprove it." },
      { type: "order", q: "Put the steps for negating \"all numbers x satisfy P(x)\" in order.", items: ["Write the statement as ∀x P(x)", "Change the quantifier ∀ into ∃", "Negate the predicate: ¬P(x)", "Read: there exists at least one x for which P does not hold"], explain: "¬(∀x P(x)) ≡ ∃x ¬P(x)." },
      { type: "text", q: "What is the name of the mathematician who founded set theory in the 19th century (initial C)?", answer: ["cantor", "georg cantor"], explain: "Georg Cantor (1845-1918) founded set theory." }
    ]
  }
});
