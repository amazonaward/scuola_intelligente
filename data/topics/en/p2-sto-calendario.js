TOPIC('en', {
 "id": "p2-sto-calendario",
 "title": "The calendar",
 "intro": "When is your birthday? 🎂 How many days until the holidays? 🏖️ The <b>calendar</b> helps us count long stretches of time: <b>days</b>, <b>weeks</b>, <b>months</b>, <b>seasons</b> and <b>years</b>.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "The day and the week",
   "html": "<p>A <b>day</b> lasts <b>24 hours</b>: there's a light part (daytime) and a dark part (night). 🌞🌙</p>\n<p><b>7 days</b> make a <b>week</b>:</p>\n<p><b>Monday – Tuesday – Wednesday – Thursday – Friday – Saturday – Sunday</b></p>\n<p>Then it starts all over again, like a circle! 🔄</p>\n<ul>\n<li><b>Yesterday</b> = the day before today.</li>\n<li><b>Today</b> = the day we are in.</li>\n<li><b>Tomorrow</b> = the day after today.</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "The week wheel",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#faf5ff\"/>\n<circle cx=\"300\" cy=\"150\" r=\"115\" fill=\"none\" stroke=\"#c4b5fd\" stroke-width=\"10\"/>\n<g font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">\n<circle cx=\"300\" cy=\"35\" r=\"34\" fill=\"#fecaca\"/><text x=\"300\" y=\"41\" fill=\"#7f1d1d\">Monday</text>\n<circle cx=\"390\" cy=\"78\" r=\"34\" fill=\"#fed7aa\"/><text x=\"390\" y=\"84\" fill=\"#7c2d12\">Tuesday</text>\n<circle cx=\"412\" cy=\"175\" r=\"34\" fill=\"#fef08a\"/><text x=\"412\" y=\"181\" fill=\"#713f12\">Wednesday</text>\n<circle cx=\"350\" cy=\"255\" r=\"34\" fill=\"#bbf7d0\"/><text x=\"350\" y=\"261\" fill=\"#14532d\">Thursday</text>\n<circle cx=\"250\" cy=\"255\" r=\"34\" fill=\"#bae6fd\"/><text x=\"250\" y=\"261\" fill=\"#0c4a6e\">Friday</text>\n<circle cx=\"188\" cy=\"175\" r=\"34\" fill=\"#c7d2fe\"/><text x=\"188\" y=\"181\" fill=\"#312e81\">Saturday</text>\n<circle cx=\"210\" cy=\"78\" r=\"34\" fill=\"#f5d0fe\"/><text x=\"210\" y=\"84\" fill=\"#701a75\">Sunday</text>\n</g>\n<text x=\"300\" y=\"145\" font-size=\"24\" text-anchor=\"middle\" fill=\"#5b21b6\" font-weight=\"bold\">7 days</text>\n<text x=\"300\" y=\"172\" font-size=\"20\" text-anchor=\"middle\" fill=\"#5b21b6\">and then it starts again ↻</text>\n</svg>",
   "caption": "After Sunday comes Monday again: the week is a cycle."
  },
  {
   "type": "text",
   "title": "The 12 months of the year",
   "html": "<p>A <b>year</b> has <b>12 months</b>:</p>\n<p>January, February, March, April, May, June, July, August, September, October, November, December.</p>\n<p>The months aren't all the same length. A rhyme helps us:</p>\n<p>🎵 <i>\"Thirty days has September, April, June and November. All the rest have thirty-one, except for February alone, which has twenty-eight days clear, and twenty-nine in each leap year.\"</i></p>\n<p>The short month is <b>February</b>: it has 28 days, but every 4 years it has <b>29</b>!</p>"
  },
  {
   "type": "widget",
   "title": "How many days does the month have?",
   "widget": "classify",
   "options": {
    "groups": [
     "30 days",
     "31 days",
     "28 or 29 days"
    ],
    "items": [
     [
      "January",
      1
     ],
     [
      "February",
      2
     ],
     [
      "March",
      1
     ],
     [
      "April",
      0
     ],
     [
      "May",
      1
     ],
     [
      "June",
      0
     ],
     [
      "July",
      1
     ],
     [
      "August",
      1
     ],
     [
      "September",
      0
     ],
     [
      "October",
      1
     ],
     [
      "November",
      0
     ],
     [
      "December",
      1
     ]
    ]
   },
   "caption": "Say the rhyme or use the knuckle trick (you'll find it further down)!"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: days and months",
   "questions": [
    {
     "type": "num",
     "q": "How many days does a week have?",
     "answer": 7,
     "explain": "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday: 7 days."
    },
    {
     "type": "mc",
     "q": "If today is Wednesday, tomorrow is…",
     "options": [
      "Tuesday",
      "Thursday",
      "Friday"
     ],
     "answer": 1,
     "explain": "After Wednesday comes Thursday."
    },
    {
     "type": "mc",
     "q": "Which month has 28 or 29 days?",
     "options": [
      "February",
      "April",
      "August"
     ],
     "answer": 0,
     "explain": "February is the shortest month."
    }
   ]
  },
  {
   "type": "text",
   "title": "The four seasons",
   "html": "<p>The year is also divided into <b>4 seasons</b>, each about 3 months long:</p>\n<ul>\n<li>🌸 <b>Spring</b>: from about 21 March. The days get longer, the flowers bloom.</li>\n<li>☀️ <b>Summer</b>: from about 21 June. It's hot, the days are the longest.</li>\n<li>🍂 <b>Autumn</b>: from about 23 September. The leaves fall, grapes are harvested.</li>\n<li>❄️ <b>Winter</b>: from about 21 December. It's cold, the days are the shortest.</li>\n</ul>\n<p>We have seasons because the Earth goes round the Sun <b>tilted</b>: for half the year our hemisphere gets more direct rays (it's hot), for the other half more slanting ones (it's cold).</p>"
  },
  {
   "type": "svg",
   "title": "The year in a circle",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#ffffff\"/>\n<path d=\"M300 160 L300 20 A140 140 0 0 1 440 160 Z\" fill=\"#bbf7d0\" stroke=\"#ffffff\" stroke-width=\"4\"/>\n<path d=\"M300 160 L440 160 A140 140 0 0 1 300 300 Z\" fill=\"#fde68a\" stroke=\"#ffffff\" stroke-width=\"4\"/>\n<path d=\"M300 160 L300 300 A140 140 0 0 1 160 160 Z\" fill=\"#fdba74\" stroke=\"#ffffff\" stroke-width=\"4\"/>\n<path d=\"M300 160 L160 160 A140 140 0 0 1 300 20 Z\" fill=\"#bfdbfe\" stroke=\"#ffffff\" stroke-width=\"4\"/>\n<text x=\"360\" y=\"95\" font-size=\"34\" text-anchor=\"middle\">🌸</text>\n<text x=\"360\" y=\"245\" font-size=\"34\" text-anchor=\"middle\">☀️</text>\n<text x=\"240\" y=\"245\" font-size=\"34\" text-anchor=\"middle\">🍂</text>\n<text x=\"240\" y=\"95\" font-size=\"34\" text-anchor=\"middle\">❄️</text>\n<text x=\"470\" y=\"60\" font-size=\"18\" fill=\"#166534\" font-weight=\"bold\">spring</text>\n<text x=\"470\" y=\"82\" font-size=\"15\" fill=\"#166534\">Mar · Apr · May</text>\n<text x=\"470\" y=\"260\" font-size=\"18\" fill=\"#a16207\" font-weight=\"bold\">summer</text>\n<text x=\"470\" y=\"282\" font-size=\"15\" fill=\"#a16207\">Jun · Jul · Aug</text>\n<text x=\"20\" y=\"260\" font-size=\"18\" fill=\"#c2410c\" font-weight=\"bold\">autumn</text>\n<text x=\"20\" y=\"282\" font-size=\"15\" fill=\"#c2410c\">Sep · Oct · Nov</text>\n<text x=\"20\" y=\"60\" font-size=\"18\" fill=\"#1d4ed8\" font-weight=\"bold\">winter</text>\n<text x=\"20\" y=\"82\" font-size=\"15\" fill=\"#1d4ed8\">Dec · Jan · Feb</text>\n<circle cx=\"300\" cy=\"160\" r=\"30\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"167\" font-size=\"16\" text-anchor=\"middle\" fill=\"#334155\" font-weight=\"bold\">year</text>\n</svg>",
   "caption": "The 4 seasons repeat every year, always in the same order (the months shown are approximate: the seasons begin around the 21st of the month)."
  },
  {
   "type": "remember",
   "title": "Calendar numbers",
   "html": "<ul>\n<li>1 <b>week</b> = 7 days</li>\n<li>1 <b>month</b> = 28, 29, 30 or 31 days (about 4 weeks)</li>\n<li>1 <b>year</b> = 12 months = <b>365 days</b></li>\n<li>every 4 years there's a <b>leap year</b>, with <b>366 days</b> (29 February). The next ones: <b>2028</b>, 2032…</li>\n<li>1 <b>season</b> = about 3 months; 4 seasons in a year.</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Example: how long until the birthday? 🎂",
   "html": "<p>Today is <b>10 March</b>. Sofia's birthday is on <b>17 March</b>.</p>\n<p>I count on the calendar: 11, 12, 13, 14, 15, 16, 17 → <b>7 days</b> to go, that is <b>one week</b>!</p>\n<p>If today is Tuesday, the birthday will be on a Tuesday too (7 days later you're back on the same day of the week).</p>"
  },
  {
   "type": "example",
   "title": "Example: how to write the date ✏️",
   "html": "<p>In Italy (and in Britain) the date is written: <b>day – month – year</b>.</p>\n<ul>\n<li>In words: <b>Tuesday 3 November 2026</b>;</li>\n<li>in numbers: <b>3/11/2026</b> (11 because November is the <b>11th</b> month).</li>\n</ul>\n<p>(In the United States they put the month first: 11/3/2026.) In our exercise books we write the date at the top every morning: that way we know when we did each piece of work.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The names of the days come from the sky",
   "html": "<p>The Romans named the days after the <b>heavenly bodies</b> they saw moving in the sky. Italian still shows it clearly:</p>\n<ul>\n<li><b>lunedì</b> = day of the <b>Moon</b> 🌙; <b>martedì</b> = of <b>Mars</b>; <b>mercoledì</b> = of <b>Mercury</b>; <b>giovedì</b> = of <b>Jupiter</b>; <b>venerdì</b> = of <b>Venus</b>.</li>\n<li><b>sabato</b> comes from the Hebrew <i>shabbat</i>, the day of rest; <b>domenica</b> from the Latin <i>dies Dominica</i>, the \"Lord's day\".</li>\n</ul>\n<p>In English, <b>Monday</b> is the Moon's day, <b>Saturday</b> is Saturn's day and <b>Sunday</b> is the Sun's day, while Tuesday to Friday are named after old Norse and Germanic gods (Tiw, Woden, Thor, Frigg).</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? September was the seventh month",
   "html": "<p>Rome's first calendar began in <b>March</b>. That's why <b>Sept</b>ember was the 7th month, <b>Oct</b>ober the 8th, <b>Nov</b>ember the 9th and <b>Dec</b>ember the 10th (in Latin <i>septem</i> = 7, <i>octo</i> = 8, <i>novem</i> = 9, <i>decem</i> = 10)!</p>\n<p>Later the year began in January and the names stayed \"wrong\". <b>July</b> is named in honour of <b>Julius Caesar</b> and <b>August</b> in honour of the emperor <b>Augustus</b>.</p>"
  },
  {
   "type": "3d",
   "title": "Time travel: the history of the calendar",
   "scene": "spacetime",
   "caption": "The map is the base, height is time: the higher an event is, the more recent it is. Tap the events and follow the arrows from cause to effect.",
   "options": {
    "lat": [
     20,
     60
    ],
    "lon": [
     -10,
     50
    ],
    "years": [
     -3000,
     2000
    ],
    "places": [
     {
      "lat": 30.05,
      "lon": 31.23,
      "label": "Egypt"
     },
     {
      "lat": 32.54,
      "lon": 44.42,
      "label": "Babylon"
     },
     {
      "lat": 41.9,
      "lon": 12.5,
      "label": "Rome"
     },
     {
      "lat": 24.47,
      "lon": 39.61,
      "label": "Medina"
     },
     {
      "lat": 55.75,
      "lon": 37.6,
      "label": "Moscow"
     }
    ],
    "events": [
     {
      "id": "egizi",
      "lat": 29.9,
      "lon": 31.2,
      "year": -2800,
      "label": "The Egyptian 365-day year",
      "html": "The Egyptians notice that the Nile floods come back about every 365 days. They create a calendar of <b>12 months of 30 days</b> plus <b>5 feast days</b>: 365 in all!"
     },
     {
      "id": "settimana",
      "lat": 32.54,
      "lon": 44.42,
      "year": -600,
      "label": "The 7-day week",
      "html": "Among the Babylonians and the Hebrews the <b>7-day week</b> spreads. It may come from the Moon: each of its phases (new, waxing, full, waning) lasts about 7 days."
     },
     {
      "id": "romolo",
      "lat": 41.9,
      "lon": 12.5,
      "year": -753,
      "label": "Romulus' calendar",
      "html": "According to legend, Romulus gives Rome a calendar of <b>10 months</b> starting in <b>March</b>. Later King Numa adds January and February."
     },
     {
      "id": "cesare",
      "lat": 41.89,
      "lon": 12.49,
      "year": -46,
      "label": "Julius Caesar reforms the calendar",
      "html": "The Roman calendar was full of mistakes. <b>Julius Caesar</b>, advised by the astronomer <b>Sosigenes of Alexandria</b>, makes a year of <b>365 days</b> with one extra day <b>every 4 years</b> (the leap year). It's the <b>Julian calendar</b>.",
      "causes": [
       "egizi",
       "romolo"
      ]
     },
     {
      "id": "agosto",
      "lat": 41.91,
      "lon": 12.48,
      "year": -8,
      "label": "The month of August is born",
      "html": "The month called <i>Sextilis</i> (the sixth) takes the name of <b>Augustus</b>, in honour of the first Roman emperor. Julius Caesar's month had already become <b>July</b>.",
      "causes": [
       "cesare"
      ]
     },
     {
      "id": "dionigi",
      "lat": 41.88,
      "lon": 12.5,
      "year": 525,
      "label": "Years from the birth of Christ",
      "html": "The monk <b>Dionysius Exiguus</b>, in Rome, suggests counting the years from the birth of Jesus. That's why today we say \"Before Christ\" (BC) and \"Anno Domini\" (AD).",
      "causes": [
       "cesare"
      ]
     },
     {
      "id": "egira",
      "lat": 24.47,
      "lon": 39.61,
      "year": 622,
      "label": "The Islamic calendar",
      "html": "The prophet <b>Muhammad</b> moves from Mecca to Medina (the <b>Hijra</b>). The Islamic calendar starts from that year, based on the <b>Moon</b>: 12 lunar months, about <b>354 days</b>.",
      "causes": [
       "settimana"
      ]
     },
     {
      "id": "gregorio",
      "lat": 41.9,
      "lon": 12.45,
      "year": 1582,
      "label": "The Gregorian calendar",
      "html": "The Julian calendar was a little too long: in 1,600 years it had fallen <b>10 days</b> behind the seasons. Pope <b>Gregory XIII</b>, using the calculations of the Calabrian doctor <b>Luigi Lilio</b>, decides that Thursday <b>4 October 1582</b> will be followed by Friday <b>15 October</b>. It's the calendar we use today!",
      "causes": [
       "cesare",
       "dionigi"
      ]
     },
     {
      "id": "russia",
      "lat": 55.75,
      "lon": 37.6,
      "year": 1918,
      "label": "Russia changes calendar",
      "html": "Russia was still using the Julian calendar: that's why the \"October Revolution\" of 1917 happened in <b>November</b> by our calendar! In <b>1918</b> Russia too switches to the Gregorian calendar, skipping 13 days.",
      "causes": [
       "gregorio"
      ]
     }
    ]
   }
  },
  {
   "type": "decision",
   "title": "Rome, 1582: you are Pope Gregory XIII",
   "html": "<p>The astronomers bring you bad news: Julius Caesar's calendar is <b>a tiny bit too long</b> (about 11 minutes a year). It doesn't sound like much, but after many centuries the calendar is <b>10 days behind</b> the Sun!</p>\n<p>The real spring begins on 11 March instead of the 21st, and <b>Easter</b>, which is worked out from the start of spring, risks falling on the wrong day.</p>",
   "question": "What do you decide?",
   "options": [
    {
     "label": "Leave everything as it is: 10 days isn't a problem.",
     "outcome": "The delay would keep growing: in a few thousand years Christmas would fall in autumn and then in summer!"
    },
    {
     "label": "Skip 10 days just once and change the leap-year rule.",
     "outcome": "For one time only the calendar \"jumps\" forward and agrees with the Sun again. With a new rule (dropping 3 leap years every 400 years) the error becomes tiny."
    },
    {
     "label": "Add a whole extra month every now and then.",
     "outcome": "The calendar would become messy: nobody would know which month they were in, and contracts and festivals would all have to be redone."
    }
   ],
   "answer": 1,
   "explain": "Gregory XIII chose the second path with the papal bull <i>Inter gravissimas</i>: <b>Thursday 4 October 1582</b> was followed straight away by <b>Friday 15 October</b>. New rule: years ending in \"00\" are leap years only if they can be divided by 400 (2000 yes, 1900 no). The idea came from the Calabrian doctor <b>Luigi Lilio</b>. Italy, Spain and Portugal changed at once; other countries much later: England in 1752 and Russia in 1918. Today the Gregorian calendar is used almost everywhere in the world."
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand the calendar",
   "intro": "You can learn the calendar with your hands, with the Moon and with different games.",
   "tabs": [
    {
     "label": "✊ The knuckle trick",
     "html": "<p>A trick used by children <b>all over the world</b>: make fists with both hands and put them side by side. Count the months by touching the <b>knuckles</b> (the bumps) and the <b>gaps</b> between them, from left to right:</p>\n<ul>\n<li>on a <b>knuckle</b> → a month with <b>31</b> days;</li>\n<li>in a <b>gap</b> → a month with <b>30</b> days (or February).</li>\n</ul>\n<p>January (knuckle), February (gap), March (knuckle)… July (last knuckle of the first hand), August (first knuckle of the other hand)!</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#fff7ed\"/>\n<path d=\"M30 140 Q30 60 70 60 Q90 40 110 60 Q130 40 150 60 Q170 40 190 60 Q210 40 230 60 Q270 60 270 140 Z\" fill=\"#fcd9b6\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n<path d=\"M320 140 Q320 60 360 60 Q380 40 400 60 Q420 40 440 60 Q460 40 480 60 Q500 40 520 60 Q560 60 560 140 Z\" fill=\"#fcd9b6\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n<g font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">\n<text x=\"90\" y=\"34\" fill=\"#b91c1c\">JAN</text><text x=\"110\" y=\"95\" fill=\"#1d4ed8\">FEB</text><text x=\"130\" y=\"34\" fill=\"#b91c1c\">MAR</text><text x=\"150\" y=\"95\" fill=\"#1d4ed8\">APR</text>\n<text x=\"170\" y=\"34\" fill=\"#b91c1c\">MAY</text><text x=\"190\" y=\"95\" fill=\"#1d4ed8\">JUN</text><text x=\"210\" y=\"34\" fill=\"#b91c1c\">JUL</text>\n<text x=\"380\" y=\"34\" fill=\"#b91c1c\">AUG</text><text x=\"400\" y=\"95\" fill=\"#1d4ed8\">SEP</text><text x=\"420\" y=\"34\" fill=\"#b91c1c\">OCT</text><text x=\"440\" y=\"95\" fill=\"#1d4ed8\">NOV</text><text x=\"460\" y=\"34\" fill=\"#b91c1c\">DEC</text>\n</g>\n<text x=\"300\" y=\"185\" font-size=\"20\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">red, on a knuckle = 31 days</text>\n<text x=\"300\" y=\"212\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">blue, in a gap = 30 days (February 28/29)</text>\n</svg>"
    },
    {
     "label": "🌙 The Moon calendar",
     "html": "<p>Not everyone counts months the way we do. The <b>Islamic</b> and <b>Chinese</b> calendars follow the <b>Moon</b>: a month goes from one new Moon to the next, about <b>29 and a half days</b>.</p>\n<p>12 lunar months make about 354 days, 11 fewer than our year. That's why <b>Ramadan</b> falls about 11 days earlier each year, and <b>Chinese New Year</b> changes date every year (between 21 January and 20 February).</p>",
     "widget": "flashcards",
     "options": {
      "cards": [
       {
        "front": "🌑 New Moon",
        "back": "You can't see it: a new lunar month begins"
       },
       {
        "front": "🌓 First quarter",
        "back": "After about 7 days: half Moon"
       },
       {
        "front": "🌕 Full Moon",
        "back": "After about 15 days: fully lit"
       },
       {
        "front": "🌗 Last quarter",
        "back": "After about 22 days: half again"
       },
       {
        "front": "📅 Lunar month",
        "back": "About 29 and a half days"
       }
      ]
     }
    },
    {
     "label": "🌍 Upside-down seasons",
     "html": "<p>When it's <b>winter</b> here, in <b>Australia</b>, Argentina and South Africa it's <b>summer</b>! Why? The Earth is tilted: when the northern half is turned towards the Sun, the southern half is turned away, and the other way round. In Australia many people celebrate <b>Christmas on the beach</b> 🎄🏖️. Spin the globe and compare.</p>",
     "scene": "globe",
     "options": {
      "points": [
       {
        "lat": 41.9,
        "lon": 12.5,
        "label": "Italy: in December it's winter ❄️",
        "color": "#2563eb"
       },
       {
        "lat": -33.9,
        "lon": 151.2,
        "label": "Sydney: in December it's summer ☀️",
        "color": "#f97316"
       },
       {
        "lat": -34.6,
        "lon": -58.4,
        "label": "Buenos Aires: in December it's summer ☀️",
        "color": "#f97316"
       },
       {
        "lat": -33.9,
        "lon": 18.4,
        "label": "Cape Town: in December it's summer ☀️",
        "color": "#f97316"
       },
       {
        "lat": 40.7,
        "lon": -74,
        "label": "New York: in December it's winter ❄️",
        "color": "#2563eb"
       }
      ]
     }
    },
    {
     "label": "📜 The timeline",
     "html": "<p>Follow the stages of the calendar along the timeline, from the Egyptians to today.</p>",
     "widget": "timeline",
     "options": {
      "unit": "years",
      "events": [
       {
        "year": -2800,
        "label": "Egyptian 365-day year",
        "icon": "🌊"
       },
       {
        "year": -46,
        "label": "Julius Caesar's calendar",
        "icon": "🏛️"
       },
       {
        "year": 525,
        "label": "Years from the birth of Christ",
        "icon": "✝️"
       },
       {
        "year": 622,
        "label": "Start of the Islamic calendar",
        "icon": "🌙"
       },
       {
        "year": 1582,
        "label": "Gregorian calendar",
        "icon": "📅"
       },
       {
        "year": 2028,
        "label": "Next leap year",
        "icon": "🐸"
       }
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Calendar map: tap the nodes and find out why",
   "nodes": [
    {
     "id": "terra",
     "label": "The Earth moves",
     "x": 50,
     "y": 6,
     "color": "#0ea5e9",
     "html": "The Earth spins on itself and goes round the Sun.",
     "why": "The whole calendar comes from three movements in the sky: the Earth spinning on itself (the day), the Moon going round the Earth (the month), the Earth going round the Sun (the year)."
    },
    {
     "id": "giorno",
     "label": "Day",
     "x": 15,
     "y": 30,
     "color": "#eab308",
     "html": "24 hours: one spin of the Earth.",
     "why": "When our part of the Earth faces the Sun it's day, when it's turned the other way it's night. It's the easiest rhythm to see: that's why it's the first unit of the calendar."
    },
    {
     "id": "settimana",
     "label": "Week",
     "x": 15,
     "y": 60,
     "color": "#a855f7",
     "html": "7 days, named after heavenly bodies.",
     "why": "The 7-day week comes from the ancient Middle East (Babylonians and Hebrews) and perhaps from the phases of the Moon, which last about 7 days each. The Romans adopted it, naming the days after the Moon, Mars, Mercury, Jupiter, Venus."
    },
    {
     "id": "mese",
     "label": "Month",
     "x": 50,
     "y": 35,
     "color": "#64748b",
     "html": "28–31 days: originally one trip of the Moon around the Earth.",
     "why": "\"Month\" and \"Moon\" are related words: the Moon takes about 29 and a half days to look the same again. Our calendar made the months a little longer so that exactly 12 fit into the year."
    },
    {
     "id": "anno",
     "label": "Year",
     "x": 85,
     "y": 30,
     "color": "#16a34a",
     "html": "365 days (366 in leap years): one trip of the Earth around the Sun.",
     "why": "One trip around the Sun takes about <b>365 days and 6 hours</b>. After 4 years those 6 hours add up to a whole day: that's why every 4 years there's a 29 February."
    },
    {
     "id": "stagioni",
     "label": "Seasons",
     "x": 85,
     "y": 60,
     "color": "#f97316",
     "html": "Spring, summer, autumn, winter.",
     "why": "The Earth's axis is tilted by about 23 and a half degrees. During the year our hemisphere gets the Sun's rays more directly (summer) or more slanting (winter). It doesn't depend on the distance from the Sun: in January the Earth is actually a little closer!"
    },
    {
     "id": "giuliano",
     "label": "Caesar's calendar",
     "x": 35,
     "y": 85,
     "color": "#ef4444",
     "html": "46 BC: 365 days and a leap year every 4 years.",
     "why": "<b>Julius Caesar</b> copied the idea of 365 days from the Egyptians, with the help of the astronomer <b>Sosigenes of Alexandria</b>, and added the leap day."
    },
    {
     "id": "gregoriano",
     "label": "Gregorian calendar",
     "x": 70,
     "y": 88,
     "color": "#db2777",
     "html": "1582: the calendar we use today.",
     "why": "The real year is 11 minutes shorter than 365 days and 6 hours. The Calabrian <b>Luigi Lilio</b> found the correction and Pope <b>Gregory XIII</b> made it law: 10 days were skipped and the leap-year rule was changed."
    }
   ],
   "edges": [
    [
     "terra",
     "giorno",
     "spinning on itself:"
    ],
    [
     "terra",
     "anno",
     "around the Sun:"
    ],
    [
     "terra",
     "mese",
     "the Moon goes round:"
    ],
    [
     "giorno",
     "settimana",
     "7 make a"
    ],
    [
     "mese",
     "anno",
     "12 make a"
    ],
    [
     "anno",
     "stagioni",
     "divided into 4"
    ],
    [
     "anno",
     "giuliano",
     "measured by"
    ],
    [
     "giuliano",
     "gregoriano",
     "corrected by"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: seasons, years and history",
   "questions": [
    {
     "type": "mc",
     "q": "Which season comes after summer?",
     "options": [
      "Spring",
      "Autumn",
      "Winter"
     ],
     "answer": 1,
     "explain": "Spring → summer → autumn → winter."
    },
    {
     "type": "num",
     "q": "How many days does a leap year have?",
     "answer": 366,
     "explain": "It has one extra day: 29 February."
    },
    {
     "type": "mc",
     "q": "The month of July is named after…",
     "options": [
      "Julius Caesar",
      "Augustus",
      "Romulus"
     ],
     "answer": 0,
     "explain": "July comes from Julius Caesar (Iulius)."
    }
   ]
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li>1 week = <b>7 days</b>; 1 year = <b>12 months</b> = <b>365 days</b>.</li>\n<li>\"Thirty days has September, April, June and November…\"</li>\n<li>Every 4 years there's a <b>leap year</b> (366 days).</li>\n<li>4 seasons: <b>spring, summer, autumn, winter</b>.</li>\n<li>We use the <b>Gregorian</b> calendar (1582).</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Calendar",
   "d": "A system for dividing and counting time in days, weeks, months and years."
  },
  {
   "t": "Week",
   "d": "A group of 7 days."
  },
  {
   "t": "Month",
   "d": "Each of the 12 parts of the year, from 28 to 31 days."
  },
  {
   "t": "Year",
   "d": "365 days: the time it takes the Earth to go round the Sun."
  },
  {
   "t": "Leap year",
   "d": "A year of 366 days, with 29 February; it comes every 4 years."
  },
  {
   "t": "Season",
   "d": "Each of the 4 parts of the year with a different climate."
  },
  {
   "t": "Date",
   "d": "Saying which day, month and year it is."
  },
  {
   "t": "BC / AD",
   "d": "Before Christ / Anno Domini: before or after the year 1."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "How many months does a year have?",
    "answer": 12,
    "explain": "From January to December: 12 months."
   },
   {
    "type": "num",
    "q": "How many days does a normal year have?",
    "answer": 365,
    "explain": "A normal year has 365 days."
   },
   {
    "type": "order",
    "q": "Put the days of the week in order.",
    "items": [
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
     "Sunday"
    ],
    "explain": "In Italy the week starts on Monday."
   },
   {
    "type": "order",
    "q": "Put the seasons in order, starting from spring.",
    "items": [
     "spring",
     "summer",
     "autumn",
     "winter"
    ],
    "explain": "The seasons always repeat in this order."
   },
   {
    "type": "mc",
    "q": "How many days does April have?",
    "options": [
     "30",
     "31",
     "28"
    ],
    "answer": 0,
    "explain": "\"Thirty days has September, April, June and November\"."
   },
   {
    "type": "mc",
    "q": "If today is Friday, yesterday was…",
    "options": [
     "Saturday",
     "Thursday",
     "Sunday"
    ],
    "answer": 1,
    "explain": "Thursday comes before Friday."
   },
   {
    "type": "tf",
    "q": "August has 31 days.",
    "answer": true,
    "explain": "August falls on a knuckle: 31 days."
   },
   {
    "type": "tf",
    "q": "In Australia, when it's winter here, it's summer.",
    "answer": true,
    "explain": "Australia and Italy are in different hemispheres: the seasons are reversed."
   },
   {
    "type": "text",
    "q": "What is a year with 366 days called?",
    "answer": [
     "leap year",
     "a leap year",
     "leap"
    ],
    "explain": "A leap year, with 29 February."
   },
   {
    "type": "mc",
    "q": "The day \"Monday\" is named after…",
    "options": [
     "the Moon",
     "the money",
     "a king"
    ],
    "answer": 0,
    "explain": "Monday = the Moon's day (in Italian: lunedì, from Luna)."
   },
   {
    "type": "mc",
    "q": "Who created, in 1582, the calendar we use today?",
    "options": [
     "Julius Caesar",
     "Pope Gregory XIII",
     "Galileo Galilei"
    ],
    "answer": 1,
    "explain": "The Gregorian calendar, from Pope Gregory XIII."
   },
   {
    "type": "num",
    "q": "Today is 5 May. What day of May will it be in a week's time?",
    "answer": 12,
    "explain": "5 + 7 = 12: 12 May."
   }
  ]
 }
});
