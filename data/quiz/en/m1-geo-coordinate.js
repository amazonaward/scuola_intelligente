QBANK("en", "m1-geo-coordinate", {
 "f": [
  {
   "type": "mc",
   "q": "Which parallel lies at 66° 33′ North?",
   "options": [
    "Tropic of Capricorn",
    "Arctic Circle",
    "Antarctic Circle"
   ],
   "answer": 1,
   "explain": "66° 33′ North is the Arctic Circle; the Antarctic Circle is at the same latitude but in the south."
  },
  {
   "type": "tf",
   "q": "Longitude is measured starting from the Equator.",
   "answer": false,
   "explain": "Latitude is measured from the Equator; longitude is measured from the Greenwich meridian."
  },
  {
   "type": "mc",
   "q": "Sydney is at 33.9° South. In which hemisphere is it?",
   "options": [
    "Southern",
    "Northern",
    "Western"
   ],
   "answer": 0,
   "explain": "South means the southern hemisphere, below the Equator."
  },
  {
   "type": "text",
   "q": "What three-letter abbreviation is used for Greenwich time (coordinated universal time)?",
   "answer": [
    "utc"
   ],
   "explain": "UTC is the reference time: Italy is on UTC+1 (UTC+2 in summer time)."
  },
  {
   "type": "mc",
   "q": "Meridians are half-circles that run…",
   "options": [
    "from the Equator to the tropics",
    "from west to east",
    "from one pole to the other"
   ],
   "answer": 2,
   "explain": "Meridians link the North Pole to the South Pole; parallels run from west to east."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Two cities lie on the same meridian, one at 52° N and the other at 40° N. About how many km apart are they? (1° of latitude ≈ 111 km)",
   "answer": 1332,
   "tol": 10,
   "unit": "km",
   "explain": "Difference: 52 − 40 = 12°. Distance: 12 × 111 = 1,332 km."
  },
  {
   "type": "mc",
   "q": "A point has coordinates 34° S, 151° E. In which hemispheres does it lie?",
   "options": [
    "Northern and western",
    "Northern and eastern",
    "Southern and eastern",
    "Southern and western"
   ],
   "answer": 2,
   "explain": "S = south → southern hemisphere; E = east → eastern hemisphere."
  },
  {
   "type": "tf",
   "q": "China, as wide as five time zones, uses five different times.",
   "answer": false,
   "explain": "Time zone borders often follow national borders: China uses a single time for the whole country."
  },
  {
   "type": "text",
   "q": "What instrument did John Harrison build to solve the problem of longitude at sea?",
   "answer": [
    "chronometer",
    "marine chronometer",
    "a chronometer",
    "the chronometer",
    "marine clock",
    "clock"
   ],
   "explain": "Harrison's marine chronometer kept the time of the home port: the difference from local time gives the longitude (1 hour = 15°)."
  },
  {
   "type": "order",
   "q": "Put these cities in order from west to east (by time zone).",
   "items": [
    "New York (UTC−5)",
    "London (UTC+0)",
    "Rome (UTC+1)",
    "Moscow (UTC+3)",
    "Tokyo (UTC+9)"
   ],
   "explain": "The further east, the higher the UTC number: −5, 0, +1, +3, +9."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "On a ship the Sun is at its highest point (local noon) when the chronometer, set to Greenwich time, shows 15:00. At how many degrees of longitude west is the ship?",
   "answer": 45,
   "tol": 0,
   "unit": "°",
   "explain": "3 hours have passed since noon at Greenwich, so the ship is to the west: 3 × 15° = 45° West."
  },
  {
   "type": "mc",
   "q": "Ilaria says: “In Rome (UTC+1) it is 15:00, so in New York (UTC−5) it is 21:00, because 15 + 6 = 21.” What is the mistake?",
   "options": [
    "The difference is 4 hours, not 6",
    "There is no mistake",
    "New York is to the west: the hours must be subtracted, so it is 9:00"
   ],
   "answer": 2,
   "explain": "Going west, the Sun arrives later, so the time is earlier: 15 − 6 = 9."
  },
  {
   "type": "tf",
   "q": "One degree of longitude is about 111 km long anywhere on Earth.",
   "answer": false,
   "explain": "Meridians meet at the poles: a degree of longitude is 111 km at the Equator and shrinks to zero at the poles."
  },
  {
   "type": "mc",
   "q": "Rome and New York have almost the same latitude, but their times are very different. Why?",
   "options": [
    "Because time depends on longitude, and the two cities are on very distant meridians",
    "Because time depends on latitude and New York is farther south",
    "Because New York is in the southern hemisphere"
   ],
   "answer": 0,
   "explain": "Time zones are slices of longitude (15° each): the time difference between two places depends on how far apart they are east-west."
  },
  {
   "type": "num",
   "q": "A plane flies straight north along a meridian from the Equator to the 30° N parallel. About how many km does it cover? (1° ≈ 111 km)",
   "answer": 3330,
   "tol": 30,
   "unit": "km",
   "explain": "From the Equator (0°) to 30° N there are 30 degrees: 30 × 111 = 3,330 km."
  }
 ]
});
