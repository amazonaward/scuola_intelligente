TOPIC('fr', {
 "id": "m1-tec-algoritmi-diagrammi",
 "title": "Algorithmes et organigrammes",
 "intro": "Une recette, la notice d'un Lego, le chemin pour aller à l'école : ce sont tous des <b>algorithmes</b>, des suites d'étapes précises pour résoudre un problème. Les ordinateurs ne font rien d'autre qu'exécuter des algorithmes écrits par des personnes. Dans cette leçon, nous apprenons à les <b>écrire</b> et à les <b>dessiner</b> avec les <b>organigrammes</b>, le premier pas pour devenir programmeur. 🤖➡️🔷",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "1. Qu'est-ce qu'un algorithme ?",
   "html": "<p>Un <b>algorithme</b> est une <b>suite finie d'instructions claires</b> qui, exécutées dans l'ordre, résolvent un problème.</p>\n<p>Un bon algorithme doit être :</p>\n<ul>\n<li><b>fini</b> : il doit se terminer après un nombre limité d'étapes ;</li>\n<li><b>non ambigu</b> : chaque instruction ne peut se comprendre que d'une seule façon (« ajoute un peu de sel » est ambigu, « ajoute 5 g de sel » ne l'est pas) ;</li>\n<li><b>exécutable</b> : celui qui l'exécute (personne ou machine) doit être capable de faire chaque étape ;</li>\n<li><b>général</b> : il doit fonctionner pour tous les cas du même type, pas seulement pour un seul.</li>\n</ul>\n<p>Celui qui exécute l'algorithme s'appelle l'<b>exécutant</b>. Un ordinateur est un exécutant très rapide mais <b>sans imagination</b> : il fait exactement ce qui est écrit, même si c'est faux !</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : l'algorithme du thé",
   "html": "<ol>\n<li>Remplis la bouilloire d'eau.</li>\n<li>Allume la bouilloire.</li>\n<li><b>Tant que</b> l'eau ne bout pas, attends.</li>\n<li>Mets le sachet dans la tasse.</li>\n<li>Verse l'eau dans la tasse.</li>\n<li>Attends 3 minutes et retire le sachet.</li>\n<li><b>Si</b> tu veux un thé sucré, ajoute du sucre ; <b>sinon</b> n'ajoute rien.</li>\n<li>Fin : bois ton thé ! 🍵</li>\n</ol>\n<p>Remarque trois choses : les étapes se suivent en <b>séquence</b> ; à l'étape 3 il y a une <b>répétition</b> (attends tant que…) ; à l'étape 7 il y a un <b>choix</b> (si… sinon…). Ce sont les trois « briques » de tout algorithme.</p>"
  },
  {
   "type": "text",
   "title": "2. Les symboles des organigrammes",
   "html": "<p>Un <b>organigramme</b> (en anglais <i>flowchart</i>) dessine un algorithme avec des blocs de formes différentes, reliés par des <b>flèches</b> qui indiquent l'ordre.</p>\n<table>\n<tr><th>Forme</th><th>Nom</th><th>Signification</th></tr>\n<tr><td>⬭ ovale</td><td><b>Début / Fin</b></td><td>où commence et où se termine l'algorithme</td></tr>\n<tr><td>▱ parallélogramme</td><td><b>Entrée / Sortie</b></td><td>lire une donnée (entrée) ou afficher un résultat (sortie)</td></tr>\n<tr><td>▭ rectangle</td><td><b>Traitement</b></td><td>une action ou un calcul (ex. somme ← a + b)</td></tr>\n<tr><td>◇ losange</td><td><b>Décision</b></td><td>une question avec réponse <b>oui / non</b> (vrai / faux) : deux flèches en sortent</td></tr>\n<tr><td>→ flèche</td><td><b>Flux</b></td><td>indique l'étape suivante</td></tr>\n</table>\n<p>Règles : un seul <b>Début</b>, au moins une <b>Fin</b>, chaque bloc a une flèche qui entre et une qui sort (le losange en a deux qui sortent).</p>"
  },
  {
   "type": "svg",
   "title": "Un organigramme : pair ou impair ?",
   "caption": "L'algorithme lit un nombre N, vérifie si le reste de la division par 2 est 0 et écrit « pair » ou « impair ».",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<defs><marker id=\"fa\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 Z\" fill=\"#334155\"/></marker></defs>\n<ellipse cx=\"300\" cy=\"25\" rx=\"60\" ry=\"18\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"2\"/>\n<text x=\"300\" y=\"31\" font-size=\"16\" text-anchor=\"middle\" fill=\"#14532d\" font-weight=\"bold\">DÉBUT</text>\n<line x1=\"300\" y1=\"43\" x2=\"300\" y2=\"58\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#fa)\"/>\n<polygon points=\"250,62 370,62 350,96 230,96\" fill=\"#93c5fd\" stroke=\"#1e40af\" stroke-width=\"2\"/>\n<text x=\"300\" y=\"85\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">lire N</text>\n<line x1=\"300\" y1=\"96\" x2=\"300\" y2=\"112\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#fa)\"/>\n<polygon points=\"300,116 385,150 300,184 215,150\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"2\"/>\n<text x=\"300\" y=\"148\" font-size=\"14\" text-anchor=\"middle\" fill=\"#713f12\" font-weight=\"bold\">reste de</text>\n<text x=\"300\" y=\"166\" font-size=\"14\" text-anchor=\"middle\" fill=\"#713f12\" font-weight=\"bold\">N : 2 = 0 ?</text>\n<line x1=\"215\" y1=\"150\" x2=\"140\" y2=\"150\" stroke=\"#334155\" stroke-width=\"2\"/>\n<line x1=\"140\" y1=\"150\" x2=\"140\" y2=\"198\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#fa)\"/>\n<text x=\"175\" y=\"142\" font-size=\"15\" fill=\"#166534\" font-weight=\"bold\">OUI</text>\n<line x1=\"385\" y1=\"150\" x2=\"460\" y2=\"150\" stroke=\"#334155\" stroke-width=\"2\"/>\n<line x1=\"460\" y1=\"150\" x2=\"460\" y2=\"198\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#fa)\"/>\n<text x=\"410\" y=\"142\" font-size=\"15\" fill=\"#b91c1c\" font-weight=\"bold\">NON</text>\n<polygon points=\"85,202 215,202 195,236 65,236\" fill=\"#93c5fd\" stroke=\"#1e40af\" stroke-width=\"2\"/>\n<text x=\"140\" y=\"225\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">écrire « pair »</text>\n<polygon points=\"405,202 535,202 515,236 385,236\" fill=\"#93c5fd\" stroke=\"#1e40af\" stroke-width=\"2\"/>\n<text x=\"460\" y=\"225\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">écrire « impair »</text>\n<line x1=\"140\" y1=\"236\" x2=\"140\" y2=\"270\" stroke=\"#334155\" stroke-width=\"2\"/>\n<line x1=\"460\" y1=\"236\" x2=\"460\" y2=\"270\" stroke=\"#334155\" stroke-width=\"2\"/>\n<line x1=\"140\" y1=\"270\" x2=\"236\" y2=\"270\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#fa)\"/>\n<line x1=\"460\" y1=\"270\" x2=\"364\" y2=\"270\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#fa)\"/>\n<ellipse cx=\"300\" cy=\"275\" rx=\"60\" ry=\"18\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n<text x=\"300\" y=\"281\" font-size=\"16\" text-anchor=\"middle\" fill=\"#7f1d1d\" font-weight=\"bold\">FIN</text>\n</svg>"
  },
  {
   "type": "widget",
   "title": "Reconnais les blocs",
   "widget": "labelDiagram",
   "caption": "Clique sur chaque bloc et choisis son nom.",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<ellipse cx=\"100\" cy=\"60\" rx=\"70\" ry=\"28\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"3\"/>\n<polygon points=\"250,35 390,35 360,85 220,85\" fill=\"#93c5fd\" stroke=\"#1e40af\" stroke-width=\"3\"/>\n<rect x=\"430\" y=\"35\" width=\"140\" height=\"50\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<polygon points=\"200,150 280,195 200,240 120,195\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"3\"/>\n<line x1=\"340\" y1=\"195\" x2=\"440\" y2=\"195\" stroke=\"#334155\" stroke-width=\"4\"/>\n<polygon points=\"440,185 460,195 440,205\" fill=\"#334155\"/>\n</svg>",
    "spots": [
     {
      "x": 100,
      "y": 60,
      "label": "Début / Fin"
     },
     {
      "x": 305,
      "y": 60,
      "label": "Entrée / Sortie"
     },
     {
      "x": 500,
      "y": 60,
      "label": "Traitement"
     },
     {
      "x": 200,
      "y": 195,
      "label": "Décision"
     },
     {
      "x": 400,
      "y": 195,
      "label": "Flèche de flux"
     }
    ]
   }
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : les blocs",
   "questions": [
    {
     "type": "mc",
     "q": "Quelle forme utilise-t-on pour une question avec réponse oui / non ?",
     "options": [
      "rectangle",
      "losange",
      "ovale"
     ],
     "answer": 1,
     "explain": "Le losange est le bloc de décision : deux flèches en sortent."
    },
    {
     "type": "mc",
     "q": "« Lis le nombre N » va dans un bloc…",
     "options": [
      "d'entrée / sortie (parallélogramme)",
      "de début",
      "de décision"
     ],
     "answer": 0,
     "explain": "Lire une donnée, c'est une entrée."
    },
    {
     "type": "tf",
     "q": "« Mets un peu de farine » est une instruction non ambiguë.",
     "answer": false,
     "explain": "« Un peu » peut se comprendre de plusieurs façons : il faut une quantité précise."
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Les trois structures fondamentales",
   "html": "<p>Tout algorithme, même le plus compliqué, peut se construire en combinant seulement <b>trois structures</b> :</p>\n<ol>\n<li><b>Séquence</b> : des instructions l'une après l'autre (d'abord A, puis B, puis C).</li>\n<li><b>Sélection</b> (ou choix) : <b>SI</b> une condition est vraie, fais A, <b>SINON</b> fais B. Dans l'organigramme, c'est le losange avec deux chemins qui se rejoignent ensuite.</li>\n<li><b>Itération</b> (ou boucle, répétition) : <b>RÉPÈTE</b> des instructions tant qu'une condition est vraie, ou un nombre de fois fixé. Dans l'organigramme, c'est une flèche qui <b>revient en arrière</b>.</li>\n</ol>\n<p>Deux informaticiens italiens, <b>Corrado Böhm</b> et <b>Giuseppe Jacopini</b>, l'ont démontré en <b>1966</b> : c'est le <b>théorème de Böhm-Jacopini</b>, l'un des fondements de la programmation.</p>\n<p>⚠️ Attention aux <b>boucles infinies</b> : si la condition pour sortir de la boucle ne devient jamais vraie, l'algorithme ne se termine plus !</p>"
  },
  {
   "type": "svg",
   "title": "Séquence, sélection, itération",
   "caption": "Les trois « briques » de la programmation : avec elles, on construit n'importe quel algorithme.",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fefce8\"/>\n<defs><marker id=\"fb\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 Z\" fill=\"#334155\"/></marker></defs>\n<text x=\"100\" y=\"30\" font-size=\"17\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">SÉQUENCE</text>\n<rect x=\"50\" y=\"50\" width=\"100\" height=\"40\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"2\"/><text x=\"100\" y=\"76\" font-size=\"16\" text-anchor=\"middle\" fill=\"#3b0764\">A</text>\n<line x1=\"100\" y1=\"90\" x2=\"100\" y2=\"116\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#fb)\"/>\n<rect x=\"50\" y=\"120\" width=\"100\" height=\"40\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"2\"/><text x=\"100\" y=\"146\" font-size=\"16\" text-anchor=\"middle\" fill=\"#3b0764\">B</text>\n<line x1=\"100\" y1=\"160\" x2=\"100\" y2=\"186\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#fb)\"/>\n<rect x=\"50\" y=\"190\" width=\"100\" height=\"40\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"2\"/><text x=\"100\" y=\"216\" font-size=\"16\" text-anchor=\"middle\" fill=\"#3b0764\">C</text>\n<text x=\"300\" y=\"30\" font-size=\"17\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">SÉLECTION</text>\n<polygon points=\"300,50 360,85 300,120 240,85\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"2\"/><text x=\"300\" y=\"91\" font-size=\"15\" text-anchor=\"middle\" fill=\"#713f12\">cond ?</text>\n<line x1=\"240\" y1=\"85\" x2=\"225\" y2=\"85\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"225\" y1=\"85\" x2=\"225\" y2=\"146\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#fb)\"/>\n<line x1=\"360\" y1=\"85\" x2=\"375\" y2=\"85\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"375\" y1=\"85\" x2=\"375\" y2=\"146\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#fb)\"/>\n<text x=\"222\" y=\"75\" font-size=\"13\" text-anchor=\"end\" fill=\"#166534\" font-weight=\"bold\">oui</text><text x=\"378\" y=\"75\" font-size=\"13\" fill=\"#b91c1c\" font-weight=\"bold\">non</text>\n<rect x=\"190\" y=\"150\" width=\"70\" height=\"40\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"2\"/><text x=\"225\" y=\"176\" font-size=\"16\" text-anchor=\"middle\" fill=\"#3b0764\">A</text>\n<rect x=\"340\" y=\"150\" width=\"70\" height=\"40\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"2\"/><text x=\"375\" y=\"176\" font-size=\"16\" text-anchor=\"middle\" fill=\"#3b0764\">B</text>\n<path d=\"M225 190 L225 230 L300 230 M375 190 L375 230 L300 230\" stroke=\"#334155\" stroke-width=\"2\" fill=\"none\"/>\n<line x1=\"300\" y1=\"230\" x2=\"300\" y2=\"256\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#fb)\"/>\n<text x=\"500\" y=\"30\" font-size=\"17\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">ITÉRATION</text>\n<rect x=\"450\" y=\"60\" width=\"100\" height=\"40\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"2\"/><text x=\"500\" y=\"86\" font-size=\"16\" text-anchor=\"middle\" fill=\"#3b0764\">A</text>\n<line x1=\"500\" y1=\"100\" x2=\"500\" y2=\"126\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#fb)\"/>\n<polygon points=\"500,130 560,165 500,200 440,165\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"2\"/><text x=\"500\" y=\"171\" font-size=\"15\" text-anchor=\"middle\" fill=\"#713f12\">fini ?</text>\n<path d=\"M440 165 L420 165 L420 80 L446 80\" stroke=\"#dc2626\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#fb)\"/>\n<text x=\"415\" y=\"125\" font-size=\"13\" text-anchor=\"end\" fill=\"#b91c1c\" font-weight=\"bold\">non</text>\n<line x1=\"500\" y1=\"200\" x2=\"500\" y2=\"246\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#fb)\"/>\n<text x=\"510\" y=\"230\" font-size=\"13\" fill=\"#166534\" font-weight=\"bold\">oui</text>\n<text x=\"300\" y=\"290\" font-size=\"14\" text-anchor=\"middle\" fill=\"#334155\">Théorème de Böhm-Jacopini (1966)</text>\n</svg>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : l'algorithme d'Euclide pour le PGCD",
   "html": "<p>L'un des plus anciens algorithmes du monde (vers 300 av. J.-C.) trouve le <b>Plus Grand Commun Diviseur</b> de deux nombres A et B :</p>\n<ol>\n<li><b>Début</b> : lis A et B.</li>\n<li><b>Tant que</b> B est différent de 0, répète :\n<ul><li>calcule R = reste de A : B ;</li><li>mets A ← B et B ← R.</li></ul></li>\n<li>Écris A : c'est le PGCD. <b>Fin</b>.</li>\n</ol>\n<p><b>Essayons avec A = 48 et B = 18 :</b></p>\n<table>\n<tr><th>A</th><th>B</th><th>reste A : B</th></tr>\n<tr><td>48</td><td>18</td><td>12</td></tr>\n<tr><td>18</td><td>12</td><td>6</td></tr>\n<tr><td>12</td><td>6</td><td>0</td></tr>\n<tr><td><b>6</b></td><td>0</td><td>stop !</td></tr>\n</table>\n<p>PGCD(48, 18) = <b>6</b>. Il contient une <b>séquence</b>, une <b>boucle</b> et une <b>condition</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : traverser la rue",
   "html": "<p>Dessine (sur ton cahier) l'organigramme de cet algorithme :</p>\n<ol>\n<li>Début.</li>\n<li>Arrive au passage piéton.</li>\n<li>Le feu piéton est-il vert ? <b>Non</b> → attends et reviens vérifier (boucle). <b>Oui</b> → continue.</li>\n<li>Regarde à gauche et à droite : des voitures arrivent-elles ? <b>Oui</b> → attends et revérifie. <b>Non</b> → traverse.</li>\n<li>Fin.</li>\n</ol>\n<p>Il y a <b>deux losanges</b>, chacun avec une flèche qui revient en arrière : deux boucles « attends tant que… ».</p>"
  },
  {
   "type": "widget",
   "title": "Jeu : séquence, sélection ou itération ?",
   "widget": "classify",
   "caption": "Quelle structure utilise chaque instruction ?",
   "options": {
    "groups": [
     "➡️ Séquence",
     "🔀 Sélection (si…)",
     "🔁 Itération (répète…)"
    ],
    "items": [
     [
      "Ouvre le livre, puis lis la page",
      0
     ],
     [
      "Allume l'ordinateur, saisis le mot de passe",
      0
     ],
     [
      "Mets tes chaussettes puis tes chaussures",
      0
     ],
     [
      "S'il pleut, prends le parapluie",
      1
     ],
     [
      "Si la note est au moins 6, écris « reçu »",
      1
     ],
     [
      "Si tu as faim, mange une pomme",
      1
     ],
     [
      "Remue jusqu'à ce que le sucre fonde",
      2
     ],
     [
      "Fais 10 pompes",
      2
     ],
     [
      "Répète la poésie jusqu'à ce que tu la saches",
      2
     ]
    ]
   }
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le mot « algorithme » vient du nom d'un mathématicien persan",
   "html": "<p>Vers l'an <b>820</b>, à Bagdad, dans la « Maison de la sagesse », travaillait le mathématicien <b>Muhammad ibn Musa al-Khwarizmi</b>. Il écrivit un livre sur les calculs avec les chiffres indiens (nos chiffres de 0 à 9). Quand il fut traduit en latin, son nom devint <i>Algoritmi</i> : « Dixit Algoritmi » = « ainsi parla al-Khwarizmi ». C'est aussi de lui que vient le mot <b>algèbre</b> (de <i>al-jabr</i>, dans le titre d'un autre de ses livres). En Italie, les chiffres indo-arabes furent diffusés par <b>Fibonacci</b> en 1202.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? La première programmeuse était une femme du XIXᵉ siècle",
   "html": "<p>En <b>1843</b>, la mathématicienne anglaise <b>Ada Lovelace</b> écrivit un algorithme pour faire calculer les « nombres de Bernoulli » à la <b>machine analytique</b> de Charles Babbage, un calculateur mécanique jamais terminé. On le considère comme le premier programme de l'histoire ! Ada avait aussi deviné qu'une telle machine pourrait un jour composer de la musique. Le langage de programmation <b>Ada</b> porte son nom.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre",
   "intro": "Si les organigrammes te semblent compliqués, essaie ces autres chemins.",
   "tabs": [
    {
     "label": "🤖 Le robot humain (informatique débranchée)",
     "html": "<p>Jouez à deux : l'un est le <b>programmeur</b>, l'autre le <b>robot</b>. Le robot ne connaît que 4 commandes : <b>AVANCE</b> (d'un pas), <b>TOURNE À DROITE</b>, <b>TOURNE À GAUCHE</b>, <b>PRENDS</b>.</p>\n<p>Le programmeur écrit sur une feuille l'algorithme pour faire arriver le robot jusqu'à la trousse posée sur le bureau et la prendre. Le robot exécute <b>exactement</b> ce qui est écrit, même s'il va droit dans le mur ! 😄</p>\n<p>En Italie, ce type d'activité a été diffusé par <b>CodyRoby</b>, inventé par le professeur Alessandro Bogliolo de l'Université d'Urbino, promoteur de la Semaine du code (<i>Code Week</i>).</p>"
    },
    {
     "label": "🧩 Avec les blocs de Scratch",
     "html": "<p>Dans <b>Scratch</b> (créé en <b>2007</b> au MIT de Boston), on n'écrit pas de code : on emboîte des <b>blocs colorés</b> comme des briques.</p>\n<ul>\n<li>les blocs placés l'un sous l'autre forment la <b>séquence</b> ;</li>\n<li>le bloc <b>« si … alors … sinon »</b> est la sélection (le losange !) ;</li>\n<li>les blocs <b>« répéter 10 fois »</b> et <b>« répéter jusqu'à »</b> sont l'itération (la flèche qui revient en arrière).</li>\n</ul>\n<p>Tout programme Scratch peut se transformer en organigramme, et inversement !</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#f8fafc\"/>\n<rect x=\"60\" y=\"15\" width=\"220\" height=\"36\" rx=\"16\" fill=\"#facc15\"/><text x=\"170\" y=\"39\" font-size=\"16\" text-anchor=\"middle\" fill=\"#422006\" font-weight=\"bold\">quand on clique 🏁</text>\n<rect x=\"60\" y=\"55\" width=\"200\" height=\"34\" rx=\"6\" fill=\"#f59e0b\"/><text x=\"160\" y=\"78\" font-size=\"16\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\">répéter 4 fois</text>\n<rect x=\"60\" y=\"89\" width=\"20\" height=\"80\" fill=\"#f59e0b\"/>\n<rect x=\"80\" y=\"95\" width=\"180\" height=\"32\" rx=\"6\" fill=\"#3b82f6\"/><text x=\"170\" y=\"117\" font-size=\"15\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\">avancer de 100 pas</text>\n<rect x=\"80\" y=\"131\" width=\"180\" height=\"32\" rx=\"6\" fill=\"#3b82f6\"/><text x=\"170\" y=\"153\" font-size=\"15\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\">tourner de 90 degrés</text>\n<rect x=\"60\" y=\"169\" width=\"200\" height=\"22\" rx=\"6\" fill=\"#f59e0b\"/>\n<rect x=\"360\" y=\"40\" width=\"180\" height=\"140\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"5\"/>\n<text x=\"450\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">résultat : un carré !</text>\n</svg>"
    },
    {
     "label": "🍝 La recette de la grand-mère",
     "html": "<p>Une recette est un algorithme pour les personnes :</p>\n<ul>\n<li>les <b>ingrédients</b> sont les <b>entrées</b> ;</li>\n<li>les <b>étapes</b> (« fais bouillir l'eau », « jette les pâtes ») sont les <b>traitements</b> ;</li>\n<li>« <b>goûte : si</b> c'est fade, ajoute du sel » est une <b>sélection</b> ;</li>\n<li>« <b>remue jusqu'à ce que</b> la crème épaississe » est une <b>itération</b> ;</li>\n<li>le <b>plat prêt</b> est la <b>sortie</b>.</li>\n</ul>\n<p>Mais la grand-mère écrit « sel q.s. » (quantité suffisante) : pour un ordinateur, ce serait une instruction <b>ambiguë</b> !</p>"
    },
    {
     "label": "🔢 Euclide avec les nombres",
     "html": "<p>Essaie d'exécuter toi-même l'algorithme d'Euclide comme un ordinateur, avec des divisions avec reste. Sur la droite, tu vois les « sauts » de 18 dans 48 : deux sauts arrivent à 36, le reste est 12. Puis on continue avec 18 et 12…</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 50,
      "step": 2,
      "marks": [
       18,
       36,
       48
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte : de l'algorithme au programme",
   "nodes": [
    {
     "id": "prob",
     "label": "Problème",
     "x": 50,
     "y": 6,
     "color": "#ef4444",
     "html": "Une situation à résoudre.",
     "why": "Tout algorithme naît d'un problème : calculer, trier, chercher, décider. La première étape est de l'<b>analyser</b> : quelles données ai-je (entrée) ? Que veux-je obtenir (sortie) ?"
    },
    {
     "id": "alg",
     "label": "Algorithme",
     "x": 50,
     "y": 28,
     "color": "#3b82f6",
     "html": "Suite finie d'instructions non ambiguës.",
     "why": "Le mot vient d'<b>al-Khwarizmi</b> (IXᵉ siècle). Mais les algorithmes sont plus anciens : les Babyloniens avaient des procédures de calcul sur des tablettes d'argile (vers 1800 av. J.-C.) et Euclide décrivit celui du PGCD vers 300 av. J.-C."
    },
    {
     "id": "prop",
     "label": "Propriétés",
     "x": 15,
     "y": 28,
     "color": "#0ea5e9",
     "html": "Fini, non ambigu, exécutable, général.",
     "why": "En <b>1936</b>, le mathématicien anglais <b>Alan Turing</b> donna une définition précise de « procédure exécutable par une machine » (la machine de Turing) : c'est la base théorique des ordinateurs."
    },
    {
     "id": "fc",
     "label": "Organigramme",
     "x": 22,
     "y": 58,
     "color": "#f59e0b",
     "html": "Représentation graphique avec des blocs et des flèches.",
     "why": "Les premiers « flow process charts » furent présentés par les ingénieurs <b>Frank et Lillian Gilbreth</b> en 1921 pour organiser le travail dans les usines. En 1947, <b>Goldstine et von Neumann</b> les utilisèrent pour les programmes des premiers ordinateurs."
    },
    {
     "id": "pseudo",
     "label": "Pseudo-code",
     "x": 50,
     "y": 58,
     "color": "#a855f7",
     "html": "L'algorithme écrit avec des mots simples et structurés (SI…ALORS, RÉPÈTE…).",
     "why": "C'est un intermédiaire entre la langue humaine et le langage de programmation : il permet de réfléchir à l'algorithme sans se soucier de la syntaxe."
    },
    {
     "id": "strutt",
     "label": "Séquence, sélection, itération",
     "x": 82,
     "y": 40,
     "color": "#22c55e",
     "html": "Les trois structures de base.",
     "why": "Le <b>théorème de Böhm-Jacopini</b> (1966) démontre que ces trois structures suffisent pour écrire n'importe quel algorithme. De là naît la « programmation structurée »."
    },
    {
     "id": "prog",
     "label": "Programme",
     "x": 78,
     "y": 78,
     "color": "#14b8a6",
     "html": "L'algorithme traduit dans un langage pour l'ordinateur.",
     "why": "Les langages de programmation (Scratch, Python, JavaScript…) traduisent les algorithmes en instructions que le processeur comprend. Le premier programme est attribué à <b>Ada Lovelace</b> (1843)."
    },
    {
     "id": "ese",
     "label": "Exécutant",
     "x": 40,
     "y": 88,
     "color": "#64748b",
     "html": "Celui qui exécute : personne, robot, ordinateur.",
     "why": "L'exécutant doit connaître chaque instruction. C'est pourquoi un algorithme pour un ordinateur doit être beaucoup plus précis qu'un algorithme pour une personne, qui utilise son bon sens."
    }
   ],
   "edges": [
    [
     "prob",
     "alg",
     "se résout avec"
    ],
    [
     "alg",
     "prop",
     "doit avoir"
    ],
    [
     "alg",
     "fc",
     "se dessine avec"
    ],
    [
     "alg",
     "pseudo",
     "s'écrit en"
    ],
    [
     "alg",
     "strutt",
     "est fait de"
    ],
    [
     "pseudo",
     "prog",
     "se traduit en"
    ],
    [
     "fc",
     "ese",
     "guide"
    ],
    [
     "prog",
     "ese",
     "exécuté par"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : structures et boucles",
   "questions": [
    {
     "type": "mc",
     "q": "« Répète jusqu'à ce que la bouteille soit pleine » est un exemple de…",
     "options": [
      "séquence",
      "sélection",
      "itération"
     ],
     "answer": 2,
     "explain": "C'est une boucle : on répète jusqu'à ce que la condition change."
    },
    {
     "type": "num",
     "q": "Avec l'algorithme d'Euclide, quel est le PGCD de 30 et 12 ?",
     "answer": 6,
     "tol": 0,
     "explain": "30 : 12 reste 6 ; 12 : 6 reste 0 → PGCD = 6."
    },
    {
     "type": "mc",
     "q": "Qui a démontré que séquence, sélection et itération suffisent ?",
     "options": [
      "Böhm et Jacopini",
      "Euclide",
      "Ada Lovelace"
     ],
     "answer": 0,
     "explain": "Corrado Böhm et Giuseppe Jacopini, en 1966."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Algorithme",
   "d": "Suite finie d'instructions non ambiguës qui résout un problème."
  },
  {
   "t": "Exécutant",
   "d": "Celui (ou ce) qui exécute l'algorithme : personne, robot, ordinateur."
  },
  {
   "t": "Organigramme",
   "d": "Dessin d'un algorithme avec des blocs (ovale, parallélogramme, rectangle, losange) et des flèches."
  },
  {
   "t": "Entrée / Sortie",
   "d": "Données qui entrent / résultats qui sortent."
  },
  {
   "t": "Séquence",
   "d": "Instructions exécutées l'une après l'autre."
  },
  {
   "t": "Sélection",
   "d": "Choix entre deux chemins selon une condition (si… sinon…)."
  },
  {
   "t": "Itération (boucle)",
   "d": "Répétition d'instructions un certain nombre de fois ou tant qu'une condition est vraie."
  },
  {
   "t": "Boucle infinie",
   "d": "Boucle qui ne se termine jamais parce que la condition de sortie ne se produit pas."
  },
  {
   "t": "Pseudo-code",
   "d": "Algorithme écrit dans un langage simple et structuré."
  },
  {
   "t": "Coding",
   "d": "Programmer : écrire des instructions pour un ordinateur."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Laquelle n'est PAS une propriété d'un algorithme ?",
    "options": [
     "fini",
     "ambigu",
     "exécutable"
    ],
    "answer": 1,
    "explain": "Un algorithme doit être NON ambigu."
   },
   {
    "type": "mc",
    "q": "Dans l'organigramme, l'ovale indique…",
    "options": [
     "début et fin",
     "une décision",
     "un calcul"
    ],
    "answer": 0,
    "explain": "Ovale = Début / Fin."
   },
   {
    "type": "mc",
    "q": "D'un losange de décision sortent…",
    "options": [
     "une flèche",
     "deux flèches (oui / non)",
     "aucune flèche"
    ],
    "answer": 1,
    "explain": "Une pour le oui, une pour le non."
   },
   {
    "type": "tf",
    "q": "« Somme ← A + B » va dans un rectangle de traitement.",
    "answer": true,
    "explain": "C'est un calcul : rectangle."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre l'algorithme pour se laver les dents.",
    "items": [
     "Prends la brosse à dents",
     "Mets le dentifrice",
     "Brosse les dents pendant 2 minutes",
     "Rince la bouche",
     "Lave la brosse à dents"
    ],
    "explain": "D'abord on prépare la brosse à dents, puis on brosse, enfin on rince et on lave la brosse à dents."
   },
   {
    "type": "mc",
    "q": "« Si la température dépasse 25 °C, allume le ventilateur » est…",
    "options": [
     "une séquence",
     "une sélection",
     "une boucle"
    ],
    "answer": 1,
    "explain": "Il y a une condition avec un choix : sélection."
   },
   {
    "type": "text",
    "q": "Comment s'appelle une boucle qui ne se termine jamais ?",
    "answer": [
     "boucle infinie",
     "boucle sans fin",
     "infinie"
    ],
    "explain": "Boucle infinie (ou sans fin)."
   },
   {
    "type": "num",
    "q": "Utilise l'algorithme d'Euclide : PGCD de 84 et 36 ?",
    "answer": 12,
    "tol": 0,
    "explain": "84 : 36 reste 12 ; 36 : 12 reste 0 → PGCD = 12."
   },
   {
    "type": "mc",
    "q": "Le mot « algorithme » vient de…",
    "options": [
     "un mathématicien persan, al-Khwarizmi",
     "un mot grec qui signifie nombre",
     "le nom d'un ordinateur"
    ],
    "answer": 0,
    "explain": "Du latin « Algoritmi », nom d'al-Khwarizmi (IXᵉ siècle)."
   },
   {
    "type": "tf",
    "q": "Un ordinateur comprend les instructions ambiguës grâce au bon sens.",
    "answer": false,
    "explain": "L'ordinateur exécute à la lettre : les instructions doivent être précises."
   },
   {
    "type": "mc",
    "q": "Un algorithme lit un nombre et répète « écris bonjour » ce nombre de fois. Si l'entrée est 3, combien de fois écrit-il « bonjour » ?",
    "options": [
     "1",
     "3",
     "une infinité de fois"
    ],
    "answer": 1,
    "explain": "La boucle se répète 3 fois."
   },
   {
    "type": "mc",
    "q": "Qui est considérée comme la première programmeuse de l'histoire ?",
    "options": [
     "Marie Curie",
     "Ada Lovelace",
     "Rita Levi-Montalcini"
    ],
    "answer": 1,
    "explain": "Ada Lovelace, 1843."
   }
  ],
  "gen": [
   [
    "gcd",
    2
   ]
  ]
 }
});
