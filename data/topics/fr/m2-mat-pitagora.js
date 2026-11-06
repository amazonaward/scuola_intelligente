TOPIC('fr', {
 "id": "m2-mat-pitagora",
 "title": "Le théorème de Pythagore",
 "intro": "Le théorème de Pythagore est l'une des découvertes les plus célèbres des mathématiques : il relie les trois côtés de tout <b>triangle rectangle</b> et nous permet de calculer des distances que nous ne pouvons pas mesurer directement.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "1. Le triangle rectangle",
   "html": "<p>Un <b>triangle rectangle</b> a un angle droit (90°). Ses côtés ont des noms spéciaux :</p><ul><li>les deux côtés qui forment l'angle droit s'appellent les <b>côtés de l'angle droit</b> (on les note <i>a</i> et <i>b</i>) ;</li><li>le côté opposé à l'angle droit est l'<b>hypoténuse</b> (<i>c</i>) : c'est toujours le côté le plus long.</li></ul><p>Pythagore était un mathématicien et philosophe grec qui vécut au VIe siècle av. J.-C. à Crotone, en Calabre (sud de l'Italie).</p>"
  },
  {
   "type": "svg",
   "title": "Côtés de l'angle droit et hypoténuse",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><polygon points=\"150,250 450,250 150,50\" fill=\"#dbeafe\" stroke=\"#1e3a8a\" stroke-width=\"4\"/><rect x=\"150\" y=\"225\" width=\"25\" height=\"25\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><text x=\"300\" y=\"280\" font-size=\"20\" fill=\"#b91c1c\" text-anchor=\"middle\" font-family=\"sans-serif\">côté b</text><text x=\"95\" y=\"155\" font-size=\"20\" fill=\"#b91c1c\" text-anchor=\"middle\" font-family=\"sans-serif\">côté a</text><text x=\"330\" y=\"135\" font-size=\"20\" fill=\"#15803d\" font-family=\"sans-serif\">hypoténuse c</text><text x=\"190\" y=\"240\" font-size=\"16\" fill=\"#1e3a8a\" font-family=\"sans-serif\">90°</text></svg>",
   "caption": "Les côtés a et b forment l'angle droit ; l'hypoténuse est en face de lui."
  },
  {
   "type": "remember",
   "title": "L'énoncé",
   "html": "<p>Dans tout triangle rectangle, <b>le carré construit sur l'hypoténuse a la même aire que la somme des carrés construits sur les deux autres côtés</b>.</p><p style=\"font-size:1.3em;text-align:center\"><b>c² = a² + b²</b></p><p>Formules inverses : <b>c = √(a² + b²)</b> &nbsp; <b>a = √(c² − b²)</b> &nbsp; <b>b = √(c² − a²)</b></p>"
  },
  {
   "type": "svg",
   "title": "La démonstration avec les carrés (3, 4, 5)",
   "svg": "<svg viewBox=\"0 0 600 370\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"370\" fill=\"#ffffff\"/><g stroke=\"#334155\" stroke-width=\"2\"><rect x=\"150\" y=\"230\" width=\"120\" height=\"120\" fill=\"#fde68a\"/><rect x=\"60\" y=\"140\" width=\"90\" height=\"90\" fill=\"#bfdbfe\"/><polygon points=\"150,140 270,230 360,110 240,20\" fill=\"#bbf7d0\"/><polygon points=\"150,230 270,230 150,140\" fill=\"#e2e8f0\" stroke-width=\"3\"/></g><text x=\"210\" y=\"297\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">b² = 16</text><text x=\"105\" y=\"192\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">a² = 9</text><text x=\"255\" y=\"130\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">c² = 25</text><text x=\"400\" y=\"220\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e3a8a\">a = 3, b = 4, c = 5</text><text x=\"400\" y=\"255\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#15803d\">9 + 16 = 25 ✔</text><text x=\"400\" y=\"290\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#475569\">aire jaune + aire bleue</text><text x=\"400\" y=\"312\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#475569\">= aire verte</text></svg>",
   "caption": "En construisant un carré sur chaque côté, l'aire du carré vert (sur l'hypoténuse) est égale à la somme des deux autres."
  },
  {
   "type": "widget",
   "title": "À toi : déplace les côtés",
   "widget": "pythagoras",
   "options": {
    "a": 3,
    "b": 4
   },
   "caption": "Change la longueur des côtés de l'angle droit et observe comment les carrés changent : la somme des petites aires est toujours égale à la grande aire."
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre : 6 démonstrations du monde entier",
   "intro": "Le théorème de Pythagore a plus de 350 démonstrations différentes ! Si l'une ne te convainc pas, essaie une autre : chacun trouve celle qui lui « parle ».",
   "tabs": [
    {
     "label": "🇨🇳 Chine : le Gougu",
     "html": "<p>Dans le <b>Zhou Bi Suan Jing</b>, un ancien texte chinois d'astronomie et de mathématiques (son contenu remonte à environ 2000 ans), le théorème s'appelle <b>Gougu</b> (gou = petit côté, gu = grand côté). La figure classique est un carré de côté a + b avec à l'intérieur quatre triangles identiques : l'espace central est le carré de l'hypoténuse.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"600\" height=\"300\" fill=\"#fffbeb\"/><g transform=\"translate(40,20)\"><rect x=\"0\" y=\"0\" width=\"260\" height=\"260\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/><polygon points=\"0,0 100,0 0,160\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,0 260,0 260,100\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"260,100 260,260 160,260\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"160,260 0,260 0,160\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,0 260,100 160,260 0,160\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"3\"/><text x=\"130\" y=\"138\" font-size=\"28\" text-anchor=\"middle\" fill=\"#7f1d1d\" font-weight=\"bold\">c²</text><text x=\"50\" y=\"-4\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1e3a8a\">a</text><text x=\"180\" y=\"-4\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1e3a8a\">b</text></g><text x=\"330\" y=\"70\" font-size=\"18\" fill=\"#1f2937\">Grand carré : côté a + b</text><text x=\"330\" y=\"105\" font-size=\"18\" fill=\"#1f2937\">Aire = (a + b)²</text><text x=\"330\" y=\"140\" font-size=\"18\" fill=\"#1f2937\">= 4 triangles + carré c²</text><text x=\"330\" y=\"175\" font-size=\"18\" fill=\"#1f2937\">= 4 · (a·b : 2) + c²</text><text x=\"330\" y=\"220\" font-size=\"18\" fill=\"#b91c1c\" font-weight=\"bold\">a² + 2ab + b² = 2ab + c²</text><text x=\"330\" y=\"255\" font-size=\"20\" fill=\"#b91c1c\" font-weight=\"bold\">a² + b² = c²</text></svg>"
    },
    {
     "label": "🏛️ Euclide",
     "html": "<p>Dans les <b>Éléments</b> (vers 300 av. J.-C.), proposition I.47, Euclide trace depuis le sommet de l'angle droit une droite perpendiculaire à l'hypoténuse. Elle divise le grand carré en deux rectangles et, grâce à des triangles égaux, il démontre que chaque rectangle a <b>la même aire</b> que le carré construit sur l'un des côtés de l'angle droit. C'est la « figure du moulin à vent ».</p>",
     "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#f5f3ff\"/><g transform=\"translate(150,30)\"><polygon points=\"0,90 120,90 0,0\" fill=\"#fde68a\" stroke=\"#1f2937\" stroke-width=\"2\"/><polygon points=\"0,0 -90,0 -90,90 0,90\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\" opacity=\".8\"/><polygon points=\"0,0 120,90 210,-30 90,-120\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"2\" opacity=\".8\"/><polygon points=\"0,90 120,90 120,210 0,210\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"2\" opacity=\".8\"/><line x1=\"0\" y1=\"90\" x2=\"133\" y2=\"-88\" stroke=\"#7c3aed\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><text x=\"-45\" y=\"50\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">a²</text><text x=\"60\" y=\"160\" font-size=\"20\" text-anchor=\"middle\" fill=\"#166534\" font-weight=\"bold\">b²</text><text x=\"105\" y=\"-15\" font-size=\"20\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">c²</text></g><text x=\"360\" y=\"200\" font-size=\"16\" fill=\"#1f2937\">La ligne violette, partant du sommet</text><text x=\"360\" y=\"222\" font-size=\"16\" fill=\"#1f2937\">de l'angle droit, divise c²</text><text x=\"360\" y=\"244\" font-size=\"16\" fill=\"#1f2937\">en deux rectangles : l'un vaut a²,</text><text x=\"360\" y=\"266\" font-size=\"16\" fill=\"#1f2937\">l'autre vaut b² (Éléments, I.47)</text></svg>"
    },
    {
     "label": "🇺🇸 Le président Garfield",
     "html": "<p>En 1876, le député (et futur président des États-Unis) <b>James Garfield</b> trouva une démonstration avec un <b>trapèze</b> formé de deux triangles rectangles identiques et d'un triangle isocèle. En calculant l'aire du trapèze de deux façons différentes, on obtient le théorème.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#ecfeff\"/><g transform=\"translate(40,30)\"><polygon points=\"0,240 0,80 100,240\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,240 260,240 260,140\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><polygon points=\"0,80 100,240 260,140\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"2\"/><line x1=\"0\" y1=\"80\" x2=\"260\" y2=\"140\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"-12\" y=\"165\" font-size=\"16\" fill=\"#1e3a8a\">a</text><text x=\"45\" y=\"262\" font-size=\"16\" fill=\"#1e3a8a\">b</text><text x=\"175\" y=\"262\" font-size=\"16\" fill=\"#92400e\">a</text><text x=\"268\" y=\"195\" font-size=\"16\" fill=\"#92400e\">b</text><text x=\"120\" y=\"160\" font-size=\"20\" fill=\"#7f1d1d\" font-weight=\"bold\">c²/2</text></g><text x=\"340\" y=\"80\" font-size=\"17\" fill=\"#1f2937\">Trapèze de bases a et b, hauteur a + b</text><text x=\"340\" y=\"115\" font-size=\"17\" fill=\"#1f2937\">Aire = (a + b)(a + b) : 2</text><text x=\"340\" y=\"150\" font-size=\"17\" fill=\"#1f2937\">= ab/2 + ab/2 + c²/2</text><text x=\"340\" y=\"195\" font-size=\"18\" fill=\"#b91c1c\" font-weight=\"bold\">→ a² + b² = c²</text><text x=\"340\" y=\"240\" font-size=\"14\" fill=\"#475569\">James Garfield, 1876 (ensuite président des États-Unis)</text></svg>"
    },
    {
     "label": "🧩 Puzzle",
     "html": "<p>Prends <b>4 triangles rectangles identiques</b> et un carré de côté a + b. Disposés d'une façon, ils laissent libres deux carrés, a² et b². Disposés d'une autre façon, ils laissent libre un seul carré incliné, c². L'espace libre est le même, donc <b>a² + b² = c²</b>. Aucun calcul, seulement les yeux !</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#f0fdf4\"/><g transform=\"translate(30,20)\"><rect width=\"240\" height=\"240\" fill=\"#fff\" stroke=\"#14532d\" stroke-width=\"3\"/><rect x=\"0\" y=\"0\" width=\"90\" height=\"90\" fill=\"#93c5fd\"/><rect x=\"90\" y=\"90\" width=\"150\" height=\"150\" fill=\"#86efac\"/><polygon points=\"90,0 240,0 240,90\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,0 90,90 240,90\" fill=\"#fcd34d\" stroke=\"#92400e\"/><polygon points=\"0,90 90,90 0,240\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,90 90,240 0,240\" fill=\"#fcd34d\" stroke=\"#92400e\"/><text x=\"45\" y=\"52\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1e3a8a\">a²</text><text x=\"165\" y=\"172\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#166534\">b²</text></g><g transform=\"translate(330,20)\"><rect width=\"240\" height=\"240\" fill=\"#fca5a5\" stroke=\"#14532d\" stroke-width=\"3\"/><polygon points=\"0,0 90,0 0,150\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,0 240,0 240,90\" fill=\"#fcd34d\" stroke=\"#92400e\"/><polygon points=\"240,90 240,240 150,240\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"150,240 0,240 0,150\" fill=\"#fcd34d\" stroke=\"#92400e\"/><text x=\"120\" y=\"128\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#7f1d1d\">c²</text></g><text x=\"300\" y=\"275\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Mêmes 4 triangles, même carré : l'espace libre est égal !</text></svg>"
    },
    {
     "label": "🪢 La corde égyptienne",
     "html": "<p>Selon une tradition, les bâtisseurs et arpenteurs de l'Égypte ancienne (les « harpédonaptes », tendeurs de cordes) utilisaient une corde avec <b>12 segments égaux</b> séparés par des nœuds. En la tendant pour former un triangle de côtés 3, 4 et 5, on obtient un <b>angle droit</b> parfait : utile pour tracer des champs et des fondations. C'est la <b>réciproque du théorème</b> en action : si 3² + 4² = 5², le triangle est rectangle. Aujourd'hui encore, les maçons utilisent l'astuce « 3-4-5 » avec le mètre.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/><polyline points=\"100,250 340,250 100,70 100,250\" fill=\"#fed7aa\" stroke=\"#9a3412\" stroke-width=\"5\"/><circle cx=\"100\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"160\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"220\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"280\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"340\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"190\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"130\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"70\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"148\" cy=\"106\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"196\" cy=\"142\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"244\" cy=\"178\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"292\" cy=\"214\" r=\"7\" fill=\"#7c2d12\"/><rect x=\"100\" y=\"230\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\"/><text x=\"220\" y=\"282\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">4 segments</text><text x=\"70\" y=\"165\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">3 segments</text><text x=\"250\" y=\"140\" font-size=\"18\" fill=\"#1f2937\">5 segments</text><text x=\"380\" y=\"110\" font-size=\"17\" fill=\"#1f2937\">Corde à 12 segments égaux</text><text x=\"380\" y=\"140\" font-size=\"17\" fill=\"#1f2937\">tendue en triangle 3-4-5 :</text><text x=\"380\" y=\"170\" font-size=\"17\" fill=\"#b91c1c\" font-weight=\"bold\">angle droit garanti !</text></svg>"
    },
    {
     "label": "🧊 Avec des cubes 3D",
     "html": "<p>Le carré 3 × 3 a <b>9</b> cubes, le 4 × 4 en a <b>16</b>. Ensemble cela fait 25 : exactement ce qu'il faut pour remplir le carré <b>5 × 5</b> construit sur l'hypoténuse. Essaie de changer les nombres avec les curseurs : avec 6 et 8, il faut 36 + 64 = 100 cubes, c'est-à-dire un carré 10 × 10.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 5,
      "b": 5
     }
    }
   ]
  },
  {
   "type": "text",
   "title": "2. Comment l'utiliser : pas à pas",
   "html": "<p><b>Trouver l'hypoténuse</b> (je connais les deux côtés de l'angle droit) :</p><ol><li>j'élève chaque côté au carré ;</li><li>j'additionne les deux carrés ;</li><li>je prends la racine carrée.</li></ol><p><b>Trouver un côté de l'angle droit</b> (je connais l'hypoténuse et l'autre côté) :</p><ol><li>j'élève au carré l'hypoténuse et le côté connu ;</li><li>je <b>soustrais</b> le carré du côté de celui de l'hypoténuse ;</li><li>je prends la racine carrée.</li></ol><p>Attention : pour un côté de l'angle droit on <b>soustrait</b>, pour l'hypoténuse on <b>additionne</b> !</p>"
  },
  {
   "type": "example",
   "title": "Exemple : l'échelle appuyée contre le mur",
   "html": "<p>Une échelle longue de <b>5 m</b> est appuyée contre un mur ; le pied de l'échelle est à <b>3 m</b> du mur. À quelle hauteur arrive-t-elle ?</p><p>L'échelle est l'hypoténuse, la distance au mur un côté de l'angle droit : <br>h = √(5² − 3²) = √(25 − 9) = √16 = <b>4 m</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple : la diagonale de l'écran",
   "html": "<p>Les pouces d'une télévision indiquent la <b>diagonale</b>. Un écran large de 88,6 cm et haut de 49,8 cm a pour diagonale :</p><p>d = √(88,6² + 49,8²) = √(7849,96 + 2480,04) = √10330 ≈ <b>101,6 cm</b>, soit environ 40 pouces (1 pouce = 2,54 cm).</p><p>De la même façon on calcule la diagonale d'un rectangle ou d'un carré : dans un carré de côté <i>l</i>, d = l·√2 ≈ l × 1,414.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz 1",
   "questions": [
    {
     "type": "mc",
     "q": "Quel est le côté le plus long d'un triangle rectangle ?",
     "options": [
      "Le plus grand côté de l'angle droit",
      "L'hypoténuse",
      "Cela dépend du triangle"
     ],
     "answer": 1,
     "explain": "L'hypoténuse est en face de l'angle droit, le plus grand angle du triangle, donc c'est toujours le côté le plus long."
    },
    {
     "type": "num",
     "q": "Côtés de l'angle droit 6 cm et 8 cm. Combien mesure l'hypoténuse ?",
     "answer": 10,
     "tol": 0,
     "unit": "cm",
     "explain": "√(36 + 64) = √100 = 10 cm."
    },
    {
     "type": "tf",
     "q": "Le théorème de Pythagore est vrai pour tous les triangles.",
     "answer": false,
     "explain": "Il n'est vrai que pour les triangles rectangles."
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Les triplets pythagoriciens",
   "html": "<p>Un <b>triplet pythagoricien</b> est un groupe de trois nombres entiers qui vérifient a² + b² = c². Les plus utilisés :</p><table><tr><th>a</th><th>b</th><th>c</th></tr><tr><td>3</td><td>4</td><td>5</td></tr><tr><td>5</td><td>12</td><td>13</td></tr><tr><td>8</td><td>15</td><td>17</td></tr><tr><td>7</td><td>24</td><td>25</td></tr><tr><td>20</td><td>21</td><td>29</td></tr></table><p>En multipliant un triplet par un même nombre, on obtient un autre triplet : 3-4-5 × 2 = <b>6-8-10</b>, × 3 = <b>9-12-15</b>.</p><p>Le théorème marche aussi dans l'autre sens : si a² + b² = c², le triangle est <b>rectangle</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "La corde à 12 nœuds",
   "html": "<p>Les anciens Égyptiens, pour tracer des angles droits dans les champs après les crues du Nil, utilisaient une corde avec <b>12 nœuds</b> régulièrement espacés : en la tendant pour former un triangle de côtés 3, 4 et 5, ils obtenaient un angle droit parfait. Les maçons utilisent encore aujourd'hui cette astuce (3-4-5 mètres) pour vérifier que les murs sont d'équerre.</p>"
  },
  {
   "type": "curiosity",
   "title": "Plus de 370 démonstrations",
   "html": "<p>Le théorème est connu depuis au moins 3800 ans : la tablette babylonienne <b>Plimpton 322</b> contient des triplets pythagoriciens. En 1940, le mathématicien Elisha Loomis rassembla <b>367 démonstrations</b> différentes ; l'une a même été trouvée par un président des États-Unis, James Garfield, en 1876.</p>"
  },
  {
   "type": "text",
   "title": "4. Applications en géométrie",
   "html": "<ul><li><b>Diagonale du rectangle</b> : d = √(b² + h²).</li><li><b>Hauteur du triangle équilatéral</b> de côté l : h = √(l² − (l/2)²) ≈ l × 0,866.</li><li><b>Côté oblique du trapèze rectangle</b> : on utilise le triangle formé par la hauteur et la différence des bases.</li><li><b>Distance entre deux points</b> dans un repère : d = √((x₂−x₁)² + (y₂−y₁)²).</li><li><b>Diagonale du cube</b> d'arête s : D = s·√3.</li></ul>"
  },
  {
   "type": "conceptMap",
   "title": "Carte mentale : d'où vient le théorème ?",
   "nodes": [
    {
     "id": "def",
     "label": "Définitions : point, droite, plan",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "<p>Les objets de base de la géométrie.</p>",
     "why": "<p>Euclide commence les Éléments par 23 définitions (« le point est ce qui n'a pas de parties »). On ne peut pas les démontrer : c'est le vocabulaire commun d'où l'on part.</p>"
    },
    {
     "id": "post",
     "label": "Les 4 premiers postulats d'Euclide",
     "x": 22,
     "y": 24,
     "color": "#a855f7",
     "html": "<p>Par deux points passe une droite ; un segment peut être prolongé ; on peut tracer un cercle ; tous les angles droits sont égaux.</p>",
     "why": "<p>Un <b>postulat</b> (ou axiome) est une règle qu'on accepte sans démonstration parce qu'elle semble évidente. Tout théorème doit reposer sur quelque chose : si on voulait tout démontrer à l'infini, on ne commencerait jamais. Euclide choisit très peu de règles et en tira des centaines de théorèmes.</p>"
    },
    {
     "id": "quinto",
     "label": "5e postulat : les parallèles",
     "x": 78,
     "y": 24,
     "color": "#7c3aed",
     "html": "<p>Par un point extérieur à une droite passe <b>une seule</b> parallèle (dans la forme de Playfair).</p>",
     "why": "<p>Pendant plus de 2000 ans, les mathématiciens essayèrent de le démontrer à partir des quatre autres, sans y arriver. Au XIXe siècle, Lobatchevski, Bolyai et Gauss comprirent pourquoi : on peut le <b>remplacer</b> par un autre postulat et obtenir des géométries tout aussi cohérentes !</p>"
    },
    {
     "id": "angoli",
     "label": "Somme des angles = 180°",
     "x": 78,
     "y": 46,
     "color": "#2563eb",
     "html": "<p>Dans tout triangle, la somme des angles intérieurs vaut 180°.</p>",
     "why": "<p>On le démontre en traçant la parallèle à un côté : il faut les angles alternes-internes, qui dépendent justement du 5e postulat.</p>"
    },
    {
     "id": "aree",
     "label": "Aires et figures équivalentes",
     "x": 22,
     "y": 46,
     "color": "#0d9488",
     "html": "<p>Des figures découpées en mêmes morceaux ont la même aire ; le rectangle a pour aire b × h.</p>",
     "why": "<p>Euclide compare les aires en déplaçant et en recomposant des figures égales (cas d'égalité des triangles). Les rectangles et les carrés « fonctionnent » bien seulement dans la géométrie avec le 5e postulat.</p>"
    },
    {
     "id": "pit",
     "label": "Théorème de Pythagore",
     "x": 50,
     "y": 66,
     "color": "#dc2626",
     "html": "<p>c² = a² + b² dans les triangles rectangles.</p>",
     "why": "<p>On le démontre en combinant des aires équivalentes (Euclide, I.47) ou avec des triangles semblables. Il est attribué à Pythagore (VIe s. av. J.-C.), mais les Babyloniens connaissaient déjà des triplets comme 3-4-5 : la tablette <b>Plimpton 322</b> (vers 1800 av. J.-C.) en énumère beaucoup. Le mérite grec est la <b>démonstration</b> générale, pas seulement l'exemple.</p>"
    },
    {
     "id": "inverso",
     "label": "Réciproque du théorème",
     "x": 18,
     "y": 86,
     "color": "#ea580c",
     "html": "<p>Si a² + b² = c², le triangle est rectangle.</p>",
     "why": "<p>C'est la proposition I.48 d'Euclide. Elle sert à construire des angles droits (la corde 3-4-5) et à vérifier si un triangle est rectangle.</p>"
    },
    {
     "id": "distanza",
     "label": "Distance dans un repère",
     "x": 50,
     "y": 92,
     "color": "#16a34a",
     "html": "<p>d = √((x₂ − x₁)² + (y₂ − y₁)²)</p>",
     "why": "<p>Le déplacement horizontal et le déplacement vertical sont les côtés de l'angle droit d'un triangle rectangle : la distance est l'hypoténuse. C'est ainsi que fonctionnent aussi le GPS, les jeux vidéo et les cartes numériques.</p>"
    },
    {
     "id": "noneuclide",
     "label": "Géométries non euclidiennes",
     "x": 84,
     "y": 82,
     "color": "#be185d",
     "html": "<p>Sur une sphère, le théorème de Pythagore <b>n'est pas vrai</b>.</p>",
     "why": "<p>Sur la surface de la Terre, un triangle avec un sommet au pôle Nord et deux sur l'équateur peut avoir <b>trois angles droits</b> (somme 270°). En changeant le 5e postulat, on change aussi Pythagore et la somme des angles. Einstein utilisa justement une géométrie non euclidienne pour décrire l'espace-temps courbe dans la relativité générale (1915).</p>"
    }
   ],
   "edges": [
    [
     "def",
     "post",
     "base de"
    ],
    [
     "def",
     "quinto",
     "base de"
    ],
    [
     "post",
     "aree",
     "permettent"
    ],
    [
     "quinto",
     "angoli",
     "démontre"
    ],
    [
     "aree",
     "pit",
     "démontrent"
    ],
    [
     "angoli",
     "pit",
     "servent à"
    ],
    [
     "pit",
     "inverso",
     "s'inverse"
    ],
    [
     "pit",
     "distanza",
     "s'applique"
    ],
    [
     "quinto",
     "noneuclide",
     "si tu le changes…"
    ],
    [
     "noneuclide",
     "pit",
     "n'est plus vrai"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz 2",
   "questions": [
    {
     "type": "num",
     "q": "Hypoténuse 13 cm, un côté 5 cm. Combien mesure l'autre côté ?",
     "answer": 12,
     "tol": 0,
     "unit": "cm",
     "explain": "√(169 − 25) = √144 = 12 cm."
    },
    {
     "type": "mc",
     "q": "Lequel de ces groupes est un triplet pythagoricien ?",
     "options": [
      "4, 5, 6",
      "6, 8, 10",
      "2, 3, 4"
     ],
     "answer": 1,
     "explain": "36 + 64 = 100 = 10². C'est le double du triplet 3-4-5."
    },
    {
     "type": "num",
     "q": "Rectangle de base 12 cm et de hauteur 5 cm : combien mesure la diagonale ?",
     "answer": 13,
     "tol": 0,
     "unit": "cm",
     "explain": "√(144 + 25) = √169 = 13 cm."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Triangle rectangle",
   "d": "Triangle avec un angle de 90°."
  },
  {
   "t": "Côtés de l'angle droit",
   "d": "Les deux côtés qui forment l'angle droit."
  },
  {
   "t": "Hypoténuse",
   "d": "Le côté opposé à l'angle droit ; c'est le plus long."
  },
  {
   "t": "Triplet pythagoricien",
   "d": "Trois nombres entiers a, b, c tels que a² + b² = c²."
  },
  {
   "t": "Racine carrée",
   "d": "Le nombre qui, multiplié par lui-même, donne le nombre de départ : √49 = 7."
  },
  {
   "t": "Équivalent",
   "d": "Qui a la même aire (ou le même volume), même si la forme est différente."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Le théorème de Pythagore s'écrit :",
    "options": [
     "c = a + b",
     "c² = a² + b²",
     "a² = b² + c²",
     "c² = a² − b²"
    ],
    "answer": 1,
    "explain": "Le carré de l'hypoténuse (c) est égal à la somme des carrés des deux autres côtés."
   },
   {
    "type": "num",
    "q": "Côtés de l'angle droit 9 cm et 12 cm. Hypoténuse ?",
    "answer": 15,
    "tol": 0,
    "unit": "cm",
    "explain": "√(81 + 144) = √225 = 15 cm (triplet 3-4-5 × 3)."
   },
   {
    "type": "num",
    "q": "Hypoténuse 17 cm, un côté 8 cm. Autre côté ?",
    "answer": 15,
    "tol": 0,
    "unit": "cm",
    "explain": "√(289 − 64) = √225 = 15 cm."
   },
   {
    "type": "tf",
    "q": "Un triangle de côtés 5, 12, 13 est rectangle.",
    "answer": true,
    "explain": "25 + 144 = 169 = 13² : la réciproque du théorème s'applique."
   },
   {
    "type": "tf",
    "q": "Un triangle de côtés 4, 6, 7 est rectangle.",
    "answer": false,
    "explain": "16 + 36 = 52, mais 7² = 49 : ils ne sont pas égaux."
   },
   {
    "type": "num",
    "q": "Côté d'un carré 10 cm. Diagonale (arrondie au dixième) ?",
    "answer": 14.1,
    "tol": 0.05,
    "unit": "cm",
    "explain": "d = 10 × √2 ≈ 14,1 cm."
   },
   {
    "type": "mc",
    "q": "Pour trouver un côté de l'angle droit en connaissant l'hypoténuse et l'autre côté, je dois :",
    "options": [
     "additionner les carrés",
     "soustraire les carrés",
     "additionner les côtés",
     "multiplier les côtés"
    ],
    "answer": 1,
    "explain": "a = √(c² − b²) : on soustrait le carré du côté connu de celui de l'hypoténuse."
   },
   {
    "type": "num",
    "q": "Une échelle de 10 m a son pied à 6 m du mur. À quelle hauteur arrive-t-elle ?",
    "answer": 8,
    "tol": 0,
    "unit": "m",
    "explain": "√(100 − 36) = √64 = 8 m."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le côté opposé à l'angle droit ?",
    "answer": [
     "hypoténuse",
     "l'hypoténuse"
    ],
    "explain": "C'est l'hypoténuse."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre les étapes pour calculer l'hypoténuse",
    "items": [
     "J'élève au carré les côtés de l'angle droit",
     "J'additionne les carrés",
     "Je prends la racine carrée"
    ],
    "explain": "D'abord les carrés, puis la somme, enfin la racine."
   }
  ],
  "gen": [
   [
    "pythagoras",
    2
   ]
  ]
 }
});
