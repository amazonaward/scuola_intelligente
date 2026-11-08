TOPIC('fr', {
 "id": "m3-geo-pianeta",
 "title": "La planète Terre",
 "intro": "Avant de voyager à travers les continents, regardons la Terre d'en haut : comment elle est faite, comment elle s'oriente, comment elle se divise en <b>continents</b> et <b>océans</b>, et pourquoi elle a des <b>climats</b> aussi différents, des glaces polaires aux forêts équatoriales. C'est la boîte à outils du géographe pour toute la troisième année.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "1. Une sphère (presque) parfaite",
   "html": "<p>La Terre est la troisième planète du Système solaire. Elle a la forme d'une sphère légèrement <b>aplatie aux pôles</b> (les scientifiques l'appellent <i>géoïde</i>) :</p>\n<ul>\n<li>circonférence à l'équateur : environ <b>40 075 km</b> ;</li>\n<li>rayon moyen : environ <b>6 371 km</b> ;</li>\n<li>surface totale : environ <b>510 millions de km²</b>, dont environ <b>71 % couverts par les eaux</b> et <b>29 % de terres émergées</b>.</li>\n</ul>\n<p>La Terre accomplit deux mouvements :</p>\n<ul>\n<li><b>rotation</b> sur elle-même, d'ouest en est, en environ <b>24 heures</b> → le jour et la nuit ;</li>\n<li><b>révolution</b> autour du Soleil en environ <b>365 jours et 6 heures</b> → l'année. Comme l'axe terrestre est <b>incliné d'environ 23,5°</b>, au cours de l'année les rayons du Soleil arrivent plus ou moins obliquement : naissent les <b>saisons</b>.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "2. S'orienter : parallèles, méridiens et coordonnées",
   "html": "<p>Pour indiquer avec précision un point sur la Terre, on utilise un réseau de lignes imaginaires :</p>\n<ul>\n<li><b>Parallèles</b> : cercles parallèles à l'<b>équateur</b> (0°). Le plus long est l'équateur ; vers les pôles, ils deviennent de plus en plus petits. La <b>latitude</b> va de 0° à 90° Nord ou Sud.</li>\n<li><b>Méridiens</b> : demi-cercles qui vont de pôle en pôle, tous de même longueur. Le méridien de référence (0°) passe par l'observatoire de <b>Greenwich</b>, près de Londres. La <b>longitude</b> va de 0° à 180° Est ou Ouest.</li>\n</ul>\n<p>Parallèles importants : <b>tropique du Cancer</b> (environ 23,5° N), <b>tropique du Capricorne</b> (environ 23,5° S), <b>cercle polaire arctique</b> et <b>antarctique</b> (environ 66,5°). Rome se trouve à environ <b>41,9° N, 12,5° E</b>.</p>\n<p>Comme la Terre tourne de 360° en 24 heures, toutes les 15° de longitude l'heure change d'une unité : c'est pour cela qu'existent les <b>fuseaux horaires</b>.</p>"
  },
  {
   "type": "3d",
   "title": "Le globe : trouve les lignes et les points",
   "scene": "globe",
   "options": {
    "points": [
     {
      "lat": 0,
      "lon": 0,
      "label": "Équateur × Greenwich (0°, 0°)",
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
      "label": "Tropique du Cancer (Cuba)",
      "color": "#f59e0b"
     },
     {
      "lat": -23.44,
      "lon": -46.6,
      "label": "Tropique du Capricorne (São Paulo)",
      "color": "#f59e0b"
     },
     {
      "lat": 66.56,
      "lon": 25.7,
      "label": "Cercle polaire arctique (Finlande)",
      "color": "#0ea5e9"
     },
     {
      "lat": -90,
      "lon": 0,
      "label": "Pôle Sud",
      "color": "#a855f7"
     },
     {
      "lat": 90,
      "lon": 0,
      "label": "Pôle Nord",
      "color": "#a855f7"
     }
    ]
   },
   "caption": "Fais tourner le globe : suis le méridien de Greenwich de pôle en pôle et trouve l'Italie dans l'hémisphère nord, à l'est de Greenwich."
  },
  {
   "type": "text",
   "title": "3. Continents et océans",
   "html": "<p>Les terres émergées forment <b>6 continents</b> (en comptant l'Amérique du Nord et l'Amérique du Sud séparément, et l'Océanie comme continent ; d'autres écoles, par exemple aux États-Unis, en comptent 7) :</p>\n<table>\n<tr><th>Continent</th><th>Superficie (environ)</th><th>Habitants (environ, 2024)</th></tr>\n<tr><td>Asie</td><td>44,6 millions de km²</td><td>4,8 milliards</td></tr>\n<tr><td>Amérique (Nord + Sud)</td><td>42,5 millions de km²</td><td>1,05 milliard</td></tr>\n<tr><td>Afrique</td><td>30,4 millions de km²</td><td>1,5 milliard</td></tr>\n<tr><td>Antarctique</td><td>14 millions de km²</td><td>aucun habitant permanent</td></tr>\n<tr><td>Europe</td><td>10,2 millions de km²</td><td>745 millions</td></tr>\n<tr><td>Océanie</td><td>8,5 millions de km²</td><td>46 millions</td></tr>\n</table>\n<p>Les <b>océans</b> sont cinq : le <b>Pacifique</b> (le plus grand : à lui seul il est plus étendu que toutes les terres émergées réunies !), l'<b>Atlantique</b>, l'<b>Indien</b>, l'<b>Antarctique</b> (ou Austral) et l'<b>Arctique</b> (le plus petit, en grande partie gelé).</p>"
  },
  {
   "type": "svg",
   "title": "Planisphère schématique : continents et océans",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#7dd3fc\"/>\n<line x1=\"0\" y1=\"160\" x2=\"600\" y2=\"160\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"8 5\"/>\n<text x=\"560\" y=\"154\" font-size=\"13\" fill=\"#b91c1c\" text-anchor=\"end\">Équateur</text>\n<line x1=\"0\" y1=\"118\" x2=\"600\" y2=\"118\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n<line x1=\"0\" y1=\"202\" x2=\"600\" y2=\"202\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n<path d=\"M40 50 L170 40 L190 90 L150 120 L130 140 L100 120 L60 90 Z\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"2\"/>\n<text x=\"115\" y=\"85\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#14532d\">Amérique du N.</text>\n<path d=\"M140 150 L190 160 L200 200 L170 270 L150 270 L145 210 Z\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"2\"/>\n<text x=\"170\" y=\"210\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#14532d\">Amérique du S.</text>\n<path d=\"M270 50 L330 45 L330 95 L280 100 Z\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/>\n<text x=\"300\" y=\"78\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#78350f\">Europe</text>\n<path d=\"M270 110 L340 105 L360 150 L340 230 L310 240 L290 180 L265 150 Z\" fill=\"#fb923c\" stroke=\"#9a3412\" stroke-width=\"2\"/>\n<text x=\"310\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#7c2d12\">Afrique</text>\n<path d=\"M335 40 L520 35 L540 90 L500 130 L430 140 L380 120 L340 100 Z\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n<text x=\"440\" y=\"85\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#7f1d1d\">Asie</text>\n<path d=\"M470 200 L540 195 L550 240 L490 250 Z\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"2\"/>\n<text x=\"510\" y=\"228\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4c1d95\">Océanie</text>\n<rect x=\"0\" y=\"292\" width=\"600\" height=\"28\" fill=\"#f1f5f9\"/>\n<text x=\"300\" y=\"312\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#334155\">Antarctique</text>\n<text x=\"40\" y=\"200\" font-size=\"15\" fill=\"#0c4a6e\" font-weight=\"bold\">Pacifique</text>\n<text x=\"225\" y=\"140\" font-size=\"14\" fill=\"#0c4a6e\" font-weight=\"bold\">Atlantique</text>\n<text x=\"410\" y=\"200\" font-size=\"15\" fill=\"#0c4a6e\" font-weight=\"bold\">Indien</text>\n<text x=\"300\" y=\"22\" font-size=\"14\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">Arctique</text>\n<text x=\"300\" y=\"285\" font-size=\"13\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">Antarctique</text>\n</svg>",
   "caption": "Schéma non à l'échelle. Les lignes orange en pointillés sont les tropiques du Cancer (au-dessus) et du Capricorne (en dessous)."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : forme et coordonnées",
   "questions": [
    {
     "type": "mc",
     "q": "Quel pourcentage de la surface terrestre est couvert par les eaux ?",
     "options": [
      "Environ 29 %",
      "Environ 50 %",
      "Environ 71 %"
     ],
     "answer": 2,
     "explain": "Environ 71 % est de l'eau, 29 % de terres émergées."
    },
    {
     "type": "mc",
     "q": "Comment s'appelle la distance d'un point à l'équateur, en degrés ?",
     "options": [
      "Longitude",
      "Latitude",
      "Altitude"
     ],
     "answer": 1,
     "explain": "La latitude va de 0° (équateur) à 90° (pôles)."
    },
    {
     "type": "num",
     "q": "De combien de degrés de longitude change un fuseau horaire ?",
     "answer": 15,
     "tol": 0,
     "unit": "°",
     "explain": "360° : 24 heures = 15° pour chaque heure."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. La Terre en mouvement : plaques et reliefs",
   "html": "<p>La croûte terrestre est divisée en grandes <b>plaques</b> qui se déplacent de quelques centimètres par an (à peu près la vitesse de croissance des ongles). Là où elles se heurtent naissent des <b>chaînes de montagnes</b> (Alpes, Himalaya, Andes), des <b>volcans</b> et des <b>séismes</b> ; là où elles s'éloignent, des océans s'ouvrent.</p>\n<p>Il y a environ 300 millions d'années, toutes les terres étaient réunies en un seul supercontinent, la <b>Pangée</b>. Cette idée fut proposée en <b>1912</b> par l'Allemand <b>Alfred Wegener</b> (dérive des continents) et démontrée dans les années 1960 avec la <b>tectonique des plaques</b>.</p>\n<p>Les reliefs les plus hauts : l'<b>Everest</b> (8 849 m, en Asie, entre le Népal et la Chine). Le point le plus profond des océans : la <b>fosse des Mariannes</b> (près de 11 000 m, dans le Pacifique).</p>"
  },
  {
   "type": "3d",
   "title": "Le paysage de la Terre en 3D",
   "scene": "terrain",
   "options": {
    "features": {
     "mountain": {
      "label": "Chaîne de montagnes",
      "html": "Naît du choc entre plaques. Exemples : l'<b>Himalaya</b> (Asie), les <b>Andes</b> (Amérique du Sud, la chaîne la plus longue, environ 7 000 km), les <b>Alpes</b>."
     },
     "peak": {
      "label": "Sommet",
      "html": "Le point le plus haut d'une montagne. Le sommet le plus haut du monde est l'<b>Everest</b>, 8 849 m."
     },
     "glacier": {
      "label": "Glacier",
      "html": "Masse de glace qui se forme là où il neige plus qu'il ne fond. Environ 70 % de l'eau douce de la Terre est gelée, surtout en Antarctique et au Groenland."
     },
     "plain": {
      "label": "Plaine",
      "html": "De grandes plaines : la <b>plaine sarmatique</b> (Europe orientale), les <b>Grandes Plaines</b> des États-Unis, la <b>pampa</b> argentine. Ce sont les zones les plus cultivées et les plus peuplées."
     },
     "river": {
      "label": "Fleuve",
      "html": "Les fleuves les plus longs : le <b>Nil</b> (environ 6 650 km) et l'<b>Amazone</b> (le plus riche en eau du monde)."
     },
     "volcano": {
      "label": "Volcan",
      "html": "Environ 75 % des volcans actifs se trouvent autour du Pacifique, dans la <b>Ceinture de feu</b>."
     },
     "sea": {
      "label": "Océan",
      "html": "Le Pacifique couvre environ un tiers de la surface terrestre."
     },
     "island": {
      "label": "Île",
      "html": "La plus grande île du monde est le <b>Groenland</b> (environ 2,2 millions de km²). L'Australie est considérée comme un continent."
     },
     "lake": {
      "label": "Lac",
      "html": "La <b>mer Caspienne</b> est le plus grand lac ; le <b>Baïkal</b> (Russie) le plus profond, à plus de 1 600 m."
     },
     "delta": {
      "label": "Delta",
      "html": "Embouchure en éventail. Les plus grands deltas : Gange-Brahmapoutre (Bangladesh), Nil, Mississippi."
     }
    }
   },
   "caption": "Fais tourner le paysage et touche les parties : pour chacune, découvre le record mondial."
  },
  {
   "type": "text",
   "title": "5. Les climats : pourquoi il fait chaud ou froid",
   "html": "<p>Le <b>temps atmosphérique</b> est celui d'aujourd'hui (il pleut, il y a du soleil). Le <b>climat</b> est l'ensemble des conditions moyennes d'un lieu, calculées sur au moins <b>30 ans</b>.</p>\n<p>Les <b>facteurs du climat</b> :</p>\n<ul>\n<li><b>Latitude</b> : à l'équateur, les rayons solaires arrivent presque perpendiculairement et chauffent beaucoup ; aux pôles, ils arrivent très obliquement et chauffent peu.</li>\n<li><b>Altitude</b> : en montant, la température baisse d'environ <b>0,6 °C tous les 100 m</b>.</li>\n<li><b>Proximité de la mer</b> : la mer se réchauffe et se refroidit lentement, ce qui rend le climat plus doux.</li>\n<li><b>Courants marins</b> : le <b>Gulf Stream</b> (courant du Golfe) apporte de l'eau chaude vers l'Europe du Nord.</li>\n<li><b>Vents et reliefs</b> : les montagnes peuvent arrêter les pluies (comme l'Himalaya avec les moussons).</li>\n</ul>\n<p>Le scientifique russo-allemand <b>Wladimir Köppen</b> classa les climats (1900–1936) en grands groupes :</p>\n<table>\n<tr><th>Climat</th><th>Où</th><th>Milieu</th></tr>\n<tr><td>🌴 Équatorial / tropical</td><td>entre les Tropiques</td><td>forêt pluviale, savane</td></tr>\n<tr><td>🏜️ Aride</td><td>près des Tropiques, à l'intérieur des continents</td><td>désert, steppe</td></tr>\n<tr><td>🌳 Tempéré</td><td>latitudes moyennes (l'Italie !)</td><td>maquis méditerranéen, forêt de feuillus</td></tr>\n<tr><td>🌲 Froid (continental)</td><td>Nord de l'Europe, de l'Asie et de l'Amérique</td><td>taïga (forêt de conifères)</td></tr>\n<tr><td>🧊 Polaire</td><td>au-delà des cercles polaires</td><td>toundra, glaces</td></tr>\n</table>"
  },
  {
   "type": "3d",
   "title": "Les zones climatiques en couches",
   "scene": "layers",
   "options": {
    "layers": [
     {
      "r": 1,
      "color": "#e0f2fe",
      "label": "Polaire (au-delà de 66,5°)"
     },
     {
      "r": 0.85,
      "color": "#166534",
      "label": "Froid continental (taïga)"
     },
     {
      "r": 0.7,
      "color": "#84cc16",
      "label": "Tempéré (latitudes moyennes)"
     },
     {
      "r": 0.52,
      "color": "#facc15",
      "label": "Aride (déserts des Tropiques)"
     },
     {
      "r": 0.35,
      "color": "#15803d",
      "label": "Équatorial (forêt pluviale)"
     }
    ]
   },
   "caption": "Modèle simplifié : imagine partir d'un pôle (couche extérieure) et descendre vers l'équateur (centre). En réalité, les zones sont interrompues par les mers, les montagnes et les courants."
  },
  {
   "type": "example",
   "title": "Exemple pratique : pourquoi il fait moins froid à Londres qu'à Montréal ?",
   "html": "<p><b>Londres</b> (51,5° N) est plus au nord que <b>Montréal</b> (45,5° N), et pourtant, en janvier, à Londres la température moyenne est d'environ <b>+5 °C</b>, à Montréal d'environ <b>−10 °C</b>.</p>\n<p>Pourquoi ? Londres reçoit les vents humides de l'Atlantique, réchauffé par le <b>Gulf Stream</b> ; Montréal est à l'intérieur du continent et, en hiver, reçoit l'air glacial de l'Arctique canadien. Donc la latitude ne suffit pas : comptent aussi la <b>mer</b>, les <b>courants</b> et les <b>vents</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : calcule l'heure à New York",
   "html": "<p>Il est <b>15 h</b> à Rome. New York se trouve à environ 74° ouest, Rome à environ 12° est : au total, environ <b>86° de différence</b>, soit presque 6 fuseaux. En pratique, entre Rome et New York il y a <b>6 heures</b> de décalage (les fuseaux suivent aussi les frontières des États).</p>\n<p>New York est plus à l'ouest, donc le Soleil y arrive plus tard : il y est <b>9 h</b> du matin. Si tu téléphones à un ami à <b>Tokyo</b> (+8 heures par rapport à Rome, sans heure d'été), il y est <b>23 h</b> !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le saviez-vous ? Ératosthène a mesuré la Terre avec un bâton ?",
   "html": "<p>Vers <b>240 av. J.-C.</b>, le Grec <b>Ératosthène</b>, bibliothécaire à Alexandrie d'Égypte, remarqua qu'à Syène (l'actuelle Assouan), à midi du solstice d'été, le Soleil éclairait le fond d'un puits, tandis qu'à Alexandrie un bâton projetait une ombre d'environ <b>7°</b>. Connaissant la distance entre les deux villes, il calcula la circonférence terrestre : environ <b>250 000 stades</b>, une valeur très proche de la valeur réelle. Il y a plus de 2 200 ans, sans satellites !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le saviez-vous ? Le point le plus éloigné du centre de la Terre n'est pas l'Everest ?",
   "html": "<p>Comme la Terre est plus « renflée » à l'équateur, le point le plus éloigné du centre de la Terre est le sommet du volcan <b>Chimborazo</b> en Équateur (6 263 m), presque sur l'équateur : il est environ 2 km plus « loin » du centre que le sommet de l'Everest, bien qu'il soit plus bas par rapport au niveau de la mer.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre la planète",
   "intro": "Coordonnées, fuseaux et climats peuvent sembler abstraits : essaie ainsi.",
   "tabs": [
    {
     "label": "🍊 Analogie : l'orange",
     "html": "<p>Prends une orange et un feutre.</p>\n<ul>\n<li>Dessine une ligne autour du « ventre » : c'est l'<b>équateur</b>.</li>\n<li>Dessine d'autres cercles plus petits au-dessus et en dessous : ce sont les <b>parallèles</b>.</li>\n<li>Suis maintenant les « quartiers » d'un pôle à l'autre : ce sont les <b>méridiens</b> ! Chaque quartier large de 15° correspond à une heure de fuseau horaire.</li>\n</ul>\n<p>Essaie d'éplucher l'orange et d'aplatir la peau : elle se déchire. C'est pourquoi <b>aucune carte plane n'est parfaite</b> : toutes déforment quelque chose (dans la projection de Mercator, le Groenland semble aussi grand que l'Afrique, qui en réalité est environ 14 fois plus grande !).</p>"
    },
    {
     "label": "🔦 Expérience : la lampe de poche",
     "html": "<p>Dans le noir, pointe une lampe <b>droite</b> sur une feuille : tu vois un cercle petit et très lumineux (comme à l'équateur). Incline maintenant la lampe : la lumière s'étale en une ellipse grande et plus faible (comme aux pôles). <b>La même énergie répartie sur une surface plus grande chauffe moins</b> : c'est le premier facteur du climat.</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#1e293b\"/>\n<rect x=\"40\" y=\"180\" width=\"520\" height=\"30\" fill=\"#e2e8f0\"/>\n<rect x=\"120\" y=\"20\" width=\"40\" height=\"70\" rx=\"6\" fill=\"#f59e0b\"/>\n<polygon points=\"125,90 155,90 175,180 105,180\" fill=\"#fde047\" opacity=\"0.85\"/>\n<text x=\"140\" y=\"230\" font-size=\"16\" fill=\"#fde047\" text-anchor=\"middle\" font-weight=\"bold\">Équateur : lumière concentrée</text>\n<rect x=\"380\" y=\"30\" width=\"40\" height=\"70\" rx=\"6\" fill=\"#f59e0b\" transform=\"rotate(-45 400 65)\"/>\n<polygon points=\"420,95 440,110 560,180 340,180\" fill=\"#fde047\" opacity=\"0.4\"/>\n<text x=\"450\" y=\"230\" font-size=\"16\" fill=\"#fde047\" text-anchor=\"middle\" font-weight=\"bold\">Pôles : lumière dispersée</text>\n</svg>"
    },
    {
     "label": "🧩 Jeu : associe climat et milieu",
     "html": "<p>Chaque climat a son milieu typique. Associe-les.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "Équatorial",
        "Forêt pluviale"
       ],
       [
        "Tropical sec/humide",
        "Savane"
       ],
       [
        "Aride",
        "Désert"
       ],
       [
        "Méditerranéen",
        "Maquis méditerranéen"
       ],
       [
        "Froid continental",
        "Taïga"
       ],
       [
        "Polaire",
        "Toundra et glaces"
       ]
      ]
     }
    },
    {
     "label": "🗺️ Comment on compte dans le monde",
     "html": "<p>Le nombre de continents dépend du pays où l'on va à l'école !</p>\n<ul>\n<li><b>Italie</b> : en général 6 (Europe, Asie, Afrique, Amérique, Océanie, Antarctique), avec l'Amérique parfois divisée en deux.</li>\n<li><b>États-Unis, Chine, Inde, Royaume-Uni</b> : 7 (Amérique du Nord et Amérique du Sud séparées).</li>\n<li><b>Beaucoup de pays d'Amérique latine, l'Espagne, la Grèce</b> : souvent 6, avec une seule Amérique.</li>\n<li><b>Symbole olympique</b> : 5 anneaux = 5 continents habités (Antarctique exclue, Amérique unie).</li>\n</ul>\n<p>Ce n'est pas une question de juste ou de faux : c'est une <b>convention</b>, c'est-à-dire un accord entre des personnes.</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte de la planète : touche les nœuds et découvre le pourquoi",
   "nodes": [
    {
     "id": "sfera",
     "label": "Terre sphérique",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Une sphère légèrement aplatie aux pôles, de rayon d'environ 6 371 km.",
     "why": "Déjà Aristote (IVe s. av. J.-C.) remarqua l'ombre ronde de la Terre sur la Lune pendant les éclipses ; Ératosthène la mesura ; Newton comprit que la rotation l'aplatit aux pôles, et les expéditions françaises de 1735–1744 le confirmèrent."
    },
    {
     "id": "rotazione",
     "label": "Rotation",
     "x": 15,
     "y": 25,
     "color": "#0ea5e9",
     "html": "Un tour sur elle-même en environ 24 heures.",
     "why": "Démontrée de façon spectaculaire par le physicien français Léon Foucault en 1851, avec un grand pendule suspendu au Panthéon de Paris dont la direction change lentement."
    },
    {
     "id": "rivoluzione",
     "label": "Révolution et axe incliné",
     "x": 85,
     "y": 25,
     "color": "#f59e0b",
     "html": "Un tour autour du Soleil en environ 365 jours ; axe incliné d'environ 23,5°.",
     "why": "Copernic (1543) proposa que la Terre tourne autour du Soleil ; Galilée et Kepler le confirmèrent. L'inclinaison de l'axe fait varier au cours de l'année la hauteur du Soleil : c'est pourquoi existent les saisons."
    },
    {
     "id": "reticolo",
     "label": "Réseau géographique",
     "x": 15,
     "y": 50,
     "color": "#a855f7",
     "html": "Parallèles, méridiens, latitude et longitude.",
     "why": "Le réseau fut déjà utilisé par Ptolémée (IIe s. ap. J.-C.). Le méridien zéro fut fixé à Greenwich en 1884, à la Conférence internationale de Washington, parce que la plupart des cartes marines utilisaient déjà Greenwich."
    },
    {
     "id": "fusi",
     "label": "Fuseaux horaires",
     "x": 15,
     "y": 78,
     "color": "#6366f1",
     "html": "24 fuseaux de 15° chacun.",
     "why": "Avec les chemins de fer du XIXe siècle, chaque ville avait son heure solaire et les horaires des trains étaient un chaos : on adopta donc des fuseaux standard."
    },
    {
     "id": "placche",
     "label": "Plaques tectoniques",
     "x": 50,
     "y": 40,
     "color": "#b45309",
     "html": "La croûte est divisée en plaques en lent mouvement.",
     "why": "Wegener (1912) remarqua que les côtes d'Afrique et d'Amérique du Sud s'emboîtent comme les pièces d'un puzzle et qu'on y trouve les mêmes fossiles. Dans les années 1960, l'étude des fonds océaniques démontra que les plaques se déplacent."
    },
    {
     "id": "continenti",
     "label": "Continents et océans",
     "x": 50,
     "y": 66,
     "color": "#16a34a",
     "html": "6 (ou 7) continents, 5 océans ; 29 % de terres, 71 % d'eau.",
     "why": "Ils sont le résultat de centaines de millions d'années de mouvement des plaques : autrefois, toutes les terres étaient réunies dans la Pangée."
    },
    {
     "id": "fattori",
     "label": "Facteurs du climat",
     "x": 85,
     "y": 50,
     "color": "#ef4444",
     "html": "Latitude, altitude, mer, courants, vents, reliefs.",
     "why": "Tous dépendent de la manière dont l'énergie du Soleil arrive et se répartit : plus les rayons sont obliques, moins il fait chaud ; l'air en altitude est raréfié et retient moins la chaleur ; l'eau a une grande capacité à conserver la chaleur."
    },
    {
     "id": "climi",
     "label": "Climats et milieux",
     "x": 85,
     "y": 78,
     "color": "#22c55e",
     "html": "Équatorial, aride, tempéré, froid, polaire.",
     "why": "La classification la plus utilisée est celle de Wladimir Köppen, fondée sur les températures, les pluies et la végétation : les plantes sont le meilleur « thermomètre » du climat."
    },
    {
     "id": "uomo",
     "label": "Population",
     "x": 50,
     "y": 92,
     "color": "#ec4899",
     "html": "Plus de 8 milliards de personnes, réparties de façon très inégale.",
     "why": "Les gens vivent surtout là où le climat, l'eau et les plaines permettent l'agriculture : les zones tempérées et les grandes vallées fluviales d'Asie. Déserts, pôles et hautes montagnes sont presque vides."
    }
   ],
   "edges": [
    [
     "sfera",
     "rotazione",
     "effectue la"
    ],
    [
     "sfera",
     "rivoluzione",
     "effectue la"
    ],
    [
     "rotazione",
     "reticolo",
     "axe et pôles →"
    ],
    [
     "reticolo",
     "fusi",
     "15° = 1 heure"
    ],
    [
     "rivoluzione",
     "fattori",
     "saisons →"
    ],
    [
     "sfera",
     "placche",
     "croûte divisée en"
    ],
    [
     "placche",
     "continenti",
     "forment"
    ],
    [
     "fattori",
     "climi",
     "déterminent"
    ],
    [
     "continenti",
     "uomo",
     "accueillent la"
    ],
    [
     "climi",
     "uomo",
     "influencent la"
    ]
   ]
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>La Terre est une sphère aplatie aux pôles ; <b>71 % d'eau</b>, <b>29 % de terres</b>.</li>\n<li><b>Rotation</b> (24 h) → jour et nuit ; <b>révolution</b> (365 jours) + axe incliné → saisons.</li>\n<li><b>Latitude</b> (parallèles, de 0° à 90° N/S) et <b>longitude</b> (méridiens, de 0° à 180° E/O, à partir de Greenwich).</li>\n<li>Continents : Asie, Amérique, Afrique, Antarctique, Europe, Océanie. Océans : Pacifique, Atlantique, Indien, Antarctique, Arctique.</li>\n<li>Facteurs du climat : latitude, altitude, mer, courants, vents. Climats : équatorial, aride, tempéré, froid, polaire.</li>\n</ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : continents et climats",
   "questions": [
    {
     "type": "mc",
     "q": "Quel est le plus grand océan ?",
     "options": [
      "Atlantique",
      "Indien",
      "Pacifique"
     ],
     "answer": 2,
     "explain": "Le Pacifique, plus étendu que toutes les terres émergées réunies."
    },
    {
     "type": "tf",
     "q": "En montant en montagne, la température baisse d'environ 0,6 °C tous les 100 m.",
     "answer": true,
     "explain": "C'est le gradient thermique vertical moyen."
    },
    {
     "type": "mc",
     "q": "Dans quelle zone climatique se trouve la taïga ?",
     "options": [
      "Équatorial",
      "Froid continental",
      "Aride"
     ],
     "answer": 1,
     "explain": "La taïga est la forêt de conifères du climat froid continental."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Géoïde",
   "d": "Forme réelle de la Terre : une sphère légèrement aplatie aux pôles et irrégulière."
  },
  {
   "t": "Latitude",
   "d": "Distance angulaire d'un point à l'équateur (0°–90° N ou S)."
  },
  {
   "t": "Longitude",
   "d": "Distance angulaire d'un point au méridien de Greenwich (0°–180° E ou O)."
  },
  {
   "t": "Fuseau horaire",
   "d": "Fuseau d'environ 15° de longitude ayant la même heure conventionnelle."
  },
  {
   "t": "Tropiques",
   "d": "Parallèles situés à environ 23,5° N (Cancer) et S (Capricorne) : le Soleil ne peut être au zénith qu'entre eux."
  },
  {
   "t": "Plaque tectonique",
   "d": "Grande portion rigide de la croûte terrestre qui se déplace lentement."
  },
  {
   "t": "Pangée",
   "d": "Supercontinent unique ayant existé il y a environ 300–200 millions d'années."
  },
  {
   "t": "Climat",
   "d": "Conditions atmosphériques moyennes d'un lieu, calculées sur au moins 30 ans."
  },
  {
   "t": "Courant marin",
   "d": "Grand « fleuve » d'eau à l'intérieur des océans, chaud ou froid."
  },
  {
   "t": "Taïga",
   "d": "Forêt de conifères des régions au climat froid continental."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Quel mouvement de la Terre provoque l'alternance du jour et de la nuit ?",
    "options": [
     "La révolution",
     "La rotation",
     "La dérive des continents"
    ],
    "answer": 1,
    "explain": "La rotation sur elle-même en environ 24 heures."
   },
   {
    "type": "mc",
    "q": "Pourquoi existent les saisons ?",
    "options": [
     "Parce qu'en été la Terre est plus proche du Soleil",
     "Parce que l'axe terrestre est incliné",
     "Parce que la Lune cache le Soleil"
    ],
    "answer": 1,
    "explain": "L'inclinaison de l'axe (environ 23,5°) modifie l'angle des rayons solaires au cours de l'année. En fait, la Terre est plus proche du Soleil en janvier !"
   },
   {
    "type": "text",
    "q": "Par quel lieu passe le méridien de référence (0°) ?",
    "answer": [
     "greenwich"
    ],
    "explain": "Par l'observatoire de Greenwich, près de Londres."
   },
   {
    "type": "num",
    "q": "Combien de degrés de latitude a le pôle Nord ?",
    "answer": 90,
    "tol": 0,
    "unit": "°",
    "explain": "Les pôles sont à 90° N et 90° S."
   },
   {
    "type": "mc",
    "q": "Quel est le continent le plus grand et le plus peuplé ?",
    "options": [
     "Afrique",
     "Amérique",
     "Asie"
    ],
    "answer": 2,
    "explain": "L'Asie : environ 44,6 millions de km² et 4,8 milliards d'habitants."
   },
   {
    "type": "tf",
    "q": "L'Antarctique a une population permanente de plusieurs millions de personnes.",
    "answer": false,
    "explain": "On ne trouve en Antarctique que des scientifiques dans des bases de recherche, pour des périodes limitées."
   },
   {
    "type": "mc",
    "q": "Qui proposa la théorie de la dérive des continents en 1912 ?",
    "options": [
     "Alfred Wegener",
     "Galileo Galilei",
     "Wladimir Köppen"
    ],
    "answer": 0,
    "explain": "Le géophysicien allemand Alfred Wegener."
   },
   {
    "type": "order",
    "q": "Mets les climats dans l'ordre, de l'équateur vers le pôle.",
    "items": [
     "Équatorial",
     "Aride (tropical)",
     "Tempéré",
     "Froid continental",
     "Polaire"
    ],
    "explain": "En s'éloignant de l'équateur, les rayons solaires sont de plus en plus obliques et il fait de plus en plus froid."
   },
   {
    "type": "mc",
    "q": "Pourquoi Londres est-elle plus douce en hiver que Montréal, alors qu'elle est plus au nord ?",
    "options": [
     "Parce que c'est une ville plus grande",
     "À cause de l'influence de l'Atlantique et du Gulf Stream",
     "Parce qu'elle est plus haute au-dessus du niveau de la mer"
    ],
    "answer": 1,
    "explain": "La mer et le courant chaud adoucissent le climat de l'Europe du Nord-Ouest."
   },
   {
    "type": "num",
    "q": "Il est 12 h à Rome. Quelle heure est-il à New York (6 heures de décalage) ?",
    "answer": 6,
    "tol": 0,
    "explain": "12 − 6 = 6 : il est 6 h du matin."
   },
   {
    "type": "tf",
    "q": "Le climat, c'est le temps qu'il fait aujourd'hui.",
    "answer": false,
    "explain": "Le temps est celui du moment ; le climat est la moyenne sur au moins 30 ans."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le supercontinent unique d'il y a environ 300 millions d'années ?",
    "answer": [
     "pangée",
     "la pangée",
     "pangea",
     "la pangea"
    ],
    "explain": "La Pangée, qui signifie « toute la terre »."
   }
  ]
 }
});
