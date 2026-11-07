TOPIC('en', {
 "id": "p5-mat-operazioni-decimali",
 "title": "Operations with decimals",
 "intro": "Prices, measurements, race times: <b>decimal numbers</b> are everywhere. In this lesson you learn to do the <b>four operations with the decimal point</b> and to multiply and divide by 10, 100, 1000 by \"moving\" the point.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Review: how a decimal number is made",
   "html": "<p>A decimal number has a <b>whole part</b> (before the decimal point) and a <b>decimal part</b> (after the decimal point).</p>\n<p>In the number <b>34.56</b>:</p>\n<ul>\n<li>3 = tens (T), 4 = ones (O) → whole part;</li>\n<li>5 = <b>tenths</b> (t): 1 tenth = 1/10 = 0.1;</li>\n<li>6 = <b>hundredths</b> (h): 1 hundredth = 1/100 = 0.01;</li>\n<li>the next digit would be <b>thousandths</b>: 1/1000 = 0.001.</li>\n</ul>\n<p>Golden rule: adding <b>zeros at the end</b> of the decimal part <b>does not change</b> the number: 2.5 = 2.50 = 2.500. This trick will be very useful!</p>"
  },
  {
   "type": "text",
   "title": "Addition and subtraction: point under point",
   "html": "<ol>\n<li>Write the numbers in a column with the <b>decimal point under the decimal point</b> (so ones are under ones, tenths under tenths…).</li>\n<li>If a number has fewer decimal digits, <b>add zeros</b> to even them out: 12.4 → 12.40.</li>\n<li>Do the operation as with whole numbers, from right to left, with carrying and borrowing.</li>\n<li>In the result put the <b>point under the other points</b>.</li>\n</ol>\n<p>Example: 12.4 + 3.75 → 12.40 + 3.75 = <b>16.15</b>. Example: 8 − 2.35 → 8.00 − 2.35 = <b>5.65</b>.</p>"
  },
  {
   "type": "svg",
   "title": "In a column, point under point",
   "svg": "<svg viewBox=\"0 0 640 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"300\" fill=\"#f8fafc\"/>\n<g font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\">\n<text x=\"80\" y=\"36\" fill=\"#7c3aed\">T</text><text x=\"120\" y=\"36\" fill=\"#2563eb\">O</text><text x=\"180\" y=\"36\" fill=\"#16a34a\">t</text><text x=\"220\" y=\"36\" fill=\"#dc2626\">h</text>\n</g>\n<rect x=\"148\" y=\"44\" width=\"10\" height=\"170\" fill=\"#fde68a\"/>\n<g font-size=\"34\" text-anchor=\"middle\" font-family=\"monospace\" fill=\"#1f2937\">\n<text x=\"80\" y=\"84\">1</text><text x=\"120\" y=\"84\">2</text><text x=\"153\" y=\"84\">.</text><text x=\"180\" y=\"84\">4</text><text x=\"220\" y=\"84\" fill=\"#f97316\">0</text>\n<text x=\"40\" y=\"134\">+</text><text x=\"120\" y=\"134\">3</text><text x=\"153\" y=\"134\">.</text><text x=\"180\" y=\"134\">7</text><text x=\"220\" y=\"134\">5</text>\n<text x=\"80\" y=\"200\" font-weight=\"bold\">1</text><text x=\"120\" y=\"200\" font-weight=\"bold\">6</text><text x=\"153\" y=\"200\" font-weight=\"bold\">.</text><text x=\"180\" y=\"200\" font-weight=\"bold\">1</text><text x=\"220\" y=\"200\" font-weight=\"bold\">5</text>\n</g>\n<line x1=\"30\" y1=\"150\" x2=\"250\" y2=\"150\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<text x=\"132\" y=\"58\" font-size=\"14\" text-anchor=\"middle\" fill=\"#64748b\">1</text>\n<text x=\"235\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#ea580c\">zero added</text>\n<line x1=\"228\" y1=\"234\" x2=\"222\" y2=\"92\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n<g font-size=\"16\" fill=\"#1f2937\">\n<text x=\"300\" y=\"70\">1) point under point</text>\n<text x=\"300\" y=\"105\">2) even out with zeros: 12.4 → 12.40</text>\n<text x=\"300\" y=\"140\">3) calculate from the right, with carrying:</text>\n<text x=\"320\" y=\"165\">0 + 5 = 5;  4 + 7 = 11 → write 1, carry 1</text>\n<text x=\"300\" y=\"200\">4) the point in the result goes down</text>\n<text x=\"320\" y=\"225\">in the same column</text>\n</g>\n</svg>",
   "caption": "The yellow column of points keeps the digits in order: tenths with tenths, hundredths with hundredths."
  },
  {
   "type": "example",
   "title": "Practical example: the shopping",
   "html": "<p>Mum buys: bread <b>€2.35</b>, milk <b>€1.49</b>, apples <b>€3.2</b>. She pays with a <b>€10</b> note.</p>\n<ol>\n<li>Total: 2.35 + 1.49 + 3.20 = <b>€7.04</b> (careful: 3.2 → 3.20!).</li>\n<li>Change: 10.00 − 7.04 = <b>€2.96</b>.</li>\n</ol>\n<p>Quick check (estimate): 2 + 1.5 + 3 ≈ 6.5, so the total is about €7: the result is reasonable. ✅</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: addition and subtraction",
   "questions": [
    {
     "type": "num",
     "q": "4.5 + 2.35 = ?",
     "answer": 6.85,
     "explain": "4.50 + 2.35 = 6.85."
    },
    {
     "type": "num",
     "q": "10 − 3.6 = ?",
     "answer": 6.4,
     "explain": "10.0 − 3.6 = 6.4."
    },
    {
     "type": "tf",
     "q": "3.7 and 3.70 are the same number.",
     "answer": true,
     "explain": "Zeros at the end of the decimal part do not change the value."
    }
   ]
  },
  {
   "type": "text",
   "title": "Multiplying and dividing by 10, 100, 1000",
   "html": "<p>This is the most \"magic\" part:</p>\n<ul>\n<li><b>× 10, × 100, × 1000</b> → the point moves to the <b>right</b> by <b>1, 2, 3</b> places (the number gets bigger). 3.456 × 10 = 34.56; 3.456 × 100 = 345.6; 3.456 × 1000 = 3456.</li>\n<li><b>÷ 10, ÷ 100, ÷ 1000</b> → the point moves to the <b>left</b> by <b>1, 2, 3</b> places (the number gets smaller). 45.7 ÷ 10 = 4.57; 45.7 ÷ 100 = 0.457.</li>\n</ul>\n<p>If digits are missing, add <b>zeros</b>: 2.5 × 1000 = 2500; 3 ÷ 100 = 0.03.</p>\n<p>The trick: <b>count the zeros</b> in 10, 100, 1000. As many zeros = as many places.</p>"
  },
  {
   "type": "text",
   "title": "Multiplication with decimals",
   "html": "<ol>\n<li>Do the multiplication <b>as if there were no decimal points</b>.</li>\n<li><b>Count</b> how many decimal digits there are <b>in total</b> in the two factors.</li>\n<li>In the result, starting from the right, separate with the point <b>the same number of digits</b>.</li>\n</ol>\n<p>Example: 2.3 × 1.4 → 23 × 14 = 322. Decimal digits: 1 + 1 = 2 → <b>3.22</b>.</p>\n<p>Example: 0.5 × 0.3 → 5 × 3 = 15. Decimal digits: 2 → <b>0.15</b>.</p>\n<p>⚠️ Multiplying by a number <b>less than 1</b> gives a <b>smaller</b> result: 0.5 × 8 = 4 (it's half of 8!).</p>"
  },
  {
   "type": "widget",
   "title": "Multiplication as area: 0.3 × 0.4",
   "widget": "areaGrid",
   "options": {
    "w": 3,
    "h": 4,
    "max": 10
   },
   "caption": "Imagine that the big 10 × 10 square is 1 whole: each side is 1 and each little square is worth 0.01. A rectangle of 3 columns (0.3) and 4 rows (0.4) contains 12 little squares: 0.3 × 0.4 = 0.12."
  },
  {
   "type": "text",
   "title": "Division with decimals",
   "html": "<p><b>Case 1 – the point is in the dividend</b> (e.g. 7.5 ÷ 3):</p>\n<ol>\n<li>divide the whole part normally: 7 ÷ 3 = 2 remainder 1;</li>\n<li><b>when you bring down the first digit after the point, put the point in the quotient</b>: bring down the 5 → 15 ÷ 3 = 5 → result <b>2.5</b>.</li>\n</ol>\n<p><b>Case 2 – the point is in the divisor</b> (e.g. 6 ÷ 1.5):</p>\n<ol>\n<li>use the <b>invariance property</b>: multiply dividend and divisor by the <b>same number</b> (10, 100…) to remove the point from the divisor;</li>\n<li>6 ÷ 1.5 → (× 10) → 60 ÷ 15 = <b>4</b>.</li>\n</ol>\n<p><b>Case 3 – the remainder is not zero</b>: you can go on by adding a <b>zero</b> to the remainder and putting the point in the quotient: 7 ÷ 4 = 1 remainder 3 → 30 ÷ 4 = 7 remainder 2 → 20 ÷ 4 = 5 → <b>1.75</b>.</p>"
  },
  {
   "type": "example",
   "title": "Practical example: splitting the pizza bill",
   "html": "<p>Four friends spend <b>€38.60</b> at the pizzeria and split the bill equally.</p>\n<p>38.60 ÷ 4 → 38 ÷ 4 = 9 remainder 2; bring down the 6 (put the point!) → 26 ÷ 4 = 6 remainder 2; bring down the 0 → 20 ÷ 4 = 5. Result: <b>€9.65</b> each.</p>\n<p>Check: 9.65 × 4 = 38.60 ✅. Multiplication is the <b>inverse</b> operation of division: it is the best way to check!</p>"
  },
  {
   "type": "example",
   "title": "Practical example: petrol and the scooter",
   "html": "<p>Petrol costs <b>€1.85</b> a litre. Grandpa buys <b>12 litres</b>. How much does he spend?</p>\n<p>185 × 12 = 2220 → 2 decimal digits → <b>€22.20</b>.</p>\n<p>The scooter travels <b>34.5 km</b> on 1 litre. With 12 litres: 34.5 × 12 = <b>414 km</b>.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: multiplication and division",
   "questions": [
    {
     "type": "num",
     "q": "4.73 × 100 = ?",
     "answer": 473,
     "explain": "× 100: the point moves 2 places to the right."
    },
    {
     "type": "num",
     "q": "56 ÷ 1000 = ?",
     "answer": 0.056,
     "explain": "÷ 1000: the point moves 3 places to the left, adding zeros: 0.056."
    },
    {
     "type": "num",
     "q": "1.2 × 0.3 = ?",
     "answer": 0.36,
     "explain": "12 × 3 = 36; 2 decimal digits → 0.36."
    },
    {
     "type": "num",
     "q": "9 ÷ 1.5 = ?",
     "answer": 6,
     "explain": "Invariance property: 90 ÷ 15 = 6."
    }
   ]
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Comma or point?",
   "html": "<p>In English-speaking countries, China and Japan, decimals are separated with a <b>point</b> (3.14). In Italy and much of Europe a <b>comma</b> is used (3,14). Calculators and computers often use the point! And thousands? We write 1,000,000; Italians write 1.000.000 or 1 000 000. To avoid confusion, international standards recommend separating thousands with a <b>space</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The booklet that invented decimals (in Europe)",
   "html": "<p>In <b>1585</b> the Flemish mathematician <b>Simon Stevin</b> published a booklet of a few pages, <i>De Thiende</i> (\"The Tenth\"), to explain to merchants and surveyors how to use decimal fractions in everyday calculations. He wrote numbers in a strange way, with little circles: 3⓪1①4②. A few years later the Scotsman <b>John Napier</b> made the separator popular. Much earlier, Arab and Chinese mathematicians already used decimal fractions.</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li><b>+ and −</b>: point under point, even out with zeros.</li>\n<li><b>× and ÷ by 10, 100, 1000</b>: move the point to the right (×) or to the left (÷) by as many places as there are zeros.</li>\n<li><b>×</b>: multiply without points, then separate as many decimal digits as there are in total in the factors.</li>\n<li><b>÷</b> point in the dividend → put it in the quotient when you pass it; point in the divisor → remove it with the invariance property.</li>\n<li>Always <b>estimate</b> the result and do the <b>check</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand calculations with decimals",
   "intro": "If the rule of the decimal point confuses you, try with euros, with 3D blocks, with units of measure or with the estimating method used in many countries.",
   "tabs": [
    {
     "label": "💶 Think in cents",
     "html": "<p>Turn everything into <b>cents</b> and the point disappears!</p>\n<ul>\n<li>€2.35 + €1.49 → 235 c + 149 c = 384 c = <b>€3.84</b>.</li>\n<li>€10 − €7.04 → 1000 c − 704 c = 296 c = <b>€2.96</b>.</li>\n<li>€1.85 × 12 → 185 c × 12 = 2220 c = <b>€22.20</b>.</li>\n<li>€38.60 ÷ 4 → 3860 c ÷ 4 = 965 c = <b>€9.65</b>.</li>\n</ul>\n<p>It is exactly what the decimal-point rule does: it works with whole numbers and at the end puts the point back in the right place.</p>"
    },
    {
     "label": "🧊 The 3D blocks",
     "html": "<p>Take base-10 blocks but change the \"value\": the <b>flat</b> of 100 cubes is worth <b>1 whole</b>, the <b>rod</b> of 10 is worth <b>1 tenth</b> (0.1), the <b>little cube</b> is worth <b>1 hundredth</b> (0.01).</p>\n<p>The model below shows 245 little cubes: with our rule they are <b>2.45</b> (2 flats, 4 rods, 5 cubes). If you add 0.07 you add 7 cubes: you get 12 loose cubes, you swap 10 of them for a rod (that's the <b>carry</b>!) and you get 2.52.</p>",
     "scene": "blocks",
     "options": {
      "mode": "base10",
      "value": 245
     }
    },
    {
     "label": "📏 With measures",
     "html": "<p>Multiplying and dividing by 10, 100, 1000 is like <b>changing the unit of measure</b>:</p>\n<ul>\n<li>3.25 m = 32.5 dm = <b>325 cm</b> (× 100: from metres to centimetres).</li>\n<li>1500 g = <b>1.5 kg</b> (÷ 1000: from grams to kilograms).</li>\n<li>0.75 l = <b>75 cl</b> = 750 ml.</li>\n</ul>\n<p>The number changes, but the <b>quantity stays the same</b>: only the \"ruler\" you measure it with changes. Moving the point = changing drawer in the table of measures.</p>",
     "svg": "<svg viewBox=\"0 0 600 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"200\" fill=\"#f0fdf4\"/>\n<g font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">\n<rect x=\"20\" y=\"40\" width=\"80\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"60\" y=\"73\">km</text>\n<rect x=\"100\" y=\"40\" width=\"80\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"140\" y=\"73\">hm</text>\n<rect x=\"180\" y=\"40\" width=\"80\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"220\" y=\"73\">dam</text>\n<rect x=\"260\" y=\"40\" width=\"80\" height=\"50\" fill=\"#fde68a\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"300\" y=\"73\">m</text>\n<rect x=\"340\" y=\"40\" width=\"80\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"380\" y=\"73\">dm</text>\n<rect x=\"420\" y=\"40\" width=\"80\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"460\" y=\"73\">cm</text>\n<rect x=\"500\" y=\"40\" width=\"80\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"540\" y=\"73\">mm</text>\n</g>\n<path d=\"M300,100 Q380,150 460,100\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<polygon points=\"452,96 468,100 458,112\" fill=\"#dc2626\"/>\n<text x=\"380\" y=\"160\" font-size=\"17\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">× 100 (2 places to the right)</text>\n<text x=\"300\" y=\"190\" font-size=\"17\" text-anchor=\"middle\" fill=\"#1f2937\">3.25 m = 325 cm</text>\n</svg>"
    },
    {
     "label": "🎯 First estimate, then calculate",
     "html": "<p>In many countries (for example in England and in the Netherlands) children are taught to <b>estimate first</b> and to use the estimate to <b>place the decimal point</b>:</p>\n<ul>\n<li>4.8 × 3.1 → estimate: 5 × 3 = 15. Calculation without points: 48 × 31 = 1488. Where does the point go to be close to 15? → <b>14.88</b>!</li>\n<li>0.62 × 5 → estimate: about half of 5… about 3. 62 × 5 = 310 → <b>3.10</b>.</li>\n</ul>\n<p>This way, even if you miscount the decimal digits, the estimate warns you at once: 148.8 or 1.488 would be absurd!</p>"
    },
    {
     "label": "🇬🇧 The English decimal point",
     "html": "<p>In Italy they write <b>3,75</b> with a comma. In the <b>United Kingdom</b>, the <b>United States</b> and many other countries it is written <b>3.75</b>: a <b>point</b> (<i>decimal point</i>) instead of the comma. And for thousands they do the opposite of Italy: the Italian 1.250,75 is <b>1,250.75</b> for us!</p><p>⚠️ Careful when you use a calculator or a phone set to Italian: the decimal key is a <b>comma</b>.</p><p>To add and subtract in a column, English teachers repeat: <b>«line up the decimal points!»</b>. It is the same rule we use here:</p><ol><li>Write the numbers one under the other with the <b>decimal points in a column</b>.</li><li>Add the missing <b>zeros</b>, so the digits are all aligned: 12.5 becomes 12.50.</li><li>Calculate as with whole numbers and bring the point down in the same column.</li></ol><p>12.50 + 3.75 = <b>16.25</b>.</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#f8fafc\"/><rect x=\"30\" y=\"30\" width=\"250\" height=\"110\" fill=\"#ffffff\" stroke=\"#16a34a\" stroke-width=\"3\"/><text x=\"155\" y=\"62\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">🇮🇹 Italy</text><text x=\"155\" y=\"100\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1.250,75</text><text x=\"155\" y=\"128\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#16a34a\" text-anchor=\"middle\">comma = decimals</text><rect x=\"320\" y=\"30\" width=\"250\" height=\"110\" fill=\"#ffffff\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"445\" y=\"62\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">🇬🇧 🇺🇸 UK and USA</text><text x=\"445\" y=\"100\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1,250.75</text><text x=\"445\" y=\"128\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#2563eb\" text-anchor=\"middle\">point = decimals</text><text x=\"140\" y=\"190\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">  12.50</text><text x=\"140\" y=\"222\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">+  3.75</text><line x1=\"140\" y1=\"232\" x2=\"260\" y2=\"232\" stroke=\"#1e293b\" stroke-width=\"3\"/><text x=\"140\" y=\"262\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">  16.25</text><line x1=\"215\" y1=\"168\" x2=\"215\" y2=\"270\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><text x=\"300\" y=\"215\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">«line up the</text><text x=\"300\" y=\"238\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">decimal points!»</text></svg>"
    },
    {
     "label": "🇯🇵 The soroban: you choose where the point is",
     "html": "<p>On the Japanese <b>soroban</b> there is no decimal point! Every 3 rods there is a small <b>dot</b> on the bar: before starting <b>choose a dot</b> and decide that this is the <b>ones</b> rod. To the left are tens and hundreds, to the <b>right</b> tenths, hundredths, thousandths.</p><p>Remember: the top bead is worth <b>5</b>, each of the 4 at the bottom is worth <b>1</b>.</p><p><b>2.35 + 1.49</b>:</p><ol><li>Set <b>2.35</b>: 2 on the ones rod, 3 on the tenths, 5 on the hundredths (the bead worth 5).</li><li>Add 1 one → 3 ones.</li><li>Add 4 tenths → 7 tenths.</li><li>Add 9 hundredths: 5 + 9 = 14 → you leave 4 hundredths and carry <b>1 more tenth</b>: 8 tenths.</li><li>Read: <b>3.84</b>.</li></ol><p>The point never moves: you decide only once where the ones are. And to multiply by 10? Just imagine that the ones are one rod further right: all the digits \"go up\" one place!</p>",
     "svg": "<svg viewBox=\"0 0 600 290\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"290\" fill=\"#f8fafc\"/><rect x=\"30\" y=\"20\" width=\"320\" height=\"230\" fill=\"#92400e\" stroke=\"#451a03\" stroke-width=\"3\"/><rect x=\"40\" y=\"30\" width=\"300\" height=\"210\" fill=\"#fef3c7\" stroke=\"#78350f\" stroke-width=\"2\"/><rect x=\"40\" y=\"90\" width=\"300\" height=\"8\" fill=\"#451a03\" stroke=\"#451a03\" stroke-width=\"1\"/><line x1=\"70\" y1=\"30\" x2=\"70\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"70\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"70\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">tens</text><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"130\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"113\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"94\" r=\"4\" fill=\"#fff\" stroke=\"none\" stroke-width=\"2\"/><text x=\"130\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">ones</text><line x1=\"190\" y1=\"30\" x2=\"190\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"190\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"113\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"190\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">tenths</text><line x1=\"250\" y1=\"30\" x2=\"250\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"250\" cy=\"75\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">hund.</text><line x1=\"310\" y1=\"30\" x2=\"310\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"310\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">thou.</text><text x=\"410\" y=\"60\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">2.35 on the soroban</text><text x=\"410\" y=\"92\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">white dot =</text><text x=\"410\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">ones rod</text><text x=\"410\" y=\"150\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">to the right:</text><text x=\"410\" y=\"170\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">tenths, hundredths…</text></svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of operations with decimals",
   "nodes": [
    {
     "id": "decimali",
     "label": "Decimal numbers",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Numbers with a whole part and a decimal part, separated by the decimal point.",
     "why": "They are decimal fractions (with denominator 10, 100, 1000…) written in a convenient way: 0.25 = 25/100. They work because our number system is base 10."
    },
    {
     "id": "posizione",
     "label": "Place value",
     "x": 20,
     "y": 26,
     "color": "#7c3aed",
     "html": "Each place is worth 10 times the one to its right: O, t, h, th.",
     "why": "The place-value system with zero came from India through the Arabs; Fibonacci spread it in Europe in 1202. Decimals are its extension \"after the point\"."
    },
    {
     "id": "addsott",
     "label": "Addition and subtraction",
     "x": 20,
     "y": 52,
     "color": "#16a34a",
     "html": "Point under point, evening out with zeros.",
     "why": "You can only add units of the same kind (tenths with tenths): lining up the points automatically aligns the place values."
    },
    {
     "id": "potenze10",
     "label": "× and ÷ by 10, 100, 1000",
     "x": 50,
     "y": 34,
     "color": "#f97316",
     "html": "The point moves right (×) or left (÷) by as many places as there are zeros.",
     "why": "Multiplying by 10 makes every digit 10 times bigger: every digit \"goes up\" one place. In reality the digits move, but it is as if the point moved."
    },
    {
     "id": "molt",
     "label": "Multiplication",
     "x": 50,
     "y": 62,
     "color": "#dc2626",
     "html": "Multiply without points, then separate as many decimal digits as in the factors.",
     "why": "2.3 × 1.4 = (23 ÷ 10) × (14 ÷ 10) = 322 ÷ 100 = 3.22. Removing the points means multiplying by 10, 100…; at the end you must \"give back\" those divisions."
    },
    {
     "id": "div",
     "label": "Division",
     "x": 80,
     "y": 52,
     "color": "#0ea5e9",
     "html": "Point in the quotient when you pass the point of the dividend; point of the divisor removed with the invariance property.",
     "why": "Invariance property: multiplying dividend and divisor by the same number the quotient does not change (6 ÷ 1.5 = 60 ÷ 15), like equivalent fractions."
    },
    {
     "id": "zeri",
     "label": "Final zeros",
     "x": 80,
     "y": 26,
     "color": "#eab308",
     "html": "2.5 = 2.50 = 2.500.",
     "why": "Adding zeros after the last decimal digit means adding 0 hundredths, 0 thousandths: the value does not change. It's like saying 25/10 = 250/100."
    },
    {
     "id": "stima",
     "label": "Estimate and check",
     "x": 35,
     "y": 86,
     "color": "#14b8a6",
     "html": "Approximate calculation first, inverse operation after.",
     "why": "Rounding to whole numbers gives the order of magnitude at once: if the estimate and the result are very different, the point is in the wrong place."
    },
    {
     "id": "storia",
     "label": "Stevin and Napier",
     "x": 70,
     "y": 86,
     "color": "#64748b",
     "html": "Who spread decimals in Europe.",
     "why": "Simon Stevin in 1585 (<i>De Thiende</i>) explained decimals for trade; John Napier at the beginning of the 1600s made the decimal separator popular. Even earlier, Chinese and Arab mathematicians such as al-Kashi (1427) used them."
    }
   ],
   "edges": [
    [
     "decimali",
     "posizione",
     "are based on the"
    ],
    [
     "decimali",
     "zeri",
     "property"
    ],
    [
     "posizione",
     "addsott",
     "aligns"
    ],
    [
     "posizione",
     "potenze10",
     "explains"
    ],
    [
     "potenze10",
     "molt",
     "used in the"
    ],
    [
     "zeri",
     "div",
     "help with the"
    ],
    [
     "molt",
     "stima",
     "is checked with"
    ],
    [
     "decimali",
     "storia",
     "spread by"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Decimal number",
   "d": "A number with a whole part and a decimal part separated by the decimal point."
  },
  {
   "t": "Tenth",
   "d": "One of the 10 parts of the unit: 0.1."
  },
  {
   "t": "Hundredth",
   "d": "One of the 100 parts of the unit: 0.01."
  },
  {
   "t": "Thousandth",
   "d": "One of the 1000 parts of the unit: 0.001."
  },
  {
   "t": "Line up in columns",
   "d": "To write the numbers one under the other with digits of the same order aligned."
  },
  {
   "t": "Invariance property",
   "d": "Multiplying or dividing dividend and divisor by the same number, the quotient does not change."
  },
  {
   "t": "Estimate",
   "d": "An approximate calculation to predict the result."
  },
  {
   "t": "Check",
   "d": "Checking the result with the inverse operation."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "15.6 + 4.75 = ?",
    "answer": 20.35,
    "explain": "15.60 + 4.75 = 20.35."
   },
   {
    "type": "num",
    "q": "20 − 7.85 = ?",
    "answer": 12.15,
    "explain": "20.00 − 7.85 = 12.15."
   },
   {
    "type": "num",
    "q": "0.38 × 1000 = ?",
    "answer": 380,
    "explain": "3 places to the right: 380."
   },
   {
    "type": "num",
    "q": "125 ÷ 100 = ?",
    "answer": 1.25,
    "explain": "2 places to the left: 1.25."
   },
   {
    "type": "num",
    "q": "3.5 × 4 = ?",
    "answer": 14,
    "explain": "35 × 4 = 140; 1 decimal digit → 14.0 = 14."
   },
   {
    "type": "num",
    "q": "0.6 × 0.7 = ?",
    "answer": 0.42,
    "explain": "6 × 7 = 42; 2 decimal digits → 0.42."
   },
   {
    "type": "num",
    "q": "8.4 ÷ 4 = ?",
    "answer": 2.1,
    "explain": "8 ÷ 4 = 2, then 4 ÷ 4 = 1 after the point → 2.1."
   },
   {
    "type": "num",
    "q": "12 ÷ 0.4 = ?",
    "answer": 30,
    "explain": "Invariance property: 120 ÷ 4 = 30."
   },
   {
    "type": "mc",
    "q": "To multiply 2.37 × 1.2, how many decimal digits will the result have?",
    "options": [
     "1",
     "2",
     "3"
    ],
    "answer": 2,
    "explain": "2 digits in 2.37 + 1 in 1.2 = 3 decimal digits (2.844)."
   },
   {
    "type": "tf",
    "q": "Multiplying a number by 0.5 gives a bigger number.",
    "answer": false,
    "explain": "0.5 is less than 1: you get half of the number."
   },
   {
    "type": "num",
    "q": "A notebook costs €1.75. How much do 6 notebooks cost?",
    "answer": 10.5,
    "unit": "€",
    "explain": "175 × 6 = 1050 → €10.50."
   },
   {
    "type": "order",
    "q": "Put the steps for calculating 2.3 × 1.4 in order.",
    "items": [
     "I multiply without points: 23 × 14 = 322",
     "I count the decimal digits of the factors: 1 + 1 = 2",
     "I separate 2 digits from the right: 3.22",
     "I check with an estimate: 2 × 1.5 ≈ 3"
    ],
    "explain": "Calculate, count the decimals, place the point, check with the estimate."
   }
  ],
  "gen": [
   [
    "decAdd",
    2
   ],
   [
    "decMul",
    2
   ]
  ]
 }
});
