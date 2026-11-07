TOPIC('fr', {
 "id": "p4-mat-poligoni",
 "title": "Les polygones",
 "intro": "Regarde autour de toi : le cahier est un rectangle, le panneau STOP est un octogone, les alvéoles des abeilles sont des hexagones. Ce sont tous des <b>polygones</b> ! Apprenons à les reconnaître, à leur donner un nom et à découvrir les secrets des <b>triangles</b> et des <b>quadrilatères</b>.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Qu'est-ce qu'un polygone",
   "html": "<p>Prends un crayon et dessine une ligne qui part d'un point et, faite de <b>nombreux morceaux droits</b>, revient exactement au point de départ sans jamais se croiser. Tu as dessiné une <b>ligne brisée fermée</b>.</p>\n<p>Le <b>polygone</b> est la partie du plan enfermée par une ligne brisée fermée, <b>avec</b> la ligne elle-même (son contour).</p>\n<p>Chaque polygone a :</p>\n<ul>\n<li>des <b>côtés</b> : les segments droits du contour ;</li>\n<li>des <b>sommets</b> : les points où deux côtés se rencontrent ;</li>\n<li>des <b>angles</b> : les « ouvertures » entre deux côtés voisins, à chaque sommet ;</li>\n<li>des <b>diagonales</b> : les segments qui relient deux sommets <b>non voisins</b>.</li>\n</ul>\n<p>Dans chaque polygone, le nombre de côtés, de sommets et d'angles est <b>toujours le même</b> : un polygone à 5 côtés a aussi 5 sommets et 5 angles.</p>\n<p><b>Ne sont pas des polygones</b> : le cercle (le contour est courbe), une figure ouverte, une figure dont les côtés se croisent.</p>"
  },
  {
   "type": "svg",
   "title": "Les parties d'un polygone",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/>\n<polygon points=\"120,230 90,120 200,50 310,110 280,230\" fill=\"#bae6fd\" stroke=\"#1e40af\" stroke-width=\"5\"/>\n<line x1=\"90\" y1=\"120\" x2=\"310\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<line x1=\"200\" y1=\"50\" x2=\"120\" y2=\"230\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<circle cx=\"200\" cy=\"50\" r=\"9\" fill=\"#f59e0b\" stroke=\"#78350f\" stroke-width=\"2\"/>\n<path d=\"M 105 210 A 25 25 0 0 1 140 228\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<text x=\"350\" y=\"60\" font-size=\"20\" fill=\"#f59e0b\" font-weight=\"bold\">● sommet</text>\n<text x=\"350\" y=\"110\" font-size=\"20\" fill=\"#1e40af\" font-weight=\"bold\">━ côté</text>\n<text x=\"350\" y=\"160\" font-size=\"20\" fill=\"#16a34a\" font-weight=\"bold\">◜ angle</text>\n<text x=\"350\" y=\"210\" font-size=\"20\" fill=\"#dc2626\" font-weight=\"bold\">┅ diagonale</text>\n<text x=\"200\" y=\"280\" font-size=\"18\" fill=\"#1f2937\" text-anchor=\"middle\">Pentagone : 5 côtés, 5 sommets, 5 angles</text>\n</svg>",
   "caption": "Le pentagone a 5 côtés, 5 sommets, 5 angles et 5 diagonales (ici tu en vois 2)."
  },
  {
   "type": "text",
   "title": "Le nom dépend du nombre de côtés",
   "html": "<p>Le mot <b>polygone</b> vient du grec : <i>polýs</i> = « nombreux » et <i>gonía</i> = « angle ». Donc « polygone » veut dire « figure à nombreux angles ».</p>\n<table>\n<tr><th>Côtés</th><th>Nom</th><th>Où le voit-on</th></tr>\n<tr><td>3</td><td><b>Triangle</b></td><td>panneau de danger ⚠️</td></tr>\n<tr><td>4</td><td><b>Quadrilatère</b></td><td>fenêtre, feuille, écran</td></tr>\n<tr><td>5</td><td><b>Pentagone</b></td><td>les taches noires du ballon ⚽</td></tr>\n<tr><td>6</td><td><b>Hexagone</b></td><td>alvéoles des abeilles 🐝, écrou de boulon</td></tr>\n<tr><td>7</td><td><b>Heptagone</b></td><td>certaines pièces anglaises</td></tr>\n<tr><td>8</td><td><b>Octogone</b></td><td>panneau STOP 🛑</td></tr>\n<tr><td>9</td><td><b>Ennéagone</b></td><td></td></tr>\n<tr><td>10</td><td><b>Décagone</b></td><td></td></tr>\n</table>\n<p>Le polygone avec le <b>plus petit nombre de côtés</b> est le triangle : avec 2 seuls segments, on ne peut pas fermer une figure !</p>"
  },
  {
   "type": "text",
   "title": "Convexes, concaves et réguliers",
   "html": "<ul>\n<li>Un polygone est <b>convexe</b> si aucun côté, prolongé, n'entre à l'intérieur de la figure. Tous ses angles sont plus petits qu'un angle plat (180°).</li>\n<li>Un polygone est <b>concave</b> s'il a un « creux », comme une étoile ou une flèche : au moins un côté prolongé entre dans la figure et au moins un angle est plus grand que 180°.</li>\n<li>Un polygone est <b>régulier</b> s'il a <b>tous les côtés égaux</b> et <b>tous les angles égaux</b> : le triangle équilatéral, le carré, l'hexagone des abeilles…</li>\n</ul>\n<p>Attention : le <b>losange</b> a 4 côtés égaux mais pas les angles, donc il n'est <b>pas</b> régulier. Le <b>rectangle</b> a 4 angles égaux mais pas les côtés, donc lui non plus n'est <b>pas</b> régulier. Seul le <b>carré</b> a les deux !</p>"
  },
  {
   "type": "svg",
   "title": "Convexe, concave, régulier",
   "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#fefce8\"/>\n<polygon points=\"40,200 70,80 170,60 190,190\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"4\"/>\n<text x=\"115\" y=\"245\" font-size=\"20\" fill=\"#166534\" text-anchor=\"middle\" font-weight=\"bold\">convexe</text>\n<polygon points=\"300,50 325,120 395,125 340,165 360,235 300,195 240,235 260,165 205,125 275,120\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n<text x=\"300\" y=\"270\" font-size=\"20\" fill=\"#991b1b\" text-anchor=\"middle\" font-weight=\"bold\">concave (étoile)</text>\n<polygon points=\"490,60 550,95 550,165 490,200 430,165 430,95\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<text x=\"490\" y=\"245\" font-size=\"20\" fill=\"#1e3a8a\" text-anchor=\"middle\" font-weight=\"bold\">régulier (hexagone)</text>\n</svg>",
   "caption": "L'étoile a des « creux » : elle est concave. L'hexagone a tous les côtés et tous les angles égaux : il est régulier."
  },
  {
   "type": "widget",
   "title": "Trouve les parties du polygone",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<polygon points=\"150,250 100,110 300,40 500,110 450,250\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"5\"/>\n<line x1=\"100\" y1=\"110\" x2=\"500\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<path d=\"M 420 250 A 30 30 0 0 1 462 226\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<circle cx=\"300\" cy=\"40\" r=\"9\" fill=\"#1d4ed8\"/>\n</svg>",
    "spots": [
     {
      "x": 300,
      "y": 40,
      "label": "Sommet"
     },
     {
      "x": 300,
      "y": 250,
      "label": "Côté"
     },
     {
      "x": 300,
      "y": 110,
      "label": "Diagonale"
     },
     {
      "x": 440,
      "y": 235,
      "label": "Angle"
     },
     {
      "x": 300,
      "y": 180,
      "label": "Région intérieure"
     }
    ]
   },
   "caption": "Touche chaque point et choisis le bon nom."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : reconnaître les polygones",
   "questions": [
    {
     "type": "mc",
     "q": "Laquelle de ces figures N'EST PAS un polygone ?",
     "options": [
      "Le carré",
      "Le cercle",
      "Le triangle"
     ],
     "answer": 1,
     "explain": "Le cercle a le contour courbe : un polygone n'a que des côtés droits."
    },
    {
     "type": "num",
     "q": "Combien de sommets a un octogone ?",
     "answer": 8,
     "explain": "Côtés, sommets et angles sont toujours en même nombre : 8."
    },
    {
     "type": "tf",
     "q": "Le losange est un polygone régulier.",
     "answer": false,
     "explain": "Il a les côtés égaux mais pas les angles : pour être régulier, il faut les deux."
    }
   ]
  },
  {
   "type": "text",
   "title": "Les triangles",
   "html": "<p>Le triangle a 3 côtés, 3 sommets, 3 angles et <b>aucune diagonale</b>. C'est le polygone le plus « solide » : si tu construis un triangle avec trois bâtonnets, il ne se déforme pas !</p>\n<p><b>Classification selon les côtés</b> :</p>\n<ul>\n<li><b>équilatéral</b> : 3 côtés égaux (et 3 angles égaux de 60°) ;</li>\n<li><b>isocèle</b> : 2 côtés égaux (et 2 angles égaux à la base) ;</li>\n<li><b>scalène</b> : 3 côtés différents.</li>\n</ul>\n<p><b>Classification selon les angles</b> :</p>\n<ul>\n<li><b>rectangle</b> : il a un angle <b>droit</b> (90°), comme le coin d'une feuille ;</li>\n<li><b>acutangle</b> : 3 angles <b>aigus</b> (plus petits que 90°) ;</li>\n<li><b>obtusangle</b> : un angle <b>obtus</b> (plus grand que 90°).</li>\n</ul>\n<p>⭐ La règle d'or : <b>la somme des angles d'un triangle est toujours 180°</b>, c'est-à-dire un angle plat.</p>\n<p>Une autre règle : dans un triangle, <b>chaque côté est plus court que la somme des deux autres</b>. Avec des bâtonnets de 2, 3 et 10 cm, le triangle ne se ferme pas !</p>"
  },
  {
   "type": "svg",
   "title": "La famille des triangles",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fdf4ff\"/>\n<text x=\"300\" y=\"26\" font-size=\"18\" fill=\"#6b21a8\" text-anchor=\"middle\" font-weight=\"bold\">Selon les côtés</text>\n<polygon points=\"40,125 140,125 90,40\" fill=\"#f0abfc\" stroke=\"#86198f\" stroke-width=\"4\"/>\n<text x=\"90\" y=\"148\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">équilatéral</text>\n<polygon points=\"250,125 350,125 300,35\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"4\"/>\n<text x=\"300\" y=\"148\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">isocèle</text>\n<polygon points=\"440,125 570,125 470,55\" fill=\"#a5b4fc\" stroke=\"#3730a3\" stroke-width=\"4\"/>\n<text x=\"505\" y=\"148\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">scalène</text>\n<text x=\"300\" y=\"176\" font-size=\"18\" fill=\"#9a3412\" text-anchor=\"middle\" font-weight=\"bold\">Selon les angles</text>\n<polygon points=\"40,280 150,280 40,195\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"4\"/>\n<rect x=\"40\" y=\"262\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n<text x=\"140\" y=\"215\" font-size=\"16\" fill=\"#1f2937\">rectangle</text>\n<polygon points=\"250,280 360,280 290,190\" fill=\"#fcd34d\" stroke=\"#92400e\" stroke-width=\"4\"/>\n<text x=\"350\" y=\"215\" font-size=\"16\" fill=\"#1f2937\">acutangle</text>\n<polygon points=\"420,280 580,280 450,240\" fill=\"#bef264\" stroke=\"#3f6212\" stroke-width=\"4\"/>\n<text x=\"500\" y=\"225\" font-size=\"16\" fill=\"#1f2937\">obtusangle</text>\n</svg>",
   "caption": "Chaque triangle a deux « noms de famille » : un pour les côtés et un pour les angles. Ex. : triangle rectangle isocèle."
  },
  {
   "type": "widget",
   "title": "Classe les triangles selon les côtés",
   "widget": "classify",
   "options": {
    "groups": [
     "Équilatéral",
     "Isocèle",
     "Scalène"
    ],
    "items": [
     [
      "côtés 5, 5, 5 cm",
      0
     ],
     [
      "côtés 4, 4, 6 cm",
      1
     ],
     [
      "côtés 3, 4, 5 cm",
      2
     ],
     [
      "côtés 7, 7, 7 cm",
      0
     ],
     [
      "côtés 10, 6, 10 cm",
      1
     ],
     [
      "côtés 6, 8, 9 cm",
      2
     ],
     [
      "⚠️ panneau de danger",
      0
     ],
     [
      "🏠 toit à deux pans égaux",
      1
     ]
    ]
   },
   "caption": "Compte combien de côtés sont égaux : 3 → équilatéral, 2 → isocèle, aucun → scalène."
  },
  {
   "type": "text",
   "title": "Les quadrilatères",
   "html": "<p>Les quadrilatères ont 4 côtés, 4 sommets, 4 angles et <b>2 diagonales</b>. La <b>somme de leurs angles est 360°</b> : en effet, une diagonale partage le quadrilatère en <b>2 triangles</b>, et 180° + 180° = 360°.</p>\n<p>On les classe en regardant les <b>côtés parallèles</b> (qui ne se rencontrent jamais, comme les rails du train) :</p>\n<ul>\n<li><b>Trapèze</b> : il a <b>une seule paire</b> de côtés parallèles (les deux bases). Il peut être <i>rectangle</i>, <i>isocèle</i> ou <i>scalène</i>.</li>\n<li><b>Parallélogramme</b> : il a <b>deux paires</b> de côtés parallèles ; les côtés opposés sont égaux et les angles opposés sont égaux.</li>\n<li><b>Losange</b> : parallélogramme avec <b>4 côtés égaux</b> ; les diagonales sont perpendiculaires.</li>\n<li><b>Rectangle</b> : parallélogramme avec <b>4 angles droits</b> ; les diagonales sont égales.</li>\n<li><b>Carré</b> : il a 4 côtés égaux <b>et</b> 4 angles droits. Il est en même temps un losange et un rectangle !</li>\n</ul>\n<p>Un quadrilatère sans côtés parallèles s'appelle un <b>quadrilatère quelconque</b> (<i>trapezoide</i>), comme un cerf-volant 🪁.</p>"
  },
  {
   "type": "svg",
   "title": "L'arbre généalogique des quadrilatères",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#ecfeff\"/>\n<rect x=\"215\" y=\"10\" width=\"170\" height=\"36\" rx=\"10\" fill=\"#0e7490\"/>\n<text x=\"300\" y=\"34\" font-size=\"17\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">Quadrilatères</text>\n<line x1=\"300\" y1=\"46\" x2=\"140\" y2=\"80\" stroke=\"#0e7490\" stroke-width=\"3\"/>\n<line x1=\"300\" y1=\"46\" x2=\"460\" y2=\"80\" stroke=\"#0e7490\" stroke-width=\"3\"/>\n<polygon points=\"80,140 200,140 170,90 110,90\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<text x=\"140\" y=\"165\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Trapèze (1 paire ∥)</text>\n<polygon points=\"390,140 510,140 540,90 420,90\" fill=\"#a7f3d0\" stroke=\"#065f46\" stroke-width=\"3\"/>\n<text x=\"465\" y=\"165\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Parallélogramme (2 paires ∥)</text>\n<line x1=\"465\" y1=\"172\" x2=\"370\" y2=\"200\" stroke=\"#065f46\" stroke-width=\"3\"/>\n<line x1=\"465\" y1=\"172\" x2=\"540\" y2=\"200\" stroke=\"#065f46\" stroke-width=\"3\"/>\n<polygon points=\"370,205 405,240 370,275 335,240\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"3\"/>\n<text x=\"370\" y=\"298\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Losange</text>\n<rect x=\"495\" y=\"215\" width=\"90\" height=\"50\" fill=\"#c7d2fe\" stroke=\"#3730a3\" stroke-width=\"3\"/>\n<text x=\"540\" y=\"298\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Rectangle</text>\n<rect x=\"430\" y=\"245\" width=\"42\" height=\"42\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"3\"/>\n<text x=\"451\" y=\"314\" font-size=\"16\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">Carré</text>\n<line x1=\"395\" y1=\"262\" x2=\"430\" y2=\"266\" stroke=\"#991b1b\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<line x1=\"495\" y1=\"250\" x2=\"472\" y2=\"262\" stroke=\"#991b1b\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<polygon points=\"120,210 160,240 120,300 80,240\" fill=\"#ddd6fe\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"210\" y=\"260\" font-size=\"16\" fill=\"#1f2937\">Quadrilatère quelconque</text>\n<text x=\"210\" y=\"280\" font-size=\"14\" fill=\"#5b21b6\">(cerf-volant, aucun ∥)</text>\n</svg>",
   "caption": "Le carré est l'enfant de deux « parents » : il est à la fois un losange (côtés égaux) et un rectangle (angles droits)."
  },
  {
   "type": "3d",
   "title": "Les polygones dans les solides",
   "scene": "solid",
   "options": {
    "shape": "prism",
    "n": 6,
    "r": 1,
    "h": 1.2,
    "color": "#f59e0b",
    "labels": true,
    "shapes": [
     "cube",
     "prism",
     "pyramid"
    ]
   },
   "caption": "Les faces des solides sont des polygones : le prisme hexagonal a 2 hexagones et 6 rectangles, la pyramide a des triangles. Change de solide avec les boutons et compte les faces."
  },
  {
   "type": "example",
   "title": "Exemple pratique : la carreleuse",
   "html": "<p>Madame Anna doit carreler le sol de la salle de bains <b>sans laisser de trous</b>. Quels carreaux réguliers peut-elle utiliser ?</p>\n<ul>\n<li><b>Carrés</b> : autour d'un point, il en tient 4, parce que 4 × 90° = 360° ✅</li>\n<li><b>Triangles équilatéraux</b> : il en tient 6, parce que 6 × 60° = 360° ✅</li>\n<li><b>Hexagones réguliers</b> : il en tient 3, parce que 3 × 120° = 360° ✅</li>\n<li><b>Pentagones réguliers</b> : chaque angle est de 108° ; 3 × 108° = 324°, il reste un trou ❌</li>\n</ul>\n<p>Seuls ces trois polygones réguliers réussissent à couvrir un sol à eux seuls : on les appelle des <b>pavages réguliers</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : l'angle qui manque",
   "html": "<p>Luca a dessiné un triangle. Avec le rapporteur, il mesure deux angles : <b>50°</b> et <b>70°</b>. Combien mesure le troisième, sans le mesurer ?</p>\n<ol>\n<li>J'additionne les angles que je connais : 50° + 70° = 120°</li>\n<li>Je retire de 180° : 180° − 120° = <b>60°</b></li>\n</ol>\n<p>Les trois angles sont plus petits que 90° : c'est un triangle <b>acutangle</b>.</p>\n<p>Avec un quadrilatère, on fait pareil, mais en partant de <b>360°</b> : si trois angles mesurent 90°, 90° et 120°, le quatrième est 360° − 300° = <b>60°</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Les abeilles mathématiciennes",
   "html": "<p>Les abeilles construisent les rayons avec des alvéoles en forme d'<b>hexagone</b>. Parmi les figures qui recouvrent le plan sans trous, l'hexagone est celle qui enferme le plus d'espace en utilisant le moins de cire pour les parois. En 1999, le mathématicien Thomas Hales a démontré que c'est vraiment la meilleure solution (la « conjecture du rayon de miel », déjà proposée dans l'Antiquité) !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le ballon de football",
   "html": "<p>Le ballon de football classique est fait de <b>12 pentagones</b> noirs et de <b>20 hexagones</b> blancs cousus ensemble. Le même dessin se retrouve dans une molécule de carbone appelée <b>fullerène</b> (C₆₀), découverte en 1985.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Pourquoi les grues sont faites de triangles",
   "html": "<p>Regarde une grue, un pylône électrique ou la tour Eiffel : ils sont pleins de <b>triangles</b>. Un carré de lattes s'« écrase » et devient un losange, mais pas un triangle : si les trois côtés sont fixes, la forme est fixe. C'est pourquoi les ingénieurs utilisent les triangles pour rendre les structures rigides.</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Polygone = partie du plan fermée par une ligne brisée fermée. Côtés = sommets = angles.</li>\n<li>Triangles : selon les côtés <b>équilatéral, isocèle, scalène</b> ; selon les angles <b>rectangle, acutangle, obtusangle</b>. Somme des angles = <b>180°</b>.</li>\n<li>Quadrilatères : trapèze (1 paire de côtés parallèles), parallélogramme, losange, rectangle, carré (2 paires). Somme des angles = <b>360°</b>.</li>\n<li>Régulier = côtés égaux <b>et</b> angles égaux.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les polygones",
   "intro": "Si les définitions te semblent difficiles, essaie de toucher, de plier, de marcher ou de construire. Choisis le chemin que tu préfères !",
   "tabs": [
    {
     "label": "🐢 Marche comme une tortue",
     "html": "<p>Dans les années 1960, au MIT (États-Unis), Seymour Papert a inventé le langage <b>Logo</b> : les enfants dessinent en commandant une tortue qui avance et tourne. Essaie dans la cour ou au gymnase !</p>\n<ul>\n<li><b>Carré</b> : répète 4 fois « avance de 5 pas, tourne de 90° ».</li>\n<li><b>Triangle équilatéral</b> : répète 3 fois « avance de 5 pas, tourne de 120° ».</li>\n<li><b>Hexagone</b> : répète 6 fois « avance de 5 pas, tourne de 60° ».</li>\n</ul>\n<p>Tu as remarqué ? À la fin, tu as toujours fait <b>un tour complet : 360°</b> ! 4 × 90 = 3 × 120 = 6 × 60 = 360. Pour faire un polygone régulier de <b>n</b> côtés, tu dois tourner chaque fois de 360° : n.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0fdf4\"/>\n<rect x=\"60\" y=\"50\" width=\"160\" height=\"160\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"5\" stroke-dasharray=\"14 8\"/>\n<text x=\"60\" y=\"40\" font-size=\"30\">🐢</text>\n<text x=\"140\" y=\"240\" font-size=\"18\" text-anchor=\"middle\" fill=\"#14532d\">4 × (avance, tourne 90°)</text>\n<polygon points=\"420,40 510,200 330,200\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"5\" stroke-dasharray=\"14 8\"/>\n<text x=\"405\" y=\"30\" font-size=\"30\">🐢</text>\n<text x=\"420\" y=\"240\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1e3a8a\">3 × (avance, tourne 120°)</text>\n</svg>"
    },
    {
     "label": "🪢 Avec des élastiques (géoplan)",
     "html": "<p>Le <b>géoplan</b> est une planchette avec des clous alignés, inventée par le mathématicien égyptien-britannique <b>Caleb Gattegno</b> dans les années 1950. On tend des élastiques colorés d'un clou à l'autre.</p>\n<p>Tu peux en fabriquer un avec une planche de liège et des punaises : essaie de faire</p>\n<ul>\n<li>un carré, puis déplace un seul coin de l'élastique : il devient un trapèze ou un quadrilatère quelconque ;</li>\n<li>un triangle avec un angle droit (suis les rangées de clous) ;</li>\n<li>une figure avec un creux : un polygone <b>concave</b>.</li>\n</ul>\n<p>Avec les mains, on comprend tout de suite que le nombre de « pointes » (sommets) est égal au nombre de tronçons d'élastique (côtés).</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"150\" y=\"10\" width=\"300\" height=\"240\" rx=\"14\" fill=\"#d6a76b\" stroke=\"#78350f\" stroke-width=\"4\"/>\n<g fill=\"#374151\">\n<circle cx=\"190\" cy=\"50\" r=\"6\"/><circle cx=\"245\" cy=\"50\" r=\"6\"/><circle cx=\"300\" cy=\"50\" r=\"6\"/><circle cx=\"355\" cy=\"50\" r=\"6\"/><circle cx=\"410\" cy=\"50\" r=\"6\"/>\n<circle cx=\"190\" cy=\"105\" r=\"6\"/><circle cx=\"245\" cy=\"105\" r=\"6\"/><circle cx=\"300\" cy=\"105\" r=\"6\"/><circle cx=\"355\" cy=\"105\" r=\"6\"/><circle cx=\"410\" cy=\"105\" r=\"6\"/>\n<circle cx=\"190\" cy=\"160\" r=\"6\"/><circle cx=\"245\" cy=\"160\" r=\"6\"/><circle cx=\"300\" cy=\"160\" r=\"6\"/><circle cx=\"355\" cy=\"160\" r=\"6\"/><circle cx=\"410\" cy=\"160\" r=\"6\"/>\n<circle cx=\"190\" cy=\"215\" r=\"6\"/><circle cx=\"245\" cy=\"215\" r=\"6\"/><circle cx=\"300\" cy=\"215\" r=\"6\"/><circle cx=\"355\" cy=\"215\" r=\"6\"/><circle cx=\"410\" cy=\"215\" r=\"6\"/>\n</g>\n<polygon points=\"190,50 300,50 245,160\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"5\"/>\n<polygon points=\"300,105 410,105 410,215 355,160 300,215\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"5\"/>\n</svg>"
    },
    {
     "label": "📄 En pliant une feuille (origami)",
     "html": "<p>Au <b>Japon</b>, on apprend aussi la géométrie avec l'<b>origami</b>, l'art de plier le papier.</p>\n<ol>\n<li>Prends une feuille rectangulaire (A4). Plie un coin jusqu'à toucher le côté opposé et coupe la bande qui dépasse : tu obtiens un <b>carré</b> !</li>\n<li>Plie le carré le long de la diagonale : tu obtiens 2 <b>triangles rectangles isocèles</b> égaux.</li>\n<li>Déchire les 3 angles d'un triangle de papier quelconque et mets-les côte à côte : ils forment toujours une <b>ligne droite</b>, c'est-à-dire un angle plat de <b>180°</b> !</li>\n</ol>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#fff7ed\"/>\n<polygon points=\"40,200 240,200 110,50\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"4\"/>\n<path d=\"M 70 200 A 30 30 0 0 0 52 172\" fill=\"#ef4444\"/>\n<path d=\"M 210 200 A 30 30 0 0 1 222 179\" fill=\"#3b82f6\"/>\n<text x=\"110\" y=\"85\" font-size=\"22\" fill=\"#16a34a\">●</text>\n<text x=\"270\" y=\"130\" font-size=\"34\" fill=\"#1f2937\">➜</text>\n<line x1=\"330\" y1=\"180\" x2=\"580\" y2=\"180\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<path d=\"M 455 180 L 395 180 A 60 60 0 0 1 420 131 Z\" fill=\"#ef4444\"/>\n<path d=\"M 455 180 L 420 131 A 60 60 0 0 1 480 125 Z\" fill=\"#16a34a\"/>\n<path d=\"M 455 180 L 480 125 A 60 60 0 0 1 515 180 Z\" fill=\"#3b82f6\"/>\n<text x=\"455\" y=\"220\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">= 180°</text>\n</svg>"
    },
    {
     "label": "🧊 Polygones dans les solides 3D",
     "html": "<p>Les polygones sont « plats », mais tu les trouves comme <b>faces</b> des solides. Fais tourner la pyramide : la base est un polygone, les faces latérales sont des <b>triangles</b>. Change de solide et compte les faces de chaque type.</p>",
     "scene": "solid",
     "options": {
      "shape": "pyramid",
      "n": 5,
      "r": 1.1,
      "h": 1.3,
      "color": "#a855f7",
      "labels": true,
      "shapes": [
       "pyramid",
       "prism",
       "cube"
      ]
     }
    },
    {
     "label": "🔺 Pailles et cure-pipes",
     "html": "<p>Dans beaucoup d'écoles d'<b>Europe du Nord</b>, on construit avant de dessiner. Prends des pailles et des cure-pipes (ou des cure-dents et de la pâte à modeler) :</p>\n<ul>\n<li>fais un carré et pousse-le par un coin : il se déforme et devient un <b>losange</b>. Les angles changent, les côtés non !</li>\n<li>fais un triangle et pousse-le : <b>il ne bouge pas</b>. Le triangle est rigide.</li>\n<li>ajoute une diagonale au carré : maintenant ce sont 2 triangles et il ne se déforme plus. C'est l'astuce des portails et des grues !</li>\n</ul>"
    },
    {
     "label": "🇬🇷 Archimède : le polygone qui devient cercle",
     "html": "<p><b>Archimède</b> était un grand mathématicien <b>grec</b> qui vivait à <b>Syracuse</b>, en Sicile, au III<sup>e</sup> siècle av. J.-C. Il voulait savoir combien de fois la circonférence contient le diamètre (le nombre que nous appelons aujourd'hui <b>π</b>). Son idée : dessiner des <b>polygones réguliers</b> à l'intérieur du cercle, avec de plus en <b>plus de côtés</b> : 6, 12, 24, 48, 96. Plus le polygone a de côtés, plus il ressemble au cercle !</p><p>Avec le polygone de 96 côtés, il découvrit que π est un peu plus que 3 et 10/71 et un peu moins que 3 et 1/7, c'est-à-dire environ <b>3,14</b>.</p><p>🎯 <b>Construis l'hexagone d'Archimède</b> :</p><ol><li>Dessine un cercle avec le compas. <b>Ne change pas l'écartement !</b></li><li>Pointe le compas sur un point du cercle et fais une marque sur le cercle. Pointe sur la marque et fais une autre marque. Continue : les marques sont exactement <b>6</b>.</li><li>Relie les marques avec la règle : voilà un <b>hexagone régulier</b>.</li></ol><p>Le côté de l'hexagone a la même longueur que le <b>rayon</b> ! Donc le périmètre est 6 rayons = 3 diamètres. Le cercle est un peu plus long que l'hexagone : c'est pourquoi π est un peu plus que 3.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"160\" cy=\"150\" r=\"120\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"3\"/><polygon points=\"160,30 263.9,90 263.9,210 160,270 56.1,210 56.1,90\" fill=\"#fde68a\" fill-opacity=\"0.8\" stroke=\"#b45309\" stroke-width=\"3\"/><line x1=\"160\" y1=\"150\" x2=\"160\" y2=\"30\" stroke=\"#dc2626\" stroke-width=\"3\"/><text x=\"166\" y=\"95\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">r</text><text x=\"222\" y=\"56\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#b45309\" font-weight=\"bold\">r</text><circle cx=\"440\" cy=\"150\" r=\"120\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"3\"/><polygon points=\"440,30 500,46.1 543.9,90 560,150 543.9,210 500,253.9 440,270 380,253.9 336.1,210 320,150 336.1,90 380,46.1\" fill=\"#bbf7d0\" fill-opacity=\"0.8\" stroke=\"#15803d\" stroke-width=\"3\"/><text x=\"160\" y=\"292\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6 côtés</text><text x=\"440\" y=\"292\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">12 côtés : presque un cercle !</text></svg>"
    },
    {
     "label": "🕌 Les étoiles géométriques de l'art arabe",
     "html": "<p>Dans les mosquées, les palais et les livres du monde <b>arabe</b> et islamique, il y a des décorations faites seulement de <b>polygones réguliers</b> : des étoiles, des hexagones, des octogones qui s'emboîtent. Les artisans les dessinaient avec <b>règle et compas</b>, en partant toujours d'un cercle. L'une des étoiles les plus célèbres est l'<b>étoile à 8 branches</b>.</p><ol><li>Dessine un cercle et un <b>carré</b> dont les sommets sont sur le cercle.</li><li>Dessine un <b>deuxième carré identique</b>, avec le même centre, mais <b>tourné de 45°</b> (ses sommets sont à mi-chemin entre ceux du premier).</li><li>Les deux carrés ensemble forment une <b>étoile à 8 branches</b>.</li></ol><p>Maintenant cherche les polygones cachés : au centre il y a un <b>octogone</b> (8 côtés, contour rouge) ; sur les pointes il y a <b>8 triangles</b> isocèles. Combien de côtés a le contour de l'étoile ? <b>16</b> ! C'est un polygone <b>concave</b> : certains de ses angles sont plus grands qu'un angle plat.</p><p>🎯 Essaie avec <b>deux triangles équilatéraux</b> : un avec la pointe vers le haut et un avec la pointe vers le bas. Quelle étoile obtiens-tu ? Et quel polygone y a-t-il au centre ?</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><circle cx=\"300\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><polygon points=\"300,25 425,150 300,275 175,150\" fill=\"#2563eb\" fill-opacity=\"0.55\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"388.4,61.6 388.4,238.4 211.6,238.4 211.6,61.6\" fill=\"#f59e0b\" fill-opacity=\"0.55\" stroke=\"#92400e\" stroke-width=\"2\"/><polygon points=\"336.6,61.6 388.4,113.4 388.4,186.6 336.6,238.4 263.4,238.4 211.6,186.6 211.6,113.4 263.4,61.6\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><text x=\"40\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e3a8a\" font-weight=\"bold\">carré 1</text><text x=\"40\" y=\"82\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\" font-weight=\"bold\">+ carré 2</text><text x=\"40\" y=\"104\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\">tourné de 45°</text><text x=\"450\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">au centre :</text><text x=\"450\" y=\"82\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">un octogone</text><text x=\"450\" y=\"220\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">sur les pointes :</text><text x=\"450\" y=\"242\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">8 triangles</text></svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des polygones : touche un nœud et découvre pourquoi",
   "nodes": [
    {
     "id": "piano",
     "label": "Points, droites et plan",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "Les « ingrédients » de base de la géométrie : le point, la ligne droite et le plan.",
     "why": "Ils ne se définissent pas : on les accepte comme idées de départ. Le mathématicien grec <b>Euclide</b>, à Alexandrie d'Égypte vers 300 av. J.-C., écrivit les <i>Éléments</i>, en partant de quelques <b>postulats</b> (vérités de départ) comme « par deux points passe une seule droite ». Tout le reste se démontre à partir de là."
    },
    {
     "id": "spezzata",
     "label": "Ligne brisée fermée",
     "x": 50,
     "y": 24,
     "color": "#0ea5e9",
     "html": "Une ligne faite de segments consécutifs qui revient au point de départ sans se croiser.",
     "why": "Elle sert à « clôturer » une partie du plan. Si la ligne était courbe, nous aurions des figures comme le cercle ; si elle était ouverte, elle n'enfermerait rien."
    },
    {
     "id": "poligono",
     "label": "Polygone",
     "x": 50,
     "y": 42,
     "color": "#16a34a",
     "html": "La partie du plan enfermée par une ligne brisée fermée, contour compris.",
     "why": "Du grec <i>polýs</i> (nombreux) + <i>gonía</i> (angle). Les anciens Égyptiens et Babyloniens mesuraient déjà des champs en forme de triangles et de trapèzes ; les Grecs ont donné les noms et les démonstrations."
    },
    {
     "id": "elementi",
     "label": "Côtés, sommets, angles, diagonales",
     "x": 15,
     "y": 42,
     "color": "#f59e0b",
     "html": "Les parties de chaque polygone. Côtés, sommets et angles sont toujours en même nombre.",
     "why": "Chaque côté finit à un sommet où commence le côté suivant : en tournant autour de la figure, tu rencontres alternativement un côté et un sommet, donc ils sont en nombre égal."
    },
    {
     "id": "regolare",
     "label": "Polygone régulier",
     "x": 85,
     "y": 42,
     "color": "#a855f7",
     "html": "Il a tous les côtés et tous les angles égaux.",
     "why": "On peut toujours le dessiner dans un cercle avec les sommets sur la circonférence. Euclide enseignait à construire le triangle équilatéral, le carré, le pentagone et l'hexagone réguliers uniquement avec règle et compas. En 1796, le jeune <b>Gauss</b> découvrit qu'on peut construire aussi le polygone régulier à 17 côtés !"
    },
    {
     "id": "triangolo",
     "label": "Triangle",
     "x": 25,
     "y": 70,
     "color": "#ef4444",
     "html": "Polygone à 3 côtés. On le classe selon les côtés et selon les angles.",
     "why": "C'est le polygone le plus simple et le plus rigide : trois côtés fixent la forme. Tout autre polygone peut se diviser en triangles en traçant les diagonales à partir d'un sommet."
    },
    {
     "id": "somma180",
     "label": "Somme des angles = 180°",
     "x": 25,
     "y": 92,
     "color": "#dc2626",
     "html": "Les angles de n'importe quel triangle ont toujours une somme de 180°.",
     "why": "On le démontre avec le <b>cinquième postulat d'Euclide</b> (des parallèles) : trace depuis le sommet une parallèle à la base, et les trois angles se retrouvent l'un à côté de l'autre sur la droite, c'est-à-dire qu'ils forment un angle plat. Sur une sphère (comme la Terre), le postulat ne vaut pas et la somme dépasse 180° !"
    },
    {
     "id": "quadrilatero",
     "label": "Quadrilatères",
     "x": 75,
     "y": 70,
     "color": "#2563eb",
     "html": "Polygones à 4 côtés : trapèzes, parallélogrammes, losanges, rectangles, carrés.",
     "why": "On les classe selon les <b>paires de côtés parallèles</b> : 0 (quadrilatère quelconque), 1 (trapèze), 2 (parallélogramme et ses « enfants » losange, rectangle et carré)."
    },
    {
     "id": "somma360",
     "label": "Somme des angles = 360°",
     "x": 75,
     "y": 92,
     "color": "#1d4ed8",
     "html": "Les angles de tout quadrilatère ont une somme de 360°.",
     "why": "Une diagonale le divise en 2 triangles : 2 × 180° = 360°. En général, un polygone à n côtés se divise en (n − 2) triangles, donc la somme est (n − 2) × 180° : pour le pentagone 540°, pour l'hexagone 720°."
    }
   ],
   "edges": [
    [
     "piano",
     "spezzata",
     "avec les segments on forme"
    ],
    [
     "spezzata",
     "poligono",
     "enferme"
    ],
    [
     "poligono",
     "elementi",
     "a"
    ],
    [
     "poligono",
     "regolare",
     "peut être"
    ],
    [
     "poligono",
     "triangolo",
     "3 côtés"
    ],
    [
     "poligono",
     "quadrilatero",
     "4 côtés"
    ],
    [
     "triangolo",
     "somma180",
     "propriété"
    ],
    [
     "quadrilatero",
     "somma360",
     "= 2 triangles"
    ],
    [
     "somma180",
     "somma360",
     "× 2"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : triangles et quadrilatères",
   "questions": [
    {
     "type": "num",
     "q": "Dans un triangle, deux angles mesurent 90° et 35°. Combien mesure le troisième ?",
     "answer": 55,
     "unit": "°",
     "explain": "180 − 90 − 35 = 55°."
    },
    {
     "type": "mc",
     "q": "Un quadrilatère avec une seule paire de côtés parallèles est un…",
     "options": [
      "losange",
      "trapèze",
      "rectangle"
     ],
     "answer": 1,
     "explain": "Le trapèze a une seule paire de côtés parallèles, les bases."
    },
    {
     "type": "tf",
     "q": "Le carré est aussi un rectangle.",
     "answer": true,
     "explain": "Il a 4 angles droits : c'est donc un rectangle spécial (avec tous les côtés égaux)."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Polygone",
   "d": "Partie du plan limitée par une ligne brisée fermée, contour compris."
  },
  {
   "t": "Côté",
   "d": "Chacun des segments qui forment le contour du polygone."
  },
  {
   "t": "Sommet",
   "d": "Point où se rencontrent deux côtés consécutifs."
  },
  {
   "t": "Diagonale",
   "d": "Segment qui relie deux sommets non consécutifs."
  },
  {
   "t": "Polygone régulier",
   "d": "Polygone avec tous les côtés et tous les angles égaux."
  },
  {
   "t": "Polygone concave",
   "d": "Polygone avec un creux : au moins un angle dépasse 180°."
  },
  {
   "t": "Triangle isocèle",
   "d": "Triangle avec deux côtés égaux."
  },
  {
   "t": "Triangle scalène",
   "d": "Triangle avec trois côtés différents."
  },
  {
   "t": "Angle droit",
   "d": "Angle de 90°, comme le coin d'une feuille."
  },
  {
   "t": "Côtés parallèles",
   "d": "Côtés qui se trouvent sur des droites qui ne se rencontrent jamais."
  },
  {
   "t": "Trapèze",
   "d": "Quadrilatère avec une seule paire de côtés parallèles."
  },
  {
   "t": "Parallélogramme",
   "d": "Quadrilatère avec deux paires de côtés parallèles."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Comment s'appelle le polygone à 6 côtés ?",
    "options": [
     "Pentagone",
     "Hexagone",
     "Octogone"
    ],
    "answer": 1,
    "explain": "6 côtés : hexagone, comme les alvéoles des abeilles."
   },
   {
    "type": "num",
    "q": "Combien de côtés a un décagone ?",
    "answer": 10,
    "explain": "Déca = dix."
   },
   {
    "type": "tf",
    "q": "Un triangle peut avoir deux angles droits.",
    "answer": false,
    "explain": "90° + 90° = 180° : il ne resterait rien pour le troisième angle."
   },
   {
    "type": "num",
    "q": "Dans un triangle, deux angles mesurent 60° et 80°. Combien mesure le troisième ?",
    "answer": 40,
    "unit": "°",
    "explain": "180 − 60 − 80 = 40°."
   },
   {
    "type": "mc",
    "q": "Un triangle avec des côtés de 6 cm, 6 cm et 4 cm est…",
    "options": [
     "équilatéral",
     "isocèle",
     "scalène"
    ],
    "answer": 1,
    "explain": "Il a deux côtés égaux : isocèle."
   },
   {
    "type": "mc",
    "q": "Quel quadrilatère a 4 côtés égaux mais des angles NON droits ?",
    "options": [
     "Losange",
     "Rectangle",
     "Trapèze"
    ],
    "answer": 0,
    "explain": "Le losange a les côtés égaux et les angles opposés égaux, mais non droits."
   },
   {
    "type": "num",
    "q": "Trois angles d'un quadrilatère mesurent 90°, 90° et 100°. Combien mesure le quatrième ?",
    "answer": 80,
    "unit": "°",
    "explain": "360 − 90 − 90 − 100 = 80°."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le segment qui relie deux sommets non voisins ?",
    "answer": [
     "diagonale",
     "la diagonale"
    ],
    "explain": "C'est la diagonale."
   },
   {
    "type": "tf",
    "q": "Le triangle n'a pas de diagonales.",
    "answer": true,
    "explain": "Dans le triangle, chaque sommet est voisin des deux autres : il n'y a pas de sommets non consécutifs."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre, du polygone qui a le moins de côtés à celui qui en a le plus.",
    "items": [
     "Triangle",
     "Quadrilatère",
     "Pentagone",
     "Hexagone",
     "Octogone"
    ],
    "explain": "3, 4, 5, 6, 8 côtés."
   },
   {
    "type": "mc",
    "q": "Un polygone régulier doit avoir…",
    "options": [
     "seulement les côtés égaux",
     "seulement les angles égaux",
     "côtés et angles tous égaux"
    ],
    "answer": 2,
    "explain": "Il faut les deux choses."
   }
  ],
  "gen": [
   [
    "triAngle",
    2
   ]
  ]
 }
});
