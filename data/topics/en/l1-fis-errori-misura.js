TOPIC('en', {
  id: "l1-fis-errori-misura",
  title: "Measurement and errors",
  intro: "No measurement is <b>exact</b>. If you measure the same teacher's desk three times with the same tape measure, you will probably get three slightly different results. That is not a failure: it is the very nature of measuring. Experimental physics does not look for the “true number” but for a <b>result together with its uncertainty</b>, written honestly. In this lesson we learn to recognise the <b>characteristics of instruments</b>, to tell the different <b>errors</b> apart, to calculate <b>absolute and relative error</b> and to write <b>significant figures</b> correctly.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Measuring instruments and their characteristics",
      html: `<p>A measuring instrument is described by a few <b>characteristics</b>:</p>
<ul>
<li><b>Range</b> (full scale): the maximum value the instrument can measure. A kitchen scale with a range of 5 kg cannot weigh a person.</li>
<li><b>Sensitivity</b> (resolution): the <b>smallest change</b> in the quantity that the instrument can detect. For a ruler marked in millimetres it is 1 mm; for a vernier caliper with 20 divisions 0.05 mm; for a digital stopwatch 0.01 s.</li>
<li><b>Response time</b>: how quickly the instrument reacts to a change (a mercury thermometer responds more slowly than a digital one).</li>
<li><b>Precision</b> (repeatability): the ability to give <b>values close to each other</b> when the measurement is repeated under the same conditions.</li>
<li><b>Accuracy</b> (trueness): the ability to give values <b>close to the true value</b>.</li>
</ul>
<p>Instruments can be <b>analogue</b> (with a graduated scale and a pointer: ruler, mercury thermometer) or <b>digital</b> (with a numerical display: stopwatch, electronic scale).</p>`
    },
    {
      type: "svg",
      title: "Precision and accuracy: the target",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<g transform="translate(80,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-5" cy="4" r="5"/><circle cx="10" cy="-6" r="5"/><circle cx="3" cy="9" r="5"/><circle cx="-9" cy="-8" r="5"/><circle cx="8" cy="5" r="5"/></g>
</g>
<g transform="translate(240,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="38" cy="-30" r="5"/><circle cx="46" cy="-24" r="5"/><circle cx="40" cy="-20" r="5"/><circle cx="44" cy="-34" r="5"/><circle cx="35" cy="-26" r="5"/></g>
</g>
<g transform="translate(400,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-28" cy="-20" r="5"/><circle cx="30" cy="14" r="5"/><circle cx="6" cy="40" r="5"/><circle cx="-34" cy="30" r="5"/><circle cx="20" cy="-36" r="5"/></g>
</g>
<g transform="translate(560,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-6" cy="-3" r="5"/><circle cx="4" cy="8" r="5"/><circle cx="-12" cy="10" r="5"/><circle cx="14" cy="-8" r="5"/><circle cx="0" cy="-14" r="5"/></g>
</g>
<g font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">
<text x="80" y="212">Precise and</text><text x="80" y="230">accurate</text>
<text x="240" y="212">Precise but</text><text x="240" y="230">not accurate</text>
<text x="400" y="212">Neither precise</text><text x="400" y="230">nor accurate</text>
<text x="560" y="212">Accurate on average,</text><text x="560" y="230">not very precise</text>
</g>
<text x="320" y="270" font-size="14" text-anchor="middle" fill="#334155">Centre of the target = true value; blue dots = repeated measurements</text>
</g>
</svg>`,
      caption: "Precision = measurements close to each other. Accuracy = measurements close to the true value. They are two different things."
    },
    {
      type: "text",
      title: "Measurement errors",
      html: `<p>Every measurement is affected by an <b>error</b>, meaning not a mistake but an <b>uncertainty</b>. There are two families:</p>
<ul>
<li><b>Systematic errors</b>: they shift all the measurements <b>always in the same direction</b>. Causes: a badly calibrated instrument (zero error: the scale reads 20 g with nothing on it), a wrong method, the wrong position of the eye (<b>parallax error</b>). They can be corrected if they are discovered, but they are not reduced by repeating the measurement.</li>
<li><b>Random errors</b>: they vary from one measurement to the next, up or down, with no rule, because they depend on many small causes (a shaking hand, vibrations, the reaction time of whoever presses the stopwatch). They are <b>reduced by repeating</b> the measurement many times and taking the average.</li>
</ul>
<p>Finally there is the <b>gross error</b>, that is, a real blunder (reading 28 instead of 82): it must be discarded and is not part of error theory.</p>`
    },
    {
      type: "widget",
      title: "Systematic or random?",
      widget: "classify",
      options: { groups: ["Systematic", "Random"], items: [
        ["The scale reads 5 g even with nothing on it", 0],
        ["The stopwatch is stopped sometimes too early, sometimes too late", 1],
        ["I always read the ruler from one side (parallax)", 0],
        ["Small vibrations of the table during weighing", 1],
        ["The plastic tape measure has expanded in the sun and always measures a little more", 0],
        ["The thermometer readings fluctuate by a few tenths of a degree", 1]
      ] },
      caption: "A systematic error always shifts in the same direction; a random one goes a little up and a little down."
    },
    {
      type: "text",
      title: "A single measurement and absolute error",
      html: `<p>When you take <b>just one measurement</b>, the result cannot be more precise than the instrument allows. By convention (in many school textbooks) the <b>absolute error</b> is taken to be the <b>sensitivity</b> of the instrument:</p>
<p style="text-align:center"><b>x = x₀ ± E<sub>a</sub></b></p>
<p>where x₀ is the measured value and E<sub>a</sub> the absolute error. Example: with a ruler marked in millimetres you measure 32 cm and 4 mm: you write <b>l = (32.4 ± 0.1) cm</b>. This means: “the true value very probably lies in the interval between 32.3 and 32.5 cm”. Some textbooks take <b>half</b> the sensitivity as the error: in each exercise you must follow the stated convention.</p>
<p>The absolute error has the <b>same unit</b> as the quantity and is always positive.</p>`
    },
    {
      type: "text",
      title: "Repeated measurements: mean value and half-range",
      html: `<p>If you can repeat the measurement N times under the same conditions, the values you get will be slightly different. Proceed like this:</p>
<ol>
<li><b>Mean value</b>: the sum of all the measurements divided by N. It is the best estimate of the true value.</li>
<li><b>Absolute error</b> as the <b>maximum half-range</b>: E<sub>a</sub> = (x<sub>max</sub> − x<sub>min</sub>) / 2.</li>
<li>Write the result: <b>x = mean value ± E<sub>a</sub></b>.</li>
</ol>
<p><b>Example.</b> You measure the width of an exercise book with a ruler marked in mm and get: 21.3 cm; 21.5; 21.4; 21.4; 21.6.</p>
<ul>
<li>Sum: 21.3 + 21.5 + 21.4 + 21.4 + 21.6 = 107.2; mean = 107.2 / 5 = <b>21.44 cm</b>.</li>
<li>Half-range: (21.6 − 21.3) / 2 = <b>0.15 cm</b>.</li>
<li>Result: <b>l = (21.44 ± 0.15) cm</b>, which is rounded to <b>(21.4 ± 0.2) cm</b>: the error is written with <b>a single significant figure</b> and the value with the same number of decimal places as the error.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Relative and percentage error",
      html: `<p>The absolute error does not tell you whether a measurement is “good”: an error of 1 cm is small if I am measuring a football pitch, huge if I am measuring a fingernail. That is why we calculate the <b>relative error</b>:</p>
<p style="text-align:center"><b>E<sub>r</sub> = E<sub>a</sub> / x</b> (a pure number, with no unit)</p>
<p>and the <b>percentage error</b>: <b>E% = E<sub>r</sub> × 100</b>. The smaller the relative error, the better the measurement.</p>`
    },
    {
      type: "example",
      title: "Which measurement is better?",
      html: `<p>Marta measures the length of a road: (500 ± 1) m. Luca measures the thickness of a book: (3.0 ± 0.5) cm. Who measured better?</p>
<ul>
<li>Marta: E<sub>r</sub> = 1/500 = 0.002 = <b>0.2 %</b>.</li>
<li>Luca: E<sub>r</sub> = 0.5/3.0 ≈ 0.17 = <b>17 %</b>.</li>
</ul>
<p>Even though Luca's absolute error (0.5 cm) is numerically smaller than Marta's (1 m), his measurement is much worse in proportion. The <b>relative error</b> is the right way to compare measurements of different quantities.</p>`
    },
    {
      type: "example",
      title: "The stopwatch and reaction time",
      html: `<p>To measure the time a ball takes to fall 2 m, three students use a digital stopwatch reading to a hundredth of a second. They get 0.71 s; 0.64 s; 0.78 s; 0.69 s. The sensitivity of the instrument is 0.01 s, but the measurements differ by almost 0.1 s: the cause is <b>human reaction time</b>, a random error much larger than the sensitivity. The mean value is 0.705 s and the half-range is (0.78 − 0.64)/2 = 0.07 s: the correct result is <b>(0.71 ± 0.07) s</b>, not (0.705 ± 0.01) s. The instrument has a better sensitivity than the method allows: what counts is the <i>dominant</i> uncertainty.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: errors",
      questions: [
        { type: "num", q: "Measured values: 12.0 s; 12.4 s; 12.2 s. Calculate the mean value.", answer: 12.2, tol: 0.01, unit: "s", explain: "(12.0 + 12.4 + 12.2) / 3 = 36.6 / 3 = 12.2 s." },
        { type: "num", q: "With the same measurements (12.0; 12.4; 12.2 s) calculate the absolute error as the maximum half-range.", answer: 0.2, tol: 0.001, unit: "s", explain: "(12.4 − 12.0) / 2 = 0.2 s." },
        { type: "tf", q: "A systematic error is reduced by repeating the measurement many times and taking the average.", answer: false, explain: "A systematic error shifts all the measurements in the same direction: averaging does not remove it." }
      ]
    },
    {
      type: "text",
      title: "Significant figures",
      html: `<p>The <b>significant figures</b> of a measurement are those that have real meaning, that is, the certain digits plus the first uncertain one. Writing 3.20 m and 3.2 m is not the same thing: in the first case the instrument reads to the centimetre, in the second to the decimetre.</p>
<p><b>Counting rules:</b></p>
<ul>
<li>non-zero digits are always significant;</li>
<li>zeros <b>between</b> significant digits are significant (<b>4 0 7 </b> → 3 figures);</li>
<li><b>leading</b> zeros are not significant (0.0052 has <b>2</b> figures);</li>
<li><b>trailing zeros after the decimal point</b> are significant (2.50 has <b>3</b> figures);</li>
<li>in whole numbers with trailing zeros such as 1500 the number is ambiguous: to make it clear we use scientific notation (1.5 × 10³ has 2 figures; 1.50 × 10³ has 3).</li>
</ul>
<table>
<tr><th>Number</th><th>Significant figures</th></tr>
<tr><td>35.2</td><td>3</td></tr>
<tr><td>0.0045</td><td>2</td></tr>
<tr><td>3.020</td><td>4</td></tr>
<tr><td>6.0 × 10⁻³</td><td>2</td></tr>
</table>`
    },
    {
      type: "text",
      title: "Calculations and significant figures",
      html: `<p>The result of a calculation cannot be more precise than the starting data.</p>
<ul>
<li><b>Multiplication and division</b>: the result has as many significant figures as the datum with the <b>fewest</b>. Example: 3.2 m × 1.45 m = 4.64 m² → written as <b>4.6 m²</b> (2 figures).</li>
<li><b>Addition and subtraction</b>: the result has as many <b>decimal places</b> as the datum with the <b>fewest</b>. Example: 12.34 + 0.5 = 12.84 → written as <b>12.8</b>.</li>
<li><b>Rounding</b>: if the digit to be dropped is ≥ 5, increase the previous digit by 1; if it is &lt; 5, leave it unchanged (2.46 → 2.5; 2.44 → 2.4).</li>
</ul>
<p>The danger is <b>false precision</b>: the calculator shows 8 digits, but if the data were measured to 2 figures, the others are made up.</p>`
    },
    {
      type: "text",
      title: "How errors propagate",
      html: `<p>When you calculate a new quantity from measurements that have errors, the result also has an error. Simple rules (for the worst case):</p>
<ul>
<li><b>Sum and difference</b>: the <b>absolute errors add up</b>. (5.0 ± 0.1) cm + (3.0 ± 0.1) cm = (8.0 ± 0.2) cm. They add up for the difference too!</li>
<li><b>Product and quotient</b>: the <b>relative errors add up</b>.</li>
</ul>
<p><b>Example: the area of a rectangle</b> with sides (5.0 ± 0.1) cm and (3.0 ± 0.1) cm:</p>
<ul>
<li>E<sub>r</sub> of the sides: 0.1/5.0 = 2 % and 0.1/3.0 ≈ 3.3 %;</li>
<li>E<sub>r</sub> of the area ≈ 2 % + 3.3 % = 5.3 %;</li>
<li>Area = 5.0 × 3.0 = 15 cm²; absolute error = 15 × 0.053 ≈ 0.8 cm²;</li>
<li>result: <b>A = (15.0 ± 0.8) cm²</b>.</li>
</ul>
<p>So, in a formula with a product, it pays to measure more precisely the quantity with the largest relative error.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand errors",
      intro: "If the calculations seem abstract, try these points of view.",
      tabs: [
        {
          label: "🎯 The target",
          html: "<p>Think of a marksman. <b>Precision</b> = the shots are grouped together. <b>Accuracy</b> = the group is close to the centre. A <b>systematic</b> error shifts the whole group to one side (a crooked sight); a <b>random</b> error spreads the group out (a shaking hand). The “true value” is the centre, which you never see directly but get closer to with more measurements.</p>"
        },
        {
          label: "📏 The click-step ruler",
          html: "<p>Imagine the ruler moves in clicks of 1 mm: you can't read 3.5 mm, only 3 or 4. The <b>sensitivity</b> is the width of the “click” and sets the maximum precision of a single reading. That is why it makes no sense to write 12.347 cm if the instrument reads to the millimetre: the digits 4 and 7 are made up.</p>"
        },
        {
          label: "🧮 Averaging with cards",
          html: "<p>Five measurements: 20.1; 20.3; 20.2; 20.2; 20.2 cm. A trick: remove the common “20.” and work on the decimals: 1, 3, 2, 2, 2 → sum 10 → mean 2 → the mean value is 20.2 cm. It's a way of doing the sums in your head.</p>",
          widget: "flashcards",
          options: { cards: [
            { front: "Mean value", back: "sum of the measurements / number of measurements" },
            { front: "Absolute error (repeated measurements)", back: "(x max - x min) / 2" },
            { front: "Relative error", back: "absolute error / measured value" },
            { front: "Percentage error", back: "relative error × 100" },
            { front: "Sum of measurements", back: "add the absolute errors" },
            { front: "Product of measurements", back: "add the relative errors" }
          ] }
        },
        {
          label: "🔁 The flow of a measurement",
          html: "<p>Every experiment follows these steps: choose the instrument → check the zero → measure several times → discard gross errors → calculate the mean and the error → write the result with the right figures → compare with other results or with the expected value.</p>",
          svg: "<svg viewBox='0 0 600 160' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='160' fill='#f0f9ff'/><g font-family='sans-serif' font-size='14' text-anchor='middle' fill='#0c4a6e'><rect x='10' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='52' y='84'>Instrument</text><rect x='115' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='157' y='84'>Readings</text><rect x='220' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='262' y='84'>Mean</text><rect x='325' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='367' y='84'>Error</text><rect x='430' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='472' y='84'>Figures</text><rect x='535' y='55' width='55' height='50' rx='8' fill='#7dd3fc'/><text x='562' y='84'>x±E</text><path d='M95 80 L115 80 M200 80 L220 80 M305 80 L325 80 M410 80 L430 80 M515 80 L535 80' stroke='#0369a1' stroke-width='3'/></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "When the neutrino “beat” light",
      html: `<p>In September 2011 the <b>OPERA</b> experiment (which measured neutrinos sent from CERN in Geneva to the Gran Sasso Laboratories in Italy) announced that the neutrinos seemed to travel <b>just faster than light</b>. It would have been a revolutionary discovery. In the following months the researchers checked everything and found two <b>systematic errors</b>: a badly connected optical-fibre cable and a faulty oscillator. After the correction, the speed was again compatible with the speed of light. It shows that even big laboratories look for and correct their own errors, and that an exceptional discovery needs extraordinary evidence.</p>`
    },
    {
      type: "curiosity",
      title: "Eratosthenes and the circumference of the Earth",
      html: `<p>Around 240 BC <b>Eratosthenes</b> of Cyrene measured the Earth's circumference with a stick, a shadow and a distance: at Syene (today Aswan) the Sun's rays at noon on the summer solstice fell vertically, while at Alexandria, about 5000 stadia further north, they made an angle of about 7.2° (1/50 of a full turn). From this he obtained a circumference of 250 000 stadia. The length of the stadion he used is uncertain, but his result differs from the modern value by only a small percentage: an excellent estimate with simple instruments and a clearly estimated uncertainty.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of measurement",
      nodes: [
        { id: "misura", label: "Measurement", x: 50, y: 8, color: "#2563eb", html: "Comparing a quantity with a standard, using an instrument.", why: "Every experimental datum is the result of a measurement: without understanding how it is obtained and how reliable it is, no physical law can be trusted. That is why Galileo's experimental method put measurement at its centre." },
        { id: "strumenti", label: "Instrument", x: 15, y: 42, color: "#16a34a", html: "Range, sensitivity, response time, precision, accuracy.", why: "The characteristics of the instrument set the limits of every measurement: no calculation can achieve more precision than the instrument has." },
        { id: "errori", label: "Errors", x: 50, y: 42, color: "#ef4444", html: "Systematic and random: the uncertainty of every measurement.", why: "Random errors come from many small independent causes, so they cancel out when you average; systematic errors depend on a flaw in the method or the instrument and must be found, not averaged." },
        { id: "incertezza", label: "Absolute and relative error", x: 85, y: 42, color: "#f59e0b", html: "Ea = half-range or sensitivity; Er = Ea/x; E% = Er × 100.", why: "The absolute error tells you how far you can trust a value; the relative error lets you compare measurements of different quantities. Comparing relative errors is what gives a number its meaning." },
        { id: "cifre", label: "Significant figures", x: 30, y: 80, color: "#8b5cf6", html: "The certain digits plus the first uncertain one.", why: "Writing only significant figures is a matter of honesty: every extra digit is a promise of precision that cannot be kept." },
        { id: "propagazione", label: "Propagation of errors", x: 72, y: 80, color: "#64748b", html: "Sum: absolute errors. Product: relative errors.", why: "It comes from worst-case reasoning: if every measurement can be off in excess, the error of the result is the sum of the contributions. So it pays to improve the measurement that weighs most." }
      ],
      edges: [["misura", "strumenti", "depends on"], ["misura", "errori", "always has"], ["errori", "incertezza", "are quantified by"], ["incertezza", "cifre", "sets the"], ["incertezza", "propagazione", "propagates through"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz: significant figures",
      questions: [
        { type: "mc", q: "How many significant figures does 0.0360 have?", options: ["2", "3", "4", "5"], answer: 1, explain: "Leading zeros don't count; 3, 6 and the trailing zero after the decimal point do: 3 figures." },
        { type: "mc", q: "The product 2.5 m × 3.14 m gives 7.85 m². How should it be written with significant figures?", options: ["7.85 m²", "7.9 m²", "8 m²", "7.850 m²"], answer: 1, explain: "The datum with fewer figures (2.5) has 2: the result has 2 figures, 7.9 m²." }
      ]
    }
  ],
  glossary: [
    { t: "Sensitivity", d: "The smallest change in the quantity that an instrument can detect." },
    { t: "Range", d: "The maximum value an instrument can measure." },
    { t: "Precision", d: "The ability to give repeated measurements that are close to each other." },
    { t: "Accuracy", d: "The ability to give measurements close to the true value." },
    { t: "Systematic error", d: "An error that always shifts the measurements in the same direction." },
    { t: "Random error", d: "An error that varies unpredictably from one measurement to the next." },
    { t: "Absolute error", d: "The uncertainty of a measurement, with the same unit as the quantity." },
    { t: "Relative error", d: "The ratio of the absolute error to the measured value." },
    { t: "Significant figures", d: "The certain digits plus the first uncertain digit of a measurement." },
    { t: "Parallax", d: "A reading error caused by the position of the eye relative to the scale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is the sensitivity of an instrument?", options: ["The maximum measurable value", "The smallest detectable change", "How quickly it responds", "The price of the instrument"], answer: 1, explain: "Sensitivity is the smallest change the instrument can register." },
      { type: "tf", q: "A very precise instrument is necessarily also accurate.", answer: false, explain: "It can give values close to each other but all shifted from the true value, because of a systematic error." },
      { type: "mc", q: "The scale reads 10 g with an empty pan. What type of error is this?", options: ["Random", "Systematic", "Gross", "Relative"], answer: 1, explain: "It shifts all the measurements in the same direction: a zero error, so systematic." },
      { type: "num", q: "Measurements of a length: 8.2 cm; 8.4 cm; 8.3 cm; 8.3 cm. Calculate the mean value.", answer: 8.3, tol: 0.01, unit: "cm", explain: "(8.2 + 8.4 + 8.3 + 8.3) / 4 = 33.2 / 4 = 8.3 cm." },
      { type: "num", q: "With the same measurements (8.2; 8.4; 8.3; 8.3 cm) calculate the absolute error as the half-range.", answer: 0.1, tol: 0.001, unit: "cm", explain: "(8.4 − 8.2) / 2 = 0.1 cm." },
      { type: "num", q: "A measurement is (50 ± 2) cm. Calculate the percentage error.", answer: 4, tol: 0.01, unit: "%", explain: "E_r = 2/50 = 0.04, i.e. 4 %." },
      { type: "mc", q: "How many significant figures does 4.050 have?", options: ["2", "3", "4", "5"], answer: 2, explain: "The zero between 4 and 5 and the trailing zero after the decimal point are significant: 4 figures." },
      { type: "mc", q: "What is the result of 12.34 + 0.5 with significant figures?", options: ["12.84", "12.8", "13", "12.9"], answer: 1, explain: "In sums you keep the number of decimal places of the datum with the fewest (1): 12.8." },
      { type: "tf", q: "When you subtract two measurements, the absolute errors are subtracted.", answer: false, explain: "In the worst case the absolute errors add up, even in a difference." },
      { type: "order", q: "Put the steps for writing the result of repeated measurements in order.", items: ["Take several measurements", "Calculate the mean value", "Calculate the absolute error", "Write x = mean ± error with the right figures"], explain: "First collect the data, then the mean, then the error, and finally write the result." }
    ]
  }
});
