TOPIC('en', {
  id: "m1-mat-frazioni",
  title: "Fractions and operations",
  intro: "In primary school you met fractions as \"slices of a cake\". Now they become real <b>numbers</b>: we learn to <b>classify</b> them, to <b>simplify</b> them with the GCD, to <b>compare</b> them with the LCM and to do the <b>four operations</b> and powers with them, up to solving problems and expressions.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "The fraction as an operator",
      html: `<p>A fraction <b>a/b</b> (with b ≠ 0) means that the whole is divided into <b>b</b> equal parts and <b>a</b> of them are taken.</p>
<ul>
<li>the <b>denominator</b> (b, at the bottom) says how many equal parts the whole is divided into;</li>
<li>the <b>numerator</b> (a, at the top) says how many parts are taken;</li>
<li>the <b>fraction bar</b> means "divided by": 3/4 = 3 ÷ 4 = 0.75.</li>
</ul>
<p>A fraction is an <b>operator</b>: it acts on a quantity. To find <b>3/4 of 200</b>: divide by the denominator and multiply by the numerator: 200 ÷ 4 × 3 = 50 × 3 = <b>150</b>.</p>
<p><b>The inverse problem</b>: "3/4 of a number is 150. What is the number?" Do the operation backwards: 150 ÷ 3 × 4 = 50 × 4 = <b>200</b>.</p>
<p>The denominator <b>cannot be 0</b>: you can't divide a whole into zero parts!</p>`
    },
    {
      type: "text",
      title: "Proper, improper and apparent fractions",
      html: `<table>
<tr><th>Type</th><th>Rule</th><th>Examples</th><th>Value</th></tr>
<tr><td><b>Proper</b></td><td>numerator &lt; denominator</td><td>2/5, 7/9</td><td>less than 1 whole</td></tr>
<tr><td><b>Improper</b></td><td>numerator &gt; denominator (and not a multiple)</td><td>7/4, 11/3</td><td>more than 1 whole</td></tr>
<tr><td><b>Apparent</b></td><td>numerator is a multiple of the denominator</td><td>8/4, 6/6, 0/5</td><td>a natural number (2, 1, 0)</td></tr>
</table>
<p>An improper fraction can be written as a <b>mixed number</b>: 7/4 = 1 whole and 3/4 (because 7 ÷ 4 = 1 remainder 3).</p>
<p>Fractions with numerator 1 (1/2, 1/3, 1/10…) are called <b>unit fractions</b>; those with denominator 10, 100, 1000… are called <b>decimal fractions</b> (3/10 = 0.3).</p>`
    },
    {
      type: "widget",
      title: "Explore fractions",
      widget: "fractionPie",
      options: { n: 7, d: 4 },
      caption: "With 7/4 you need more than one whole: it is an improper fraction. Move the sliders and look for an apparent fraction (e.g. 8/4)."
    },
    {
      type: "text",
      title: "Equivalent fractions and simplifying",
      html: `<p>Two fractions are <b>equivalent</b> if they represent the same quantity: 1/2 = 2/4 = 3/6 = 50/100.</p>
<p><b>Invariance property</b>: multiplying or dividing numerator and denominator by the <b>same number</b> (other than 0) gives an equivalent fraction.<br>3/5 = (3 × 4)/(5 × 4) = 12/20.</p>
<p><b>Quick check</b> (cross-multiplication): a/b = c/d if <b>a × d = b × c</b>. 3/5 and 12/20: 3 × 20 = 60 and 5 × 12 = 60 ✔️</p>
<p><b>Simplifying</b> means dividing numerator and denominator by a common divisor. A fraction is in <b>lowest terms</b> when numerator and denominator are <b>coprime</b> (GCD = 1). The fastest way: divide by the <b>GCD</b>.</p>
<p>Example: 36/48. GCD(36, 48) = 12 → 36/48 = 3/4.<br>Or step by step: 36/48 = 18/24 = 9/12 = 3/4.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: types and equivalence",
      questions: [
        { type: "mc", q: "Which fraction is apparent?", options: ["5/3", "12/4", "3/12", "7/8"], answer: 1, explain: "12 is a multiple of 4: 12/4 = 3." },
        { type: "num", q: "What is 2/5 of 35?", answer: 14, tol: 0, explain: "35 ÷ 5 = 7; 7 × 2 = 14." },
        { type: "mc", q: "Reduce 24/36 to lowest terms.", options: ["12/18", "4/6", "2/3", "6/9"], answer: 2, explain: "GCD(24, 36) = 12: 24/36 = 2/3." },
        { type: "tf", q: "4/6 and 10/15 are equivalent.", answer: true, explain: "Both simplify to 2/3; cross-multiplication: 4 × 15 = 60 = 6 × 10." }
      ]
    },
    {
      type: "text",
      title: "Comparing fractions",
      html: `<ul>
<li><b>Same denominator</b>: the one with the bigger numerator is bigger. 5/8 &gt; 3/8.</li>
<li><b>Same numerator</b>: the one with the <b>smaller</b> denominator is bigger (bigger parts!). 3/4 &gt; 3/7.</li>
<li><b>General case</b>: turn them into equivalent fractions with the same denominator, the <b>lowest common denominator</b> (LCD), that is the <b>LCM</b> of the denominators.</li>
</ul>
<p>Example: compare 5/6 and 7/9. LCM(6, 9) = 18.<br>5/6 = 15/18; 7/9 = 14/18 → <b>5/6 &gt; 7/9</b>.</p>
<p>Quick method with <b>cross-multiplication</b>: 5 × 9 = 45 and 6 × 7 = 42; since 45 &gt; 42, 5/6 &gt; 7/9.</p>
<p>Fractions can also be placed on the <b>number line</b>: between 0 and 1 lie all the proper fractions. Between two fractions there is always another one: for example between 1/3 and 1/2 there is 5/12. Fractions are <b>dense</b>, unlike the natural numbers!</p>`
    },
    {
      type: "svg",
      title: "Fractions on the line and comparison",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<line x1="40" y1="70" x2="560" y2="70" stroke="#0f172a" stroke-width="3"/>
<g stroke="#0f172a" stroke-width="3"><line x1="40" y1="58" x2="40" y2="82"/><line x1="300" y1="58" x2="300" y2="82"/><line x1="560" y1="58" x2="560" y2="82"/></g>
<g font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a"><text x="40" y="105">0</text><text x="300" y="105">1</text><text x="560" y="105">2</text></g>
<circle cx="235" cy="70" r="8" fill="#2563eb"/><text x="235" y="45" font-size="17" font-weight="bold" text-anchor="middle" fill="#1d4ed8">3/4</text>
<circle cx="495" cy="70" r="8" fill="#dc2626"/><text x="495" y="45" font-size="17" font-weight="bold" text-anchor="middle" fill="#b91c1c">7/4</text>
<circle cx="170" cy="70" r="8" fill="#16a34a"/><text x="170" y="45" font-size="17" font-weight="bold" text-anchor="middle" fill="#15803d">1/2</text>
<text x="40" y="150" font-size="17" fill="#0f172a">5/6 =</text>
<g stroke="#ffffff" stroke-width="2">
<rect x="100" y="132" width="330" height="26" fill="#e5e7eb"/>
<rect x="100" y="132" width="55" height="26" fill="#3b82f6"/><rect x="155" y="132" width="55" height="26" fill="#3b82f6"/><rect x="210" y="132" width="55" height="26" fill="#3b82f6"/><rect x="265" y="132" width="55" height="26" fill="#3b82f6"/><rect x="320" y="132" width="55" height="26" fill="#3b82f6"/>
</g>
<text x="40" y="200" font-size="17" fill="#0f172a">7/9 =</text>
<g stroke="#ffffff" stroke-width="2">
<rect x="100" y="182" width="330" height="26" fill="#e5e7eb"/>
<rect x="100" y="182" width="36.7" height="26" fill="#f97316"/><rect x="136.7" y="182" width="36.7" height="26" fill="#f97316"/><rect x="173.3" y="182" width="36.7" height="26" fill="#f97316"/><rect x="210" y="182" width="36.7" height="26" fill="#f97316"/><rect x="246.7" y="182" width="36.7" height="26" fill="#f97316"/><rect x="283.3" y="182" width="36.7" height="26" fill="#f97316"/><rect x="320" y="182" width="36.7" height="26" fill="#f97316"/>
</g>
<text x="450" y="152" font-size="16" fill="#1d4ed8" font-weight="bold">= 15/18</text>
<text x="450" y="202" font-size="16" fill="#c2410c" font-weight="bold">= 14/18</text>
<text x="300" y="245" font-size="16" text-anchor="middle" fill="#334155">the blue bar is a bit longer: 5/6 &gt; 7/9</text>
</svg>`,
      caption: "Proper fractions lie between 0 and 1, improper ones beyond 1. The bar model helps to compare them."
    },
    {
      type: "text",
      title: "Addition and subtraction",
      html: `<p><b>With the same denominator</b>: add (or subtract) the numerators and keep the denominator.<br>2/9 + 5/9 = 7/9 &nbsp;&nbsp; 7/8 − 3/8 = 4/8 = 1/2</p>
<p><b>With different denominators</b>:</p>
<ol>
<li>find the <b>LCM of the denominators</b> (the new common denominator);</li>
<li>divide the LCM by each denominator and multiply the result by the numerator;</li>
<li>add (or subtract) the new numerators;</li>
<li><b>simplify</b> the result, if possible.</li>
</ol>
<p>Example: <b>3/4 + 5/6</b>. LCM(4, 6) = 12.<br>12 ÷ 4 × 3 = 9; 12 ÷ 6 × 5 = 10 → 9/12 + 10/12 = <b>19/12</b> (= 1 and 7/12).</p>
<p>Example: <b>2 − 3/5</b> = 10/5 − 3/5 = <b>7/5</b> (one whole is 5/5, two wholes are 10/5).</p>
<p><b>A mistake to avoid</b>: 1/2 + 1/3 is <b>not</b> 2/5! It is 3/6 + 2/6 = <b>5/6</b>. You never add the denominators.</p>`
    },
    {
      type: "text",
      title: "Multiplication, division and powers",
      html: `<p><b>Multiplication</b>: numerator times numerator, denominator times denominator.<br>2/3 × 4/5 = 8/15</p>
<p>It pays to <b>simplify first</b>, even "crosswise" (a numerator with the denominator of the other fraction):<br>6/7 × 14/9 → 6 and 9 are divided by 3, 14 and 7 by 7 → 2/1 × 2/3 = <b>4/3</b>.</p>
<p>The <b>reciprocal</b> (or inverse) of a fraction is obtained by swapping numerator and denominator: the reciprocal of 3/5 is 5/3. A fraction times its reciprocal always gives 1. 0 has no reciprocal.</p>
<p><b>Division</b>: multiply the first fraction by the <b>reciprocal</b> of the second.<br>3/4 ÷ 9/8 = 3/4 × 8/9 = (simplify 3 with 9 and 4 with 8) 1/1 × 2/3 = <b>2/3</b>.</p>
<p><b>Powers</b>: raise both the numerator and the denominator to the power.<br>(2/3)³ = 2³/3³ = 8/27. The same properties as for powers of natural numbers hold, and (a/b)⁰ = 1.</p>
<p>In <b>expressions</b> with fractions the order is always the same: brackets → powers → × and ÷ → + and −.</p>`
    },
    {
      type: "example",
      title: "Practical example: the birthday cake",
      html: `<p>At Matthew's party, Luke eats <b>1/4</b> of the cake and Sophie <b>1/3</b>. What fraction of the cake is left?</p>
<ol>
<li>Eaten: 1/4 + 1/3 = 3/12 + 4/12 = <b>7/12</b>.</li>
<li>Left: 1 − 7/12 = 12/12 − 7/12 = <b>5/12</b>.</li>
</ol>
<p>The cake weighed <b>1,200 g</b>. How many grams are left? 5/12 of 1,200 = 1,200 ÷ 12 × 5 = <b>500 g</b>.</p>
<p>The rest is cut into pieces of <b>1/24</b> of the cake: how many slices do you get? 5/12 ÷ 1/24 = 5/12 × 24/1 = <b>10 slices</b>.</p>`
    },
    {
      type: "example",
      title: "Practical example: the discount and the inverse problem",
      html: `<p><b>1.</b> A bike costs <b>€ 240</b>. In the sale it is discounted by <b>1/5</b>. How much does it cost now?<br>Discount: 240 ÷ 5 = € 48. Price: 240 − 48 = <b>€ 192</b> (or: I pay 4/5 → 240 ÷ 5 × 4 = 192).</p>
<p><b>2.</b> Julia spent <b>3/8</b> of her savings, that is <b>€ 45</b>. How much did she have in all?<br>Inverse problem: 45 ÷ 3 × 8 = 15 × 8 = <b>€ 120</b>. She has 120 − 45 = <b>€ 75</b> left (the 5/8).</p>
<p>A good method for these problems is the <b>bar model</b>: draw a bar divided into 8 parts, colour 3 of them and write "€ 45" above. One part is worth € 15, the whole bar 8 × 15 = € 120.</p>`
    },
    {
      type: "curiosity",
      title: "The Egyptians used only unit fractions",
      html: `<p>The ancient Egyptians wrote almost all fractions as a <b>sum of different unit fractions</b> (with numerator 1). For example 3/4 = 1/2 + 1/4 and 2/5 = 1/3 + 1/15. The <b>Rhind papyrus</b> (about 1650 BC) contains a table for writing 2/n in this way.</p>
<p>It seems complicated, but it was practical: to share 3 loaves among 4 people, each gets half a loaf plus a quarter. Easy to cut!</p>
<p>The horizontal <b>fraction bar</b> we use was made famous in Europe by Fibonacci in the <i>Liber abaci</i> (1202), who had learned it from Arab mathematicians.</p>`
    },
    {
      type: "curiosity",
      title: "Fractions in music",
      html: `<p>Musical notes are fractions! The <b>whole note</b> lasts 1 whole, the <b>half note</b> 1/2, the <b>quarter note</b> 1/4, the <b>eighth note</b> 1/8, the <b>sixteenth note</b> 1/16. A <b>3/4</b> time signature, written at the start of the score (the waltz), means that each bar contains 3 notes of 1/4.</p>
<p>Notes also "sound good together" thanks to fractions: <b>Pythagoras</b> discovered that a string half as long (1/2) sounds an <b>octave</b> higher, and one 2/3 as long sounds a <b>fifth</b>. Simple fractions give the most harmonious sounds!</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand it",
      intro: "If the rules about fractions feel like magic, try these methods used in other countries.",
      tabs: [
        {
          label: "🇸🇬 Bar model (Singapore)",
          html: `<p>In Singapore, one of the countries with the best maths results in the world, problems with fractions are solved by drawing <b>bars</b> (the <i>bar model</i>). Problem: "2/5 of a class are boys. There are 15 girls. How many pupils in all?"</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="220" fill="#ffffff"/><g stroke="#0f172a" stroke-width="2"><rect x="50" y="70" width="100" height="50" fill="#93c5fd"/><rect x="150" y="70" width="100" height="50" fill="#93c5fd"/><rect x="250" y="70" width="100" height="50" fill="#f9a8d4"/><rect x="350" y="70" width="100" height="50" fill="#f9a8d4"/><rect x="450" y="70" width="100" height="50" fill="#f9a8d4"/></g><g font-size="18" font-weight="bold" text-anchor="middle"><text x="150" y="55" fill="#1d4ed8">boys: 2/5</text><text x="400" y="55" fill="#be185d">girls: 3/5 = 15</text><text x="300" y="102" fill="#0f172a">5</text><text x="400" y="102" fill="#0f172a">5</text><text x="500" y="102" fill="#0f172a">5</text><text x="100" y="102" fill="#0f172a">5</text><text x="200" y="102" fill="#0f172a">5</text></g><text x="300" y="160" font-size="18" text-anchor="middle" fill="#0f172a">3 parts = 15 → 1 part = 5</text><text x="300" y="195" font-size="20" font-weight="bold" text-anchor="middle" fill="#15803d">5 parts = 25 pupils</text></svg>`
        },
        {
          label: "🦋 The butterfly (USA)",
          html: `<p>In the United States many students use the "<b>butterfly method</b>" to add two fractions: multiply <b>crosswise</b> (the butterfly's wings), add the products to get the numerator, and multiply the denominators (the body).</p><p>2/3 + 1/4: wings 2 × 4 = 8 and 3 × 1 = 3 → numerator 8 + 3 = 11; body 3 × 4 = 12 → <b>11/12</b>.</p><p>It always works, because it uses the product of the denominators as the common denominator. But be careful: with big numbers the LCM is better, otherwise you then have to simplify a lot (1/6 + 1/9 with the butterfly gives 15/54 = 5/18).</p>`
        },
        {
          label: "🧊 Multiplying with area (3D)",
          html: `<p>How do you see 2/3 × 3/4? Take a rectangle of <b>3 × 4 = 12</b> little cubes (the denominator of the result). Colour 2 rows out of 3 and 3 columns out of 4: the part coloured twice is a rectangle of <b>2 × 3 = 6</b> little cubes. So 2/3 × 3/4 = 6/12 = 1/2. Numerator times numerator, denominator times denominator: that's why!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "📏 On the number line",
          html: "<p>Divide each whole into 4 parts: each jump is 1/4. By counting the jumps you can add: 3/4 + 2/4 = 5 jumps = 5/4, that is one whole and a quarter. The marks show 3 (= 3/4) and 5 (= 5/4) if you think of each tick as a quarter.</p>",
          widget: "numberLine",
          options: { min: 0, max: 8, step: 1, marks: [3, 5] }
        },
        {
          label: "🍕 The rule of \"why we flip\"",
          html: `<p>Why do we multiply by the reciprocal to divide? Think of a concrete question: <b>how many slices of 1/8 of a pizza are there in 3 pizzas?</b> Each pizza has 8 slices, so 3 × 8 = 24. You have calculated 3 ÷ 1/8 = 3 × 8/1 = 24!</p><p>Dividing by a fraction means asking "<b>how many times does it fit?</b>". Dividing by 1/8 is like counting eighths: you multiply by 8. If the slices are 3/8, three times fewer fit: 3 × 8/3 = 8 slices.</p>`
        }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: operations",
      questions: [
        { type: "mc", q: "2/5 + 1/3 = ?", options: ["3/8", "11/15", "3/15", "2/15"], answer: 1, explain: "LCM(5, 3) = 15: 6/15 + 5/15 = 11/15." },
        { type: "mc", q: "5/6 × 3/10 = ?", options: ["15/60", "1/4", "8/16", "1/2"], answer: 1, explain: "Simplify crosswise 5 with 10 and 3 with 6: 1/2 × 1/2 = 1/4." },
        { type: "mc", q: "4/9 ÷ 2/3 = ?", options: ["8/27", "2/3", "6/9", "3/2"], answer: 1, explain: "4/9 × 3/2 = 12/18 = 2/3." },
        { type: "tf", q: "The reciprocal of 7 is 1/7.", answer: true, explain: "7 = 7/1, swapping gives 1/7. Indeed 7 × 1/7 = 1." }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: where the rules of fractions come from",
      nodes: [
        { id: "dividere", label: "Dividing into equal parts", x: 50, y: 5, color: "#64748b", html: "The need to share bread, land, inheritances.", why: "The Egyptians and Babylonians were already using fractions 4,000 years ago to divide harvests and measure fields after the Nile floods." },
        { id: "frazione", label: "Fraction a/b", x: 50, y: 20, color: "#2563eb", html: "Operator: divide by b and multiply by a.", why: "The word comes from the Latin \"frangere\" = to break. A fraction is also the result of the division a ÷ b, which is why b ≠ 0." },
        { id: "tipi", label: "Proper, improper, apparent", x: 15, y: 34, color: "#0ea5e9", html: "Less than 1, more than 1, equal to a natural number.", why: "It depends on comparing numerator and denominator: apparent fractions show that natural numbers are a special case of fractions." },
        { id: "invariantiva", label: "Invariance property", x: 50, y: 38, color: "#16a34a", html: "× or ÷ numerator and denominator by the same number.", why: "It is the same invariance property as division: (a × k) ÷ (b × k) = a ÷ b. Cutting every slice in 2 doubles the slices but does not change the quantity." },
        { id: "mcd", label: "Simplifying (GCD)", x: 25, y: 56, color: "#9333ea", html: "Divide by the GCD: fraction in lowest terms.", why: "The fundamental theorem of arithmetic guarantees that the reduced form is unique: every rational number has just one \"representative\" in lowest terms." },
        { id: "mcm", label: "Common denominator (LCM)", x: 75, y: 56, color: "#ea580c", html: "To compare, add and subtract.", why: "You can only add \"things of the same kind\": thirds with thirds, quarters with quarters. The LCM is the smallest common \"kind\"." },
        { id: "moltdiv", label: "× and ÷ (reciprocal)", x: 25, y: 76, color: "#dc2626", html: "Product: num × num, den × den. Division: × the reciprocal.", why: "The product can be seen as the area of a rectangle; dividing by a/b means asking how many times a/b fits in the number, that is multiplying by b/a." },
        { id: "addsott", label: "+ and −", x: 75, y: 76, color: "#f59e0b", html: "Same denominator, then add the numerators.", why: "1/2 + 1/3 ≠ 2/5: you can see it with a cake. The Egyptians avoided the problem by writing everything as sums of unit fractions." },
        { id: "razionali", label: "Rational numbers ℚ", x: 50, y: 93, color: "#0f766e", html: "The set of all fractions: a new set of numbers.", why: "With fractions division is always possible (except by 0). The name comes from the Latin \"ratio\" = ratio. Fibonacci (1202) spread the fraction bar in Europe." }
      ],
      edges: [["dividere", "frazione", "gives rise to"], ["frazione", "tipi", "is classified"], ["frazione", "invariantiva", "enjoys the"], ["invariantiva", "mcd", "allows simplifying"], ["invariantiva", "mcm", "allows converting"], ["mcd", "moltdiv", "simplify first"], ["mcm", "addsott", "is needed for"], ["moltdiv", "razionali", "form"], ["addsott", "razionali", "form"]]
    }
  ],
  glossary: [
    { t: "Fraction", d: "A number of the form a/b (b ≠ 0) that means a parts of a whole divided into b equal parts." },
    { t: "Numerator", d: "The number above the fraction bar: how many parts are taken." },
    { t: "Denominator", d: "The number below the bar: how many parts the whole is divided into." },
    { t: "Proper fraction", d: "A fraction whose numerator is smaller than its denominator (worth less than 1)." },
    { t: "Improper fraction", d: "A fraction whose numerator is bigger than its denominator (worth more than 1)." },
    { t: "Apparent fraction", d: "A fraction whose numerator is a multiple of its denominator: it is worth a natural number." },
    { t: "Equivalent fractions", d: "Fractions that represent the same quantity." },
    { t: "Lowest terms", d: "A fraction in which numerator and denominator are coprime." },
    { t: "Lowest common denominator", d: "The LCM of the denominators, used to compare and add." },
    { t: "Reciprocal", d: "The fraction obtained by swapping numerator and denominator." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "What is 5/8 of 64?", answer: 40, tol: 0, explain: "64 ÷ 8 = 8; 8 × 5 = 40." },
      { type: "num", q: "3/7 of a number is 21. What is the number?", answer: 49, tol: 0, explain: "Inverse problem: 21 ÷ 3 × 7 = 49." },
      { type: "mc", q: "The fraction 9/4 is…", options: ["proper", "improper", "apparent", "unit"], answer: 1, explain: "9 > 4 and 9 is not a multiple of 4." },
      { type: "mc", q: "What is 45/60 in lowest terms?", options: ["9/12", "3/4", "15/20", "5/6"], answer: 1, explain: "GCD(45, 60) = 15: 3/4." },
      { type: "mc", q: "Which fraction is bigger?", options: ["3/5", "4/7", "They are equal"], answer: 0, explain: "Cross-multiplication: 3 × 7 = 21 > 5 × 4 = 20, so 3/5 > 4/7." },
      { type: "mc", q: "5/6 − 1/4 = ?", options: ["4/2", "7/12", "1/2", "4/24"], answer: 1, explain: "LCM(6, 4) = 12: 10/12 − 3/12 = 7/12." },
      { type: "mc", q: "(3/4)² = ?", options: ["6/8", "9/16", "9/4", "3/16"], answer: 1, explain: "Square both numerator and denominator: 9/16." },
      { type: "mc", q: "7/10 ÷ 14/5 = ?", options: ["1/4", "49/50", "4", "98/50"], answer: 0, explain: "7/10 × 5/14 = (simplify 7 with 14 and 5 with 10) 1/2 × 1/2 = 1/4." },
      { type: "tf", q: "1/2 + 1/3 = 2/5", answer: false, explain: "You don't add the denominators: 3/6 + 2/6 = 5/6." },
      { type: "num", q: "A book has 240 pages. Luke has read 3/8 of it. How many pages are left?", answer: 150, tol: 0, unit: "pages", explain: "Read: 240 ÷ 8 × 3 = 90. Left: 240 − 90 = 150 (the 5/8)." },
      { type: "order", q: "Put these in order from the smallest to the biggest", items: ["1/4", "1/3", "1/2", "2/3", "5/4"], explain: "In twelfths: 3/12, 4/12, 6/12, 8/12, 15/12." },
      { type: "mc", q: "What is the reciprocal of 2/9?", options: ["9/2", "2/9", "−2/9", "1/9"], answer: 0, explain: "Swap numerator and denominator: 9/2." }
    ],
    gen: [["fracEquiv", 1], ["fracAdd", 2]]
  }
});
