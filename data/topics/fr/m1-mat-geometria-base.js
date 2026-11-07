TOPIC('fr', {
 "id": "m1-mat-geometria-base",
 "title": "Les objets géométriques fondamentaux",
 "intro": "Toute la géométrie naît de trois idées très simples : le <b>point</b>, la <b>droite</b> et le <b>plan</b>. À partir d'elles, on construit les demi-droites, les segments et les <b>angles</b>, les briques de toute figure. Apprenons à les reconnaître, à les mesurer et à les comparer.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "1. Les objets primitifs : point, droite, plan",
   "html": "<p>En géométrie, certaines idées <b>ne se définissent pas</b> : elles sont si simples que nous les comprenons par intuition. On les appelle les <b>objets primitifs</b>.</p>\n<ul>\n<li><b>Point</b> : il indique une position. Il n'a pas de dimensions (ni longueur, ni largeur, ni épaisseur). On le désigne par une lettre <b>majuscule</b> : A, B, P.</li>\n<li><b>Droite</b> : une ligne droite <b>illimitée</b> dans les deux sens. Elle n'a qu'une dimension, la longueur. On la désigne par une lettre <b>minuscule</b> : r, s, t (ou (d), (d')).</li>\n<li><b>Plan</b> : une surface plate <b>illimitée</b> dans toutes les directions, sans épaisseur. On le désigne par une lettre grecque : α (alpha), β (bêta), π (pi).</li>\n</ul>\n<p>L'<b>espace</b> est l'ensemble de tous les points : c'est le « contenant » de toutes les figures.</p>\n<p>Les propriétés des objets primitifs sont données par les <b>postulats</b> (ou axiomes) : des affirmations qu'on accepte comme vraies sans démonstration. Voici les plus importants :</p>\n<ol>\n<li>Par <b>un point</b> passent <b>une infinité de droites</b> (on les appelle un <i>faisceau de droites</i>).</li>\n<li>Par <b>deux points distincts</b> passe <b>une et une seule droite</b>.</li>\n<li>Une droite contient une infinité de points ; entre deux points quelconques d'une droite, il y en a toujours une infinité d'autres.</li>\n<li>Par <b>trois points non alignés</b> passe <b>un et un seul plan</b>.</li>\n</ol>"
  },
  {
   "type": "svg",
   "title": "Point, droite, demi-droite, segment",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<circle cx=\"70\" cy=\"50\" r=\"6\" fill=\"#dc2626\"/>\n<text x=\"84\" y=\"44\" font-size=\"18\" fill=\"#dc2626\" font-weight=\"bold\">A</text>\n<text x=\"200\" y=\"56\" font-size=\"17\" fill=\"#334155\">point : seulement une position</text>\n<line x1=\"20\" y1=\"110\" x2=\"580\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<polygon points=\"580,110 566,102 566,118\" fill=\"#2563eb\"/>\n<polygon points=\"20,110 34,102 34,118\" fill=\"#2563eb\"/>\n<text x=\"40\" y=\"100\" font-size=\"18\" fill=\"#2563eb\" font-weight=\"bold\">r</text>\n<text x=\"200\" y=\"140\" font-size=\"17\" fill=\"#334155\">droite : infinie des deux côtés</text>\n<line x1=\"120\" y1=\"190\" x2=\"580\" y2=\"190\" stroke=\"#16a34a\" stroke-width=\"4\"/>\n<polygon points=\"580,190 566,182 566,198\" fill=\"#16a34a\"/>\n<circle cx=\"120\" cy=\"190\" r=\"6\" fill=\"#16a34a\"/>\n<text x=\"104\" y=\"182\" font-size=\"18\" fill=\"#16a34a\" font-weight=\"bold\">O</text>\n<text x=\"200\" y=\"220\" font-size=\"17\" fill=\"#334155\">demi-droite : elle a une origine O et ne finit pas</text>\n<line x1=\"150\" y1=\"270\" x2=\"420\" y2=\"270\" stroke=\"#9333ea\" stroke-width=\"4\"/>\n<circle cx=\"150\" cy=\"270\" r=\"6\" fill=\"#9333ea\"/>\n<circle cx=\"420\" cy=\"270\" r=\"6\" fill=\"#9333ea\"/>\n<text x=\"136\" y=\"262\" font-size=\"18\" fill=\"#9333ea\" font-weight=\"bold\">A</text>\n<text x=\"426\" y=\"262\" font-size=\"18\" fill=\"#9333ea\" font-weight=\"bold\">B</text>\n<text x=\"200\" y=\"305\" font-size=\"17\" fill=\"#334155\">segment AB : il a deux extrémités et peut se mesurer</text>\n</svg>",
   "caption": "La droite et la demi-droite ne peuvent pas se mesurer (elles sont infinies) ; le segment, si."
  },
  {
   "type": "text",
   "title": "2. Demi-droites et segments",
   "html": "<p>Un point O sur une droite la divise en deux parties : chacune, avec O, est une <b>demi-droite</b> d'<b>origine</b> O.</p>\n<p>Deux points A et B sur une droite déterminent le <b>segment [AB]</b> : c'est la partie de droite comprise entre A et B, qui sont les <b>extrémités</b>. Contrairement aux droites et aux demi-droites, le segment a une <b>longueur</b> que nous pouvons mesurer avec la règle.</p>\n<table>\n<tr><th>Type de segments</th><th>Ce que cela signifie</th></tr>\n<tr><td><b>Consécutifs</b></td><td>ils n'ont en commun qu'une extrémité (comme les côtés d'une ligne brisée)</td></tr>\n<tr><td><b>Adjacents</b></td><td>ils sont consécutifs <b>et</b> sur la même droite</td></tr>\n<tr><td><b>Isométriques</b> (≅)</td><td>ils peuvent se superposer exactement : ils ont la même longueur</td></tr>\n<tr><td><b>Sécants</b></td><td>ils se croisent en un point intérieur</td></tr>\n</table>\n<p>Le <b>milieu</b> M d'un segment [AB] est le point qui le divise en deux segments de même longueur : AM ≅ MB.</p>\n<p>Plusieurs segments consécutifs forment une <b>ligne brisée</b> ; si la dernière extrémité coïncide avec la première, la ligne brisée est <b>fermée</b> et délimite un <b>polygone</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : additionner et comparer des segments",
   "html": "<p>Sur une droite se trouvent, dans l'ordre, les points A, B, C. On sait que <b>AB = 7 cm</b> et <b>BC = 5 cm</b>.</p>\n<ul>\n<li>Les segments [AB] et [BC] sont <b>adjacents</b> (consécutifs et sur la même droite), donc AC = AB + BC = 7 + 5 = <b>12 cm</b>.</li>\n<li>Le milieu M de [AC] est à une distance de A de : 12 : 2 = <b>6 cm</b>.</li>\n<li>Quelle est la distance de M à B ? AB − AM = 7 − 6 = <b>1 cm</b>.</li>\n</ul>\n<p>Problème « à l'envers » : si AC = 20 cm et que AB dépasse BC de 4 cm, alors BC = (20 − 4) : 2 = <b>8 cm</b> et AB = 8 + 4 = <b>12 cm</b>. C'est la méthode de la <b>somme et de la différence</b>, très utile dans les problèmes !</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : points, droites et segments",
   "questions": [
    {
     "type": "mc",
     "q": "Combien de droites passent par deux points distincts ?",
     "options": [
      "Aucune",
      "Une seule",
      "Deux",
      "Une infinité"
     ],
     "answer": 1,
     "explain": "C'est un postulat d'Euclide : par deux points distincts passe une et une seule droite."
    },
    {
     "type": "tf",
     "q": "Une demi-droite peut se mesurer avec la règle.",
     "answer": false,
     "explain": "La demi-droite est illimitée d'un côté : elle n'a pas de longueur finie. Seul le segment se mesure."
    },
    {
     "type": "num",
     "q": "A, B, C sont alignés dans cet ordre. AB = 9 cm et BC = 6 cm. Combien mesure AC ?",
     "answer": 15,
     "unit": "cm",
     "explain": "[AB] et [BC] sont adjacents : AC = 9 + 6 = 15 cm."
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Droites dans le plan et dans l'espace",
   "html": "<p>Deux droites d'un même plan peuvent être :</p>\n<ul>\n<li><b>sécantes</b> : elles ont <b>un seul point</b> en commun ;</li>\n<li><b>perpendiculaires</b> (⊥) : elles sont sécantes et forment <b>4 angles droits</b> (90°) ;</li>\n<li><b>parallèles</b> (∥) : elles n'ont <b>aucun point commun</b>, même si on les prolonge. Elles gardent toujours la même distance.</li>\n</ul>\n<p>La <b>distance d'un point à une droite</b> est la longueur du segment <b>perpendiculaire</b> qui va du point à la droite : c'est le chemin le plus court.</p>\n<p>Dans l'<b>espace</b>, il existe un cas de plus : deux droites qui ne se rencontrent pas mais ne sont <b>pas parallèles</b>, parce qu'elles ne sont pas dans le même plan. On les appelle des <b>droites non coplanaires</b>. Pense à une route et à un pont qui l'enjambe en travers !</p>"
  },
  {
   "type": "svg",
   "title": "Les positions de deux droites dans le plan",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#fefce8\"/>\n<line x1=\"20\" y1=\"40\" x2=\"180\" y2=\"190\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<line x1=\"20\" y1=\"190\" x2=\"180\" y2=\"40\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<circle cx=\"100\" cy=\"115\" r=\"6\" fill=\"#111827\"/>\n<text x=\"100\" y=\"235\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#111827\">sécantes</text>\n<line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"200\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<line x1=\"220\" y1=\"115\" x2=\"380\" y2=\"115\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<rect x=\"300\" y=\"95\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/>\n<text x=\"300\" y=\"235\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#111827\">perpendiculaires</text>\n<line x1=\"420\" y1=\"70\" x2=\"590\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<line x1=\"420\" y1=\"170\" x2=\"590\" y2=\"140\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<line x1=\"490\" y1=\"58\" x2=\"508\" y2=\"155\" stroke=\"#16a34a\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n<text x=\"525\" y=\"112\" font-size=\"15\" fill=\"#16a34a\">distance</text>\n<text x=\"505\" y=\"235\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#111827\">parallèles</text>\n</svg>",
   "caption": "Les droites parallèles restent toujours à la même distance ; les perpendiculaires forment quatre angles droits."
  },
  {
   "type": "3d",
   "title": "Droites et plans en 3D : trouve les droites non coplanaires",
   "scene": "solid",
   "options": {
    "shape": "box",
    "w": 2,
    "h": 1.2,
    "d": 1.4,
    "color": "#38bdf8",
    "labels": true
   },
   "caption": "Chaque face du pavé droit est dans un plan, chaque arête sur une droite. Fais-le tourner : trouve deux arêtes parallèles, deux perpendiculaires et deux non coplanaires (elles ne se touchent pas et ne sont pas parallèles)."
  },
  {
   "type": "text",
   "title": "4. L'angle",
   "html": "<p>Deux demi-droites de même origine divisent le plan en deux parties. Chacune de ces parties, avec les demi-droites, est un <b>angle</b>.</p>\n<ul>\n<li>Les demi-droites sont les <b>côtés</b> de l'angle ; l'origine commune est le <b>sommet</b>.</li>\n<li>Un angle se désigne par le sommet et un point par côté, ainsi : <b>AÔB</b>, ou par une lettre grecque : α, β, γ.</li>\n<li>Un angle est <b>convexe</b> s'il ne contient pas les prolongements de ses côtés, <b>concave</b> s'il les contient.</li>\n</ul>\n<p>Les angles se mesurent en <b>degrés</b> (°) avec le <b>rapporteur</b>. Un tour complet vaut <b>360°</b>. Chaque degré se divise en <b>60 minutes</b> (′) et chaque minute en <b>60 secondes</b> (″) : c'est le <b>système sexagésimal</b>, hérité des Babyloniens.</p>\n<table>\n<tr><th>Angle</th><th>Mesure</th></tr>\n<tr><td><b>Nul</b></td><td>0° (les côtés coïncident)</td></tr>\n<tr><td><b>Aigu</b></td><td>entre 0° et 90°</td></tr>\n<tr><td><b>Droit</b></td><td>90° (un quart de tour)</td></tr>\n<tr><td><b>Obtus</b></td><td>entre 90° et 180°</td></tr>\n<tr><td><b>Plat</b></td><td>180° (les côtés forment une droite)</td></tr>\n<tr><td><b>Plein</b></td><td>360°</td></tr>\n</table>"
  },
  {
   "type": "svg",
   "title": "Les types d'angles",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0fdf4\"/>\n<line x1=\"30\" y1=\"120\" x2=\"150\" y2=\"120\" stroke=\"#111827\" stroke-width=\"4\"/>\n<line x1=\"30\" y1=\"120\" x2=\"130\" y2=\"50\" stroke=\"#111827\" stroke-width=\"4\"/>\n<path d=\"M75 120 A45 45 0 0 0 67 94\" stroke=\"#dc2626\" stroke-width=\"4\" fill=\"none\"/>\n<text x=\"90\" y=\"160\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#dc2626\">aigu</text>\n<line x1=\"230\" y1=\"120\" x2=\"350\" y2=\"120\" stroke=\"#111827\" stroke-width=\"4\"/>\n<line x1=\"230\" y1=\"120\" x2=\"230\" y2=\"30\" stroke=\"#111827\" stroke-width=\"4\"/>\n<rect x=\"230\" y=\"96\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\"/>\n<text x=\"290\" y=\"160\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2563eb\">droit 90°</text>\n<line x1=\"450\" y1=\"120\" x2=\"570\" y2=\"120\" stroke=\"#111827\" stroke-width=\"4\"/>\n<line x1=\"450\" y1=\"120\" x2=\"390\" y2=\"40\" stroke=\"#111827\" stroke-width=\"4\"/>\n<path d=\"M490 120 A40 40 0 0 0 426 88\" stroke=\"#9333ea\" stroke-width=\"4\" fill=\"none\"/>\n<text x=\"490\" y=\"160\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#9333ea\">obtus</text>\n<line x1=\"40\" y1=\"240\" x2=\"260\" y2=\"240\" stroke=\"#111827\" stroke-width=\"4\"/>\n<circle cx=\"150\" cy=\"240\" r=\"5\" fill=\"#111827\"/>\n<path d=\"M190 240 A40 40 0 0 0 110 240\" stroke=\"#ea580c\" stroke-width=\"4\" fill=\"none\"/>\n<text x=\"150\" y=\"285\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ea580c\">plat 180°</text>\n<line x1=\"420\" y1=\"240\" x2=\"540\" y2=\"240\" stroke=\"#111827\" stroke-width=\"4\"/>\n<circle cx=\"420\" cy=\"240\" r=\"5\" fill=\"#111827\"/>\n<circle cx=\"420\" cy=\"240\" r=\"34\" stroke=\"#16a34a\" stroke-width=\"4\" fill=\"none\"/>\n<text x=\"470\" y=\"285\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#16a34a\">plein 360°</text>\n</svg>",
   "caption": "L'arc coloré indique quelle partie du plan nous mesurons."
  },
  {
   "type": "widget",
   "title": "Classe les angles",
   "widget": "classify",
   "options": {
    "groups": [
     "Aigu",
     "Droit",
     "Obtus",
     "Plat ou plus"
    ],
    "items": [
     [
      "35°",
      0
     ],
     [
      "90°",
      1
     ],
     [
      "120°",
      2
     ],
     [
      "180°",
      3
     ],
     [
      "89°",
      0
     ],
     [
      "91°",
      2
     ],
     [
      "270°",
      3
     ],
     [
      "🕒 aiguilles à 3 h 00",
      1
     ],
     [
      "🕐 aiguilles à 1 h 00",
      0
     ],
     [
      "🕔 aiguilles à 5 h 00",
      2
     ],
     [
      "🕕 aiguilles à 6 h 00",
      3
     ],
     [
      "📐 angle de l'équerre",
      1
     ]
    ]
   },
   "caption": "Rappelle-toi : chaque heure sur le cadran de l'horloge correspond à 360° : 12 = 30°."
  },
  {
   "type": "text",
   "title": "5. Paires d'angles",
   "html": "<ul>\n<li><b>Consécutifs</b> : ils ont le sommet et un côté en commun.</li>\n<li><b>Adjacents</b> : consécutifs, avec les deux autres côtés sur la même droite : ensemble, ils forment un angle <b>plat</b> (180°).</li>\n<li><b>Complémentaires</b> : leur somme est <b>90°</b>. Le complémentaire de 30° est 60°.</li>\n<li><b>Supplémentaires</b> : leur somme est <b>180°</b>. Le supplémentaire de 130° est 50°.</li>\n<li><b>Explémentaires</b> : leur somme est <b>360°</b>. L'explémentaire de 100° est 260°.</li>\n<li><b>Opposés par le sommet</b> : quand deux droites se croisent, les angles « face à face » sont toujours <b>de même mesure</b>.</li>\n</ul>\n<p>Pourquoi les angles opposés par le sommet sont-ils égaux ? Appelons α et β les deux angles opposés et γ celui du milieu. α + γ = 180° et aussi β + γ = 180°, parce qu'ils sont adjacents. Alors α = 180° − γ = β. C'est une vraie <b>démonstration</b> : le premier théorème qu'on rencontre en géométrie !</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : calculer avec des degrés et des minutes",
   "html": "<p><b>Somme.</b> 35°40′ + 20°30′ = 55°70′. Mais 70′ = 1° 10′, donc le résultat est <b>56°10′</b>.</p>\n<p><b>Complémentaire.</b> Le complémentaire de 52°25′ est 90° − 52°25′. Écrivons 90° comme 89°60′ : 89°60′ − 52°25′ = <b>37°35′</b>.</p>\n<p><b>Horloge.</b> À 2 h 00, les aiguilles forment 2 × 30° = <b>60°</b> ; à 4 h 00, elles forment 4 × 30° = <b>120°</b> (obtus). À 9 h 00, elles forment 90° : un angle droit !</p>\n<p><b>Navigation.</b> Les pilotes et les marins indiquent la direction par un angle mesuré à partir du Nord dans le sens des aiguilles d'une montre : Est = 90°, Sud = 180°, Ouest = 270°.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu… 360 vient de Babylone ?",
   "html": "<p>Le tour divisé en <b>360 degrés</b> et les <b>minutes</b> et <b>secondes</b> de 60 viennent des anciens <b>Babyloniens</b>, qui comptaient en base 60. Le nombre 60 se divise par 2, 3, 4, 5, 6, 10, 12, 15, 20, 30 : très pratique pour calculer sans virgules !</p>\n<p>Et les noms ? En latin médiéval, on parlait de <i>pars minuta prima</i> (« première petite partie ») et <i>pars minuta secunda</i> (« deuxième petite partie ») : de là viennent <b>minute</b> et <b>seconde</b>, les mêmes noms que nous utilisons pour l'heure.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu… le livre de géométrie le plus célèbre a 2 300 ans ?",
   "html": "<p>Vers <b>300 av. J.-C.</b>, à Alexandrie en Égypte, le mathématicien grec <b>Euclide</b> écrivit les <b>Éléments</b>, 13 livres qui partent de quelques définitions et de 5 <b>postulats</b> et démontrent à partir de là des centaines de théorèmes. Pendant plus de 2 000 ans, ce fut le texte avec lequel on étudiait la géométrie : après la Bible, c'est peut-être le livre qui compte le plus d'éditions dans l'histoire.</p>\n<p>Son cinquième postulat, celui des <b>parallèles</b>, fit discuter les mathématiciens pendant des siècles. Au XIXe siècle, Lobatchevski, Bolyai et Riemann découvrirent qu'en le changeant on obtient des <b>géométries non euclidiennes</b> : justement celles qu'Einstein utilisera pour décrire l'espace courbe de l'univers !</p>"
  },
  {
   "type": "widget",
   "title": "Associe le terme à sa définition",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "Complémentaires",
      "somme 90°"
     ],
     [
      "Supplémentaires",
      "somme 180°"
     ],
     [
      "Explémentaires",
      "somme 360°"
     ],
     [
      "Parallèles",
      "aucun point commun, même plan"
     ],
     [
      "Non coplanaires",
      "ne se rencontrent pas, plans différents"
     ],
     [
      "Milieu",
      "divise le segment en deux parties égales"
     ]
    ]
   }
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les objets géométriques",
   "intro": "Les définitions abstraites ne te convainquent pas ? Essaie de les voir avec des objets, avec ton corps ou en 3D.",
   "tabs": [
    {
     "label": "🧵 Avec la ficelle et le corps",
     "html": "<p>Tends une <b>ficelle</b> entre deux clous : c'est un <b>segment</b>. Si tu pouvais l'allonger à l'infini des deux côtés, ce serait une <b>droite</b>. Une <b>lampe de poche</b> allumée dans le noir est une excellente demi-droite : elle part d'un point et va très loin.</p>\n<p>Maintenant, utilise tes <b>bras</b> : tiens-les joints devant toi (angle nul), puis ouvre-en un vers le haut jusqu'à former un « L » (angle droit), puis écarte-les en ligne (angle plat). Tourne sur toi-même : tu as fait un <b>angle plein</b> !</p>\n<p>Le sol de la classe est un morceau de <b>plan</b> ; les lignes des carreaux sont des droites parallèles et perpendiculaires.</p>"
    },
    {
     "label": "🕐 Les angles de l'horloge",
     "html": "<p>Le cadran de l'horloge est un rapporteur caché ! Le tour (360°) est divisé en 12 heures, donc chaque heure vaut <b>30°</b>. Regarde les aiguilles : à 3 heures, elles forment un angle droit, à 6 heures un angle plat, à 1 heure un angle aigu de 30°.</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#eff6ff\"/>\n<circle cx=\"150\" cy=\"140\" r=\"110\" fill=\"#ffffff\" stroke=\"#1e3a8a\" stroke-width=\"6\"/>\n<text x=\"150\" y=\"55\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">12</text>\n<text x=\"242\" y=\"147\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">3</text>\n<text x=\"150\" y=\"240\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">6</text>\n<text x=\"58\" y=\"147\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">9</text>\n<line x1=\"150\" y1=\"140\" x2=\"150\" y2=\"62\" stroke=\"#dc2626\" stroke-width=\"6\"/>\n<line x1=\"150\" y1=\"140\" x2=\"215\" y2=\"140\" stroke=\"#111827\" stroke-width=\"8\"/>\n<rect x=\"150\" y=\"118\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<text x=\"400\" y=\"80\" font-size=\"20\" fill=\"#1e3a8a\" font-weight=\"bold\">3 h 00 = 90°</text>\n<text x=\"400\" y=\"120\" font-size=\"18\" fill=\"#334155\">1 heure = 30°</text>\n<text x=\"400\" y=\"155\" font-size=\"18\" fill=\"#334155\">1 h 00 = 30°</text>\n<text x=\"400\" y=\"190\" font-size=\"18\" fill=\"#334155\">4 h 00 = 120°</text>\n<text x=\"400\" y=\"225\" font-size=\"18\" fill=\"#334155\">6 h 00 = 180°</text>\n</svg>"
    },
    {
     "label": "🧊 Le cube en 3D",
     "html": "<p>Sur un cube, tu trouves tout : les <b>sommets</b> sont des points, les <b>arêtes</b> sont sur des droites, les <b>faces</b> sur des plans. Fais-le tourner et cherche :</p>\n<ul><li>des arêtes <b>parallèles</b> (même direction) ;</li><li>des arêtes <b>perpendiculaires</b> (elles se rencontrent à 90°) ;</li><li>des arêtes <b>non coplanaires</b> (elles ne se touchent pas et ne sont pas parallèles : elles n'existent que dans l'espace !).</li></ul>",
     "scene": "solid",
     "options": {
      "shape": "cube",
      "color": "#a78bfa",
      "labels": true
     }
    },
    {
     "label": "🌍 Les degrés dans d'autres pays et métiers",
     "html": "<p>Tout le monde ne mesure pas les angles de la même manière :</p>\n<ul>\n<li>les <b>mathématiciens</b> et les physiciens utilisent souvent les <b>radians</b> : un tour vaut 2π ≈ 6,28 radians ;</li>\n<li>en <b>France</b>, après la Révolution, on essaya d'introduire les <b>grades</b> (ou gons) : un angle droit = 100 grades, un tour = 400. Les géomètres-topographes les utilisent encore, et tu les trouves sur les calculatrices avec la touche « GRAD » ;</li>\n<li>les armées utilisent les <b>millièmes</b> (mil) : un tour = 6 400 mil ;</li>\n<li>dans les pays anglo-saxons, la droite passant par A et B s'écrit avec une double flèche au-dessus : <b>AB</b> avec ↔.</li>\n</ul>\n<p>Le système sexagésimal (360°) reste le plus répandu au monde, parce que 360 se divise de très nombreuses façons.</p>"
    },
    {
     "label": "🇬🇷 Règle et compas, comme les Grecs",
     "html": "<p>Les anciens <b>Grecs</b> (par exemple <b>Euclide</b>, à Alexandrie vers 300 av. J.-C.) construisaient les figures en utilisant seulement <b>deux instruments</b> : une <b>règle non graduée</b> (pour tracer des droites) et le <b>compas</b> (pour tracer des cercles). Pas de règle graduée en centimètres, pas de rapporteur ! Voici comment ils trouvent le <b>milieu</b> d'un segment et sa <b>perpendiculaire</b> (qu'on appelle la <b>médiatrice</b> du segment) :</p><ol><li>Dessine le segment <b>[AB]</b>.</li><li>Pointe le compas en <b>A</b> avec un écartement <b>plus grand que la moitié</b> de AB et trace un arc au-dessus et un au-dessous du segment.</li><li><b>Sans changer l'écartement</b>, pointe en <b>B</b> et trace deux autres arcs : ils coupent les premiers aux points <b>C</b> et <b>D</b>.</li><li>Relie C et D avec la règle : la droite (CD) est <b>perpendiculaire</b> à (AB) et la coupe exactement au <b>milieu M</b>.</li></ol><p><b>Pourquoi ça marche ?</b> C est à la même distance de A et de B (l'écartement du compas était le même), et D aussi. Tous les points qui sont <b>à la même distance de A et de B</b> se trouvent sur une seule droite : la médiatrice du segment. C'est la proposition 10 du premier livre des <i>Éléments</i>.</p><p>🎯 <b>Essaie aussi</b> de construire la <b>bissectrice</b> d'un angle : pointe le compas sur le sommet et trace un arc qui coupe les deux côtés ; depuis ces deux points, trace deux arcs identiques qui se croisent ; relie le sommet au point de croisement. Tu as partagé l'angle en deux parties égales sans le mesurer !</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"150\" cy=\"150\" r=\"200\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 6\"/><circle cx=\"450\" cy=\"150\" r=\"200\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 6\"/><line x1=\"150\" y1=\"150\" x2=\"450\" y2=\"150\" stroke=\"#1e3a8a\" stroke-width=\"4\"/><line x1=\"300\" y1=\"8\" x2=\"300\" y2=\"292\" stroke=\"#dc2626\" stroke-width=\"3\"/><circle cx=\"150\" cy=\"150\" r=\"6\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"450\" cy=\"150\" r=\"6\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"17.7\" r=\"6\" fill=\"#16a34a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"282.3\" r=\"6\" fill=\"#16a34a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"150\" r=\"6\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"2\"/><text x=\"128\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">A</text><text x=\"458\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">B</text><text x=\"310\" y=\"30\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">C</text><text x=\"310\" y=\"290\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">D</text><text x=\"308\" y=\"172\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">M</text><rect x=\"8\" y=\"8\" width=\"150\" height=\"50\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><text x=\"16\" y=\"30\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">Seulement la règle</text><text x=\"16\" y=\"50\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">et le compas !</text></svg>"
    },
    {
     "label": "🇨🇳 Équerre et compas en Chine",
     "html": "<p>En <b>Chine</b>, dans d'anciennes peintures et sculptures d'il y a environ 2 000 ans (dynastie Han), les deux ancêtres légendaires <b>Fuxi</b> et <b>Nüwa</b> sont représentés tenant une <b>équerre</b> (矩, <i>ju</i>) et un <b>compas</b> (规, <i>gui</i>). Ensemble, les deux mots forment <b>规矩</b> (<i>guīju</i>), qui en chinois veut dire… <b>« règles »</b> ! Pour les anciens Chinois, celui qui sait utiliser l'équerre et le compas sait mettre de l'ordre dans le monde.</p><p>Avec ces deux instruments, tu peux faire tout ce que tu étudies dans ce chapitre :</p><ul><li><b>Perpendiculaires</b> : appuie un côté de l'angle droit de l'équerre sur une droite et trace le long de l'autre côté. Les deux droites forment un <b>angle droit</b> (90°).</li><li><b>Parallèles</b> (la méthode de « l'équerre qui glisse ») : pose la règle sur la feuille et tiens-la immobile ; fais <b>glisser</b> l'équerre le long de la règle et trace une droite, puis une autre plus loin. Toutes les droites ont la <b>même direction</b> : elles sont parallèles, parce qu'elles forment toutes le même angle avec la règle.</li><li><b>Distance point–droite</b> : depuis le point P, trace avec l'équerre la perpendiculaire à la droite : le segment perpendiculaire est la <b>distance</b> la plus courte.</li><li><b>Cercle</b> : avec le compas, tous les points à la même distance du centre.</li></ul><p>🎯 Essaie : dessine une droite et un point en dehors. Avec l'équerre qui glisse, trace la <b>parallèle</b> passant par le point. Combien peux-tu en tracer ? Une seule (c'est justement le cinquième postulat d'Euclide !).</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des objets géométriques : touche et découvre pourquoi",
   "nodes": [
    {
     "id": "postulati",
     "label": "Postulats",
     "x": 50,
     "y": 6,
     "color": "#a855f7",
     "html": "Affirmations acceptées comme vraies sans démonstration, qui décrivent comment se comportent les points, les droites et les plans.",
     "why": "On ne peut pas tout démontrer : tout raisonnement doit partir de quelque chose. Euclide, vers 300 av. J.-C., choisit quelques postulats évidents et construisit à partir d'eux toute la géométrie avec des démonstrations rigoureuses. En 1899, David Hilbert les réécrivit de façon encore plus précise."
    },
    {
     "id": "punto",
     "label": "Point",
     "x": 18,
     "y": 26,
     "color": "#dc2626",
     "html": "Indique une position ; il n'a pas de dimensions.",
     "why": "Euclide l'a défini comme « ce qui n'a pas de parties ». C'est une idée abstraite : le petit point que tu dessines au crayon n'est qu'un modèle, parce qu'il a toujours un peu d'épaisseur."
    },
    {
     "id": "retta",
     "label": "Droite",
     "x": 50,
     "y": 30,
     "color": "#2563eb",
     "html": "Ligne droite illimitée, à une seule dimension.",
     "why": "Par deux points, il n'en passe qu'une : c'est pourquoi le fil tendu entre deux points est toujours droit et la droite est le chemin le plus court dans le plan."
    },
    {
     "id": "piano",
     "label": "Plan",
     "x": 82,
     "y": 26,
     "color": "#0ea5e9",
     "html": "Surface plate illimitée, à deux dimensions.",
     "why": "Trois points non alignés déterminent un seul plan : c'est la raison pour laquelle un tabouret à 3 pieds ne branle jamais, alors qu'une chaise à 4 pieds, parfois si !"
    },
    {
     "id": "semiretta",
     "label": "Demi-droite et segment",
     "x": 30,
     "y": 54,
     "color": "#16a34a",
     "html": "Parties de droite : la demi-droite a une origine, le segment deux extrémités.",
     "why": "Ils naissent en « coupant » la droite avec un ou deux points. Le segment est fini, donc on peut le comparer et le mesurer : de là naissent les mesures de longueur."
    },
    {
     "id": "parallele",
     "label": "Parallèles et perpendiculaires",
     "x": 72,
     "y": 54,
     "color": "#f59e0b",
     "html": "Positions relatives de deux droites.",
     "why": "Le cinquième postulat d'Euclide dit en substance que par un point extérieur à une droite passe une seule parallèle. En le changeant, les géométries non euclidiennes sont nées au XIXe siècle."
    },
    {
     "id": "angolo",
     "label": "Angle",
     "x": 30,
     "y": 80,
     "color": "#ef4444",
     "html": "Partie du plan entre deux demi-droites de même origine.",
     "why": "Deux demi-droites issues du même point divisent le plan en deux parties : chacune est un angle. Il mesure de combien une direction est « tournée » par rapport à une autre."
    },
    {
     "id": "gradi",
     "label": "Degrés sexagésimaux",
     "x": 70,
     "y": 82,
     "color": "#14b8a6",
     "html": "Unité de mesure des angles : le tour vaut 360°, 1° = 60′, 1′ = 60″.",
     "why": "Cela vient des Babyloniens, qui comptaient en base 60 et observaient que le Soleil met environ 360 jours à faire le tour du ciel. Le nombre 360 a énormément de diviseurs."
    },
    {
     "id": "teorema",
     "label": "Opposés par le sommet",
     "x": 50,
     "y": 96,
     "color": "#6366f1",
     "html": "Les angles opposés par le sommet ont la même mesure.",
     "why": "On le démontre : chacun est supplémentaire du même angle, donc ils sont égaux. Selon la tradition, c'est Thalès de Milet (VIe siècle av. J.-C.) qui l'a démontré le premier."
    }
   ],
   "edges": [
    [
     "postulati",
     "punto",
     "décrivent"
    ],
    [
     "postulati",
     "retta",
     "décrivent"
    ],
    [
     "postulati",
     "piano",
     "décrivent"
    ],
    [
     "retta",
     "semiretta",
     "se divise en"
    ],
    [
     "retta",
     "parallele",
     "deux droites peuvent être"
    ],
    [
     "semiretta",
     "angolo",
     "deux demi-droites forment"
    ],
    [
     "angolo",
     "gradi",
     "se mesure en"
    ],
    [
     "angolo",
     "teorema",
     "nous démontrons"
    ],
    [
     "piano",
     "parallele",
     "dans le même"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : les angles",
   "questions": [
    {
     "type": "num",
     "q": "Quel est le supplémentaire d'un angle de 125° ?",
     "answer": 55,
     "unit": "°",
     "explain": "180° − 125° = 55°."
    },
    {
     "type": "mc",
     "q": "Deux angles opposés par le sommet : l'un mesure 40°. Et l'autre ?",
     "options": [
      "140°",
      "40°",
      "50°",
      "320°"
     ],
     "answer": 1,
     "explain": "Les angles opposés par le sommet ont toujours la même mesure."
    },
    {
     "type": "mc",
     "q": "Un angle de 100° est…",
     "options": [
      "aigu",
      "droit",
      "obtus",
      "plat"
     ],
     "answer": 2,
     "explain": "Il est supérieur à 90° et inférieur à 180° : obtus."
    }
   ]
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li><b>Point, droite, plan</b> sont des objets primitifs : on ne les définit pas, on les décrit avec les <b>postulats</b>.</li>\n<li>Par deux points passe <b>une seule droite</b> ; par trois points non alignés <b>un seul plan</b>.</li>\n<li>Le <b>segment</b> a deux extrémités et se mesure ; la droite et la demi-droite non.</li>\n<li>Droites dans le plan : <b>sécantes, perpendiculaires, parallèles</b> ; dans l'espace aussi <b>non coplanaires</b>.</li>\n<li>Angles : aigu (&lt;90°), droit (90°), obtus, plat (180°), plein (360°).</li>\n<li>Complémentaires 90°, supplémentaires 180°, explémentaires 360° ; opposés par le sommet = de même mesure.</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Objet primitif",
   "d": "Concept de base qui ne se définit pas (point, droite, plan)."
  },
  {
   "t": "Postulat",
   "d": "Affirmation acceptée comme vraie sans démonstration."
  },
  {
   "t": "Demi-droite",
   "d": "Chacune des deux parties dans lesquelles un point divise une droite."
  },
  {
   "t": "Segment",
   "d": "Partie de droite comprise entre deux points, appelés extrémités."
  },
  {
   "t": "Milieu",
   "d": "Point qui divise un segment en deux parties de même longueur."
  },
  {
   "t": "Isométriques",
   "d": "Figures superposables point par point (même forme et même mesure)."
  },
  {
   "t": "Droites non coplanaires",
   "d": "Droites de l'espace qui ne se rencontrent pas et ne sont pas parallèles."
  },
  {
   "t": "Angle",
   "d": "Partie du plan comprise entre deux demi-droites de même origine."
  },
  {
   "t": "Rapporteur",
   "d": "Instrument pour mesurer les angles en degrés."
  },
  {
   "t": "Système sexagésimal",
   "d": "Système en base 60 : 1° = 60 minutes, 1 minute = 60 secondes."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Lequel de ces objets se désigne par une lettre minuscule ?",
    "options": [
     "Le point",
     "La droite",
     "Le plan"
    ],
    "answer": 1,
    "explain": "Les droites se désignent par des lettres minuscules (r, s), les points par des majuscules, les plans par des lettres grecques."
   },
   {
    "type": "tf",
    "q": "Par trois points non alignés passe un et un seul plan.",
    "answer": true,
    "explain": "C'est un postulat : c'est pourquoi un tabouret à 3 pieds ne branle pas."
   },
   {
    "type": "mc",
    "q": "Deux segments consécutifs situés sur la même droite sont dits…",
    "options": [
     "isométriques",
     "adjacents",
     "sécants",
     "parallèles"
    ],
    "answer": 1,
    "explain": "Ils sont adjacents : consécutifs et alignés."
   },
   {
    "type": "num",
    "q": "Le segment [AB] mesure 18 cm. Combien mesure [AM], si M est le milieu ?",
    "answer": 9,
    "unit": "cm",
    "explain": "Le milieu divise le segment en deux moitiés : 18 : 2 = 9 cm."
   },
   {
    "type": "num",
    "q": "AB + BC = 30 cm et AB dépasse BC de 6 cm. Combien mesure BC ?",
    "answer": 12,
    "unit": "cm",
    "explain": "BC = (30 − 6) : 2 = 12 cm ; AB = 18 cm."
   },
   {
    "type": "text",
    "q": "Comment s'appellent deux droites de l'espace qui ne se rencontrent pas et ne sont pas parallèles ?",
    "answer": [
     "non coplanaires",
     "droites non coplanaires"
    ],
    "explain": "Ce sont des droites non coplanaires : elles ne sont pas dans le même plan."
   },
   {
    "type": "num",
    "q": "Quel est le complémentaire d'un angle de 37° ?",
    "answer": 53,
    "unit": "°",
    "explain": "90° − 37° = 53°."
   },
   {
    "type": "num",
    "q": "Quel est l'explémentaire d'un angle de 210° ?",
    "answer": 150,
    "unit": "°",
    "explain": "360° − 210° = 150°."
   },
   {
    "type": "mc",
    "q": "Combien vaut 25°50′ + 14°20′ ?",
    "options": [
     "39°70′",
     "40°10′",
     "39°10′",
     "40°70′"
    ],
    "answer": 1,
    "explain": "25°50′ + 14°20′ = 39°70′ = 40°10′, parce que 60′ = 1°."
   },
   {
    "type": "num",
    "q": "Combien de degrés forment les aiguilles d'une horloge à 4 h 00 ?",
    "answer": 120,
    "unit": "°",
    "explain": "Chaque heure vaut 30° : 4 × 30° = 120°."
   },
   {
    "type": "tf",
    "q": "Deux droites perpendiculaires forment quatre angles aigus.",
    "answer": false,
    "explain": "Elles forment quatre angles droits (90°)."
   },
   {
    "type": "order",
    "q": "Range les angles du plus petit au plus grand.",
    "items": [
     "aigu",
     "droit",
     "obtus",
     "plat",
     "plein"
    ],
    "explain": "Aigu (<90°), droit (90°), obtus (90°–180°), plat (180°), plein (360°)."
   }
  ]
 }
});
