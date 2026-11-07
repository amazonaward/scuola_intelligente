TOPIC('fr', {
 "id": "p5-mat-cerchio",
 "title": "Le cercle et le disque",
 "intro": "Roues, pizzas, horloges, pièces : le <b>cercle</b> est partout ! Apprenons la différence entre <b>disque</b> et <b>cercle</b>, ce que sont le <b>rayon</b> et le <b>diamètre</b>, et découvrons le nombre le plus célèbre des mathématiques : <b>π (pi)</b>.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Cercle et disque : ce n'est pas la même chose !",
   "html": "<p>Prends un compas, plante la pointe sur une feuille et fais un tour complet avec la mine.</p>\n<ul>\n<li>La <b>ligne courbe fermée</b> que tu as dessinée est le <b>cercle</b> (en italien, <i>circonferenza</i>) : tous ses points sont à la <b>même distance</b> du point où tu as mis la pointe.</li>\n<li>Ce point s'appelle le <b>centre</b>.</li>\n<li>La <b>surface</b> à l'intérieur du cercle (que tu peux colorier) est le <b>disque</b> (en italien, <i>cerchio</i>).</li>\n</ul>\n<p>En bref : le cercle est le <b>contour</b> (comme le bord de la pizza), le disque est <b>toute la pizza</b>. Le cercle a une <b>longueur</b> (son périmètre) ; le disque a une <b>aire</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Les parties du cercle",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<circle cx=\"200\" cy=\"160\" r=\"130\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"6\"/>\n<circle cx=\"200\" cy=\"160\" r=\"6\" fill=\"#111827\"/>\n<line x1=\"200\" y1=\"160\" x2=\"292\" y2=\"68\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<line x1=\"70\" y1=\"160\" x2=\"330\" y2=\"160\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<line x1=\"110\" y1=\"254\" x2=\"310\" y2=\"240\" stroke=\"#9333ea\" stroke-width=\"4\"/>\n<path d=\"M90 90 A130 130 0 0 1 150 40\" fill=\"none\" stroke=\"#f97316\" stroke-width=\"9\"/>\n<text x=\"188\" y=\"185\" font-size=\"16\" fill=\"#111827\">centre</text>\n<text x=\"252\" y=\"108\" font-size=\"18\" fill=\"#dc2626\" font-weight=\"bold\">r</text>\n<text x=\"128\" y=\"152\" font-size=\"18\" fill=\"#16a34a\" font-weight=\"bold\">d</text>\n<text x=\"360\" y=\"60\" font-size=\"20\" fill=\"#dc2626\">— rayon (r)</text>\n<text x=\"360\" y=\"95\" font-size=\"20\" fill=\"#16a34a\">— diamètre (d = 2 × r)</text>\n<text x=\"360\" y=\"130\" font-size=\"20\" fill=\"#1d4ed8\">— cercle (le bord)</text>\n<text x=\"360\" y=\"165\" font-size=\"20\" fill=\"#3b82f6\">▇ disque (la surface)</text>\n<text x=\"360\" y=\"200\" font-size=\"20\" fill=\"#f97316\">— arc (morceau de bord)</text>\n<text x=\"360\" y=\"235\" font-size=\"20\" fill=\"#9333ea\">— corde (relie 2 points)</text>\n</svg>",
   "caption": "Le diamètre est la plus longue corde : il passe par le centre et mesure deux rayons."
  },
  {
   "type": "text",
   "title": "Rayon, diamètre, corde et arc",
   "html": "<ul>\n<li>Le <b>rayon</b> (r) est le segment qui va du <b>centre</b> à un point du cercle. Tous les rayons d'un cercle sont <b>égaux</b>.</li>\n<li>Le <b>diamètre</b> (d) est le segment qui relie deux points du cercle <b>en passant par le centre</b>. Il mesure le <b>double</b> du rayon :\n<br><b>d = r × 2</b> et <b>r = d : 2</b>.</li>\n<li>La <b>corde</b> est un segment qui relie deux points quelconques du cercle. Le diamètre est la plus longue corde.</li>\n<li>L'<b>arc</b> est un morceau de cercle.</li>\n<li>Le <b>secteur circulaire</b> est une « part » de disque, délimitée par deux rayons et un arc (exactement comme une part de pizza !).</li>\n</ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : les parties du cercle",
   "questions": [
    {
     "type": "mc",
     "q": "La ligne qui fait le contour du disque s'appelle…",
     "options": [
      "diamètre",
      "cercle",
      "rayon"
     ],
     "answer": 1,
     "explain": "Le cercle est la ligne courbe fermée ; le disque est la surface à l'intérieur."
    },
    {
     "type": "num",
     "q": "Un cercle a un rayon de 6 cm. Combien mesure le diamètre ?",
     "answer": 12,
     "unit": "cm",
     "explain": "d = r × 2 = 6 × 2 = 12 cm."
    },
    {
     "type": "num",
     "q": "Une assiette a un diamètre de 26 cm. Combien mesure le rayon ?",
     "answer": 13,
     "unit": "cm",
     "explain": "r = d : 2 = 26 : 2 = 13 cm."
    },
    {
     "type": "tf",
     "q": "Dans un cercle, tous les rayons ont la même longueur.",
     "answer": true,
     "explain": "Oui : c'est justement la définition du cercle (points à la même distance du centre)."
    }
   ]
  },
  {
   "type": "text",
   "title": "Le nombre magique π (pi)",
   "html": "<p>Fais une expérience : prends un pot, enroule une ficelle autour du bord et mesure-la. Puis mesure le diamètre et fais la division <b>périmètre du cercle : diamètre</b>.</p>\n<p>Avec n'importe quel objet rond (pièce, assiette, roue de vélo), tu obtiendras <b>toujours environ 3,14</b>!</p>\n<p>Ce nombre s'appelle <b>π</b> (on lit « pi », d'après la lettre grecque <i>pi</i>). Ses chiffres après la virgule ne finissent jamais et ne se répètent pas : π = 3,14159265358979… Pour les calculs à l'école, on utilise <b>π ≈ 3,14</b>.</p>\n<p>Donc le périmètre du cercle fait <b>un peu plus de 3 fois</b> le diamètre.</p>"
  },
  {
   "type": "remember",
   "title": "Les formules du périmètre du cercle",
   "html": "<ul>\n<li><b>P = d × 3,14</b> (diamètre fois pi)</li>\n<li><b>P = r × 2 × 3,14</b> (rayon fois deux fois pi)</li>\n<li>Formule inverse : <b>d = P : 3,14</b> puis <b>r = d : 2</b></li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "Dérouler la roue",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#fffbeb\"/>\n<circle cx=\"80\" cy=\"120\" r=\"50\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"6\"/>\n<line x1=\"30\" y1=\"120\" x2=\"130\" y2=\"120\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<text x=\"80\" y=\"110\" font-size=\"16\" fill=\"#16a34a\" text-anchor=\"middle\">d</text>\n<line x1=\"30\" y1=\"200\" x2=\"344\" y2=\"200\" stroke=\"#b45309\" stroke-width=\"8\"/>\n<g stroke=\"#16a34a\" stroke-width=\"5\">\n<line x1=\"30\" y1=\"225\" x2=\"130\" y2=\"225\"/><line x1=\"134\" y1=\"225\" x2=\"234\" y2=\"225\"/><line x1=\"238\" y1=\"225\" x2=\"338\" y2=\"225\"/>\n</g>\n<line x1=\"338\" y1=\"225\" x2=\"344\" y2=\"225\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<text x=\"80\" y=\"250\" font-size=\"16\" fill=\"#16a34a\" text-anchor=\"middle\">1 d</text>\n<text x=\"184\" y=\"250\" font-size=\"16\" fill=\"#16a34a\" text-anchor=\"middle\">2 d</text>\n<text x=\"288\" y=\"250\" font-size=\"16\" fill=\"#16a34a\" text-anchor=\"middle\">3 d</text>\n<text x=\"370\" y=\"232\" font-size=\"16\" fill=\"#dc2626\">+ 0,14 d</text>\n<path d=\"M80 172 Q80 195 40 198\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<text x=\"360\" y=\"120\" font-size=\"22\" fill=\"#78350f\">La roue fait un tour :</text>\n<text x=\"360\" y=\"150\" font-size=\"22\" fill=\"#78350f\">le bord déroulé mesure</text>\n<text x=\"360\" y=\"180\" font-size=\"22\" fill=\"#b45309\" font-weight=\"bold\">≈ 3,14 diamètres</text>\n</svg>",
   "caption": "Si tu fais rouler une roue pendant un tour complet, elle parcourt une route longue d'environ 3,14 fois son diamètre."
  },
  {
   "type": "example",
   "title": "Exemple pratique : la roue du vélo",
   "html": "<p>La roue du vélo d'Anna a un diamètre de <b>60 cm</b>. Quelle distance fait le vélo à chaque tour de roue ?</p>\n<p>P = d × 3,14 = 60 × 3,14 = <b>188,4 cm</b>, c'est-à-dire presque <b>1,9 mètre</b>.</p>\n<p>Après <b>100 tours</b> de roue, Anna a parcouru 188,4 × 100 = 18 840 cm = <b>188,4 mètres</b>. C'est ainsi que fonctionne le compteur du vélo : il compte les tours de la roue !</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : le ruban pour le gâteau",
   "html": "<p>Maman veut mettre un ruban autour d'un gâteau rond de <b>12 cm de rayon</b>. De combien de ruban a-t-elle besoin ?</p>\n<ol>\n<li>Diamètre : 12 × 2 = 24 cm</li>\n<li>Périmètre : 24 × 3,14 = <b>75,36 cm</b></li>\n</ol>\n<p>Elle a intérêt à acheter <b>au moins 80 cm</b> de ruban, pour qu'il reste aussi un petit bout pour faire le nœud 🎀.</p>"
  },
  {
   "type": "text",
   "title": "Pour les plus curieux : l'aire du disque",
   "html": "<p>L'aire du disque se calcule aussi avec π :</p>\n<p><b>A = r × r × 3,14</b> (rayon fois rayon fois pi)</p>\n<p>Exemple : une pizza de 15 cm de rayon a une aire de 15 × 15 × 3,14 = 225 × 3,14 = <b>706,5 cm²</b>.</p>\n<p>Pourquoi ? Découpe le disque en plein de parts fines et place-les en zigzag, une vers le haut et une vers le bas : tu obtiens presque un <b>rectangle</b> de base la moitié du périmètre (r × 3,14) et de hauteur r. Son aire est r × 3,14 × r !</p>"
  },
  {
   "type": "3d",
   "title": "Le cercle dans les solides",
   "scene": "solid",
   "options": {
    "shape": "cylinder",
    "r": 1,
    "h": 1.6,
    "color": "#38bdf8",
    "labels": true,
    "shapes": [
     "cylinder",
     "cone",
     "sphere"
    ]
   },
   "caption": "Le cylindre a deux bases en forme de disque ; le cône en a une. Si tu coupes une sphère avec un plan, tu obtiens toujours un disque !"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le jour de π",
   "html": "<p>Le <b>14 mars</b>, on fête dans le monde entier le <b>Pi Day</b>, la journée du nombre pi, parce qu'aux États-Unis la date s'écrit <b>3/14</b>. Depuis 2020, l'UNESCO l'a proclamé <b>Journée internationale des mathématiques</b>.</p>\n<p>Coïncidence : le 14 mars 1879 naissait <b>Albert Einstein</b>!</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Des chiffres sans fin",
   "html": "<p>Avec les superordinateurs, on a calculé plus de <b>100 000 milliards de chiffres</b> de π, mais il ne finit jamais. Pour envoyer des sondes dans l'espace, la NASA n'en utilise que <b>15</b>!</p>\n<p>Certains s'entraînent à en retenir le plus possible : le record du monde reconnu dépasse les <b>70 000 chiffres</b> récités de mémoire.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre le cercle",
   "intro": "Le cercle se comprend mieux en le touchant, en le mesurant et en découvrant comment d'autres peuples l'ont étudié. Choisis le chemin que tu préfères !",
   "tabs": [
    {
     "label": "🧵 La ficelle et le pot",
     "html": "<p>Fais toi-même l'expérience que l'humanité a faite il y a des milliers d'années :</p>\n<ol>\n<li>prends 3 objets ronds (un pot, un rouleau de scotch, une grosse pièce) ;</li>\n<li>enroule une ficelle autour de chacun, marque et mesure avec la règle : c'est le <b>périmètre du cercle</b>;</li>\n<li>mesure le <b>diamètre</b> en passant par le centre ;</li>\n<li>divise périmètre : diamètre.</li>\n</ol>\n<table><tr><th>Objet</th><th>P</th><th>d</th><th>P : d</th></tr>\n<tr><td>Pot</td><td>25,1 cm</td><td>8 cm</td><td>≈ 3,14</td></tr>\n<tr><td>Scotch</td><td>31,4 cm</td><td>10 cm</td><td>≈ 3,14</td></tr></table>\n<p>À chaque fois, on trouve environ <b>3,14</b> : tu as découvert π tout seul !</p>"
    },
    {
     "label": "🍕 Parts en zigzag",
     "html": "<p>Comment trouver l'aire ? Découpe une pizza en plein de parts et mets-les en file, l'une avec la pointe en haut et l'autre avec la pointe en bas. Cela forme presque un <b>rectangle</b> :</p>\n<ul><li>la base est la <b>moitié du périmètre</b> = r × 3,14 ;</li><li>la hauteur est le <b>rayon</b> r.</li></ul>\n<p>Aire du rectangle = base × hauteur = <b>r × 3,14 × r</b>. Plus tu fais de parts, plus le rectangle est parfait !</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#fff7ed\"/>\n<g stroke=\"#9a3412\" stroke-width=\"2\">\n<path d=\"M40 180 L65 80 L90 180 Z\" fill=\"#fbbf24\"/><path d=\"M65 80 L90 180 L115 80 Z\" fill=\"#f97316\"/>\n<path d=\"M90 180 L115 80 L140 180 Z\" fill=\"#fbbf24\"/><path d=\"M115 80 L140 180 L165 80 Z\" fill=\"#f97316\"/>\n<path d=\"M140 180 L165 80 L190 180 Z\" fill=\"#fbbf24\"/><path d=\"M165 80 L190 180 L215 80 Z\" fill=\"#f97316\"/>\n<path d=\"M190 180 L215 80 L240 180 Z\" fill=\"#fbbf24\"/><path d=\"M215 80 L240 180 L265 80 Z\" fill=\"#f97316\"/>\n<path d=\"M240 180 L265 80 L290 180 Z\" fill=\"#fbbf24\"/><path d=\"M265 80 L290 180 L315 80 Z\" fill=\"#f97316\"/>\n<path d=\"M290 180 L315 80 L340 180 Z\" fill=\"#fbbf24\"/><path d=\"M315 80 L340 180 L365 80 Z\" fill=\"#f97316\"/>\n</g>\n<line x1=\"40\" y1=\"205\" x2=\"340\" y2=\"205\" stroke=\"#1d4ed8\" stroke-width=\"4\"/>\n<text x=\"190\" y=\"230\" font-size=\"18\" fill=\"#1d4ed8\" text-anchor=\"middle\">moitié du périmètre = r × 3,14</text>\n<line x1=\"380\" y1=\"80\" x2=\"380\" y2=\"180\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<text x=\"392\" y=\"136\" font-size=\"20\" fill=\"#dc2626\">r</text>\n<text x=\"430\" y=\"110\" font-size=\"20\" fill=\"#78350f\">≈ rectangle</text>\n<text x=\"430\" y=\"145\" font-size=\"20\" fill=\"#78350f\" font-weight=\"bold\">A = r × r × 3,14</text>\n</svg>"
    },
    {
     "label": "🏛️ Archimède et les polygones",
     "html": "<p>Le grand mathématicien sicilien <b>Archimède de Syracuse</b> (environ 287–212 av. J.-C.) n'avait pas de calculatrices. Comment a-t-il fait pour calculer π ?</p>\n<p>Il dessina un <b>hexagone</b> dans le cercle et un autre à l'extérieur. Le périmètre du cercle devait se trouver <b>entre les deux</b>. Puis il doubla les côtés : 12, 24, 48, jusqu'à <b>96 côtés</b>! Plus le polygone a de côtés, plus il ressemble au cercle.</p>\n<p>Il trouva que π est entre <b>3 10/71</b> et <b>3 1/7</b>, c'est-à-dire entre 3,1408 et 3,1428. Un résultat extraordinaire pour il y a 2200 ans !</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f5f3ff\"/>\n<circle cx=\"150\" cy=\"130\" r=\"100\" fill=\"#ddd6fe\" stroke=\"#6d28d9\" stroke-width=\"4\"/>\n<polygon points=\"250,130 200,216.6 100,216.6 50,130 100,43.4 200,43.4\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<polygon points=\"265.5,130 207.7,230 92.3,230 34.5,130 92.3,30 207.7,30\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"4\"/>\n<text x=\"320\" y=\"80\" font-size=\"20\" fill=\"#dc2626\">hexagone intérieur : périmètre = 6 r</text>\n<text x=\"320\" y=\"115\" font-size=\"20\" fill=\"#16a34a\">hexagone extérieur : périmètre ≈ 6,93 r</text>\n<text x=\"320\" y=\"150\" font-size=\"20\" fill=\"#6d28d9\">cercle : au milieu !</text>\n<text x=\"320\" y=\"200\" font-size=\"18\" fill=\"#1f2937\">Avec 96 côtés : π ≈ 3,14</text>\n</svg>"
    },
    {
     "label": "🌍 π dans le monde antique",
     "html": "<p>Beaucoup de peuples ont cherché le nombre du cercle :</p>\n<ul>\n<li>🇪🇬 les <b>Égyptiens</b> (papyrus Rhind, vers 1650 av. J.-C.) utilisaient une valeur d'environ <b>3,16</b>;</li>\n<li>🏺 les <b>Babyloniens</b> utilisaient <b>3</b> ou <b>3 + 1/8 = 3,125</b>;</li>\n<li>🇬🇷 <b>Archimède</b> l'encadra entre 3,1408 et 3,1428 ;</li>\n<li>🇨🇳 le Chinois <b>Zu Chongzhi</b> (Ve siècle apr. J.-C.) trouva la fraction <b>355/113 = 3,1415929…</b>, juste à 6 décimales : personne ne fit mieux pendant presque 1000 ans !</li>\n<li>🇬🇧 Le symbole <b>π</b> a été utilisé pour la première fois par le Gallois William Jones en 1706, et rendu célèbre par le Suisse Leonhard Euler.</li>\n</ul>"
    },
    {
     "label": "🧭 Le compas et la corde",
     "html": "<p>Tu n'as pas de compas ? Fais comme les jardiniers : plante un piquet dans le sol, attache une corde et, à l'autre extrémité, un bâton. Garde la corde tendue et tourne tout autour : tu dessines un <b>cercle parfait</b>!</p>\n<ul><li>Le piquet est le <b>centre</b>.</li><li>La corde tendue est le <b>rayon</b>.</li><li>La trace sur le sol est le <b>cercle</b>.</li></ul>\n<p>C'est ainsi qu'on trace les massifs ronds et le rond central des terrains de football (rayon 9,15 m).</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte du cercle : touche un nœud et découvre le pourquoi",
   "nodes": [
    {
     "id": "centro",
     "label": "Centre",
     "x": 50,
     "y": 6,
     "color": "#111827",
     "html": "Le point fixe d'où partent tous les rayons.",
     "why": "Sans centre, pas de cercle : c'est le point où tu plantes la pointe du compas. <b>Euclide</b>, dans ses <i>Éléments</i> (vers 300 av. J.-C.), définit le cercle justement à partir du centre."
    },
    {
     "id": "circonf",
     "label": "Cercle",
     "x": 25,
     "y": 30,
     "color": "#1d4ed8",
     "html": "La ligne courbe fermée formée de tous les points à la même distance du centre.",
     "why": "C'est la définition d'Euclide. Le nom italien (<i>circonferenza</i>) vient du latin <i>circum ferre</i>, « porter autour » : c'est la ligne qui tourne tout autour du centre."
    },
    {
     "id": "cerchio",
     "label": "Disque",
     "x": 75,
     "y": 30,
     "color": "#3b82f6",
     "html": "La partie du plan enfermée par le cercle.",
     "why": "En italien <i>cerchio</i>, du latin <i>circulus</i>, « petit tour ». C'est l'une des premières formes que l'être humain a utilisées : la <b>roue</b> est née en Mésopotamie il y a environ 5500 ans."
    },
    {
     "id": "raggio",
     "label": "Rayon",
     "x": 15,
     "y": 55,
     "color": "#dc2626",
     "html": "Segment du centre au cercle.",
     "why": "Tous les rayons sont égaux parce que le cercle est fait justement des points à cette distance du centre. Le nom rappelle les rayons de la roue et du Soleil."
    },
    {
     "id": "diametro",
     "label": "Diamètre",
     "x": 45,
     "y": 55,
     "color": "#16a34a",
     "html": "Corde qui passe par le centre : d = 2 × r.",
     "why": "Du grec <i>diá</i> (à travers) + <i>métron</i> (mesure) : « mesure qui traverse ». Il est fait de deux rayons mis bout à bout, l'un d'un côté et l'autre de l'autre côté du centre."
    },
    {
     "id": "pi",
     "label": "π ≈ 3,14",
     "x": 75,
     "y": 55,
     "color": "#a855f7",
     "html": "Le rapport entre le périmètre du cercle et le diamètre, identique pour tous les cercles.",
     "why": "Tous les cercles sont des « agrandissements » les uns des autres, donc le rapport P : d ne change pas. Archimède l'a calculé avec des polygones de 96 côtés ; en 1761, le Suisse <b>Lambert</b> a démontré que ses chiffres ne finissent jamais et ne se répètent pas."
    },
    {
     "id": "formulaC",
     "label": "P = d × 3,14",
     "x": 30,
     "y": 82,
     "color": "#f59e0b",
     "html": "Formule pour la longueur du cercle.",
     "why": "Elle vient directement de π : si P : d = π, alors P = d × π. Comme d = 2 × r, on peut aussi écrire P = 2 × r × π."
    },
    {
     "id": "area",
     "label": "A = r × r × 3,14",
     "x": 72,
     "y": 82,
     "color": "#14b8a6",
     "html": "Formule pour l'aire du disque.",
     "why": "Archimède a démontré que le disque a la même aire qu'un triangle de base le périmètre du cercle et de hauteur le rayon. C'est la même astuce que les parts en zigzag qui forment un rectangle."
    }
   ],
   "edges": [
    [
     "centro",
     "circonf",
     "points à la même distance"
    ],
    [
     "circonf",
     "cerchio",
     "enferme le"
    ],
    [
     "centro",
     "raggio",
     "d'ici part le"
    ],
    [
     "raggio",
     "diametro",
     "× 2"
    ],
    [
     "diametro",
     "pi",
     "P : d ="
    ],
    [
     "pi",
     "formulaC",
     "donne la"
    ],
    [
     "pi",
     "area",
     "donne l'"
    ],
    [
     "raggio",
     "area",
     "sert pour l'"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : calculer le périmètre du cercle",
   "questions": [
    {
     "type": "num",
     "q": "Un cercle a un diamètre de 10 cm. Combien mesure son périmètre ? (π = 3,14)",
     "answer": 31.4,
     "tol": 0.01,
     "unit": "cm",
     "explain": "P = 10 × 3,14 = 31,4 cm."
    },
    {
     "type": "num",
     "q": "Un cercle a un rayon de 5 cm. Combien mesure son périmètre ? (π = 3,14)",
     "answer": 31.4,
     "tol": 0.01,
     "unit": "cm",
     "explain": "d = 10 cm ; P = 10 × 3,14 = 31,4 cm."
    },
    {
     "type": "mc",
     "q": "Environ combien de fois le périmètre du cercle est-il plus long que le diamètre ?",
     "options": [
      "2 fois",
      "un peu plus de 3 fois",
      "10 fois"
     ],
     "answer": 1,
     "explain": "P : d = π ≈ 3,14."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Cercle",
   "d": "Ligne courbe fermée dont tous les points sont à la même distance du centre."
  },
  {
   "t": "Disque",
   "d": "Partie du plan enfermée par le cercle."
  },
  {
   "t": "Centre",
   "d": "Point équidistant de tous les points du cercle."
  },
  {
   "t": "Rayon",
   "d": "Segment qui relie le centre à un point du cercle."
  },
  {
   "t": "Diamètre",
   "d": "Corde qui passe par le centre ; il mesure le double du rayon."
  },
  {
   "t": "Corde",
   "d": "Segment qui relie deux points du cercle."
  },
  {
   "t": "Arc",
   "d": "Partie de cercle comprise entre deux points."
  },
  {
   "t": "Secteur circulaire",
   "d": "Partie de disque délimitée par deux rayons et un arc (une « part »)."
  },
  {
   "t": "π (pi)",
   "d": "Rapport fixe entre le périmètre du cercle et le diamètre : environ 3,14."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Quelle est la différence entre disque et cercle ?",
    "options": [
     "C'est la même chose",
     "Le cercle est le bord, le disque est la surface",
     "Le disque est le bord, le cercle est la surface"
    ],
    "answer": 1,
    "explain": "Le cercle est la ligne ; le disque est la partie du plan qu'il enferme."
   },
   {
    "type": "num",
    "q": "Le rayon est de 9 cm. Combien mesure le diamètre ?",
    "answer": 18,
    "unit": "cm",
    "explain": "9 × 2 = 18 cm."
   },
   {
    "type": "num",
    "q": "Le diamètre est de 50 cm. Combien mesure le rayon ?",
    "answer": 25,
    "unit": "cm",
    "explain": "50 : 2 = 25 cm."
   },
   {
    "type": "tf",
    "q": "Le diamètre est la plus longue corde d'un cercle.",
    "answer": true,
    "explain": "Il passe par le centre : aucune corde ne peut être plus longue."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le nombre obtenu en divisant le périmètre du cercle par le diamètre ?",
    "answer": [
     "pi",
     "nombre pi",
     "π",
     "le nombre pi",
     "π"
    ],
    "explain": "C'est π (pi), environ 3,14."
   },
   {
    "type": "num",
    "q": "Une pièce a un diamètre de 2 cm. Combien mesure son périmètre ? (π = 3,14)",
    "answer": 6.28,
    "tol": 0.01,
    "unit": "cm",
    "explain": "2 × 3,14 = 6,28 cm."
   },
   {
    "type": "num",
    "q": "Un bassin rond a un rayon de 3 m. Combien mesure son bord ? (π = 3,14)",
    "answer": 18.84,
    "tol": 0.01,
    "unit": "m",
    "explain": "d = 6 m ; P = 6 × 3,14 = 18,84 m."
   },
   {
    "type": "mc",
    "q": "Une part de pizza en forme de pointe est…",
    "options": [
     "un secteur circulaire",
     "une corde",
     "un diamètre"
    ],
    "answer": 0,
    "explain": "Elle est délimitée par deux rayons et un arc : secteur circulaire."
   },
   {
    "type": "num",
    "q": "Un cercle a un périmètre de 31,4 cm. Combien mesure le diamètre ? (π = 3,14)",
    "answer": 10,
    "tol": 0.01,
    "unit": "cm",
    "explain": "d = P : 3,14 = 31,4 : 3,14 = 10 cm."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre les étapes pour trouver le périmètre du cercle à partir du rayon.",
    "items": [
     "Je lis le rayon",
     "Je multiplie le rayon par 2 et je trouve le diamètre",
     "Je multiplie le diamètre par 3,14",
     "J'écris le résultat avec l'unité de mesure"
    ],
    "explain": "r → d = r × 2 → P = d × 3,14."
   },
   {
    "type": "mc",
    "q": "Qui a calculé π en utilisant des polygones à 96 côtés ?",
    "options": [
     "Pythagore",
     "Archimède",
     "Galilée"
    ],
    "answer": 1,
    "explain": "Archimède de Syracuse, au IIIe siècle av. J.-C."
   }
  ],
  "gen": [
   [
    "circle",
    3
   ]
  ]
 }
});
