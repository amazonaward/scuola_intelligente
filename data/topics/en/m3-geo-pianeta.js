TOPIC('en', {
 "id": "m3-geo-pianeta",
 "title": "Planet Earth",
 "intro": "Before travelling across the continents, let's look at the Earth from above: what it is like, how we find our way on it, how it is divided into <b>continents</b> and <b>oceans</b>, and why it has such different <b>climates</b>, from polar ice to equatorial forests. It is the geographer's toolbox for the whole third year.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "1. An (almost) perfect sphere",
   "html": "<p>The Earth is the third planet of the Solar System. It is shaped like a sphere slightly <b>flattened at the poles</b> (scientists call it a <i>geoid</i>):</p>\n<ul>\n<li>circumference at the equator: about <b>40,075 km</b>;</li>\n<li>mean radius: about <b>6371 km</b>;</li>\n<li>total surface area: about <b>510 million km²</b>, of which about <b>71% is covered by water</b> and <b>29% is land</b>.</li>\n</ul>\n<p>The Earth makes two movements:</p>\n<ul>\n<li><b>rotation</b> on its own axis, from west to east, in about <b>24 hours</b> → day and night;</li>\n<li><b>revolution</b> around the Sun in about <b>365 days and 6 hours</b> → the year. Because the Earth's axis is <b>tilted by about 23.5°</b>, during the year the Sun's rays arrive at a steeper or shallower angle: this is what causes the <b>seasons</b>.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "2. Finding your way: parallels, meridians and coordinates",
   "html": "<p>To pinpoint a place on the Earth precisely, we use a grid of imaginary lines:</p>\n<ul>\n<li><b>Parallels</b>: circles parallel to the <b>equator</b> (0°). The longest is the equator; towards the poles they get smaller and smaller. <b>Latitude</b> goes from 0° to 90° North or South.</li>\n<li><b>Meridians</b>: half-circles running from pole to pole, all the same length. The prime meridian (0°) passes through the <b>Greenwich</b> observatory, near London. <b>Longitude</b> goes from 0° to 180° East or West.</li>\n</ul>\n<p>Important parallels: the <b>Tropic of Cancer</b> (about 23.5° N), the <b>Tropic of Capricorn</b> (about 23.5° S), the <b>Arctic</b> and <b>Antarctic Circles</b> (about 66.5°). Rome lies at about <b>41.9° N, 12.5° E</b>.</p>\n<p>Since the Earth turns 360° in 24 hours, the time changes by 1 hour every 15° of longitude: that is why we have <b>time zones</b>.</p>"
  },
  {
   "type": "3d",
   "title": "The globe: find the lines and points",
   "scene": "globe",
   "options": {
    "points": [
     {
      "lat": 0,
      "lon": 0,
      "label": "Equator × Greenwich (0°, 0°)",
      "color": "#ef4444"
     },
     {
      "lat": 51.48,
      "lon": 0,
      "label": "Greenwich",
      "color": "#2563eb"
     },
     {
      "lat": 41.9,
      "lon": 12.5,
      "label": "Rome",
      "color": "#16a34a"
     },
     {
      "lat": 23.44,
      "lon": -82.4,
      "label": "Tropic of Cancer (Cuba)",
      "color": "#f59e0b"
     },
     {
      "lat": -23.44,
      "lon": -46.6,
      "label": "Tropic of Capricorn (São Paulo)",
      "color": "#f59e0b"
     },
     {
      "lat": 66.56,
      "lon": 25.7,
      "label": "Arctic Circle (Finland)",
      "color": "#0ea5e9"
     },
     {
      "lat": -90,
      "lon": 0,
      "label": "South Pole",
      "color": "#a855f7"
     },
     {
      "lat": 90,
      "lon": 0,
      "label": "North Pole",
      "color": "#a855f7"
     }
    ]
   },
   "caption": "Turn the globe: follow the Greenwich meridian from pole to pole and find Italy in the northern hemisphere, east of Greenwich."
  },
  {
   "type": "text",
   "title": "3. Continents and oceans",
   "html": "<p>The land forms <b>6 continents</b> (counting North and South America together as America, and Oceania as a continent; other schools, for example in the USA, count 7):</p>\n<table>\n<tr><th>Continent</th><th>Area (approx.)</th><th>Population (approx., 2024)</th></tr>\n<tr><td>Asia</td><td>44.6 million km²</td><td>4.8 billion</td></tr>\n<tr><td>America (North + South)</td><td>42.5 million km²</td><td>1.05 billion</td></tr>\n<tr><td>Africa</td><td>30.4 million km²</td><td>1.5 billion</td></tr>\n<tr><td>Antarctica</td><td>14 million km²</td><td>no permanent inhabitants</td></tr>\n<tr><td>Europe</td><td>10.2 million km²</td><td>745 million</td></tr>\n<tr><td>Oceania</td><td>8.5 million km²</td><td>46 million</td></tr>\n</table>\n<p>There are five <b>oceans</b>: the <b>Pacific</b> (the largest: on its own it is bigger than all the land put together!), the <b>Atlantic</b>, the <b>Indian</b>, the <b>Southern</b> (or Antarctic) and the <b>Arctic</b> (the smallest, mostly frozen).</p>"
  },
  {
   "type": "svg",
   "title": "Simplified world map: continents and oceans",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#7dd3fc\"/>\n<line x1=\"0\" y1=\"160\" x2=\"600\" y2=\"160\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"8 5\"/>\n<text x=\"560\" y=\"154\" font-size=\"13\" fill=\"#b91c1c\" text-anchor=\"end\">Equator</text>\n<line x1=\"0\" y1=\"118\" x2=\"600\" y2=\"118\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n<line x1=\"0\" y1=\"202\" x2=\"600\" y2=\"202\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n<path d=\"M40 50 L170 40 L190 90 L150 120 L130 140 L100 120 L60 90 Z\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"2\"/>\n<text x=\"115\" y=\"85\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#14532d\">N. America</text>\n<path d=\"M140 150 L190 160 L200 200 L170 270 L150 270 L145 210 Z\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"2\"/>\n<text x=\"170\" y=\"210\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#14532d\">S. America</text>\n<path d=\"M270 50 L330 45 L330 95 L280 100 Z\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/>\n<text x=\"300\" y=\"78\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#78350f\">Europe</text>\n<path d=\"M270 110 L340 105 L360 150 L340 230 L310 240 L290 180 L265 150 Z\" fill=\"#fb923c\" stroke=\"#9a3412\" stroke-width=\"2\"/>\n<text x=\"310\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#7c2d12\">Africa</text>\n<path d=\"M335 40 L520 35 L540 90 L500 130 L430 140 L380 120 L340 100 Z\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n<text x=\"440\" y=\"85\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#7f1d1d\">Asia</text>\n<path d=\"M470 200 L540 195 L550 240 L490 250 Z\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"2\"/>\n<text x=\"510\" y=\"228\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4c1d95\">Oceania</text>\n<rect x=\"0\" y=\"292\" width=\"600\" height=\"28\" fill=\"#f1f5f9\"/>\n<text x=\"300\" y=\"312\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#334155\">Antarctica</text>\n<text x=\"40\" y=\"200\" font-size=\"15\" fill=\"#0c4a6e\" font-weight=\"bold\">Pacific</text>\n<text x=\"225\" y=\"140\" font-size=\"14\" fill=\"#0c4a6e\" font-weight=\"bold\">Atlantic</text>\n<text x=\"410\" y=\"200\" font-size=\"15\" fill=\"#0c4a6e\" font-weight=\"bold\">Indian</text>\n<text x=\"300\" y=\"22\" font-size=\"14\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">Arctic</text>\n<text x=\"300\" y=\"285\" font-size=\"13\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">Southern</text>\n</svg>",
   "caption": "Diagram not to scale. The dashed orange lines are the Tropics of Cancer (above) and Capricorn (below)."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: shape and coordinates",
   "questions": [
    {
     "type": "mc",
     "q": "What percentage of the Earth's surface is covered by water?",
     "options": [
      "About 29%",
      "About 50%",
      "About 71%"
     ],
     "answer": 2,
     "explain": "About 71% is water, 29% is land."
    },
    {
     "type": "mc",
     "q": "What do we call the distance of a point from the equator, in degrees?",
     "options": [
      "Longitude",
      "Latitude",
      "Altitude"
     ],
     "answer": 1,
     "explain": "Latitude goes from 0° (equator) to 90° (poles)."
    },
    {
     "type": "num",
     "q": "How many degrees of longitude wide is one time zone?",
     "answer": 15,
     "tol": 0,
     "unit": "°",
     "explain": "360° ÷ 24 hours = 15° for each hour."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. The Earth on the move: plates and landforms",
   "html": "<p>The Earth's crust is divided into large <b>plates</b> that move a few centimetres a year (about as fast as your fingernails grow). Where they collide, <b>mountain ranges</b> (the Alps, the Himalayas, the Andes), <b>volcanoes</b> and <b>earthquakes</b> form; where they move apart, oceans open up.</p>\n<p>About 300 million years ago all the land was joined in a single supercontinent, <b>Pangaea</b>. This idea was put forward in <b>1912</b> by the German <b>Alfred Wegener</b> (continental drift) and proved in the 1960s by <b>plate tectonics</b>.</p>\n<p>The highest mountain: <b>Everest</b> (8849 m, in Asia, between Nepal and China). The deepest point of the oceans: the <b>Mariana Trench</b> (almost 11,000 m, in the Pacific).</p>"
  },
  {
   "type": "3d",
   "title": "The Earth's landscape in 3D",
   "scene": "terrain",
   "options": {
    "features": {
     "mountain": {
      "label": "Mountain range",
      "html": "Formed by plates colliding. Examples: the <b>Himalayas</b> (Asia), the <b>Andes</b> (South America, the longest range, about 7000 km), the <b>Alps</b>."
     },
     "peak": {
      "label": "Peak",
      "html": "The highest point of a mountain. The highest peak in the world is <b>Everest</b>, 8849 m."
     },
     "glacier": {
      "label": "Glacier",
      "html": "A mass of ice that forms where more snow falls than melts. About 70% of the Earth's fresh water is frozen, mostly in Antarctica and Greenland."
     },
     "plain": {
      "label": "Plain",
      "html": "Great plains: the <b>East European (Sarmatian) Plain</b>, the US <b>Great Plains</b>, the Argentine <b>Pampas</b>. They are the most farmed and most populated areas."
     },
     "river": {
      "label": "River",
      "html": "The longest rivers: the <b>Nile</b> (about 6650 km) and the <b>Amazon</b> (the river carrying the most water in the world)."
     },
     "volcano": {
      "label": "Volcano",
      "html": "About 75% of active volcanoes lie around the Pacific, in the <b>Ring of Fire</b>."
     },
     "sea": {
      "label": "Ocean",
      "html": "The Pacific covers about a third of the Earth's surface."
     },
     "island": {
      "label": "Island",
      "html": "The largest island in the world is <b>Greenland</b> (about 2.2 million km²). Australia is considered a continent."
     },
     "lake": {
      "label": "Lake",
      "html": "The <b>Caspian Sea</b> is the largest lake; <b>Lake Baikal</b> (Russia) is the deepest, over 1600 m."
     },
     "delta": {
      "label": "Delta",
      "html": "A fan-shaped river mouth. The largest deltas: Ganges-Brahmaputra (Bangladesh), Nile, Mississippi."
     }
    }
   },
   "caption": "Turn the landscape and tap the parts: for each one, discover the world record."
  },
  {
   "type": "text",
   "title": "5. Climates: why it is hot or cold",
   "html": "<p>The <b>weather</b> is what it is like today (raining, sunny). The <b>climate</b> is the set of average conditions of a place calculated over at least <b>30 years</b>.</p>\n<p>The <b>factors of climate</b>:</p>\n<ul>\n<li><b>Latitude</b>: at the equator the Sun's rays arrive almost vertically and heat a lot; at the poles they arrive at a very low angle and heat little.</li>\n<li><b>Altitude</b>: as you go up, the temperature drops by about <b>0.6 °C every 100 m</b>.</li>\n<li><b>Distance from the sea</b>: the sea warms up and cools down slowly and makes the climate milder.</li>\n<li><b>Ocean currents</b>: the <b>Gulf Stream</b> carries warm water towards northern Europe.</li>\n<li><b>Winds and landforms</b>: mountains can block rain (like the Himalayas with the monsoons).</li>\n</ul>\n<p>The Russian-German scientist <b>Wladimir Köppen</b> classified climates (1900–1936) into large groups:</p>\n<table>\n<tr><th>Climate</th><th>Where</th><th>Environment</th></tr>\n<tr><td>🌴 Equatorial / tropical</td><td>between the Tropics</td><td>rainforest, savanna</td></tr>\n<tr><td>🏜️ Arid</td><td>near the Tropics, inland areas of continents</td><td>desert, steppe</td></tr>\n<tr><td>🌳 Temperate</td><td>mid-latitudes (Italy!)</td><td>Mediterranean scrub, broadleaf woodland</td></tr>\n<tr><td>🌲 Cold (continental)</td><td>north of Europe, Asia and America</td><td>taiga (coniferous forest)</td></tr>\n<tr><td>🧊 Polar</td><td>beyond the polar circles</td><td>tundra, ice</td></tr>\n</table>"
  },
  {
   "type": "3d",
   "title": "Climate zones as layers",
   "scene": "layers",
   "options": {
    "layers": [
     {
      "r": 1,
      "color": "#e0f2fe",
      "label": "Polar (beyond 66.5°)"
     },
     {
      "r": 0.85,
      "color": "#166534",
      "label": "Cold continental (taiga)"
     },
     {
      "r": 0.7,
      "color": "#84cc16",
      "label": "Temperate (mid-latitudes)"
     },
     {
      "r": 0.52,
      "color": "#facc15",
      "label": "Arid (tropical deserts)"
     },
     {
      "r": 0.35,
      "color": "#15803d",
      "label": "Equatorial (rainforest)"
     }
    ]
   },
   "caption": "Simplified model: imagine starting from a pole (outer layer) and moving down towards the equator (centre). In reality the zones are interrupted by seas, mountains and currents."
  },
  {
   "type": "example",
   "title": "Worked example: why is London less cold than Montréal?",
   "html": "<p><b>London</b> (51.5° N) is further north than <b>Montréal</b> (45.5° N), yet in January the average temperature in London is about <b>+5 °C</b>, while in Montréal it is about <b>−10 °C</b>.</p>\n<p>Why? London receives moist winds from the Atlantic, warmed by the <b>Gulf Stream</b>; Montréal is inland and in winter receives freezing air from the Canadian Arctic. So latitude is not enough: the <b>sea</b>, <b>currents</b> and <b>winds</b> also matter.</p>"
  },
  {
   "type": "example",
   "title": "Worked example: work out the time in New York",
   "html": "<p>It is <b>15:00</b> in Rome. New York lies at about 74° west, Rome at about 12° east: a total difference of about <b>86°</b>, that is almost 6 time zones. In practice there is a <b>6-hour</b> difference between Rome and New York (time zones also follow national borders).</p>\n<p>New York is further west, so the Sun reaches it later: there it is <b>9:00</b> in the morning. If you phone a friend in <b>Tokyo</b> (+8 hours compared with Rome, without daylight saving time), there it is <b>23:00</b>!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know… Eratosthenes measured the Earth with a stick?",
   "html": "<p>Around <b>240 BC</b> the Greek <b>Eratosthenes</b>, librarian in Alexandria in Egypt, noticed that in Syene (today's Aswan) at noon on the summer solstice the Sun lit up the bottom of a well, while in Alexandria a stick cast a shadow of about <b>7°</b>. Knowing the distance between the two cities, he calculated the Earth's circumference: about <b>250,000 stadia</b>, a value very close to the real one. More than 2200 years ago, without satellites!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know… the point furthest from the centre of the Earth is not Everest?",
   "html": "<p>Because the Earth bulges at the equator, the point furthest from the centre of the Earth is the top of the <b>Chimborazo</b> volcano in Ecuador (6263 m), almost on the equator: it is about 2 km \"further\" from the centre than the top of Everest, even though it is lower above sea level.</p>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand the planet",
   "intro": "Coordinates, time zones and climates can seem abstract: try these.",
   "tabs": [
    {
     "label": "🍊 Analogy: the orange",
     "html": "<p>Take an orange and a marker pen.</p>\n<ul>\n<li>Draw a line around its \"belly\": that is the <b>equator</b>.</li>\n<li>Draw other smaller circles above and below: those are the <b>parallels</b>.</li>\n<li>Now follow the \"segments\" from one pole to the other: those are the <b>meridians</b>! Each segment 15° wide corresponds to one hour of time zone.</li>\n</ul>\n<p>Try peeling the orange and flattening the peel: it tears. That is why <b>no world map is perfect</b>: they all distort something (in the Mercator projection Greenland looks as big as Africa, which is actually about 14 times larger!).</p>"
    },
    {
     "label": "🔦 Experiment: the torch",
     "html": "<p>In the dark, point a torch <b>straight down</b> at a sheet of paper: you see a small, very bright circle (like at the equator). Now tilt the torch: the light spreads out into a large, dimmer ellipse (like at the poles). <b>The same energy spread over a larger surface heats less</b>: this is the first factor of climate.</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#1e293b\"/>\n<rect x=\"40\" y=\"180\" width=\"520\" height=\"30\" fill=\"#e2e8f0\"/>\n<rect x=\"120\" y=\"20\" width=\"40\" height=\"70\" rx=\"6\" fill=\"#f59e0b\"/>\n<polygon points=\"125,90 155,90 175,180 105,180\" fill=\"#fde047\" opacity=\"0.85\"/>\n<text x=\"140\" y=\"230\" font-size=\"16\" fill=\"#fde047\" text-anchor=\"middle\" font-weight=\"bold\">Equator: concentrated light</text>\n<rect x=\"380\" y=\"30\" width=\"40\" height=\"70\" rx=\"6\" fill=\"#f59e0b\" transform=\"rotate(-45 400 65)\"/>\n<polygon points=\"420,95 440,110 560,180 340,180\" fill=\"#fde047\" opacity=\"0.4\"/>\n<text x=\"450\" y=\"230\" font-size=\"16\" fill=\"#fde047\" text-anchor=\"middle\" font-weight=\"bold\">Poles: spread-out light</text>\n</svg>"
    },
    {
     "label": "🧩 Game: match climate and environment",
     "html": "<p>Each climate has its typical environment. Match them up.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "Equatorial",
        "Rainforest"
       ],
       [
        "Tropical wet and dry",
        "Savanna"
       ],
       [
        "Arid",
        "Desert"
       ],
       [
        "Mediterranean",
        "Mediterranean scrub"
       ],
       [
        "Cold continental",
        "Taiga"
       ],
       [
        "Polar",
        "Tundra and ice"
       ]
      ]
     }
    },
    {
     "label": "🗺️ How the world counts",
     "html": "<p>The number of continents depends on the country where you go to school!</p>\n<ul>\n<li><b>Italy</b>: usually 6 (Europe, Asia, Africa, America, Oceania, Antarctica), with America sometimes split in two.</li>\n<li><b>USA, China, India, United Kingdom</b>: 7 (North and South America separate).</li>\n<li><b>Many Latin American countries, Spain, Greece</b>: often 6, with a single America.</li>\n<li><b>Olympic symbol</b>: 5 rings = 5 inhabited continents (Antarctica excluded, America united).</li>\n</ul>\n<p>It is not a question of right or wrong: it is a <b>convention</b>, that is, an agreement between people.</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of the planet: tap the nodes and find out why",
   "nodes": [
    {
     "id": "sfera",
     "label": "Spherical Earth",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "A sphere slightly flattened at the poles, radius about 6371 km.",
     "why": "Aristotle (4th century BC) already noticed the round shadow of the Earth on the Moon during eclipses; Eratosthenes measured it; Newton understood that rotation \"flattens\" it at the poles, and the French expeditions of 1735–1744 confirmed it."
    },
    {
     "id": "rotazione",
     "label": "Rotation",
     "x": 15,
     "y": 25,
     "color": "#0ea5e9",
     "html": "One turn on its axis in about 24 hours.",
     "why": "Spectacularly demonstrated by the French physicist Léon Foucault in 1851, with a huge pendulum hanging in the Panthéon in Paris that slowly changes direction."
    },
    {
     "id": "rivoluzione",
     "label": "Revolution and tilted axis",
     "x": 85,
     "y": 25,
     "color": "#f59e0b",
     "html": "One orbit around the Sun in about 365 days; axis tilted by about 23.5°.",
     "why": "Copernicus (1543) proposed that the Earth goes around the Sun; Galileo and Kepler confirmed it. The tilt of the axis changes the height of the Sun during the year: that is why we have seasons."
    },
    {
     "id": "reticolo",
     "label": "Geographic grid",
     "x": 15,
     "y": 50,
     "color": "#a855f7",
     "html": "Parallels, meridians, latitude and longitude.",
     "why": "The grid was already used by Ptolemy (2nd century AD). The prime meridian was fixed at Greenwich in 1884, at the International Conference in Washington, because most nautical charts already used Greenwich."
    },
    {
     "id": "fusi",
     "label": "Time zones",
     "x": 15,
     "y": 78,
     "color": "#6366f1",
     "html": "24 time zones of 15° each.",
     "why": "With the railways of the 19th century, every town had its own solar time and train timetables were chaos: that is why standard time zones were adopted."
    },
    {
     "id": "placche",
     "label": "Tectonic plates",
     "x": 50,
     "y": 40,
     "color": "#b45309",
     "html": "The crust is divided into slowly moving plates.",
     "why": "Wegener (1912) noticed that the coasts of Africa and South America fit together like puzzle pieces and that the same fossils are found on both. In the 1960s, studies of the ocean floor proved that the plates move."
    },
    {
     "id": "continenti",
     "label": "Continents and oceans",
     "x": 50,
     "y": 66,
     "color": "#16a34a",
     "html": "6 (or 7) continents, 5 oceans; 29% land, 71% water.",
     "why": "They are the result of hundreds of millions of years of plate movement: once all the land was joined together in Pangaea."
    },
    {
     "id": "fattori",
     "label": "Factors of climate",
     "x": 85,
     "y": 50,
     "color": "#ef4444",
     "html": "Latitude, altitude, sea, currents, winds, landforms.",
     "why": "They all depend on how the Sun's energy arrives and is distributed: the lower the angle of the rays, the less heat; air at altitude is thin and holds less heat; water has a great capacity to store heat."
    },
    {
     "id": "climi",
     "label": "Climates and environments",
     "x": 85,
     "y": 78,
     "color": "#22c55e",
     "html": "Equatorial, arid, temperate, cold, polar.",
     "why": "The most widely used classification is by Wladimir Köppen, based on temperature, rainfall and vegetation: plants are the best \"thermometer\" of climate."
    },
    {
     "id": "uomo",
     "label": "Population",
     "x": 50,
     "y": 92,
     "color": "#ec4899",
     "html": "Over 8 billion people, very unevenly distributed.",
     "why": "People live mainly where climate, water and plains allow farming: temperate zones and the great river valleys of Asia. Deserts, poles and high mountains are almost empty."
    }
   ],
   "edges": [
    [
     "sfera",
     "rotazione",
     "performs"
    ],
    [
     "sfera",
     "rivoluzione",
     "performs"
    ],
    [
     "rotazione",
     "reticolo",
     "axis and poles →"
    ],
    [
     "reticolo",
     "fusi",
     "15° = 1 hour"
    ],
    [
     "rivoluzione",
     "fattori",
     "seasons →"
    ],
    [
     "sfera",
     "placche",
     "crust divided into"
    ],
    [
     "placche",
     "continenti",
     "form"
    ],
    [
     "fattori",
     "climi",
     "determine"
    ],
    [
     "continenti",
     "uomo",
     "are home to the"
    ],
    [
     "climi",
     "uomo",
     "influence the"
    ]
   ]
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li>The Earth is a sphere flattened at the poles; <b>71% water</b>, <b>29% land</b>.</li>\n<li><b>Rotation</b> (24 h) → day and night; <b>revolution</b> (365 days) + tilted axis → seasons.</li>\n<li><b>Latitude</b> (parallels, from 0° to 90° N/S) and <b>longitude</b> (meridians, from 0° to 180° E/W, from Greenwich).</li>\n<li>Continents: Asia, America, Africa, Antarctica, Europe, Oceania. Oceans: Pacific, Atlantic, Indian, Southern, Arctic.</li>\n<li>Factors of climate: latitude, altitude, sea, currents, winds. Climates: equatorial, arid, temperate, cold, polar.</li>\n</ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: continents and climates",
   "questions": [
    {
     "type": "mc",
     "q": "Which is the largest ocean?",
     "options": [
      "Atlantic",
      "Indian",
      "Pacific"
     ],
     "answer": 2,
     "explain": "The Pacific, larger than all the land put together."
    },
    {
     "type": "tf",
     "q": "Going up a mountain, the temperature drops by about 0.6 °C every 100 m.",
     "answer": true,
     "explain": "This is the average vertical temperature gradient."
    },
    {
     "type": "mc",
     "q": "In which climate zone is the taiga found?",
     "options": [
      "Equatorial",
      "Cold continental",
      "Arid"
     ],
     "answer": 1,
     "explain": "The taiga is the coniferous forest of the cold continental climate."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Geoid",
   "d": "The real shape of the Earth: a sphere slightly flattened at the poles and irregular."
  },
  {
   "t": "Latitude",
   "d": "Angular distance of a point from the equator (0°–90° N or S)."
  },
  {
   "t": "Longitude",
   "d": "Angular distance of a point from the Greenwich meridian (0°–180° E or W)."
  },
  {
   "t": "Time zone",
   "d": "A segment about 15° of longitude wide with the same standard time."
  },
  {
   "t": "Tropics",
   "d": "Parallels at about 23.5° N (Cancer) and S (Capricorn): the Sun can be directly overhead only between them."
  },
  {
   "t": "Tectonic plate",
   "d": "A large rigid piece of the Earth's crust that moves slowly."
  },
  {
   "t": "Pangaea",
   "d": "A single supercontinent that existed about 300–200 million years ago."
  },
  {
   "t": "Climate",
   "d": "The average weather conditions of a place, calculated over at least 30 years."
  },
  {
   "t": "Ocean current",
   "d": "A great \"river\" of water inside the oceans, warm or cold."
  },
  {
   "t": "Taiga",
   "d": "Coniferous forest of regions with a cold continental climate."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Which movement of the Earth causes day and night?",
    "options": [
     "Revolution",
     "Rotation",
     "Continental drift"
    ],
    "answer": 1,
    "explain": "Rotation on its axis in about 24 hours."
   },
   {
    "type": "mc",
    "q": "Why do we have seasons?",
    "options": [
     "Because in summer the Earth is closer to the Sun",
     "Because the Earth's axis is tilted",
     "Because the Moon covers the Sun"
    ],
    "answer": 1,
    "explain": "The tilt of the axis (about 23.5°) changes the angle of the Sun's rays during the year. In fact, the Earth is closest to the Sun in January!"
   },
   {
    "type": "text",
    "q": "Through which place does the prime meridian (0°) pass?",
    "answer": [
     "greenwich"
    ],
    "explain": "Through the Greenwich observatory, near London."
   },
   {
    "type": "num",
    "q": "What is the latitude of the North Pole, in degrees?",
    "answer": 90,
    "tol": 0,
    "unit": "°",
    "explain": "The poles are at 90° N and 90° S."
   },
   {
    "type": "mc",
    "q": "Which is the largest and most populated continent?",
    "options": [
     "Africa",
     "America",
     "Asia"
    ],
    "answer": 2,
    "explain": "Asia: about 44.6 million km² and 4.8 billion inhabitants."
   },
   {
    "type": "tf",
    "q": "Antarctica has a permanent population of many millions of people.",
    "answer": false,
    "explain": "Only scientists live in Antarctica, in research bases, for limited periods."
   },
   {
    "type": "mc",
    "q": "Who proposed the theory of continental drift in 1912?",
    "options": [
     "Alfred Wegener",
     "Galileo Galilei",
     "Wladimir Köppen"
    ],
    "answer": 0,
    "explain": "The German geophysicist Alfred Wegener."
   },
   {
    "type": "order",
    "q": "Put the climates in order going from the equator towards the pole.",
    "items": [
     "Equatorial",
     "Arid (tropical)",
     "Temperate",
     "Cold continental",
     "Polar"
    ],
    "explain": "Moving away from the equator, the Sun's rays strike at an ever lower angle and it gets colder and colder."
   },
   {
    "type": "mc",
    "q": "Why is London milder than Montréal in winter, even though it is further north?",
    "options": [
     "Because it is a bigger city",
     "Because of the influence of the Atlantic and the Gulf Stream",
     "Because it is higher above sea level"
    ],
    "answer": 1,
    "explain": "The sea and the warm current make the climate of north-western Europe milder."
   },
   {
    "type": "num",
    "q": "It is 12:00 in Rome. What time is it in New York (6 hours behind)?",
    "answer": 6,
    "tol": 0,
    "explain": "12 − 6 = 6: it is 6 in the morning."
   },
   {
    "type": "tf",
    "q": "Climate is the weather we have today.",
    "answer": false,
    "explain": "Weather is what happens at the moment; climate is the average over at least 30 years."
   },
   {
    "type": "text",
    "q": "What is the name of the single supercontinent of about 300 million years ago?",
    "answer": [
     "pangaea",
     "pangea"
    ],
    "explain": "Pangaea, which means \"all the earth\"."
   }
  ]
 }
});
