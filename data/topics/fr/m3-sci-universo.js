TOPIC('fr', {
 "id": "m3-sci-universo",
 "title": "L'Univers",
 "intro": "Le Soleil n'est qu'une des centaines de milliards d'étoiles de notre galaxie, la <b>Voie lactée</b>, qui est elle-même l'une des milliards de galaxies. Comment naissent et meurent les étoiles ? Quelle est la taille de l'Univers ? Et comment tout a-t-il commencé, il y a <b>13,8 milliards d'années</b> ?",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "1. Mesurer des distances énormes",
   "html": "<p>Dans l'espace, le kilomètre est une unité trop petite. Les astronomes utilisent :</p>\n<ul>\n<li>l'<b>unité astronomique (UA)</b> : la distance moyenne Terre–Soleil, environ <b>150 millions de km</b> (149,6). On l'utilise à l'intérieur du Système solaire : Jupiter est à environ 5,2 UA, Neptune à environ 30 UA.</li>\n<li>l'<b>année-lumière (a.l.)</b> : la distance que la lumière parcourt en un an. La lumière voyage à environ <b>300 000 km par seconde</b>, donc :<br>\n300 000 km/s × 31 557 600 s ≈ <b>9 460 milliards de km</b> (9,46 × 10<sup>12</sup> km).</li>\n</ul>\n<p>⚠️ L'année-lumière n'est <b>pas</b> une mesure de temps, mais de <b>distance</b> !</p>\n<p>Conséquence surprenante : <b>regarder loin, c'est regarder dans le passé</b>. La lumière du Soleil met environ 8 minutes et 20 secondes pour arriver jusqu'à nous : nous voyons le Soleil tel qu'il était il y a 8 minutes. L'étoile la plus proche après le Soleil, <b>Proxima du Centaure</b>, est à <b>4,24 années-lumière</b> : nous la voyons telle qu'elle était il y a plus de 4 ans.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : combien de temps met la lumière du Soleil ?",
   "html": "<p>Distance Terre–Soleil ≈ 150 000 000 km. Vitesse de la lumière ≈ 300 000 km/s.</p>\n<p>temps = distance : vitesse = 150 000 000 : 300 000 = <b>500 secondes</b> = 8 minutes et 20 secondes.</p>\n<p>Et avec un vaisseau spatial ? La sonde <b>Voyager 1</b>, lancée en 1977, est l'objet humain le plus lointain et voyage à environ 17 km/s. Pour arriver à Proxima du Centaure (environ 40 000 milliards de km), il lui faudrait :<br>\n40 000 000 000 000 : 17 ≈ 2,35 × 10<sup>12</sup> secondes ≈ <b>75 000 ans</b> !</p>"
  },
  {
   "type": "3d",
   "title": "Notre quartier : le Système solaire",
   "scene": "solar",
   "options": {
    "labels": true
   },
   "caption": "Le Système solaire : le Soleil, 8 planètes, leurs satellites, des astéroïdes et des comètes. Les distances réelles seraient bien plus grandes : à l'échelle, les planètes seraient invisibles."
  },
  {
   "type": "text",
   "title": "2. Qu'est-ce qu'une étoile",
   "html": "<p>Une <b>étoile</b> est une énorme sphère de gaz très chaud (surtout de l'<b>hydrogène</b> et de l'<b>hélium</b>) qui produit de la lumière et de la chaleur toute seule. Dans son <b>noyau</b>, la température et la pression sont si élevées (dans le Soleil environ <b>15 millions de °C</b>) que les noyaux d'hydrogène fusionnent et forment de l'hélium : c'est la <b>fusion nucléaire</b>.</p>\n<p>Dans la fusion, une petite partie de la masse disparaît et devient de l'énergie, selon la célèbre formule d'Einstein <b>E = mc²</b>. Le Soleil transforme chaque seconde environ <b>600 millions de tonnes</b> d'hydrogène en hélium.</p>\n<p>Les étoiles ont des <b>couleurs</b> différentes selon la température de leur surface :</p>\n<ul>\n<li>🔵 <b>bleues/blanches</b> : les plus chaudes (plus de 10 000 °C), par ex. Rigel ;</li>\n<li>🟡 <b>jaunes</b> : moyennes, comme le Soleil (environ 5 500 °C) ;</li>\n<li>🔴 <b>rouges</b> : les plus « froides » (environ 3 000 °C), par ex. Bételgeuse.</li>\n</ul>\n<p>Exactement comme le fer d'un forgeron : il devient d'abord rouge, puis jaune, puis blanc à mesure qu'il chauffe.</p>"
  },
  {
   "type": "3d",
   "title": "À l'intérieur du Soleil",
   "scene": "layers",
   "options": {
    "layers": [
     {
      "r": 1,
      "color": "#fbbf24",
      "label": "Photosphère (la surface, ~5 500 °C)"
     },
     {
      "r": 0.97,
      "color": "#f97316",
      "label": "Zone convective : le gaz monte et descend"
     },
     {
      "r": 0.7,
      "color": "#ef4444",
      "label": "Zone radiative : l'énergie sort très lentement"
     },
     {
      "r": 0.25,
      "color": "#fef9c3",
      "label": "Noyau : fusion à ~15 millions de °C"
     }
    ]
   },
   "caption": "Fais tourner le Soleil : l'énergie produite dans le noyau met des dizaines de milliers d'années pour traverser la zone radiative et arriver en surface, puis seulement 8 minutes pour atteindre la Terre."
  },
  {
   "type": "3d",
   "title": "Les atomes qui allument les étoiles",
   "scene": "atom",
   "options": {
    "elements": [
     "H",
     "He",
     "C",
     "O",
     "Fe"
    ]
   },
   "caption": "L'hydrogène (1 proton) est le combustible des étoiles : en fusionnant, il devient de l'hélium (2 protons). Les plus grosses étoiles continuent à fusionner et produisent du carbone, de l'oxygène… jusqu'au fer."
  },
  {
   "type": "text",
   "title": "3. La vie d'une étoile",
   "html": "<p>Les étoiles naissent, vivent et meurent. Leur destin dépend surtout de leur <b>masse</b>.</p>\n<ol>\n<li><b>Nébuleuse</b> : un nuage de gaz et de poussières se contracte sous l'effet de la gravité.</li>\n<li><b>Protoétoile</b> : le centre se réchauffe ; quand il atteint environ 10 millions de °C, la fusion s'allume et une <b>étoile</b> naît.</li>\n<li><b>Phase stable</b> (séquence principale) : l'étoile brûle de l'hydrogène pendant des millions ou des milliards d'années. Le Soleil est à la moitié de sa vie : il a environ <b>4,6 milliards d'années</b> et vivra encore environ 5 milliards d'années.</li>\n<li><b>Géante rouge</b> : quand l'hydrogène du noyau est épuisé, l'étoile se gonfle énormément.</li>\n<li><b>La fin</b> :\n<ul>\n<li>les étoiles comme le Soleil expulsent leurs couches externes (une <b>nébuleuse planétaire</b>) et laissent une petite étoile très dense, la <b>naine blanche</b>, de la taille de la Terre ;</li>\n<li>les étoiles de plus d'environ 8 masses solaires explosent en une <b>supernova</b>, qui pendant quelques semaines peut briller plus qu'une galaxie entière. Il reste une <b>étoile à neutrons</b> ou, si la masse est énorme, un <b>trou noir</b>, si dense que même la lumière ne peut pas en sortir.</li>\n</ul></li>\n</ol>\n<p>Paradoxe : plus une étoile est grosse, <b>moins elle vit</b>, parce qu'elle consomme son combustible beaucoup plus vite. Les étoiles géantes durent quelques millions d'années ; les petites naines rouges des milliers de milliards.</p>"
  },
  {
   "type": "svg",
   "title": "Le cycle de vie des étoiles",
   "svg": "<svg viewBox=\"0 0 640 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"320\" fill=\"#0f172a\"/>\n<ellipse cx=\"60\" cy=\"160\" rx=\"48\" ry=\"34\" fill=\"#7c3aed\" opacity=\"0.7\"/>\n<ellipse cx=\"55\" cy=\"150\" rx=\"30\" ry=\"20\" fill=\"#c084fc\" opacity=\"0.6\"/>\n<text x=\"60\" y=\"220\" font-size=\"15\" fill=\"#e2e8f0\" text-anchor=\"middle\">Nébuleuse</text>\n<line x1=\"112\" y1=\"160\" x2=\"150\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n<line x1=\"112\" y1=\"160\" x2=\"150\" y2=\"215\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n<circle cx=\"175\" cy=\"95\" r=\"16\" fill=\"#facc15\"/>\n<text x=\"175\" y=\"70\" font-size=\"14\" fill=\"#fde68a\" text-anchor=\"middle\">Étoile comme le Soleil</text>\n<circle cx=\"175\" cy=\"230\" r=\"24\" fill=\"#60a5fa\"/>\n<text x=\"175\" y=\"275\" font-size=\"14\" fill=\"#bfdbfe\" text-anchor=\"middle\">Étoile massive</text>\n<line x1=\"195\" y1=\"95\" x2=\"265\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n<line x1=\"202\" y1=\"230\" x2=\"265\" y2=\"230\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n<circle cx=\"310\" cy=\"95\" r=\"36\" fill=\"#ef4444\"/>\n<text x=\"310\" y=\"150\" font-size=\"14\" fill=\"#fecaca\" text-anchor=\"middle\">Géante rouge</text>\n<circle cx=\"310\" cy=\"230\" r=\"44\" fill=\"#dc2626\"/>\n<text x=\"310\" y=\"292\" font-size=\"14\" fill=\"#fecaca\" text-anchor=\"middle\">Supergéante rouge</text>\n<line x1=\"348\" y1=\"95\" x2=\"410\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n<line x1=\"356\" y1=\"230\" x2=\"410\" y2=\"230\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n<circle cx=\"445\" cy=\"95\" r=\"28\" fill=\"none\" stroke=\"#22d3ee\" stroke-width=\"6\" opacity=\"0.8\"/>\n<text x=\"445\" y=\"145\" font-size=\"13\" fill=\"#a5f3fc\" text-anchor=\"middle\">Nébuleuse planétaire</text>\n<polygon points=\"445,195 455,220 482,222 461,238 468,264 445,249 422,264 429,238 408,222 435,220\" fill=\"#fde047\"/>\n<text x=\"445\" y=\"292\" font-size=\"14\" fill=\"#fef08a\" text-anchor=\"middle\">Supernova !</text>\n<line x1=\"475\" y1=\"95\" x2=\"540\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n<line x1=\"485\" y1=\"225\" x2=\"540\" y2=\"200\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n<line x1=\"485\" y1=\"235\" x2=\"540\" y2=\"265\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n<circle cx=\"565\" cy=\"95\" r=\"8\" fill=\"#f8fafc\"/>\n<text x=\"565\" y=\"125\" font-size=\"14\" fill=\"#f8fafc\" text-anchor=\"middle\">Naine blanche</text>\n<circle cx=\"565\" cy=\"195\" r=\"6\" fill=\"#a5b4fc\"/>\n<text x=\"565\" y=\"222\" font-size=\"13\" fill=\"#c7d2fe\" text-anchor=\"middle\">Étoile à neutrons</text>\n<circle cx=\"565\" cy=\"270\" r=\"14\" fill=\"#000000\" stroke=\"#f97316\" stroke-width=\"3\"/>\n<text x=\"565\" y=\"305\" font-size=\"14\" fill=\"#fdba74\" text-anchor=\"middle\">Trou noir</text>\n</svg>",
   "caption": "La branche du haut est le futur du Soleil ; la branche du bas celui des étoiles bien plus grosses."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : lumière et étoiles",
   "questions": [
    {
     "type": "tf",
     "q": "L'année-lumière est une unité de mesure du temps.",
     "answer": false,
     "explain": "C'est une distance : celle que la lumière parcourt en un an, environ 9 460 milliards de km."
    },
    {
     "type": "mc",
     "q": "Qu'est-ce qui produit l'énergie d'une étoile ?",
     "options": [
      "La combustion du charbon",
      "La fusion nucléaire de l'hydrogène",
      "L'électricité des éclairs"
     ],
     "answer": 1,
     "explain": "Dans le noyau, l'hydrogène fusionne en hélium en libérant de l'énergie."
    },
    {
     "type": "mc",
     "q": "Quelle étoile est la plus chaude en surface ?",
     "options": [
      "Une étoile rouge",
      "Une étoile jaune",
      "Une étoile bleue"
     ],
     "answer": 2,
     "explain": "Les étoiles bleues sont les plus chaudes, les rouges les moins chaudes."
    },
    {
     "type": "mc",
     "q": "Comment finira le Soleil ?",
     "options": [
      "En trou noir",
      "En naine blanche",
      "Il explosera en supernova"
     ],
     "answer": 1,
     "explain": "Le Soleil n'a pas assez de masse pour exploser : il deviendra une géante rouge puis une naine blanche."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Les galaxies et la Voie lactée",
   "html": "<p>Une <b>galaxie</b> est un énorme ensemble d'étoiles, de gaz, de poussières et de matière noire maintenu par la gravité. Selon la classification d'<b>Edwin Hubble</b> (1926), il en existe trois types principaux :</p>\n<ul>\n<li><b>spirales</b> (avec des bras qui tournent autour d'un centre, comme la nôtre) ;</li>\n<li><b>elliptiques</b> (en forme de ballon aplati, souvent avec de vieilles étoiles) ;</li>\n<li><b>irrégulières</b> (sans forme précise, comme les Nuages de Magellan).</li>\n</ul>\n<p>Notre galaxie est la <b>Voie lactée</b> : une spirale avec une barre centrale, large d'environ <b>100 000 années-lumière</b>, avec <b>100 à 400 milliards d'étoiles</b>. Le Soleil se trouve dans un bras périphérique, à environ 26 000 années-lumière du centre, et met environ <b>230 millions d'années</b> pour faire un tour complet. Au centre se trouve un trou noir géant, <b>Sagittarius A*</b>, d'une masse d'environ 4 millions de Soleils : sa première « photo » a été publiée en 2022.</p>\n<p>Par les nuits sombres, loin des lumières, la Voie lactée se voit comme une bande claire dans le ciel : nous la regardons « par la tranche », de l'intérieur. C'est <b>Galilée</b>, en 1610, qui découvrit avec sa lunette que cette bande est faite d'innombrables étoiles.</p>\n<p>La grande galaxie la plus proche est <b>Andromède</b>, à environ <b>2,5 millions d'années-lumière</b> : c'est l'objet le plus lointain visible à l'œil nu. Dans environ 4 à 5 milliards d'années, elle entrera en collision avec la Voie lactée.</p>"
  },
  {
   "type": "svg",
   "title": "La Voie lactée vue d'en haut (et où nous sommes)",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#020617\"/>\n<ellipse cx=\"300\" cy=\"160\" rx=\"60\" ry=\"30\" fill=\"#fde68a\" opacity=\"0.9\"/>\n<path d=\"M300 160 C 380 100, 470 140, 470 200 C 470 260, 380 290, 300 280\" fill=\"none\" stroke=\"#93c5fd\" stroke-width=\"22\" opacity=\"0.55\"/>\n<path d=\"M300 160 C 220 220, 130 180, 130 120 C 130 60, 220 30, 300 40\" fill=\"none\" stroke=\"#93c5fd\" stroke-width=\"22\" opacity=\"0.55\"/>\n<path d=\"M340 150 C 420 60, 540 90, 545 170\" fill=\"none\" stroke=\"#c4b5fd\" stroke-width=\"14\" opacity=\"0.45\"/>\n<path d=\"M260 170 C 180 260, 60 230, 55 150\" fill=\"none\" stroke=\"#c4b5fd\" stroke-width=\"14\" opacity=\"0.45\"/>\n<circle cx=\"440\" cy=\"245\" r=\"7\" fill=\"#facc15\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n<line x1=\"447\" y1=\"250\" x2=\"500\" y2=\"285\" stroke=\"#facc15\" stroke-width=\"2\"/>\n<text x=\"505\" y=\"295\" font-size=\"16\" fill=\"#facc15\">Le Soleil (nous !)</text>\n<text x=\"300\" y=\"166\" font-size=\"14\" fill=\"#0f172a\" text-anchor=\"middle\" font-weight=\"bold\">Centre</text>\n<line x1=\"50\" y1=\"25\" x2=\"550\" y2=\"25\" stroke=\"#e2e8f0\" stroke-width=\"2\"/>\n<text x=\"300\" y=\"18\" font-size=\"15\" fill=\"#e2e8f0\" text-anchor=\"middle\">environ 100 000 années-lumière</text>\n<line x1=\"300\" y1=\"160\" x2=\"440\" y2=\"245\" stroke=\"#f472b6\" stroke-width=\"2\" stroke-dasharray=\"6\"/>\n<text x=\"360\" y=\"225\" font-size=\"14\" fill=\"#f9a8d4\">26.000 a.l.</text>\n</svg>",
   "caption": "Dessin simplifié : la Voie lactée est une spirale barrée ; le Système solaire est en périphérie."
  },
  {
   "type": "text",
   "title": "5. Le Big Bang : comment tout a commencé",
   "html": "<p>En 1929, l'astronome américain <b>Edwin Hubble</b> découvrit que presque toutes les galaxies <b>s'éloignent</b> de nous, et d'autant plus vite qu'elles sont plus lointaines. Le Belge <b>Georges Lemaître</b> (un prêtre et physicien) l'avait déjà prévu en 1927 : l'Univers est en <b>expansion</b>.</p>\n<p>Si aujourd'hui tout s'éloigne, en remontant dans le temps tout devait être plus proche, plus dense et plus chaud. Il y a environ <b>13,8 milliards d'années</b>, l'Univers était minuscule et très chaud : de là commence son expansion, appelée <b>Big Bang</b>.</p>\n<ul>\n<li>Dans les premières minutes se formèrent les noyaux d'<b>hydrogène</b> et d'<b>hélium</b>.</li>\n<li>Après environ <b>380 000 ans</b>, l'Univers se refroidit assez pour former des atomes et devint transparent à la lumière.</li>\n<li>Après quelques centaines de millions d'années, les <b>premières étoiles</b> et les premières galaxies s'allumèrent.</li>\n<li>Il y a environ <b>4,6 milliards d'années</b> naquirent le Soleil et la Terre.</li>\n</ul>\n<p><b>Les preuves</b> du Big Bang : (1) l'expansion observée par Hubble ; (2) le <b>rayonnement cosmique de fond</b>, la « faible chaleur » restée du Big Bang, découverte par hasard en 1965 par Arno Penzias et Robert Wilson (prix Nobel 1978) ; (3) la quantité d'hydrogène et d'hélium dans l'Univers, exactement celle prévue par la théorie.</p>\n<p>⚠️ Le Big Bang n'a <b>pas</b> été une explosion en un point de l'espace : c'est l'espace lui-même qui s'étend, partout.</p>"
  },
  {
   "type": "widget",
   "title": "L'histoire de l'Univers (échelle logarithmique)",
   "widget": "timeline",
   "options": {
    "scale": "log",
    "events": [
     {
      "year": -13800000000,
      "label": "Big Bang",
      "icon": "💥"
     },
     {
      "year": -13500000000,
      "label": "Premières étoiles",
      "icon": "✨"
     },
     {
      "year": -4600000000,
      "label": "Naissance du Soleil",
      "icon": "☀️"
     },
     {
      "year": -3800000000,
      "label": "Première vie",
      "icon": "🦠"
     },
     {
      "year": -66000000,
      "label": "Fin des dinosaures",
      "icon": "🦖"
     },
     {
      "year": -300000,
      "label": "Homo sapiens",
      "icon": "🧑"
     },
     {
      "year": 1610,
      "label": "Galilée : télescope",
      "icon": "🔭"
     },
     {
      "year": 1969,
      "label": "Homme sur la Lune",
      "icon": "🌕"
     }
    ]
   },
   "caption": "Sur une échelle normale, toute l'histoire humaine serait un point invisible à l'extrémité droite : c'est pourquoi on utilise une échelle logarithmique."
  },
  {
   "type": "example",
   "title": "Exemple pratique : observer le ciel",
   "html": "<p>Par une nuit claire, loin des lumières de la ville, tu peux observer :</p>\n<ul>\n<li>environ <b>2 000 à 3 000 étoiles</b> à l'œil nu (en ville, peut-être 50 !) ;</li>\n<li>l'<b>étoile Polaire</b>, qui indique le Nord : tu la trouves en prolongeant de 5 fois le côté arrière du « chariot » de la Grande Ourse ;</li>\n<li><b>Sirius</b>, l'étoile la plus brillante du ciel nocturne, à 8,6 années-lumière ;</li>\n<li>la <b>galaxie d'Andromède</b>, une petite tache claire en automne : sa lumière est partie il y a 2,5 millions d'années, quand sur Terre vivaient les premiers êtres humains du genre <i>Homo</i>.</li>\n</ul>\n<p>Avec une appli d'astronomie ou une carte du ciel, tu peux reconnaître des constellations comme Orion, Cassiopée et le Scorpion.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Nous sommes faits de poussière d'étoiles",
   "html": "<p>Le carbone de ton ADN, l'oxygène que tu respires, le calcium de tes os et le fer de ton sang ont été produits à l'intérieur d'anciennes étoiles, puis dispersés dans l'espace par leurs explosions. Seuls l'hydrogène et l'hélium (et un peu de lithium) viennent directement du Big Bang. Comme l'a dit l'astronome Carl Sagan : <i>« Nous sommes faits de la même substance que les étoiles »</i>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? L'Univers que nous ne voyons pas",
   "html": "<p>Tout ce que nous voyons – étoiles, planètes, gaz, nous – ne représente qu'environ <b>5 %</b> de l'Univers. Environ <b>27 %</b> est de la <b>matière noire</b>, qui n'émet pas de lumière mais se fait sentir par sa gravité ; les <b>68 %</b> restants environ sont l'<b>énergie noire</b>, qui fait accélérer l'expansion. Personne ne sait encore ce que c'est : peut-être le découvriras-tu !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Une cuillère très lourde",
   "html": "<p>Une <b>étoile à neutrons</b> a plus de masse que le Soleil, comprimée dans une sphère d'environ 20 km de diamètre : une cuillère à café de sa matière pèserait sur Terre des centaines de millions de tonnes, plus qu'une montagne. Et le télescope spatial <b>James Webb</b>, lancé le 25 décembre 2021, observe des galaxies dont la lumière est partie il y a plus de 13 milliards d'années.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons d'imaginer l'Univers",
   "intro": "Des nombres comme « milliards d'années-lumière » ne disent rien à notre cerveau. Voici quelques astuces pour les rendre concrets.",
   "tabs": [
    {
     "label": "⚽ Le Système solaire à l'échelle",
     "html": "<p>Réduisons tout d'environ <b>4,6 milliards de fois</b> : le Soleil devient un ballon de <b>30 cm</b>.</p>\n<table>\n<tr><th>Objet</th><th>À l'échelle</th><th>Distance au ballon</th></tr>\n<tr><td>☀️ Soleil</td><td>ballon de 30 cm</td><td>—</td></tr>\n<tr><td>🌍 Terre</td><td>grain de 2,7 mm</td><td>environ 32 m</td></tr>\n<tr><td>🪐 Jupiter</td><td>bille de 3 cm</td><td>environ 170 m</td></tr>\n<tr><td>🔵 Neptune</td><td>petite balle de 1 cm</td><td>presque 1 km</td></tr>\n<tr><td>⭐ Proxima du Centaure</td><td>une cerise</td><td>environ <b>8 600 km</b> : comme de la France à la Chine !</td></tr>\n</table>\n<p>L'Univers est surtout… du <b>vide</b>.</p>"
    },
    {
     "label": "📅 Le calendrier cosmique",
     "html": "<p>L'astronome <b>Carl Sagan</b> proposa de comprimer toute l'histoire de l'Univers en <b>une seule année</b>. Chaque jour vaut environ 38 millions d'années ; chaque seconde environ 440 ans.</p>\n<ul>\n<li>1ᵉʳ janvier, minuit : <b>Big Bang</b> ;</li>\n<li>début septembre : naissent le <b>Soleil</b> et la <b>Terre</b> ;</li>\n<li>fin septembre : apparaît la <b>vie</b> (bactéries) ;</li>\n<li>30 décembre, matin : les <b>dinosaures</b> s'éteignent ;</li>\n<li>31 décembre, 23 h 48 : apparaît <b>Homo sapiens</b> ;</li>\n<li>les <b>11 dernières secondes</b> avant minuit : toute l'histoire écrite, des Égyptiens à aujourd'hui.</li>\n</ul>"
    },
    {
     "label": "🎈 Le ballon qui se gonfle",
     "html": "<p>Dessine des petits points sur un ballon dégonflé, puis gonfle-le : tous les points s'éloignent les uns des autres, et les plus distants s'éloignent plus vite. Aucun point n'est « le centre ». Les galaxies sont comme les points et l'espace est le caoutchouc du ballon : c'est l'espace qui se dilate.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0f9ff\"/>\n<circle cx=\"120\" cy=\"130\" r=\"55\" fill=\"#f87171\"/>\n<circle cx=\"105\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/><circle cx=\"135\" cy=\"120\" r=\"5\" fill=\"#1e293b\"/><circle cx=\"120\" cy=\"148\" r=\"5\" fill=\"#1e293b\"/>\n<line x1=\"120\" y1=\"185\" x2=\"120\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"2\"/>\n<text x=\"120\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#0f172a\">hier</text>\n<text x=\"255\" y=\"135\" font-size=\"40\" text-anchor=\"middle\" fill=\"#64748b\">→</text>\n<circle cx=\"430\" cy=\"125\" r=\"110\" fill=\"#f87171\"/>\n<circle cx=\"385\" cy=\"85\" r=\"7\" fill=\"#1e293b\"/><circle cx=\"470\" cy=\"95\" r=\"7\" fill=\"#1e293b\"/><circle cx=\"430\" cy=\"170\" r=\"7\" fill=\"#1e293b\"/>\n<line x1=\"385\" y1=\"85\" x2=\"470\" y2=\"95\" stroke=\"#1e293b\" stroke-dasharray=\"5\"/>\n<line x1=\"385\" y1=\"85\" x2=\"430\" y2=\"170\" stroke=\"#1e293b\" stroke-dasharray=\"5\"/>\n<text x=\"430\" y=\"252\" font-size=\"15\" text-anchor=\"middle\" fill=\"#0f172a\">aujourd'hui : toutes les distances ont doublé</text>\n</svg>"
    },
    {
     "label": "🪐 Explore en 3D",
     "html": "<p>Pars du « quartier » que tu connais, le Système solaire : fais-le tourner et regarde les orbites. Puis rappelle-toi que <b>tout</b> cela, agrandi au maximum, est un point invisible dans la Voie lactée, qui est elle-même un point parmi des milliards de galaxies.</p>",
     "scene": "solar",
     "options": {
      "labels": true
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte de l'Univers : touche les nœuds et découvre le pourquoi",
   "nodes": [
    {
     "id": "bigbang",
     "label": "Big Bang",
     "x": 50,
     "y": 6,
     "color": "#f97316",
     "html": "Le début de l'expansion de l'Univers, il y a environ 13,8 milliards d'années.",
     "why": "Proposé par <b>Lemaître</b> (1927) à partir des équations de la relativité générale d'Einstein ; confirmé par l'expansion observée par <b>Hubble</b> (1929) et par le rayonnement de fond découvert par <b>Penzias et Wilson</b> (1965). L'âge se déduit en mesurant la vitesse d'expansion et le rayonnement de fond (satellite Planck)."
    },
    {
     "id": "elementi",
     "label": "Hydrogène et hélium",
     "x": 20,
     "y": 24,
     "color": "#38bdf8",
     "html": "Les premiers éléments, formés dans les premières minutes.",
     "why": "L'Univers était trop chaud et se refroidissait trop vite pour construire des noyaux plus lourds : c'est pourquoi aujourd'hui encore environ 74 % de la matière ordinaire est de l'hydrogène et environ 24 % de l'hélium."
    },
    {
     "id": "gravita",
     "label": "Gravité",
     "x": 80,
     "y": 24,
     "color": "#a855f7",
     "html": "La force qui attire les masses entre elles.",
     "why": "Décrite par <b>Newton</b> (1687) puis par <b>Einstein</b> avec la relativité générale (1915) comme courbure de l'espace-temps. C'est elle qui fait se condenser les nuages de gaz en étoiles et qui maintient les galaxies ensemble."
    },
    {
     "id": "nebulose",
     "label": "Nébuleuses",
     "x": 50,
     "y": 34,
     "color": "#c084fc",
     "html": "Nuages de gaz et de poussières : les « berceaux » des étoiles.",
     "why": "Là où le gaz est un peu plus dense, la gravité l'attire et le comprime de plus en plus, jusqu'à ce qu'il s'échauffe : c'est ainsi que naissent les étoiles, souvent en groupes."
    },
    {
     "id": "stelle",
     "label": "Étoiles",
     "x": 30,
     "y": 55,
     "color": "#facc15",
     "html": "Sphères de gaz qui produisent de l'énergie par fusion nucléaire.",
     "why": "En 1920, Arthur Eddington émit l'hypothèse que les étoiles brillent en fusionnant de l'hydrogène ; en 1938-39, <b>Hans Bethe</b> expliqua les réactions précises. L'énergie vient de la masse qui « disparaît », selon E = mc²."
    },
    {
     "id": "nuovielementi",
     "label": "Nouveaux éléments",
     "x": 12,
     "y": 78,
     "color": "#22c55e",
     "html": "Carbone, oxygène, fer, or… produits par les étoiles.",
     "why": "En 1957, un célèbre article (Burbidge, Burbidge, Fowler et Hoyle) démontra comment les étoiles « cuisinent » les éléments ; ceux plus lourds que le fer naissent dans les supernovæ et dans les collisions entre étoiles à neutrons."
    },
    {
     "id": "fine",
     "label": "Naines blanches, supernovæ, trous noirs",
     "x": 50,
     "y": 78,
     "color": "#64748b",
     "html": "Le destin final des étoiles dépend de leur masse.",
     "why": "L'Indien <b>Subrahmanyan Chandrasekhar</b> calcula en 1930 qu'au-delà d'une certaine masse, une étoile mourante ne peut plus se maintenir : elle s'effondre. Les trous noirs étaient une prédiction de la relativité ; la première image de l'un d'eux date de 2019."
    },
    {
     "id": "galassie",
     "label": "Galaxies",
     "x": 80,
     "y": 55,
     "color": "#3b82f6",
     "html": "D'énormes systèmes d'étoiles ; la nôtre est la Voie lactée.",
     "why": "Jusqu'en 1924, beaucoup pensaient que la Voie lactée était tout l'Univers. <b>Hubble</b> mesura la distance d'Andromède et démontra que c'est une galaxie séparée, bien plus lointaine."
    },
    {
     "id": "noi",
     "label": "Système solaire et vie",
     "x": 85,
     "y": 92,
     "color": "#16a34a",
     "html": "Le Soleil, la Terre et nous, nés il y a 4,6 milliards d'années.",
     "why": "Le Soleil s'est formé à partir d'un nuage enrichi par les restes d'étoiles précédentes : sans leurs explosions, il n'y aurait ni carbone, ni oxygène, ni fer, c'est-à-dire les briques de la vie."
    }
   ],
   "edges": [
    [
     "bigbang",
     "elementi",
     "produit"
    ],
    [
     "bigbang",
     "gravita",
     "puis agit la"
    ],
    [
     "elementi",
     "nebulose",
     "forment les"
    ],
    [
     "gravita",
     "nebulose",
     "comprime les"
    ],
    [
     "nebulose",
     "stelle",
     "font naître"
    ],
    [
     "stelle",
     "nuovielementi",
     "fabriquent"
    ],
    [
     "stelle",
     "fine",
     "meurent en"
    ],
    [
     "fine",
     "nuovielementi",
     "dispersent"
    ],
    [
     "gravita",
     "galassie",
     "maintient ensemble les"
    ],
    [
     "stelle",
     "galassie",
     "forment les"
    ],
    [
     "nuovielementi",
     "noi",
     "construisent"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : galaxies et Big Bang",
   "questions": [
    {
     "type": "mc",
     "q": "Comment s'appelle notre galaxie ?",
     "options": [
      "Andromède",
      "Voie lactée",
      "Nuage de Magellan"
     ],
     "answer": 1,
     "explain": "Nous vivons dans la Voie lactée, une galaxie spirale barrée."
    },
    {
     "type": "num",
     "q": "Il y a environ combien de milliards d'années a eu lieu le Big Bang ?",
     "answer": 13.8,
     "tol": 0.2,
     "explain": "Il y a environ 13,8 milliards d'années."
    },
    {
     "type": "mc",
     "q": "Qui a observé en 1929 que les galaxies s'éloignent ?",
     "options": [
      "Galilée",
      "Edwin Hubble",
      "Isaac Newton"
     ],
     "answer": 1,
     "explain": "Edwin Hubble, à l'observatoire du mont Wilson."
    }
   ]
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>1 année-lumière ≈ 9 460 milliards de km : c'est une <b>distance</b>. Regarder loin = regarder dans le passé.</li>\n<li>Les étoiles brillent grâce à la <b>fusion nucléaire</b> de l'hydrogène en hélium.</li>\n<li>Cycle : nébuleuse → étoile → géante rouge → <b>naine blanche</b> (petites étoiles) ou <b>supernova</b> → étoile à neutrons ou <b>trou noir</b> (grosses étoiles).</li>\n<li>La <b>Voie lactée</b> est une galaxie spirale de 100 000 années-lumière ; Andromède est à 2,5 millions d'années-lumière.</li>\n<li>L'Univers est en expansion depuis le <b>Big Bang</b>, il y a 13,8 milliards d'années.</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Année-lumière",
   "d": "Distance parcourue par la lumière en un an : environ 9 460 milliards de km."
  },
  {
   "t": "Unité astronomique",
   "d": "Distance moyenne Terre–Soleil, environ 150 millions de km."
  },
  {
   "t": "Fusion nucléaire",
   "d": "Union de noyaux légers en noyaux plus lourds, avec libération d'énergie."
  },
  {
   "t": "Nébuleuse",
   "d": "Nuage de gaz et de poussières dans l'espace, où naissent les étoiles."
  },
  {
   "t": "Naine blanche",
   "d": "Petit reste très dense d'une étoile comme le Soleil."
  },
  {
   "t": "Supernova",
   "d": "Explosion d'une étoile très massive à la fin de sa vie."
  },
  {
   "t": "Trou noir",
   "d": "Région de l'espace où la gravité est si forte que même la lumière ne peut pas en sortir."
  },
  {
   "t": "Galaxie",
   "d": "Énorme système d'étoiles, de gaz et de poussières maintenu par la gravité."
  },
  {
   "t": "Big Bang",
   "d": "Le début de l'expansion de l'Univers, il y a 13,8 milliards d'années."
  },
  {
   "t": "Rayonnement cosmique de fond",
   "d": "Faible rayonnement resté de l'Univers primordial, découvert en 1965."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "L'année-lumière mesure…",
    "options": [
     "un temps",
     "une distance",
     "une vitesse",
     "une température"
    ],
    "answer": 1,
    "explain": "C'est la distance parcourue par la lumière en un an."
   },
   {
    "type": "num",
    "q": "La lumière voyage à 300 000 km/s. Combien de secondes met-elle pour parcourir 150 000 000 km ?",
    "answer": 500,
    "unit": "s",
    "explain": "150 000 000 : 300 000 = 500 s (8 min 20 s)."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le principal gaz « brûlé » (fusionné) dans les étoiles ?",
    "answer": [
     "hydrogène",
     "l'hydrogène",
     "hydrogene",
     "h"
    ],
    "explain": "L'hydrogène, qui en fusionnant devient de l'hélium."
   },
   {
    "type": "tf",
    "q": "Les étoiles les plus massives vivent plus longtemps que les petites.",
    "answer": false,
    "explain": "Elles consomment leur combustible beaucoup plus vite : elles vivent moins longtemps."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre la vie d'une étoile comme le Soleil.",
    "items": [
     "Nébuleuse",
     "Protoétoile",
     "Étoile stable (comme aujourd'hui)",
     "Géante rouge",
     "Naine blanche"
    ],
    "explain": "Du nuage de gaz à la naine blanche finale."
   },
   {
    "type": "mc",
    "q": "Que peut-il rester après l'explosion d'une supernova ?",
    "options": [
     "Une naine blanche",
     "Une étoile à neutrons ou un trou noir",
     "Une planète gazeuse"
    ],
    "answer": 1,
    "explain": "Les étoiles massives laissent une étoile à neutrons ou un trou noir."
   },
   {
    "type": "mc",
    "q": "Quelle est approximativement la largeur de la Voie lactée ?",
    "options": [
     "100 années-lumière",
     "100 000 années-lumière",
     "100 milliards d'années-lumière"
    ],
    "answer": 1,
    "explain": "Environ 100 000 années-lumière."
   },
   {
    "type": "text",
    "q": "Comment s'appelle la grande galaxie spirale la plus proche, visible à l'œil nu ?",
    "answer": [
     "andromède",
     "andromede",
     "galaxie d'andromède",
     "la galaxie d'andromède",
     "galaxie d'andromede",
     "la galaxie d'andromede",
     "m31"
    ],
    "explain": "Andromède (M31), à environ 2,5 millions d'années-lumière."
   },
   {
    "type": "mc",
    "q": "Laquelle de ces propositions n'est PAS une preuve du Big Bang ?",
    "options": [
     "L'éloignement des galaxies",
     "Le rayonnement cosmique de fond",
     "Les phases de la Lune",
     "L'abondance d'hydrogène et d'hélium"
    ],
    "answer": 2,
    "explain": "Les phases de la Lune dépendent de la position de la Lune, de la Terre et du Soleil."
   },
   {
    "type": "tf",
    "q": "Le fer de notre sang a été produit à l'intérieur d'étoiles.",
    "answer": true,
    "explain": "Tous les éléments plus lourds que l'hélium (sauf un peu de lithium) viennent des étoiles."
   },
   {
    "type": "mc",
    "q": "De quelle couleur sont les étoiles les plus froides ?",
    "options": [
     "Bleues",
     "Jaunes",
     "Rouges"
    ],
    "answer": 2,
    "explain": "Environ 3 000 °C en surface : elles paraissent rouges."
   },
   {
    "type": "num",
    "q": "Proxima du Centaure est à 4,24 années-lumière. Il y a combien d'années est partie la lumière que nous voyons aujourd'hui ?",
    "answer": 4.24,
    "tol": 0.01,
    "unit": "ans",
    "explain": "La lumière met 1 an pour chaque année-lumière : 4,24 ans."
   }
  ]
 }
});
