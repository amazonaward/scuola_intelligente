TOPIC('fr', {
 "id": "m3-mat-equazioni",
 "title": "Les équations du premier degré",
 "intro": "« Je pense à un nombre, je le multiplie par 3, j'ajoute 5 et j'obtiens 26 : à quel nombre ai-je pensé ? » Pour répondre, il faut une <b>équation</b>. Apprenons à résoudre les équations du premier degré avec les deux <b>principes d'équivalence</b>, comme s'il s'agissait d'une balance en équilibre, et à les utiliser pour résoudre des problèmes.",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "Identités et équations",
   "html": "<p>Une <b>égalité</b> entre deux expressions littérales peut être :</p>\n<ul>\n<li>une <b>identité</b>, si elle est vraie <b>pour toutes les valeurs</b> des lettres : 2(x + 3) = 2x + 6 est toujours vraie ;</li>\n<li>une <b>équation</b>, si elle est vraie <b>seulement pour certaines valeurs</b> (ou pour aucune) : x + 3 = 10 n'est vraie que si x = 7.</li>\n</ul>\n<p>Dans une équation :</p>\n<ul>\n<li>la lettre est l'<b>inconnue</b> (en général x) ;</li>\n<li>ce qui est à gauche du signe égal est le <b>premier membre</b>, ce qui est à droite le <b>second membre</b> ;</li>\n<li>la valeur qui rend l'égalité vraie est la <b>solution</b> (ou racine) ;</li>\n<li>une équation est du <b>premier degré</b> si l'inconnue apparaît avec un exposant maximal égal à 1 (pas de x², x³…).</li>\n</ul>\n<p>Deux équations sont <b>équivalentes</b> si elles ont les mêmes solutions : x + 3 = 10 et x = 7 sont équivalentes. Résoudre une équation, c'est la transformer en équations équivalentes de plus en plus simples, jusqu'à arriver à <b>x = nombre</b>.</p>"
  },
  {
   "type": "svg",
   "title": "L'équation est une balance",
   "svg": "<svg viewBox=\"0 0 640 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"300\" fill=\"#f0f9ff\"/>\n<polygon points=\"320,260 290,290 350,290\" fill=\"#475569\"/>\n<rect x=\"315\" y=\"110\" width=\"10\" height=\"150\" fill=\"#475569\"/>\n<rect x=\"90\" y=\"105\" width=\"460\" height=\"10\" rx=\"5\" fill=\"#334155\"/>\n<line x1=\"150\" y1=\"115\" x2=\"150\" y2=\"170\" stroke=\"#334155\" stroke-width=\"3\"/>\n<line x1=\"490\" y1=\"115\" x2=\"490\" y2=\"170\" stroke=\"#334155\" stroke-width=\"3\"/>\n<path d=\"M70 170 L230 170 L210 195 L90 195 Z\" fill=\"#94a3b8\"/>\n<path d=\"M410 170 L570 170 L550 195 L430 195 Z\" fill=\"#94a3b8\"/>\n<rect x=\"85\" y=\"120\" width=\"44\" height=\"50\" rx=\"6\" fill=\"#a855f7\"/><text x=\"107\" y=\"153\" font-size=\"22\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">x</text>\n<rect x=\"133\" y=\"120\" width=\"44\" height=\"50\" rx=\"6\" fill=\"#a855f7\"/><text x=\"155\" y=\"153\" font-size=\"22\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">x</text>\n<circle cx=\"195\" cy=\"155\" r=\"14\" fill=\"#f59e0b\"/><text x=\"195\" y=\"161\" font-size=\"16\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">1</text>\n<circle cx=\"215\" cy=\"140\" r=\"14\" fill=\"#f59e0b\"/><text x=\"215\" y=\"146\" font-size=\"16\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">1</text>\n<circle cx=\"195\" cy=\"127\" r=\"14\" fill=\"#f59e0b\"/><text x=\"195\" y=\"133\" font-size=\"16\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">1</text>\n<g fill=\"#f59e0b\"><circle cx=\"430\" cy=\"155\" r=\"14\"/><circle cx=\"460\" cy=\"155\" r=\"14\"/><circle cx=\"490\" cy=\"155\" r=\"14\"/><circle cx=\"520\" cy=\"155\" r=\"14\"/><circle cx=\"550\" cy=\"155\" r=\"14\"/><circle cx=\"445\" cy=\"128\" r=\"14\"/><circle cx=\"475\" cy=\"128\" r=\"14\"/><circle cx=\"505\" cy=\"128\" r=\"14\"/><circle cx=\"535\" cy=\"128\" r=\"14\"/><circle cx=\"490\" cy=\"101\" r=\"14\"/><circle cx=\"460\" cy=\"101\" r=\"14\"/></g>\n<text x=\"150\" y=\"235\" font-size=\"26\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">2x + 3</text>\n<text x=\"320\" y=\"60\" font-size=\"34\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">=</text>\n<text x=\"490\" y=\"235\" font-size=\"26\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">11</text>\n<text x=\"320\" y=\"30\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0369a1\">Retire 3 des deux plateaux, puis partage en deux : x = 4</text>\n</svg>",
   "caption": "Tout ce que tu fais sur un plateau, tu dois le faire aussi sur l'autre : ainsi la balance reste en équilibre."
  },
  {
   "type": "text",
   "title": "Le premier principe d'équivalence",
   "html": "<p>En <b>ajoutant ou en soustrayant</b> aux deux membres le <b>même nombre</b> (ou la même expression), on obtient une équation équivalente.</p>\n<p>Exemple : x + 5 = 12 → je soustrais 5 aux deux membres : x + 5 − 5 = 12 − 5 → <b>x = 7</b>.</p>\n<p>Conséquences pratiques :</p>\n<ul>\n<li><b>Règle du transport</b> : un terme peut <b>passer</b> d'un membre à l'autre <b>en changeant de signe</b>. 3x − 4 = 2x + 6 → 3x − 2x = 6 + 4 → x = 10.</li>\n<li><b>Règle de simplification</b> : deux termes <b>identiques</b> dans les deux membres peuvent être supprimés. x + 7 = 2 + 7 → x = 2.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "Le second principe d'équivalence",
   "html": "<p>En <b>multipliant ou en divisant</b> les deux membres par le <b>même nombre différent de zéro</b>, on obtient une équation équivalente.</p>\n<p>Exemple : 4x = 28 → je divise les deux membres par 4 : <b>x = 7</b>.</p>\n<p>Conséquences pratiques :</p>\n<ul>\n<li><b>Changer tous les signes</b> (multiplier par −1) : −3x = −12 → 3x = 12 → x = 4.</li>\n<li><b>Éliminer les dénominateurs</b> : on multiplie tout par le p.p.c.m. des dénominateurs. x/2 + x/3 = 5 → (×6) → 3x + 2x = 30 → 5x = 30 → x = 6.</li>\n<li><b>Simplifier</b> : si tous les termes ont un diviseur commun, on divise : 6x + 9 = 15 → (:3) → 2x + 3 = 5.</li>\n</ul>\n<p>⚠️ Pourquoi « différent de zéro » ? En multipliant par 0, n'importe quelle équation devient 0 = 0, et on perd toute l'information !</p>"
  },
  {
   "type": "remember",
   "title": "La méthode en 6 étapes",
   "html": "<ol>\n<li>Supprime les <b>parenthèses</b> (distributivité).</li>\n<li>Élimine les <b>dénominateurs</b> (multiplie par le p.p.c.m.).</li>\n<li><b>Transporte</b> : les termes en x dans le premier membre, les nombres dans le second (en changeant de signe !).</li>\n<li><b>Réduis</b> les termes semblables : tu arrives à la <b>forme normale</b> ax = b.</li>\n<li><b>Divise</b> par le coefficient de x : x = b/a.</li>\n<li><b>Vérifie</b> : remplace la solution dans l'équation de départ.</li>\n</ol>"
  },
  {
   "type": "example",
   "title": "Exemple guidé",
   "html": "<p>Résous : <b>3(x − 2) + 4 = x + 10</b></p>\n<ol>\n<li>Parenthèses : 3x − 6 + 4 = x + 10</li>\n<li>Transport : 3x − x = 10 + 6 − 4</li>\n<li>Réduction : 2x = 12</li>\n<li>Division par 2 : <b>x = 6</b></li>\n<li>Vérification : 3(6 − 2) + 4 = 12 + 4 = 16 ; 6 + 10 = 16 ✔️</li>\n</ol>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : principes d'équivalence",
   "questions": [
    {
     "type": "num",
     "q": "Résous : x − 9 = 4",
     "answer": 13,
     "explain": "Je transporte le −9 : x = 4 + 9 = 13."
    },
    {
     "type": "num",
     "q": "Résous : 5x = −35",
     "answer": -7,
     "explain": "Je divise par 5 : x = −7."
    },
    {
     "type": "tf",
     "q": "On peut multiplier les deux membres par 0.",
     "answer": false,
     "explain": "Le second principe ne vaut que pour les nombres différents de zéro."
    }
   ]
  },
  {
   "type": "text",
   "title": "Déterminées, impossibles, indéterminées",
   "html": "<p>Quand tu arrives à la forme normale <b>ax = b</b> :</p>\n<table>\n<tr><th>Cas</th><th>Exemple</th><th>Solutions</th></tr>\n<tr><td>a ≠ 0 → <b>déterminée</b></td><td>4x = 12</td><td>une seule : x = 3</td></tr>\n<tr><td>a = 0, b ≠ 0 → <b>impossible</b></td><td>0x = 5</td><td>aucune : aucun nombre multiplié par 0 ne donne 5</td></tr>\n<tr><td>a = 0, b = 0 → <b>indéterminée</b></td><td>0x = 0</td><td>une infinité : c'est une identité</td></tr>\n</table>\n<p>Exemple impossible : x + 3 = x + 5 → 0x = 2. Exemple indéterminé : 2(x + 1) = 2x + 2 → 0x = 0.</p>"
  },
  {
   "type": "widget",
   "title": "Classe les équations",
   "widget": "classify",
   "options": {
    "groups": [
     "Déterminée",
     "Impossible",
     "Indéterminée"
    ],
    "items": [
     [
      "3x = 12",
      0
     ],
     [
      "0x = 7",
      1
     ],
     [
      "0x = 0",
      2
     ],
     [
      "x + 1 = x + 4",
      1
     ],
     [
      "2x + 2 = 2(x + 1)",
      2
     ],
     [
      "5x − 1 = 9",
      0
     ],
     [
      "4(x − 1) = 4x",
      1
     ],
     [
      "x/2 = 3",
      0
     ]
    ]
   },
   "caption": "Réduis à la forme normale ax = b et regarde a et b."
  },
  {
   "type": "example",
   "title": "Exemple pratique : le problème des billets",
   "html": "<p>Une classe va au musée. Le billet plein tarif coûte <b>8 €</b>, le tarif réduit pour les élèves <b>5 €</b>. Il y a 2 enseignants (plein tarif) et on dépense en tout <b>131 €</b>. Combien y a-t-il d'élèves ?</p>\n<ol>\n<li><b>Inconnue</b> : x = nombre d'élèves.</li>\n<li><b>Équation</b> : 5x + 2·8 = 131 → 5x + 16 = 131</li>\n<li><b>Résolution</b> : 5x = 115 → x = <b>23</b> élèves.</li>\n<li><b>Vérification</b> : 23·5 + 16 = 115 + 16 = 131 ✔️ (et 23 est un nombre entier positif, donc acceptable).</li>\n</ol>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : l'âge",
   "html": "<p>Marc a 3 fois l'âge de sa fille Sophie. Dans 12 ans, il aura le double de l'âge de Sophie. Quel âge ont-ils ?</p>\n<ul>\n<li>Âge de Sophie = x ; âge de Marc = 3x.</li>\n<li>Dans 12 ans : 3x + 12 = 2(x + 12)</li>\n<li>3x + 12 = 2x + 24 → x = <b>12</b>. Sophie a 12 ans, Marc <b>36</b>.</li>\n<li>Vérification : dans 12 ans, 48 et 24, et 48 = 2·24 ✔️</li>\n</ul>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le signe « = »",
   "html": "<p>Le signe <b>=</b> fut inventé par le médecin et mathématicien gallois <b>Robert Recorde</b> en 1557, dans le livre <i>The Whetstone of Witte</i>. Il écrivit qu'il avait choisi deux lignes parallèles de même longueur « parce que deux choses ne peuvent pas être plus égales ». Avant lui, on écrivait en toutes lettres « est égal à » (en latin <i>aequales</i>, abrégé en « ae »).</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? L'épitaphe de Diophante",
   "html": "<p>Une ancienne devinette grecque raconte la vie du mathématicien <b>Diophante</b> : « Son enfance dura 1/6 de sa vie ; après 1/12, sa barbe poussa ; après 1/7, il se maria ; 5 ans plus tard naquit un fils, qui vécut la moitié des années de son père ; le père mourut 4 ans après son fils. » Équation : x/6 + x/12 + x/7 + 5 + x/2 + 4 = x → <b>x = 84</b>. Et déjà dans le <b>papyrus Rhind</b> (Égypte, vers 1650 av. J.-C.), il y a des problèmes « aha » qui sont de vraies équations du premier degré : « une quantité et son septième font 19 ».</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de résoudre les équations",
   "intro": "Le transport avec changement de signe te paraît magique ? Voici d'où il vient, avec des méthodes utilisées dans d'autres pays.",
   "tabs": [
    {
     "label": "⚖️ La balance",
     "html": "<p>Pense à l'équation comme à une <b>balance à deux plateaux</b> en équilibre. Les x sont des sachets mystérieux tous du même poids, les nombres sont de petits poids de 1.</p>\n<ul>\n<li>Tu peux <b>retirer le même poids</b> des deux plateaux (1ᵉʳ principe).</li>\n<li>Tu peux <b>partager en deux</b> les deux plateaux (2ᵉ principe).</li>\n</ul>\n<p>« Transporter en changeant de signe » n'est qu'un raccourci : retirer 3 petits poids des deux plateaux fait disparaître le +3 à gauche et un −3 apparaît à droite !</p>\n<p>3x + 2 = x + 10 → je retire x des deux côtés → 2x + 2 = 10 → je retire 2 → 2x = 8 → je partage en deux → <b>x = 4</b>.</p>"
    },
    {
     "label": "🇸🇬 Le bar model de Singapour",
     "html": "<p>À Singapour, l'un des pays qui ont les meilleurs résultats en mathématiques, on résout les problèmes avec des <b>barres</b> avant même d'utiliser les lettres.</p>\n<p>« Luc a 3 fois plus de vignettes qu'Anna ; à eux deux, ils en ont 48. » Dessine une barre pour Anna et 3 barres identiques pour Luc : en tout <b>4 barres = 48</b>, donc une barre = 12. Anna a 12 vignettes, Luc 36. En algèbre : x + 3x = 48 → 4x = 48 → x = 12.</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#fefce8\"/>\n<text x=\"20\" y=\"60\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">Anna</text>\n<rect x=\"110\" y=\"35\" width=\"100\" height=\"40\" fill=\"#f472b6\" stroke=\"#9d174d\" stroke-width=\"3\"/>\n<text x=\"160\" y=\"62\" font-size=\"18\" text-anchor=\"middle\" fill=\"#fff\">x</text>\n<text x=\"20\" y=\"130\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">Luc</text>\n<rect x=\"110\" y=\"105\" width=\"100\" height=\"40\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<rect x=\"210\" y=\"105\" width=\"100\" height=\"40\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<rect x=\"310\" y=\"105\" width=\"100\" height=\"40\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<text x=\"160\" y=\"132\" font-size=\"18\" text-anchor=\"middle\" fill=\"#fff\">x</text><text x=\"260\" y=\"132\" font-size=\"18\" text-anchor=\"middle\" fill=\"#fff\">x</text><text x=\"360\" y=\"132\" font-size=\"18\" text-anchor=\"middle\" fill=\"#fff\">x</text>\n<path d=\"M430 35 Q450 90 430 145\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<text x=\"460\" y=\"97\" font-size=\"24\" fill=\"#1f2937\" font-weight=\"bold\">48</text>\n<text x=\"300\" y=\"195\" font-size=\"20\" text-anchor=\"middle\" fill=\"#166534\" font-weight=\"bold\">4 barres = 48 → 1 barre = 12</text>\n</svg>"
    },
    {
     "label": "🇬🇧 La machine à l'envers",
     "html": "<p>Dans les écoles anglaises, on utilise les <b>function machines</b> : l'inconnue entre dans une machine qui effectue des opérations.</p>\n<p>x → <b>× 3</b> → <b>+ 5</b> → 26</p>\n<p>Pour trouver x, fais fonctionner la machine <b>à l'envers</b>, avec les opérations <b>inverses</b> et dans l'ordre inverse :</p>\n<p>26 → <b>− 5</b> → 21 → <b>: 3</b> → <b>7</b>. Donc x = 7.</p>\n<p>C'est exactement ce que tu fais avec les principes d'équivalence : pour « défaire » un +5, tu soustrais 5, pour défaire un ×3, tu divises par 3. C'est comme quand on se déshabille : la dernière chose que tu as mise (le manteau) est la première que tu enlèves !</p>"
    },
    {
     "label": "🐸 Sur la droite",
     "html": "<p>Résous <b>x + 7 = 3</b> sur la droite : de quel nombre dois-je partir pour arriver à 3 en faisant un saut de +7 ? Pars de 3 et reviens en arrière de 7 : tu arrives à <b>−4</b>. Donc x = −4. Essaie avec le widget : mets le départ à 3 et le saut à 7, puis appuie sur « − ».</p>",
     "widget": "numberLine",
     "options": {
      "min": -10,
      "max": 10,
      "step": 7,
      "start": 3
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des équations du premier degré",
   "nodes": [
    {
     "id": "uguaglianza",
     "label": "Égalité",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "Deux expressions reliées par le signe =.",
     "why": "Le signe = fut introduit par Robert Recorde en 1557. Une égalité entre expressions littérales peut être toujours vraie ou vraie seulement parfois."
    },
    {
     "id": "identita",
     "label": "Identité",
     "x": 20,
     "y": 26,
     "color": "#94a3b8",
     "html": "Égalité vraie pour toutes les valeurs des lettres.",
     "why": "Elle naît des propriétés des opérations (par ex. la distributivité) : les formules du calcul littéral sont des identités."
    },
    {
     "id": "equazione",
     "label": "Équation",
     "x": 70,
     "y": 26,
     "color": "#2563eb",
     "html": "Égalité vraie seulement pour certaines valeurs de l'inconnue.",
     "why": "Du latin <i>aequatio</i>, « rendre égal ». Des problèmes de ce type se trouvent déjà dans le papyrus Rhind (vers 1650 av. J.-C.) et dans les tablettes babyloniennes."
    },
    {
     "id": "principio1",
     "label": "1ᵉʳ principe",
     "x": 45,
     "y": 50,
     "color": "#16a34a",
     "html": "On peut ajouter ou retirer la même quantité aux deux membres.",
     "why": "Il correspond à l'<i>al-jabr</i> et à l'<i>al-muqābala</i> d'al-Khwârizmî (vers 820 apr. J.-C.) : « remettre en place » les termes soustraits et « équilibrer » les termes égaux."
    },
    {
     "id": "principio2",
     "label": "2ᵉ principe",
     "x": 80,
     "y": 50,
     "color": "#f59e0b",
     "html": "On peut multiplier ou diviser les membres par le même nombre ≠ 0.",
     "why": "Si deux quantités sont égales, leurs doubles, leurs moitiés… le restent aussi. C'est l'un des axiomes (« notions communes ») d'Euclide. Zéro est exclu parce que la division par zéro n'a pas de sens."
    },
    {
     "id": "trasporto",
     "label": "Règle du transport",
     "x": 20,
     "y": 70,
     "color": "#22c55e",
     "html": "Un terme passe dans l'autre membre en changeant de signe.",
     "why": "C'est un raccourci du 1ᵉʳ principe : ajouter l'opposé aux deux membres fait « disparaître » le terme d'un côté et « apparaître » avec le signe opposé de l'autre."
    },
    {
     "id": "forma",
     "label": "Forme normale ax = b",
     "x": 60,
     "y": 72,
     "color": "#a855f7",
     "html": "Le point d'arrivée après les transformations.",
     "why": "Toute équation du premier degré peut se ramener à cette forme ; on voit alors tout de suite si elle est déterminée, impossible ou indéterminée."
    },
    {
     "id": "casi",
     "label": "Déterminée / impossible / indéterminée",
     "x": 60,
     "y": 92,
     "color": "#ef4444",
     "html": "Une solution / aucune / une infinité.",
     "why": "Cela dépend de a et b : si a ≠ 0 je peux diviser ; si a = 0 le premier membre vaut toujours 0, donc tout dépend de b."
    },
    {
     "id": "problemi",
     "label": "Problèmes",
     "x": 20,
     "y": 92,
     "color": "#0ea5e9",
     "html": "Traduire une situation réelle en équation.",
     "why": "C'est la raison pour laquelle les équations sont nées : partager des héritages, calculer des impôts, des prix, des distances. Le Liber Abaci de Fibonacci (1202) est plein de problèmes commerciaux résolus ainsi."
    }
   ],
   "edges": [
    [
     "uguaglianza",
     "identita",
     "toujours vraie"
    ],
    [
     "uguaglianza",
     "equazione",
     "parfois vraie"
    ],
    [
     "equazione",
     "principio1",
     "se transforme avec le"
    ],
    [
     "equazione",
     "principio2",
     "se transforme avec le"
    ],
    [
     "principio1",
     "trasporto",
     "raccourci"
    ],
    [
     "principio1",
     "forma",
     "conduit à la"
    ],
    [
     "principio2",
     "forma",
     "conduit à la"
    ],
    [
     "forma",
     "casi",
     "décide"
    ],
    [
     "problemi",
     "equazione",
     "se traduisent en"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : résous et vérifie",
   "questions": [
    {
     "type": "num",
     "q": "Résous : 7x − 4 = 3x + 20",
     "answer": 6,
     "explain": "7x − 3x = 20 + 4 → 4x = 24 → x = 6."
    },
    {
     "type": "num",
     "q": "Résous : x/3 + 2 = 6",
     "answer": 12,
     "explain": "x/3 = 4 → x = 12."
    },
    {
     "type": "mc",
     "q": "L'équation 2(x + 3) = 2x + 1 est…",
     "options": [
      "déterminée",
      "impossible",
      "indéterminée"
     ],
     "answer": 1,
     "explain": "2x + 6 = 2x + 1 → 0x = −5 : impossible."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Équation",
   "d": "Égalité entre deux expressions vérifiée seulement pour certaines valeurs de l'inconnue."
  },
  {
   "t": "Identité",
   "d": "Égalité vraie pour toutes les valeurs des lettres."
  },
  {
   "t": "Inconnue",
   "d": "La lettre dont on cherche la valeur."
  },
  {
   "t": "Membres",
   "d": "Les deux expressions à gauche (premier) et à droite (second) du signe égal."
  },
  {
   "t": "Solution (racine)",
   "d": "La valeur de l'inconnue qui rend l'équation vraie."
  },
  {
   "t": "Équations équivalentes",
   "d": "Équations qui ont les mêmes solutions."
  },
  {
   "t": "Principes d'équivalence",
   "d": "Règles qui transforment une équation en une équation équivalente."
  },
  {
   "t": "Forme normale",
   "d": "La forme ax = b d'une équation du premier degré."
  },
  {
   "t": "Vérification",
   "d": "Contrôle de la solution en la remplaçant dans l'équation."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Laquelle de celles-ci est une identité ?",
    "options": [
     "x + 2 = 5",
     "3(x + 1) = 3x + 3",
     "2x = 0"
    ],
    "answer": 1,
    "explain": "Elle est vraie pour tout x grâce à la distributivité."
   },
   {
    "type": "num",
    "q": "Résous : 4x + 7 = 31",
    "answer": 6,
    "explain": "4x = 24 → x = 6."
   },
   {
    "type": "num",
    "q": "Résous : 2(x − 5) = x + 3",
    "answer": 13,
    "explain": "2x − 10 = x + 3 → x = 13."
   },
   {
    "type": "num",
    "q": "Résous : −3x + 2 = 14",
    "answer": -4,
    "explain": "−3x = 12 → x = −4."
   },
   {
    "type": "num",
    "q": "Résous : x/4 − 1 = x/6",
    "answer": 12,
    "explain": "Je multiplie par 12 : 3x − 12 = 2x → x = 12."
   },
   {
    "type": "tf",
    "q": "Avec le premier principe, on peut soustraire le même nombre des deux membres.",
    "answer": true,
    "explain": "C'est précisément l'énoncé du premier principe."
   },
   {
    "type": "mc",
    "q": "Une équation qui se réduit à 0x = 0 est…",
    "options": [
     "impossible",
     "déterminée",
     "indéterminée"
    ],
    "answer": 2,
    "explain": "Tous les nombres la vérifient : une infinité de solutions."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre les étapes pour résoudre une équation.",
    "items": [
     "Supprimer les parenthèses",
     "Éliminer les dénominateurs",
     "Transporter les termes",
     "Réduire à la forme ax = b",
     "Diviser par le coefficient",
     "Vérifier"
    ],
    "explain": "C'est la méthode standard en 6 étapes."
   },
   {
    "type": "num",
    "q": "La somme de trois nombres consécutifs est 72. Quel est le plus petit ?",
    "answer": 23,
    "explain": "x + (x + 1) + (x + 2) = 72 → 3x + 3 = 72 → x = 23."
   },
   {
    "type": "num",
    "q": "Le périmètre d'un rectangle est de 50 cm ; la base dépasse la hauteur de 7 cm. Combien mesure la hauteur ?",
    "answer": 9,
    "unit": "cm",
    "explain": "2(h + 7) + 2h = 50 → 4h + 14 = 50 → h = 9."
   },
   {
    "type": "mc",
    "q": "Pour éliminer les dénominateurs dans x/2 + x/5 = 7, on multiplie tout par…",
    "options": [
     "7",
     "10",
     "2"
    ],
    "answer": 1,
    "explain": "Il m.c.m. di 2 e 5 è 10."
   },
   {
    "type": "text",
    "q": "Qui a inventé le signe « = » en 1557 ?",
    "answer": [
     "robert recorde",
     "recorde"
    ],
    "explain": "Le Gallois Robert Recorde."
   }
  ],
  "gen": [
   [
    "equation",
    3
   ]
  ]
 }
});
