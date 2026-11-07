TOPIC('fr', {
 "id": "m2-mat-trasformazioni",
 "title": "Les transformations géométriques",
 "intro": "Déplacer, tourner, retourner, agrandir : les <b>transformations géométriques</b> sont les règles par lesquelles une figure change de position ou de dimension dans le plan. Tu les trouves dans les carrelages, les logos, les miroirs, les jeux vidéo et même dans les ailes d'un papillon.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "1. Qu'est-ce qu'une transformation",
   "html": "<p>Une <b>transformation géométrique</b> est une règle qui associe à chaque point <b>P</b> du plan un seul point <b>P'</b> (on lit « P prime »), appelé <b>image</b> ou <b>correspondant</b> de P.</p>\n<p>En appliquant la règle à tous les points d'une figure <b>F</b>, on obtient la figure transformée <b>F'</b>.</p>\n<p>Les transformations se divisent en deux grandes familles :</p>\n<ul>\n<li><b>Isométries</b> (du grec <i>isos</i> = égal, <i>metron</i> = mesure) : elles conservent les <b>longueurs</b> des segments et la mesure des angles. La figure se déplace mais reste <b>isométrique</b> (superposable) à celle de départ. Sont des isométries la <b>translation</b>, la <b>rotation</b> et la <b>symétrie</b> (axiale et centrale).</li>\n<li><b>Similitudes</b> : elles conservent la <b>forme</b> (les angles) mais peuvent changer les dimensions. La figure est agrandie ou réduite d'un certain <b>rapport de similitude k</b>.</li>\n</ul>\n<p>Un point qui coïncide avec sa propre image (P = P') s'appelle un <b>point invariant</b>.</p>"
  },
  {
   "type": "text",
   "title": "2. La translation : glisser",
   "html": "<p>Dans la <b>translation</b>, tous les points se déplacent de la même distance, dans la même direction et dans le même sens. Ce déplacement se décrit avec un <b>vecteur</b> <b>v</b> : une flèche qui a</p>\n<ul>\n<li>une <b>norme</b> (longueur du déplacement),</li>\n<li>une <b>direction</b> (la droite sur laquelle il a lieu),</li>\n<li>un <b>sens</b> (de quel côté la flèche pointe).</li>\n</ul>\n<p>Dans le plan cartésien, un vecteur s'écrit avec ses composantes, par exemple <b>v(3 ; −2)</b> : « 3 vers la droite et 2 vers le bas ». Le point A(1 ; 4) devient A'(1+3 ; 4−2) = <b>A'(4 ; 2)</b>.</p>\n<p>Règle : <b>P(x ; y) → P'(x + a ; y + b)</b> avec v(a ; b).</p>\n<p>La translation <b>n'a pas de points invariants</b> (sauf celle de vecteur nul) et conserve l'<b>orientation</b> : si les sommets d'un triangle se lisent dans le sens inverse des aiguilles d'une montre, ceux de l'image aussi.</p>"
  },
  {
   "type": "svg",
   "title": "Les quatre isométries comparées",
   "svg": "<svg viewBox=\"0 0 600 340\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"340\" fill=\"#f8fafc\"/>\n<line x1=\"300\" y1=\"0\" x2=\"300\" y2=\"340\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n<line x1=\"0\" y1=\"170\" x2=\"600\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n<text x=\"150\" y=\"22\" font-size=\"17\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">Translation</text>\n<polygon points=\"30,140 80,140 30,70\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n<polygon points=\"170,140 220,140 170,70\" fill=\"#1d4ed8\" fill-opacity=\"0.75\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n<line x1=\"85\" y1=\"110\" x2=\"160\" y2=\"110\" stroke=\"#f97316\" stroke-width=\"4\"/>\n<polygon points=\"160,102 175,110 160,118\" fill=\"#f97316\"/>\n<text x=\"122\" y=\"100\" font-size=\"16\" fill=\"#c2410c\" text-anchor=\"middle\">v</text>\n<text x=\"450\" y=\"22\" font-size=\"17\" font-weight=\"bold\" fill=\"#15803d\" text-anchor=\"middle\">Symétrie axiale</text>\n<line x1=\"450\" y1=\"35\" x2=\"450\" y2=\"160\" stroke=\"#15803d\" stroke-width=\"3\" stroke-dasharray=\"8,6\"/>\n<polygon points=\"380,140 430,140 430,70\" fill=\"#86efac\" stroke=\"#15803d\" stroke-width=\"2\"/>\n<polygon points=\"520,140 470,140 470,70\" fill=\"#15803d\" fill-opacity=\"0.75\" stroke=\"#14532d\" stroke-width=\"2\"/>\n<text x=\"458\" y=\"160\" font-size=\"15\" fill=\"#15803d\">axe r</text>\n<text x=\"150\" y=\"195\" font-size=\"17\" font-weight=\"bold\" fill=\"#7c3aed\" text-anchor=\"middle\">Rotation de 90°</text>\n<circle cx=\"150\" cy=\"270\" r=\"5\" fill=\"#7c3aed\"/>\n<text x=\"140\" y=\"292\" font-size=\"15\" fill=\"#7c3aed\">O</text>\n<polygon points=\"160,260 220,260 220,220\" fill=\"#c4b5fd\" stroke=\"#7c3aed\" stroke-width=\"2\"/>\n<polygon points=\"140,260 140,320 100,320\" fill=\"#7c3aed\" fill-opacity=\"0.75\" stroke=\"#4c1d95\" stroke-width=\"2\"/>\n<path d=\"M205 245 A60 60 0 0 1 135 305\" fill=\"none\" stroke=\"#f97316\" stroke-width=\"3\" stroke-dasharray=\"5,4\"/>\n<text x=\"450\" y=\"195\" font-size=\"17\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">Symétrie centrale</text>\n<circle cx=\"450\" cy=\"270\" r=\"5\" fill=\"#be123c\"/>\n<text x=\"456\" y=\"288\" font-size=\"15\" fill=\"#be123c\">O</text>\n<polygon points=\"470,255 530,255 470,215\" fill=\"#fda4af\" stroke=\"#be123c\" stroke-width=\"2\"/>\n<polygon points=\"430,285 370,285 430,325\" fill=\"#be123c\" fill-opacity=\"0.75\" stroke=\"#881337\" stroke-width=\"2\"/>\n<line x1=\"530\" y1=\"255\" x2=\"370\" y2=\"285\" stroke=\"#be123c\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n</svg>",
   "caption": "La figure claire est celle de départ (F), la figure foncée est l'image (F'). Dans les quatre cas, F et F' sont isométriques."
  },
  {
   "type": "text",
   "title": "3. La rotation : tourner autour d'un point",
   "html": "<p>Une <b>rotation</b> est définie par trois éléments :</p>\n<ol>\n<li>le <b>centre de rotation O</b>, le seul point qui reste fixe (point invariant) ;</li>\n<li>l'<b>angle de rotation α</b> (par exemple 90°, 180°, 60°…) ;</li>\n<li>le <b>sens</b> : <b>anti-horaire</b> (par convention positif, +) ou <b>horaire</b> (négatif, −).</li>\n</ol>\n<p>Chaque point P se déplace le long d'un cercle de centre O : la distance OP reste égale à OP' et l'angle POP' est exactement α.</p>\n<p>Dans le plan cartésien, avec le centre à l'origine :</p>\n<ul>\n<li>rotation de +90° : <b>(x ; y) → (−y ; x)</b></li>\n<li>rotation de 180° : <b>(x ; y) → (−x ; −y)</b></li>\n<li>rotation de −90° (ou +270°) : <b>(x ; y) → (y ; −x)</b></li>\n</ul>\n<p>Une rotation de 360° remet chaque point à sa place : c'est l'<b>identité</b>.</p>"
  },
  {
   "type": "text",
   "title": "4. Les symétries : le miroir",
   "html": "<p><b>Symétrie axiale</b> (ou retournement) : elle est donnée par une droite <b>r</b>, l'<b>axe de symétrie</b>. Le point P' est tel que l'axe r est la <b>médiatrice du segment PP'</b> : PP' est perpendiculaire à r et le milieu de PP' est sur r. Les points de l'axe sont tous des points invariants.</p>\n<p>La symétrie axiale <b>inverse l'orientation</b> : c'est comme se regarder dans un miroir, où la main droite semble une main gauche.</p>\n<ul>\n<li>Axe x : (x ; y) → (x ; −y)</li>\n<li>Axe y : (x ; y) → (−x ; y)</li>\n<li>Bissectrice y = x : (x ; y) → (y ; x)</li>\n</ul>\n<p><b>Symétrie centrale</b> : elle est donnée par un point <b>O</b>, le <b>centre de symétrie</b>, qui est le milieu de chaque segment PP'. Elle équivaut à une <b>rotation de 180°</b> autour de O. Avec le centre à l'origine : (x ; y) → (−x ; −y).</p>\n<p>Une figure a un <b>axe de symétrie</b> si la symétrie par rapport à cet axe la transforme en elle-même. Le carré en a 4, le rectangle 2, le triangle équilatéral 3, le cercle une infinité.</p>"
  },
  {
   "type": "widget",
   "title": "Laboratoire : transforme le point",
   "widget": "numberLine",
   "options": {
    "min": -8,
    "max": 8,
    "step": 1,
    "marks": [
     -3,
     3
    ]
   },
   "caption": "Sur une droite, la symétrie par rapport à 0 envoie 3 sur −3 : c'est la même chose qui arrive à la coordonnée x dans la symétrie par rapport à l'axe y. Essaie de sauter de 3 à −3 : combien mesure le saut ? (6 = deux fois la distance à l'axe)."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : isométries",
   "questions": [
    {
     "type": "mc",
     "q": "Quelle transformation est décrite par un vecteur ?",
     "options": [
      "Rotation",
      "Translation",
      "Symétrie axiale"
     ],
     "answer": 1,
     "explain": "La translation déplace tous les points selon le même vecteur (norme, direction, sens)."
    },
    {
     "type": "mc",
     "q": "Le point A(2 ; 5) est translaté avec v(−4 ; 1). Où arrive-t-il ?",
     "options": [
      "A'(6; 6)",
      "A'(−2; 6)",
      "A'(−2; 4)"
     ],
     "answer": 1,
     "explain": "x : 2 + (−4) = −2 ; y : 5 + 1 = 6. Donc A'(−2 ; 6)."
    },
    {
     "type": "tf",
     "q": "La symétrie centrale est égale à une rotation de 180° autour du centre.",
     "answer": true,
     "explain": "Chaque point se retrouve de l'autre côté de O, à la même distance : c'est un demi-tour."
    },
    {
     "type": "num",
     "q": "Combien d'axes de symétrie a un carré ?",
     "answer": 4,
     "explain": "2 médianes (verticale et horizontale) et 2 diagonales."
    }
   ]
  },
  {
   "type": "text",
   "title": "5. Composition d'isométries",
   "html": "<p>On peut appliquer deux transformations l'une après l'autre : on parle de <b>composition</b>. Quelques résultats importants :</p>\n<ul>\n<li>deux translations donnent une translation (on additionne les vecteurs) ;</li>\n<li>deux symétries axiales d'axes <b>parallèles</b> donnent une <b>translation</b> de norme double de la distance entre les axes ;</li>\n<li>deux symétries axiales d'axes <b>sécants</b> en O donnent une <b>rotation</b> de centre O et d'angle double de l'angle entre les axes ;</li>\n<li>deux symétries centrales donnent une translation.</li>\n</ul>\n<p>C'est pourquoi on dit que la symétrie axiale est la transformation « brique » : en combinant au plus trois symétries axiales, on obtient <b>n'importe quelle isométrie</b> du plan.</p>"
  },
  {
   "type": "text",
   "title": "6. Homothétie et similitude : agrandir et réduire",
   "html": "<p>L'<b>homothétie</b> de centre O et de rapport <b>k</b> envoie chaque point P sur un point P' de la droite OP tel que <b>OP' = k · OP</b>.</p>\n<ul>\n<li>si <b>k &gt; 1</b>, la figure est <b>agrandie</b> ;</li>\n<li>si <b>0 &lt; k &lt; 1</b>, la figure est <b>réduite</b> ;</li>\n<li>si <b>k = 1</b>, elle ne change pas (identité) ;</li>\n<li>si k est négatif, l'image se trouve de l'autre côté de O (avec k = −1, c'est la symétrie centrale).</li>\n</ul>\n<p>Deux figures sont dites <b>semblables</b> si l'une s'obtient de l'autre par une homothétie suivie (éventuellement) d'une isométrie. Dans les figures semblables :</p>\n<ul>\n<li>les <b>angles correspondants sont égaux</b> ;</li>\n<li>les <b>côtés correspondants sont proportionnels</b>, avec le rapport k ;</li>\n<li>les <b>périmètres</b> sont dans le rapport <b>k</b> ;</li>\n<li>les <b>aires</b> sont dans le rapport <b>k²</b> (et les volumes des solides dans le rapport k³).</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "Une homothétie de rapport 2",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/>\n<circle cx=\"60\" cy=\"260\" r=\"7\" fill=\"#dc2626\"/>\n<text x=\"40\" y=\"290\" font-size=\"18\" fill=\"#dc2626\" font-weight=\"bold\">O</text>\n<line x1=\"60\" y1=\"260\" x2=\"540\" y2=\"260\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6,5\"/>\n<line x1=\"60\" y1=\"260\" x2=\"300\" y2=\"40\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6,5\"/>\n<line x1=\"60\" y1=\"260\" x2=\"540\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6,5\"/>\n<polygon points=\"180,260 300,190 180,150\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"3\"/>\n<polygon points=\"300,260 540,120 300,40\" fill=\"#f59e0b\" fill-opacity=\"0.35\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<text x=\"150\" y=\"160\" font-size=\"18\" fill=\"#92400e\" font-weight=\"bold\">A</text>\n<text x=\"290\" y=\"34\" font-size=\"18\" fill=\"#92400e\" font-weight=\"bold\">A'</text>\n<text x=\"300\" y=\"215\" font-size=\"18\" fill=\"#92400e\" font-weight=\"bold\">B</text>\n<text x=\"545\" y=\"115\" font-size=\"18\" fill=\"#92400e\" font-weight=\"bold\">B'</text>\n<text x=\"380\" y=\"215\" font-size=\"17\" fill=\"#0f172a\">OA' = 2 · OA</text>\n<text x=\"380\" y=\"240\" font-size=\"17\" fill=\"#0f172a\">aire F' = 4 · aire F</text>\n</svg>",
   "caption": "Avec k = 2, chaque côté double, mais l'aire devient 4 fois plus grande (2² = 4)."
  },
  {
   "type": "example",
   "title": "Exemple pratique : la carte et l'échelle",
   "html": "<p>Une carte à l'échelle <b>1 : 25 000</b> est une figure <b>semblable</b> au territoire réel avec le rapport k = 1/25 000.</p>\n<p>Si, sur la carte, deux villages sont distants de <b>8 cm</b>, dans la réalité ils sont distants de 8 × 25 000 = 200 000 cm = <b>2 km</b>.</p>\n<p>Attention aux aires : un champ qui sur la carte est de 2 cm × 2 cm = 4 cm² mesure dans la réalité 500 m × 500 m = 250 000 m², c'est-à-dire 4 cm² × 25 000² = 2,5 milliards de cm². Les aires varient avec <b>k²</b> !</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : les coordonnées d'un triangle",
   "html": "<p>Le triangle ABC a pour sommets A(1 ; 1), B(4 ; 1), C(1 ; 3).</p>\n<table>\n<tr><th>Transformation</th><th>A'</th><th>B'</th><th>C'</th></tr>\n<tr><td>Translation v(2 ; 3)</td><td>(3 ; 4)</td><td>(6 ; 4)</td><td>(3 ; 6)</td></tr>\n<tr><td>Symétrie d'axe y</td><td>(−1 ; 1)</td><td>(−4 ; 1)</td><td>(−1 ; 3)</td></tr>\n<tr><td>Rotation +90° (centre O)</td><td>(−1 ; 1)</td><td>(−1 ; 4)</td><td>(−3 ; 1)</td></tr>\n<tr><td>Homothétie k = 2 (centre O)</td><td>(2 ; 2)</td><td>(8 ; 2)</td><td>(2 ; 6)</td></tr>\n</table>\n<p>Contrôle : AB = 3 et A'B' = 3 dans les trois premières lignes (isométries) ; dans l'homothétie, A'B' = 6 = 2 · 3.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les transformations",
   "intro": "Si les règles avec les coordonnées ne te convainquent pas, essaie avec les mains, avec l'art ou avec la 3D.",
   "tabs": [
    {
     "label": "✂️ Papier, ciseaux et calque",
     "html": "<p>La méthode utilisée dans de nombreuses écoles d'Europe du Nord est <b>manipulative</b> :</p>\n<ul>\n<li><b>Translation</b> : décalque la figure sur une feuille transparente et fais-la <b>glisser</b> sans la tourner.</li>\n<li><b>Rotation</b> : pointe un crayon sur le centre O et <b>tourne</b> la feuille transparente.</li>\n<li><b>Symétrie axiale</b> : plie la feuille le long de l'axe, ou <b>retourne</b> le calque. Avec une goutte de peinture d'un côté et le pliage, tu obtiens tout de suite la figure symétrique (le « papillon »).</li>\n<li><b>Symétrie centrale</b> : tourne le calque d'un demi-tour autour du centre.</li>\n</ul>\n<p>Question clé : pour obtenir F', as-tu dû <b>retourner</b> le calque ? Si oui, l'isométrie inverse l'orientation (c'est une symétrie axiale ou une composition de symétries axiales).</p>"
    },
    {
     "label": "🎨 Escher et les mosaïques de l'Alhambra",
     "html": "<p>L'artiste néerlandais <b>M. C. Escher</b> (1898–1972), après avoir visité l'<b>Alhambra</b> de Grenade (Espagne), construisit des dessins de poissons, d'oiseaux et de lézards qui remplissent le plan sans laisser de trous : les <b>pavages</b>.</p>\n<p>L'astuce : on part d'un carré, on « mord » un morceau sur un côté et on le <b>translate</b> sur le côté opposé (ou on le <b>fait tourner</b> autour d'un sommet). La nouvelle tuile s'emboîte parfaitement avec ses copies.</p>\n<p>Les mathématiciens ont démontré (Fiodorov, 1891) qu'il existe exactement <b>17 types</b> de symétries pour les motifs qui se répètent dans le plan : les artisans arabes de l'Alhambra en utilisèrent un très grand nombre des siècles avant !</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#eff6ff\"/>\n<g stroke=\"#1e3a8a\" stroke-width=\"2\">\n<path d=\"M20 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z\" fill=\"#60a5fa\"/>\n<path d=\"M100 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z\" fill=\"#fbbf24\"/>\n<path d=\"M180 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z\" fill=\"#60a5fa\"/>\n<path d=\"M260 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z\" fill=\"#fbbf24\"/>\n<path d=\"M340 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z\" fill=\"#60a5fa\"/>\n<path d=\"M420 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z\" fill=\"#fbbf24\"/>\n<path d=\"M500 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z\" fill=\"#60a5fa\"/>\n</g>\n<text x=\"300\" y=\"165\" font-size=\"18\" fill=\"#1e3a8a\" text-anchor=\"middle\">La même tuile « mordue », translatée encore et encore,</text>\n<text x=\"300\" y=\"192\" font-size=\"18\" fill=\"#1e3a8a\" text-anchor=\"middle\">remplit la bande sans trous.</text>\n</svg>"
    },
    {
     "label": "🎮 Comme dans les jeux vidéo",
     "html": "<p>Dans les jeux vidéo, chaque personnage est un ensemble de points avec des coordonnées. L'ordinateur les transforme des dizaines de fois par seconde :</p>\n<ul>\n<li>le personnage <b>marche</b> → translation (x + 2 ; y) ;</li>\n<li>le personnage <b>se tourne</b> vers la gauche → symétrie par rapport à un axe vertical (−x ; y) ;</li>\n<li>la caméra <b>zoome</b> → homothétie avec k &gt; 1 ;</li>\n<li>une roue <b>tourne</b> → rotation.</li>\n</ul>\n<p>Les cartes graphiques font des milliards de ces calculs par seconde en utilisant les <b>matrices</b>, des tableaux de nombres que tu étudieras plus tard.</p>"
    },
    {
     "label": "🧊 Fais tourner un solide en 3D",
     "html": "<p>Les rotations existent aussi dans l'espace, autour d'un <b>axe</b> au lieu d'un point. Fais glisser le prisme hexagonal : en tournant de <b>60°</b> autour de son axe, il paraît de nouveau identique, parce que sa base est un hexagone régulier (360° : 6 = 60°). On dit qu'il a une <b>symétrie de rotation d'ordre 6</b>.</p>",
     "scene": "solid",
     "options": {
      "shape": "prism",
      "n": 6,
      "r": 1,
      "h": 1.4,
      "color": "#a78bfa",
      "labels": true
     }
    },
    {
     "label": "🇬🇷 La frise grecque : une translation infinie",
     "html": "<p>Sur les vases, les mosaïques et les temples de l'ancienne <b>Grèce</b>, on trouve souvent un cadre en spirale carrée : le <b>méandre</b>, qu'on appelle aussi la <b>« grecque »</b>. Le nom vient du fleuve Méandre (en Turquie), célèbre pour ses courbes.</p><p>Le méandre est construit avec une seule transformation : la <b>translation</b>.</p><ol><li>Sur une feuille quadrillée, dessine la <b>« brique »</b> : un morceau de spirale (sur le dessin, il est dans le cadre jaune).</li><li>Choisis un <b>vecteur</b> : par exemple 8 carreaux vers la droite.</li><li>Décalque la brique, puis déplace-la de ce vecteur et décalque-la encore… et encore.</li><li>Relie les briques avec les lignes de bordure : voilà la frise !</li></ol><p>Chaque brique est l'<b>image</b> de la précédente : même forme, même taille, même orientation. Un dessin qui se répète ainsi le long d'une bande s'appelle une <b>frise</b>. Les mathématiciens ont démontré qu'en combinant translations, symétries et rotations d'un demi-tour, il existe <b>seulement 7 types</b> de frises différentes.</p><p>🎯 Le méandre a-t-il aussi une <b>symétrie axiale</b> ? Essaie de plier le dessin le long d'une droite verticale et vérifie.</p>",
     "svg": "<svg viewBox=\"0 0 600 250\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"250\" fill=\"#fff7ed\"/><polyline points=\"60,120 60,40 120,40 120,100 80,100 80,60 100,60 100,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"140,120 140,40 200,40 200,100 160,100 160,60 180,60 180,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"220,120 220,40 280,40 280,100 240,100 240,60 260,60 260,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"300,120 300,40 360,40 360,100 320,100 320,60 340,60 340,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"380,120 380,40 440,40 440,100 400,100 400,60 420,60 420,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"460,120 460,40 520,40 520,100 480,100 480,60 500,60 500,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><line x1=\"56\" y1=\"120\" x2=\"544\" y2=\"120\" stroke=\"#1e3a8a\" stroke-width=\"7\"/><line x1=\"56\" y1=\"32\" x2=\"544\" y2=\"32\" stroke=\"#1e3a8a\" stroke-width=\"7\"/><rect x=\"56\" y=\"28\" width=\"80\" height=\"96\" fill=\"#fde68a\" fill-opacity=\"0.35\" stroke=\"#d97706\" stroke-width=\"3\"/><defs><marker id=\"arrM\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 Z\" fill=\"#dc2626\"/></marker></defs><line x1=\"60\" y1=\"170\" x2=\"136\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"4\" marker-end=\"url(#arrM)\"/><line x1=\"140\" y1=\"170\" x2=\"216\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"4\" marker-end=\"url(#arrM)\"/><line x1=\"220\" y1=\"170\" x2=\"296\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"4\" marker-end=\"url(#arrM)\"/><text x=\"320\" y=\"176\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">même vecteur, toujours répété</text><text x=\"96\" y=\"225\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">La « brique » colorée, translatée plusieurs fois, forme la frise.</text></svg>"
    },
    {
     "label": "🇲🇩 Tapis et broderies de Moldavie",
     "html": "<p>En <b>Moldavie</b> et en <b>Roumanie</b>, les tapis traditionnels (<i>covoare</i>) et les broderies des chemises sont pleins de géométrie : losanges, étoiles, croix, arbres stylisés. En 2016, l'<b>UNESCO</b> a reconnu l'art des tapis muraux traditionnels de Roumanie et de la République de Moldova comme <b>patrimoine culturel immatériel de l'humanité</b>.</p><p>Les brodeuses travaillent sur la <b>trame du tissu</b>, qui est une grille de carreaux, exactement comme ton cahier. Pour créer un motif, elles utilisent (souvent sans les appeler ainsi) les <b>transformations géométriques</b> :</p><ol><li>Elles dessinent <b>un quart</b> du motif, carreau par carreau.</li><li>Elles le <b>retournent</b> par rapport à une droite verticale (<b>symétrie axiale</b>) : chaque carreau va de l'autre côté, à la même distance de l'axe.</li><li>Elles retournent la moitié obtenue par rapport à une droite horizontale : le motif est complet.</li><li>Ensuite, elles le <b>translatent</b> le long du bord du tapis pour faire une bordure.</li></ol><p>Le motif que tu obtiens a <b>deux axes de symétrie</b> et reste identique même si tu le <b>fais tourner de 90°</b> autour du centre.</p><p>🎯 Essaie : sur une feuille quadrillée, dessine ton propre quart de motif dans un carré 6 × 6 et complète-le avec deux symétries. Puis translate le motif pour faire une bordure !</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"30\" x2=\"274\" y2=\"30\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"58\" y1=\"30\" x2=\"58\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"48\" x2=\"274\" y2=\"48\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"76\" y1=\"30\" x2=\"76\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"66\" x2=\"274\" y2=\"66\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"94\" y1=\"30\" x2=\"94\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"84\" x2=\"274\" y2=\"84\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"112\" y1=\"30\" x2=\"112\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"102\" x2=\"274\" y2=\"102\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"120\" x2=\"274\" y2=\"120\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"148\" y1=\"30\" x2=\"148\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"138\" x2=\"274\" y2=\"138\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"166\" y1=\"30\" x2=\"166\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"156\" x2=\"274\" y2=\"156\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"184\" y1=\"30\" x2=\"184\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"174\" x2=\"274\" y2=\"174\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"202\" y1=\"30\" x2=\"202\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"192\" x2=\"274\" y2=\"192\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"220\" y1=\"30\" x2=\"220\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"210\" x2=\"274\" y2=\"210\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"238\" y1=\"30\" x2=\"238\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"228\" x2=\"274\" y2=\"228\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"256\" y1=\"30\" x2=\"256\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"246\" x2=\"274\" y2=\"246\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"274\" y1=\"30\" x2=\"274\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"264\" x2=\"274\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><rect x=\"41\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"131\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"167\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"131\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"167\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"121\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"121\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"157\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"157\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"31\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"247\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"49\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"229\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"67\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"211\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"85\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"193\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"103\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"175\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"121\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"157\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"131\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"167\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><line x1=\"157\" y1=\"20\" x2=\"157\" y2=\"274\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><line x1=\"30\" y1=\"147\" x2=\"284\" y2=\"147\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><text x=\"320\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">Axes de symétrie (bleu) :</text><text x=\"320\" y=\"84\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">plie le long d'un axe et les</text><text x=\"320\" y=\"104\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">deux moitiés coïncident.</text><text x=\"320\" y=\"144\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">Rotation : tourne de 90°</text><text x=\"320\" y=\"168\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">autour du centre et le</text><text x=\"320\" y=\"188\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">motif reste identique.</text><text x=\"320\" y=\"228\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\">Chaque carreau = un point</text><text x=\"320\" y=\"248\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\">de croix sur le tissu.</text></svg>"
    }
   ]
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Les symétries du corps et de la nature",
   "html": "<p>Presque tous les animaux ont une <b>symétrie bilatérale</b> (un axe qui divise le corps en droite et gauche), alors que les étoiles de mer adultes ont une symétrie de rotation d'ordre <b>5</b>. Les flocons de neige ont une symétrie d'ordre <b>6</b>, due à la forme des molécules d'eau qui se lient dans la glace en formant des hexagones.</p>\n<p>Notre visage, cependant, n'est pas parfaitement symétrique : si tu prends une photo et que tu composes un visage avec deux moitiés gauches, il te semblera presque une autre personne !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Felix Klein et la géométrie des transformations",
   "html": "<p>En <b>1872</b>, le mathématicien allemand <b>Felix Klein</b>, à 23 ans, présenta le <b>programme d'Erlangen</b> : l'idée que chaque géométrie peut se définir par les transformations qui <b>ne</b> changent <b>pas</b> certaines propriétés. La géométrie euclidienne étudie ce qui reste égal avec les isométries (longueurs, angles) ; la géométrie des similitudes ce qui reste égal en agrandissant (angles, rapports). Cette idée est à la base de la physique moderne, y compris la relativité d'Einstein.</p>"
  },
  {
   "type": "widget",
   "title": "Classe les transformations",
   "widget": "classify",
   "options": {
    "groups": [
     "Isométrie (même mesure)",
     "Similitude non isométrique (la mesure change)"
    ],
    "items": [
     [
      "🪞 Image dans un miroir",
      0
     ],
     [
      "🎡 Nacelle qui tourne dans la grande roue",
      0
     ],
     [
      "🛗 Ascenseur qui monte",
      0
     ],
     [
      "🗺️ Carte à l'échelle 1:100 000",
      1
     ],
     [
      "📷 Photo imprimée en plus grand format",
      1
     ],
     [
      "🔍 Loupe",
      1
     ],
     [
      "🧩 Pièce de puzzle déplacée",
      0
     ],
     [
      "🏠 Maquette d'une maison",
      1
     ]
    ]
   },
   "caption": "Demande-toi toujours : les longueurs restent-elles égales ?"
  },
  {
   "type": "conceptMap",
   "title": "Carte des transformations : touche les nœuds et découvre le pourquoi",
   "nodes": [
    {
     "id": "trasf",
     "label": "Transformation",
     "x": 50,
     "y": 6,
     "color": "#0ea5e9",
     "html": "Règle qui associe à chaque point P un unique point P'.",
     "why": "L'idée d'étudier les figures à travers les mouvements remonte à Euclide (vers 300 av. J.-C.), qui démontrait l'égalité des triangles en les « superposant ». C'est Felix Klein, en 1872, qui a mis les transformations au centre de toute la géométrie."
    },
    {
     "id": "iso",
     "label": "Isométries",
     "x": 25,
     "y": 28,
     "color": "#16a34a",
     "html": "Transformations qui conservent les longueurs et les angles.",
     "why": "Le nom vient du grec isos (égal) et metron (mesure). Si toutes les distances restent égales, la figure est isométrique : pour Euclide, deux figures sont égales justement si on peut les superposer par un mouvement rigide."
    },
    {
     "id": "simil",
     "label": "Similitudes",
     "x": 75,
     "y": 28,
     "color": "#f59e0b",
     "html": "Transformations qui conservent la forme : angles égaux, côtés proportionnels.",
     "why": "Elles reposent sur le théorème de Thalès (VIᵉ siècle av. J.-C.) : des droites parallèles coupent sur deux sécantes des segments proportionnels. Thalès, selon la tradition, mesura ainsi la hauteur des pyramides à partir de leur ombre."
    },
    {
     "id": "trasl",
     "label": "Translation",
     "x": 8,
     "y": 55,
     "color": "#2563eb",
     "html": "Déplacement de tous les points selon un vecteur.",
     "why": "Le concept de vecteur (grandeur avec norme, direction et sens) a été formalisé au XIXᵉ siècle par des mathématiciens comme Hamilton et Grassmann, en étudiant les forces et les vitesses en physique."
    },
    {
     "id": "rot",
     "label": "Rotation",
     "x": 28,
     "y": 62,
     "color": "#7c3aed",
     "html": "Tour d'un angle α autour d'un centre O.",
     "why": "Elle repose sur le cercle : chaque point reste à la même distance de O. Le sens anti-horaire est positif par convention, la même utilisée en trigonométrie pour mesurer les angles à partir de l'axe x."
    },
    {
     "id": "simass",
     "label": "Symétrie axiale",
     "x": 48,
     "y": 50,
     "color": "#15803d",
     "html": "Retournement par rapport à une droite (axe).",
     "why": "L'axe est le lieu des points équidistants de P et P', c'est-à-dire la médiatrice du segment PP'. En composant au plus trois symétries axiales, on obtient toute isométrie du plan : c'est pourquoi c'est la transformation fondamentale."
    },
    {
     "id": "simcen",
     "label": "Symétrie centrale",
     "x": 40,
     "y": 82,
     "color": "#be123c",
     "html": "Chaque point va de l'autre côté de O à la même distance.",
     "why": "O est le milieu de PP'. Elle équivaut à une rotation de 180° et c'est aussi une homothétie avec k = −1 : c'est le point de rencontre entre les deux familles de transformations."
    },
    {
     "id": "omot",
     "label": "Homothétie (rapport k)",
     "x": 75,
     "y": 58,
     "color": "#ea580c",
     "html": "Agrandissement ou réduction à partir d'un centre O : OP' = k · OP.",
     "why": "C'est le principe de la chambre noire et du projecteur : les rayons de lumière partent d'un point et s'éloignent en ligne droite, ainsi l'image est plus grande si l'écran est plus loin."
    },
    {
     "id": "aree",
     "label": "Périmètres ×k, aires ×k²",
     "x": 82,
     "y": 85,
     "color": "#a16207",
     "html": "Dans les figures semblables, le périmètre change de k, l'aire de k², le volume de k³.",
     "why": "L'aire est un produit de deux longueurs, et chacune est multipliée par k : k · k = k². Pour la même raison, Galilée a observé (1638) qu'un animal géant ne peut pas avoir les mêmes proportions qu'un petit : le poids croît comme k³, la section des os seulement comme k²."
    }
   ],
   "edges": [
    [
     "trasf",
     "iso",
     "conserve les mesures"
    ],
    [
     "trasf",
     "simil",
     "conserve la forme"
    ],
    [
     "iso",
     "trasl",
     ""
    ],
    [
     "iso",
     "rot",
     ""
    ],
    [
     "iso",
     "simass",
     ""
    ],
    [
     "rot",
     "simcen",
     "de 180°"
    ],
    [
     "simass",
     "simcen",
     "deux axes ⊥"
    ],
    [
     "simil",
     "omot",
     "se construit avec"
    ],
    [
     "omot",
     "aree",
     "effets sur"
    ],
    [
     "omot",
     "simcen",
     "avec k = −1"
    ]
   ]
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li><b>Isométries</b> : translation (vecteur), rotation (centre, angle, sens), symétrie axiale (axe), symétrie centrale (centre). Elles conservent longueurs et angles.</li>\n<li>Translation et rotation conservent l'<b>orientation</b> ; la symétrie axiale l'<b>inverse</b>.</li>\n<li><b>Similitude</b> de rapport k : angles égaux, côtés × k, périmètres × k, aires × k².</li>\n<li>Coordonnées : translation (x+a ; y+b) ; symétrie d'axe x (x ; −y) ; axe y (−x ; y) ; centrale en O (−x ; −y) ; rotation +90° (−y ; x).</li>\n</ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : similitude",
   "questions": [
    {
     "type": "num",
     "q": "Un triangle a un périmètre de 15 cm. Un triangle semblable a un rapport de similitude k = 3. Combien mesure son périmètre ?",
     "answer": 45,
     "unit": "cm",
     "explain": "Les périmètres sont dans le rapport k : 15 × 3 = 45 cm."
    },
    {
     "type": "num",
     "q": "Un carré a une aire de 9 cm². Je l'agrandis avec k = 2. Quelle aire a la nouvelle figure ?",
     "answer": 36,
     "unit": "cm²",
     "explain": "Les aires sont dans le rapport k² = 4 : 9 × 4 = 36 cm²."
    },
    {
     "type": "tf",
     "q": "Deux figures semblables ont toujours leurs angles correspondants égaux.",
     "answer": true,
     "explain": "La similitude conserve la forme, c'est-à-dire les angles."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Transformation géométrique",
   "d": "Règle qui associe à chaque point P du plan un unique point P'."
  },
  {
   "t": "Isométrie",
   "d": "Transformation qui conserve les distances : la figure reste isométrique."
  },
  {
   "t": "Vecteur",
   "d": "Segment orienté avec norme, direction et sens ; il décrit une translation."
  },
  {
   "t": "Centre de rotation",
   "d": "Point qui reste fixe dans une rotation."
  },
  {
   "t": "Axe de symétrie",
   "d": "Droite par rapport à laquelle une figure se retourne sur elle-même."
  },
  {
   "t": "Point invariant",
   "d": "Point qui coïncide avec sa propre image."
  },
  {
   "t": "Orientation",
   "d": "Sens (horaire ou anti-horaire) dans lequel on lit les sommets d'une figure."
  },
  {
   "t": "Homothétie",
   "d": "Transformation qui agrandit ou réduit les figures à partir d'un centre avec un rapport k."
  },
  {
   "t": "Rapport de similitude",
   "d": "Nombre k par lequel on multiplie toutes les longueurs d'une figure semblable."
  },
  {
   "t": "Isométriques",
   "d": "Figures superposables, avec les mêmes mesures."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Laquelle de ces transformations N'EST PAS une isométrie ?",
    "options": [
     "Translation",
     "Homothétie avec k = 3",
     "Symétrie centrale",
     "Rotation de 45°"
    ],
    "answer": 1,
    "explain": "L'homothétie avec k = 3 triple les longueurs, donc elle ne conserve pas les distances."
   },
   {
    "type": "mc",
    "q": "Le symétrique de P(3 ; −2) par rapport à l'axe x est…",
    "options": [
     "(−3; −2)",
     "(3; 2)",
     "(−3; 2)",
     "(−2; 3)"
    ],
    "answer": 1,
    "explain": "Dans la symétrie par rapport à l'axe x, le x reste égal et le y change de signe."
   },
   {
    "type": "mc",
    "q": "Le point Q(2 ; 5) tourné de +90° autour de l'origine devient…",
    "options": [
     "(5; 2)",
     "(−5; 2)",
     "(5; −2)",
     "(−2; −5)"
    ],
    "answer": 1,
    "explain": "Règle de la rotation de +90° : (x ; y) → (−y ; x) = (−5 ; 2)."
   },
   {
    "type": "tf",
    "q": "La symétrie axiale conserve l'orientation des figures.",
    "answer": false,
    "explain": "Elle l'inverse : c'est l'effet miroir, la droite devient gauche."
   },
   {
    "type": "tf",
    "q": "Une translation n'a pas de points invariants (si le vecteur n'est pas nul).",
    "answer": true,
    "explain": "Tous les points se déplacent de la même quantité : aucun ne reste fixe."
   },
   {
    "type": "num",
    "q": "Le point A(−1 ; 4) est translaté avec le vecteur v(5 ; −3). Quelle est l'abscisse (x) de A' ?",
    "answer": 4,
    "explain": "x' = −1 + 5 = 4 (et y' = 4 − 3 = 1)."
   },
   {
    "type": "num",
    "q": "Deux rectangles semblables ont un rapport de similitude k = 3. Le plus petit a une aire de 5 cm². Combien mesure l'aire du plus grand ?",
    "answer": 45,
    "unit": "cm²",
    "explain": "Les aires sont dans le rapport k² = 9 : 5 × 9 = 45 cm²."
   },
   {
    "type": "num",
    "q": "Combien d'axes de symétrie a un triangle équilatéral ?",
    "answer": 3,
    "explain": "Chaque hauteur (qui est aussi médiane et bissectrice) est un axe de symétrie."
   },
   {
    "type": "text",
    "q": "Comment s'appelle la transformation qui agrandit ou réduit une figure à partir d'un centre O ?",
    "answer": [
     "homothétie",
     "l'homothétie",
     "homothétie de centre o"
    ],
    "explain": "C'est l'homothétie de rapport k."
   },
   {
    "type": "mc",
    "q": "En composant deux symétries axiales d'axes parallèles distants de 3 cm, on obtient…",
    "options": [
     "une rotation de 3°",
     "une translation de 6 cm",
     "une symétrie centrale",
     "une translation de 3 cm"
    ],
    "answer": 1,
    "explain": "Le résultat est une translation perpendiculaire aux axes de norme double de leur distance : 2 × 3 = 6 cm."
   },
   {
    "type": "order",
    "q": "Classe les figures du plus petit au plus grand nombre d'axes de symétrie.",
    "items": [
     "Triangle scalène (0)",
     "Triangle isocèle (1)",
     "Rectangle (2)",
     "Carré (4)",
     "Cercle (une infinité)"
    ],
    "explain": "0, 1, 2, 4, une infinité."
   },
   {
    "type": "mc",
    "q": "Sur une carte à l'échelle 1:50 000, deux villes sont distantes de 6 cm. Quelle est leur distance réelle ?",
    "options": [
     "300 m",
     "3 km",
     "30 km",
     "50 km"
    ],
    "answer": 1,
    "explain": "6 × 50 000 = 300 000 cm = 3000 m = 3 km."
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
