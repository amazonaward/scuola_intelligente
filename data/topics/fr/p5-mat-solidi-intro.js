TOPIC('fr', {
 "id": "p5-mat-solidi-intro",
 "title": "Les solides",
 "intro": "Un dé, une boîte de conserve, un cornet de glace, un ballon : ce sont tous des <b>solides</b>, des figures qui ne restent pas à plat sur une feuille mais qui occupent de l'espace. Apprenons à distinguer les <b>polyèdres</b> des <b>solides de révolution</b>, à compter <b>faces, arêtes et sommets</b> et à « ouvrir » un solide en son <b>patron</b>.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Du plan à l'espace",
   "html": "<p>Les figures que tu as étudiées jusqu'ici (carré, triangle, cercle…) sont des <b>figures planes</b> : elles n'ont que <b>deux dimensions</b>, longueur et largeur. Elles tiennent toutes sur une feuille.</p>\n<p>Les <b>solides</b> ont <b>trois dimensions</b> : longueur, largeur et <b>hauteur</b> (ou profondeur). Ils occupent un espace : tu peux les prendre en main, les tourner, les remplir.</p>\n<p>Les solides géométriques se divisent en deux grandes familles :</p>\n<ul>\n<li><b>Polyèdres</b> : ils n'ont que des <b>faces plates</b>, en forme de polygone (ex. cube, pyramide). Si tu les poses, ils ne roulent jamais.</li>\n<li><b>Solides de révolution</b> (ou « ronds ») : ils ont au moins une <b>surface courbe</b> (ex. cylindre, cône, sphère). Ils peuvent rouler !</li>\n</ul>"
  },
  {
   "type": "3d",
   "title": "Fais tourner les solides en 3D",
   "scene": "solid",
   "options": {
    "shape": "cube",
    "shapes": [
     "cube",
     "box",
     "prism",
     "pyramid",
     "cylinder",
     "cone",
     "sphere"
    ],
    "labels": true,
    "color": "#60a5fa"
   },
   "caption": "Utilise les boutons pour changer de solide et fais-le tourner avec le doigt ou la souris. Lesquels n'ont que des faces plates ? Lesquels ont des surfaces courbes ?"
  },
  {
   "type": "text",
   "title": "Faces, arêtes et sommets",
   "html": "<p>Chaque polyèdre a trois « ingrédients » :</p>\n<ul>\n<li>les <b>faces</b> : les polygones qui l'enferment (dans le dé, ce sont les 6 carrés avec les points) ;</li>\n<li>les <b>arêtes</b> : les segments où deux faces se rencontrent (si tu passes le doigt dessus, tu sens le « bord ») ;</li>\n<li>les <b>sommets</b> : les points où se rencontrent plusieurs arêtes (les « pointes »).</li>\n</ul>\n<table>\n<tr><th>Polyèdre</th><th>Faces</th><th>Arêtes</th><th>Sommets</th></tr>\n<tr><td>Cube</td><td>6</td><td>12</td><td>8</td></tr>\n<tr><td>Parallélépipède (pavé droit)</td><td>6</td><td>12</td><td>8</td></tr>\n<tr><td>Prisme à base triangulaire</td><td>5</td><td>9</td><td>6</td></tr>\n<tr><td>Pyramide à base carrée</td><td>5</td><td>8</td><td>5</td></tr>\n<tr><td>Pyramide à base triangulaire (tétraèdre)</td><td>4</td><td>6</td><td>4</td></tr>\n</table>"
  },
  {
   "type": "widget",
   "title": "Reconnais les parties du cube",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<polygon points=\"200,110 380,110 380,290 200,290\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<polygon points=\"200,110 280,40 460,40 380,110\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<polygon points=\"380,110 460,40 460,220 380,290\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<line x1=\"200\" y1=\"290\" x2=\"280\" y2=\"220\" stroke=\"#1e3a8a\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/>\n<line x1=\"280\" y1=\"220\" x2=\"460\" y2=\"220\" stroke=\"#1e3a8a\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/>\n<line x1=\"280\" y1=\"220\" x2=\"280\" y2=\"40\" stroke=\"#1e3a8a\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/>\n<circle cx=\"460\" cy=\"40\" r=\"8\" fill=\"#dc2626\"/>\n<line x1=\"380\" y1=\"110\" x2=\"380\" y2=\"290\" stroke=\"#f97316\" stroke-width=\"8\"/>\n</svg>",
    "spots": [
     {
      "x": 290,
      "y": 200,
      "label": "Face"
     },
     {
      "x": 380,
      "y": 200,
      "label": "Arête"
     },
     {
      "x": 460,
      "y": 40,
      "label": "Sommet"
     },
     {
      "x": 370,
      "y": 75,
      "label": "Face du dessus"
     },
     {
      "x": 280,
      "y": 130,
      "label": "Arête cachée"
     }
    ]
   },
   "caption": "Touche chaque point et choisis le bon nom. Les lignes en pointillés sont les arêtes que l'on ne voit pas depuis cette position."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : polyèdres et solides ronds",
   "questions": [
    {
     "type": "mc",
     "q": "Lequel de ceux-ci est un polyèdre ?",
     "options": [
      "Le ballon",
      "Le dé",
      "La boîte de conserve"
     ],
     "answer": 1,
     "explain": "Le dé (cube) n'a que des faces plates : c'est un polyèdre."
    },
    {
     "type": "num",
     "q": "Combien d'arêtes a un cube ?",
     "answer": 12,
     "explain": "4 en haut, 4 en bas et 4 à la verticale : 12."
    },
    {
     "type": "tf",
     "q": "Le cône est un solide de révolution.",
     "answer": true,
     "explain": "Il a une surface courbe et s'obtient en faisant tourner un triangle rectangle."
    }
   ]
  },
  {
   "type": "text",
   "title": "Prismes et pyramides",
   "html": "<p>Deux familles de polyèdres très importantes :</p>\n<ul>\n<li><b>Prisme</b> : il a <b>deux bases égales et parallèles</b> (une dessus et une dessous) et des faces latérales qui sont des <b>rectangles</b>. Il prend son nom de la forme de la base : prisme triangulaire, quadrangulaire, pentagonal, hexagonal… Le <b>cube</b> et le <b>parallélépipède</b> sont des prismes particuliers.</li>\n<li><b>Pyramide</b> : elle a <b>une seule base</b> et des faces latérales qui sont des <b>triangles</b> se rejoignant en un point en haut, le <b>sommet</b> (ou apex). Elle aussi prend son nom de la base : pyramide triangulaire, quadrangulaire…</li>\n</ul>\n<p>Astuce : si un prisme a une base à <b>n</b> côtés, il a <b>n + 2</b> faces. Une pyramide dont la base a <b>n</b> côtés a <b>n + 1</b> faces.</p>"
  },
  {
   "type": "text",
   "title": "Les solides de révolution",
   "html": "<p>Pourquoi les appelle-t-on « de révolution » ? Parce qu'on peut les obtenir en faisant <b>tourner une figure plane</b> autour d'une ligne (l'<b>axe</b>) :</p>\n<ul>\n<li>un <b>rectangle</b> qui tourne autour d'un côté forme un <b>cylindre</b> 🥫 ;</li>\n<li>un <b>triangle rectangle</b> qui tourne autour d'un côté de l'angle droit forme un <b>cône</b> 🍦 ;</li>\n<li>un <b>demi-cercle</b> qui tourne autour du diamètre forme une <b>sphère</b> ⚽.</li>\n</ul>\n<p>Le cylindre a 2 bases en forme de disque, le cône en a 1, la sphère aucune : elle est toute courbe !</p>"
  },
  {
   "type": "svg",
   "title": "Des figures qui tournent et deviennent des solides",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fefce8\"/>\n<line x1=\"100\" y1=\"30\" x2=\"100\" y2=\"230\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n<rect x=\"100\" y=\"60\" width=\"60\" height=\"140\" fill=\"#fb923c\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n<ellipse cx=\"100\" cy=\"60\" rx=\"60\" ry=\"14\" fill=\"none\" stroke=\"#9a3412\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<ellipse cx=\"100\" cy=\"200\" rx=\"60\" ry=\"14\" fill=\"none\" stroke=\"#9a3412\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<path d=\"M150 30 A40 12 0 1 1 50 30\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<polygon points=\"50,24 44,34 58,34\" fill=\"#dc2626\"/>\n<text x=\"100\" y=\"265\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">rectangle → cylindre</text>\n<line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"230\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n<polygon points=\"300,60 300,200 360,200\" fill=\"#a3e635\" stroke=\"#3f6212\" stroke-width=\"3\"/>\n<ellipse cx=\"300\" cy=\"200\" rx=\"60\" ry=\"14\" fill=\"none\" stroke=\"#3f6212\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<line x1=\"300\" y1=\"60\" x2=\"240\" y2=\"200\" stroke=\"#3f6212\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<text x=\"300\" y=\"265\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">triangle → cône</text>\n<line x1=\"500\" y1=\"30\" x2=\"500\" y2=\"230\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n<path d=\"M500 60 A70 70 0 0 1 500 200 Z\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<path d=\"M500 60 A70 70 0 0 0 500 200\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<text x=\"500\" y=\"265\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">demi-cercle → sphère</text>\n<text x=\"300\" y=\"292\" font-size=\"16\" text-anchor=\"middle\" fill=\"#dc2626\">la ligne rouge en pointillés est l'axe de rotation</text>\n</svg>",
   "caption": "La partie colorée tourne autour de l'axe rouge : le contour en pointillés montre le solide qui se forme."
  },
  {
   "type": "text",
   "title": "Le patron : ouvrir un solide",
   "html": "<p>Si tu prends une boîte en carton et que tu la « découds » le long de certaines arêtes, tu peux l'étaler à plat sur la table. La figure plane que tu obtiens s'appelle le <b>patron</b> du solide.</p>\n<ul>\n<li>le patron du <b>cube</b> est fait de <b>6 carrés</b> égaux (il y a 11 façons différentes de le dessiner !) ;</li>\n<li>le patron du <b>parallélépipède</b> est fait de <b>6 rectangles</b>, égaux deux à deux ;</li>\n<li>le patron du <b>cylindre</b> est un <b>rectangle</b> et <b>2 disques</b> : le rectangle est l'étiquette de la boîte de conserve !</li>\n<li>le patron du <b>cône</b> est un <b>secteur circulaire</b> (un « éventail ») et un disque.</li>\n</ul>\n<p>La sphère, en revanche, <b>n'a pas de patron</b> exact : on ne peut pas l'étaler à plat sans la déchirer ou la déformer. C'est pourquoi les cartes du monde sont toujours un peu « fausses » !</p>"
  },
  {
   "type": "svg",
   "title": "Le patron du cube",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0fdf4\"/>\n<g stroke=\"#166534\" stroke-width=\"3\">\n<rect x=\"110\" y=\"20\" width=\"65\" height=\"65\" fill=\"#86efac\"/>\n<rect x=\"45\" y=\"85\" width=\"65\" height=\"65\" fill=\"#4ade80\"/>\n<rect x=\"110\" y=\"85\" width=\"65\" height=\"65\" fill=\"#22c55e\"/>\n<rect x=\"175\" y=\"85\" width=\"65\" height=\"65\" fill=\"#4ade80\"/>\n<rect x=\"240\" y=\"85\" width=\"65\" height=\"65\" fill=\"#86efac\"/>\n<rect x=\"110\" y=\"150\" width=\"65\" height=\"65\" fill=\"#bbf7d0\"/>\n</g>\n<text x=\"142\" y=\"60\" font-size=\"18\" text-anchor=\"middle\">dessus</text>\n<text x=\"142\" y=\"124\" font-size=\"18\" text-anchor=\"middle\">devant</text>\n<text x=\"142\" y=\"190\" font-size=\"18\" text-anchor=\"middle\">dessous</text>\n<text x=\"272\" y=\"124\" font-size=\"18\" text-anchor=\"middle\">derrière</text>\n<text x=\"370\" y=\"110\" font-size=\"40\" fill=\"#166534\">→</text>\n<polygon points=\"440,130 520,130 520,210 440,210\" fill=\"#22c55e\" stroke=\"#166534\" stroke-width=\"3\"/>\n<polygon points=\"440,130 480,95 560,95 520,130\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"3\"/>\n<polygon points=\"520,130 560,95 560,175 520,210\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"270\" font-size=\"20\" text-anchor=\"middle\" fill=\"#14532d\">Plie le long des arêtes : 6 carrés deviennent un cube</text>\n</svg>",
   "caption": "L'un des 11 patrons possibles du cube. Essaie de le dessiner, de le découper et de le fermer avec du scotch !"
  },
  {
   "type": "example",
   "title": "Exemple pratique : la chasse aux solides dans la cuisine",
   "html": "<p>Ouvre le garde-manger et regarde bien :</p>\n<ul>\n<li>la boîte de céréales est un <b>parallélépipède</b> (6 faces rectangulaires) ;</li>\n<li>la boîte de tomates pelées est un <b>cylindre</b>;</li>\n<li>le cornet de glace est un <b>cône</b>;</li>\n<li>l'orange est (presque) une <b>sphère</b>;</li>\n<li>l'emballage du Toblerone est un <b>prisme à base triangulaire</b>;</li>\n<li>le sachet de thé en forme de pyramide est un <b>tétraèdre</b>.</li>\n</ul>\n<p>Pourquoi les boîtes de conserve sont-elles des cylindres et pas des cubes ? Parce que les cylindres résistent mieux à la pression, s'empilent bien et peuvent rouler sur les tapis de l'usine !</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : combien de petits cubes ?",
   "html": "<p>Le <b>volume</b> d'un solide est l'<b>espace</b> qu'il occupe. On peut le mesurer en comptant combien de petits cubes identiques y tiennent.</p>\n<p>Une boîte est longue de <b>4</b> petits cubes, large de <b>3</b> et haute de <b>2</b> :</p>\n<ul>\n<li>une couche contient 4 × 3 = <b>12</b> petits cubes ;</li>\n<li>il y a 2 couches : 12 × 2 = <b>24 petits cubes</b>.</li>\n</ul>\n<p>Si chaque petit cube a une arête de 1 cm, le volume est de <b>24 cm³</b> (centimètres cubes). Essaie ci-dessous avec les curseurs !</p>"
  },
  {
   "type": "3d",
   "title": "Remplis la boîte de petits cubes",
   "scene": "blocks",
   "options": {
    "mode": "volume",
    "a": 4,
    "b": 3,
    "c": 2
   },
   "caption": "Volume = longueur × largeur × hauteur. Change les trois mesures et compte les petits cubes."
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Les 5 solides parfaits",
   "html": "<p>Il n'existe que <b>5 polyèdres réguliers</b>, avec toutes les faces égales et régulières : le <b>tétraèdre</b> (4 triangles), le <b>cube</b> (6 carrés), l'<b>octaèdre</b> (8 triangles), le <b>dodécaèdre</b> (12 pentagones) et l'<b>icosaèdre</b> (20 triangles).</p>\n<p>On les appelle aussi <b>solides de Platon</b>, d'après le philosophe grec <b>Platon</b>, qui les associait aux éléments : feu, terre, air, univers et eau. Tu les trouves dans les <b>dés</b> des jeux de rôle : d4, d6, d8, d12, d20 !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Les abeilles et les hexagones",
   "html": "<p>Les alvéoles des rayons des abeilles sont des <b>prismes à base hexagonale</b>. Avec cette forme, les abeilles arrivent à construire plus d'alvéoles en utilisant le moins de cire possible, sans laisser d'espaces vides. Déjà le mathématicien grec Pappus d'Alexandrie, il y a environ 1700 ans, se demandait comment les abeilles faisaient pour être aussi « fortes en géométrie » !</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Les <b>solides</b> ont 3 dimensions.</li>\n<li><b>Polyèdres</b> : seulement des faces plates (cube, parallélépipède, prisme, pyramide).</li>\n<li><b>Solides de révolution</b> : surfaces courbes (cylindre, cône, sphère).</li>\n<li>Dans les polyèdres, on compte les <b>faces</b>, les <b>arêtes</b> et les <b>sommets</b>.</li>\n<li>Le <b>patron</b> est le solide « ouvert » et étalé sur le plan.</li>\n<li>Le <b>volume</b> est l'espace occupé : il se mesure en petits cubes (cm³).</li>\n</ul>"
  },
  {
   "type": "widget",
   "title": "Polyèdre ou solide de révolution ?",
   "widget": "classify",
   "options": {
    "groups": [
     "Polyèdres",
     "Solides de révolution"
    ],
    "items": [
     [
      "🎲 dé",
      0
     ],
     [
      "⚽ ballon",
      1
     ],
     [
      "🥫 boîte de conserve",
      1
     ],
     [
      "📦 boîte à chaussures",
      0
     ],
     [
      "🍦 cornet de glace",
      1
     ],
     [
      "🔺 pyramide de Khéops",
      0
     ],
     [
      "🧱 brique",
      0
     ],
     [
      "🕯️ bougie cylindrique",
      1
     ],
     [
      "🍫 emballage du Toblerone",
      0
     ],
     [
      "🌍 globe terrestre",
      1
     ]
    ]
   },
   "caption": "Glisse ou touche chaque objet et mets-le dans le bon groupe."
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les solides",
   "intro": "Les solides se comprennent mieux avec les mains qu'avec les yeux : essaie de les construire, de les toucher ou de découvrir une formule secrète.",
   "tabs": [
    {
     "label": "🍡 Cure-dents et pâte à modeler",
     "html": "<p>Construis les polyèdres avec des <b>cure-dents</b> (les arêtes) et des <b>boules de pâte à modeler</b> (les sommets) :</p>\n<ul>\n<li>pour un cube, il te faut <b>12 cure-dents</b> et <b>8 boules</b>;</li>\n<li>pour une pyramide à base carrée, <b>8 cure-dents</b> et <b>5 boules</b>;</li>\n<li>pour un tétraèdre, <b>6 cure-dents</b> et <b>4 boules</b>.</li>\n</ul>\n<p>Puis compte les « fenêtres » vides : ce sont les <b>faces</b>! Ainsi tu ne te trompes plus en comptant arêtes et sommets.</p>"
    },
    {
     "label": "✨ La formule d'Euler",
     "html": "<p>Le grand mathématicien suisse <b>Leonhard Euler</b> a découvert en 1750 une règle magique qui vaut pour tous les polyèdres « normaux » (sans trous) :</p>\n<p style=\"font-size:1.3em;text-align:center\"><b>Faces + Sommets − Arêtes = 2</b></p>\n<ul>\n<li>Cube : 6 + 8 − 12 = <b>2</b> ✔</li>\n<li>Pyramide carrée : 5 + 5 − 8 = <b>2</b> ✔</li>\n<li>Prisme triangulaire : 5 + 6 − 9 = <b>2</b> ✔</li>\n</ul>\n<p>Utilise-la pour vérifier que tu as bien compté !</p>"
    },
    {
     "label": "🔺 Prisme ou pyramide en 3D",
     "html": "<p>Compare un <b>prisme</b> et une <b>pyramide</b> ayant la même base hexagonale. Le prisme a <b>deux bases</b> et des faces latérales rectangulaires ; la pyramide a <b>une base</b> et des faces triangulaires qui montent au sommet. Utilise les boutons pour passer de l'un à l'autre.</p>",
     "scene": "solid",
     "options": {
      "shape": "prism",
      "n": 6,
      "r": 1,
      "h": 1.4,
      "labels": true,
      "color": "#f59e0b",
      "shapes": [
       "prism",
       "pyramid"
      ]
     }
    },
    {
     "label": "🙈 Le sac mystérieux",
     "html": "<p>Jeu à deux : mets dans un sac quelques objets (un dé, une balle, un bouchon, une gomme, un cône en papier). Le camarade, <b>les yeux fermés</b>, en touche un et doit dire :</p>\n<ul>\n<li>a-t-il des faces plates ou courbes ? → polyèdre ou solide de révolution ;</li>\n<li>combien de pointes (sommets) sent-il ?</li>\n<li>combien de bords (arêtes) ?</li>\n</ul>\n<p>Les enfants aveugles apprennent la géométrie justement ainsi : avec les <b>mains</b>!</p>"
    },
    {
     "label": "🌍 Solides célèbres dans le monde",
     "html": "<ul>\n<li>🇪🇬 Les <b>pyramides</b> de Gizeh : pyramides à base carrée.</li>\n<li>🇫🇷 La <b>pyramide du Louvre</b> à Paris : en verre, elle aussi à base carrée.</li>\n<li>🇮🇹 La <b>tour de Pise</b> : un cylindre (penché !).</li>\n<li>🇧🇪 L'<b>Atomium</b> de Bruxelles : 9 sphères reliées par des tubes cylindriques.</li>\n<li>🇯🇵 Au Japon, on cultive des <b>pastèques cubiques</b>, que l'on fait pousser dans des boîtes de verre, parce qu'elles rentrent mieux dans les réfrigérateurs !</li>\n</ul>"
    },
    {
     "label": "🇬🇷 Les cinq solides de Platon",
     "html": "<p>Un polyèdre est dit <b>régulier</b> si toutes ses faces sont des <b>polygones réguliers égaux</b> et si, à chaque sommet, se rencontre le <b>même nombre</b> de faces. Le philosophe <b>grec</b> <b>Platon</b> (vers 360 av. J.-C.) en parla dans le livre <i>Timée</i> et les relia au feu, à la terre, à l'air, à l'eau et à l'univers : c'est pourquoi on les appelle <b>solides de Platon</b>. <b>Euclide</b> a démontré qu'il n'y en a <b>que cinq</b>!</p><table><tr><th>Solide</th><th>Faces</th><th>Sommets</th><th>Arêtes</th></tr><tr><td>Tétraèdre</td><td>4 triangles</td><td>4</td><td>6</td></tr><tr><td>Cube (hexaèdre)</td><td>6 carrés</td><td>8</td><td>12</td></tr><tr><td>Octaèdre</td><td>8 triangles</td><td>6</td><td>12</td></tr><tr><td>Dodécaèdre</td><td>12 pentagones</td><td>20</td><td>30</td></tr><tr><td>Icosaèdre</td><td>20 triangles</td><td>12</td><td>30</td></tr></table><p><b>Pourquoi seulement 5 ?</b> À un sommet, il faut qu'au moins 3 faces se rencontrent, et leurs angles doivent faire <b>moins de 360°</b> (sinon le solide devient plat) :</p><ul><li>triangles (60°) : 3 → 180°, 4 → 240°, 5 → 300° ✔ ; 6 → 360° ✘ plat ;</li><li>carrés (90°) : 3 → 270° ✔ ; 4 → 360° ✘ ;</li><li>pentagones (108°) : 3 → 324° ✔ ;</li><li>hexagones (120°) : 3 → 360° ✘ déjà plat.</li></ul><p>Cela fait 3 + 1 + 1 = <b>5</b> possibilités. Vérifie la formule d'Euler sur chaque ligne du tableau ! Les dés des jeux de rôle à 4, 6, 8, 12 et 20 faces sont justement les solides de Platon.</p>"
    },
    {
     "label": "🇩🇪 Sphère, cube, cylindre : le don de Fröbel (Allemagne)",
     "html": "<p><b>Friedrich Fröbel</b>, l'éducateur <b>allemand</b> qui a inventé le <b>Kindergarten</b> (le jardin d'enfants), offrait aux enfants une boîte en bois avec trois solides : <b>sphère, cube et cylindre</b>. C'était son « deuxième don ». Pourquoi justement ces trois-là ? Parce que ce sont les plus différents entre eux, et que le cylindre est <b>entre</b> les deux autres.</p><ol><li><b>Sphère</b> : seulement une surface <b>courbe</b>. Elle roule dans toutes les directions et ne reste jamais immobile sur un plan incliné.</li><li><b>Cube</b> : seulement des faces <b>plates</b> (6 carrés), 8 sommets et 12 arêtes. Il ne roule pas : il glisse ou reste immobile.</li><li><b>Cylindre</b> : 2 faces plates (deux disques) et une surface courbe. Si tu le mets debout, il reste immobile comme le cube ; si tu le couches, il roule comme la sphère, mais seulement <b>dans une direction</b>, tout droit.</li></ol><p>🎯 Essaie avec une balle, un dé et un rouleau de papier sur un livre incliné. Puis regarde le modèle ci-dessous et change de solide avec les boutons : lequel est un <b>polyèdre</b>? Lesquels sont des <b>solides de révolution</b>?</p>",
     "scene": "solid",
     "options": {
      "shapes": [
       "sphere",
       "cube",
       "cylinder"
      ],
      "shape": "sphere",
      "labels": true,
      "color": "#f59e0b"
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des solides : touche un nœud et découvre le pourquoi",
   "nodes": [
    {
     "id": "solido",
     "label": "Solide",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Figure géométrique à trois dimensions.",
     "why": "Le monde réel a 3 dimensions : chaque objet a une longueur, une largeur et une hauteur. La géométrie des solides a été rassemblée par <b>Euclide</b> dans les derniers livres des <i>Éléments</i> (vers 300 av. J.-C.)."
    },
    {
     "id": "poliedri",
     "label": "Polyèdres",
     "x": 25,
     "y": 28,
     "color": "#16a34a",
     "html": "Solides n'ayant que des faces plates (polygones).",
     "why": "Du grec <i>polýs</i> (beaucoup) + <i>hédra</i> (face, siège) : « aux nombreuses faces ». Comme ils sont faits de polygones, on peut les étudier avec la géométrie plane que tu connais déjà."
    },
    {
     "id": "rotazione",
     "label": "Solides de révolution",
     "x": 75,
     "y": 28,
     "color": "#f97316",
     "html": "Solides à surfaces courbes : cylindre, cône, sphère.",
     "why": "On les obtient en faisant tourner une figure plane autour d'un axe. C'est ainsi que fonctionne le <b>tour</b>, inventé dès l'Antiquité pour faire des vases et des objets en bois parfaitement ronds."
    },
    {
     "id": "fsv",
     "label": "Faces, arêtes, sommets",
     "x": 12,
     "y": 52,
     "color": "#a855f7",
     "html": "Les éléments d'un polyèdre.",
     "why": "Les faces sont des polygones ; là où deux faces se touchent naît une arête ; là où se rencontrent au moins trois arêtes naît un sommet. Il ne peut pas y avoir moins de 3 faces à un sommet, sinon le solide ne se ferme pas."
    },
    {
     "id": "eulero",
     "label": "F + S − A = 2",
     "x": 12,
     "y": 80,
     "color": "#ec4899",
     "html": "La relation d'Euler.",
     "why": "Découverte par <b>Leonhard Euler</b> en 1750 (Descartes y était presque arrivé un siècle plus tôt). Elle vaut pour tous les polyèdres sans trous et c'est le point de départ d'une partie des mathématiques appelée topologie."
    },
    {
     "id": "prismipir",
     "label": "Prismes et pyramides",
     "x": 38,
     "y": 62,
     "color": "#0ea5e9",
     "html": "Prisme : 2 bases égales et des faces rectangulaires. Pyramide : 1 base et des faces triangulaires.",
     "why": "Le prisme s'obtient en « tirant » un polygone vers le haut ; la pyramide en reliant tous les sommets de la base à un unique point. <b>Démocrite</b> découvrit qu'une pyramide a un tiers du volume du prisme de même base et de même hauteur ; <b>Eudoxe</b> le démontra."
    },
    {
     "id": "platonici",
     "label": "Solides de Platon",
     "x": 38,
     "y": 90,
     "color": "#14b8a6",
     "html": "Les 5 polyèdres réguliers : tétraèdre, cube, octaèdre, dodécaèdre, icosaèdre.",
     "why": "Ils ne sont que 5 parce qu'autour d'un sommet la somme des angles des faces doit être inférieure à 360° : avec des triangles, il y a place pour 3, 4 ou 5 faces, avec des carrés 3, avec des pentagones 3 ; avec des hexagones, déjà 3 × 120° = 360° et le sommet devient plat. Euclide l'a démontré dans le dernier livre des <i>Éléments</i>."
    },
    {
     "id": "sviluppo",
     "label": "Patron",
     "x": 72,
     "y": 58,
     "color": "#84cc16",
     "html": "Le solide ouvert et étalé sur un plan.",
     "why": "Il sert à construire des boîtes et des emballages. Tous les polyèdres et aussi les cylindres et les cônes peuvent se développer ; la sphère non, parce qu'elle est courbe dans toutes les directions : c'est pourquoi aucune carte plane du monde n'est parfaite."
    },
    {
     "id": "volume",
     "label": "Volume",
     "x": 72,
     "y": 86,
     "color": "#64748b",
     "html": "L'espace occupé par un solide, mesuré en petits cubes (cm³, dm³, m³).",
     "why": "On le mesure en comptant combien de petits cubes de 1 cm d'arête y tiennent. 1 dm³ d'eau, c'est justement 1 litre : le système métrique, né en France à la fin du XVIIIe siècle, relie ainsi volumes et capacités."
    }
   ],
   "edges": [
    [
     "solido",
     "poliedri",
     "faces plates"
    ],
    [
     "solido",
     "rotazione",
     "surfaces courbes"
    ],
    [
     "poliedri",
     "fsv",
     "ont des"
    ],
    [
     "fsv",
     "eulero",
     "liés par"
    ],
    [
     "poliedri",
     "prismipir",
     "ex."
    ],
    [
     "prismipir",
     "platonici",
     "les plus réguliers"
    ],
    [
     "poliedri",
     "sviluppo",
     "s'ouvrent en"
    ],
    [
     "rotazione",
     "sviluppo",
     "cylindre et cône"
    ],
    [
     "solido",
     "volume",
     "occupe un"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : prismes, pyramides et patrons",
   "questions": [
    {
     "type": "mc",
     "q": "Quel solide a une seule base et des faces latérales triangulaires ?",
     "options": [
      "Le prisme",
      "La pyramide",
      "Le cylindre"
     ],
     "answer": 1,
     "explain": "La pyramide a une base et des triangles qui se rejoignent au sommet."
    },
    {
     "type": "mc",
     "q": "Le patron d'un cylindre est formé de…",
     "options": [
      "6 carrés",
      "un rectangle et 2 disques",
      "4 triangles"
     ],
     "answer": 1,
     "explain": "La surface latérale déroulée est un rectangle ; les deux bases sont des disques."
    },
    {
     "type": "num",
     "q": "Combien de sommets a une pyramide à base carrée ?",
     "answer": 5,
     "explain": "4 sommets de la base + 1 au sommet = 5."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Solide",
   "d": "Figure géométrique à trois dimensions : longueur, largeur, hauteur."
  },
  {
   "t": "Polyèdre",
   "d": "Solide délimité seulement par des faces plates en forme de polygone."
  },
  {
   "t": "Solide de révolution",
   "d": "Solide obtenu en faisant tourner une figure plane autour d'un axe ; il a des surfaces courbes."
  },
  {
   "t": "Face",
   "d": "Chacun des polygones qui délimitent un polyèdre."
  },
  {
   "t": "Arête",
   "d": "Segment où se rencontrent deux faces."
  },
  {
   "t": "Sommet",
   "d": "Point où se rencontrent trois arêtes ou plus."
  },
  {
   "t": "Prisme",
   "d": "Polyèdre avec deux bases égales et parallèles et des faces latérales rectangulaires."
  },
  {
   "t": "Pyramide",
   "d": "Polyèdre avec une base et des faces latérales triangulaires qui se rejoignent au sommet."
  },
  {
   "t": "Patron",
   "d": "Figure plane que l'on obtient en ouvrant un solide."
  },
  {
   "t": "Volume",
   "d": "Espace occupé par un solide ; il se mesure en cm³, dm³, m³."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Combien de dimensions a un solide ?",
    "options": [
     "2",
     "3",
     "4"
    ],
    "answer": 1,
    "explain": "Longueur, largeur et hauteur."
   },
   {
    "type": "mc",
    "q": "Lequel de ces objets est un solide de révolution ?",
    "options": [
     "Une brique",
     "Un tube de chips",
     "Un dé"
    ],
    "answer": 1,
    "explain": "Le tube est un cylindre : il a une surface courbe."
   },
   {
    "type": "num",
    "q": "Combien de faces a un cube ?",
    "answer": 6,
    "explain": "Comme un dé : 6 faces carrées."
   },
   {
    "type": "num",
    "q": "Combien de sommets a un cube ?",
    "answer": 8,
    "explain": "4 en haut et 4 en bas."
   },
   {
    "type": "tf",
    "q": "La sphère a une arête.",
    "answer": false,
    "explain": "La sphère n'a ni arêtes ni sommets : elle est toute courbe."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le segment où se rencontrent deux faces d'un polyèdre ?",
    "answer": [
     "arête",
     "l'arête"
    ],
    "explain": "C'est l'arête."
   },
   {
    "type": "mc",
    "q": "En faisant tourner un rectangle autour d'un de ses côtés, on obtient…",
    "options": [
     "un cône",
     "un cylindre",
     "une sphère"
    ],
    "answer": 1,
    "explain": "Le rectangle qui tourne forme un cylindre."
   },
   {
    "type": "mc",
    "q": "Quelle figure ne peut PAS être le patron d'un cube ?",
    "options": [
     "6 carrés en forme de croix",
     "6 carrés tous alignés",
     "6 carrés en forme de T"
    ],
    "answer": 1,
    "explain": "Avec 6 carrés alignés, en les pliant, deux faces se superposent et deux restent découvertes."
   },
   {
    "type": "tf",
    "q": "Le cube est un prisme particulier.",
    "answer": true,
    "explain": "Il a deux bases carrées égales et parallèles et des faces latérales qui sont des carrés (des rectangles particuliers)."
   },
   {
    "type": "num",
    "q": "Une boîte contient 5 petits cubes en longueur, 2 en largeur et 3 en hauteur. Combien de petits cubes en tout ?",
    "answer": 30,
    "explain": "5 × 2 = 10 petits cubes par couche ; 10 × 3 = 30."
   },
   {
    "type": "order",
    "q": "Range du solide qui a le moins de faces à celui qui en a le plus.",
    "items": [
     "Tétraèdre (pyramide triangulaire)",
     "Pyramide à base carrée",
     "Cube",
     "Prisme à base hexagonale"
    ],
    "explain": "4, 5, 6 et 8 faces (6 latérales + 2 bases)."
   }
  ],
  "gen": [
   [
    "volBox",
    2
   ]
  ]
 }
});
