TOPIC('en', {
 "id": "p3-geo-mare-coste",
 "title": "The sea and the coasts",
 "intro": "Where land meets the sea, lots of different shapes appear: islands, gulfs, peninsulas, straits… Their names are a bit difficult, but today we'll learn to recognise them by <b>turning a 3D landscape</b> and looking for them on the map of Italy and of the world.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "What is the coast?",
   "html": "<p>The <b>coast</b> is the strip of land that touches the sea. The exact line where the water meets the land is called the <b>coastline</b>.</p>\n<ul>\n<li><b>High coast</b> (rocky): the land ends with steep walls, the <b>cliffs</b>. The sea is deep straight away. Example: the Cinque Terre in Liguria, the Amalfi Coast.</li>\n<li><b>Low coast</b> (sandy): the land slopes gently into the sea and forms long <b>beaches</b>. Example: the Romagna Riviera.</li>\n</ul>\n<p>The sea is always working on the coast: <b>waves</b> wear away the rocks (erosion) and carry sand from one place to another (deposition).</p>"
  },
  {
   "type": "3d",
   "title": "The coastal landscape in 3D",
   "scene": "terrain",
   "caption": "Turn the landscape and tap each label: the part lights up. Try to find all 13!",
   "options": {
    "features": {
     "sea": {
      "label": "Sea",
      "html": "A big stretch of salt water. Italy is surrounded by the Mediterranean Sea."
     },
     "coast": {
      "label": "Coast",
      "html": "The strip of land bordering the sea. It can be <b>high</b> (cliffs) or <b>low</b> (beaches)."
     },
     "beach": {
      "label": "Beach",
      "html": "A stretch of low coast covered with sand or pebbles, brought by the waves and the rivers."
     },
     "island": {
      "label": "Island",
      "html": "Land surrounded <b>on every side</b> by water. The largest in Italy (and in the Mediterranean) is <b>Sicily</b>."
     },
     "archipelago": {
      "label": "Archipelago",
      "html": "A <b>group of islands</b> close to each other. Examples: the <b>Aeolian Islands</b>, the Tuscan Archipelago, La Maddalena."
     },
     "peninsula": {
      "label": "Peninsula",
      "html": "Land surrounded by water <b>on three sides</b> and joined to the mainland on the fourth. <b>Italy</b> is a boot-shaped peninsula!"
     },
     "cape": {
      "label": "Cape (promontory)",
      "html": "A point of land sticking out into the sea. If it is high and rocky it is also called a <b>promontory</b>, like the Gargano (the \"spur\" of the boot)."
     },
     "gulf": {
      "label": "Gulf",
      "html": "A <b>large</b> inlet: the sea goes into the land, forming a wide curve. Example: the <b>Gulf of Naples</b>."
     },
     "bay": {
      "label": "Bay",
      "html": "A <b>small</b> inlet, like a mini gulf, often sheltered from the wind: great for boats."
     },
     "isthmus": {
      "label": "Isthmus",
      "html": "A <b>narrow strip of land</b> that joins two larger lands and separates two seas. Examples: the Isthmus of <b>Corinth</b> in Greece, the Isthmus of <b>Panama</b>."
     },
     "strait": {
      "label": "Strait",
      "html": "A <b>narrow passage of sea</b> between two lands, linking two seas. The opposite of an isthmus! Example: the <b>Strait of Messina</b> between Sicily and Calabria."
     },
     "lagoon": {
      "label": "Lagoon",
      "html": "A shallow stretch of salt water, separated from the sea by strips of sand (sandbars). Example: the <b>Venetian Lagoon</b>."
     },
     "delta": {
      "label": "Delta",
      "html": "The mouth of a river that splits into many branches, in a triangle shape, because the river drops lots of sediment. The name comes from the Greek letter Δ. Example: the <b>Po Delta</b>."
     }
    }
   }
  },
  {
   "type": "svg",
   "title": "Island, peninsula, isthmus, strait: the differences",
   "caption": "Look carefully at where the water is (light blue) and where the land is (green).",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"600\" height=\"300\" fill=\"#7dd3fc\"/>\n<g>\n<ellipse cx=\"80\" cy=\"120\" rx=\"50\" ry=\"35\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"2\"/>\n<text x=\"80\" y=\"200\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">ISLAND</text>\n<text x=\"80\" y=\"222\" font-size=\"13\" text-anchor=\"middle\" fill=\"#0c4a6e\">water all around</text>\n</g>\n<g>\n<rect x=\"160\" y=\"20\" width=\"130\" height=\"50\" fill=\"#4ade80\"/>\n<path d=\"M200,70 L250,70 L240,150 L210,150 Z\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"2\"/>\n<text x=\"225\" y=\"200\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">PENINSULA</text>\n<text x=\"225\" y=\"222\" font-size=\"13\" text-anchor=\"middle\" fill=\"#0c4a6e\">water on 3 sides</text>\n</g>\n<g>\n<circle cx=\"345\" cy=\"70\" r=\"35\" fill=\"#4ade80\"/>\n<rect x=\"337\" y=\"100\" width=\"16\" height=\"45\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"2\"/>\n<circle cx=\"345\" cy=\"170\" r=\"30\" fill=\"#4ade80\"/>\n<text x=\"345\" y=\"235\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">ISTHMUS</text>\n<text x=\"345\" y=\"257\" font-size=\"13\" text-anchor=\"middle\" fill=\"#0c4a6e\">narrow land between two seas</text>\n</g>\n<g>\n<rect x=\"430\" y=\"40\" width=\"65\" height=\"130\" fill=\"#4ade80\"/>\n<rect x=\"520\" y=\"40\" width=\"65\" height=\"130\" fill=\"#4ade80\"/>\n<rect x=\"495\" y=\"40\" width=\"25\" height=\"130\" fill=\"#0284c7\"/>\n<text x=\"508\" y=\"200\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">STRAIT</text>\n<text x=\"508\" y=\"222\" font-size=\"13\" text-anchor=\"middle\" fill=\"#0c4a6e\">narrow sea between two lands</text>\n</g>\n</svg>"
  },
  {
   "type": "remember",
   "title": "Pairs of \"opposites\"",
   "html": "<ul>\n<li><b>Isthmus ↔ Strait</b>: an isthmus is narrow land between two waters; a strait is narrow water between two lands.</li>\n<li><b>Cape ↔ Gulf</b>: a cape is land going into the sea; a gulf is sea going into the land.</li>\n<li><b>Island ↔ Lake</b>: an island is land surrounded by water; a lake is water surrounded by land.</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Practical example: Italy is a catalogue of shapes!",
   "html": "<p>Take a map of Italy and look for:</p>\n<ul>\n<li>The <b>peninsula</b>: the whole boot-shaped Italy.</li>\n<li>The main <b>islands</b>: <b>Sicily</b> and <b>Sardinia</b>.</li>\n<li>An <b>archipelago</b>: the <b>Aeolian Islands</b> (Lipari, Vulcano, Stromboli, Salina, Panarea, Filicudi, Alicudi).</li>\n<li>A <b>gulf</b>: the Gulf of Naples, the Gulf of Taranto (under the boot).</li>\n<li>A <b>promontory</b>: the Gargano, the \"spur\".</li>\n<li>A <b>strait</b>: the Strait of Messina, only about 3 km wide at its narrowest point.</li>\n<li>A <b>lagoon</b>: the Venetian Lagoon. A <b>delta</b>: the Po Delta.</li>\n</ul>"
  },
  {
   "type": "3d",
   "title": "Find real examples on the globe",
   "scene": "globe",
   "caption": "Turn the globe: the orange dots are real examples of islands, straits, isthmuses, gulfs, lagoons and deltas.",
   "options": {
    "points": [
     {
      "lat": 37.6,
      "lon": 14,
      "label": "Sicily (island)"
     },
     {
      "lat": 38.5,
      "lon": 14.95,
      "label": "Aeolian Islands (archipelago)"
     },
     {
      "lat": 42.5,
      "lon": 12.8,
      "label": "Italian peninsula"
     },
     {
      "lat": 40.75,
      "lon": 14.2,
      "label": "Gulf of Naples"
     },
     {
      "lat": 38.2,
      "lon": 15.6,
      "label": "Strait of Messina"
     },
     {
      "lat": 41.8,
      "lon": 15.95,
      "label": "Gargano (promontory)"
     },
     {
      "lat": 45.4,
      "lon": 12.33,
      "label": "Venetian Lagoon"
     },
     {
      "lat": 44.95,
      "lon": 12.45,
      "label": "Po Delta"
     },
     {
      "lat": 37.93,
      "lon": 22.98,
      "label": "Isthmus of Corinth"
     },
     {
      "lat": 9.1,
      "lon": -79.7,
      "label": "Isthmus of Panama"
     },
     {
      "lat": 35.95,
      "lon": -5.6,
      "label": "Strait of Gibraltar"
     }
    ]
   }
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: island or peninsula?",
   "questions": [
    {
     "type": "mc",
     "q": "Land surrounded by water on all sides is…",
     "options": [
      "a peninsula",
      "an island",
      "an isthmus"
     ],
     "answer": 1,
     "explain": "An island has water all around."
    },
    {
     "type": "mc",
     "q": "A group of islands close together is called…",
     "options": [
      "an archipelago",
      "a gulf",
      "a delta"
     ],
     "answer": 0,
     "explain": "An archipelago, like the Aeolian Islands."
    },
    {
     "type": "tf",
     "q": "Italy is a peninsula.",
     "answer": true,
     "explain": "It's surrounded by sea on three sides and joined to Europe in the north."
    }
   ]
  },
  {
   "type": "widget",
   "title": "Game: match the shape to its definition",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "Island",
      "Land with water all around"
     ],
     [
      "Peninsula",
      "Land with water on three sides"
     ],
     [
      "Isthmus",
      "Strip of land between two seas"
     ],
     [
      "Strait",
      "Arm of sea between two lands"
     ],
     [
      "Gulf",
      "Large inlet of the sea"
     ],
     [
      "Cape",
      "Point of land in the sea"
     ],
     [
      "Lagoon",
      "Shallow water separated from the sea by sandbars"
     ],
     [
      "Delta",
      "River mouth with many branches"
     ]
    ]
   }
  },
  {
   "type": "widget",
   "title": "Game: land or water?",
   "widget": "classify",
   "caption": "Some shapes are \"pieces of land\", others are \"pieces of water\". Put them in the right group.",
   "options": {
    "groups": [
     "🟩 It's made of land",
     "🟦 It's made of water"
    ],
    "items": [
     [
      "island",
      0
     ],
     [
      "peninsula",
      0
     ],
     [
      "isthmus",
      0
     ],
     [
      "cape",
      0
     ],
     [
      "promontory",
      0
     ],
     [
      "strait",
      1
     ],
     [
      "gulf",
      1
     ],
     [
      "bay",
      1
     ],
     [
      "lagoon",
      1
     ],
     [
      "lake",
      1
     ]
    ]
   }
  },
  {
   "type": "curiosity",
   "title": "Did you know… in Venice houses stand on millions of poles?",
   "html": "<p>Venice is built on more than 100 small islands in the <b>lagoon</b>. The ground is soft mud, so the Venetians drove <b>millions of wooden poles</b> into the bottom, one next to the other, and built the houses on top. Underwater, without air, the wood doesn't rot: some poles have been there for more than a thousand years!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know… the Aeolian Islands are volcanoes?",
   "html": "<p>The islands of the <b>Aeolian</b> archipelago are the tops of volcanoes rising out of the sea. <b>Stromboli</b> has been active for thousands of years and throws out lava bits every few minutes: ancient sailors called it \"the lighthouse of the Mediterranean\" because at night it could be seen glowing from far away.</p>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand it",
   "intro": "If you mix up all these words, try these tricks.",
   "tabs": [
    {
     "label": "🛁 In the bathtub",
     "html": "<p>Put a little water in the bath (or a bowl) and put different objects in it:</p>\n<ul>\n<li>A <b>sponge</b> floating away from the edges: it's an <b>island</b>.</li>\n<li>Lots of little sponges close together: an <b>archipelago</b>.</li>\n<li>Your <b>arm</b> resting on the edge and going into the water: a <b>peninsula</b>; your fingertips are the <b>cape</b>.</li>\n<li>The water between two open fingers: a <b>strait</b>.</li>\n</ul>"
    },
    {
     "label": "🔤 From the words",
     "html": "<p>Many names come from Latin and Greek and already contain the explanation:</p>\n<ul>\n<li><b>Peninsula</b> = from the Latin <i>paene insula</i>, \"<b>almost</b> an island\".</li>\n<li><b>Archipelago</b> = from Greek, \"chief sea\": it was the name of the Aegean Sea, full of islands.</li>\n<li><b>Delta</b> = the Greek letter <b>Δ</b>, a triangle, like the shape of the river mouth.</li>\n<li><b>Cape</b> = \"head\" (from Latin <i>caput</i>): the head of the land sticking out into the sea.</li>\n</ul>"
    },
    {
     "label": "🗺️ Drawing from above",
     "html": "<p>Draw from above with two colours: <b>green</b> for land, <b>light blue</b> for water. Then ask yourself: <i>who surrounds whom?</i></p>\n<ul>\n<li>Green surrounded by blue → island.</li>\n<li>Blue surrounded by green → lake.</li>\n<li>Thin green strip → isthmus. Thin blue strip → strait.</li>\n</ul>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"290\" height=\"220\" fill=\"#7dd3fc\"/>\n<ellipse cx=\"145\" cy=\"105\" rx=\"80\" ry=\"55\" fill=\"#4ade80\"/>\n<text x=\"145\" y=\"112\" font-size=\"18\" text-anchor=\"middle\" fill=\"#14532d\" font-weight=\"bold\">ISLAND</text>\n<rect x=\"310\" y=\"0\" width=\"290\" height=\"220\" fill=\"#4ade80\"/>\n<ellipse cx=\"455\" cy=\"105\" rx=\"80\" ry=\"55\" fill=\"#38bdf8\"/>\n<text x=\"455\" y=\"112\" font-size=\"18\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">LAKE</text>\n</svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map: how coastal shapes are formed",
   "nodes": [
    {
     "id": "mare",
     "label": "Sea and land",
     "x": 50,
     "y": 8,
     "color": "#0ea5e9",
     "html": "Coastal shapes appear where they meet.",
     "why": "The coastline never stands still: the sea wears it away or extends it, the sea level rises and falls, rivers bring sediment. The shapes we see are a \"snapshot\" of this endless work."
    },
    {
     "id": "onde",
     "label": "Wave erosion",
     "x": 18,
     "y": 35,
     "color": "#ef4444",
     "html": "Waves wear away the rocks.",
     "why": "Every wave hits the rock hard and throws sand and stones like little hammers. Soft rocks wear away faster than hard ones: that's how gulfs form (where the rock was soft) and capes (where it was hard)."
    },
    {
     "id": "deposito",
     "label": "Sand deposition",
     "x": 50,
     "y": 35,
     "color": "#eab308",
     "html": "Rivers and currents carry and drop sand.",
     "why": "When water slows down it can no longer carry the sand and drops it. That's how beaches, sandbars, lagoons and deltas form."
    },
    {
     "id": "livello",
     "label": "Sea level and volcanoes",
     "x": 82,
     "y": 35,
     "color": "#a855f7",
     "html": "The sea rises and falls, volcanoes create new land.",
     "why": "During the last ice age (about 20,000 years ago) the sea was more than 100 metres lower: many of today's islands were hills joined to the mainland. When the ice melted, the sea rose and surrounded them."
    },
    {
     "id": "golfo",
     "label": "Gulfs and capes",
     "x": 12,
     "y": 68,
     "color": "#f97316",
     "html": "Inlets and points of land.",
     "why": "They come from uneven erosion: soft rocks retreat (gulf), hard ones resist and stick out (cape)."
    },
    {
     "id": "spiaggia",
     "label": "Beaches and lagoons",
     "x": 40,
     "y": 68,
     "color": "#facc15",
     "html": "Low, sandy coasts.",
     "why": "The deposited sand forms long sandbars; if a sandbar closes off a stretch of sea, a lagoon forms behind it, as in Venice."
    },
    {
     "id": "delta",
     "label": "Delta",
     "x": 62,
     "y": 88,
     "color": "#22c55e",
     "html": "A river mouth with many branches.",
     "why": "It forms when the river brings more sediment than the sea can carry away: the mouth moves forward and the river splits into branches."
    },
    {
     "id": "isola",
     "label": "Islands and archipelagos",
     "x": 85,
     "y": 68,
     "color": "#16a34a",
     "html": "Lands surrounded by the sea.",
     "why": "They can be pieces of a continent cut off by the rising sea (like Sardinia), or tops of volcanoes born from the sea floor (like the Aeolian Islands)."
    }
   ],
   "edges": [
    [
     "mare",
     "onde",
     "wears away"
    ],
    [
     "mare",
     "deposito",
     "carries"
    ],
    [
     "mare",
     "livello",
     "changes"
    ],
    [
     "onde",
     "golfo",
     "carves"
    ],
    [
     "deposito",
     "spiaggia",
     "forms"
    ],
    [
     "deposito",
     "delta",
     "forms"
    ],
    [
     "livello",
     "isola",
     "separates / creates"
    ]
   ]
  },
  {
   "type": "example",
   "title": "Practical example: why do ships go through straits and canals?",
   "html": "<p>A ship going from Genoa to Venice could sail all the way round Sicily, but by going through the <b>Strait of Messina</b> it saves many kilometres.</p>\n<p>Sometimes people have even <b>cut through an isthmus</b> to make a canal: the <b>Corinth Canal</b> (1893) cuts the Isthmus of Corinth, and the <b>Panama Canal</b> (1914) joins the Atlantic and the Pacific Oceans. Before that, ships had to sail around the whole of South America!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: water shapes",
   "questions": [
    {
     "type": "mc",
     "q": "The Strait of Messina separates…",
     "options": [
      "Sardinia and Corsica",
      "Sicily and Calabria",
      "Italy and Greece"
     ],
     "answer": 1,
     "explain": "It separates Sicily from Calabria and joins the Tyrrhenian and Ionian Seas."
    },
    {
     "type": "mc",
     "q": "A small, sheltered inlet is…",
     "options": [
      "a bay",
      "a cape",
      "an isthmus"
     ],
     "answer": 0,
     "explain": "A bay is like a small gulf."
    },
    {
     "type": "tf",
     "q": "The delta is named after a Greek letter.",
     "answer": true,
     "explain": "The letter Δ, shaped like a triangle."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Coast",
   "d": "Strip of land bordering the sea; it can be high or low."
  },
  {
   "t": "Island",
   "d": "Land surrounded by water on every side."
  },
  {
   "t": "Archipelago",
   "d": "Group of islands close together."
  },
  {
   "t": "Peninsula",
   "d": "Land surrounded by water on three sides."
  },
  {
   "t": "Cape / promontory",
   "d": "Point of land sticking out into the sea (a promontory is high)."
  },
  {
   "t": "Gulf",
   "d": "Wide inlet of the sea."
  },
  {
   "t": "Bay",
   "d": "Small, sheltered inlet."
  },
  {
   "t": "Isthmus",
   "d": "Narrow strip of land joining two lands and separating two seas."
  },
  {
   "t": "Strait",
   "d": "Narrow arm of sea separating two lands and joining two seas."
  },
  {
   "t": "Lagoon",
   "d": "Shallow salt water separated from the sea by sandbars."
  },
  {
   "t": "Delta",
   "d": "River mouth split into several branches in a triangle shape."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Land surrounded by water on three sides is…",
    "options": [
     "an island",
     "a peninsula",
     "a gulf"
    ],
    "answer": 1,
    "explain": "Peninsula = \"almost an island\"."
   },
   {
    "type": "mc",
    "q": "What is the largest island in the Mediterranean?",
    "options": [
     "Sardinia",
     "Sicily",
     "Corsica"
    ],
    "answer": 1,
    "explain": "Sicily, about 25,700 km²."
   },
   {
    "type": "mc",
    "q": "The strip of land joining two lands and separating two seas is…",
    "options": [
     "a strait",
     "an isthmus",
     "a lagoon"
    ],
    "answer": 1,
    "explain": "An isthmus, like the one in Panama."
   },
   {
    "type": "tf",
    "q": "A strait is a passage of sea between two lands.",
    "answer": true,
    "explain": "Example: the Strait of Messina, the Strait of Gibraltar."
   },
   {
    "type": "text",
    "q": "What do you call a group of islands close together?",
    "answer": [
     "archipelago",
     "an archipelago"
    ],
    "explain": "An archipelago, like the Aeolian Islands."
   },
   {
    "type": "mc",
    "q": "A coast with steep cliffs is…",
    "options": [
     "a high coast",
     "a low coast",
     "a delta"
    ],
    "answer": 0,
    "explain": "A high coast is rocky and steep."
   },
   {
    "type": "mc",
    "q": "Venice stands in…",
    "options": [
     "a delta",
     "a lagoon",
     "a strait"
    ],
    "answer": 1,
    "explain": "The Venetian Lagoon, separated from the sea by sandbars."
   },
   {
    "type": "mc",
    "q": "The Gargano is…",
    "options": [
     "a promontory",
     "an archipelago",
     "a lagoon"
    ],
    "answer": 0,
    "explain": "It's the \"spur\" of the boot: a promontory."
   },
   {
    "type": "tf",
    "q": "A gulf is land going into the sea.",
    "answer": false,
    "explain": "It's the opposite: a gulf is sea going into the land. Land going into the sea is a cape."
   },
   {
    "type": "mc",
    "q": "The Po Delta is on which sea?",
    "options": [
     "Tyrrhenian",
     "Adriatic",
     "Ionian"
    ],
    "answer": 1,
    "explain": "The Po flows into the Adriatic, between Veneto and Emilia-Romagna."
   },
   {
    "type": "mc",
    "q": "Why does a delta form?",
    "options": [
     "Because the river drops lots of sediment at its mouth",
     "Because waves carve the rock",
     "Because there's a volcano"
    ],
    "answer": 0,
    "explain": "The sediment piles up and the river splits into many branches."
   }
  ]
 }
});
