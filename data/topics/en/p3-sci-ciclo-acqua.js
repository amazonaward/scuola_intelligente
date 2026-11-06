TOPIC('en', {
 "id": "p3-sci-ciclo-acqua",
 "title": "The water cycle",
 "intro": "The Earth's water is never used up: it travels endlessly between sea, sky and land. This never-ending journey is called the <b>water cycle</b>.",
 "minutes": 25,
 "sections": [
  {
   "type": "text",
   "title": "Water changes form",
   "html": "<p>Water can be found in <b>three states</b>:</p>\n<ul>\n<li><b>Solid</b>: ice, snow, hail. It has its own shape.</li>\n<li><b>Liquid</b>: water from the tap, rivers and the sea. It takes the shape of its container.</li>\n<li><b>Gas</b>: water vapour. It's invisible and spreads through the air.</li>\n</ul>\n<p>What changes the state of water is <b>heat</b>: when heated, ice melts and water evaporates; when cooled, vapour turns back into liquid and water freezes.</p>"
  },
  {
   "type": "3d",
   "title": "What is a drop of water made of?",
   "scene": "molecule",
   "options": {
    "atoms": [
     {
      "x": 0,
      "y": 0,
      "z": 0,
      "r": 0.6,
      "color": "#ef4444",
      "label": "O (oxygen)"
     },
     {
      "x": 0.75,
      "y": -0.55,
      "z": 0,
      "r": 0.38,
      "color": "#f8fafc",
      "label": "H (hydrogen)"
     },
     {
      "x": -0.75,
      "y": -0.55,
      "z": 0,
      "r": 0.38,
      "color": "#f8fafc",
      "label": "H (hydrogen)"
     }
    ],
    "bonds": [
     [
      0,
      1
     ],
     [
      0,
      2
     ]
    ]
   },
   "caption": "Every drop of water is made of billions of tiny H₂O molecules: one oxygen atom and two hydrogen atoms. Turn it!"
  },
  {
   "type": "text",
   "title": "The stages of the journey",
   "html": "<ol>\n<li><b>Evaporation</b>: the Sun heats the water in seas, lakes and rivers. Some of it turns into <b>vapour</b> and rises into the sky. Plants also \"sweat\" vapour from their leaves (<b>transpiration</b>).</li>\n<li><b>Condensation</b>: high up it's cold. The vapour cools down and turns into tiny droplets: <b>clouds</b> are born.</li>\n<li><b>Precipitation</b>: the droplets join together, get heavy and fall as <b>rain</b>, or as <b>snow</b> or <b>hail</b> if it's very cold.</li>\n<li><b>Runoff and infiltration</b>: the fallen water flows in rivers to the sea, or soaks into the ground and forms underground <b>aquifers</b>.</li>\n</ol>\n<p>Then the Sun heats the water again… and the cycle starts all over!</p>"
  },
  {
   "type": "svg",
   "title": "The water cycle",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#e0f2fe\"/>\n<circle cx=\"540\" cy=\"55\" r=\"35\" fill=\"#facc15\"/>\n<path d=\"M0 230 L170 110 L300 230z\" fill=\"#78716c\"/>\n<path d=\"M140 132 L170 110 L200 132 L185 140 L170 128 L155 140z\" fill=\"#ffffff\"/>\n<rect y=\"230\" width=\"600\" height=\"90\" fill=\"#65a30d\"/>\n<path d=\"M330 320 L330 250 Q450 225 600 245 L600 320z\" fill=\"#2563eb\"/>\n<path d=\"M200 200 Q240 240 330 255\" stroke=\"#3b82f6\" stroke-width=\"10\" fill=\"none\"/>\n<ellipse cx=\"190\" cy=\"65\" rx=\"70\" ry=\"28\" fill=\"#94a3b8\"/>\n<ellipse cx=\"240\" cy=\"55\" rx=\"55\" ry=\"25\" fill=\"#cbd5e1\"/>\n<path d=\"M150 100 l-6 16 M180 100 l-6 16 M210 100 l-6 16 M240 100 l-6 16\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n<path d=\"M470 235 Q480 180 460 130 M500 235 Q510 180 490 130 M530 235 Q540 180 520 130\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-dasharray=\"6 6\" fill=\"none\"/>\n<path d=\"M440 110 Q360 60 310 60\" stroke=\"#475569\" stroke-width=\"4\" fill=\"none\" marker-end=\"url(#f)\"/>\n<defs><marker id=\"f\" markerWidth=\"10\" markerHeight=\"10\" refX=\"6\" refY=\"5\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10z\" fill=\"#475569\"/></marker></defs>\n<text x=\"500\" y=\"290\" font-size=\"18\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">1 Evaporation</text>\n<text x=\"380\" y=\"45\" font-size=\"18\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2 Condensation</text>\n<text x=\"80\" y=\"150\" font-size=\"18\" fill=\"#1e3a8a\" text-anchor=\"middle\" font-weight=\"bold\">3 Precipitation</text>\n<text x=\"230\" y=\"290\" font-size=\"18\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">4 Runoff</text>\n</svg>",
   "caption": "The Sun evaporates sea water, the vapour forms clouds, rain falls on the mountains and rivers carry it back to the sea."
  },
  {
   "type": "widget",
   "title": "Find the stages of the cycle",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#e0f2fe\"/>\n<circle cx=\"540\" cy=\"50\" r=\"30\" fill=\"#facc15\"/>\n<path d=\"M0 220 L160 100 L290 220z\" fill=\"#78716c\"/>\n<rect y=\"220\" width=\"600\" height=\"80\" fill=\"#65a30d\"/>\n<path d=\"M330 300 L330 240 Q450 215 600 235 L600 300z\" fill=\"#2563eb\"/>\n<path d=\"M190 195 Q240 235 330 245\" stroke=\"#3b82f6\" stroke-width=\"10\" fill=\"none\"/>\n<ellipse cx=\"200\" cy=\"60\" rx=\"70\" ry=\"28\" fill=\"#94a3b8\"/>\n<path d=\"M160 95 l-6 16 M190 95 l-6 16 M220 95 l-6 16\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<path d=\"M480 225 Q490 170 470 120 M510 225 Q520 170 500 120\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-dasharray=\"6 6\" fill=\"none\"/>\n</svg>",
    "spots": [
     {
      "x": 490,
      "y": 170,
      "label": "Evaporation"
     },
     {
      "x": 200,
      "y": 60,
      "label": "Condensation (cloud)"
     },
     {
      "x": 190,
      "y": 105,
      "label": "Precipitation"
     },
     {
      "x": 260,
      "y": 228,
      "label": "Runoff (river)"
     },
     {
      "x": 470,
      "y": 270,
      "label": "Sea"
     }
    ]
   },
   "caption": "Click each point and choose the right name."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: the stages",
   "questions": [
    {
     "type": "mc",
     "q": "What is water changing from liquid to vapour called?",
     "options": [
      "Condensation",
      "Evaporation",
      "Solidification"
     ],
     "answer": 1,
     "explain": "When water heats up and turns into vapour we call it evaporation."
    },
    {
     "type": "mc",
     "q": "What are clouds made of?",
     "options": [
      "Smoke",
      "Cotton",
      "Water droplets or ice crystals"
     ],
     "answer": 2,
     "explain": "Clouds are millions of tiny droplets (or little ice crystals)."
    },
    {
     "type": "tf",
     "q": "The engine of the water cycle is the Sun.",
     "answer": true,
     "explain": "It's the Sun's heat that evaporates water and starts the cycle."
    }
   ]
  },
  {
   "type": "example",
   "title": "Practical example: the cycle in the kitchen",
   "html": "<p>When Mum or Dad boil water for pasta:</p>\n<ul>\n<li><b>steam</b> comes out of the pan (evaporation);</li>\n<li>if you put a lid on, lots of <b>droplets</b> form underneath (condensation);</li>\n<li>the droplets get big and <b>fall back</b> into the pan (precipitation)!</li>\n</ul>\n<p>The pan is like a little water cycle. ⚠️ Only watch this with an adult: steam burns!</p>"
  },
  {
   "type": "example",
   "title": "Practical example: a water cycle in a bag",
   "html": "<p>You need: a clear plastic zip bag, some water coloured blue, some sticky tape.</p>\n<ol>\n<li>Put a finger's depth of water in the bag and seal it well.</li>\n<li>Tape it to a sunny window.</li>\n<li>After a few hours you'll see droplets at the top (the \"clouds\") that then slide down (the \"rain\").</li>\n</ol>\n<p>The water in the bag never gets out: just like the Earth's water!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>The water you drink today could be the same water the dinosaurs drank! Water on Earth has been circulating for billions of years and its amount stays almost the same.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>About <b>97%</b> of the Earth's water is salty (seas and oceans). Only 3% is fresh, and most of that is frozen at the poles and on mountains. That's why we mustn't waste it!</p>"
  },
  {
   "type": "widget",
   "title": "Solid, liquid or gas?",
   "widget": "classify",
   "options": {
    "groups": [
     "🧊 Solid",
     "💧 Liquid",
     "💨 Gas"
    ],
    "items": [
     [
      "❄️ snow",
      0
     ],
     [
      "🧊 ice cube",
      0
     ],
     [
      "🌨️ hail",
      0
     ],
     [
      "🌧️ rain",
      1
     ],
     [
      "🏞️ river water",
      1
     ],
     [
      "🚿 shower water",
      1
     ],
     [
      "♨️ steam from the pan",
      2
     ],
     [
      "🌫️ water vapour in the air",
      2
     ]
    ]
   },
   "caption": "Put each example in the right group."
  },
  {
   "type": "remember",
   "title": "To remember",
   "html": "<p>The water cycle has 4 stages: <b>evaporation → condensation → precipitation → runoff/infiltration</b>. Its engine is the <b>Sun</b>. Water is not created or used up: it <b>circulates</b>.</p>"
  },
  {
   "type": "3d",
   "title": "The water cycle in a 3D landscape",
   "scene": "terrain",
   "caption": "Turn the landscape and tap its parts: discover what role each one plays in water's journey.",
   "options": {
    "features": {
     "sea": {
      "label": "Sea",
      "html": "The sea holds almost all the Earth's water (about 97%). The Sun heats it and the water <b>evaporates</b>: this is where most of the cycle begins. The salt stays in the sea: that's why rain is fresh!"
     },
     "mountain": {
      "label": "Mountain",
      "html": "Moist air coming from the sea bumps into the mountains and has to rise. As it rises it cools, the vapour <b>condenses</b> and clouds form: that's why it often rains and snows in the mountains."
     },
     "glacier": {
      "label": "Glacier",
      "html": "On the highest peaks snow piles up and turns into ice. A glacier is a <b>water reserve</b>: in summer it slowly melts and feeds streams and rivers. Here water can stay still for thousands of years!"
     },
     "source": {
      "label": "Spring",
      "html": "Rainwater soaks into the ground (<b>infiltration</b>), flows underground and then comes out of a spring. It's often fresh, clean water, filtered by the rocks."
     },
     "river": {
      "label": "River",
      "html": "The river collects water from rain, springs and glaciers and carries it back towards the sea: this is <b>runoff</b>, the last part of the cycle."
     },
     "lake": {
      "label": "Lake",
      "html": "A lake is a hollow full of fresh water. Water evaporates from lakes too, and a lake can act as a \"tank\" for rivers."
     },
     "delta": {
      "label": "Delta mouth",
      "html": "The river reaches the sea and splits into many branches: the fresh water goes back into the sea and the cycle can start again."
     }
    }
   }
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand it",
   "intro": "If the diagram with arrows isn't enough, try one of these: a story, an experiment, a \"giant pan\" or the particles seen up close.",
   "tabs": [
    {
     "label": "💧 Droplet's journey",
     "html": "<p>Hi! I'm <b>Droplet</b> and I live in the sea. One morning the Sun warms me so much that I become super light: I've turned into <b>vapour</b> and I rise into the sky, invisible. ☀️</p>\n<p>Up there it's cold! I huddle with other droplets around a grain of dust: together we form a <b>cloud</b>. ☁️</p>\n<p>The wind carries us over the mountains. We become so many and so heavy that we fall: it's <b>rain</b>! 🌧️ I land on a meadow, slip into the ground and flow underground to a <b>spring</b>.</p>\n<p>Then I jump into the stream, run along the <b>river</b>… and after a few weeks here I am back in the sea. My journey never ends! 🔄</p>"
    },
    {
     "label": "🧪 Experiment at home",
     "html": "<p>You can create a little water cycle in the kitchen, <b>with an adult's help</b>:</p>\n<ol>\n<li>Put some water in a pan and heat it (the cooker plays the part of the <b>Sun</b>).</li>\n<li>An adult holds a cold lid with some ice cubes on top over the pan (it's the <b>cold sky</b>).</li>\n<li>Look under the lid: droplets form (<b>condensation</b>) and then fall back into the pan (<b>rain</b>)!</li>\n</ol>\n<p><b>No-fire version:</b> put some water in a well-sealed clear plastic bag and tape it to a sunny window. After a few hours you'll see droplets on the sides sliding down.</p>"
    },
    {
     "label": "🍲 The giant pan",
     "html": "<p>Think of the Earth as a <b>giant pan with a lid</b>:</p>\n<ul>\n<li>the <b>Sun</b> is the cooker that heats;</li>\n<li>the <b>sea</b> is the water in the pan;</li>\n<li>the <b>cold air high up</b> is the lid, where vapour turns back into water;</li>\n<li>the drops that fall back are the <b>rain</b>.</li>\n</ul>\n<p>The difference? The Earth's pan is never locked: water can stop in glaciers, lakes, underground or inside plants and animals (inside you too!).</p>"
    },
    {
     "label": "🔬 Particles up close",
     "html": "<p>Water is made of tiny particles (molecules). When the temperature changes, the way they move changes:</p>\n<ul>\n<li><b>Ice</b>: the molecules are packed tight and stay in place, like children sitting in a row.</li>\n<li><b>Liquid water</b>: the molecules slide past each other, like children playing in the playground.</li>\n<li><b>Vapour</b>: the molecules run free and far apart, like children running across a huge field.</li>\n</ul>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"10\" y=\"20\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<rect x=\"210\" y=\"20\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<rect x=\"410\" y=\"20\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#f1f5f9\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<g fill=\"#2563eb\">\n<circle cx=\"45\" cy=\"55\" r=\"12\"/><circle cx=\"80\" cy=\"55\" r=\"12\"/><circle cx=\"115\" cy=\"55\" r=\"12\"/><circle cx=\"150\" cy=\"55\" r=\"12\"/>\n<circle cx=\"45\" cy=\"95\" r=\"12\"/><circle cx=\"80\" cy=\"95\" r=\"12\"/><circle cx=\"115\" cy=\"95\" r=\"12\"/><circle cx=\"150\" cy=\"95\" r=\"12\"/>\n<circle cx=\"45\" cy=\"135\" r=\"12\"/><circle cx=\"80\" cy=\"135\" r=\"12\"/><circle cx=\"115\" cy=\"135\" r=\"12\"/><circle cx=\"150\" cy=\"135\" r=\"12\"/>\n<circle cx=\"45\" cy=\"175\" r=\"12\"/><circle cx=\"80\" cy=\"175\" r=\"12\"/><circle cx=\"115\" cy=\"175\" r=\"12\"/><circle cx=\"150\" cy=\"175\" r=\"12\"/>\n<circle cx=\"240\" cy=\"120\" r=\"12\"/><circle cx=\"268\" cy=\"140\" r=\"12\"/><circle cx=\"300\" cy=\"118\" r=\"12\"/><circle cx=\"330\" cy=\"145\" r=\"12\"/><circle cx=\"360\" cy=\"125\" r=\"12\"/>\n<circle cx=\"250\" cy=\"170\" r=\"12\"/><circle cx=\"285\" cy=\"175\" r=\"12\"/><circle cx=\"318\" cy=\"172\" r=\"12\"/><circle cx=\"352\" cy=\"175\" r=\"12\"/><circle cx=\"290\" cy=\"90\" r=\"12\"/>\n<circle cx=\"440\" cy=\"50\" r=\"12\"/><circle cx=\"545\" cy=\"70\" r=\"12\"/><circle cx=\"490\" cy=\"120\" r=\"12\"/><circle cx=\"430\" cy=\"170\" r=\"12\"/><circle cx=\"560\" cy=\"165\" r=\"12\"/>\n</g>\n<text x=\"100\" y=\"235\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\">🧊 Solid</text>\n<text x=\"300\" y=\"235\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\">💧 Liquid</text>\n<text x=\"500\" y=\"235\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\">♨️ Gas</text>\n</svg>"
    },
    {
     "label": "⚛️ The molecule in 3D",
     "html": "<p>Here is a water molecule: one <b>oxygen</b> atom (red) and two <b>hydrogen</b> atoms (white). It's written <b>H₂O</b>. Turn it with your finger: it's shaped like a little \"V\", like Mickey Mouse's head!</p>",
     "scene": "molecule",
     "options": {
      "atoms": [
       {
        "x": 0,
        "y": 0,
        "z": 0,
        "r": 0.55,
        "color": "#ef4444",
        "label": "O"
       },
       {
        "x": 0.75,
        "y": 0.58,
        "z": 0,
        "r": 0.35,
        "color": "#e5e7eb",
        "label": "H"
       },
       {
        "x": -0.75,
        "y": 0.58,
        "z": 0,
        "r": 0.35,
        "color": "#e5e7eb",
        "label": "H"
       }
      ],
      "bonds": [
       [
        0,
        1
       ],
       [
        0,
        2
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of the water cycle: tap the nodes and find out why",
   "nodes": [
    {
     "id": "sole",
     "label": "Sun ☀️",
     "x": 50,
     "y": 6,
     "color": "#f59e0b",
     "html": "The Sun gives the energy (heat) that drives the whole cycle.",
     "why": "Without the Sun's heat water wouldn't evaporate: the whole cycle is like a solar-powered engine. Even the wind, which moves the clouds, exists because the Sun heats the Earth differently from place to place."
    },
    {
     "id": "evaporazione",
     "label": "Evaporation",
     "x": 18,
     "y": 30,
     "color": "#f97316",
     "html": "Liquid water turns into invisible vapour.",
     "why": "Water molecules are always moving. When heated, the fastest ones manage to \"jump out\" of the surface and fly off into the air. That's why washing dries faster in the sun and wind."
    },
    {
     "id": "condensazione",
     "label": "Condensation",
     "x": 50,
     "y": 32,
     "color": "#64748b",
     "html": "Vapour cools and turns back into droplets: clouds are born.",
     "why": "The higher you go, the colder the air. Cooled vapour sticks to tiny grains of dust or salt and forms droplets. Clouds don't fall because the droplets are tiny (about a million are needed to make a single raindrop!) and air currents hold them up."
    },
    {
     "id": "precipitazione",
     "label": "Precipitation",
     "x": 82,
     "y": 30,
     "color": "#3b82f6",
     "html": "Rain, snow or hail falling to the ground.",
     "why": "The droplets in a cloud collide and join together: when they get too heavy, the currents can't hold them up any more and they fall. If it's very cold they fall as snow or hail."
    },
    {
     "id": "infiltrazione",
     "label": "Infiltration",
     "x": 80,
     "y": 62,
     "color": "#92400e",
     "html": "Some of the water soaks into the ground and forms underground aquifers.",
     "why": "The ground is full of tiny spaces between the grains, like a sponge. Water slips into them, gets filtered by the rocks and can come out of springs days or years later."
    },
    {
     "id": "scorrimento",
     "label": "Runoff",
     "x": 50,
     "y": 72,
     "color": "#0ea5e9",
     "html": "Streams and rivers carry the water back to the sea.",
     "why": "Water always flows downhill because of gravity. In 1674 the Frenchman <b>Pierre Perrault</b> measured the rain falling near the Seine and found it was enough (more than enough!) to feed the river: it was the first proof that rivers come from rain."
    },
    {
     "id": "mare",
     "label": "Seas and oceans",
     "x": 18,
     "y": 72,
     "color": "#1d4ed8",
     "html": "The great reservoir: it holds about 97% of all the Earth's water.",
     "why": "A few years after Perrault, the English astronomer <b>Edmond Halley</b> calculated how much water evaporates from the Mediterranean Sea and saw it was as much as the rivers bring in: so the sea neither overflows nor empties."
    },
    {
     "id": "piante",
     "label": "Plants",
     "x": 50,
     "y": 94,
     "color": "#16a34a",
     "html": "Plants take up water with their roots and release it as vapour from their leaves (transpiration).",
     "why": "Leaves have tiny openings, the stomata, from which water vapour escapes. A huge forest like the Amazon sends so much water back into the sky that it \"makes\" part of its own rain."
    }
   ],
   "edges": [
    [
     "sole",
     "evaporazione",
     "heats and causes"
    ],
    [
     "evaporazione",
     "condensazione",
     "vapour rises →"
    ],
    [
     "condensazione",
     "precipitazione",
     "heavy drops →"
    ],
    [
     "precipitazione",
     "infiltrazione",
     "into the ground"
    ],
    [
     "precipitazione",
     "scorrimento",
     "on the surface"
    ],
    [
     "infiltrazione",
     "scorrimento",
     "springs"
    ],
    [
     "scorrimento",
     "mare",
     "back to the"
    ],
    [
     "mare",
     "evaporazione",
     "starts again"
    ],
    [
     "piante",
     "evaporazione",
     "transpiration"
    ],
    [
     "infiltrazione",
     "piante",
     "roots"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: water in every state",
   "questions": [
    {
     "type": "tf",
     "q": "Ice is water in the solid state.",
     "answer": true,
     "explain": "Ice is solid water."
    },
    {
     "type": "mc",
     "q": "Where does the water that soaks into the ground go?",
     "options": [
      "It disappears",
      "It forms underground aquifers",
      "It goes straight back to the clouds"
     ],
     "answer": 1,
     "explain": "Water infiltrates and forms underground reserves called aquifers."
    },
    {
     "type": "num",
     "q": "How many main stages does the water cycle have?",
     "answer": 4,
     "explain": "Evaporation, condensation, precipitation, runoff."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Evaporation",
   "d": "Water changing from liquid to vapour, thanks to heat."
  },
  {
   "t": "Condensation",
   "d": "Vapour turning into droplets of liquid water, because of the cold."
  },
  {
   "t": "Precipitation",
   "d": "Water falling from clouds: rain, snow, hail."
  },
  {
   "t": "Infiltration",
   "d": "Water soaking into the ground."
  },
  {
   "t": "Aquifer",
   "d": "A store of water underground."
  },
  {
   "t": "Transpiration",
   "d": "Water vapour that plants release from their leaves."
  },
  {
   "t": "Water vapour",
   "d": "Water in the gas state, invisible."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "What starts the water cycle?",
    "options": [
     "The wind",
     "The Sun's heat",
     "The Moon"
    ],
    "answer": 1,
    "explain": "The Sun's heat makes water evaporate."
   },
   {
    "type": "order",
    "q": "Put the stages of the water cycle in order.",
    "items": [
     "Evaporation",
     "Condensation",
     "Precipitation",
     "Runoff to the sea"
    ],
    "explain": "Water evaporates, forms clouds, falls and goes back to the sea."
   },
   {
    "type": "tf",
    "q": "The amount of water on Earth goes down every day because we drink it.",
    "answer": false,
    "explain": "Water circulates continuously: it always returns to the cycle."
   },
   {
    "type": "mc",
    "q": "What do you call water that falls as little balls of ice?",
    "options": [
     "Snow",
     "Hail",
     "Dew"
    ],
    "answer": 1,
    "explain": "Hail is made of little balls of ice."
   },
   {
    "type": "text",
    "q": "What is the change from vapour to droplets called?",
    "answer": [
     "condensation"
    ],
    "explain": "It's called condensation."
   },
   {
    "type": "mc",
    "q": "How much of the Earth's water is salty?",
    "options": [
     "About 3%",
     "About half",
     "About 97%"
    ],
    "answer": 2,
    "explain": "About 97% of the water is in the seas and oceans."
   },
   {
    "type": "tf",
    "q": "Plants also release water vapour.",
    "answer": true,
    "explain": "It's called transpiration."
   },
   {
    "type": "mc",
    "q": "The steam coming out of a boiling pan is water in which state?",
    "options": [
     "solid",
     "liquid",
     "gas"
    ],
    "answer": 2,
    "explain": "Steam is water as a gas."
   },
   {
    "type": "mc",
    "q": "Which atoms is a water molecule made of?",
    "options": [
     "2 hydrogen and 1 oxygen",
     "1 carbon and 2 oxygen",
     "Only oxygen"
    ],
    "answer": 0,
    "explain": "H₂O: two hydrogen atoms and one oxygen atom."
   },
   {
    "type": "tf",
    "q": "Clouds form because the air higher up is colder.",
    "answer": true,
    "explain": "The cold makes vapour condense into droplets."
   }
  ]
 }
});
