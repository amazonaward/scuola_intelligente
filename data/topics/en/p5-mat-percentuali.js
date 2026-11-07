TOPIC('en', {
 "id": "p5-mat-percentuali",
 "title": "Percentages",
 "intro": "«Sale: −30%!», «Battery at 15%», «60% of the class prefers football». <b>Percentages</b> are everywhere. The symbol <b>%</b> simply means <b>\"out of a hundred\"</b>. Let's learn to calculate them, to use them for <b>discounts</b> and <b>increases</b> and to read them in <b>pie charts</b>.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "What is a percentage",
   "html": "<p>A <b>percentage</b> is a <b>fraction with denominator 100</b>, written with the symbol <b>%</b> (\"per cent\").</p>\n<ul>\n<li><b>25%</b> = 25/100 = 0.25 → 25 parts out of 100;</li>\n<li><b>50%</b> = 50/100 = 1/2 → <b>half</b>;</li>\n<li><b>100%</b> = 100/100 = 1 → <b>everything</b>, the whole;</li>\n<li><b>10%</b> = 10/100 = 1/10 → one tenth.</li>\n</ul>\n<p>Why exactly 100? Because it makes it very easy to <b>compare</b>: \"18 out of 25\" and \"35 out of 50\" are hard to compare, but \"72%\" and \"70%\" can be compared at once!</p>"
  },
  {
   "type": "svg",
   "title": "The 100 grid",
   "svg": "<svg viewBox=\"0 0 640 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"300\" fill=\"#f8fafc\"/>\n<g transform=\"translate(30,30)\">\n<rect x=\"0\" y=\"0\" width=\"240\" height=\"240\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<rect x=\"0\" y=\"0\" width=\"240\" height=\"48\" fill=\"#f97316\"/>\n<rect x=\"0\" y=\"48\" width=\"120\" height=\"24\" fill=\"#f97316\"/>\n<g stroke=\"#cbd5e1\" stroke-width=\"1\">\n<line x1=\"24\" y1=\"0\" x2=\"24\" y2=\"240\"/><line x1=\"48\" y1=\"0\" x2=\"48\" y2=\"240\"/><line x1=\"72\" y1=\"0\" x2=\"72\" y2=\"240\"/><line x1=\"96\" y1=\"0\" x2=\"96\" y2=\"240\"/><line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"240\"/><line x1=\"144\" y1=\"0\" x2=\"144\" y2=\"240\"/><line x1=\"168\" y1=\"0\" x2=\"168\" y2=\"240\"/><line x1=\"192\" y1=\"0\" x2=\"192\" y2=\"240\"/><line x1=\"216\" y1=\"0\" x2=\"216\" y2=\"240\"/>\n<line x1=\"0\" y1=\"24\" x2=\"240\" y2=\"24\"/><line x1=\"0\" y1=\"48\" x2=\"240\" y2=\"48\"/><line x1=\"0\" y1=\"72\" x2=\"240\" y2=\"72\"/><line x1=\"0\" y1=\"96\" x2=\"240\" y2=\"96\"/><line x1=\"0\" y1=\"120\" x2=\"240\" y2=\"120\"/><line x1=\"0\" y1=\"144\" x2=\"240\" y2=\"144\"/><line x1=\"0\" y1=\"168\" x2=\"240\" y2=\"168\"/><line x1=\"0\" y1=\"192\" x2=\"240\" y2=\"192\"/><line x1=\"0\" y1=\"216\" x2=\"240\" y2=\"216\"/>\n</g>\n</g>\n<text x=\"310\" y=\"70\" font-size=\"20\" fill=\"#1f2937\">100 quadretti = <tspan font-weight=\"bold\">100%</tspan> (l'intero)</text>\n<text x=\"310\" y=\"115\" font-size=\"20\" fill=\"#c2410c\">25 coloured squares</text>\n<text x=\"310\" y=\"150\" font-size=\"26\" fill=\"#c2410c\" font-weight=\"bold\">= 25/100 = 25%</text>\n<text x=\"310\" y=\"190\" font-size=\"20\" fill=\"#1f2937\">= 0.25 = 1/4</text>\n<text x=\"310\" y=\"235\" font-size=\"17\" fill=\"#475569\">a quarter of the grid!</text>\n</svg>",
   "caption": "In a grid of 100 squares, each square is 1%. Colouring 25 of them means colouring 25%."
  },
  {
   "type": "widget",
   "title": "Build the percentage on the squares",
   "widget": "areaGrid",
   "options": {
    "w": 5,
    "h": 4,
    "max": 10
   },
   "caption": "The 10 × 10 grid has 100 squares: the coloured area is the percentage. With 5 × 4 = 20 squares you have 20%. Try making 30%, 50%, 64%!"
  },
  {
   "type": "text",
   "title": "Calculating the percentage of a number",
   "html": "<p>Calculating a percentage is like calculating a <b>fraction of a number</b> with denominator 100:</p>\n<ol>\n<li><b>divide</b> the number by <b>100</b> (you find 1%);</li>\n<li><b>multiply</b> by the percentage.</li>\n</ol>\n<p>Example: 30% of 250 → 250 ÷ 100 = 2.5 → 2.5 × 30 = <b>75</b>.</p>\n<p>Or, the other way round: 250 × 30 ÷ 100 = 7500 ÷ 100 = <b>75</b>.</p>\n<p>\"Friendly\" <b>percentages</b> to remember: 50% = half (÷ 2), 25% = a quarter (÷ 4), 10% = a tenth (÷ 10), 20% = a fifth (÷ 5), 75% = three quarters.</p>"
  },
  {
   "type": "example",
   "title": "Practical example: the class and sport",
   "html": "<p>In class 5A there are <b>20 pupils</b>. <b>40%</b> go swimming. How many are they?</p>\n<p>20 ÷ 100 × 40 = <b>8 pupils</b>. Trick: 10% of 20 is 2, so 40% is 2 × 4 = 8.</p>\n<p>And the other way round: <b>5 pupils out of 20</b> play an instrument. What percentage is that? 5/20 = 25/100 = <b>25%</b> (I multiplied numerator and denominator by 5 to get to 100).</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: calculating percentages",
   "questions": [
    {
     "type": "num",
     "q": "How much is 50% of 84?",
     "answer": 42,
     "explain": "50% is half: 84 ÷ 2 = 42."
    },
    {
     "type": "num",
     "q": "How much is 10% of 350?",
     "answer": 35,
     "explain": "10% is a tenth: 350 ÷ 10 = 35."
    },
    {
     "type": "mc",
     "q": "25% corresponds to the fraction…",
     "options": [
      "1/2",
      "1/4",
      "1/25"
     ],
     "answer": 1,
     "explain": "25/100 = 1/4."
    },
    {
     "type": "num",
     "q": "3 pupils out of 10 wear glasses. What percentage is that?",
     "answer": 30,
     "unit": "%",
     "explain": "3/10 = 30/100 = 30%."
    }
   ]
  },
  {
   "type": "text",
   "title": "Discounts and increases",
   "html": "<p><b>Discount</b>: the price <b>goes down</b> by a percentage.</p>\n<ol>\n<li>calculate the discount: price × % ÷ 100;</li>\n<li>take the discount off the price: <b>discounted price = price − discount</b>.</li>\n</ol>\n<p>Shoes at <b>€60</b> with a <b>20%</b> discount: discount = 60 × 20 ÷ 100 = €12 → final price <b>60 − 12 = €48</b>.</p>\n<p><b>Increase</b>: the price <b>goes up</b> by a percentage. A <b>€40</b> subscription increased by <b>5%</b>: increase = 40 × 5 ÷ 100 = €2 → new price <b>€42</b>.</p>\n<p><b>Shortcut</b>: with a 20% discount you pay <b>80%</b> of the price: 60 × 80 ÷ 100 = €48. Same result!</p>"
  },
  {
   "type": "example",
   "title": "Practical example: the sales",
   "html": "<p>A bicycle costs <b>€180</b>. During the sales it is discounted by <b>30%</b>.</p>\n<ul>\n<li>Discount: 180 ÷ 100 × 30 = <b>€54</b>.</li>\n<li>Discounted price: 180 − 54 = <b>€126</b>.</li>\n<li>Check: 70% of 180 = 18 × 7 = €126 ✅.</li>\n</ul>\n<p>⚠️ <b>Beware of the trick!</b> If a price goes up by 10% and then goes down by 10%, it does <b>not</b> go back to the same: €100 → +10% = €110 → −10% = €99! Because the second 10% is calculated on 110, not on 100.</p>"
  },
  {
   "type": "text",
   "title": "Pie charts",
   "html": "<p>The <b>pie chart</b> is a circle divided into slices: <b>the whole circle is 100%</b> and each slice shows a percentage.</p>\n<p>The circle has <b>360°</b>, so:</p>\n<ul>\n<li>100% = 360°, 50% = 180° (half a circle), 25% = 90° (a right angle), 10% = 36°;</li>\n<li><b>1% = 3.6°</b>: to draw a slice multiply the percentage by 3.6.</li>\n</ul>\n<p>The sum of all the slices must always be <b>100%</b> (and 360°).</p>"
  },
  {
   "type": "svg",
   "title": "Class 5B's favourite fruit",
   "svg": "<svg viewBox=\"0 0 640 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"300\" fill=\"#fffbeb\"/>\n<path d=\"M160,150 L160,30 A120,120 0 0,1 280,150 Z\" fill=\"#ef4444\"/>\n<path d=\"M160,150 L280,150 A120,120 0 0,1 160,270 Z\" fill=\"#facc15\"/>\n<path d=\"M160,150 L160,270 A120,120 0 0,1 62.9,220.5 Z\" fill=\"#22c55e\"/>\n<path d=\"M160,150 L62.9,220.5 A120,120 0 0,1 160,30 Z\" fill=\"#f97316\"/>\n<g font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1f2937\">\n<text x=\"210\" y=\"105\">25%</text><text x=\"210\" y=\"205\">25%</text><text x=\"125\" y=\"228\">15%</text><text x=\"105\" y=\"125\">35%</text>\n</g>\n<g font-size=\"18\" fill=\"#1f2937\">\n<rect x=\"340\" y=\"50\" width=\"24\" height=\"24\" fill=\"#f97316\"/><text x=\"374\" y=\"69\">🍊 orange 35% (7 pupils)</text>\n<rect x=\"340\" y=\"95\" width=\"24\" height=\"24\" fill=\"#ef4444\"/><text x=\"374\" y=\"114\">🍎 apple 25% (5 pupils)</text>\n<rect x=\"340\" y=\"140\" width=\"24\" height=\"24\" fill=\"#facc15\"/><text x=\"374\" y=\"159\">🍌 banana 25% (5 pupils)</text>\n<rect x=\"340\" y=\"185\" width=\"24\" height=\"24\" fill=\"#22c55e\"/><text x=\"374\" y=\"204\">🍐 pear 15% (3 pupils)</text>\n<text x=\"340\" y=\"250\" font-weight=\"bold\">Total: 20 pupils = 100%</text>\n</g>\n</svg>",
   "caption": "Each pupil is worth 100 ÷ 20 = 5%. The apple (25%) takes up a quarter of the circle: 90°."
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Where the % symbol comes from",
   "html": "<p>The <b>%</b> symbol was born in <b>Italy</b>! In the manuscripts of 15th-century merchants <i>\"per cento\"</i> was written in short as <b>\"p cento\"</b> or <b>\"p c°\"</b>. By writing it quickly, the \"c\" and the little circle became a kind of fraction with two little circles: <b>%</b>. There is also the <b>per mille ‰</b> (with three little circles), used for example for the salinity of the sea (about 35‰).</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The first pie chart",
   "html": "<p>The first known pie chart was drawn in <b>1801</b> by the Scottish engineer <b>William Playfair</b>, who also invented the bar chart and the line chart. Later the nurse <b>Florence Nightingale</b> used a similar chart, a \"rose\" diagram, to show that during the Crimean War (1853–1856) more soldiers died of disease than of wounds: thanks to her charts military hospitals improved their hygiene!</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li><b>% = out of a hundred</b>: 35% = 35/100 = 0.35.</li>\n<li>Percentage of a number: <b>number × % ÷ 100</b>.</li>\n<li><b>Discount</b>: price − discount (or you pay 100% − discount%). <b>Increase</b>: price + increase.</li>\n<li>Pie chart: <b>100% = 360°</b>, 1% = 3.6°.</li>\n<li>50% = half, 25% = a quarter, 10% = a tenth, 20% = a fifth.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand percentages",
   "intro": "Percentages can be understood with the pie, with the 10% method used in English-speaking countries, with the phone battery or with the table of proportions.",
   "tabs": [
    {
     "label": "🥧 Pie and fractions",
     "html": "<p>Percentages are <b>fractions in disguise</b>! Move the sliders: with 1/4 the pie is at <b>25%</b>, with 1/2 at <b>50%</b>, with 3/4 at <b>75%</b>, with 1/5 at <b>20%</b>, with 1/10 at <b>10%</b>.</p>\n<p>To go from a fraction to a percentage, find the equivalent fraction with denominator 100: 3/5 = 60/100 = <b>60%</b>.</p>",
     "widget": "fractionPie",
     "options": {
      "n": 1,
      "d": 4
     }
    },
    {
     "label": "🔟 The 10% method",
     "html": "<p>In England and in many other countries children are taught to calculate everything starting from <b>10%</b>, which you find at once by dividing by 10:</p>\n<ul>\n<li>10% of 80 = <b>8</b></li>\n<li>20% = 8 × 2 = <b>16</b>;  30% = 8 × 3 = <b>24</b></li>\n<li>5% = half of 10% = <b>4</b></li>\n<li>15% = 10% + 5% = 8 + 4 = <b>12</b></li>\n<li>1% = 10% ÷ 10 = <b>0.8</b></li>\n</ul>\n<p>So 35% of 80 = 30% + 5% = 24 + 4 = <b>28</b>. All in your head, without paper! 🧠</p>"
    },
    {
     "label": "🔋 The battery",
     "html": "<p>The <b>phone battery</b> is a perfect \"percentage meter\": 100% is full, 0% is empty, 50% is half.</p>\n<p>If the battery lasts <b>20 hours</b> and you are at <b>25%</b>, you have 20 × 25 ÷ 100 = <b>5 hours</b> left.</p>",
     "svg": "<svg viewBox=\"0 0 600 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"200\" fill=\"#f1f5f9\"/>\n<g stroke=\"#1f2937\" stroke-width=\"4\">\n<rect x=\"30\" y=\"60\" width=\"140\" height=\"70\" rx=\"10\" fill=\"#ffffff\"/><rect x=\"170\" y=\"80\" width=\"10\" height=\"30\" fill=\"#1f2937\"/>\n<rect x=\"220\" y=\"60\" width=\"140\" height=\"70\" rx=\"10\" fill=\"#ffffff\"/><rect x=\"360\" y=\"80\" width=\"10\" height=\"30\" fill=\"#1f2937\"/>\n<rect x=\"410\" y=\"60\" width=\"140\" height=\"70\" rx=\"10\" fill=\"#ffffff\"/><rect x=\"550\" y=\"80\" width=\"10\" height=\"30\" fill=\"#1f2937\"/>\n</g>\n<rect x=\"36\" y=\"66\" width=\"128\" height=\"58\" rx=\"6\" fill=\"#22c55e\"/>\n<rect x=\"226\" y=\"66\" width=\"64\" height=\"58\" rx=\"6\" fill=\"#facc15\"/>\n<rect x=\"416\" y=\"66\" width=\"32\" height=\"58\" rx=\"6\" fill=\"#ef4444\"/>\n<g font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1f2937\">\n<text x=\"100\" y=\"165\">100%</text><text x=\"290\" y=\"165\">50%</text><text x=\"480\" y=\"165\">25%</text>\n</g>\n<g font-size=\"15\" text-anchor=\"middle\" fill=\"#475569\">\n<text x=\"100\" y=\"190\">full</text><text x=\"290\" y=\"190\">half</text><text x=\"480\" y=\"190\">a quarter</text>\n</g>\n</svg>"
    },
    {
     "label": "📊 The table (proportion)",
     "html": "<p>You can use a <b>two-row table</b>: the quantity on top, the percentage below. What you do to one column you do to the other too.</p>\n<table>\n<tr><th>Quantity</th><td>240</td><td>24</td><td>72</td></tr>\n<tr><th>Percentage</th><td>100%</td><td>10%</td><td>30%</td></tr>\n</table>\n<p>From 100% to 10% I divide by 10 (240 ÷ 10 = 24 too); from 10% to 30% I multiply by 3 (24 × 3 = 72). So <b>30% of 240 is 72</b>. In middle school this will become a <b>proportion</b>: 240 : 100 = x : 30.</p>"
    },
    {
     "label": "🇸🇬 The bar model (Singapore)",
     "html": "<p>In <b>Singapore</b> percentage problems are solved by drawing a <b>bar</b>: the whole bar is <b>100%</b>, and it is divided into equal parts.</p><p><b>Problem 1</b>: a bike costs <b>€240</b> and is discounted by <b>25%</b>. How much do you pay?</p><ol><li>Draw a bar = 100% = €240.</li><li>25% is a quarter: divide the bar into <b>4 parts</b>. Each part is worth 240 ÷ 4 = <b>€60</b>.</li><li>The discount is 1 part (€60); you pay the other 3 parts: 3 × 60 = <b>€180</b>.</li></ol><p><b>Problem 2</b> (the other way round!): <b>30%</b> of the children in a class are <b>6</b>. How many children are there in all?</p><ol><li>Divide the bar into <b>10 parts</b> of 10%.</li><li>30% = 3 parts = 6 children → 1 part = 6 ÷ 3 = 2.</li><li>The whole bar = 10 parts = <b>20 children</b>.</li></ol><p>The drawing shows you at once whether you have to multiply or divide.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><text x=\"20\" y=\"30\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Bike: €240 — discount 25%</text><rect x=\"40\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"100\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = €60</text><rect x=\"160\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"220\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = €60</text><rect x=\"280\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"340\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = €60</text><rect x=\"400\" y=\"45\" width=\"120\" height=\"44\" fill=\"#fecaca\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"460\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = €60</text><text x=\"40\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">100% = €240  →  1 part = 240 ÷ 4 = €60</text><text x=\"40\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">You pay 3 parts = €180</text><text x=\"400\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">discount</text><line x1=\"20\" y1=\"152\" x2=\"580\" y2=\"152\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><text x=\"20\" y=\"180\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">30% of the class = 6 children. How many in all?</text><rect x=\"40\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"65\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"90\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"115\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"140\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"165\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"190\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"215\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"240\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"265\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"290\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"315\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"340\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"365\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"390\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"415\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"440\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"465\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"490\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"515\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><text x=\"40\" y=\"258\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">3 parts of 10% = 6  →  1 part = 2</text><text x=\"40\" y=\"280\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">10 parts = 100% = 20 children</text></svg>"
    },
    {
     "label": "🇬🇧 The English \"multiplier\"",
     "html": "<p>In schools in the <b>United Kingdom</b> they learn a very quick trick for discounts and increases: the <b>multiplier</b>. The idea: instead of calculating the discount and then taking it off, you calculate <b>straight away how much you pay</b>.</p><ul><li>Discount of <b>20%</b> → you pay <b>80%</b> → 80/100 = <b>0.8</b> → multiply by 0.8.<br>€45 × 0.8 = <b>€36</b>.</li><li>Discount of <b>50%</b> → you pay 50% → × 0.5 (that is, half).</li><li>Increase of <b>10%</b> → you pay <b>110%</b> → × <b>1.1</b>.<br>€50 × 1.1 = <b>€55</b>.</li></ul><p><b>How to find the multiplier</b>: start from 100%, take away the discount (or add the increase) and divide by 100.</p><p>⚠️ <b>Trap</b>: a 10% increase followed by a 10% discount does <b>not</b> bring you back to the starting price! €100 × 1.1 = €110; €110 × 0.9 = <b>€99</b>. Why? The second 10% is calculated on a bigger number.</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of percentages",
   "nodes": [
    {
     "id": "frazioni",
     "label": "Decimal fractions",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "Fractions with denominator 10, 100, 1000.",
     "why": "Percentages are a special case: fractions with denominator 100. That is why everything you know about fractions also applies to percentages."
    },
    {
     "id": "percentuale",
     "label": "Percentage",
     "x": 50,
     "y": 28,
     "color": "#2563eb",
     "html": "A fraction out of 100, written with %: 35% = 35/100.",
     "why": "From the Latin <i>per centum</i> = \"for every hundred\". The Romans already had a tax of 1/100 (<i>centesima rerum venalium</i>) on goods sold at auction, introduced by Augustus."
    },
    {
     "id": "simbolo",
     "label": "% symbol",
     "x": 15,
     "y": 28,
     "color": "#a855f7",
     "html": "The sign that means \"per cent\".",
     "why": "Born from the abbreviations of Italian merchants of the 15th century (\"p cento\" → \"p c°\" → %). Always using 100 as the denominator makes comparisons easy."
    },
    {
     "id": "calcolo",
     "label": "% of a number",
     "x": 22,
     "y": 55,
     "color": "#16a34a",
     "html": "Number × percentage ÷ 100.",
     "why": "It is the rule for the fraction of a number (divide by the denominator, multiply by the numerator) with denominator 100."
    },
    {
     "id": "decimale",
     "label": "Decimal form",
     "x": 50,
     "y": 55,
     "color": "#eab308",
     "html": "35% = 0.35; 5% = 0.05; 100% = 1.",
     "why": "Dividing by 100 moves the point two places to the left: that is why calculators turn percentages into decimal numbers."
    },
    {
     "id": "sconti",
     "label": "Discounts and increases",
     "x": 22,
     "y": 82,
     "color": "#dc2626",
     "html": "Price − discount; price + increase.",
     "why": "They were born with trade: merchants calculated interest, profits and losses \"per hundred\" in their account books already in the Middle Ages (Fibonacci talks about it in the <i>Liber Abaci</i>, 1202)."
    },
    {
     "id": "torta",
     "label": "Pie chart",
     "x": 78,
     "y": 55,
     "color": "#f97316",
     "html": "A circle divided into slices: 100% = 360°.",
     "why": "Invented by William Playfair in 1801. It works because the whole circle represents well the idea of \"everything\" (100%)."
    },
    {
     "id": "gradi",
     "label": "1% = 3.6°",
     "x": 78,
     "y": 82,
     "color": "#0ea5e9",
     "html": "To draw a slice: percentage × 3.6.",
     "why": "The circle has 360°, a legacy of the Babylonians who counted in base 60: 360 ÷ 100 = 3.6."
    },
    {
     "id": "statistica",
     "label": "Statistics",
     "x": 50,
     "y": 92,
     "color": "#14b8a6",
     "html": "Collecting data and comparing it with percentages.",
     "why": "Percentages let us compare groups of different sizes (5 out of 20 and 30 out of 120 are both 25%): that is why statistics offices and opinion polls always use them."
    }
   ],
   "edges": [
    [
     "frazioni",
     "percentuale",
     "special case"
    ],
    [
     "percentuale",
     "simbolo",
     "is written with"
    ],
    [
     "percentuale",
     "calcolo",
     "is calculated"
    ],
    [
     "percentuale",
     "decimale",
     "is equivalent to"
    ],
    [
     "calcolo",
     "sconti",
     "is used for"
    ],
    [
     "percentuale",
     "torta",
     "is represented with"
    ],
    [
     "torta",
     "gradi",
     "is drawn with"
    ],
    [
     "decimale",
     "statistica",
     "used in the"
    ],
    [
     "torta",
     "statistica",
     "used in the"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: discounts and charts",
   "questions": [
    {
     "type": "num",
     "q": "A game costs €50 and is discounted by 10%. How much do you pay?",
     "answer": 45,
     "unit": "€",
     "explain": "Discount: €5; 50 − 5 = €45."
    },
    {
     "type": "num",
     "q": "In a pie chart, how many degrees does the 50% slice measure?",
     "answer": 180,
     "unit": "°",
     "explain": "50% of 360° = 180°."
    },
    {
     "type": "tf",
     "q": "In a pie chart the sum of the percentages must be 100%.",
     "answer": true,
     "explain": "The whole circle represents the total, that is 100%."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Percentage",
   "d": "A fraction with denominator 100, shown with the symbol %."
  },
  {
   "t": "Discount",
   "d": "A decrease in a price, often expressed as a percentage."
  },
  {
   "t": "Discounted price",
   "d": "The initial price minus the discount."
  },
  {
   "t": "Increase",
   "d": "A rise in a price or a quantity, often expressed as a percentage."
  },
  {
   "t": "Pie chart",
   "d": "A circle divided into slices proportional to the percentages; the whole circle is 100%."
  },
  {
   "t": "Per mille (‰)",
   "d": "A fraction with denominator 1000."
  },
  {
   "t": "Total",
   "d": "The reference whole, which corresponds to 100%."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "What does 40% mean?",
    "options": [
     "40 out of 10",
     "40 out of 100",
     "40 out of 1000"
    ],
    "answer": 1,
    "explain": "Per cent = out of a hundred: 40/100."
   },
   {
    "type": "num",
    "q": "How much is 25% of 120?",
    "answer": 30,
    "explain": "25% is a quarter: 120 ÷ 4 = 30."
   },
   {
    "type": "num",
    "q": "How much is 15% of 200?",
    "answer": 30,
    "explain": "200 × 15 ÷ 100 = 30."
   },
   {
    "type": "mc",
    "q": "Which percentage is equivalent to 3/4?",
    "options": [
     "34%",
     "75%",
     "43%"
    ],
    "answer": 1,
    "explain": "3/4 = 75/100 = 75%."
   },
   {
    "type": "num",
    "q": "A T-shirt costs €30 with a 20% discount. How much do you pay?",
    "answer": 24,
    "unit": "€",
    "explain": "Discount: 30 × 20 ÷ 100 = €6; 30 − 6 = €24."
   },
   {
    "type": "num",
    "q": "The subscription costs €200 and goes up by 5%. What is the new price?",
    "answer": 210,
    "unit": "€",
    "explain": "Increase: €10; 200 + 10 = €210."
   },
   {
    "type": "num",
    "q": "In a class of 25 pupils, 5 have a dog. What percentage is that?",
    "answer": 20,
    "unit": "%",
    "explain": "5/25 = 20/100 = 20%."
   },
   {
    "type": "num",
    "q": "In a pie chart, how many degrees correspond to 25%?",
    "answer": 90,
    "unit": "°",
    "explain": "360 × 25 ÷ 100 = 90°."
   },
   {
    "type": "tf",
    "q": "0.07 and 7% indicate the same quantity.",
    "answer": true,
    "explain": "7% = 7/100 = 0.07."
   },
   {
    "type": "tf",
    "q": "If a price goes up by 10% and then falls by 10%, it goes back to the initial price.",
    "answer": false,
    "explain": "100 → 110 → 99: the second 10% is calculated on a bigger figure."
   },
   {
    "type": "order",
    "q": "Put in order from the smallest to the biggest quantity.",
    "items": [
     "5% of 100",
     "10% of 100",
     "1/4 of 100",
     "50% of 100"
    ],
    "explain": "5 < 10 < 25 < 50."
   },
   {
    "type": "mc",
    "q": "Where was the % symbol born?",
    "options": [
     "in the manuscripts of Italian merchants",
     "in the Egyptian pyramids",
     "in American computers"
    ],
    "answer": 0,
    "explain": "From the abbreviation of «per cento» in Italian commercial manuscripts of the 15th century."
   }
  ],
  "gen": [
   [
    "percent",
    3
   ]
  ]
 }
});
