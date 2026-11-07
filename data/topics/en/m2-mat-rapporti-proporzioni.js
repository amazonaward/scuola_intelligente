TOPIC('en', {
  id: "m2-mat-rapporti-proporzioni",
  title: "Ratios and proportions",
  intro: "The scale of a map, a recipe for 4 people that has to be adapted for 10, the speed of a train, the 16:9 screen of a phone: behind all these things there are <b>ratios</b> and <b>proportions</b>. Let's learn what they are, their <b>properties</b> and how to find the <b>unknown term</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "The ratio between two numbers",
      html: `<p>The <b>ratio</b> between two numbers <i>a</i> and <i>b</i> (with b ≠ 0) is the <b>quotient</b> of the division a : b. It is written <b>a : b</b> or <b>a/b</b>.</p>
<ul>
<li><i>a</i> is called the <b>antecedent</b>, <i>b</i> is called the <b>consequent</b>.</li>
<li>Example: the ratio between 12 and 4 is 12 : 4 = <b>3</b>; the ratio between 4 and 12 is 4/12 = <b>1/3</b> (the <b>inverse</b> ratio).</li>
</ul>
<p>Property: if you multiply or divide the antecedent and the consequent by the <b>same number</b> (not 0) the ratio <b>does not change</b>: 12 : 4 = 24 : 8 = 6 : 2 = 3. (It is the same property as equivalent fractions!)</p>`
    },
    {
      type: "text",
      title: "Ratios between quantities",
      html: `<p><b>Homogeneous quantities</b> (of the same kind, same unit of measure): the ratio is a <b>pure number</b>, with no unit.</p>
<ul>
<li>The <b>scale</b> of a map: distance on the map / real distance. A scale of <b>1 : 100 000</b> means that 1 cm on the map = 100 000 cm = <b>1 km</b> in reality.</li>
<li><b>Percentage</b>: a ratio with consequent 100 (15% = 15/100).</li>
<li>The <b>aspect ratio</b> of screens: 16 : 9 (width : height).</li>
</ul>
<p><b>Non-homogeneous quantities</b> (of different kinds): the ratio is a <b>new quantity</b> with its own unit.</p>
<ul>
<li><b>Speed</b> = distance / time → 150 km in 2 h = <b>75 km/h</b>;</li>
<li><b>Density</b> = mass / volume → water: 1 g/cm³;</li>
<li><b>Unit price</b> = price / quantity → €3 for 2 kg = <b>€1.50/kg</b>;</li>
<li><b>Population density</b> = inhabitants / area (Italy: about 195 inhabitants/km²).</li>
</ul>`
    },
    {
      type: "example",
      title: "Worked example: reading the map",
      html: `<p>On a map with a scale of <b>1 : 25 000</b> (the kind used for mountain trails) two mountain huts are <b>8 cm</b> apart. How far apart are they really?</p>
<ol>
<li>8 cm × 25 000 = 200 000 cm</li>
<li>200 000 cm = 2000 m = <b>2 km</b> (as the crow flies).</li>
</ol>
<p>And the other way round: a lake 3 km long, how many centimetres will it be on the map? 3 km = 300 000 cm → 300 000 : 25 000 = <b>12 cm</b>.</p>`
    },
    {
      type: "text",
      title: "The proportion",
      html: `<p>A <b>proportion</b> is an <b>equality between two ratios</b>:</p>
<p style="font-size:1.3em;text-align:center"><b>a : b = c : d</b></p>
<p>It is read «<i>a is to b as c is to d</i>». Example: <b>3 : 6 = 5 : 10</b> (both ratios equal 0.5).</p>
<ul>
<li><b>a</b> and <b>d</b> (the outer terms) are the <b>extremes</b>;</li>
<li><b>b</b> and <b>c</b> (the inner terms) are the <b>means</b>;</li>
<li>a and c are the <b>antecedents</b>; b and d the <b>consequents</b>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Extremes and means",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#faf5ff"/>
<text x="110" y="135" font-size="56" font-weight="bold" fill="#dc2626" text-anchor="middle">3</text>
<text x="185" y="135" font-size="56" fill="#1f2937" text-anchor="middle">:</text>
<text x="250" y="135" font-size="56" font-weight="bold" fill="#2563eb" text-anchor="middle">6</text>
<text x="315" y="135" font-size="56" fill="#1f2937" text-anchor="middle">=</text>
<text x="380" y="135" font-size="56" font-weight="bold" fill="#2563eb" text-anchor="middle">5</text>
<text x="440" y="135" font-size="56" fill="#1f2937" text-anchor="middle">:</text>
<text x="510" y="135" font-size="56" font-weight="bold" fill="#dc2626" text-anchor="middle">10</text>
<path d="M110 70 Q310 0 510 70" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="310" y="30" font-size="18" fill="#dc2626" text-anchor="middle" font-weight="bold">EXTREMES: 3 × 10 = 30</text>
<path d="M250 155 Q315 210 380 155" fill="none" stroke="#2563eb" stroke-width="4"/>
<text x="315" y="235" font-size="18" fill="#2563eb" text-anchor="middle" font-weight="bold">MEANS: 6 × 5 = 30</text>
</svg>`,
      caption: "The product of the extremes is equal to the product of the means: this is the fundamental property."
    },
    {
      type: "remember",
      title: "Fundamental property",
      html: `<p>In every proportion <b>the product of the means is equal to the product of the extremes</b>:</p>
<p style="text-align:center;font-size:1.2em">a : b = c : d &nbsp;⟺&nbsp; <b>a × d = b × c</b></p>
<p>It is used to <b>check</b> whether four numbers form a proportion: 4 : 5 = 12 : 15? 4 × 15 = 60 and 5 × 12 = 60 → <b>yes</b>.</p>`
    },
    {
      type: "text",
      title: "The other properties",
      html: `<p>Starting from <b>3 : 6 = 5 : 10</b>:</p>
<ul>
<li><b>Invert</b>: swap each antecedent with its consequent → 6 : 3 = 10 : 5.</li>
<li><b>Permute</b>: swap the means with each other (or the extremes) → 3 : 5 = 6 : 10 (or 10 : 6 = 5 : 3).</li>
<li><b>Compound</b>: (a + b) : a = (c + d) : c, or (a + b) : b = (c + d) : d → (3 + 6) : 3 = (5 + 10) : 5 → 9 : 3 = 15 : 5 ✓</li>
<li><b>Divide</b>: (a − b) : a = (c − d) : c (with a &gt; b, c &gt; d) → from 6 : 3 = 10 : 5 → (6 − 3) : 6 = (10 − 5) : 10 → 3 : 6 = 5 : 10 ✓</li>
</ul>
<p>Compounding and dividing are very useful in problems where you know the <b>sum</b> or the <b>difference</b> of two numbers and their ratio.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: ratios and proportions",
      questions: [
        { type: "mc", q: "In 2 : 7 = 6 : 21, which are the means?", options: ["2 and 21", "7 and 6", "2 and 6"], answer: 1, explain: "The means are the inner terms: 7 and 6." },
        { type: "tf", q: "4 : 6 = 10 : 15 is a proportion.", answer: true, explain: "4 × 15 = 60 and 6 × 10 = 60." },
        { type: "num", q: "A car travels 240 km in 3 hours. What is its average speed in km/h?", answer: 80, unit: "km/h", explain: "240 : 3 = 80 km/h." }
      ]
    },
    {
      type: "text",
      title: "Calculating the unknown term",
      html: `<p>From the fundamental property we get two rules:</p>
<ul>
<li><b>Unknown extreme</b> = product of the means : known extreme.<br>
<i>x : 4 = 15 : 12</i> → x = (4 × 15) : 12 = 60 : 12 = <b>5</b>.</li>
<li><b>Unknown mean</b> = product of the extremes : known mean.<br>
<i>8 : x = 6 : 9</i> → x = (8 × 9) : 6 = 72 : 6 = <b>12</b>.</li>
</ul>
<p><b>Continued proportion</b>: the two means are equal, a : x = x : d. The term x is called the <b>mean proportional</b> and equals <b>x = √(a × d)</b>.<br>
<i>4 : x = x : 9</i> → x² = 36 → x = <b>6</b>.</p>
<p><b>With compounding</b> (known sum): two numbers have a sum of 40 and are in the ratio 3 : 5. Who are they?<br>
(a + b) : a = (3 + 5) : 3 → 40 : a = 8 : 3 → a = 40 × 3 : 8 = <b>15</b>; b = 40 − 15 = <b>25</b>.</p>`
    },
    {
      type: "example",
      title: "Worked example: the tiramisu recipe",
      html: `<p>A recipe for <b>4 people</b> uses <b>250 g</b> of mascarpone. How much is needed for <b>10 people</b>?</p>
<p>4 : 250 = 10 : x → x = (250 × 10) : 4 = 2500 : 4 = <b>625 g</b>.</p>
<p>With the same method: if you need <b>3 eggs</b> for 4 people, for 10 people: 4 : 3 = 10 : x → x = 30 : 4 = 7.5 → in the kitchen you will round to <b>7 or 8 eggs</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The golden ratio",
      html: `<p>A segment is divided according to the <b>golden section</b> when the whole is to the larger part as the larger part is to the smaller. Their ratio is the <b>golden number φ ≈ 1.618</b>. Euclid described it in the <i>Elements</i> (3rd century BC); Luca Pacioli called it the «divine proportion» (1509), with illustrations by <b>Leonardo da Vinci</b>. The ratio between two consecutive numbers of the Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21…) gets closer and closer to φ: 21 : 13 ≈ 1.615.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Eratosthenes measures the Earth",
      html: `<p>Around <b>240 BC</b> <b>Eratosthenes</b> measured the circumference of the Earth with a proportion! At noon on the solstice, at Syene the Sun was at the zenith, while at Alexandria the rays made an angle of about <b>7.2°</b>, that is 1/50 of 360°. Since the two cities were about 5000 stadia apart: 7.2 : 360 = 5000 : x → x = <b>250 000 stadia</b>, about 40 000 km. The true value is 40 075 km at the equator!</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand proportions",
      intro: "If «extremes» and «means» confuse you, try these methods used in other countries.",
      tabs: [
        {
          label: "✖️ Cross products (France, USA)",
          html: `<p>Write the proportion as an <b>equality of fractions</b>:</p>
<p style="text-align:center;font-size:1.2em">a/b = c/d &nbsp;→&nbsp; a × d = b × c</p>
<p>You multiply the numbers «diagonally» (in the shape of an <b>X</b>): in France it is called <i>produit en croix</i>, in the USA <i>cross multiplication</i>. It is the same fundamental property, but easier to see!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#ecfeff"/>
<text x="200" y="90" font-size="48" font-weight="bold" fill="#0e7490" text-anchor="middle">4</text>
<line x1="165" y1="110" x2="235" y2="110" stroke="#1f2937" stroke-width="5"/>
<text x="200" y="165" font-size="48" font-weight="bold" fill="#0e7490" text-anchor="middle">250</text>
<text x="300" y="125" font-size="48" fill="#1f2937" text-anchor="middle">=</text>
<text x="400" y="90" font-size="48" font-weight="bold" fill="#be185d" text-anchor="middle">10</text>
<line x1="365" y1="110" x2="435" y2="110" stroke="#1f2937" stroke-width="5"/>
<text x="400" y="165" font-size="48" font-weight="bold" fill="#be185d" text-anchor="middle">x</text>
<line x1="230" y1="70" x2="375" y2="150" stroke="#f59e0b" stroke-width="5"/>
<line x1="240" y1="150" x2="370" y2="70" stroke="#f59e0b" stroke-width="5"/>
<text x="300" y="215" font-size="20" fill="#1f2937" text-anchor="middle" font-weight="bold">4 · x = 250 · 10 → x = 625</text>
</svg>`
        },
        {
          label: "📋 Table and unitary method",
          html: `<p>In Germany and in England the <b>unitary method</b> is often used (<i>Dreisatz</i>, «rule of three»): first you work out what <b>1</b> is worth, then you multiply.</p>
<table>
<tr><th>People</th><th>Mascarpone</th></tr>
<tr><td>4</td><td>250 g</td></tr>
<tr><td>1</td><td>250 : 4 = 62.5 g</td></tr>
<tr><td>10</td><td>62.5 × 10 = <b>625 g</b></td></tr>
</table>
<p>No formula to remember: just a division and a multiplication!</p>`
        },
        {
          label: "🗺️ The zoom of maps",
          html: `<p>Think of a proportion as a <b>zoom</b>: when you enlarge a photo on your phone, all the lengths are multiplied by the same number, so the <b>ratios stay the same</b>. A 3 × 6 rectangle enlarged becomes 5 × 10: the shape is the same because 3 : 6 = 5 : 10. If the ratios were not equal the photo would be «distorted»!</p>`
        },
        {
          label: "🧊 Cubes to scale",
          html: `<p>Here is a rectangle of <b>2 × 3</b> cubes. Try to build a bigger one «in proportion» with the sliders: 4 × 6, 6 × 9… It only works if 2 : 3 = new short side : new long side. Try 4 × 7: the shape changes!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 2, b: 3 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of ratios and proportions",
      nodes: [
        { id: "rapp", label: "Ratio a : b", x: 50, y: 6, color: "#2563eb", html: "Quotient of two numbers.", why: "In Latin <i>ratio</i>, in Greek <i>lógos</i>: for the Greeks the ratio was the way to compare two quantities. «Rational» also comes from <i>ratio</i>." },
        { id: "omog", label: "Homogeneous quantities", x: 18, y: 28, color: "#16a34a", html: "Same unit: scale, percentage (pure number).", why: "When you divide cm by cm the unit «cancels out»: what is left is a pure number that says «how many times» one quantity fits into the other." },
        { id: "nonomog", label: "Non-homogeneous quantities", x: 82, y: 28, color: "#ea580c", html: "Different units: speed, density, price per kg.", why: "The ratio creates a <b>derived quantity</b>: km/h, g/cm³, €/kg. Galileo used these ratios to study motion in the 1600s." },
        { id: "prop", label: "Proportion", x: 50, y: 46, color: "#7c3aed", html: "Equality between two ratios: a : b = c : d.", why: "The theory of proportions was developed by <b>Eudoxus of Cnidus</b> (4th century BC) and is set out in <b>Book V of Euclid's Elements</b>. It also worked with quantities like √2 that are not fractions." },
        { id: "fond", label: "Fundamental property", x: 22, y: 66, color: "#dc2626", html: "Product of the means = product of the extremes.", why: "If a/b = c/d, multiplying both sides by b × d gives a × d = c × b: it is a consequence of equivalent fractions." },
        { id: "altre", label: "Invert, permute, compound, divide", x: 78, y: 66, color: "#ca8a04", html: "Transformations that keep the proportion.", why: "They are all proved from the fundamental property. They were already in Book V of Euclid with Greek names; in the Middle Ages the «abacus schools» taught them to the sons of merchants." },
        { id: "incog", label: "Unknown term", x: 22, y: 88, color: "#0d9488", html: "Extreme = means : extreme; mean = extremes : mean.", why: "It is the «rule of three», taught in abacus treatises such as the <i>Liber Abaci</i> of <b>Fibonacci</b> (1202) to solve problems of exchange, goods and prices." },
        { id: "continua", label: "Continued proportion", x: 78, y: 88, color: "#db2777", html: "a : x = x : d → x = √(a·d).", why: "The mean proportional is the <b>geometric mean</b>. It appears in Euclid's second theorem on right triangles and in the golden section." }
      ],
      edges: [
        ["rapp", "omog", "between"],
        ["rapp", "nonomog", "between"],
        ["rapp", "prop", "two equal ratios"],
        ["prop", "fond", "has"],
        ["prop", "altre", "is transformed with"],
        ["fond", "incog", "lets us find"],
        ["altre", "continua", "special case"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: the unknown term",
      questions: [
        { type: "num", q: "x : 6 = 10 : 15. What is x?", answer: 4, explain: "x = 6 × 10 : 15 = 60 : 15 = 4." },
        { type: "num", q: "9 : x = x : 4. What is x (positive)?", answer: 6, explain: "x = √(9 × 4) = √36 = 6." },
        { type: "num", q: "On a 1 : 50 000 map two villages are 6 cm apart. How many km is that in reality?", answer: 3, unit: "km", explain: "6 × 50 000 = 300 000 cm = 3 km." }
      ]
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>Ratio = quotient; homogeneous → pure number; non-homogeneous → new quantity.</li>
<li>Proportion a : b = c : d; <b>extremes</b> a, d; <b>means</b> b, c.</li>
<li><b>Means × means = extremes × extremes</b>.</li>
<li>x extreme = means multiplied : known extreme; x mean = extremes multiplied : known mean.</li>
<li>Mean proportional: x = √(a·d).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Ratio", d: "The quotient between two numbers or quantities." },
    { t: "Antecedent", d: "The first term of a ratio." },
    { t: "Consequent", d: "The second term of a ratio." },
    { t: "Scale", d: "The ratio between a distance on the map and the corresponding real distance." },
    { t: "Proportion", d: "An equality between two ratios." },
    { t: "Extremes", d: "The first and fourth terms of a proportion." },
    { t: "Means", d: "The second and third terms of a proportion." },
    { t: "Continued proportion", d: "A proportion with equal means." },
    { t: "Mean proportional", d: "The repeated term in a continued proportion: √(a·d)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "What is the ratio between 45 and 9?", answer: 5, explain: "45 : 9 = 5." },
      { type: "mc", q: "In 5 : 8 = 15 : 24, the extremes are…", options: ["5 and 24", "8 and 15", "5 and 15"], answer: 0, explain: "The first and last terms." },
      { type: "tf", q: "3 : 4 = 9 : 16 is a proportion.", answer: false, explain: "3 × 16 = 48, but 4 × 9 = 36: different." },
      { type: "num", q: "x : 12 = 5 : 3. Find x.", answer: 20, explain: "x = 12 × 5 : 3 = 20." },
      { type: "num", q: "7 : x = 21 : 9. Find x.", answer: 3, explain: "x = 7 × 9 : 21 = 3." },
      { type: "mc", q: "Permuting the means of 2 : 3 = 8 : 12 gives…", options: ["3 : 2 = 12 : 8", "2 : 8 = 3 : 12", "12 : 3 = 8 : 2"], answer: 1, explain: "You swap 3 and 8." },
      { type: "mc", q: "The ratio between 300 km and 4 h is…", options: ["75 (pure number)", "75 km/h", "1200 km·h"], answer: 1, explain: "Non-homogeneous quantities: you get a speed, 75 km/h." },
      { type: "num", q: "Two numbers have a sum of 56 and are in the ratio 3 : 4. What is the smaller one?", answer: 24, explain: "Compounding: 56 : a = 7 : 3 → a = 56 × 3 : 7 = 24 (the other is 32)." },
      { type: "num", q: "Find the mean proportional between 2 and 18.", answer: 6, explain: "√(2 × 18) = √36 = 6." },
      { type: "num", q: "At a scale of 1 : 200 a room is 3 cm long on the drawing. How many metres long is it really?", answer: 6, unit: "m", explain: "3 × 200 = 600 cm = 6 m." },
      { type: "order", q: "Put the steps for finding an unknown extreme in order.", items: ["Identify the means", "Multiply the means", "Divide by the known extreme", "Check with the fundamental property"], explain: "Means × means : known extreme, then check." }
    ],
    gen: [["proportion", 3]]
  }
});
