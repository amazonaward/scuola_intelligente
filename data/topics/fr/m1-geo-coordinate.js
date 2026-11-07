TOPIC('fr', {
 "id": "m1-geo-coordinate",
 "title": "Latitude et longitude",
 "intro": "Comment indiquer avec précision un point quelconque de la Terre, même au milieu de l'océan ? On utilise une grille imaginaire de <b>parallèles</b> et de <b>méridiens</b>, le <b>quadrillage géographique</b>. Chaque lieu a son « adresse » faite de deux nombres : la <b>latitude</b> et la <b>longitude</b>. De la longitude dépendent aussi les <b>fuseaux horaires</b>.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "1. Le quadrillage géographique",
   "html": "<p>La Terre tourne autour d'un axe qui passe par le <b>pôle Nord</b> et le <b>pôle Sud</b>. Sur cette base, les géographes ont tracé deux familles de lignes imaginaires :</p><ul><li><b>Parallèles</b> : cercles horizontaux, parallèles entre eux, qui font le tour de la Terre d'ouest en est. Le plus long est l'<b>équateur</b> (environ <b>40 075 km</b>), qui divise la Terre en <b>hémisphère boréal</b> (Nord) et <b>hémisphère austral</b> (Sud). Plus on s'approche des pôles, plus les parallèles sont petits ; les pôles ne sont que des points.</li><li><b>Méridiens</b> : demi-cercles qui vont d'un pôle à l'autre. Ils sont tous <b>égaux</b> (environ 20 000 km). Le méridien de référence passe par l'observatoire de <b>Greenwich</b>, près de Londres (choisi en <b>1884</b> à la Conférence internationale de Washington), et divise la Terre en <b>hémisphère oriental</b> (Est) et <b>occidental</b> (Ouest).</li></ul>"
  },
  {
   "type": "svg",
   "title": "Parallèles et méridiens",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#0f172a\"/><circle cx=\"160\" cy=\"165\" r=\"120\" fill=\"#38bdf8\" stroke=\"#e0f2fe\" stroke-width=\"2\"/><g fill=\"none\" stroke=\"#fef08a\" stroke-width=\"2\"><ellipse cx=\"160\" cy=\"165\" rx=\"120\" ry=\"18\"/><ellipse cx=\"160\" cy=\"105\" rx=\"104\" ry=\"15\"/><ellipse cx=\"160\" cy=\"225\" rx=\"104\" ry=\"15\"/><ellipse cx=\"160\" cy=\"60\" rx=\"60\" ry=\"9\"/><ellipse cx=\"160\" cy=\"270\" rx=\"60\" ry=\"9\"/></g><ellipse cx=\"160\" cy=\"165\" rx=\"120\" ry=\"18\" fill=\"none\" stroke=\"#f97316\" stroke-width=\"4\"/><text x=\"160\" y=\"30\" font-size=\"16\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#fef08a\">PARALLÈLES</text><text x=\"30\" y=\"170\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#fdba74\" text-anchor=\"end\">0°</text><circle cx=\"440\" cy=\"165\" r=\"120\" fill=\"#38bdf8\" stroke=\"#e0f2fe\" stroke-width=\"2\"/><g fill=\"none\" stroke=\"#bbf7d0\" stroke-width=\"2\"><ellipse cx=\"440\" cy=\"165\" rx=\"40\" ry=\"120\"/><ellipse cx=\"440\" cy=\"165\" rx=\"80\" ry=\"120\"/><ellipse cx=\"440\" cy=\"165\" rx=\"110\" ry=\"120\"/></g><line x1=\"440\" y1=\"45\" x2=\"440\" y2=\"285\" stroke=\"#ef4444\" stroke-width=\"4\"/><text x=\"440\" y=\"30\" font-size=\"16\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#bbf7d0\">MÉRIDIENS</text><text x=\"448\" y=\"300\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#fca5a5\">Greenwich 0°</text><circle cx=\"440\" cy=\"45\" r=\"5\" fill=\"#ffffff\"/><text x=\"455\" y=\"50\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#ffffff\">Pôle Nord</text><text x=\"160\" y=\"196\" font-size=\"14\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#7c2d12\" font-weight=\"bold\">Équateur</text></svg>",
   "caption": "À gauche : les parallèles, des cercles de plus en plus petits vers les pôles. À droite : les méridiens, tous égaux, qui se rejoignent aux pôles."
  },
  {
   "type": "text",
   "title": "2. Latitude et longitude",
   "html": "<p>Les coordonnées se mesurent en <b>degrés</b> (°), subdivisés en <b>minutes</b> (′, 1° = 60′) et <b>secondes</b> (″, 1′ = 60″), parce que ce sont des <b>angles</b> mesurés depuis le centre de la Terre.</p><ul><li><b>Latitude</b> : distance angulaire d'un point à l'<b>équateur</b>. Elle va de <b>0°</b> (équateur) à <b>90°</b> (pôles) et se note <b>Nord</b> ou <b>Sud</b>. Tous les points d'un même parallèle ont la même latitude.</li><li><b>Longitude</b> : distance angulaire d'un point au <b>méridien de Greenwich</b>. Elle va de <b>0°</b> à <b>180°</b> et se note <b>Est</b> ou <b>Ouest</b>. Tous les points d'un même méridien ont la même longitude.</li></ul><p>On écrit toujours <b>d'abord la latitude, puis la longitude</b>. Exemple : <b>Rome 41° 54′ N, 12° 30′ E</b>. Dans les GPS et sur Internet, on utilise les degrés décimaux et les signes : 41,9 / 12,5 (Nord et Est positifs, Sud et Ouest négatifs).</p>"
  },
  {
   "type": "remember",
   "title": "Astuce pour ne pas les confondre",
   "html": "<p><b>Latitude</b> → « <b>latéral</b> », « largeur » : les lignes sont <b>horizontales</b> comme les barreaux d'une <b>échelle</b> : tu montes et tu descends entre le Nord et le Sud.<br><b>Longitude</b> → « <b>longue</b> » : les méridiens sont des lignes <b>longues</b> qui vont d'un pôle à l'autre ; tu te déplaces entre l'Est et l'Ouest.</p>"
  },
  {
   "type": "text",
   "title": "3. Les parallèles spéciaux",
   "html": "<p>À cause de l'inclinaison de l'axe terrestre (environ <b>23° 27′</b>), certains parallèles ont une signification astronomique :</p><table><tr><th>Parallèle</th><th>Latitude</th><th>Pourquoi il est spécial</th></tr><tr><td>Équateur</td><td>0°</td><td>Le Soleil est au zénith (à la verticale) aux équinoxes</td></tr><tr><td>Tropique du Cancer</td><td>23° 27′ N</td><td>Le Soleil est au zénith le 21 juin</td></tr><tr><td>Tropique du Capricorne</td><td>23° 27′ S</td><td>Le Soleil est au zénith le 21–22 décembre</td></tr><tr><td>Cercle polaire arctique</td><td>66° 33′ N</td><td>Au-delà, au moins un jour par an de soleil de minuit et un de nuit polaire</td></tr><tr><td>Cercle polaire antarctique</td><td>66° 33′ S</td><td>Pareil, dans l'hémisphère austral</td></tr></table><p>Ces parallèles délimitent les <b>zones astronomiques</b> (torride, tempérées, polaires), que tu étudieras dans la leçon sur les climats.</p>"
  },
  {
   "type": "3d",
   "title": "Trouve les villes sur le globe",
   "scene": "globe",
   "options": {
    "points": [
     {
      "lat": 41.9,
      "lon": 12.5,
      "label": "Rome 41,9° N – 12,5° E",
      "color": "#16a34a"
     },
     {
      "lat": 45.46,
      "lon": 9.19,
      "label": "Milan 45,5° N – 9,2° E",
      "color": "#16a34a"
     },
     {
      "lat": 51.48,
      "lon": 0,
      "label": "Greenwich 51,5° N – 0°",
      "color": "#dc2626"
     },
     {
      "lat": 40.71,
      "lon": -74,
      "label": "New York 40,7° N – 74° O",
      "color": "#2563eb"
     },
     {
      "lat": -33.87,
      "lon": 151.21,
      "label": "Sydney 33,9° S – 151,2° E",
      "color": "#f97316"
     },
     {
      "lat": -0.18,
      "lon": -78.47,
      "label": "Quito (presque sur l'équateur)",
      "color": "#a855f7"
     },
     {
      "lat": 35.68,
      "lon": 139.69,
      "label": "Tokyo 35,7° N – 139,7° E",
      "color": "#f97316"
     },
     {
      "lat": -34.6,
      "lon": -58.38,
      "label": "Buenos Aires 34,6° S – 58,4° O",
      "color": "#2563eb"
     }
    ]
   },
   "caption": "Fais tourner le globe : remarque que Rome et New York ont presque la même latitude (elles sont presque sur le même parallèle), mais des longitudes très différentes."
  },
  {
   "type": "example",
   "title": "Exemple pratique : quelle est la longueur d'un degré ?",
   "html": "<p>Un méridien va d'un pôle à l'autre : 180° de latitude pour environ 20 000 km. Donc <b>1° de latitude ≈ 20 000 : 180 ≈ 111 km</b>.</p><p>Milan est à environ 45,5° N, Rome à environ 41,9° N. La différence est 45,5 − 41,9 = <b>3,6°</b> ; 3,6 × 111 ≈ <b>400 km</b> en direction Nord-Sud. (La distance réelle à vol d'oiseau est d'environ 480 km, parce que Milan est aussi plus à l'ouest.)</p><p>Un degré de longitude, en revanche, ne mesure 111 km qu'à l'équateur et raccourcit vers les pôles, où il devient nul.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz 1",
   "questions": [
    {
     "type": "mc",
     "q": "Quelle est la latitude de l'équateur ?",
     "options": [
      "0°",
      "45°",
      "90°",
      "180°"
     ],
     "answer": 0,
     "explain": "L'équateur est le parallèle de référence : 0°."
    },
    {
     "type": "mc",
     "q": "Quelle valeur maximale peut avoir la longitude ?",
     "options": [
      "90°",
      "180°",
      "360°",
      "23° 27′"
     ],
     "answer": 1,
     "explain": "180° Est ou Ouest : au-delà, on revient de l'autre côté."
    },
    {
     "type": "tf",
     "q": "Tous les méridiens ont la même longueur.",
     "answer": true,
     "explain": "Ils vont tous d'un pôle à l'autre ; les parallèles, en revanche, raccourcissent vers les pôles."
    },
    {
     "type": "num",
     "q": "Combien de km mesure environ 1° de latitude ?",
     "answer": 111,
     "tol": 2,
     "unit": "km",
     "explain": "20 000 km : 180° ≈ 111 km."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Les fuseaux horaires",
   "html": "<p>La Terre fait un tour complet (<b>360°</b>) en <b>24 heures</b>. En une heure, elle tourne donc de 360 : 24 = <b>15°</b>. C'est pourquoi la Terre a été divisée en <b>24 fuseaux horaires</b>, des « quartiers » larges d'environ 15° de longitude : à l'intérieur de chaque fuseau, on utilise la même heure.</p><ul><li>Le fuseau de référence est celui de Greenwich : l'heure s'appelle <b>UTC</b> (temps universel coordonné).</li><li>En allant vers l'<b>Est</b>, on <b>ajoute</b> une heure par fuseau (là où le Soleil se lève plus tôt) ; en allant vers l'<b>Ouest</b>, on <b>retire</b>.</li><li>L'<b>Italie</b> est dans le fuseau <b>UTC+1</b> (heure de l'Europe centrale), comme la France ; en été, avec l'<b>heure d'été</b>, elle devient UTC+2.</li><li>Les limites des fuseaux ne sont pas des lignes droites : elles suivent souvent les frontières des États. La <b>Chine</b>, large comme 5 fuseaux, utilise une seule heure pour tout le pays.</li></ul><p>Sur le méridien de 180°, dans l'océan Pacifique, passe (avec de nombreux écarts) la <b>ligne de changement de date</b> : en la traversant vers l'Ouest, on ajoute un jour, vers l'Est, on le retire.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : appeler l'oncle à New York",
   "html": "<p>À Rome, il est <b>18 h 00</b> (hiver, UTC+1). New York est dans le fuseau <b>UTC−5</b>. La différence est 1 − (−5) = <b>6 heures</b>, et New York est à l'Ouest : donc là-bas il est 18 − 6 = <b>12 h 00</b>, midi. L'oncle est en pause déjeuner !</p><p>Et à <b>Tokyo</b> (UTC+9) ? Différence 9 − 1 = 8 heures vers l'Est : 18 + 8 = 26 → <b>2 h 00 du matin</b> du lendemain. Mieux vaut ne pas téléphoner !</p>"
  },
  {
   "type": "widget",
   "title": "La droite des fuseaux horaires",
   "widget": "numberLine",
   "options": {
    "min": -12,
    "max": 14,
    "step": 1,
    "marks": [
     -5,
     0,
     1,
     9
    ]
   },
   "caption": "Chaque graduation est un fuseau (UTC). Repère : New York (−5), Greenwich (0), Italie (+1), Tokyo (+9). Compter les sauts entre deux graduations = différence d'heures. Les Kiribati utilisent même UTC+14 !"
  },
  {
   "type": "curiosity",
   "title": "Le problème de la longitude",
   "html": "<p>La latitude se mesurait déjà au Moyen Âge en observant la hauteur de l'étoile Polaire ou du Soleil. La longitude, non : il fallait savoir quelle heure il était <b>en même temps</b> à bord et dans le port de départ (chaque heure de différence = 15°). Mais les horloges à pendule sur les navires qui tanguaient ne fonctionnaient pas. Beaucoup de navires faisaient naufrage. En 1714, le Parlement anglais offrit une énorme récompense à qui résoudrait le problème. Elle fut gagnée par un menuisier et horloger, <b>John Harrison</b> : son chronomètre de marine <b>H4</b>, testé en 1761–62, se trompa de quelques secondes seulement lors d'un voyage de deux mois jusqu'en Jamaïque.</p>"
  },
  {
   "type": "curiosity",
   "title": "Un endroit avec toutes les heures",
   "html": "<p>Au <b>pôle Nord</b> et au <b>pôle Sud</b>, tous les méridiens se rencontrent, donc tous les fuseaux horaires ! En marchant autour du pôle, tu peux traverser 24 fuseaux en quelques secondes. C'est pourquoi les bases scientifiques en Antarctique choisissent une heure par commodité : la base américaine <b>Amundsen-Scott</b>, justement au pôle Sud, utilise l'heure de la Nouvelle-Zélande, d'où arrivent les ravitaillements.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre",
   "intro": "Si latitude et longitude te semblent abstraites, essaie ces méthodes.",
   "tabs": [
    {
     "label": "🚢 Bataille navale",
     "html": "<p>Au jeu de la bataille navale, chaque case a une <b>lettre</b> (ligne) et un <b>numéro</b> (colonne) : « B4, touché ! » Les coordonnées géographiques fonctionnent de la même façon : la latitude dit sur quelle « ligne » (parallèle) tu es, la longitude sur quelle « colonne » (méridien). La seule différence : sur la Terre, la grille est enroulée sur une sphère et les nombres partent du centre (0°) et vont vers le Nord/Sud et l'Est/Ouest.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#e0f2fe\"/><g stroke=\"#0369a1\" stroke-width=\"1.5\"><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"280\"/><line x1=\"180\" y1=\"40\" x2=\"180\" y2=\"280\"/><line x1=\"260\" y1=\"40\" x2=\"260\" y2=\"280\"/><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"280\"/><line x1=\"420\" y1=\"40\" x2=\"420\" y2=\"280\"/><line x1=\"500\" y1=\"40\" x2=\"500\" y2=\"280\"/><line x1=\"100\" y1=\"40\" x2=\"500\" y2=\"40\"/><line x1=\"100\" y1=\"100\" x2=\"500\" y2=\"100\"/><line x1=\"100\" y1=\"160\" x2=\"500\" y2=\"160\"/><line x1=\"100\" y1=\"220\" x2=\"500\" y2=\"220\"/><line x1=\"100\" y1=\"280\" x2=\"500\" y2=\"280\"/></g><line x1=\"100\" y1=\"160\" x2=\"500\" y2=\"160\" stroke=\"#f97316\" stroke-width=\"4\"/><line x1=\"300\" y1=\"40\" x2=\"300\" y2=\"280\" stroke=\"#dc2626\" stroke-width=\"4\"/><g font-family=\"sans-serif\" font-size=\"14\" fill=\"#0c4a6e\"><text x=\"510\" y=\"45\">60° N</text><text x=\"510\" y=\"105\">30° N</text><text x=\"510\" y=\"165\" fill=\"#c2410c\" font-weight=\"bold\">0° Équateur</text><text x=\"510\" y=\"225\">30° S</text><text x=\"85\" y=\"30\">90° O</text><text x=\"165\" y=\"30\">60° O</text><text x=\"285\" y=\"30\" fill=\"#b91c1c\" font-weight=\"bold\">0°</text><text x=\"400\" y=\"30\">60° E</text></g><circle cx=\"335\" cy=\"78\" r=\"10\" fill=\"#16a34a\"/><text x=\"350\" y=\"83\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#14532d\" font-weight=\"bold\">Rome ≈ 42° N, 12° E</text><circle cx=\"180\" cy=\"82\" r=\"10\" fill=\"#2563eb\"/><text x=\"110\" y=\"70\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e3a8a\">New York ≈ 41° N, 74° O</text></svg>"
    },
    {
     "label": "📐 Le plan cartésien",
     "html": "<p>En mathématiques, un point du plan s'indique par deux nombres (x ; y). Sur la Terre : la <b>longitude</b> est comme le <b>x</b> (droite = Est positif, gauche = Ouest négatif) et la <b>latitude</b> est comme le <b>y</b> (haut = Nord positif, bas = Sud négatif). L'origine (0 ; 0) est dans le golfe de Guinée, où l'équateur rencontre Greenwich. Attention pourtant : en géographie, on écrit d'abord la latitude (y) puis la longitude (x) !</p>"
    },
    {
     "label": "🍊 L'orange en quartiers",
     "html": "<p>Prends une orange : les quartiers vont d'un « pôle » à l'autre comme les <b>méridiens</b>, et sont tous égaux comme les <b>fuseaux horaires</b>. Si tu la coupes en tranches horizontales, chaque tranche est un <b>parallèle</b> : la tranche centrale (l'équateur) est la plus grande, celles vers les extrémités de plus en plus petites. Une orange à 24 quartiers serait un modèle parfait des fuseaux horaires !</p>"
    },
    {
     "label": "🌍 Globe avec itinéraires",
     "html": "<p>Suis sur le globe le parallèle de 40–42° N : il relie Rome, Madrid, New York, Pékin. Ce sont toutes des villes aux saisons semblables, parce qu'elles reçoivent le Soleil sous des inclinaisons semblables.</p>",
     "scene": "globe",
     "options": {
      "points": [
       {
        "lat": 41.9,
        "lon": 12.5,
        "label": "Rome",
        "color": "#16a34a"
       },
       {
        "lat": 40.42,
        "lon": -3.7,
        "label": "Madrid",
        "color": "#16a34a"
       },
       {
        "lat": 40.71,
        "lon": -74,
        "label": "New York",
        "color": "#16a34a"
       },
       {
        "lat": 39.9,
        "lon": 116.4,
        "label": "Pékin",
        "color": "#16a34a"
       },
       {
        "lat": 41,
        "lon": 28.97,
        "label": "Istanbul",
        "color": "#16a34a"
       }
      ],
      "routes": [
       {
        "points": [
         2,
         1,
         0,
         4,
         3
        ],
        "color": "#f97316"
       }
      ]
     }
    }
   ]
  },
  {
   "type": "widget",
   "title": "Dans quel hémisphère se trouve-t-elle ?",
   "widget": "classify",
   "options": {
    "groups": [
     "Hémisphère boréal (Nord)",
     "Hémisphère austral (Sud)"
    ],
    "items": [
     [
      "🇮🇹 Rome",
      0
     ],
     [
      "🇦🇺 Sydney",
      1
     ],
     [
      "🇯🇵 Tokyo",
      0
     ],
     [
      "🇦🇷 Buenos Aires",
      1
     ],
     [
      "🇿🇦 Le Cap",
      1
     ],
     [
      "🇺🇸 New York",
      0
     ],
     [
      "🇧🇷 Rio de Janeiro",
      1
     ],
     [
      "🇪🇬 Le Caire",
      0
     ]
    ]
   },
   "caption": "Rappelle-toi : les villes de l'hémisphère austral ont une latitude Sud (S)."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz 2",
   "questions": [
    {
     "type": "num",
     "q": "De combien de degrés la Terre tourne-t-elle en une heure ?",
     "answer": 15,
     "tol": 0,
     "unit": "°",
     "explain": "360° : 24 h = 15° par heure."
    },
    {
     "type": "num",
     "q": "À Rome (UTC+1), il est midi (12 h). Quelle heure est-il à Moscou (UTC+3) ?",
     "answer": 14,
     "tol": 0,
     "unit": "h",
     "explain": "Moscou est 2 fuseaux plus à l'Est : 12 + 2 = 14."
    },
    {
     "type": "mc",
     "q": "Quel parallèle se trouve à 23° 27′ Nord ?",
     "options": [
      "Tropique du Capricorne",
      "Cercle polaire arctique",
      "Tropique du Cancer",
      "Équateur"
     ],
     "answer": 2,
     "explain": "Le tropique du Cancer : le 21 juin, le Soleil y est au zénith."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte conceptuelle : l'adresse des lieux",
   "nodes": [
    {
     "id": "sfera",
     "label": "Terre sphérique qui tourne",
     "x": 50,
     "y": 8,
     "color": "#0ea5e9",
     "html": "<p>Axe de rotation, pôles, rotation en 24 heures.</p>",
     "why": "<p>Déjà Ératosthène (IIIe siècle av. J.-C.) mesura la circonférence terrestre avec l'ombre d'un bâton : il trouva une valeur très proche des 40 000 km réels.</p>"
    },
    {
     "id": "angoli",
     "label": "Mesure en degrés",
     "x": 82,
     "y": 22,
     "color": "#ca8a04",
     "html": "<p>Degrés, minutes, secondes (système sexagésimal).</p>",
     "why": "<p>Le cercle divisé en 360° et les sous-multiples de 60 viennent des astronomes babyloniens, qui comptaient en base 60 (comme nous le faisons encore avec les heures et les minutes).</p>"
    },
    {
     "id": "paralleli",
     "label": "Parallèles → latitude",
     "x": 20,
     "y": 35,
     "color": "#f97316",
     "html": "<p>De 0° (équateur) à 90° N ou S.</p>",
     "why": "<p>L'équateur est « naturel » : c'est le cercle perpendiculaire à l'axe de rotation. C'est pourquoi la latitude pouvait se mesurer avec les étoiles depuis l'Antiquité.</p>"
    },
    {
     "id": "meridiani",
     "label": "Méridiens → longitude",
     "x": 50,
     "y": 40,
     "color": "#dc2626",
     "html": "<p>De 0° (Greenwich) à 180° E ou O.</p>",
     "why": "<p>Le méridien zéro est une <b>convention</b> : au fil du temps, on en utilisa beaucoup (Paris, Rome, île de Fer). En 1884 à Washington, 25 pays choisirent Greenwich, parce que la plupart des cartes marines l'utilisaient déjà.</p>"
    },
    {
     "id": "tropici",
     "label": "Tropiques et cercles polaires",
     "x": 15,
     "y": 70,
     "color": "#a855f7",
     "html": "<p>23° 27′ et 66° 33′.</p>",
     "why": "<p>Ils dépendent de l'inclinaison de l'axe terrestre (environ 23,4°) : les tropiques sont à 23,4° de l'équateur, les cercles polaires à 90° − 23,4° ≈ 66,6°.</p>"
    },
    {
     "id": "coordinate",
     "label": "Coordonnées géographiques",
     "x": 42,
     "y": 70,
     "color": "#16a34a",
     "html": "<p>D'abord la latitude, puis la longitude.</p>",
     "why": "<p>Le quadrillage fut utilisé systématiquement par Ptolémée (IIe siècle apr. J.-C.) dans sa <i>Géographie</i>, qui énumérait environ 8 000 lieux avec leurs coordonnées.</p>"
    },
    {
     "id": "fusi",
     "label": "Fuseaux horaires",
     "x": 78,
     "y": 62,
     "color": "#2563eb",
     "html": "<p>24 fuseaux de 15°, UTC, heure d'été, ligne de changement de date.</p>",
     "why": "<p>Jusqu'au XIXe siècle, chaque ville utilisait l'heure de son propre Soleil. Avec les chemins de fer, il fallait des horaires communs : le Canadien Sandford Fleming proposa les 24 fuseaux (1879). L'Italie adopta l'heure de l'Europe centrale en 1893.</p>"
    },
    {
     "id": "gps",
     "label": "Navigation et GPS",
     "x": 68,
     "y": 90,
     "color": "#475569",
     "html": "<p>Du chronomètre de Harrison au GPS.</p>",
     "why": "<p>Mesurer la longitude exige de mesurer le <b>temps</b> : le GPS fonctionne justement grâce à des horloges atomiques à bord des satellites, très précises.</p>"
    }
   ],
   "edges": [
    [
     "sfera",
     "paralleli",
     "axe et équateur"
    ],
    [
     "sfera",
     "meridiani",
     "pôles"
    ],
    [
     "angoli",
     "meridiani",
     "mesure"
    ],
    [
     "angoli",
     "paralleli",
     "mesure"
    ],
    [
     "paralleli",
     "tropici",
     "spéciaux"
    ],
    [
     "paralleli",
     "coordinate",
     "latitude"
    ],
    [
     "meridiani",
     "coordinate",
     "longitude"
    ],
    [
     "meridiani",
     "fusi",
     "15° = 1 heure"
    ],
    [
     "fusi",
     "gps",
     "temps"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Quadrillage géographique",
   "d": "Ensemble de parallèles et de méridiens tracés idéalement sur la Terre."
  },
  {
   "t": "Parallèle",
   "d": "Cercle imaginaire parallèle à l'équateur."
  },
  {
   "t": "Méridien",
   "d": "Demi-cercle imaginaire qui relie les deux pôles."
  },
  {
   "t": "Latitude",
   "d": "Distance angulaire d'un point à l'équateur (0°–90° N ou S)."
  },
  {
   "t": "Longitude",
   "d": "Distance angulaire d'un point au méridien de Greenwich (0°–180° E ou O)."
  },
  {
   "t": "Hémisphère",
   "d": "Moitié de la Terre : boréal/austral (séparés par l'équateur), oriental/occidental (par Greenwich et 180°)."
  },
  {
   "t": "Fuseau horaire",
   "d": "Quartier d'environ 15° de longitude où la même heure est en vigueur."
  },
  {
   "t": "UTC",
   "d": "Temps universel coordonné, l'heure de référence mondiale."
  },
  {
   "t": "Ligne de changement de date",
   "d": "Ligne proche du méridien 180° où change la date du calendrier."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Quelle ligne divise la Terre en hémisphère boréal et austral ?",
    "options": [
     "Le méridien de Greenwich",
     "L'équateur",
     "Le tropique du Cancer",
     "La ligne de changement de date"
    ],
    "answer": 1,
    "explain": "L'équateur sépare le Nord et le Sud."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le méridien fondamental (0°) ?",
    "answer": [
     "greenwich",
     "méridien de greenwich",
     "le méridien de greenwich"
    ],
    "explain": "Il passe par l'observatoire de Greenwich, près de Londres."
   },
   {
    "type": "mc",
    "q": "Comment s'écrivent les coordonnées d'un point ?",
    "options": [
     "D'abord la longitude, puis la latitude",
     "D'abord la latitude, puis la longitude",
     "Seulement la latitude",
     "Il n'y a pas d'ordre"
    ],
    "answer": 1,
    "explain": "Ex. Rome 41° 54′ N, 12° 30′ E."
   },
   {
    "type": "tf",
    "q": "Les parallèles ont tous la même longueur.",
    "answer": false,
    "explain": "L'équateur est le plus long ; vers les pôles, ils raccourcissent."
   },
   {
    "type": "num",
    "q": "Combien y a-t-il de fuseaux horaires principaux ?",
    "answer": 24,
    "tol": 0,
    "explain": "Un pour chaque heure de la journée."
   },
   {
    "type": "num",
    "q": "À Rome (UTC+1), il est 10 h. Quelle heure est-il à Londres (UTC+0) ?",
    "answer": 9,
    "tol": 0,
    "unit": "h",
    "explain": "Londres est un fuseau plus à l'Ouest : 10 − 1 = 9."
   },
   {
    "type": "num",
    "q": "Si à Rome (UTC+1) il est 20 h, quelle heure est-il à Los Angeles (UTC−8) ?",
    "answer": 11,
    "tol": 0,
    "unit": "h",
    "explain": "Différence 1 − (−8) = 9 heures vers l'Ouest : 20 − 9 = 11."
   },
   {
    "type": "mc",
    "q": "Quelle latitude a le pôle Sud ?",
    "options": [
     "0°",
     "90° N",
     "90° S",
     "180°"
    ],
    "answer": 2,
    "explain": "Les pôles ont une latitude de 90°, Nord ou Sud."
   },
   {
    "type": "order",
    "q": "Classe les parallèles du Nord au Sud",
    "items": [
     "Cercle polaire arctique",
     "Tropique du Cancer",
     "Équateur",
     "Tropique du Capricorne",
     "Cercle polaire antarctique"
    ],
    "explain": "66° 33′ N, 23° 27′ N, 0°, 23° 27′ S, 66° 33′ S."
   },
   {
    "type": "mc",
    "q": "Pourquoi était-il difficile de mesurer la longitude en mer ?",
    "options": [
     "Il manquait les étoiles",
     "Il fallait des horloges précises, qui ne fonctionnaient pas sur les navires",
     "La boussole n'indiquait pas l'Est",
     "La mer était trop profonde"
    ],
    "answer": 1,
    "explain": "Le problème fut résolu par le chronomètre de John Harrison au XVIIIe siècle."
   },
   {
    "type": "tf",
    "q": "Rome et New York ont une latitude semblable.",
    "answer": true,
    "explain": "Rome environ 42° N, New York environ 41° N."
   }
  ],
  "gen": [
   [
    "intAdd",
    2
   ]
  ]
 }
});
