TOPIC('en', {
  id: "m3-mat-numeri-relativi",
  title: "Signed numbers (positive and negative)",
  intro: "In winter the temperature drops below zero, the Dead Sea is below sea level, a bank account can go \"into the red\". To describe these situations we need <b>signed numbers</b> (relative numbers): numbers with a <b>sign</b>, + or −. Let's learn how to compare them and how to do all four operations with them.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "What signed numbers are",
      html: `<p><b>Signed numbers</b> (<i>numeri relativi</i>) are numbers preceded by a <b>sign</b>:</p>
<ul>
<li><b>positive</b> (+): greater than zero → +1, +5, +3.7, +2/3;</li>
<li><b>negative</b> (−): less than zero → −1, −8, −0.5, −3/4;</li>
<li><b>zero</b> is neither positive nor negative.</li>
</ul>
<p>They are called "relative" because their value is referred (<i>relative</i>) to a starting point, zero: 0 °C, sea level, the ground floor of a building.</p>
<p>The <b>signed integers</b> form the set <b>ℤ</b> = {…, −3, −2, −1, 0, +1, +2, +3, …}. The letter Z comes from the German <i>Zahlen</i>, "numbers". If we also include signed fractions and decimals, we get the <b>signed rational numbers ℚ</b>.</p>`
    },
    {
      type: "text",
      title: "Absolute value, opposite numbers and same-sign numbers",
      html: `<ul>
<li>The <b>absolute value</b> (or modulus) is the number without its sign: it is the <b>distance from zero</b>. It is written between bars: |−7| = 7, |+7| = 7.</li>
<li>Two numbers are <b>opposites</b> if they have the same absolute value and different signs: +5 and −5. Their sum is 0.</li>
<li>Two numbers have the <b>same sign</b> if they have the <b>same sign</b> (+3 and +8; −2 and −9), and <b>different signs</b> if their signs differ (+4 and −6).</li>
</ul>`
    },
    {
      type: "svg",
      title: "The number line",
      svg: `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="230" fill="#f8fafc"/>
<line x1="20" y1="120" x2="620" y2="120" stroke="#1f2937" stroke-width="4"/>
<polygon points="620,120 604,111 604,129" fill="#1f2937"/>
<g stroke="#1f2937" stroke-width="3">
<line x1="70" y1="110" x2="70" y2="130"/><line x1="120" y1="110" x2="120" y2="130"/><line x1="170" y1="110" x2="170" y2="130"/><line x1="220" y1="110" x2="220" y2="130"/><line x1="270" y1="110" x2="270" y2="130"/>
<line x1="320" y1="102" x2="320" y2="138"/>
<line x1="370" y1="110" x2="370" y2="130"/><line x1="420" y1="110" x2="420" y2="130"/><line x1="470" y1="110" x2="470" y2="130"/><line x1="520" y1="110" x2="520" y2="130"/><line x1="570" y1="110" x2="570" y2="130"/>
</g>
<g font-size="17" text-anchor="middle">
<text x="70" y="158" fill="#dc2626">−5</text><text x="120" y="158" fill="#dc2626">−4</text><text x="170" y="158" fill="#dc2626">−3</text><text x="220" y="158" fill="#dc2626">−2</text><text x="270" y="158" fill="#dc2626">−1</text>
<text x="320" y="160" fill="#1f2937" font-weight="bold">0</text>
<text x="370" y="158" fill="#2563eb">+1</text><text x="420" y="158" fill="#2563eb">+2</text><text x="470" y="158" fill="#2563eb">+3</text><text x="520" y="158" fill="#2563eb">+4</text><text x="570" y="158" fill="#2563eb">+5</text>
</g>
<text x="170" y="200" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">← NEGATIVE</text>
<text x="470" y="200" font-size="18" text-anchor="middle" fill="#2563eb" font-weight="bold">POSITIVE →</text>
<circle cx="170" cy="120" r="8" fill="#a855f7"/><circle cx="470" cy="120" r="8" fill="#a855f7"/>
<path d="M170 100 Q245 40 320 100" fill="none" stroke="#a855f7" stroke-width="3"/>
<path d="M320 100 Q395 40 470 100" fill="none" stroke="#a855f7" stroke-width="3"/>
<text x="245" y="55" font-size="15" text-anchor="middle" fill="#7e22ce">distance 3</text>
<text x="395" y="55" font-size="15" text-anchor="middle" fill="#7e22ce">distance 3</text>
<text x="320" y="30" font-size="16" text-anchor="middle" fill="#7e22ce">−3 and +3 are opposites: |−3| = |+3| = 3</text>
</svg>`,
      caption: "The further to the right a number is, the greater it is. Opposites are symmetric about zero."
    },
    {
      type: "text",
      title: "Comparing signed numbers",
      html: `<p>On the number line <b>the greater number is the one further to the right</b>. From this come the rules:</p>
<ul>
<li>every <b>positive</b> number is greater than zero and than every negative number: +1 &gt; −100;</li>
<li>between two <b>positives</b> the one with the greater absolute value is greater: +8 &gt; +3;</li>
<li>between two <b>negatives</b> the one with the <b>smaller</b> absolute value is greater: −3 &gt; −8 (it is "less cold" at −3 °C than at −8 °C!).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Jump along the number line",
      widget: "numberLine",
      options: { min: -10, max: 10, step: 3, start: 2, marks: [-5, 0, 5] },
      caption: "Start from +2 and make jumps back of 3: −1, −4, −7… Every jump to the left is like adding −3."
    },
    {
      type: "text",
      title: "Addition and subtraction",
      html: `<p><b>Addition</b> (algebraic sum):</p>
<ul>
<li><b>numbers with the same sign</b>: add the absolute values and put the <b>common sign</b>. (+3) + (+5) = +8; (−3) + (−5) = −8.</li>
<li><b>numbers with different signs</b>: subtract the smaller absolute value from the greater and put the <b>sign of the number with the greater absolute value</b>. (+7) + (−4) = +3; (−9) + (+2) = −7.</li>
</ul>
<p><b>Subtraction</b>: subtracting a number is the same as <b>adding its opposite</b>.</p>
<ul>
<li>(+5) − (+8) = (+5) + (−8) = −3</li>
<li>(−4) − (−6) = (−4) + (+6) = +2</li>
</ul>
<p>Thanks to signed numbers subtraction is <b>always possible</b>: 3 − 7 is no longer "impossible", it makes −4!</p>
<p><b>Rule of brackets</b>: a <b>+</b> in front of the bracket removes it leaving the signs; a <b>−</b> in front removes it <b>changing</b> all the signs: −(+3 − 5) = −3 + 5.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: comparing and adding",
      questions: [
        { type: "mc", q: "Which is the greatest number?", options: ["−12", "−2", "−7"], answer: 1, explain: "Among negatives the one closest to zero is greater: −2." },
        { type: "num", q: "(−6) + (+10) = ?", answer: 4, explain: "Different signs: 10 − 6 = 4, sign of the one with the larger absolute value (+): +4." },
        { type: "num", q: "(−3) − (+5) = ?", answer: -8, explain: "(−3) + (−5) = −8." }
      ]
    },
    {
      type: "text",
      title: "Multiplication, division and powers",
      html: `<p>You multiply (or divide) the absolute values and apply the <b>rule of signs</b>:</p>
<table>
<tr><th>×  :</th><th>+</th><th>−</th></tr>
<tr><th>+</th><td>+</td><td>−</td></tr>
<tr><th>−</th><td>−</td><td>+</td></tr>
</table>
<p>In short: <b>same signs → +</b>, <b>different signs → −</b>.</p>
<ul>
<li>(−4) × (−3) = +12 &nbsp; (+4) × (−3) = −12 &nbsp; (−20) : (+5) = −4 &nbsp; (−20) : (−5) = +4</li>
</ul>
<p><b>Powers</b>: if the base is positive the result is always positive. If the base is <b>negative</b>:</p>
<ul>
<li><b>even</b> exponent → <b>positive</b> result: (−2)<sup>4</sup> = +16;</li>
<li><b>odd</b> exponent → <b>negative</b> result: (−2)<sup>3</sup> = −8.</li>
</ul>
<p>⚠️ Careful: (−3)<sup>2</sup> = +9, but −3<sup>2</sup> = −9, because without brackets the exponent applies only to the 3!</p>`
    },
    {
      type: "example",
      title: "Worked example: the thermometer",
      html: `<p>At 6 in the morning in Cortina it is <b>−7 °C</b>. At midday the temperature has risen by <b>12 °C</b>. At night it falls by <b>9 °C</b> compared with midday.</p>
<ul>
<li>Midday: (−7) + (+12) = <b>+5 °C</b></li>
<li>Night: (+5) + (−9) = <b>−4 °C</b></li>
<li>Temperature range between the maximum and the minimum: (+5) − (−7) = 5 + 7 = <b>12 °C</b></li>
</ul>`
    },
    {
      type: "example",
      title: "Worked example: the lift and the bank account",
      html: `<p><b>Lift</b>: the ground floor is 0, the garages are on floors −1 and −2. Marta goes up from floor −2 to floor +5: how many floors has she gone up? (+5) − (−2) = <b>7 floors</b>.</p>
<p><b>Bank account</b>: Luke has €40. He pays for 3 subscriptions of €18 each: 40 + 3 × (−18) = 40 − 54 = <b>−€14</b>. The account is "in the red" by €14: it is a <b>debt</b>.</p>
<p><b>Expression</b>: −2 × (−3 + 5) − (−4)² : 8 = −2 × (+2) − 16 : 8 = −4 − 2 = <b>−6</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Red and black rods",
      html: `<p>More than 2000 years ago, in the Chinese book <i>The Nine Chapters on the Mathematical Art</i>, calculations were done with <b>rods</b>: <b>red</b> ones for positive numbers and <b>black</b> ones for negative numbers. In India the mathematician <b>Brahmagupta</b>, in 628 AD, wrote the rules of signs speaking of <b>"fortunes"</b> (positives) and <b>"debts"</b> (negatives): <i>"a debt multiplied by a debt is a fortune"</i>. In Europe negative numbers were accepted much later: even in the 16th century some called them "absurd numbers".</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Temperature and altitude records",
      html: `<ul>
<li>The lowest temperature measured on Earth is <b>−89.2 °C</b>, at Vostok station in Antarctica, on 21 July 1983.</li>
<li>The shore of the <b>Dead Sea</b> is the lowest point of dry land on the planet: about <b>−430 m</b> below sea level (and it keeps sinking).</li>
<li>The <b>Mariana Trench</b> reaches about <b>−10,900 m</b>, while Everest is at <b>+8,849 m</b>: between the two there are almost 20 km!</li>
<li>The zero of the <b>Kelvin</b> scale (absolute zero) corresponds to <b>−273.15 °C</b>: nothing can be colder.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>Absolute value = distance from zero. Opposites: same absolute value, different sign.</li>
<li>Sum: <b>same signs</b> → add and keep the sign; <b>different signs</b> → subtract and take the sign of the "stronger" one.</li>
<li>Subtracting = adding the opposite.</li>
<li>Product and quotient: <b>same signs +</b>, <b>different signs −</b>.</li>
<li>Negative base: even exponent → +, odd → −.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand signed numbers",
      intro: "Not convinced by the rule of signs? Here are other ways to \"see\" it: Chinese rods, pairs that cancel out, the film played backwards, the line to walk along.",
      tabs: [
        {
          label: "🇨🇳 Red and black rods",
          html: `<p>As in ancient China, use two colours: <b style="color:#dc2626">red = +1</b> and <b>black = −1</b>. A red and a black together <b>cancel out</b> (make 0): a "zero pair".</p>
<p>(+5) + (−3): put down 5 reds and 3 blacks. Remove 3 red-black pairs. <b>2 reds → +2</b> are left.</p>
<p>(+2) − (+5): I must take away 5 reds but I only have 2! I add 3 zero pairs (3 reds + 3 blacks: the value does not change), now I take away 5 reds. <b>3 blacks → −3</b> are left. That is why subtracting = adding the opposite!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fefce8"/>
<text x="20" y="35" font-size="20" fill="#1f2937" font-weight="bold">(+5) + (−3) = +2</text>
<g stroke-width="10" stroke-linecap="round">
<line x1="40" y1="60" x2="40" y2="140" stroke="#dc2626"/><line x1="70" y1="60" x2="70" y2="140" stroke="#dc2626"/><line x1="100" y1="60" x2="100" y2="140" stroke="#dc2626"/><line x1="130" y1="60" x2="130" y2="140" stroke="#dc2626"/><line x1="160" y1="60" x2="160" y2="140" stroke="#dc2626"/>
<line x1="100" y1="160" x2="100" y2="220" stroke="#111827"/><line x1="130" y1="160" x2="130" y2="220" stroke="#111827"/><line x1="160" y1="160" x2="160" y2="220" stroke="#111827"/>
</g>
<rect x="85" y="50" width="90" height="180" rx="12" fill="none" stroke="#7c3aed" stroke-width="3" stroke-dasharray="8 5"/>
<text x="190" y="140" font-size="16" fill="#7c3aed">3 red+black pairs = 0</text>
<text x="20" y="235" font-size="15" fill="#dc2626">2 reds are left</text>
<text x="390" y="80" font-size="20" fill="#dc2626" font-weight="bold">red = +1</text>
<text x="390" y="120" font-size="20" fill="#111827" font-weight="bold">black = −1</text>
<text x="390" y="160" font-size="20" fill="#7c3aed" font-weight="bold">red + black = 0</text>
</svg>`
        },
        {
          label: "🎬 The film played backwards",
          html: `<p>Why does "minus times minus make plus"? Imagine a video of a car:</p>
<ul>
<li>speed <b>+</b> (forwards) × time <b>+</b> (normal video) → the car goes forwards: <b>+</b></li>
<li>speed <b>−</b> (reversing) × time <b>+</b> → the car goes backwards: <b>−</b></li>
<li>speed <b>+</b> × time <b>−</b> (video played backwards) → it looks as if it goes backwards: <b>−</b></li>
<li>speed <b>−</b> (reversing) × time <b>−</b> (video played backwards) → it looks as if it goes <b>forwards</b>: <b>+</b>!</li>
</ul>
<p>Two "reversals" cancel out, just as in English "it's not true that it's not raining" means "it's raining".</p>`
        },
        {
          label: "🐸 The frog on the line",
          html: `<p>Use the line: the frog starts from the first number. <b>Adding a positive</b> = jumping right; <b>adding a negative</b> = jumping left. <b>Subtracting</b> = turning round before jumping.</p>
<p>Try it: start from −4, jump +3 twice: where do you land? (−4) + 2 × (+3) = <b>+2</b>.</p>`,
          widget: "numberLine",
          options: { min: -12, max: 12, step: 3, start: -4 }
        },
        {
          label: "🇺🇸 Algebra tiles",
          html: `<p>In American schools they use coloured tiles called <b>algebra tiles</b>: little yellow squares (+1) and red ones (−1). The method is the same as the Chinese rods: the <b>zero pairs</b> are removed.</p>
<p>For multiplication: (−2) × (+3) = "take 3 times 2 red tiles" = 6 reds = −6. And (−2) × (−3)? "<b>Take away</b> 3 times 2 red tiles": you start from zero (lots of zero pairs), take away 6 reds… 6 yellows are left = <b>+6</b>!</p>
<p>Below you can build a rectangle of cubes: rows × columns is the absolute value of the product; the sign is given by the rule.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 2, b: 3 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of signed numbers",
      nodes: [
        { id: "naturali", label: "Natural numbers ℕ", x: 50, y: 6, color: "#64748b", html: "0, 1, 2, 3, … the numbers for counting.", why: "They are the oldest: they were born to count objects. But with them subtraction is not always possible (3 − 7 = ?)." },
        { id: "relativi", label: "Signed integers ℤ", x: 50, y: 28, color: "#2563eb", html: "…, −2, −1, 0, +1, +2, … numbers with a sign.", why: "They were born to make subtraction always possible and to represent quantities with two directions (debts/credits, above/below). Used in China (Nine Chapters) and in India (Brahmagupta, 628); in Europe fully accepted only from the 17th century." },
        { id: "retta", label: "Number line", x: 15, y: 48, color: "#16a34a", html: "A line with an origin (0), a direction and a unit of measure.", why: "The idea of representing numbers as points on a line, with negatives on the left, spread in the 17th century with Descartes's analytic geometry and with mathematicians such as John Wallis (1685)." },
        { id: "assoluto", label: "Absolute value", x: 85, y: 48, color: "#a855f7", html: "The distance from zero: |−5| = 5.", why: "A distance cannot be negative: that is why the absolute value is always ≥ 0. The symbol |x| was introduced by Karl Weierstrass in 1841." },
        { id: "somma", label: "Algebraic sum", x: 25, y: 72, color: "#f59e0b", html: "Same signs: add and keep the common sign. Different signs: subtract and take the sign of the larger absolute value.", why: "Think of movements along the line: going right and left compensate each other. Reds and blacks that cancel in pairs." },
        { id: "sottrazione", label: "Subtraction", x: 50, y: 60, color: "#ef4444", html: "a − b = a + (−b): you add the opposite.", why: "Turning subtraction into addition lets you use a single rule; it is always possible because in ℤ every number has its opposite." },
        { id: "segni", label: "Rule of signs", x: 75, y: 72, color: "#0ea5e9", html: "Same signs → +; different signs → −.", why: "It is not an arbitrary rule: it is the only one that keeps the distributive property valid. In fact (−1)·(1 + (−1)) = (−1)·0 = 0, so (−1)·1 + (−1)·(−1) = 0 → (−1)·(−1) must be +1." },
        { id: "potenze", label: "Powers", x: 75, y: 92, color: "#7c3aed", html: "Negative base: even exponent → +, odd → −.", why: "It is the rule of signs applied several times: every pair of negative factors gives a positive; if an 'unpaired' factor is left, the result is negative." },
        { id: "realta", label: "In real life", x: 25, y: 92, color: "#14b8a6", html: "Temperatures, altitudes, floors, bank balances, time zones, years BC.", why: "Wherever you need a reference point (zero) and two opposite directions. Curiosity: there is no year 0 in the calendar: from 1 BC you go to AD 1." }
      ],
      edges: [
        ["naturali", "relativi", "extend to"],
        ["relativi", "retta", "are represented on the"],
        ["relativi", "assoluto", "have"],
        ["relativi", "sottrazione", "make possible"],
        ["sottrazione", "somma", "becomes"],
        ["relativi", "segni", "are multiplied with"],
        ["segni", "potenze", "repeated gives"],
        ["retta", "realta", "models"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: products and powers",
      questions: [
        { type: "num", q: "(−7) × (−6) = ?", answer: 42, explain: "Same signs → +; 7 × 6 = 42." },
        { type: "num", q: "(−2)⁵ = ?", answer: -32, explain: "Negative base, odd exponent → −; 2⁵ = 32." },
        { type: "mc", q: "What is −4² worth (without brackets)?", options: ["+16", "−16", "−8"], answer: 1, explain: "The exponent applies only to the 4: −(4²) = −16." }
      ]
    }
  ],
  glossary: [
    { t: "Signed number", d: "Number preceded by a + or − sign." },
    { t: "ℤ", d: "The set of signed integers." },
    { t: "Absolute value", d: "The number without its sign, that is, its distance from zero." },
    { t: "Opposite numbers", d: "Same absolute value and different sign; their sum is 0." },
    { t: "Same sign / different signs", d: "Numbers with the same sign / with different signs." },
    { t: "Algebraic sum", d: "Addition between signed numbers (it includes subtractions too)." },
    { t: "Rule of signs", d: "In product and quotient: same signs give +, different signs give −." },
    { t: "Number line", d: "Line with origin, direction and unit of measure on which numbers are represented." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "|−15| = ?", answer: 15, explain: "The absolute value is the distance from zero: 15." },
      { type: "mc", q: "What is the opposite of −9?", options: ["+9", "−9", "1/9"], answer: 0, explain: "Same absolute value, opposite sign: +9." },
      { type: "order", q: "Order from smallest to greatest.", items: ["−8", "−3", "0", "+2", "+5"], explain: "On the line, from left to right." },
      { type: "num", q: "(+4) + (−11) = ?", answer: -7, explain: "Different signs: 11 − 4 = 7, sign of the −11 → −7." },
      { type: "num", q: "(−5) − (−12) = ?", answer: 7, explain: "(−5) + (+12) = +7." },
      { type: "num", q: "(−36) : (+9) = ?", answer: -4, explain: "Different signs → −; 36 : 9 = 4." },
      { type: "tf", q: "The product of three negative numbers is positive.", answer: false, explain: "(−)·(−) = +, then (+)·(−) = −: the product is negative." },
      { type: "num", q: "(−3)⁴ = ?", answer: 81, explain: "Even exponent → +; 3⁴ = 81." },
      { type: "num", q: "At night it is −6 °C, by day +9 °C. By how many degrees did the temperature rise?", answer: 15, unit: "°C", explain: "(+9) − (−6) = 15." },
      { type: "num", q: "Calculate: −3 + 2 × (−4) − (−5)", answer: -6, explain: "−3 − 8 + 5 = −6 (multiplication first)." },
      { type: "mc", q: "If a is negative, −a is…", options: ["always negative", "always positive", "zero"], answer: 1, explain: "−a is the opposite of a: if a = −4, −a = +4." }
    ],
    gen: [["intAdd", 2], ["intMul", 2]]
  }
});
