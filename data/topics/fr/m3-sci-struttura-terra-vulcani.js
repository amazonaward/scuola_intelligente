TOPIC('fr', {
 "id": "m3-sci-struttura-terra-vulcani",
 "title": "La structure de la Terre, volcans et séismes",
 "intro": "La Terre semble immobile, mais sous nos pieds c'est une planète vivante : elle est faite de couches aux températures très élevées, sa surface est divisée en plaques qui bougent et, là où elles se heurtent ou s'éloignent, naissent des volcans, des séismes et des montagnes.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "1. Comment connaissons-nous l'intérieur de la Terre ?",
   "html": "<p>Le trou le plus profond jamais creusé, le forage superprofond de Kola en Russie, atteint environ <b>12 km</b> : moins de 0,2 % du rayon terrestre (environ <b>6371 km</b>). Comment savons-nous alors ce qu'il y a dedans ?</p><p>Grâce aux <b>ondes sismiques</b> des séismes : elles voyagent à travers la Terre et changent de vitesse et de direction quand elles traversent des matériaux différents. Les ondes <b>S</b> ne passent pas dans les liquides : c'est ainsi que nous savons que le <b>noyau externe est liquide</b>.</p>"
  },
  {
   "type": "3d",
   "title": "Les couches de la Terre",
   "scene": "layers",
   "options": {
    "layers": [
     {
      "r": 1,
      "color": "#65a30d",
      "label": "Croûte (5–70 km)"
     },
     {
      "r": 0.97,
      "color": "#ea580c",
      "label": "Manteau (jusqu'à 2900 km)"
     },
     {
      "r": 0.55,
      "color": "#facc15",
      "label": "Noyau externe liquide"
     },
     {
      "r": 0.19,
      "color": "#fef9c3",
      "label": "Noyau interne solide"
     }
    ]
   },
   "caption": "Fais tourner le modèle : le quartier découpé montre les couches. Les proportions des rayons sont presque réelles (la croûte est très fine !)."
  },
  {
   "type": "text",
   "title": "2. Les couches, une par une",
   "html": "<table><tr><th>Couche</th><th>Profondeur</th><th>État et composition</th><th>Température</th></tr><tr><td><b>Croûte</b></td><td>0–35 km (continents, jusqu'à 70 sous les chaînes de montagnes) ; 5–10 km (océans)</td><td>Solide, roches granitiques (continentale) et basaltiques (océanique)</td><td>jusqu'à ~1000 °C à la base</td></tr><tr><td><b>Manteau</b></td><td>jusqu'à ~2900 km</td><td>Roches de silicates de fer et de magnésium ; solide mais capable de « s'écouler » lentement</td><td>1000–3700 °C</td></tr><tr><td><b>Noyau externe</b></td><td>2900–5150 km</td><td>Liquide, fer et nickel</td><td>~4000–5000 °C</td></tr><tr><td><b>Noyau interne</b></td><td>5150–6371 km</td><td>Solide (à cause de l'énorme pression), fer et nickel</td><td>~5000–5500 °C, comme la surface du Soleil</td></tr></table><p>La croûte plus la partie haute et rigide du manteau forment la <b>lithosphère</b> (environ 100 km), qui « flotte » sur l'<b>asthénosphère</b>, plus chaude et plastique.</p>"
  },
  {
   "type": "curiosity",
   "title": "La Terre est un aimant",
   "html": "<p>Le fer liquide en mouvement dans le noyau externe produit le <b>champ magnétique terrestre</b> : c'est pour cela que l'aiguille de la boussole indique le Nord. Le champ magnétique nous protège du vent solaire et crée les <b>aurores polaires</b>. Au cours de l'histoire de la Terre, les pôles magnétiques se sont inversés des centaines de fois !</p>"
  },
  {
   "type": "text",
   "title": "3. La tectonique des plaques",
   "html": "<p>En 1912, l'Allemand <b>Alfred Wegener</b> remarqua que les côtes de l'Amérique du Sud et de l'Afrique s'emboîtent comme les pièces d'un puzzle et proposa la <b>dérive des continents</b> : il y a 250 à 300 millions d'années, les terres émergées formaient un seul supercontinent, la <b>Pangée</b>.</p><p>Aujourd'hui nous savons que la lithosphère est divisée en environ <b>15 grandes plaques</b> qui se déplacent de quelques centimètres par an, poussées par les <b>mouvements de convection</b> du manteau. Les limites entre les plaques peuvent être :</p><ul><li><b>divergentes</b> : les plaques s'éloignent, le magma remonte et crée une nouvelle croûte (dorsales océaniques, comme la dorsale médio-atlantique ; l'Islande) ;</li><li><b>convergentes</b> : les plaques se heurtent ; l'une peut plonger sous l'autre (<b>subduction</b>), formant des fosses océaniques, des volcans et des chaînes de montagnes (Andes, Himalaya, Alpes) ;</li><li><b>transformantes</b> : les plaques glissent l'une à côté de l'autre (faille de San Andreas, en Californie).</li></ul>"
  },
  {
   "type": "svg",
   "title": "Limites entre les plaques",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#e0f2fe\"/><rect x=\"0\" y=\"180\" width=\"600\" height=\"120\" fill=\"#fb923c\"/><text x=\"300\" y=\"285\" font-size=\"16\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#7c2d12\">manteau (asthénosphère) : mouvements de convection</text><rect x=\"0\" y=\"130\" width=\"190\" height=\"50\" fill=\"#a16207\"/><rect x=\"210\" y=\"130\" width=\"170\" height=\"50\" fill=\"#a16207\"/><polygon points=\"190,180 210,180 205,120 195,120\" fill=\"#dc2626\"/><path d=\"M200 230 L200 190\" stroke=\"#dc2626\" stroke-width=\"4\"/><text x=\"150\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">←</text><text x=\"230\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">→</text><text x=\"200\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">DIVERGENTE</text><text x=\"200\" y=\"62\" font-size=\"14\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">dorsale océanique</text><polygon points=\"380,130 470,130 600,130 600,180 470,180 380,180\" fill=\"#a16207\"/><polygon points=\"380,130 470,130 520,250 470,250\" fill=\"#854d0e\"/><polygon points=\"470,130 520,70 570,130\" fill=\"#57534e\"/><polygon points=\"512,80 528,80 520,60\" fill=\"#dc2626\"/><text x=\"430\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">→</text><text x=\"490\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">CONVERGENTE</text><text x=\"490\" y=\"62\" font-size=\"14\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">subduction + volcan</text></svg>",
   "caption": "À gauche, deux plaques s'éloignent et le magma remonte ; à droite, une plaque plonge sous l'autre et alimente un volcan."
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre : modèles et preuves",
   "intro": "Personne n'est jamais descendu dans le manteau. Comment savons-nous comment la Terre est faite ? Avec des modèles qui aident à imaginer et avec des preuves indirectes.",
   "tabs": [
    {
     "label": "🥚 L'œuf dur",
     "html": "<p>Coupe un œuf dur en deux : la coquille, le blanc et le jaune rappellent la croûte, le manteau et le noyau. Si tu écrases la coquille, elle se casse en morceaux qui restent « flottants » sur le blanc : exactement comme les plaques sur le manteau.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><ellipse cx=\"160\" cy=\"150\" rx=\"110\" ry=\"130\" fill=\"#fff\" stroke=\"#a16207\" stroke-width=\"5\"/><circle cx=\"160\" cy=\"165\" r=\"62\" fill=\"#facc15\"/><text x=\"160\" y=\"172\" font-size=\"16\" text-anchor=\"middle\" fill=\"#713f12\">jaune</text><text x=\"160\" y=\"60\" font-size=\"16\" text-anchor=\"middle\" fill=\"#57534e\">blanc</text><text x=\"300\" y=\"70\" font-size=\"17\" fill=\"#1f2937\">coquille → croûte (fine et rigide, elle se casse)</text><text x=\"300\" y=\"120\" font-size=\"17\" fill=\"#1f2937\">blanc → manteau (solide mais « plastique »)</text><text x=\"300\" y=\"170\" font-size=\"17\" fill=\"#1f2937\">jaune → noyau (au centre, dense)</text><text x=\"300\" y=\"230\" font-size=\"15\" fill=\"#b91c1c\">Attention : en proportion, la croûte</text><text x=\"300\" y=\"252\" font-size=\"15\" fill=\"#b91c1c\">est encore plus fine que la coquille !</text></svg>"
    },
    {
     "label": "🍑 La pêche",
     "html": "<p>Une pêche coupée a quatre parties : la peau fine, la chair épaisse, le noyau dur et la graine à l'intérieur. C'est un modèle à quatre couches, comme la Terre avec son noyau divisé en externe et interne.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/><circle cx=\"160\" cy=\"150\" r=\"125\" fill=\"#fdba74\" stroke=\"#c2410c\" stroke-width=\"4\"/><path d=\"M160,150 L160,25 A125,125 0 0 1 285,150 Z\" fill=\"#fde68a\" stroke=\"#c2410c\" stroke-width=\"2\"/><ellipse cx=\"160\" cy=\"150\" rx=\"55\" ry=\"68\" fill=\"#92400e\"/><ellipse cx=\"160\" cy=\"150\" rx=\"20\" ry=\"26\" fill=\"#78350f\" stroke=\"#fde68a\" stroke-dasharray=\"3 3\"/><text x=\"310\" y=\"80\" font-size=\"17\" fill=\"#1f2937\">peau → croûte</text><text x=\"310\" y=\"130\" font-size=\"17\" fill=\"#1f2937\">chair → manteau</text><text x=\"310\" y=\"180\" font-size=\"17\" fill=\"#1f2937\">noyau → noyau externe</text><text x=\"310\" y=\"230\" font-size=\"17\" fill=\"#1f2937\">graine → noyau interne</text></svg>"
    },
    {
     "label": "🌊 Les ondes sismiques",
     "html": "<p>C'est la vraie preuve. Les ondes des séismes traversent la Terre : les <b>ondes P</b> passent dans les solides et les liquides, les <b>ondes S</b> seulement dans les solides. De l'autre côté de la planète, il y a une <b>zone d'ombre</b> où les ondes S n'arrivent pas : cela veut dire qu'à une certaine profondeur il y a un <b>liquide</b>, le noyau externe. C'est ainsi que R. D. Oldham (1906) repéra le noyau, que B. Gutenberg (1914) en mesura la profondeur (environ 2900 km) et que la Danoise Inge Lehmann (1936) découvrit le noyau interne solide.</p>",
     "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#0f172a\"/><circle cx=\"300\" cy=\"160\" r=\"140\" fill=\"#ea580c\"/><circle cx=\"300\" cy=\"160\" r=\"77\" fill=\"#facc15\"/><circle cx=\"300\" cy=\"160\" r=\"27\" fill=\"#fef9c3\"/><circle cx=\"300\" cy=\"20\" r=\"7\" fill=\"#fff\"/><text x=\"312\" y=\"16\" font-size=\"14\" fill=\"#fff\">séisme</text><path d=\"M300,20 Q215,80 175,225\" stroke=\"#60a5fa\" stroke-width=\"3\" fill=\"none\"/><path d=\"M300,20 Q385,80 425,225\" stroke=\"#60a5fa\" stroke-width=\"3\" fill=\"none\"/><path d=\"M300,20 L300,300\" stroke=\"#a7f3d0\" stroke-width=\"3\" stroke-dasharray=\"7 4\"/><path d=\"M178,235 A140,140 0 0 0 422,235\" stroke=\"#f87171\" stroke-width=\"8\" fill=\"none\" opacity=\".7\"/><text x=\"300\" y=\"315\" font-size=\"14\" text-anchor=\"middle\" fill=\"#fecaca\">zone d'ombre des ondes S</text><text x=\"20\" y=\"40\" font-size=\"14\" fill=\"#93c5fd\">ondes S : seulement dans les solides</text><text x=\"20\" y=\"62\" font-size=\"14\" fill=\"#a7f3d0\">ondes P : solides et liquides</text></svg>"
    },
    {
     "label": "🍪 Biscuits et crème",
     "html": "<p>Prends un biscuit fourré à la crème et casse-le en deux : les deux morceaux sont les <b>plaques</b>, la crème est le manteau qui se déforme. Écarte-les (limite <b>divergente</b>) : la crème sort au milieu comme le magma dans les dorsales. Pousse-les l'un contre l'autre (limite <b>convergente</b>) : l'un se soulève ou passe sous l'autre, comme dans les chaînes de montagnes et les fosses océaniques. Fais-les glisser sur le côté (limite <b>transformante</b>) : ils se coincent puis se décrochent d'un coup, comme dans un séisme.</p>"
    },
    {
     "label": "🏔️ Paysage 3D",
     "html": "<p>Fais tourner le paysage et touche ses parties : volcan, montagne, mer… Chacune est le résultat des mouvements internes de la Terre ou de l'érosion.</p>",
     "scene": "terrain",
     "options": {
      "features": {
       "volcano": {
        "label": "Volcan",
        "html": "<p>Il se forme là où le magma remonte en surface : aux limites des plaques (Etna, volcans des Andes) ou au-dessus d'un « point chaud » (Hawaï).</p>"
       },
       "mountain": {
        "label": "Chaîne de montagnes",
        "html": "<p>Elle naît de la collision entre plaques (Alpes, Himalaya) : la croûte se plie et se soulève.</p>"
       },
       "sea": {
        "label": "Mer",
        "html": "<p>Sous les mers, la croûte est océanique : plus fine (5–10 km) et plus lourde que la croûte continentale.</p>"
       }
      }
     }
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz 1",
   "questions": [
    {
     "type": "mc",
     "q": "Quelle couche de la Terre est liquide ?",
     "options": [
      "Croûte",
      "Manteau",
      "Noyau externe",
      "Noyau interne"
     ],
     "answer": 2,
     "explain": "Le noyau externe est fait de fer et de nickel fondus ; la preuve, c'est que les ondes S ne le traversent pas."
    },
    {
     "type": "num",
     "q": "Combien mesure environ le rayon de la Terre en km ?",
     "answer": 6371,
     "tol": 30,
     "unit": "km",
     "explain": "Environ 6371 km."
    },
    {
     "type": "text",
     "q": "Comment s'appelait le supercontinent unique d'il y a environ 250 millions d'années ?",
     "answer": [
      "pangee",
      "la pangee"
     ],
     "explain": "La Pangée, qui signifie « toute la Terre »."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Les volcans",
   "html": "<p>Un <b>volcan</b> est une fissure de la croûte d'où sort le <b>magma</b>, de la roche fondue riche en gaz. Quand il arrive en surface, il s'appelle <b>lave</b>.</p><ul><li><b>Volcans boucliers</b> (Hawaï) : lave fluide et pauvre en silice, éruptions <b>effusives</b> et calmes ; forme large et peu pentue.</li><li><b>Stratovolcans</b> (Vésuve, en partie l'Etna, Fuji) : lave visqueuse et riche en gaz, éruptions <b>explosives</b> avec cendres, lapilli, bombes et <b>nuées ardentes</b> (coulées pyroclastiques).</li></ul><p>Phénomènes liés au volcanisme : <b>geysers</b>, <b>fumerolles</b>, <b>sources thermales</b>, soffioni (Larderello, en Toscane, où en 1904 s'alluma la première ampoule grâce à l'énergie géothermique).</p>"
  },
  {
   "type": "widget",
   "title": "Les parties du volcan",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 360\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"360\" fill=\"#e0f2fe\"/><ellipse cx=\"300\" cy=\"40\" rx=\"120\" ry=\"28\" fill=\"#9ca3af\" opacity=\"0.8\"/><ellipse cx=\"250\" cy=\"55\" rx=\"60\" ry=\"20\" fill=\"#6b7280\" opacity=\"0.8\"/><polygon points=\"60,280 270,90 330,90 540,280\" fill=\"#78716c\"/><polygon points=\"120,240 280,110 320,110 480,240\" fill=\"#a8a29e\" opacity=\"0.6\"/><rect x=\"0\" y=\"280\" width=\"600\" height=\"80\" fill=\"#57534e\"/><ellipse cx=\"300\" cy=\"325\" rx=\"110\" ry=\"28\" fill=\"#ea580c\"/><rect x=\"290\" y=\"95\" width=\"20\" height=\"230\" fill=\"#ea580c\"/><path d=\"M310 200 L420 200\" stroke=\"#ea580c\" stroke-width=\"10\"/><path d=\"M305 95 Q340 140 360 220 Q370 250 390 270\" stroke=\"#f97316\" stroke-width=\"10\" fill=\"none\"/></svg>",
    "spots": [
     {
      "x": 300,
      "y": 325,
      "label": "Chambre magmatique"
     },
     {
      "x": 300,
      "y": 230,
      "label": "Cheminée principale"
     },
     {
      "x": 300,
      "y": 92,
      "label": "Cratère"
     },
     {
      "x": 415,
      "y": 200,
      "label": "Cheminée secondaire"
     },
     {
      "x": 300,
      "y": 40,
      "label": "Nuage de cendres et de gaz"
     },
     {
      "x": 385,
      "y": 265,
      "label": "Coulée de lave"
     },
     {
      "x": 150,
      "y": 250,
      "label": "Cône volcanique"
     }
    ]
   },
   "caption": "Clique sur chaque point et choisis le bon nom."
  },
  {
   "type": "3d",
   "title": "Paysage 3D : des formes nées de la Terre qui bouge",
   "scene": "terrain",
   "options": {
    "features": {
     "volcano": {
      "label": "Volcan",
      "html": "<p>Le magma monte de la <b>chambre magmatique</b> le long de la <b>cheminée</b> et sort par le <b>cratère</b>. Couche après couche de lave et de cendres, il construit le cône. En Italie : Etna, Vésuve, Stromboli, Champs Phlégréens.</p>"
     },
     "mountain": {
      "label": "Chaîne de montagnes",
      "html": "<p>Les Alpes sont nées de la collision entre la plaque africaine (avec la microplaque adriatique) et la plaque eurasienne, depuis environ 65 millions d'années. La collision continue encore aujourd'hui : c'est pour cela qu'il y a des séismes en Italie.</p>"
     },
     "peak": {
      "label": "Sommet",
      "html": "<p>Les sommets les plus hauts sont les plus jeunes : les montagnes anciennes (comme l'Oural) ont été usées par l'érosion pendant des centaines de millions d'années.</p>"
     },
     "valley": {
      "label": "Vallée",
      "html": "<p>Creusée par les rivières (forme en V) ou par les glaciers (forme en U). L'érosion travaille contre le soulèvement des montagnes.</p>"
     },
     "sea": {
      "label": "Mer",
      "html": "<p>Les fonds océaniques s'élargissent au niveau des dorsales et redescendent dans le manteau dans les fosses (subduction). Le fond le plus ancien n'a « que » 180 millions d'années environ.</p>"
     },
     "island": {
      "label": "Île",
      "html": "<p>Beaucoup d'îles sont volcaniques : nées d'éruptions sous-marines, comme les îles Éoliennes, l'Islande (sur la dorsale atlantique) et Hawaï (sur un point chaud).</p>"
     },
     "lake": {
      "label": "Lac",
      "html": "<p>Certains lacs occupent d'anciens cratères (lacs de Bolsena, de Bracciano, d'Albano) : ce sont des lacs volcaniques. D'autres ont été creusés par les glaciers, comme le lac de Garde.</p>"
     },
     "plain": {
      "label": "Plaine",
      "html": "<p>La plaine du Pô est une énorme fosse remplie par les débris apportés par le Pô et ses affluents. Sous les sédiments, les plaques continuent de bouger.</p>"
     }
    }
   },
   "caption": "Fais tourner le paysage et touche les parties pour lire comment elles se sont formées."
  },
  {
   "type": "3d",
   "title": "Le globe des volcans et des séismes",
   "scene": "globe",
   "options": {
    "points": [
     {
      "lat": -38.24,
      "lon": -73.05,
      "label": "Valdivia, Chili – séisme de 1960 (M 9,5, le plus fort jamais enregistré)",
      "color": "#dc2626"
     },
     {
      "lat": -16.5,
      "lon": -72,
      "label": "Andes péruviennes",
      "color": "#f97316"
     },
     {
      "lat": 19,
      "lon": -98.6,
      "label": "Popocatépetl, Mexique",
      "color": "#f97316"
     },
     {
      "lat": 46.2,
      "lon": -122.18,
      "label": "Mont Saint Helens, États-Unis – éruption de 1980",
      "color": "#f97316"
     },
     {
      "lat": 61.3,
      "lon": -152.25,
      "label": "Alaska",
      "color": "#f97316"
     },
     {
      "lat": 56.06,
      "lon": 160.64,
      "label": "Kamtchatka",
      "color": "#f97316"
     },
     {
      "lat": 35.36,
      "lon": 138.73,
      "label": "Mont Fuji, Japon",
      "color": "#f97316"
     },
     {
      "lat": 15.14,
      "lon": 120.35,
      "label": "Pinatubo, Philippines – éruption de 1991",
      "color": "#f97316"
     },
     {
      "lat": -6.1,
      "lon": 105.42,
      "label": "Krakatoa, Indonésie – éruption de 1883",
      "color": "#f97316"
     },
     {
      "lat": 19.41,
      "lon": -155.29,
      "label": "Kīlauea, Hawaï (point chaud)",
      "color": "#eab308"
     },
     {
      "lat": 63.63,
      "lon": -19.62,
      "label": "Islande – dorsale médio-atlantique",
      "color": "#eab308"
     },
     {
      "lat": 37.75,
      "lon": 14.99,
      "label": "Etna",
      "color": "#f97316"
     },
     {
      "lat": 40.82,
      "lon": 14.43,
      "label": "Vésuve – Pompéi 79 apr. J.-C.",
      "color": "#f97316"
     },
     {
      "lat": 38.3,
      "lon": 142.37,
      "label": "Tōhoku, Japon – séisme et tsunami de 2011",
      "color": "#dc2626"
     },
     {
      "lat": 3.3,
      "lon": 95.98,
      "label": "Sumatra – séisme et tsunami de 2004",
      "color": "#dc2626"
     },
     {
      "lat": 38.2,
      "lon": 15.55,
      "label": "Messine – séisme de 1908",
      "color": "#dc2626"
     },
     {
      "lat": 0,
      "lon": -17,
      "label": "",
      "color": "#eab308"
     },
     {
      "lat": -35,
      "lon": -15,
      "label": "",
      "color": "#eab308"
     }
    ],
    "routes": [
     {
      "points": [
       0,
       1,
       2,
       3,
       4,
       5,
       6,
       7,
       8
      ],
      "color": "#ef4444"
     },
     {
      "points": [
       10,
       16,
       17
      ],
      "color": "#eab308"
     }
    ]
   },
   "caption": "En rouge, la « Ceinture de feu du Pacifique », où se trouvent environ 75 % des volcans actifs ; en jaune, une partie de la dorsale médio-atlantique. Fais tourner le globe : volcans et séismes se concentrent le long des limites des plaques."
  },
  {
   "type": "example",
   "title": "Exemple : les volcans italiens",
   "html": "<p>L'Italie est l'un des pays les plus volcaniques d'Europe parce qu'elle se trouve là où la plaque africaine pousse contre la plaque eurasienne.</p><ul><li><b>Etna</b> (Sicile, environ 3350 m) : le plus haut volcan actif d'Europe, éruptions fréquentes.</li><li><b>Stromboli</b> : petites explosions continues toutes les 10–20 minutes, depuis des milliers d'années (« Phare de la Méditerranée »).</li><li><b>Vésuve</b> : en <b>79 apr. J.-C.</b>, il ensevelit Pompéi et Herculanum ; la dernière éruption date de 1944. Aujourd'hui il est surveillé jour et nuit par l'Observatoire du Vésuve, le plus ancien du monde (1841).</li><li><b>Champs Phlégréens</b> : une grande caldeira près de Naples, où le sol monte et descend (<b>bradyséisme</b>).</li></ul>"
  },
  {
   "type": "text",
   "title": "5. Les séismes",
   "html": "<p>Les roches de la croûte, poussées par le mouvement des plaques, accumulent de l'énergie jusqu'à ce qu'elles se cassent le long d'une <b>faille</b>. L'énergie se libère d'un coup sous forme d'<b>ondes sismiques</b>.</p><ul><li><b>Hypocentre</b> (ou foyer) : le point en profondeur où commence la rupture.</li><li><b>Épicentre</b> : le point en surface exactement au-dessus de l'hypocentre, où le séisme est le plus fort.</li></ul><p>Les séismes s'enregistrent avec le <b>sismographe</b> et se mesurent avec deux échelles :</p><ul><li><b>Magnitude</b> (Richter, aujourd'hui magnitude de moment) : elle mesure l'<b>énergie</b> libérée. Chaque degré de plus correspond à environ <b>32 fois</b> plus d'énergie.</li><li><b>Échelle de Mercalli</b> (12 degrés) : elle mesure les <b>effets</b> sur les personnes et les bâtiments.</li></ul>"
  },
  {
   "type": "example",
   "title": "Exemple : que faire pendant un séisme",
   "html": "<ol><li><b>À l'intérieur</b> : abrite-toi sous une table solide ou près d'un mur porteur ; reste loin des fenêtres, des vitres et des meubles qui peuvent tomber.</li><li><b>N'utilise pas l'ascenseur</b> et ne cours pas dans les escaliers pendant la secousse.</li><li><b>À l'extérieur</b> : éloigne-toi des bâtiments, des arbres et des lignes électriques.</li><li>Après la secousse, sors calmement et rejoins le <b>point de rassemblement</b> indiqué par le plan de protection civile de ta commune.</li></ol><p>On ne peut pas prévoir les séismes, mais on peut construire des <b>bâtiments parasismiques</b> qui résistent aux secousses : c'est la vraie prévention.</p>"
  },
  {
   "type": "curiosity",
   "title": "L'Himalaya grandit encore",
   "html": "<p>L'Inde se déplace vers le nord et pousse contre l'Asie depuis environ 50 millions d'années : la collision a soulevé l'<b>Himalaya</b>. L'Everest (8849 m) grandit encore de quelques millimètres par an. Sur ses sommets on trouve des fossiles d'animaux marins : autrefois ces roches étaient le fond d'un océan !</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz 2",
   "questions": [
    {
     "type": "mc",
     "q": "Le point en surface au-dessus de l'origine du séisme s'appelle :",
     "options": [
      "Hypocentre",
      "Épicentre",
      "Faille",
      "Cratère"
     ],
     "answer": 1,
     "explain": "L'épicentre est au-dessus de l'hypocentre."
    },
    {
     "type": "mc",
     "q": "Quelle échelle mesure les effets d'un séisme ?",
     "options": [
      "Richter",
      "Mercalli",
      "Celsius",
      "Beaufort"
     ],
     "answer": 1,
     "explain": "L'échelle de Mercalli mesure les dégâts et les effets ; la magnitude, l'énergie."
    },
    {
     "type": "tf",
     "q": "Le Vésuve a détruit Pompéi en 79 apr. J.-C.",
     "answer": true,
     "explain": "L'éruption ensevelit Pompéi, Herculanum et Stabies."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte mentale : de la dérive des continents à la tectonique",
   "nodes": [
    {
     "id": "indizi",
     "label": "Les indices de Wegener",
     "x": 20,
     "y": 8,
     "color": "#16a34a",
     "html": "<p>Des côtes qui s'emboîtent (Amérique du Sud–Afrique), les mêmes fossiles (Mesosaurus, Glossopteris) sur des continents éloignés, les mêmes roches, des traces d'anciens glaciers sous les tropiques.</p>",
     "why": "<p>Si les continents avaient toujours été là où ils sont aujourd'hui, comment un reptile d'eau douce comme le Mesosaurus aurait-il pu traverser l'océan ? L'explication la plus simple est que les continents étaient autrefois réunis.</p>"
    },
    {
     "id": "wegener",
     "label": "Dérive des continents (1912)",
     "x": 50,
     "y": 8,
     "color": "#2563eb",
     "html": "<p>Alfred Wegener : les continents se déplacent ; il y a 250 millions d'années ils formaient la Pangée.</p>",
     "why": "<p>Wegener était météorologue, pas géologue, et ses idées furent longtemps rejetées.</p>"
    },
    {
     "id": "motore",
     "label": "Le problème : quel moteur ?",
     "x": 80,
     "y": 8,
     "color": "#b91c1c",
     "html": "<p>Wegener ne savait pas expliquer <b>quelle force</b> déplaçait les continents.</p>",
     "why": "<p>Une bonne théorie scientifique doit expliquer non seulement le « quoi » mais aussi le « comment ». Sans mécanisme, la plupart des géologues de l'époque ne l'acceptèrent pas. C'est un exemple de la façon dont la science avance : les idées sont mises à l'épreuve.</p>"
    },
    {
     "id": "onde",
     "label": "Ondes sismiques et structure interne",
     "x": 20,
     "y": 40,
     "color": "#ea580c",
     "html": "<p>Croûte, manteau, noyau externe liquide, noyau interne solide.</p>",
     "why": "<p>Les ondes P et S changent de vitesse et de direction en passant d'un matériau à l'autre : en les étudiant depuis des milliers de stations sismiques, on reconstitue l'intérieur de la Terre (Oldham, Gutenberg, Lehmann, Mohorovičić).</p>"
    },
    {
     "id": "fondali",
     "label": "Dorsales et fonds océaniques",
     "x": 50,
     "y": 40,
     "color": "#0891b2",
     "html": "<p>Dans les années 1950, on découvre les dorsales, des montagnes sous-marines longues de dizaines de milliers de km.</p>",
     "why": "<p>Marie Tharp et Bruce Heezen cartographièrent le fond de l'Atlantique avec des sondeurs et trouvèrent une longue fente centrale. Harry Hess (1962) proposa l'<b>expansion des fonds océaniques</b> : une nouvelle croûte naît dans les dorsales et s'élargit.</p>"
    },
    {
     "id": "magnetismo",
     "label": "Bandes magnétiques",
     "x": 80,
     "y": 40,
     "color": "#7c3aed",
     "html": "<p>Les roches du fond enregistrent le champ magnétique terrestre, qui s'inverse au cours du temps.</p>",
     "why": "<p>Vine et Matthews (1963) remarquèrent des bandes magnétiques symétriques des deux côtés des dorsales : la preuve que le fond se forme au centre et s'éloigne, comme un tapis roulant.</p>"
    },
    {
     "id": "convezione",
     "label": "Mouvements de convection dans le manteau",
     "x": 30,
     "y": 70,
     "color": "#dc2626",
     "html": "<p>La chaleur interne fait monter lentement les roches chaudes et descendre les roches froides.</p>",
     "why": "<p>C'est le même phénomène que l'eau qui bout dans une casserole, mais très lent (quelques centimètres par an). C'est le « moteur » qui manquait à Wegener.</p>"
    },
    {
     "id": "tettonica",
     "label": "Tectonique des plaques (années 1960)",
     "x": 65,
     "y": 70,
     "color": "#1d4ed8",
     "html": "<p>La lithosphère est divisée en plaques qui se déplacent de 2 à 10 cm par an.</p>",
     "why": "<p>Elle réunit toutes les preuves : structure interne, dorsales, magnétisme, répartition des volcans et des séismes. Aujourd'hui, les satellites GPS mesurent directement le déplacement des continents : l'Atlantique s'élargit d'environ 2 à 3 cm par an.</p>"
    },
    {
     "id": "effetti",
     "label": "Volcans, séismes, montagnes",
     "x": 50,
     "y": 92,
     "color": "#475569",
     "html": "<p>Ils se concentrent le long des limites des plaques.</p>",
     "why": "<p>Là où les plaques s'éloignent, le magma remonte ; là où elles se heurtent, se forment des montagnes et des fosses ; là où elles glissent, une tension s'accumule et se libère dans les séismes. C'est pourquoi l'Italie, à la frontière entre les plaques africaine et eurasienne, a des volcans et des séismes.</p>"
    }
   ],
   "edges": [
    [
     "indizi",
     "wegener",
     "mènent à"
    ],
    [
     "wegener",
     "motore",
     "manque"
    ],
    [
     "onde",
     "convezione",
     "révèlent le manteau"
    ],
    [
     "fondali",
     "tettonica",
     "preuve"
    ],
    [
     "magnetismo",
     "tettonica",
     "preuve"
    ],
    [
     "motore",
     "convezione",
     "réponse"
    ],
    [
     "convezione",
     "tettonica",
     "déplace"
    ],
    [
     "wegener",
     "tettonica",
     "devient"
    ],
    [
     "tettonica",
     "effetti",
     "explique"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Lithosphère",
   "d": "Enveloppe rigide formée de la croûte et de la partie supérieure du manteau, divisée en plaques."
  },
  {
   "t": "Asthénosphère",
   "d": "Partie du manteau chaude et plastique sur laquelle se déplacent les plaques."
  },
  {
   "t": "Subduction",
   "d": "Processus par lequel une plaque plonge sous une autre."
  },
  {
   "t": "Magma",
   "d": "Roche fondue avec des gaz, sous la surface. En surface, elle s'appelle lave."
  },
  {
   "t": "Faille",
   "d": "Fracture de la croûte le long de laquelle les roches se déplacent."
  },
  {
   "t": "Hypocentre",
   "d": "Point en profondeur où commence un séisme."
  },
  {
   "t": "Épicentre",
   "d": "Point de la surface au-dessus de l'hypocentre."
  },
  {
   "t": "Magnitude",
   "d": "Mesure de l'énergie libérée par un séisme."
  },
  {
   "t": "Bradyséisme",
   "d": "Lente montée et descente du sol dans les zones volcaniques."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "order",
    "q": "Range les couches de la surface vers le centre",
    "items": [
     "Croûte",
     "Manteau",
     "Noyau externe",
     "Noyau interne"
    ],
    "explain": "Croûte, manteau, noyau externe (liquide), noyau interne (solide)."
   },
   {
    "type": "mc",
    "q": "De quoi est fait principalement le noyau ?",
    "options": [
     "Granite",
     "Fer et nickel",
     "Silicium et oxygène",
     "Eau"
    ],
    "answer": 1,
    "explain": "Fer et nickel."
   },
   {
    "type": "tf",
    "q": "Le noyau interne est solide malgré la température très élevée.",
    "answer": true,
    "explain": "L'énorme pression empêche le fer de fondre."
   },
   {
    "type": "mc",
    "q": "Qui a proposé la théorie de la dérive des continents ?",
    "options": [
     "Darwin",
     "Wegener",
     "Galilée",
     "Richter"
    ],
    "answer": 1,
    "explain": "Alfred Wegener, en 1912."
   },
   {
    "type": "mc",
    "q": "Que se passe-t-il à une limite divergente ?",
    "options": [
     "Les plaques se heurtent",
     "Les plaques s'éloignent et une nouvelle croûte se forme",
     "Les plaques glissent sur le côté",
     "Rien"
    ],
    "answer": 1,
    "explain": "Le magma remonte et crée une nouvelle croûte océanique : c'est le cas des dorsales."
   },
   {
    "type": "mc",
    "q": "Les éruptions explosives sont typiques des laves :",
    "options": [
     "fluides et pauvres en gaz",
     "visqueuses et riches en gaz",
     "froides",
     "d'eau"
    ],
    "answer": 1,
    "explain": "Le gaz piégé dans la lave visqueuse explose."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le plus haut volcan actif d'Europe ?",
    "answer": [
     "etna",
     "l'etna",
     "l etna"
    ],
    "explain": "L'Etna, en Sicile."
   },
   {
    "type": "tf",
    "q": "La magnitude mesure les dégâts sur les bâtiments.",
    "answer": false,
    "explain": "La magnitude mesure l'énergie ; les dégâts se mesurent avec l'échelle de Mercalli."
   },
   {
    "type": "mc",
    "q": "Pendant un séisme à la maison, il vaut mieux :",
    "options": [
     "Prendre l'ascenseur",
     "S'abriter sous une table solide",
     "Se pencher à la fenêtre",
     "Courir dans les escaliers"
    ],
    "answer": 1,
    "explain": "On s'abrite sous une table ou près d'un mur porteur."
   },
   {
    "type": "mc",
    "q": "Comment s'est formé l'Himalaya ?",
    "options": [
     "Par un volcan",
     "Par la collision entre la plaque indienne et la plaque eurasienne",
     "Par l'érosion",
     "Par une météorite"
    ],
    "answer": 1,
    "explain": "C'est une chaîne née d'une limite convergente."
   },
   {
    "type": "num",
    "q": "À environ combien de km de profondeur se trouve la limite entre le manteau et le noyau ?",
    "answer": 2900,
    "tol": 100,
    "unit": "km",
    "explain": "Environ 2900 km."
   }
  ]
 }
});
