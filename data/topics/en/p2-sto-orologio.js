TOPIC('en', {
 "id": "p2-sto-orologio",
 "title": "The clock",
 "intro": "What time does school start? How long until break time? ⏰ To find out we use a <b>clock</b>. Let's learn to read <b>hours</b> and <b>minutes</b> and discover how people learned to measure time.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "What a clock looks like",
   "html": "<p>A clock with hands has:</p>\n<ul>\n<li>🔢 the <b>numbers from 1 to 12</b> in a circle;</li>\n<li>⬛ the <b>short hand</b>: it shows the <b>hours</b>. It's slow: it goes round once in 12 hours;</li>\n<li>➖ the <b>long hand</b>: it shows the <b>minutes</b>. It goes all the way round in <b>1 hour</b> (60 minutes);</li>\n<li>🔴 sometimes there's also a thin <b>second hand</b>, which goes round once in 1 minute.</li>\n</ul>\n<p>The hands always turn the same way: <b>clockwise</b> ↻.</p>"
  },
  {
   "type": "svg",
   "title": "It's 3 o'clock",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/>\n<circle cx=\"170\" cy=\"150\" r=\"125\" fill=\"#ffffff\" stroke=\"#c2410c\" stroke-width=\"8\"/>\n<g font-size=\"24\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">\n<text x=\"170\" y=\"52\">12</text><text x=\"222\" y=\"66\">1</text><text x=\"258\" y=\"102\">2</text><text x=\"272\" y=\"158\">3</text><text x=\"258\" y=\"212\">4</text><text x=\"222\" y=\"248\">5</text>\n<text x=\"170\" y=\"262\">6</text><text x=\"118\" y=\"248\">7</text><text x=\"82\" y=\"212\">8</text><text x=\"68\" y=\"158\">9</text><text x=\"82\" y=\"102\">10</text><text x=\"118\" y=\"66\">11</text>\n</g>\n<line x1=\"170\" y1=\"150\" x2=\"170\" y2=\"60\" stroke=\"#2563eb\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n<line x1=\"170\" y1=\"150\" x2=\"235\" y2=\"150\" stroke=\"#dc2626\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n<circle cx=\"170\" cy=\"150\" r=\"9\" fill=\"#1e293b\"/>\n<text x=\"330\" y=\"80\" font-size=\"22\" fill=\"#dc2626\" font-weight=\"bold\">short hand → 3</text>\n<text x=\"330\" y=\"110\" font-size=\"18\" fill=\"#7f1d1d\">(the hours)</text>\n<text x=\"330\" y=\"160\" font-size=\"22\" fill=\"#2563eb\" font-weight=\"bold\">long hand → 12</text>\n<text x=\"330\" y=\"190\" font-size=\"18\" fill=\"#1e3a8a\">(the minutes: \"o'clock\")</text>\n<text x=\"330\" y=\"250\" font-size=\"26\" fill=\"#0f172a\" font-weight=\"bold\">It's 3:00</text>\n</svg>",
   "caption": "When the long hand is on 12, it's \"o'clock\". The short hand tells you which hour."
  },
  {
   "type": "text",
   "title": "Minutes: count in 5s",
   "html": "<p>Between one number and the next there are <b>5 minutes</b> (5 small marks).</p>\n<ul>\n<li>Long hand on <b>1</b> → 5 minutes; on <b>2</b> → 10; on <b>3</b> → 15… on <b>6</b> → 30… up to <b>12</b> → 60, that is a whole hour!</li>\n</ul>\n<p>To read the minutes just count in jumps of 5: it's the <b>5 times table</b>! 🖐️</p>"
  },
  {
   "type": "widget",
   "title": "Jump 5 minutes at a time",
   "widget": "numberLine",
   "options": {
    "min": 0,
    "max": 60,
    "step": 5,
    "marks": [
     15,
     30,
     45,
     60
    ]
   },
   "caption": "Each jump is one number on the clock. 3 jumps = 15 minutes (a quarter of an hour), 6 jumps = 30 minutes (half an hour), 12 jumps = 60 minutes (an hour)."
  },
  {
   "type": "remember",
   "title": "Clock words",
   "html": "<table>\n<tr><th>Long hand on…</th><th>We say</th><th>Example</th></tr>\n<tr><td><b>12</b></td><td>\"o'clock\"</td><td>8 o'clock (8:00)</td></tr>\n<tr><td><b>3</b></td><td>\"quarter past\" (15 min)</td><td>quarter past 8 (8:15)</td></tr>\n<tr><td><b>6</b></td><td>\"half past\" (30 min)</td><td>half past 8 (8:30)</td></tr>\n<tr><td><b>9</b></td><td>\"quarter to\" (45 min)</td><td>quarter to 9 (8:45)</td></tr>\n</table>\n<p>1 hour = <b>60 minutes</b>. 1 minute = <b>60 seconds</b>. 1 day = <b>24 hours</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Quarter, half, three quarters",
   "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#f8fafc\"/>\n<circle cx=\"100\" cy=\"110\" r=\"75\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"5\"/>\n<path d=\"M100 110 L100 35 A75 75 0 0 1 175 110 Z\" fill=\"#fde047\"/>\n<circle cx=\"300\" cy=\"110\" r=\"75\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"5\"/>\n<path d=\"M300 110 L300 35 A75 75 0 0 1 300 185 Z\" fill=\"#86efac\"/>\n<circle cx=\"500\" cy=\"110\" r=\"75\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"5\"/>\n<path d=\"M500 110 L500 35 A75 75 0 1 1 425 110 Z\" fill=\"#93c5fd\"/>\n<line x1=\"100\" y1=\"110\" x2=\"160\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n<line x1=\"300\" y1=\"110\" x2=\"300\" y2=\"172\" stroke=\"#2563eb\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n<line x1=\"500\" y1=\"110\" x2=\"440\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n<g fill=\"#1e293b\"><circle cx=\"100\" cy=\"110\" r=\"6\"/><circle cx=\"300\" cy=\"110\" r=\"6\"/><circle cx=\"500\" cy=\"110\" r=\"6\"/></g>\n<text x=\"100\" y=\"215\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#854d0e\">quarter past = 15 min</text>\n<text x=\"300\" y=\"215\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#166534\">half past = 30 min</text>\n<text x=\"500\" y=\"215\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1e40af\">quarter to = 45 min</text>\n</svg>",
   "caption": "Like a pizza 🍕: a quarter turn of the long hand is 15 minutes, half a turn 30, three quarters 45."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: reading the clock",
   "questions": [
    {
     "type": "mc",
     "q": "Which hand shows the hours?",
     "options": [
      "The short hand",
      "The long hand",
      "Neither"
     ],
     "answer": 0,
     "explain": "The short hand shows the hours, the long one the minutes."
    },
    {
     "type": "num",
     "q": "The long hand is on 4. How many minutes is that?",
     "answer": 20,
     "unit": "min",
     "explain": "4 jumps of 5: 5, 10, 15, 20."
    },
    {
     "type": "mc",
     "q": "The short hand is on 7, the long hand on 6. What time is it?",
     "options": [
      "7 minutes past 6",
      "Half past 7",
      "7 o'clock"
     ],
     "answer": 1,
     "explain": "Long hand on 6 = 30 minutes, that is \"half past\": it's half past 7 (7:30)."
    }
   ]
  },
  {
   "type": "text",
   "title": "Digital clocks and the 24-hour clock",
   "html": "<p>A <b>digital</b> clock 📱 writes the time in numbers: first the <b>hours</b>, then a colon, then the <b>minutes</b>. <b>08:30</b> = half past 8.</p>\n<p>A day has <b>24 hours</b>, but a clock with hands only shows 12: the short hand goes round <b>twice</b> a day!</p>\n<ul>\n<li>🌅 Morning hours: from 0 to 12.</li>\n<li>🌇 Afternoon and evening hours: from 13 to 24. To find them, add 12: <b>3 in the afternoon</b> = 3 + 12 = <b>15:00</b>.</li>\n</ul>\n<p><b>12:00</b> is <b>midday</b> (noon); <b>24:00</b> (or 00:00) is <b>midnight</b>.</p>"
  },
  {
   "type": "example",
   "title": "Example: my day ⏰",
   "html": "<table>\n<tr><td>🛏️ I wake up</td><td>7:00</td><td>7 o'clock</td></tr>\n<tr><td>🏫 I go into school</td><td>8:15</td><td>quarter past 8</td></tr>\n<tr><td>🍎 Break time</td><td>10:30</td><td>half past 10</td></tr>\n<tr><td>🍝 Lunch</td><td>12:45</td><td>quarter to 1</td></tr>\n<tr><td>⚽ Training</td><td>17:00</td><td>5 in the afternoon</td></tr>\n<tr><td>🌙 Bedtime</td><td>21:00</td><td>9 in the evening</td></tr>\n</table>\n<p>From 7:00 to 8:15 <b>1 hour and 15 minutes</b> go by: time to get dressed, have breakfast and go to school.</p>"
  },
  {
   "type": "example",
   "title": "Example: how long is the cartoon? 📺",
   "html": "<p>The cartoon starts at <b>16:00</b> and ends at <b>16:30</b>.</p>\n<p>The long hand goes from 12 to 6: <b>half a turn</b> = <b>30 minutes</b>. The cartoon lasts half an hour!</p>"
  },
  {
   "type": "widget",
   "title": "Match the time written two ways",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "9 o'clock",
      "9:00"
     ],
     [
      "quarter past 4",
      "4:15"
     ],
     [
      "half past 6",
      "6:30"
     ],
     [
      "quarter to 11",
      "10:45"
     ],
     [
      "2 in the afternoon",
      "14:00"
     ],
     [
      "midnight",
      "00:00"
     ]
    ]
   },
   "caption": "Careful with \"quarter to\": quarter to 11 is still 10 and 45 minutes!"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Why 60 minutes and 24 hours?",
   "html": "<p>The idea of dividing the day into <b>24 hours</b> comes from the <b>ancient Egyptians</b>: 12 hours for the day and 12 for the night.</p>\n<p>The <b>60</b>, instead, comes from the <b>Babylonians</b>, who more than 4,000 years ago counted in groups of 60. 60 can be divided in lots of ways (by 2, 3, 4, 5, 6, 10, 12…): really handy for halves, thirds and quarters of an hour!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The most accurate clock",
   "html": "<p><b>Atomic clocks</b> measure time by counting the \"vibrations\" of atoms. The most modern ones are so accurate that they would be wrong by <b>less than 1 second</b> in billions of years!</p>\n<p>Your phone and the car's satnav use signals that come from atomic clocks on satellites. 🛰️</p>"
  },
  {
   "type": "3d",
   "title": "Time travel: the history of the clock",
   "scene": "spacetime",
   "caption": "The map is the base, height is time: the higher an event is, the more recent it is. Tap an event and follow the arrows from causes to effects.",
   "options": {
    "lat": [
     20,
     56
    ],
    "lon": [
     -10,
     120
    ],
    "years": [
     -2100,
     2000
    ],
    "places": [
     {
      "lat": 32.54,
      "lon": 44.42,
      "label": "Babylon"
     },
     {
      "lat": 25.7,
      "lon": 32.64,
      "label": "Thebes (Egypt)"
     },
     {
      "lat": 31.2,
      "lon": 29.92,
      "label": "Alexandria"
     },
     {
      "lat": 41.9,
      "lon": 12.5,
      "label": "Rome"
     },
     {
      "lat": 51.5,
      "lon": -0.12,
      "label": "London"
     },
     {
      "lat": 34.8,
      "lon": 114.3,
      "label": "Kaifeng (China)"
     }
    ],
    "events": [
     {
      "id": "babilonia",
      "lat": 32.54,
      "lon": 44.42,
      "year": -2000,
      "label": "The Babylonians count in 60s",
      "html": "In Mesopotamia scribes count in groups of <b>60</b> and divide the circle into 360 degrees. This is where the <b>60 minutes</b> of the hour and the <b>60 seconds</b> of the minute will come from."
     },
     {
      "id": "meridiana",
      "lat": 25.74,
      "lon": 32.6,
      "year": -1500,
      "label": "Shadow clocks in Egypt",
      "html": "The Egyptians use a stick and its <b>shadow</b> to tell the time: it's the ancestor of the <b>sundial</b>. They divide the day into <b>12 hours</b> of light and the night into 12 hours of darkness."
     },
     {
      "id": "clessidra",
      "lat": 25.72,
      "lon": 32.66,
      "year": -1400,
      "label": "The water clock",
      "html": "In the temple of Karnak a stone bowl with a tiny hole is used: the water runs out slowly and the level shows the hours even at <b>night</b>, when the sundial doesn't work.",
      "causes": [
       "meridiana"
      ]
     },
     {
      "id": "ctesibio",
      "lat": 31.2,
      "lon": 29.92,
      "year": -250,
      "label": "Ctesibius improves the water clock",
      "html": "In Alexandria the Greek inventor <b>Ctesibius</b> builds very accurate water clocks, with floats and pointers that move by themselves.",
      "causes": [
       "clessidra",
       "babilonia"
      ]
     },
     {
      "id": "roma",
      "lat": 41.9,
      "lon": 12.5,
      "year": -263,
      "label": "Rome's first sundial",
      "html": "According to ancient historians, the first sundial reached Rome from Sicily as war booty. But it was made for Catania: in Rome it showed the wrong time, and for years nobody noticed!",
      "causes": [
       "meridiana"
      ]
     },
     {
      "id": "susong",
      "lat": 34.8,
      "lon": 114.3,
      "year": 1088,
      "label": "Su Song's clock tower",
      "html": "In China the scientist <b>Su Song</b> builds a tower about 12 metres tall with a clock driven by a big <b>water wheel</b>, which sounds drums and bells and shows the stars.",
      "causes": [
       "clessidra"
      ]
     },
     {
      "id": "padova",
      "lat": 45.41,
      "lon": 11.88,
      "year": 1344,
      "label": "The Padua clock",
      "html": "<b>Mechanical</b> clocks, with gears and weights, appear in Europe at the end of the 1200s. In Padua <b>Jacopo Dondi</b> builds a large astronomical clock for the city tower: the bells ring the hours for everyone.",
      "causes": [
       "ctesibio"
      ]
     },
     {
      "id": "galileo",
      "lat": 43.72,
      "lon": 10.4,
      "year": 1583,
      "label": "Galileo and the chandelier",
      "html": "It's said that in <b>Pisa</b> Cathedral the young <b>Galileo Galilei</b> watched a swinging chandelier and timed the swings with his pulse: big or small, they always took the same time! It's the law of the <b>pendulum</b>.",
      "causes": [
       "padova"
      ]
     },
     {
      "id": "huygens",
      "lat": 52.08,
      "lon": 4.3,
      "year": 1656,
      "label": "The pendulum clock",
      "html": "The Dutchman <b>Christiaan Huygens</b> uses Galileo's idea and builds the first <b>pendulum</b> clock: it goes from being 15 minutes out each day to less than 1 minute!",
      "causes": [
       "galileo"
      ]
     },
     {
      "id": "greenwich",
      "lat": 51.48,
      "lon": 0,
      "year": 1884,
      "label": "Time zones and Greenwich",
      "html": "With trains and the telegraph, everyone needs the same time. In 1884 the countries of the world choose the <b>Greenwich</b> meridian (London) as the starting point and divide the world into <b>24 time zones</b>. In Italy a single national time arrives on 1 November 1893.",
      "causes": [
       "huygens"
      ]
     },
     {
      "id": "atomico",
      "lat": 51.42,
      "lon": -0.33,
      "year": 1955,
      "label": "The first atomic clock",
      "html": "In England <b>Louis Essen</b> builds the first accurate atomic clock, which measures time with the vibrations of caesium atoms. Since 1967 the <b>second</b> has been defined exactly this way.",
      "causes": [
       "greenwich",
       "babilonia"
      ]
     }
    ]
   }
  },
  {
   "type": "decision",
   "title": "The year 1880: you're the head of the Italian railways",
   "html": "<p>In the past every town set its clocks by the <b>Sun</b>: when the Sun was highest in the sky, it was midday. But the Sun reaches Venice (in the east) earlier and Turin (in the west) later!</p>\n<p>So, when it was midday in Venice, Turin still had about <b>20 minutes</b> to go. With horses nobody cared… but now there are <b>trains</b>, and the timetables are getting confusing.</p>",
   "question": "What do you decide?",
   "options": [
    {
     "label": "Every town keeps its own Sun time.",
     "outcome": "Every station would have a different timetable: travellers would miss their trains and two trains on the same track might not know where the other one was. Dangerous!"
    },
    {
     "label": "One single time for the whole country, the same at every station.",
     "outcome": "Clock midday won't match the Sun perfectly in every town any more, but all the clocks in Italy will show the same time. Train timetables become clear and safe."
    },
    {
     "label": "No timetables: trains leave when they're full.",
     "outcome": "Nobody would know when to leave home: people would wait for hours at the station, and goods and post would arrive late."
    }
   ],
   "answer": 1,
   "explain": "From 1866 the Italian railways already used Rome time for all trains. Then, in <b>1884</b>, the world was divided into <b>24 time zones</b> starting from Greenwich, and from <b>1 November 1893</b> the whole of Italy adopted a single time, <b>Central European Time</b>, which we still use today. It was the trains that made one time for everyone necessary!"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand the clock",
   "intro": "If the hands confuse you, try these other paths.",
   "tabs": [
    {
     "label": "🇺🇸 a.m. and p.m.",
     "html": "<p>In Italy we say \"15:00\". In the <b>United States</b> and in Britain people very often use the 12-hour clock with two Latin abbreviations:</p>\n<ul>\n<li><b>a.m.</b> (<i>ante meridiem</i> = \"before midday\"): 9 a.m. = 9 in the morning;</li>\n<li><b>p.m.</b> (<i>post meridiem</i> = \"after midday\"): 3 p.m. = 15:00.</li>\n</ul>\n<p>Match them up!</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "7 a.m.",
        "7:00 in the morning"
       ],
       [
        "7 p.m.",
        "19:00"
       ],
       [
        "12 p.m. (noon)",
        "midday"
       ],
       [
        "12 a.m. (midnight)",
        "midnight"
       ],
       [
        "4 p.m.",
        "16:00"
       ]
      ]
     }
    },
    {
     "label": "🍕 The pizza clock",
     "html": "<p>Imagine the clock as a <b>pizza</b> cut into <b>12 slices</b>. Each slice is worth <b>5 minutes</b>.</p>\n<ul>\n<li>3 slices = a <b>quarter</b> of the pizza = 15 minutes;</li>\n<li>6 slices = <b>half</b> the pizza = 30 minutes;</li>\n<li>9 slices = <b>three quarters</b> = 45 minutes;</li>\n<li>12 slices = the whole pizza = 60 minutes = <b>1 hour</b>.</li>\n</ul>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#fff7ed\"/>\n<circle cx=\"150\" cy=\"120\" r=\"100\" fill=\"#fbbf24\" stroke=\"#b45309\" stroke-width=\"8\"/>\n<path d=\"M150 120 L150 20 A100 100 0 0 1 250 120 Z\" fill=\"#ef4444\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<g stroke=\"#b45309\" stroke-width=\"2\">\n<line x1=\"150\" y1=\"120\" x2=\"150\" y2=\"20\"/><line x1=\"150\" y1=\"120\" x2=\"200\" y2=\"33\"/><line x1=\"150\" y1=\"120\" x2=\"237\" y2=\"70\"/><line x1=\"150\" y1=\"120\" x2=\"250\" y2=\"120\"/>\n<line x1=\"150\" y1=\"120\" x2=\"237\" y2=\"170\"/><line x1=\"150\" y1=\"120\" x2=\"200\" y2=\"207\"/><line x1=\"150\" y1=\"120\" x2=\"150\" y2=\"220\"/><line x1=\"150\" y1=\"120\" x2=\"100\" y2=\"207\"/>\n<line x1=\"150\" y1=\"120\" x2=\"63\" y2=\"170\"/><line x1=\"150\" y1=\"120\" x2=\"50\" y2=\"120\"/><line x1=\"150\" y1=\"120\" x2=\"63\" y2=\"70\"/><line x1=\"150\" y1=\"120\" x2=\"100\" y2=\"33\"/>\n</g>\n<text x=\"300\" y=\"80\" font-size=\"22\" fill=\"#991b1b\" font-weight=\"bold\">3 red slices</text>\n<text x=\"300\" y=\"115\" font-size=\"22\" fill=\"#991b1b\" font-weight=\"bold\">= 3 × 5 = 15 minutes</text>\n<text x=\"300\" y=\"160\" font-size=\"22\" fill=\"#78350f\" font-weight=\"bold\">12 slices = 60 minutes</text>\n<text x=\"300\" y=\"195\" font-size=\"22\" fill=\"#78350f\" font-weight=\"bold\">= 1 hour</text>\n</svg>"
    },
    {
     "label": "🌍 What time is it around the world?",
     "html": "<p>The Sun doesn't light up the whole Earth at once: when it's day here, it's night on the other side! That's why each part of the world has its own time (its <b>time zone</b>).</p>\n<p>When it's <b>midday</b> in Italy (in winter): in London it's 11, in New York 6 in the morning, in Moscow 14:00, in Beijing 19:00 and in Tokyo 20:00. Spin the globe!</p>",
     "scene": "globe",
     "options": {
      "points": [
       {
        "lat": 41.9,
        "lon": 12.5,
        "label": "Rome 12:00",
        "color": "#16a34a"
       },
       {
        "lat": 51.5,
        "lon": -0.12,
        "label": "London 11:00",
        "color": "#2563eb"
       },
       {
        "lat": 40.7,
        "lon": -74,
        "label": "New York 6:00",
        "color": "#7c3aed"
       },
       {
        "lat": 55.75,
        "lon": 37.6,
        "label": "Moscow 14:00",
        "color": "#f97316"
       },
       {
        "lat": 39.9,
        "lon": 116.4,
        "label": "Beijing 19:00",
        "color": "#ef4444"
       },
       {
        "lat": 35.7,
        "lon": 139.7,
        "label": "Tokyo 20:00",
        "color": "#db2777"
       }
      ]
     }
    },
    {
     "label": "🕰️ Timeline of clocks",
     "html": "<p>From ancient shadow sticks to atomic clocks: scroll along the timeline.</p>",
     "widget": "timeline",
     "options": {
      "unit": "years",
      "events": [
       {
        "year": -1500,
        "label": "Egyptian shadow clock",
        "icon": "☀️"
       },
       {
        "year": -1400,
        "label": "Water clock",
        "icon": "💧"
       },
       {
        "year": 1344,
        "label": "Padua tower clock",
        "icon": "🏰"
       },
       {
        "year": 1656,
        "label": "Huygens' pendulum clock",
        "icon": "🕰️"
       },
       {
        "year": 1884,
        "label": "24 time zones",
        "icon": "🌍"
       },
       {
        "year": 1955,
        "label": "Atomic clock",
        "icon": "⚛️"
       }
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Clock map: tap the nodes and find out why",
   "nodes": [
    {
     "id": "sole",
     "label": "The Sun",
     "x": 50,
     "y": 6,
     "color": "#eab308",
     "html": "The first \"clock\" in history.",
     "why": "The Earth spins round once in about 24 hours: that's why we see the Sun rise, climb and set. The first people measured time by watching light and shadows."
    },
    {
     "id": "giorno",
     "label": "Day = 24 hours",
     "x": 20,
     "y": 28,
     "color": "#f97316",
     "html": "One complete spin of the Earth.",
     "why": "The <b>ancient Egyptians</b> divided the day into 12 hours of light and the night into 12 hours of darkness: 12 + 12 = 24. The 12 perhaps came from counting finger joints with the thumb (4 fingers × 3 joints = 12)."
    },
    {
     "id": "sessanta",
     "label": "60 minutes, 60 seconds",
     "x": 80,
     "y": 28,
     "color": "#a855f7",
     "html": "An hour has 60 minutes, a minute has 60 seconds.",
     "why": "It comes from the <b>Babylonians</b>, who counted in groups of 60. 60 can be divided by 2, 3, 4, 5, 6, 10, 12, 15, 20 and 30: perfect for half hours and quarter hours."
    },
    {
     "id": "lancette",
     "label": "The hands",
     "x": 50,
     "y": 45,
     "color": "#2563eb",
     "html": "Short = hours, long = minutes, thin = seconds.",
     "why": "Clock hands turn \"clockwise\" because they copy the shadow of a <b>sundial</b>: in the northern part of the world, where clocks were born, the shadow turns exactly that way."
    },
    {
     "id": "meccanico",
     "label": "Mechanical clocks",
     "x": 20,
     "y": 65,
     "color": "#64748b",
     "html": "Gears, weights and springs that turn the hands.",
     "why": "They appeared in Europe towards the end of the 1200s on the towers of towns and monasteries: monks had to pray at exact times, even at night. The pendulum (Galileo, Huygens) made them much more accurate."
    },
    {
     "id": "digitale",
     "label": "Digital clock",
     "x": 80,
     "y": 65,
     "color": "#16a34a",
     "html": "It shows the time in digits: 14:30.",
     "why": "It uses a tiny <b>quartz</b> crystal that vibrates more than 32,000 times a second: a chip counts the vibrations. The first quartz wristwatch came out in 1969."
    },
    {
     "id": "fusi",
     "label": "Time zones",
     "x": 35,
     "y": 88,
     "color": "#ef4444",
     "html": "The world divided into 24 zones, each with its own time.",
     "why": "When trains made travel fast, every town having its own Sun time caused confusion. In <b>1884</b> Greenwich was chosen as the starting point."
    },
    {
     "id": "atomico",
     "label": "Atomic clock",
     "x": 70,
     "y": 88,
     "color": "#0ea5e9",
     "html": "The most accurate clock: it counts the vibrations of atoms.",
     "why": "Since 1967 the second has been defined using <b>caesium</b> atoms. Without atomic clocks your phone's GPS would get your position wrong by kilometres."
    }
   ],
   "edges": [
    [
     "sole",
     "giorno",
     "gives the"
    ],
    [
     "giorno",
     "sessanta",
     "divided into hours of"
    ],
    [
     "sole",
     "lancette",
     "the shadow inspires the"
    ],
    [
     "sessanta",
     "lancette",
     "the numbers on the dial"
    ],
    [
     "lancette",
     "meccanico",
     "driven by"
    ],
    [
     "meccanico",
     "digitale",
     "then quartz:"
    ],
    [
     "giorno",
     "fusi",
     "different around the world:"
    ],
    [
     "digitale",
     "atomico",
     "even more accurate:"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: 24 hours and history",
   "questions": [
    {
     "type": "num",
     "q": "4 in the afternoon on the 24-hour clock is…",
     "answer": 16,
     "explain": "4 + 12 = 16: 16:00."
    },
    {
     "type": "mc",
     "q": "Who gave us the 60 minutes?",
     "options": [
      "The Babylonians",
      "The Romans",
      "The Americans"
     ],
     "answer": 0,
     "explain": "The Babylonians counted in groups of 60."
    },
    {
     "type": "tf",
     "q": "A sundial works at night too.",
     "answer": false,
     "explain": "A sundial uses the Sun's shadow: it doesn't work at night. That's why the water clock was invented."
    }
   ]
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li><b>Short hand</b> = hours; <b>long hand</b> = minutes.</li>\n<li>Between one number and the next there are <b>5 minutes</b>.</li>\n<li>15 min = <b>a quarter</b>; 30 min = <b>half an hour</b>; 45 min = <b>three quarters</b>.</li>\n<li>1 day = 24 hours; 1 hour = 60 minutes; 1 minute = 60 seconds.</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Hour",
   "d": "Each of the 24 parts of the day; it lasts 60 minutes."
  },
  {
   "t": "Minute",
   "d": "One sixtieth of an hour; it lasts 60 seconds."
  },
  {
   "t": "Hand",
   "d": "The little rod that turns on the clock face and shows hours, minutes or seconds."
  },
  {
   "t": "Clock face",
   "d": "The circle with the numbers from 1 to 12."
  },
  {
   "t": "Clockwise",
   "d": "The direction the hands turn ↻."
  },
  {
   "t": "Sundial",
   "d": "A clock that shows the time with the Sun's shadow."
  },
  {
   "t": "Hourglass / water clock",
   "d": "A tool that measures time with sand or water slowly running down."
  },
  {
   "t": "Time zone",
   "d": "An area of the Earth where everyone has the same time."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Which hand shows the minutes?",
    "options": [
     "The short one",
     "The long one",
     "The clock face"
    ],
    "answer": 1,
    "explain": "The long hand shows the minutes."
   },
   {
    "type": "num",
    "q": "How many minutes are there in an hour?",
    "answer": 60,
    "unit": "min",
    "explain": "1 hour = 60 minutes."
   },
   {
    "type": "num",
    "q": "How many hours are there in a day?",
    "answer": 24,
    "explain": "A day has 24 hours."
   },
   {
    "type": "num",
    "q": "The long hand is on 9. How many minutes does it show?",
    "answer": 45,
    "unit": "min",
    "explain": "9 × 5 = 45 minutes."
   },
   {
    "type": "mc",
    "q": "8:30 can be said as…",
    "options": [
     "quarter past 8",
     "half past 8",
     "quarter to 9"
    ],
    "answer": 1,
    "explain": "30 minutes = half an hour: half past 8."
   },
   {
    "type": "mc",
    "q": "Quarter to 9 is…",
    "options": [
     "9:15",
     "8:45",
     "9:45"
    ],
    "answer": 1,
    "explain": "There's a quarter of an hour to go until 9: it's 8:45."
   },
   {
    "type": "tf",
    "q": "The hour hand goes round twice a day.",
    "answer": true,
    "explain": "The clock face has 12 hours: in 24 hours the short hand goes round twice."
   },
   {
    "type": "text",
    "q": "15:00 is … o'clock in the afternoon. (write the number)",
    "answer": [
     "3",
     "three"
    ],
    "explain": "15 − 12 = 3: 3 in the afternoon."
   },
   {
    "type": "order",
    "q": "Put the times of the day in order.",
    "items": [
     "7:00 wake up",
     "8:15 school starts",
     "12:45 lunch",
     "17:00 sport",
     "21:00 bedtime"
    ],
    "explain": "From morning to evening."
   },
   {
    "type": "mc",
    "q": "A cartoon starts at 16:00 and ends at 16:30. How long does it last?",
    "options": [
     "A quarter of an hour",
     "Half an hour",
     "An hour"
    ],
    "answer": 1,
    "explain": "From 16:00 to 16:30, 30 minutes go by."
   },
   {
    "type": "mc",
    "q": "Which tool did ancient people use to tell the time with the Sun's shadow?",
    "options": [
     "The sundial",
     "The thermometer",
     "The scales"
    ],
    "answer": 0,
    "explain": "The sundial shows the time with a shadow."
   },
   {
    "type": "tf",
    "q": "Galileo discovered the law of the pendulum by watching a chandelier.",
    "answer": true,
    "explain": "So the story goes: in Pisa Cathedral, around 1583."
   }
  ]
 }
});
