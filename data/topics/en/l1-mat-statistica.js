TOPIC('en', {
  id: "l1-mat-statistica",
  title: "Descriptive statistics",
  intro: "Every day we are bombarded with numbers: polls, percentages, \"on average\", \"the majority of\"… <b>Statistics</b> is the science that lets us collect data, organise it, summarise it and read it critically. In this lesson you will learn to build frequency tables and charts and to calculate the <b>measures</b> that summarise a set of data: <b>mean, median, mode</b> and the measures of <b>spread</b> (range, variance, standard deviation).",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Population, sample, variable",
      html: `<p>Descriptive statistics starts from a few terms:</p>
<ul>
<li><b>Population</b>: the set of all the individuals being studied (the students of a school, the families of a city…). Each element is a <b>statistical unit</b>.</li>
<li><b>Sample</b>: a subset of the population, chosen to study it without asking everyone. For a sample to be reliable it must be <b>representative</b> (chosen at random, not just among your friends!).</li>
<li><b>Variable</b> (characteristic): what is observed for each unit; its possible values are called <b>categories</b> or values.</li>
</ul>
<p>Variables can be:</p>
<ul>
<li><b>qualitative</b> (categorical): the values are names (eye colour, favourite team, school track);</li>
<li><b>quantitative discrete</b>: whole numbers obtained by counting (number of siblings, whole-number marks);</li>
<li><b>quantitative continuous</b>: measured numbers that can take any value in an interval (height, weight, time). They are grouped into <b>classes</b>.</li>
</ul>`
    },
    {
      type: "widget",
      title: "What type of variable is it?",
      widget: "classify",
      options: { groups: ["Qualitative", "Quantitative discrete", "Quantitative continuous"], items: [
        ["eye colour", 0],
        ["number of siblings", 1],
        ["height", 2],
        ["team you support", 0],
        ["report card mark (whole numbers)", 1],
        ["weight", 2],
        ["100 m time", 2],
        ["messages sent per day", 1]
      ] },
      caption: "If you count it, it's discrete; if you measure it, it's continuous; if you describe it in words, it's qualitative."
    },
    {
      type: "text",
      title: "Frequencies and tables",
      html: `<p>After collecting the data, you count how many times each value appears. That count is the <b>frequency</b>:</p>
<ul>
<li><b>absolute frequency</b> (f): how many times the value appears;</li>
<li><b>relative frequency</b> (f/n): the fraction of the total number n of observations (a number between 0 and 1);</li>
<li><b>percentage frequency</b>: the relative frequency × 100;</li>
<li><b>cumulative frequency</b>: the sum of the frequencies up to that value (for variables that can be ordered).</li>
</ul>
<p><b>Example</b>: the marks of 20 students in a test (Italian marks out of 10).</p>
<table>
<tr><th>Mark</th><th>f</th><th>relative f</th><th>%</th><th>cumulative</th></tr>
<tr><td>5</td><td>2</td><td>0.10</td><td>10 %</td><td>2</td></tr>
<tr><td>6</td><td>5</td><td>0.25</td><td>25 %</td><td>7</td></tr>
<tr><td>7</td><td>7</td><td>0.35</td><td>35 %</td><td>14</td></tr>
<tr><td>8</td><td>4</td><td>0.20</td><td>20 %</td><td>18</td></tr>
<tr><td>9</td><td>2</td><td>0.10</td><td>10 %</td><td>20</td></tr>
<tr><td><b>Total</b></td><td><b>20</b></td><td><b>1</b></td><td><b>100 %</b></td><td></td></tr>
</table>
<p>Check: the absolute frequencies add up to n and the relative frequencies always add up to <b>1</b>.</p>`
    },
    {
      type: "svg",
      title: "The chart of the marks",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="560" y2="250" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="250" x2="60" y2="60" stroke="#475569" stroke-width="2"/>
<rect x="80" y="200" width="70" height="50" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="170" y="125" width="70" height="125" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="260" y="75" width="70" height="175" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
<rect x="350" y="150" width="70" height="100" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="440" y="200" width="70" height="50" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<g font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="115" y="278">5</text><text x="205" y="278">6</text><text x="295" y="278">7</text><text x="385" y="278">8</text><text x="475" y="278">9</text>
</g>
<g font-size="16" text-anchor="middle" fill="#1e3a8a">
<text x="115" y="192">2</text><text x="205" y="117">5</text><text x="295" y="67">7</text><text x="385" y="142">4</text><text x="475" y="192">2</text>
</g>
<line x1="290" y1="45" x2="290" y2="250" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<text x="300" y="38" font-size="16" fill="#dc2626" font-weight="bold">mean 6.95 · median 7 · mode 7</text>
<text x="570" y="296" font-size="14" text-anchor="end" fill="#475569">mark</text>
<text x="66" y="52" font-size="14" fill="#475569">number of students</text>
</svg>`,
      caption: "Bar chart of the distribution of marks: the peak is the mode, the dashed line shows where the mean and median fall."
    },
    {
      type: "text",
      title: "Charts and graphs",
      html: `<p>The choice of chart depends on the type of data:</p>
<ul>
<li><b>Bar chart</b>: for qualitative or discrete variables; the bars are separate and their height is proportional to the frequency.</li>
<li><b>Histogram</b>: for continuous variables grouped into classes; the rectangles are <b>adjacent</b> and the <b>area</b> (not the height!) is proportional to the frequency, if the classes have different widths.</li>
<li><b>Pie chart</b>: each value is a sector of a circle with angle = relative frequency × 360°. Useful for showing the parts of a whole.</li>
<li><b>Line graph</b>: for changes over time (temperature trends, population).</li>
</ul>
<p>⚠️ A chart can be misleading: a vertical axis that does not start from zero, or extra dimensions (3D charts), make small differences look big. Always look at the axes!</p>
<p><b>Pie chart example</b>: 35 % of the marks are 7 → angle 0.35 · 360° = <b>126°</b>.</p>`
    },
    {
      type: "text",
      title: "Measures of central tendency: mean, median, mode",
      html: `<p>To summarise a set of data with a single number we use <b>averages</b>:</p>
<ul>
<li><b>Arithmetic mean</b>: the sum of all the values divided by the number of data. With a frequency table you use the weighted mean: (Σ value · frequency)/n.</li>
<li><b>Median</b>: the value <b>in the middle</b> of the ordered data. If n is odd it is the middle value; if n is even it is the mean of the two middle values.</li>
<li><b>Mode</b>: the value with the <b>highest frequency</b>. It may not be unique (bimodal distribution) and it also works for qualitative variables.</li>
</ul>
<p><b>Example</b>: the data 2, 4, 4, 4, 5, 5, 7, 9 (n = 8).</p>
<ul>
<li>Mean: (2 + 4 + 4 + 4 + 5 + 5 + 7 + 9)/8 = 40/8 = <b>5</b>.</li>
<li>Median: the data are already in order; the two middle ones are the 4th and 5th (4 and 5): (4 + 5)/2 = <b>4.5</b>.</li>
<li>Mode: 4 appears three times: <b>4</b>.</li>
</ul>
<p><b>From the marks in the table</b>: mean = (5·2 + 6·5 + 7·7 + 8·4 + 9·2)/20 = 139/20 = <b>6.95</b>; median: the 10th and 11th values are both 7 → <b>7</b>; mode <b>7</b>.</p>`
    },
    {
      type: "example",
      title: "Practical example: the misleading mean",
      html: `<p>In a small company 9 employees earn <b>€1,500</b> a month and the owner <b>€11,500</b>. What is the \"typical\" salary?</p>
<ul>
<li>Mean: (9 · 1,500 + 11,500)/10 = 25,000/10 = <b>€2,500</b>.</li>
<li>Median: <b>€1,500</b>. Mode: <b>€1,500</b>.</li>
</ul>
<p>If the company says \"average salary €2,500\" it is technically true, but no employee earns anything close to it! An <b>outlier</b> shifts the mean a lot, and the median very little. That's why, when data are skewed (incomes, house prices), the <b>median</b> is preferred.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: frequencies and averages",
      questions: [
        { type: "num", q: "In a class of 25 students, 5 cycle to school. What percentage is that?", answer: 20, unit: "%", explain: "5/25 = 0.20 → 20 %." },
        { type: "num", q: "What is the mean of 4, 6, 8, 10, 12?", answer: 8, explain: "40/5 = 8." },
        { type: "num", q: "What is the median of 3, 9, 4, 7, 5?", answer: 5, explain: "In order: 3, 4, 5, 7, 9: the middle value is 5." }
      ]
    },
    {
      type: "text",
      title: "Measures of spread",
      html: `<p>Two classes can have the same mean but be very different: A = {6, 6, 6, 6}, B = {2, 4, 8, 10}: mean 6 in both, but in B the marks are very spread out. <b>Measures of spread</b> (dispersion) measure how scattered the data are:</p>
<ul>
<li><b>Range</b>: maximum − minimum. (A: 0, B: 8.) Simple, but it depends only on the extremes.</li>
<li><b>Deviation</b> of a value: its difference from the mean (x − m). The deviations <b>add up to zero</b>, so they cannot simply be added together.</li>
<li><b>Variance</b> (σ²): the <b>mean of the squared deviations</b>. Squaring removes the signs and gives more weight to large deviations.</li>
<li><b>Standard deviation</b> (σ): the square root of the variance; it has the <b>same unit of measurement</b> as the data.</li>
</ul>
<p><b>Example</b>: data 2, 4, 4, 4, 5, 5, 7, 9 (mean 5). Deviations: −3, −1, −1, −1, 0, 0, 2, 4. Squares: 9, 1, 1, 1, 0, 0, 4, 16, sum 32. Variance = 32/8 = <b>4</b>; standard deviation = √4 = <b>2</b>.</p>
<p>For the marks in the table: Σx² = 991, so σ² = 991/20 − 6.95² = 49.55 − 48.3025 = <b>1.2475</b>, and σ ≈ <b>1.12</b>. A handy formula is σ² = (mean of the squares) − (square of the mean).</p>`
    },
    {
      type: "remember",
      title: "How to choose the measure",
      html: `<ul>
<li><b>Mean</b>: numerical data without outliers; it uses all the data.</li>
<li><b>Median</b>: skewed data or data with outliers; you just need to put the data in order.</li>
<li><b>Mode</b>: the only one that can be used with qualitative variables (favourite colour, brand…).</li>
<li><b>Variance / σ</b>: to tell whether the mean \"represents\" the data well: small σ = data close to the mean.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Did you know? Trilussa's chicken",
      html: `<p>The Roman poet <b>Trilussa</b> (1871–1950) wrote a poem, <i>La statistica</i> (\"Statistics\"), that makes fun of averages: if one person eats two chickens and another eats none, \"on average\" they have each eaten one chicken, but one has indigestion and the other is still hungry. The mean on its own does not tell you <i>how</i> the data are distributed: that's why we also need the median and measures of spread.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know? Florence Nightingale",
      html: `<p>The nurse <b>Florence Nightingale</b> (1820–1910), during the Crimean War (1853–1856), collected data on deaths in British military camps and discovered that most soldiers were dying not from their wounds but from diseases caused by poor hygiene. To convince the government she invented a very effective sector chart, the \"coxcomb diagram\" (named after a rooster's crest): the health reforms that followed saved a great many lives. She was also the first woman elected a member of the Royal Statistical Society. The word <i>statistics</i> comes from <i>Staat</i>, \"State\": it arose to describe the data of the State (population, taxes, armies).</p>`
    },
    {
      type: "example",
      title: "Example: reading a poll critically",
      html: `<p>\"70 % of Italians want a longer school day\", says a headline. Questions to ask: who was asked (is the <b>sample</b> representative, or is it 100 people from a single neighbourhood)? How was the question worded? How many people responded? A relative frequency of 0.7 out of 10 people says much less than out of 1,000. In statistics the quality of the data matters as much as the calculations.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand statistical measures",
      intro: "The mean, median and variance also have intuitive, almost physical interpretations.",
      tabs: [
        {
          label: "⚖️ The mean as a balance point",
          html: `<p>Put the data on a <b>seesaw</b>: each value is a pebble at its position on the number line. The <b>mean</b> is the point where you must place the pivot to keep the seesaw <b>balanced</b>. Data far from the centre \"weigh\" more: that's why an outlier drags the mean. The deviations on the left exactly balance those on the right: their sum is zero.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="50" y1="170" x2="550" y2="170" stroke="#334155" stroke-width="4"/>
<g stroke="#334155" stroke-width="2"><line x1="150" y1="170" x2="150" y2="178"/><line x1="200" y1="170" x2="200" y2="178"/><line x1="250" y1="170" x2="250" y2="178"/><line x1="300" y1="170" x2="300" y2="178"/><line x1="350" y1="170" x2="350" y2="178"/><line x1="400" y1="170" x2="400" y2="178"/><line x1="450" y1="170" x2="450" y2="178"/><line x1="500" y1="170" x2="500" y2="178"/></g>
<g fill="#f59e0b" stroke="#92400e" stroke-width="2">
<circle cx="150" cy="152" r="14"/>
<circle cx="250" cy="152" r="14"/><circle cx="250" cy="124" r="14"/><circle cx="250" cy="96" r="14"/>
<circle cx="300" cy="152" r="14"/><circle cx="300" cy="124" r="14"/>
<circle cx="400" cy="152" r="14"/>
<circle cx="500" cy="152" r="14"/>
</g>
<polygon points="300,176 275,215 325,215" fill="#dc2626"/>
<g font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="150" y="240">2</text><text x="200" y="240">3</text><text x="250" y="240">4</text><text x="300" y="240">5</text><text x="350" y="240">6</text><text x="400" y="240">7</text><text x="450" y="240">8</text><text x="500" y="240">9</text>
</g>
<text x="300" y="268" font-size="17" text-anchor="middle" fill="#dc2626" font-weight="bold">pivot = mean = 5 (balance)</text>
<text x="300" y="40" font-size="17" text-anchor="middle" fill="#1f2937">data: 2, 4, 4, 4, 5, 5, 7, 9</text>
</svg>`
        },
        {
          label: "🍬 Sharing out",
          html: `<p>The mean is the value each individual would have if the total amount were <b>shared out equally</b>. Four friends have 2, 4, 6 and 12 sweets: 24 in total. If they pool them and share them out, each gets 24/4 = <b>6</b>: the mean. With this idea it's easy to see why the deviations add up to zero: those above the mean give away exactly what those below receive.</p>`
        },
        {
          label: "🚶 The median: the queue",
          html: `<p>Line the students up from shortest to tallest: the <b>median</b> is the height of the person in the <b>middle of the line</b>. Half the students are shorter or the same, half are taller or the same. If a very tall basketball player arrives, the line gets longer but <b>the person in the middle hardly changes</b>: that's why the median is robust to outliers. The mean, on the other hand, immediately shifts towards the newcomer.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of descriptive statistics",
      nodes: [
        { id: "pop", label: "Population and sample", x: 50, y: 6, color: "#6366f1", html: "All the individuals, or a representative subset.", why: "Asking everyone is often impossible or too expensive: a sample is studied instead. If it is badly chosen (not random) the results are biased." },
        { id: "car", label: "Variable", x: 20, y: 26, color: "#16a34a", html: "Qualitative, discrete, continuous.", why: "The type of variable decides which charts and which measures make sense: you can't take the mean of colours." },
        { id: "freq", label: "Frequencies", x: 80, y: 26, color: "#f59e0b", html: "Absolute, relative, percentage, cumulative.", why: "They turn a messy list of data into a readable distribution; relative frequencies let you compare samples of different sizes." },
        { id: "graf", label: "Charts", x: 80, y: 52, color: "#a855f7", html: "Bar chart, histogram, pie chart, line graph.", why: "Florence Nightingale used charts to show that health reforms were needed: a picture can convince where tables fail." },
        { id: "pos", label: "Mean, median, mode", x: 25, y: 52, color: "#0ea5e9", html: "Values that summarise the 'centre' of the data.", why: "The mean (Gauss, least squares) minimises the sum of the squared deviations; the median the sum of the absolute deviations; the mode shows the most typical value." },
        { id: "var", label: "Spread", x: 50, y: 74, color: "#ef4444", html: "Range, variance, standard deviation.", why: "They are needed because the centre alone is not enough: the same averages can hide very scattered data." },
        { id: "out", label: "Outliers", x: 82, y: 82, color: "#14b8a6", html: "Data very far from the others.", why: "They shift the mean but not the median: the choice of measure depends on whether there are outliers." },
        { id: "inf", label: "Towards probability", x: 20, y: 88, color: "#ec4899", html: "From describing to predicting.", why: "Inferential statistics uses probability to extend what is observed in the sample to the population, with a margin of error." }
      ],
      edges: [
        ["pop", "car", "you observe a"],
        ["car", "freq", "counted with"],
        ["freq", "graf", "shown with"],
        ["freq", "pos", "summarised by"],
        ["pos", "var", "completed by"],
        ["var", "out", "sensitive to"],
        ["pop", "inf", "leads to"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: spread",
      questions: [
        { type: "tf", q: "The mean of a set of data is sensitive to outliers, the median much less so.", answer: true, explain: "An outlier shifts the mean; the median depends only on the middle value." },
        { type: "num", q: "What is the range of 3, 9, 4, 12, 7?", answer: 9, explain: "12 − 3 = 9." },
        { type: "mc", q: "The variance is…", options: ["the mean of the squared deviations from the mean", "the difference between the maximum and the minimum", "the most frequent value"], answer: 0, explain: "Its square root is the standard deviation." }
      ]
    }
  ],
  glossary: [
    { t: "Population", d: "The set of all the statistical units being studied." },
    { t: "Sample", d: "A representative subset of the population." },
    { t: "Variable", d: "The property observed for each unit: qualitative or quantitative (discrete or continuous)." },
    { t: "Absolute / relative frequency", d: "The number of times a value appears / its fraction of the total." },
    { t: "Arithmetic mean", d: "The sum of the data divided by how many there are." },
    { t: "Median", d: "The middle value of the ordered data." },
    { t: "Mode", d: "The value with the highest frequency." },
    { t: "Range", d: "The difference between the maximum and minimum values." },
    { t: "Variance", d: "The mean of the squared deviations from the mean." },
    { t: "Standard deviation", d: "The square root of the variance." },
    { t: "Outlier", d: "An anomalous value very far from the other data." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "The number of siblings is a variable that is…", options: ["quantitative discrete", "qualitative", "quantitative continuous"], answer: 0, explain: "It is obtained by counting: whole-number values." },
      { type: "num", q: "What is the mean of 4, 6, 8, 10, 12?", answer: 8, explain: "40/5 = 8." },
      { type: "num", q: "What is the median of 3, 9, 4, 7, 5?", answer: 5, explain: "In order: 3, 4, 5, 7, 9; the middle value is 5." },
      { type: "num", q: "What is the median of 2, 4, 6, 10?", answer: 5, explain: "n is even: the mean of the two middle values, (4 + 6)/2 = 5." },
      { type: "mc", q: "What is the mode of 1, 2, 2, 3, 3, 3, 4?", options: ["3", "2", "2.5"], answer: 0, explain: "3 appears three times, more than any other value." },
      { type: "num", q: "In a sample of 48 people, 12 prefer tea. What is the relative frequency?", answer: 0.25, tol: 0.001, explain: "12/48 = 0.25." },
      { type: "tf", q: "A very large outlier greatly increases the mean but changes the median very little.", answer: true, explain: "This is why the median is often preferred for incomes." },
      { type: "num", q: "Nine employees earn €1,500 and the owner €11,500. What is the mean salary in euros?", answer: 2500, unit: "€", explain: "(9 · 1,500 + 11,500)/10 = €2,500." },
      { type: "order", q: "Put in order the steps to calculate the variance.", items: ["Calculate the mean", "Calculate the deviations from the mean", "Square the deviations", "Take the mean of the squared deviations"], explain: "The square root of the variance is the standard deviation." },
      { type: "num", q: "What is the standard deviation of the data 4 and 6?", answer: 1, explain: "Mean 5; deviations −1 and +1; squares 1 and 1; variance 1; square root 1." }
    ]
  }
});
