TOPIC('fr', {
 "id": "p4-mat-divisioni-due-cifre",
 "title": "Divisions avec un diviseur à deux chiffres",
 "intro": "450 élèves partent en sortie scolaire avec des autocars de 52 places : combien d'autocars faut-il ? Pour répondre, tu dois diviser par un nombre de <b>deux chiffres</b>. Cela semble difficile, mais avec une bonne <b>estimation</b>, quelques <b>stratégies</b> et la <b>preuve</b>, cela devient un jeu d'enfant !",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Révisons : les termes de la division",
   "html": "<p>Dans la division <b>864 : 24 = 36</b> :</p>\n<ul>\n<li><b>864</b> est le <b>dividende</b> (la quantité à diviser) ;</li>\n<li><b>24</b> est le <b>diviseur</b> (en combien de parts on divise, ou bien la taille de chaque groupe) ;</li>\n<li><b>36</b> est le <b>quotient</b> (le résultat) ;</li>\n<li>s'il reste quelque chose, c'est le <b>reste</b>, qui doit toujours être <b>plus petit que le diviseur</b>.</li>\n</ul>\n<p>La division sert dans deux situations :</p>\n<ul>\n<li><b>partager</b> : 864 images partagées entre 24 enfants → combien chacun ?</li>\n<li><b>contenir</b> : 864 images dans des pochettes de 24 → combien de pochettes ?</li>\n</ul>\n<p>La division est l'<b>opération inverse</b> de la multiplication : si 36 × 24 = 864, alors 864 : 24 = 36.</p>"
  },
  {
   "type": "text",
   "title": "Étape 1 – Estimer le quotient",
   "html": "<p>Le secret pour diviser par deux chiffres, c'est d'<b>estimer</b>, c'est-à-dire de deviner intelligemment combien de fois le diviseur « tient » dans le dividende.</p>\n<p><b>Astuce du doigt</b> : cache avec ton doigt le dernier chiffre du diviseur et aussi le dernier chiffre de la partie du dividende que tu es en train de diviser.</p>\n<ul>\n<li>86 : 24 → cache le 4 et le 6 → <b>8 : 2 = 4</b>. Essaie 4 : 4 × 24 = 96. C'est plus que 86 ! Trop grand → essaie <b>3</b> : 3 × 24 = 72 ✅.</li>\n</ul>\n<p>Une astuce encore meilleure : <b>arrondis le diviseur</b> à la dizaine la plus proche. 24 est proche de 20, 47 est proche de 50, 31 est proche de 30.</p>\n<ul>\n<li>145 : 31 → pense 150 : 30 = <b>5</b> → 5 × 31 = 155, trop → <b>4</b> : 4 × 31 = 124 ✅ (reste 21).</li>\n</ul>\n<p>Si le produit est <b>trop grand</b>, baisse le nombre de 1 ; si le reste est <b>supérieur ou égal au diviseur</b>, monte-le de 1.</p>"
  },
  {
   "type": "text",
   "title": "Étape 2 – La division posée, pas à pas",
   "html": "<p>Calculons <b>864 : 24</b> avec la méthode de la division posée (en « potence »).</p>\n<ol>\n<li><b>Je prends les chiffres</b> : 8 ne contient pas 24, donc je prends <b>86</b>.</li>\n<li><b>J'estime</b> : dans 86, combien de fois tient 24 ? 8 : 2 = 4, mais 4 × 24 = 96 &gt; 86 → <b>3</b>. J'écris 3 au quotient.</li>\n<li><b>Je multiplie et je soustrais</b> : 3 × 24 = 72 ; 86 − 72 = <b>14</b>. Le reste 14 est plus petit que 24 ✅.</li>\n<li><b>J'abaisse</b> le chiffre suivant (4) : j'obtiens <b>144</b>.</li>\n<li><b>J'estime</b> : 144 : 24 → 14 : 2 = 7, mais 7 × 24 = 168, trop ; 6 × 24 = <b>144</b> ✅. J'écris 6 au quotient.</li>\n<li><b>Je soustrais</b> : 144 − 144 = <b>0</b>. Il n'y a plus de chiffres à abaisser : c'est fini !</li>\n</ol>\n<p>Résultat : <b>864 : 24 = 36</b>, reste <b>0</b>.</p>"
  },
  {
   "type": "svg",
   "title": "864 : 24 posée",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<g font-family=\"monospace\" font-size=\"34\" font-weight=\"bold\">\n<text x=\"80\" y=\"60\" fill=\"#1f2937\">8 6 4</text>\n<text x=\"300\" y=\"60\" fill=\"#2563eb\">2 4</text>\n<text x=\"300\" y=\"115\" fill=\"#16a34a\">3 6</text>\n<text x=\"80\" y=\"115\" fill=\"#dc2626\">7 2</text>\n<text x=\"40\" y=\"115\" fill=\"#dc2626\">−</text>\n<text x=\"80\" y=\"170\" fill=\"#1f2937\">1 4 4</text>\n<text x=\"80\" y=\"225\" fill=\"#dc2626\">1 4 4</text>\n<text x=\"40\" y=\"225\" fill=\"#dc2626\">−</text>\n<text x=\"160\" y=\"280\" fill=\"#1f2937\">0</text>\n</g>\n<line x1=\"280\" y1=\"25\" x2=\"280\" y2=\"80\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<line x1=\"280\" y1=\"75\" x2=\"400\" y2=\"75\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<line x1=\"70\" y1=\"128\" x2=\"160\" y2=\"128\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<line x1=\"70\" y1=\"238\" x2=\"200\" y2=\"238\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<path d=\"M185 45 Q215 100 182 150\" stroke=\"#f97316\" stroke-width=\"3\" fill=\"none\" stroke-dasharray=\"6 5\"/>\n<text x=\"215\" y=\"105\" font-size=\"15\" fill=\"#c2410c\">j'abaisse</text>\n<text x=\"215\" y=\"122\" font-size=\"15\" fill=\"#c2410c\">le 4</text>\n<g font-size=\"17\" fill=\"#334155\">\n<text x=\"420\" y=\"58\">← diviseur</text>\n<text x=\"420\" y=\"113\">← quotient</text>\n<text x=\"430\" y=\"170\">86 : 24 → 3</text>\n<text x=\"430\" y=\"195\">3 × 24 = 72</text>\n<text x=\"430\" y=\"230\">144 : 24 → 6</text>\n<text x=\"430\" y=\"255\">6 × 24 = 144</text>\n<text x=\"230\" y=\"282\">← reste</text>\n</g>\n</svg>",
   "caption": "Le diviseur va en haut à droite, le quotient en dessous ; à gauche on écrit les produits, les soustractions et les chiffres abaissés."
  },
  {
   "type": "text",
   "title": "Étape 3 – La preuve",
   "html": "<p>Pour être sûr du résultat, fais la <b>preuve</b>, en utilisant l'opération inverse :</p>\n<p style=\"font-size:1.2em\"><b>quotient × diviseur + reste = dividende</b></p>\n<ul>\n<li>864 : 24 = 36 → preuve : 36 × 24 = 864 ✅</li>\n<li>1 000 : 32 = 31 reste 8 → preuve : 31 × 32 = 992 ; 992 + 8 = 1 000 ✅</li>\n</ul>\n<p>Rappelle-toi aussi le <b>contrôle du reste</b> : le reste doit toujours être <b>plus petit que le diviseur</b>. Si tu trouves 1 000 : 32 = 30 reste 40, il y a une erreur : 40 &gt; 32, le quotient était trop petit !</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : estimation et preuve",
   "questions": [
    {
     "type": "mc",
     "q": "Pour estimer 183 : 29, quelle division « facile » peux-tu imaginer ?",
     "options": [
      "180 : 30",
      "100 : 20",
      "200 : 20"
     ],
     "answer": 0,
     "explain": "29 est proche de 30 et 183 est proche de 180 : 180 : 30 = 6."
    },
    {
     "type": "num",
     "q": "Fais la preuve : un enfant a trouvé 500 : 23 = 21 reste 17. Combien font 21 × 23 + 17 ?",
     "answer": 500,
     "explain": "21 × 23 = 483 ; 483 + 17 = 500 : la division est juste !"
    },
    {
     "type": "tf",
     "q": "Dans une division par 15, le reste peut être 18.",
     "answer": false,
     "explain": "Le reste doit être plus petit que le diviseur (15)."
    }
   ]
  },
  {
   "type": "text",
   "title": "Étape 4 – La propriété d'invariance : un raccourci",
   "html": "<p>Si tu <b>multiplies</b> ou <b>divises</b> le dividende et le diviseur par le <b>même nombre</b>, le quotient <b>ne change pas</b>. C'est la <b>propriété d'invariance</b>.</p>\n<ul>\n<li>720 : 15 → je double les deux → 1440 : 30 → je divise par 10 → <b>144 : 3 = 48</b>. Beaucoup plus facile !</li>\n<li>600 : 25 → je multiplie par 4 → 2400 : 100 = <b>24</b>.</li>\n<li>840 : 40 → je divise par 10 → 84 : 4 = <b>21</b>.</li>\n</ul>\n<p>Attention : s'il y a un <b>reste</b> dans la division, le quotient reste le même mais le reste change (il est lui aussi multiplié ou divisé). Utilise ce raccourci surtout pour les divisions exactes.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : les autocars de la sortie",
   "html": "<p>450 élèves doivent partir en sortie. Chaque autocar a <b>52 places</b>. Combien d'autocars faut-il ?</p>\n<ol>\n<li>Estimation : 450 : 50 = 9 → j'essaie 9 × 52 = 468 &gt; 450, trop → <b>8</b>.</li>\n<li>8 × 52 = 416 ; 450 − 416 = <b>34</b>. Donc 450 : 52 = <b>8 reste 34</b>.</li>\n<li>Preuve : 8 × 52 + 34 = 416 + 34 = 450 ✅.</li>\n</ol>\n<p>Mais attention à la <b>signification du reste</b> ! 8 autocars transportent 416 élèves ; il reste 34 élèves à pied. Il faut un autre autocar : en tout <b>9 autocars</b>.</p>\n<p>Dans les problèmes, il faut toujours se demander : <b>le reste, on l'ignore, on l'ajoute ou on l'utilise ?</b></p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : les œufs en boîtes",
   "html": "<p>Une ferme ramasse <b>1 000 œufs</b> et les met dans des boîtes de <b>12</b> (une douzaine). Combien de boîtes pleines ? Combien d'œufs restent ?</p>\n<ol>\n<li>100 : 12 → 10 : 1 = 10 ? Trop ! Le quotient partiel est toujours d'un seul chiffre (9 au maximum) : j'essaie 9 → 9 × 12 = 108 &gt; 100 → <b>8</b> : 8 × 12 = 96 ; 100 − 96 = 4.</li>\n<li>J'abaisse le 0 : <b>40</b> : 12 → <b>3</b> : 3 × 12 = 36 ; 40 − 36 = 4.</li>\n<li>Résultat : <b>1 000 : 12 = 83 reste 4</b>.</li>\n<li>Preuve : 83 × 12 = 996 ; 996 + 4 = 1 000 ✅.</li>\n</ol>\n<p>La ferme remplit <b>83 boîtes</b> et il reste <b>4 œufs</b> (pour l'omelette !).</p>"
  },
  {
   "type": "3d",
   "title": "La division comme rectangle de petits cubes",
   "scene": "blocks",
   "options": {
    "mode": "array",
    "a": 6,
    "b": 12,
    "max": 12
   },
   "caption": "72 petits cubes rangés en files de 12 : combien de files ? 72 : 12 = 6. Chaque division exacte est un rectangle : dividende = nombre total de petits cubes, diviseur = petits cubes par file, quotient = nombre de files."
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? La méthode en « potence » n'est pas la même partout",
   "html": "<p>La façon d'écrire la division que tu utilises, avec le diviseur en haut à droite et le quotient en dessous, est typique de la <b>France</b>, de l'<b>Italie</b> et d'autres pays européens (Espagne, Amérique latine). Dans les <b>pays anglo-saxons</b>, on utilise la <b>« long division »</b> : le dividende se trouve sous une sorte de « toit » et le quotient s'écrit <b>au-dessus</b>. En Allemagne, on écrit tout sur une ligne : <i>864 : 24 = 36</i>, avec les calculs en dessous.</p>\n<p>La méthode change, mais les étapes (estimer, multiplier, soustraire, abaisser) sont toujours les mêmes !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Diviser par zéro est impossible",
   "html": "<p>On peut diviser par 1, par 24, par 1 000… mais <b>jamais par zéro</b> ! Pourquoi ? Fais la preuve : 8 : 0 = ? Il devrait exister un nombre qui, multiplié par 0, donne 8. Mais n'importe quel nombre multiplié par 0 donne 0 ! Donc la division par zéro n'a <b>aucun sens</b>.</p>\n<p>Les calculatrices le savent aussi : si tu essaies, elles écrivent <b>« Erreur »</b> ou <b>« E »</b>.</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li><b>Dividende : diviseur = quotient</b> (+ reste).</li>\n<li>Le <b>reste</b> est toujours <b>plus petit que le diviseur</b>.</li>\n<li>Étapes : <b>je prends les chiffres → j'estime → je multiplie → je soustrais → j'abaisse</b>, et je recommence.</li>\n<li>Pour estimer, <b>arrondis le diviseur</b> à la dizaine (ou utilise l'astuce du doigt).</li>\n<li>Produit trop grand → baisse de 1 ; reste trop grand → monte de 1.</li>\n<li><b>Preuve</b> : quotient × diviseur + reste = dividende.</li>\n<li><b>Propriété d'invariance</b> : × ou : le dividende et le diviseur par le même nombre, le quotient ne change pas.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de faire les divisions",
   "intro": "Si la méthode posée te bloque, essaie ces chemins : par gros morceaux (Angleterre), avec des sauts en arrière, comme les anciens Égyptiens ou avec le tableau des multiples.",
   "tabs": [
    {
     "label": "🇬🇧 Par gros morceaux (chunking)",
     "html": "<p>Dans les écoles anglaises, on enseigne le <b>chunking</b> (« par morceaux ») : au lieu de deviner le bon chiffre, tu retires du dividende de <b>gros morceaux faciles</b> (× 10, × 5, × 2…) jusqu'à ce qu'il ne reste plus rien.</p>\n<p><b>864 : 24</b></p>\n<table>\n<tr><th>Je retire</th><th>Combien de fois 24</th><th>Il reste</th></tr>\n<tr><td>240 (= 24 × 10)</td><td>10</td><td>624</td></tr>\n<tr><td>240 (= 24 × 10)</td><td>10</td><td>384</td></tr>\n<tr><td>240 (= 24 × 10)</td><td>10</td><td>144</td></tr>\n<tr><td>120 (= 24 × 5)</td><td>5</td><td>24</td></tr>\n<tr><td>24 (= 24 × 1)</td><td>1</td><td>0</td></tr>\n<tr><td><b>Total</b></td><td><b>36</b></td><td></td></tr>\n</table>\n<p>C'est plus long, mais <b>on ne se trompe jamais dans l'estimation</b> : tu n'utilises que les tables que tu connais bien !</p>"
    },
    {
     "label": "🐸 Sauts en arrière",
     "html": "<p>Diviser veut dire aussi : <b>combien de fois puis-je retirer le diviseur ?</b> Sur la droite, pars du dividende et fais des <b>sauts en arrière</b> aussi longs que le diviseur, jusqu'à arriver à 0 (ou jusqu'à ne plus pouvoir sauter).</p>\n<p>Essaie avec <b>96 : 24</b> : la grenouille part de 96, règle le saut à 24 et appuie sur « − ». Compte les sauts : 96 → 72 → 48 → 24 → 0. Cela fait <b>4 sauts</b> : 96 : 24 = 4 !</p>\n<p>Puis essaie avec 100 : 24 : après 4 sauts, tu arrives à 4 et tu ne peux plus sauter. 4, c'est le <b>reste</b>.</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 100,
      "step": 24,
      "start": 96,
      "marks": [
       72,
       48,
       24,
       0
      ]
     }
    },
    {
     "label": "𓂀 Comme les Égyptiens (doublements)",
     "html": "<p>Les anciens Égyptiens divisaient en utilisant seulement les <b>doublements</b> ! Pour faire <b>864 : 24</b>, ils écrivaient un tableau : 1 → 24, 2 → 48, 4 → 96, 8 → 192, 16 → 384, 32 → 768.</p>\n<p>Puis ils cherchaient quelles lignes additionnées donnent 864 : <b>768 + 96 = 864</b>, c'est-à-dire les lignes <b>32</b> et <b>4</b>. Donc le quotient est <b>32 + 4 = 36</b> !</p>\n<p>Dans le widget ci-dessous, qui fait la « multiplication égyptienne » 36 × 24, tu vois justement ce tableau : les lignes retenues sont celles qui, additionnées, font 864.</p>",
     "widget": "egyptianMultiply",
     "options": {
      "a": 36,
      "b": 24
     }
    },
    {
     "label": "📋 Le tableau des multiples",
     "html": "<p>Si l'estimation te fait peur, avant de commencer écris la <b>table du diviseur</b> : ainsi tu n'as pas à deviner, tu n'as qu'à regarder !</p>\n<p>Pour diviser par <b>24</b> :</p>\n<table>\n<tr><td>24 × 1 = 24</td><td>24 × 4 = 96</td><td>24 × 7 = 168</td></tr>\n<tr><td>24 × 2 = 48</td><td>24 × 5 = 120</td><td>24 × 8 = 192</td></tr>\n<tr><td>24 × 3 = 72</td><td>24 × 6 = 144</td><td>24 × 9 = 216</td></tr>\n</table>\n<p>Maintenant 86 : 24 ? Je cherche le plus grand multiple qui ne dépasse pas 86 : <b>72</b> (× 3). Et 144 : 24 ? Il y a exactement <b>144</b> (× 6). Quotient : <b>36</b>.</p>\n<p>Astuce rapide pour construire le tableau : ajoute chaque fois 24 au nombre précédent (24, 48, 72, 96…).</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte de la division",
   "nodes": [
    {
     "id": "divisione",
     "label": "Division",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Opération pour partager ou regrouper : dividende : diviseur = quotient.",
     "why": "Elle est née de besoins pratiques : diviser la récolte, les rations des soldats, l'héritage. Les Égyptiens et les Babyloniens savaient déjà diviser il y a 4000 ans, les premiers avec les doublements, les seconds en utilisant des tables de nombres inverses."
    },
    {
     "id": "inversa",
     "label": "Inverse de la multiplication",
     "x": 18,
     "y": 28,
     "color": "#16a34a",
     "html": "Si 36 × 24 = 864, alors 864 : 24 = 36.",
     "why": "Diviser veut dire chercher le facteur manquant : 24 × ? = 864. C'est pourquoi bien connaître les tables est la clé pour diviser."
    },
    {
     "id": "termini",
     "label": "Dividende, diviseur, quotient, reste",
     "x": 50,
     "y": 28,
     "color": "#f59e0b",
     "html": "Les quatre noms de la division.",
     "why": "« Quotient » vient du latin <i>quotiens</i>, « combien de fois » : combien de fois le diviseur tient dans le dividende."
    },
    {
     "id": "resto",
     "label": "Reste < diviseur",
     "x": 82,
     "y": 28,
     "color": "#ef4444",
     "html": "Ce qui reste est toujours plus petit que le diviseur.",
     "why": "Si le reste était égal ou supérieur au diviseur, il y tiendrait encore un groupe entier : le quotient serait trop petit. Cette idée était déjà à la base des calculs d'<b>Euclide</b> (vers 300 av. J.-C.), qui utilisait les divisions avec reste dans ses <i>Éléments</i>."
    },
    {
     "id": "stima",
     "label": "Estimation",
     "x": 18,
     "y": 58,
     "color": "#a855f7",
     "html": "Arrondir le diviseur pour deviner le chiffre du quotient.",
     "why": "Cela fonctionne parce que, en arrondissant un peu le diviseur, le quotient change peu. Au maximum, tu dois corriger de 1 ou 2 : c'est une manière intelligente d'« essayer et corriger »."
    },
    {
     "id": "algoritmo",
     "label": "Algorithme posé",
     "x": 50,
     "y": 58,
     "color": "#0ea5e9",
     "html": "Je prends les chiffres, j'estime, je multiplie, je soustrais, j'abaisse.",
     "why": "Il fonctionne grâce à la <b>valeur positionnelle</b> : on divise d'abord la partie des centaines, puis des dizaines, puis des unités. La méthode est arrivée en Europe avec les chiffres indo-arabes ; Fibonacci l'a expliquée dans le <i>Liber Abaci</i> (1202) et en Italie elle a été perfectionnée dans les écoles d'abaque des marchands."
    },
    {
     "id": "prova",
     "label": "Preuve",
     "x": 82,
     "y": 58,
     "color": "#14b8a6",
     "html": "quotient × diviseur + reste = dividende.",
     "why": "C'est la définition même de la division avec reste : dividende = diviseur × quotient + reste. Utiliser l'opération inverse est le contrôle le plus sûr."
    },
    {
     "id": "invariantiva",
     "label": "Propriété d'invariance",
     "x": 34,
     "y": 86,
     "color": "#64748b",
     "html": "× ou : le dividende et le diviseur par le même nombre, le quotient ne change pas.",
     "why": "Si tu doubles les bonbons et aussi les enfants, chacun reçoit toujours le même nombre de bonbons ! C'est la même idée que les fractions équivalentes : 720/15 = 1440/30."
    },
    {
     "id": "zero",
     "label": "Jamais par zéro",
     "x": 66,
     "y": 86,
     "color": "#be185d",
     "html": "Diviser par zéro n'a aucun sens.",
     "why": "Aucun nombre multiplié par 0 ne donne un nombre différent de 0, donc la preuve ne peut jamais réussir. Les mathématiciens disent que la division par zéro est « impossible » ou « non définie »."
    }
   ],
   "edges": [
    [
     "divisione",
     "inversa",
     "est l'"
    ],
    [
     "divisione",
     "termini",
     "a"
    ],
    [
     "termini",
     "resto",
     "règle"
    ],
    [
     "inversa",
     "stima",
     "aide l'"
    ],
    [
     "stima",
     "algoritmo",
     "s'utilise dans l'"
    ],
    [
     "algoritmo",
     "prova",
     "se contrôle avec"
    ],
    [
     "inversa",
     "prova",
     "repose sur"
    ],
    [
     "divisione",
     "invariantiva",
     "propriété"
    ],
    [
     "divisione",
     "zero",
     "attention"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : calcule",
   "questions": [
    {
     "type": "num",
     "q": "Combien font 672 : 32 ?",
     "answer": 21,
     "explain": "67 : 32 = 2 (64), reste 3 ; j'abaisse le 2 → 32 : 32 = 1. Quotient 21."
    },
    {
     "type": "num",
     "q": "Utilise la propriété d'invariance : 900 : 25 = ?",
     "answer": 36,
     "explain": "× 4 : 3600 : 100 = 36."
    },
    {
     "type": "mc",
     "q": "Dans 158 : 26, l'estimation « 160 : 30 » donne 5. Le bon quotient est…",
     "options": [
      "5",
      "6",
      "7"
     ],
     "answer": 1,
     "explain": "5 × 26 = 130, reste 28 ≥ 26 : trop petit ! 6 × 26 = 156, reste 2 ✅."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Dividende",
   "d": "Le nombre qu'on divise."
  },
  {
   "t": "Diviseur",
   "d": "Le nombre par lequel on divise."
  },
  {
   "t": "Quotient",
   "d": "Le résultat de la division."
  },
  {
   "t": "Reste",
   "d": "Ce qui reste ; il est toujours plus petit que le diviseur."
  },
  {
   "t": "Estimation",
   "d": "Calcul approché pour prévoir le résultat."
  },
  {
   "t": "Preuve",
   "d": "Contrôle du résultat : quotient × diviseur + reste = dividende."
  },
  {
   "t": "Propriété d'invariance",
   "d": "En multipliant ou en divisant le dividende et le diviseur par le même nombre, le quotient ne change pas."
  },
  {
   "t": "Division exacte",
   "d": "Division avec reste 0."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Combien font 336 : 14 ?",
    "answer": 24,
    "explain": "33 : 14 = 2 (28), reste 5 ; j'abaisse 6 → 56 : 14 = 4. Quotient 24."
   },
   {
    "type": "num",
    "q": "Combien font 945 : 45 ?",
    "answer": 21,
    "explain": "94 : 45 = 2 (90), reste 4 ; j'abaisse 5 → 45 : 45 = 1. Quotient 21."
   },
   {
    "type": "num",
    "q": "Quel est le reste de 500 : 18 ?",
    "answer": 14,
    "explain": "500 : 18 = 27 reste 14 (27 × 18 = 486 ; 500 − 486 = 14)."
   },
   {
    "type": "mc",
    "q": "Dans 1 250 : 25 = 50, le nombre 25 est…",
    "options": [
     "le dividende",
     "le diviseur",
     "le quotient"
    ],
    "answer": 1,
    "explain": "Le nombre par lequel on divise est le diviseur."
   },
   {
    "type": "tf",
    "q": "La preuve de la division se fait avec la multiplication.",
    "answer": true,
    "explain": "Quotient × diviseur + reste = dividende."
   },
   {
    "type": "tf",
    "q": "Si un enfant trouve 300 : 40 = 6 reste 60, le résultat est juste.",
    "answer": false,
    "explain": "Le reste 60 est plus grand que le diviseur 40 : le bon quotient est 7 reste 20."
   },
   {
    "type": "mc",
    "q": "Quelle division a le même quotient que 480 : 16 ?",
    "options": [
     "240 : 8",
     "480 : 8",
     "240 : 16"
    ],
    "answer": 0,
    "explain": "Dividende et diviseur divisés tous les deux par 2 : propriété d'invariance."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre les étapes de la division posée.",
    "items": [
     "Je prends les chiffres du dividende",
     "J'estime combien de fois tient le diviseur",
     "Je multiplie le chiffre par le diviseur",
     "Je soustrais",
     "J'abaisse le chiffre suivant"
    ],
    "explain": "Je prends, j'estime, je multiplie, je soustrais, j'abaisse : et on recommence."
   },
   {
    "type": "num",
    "q": "Une école a 380 élèves et chaque autocar transporte 50 personnes. Combien d'autocars faut-il pour les emmener tous ?",
    "answer": 8,
    "explain": "380 : 50 = 7 reste 30 : pour les 30 élèves restants, il faut un autre autocar, donc 8."
   },
   {
    "type": "num",
    "q": "Dans une bibliothèque, il y a 1 008 livres à ranger sur des étagères de 42 livres. Combien d'étagères se remplissent ?",
    "answer": 24,
    "explain": "1 008 : 42 = 24 (42 × 24 = 1 008)."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le résultat de la division ?",
    "answer": [
     "quotient",
     "le quotient",
     "quoziente",
     "il quoziente"
    ],
    "explain": "Le quotient."
   }
  ],
  "gen": [
   [
    "div2",
    3
   ]
  ]
 }
});
