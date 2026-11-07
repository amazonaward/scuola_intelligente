TOPIC('fr', {
 "id": "m1-mat-potenze",
 "title": "Les puissances",
 "intro": "La <b>puissance</b> est une façon rapide d'écrire une multiplication de facteurs tous égaux : 2 × 2 × 2 × 2 × 2 = <b>2⁵</b>. Découvrons les termes, les cas particuliers, les <b>propriétés</b> qui simplifient les calculs et la <b>notation scientifique</b>, qui permet d'écrire des nombres gigantesques (comme la distance des étoiles) ou minuscules (comme la taille d'une bactérie).",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "Qu'est-ce qu'une puissance ?",
   "html": "<p>La <b>puissance</b> d'un nombre est le produit de plusieurs facteurs <b>égaux</b> à ce nombre.</p>\n<p style=\"font-size:1.3em;text-align:center\"><b>3⁴ = 3 × 3 × 3 × 3 = 81</b></p>\n<ul>\n<li>la <b>base</b> (3) est le facteur qui se répète ;</li>\n<li>l'<b>exposant</b> (4), écrit en petit en haut à droite, dit <b>combien de fois</b> la base est multipliée par elle-même ;</li>\n<li>le résultat (81) s'appelle lui aussi une <b>puissance</b>.</li>\n</ul>\n<p>On lit « trois puissance quatre ». Avec l'exposant 2, on dit aussi « au <b>carré</b> » (5² = 25), avec l'exposant 3 « au <b>cube</b> » (2³ = 8).</p>\n<p><b>Attention à l'erreur la plus courante</b> : 3⁴ n'est <b>pas</b> 3 × 4 = 12 ! C'est 3 × 3 × 3 × 3 = 81.</p>\n<p>L'opération s'appelle <b>l'élévation à une puissance</b> : c'est la cinquième opération, après les quatre que tu connais. Comme la multiplication est une addition répétée, la puissance est une <b>multiplication répétée</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Carrés et cubes : pourquoi ces noms ?",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ffffff\"/>\n<g stroke=\"#1e3a8a\" stroke-width=\"2\" fill=\"#93c5fd\">\n<rect x=\"40\" y=\"70\" width=\"45\" height=\"45\"/><rect x=\"85\" y=\"70\" width=\"45\" height=\"45\"/><rect x=\"130\" y=\"70\" width=\"45\" height=\"45\"/>\n<rect x=\"40\" y=\"115\" width=\"45\" height=\"45\"/><rect x=\"85\" y=\"115\" width=\"45\" height=\"45\"/><rect x=\"130\" y=\"115\" width=\"45\" height=\"45\"/>\n<rect x=\"40\" y=\"160\" width=\"45\" height=\"45\"/><rect x=\"85\" y=\"160\" width=\"45\" height=\"45\"/><rect x=\"130\" y=\"160\" width=\"45\" height=\"45\"/>\n</g>\n<text x=\"107\" y=\"50\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e3a8a\">3² = 9</text>\n<text x=\"107\" y=\"240\" font-size=\"16\" text-anchor=\"middle\" fill=\"#334155\">un carré de côté 3</text>\n<g stroke=\"#9a3412\" stroke-width=\"2\">\n<polygon points=\"330,120 450,120 450,240 330,240\" fill=\"#fdba74\"/>\n<polygon points=\"330,120 380,80 500,80 450,120\" fill=\"#fed7aa\"/>\n<polygon points=\"450,120 500,80 500,200 450,240\" fill=\"#fb923c\"/>\n<line x1=\"370\" y1=\"120\" x2=\"370\" y2=\"240\"/><line x1=\"410\" y1=\"120\" x2=\"410\" y2=\"240\"/>\n<line x1=\"330\" y1=\"160\" x2=\"450\" y2=\"160\"/><line x1=\"330\" y1=\"200\" x2=\"450\" y2=\"200\"/>\n<line x1=\"347\" y1=\"107\" x2=\"467\" y2=\"107\"/><line x1=\"363\" y1=\"93\" x2=\"483\" y2=\"93\"/>\n<line x1=\"370\" y1=\"120\" x2=\"420\" y2=\"80\"/><line x1=\"410\" y1=\"120\" x2=\"460\" y2=\"80\"/>\n<line x1=\"467\" y1=\"107\" x2=\"467\" y2=\"227\"/><line x1=\"483\" y1=\"93\" x2=\"483\" y2=\"213\"/>\n<line x1=\"450\" y1=\"160\" x2=\"500\" y2=\"120\"/><line x1=\"450\" y1=\"200\" x2=\"500\" y2=\"160\"/>\n</g>\n<text x=\"415\" y=\"50\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#9a3412\">3³ = 27</text>\n<text x=\"415\" y=\"275\" font-size=\"16\" text-anchor=\"middle\" fill=\"#334155\">un cube d'arête 3</text>\n</svg>",
   "caption": "Les Grecs pensaient les nombres comme des figures : 3² est le nombre de petits carrés d'un carré de côté 3, 3³ le nombre de petits cubes d'un cube d'arête 3."
  },
  {
   "type": "3d",
   "title": "Le cube d'un nombre en 3D",
   "scene": "blocks",
   "options": {
    "mode": "volume",
    "a": 3,
    "b": 3,
    "c": 3
   },
   "caption": "3 × 3 × 3 = 3³ = 27 cubes. Règle tous les côtés sur 4 : tu obtiens 4³ = 64. Essaie ensuite avec 5 : combien y en a-t-il ?"
  },
  {
   "type": "remember",
   "title": "Les cas particuliers",
   "html": "<ul>\n<li><b>Exposant 1</b> : a¹ = a (un seul facteur). 7¹ = 7</li>\n<li><b>Exposant 0</b> : a⁰ = <b>1</b> (avec a ≠ 0). 5⁰ = 1, 1000⁰ = 1 (nous verrons bientôt pourquoi !)</li>\n<li><b>Base 1</b> : 1ⁿ = 1. 1¹⁰⁰ = 1</li>\n<li><b>Base 0</b> : 0ⁿ = 0 (avec n ≠ 0). 0⁵ = 0</li>\n<li><b>0⁰</b> n'a pas de sens en arithmétique : c'est une forme <b>indéterminée</b>.</li>\n<li><b>Base 10</b> : 10ⁿ = 1 suivi de <b>n zéros</b>. 10⁶ = 1 000 000 (un million)</li>\n</ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : calculer les puissances",
   "questions": [
    {
     "type": "num",
     "q": "Combien font 2⁵ ?",
     "answer": 32,
     "tol": 0,
     "explain": "2 × 2 × 2 × 2 × 2 = 32."
    },
    {
     "type": "mc",
     "q": "Combien vaut 4³ ?",
     "options": [
      "12",
      "64",
      "43",
      "7"
     ],
     "answer": 1,
     "explain": "4 × 4 × 4 = 64. Pas 4 × 3 !"
    },
    {
     "type": "num",
     "q": "Combien fait 9⁰ ?",
     "answer": 1,
     "tol": 0,
     "explain": "Tout nombre différent de 0 élevé à la puissance 0 donne 1."
    },
    {
     "type": "tf",
     "q": "10⁴ = 10.000",
     "answer": true,
     "explain": "1 suivi de 4 zéros."
    }
   ]
  },
  {
   "type": "text",
   "title": "Les propriétés des puissances",
   "html": "<p>Les propriétés permettent de calculer avec les puissances <b>sans les développer</b>. Elles ne valent que dans les cas indiqués !</p>\n<table>\n<tr><th>Propriété</th><th>Règle</th><th>Exemple</th></tr>\n<tr><td><b>1. Produit</b> de puissances de <b>même base</b></td><td>aᵐ × aⁿ = aᵐ⁺ⁿ<br>(on additionne les exposants)</td><td>2³ × 2⁴ = 2⁷ = 128</td></tr>\n<tr><td><b>2. Quotient</b> de puissances de <b>même base</b></td><td>aᵐ : aⁿ = aᵐ⁻ⁿ<br>(on soustrait les exposants, m ≥ n)</td><td>5⁶ : 5⁴ = 5² = 25</td></tr>\n<tr><td><b>3. Puissance d'une puissance</b></td><td>(aᵐ)ⁿ = aᵐ×ⁿ<br>(on multiplie les exposants)</td><td>(3²)³ = 3⁶ = 729</td></tr>\n<tr><td><b>4. Produit</b> de puissances de <b>même exposant</b></td><td>aⁿ × bⁿ = (a × b)ⁿ</td><td>2³ × 5³ = 10³ = 1000</td></tr>\n<tr><td><b>5. Quotient</b> de puissances de <b>même exposant</b></td><td>aⁿ : bⁿ = (a : b)ⁿ</td><td>12² : 4² = 3² = 9</td></tr>\n</table>\n<p><b>Pourquoi ça marche ?</b> Il suffit d'écrire les facteurs : 2³ × 2⁴ = (2×2×2) × (2×2×2×2) = sept fois 2 = 2⁷.</p>\n<p><b>Voilà pourquoi a⁰ = 1</b> : 5³ : 5³ = 5³⁻³ = 5⁰ ; mais tout nombre divisé par lui-même fait 1. Donc 5⁰ = 1 !</p>\n<p><b>Attention</b> : il n'existe pas de règle pour la <b>somme</b> ! 2³ + 2⁴ = 8 + 16 = 24, ce qui n'est <b>pas</b> 2⁷ = 128.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : une expression avec des puissances",
   "html": "<p>Dans les expressions, les puissances ont la <b>priorité</b> sur les multiplications et les divisions. Ordre : parenthèses → <b>puissances</b> → × et : → + et −.</p>\n<p>Résous : <b>[ (2⁴ × 2³) : 2⁵ + 3² ] × 2 − 5⁰</b></p>\n<ol>\n<li>parenthèses rondes avec les propriétés : 2⁴ × 2³ = 2⁷ ; 2⁷ : 2⁵ = 2² = 4</li>\n<li>3² = 9 → [ 4 + 9 ] = 13</li>\n<li>5⁰ = 1</li>\n<li>13 × 2 − 1 = 26 − 1 = <b>25</b></li>\n</ol>\n<p>Une autre astuce : <b>25² × 4²</b> = (25 × 4)² = 100² = <b>10 000</b>. Sans les propriétés, tu aurais dû calculer 625 × 16 !</p>"
  },
  {
   "type": "widget",
   "title": "Quelle propriété ?",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "7² × 7⁵ = 7⁷",
      "produit, même base"
     ],
     [
      "9⁸ : 9³ = 9⁵",
      "quotient, même base"
     ],
     [
      "(4³)² = 4⁶",
      "puissance d'une puissance"
     ],
     [
      "2⁵ × 5⁵ = 10⁵",
      "produit, même exposant"
     ],
     [
      "15⁴ : 3⁴ = 5⁴",
      "quotient, même exposant"
     ],
     [
      "8⁰ = 1",
      "exposant zéro"
     ]
    ]
   },
   "caption": "Relie chaque égalité à la propriété qui la justifie."
  },
  {
   "type": "text",
   "title": "Les puissances de 10 et la notation scientifique",
   "html": "<p>Les <b>puissances de 10</b> sont le cœur de notre système décimal :</p>\n<p>10¹ = 10 (dizaine), 10² = 100 (centaine), 10³ = 1 000 (millier), 10⁶ = un million, 10⁹ = un milliard.</p>\n<p>Tout nombre peut s'écrire sous <b>forme développée</b> avec les puissances de 10 :<br>4 705 = 4 × 10³ + 7 × 10² + 0 × 10¹ + 5 × 10⁰.</p>\n<p>La <b>notation scientifique</b> écrit un nombre sous la forme <b>a × 10ⁿ</b>, où <b>a</b> est un nombre compris entre 1 (inclus) et 10 (exclu). Les scientifiques l'utilisent pour des nombres très grands :</p>\n<ul>\n<li>distance Terre–Soleil ≈ 150 000 000 km = <b>1,5 × 10⁸ km</b></li>\n<li>vitesse de la lumière ≈ 300 000 km/s = <b>3 × 10⁵ km/s</b></li>\n<li>habitants de la Terre ≈ 8 000 000 000 = <b>8 × 10⁹</b></li>\n</ul>\n<p><b>Comment faire</b> : déplace la virgule jusqu'à ce qu'il ne reste qu'un seul chiffre différent de 0 devant ; l'exposant est le nombre de places dont tu l'as déplacée. 47 000 → 4,7 (la virgule se déplace de 4 places) → <b>4,7 × 10⁴</b>.</p>\n<p>L'<b>ordre de grandeur</b> est la puissance de 10 la plus proche du nombre : il sert à faire des estimations rapides. Par exemple, 8 × 10⁹ a pour ordre de grandeur 10¹⁰ (parce que 8 est plus proche de 10 que de 1).</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : le danger du bouche-à-oreille",
   "html": "<p>Un faux message est transféré : le premier jour, <b>1</b> personne le reçoit et l'envoie à <b>3</b> amis. Le lendemain, chacun des 3 l'envoie à 3 autres, et ainsi de suite.</p>\n<table>\n<tr><th>Jour</th><th>Nouvelles personnes</th><th>Puissance</th></tr>\n<tr><td>1</td><td>3</td><td>3¹</td></tr>\n<tr><td>2</td><td>9</td><td>3²</td></tr>\n<tr><td>3</td><td>27</td><td>3³</td></tr>\n<tr><td>5</td><td>243</td><td>3⁵</td></tr>\n<tr><td>10</td><td>59 049</td><td>3¹⁰</td></tr>\n<tr><td>20</td><td>3 486 784 401</td><td>3²⁰ ≈ 3,5 × 10⁹</td></tr>\n</table>\n<p>En 20 jours (en théorie), presque la moitié de l'humanité ! Cette croissance s'appelle <b>exponentielle</b> : c'est pour cela que les fausses informations se répandent si vite. Avant de transférer, vérifie !</p>"
  },
  {
   "type": "curiosity",
   "title": "La légende de l'échiquier",
   "html": "<p>Une légende indienne raconte que l'inventeur des échecs demanda au roi pour récompense : <b>1 grain de riz</b> sur la première case, <b>2</b> sur la deuxième, <b>4</b> sur la troisième, et ainsi de suite en doublant jusqu'à la 64e case. Le roi rit de cette demande si modeste…</p>\n<p>Mais sur la dernière case il y aurait eu <b>2⁶³</b> grains, et en tout <b>2⁶⁴ − 1 = 18 446 744 073 709 551 615</b> grains : environ 18 milliards de milliards, soit environ <b>600 fois</b> la production mondiale de riz d'une année !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le gogol et la feuille pliée jusqu'à la Lune",
   "html": "<p>Le nombre <b>10¹⁰⁰</b> (1 suivi de 100 zéros) s'appelle un <b>gogol</b> : le nom a été inventé en 1920 par Milton Sirotta, le neveu de 9 ans du mathématicien américain Edward Kasner. Les fondateurs de <b>Google</b> ont choisi le nom de leur entreprise en s'inspirant justement de ce nombre !</p>\n<p>Et une expérience de pensée : une feuille de papier épaisse de <b>0,1 mm</b>, si tu la plies en deux, double son épaisseur. Après <b>42 pliages</b>, l'épaisseur serait 0,1 × 2⁴² mm ≈ <b>440 000 km</b> : plus que la distance Terre–Lune (environ 384 000 km) ! En pratique, personne n'a réussi à plier une feuille plus de 12 fois.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre",
   "intro": "Les puissances croissent de manière surprenante. Voici d'autres façons de les « sentir ».",
   "tabs": [
    {
     "label": "🌳 L'arbre des doublements",
     "html": "<p>Imagine un arbre généalogique : tu as 2 parents, 4 grands-parents, 8 arrière-grands-parents… Chaque génération en arrière est une puissance de 2. Il y a dix générations (environ 300 ans), tu avais 2¹⁰ = <b>1 024</b> ancêtres !</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"260\" fill=\"#f0fdf4\"/><g stroke=\"#166534\" stroke-width=\"2\"><line x1=\"300\" y1=\"225\" x2=\"160\" y2=\"165\"/><line x1=\"300\" y1=\"225\" x2=\"440\" y2=\"165\"/><line x1=\"160\" y1=\"165\" x2=\"90\" y2=\"105\"/><line x1=\"160\" y1=\"165\" x2=\"230\" y2=\"105\"/><line x1=\"440\" y1=\"165\" x2=\"370\" y2=\"105\"/><line x1=\"440\" y1=\"165\" x2=\"510\" y2=\"105\"/></g><g fill=\"#22c55e\"><circle cx=\"300\" cy=\"225\" r=\"18\"/><circle cx=\"160\" cy=\"165\" r=\"16\"/><circle cx=\"440\" cy=\"165\" r=\"16\"/><circle cx=\"90\" cy=\"105\" r=\"14\"/><circle cx=\"230\" cy=\"105\" r=\"14\"/><circle cx=\"370\" cy=\"105\" r=\"14\"/><circle cx=\"510\" cy=\"105\" r=\"14\"/></g><g fill=\"#86efac\">\n<circle cx=\"55\" cy=\"50\" r=\"11\"/><circle cx=\"125\" cy=\"50\" r=\"11\"/><circle cx=\"195\" cy=\"50\" r=\"11\"/><circle cx=\"265\" cy=\"50\" r=\"11\"/><circle cx=\"335\" cy=\"50\" r=\"11\"/><circle cx=\"405\" cy=\"50\" r=\"11\"/><circle cx=\"475\" cy=\"50\" r=\"11\"/><circle cx=\"545\" cy=\"50\" r=\"11\"/></g><g font-size=\"16\" font-weight=\"bold\" fill=\"#14532d\"><text x=\"320\" y=\"250\">toi : 2⁰ = 1</text><text x=\"470\" y=\"190\">parents : 2¹ = 2</text><text x=\"10\" y=\"135\">grands-parents : 2² = 4</text><text x=\"200\" y=\"25\">arrière-grands-parents : 2³ = 8</text></g></svg>"
    },
    {
     "label": "💻 Les puissances dans les ordinateurs",
     "html": "<p>Les ordinateurs comptent en <b>base 2</b> (système binaire) : ils n'utilisent que 0 et 1. C'est pour cela que les mémoires ont des nombres « bizarres » :</p><ul><li>1 octet = 8 bits = 2³ bits, et peut avoir 2⁸ = <b>256</b> valeurs différentes ;</li><li>1 kibioctet = 2¹⁰ = <b>1 024</b> octets (environ mille) ;</li><li>une clé USB de 64 Go : 64 = 2⁶.</li></ul><p>Dans le système binaire, les nombres s'écrivent aussi avec les puissances de 2 : 13 = 8 + 4 + 1 = 1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰ = <b>1101</b>. C'est le même principe que la forme développée en base 10 !</p>"
    },
    {
     "label": "🧊 Des carrés en 3D",
     "html": "<p>Un carré de cubes 5 × 5 contient 5² = 25 cubes. Augmente le côté de 1 : le carré devient 6² = 36. On n'a pas ajouté seulement 6 cubes, mais 11 (une rangée, une colonne et le coin) ! Essaie avec les curseurs et découvre la règle des carrés.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 5,
      "b": 5
     }
    },
    {
     "label": "🇨🇳 Un système sans exposants",
     "html": "<p>En <b>chinois</b> et en <b>japonais</b>, les grands nombres se regroupent par 4 chiffres, et non par 3 : il existe un mot pour <b>10⁴</b> (万, <i>wàn</i> / <i>man</i>) et un pour <b>10⁸</b> (亿, <i>yì</i> / 億 <i>oku</i>). Ainsi « un million » se dit « cent wàn » (100 × 10⁴).</p><p>En Inde, on utilise le <b>lakh</b> (10⁵) et le <b>crore</b> (10⁷), et on écrit 1,00,00,000 au lieu de 10 000 000 ! Le même nombre, des regroupements différents : les puissances de 10 sont le langage commun qui met tout le monde d'accord.</p>"
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : propriétés et notation scientifique",
   "questions": [
    {
     "type": "mc",
     "q": "3⁵ × 3² = ?",
     "options": [
      "3¹⁰",
      "3⁷",
      "9⁷",
      "3³"
     ],
     "answer": 1,
     "explain": "Même base : on additionne les exposants, 5 + 2 = 7."
    },
    {
     "type": "mc",
     "q": "(2³)⁴ = ?",
     "options": [
      "2⁷",
      "2¹²",
      "2⁸¹",
      "8⁷"
     ],
     "answer": 1,
     "explain": "Puissance d'une puissance : on multiplie les exposants, 3 × 4 = 12."
    },
    {
     "type": "mc",
     "q": "Comment s'écrit 6 200 000 en notation scientifique ?",
     "options": [
      "62 × 10⁵",
      "6,2 × 10⁶",
      "0,62 × 10⁷",
      "6,2 × 10⁵"
     ],
     "answer": 1,
     "explain": "La virgule se déplace de 6 places ; il ne reste devant qu'un seul chiffre, 6,2."
    },
    {
     "type": "tf",
     "q": "2³ + 2² = 2⁵",
     "answer": false,
     "explain": "8 + 4 = 12, alors que 2⁵ = 32. Il n'existe pas de propriétés pour la somme !"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte : pourquoi les puissances fonctionnent ainsi",
   "nodes": [
    {
     "id": "moltiplicazione",
     "label": "Multiplication répétée",
     "x": 50,
     "y": 5,
     "color": "#64748b",
     "html": "Des facteurs tous égaux : 2 × 2 × 2.",
     "why": "Comme la multiplication abrège l'addition répétée, la puissance abrège la multiplication répétée."
    },
    {
     "id": "potenza",
     "label": "Puissance aⁿ",
     "x": 50,
     "y": 20,
     "color": "#2563eb",
     "html": "Base a, exposant n.",
     "why": "La notation avec l'exposant en haut a été introduite par René Descartes dans « La Géométrie » en 1637. Avant, on écrivait en toutes lettres ou avec des mots (carré, cube)."
    },
    {
     "id": "figure",
     "label": "Carrés et cubes",
     "x": 15,
     "y": 32,
     "color": "#ea580c",
     "html": "a² = aire d'un carré, a³ = volume d'un cube.",
     "why": "Les Pythagoriciens (VIe siècle av. J.-C.) représentaient les nombres avec des cailloux disposés en figures : d'où les noms « carré » et « cube »."
    },
    {
     "id": "casi",
     "label": "Cas particuliers",
     "x": 85,
     "y": 32,
     "color": "#0ea5e9",
     "html": "a¹ = a, a⁰ = 1, 1ⁿ = 1, 0ⁿ = 0.",
     "why": "a⁰ = 1 n'est pas une règle inventée au hasard : c'est la seule valeur qui rend vraie la propriété du quotient (aⁿ : aⁿ = a⁰ = 1)."
    },
    {
     "id": "proprieta",
     "label": "Propriétés",
     "x": 50,
     "y": 44,
     "color": "#9333ea",
     "html": "Même base : + ou − les exposants ; puissance d'une puissance : × les exposants ; même exposant : × ou : les bases.",
     "why": "Elles viennent toutes du fait de compter les facteurs : aᵐ × aⁿ a m facteurs plus n facteurs. La commutativité et l'associativité de la multiplication permettent de les regrouper."
    },
    {
     "id": "espressioni",
     "label": "Puissances dans les expressions",
     "x": 20,
     "y": 64,
     "color": "#f59e0b",
     "html": "Parenthèses → puissances → × et : → + et −.",
     "why": "La puissance « lie » encore plus fort que la multiplication, parce qu'elle en est une forme abrégée."
    },
    {
     "id": "dieci",
     "label": "Puissances de 10",
     "x": 50,
     "y": 66,
     "color": "#16a34a",
     "html": "10ⁿ = 1 suivi de n zéros.",
     "why": "Elles sont la base du système décimal de position : chaque position vaut 10 fois celle de droite. Archimède (IIIe siècle av. J.-C.), dans « L'Arénaire », a utilisé un système semblable pour compter les grains de sable de l'univers."
    },
    {
     "id": "scientifica",
     "label": "Notation scientifique",
     "x": 80,
     "y": 64,
     "color": "#dc2626",
     "html": "a × 10ⁿ avec 1 ≤ a < 10.",
     "why": "Les scientifiques en ont besoin pour comparer des grandeurs très éloignées : des galaxies aux virus. Elle simplifie les calculs et montre tout de suite l'ordre de grandeur."
    },
    {
     "id": "esponenziale",
     "label": "Croissance exponentielle",
     "x": 35,
     "y": 88,
     "color": "#db2777",
     "html": "Doubler ou tripler à chaque étape : on croît très vite.",
     "why": "Les bactéries, les contagions, les intérêts en banque, les nouvelles virales croissent ainsi. La légende de l'échiquier montre à quel point notre intuition sous-estime les puissances."
    },
    {
     "id": "binario",
     "label": "Base 2 et ordinateurs",
     "x": 70,
     "y": 88,
     "color": "#0f766e",
     "html": "Les ordinateurs utilisent les puissances de 2.",
     "why": "Gottfried Leibniz a décrit le système binaire en 1703 ; au XXe siècle, Claude Shannon a montré que les circuits électriques allumé/éteint peuvent calculer avec 0 et 1."
    }
   ],
   "edges": [
    [
     "moltiplicazione",
     "potenza",
     "s'abrège en"
    ],
    [
     "potenza",
     "figure",
     "exposants 2 et 3"
    ],
    [
     "potenza",
     "casi",
     "exposants 0 et 1"
    ],
    [
     "potenza",
     "proprieta",
     "obéit à"
    ],
    [
     "proprieta",
     "casi",
     "explique a⁰ = 1"
    ],
    [
     "proprieta",
     "espressioni",
     "simplifie"
    ],
    [
     "potenza",
     "dieci",
     "base 10"
    ],
    [
     "dieci",
     "scientifica",
     "permet"
    ],
    [
     "potenza",
     "esponenziale",
     "décrit"
    ],
    [
     "esponenziale",
     "binario",
     "base 2"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Puissance",
   "d": "Produit de plusieurs facteurs égaux : aⁿ."
  },
  {
   "t": "Base",
   "d": "Le facteur qui se répète dans une puissance."
  },
  {
   "t": "Exposant",
   "d": "Le nombre qui indique combien de fois la base est multipliée par elle-même."
  },
  {
   "t": "Carré",
   "d": "Puissance d'exposant 2."
  },
  {
   "t": "Cube",
   "d": "Puissance d'exposant 3."
  },
  {
   "t": "Puissance de 10",
   "d": "10ⁿ : 1 suivi de n zéros."
  },
  {
   "t": "Notation scientifique",
   "d": "Écriture d'un nombre sous la forme a × 10ⁿ, avec a compris entre 1 et 10 (exclu)."
  },
  {
   "t": "Ordre de grandeur",
   "d": "La puissance de 10 la plus proche d'un nombre."
  },
  {
   "t": "Croissance exponentielle",
   "d": "Croissance dans laquelle, à chaque étape, la quantité est multipliée par le même nombre."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Combien font 5³ ?",
    "answer": 125,
    "tol": 0,
    "explain": "5 × 5 × 5 = 125."
   },
   {
    "type": "mc",
    "q": "Dans 7⁴, le nombre 4 s'appelle…",
    "options": [
     "la base",
     "l'exposant",
     "le facteur",
     "la puissance"
    ],
    "answer": 1,
    "explain": "L'exposant indique combien de fois la base 7 est multipliée par elle-même."
   },
   {
    "type": "tf",
    "q": "1²⁰ = 20",
    "answer": false,
    "explain": "1 multiplié par lui-même autant de fois qu'on veut donne toujours 1."
   },
   {
    "type": "mc",
    "q": "2⁶ : 2² = ?",
    "options": [
     "2³",
     "2⁴",
     "2⁸",
     "1³"
    ],
    "answer": 1,
    "explain": "Même base : on soustrait les exposants, 6 − 2 = 4."
   },
   {
    "type": "num",
    "q": "Calcule avec la propriété : 4³ × 25³ = ? (écris le nombre)",
    "answer": 1000000,
    "tol": 0,
    "explain": "(4 × 25)³ = 100³ = 1.000.000."
   },
   {
    "type": "mc",
    "q": "Quel nombre est écrit correctement en notation scientifique ?",
    "options": [
     "35 × 10⁴",
     "0,7 × 10³",
     "3,5 × 10⁵",
     "10 × 10²"
    ],
    "answer": 2,
    "explain": "Le nombre devant doit être compris entre 1 (inclus) et 10 (exclu)."
   },
   {
    "type": "num",
    "q": "Résous : 2³ + 3² × 2 − 4⁰",
    "answer": 25,
    "tol": 0,
    "explain": "8 + 9 × 2 − 1 = 8 + 18 − 1 = 25."
   },
   {
    "type": "num",
    "q": "Résous : (5² − 4²)² : 3⁴",
    "answer": 1,
    "tol": 0,
    "explain": "25 − 16 = 9; 9² = 81; 3⁴ = 81; 81 : 81 = 1."
   },
   {
    "type": "mc",
    "q": "Combien vaut 10⁹ ?",
    "options": [
     "Un million",
     "Un milliard",
     "Mille",
     "Cent millions"
    ],
    "answer": 1,
    "explain": "1 suivi de 9 zéros : 1 000 000 000."
   },
   {
    "type": "text",
    "q": "Comment lit-on « 6² » ? (six au …)",
    "answer": [
     "carré",
     "au carré",
     "six au carré"
    ],
    "explain": "Six au carré = 36."
   },
   {
    "type": "order",
    "q": "Range du plus petit au plus grand",
    "items": [
     "2³",
     "3²",
     "2⁴",
     "5²",
     "3³"
    ],
    "explain": "8 < 9 < 16 < 25 < 27."
   },
   {
    "type": "mc",
    "q": "Pourquoi 7⁰ = 1 ?",
    "options": [
     "C'est une convention sans raison",
     "Parce que 7³ : 7³ = 7⁰ et que tout nombre divisé par lui-même donne 1",
     "Parce que 7 × 0 = 0",
     "Parce que le 0 ne compte pas"
    ],
    "answer": 1,
    "explain": "La propriété du quotient oblige a⁰ à valoir 1."
   }
  ],
  "gen": [
   [
    "power",
    3
   ]
  ]
 }
});
