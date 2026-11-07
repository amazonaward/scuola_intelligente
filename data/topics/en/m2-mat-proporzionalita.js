TOPIC('en', {
  id: "m2-mat-proporzionalita",
  title: "Direct and inverse proportionality",
  intro: "If you buy twice as many notebooks, you spend twice as much. But if there are twice as many of you sharing a pizza, each person eats half. In the first case there is <b>direct proportionality</b>, in the second <b>inverse proportionality</b>. Let's learn to recognise them with <b>tables</b>, <b>formulas</b> and <b>graphs</b>, and to use them to solve problems.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Constant and variable quantities",
      html: `<p>A <b>quantity</b> is something that can be measured. In a problem some quantities stay <b>constant</b> (the price of one notebook), others <b>vary</b> (how many notebooks you buy, how much you spend).</p>
<p>When two variable quantities <b>x</b> and <b>y</b> are linked (when one changes the other changes too), we say that <b>y depends on x</b>, or that y is a <b>function</b> of x. There are two simplest ways of depending: <b>direct proportionality</b> and <b>inverse proportionality</b>.</p>`
    },
    {
      type: "text",
      title: "Direct proportionality",
      html: `<p>Two quantities are <b>directly proportional</b> if their <b>ratio is constant</b>:</p>
<p style="text-align:center;font-size:1.3em"><b>y / x = k</b> &nbsp;&nbsp; that is &nbsp;&nbsp; <b>y = k · x</b></p>
<p>The number <b>k</b> is called the <b>constant of proportionality</b>.</p>
<p>Example: a notebook costs <b>€2</b>.</p>
<table>
<tr><th>Notebooks (x)</th><td>1</td><td>2</td><td>3</td><td>5</td><td>10</td></tr>
<tr><th>Cost in € (y)</th><td>2</td><td>4</td><td>6</td><td>10</td><td>20</td></tr>
<tr><th>y / x</th><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td></tr>
</table>
<p><b>How to recognise it</b>: if x <b>doubles</b>, y doubles too; if x <b>triples</b>, y triples; if x is halved, y is halved. And when x = 0, y = 0 too.</p>
<p><b>Careful</b>: «they increase together» is not enough! A child's age and height grow together, but at 10 you are not twice as tall as when you were 5.</p>`
    },
    {
      type: "svg",
      title: "The graph of direct proportionality",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0fdf4"/>
<g stroke="#bbf7d0" stroke-width="1">
<line x1="60" y1="40" x2="60" y2="280"/><line x1="110" y1="40" x2="110" y2="280"/><line x1="160" y1="40" x2="160" y2="280"/><line x1="210" y1="40" x2="210" y2="280"/><line x1="260" y1="40" x2="260" y2="280"/><line x1="310" y1="40" x2="310" y2="280"/>
<line x1="60" y1="280" x2="330" y2="280"/><line x1="60" y1="240" x2="330" y2="240"/><line x1="60" y1="200" x2="330" y2="200"/><line x1="60" y1="160" x2="330" y2="160"/><line x1="60" y1="120" x2="330" y2="120"/><line x1="60" y1="80" x2="330" y2="80"/><line x1="60" y1="40" x2="330" y2="40"/>
</g>
<line x1="60" y1="290" x2="60" y2="30" stroke="#14532d" stroke-width="3"/>
<line x1="50" y1="280" x2="340" y2="280" stroke="#14532d" stroke-width="3"/>
<line x1="60" y1="280" x2="310" y2="80" stroke="#16a34a" stroke-width="5"/>
<circle cx="110" cy="240" r="7" fill="#dc2626"/><circle cx="160" cy="200" r="7" fill="#dc2626"/><circle cx="210" cy="160" r="7" fill="#dc2626"/><circle cx="260" cy="120" r="7" fill="#dc2626"/><circle cx="310" cy="80" r="7" fill="#dc2626"/>
<text x="110" y="302" font-size="14" text-anchor="middle">1</text><text x="160" y="302" font-size="14" text-anchor="middle">2</text><text x="210" y="302" font-size="14" text-anchor="middle">3</text><text x="260" y="302" font-size="14" text-anchor="middle">4</text><text x="310" y="302" font-size="14" text-anchor="middle">5</text>
<text x="45" y="245" font-size="14" text-anchor="end">2</text><text x="45" y="205" font-size="14" text-anchor="end">4</text><text x="45" y="165" font-size="14" text-anchor="end">6</text><text x="45" y="125" font-size="14" text-anchor="end">8</text><text x="45" y="85" font-size="14" text-anchor="end">10</text>
<text x="345" y="290" font-size="16" font-weight="bold">x</text><text x="68" y="30" font-size="16" font-weight="bold">y</text>
<text x="370" y="90" font-size="22" fill="#15803d" font-weight="bold">y = 2x</text>
<text x="370" y="130" font-size="16" fill="#14532d">• it is a straight line</text>
<text x="370" y="158" font-size="16" fill="#14532d">• it passes through the origin (0;0)</text>
<text x="370" y="186" font-size="16" fill="#14532d">• the bigger k is,</text>
<text x="370" y="208" font-size="16" fill="#14532d">  the steeper the line</text>
</svg>`,
      caption: "The graph of a direct proportionality is a half-line (or line) that passes through the origin of the axes."
    },
    {
      type: "quiz",
      title: "Mini-quiz: direct proportionality",
      questions: [
        { type: "tf", q: "The perimeter of a square is directly proportional to its side.", answer: true, explain: "P = 4 · l: the ratio P/l is always 4." },
        { type: "mc", q: "If y = 5x and x = 7, what is y?", options: ["12", "35", "1.4"], answer: 1, explain: "5 × 7 = 35." },
        { type: "tf", q: "The area of a square is directly proportional to its side.", answer: false, explain: "A = l²: if the side doubles the area quadruples, so the ratio A/l is not constant." }
      ]
    },
    {
      type: "text",
      title: "Inverse proportionality",
      html: `<p>Two quantities are <b>inversely proportional</b> if their <b>product is constant</b>:</p>
<p style="text-align:center;font-size:1.3em"><b>x · y = k</b> &nbsp;&nbsp; that is &nbsp;&nbsp; <b>y = k / x</b></p>
<p>Example: a journey of <b>120 km</b>. The faster you go, the less time you take.</p>
<table>
<tr><th>Speed km/h (x)</th><td>20</td><td>30</td><td>40</td><td>60</td><td>120</td></tr>
<tr><th>Time in h (y)</th><td>6</td><td>4</td><td>3</td><td>2</td><td>1</td></tr>
<tr><th>x · y</th><td>120</td><td>120</td><td>120</td><td>120</td><td>120</td></tr>
</table>
<p><b>How to recognise it</b>: if x <b>doubles</b>, y is <b>halved</b>; if x triples, y becomes a third. x and y can never be 0.</p>
<p><b>Careful</b>: «one goes up and the other goes down» is not enough! If you have €10 and you spend some, the money left decreases, but 10 − spent is not a constant product: it is not inverse proportionality.</p>`
    },
    {
      type: "svg",
      title: "The graph of inverse proportionality",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#eff6ff"/>
<line x1="60" y1="290" x2="60" y2="20" stroke="#1e3a8a" stroke-width="3"/>
<line x1="50" y1="280" x2="360" y2="280" stroke="#1e3a8a" stroke-width="3"/>
<path d="M88 52 L100 120 L120 173 L140 200 L180 227 L220 240 L260 248 L300 253 L345 257" fill="none" stroke="#2563eb" stroke-width="5" stroke-linejoin="round"/>
<circle cx="100" cy="120" r="7" fill="#dc2626"/><circle cx="140" cy="200" r="7" fill="#dc2626"/><circle cx="220" cy="240" r="7" fill="#dc2626"/>
<rect x="60" y="120" width="40" height="160" fill="#f59e0b" opacity="0.25"/>
<rect x="60" y="240" width="160" height="40" fill="#10b981" opacity="0.25"/>
<text x="100" y="302" font-size="14" text-anchor="middle">1</text><text x="140" y="302" font-size="14" text-anchor="middle">2</text><text x="220" y="302" font-size="14" text-anchor="middle">4</text>
<text x="45" y="125" font-size="14" text-anchor="end">4</text><text x="45" y="205" font-size="14" text-anchor="end">2</text><text x="45" y="245" font-size="14" text-anchor="end">1</text>
<text x="365" y="290" font-size="16" font-weight="bold">x</text><text x="68" y="20" font-size="16" font-weight="bold">y</text>
<text x="390" y="80" font-size="22" fill="#1d4ed8" font-weight="bold">x · y = 4</text>
<text x="390" y="118" font-size="16" fill="#1e3a8a">• it is a branch of a</text>
<text x="390" y="140" font-size="16" fill="#1e3a8a">  rectangular hyperbola</text>
<text x="390" y="168" font-size="16" fill="#1e3a8a">• it never touches the axes</text>
<text x="390" y="196" font-size="16" fill="#1e3a8a">• the coloured rectangles</text>
<text x="390" y="218" font-size="16" fill="#1e3a8a">  have the same area (k)</text>
</svg>`,
      caption: "The graph is a curve called a rectangular hyperbola: it gets closer to the axes without ever touching them."
    },
    {
      type: "widget",
      title: "Rectangles with the same area",
      widget: "areaGrid",
      options: { w: 6, h: 2, max: 12 },
      caption: "Try building all the rectangles with area 12: 1 × 12, 2 × 6, 3 × 4, 4 × 3, 6 × 2, 12 × 1. Base and height are inversely proportional!"
    },
    {
      type: "example",
      title: "Worked example: direct or inverse?",
      html: `<ul>
<li><b>Petrol and kilometres</b>: a car does 20 km on 1 litre. Litres and km are <b>directly</b> proportional (k = 20 km/l): with 35 litres it does 700 km.</li>
<li><b>Workers and days</b>: 6 workers build a wall in 10 days. Workers and days are <b>inversely</b> proportional (k = 60 «worker-days»): 12 workers take 60 : 12 = <b>5 days</b>; 4 workers take 60 : 4 = <b>15 days</b>.</li>
<li><b>Ingredients and people</b>: direct. <b>Slices of pizza and friends</b> (fixed pizza): inverse.</li>
<li><b>Age and shoe size</b>: neither!</li>
</ul>`
    },
    {
      type: "example",
      title: "Worked example: solving a problem in three steps",
      html: `<p><i>To fill a swimming pool it takes 8 hours with 3 identical pumps. How long does it take with 4 pumps?</i></p>
<ol>
<li><b>I recognise</b>: more pumps → less time; with twice the pumps the time is halved → <b>inverse</b>.</li>
<li><b>I find k</b>: k = 3 × 8 = 24 («pump-hours»).</li>
<li><b>I calculate</b>: time = 24 : 4 = <b>6 hours</b>.</li>
</ol>
<p>With a proportion: in the inverse case you write it by <b>inverting</b> one ratio: 3 : 4 = x : 8 → x = 3 × 8 : 4 = 6. ✓</p>`
    },
    {
      type: "widget",
      title: "Direct or inverse?",
      widget: "classify",
      options: {
        groups: ["📈 Direct (y/x constant)", "📉 Inverse (x·y constant)", "🚫 Neither of the two"],
        items: [
          ["Kg of apples and price paid", 0], ["Side of a square and perimeter", 0], ["Hours worked and pay (hourly)", 0],
          ["Speed and time for 100 km", 1], ["Number of friends and slices of a cake each", 1], ["Workers and days for a job", 1],
          ["Age and height", 2], ["Side of a square and area", 2], ["Money spent and money left", 2]
        ]
      },
      caption: "Always check: if x doubles, does y double (direct), get halved (inverse) or do something else?"
    },
    {
      type: "curiosity",
      title: "Did you know…? Boyle's law",
      html: `<p>In <b>1662</b> the Irish chemist <b>Robert Boyle</b> discovered that, at constant temperature, the <b>pressure</b> and the <b>volume</b> of a gas are <b>inversely proportional</b>: p · V = constant. If you squeeze a plugged syringe down to half its volume, the air pressure inside doubles. It is the reason why your ears «block up» on a plane or underwater!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Hooke's law",
      html: `<p>In <b>1678</b> <b>Robert Hooke</b> published his law: the <b>extension</b> of a spring is <b>directly proportional</b> to the force pulling it (as long as you do not deform it). It is the principle of the <b>spring balance</b> and of old spring scales: if you hang a double weight, the spring stretches twice as much. Hooke first announced the law as a Latin anagram, «ceiiinosssttuv», so that nobody could steal the idea: it means <i>ut tensio, sic vis</i>, «as the extension, so the force».</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand proportionality",
      intro: "If formulas do not convince you, try seeing proportionality in other ways.",
      tabs: [
        {
          label: "🧊 The same cubes",
          html: `<p>Here are <b>12 cubes</b> in 3 rows of 4. Move the sliders and try arranging them differently <b>without adding or removing any</b>: 2 rows of 6, 4 rows of 3, 6 rows of 2… The number of rows and the cubes per row are <b>inversely proportional</b> (the product stays 12). If instead you add rows of 4 cubes, the total grows <b>directly</b>: 1 row = 4, 2 rows = 8, 3 rows = 12.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "🇳🇱 The Dutch ratio table",
          html: `<p>In Dutch schools (the <b>realistic mathematics</b> method) they use the <b>verhoudingstabel</b>, the «ratio table»: you write the pairs in columns and do simple operations <b>on both rows</b>.</p>
<table>
<tr><th>Notebooks</th><td>4</td><td>2</td><td>1</td><td>10</td></tr>
<tr><th>€</th><td>8</td><td>4</td><td>2</td><td>20</td></tr>
<tr><td></td><td></td><td>:2</td><td>:2</td><td>×10</td></tr>
</table>
<p>In the direct case you do the <b>same operation</b> on top and bottom. In the inverse case you do the <b>opposite</b> operation: if you multiply by 2 on top, you divide by 2 below.</p>`
        },
        {
          label: "🚲 The bike analogy",
          html: `<p>Pedal at a steady pace: the <b>more time</b> you pedal, the <b>more distance</b> you cover → direct (the constant is the speed).</p>
<p>Now you have to ride a fixed route of 30 km: the <b>faster</b> you go, the <b>less time</b> it takes → inverse (the constant is the distance).</p>
<p>The same trio <b>distance = speed × time</b> gives a direct or an inverse proportionality depending on <b>which quantity you keep fixed</b>!</p>`
        },
        {
          label: "📊 The two graphs compared",
          html: `<p>Look at the two shapes: the direct one is a <b>straight line starting from the origin</b>; the inverse one is a <b>falling curve</b> that gets closer to the axes. If you see a line that does not pass through the origin, it is not direct proportionality!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<line x1="40" y1="230" x2="40" y2="20" stroke="#334155" stroke-width="3"/><line x1="30" y1="220" x2="270" y2="220" stroke="#334155" stroke-width="3"/>
<line x1="40" y1="220" x2="250" y2="40" stroke="#16a34a" stroke-width="5"/>
<text x="150" y="250" font-size="17" text-anchor="middle" fill="#15803d" font-weight="bold">DIRECT: y = kx</text>
<line x1="330" y1="230" x2="330" y2="20" stroke="#334155" stroke-width="3"/><line x1="320" y1="220" x2="570" y2="220" stroke="#334155" stroke-width="3"/>
<path d="M345 30 Q360 160 400 180 Q460 205 560 210" fill="none" stroke="#2563eb" stroke-width="5"/>
<text x="450" y="250" font-size="17" text-anchor="middle" fill="#1d4ed8" font-weight="bold">INVERSE: y = k/x</text>
</svg>`
        },
        {
          label: "🇸🇬 The bar model (Singapore)",
          html: "<p>In <b>Singapore</b>, one of the countries with the best results in mathematics, ratio problems are solved by drawing <b>bars made of identical blocks</b> (the <b>bar model</b>). The ratio 3 : 2 simply means «3 blocks against 2 blocks».</p><p><b>Problem 1</b>: in a cake, flour and sugar are in the ratio <b>3 : 2</b>. If I use 450 g of flour, how much sugar do I need?</p><ol><li>Draw the flour with <b>3 blocks</b> and the sugar with <b>2 blocks</b> of the same size.</li><li>3 blocks = 450 g → 1 block = 450 : 3 = <b>150 g</b>.</li><li>Sugar = 2 blocks = <b>300 g</b>.</li></ol><p><b>Problem 2</b>: Anna and Luke share €45 in the ratio <b>2 : 3</b>.</p><ol><li>In all there are 2 + 3 = <b>5 blocks</b> = €45.</li><li>1 block = 45 : 5 = <b>€9</b>.</li><li>Anna = 2 × 9 = <b>€18</b>, Luke = 3 × 9 = <b>€27</b>. Check: 18 + 27 = 45 ✔</li></ol><p>The secret of direct proportionality is exactly this: <b>the blocks are all equal</b>. If you double the flour, the block doubles and so the sugar doubles too.</p>",
          svg: "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#f8fafc\"/><text x=\"20\" y=\"40\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Flour</text><rect x=\"110\" y=\"18\" width=\"70\" height=\"36\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><rect x=\"180\" y=\"18\" width=\"70\" height=\"36\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><rect x=\"250\" y=\"18\" width=\"70\" height=\"36\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"20\" y=\"98\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Sugar</text><rect x=\"110\" y=\"76\" width=\"70\" height=\"36\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><rect x=\"180\" y=\"76\" width=\"70\" height=\"36\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><path d=\"M110,10 Q215,-6 320,10\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"330\" y=\"42\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\" font-weight=\"bold\">= 450 g → 1 block = 150 g</text><text x=\"260\" y=\"100\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e3a8a\" font-weight=\"bold\">→ sugar = 2 × 150 = 300 g</text><line x1=\"20\" y1=\"140\" x2=\"580\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><text x=\"20\" y=\"190\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Anna</text><rect x=\"110\" y=\"168\" width=\"50\" height=\"36\" fill=\"#bbf7d0\" stroke=\"#166534\" stroke-width=\"2\"/><rect x=\"160\" y=\"168\" width=\"50\" height=\"36\" fill=\"#bbf7d0\" stroke=\"#166534\" stroke-width=\"2\"/><text x=\"20\" y=\"248\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Luke</text><rect x=\"110\" y=\"226\" width=\"50\" height=\"36\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"2\"/><rect x=\"160\" y=\"226\" width=\"50\" height=\"36\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"2\"/><rect x=\"210\" y=\"226\" width=\"50\" height=\"36\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"2\"/><path d=\"M268,168 Q290,215 268,262\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"290\" y=\"205\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">5 blocks = €45 → 1 block = €9</text><text x=\"290\" y=\"232\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">Anna 2 × 9 = €18   Luke 3 × 9 = €27</text></svg>"
        },
        {
          label: "🇫🇷 The French «produit en croix»",
          html: "<p>In <b>French</b> middle schools (the <i>collège</i>) they make great use of the <b>tableau de proportionnalité</b> (proportionality table) and, to find the missing number, the <b>produit en croix</b>, the «cross product».</p><p><b>Example</b>: 4 notebooks cost €6. How much do 10 notebooks cost?</p><ol><li>Write the table: notebooks on top (4 and 10), euros below (6 and ?).</li><li>Multiply the two numbers you know <b>diagonally</b>: 10 × 6 = 60.</li><li>Divide by the remaining number: 60 : 4 = <b>€15</b>.</li></ol><p><b>Why does it work?</b> The table is a proportion: 4 : 6 = 10 : ?. By the <b>fundamental property of proportions</b>, the product of the means is equal to the product of the extremes: 4 × ? = 6 × 10.</p><p>⚠️ <b>Careful</b>: the cross product works <b>only</b> for <b>direct</b> proportionality. In the inverse case you multiply the numbers in the <b>same column</b>: if 3 workers take 8 days, 6 workers take 3 × 8 : 6 = <b>4 days</b> (the product 24 stays constant).</p>",
          svg: "<svg viewBox=\"0 0 600 250\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"250\" fill=\"#f8fafc\"/><rect x=\"120\" y=\"60\" width=\"120\" height=\"60\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/><rect x=\"240\" y=\"60\" width=\"120\" height=\"60\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/><rect x=\"120\" y=\"120\" width=\"120\" height=\"60\" fill=\"#fef9c3\" stroke=\"#a16207\" stroke-width=\"2\"/><rect x=\"240\" y=\"120\" width=\"120\" height=\"60\" fill=\"#fef9c3\" stroke=\"#a16207\" stroke-width=\"2\"/><rect x=\"20\" y=\"60\" width=\"100\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"2\"/><rect x=\"20\" y=\"120\" width=\"100\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"70\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">notebooks</text><text x=\"70\" y=\"156\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">euros</text><text x=\"180\" y=\"100\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><text x=\"300\" y=\"100\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><text x=\"180\" y=\"160\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6</text><text x=\"300\" y=\"160\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">?</text><line x1=\"205\" y1=\"92\" x2=\"280\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"205\" y1=\"150\" x2=\"280\" y2=\"92\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/><text x=\"390\" y=\"90\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">? = 10 × 6 : 4</text><text x=\"390\" y=\"125\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">? = 60 : 4 = €15</text><text x=\"390\" y=\"170\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">multiply crosswise,</text><text x=\"390\" y=\"192\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">divide by the number</text><text x=\"390\" y=\"214\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">that is left</text><text x=\"240\" y=\"230\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\" font-weight=\"bold\">It only works for DIRECT proportionality!</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Proportionality map",
      nodes: [
        { id: "grand", label: "Variable quantities", x: 50, y: 6, color: "#334155", html: "Amounts that can change: x and y.", why: "The idea that one quantity depends on another (a function) was developed in the 1600s by <b>Galileo</b>, <b>Descartes</b> and then <b>Leibniz</b>, who first used the word «function» (1673)." },
        { id: "dir", label: "Direct proportionality", x: 22, y: 30, color: "#16a34a", html: "y / x = k → y = kx.", why: "It comes from the theory of proportions: if y₁ : x₁ = y₂ : x₂ for all pairs, the ratio is always the same number k." },
        { id: "inv", label: "Inverse proportionality", x: 78, y: 30, color: "#2563eb", html: "x · y = k → y = k / x.", why: "It is equivalent to saying that y is directly proportional to 1/x. In medieval abacus treatises it was the «inverse rule of three»." },
        { id: "k", label: "Constant k", x: 50, y: 48, color: "#ca8a04", html: "The number that does not change: ratio or product.", why: "It often has a physical meaning: the unit price, the speed, the fixed distance. Finding the constant means understanding the «rule» of the phenomenon." },
        { id: "retta", label: "Line through the origin", x: 18, y: 66, color: "#22c55e", html: "Graph of the direct case.", why: "The Cartesian plane was devised by <b>René Descartes</b> in the <i>Géométrie</i> of 1637: he joined algebra and geometry. Every point (x; kx) lies on the same line because the «slope» y/x is always k." },
        { id: "iperb", label: "Rectangular hyperbola", x: 82, y: 66, color: "#3b82f6", html: "Graph of the inverse case.", why: "The name comes from <b>Apollonius of Perga</b> (3rd century BC), who studied the conic sections: ellipse, parabola, hyperbola. All the rectangles between the origin and a point of the curve have the same area k." },
        { id: "tab", label: "Tables", x: 50, y: 72, color: "#9333ea", html: "Pairs of values: you check the ratio or the product.", why: "Tables are the oldest way to study a relationship: the Babylonians had tables of reciprocals (1/x) to do divisions, about 4000 years ago." },
        { id: "fisica", label: "Laws of nature", x: 50, y: 92, color: "#dc2626", html: "Hooke (direct), Boyle (inverse)…", why: "Many scientific laws discovered in the 1600s with the <b>experimental method</b> are proportionalities: by measuring and putting the data in a table and a graph, scientists recognised the relationship." }
      ],
      edges: [
        ["grand", "dir", "can be"],
        ["grand", "inv", "can be"],
        ["dir", "k", "ratio ="],
        ["inv", "k", "product ="],
        ["dir", "retta", "graph"],
        ["inv", "iperb", "graph"],
        ["k", "tab", "is checked with"],
        ["tab", "fisica", "reveals"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: inverse proportionality and problems",
      questions: [
        { type: "num", q: "x · y = 36. If x = 9, what is y?", answer: 4, explain: "y = 36 : 9 = 4." },
        { type: "num", q: "5 workers finish a job in 12 days. How many days do 10 workers need?", answer: 6, unit: "days", explain: "Inverse: k = 60 → 60 : 10 = 6." },
        { type: "mc", q: "The graph of inverse proportionality is…", options: ["a straight line through the origin", "a rectangular hyperbola", "a parabola"], answer: 1, explain: "A rectangular hyperbola, which does not touch the axes." }
      ]
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li><b>Direct</b>: y/x = k, y = kx; x doubles → y doubles; graph: <b>line through the origin</b>.</li>
<li><b>Inverse</b>: x·y = k, y = k/x; x doubles → y is halved; graph: <b>rectangular hyperbola</b>.</li>
<li>To decide, check the <b>ratio</b> or the <b>product</b> in a table: «they grow together» or «one grows and the other falls» is not enough.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Directly proportional quantities", d: "Quantities whose ratio is constant (y = kx)." },
    { t: "Inversely proportional quantities", d: "Quantities whose product is constant (y = k/x)." },
    { t: "Constant of proportionality", d: "The value k that stays the same for all pairs." },
    { t: "Function", d: "A rule that links each value of x to exactly one value of y." },
    { t: "Cartesian plane", d: "A plane with two perpendicular axes (x and y) used to represent pairs of numbers." },
    { t: "Origin", d: "The point (0; 0) where the axes meet." },
    { t: "Rectangular hyperbola", d: "The curve that is the graph of inverse proportionality." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In a direct proportionality, what stays constant?", options: ["The sum x + y", "The ratio y / x", "The product x · y"], answer: 1, explain: "y/x = k." },
      { type: "mc", q: "In an inverse proportionality, what stays constant?", options: ["The product x · y", "The difference y − x", "The ratio y / x"], answer: 0, explain: "x · y = k." },
      { type: "num", q: "y = 3x. What is y if x = 12?", answer: 36, explain: "3 × 12 = 36." },
      { type: "num", q: "3 kg of bread cost €7.50. How much do 5 kg cost (in €)?", answer: 12.5, tol: 0.01, unit: "€", explain: "Direct: 7.50 : 3 = €2.50/kg → 2.50 × 5 = €12.50." },
      { type: "num", q: "At 60 km/h a journey lasts 3 hours. How many hours does it last at 90 km/h?", answer: 2, unit: "h", explain: "Inverse: 60 × 3 = 180 km → 180 : 90 = 2 h." },
      { type: "tf", q: "The graph of direct proportionality always passes through the origin.", answer: true, explain: "If x = 0, y = k · 0 = 0." },
      { type: "tf", q: "If one quantity increases and the other decreases, they are always inversely proportional.", answer: false, explain: "The product must be constant: e.g. money spent/left is not." },
      { type: "mc", q: "The number of tickets and the total cost (ticket at a fixed price) are…", options: ["directly proportional", "inversely proportional", "not proportional"], answer: 0, explain: "Total cost / tickets = fixed price." },
      { type: "num", q: "A cake is divided into equal parts: with 4 friends each gets 150 g. How many grams does each get with 6 friends?", answer: 100, unit: "g", explain: "Inverse: 4 × 150 = 600 g → 600 : 6 = 100 g." },
      { type: "mc", q: "Which table shows an inverse proportionality?", options: ["x: 1, 2, 4 — y: 3, 6, 12", "x: 1, 2, 4 — y: 8, 4, 2", "x: 1, 2, 4 — y: 5, 6, 8"], answer: 1, explain: "1·8 = 2·4 = 4·2 = 8: constant product." },
      { type: "order", q: "Put the steps for solving a proportionality problem in order.", items: ["I work out whether it is direct or inverse", "I calculate the constant k", "I calculate the required value", "I check that the result makes sense"], explain: "Recognise, find k, calculate, check." }
    ],
    gen: [["proportion", 2]]
  }
});
