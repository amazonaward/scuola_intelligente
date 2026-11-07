TOPIC('fr', {
 "id": "m2-sci-forze-moto",
 "title": "Forces et mouvement",
 "intro": "Pourquoi un vélo accélère-t-il, freine-t-il ou tourne-t-il ? Pourquoi, avec un pied-de-biche, peut-on soulever un rocher ? Dans cette leçon, tu apprends à décrire le <b>mouvement</b> (vitesse et accélération), à comprendre ce que sont les <b>forces</b> et comment les <b>leviers</b> nous aident à les multiplier.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "1. Le mouvement est relatif",
   "html": "<p>Un corps est <b>en mouvement</b> quand sa position change dans le temps par rapport à un <b>référentiel</b>, c'est-à-dire par rapport à quelque chose que nous considérons comme immobile.</p>\n<p>Assis dans un train, tu es <b>immobile</b> par rapport à ton siège mais <b>en mouvement</b> par rapport à la gare. Et la Terre elle-même tourne autour du Soleil à environ 30 km par seconde ! C'est pourquoi on dit que le mouvement est <b>relatif</b>.</p>\n<p>Pour décrire un mouvement, il faut :</p>\n<ul>\n<li>la <b>trajectoire</b> : la ligne parcourue (rectiligne, circulaire, courbe…) ;</li>\n<li>la <b>distance parcourue</b> <i>s</i>, en mètres (m) ;</li>\n<li>le <b>temps</b> mis <i>t</i>, en secondes (s).</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "2. La vitesse",
   "html": "<p>La <b>vitesse</b> dit quelle distance on parcourt dans l'unité de temps :</p>\n<p style=\"font-size:1.3em;text-align:center\"><b>v = s / t</b></p>\n<p>Dans le Système International, elle se mesure en <b>mètres par seconde (m/s)</b> ; dans la vie de tous les jours, nous utilisons les <b>kilomètres par heure (km/h)</b>.</p>\n<ul>\n<li>de km/h à m/s : <b>divise par 3,6</b> (72 km/h = 20 m/s) ;</li>\n<li>de m/s à km/h : <b>multiplie par 3,6</b> (10 m/s = 36 km/h).</li>\n</ul>\n<p>Pourquoi 3,6 ? Parce que 1 km = 1000 m et 1 h = 3600 s : 1000/3600 = 1/3,6.</p>\n<p>Formules inverses : <b>s = v · t</b> et <b>t = s / v</b>.</p>\n<p>Le <b>mouvement rectiligne uniforme</b> est celui où un corps va en ligne droite avec une vitesse <b>constante</b> : il parcourt des distances égales en des temps égaux. Son graphique distance-temps est une <b>droite</b> qui part de l'origine ; plus elle est raide, plus la vitesse est grande.</p>\n<p>Presque toujours, pourtant, la vitesse change : alors nous calculons la <b>vitesse moyenne</b> (distance totale / temps total).</p>"
  },
  {
   "type": "svg",
   "title": "Le graphique distance-temps",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<line x1=\"70\" y1=\"270\" x2=\"560\" y2=\"270\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n<line x1=\"70\" y1=\"270\" x2=\"70\" y2=\"30\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n<polygon points=\"560,264 575,270 560,276\" fill=\"#0f172a\"/>\n<polygon points=\"64,30 70,15 76,30\" fill=\"#0f172a\"/>\n<text x=\"560\" y=\"300\" font-size=\"17\" fill=\"#0f172a\">t (s)</text>\n<text x=\"20\" y=\"40\" font-size=\"17\" fill=\"#0f172a\">s (m)</text>\n<g stroke=\"#e2e8f0\" stroke-width=\"1\">\n<line x1=\"170\" y1=\"270\" x2=\"170\" y2=\"40\"/><line x1=\"270\" y1=\"270\" x2=\"270\" y2=\"40\"/><line x1=\"370\" y1=\"270\" x2=\"370\" y2=\"40\"/><line x1=\"470\" y1=\"270\" x2=\"470\" y2=\"40\"/>\n<line x1=\"70\" y1=\"210\" x2=\"560\" y2=\"210\"/><line x1=\"70\" y1=\"150\" x2=\"560\" y2=\"150\"/><line x1=\"70\" y1=\"90\" x2=\"560\" y2=\"90\"/>\n</g>\n<line x1=\"70\" y1=\"270\" x2=\"320\" y2=\"40\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<line x1=\"70\" y1=\"270\" x2=\"560\" y2=\"150\" stroke=\"#2563eb\" stroke-width=\"5\"/>\n<path d=\"M70 270 Q300 265 470 60\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<text x=\"250\" y=\"70\" font-size=\"17\" fill=\"#dc2626\" font-weight=\"bold\">rapide 🚗</text>\n<text x=\"440\" y=\"185\" font-size=\"17\" fill=\"#2563eb\" font-weight=\"bold\">lent 🚲</text>\n<text x=\"420\" y=\"110\" font-size=\"17\" fill=\"#16a34a\" font-weight=\"bold\">accélère 🏃</text>\n</svg>",
   "caption": "Droites = vitesse constante (mouvement uniforme) : la plus raide est la plus rapide. La courbe verte devient de plus en plus raide : le corps accélère."
  },
  {
   "type": "text",
   "title": "3. L'accélération",
   "html": "<p>Quand la vitesse change, il y a une <b>accélération</b>. Elle se calcule comme la variation de vitesse divisée par le temps :</p>\n<p style=\"font-size:1.3em;text-align:center\"><b>a = (v<sub>finale</sub> − v<sub>initiale</sub>) / t</b></p>\n<p>Elle se mesure en <b>m/s²</b> (« mètres par seconde carrée ») : elle dit de combien de m/s la vitesse augmente chaque seconde.</p>\n<ul>\n<li>accélération <b>positive</b> : la vitesse augmente ;</li>\n<li>accélération <b>négative</b> (décélération) : la vitesse diminue, comme quand on freine.</li>\n</ul>\n<p>Exemple : une voiture passe de 0 à 27 m/s (environ 100 km/h) en 9 s. a = 27 / 9 = <b>3 m/s²</b>.</p>\n<p>Un cas très célèbre est la <b>chute libre</b> : près de la surface de la Terre, sans air, tous les corps tombent avec la même accélération <b>g ≈ 9,8 m/s²</b>. C'est ce que comprit <b>Galilée</b> en étudiant des billes qui roulaient sur des plans inclinés (publié en 1638).</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : vitesse et accélération",
   "questions": [
    {
     "type": "num",
     "q": "Un cycliste parcourt 600 m en 120 s. Quelle est sa vitesse moyenne en m/s ?",
     "answer": 5,
     "unit": "m/s",
     "explain": "v = s / t = 600 / 120 = 5 m/s (c'est-à-dire 18 km/h)."
    },
    {
     "type": "num",
     "q": "Combien de km/h font 25 m/s ?",
     "answer": 90,
     "unit": "km/h",
     "explain": "25 × 3,6 = 90 km/h."
    },
    {
     "type": "num",
     "q": "Un scooter passe de 2 m/s à 12 m/s en 5 s. Quelle est son accélération ?",
     "answer": 2,
     "unit": "m/s²",
     "explain": "a = (12 − 2) / 5 = 10 / 5 = 2 m/s²."
    },
    {
     "type": "tf",
     "q": "Dans le mouvement rectiligne uniforme, l'accélération est nulle.",
     "answer": true,
     "explain": "La vitesse ne change pas, donc il n'y a pas d'accélération."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Les forces",
   "html": "<p>Une <b>force</b> est une action capable de <b>changer l'état de mouvement</b> d'un corps (le faire partir, l'arrêter, l'accélérer, le faire tourner) ou de le <b>déformer</b>.</p>\n<p>La force est une grandeur <b>vectorielle</b> : pour la décrire, il faut une <b>intensité</b> (sa puissance), une <b>direction</b>, un <b>sens</b> et un <b>point d'application</b>. Elle se représente avec une flèche.</p>\n<p>Elle se mesure en <b>newtons (N)</b> avec le <b>dynamomètre</b>, un ressort étalonné. 1 N est environ le poids d'une petite pomme (100 g).</p>\n<p>Forces de tous les jours :</p>\n<ul>\n<li><b>poids</b> : P = m · g. Un jeune de 50 kg pèse environ 50 × 9,8 = <b>490 N</b>. Attention : la <b>masse</b> (kg) est la quantité de matière et ne change pas ; le <b>poids</b> (N) est une force et, sur la Lune, il est environ 6 fois plus petit ;</li>\n<li><b>frottement</b> : il s'oppose au mouvement entre deux surfaces (freins, semelles de chaussures) ;</li>\n<li><b>force élastique</b> : celle des ressorts et des élastiques ;</li>\n<li><b>forces à distance</b> : gravité, force magnétique, force électrique.</li>\n</ul>\n<p>Si plusieurs forces agissent sur le même corps, elles s'additionnent comme des vecteurs : leur somme est la <b>résultante</b>. Si la résultante est nulle, le corps est en <b>équilibre</b>.</p>"
  },
  {
   "type": "text",
   "title": "5. Les trois lois de la dynamique de Newton",
   "html": "<p>En <b>1687</b>, <b>Isaac Newton</b> publia les <i>Principia</i>, où il résuma le lien entre forces et mouvement en trois lois.</p>\n<ol>\n<li><b>Principe d'inertie</b> : si la résultante des forces est nulle, un corps reste immobile ou continue à se déplacer en ligne droite à vitesse constante. (C'est pourquoi on met la ceinture en voiture : lors d'un freinage, le corps tend à continuer vers l'avant.)</li>\n<li><b>Principe fondamental</b> : <b>F = m · a</b>. La force produit une accélération proportionnelle à elle-même et inversement proportionnelle à la masse. Pousser un chariot vide est plus facile que d'en pousser un plein.</li>\n<li><b>Principe d'action et de réaction</b> : si un corps A exerce une force sur B, alors B exerce sur A une force égale et opposée. La fusée pousse les gaz vers l'arrière et les gaz poussent la fusée vers l'avant ; quand tu marches, tu pousses le sol vers l'arrière et il te pousse vers l'avant.</li>\n</ol>"
  },
  {
   "type": "svg",
   "title": "Les forces sur une voiture qui roule",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#e0f2fe\"/>\n<rect x=\"0\" y=\"230\" width=\"600\" height=\"70\" fill=\"#64748b\"/>\n<line x1=\"0\" y1=\"265\" x2=\"600\" y2=\"265\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-dasharray=\"30,20\"/>\n<rect x=\"210\" y=\"150\" width=\"190\" height=\"60\" rx=\"14\" fill=\"#ef4444\"/>\n<path d=\"M240 150 L265 110 L345 110 L370 150 Z\" fill=\"#fca5a5\" stroke=\"#b91c1c\" stroke-width=\"3\"/>\n<circle cx=\"250\" cy=\"215\" r=\"20\" fill=\"#1f2937\"/><circle cx=\"360\" cy=\"215\" r=\"20\" fill=\"#1f2937\"/>\n<line x1=\"400\" y1=\"180\" x2=\"520\" y2=\"180\" stroke=\"#16a34a\" stroke-width=\"7\"/>\n<polygon points=\"520,168 545,180 520,192\" fill=\"#16a34a\"/>\n<text x=\"430\" y=\"165\" font-size=\"16\" fill=\"#166534\" font-weight=\"bold\">poussée du moteur</text>\n<line x1=\"210\" y1=\"180\" x2=\"110\" y2=\"180\" stroke=\"#f97316\" stroke-width=\"7\"/>\n<polygon points=\"110,168 85,180 110,192\" fill=\"#f97316\"/>\n<text x=\"60\" y=\"160\" font-size=\"16\" fill=\"#c2410c\" font-weight=\"bold\">frottements + air</text>\n<line x1=\"305\" y1=\"180\" x2=\"305\" y2=\"280\" stroke=\"#7c3aed\" stroke-width=\"6\"/>\n<polygon points=\"293,270 305,295 317,270\" fill=\"#7c3aed\"/>\n<text x=\"315\" y=\"290\" font-size=\"16\" fill=\"#6d28d9\" font-weight=\"bold\">poids P</text>\n<line x1=\"305\" y1=\"150\" x2=\"305\" y2=\"60\" stroke=\"#0284c7\" stroke-width=\"6\"/>\n<polygon points=\"293,65 305,40 317,65\" fill=\"#0284c7\"/>\n<text x=\"315\" y=\"60\" font-size=\"16\" fill=\"#0369a1\" font-weight=\"bold\">réaction de la route</text>\n</svg>",
   "caption": "Si la poussée du moteur est égale aux frottements, la résultante est nulle : la voiture roule à vitesse constante (1ᵉʳ principe). Si la poussée est plus grande, la voiture accélère (2ᵉ principe)."
  },
  {
   "type": "text",
   "title": "6. Les leviers : multiplier la force",
   "html": "<p>Un <b>levier</b> est une machine simple : une barre rigide qui peut tourner autour d'un point fixe, le <b>point d'appui</b> (fulcrum). Sur elle agissent :</p>\n<ul>\n<li>la <b>force motrice P</b> : la force que nous appliquons ;</li>\n<li>la <b>résistance R</b> : la force à vaincre (un poids, un clou…).</li>\n</ul>\n<p>Les distances au point d'appui s'appellent <b>bras de la force motrice b<sub>P</sub></b> et <b>bras de la résistance b<sub>R</sub></b>. Le levier est en équilibre quand :</p>\n<p style=\"font-size:1.3em;text-align:center\"><b>P · b<sub>P</sub> = R · b<sub>R</sub></b></p>\n<p>Plus le bras de la force motrice est long, plus la force nécessaire est petite. Si b<sub>P</sub> &gt; b<sub>R</sub>, le levier est <b>avantageux</b> ; si b<sub>P</sub> &lt; b<sub>R</sub>, il est <b>désavantageux</b> (mais il fait gagner en vitesse et en amplitude de mouvement) ; s'ils sont égaux, il est <b>indifférent</b>.</p>\n<p>Les leviers se classent en trois <b>genres</b> :</p>\n<table>\n<tr><th>Genre</th><th>Position</th><th>Exemples</th></tr>\n<tr><td>1ᵉʳ genre</td><td>Point d'appui <b>au milieu</b> entre P et R</td><td>balançoire à bascule, ciseaux, pied-de-biche, balance à fléau</td></tr>\n<tr><td>2ᵉ genre</td><td>Résistance au milieu (toujours avantageux)</td><td>brouette, casse-noix, décapsuleur</td></tr>\n<tr><td>3ᵉ genre</td><td>Force motrice au milieu (toujours désavantageux)</td><td>pincettes, canne à pêche, avant-bras</td></tr>\n</table>"
  },
  {
   "type": "svg",
   "title": "Les trois genres de leviers",
   "svg": "<svg viewBox=\"0 0 600 330\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"330\" fill=\"#fefce8\"/>\n<text x=\"20\" y=\"30\" font-size=\"17\" font-weight=\"bold\" fill=\"#0f172a\">1ᵉʳ genre : F au milieu</text>\n<rect x=\"60\" y=\"62\" width=\"320\" height=\"10\" fill=\"#92400e\"/>\n<polygon points=\"220,72 205,100 235,100\" fill=\"#475569\"/>\n<text x=\"245\" y=\"98\" font-size=\"15\" fill=\"#475569\">point d'appui</text>\n<rect x=\"60\" y=\"30\" width=\"34\" height=\"32\" fill=\"#64748b\"/><text x=\"66\" y=\"52\" font-size=\"15\" fill=\"#fff\">R</text>\n<line x1=\"370\" y1=\"20\" x2=\"370\" y2=\"58\" stroke=\"#16a34a\" stroke-width=\"5\"/><polygon points=\"362,52 370,64 378,52\" fill=\"#16a34a\"/>\n<text x=\"384\" y=\"40\" font-size=\"15\" fill=\"#166534\">P</text>\n<text x=\"420\" y=\"70\" font-size=\"15\" fill=\"#0f172a\">✂️ ciseaux, balançoire</text>\n<text x=\"20\" y=\"135\" font-size=\"17\" font-weight=\"bold\" fill=\"#0f172a\">2ᵉ genre : R au milieu</text>\n<rect x=\"60\" y=\"167\" width=\"320\" height=\"10\" fill=\"#92400e\"/>\n<polygon points=\"60,177 45,205 75,205\" fill=\"#475569\"/>\n<rect x=\"160\" y=\"135\" width=\"34\" height=\"32\" fill=\"#64748b\"/><text x=\"166\" y=\"157\" font-size=\"15\" fill=\"#fff\">R</text>\n<line x1=\"370\" y1=\"200\" x2=\"370\" y2=\"182\" stroke=\"#16a34a\" stroke-width=\"5\"/><polygon points=\"362,186 370,174 378,186\" fill=\"#16a34a\"/>\n<text x=\"384\" y=\"200\" font-size=\"15\" fill=\"#166534\">P</text>\n<text x=\"420\" y=\"175\" font-size=\"15\" fill=\"#0f172a\">🛒 brouette, casse-noix</text>\n<text x=\"20\" y=\"240\" font-size=\"17\" font-weight=\"bold\" fill=\"#0f172a\">3ᵉ genre : P au milieu</text>\n<rect x=\"60\" y=\"272\" width=\"320\" height=\"10\" fill=\"#92400e\"/>\n<polygon points=\"60,282 45,310 75,310\" fill=\"#475569\"/>\n<rect x=\"346\" y=\"240\" width=\"34\" height=\"32\" fill=\"#64748b\"/><text x=\"352\" y=\"262\" font-size=\"15\" fill=\"#fff\">R</text>\n<line x1=\"150\" y1=\"315\" x2=\"150\" y2=\"287\" stroke=\"#16a34a\" stroke-width=\"5\"/><polygon points=\"142,291 150,279 158,291\" fill=\"#16a34a\"/>\n<text x=\"164\" y=\"315\" font-size=\"15\" fill=\"#166534\">P</text>\n<text x=\"420\" y=\"280\" font-size=\"15\" fill=\"#0f172a\">💪 avant-bras, pincettes</text>\n</svg>",
   "caption": "Pour reconnaître le genre, regarde ce qui est au milieu : point d'appui (1ᵉʳ), résistance (2ᵉ) ou force motrice (3ᵉ)."
  },
  {
   "type": "example",
   "title": "Exemple pratique : la balançoire à bascule",
   "html": "<p>Marco pèse <b>400 N</b> et s'assied à <b>1,5 m</b> du point d'appui. Sa petite sœur pèse <b>200 N</b>. À quelle distance doit-elle s'asseoir pour être en équilibre ?</p>\n<p>P · b<sub>P</sub> = R · b<sub>R</sub> → 200 · x = 400 · 1,5 → 200 · x = 600 → <b>x = 3 m</b>.</p>\n<p>Celui qui pèse la moitié doit être au double de la distance : force et bras sont <b>inversement proportionnels</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : la distance de freinage",
   "html": "<p>Une voiture roule à <b>90 km/h</b> = 90 : 3,6 = <b>25 m/s</b>. Le conducteur voit un obstacle et met environ <b>1 seconde</b> à réagir (temps de réaction) : pendant cette seconde, la voiture parcourt encore 25 m sans freiner !</p>\n<p>Si le conducteur regarde son téléphone pendant 3 secondes, il parcourt 25 × 3 = <b>75 m « à l'aveugle »</b> : presque un terrain de football. Ensuite, avec des freins qui donnent une décélération d'environ 7 m/s², il faut encore environ 45 m pour s'arrêter. Voilà pourquoi la distance de sécurité et l'attention sauvent des vies.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre forces et mouvement",
   "intro": "Les formules ne suffisent pas ? Essaie avec une analogie, une expérience à la maison ou la 3D.",
   "tabs": [
    {
     "label": "🛒 L'analogie du chariot",
     "html": "<p>Pense au <b>chariot de supermarché</b> :</p>\n<ul>\n<li>Vide, avec une petite poussée, il part tout de suite : <b>peu de masse → grande accélération</b>.</li>\n<li>Plein de bouteilles, tu dois pousser beaucoup plus pour le faire partir aussi vite : <b>plus de masse → il faut plus de force</b>. C'est F = m · a.</li>\n<li>Une fois lancé, si tu le lâches, il continue tout seul un moment (<b>inertie</b>) jusqu'à ce que le frottement des roues l'arrête.</li>\n<li>Pour tourner, tu dois le pousser de côté : même changer de direction demande une force.</li>\n</ul>"
    },
    {
     "label": "🧪 L'expérience de Galilée à la maison",
     "html": "<p>Galilée voulait comprendre comment tombent les corps, mais la chute est trop rapide pour être mesurée. Alors il la « ralentit » avec un <b>plan incliné</b>.</p>\n<ol>\n<li>Appuie une planche ou un grand livre incliné sur une pile de livres.</li>\n<li>Fais rouler une bille et marque avec du ruban adhésif où elle se trouve après 1, 2, 3 « tic » d'un métronome (ou en tapant des mains en rythme).</li>\n<li>Tu découvriras que les distances parcourues croissent comme <b>1, 4, 9…</b>, c'est-à-dire comme les carrés des temps : la bille <b>accélère</b> de façon constante.</li>\n</ol>\n<p>Galilée utilisa comme horloge un seau d'eau qui gouttait : il pesait l'eau écoulée pour mesurer le temps !</p>"
    },
    {
     "label": "🇯🇵 Le triangle magique (méthode utilisée en Asie)",
     "html": "<p>Dans beaucoup d'écoles asiatiques et anglo-saxonnes, on utilise un <b>triangle</b> pour retenir les formules inverses : cache avec le doigt la grandeur que tu cherches et lis les deux autres.</p>\n<ul>\n<li>cache <b>s</b> → il reste v · t (elles sont côte à côte : on multiplie) ;</li>\n<li>cache <b>v</b> → il reste s / t (l'une au-dessus de l'autre : on divise) ;</li>\n<li>cache <b>t</b> → il reste s / v.</li>\n</ul>\n<p>Cela marche aussi pour F = m · a : F en haut, m et a en bas.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0fdf4\"/>\n<polygon points=\"150,20 40,230 260,230\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"4\"/>\n<line x1=\"85\" y1=\"140\" x2=\"215\" y2=\"140\" stroke=\"#15803d\" stroke-width=\"4\"/>\n<line x1=\"150\" y1=\"140\" x2=\"150\" y2=\"230\" stroke=\"#15803d\" stroke-width=\"4\"/>\n<text x=\"150\" y=\"115\" font-size=\"38\" text-anchor=\"middle\" fill=\"#14532d\" font-weight=\"bold\">s</text>\n<text x=\"108\" y=\"200\" font-size=\"34\" text-anchor=\"middle\" fill=\"#14532d\" font-weight=\"bold\">v</text>\n<text x=\"192\" y=\"200\" font-size=\"34\" text-anchor=\"middle\" fill=\"#14532d\" font-weight=\"bold\">t</text>\n<polygon points=\"450,20 340,230 560,230\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"4\"/>\n<line x1=\"385\" y1=\"140\" x2=\"515\" y2=\"140\" stroke=\"#b45309\" stroke-width=\"4\"/>\n<line x1=\"450\" y1=\"140\" x2=\"450\" y2=\"230\" stroke=\"#b45309\" stroke-width=\"4\"/>\n<text x=\"450\" y=\"115\" font-size=\"38\" text-anchor=\"middle\" fill=\"#78350f\" font-weight=\"bold\">F</text>\n<text x=\"408\" y=\"200\" font-size=\"34\" text-anchor=\"middle\" fill=\"#78350f\" font-weight=\"bold\">m</text>\n<text x=\"492\" y=\"200\" font-size=\"34\" text-anchor=\"middle\" fill=\"#78350f\" font-weight=\"bold\">a</text>\n</svg>"
    },
    {
     "label": "🪐 La gravité en 3D",
     "html": "<p>Newton comprit que la force qui fait tomber une pomme est la <b>même</b> que celle qui tient la Lune autour de la Terre et les planètes autour du Soleil : la <b>gravitation universelle</b>. Les planètes « tombent » continuellement vers le Soleil, mais elles ont aussi une vitesse latérale : ainsi, au lieu de s'écraser, elles tournent en orbite. Plus une planète est proche du Soleil, plus la force est intense et plus son orbite est rapide. Observe-le dans le modèle.</p>",
     "scene": "solar",
     "options": {
      "labels": true
     }
    }
   ]
  },
  {
   "type": "widget",
   "title": "Reconnais le genre du levier",
   "widget": "classify",
   "options": {
    "groups": [
     "1ᵉʳ genre (point d'appui au milieu)",
     "2ᵉ genre (résistance au milieu)",
     "3ᵉ genre (force motrice au milieu)"
    ],
    "items": [
     [
      "✂️ Ciseaux",
      0
     ],
     [
      "🎢 Balançoire à bascule",
      0
     ],
     [
      "🔧 Pied-de-biche",
      0
     ],
     [
      "🛒 Brouette",
      1
     ],
     [
      "🌰 Casse-noix",
      1
     ],
     [
      "🍾 Décapsuleur",
      1
     ],
     [
      "🪡 Pincettes",
      2
     ],
     [
      "🎣 Canne à pêche",
      2
     ],
     [
      "💪 Avant-bras qui soulève un poids",
      2
     ]
    ]
   },
   "caption": "Trouve le point d'appui, l'endroit où tu pousses (force motrice) et ce qu'il faut vaincre (résistance)."
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? « Donnez-moi un point d'appui… »",
   "html": "<p>Le savant grec <b>Archimède</b> de Syracuse (vers 287–212 av. J.-C.) étudia le premier de façon mathématique la loi des leviers. Selon la tradition, il dit : <i>« Donnez-moi un point d'appui et je soulèverai le monde »</i>. En théorie, il avait raison : avec un bras assez long, n'importe quelle force suffit… mais pour soulever la Terre d'1 cm, il aurait dû déplacer l'extrémité du levier sur une distance énorme, beaucoup plus grande que l'Univers visible !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le marteau et la plume sur la Lune",
   "html": "<p>En <b>1971</b>, pendant la mission <b>Apollo 15</b>, l'astronaute <b>David Scott</b> laissa tomber sur la Lune, au même moment, un marteau et une plume de faucon. Sans air pour la freiner, la plume toucha le sol <b>en même temps</b> que le marteau : exactement comme l'avait prévu Galilée plus de 300 ans avant. Sur la Lune, g vaut environ 1,6 m/s², environ 1/6 de celui de la Terre.</p>"
  },
  {
   "type": "widget",
   "title": "Ligne du temps : qui a compris le mouvement",
   "widget": "timeline",
   "options": {
    "unit": "ans",
    "events": [
     {
      "year": -340,
      "label": "Aristote : « les corps lourds tombent plus vite » (faux !)",
      "icon": "🏛️"
     },
     {
      "year": -250,
      "label": "Archimède : la loi du levier",
      "icon": "⚖️"
     },
     {
      "year": 1638,
      "label": "Galilée : chute des corps et inertie",
      "icon": "🔭"
     },
     {
      "year": 1687,
      "label": "Newton : les trois lois et la gravitation",
      "icon": "🍎"
     },
     {
      "year": 1905,
      "label": "Einstein : relativité restreinte",
      "icon": "⚡"
     },
     {
      "year": 1971,
      "label": "Marteau et plume sur la Lune",
      "icon": "🌕"
     }
    ]
   },
   "caption": "Pendant presque 2000 ans, on crut Aristote : ce sont les expériences qui corrigèrent l'erreur."
  },
  {
   "type": "conceptMap",
   "title": "Carte des forces et du mouvement : touche les nœuds et découvre le pourquoi",
   "nodes": [
    {
     "id": "rif",
     "label": "Référentiel",
     "x": 15,
     "y": 8,
     "color": "#64748b",
     "html": "Ce par rapport à quoi nous mesurons le mouvement.",
     "why": "Galilée, dans le Dialogue (1632), imagina un navire qui avance en douceur : celui qui est sous le pont ne peut comprendre par aucune expérience si le navire bouge. De là l'idée que le mouvement est relatif, base de la relativité d'Einstein."
    },
    {
     "id": "vel",
     "label": "Vitesse v = s/t",
     "x": 40,
     "y": 22,
     "color": "#2563eb",
     "html": "Distance parcourue dans l'unité de temps (m/s, km/h).",
     "why": "Il faut un moyen de comparer des mouvements différents : en divisant la distance par le temps, on obtient ce qu'on parcourt en 1 seconde. Avec des horloges précises (le pendule, étudié par Galilée et construit par Huygens en 1656), la vitesse put être bien mesurée."
    },
    {
     "id": "acc",
     "label": "Accélération",
     "x": 65,
     "y": 22,
     "color": "#7c3aed",
     "html": "Variation de la vitesse dans le temps (m/s²).",
     "why": "Galilée découvrit que, dans la chute, la vitesse augmente toujours de la même quantité chaque seconde : une accélération constante. Pour la mesurer, il utilisa des plans inclinés et des horloges à eau."
    },
    {
     "id": "forza",
     "label": "Force (newton)",
     "x": 50,
     "y": 48,
     "color": "#dc2626",
     "html": "Action qui change le mouvement ou déforme un corps ; elle se mesure en N.",
     "why": "L'unité porte le nom d'Isaac Newton. 1 N est la force qui donne à 1 kg une accélération de 1 m/s². Avant Newton, on pensait (avec Aristote) qu'il fallait une force même seulement pour maintenir un corps en mouvement."
    },
    {
     "id": "n1",
     "label": "1ᵉʳ principe : inertie",
     "x": 18,
     "y": 50,
     "color": "#0891b2",
     "html": "Sans forces, un corps reste immobile ou se déplace d'un mouvement rectiligne uniforme.",
     "why": "Galilée remarqua qu'une bille sur un plan lisse ralentit de moins en moins quand il y a moins de frottement : il imagina que, sans frottement, elle irait pour toujours. Newton transforma cette intuition en premier principe (1687)."
    },
    {
     "id": "n2",
     "label": "2ᵉ principe : F = m·a",
     "x": 82,
     "y": 50,
     "color": "#ea580c",
     "html": "La force est égale à la masse fois l'accélération.",
     "why": "Il relie les causes (forces) aux effets (accélérations). La masse mesure l'inertie : combien un corps « s'oppose » à un changement de vitesse."
    },
    {
     "id": "n3",
     "label": "3ᵉ principe : action et réaction",
     "x": 82,
     "y": 78,
     "color": "#16a34a",
     "html": "Les forces viennent toujours par paires, égales et opposées.",
     "why": "Newton le déduisit en observant des chocs entre corps : personne ne peut pousser sans être poussé. C'est le principe sur lequel fonctionnent les fusées, les nageurs et même notre marche."
    },
    {
     "id": "peso",
     "label": "Poids et gravité",
     "x": 50,
     "y": 78,
     "color": "#a16207",
     "html": "P = m · g, avec g ≈ 9,8 m/s² sur la Terre.",
     "why": "Newton comprit que la force qui fait tomber les corps est la même que celle qui maintient la Lune en orbite : la gravitation universelle. Le poids dépend de la planète, la masse non."
    },
    {
     "id": "leva",
     "label": "Leviers",
     "x": 18,
     "y": 85,
     "color": "#92400e",
     "html": "Machines simples : P · bP = R · bR.",
     "why": "Archimède (IIIᵉ siècle av. J.-C.) démontra la loi en partant de la symétrie : des poids égaux à des distances égales sont en équilibre. Un levier ne crée pas d'énergie : on économise de la force mais on doit déplacer la force motrice sur un trajet plus long."
    }
   ],
   "edges": [
    [
     "rif",
     "vel",
     "se mesure par rapport à"
    ],
    [
     "vel",
     "acc",
     "s'il change, il y a"
    ],
    [
     "forza",
     "acc",
     "produit"
    ],
    [
     "n1",
     "forza",
     "sans"
    ],
    [
     "forza",
     "n2",
     ""
    ],
    [
     "forza",
     "n3",
     ""
    ],
    [
     "forza",
     "peso",
     "exemple :"
    ],
    [
     "forza",
     "leva",
     "multipliée par les"
    ],
    [
     "n2",
     "acc",
     "calcule"
    ]
   ]
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li><b>v = s / t</b> (m/s) ; km/h ÷ 3,6 = m/s.</li>\n<li><b>a = Δv / t</b> (m/s²) ; en chute libre g ≈ 9,8 m/s².</li>\n<li><b>Force</b> : vecteur, se mesure en newtons avec le dynamomètre. Poids P = m · g.</li>\n<li>Newton : <b>inertie</b>, <b>F = m · a</b>, <b>action et réaction</b>.</li>\n<li><b>Leviers</b> : P · b<sub>P</sub> = R · b<sub>R</sub> ; 1ᵉʳ genre point d'appui au milieu, 2ᵉ résistance au milieu, 3ᵉ force motrice au milieu.</li>\n</ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : forces et leviers",
   "questions": [
    {
     "type": "num",
     "q": "Quelle force faut-il pour donner à un chariot de 20 kg une accélération de 1,5 m/s² ?",
     "answer": 30,
     "unit": "N",
     "explain": "F = m · a = 20 × 1,5 = 30 N."
    },
    {
     "type": "mc",
     "q": "La brouette est un levier de…",
     "options": [
      "1ᵉʳ genre",
      "2ᵉ genre",
      "3ᵉ genre"
     ],
     "answer": 1,
     "explain": "Le point d'appui est la roue, la résistance (la charge) est au milieu, la force motrice aux poignées."
    },
    {
     "type": "num",
     "q": "Un levier a bP = 2 m et bR = 0,5 m. Avec quelle force motrice puis-je soulever R = 800 N ?",
     "answer": 200,
     "unit": "N",
     "explain": "P · 2 = 800 · 0,5 = 400 → P = 200 N."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Référentiel",
   "d": "Corps ou point considéré comme immobile par rapport auquel on décrit un mouvement."
  },
  {
   "t": "Trajectoire",
   "d": "Ligne parcourue par un corps en mouvement."
  },
  {
   "t": "Vitesse",
   "d": "Rapport entre la distance parcourue et le temps mis (m/s)."
  },
  {
   "t": "Accélération",
   "d": "Rapport entre la variation de vitesse et le temps (m/s²)."
  },
  {
   "t": "Force",
   "d": "Action qui modifie le mouvement ou la forme d'un corps ; elle se mesure en newtons (N)."
  },
  {
   "t": "Dynamomètre",
   "d": "Instrument à ressort pour mesurer les forces."
  },
  {
   "t": "Masse",
   "d": "Quantité de matière d'un corps (kg) ; elle mesure son inertie."
  },
  {
   "t": "Poids",
   "d": "Force avec laquelle une planète attire un corps : P = m · g."
  },
  {
   "t": "Inertie",
   "d": "Tendance d'un corps à conserver son état de repos ou de mouvement uniforme."
  },
  {
   "t": "Frottement",
   "d": "Force qui s'oppose au glissement entre deux surfaces."
  },
  {
   "t": "Point d'appui",
   "d": "Point fixe autour duquel tourne un levier."
  },
  {
   "t": "Bras",
   "d": "Distance entre le point d'appui et le point où agit une force."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Un train parcourt 360 km en 2 heures. Quelle est sa vitesse moyenne en km/h ?",
    "answer": 180,
    "unit": "km/h",
    "explain": "v = 360 / 2 = 180 km/h."
   },
   {
    "type": "num",
    "q": "Convertis 72 km/h en m/s.",
    "answer": 20,
    "unit": "m/s",
    "explain": "72 : 3,6 = 20 m/s."
   },
   {
    "type": "num",
    "q": "Un coureur part de l'arrêt et atteint 8 m/s en 4 s. Quelle est son accélération moyenne ?",
    "answer": 2,
    "unit": "m/s²",
    "explain": "a = (8 − 0) / 4 = 2 m/s²."
   },
   {
    "type": "mc",
    "q": "Que mesure le dynamomètre ?",
    "options": [
     "La masse",
     "La vitesse",
     "Les forces",
     "Le temps"
    ],
    "answer": 2,
    "explain": "Le dynamomètre mesure les forces en newtons."
   },
   {
    "type": "tf",
    "q": "Sur la Lune, la masse d'un astronaute est 6 fois plus petite que sur la Terre.",
    "answer": false,
    "explain": "La masse ne change pas ; c'est le poids qui est environ 6 fois plus petit."
   },
   {
    "type": "mc",
    "q": "Quand un autobus freine brusquement, les passagers sont poussés vers l'avant. Quel principe l'explique ?",
    "options": [
     "Principe d'inertie",
     "Action et réaction",
     "Loi des leviers"
    ],
    "answer": 0,
    "explain": "Le corps tend à conserver la vitesse qu'il avait : c'est l'inertie (1ᵉʳ principe)."
   },
   {
    "type": "mc",
    "q": "Une fusée monte parce que…",
    "options": [
     "l'air la pousse vers le haut",
     "elle pousse les gaz vers le bas et les gaz la poussent vers le haut",
     "elle est plus légère que l'air"
    ],
    "answer": 1,
    "explain": "C'est le troisième principe : action et réaction. Cela marche aussi dans le vide."
   },
   {
    "type": "num",
    "q": "Quel est le poids sur la Terre (g = 10 m/s², arrondi) d'un sac à dos de 6 kg ?",
    "answer": 60,
    "unit": "N",
    "explain": "P = m · g = 6 × 10 = 60 N."
   },
   {
    "type": "mc",
    "q": "Dans quel levier la force motrice se trouve-t-elle entre le point d'appui et la résistance ?",
    "options": [
     "1ᵉʳ genre",
     "2ᵉ genre",
     "3ᵉ genre"
    ],
    "answer": 2,
    "explain": "Dans le levier du 3ᵉ genre (pincettes, avant-bras), la force motrice est au milieu : il est toujours désavantageux."
   },
   {
    "type": "num",
    "q": "Sur une balançoire à bascule, un enfant de 300 N est assis à 2 m du point d'appui. À combien de mètres doit s'asseoir un adulte de 600 N pour l'équilibre ?",
    "answer": 1,
    "unit": "m",
    "explain": "600 · x = 300 · 2 = 600 → x = 1 m."
   },
   {
    "type": "text",
    "q": "Quel savant a publié en 1687 les trois principes de la dynamique ?",
    "answer": [
     "newton",
     "isaac newton"
    ],
    "explain": "Isaac Newton, dans les Principia."
   },
   {
    "type": "order",
    "q": "Mets ces savants dans l'ordre chronologique.",
    "items": [
     "Aristote",
     "Archimède",
     "Galilée",
     "Isaac Newton",
     "Albert Einstein"
    ],
    "explain": "IVᵉ siècle av. J.-C., IIIᵉ siècle av. J.-C., 1564–1642, 1643–1727, 1879–1955."
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
