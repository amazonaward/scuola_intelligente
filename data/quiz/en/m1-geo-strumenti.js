QBANK("en", "m1-geo-strumenti", {
 "f": [
  {
   "type": "mc",
   "q": "Which instrument has a magnetic needle that points north?",
   "options": [
    "Thermometer",
    "Compass",
    "Altimeter"
   ],
   "answer": 1,
   "explain": "The compass has a magnetic needle that points to magnetic north, close to the geographic North Pole."
  },
  {
   "type": "tf",
   "q": "At noon in Italy the Sun is in the south.",
   "answer": true,
   "explain": "The Sun rises in the east, sets in the west and at noon in Italy it is in the south."
  },
  {
   "type": "mc",
   "q": "Which star shows the north at night?",
   "options": [
    "Sirius",
    "Antares",
    "Polaris (the North Star)"
   ],
   "answer": 2,
   "explain": "Polaris sits almost above the North Pole and shows north."
  },
  {
   "type": "text",
   "q": "What is a map that shows only one topic, such as climate or spoken languages, called?",
   "answer": [
    "thematic",
    "thematic map",
    "a thematic map",
    "the thematic map"
   ],
   "explain": "Thematic maps deal with a single theme: climate, population, languages, tourism, earthquake risk…"
  },
  {
   "type": "tf",
   "q": "A GIS (Geographic Information System) overlays many layers of data on a digital map.",
   "answer": true,
   "explain": "Roads, rivers, population, buildings, landslide risk: each type of data is a layer that can be switched on and off."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "On a map, 4 cm represent 2 km in reality. What is the denominator N of the scale 1 : N?",
   "answer": 50000,
   "tol": 0,
   "explain": "2 km = 200,000 cm. 200,000 : 4 = 50,000, so the scale is 1 : 50,000."
  },
  {
   "type": "mc",
   "q": "You want to compare the number of inhabitants of five cities. Which graph is the most suitable?",
   "options": [
    "Pie chart",
    "Line graph",
    "Bar chart"
   ],
   "answer": 2,
   "explain": "A bar chart compares different quantities with columns: the tallest one is the most populated city."
  },
  {
   "type": "tf",
   "q": "A map at a scale of 1 : 10,000,000 is suitable for seeing the paths of a small park.",
   "answer": false,
   "explain": "It is a very small scale: it shows a huge area with very few details. For a park you need a large scale, such as 1 : 5,000."
  },
  {
   "type": "text",
   "q": "What is the map that shows the borders of countries and regions, each in a different colour, called?",
   "answer": [
    "political",
    "political map",
    "a political map",
    "the political map"
   ],
   "explain": "The political map shows borders, countries, regions and cities; the physical map shows relief, plains and waters."
  },
  {
   "type": "order",
   "q": "Put in order the steps for finding the real distance between two places on a scaled map.",
   "items": [
    "Measure the cm on the map with a ruler",
    "Multiply by the scale denominator",
    "Convert the cm into km"
   ],
   "explain": "First measure on the map, then multiply by the denominator, finally convert to km."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "On a map at a scale of 1 : 25,000 a route measures 18 cm. Walking at 3 km/h, how many hours does it take?",
   "answer": 1.5,
   "tol": 0,
   "unit": "hours",
   "explain": "18 × 25,000 = 450,000 cm = 4,500 m = 4.5 km. Time = 4.5 : 3 = 1.5 hours."
  },
  {
   "type": "mc",
   "q": "A classmate says: “On a Mercator map Greenland is as big as Africa, so they have the same area.” What is the mistake?",
   "options": [
    "No mistake: Mercator preserves areas",
    "Mercator enlarges lands near the poles: in reality Africa is about 14 times bigger",
    "Greenland is actually bigger than Africa"
   ],
   "answer": 1,
   "explain": "The Mercator projection preserves angles but distorts areas: Africa is 30 million km², Greenland 2.2 million."
  },
  {
   "type": "tf",
   "q": "To compare the areas of continents without distortion, a globe is better than a Mercator map.",
   "answer": true,
   "explain": "The globe is the only representation without distortion; Mercator greatly enlarges lands near the poles."
  },
  {
   "type": "mc",
   "q": "On a topographic map two paths lead from the same altitude to the same summit. Path A crosses very closely spaced contour lines, path B widely spaced ones. Which statement is correct?",
   "options": [
    "The two paths have the same slope because they start and end at the same altitudes",
    "A is gentler and longer, B is steeper and shorter",
    "A is steeper and shorter, B is gentler and longer"
   ],
   "answer": 2,
   "explain": "Close lines = steep slope (you climb a lot in a short distance); wide lines = gentle slope, which needs a longer route."
  },
  {
   "type": "mc",
   "q": "Which tool–use pairing is WRONG?",
   "options": [
    "Pie chart – showing how a figure changes year after year",
    "Cartogram – showing the population density of regions",
    "Climate graph – combining the temperatures and rainfall of a place"
   ],
   "answer": 0,
   "explain": "A pie chart shows the parts of a whole in percentages; to show change over time you use a line graph."
  }
 ]
});
