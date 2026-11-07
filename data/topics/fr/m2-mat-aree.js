TOPIC('fr', {
 "id": "m2-mat-aree",
 "title": "Les aires des polygones",
 "intro": "Combien de carreaux faut-il pour le sol ? Combien de peinture pour un mur ? Combien de pelouse pour un terrain de football ? Pour répondre, il faut l'<b>aire</b>. Découvrons d'où viennent les formules du rectangle, du carré, du parallélogramme, du triangle, du losange, du trapèze et des polygones réguliers, et comment les utiliser aussi « à l'envers » avec les <b>formules inverses</b>.",
 "minutes": 55,
 "sections": [
  {
   "type": "text",
   "title": "Surface, aire et équivalence",
   "html": "<p>La <b>surface</b> est la partie du plan enfermée par un polygone ; l'<b>aire</b> est la <b>mesure</b> de la surface, c'est-à-dire combien de fois elle contient un petit carré choisi comme unité.</p>\n<p>L'unité de mesure principale est le <b>mètre carré (m²)</b> : un carré de côté 1 m. Chaque unité est <b>100 fois</b> plus grande que la suivante :</p>\n<p style=\"text-align:center\"><b>km² → hm² → dam² → m² → dm² → cm² → mm²</b> &nbsp; (× 100 à chaque pas vers la droite)</p>\n<p>Exemple : 1 m² = 100 dm² = 10 000 cm². En agriculture, on utilise l'<b>hectare</b> (ha = 1 hm² = 10 000 m²) et l'<b>are</b> (a = 100 m²).</p>\n<p>Deux figures sont <b>équivalentes</b> (ou de même aire) si elles ont la <b>même aire</b>, même si elles ont des formes différentes. Deux figures formées des mêmes morceaux disposés différemment (<b>équidécomposables</b>) sont toujours de même aire : c'est l'idée sur laquelle reposent toutes les formules !</p>"
  },
  {
   "type": "text",
   "title": "Rectangle et carré",
   "html": "<p><b>Rectangle</b> : dans un rectangle de base 5 cm et de hauteur 3 cm, il y a 3 rangées de 5 petits carrés de 1 cm² : 5 × 3 = 15 cm².</p>\n<p style=\"text-align:center;font-size:1.15em\"><b>A = b × h</b> &nbsp;&nbsp; formules inverses : <b>b = A : h</b> &nbsp; <b>h = A : b</b></p>\n<p><b>Carré</b> : c'est un rectangle dont la base et la hauteur sont égales.</p>\n<p style=\"text-align:center;font-size:1.15em\"><b>A = c × c = c²</b> &nbsp;&nbsp; formule inverse : <b>c = √A</b></p>\n<p>Le carré peut aussi se voir comme un losange : <b>A = d² : 2</b> (d = diagonale), et donc <b>d = √(2 × A)</b>.</p>"
  },
  {
   "type": "widget",
   "title": "Aire du rectangle sur le quadrillage",
   "widget": "areaGrid",
   "options": {
    "w": 5,
    "h": 3,
    "max": 12
   },
   "caption": "Change la base et la hauteur et compte les carreaux : l'aire est toujours base × hauteur."
  },
  {
   "type": "text",
   "title": "Parallélogramme et triangle",
   "html": "<p><b>Parallélogramme</b> : si tu coupes le triangle à gauche et que tu le déplaces à droite, tu obtiens un <b>rectangle</b> de même base et de même hauteur (ils sont équidécomposables) :</p>\n<p style=\"text-align:center;font-size:1.15em\"><b>A = b × h</b> &nbsp;&nbsp; <b>b = A : h</b> &nbsp; <b>h = A : b</b></p>\n<p><b>Triangle</b> : deux triangles égaux, accolés, forment un parallélogramme. Donc le triangle est la <b>moitié</b> du parallélogramme de même base et de même hauteur :</p>\n<p style=\"text-align:center;font-size:1.15em\"><b>A = (b × h) : 2</b> &nbsp;&nbsp; <b>b = (2 × A) : h</b> &nbsp; <b>h = (2 × A) : b</b></p>\n<p>Dans le <b>triangle rectangle</b>, les deux côtés de l'angle droit sont la base et la hauteur : A = (c₁ × c₂) : 2. Rappelle-toi : la hauteur est toujours <b>perpendiculaire</b> à la base et peut aussi tomber <b>à l'extérieur</b> du triangle (triangles obtusangles).</p>"
  },
  {
   "type": "svg",
   "title": "Du parallélogramme au rectangle, du triangle au parallélogramme",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fefce8\"/>\n<polygon points=\"40,130 100,40 260,40 200,130\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<polygon points=\"40,130 100,40 100,130\" fill=\"#f97316\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"130\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/>\n<text x=\"150\" y=\"155\" font-size=\"15\" text-anchor=\"middle\" fill=\"#78350f\">base b</text>\n<text x=\"108\" y=\"95\" font-size=\"15\" fill=\"#dc2626\">h</text>\n<text x=\"290\" y=\"95\" font-size=\"34\" fill=\"#1f2937\">→</text>\n<rect x=\"340\" y=\"40\" width=\"160\" height=\"90\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<polygon points=\"440,130 500,40 500,130\" fill=\"#f97316\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<text x=\"420\" y=\"155\" font-size=\"15\" text-anchor=\"middle\" fill=\"#78350f\">rectangle b × h</text>\n<polygon points=\"60,270 140,180 220,270\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<text x=\"140\" y=\"292\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1e3a8a\">triangle</text>\n<text x=\"290\" y=\"235\" font-size=\"34\" fill=\"#1f2937\">→</text>\n<polygon points=\"340,270 420,180 500,270\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<polygon points=\"420,180 580,180 500,270\" fill=\"#a5b4fc\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<text x=\"460\" y=\"292\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1e3a8a\">2 triangles = parallélogramme</text>\n</svg>",
   "caption": "En déplaçant un morceau, le parallélogramme devient un rectangle ; en doublant un triangle, on obtient un parallélogramme."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : les premières formules",
   "questions": [
    {
     "type": "num",
     "q": "Un rectangle a une base de 12 cm et une hauteur de 7 cm. Aire ?",
     "answer": 84,
     "unit": "cm²",
     "explain": "12 × 7 = 84 cm²."
    },
    {
     "type": "num",
     "q": "Un triangle a une aire de 30 cm² et une base de 10 cm. Combien mesure la hauteur ?",
     "answer": 6,
     "unit": "cm",
     "explain": "h = 2 × 30 : 10 = 6 cm."
    },
    {
     "type": "num",
     "q": "Combien de cm² font 3 dm² ?",
     "answer": 300,
     "unit": "cm²",
     "explain": "1 dm² = 100 cm² → 3 × 100 = 300 cm²."
    }
   ]
  },
  {
   "type": "text",
   "title": "Losange et trapèze",
   "html": "<p><b>Losange</b> : il est contenu dans un rectangle dont les côtés sont les deux diagonales, et il en occupe exactement la <b>moitié</b> :</p>\n<p style=\"text-align:center;font-size:1.15em\"><b>A = (D × d) : 2</b> &nbsp;&nbsp; <b>D = (2 × A) : d</b> &nbsp; <b>d = (2 × A) : D</b></p>\n<p>Le losange est aussi un parallélogramme, donc on a aussi A = côté × hauteur. (La formule avec les diagonales vaut pour tout quadrilatère aux diagonales perpendiculaires, comme le <b>cerf-volant</b> / deltoïde.)</p>\n<p><b>Trapèze</b> : deux trapèzes égaux, l'un retourné, forment un parallélogramme de base (B + b) et de hauteur h :</p>\n<p style=\"text-align:center;font-size:1.15em\"><b>A = (B + b) × h : 2</b> &nbsp;&nbsp; <b>h = (2 × A) : (B + b)</b> &nbsp; <b>B + b = (2 × A) : h</b></p>"
  },
  {
   "type": "svg",
   "title": "Losange et trapèze doublé",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0fdfa\"/>\n<rect x=\"30\" y=\"40\" width=\"220\" height=\"160\" fill=\"#ccfbf1\" stroke=\"#0f766e\" stroke-width=\"2\" stroke-dasharray=\"8 5\"/>\n<polygon points=\"140,40 250,120 140,200 30,120\" fill=\"#14b8a6\" stroke=\"#0f766e\" stroke-width=\"3\"/>\n<line x1=\"30\" y1=\"120\" x2=\"250\" y2=\"120\" stroke=\"#fff\" stroke-width=\"3\"/>\n<line x1=\"140\" y1=\"40\" x2=\"140\" y2=\"200\" stroke=\"#fff\" stroke-width=\"3\"/>\n<text x=\"200\" y=\"113\" font-size=\"16\" fill=\"#fff\" font-weight=\"bold\">D</text>\n<text x=\"146\" y=\"70\" font-size=\"16\" fill=\"#fff\" font-weight=\"bold\">d</text>\n<text x=\"140\" y=\"230\" font-size=\"16\" text-anchor=\"middle\" fill=\"#134e4a\" font-weight=\"bold\">losange = moitié du rectangle D × d</text>\n<polygon points=\"270,200 310,90 410,90 440,200\" fill=\"#a78bfa\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<polygon points=\"410,90 580,90 540,200 440,200\" fill=\"#ddd6fe\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"360\" y=\"82\" font-size=\"15\" text-anchor=\"middle\" fill=\"#4c1d95\">b</text>\n<text x=\"355\" y=\"220\" font-size=\"15\" text-anchor=\"middle\" fill=\"#4c1d95\">B</text>\n<text x=\"495\" y=\"82\" font-size=\"15\" text-anchor=\"middle\" fill=\"#4c1d95\">B</text>\n<text x=\"490\" y=\"220\" font-size=\"15\" text-anchor=\"middle\" fill=\"#4c1d95\">b</text>\n<text x=\"425\" y=\"250\" font-size=\"16\" text-anchor=\"middle\" fill=\"#4c1d95\" font-weight=\"bold\">2 trapèzes = parallélogramme</text>\n<text x=\"425\" y=\"272\" font-size=\"16\" text-anchor=\"middle\" fill=\"#4c1d95\" font-weight=\"bold\">de base B + b</text>\n</svg>",
   "caption": "Le losange occupe la moitié du rectangle construit sur les diagonales ; deux trapèzes égaux forment un parallélogramme."
  },
  {
   "type": "text",
   "title": "Polygones réguliers et polygones quelconques",
   "html": "<p>Un <b>polygone régulier</b> (côtés et angles tous égaux) peut se diviser en autant de <b>triangles égaux</b> avec le sommet au centre. La hauteur de chaque triangle est l'<b>apothème</b> (a), le rayon du cercle inscrit.</p>\n<p style=\"text-align:center;font-size:1.15em\"><b>A = (2p × a) : 2 = p × a</b> &nbsp; (2p = périmètre, p = demi-périmètre)</p>\n<p>Formules inverses : <b>a = (2 × A) : 2p</b> &nbsp; <b>2p = (2 × A) : a</b>.</p>\n<p>Dans tout polygone régulier, le rapport apothème/côté est un <b>nombre fixe</b> (f) : a = c × f.</p>\n<table>\n<tr><th>Polygone</th><td>Triangle équilatéral</td><td>Carré</td><td>Pentagone</td><td>Hexagone</td><td>Octogone</td></tr>\n<tr><th>f (a = c·f)</th><td>0,289</td><td>0,5</td><td>0,688</td><td>0,866</td><td>1,207</td></tr>\n</table>\n<p><b>Polygones irréguliers</b> : on les <b>décompose</b> en figures connues (rectangles, triangles, trapèzes) et on additionne les aires ; ou bien on calcule l'aire d'une figure plus grande et on <b>soustrait</b> les morceaux en trop.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : carreler la cuisine",
   "html": "<p>Une cuisine rectangulaire mesure <b>4,5 m × 3,2 m</b>. Les carreaux sont carrés, de côté <b>40 cm</b>, et une boîte en contient 10. Combien de boîtes faut-il ?</p>\n<ol>\n<li>Aire du sol : 4,5 × 3,2 = <b>14,4 m²</b>.</li>\n<li>Aire d'un carreau : 0,4 × 0,4 = <b>0,16 m²</b>.</li>\n<li>Nombre de carreaux : 14,4 : 0,16 = <b>90</b>.</li>\n<li>Boîtes : 90 : 10 = <b>9</b> (en réalité, on en achète une de plus pour les coupes et les chutes !).</li>\n</ol>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : un terrain irrégulier",
   "html": "<p>Un potager a la forme d'un <b>trapèze rectangle</b> de bases 18 m et 12 m et de hauteur 10 m. À l'intérieur, il y a un bassin carré de côté 2 m qui ne se cultive pas.</p>\n<ol>\n<li>Aire du trapèze : (18 + 12) × 10 : 2 = <b>150 m²</b>.</li>\n<li>Aire du bassin : 2² = <b>4 m²</b>.</li>\n<li>Aire cultivable : 150 − 4 = <b>146 m²</b>.</li>\n</ol>\n<p>Si un sac d'engrais suffit pour 25 m², il faut 146 : 25 = 5,84 → <b>6 sacs</b>.</p>\n<p><b>Formule inverse</b> : et si nous savions que le potager fait 150 m² avec des bases de 18 et 12 m, la hauteur serait h = 2 × 150 : (18 + 12) = 300 : 30 = <b>10 m</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Les aires sur le Nil",
   "html": "<p>Le mot <b>géométrie</b> signifie « mesure de la terre ». Selon l'historien grec <b>Hérodote</b>, elle est née en Égypte : chaque année, les crues du <b>Nil</b> effaçaient les limites des champs et les « tendeurs de cordes » devaient les remesurer pour calculer les impôts. Le <b>papyrus de Rhind</b> (vers 1650 av. J.-C.) contient des problèmes sur l'aire de triangles, de trapèzes et même du cercle.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? La formule de Pick",
   "html": "<p>En <b>1899</b>, le mathématicien autrichien <b>Georg Pick</b> découvrit une formule surprenante pour les polygones dont les sommets sont sur les points d'un quadrillage : <b>A = I + B/2 − 1</b>, où <b>I</b> est le nombre de points <b>intérieurs</b> et <b>B</b> le nombre de points sur le <b>bord</b>. Il suffit de compter les points ! Essaie sur un carré 2 × 2 : I = 1, B = 8 → A = 1 + 4 − 1 = 4 ✓.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les aires",
   "intro": "Les formules peuvent se découvrir en découpant, déplaçant et recomposant. Voici quelques chemins différents.",
   "tabs": [
    {
     "label": "✂️ Découpe et recompose (Chine)",
     "html": "<p>Dans la Chine ancienne, le texte <b>« Les neuf chapitres sur l'art mathématique »</b> (vers IIᵉ–Iᵉʳ siècle av. J.-C.) et le commentateur <b>Liu Hui</b> (IIIᵉ siècle) utilisaient le <b>principe « dedans-dehors »</b> (<i>chu ru xiang bu</i>) : une figure se découpe en morceaux qu'on déplace pour former un rectangle. L'aire ne change pas, parce que les morceaux sont les mêmes ! C'est exactement ce que nous faisons avec le parallélogramme, le triangle et le trapèze.</p>"
    },
    {
     "label": "🧩 Le tangram",
     "html": "<p>Le <b>tangram</b> est un casse-tête chinois : un carré découpé en <b>7 pièces</b> (5 triangles, 1 carré, 1 parallélogramme). Avec les mêmes 7 pièces, tu peux faire un chat, un bateau, une maison… et toutes ces figures ont <b>la même aire</b> que le carré de départ : elles sont <b>équidécomposables</b>, donc de même aire.</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#ffffff\"/>\n<polygon points=\"40,20 260,20 150,130\" fill=\"#ef4444\" stroke=\"#fff\" stroke-width=\"3\"/>\n<polygon points=\"40,20 150,130 40,240\" fill=\"#3b82f6\" stroke=\"#fff\" stroke-width=\"3\"/>\n<polygon points=\"260,20 260,130 205,75\" fill=\"#facc15\" stroke=\"#fff\" stroke-width=\"3\"/>\n<polygon points=\"205,75 260,130 205,185 150,130\" fill=\"#22c55e\" stroke=\"#fff\" stroke-width=\"3\"/>\n<polygon points=\"150,130 205,185 95,185\" fill=\"#a855f7\" stroke=\"#fff\" stroke-width=\"3\"/>\n<polygon points=\"260,130 260,240 150,240\" fill=\"#f97316\" stroke=\"#fff\" stroke-width=\"3\"/>\n<polygon points=\"40,240 95,185 205,185 150,240\" fill=\"#14b8a6\" stroke=\"#fff\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"70\" font-size=\"18\" fill=\"#1f2937\" font-weight=\"bold\">7 pièces, 1 carré</text>\n<text x=\"300\" y=\"110\" font-size=\"16\" fill=\"#334155\">2 grands triangles = 1/2</text>\n<text x=\"300\" y=\"138\" font-size=\"16\" fill=\"#334155\">1 triangle moyen = 1/8</text>\n<text x=\"300\" y=\"166\" font-size=\"16\" fill=\"#334155\">2 petits triangles = 1/8</text>\n<text x=\"300\" y=\"194\" font-size=\"16\" fill=\"#334155\">1 petit carré = 1/8</text>\n<text x=\"300\" y=\"222\" font-size=\"16\" fill=\"#334155\">1 parallélogramme = 1/8</text>\n<text x=\"300\" y=\"256\" font-size=\"16\" fill=\"#be185d\" font-weight=\"bold\">Total = 1 carré entier</text>\n</svg>"
    },
    {
     "label": "🧊 Petits cubes en 3D",
     "html": "<p>L'aire du rectangle est le nombre de petits carrés en rangées et colonnes : ici tu en vois <b>4 × 6 = 24</b> (pense à la face supérieure des cubes). Change les curseurs : base et hauteur se multiplient toujours. Et si tu mets une autre couche de cubes au-dessus ? Tu passes de l'<b>aire</b> au <b>volume</b> !</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 4,
      "b": 6
     }
    },
    {
     "label": "🔺 Le prisme hexagonal",
     "html": "<p>Fais tourner le prisme : sa base est un <b>hexagone régulier</b>. Si tu le regardes d'en haut, tu vois que l'hexagone se divise en <b>6 triangles équilatéraux</b> égaux, avec le sommet au centre. La hauteur de chacun est l'<b>apothème</b> : voilà pourquoi A = périmètre × apothème : 2 (6 triangles × côté × apothème : 2).</p>",
     "scene": "solid",
     "options": {
      "shape": "prism",
      "n": 6,
      "r": 1,
      "h": 0.6,
      "color": "#f59e0b",
      "labels": true
     }
    },
    {
     "label": "🃏 Formules par cœur",
     "html": "<p>Associe chaque figure à sa formule.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "Rectangle",
        "b × h"
       ],
       [
        "Carré",
        "l²"
       ],
       [
        "Triangle",
        "b × h : 2"
       ],
       [
        "Losange",
        "D × d : 2"
       ],
       [
        "Trapèze",
        "(B + b) × h : 2"
       ],
       [
        "Polygone régulier",
        "2p × a : 2"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des aires",
   "nodes": [
    {
     "id": "area",
     "label": "Aire",
     "x": 50,
     "y": 6,
     "color": "#0f172a",
     "html": "Mesure de la surface en unités carrées.",
     "why": "Mesurer une aire signifie compter combien d'unités carrées elle contient. Le système métrique décimal, avec le m², naît en France en <b>1795</b> ; en Italie, il est obligatoire depuis 1861."
    },
    {
     "id": "equi",
     "label": "Équivalence des aires",
     "x": 50,
     "y": 24,
     "color": "#7c3aed",
     "html": "Figures différentes de même aire.",
     "why": "Elle repose sur une idée qu'Euclide place parmi les « notions communes » : <i>les choses qui se superposent sont égales</i> et <i>le tout est plus grand que la partie</i>. Si on déplace les morceaux sans en perdre, l'aire reste la même."
    },
    {
     "id": "rett",
     "label": "Rectangle",
     "x": 18,
     "y": 42,
     "color": "#2563eb",
     "html": "A = b × h.",
     "why": "C'est la figure « de base » parce qu'elle se remplit exactement avec des rangées de petits carrés : b carrés par h rangées. Toutes les autres formules se déduisent en transformant les figures en rectangles."
    },
    {
     "id": "parall",
     "label": "Parallélogramme",
     "x": 42,
     "y": 50,
     "color": "#0891b2",
     "html": "A = b × h.",
     "why": "En coupant un triangle d'un côté et en le déplaçant de l'autre, il devient un rectangle de même base et de même hauteur (Euclide, Éléments I, 35 : les parallélogrammes de même base et entre les mêmes parallèles sont équivalents)."
    },
    {
     "id": "tri",
     "label": "Triangle",
     "x": 66,
     "y": 46,
     "color": "#16a34a",
     "html": "A = b × h : 2.",
     "why": "Deux triangles égaux forment un parallélogramme (Euclide I, 41). C'est pour cela qu'apparaît le « : 2 ». Tout polygone peut se diviser en triangles : c'est pourquoi le triangle est la « brique » de la géométrie."
    },
    {
     "id": "rombo",
     "label": "Losange",
     "x": 84,
     "y": 66,
     "color": "#db2777",
     "html": "A = D × d : 2.",
     "why": "Les diagonales sont perpendiculaires et divisent le losange en 4 triangles rectangles égaux ; le rectangle construit sur les diagonales en contient 8."
    },
    {
     "id": "trap",
     "label": "Trapèze",
     "x": 60,
     "y": 76,
     "color": "#ca8a04",
     "html": "A = (B + b) × h : 2.",
     "why": "Deux trapèzes égaux, l'un retourné, forment un parallélogramme de base B + b. Cette formule était déjà connue des <b>Égyptiens</b> et des <b>Babyloniens</b> pour mesurer les champs."
    },
    {
     "id": "reg",
     "label": "Polygones réguliers",
     "x": 30,
     "y": 76,
     "color": "#ea580c",
     "html": "A = 2p × a : 2; a = l × f.",
     "why": "Ils se divisent en n triangles égaux de hauteur l'apothème. Le nombre fixe f dépend seulement de la forme (des angles), pas de la taille : c'est une conséquence de la <b>similitude</b>."
    },
    {
     "id": "inv",
     "label": "Formules inverses",
     "x": 18,
     "y": 94,
     "color": "#64748b",
     "html": "Retrouver un côté ou une hauteur à partir de l'aire.",
     "why": "On les obtient en « défaisant » les opérations dans l'ordre inverse : si A = b × h : 2, alors 2A = b × h et h = 2A : b. C'est le même raisonnement que celui des équations, que tu étudieras plus tard."
    }
   ],
   "edges": [
    [
     "area",
     "equi",
     "se compare avec"
    ],
    [
     "equi",
     "rett",
     "se ramène à"
    ],
    [
     "rett",
     "parall",
     "découpe et déplace"
    ],
    [
     "parall",
     "tri",
     "moitié"
    ],
    [
     "tri",
     "rombo",
     "4 triangles"
    ],
    [
     "parall",
     "trap",
     "moitié de 2 trapèzes"
    ],
    [
     "tri",
     "reg",
     "n triangles"
    ],
    [
     "rett",
     "inv",
     "s'utilisent à l'envers"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : losange, trapèze, polygones",
   "questions": [
    {
     "type": "num",
     "q": "Un losange a des diagonales de 16 cm et 10 cm. Aire ?",
     "answer": 80,
     "unit": "cm²",
     "explain": "16 × 10 : 2 = 80 cm²."
    },
    {
     "type": "num",
     "q": "Un trapèze a des bases de 9 cm et 5 cm et une hauteur de 4 cm. Aire ?",
     "answer": 28,
     "unit": "cm²",
     "explain": "(9 + 5) × 4 : 2 = 28 cm²."
    },
    {
     "type": "num",
     "q": "Un hexagone régulier a un périmètre de 60 cm et un apothème de 8,66 cm. Aire ?",
     "answer": 259.8,
     "tol": 0.1,
     "unit": "cm²",
     "explain": "60 × 8,66 : 2 = 259,8 cm²."
    }
   ]
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<table>\n<tr><th>Figure</th><th>Aire</th><th>Formules inverses</th></tr>\n<tr><td>Rectangle / parallélogramme</td><td>b × h</td><td>b = A : h ; h = A : b</td></tr>\n<tr><td>Carré</td><td>c² (ou d² : 2)</td><td>c = √A</td></tr>\n<tr><td>Triangle</td><td>b × h : 2</td><td>b = 2A : h ; h = 2A : b</td></tr>\n<tr><td>Losange</td><td>D × d : 2</td><td>D = 2A : d ; d = 2A : D</td></tr>\n<tr><td>Trapèze</td><td>(B + b) × h : 2</td><td>h = 2A : (B + b) ; B + b = 2A : h</td></tr>\n<tr><td>Polygone régulier</td><td>2p × a : 2</td><td>a = 2A : 2p ; 2p = 2A : a</td></tr>\n</table>"
  }
 ],
 "glossary": [
  {
   "t": "Surface",
   "d": "La partie du plan enfermée par une figure."
  },
  {
   "t": "Aire",
   "d": "La mesure d'une surface."
  },
  {
   "t": "Équivalentes",
   "d": "Figures qui ont la même aire."
  },
  {
   "t": "Équidécomposables",
   "d": "Figures formées des mêmes morceaux disposés différemment."
  },
  {
   "t": "Hauteur",
   "d": "Segment perpendiculaire à la base mené depuis le sommet opposé (ou depuis le côté opposé)."
  },
  {
   "t": "Apothème",
   "d": "Distance du centre d'un polygone régulier à l'un de ses côtés ; rayon du cercle inscrit."
  },
  {
   "t": "Nombre fixe",
   "d": "Rapport constant entre l'apothème et le côté d'un polygone régulier."
  },
  {
   "t": "Formule inverse",
   "d": "Formule qui retrouve un élément (base, hauteur…) en connaissant l'aire."
  },
  {
   "t": "Hectare",
   "d": "Unité de surface agraire égale à 10 000 m²."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Un carré a un côté de 9 cm. Aire ?",
    "answer": 81,
    "unit": "cm²",
    "explain": "9² = 81 cm²."
   },
   {
    "type": "num",
    "q": "Un carré a une aire de 144 m². Combien mesure le côté ?",
    "answer": 12,
    "unit": "m",
    "explain": "√144 = 12 m."
   },
   {
    "type": "num",
    "q": "Un parallélogramme a une aire de 96 cm² et une hauteur de 8 cm. Combien mesure la base ?",
    "answer": 12,
    "unit": "cm",
    "explain": "b = 96 : 8 = 12 cm."
   },
   {
    "type": "num",
    "q": "Un triangle rectangle a des côtés de l'angle droit de 6 cm et 8 cm. Aire ?",
    "answer": 24,
    "unit": "cm²",
    "explain": "6 × 8 : 2 = 24 cm²."
   },
   {
    "type": "num",
    "q": "Un losange a une aire de 60 cm² et une diagonale de 12 cm. Combien mesure l'autre diagonale ?",
    "answer": 10,
    "unit": "cm",
    "explain": "d = 2 × 60 : 12 = 10 cm."
   },
   {
    "type": "num",
    "q": "Un trapèze a une aire de 50 cm² et une hauteur de 5 cm. Combien vaut la somme des bases ?",
    "answer": 20,
    "unit": "cm",
    "explain": "B + b = 2 × 50 : 5 = 20 cm."
   },
   {
    "type": "mc",
    "q": "Combien de fois un m² est-il plus grand qu'un dm² ?",
    "options": [
     "10",
     "100",
     "1000"
    ],
    "answer": 1,
    "explain": "Les unités de surface vont de 100 en 100."
   },
   {
    "type": "tf",
    "q": "Deux figures équidécomposables ont toujours la même aire.",
    "answer": true,
    "explain": "Elles sont faites des mêmes morceaux : l'aire est la même."
   },
   {
    "type": "tf",
    "q": "En doublant le côté d'un carré, l'aire double.",
    "answer": false,
    "explain": "L'aire devient 4 fois plus grande : (2c)² = 4c²."
   },
   {
    "type": "mc",
    "q": "Un hectare équivaut à…",
    "options": [
     "100 m²",
     "1000 m²",
     "10 000 m²"
    ],
    "answer": 2,
    "explain": "1 ha = 1 hm² = 10 000 m²."
   },
   {
    "type": "num",
    "q": "Un carré a un côté de 10 cm. Calcule l'apothème avec le nombre fixe 0,5.",
    "answer": 5,
    "unit": "cm",
    "explain": "a = 10 × 0,5 = 5 cm (moitié du côté)."
   },
   {
    "type": "order",
    "q": "Classe les figures de l'aire la plus petite à la plus grande : toutes ont une base de 6 et une hauteur de 4 (pour le trapèze, la petite base est 2).",
    "items": [
     "Triangle",
     "Trapèze",
     "Rectangle"
    ],
    "explain": "6×4:2 = 12; (6+2)×4:2 = 16; 6×4 = 24."
   }
  ],
  "gen": [
   [
    "areaRect",
    2
   ],
   [
    "areaTri",
    2
   ]
  ]
 }
});
