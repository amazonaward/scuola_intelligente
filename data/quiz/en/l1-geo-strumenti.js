QBANK("en", "l1-geo-strumenti", {
 "f": [
  { "type": "mc", "q": "Which is the reference parallel at 0° latitude?", "options": ["Tropic of Cancer", "Equator", "Arctic Circle"], "answer": 1, "explain": "The Equator is the 0° parallel, from which latitude is measured." },
  { "type": "num", "q": "On a 1:10,000 map, how many metres in reality are 5 cm?", "answer": 500, "tol": 0, "unit": "m", "explain": "5 cm × 10,000 = 50,000 cm = 500 m." },
  { "type": "tf", "q": "Meridians are half-circles joining the North Pole to the South Pole.", "answer": true, "explain": "Meridians pass through the poles and measure longitude." },
  { "type": "text", "q": "What is the part of a map that explains the symbols and colours called?", "answer": ["legend", "the legend", "key", "the key"], "explain": "The legend (or key) is the part of the map that explains what the symbols and colours mean." },
  { "type": "mc", "q": "What does longitude show?", "options": ["The angular distance from Greenwich", "The angular distance from the Equator", "Altitude"], "answer": 0, "explain": "Longitude measures the east-west angular distance from the Greenwich meridian." }
 ],
 "m": [
  { "type": "mc", "q": "A scale of 1:2,000,000 is…", "options": ["a large scale", "a small scale", "the same as 1:1"], "answer": 1, "explain": "The denominator is very large: the scale is small and shows a large area with little detail." },
  { "type": "num", "q": "Two villages are 15 km apart. On a map they are 30 cm apart. What is the scale denominator (1:N)?", "answer": 50000, "tol": 0, "explain": "15 km = 1,500,000 cm; 1,500,000 ÷ 30 = 50,000: a scale of 1:50,000." },
  { "type": "tf", "q": "On a topographic map, contour lines that are far apart show a gentle slope.", "answer": true, "explain": "Widely spaced lines mean little change in height over a long distance." },
  { "type": "mc", "q": "Roughly how many degrees of longitude correspond to 1 hour of time difference?", "options": ["15°", "24°", "90°"], "answer": 0, "explain": "360° ÷ 24 hours = 15° per hour." },
  { "type": "mc", "q": "What are thematic maps for?", "options": ["Showing a single phenomenon on a geographic base", "Showing only roads", "Measuring the depth of the sea"], "answer": 0, "explain": "A thematic map shows a specific phenomenon (climate, population, income…)." }
 ],
 "d": [
  { "type": "mc", "q": "Why must a map projection always distort something?", "options": ["Because a spherical surface cannot be laid flat without distorting areas, shapes or distances", "Because mapmakers get the measurements wrong", "Because the Earth is too big"], "answer": 0, "explain": "It is a mathematical property (Gauss): a sphere cannot be developed onto a plane." },
  { "type": "num", "q": "A path measures 4.8 cm on a 1:25,000 map. How many metres long is it (horizontally)?", "answer": 1200, "tol": 0, "unit": "m", "explain": "4.8 × 25,000 = 120,000 cm = 1,200 m." },
  { "type": "tf", "q": "GPS can calculate position with just one satellite.", "answer": false, "explain": "At least four satellites are needed: three for position and one to correct the receiver's clock." },
  { "type": "mc", "q": "An example of \"vector\" GIS data is…", "options": ["A satellite photo", "The polygon representing a municipality's boundary", "A grid of elevation pixels"], "answer": 1, "explain": "Vector data are points, lines and polygons; satellite photos and elevation grids are raster data." },
  { "type": "mc", "q": "Which of these projections preserves areas but distorts shapes?", "options": ["Mercator", "Gall-Peters", "Neither"], "answer": 1, "explain": "Gall-Peters is an equal-area projection: it keeps the correct proportions between areas, but shapes look stretched." }
 ]
});
