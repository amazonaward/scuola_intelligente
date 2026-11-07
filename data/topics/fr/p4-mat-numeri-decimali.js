TOPIC('fr', {
 "id": "p4-mat-numeri-decimali",
 "title": "Les nombres décimaux",
 "intro": "Un cahier coûte 1,50 €, tu mesures 1,38 m, tu as de la fièvre à 37,5 °C… Les nombres à <b>virgule</b> sont partout ! Ce sont les <b>nombres décimaux</b> : ils servent à compter les <b>parties plus petites que l'unité</b>, c'est-à-dire les <b>dixièmes</b>, les <b>centièmes</b> et les <b>millièmes</b>.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Diviser l'unité en 10, 100, 1000 parties",
   "html": "<p>Jusqu'à maintenant, nous avons compté des unités entières. Mais souvent il faut des parties <b>plus petites</b> que l'unité. Notre système est décimal aussi « vers le bas » : <b>chaque ordre se divise en 10 parties</b>.</p>\n<ul>\n<li>Divise l'unité en <b>10</b> parties égales : chaque partie est <b>un dixième</b> → 1/10 = <b>0,1</b></li>\n<li>Divise un dixième en 10 parties : chaque partie est <b>un centième</b> → 1/100 = <b>0,01</b></li>\n<li>Divise un centième en 10 parties : chaque partie est <b>un millième</b> → 1/1000 = <b>0,001</b></li>\n</ul>\n<p>Donc : <b>1 unité = 10 dixièmes = 100 centièmes = 1000 millièmes</b>.</p>\n<p>Les fractions de dénominateur 10, 100, 1000 s'appellent des <b>fractions décimales</b> et peuvent s'écrire comme des <b>nombres décimaux</b> : 3/10 = 0,3 ; 25/100 = 0,25 ; 7/1000 = 0,007.</p>"
  },
  {
   "type": "svg",
   "title": "Dixièmes et centièmes",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/>\n<g stroke=\"#1e3a8a\" stroke-width=\"2\">\n<rect x=\"30\" y=\"40\" width=\"200\" height=\"200\" fill=\"#ffffff\"/>\n<rect x=\"30\" y=\"40\" width=\"60\" height=\"200\" fill=\"#60a5fa\"/>\n</g>\n<g stroke=\"#1e3a8a\" stroke-width=\"2\">\n<line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"240\"/><line x1=\"70\" y1=\"40\" x2=\"70\" y2=\"240\"/><line x1=\"90\" y1=\"40\" x2=\"90\" y2=\"240\"/><line x1=\"110\" y1=\"40\" x2=\"110\" y2=\"240\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"240\"/><line x1=\"150\" y1=\"40\" x2=\"150\" y2=\"240\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"240\"/><line x1=\"190\" y1=\"40\" x2=\"190\" y2=\"240\"/><line x1=\"210\" y1=\"40\" x2=\"210\" y2=\"240\"/>\n</g>\n<text x=\"130\" y=\"275\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">3 dixièmes = 0,3</text>\n<g stroke=\"#9d174d\" stroke-width=\"1\">\n<rect x=\"340\" y=\"40\" width=\"200\" height=\"200\" fill=\"#ffffff\" stroke-width=\"2\"/>\n<rect x=\"340\" y=\"40\" width=\"40\" height=\"200\" fill=\"#f472b6\"/>\n<rect x=\"380\" y=\"40\" width=\"20\" height=\"100\" fill=\"#f472b6\"/>\n</g>\n<g stroke=\"#9d174d\" stroke-width=\"1\">\n<line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"240\"/><line x1=\"380\" y1=\"40\" x2=\"380\" y2=\"240\"/><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"240\"/><line x1=\"420\" y1=\"40\" x2=\"420\" y2=\"240\"/><line x1=\"440\" y1=\"40\" x2=\"440\" y2=\"240\"/><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"240\"/><line x1=\"480\" y1=\"40\" x2=\"480\" y2=\"240\"/><line x1=\"500\" y1=\"40\" x2=\"500\" y2=\"240\"/><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"240\"/>\n<line x1=\"340\" y1=\"60\" x2=\"540\" y2=\"60\"/><line x1=\"340\" y1=\"80\" x2=\"540\" y2=\"80\"/><line x1=\"340\" y1=\"100\" x2=\"540\" y2=\"100\"/><line x1=\"340\" y1=\"120\" x2=\"540\" y2=\"120\"/><line x1=\"340\" y1=\"140\" x2=\"540\" y2=\"140\"/><line x1=\"340\" y1=\"160\" x2=\"540\" y2=\"160\"/><line x1=\"340\" y1=\"180\" x2=\"540\" y2=\"180\"/><line x1=\"340\" y1=\"200\" x2=\"540\" y2=\"200\"/><line x1=\"340\" y1=\"220\" x2=\"540\" y2=\"220\"/>\n</g>\n<text x=\"440\" y=\"275\" font-size=\"20\" text-anchor=\"middle\" fill=\"#be185d\" font-weight=\"bold\">25 centièmes = 0,25</text>\n<text x=\"130\" y=\"28\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">1 entier divisé en 10</text>\n<text x=\"440\" y=\"28\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">1 entier divisé en 100</text>\n</svg>",
   "caption": "À gauche 3 bandes sur 10 ; à droite 25 petits carrés sur 100 (2 bandes de 10 + 5 petits carrés)."
  },
  {
   "type": "text",
   "title": "Étape 1 – La virgule et le tableau",
   "html": "<p>Un nombre décimal a deux parties séparées par la <b>virgule</b> :</p>\n<ul>\n<li>à <b>gauche</b> la <b>partie entière</b> (unités, dizaines, centaines…) ;</li>\n<li>à <b>droite</b> la <b>partie décimale</b> (dixièmes <b>d</b>, centièmes <b>c</b>, millièmes <b>m</b>).</li>\n</ul>\n<table>\n<tr><th>h</th><th>da</th><th>u</th><th>,</th><th>d</th><th>c</th><th>m</th></tr>\n<tr><td></td><td>2</td><td>7</td><td>,</td><td>4</td><td>0</td><td>5</td></tr>\n</table>\n<p><b>27,405</b> se lit : <i>vingt-sept <b>virgule</b> quatre cent cinq</i> ou <i>vingt-sept <b>unités</b> et quatre cent cinq <b>millièmes</b></i>.</p>\n<p>⚠️ Attention : les <b>d</b> après la virgule sont des <b>dixièmes</b>, pas des dizaines ! Les dixièmes sont <b>10 fois plus petits</b> que l'unité, les dizaines 10 fois plus grandes.</p>"
  },
  {
   "type": "widget",
   "title": "Construis les dixièmes",
   "widget": "fractionPie",
   "options": {
    "n": 3,
    "d": 10
   },
   "caption": "Garde le dénominateur à 10 et déplace le numérateur : le widget montre le nombre décimal correspondant (écrit ici avec la virgule). Essaie aussi avec 100 !"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : lire les décimaux",
   "questions": [
    {
     "type": "mc",
     "q": "Dans le nombre 5,72, le chiffre 7 indique…",
     "options": [
      "7 dizaines",
      "7 dixièmes",
      "7 centièmes"
     ],
     "answer": 1,
     "explain": "C'est le premier chiffre après la virgule : dixièmes."
    },
    {
     "type": "num",
     "q": "Écris comme nombre décimal : 9 centièmes.",
     "answer": 0.09,
     "explain": "9/100 = 0,09 (le zéro tient la place des dixièmes)."
    },
    {
     "type": "num",
     "q": "Combien y a-t-il de centièmes dans 1 unité ?",
     "answer": 100,
     "explain": "1 = 100/100."
    }
   ]
  },
  {
   "type": "text",
   "title": "Étape 2 – Comparer les décimaux",
   "html": "<p>Pour <b>comparer</b> deux nombres décimaux :</p>\n<ol>\n<li>compare d'abord la <b>partie entière</b> : <i>4,1 &gt; 3,99</i> (parce que 4 &gt; 3) ;</li>\n<li>si la partie entière est la même, compare les <b>dixièmes</b>, puis les <b>centièmes</b>, puis les <b>millièmes</b>.</li>\n</ol>\n<p>⚠️ Piège célèbre : <b>0,5</b> est-il plus grand ou plus petit que <b>0,45</b> ? Beaucoup disent « plus petit, parce que 5 &lt; 45 ». Faux ! Compare les dixièmes : <b>5 dixièmes</b> contre <b>4 dixièmes</b> → <b>0,5 &gt; 0,45</b>.</p>\n<p>Astuce : ajoute des <b>zéros</b> à droite pour avoir le même nombre de chiffres après la virgule. Les zéros à la fin ne changent pas la valeur : <b>0,5 = 0,50</b>. Maintenant c'est facile : 50 centièmes &gt; 45 centièmes.</p>"
  },
  {
   "type": "text",
   "title": "Étape 3 – Additions et soustractions en colonnes",
   "html": "<p>Règle d'or : <b>virgule sous virgule</b> ! Ainsi les dixièmes sont sous les dixièmes, les centièmes sous les centièmes.</p>\n<pre style=\"font-size:1.2em\">   12,50 +\n    3,75 =\n  -------\n   16,25</pre>\n<ol>\n<li>Mets en colonnes en plaçant les virgules les unes sous les autres (ajoute des zéros si besoin : 12,5 → 12,50).</li>\n<li>Calcule comme avec les nombres entiers, en partant de la droite, avec les retenues.</li>\n<li>Dans le résultat, mets la virgule <b>sous les autres</b>.</li>\n</ol>\n<p>Soustraction : <i>10 − 2,35</i> → écris <b>10,00 − 2,35 = 7,65</b>.</p>"
  },
  {
   "type": "text",
   "title": "Étape 4 – Multiplier et diviser par 10, 100, 1000",
   "html": "<p>Avec les nombres décimaux, la virgule « se déplace » :</p>\n<ul>\n<li><b>× 10</b> → la virgule se déplace de <b>1 place vers la droite</b> : 3,47 × 10 = 34,7</li>\n<li><b>× 100</b> → 2 places vers la droite : 3,47 × 100 = 347</li>\n<li><b>× 1000</b> → 3 places vers la droite (ajoute des zéros si besoin) : 3,47 × 1000 = 3470</li>\n<li><b>: 10</b> → la virgule se déplace de <b>1 place vers la gauche</b> : 52 : 10 = 5,2</li>\n<li><b>: 100</b> → 2 places vers la gauche : 52 : 100 = 0,52</li>\n<li><b>: 1000</b> → 3 places vers la gauche : 52 : 1000 = 0,052</li>\n</ul>\n<p>En réalité, ce sont les <b>chiffres</b> qui changent de place (ils deviennent 10, 100, 1000 fois plus grands ou plus petits), mais l'astuce de la virgule fonctionne très bien !</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : les courses",
   "html": "<p>Au supermarché, Giulia achète :</p>\n<ul>\n<li>du pain : <b>1,80 €</b></li>\n<li>du lait : <b>1,25 €</b></li>\n<li>des pommes : <b>2,47 €</b></li>\n</ul>\n<p>Dépense totale : 1,80 + 1,25 + 2,47 = <b>5,52 €</b>.</p>\n<p>Elle paie avec un billet de <b>10 €</b>. Monnaie rendue : 10,00 − 5,52 = <b>4,48 €</b>.</p>\n<p>Avec l'argent : la partie entière, ce sont les <b>euros</b>, les deux premiers chiffres après la virgule sont les <b>centimes</b> (1 € = 100 centimes). C'est pourquoi les prix ont toujours 2 chiffres après la virgule : 1,80 € et non 1,8 €.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : les mesures",
   "html": "<p>Le <b>mètre</b> se divise en 10 <b>décimètres</b>, 100 <b>centimètres</b>, 1000 <b>millimètres</b> : exactement comme les dixièmes, centièmes et millièmes !</p>\n<ul>\n<li>Marco mesure <b>1,38 m</b> = 1 mètre et 38 centimètres = 138 cm.</li>\n<li>Un crayon mesure <b>0,175 m</b> = 175 millimètres = 17,5 cm.</li>\n<li>À la compétition de saut en longueur, Sara saute <b>2,45 m</b> et Lucia <b>2,5 m</b>. Qui gagne ? 2,5 = 2,50 &gt; 2,45 → <b>Lucia</b>, de 5 centimètres !</li>\n</ul>\n<p>Le thermomètre aussi utilise les dixièmes : <b>37,5 °C</b> = 37 degrés et 5 dixièmes.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Virgule ou point ?",
   "html": "<p>En <b>France</b> et dans presque toute l'Europe continentale, on écrit <b>3,14</b> avec la <b>virgule</b>. Au <b>Royaume-Uni</b>, aux <b>États-Unis</b>, en Chine et au Japon, on écrit <b>3.14</b> avec le <b>point</b> !</p>\n<p>C'est pourquoi les calculatrices et les ordinateurs utilisent le point, et dans un tableur un nombre peut sembler « faux ». Depuis 2003, les règles internationales (Système international d'unités) acceptent <b>les deux</b>, et recommandent de séparer les milliers par une <b>espace</b> pour ne pas faire de confusion.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? L'homme qui « a inventé » les décimaux",
   "html": "<p>En <b>1585</b>, le mathématicien flamand <b>Simon Stevin</b> écrivit un petit livre de quelques pages, <i>La Disme</i> (« le dixième »), pour expliquer aux marchands et aux géomètres comment faire des calculs avec les nombres décimaux à la place des fractions compliquées. Il n'utilisait pas encore la virgule : il écrivait les nombres avec de petits cercles numérotés !</p>\n<p>La virgule et le point décimal se sont répandus quelques années plus tard, grâce aussi à l'Écossais <b>John Napier</b> (début du XVII<sup>e</sup> siècle), l'inventeur des logarithmes.</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>1 = 10 dixièmes = 100 centièmes = 1000 millièmes.</li>\n<li>À gauche de la virgule la <b>partie entière</b>, à droite la <b>partie décimale</b> (d, c, m).</li>\n<li>Les <b>zéros à la fin</b> ne changent pas la valeur : 0,5 = 0,50 = 0,500.</li>\n<li>Pour comparer : partie entière, puis dixièmes, centièmes, millièmes.</li>\n<li>Addition et soustraction : <b>virgule sous virgule</b>.</li>\n<li>× 10, 100, 1000 : virgule vers la <b>droite</b> de 1, 2, 3 places ; : 10, 100, 1000 : vers la <b>gauche</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les décimaux",
   "intro": "Si la virgule te embrouille, essaie de voir les décimaux comme de l'argent, comme des mesures, comme des petits cubes 3D ou sur un boulier spécial.",
   "tabs": [
    {
     "label": "💶 Euros et centimes",
     "html": "<p>La façon la plus facile de comprendre les décimaux, c'est l'<b>argent</b> :</p>\n<ul>\n<li>1 € = <b>10 pièces de 10 centimes</b> → chaque pièce de 10 cents est <b>un dixième</b> d'euro (0,10 €) ;</li>\n<li>1 € = <b>100 pièces de 1 centime</b> → chaque centime est <b>un centième</b> d'euro (0,01 €).</li>\n</ul>\n<p>Donc <b>3,45 €</b> = 3 pièces de 1 € + 4 pièces de 10 cents + 5 pièces de 1 cent.</p>\n<p>Et le piège 0,5 ou 0,45 ? Pense à l'argent : <b>50 centimes</b> ou <b>45 centimes</b> ? Évident : 0,50 € c'est plus !</p>",
     "svg": "<svg viewBox=\"0 0 600 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"200\" fill=\"#fefce8\"/>\n<g stroke=\"#a16207\" stroke-width=\"3\">\n<circle cx=\"60\" cy=\"80\" r=\"40\" fill=\"#e5e7eb\"/><circle cx=\"60\" cy=\"80\" r=\"27\" fill=\"#fbbf24\"/>\n<circle cx=\"150\" cy=\"80\" r=\"40\" fill=\"#e5e7eb\"/><circle cx=\"150\" cy=\"80\" r=\"27\" fill=\"#fbbf24\"/>\n<circle cx=\"240\" cy=\"80\" r=\"40\" fill=\"#e5e7eb\"/><circle cx=\"240\" cy=\"80\" r=\"27\" fill=\"#fbbf24\"/>\n<circle cx=\"320\" cy=\"85\" r=\"24\" fill=\"#facc15\"/><circle cx=\"375\" cy=\"85\" r=\"24\" fill=\"#facc15\"/><circle cx=\"430\" cy=\"85\" r=\"24\" fill=\"#facc15\"/><circle cx=\"485\" cy=\"85\" r=\"24\" fill=\"#facc15\"/>\n</g>\n<g stroke=\"#9a3412\" stroke-width=\"2\" fill=\"#ea580c\">\n<circle cx=\"335\" cy=\"150\" r=\"12\"/><circle cx=\"370\" cy=\"150\" r=\"12\"/><circle cx=\"405\" cy=\"150\" r=\"12\"/><circle cx=\"440\" cy=\"150\" r=\"12\"/><circle cx=\"475\" cy=\"150\" r=\"12\"/>\n</g>\n<g font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1f2937\">\n<text x=\"60\" y=\"86\">1 €</text><text x=\"150\" y=\"86\">1 €</text><text x=\"240\" y=\"86\">1 €</text>\n<text x=\"320\" y=\"90\">10c</text><text x=\"375\" y=\"90\">10c</text><text x=\"430\" y=\"90\">10c</text><text x=\"485\" y=\"90\">10c</text>\n</g>\n<text x=\"150\" y=\"160\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1f2937\">3 unités</text>\n<text x=\"545\" y=\"90\" font-size=\"18\" fill=\"#1f2937\">4 d</text>\n<text x=\"510\" y=\"157\" font-size=\"18\" fill=\"#1f2937\">5 c</text>\n<text x=\"300\" y=\"192\" font-size=\"24\" text-anchor=\"middle\" fill=\"#b45309\" font-weight=\"bold\">= 3,45 €</text>\n</svg>"
    },
    {
     "label": "🧊 Les petits cubes 3D comme décimaux",
     "html": "<p>Utilise les blocs base 10, mais <b>change le nom</b> des pièces :</p>\n<ul>\n<li>la <b>plaque</b> (100 petits cubes) = <b>1 entier</b> ;</li>\n<li>la <b>barre</b> (10 petits cubes) = <b>1 dixième</b> (0,1) ;</li>\n<li>le <b>petit cube</b> = <b>1 centième</b> (0,01).</li>\n</ul>\n<p>Le modèle montre ici 245 petits cubes : avec les nouveaux noms, cela fait 2 entiers, 4 dixièmes et 5 centièmes = <b>2,45</b> ! Déplace le curseur et lis le nombre comme un décimal : il suffit de mettre la virgule après le chiffre des centaines.</p>",
     "scene": "blocks",
     "options": {
      "mode": "base10",
      "value": 245
     }
    },
    {
     "label": "🧮 Le boulier avec la virgule",
     "html": "<p>Sur ce boulier, imagine une <b>virgule</b> après la première tige : les tiges sont <b>u</b> (unités), <b>d</b> (dixièmes), <b>c</b> (centièmes), <b>m</b> (millièmes).</p>\n<p>Le nombre montré, 3254, se lit donc <b>3,254</b> : 3 unités, 2 dixièmes, 5 centièmes, 4 millièmes. Essaie d'ajouter 1 millième quand il y en a déjà 9 : regarde l'échange vers les centièmes !</p>",
     "widget": "abacus",
     "options": {
      "columns": [
       "u",
       "d",
       "c",
       "m"
      ],
      "value": 3254
     }
    },
    {
     "label": "📏 Le mètre de couturière",
     "html": "<p>Prends un mètre de couturière ou une règle : c'est une <b>droite des nombres décimaux</b> déjà toute prête !</p>\n<ul>\n<li>entre 0 et 1 mètre il y a 10 grands traits : les <b>décimètres</b> = dixièmes de mètre (0,1 m) ;</li>\n<li>chaque décimètre a 10 traits : les <b>centimètres</b> = centièmes de mètre (0,01 m) ;</li>\n<li>chaque centimètre a 10 petites graduations : les <b>millimètres</b> = millièmes de mètre (0,001 m).</li>\n</ul>\n<p>Exercice : trouve sur le mètre 0,3 m (30 cm), 0,75 m (75 cm), 0,08 m (8 cm). Tu t'apercevras que 0,08 est <b>beaucoup plus proche de zéro</b> que 0,3, même si « 8 semble plus grand que 3 ».</p>"
    },
    {
     "label": "🇬🇧 Le « point » anglais",
     "html": "<p>En anglais, 3,25 s'écrit <b>3.25</b> et se lit <i>« three <b>point</b> two five »</i> : on lit les chiffres décimaux <b>un à la fois</b>.</p>\n<p>Cette façon de lire aide à éviter une erreur courante : <i>« zéro virgule cinq »</i> contre <i>« zéro virgule quarante-cinq »</i> nous fait penser à 5 et 45. En anglais on dit <i>« point five »</i> et <i>« point four five »</i> : on voit tout de suite que le premier chiffre après la virgule, 5 contre 4, décide lequel est le plus grand !</p>\n<p>Essaie de lire ainsi aussi en français : <i>zéro virgule quatre cinq</i>.</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des nombres décimaux",
   "nodes": [
    {
     "id": "unita",
     "label": "Unité",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Le nombre 1 : l'entier que nous voulons diviser.",
     "why": "Dans le système décimal, chaque ordre vaut 10 fois celui qui est à sa droite. En continuant cette règle « au-delà » des unités, vers la droite, naissent les dixièmes, les centièmes, les millièmes."
    },
    {
     "id": "frazdec",
     "label": "Fractions décimales",
     "x": 20,
     "y": 28,
     "color": "#16a34a",
     "html": "Fractions de dénominateur 10, 100, 1000 : 3/10, 25/100…",
     "why": "Elles sont le pont entre les fractions et les décimaux : 3/10 = 0,3. Avant Stevin, on faisait les calculs avec les fractions, qui étaient beaucoup plus pénibles à additionner et à comparer."
    },
    {
     "id": "decimi",
     "label": "Dixièmes, centièmes, millièmes",
     "x": 50,
     "y": 30,
     "color": "#f59e0b",
     "html": "0,1 – 0,01 – 0,001 : chaque ordre est 10 fois plus petit que le précédent.",
     "why": "C'est la même règle du 10 que nous utilisons pour les dizaines et les centaines, appliquée « à l'envers ». Les unités de mesure (dm, cm, mm) suivent aussi cette règle depuis 1795, quand la France a introduit le <b>système métrique décimal</b>."
    },
    {
     "id": "virgola",
     "label": "La virgule",
     "x": 80,
     "y": 28,
     "color": "#ef4444",
     "html": "Elle sépare la partie entière de la partie décimale.",
     "why": "Simon Stevin (1585) utilisait des petits cercles ; John Napier a diffusé le point/la virgule au début du XVII<sup>e</sup> siècle. En France on utilise la virgule, dans les pays anglo-saxons le point : depuis 2003, le Système international les accepte tous les deux."
    },
    {
     "id": "confronto",
     "label": "Comparaison",
     "x": 20,
     "y": 60,
     "color": "#a855f7",
     "html": "Partie entière, puis dixièmes, centièmes, millièmes ; 0,5 = 0,50.",
     "why": "Cela fonctionne grâce à la valeur positionnelle : 1 dixième vaut plus que 9 centièmes (10 centièmes &gt; 9 centièmes). Les zéros à la fin ne changent rien parce qu'ils indiquent « 0 partie » de cet ordre."
    },
    {
     "id": "operazioni",
     "label": "Addition et soustraction",
     "x": 50,
     "y": 62,
     "color": "#0ea5e9",
     "html": "Virgule sous virgule, puis on calcule comme avec les entiers.",
     "why": "On ne peut additionner que des choses du même type : des dixièmes avec des dixièmes, des centièmes avec des centièmes, comme les unités avec les unités. Aligner les virgules aligne les ordres."
    },
    {
     "id": "x10",
     "label": "× et : par 10, 100, 1000",
     "x": 80,
     "y": 60,
     "color": "#14b8a6",
     "html": "La virgule se déplace vers la droite (×) ou vers la gauche (:).",
     "why": "En multipliant par 10, chaque chiffre devient 10 fois plus grand : les dixièmes deviennent des unités, les unités des dizaines… Les chiffres « glissent » d'une place et il semble que la virgule se déplace."
    },
    {
     "id": "vita",
     "label": "Argent et mesures",
     "x": 50,
     "y": 88,
     "color": "#64748b",
     "html": "Euros et centimes, mètres et centimètres, degrés et dixièmes.",
     "why": "L'euro (en circulation depuis 2002) et le système métrique sont décimaux justement pour rendre les calculs faciles avec les mêmes règles que les nombres."
    }
   ],
   "edges": [
    [
     "unita",
     "decimi",
     "divisée en 10, 100, 1000"
    ],
    [
     "frazdec",
     "decimi",
     "s'écrivent comme"
    ],
    [
     "decimi",
     "virgola",
     "après la"
    ],
    [
     "decimi",
     "confronto",
     ""
    ],
    [
     "virgola",
     "operazioni",
     "se met en colonnes"
    ],
    [
     "virgola",
     "x10",
     "se déplace"
    ],
    [
     "operazioni",
     "vita",
     "servent à"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : comparaisons et calculs",
   "questions": [
    {
     "type": "mc",
     "q": "Quel nombre est le plus grand ?",
     "options": [
      "0,8",
      "0,75",
      "0,09"
     ],
     "answer": 0,
     "explain": "0,8 = 0,80 > 0,75 > 0,09."
    },
    {
     "type": "num",
     "q": "Combien font 4,6 + 2,75 ?",
     "answer": 7.35,
     "explain": "4,60 + 2,75 = 7,35 (virgule sous virgule)."
    },
    {
     "type": "num",
     "q": "Combien font 0,36 × 100 ?",
     "answer": 36,
     "explain": "Virgule de 2 places vers la droite : 36."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Nombre décimal",
   "d": "Nombre avec une partie entière et une partie décimale séparées par la virgule."
  },
  {
   "t": "Dixième",
   "d": "Une des 10 parties égales de l'unité : 0,1."
  },
  {
   "t": "Centième",
   "d": "Une des 100 parties égales de l'unité : 0,01."
  },
  {
   "t": "Millième",
   "d": "Une des 1000 parties égales de l'unité : 0,001."
  },
  {
   "t": "Fraction décimale",
   "d": "Fraction de dénominateur 10, 100, 1000…"
  },
  {
   "t": "Partie entière",
   "d": "Les chiffres à gauche de la virgule."
  },
  {
   "t": "Partie décimale",
   "d": "Les chiffres à droite de la virgule."
  },
  {
   "t": "Virgule",
   "d": "Signe qui sépare la partie entière de la partie décimale (dans les pays anglo-saxons, on utilise le point)."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Écris comme nombre décimal la fraction 7/10.",
    "answer": 0.7,
    "explain": "7 dixièmes = 0,7."
   },
   {
    "type": "num",
    "q": "Écris comme nombre décimal : 4 unités et 3 centièmes.",
    "answer": 4.03,
    "explain": "4,03 : le zéro tient la place des dixièmes."
   },
   {
    "type": "mc",
    "q": "Dans 12,384, le chiffre 8 indique…",
    "options": [
     "8 dixièmes",
     "8 centièmes",
     "8 millièmes"
    ],
    "answer": 1,
    "explain": "Deuxième chiffre après la virgule : centièmes."
   },
   {
    "type": "tf",
    "q": "0,40 et 0,4 sont le même nombre.",
    "answer": true,
    "explain": "Les zéros à la fin ne changent pas la valeur."
   },
   {
    "type": "mc",
    "q": "Quel nombre est le plus petit ?",
    "options": [
     "0,3",
     "0,29",
     "0,31"
    ],
    "answer": 1,
    "explain": "0,29 a 2 dixièmes, les autres 3."
   },
   {
    "type": "num",
    "q": "Combien font 10 − 3,6 ?",
    "answer": 6.4,
    "explain": "10,0 − 3,6 = 6,4."
   },
   {
    "type": "num",
    "q": "Combien font 52,7 : 10 ?",
    "answer": 5.27,
    "explain": "Virgule de 1 place vers la gauche."
   },
   {
    "type": "num",
    "q": "Combien y a-t-il de millièmes dans 1 dixième ?",
    "answer": 100,
    "explain": "1 dixième = 10 centièmes = 100 millièmes."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre, du plus petit au plus grand.",
    "items": [
     "0,05",
     "0,5",
     "0,55",
     "5,05"
    ],
    "explain": "Compare la partie entière, puis les dixièmes, puis les centièmes."
   },
   {
    "type": "num",
    "q": "Un sandwich coûte 2,35 € et une boisson 1,90 €. Combien dépenses-tu en tout ?",
    "answer": 4.25,
    "unit": "€",
    "explain": "2,35 + 1,90 = 4,25 €."
   }
  ],
  "gen": [
   [
    "decAdd",
    2
   ],
   [
    "decMul",
    1
   ]
  ]
 }
});
