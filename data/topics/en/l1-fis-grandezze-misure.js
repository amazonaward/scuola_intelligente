TOPIC('en', {
  id: "l1-fis-grandezze-misure",
  title: "Physical quantities and the International System",
  intro: "Physics begins when we stop saying “it's long”, “it's heavy”, “it's fast” and start saying <b>how much</b>. To do that we need <b>quantities</b>, <b>units of measurement</b> that everyone shares, and a handy way of writing huge or tiny numbers. In this lesson we look at the <b>International System (SI)</b>, prefixes, unit conversions, <b>scientific notation</b> and <b>orders of magnitude</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "What is a physical quantity?",
      html: `<p>A <b>physical quantity</b> is a property of an object or a phenomenon that can be <b>measured</b>: the length of a desk, the mass of a backpack, the duration of a lesson, the temperature of a room. “Beautiful”, “nice” or “good” are not physical quantities: there is no instrument that can measure them objectively.</p>
<p><b>Measuring</b> a quantity means <b>comparing it with a quantity of the same kind chosen as a standard</b> (the <b>unit of measurement</b>) and counting how many times the unit fits into it. The result is a <b>number followed by a unit</b>:</p>
<p style="text-align:center"><b>measurement = number × unit</b>, for example l = 3.2 m</p>
<p>Without its unit, a number in physics is meaningless: “5” could be 5 metres, 5 seconds or 5 kilos. Physical quantities are divided into:</p>
<ul>
<li><b>base (fundamental) quantities</b>: chosen as the starting point (length, mass, time…);</li>
<li><b>derived quantities</b>: obtained by combining base quantities through products and ratios (area, volume, speed, density…).</li>
</ul>`
    },
    {
      type: "text",
      title: "The International System (SI)",
      html: `<p>For centuries every country, and sometimes every city, used its own units (feet, arm-lengths, pounds, ounces…). In 1960 the General Conference on Weights and Measures adopted the <b>International System of Units</b>, now used throughout the scientific world. It has <b>seven base quantities</b>:</p>
<table>
<tr><th>Quantity</th><th>Unit</th><th>Symbol</th></tr>
<tr><td>Length</td><td>metre</td><td>m</td></tr>
<tr><td>Mass</td><td>kilogram</td><td>kg</td></tr>
<tr><td>Time</td><td>second</td><td>s</td></tr>
<tr><td>Electric current</td><td>ampere</td><td>A</td></tr>
<tr><td>Thermodynamic temperature</td><td>kelvin</td><td>K</td></tr>
<tr><td>Amount of substance</td><td>mole</td><td>mol</td></tr>
<tr><td>Luminous intensity</td><td>candela</td><td>cd</td></tr>
</table>
<p>In the first-year course we mainly use the first three: <b>length, mass, time</b>.</p>`
    },
    {
      type: "widget",
      title: "Base or derived?",
      widget: "classify",
      options: { groups: ["Base (SI)", "Derived"], items: [
        ["Length", 0],
        ["Speed", 1],
        ["Mass", 0],
        ["Area", 1],
        ["Time", 0],
        ["Density", 1],
        ["Temperature (kelvin)", 0],
        ["Volume", 1],
        ["Force", 1]
      ] },
      caption: "Derived quantities are obtained from base quantities through products and ratios."
    },
    {
      type: "text",
      title: "How units are defined",
      html: `<p>Over time the definitions have changed to make them ever more precise and reproducible:</p>
<ul>
<li>the <b>metre</b> is now defined as the distance travelled by light in a vacuum in <b>1/299 792 458 of a second</b>; in 1791 it was instead conceived as one ten-millionth of a quarter of the Earth's meridian;</li>
<li>the <b>second</b> is the duration of <b>9 192 631 770 periods</b> of the radiation emitted by a caesium-133 atom;</li>
<li>the <b>kilogram</b>, which until 2019 was defined by a platinum-iridium cylinder kept at Sèvres (France), has been defined since 20 May 2019 in terms of the <b>Planck constant</b>.</li>
</ul>
<p>Today all SI units are based on <b>fundamental constants of nature</b>: they no longer depend on an object that might deteriorate.</p>`
    },
    {
      type: "text",
      title: "Derived quantities",
      html: `<p>The units of derived quantities are obtained by combining the base units:</p>
<table>
<tr><th>Quantity</th><th>Definition</th><th>SI unit</th></tr>
<tr><td>Area</td><td>length × length</td><td>m²</td></tr>
<tr><td>Volume</td><td>length × length × length</td><td>m³</td></tr>
<tr><td>Speed</td><td>distance / time</td><td>m/s</td></tr>
<tr><td>Density</td><td>mass / volume</td><td>kg/m³</td></tr>
<tr><td>Force (we will study it)</td><td>mass × acceleration</td><td>newton: N = kg·m/s²</td></tr>
</table>
<p>To check whether a formula is correct we use <b>dimensional analysis</b>: the units must match. Example: speed is distance/time, so the formula <i>v = s / t</i> has units of m/s. If instead you wrote <i>v = s · t</i> you would get m·s, which is not a speed.</p>`
    },
    {
      type: "remember",
      title: "Rules for writing measurements",
      html: `<ul>
<li>A unit symbol is written <b>without a full stop</b> and <b>without a plural</b>: 5 kg, not “5 kg.” or “5 kgs”</li>
<li>Leave a space between the number and the unit: 12 m.</li>
<li>Unit symbols derived from a person's name take a <b>capital letter</b> (N for Newton, K for Kelvin, A for Ampère); the others are lower case (m, kg, s).</li>
<li>In English the decimal separator is a point: 3.5 m (in Italy a comma is used: 3,5 m).</li>
</ul>`
    },
    {
      type: "text",
      title: "Multiples and submultiples",
      html: `<p>When a quantity is much larger or smaller than the unit, we use <b>prefixes</b>, which multiply the unit by a power of 10:</p>
<table>
<tr><th>Prefix</th><th>Symbol</th><th>Factor</th></tr>
<tr><td>tera</td><td>T</td><td>10¹²</td></tr>
<tr><td>giga</td><td>G</td><td>10⁹</td></tr>
<tr><td>mega</td><td>M</td><td>10⁶</td></tr>
<tr><td>kilo</td><td>k</td><td>10³</td></tr>
<tr><td>centi</td><td>c</td><td>10⁻²</td></tr>
<tr><td>milli</td><td>m</td><td>10⁻³</td></tr>
<tr><td>micro</td><td>μ</td><td>10⁻⁶</td></tr>
<tr><td>nano</td><td>n</td><td>10⁻⁹</td></tr>
<tr><td>pico</td><td>p</td><td>10⁻¹²</td></tr>
</table>
<p>Examples: 1 km = 10³ m; 1 mm = 10⁻³ m; 1 GB = 10⁹ bytes; 1 nm = 10⁻⁹ m (a fraction of the diameter of a virus).</p>
<p>Watch out for the <b>kilogram</b>: it is the only SI base unit that already contains a prefix. Multiples and submultiples are formed from the gram (1 mg = 10⁻³ g = 10⁻⁶ kg).</p>`
    },
    {
      type: "widget",
      title: "Prefixes and powers of 10",
      widget: "match",
      options: { pairs: [
        ["kilo (k)", "10³"],
        ["mega (M)", "10⁶"],
        ["giga (G)", "10⁹"],
        ["milli (m)", "10⁻³"],
        ["micro (μ)", "10⁻⁶"],
        ["nano (n)", "10⁻⁹"]
      ] },
      caption: "Match each prefix with its factor."
    },
    {
      type: "svg",
      title: "The ladder of prefixes",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Each step is worth a thousand times the previous one</text>
<line x1="30" y1="130" x2="610" y2="130" stroke="#334155" stroke-width="3"/>
<g fill="#2563eb"><circle cx="60" cy="130" r="9"/><circle cx="145" cy="130" r="9"/><circle cx="230" cy="130" r="9"/><circle cx="315" cy="130" r="9"/><circle cx="400" cy="130" r="9"/><circle cx="485" cy="130" r="9"/><circle cx="570" cy="130" r="9"/></g>
<g font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">
<text x="60" y="108">nano</text><text x="145" y="108">micro</text><text x="230" y="108">milli</text><text x="315" y="108">unit</text><text x="400" y="108">kilo</text><text x="485" y="108">mega</text><text x="570" y="108">giga</text>
</g>
<g font-size="15" text-anchor="middle" fill="#1d4ed8">
<text x="60" y="160">10⁻⁹</text><text x="145" y="160">10⁻⁶</text><text x="230" y="160">10⁻³</text><text x="315" y="160">1</text><text x="400" y="160">10³</text><text x="485" y="160">10⁶</text><text x="570" y="160">10⁹</text>
</g>
<g font-size="14" text-anchor="middle" fill="#475569">
<text x="102" y="205">× 1000</text><text x="187" y="205">× 1000</text><text x="272" y="205">× 1000</text><text x="357" y="205">× 1000</text><text x="442" y="205">× 1000</text><text x="527" y="205">× 1000</text>
</g>
<text x="320" y="262" font-size="15" text-anchor="middle" fill="#0f172a">To move to the prefix on the right: divide the number by 1000</text>
</g>
</svg>`,
      caption: "Moving to the right, the same amount is expressed by a number a thousand times smaller (1000 m = 1 km)."
    },
    {
      type: "example",
      title: "Unit conversions in practice",
      html: `<p><b>1)</b> Convert 2.5 km into metres: 2.5 × 10³ m = <b>2500 m</b>.</p>
<p><b>2)</b> Convert 450 mm into metres: 450 × 10⁻³ m = <b>0.45 m</b>.</p>
<p><b>3)</b> Convert 36 km/h into m/s: 36 × 1000 m / 3600 s = <b>10 m/s</b>. Rule of thumb: to go from km/h to m/s divide by 3.6; to go the other way multiply by 3.6.</p>
<p><b>4)</b> Areas and volumes: 1 m² = (10² cm)² = <b>10⁴ cm²</b>; 1 m³ = <b>10⁶ cm³</b>; 1 L = 1 dm³ = 10⁻³ m³. Careful: for areas and volumes the factors are squared and cubed!</p>
<p><b>5)</b> Density: 1 g/cm³ = 10⁻³ kg / 10⁻⁶ m³ = <b>10³ kg/m³</b>. Water has a density of about 1000 kg/m³.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: units and prefixes",
      questions: [
        { type: "num", q: "How many metres are 3.2 km?", answer: 3200, tol: 0, unit: "m", explain: "3.2 × 1000 = 3200 m." },
        { type: "num", q: "Convert 72 km/h into m/s.", answer: 20, tol: 0, unit: "m/s", explain: "72 ÷ 3.6 = 20 m/s." },
        { type: "tf", q: "The kilogram is the unit of mass of the International System.", answer: true, explain: "The kg is the SI unit of mass." }
      ]
    },
    {
      type: "text",
      title: "Scientific notation",
      html: `<p>Numbers like the mass of the Earth (5 970 000 000 000 000 000 000 000 kg) are awkward to write. We use <b>scientific notation</b>:</p>
<p style="text-align:center"><b>a × 10ⁿ</b> with <b>1 ≤ a &lt; 10</b> and n an integer</p>
<p>To write a number in scientific notation, move the decimal point until there is a single non-zero digit before it; the exponent n is the number of places the point has moved (positive if the number was large, negative if it was small).</p>
<ul>
<li>45 000 = <b>4.5 × 10⁴</b> (point moved 4 places to the left)</li>
<li>0.00032 = <b>3.2 × 10⁻⁴</b> (point moved 4 places to the right)</li>
<li>Mass of the Earth ≈ <b>5.97 × 10²⁴ kg</b></li>
<li>Mass of the electron ≈ <b>9.11 × 10⁻³¹ kg</b></li>
</ul>
<p><b>Operations.</b> When multiplying, multiply the numbers and add the exponents: (2 × 10³)(3 × 10⁴) = 6 × 10⁷. When dividing, subtract the exponents: (8 × 10⁹)/(2 × 10³) = 4 × 10⁶. To add, you must first bring the numbers to the same power of 10.</p>`
    },
    {
      type: "text",
      title: "Order of magnitude",
      html: `<p>The <b>order of magnitude</b> of a number is the <b>power of 10 closest</b> to that number. It gives a quick idea of the “scale” of a quantity and is useful for estimates.</p>
<p>Rule of thumb: write the number in scientific notation as a × 10ⁿ. If <b>a &lt; 5</b> the order of magnitude is <b>10ⁿ</b>; if <b>a ≥ 5</b> it is <b>10ⁿ⁺¹</b> (the exact threshold would be √10 ≈ 3.16, but school textbooks often use 5).</p>
<ul>
<li>3.2 × 10⁴ → order of magnitude 10⁴</li>
<li>8 × 10⁴ → 10⁵</li>
<li>Diameter of an atom: ≈ 10⁻¹⁰ m. Diameter of a hair: ≈ 10⁻⁴ m. Height of a person: ≈ 10⁰ m. Earth's radius: ≈ 10⁷ m (6.4 × 10⁶ m). Earth–Sun distance: ≈ 10¹¹ m (1.5 × 10¹¹ m).</li>
</ul>
<p>Two quantities that differ by <b>n orders of magnitude</b> have a ratio of about 10ⁿ.</p>`
    },
    {
      type: "widget",
      title: "From the smallest to the largest",
      widget: "flashcards",
      options: { cards: [
        { front: "⚛️ Atomic nucleus", back: "about 10⁻¹⁵ m" },
        { front: "🔬 Atom", back: "about 10⁻¹⁰ m" },
        { front: "🦠 Bacterium", back: "about 10⁻⁶ m" },
        { front: "💇 Thickness of a hair", back: "about 10⁻⁴ m" },
        { front: "🧍 A person", back: "about 10⁰ m (1–2 m)" },
        { front: "🌍 Radius of the Earth", back: "6.4 × 10⁶ m, order 10⁷ m" },
        { front: "☀️ Earth–Sun distance", back: "1.5 × 10¹¹ m" },
        { front: "✨ One light-year", back: "about 9.5 × 10¹⁵ m" },
        { front: "🌌 Diameter of the Milky Way", back: "about 10²¹ m" }
      ] },
      caption: "Flip the cards: the whole observable Universe fits into 36 orders of magnitude."
    },
    {
      type: "example",
      title: "Estimating: how many times does the heart beat?",
      html: `<p>A person has about <b>70 heartbeats per minute</b>. How many beats in a lifetime of 80 years?</p>
<ol>
<li>Minutes in a year: 60 × 24 × 365 ≈ 5.3 × 10⁵.</li>
<li>Minutes in 80 years: 5.3 × 10⁵ × 80 ≈ 4.2 × 10⁷.</li>
<li>Beats: 70 × 4.2 × 10⁷ ≈ <b>3 × 10⁹</b>, that is about <b>three billion</b>.</li>
</ol>
<p>The order of magnitude is 10⁹: we don't need the exact number, it is enough to understand that we are talking about billions.</p>`
    },
    {
      type: "curiosity",
      title: "The Mars Climate Orbiter disaster",
      html: `<p>In 1999 NASA's <b>Mars Climate Orbiter</b> probe was destroyed in the atmosphere of Mars while trying to enter orbit, at a much lower altitude than planned. The cause: one piece of software supplied thrust data in <b>pound-force</b> (an imperial unit), while another program expected it in <b>newtons</b> (SI). A units mistake cost about 125 million dollars.</p>`
    },
    {
      type: "curiosity",
      title: "A metre born of the Revolution",
      html: `<p>The decimal metric system was designed in France during the Revolution, with the idea of creating measures “for all times, for all peoples”. In 1791 the Academy of Sciences proposed defining the metre as <b>one ten-millionth of a quarter of the Earth's meridian</b>. Two astronomers, Delambre and Méchain, measured the arc of meridian between Dunkirk and Barcelona, amid countless difficulties and even arrests. The platinum standard was made in 1799.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand unit conversions",
      intro: "If unit conversions confuse you, try looking at them in a different way.",
      tabs: [
        {
          label: "🪜 The ladder of prefixes",
          html: "<p>Imagine a <b>staircase</b> (as in the drawing): each step multiplies or divides by 1000. If you go down one step, the <b>number</b> is multiplied by 1000 (3 km = 3000 m); if you go up, it is divided by 1000 (3000 m = 3 km). For <b>areas</b> each step is worth 10⁶ (1 km² = 10⁶ m²), for <b>volumes</b> 10⁹ (1 km³ = 10⁹ m³).</p>"
        },
        {
          label: "🧮 The conversion-factor method",
          html: "<p>Multiply by a fraction equal to 1, written so that the unwanted units cancel out.<br>Example: 54 km/h = 54 <u>km</u>/<u>h</u> × (1000 m / 1 <u>km</u>) × (1 <u>h</u> / 3600 s) = 54 000 / 3600 m/s = <b>15 m/s</b>.<br>Just check that only the units you want are left at the end: if not, you have turned a fraction upside down.</p>"
        },
        {
          label: "🔢 The scientific-notation method",
          html: "<p>Replace the prefix with its power of 10: 45 μm = 45 × 10⁻⁶ m = 4.5 × 10⁻⁵ m. With scientific notation you don't lose any zeros and you can easily compare very different quantities: the numbers are just two digits long and the <b>exponent</b> does the work.</p>"
        },
        {
          label: "📏 Drawing: orders of magnitude",
          html: "<p>Each step to the right on the line is one more power of 10.</p>",
          svg: "<svg viewBox='0 0 600 200' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='200' fill='#fff7ed'/><line x1='40' y1='100' x2='560' y2='100' stroke='#9a3412' stroke-width='3'/><g fill='#ea580c'><circle cx='60' cy='100' r='8'/><circle cx='150' cy='100' r='8'/><circle cx='240' cy='100' r='8'/><circle cx='330' cy='100' r='8'/><circle cx='420' cy='100' r='8'/><circle cx='510' cy='100' r='8'/></g><g font-family='sans-serif' font-size='15' text-anchor='middle' fill='#7c2d12'><text x='60' y='80'>10⁻¹⁰</text><text x='150' y='80'>10⁻⁶</text><text x='240' y='80'>10⁻²</text><text x='330' y='80'>10²</text><text x='420' y='80'>10⁶</text><text x='510' y='80'>10¹⁰</text><text x='60' y='135'>atom</text><text x='150' y='135'>bacterium</text><text x='240' y='135'>ant</text><text x='330' y='135'>field</text><text x='420' y='135'>Italy</text><text x='510' y='135'>Earth–Moon x30</text></g></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of quantities and measurements",
      nodes: [
        { id: "grandezza", label: "Physical quantity", x: 50, y: 8, color: "#2563eb", html: "A measurable property of an object or phenomenon.", why: "Galileo argued that the book of nature is written in the language of mathematics: to study a phenomenon you must first find what can be measured. Modern physics was born when measurable quantities (time, space, mass) were chosen instead of vague qualities." },
        { id: "misura", label: "Measurement = number × unit", x: 18, y: 42, color: "#16a34a", html: "Comparison with a standard of the same kind: the unit of measurement.", why: "A measurement is a comparison: saying that a table is 2 m long means that the standard metre fits into the table twice. Without a shared standard, results obtained by different people cannot be compared." },
        { id: "si", label: "International System", x: 82, y: 42, color: "#f59e0b", html: "Seven base units shared all over the world.", why: "The SI grew out of the French decimal metric system (1790–99) and the Metre Convention (1875). Since 2019 the units have been defined through physical constants (c, h, e, k, N_A), so they are stable and reproducible anywhere." },
        { id: "derivate", label: "Derived quantities", x: 82, y: 78, color: "#8b5cf6", html: "Area, volume, speed, density, force…", why: "Derived quantities come from physical laws: speed is the ratio of distance to time; force (F = m·a) combines mass and acceleration. Their units are obtained from the base units." },
        { id: "potenze", label: "Powers of 10 and prefixes", x: 18, y: 78, color: "#ef4444", html: "Scientific notation, orders of magnitude, multiples and submultiples.", why: "The Universe ranges from 10⁻¹⁵ m to 10²⁶ m: no ordinary way of writing numbers can cope. Powers of 10 are the logarithmic scale scientists use to find their way between the atomic nucleus and the galaxies." },
        { id: "stima", label: "Estimates and checks", x: 50, y: 78, color: "#64748b", html: "Dimensional analysis and orders of magnitude to check results.", why: "Enrico Fermi was famous for his quick estimates (“Fermi problems”): a result with the wrong order of magnitude is certainly wrong, so an estimate is a valuable check." }
      ],
      edges: [["grandezza", "misura", "is expressed as"], ["misura", "si", "uses units of the"], ["si", "derivate", "generates"], ["grandezza", "potenze", "is written with"], ["potenze", "stima", "are used for"], ["derivate", "stima", "are checked with"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz: scientific notation",
      questions: [
        { type: "mc", q: "How do you write 0.0045 in scientific notation?", options: ["4.5 × 10⁻³", "4.5 × 10³", "45 × 10⁻⁴", "0.45 × 10⁻²"], answer: 0, explain: "Move the decimal point 3 places to the right: 4.5 × 10⁻³." },
        { type: "mc", q: "What is the order of magnitude of 7.5 × 10⁵?", options: ["10⁵", "10⁶", "10⁴", "10⁷"], answer: 1, explain: "Since 7.5 ≥ 5, the order of magnitude is 10⁶." },
        { type: "num", q: "Calculate (2 × 10⁴) × (3 × 10⁵) and give the exponent of 10 in the result written as 6 × 10ⁿ.", answer: 9, tol: 0, explain: "6 × 10⁹: the exponents add up, 4 + 5 = 9." }
      ]
    }
  ],
  glossary: [
    { t: "Physical quantity", d: "A property of an object or phenomenon that can be measured." },
    { t: "Unit of measurement", d: "A standard quantity with which other quantities of the same kind are compared." },
    { t: "International System (SI)", d: "The system of units adopted throughout the scientific world, with seven base quantities." },
    { t: "Derived quantity", d: "A quantity obtained from base quantities through products and ratios, such as speed or density." },
    { t: "Prefix", d: "The first part of a unit, indicating a multiple or submultiple (kilo-, milli-…)." },
    { t: "Scientific notation", d: "Writing a number as a × 10ⁿ, with 1 ≤ a < 10." },
    { t: "Order of magnitude", d: "The power of 10 closest to a number." },
    { t: "Dimensional analysis", d: "Checking a formula by means of its units of measurement." },
    { t: "Density", d: "The ratio of the mass of an object to its volume (kg/m³)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Measuring a quantity means:", options: ["Estimating it by eye", "Comparing it with a standard of the same kind, the unit of measurement", "Counting how many digits it has", "Calculating it with a formula"], answer: 1, explain: "A measurement is the ratio between the quantity and the chosen unit." },
      { type: "tf", q: "The International System has seven base quantities.", answer: true, explain: "Length, mass, time, current, temperature, amount of substance and luminous intensity." },
      { type: "text", q: "What is the correct symbol for the SI unit of mass?", answer: ["kg"], explain: "The kilogram is written kg, without a full stop and without a plural." },
      { type: "num", q: "How many metres are 450 mm?", answer: 0.45, tol: 0.001, unit: "m", explain: "450 × 10⁻³ m = 0.45 m." },
      { type: "num", q: "How many metres per second are 108 km/h?", answer: 30, tol: 0.01, unit: "m/s", explain: "108 ÷ 3.6 = 30 m/s." },
      { type: "mc", q: "Which is the correct SI unit for density?", options: ["kg·m", "kg/m³", "m/s", "kg/s"], answer: 1, explain: "Density = mass/volume, so kg/m³." },
      { type: "mc", q: "Write 52 000 000 in scientific notation.", options: ["52 × 10⁶", "5.2 × 10⁷", "0.52 × 10⁸", "5.2 × 10⁶"], answer: 1, explain: "The decimal point must move 7 places: 5.2 × 10⁷." },
      { type: "mc", q: "What is the order of magnitude of 3 × 10⁻⁵?", options: ["10⁻⁴", "10⁻⁵", "10⁻⁶", "10⁵"], answer: 1, explain: "Since 3 < 5, the order of magnitude is 10⁻⁵." },
      { type: "tf", q: "1 m² is equal to 100 cm².", answer: false, explain: "1 m² = (100 cm)² = 10 000 cm² = 10⁴ cm²." },
      { type: "order", q: "Put in order from smallest to largest.", items: ["1 nm", "1 μm", "1 mm", "1 km"], explain: "nano 10⁻⁹ m < micro 10⁻⁶ m < milli 10⁻³ m < kilo 10³ m." }
    ]
  }
});
