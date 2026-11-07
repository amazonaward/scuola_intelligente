TOPIC('fr', {
 "id": "m2-mat-radici",
 "title": "La racine carrée",
 "intro": "Si tu connais l'aire d'un carré, quelle est la longueur de son côté ? Pour répondre, il faut l'opération inverse de l'élévation au carré : la <b>racine carrée</b>. Nous découvrirons les <b>carrés parfaits</b>, comment calculer les racines avec la <b>décomposition en facteurs premiers</b>, comment les <b>approcher</b> et pourquoi √2 a bouleversé les mathématiciens de l'Antiquité.",
 "minutes": 50,
 "sections": [
  {
   "type": "text",
   "title": "Qu'est-ce que la racine carrée",
   "html": "<p>La <b>racine carrée</b> d'un nombre <i>a</i> est le nombre qui, <b>multiplié par lui-même</b> (c'est-à-dire élevé au carré), donne <i>a</i>.</p>\n<p style=\"font-size:1.2em;text-align:center\"><b>√a = b</b> &nbsp;parce que&nbsp; <b>b² = a</b></p>\n<ul>\n<li>√25 = 5 parce que 5² = 25 ;</li>\n<li>√81 = 9 parce que 9² = 81 ;</li>\n<li>√0 = 0, √1 = 1.</li>\n</ul>\n<p>Le symbole <b>√</b> s'appelle le <b>radical</b> et le nombre sous le symbole s'appelle le <b>radicande</b>. L'extraction de racine est l'<b>opération inverse</b> de l'élévation au carré, comme la soustraction l'est de l'addition.</p>\n<p>Dans l'ensemble des nombres que tu connais, la racine carrée d'un nombre négatif <b>n'existe pas</b> : aucun nombre multiplié par lui-même ne donne un résultat négatif (même (−3)² = +9).</p>"
  },
  {
   "type": "svg",
   "title": "Aire et côté du carré",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/>\n<g stroke=\"#0c4a6e\" stroke-width=\"2\" fill=\"#38bdf8\">\n<rect x=\"40\" y=\"40\" width=\"44\" height=\"44\"/><rect x=\"84\" y=\"40\" width=\"44\" height=\"44\"/><rect x=\"128\" y=\"40\" width=\"44\" height=\"44\"/><rect x=\"172\" y=\"40\" width=\"44\" height=\"44\"/><rect x=\"216\" y=\"40\" width=\"44\" height=\"44\"/>\n<rect x=\"40\" y=\"84\" width=\"44\" height=\"44\"/><rect x=\"84\" y=\"84\" width=\"44\" height=\"44\"/><rect x=\"128\" y=\"84\" width=\"44\" height=\"44\"/><rect x=\"172\" y=\"84\" width=\"44\" height=\"44\"/><rect x=\"216\" y=\"84\" width=\"44\" height=\"44\"/>\n<rect x=\"40\" y=\"128\" width=\"44\" height=\"44\"/><rect x=\"84\" y=\"128\" width=\"44\" height=\"44\"/><rect x=\"128\" y=\"128\" width=\"44\" height=\"44\"/><rect x=\"172\" y=\"128\" width=\"44\" height=\"44\"/><rect x=\"216\" y=\"128\" width=\"44\" height=\"44\"/>\n<rect x=\"40\" y=\"172\" width=\"44\" height=\"44\"/><rect x=\"84\" y=\"172\" width=\"44\" height=\"44\"/><rect x=\"128\" y=\"172\" width=\"44\" height=\"44\"/><rect x=\"172\" y=\"172\" width=\"44\" height=\"44\"/><rect x=\"216\" y=\"172\" width=\"44\" height=\"44\"/>\n<rect x=\"40\" y=\"216\" width=\"44\" height=\"44\"/><rect x=\"84\" y=\"216\" width=\"44\" height=\"44\"/><rect x=\"128\" y=\"216\" width=\"44\" height=\"44\"/><rect x=\"172\" y=\"216\" width=\"44\" height=\"44\"/><rect x=\"216\" y=\"216\" width=\"44\" height=\"44\"/>\n</g>\n<text x=\"150\" y=\"285\" font-size=\"18\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">côté = 5</text>\n<text x=\"300\" y=\"80\" font-size=\"22\" fill=\"#0c4a6e\" font-weight=\"bold\">Aire = 25 carreaux</text>\n<text x=\"300\" y=\"130\" font-size=\"22\" fill=\"#0369a1\">5² = 25</text>\n<text x=\"300\" y=\"170\" font-size=\"22\" fill=\"#dc2626\" font-weight=\"bold\">√25 = 5</text>\n<text x=\"300\" y=\"215\" font-size=\"16\" fill=\"#334155\">élever au carré : du côté à l'aire</text>\n<text x=\"300\" y=\"240\" font-size=\"16\" fill=\"#334155\">racine carrée : de l'aire au côté</text>\n</svg>",
   "caption": "Le mot « carré » n'est pas un hasard : 5² est justement l'aire d'un carré de côté 5."
  },
  {
   "type": "text",
   "title": "Les carrés parfaits",
   "html": "<p>Un nombre s'appelle un <b>carré parfait</b> s'il est le carré d'un nombre entier naturel : sa racine est un nombre entier.</p>\n<table>\n<tr><td>1²=1</td><td>2²=4</td><td>3²=9</td><td>4²=16</td><td>5²=25</td><td>6²=36</td><td>7²=49</td><td>8²=64</td></tr>\n<tr><td>9²=81</td><td>10²=100</td><td>11²=121</td><td>12²=144</td><td>13²=169</td><td>14²=196</td><td>15²=225</td><td>20²=400</td></tr>\n</table>\n<p><b>Comment les reconnaître</b> : décompose le nombre en facteurs premiers. C'est un carré parfait si <b>tous les exposants sont pairs</b>.</p>\n<ul>\n<li>144 = 2⁴ × 3² → exposants 4 et 2, pairs → <b>oui</b> ;</li>\n<li>72 = 2³ × 3² → l'exposant 3 est impair → <b>non</b>.</li>\n</ul>\n<p>Astuce rapide : un carré parfait <b>ne finit jamais</b> par les chiffres 2, 3, 7 ou 8.</p>"
  },
  {
   "type": "widget",
   "title": "Construis un carré",
   "widget": "areaGrid",
   "options": {
    "w": 6,
    "h": 6,
    "max": 12
   },
   "caption": "Mets la base et la hauteur égales : l'aire est un carré parfait et le côté est sa racine. Essaie 7 × 7, 9 × 9, 12 × 12."
  },
  {
   "type": "text",
   "title": "Calculer la racine avec la décomposition",
   "html": "<p>Pour calculer la racine carrée d'un carré parfait :</p>\n<ol>\n<li><b>décompose</b> le nombre en facteurs premiers ;</li>\n<li><b>divise par deux</b> tous les exposants ;</li>\n<li><b>multiplie</b> les facteurs obtenus.</li>\n</ol>\n<p>Exemple : √576 → 576 = 2⁶ × 3² → √576 = 2³ × 3¹ = 8 × 3 = <b>24</b>. Vérification : 24 × 24 = 576 ✓</p>\n<p>Exemple : √1225 → 1225 = 5² × 7² → √1225 = 5 × 7 = <b>35</b>.</p>\n<p>Pourquoi divise-t-on les exposants par deux ? Parce qu'en élevant au carré, les exposants <b>doublent</b> : (2³ × 3)² = 2⁶ × 3². La racine fait le contraire.</p>"
  },
  {
   "type": "text",
   "title": "Propriétés des racines",
   "html": "<ul>\n<li><b>Produit</b> : √(a × b) = √a × √b → √(4 × 9) = 2 × 3 = 6 (en effet √36 = 6).</li>\n<li><b>Quotient</b> : √(a : b) = √a : √b → √(100/25) = 10/5 = 2.</li>\n<li><b>Fractions</b> : √(9/16) = 3/4.</li>\n<li><b>Attention !</b> La racine ne se distribue <b>pas</b> sur les sommes et les différences : √(9 + 16) = √25 = 5, mais √9 + √16 = 3 + 4 = 7. <b>Ce sont des résultats différents !</b></li>\n</ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : carrés parfaits et racines exactes",
   "questions": [
    {
     "type": "num",
     "q": "√144 = ?",
     "answer": 12,
     "explain": "12 × 12 = 144."
    },
    {
     "type": "mc",
     "q": "Quel nombre est un carré parfait ?",
     "options": [
      "48",
      "196",
      "250"
     ],
     "answer": 1,
     "explain": "196 = 14² (= 2² × 7²)."
    },
    {
     "type": "tf",
     "q": "√(16 + 9) = 4 + 3.",
     "answer": false,
     "explain": "√25 = 5, alors que 4 + 3 = 7 : la racine ne se distribue pas sur la somme."
    }
   ]
  },
  {
   "type": "text",
   "title": "Racines non exactes : l'approximation",
   "html": "<p>La plupart des nombres <b>ne sont pas</b> des carrés parfaits : √2, √10, √50… Dans ces cas, la racine est un nombre <b>décimal illimité non périodique</b> (un nombre <b>irrationnel</b>) et nous pouvons seulement l'<b>approcher</b>.</p>\n<p><b>Méthode par essais</b> (√50) :</p>\n<ol>\n<li>Trouve les carrés parfaits voisins : 49 = 7² et 64 = 8² → 7 &lt; √50 &lt; 8.</li>\n<li>Essaie avec les dixièmes : 7,0² = 49 ; 7,1² = 50,41 → trop ! Donc √50 ≈ <b>7,0</b> par défaut, 7,1 par excès.</li>\n<li>Essaie avec les centièmes : 7,07² = 49,98… ; 7,08² = 50,12… → √50 ≈ <b>7,07</b> à moins d'un centième près.</li>\n</ol>\n<p>Aujourd'hui, on utilise aussi les <b>tables numériques</b> (dans les manuels scolaires) et la <b>calculatrice</b> (touche √) : √50 = 7,0710678…</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : le carreau carré",
   "html": "<p>Un sol carré a une aire de <b>20,25 m²</b>. Combien mesure le côté ?</p>\n<ol>\n<li>Côté = √20,25.</li>\n<li>Je transforme en fraction : 20,25 = 2025/100.</li>\n<li>√2025 = 45 (parce que 2025 = 3⁴ × 5² → 3² × 5 = 45) et √100 = 10.</li>\n<li>Côté = 45/10 = <b>4,5 m</b>. Vérification : 4,5 × 4,5 = 20,25 ✓</li>\n</ol>\n<p>Le périmètre du sol est 4 × 4,5 = <b>18 m</b> : tu en as besoin pour acheter les plinthes !</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : l'écran de la télé",
   "html": "<p>Un téléviseur « de 50 pouces » a une <b>diagonale</b> de 50″. Avec le théorème de Pythagore, la diagonale se calcule avec une racine : pour un écran de <b>40″</b> de large et <b>30″</b> de haut :</p>\n<p>diagonale = √(40² + 30²) = √(1600 + 900) = √2500 = <b>50″</b>.</p>\n<p>Les racines carrées servent chaque fois qu'on connaît une <b>aire</b> et qu'on veut une <b>longueur</b> : concevoir des pièces, des terrains de sport, des écrans, des cartes.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le scandale de √2",
   "html": "<p>Les <b>Pythagoriciens</b> (VIᵉ–Vᵉ siècle av. J.-C.) pensaient que tout pouvait s'exprimer avec des rapports de nombres entiers. Puis ils découvrirent que la <b>diagonale d'un carré de côté 1</b>, qui mesure √2, <b>n'est pas une fraction</b> ! Selon une légende, le pythagoricien <b>Hippase de Métaponte</b>, qui révéla le secret, mourut dans un naufrage comme « punition des dieux ». Aujourd'hui, nous savons que √2 = 1,41421356… continue à l'infini sans jamais se répéter.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le symbole √",
   "html": "<p>Le symbole <b>√</b> dérive probablement d'un <b>« r » stylisé</b>, initiale du latin <i>radix</i> (« racine »). Il apparut en imprimé en <b>1525</b> dans le livre de l'Allemand <b>Christoph Rudolff</b> ; le trait au-dessus du radicande fut ajouté par <b>Descartes</b> en 1637. Et la tablette babylonienne <b>YBC 7289</b> (vers 1800–1600 av. J.-C.) montre un carré avec sa diagonale et la valeur de √2 avec une erreur de moins d'un millionième !</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre la racine carrée",
   "intro": "La racine carrée peut se voir, se construire et même se « deviner » comme le faisaient les Babyloniens.",
   "tabs": [
    {
     "label": "🧊 Carré de petits cubes en 3D",
     "html": "<p>Voici <b>49 petits cubes</b> disposés en un carré 7 × 7. Le côté du carré est la racine : √49 = 7. Bouge les curseurs : arrives-tu à faire un carré avec 50 cubes ? Non ! 50 n'est pas un carré parfait : il reste toujours quelque chose ou il en manque.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 7,
      "b": 7
     }
    },
    {
     "label": "🏺 Méthode babylonienne",
     "html": "<p>Les Babyloniens (et plus tard <b>Héron d'Alexandrie</b>, Iᵉʳ siècle apr. J.-C.) calculaient les racines avec une méthode géniale : « <b>devine et fais la moyenne</b> ».</p>\n<p>Pour √10 : je pars d'un essai, 3.</p>\n<ol>\n<li>10 : 3 = 3,33. La racine est entre 3 et 3,33 → moyenne : (3 + 3,33) : 2 = <b>3,17</b>.</li>\n<li>10 : 3,17 = 3,155. Moyenne : (3,17 + 3,155) : 2 = <b>3,1625</b>.</li>\n</ol>\n<p>Dès la deuxième étape : 3,1625² = 10,0014. La vraie valeur est 3,16227… ! Chaque étape double à peu près les chiffres exacts. Les calculatrices utilisent des méthodes semblables.</p>"
    },
    {
     "label": "🔢 Somme des impairs",
     "html": "<p>Regarde quelle magie : tout carré parfait est la <b>somme des premiers nombres impairs</b> !</p>\n<ul>\n<li>1 = 1 = 1²</li><li>1 + 3 = 4 = 2²</li><li>1 + 3 + 5 = 9 = 3²</li><li>1 + 3 + 5 + 7 = 16 = 4²</li>\n</ul>\n<p>Donc, pour trouver √n, tu peux <b>soustraire</b> de n les nombres impairs 1, 3, 5, 7… et compter combien de soustractions il faut pour arriver à 0. √25 : 25−1−3−5−7−9 = 0 → <b>5</b> soustractions → √25 = 5. Le pourquoi se voit sur le dessin : chaque impair est un « L » qui agrandit le carré.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#fefce8\"/>\n<rect x=\"40\" y=\"170\" width=\"40\" height=\"40\" fill=\"#ef4444\" stroke=\"#fff\" stroke-width=\"2\"/>\n<rect x=\"80\" y=\"170\" width=\"40\" height=\"40\" fill=\"#f97316\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"80\" y=\"130\" width=\"40\" height=\"40\" fill=\"#f97316\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"40\" y=\"130\" width=\"40\" height=\"40\" fill=\"#f97316\" stroke=\"#fff\" stroke-width=\"2\"/>\n<rect x=\"120\" y=\"170\" width=\"40\" height=\"40\" fill=\"#22c55e\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"120\" y=\"130\" width=\"40\" height=\"40\" fill=\"#22c55e\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"120\" y=\"90\" width=\"40\" height=\"40\" fill=\"#22c55e\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"80\" y=\"90\" width=\"40\" height=\"40\" fill=\"#22c55e\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"40\" y=\"90\" width=\"40\" height=\"40\" fill=\"#22c55e\" stroke=\"#fff\" stroke-width=\"2\"/>\n<rect x=\"160\" y=\"170\" width=\"40\" height=\"40\" fill=\"#3b82f6\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"160\" y=\"130\" width=\"40\" height=\"40\" fill=\"#3b82f6\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"160\" y=\"90\" width=\"40\" height=\"40\" fill=\"#3b82f6\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"160\" y=\"50\" width=\"40\" height=\"40\" fill=\"#3b82f6\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"120\" y=\"50\" width=\"40\" height=\"40\" fill=\"#3b82f6\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"80\" y=\"50\" width=\"40\" height=\"40\" fill=\"#3b82f6\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"40\" y=\"50\" width=\"40\" height=\"40\" fill=\"#3b82f6\" stroke=\"#fff\" stroke-width=\"2\"/>\n<text x=\"260\" y=\"80\" font-size=\"20\" fill=\"#ef4444\" font-weight=\"bold\">1</text>\n<text x=\"290\" y=\"80\" font-size=\"20\" fill=\"#f97316\" font-weight=\"bold\">+ 3</text>\n<text x=\"345\" y=\"80\" font-size=\"20\" fill=\"#16a34a\" font-weight=\"bold\">+ 5</text>\n<text x=\"400\" y=\"80\" font-size=\"20\" fill=\"#2563eb\" font-weight=\"bold\">+ 7</text>\n<text x=\"455\" y=\"80\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">= 16</text>\n<text x=\"260\" y=\"130\" font-size=\"20\" fill=\"#1f2937\">4 « couches » en L</text>\n<text x=\"260\" y=\"170\" font-size=\"22\" fill=\"#1f2937\" font-weight=\"bold\">√16 = 4</text>\n</svg>"
    },
    {
     "label": "📐 Le triangle de Pythagore",
     "html": "<p>Les racines carrées apparaissent chaque fois que tu utilises le <b>théorème de Pythagore</b> : l'hypoténuse est la racine de la somme des carrés des côtés de l'angle droit. Bouge les curseurs et observe : l'aire du grand carré est un nombre, le côté est sa racine.</p>",
     "widget": "pythagoras",
     "options": {}
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte de la racine carrée",
   "nodes": [
    {
     "id": "quad",
     "label": "Élévation au carré",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "b² = b × b.",
     "why": "On l'appelle « carré » parce que b² est l'<b>aire d'un carré</b> de côté b : les Grecs pensaient les nombres comme des figures géométriques (nombres « carrés », « triangulaires »…)."
    },
    {
     "id": "radice",
     "label": "Racine carrée",
     "x": 50,
     "y": 28,
     "color": "#dc2626",
     "html": "√a = b si b² = a.",
     "why": "C'est l'opération <b>inverse</b> du carré. Le nom « racine » vient de la traduction latine de l'arabe <i>jidhr</i> (« racine d'une plante »), utilisé par <b>al-Khwarizmi</b> au IXᵉ siècle : le nombre d'où « pousse » le carré."
    },
    {
     "id": "perfetti",
     "label": "Carrés parfaits",
     "x": 18,
     "y": 50,
     "color": "#16a34a",
     "html": "1, 4, 9, 16, 25… racine entière.",
     "why": "Ce sont des carrés parfaits si, dans la décomposition, tous les exposants sont pairs, parce qu'élever au carré double chaque exposant (propriété des puissances)."
    },
    {
     "id": "scomp",
     "label": "Décomposition",
     "x": 18,
     "y": 76,
     "color": "#0d9488",
     "html": "Facteurs premiers, exposants divisés par deux.",
     "why": "Elle repose sur le <b>théorème fondamental de l'arithmétique</b> (déjà chez Euclide, Éléments, livre IX) : tout nombre se décompose d'une seule façon en facteurs premiers."
    },
    {
     "id": "approx",
     "label": "Approximation",
     "x": 50,
     "y": 56,
     "color": "#ea580c",
     "html": "Par essais, tables, calculatrice.",
     "why": "Quand la racine n'est pas entière, on la cherche entre deux carrés parfaits consécutifs et on resserre l'intervalle chiffre par chiffre. La méthode de <b>Héron</b> (Iᵉʳ siècle apr. J.-C.) le fait beaucoup plus vite."
    },
    {
     "id": "irraz",
     "label": "Nombres irrationnels",
     "x": 82,
     "y": 50,
     "color": "#7c3aed",
     "html": "√2, √3, √5… : décimaux infinis non périodiques.",
     "why": "La preuve que √2 n'est pas une fraction est attribuée aux <b>Pythagoriciens</b> et se trouve chez Aristote : si √2 = p/q irréductible, alors p et q devraient être tous deux pairs, ce qui est impossible."
    },
    {
     "id": "propr",
     "label": "Propriétés",
     "x": 82,
     "y": 76,
     "color": "#ca8a04",
     "html": "√(a·b) = √a·√b ; √(a/b) = √a/√b ; PAS sur la somme.",
     "why": "Elles découlent des propriétés des puissances : (√a·√b)² = a·b. Pour la somme, cela ne marche pas parce que (√a + √b)² = a + b + 2√a√b, il y a un morceau en plus."
    },
    {
     "id": "pitagora",
     "label": "Théorème de Pythagore",
     "x": 50,
     "y": 88,
     "color": "#64748b",
     "html": "Hypoténuse = √(c₁² + c₂²).",
     "why": "Le théorème relie des aires de carrés construits sur les côtés : pour revenir des aires aux longueurs, il faut la racine. C'est là que les Grecs rencontrèrent pour la première fois √2."
    }
   ],
   "edges": [
    [
     "quad",
     "radice",
     "inverse"
    ],
    [
     "radice",
     "perfetti",
     "exacte si"
    ],
    [
     "perfetti",
     "scomp",
     "se calcule avec"
    ],
    [
     "radice",
     "approx",
     "sinon"
    ],
    [
     "approx",
     "irraz",
     "parce que ce sont"
    ],
    [
     "radice",
     "propr",
     "a"
    ],
    [
     "approx",
     "pitagora",
     "sert en"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : approximer",
   "questions": [
    {
     "type": "mc",
     "q": "Entre quels nombres entiers se trouve √30 ?",
     "options": [
      "4 et 5",
      "5 et 6",
      "6 et 7"
     ],
     "answer": 1,
     "explain": "25 < 30 < 36, donc 5 < √30 < 6."
    },
    {
     "type": "mc",
     "q": "√2 est…",
     "options": [
      "un nombre entier",
      "une fraction",
      "un nombre irrationnel"
     ],
     "answer": 2,
     "explain": "√2 = 1,41421… est illimité et non périodique."
    },
    {
     "type": "num",
     "q": "√(9/25) = 3/? (écris le dénominateur)",
     "answer": 5,
     "explain": "√9/√25 = 3/5."
    }
   ]
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>√a = b signifie b² = a. La racine est l'opération inverse du carré.</li>\n<li><b>Carré parfait</b> : tous les exposants des facteurs premiers sont pairs.</li>\n<li>Racine avec la décomposition : <b>divise les exposants par deux</b>.</li>\n<li>Racines non exactes : on les <b>approche</b> (par défaut / par excès) et ce sont des nombres irrationnels.</li>\n<li>√(a·b) = √a·√b, mais √(a + b) ≠ √a + √b.</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Racine carrée",
   "d": "Nombre qui, élevé au carré, donne le radicande."
  },
  {
   "t": "Radicande",
   "d": "Le nombre qui se trouve sous le signe de racine."
  },
  {
   "t": "Carré parfait",
   "d": "Nombre entier naturel qui est le carré d'un autre nombre entier naturel."
  },
  {
   "t": "Approximation par défaut",
   "d": "Valeur un peu plus petite que la vraie."
  },
  {
   "t": "Approximation par excès",
   "d": "Valeur un peu plus grande que la vraie."
  },
  {
   "t": "Nombre irrationnel",
   "d": "Décimal illimité non périodique, qu'on ne peut pas écrire comme une fraction."
  },
  {
   "t": "Opération inverse",
   "d": "Opération qui annule l'effet d'une autre (racine ↔ carré)."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "√225 = ?",
    "answer": 15,
    "explain": "15 × 15 = 225."
   },
   {
    "type": "mc",
    "q": "Lequel de ces nombres N'est PAS un carré parfait ?",
    "options": [
     "121",
     "169",
     "180"
    ],
    "answer": 2,
    "explain": "180 = 2² × 3² × 5 : l'exposant de 5 est impair."
   },
   {
    "type": "num",
    "q": "En utilisant la décomposition 2⁴ × 3² × 5², calcule la racine carrée de ce nombre.",
    "answer": 60,
    "explain": "Je divise les exposants par deux : 2² × 3 × 5 = 60."
   },
   {
    "type": "tf",
    "q": "√36 + √64 = √100.",
    "answer": false,
    "explain": "6 + 8 = 14, alors que √100 = 10."
   },
   {
    "type": "mc",
    "q": "√70 est compris entre…",
    "options": [
     "7 et 8",
     "8 et 9",
     "9 et 10"
    ],
    "answer": 1,
    "explain": "64 < 70 < 81."
   },
   {
    "type": "num",
    "q": "Un carré a une aire de 81 cm². Combien mesure le côté ?",
    "answer": 9,
    "unit": "cm",
    "explain": "√81 = 9 cm."
   },
   {
    "type": "num",
    "q": "√(4 × 49) = ?",
    "answer": 14,
    "explain": "√4 × √49 = 2 × 7 = 14."
   },
   {
    "type": "mc",
    "q": "Un carré parfait peut finir par le chiffre…",
    "options": [
     "7",
     "6",
     "8"
    ],
    "answer": 1,
    "explain": "Les carrés finissent par 0, 1, 4, 5, 6, 9 (ex. 16, 36)."
   },
   {
    "type": "num",
    "q": "Approche √20 à moins d'un dixième, par défaut.",
    "answer": 4.4,
    "tol": 0.001,
    "explain": "4,4² = 19,36 et 4,5² = 20,25: √20 ≈ 4,4."
   },
   {
    "type": "tf",
    "q": "La racine carrée de −9 n'existe pas (parmi les nombres que tu connais).",
    "answer": true,
    "explain": "Aucun nombre au carré ne donne un résultat négatif."
   },
   {
    "type": "order",
    "q": "Classe du plus petit au plus grand.",
    "items": [
     "√10",
     "√16",
     "4,5",
     "√25"
    ],
    "explain": "3,16… < 4 < 4,5 < 5."
   }
  ],
  "gen": [
   [
    "sqrt",
    3
   ]
  ]
 }
});
