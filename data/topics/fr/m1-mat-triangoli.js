TOPIC('fr', {
 "id": "m1-mat-triangoli",
 "title": "Les triangles",
 "intro": "Le <b>triangle</b> est le polygone le plus simple : seulement 3 côtés et 3 angles. Et pourtant c'est la figure la plus « solide » de la géométrie : il est rigide, il ne se déforme pas, et c'est pour cela qu'on le trouve dans les ponts, les grues et les toits. Découvrons comment on le classe, pourquoi ses angles font toujours 180° et quels sont ses <b>points remarquables</b>.",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "1. Qu'est-ce qu'un triangle ?",
   "html": "<p>Un <b>triangle</b> est un polygone à <b>3 côtés</b>, <b>3 sommets</b> et <b>3 angles intérieurs</b>. On le désigne par les lettres de ses sommets : triangle <b>ABC</b>.</p>\n<ul>\n<li>Les côtés opposés aux sommets A, B, C se désignent souvent par les minuscules <b>a, b, c</b>.</li>\n<li>Les angles intérieurs se désignent par <b>α, β, γ</b> (ou Â, B̂, Ĉ).</li>\n<li>Le <b>périmètre</b> est la somme des côtés : P = a + b + c.</li>\n</ul>\n<p><b>Inégalité triangulaire.</b> Tous les trios de segments ne forment pas un triangle ! Chaque côté doit être <b>plus petit que la somme</b> des deux autres (et plus grand que leur différence).</p>\n<p>Avec 3, 4 et 5 cm, le triangle se construit (5 &lt; 3 + 4). Avec 2, 3 et 7 cm, non : 7 est plus long que 2 + 3 = 5 et les deux côtés courts n'arrivent pas à se « refermer ».</p>"
  },
  {
   "type": "text",
   "title": "2. La somme des angles intérieurs est 180°",
   "html": "<p>Dans <b>tout</b> triangle, grand ou petit, la somme des angles intérieurs est toujours <b>180°</b>, c'est-à-dire un angle plat :</p>\n<p style=\"text-align:center\"><b>α + β + γ = 180°</b></p>\n<p><b>Pourquoi ?</b> Trace par le sommet C la droite <b>parallèle</b> au côté AB. Autour de C se forme un angle plat divisé en trois parties : celle du milieu est γ, et les deux latérales ont la même mesure que α et β (ce sont des angles <i>alternes-internes</i> entre droites parallèles). Donc α + β + γ = un angle plat = 180°. C'est le théorème 32 du premier livre des <b>Éléments</b> d'Euclide.</p>\n<p><b>Conséquences utiles :</b></p>\n<ul>\n<li>si tu connais deux angles, tu trouves le troisième : γ = 180° − α − β ;</li>\n<li>un triangle peut avoir au maximum <b>un</b> angle droit ou obtus ;</li>\n<li>l'<b>angle extérieur</b> (formé par un côté et le prolongement d'un autre) est égal à la <b>somme des deux angles intérieurs non adjacents</b>.</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "La démonstration avec la parallèle",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/>\n<line x1=\"40\" y1=\"60\" x2=\"560\" y2=\"60\" stroke=\"#16a34a\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<polygon points=\"110,250 500,250 330,60\" fill=\"#fde68a\" stroke=\"#111827\" stroke-width=\"4\"/>\n<path d=\"M160 250 A50 50 0 0 0 147 220\" stroke=\"#dc2626\" stroke-width=\"5\" fill=\"none\"/>\n<path d=\"M450 250 A50 50 0 0 1 468 214\" stroke=\"#2563eb\" stroke-width=\"5\" fill=\"none\"/>\n<path d=\"M310 82 A30 30 0 0 0 350 83\" stroke=\"#9333ea\" stroke-width=\"5\" fill=\"none\"/>\n<path d=\"M290 60 A40 40 0 0 0 300 87\" stroke=\"#dc2626\" stroke-width=\"5\" fill=\"none\"/>\n<path d=\"M370 60 A40 40 0 0 1 356 89\" stroke=\"#2563eb\" stroke-width=\"5\" fill=\"none\"/>\n<text x=\"175\" y=\"238\" font-size=\"22\" fill=\"#dc2626\" font-weight=\"bold\">α</text>\n<text x=\"420\" y=\"238\" font-size=\"22\" fill=\"#2563eb\" font-weight=\"bold\">β</text>\n<text x=\"322\" y=\"115\" font-size=\"22\" fill=\"#9333ea\" font-weight=\"bold\">γ</text>\n<text x=\"262\" y=\"88\" font-size=\"22\" fill=\"#dc2626\" font-weight=\"bold\">α</text>\n<text x=\"380\" y=\"88\" font-size=\"22\" fill=\"#2563eb\" font-weight=\"bold\">β</text>\n<text x=\"95\" y=\"275\" font-size=\"18\" font-weight=\"bold\">A</text>\n<text x=\"505\" y=\"275\" font-size=\"18\" font-weight=\"bold\">B</text>\n<text x=\"322\" y=\"48\" font-size=\"18\" font-weight=\"bold\">C</text>\n<text x=\"60\" y=\"40\" font-size=\"16\" fill=\"#16a34a\">droite parallèle à (AB) passant par C</text>\n<text x=\"300\" y=\"295\" font-size=\"18\" text-anchor=\"middle\" fill=\"#111827\">α + γ + β = angle plat = 180°</text>\n</svg>",
   "caption": "En haut, autour de C, les trois angles α, γ, β forment un angle plat."
  },
  {
   "type": "example",
   "title": "Exemple pratique : trouver l'angle manquant",
   "html": "<p><b>1.</b> Un triangle a α = 48° et β = 67°. Alors γ = 180° − 48° − 67° = <b>65°</b>.</p>\n<p><b>2.</b> Dans un triangle <b>isocèle</b>, l'angle au sommet principal mesure 40°. Les angles à la base sont égaux : (180° − 40°) : 2 = <b>70°</b> chacun.</p>\n<p><b>3.</b> Dans un triangle <b>rectangle</b>, un angle aigu mesure 35°. L'autre mesure 90° − 35° = <b>55°</b> : les deux angles aigus d'un triangle rectangle sont toujours <b>complémentaires</b>.</p>\n<p><b>4.</b> Angle extérieur : si deux angles intérieurs mesurent 50° et 60°, l'angle extérieur au troisième sommet est 50° + 60° = <b>110°</b>.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : côtés et angles",
   "questions": [
    {
     "type": "num",
     "q": "Deux angles d'un triangle mesurent 72° et 38°. Combien mesure le troisième ?",
     "answer": 70,
     "unit": "°",
     "explain": "180° − 72° − 38° = 70°."
    },
    {
     "type": "tf",
     "q": "Avec des segments de 4 cm, 5 cm et 10 cm, on peut construire un triangle.",
     "answer": false,
     "explain": "10 est plus grand que 4 + 5 = 9 : l'inégalité triangulaire n'est pas respectée."
    },
    {
     "type": "mc",
     "q": "Combien d'angles obtus un triangle peut-il avoir au maximum ?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answer": 1,
     "explain": "Deux angles obtus dépasseraient déjà 180°."
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Classer les triangles",
   "html": "<p><b>Selon les côtés</b> :</p>\n<ul>\n<li><b>équilatéral</b> : 3 côtés de même longueur, et aussi 3 angles égaux de <b>60°</b> ;</li>\n<li><b>isocèle</b> : 2 côtés de même longueur (les <b>côtés égaux</b>) ; le troisième est la <b>base</b>. Les angles à la base sont égaux ;</li>\n<li><b>scalène</b> : 3 côtés différents et 3 angles différents.</li>\n</ul>\n<p><b>Selon les angles</b> :</p>\n<ul>\n<li><b>acutangle</b> : 3 angles aigus ;</li>\n<li><b>rectangle</b> : un angle droit. Les côtés qui le forment sont les <b>côtés de l'angle droit</b>, le côté opposé est l'<b>hypoténuse</b> (toujours le côté le plus long) ;</li>\n<li><b>obtusangle</b> : un angle obtus.</li>\n</ul>\n<p>Les deux classements se combinent : il existe le triangle <b>rectangle isocèle</b> (angles 90°, 45°, 45° : la moitié d'un carré), le <b>scalène obtusangle</b>, et ainsi de suite. Mais un équilatéral est toujours acutangle !</p>"
  },
  {
   "type": "svg",
   "title": "La famille des triangles",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f0f9ff\"/>\n<text x=\"300\" y=\"24\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">Selon les côtés</text>\n<polygon points=\"40,140 160,140 100,36\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"3\"/>\n<text x=\"100\" y=\"164\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">équilatéral</text>\n<polygon points=\"240,140 360,140 300,40\" fill=\"#fde047\" stroke=\"#854d0e\" stroke-width=\"3\"/>\n<line x1=\"264\" y1=\"92\" x2=\"276\" y2=\"86\" stroke=\"#854d0e\" stroke-width=\"3\"/>\n<line x1=\"324\" y1=\"86\" x2=\"336\" y2=\"92\" stroke=\"#854d0e\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"164\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">isocèle</text>\n<polygon points=\"420,140 580,140 460,50\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"3\"/>\n<text x=\"500\" y=\"164\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">scalène</text>\n<text x=\"300\" y=\"194\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">Selon les angles</text>\n<polygon points=\"40,295 170,295 120,215\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"105\" y=\"315\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">acutangle</text>\n<polygon points=\"250,295 360,295 250,210\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<rect x=\"250\" y=\"279\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n<text x=\"300\" y=\"315\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">rectangle</text>\n<polygon points=\"420,295 580,295 450,250\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n<text x=\"500\" y=\"315\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">obtusangle</text>\n</svg>",
   "caption": "Les petits traits sur les côtés indiquent les côtés de même longueur ; le petit carré indique l'angle droit."
  },
  {
   "type": "widget",
   "title": "Quel triangle est-ce ?",
   "widget": "classify",
   "options": {
    "groups": [
     "Acutangle",
     "Rectangle",
     "Obtusangle"
    ],
    "items": [
     [
      "60°, 60°, 60°",
      0
     ],
     [
      "90°, 45°, 45°",
      1
     ],
     [
      "120°, 30°, 30°",
      2
     ],
     [
      "70°, 60°, 50°",
      0
     ],
     [
      "90°, 30°, 60°",
      1
     ],
     [
      "100°, 50°, 30°",
      2
     ],
     [
      "80°, 80°, 20°",
      0
     ],
     [
      "côtés 3, 4, 5 cm",
      1
     ],
     [
      "un angle de 95°",
      2
     ]
    ]
   },
   "caption": "Le triangle de côtés 3, 4, 5 est rectangle parce que 3² + 4² = 5² (tu le verras avec Pythagore)."
  },
  {
   "type": "text",
   "title": "4. Hauteurs, médianes, bissectrices, médiatrices",
   "html": "<p>Dans tout triangle, on peut tracer 4 types de segments ou de droites spéciaux, <b>trois par type</b>. Les trois lignes de chaque type se rencontrent toujours en <b>un seul point</b> : ce sont les <b>points remarquables</b>.</p>\n<table>\n<tr><th>Ligne</th><th>Qu'est-ce que c'est ?</th><th>Point remarquable</th></tr>\n<tr><td><b>Hauteur</b></td><td>segment perpendiculaire du sommet au côté opposé (ou à son prolongement)</td><td><b>Orthocentre</b></td></tr>\n<tr><td><b>Médiane</b></td><td>segment du sommet au <b>milieu</b> du côté opposé</td><td><b>Centre de gravité</b> : il divise chaque médiane en deux parties, l'une double de l'autre (2 : 1)</td></tr>\n<tr><td><b>Bissectrice</b></td><td>demi-droite qui divise un angle en deux angles de même mesure</td><td><b>Centre du cercle inscrit</b> : centre du cercle <b>inscrit</b></td></tr>\n<tr><td><b>Médiatrice</b></td><td>droite perpendiculaire à un côté en son milieu</td><td><b>Centre du cercle circonscrit</b> : centre du cercle <b>circonscrit</b></td></tr>\n</table>\n<p><b>Où se trouvent-ils ?</b> Le centre de gravité et le centre du cercle inscrit sont toujours <b>à l'intérieur</b>. L'orthocentre et le centre du cercle circonscrit sont à l'intérieur dans le triangle acutangle ; dans le triangle rectangle, l'orthocentre est au sommet de l'angle droit et le centre du cercle circonscrit au milieu de l'hypoténuse ; dans le triangle obtusangle, ils sont <b>à l'extérieur</b>.</p>\n<p>Dans le triangle <b>équilatéral</b>, les quatre points remarquables <b>coïncident</b>.</p>"
  },
  {
   "type": "widget",
   "title": "Reconnais les lignes du triangle",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<polygon points=\"60,280 540,280 220,40\" fill=\"#e0f2fe\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n<line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"280\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/>\n<rect x=\"220\" y=\"264\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<line x1=\"540\" y1=\"280\" x2=\"140\" y2=\"160\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<circle cx=\"140\" cy=\"160\" r=\"6\" fill=\"#16a34a\"/>\n<circle cx=\"300\" cy=\"280\" r=\"6\" fill=\"#9333ea\"/>\n<text x=\"40\" y=\"300\" font-size=\"18\" font-weight=\"bold\">A</text>\n<text x=\"548\" y=\"300\" font-size=\"18\" font-weight=\"bold\">B</text>\n<text x=\"212\" y=\"30\" font-size=\"18\" font-weight=\"bold\">C</text>\n</svg>",
    "spots": [
     {
      "x": 220,
      "y": 170,
      "label": "Hauteur"
     },
     {
      "x": 340,
      "y": 220,
      "label": "Médiane"
     },
     {
      "x": 140,
      "y": 160,
      "label": "Milieu de AC"
     },
     {
      "x": 220,
      "y": 272,
      "label": "Angle droit"
     },
     {
      "x": 300,
      "y": 280,
      "label": "Base AB"
     }
    ]
   },
   "caption": "La hauteur forme un angle droit avec la base ; la médiane arrive au milieu du côté opposé."
  },
  {
   "type": "example",
   "title": "Exemple pratique : le centre de gravité et le périmètre",
   "html": "<p><b>Centre de gravité en équilibre.</b> Découpe un triangle de carton, trace deux médianes et trouve leur point d'intersection : le <b>centre de gravité</b>. Pose-le sur la pointe d'un crayon : le triangle reste en <b>équilibre</b> ! Le centre de gravité est en effet le « centre de masse » de la figure.</p>\n<p>Si une médiane mesure 12 cm, le centre de gravité la divise en <b>8 cm</b> (du côté du sommet) et <b>4 cm</b> (du côté du milieu du côté opposé).</p>\n<p><b>Périmètre.</b> Un triangle isocèle a une base de 10 cm et des côtés égaux de 13 cm : P = 10 + 13 + 13 = <b>36 cm</b>. Un équilatéral de périmètre 27 cm a des côtés de 27 : 3 = <b>9 cm</b>.</p>"
  },
  {
   "type": "3d",
   "title": "Des triangles dans l'espace : le tétraèdre",
   "scene": "solid",
   "options": {
    "shape": "pyramid",
    "n": 3,
    "r": 1.2,
    "h": 1.6,
    "color": "#f97316",
    "labels": true,
    "shapes": [
     "pyramid",
     "prism"
    ]
   },
   "caption": "Une pyramide à base triangulaire a 4 faces, toutes triangulaires. Le prisme droit à base triangulaire a deux bases triangulaires : on le trouve dans les tentes de camping et dans les prismes qui décomposent la lumière."
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu… le triangle ne se déforme pas ?",
   "html": "<p>Prends 4 baguettes assemblées aux angles avec des attaches parisiennes : le carré s'écrase facilement et devient un losange. Avec 3 baguettes, en revanche, le triangle <b>ne bouge pas</b> : trois côtés déterminent un seul triangle (c'est le troisième cas d'égalité des triangles).</p>\n<p>C'est pourquoi les triangles sont partout dans les <b>structures</b> : la <b>tour Eiffel</b>, les grues, les pylônes à haute tension, les ponts en fer, les charpentes des toits et même les cadres des vélos sont faits de triangles.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu… sur la Terre, les triangles « trichent » ?",
   "html": "<p>La règle des 180° vaut dans le <b>plan</b>. Sur une sphère, non ! Pars du pôle Nord, descends jusqu'à l'équateur, parcours un quart d'équateur et reviens au pôle : tu as dessiné un triangle avec <b>trois angles droits</b>, c'est-à-dire 270° !</p>\n<p>Le grand mathématicien <b>Carl Friedrich Gauss</b>, au début du XIXe siècle, mesura un énorme triangle entre trois montagnes allemandes (Brocken, Hohehagen et Inselsberg) pour vérifier si l'espace était vraiment « plat ». Il trouva 180°, aux erreurs de mesure près.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les triangles",
   "intro": "Si la démonstration avec les parallèles ne te convainc pas, essaie avec tes mains, avec ton corps ou avec la technologie.",
   "tabs": [
    {
     "label": "✂️ Déchire les angles",
     "html": "<p>La méthode la plus utilisée dans les écoles du monde entier pour <b>voir</b> les 180° :</p>\n<ol>\n<li>dessine un triangle quelconque sur une feuille et colorie les trois angles de couleurs différentes ;</li>\n<li>découpe-le et <b>déchire</b> les trois angles ;</li>\n<li>place-les côte à côte avec les sommets au même point : ils forment toujours une <b>ligne droite</b>, c'est-à-dire un angle plat !</li>\n</ol>\n<p>Essaie avec des triangles différents : ça marche toujours.</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#fdf4ff\"/>\n<polygon points=\"30,180 230,180 150,40\" fill=\"#ffffff\" stroke=\"#111827\" stroke-width=\"3\"/>\n<path d=\"M30 180 L70 180 A40 40 0 0 0 64 160 Z\" fill=\"#ef4444\"/>\n<path d=\"M230 180 L190 180 A40 40 0 0 1 210 145 Z\" fill=\"#3b82f6\"/>\n<path d=\"M150 40 L132 72 A36 36 0 0 0 170 75 Z\" fill=\"#22c55e\"/>\n<text x=\"280\" y=\"120\" font-size=\"30\" fill=\"#111827\">→</text>\n<line x1=\"330\" y1=\"160\" x2=\"580\" y2=\"160\" stroke=\"#111827\" stroke-width=\"3\"/>\n<path d=\"M455 160 L525 160 A70 70 0 0 0 516 125 Z\" fill=\"#ef4444\"/>\n<path d=\"M455 160 L516 125 A70 70 0 0 0 420 99 Z\" fill=\"#22c55e\"/>\n<path d=\"M455 160 L420 99 A70 70 0 0 0 385 160 Z\" fill=\"#3b82f6\"/>\n<text x=\"455\" y=\"200\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\">les trois angles = 180°</text>\n</svg>"
    },
    {
     "label": "🚶 Marche sur le triangle",
     "html": "<p>Dessine un grand triangle dans la cour avec de la craie. Pars d'un sommet en regardant le long d'un côté, marche jusqu'au sommet suivant et <b>tourne</b> pour regarder le long du nouveau côté. Fais de même aux autres sommets, jusqu'à regarder de nouveau dans la direction de départ.</p>\n<p>Tu as fait un <b>tour complet</b> : 360°. Les trois « virages » sont les <b>angles extérieurs</b>, donc leur somme est 360°. Chaque angle extérieur + son angle intérieur = 180° : 3 × 180° − 360° = <b>180°</b> pour les angles intérieurs. Cette méthode plaît beaucoup dans les pays anglo-saxons et elle est à la base de la programmation avec la « tortue » (Logo, Scratch).</p>"
    },
    {
     "label": "📐 Le triangle rectangle interactif",
     "html": "<p>Déplace les curseurs des côtés de l'angle droit : le triangle change de forme, mais reste toujours <b>rectangle</b>. Observe que l'<b>hypoténuse</b> est toujours le côté le plus long et que les deux angles aigus sont complémentaires. Les carrés sur les côtés te préparent au théorème de Pythagore que tu étudieras en 4e.</p>",
     "widget": "pythagoras",
     "options": {
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "🏗️ Analogie : le triangle ingénieur",
     "html": "<p>Pense aux triangles comme aux <b>ingénieurs</b> de la géométrie. Un rectangle de carton sous un poids plie ; si tu ajoutes une <b>diagonale</b>, il devient deux triangles et arrête de plier.</p>\n<p>Le géomètre utilise aussi les triangles pour <b>mesurer</b> des distances qu'on ne peut pas atteindre (fleuves, montagnes) : c'est la <b>triangulation</b>, avec laquelle on a dessiné les cartes géographiques de toute l'Europe. Et le GPS de ton téléphone calcule ta position avec un principe semblable, la trilatération.</p>"
    },
    {
     "label": "🇬🇷 La démonstration d'Euclide (la parallèle)",
     "html": "<p>Déchirer les angles nous fait <b>voir</b> que la somme est 180°, mais les mathématiciens <b>grecs</b> voulaient être <b>sûrs</b> que cela vaut pour <b>tous</b> les triangles, même ceux que personne n'a jamais dessinés. Voici la démonstration qu'on trouve dans les <i>Éléments</i> d'<b>Euclide</b> (livre I, proposition 32) :</p><ol><li>Prends un triangle quelconque ABC d'angles α, β, γ.</li><li>Depuis le sommet <b>C</b>, trace la droite <b>parallèle</b> au côté AB.</li><li>À gauche de C se forme un angle <b>égal à α</b> : ce sont des <b>angles alternes-internes</b> entre deux parallèles coupées par la droite AC.</li><li>À droite de C se forme un angle <b>égal à β</b>, pour la même raison avec la droite BC.</li><li>Maintenant, autour de C, sur la droite parallèle, il y a α, γ et β les uns à côté des autres : ensemble, ils forment un <b>angle plat</b>, c'est-à-dire <b>180°</b>.</li></ol><p>Donc α + β + γ = 180° <b>toujours</b>. Remarque que nous avons utilisé le fait que par C passe <b>une seule</b> parallèle à AB : c'est le fameux <b>cinquième postulat</b>. Sur une sphère (comme la Terre), ce postulat ne vaut pas, et d'ailleurs là les angles d'un triangle ont une somme <b>supérieure</b> à 180° !</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><polygon points=\"100,250 500,250 260,70\" fill=\"#e0f2fe\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><line x1=\"30\" y1=\"70\" x2=\"570\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/><path d=\"M140,250 A40,40 0 0 0 126.6,220.1\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"7\"/><path d=\"M460,250 A40,40 0 0 1 468,226\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"7\"/><path d=\"M236.8,96.1 A35,35 0 0 0 288,91\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"7\"/><path d=\"M225,70 A35,35 0 0 0 236.8,96.1\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"7\"/><path d=\"M288,91 A35,35 0 0 0 295,70\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"7\"/><text x=\"78\" y=\"275\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">A</text><text x=\"508\" y=\"275\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">B</text><text x=\"252\" y=\"58\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">C</text><text x=\"150\" y=\"240\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">α</text><text x=\"430\" y=\"240\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">β</text><text x=\"253\" y=\"125\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">γ</text><text x=\"180\" y=\"62\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">α</text><text x=\"315\" y=\"62\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">β</text><text x=\"400\" y=\"100\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\">droite parallèle à (AB)</text><text x=\"300\" y=\"292\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">α + γ + β = angle plat = 180°</text></svg>"
    },
    {
     "label": "𓂀 Le « seked » des anciens Égyptiens",
     "html": "<p>Dans le <b>papyrus de Rhind</b> (Égypte, vers 1550 av. J.-C., copié par le scribe <b>Ahmès</b>), il y a des problèmes sur les pyramides. Pour dire à quel point une face est <b>raide</b>, les Égyptiens utilisaient le <b>seked</b> : de combien de <b>palmes</b> on se déplace <b>horizontalement</b> en montant de <b>1 coudée</b> (1 coudée = 7 palmes).</p><p>Le seked décrit un <b>triangle rectangle</b> : le côté vertical vaut toujours 1 coudée, le côté horizontal est le seked. Toutes les pyramides ayant le même seked ont des faces de <b>même inclinaison</b>, qu'elles soient grandes ou petites : leurs triangles sont <b>semblables</b>. La grande pyramide de Khéops a un seked de 5 palmes et demie (angle d'environ 52°).</p><p><b>Problème 56 du papyrus</b> : une pyramide a une base de <b>360</b> coudées et une hauteur de <b>250</b> coudées. Quel est le seked ?</p><ol><li>Prends la <b>moitié de la base</b> : 360 : 2 = 180 coudées (c'est le côté horizontal du triangle rectangle à l'intérieur de la pyramide).</li><li>En montant de 250 coudées, on se déplace de 180 : en montant de 1 coudée, on se déplace de 180 : 250 = 0,72 coudée.</li><li>Transforme en palmes : 0,72 × 7 = <b>5,04 palmes</b>. Ahmès écrit « 5 palmes et 1/25 » : c'est exactement 5,04 !</li></ol><p>Attention : <b>seked plus petit = pyramide plus raide</b>.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/><polygon points=\"200,260 200,50 365,260\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/><polygon points=\"200,260 200,50 35,260\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/><rect x=\"200\" y=\"240\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"190\" y=\"160\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\" font-weight=\"bold\">1 coudée</text><text x=\"190\" y=\"180\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">= 7 palmes</text><text x=\"282\" y=\"284\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#b45309\" text-anchor=\"middle\" font-weight=\"bold\">seked = 5 palmes et ½</text><text x=\"390\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Pyramide de Khéops :</text><text x=\"390\" y=\"115\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">pour chaque coudée de montée</text><text x=\"390\" y=\"137\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">on se déplace de 5½ palmes</text><text x=\"390\" y=\"159\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">horizontalement.</text><text x=\"390\" y=\"195\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#b45309\" font-weight=\"bold\">Angle ≈ 52°</text></svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des triangles : touche et découvre pourquoi",
   "nodes": [
    {
     "id": "tri",
     "label": "Triangle",
     "x": 50,
     "y": 6,
     "color": "#f97316",
     "html": "Polygone à 3 côtés, 3 sommets, 3 angles.",
     "why": "C'est le polygone qui a le plus petit nombre de côtés possible : avec 2 segments, on ne ferme pas une figure. Tout autre polygone peut se diviser en triangles avec des diagonales."
    },
    {
     "id": "disug",
     "label": "Inégalité triangulaire",
     "x": 16,
     "y": 26,
     "color": "#ef4444",
     "html": "Chaque côté est plus petit que la somme des deux autres.",
     "why": "Le chemin direct est le plus court : aller de A à B en passant par C est toujours plus long qu'aller tout droit. Euclide le démontre dans la proposition 20 du premier livre."
    },
    {
     "id": "somma",
     "label": "Somme des angles = 180°",
     "x": 50,
     "y": 30,
     "color": "#a855f7",
     "html": "α + β + γ = 180° dans tout triangle du plan.",
     "why": "Elle découle du cinquième postulat d'Euclide (celui des parallèles) : en traçant la parallèle à un côté par le sommet opposé, les trois angles se recomposent en un angle plat."
    },
    {
     "id": "rigido",
     "label": "Rigidité",
     "x": 84,
     "y": 26,
     "color": "#64748b",
     "html": "Le triangle ne se déforme pas si les côtés sont fixes.",
     "why": "Trois côtés déterminent un seul triangle (cas d'égalité CCC). C'est pourquoi les ingénieurs construisent des poutres en treillis faites de triangles."
    },
    {
     "id": "lati",
     "label": "Classement selon les côtés",
     "x": 25,
     "y": 54,
     "color": "#eab308",
     "html": "Équilatéral, isocèle, scalène.",
     "why": "Si deux côtés sont égaux, les angles opposés le sont aussi (théorème du triangle isocèle, appelé au Moyen Âge pons asinorum, le « pont aux ânes », parce qu'il mettait les élèves en difficulté)."
    },
    {
     "id": "angoli",
     "label": "Classement selon les angles",
     "x": 75,
     "y": 54,
     "color": "#3b82f6",
     "html": "Acutangle, rectangle, obtusangle.",
     "why": "Comme la somme est 180°, au maximum un angle peut être droit ou obtus : les deux autres doivent se partager ce qui reste."
    },
    {
     "id": "punti",
     "label": "Points remarquables",
     "x": 50,
     "y": 74,
     "color": "#16a34a",
     "html": "Orthocentre, centre de gravité, centre du cercle inscrit, centre du cercle circonscrit.",
     "why": "Les trois hauteurs, médianes, bissectrices ou médiatrices se rencontrent toujours en un seul point : c'est un fait démontrable, pas une coïncidence. Les anciens Grecs connaissaient déjà le centre de gravité, le centre du cercle inscrit et celui du cercle circonscrit."
    },
    {
     "id": "eulero",
     "label": "Droite d'Euler",
     "x": 25,
     "y": 94,
     "color": "#14b8a6",
     "html": "L'orthocentre, le centre de gravité et le centre du cercle circonscrit sont toujours alignés.",
     "why": "Elle fut découverte par le mathématicien suisse Leonhard Euler en 1765. Le centre de gravité se trouve toujours au tiers de la distance entre le centre du cercle circonscrit et l'orthocentre."
    },
    {
     "id": "pitagora",
     "label": "Vers Pythagore",
     "x": 75,
     "y": 94,
     "color": "#ec4899",
     "html": "Dans le triangle rectangle : a² + b² = c².",
     "why": "Tu l'étudieras en 4e. Les Babyloniens et les Chinois le connaissaient déjà ; la tradition attribue la première démonstration à Pythagore (VIe siècle av. J.-C.)."
    }
   ],
   "edges": [
    [
     "tri",
     "disug",
     "existe si"
    ],
    [
     "tri",
     "somma",
     "propriété"
    ],
    [
     "tri",
     "rigido",
     "propriété"
    ],
    [
     "tri",
     "lati",
     "se classe"
    ],
    [
     "tri",
     "angoli",
     "se classe"
    ],
    [
     "somma",
     "angoli",
     "limite"
    ],
    [
     "tri",
     "punti",
     "a"
    ],
    [
     "punti",
     "eulero",
     "alignés sur la"
    ],
    [
     "angoli",
     "pitagora",
     "si rectangle"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : classement et points remarquables",
   "questions": [
    {
     "type": "mc",
     "q": "Comment s'appelle le point de rencontre des médianes ?",
     "options": [
      "Orthocentre",
      "Centre de gravité",
      "Centre du cercle inscrit",
      "Centre du cercle circonscrit"
     ],
     "answer": 1,
     "explain": "Les médianes se rencontrent au centre de gravité."
    },
    {
     "type": "mc",
     "q": "Un triangle d'angles 90°, 45°, 45° est…",
     "options": [
      "rectangle scalène",
      "rectangle isocèle",
      "équilatéral",
      "obtusangle"
     ],
     "answer": 1,
     "explain": "Il a un angle droit et deux angles égaux (et donc deux côtés égaux)."
    },
    {
     "type": "num",
     "q": "Dans un triangle isocèle, l'angle au sommet principal est de 50°. Combien mesure chaque angle à la base ?",
     "answer": 65,
     "unit": "°",
     "explain": "(180° − 50°) : 2 = 65°."
    }
   ]
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Chaque côté est <b>plus petit que la somme</b> des deux autres.</li>\n<li>La somme des angles intérieurs est <b>180°</b> ; l'angle extérieur = somme des deux intérieurs non adjacents.</li>\n<li>Côtés : <b>équilatéral, isocèle, scalène</b>. Angles : <b>acutangle, rectangle, obtusangle</b>.</li>\n<li>Hauteurs → <b>orthocentre</b> ; médianes → <b>centre de gravité</b> (2:1) ; bissectrices → <b>centre du cercle inscrit</b> ; médiatrices → <b>centre du cercle circonscrit</b>.</li>\n<li>Le triangle est <b>rigide</b> : c'est pourquoi on l'utilise dans les constructions.</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Triangle",
   "d": "Polygone à trois côtés et trois angles."
  },
  {
   "t": "Inégalité triangulaire",
   "d": "Chaque côté est plus petit que la somme des deux autres."
  },
  {
   "t": "Angle extérieur",
   "d": "Angle entre un côté et le prolongement du côté consécutif."
  },
  {
   "t": "Côtés de l'angle droit",
   "d": "Les deux côtés qui forment l'angle droit dans un triangle rectangle."
  },
  {
   "t": "Hypoténuse",
   "d": "Le côté opposé à l'angle droit ; c'est le plus long."
  },
  {
   "t": "Hauteur",
   "d": "Segment perpendiculaire mené d'un sommet au côté opposé."
  },
  {
   "t": "Médiane",
   "d": "Segment qui relie un sommet au milieu du côté opposé."
  },
  {
   "t": "Bissectrice",
   "d": "Demi-droite qui divise un angle en deux parties de même mesure."
  },
  {
   "t": "Médiatrice d'un segment",
   "d": "Droite perpendiculaire au segment en son milieu."
  },
  {
   "t": "Centre de gravité",
   "d": "Point de rencontre des médianes ; point d'équilibre du triangle."
  },
  {
   "t": "Orthocentre, centre du cercle inscrit, centre du cercle circonscrit",
   "d": "Points de rencontre des hauteurs, des bissectrices et des médiatrices."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Deux angles d'un triangle mesurent 55° et 85°. Combien mesure le troisième ?",
    "answer": 40,
    "unit": "°",
    "explain": "180° − 55° − 85° = 40°."
   },
   {
    "type": "mc",
    "q": "Avec quel trio de segments peut-on construire un triangle ?",
    "options": [
     "2, 3, 6 cm",
     "3, 4, 8 cm",
     "5, 6, 9 cm",
     "1, 1, 3 cm"
    ],
    "answer": 2,
    "explain": "9 < 5 + 6 = 11 : c'est le seul trio qui respecte l'inégalité triangulaire."
   },
   {
    "type": "tf",
    "q": "Un triangle équilatéral a tous ses angles de 60°.",
    "answer": true,
    "explain": "Trois angles égaux : 180° : 3 = 60°."
   },
   {
    "type": "mc",
    "q": "Dans un triangle rectangle, le côté opposé à l'angle droit s'appelle…",
    "options": [
     "un côté de l'angle droit",
     "la base",
     "l'hypoténuse",
     "la médiane"
    ],
    "answer": 2,
    "explain": "C'est l'hypoténuse, le côté le plus long."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le point de rencontre des trois hauteurs ?",
    "answer": [
     "orthocentre",
     "l'orthocentre"
    ],
    "explain": "Les hauteurs se rencontrent à l'orthocentre."
   },
   {
    "type": "mc",
    "q": "Le centre du cercle inscrit dans un triangle est…",
    "options": [
     "le centre de gravité",
     "le point de rencontre des bissectrices",
     "le centre du cercle circonscrit",
     "l'orthocentre"
    ],
    "answer": 1,
    "explain": "Le centre du cercle inscrit, intersection des bissectrices, est à égale distance des trois côtés."
   },
   {
    "type": "num",
    "q": "Un angle aigu d'un triangle rectangle mesure 28°. Combien mesure l'autre angle aigu ?",
    "answer": 62,
    "unit": "°",
    "explain": "Les angles aigus d'un triangle rectangle sont complémentaires : 90° − 28° = 62°."
   },
   {
    "type": "num",
    "q": "Deux angles intérieurs mesurent 45° et 70°. Combien mesure l'angle extérieur adjacent au troisième angle ?",
    "answer": 115,
    "unit": "°",
    "explain": "L'angle extérieur est la somme des deux angles intérieurs non adjacents : 45° + 70° = 115°."
   },
   {
    "type": "num",
    "q": "Une médiane mesure 18 cm. Combien mesure la partie comprise entre le sommet et le centre de gravité ?",
    "answer": 12,
    "unit": "cm",
    "explain": "Le centre de gravité divise la médiane dans le rapport 2:1 : 18 : 3 × 2 = 12 cm."
   },
   {
    "type": "tf",
    "q": "Dans un triangle obtusangle, l'orthocentre se trouve à l'extérieur du triangle.",
    "answer": true,
    "explain": "Deux hauteurs tombent sur les prolongements des côtés, donc l'orthocentre est extérieur."
   },
   {
    "type": "num",
    "q": "Un triangle isocèle a une base de 12 cm et des côtés égaux de 10 cm. Combien mesure le périmètre ?",
    "answer": 32,
    "unit": "cm",
    "explain": "12 + 10 + 10 = 32 cm."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre les étapes pour trouver le centre de gravité.",
    "items": [
     "Trouve le milieu d'un côté",
     "Relie-le au sommet opposé (médiane)",
     "Recommence avec un autre côté",
     "Le point de rencontre des médianes est le centre de gravité"
    ],
    "explain": "Deux médianes suffisent : la troisième passe par le même point."
   }
  ],
  "gen": [
   [
    "triAngle",
    3
   ]
  ]
 }
});
