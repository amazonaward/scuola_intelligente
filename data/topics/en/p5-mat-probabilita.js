TOPIC('en', {
 "id": "p5-mat-probabilita",
 "title": "Probability and statistics",
 "intro": "Will it rain tomorrow? Which ice-cream flavour does your class prefer? Who will win at heads or tails? <b>Statistics</b> collects and reads data, <b>probability</b> measures how likely it is that something happens. Let's learn <b>mean, mode and median</b> and how to recognise <b>certain, possible and impossible</b> events.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "What is statistics",
   "html": "<p><b>Statistics</b> is the part of mathematics that <b>collects</b>, <b>organises</b> and <b>interprets</b> data in order to understand a phenomenon.</p>\n<p>A statistical survey is done in 4 steps:</p>\n<ol>\n<li><b>Question</b>: what do I want to know? (e.g. \"What is the class's favourite sport?\")</li>\n<li><b>Data collection</b>: with a questionnaire, an interview, measurements.</li>\n<li><b>Organisation</b>: the data are counted in a <b>frequency table</b> (how many times each answer appears).</li>\n<li><b>Representation and reading</b>: a <b>graph</b> is drawn (bar chart, pictogram, pie chart…) and the <b>indices</b> are calculated: mode, mean, median.</li>\n</ol>\n<p>The things we study (sport, age, height…) are called <b>characters</b> (variables); the possible answers are called <b>categories</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Favourite sport of class 5B (bar chart)",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<line x1=\"70\" y1=\"270\" x2=\"570\" y2=\"270\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<line x1=\"70\" y1=\"270\" x2=\"70\" y2=\"30\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<g stroke=\"#cbd5e1\" stroke-width=\"1\">\n<line x1=\"70\" y1=\"230\" x2=\"570\" y2=\"230\"/><line x1=\"70\" y1=\"190\" x2=\"570\" y2=\"190\"/><line x1=\"70\" y1=\"150\" x2=\"570\" y2=\"150\"/><line x1=\"70\" y1=\"110\" x2=\"570\" y2=\"110\"/><line x1=\"70\" y1=\"70\" x2=\"570\" y2=\"70\"/>\n</g>\n<g font-size=\"16\" fill=\"#1f2937\" text-anchor=\"end\">\n<text x=\"60\" y=\"275\">0</text><text x=\"60\" y=\"235\">2</text><text x=\"60\" y=\"195\">4</text><text x=\"60\" y=\"155\">6</text><text x=\"60\" y=\"115\">8</text><text x=\"60\" y=\"75\">10</text>\n</g>\n<rect x=\"100\" y=\"110\" width=\"70\" height=\"160\" fill=\"#22c55e\"/>\n<rect x=\"200\" y=\"190\" width=\"70\" height=\"80\" fill=\"#3b82f6\"/>\n<rect x=\"300\" y=\"210\" width=\"70\" height=\"60\" fill=\"#f97316\"/>\n<rect x=\"400\" y=\"230\" width=\"70\" height=\"40\" fill=\"#a855f7\"/>\n<rect x=\"500\" y=\"250\" width=\"50\" height=\"20\" fill=\"#ef4444\"/>\n<g font-size=\"17\" text-anchor=\"middle\" fill=\"#1f2937\">\n<text x=\"135\" y=\"295\">⚽ Football</text><text x=\"235\" y=\"295\">🏊 Swimming</text><text x=\"335\" y=\"295\">🏐 Volleyball</text><text x=\"435\" y=\"295\">🤸 Dance</text><text x=\"525\" y=\"295\">🏀 Basketball</text>\n</g>\n<g font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">\n<text x=\"135\" y=\"102\">8</text><text x=\"235\" y=\"182\">4</text><text x=\"335\" y=\"202\">3</text><text x=\"435\" y=\"222\">2</text><text x=\"525\" y=\"242\">1</text>\n</g>\n<text x=\"330\" y=\"40\" font-size=\"20\" fill=\"#166534\" font-weight=\"bold\" text-anchor=\"middle\">Mode = Football (the tallest column)</text>\n</svg>",
   "caption": "18 pupils answered. The frequency is the number of times an answer appears."
  },
  {
   "type": "text",
   "title": "Mode, mean and median",
   "html": "<p>These are three different ways to describe a group of data with <b>a single number</b>.</p>\n<p>Example: Marta's maths marks: <b>6, 8, 7, 8, 9, 10, 8</b></p>\n<ul>\n<li><b>Mode</b>: the datum that appears <b>most often</b>. Here 8 appears 3 times → mode = <b>8</b>. (There can also be two modes, or none.)</li>\n<li><b>Arithmetic mean</b>: you <b>add</b> all the data and <b>divide</b> by how many there are.<br>6 + 8 + 7 + 8 + 9 + 10 + 8 = 56 → 56 ÷ 7 = <b>8</b>.</li>\n<li><b>Median</b>: you put the data <b>in order</b> and take the one <b>in the middle</b>.<br>6, 7, 8, <b>8</b>, 8, 9, 10 → median = <b>8</b>.<br>If there is an even number of data, the median is the mean of the two middle ones.</li>\n</ul>\n<p>The <b>mode</b> can also be used with data that are not numbers (e.g. colours, sports). Mean and median only with numbers.</p>"
  },
  {
   "type": "example",
   "title": "Practical example: the temperatures of the week",
   "html": "<p>The class measured the temperature at noon for 5 days: <b>12 °C, 15 °C, 14 °C, 11 °C, 18 °C</b>.</p>\n<ul>\n<li>Sum: 12 + 15 + 14 + 11 + 18 = 70</li>\n<li>Mean: 70 ÷ 5 = <b>14 °C</b></li>\n<li>In order: 11, 12, <b>14</b>, 15, 18 → median = <b>14 °C</b></li>\n<li>No value repeats → <b>there is no mode</b>.</li>\n</ul>\n<p>The <b>range</b> is the difference between the highest and the lowest value: 18 − 11 = <b>7 °C</b>. It tells us how \"spread out\" the data are.</p>"
  },
  {
   "type": "example",
   "title": "Practical example: when the mean deceives",
   "html": "<p>In a street there are 5 shops. Every day they take: <b>€100, €120, €90, €110</b> and the supermarket <b>€1580</b>.</p>\n<ul>\n<li>Mean: (100 + 120 + 90 + 110 + 1580) ÷ 5 = 2000 ÷ 5 = <b>€400</b></li>\n<li>Median: 90, 100, <b>110</b>, 120, 1580 → <b>€110</b></li>\n</ul>\n<p>Which number describes a \"typical\" shop in the street best? The <b>median</b>! One very big value \"pulls up\" the mean. That is why statisticians always look at several indices together.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: mode, mean, median",
   "questions": [
    {
     "type": "num",
     "q": "What is the mean of 4, 6, 8?",
     "answer": 6,
     "explain": "4 + 6 + 8 = 18; 18 ÷ 3 = 6."
    },
    {
     "type": "num",
     "q": "What is the mode of 3, 5, 5, 7, 5, 2?",
     "answer": 5,
     "explain": "5 appears 3 times, more than all the others."
    },
    {
     "type": "num",
     "q": "What is the median of 9, 2, 7, 4, 5?",
     "answer": 5,
     "explain": "In order: 2, 4, 5, 7, 9. The middle one is 5."
    },
    {
     "type": "tf",
     "q": "The mode can also be calculated for favourite colours.",
     "answer": true,
     "explain": "The mode is the most frequent answer: it works for non-numerical data too."
    }
   ]
  },
  {
   "type": "text",
   "title": "Certain, possible, impossible",
   "html": "<p>An <b>event</b> is something that can happen (or not). Rolling a normal 6-sided die:</p>\n<ul>\n<li><b>Certain event</b>: it <b>always</b> happens. \"A number from 1 to 6 comes up.\" ✅</li>\n<li><b>Impossible event</b>: it <b>never happens</b>. \"A 7 comes up.\" ❌</li>\n<li><b>Possible event</b> (or probable): it <b>may or may not happen</b>. \"A 4 comes up.\" 🤔</li>\n</ul>\n<p>Among the possible events, some are <b>more likely</b> than others: \"an even number comes up\" (3 cases out of 6) is more likely than \"a 6 comes up\" (1 case out of 6).</p>"
  },
  {
   "type": "widget",
   "title": "Certain, possible or impossible?",
   "widget": "classify",
   "options": {
    "groups": [
     "✅ Certain",
     "🤔 Possible",
     "❌ Impossible"
    ],
    "items": [
     [
      "🎲 Rolling a die gives a number less than 7",
      0
     ],
     [
      "🎲 Rolling a die gives a 3",
      1
     ],
     [
      "🎲 Rolling a die gives a 0",
      2
     ],
     [
      "🪙 Tossing a coin gives heads",
      1
     ],
     [
      "📅 After Monday comes Tuesday",
      0
     ],
     [
      "🐘 An elephant fits in your pencil case",
      2
     ],
     [
      "🌧️ Tomorrow it rains",
      1
     ],
     [
      "🔴 I pick a red ball from a bag of only blue balls",
      2
     ],
     [
      "🔵 I pick a blue ball from a bag of only blue balls",
      0
     ]
    ]
   },
   "caption": "Put each event in the right group."
  },
  {
   "type": "text",
   "title": "Measuring probability with a fraction",
   "html": "<p>The <b>probability</b> of an event can be written as a <b>fraction</b>:</p>\n<p style=\"text-align:center;font-size:1.2em\"><b>probability = favourable cases / possible cases</b></p>\n<ul>\n<li><b>Possible cases</b>: all the results that can come up (all equally likely).</li>\n<li><b>Favourable cases</b>: the results that are good for our event.</li>\n</ul>\n<p>Examples with a die:</p>\n<ul>\n<li>\"A 5 comes up\": 1 favourable case out of 6 → <b>1/6</b></li>\n<li>\"An even number comes up\" (2, 4, 6): 3 out of 6 → <b>3/6 = 1/2</b>, that is 50%</li>\n<li><b>Certain</b> event: 6/6 = <b>1</b> (100%)</li>\n<li><b>Impossible</b> event: 0/6 = <b>0</b> (0%)</li>\n</ul>\n<p>So probability is always a number <b>between 0 and 1</b>: the closer to 1, the more likely the event.</p>"
  },
  {
   "type": "svg",
   "title": "The probability scale",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><linearGradient id=\"pg\" x1=\"0\" x2=\"1\" y1=\"0\" y2=\"0\"><stop offset=\"0\" stop-color=\"#ef4444\"/><stop offset=\"0.5\" stop-color=\"#facc15\"/><stop offset=\"1\" stop-color=\"#22c55e\"/></linearGradient></defs>\n<rect width=\"600\" height=\"260\" fill=\"#ffffff\"/>\n<rect x=\"50\" y=\"110\" width=\"500\" height=\"30\" rx=\"15\" fill=\"url(#pg)\"/>\n<g font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1f2937\">\n<text x=\"60\" y=\"170\">0</text><text x=\"175\" y=\"170\">1/6</text><text x=\"300\" y=\"170\">1/2</text><text x=\"540\" y=\"170\">1</text>\n</g>\n<g stroke=\"#1f2937\" stroke-width=\"3\">\n<line x1=\"60\" y1=\"100\" x2=\"60\" y2=\"150\"/><line x1=\"133\" y1=\"100\" x2=\"133\" y2=\"150\"/><line x1=\"300\" y1=\"100\" x2=\"300\" y2=\"150\"/><line x1=\"540\" y1=\"100\" x2=\"540\" y2=\"150\"/>\n</g>\n<g font-size=\"17\" text-anchor=\"middle\">\n<text x=\"60\" y=\"60\" fill=\"#b91c1c\">impossible</text><text x=\"60\" y=\"85\" fill=\"#b91c1c\">a 7 comes up</text>\n<text x=\"133\" y=\"210\" fill=\"#92400e\">a 5 comes up</text>\n<text x=\"300\" y=\"60\" fill=\"#854d0e\">heads or tails</text><text x=\"300\" y=\"85\" fill=\"#854d0e\">heads comes up</text>\n<text x=\"300\" y=\"210\" fill=\"#854d0e\">an even number comes up</text>\n<text x=\"530\" y=\"60\" fill=\"#166534\">certain</text><text x=\"530\" y=\"85\" fill=\"#166534\">1 to 6 comes up</text>\n</g>\n<text x=\"300\" y=\"245\" font-size=\"16\" fill=\"#475569\" text-anchor=\"middle\">further right = more likely</text>\n</svg>",
   "caption": "Each event has its place between 0 (impossible) and 1 (certain)."
  },
  {
   "type": "widget",
   "title": "Probability as a pie",
   "widget": "fractionPie",
   "options": {
    "n": 1,
    "d": 6
   },
   "caption": "The denominator is the possible cases, the numerator the favourable cases. 1/6 = probability that a specific number on the die comes up. Try 3/6: it is the probability of an even number."
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The game that gave birth to probability",
   "html": "<p>Probability as a science was born in <b>1654</b> from a question about a dice game. A French gambler, the Chevalier de Méré, asked the mathematician <b>Blaise Pascal</b> how to divide fairly the stake of an interrupted game. Pascal discussed it by letter with <b>Pierre de Fermat</b> and together they invented probability theory.</p>\n<p>An Italian had also come close a century earlier: the doctor and mathematician <b>Gerolamo Cardano</b>, a great dice enthusiast!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The coin has no memory",
   "html": "<p>You tossed a coin 5 times and it came up heads every time. On the sixth toss is tails more likely? <b>No!</b> The coin doesn't remember the previous tosses: the probability of tails is still <b>1/2</b>.</p>\n<p>Believing otherwise is called the \"gambler's fallacy\". In 1913, in a casino in Monte Carlo, black came up <b>26 times in a row</b> at roulette, and many gamblers lost huge amounts of money betting on red, convinced that \"by now it had to come up\".</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li><b>Mode</b> = the most frequent datum.</li>\n<li><b>Mean</b> = sum of the data ÷ number of data.</li>\n<li><b>Median</b> = the middle datum, after putting them in order.</li>\n<li><b>Certain</b> event (probability 1), <b>possible</b> (between 0 and 1), <b>impossible</b> (0).</li>\n<li><b>Probability</b> = favourable cases / possible cases.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand statistics and probability",
   "intro": "Mean and probability are ideas you understand better by doing: levelling towers, picking balls, counting tosses. Choose your way!",
   "tabs": [
    {
     "label": "🧱 The mean that \"levels\"",
     "html": "<p>Imagine the data as <b>towers of cubes</b>: 2, 5, 3, 6.</p>\n<p>The <b>mean</b> is the height all the towers would have if you moved cubes from the tall towers to the short ones until they were <b>all equal</b>.</p>\n<p>In all there are 2 + 5 + 3 + 6 = 16 cubes. Shared among 4 towers: 16 ÷ 4 = <b>4 cubes</b> each. The mean is 4!</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0f9ff\"/>\n<g fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"2\">\n<rect x=\"30\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"30\" y=\"160\" width=\"30\" height=\"30\"/>\n<rect x=\"70\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"160\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"130\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"100\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"70\" width=\"30\" height=\"30\"/>\n<rect x=\"110\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"110\" y=\"160\" width=\"30\" height=\"30\"/><rect x=\"110\" y=\"130\" width=\"30\" height=\"30\"/>\n<rect x=\"150\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"150\" y=\"160\" width=\"30\" height=\"30\"/><rect x=\"150\" y=\"130\" width=\"30\" height=\"30\"/><rect x=\"150\" y=\"100\" width=\"30\" height=\"30\"/><rect x=\"150\" y=\"70\" width=\"30\" height=\"30\"/><rect x=\"150\" y=\"40\" width=\"30\" height=\"30\"/>\n</g>\n<text x=\"105\" y=\"245\" font-size=\"18\" text-anchor=\"middle\">2, 5, 3, 6</text>\n<text x=\"290\" y=\"140\" font-size=\"44\" fill=\"#1e3a8a\" text-anchor=\"middle\">→</text>\n<g fill=\"#34d399\" stroke=\"#065f46\" stroke-width=\"2\">\n<rect x=\"380\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"380\" y=\"160\" width=\"30\" height=\"30\"/><rect x=\"380\" y=\"130\" width=\"30\" height=\"30\"/><rect x=\"380\" y=\"100\" width=\"30\" height=\"30\"/>\n<rect x=\"420\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"160\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"130\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"100\" width=\"30\" height=\"30\"/>\n<rect x=\"460\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"460\" y=\"160\" width=\"30\" height=\"30\"/><rect x=\"460\" y=\"130\" width=\"30\" height=\"30\"/><rect x=\"460\" y=\"100\" width=\"30\" height=\"30\"/>\n<rect x=\"500\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"500\" y=\"160\" width=\"30\" height=\"30\"/><rect x=\"500\" y=\"130\" width=\"30\" height=\"30\"/><rect x=\"500\" y=\"100\" width=\"30\" height=\"30\"/>\n</g>\n<line x1=\"370\" y1=\"100\" x2=\"545\" y2=\"100\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/>\n<text x=\"455\" y=\"245\" font-size=\"18\" text-anchor=\"middle\">mean = 4</text>\n</svg>"
    },
    {
     "label": "🎨 The bag of balls",
     "html": "<p>In a bag there are <b>3 red balls</b>, <b>2 blue</b> and <b>5 yellow</b> (10 in all). You pick without looking:</p>\n<ul>\n<li>probability of <b>yellow</b>: 5/10 = <b>1/2</b> (the most likely);</li>\n<li>probability of <b>red</b>: <b>3/10</b>;</li>\n<li>probability of <b>blue</b>: 2/10 = <b>1/5</b>;</li>\n<li>probability of <b>green</b>: 0/10 = <b>0</b> (impossible).</li>\n</ul>\n<p>Add up all the probabilities: 5/10 + 3/10 + 2/10 = 10/10 = <b>1</b>. Something must come out!</p>",
     "widget": "counter",
     "options": {
      "emoji": "🔴",
      "max": 20
     }
    },
    {
     "label": "🎲 Try tossing!",
     "html": "<p>Probability tells what happens <b>\"on average\" after many attempts</b>. Do the experiment:</p>\n<ol>\n<li>toss a coin <b>10 times</b> and count the heads: maybe 7 heads and 3 tails come up;</li>\n<li>now toss it <b>100 times</b> (get the whole class to help!): the heads will be much closer to <b>50</b>.</li>\n</ol>\n<p>This is called the <b>law of large numbers</b>: the more trials you do, the closer the frequency gets to the probability. The mathematician Karl Pearson tossed a coin <b>24,000 times</b> and got 12,012 heads: almost exactly half!</p>"
    },
    {
     "label": "🍕 Pie charts",
     "html": "<p>Another representation is the <b>pie chart</b>: the circle is the total and each slice is as big as its part.</p>\n<p>Out of 18 pupils, 9 prefer football: it is <b>half the pie</b>. 6 swimming: a third. 3 dance: a sixth.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#fefce8\"/>\n<path d=\"M160 130 L160 30 A100 100 0 0 1 160 230 Z\" fill=\"#22c55e\" stroke=\"#ffffff\" stroke-width=\"3\"/>\n<path d=\"M160 130 L160 230 A100 100 0 0 1 73.4 80 Z\" fill=\"#3b82f6\" stroke=\"#ffffff\" stroke-width=\"3\"/>\n<path d=\"M160 130 L73.4 80 A100 100 0 0 1 160 30 Z\" fill=\"#a855f7\" stroke=\"#ffffff\" stroke-width=\"3\"/>\n<rect x=\"320\" y=\"60\" width=\"26\" height=\"26\" fill=\"#22c55e\"/><text x=\"356\" y=\"80\" font-size=\"20\">⚽ Football: 9 (1/2)</text>\n<rect x=\"320\" y=\"115\" width=\"26\" height=\"26\" fill=\"#3b82f6\"/><text x=\"356\" y=\"135\" font-size=\"20\">🏊 Swimming: 6 (1/3)</text>\n<rect x=\"320\" y=\"170\" width=\"26\" height=\"26\" fill=\"#a855f7\"/><text x=\"356\" y=\"190\" font-size=\"20\">🤸 Dance: 3 (1/6)</text>\n</svg>"
    },
    {
     "label": "🌍 Statistics in the world",
     "html": "<ul>\n<li>🇮🇹 <b>ISTAT</b> (the Italian National Institute of Statistics) counts the inhabitants of Italy every year: about <b>59 million</b>.</li>\n<li>🏛️ The ancient <b>Romans</b> held a <b>census</b> every 5 years to count the citizens and their wealth: that is where the word comes from!</li>\n<li>🇬🇧 The English nurse <b>Florence Nightingale</b>, in 1858, used coloured pie charts to convince the government that soldiers died more from disease than from wounds. Thanks to her data, hospitals became cleaner and thousands of lives were saved.</li>\n<li>🌦️ When the weather forecast says \"<b>70% chance of rain</b>\", it means that on 7 days out of 10 with weather like this, it rains.</li>\n</ul>"
    },
    {
     "label": "🇫🇷 Pascal and Fermat: the interrupted game (France)",
     "html": "<p>In <b>1654</b>, in <b>France</b>, two mathematicians, <b>Blaise Pascal</b> and <b>Pierre de Fermat</b>, wrote letters to each other to solve a problem: how to divide fairly the money of a contest <b>interrupted</b> before the end? From those letters probability theory was born.</p><p><b>The problem</b>: Anna (A) and Bruno (B) are playing. Each game can be won by either one with the same probability. The first to reach <b>3 points</b> wins the contest and takes the prize of <b>24 stickers</b>. At <b>2 to 1</b> for Anna they have to stop. How do they share the stickers?</p><p>Fermat's method: <b>imagine playing the missing games anyway</b> (at most 2) and draw the <b>tree</b> of possibilities:</p><ul><li>AA → Anna wins; AB → Anna wins (she had already won at the first!); BA → Anna wins; BB → Bruno wins.</li></ul><p>There are 4 cases, all equally likely: Anna wins in <b>3 out of 4</b>, Bruno in <b>1 out of 4</b>. So it is fair to give <b>3/4</b> of the stickers to Anna (<b>18</b>) and <b>1/4</b> to Bruno (<b>6</b>). Splitting them in half would be unfair to Anna; giving them all to Anna would be unfair to Bruno, who could still win.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"80\" cy=\"150\" r=\"24\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"80\" y=\"156\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2–1</text><line x1=\"104\" y1=\"150\" x2=\"218\" y2=\"80\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"104\" y1=\"150\" x2=\"218\" y2=\"220\" stroke=\"#334155\" stroke-width=\"2\"/><circle cx=\"240\" cy=\"80\" r=\"22\" fill=\"#bbf7d0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"240\" y=\"86\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><circle cx=\"240\" cy=\"220\" r=\"22\" fill=\"#fecaca\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"240\" y=\"226\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">B</text><line x1=\"262\" y1=\"80\" x2=\"378\" y2=\"50\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"262\" y1=\"80\" x2=\"378\" y2=\"110\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"262\" y1=\"220\" x2=\"378\" y2=\"190\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"262\" y1=\"220\" x2=\"378\" y2=\"250\" stroke=\"#334155\" stroke-width=\"2\"/><circle cx=\"400\" cy=\"50\" r=\"22\" fill=\"#bbf7d0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"56\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><circle cx=\"400\" cy=\"110\" r=\"22\" fill=\"#fecaca\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"116\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">B</text><circle cx=\"400\" cy=\"190\" r=\"22\" fill=\"#bbf7d0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"196\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><circle cx=\"400\" cy=\"250\" r=\"22\" fill=\"#fecaca\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"256\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">B</text><text x=\"436\" y=\"56\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">AA → A wins</text><text x=\"436\" y=\"116\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">AB → A wins</text><text x=\"436\" y=\"196\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">BA → A wins</text><text x=\"436\" y=\"256\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">BB → B wins</text><text x=\"160\" y=\"290\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\">1st game</text><text x=\"320\" y=\"290\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\">2nd game</text><text x=\"510\" y=\"290\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A: 3/4  B: 1/4</text></svg>"
    },
    {
     "label": "🇬🇷 The Greeks' knucklebones: faces that are not equal",
     "html": "<p>Before 6-sided dice, the ancient <b>Greeks</b> and Romans played with <b>knucklebones</b> (astragali): small bones from the leg of a sheep or goat. A knucklebone can land on <b>4 sides</b>, given the values <b>1, 3, 4 and 6</b>. The Romans called a throw of 4 knucklebones with 4 different values the «Venus throw».</p><p>But be careful: the 4 sides are <b>not equal</b>! Two sides are wide (3 and 4) and two are narrow (1 and 6). The knucklebone lands much more often on a wide side: about <b>4 times out of 10</b> each, against about <b>1 time out of 10</b> for each narrow side.</p><p>So for the knucklebone you <b>cannot</b> say «probability of 6 = 1/4», because the rule <b>favourable cases : possible cases</b> works only if all the cases are <b>equally likely</b>, as in a well-made die. When the cases are not equal, probability is estimated with <b>experiments</b>: you toss many times and calculate the <b>frequency</b>.</p><p>🎯 <b>Experiment</b>: toss a bottle cap 50 times. How many times does it land with the opening facing up? Calculate the frequency (for example 18/50). Is it close to 1/2? Put together the results of the whole class: with more tosses the estimate becomes more reliable.</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of statistics and probability: touch a node",
   "nodes": [
    {
     "id": "dati",
     "label": "Data",
     "x": 30,
     "y": 6,
     "color": "#2563eb",
     "html": "The collected information: numbers, answers, measurements.",
     "why": "Without data there is no statistics. The word <i>statistics</i> comes from \"State\": it was born in the 17th–18th centuries to count the inhabitants, births, deaths and taxes of States."
    },
    {
     "id": "frequenza",
     "label": "Frequency and tables",
     "x": 15,
     "y": 30,
     "color": "#0ea5e9",
     "html": "How many times each answer appears.",
     "why": "Putting data in a table makes it readable: a list of 100 answers is confusing, a table with 5 rows is not. In 1662 the Englishman <b>John Graunt</b> studied London's lists of the dead in this way, inventing modern statistics."
    },
    {
     "id": "grafici",
     "label": "Graphs",
     "x": 45,
     "y": 30,
     "color": "#f97316",
     "html": "Bar charts, pictograms, pie charts.",
     "why": "The eyes understand heights and areas faster than numbers. The Scotsman <b>William Playfair</b> invented the bar chart (1786) and the pie chart (1801)."
    },
    {
     "id": "indici",
     "label": "Mode, mean, median",
     "x": 30,
     "y": 55,
     "color": "#16a34a",
     "html": "Numbers that summarise a group of data.",
     "why": "The mean is the height the \"levelled\" data would have (dividing the total into equal parts); the median divides the data in half; the mode is the most voted. Each tells something different, which is why more than one is used."
    },
    {
     "id": "evento",
     "label": "Event",
     "x": 72,
     "y": 6,
     "color": "#a855f7",
     "html": "A fact that may or may not happen.",
     "why": "In life there are sure things and uncertain things. To make decisions (take an umbrella? play?) it is useful to measure uncertainty."
    },
    {
     "id": "tipi",
     "label": "Certain, possible, impossible",
     "x": 85,
     "y": 30,
     "color": "#ec4899",
     "html": "The three types of event.",
     "why": "If all the possible cases are favourable, the event is certain; if none is, it is impossible; otherwise it is possible."
    },
    {
     "id": "prob",
     "label": "Probability",
     "x": 72,
     "y": 55,
     "color": "#ef4444",
     "html": "Favourable cases / possible cases: a number from 0 to 1.",
     "why": "The \"classical\" definition was written by the Frenchman <b>Pierre-Simon Laplace</b> (1812), after the work of <b>Pascal and Fermat</b> (1654). It works when all the cases are equally likely, like the faces of a fair die."
    },
    {
     "id": "frazioni",
     "label": "Fractions and percentages",
     "x": 72,
     "y": 82,
     "color": "#14b8a6",
     "html": "Probability is written as a fraction (1/2) or a percentage (50%).",
     "why": "A probability is a \"part\" of the possible cases, just as a fraction is a part of the whole."
    },
    {
     "id": "grandi",
     "label": "Law of large numbers",
     "x": 30,
     "y": 85,
     "color": "#64748b",
     "html": "By repeating an experiment many times, the frequency gets closer to the probability.",
     "why": "It was proved by the Swiss <b>Jakob Bernoulli</b> in 1713. It is the bridge between statistics (the observed data) and probability (the prediction)."
    }
   ],
   "edges": [
    [
     "dati",
     "frequenza",
     "are organised in"
    ],
    [
     "frequenza",
     "grafici",
     "are drawn in"
    ],
    [
     "frequenza",
     "indici",
     "are summarised with"
    ],
    [
     "evento",
     "tipi",
     "can be"
    ],
    [
     "evento",
     "prob",
     "is measured with the"
    ],
    [
     "prob",
     "frazioni",
     "is written with"
    ],
    [
     "indici",
     "grandi",
     "observed frequencies"
    ],
    [
     "prob",
     "grandi",
     "prediction"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: probability",
   "questions": [
    {
     "type": "mc",
     "q": "Rolling a die, what is the probability that a 2 comes up?",
     "options": [
      "1/2",
      "1/6",
      "2/6"
     ],
     "answer": 1,
     "explain": "1 favourable case out of 6 possible."
    },
    {
     "type": "mc",
     "q": "\"I pick a heart card from a deck made only of hearts\" is an event that is…",
     "options": [
      "certain",
      "possible",
      "impossible"
     ],
     "answer": 0,
     "explain": "All the cards are hearts: it always happens."
    },
    {
     "type": "tf",
     "q": "A probability can be 3/2.",
     "answer": false,
     "explain": "Favourable cases cannot be more than possible ones: probability lies between 0 and 1."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Statistics",
   "d": "The science that collects, organises and interprets data."
  },
  {
   "t": "Frequency",
   "d": "The number of times a datum appears."
  },
  {
   "t": "Mode",
   "d": "The datum with the highest frequency."
  },
  {
   "t": "Arithmetic mean",
   "d": "The sum of the data divided by their number."
  },
  {
   "t": "Median",
   "d": "The middle datum of an ordered list."
  },
  {
   "t": "Bar chart (histogram)",
   "d": "A column graph: the height shows the frequency."
  },
  {
   "t": "Pie chart",
   "d": "A circle graph: each slice is proportional to its part."
  },
  {
   "t": "Event",
   "d": "A fact that may or may not happen."
  },
  {
   "t": "Probability",
   "d": "A measure of how likely an event is: favourable cases / possible cases."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Calculate the mean of 10, 20, 30, 40.",
    "answer": 25,
    "explain": "10 + 20 + 30 + 40 = 100; 100 ÷ 4 = 25."
   },
   {
    "type": "num",
    "q": "What is the mode of 2, 4, 4, 6, 4, 2, 8?",
    "answer": 4,
    "explain": "4 appears 3 times."
   },
   {
    "type": "num",
    "q": "What is the median of 15, 3, 8, 12, 6?",
    "answer": 8,
    "explain": "In order: 3, 6, 8, 12, 15 → the middle one is 8."
   },
   {
    "type": "mc",
    "q": "To find the median you must first…",
    "options": [
     "add the data",
     "put the data in order",
     "count the most frequent datum"
    ],
    "answer": 1,
    "explain": "The median is the middle value of the ordered data."
   },
   {
    "type": "mc",
    "q": "\"Tomorrow the Sun will rise in the west\" is an event that is…",
    "options": [
     "certain",
     "possible",
     "impossible"
    ],
    "answer": 2,
    "explain": "The Sun always rises in the east."
   },
   {
    "type": "mc",
    "q": "In a bag there are 4 red balls and 6 green ones. What is the probability of picking a red one?",
    "options": [
     "4/6",
     "4/10",
     "6/10"
    ],
    "answer": 1,
    "explain": "4 favourable cases out of 10 possible."
   },
   {
    "type": "tf",
    "q": "The probability of a certain event is 1.",
    "answer": true,
    "explain": "All the cases are favourable: n/n = 1."
   },
   {
    "type": "text",
    "q": "What is the column graph called?",
    "answer": [
     "bar chart",
     "the bar chart",
     "histogram"
    ],
    "explain": "It is the bar chart (histogram)."
   },
   {
    "type": "mc",
    "q": "Rolling a die, which event is more likely?",
    "options": [
     "A 6 comes up",
     "An odd number comes up",
     "A number greater than 6 comes up"
    ],
    "answer": 1,
    "explain": "Odd: 3/6. The 6: 1/6. Greater than 6: impossible (0)."
   },
   {
    "type": "order",
    "q": "Put in order from least to most likely (rolling a die).",
    "items": [
     "An 8 comes up",
     "A 3 comes up",
     "An even number comes up",
     "A number from 1 to 6 comes up"
    ],
    "explain": "0, then 1/6, then 3/6, then 6/6 = 1."
   },
   {
    "type": "num",
    "q": "Tossing a coin, what is the probability of heads written as a percentage? (just the number)",
    "answer": 50,
    "unit": "%",
    "explain": "1/2 = 50%."
   },
   {
    "type": "tf",
    "q": "If a coin has come up tails 4 times in a row, on the fifth toss heads is more likely.",
    "answer": false,
    "explain": "The coin has no memory: the probability stays 1/2."
   }
  ]
 }
});
