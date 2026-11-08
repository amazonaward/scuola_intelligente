TOPIC('fr', {
 "id": "m2-tec-proiezioni-ortogonali",
 "title": "Les projections orthogonales",
 "intro": "Comment expliquer à un menuisier, à un mécanicien ou à une imprimante 3D la forme d'un objet <b>en trois dimensions</b> en utilisant seulement une feuille <b>plate</b> ? Avec les <b>projections orthogonales</b> : le même objet dessiné <b>vu de face, de dessus et de côté</b>, avec des règles précises que tous les techniciens du monde comprennent.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "Ce que c'est",
   "html": "<p><b>Projeter</b> signifie « jeter en avant » : imagine de projeter l'ombre d'un objet sur un mur. Dans la projection <b>orthogonale</b>, les rayons de projection sont <b>parallèles</b> entre eux et <b>perpendiculaires</b> (c'est-à-dire à 90°, « orthogonaux ») au plan sur lequel on dessine.</p>\n<p>Le résultat est un dessin dans lequel les faces parallèles au plan apparaissent en <b>vraie forme et vraie grandeur</b> (à l'échelle) : pas de perspective, pas de déformations. C'est pourquoi on peut les <b>mesurer</b>.</p>\n<p>Mais une seule vue ne suffit pas : un cube et un cylindre, vus de face, peuvent tous les deux ressembler à un carré ! C'est pourquoi on utilise <b>trois plans</b> perpendiculaires entre eux, qui forment un coin comme celui d'une pièce (le <b>trièdre</b>) :</p>\n<ul>\n<li><b>P.V. – plan vertical</b> : il reçoit la <b>vue de face</b> ;</li>\n<li><b>P.H. – plan horizontal</b> : il reçoit la <b>vue de dessus</b> ;</li>\n<li><b>P.P. – plan de profil</b> : il reçoit la <b>vue de côté</b> (ou <b>vue de gauche</b>, <b>profil</b>).</li>\n</ul>\n<p>La droite où se rencontrent le P.V. et le P.H. s'appelle la <b>ligne de terre</b> (L.T.).</p>"
  },
  {
   "type": "widget",
   "title": "Reconnais les plans du trièdre",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<polygon points=\"120,30 420,30 420,190 120,190\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<polygon points=\"120,190 420,190 350,300 50,300\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"3\"/>\n<polygon points=\"420,30 420,190 350,300 350,140\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<line x1=\"120\" y1=\"190\" x2=\"420\" y2=\"190\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<polygon points=\"200,210 270,210 270,250 200,250\" fill=\"#fb923c\" stroke=\"#9a3412\" stroke-width=\"2\"/>\n<polygon points=\"200,210 270,210 290,180 220,180\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"2\"/>\n<polygon points=\"270,210 290,180 290,220 270,250\" fill=\"#ea580c\" stroke=\"#9a3412\" stroke-width=\"2\"/>\n<text x=\"500\" y=\"80\" font-size=\"16\" fill=\"#334155\">touche les cercles</text>\n<text x=\"500\" y=\"100\" font-size=\"16\" fill=\"#334155\">et choisis le nom</text>\n</svg>",
    "spots": [
     {
      "x": 260,
      "y": 100,
      "label": "Plan vertical (P.V.)"
     },
     {
      "x": 130,
      "y": 270,
      "label": "Plan horizontal (P.H.)"
     },
     {
      "x": 385,
      "y": 160,
      "label": "Plan de profil (P.P.)"
     },
     {
      "x": 160,
      "y": 190,
      "label": "Ligne de terre (L.T.)"
     },
     {
      "x": 240,
      "y": 230,
      "label": "Objet à représenter"
     }
    ]
   },
   "caption": "Les trois plans forment un coin comme les murs et le sol d'une pièce. On place l'objet dans le coin et on le « projette » sur chaque plan."
  },
  {
   "type": "text",
   "title": "La méthode pas à pas",
   "html": "<ol>\n<li><b>Observe l'objet</b> et choisis la face la plus significative comme <b>vue de face</b> (celle qui montre le mieux la forme).</li>\n<li>Trace au crayon léger la <b>ligne de terre</b> horizontale et une ligne verticale : elles divisent la feuille en quatre quadrants.</li>\n<li>Dans le quadrant <b>en haut à gauche</b>, dessine la <b>vue de face</b> (P.V.), en mesurant la largeur et la hauteur.</li>\n<li><b>Sous</b> la vue de face, dessine la <b>vue de dessus</b> (P.H.) : la largeur (identique à celle de la vue de face, tu la reportes avec des lignes verticales) et la profondeur.</li>\n<li><b>À droite</b> de la vue de face, dessine la <b>vue de gauche</b> (P.P.) : la hauteur (tu la reportes avec des lignes horizontales) et la profondeur.</li>\n<li>Pour reporter la <b>profondeur</b> de la vue de dessus à la vue de gauche, utilise une ligne à <b>45°</b> dans le quadrant en bas à droite (ou le compas) : les lignes horizontales de la vue de dessus la touchent et « tournent » en devenant verticales.</li>\n<li><b>Repasse</b> les arêtes visibles en trait continu fort ; les arêtes <b>cachées</b> en trait interrompu (pointillés) ; les <b>axes</b> de symétrie en trait mixte (point-tiret).</li>\n</ol>\n<p>C'est la <b>méthode européenne</b> (dite aussi « du premier dièdre », norme ISO méthode E).</p>"
  },
  {
   "type": "svg",
   "title": "Les trois vues d'une marche (méthode européenne)",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#ffffff\"/>\n<line x1=\"20\" y1=\"150\" x2=\"380\" y2=\"150\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"20\" x2=\"220\" y2=\"300\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"150\" x2=\"330\" y2=\"260\" stroke=\"#64748b\" stroke-width=\"2\"/>\n<g stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\">\n<line x1=\"60\" y1=\"130\" x2=\"60\" y2=\"170\"/>\n<line x1=\"120\" y1=\"130\" x2=\"120\" y2=\"170\"/>\n<line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"170\"/>\n<line x1=\"180\" y1=\"50\" x2=\"240\" y2=\"50\"/>\n<line x1=\"180\" y1=\"90\" x2=\"240\" y2=\"90\"/>\n<line x1=\"180\" y1=\"170\" x2=\"240\" y2=\"170\"/>\n<line x1=\"180\" y1=\"230\" x2=\"300\" y2=\"230\"/>\n<line x1=\"240\" y1=\"150\" x2=\"240\" y2=\"170\"/>\n<line x1=\"300\" y1=\"130\" x2=\"300\" y2=\"230\"/>\n</g>\n<polygon points=\"60,50 120,50 120,90 180,90 180,130 60,130\" fill=\"#bfdbfe\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n<rect x=\"60\" y=\"170\" width=\"120\" height=\"60\" fill=\"#bbf7d0\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n<line x1=\"120\" y1=\"170\" x2=\"120\" y2=\"230\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n<rect x=\"240\" y=\"50\" width=\"60\" height=\"80\" fill=\"#fde68a\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n<line x1=\"240\" y1=\"90\" x2=\"300\" y2=\"90\" stroke=\"#0f172a\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/>\n<text x=\"120\" y=\"40\" font-size=\"15\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">Vue de face (P.V.)</text>\n<text x=\"120\" y=\"255\" font-size=\"15\" font-weight=\"bold\" fill=\"#15803d\" text-anchor=\"middle\">Vue de dessus (P.H.)</text>\n<text x=\"270\" y=\"40\" font-size=\"15\" font-weight=\"bold\" fill=\"#b45309\" text-anchor=\"middle\">Vue de gauche (P.P.)</text>\n<text x=\"300\" y=\"285\" font-size=\"14\" fill=\"#475569\" text-anchor=\"middle\">ligne à 45°</text>\n<polygon points=\"410,140 455,140 455,170 500,170 500,200 410,200\" fill=\"#bfdbfe\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n<polygon points=\"410,140 455,140 491,112 446,112\" fill=\"#93c5fd\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n<polygon points=\"455,140 491,112 491,142 455,170\" fill=\"#60a5fa\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n<polygon points=\"455,170 500,170 536,142 491,142\" fill=\"#93c5fd\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n<polygon points=\"500,170 536,142 536,172 500,200\" fill=\"#60a5fa\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n<text x=\"480\" y=\"255\" font-size=\"15\" fill=\"#0f172a\" text-anchor=\"middle\">l'objet (marche)</text>\n<text x=\"300\" y=\"310\" font-size=\"14\" fill=\"#0f172a\" text-anchor=\"middle\">pointillé = arête cachée</text>\n</svg>",
   "caption": "La vue de dessus se place sous la vue de face, la vue de gauche se place à sa droite. Dans la vue de gauche, l'arête de la marche est cachée derrière le bloc haut : c'est pourquoi elle est en pointillés."
  },
  {
   "type": "3d",
   "title": "Fais tourner le solide et imagine les trois vues",
   "scene": "solid",
   "options": {
    "shape": "box",
    "w": 3,
    "h": 1.5,
    "d": 2,
    "color": "#60a5fa",
    "labels": true,
    "shapes": [
     "box",
     "cube",
     "prism",
     "cylinder",
     "pyramid",
     "cone"
    ]
   },
   "caption": "Fais tourner le solide jusqu'à le voir exactement de face, puis de dessus, puis de côté : ce que tu vois dans chaque cas est une projection orthogonale. Essaie de changer de solide."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : les plans et les vues",
   "questions": [
    {
     "type": "mc",
     "q": "Dans la méthode européenne, où dessine-t-on la vue de dessus ?",
     "options": [
      "Au-dessus de la vue de face",
      "Sous la vue de face",
      "À gauche de la vue de face"
     ],
     "answer": 1,
     "explain": "Dans la méthode européenne (premier dièdre), la vue de dessus se place sous la vue de face."
    },
    {
     "type": "mc",
     "q": "Comment dessine-t-on une arête cachée ?",
     "options": [
      "Trait continu fort",
      "Trait interrompu (pointillés)",
      "Trait point-tiret"
     ],
     "answer": 1,
     "explain": "Les arêtes cachées se représentent avec un trait interrompu."
    },
    {
     "type": "tf",
     "q": "Dans la projection orthogonale, les rayons de projection sont perpendiculaires au plan.",
     "answer": true,
     "explain": "Orthogonale signifie justement « à angle droit »."
    }
   ]
  },
  {
   "type": "example",
   "title": "Exemple pratique : le parallélépipède",
   "html": "<p>Un parallélépipède (comme une brique) mesure <b>8 cm</b> de longueur, <b>5 cm</b> de profondeur et <b>3 cm</b> de hauteur.</p>\n<ul>\n<li><b>Vue de face</b> : rectangle de 8 cm de large et 3 cm de haut.</li>\n<li><b>Vue de dessus</b> : rectangle de 8 cm de large et 5 cm de profondeur, dessiné sous le premier.</li>\n<li><b>Vue de gauche</b> : rectangle de 5 cm de profondeur et 3 cm de haut, à droite du premier.</li>\n</ul>\n<p>Observe : chaque mesure apparaît dans <b>deux vues</b>. La largeur (8) est dans la vue de face et la vue de dessus, la hauteur (3) dans la vue de face et la vue de gauche, la profondeur (5) dans la vue de dessus et la vue de gauche. C'est le « contrôle » qui te dit si tu as bien dessiné !</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : cylindre et pyramide",
   "html": "<ul>\n<li><b>Cylindre debout</b> (diamètre 4 cm, hauteur 6 cm) : vue de face = <b>rectangle</b> 4 × 6 avec l'axe vertical en point-tiret ; vue de gauche = même rectangle ; vue de dessus = <b>cercle</b> de diamètre 4 cm avec deux axes en croix.</li>\n<li><b>Pyramide à base carrée</b> (côté 5 cm, hauteur 6 cm) : vue de face et de gauche = <b>triangles</b> isocèles de base 5 et de hauteur 6 ; vue de dessus = <b>carré</b> 5 × 5 avec les deux <b>diagonales</b>, qui sont les arêtes qui montent vers le sommet.</li>\n</ul>\n<p>Deux vues identiques (rectangle, rectangle) ne suffisent pas à comprendre si l'objet est un cylindre ou un parallélépipède : il faut la troisième !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le secret militaire de Monge",
   "html": "<p>La méthode des projections sur des plans perpendiculaires a été mise au point par le mathématicien français <b>Gaspard Monge</b> (1746–1818), quand il était un jeune dessinateur de l'école militaire de Mézières. Avec sa méthode, on pouvait concevoir les <b>fortifications</b> bien plus vite qu'avec des calculs.</p>\n<p>Elle était jugée si utile que, pendant des années, l'armée française la garda <b>secrète</b> ! Ce n'est qu'après la Révolution que Monge put l'enseigner publiquement, et en 1799 parut son livre <i>Géométrie descriptive</i>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? L'Europe contre l'Amérique",
   "html": "<p>Aux <b>États-Unis</b> et au Canada, on utilise une autre méthode, dite « américaine » ou du <b>troisième dièdre</b> : la vue de dessus se place <b>au-dessus</b> de la vue de face et la vue de droite à <b>droite</b>. Les vues sont les mêmes, seule leur position sur la feuille change.</p>\n<p>Pour éviter les erreurs, dans le cartouche des dessins techniques on met un symbole : un <b>tronc de cône</b> vu de face et de côté. D'après la position des deux dessins, on comprend tout de suite quelle méthode a été utilisée. Une erreur peut coûter cher : une pièce fabriquée « en miroir » ne se monte pas !</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Projection orthogonale : rayons parallèles et perpendiculaires au plan → vraie forme, aucune perspective.</li>\n<li>Trois plans : <b>P.V.</b> (vue de face), <b>P.H.</b> (vue de dessus), <b>P.P.</b> (vue de côté).</li>\n<li>Méthode européenne : vue de dessus <b>sous</b> la vue de face, vue de gauche <b>à droite</b> de la vue de face.</li>\n<li>Largeur, hauteur et profondeur apparaissent chacune dans deux vues : reporte-les avec des lignes de rappel et la ligne à 45°.</li>\n<li>Lignes : continue forte = visible ; interrompue = cachée ; point-tiret = axes.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les projections",
   "intro": "Les projections orthogonales se comprennent mieux avec les mains et avec les yeux. Voici quelques façons différentes de les « voir ».",
   "tabs": [
    {
     "label": "📦 La boîte qui s'ouvre",
     "html": "<p>Prends une boîte à chaussures sans couvercle et mets dedans un objet (un dé, un bouchon, une pièce de LEGO). Imagine de dessiner sur chaque paroi <b>l'ombre</b> de l'objet vue de face, de dessus et de côté.</p>\n<p>Maintenant <b>ouvre la boîte</b> et étale-la sur la table : la paroi du fond reste fixe (P.V.), le fond se rabat <b>vers le bas</b> (P.H. dessous) et la paroi latérale se rabat <b>sur le côté</b> (P.P. à droite). Voilà pourquoi les vues se trouvent exactement à ces endroits !</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#fefce8\"/>\n<rect x=\"150\" y=\"20\" width=\"160\" height=\"120\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<rect x=\"150\" y=\"140\" width=\"160\" height=\"110\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"3\"/>\n<rect x=\"310\" y=\"20\" width=\"110\" height=\"120\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<text x=\"230\" y=\"85\" font-size=\"20\" font-weight=\"bold\" fill=\"#1e3a8a\" text-anchor=\"middle\">P.V.</text>\n<text x=\"230\" y=\"200\" font-size=\"20\" font-weight=\"bold\" fill=\"#14532d\" text-anchor=\"middle\">P.H.</text>\n<text x=\"365\" y=\"85\" font-size=\"20\" font-weight=\"bold\" fill=\"#78350f\" text-anchor=\"middle\">P.P.</text>\n<path d=\"M120 60 Q 90 160 140 220\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<polygon points=\"140,220 128,206 146,204\" fill=\"#dc2626\"/>\n<text x=\"20\" y=\"150\" font-size=\"16\" fill=\"#b91c1c\">le fond</text>\n<text x=\"20\" y=\"170\" font-size=\"16\" fill=\"#b91c1c\">se rabat vers le bas</text>\n<path d=\"M430 30 Q 500 20 520 90\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<text x=\"440\" y=\"130\" font-size=\"16\" fill=\"#b91c1c\">la paroi</text>\n<text x=\"440\" y=\"150\" font-size=\"16\" fill=\"#b91c1c\">s'ouvre sur le côté</text>\n</svg>"
    },
    {
     "label": "🔦 Ombres au soleil",
     "html": "<p>Le <b>Soleil</b> est si loin que ses rayons arrivent pratiquement <b>parallèles</b>. À midi, en été, quand le Soleil est haut, l'ombre d'un objet sur le sol est presque sa <b>vue de dessus</b>.</p>\n<p>Une lampe de poche proche, en revanche, produit des rayons qui s'écartent : l'ombre devient plus grande que l'objet. C'est la <b>projection centrale</b>, celle de la perspective et de la photographie. La projection orthogonale est comme un « soleil parfait » qui éclaire toujours à 90° par rapport au plan.</p>"
    },
    {
     "label": "🇺🇸 La méthode américaine",
     "html": "<p>Dans la méthode américaine (troisième dièdre), tu imagines que le plan est <b>entre toi et l'objet</b>, comme une vitre sur laquelle tu recopies ce que tu vois. Alors :</p>\n<ul>\n<li>la vue de dessus se dessine <b>au-dessus</b> de la vue de face ;</li>\n<li>la vue de droite se dessine <b>à droite</b>.</li>\n</ul>\n<p>Dans la méthode européenne, en revanche, l'objet est <b>entre toi et le plan</b> et tu en projettes « l'ombre » derrière. Les figures sont identiques : seul leur arrangement sur la feuille change. Pour beaucoup d'élèves, la méthode américaine semble plus intuitive : « je dessine ce que je vois là où je le vois ».</p>"
    },
    {
     "label": "🧊 Fais tourner le solide 3D",
     "html": "<p>Choisis un solide, regarde-le exactement de face, puis de dessus, puis de côté. Dessine sur une feuille ce que tu vois dans chaque position : tu as réalisé les trois projections !</p>",
     "scene": "solid",
     "options": {
      "shape": "cylinder",
      "r": 1,
      "h": 2,
      "color": "#f97316",
      "labels": true,
      "shapes": [
       "cylinder",
       "cone",
       "pyramid",
       "prism",
       "box"
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des projections orthogonales",
   "nodes": [
    {
     "id": "geomdesc",
     "label": "Géométrie descriptive",
     "x": 50,
     "y": 7,
     "color": "#7c3aed",
     "html": "La partie de la géométrie qui représente des objets 3D sur une feuille 2D de façon exacte.",
     "why": "Elle a été mise en ordre par Gaspard Monge à la fin du XVIIIe siècle. Avant lui, architectes et tailleurs de pierre utilisaient déjà des plans et des élévations (les Romains et les bâtisseurs de cathédrales le faisaient), mais sans méthode mathématique unique."
    },
    {
     "id": "proiezione",
     "label": "Projection orthogonale",
     "x": 50,
     "y": 28,
     "color": "#2563eb",
     "html": "Rayons parallèles entre eux et perpendiculaires au plan de projection.",
     "why": "Si les rayons sont perpendiculaires, tout segment parallèle au plan conserve sa longueur : c'est pourquoi le dessin peut être mesuré. C'est la même idée que l'ombre au soleil (rayons parallèles)."
    },
    {
     "id": "triedro",
     "label": "Trièdre (3 plans)",
     "x": 50,
     "y": 48,
     "color": "#0ea5e9",
     "html": "P.V., P.H. et P.P., perpendiculaires entre eux comme les murs et le sol.",
     "why": "L'espace a trois dimensions (largeur, hauteur, profondeur) : chaque vue en montre deux, donc avec trois vues chaque dimension est représentée au moins deux fois."
    },
    {
     "id": "pv",
     "label": "Vue de face",
     "x": 15,
     "y": 66,
     "color": "#3b82f6",
     "html": "Sur le plan vertical : elle montre la largeur et la hauteur.",
     "why": "On choisit la face qui décrit le mieux l'objet : c'est le « portrait » principal dont dépendent les autres vues."
    },
    {
     "id": "po",
     "label": "Vue de dessus",
     "x": 38,
     "y": 82,
     "color": "#16a34a",
     "html": "Sur le plan horizontal : elle montre la largeur et la profondeur.",
     "why": "C'est le « plan », le même qu'on utilise pour les maisons et les villes : l'idée de regarder d'en haut est très ancienne (plans de villes déjà dans l'ancienne Mésopotamie)."
    },
    {
     "id": "pl",
     "label": "Vue de côté",
     "x": 62,
     "y": 82,
     "color": "#f59e0b",
     "html": "Sur le plan de profil : elle montre la profondeur et la hauteur.",
     "why": "Elle sert à lever les doutes que laissent les deux premières vues : par exemple entre un cylindre et un prisme."
    },
    {
     "id": "linee",
     "label": "Types de lignes",
     "x": 85,
     "y": 66,
     "color": "#ef4444",
     "html": "Continue forte (visible), interrompue (cachée), point-tiret (axes).",
     "why": "Les normes techniques (NF en France, ISO dans le monde) fixent les types de lignes afin que n'importe qui, dans n'importe quel pays, lise le dessin de la même façon."
    },
    {
     "id": "metodi",
     "label": "Méthode européenne et américaine",
     "x": 85,
     "y": 92,
     "color": "#64748b",
     "html": "Européenne (premier dièdre) : vue de dessus en dessous. Américaine (troisième dièdre) : vue de dessus au-dessus.",
     "why": "Cela dépend de l'endroit où l'on imagine le plan : derrière l'objet (européenne, comme une ombre) ou devant (américaine, comme une vitre). Les deux sont admises par la norme ISO 128, à condition d'être indiquées avec le symbole."
    },
    {
     "id": "monge",
     "label": "Gaspard Monge",
     "x": 15,
     "y": 92,
     "color": "#a855f7",
     "html": "Mathématicien français (1746–1818), père de la géométrie descriptive.",
     "why": "En travaillant sur les fortifications à Mézières, il inventa une méthode graphique rapide. Son livre <i>Géométrie descriptive</i> (1799) fut la base de l'enseignement du dessin technique dans les écoles d'ingénieurs."
    }
   ],
   "edges": [
    [
     "geomdesc",
     "proiezione",
     "utilise"
    ],
    [
     "proiezione",
     "triedro",
     "sur"
    ],
    [
     "triedro",
     "pv",
     "donne"
    ],
    [
     "triedro",
     "po",
     "donne"
    ],
    [
     "triedro",
     "pl",
     "donne"
    ],
    [
     "proiezione",
     "linee",
     "se dessine avec"
    ],
    [
     "triedro",
     "metodi",
     "se dispose avec"
    ],
    [
     "monge",
     "geomdesc",
     "a fondé"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : lire les vues",
   "questions": [
    {
     "type": "mc",
     "q": "Un objet a une vue de face = rectangle, une vue de côté = rectangle, une vue de dessus = cercle. Qu'est-ce que c'est ?",
     "options": [
      "Un cône",
      "Un cylindre debout",
      "Une sphère"
     ],
     "answer": 1,
     "explain": "Seul le cylindre debout a une vue de dessus circulaire et des vues de face rectangulaires."
    },
    {
     "type": "num",
     "q": "Un parallélépipède mesure 6 × 4 × 2 cm (longueur × profondeur × hauteur). Combien de cm² fait l'aire de sa vue de dessus ?",
     "answer": 24,
     "unit": "cm²",
     "explain": "De dessus, on voit la longueur et la profondeur : 6 × 4 = 24 cm²."
    },
    {
     "type": "tf",
     "q": "La profondeur d'un objet apparaît dans la vue de face.",
     "answer": false,
     "explain": "La vue de face montre la largeur et la hauteur ; la profondeur apparaît dans la vue de dessus et la vue de côté."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Projection orthogonale",
   "d": "Représentation avec des rayons parallèles perpendiculaires au plan : les mesures restent vraies."
  },
  {
   "t": "Trièdre",
   "d": "Les trois plans perpendiculaires P.V., P.H. et P.P. sur lesquels on projette l'objet."
  },
  {
   "t": "Vue de face",
   "d": "Vue frontale, sur le plan vertical."
  },
  {
   "t": "Vue de dessus",
   "d": "Vue d'en haut, sur le plan horizontal."
  },
  {
   "t": "Vue de côté (profil)",
   "d": "Vue latérale, sur le plan de profil."
  },
  {
   "t": "Ligne de terre",
   "d": "Droite où se rencontrent le plan vertical et le plan horizontal."
  },
  {
   "t": "Lignes de rappel",
   "d": "Lignes fines qui reportent les mesures d'une vue à l'autre."
  },
  {
   "t": "Ligne à 45°",
   "d": "Droite qui sert à transférer la profondeur de la vue de dessus à la vue de côté."
  },
  {
   "t": "Arête cachée",
   "d": "Arête qu'on ne voit pas de ce point de vue : elle se dessine en pointillés."
  },
  {
   "t": "Géométrie descriptive",
   "d": "Science qui représente des objets 3D en 2D de façon exacte, fondée par Gaspard Monge."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Que signifie « orthogonal » ?",
    "options": [
     "Oblique",
     "Perpendiculaire, à angle droit",
     "Courbe"
    ],
    "answer": 1,
    "explain": "Orthogonal = perpendiculaire (du grec orthós, « droit », et gonía, « angle »)."
   },
   {
    "type": "mc",
    "q": "Sur quel plan projette-t-on la vue de face ?",
    "options": [
     "Plan horizontal",
     "Plan vertical",
     "Plan de profil"
    ],
    "answer": 1,
    "explain": "La vue de face se place sur le plan vertical."
   },
   {
    "type": "mc",
    "q": "Dans la méthode européenne, la vue de gauche se dessine…",
    "options": [
     "à droite de la vue de face",
     "à gauche de la vue de face",
     "au-dessus de la vue de face"
    ],
    "answer": 0,
    "explain": "Dans le premier dièdre, la vue de gauche va à droite de la vue de face."
   },
   {
    "type": "tf",
    "q": "Les axes de symétrie se dessinent avec le trait point-tiret.",
    "answer": true,
    "explain": "Trait mixte fin point-tiret = axes et lignes de centre."
   },
   {
    "type": "num",
    "q": "Un cube a une arête de 5 cm. Combien de cm² fait l'aire de sa vue de face ?",
    "answer": 25,
    "unit": "cm²",
    "explain": "La vue de face d'un cube est un carré 5 × 5 = 25 cm²."
   },
   {
    "type": "mc",
    "q": "Quelle est la vue de dessus d'une pyramide à base carrée ?",
    "options": [
     "Un triangle",
     "Un carré avec les diagonales",
     "Un cercle"
    ],
    "answer": 1,
    "explain": "De dessus, on voit la base carrée et les quatre arêtes qui montent vers le sommet, c'est-à-dire les diagonales."
   },
   {
    "type": "text",
    "q": "Comment s'appelle la droite où se rencontrent le P.V. et le P.H. ? (ligne de …)",
    "answer": [
     "terre",
     "ligne de terre"
    ],
    "explain": "C'est la ligne de terre (L.T.)."
   },
   {
    "type": "mc",
    "q": "À quoi sert la ligne à 45° ?",
    "options": [
     "À dessiner la perspective",
     "À transférer la profondeur de la vue de dessus à la vue de côté",
     "À indiquer les arêtes cachées"
    ],
    "answer": 1,
    "explain": "Les lignes de rappel horizontales de la vue de dessus « tournent » sur la droite à 45° et deviennent verticales dans la vue de côté."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre les phases du dessin.",
    "items": [
     "Choisir la vue de face",
     "Tracer la ligne de terre et les axes",
     "Dessiner la vue de face",
     "Reporter les mesures et dessiner la vue de dessus et la vue de côté",
     "Repasser les lignes selon leur type"
    ],
    "explain": "D'abord le choix et la construction, puis les vues, enfin le repassage."
   },
   {
    "type": "text",
    "q": "Nom de famille du mathématicien français qui a fondé la géométrie descriptive.",
    "answer": [
     "monge",
     "gaspard monge"
    ],
    "explain": "Gaspard Monge (1746–1818)."
   },
   {
    "type": "tf",
    "q": "Dans la méthode américaine, la vue de dessus se dessine au-dessus de la vue de face.",
    "answer": true,
    "explain": "Dans le troisième dièdre, la vue de dessus va au-dessus."
   },
   {
    "type": "num",
    "q": "Un parallélépipède mesure 10 cm de long, 4 cm de profondeur et 3 cm de haut. Quelle est la largeur (en cm) du rectangle de la vue de côté ?",
    "answer": 4,
    "unit": "cm",
    "explain": "La vue de côté montre la profondeur (4 cm) et la hauteur (3 cm) : sa largeur est la profondeur, 4 cm."
   }
  ],
  "gen": [
   [
    "areaRect",
    2
   ]
  ]
 }
});
