TOPIC('en', {
  id: "l3-mat-statistica-bivariata",
  title: "Bivariate statistics",
  intro: "The more hours you study, the higher your mark? The higher the temperature, the more ice creams are sold? The taller you are, the more you weigh? So far you have studied <b>one variable at a time</b> (mean, median, standard deviation). Now we observe <b>two together</b>, on the same individuals, and ask whether and how strongly they are related. We will learn to represent them with a <b>scatter plot</b>, to measure the relationship with the <b>covariance</b> and the <b>correlation coefficient</b>, to build the <b>regression line</b> to make predictions and, above all, not to be fooled: <b>correlation does not mean causation</b>.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Two variables on the same individuals",
      html: `<p>A <b>bivariate distribution</b> is a set of pairs (xᵢ, yᵢ), where x and y are two characteristics measured on the same individual: hours of study and mark, height and weight, age and 100-metre time. If there are only a few data they are written as a list of pairs; if there are many, taking only a few values, they are organised in a <b>two-way table</b> (or contingency table), with the <b>joint frequencies</b> in the cells and the <b>marginal frequencies</b> (row and column totals) describing each variable on its own.</p>
<p>The first step is always to <b>look at the data</b> with a <b>scatter plot</b> (scatter diagram): each individual is a point in the Cartesian plane. The cloud of points immediately reveals:</p>
<ul>
<li>the <b>direction</b> of the relationship: points going up (<b>positive correlation</b>), going down (<b>negative</b>), a shapeless cloud (<b>no correlation</b>);</li>
<li>the <b>strength</b>: points close to a line (strong relationship) or scattered (weak);</li>
<li>the <b>form</b>: linear, curved, in clusters; and any <b>outliers</b>.</li>
</ul>
<p>A word of warning about language: in many cases one variable is treated as <b>independent or explanatory</b> (x, on the horizontal axis) and the other as <b>dependent or response</b> (y, on the vertical axis), but this is a way of framing the question, not proof that x causes y.</p>`
    },
    {
      type: "svg",
      title: "Three clouds of points",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="10" y="30" width="180" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
<rect x="210" y="30" width="180" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
<rect x="410" y="30" width="180" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
<g fill="#16a34a">
<circle cx="30" cy="205" r="5"/><circle cx="55" cy="180" r="5"/><circle cx="70" cy="195" r="5"/><circle cx="90" cy="150" r="5"/><circle cx="110" cy="160" r="5"/><circle cx="125" cy="115" r="5"/><circle cx="145" cy="100" r="5"/><circle cx="165" cy="65" r="5"/>
</g>
<g fill="#dc2626">
<circle cx="230" cy="60" r="5"/><circle cx="255" cy="95" r="5"/><circle cx="270" cy="80" r="5"/><circle cx="290" cy="130" r="5"/><circle cx="310" cy="120" r="5"/><circle cx="325" cy="165" r="5"/><circle cx="345" cy="180" r="5"/><circle cx="365" cy="205" r="5"/>
</g>
<g fill="#7c3aed">
<circle cx="430" cy="90" r="5"/><circle cx="455" cy="190" r="5"/><circle cx="470" cy="120" r="5"/><circle cx="490" cy="60" r="5"/><circle cx="510" cy="170" r="5"/><circle cx="525" cy="100" r="5"/><circle cx="545" cy="205" r="5"/><circle cx="565" cy="140" r="5"/>
</g>
<text x="100" y="22" font-size="16" fill="#166534" text-anchor="middle" font-weight="bold">r close to +1</text>
<text x="300" y="22" font-size="16" fill="#991b1b" text-anchor="middle" font-weight="bold">r close to −1</text>
<text x="500" y="22" font-size="16" fill="#6d28d9" text-anchor="middle" font-weight="bold">r close to 0</text>
<text x="100" y="255" font-size="14" fill="#334155" text-anchor="middle">positive correlation</text>
<text x="300" y="255" font-size="14" fill="#334155" text-anchor="middle">negative correlation</text>
<text x="500" y="255" font-size="14" fill="#334155" text-anchor="middle">no correlation</text>
<text x="300" y="285" font-size="14" fill="#334155" text-anchor="middle">The sign of r gives the direction, its absolute value the strength of the linear relationship</text>
</svg>`,
      caption: "The scatter plot shows the direction and strength of the relationship before any calculation."
    },
    {
      type: "text",
      title: "Covariance and the correlation coefficient",
      html: `<p>To <b>measure</b> the linear relationship we start from the means x̄ and ȳ. Each point has two deviations: (xᵢ − x̄) and (yᵢ − ȳ). If the two deviations almost always have the same sign (both positive or both negative) their product is positive and the variables "go together"; if they have opposite signs the product is negative. The <b>covariance</b> is the mean of these products:</p>
<p style="text-align:center"><b>σₓᵧ = (1/n) · Σ (xᵢ − x̄)(yᵢ − ȳ)</b></p>
<p>Its sign shows the direction of the relationship, but its value depends on the units of measurement (hours, euros, centimetres…). To get a <b>dimensionless</b> index we divide by the standard deviations:</p>
<p style="text-align:center"><b>r = σₓᵧ / (σₓ · σᵧ)</b> &nbsp; (Pearson's linear correlation coefficient)</p>
<ul>
<li><b>−1 ≤ r ≤ 1</b> always.</li>
<li>r = 1: the points lie exactly on an increasing line; r = −1: on a decreasing line.</li>
<li>r ≈ 0: there is no <i>linear</i> relationship (there could be a relationship of another kind!).</li>
<li>As a rough guide, |r| &gt; 0.7 strong relationship; between 0.3 and 0.7 moderate; below 0.3 weak. These are common-sense thresholds, not absolute rules.</li>
<li>The square <b>r²</b> (coefficient of determination) is the share of the variability of y "explained" by the linear relationship with x.</li>
</ul>
<p>It is named after <b>Karl Pearson</b>, who formalised it towards the end of the nineteenth century, building on the ideas of Darwin's cousin, <b>Francis Galton</b>.</p>`
    },
    {
      type: "example",
      title: "Worked example: revision hours and marks",
      html: `<p>Five students report the hours they spent revising for a test (x) and their mark (y):</p>
<table>
<tr><th>x (hours)</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr><th>y (mark)</th><td>2</td><td>4</td><td>5</td><td>4</td><td>5</td></tr>
</table>
<p><b>Means</b>: x̄ = 15/5 = 3; ȳ = 20/5 = 4.</p>
<p><b>Deviations and products</b>:</p>
<table>
<tr><th>xᵢ − x̄</th><td>−2</td><td>−1</td><td>0</td><td>1</td><td>2</td></tr>
<tr><th>yᵢ − ȳ</th><td>−2</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
<tr><th>product</th><td>4</td><td>0</td><td>0</td><td>0</td><td>2</td></tr>
</table>
<p>Σ(xᵢ − x̄)(yᵢ − ȳ) = 6; Σ(xᵢ − x̄)² = 4 + 1 + 0 + 1 + 4 = 10; Σ(yᵢ − ȳ)² = 4 + 0 + 1 + 0 + 1 = 6.</p>
<p>Covariance σₓᵧ = 6/5 = 1.2; variances σₓ² = 10/5 = 2 and σᵧ² = 6/5 = 1.2. So</p>
<p style="text-align:center"><b>r = 1.2 / √(2 · 1.2) = 1.2/√2.4 ≈ 0.775</b></p>
<p>A positive and fairly strong correlation: r² = 0.6, so about 60% of the variability of the marks, in this small sample, is associated with the revision hours.</p>`
    },
    {
      type: "text",
      title: "The regression line",
      html: `<p>If the cloud is stretched out along a line, we can look for the line that <b>fits it best</b>, in order to make predictions. The <b>least squares</b> criterion chooses the line y = a + bx that minimises the sum of the squares of the <b>residuals</b>, that is, the vertical distances eᵢ = yᵢ − (a + bxᵢ) between the points and the line. The method was published by <b>Adrien-Marie Legendre</b> in 1805 and claimed by <b>Carl Friedrich Gauss</b>, who said he had been using it since 1795.</p>
<p>The solution is given by simple formulas:</p>
<p style="text-align:center"><b>b = σₓᵧ / σₓ²</b> (gradient) &nbsp;&nbsp; <b>a = ȳ − b·x̄</b> (intercept)</p>
<p>The line always passes through the <b>centroid</b> (x̄, ȳ). The coefficient b has the same sign as r: if the correlation is positive the line goes up. It can also be written as b = r · σᵧ/σₓ.</p>
<p><b>In the example</b>: b = 1.2/2 = 0.6; a = 4 − 0.6·3 = 2.2. The line is <b>y = 2.2 + 0.6x</b>. Interpretation: each extra hour of revision is associated, on average, with 0.6 extra marks; with zero hours the model "predicts" 2.2 (a value outside the data, not to be taken too seriously).</p>
<p><b>Prediction</b>: with x = 6 hours the model gives y = 2.2 + 3.6 = 5.8. Careful: the mark cannot go above 10, and 6 hours is beyond the observed range (1–5): this is an <b>extrapolation</b>, and not very reliable. Predicting within the range of the data (<b>interpolation</b>) is much safer: with x = 3.5 we get 4.3.</p>`
    },
    {
      type: "svg",
      title: "Cloud, line and residuals",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="100" y1="260" x2="580" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="100" y1="20" x2="100" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="140" y1="160" x2="540" y2="40" stroke="#2563eb" stroke-width="4"/>
<line x1="180" y1="180" x2="180" y2="148" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4 3"/>
<line x1="260" y1="100" x2="260" y2="124" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4 3"/>
<line x1="340" y1="60" x2="340" y2="100" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4 3"/>
<line x1="420" y1="100" x2="420" y2="76" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4 3"/>
<line x1="500" y1="60" x2="500" y2="52" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4 3"/>
<g fill="#16a34a">
<circle cx="180" cy="180" r="7"/><circle cx="260" cy="100" r="7"/><circle cx="340" cy="60" r="7"/><circle cx="420" cy="100" r="7"/><circle cx="500" cy="60" r="7"/>
</g>
<circle cx="340" cy="100" r="8" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="344" y="122" font-size="14" fill="#991b1b" font-weight="bold">centroid (x̄, ȳ)</text>
<text x="105" y="282" font-size="14" fill="#334155">x: revision hours (1 … 5)</text>
<text x="230" y="35" font-size="16" fill="#1d4ed8" font-weight="bold">line: y = 2.2 + 0.6x</text>
<text x="230" y="55" font-size="14" fill="#9a3412">dashed segments = residuals</text>
<text x="110" y="205" font-size="14" fill="#166534">r ≈ 0.775</text>
</svg>`,
      caption: "The residuals are the vertical distances of the points from the line: the regression line minimises the sum of their squares."
    },
    {
      type: "remember",
      title: "Key formulas",
      html: `<ul>
<li>Covariance: <b>σₓᵧ = (1/n)Σ(xᵢ − x̄)(yᵢ − ȳ)</b> (= mean of the products − product of the means).</li>
<li>Correlation: <b>r = σₓᵧ/(σₓσᵧ)</b>, always between −1 and 1.</li>
<li>Regression of y on x: <b>y = a + bx</b>, with <b>b = σₓᵧ/σₓ²</b> and <b>a = ȳ − b x̄</b>.</li>
<li>The line passes through (x̄, ȳ). The coefficient of determination is <b>r²</b>.</li>
<li><b>Correlation ≠ causation.</b></li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: correlation and the line",
      questions: [
        { type: "mc", q: "A correlation coefficient r = −0.9 indicates…", options: ["a strong, decreasing linear relationship", "no relationship", "a weak, increasing linear relationship"], answer: 0, explain: "The negative sign means y goes down as x increases; |r| = 0.9 is close to 1: a strong relationship." },
        { type: "num", q: "A regression line has b = 2 and passes through the centroid (3, 10). What is the intercept a?", answer: 4, explain: "a = ȳ − b·x̄ = 10 − 2·3 = 4." },
        { type: "tf", q: "If r = 0 then the two variables are certainly independent.", answer: false, explain: "r = 0 only rules out a linear relationship. For example, for y = x² with x symmetric about 0, r = 0 even though y is a function of x." }
      ]
    },
    {
      type: "text",
      title: "Careful: correlation is not causation",
      html: `<p>Finding a strong correlation between two variables does not tell you that one <b>causes</b> the other. There are at least four possible explanations:</p>
<ul>
<li><b>x causes y</b> (for example, studying more improves your marks — plausible, but it needs to be shown);</li>
<li><b>y causes x</b> (reverse causation): are the best basketball players more self-confident, or is it confidence that makes them good?;</li>
<li><b>a third variable</b> affects both (a <b>confounding factor</b>): in summer more ice creams are sold and there are more drownings; the common cause is the heat, which takes more people to the seaside. Eating ice cream does not make you drown;</li>
<li><b>pure chance</b>: with many variables some will correlate by coincidence (there are very funny collections of "spurious correlations").</li>
</ul>
<p>To establish a causal link you need controlled experiments (with a control group and random assignment) or very careful studies, not just the calculation of r.</p>
<p><b>Other traps.</b> <b>Outliers</b> can change r and the line a lot: a single distant point can make a weak relationship look strong or vice versa. <b>Anscombe's quartet</b> (British statistician Francis Anscombe, 1973) consists of four data sets with practically the same mean, the same variance, the same r (≈ 0.82) and the same regression line, but completely different graphs: one almost linear, one curved, one with an outlier, one with a single point that creates the line on its own. The lesson: <b>always plot the data before trusting the numbers</b>.</p>`
    },
    {
      type: "example",
      title: "Practical example: height and stride",
      html: `<p>A group of friends measure their height (cm) and stride length (cm) and, with a regression line calculated from the data, obtain <b>stride = −5 + 0.45·height</b> (an idealised example with simple numbers). For a person 170 cm tall the model predicts 0.45·170 − 5 = 71.5 cm. For a child 100 cm tall it would predict 40 cm: plausible, but the sample did not include children, so this is extrapolation. For a 250 cm giant it would give 107.5 cm: the formula "works" mathematically, but there is no reason to trust it outside the data.</p>
<p>How correlation is used in real life: insurers study the relationship between age and the probability of an accident; doctors that between dose and response to a drug; economists that between education and income; coaches that between minutes played and performance. Each time the question remains: is the relationship causal, or is there a third factor?</p>`
    },
    {
      type: "example",
      title: "Practical example: reading a scatter plot",
      html: `<p>You are shown a graph of the <b>mean temperature in June</b> (x, in °C) and the <b>litres of soft drinks sold</b> by a café (y), over 10 years. The points go up in an almost straight pattern. Questions to ask, in order:</p>
<ol>
<li>Is the relationship linear or curved? (the line only makes sense if it is linear)</li>
<li>Are there outliers? (a year with an exceptional event, such as a local festival, distorts the figures)</li>
<li>What are r and r²? (with r = 0.9, r² = 0.81: 81% of the variability of sales is associated with temperature)</li>
<li>Is the prediction within the range of the data? (a prediction for 40 °C, never observed, would be a leap in the dark)</li>
<li>Does a third variable explain both? (for example tourists: more of them arrive in June and they push up sales regardless of the heat)</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Galton and regression towards the mean",
      html: `<p>The term <b>regression</b> comes from <b>Francis Galton</b> (Charles Darwin's cousin), who in 1886 studied the heights of fathers and sons. He found that very tall fathers tend to have tall sons, but <b>on average less tall than themselves</b>; and very short fathers have sons taller than themselves: heights "regress" towards the population mean. The line with a gradient less than 1 linking the two generations gave its name to the whole technique. The same effect explains why an exceptional performance is often followed by a more ordinary one: it is not bad luck, it is statistics.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Data and models",
      html: `<p>Today the regression line is the ancestor of <b>machine learning</b>: an algorithm that "learns" from lots of data by looking for the parameters that minimise the error, usually a squared error, just like in Gauss's and Legendre's least squares. Modern models have millions of parameters instead of two, but the starting idea is the same: choose a model, measure the errors on the data, adjust the parameters. And the same cautions apply: beware of extrapolation, outliers and the difference between correlation and causation.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand correlation and regression",
      intro: "Covariance and r can look like opaque formulas: here are three pictures to help you \"see\" them.",
      tabs: [
        {
          label: "🟦 Quadrants and signs",
          html: `<p>Draw two lines on the diagram: a vertical one at x̄ and a horizontal one at ȳ. The plane is divided into <b>four quadrants</b> around the centroid. Points in the top-right and bottom-left quadrants have deviations with the same sign: a <b>positive</b> product. Those in the top-left and bottom-right have a <b>negative</b> product. The covariance is the mean of these products: if the cloud mainly occupies the two "positive" quadrants it is positive, if it occupies the other two it is negative, and if the points are spread out evenly it cancels out and r ≈ 0.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="300" y1="10" x2="300" y2="290" stroke="#475569" stroke-width="2"/><line x1="40" y1="150" x2="560" y2="150" stroke="#475569" stroke-width="2"/><text x="420" y="70" font-size="22" fill="#16a34a" font-weight="bold">+</text><text x="170" y="240" font-size="22" fill="#16a34a" font-weight="bold">+</text><text x="170" y="70" font-size="22" fill="#dc2626" font-weight="bold">−</text><text x="420" y="240" font-size="22" fill="#dc2626" font-weight="bold">−</text><text x="310" y="30" font-size="14" fill="#334155">x = x̄</text><text x="500" y="144" font-size="14" fill="#334155">y = ȳ</text><text x="330" y="170" font-size="14" fill="#9a3412">(x̄, ȳ)</text><text x="320" y="285" font-size="14" fill="#334155" text-anchor="start">sign of the product (x − x̄)(y − ȳ)</text></svg>`
        },
        {
          label: "🎯 The line as a target",
          html: `<p>Imagine you have to place a rigid rod on the diagram so that it is as close as possible to all the points. Each point "pulls" the rod towards itself with a force proportional to the <b>square of the vertical distance</b>: the rod settles in its equilibrium position, and that is the least squares line. Squaring means that distant points carry a lot of weight: that is why an outlier moves the line more than an ordinary point. This is why we say that linear regression is not <b>robust</b> to outliers.</p>`
        },
        {
          label: "📐 From data to prediction",
          html: `<p>Think of the regression line as a <b>conversion table</b> generated by the data. With y = 2.2 + 0.6x: x = 1 → 2.8; x = 2 → 3.4; x = 3 → 4; x = 4 → 4.6; x = 5 → 5.2. Comparing with the actual marks (2, 4, 5, 4, 5) the residuals are −0.8; +0.6; +1; −0.6; −0.2: their sum is 0 (it always is), and the squares add up to 0.64 + 0.36 + 1 + 0.36 + 0.04 = 2.4. No other line can get a sum of squared residuals below 2.4 for these five points.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 6, step: 1, marks: [2.2, 4] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of bivariate statistics: tap the nodes to find out why",
      nodes: [
        { id: "dati", label: "Bivariate data", x: 50, y: 6, color: "#6366f1", html: "Pairs (xᵢ, yᵢ) measured on the same individuals.", why: "Many phenomena depend on several quantities; observing them together is the first step in looking for relationships and making predictions." },
        { id: "scatter", label: "Scatter plot", x: 18, y: 30, color: "#16a34a", html: "Each individual is a point in the plane.", why: "The Cartesian plane (Descartes) lets us 'see' two variables together: the shape of the cloud suggests the model before any calculation." },
        { id: "cov", label: "Covariance", x: 82, y: 30, color: "#f59e0b", html: "Mean of the products of the deviations.", why: "It comes from the variance: multiply a deviation by itself and you get the variance; multiply it by the deviation of the other variable and you get the covariance." },
        { id: "r", label: "Coefficient r", x: 50, y: 50, color: "#a855f7", html: "r = σₓᵧ/(σₓσᵧ), between −1 and 1.", why: "Dividing by the standard deviations removes the unit of measurement; the Cauchy–Schwarz inequality guarantees that the value lies between −1 and 1." },
        { id: "reg", label: "Regression line", x: 18, y: 76, color: "#ef4444", html: "y = a + bx with b = σₓᵧ/σₓ², a = ȳ − bx̄.", why: "It is the line that minimises the sum of the squared residuals (least squares, Legendre 1805 and Gauss); setting the derivatives to zero gives exactly these formulas." },
        { id: "caus", label: "Correlation ≠ causation", x: 82, y: 76, color: "#0ea5e9", html: "A statistical relationship does not prove a causal link.", why: "There may be reverse causation, confounding factors or chance: only controlled experiments can establish the cause." },
        { id: "pred", label: "Prediction and limits", x: 50, y: 94, color: "#14b8a6", html: "Interpolating is safe, extrapolating is risky.", why: "The linear model describes the observed data: outside that range there is no reason to think the relationship stays linear (and outliers can shift it)." }
      ],
      edges: [
        ["dati", "scatter", "are seen with"],
        ["dati", "cov", "are measured with"],
        ["cov", "r", "normalised gives"],
        ["scatter", "reg", "suggests"],
        ["r", "reg", "r and b have the same sign"],
        ["r", "caus", "careful"],
        ["reg", "pred", "is used for"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: interpreting the results",
      questions: [
        { type: "mc", q: "In a sample, r = 0.95 is found between the number of firefighters at a fire and the damage it causes. What can be concluded?", options: ["More firefighters cause more damage", "Probably a third factor (how serious the fire is) affects both", "Firefighters are useless"], answer: 1, explain: "It is the classic confounding factor: more serious fires need more firefighters and cause more damage." },
        { type: "num", q: "If r = 0.8, what is r² (the coefficient of determination)?", answer: 0.64, tol: 0.001, explain: "0.8² = 0.64: 64% of the variability of y is explained by the linear relationship with x." },
        { type: "tf", q: "The regression line always passes through the point (x̄, ȳ).", answer: true, explain: "Since a = ȳ − b·x̄, substituting x = x̄ gives y = ȳ." }
      ]
    }
  ],
  glossary: [
    { t: "Bivariate distribution", d: "A set of pairs (xᵢ, yᵢ) of two characteristics measured on the same individuals." },
    { t: "Scatter plot", d: "A graph in which each pair of values is a point in the Cartesian plane." },
    { t: "Covariance", d: "Mean of the products of the deviations (xᵢ − x̄)(yᵢ − ȳ): sign and strength of the linear relationship, with units." },
    { t: "Correlation coefficient", d: "r = σₓᵧ/(σₓσᵧ), between −1 and 1: a dimensionless measure of the linear relationship." },
    { t: "Regression line", d: "The line y = a + bx that minimises the sum of the squared residuals." },
    { t: "Residual", d: "The difference yᵢ − (a + bxᵢ) between the observed value and the value predicted by the line." },
    { t: "Least squares", d: "A method that chooses the parameters of the model by minimising the sum of the squared errors." },
    { t: "Outlier", d: "An anomalous value, very far from the others, that can distort the mean, r and the line." },
    { t: "Confounding factor", d: "A third variable that affects both observed variables, creating an apparent correlation." },
    { t: "Extrapolation", d: "A prediction made outside the range of the observed data: not very reliable." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "The linear correlation coefficient r can take values…", options: ["between −1 and 1", "between 0 and 1", "any real number"], answer: 0, explain: "−1 ≤ r ≤ 1: the extreme values mean the points lie exactly on a line." },
      { type: "num", q: "Given x: 2, 4, 6 and y: 1, 3, 5. What is the mean of y?", answer: 3, explain: "(1 + 3 + 5)/3 = 3." },
      { type: "num", q: "For the same data (x: 2, 4, 6; y: 1, 3, 5), what is r?", answer: 1, explain: "The points lie exactly on the line y = x − 1: perfect positive correlation, r = 1." },
      { type: "mc", q: "A regression line y = 3 + 2x predicts, for x = 4, the value…", options: ["11", "8", "14"], answer: 0, explain: "y = 3 + 2·4 = 11." },
      { type: "tf", q: "If the covariance is negative, the regression line has a negative gradient.", answer: true, explain: "b = σₓᵧ/σₓ² has the same sign as the covariance, because the variance is positive." },
      { type: "mc", q: "The number of ice creams sold and the number of drownings are positively correlated: the most reasonable explanation is…", options: ["ice cream causes drownings", "hot weather (a common factor) increases both", "drownings make people buy more ice cream"], answer: 1, explain: "A confounding factor: summer temperatures explain both phenomena." },
      { type: "tf", q: "Making a prediction outside the range of the observed data is always reliable if r is high.", answer: false, explain: "A high r refers to the observed data; outside that range the relationship might no longer be linear (extrapolation)." },
      { type: "num", q: "If σₓᵧ = 6, σₓ = 2 and σᵧ = 4, what is r?", answer: 0.75, tol: 0.001, explain: "r = 6/(2·4) = 0.75." },
      { type: "text", q: "What is the name of the method that chooses the line by minimising the sum of the squared residuals?", answer: ["least squares", "method of least squares", "least squares method", "the method of least squares", "ordinary least squares"], explain: "It is the method of least squares, published by Legendre in 1805 and used by Gauss." },
      { type: "order", q: "Put the steps for finding the regression line in order.", items: ["Calculate the means x̄ and ȳ", "Calculate the covariance σₓᵧ and the variance σₓ²", "Calculate b = σₓᵧ/σₓ²", "Calculate a = ȳ − b·x̄ and write y = a + bx"], explain: "First the means, then covariance and variance, then the gradient and finally the intercept." }
    ]
  }
});
