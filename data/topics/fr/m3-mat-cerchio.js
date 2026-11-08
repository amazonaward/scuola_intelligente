TOPIC('fr', {
 "id": "m3-mat-cerchio",
 "title": "Cercle et disque",
 "intro": "Roues, pizzas, horloges, pièces de monnaie, piste d'athlétisme : le cercle est partout. Apprenons ses parties, découvrons le mystérieux nombre <b>π</b> (pi) et calculons la <b>longueur du cercle</b>, l'<b>aire du disque</b>, des <b>arcs</b>, des <b>secteurs</b> et des <b>couronnes circulaires</b>.",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "Cercle et disque : ce n'est pas la même chose",
   "html": "<p>Le <b>cercle</b> est la <b>ligne</b> fermée formée par tous les points du plan qui sont à la <b>même distance</b> d'un point fixe, le <b>centre</b>. Le <b>disque</b> est la <b>partie du plan</b> délimitée par le cercle (cercle compris).</p>\n<p>Pense à une bague 💍 (cercle : il n'a qu'une longueur) et à une pièce de monnaie 🪙 (disque : il a une aire).</p>\n<ul>\n<li><b>Rayon</b> (r) : segment qui va du centre à un point du cercle.</li>\n<li><b>Diamètre</b> (d) : segment qui passe par le centre et relie deux points du cercle : <b>d = 2r</b>. C'est la plus longue corde.</li>\n<li><b>Corde</b> : segment qui relie deux points quelconques du cercle.</li>\n<li><b>Arc</b> : partie du cercle comprise entre deux points.</li>\n<li><b>Angle au centre</b> : angle dont le sommet est au centre.</li>\n<li><b>Secteur circulaire</b> : partie du disque entre deux rayons (une « part de pizza »).</li>\n<li><b>Segment circulaire</b> : partie du disque entre une corde et un arc.</li>\n<li><b>Couronne circulaire</b> : partie du plan entre deux cercles de même centre (<b>concentriques</b>), comme un CD ou un beignet.</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "Les parties du disque",
   "svg": "<svg viewBox=\"0 0 640 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"320\" fill=\"#fffbeb\"/>\n<circle cx=\"200\" cy=\"160\" r=\"130\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"4\"/>\n<path d=\"M200 160 L330 160 A130 130 0 0 0 292 68 Z\" fill=\"#f97316\" opacity=\"0.85\"/>\n<path d=\"M95 236 A130 130 0 0 0 200 290 L95 236 Z\" fill=\"#60a5fa\" opacity=\"0.9\"/>\n<line x1=\"95\" y1=\"236\" x2=\"200\" y2=\"290\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<line x1=\"70\" y1=\"160\" x2=\"200\" y2=\"160\" stroke=\"#16a34a\" stroke-width=\"4\"/>\n<line x1=\"108\" y1=\"68\" x2=\"292\" y2=\"252\" stroke=\"#7c3aed\" stroke-width=\"4\" stroke-dasharray=\"10 5\"/>\n<circle cx=\"200\" cy=\"160\" r=\"6\" fill=\"#1f2937\"/>\n<text x=\"185\" y=\"185\" font-size=\"16\" fill=\"#1f2937\" font-weight=\"bold\">O</text>\n<text x=\"400\" y=\"50\" font-size=\"18\" fill=\"#b45309\" font-weight=\"bold\">— cercle (la ligne)</text>\n<text x=\"400\" y=\"85\" font-size=\"18\" fill=\"#92400e\" font-weight=\"bold\">▇ disque (la surface)</text>\n<text x=\"400\" y=\"120\" font-size=\"18\" fill=\"#16a34a\" font-weight=\"bold\">— rayon r</text>\n<text x=\"400\" y=\"155\" font-size=\"18\" fill=\"#7c3aed\" font-weight=\"bold\">- - diamètre d = 2r</text>\n<text x=\"400\" y=\"190\" font-size=\"18\" fill=\"#ea580c\" font-weight=\"bold\">▇ secteur circulaire</text>\n<text x=\"400\" y=\"225\" font-size=\"18\" fill=\"#1d4ed8\" font-weight=\"bold\">— corde et ▇ segment circulaire</text>\n<text x=\"400\" y=\"260\" font-size=\"18\" fill=\"#c2410c\">∠ angle au centre du secteur</text>\n</svg>",
   "caption": "Le secteur orange est délimité par deux rayons et un arc ; le segment bleu par une corde et un arc."
  },
  {
   "type": "text",
   "title": "Droites et cercle, angles inscrits",
   "html": "<p>Une droite par rapport à un cercle peut être (d = distance de la droite au centre) :</p>\n<ul>\n<li><b>extérieure</b> : aucun point commun (d &gt; r) ;</li>\n<li><b>tangente</b> : un seul point commun (d = r) ; la tangente est <b>perpendiculaire au rayon</b> au point de contact ;</li>\n<li><b>sécante</b> : deux points communs (d &lt; r).</li>\n</ul>\n<p>Un <b>angle inscrit</b> a son sommet sur le cercle et ses côtés qui le coupent. Propriété importante : <b>un angle inscrit mesure la moitié de l'angle au centre</b> qui intercepte le même arc. Conséquence : tout angle inscrit qui intercepte un <b>demi-cercle</b> est <b>droit</b> (90°) : tout triangle inscrit dont un côté est un diamètre est rectangle (théorème attribué à <b>Thalès</b>).</p>"
  },
  {
   "type": "text",
   "title": "Le nombre π et la longueur du cercle",
   "html": "<p>Prends un objet rond quelconque, mesure avec une ficelle la circonférence C et le diamètre d, et calcule C : d. Avec une boîte de conserve, une assiette ou une roue, tu obtiendras toujours environ <b>3,14</b> ! Ce nombre s'appelle <b>π</b> (pi) :</p>\n<p style=\"text-align:center;font-size:1.2em\"><b>π = C : d ≈ 3,14159265…</b></p>\n<p>π est un nombre <b>irrationnel</b> : il a une infinité de décimales qui ne se répètent jamais de façon régulière. Dans les calculs, on utilise en général <b>3,14</b>.</p>\n<p>Formules :</p>\n<ul>\n<li><b>C = π · d = 2 · π · r</b></li>\n<li>Formules inverses : <b>d = C : π</b>, <b>r = C : (2π)</b></li>\n<li><b>Longueur d'un arc</b> d'angle au centre α : <b>l = C · α / 360°</b>. L'arc est proportionnel à son angle : moitié d'angle, moitié d'arc.</li>\n</ul>\n<p>Exemple : r = 5 cm → C = 2 · 3,14 · 5 = <b>31,4 cm</b>. Un arc de 72° représente 72/360 = 1/5 → 31,4 : 5 = <b>6,28 cm</b>.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : parties et circonférence",
   "questions": [
    {
     "type": "mc",
     "q": "La plus longue corde d'un cercle est…",
     "options": [
      "le rayon",
      "le diamètre",
      "l'arc"
     ],
     "answer": 1,
     "explain": "Le diamètre passe par le centre et c'est la corde maximale."
    },
    {
     "type": "num",
     "q": "Longueur du cercle de rayon 10 cm (π = 3,14) ?",
     "answer": 62.8,
     "tol": 0.01,
     "unit": "cm",
     "explain": "2 · 3,14 · 10 = 62,8 cm."
    },
    {
     "type": "tf",
     "q": "Une droite tangente a deux points communs avec le cercle.",
     "answer": false,
     "explain": "La tangente a un seul point commun ; la sécante en a deux."
    }
   ]
  },
  {
   "type": "text",
   "title": "L'aire du disque, du secteur et de la couronne",
   "html": "<ul>\n<li><b>Aire du disque</b> : <b>A = π · r²</b>. Formule inverse : <b>r = √(A : π)</b>.</li>\n<li><b>Aire du secteur circulaire</b> d'angle α : <b>A<sub>s</sub> = π r² · α / 360°</b>. Un quart de disque (90°) a pour aire πr²/4.</li>\n<li>Formule alternative du secteur : <b>A<sub>s</sub> = l · r / 2</b> (comme un « triangle » de base l'arc et de hauteur le rayon).</li>\n<li><b>Aire de la couronne circulaire</b> : <b>A = π (R² − r²)</b>, où R est le rayon extérieur et r le rayon intérieur.</li>\n</ul>\n<p>⚠️ Attention : si le rayon <b>double</b>, la circonférence double mais l'aire devient <b>4 fois</b> plus grande (parce que r est au carré) !</p>\n<p>Exemple : r = 6 cm → A = 3,14 · 36 = <b>113,04 cm²</b>. Secteur de 60° → 113,04 · 60/360 = 113,04 : 6 = <b>18,84 cm²</b>.</p>"
  },
  {
   "type": "widget",
   "title": "Des secteurs comme fractions de disque",
   "widget": "fractionPie",
   "options": {
    "n": 1,
    "d": 6
   },
   "caption": "Un secteur est une fraction du disque : 1/6 du disque correspond à un angle de 360° : 6 = 60°. Change les curseurs et calcule l'angle de chaque secteur."
  },
  {
   "type": "example",
   "title": "Exemple pratique : la roue de vélo",
   "html": "<p>Une roue de vélo a un diamètre de <b>66 cm</b> (roue de 26 pouces).</p>\n<ul>\n<li>En un tour, elle parcourt C = 3,14 · 66 = <b>207,24 cm ≈ 2,07 m</b>.</li>\n<li>Pour parcourir <b>1 km</b> (100 000 cm), combien de tours fait-elle ? 100 000 : 207,24 ≈ <b>483 tours</b>.</li>\n<li>C'est exactement ainsi que fonctionne le <b>compteur kilométrique</b> du vélo : un aimant sur la roue compte les tours et les multiplie par la circonférence !</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : une grande pizza ou deux moyennes ?",
   "html": "<p>À la pizzeria : une <b>grande</b> pizza a un diamètre de <b>40 cm</b>, une <b>moyenne</b> a un diamètre de <b>28 cm</b>. Vaut-il mieux une grande ou deux moyennes ?</p>\n<ul>\n<li>Grande : r = 20 → A = 3,14 · 400 = <b>1256 cm²</b>.</li>\n<li>Deux moyennes : r = 14 → A = 3,14 · 196 = 615,44 → × 2 = <b>1230,88 cm²</b>.</li>\n</ul>\n<p>Surprise : <b>une seule grande pizza</b> contient plus de pizza que deux moyennes ! Parce que l'aire croît avec le <b>carré</b> du rayon.</p>\n<p><b>Bonus – la couronne</b> : le bord large de 2 cm de la grande pizza est une couronne circulaire avec R = 20 et r = 18 : A = 3,14 · (400 − 324) = 3,14 · 76 ≈ <b>238,6 cm²</b>, presque un cinquième de la pizza !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? La chasse à π",
   "html": "<ul>\n<li>Dans le <b>papyrus Rhind</b> (Égypte, vers 1650 av. J.-C.), l'aire du cercle se calculait comme si π valait environ <b>3,16</b>.</li>\n<li><b>Archimède</b> de Syracuse (IIIᵉ siècle av. J.-C.) inscrivit et circonscrivit au cercle des polygones jusqu'à <b>96 côtés</b> et démontra que π est compris entre <b>3 + 10/71</b> et <b>3 + 1/7</b> (c'est-à-dire entre 3,1408 et 3,1429).</li>\n<li>En Chine, <b>Zu Chongzhi</b> (Vᵉ siècle) trouva la fraction <b>355/113</b>, exacte jusqu'à la sixième décimale.</li>\n<li>Le symbole π fut utilisé par William Jones en 1706 et rendu célèbre par Euler ; il vient de l'initiale du mot grec <i>perímetros</i>.</li>\n<li>Aujourd'hui, les ordinateurs ont calculé plus de <b>100 000 milliards</b> de décimales de π. Le <b>14 mars</b> (3/14 à l'américaine), on fête le <b>Pi Day</b>, que l'UNESCO a proclamé en 2019 Journée internationale des mathématiques.</li>\n</ul>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Pourquoi les roues et les plaques d'égout sont rondes",
   "html": "<p>Une roue ronde garde l'axe <b>toujours à la même hauteur</b>, parce que tous les points du cercle sont à la même distance du centre : c'est pour cela que le trajet est doux. Et les <b>plaques d'égout</b> sont souvent rondes parce qu'un couvercle circulaire <b>ne peut pas tomber dans le trou</b> : sa largeur est la même dans toutes les directions. Un couvercle carré, en revanche, tourné de travers, peut passer en biais le long de la diagonale !</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<table>\n<tr><th>Grandeur</th><th>Formule</th></tr>\n<tr><td>Diamètre</td><td>d = 2r</td></tr>\n<tr><td>Circonférence</td><td>C = 2πr = πd</td></tr>\n<tr><td>Arc</td><td>l = C · α / 360°</td></tr>\n<tr><td>Aire du disque</td><td>A = πr²</td></tr>\n<tr><td>Aire du secteur</td><td>A<sub>s</sub> = πr² · α / 360° = l · r / 2</td></tr>\n<tr><td>Couronne circulaire</td><td>A = π(R² − r²)</td></tr>\n</table>\n<p>π ≈ 3,14. Angle inscrit = moitié de l'angle au centre correspondant.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre π et l'aire du disque",
   "intro": "Pourquoi précisément πr² ? Voici quatre façons de « voir » les formules au lieu de les apprendre par cœur.",
   "tabs": [
    {
     "label": "🍕 La pizza en parts",
     "html": "<p>Coupe le disque en plein de fines parts et place-les <b>une sur deux retournée</b>, l'une à côté de l'autre. Tu obtiens une figure qui ressemble de plus en plus à un <b>rectangle</b> :</p>\n<ul>\n<li>la <b>base</b> est la moitié de la circonférence : <b>πr</b> ;</li>\n<li>la <b>hauteur</b> est le rayon : <b>r</b>.</li>\n</ul>\n<p>Aire = base × hauteur = πr × r = <b>πr²</b> ! Plus tu fais de parts, plus la figure devient un rectangle parfait. Cette idée se trouve dans les écrits de Léonard de Vinci et de Kepler.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#fff7ed\"/>\n<g stroke=\"#92400e\" stroke-width=\"2\">\n<path d=\"M40 180 L65 80 L90 180 Z\" fill=\"#fbbf24\"/><path d=\"M65 80 L90 180 L115 80 Z\" fill=\"#f97316\"/>\n<path d=\"M90 180 L115 80 L140 180 Z\" fill=\"#fbbf24\"/><path d=\"M115 80 L140 180 L165 80 Z\" fill=\"#f97316\"/>\n<path d=\"M140 180 L165 80 L190 180 Z\" fill=\"#fbbf24\"/><path d=\"M165 80 L190 180 L215 80 Z\" fill=\"#f97316\"/>\n<path d=\"M190 180 L215 80 L240 180 Z\" fill=\"#fbbf24\"/><path d=\"M215 80 L240 180 L265 80 Z\" fill=\"#f97316\"/>\n<path d=\"M240 180 L265 80 L290 180 Z\" fill=\"#fbbf24\"/><path d=\"M265 80 L290 180 L315 80 Z\" fill=\"#f97316\"/>\n<path d=\"M290 180 L315 80 L340 180 Z\" fill=\"#fbbf24\"/><path d=\"M315 80 L340 180 L365 80 Z\" fill=\"#f97316\"/>\n</g>\n<line x1=\"40\" y1=\"205\" x2=\"365\" y2=\"205\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<text x=\"200\" y=\"232\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">base ≈ demi-circonférence = πr</text>\n<line x1=\"385\" y1=\"80\" x2=\"385\" y2=\"180\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<text x=\"400\" y=\"135\" font-size=\"20\" fill=\"#16a34a\" font-weight=\"bold\">hauteur = r</text>\n<text x=\"300\" y=\"45\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">A = πr · r = πr²</text>\n</svg>"
    },
    {
     "label": "🏛️ La méthode d'Archimède",
     "html": "<p>Archimède ne savait pas « mesurer » une courbe, alors il l'emprisonna entre deux <b>polygones</b> : l'un <b>à l'intérieur</b> (inscrit) et l'autre <b>à l'extérieur</b> (circonscrit). La circonférence est plus longue que le périmètre de celui de l'intérieur et plus courte que celui de l'extérieur.</p>\n<ul>\n<li>Avec un <b>hexagone</b> inscrit (côtés = r), le périmètre est 6r = 3d → π &gt; 3.</li>\n<li>En doublant les côtés (12, 24, 48, <b>96</b>), les polygones se rapprochent de plus en plus du cercle.</li>\n</ul>\n<p>Avec 96 côtés, il obtint 3,1408 &lt; π &lt; 3,1429. Sans calculatrice, il y a plus de 2 200 ans !</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0f9ff\"/>\n<circle cx=\"150\" cy=\"130\" r=\"100\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"4\"/>\n<polygon points=\"250,130 200,217 100,217 50,130 100,43 200,43\" fill=\"#86efac\" fill-opacity=\"0.5\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<polygon points=\"265,130 208,230 92,230 35,130 92,30 208,30\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<text x=\"330\" y=\"80\" font-size=\"18\" fill=\"#16a34a\" font-weight=\"bold\">hexagone inscrit : périmètre 6r</text>\n<text x=\"330\" y=\"120\" font-size=\"18\" fill=\"#1d4ed8\" font-weight=\"bold\">circonférence 2πr</text>\n<text x=\"330\" y=\"160\" font-size=\"18\" fill=\"#dc2626\" font-weight=\"bold\">hexagone circonscrit : ≈ 6,93r</text>\n<text x=\"330\" y=\"210\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">→ 3 &lt; π &lt; 3,47</text>\n</svg>"
    },
    {
     "label": "🥫 La boîte de conserve qui roule (3D)",
     "html": "<p>Prends un <b>cylindre</b>, comme une boîte de conserve : sa base est un disque. Fais-le <b>rouler</b> d'un tour complet sur une feuille : la distance parcourue est sa <b>circonférence</b>. Si tu mesures avec la règle, tu verras qu'elle vaut environ <b>3,14 fois</b> le diamètre.</p>\n<p>Fais tourner le modèle : la surface latérale du cylindre, déroulée, est un rectangle dont la base est justement <b>2πr</b>. Voilà pourquoi la formule de la surface latérale est 2πr · h !</p>",
     "scene": "solid",
     "options": {
      "shape": "cylinder",
      "r": 1,
      "h": 1.6,
      "color": "#f59e0b",
      "labels": true,
      "shapes": [
       "cylinder",
       "cone",
       "sphere"
      ]
     }
    },
    {
     "label": "🇯🇵 Compter les carreaux",
     "html": "<p>Au Japon et dans de nombreux autres pays, on commence par estimer l'aire en <b>comptant les carreaux</b>. Dessine un cercle de rayon 10 carreaux sur du papier quadrillé : à l'intérieur, il y a environ <b>314 carreaux</b>, c'est-à-dire 3,14 × 10².</p>\n<p>Le carré qui contient le cercle a pour aire (2r)² = 4r² = 400 carreaux : le disque en occupe environ les <b>¾</b> (précisément π/4 ≈ 0,785). Essaie avec le widget : construis un carré de 10 × 10 et imagine un cercle de rayon 5 à l'intérieur : il occupe environ 78 carreaux sur 100.</p>",
     "widget": "areaGrid",
     "options": {
      "w": 10,
      "h": 10,
      "max": 12
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte du cercle et du disque",
   "nodes": [
    {
     "id": "def",
     "label": "Cercle",
     "x": 50,
     "y": 6,
     "color": "#b45309",
     "html": "Ensemble des points équidistants d'un centre.",
     "why": "C'est la 15ᵉ définition des <i>Éléments</i> d'Euclide (vers 300 av. J.-C.) ; le troisième postulat affirme qu'on peut toujours tracer un cercle de centre et de rayon donnés : c'est le compas !"
    },
    {
     "id": "cerchio",
     "label": "Disque",
     "x": 20,
     "y": 26,
     "color": "#f59e0b",
     "html": "La partie du plan délimitée par le cercle.",
     "why": "Le cercle est une « frontière » (une ligne, il a une longueur), le disque est une « région » (il a une aire). La distinction est importante pour les formules."
    },
    {
     "id": "parti",
     "label": "Rayon, diamètre, corde, arc",
     "x": 80,
     "y": 26,
     "color": "#16a34a",
     "html": "Les éléments du cercle ; d = 2r.",
     "why": "Ils découlent de la définition : tous les rayons sont égaux, et le diamètre est formé de deux rayons alignés."
    },
    {
     "id": "pi",
     "label": "π ≈ 3,14",
     "x": 50,
     "y": 42,
     "color": "#7c3aed",
     "html": "Rapport constant entre circonférence et diamètre.",
     "why": "Il est constant parce que tous les cercles sont semblables (des agrandissements les uns des autres). Archimède l'estima avec des polygones ; en 1761 Johann Lambert démontra qu'il est irrationnel et en 1882 Ferdinand von Lindemann qu'il est transcendant (d'où l'impossibilité de la « quadrature du cercle » à la règle et au compas)."
    },
    {
     "id": "lunghezza",
     "label": "C = 2πr",
     "x": 25,
     "y": 64,
     "color": "#2563eb",
     "html": "Longueur du cercle.",
     "why": "Elle vient directement de la définition de π : si C/d = π, alors C = πd = 2πr."
    },
    {
     "id": "area",
     "label": "A = πr²",
     "x": 75,
     "y": 64,
     "color": "#dc2626",
     "html": "Aire du disque.",
     "why": "Archimède l'a démontrée dans la <i>Mesure du cercle</i> : le disque équivaut à un triangle de base la circonférence et de hauteur le rayon, c'est-à-dire 2πr · r / 2 = πr²."
    },
    {
     "id": "arco",
     "label": "Arcs",
     "x": 10,
     "y": 86,
     "color": "#0ea5e9",
     "html": "l = C · α/360°.",
     "why": "Les arcs et les angles au centre sont directement proportionnels. La division du tour en 360° vient des Babyloniens, qui utilisaient la base 60 et une année d'environ 360 jours."
    },
    {
     "id": "settore",
     "label": "Secteurs",
     "x": 40,
     "y": 86,
     "color": "#f97316",
     "html": "A = πr² · α/360°.",
     "why": "L'aire du secteur est elle aussi proportionnelle à l'angle : un secteur de 90° est 1/4 du disque."
    },
    {
     "id": "corona",
     "label": "Couronne circulaire",
     "x": 70,
     "y": 86,
     "color": "#14b8a6",
     "html": "A = π(R² − r²).",
     "why": "C'est la différence entre deux disques concentriques : grande aire moins petite aire, en mettant π en facteur."
    },
    {
     "id": "angoli",
     "label": "Angles inscrits",
     "x": 92,
     "y": 86,
     "color": "#a855f7",
     "html": "Moitié de l'angle au centre correspondant.",
     "why": "Démontré par Euclide (livre III, proposition 20). Cas particulier : l'angle inscrit dans un demi-cercle est droit, théorème attribué à Thalès (VIᵉ siècle av. J.-C.)."
    }
   ],
   "edges": [
    [
     "def",
     "cerchio",
     "délimite"
    ],
    [
     "def",
     "parti",
     "ha"
    ],
    [
     "parti",
     "pi",
     "C : d ="
    ],
    [
     "pi",
     "lunghezza",
     "dà"
    ],
    [
     "pi",
     "area",
     "dà"
    ],
    [
     "lunghezza",
     "arco",
     "fraction"
    ],
    [
     "area",
     "settore",
     "fraction"
    ],
    [
     "area",
     "corona",
     "différence"
    ],
    [
     "parti",
     "angoli",
     "propriété"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : aires",
   "questions": [
    {
     "type": "num",
     "q": "Aire d'un disque de rayon 4 cm (π = 3,14) ?",
     "answer": 50.24,
     "tol": 0.01,
     "unit": "cm²",
     "explain": "3,14 · 16 = 50,24 cm²."
    },
    {
     "type": "mc",
     "q": "Si le rayon triple, l'aire devient…",
     "options": [
      "3 fois plus grande",
      "6 fois plus grande",
      "9 fois plus grande"
     ],
     "answer": 2,
     "explain": "L'aire dépend de r² : 3² = 9."
    },
    {
     "type": "num",
     "q": "Un secteur de 90° dans un disque d'aire 200 cm² a pour aire…",
     "answer": 50,
     "unit": "cm²",
     "explain": "90° è 1/4 di 360°: 200 : 4 = 50 cm²."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Cercle",
   "d": "Ligne fermée formée par les points équidistants du centre."
  },
  {
   "t": "Disque",
   "d": "Partie du plan délimitée par un cercle."
  },
  {
   "t": "Rayon",
   "d": "Segment qui relie le centre à un point du cercle."
  },
  {
   "t": "Diamètre",
   "d": "Corde passant par le centre ; il vaut le double du rayon."
  },
  {
   "t": "Corde",
   "d": "Segment qui relie deux points du cercle."
  },
  {
   "t": "Arc",
   "d": "Partie du cercle entre deux points."
  },
  {
   "t": "Secteur circulaire",
   "d": "Partie du disque comprise entre deux rayons et un arc."
  },
  {
   "t": "Couronne circulaire",
   "d": "Partie du plan entre deux cercles concentriques."
  },
  {
   "t": "π (pi)",
   "d": "Rapport entre la circonférence et le diamètre, environ 3,14 ; nombre irrationnel."
  },
  {
   "t": "Tangente",
   "d": "Droite ayant un seul point commun avec le cercle, perpendiculaire au rayon en ce point."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "tf",
    "q": "Le cercle est une ligne, le disque est une surface.",
    "answer": true,
    "explain": "Le cercle a une longueur, le disque une aire."
   },
   {
    "type": "num",
    "q": "Le diamètre est de 18 cm. Combien mesure le rayon ?",
    "answer": 9,
    "unit": "cm",
    "explain": "r = d : 2 = 9 cm."
   },
   {
    "type": "num",
    "q": "Longueur du cercle de diamètre 50 cm (π = 3,14) ?",
    "answer": 157,
    "tol": 0.01,
    "unit": "cm",
    "explain": "3,14 · 50 = 157 cm."
   },
   {
    "type": "num",
    "q": "Un cercle mesure 94,2 cm de long. Combien mesure son rayon ? (π = 3,14)",
    "answer": 15,
    "tol": 0.01,
    "unit": "cm",
    "explain": "r = 94,2 : (2 · 3,14) = 94,2 : 6,28 = 15 cm."
   },
   {
    "type": "num",
    "q": "Aire du disque de rayon 10 cm (π = 3,14) ?",
    "answer": 314,
    "tol": 0.01,
    "unit": "cm²",
    "explain": "3,14 · 100 = 314 cm²."
   },
   {
    "type": "num",
    "q": "Longueur d'un arc de 60° dans un cercle de 36 cm de longueur ?",
    "answer": 6,
    "unit": "cm",
    "explain": "60/360 = 1/6 → 36 : 6 = 6 cm."
   },
   {
    "type": "num",
    "q": "Aire de la couronne circulaire avec R = 5 cm et r = 3 cm (π = 3,14) ?",
    "answer": 50.24,
    "tol": 0.01,
    "unit": "cm²",
    "explain": "3,14 · (25 − 9) = 3,14 · 16 = 50,24 cm²."
   },
   {
    "type": "mc",
    "q": "Une droite dont la distance au centre est inférieure au rayon est…",
    "options": [
     "extérieure",
     "tangente",
     "sécante"
    ],
    "answer": 2,
    "explain": "Si d < r, la droite coupe le cercle en deux points."
   },
   {
    "type": "mc",
    "q": "Un angle au centre mesure 80°. Combien mesure l'angle inscrit qui intercepte le même arc ?",
    "options": [
     "160°",
     "40°",
     "80°"
    ],
    "answer": 1,
    "explain": "C'est la moitié : 40°."
   },
   {
    "type": "mc",
    "q": "Qui a estimé π avec des polygones de 96 côtés ?",
    "options": [
     "Pythagore",
     "Archimède",
     "Descartes"
    ],
    "answer": 1,
    "explain": "Archimède de Syracuse, IIIᵉ siècle av. J.-C."
   },
   {
    "type": "order",
    "q": "Range ces approximations de π de la moins précise à la plus précise.",
    "items": [
     "3",
     "3,14",
     "22/7 (≈ 3,1429)",
     "355/113 (≈ 3,1415929)"
    ],
    "explain": "π = 3,14159265… : 355/113 ne se trompe qu'à la septième décimale ; 22/7 est plus précise que 3,14 (erreur d'environ 0,0013 contre 0,0016)."
   },
   {
    "type": "tf",
    "q": "Si le rayon double, l'aire double aussi.",
    "answer": false,
    "explain": "L'aire devient 4 fois plus grande, parce qu'elle dépend de r²."
   }
  ],
  "gen": [
   [
    "circle",
    3
   ]
  ]
 }
});
