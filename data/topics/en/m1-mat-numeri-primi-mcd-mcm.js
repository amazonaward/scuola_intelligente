TOPIC('en', {
  id: "m1-mat-numeri-primi-mcd-mcm",
  title: "Prime numbers, GCD and LCM",
  intro: "Prime numbers are the \"building bricks\" from which all the other natural numbers are made. Let's learn to recognise them, to break numbers down into factors, and to use them to work out the <b>Greatest Common Divisor</b> and the <b>Least Common Multiple</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Multiples and divisors",
      html: `<p>Let's start from two key words:</p>
<ul>
<li>a <b>multiple</b> of a number is obtained by multiplying it by 0, 1, 2, 3…<br>Multiples of 6: 0, 6, 12, 18, 24, 30… (there are infinitely many!)</li>
<li>a <b>divisor</b> of a number is a number that divides it <b>with no remainder</b>.<br>Divisors of 12: 1, 2, 3, 4, 6, 12 (there is a finite number of them).</li>
</ul>
<p>The two ideas go together: if 12 is a <b>multiple</b> of 3, then 3 is a <b>divisor</b> of 12. We also say that 12 is <b>divisible</b> by 3.</p>
<p>Remember: <b>1</b> is a divisor of every number, and every number is a divisor of itself.</p>`
    },
    {
      type: "remember",
      title: "Divisibility rules",
      html: `<p>To find out whether a number is divisible without doing the division:</p>
<table>
<tr><th>By</th><th>Rule</th><th>Example</th></tr>
<tr><td><b>2</b></td><td>the last digit is even (0, 2, 4, 6, 8)</td><td>374 ✔️</td></tr>
<tr><td><b>3</b></td><td>the sum of the digits is divisible by 3</td><td>411 → 4+1+1 = 6 ✔️</td></tr>
<tr><td><b>4</b></td><td>the last two digits form a number divisible by 4 (or are 00)</td><td>1,316 → 16 ✔️</td></tr>
<tr><td><b>5</b></td><td>the last digit is 0 or 5</td><td>845 ✔️</td></tr>
<tr><td><b>9</b></td><td>the sum of the digits is divisible by 9</td><td>738 → 7+3+8 = 18 ✔️</td></tr>
<tr><td><b>10, 100…</b></td><td>it ends in one, two… zeros</td><td>4,500 ✔️</td></tr>
<tr><td><b>11</b></td><td>the difference between the sum of the digits in odd places and in even places is 0 or a multiple of 11</td><td>693 → (6+3) − 9 = 0 ✔️</td></tr>
</table>`
    },
    {
      type: "text",
      title: "Prime numbers and composite numbers",
      html: `<p>A natural number greater than 1 is called:</p>
<ul>
<li><b>prime</b> if it has <b>only two divisors</b>: 1 and itself. Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29…</li>
<li><b>composite</b> if it has <b>more than two divisors</b>. Examples: 4 (1, 2, 4), 9 (1, 3, 9), 12 (1, 2, 3, 4, 6, 12).</li>
</ul>
<p>The number <b>1</b> is neither prime nor composite: it has only one divisor.</p>
<p><b>2</b> is the only even prime number: all other even numbers are divisible by 2, so they are composite.</p>
<p>The prime numbers less than 50 are: <b>2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47</b>.</p>`
    },
    {
      type: "example",
      title: "Practical example: the sieve of Eratosthenes",
      html: `<p>More than 2,200 years ago the Greek mathematician <b>Eratosthenes</b> invented a method for finding prime numbers, like a sieve:</p>
<ol>
<li>Write the numbers from 2 to 100.</li>
<li>2 is prime: circle it and cross out all its multiples (4, 6, 8…).</li>
<li>The first number not crossed out is 3: circle it and cross out its multiples (6, 9, 12…).</li>
<li>Then 5, then 7… Repeat as long as you can.</li>
<li>The numbers left (circled) are all the primes up to 100: there are <b>25</b> of them.</li>
</ol>
<p>To get up to 100 it's enough to cross out the multiples of 2, 3, 5 and 7, because 11 × 11 = 121 is already more than 100.</p>`
    },
    {
      type: "widget",
      title: "Prime or composite?",
      widget: "classify",
      options: {
        groups: ["Prime number", "Composite number"],
        items: [["2", 0], ["9", 1], ["13", 0], ["21", 1], ["29", 0], ["33", 1], ["37", 0], ["49", 1], ["51", 1], ["53", 0], ["57", 1], ["61", 0]]
      },
      caption: "Watch out for traps: 51 = 3 × 17 and 57 = 3 × 19 (use the rule for 3!)."
    },
    {
      type: "text",
      title: "Prime factorisation",
      html: `<p>The <b>Fundamental Theorem of Arithmetic</b> says that every composite number can be written in exactly one way as a <b>product of prime numbers</b> (apart from the order).</p>
<p>To factorise a number you divide by prime numbers, starting from the smallest, until you reach 1. We use a two-column table:</p>
<table>
<tr><td>180</td><td>2</td></tr>
<tr><td>90</td><td>2</td></tr>
<tr><td>45</td><td>3</td></tr>
<tr><td>15</td><td>3</td></tr>
<tr><td>5</td><td>5</td></tr>
<tr><td>1</td><td></td></tr>
</table>
<p>So <b>180 = 2 × 2 × 3 × 3 × 5 = 2² × 3² × 5</b>.</p>
<p>You can also use a <b>factor tree</b>: split the number into any two factors, and carry on until all the \"leaves\" are prime numbers.</p>`
    },
    {
      type: "svg",
      title: "The factor tree of 180",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<g stroke="#64748b" stroke-width="3">
<line x1="300" y1="45" x2="200" y2="105"/><line x1="300" y1="45" x2="400" y2="105"/>
<line x1="200" y1="125" x2="140" y2="185"/><line x1="200" y1="125" x2="260" y2="185"/>
<line x1="400" y1="125" x2="350" y2="185"/><line x1="400" y1="125" x2="450" y2="185"/>
<line x1="450" y1="205" x2="410" y2="255"/><line x1="450" y1="205" x2="490" y2="255"/>
</g>
<g font-size="20" text-anchor="middle" font-weight="bold">
<circle cx="300" cy="35" r="26" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="300" y="42" fill="#312e81">180</text>
<circle cx="200" cy="115" r="22" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="200" y="122" fill="#312e81">10</text>
<circle cx="400" cy="115" r="22" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="400" y="122" fill="#312e81">18</text>
<circle cx="140" cy="195" r="22" fill="#fde047" stroke="#a16207" stroke-width="3"/><text x="140" y="202" fill="#713f12">2</text>
<circle cx="260" cy="195" r="22" fill="#fde047" stroke="#a16207" stroke-width="3"/><text x="260" y="202" fill="#713f12">5</text>
<circle cx="350" cy="195" r="22" fill="#fde047" stroke="#a16207" stroke-width="3"/><text x="350" y="202" fill="#713f12">2</text>
<circle cx="450" cy="195" r="22" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="450" y="202" fill="#312e81">9</text>
<circle cx="410" cy="265" r="22" fill="#fde047" stroke="#a16207" stroke-width="3"/><text x="410" y="272" fill="#713f12">3</text>
<circle cx="490" cy="265" r="22" fill="#fde047" stroke="#a16207" stroke-width="3"/><text x="490" y="272" fill="#713f12">3</text>
</g>
<text x="20" y="275" font-size="18" fill="#111">180 = 2² × 3² × 5</text>
<text x="20" y="250" font-size="14" fill="#a16207">in yellow: the prime factors</text>
</svg>`,
      caption: "You can start in different ways (for example 180 = 12 × 15), but in the end the prime factors are always the same!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: primes and factorisation",
      questions: [
        { type: "tf", q: "The number 1 is a prime number.", answer: false, explain: "1 has only one divisor: it is neither prime nor composite." },
        { type: "mc", q: "Which of these numbers is prime?", options: ["27", "39", "41", "45"], answer: 2, explain: "41 only has the divisors 1 and 41. 27 = 3³, 39 = 3 × 13, 45 = 3² × 5." },
        { type: "mc", q: "What is the prime factorisation of 72?", options: ["2³ × 3²", "2² × 3³", "2 × 36", "8 × 9"], answer: 0, explain: "72 = 8 × 9 = 2³ × 3². 8 and 9 are not prime!" },
        { type: "tf", q: "462 is divisible by 3.", answer: true, explain: "4 + 6 + 2 = 12, which is divisible by 3." }
      ]
    },
    {
      type: "text",
      title: "The Greatest Common Divisor (GCD)",
      html: `<p>The <b>GCD</b> of two or more numbers is the <b>largest</b> of their <b>common divisors</b>. (It is also called the HCF, highest common factor.)</p>
<p><b>Method 1 – list the divisors</b>: GCD(12, 18)?<br>Divisors of 12: 1, 2, <b>3</b>, 4, <b>6</b>, 12 – Divisors of 18: 1, 2, 3, 6, 9, 18.<br>Common: 1, 2, 3, 6 → <b>GCD = 6</b>.</p>
<p><b>Method 2 – factorisation</b> (faster with big numbers):</p>
<ol>
<li>Break the numbers down into prime factors.</li>
<li>Take only the <b>common</b> factors, with the <b>smallest</b> exponent.</li>
<li>Multiply them.</li>
</ol>
<p>GCD(60, 84): 60 = 2² × 3 × 5; 84 = 2² × 3 × 7. Common: 2² and 3 → GCD = 4 × 3 = <b>12</b>.</p>
<p>If the GCD is 1, the numbers are called <b>coprime</b> (e.g. 8 and 15).</p>`
    },
    {
      type: "text",
      title: "The Least Common Multiple (LCM)",
      html: `<p>The <b>LCM</b> of two or more numbers is the <b>smallest</b> of their <b>common multiples</b> (other than 0).</p>
<p><b>Method 1 – list the multiples</b>: LCM(4, 6)?<br>Multiples of 4: 4, 8, <b>12</b>, 16, 20, 24… – Multiples of 6: 6, <b>12</b>, 18, 24…<br>→ <b>LCM = 12</b>.</p>
<p><b>Method 2 – factorisation</b>:</p>
<ol>
<li>Break the numbers down into prime factors.</li>
<li>Take the <b>common and non-common</b> factors, each one once, with the <b>largest</b> exponent.</li>
<li>Multiply them.</li>
</ol>
<p>LCM(60, 84): 60 = 2² × 3 × 5; 84 = 2² × 3 × 7 → 2² × 3 × 5 × 7 = <b>420</b>.</p>
<p>A checking trick for two numbers: <b>GCD × LCM = product of the two numbers</b>. Indeed 12 × 420 = 5,040 = 60 × 84 ✔️</p>`
    },
    {
      type: "example",
      title: "Practical example (GCD): bags of sweets",
      html: `<p>You have <b>24 strawberry sweets</b> and <b>36 lemon sweets</b>. You want to make identical bags, using all the sweets, in the <b>largest possible number</b>. How many bags?</p>
<p>The number of bags must divide both 24 and 36, and be as large as possible: it's the <b>GCD</b>.</p>
<p>24 = 2³ × 3; 36 = 2² × 3² → GCD = 2² × 3 = <b>12 bags</b>.</p>
<p>In each bag: 24 ÷ 12 = <b>2 strawberry</b> and 36 ÷ 12 = <b>3 lemon</b>.</p>
<p>GCD clue words: \"the largest\", \"split into equal parts\", \"with nothing left over\".</p>`
    },
    {
      type: "example",
      title: "Practical example (LCM): the buses",
      html: `<p>At the bus stop, bus <b>A</b> comes every <b>12 minutes</b> and bus <b>B</b> every <b>18 minutes</b>. At 8:00 they leave together. When will they leave together again?</p>
<p>We are looking for the first time that is a multiple of both 12 and 18: it's the <b>LCM</b>.</p>
<p>12 = 2² × 3; 18 = 2 × 3² → LCM = 2² × 3² = <b>36 minutes</b>.</p>
<p>They will leave together again at <b>8:36</b>.</p>
<p>LCM clue words: \"together again\", \"at the same time\", \"the smallest\", events that repeat.</p>`
    },
    {
      type: "curiosity",
      title: "Mathematical cicadas",
      html: `<p>In North America there are cicadas that stay underground for <b>13 or 17 years</b> and then come out all together, in their billions! 13 and 17 are prime numbers.</p>
<p>Scientists think it's a \"trick\" against predators: if a predator has a life cycle of 2, 3, 4 or 6 years, with a prime cycle the cicadas meet it less often. For example, the LCM of 17 and 6 is 102: one meeting every 102 years!</p>`
    },
    {
      type: "curiosity",
      title: "Prime numbers protect your secrets",
      html: `<p>More than 2,300 years ago Euclid proved that there are <b>infinitely many</b> prime numbers.</p>
<p>Today giant prime numbers (with hundreds of digits) are used in <b>cryptography</b>: they protect chat messages, passwords and online payments. Multiplying two enormous primes is easy for a computer, but going back and discovering which ones they were is incredibly hard!</p>
<p>The largest known prime number has more than <b>41 million digits</b>.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand primes, GCD and LCM",
      intro: "There are many roads to the same result. Around the world students use different methods: choose the one that feels most yours.",
      tabs: [
        {
          label: "🧊 Rectangles of cubes (3D)",
          html: "<p>Take 12 cubes: you can arrange them into different rectangles: 1 × 12, 2 × 6, 3 × 4. The sides of the rectangles are exactly the <b>divisors</b> of 12.</p><p>Now try with 7 cubes: the only possible rectangle is a 1 × 7 row. A number is <b>prime</b> when you can <b>only make a row</b>! Change the numbers with the sliders and look for the «row-only» numbers.</p>",
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "🕸️ The sieve of Eratosthenes",
          html: "<p>Eratosthenes (3rd century BC) invented a «sieve»: write the numbers, cross out 1, then circle 2 and cross out all its multiples; circle the first number not crossed out (3) and cross out its multiples; then 5, 7… The ones left are the prime numbers. Here is the result up to 30: the <b>green</b> ones are prime.</p>",
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg"><g font-size="20" font-weight="bold" text-anchor="middle"><rect x="10" y="10" width="54" height="54" fill="#e5e7eb"/><text x="37" y="44" fill="#9ca3af">1</text><rect x="68" y="10" width="54" height="54" fill="#86efac"/><text x="95" y="44" fill="#14532d">2</text><rect x="126" y="10" width="54" height="54" fill="#86efac"/><text x="153" y="44" fill="#14532d">3</text><rect x="184" y="10" width="54" height="54" fill="#fecaca"/><text x="211" y="44" fill="#991b1b">4</text><rect x="242" y="10" width="54" height="54" fill="#86efac"/><text x="269" y="44" fill="#14532d">5</text><rect x="300" y="10" width="54" height="54" fill="#fecaca"/><text x="327" y="44" fill="#991b1b">6</text><rect x="358" y="10" width="54" height="54" fill="#86efac"/><text x="385" y="44" fill="#14532d">7</text><rect x="416" y="10" width="54" height="54" fill="#fecaca"/><text x="443" y="44" fill="#991b1b">8</text><rect x="474" y="10" width="54" height="54" fill="#fecaca"/><text x="501" y="44" fill="#991b1b">9</text><rect x="532" y="10" width="54" height="54" fill="#fecaca"/><text x="559" y="44" fill="#991b1b">10</text><rect x="10" y="70" width="54" height="54" fill="#86efac"/><text x="37" y="104" fill="#14532d">11</text><rect x="68" y="70" width="54" height="54" fill="#fecaca"/><text x="95" y="104" fill="#991b1b">12</text><rect x="126" y="70" width="54" height="54" fill="#86efac"/><text x="153" y="104" fill="#14532d">13</text><rect x="184" y="70" width="54" height="54" fill="#fecaca"/><text x="211" y="104" fill="#991b1b">14</text><rect x="242" y="70" width="54" height="54" fill="#fecaca"/><text x="269" y="104" fill="#991b1b">15</text><rect x="300" y="70" width="54" height="54" fill="#fecaca"/><text x="327" y="104" fill="#991b1b">16</text><rect x="358" y="70" width="54" height="54" fill="#86efac"/><text x="385" y="104" fill="#14532d">17</text><rect x="416" y="70" width="54" height="54" fill="#fecaca"/><text x="443" y="104" fill="#991b1b">18</text><rect x="474" y="70" width="54" height="54" fill="#86efac"/><text x="501" y="104" fill="#14532d">19</text><rect x="532" y="70" width="54" height="54" fill="#fecaca"/><text x="559" y="104" fill="#991b1b">20</text><rect x="10" y="130" width="54" height="54" fill="#fecaca"/><text x="37" y="164" fill="#991b1b">21</text><rect x="68" y="130" width="54" height="54" fill="#fecaca"/><text x="95" y="164" fill="#991b1b">22</text><rect x="126" y="130" width="54" height="54" fill="#86efac"/><text x="153" y="164" fill="#14532d">23</text><rect x="184" y="130" width="54" height="54" fill="#fecaca"/><text x="211" y="164" fill="#991b1b">24</text><rect x="242" y="130" width="54" height="54" fill="#fecaca"/><text x="269" y="164" fill="#991b1b">25</text><rect x="300" y="130" width="54" height="54" fill="#fecaca"/><text x="327" y="164" fill="#991b1b">26</text><rect x="358" y="130" width="54" height="54" fill="#fecaca"/><text x="385" y="164" fill="#991b1b">27</text><rect x="416" y="130" width="54" height="54" fill="#fecaca"/><text x="443" y="164" fill="#991b1b">28</text><rect x="474" y="130" width="54" height="54" fill="#86efac"/><text x="501" y="164" fill="#14532d">29</text><rect x="532" y="130" width="54" height="54" fill="#fecaca"/><text x="559" y="164" fill="#991b1b">30</text></g></svg>`
        },
        {
          label: "🪜 The ladder method",
          html: "<p>In many countries (France, Romania, Russia, Spain…) numbers are factorised in a column: draw a vertical line, on the right write the <b>smallest prime number</b> that divides, on the left the result, and keep going until you reach 1.</p><p>Reading the right-hand column: 360 = 2 × 2 × 2 × 3 × 3 × 5 = <b>2³ × 3² × 5</b>. It's the same as the factor tree, just drawn vertically: many people find it tidier.</p>",
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><line x1="300" y1="15" x2="300" y2="285" stroke="#1e293b" stroke-width="4"/><g font-size="26" font-weight="bold"><text x="280" y="45" text-anchor="end" fill="#1e3a8a">360</text><text x="320" y="45" fill="#dc2626">2</text><text x="280" y="85" text-anchor="end" fill="#1e3a8a">180</text><text x="320" y="85" fill="#dc2626">2</text><text x="280" y="125" text-anchor="end" fill="#1e3a8a">90</text><text x="320" y="125" fill="#dc2626">2</text><text x="280" y="165" text-anchor="end" fill="#1e3a8a">45</text><text x="320" y="165" fill="#16a34a">3</text><text x="280" y="205" text-anchor="end" fill="#1e3a8a">15</text><text x="320" y="205" fill="#16a34a">3</text><text x="280" y="245" text-anchor="end" fill="#1e3a8a">5</text><text x="320" y="245" fill="#9333ea">5</text><text x="280" y="285" text-anchor="end" fill="#1e3a8a">1</text></g><text x="460" y="150" font-size="24" text-anchor="middle" fill="#0f172a" font-weight="bold">360 = 2³ × 3² × 5</text></svg>`
        },
        {
          label: "🎂 The «cake»: GCD and LCM together",
          html: "<p>A method used in the United States and in Asia (it's called the «ladder» or «cake method»). Write the two numbers side by side and divide <b>both</b> by a prime that divides both of them, until there are no more:</p><table><tr><td>2</td><td>24</td><td>36</td></tr><tr><td>2</td><td>12</td><td>18</td></tr><tr><td>3</td><td>6</td><td>9</td></tr><tr><td></td><td><b>2</b></td><td><b>3</b></td></tr></table><ul><li><b>GCD</b> = product of the numbers on the left = 2 × 2 × 3 = <b>12</b></li><li><b>LCM</b> = numbers on the left × numbers left at the bottom = 2 × 2 × 3 × 2 × 3 = <b>72</b></li></ul><p>Check: GCD × LCM = 12 × 72 = 864 = 24 × 36. It always works with two numbers!</p>"
        },
        {
          label: "🔁 Euclid's algorithm",
          html: "<p>Euclid (around 300 BC) found a super-fast way to get the GCD, <b>without factorising</b>: divide the larger number by the smaller one and keep the remainder; then divide the divisor by the remainder… until the remainder is 0.</p><p><b>GCD(84, 36)</b>:</p><ul><li>84 ÷ 36 = 2 remainder <b>12</b></li><li>36 ÷ 12 = 3 remainder <b>0</b> → GCD = <b>12</b></li></ul><p><b>Why does it work?</b> Every number that divides 84 and 36 also divides 84 − 36 − 36 = 12. So the common divisors don't change while the numbers get smaller and smaller. It's one of the oldest algorithms in history: computers still use it!</p>"
        },
        {
          label: "🚦 A story for the LCM",
          html: "<p>Two lighthouses flash together at midnight: the first every 6 seconds, the second every 8 seconds. When will they flash together again?</p><ul><li>Lighthouse A: 6, 12, 18, <b>24</b>, 30…</li><li>Lighthouse B: 8, 16, <b>24</b>, 32…</li></ul><p>After <b>24 seconds</b> = LCM(6, 8). The LCM always answers the question «<i>when do they meet again?</i>». The GCD, instead, answers «<i>into how many equal groups can I split everything with nothing left over?</i>».</p>"
        }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: GCD and LCM",
      questions: [
        { type: "num", q: "GCD(18, 24) = ?", answer: 6, tol: 0, explain: "18 = 2 × 3², 24 = 2³ × 3 → common factors with the smaller exponent: 2 × 3 = 6." },
        { type: "num", q: "LCM(6, 8) = ?", answer: 24, tol: 0, explain: "6 = 2 × 3, 8 = 2³ → 2³ × 3 = 24." },
        { type: "mc", q: "Two friends go to the swimming pool, one every 4 days and the other every 6. Today they went together. What must you calculate to know when they will meet again?", options: ["The GCD", "The LCM", "The sum", "The difference"], answer: 1, explain: "Events that repeat and coincide again: you need the LCM (12 days)." },
        { type: "tf", q: "8 and 15 are coprime.", answer: true, explain: "8 = 2³ and 15 = 3 × 5 have no common factors: GCD = 1." }
      ]
    },
    {
      type: "3d",
      title: "The divisors of 24 in 3D",
      scene: "blocks",
      options: { mode: "array", a: 4, b: 6 },
      caption: "24 cubes can form the rectangles 1 × 24, 2 × 12, 3 × 8 and 4 × 6: the divisors of 24 are 1, 2, 3, 4, 6, 8, 12, 24. Try setting 23: you can only make a row. 23 is prime!"
    },
    {
      type: "conceptMap",
      title: "Map: why prime numbers are so important",
      nodes: [
        { id: "naturali", label: "Natural numbers", x: 50, y: 6, color: "#64748b", html: "0, 1, 2, 3, 4… the numbers for counting.", why: "They come from the need to count objects: sheep, days, coins. They are the starting point of all arithmetic." },
        { id: "divisibilita", label: "Multiples and divisors", x: 50, y: 22, color: "#3b82f6", html: "a is a divisor of b if b ÷ a leaves no remainder; b is then a multiple of a.", why: "It comes from the practical problem of splitting things into equal parts with nothing left over: that's why division with remainder is the basis of everything." },
        { id: "criteri", label: "Divisibility rules", x: 15, y: 36, color: "#0ea5e9", html: "Shortcuts: for 2 the last digit is even, for 3 the sum of the digits is divisible by 3, for 5 the last digit is 0 or 5…", why: "They work because we write numbers in base 10: for example 10, 100, 1000… divided by 3 always leave remainder 1, so only the sum of the digits matters." },
        { id: "primi", label: "Prime numbers", x: 50, y: 40, color: "#16a34a", html: "Numbers greater than 1 with only two divisors: 1 and themselves.", why: "Euclid defined them in the Elements (around 300 BC). They are the «atoms» of numbers: they can't be broken into products of smaller numbers." },
        { id: "infiniti", label: "There are infinitely many primes", x: 85, y: 36, color: "#22c55e", html: "There is no prime number bigger than all the others.", why: "Euclid's proof: suppose you have all the primes. Multiply them together and add 1. The new number, divided by each of those primes, leaves remainder 1: so either it is prime itself, or it has a prime divisor missing from the list. Contradiction! The primes never end." },
        { id: "tfa", label: "Fundamental Theorem of Arithmetic", x: 50, y: 60, color: "#f59e0b", html: "Every number greater than 1 can be written as a product of primes in only one way (apart from the order).", why: "Existence is easy: if a number isn't prime you split it, and carry on. Uniqueness relies on Euclid's lemma (if a prime divides a product, it divides one of the factors). Carl Friedrich Gauss stated and proved it completely in 1801." },
        { id: "scomposizione", label: "Prime factorisation", x: 50, y: 74, color: "#ea580c", html: "Tree, ladder or cake: e.g. 360 = 2³ × 3² × 5.", why: "Thanks to the fundamental theorem it doesn't matter where you start: you will always end up with the same factors." },
        { id: "mcd", label: "GCD", x: 22, y: 88, color: "#9333ea", html: "Common factors, taken once, with the smallest exponent.", why: "A common divisor can only contain factors present in both numbers, and no more times than they appear in the number that has fewer of them." },
        { id: "mcm", label: "LCM", x: 78, y: 88, color: "#db2777", html: "Common and non-common factors, taken once, with the largest exponent.", why: "A common multiple must «contain» both numbers: so all their factors, each as many times as needed by the number that has the most of them." },
        { id: "euclide", label: "Euclid's algorithm", x: 15, y: 70, color: "#7c3aed", html: "GCD by repeated division, without factorising.", why: "The common divisors of a and b are the same as those of b and the remainder of a ÷ b. The numbers shrink until the remainder is 0." },
        { id: "usi", label: "What they are used for", x: 85, y: 70, color: "#0f766e", html: "Simplifying fractions, adding fractions, organising shifts and calendars, cryptography (RSA).", why: "Multiplying two enormous primes is easy, but finding them again from the product is incredibly hard: the digital padlocks that protect the internet are based on this difference." }
      ],
      edges: [ ["naturali", "divisibilita", "divide with no remainder"], ["divisibilita", "criteri", "shortcuts"], ["divisibilita", "primi", "only 2 divisors"], ["primi", "infiniti", "Euclid proves"], ["primi", "tfa", "bricks of all numbers"], ["tfa", "scomposizione", "guarantees"], ["scomposizione", "mcd", "smaller exponent"], ["scomposizione", "mcm", "larger exponent"], ["divisibilita", "euclide", "remainders"], ["euclide", "mcd", "calculates"], ["tfa", "usi", "applications"] ]
    }
  ],
  glossary: [
    { t: "Multiple", d: "A number obtained by multiplying a number by a natural number." },
    { t: "Divisor", d: "A number that divides another with no remainder." },
    { t: "Prime number", d: "A number greater than 1 divisible only by 1 and by itself." },
    { t: "Composite number", d: "A number that has more than two divisors." },
    { t: "Prime factor", d: "A prime number that appears in the factorisation of a number." },
    { t: "Factorisation", d: "Writing a number as a product of prime factors." },
    { t: "GCD", d: "Greatest Common Divisor: the largest divisor shared by several numbers." },
    { t: "LCM", d: "Least Common Multiple: the smallest (non-zero) multiple shared by several numbers." },
    { t: "Coprime", d: "Numbers whose GCD is 1." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which set contains only prime numbers?", options: ["2, 3, 9, 11", "3, 5, 7, 13", "1, 2, 3, 5", "5, 7, 15, 17"], answer: 1, explain: "9 and 15 are composite, 1 is not prime." },
      { type: "tf", q: "2 is the only even prime number.", answer: true, explain: "Every other even number is divisible by 2, so it is composite." },
      { type: "mc", q: "The number 5,430 is divisible by…", options: ["2, 3, 5 and 10", "only 2 and 5", "only 10", "2, 5, 9"], answer: 0, explain: "It ends in 0 (2, 5, 10) and 5+4+3+0 = 12 is divisible by 3, not by 9." },
      { type: "mc", q: "The prime factorisation of 120 is…", options: ["2³ × 3 × 5", "2² × 3 × 10", "2 × 3 × 4 × 5", "2⁴ × 3 × 5"], answer: 0, explain: "120 = 8 × 15 = 2³ × 3 × 5." },
      { type: "num", q: "GCD(36, 48) = ?", answer: 12, tol: 0, explain: "36 = 2² × 3², 48 = 2⁴ × 3 → 2² × 3 = 12." },
      { type: "num", q: "LCM(10, 15) = ?", answer: 30, tol: 0, explain: "10 = 2 × 5, 15 = 3 × 5 → 2 × 3 × 5 = 30." },
      { type: "num", q: "You have 30 roses and 45 tulips: you want to make the largest number of identical bunches using all the flowers. How many bunches?", answer: 15, tol: 0, explain: "GCD(30, 45) = 15: each bunch will have 2 roses and 3 tulips." },
      { type: "num", q: "One lighthouse flashes every 8 seconds, another every 12. They flash together now: after how many seconds will they do it again?", answer: 24, tol: 0, unit: "s", explain: "LCM(8, 12) = 24 seconds." },
      { type: "text", q: "What is the name of the method invented by a Greek mathematician to find prime numbers by \"sifting\" the numbers?", answer: ["sieve of eratosthenes", "sieve", "the sieve of eratosthenes", "eratosthenes sieve"], explain: "It's the sieve of Eratosthenes." },
      { type: "tf", q: "The GCD of two numbers is always greater than their LCM.", answer: false, explain: "The GCD is at most equal to the smaller number; the LCM is at least equal to the larger one." },
      { type: "order", q: "Put in order the steps for calculating the LCM by factorisation", items: ["Break the numbers into prime factors", "Take the common and non-common factors", "For each one choose the largest exponent", "Multiply the chosen factors"], explain: "Common and non-common, largest exponent, then multiply." }
    ],
    gen: [["isPrime", 1], ["gcd", 1], ["lcm", 1]]
  }
});
