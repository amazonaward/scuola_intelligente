TOPIC('fr', {
 "id": "m1-geo-strumenti",
 "title": "Les outils de la géographie",
 "intro": "Le géographe étudie la Terre et le rapport entre l'homme et le territoire. Pour cela, il utilise des <b>outils</b> : des cartes de nombreux types, l'<b>échelle</b> pour mesurer les distances, l'orientation, les coordonnées, les photographies par satellite, le GPS, puis des <b>tableaux et graphiques</b> pour lire les données. Dans cette leçon, tu apprends à tous les utiliser.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "1. Qu'est-ce qu'une carte géographique",
   "html": "<p>Une <b>carte géographique</b> est une représentation <b>réduite</b>, <b>approximative</b> et <b>symbolique</b> d'une partie de la surface terrestre, vue d'en haut :</p><ul><li><b>réduite</b> : tout est rapetissé selon une <b>échelle</b> ;</li><li><b>approximative</b> : la Terre est (presque) une sphère et on ne peut pas l'« aplatir » sur une feuille sans la déformer ;</li><li><b>symbolique</b> : elle utilise des couleurs, des lignes et des symboles expliqués dans la <b>légende</b>.</li></ul><p>Toute carte bien faite comporte : un <b>titre</b>, une <b>légende</b>, une <b>échelle</b> (numérique ou graphique) et l'indication du <b>Nord</b> (rose des vents ou flèche).</p>"
  },
  {
   "type": "widget",
   "title": "Les éléments d'une carte",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 340\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"340\" fill=\"#f8fafc\"/><rect x=\"20\" y=\"20\" width=\"560\" height=\"300\" fill=\"#bfdbfe\" stroke=\"#334155\" stroke-width=\"3\"/><text x=\"300\" y=\"50\" font-size=\"20\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\">Île du Soleil – carte physique</text><path d=\"M120 110 Q200 70 300 100 Q400 80 430 150 Q460 240 330 270 Q200 290 150 230 Q90 180 120 110 Z\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"2\"/><path d=\"M230 140 Q290 120 330 160 Q320 210 260 210 Q210 190 230 140 Z\" fill=\"#fde047\"/><path d=\"M265 160 Q290 150 305 175 Q290 195 268 188 Z\" fill=\"#a16207\"/><polygon points=\"285,155 278,172 292,172\" fill=\"#ffffff\"/><path d=\"M300 190 Q330 230 380 255\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\"/><circle cx=\"380\" cy=\"255\" r=\"7\" fill=\"#dc2626\"/><text x=\"392\" y=\"260\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#7f1d1d\">Portosole</text><rect x=\"455\" y=\"200\" width=\"115\" height=\"110\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"1.5\"/><text x=\"465\" y=\"218\" font-size=\"13\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#0f172a\">Légende</text><rect x=\"465\" y=\"226\" width=\"14\" height=\"10\" fill=\"#86efac\"/><text x=\"485\" y=\"235\" font-size=\"12\" font-family=\"sans-serif\" fill=\"#0f172a\">plaine</text><rect x=\"465\" y=\"244\" width=\"14\" height=\"10\" fill=\"#fde047\"/><text x=\"485\" y=\"253\" font-size=\"12\" font-family=\"sans-serif\" fill=\"#0f172a\">colline</text><rect x=\"465\" y=\"262\" width=\"14\" height=\"10\" fill=\"#a16207\"/><text x=\"485\" y=\"271\" font-size=\"12\" font-family=\"sans-serif\" fill=\"#0f172a\">montagne</text><circle cx=\"472\" cy=\"290\" r=\"5\" fill=\"#dc2626\"/><text x=\"485\" y=\"294\" font-size=\"12\" font-family=\"sans-serif\" fill=\"#0f172a\">ville</text><line x1=\"40\" y1=\"300\" x2=\"140\" y2=\"300\" stroke=\"#0f172a\" stroke-width=\"4\"/><line x1=\"90\" y1=\"294\" x2=\"90\" y2=\"306\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"40\" y=\"290\" font-size=\"12\" font-family=\"sans-serif\" fill=\"#0f172a\">0</text><text x=\"120\" y=\"290\" font-size=\"12\" font-family=\"sans-serif\" fill=\"#0f172a\">10 km</text><polygon points=\"520,70 510,110 520,100 530,110\" fill=\"#dc2626\"/><text x=\"520\" y=\"64\" font-size=\"16\" font-family=\"sans-serif\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#dc2626\">N</text></svg>",
    "spots": [
     {
      "x": 300,
      "y": 45,
      "label": "Titre"
     },
     {
      "x": 510,
      "y": 250,
      "label": "Légende"
     },
     {
      "x": 90,
      "y": 300,
      "label": "Échelle graphique"
     },
     {
      "x": 520,
      "y": 92,
      "label": "Indication du Nord"
     },
     {
      "x": 285,
      "y": 170,
      "label": "Montagne"
     },
     {
      "x": 345,
      "y": 225,
      "label": "Fleuve"
     },
     {
      "x": 380,
      "y": 255,
      "label": "Ville"
     }
    ]
   },
   "caption": "Touche un point et choisis la bonne étiquette."
  },
  {
   "type": "text",
   "title": "2. L'échelle : de combien a-t-on rapetissé ?",
   "html": "<p>L'<b>échelle numérique</b> s'écrit par exemple <b>1 : 100 000</b> et se lit « un pour cent mille » : <b>1 cm sur la carte</b> correspond à <b>100 000 cm dans la réalité</b>, soit 1 000 m = <b>1 km</b>.</p><p>Pour trouver une distance réelle : <b>distance sur la carte × dénominateur de l'échelle</b>, puis on convertit en km.</p><ul><li><b>Grande échelle</b> (petit dénominateur, jusqu'à 1 : 10 000) : plan d'une ville, plan du quartier, beaucoup de détails.</li><li><b>Échelle moyenne</b> (de 1 : 10 000 à 1 : 1 000 000) : cartes topographiques et régionales.</li><li><b>Petite échelle</b> (au-delà de 1 : 1 000 000) : cartes d'États, de continents, planisphère. Peu de détails, grand territoire.</li></ul><p>Attention au piège : <b>plus le nombre après les deux points est grand, plus l'échelle est petite !</b></p><p>L'<b>échelle graphique</b> est un segment divisé en parties avec l'indication des km : pratique parce qu'elle reste juste même si la carte est agrandie ou réduite (par exemple avec la photocopieuse ou à l'écran).</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : de la maison à l'école",
   "html": "<p>Sur une carte à l'échelle <b>1 : 25 000</b>, la distance entre ta maison et l'école mesure <b>6 cm</b>.</p><ol><li>6 × 25 000 = 150 000 cm</li><li>150 000 cm = 1 500 m (divise par 100)</li><li>1 500 m = <b>1,5 km</b> (divise par 1 000)</li></ol><p>Et dans l'autre sens : deux villes sont distantes de 80 km. Sur une carte au 1 : 1 000 000 (où 1 cm = 10 km), combien de cm les séparent ? 80 : 10 = <b>8 cm</b>.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz 1",
   "questions": [
    {
     "type": "num",
     "q": "Sur une carte au 1 : 100 000, deux villages sont distants de 7 cm. Combien de km les séparent dans la réalité ?",
     "answer": 7,
     "tol": 0,
     "unit": "km",
     "explain": "7 × 100 000 = 700 000 cm = 7 000 m = 7 km."
    },
    {
     "type": "mc",
     "q": "Quelle échelle est la plus grande (montre plus de détails) ?",
     "options": [
      "1 : 5.000",
      "1 : 250.000",
      "1 : 10.000.000"
     ],
     "answer": 0,
     "explain": "Le plus petit dénominateur indique la plus grande échelle."
    },
    {
     "type": "tf",
     "q": "L'échelle graphique reste correcte même si la carte est agrandie.",
     "answer": true,
     "explain": "Le segment s'agrandit avec la carte, donc les proportions restent justes."
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Beaucoup de types de cartes",
   "html": "<ul><li><b>Plan</b> (jusqu'à 1 : 10 000) : villes, bâtiments, quartiers.</li><li><b>Carte topographique</b> (1 : 10 000–1 : 150 000) : territoire détaillé, sentiers, courbes de niveau. En Italie, elles sont préparées par l'<b>Istituto Geografico Militare</b> de Florence.</li><li><b>Carte chorographique</b> (1 : 150 000–1 : 1 000 000) : régions.</li><li><b>Carte géographique</b> (au-delà de 1 : 1 000 000) : États, continents, planisphère.</li></ul><p>Selon le <b>contenu</b> :</p><ul><li><b>physique</b> : reliefs, plaines, fleuves, lacs, mers, avec des couleurs différentes pour l'altitude (vert, jaune, marron, blanc) et pour la profondeur (bleu plus foncé) ;</li><li><b>politique</b> : frontières, États, régions, villes, chacun d'une couleur ;</li><li><b>thématique</b> : un seul sujet (climat, population, langues, tourisme, risque sismique…).</li></ul>"
  },
  {
   "type": "svg",
   "title": "Les courbes de niveau",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/><text x=\"150\" y=\"28\" font-size=\"17\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\">Vue de côté</text><text x=\"450\" y=\"28\" font-size=\"17\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\">Vue d'en haut (carte)</text><path d=\"M20 280 Q90 270 120 200 Q150 90 175 90 Q200 100 230 200 Q250 260 280 280 Z\" fill=\"#a3a3a3\"/><g stroke=\"#b45309\" stroke-width=\"2\" stroke-dasharray=\"5 4\"><line x1=\"20\" y1=\"240\" x2=\"280\" y2=\"240\"/><line x1=\"20\" y1=\"190\" x2=\"280\" y2=\"190\"/><line x1=\"20\" y1=\"140\" x2=\"280\" y2=\"140\"/></g><g font-family=\"sans-serif\" font-size=\"13\" fill=\"#7c2d12\"><text x=\"22\" y=\"236\">200 m</text><text x=\"22\" y=\"186\">400 m</text><text x=\"22\" y=\"136\">600 m</text></g><line x1=\"300\" y1=\"40\" x2=\"300\" y2=\"300\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><ellipse cx=\"450\" cy=\"175\" rx=\"125\" ry=\"110\" fill=\"#bbf7d0\" stroke=\"#b45309\" stroke-width=\"2.5\"/><ellipse cx=\"458\" cy=\"170\" rx=\"85\" ry=\"72\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2.5\"/><ellipse cx=\"468\" cy=\"162\" rx=\"42\" ry=\"34\" fill=\"#fdba74\" stroke=\"#b45309\" stroke-width=\"2.5\"/><polygon points=\"472,150 464,166 480,166\" fill=\"#7c2d12\"/><g font-family=\"sans-serif\" font-size=\"13\" fill=\"#7c2d12\"><text x=\"330\" y=\"180\">200</text><text x=\"378\" y=\"175\">400</text><text x=\"430\" y=\"200\">600</text></g><text x=\"450\" y=\"306\" font-size=\"14\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#0f172a\">courbes rapprochées = pente raide</text></svg>",
   "caption": "Les courbes de niveau (isohypses) relient les points de même altitude. Là où elles sont serrées, la pente est raide ; là où elles sont éloignées, elle est douce."
  },
  {
   "type": "text",
   "title": "4. S'orienter",
   "html": "<p>S'orienter signifie trouver les <b>points cardinaux</b> : <b>Nord</b> (ou septentrion), <b>Sud</b> (midi), <b>Est</b> (orient ou levant), <b>Ouest</b> (occident ou couchant).</p><ul><li><b>Avec le Soleil</b> : il se lève à l'Est, se couche à l'Ouest ; à midi, en Europe, il est au Sud.</li><li><b>Avec l'étoile Polaire</b> : la nuit, elle indique le Nord (on la trouve en prolongeant d'environ cinq fois le côté arrière de la Grande Ourse).</li><li><b>Avec la boussole</b> : l'aiguille magnétique pointe vers le <b>Nord magnétique</b>, proche (mais pas identique) du pôle Nord géographique.</li><li><b>Avec le GPS</b> : le smartphone reçoit les signaux d'au moins 4 satellites et calcule sa position avec une précision de quelques mètres.</li></ul><p>Pour repérer un point exact sur la Terre, on utilise les <b>coordonnées géographiques</b> : <b>latitude</b> et <b>longitude</b> (tu les étudieras dans la leçon qui leur est consacrée).</p>"
  },
  {
   "type": "text",
   "title": "5. Les projections : aplatir une orange",
   "html": "<p>Essaie d'éplucher une orange et d'étaler la peau sur la table : elle se déchire ou se déforme. La même chose arrive quand on dessine la Terre sur une feuille. Les cartographes utilisent les <b>projections</b>, des méthodes mathématiques qui choisissent ce qu'il faut conserver :</p><ul><li><b>Projection de Mercator</b> (1569) : elle conserve les <b>angles</b> et les directions, très utile pour naviguer ; mais elle <b>agrandit</b> énormément les terres proches des pôles. Le Groenland semble aussi grand que l'Afrique, alors qu'en réalité l'Afrique est environ <b>14 fois</b> plus grande !</li><li><b>Projection de Peters</b> (Gall-Peters) : elle conserve les <b>aires</b> (les surfaces sont dans les bonnes proportions), mais déforme les formes.</li><li>Beaucoup d'atlas utilisent des projections de compromis (comme celle de Robinson ou de Winkel).</li></ul><p>La seule représentation sans déformations est le <b>globe</b>.</p>"
  },
  {
   "type": "3d",
   "title": "Le globe : la seule carte sans déformations",
   "scene": "globe",
   "options": {
    "points": [
     {
      "lat": 72,
      "lon": -40,
      "label": "Groenland (2,2 millions de km²)",
      "color": "#0ea5e9"
     },
     {
      "lat": 5,
      "lon": 20,
      "label": "Afrique (30 millions de km²)",
      "color": "#f97316"
     },
     {
      "lat": 42,
      "lon": 12.5,
      "label": "Italie",
      "color": "#16a34a"
     },
     {
      "lat": 90,
      "lon": 0,
      "label": "Pôle Nord",
      "color": "#7c3aed"
     },
     {
      "lat": 0,
      "lon": 0,
      "label": "Croisement Équateur – Greenwich",
      "color": "#dc2626"
     }
    ]
   },
   "caption": "Fais tourner le globe et compare le Groenland avec l'Afrique : sur le globe, les proportions sont vraies. Sur beaucoup de cartes plates (Mercator), le Groenland semble aussi grand que l'Afrique."
  },
  {
   "type": "curiosity",
   "title": "Mercator et le mot « Atlas »",
   "html": "<p><b>Gérard Mercator</b> (Gerhard Kremer, 1512–1594), flamand, fut aussi le premier à utiliser le mot <b>« Atlas »</b> pour un recueil de cartes, en l'honneur du mythique roi Atlas. Sa projection est encore utilisée aujourd'hui par de nombreuses cartes en ligne (comme celles de navigation routière) dans une version modifiée appelée « Web Mercator ».</p>"
  },
  {
   "type": "text",
   "title": "6. Outils modernes : d'en haut et à l'ordinateur",
   "html": "<ul><li><b>Photographies aériennes</b> (d'avions et de drones) et <b>images satellitaires</b> : la <b>télédétection</b> observe la Terre de loin et mesure température, végétation, glaces, pollution. Le programme européen <b>Copernicus</b> (satellites Sentinel) fournit gratuitement des images de toute la planète.</li><li><b>GPS</b> (système américain) et <b>Galileo</b> (système européen) : des satellites qui permettent de localiser un point n'importe où.</li><li><b>SIG</b> (systèmes d'information géographique) : des programmes qui superposent sur une carte numérique de nombreuses « couches » de données (routes, fleuves, population, bâtiments, risque de glissements de terrain…). Ils sont utilisés par les communes, la Protection civile, les entreprises.</li></ul>"
  },
  {
   "type": "text",
   "title": "7. Lire les données : tableaux et graphiques",
   "html": "<p>Le géographe recueille des données (habitants, températures, productions…) et les organise en <b>tableaux</b>. Puis il les transforme en <b>graphiques</b>, plus faciles à lire d'un coup d'œil :</p><ul><li><b>Histogramme</b> (en colonnes ou en barres) : compare des quantités (habitants des régions).</li><li><b>Diagramme cartésien</b> (en lignes) : montre comment une donnée change dans le temps (population italienne de 1861 à aujourd'hui).</li><li><b>Diagramme circulaire</b> (« camembert ») : montre les parties d'un tout en pourcentage (comment on utilise le sol).</li><li><b>Pictogramme</b> : utilise des symboles ou des dessins (chaque bonhomme = 1 million de personnes).</li><li><b>Cartogramme</b> : une carte où les zones sont colorées selon une donnée (densité de population).</li><li><b>Climatogramme</b> : réunit les températures (ligne) et les pluies (colonnes) d'un lieu.</li></ul>"
  },
  {
   "type": "svg",
   "title": "Trois graphiques, trois usages",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#ffffff\"/><g font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\"><text x=\"100\" y=\"28\">Histogramme</text><text x=\"300\" y=\"28\">Cartésien</text><text x=\"500\" y=\"28\">Circulaire</text></g><line x1=\"30\" y1=\"240\" x2=\"180\" y2=\"240\" stroke=\"#334155\" stroke-width=\"2\"/><rect x=\"40\" y=\"110\" width=\"30\" height=\"130\" fill=\"#3b82f6\"/><rect x=\"85\" y=\"160\" width=\"30\" height=\"80\" fill=\"#3b82f6\"/><rect x=\"130\" y=\"80\" width=\"30\" height=\"160\" fill=\"#3b82f6\"/><g font-family=\"sans-serif\" font-size=\"13\" text-anchor=\"middle\" fill=\"#334155\"><text x=\"55\" y=\"258\">A</text><text x=\"100\" y=\"258\">B</text><text x=\"145\" y=\"258\">C</text></g><line x1=\"220\" y1=\"240\" x2=\"380\" y2=\"240\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"220\" y1=\"60\" x2=\"220\" y2=\"240\" stroke=\"#334155\" stroke-width=\"2\"/><polyline points=\"230,220 265,190 300,170 335,120 370,90\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><g fill=\"#dc2626\"><circle cx=\"230\" cy=\"220\" r=\"5\"/><circle cx=\"265\" cy=\"190\" r=\"5\"/><circle cx=\"300\" cy=\"170\" r=\"5\"/><circle cx=\"335\" cy=\"120\" r=\"5\"/><circle cx=\"370\" cy=\"90\" r=\"5\"/></g><text x=\"300\" y=\"258\" font-size=\"13\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#334155\">temps →</text><circle cx=\"500\" cy=\"145\" r=\"85\" fill=\"#22c55e\"/><path d=\"M500 145 L500 60 A85 85 0 0 1 581 171 Z\" fill=\"#facc15\"/><path d=\"M500 145 L581 171 A85 85 0 0 1 452 215 Z\" fill=\"#a8a29e\"/><g font-family=\"sans-serif\" font-size=\"13\" fill=\"#0f172a\"><text x=\"525\" y=\"115\">champs</text><text x=\"510\" y=\"195\">ville</text><text x=\"440\" y=\"140\">forêts</text></g><g font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" fill=\"#475569\"><text x=\"100\" y=\"285\">compare des quantités</text><text x=\"300\" y=\"285\">montre un changement</text><text x=\"500\" y=\"285\">montre les parties d'un tout</text></g></svg>",
   "caption": "Avant de choisir un graphique, demande-toi : je veux comparer, montrer une évolution ou diviser un tout en parties ?"
  },
  {
   "type": "example",
   "title": "Exemple pratique : la densité de population",
   "html": "<p>La <b>densité</b> indique combien de personnes vivent, en moyenne, sur 1 km² : on la calcule <b>habitants : superficie</b>.</p><p>L'Italie compte environ <b>59 millions</b> d'habitants sur environ <b>302 000 km²</b> : 59 000 000 : 302 000 ≈ <b>195 habitants par km²</b>. La Lombardie dépasse 400 hab./km², le Val d'Aoste en a moins de 40. Sur un <b>cartogramme</b>, les régions les plus denses se colorent en foncé, les moins denses en clair.</p>"
  },
  {
   "type": "curiosity",
   "title": "La plus ancienne carte d'Italie ?",
   "html": "<p>Dans le Val Camonica (Lombardie), à <b>Bedolina</b>, il y a une gravure rupestre de l'âge du Fer (il y a environ 2 500 ans) qui représente des champs, des sentiers et des maisons vus d'en haut : selon de nombreux chercheurs, c'est l'une des plus anciennes « cartes » d'Europe. Déjà à l'époque, les hommes ressentaient le besoin de dessiner leur territoire.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre",
   "intro": "L'échelle et les cartes ne te sont pas claires ? Essaie ces chemins.",
   "tabs": [
    {
     "label": "🏠 L'échelle dans ta chambre",
     "html": "<p>Mesure ta chambre : par exemple 4 m × 3 m. Dessine-la sur un cahier à petits carreaux de façon que <b>1 carreau (0,5 cm) = 50 cm</b> : la pièce devient 8 × 6 carreaux. Tu as fait un plan à l'échelle <b>1 : 100</b> (0,5 cm sur le papier = 50 cm dans la réalité, c'est-à-dire 100 fois plus) ! Maintenant, ajoute le lit et le bureau.</p>",
     "widget": "areaGrid",
     "options": {
      "w": 8,
      "h": 6,
      "max": 12
     }
    },
    {
     "label": "🗺️ Cartes d'autres peuples",
     "html": "<p>Tout le monde n'a pas dessiné le monde avec le Nord en haut. Dans les cartes médiévales européennes (<i>mappemondes</i>), en haut il y avait l'<b>Est</b>, l'Orient (d'où « s'orienter »), avec Jérusalem au centre. Le géographe arabe <b>al-Idrissi</b>, à la cour de Roger II à Palerme (1154), mit le <b>Sud</b> en haut. Les habitants des îles Marshall, dans le Pacifique, construisaient des cartes avec des <b>bâtonnets et des coquillages</b> pour représenter les vagues et les îles.</p>"
    },
    {
     "label": "🧭 Exercice en 3D",
     "html": "<p>Une carte physique traduit en couleurs un vrai paysage. Fais tourner le paysage en 3D et touche les parties : puis pense à la couleur qu'elles auraient sur une carte physique (vert = plaine, jaune = colline, marron = montagne, blanc = glaciers, bleu = eaux).</p>",
     "scene": "terrain",
     "options": {
      "features": {
       "plain": {
        "label": "Plaine",
        "html": "Sur une carte physique : <b>vert</b> (en dessous de 200 m)."
       },
       "hill": {
        "label": "Colline",
        "html": "Sur une carte physique : <b>jaune / orange clair</b> (200–600 m environ)."
       },
       "mountain": {
        "label": "Montagne",
        "html": "Sur une carte physique : <b>marron</b>, de plus en plus foncé en montant."
       },
       "glacier": {
        "label": "Glacier",
        "html": "Sur une carte physique : <b>blanc</b>."
       },
       "river": {
        "label": "Fleuve",
        "html": "Sur une carte physique : ligne <b>bleue</b> qui s'épaissit vers l'embouchure."
       },
       "lake": {
        "label": "Lac",
        "html": "Sur une carte physique : tache <b>bleue</b>."
       },
       "sea": {
        "label": "Mer",
        "html": "Sur une carte physique : <b>bleu</b>, plus foncé là où c'est plus profond."
       }
      }
     }
    },
    {
     "label": "📱 Comme un zoom",
     "html": "<p>Pense à une carte sur le smartphone. Quand tu fais un <b>zoom avant</b>, tu vois les rues une à une et les magasins : c'est comme passer à une <b>grande échelle</b>. Quand tu fais un <b>zoom arrière</b>, tu vois toute l'Italie ou le monde, mais les détails disparaissent : c'est une <b>petite échelle</b>. Le segment en bas qui change pendant que tu zoomes, c'est justement une <b>échelle graphique</b> !</p>"
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz 2",
   "questions": [
    {
     "type": "mc",
     "q": "Quelle carte utiliserais-tu pour voir la densité de population des régions italiennes ?",
     "options": [
      "Carte physique",
      "Carte thématique (cartogramme)",
      "Plan",
      "Carte marine"
     ],
     "answer": 1,
     "explain": "Une carte thématique représente un seul sujet."
    },
    {
     "type": "mc",
     "q": "Quel graphique convient le mieux pour montrer comment la population a changé dans le temps ?",
     "options": [
      "Diagramme circulaire",
      "Diagramme cartésien",
      "Pictogramme",
      "Légende"
     ],
     "answer": 1,
     "explain": "La ligne montre bien l'évolution dans le temps."
    },
    {
     "type": "tf",
     "q": "Dans la projection de Mercator, le Groenland paraît plus petit qu'il ne l'est.",
     "answer": false,
     "explain": "Il paraît beaucoup plus grand : les terres proches des pôles sont agrandies."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte conceptuelle : les outils du géographe",
   "nodes": [
    {
     "id": "terra",
     "label": "La Terre est (presque) sphérique",
     "x": 50,
     "y": 8,
     "color": "#0ea5e9",
     "html": "<p>Un géoïde, légèrement aplati aux pôles.</p>",
     "why": "<p>Les Grecs l'avaient déjà démontré : Aristote en observant l'ombre circulaire de la Terre sur la Lune pendant les éclipses ; Ératosthène (vers 240 av. J.-C.) en mesura la circonférence en comparant les ombres à Syène et à Alexandrie.</p>"
    },
    {
     "id": "globo",
     "label": "Globe",
     "x": 18,
     "y": 30,
     "color": "#16a34a",
     "html": "<p>Modèle sphérique sans déformations.</p>",
     "why": "<p>Le plus ancien globe parvenu jusqu'à nous est l'« Erdapfel » de Martin Behaim (Nuremberg, 1492) : l'Amérique n'y figure pas encore !</p>"
    },
    {
     "id": "proiezioni",
     "label": "Projections",
     "x": 50,
     "y": 32,
     "color": "#7c3aed",
     "html": "<p>Mercator, Peters, Robinson…</p>",
     "why": "<p>Le mathématicien Gauss démontra en 1827 (Theorema egregium) qu'il est impossible de représenter une sphère sur un plan sans déformer quelque chose : toute projection est un compromis.</p>"
    },
    {
     "id": "scala",
     "label": "Échelle",
     "x": 82,
     "y": 30,
     "color": "#ca8a04",
     "html": "<p>Rapport entre la mesure sur la carte et la mesure réelle.</p>",
     "why": "<p>C'est une <b>proportion</b> : le même raisonnement que les fractions et les rapports en mathématiques. Sans échelle, on ne pourrait pas mesurer les distances.</p>"
    },
    {
     "id": "carte",
     "label": "Types de cartes",
     "x": 62,
     "y": 58,
     "color": "#dc2626",
     "html": "<p>Plans, topographiques, chorographiques, géographiques ; physiques, politiques, thématiques.</p>",
     "why": "<p>Chaque carte naît d'une question différente : « où sont les montagnes ? », « où sont les frontières ? », « où vivent le plus de gens ? ». Les courbes de niveau se répandirent aux XVIIIe-XIXe siècles grâce aux relevés topographiques militaires.</p>"
    },
    {
     "id": "orientamento",
     "label": "Orientation et coordonnées",
     "x": 18,
     "y": 62,
     "color": "#2563eb",
     "html": "<p>Points cardinaux, boussole, latitude et longitude.</p>",
     "why": "<p>La boussole arriva en Europe depuis la Chine (XIIe siècle). Le quadrillage de parallèles et de méridiens fut déjà utilisé par Ptolémée (IIe siècle apr. J.-C.).</p>"
    },
    {
     "id": "satelliti",
     "label": "Satellites, GPS, SIG",
     "x": 25,
     "y": 90,
     "color": "#475569",
     "html": "<p>Télédétection, localisation, cartes numériques à couches.</p>",
     "why": "<p>Le GPS, né à des fins militaires aux États-Unis, est ouvert aux civils depuis les années 1980–1990 ; le premier SIG fut créé au Canada dans les années 1960 par Roger Tomlinson pour recenser les forêts.</p>"
    },
    {
     "id": "grafici",
     "label": "Tableaux et graphiques",
     "x": 72,
     "y": 88,
     "color": "#ea580c",
     "html": "<p>Histogrammes, cartésiens, circulaires, cartogrammes.</p>",
     "why": "<p>Les graphiques modernes (en barres, en lignes, en secteurs) furent inventés par l'Écossais William Playfair entre 1786 et 1801 pour rendre les données économiques compréhensibles de tous.</p>"
    }
   ],
   "edges": [
    [
     "terra",
     "globo",
     "se représente avec"
    ],
    [
     "terra",
     "proiezioni",
     "s'aplatit avec"
    ],
    [
     "proiezioni",
     "carte",
     "produisent"
    ],
    [
     "scala",
     "carte",
     "réduit"
    ],
    [
     "orientamento",
     "carte",
     "positionne"
    ],
    [
     "satelliti",
     "orientamento",
     "mesurent"
    ],
    [
     "grafici",
     "carte",
     "cartogramme"
    ],
    [
     "satelliti",
     "grafici",
     "fournissent des données"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Carte géographique",
   "d": "Représentation réduite, approximative et symbolique de la surface terrestre."
  },
  {
   "t": "Échelle",
   "d": "Rapport entre une distance sur la carte et la distance réelle correspondante."
  },
  {
   "t": "Légende",
   "d": "Explication des symboles et des couleurs utilisés dans une carte."
  },
  {
   "t": "Courbe de niveau (isohypse)",
   "d": "Ligne qui relie des points de même altitude."
  },
  {
   "t": "Projection",
   "d": "Méthode mathématique pour représenter la surface sphérique de la Terre sur un plan."
  },
  {
   "t": "Télédétection",
   "d": "Observation de la Terre à distance, avec des avions, des drones ou des satellites."
  },
  {
   "t": "GPS",
   "d": "Système de localisation par satellite."
  },
  {
   "t": "SIG",
   "d": "Système d'information géographique : cartes numériques à couches de données."
  },
  {
   "t": "Cartogramme",
   "d": "Carte thématique où les zones sont colorées selon une donnée statistique."
  },
  {
   "t": "Densité de population",
   "d": "Nombre moyen d'habitants par km²."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Que signifie l'échelle 1 : 50 000 ?",
    "options": [
     "1 cm sur la carte = 50 000 cm dans la réalité",
     "1 km sur la carte = 50 000 km",
     "La carte est 50 000 fois plus grande que la réalité",
     "1 m = 50 km"
    ],
    "answer": 0,
    "explain": "1 cm = 50 000 cm = 500 m."
   },
   {
    "type": "num",
    "q": "Sur une carte au 1 : 200 000, deux villes sont distantes de 5 cm. Combien de km les séparent ?",
    "answer": 10,
    "tol": 0,
    "unit": "km",
    "explain": "5 × 200 000 = 1 000 000 cm = 10 km."
   },
   {
    "type": "num",
    "q": "Sur une carte au 1 : 1 000 000, une route longue de 45 km mesure combien de cm ?",
    "answer": 4.5,
    "tol": 0,
    "unit": "cm",
    "explain": "1 cm = 10 km, donc 45 : 10 = 4,5 cm."
   },
   {
    "type": "order",
    "q": "Classe de la plus grande à la plus petite échelle",
    "items": [
     "1 : 2 000 (plan)",
     "1 : 25 000 (topographique)",
     "1 : 500 000 (chorographique)",
     "1 : 20 000 000 (planisphère)"
    ],
    "explain": "Plus le dénominateur est petit, plus l'échelle est grande."
   },
   {
    "type": "mc",
    "q": "Sur une carte physique, de quelle couleur est généralement la plaine ?",
    "options": [
     "Marron",
     "Vert",
     "Blanc",
     "Violet"
    ],
    "answer": 1,
    "explain": "Vert pour les plaines, jaune pour les collines, marron pour les montagnes."
   },
   {
    "type": "tf",
    "q": "Si les courbes de niveau sont très rapprochées, la pente est raide.",
    "answer": true,
    "explain": "Sur peu d'espace horizontal, on monte beaucoup."
   },
   {
    "type": "text",
    "q": "Comment s'appelle la liste qui explique les symboles et les couleurs d'une carte ?",
    "answer": [
     "légende",
     "la légende"
    ],
    "explain": "La légende."
   },
   {
    "type": "mc",
    "q": "Quelle projection conserve les angles et est utile pour la navigation, mais agrandit les zones polaires ?",
    "options": [
     "Peters",
     "Mercator",
     "Robinson",
     "Aucune"
    ],
    "answer": 1,
    "explain": "La projection de Mercator (1569)."
   },
   {
    "type": "mc",
    "q": "Quel graphique utilises-tu pour montrer les pourcentages d'utilisation du sol ?",
    "options": [
     "Diagramme circulaire",
     "Diagramme cartésien",
     "Courbe de niveau",
     "Échelle graphique"
    ],
    "answer": 0,
    "explain": "Le diagramme circulaire (« camembert ») montre les parties d'un tout."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le système européen de navigation par satellite ?",
    "answer": [
     "galileo"
    ],
    "explain": "Galileo, le « GPS européen »."
   },
   {
    "type": "mc",
    "q": "Où le Soleil se lève-t-il ?",
    "options": [
     "Au Nord",
     "Au Sud",
     "À l'Est",
     "À l'Ouest"
    ],
    "answer": 2,
    "explain": "Il se lève à l'Est (levant) et se couche à l'Ouest (couchant)."
   }
  ],
  "gen": [
   [
    "lengthConv",
    2
   ],
   [
    "proportion",
    1
   ]
  ]
 }
});
