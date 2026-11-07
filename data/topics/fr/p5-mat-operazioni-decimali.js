TOPIC('fr', {
 "id": "p5-mat-operazioni-decimali",
 "title": "Opérations avec les décimaux",
 "intro": "Prix, mesures, temps des courses : les <b>nombres décimaux</b> sont partout. Dans cette leçon, tu apprends à faire les <b>quatre opérations avec la virgule</b> et à multiplier et diviser par 10, 100, 1000 en « déplaçant » la virgule.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Rappel : comment est fait un nombre décimal",
   "html": "<p>Un nombre décimal a une <b>partie entière</b> (avant la virgule) et une <b>partie décimale</b> (après la virgule).</p>\n<p>Dans le nombre <b>34,56</b> :</p>\n<ul>\n<li>3 = dizaines (dz), 4 = unités (u) → partie entière ;</li>\n<li>5 = <b>dixièmes</b> (d) : 1 dixième = 1/10 = 0,1 ;</li>\n<li>6 = <b>centièmes</b> (c) : 1 centième = 1/100 = 0,01 ;</li>\n<li>le chiffre suivant serait celui des <b>millièmes</b> (m) : 1/1000 = 0,001.</li>\n</ul>\n<p>Règle d'or : ajouter des <b>zéros à la fin</b> de la partie décimale <b>ne change pas</b> le nombre : 2,5 = 2,50 = 2,500. Cette astuce va nous servir énormément !</p>"
  },
  {
   "type": "text",
   "title": "Addition et soustraction : virgule sous virgule",
   "html": "<ol>\n<li>Écris les nombres en colonne avec la <b>virgule sous la virgule</b> (ainsi les unités sont sous les unités, les dixièmes sous les dixièmes…).</li>\n<li>Si un nombre a moins de chiffres décimaux, <b>ajoute des zéros</b> pour égaliser : 12,4 → 12,40.</li>\n<li>Fais l'opération comme avec les nombres entiers, de droite à gauche, avec des retenues.</li>\n<li>Dans le résultat, mets la <b>virgule sous les autres virgules</b>.</li>\n</ol>\n<p>Exemple : 12,4 + 3,75 → 12,40 + 3,75 = <b>16,15</b>. Exemple : 8 − 2,35 → 8,00 − 2,35 = <b>5,65</b>.</p>"
  },
  {
   "type": "svg",
   "title": "En colonne, virgule sous virgule",
   "svg": "<svg viewBox=\"0 0 640 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"300\" fill=\"#f8fafc\"/>\n<g font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\">\n<text x=\"80\" y=\"36\" fill=\"#7c3aed\">dz</text><text x=\"120\" y=\"36\" fill=\"#2563eb\">u</text><text x=\"180\" y=\"36\" fill=\"#16a34a\">d</text><text x=\"220\" y=\"36\" fill=\"#dc2626\">c</text>\n</g>\n<rect x=\"148\" y=\"44\" width=\"10\" height=\"170\" fill=\"#fde68a\"/>\n<g font-size=\"34\" text-anchor=\"middle\" font-family=\"monospace\" fill=\"#1f2937\">\n<text x=\"80\" y=\"84\">1</text><text x=\"120\" y=\"84\">2</text><text x=\"153\" y=\"84\">,</text><text x=\"180\" y=\"84\">4</text><text x=\"220\" y=\"84\" fill=\"#f97316\">0</text>\n<text x=\"40\" y=\"134\">+</text><text x=\"120\" y=\"134\">3</text><text x=\"153\" y=\"134\">,</text><text x=\"180\" y=\"134\">7</text><text x=\"220\" y=\"134\">5</text>\n<text x=\"80\" y=\"200\" font-weight=\"bold\">1</text><text x=\"120\" y=\"200\" font-weight=\"bold\">6</text><text x=\"153\" y=\"200\" font-weight=\"bold\">,</text><text x=\"180\" y=\"200\" font-weight=\"bold\">1</text><text x=\"220\" y=\"200\" font-weight=\"bold\">5</text>\n</g>\n<line x1=\"30\" y1=\"150\" x2=\"250\" y2=\"150\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<text x=\"132\" y=\"58\" font-size=\"14\" text-anchor=\"middle\" fill=\"#64748b\">1</text>\n<text x=\"235\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#ea580c\">zéro ajouté</text>\n<line x1=\"228\" y1=\"234\" x2=\"222\" y2=\"92\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n<g font-size=\"16\" fill=\"#1f2937\">\n<text x=\"300\" y=\"70\">1) virgule sous virgule</text>\n<text x=\"300\" y=\"105\">2) j'égalise avec des zéros : 12,4 → 12,40</text>\n<text x=\"300\" y=\"140\">3) je calcule de droite à gauche, avec les retenues :</text>\n<text x=\"320\" y=\"165\">0 + 5 = 5 ;  4 + 7 = 11 → j'écris 1, je retiens 1</text>\n<text x=\"300\" y=\"200\">4) la virgule du résultat descend</text>\n<text x=\"320\" y=\"225\">dans la même colonne</text>\n</g>\n</svg>",
   "caption": "La colonne jaune des virgules garde les chiffres en ordre : dixièmes avec dixièmes, centièmes avec centièmes."
  },
  {
   "type": "example",
   "title": "Exemple pratique : les courses",
   "html": "<p>Maman achète : du pain à <b>2,35 €</b>, du lait à <b>1,49 €</b>, des pommes à <b>3,2 €</b>. Elle paie avec un billet de <b>10 €</b>.</p>\n<ol>\n<li>Total : 2,35 + 1,49 + 3,20 = <b>7,04 €</b> (attention : 3,2 → 3,20 !).</li>\n<li>Monnaie rendue : 10,00 − 7,04 = <b>2,96 €</b>.</li>\n</ol>\n<p>Contrôle rapide (estimation) : 2 + 1,5 + 3 ≈ 6,5, donc le total est d'environ 7 € : le résultat est raisonnable. ✅</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : addition et soustraction",
   "questions": [
    {
     "type": "num",
     "q": "4,5 + 2,35 = ?",
     "answer": 6.85,
     "explain": "4,50 + 2,35 = 6,85."
    },
    {
     "type": "num",
     "q": "10 − 3,6 = ?",
     "answer": 6.4,
     "explain": "10,0 − 3,6 = 6,4."
    },
    {
     "type": "tf",
     "q": "3,7 et 3,70 sont le même nombre.",
     "answer": true,
     "explain": "Les zéros à la fin de la partie décimale ne changent pas la valeur."
    }
   ]
  },
  {
   "type": "text",
   "title": "Multiplier et diviser par 10, 100, 1000",
   "html": "<p>C'est la partie la plus « magique » :</p>\n<ul>\n<li><b>× 10, × 100, × 1000</b> → la virgule se déplace vers la <b>droite</b> de <b>1, 2, 3</b> rangs (le nombre devient plus grand). 3,456 × 10 = 34,56 ; 3,456 × 100 = 345,6 ; 3,456 × 1000 = 3456.</li>\n<li><b>: 10, : 100, : 1000</b> → la virgule se déplace vers la <b>gauche</b> de <b>1, 2, 3</b> rangs (le nombre devient plus petit). 45,7 : 10 = 4,57 ; 45,7 : 100 = 0,457.</li>\n</ul>\n<p>S'il manque des chiffres, on ajoute des <b>zéros</b> : 2,5 × 1000 = 2500 ; 3 : 100 = 0,03.</p>\n<p>L'astuce : <b>compte les zéros</b> de 10, 100, 1000. Autant de zéros = autant de rangs.</p>"
  },
  {
   "type": "text",
   "title": "La multiplication avec la virgule",
   "html": "<ol>\n<li>Fais la multiplication <b>comme s'il n'y avait pas de virgules</b>.</li>\n<li><b>Compte</b> combien il y a de chiffres décimaux <b>en tout</b> dans les deux facteurs.</li>\n<li>Dans le résultat, en partant de la droite, sépare avec la virgule <b>le même nombre de chiffres</b>.</li>\n</ol>\n<p>Exemple : 2,3 × 1,4 → 23 × 14 = 322. Chiffres décimaux : 1 + 1 = 2 → <b>3,22</b>.</p>\n<p>Exemple : 0,5 × 0,3 → 5 × 3 = 15. Chiffres décimaux : 2 → <b>0,15</b>.</p>\n<p>⚠️ Multiplier par un nombre <b>inférieur à 1</b> donne un résultat <b>plus petit</b> : 0,5 × 8 = 4 (c'est la moitié de 8 !).</p>"
  },
  {
   "type": "widget",
   "title": "La multiplication comme aire : 0,3 × 0,4",
   "widget": "areaGrid",
   "options": {
    "w": 3,
    "h": 4,
    "max": 10
   },
   "caption": "Imagine que le grand carré 10 × 10 représente 1 entier : chaque côté vaut 1 et chaque petit carré vaut 0,01. Un rectangle de 3 colonnes (0,3) et 4 lignes (0,4) contient 12 petits carrés : 0,3 × 0,4 = 0,12."
  },
  {
   "type": "text",
   "title": "La division avec la virgule",
   "html": "<p><b>Cas 1 – la virgule est dans le dividende</b> (ex. 7,5 : 3) :</p>\n<ol>\n<li>divise normalement la partie entière : 7 : 3 = 2 reste 1 ;</li>\n<li><b>quand tu abaisses le premier chiffre après la virgule, mets la virgule au quotient</b> : tu abaisses le 5 → 15 : 3 = 5 → résultat <b>2,5</b>.</li>\n</ol>\n<p><b>Cas 2 – la virgule est dans le diviseur</b> (ex. 6 : 1,5) :</p>\n<ol>\n<li>utilise la <b>propriété d'invariance</b> : multiplie dividende et diviseur par le <b>même nombre</b> (10, 100…) pour enlever la virgule du diviseur ;</li>\n<li>6 : 1,5 → (× 10) → 60 : 15 = <b>4</b>.</li>\n</ol>\n<p><b>Cas 3 – le reste n'est pas zéro</b> : tu peux continuer en ajoutant un <b>zéro</b> au reste et en mettant la virgule au quotient : 7 : 4 = 1 reste 3 → 30 : 4 = 7 reste 2 → 20 : 4 = 5 → <b>1,75</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : partager l'addition de la pizza",
   "html": "<p>Quatre amis dépensent à la pizzeria <b>38,60 €</b> et partagent l'addition en parts égales.</p>\n<p>38,60 : 4 → 38 : 4 = 9 reste 2 ; j'abaisse le 6 (je mets la virgule !) → 26 : 4 = 6 reste 2 ; j'abaisse le 0 → 20 : 4 = 5. Résultat : <b>9,65 €</b> chacun.</p>\n<p>Contrôle : 9,65 × 4 = 38,60 ✅. La multiplication est l'opération <b>inverse</b> de la division : c'est la meilleure façon de vérifier !</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : l'essence et le scooter",
   "html": "<p>L'essence coûte <b>1,85 €</b> le litre. Grand-père en prend <b>12 litres</b>. Combien dépense-t-il ?</p>\n<p>185 × 12 = 2220 → 2 chiffres décimaux → <b>22,20 €</b>.</p>\n<p>Le scooter parcourt <b>34,5 km</b> avec 1 litre. Avec 12 litres : 34,5 × 12 = <b>414 km</b>.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : multiplication et division",
   "questions": [
    {
     "type": "num",
     "q": "4,73 × 100 = ?",
     "answer": 473,
     "explain": "× 100 : la virgule se déplace de 2 rangs vers la droite."
    },
    {
     "type": "num",
     "q": "56 : 1000 = ?",
     "answer": 0.056,
     "explain": ": 1000 : la virgule se déplace de 3 rangs vers la gauche, en ajoutant des zéros : 0,056."
    },
    {
     "type": "num",
     "q": "1,2 × 0,3 = ?",
     "answer": 0.36,
     "explain": "12 × 3 = 36 ; 2 chiffres décimaux → 0,36."
    },
    {
     "type": "num",
     "q": "9 : 1,5 = ?",
     "answer": 6,
     "explain": "Propriété d'invariance : 90 : 15 = 6."
    }
   ]
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Virgule ou point ?",
   "html": "<p>En France, en Italie et dans une grande partie de l'Europe, les décimaux se séparent avec la <b>virgule</b> (3,14). Dans les pays de langue anglaise, en Chine et au Japon, on utilise le <b>point</b> (3.14). Les calculatrices et les ordinateurs utilisent souvent le point ! Et les milliers ? En France, on écrit 1 000 000 avec des espaces ; en Italie, 1.000.000 ; les Anglais, 1,000,000. Pour éviter toute confusion, les normes internationales conseillent de séparer les milliers par une <b>espace</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le petit livre qui a inventé les décimaux (en Europe)",
   "html": "<p>En <b>1585</b>, le mathématicien flamand <b>Simon Stevin</b> publia un petit livre de quelques pages, <i>De Thiende</i> (« La dixième »), pour expliquer aux marchands et aux géomètres comment utiliser les fractions décimales dans les comptes de tous les jours. Il écrivait les nombres d'une façon étrange, avec des petits cercles : 3⓪1①4②. Quelques années plus tard, l'Écossais <b>John Napier</b> (Neper) a popularisé le séparateur. Bien avant, des mathématiciens arabes et chinois utilisaient déjà les fractions décimales.</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li><b>+ et −</b> : virgule sous virgule, égalise avec des zéros.</li>\n<li><b>× et : par 10, 100, 1000</b> : déplace la virgule vers la droite (×) ou la gauche (:) d'autant de rangs qu'il y a de zéros.</li>\n<li><b>×</b> : multiplie sans virgules, puis sépare autant de chiffres décimaux qu'il y en a en tout dans les facteurs.</li>\n<li><b>:</b> virgule dans le dividende → mets-la au quotient quand tu la dépasses ; virgule dans le diviseur → enlève-la avec la propriété d'invariance.</li>\n<li><b>Estime</b> toujours le résultat et fais la <b>preuve</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les calculs avec la virgule",
   "intro": "Si la règle de la virgule te brouille, essaie avec les euros, avec les blocs 3D, avec les unités de mesure ou avec la méthode de l'estimation utilisée dans beaucoup de pays.",
   "tabs": [
    {
     "label": "💶 Pense en centimes",
     "html": "<p>Transforme tout en <b>centimes</b> et la virgule disparaît !</p>\n<ul>\n<li>2,35 € + 1,49 € → 235 c + 149 c = 384 c = <b>3,84 €</b>.</li>\n<li>10 € − 7,04 € → 1000 c − 704 c = 296 c = <b>2,96 €</b>.</li>\n<li>1,85 € × 12 → 185 c × 12 = 2220 c = <b>22,20 €</b>.</li>\n<li>38,60 € : 4 → 3860 c : 4 = 965 c = <b>9,65 €</b>.</li>\n</ul>\n<p>C'est exactement ce que fait la règle de la virgule : elle travaille avec des nombres entiers et, à la fin, remet la virgule à la bonne place.</p>"
    },
    {
     "label": "🧊 Les blocs 3D",
     "html": "<p>Prends les blocs base 10 mais change la « valeur » : la <b>plaque</b> de 100 petits cubes vaut <b>1 entier</b>, la <b>barre</b> de 10 vaut <b>1 dixième</b> (0,1), le <b>petit cube</b> vaut <b>1 centième</b> (0,01).</p>\n<p>Le modèle ci-dessous montre 245 petits cubes : avec notre règle, cela fait <b>2,45</b> (2 plaques, 4 barres, 5 petits cubes). Si tu ajoutes 0,07, tu ajoutes 7 petits cubes : tu arrives à 12 petits cubes isolés, tu en échanges 10 contre une barre (c'est la <b>retenue</b>!) et tu obtiens 2,52.</p>",
     "scene": "blocks",
     "options": {
      "mode": "base10",
      "value": 245
     }
    },
    {
     "label": "📏 Avec les mesures",
     "html": "<p>Multiplier et diviser par 10, 100, 1000, c'est comme <b>changer d'unité de mesure</b> :</p>\n<ul>\n<li>3,25 m = 32,5 dm = <b>325 cm</b> (× 100 : des mètres aux centimètres).</li>\n<li>1500 g = <b>1,5 kg</b> ( : 1000 : des grammes aux kilogrammes).</li>\n<li>0,75 l = <b>75 cl</b> = 750 ml.</li>\n</ul>\n<p>Le nombre change, mais la <b>quantité reste la même</b> : seule la « règle » avec laquelle tu la mesures change. Déplacer la virgule = changer de tiroir dans le tableau des mesures.</p>",
     "svg": "<svg viewBox=\"0 0 600 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"200\" fill=\"#f0fdf4\"/>\n<g font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">\n<rect x=\"20\" y=\"40\" width=\"80\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"60\" y=\"73\">km</text>\n<rect x=\"100\" y=\"40\" width=\"80\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"140\" y=\"73\">hm</text>\n<rect x=\"180\" y=\"40\" width=\"80\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"220\" y=\"73\">dam</text>\n<rect x=\"260\" y=\"40\" width=\"80\" height=\"50\" fill=\"#fde68a\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"300\" y=\"73\">m</text>\n<rect x=\"340\" y=\"40\" width=\"80\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"380\" y=\"73\">dm</text>\n<rect x=\"420\" y=\"40\" width=\"80\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"460\" y=\"73\">cm</text>\n<rect x=\"500\" y=\"40\" width=\"80\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/><text x=\"540\" y=\"73\">mm</text>\n</g>\n<path d=\"M300,100 Q380,150 460,100\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<polygon points=\"452,96 468,100 458,112\" fill=\"#dc2626\"/>\n<text x=\"380\" y=\"160\" font-size=\"17\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">× 100 (2 rangs vers la droite)</text>\n<text x=\"300\" y=\"190\" font-size=\"17\" text-anchor=\"middle\" fill=\"#1f2937\">3,25 m = 325 cm</text>\n</svg>"
    },
    {
     "label": "🎯 D'abord estimer, puis calculer",
     "html": "<p>Dans beaucoup de pays (par exemple en Angleterre et aux Pays-Bas), on enseigne à <b>estimer d'abord</b> et à utiliser l'estimation pour <b>placer la virgule</b> :</p>\n<ul>\n<li>4,8 × 3,1 → estimation : 5 × 3 = 15. Calcul sans virgules : 48 × 31 = 1488. Où mettre la virgule pour que le résultat soit proche de 15 ? → <b>14,88</b>!</li>\n<li>0,62 × 5 → estimation : environ la moitié de 5… environ 3. 62 × 5 = 310 → <b>3,10</b>.</li>\n</ul>\n<p>Ainsi, même si tu te trompes en comptant les chiffres décimaux, l'estimation te prévient tout de suite : 148,8 ou 1,488 seraient absurdes !</p>"
    },
    {
     "label": "🇬🇧 Le point décimal anglais",
     "html": "<p>En France et en Italie, on écrit <b>3,75</b>. Au <b>Royaume-Uni</b>, aux <b>États-Unis</b> et dans beaucoup d'autres pays, on écrit <b>3.75</b> : à la place de la virgule, il y a le <b>point</b> (<i>decimal point</i>). Et pour les milliers, ils font le contraire de nous : notre 1 250,75 devient pour un Anglais <b>1,250.75</b>!</p><p>⚠️ Fais attention quand tu utilises une calculatrice ou un téléphone réglé en anglais : la touche de la virgule est un <b>point</b>.</p><p>Pour additionner et soustraire en colonne, les enseignants anglais répètent : <b>« line up the decimal points ! »</b>, c'est-à-dire « aligne les points décimaux ! ». C'est la même règle que nous utilisons avec la virgule :</p><ol><li>Écris les nombres l'un sous l'autre avec les <b>virgules (ou les points) en colonne</b>.</li><li>Ajoute les <b>zéros</b> qui manquent, pour que les chiffres soient tous alignés : 12,5 devient 12,50.</li><li>Calcule comme avec les nombres entiers et reporte la virgule dans la même colonne.</li></ol><p>12,50 + 3,75 = <b>16,25</b> (en anglais : 12.50 + 3.75 = 16.25).</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#f8fafc\"/><rect x=\"30\" y=\"30\" width=\"250\" height=\"110\" fill=\"#ffffff\" stroke=\"#16a34a\" stroke-width=\"3\"/><text x=\"155\" y=\"62\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">🇫🇷 🇮🇹 France et Italie</text><text x=\"155\" y=\"100\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1.250,75</text><text x=\"155\" y=\"128\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#16a34a\" text-anchor=\"middle\">virgule = décimaux</text><rect x=\"320\" y=\"30\" width=\"250\" height=\"110\" fill=\"#ffffff\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"445\" y=\"62\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">🇬🇧 🇺🇸 Royaume-Uni et États-Unis</text><text x=\"445\" y=\"100\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1,250.75</text><text x=\"445\" y=\"128\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#2563eb\" text-anchor=\"middle\">point = décimaux</text><text x=\"140\" y=\"190\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">  12.50</text><text x=\"140\" y=\"222\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">+  3.75</text><line x1=\"140\" y1=\"232\" x2=\"260\" y2=\"232\" stroke=\"#1e293b\" stroke-width=\"3\"/><text x=\"140\" y=\"262\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">  16.25</text><line x1=\"215\" y1=\"168\" x2=\"215\" y2=\"270\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><text x=\"300\" y=\"215\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">«line up the</text><text x=\"300\" y=\"238\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">decimal points!»</text></svg>"
    },
    {
     "label": "🇯🇵 Le soroban : tu choisis où est la virgule",
     "html": "<p>Sur le <b>soroban</b> japonais, il n'y a pas de virgule ! Toutes les 3 tiges, il y a un petit <b>point</b> sur la barre : avant de commencer, <b>choisis un point</b> et décide que c'est la tige des <b>unités</b>. À gauche, il y a les dizaines et les centaines, à <b>droite</b> les dixièmes, les centièmes, les millièmes.</p><p>Rappelle-toi : la boule du haut vaut <b>5</b>, chacune des 4 du bas vaut <b>1</b>.</p><p><b>2,35 + 1,49</b> :</p><ol><li>Place <b>2,35</b> : 2 sur la tige des unités, 3 sur les dixièmes, 5 sur les centièmes (la boule de 5).</li><li>Ajoute 1 unité → 3 unités.</li><li>Ajoute 4 dixièmes → 7 dixièmes.</li><li>Ajoute 9 centièmes : 5 + 9 = 14 → tu laisses 4 centièmes et tu retiens <b>1 dixième</b> de plus : 8 dixièmes.</li><li>Lis : <b>3,84</b>.</li></ol><p>La virgule ne bouge jamais : tu décides une seule fois où sont les unités. Et pour multiplier par 10 ? Il suffit d'imaginer que les unités sont sur une tige plus à droite : tous les chiffres « montent » d'un rang !</p>",
     "svg": "<svg viewBox=\"0 0 600 290\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"290\" fill=\"#f8fafc\"/><rect x=\"30\" y=\"20\" width=\"320\" height=\"230\" fill=\"#92400e\" stroke=\"#451a03\" stroke-width=\"3\"/><rect x=\"40\" y=\"30\" width=\"300\" height=\"210\" fill=\"#fef3c7\" stroke=\"#78350f\" stroke-width=\"2\"/><rect x=\"40\" y=\"90\" width=\"300\" height=\"8\" fill=\"#451a03\" stroke=\"#451a03\" stroke-width=\"1\"/><line x1=\"70\" y1=\"30\" x2=\"70\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"70\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"70\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">dizaines</text><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"130\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"113\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"94\" r=\"4\" fill=\"#fff\" stroke=\"none\" stroke-width=\"2\"/><text x=\"130\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">unités</text><line x1=\"190\" y1=\"30\" x2=\"190\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"190\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"113\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"190\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">dixièmes</text><line x1=\"250\" y1=\"30\" x2=\"250\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"250\" cy=\"75\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">cent.</text><line x1=\"310\" y1=\"30\" x2=\"310\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"310\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">mill.</text><text x=\"410\" y=\"60\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">2,35 sur le soroban</text><text x=\"410\" y=\"92\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">point blanc =</text><text x=\"410\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">tige des unités</text><text x=\"410\" y=\"150\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">à droite :</text><text x=\"410\" y=\"170\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">dixièmes, centièmes…</text></svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des opérations avec les décimaux",
   "nodes": [
    {
     "id": "decimali",
     "label": "Nombres décimaux",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Nombres avec une partie entière et une partie décimale, séparées par la virgule.",
     "why": "Ce sont des fractions décimales (de dénominateur 10, 100, 1000…) écrites de façon pratique : 0,25 = 25/100. Elles fonctionnent parce que notre système de numération est en base 10."
    },
    {
     "id": "posizione",
     "label": "Valeur de position",
     "x": 20,
     "y": 26,
     "color": "#7c3aed",
     "html": "Chaque rang vaut 10 fois celui qui est à sa droite : u, d, c, m.",
     "why": "Le système de position avec le zéro est venu d'Inde par les Arabes ; Fibonacci l'a diffusé en Europe en 1202. Les décimaux en sont l'extension « après la virgule »."
    },
    {
     "id": "addsott",
     "label": "Addition et soustraction",
     "x": 20,
     "y": 52,
     "color": "#16a34a",
     "html": "Virgule sous virgule, en égalisant avec des zéros.",
     "why": "On ne peut additionner que des unités de même type (dixièmes avec dixièmes) : aligner les virgules aligne automatiquement les valeurs de position."
    },
    {
     "id": "potenze10",
     "label": "× et : par 10, 100, 1000",
     "x": 50,
     "y": 34,
     "color": "#f97316",
     "html": "La virgule se déplace vers la droite (×) ou la gauche (:) d'autant de rangs qu'il y a de zéros.",
     "why": "Multiplier par 10 rend chaque chiffre 10 fois plus grand : chaque chiffre « monte » d'un rang. En réalité, ce sont les chiffres qui bougent, mais c'est comme si la virgule se déplaçait."
    },
    {
     "id": "molt",
     "label": "Multiplication",
     "x": 50,
     "y": 62,
     "color": "#dc2626",
     "html": "Multiplie sans virgules, puis sépare autant de chiffres décimaux qu'il y en a dans les facteurs.",
     "why": "2,3 × 1,4 = (23 : 10) × (14 : 10) = 322 : 100 = 3,22. Enlever les virgules revient à multiplier par 10, 100… ; à la fin, il faut « rendre » ces divisions."
    },
    {
     "id": "div",
     "label": "Division",
     "x": 80,
     "y": 52,
     "color": "#0ea5e9",
     "html": "Virgule au quotient quand on dépasse la virgule du dividende ; virgule du diviseur enlevée avec l'invariance.",
     "why": "Propriété d'invariance : en multipliant dividende et diviseur par le même nombre, le quotient ne change pas (6 : 1,5 = 60 : 15), comme les fractions équivalentes."
    },
    {
     "id": "zeri",
     "label": "Zéros finaux",
     "x": 80,
     "y": 26,
     "color": "#eab308",
     "html": "2,5 = 2,50 = 2,500.",
     "why": "Ajouter des zéros après le dernier chiffre décimal revient à ajouter 0 centième, 0 millième : la valeur ne change pas. C'est comme dire 25/10 = 250/100."
    },
    {
     "id": "stima",
     "label": "Estimation et preuve",
     "x": 35,
     "y": 86,
     "color": "#14b8a6",
     "html": "Calcul approché avant, opération inverse après.",
     "why": "Arrondir aux nombres entiers donne tout de suite l'ordre de grandeur : si l'estimation et le résultat sont très différents, la virgule est à la mauvaise place."
    },
    {
     "id": "storia",
     "label": "Stevin et Neper",
     "x": 70,
     "y": 86,
     "color": "#64748b",
     "html": "Ceux qui ont diffusé les décimaux en Europe.",
     "why": "Simon Stevin en 1585 (<i>De Thiende</i>) a expliqué les décimaux pour le commerce ; John Napier (Neper), au début du XVIIe siècle, a popularisé le séparateur décimal. Avant eux, des mathématiciens chinois et arabes comme al-Kashi (1427) les utilisaient."
    }
   ],
   "edges": [
    [
     "decimali",
     "posizione",
     "reposent sur la"
    ],
    [
     "decimali",
     "zeri",
     "propriété"
    ],
    [
     "posizione",
     "addsott",
     "aligne"
    ],
    [
     "posizione",
     "potenze10",
     "explique"
    ],
    [
     "potenze10",
     "molt",
     "utilisé dans la"
    ],
    [
     "zeri",
     "div",
     "aident dans la"
    ],
    [
     "molt",
     "stima",
     "se contrôle avec"
    ],
    [
     "decimali",
     "storia",
     "diffusés par"
    ]
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
   "d": "Une des 10 parties de l'unité : 0,1."
  },
  {
   "t": "Centième",
   "d": "Une des 100 parties de l'unité : 0,01."
  },
  {
   "t": "Millième",
   "d": "Une des 1000 parties de l'unité : 0,001."
  },
  {
   "t": "Poser en colonne",
   "d": "Écrire les nombres l'un sous l'autre avec les chiffres du même ordre alignés."
  },
  {
   "t": "Propriété d'invariance",
   "d": "En multipliant ou en divisant dividende et diviseur par le même nombre, le quotient ne change pas."
  },
  {
   "t": "Estimation",
   "d": "Calcul approché pour prévoir le résultat."
  },
  {
   "t": "Preuve",
   "d": "Vérification du résultat avec l'opération inverse."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "15,6 + 4,75 = ?",
    "answer": 20.35,
    "explain": "15,60 + 4,75 = 20,35."
   },
   {
    "type": "num",
    "q": "20 − 7,85 = ?",
    "answer": 12.15,
    "explain": "20,00 − 7,85 = 12,15."
   },
   {
    "type": "num",
    "q": "0,38 × 1000 = ?",
    "answer": 380,
    "explain": "3 rangs vers la droite : 380."
   },
   {
    "type": "num",
    "q": "125 : 100 = ?",
    "answer": 1.25,
    "explain": "2 rangs vers la gauche : 1,25."
   },
   {
    "type": "num",
    "q": "3,5 × 4 = ?",
    "answer": 14,
    "explain": "35 × 4 = 140 ; 1 chiffre décimal → 14,0 = 14."
   },
   {
    "type": "num",
    "q": "0,6 × 0,7 = ?",
    "answer": 0.42,
    "explain": "6 × 7 = 42 ; 2 chiffres décimaux → 0,42."
   },
   {
    "type": "num",
    "q": "8,4 : 4 = ?",
    "answer": 2.1,
    "explain": "8 : 4 = 2, puis 4 : 4 = 1 après la virgule → 2,1."
   },
   {
    "type": "num",
    "q": "12 : 0,4 = ?",
    "answer": 30,
    "explain": "Invariance : 120 : 4 = 30."
   },
   {
    "type": "mc",
    "q": "Pour multiplier 2,37 × 1,2, combien de chiffres décimaux aura le résultat ?",
    "options": [
     "1",
     "2",
     "3"
    ],
    "answer": 2,
    "explain": "2 chiffres dans 2,37 + 1 dans 1,2 = 3 chiffres décimaux (2,844)."
   },
   {
    "type": "tf",
    "q": "En multipliant un nombre par 0,5, on obtient un nombre plus grand.",
    "answer": false,
    "explain": "0,5 est inférieur à 1 : on obtient la moitié du nombre."
   },
   {
    "type": "num",
    "q": "Un cahier coûte 1,75 €. Combien coûtent 6 cahiers ?",
    "answer": 10.5,
    "unit": "€",
    "explain": "175 × 6 = 1050 → 10,50 €."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre les étapes pour calculer 2,3 × 1,4.",
    "items": [
     "Je multiplie sans virgules : 23 × 14 = 322",
     "Je compte les chiffres décimaux des facteurs : 1 + 1 = 2",
     "Je sépare 2 chiffres en partant de la droite : 3,22",
     "Je contrôle avec l'estimation : 2 × 1,5 ≈ 3"
    ],
    "explain": "Je calcule, je compte les décimaux, je mets la virgule, je vérifie avec l'estimation."
   }
  ],
  "gen": [
   [
    "decAdd",
    2
   ],
   [
    "decMul",
    2
   ]
  ]
 }
});
