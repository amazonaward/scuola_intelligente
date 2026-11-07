TOPIC('fr', {
 "id": "p4-mat-perimetro",
 "title": "Le périmètre",
 "intro": "De combien de grillage a-t-on besoin pour clôturer le potager ? Combien de ruban pour faire le tour d'un cadeau ? Pour répondre, il faut mesurer le <b>contour</b> des figures, c'est-à-dire leur <b>périmètre</b>.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Qu'est-ce que le périmètre",
   "html": "<p>Le <b>périmètre</b> est la <b>longueur du contour</b> d'une figure plane.</p>\n<p>Le mot vient du grec : <i>perí</i> = « autour » et <i>métron</i> = « mesure ». Périmètre veut dire justement « mesure du tour ».</p>\n<p>Pour un polygone, le périmètre se trouve d'une façon très simple :</p>\n<p style=\"font-size:1.2em\"><b>Périmètre = somme des longueurs de tous les côtés</b></p>\n<p>Le périmètre est une <b>longueur</b> : il se mesure en <b>mm, cm, dm, m, km</b>… On l'indique en général avec la lettre <b>P</b> (ou 2p).</p>\n<p>⚠️ Avant d'additionner, vérifie que tous les côtés sont dans la <b>même unité de mesure</b> ! On ne peut pas additionner des centimètres et des mètres.</p>"
  },
  {
   "type": "svg",
   "title": "La fourmi qui fait le tour",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0fdf4\"/>\n<polygon points=\"80,240 120,70 330,50 420,200 260,250\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"6\" stroke-dasharray=\"16 6\"/>\n<text x=\"72\" y=\"236\" font-size=\"30\">🐜</text>\n<text x=\"80\" y=\"155\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">5 cm</text>\n<text x=\"200\" y=\"45\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">6 cm</text>\n<text x=\"385\" y=\"115\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">4 cm</text>\n<text x=\"350\" y=\"245\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">5 cm</text>\n<text x=\"140\" y=\"270\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">5 cm</text>\n<text x=\"440\" y=\"60\" font-size=\"20\" fill=\"#15803d\" font-weight=\"bold\">P = 5 + 6 + 4</text>\n<text x=\"470\" y=\"88\" font-size=\"20\" fill=\"#15803d\" font-weight=\"bold\">+ 5 + 5</text>\n<text x=\"470\" y=\"120\" font-size=\"24\" fill=\"#b91c1c\" font-weight=\"bold\">= 25 cm</text>\n</svg>",
   "caption": "La fourmi part d'un sommet et marche le long de tous les côtés jusqu'à revenir au point de départ : le chemin parcouru est le périmètre."
  },
  {
   "type": "text",
   "title": "Les formules les plus utilisées",
   "html": "<p>Pour certaines figures, il y a des raccourcis, parce qu'elles ont des côtés égaux.</p>\n<table>\n<tr><th>Figure</th><th>Périmètre</th><th>Pourquoi</th></tr>\n<tr><td><b>Carré</b> (côté c)</td><td>P = c × 4</td><td>4 côtés égaux</td></tr>\n<tr><td><b>Rectangle</b> (base b, hauteur h)</td><td>P = (b + h) × 2</td><td>2 bases et 2 hauteurs égales</td></tr>\n<tr><td><b>Triangle équilatéral</b></td><td>P = c × 3</td><td>3 côtés égaux</td></tr>\n<tr><td><b>Triangle isocèle</b></td><td>P = base + côté × 2</td><td>2 côtés obliques égaux</td></tr>\n<tr><td><b>Losange</b></td><td>P = c × 4</td><td>4 côtés égaux</td></tr>\n<tr><td><b>Parallélogramme</b></td><td>P = (a + b) × 2</td><td>côtés opposés égaux</td></tr>\n<tr><td><b>Polygone régulier</b> à n côtés</td><td>P = c × n</td><td>n côtés égaux</td></tr>\n<tr><td>Polygone quelconque</td><td>somme de tous les côtés</td><td>—</td></tr>\n</table>"
  },
  {
   "type": "widget",
   "title": "Joue avec le rectangle",
   "widget": "areaGrid",
   "options": {
    "w": 6,
    "h": 3,
    "max": 12
   },
   "caption": "Déplace les curseurs : compte les petits carreaux du contour et contrôle le périmètre. Essaie de trouver des rectangles différents avec le même périmètre !"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : calculer le périmètre",
   "questions": [
    {
     "type": "num",
     "q": "Un carré a un côté de 7 cm. Quel est son périmètre ?",
     "answer": 28,
     "unit": "cm",
     "explain": "7 × 4 = 28 cm."
    },
    {
     "type": "num",
     "q": "Un rectangle a une base de 9 cm et une hauteur de 4 cm. Quel est le périmètre ?",
     "answer": 26,
     "unit": "cm",
     "explain": "(9 + 4) × 2 = 13 × 2 = 26 cm."
    },
    {
     "type": "tf",
     "q": "Le périmètre se mesure en mètres, en centimètres ou dans d'autres unités de longueur.",
     "answer": true,
     "explain": "C'est une longueur : le contour de la figure."
    }
   ]
  },
  {
   "type": "text",
   "title": "Problèmes à l'envers : les formules inverses",
   "html": "<p>Parfois tu connais le périmètre et tu dois trouver un côté. On fait l'opération <b>inverse</b> :</p>\n<ul>\n<li><b>Carré</b> : côté = P : 4. Si P = 36 cm → c = 36 : 4 = <b>9 cm</b>.</li>\n<li><b>Triangle équilatéral</b> : côté = P : 3. Si P = 27 m → c = <b>9 m</b>.</li>\n<li><b>Rectangle</b> : base + hauteur = P : 2, puis j'enlève le côté que je connais. Si P = 30 cm et b = 10 cm → b + h = 15 → h = 15 − 10 = <b>5 cm</b>.</li>\n<li><b>Polygone régulier</b> : côté = P : n (n = nombre de côtés).</li>\n</ul>\n<p>Contrôle toujours : refais le calcul « dans le bon sens » et regarde si tu retrouves le périmètre de départ !</p>"
  },
  {
   "type": "svg",
   "title": "Même périmètre, formes différentes",
   "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#eff6ff\"/>\n<rect x=\"30\" y=\"100\" width=\"240\" height=\"40\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<text x=\"150\" y=\"90\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">6 cm</text>\n<text x=\"290\" y=\"127\" font-size=\"18\" fill=\"#1f2937\">1 cm</text>\n<text x=\"150\" y=\"175\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">P = (6+1)×2 = 14 cm</text>\n<rect x=\"380\" y=\"60\" width=\"160\" height=\"120\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n<text x=\"460\" y=\"50\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">4 cm</text>\n<text x=\"550\" y=\"127\" font-size=\"18\" fill=\"#1f2937\">3 cm</text>\n<text x=\"460\" y=\"215\" font-size=\"20\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">P = (4+3)×2 = 14 cm</text>\n<text x=\"300\" y=\"260\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">Le même tour de ficelle… mais à l'intérieur il y a plus ou moins de place !</text>\n</svg>",
   "caption": "Deux rectangles avec le même périmètre (14 cm) peuvent être très différents : le périmètre mesure le contour, pas l'espace intérieur."
  },
  {
   "type": "example",
   "title": "Exemple pratique : la clôture du potager",
   "html": "<p>Grand-père a un potager rectangulaire de <b>12 m</b> de long et <b>8 m</b> de large. Il veut le clôturer avec du grillage, en laissant un portail de <b>1 m</b> de large. Combien de mètres de grillage doit-il acheter ?</p>\n<ol>\n<li>Périmètre du potager : (12 + 8) × 2 = 20 × 2 = <b>40 m</b></li>\n<li>J'enlève le portail : 40 − 1 = <b>39 m</b> de grillage</li>\n</ol>\n<p>Si le grillage coûte 3 € le mètre, il dépensera 39 × 3 = <b>117 €</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : le cadre et le ruban",
   "html": "<p>Sofia veut coller un ruban autour d'un de ses dessins carrés dont le côté mesure <b>25 cm</b>. Elle a un rouleau de ruban de <b>1 m</b>. Lui suffit-il ?</p>\n<ol>\n<li>Périmètre du carré : 25 × 4 = <b>100 cm</b></li>\n<li>1 m = 100 cm → le ruban suffit <b>tout juste</b>, sans reste ! 🎀</li>\n</ol>\n<p>Et pour une affiche en forme de triangle équilatéral de 40 cm de côté ? 40 × 3 = 120 cm = 1,2 m : <b>cela ne suffit pas</b>, il manque 20 cm.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : le terrain de football",
   "html": "<p>Avant le match, les enfants font 2 tours de course autour d'un terrain de football à 5 de <b>40 m</b> de long et <b>20 m</b> de large. Combien de mètres courent-ils ?</p>\n<ol>\n<li>Un tour = périmètre = (40 + 20) × 2 = <b>120 m</b></li>\n<li>Deux tours = 120 × 2 = <b>240 m</b></li>\n</ol>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? La côte infinie",
   "html": "<p>Quelle est la longueur de la côte de la Grande-Bretagne ? Cela dépend de la règle ! En la mesurant par tronçons droits de 200 km, on obtient environ 2400 km, mais avec des tronçons de 50 km, environ 3400 km : plus l'instrument est petit, plus on « entre » dans chaque crique et plus la côte s'allonge. Le mathématicien <b>Benoît Mandelbrot</b> a étudié ce fait étrange en 1967 : c'est le « paradoxe de la côte », d'où sont nées les <b>fractales</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? La reine Didon et la peau de bœuf",
   "html": "<p>Une légende raconte que la reine phénicienne <b>Didon</b>, arrivée en Afrique, demanda autant de terre « qu'une peau de bœuf peut en contenir ». Elle coupa la peau en lanières très fines et, avec cette longue corde, entoura toute une colline, où elle fonda <b>Carthage</b>. Elle choisit la forme qui, pour un certain périmètre, enferme le plus d'espace : le <b>cercle</b> (en utilisant aussi le rivage de la mer comme limite) !</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Périmètre = <b>somme de tous les côtés</b>. C'est une longueur (cm, m…).</li>\n<li>Carré : <b>c × 4</b>. Rectangle : <b>(b + h) × 2</b>. Triangle équilatéral : <b>c × 3</b>. Polygone régulier : <b>c × n</b>.</li>\n<li>Formules inverses : côté du carré = <b>P : 4</b> ; dans le rectangle b + h = <b>P : 2</b>.</li>\n<li>Avant d'additionner, mets tous les côtés dans la <b>même unité de mesure</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre le périmètre",
   "intro": "Le périmètre peut se toucher, se dérouler, se parcourir à pied. Voici d'autres chemins pour le comprendre.",
   "tabs": [
    {
     "label": "🧵 La ficelle",
     "html": "<p>Prends une ficelle et pose-la bien le long du bord d'un objet (un livre, la table, une assiette). Fais une marque là où le tour se ferme. Maintenant <b>déroule</b> la ficelle et mesure-la avec la règle : voilà la mesure du périmètre !</p>\n<p>Cette astuce fonctionne aussi avec les figures courbes, comme le bord d'une assiette, là où les formules des polygones ne suffisent pas.</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#fffbeb\"/>\n<rect x=\"40\" y=\"40\" width=\"160\" height=\"110\" fill=\"#fde68a\" stroke=\"#b91c1c\" stroke-width=\"6\"/>\n<text x=\"120\" y=\"102\" font-size=\"20\" text-anchor=\"middle\" fill=\"#78350f\">livre</text>\n<text x=\"230\" y=\"105\" font-size=\"36\" fill=\"#1f2937\">➜</text>\n<line x1=\"290\" y1=\"95\" x2=\"570\" y2=\"95\" stroke=\"#b91c1c\" stroke-width=\"6\"/>\n<rect x=\"290\" y=\"115\" width=\"280\" height=\"30\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n<g stroke=\"#0369a1\" stroke-width=\"2\">\n<line x1=\"318\" y1=\"115\" x2=\"318\" y2=\"130\"/><line x1=\"346\" y1=\"115\" x2=\"346\" y2=\"130\"/><line x1=\"374\" y1=\"115\" x2=\"374\" y2=\"130\"/><line x1=\"402\" y1=\"115\" x2=\"402\" y2=\"130\"/><line x1=\"430\" y1=\"115\" x2=\"430\" y2=\"135\"/><line x1=\"458\" y1=\"115\" x2=\"458\" y2=\"130\"/><line x1=\"486\" y1=\"115\" x2=\"486\" y2=\"130\"/><line x1=\"514\" y1=\"115\" x2=\"514\" y2=\"130\"/><line x1=\"542\" y1=\"115\" x2=\"542\" y2=\"130\"/>\n</g>\n<text x=\"430\" y=\"190\" font-size=\"22\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">la ficelle déroulée = périmètre</text>\n</svg>"
    },
    {
     "label": "📏 Sur la droite numérique",
     "html": "<p>Imagine « d'ouvrir » le contour d'un rectangle de base 5 et de hauteur 3 et de l'étendre sur une droite. Fais un saut pour chaque côté : <b>5, puis 3, puis 5, puis 3</b>. Où arrives-tu ? À <b>16</b> : c'est le périmètre ! Les sauts sont par paires égales, c'est pourquoi on peut faire (5 + 3) × 2.</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 20,
      "step": 1,
      "marks": [
       5,
       8,
       13,
       16
      ]
     }
    },
    {
     "label": "🚶 Compter les pas",
     "html": "<p>En Finlande et dans beaucoup de pays du Nord, on fait souvent les mathématiques <b>en plein air</b>. Essaie dans la cour :</p>\n<ol>\n<li>Marche le long du bord du terrain ou du massif de fleurs et compte les pas.</li>\n<li>Mesure avec le mètre la longueur d'un de tes pas (par exemple 50 cm).</li>\n<li>Multiplie : 80 pas × 50 cm = 4000 cm = <b>40 m</b> de périmètre.</li>\n</ol>\n<p>Les anciens Romains mesuraient les routes justement ainsi : <b>mille pas</b> (<i>mille passus</i>) faisaient un <b>mille romain</b>, environ 1480 m. Leur « pas » valait deux enjambées.</p>"
    },
    {
     "label": "🟦 Carreaux et cure-dents",
     "html": "<p>Dessine une figure sur le cahier à carreaux en suivant les lignes. Le périmètre est le nombre de <b>côtés de carreau</b> qui se trouvent sur le bord.</p>\n<p>Ou bien construis des figures avec des <b>cure-dents</b>, tous de même longueur : le périmètre est le nombre de cure-dents utilisés ! Avec 12 cure-dents, tu peux faire un carré 3 × 3, un rectangle 5 × 1, un rectangle 4 × 2… tous avec un périmètre de 12, mais de tailles différentes.</p>",
     "widget": "areaGrid",
     "options": {
      "w": 3,
      "h": 3,
      "max": 10
     }
    },
    {
     "label": "🏛️ Comme les Grecs",
     "html": "<p>Pour les polygones réguliers, les Grecs ont remarqué que le périmètre est toujours <b>côté × nombre de côtés</b>. Le grand <b>Archimède</b> de Syracuse (III<sup>e</sup> siècle av. J.-C.) utilisa justement les périmètres des polygones réguliers à 6, 12, 24, 48 et 96 côtés, dessinés à l'intérieur et à l'extérieur d'un cercle, pour calculer la longueur de la circonférence. Il découvrit que le « tour » du cercle vaut un peu plus de <b>3 fois</b> son diamètre : c'est le fameux nombre π ≈ 3,14 !</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#faf5ff\"/>\n<circle cx=\"150\" cy=\"120\" r=\"90\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"4\"/>\n<polygon points=\"240,120 195,198 105,198 60,120 105,42 195,42\" fill=\"#ddd6fe\" fill-opacity=\"0.6\" stroke=\"#5b21b6\" stroke-width=\"4\"/>\n<circle cx=\"420\" cy=\"120\" r=\"90\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"4\"/>\n<polygon points=\"510,120 498,165 465,198 420,210 375,198 342,165 330,120 342,75 375,42 420,30 465,42 498,75\" fill=\"#ddd6fe\" fill-opacity=\"0.6\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"150\" y=\"232\" font-size=\"17\" text-anchor=\"middle\" fill=\"#1f2937\">6 côtés</text>\n<text x=\"420\" y=\"232\" font-size=\"17\" text-anchor=\"middle\" fill=\"#1f2937\">12 côtés : presque un cercle !</text>\n</svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte du périmètre : touche un nœud et découvre pourquoi",
   "nodes": [
    {
     "id": "lunghezza",
     "label": "Mesures de longueur",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "Le mètre et ses multiples et sous-multiples : km, hm, dam, m, dm, cm, mm.",
     "why": "Le mètre est né en France en 1791, pendant la Révolution, comme la dix-millionième partie de la distance entre le pôle Nord et l'Équateur. Avant, chaque ville avait ses mesures (coudées, pieds, paumes) et le commerce était un chaos."
    },
    {
     "id": "poligono",
     "label": "Polygone",
     "x": 18,
     "y": 28,
     "color": "#16a34a",
     "html": "Figure plane fermée par des segments : les côtés.",
     "why": "Comme le contour est fait de segments droits, nous pouvons les mesurer un par un avec la règle."
    },
    {
     "id": "perimetro",
     "label": "Périmètre",
     "x": 50,
     "y": 40,
     "color": "#dc2626",
     "html": "La longueur du contour d'une figure : somme des côtés.",
     "why": "Du grec <i>perí</i> (autour) + <i>métron</i> (mesure). Les arpenteurs égyptiens le calculaient après chaque crue du Nil pour retracer les limites des champs et savoir de combien de mur ou de haie on avait besoin."
    },
    {
     "id": "somma",
     "label": "Somme des côtés",
     "x": 82,
     "y": 28,
     "color": "#f59e0b",
     "html": "La méthode qui marche toujours : j'additionne tous les côtés.",
     "why": "Parcourir le contour veut dire parcourir chaque côté une seule fois : le chemin total est la somme des morceaux."
    },
    {
     "id": "quadrato",
     "label": "Carré : c × 4",
     "x": 15,
     "y": 66,
     "color": "#2563eb",
     "html": "4 côtés égaux : P = c × 4.",
     "why": "La multiplication est une addition répétée : c + c + c + c = c × 4."
    },
    {
     "id": "rettangolo",
     "label": "Rectangle : (b + h) × 2",
     "x": 40,
     "y": 72,
     "color": "#0ea5e9",
     "html": "Deux bases et deux hauteurs égales.",
     "why": "Les côtés opposés du rectangle sont égaux. On peut faire b × 2 + h × 2, ou bien (b + h) × 2 : par la <b>propriété distributive</b>, le résultat est le même."
    },
    {
     "id": "regolare",
     "label": "Régulier : c × n",
     "x": 65,
     "y": 72,
     "color": "#a855f7",
     "html": "Polygone régulier à n côtés : P = c × n.",
     "why": "Tous les côtés sont égaux : on additionne n fois la même longueur. Archimède a utilisé les périmètres des polygones réguliers pour s'approcher de la longueur du cercle."
    },
    {
     "id": "inverse",
     "label": "Formules inverses",
     "x": 88,
     "y": 66,
     "color": "#14b8a6",
     "html": "À partir du périmètre, je trouve le côté : c = P : 4 (carré), c = P : n (régulier).",
     "why": "La division est l'opération inverse de la multiplication : si c × 4 = P, alors P : 4 = c."
    },
    {
     "id": "area",
     "label": "Ce n'est pas l'aire !",
     "x": 50,
     "y": 94,
     "color": "#be185d",
     "html": "Le périmètre mesure le bord, l'aire mesure l'espace intérieur.",
     "why": "Des figures qui ont le même périmètre peuvent avoir des aires différentes. Parmi tous les rectangles de même périmètre, le carré a l'aire la plus grande ; parmi toutes les figures, le cercle (problème isopérimétrique, déjà connu des Grecs)."
    }
   ],
   "edges": [
    [
     "lunghezza",
     "perimetro",
     "se mesure en"
    ],
    [
     "poligono",
     "perimetro",
     "a un"
    ],
    [
     "perimetro",
     "somma",
     "se calcule avec"
    ],
    [
     "perimetro",
     "quadrato",
     "raccourci"
    ],
    [
     "perimetro",
     "rettangolo",
     "raccourci"
    ],
    [
     "perimetro",
     "regolare",
     "raccourci"
    ],
    [
     "regolare",
     "inverse",
     "à l'envers"
    ],
    [
     "perimetro",
     "area",
     "à ne pas confondre avec"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : formules inverses et problèmes",
   "questions": [
    {
     "type": "num",
     "q": "Le périmètre d'un carré est 48 cm. Combien mesure le côté ?",
     "answer": 12,
     "unit": "cm",
     "explain": "48 : 4 = 12 cm."
    },
    {
     "type": "num",
     "q": "Un hexagone régulier a un côté de 5 m. Quel est le périmètre ?",
     "answer": 30,
     "unit": "m",
     "explain": "5 × 6 = 30 m."
    },
    {
     "type": "mc",
     "q": "Un rectangle a un périmètre de 20 cm et une base de 7 cm. La hauteur est…",
     "options": [
      "3 cm",
      "6 cm",
      "13 cm"
     ],
     "answer": 0,
     "explain": "20 : 2 = 10 (base + hauteur) ; 10 − 7 = 3 cm."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Périmètre",
   "d": "Longueur du contour d'une figure plane ; dans les polygones, c'est la somme des côtés."
  },
  {
   "t": "Contour",
   "d": "La ligne qui délimite une figure."
  },
  {
   "t": "Base",
   "d": "Dans le rectangle, le côté sur lequel la figure « repose »."
  },
  {
   "t": "Hauteur",
   "d": "Dans le rectangle, le côté perpendiculaire à la base."
  },
  {
   "t": "Formule",
   "d": "Une règle écrite en abrégé avec des lettres et des symboles, par exemple P = c × 4."
  },
  {
   "t": "Formule inverse",
   "d": "La règle pour trouver un côté en partant du périmètre."
  },
  {
   "t": "Unité de mesure",
   "d": "La grandeur qu'on utilise comme comparaison, par exemple le mètre."
  },
  {
   "t": "Isopérimétriques",
   "d": "Figures qui ont le même périmètre."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Le périmètre est…",
    "options": [
     "l'espace à l'intérieur d'une figure",
     "la longueur du contour d'une figure",
     "le nombre de côtés"
    ],
    "answer": 1,
    "explain": "Périmètre = mesure du tour."
   },
   {
    "type": "num",
    "q": "Un triangle a des côtés de 6 cm, 8 cm et 10 cm. Quel est le périmètre ?",
    "answer": 24,
    "unit": "cm",
    "explain": "6 + 8 + 10 = 24 cm."
   },
   {
    "type": "num",
    "q": "Un carré a un côté de 15 m. Quel est le périmètre ?",
    "answer": 60,
    "unit": "m",
    "explain": "15 × 4 = 60 m."
   },
   {
    "type": "num",
    "q": "Un rectangle a une base de 25 cm et une hauteur de 10 cm. Quel est le périmètre ?",
    "answer": 70,
    "unit": "cm",
    "explain": "(25 + 10) × 2 = 70 cm."
   },
   {
    "type": "num",
    "q": "Un triangle équilatéral a un périmètre de 36 dm. Combien mesure un côté ?",
    "answer": 12,
    "unit": "dm",
    "explain": "36 : 3 = 12 dm."
   },
   {
    "type": "tf",
    "q": "Deux rectangles de même périmètre ont toujours la même forme.",
    "answer": false,
    "explain": "Par exemple 6×1 et 4×3 ont tous les deux un périmètre de 14 mais des formes différentes."
   },
   {
    "type": "mc",
    "q": "Quelle est la formule du périmètre du rectangle ?",
    "options": [
     "b × h",
     "(b + h) × 2",
     "c × 4"
    ],
    "answer": 1,
    "explain": "Deux bases plus deux hauteurs."
   },
   {
    "type": "num",
    "q": "Un octogone régulier a un côté de 4 cm. Quel est le périmètre ?",
    "answer": 32,
    "unit": "cm",
    "explain": "4 × 8 = 32 cm."
   },
   {
    "type": "num",
    "q": "Un rectangle a un périmètre de 50 m et une hauteur de 10 m. Combien mesure la base ?",
    "answer": 15,
    "unit": "m",
    "explain": "50 : 2 = 25 ; 25 − 10 = 15 m."
   },
   {
    "type": "text",
    "q": "De quelle langue ancienne vient le mot « périmètre » ?",
    "answer": [
     "grec",
     "du grec",
     "le grec",
     "grec ancien",
     "le grec ancien",
     "greco",
     "dal greco",
     "il greco"
    ],
    "explain": "Du grec perí (autour) et métron (mesure)."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre les étapes pour résoudre : « Un carré a un côté de 2 m. Combien de cm de ruban faut-il pour en faire le tour ? »",
    "items": [
     "Je transforme le côté : 2 m = 200 cm",
     "J'applique la formule : P = c × 4",
     "Je calcule 200 × 4 = 800",
     "Je réponds : il faut 800 cm de ruban"
    ],
    "explain": "D'abord j'uniformise les unités, puis j'applique la formule, je calcule et je réponds."
   },
   {
    "type": "num",
    "q": "Un rectangle a une base de 1 m et une hauteur de 30 cm. Quel est le périmètre en cm ?",
    "answer": 260,
    "unit": "cm",
    "explain": "1 m = 100 cm ; (100 + 30) × 2 = 260 cm."
   }
  ],
  "gen": [
   [
    "perimRect",
    3
   ],
   [
    "lengthConv",
    1
   ]
  ]
 }
});
