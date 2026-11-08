TOPIC('fr', {
 "id": "m3-mat-piano-cartesiano",
 "title": "Le plan cartésien",
 "intro": "Bataille navale, cartes, GPS, écrans de jeux vidéo : pour indiquer un point, il suffit d'un <b>couple de nombres</b>. C'est l'idée géniale du <b>plan cartésien</b>, qui unit géométrie et algèbre. Apprenons à utiliser les coordonnées, à calculer des distances et à dessiner des <b>fonctions</b> et des <b>droites</b>.",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "Axes, origine, coordonnées",
   "html": "<p>Le <b>plan cartésien</b> est formé de deux droites numériques <b>perpendiculaires</b> :</p>\n<ul>\n<li>l'<b>axe x</b> (axe des <b>abscisses</b>), horizontal ;</li>\n<li>l'<b>axe y</b> (axe des <b>ordonnées</b>), vertical ;</li>\n<li>ils se coupent à l'<b>origine O(0 ; 0)</b>.</li>\n</ul>\n<p>Chaque point P est repéré par un <b>couple ordonné</b> de nombres, ses <b>coordonnées</b> : <b>P(x ; y)</b>. On lit d'abord l'<b>abscisse</b> (déplacement horizontal), puis l'<b>ordonnée</b> (déplacement vertical). L'ordre compte : A(2 ; 5) et B(5 ; 2) sont des points différents !</p>\n<p>Les axes divisent le plan en <b>quatre quadrants</b>, numérotés dans le sens inverse des aiguilles d'une montre :</p>\n<ul>\n<li>1ᵉʳ quadrant : x &gt; 0, y &gt; 0 &nbsp;(+ ; +)</li>\n<li>2ᵉ quadrant : x &lt; 0, y &gt; 0 &nbsp;(− ; +)</li>\n<li>3ᵉ quadrant : x &lt; 0, y &lt; 0 &nbsp;(− ; −)</li>\n<li>4ᵉ quadrant : x &gt; 0, y &lt; 0 &nbsp;(+ ; −)</li>\n</ul>\n<p>Les points sur l'axe x ont y = 0 ; ceux sur l'axe y ont x = 0.</p>"
  },
  {
   "type": "svg",
   "title": "Le plan cartésien et les quatre quadrants",
   "svg": "<svg viewBox=\"0 0 640 340\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"340\" fill=\"#ffffff\"/>\n<g stroke=\"#e2e8f0\" stroke-width=\"1\">\n<line x1=\"140\" y1=\"20\" x2=\"140\" y2=\"320\"/><line x1=\"180\" y1=\"20\" x2=\"180\" y2=\"320\"/><line x1=\"220\" y1=\"20\" x2=\"220\" y2=\"320\"/><line x1=\"260\" y1=\"20\" x2=\"260\" y2=\"320\"/><line x1=\"300\" y1=\"20\" x2=\"300\" y2=\"320\"/><line x1=\"340\" y1=\"20\" x2=\"340\" y2=\"320\"/><line x1=\"380\" y1=\"20\" x2=\"380\" y2=\"320\"/><line x1=\"420\" y1=\"20\" x2=\"420\" y2=\"320\"/><line x1=\"460\" y1=\"20\" x2=\"460\" y2=\"320\"/><line x1=\"500\" y1=\"20\" x2=\"500\" y2=\"320\"/>\n<line x1=\"100\" y1=\"50\" x2=\"540\" y2=\"50\"/><line x1=\"100\" y1=\"90\" x2=\"540\" y2=\"90\"/><line x1=\"100\" y1=\"130\" x2=\"540\" y2=\"130\"/><line x1=\"100\" y1=\"210\" x2=\"540\" y2=\"210\"/><line x1=\"100\" y1=\"250\" x2=\"540\" y2=\"250\"/><line x1=\"100\" y1=\"290\" x2=\"540\" y2=\"290\"/>\n</g>\n<line x1=\"100\" y1=\"170\" x2=\"545\" y2=\"170\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<polygon points=\"550,170 538,164 538,176\" fill=\"#1f2937\"/>\n<line x1=\"320\" y1=\"325\" x2=\"320\" y2=\"15\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<polygon points=\"320,10 314,22 326,22\" fill=\"#1f2937\"/>\n<text x=\"555\" y=\"190\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">x</text>\n<text x=\"330\" y=\"22\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">y</text>\n<text x=\"305\" y=\"190\" font-size=\"16\" fill=\"#1f2937\">O</text>\n<text x=\"470\" y=\"40\" font-size=\"18\" fill=\"#2563eb\" font-weight=\"bold\">I (+;+)</text>\n<text x=\"120\" y=\"40\" font-size=\"18\" fill=\"#16a34a\" font-weight=\"bold\">II (−;+)</text>\n<text x=\"120\" y=\"315\" font-size=\"18\" fill=\"#dc2626\" font-weight=\"bold\">III (−;−)</text>\n<text x=\"460\" y=\"315\" font-size=\"18\" fill=\"#a855f7\" font-weight=\"bold\">IV (+;−)</text>\n<line x1=\"440\" y1=\"170\" x2=\"440\" y2=\"50\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n<line x1=\"320\" y1=\"50\" x2=\"440\" y2=\"50\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n<circle cx=\"440\" cy=\"50\" r=\"7\" fill=\"#2563eb\"/>\n<text x=\"450\" y=\"75\" font-size=\"17\" fill=\"#2563eb\" font-weight=\"bold\">A(3; 3)</text>\n<circle cx=\"200\" cy=\"90\" r=\"7\" fill=\"#16a34a\"/>\n<text x=\"150\" y=\"80\" font-size=\"17\" fill=\"#16a34a\" font-weight=\"bold\">B(−3; 2)</text>\n<circle cx=\"240\" cy=\"250\" r=\"7\" fill=\"#dc2626\"/>\n<text x=\"180\" y=\"275\" font-size=\"17\" fill=\"#dc2626\" font-weight=\"bold\">C(−2; −2)</text>\n<circle cx=\"480\" cy=\"210\" r=\"7\" fill=\"#a855f7\"/>\n<text x=\"490\" y=\"235\" font-size=\"17\" fill=\"#a855f7\" font-weight=\"bold\">D(4; −1)</text>\n<g font-size=\"13\" fill=\"#475569\" text-anchor=\"middle\"><text x=\"360\" y=\"188\">1</text><text x=\"400\" y=\"188\">2</text><text x=\"440\" y=\"188\">3</text><text x=\"480\" y=\"188\">4</text><text x=\"280\" y=\"188\">−1</text><text x=\"240\" y=\"188\">−2</text><text x=\"200\" y=\"188\">−3</text></g>\n</svg>",
   "caption": "Chaque carré de la grille est une unité. Pour trouver A(3 ; 3) : 3 pas vers la droite, puis 3 vers le haut."
  },
  {
   "type": "text",
   "title": "Distance entre deux points et milieu",
   "html": "<ul>\n<li><b>Segment horizontal</b> (même y) : distance = différence des abscisses en valeur absolue. A(1 ; 4), B(7 ; 4) → AB = |7 − 1| = <b>6</b>.</li>\n<li><b>Segment vertical</b> (même x) : différence des ordonnées. C(2 ; −3), D(2 ; 5) → CD = |5 − (−3)| = <b>8</b>.</li>\n<li><b>Segment oblique</b> : c'est l'hypoténuse d'un triangle rectangle ! On utilise le <b>théorème de Pythagore</b> :<br><b>AB = √[(x₂ − x₁)² + (y₂ − y₁)²]</b>.<br>A(1 ; 2), B(4 ; 6) → AB = √(3² + 4²) = √25 = <b>5</b>.</li>\n<li><b>Milieu</b> M de AB : la moyenne des coordonnées : <b>M((x₁ + x₂)/2 ; (y₁ + y₂)/2)</b>. A(2 ; 1), B(8 ; 5) → M(5 ; 3).</li>\n</ul>\n<p>Avec les coordonnées, on peut calculer des <b>périmètres et des aires</b> de polygones dessinés dans le plan.</p>"
  },
  {
   "type": "widget",
   "title": "Pythagore dans le plan",
   "widget": "pythagoras",
   "options": {},
   "caption": "Les côtés de l'angle droit sont les déplacements horizontal (Δx) et vertical (Δy) entre les deux points ; l'hypoténuse est leur distance."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : coordonnées et distances",
   "questions": [
    {
     "type": "mc",
     "q": "Dans quel quadrant se trouve P(−4 ; 7) ?",
     "options": [
      "I",
      "II",
      "III",
      "IV"
     ],
     "answer": 1,
     "explain": "x négatif et y positif : 2ᵉ quadrant."
    },
    {
     "type": "num",
     "q": "Distance entre A(−2 ; 3) et B(6 ; 3) ?",
     "answer": 8,
     "explain": "Même ordonnée : |6 − (−2)| = 8."
    },
    {
     "type": "num",
     "q": "Distance entre O(0 ; 0) et P(6 ; 8) ?",
     "answer": 10,
     "explain": "√(36 + 64) = √100 = 10."
    }
   ]
  },
  {
   "type": "text",
   "title": "Les fonctions et leurs graphiques",
   "html": "<p>Une <b>fonction</b> est une relation qui, à chaque valeur de <b>x</b>, associe <b>une et une seule</b> valeur de <b>y</b>. On écrit <b>y = f(x)</b>. Pour la dessiner : construis un <b>tableau</b> de valeurs (x ; y), place les points dans le plan et relie-les.</p>\n<ul>\n<li><b>Proportionnalité directe</b> <b>y = kx</b> : si x double, y double. Le graphique est une <b>droite passant par l'origine</b>. Exemple : coût = 2 € × nombre de cahiers.</li>\n<li><b>Proportionnalité inverse</b> <b>y = k/x</b> : si x double, y est divisé par deux (xy = k constant). Le graphique est une <b>branche d'hyperbole</b>. Exemple : durée d'un voyage de 120 km = 120 / vitesse.</li>\n<li><b>Fonction affine</b> <b>y = mx + q</b> : le graphique est une <b>droite</b>. Exemple : taxi avec 3 € de prise en charge et 1,50 € au km → y = 1,5x + 3.</li>\n<li><b>Fonction quadratique</b> <b>y = ax²</b> : le graphique est une <b>parabole</b> de sommet l'origine. Exemple : aire du carré en fonction du côté.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "La droite : y = mx + q",
   "html": "<ul>\n<li><b>m</b> est le <b>coefficient directeur</b> (pente) : de combien y monte quand x augmente de 1. Si m &gt; 0 la droite <b>monte</b>, si m &lt; 0 elle <b>descend</b>, si m = 0 elle est <b>horizontale</b>. On le calcule avec deux points : <b>m = (y₂ − y₁) / (x₂ − x₁)</b>.</li>\n<li><b>q</b> est l'<b>ordonnée à l'origine</b> : le point où la droite coupe l'axe y, c'est-à-dire (0 ; q).</li>\n<li>Cas particuliers : <b>y = k</b> est une droite horizontale ; <b>x = k</b> est une droite verticale (ce n'est pas une fonction !) ; l'axe x a pour équation y = 0, l'axe y x = 0 ; <b>y = x</b> est la bissectrice des 1ᵉʳ et 3ᵉ quadrants.</li>\n<li>Droites <b>parallèles</b> : même m (y = 2x + 1 et y = 2x − 5).</li>\n<li>Droites <b>perpendiculaires</b> : m · m′ = −1 (y = 2x et y = −½x + 3).</li>\n<li>Un point <b>appartient</b> à une droite si ses coordonnées vérifient son équation : P(2 ; 7) est-il sur y = 3x + 1 ? 3·2 + 1 = 7 ✔️</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "Droites comparées",
   "svg": "<svg viewBox=\"0 0 640 340\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"340\" fill=\"#f8fafc\"/>\n<line x1=\"60\" y1=\"190\" x2=\"440\" y2=\"190\" stroke=\"#1f2937\" stroke-width=\"2\"/>\n<line x1=\"250\" y1=\"330\" x2=\"250\" y2=\"10\" stroke=\"#1f2937\" stroke-width=\"2\"/>\n<text x=\"445\" y=\"195\" font-size=\"16\">x</text><text x=\"256\" y=\"20\" font-size=\"16\">y</text>\n<line x1=\"170\" y1=\"350\" x2=\"350\" y2=\"-10\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<line x1=\"130\" y1=\"350\" x2=\"290\" y2=\"30\" stroke=\"#60a5fa\" stroke-width=\"4\" stroke-dasharray=\"10 6\"/>\n<line x1=\"60\" y1=\"95\" x2=\"440\" y2=\"285\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<line x1=\"60\" y1=\"110\" x2=\"440\" y2=\"110\" stroke=\"#16a34a\" stroke-width=\"4\"/>\n<circle cx=\"250\" cy=\"190\" r=\"6\" fill=\"#1f2937\"/>\n<circle cx=\"250\" cy=\"110\" r=\"6\" fill=\"#16a34a\"/>\n<text x=\"460\" y=\"60\" font-size=\"18\" fill=\"#2563eb\" font-weight=\"bold\">y = 2x  (monte, passe par O)</text>\n<text x=\"460\" y=\"95\" font-size=\"18\" fill=\"#60a5fa\" font-weight=\"bold\">y = 2x + 2  (parallèle)</text>\n<text x=\"460\" y=\"130\" font-size=\"18\" fill=\"#dc2626\" font-weight=\"bold\">y = −½x  (descend,</text>\n<text x=\"478\" y=\"152\" font-size=\"18\" fill=\"#dc2626\" font-weight=\"bold\">perpendiculaire à y = 2x)</text>\n<text x=\"460\" y=\"190\" font-size=\"18\" fill=\"#16a34a\" font-weight=\"bold\">y = 2  (horizontale, m = 0)</text>\n<text x=\"460\" y=\"240\" font-size=\"15\" fill=\"#475569\">1 carreau = 40 px</text>\n</svg>",
   "caption": "Les deux droites bleues ont la même pente m = 2 : elles sont parallèles. La rouge a m = −½ : 2 · (−½) = −1, donc elle est perpendiculaire aux bleues."
  },
  {
   "type": "example",
   "title": "Exemple pratique : deux abonnements comparés",
   "html": "<p>Salle de sport A : <b>30 € d'inscription + 20 € par mois</b>. Salle de sport B : <b>pas d'inscription, 26 € par mois</b>.</p>\n<ul>\n<li>A : y = 20x + 30 &nbsp;&nbsp; B : y = 26x</li>\n<li>Quand coûtent-elles pareil ? 20x + 30 = 26x → 6x = 30 → <b>x = 5 mois</b> (coût 130 €).</li>\n<li>Sur le graphique, c'est le point où les deux droites se <b>croisent</b> : (5 ; 130). Avant 5 mois, B est plus avantageuse, après c'est A.</li>\n</ul>\n<table><tr><th>mois</th><th>1</th><th>3</th><th>5</th><th>8</th><th>12</th></tr><tr><td>A</td><td>50</td><td>90</td><td>130</td><td>190</td><td>270</td></tr><tr><td>B</td><td>26</td><td>78</td><td>130</td><td>208</td><td>312</td></tr></table>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : un polygone dans le plan",
   "html": "<p>Dessine les points A(1 ; 1), B(7 ; 1), C(7 ; 5), D(1 ; 5).</p>\n<ul>\n<li>C'est un <b>rectangle</b> : AB = 7 − 1 = 6, BC = 5 − 1 = 4.</li>\n<li>Périmètre = 2·(6 + 4) = <b>20</b> unités ; Aire = 6 · 4 = <b>24</b> unités².</li>\n<li>Diagonale AC = √(6² + 4²) = √52 ≈ <b>7,21</b>.</li>\n<li>Centre (milieu de AC) = ((1 + 7)/2 ; (1 + 5)/2) = <b>(4 ; 3)</b>.</li>\n</ul>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Descartes et la mouche",
   "html": "<p>Le plan porte le nom du philosophe et mathématicien français <b>René Descartes</b> (en latin <i>Cartesius</i>, 1596–1650), qui le décrivit dans <i>La Géométrie</i>, un appendice du <i>Discours de la méthode</i> (1637). Une légende raconte qu'il eut l'idée au lit, en observant une <b>mouche</b> au plafond et en se demandant comment décrire sa position avec deux nombres : les distances à deux murs ! À la même époque, un autre Français y parvint de façon indépendante : <b>Pierre de Fermat</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Des coordonnées partout",
   "html": "<ul>\n<li>L'<b>écran</b> sur lequel tu lis est une grille de pixels avec des coordonnées : mais dans les ordinateurs, l'origine est <b>en haut à gauche</b> et y augmente vers le bas !</li>\n<li>Le <b>GPS</b> utilise la latitude et la longitude : des coordonnées sur une sphère. Rome est à peu près à (41,9° N ; 12,5° E).</li>\n<li>Les <b>échecs</b> utilisent des coordonnées : « Cavalier en f3 » = colonne f, rangée 3.</li>\n<li>Beaucoup de villes sont construites en damier, comme <b>Manhattan</b> (plan de 1811) ou le centre de <b>Turin</b>, qui conserve le plan orthogonal du castrum romain d'<i>Augusta Taurinorum</i>.</li>\n</ul>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>P(x ; y) : d'abord l'abscisse (horizontale), puis l'ordonnée (verticale).</li>\n<li>Distance : AB = √[(Δx)² + (Δy)²] ; milieu = moyenne des coordonnées.</li>\n<li>y = kx → droite passant par l'origine (proportionnalité directe) ; y = k/x → hyperbole (proportionnalité inverse).</li>\n<li>y = mx + q : m = pente, q = ordonnée à l'origine. Parallèles : même m. Perpendiculaires : m·m′ = −1.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre le plan cartésien",
   "intro": "Si les axes et les formules te paraissent abstraits, essaie avec un jeu, avec le globe terrestre ou avec un escalier.",
   "tabs": [
    {
     "label": "🚢 Bataille navale",
     "html": "<p>À la <b>bataille navale</b>, tu dis « B5 » : une <b>colonne</b> (lettre) et une <b>ligne</b> (nombre). C'est bien un couple de coordonnées !</p>\n<p>Dans le plan cartésien, c'est pareil, mais : les colonnes sont des nombres (même négatifs), l'origine est au centre, et on dit d'abord <b>x</b> (colonne) puis <b>y</b> (ligne). Astuce pour retenir l'ordre : « <b>d'abord tu marches, ensuite tu montes l'escalier</b> » (d'abord l'horizontale, puis la verticale), ou bien « x vient avant y dans l'alphabet ».</p>\n<p>Joue avec un ami : dessinez une grille de −5 à 5 et cachez 3 bateaux. « Tirez » avec des couples comme (−2 ; 3) !</p>"
    },
    {
     "label": "🌍 Les coordonnées de la Terre",
     "html": "<p>La Terre utilise un « plan cartésien » enroulé sur une sphère : la <b>longitude</b> (est-ouest, comme x) et la <b>latitude</b> (nord-sud, comme y). L'« origine » est le croisement entre l'<b>équateur</b> et le <b>méridien de Greenwich</b>, au milieu de l'océan Atlantique, dans le golfe de Guinée.</p>\n<p>Les quatre « quadrants » sont : Nord-Est (Italie), Nord-Ouest (États-Unis), Sud-Ouest (Brésil), Sud-Est (Australie). Fais tourner le globe et trouve les points.</p>",
     "scene": "globe",
     "options": {
      "points": [
       {
        "lat": 0,
        "lon": 0,
        "label": "Origine (0° ; 0°)",
        "color": "#1f2937"
       },
       {
        "lat": 41.9,
        "lon": 12.5,
        "label": "Rome (N ; E)",
        "color": "#2563eb"
       },
       {
        "lat": 40.7,
        "lon": -74,
        "label": "New York (N ; O)",
        "color": "#16a34a"
       },
       {
        "lat": -22.9,
        "lon": -43.2,
        "label": "Rio de Janeiro (S ; O)",
        "color": "#dc2626"
       },
       {
        "lat": -33.9,
        "lon": 151.2,
        "label": "Sydney (S ; E)",
        "color": "#a855f7"
       }
      ]
     }
    },
    {
     "label": "🪜 La pente comme un escalier",
     "html": "<p>Le coefficient directeur <b>m</b> est comme la <b>pente d'un escalier ou d'une route</b> : « de combien tu montes pour chaque pas en avant ».</p>\n<ul>\n<li>m = 1 : pour chaque pas en avant, tu montes de 1 (pente de 100 %, 45°).</li>\n<li>m = 0,1 : pour chaque 10 m en avant, tu montes de 1 m : c'est la pente de <b>10 %</b> des panneaux routiers !</li>\n<li>m négatif : la route descend.</li>\n</ul>\n<p>Aux États-Unis, on l'enseigne avec la formule « <b>rise over run</b> » : montée divisée par déplacement horizontal, m = Δy / Δx.</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#f0fdf4\"/>\n<path d=\"M60 210 L140 210 L140 170 L220 170 L220 130 L300 130 L300 90 L380 90 L380 50\" fill=\"none\" stroke=\"#166534\" stroke-width=\"5\"/>\n<line x1=\"60\" y1=\"210\" x2=\"380\" y2=\"50\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n<text x=\"100\" y=\"232\" font-size=\"16\" text-anchor=\"middle\" fill=\"#b45309\">run = 2</text>\n<text x=\"165\" y=\"195\" font-size=\"16\" fill=\"#dc2626\">rise = 1</text>\n<text x=\"430\" y=\"110\" font-size=\"22\" fill=\"#1f2937\" font-weight=\"bold\">m = rise / run</text>\n<text x=\"430\" y=\"145\" font-size=\"22\" fill=\"#2563eb\" font-weight=\"bold\">= 1/2</text>\n</svg>"
    },
    {
     "label": "🔗 Associe équation et graphique",
     "html": "<p>Relie chaque équation à la description de son graphique.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "y = 3x",
        "droite passant par l'origine qui monte"
       ],
       [
        "y = −2x + 4",
        "droite qui descend et coupe l'axe y en 4"
       ],
       [
        "y = 5",
        "droite horizontale"
       ],
       [
        "x = −1",
        "droite verticale"
       ],
       [
        "y = 12/x",
        "hyperbole (proportionnalité inverse)"
       ],
       [
        "y = x²",
        "parabole de sommet O"
       ]
      ]
     }
    },
    {
     "label": "🇬🇧 « Along the corridor, then up the stairs » (Angleterre)",
     "html": "<p>Laquelle est x et laquelle est y ? En <b>Angleterre</b>, les élèves s'en souviennent avec une phrase : <b>« along the corridor, then up the stairs »</b>, c'est-à-dire <b>« d'abord le long du couloir, puis en haut de l'escalier »</b>.</p><ol><li>Pars de l'<b>origine</b> O, comme si tu étais à l'entrée d'un immeuble.</li><li><b>D'abord</b> tu marches le long du couloir : c'est <b>x</b> (horizontal). Au point (3 ; 5), tu fais 3 pas vers la droite.</li><li><b>Ensuite</b> tu montes l'escalier : c'est <b>y</b> (vertical). Tu montes 5 marches.</li></ol><p>Tu ne peux pas monter l'escalier avant d'être arrivé au bon endroit du couloir : c'est pourquoi <b>x vient toujours en premier</b>. Et les négatifs ? Au point (−2 ; −4), le couloir va vers la <b>gauche</b> et l'escalier descend <b>à la cave</b> !</p><p>🎯 Où arrives-tu avec (−3 ; 2) ? Et avec (4 ; −1) ? Dans quel quadrant se trouve chaque point ?</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><line x1=\"30\" y1=\"20\" x2=\"30\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"98\" y1=\"20\" x2=\"98\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"132\" y1=\"20\" x2=\"132\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"166\" y1=\"20\" x2=\"166\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"200\" y1=\"20\" x2=\"200\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"234\" y1=\"20\" x2=\"234\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"268\" y1=\"20\" x2=\"268\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"302\" y1=\"20\" x2=\"302\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"336\" y1=\"20\" x2=\"336\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"370\" y1=\"20\" x2=\"370\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"404\" y1=\"20\" x2=\"404\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"438\" y1=\"20\" x2=\"438\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"472\" y1=\"20\" x2=\"472\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"506\" y1=\"20\" x2=\"506\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"540\" y1=\"20\" x2=\"540\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"284\" x2=\"560\" y2=\"284\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"250\" x2=\"560\" y2=\"250\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"216\" x2=\"560\" y2=\"216\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"182\" x2=\"560\" y2=\"182\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"148\" x2=\"560\" y2=\"148\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"114\" x2=\"560\" y2=\"114\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"80\" x2=\"560\" y2=\"80\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"46\" x2=\"560\" y2=\"46\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"250\" x2=\"560\" y2=\"250\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"200\" y1=\"290\" x2=\"200\" y2=\"20\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"565\" y=\"255\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">x</text><text x=\"206\" y=\"24\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">y</text><line x1=\"200\" y1=\"246\" x2=\"302\" y2=\"246\" stroke=\"#16a34a\" stroke-width=\"8\"/><line x1=\"302\" y1=\"250\" x2=\"302\" y2=\"80\" stroke=\"#ea580c\" stroke-width=\"5\"/><line x1=\"292\" y1=\"216\" x2=\"312\" y2=\"216\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"182\" x2=\"312\" y2=\"182\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"148\" x2=\"312\" y2=\"148\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"114\" x2=\"312\" y2=\"114\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"80\" x2=\"312\" y2=\"80\" stroke=\"#ea580c\" stroke-width=\"4\"/><circle cx=\"302\" cy=\"80\" r=\"8\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"2\"/><text x=\"316\" y=\"74\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">(3; 5)</text><text x=\"222\" y=\"280\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">1) along the corridor →</text><text x=\"340\" y=\"150\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#ea580c\" font-weight=\"bold\">2) up the stairs ↑</text><circle cx=\"200\" cy=\"250\" r=\"5\" fill=\"#334155\" stroke=\"none\" stroke-width=\"2\"/><text x=\"182\" y=\"270\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">O</text></svg>"
    },
    {
     "label": "🇺🇸 La pente « rise over run » (États-Unis)",
     "html": "<p>Aux <b>États-Unis</b>, le coefficient directeur m (la <b>pente</b>, en anglais <i>slope</i>) s'apprend avec une comptine : <b>« rise over run »</b>, c'est-à-dire « la montée sur le déplacement horizontal ».</p><ul><li><b>run</b> = de combien tu te déplaces à l'horizontale (différence des x) ;</li><li><b>rise</b> = de combien tu montes à la verticale (différence des y) ;</li><li><b>m = rise : run</b>.</li></ul><p><b>Exemple</b> : la droite passe par A(1 ; 2) et B(5 ; 4).</p><ol><li>run = 5 − 1 = <b>4</b></li><li>rise = 4 − 2 = <b>2</b></li><li>m = 2 / 4 = <b>1/2</b> : pour chaque pas en avant, tu montes d'un demi-carreau.</li><li>Trouve q avec le point A : 2 = ½ · 1 + q → q = 3/2. La droite est <b>y = ½x + 3/2</b>. Contrôle avec B : ½ · 5 + 3/2 = 4 ✔</li></ol><p>Cas particuliers : si la droite <b>descend</b>, le rise est <b>négatif</b> et m &lt; 0 ; si elle est <b>horizontale</b>, rise = 0 et m = 0 ; si elle est <b>verticale</b>, run = 0 et on ne peut pas diviser par zéro : la pente n'existe pas.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><line x1=\"80\" y1=\"10\" x2=\"80\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"140\" y1=\"10\" x2=\"140\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"200\" y1=\"10\" x2=\"200\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"260\" y1=\"10\" x2=\"260\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"320\" y1=\"10\" x2=\"320\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"380\" y1=\"10\" x2=\"380\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"440\" y1=\"10\" x2=\"440\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"500\" y1=\"10\" x2=\"500\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"260\" x2=\"520\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"210\" x2=\"520\" y2=\"210\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"160\" x2=\"520\" y2=\"160\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"110\" x2=\"520\" y2=\"110\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"60\" x2=\"520\" y2=\"60\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"10\" x2=\"520\" y2=\"10\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"260\" x2=\"530\" y2=\"260\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"80\" y1=\"270\" x2=\"80\" y2=\"5\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"140\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">1</text><text x=\"200\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">2</text><text x=\"260\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">3</text><text x=\"320\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">4</text><text x=\"380\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">5</text><text x=\"440\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">6</text><text x=\"500\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">7</text><text x=\"68\" y=\"215\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">1</text><text x=\"68\" y=\"165\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">2</text><text x=\"68\" y=\"115\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">3</text><text x=\"68\" y=\"65\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">4</text><text x=\"68\" y=\"15\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">5</text><line x1=\"80\" y1=\"185\" x2=\"500\" y2=\"10\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"140\" y1=\"160\" x2=\"380\" y2=\"160\" stroke=\"#16a34a\" stroke-width=\"5\"/><line x1=\"380\" y1=\"160\" x2=\"380\" y2=\"60\" stroke=\"#ea580c\" stroke-width=\"5\"/><circle cx=\"140\" cy=\"160\" r=\"7\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"380\" cy=\"60\" r=\"7\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><text x=\"130\" y=\"146\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\" font-weight=\"bold\">A(1; 2)</text><text x=\"366\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\" font-weight=\"bold\">B(5; 4)</text><text x=\"260\" y=\"184\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#16a34a\" text-anchor=\"middle\" font-weight=\"bold\">run = 4</text><text x=\"390\" y=\"115\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#ea580c\" font-weight=\"bold\">rise = 2</text><text x=\"380\" y=\"200\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">m = rise / run</text><text x=\"380\" y=\"226\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">m = 2 / 4 = 1/2</text></svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte du plan cartésien",
   "nodes": [
    {
     "id": "retta",
     "label": "Droite numérique",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "Une droite avec une origine, un sens et une unité : chaque point est un nombre.",
     "why": "Elle vient des nombres relatifs : une seule droite suffit pour une dimension. Pour le plan, il en faut deux."
    },
    {
     "id": "piano",
     "label": "Plan cartésien",
     "x": 50,
     "y": 26,
     "color": "#2563eb",
     "html": "Deux droites numériques perpendiculaires qui se coupent à l'origine.",
     "why": "Décrit par Descartes dans <i>La Géométrie</i> (1637) et, de façon indépendante, par Fermat. Les Anciens utilisaient déjà quelque chose de semblable : Ptolémée (IIᵉ siècle) donnait la latitude et la longitude des villes."
    },
    {
     "id": "coordinate",
     "label": "Coordonnées P(x ; y)",
     "x": 18,
     "y": 46,
     "color": "#16a34a",
     "html": "Abscisse et ordonnée : la « carte d'identité » d'un point.",
     "why": "« Abscisse » vient du latin <i>abscissa</i>, « coupée » (un segment coupé sur l'axe) ; « coordonnées » fut utilisé par Leibniz en 1692."
    },
    {
     "id": "quadranti",
     "label": "Quadrants",
     "x": 10,
     "y": 70,
     "color": "#22c55e",
     "html": "Les 4 régions du plan, avec les signes (+ ; +), (− ; +), (− ; −), (+ ; −).",
     "why": "Ils sont une conséquence des nombres relatifs sur les axes ; on les numérote dans le sens inverse des aiguilles d'une montre, le même sens dans lequel on mesure les angles en mathématiques."
    },
    {
     "id": "distanza",
     "label": "Distance et milieu",
     "x": 36,
     "y": 72,
     "color": "#f59e0b",
     "html": "AB = √[(Δx)² + (Δy)²] ; M = moyenne des coordonnées.",
     "why": "La formule de la distance est le théorème de Pythagore (VIᵉ siècle av. J.-C.) appliqué au triangle rectangle formé par les déplacements horizontal et vertical."
    },
    {
     "id": "funzioni",
     "label": "Fonctions y = f(x)",
     "x": 72,
     "y": 46,
     "color": "#a855f7",
     "html": "À chaque x correspond un seul y ; le graphique est l'ensemble des points (x ; f(x)).",
     "why": "Le terme « fonction » fut introduit par Leibniz (1673) et la notation f(x) par Euler (1734). Le plan cartésien permet de « voir » une loi numérique."
    },
    {
     "id": "rette",
     "label": "Droites y = mx + q",
     "x": 64,
     "y": 72,
     "color": "#ef4444",
     "html": "m = pente, q = ordonnée à l'origine. Parallèles : même m ; perpendiculaires : m·m′ = −1.",
     "why": "Toute équation du premier degré en x et y a pour graphique une droite : c'est la grande découverte de Descartes, qui transforme des problèmes géométriques en équations."
    },
    {
     "id": "proporzionalita",
     "label": "Proportionnalité",
     "x": 88,
     "y": 70,
     "color": "#0ea5e9",
     "html": "Directe y = kx (droite passant par O) ; inverse y = k/x (hyperbole).",
     "why": "Elle relie le plan aux proportions étudiées en classe de cinquième : la constante k est le rapport (directe) ou le produit (inverse) entre x et y."
    },
    {
     "id": "applicazioni",
     "label": "Applications",
     "x": 50,
     "y": 92,
     "color": "#14b8a6",
     "html": "GPS, écrans, graphiques scientifiques et économiques, jeux vidéo, robotique.",
     "why": "Chaque fois qu'une position ou une relation entre deux grandeurs doit être décrite avec des nombres, on utilise des coordonnées : des pixels aux cartes numériques."
    }
   ],
   "edges": [
    [
     "retta",
     "piano",
     "deux perpendiculaires"
    ],
    [
     "piano",
     "coordinate",
     "chaque point a des"
    ],
    [
     "coordinate",
     "quadranti",
     "le signe indique le"
    ],
    [
     "coordinate",
     "distanza",
     "permettent de calculer la"
    ],
    [
     "piano",
     "funzioni",
     "représente une"
    ],
    [
     "funzioni",
     "rette",
     "affines"
    ],
    [
     "funzioni",
     "proporzionalita",
     "cas"
    ],
    [
     "rette",
     "applicazioni",
     "modélisent des"
    ],
    [
     "distanza",
     "applicazioni",
     "utilisée dans les"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : droites et fonctions",
   "questions": [
    {
     "type": "mc",
     "q": "La droite y = −3x + 2 coupe l'axe y au point…",
     "options": [
      "(0; 2)",
      "(2; 0)",
      "(0; −3)"
     ],
     "answer": 0,
     "explain": "L'ordonnée à l'origine q = 2 : point (0 ; 2)."
    },
    {
     "type": "mc",
     "q": "Quelle droite est parallèle à y = 4x − 1 ?",
     "options": [
      "y = −4x + 1",
      "y = 4x + 7",
      "y = ¼x"
     ],
     "answer": 1,
     "explain": "Les droites parallèles ont le même coefficient directeur m = 4."
    },
    {
     "type": "tf",
     "q": "Le point P(3 ; 10) appartient à la droite y = 3x + 1.",
     "answer": true,
     "explain": "3·3 + 1 = 10 ✔️"
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Plan cartésien",
   "d": "Plan avec deux axes numériques perpendiculaires qui se coupent à l'origine."
  },
  {
   "t": "Abscisse",
   "d": "La première coordonnée (x) : déplacement horizontal."
  },
  {
   "t": "Ordonnée",
   "d": "La seconde coordonnée (y) : déplacement vertical."
  },
  {
   "t": "Origine",
   "d": "Le point O(0 ; 0), croisement des axes."
  },
  {
   "t": "Quadrant",
   "d": "Chacune des quatre parties dans lesquelles les axes divisent le plan."
  },
  {
   "t": "Fonction",
   "d": "Relation qui, à chaque x, associe un et un seul y."
  },
  {
   "t": "Coefficient directeur",
   "d": "Le nombre m dans y = mx + q : il indique la pente de la droite."
  },
  {
   "t": "Ordonnée à l'origine",
   "d": "Le nombre q dans y = mx + q : l'endroit où la droite coupe l'axe y."
  },
  {
   "t": "Hyperbole",
   "d": "Le graphique de la proportionnalité inverse y = k/x."
  },
  {
   "t": "Parabole",
   "d": "Le graphique de y = ax²."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Le point (0 ; −5) se trouve…",
    "options": [
     "sur l'axe x",
     "sur l'axe y",
     "dans le 4ᵉ quadrant"
    ],
    "answer": 1,
    "explain": "x = 0 : le point est sur l'axe y."
   },
   {
    "type": "mc",
    "q": "Dans quel quadrant les points ont-ils x > 0 et y < 0 ?",
    "options": [
     "I",
     "II",
     "III",
     "IV"
    ],
    "answer": 3,
    "explain": "(+ ; −) : 4ᵉ quadrant."
   },
   {
    "type": "num",
    "q": "Distance entre A(1 ; 1) et B(4 ; 5) ?",
    "answer": 5,
    "explain": "√(3² + 4²) = √25 = 5."
   },
   {
    "type": "mc",
    "q": "Milieu de A(−2 ; 4) et B(6 ; 0) ?",
    "options": [
     "(2; 2)",
     "(4; 4)",
     "(2; 4)"
    ],
    "answer": 0,
    "explain": "((−2 + 6)/2; (4 + 0)/2) = (2; 2)."
   },
   {
    "type": "num",
    "q": "Coefficient directeur de la droite passant par A(1 ; 3) et B(3 ; 11) ?",
    "answer": 4,
    "explain": "m = (11 − 3)/(3 − 1) = 8/2 = 4."
   },
   {
    "type": "tf",
    "q": "Le graphique de y = 5x passe par l'origine.",
    "answer": true,
    "explain": "Pour x = 0, y = 0 : proportionnalité directe."
   },
   {
    "type": "mc",
    "q": "y = 24/x représente…",
    "options": [
     "une proportionnalité directe",
     "une proportionnalité inverse",
     "une parabole"
    ],
    "answer": 1,
    "explain": "xy = 24 constant : proportionnalité inverse (hyperbole)."
   },
   {
    "type": "mc",
    "q": "Quelle droite est perpendiculaire à y = 3x ?",
    "options": [
     "y = 3x + 1",
     "y = −⅓x",
     "y = −3x"
    ],
    "answer": 1,
    "explain": "3 · (−⅓) = −1."
   },
   {
    "type": "num",
    "q": "Pour quelle valeur de x la droite y = 2x − 8 coupe-t-elle l'axe x ?",
    "answer": 4,
    "explain": "y = 0 → 2x = 8 → x = 4."
   },
   {
    "type": "num",
    "q": "Aire du triangle de sommets O(0 ; 0), A(6 ; 0), B(0 ; 4) ?",
    "answer": 12,
    "explain": "Triangle rectangle de côtés de l'angle droit 6 et 4 : 6·4/2 = 12."
   },
   {
    "type": "text",
    "q": "Comment s'appelle la première coordonnée d'un point ?",
    "answer": [
     "abscisse",
     "l'abscisse"
    ],
    "explain": "Abscisse (x) ; la seconde est l'ordonnée (y)."
   }
  ],
  "gen": [
   [
    "pythagoras",
    2
   ]
  ]
 }
});
