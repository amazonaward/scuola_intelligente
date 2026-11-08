TOPIC('fr', {
 "id": "m2-tec-programmazione",
 "title": "Programmer : variables et boucles",
 "intro": "Chaque appli, jeu vidéo ou robot fonctionne grâce à deux idées très simples : les <b>variables</b>, qui servent à <b>mémoriser</b> les données, et les <b>boucles</b>, qui servent à <b>répéter</b> les instructions sans les réécrire. Nous les découvrirons d'abord avec des blocs (comme dans Scratch), puis avec du vrai code, en <b>Python</b>.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "Qu'est-ce qu'une variable",
   "html": "<p>Une <b>variable</b> est comme une <b>boîte avec une étiquette</b> : l'étiquette est le <b>nom</b>, à l'intérieur il y a une <b>valeur</b> qui peut changer pendant le programme.</p>\n<ul>\n<li><b>Créer et affecter</b> : <code>points = 0</code> signifie « mets 0 dans la boîte appelée points ». Le symbole <code>=</code> en programmation ne veut pas dire « est égal à », mais <b>« affecte »</b>, « mets dedans ».</li>\n<li><b>Lire</b> : <code>print(points)</code> affiche à l'écran le contenu de la boîte.</li>\n<li><b>Modifier</b> : <code>points = points + 10</code> signifie « prends la valeur de points, ajoute 10 et remets le résultat dans la même boîte ».</li>\n</ul>\n<p>Les valeurs ont un <b>type</b> :</p>\n<table>\n<tr><th>Type</th><th>Exemple</th><th>Sert à</th></tr>\n<tr><td><b>entier</b> (int)</td><td><code>vies = 3</code></td><td>compter</td></tr>\n<tr><td><b>décimal</b> (float)</td><td><code>prix = 2.50</code></td><td>mesures, argent (en Python on utilise le point, pas la virgule !)</td></tr>\n<tr><td><b>chaîne</b> (str)</td><td><code>nom = \"Sara\"</code></td><td>textes, toujours entre guillemets</td></tr>\n<tr><td><b>booléen</b> (bool)</td><td><code>gagne = False</code></td><td>vrai/faux (True/False)</td></tr>\n</table>\n<p>Règles pour les noms : pas d'espaces (utilise <code>score_max</code>), ne pas commencer par un chiffre, choisis des noms qui font comprendre le contenu.</p>"
  },
  {
   "type": "svg",
   "title": "Les variables comme des boîtes",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0fdf4\"/>\n<g>\n<polygon points=\"40,120 170,120 190,100 60,100\" fill=\"#fcd34d\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<rect x=\"40\" y=\"120\" width=\"130\" height=\"100\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<rect x=\"55\" y=\"190\" width=\"100\" height=\"24\" rx=\"5\" fill=\"#ffffff\" stroke=\"#92400e\" stroke-width=\"2\"/>\n<text x=\"105\" y=\"208\" font-size=\"16\" font-weight=\"bold\" fill=\"#92400e\" text-anchor=\"middle\">points</text>\n<text x=\"105\" y=\"170\" font-size=\"40\" font-weight=\"bold\" fill=\"#1f2937\" text-anchor=\"middle\">10</text>\n</g>\n<g>\n<polygon points=\"230,120 360,120 380,100 250,100\" fill=\"#a5b4fc\" stroke=\"#3730a3\" stroke-width=\"3\"/>\n<rect x=\"230\" y=\"120\" width=\"130\" height=\"100\" fill=\"#818cf8\" stroke=\"#3730a3\" stroke-width=\"3\"/>\n<rect x=\"245\" y=\"190\" width=\"100\" height=\"24\" rx=\"5\" fill=\"#ffffff\" stroke=\"#3730a3\" stroke-width=\"2\"/>\n<text x=\"295\" y=\"208\" font-size=\"16\" font-weight=\"bold\" fill=\"#3730a3\" text-anchor=\"middle\">nom</text>\n<text x=\"295\" y=\"168\" font-size=\"26\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">\"Sara\"</text>\n</g>\n<g>\n<polygon points=\"420,120 550,120 570,100 440,100\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"3\"/>\n<rect x=\"420\" y=\"120\" width=\"130\" height=\"100\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"3\"/>\n<rect x=\"435\" y=\"190\" width=\"100\" height=\"24\" rx=\"5\" fill=\"#ffffff\" stroke=\"#166534\" stroke-width=\"2\"/>\n<text x=\"485\" y=\"208\" font-size=\"16\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">gagne</text>\n<text x=\"485\" y=\"168\" font-size=\"26\" font-weight=\"bold\" fill=\"#14532d\" text-anchor=\"middle\">False</text>\n</g>\n<text x=\"105\" y=\"250\" font-size=\"16\" fill=\"#1f2937\" text-anchor=\"middle\">entier</text>\n<text x=\"295\" y=\"250\" font-size=\"16\" fill=\"#1f2937\" text-anchor=\"middle\">chaîne</text>\n<text x=\"485\" y=\"250\" font-size=\"16\" fill=\"#1f2937\" text-anchor=\"middle\">booléen</text>\n<text x=\"300\" y=\"50\" font-size=\"20\" font-weight=\"bold\" fill=\"#14532d\" text-anchor=\"middle\">étiquette = nom · contenu = valeur</text>\n<text x=\"300\" y=\"285\" font-size=\"16\" fill=\"#334155\" text-anchor=\"middle\">points = points + 10 → la boîte « points » contient maintenant 20</text>\n</svg>",
   "caption": "Chaque variable a un nom (l'étiquette) et une valeur (le contenu). Le contenu peut changer, le nom non."
  },
  {
   "type": "text",
   "title": "Qu'est-ce qu'une boucle",
   "html": "<p>Une <b>boucle</b> (en anglais <i>loop</i>) est un bloc d'instructions que l'ordinateur <b>répète</b>. Il y en a deux types principaux :</p>\n<p><b>1. Boucle à compteur</b> – elle répète un <b>nombre fixe</b> de fois. Dans Scratch, c'est le bloc « répéter 10 fois » ; en Python, c'est <code>for</code> :</p>\n<pre><code>for i in range(5):\n    print(\"Salut!\")</code></pre>\n<p>Il affiche « Salut! » <b>5 fois</b>. La variable <code>i</code> vaut 0, 1, 2, 3, 4 (en Python on commence à compter à partir de 0 !).</p>\n<p><b>2. Boucle à condition</b> – elle répète <b>tant que</b> une condition est vraie. Dans Scratch, c'est « répéter jusqu'à ce que… » ; en Python, c'est <code>while</code> :</p>\n<pre><code>vies = 3\nwhile vies &gt; 0:\n    print(\"Tu joues encore!\")\n    vies = vies - 1</code></pre>\n<p>Elle répète tant que <code>vies</code> est supérieur à 0 : 3 fois. Si on oublie de diminuer <code>vies</code>, la boucle <b>ne s'arrête jamais</b> : c'est une <b>boucle infinie</b>, l'une des erreurs les plus courantes !</p>\n<p>⚠️ En Python, l'<b>indentation</b> (les 4 espaces au début de la ligne) est obligatoire : elle indique quelles instructions sont <b>dans</b> la boucle.</p>"
  },
  {
   "type": "widget",
   "title": "Du bloc au code",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "🟧 mettre points à 0",
      "points = 0"
     ],
     [
      "🟧 ajouter 1 à points",
      "points = points + 1"
     ],
     [
      "🟨 répéter 10 fois",
      "for i in range(10):"
     ],
     [
      "🟨 répéter jusqu'à ce que vies = 0",
      "while vies > 0:"
     ],
     [
      "🟪 dire « Salut ! »",
      "print(\"Salut!\")"
     ],
     [
      "🟦 demander le nom et attendre",
      "nom = input(\"Ton nom?\")"
     ]
    ]
   },
   "caption": "Associe chaque bloc de style Scratch à la ligne de Python qui fait la même chose."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : variables",
   "questions": [
    {
     "type": "num",
     "q": "x = 5, puis x = x + 3. Combien vaut x ?",
     "answer": 8,
     "explain": "On prend l'ancienne valeur (5), on ajoute 3 et on remet dans x : 8."
    },
    {
     "type": "mc",
     "q": "De quel type est la valeur \"42\" (entre guillemets) ?",
     "options": [
      "Entier",
      "Chaîne",
      "Booléen"
     ],
     "answer": 1,
     "explain": "Tout ce qui est entre guillemets est une chaîne, même si cela contient des chiffres."
    },
    {
     "type": "tf",
     "q": "En programmation, « = » signifie « affecte une valeur ».",
     "answer": true,
     "explain": "Pour comparer deux valeurs, on utilise « == »."
    }
   ]
  },
  {
   "type": "example",
   "title": "Exemple pratique : le compteur et l'accumulateur",
   "html": "<p>Nous voulons additionner les nombres de 1 à 100. Le jeune <b>Carl Friedrich Gauss</b>, selon une anecdote célèbre, l'a fait de tête en quelques secondes à 9 ans. L'ordinateur le fait avec une boucle :</p>\n<pre><code>somme = 0\nfor n in range(1, 101):\n    somme = somme + n\nprint(somme)</code></pre>\n<ul>\n<li><code>n</code> est le <b>compteur</b> : il vaut 1, 2, 3… jusqu'à 100 (<code>range(1, 101)</code> s'arrête <b>avant</b> 101).</li>\n<li><code>somme</code> est l'<b>accumulateur</b> : il part de 0 et, à chaque tour, il « accumule » le nouveau nombre.</li>\n</ul>\n<p>Résultat : <b>5050</b>. L'astuce de Gauss ? 1+100 = 101, 2+99 = 101… il y a 50 paires : 50 × 101 = 5050.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : devine le nombre",
   "html": "<pre><code>secret = 7\nessai = 0\nwhile essai != secret:\n    essai = int(input(\"Devine (1-10): \"))\n    if essai &lt; secret:\n        print(\"Plus haut!\")\n    elif essai &gt; secret:\n        print(\"Plus bas!\")\nprint(\"Bravo, tu as trouvé!\")</code></pre>\n<p>Ici la boucle est un <code>while</code> : nous ne savons pas <b>combien de fois</b> le joueur essaiera, donc nous répétons <b>tant que</b> l'essai est différent (<code>!=</code>) du nombre secret. <code>input</code> lit ce que l'utilisateur écrit ; <code>int(...)</code> le transforme de chaîne en nombre entier.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? La première programmeuse",
   "html": "<p>Le premier programme de l'histoire a été écrit par une femme : <b>Ada Lovelace</b>, mathématicienne anglaise. En <b>1843</b>, dans les notes d'un article sur la « machine analytique » de Charles Babbage, elle décrivit un procédé pour calculer les <b>nombres de Bernoulli</b>, avec des instructions qui se répétaient : une vraie <b>boucle</b> !</p>\n<p>La machine ne fut jamais construite, mais Ada avait déjà compris que les ordinateurs pourraient travailler non seulement avec des nombres, mais aussi avec la musique et les symboles. En son honneur, un langage de programmation s'appelle <b>Ada</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le premier « bug » était un vrai insecte",
   "html": "<p>En <b>1947</b>, à l'université Harvard, les techniciens de l'ordinateur Mark II trouvèrent une erreur causée par un <b>papillon de nuit</b> resté coincé dans un relais. Ils le collèrent avec du scotch dans le journal de travail en écrivant « first actual case of bug being found ». <b>Grace Hopper</b>, pionnière des langages de programmation, faisait partie de l'équipe. Depuis, les erreurs dans les programmes s'appellent des <b>bugs</b> (insectes) et les corriger se dit <b>déboguer</b> (<i>debug</i>).</p>\n<p>Et le nom <b>Python</b> ? Il ne vient pas du serpent : son inventeur, le Néerlandais <b>Guido van Rossum</b>, qui le publia en <b>1991</b>, était fan du groupe comique anglais <i>Monty Python</i>.</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li><b>Variable</b> = nom + valeur qui peut changer. <code>=</code> affecte, <code>==</code> compare.</li>\n<li>Types : <b>int</b>, <b>float</b>, <b>str</b> (entre guillemets), <b>bool</b> (True/False).</li>\n<li><b>for</b> : boucle à compteur, nombre de répétitions connu. <code>range(5)</code> → 0, 1, 2, 3, 4.</li>\n<li><b>while</b> : boucle à condition, répète tant que la condition est vraie. Attention aux boucles infinies !</li>\n<li>Le <b>compteur</b> compte les tours ; l'<b>accumulateur</b> additionne les valeurs.</li>\n<li>En Python, l'indentation (4 espaces) indique ce qui est dans la boucle.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre variables et boucles",
   "intro": "Le code te paraît du chinois ? Essaie avec une analogie de la vie quotidienne, avec les blocs colorés ou avec les flashcards.",
   "tabs": [
    {
     "label": "🏃 L'entraînement",
     "html": "<p>L'entraîneur dit : « <b>Faites 5 tours de terrain</b> ». C'est une boucle <b>for</b> : le nombre de répétitions est décidé à l'avance. Pour ne pas te tromper, tu comptes les tours sur tes doigts : les doigts sont le <b>compteur</b>.</p>\n<p>Puis il dit : « <b>Courez jusqu'à ce que je siffle</b> ». C'est une boucle <b>while</b> : tu ne sais pas combien de tours tu feras, tu continues tant que la condition (« il n'a pas sifflé ») est vraie.</p>\n<p>Le <b>tableau d'affichage</b> avec le score du match est une <b>variable</b> : il a un nom (Domicile, Visiteurs) et une valeur qui change à chaque but.</p>"
    },
    {
     "label": "🧱 Scratch et Python comparés",
     "html": "<p>Le même programme, « dessine un carré », dans deux langages :</p>\n<table>\n<tr><th>Scratch (blocs)</th><th>Python (texte, avec le module turtle)</th></tr>\n<tr><td>quand le drapeau vert est cliqué<br>répéter 4 fois<br>&nbsp;&nbsp;avancer de 100 pas<br>&nbsp;&nbsp;tourner de 90 degrés</td><td><code>import turtle</code><br><code>t = turtle.Turtle()</code><br><code>for i in range(4):</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;t.forward(100)</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;t.right(90)</code></td></tr>\n</table>\n<p>Le bloc « répéter » de Scratch « enveloppe » les instructions à répéter ; en Python, c'est l'<b>indentation</b> qui fait ce travail. Scratch a été créé au <b>MIT</b> de Boston et publié en 2007 ; turtle s'inspire du langage <b>Logo</b> (1967), avec sa célèbre tortue.</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#f8fafc\"/>\n<rect x=\"30\" y=\"30\" width=\"230\" height=\"40\" rx=\"10\" fill=\"#facc15\" stroke=\"#a16207\" stroke-width=\"2\"/>\n<text x=\"145\" y=\"57\" font-size=\"17\" font-weight=\"bold\" fill=\"#422006\" text-anchor=\"middle\">répéter 4 fois</text>\n<rect x=\"30\" y=\"70\" width=\"24\" height=\"110\" fill=\"#facc15\" stroke=\"#a16207\" stroke-width=\"2\"/>\n<rect x=\"54\" y=\"80\" width=\"200\" height=\"38\" rx=\"8\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n<text x=\"154\" y=\"105\" font-size=\"16\" fill=\"#ffffff\" text-anchor=\"middle\">avancer de 100 pas</text>\n<rect x=\"54\" y=\"128\" width=\"200\" height=\"38\" rx=\"8\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n<text x=\"154\" y=\"153\" font-size=\"16\" fill=\"#ffffff\" text-anchor=\"middle\">tourner de 90°</text>\n<rect x=\"30\" y=\"180\" width=\"230\" height=\"22\" rx=\"8\" fill=\"#facc15\" stroke=\"#a16207\" stroke-width=\"2\"/>\n<text x=\"300\" y=\"120\" font-size=\"30\" fill=\"#334155\" text-anchor=\"middle\">=</text>\n<rect x=\"330\" y=\"40\" width=\"250\" height=\"160\" rx=\"10\" fill=\"#1e293b\"/>\n<text x=\"345\" y=\"80\" font-size=\"16\" fill=\"#f472b6\" font-family=\"monospace\">for i in range(4):</text>\n<text x=\"375\" y=\"115\" font-size=\"16\" fill=\"#a5f3fc\" font-family=\"monospace\">t.forward(100)</text>\n<text x=\"375\" y=\"150\" font-size=\"16\" fill=\"#a5f3fc\" font-family=\"monospace\">t.right(90)</text>\n<text x=\"455\" y=\"185\" font-size=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">indentation = dans la boucle</text>\n</svg>"
    },
    {
     "label": "📝 Trace à la main",
     "html": "<p>Une méthode utilisée dans les écoles d'informatique du monde entier : le <b>tableau de trace</b>. On « fait comme si on était l'ordinateur » et on écrit, ligne par ligne, la valeur de chaque variable.</p>\n<pre><code>x = 1\nfor i in range(4):\n    x = x * 2</code></pre>\n<table>\n<tr><th>tour</th><th>i</th><th>x avant</th><th>x après</th></tr>\n<tr><td>1</td><td>0</td><td>1</td><td>2</td></tr>\n<tr><td>2</td><td>1</td><td>2</td><td>4</td></tr>\n<tr><td>3</td><td>2</td><td>4</td><td>8</td></tr>\n<tr><td>4</td><td>3</td><td>8</td><td>16</td></tr>\n</table>\n<p>À la fin, <code>x</code> vaut <b>16</b>. Avec le tableau, tu ne te perds jamais, même dans les boucles les plus longues !</p>"
    },
    {
     "label": "🃏 Flashcards des mots-clés",
     "html": "<p>Retourne les cartes pour réviser les mots-clés de la programmation.</p>",
     "widget": "flashcards",
     "options": {
      "cards": [
       {
        "front": "variable",
        "back": "Boîte avec un nom qui contient une valeur modifiable"
       },
       {
        "front": "=",
        "back": "Affectation : mets une valeur dans la variable"
       },
       {
        "front": "==",
        "back": "Comparaison : les deux valeurs sont-elles égales ?"
       },
       {
        "front": "for",
        "back": "Boucle à compteur : nombre de répétitions connu"
       },
       {
        "front": "while",
        "back": "Boucle à condition : répète tant que c'est vrai"
       },
       {
        "front": "bug",
        "back": "Erreur dans le programme"
       },
       {
        "front": "accumulateur",
        "back": "Variable qui additionne les valeurs à chaque tour"
       }
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte de la programmation",
   "nodes": [
    {
     "id": "algoritmo",
     "label": "Algorithme",
     "x": 50,
     "y": 7,
     "color": "#7c3aed",
     "html": "Suite finie d'instructions précises pour résoudre un problème.",
     "why": "Le nom vient du mathématicien persan <b>al-Khwarizmi</b> (IXe siècle), dont le nom latinisé est devenu « algorismus ». Un programme est un algorithme écrit dans un langage que l'ordinateur comprend."
    },
    {
     "id": "programma",
     "label": "Programme",
     "x": 50,
     "y": 27,
     "color": "#2563eb",
     "html": "Algorithme écrit dans un langage de programmation (Scratch, Python…).",
     "why": "L'ordinateur ne comprend que des 0 et des 1 : les langages de programmation sont un pont entre nous et la machine. Un autre programme (interpréteur ou compilateur) les traduit."
    },
    {
     "id": "variabile",
     "label": "Variable",
     "x": 20,
     "y": 47,
     "color": "#f59e0b",
     "html": "Nom + valeur modifiable, enregistrée dans la mémoire.",
     "why": "Physiquement, c'est une zone de la mémoire RAM avec une adresse ; le nom nous sert à ne pas devoir retenir des adresses numériques. L'idée d'utiliser des lettres à la place des nombres vient de l'algèbre (François Viète, 1591)."
    },
    {
     "id": "tipi",
     "label": "Types de données",
     "x": 8,
     "y": 72,
     "color": "#f97316",
     "html": "int, float, str, bool.",
     "why": "L'ordinateur doit savoir comment interpréter les bits : la même suite de 0 et de 1 peut être un nombre ou une lettre. Le type bool porte le nom de George Boole (1815–1864), qui inventa l'algèbre du vrai/faux."
    },
    {
     "id": "assegna",
     "label": "Affectation =",
     "x": 32,
     "y": 72,
     "color": "#eab308",
     "html": "Met une valeur dans une variable : x = x + 1.",
     "why": "En mathématiques, x = x + 1 est impossible ; en informatique, cela signifie « calcule à droite, puis enregistre à gauche ». Certains langages (comme Pascal) utilisent := justement pour éviter la confusion."
    },
    {
     "id": "ciclo",
     "label": "Boucle",
     "x": 80,
     "y": 47,
     "color": "#16a34a",
     "html": "Instructions répétées : for ou while.",
     "why": "Elle évite de réécrire mille fois la même chose. Ada Lovelace décrivit déjà en 1843 un procédé répété pour la machine de Babbage."
    },
    {
     "id": "for",
     "label": "for (compteur)",
     "x": 66,
     "y": 72,
     "color": "#22c55e",
     "html": "Nombre de répétitions connu : for i in range(10).",
     "why": "On l'utilise quand tu sais à l'avance combien de fois répéter. Le compteur i tient le compte des tours."
    },
    {
     "id": "while",
     "label": "while (condition)",
     "x": 92,
     "y": 72,
     "color": "#14b8a6",
     "html": "Répète tant que la condition est vraie.",
     "why": "On l'utilise quand tu ne sais pas combien de fois il faudra (par ex. jusqu'à ce que l'utilisateur devine). La condition doit tôt ou tard devenir fausse, sinon la boucle est infinie."
    },
    {
     "id": "debug",
     "label": "Débogage",
     "x": 50,
     "y": 93,
     "color": "#ef4444",
     "html": "Trouver et corriger les erreurs (bugs).",
     "why": "Du célèbre cas du papillon de nuit dans l'ordinateur Mark II (1947). Programmer, c'est aussi se tromper et corriger : c'est normal !"
    }
   ],
   "edges": [
    [
     "algoritmo",
     "programma",
     "écrit dans un langage"
    ],
    [
     "programma",
     "variabile",
     "utilise"
    ],
    [
     "programma",
     "ciclo",
     "utilise"
    ],
    [
     "variabile",
     "tipi",
     "a un"
    ],
    [
     "variabile",
     "assegna",
     "reçoit des valeurs avec"
    ],
    [
     "ciclo",
     "for",
     "type"
    ],
    [
     "ciclo",
     "while",
     "type"
    ],
    [
     "programma",
     "debug",
     "se corrige avec"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : boucles",
   "questions": [
    {
     "type": "num",
     "q": "Combien de fois « Salut » est-il affiché avec : for i in range(7): print(\"Salut\") ?",
     "answer": 7,
     "explain": "range(7) produit 0, 1, 2, 3, 4, 5, 6 : sept valeurs, sept répétitions."
    },
    {
     "type": "mc",
     "q": "Quelle boucle utilises-tu si tu ne sais pas combien de fois tu devras répéter ?",
     "options": [
      "for",
      "while",
      "aucune des deux"
     ],
     "answer": 1,
     "explain": "while répète tant qu'une condition est vraie, sans nombre fixe."
    },
    {
     "type": "tf",
     "q": "Le code « n = 5 / while n > 0: print(n) » s'arrête tout seul.",
     "answer": false,
     "explain": "n ne change jamais : la condition reste toujours vraie et la boucle est infinie."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Variable",
   "d": "Espace de mémoire avec un nom qui contient une valeur modifiable."
  },
  {
   "t": "Affectation",
   "d": "Instruction qui met une valeur dans une variable (symbole = en Python)."
  },
  {
   "t": "Chaîne",
   "d": "Suite de caractères, écrite entre guillemets : \"salut\"."
  },
  {
   "t": "Booléen",
   "d": "Type de donnée avec deux valeurs seulement : True (vrai) et False (faux)."
  },
  {
   "t": "Boucle (loop)",
   "d": "Groupe d'instructions répétées plusieurs fois."
  },
  {
   "t": "for",
   "d": "Boucle à compteur, avec un nombre de répétitions établi."
  },
  {
   "t": "while",
   "d": "Boucle à condition : répète tant que la condition est vraie."
  },
  {
   "t": "Compteur",
   "d": "Variable qui compte les tours d'une boucle."
  },
  {
   "t": "Accumulateur",
   "d": "Variable qui additionne (accumule) des valeurs à chaque tour."
  },
  {
   "t": "Boucle infinie",
   "d": "Boucle dont la condition ne devient jamais fausse : le programme ne se termine pas."
  },
  {
   "t": "Bug / débogage",
   "d": "Erreur dans le programme / activité qui consiste à la trouver et à la corriger."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Qu'est-ce qu'une variable ?",
    "options": [
     "Une erreur du programme",
     "Un contenant avec un nom pour une valeur qui peut changer",
     "Un type de boucle"
    ],
    "answer": 1,
    "explain": "Une variable est une « boîte » avec un nom et une valeur."
   },
   {
    "type": "num",
    "q": "a = 10, puis a = a - 4, puis a = a * 2. Combien vaut a ?",
    "answer": 12,
    "explain": "10 − 4 = 6; 6 × 2 = 12."
   },
   {
    "type": "mc",
    "q": "Quelle valeur est un booléen ?",
    "options": [
     "\"vrai\"",
     "True",
     "1.5"
    ],
    "answer": 1,
    "explain": "En Python, les booléens sont True et False, sans guillemets."
   },
   {
    "type": "num",
    "q": "x = 0 ; for i in range(5): x = x + 2. Combien vaut x à la fin ?",
    "answer": 10,
    "explain": "La boucle tourne 5 fois et ajoute 2 à chaque fois : 5 × 2 = 10."
   },
   {
    "type": "text",
    "q": "Quel mot-clé de Python crée une boucle qui répète tant qu'une condition est vraie ?",
    "answer": [
     "while"
    ],
    "explain": "while = « tant que »."
   },
   {
    "type": "tf",
    "q": "range(3) produit les nombres 1, 2, 3.",
    "answer": false,
    "explain": "range(3) produit 0, 1, 2 : on part de 0 et on s'arrête avant 3."
   },
   {
    "type": "mc",
    "q": "Que se passe-t-il si, dans une boucle while, la condition ne devient jamais fausse ?",
    "options": [
     "Le programme s'arrête tout de suite",
     "Une boucle infinie se crée",
     "L'ordinateur corrige l'erreur tout seul"
    ],
    "answer": 1,
    "explain": "La boucle continue pour toujours : c'est une boucle infinie."
   },
   {
    "type": "mc",
    "q": "Quelle est la différence entre = et == en Python ?",
    "options": [
     "Aucune",
     "= affecte, == compare",
     "= compare, == affecte"
    ],
    "answer": 1,
    "explain": "= met une valeur dans une variable ; == vérifie si deux valeurs sont égales."
   },
   {
    "type": "order",
    "q": "Mets les lignes dans l'ordre pour additionner les nombres de 1 à 10 et afficher le résultat.",
    "items": [
     "somme = 0",
     "for n in range(1, 11):",
     "    somme = somme + n",
     "print(somme)"
    ],
    "explain": "D'abord on remet l'accumulateur à zéro, puis la boucle additionne, enfin on affiche."
   },
   {
    "type": "num",
    "q": "Combien fait la somme des nombres de 1 à 100 calculée dans l'exemple de Gauss ?",
    "answer": 5050,
    "explain": "50 paires de 101 : 50 × 101 = 5050."
   },
   {
    "type": "text",
    "q": "Comment s'appelle la mathématicienne qui écrivit en 1843 le premier programme de l'histoire ? (nom de famille)",
    "answer": [
     "lovelace",
     "ada lovelace"
    ],
    "explain": "Ada Lovelace, pour la machine analytique de Charles Babbage."
   },
   {
    "type": "num",
    "q": "x = 1 ; for i in range(3): x = x * 3. Combien vaut x ?",
    "answer": 27,
    "explain": "1 × 3 = 3, 3 × 3 = 9, 9 × 3 = 27."
   }
  ]
 }
});
