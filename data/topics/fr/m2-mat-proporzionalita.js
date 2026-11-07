TOPIC('fr', {
 "id": "m2-mat-proporzionalita",
 "title": "Proportionnalité directe et inverse",
 "intro": "Si tu achètes deux fois plus de cahiers, tu dépenses deux fois plus. Si en revanche vous êtes deux fois plus nombreux à partager une pizza, chacun en mange la moitié. Dans le premier cas, il y a <b>proportionnalité directe</b>, dans le second <b>proportionnalité inverse</b>. Apprenons à les reconnaître avec des <b>tableaux</b>, des <b>formules</b> et des <b>graphiques</b>, et à les utiliser pour résoudre des problèmes.",
 "minutes": 50,
 "sections": [
  {
   "type": "text",
   "title": "Grandeurs constantes et variables",
   "html": "<p>Une <b>grandeur</b> est quelque chose qui peut se mesurer. Dans un problème, certaines grandeurs restent <b>constantes</b> (le prix d'un cahier), d'autres <b>varient</b> (combien de cahiers tu achètes, combien tu dépenses).</p>\n<p>Quand deux grandeurs variables <b>x</b> et <b>y</b> sont liées entre elles (quand l'une varie, l'autre change aussi), on dit que <b>y dépend de x</b>, ou que y est <b>fonction</b> de x. Les deux façons les plus simples de dépendre sont : la <b>proportionnalité directe</b> et la <b>proportionnalité inverse</b>.</p>"
  },
  {
   "type": "text",
   "title": "La proportionnalité directe",
   "html": "<p>Deux grandeurs sont <b>directement proportionnelles</b> si leur <b>rapport est constant</b> :</p>\n<p style=\"text-align:center;font-size:1.3em\"><b>y / x = k</b> &nbsp;&nbsp; c'est-à-dire &nbsp;&nbsp; <b>y = k · x</b></p>\n<p>Le nombre <b>k</b> s'appelle le <b>coefficient de proportionnalité</b>.</p>\n<p>Exemple : un cahier coûte <b>2 €</b>.</p>\n<table>\n<tr><th>Cahiers (x)</th><td>1</td><td>2</td><td>3</td><td>5</td><td>10</td></tr>\n<tr><th>Dépense en € (y)</th><td>2</td><td>4</td><td>6</td><td>10</td><td>20</td></tr>\n<tr><th>y / x</th><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td></tr>\n</table>\n<p><b>Comment la reconnaître</b> : si x <b>double</b>, y double aussi ; si x est <b>triplé</b>, y est triplé ; si x est divisé par deux, y est divisé par deux. Et quand x = 0, y = 0 aussi.</p>\n<p><b>Attention</b> : « elles augmentent ensemble » ne suffit pas ! L'âge et la taille d'un enfant grandissent ensemble, mais à 10 ans, tu n'es pas deux fois plus grand qu'à 5 ans.</p>"
  },
  {
   "type": "svg",
   "title": "Le graphique de la proportionnalité directe",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f0fdf4\"/>\n<g stroke=\"#bbf7d0\" stroke-width=\"1\">\n<line x1=\"60\" y1=\"40\" x2=\"60\" y2=\"280\"/><line x1=\"110\" y1=\"40\" x2=\"110\" y2=\"280\"/><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"280\"/><line x1=\"210\" y1=\"40\" x2=\"210\" y2=\"280\"/><line x1=\"260\" y1=\"40\" x2=\"260\" y2=\"280\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"280\"/>\n<line x1=\"60\" y1=\"280\" x2=\"330\" y2=\"280\"/><line x1=\"60\" y1=\"240\" x2=\"330\" y2=\"240\"/><line x1=\"60\" y1=\"200\" x2=\"330\" y2=\"200\"/><line x1=\"60\" y1=\"160\" x2=\"330\" y2=\"160\"/><line x1=\"60\" y1=\"120\" x2=\"330\" y2=\"120\"/><line x1=\"60\" y1=\"80\" x2=\"330\" y2=\"80\"/><line x1=\"60\" y1=\"40\" x2=\"330\" y2=\"40\"/>\n</g>\n<line x1=\"60\" y1=\"290\" x2=\"60\" y2=\"30\" stroke=\"#14532d\" stroke-width=\"3\"/>\n<line x1=\"50\" y1=\"280\" x2=\"340\" y2=\"280\" stroke=\"#14532d\" stroke-width=\"3\"/>\n<line x1=\"60\" y1=\"280\" x2=\"310\" y2=\"80\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<circle cx=\"110\" cy=\"240\" r=\"7\" fill=\"#dc2626\"/><circle cx=\"160\" cy=\"200\" r=\"7\" fill=\"#dc2626\"/><circle cx=\"210\" cy=\"160\" r=\"7\" fill=\"#dc2626\"/><circle cx=\"260\" cy=\"120\" r=\"7\" fill=\"#dc2626\"/><circle cx=\"310\" cy=\"80\" r=\"7\" fill=\"#dc2626\"/>\n<text x=\"110\" y=\"302\" font-size=\"14\" text-anchor=\"middle\">1</text><text x=\"160\" y=\"302\" font-size=\"14\" text-anchor=\"middle\">2</text><text x=\"210\" y=\"302\" font-size=\"14\" text-anchor=\"middle\">3</text><text x=\"260\" y=\"302\" font-size=\"14\" text-anchor=\"middle\">4</text><text x=\"310\" y=\"302\" font-size=\"14\" text-anchor=\"middle\">5</text>\n<text x=\"45\" y=\"245\" font-size=\"14\" text-anchor=\"end\">2</text><text x=\"45\" y=\"205\" font-size=\"14\" text-anchor=\"end\">4</text><text x=\"45\" y=\"165\" font-size=\"14\" text-anchor=\"end\">6</text><text x=\"45\" y=\"125\" font-size=\"14\" text-anchor=\"end\">8</text><text x=\"45\" y=\"85\" font-size=\"14\" text-anchor=\"end\">10</text>\n<text x=\"345\" y=\"290\" font-size=\"16\" font-weight=\"bold\">x</text><text x=\"68\" y=\"30\" font-size=\"16\" font-weight=\"bold\">y</text>\n<text x=\"370\" y=\"90\" font-size=\"22\" fill=\"#15803d\" font-weight=\"bold\">y = 2x</text>\n<text x=\"370\" y=\"130\" font-size=\"16\" fill=\"#14532d\">• c'est une droite</text>\n<text x=\"370\" y=\"158\" font-size=\"16\" fill=\"#14532d\">• elle passe par l'origine (0;0)</text>\n<text x=\"370\" y=\"186\" font-size=\"16\" fill=\"#14532d\">• plus k est grand,</text>\n<text x=\"370\" y=\"208\" font-size=\"16\" fill=\"#14532d\">  plus la droite est raide</text>\n</svg>",
   "caption": "Le graphique d'une proportionnalité directe est une demi-droite (ou une droite) qui passe par l'origine des axes."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : la directe",
   "questions": [
    {
     "type": "tf",
     "q": "Le périmètre d'un carré est directement proportionnel au côté.",
     "answer": true,
     "explain": "P = 4 · c : le rapport P/c est toujours 4."
    },
    {
     "type": "mc",
     "q": "Si y = 5x et x = 7, combien vaut y ?",
     "options": [
      "12",
      "35",
      "1,4"
     ],
     "answer": 1,
     "explain": "5 × 7 = 35."
    },
    {
     "type": "tf",
     "q": "L'aire d'un carré est directement proportionnelle au côté.",
     "answer": false,
     "explain": "A = c² : si le côté double, l'aire est multipliée par quatre, le rapport A/c n'est pas constant."
    }
   ]
  },
  {
   "type": "text",
   "title": "La proportionnalité inverse",
   "html": "<p>Deux grandeurs sont <b>inversement proportionnelles</b> si leur <b>produit est constant</b> :</p>\n<p style=\"text-align:center;font-size:1.3em\"><b>x · y = k</b> &nbsp;&nbsp; c'est-à-dire &nbsp;&nbsp; <b>y = k / x</b></p>\n<p>Exemple : un voyage de <b>120 km</b>. Plus tu vas vite, moins tu mets de temps.</p>\n<table>\n<tr><th>Vitesse km/h (x)</th><td>20</td><td>30</td><td>40</td><td>60</td><td>120</td></tr>\n<tr><th>Temps en h (y)</th><td>6</td><td>4</td><td>3</td><td>2</td><td>1</td></tr>\n<tr><th>x · y</th><td>120</td><td>120</td><td>120</td><td>120</td><td>120</td></tr>\n</table>\n<p><b>Comment la reconnaître</b> : si x <b>double</b>, y est <b>divisé par deux</b> ; si x est triplé, y devient un tiers. x et y ne peuvent jamais valoir 0.</p>\n<p><b>Attention</b> : « l'une augmente et l'autre diminue » ne suffit pas ! Si tu as 10 € et que tu dépenses, l'argent restant diminue, mais 10 − dépense n'est pas un produit constant : ce n'est pas de la proportionnalité inverse.</p>"
  },
  {
   "type": "svg",
   "title": "Le graphique de la proportionnalité inverse",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#eff6ff\"/>\n<line x1=\"60\" y1=\"290\" x2=\"60\" y2=\"20\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<line x1=\"50\" y1=\"280\" x2=\"360\" y2=\"280\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<path d=\"M88 52 L100 120 L120 173 L140 200 L180 227 L220 240 L260 248 L300 253 L345 257\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"5\" stroke-linejoin=\"round\"/>\n<circle cx=\"100\" cy=\"120\" r=\"7\" fill=\"#dc2626\"/><circle cx=\"140\" cy=\"200\" r=\"7\" fill=\"#dc2626\"/><circle cx=\"220\" cy=\"240\" r=\"7\" fill=\"#dc2626\"/>\n<rect x=\"60\" y=\"120\" width=\"40\" height=\"160\" fill=\"#f59e0b\" opacity=\"0.25\"/>\n<rect x=\"60\" y=\"240\" width=\"160\" height=\"40\" fill=\"#10b981\" opacity=\"0.25\"/>\n<text x=\"100\" y=\"302\" font-size=\"14\" text-anchor=\"middle\">1</text><text x=\"140\" y=\"302\" font-size=\"14\" text-anchor=\"middle\">2</text><text x=\"220\" y=\"302\" font-size=\"14\" text-anchor=\"middle\">4</text>\n<text x=\"45\" y=\"125\" font-size=\"14\" text-anchor=\"end\">4</text><text x=\"45\" y=\"205\" font-size=\"14\" text-anchor=\"end\">2</text><text x=\"45\" y=\"245\" font-size=\"14\" text-anchor=\"end\">1</text>\n<text x=\"365\" y=\"290\" font-size=\"16\" font-weight=\"bold\">x</text><text x=\"68\" y=\"20\" font-size=\"16\" font-weight=\"bold\">y</text>\n<text x=\"390\" y=\"80\" font-size=\"22\" fill=\"#1d4ed8\" font-weight=\"bold\">x · y = 4</text>\n<text x=\"390\" y=\"118\" font-size=\"16\" fill=\"#1e3a8a\">• c'est une branche</text>\n<text x=\"390\" y=\"140\" font-size=\"16\" fill=\"#1e3a8a\">  d'hyperbole équilatère</text>\n<text x=\"390\" y=\"168\" font-size=\"16\" fill=\"#1e3a8a\">• elle ne touche jamais les axes</text>\n<text x=\"390\" y=\"196\" font-size=\"16\" fill=\"#1e3a8a\">• les rectangles colorés</text>\n<text x=\"390\" y=\"218\" font-size=\"16\" fill=\"#1e3a8a\">  ont la même aire (k)</text>\n</svg>",
   "caption": "Le graphique est une courbe appelée hyperbole équilatère : elle se rapproche des axes sans jamais les toucher."
  },
  {
   "type": "widget",
   "title": "Rectangles de même aire",
   "widget": "areaGrid",
   "options": {
    "w": 6,
    "h": 2,
    "max": 12
   },
   "caption": "Essaie de construire tous les rectangles d'aire 12 : 1 × 12, 2 × 6, 3 × 4, 4 × 3, 6 × 2, 12 × 1. La base et la hauteur sont inversement proportionnelles !"
  },
  {
   "type": "example",
   "title": "Exemple pratique : directe ou inverse ?",
   "html": "<ul>\n<li><b>Essence et kilomètres</b> : une voiture fait 20 km avec 1 litre. Litres et km sont <b>directement</b> proportionnels (k = 20 km/l) : avec 35 litres, elle fait 700 km.</li>\n<li><b>Ouvriers et jours</b> : 6 ouvriers construisent un mur en 10 jours. Ouvriers et jours sont <b>inversement</b> proportionnels (k = 60 « jours-ouvriers ») : 12 ouvriers mettent 60 : 12 = <b>5 jours</b> ; 4 ouvriers 60 : 4 = <b>15 jours</b>.</li>\n<li><b>Ingrédients et personnes</b> : directe. <b>Parts de pizza et amis</b> (pizza fixe) : inverse.</li>\n<li><b>Âge et pointure</b> : ni l'une ni l'autre !</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : résoudre un problème en trois étapes",
   "html": "<p><i>Pour remplir une piscine, il faut 8 heures avec 3 pompes identiques. Combien de temps faut-il avec 4 pompes ?</i></p>\n<ol>\n<li><b>Je reconnais</b> : plus de pompes → moins de temps ; avec deux fois plus de pompes, le temps est divisé par deux → <b>inverse</b>.</li>\n<li><b>Je trouve k</b> : k = 3 × 8 = 24 (« heures-pompes »).</li>\n<li><b>Je calcule</b> : temps = 24 : 4 = <b>6 heures</b>.</li>\n</ol>\n<p>Avec une proportion : dans l'inverse, on écrit en <b>inversant</b> un rapport : 3 : 4 = x : 8 → x = 3 × 8 : 4 = 6. ✓</p>"
  },
  {
   "type": "widget",
   "title": "Directe ou inverse ?",
   "widget": "classify",
   "options": {
    "groups": [
     "📈 Directe (y/x constant)",
     "📉 Inverse (x·y constant)",
     "🚫 Aucune des deux"
    ],
    "items": [
     [
      "Kg de pommes et prix payé",
      0
     ],
     [
      "Côté du carré et périmètre",
      0
     ],
     [
      "Heures de travail et salaire (à l'heure)",
      0
     ],
     [
      "Vitesse et temps pour 100 km",
      1
     ],
     [
      "Nombre d'amis et part de gâteau de chacun",
      1
     ],
     [
      "Ouvriers et jours pour un travail",
      1
     ],
     [
      "Âge et taille",
      2
     ],
     [
      "Côté du carré et aire",
      2
     ],
     [
      "Argent dépensé et argent restant",
      2
     ]
    ]
   },
   "caption": "Vérifie toujours : si x double, y double-t-il (directe), est-il divisé par deux (inverse) ou fait-il autre chose ?"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? La loi de Boyle",
   "html": "<p>En <b>1662</b>, le chimiste irlandais <b>Robert Boyle</b> découvrit qu'à température constante, la <b>pression</b> et le <b>volume</b> d'un gaz sont <b>inversement proportionnels</b> : p · V = constante. Si tu écrases une seringue bouchée jusqu'à la moitié du volume, la pression de l'air à l'intérieur double. C'est la raison pour laquelle les oreilles « se bouchent » en avion ou sous l'eau !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? La loi de Hooke",
   "html": "<p>En <b>1678</b>, <b>Robert Hooke</b> publia sa loi : l'<b>allongement</b> d'un ressort est <b>directement proportionnel</b> à la force qui le tire (tant qu'on ne le déforme pas). C'est le principe du <b>dynamomètre</b> et des anciennes balances à ressort : si tu accroches un poids double, le ressort s'allonge deux fois plus. Hooke annonça d'abord la loi sous forme d'anagramme latin, « ceiiinosssttuv », pour ne pas se faire voler l'idée : cela signifie <i>ut tensio, sic vis</i>, « tel l'allongement, telle la force ».</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre la proportionnalité",
   "intro": "Si les formules ne te convainquent pas, essaie de voir la proportionnalité autrement.",
   "tabs": [
    {
     "label": "🧊 Les mêmes petits cubes",
     "html": "<p>Voici <b>12 petits cubes</b> en 3 rangées de 4. Bouge les curseurs et essaie de les disposer autrement <b>sans en ajouter ni en enlever</b> : 2 rangées de 6, 4 rangées de 3, 6 rangées de 2… Le nombre de rangées et le nombre de cubes par rangée sont <b>inversement proportionnels</b> (le produit reste 12). Si en revanche tu ajoutes des rangées de 4 cubes, le total augmente de façon <b>directe</b> : 1 rangée = 4, 2 rangées = 8, 3 rangées = 12.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "🇳🇱 Le tableau de rapports néerlandais",
     "html": "<p>Dans les écoles néerlandaises (méthode des <b>mathématiques réalistes</b>), on utilise la <b>verhoudingstabel</b>, le « tableau des rapports » : on écrit les couples en colonnes et on fait des opérations simples <b>sur les deux lignes</b>.</p>\n<table>\n<tr><th>Cahiers</th><td>4</td><td>2</td><td>1</td><td>10</td></tr>\n<tr><th>€</th><td>8</td><td>4</td><td>2</td><td>20</td></tr>\n<tr><td></td><td></td><td>:2</td><td>:2</td><td>×10</td></tr>\n</table>\n<p>Dans la directe, on fait la <b>même opération</b> en haut et en bas. Dans l'inverse, on fait l'opération <b>opposée</b> : si en haut tu multiplies par 2, en bas tu divises par 2.</p>"
    },
    {
     "label": "🚲 L'analogie du vélo",
     "html": "<p>Pédale à rythme constant : <b>plus longtemps</b> tu pédales, <b>plus de route</b> tu fais → directe (la constante est la vitesse).</p>\n<p>Maintenant tu dois faire un parcours fixe de 30 km : <b>plus vite</b> tu vas, <b>moins de temps</b> tu mets → inverse (la constante est la distance).</p>\n<p>Le même trio <b>distance = vitesse × temps</b> donne une directe ou une inverse selon <b>la grandeur que tu gardes fixe</b> !</p>"
    },
    {
     "label": "📊 Les deux graphiques comparés",
     "html": "<p>Regarde les deux formes : la directe est une <b>droite qui part de l'origine</b> ; l'inverse est une <b>courbe qui descend</b> et se rapproche des axes. Si tu vois une droite qui ne passe pas par l'origine, ce n'est pas de la proportionnalité directe !</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#ffffff\"/>\n<line x1=\"40\" y1=\"230\" x2=\"40\" y2=\"20\" stroke=\"#334155\" stroke-width=\"3\"/><line x1=\"30\" y1=\"220\" x2=\"270\" y2=\"220\" stroke=\"#334155\" stroke-width=\"3\"/>\n<line x1=\"40\" y1=\"220\" x2=\"250\" y2=\"40\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<text x=\"150\" y=\"250\" font-size=\"17\" text-anchor=\"middle\" fill=\"#15803d\" font-weight=\"bold\">DIRECTE : y = kx</text>\n<line x1=\"330\" y1=\"230\" x2=\"330\" y2=\"20\" stroke=\"#334155\" stroke-width=\"3\"/><line x1=\"320\" y1=\"220\" x2=\"570\" y2=\"220\" stroke=\"#334155\" stroke-width=\"3\"/>\n<path d=\"M345 30 Q360 160 400 180 Q460 205 560 210\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"5\"/>\n<text x=\"450\" y=\"250\" font-size=\"17\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">INVERSE : y = k/x</text>\n</svg>"
    },
    {
     "label": "🇸🇬 Le modèle en barres (Singapour)",
     "html": "<p>À <b>Singapour</b>, l'un des pays aux meilleurs résultats en mathématiques, les problèmes sur les rapports se résolvent en dessinant des <b>barres faites de blocs tous égaux</b> (le <b>bar model</b>). Le rapport 3 : 2 veut dire simplement « 3 blocs contre 2 blocs ».</p><p><b>Problème 1</b> : dans un gâteau, la farine et le sucre sont dans le rapport <b>3 : 2</b>. Si j'utilise 450 g de farine, combien de sucre me faut-il ?</p><ol><li>Dessine la farine avec <b>3 blocs</b> et le sucre avec <b>2 blocs</b> de la même taille.</li><li>3 blocs = 450 g → 1 bloc = 450 : 3 = <b>150 g</b>.</li><li>Sucre = 2 blocs = <b>300 g</b>.</li></ol><p><b>Problème 2</b> : Anna et Luca se partagent 45 € dans le rapport <b>2 : 3</b>.</p><ol><li>Au total, il y a 2 + 3 = <b>5 blocs</b> = 45 €.</li><li>1 bloc = 45 : 5 = <b>9 €</b>.</li><li>Anna = 2 × 9 = <b>18 €</b>, Luca = 3 × 9 = <b>27 €</b>. Contrôle : 18 + 27 = 45 ✔</li></ol><p>Le secret de la proportionnalité directe est justement celui-ci : <b>les blocs sont tous égaux</b>. Si tu doubles la farine, le bloc double et donc le sucre double aussi.</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#f8fafc\"/><text x=\"20\" y=\"40\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Farine</text><rect x=\"110\" y=\"18\" width=\"70\" height=\"36\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><rect x=\"180\" y=\"18\" width=\"70\" height=\"36\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><rect x=\"250\" y=\"18\" width=\"70\" height=\"36\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"20\" y=\"98\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Sucre</text><rect x=\"110\" y=\"76\" width=\"70\" height=\"36\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><rect x=\"180\" y=\"76\" width=\"70\" height=\"36\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><path d=\"M110,10 Q215,-6 320,10\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"330\" y=\"42\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\" font-weight=\"bold\">= 450 g → 1 bloc = 150 g</text><text x=\"260\" y=\"100\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e3a8a\" font-weight=\"bold\">→ sucre = 2 × 150 = 300 g</text><line x1=\"20\" y1=\"140\" x2=\"580\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><text x=\"20\" y=\"190\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Anna</text><rect x=\"110\" y=\"168\" width=\"50\" height=\"36\" fill=\"#bbf7d0\" stroke=\"#166534\" stroke-width=\"2\"/><rect x=\"160\" y=\"168\" width=\"50\" height=\"36\" fill=\"#bbf7d0\" stroke=\"#166534\" stroke-width=\"2\"/><text x=\"20\" y=\"248\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Luca</text><rect x=\"110\" y=\"226\" width=\"50\" height=\"36\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"2\"/><rect x=\"160\" y=\"226\" width=\"50\" height=\"36\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"2\"/><rect x=\"210\" y=\"226\" width=\"50\" height=\"36\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"2\"/><path d=\"M268,168 Q290,215 268,262\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"290\" y=\"205\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">5 blocs = 45 € → 1 bloc = 9 €</text><text x=\"290\" y=\"232\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">Anna 2 × 9 = 18 €   Luca 3 × 9 = 27 €</text></svg>"
    },
    {
     "label": "🇫🇷 Le « produit en croix » français",
     "html": "<p>Dans les <b>collèges</b> français, on utilise énormément le <b>tableau de proportionnalité</b> et, pour trouver le nombre qui manque, le <b>produit en croix</b>.</p><p><b>Exemple</b> : 4 cahiers coûtent 6 €. Combien coûtent 10 cahiers ?</p><ol><li>Écris le tableau : en haut les cahiers (4 et 10), en bas les euros (6 et ?).</li><li>Multiplie les deux nombres <b>en diagonale</b> que tu connais : 10 × 6 = 60.</li><li>Divise par le nombre restant : 60 : 4 = <b>15 €</b>.</li></ol><p><b>Pourquoi ça marche ?</b> Le tableau est une proportion : 4 : 6 = 10 : ?. Par la <b>propriété fondamentale des proportions</b>, le produit des moyens est égal au produit des extrêmes : 4 × ? = 6 × 10.</p><p>⚠️ <b>Attention</b> : le produit en croix vaut <b>seulement</b> pour la proportionnalité <b>directe</b>. Dans l'inverse, on multiplie les nombres de la <b>même colonne</b> : si 3 ouvriers mettent 8 jours, 6 ouvriers mettent 3 × 8 : 6 = <b>4 jours</b> (le produit 24 reste constant).</p>",
     "svg": "<svg viewBox=\"0 0 600 250\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"250\" fill=\"#f8fafc\"/><rect x=\"120\" y=\"60\" width=\"120\" height=\"60\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/><rect x=\"240\" y=\"60\" width=\"120\" height=\"60\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/><rect x=\"120\" y=\"120\" width=\"120\" height=\"60\" fill=\"#fef9c3\" stroke=\"#a16207\" stroke-width=\"2\"/><rect x=\"240\" y=\"120\" width=\"120\" height=\"60\" fill=\"#fef9c3\" stroke=\"#a16207\" stroke-width=\"2\"/><rect x=\"20\" y=\"60\" width=\"100\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"2\"/><rect x=\"20\" y=\"120\" width=\"100\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"70\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">cahiers</text><text x=\"70\" y=\"156\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">euros</text><text x=\"180\" y=\"100\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><text x=\"300\" y=\"100\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><text x=\"180\" y=\"160\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6</text><text x=\"300\" y=\"160\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">?</text><line x1=\"205\" y1=\"92\" x2=\"280\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"205\" y1=\"150\" x2=\"280\" y2=\"92\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/><text x=\"390\" y=\"90\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">? = 10 × 6 : 4</text><text x=\"390\" y=\"125\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">? = 60 : 4 = 15 €</text><text x=\"390\" y=\"170\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">multiplie en croix,</text><text x=\"390\" y=\"192\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">divise par le nombre</text><text x=\"390\" y=\"214\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">qui reste</text><text x=\"240\" y=\"230\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\" font-weight=\"bold\">Ça ne marche que pour la proportionnalité DIRECTE !</text></svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte de la proportionnalité",
   "nodes": [
    {
     "id": "grand",
     "label": "Grandeurs variables",
     "x": 50,
     "y": 6,
     "color": "#334155",
     "html": "Quantités qui peuvent changer : x et y.",
     "why": "L'idée qu'une grandeur dépende d'une autre (fonction) a été développée au XVIIᵉ siècle par <b>Galilée</b>, <b>Descartes</b> puis <b>Leibniz</b>, qui employa le premier le mot « fonction » (1673)."
    },
    {
     "id": "dir",
     "label": "Proportionnalité directe",
     "x": 22,
     "y": 30,
     "color": "#16a34a",
     "html": "y / x = k → y = kx.",
     "why": "Elle découle de la théorie des proportions : si y₁ : x₁ = y₂ : x₂ pour tous les couples, le rapport est toujours le même nombre k."
    },
    {
     "id": "inv",
     "label": "Proportionnalité inverse",
     "x": 78,
     "y": 30,
     "color": "#2563eb",
     "html": "x · y = k → y = k / x.",
     "why": "Cela revient à dire que y est directement proportionnel à 1/x. Dans les traités d'abaque médiévaux, c'était la « règle de trois inverse »."
    },
    {
     "id": "k",
     "label": "Constante k",
     "x": 50,
     "y": 48,
     "color": "#ca8a04",
     "html": "Le nombre qui ne change pas : rapport ou produit.",
     "why": "Elle a souvent une signification physique : le prix unitaire, la vitesse, la distance fixe. Trouver la constante, c'est comprendre la « règle » du phénomène."
    },
    {
     "id": "retta",
     "label": "Droite par l'origine",
     "x": 18,
     "y": 66,
     "color": "#22c55e",
     "html": "Graphique de la directe.",
     "why": "Le plan cartésien a été imaginé par <b>René Descartes</b> dans la <i>Géométrie</i> de 1637 : il a uni algèbre et géométrie. Chaque point (x ; kx) se trouve sur la même droite parce que la « pente » y/x est toujours k."
    },
    {
     "id": "iperb",
     "label": "Hyperbole équilatère",
     "x": 82,
     "y": 66,
     "color": "#3b82f6",
     "html": "Graphique de l'inverse.",
     "why": "Le nom vient d'<b>Apollonios de Pergé</b> (IIIᵉ siècle av. J.-C.), qui étudia les coniques : ellipse, parabole, hyperbole. Tous les rectangles entre l'origine et un point de la courbe ont la même aire k."
    },
    {
     "id": "tab",
     "label": "Tableaux",
     "x": 50,
     "y": 72,
     "color": "#9333ea",
     "html": "Couples de valeurs : on vérifie le rapport ou le produit.",
     "why": "Les tableaux sont la façon la plus ancienne d'étudier une relation : les Babyloniens avaient des tables d'inverses (1/x) pour faire les divisions, il y a environ 4000 ans."
    },
    {
     "id": "fisica",
     "label": "Lois de la nature",
     "x": 50,
     "y": 92,
     "color": "#dc2626",
     "html": "Hooke (directe), Boyle (inverse)…",
     "why": "Beaucoup de lois scientifiques découvertes au XVIIᵉ siècle avec la <b>méthode expérimentale</b> sont des proportionnalités : en mesurant et en mettant les données en tableau et en graphique, les scientifiques reconnaissaient la relation."
    }
   ],
   "edges": [
    [
     "grand",
     "dir",
     "peuvent être"
    ],
    [
     "grand",
     "inv",
     "peuvent être"
    ],
    [
     "dir",
     "k",
     "rapport ="
    ],
    [
     "inv",
     "k",
     "produit ="
    ],
    [
     "dir",
     "retta",
     "graphique"
    ],
    [
     "inv",
     "iperb",
     "graphique"
    ],
    [
     "k",
     "tab",
     "se vérifie avec"
    ],
    [
     "tab",
     "fisica",
     "révèle"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : l'inverse et les problèmes",
   "questions": [
    {
     "type": "num",
     "q": "x · y = 36. Si x = 9, combien vaut y ?",
     "answer": 4,
     "explain": "y = 36 : 9 = 4."
    },
    {
     "type": "num",
     "q": "5 ouvriers finissent un travail en 12 jours. Combien de jours faut-il à 10 ouvriers ?",
     "answer": 6,
     "unit": "jours",
     "explain": "Inverse : k = 60 → 60 : 10 = 6."
    },
    {
     "type": "mc",
     "q": "Le graphique de la proportionnalité inverse est…",
     "options": [
      "une droite par l'origine",
      "une hyperbole équilatère",
      "une parabole"
     ],
     "answer": 1,
     "explain": "Hyperbole équilatère, qui ne touche pas les axes."
    }
   ]
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li><b>Directe</b> : y/x = k, y = kx ; x double → y double ; graphique : <b>droite par l'origine</b>.</li>\n<li><b>Inverse</b> : x·y = k, y = k/x ; x double → y est divisé par deux ; graphique : <b>hyperbole équilatère</b>.</li>\n<li>Pour décider, vérifie le <b>rapport</b> ou le <b>produit</b> dans un tableau : « elles croissent ensemble » ou « l'une croît et l'autre décroît » ne suffit pas.</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Grandeurs directement proportionnelles",
   "d": "Grandeurs dont le rapport est constant (y = kx)."
  },
  {
   "t": "Grandeurs inversement proportionnelles",
   "d": "Grandeurs dont le produit est constant (y = k/x)."
  },
  {
   "t": "Coefficient de proportionnalité",
   "d": "La valeur k qui reste la même pour tous les couples."
  },
  {
   "t": "Fonction",
   "d": "Loi qui associe à chaque valeur de x une seule valeur de y."
  },
  {
   "t": "Plan cartésien",
   "d": "Plan avec deux axes perpendiculaires (x et y) pour représenter des couples de nombres."
  },
  {
   "t": "Origine",
   "d": "Le point (0 ; 0) où se rencontrent les axes."
  },
  {
   "t": "Hyperbole équilatère",
   "d": "Courbe, graphique de la proportionnalité inverse."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Dans une proportionnalité directe, qu'est-ce qui reste constant ?",
    "options": [
     "La somme x + y",
     "Le rapport y / x",
     "Le produit x · y"
    ],
    "answer": 1,
    "explain": "y/x = k."
   },
   {
    "type": "mc",
    "q": "Dans une proportionnalité inverse, qu'est-ce qui reste constant ?",
    "options": [
     "Le produit x · y",
     "La différence y − x",
     "Le rapport y / x"
    ],
    "answer": 0,
    "explain": "x · y = k."
   },
   {
    "type": "num",
    "q": "y = 3x. Combien vaut y si x = 12 ?",
    "answer": 36,
    "explain": "3 × 12 = 36."
   },
   {
    "type": "num",
    "q": "3 kg de pain coûtent 7,50 €. Combien coûtent 5 kg (en €) ?",
    "answer": 12.5,
    "tol": 0.01,
    "unit": "€",
    "explain": "Directe : 7,50 : 3 = 2,50 €/kg → 2,50 × 5 = 12,50 €."
   },
   {
    "type": "num",
    "q": "À 60 km/h, un voyage dure 3 heures. Combien d'heures dure-t-il à 90 km/h ?",
    "answer": 2,
    "unit": "h",
    "explain": "Inverse : 60 × 3 = 180 km → 180 : 90 = 2 h."
   },
   {
    "type": "tf",
    "q": "Le graphique de la proportionnalité directe passe toujours par l'origine.",
    "answer": true,
    "explain": "Si x = 0, y = k · 0 = 0."
   },
   {
    "type": "tf",
    "q": "Si une grandeur augmente et l'autre diminue, elles sont toujours inversement proportionnelles.",
    "answer": false,
    "explain": "Il faut que le produit soit constant : par ex. l'argent dépensé / restant ne l'est pas."
   },
   {
    "type": "mc",
    "q": "Le nombre de billets et le coût total (billet à prix fixe) sont…",
    "options": [
     "directement proportionnels",
     "inversement proportionnels",
     "non proportionnels"
    ],
    "answer": 0,
    "explain": "Coût total / billets = prix fixe."
   },
   {
    "type": "num",
    "q": "Un gâteau se partage en parts égales : avec 4 amis, chacun reçoit 150 g. Combien de grammes reçoit chacun avec 6 amis ?",
    "answer": 100,
    "unit": "g",
    "explain": "Inverse : 4 × 150 = 600 g → 600 : 6 = 100 g."
   },
   {
    "type": "mc",
    "q": "Quel tableau montre une proportionnalité inverse ?",
    "options": [
     "x: 1, 2, 4 — y: 3, 6, 12",
     "x: 1, 2, 4 — y: 8, 4, 2",
     "x: 1, 2, 4 — y: 5, 6, 8"
    ],
    "answer": 1,
    "explain": "1·8 = 2·4 = 4·2 = 8 : produit constant."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre les étapes pour résoudre un problème de proportionnalité.",
    "items": [
     "Je comprends si elle est directe ou inverse",
     "Je calcule la constante k",
     "Je calcule la valeur demandée",
     "Je vérifie que le résultat a du sens"
    ],
    "explain": "Reconnaître, trouver k, calculer, vérifier."
   }
  ],
  "gen": [
   [
    "proportion",
    2
   ]
  ]
 }
});
