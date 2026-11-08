TOPIC('fr', {
 "id": "m3-mat-probabilita",
 "title": "Probabilités et statistique",
 "intro": "Combien de camarades préfèrent le football ? Quelle est la note la plus fréquente ? Quelle chance ai-je de faire 6 avec un dé ? La <b>statistique</b> recueille et résume les données, la <b>probabilité</b> mesure la facilité avec laquelle un événement peut se produire. Ensemble, elles nous aident à prendre des décisions quand tout n'est pas certain.",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "1. Qu'est-ce qu'une enquête statistique",
   "html": "<p>La <b>statistique</b> étudie les phénomènes <b>collectifs</b>, c'est-à-dire qui concernent de nombreux individus (personnes, objets, événements). Une enquête statistique se fait en 4 étapes :</p>\n<ol>\n<li><b>Définir le problème</b> et la <b>population</b> (l'ensemble de tous les éléments que l'on veut étudier : par ex. tous les élèves de l'école).</li>\n<li><b>Recueillir les données</b> : sur toute la population (<b>recensement</b>) ou bien sur une partie bien choisie, l'<b>échantillon</b>.</li>\n<li><b>Organiser les données</b> dans des tableaux et les représenter avec des graphiques.</li>\n<li><b>Traiter et interpréter</b> : calculer des effectifs, des fréquences et des indicateurs (moyenne, mode, médiane) et tirer des conclusions.</li>\n</ol>\n<p>Chaque propriété que nous observons s'appelle un <b>caractère</b>. Un caractère peut être :</p>\n<ul>\n<li><b>qualitatif</b>, exprimé avec des mots (couleur préférée, sport pratiqué) ;</li>\n<li><b>quantitatif</b>, exprimé avec des nombres (taille, nombre de frères et sœurs, note). Ses valeurs s'appellent des <b>modalités</b>.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "2. Les fréquences : absolue, relative, en pourcentage",
   "html": "<p>Demandons aux 25 élèves d'une classe de 3ᵉ : <i>« Quel sport pratiques-tu ? »</i>. Comptons les réponses :</p>\n<table>\n<tr><th>Sport</th><th>Fréquence absolue</th><th>Fréquence relative</th><th>Fréquence en pourcentage</th></tr>\n<tr><td>⚽ Football</td><td>10</td><td>10/25 = 0,40</td><td>40 %</td></tr>\n<tr><td>🏐 Volley-ball</td><td>6</td><td>6/25 = 0,24</td><td>24 %</td></tr>\n<tr><td>🏊 Natation</td><td>5</td><td>5/25 = 0,20</td><td>20 %</td></tr>\n<tr><td>🤸 Gymnastique</td><td>4</td><td>4/25 = 0,16</td><td>16 %</td></tr>\n<tr><td><b>Total</b></td><td><b>25</b></td><td><b>1</b></td><td><b>100 %</b></td></tr>\n</table>\n<ul>\n<li><b>Fréquence absolue</b> (f) : combien de fois apparaît une modalité.</li>\n<li><b>Fréquence relative</b> : f divisé par le total des données. La somme des fréquences relatives est toujours <b>1</b>.</li>\n<li><b>Fréquence en pourcentage</b> : fréquence relative × 100. La somme est toujours <b>100 %</b>.</li>\n</ul>\n<p>Les fréquences relatives servent à <b>comparer</b> des groupes de tailles différentes : 10 footballeurs sur 25 (40 %), c'est « plus » que 12 footballeurs sur 40 (30 %) !</p>"
  },
  {
   "type": "svg",
   "title": "Les mêmes données en deux graphiques",
   "svg": "<svg viewBox=\"0 0 640 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"320\" fill=\"#f8fafc\"/>\n<text x=\"160\" y=\"26\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">Diagramme en barres</text>\n<line x1=\"40\" y1=\"270\" x2=\"300\" y2=\"270\" stroke=\"#334155\" stroke-width=\"2\"/>\n<line x1=\"40\" y1=\"270\" x2=\"40\" y2=\"50\" stroke=\"#334155\" stroke-width=\"2\"/>\n<text x=\"32\" y=\"274\" font-size=\"14\" text-anchor=\"end\" fill=\"#334155\">0</text>\n<text x=\"32\" y=\"174\" font-size=\"14\" text-anchor=\"end\" fill=\"#334155\">5</text>\n<text x=\"32\" y=\"74\" font-size=\"14\" text-anchor=\"end\" fill=\"#334155\">10</text>\n<line x1=\"40\" y1=\"170\" x2=\"300\" y2=\"170\" stroke=\"#cbd5e1\" stroke-dasharray=\"4\"/>\n<line x1=\"40\" y1=\"70\" x2=\"300\" y2=\"70\" stroke=\"#cbd5e1\" stroke-dasharray=\"4\"/>\n<rect x=\"55\" y=\"70\" width=\"45\" height=\"200\" fill=\"#ef4444\"/>\n<rect x=\"115\" y=\"150\" width=\"45\" height=\"120\" fill=\"#3b82f6\"/>\n<rect x=\"175\" y=\"170\" width=\"45\" height=\"100\" fill=\"#22c55e\"/>\n<rect x=\"235\" y=\"190\" width=\"45\" height=\"80\" fill=\"#f59e0b\"/>\n<text x=\"77\" y=\"62\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1e293b\">10</text>\n<text x=\"137\" y=\"142\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1e293b\">6</text>\n<text x=\"197\" y=\"162\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1e293b\">5</text>\n<text x=\"257\" y=\"182\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1e293b\">4</text>\n<text x=\"77\" y=\"292\" font-size=\"14\" text-anchor=\"middle\" fill=\"#1e293b\">Football</text>\n<text x=\"137\" y=\"292\" font-size=\"14\" text-anchor=\"middle\" fill=\"#1e293b\">Volley-ball</text>\n<text x=\"197\" y=\"292\" font-size=\"14\" text-anchor=\"middle\" fill=\"#1e293b\">Natation</text>\n<text x=\"257\" y=\"292\" font-size=\"14\" text-anchor=\"middle\" fill=\"#1e293b\">Gymnastique</text>\n<text x=\"480\" y=\"26\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">Diagramme circulaire</text>\n<path d=\"M480 165 L480 55 A110 110 0 0 1 544.66 254 Z\" fill=\"#ef4444\"/>\n<path d=\"M480 165 L544.66 254 A110 110 0 0 1 395.25 235.1 Z\" fill=\"#3b82f6\"/>\n<path d=\"M480 165 L395.25 235.1 A110 110 0 0 1 387.1 106.1 Z\" fill=\"#22c55e\"/>\n<path d=\"M480 165 L387.1 106.1 A110 110 0 0 1 480 55 Z\" fill=\"#f59e0b\"/>\n<text x=\"520\" y=\"140\" font-size=\"16\" font-weight=\"bold\" fill=\"#ffffff\">40%</text>\n<text x=\"472\" y=\"235\" font-size=\"16\" font-weight=\"bold\" fill=\"#ffffff\">24%</text>\n<text x=\"398\" y=\"178\" font-size=\"16\" font-weight=\"bold\" fill=\"#ffffff\">20%</text>\n<text x=\"430\" y=\"112\" font-size=\"16\" font-weight=\"bold\" fill=\"#ffffff\">16%</text>\n<text x=\"480\" y=\"300\" font-size=\"14\" text-anchor=\"middle\" fill=\"#334155\">angle = pourcentage × 3,6°  (40 % → 144°)</text>\n</svg>",
   "caption": "Le diagramme en barres compare bien les quantités ; le diagramme circulaire montre les parties d'un tout. Dans le diagramme circulaire, chaque secteur a un angle proportionnel à la fréquence : 100 % = 360°."
  },
  {
   "type": "text",
   "title": "3. Les indicateurs : moyenne, mode, médiane",
   "html": "<p>Pour résumer beaucoup de données avec <b>un seul nombre</b>, on utilise les <b>indicateurs de position centrale</b>. Prenons les notes de Luc en mathématiques : <b>5, 7, 6, 8, 7, 9, 7</b>.</p>\n<ul>\n<li><b>Moyenne arithmétique</b> : somme de toutes les valeurs divisée par leur nombre.<br>(5+7+6+8+7+9+7) : 7 = 49 : 7 = <b>7</b>.</li>\n<li><b>Mode</b> : la valeur la plus fréquente. Le 7 apparaît 3 fois : mode = <b>7</b>. (Une distribution peut avoir plusieurs modes, ou aucun. Le mode vaut aussi pour les caractères qualitatifs : dans le tableau des sports, le mode est « football ».)</li>\n<li><b>Médiane</b> : on range les données <b>dans l'ordre</b> et on prend celle du <b>milieu</b>.<br>5, 6, 7, <b>7</b>, 7, 8, 9 → médiane = <b>7</b>. Si les données sont en nombre pair, la médiane est la moyenne des deux valeurs centrales.</li>\n<li><b>Étendue</b> : valeur maximale − valeur minimale = 9 − 5 = <b>4</b>. Elle dit à quel point les données sont « dispersées ».</li>\n</ul>\n<p>⚠️ La moyenne est sensible aux valeurs extrêmes : si, dans une entreprise, 9 personnes gagnent 1 500 € et le patron 30 000 €, la moyenne est de 4 350 €, mais aucun employé ne gagne cela ! Dans ces cas, la <b>médiane</b> (1 500 €) décrit mieux la situation.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : les températures de la semaine",
   "html": "<p>À Turin, pendant une semaine d'avril, les températures maximales ont été : <b>14, 16, 15, 19, 21, 16, 18 °C</b>.</p>\n<ul>\n<li>Moyenne : (14+16+15+19+21+16+18) : 7 = 119 : 7 = <b>17 °C</b> ;</li>\n<li>Rangées : 14, 15, 16, <b>16</b>, 18, 19, 21 → médiane = <b>16 °C</b> ;</li>\n<li>Mode = <b>16 °C</b> (apparaît 2 fois) ;</li>\n<li>Étendue = 21 − 14 = <b>7 °C</b>.</li>\n</ul>\n<p>Les météorologues utilisent justement ces indicateurs pour dire si un mois a été « plus chaud que la moyenne ».</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : statistique",
   "questions": [
    {
     "type": "num",
     "q": "Calcule la moyenne de 4, 8, 6, 10.",
     "answer": 7,
     "explain": "(4+8+6+10) : 4 = 28 : 4 = 7."
    },
    {
     "type": "num",
     "q": "Quelle est la médiane de 3, 9, 4, 7, 5 ?",
     "answer": 5,
     "explain": "Dans l'ordre : 3, 4, 5, 7, 9. La valeur centrale est 5."
    },
    {
     "type": "mc",
     "q": "La couleur des yeux est un caractère…",
     "options": [
      "quantitatif",
      "qualitatif",
      "numérique continu"
     ],
     "answer": 1,
     "explain": "Elle s'exprime avec des mots (bleus, marron…), donc elle est qualitative."
    },
    {
     "type": "num",
     "q": "Dans une classe de 20 élèves, 5 ont un chat. Quelle est la fréquence en pourcentage ?",
     "answer": 25,
     "unit": "%",
     "explain": "5/20 = 0,25 → 25%."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Les événements : certains, impossibles, probables",
   "html": "<p>Un <b>événement</b> est un fait qui peut se produire ou non comme résultat d'une expérience (lancer un dé, tirer une carte…). Les événements peuvent être :</p>\n<ul>\n<li><b>certains</b> : ils se produisent toujours (en lançant un dé, il sort un nombre inférieur à 7) ;</li>\n<li><b>impossibles</b> : ils ne se produisent jamais (il sort 8) ;</li>\n<li><b>aléatoires</b> ou <b>probables</b> : ils peuvent se produire ou non (il sort 6).</li>\n</ul>\n<p>L'ensemble de tous les résultats possibles s'appelle l'<b>univers</b> (ou espace des issues). Pour un dé : {1, 2, 3, 4, 5, 6}.</p>"
  },
  {
   "type": "widget",
   "title": "Certain, probable ou impossible ?",
   "widget": "classify",
   "options": {
    "groups": [
     "✅ Certain",
     "🎲 Probable",
     "🚫 Impossible"
    ],
    "items": [
     [
      "Demain, après lundi, c'est mardi",
      0
     ],
     [
      "En lançant un dé, il sort un nombre pair",
      1
     ],
     [
      "En lançant un dé, il sort 7",
      2
     ],
     [
      "En tirant une carte d'un jeu de 40, il sort un as",
      1
     ],
     [
      "En lançant une pièce, il sort pile ou face",
      0
     ],
     [
      "Dans un sac avec seulement des billes rouges, je tire une bille bleue",
      2
     ],
     [
      "Demain, il pleuvra à Milan",
      1
     ],
     [
      "En lançant deux dés, la somme est 1",
      2
     ]
    ]
   },
   "caption": "Fais glisser ou touche chaque événement et place-le dans le bon groupe."
  },
  {
   "type": "text",
   "title": "5. La probabilité classique",
   "html": "<p>Si tous les résultats sont <b>également possibles</b> (dé non truqué, pièce équilibrée…), la probabilité d'un événement E est :</p>\n<p style=\"text-align:center;font-size:1.25em\"><b>p(E) = cas favorables / cas possibles</b></p>\n<p>Exemples avec un dé :</p>\n<ul>\n<li>p(il sort 6) = <b>1/6</b> ≈ 0,167 ≈ 16,7 % ;</li>\n<li>p(il sort un nombre pair) = 3/6 = <b>1/2</b> = 50 % (favorables : 2, 4, 6) ;</li>\n<li>p(il sort un nombre inférieur à 7) = 6/6 = <b>1</b> → événement <b>certain</b> ;</li>\n<li>p(il sort 8) = 0/6 = <b>0</b> → événement <b>impossible</b>.</li>\n</ul>\n<p>Donc la probabilité est toujours un nombre <b>compris entre 0 et 1</b> (c'est-à-dire entre 0 % et 100 %) et peut s'écrire sous forme de fraction, de nombre décimal ou de pourcentage.</p>\n<p><b>Événement contraire</b> : « il ne sort pas 6 » a pour probabilité 1 − 1/6 = <b>5/6</b>. En général, p(non E) = 1 − p(E).</p>"
  },
  {
   "type": "3d",
   "title": "Le dé : 6 faces, 6 cas possibles",
   "scene": "solid",
   "options": {
    "shape": "cube",
    "color": "#f8fafc",
    "labels": true
   },
   "caption": "Un dé est un cube : 6 faces identiques, donc (s'il n'est pas truqué) chaque face a la même probabilité, 1/6. Fais-le tourner : les faces opposées d'un vrai dé ont toujours une somme de 7 (1-6, 2-5, 3-4)."
  },
  {
   "type": "widget",
   "title": "La probabilité comme partie d'un tout",
   "widget": "fractionPie",
   "options": {
    "n": 1,
    "d": 6
   },
   "caption": "Une probabilité est une fraction du tout (le tout = événement certain = 1). Essaie : 3/6 est la probabilité d'un nombre pair, 2/6 celle de « plus de 4 »…"
  },
  {
   "type": "example",
   "title": "Exemple pratique : la somme de deux dés",
   "html": "<p>Lançons deux dés (un rouge et un bleu) et additionnons les points. Les cas possibles sont <b>6 × 6 = 36</b> (chaque face du rouge avec chaque face du bleu).</p>\n<p>La somme 7 s'obtient de <b>6 façons</b> : 1+6, 2+5, 3+4, 4+3, 5+2, 6+1 → p = 6/36 = <b>1/6</b>.<br>\nLa somme 2 d'une seule façon (1+1) → p = <b>1/36</b>. La somme 12 seulement avec 6+6 → <b>1/36</b>.</p>\n<p>Voilà pourquoi, dans les jeux de société avec deux dés, le 7 sort si souvent ! Les sommes ne sont pas également probables, même si chaque dé est équilibré.</p>"
  },
  {
   "type": "3d",
   "title": "Les 36 cas des deux dés en 3D",
   "scene": "blocks",
   "options": {
    "mode": "array",
    "a": 6,
    "b": 6
   },
   "caption": "Chaque petit cube est un couple (dé rouge, dé bleu). Les couples de somme 7 sont sur une diagonale : il y en a 6 sur 36."
  },
  {
   "type": "text",
   "title": "6. Probabilité fréquentiste et événements composés",
   "html": "<p>Les cas ne sont pas toujours également possibles (un dé truqué, la probabilité qu'une voiture tombe en panne…). Alors on fait beaucoup d'<b>essais</b> et on calcule la <b>fréquence relative</b> :</p>\n<p style=\"text-align:center\"><b>f = nombre de fois où E s'est produit / nombre d'essais</b></p>\n<p>La <b>loi des grands nombres</b> dit que, quand le nombre d'essais augmente, la fréquence relative se rapproche de plus en plus de la probabilité. Avec 10 lancers de pièce, tu peux avoir 7 faces ; avec 10 000 lancers, tu seras très proche de 50 %.</p>\n<p><b>Événements composés</b> :</p>\n<ul>\n<li><b>Événements incompatibles</b> (ils ne peuvent pas se produire ensemble) : p(A <b>ou</b> B) = p(A) + p(B). Ex. dé : p(1 ou 2) = 1/6 + 1/6 = 1/3.</li>\n<li><b>Événements indépendants</b> (l'un n'influence pas l'autre) : p(A <b>et</b> B) = p(A) × p(B). Ex. deux pièces : p(face et face) = 1/2 × 1/2 = 1/4.</li>\n</ul>\n<p>⚠️ <b>Le dé n'a pas de mémoire !</b> Si « face » est sorti 5 fois de suite, au lancer suivant la probabilité de pile est toujours 1/2. Croire le contraire s'appelle l'<b>erreur du joueur</b> : c'est l'une des raisons pour lesquelles les jeux d'argent créent une dépendance et font perdre de l'argent.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? La probabilité est née d'une partie de dés",
   "html": "<p>En <b>1654</b>, un joueur français, le chevalier de Méré, demanda au mathématicien <b>Blaise Pascal</b> comment partager la mise d'une partie interrompue. Pascal en discuta par lettres avec <b>Pierre de Fermat</b> : de ces lettres naquit le calcul des probabilités. Déjà un siècle auparavant, l'Italien <b>Gerolamo Cardano</b> avait écrit un livre sur les jeux de dés, le <i>Liber de ludo aleae</i>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le paradoxe des anniversaires",
   "html": "<p>Dans une classe de <b>23 personnes</b>, il y a plus de <b>50 %</b> de chances qu'au moins deux fêtent leur anniversaire le même jour ; avec 30 personnes, on arrive à environ <b>70 %</b> ! Cela paraît étrange, mais les paires possibles parmi 23 personnes sont 253. Essayez de le vérifier dans votre classe.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Un graphique qui a sauvé des vies",
   "html": "<p>L'infirmière anglaise <b>Florence Nightingale</b>, pendant la guerre de Crimée (1854-1856), dessina des graphiques circulaires spéciaux pour montrer que la plupart des soldats mouraient d'infections dans les hôpitaux, et non de leurs blessures. Grâce à ses données, les hôpitaux militaires améliorèrent l'hygiène. En France, les données sur la population sont recueillies par l'<b>INSEE</b>, avec le recensement.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre la probabilité",
   "intro": "Si la formule « favorables sur possibles » ne te convainc pas, essaie l'une de ces voies.",
   "tabs": [
    {
     "label": "🌳 Arbre de probabilités",
     "html": "<p>Pour les événements en plusieurs étapes, on dessine un <b>arbre</b> : chaque branche est un résultat et porte sa probabilité. Pour connaître la probabilité d'un chemin, on <b>multiplie</b> les probabilités sur les branches. Exemple : je lance deux fois une pièce. Il y a 4 chemins, chacun de probabilité 1/2 × 1/2 = 1/4. « Au moins une face » = FF, FP, PF → 3/4.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/>\n<circle cx=\"60\" cy=\"150\" r=\"12\" fill=\"#0f172a\"/>\n<line x1=\"60\" y1=\"150\" x2=\"230\" y2=\"80\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<line x1=\"60\" y1=\"150\" x2=\"230\" y2=\"220\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<text x=\"130\" y=\"100\" font-size=\"16\" fill=\"#2563eb\">1/2</text>\n<text x=\"130\" y=\"215\" font-size=\"16\" fill=\"#dc2626\">1/2</text>\n<circle cx=\"245\" cy=\"80\" r=\"20\" fill=\"#2563eb\"/><text x=\"245\" y=\"86\" font-size=\"17\" fill=\"#fff\" text-anchor=\"middle\">F</text>\n<circle cx=\"245\" cy=\"220\" r=\"20\" fill=\"#dc2626\"/><text x=\"245\" y=\"226\" font-size=\"17\" fill=\"#fff\" text-anchor=\"middle\">P</text>\n<line x1=\"265\" y1=\"80\" x2=\"400\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<line x1=\"265\" y1=\"80\" x2=\"400\" y2=\"115\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<line x1=\"265\" y1=\"220\" x2=\"400\" y2=\"185\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<line x1=\"265\" y1=\"220\" x2=\"400\" y2=\"260\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<circle cx=\"418\" cy=\"40\" r=\"18\" fill=\"#2563eb\"/><text x=\"418\" y=\"46\" font-size=\"16\" fill=\"#fff\" text-anchor=\"middle\">F</text>\n<circle cx=\"418\" cy=\"115\" r=\"18\" fill=\"#dc2626\"/><text x=\"418\" y=\"121\" font-size=\"16\" fill=\"#fff\" text-anchor=\"middle\">P</text>\n<circle cx=\"418\" cy=\"185\" r=\"18\" fill=\"#2563eb\"/><text x=\"418\" y=\"191\" font-size=\"16\" fill=\"#fff\" text-anchor=\"middle\">F</text>\n<circle cx=\"418\" cy=\"260\" r=\"18\" fill=\"#dc2626\"/><text x=\"418\" y=\"266\" font-size=\"16\" fill=\"#fff\" text-anchor=\"middle\">P</text>\n<text x=\"450\" y=\"46\" font-size=\"16\" fill=\"#0f172a\">TT → 1/4</text>\n<text x=\"450\" y=\"121\" font-size=\"16\" fill=\"#0f172a\">TC → 1/4</text>\n<text x=\"450\" y=\"191\" font-size=\"16\" fill=\"#0f172a\">CT → 1/4</text>\n<text x=\"450\" y=\"266\" font-size=\"16\" fill=\"#0f172a\">CC → 1/4</text>\n<text x=\"20\" y=\"290\" font-size=\"15\" fill=\"#475569\">1ᵉʳ lancer</text>\n<text x=\"300\" y=\"290\" font-size=\"15\" fill=\"#475569\">2ᵉ lancer</text>\n</svg>"
    },
    {
     "label": "🍬 Le sachet de bonbons",
     "html": "<p>Imagine un sachet de <b>10 bonbons</b> : 3 à la fraise, 5 au citron, 2 à la menthe. Tu piochez les yeux fermés. La probabilité de prendre la fraise est la <b>part du camembert</b> que les bonbons à la fraise occupent : 3 sur 10. Déplace les curseurs : si tu ajoutes des bonbons à la fraise, la part (et la probabilité) augmente ; si tu ajoutes des bonbons d'autres parfums, le dénominateur augmente et la probabilité baisse.</p>",
     "widget": "fractionPie",
     "options": {
      "n": 3,
      "d": 10
     }
    },
    {
     "label": "🧊 Tableau à double entrée en 3D",
     "html": "<p>Pour deux dés, au lieu de la formule, construis la <b>grille</b> : lignes = dé rouge, colonnes = dé bleu. Chaque petit cube est un cas. Compte les cubes qui t'intéressent : c'est la méthode la plus utilisée dans les écoles du Royaume-Uni et des États-Unis (« sample space diagram »). Change les nombres : avec un dé à 4 faces et un à 6 faces, les cas sont 24.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 6,
      "b": 6
     }
    },
    {
     "label": "🇬🇧 Les « odds » (cotes)",
     "html": "<p>Dans les pays anglo-saxons, on utilise souvent les <b>odds</b> : au lieu de « favorables sur possibles », on dit « favorables <b>contre</b> défavorables ». Pour le 6 d'un dé : odds <b>1 contre 5</b> (1 cas favorable, 5 défavorables), alors que la probabilité est 1/6.</p>\n<table><tr><th>Événement</th><th>Probabilité</th><th>Odds</th></tr>\n<tr><td>Face avec une pièce</td><td>1/2</td><td>1 contre 1</td></tr>\n<tr><td>Il sort 6</td><td>1/6</td><td>1 contre 5</td></tr>\n<tr><td>As dans 40 cartes</td><td>4/40 = 1/10</td><td>4 contre 36 = 1 contre 9</td></tr></table>\n<p>Pour passer des odds « a contre b » à la probabilité : p = a / (a + b).</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte : des données à la probabilité",
   "nodes": [
    {
     "id": "dati",
     "label": "Données et population",
     "x": 50,
     "y": 6,
     "color": "#0ea5e9",
     "html": "Les valeurs recueillies en observant un caractère sur une population ou sur un échantillon.",
     "why": "Les États recueillent des données depuis des millénaires : des recensements se faisaient déjà en Égypte, en Chine et à Rome (le <i>census</i> servait pour les impôts et le service militaire). Le mot <b>statistique</b> vient de « État » : au XVIIIᵉ siècle, il désignait la science des informations utiles pour gouverner."
    },
    {
     "id": "frequenze",
     "label": "Fréquences",
     "x": 20,
     "y": 28,
     "color": "#22c55e",
     "html": "Absolue, relative (f/n) et en pourcentage (×100).",
     "why": "Elles servent à comparer des groupes de tailles différentes : en divisant par le total, on ramène tout à la même échelle (« sur 1 » ou « sur 100 »)."
    },
    {
     "id": "grafici",
     "label": "Graphiques",
     "x": 50,
     "y": 30,
     "color": "#f59e0b",
     "html": "Diagrammes en barres, diagrammes circulaires, diagrammes cartésiens, pictogrammes.",
     "why": "Le diagramme en barres et le diagramme circulaire furent inventés par l'Écossais <b>William Playfair</b> entre 1786 et 1801 : une image fait voir d'un coup d'œil ce qu'un tableau cache."
    },
    {
     "id": "indici",
     "label": "Moyenne, mode, médiane",
     "x": 80,
     "y": 28,
     "color": "#a855f7",
     "html": "Indicateurs qui résument une distribution avec une seule valeur centrale.",
     "why": "La moyenne naît de l'idée de « partager en parts égales » le total ; la médiane résiste mieux aux valeurs extrêmes ; le mode est le seul utilisable avec des données non numériques."
    },
    {
     "id": "evento",
     "label": "Événement",
     "x": 30,
     "y": 55,
     "color": "#ef4444",
     "html": "Un résultat possible d'une expérience aléatoire : certain, impossible ou probable.",
     "why": "Une expérience est aléatoire quand nous connaissons les résultats possibles mais pas celui qui va sortir : c'est le cas du dé, mais aussi de la météo ou de la génétique (Mendel a justement utilisé la probabilité pour expliquer l'hérédité)."
    },
    {
     "id": "classica",
     "label": "Probabilité classique",
     "x": 15,
     "y": 80,
     "color": "#2563eb",
     "html": "p = cas favorables / cas possibles, si les cas sont équiprobables.",
     "why": "Elle naît des lettres entre <b>Pascal</b> et <b>Fermat</b> (1654) sur les jeux d'argent ; Laplace la formula de façon complète en 1812. Elle ne fonctionne que si les cas ont tous la même probabilité."
    },
    {
     "id": "frequentista",
     "label": "Probabilité fréquentiste",
     "x": 50,
     "y": 80,
     "color": "#14b8a6",
     "html": "La probabilité estimée comme fréquence relative après un très grand nombre d'essais.",
     "why": "Elle repose sur la <b>loi des grands nombres</b>, démontrée par <b>Jacques Bernoulli</b> (publiée en 1713) : plus on fait d'essais, plus la fréquence se rapproche de la probabilité. C'est ainsi que les assurances calculent les risques."
    },
    {
     "id": "composti",
     "label": "Événements composés",
     "x": 85,
     "y": 62,
     "color": "#db2777",
     "html": "Somme pour les événements incompatibles (ou), produit pour les événements indépendants (et).",
     "why": "Si deux événements ne se chevauchent pas, leurs cas favorables s'additionnent ; s'ils sont indépendants, chaque cas du premier se combine avec chaque cas du second, comme dans la grille 6×6 des deux dés : c'est pourquoi on multiplie."
    },
    {
     "id": "decisioni",
     "label": "Décisions dans l'incertitude",
     "x": 85,
     "y": 92,
     "color": "#64748b",
     "html": "Prévisions météo, médecine, assurances, sondages, sport.",
     "why": "La statistique et les probabilités permettent de décider rationnellement quand on ne peut pas être sûr : par exemple, un médicament est approuvé en comparant statistiquement un groupe qui le prend et un groupe qui ne le prend pas."
    }
   ],
   "edges": [
    [
     "dati",
     "frequenze",
     "se comptent"
    ],
    [
     "dati",
     "grafici",
     "se représentent"
    ],
    [
     "dati",
     "indici",
     "se résument"
    ],
    [
     "frequenze",
     "frequentista",
     "estiment la"
    ],
    [
     "evento",
     "classica",
     "se mesure avec la"
    ],
    [
     "evento",
     "frequentista",
     "ou avec la"
    ],
    [
     "classica",
     "composti",
     "se combine en"
    ],
    [
     "composti",
     "decisioni",
     "aident les"
    ],
    [
     "indici",
     "decisioni",
     "aident les"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : probabilité",
   "questions": [
    {
     "type": "mc",
     "q": "Quelle est la probabilité de tirer un cœur dans un jeu de 52 cartes (13 cœurs) ?",
     "options": [
      "1/13",
      "1/4",
      "1/2"
     ],
     "answer": 1,
     "explain": "13/52 = 1/4."
    },
    {
     "type": "tf",
     "q": "Une probabilité peut valoir 1,5.",
     "answer": false,
     "explain": "La probabilité est toujours comprise entre 0 (impossible) et 1 (certain)."
    },
    {
     "type": "num",
     "q": "Un sac contient 4 billes rouges et 6 bleues. Quelle est la probabilité (en %) de tirer une bille rouge ?",
     "answer": 40,
     "unit": "%",
     "explain": "4/10 = 0,4 = 40%."
    },
    {
     "type": "mc",
     "q": "Pile est sorti 4 fois de suite. Au 5ᵉ lancer, la probabilité de pile est…",
     "options": [
      "plus basse que 1/2",
      "1/2",
      "plus haute que 1/2"
     ],
     "answer": 1,
     "explain": "Les lancers sont indépendants : la pièce ne se souvient pas des résultats précédents."
    }
   ]
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Fréquence relative = f / n ; pourcentage = relative × 100.</li>\n<li><b>Moyenne</b> = somme : nombre de données ; <b>mode</b> = valeur la plus fréquente ; <b>médiane</b> = valeur centrale des données rangées.</li>\n<li><b>p(E) = favorables / possibles</b>, avec 0 ≤ p ≤ 1. Événement certain : 1 ; impossible : 0.</li>\n<li>p(non E) = 1 − p(E).</li>\n<li>Incompatibles : p(A ou B) = p(A) + p(B). Indépendants : p(A et B) = p(A) × p(B).</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Population statistique",
   "d": "L'ensemble de tous les éléments sur lesquels on fait une enquête."
  },
  {
   "t": "Échantillon",
   "d": "Une partie de la population, choisie de manière à la représenter."
  },
  {
   "t": "Caractère",
   "d": "La propriété observée (qualitative ou quantitative)."
  },
  {
   "t": "Fréquence absolue",
   "d": "Combien de fois apparaît une valeur."
  },
  {
   "t": "Fréquence relative",
   "d": "Fréquence absolue divisée par le nombre total de données."
  },
  {
   "t": "Moyenne arithmétique",
   "d": "Somme des valeurs divisée par leur nombre."
  },
  {
   "t": "Mode",
   "d": "La valeur qui apparaît le plus souvent."
  },
  {
   "t": "Médiane",
   "d": "La valeur centrale des données rangées dans l'ordre."
  },
  {
   "t": "Événement aléatoire",
   "d": "Un événement qui peut se produire ou ne pas se produire."
  },
  {
   "t": "Univers (espace des issues)",
   "d": "L'ensemble de tous les résultats possibles d'une expérience."
  },
  {
   "t": "Événements indépendants",
   "d": "Événements pour lesquels la réalisation de l'un ne change pas la probabilité de l'autre."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Calcule la moyenne de 12, 15, 18, 15.",
    "answer": 15,
    "explain": "(12+15+18+15) : 4 = 60 : 4 = 15."
   },
   {
    "type": "num",
    "q": "Quelle est la médiane de 2, 8, 5, 10, 4, 9 ?",
    "answer": 6.5,
    "tol": 0.01,
    "explain": "Dans l'ordre : 2, 4, 5, 8, 9, 10. Les deux valeurs centrales sont 5 et 8 : (5+8):2 = 6,5."
   },
   {
    "type": "text",
    "q": "Comment s'appelle la valeur qui apparaît le plus souvent dans une série de données ?",
    "answer": [
     "mode",
     "le mode"
    ],
    "explain": "C'est le mode."
   },
   {
    "type": "mc",
    "q": "Le nombre de frères et sœurs est un caractère…",
    "options": [
     "qualitatif",
     "quantitatif",
     "ni l'un ni l'autre"
    ],
    "answer": 1,
    "explain": "Il s'exprime avec un nombre."
   },
   {
    "type": "num",
    "q": "Dans un diagramme circulaire, combien de degrés occupe un secteur qui représente 25 % ?",
    "answer": 90,
    "unit": "°",
    "explain": "25 × 3,6° = 90°."
   },
   {
    "type": "mc",
    "q": "En lançant un dé, quelle est la probabilité qu'il sorte un nombre supérieur à 4 ?",
    "options": [
     "1/6",
     "1/3",
     "1/2",
     "2/3"
    ],
    "answer": 1,
    "explain": "Favorables : 5 et 6 → 2/6 = 1/3."
   },
   {
    "type": "tf",
    "q": "L'événement « en lançant un dé, il sort 0 » a pour probabilité 0.",
    "answer": true,
    "explain": "C'est un événement impossible."
   },
   {
    "type": "num",
    "q": "La probabilité qu'il pleuve demain est de 0,3. Quelle est la probabilité qu'il NE pleuve PAS ?",
    "answer": 0.7,
    "tol": 0.001,
    "explain": "1 − 0,3 = 0,7."
   },
   {
    "type": "mc",
    "q": "En lançant deux dés, quelle est la probabilité que la somme soit 2 ?",
    "options": [
     "1/36",
     "1/12",
     "1/6",
     "2/36"
    ],
    "answer": 0,
    "explain": "Seulement 1+1 sur 36 cas possibles."
   },
   {
    "type": "mc",
    "q": "Je lance une pièce et un dé. Probabilité de « face et 6 » ?",
    "options": [
     "1/8",
     "1/12",
     "2/3",
     "7/12"
    ],
    "answer": 1,
    "explain": "Événements indépendants : 1/2 × 1/6 = 1/12."
   },
   {
    "type": "tf",
    "q": "Selon la loi des grands nombres, avec beaucoup d'essais la fréquence relative se rapproche de la probabilité.",
    "answer": true,
    "explain": "C'est le fondement de la probabilité fréquentiste."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre les étapes d'une enquête statistique.",
    "items": [
     "Définir le problème et la population",
     "Recueillir les données",
     "Organiser les données en tableaux et graphiques",
     "Calculer les indicateurs et interpréter"
    ],
    "explain": "D'abord on décide quoi étudier, puis on recueille, on organise et on traite les données."
   }
  ],
  "gen": [
   [
    "percent",
    2
   ],
   [
    "fracEquiv",
    1
   ]
  ]
 }
});
