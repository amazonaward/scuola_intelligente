TOPIC('fr', {
 "id": "m1-mat-numeri-naturali",
 "title": "Les nombres entiers naturels et les quatre opérations",
 "intro": "Les <b>nombres entiers naturels</b> sont les nombres qui servent à compter : 0, 1, 2, 3… Au collège, nous apprenons à les voir comme un véritable <b>ensemble</b> (ℕ), à bien connaître le <b>système décimal de position</b> et à utiliser les <b>propriétés</b> des quatre opérations pour calculer plus vite et résoudre des <b>expressions</b>.",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "L'ensemble ℕ et la droite graduée",
   "html": "<p>L'ensemble des nombres entiers naturels se note <b>ℕ</b> : ℕ = { 0, 1, 2, 3, 4, … }.</p>\n<ul>\n<li>Il a un <b>premier</b> élément, le <b>0</b>, mais <b>pas de dernier</b> : il est infini. Chaque nombre n a un <b>successeur</b> n + 1.</li>\n<li>Chaque nombre (sauf 0) a un <b>prédécesseur</b> n − 1.</li>\n<li>C'est un ensemble <b>ordonné</b> : de deux nombres différents, l'un est toujours plus petit que l'autre (symboles <b>&lt;</b>, <b>&gt;</b>, <b>=</b>).</li>\n<li>Il est <b>discret</b> : entre deux entiers consécutifs (par ex. 4 et 5), il n'y a aucun autre entier.</li>\n</ul>\n<p>Les nombres entiers naturels se représentent sur une <b>demi-droite graduée</b> : on fixe un point pour le 0 (l'<b>origine</b>), un sens (la flèche) et une <b>unité de longueur</b> (un segment toujours identique). Chaque nombre correspond à un point.</p>"
  },
  {
   "type": "widget",
   "title": "La demi-droite des nombres entiers naturels",
   "widget": "numberLine",
   "options": {
    "min": 0,
    "max": 20,
    "step": 1,
    "marks": [
     7,
     15
    ]
   },
   "caption": "Fais des bonds : de 7 à 15, combien y a-t-il de pas ? C'est la soustraction 15 − 7 = 8 !"
  },
  {
   "type": "text",
   "title": "Le système décimal de position",
   "html": "<p>Notre système de numération est :</p>\n<ul>\n<li><b>décimal</b> : il utilise 10 chiffres (0, 1, 2, … 9) et toutes les 10 unités d'un ordre forment 1 unité de l'ordre supérieur (10 unités = 1 dizaine, 10 dizaines = 1 centaine…) ;</li>\n<li><b>de position</b> : la valeur d'un chiffre dépend de sa <b>position</b>. Dans <b>333</b>, les trois chiffres sont identiques mais valent 300, 30 et 3 !</li>\n</ul>\n<p>Les chiffres se regroupent en <b>classes</b> de trois : unités simples, mille, millions, milliards. On lit de gauche à droite et on sépare les classes par une espace : <b>4 507 230</b> = quatre millions cinq cent sept mille deux cent trente.</p>\n<p><b>Forme développée</b> : 4 507 = 4 × 1 000 + 5 × 100 + 0 × 10 + 7 × 1.</p>\n<p>La <b>valeur</b> d'un chiffre change avec sa position, et le <b>zéro</b> est essentiel : il indique que cette position est vide (407 ≠ 47).</p>"
  },
  {
   "type": "3d",
   "title": "La valeur de position avec les cubes",
   "scene": "blocks",
   "options": {
    "mode": "base10",
    "value": 245
   },
   "caption": "Une plaque = 1 centaine (10 × 10 cubes), une barre = 1 dizaine, un cube = 1 unité. 245 = 2 centaines + 4 dizaines + 5 unités. Change le nombre avec le curseur."
  },
  {
   "type": "text",
   "title": "Les quatre opérations et leurs termes",
   "html": "<table>\n<tr><th>Opération</th><th>Termes</th><th>Résultat</th><th>Exemple</th></tr>\n<tr><td><b>Addition</b> +</td><td>termes</td><td>somme</td><td>12 + 8 = 20</td></tr>\n<tr><td><b>Soustraction</b> −</td><td>premier terme, second terme</td><td>différence (ou reste)</td><td>20 − 8 = 12</td></tr>\n<tr><td><b>Multiplication</b> ×</td><td>facteurs</td><td>produit</td><td>6 × 4 = 24</td></tr>\n<tr><td><b>Division</b> :</td><td>dividende, diviseur</td><td>quotient (et reste)</td><td>24 : 4 = 6</td></tr>\n</table>\n<p>La soustraction et la division sont les opérations <b>inverses</b> de l'addition et de la multiplication : 20 − 8 = 12 parce que 12 + 8 = 20 ; 24 : 4 = 6 parce que 6 × 4 = 24.</p>\n<p><b>Dans ℕ, on ne peut pas toujours tout faire</b> :</p>\n<ul>\n<li>l'addition et la multiplication donnent <b>toujours</b> un entier naturel : on dit que ce sont des opérations <b>internes</b> dans ℕ ;</li>\n<li>la soustraction n'est possible que si le premier terme est ≥ au second (3 − 5 ne donne pas un entier naturel) ;</li>\n<li>la division exacte n'est possible que si le dividende est un <b>multiple</b> du diviseur ; sinon il y a un <b>reste</b> : 25 : 4 = 6 reste 1, c'est-à-dire 25 = 4 × 6 + 1.</li>\n</ul>"
  },
  {
   "type": "remember",
   "title": "Le zéro et le un : des nombres spéciaux",
   "html": "<ul>\n<li><b>0 est l'élément neutre de l'addition</b> : a + 0 = a. Et aussi a − 0 = a.</li>\n<li><b>1 est l'élément neutre de la multiplication</b> : a × 1 = a. Et aussi a : 1 = a.</li>\n<li><b>0 est l'élément absorbant de la multiplication</b> : a × 0 = 0 (si un produit vaut 0, au moins un facteur est 0).</li>\n<li><b>0 : a = 0</b> (avec a ≠ 0) : zéro bonbon partagé entre 5 amis = 0 bonbon chacun.</li>\n<li><b>a : 0 est impossible</b> : aucun nombre multiplié par 0 ne donne a.</li>\n<li><b>0 : 0 est indéterminé</b> : n'importe quel nombre multiplié par 0 donne 0, donc il n'y a pas une réponse unique.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "Les propriétés des opérations",
   "html": "<p>Les propriétés sont des « règles du jeu » toujours vraies, qui servent à <b>calculer de tête</b> plus vite.</p>\n<ul>\n<li><b>Commutativité</b> (addition et multiplication) : en changeant l'ordre des termes, le résultat ne change pas.<br>7 + 25 = 25 + 7 &nbsp;&nbsp; 4 × 9 = 9 × 4</li>\n<li><b>Associativité</b> (addition et multiplication) : on peut remplacer deux termes ou plus par leur résultat.<br>17 + 8 + 2 = 17 + (8 + 2) = 17 + 10 = 27 &nbsp;&nbsp; 25 × 7 × 4 = (25 × 4) × 7 = 700</li>\n<li><b>Dissociation</b> : on peut décomposer un terme en une somme (ou un produit).<br>48 + 7 = 48 + 2 + 5 = 55 &nbsp;&nbsp; 15 × 6 = 15 × 2 × 3 = 30 × 3 = 90</li>\n<li><b>Distributivité</b> de la multiplication par rapport à l'addition (et à la soustraction) :<br>7 × 12 = 7 × (10 + 2) = 70 + 14 = 84 &nbsp;&nbsp; 9 × 98 = 9 × (100 − 2) = 900 − 18 = 882</li>\n<li><b>Propriété invariante de la soustraction</b> : si on ajoute ou on retire le même nombre aux deux termes, la différence ne change pas.<br>83 − 29 = (83 + 1) − (29 + 1) = 84 − 30 = 54</li>\n<li><b>Propriété invariante de la division</b> : si on multiplie ou on divise le dividende et le diviseur par le même nombre (≠ 0), le quotient ne change pas.<br>350 : 50 = 35 : 5 = 7 &nbsp;&nbsp; 140 : 5 = 280 : 10 = 28</li>\n</ul>\n<p>Attention : la soustraction et la division ne sont <b>ni</b> commutatives (8 − 3 ≠ 3 − 8) <b>ni</b> associatives ((24 : 4) : 2 = 3, mais 24 : (4 : 2) = 12).</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : calcul rapide au supermarché",
   "html": "<p>Tu achètes <b>4</b> packs de jus à <b>2,99 €</b>... raisonnons en centimes : 299 centimes.</p>\n<p>4 × 299 = 4 × (300 − 1) = 1 200 − 4 = <b>1 196</b> centimes = <b>11,96 €</b> (distributivité).</p>\n<p>Puis tu paies avec <b>20 €</b> : 2 000 − 1 196 = ? Avec la propriété invariante, j'ajoute 4 aux deux termes : 2 004 − 1 200 = <b>804</b> centimes = <b>8,04 €</b> de monnaie rendue.</p>\n<p>Enfin, tu partages la dépense de <b>36 €</b> entre <b>4</b> amis, en utilisant la propriété invariante de la division : 36 : 4 = 18 : 2 = <b>9 €</b> chacun.</p>\n<p>Pas de calculatrice : rien que des propriétés !</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : les propriétés",
   "questions": [
    {
     "type": "mc",
     "q": "Quelle propriété est utilisée dans 25 × 13 × 4 = (25 × 4) × 13 ?",
     "options": [
      "Distributivité",
      "Commutativité et associativité",
      "Propriété invariante",
      "Dissociation"
     ],
     "answer": 1,
     "explain": "On change l'ordre (commutativité) et on regroupe 25 × 4 = 100 (associativité)."
    },
    {
     "type": "num",
     "q": "Calcule de tête avec la distributivité : 6 × 102 = ?",
     "answer": 612,
     "tol": 0,
     "explain": "6 × 100 + 6 × 2 = 600 + 12 = 612."
    },
    {
     "type": "tf",
     "q": "La soustraction est commutative.",
     "answer": false,
     "explain": "10 − 4 = 6, mais 4 − 10 n'est même pas un entier naturel."
    },
    {
     "type": "mc",
     "q": "Combien font 7 : 0 ?",
     "options": [
      "0",
      "7",
      "1",
      "C'est impossible"
     ],
     "answer": 3,
     "explain": "Aucun nombre multiplié par 0 ne donne 7 : la division par zéro est impossible."
    }
   ]
  },
  {
   "type": "text",
   "title": "Les expressions : l'ordre des opérations",
   "html": "<p>Une <b>expression</b> est une suite d'opérations à effectuer. Pour que tout le monde obtienne le même résultat, on suit un ordre précis :</p>\n<ol>\n<li>on résout d'abord les <b>parenthèses</b> : rondes ( ), puis crochets [ ], puis accolades { } ;</li>\n<li>dans les parenthèses (et en dehors), on fait d'abord les <b>multiplications et les divisions</b>, dans l'ordre où elles apparaissent, de gauche à droite ;</li>\n<li>puis les <b>additions et les soustractions</b>, de gauche à droite.</li>\n</ol>\n<p>Exemple : <b>{ 30 − [ 4 × (7 − 2) + 3 ] } : 7</b></p>\n<ul>\n<li>rondes : 7 − 2 = 5 → { 30 − [ 4 × 5 + 3 ] } : 7</li>\n<li>crochets : 4 × 5 + 3 = 20 + 3 = 23 → { 30 − 23 } : 7</li>\n<li>accolades : 30 − 23 = 7 → 7 : 7 = <b>1</b></li>\n</ul>\n<p>Erreur typique : dans 2 + 3 × 4, faire d'abord 2 + 3 = 5 puis × 4 = 20. Faux ! D'abord la multiplication : 2 + 12 = <b>14</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : du problème à l'expression",
   "html": "<p><b>Problème</b> : la classe de 6e A part en sortie scolaire. Le car coûte 450 € et l'entrée au musée 6 € par personne. Il y a 22 élèves et 3 accompagnateurs (qui paient aussi l'entrée). Les enseignants partagent la dépense totale entre les seuls <b>élèves</b>. Combien paie chaque élève ?</p>\n<p><b>Expression</b> : [ 450 + 6 × (22 + 3) ] : 22</p>\n<ul>\n<li>(22 + 3) = 25 personnes</li>\n<li>6 × 25 = 150 € d'entrées</li>\n<li>450 + 150 = 600 € en tout</li>\n<li>600 : 22 = 27 reste 6 → chaque élève paie 27 € et il reste 6 € à couvrir (ou bien on arrondit : 22 × 28 = 616 €, il reste 16 € pour le goûter !).</li>\n</ul>\n<p>Écrire une seule expression aide à voir toute la structure du problème.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le zéro : une invention indienne",
   "html": "<p>Les anciens Romains n'avaient pas de zéro et utilisaient un système <b>sans position</b> : dans MMXXVI, le M vaut toujours 1 000, où qu'il soit. Faire une multiplication avec les chiffres romains était un cauchemar : on utilisait l'abaque !</p>\n<p>Les chiffres que nous utilisons et le <b>zéro</b> comme nombre sont nés en <b>Inde</b> : le mathématicien <b>Brahmagupta</b>, en <b>628 apr. J.-C.</b>, écrivit les premières règles pour calculer avec le zéro. Les Arabes les diffusèrent (c'est pourquoi nous les appelons « chiffres arabes »), et c'est <b>Léonard de Pise (Fibonacci)</b> qui les apporta en Europe avec le <i>Liber abaci</i> en <b>1202</b>. Le mot « zéro » vient de l'arabe <i>ṣifr</i>, « vide », dont vient aussi le mot « chiffre » !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le petit Gauss et la somme de 1 à 100",
   "html": "<p>On raconte que, vers 1785, le maître de <b>Carl Friedrich Gauss</b>, qui avait environ 8 ans, demanda à la classe d'additionner tous les nombres de 1 à 100, pour l'occuper. Gauss répondit au bout de quelques secondes : <b>5 050</b> !</p>\n<p>Son astuce utilise la commutativité et l'associativité : 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101… Il y a 50 paires qui valent 101 : 50 × 101 = <b>5 050</b>.</p>\n<p>À toi : combien fait la somme de 1 à 20 ? (10 paires de 21 = 210)</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de multiplier",
   "intro": "Partout dans le monde et à travers l'histoire, on multiplie de bien des manières. Toutes fonctionnent grâce à la distributivité !",
   "tabs": [
    {
     "label": "🇯🇵 Méthode des lignes",
     "html": "<p>Au Japon et en Chine, on apprend à multiplier en dessinant des lignes : les dizaines d'un facteur dans une direction, les unités dans l'autre. On compte les points d'intersection dans chaque zone : ce sont les centaines, les dizaines et les unités. Regarde l'animation.</p>",
     "widget": "lineMultiply",
     "options": {
      "a": 23,
      "b": 12
     }
    },
    {
     "label": "🇷🇺 Le paysan russe",
     "html": "<p>Une méthode très ancienne, utilisée par les paysans russes : on <b>divise par deux</b> un nombre et on <b>double</b> l'autre ; on barre les lignes où le nombre divisé par deux est pair, et on additionne celles qui restent. Ça marche parce qu'au fond, on écrit le nombre en base 2 !</p>",
     "widget": "russianPeasant",
     "options": {
      "a": 37,
      "b": 24
     }
    },
    {
     "label": "🏺 Méthode égyptienne",
     "html": "<p>Les Égyptiens, il y a 4 000 ans (papyrus de Rhind), multipliaient uniquement par <b>doublements</b> : 1, 2, 4, 8, 16… fois le nombre, puis ils additionnaient les bonnes lignes. C'est la distributivité : 13 × 21 = (8 + 4 + 1) × 21.</p>",
     "widget": "egyptianMultiply",
     "options": {
      "a": 13,
      "b": 21
     }
    },
    {
     "label": "🔢 Par jalousie (Fibonacci)",
     "html": "<p>La méthode par jalousie (elle s'appelle ainsi parce que la grille rappelle les grillages des fenêtres, appelés « jalousies ») est arrivée en Europe avec Fibonacci depuis le monde arabe. Chaque case contient le produit de deux chiffres et on additionne les diagonales.</p>",
     "widget": "lattice",
     "options": {
      "a": 47,
      "b": 36
     }
    },
    {
     "label": "🧊 La distributivité avec les cubes",
     "html": "<p>Un rectangle de 7 × 12 cubes peut se couper en un rectangle de 7 × 10 et un de 7 × 2 : 70 + 14 = 84. C'est exactement la distributivité, vue en 3D. Essaie de changer les dimensions.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 7,
      "b": 12
     }
    }
   ]
  },
  {
   "type": "widget",
   "title": "Reconnais la propriété",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "5 + 9 = 9 + 5",
      "commutativité"
     ],
     [
      "(6 + 4) + 7 = 6 + (4 + 7)",
      "associativité"
     ],
     [
      "8 × 15 = 8 × 10 + 8 × 5",
      "distributivité"
     ],
     [
      "90 − 38 = 92 − 40",
      "propriété invariante de la soustraction"
     ],
     [
      "600 : 30 = 60 : 3",
      "propriété invariante de la division"
     ],
     [
      "a × 1 = a",
      "élément neutre"
     ],
     [
      "a × 0 = 0",
      "élément absorbant"
     ]
    ]
   },
   "caption": "Relie chaque égalité à la propriété qu'elle utilise."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : les expressions",
   "questions": [
    {
     "type": "num",
     "q": "Combien font 5 + 3 × 4 ?",
     "answer": 17,
     "tol": 0,
     "explain": "D'abord la multiplication : 3 × 4 = 12 ; puis 5 + 12 = 17."
    },
    {
     "type": "num",
     "q": "Combien font (5 + 3) × 4 ?",
     "answer": 32,
     "tol": 0,
     "explain": "D'abord la parenthèse : 8 × 4 = 32."
    },
    {
     "type": "num",
     "q": "Résous : [ 20 − (3 + 2) × 3 ] × 2",
     "answer": 10,
     "tol": 0,
     "explain": "(3 + 2) = 5; 5 × 3 = 15; 20 − 15 = 5; 5 × 2 = 10."
    },
    {
     "type": "mc",
     "q": "Dans 48 : 6 × 2, quel est le résultat correct ?",
     "options": [
      "4",
      "16",
      "8",
      "96"
     ],
     "answer": 1,
     "explain": "Les multiplications et les divisions se font de gauche à droite : 48 : 6 = 8 ; 8 × 2 = 16."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte : pourquoi les opérations fonctionnent ainsi",
   "nodes": [
    {
     "id": "contare",
     "label": "Compter",
     "x": 50,
     "y": 5,
     "color": "#64748b",
     "html": "Associer un nombre à chaque objet : 1, 2, 3…",
     "why": "L'os d'Ishango (Congo, il y a environ 20 000 ans) porte des entailles qui servaient peut-être à compter : le besoin de compter est très ancien."
    },
    {
     "id": "naturali",
     "label": "Ensemble ℕ",
     "x": 50,
     "y": 20,
     "color": "#2563eb",
     "html": "0, 1, 2, 3… ordonné, infini, discret.",
     "why": "Giuseppe Peano, mathématicien de Cuneo, a décrit ℕ en 1889 avec cinq axiomes : il y a le 0, chaque nombre a un successeur, des nombres différents ont des successeurs différents, 0 n'est le successeur d'aucun nombre, et le principe de récurrence est valable."
    },
    {
     "id": "posizionale",
     "label": "Système de position",
     "x": 15,
     "y": 34,
     "color": "#0ea5e9",
     "html": "10 chiffres, la valeur dépend de la position.",
     "why": "Nous utilisons la base 10 probablement parce que nous avons 10 doigts. Le zéro indien (Brahmagupta, 628) a rendu le système possible ; Fibonacci l'a apporté en Europe en 1202."
    },
    {
     "id": "addizione",
     "label": "Addition",
     "x": 35,
     "y": 42,
     "color": "#16a34a",
     "html": "Réunir des quantités ; élément neutre 0.",
     "why": "Peano la définit avec le « successeur » : a + 1 est le successeur de a, a + 2 le successeur du successeur… De là découlent la commutativité et l'associativité."
    },
    {
     "id": "moltiplicazione",
     "label": "Multiplication",
     "x": 65,
     "y": 42,
     "color": "#ea580c",
     "html": "Addition répétée ; élément neutre 1, absorbant 0.",
     "why": "3 × 4 = 4 + 4 + 4. Dessinée comme un rectangle de 3 lignes et 4 colonnes, on voit qu'en le tournant (4 × 3) le nombre de carreaux ne change pas : voilà la commutativité."
    },
    {
     "id": "inverse",
     "label": "Soustraction et division",
     "x": 85,
     "y": 30,
     "color": "#dc2626",
     "html": "Opérations inverses ; pas toujours possibles dans ℕ.",
     "why": "Pour rendre la soustraction toujours possible, les mathématiciens ont inventé les nombres négatifs (ℤ) ; pour la division, les fractions (ℚ)."
    },
    {
     "id": "distributiva",
     "label": "Distributivité",
     "x": 50,
     "y": 62,
     "color": "#9333ea",
     "html": "a × (b + c) = a × b + a × c.",
     "why": "Un rectangle de côtés a et (b + c) se divise en deux rectangles a × b et a × c. C'est la base de tous les algorithmes de multiplication posée."
    },
    {
     "id": "invariantive",
     "label": "Propriétés invariantes",
     "x": 85,
     "y": 62,
     "color": "#db2777",
     "html": "Soustraction : + ou − le même nombre ; division : × ou : le même nombre.",
     "why": "Soustraction : si deux personnes vieillissent d'un an, leur différence d'âge ne change pas. Division : c'est le même principe que celui des fractions équivalentes."
    },
    {
     "id": "espressioni",
     "label": "Expressions",
     "x": 30,
     "y": 84,
     "color": "#f59e0b",
     "html": "Parenthèses, puis × et :, puis + et −.",
     "why": "C'est une convention partagée par les mathématiciens (établie entre le XVIIe et le XIXe siècle) pour que tout le monde obtienne le même résultat ; la multiplication « lie plus fort » parce que c'est une addition abrégée."
    },
    {
     "id": "calcolomentale",
     "label": "Calcul rapide",
     "x": 70,
     "y": 86,
     "color": "#0f766e",
     "html": "Propriétés utilisées pour calculer de tête.",
     "why": "Les méthodes d'autres pays (lignes japonaises, paysan russe, égyptienne, jalousie) sont toutes des manières différentes d'appliquer la distributivité."
    }
   ],
   "edges": [
    [
     "contare",
     "naturali",
     "naît"
    ],
    [
     "naturali",
     "posizionale",
     "s'écrit avec"
    ],
    [
     "naturali",
     "addizione",
     "opération"
    ],
    [
     "addizione",
     "moltiplicazione",
     "répétée"
    ],
    [
     "addizione",
     "inverse",
     "inverse"
    ],
    [
     "moltiplicazione",
     "inverse",
     "inverse"
    ],
    [
     "moltiplicazione",
     "distributiva",
     "par rapport à +"
    ],
    [
     "inverse",
     "invariantive",
     "vérifient"
    ],
    [
     "distributiva",
     "calcolomentale",
     "permet"
    ],
    [
     "addizione",
     "espressioni",
     "ordre"
    ],
    [
     "moltiplicazione",
     "espressioni",
     "ordre"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Nombres entiers naturels (ℕ)",
   "d": "Les nombres 0, 1, 2, 3… utilisés pour compter."
  },
  {
   "t": "Système de position",
   "d": "Système dans lequel la valeur d'un chiffre dépend de sa position."
  },
  {
   "t": "Termes / somme",
   "d": "Termes et résultat de l'addition."
  },
  {
   "t": "Termes et différence",
   "d": "Termes et résultat de la soustraction."
  },
  {
   "t": "Facteurs / produit",
   "d": "Termes et résultat de la multiplication."
  },
  {
   "t": "Dividende, diviseur, quotient",
   "d": "Termes et résultat de la division."
  },
  {
   "t": "Élément neutre",
   "d": "Nombre qui, dans une opération, laisse inchangé l'autre terme (0 pour +, 1 pour ×)."
  },
  {
   "t": "Élément absorbant",
   "d": "Le 0 dans la multiplication : tout nombre multiplié par 0 donne 0."
  },
  {
   "t": "Distributivité",
   "d": "a × (b + c) = a × b + a × c."
  },
  {
   "t": "Expression",
   "d": "Suite d'opérations à effectuer dans un ordre établi."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "tf",
    "q": "L'ensemble des nombres entiers naturels a un dernier élément.",
    "answer": false,
    "explain": "Chaque nombre a un successeur : ℕ est infini."
   },
   {
    "type": "mc",
    "q": "Dans le nombre 3 582 104, le chiffre 8 vaut…",
    "options": [
     "8",
     "8.000",
     "80.000",
     "800.000"
    ],
    "answer": 2,
    "explain": "Il est à la position des dizaines de mille : 80 000."
   },
   {
    "type": "mc",
    "q": "Comment s'appelle le résultat de la division ?",
    "options": [
     "Produit",
     "Différence",
     "Quotient",
     "Somme"
    ],
    "answer": 2,
    "explain": "Dividende : diviseur = quotient."
   },
   {
    "type": "num",
    "q": "Calcule avec la propriété invariante : 1 000 − 397 = ?",
    "answer": 603,
    "tol": 0,
    "explain": "J'ajoute 3 aux deux termes : 1 003 − 400 = 603."
   },
   {
    "type": "num",
    "q": "Calcule avec la distributivité : 15 × 99 = ?",
    "answer": 1485,
    "tol": 0,
    "explain": "15 × 100 − 15 = 1500 − 15 = 1485."
   },
   {
    "type": "mc",
    "q": "Quelle égalité montre l'associativité ?",
    "options": [
     "3 + 7 = 7 + 3",
     "(2 × 5) × 9 = 2 × (5 × 9)",
     "4 × (3 + 2) = 12 + 8",
     "40 : 8 = 20 : 4"
    ],
    "answer": 1,
    "explain": "Les facteurs sont regroupés différemment, le produit ne change pas."
   },
   {
    "type": "num",
    "q": "Résous : 36 : (2 + 7) × 5 − 4",
    "answer": 16,
    "tol": 0,
    "explain": "(2 + 7) = 9; 36 : 9 = 4; 4 × 5 = 20; 20 − 4 = 16."
   },
   {
    "type": "num",
    "q": "Résous : { 50 − [ 3 × (4 + 6) − 5 ] } : 5",
    "answer": 5,
    "tol": 0,
    "explain": "(4 + 6) = 10; 3 × 10 − 5 = 25; 50 − 25 = 25; 25 : 5 = 5."
   },
   {
    "type": "tf",
    "q": "0 : 8 = 0",
    "answer": true,
    "explain": "En effet 0 × 8 = 0. En revanche 8 : 0 est impossible."
   },
   {
    "type": "num",
    "q": "Combien fait la somme de tous les nombres de 1 à 10 (astuce de Gauss) ?",
    "answer": 55,
    "tol": 0,
    "explain": "5 paires de 11 : 5 × 11 = 55."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre les étapes pour résoudre une expression",
    "items": [
     "Parenthèses rondes",
     "Crochets",
     "Accolades",
     "En dehors des parenthèses : × et :",
     "En dehors des parenthèses : + et −"
    ],
    "explain": "De l'intérieur vers l'extérieur ; à chaque niveau, d'abord × et :, puis + et −."
   },
   {
    "type": "mc",
    "q": "Qui a apporté en Europe les chiffres indo-arabes avec le Liber abaci (1202) ?",
    "options": [
     "Pythagore",
     "Léonard de Pise (Fibonacci)",
     "Galilée",
     "Euclide"
    ],
    "answer": 1,
    "explain": "Léonard de Pise, dit Fibonacci."
   }
  ],
  "gen": [
   [
    "mult2",
    1
   ],
   [
    "div2",
    1
   ]
  ]
 }
});
