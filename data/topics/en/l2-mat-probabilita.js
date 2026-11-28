TOPIC('en', {
  id: "l2-mat-probabilita",
  title: "Introduction to probability",
  intro: "Tossing a coin, playing the lottery, reading the weather forecast, deciding whether or not to get vaccinated: probability helps us reason <b>under uncertainty</b>. It was born in the 17th century from a dispute about gambling, and today it underpins statistics, insurance, quantum physics and artificial intelligence. In this lesson you will learn to calculate the probability of an event with three different approaches (<b>classical</b>, <b>frequentist</b> and <b>subjective</b>) and to combine events using the <b>sum</b> and <b>product</b> rules.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Random experiments, sample space and events",
      html: `<p>A <b>random experiment</b> is one whose outcome cannot be predicted with certainty before it is carried out: I toss a coin, draw a card, roll a dice. Even though I do not know the outcome, I know <b>which outcomes are possible</b>.</p>
<ul>
<li>The set of all possible outcomes is called the <b>sample space</b>, written Ω. For a dice: Ω = {1, 2, 3, 4, 5, 6}. For a coin: Ω = {Heads, Tails}.</li>
<li>An <b>event</b> is a subset of Ω: a statement that either happens or does not. "An even number comes up" is the event E = {2, 4, 6}.</li>
<li><b>Elementary event</b>: it contains only one outcome (a 5 comes up).</li>
<li><b>Certain event</b>: it is the whole of Ω (a number from 1 to 6 comes up). <b>Impossible event</b>: it is the empty set ∅ (a 7 comes up).</li>
<li><b>Complementary event</b> of E, written Ē: it happens when E does not happen. The complement of "even" = "odd".</li>
</ul>
<p>Using the language of sets (seen in the first year): the event <b>A ∪ B</b> ("A <b>or</b> B") is the union and the event <b>A ∩ B</b> ("A <b>and</b> B") is the intersection. Two events are <b>mutually exclusive</b> if they cannot happen together: A ∩ B = ∅ (even comes up and odd comes up). Otherwise they are <b>compatible</b> (not mutually exclusive).</p>`
    },
    {
      type: "text",
      title: "Classical probability (Laplace)",
      html: `<p>If all the elementary outcomes are <b>equally likely</b>, the probability of an event E is the ratio of favourable outcomes to possible outcomes:</p>
<p style="text-align:center"><b>p(E) = favourable outcomes / possible outcomes</b></p>
<p>This is the <b>classical</b> or <b>Laplace</b> definition (1812). Consequences:</p>
<ul>
<li>Probability is a number between <b>0 and 1</b>: 0 ≤ p(E) ≤ 1 (it can also be written as a percentage: 0.25 = 25%).</li>
<li>The impossible event has p = 0; the certain event has p = 1.</li>
<li><b>Complementary event</b>: p(Ē) = 1 − p(E). Useful: it is often easier to calculate the complement.</li>
</ul>
<p><b>Examples</b>:</p>
<ul>
<li>Dice: p(an even number) = 3/6 = 1/2. p(a multiple of 3) = 2/6 = 1/3.</li>
<li>Italian 40-card deck (4 suits of 10 cards): p(drawing an ace) = 4/40 = 1/10; p(drawing a card of coins, <i>denari</i>) = 10/40 = 1/4.</li>
<li>Two coins: Ω = {HH, HT, TH, TT}: p(two heads) = 1/4, p(one head and one tail) = 2/4 = 1/2.</li>
</ul>
<p>⚠️ <b>Watch out for equal likelihood</b>: with two dice a total of 7 is more likely than a total of 2, not because the dice "decide" so but because there are more ways of getting it. You must count the equally likely <b>elementary</b> outcomes (the ordered pairs).</p>`
    },
    {
      type: "svg",
      title: "Two dice: why 7 comes up more often",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<rect x="60" y="220" width="36" height="30" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="105" y="190" width="36" height="60" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="150" y="160" width="36" height="90" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="195" y="130" width="36" height="120" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="240" y="100" width="36" height="150" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="285" y="70" width="36" height="180" fill="#f87171" stroke="#b91c1c" stroke-width="2"/>
<rect x="330" y="100" width="36" height="150" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="375" y="130" width="36" height="120" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="420" y="160" width="36" height="90" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="465" y="190" width="36" height="60" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="510" y="220" width="36" height="30" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<g font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="78" y="274">2</text><text x="123" y="274">3</text><text x="168" y="274">4</text><text x="213" y="274">5</text><text x="258" y="274">6</text><text x="303" y="274" fill="#b91c1c">7</text><text x="348" y="274">8</text><text x="393" y="274">9</text><text x="438" y="274">10</text><text x="483" y="274">11</text><text x="528" y="274">12</text>
</g>
<text x="303" y="60" font-size="16" text-anchor="middle" fill="#b91c1c" font-weight="bold">6/36 = 1/6</text>
<text x="78" y="212" font-size="16" text-anchor="middle" fill="#4338ca">1/36</text>
<text x="528" y="212" font-size="16" text-anchor="middle" fill="#4338ca">1/36</text>
<text x="40" y="30" font-size="16" fill="#1f2937">Total of two dice: there are 6 × 6 = 36 equally likely ordered pairs</text>
</svg>`,
      caption: "A total of 7 can be obtained in 6 ways (1+6, 2+5, 3+4, 4+3, 5+2, 6+1); totals of 2 and 12 in only one way."
    },
    {
      type: "example",
      title: "Guided examples",
      html: `<p><b>1. A six-sided dice</b>: what is the probability of getting a number greater than 4? Favourable outcomes: {5, 6} = 2; possible outcomes 6: p = 2/6 = <b>1/3</b> ≈ 33%.</p>
<p><b>2. A box</b> contains 5 red balls, 3 blue and 2 green. p(blue) = 3/10 = 30%. p(not red) = 1 − 5/10 = 5/10 = 50%.</p>
<p><b>3. At least one 6 in 4 rolls of a dice</b>: calculating "at least one" is hard; the complement "no 6 in 4 rolls" is easy: each roll gives a non-6 with probability 5/6, and the rolls are independent, so p(no 6) = (5/6)⁴ = 625/1296 ≈ 0.482. So p(at least one 6) = 1 − 0.482 = <b>0.518</b>, a little more than 1/2. This is the game that the <b>Chevalier de Méré</b> offered his friends in the 17th century, and which made him win, on average, more often than he lost.</p>
<p><b>4. Drawing from a 52-card deck</b>: p(king) = 4/52 = 1/13; p(hearts) = 13/52 = 1/4.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: classical probability",
      questions: [
        { type: "num", q: "A six-sided dice is rolled. What is the probability (as a decimal between 0 and 1) of getting an odd number?", answer: 0.5, tol: 0.01, explain: "Odd: {1, 3, 5} = 3 outcomes out of 6 = 1/2 = 0.5." },
        { type: "mc", q: "Which number CANNOT be a probability?", options: ["0", "1.3", "0.75"], answer: 1, explain: "A probability is always between 0 and 1: 1.3 is greater than 1." },
        { type: "num", q: "A bag contains 4 white balls and 6 black ones. What is the probability (in %) of drawing a white ball?", answer: 40, unit: "%", explain: "4 favourable outcomes out of 10: 4/10 = 40%." },
        { type: "tf", q: "If event E has probability 0.3, its complementary event has probability 0.7.", answer: true, explain: "p(Ē) = 1 − p(E) = 1 − 0.3 = 0.7." }
      ]
    },
    {
      type: "text",
      title: "Frequentist probability and the law of large numbers",
      html: `<p>The classical definition requires equally likely outcomes, but many events are not like that: whether a drawing pin lands point up or down, whether a patient recovers with a treatment, whether it will rain tomorrow. In these cases we use <b>frequentist probability</b>: we repeat the experiment <b>many times</b> and look at the <b>relative frequency</b>:</p>
<p style="text-align:center"><b>f = number of times E happens / number of trials</b></p>
<p>The <b>law of large numbers</b> (proved by <b>Jakob Bernoulli</b> in his <i>Ars Conjectandi</i>, published in 1713) says that, as the number of trials grows, the relative frequency gets closer and closer to the true probability. Tossing a coin 10 times you might get 7 heads (f = 0.7), but with 10 000 tosses you expect something close to 0.5. The mathematician <b>John Kerrich</b>, interned in Denmark during the Second World War, tossed a coin 10 000 times and got 5 067 heads (50.67%).</p>
<p>Frequentist probability is the basis of <b>insurance</b>, medical statistics and weather forecasts ("70% chance of rain" means that in similar weather conditions it has rained about 7 times out of 10).</p>
<p>⚠️ <b>The gambler's fallacy</b>: if red has come up 5 times in a row at roulette, the probability of black on the next spin does <b>not</b> increase: the wheel has no memory. The law of large numbers holds <b>on average</b> and over many trials; it does not "make up for" individual results.</p>
<p>There is also <b>subjective probability</b>: the degree of belief a person assigns to an event on the basis of their information (the probability that a team will win a championship, that a new company will succeed). It is measured by the bet one is willing to make.</p>`
    },
    {
      type: "remember",
      title: "The three definitions compared",
      html: `<ul>
<li><b>Classical</b> (Laplace): p = favourable / possible; requires equally likely outcomes. It is calculated <i>before</i> doing the experiment (dice, cards, bags of balls).</li>
<li><b>Frequentist</b>: p ≈ relative frequency over many trials; it is worked out <i>after</i> observing. It is used when the outcomes are not equally likely.</li>
<li><b>Subjective</b>: personal degree of belief; used when the event cannot be repeated.</li>
</ul>
<p>In the 20th century <b>Andrey Kolmogorov</b> (1933) founded probability on three axioms (p ≥ 0; p(Ω) = 1; for mutually exclusive events p(A ∪ B) = p(A) + p(B)) that hold for all the definitions.</p>`
    },
    {
      type: "text",
      title: "Sum of events: «A or B»",
      html: `<p><b>Mutually exclusive events</b>: if A and B cannot happen together,</p>
<p style="text-align:center"><b>p(A ∪ B) = p(A) + p(B)</b></p>
<p>Example: with a dice, p(1 or 6) = 1/6 + 1/6 = 1/3.</p>
<p><b>Compatible events</b>: if A and B can happen together, adding the probabilities would count the intersection twice. So we subtract it:</p>
<p style="text-align:center"><b>p(A ∪ B) = p(A) + p(B) − p(A ∩ B)</b></p>
<p><b>Example</b>: from a 40-card deck, p(ace or heart)? p(ace) = 4/40; p(heart) = 10/40; p(ace of hearts) = 1/40. So p = 4/40 + 10/40 − 1/40 = <b>13/40</b>.</p>
<p><b>Example with a dice</b>: A = "even" = {2, 4, 6}, B = "greater than 4" = {5, 6}; A ∩ B = {6}. p(A ∪ B) = 3/6 + 2/6 − 1/6 = 4/6 = 2/3. Indeed A ∪ B = {2, 4, 5, 6}: 4 outcomes out of 6.</p>
<p><b>Complementary events</b>: they are mutually exclusive and their union is the certain event, so p(E) + p(Ē) = 1.</p>`
    },
    {
      type: "text",
      title: "Product of events: «A and then B»",
      html: `<p>Two events are <b>independent</b> if one happening does not change the probability of the other (two coin tosses). For independent events:</p>
<p style="text-align:center"><b>p(A ∩ B) = p(A) · p(B)</b></p>
<p><b>Examples</b>:</p>
<ul>
<li>Two heads in a row: 1/2 · 1/2 = 1/4.</li>
<li>Three 6s in a row with a dice: (1/6)³ = 1/216 ≈ 0.46%.</li>
<li>A ball is drawn from a bag with 3 white and 2 black balls and <b>put back</b> after each draw: p(white, then white) = 3/5 · 3/5 = 9/25. If it is <b>not</b> put back, the second event depends on the first: p(white, then white) = 3/5 · 2/4 = 6/20 = 3/10 (dependent events).</li>
</ul>
<p>A rule of thumb: <b>or → add</b>; <b>and (then) → multiply</b>.</p>`
    },
    {
      type: "example",
      title: "A real-life example: forecasts and class teams",
      html: `<p><b>Weather forecasts.</b> If the app says "30% chance of rain", it means p = 0.3: out of 10 days with similar conditions it rains on about 3. It is not a mistake if it rains: the forecast does not say "it will rain" or "it won't rain", but how plausible rain is. With p = 0.3, "no rain" has p = 0.7: taking an umbrella makes sense if getting wet bothers you more than carrying it.</p>
<p><b>A class team.</b> In a class of 25 students, 10 play football, 8 play volleyball and 3 play both sports. Choosing a student at random, p(football or volleyball) = 10/25 + 8/25 − 3/25 = <b>15/25 = 3/5 = 60%</b>: the 3 who play both are counted only once.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Pascal, Fermat and the Chevalier de Méré",
      html: `<p>Probability theory was born in <b>1654</b>, when the Chevalier <b>Antoine Gombaud de Méré</b>, a keen gambler, put two problems to <b>Blaise Pascal</b>, including how to divide the stakes of a game interrupted early (the "problem of points"). Pascal discussed it in a famous correspondence with <b>Pierre de Fermat</b>: the two reached the same solution by counting the possible ways the game could have continued. A few years later, <b>Christiaan Huygens</b> wrote the first treatise on the subject (1657). <b>Laplace</b> gave the theory its classical form in 1812.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The birthday paradox and the lottery",
      html: `<p><b>Birthdays</b>: in a class of just <b>23 people</b>, the probability that at least two share a birthday is over <b>50%</b> (about 50.7%); with 70 people it is over 99.9%. It seems absurd because we think of comparisons with ourselves, but there are 253 possible pairs among 23 people.</p>
<p><b>SuperEnalotto</b> (the Italian national lottery): you choose six numbers from 1 to 90. There are 622 614 630 possible combinations: the probability of winning the jackpot with one ticket is about 1 in 622 million, a practically impossible event. Buying a ticket does not really change your financial future, but it does change that of whoever runs the game, which has a guaranteed margin.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand probability",
      intro: "If the formulas seem too abstract, look at probability in a different way.",
      tabs: [
        {
          label: "🎲 A practical test",
          html: `<p>Take two coins and toss them 40 times, recording how many times you get two heads, one head and one tail, and two tails. The theoretical calculation says 1/4, 1/2, 1/4 (that is about 10, 20, 10 out of 40). You probably won't get exactly these numbers, but you will get close. If you repeat it 200 times, you will get even closer: you are seeing the law of large numbers with your own hands. With a spreadsheet or a program you can simulate even 100 000 tosses in a few seconds.</p>`
        },
        {
          label: "🌳 The tree diagram",
          html: `<p>To count outcomes without forgetting any, draw a <b>tree diagram</b>. Each branch is a choice; the final outcomes are the paths. With two coin tosses there are 4 paths, each with probability 1/2 · 1/2 = 1/4. Adding the paths that make up the event "one head and one tail" (HT and TH) gives 1/4 + 1/4 = 1/2.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="60" cy="150" r="8" fill="#1f2937"/>
<line x1="60" y1="150" x2="230" y2="80" stroke="#4338ca" stroke-width="3"/>
<line x1="60" y1="150" x2="230" y2="220" stroke="#4338ca" stroke-width="3"/>
<text x="110" y="100" font-size="16" fill="#4338ca" font-weight="bold">H  1/2</text>
<text x="110" y="216" font-size="16" fill="#4338ca" font-weight="bold">T  1/2</text>
<circle cx="230" cy="80" r="8" fill="#1f2937"/><circle cx="230" cy="220" r="8" fill="#1f2937"/>
<line x1="230" y1="80" x2="400" y2="40" stroke="#166534" stroke-width="3"/>
<line x1="230" y1="80" x2="400" y2="120" stroke="#166534" stroke-width="3"/>
<line x1="230" y1="220" x2="400" y2="180" stroke="#166534" stroke-width="3"/>
<line x1="230" y1="220" x2="400" y2="260" stroke="#166534" stroke-width="3"/>
<text x="290" y="48" font-size="16" fill="#166534" font-weight="bold">H  1/2</text>
<text x="290" y="116" font-size="16" fill="#166534" font-weight="bold">T  1/2</text>
<text x="290" y="186" font-size="16" fill="#166534" font-weight="bold">H  1/2</text>
<text x="290" y="256" font-size="16" fill="#166534" font-weight="bold">T  1/2</text>
<text x="415" y="46" font-size="16" fill="#1f2937">HH → 1/4</text>
<text x="415" y="126" font-size="16" fill="#b91c1c">HT → 1/4</text>
<text x="415" y="186" font-size="16" fill="#b91c1c">TH → 1/4</text>
<text x="415" y="266" font-size="16" fill="#1f2937">TT → 1/4</text>
</svg>`
        },
        {
          label: "🃏 Match event and probability",
          html: `<p>Try matching each event to its probability, using the classical formula (favourable outcomes over possible outcomes).</p>`,
          widget: "match",
          options: { pairs: [
            ["Rolling a dice: a 6 comes up", "1/6"],
            ["Tossing a coin: heads", "1/2"],
            ["52-card deck: a king", "1/13"],
            ["Two coins: two tails", "1/4"],
            ["Dice: a number less than 7", "1 (certain event)"],
            ["Dice: a 0 comes up", "0 (impossible event)"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: probability",
      nodes: [
        { id: "inc", label: "Uncertainty", x: 50, y: 6, color: "#6366f1", html: "Situations whose outcome cannot be predicted with certainty.", why: "Probability does not remove uncertainty: it measures it. Before the 17th century chance was seen as 'divine will' or 'luck'; with Pascal and Fermat it became something to calculate." },
        { id: "ev", label: "Events and sample space", x: 18, y: 30, color: "#f59e0b", html: "Ω, subsets, certain/impossible/complementary event.", why: "It uses the language of sets: union, intersection, complement. This is what allows operations on events to be formalised." },
        { id: "cl", label: "Classical probability", x: 50, y: 40, color: "#16a34a", html: "Favourable / possible with equally likely outcomes.", why: "It comes from games with dice and cards, where symmetry makes the outcomes equally likely (principle of indifference). Laplace set it out in 1812." },
        { id: "fr", label: "Frequentist probability", x: 82, y: 30, color: "#a855f7", html: "Relative frequency over many trials.", why: "It is needed when there is no symmetry. It is based on Bernoulli's law of large numbers: the more trials, the closer the frequency gets to the probability." },
        { id: "ass", label: "Axioms (Kolmogorov)", x: 50, y: 65, color: "#ef4444", html: "p ≥ 0; p(Ω) = 1; additivity for mutually exclusive events.", why: "In 1933 Kolmogorov made probability a rigorous mathematical theory, valid for every definition: everything else follows from these three axioms." },
        { id: "som", label: "Sum rule", x: 22, y: 85, color: "#0ea5e9", html: "p(A ∪ B) = p(A) + p(B) − p(A ∩ B).", why: "Subtracting the intersection avoids counting the shared outcomes twice: it is the inclusion–exclusion principle." },
        { id: "pro", label: "Product rule", x: 78, y: 85, color: "#14b8a6", html: "For independent events: p(A ∩ B) = p(A) · p(B).", why: "Independence means that knowing A does not change the probability of B; then probabilities are multiplied along the branches of the tree." }
      ],
      edges: [
        ["inc", "ev", "described by"],
        ["inc", "cl", "measured by"],
        ["inc", "fr", "measured by"],
        ["cl", "ass", "satisfies"],
        ["fr", "ass", "satisfies"],
        ["ass", "som", "implies"],
        ["ass", "pro", "extends to"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: sum and product",
      questions: [
        { type: "num", q: "From a 40-card deck, what is the probability (in %) of drawing a king or an ace?", answer: 20, unit: "%", explain: "Mutually exclusive events: 4/40 + 4/40 = 8/40 = 1/5 = 20%." },
        { type: "num", q: "A coin is tossed twice. What is the probability (in %) of getting two tails?", answer: 25, unit: "%", explain: "1/2 · 1/2 = 1/4 = 25%." },
        { type: "tf", q: "If A and B are compatible, p(A ∪ B) = p(A) + p(B).", answer: false, explain: "You must subtract p(A ∩ B), otherwise the shared outcomes are counted twice." },
        { type: "mc", q: "Red has come up 5 times in a row at roulette. On the next spin…", options: ["Black is more likely", "Red and black have the same probabilities as before", "Red is more likely"], answer: 1, explain: "The wheel has no memory: the spins are independent (gambler's fallacy)." }
      ]
    }
  ],
  glossary: [
    { t: "Sample space", d: "The set Ω of all possible outcomes of a random experiment." },
    { t: "Event", d: "A subset of the sample space: something that may or may not happen." },
    { t: "Certain / impossible event", d: "An event that always happens (p = 1) / never happens (p = 0)." },
    { t: "Complementary event", d: "The event Ē that happens when E does not; p(Ē) = 1 − p(E)." },
    { t: "Mutually exclusive events", d: "Events that cannot happen together." },
    { t: "Independent events", d: "Events where one happening does not affect the probability of the other." },
    { t: "Classical probability", d: "The ratio of favourable outcomes to possible outcomes, if they are equally likely." },
    { t: "Relative frequency", d: "The ratio of the number of times an event happens to the number of trials." },
    { t: "Law of large numbers", d: "As the number of trials increases, the relative frequency gets closer to the probability." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which of the following is the classical definition of probability?", options: ["Favourable outcomes divided by possible outcomes, if equally likely", "Number of trials divided by number of successes", "A personal degree of belief"], answer: 0, explain: "It is Laplace's definition, valid for equally likely outcomes." },
      { type: "num", q: "A card is drawn from a 52-card deck. What is the probability (in %) of drawing a spade? (13 out of 52)", answer: 25, unit: "%", explain: "13/52 = 1/4 = 25%." },
      { type: "tf", q: "The probability of an event can be equal to 1.2.", answer: false, explain: "It is always between 0 and 1." },
      { type: "num", q: "A bag contains 3 red balls, 5 blue and 2 yellow. What is the probability (in %) that the ball drawn is NOT blue?", answer: 50, unit: "%", explain: "Not blue = 5 out of 10 = 50%; or 1 − 5/10." },
      { type: "num", q: "Rolling two dice, what is the probability (in %, rounded to a whole number) that the total is 7?", answer: 17, tol: 1, unit: "%", explain: "6/36 = 1/6 ≈ 16.7% ≈ 17%." },
      { type: "mc", q: "Two events A and B are mutually exclusive. How do you calculate p(A ∪ B)?", options: ["p(A) · p(B)", "p(A) + p(B)", "p(A) − p(B)"], answer: 1, explain: "For mutually exclusive events the probabilities are added." },
      { type: "num", q: "A dice is rolled twice. What is the probability (in %, rounded to a whole number) of getting a 6 both times?", answer: 3, tol: 0.5, unit: "%", explain: "1/6 · 1/6 = 1/36 ≈ 2.8% ≈ 3%." },
      { type: "tf", q: "In 10 tosses a coin gives 7 heads: this means the probability of heads is 0.7.", answer: false, explain: "With few trials the frequency can differ a lot; the law of large numbers holds over many trials." },
      { type: "text", q: "What is the name of the mathematician who formulated the classical definition of probability in 1812?", answer: ["laplace", "pierre-simon laplace", "pierre simon laplace"], explain: "Pierre-Simon Laplace, in his Théorie analytique des probabilités." },
      { type: "order", q: "Put the steps for calculating the classical probability of an event in order.", items: ["List the possible outcomes (sample space)", "Check that they are equally likely", "Count the outcomes favourable to the event", "Calculate the ratio favourable / possible"], explain: "First define the sample space, then check equal likelihood, count the favourable outcomes and take the ratio." }
    ]
  }
});
