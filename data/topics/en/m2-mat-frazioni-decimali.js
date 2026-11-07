TOPIC('en', {
  id: "m2-mat-frazioni-decimali",
  title: "Fractions and decimal numbers",
  intro: "Every fraction is a <b>division</b> waiting to be done. If you do it, you get a <b>decimal number</b>: sometimes it ends (3/4 = 0.75), sometimes it goes on forever repeating the same digits (1/3 = 0.333…). Let's find out <b>when</b> this happens, <b>why</b>, and how to go back from the decimal to the fraction with the <b>generating fraction</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "From fraction to decimal number",
      html: `<p>The fraction bar means <b>«divided by»</b>: <b>a/b = a : b</b>.</p>
<p>To turn a fraction into a decimal number, just divide the numerator by the denominator:</p>
<ul>
<li>3/4 = 3 : 4 = <b>0.75</b> → the division <b>ends</b> (remainder 0): a <b>terminating decimal</b> (or finite decimal);</li>
<li>1/3 = 1 : 3 = 0.3333… → the remainder never becomes 0 and the digits repeat: an <b>infinite repeating decimal</b>.</li>
</ul>
<p>The digits that repeat form the <b>period</b> (the repeating block), which is written with a bar on top or in brackets: 0.333… = <b>0.(3)</b> = 0.3̅.</p>`
    },
    {
      type: "text",
      title: "Three types of decimal numbers",
      html: `<table>
<tr><th>Type</th><th>Example</th><th>What it looks like</th></tr>
<tr><td><b>Terminating decimal</b></td><td>7/8 = 0.875</td><td>a finite number of digits after the decimal point</td></tr>
<tr><td><b>Purely repeating</b></td><td>2/3 = 0.(6)<br>5/11 = 0.(45)</td><td>the period starts <b>right away</b> after the decimal point</td></tr>
<tr><td><b>Mixed repeating</b></td><td>1/6 = 0.1(6)<br>7/12 = 0.58(3)</td><td>between the decimal point and the period there are digits that do not repeat: the <b>pre-period</b></td></tr>
</table>
<p>In a number like <b>2.1(36)</b>: <b>2</b> is the whole part, <b>1</b> is the pre-period, <b>36</b> is the period.</p>`
    },
    {
      type: "remember",
      title: "The denominator rule",
      html: `<p>Before doing the division you can already <b>predict</b> the type of decimal! Reduce the fraction to lowest terms and break the denominator into prime factors:</p>
<ul>
<li>only factors <b>2</b> and/or <b>5</b> → <b>terminating decimal</b> (e.g. 3/20, because 20 = 2² × 5);</li>
<li><b>no</b> factor 2 or 5 → <b>purely repeating</b> (e.g. 4/7, 5/9, 2/33);</li>
<li>factors 2 and/or 5 <b>together with</b> others → <b>mixed repeating</b> (e.g. 5/6, because 6 = 2 × 3).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Why 2 and 5?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<rect x="30" y="30" width="250" height="110" rx="14" fill="#16a34a"/>
<text x="155" y="65" font-size="20" fill="#fff" text-anchor="middle" font-weight="bold">10 = 2 × 5</text>
<text x="155" y="95" font-size="16" fill="#dcfce7" text-anchor="middle">powers of 10 contain</text>
<text x="155" y="118" font-size="16" fill="#dcfce7" text-anchor="middle">only the factors 2 and 5</text>
<rect x="320" y="30" width="250" height="110" rx="14" fill="#2563eb"/>
<text x="445" y="62" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">3/20 = 15/100</text>
<text x="445" y="92" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">= 0.15 ✓</text>
<text x="445" y="120" font-size="14" fill="#dbeafe" text-anchor="middle">20 = 2²×5 → just ×5</text>
<rect x="30" y="165" width="540" height="110" rx="14" fill="#dc2626"/>
<text x="300" y="200" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">1/3 = ?/10 = ?/100 = ?/1000…</text>
<text x="300" y="232" font-size="16" fill="#fee2e2" text-anchor="middle">no power of 10 is divisible by 3:</text>
<text x="300" y="258" font-size="16" fill="#fee2e2" text-anchor="middle">the division never ends → 0.333…</text>
</svg>`,
      caption: "A fraction is a terminating decimal only if it can be turned into a decimal fraction (with denominator 10, 100, 1000…)."
    },
    {
      type: "example",
      title: "Worked example: the division that repeats",
      html: `<p>Let's calculate <b>1/7</b> with long division and watch the <b>remainders</b>:</p>
<p>10 : 7 = 1 remainder <b>3</b> → 30 : 7 = 4 remainder <b>2</b> → 20 : 7 = 2 remainder <b>6</b> → 60 : 7 = 8 remainder <b>4</b> → 40 : 7 = 5 remainder <b>5</b> → 50 : 7 = 7 remainder <b>1</b> → we start over from 10!</p>
<p>Result: <b>1/7 = 0.(142857)</b>, a period of 6 digits.</p>
<p><b>Why does it repeat?</b> When dividing by 7 the possible remainders are only 1, 2, 3, 4, 5, 6: after at most 6 steps a remainder must show up again, and from there the digits repeat exactly. In general, when dividing by <i>n</i> the period is <b>at most n − 1</b> digits long.</p>`
    },
    {
      type: "widget",
      title: "Fraction and decimal",
      widget: "fractionPie",
      options: { n: 3, d: 8 },
      caption: "Move the sliders: for each fraction try to work out the decimal. 3/8 = 0.375. Which denominators give terminating decimals?"
    },
    {
      type: "quiz",
      title: "Mini-quiz: which decimal is it?",
      questions: [
        { type: "mc", q: "7/25 is a…", options: ["terminating decimal", "purely repeating decimal", "mixed repeating decimal"], answer: 0, explain: "25 = 5²: only factors of 5, so it is a terminating decimal (7/25 = 0.28)." },
        { type: "mc", q: "5/6 is a…", options: ["terminating decimal", "purely repeating decimal", "mixed repeating decimal"], answer: 2, explain: "6 = 2 × 3: there is a 2 together with the 3 → mixed repeating (0.8(3))." },
        { type: "num", q: "What is 3/8 as a decimal number?", answer: 0.375, tol: 0.0001, explain: "3 : 8 = 0.375." }
      ]
    },
    {
      type: "text",
      title: "From decimal to fraction: the generating fraction",
      html: `<p>The <b>generating fraction</b> is the fraction that, when divided, «generates» that decimal number.</p>
<p><b>1. Terminating decimal</b>: the numerator is the number without the decimal point, the denominator is 1 followed by as many zeros as there are decimal digits. Then simplify.<br>
0.75 = 75/100 = <b>3/4</b> &nbsp;&nbsp; 2.4 = 24/10 = <b>12/5</b></p>
<p><b>2. Purely repeating</b>: the numerator is the number without the decimal point <b>minus</b> the whole part; the denominator has as many <b>9s</b> as there are digits in the period.<br>
0.(3) = 3/9 = <b>1/3</b> &nbsp;&nbsp; 1.(27) = (127 − 1)/99 = 126/99 = <b>14/11</b></p>
<p><b>3. Mixed repeating</b>: the numerator is the number without the decimal point <b>minus</b> the number formed by the whole part and the pre-period; the denominator has as many <b>9s</b> as the digits of the period followed by as many <b>0s</b> as the digits of the pre-period.<br>
0.1(6) = (16 − 1)/90 = 15/90 = <b>1/6</b> &nbsp;&nbsp; 2.3(5) = (235 − 23)/90 = 212/90 = <b>106/45</b></p>`
    },
    {
      type: "example",
      title: "Worked example: why exactly the 9s?",
      html: `<p>Let's take <b>x = 0.(45)</b> = 0.454545…</p>
<ol>
<li>The period has 2 digits: I multiply by 100 → <b>100x = 45.4545…</b></li>
<li>I subtract x: 100x − x = 45.4545… − 0.4545… → <b>99x = 45</b> (the infinite part cancels out!)</li>
<li>So x = 45/99 = <b>5/11</b>.</li>
</ol>
<p>That is where the <b>9s</b> come from: 100 − 1 = 99. With a 3-digit period you multiply by 1000 and get 999.</p>`
    },
    {
      type: "example",
      title: "Worked example: the receipt and the money",
      html: `<p>Three friends have to split a bill of <b>€10</b>. Each should pay 10/3 € = <b>€3.(3)</b> = €3.333…</p>
<p>But cents cannot be divided forever! We <b>round</b>: two friends pay €3.33 and one pays €3.34 (3.33 + 3.33 + 3.34 = €10.00).</p>
<p>With <b>4 friends</b> instead: 10/4 = exactly €2.50, because 4 = 2² has only the factor 2!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? 0.999… = 1",
      html: `<p>The number <b>0.(9)</b> = 0.9999… is exactly equal to <b>1</b>! With the generating fraction rule: 0.(9) = 9/9 = 1. Or: 1/3 = 0.(3); multiply by 3: 3/3 = 0.(9), but 3/3 = 1. That is why the period 9 is not used: we simply write the rounded number (2.4(9) = 2.5).</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Who invented the decimal point",
      html: `<p>Decimal numbers were spread across Europe by the Flemish mathematician <b>Simon Stevin</b> in his little book <i>De Thiende</i> («The Tenth», <b>1585</b>), but he wrote them with little numbered circles above the digits. The separator with the dot was made popular by <b>John Napier</b> in 1617. Even today English-speaking countries use the <b>point</b> (3.14), while Italy and much of Europe use the <b>comma</b> (3,14).</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand repeating decimals",
      intro: "If the rule of 9s and 0s seems like magic, here are other roads.",
      tabs: [
        {
          label: "🧊 One hundred cubes",
          html: `<p>Here is a square of <b>10 × 10 = 100</b> cubes: the whole block is worth <b>1</b>. A row of 10 cubes is worth <b>0.1</b> (a tenth); one cube is worth <b>0.01</b> (a hundredth).</p>
<p>Try: 3/4 of the block = 75 cubes = <b>0.75</b>. But 1/3 of the block? 100 cubes cannot be split into 3 equal parts: 33 cubes each and 1 is left over, which you would have to cut into smaller and smaller pieces… forever: 0.333…</p>`,
          scene: "blocks",
          options: { mode: "array", a: 10, b: 10 }
        },
        {
          label: "📏 The zooming number line",
          html: `<p>Imagine looking for 1/3 on the number line with a <b>magnifying glass</b>:</p>
<ul>
<li>between 0 and 1, divided into tenths, 1/3 lies between 0.3 and 0.4;</li>
<li>you zoom in between 0.3 and 0.4 divided into hundredths: it lies between 0.33 and 0.34;</li>
<li>you zoom in again: between 0.333 and 0.334…</li>
</ul>
<p>Every time 1/3 falls <b>in the same position</b> (about a third of the way along the interval): that is why the digit <b>3</b> always comes out. You will never land exactly on a tick mark!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eef2ff"/>
<line x1="40" y1="60" x2="560" y2="60" stroke="#1e1b4b" stroke-width="4"/>
<line x1="40" y1="48" x2="40" y2="72" stroke="#1e1b4b" stroke-width="3"/><line x1="560" y1="48" x2="560" y2="72" stroke="#1e1b4b" stroke-width="3"/>
<line x1="196" y1="50" x2="196" y2="70" stroke="#1e1b4b" stroke-width="3"/><line x1="248" y1="50" x2="248" y2="70" stroke="#1e1b4b" stroke-width="3"/>
<circle cx="213" cy="60" r="7" fill="#dc2626"/>
<text x="40" y="35" font-size="16" text-anchor="middle">0</text><text x="560" y="35" font-size="16" text-anchor="middle">1</text>
<text x="196" y="95" font-size="15" text-anchor="middle">0.3</text><text x="248" y="95" font-size="15" text-anchor="middle">0.4</text>
<line x1="196" y1="70" x2="40" y2="140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/><line x1="248" y1="70" x2="560" y2="140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="40" y1="150" x2="560" y2="150" stroke="#1e1b4b" stroke-width="4"/>
<line x1="196" y1="140" x2="196" y2="160" stroke="#1e1b4b" stroke-width="3"/><line x1="248" y1="140" x2="248" y2="160" stroke="#1e1b4b" stroke-width="3"/>
<circle cx="213" cy="150" r="7" fill="#dc2626"/>
<text x="40" y="185" font-size="15" text-anchor="middle">0.3</text><text x="560" y="185" font-size="15" text-anchor="middle">0.4</text>
<text x="196" y="185" font-size="15" text-anchor="middle">0.33</text><text x="252" y="185" font-size="15" text-anchor="middle">0.34</text>
<line x1="196" y1="160" x2="40" y2="230" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/><line x1="248" y1="160" x2="560" y2="230" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="40" y1="240" x2="560" y2="240" stroke="#1e1b4b" stroke-width="4"/>
<line x1="196" y1="230" x2="196" y2="250" stroke="#1e1b4b" stroke-width="3"/><line x1="248" y1="230" x2="248" y2="250" stroke="#1e1b4b" stroke-width="3"/>
<circle cx="213" cy="240" r="7" fill="#dc2626"/>
<text x="40" y="275" font-size="15" text-anchor="middle">0.33</text><text x="560" y="275" font-size="15" text-anchor="middle">0.34</text>
<text x="196" y="275" font-size="15" text-anchor="middle">0.333</text><text x="256" y="275" font-size="15" text-anchor="middle">0.334</text>
<text x="420" y="110" font-size="16" fill="#dc2626" font-weight="bold">● = 1/3</text>
</svg>`
        },
        {
          label: "🇬🇧 The English method with algebra",
          html: `<p>In English-speaking countries (and in many schools around the world) you do not learn the «rule of 9s and 0s», but the algebraic trick «<b>multiply and subtract</b>»:</p>
<p>x = 0.1666… → 10x = 1.666… and 100x = 16.666…<br>100x − 10x = 16.666… − 1.666… → <b>90x = 15</b> → x = 15/90 = 1/6.</p>
<p>You shift the decimal point so that the infinite tails are <b>identical</b>, and when you subtract they vanish. The Italian rule is just this idea already «packaged up»!</p>`
        },
        {
          label: "🎡 The round of remainders",
          html: `<p>Think of division by 7 as a <b>Ferris wheel</b> with 6 cabins (the possible remainders 1–6). Each step of the division moves you to a cabin: 1 → 3 → 2 → 6 → 4 → 5 → back to 1. When you return to the starting cabin the ride begins again and the digits repeat. If instead you reach cabin «0», you have got off: the division is over (terminating decimal).</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<circle cx="300" cy="150" r="110" fill="none" stroke="#9a3412" stroke-width="5"/>
<circle cx="300" cy="40" r="28" fill="#f97316"/><text x="300" y="47" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<circle cx="395" cy="95" r="28" fill="#fb923c"/><text x="395" y="102" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">3</text>
<circle cx="395" cy="205" r="28" fill="#f97316"/><text x="395" y="212" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">2</text>
<circle cx="300" cy="260" r="28" fill="#fb923c"/><text x="300" y="267" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">6</text>
<circle cx="205" cy="205" r="28" fill="#f97316"/><text x="205" y="212" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">4</text>
<circle cx="205" cy="95" r="28" fill="#fb923c"/><text x="205" y="102" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">5</text>
<text x="300" y="145" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">remainders of 1 : 7</text>
<text x="300" y="170" font-size="16" text-anchor="middle" fill="#7c2d12">digits: 1 4 2 8 5 7</text>
<text x="500" y="60" font-size="15" fill="#7c2d12">full round</text>
<text x="500" y="80" font-size="15" fill="#7c2d12">= period</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: fractions and decimals",
      nodes: [
        { id: "fraz", label: "Fraction a/b", x: 50, y: 6, color: "#2563eb", html: "A quotient of two whole numbers.", why: "Fractions were born to divide quantities; the notation «a/b» literally means the division a : b. Every fraction is a <b>rational number</b> (from <i>ratio</i>)." },
        { id: "div", label: "Division", x: 50, y: 26, color: "#7c3aed", html: "Numerator : denominator.", why: "When you do long division with decimals you keep going by adding zeros to the remainder. It is the Indo-Arabic method that reached Europe with Fibonacci (1202)." },
        { id: "lim", label: "Terminating decimal", x: 16, y: 50, color: "#16a34a", html: "It ends after a finite number of digits: 0.75.", why: "It happens if the (reduced) denominator has only factors 2 and 5, because then the fraction can be written with denominator 10, 100, 1000… and 10 = 2 × 5." },
        { id: "sempl", label: "Purely repeating", x: 50, y: 52, color: "#ea580c", html: "The period starts right away: 0.(3).", why: "It happens when the denominator has neither 2 nor 5. The remainders must repeat, because there are only finitely many of them (fewer than the divisor): this is the <b>pigeonhole principle</b>." },
        { id: "misto", label: "Mixed repeating", x: 84, y: 50, color: "#dc2626", html: "There is a pre-period: 0.1(6).", why: "The denominator contains 2 or 5 together with other factors: the «2 and 5» part produces the pre-period, the other factors the period." },
        { id: "gen", label: "Generating fraction", x: 50, y: 76, color: "#0d9488", html: "The fraction a decimal comes from.", why: "It is proved with algebra: you multiply the number by a power of 10 and subtract, so the infinite repeating part cancels out and the 9s remain (e.g. 100x − x = 99x)." },
        { id: "irr", label: "Irrational numbers", x: 84, y: 82, color: "#64748b", html: "Infinite NON-repeating decimals: √2, π.", why: "They are not fractions: they have no generating fraction. The Pythagoreans discovered in the 5th century BC that the diagonal of the square (√2) is not a ratio of whole numbers: it was a shock!" },
        { id: "stevin", label: "Decimal notation", x: 16, y: 82, color: "#ca8a04", html: "Writing numbers with a decimal point.", why: "Arab mathematicians (al-Kashi, 15th century) already used decimal fractions; in Europe they were spread by <b>Simon Stevin</b> in 1585, to simplify the calculations of merchants and engineers." }
      ],
      edges: [
        ["fraz", "div", "means"],
        ["div", "lim", "remainder 0"],
        ["div", "sempl", "remainders that repeat"],
        ["div", "misto", "pre-period + period"],
        ["sempl", "gen", "we go back with"],
        ["misto", "gen", "we go back with"],
        ["misto", "irr", "different from"],
        ["lim", "stevin", "is written with"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: generating fraction",
      questions: [
        { type: "mc", q: "The generating fraction of 0.(7) is…", options: ["7/10", "7/9", "7/99"], answer: 1, explain: "A one-digit period: 7/9." },
        { type: "mc", q: "The generating fraction of 0.1(6) is…", options: ["16/90 = 8/45", "15/90 = 1/6", "16/99"], answer: 1, explain: "(16 − 1)/90 = 15/90 = 1/6." },
        { type: "num", q: "0.25 = 1/?", answer: 4, explain: "0.25 = 25/100 = 1/4." }
      ]
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>a/b = a : b. The decimal can be <b>terminating</b>, <b>purely repeating</b>, <b>mixed repeating</b>.</li>
<li>Denominator with only 2 and 5 → terminating; without 2 and 5 → purely repeating; both kinds of factors → mixed.</li>
<li>Generating fraction: numerator = number without the decimal point − (whole part and pre-period); denominator = a <b>9</b> for each digit of the period and a <b>0</b> for each digit of the pre-period.</li>
<li>Always simplify the result!</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Terminating decimal", d: "A number with a finite number of digits after the decimal point." },
    { t: "Repeating number", d: "An infinite decimal in which a group of digits repeats forever." },
    { t: "Period", d: "The group of digits that repeats." },
    { t: "Pre-period", d: "The decimal digits between the decimal point and the period, which do not repeat." },
    { t: "Generating fraction", d: "The fraction that, when you do the division, generates a decimal number." },
    { t: "Decimal fraction", d: "A fraction with denominator 10, 100, 1000…" },
    { t: "Rational number", d: "A number that can be written as a fraction of two whole numbers." },
    { t: "Irrational number", d: "An infinite non-repeating decimal that is not a fraction (e.g. π, √2)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Write 7/20 as a decimal number.", answer: 0.35, tol: 0.0001, explain: "7/20 = 35/100 = 0.35." },
      { type: "mc", q: "Which fraction gives a purely repeating decimal?", options: ["3/8", "2/9", "1/6"], answer: 1, explain: "9 = 3²: no 2 or 5 → purely repeating (0.(2))." },
      { type: "mc", q: "In 3.4(12) the pre-period is…", options: ["3", "4", "12"], answer: 1, explain: "3 is the whole part, 4 the pre-period, 12 the period." },
      { type: "tf", q: "1/40 is a terminating decimal.", answer: true, explain: "40 = 2³ × 5: only 2 and 5 → terminating (0.025)." },
      { type: "mc", q: "The generating fraction of 0.(12) is…", options: ["12/100", "12/99 = 4/33", "12/90"], answer: 1, explain: "Two digits in the period → 99: 12/99 = 4/33." },
      { type: "mc", q: "The generating fraction of 1.2(3) is…", options: ["(123 − 12)/90 = 37/30", "123/99", "(123 − 1)/99"], answer: 0, explain: "The number without the decimal point is 123, minus whole part + pre-period 12; denominator 90." },
      { type: "num", q: "How many digits does the period of 1/7 have?", answer: 6, explain: "1/7 = 0.(142857)." },
      { type: "tf", q: "0.(9) is equal to 1.", answer: true, explain: "0.(9) = 9/9 = 1." },
      { type: "num", q: "Turn 0.6 into a reduced fraction: 3/?", answer: 5, explain: "0.6 = 6/10 = 3/5." },
      { type: "order", q: "Order from smallest to largest.", items: ["0.3", "1/3", "0.34", "0.(4)"], explain: "0.3 < 0.333… < 0.34 < 0.444…" },
      { type: "mc", q: "π = 3.14159… is…", options: ["purely repeating", "a terminating decimal", "irrational (non-repeating)"], answer: 2, explain: "π is infinite and non-repeating: it is not a fraction." }
    ],
    gen: [["fracEquiv", 2], ["decAdd", 1]]
  }
});
