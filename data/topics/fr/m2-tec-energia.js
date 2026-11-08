TOPIC('fr', {
 "id": "m2-tec-energia",
 "title": "L'énergie et les centrales",
 "intro": "Tu appuies sur un interrupteur et la lumière s'allume : derrière ce geste, il y a un très long voyage. L'électricité naît dans une <b>centrale</b>, où une source d'énergie (eau, vent, soleil, gaz, chaleur de la Terre…) est <b>transformée</b>, puis elle parcourt des centaines de kilomètres sur des câbles jusqu'à la prise de la maison. Découvrons comment cela fonctionne.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "Énergie : rien ne se crée, tout se transforme",
   "html": "<p>L'<b>énergie</b> est la capacité d'effectuer un travail : faire bouger, chauffer, éclairer. Elle se mesure en <b>joules</b> (J) ; pour l'électricité, on utilise le <b>kilowattheure</b> (kWh).</p>\n<p>Il existe de nombreuses <b>formes</b> d'énergie : <b>mécanique</b> (mouvement et position), <b>thermique</b> (chaleur), <b>chimique</b> (dans les combustibles et les aliments), <b>électrique</b>, <b>lumineuse</b> (rayonnante), <b>nucléaire</b>.</p>\n<p>Règle d'or (principe de conservation de l'énergie) : l'énergie <b>ne se crée pas et ne se détruit pas</b>, elle <b>se transforme</b> d'une forme à l'autre. Les centrales électriques ne « produisent » pas d'énergie à partir de rien : elles la transforment en énergie électrique.</p>\n<p>Dans chaque transformation, une partie de l'énergie se perd, presque toujours sous forme de chaleur. Le <b>rendement</b> dit quelle quantité d'énergie utile nous obtenons :</p>\n<p style=\"text-align:center\"><b>rendement = énergie utile ÷ énergie dépensée × 100</b></p>"
  },
  {
   "type": "text",
   "title": "Les sources d'énergie",
   "html": "<table>\n<tr><th>Sources <b>non renouvelables</b></th><th>Sources <b>renouvelables</b></th></tr>\n<tr><td>Elles se sont formées en millions d'années et s'épuisent : <b>pétrole</b>, <b>charbon</b>, <b>gaz naturel</b> (combustibles fossiles), <b>uranium</b> (nucléaire).</td><td>Elles se régénèrent en permanence grâce au Soleil ou à la Terre : <b>solaire</b>, <b>éolienne</b> (vent), <b>hydroélectrique</b> (eau), <b>géothermique</b> (chaleur interne), <b>biomasse</b> (bois, déchets végétaux), énergie de la <b>mer</b>.</td></tr>\n<tr><td>En brûlant les combustibles fossiles, on libère du <b>dioxyde de carbone</b> (CO₂), le principal gaz responsable du réchauffement climatique, et des substances polluantes.</td><td>Pendant leur fonctionnement, elles émettent très peu de CO₂, mais certaines dépendent de la météo (soleil, vent) et il faut des systèmes de <b>stockage</b>.</td></tr>\n</table>"
  },
  {
   "type": "text",
   "title": "Le cœur de presque toute centrale : turbine + alternateur",
   "html": "<p>En <b>1831</b>, l'Anglais <b>Michael Faraday</b> découvrit l'<b>induction électromagnétique</b> : si un aimant se déplace près d'une bobine de fil de cuivre, un courant électrique naît dans le fil. C'est le principe de la dynamo du vélo et de presque toutes les centrales.</p>\n<ol>\n<li>La source d'énergie met en mouvement une <b>turbine</b> (une grande roue à pales) : elle est poussée par l'eau, le vent ou la vapeur.</li>\n<li>La turbine fait tourner l'<b>alternateur</b> : des aimants qui tournent à l'intérieur de bobines de cuivre → on produit du <b>courant alternatif</b>.</li>\n<li>Le <b>transformateur</b> augmente la tension (jusqu'à 380 000 volts en Italie) pour transporter l'énergie avec moins de pertes.</li>\n<li>Les <b>lignes à haute tension</b> (les pylônes) portent l'énergie au loin ; les <b>postes de transformation</b> abaissent la tension jusqu'aux <b>230 volts</b> des prises de la maison, à <b>50 hertz</b>.</li>\n</ol>\n<p>Le <b>photovoltaïque</b> fait exception : les panneaux transforment la lumière <b>directement</b> en électricité, sans turbines. Le courant produit est continu et un <b>onduleur</b> le transforme en courant alternatif.</p>"
  },
  {
   "type": "svg",
   "title": "De la centrale à la prise de la maison",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ecfeff\"/>\n<rect x=\"0\" y=\"240\" width=\"600\" height=\"60\" fill=\"#bbf7d0\"/>\n<rect x=\"20\" y=\"130\" width=\"90\" height=\"110\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"3\"/>\n<rect x=\"40\" y=\"80\" width=\"22\" height=\"50\" fill=\"#64748b\"/>\n<circle cx=\"51\" cy=\"65\" r=\"12\" fill=\"#e2e8f0\"/>\n<circle cx=\"62\" cy=\"48\" r=\"15\" fill=\"#f1f5f9\"/>\n<circle cx=\"65\" cy=\"185\" r=\"26\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<line x1=\"65\" y1=\"159\" x2=\"65\" y2=\"211\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<line x1=\"39\" y1=\"185\" x2=\"91\" y2=\"185\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<text x=\"65\" y=\"268\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\" text-anchor=\"middle\">1 centrale</text>\n<rect x=\"140\" y=\"180\" width=\"60\" height=\"60\" fill=\"#f97316\" stroke=\"#7c2d12\" stroke-width=\"3\"/>\n<text x=\"170\" y=\"218\" font-size=\"22\" fill=\"#ffffff\" text-anchor=\"middle\">⚡</text>\n<text x=\"170\" y=\"268\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\" text-anchor=\"middle\">2 transfo.</text>\n<text x=\"170\" y=\"286\" font-size=\"13\" fill=\"#7c2d12\" text-anchor=\"middle\">monte à 380 kV</text>\n<polygon points=\"260,240 280,90 300,240\" fill=\"none\" stroke=\"#334155\" stroke-width=\"4\"/>\n<line x1=\"255\" y1=\"110\" x2=\"305\" y2=\"110\" stroke=\"#334155\" stroke-width=\"4\"/>\n<polygon points=\"380,240 400,90 420,240\" fill=\"none\" stroke=\"#334155\" stroke-width=\"4\"/>\n<line x1=\"375\" y1=\"110\" x2=\"425\" y2=\"110\" stroke=\"#334155\" stroke-width=\"4\"/>\n<path d=\"M200 195 Q 230 120 258 110 Q 340 140 378 110 Q 430 140 460 190\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<text x=\"340\" y=\"268\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\" text-anchor=\"middle\">3 ligne HT</text>\n<rect x=\"450\" y=\"190\" width=\"40\" height=\"50\" fill=\"#22c55e\" stroke=\"#14532d\" stroke-width=\"3\"/>\n<text x=\"470\" y=\"268\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\" text-anchor=\"middle\">4 poste</text>\n<polygon points=\"510,180 550,145 590,180\" fill=\"#ef4444\"/>\n<rect x=\"515\" y=\"180\" width=\"70\" height=\"60\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<circle cx=\"550\" cy=\"205\" r=\"10\" fill=\"#fde047\"/>\n<line x1=\"490\" y1=\"210\" x2=\"515\" y2=\"210\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<text x=\"550\" y=\"268\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\" text-anchor=\"middle\">5 maison</text>\n<text x=\"550\" y=\"286\" font-size=\"13\" fill=\"#92400e\" text-anchor=\"middle\">230 V</text>\n<text x=\"300\" y=\"30\" font-size=\"18\" font-weight=\"bold\" fill=\"#0e7490\" text-anchor=\"middle\">Le voyage de l'électricité</text>\n</svg>",
   "caption": "La tension est augmentée pour le transport (moins de pertes dans les câbles) et abaissée avant d'entrer dans les maisons."
  },
  {
   "type": "text",
   "title": "Les principaux types de centrale",
   "html": "<ul>\n<li><b>Thermique</b> : elle brûle du gaz, du charbon ou du pétrole dans une chaudière ; la chaleur transforme l'eau en <b>vapeur</b> à haute pression qui fait tourner la turbine. Chaîne : chimique → thermique → mécanique → électrique.</li>\n<li><b>Hydroélectrique</b> : l'eau d'un bassin (souvent créé par un <b>barrage</b>) descend dans les <b>conduites forcées</b> et frappe la turbine. Chaîne : potentielle → cinétique → électrique.</li>\n<li><b>Éolienne</b> : le vent fait tourner les pales d'une <b>éolienne</b>, reliée à l'alternateur dans la nacelle en haut de la tour.</li>\n<li><b>Photovoltaïque</b> : des cellules de <b>silicium</b> transforment la lumière en courant (effet photovoltaïque, découvert par Edmond Becquerel en 1839).</li>\n<li><b>Géothermique</b> : elle utilise la vapeur chaude qui monte du sous-sol dans les zones volcaniques.</li>\n<li><b>Nucléaire</b> : la <b>fission</b> (cassure) des noyaux d'uranium libère énormément de chaleur, qui produit de la vapeur comme dans une centrale thermique. Elle n'émet pas de CO₂, mais produit des <b>déchets radioactifs</b> à garder pendant des temps très longs. En Italie, après le référendum de 1987, les centrales nucléaires ont été fermées.</li>\n</ul>"
  },
  {
   "type": "3d",
   "title": "Explore une centrale hydroélectrique",
   "scene": "terrain",
   "options": {
    "features": {
     "glacier": {
      "label": "Glacier",
      "html": "Les glaciers et la neige sont les « réserves » d'eau : en fondant au printemps et en été, ils alimentent les fleuves et les lacs alpins."
     },
     "mountain": {
      "label": "Montagne",
      "html": "Les centrales hydroélectriques se construisent en montagne parce qu'il faut un grand <b>dénivelé</b> : plus l'eau tombe de haut, plus elle a d'énergie."
     },
     "lake": {
      "label": "Bassin (lac artificiel)",
      "html": "Le <b>barrage</b> ferme une vallée et crée un lac : l'eau immobile en hauteur possède de l'<b>énergie potentielle</b>. Le bassin est aussi une « batterie » : on peut le vider quand il faut de l'énergie."
     },
     "valley": {
      "label": "Vallée avec la centrale",
      "html": "Au fond de la vallée se trouve la <b>centrale</b> : l'eau arrive dans les conduites forcées, frappe la turbine et fait tourner l'alternateur."
     },
     "river": {
      "label": "Fleuve",
      "html": "Après la turbine, l'eau retourne dans le fleuve : elle n'est ni consommée ni polluée. Les centrales « au fil de l'eau » exploitent directement le courant du fleuve, sans grands barrages."
     },
     "plain": {
      "label": "Plaine",
      "html": "Les lignes à haute tension portent l'énergie vers les villes et les usines de la plaine, où l'on consomme le plus."
     }
    }
   },
   "caption": "Touche les parties du paysage pour suivre le parcours de l'eau, de la montagne au courant électrique."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : sources et transformations",
   "questions": [
    {
     "type": "mc",
     "q": "Quelle source est renouvelable ?",
     "options": [
      "Charbon",
      "Vent",
      "Gaz naturel"
     ],
     "answer": 1,
     "explain": "Le vent se régénère continuellement : c'est une source renouvelable."
    },
    {
     "type": "mc",
     "q": "Quelle machine transforme le mouvement en énergie électrique ?",
     "options": [
      "Transformateur",
      "Alternateur",
      "Chaudière"
     ],
     "answer": 1,
     "explain": "L'alternateur exploite l'induction électromagnétique découverte par Faraday."
    },
    {
     "type": "tf",
     "q": "Les panneaux photovoltaïques ont besoin d'une turbine.",
     "answer": false,
     "explain": "Le photovoltaïque transforme la lumière directement en électricité, sans pièces en mouvement."
    }
   ]
  },
  {
   "type": "widget",
   "title": "Renouvelable ou non ?",
   "widget": "classify",
   "options": {
    "groups": [
     "Renouvelable",
     "Non renouvelable"
    ],
    "items": [
     [
      "☀️ Soleil",
      0
     ],
     [
      "🌬️ Vent",
      0
     ],
     [
      "💧 Eau des fleuves",
      0
     ],
     [
      "🌋 Chaleur de la Terre",
      0
     ],
     [
      "🪵 Biomasse",
      0
     ],
     [
      "🛢️ Pétrole",
      1
     ],
     [
      "⚫ Charbon",
      1
     ],
     [
      "🔥 Gaz naturel",
      1
     ],
     [
      "☢️ Uranium",
      1
     ]
    ]
   },
   "caption": "Les sources fossiles et l'uranium sont limitées : un jour, elles s'épuiseront."
  },
  {
   "type": "example",
   "title": "Exemple pratique : lire la facture",
   "html": "<p>La <b>puissance</b> d'un appareil (en watts, W, ou kilowatts, kW) dit quelle énergie il consomme <b>chaque heure</b>. L'énergie consommée est :</p>\n<p style=\"text-align:center\"><b>énergie (kWh) = puissance (kW) × temps (h)</b></p>\n<ul>\n<li>Un four de <b>2 kW</b> allumé pendant <b>1,5 heure</b> consomme 2 × 1,5 = <b>3 kWh</b>.</li>\n<li>Une ampoule LED de <b>10 W</b> (= 0,01 kW) allumée <b>5 heures</b> par jour pendant 30 jours : 0,01 × 5 × 30 = <b>1,5 kWh</b> par mois.</li>\n<li>Une vieille ampoule à incandescence de <b>60 W</b> qui donne la même lumière : 0,06 × 5 × 30 = <b>9 kWh</b>, six fois plus !</li>\n</ul>\n<p>Si un kWh coûte environ 0,30 €, la LED coûte 0,45 € par mois et la vieille ampoule 2,70 €. Économiser l'énergie est bon pour l'environnement et pour le porte-monnaie.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : le rendement",
   "html": "<p>Une centrale thermique reçoit du combustible <b>100</b> unités d'énergie et en transforme en électricité <b>40</b> : son rendement est 40 ÷ 100 × 100 = <b>40 %</b>. Le reste se perd sous forme de chaleur (c'est pourquoi elles ont de grandes tours de refroidissement).</p>\n<p>Les centrales modernes <b>à cycle combiné</b> récupèrent la chaleur des fumées pour produire encore de la vapeur et arrivent à environ <b>60 %</b>. Une centrale hydroélectrique peut dépasser <b>85–90 %</b>, tandis qu'un panneau photovoltaïque ordinaire transforme en électricité environ <b>20 %</b> de la lumière qu'il reçoit.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? L'Italie a allumé la première ampoule géothermique",
   "html": "<p>En <b>1904</b>, à <b>Larderello</b>, en Toscane, le prince <b>Piero Ginori Conti</b> utilisa la vapeur naturelle qui sortait du sol pour faire tourner une petite dynamo et alluma <b>5 ampoules</b> : c'était la première fois au monde qu'on produisait de l'électricité à partir de la chaleur de la Terre.</p>\n<p>En 1913, à Larderello, entra en service la première centrale géothermique commerciale du monde. Aujourd'hui encore, la Toscane produit de l'électricité géothermique.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Les « batteries d'eau »",
   "html": "<p>Le soleil et le vent ne produisent pas toujours quand il le faut. Une solution intelligente, ce sont les centrales <b>à pompage</b> : elles ont deux lacs, un en haut et un en bas. Quand il y a un surplus d'énergie (par exemple à midi avec beaucoup de soleil), on l'utilise pour <b>pomper</b> l'eau dans le lac du haut ; le soir, quand tout le monde allume les lumières, l'eau redescend et produit de l'électricité.</p>\n<p>C'est comme recharger une gigantesque batterie… faite d'eau et de montagnes !</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>L'énergie ne se crée ni ne se détruit : elle <b>se transforme</b>. Le rendement mesure quelle quantité d'énergie est utile.</li>\n<li>Sources <b>non renouvelables</b> : fossiles et uranium. Sources <b>renouvelables</b> : soleil, vent, eau, géothermie, biomasse.</li>\n<li>Presque toutes les centrales : source → <b>turbine</b> → <b>alternateur</b> → <b>transformateur</b> → réseau. Le photovoltaïque n'utilise pas de turbines.</li>\n<li>Énergie (kWh) = puissance (kW) × temps (h).</li>\n<li>À la maison : 230 V, 50 Hz, courant alternatif.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les centrales",
   "intro": "Si les transformations d'énergie te troublent, essaie avec une analogie, avec l'histoire ou avec une frise chronologique interactive.",
   "tabs": [
    {
     "label": "🚲 La dynamo du vélo",
     "html": "<p>Un vieux vélo avec <b>dynamo</b> est une centrale électrique miniature !</p>\n<ul>\n<li>Tu es la <b>source d'énergie</b> (énergie chimique des aliments → muscles).</li>\n<li>La roue qui tourne est la <b>turbine</b>.</li>\n<li>La dynamo, avec un aimant qui tourne à l'intérieur d'une bobine, est l'<b>alternateur</b>.</li>\n<li>Le phare qui s'allume est la <b>maison</b> qui consomme.</li>\n</ul>\n<p>Si tu pédales plus fort, la lumière est plus intense ; si tu t'arrêtes, elle s'éteint : sans mouvement, pas de courant. Dans une centrale thermique, à la place de tes jambes il y a la vapeur ; dans une centrale hydroélectrique, l'eau qui tombe.</p>"
    },
    {
     "label": "🔗 La chaîne des transformations",
     "html": "<p>Chaque centrale est une <b>chaîne</b> de transformations. Suis-la comme un relais où l'énergie passe de main en main :</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#fff7ed\"/>\n<text x=\"300\" y=\"30\" font-size=\"18\" font-weight=\"bold\" fill=\"#9a3412\" text-anchor=\"middle\">Centrale thermique</text>\n<rect x=\"15\" y=\"45\" width=\"125\" height=\"60\" rx=\"12\" fill=\"#a16207\"/>\n<text x=\"77\" y=\"82\" font-size=\"16\" fill=\"#ffffff\" text-anchor=\"middle\">chimique 🔥</text>\n<rect x=\"160\" y=\"45\" width=\"125\" height=\"60\" rx=\"12\" fill=\"#dc2626\"/>\n<text x=\"222\" y=\"82\" font-size=\"16\" fill=\"#ffffff\" text-anchor=\"middle\">thermique ♨️</text>\n<rect x=\"305\" y=\"45\" width=\"125\" height=\"60\" rx=\"12\" fill=\"#2563eb\"/>\n<text x=\"367\" y=\"82\" font-size=\"16\" fill=\"#ffffff\" text-anchor=\"middle\">mécanique ⚙️</text>\n<rect x=\"450\" y=\"45\" width=\"135\" height=\"60\" rx=\"12\" fill=\"#16a34a\"/>\n<text x=\"517\" y=\"82\" font-size=\"16\" fill=\"#ffffff\" text-anchor=\"middle\">électrique ⚡</text>\n<text x=\"150\" y=\"82\" font-size=\"20\" fill=\"#1f2937\" text-anchor=\"middle\">→</text>\n<text x=\"295\" y=\"82\" font-size=\"20\" fill=\"#1f2937\" text-anchor=\"middle\">→</text>\n<text x=\"440\" y=\"82\" font-size=\"20\" fill=\"#1f2937\" text-anchor=\"middle\">→</text>\n<text x=\"300\" y=\"150\" font-size=\"18\" font-weight=\"bold\" fill=\"#1e40af\" text-anchor=\"middle\">Centrale hydroélectrique</text>\n<rect x=\"60\" y=\"165\" width=\"140\" height=\"60\" rx=\"12\" fill=\"#0ea5e9\"/>\n<text x=\"130\" y=\"202\" font-size=\"16\" fill=\"#ffffff\" text-anchor=\"middle\">potentielle 🏔️</text>\n<rect x=\"230\" y=\"165\" width=\"140\" height=\"60\" rx=\"12\" fill=\"#2563eb\"/>\n<text x=\"300\" y=\"202\" font-size=\"16\" fill=\"#ffffff\" text-anchor=\"middle\">cinétique 💧</text>\n<rect x=\"400\" y=\"165\" width=\"140\" height=\"60\" rx=\"12\" fill=\"#16a34a\"/>\n<text x=\"470\" y=\"202\" font-size=\"16\" fill=\"#ffffff\" text-anchor=\"middle\">électrique ⚡</text>\n<text x=\"215\" y=\"202\" font-size=\"20\" fill=\"#1f2937\" text-anchor=\"middle\">→</text>\n<text x=\"385\" y=\"202\" font-size=\"20\" fill=\"#1f2937\" text-anchor=\"middle\">→</text>\n<text x=\"300\" y=\"262\" font-size=\"15\" fill=\"#7c2d12\" text-anchor=\"middle\">à chaque passage, un peu d'énergie se perd sous forme de chaleur</text>\n</svg>"
    },
    {
     "label": "🌍 Comment font les autres pays",
     "html": "<p>Chaque pays produit de l'électricité avec les ressources qu'il a :</p>\n<ul>\n<li>🇳🇴 <b>Norvège</b> : pleine de montagnes et de fleuves, elle produit environ <b>90 %</b> de son électricité avec l'<b>hydroélectricité</b>.</li>\n<li>🇫🇷 <b>France</b> : environ deux tiers de l'électricité viennent du <b>nucléaire</b>.</li>\n<li>🇮🇸 <b>Islande</b> : île volcanique, elle utilise <b>l'hydroélectricité et la géothermie</b> presque à 100 %.</li>\n<li>🇩🇰 <b>Danemark</b> : terre plate et venteuse, plus de la moitié de l'électricité vient du <b>vent</b>.</li>\n<li>🇮🇹 <b>Italie</b> : elle utilise surtout du <b>gaz naturel</b>, mais les renouvelables (hydroélectricité, solaire, éolien, géothermie, biomasse) couvrent désormais environ deux cinquièmes de la consommation électrique, et le solaire progresse chaque année.</li>\n</ul>\n<p>Géographie et énergie sont étroitement liées !</p>"
    },
    {
     "label": "⏳ Frise chronologique",
     "html": "<p>Fais défiler la frise : de l'induction de Faraday aux panneaux solaires sur les toits.</p>",
     "widget": "timeline",
     "options": {
      "unit": "anni",
      "events": [
       {
        "year": 1831,
        "label": "Faraday découvre l'induction électromagnétique",
        "icon": "🧲"
       },
       {
        "year": 1839,
        "label": "Becquerel découvre l'effet photovoltaïque",
        "icon": "☀️"
       },
       {
        "year": 1879,
        "label": "Ampoule à incandescence d'Edison",
        "icon": "💡"
       },
       {
        "year": 1882,
        "label": "Premières centrales électriques à Londres et à New York",
        "icon": "🏭"
       },
       {
        "year": 1883,
        "label": "À Milan, la centrale de la via Santa Radegonda",
        "icon": "🇮🇹"
       },
       {
        "year": 1904,
        "label": "Larderello : première électricité géothermique",
        "icon": "🌋"
       },
       {
        "year": 1954,
        "label": "Premiers panneaux solaires au silicium (Bell Labs)",
        "icon": "🔋"
       },
       {
        "year": 1987,
        "label": "Référendum : l'Italie abandonne le nucléaire",
        "icon": "🗳️"
       }
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte de l'énergie électrique",
   "nodes": [
    {
     "id": "energia",
     "label": "Énergie",
     "x": 50,
     "y": 7,
     "color": "#7c3aed",
     "html": "Capacité d'effectuer un travail. Elle se mesure en joules (J) ou en kWh.",
     "why": "Le principe de conservation de l'énergie a été formulé au milieu du XIXe siècle par des scientifiques comme Julius Robert Mayer, James Prescott Joule et Hermann von Helmholtz : l'énergie se transforme mais le total reste constant."
    },
    {
     "id": "fonti",
     "label": "Sources",
     "x": 50,
     "y": 27,
     "color": "#2563eb",
     "html": "D'où nous tirons l'énergie : renouvelables et non renouvelables.",
     "why": "Presque toutes viennent du Soleil : les fossiles sont des restes de plantes et d'animaux qui ont emmagasiné de l'énergie solaire il y a des millions d'années ; le vent et la pluie naissent du Soleil qui chauffe l'air et la mer. La géothermie et le nucléaire font exception."
    },
    {
     "id": "rinn",
     "label": "Renouvelables",
     "x": 20,
     "y": 45,
     "color": "#16a34a",
     "html": "Soleil, vent, eau, géothermie, biomasse.",
     "why": "Elles se régénèrent à l'échelle humaine : le Soleil brillera encore des milliards d'années et le cycle de l'eau ramène toujours la pluie sur les montagnes."
    },
    {
     "id": "nonrinn",
     "label": "Non renouvelables",
     "x": 80,
     "y": 45,
     "color": "#64748b",
     "html": "Pétrole, charbon, gaz, uranium.",
     "why": "Les combustibles fossiles se sont formés en millions d'années : nous les consommons en quelques siècles. En les brûlant, nous libérons du CO₂, qui retient la chaleur dans l'atmosphère."
    },
    {
     "id": "turbina",
     "label": "Turbine",
     "x": 35,
     "y": 65,
     "color": "#0ea5e9",
     "html": "Roue à pales mue par l'eau, la vapeur ou le vent.",
     "why": "Elle descend des moulins à eau et à vent utilisés depuis des siècles. La turbine à vapeur moderne a été inventée par Charles Parsons en 1884."
    },
    {
     "id": "alternatore",
     "label": "Alternateur",
     "x": 65,
     "y": 65,
     "color": "#f59e0b",
     "html": "Transforme le mouvement en courant alternatif.",
     "why": "Il repose sur l'induction électromagnétique découverte par Michael Faraday en 1831 : un aimant en mouvement près d'une bobine produit du courant."
    },
    {
     "id": "fv",
     "label": "Photovoltaïque",
     "x": 10,
     "y": 82,
     "color": "#eab308",
     "html": "Cellules de silicium qui transforment la lumière en électricité.",
     "why": "L'effet photovoltaïque a été observé par Edmond Becquerel en 1839 ; Albert Einstein a expliqué le phénomène voisin (effet photoélectrique) en 1905 et a reçu pour cela le prix Nobel."
    },
    {
     "id": "rete",
     "label": "Réseau électrique",
     "x": 65,
     "y": 85,
     "color": "#ef4444",
     "html": "Transformateurs, lignes à haute tension, postes : ils portent l'énergie dans les maisons.",
     "why": "On utilise le courant alternatif parce qu'avec les transformateurs on peut facilement augmenter et abaisser la tension : haute tension = moins de pertes dans les câbles. Ce fut la « guerre des courants » entre Edison (continu) et Tesla/Westinghouse (alternatif) à la fin du XIXe siècle."
    },
    {
     "id": "kwh",
     "label": "kWh",
     "x": 90,
     "y": 92,
     "color": "#a855f7",
     "html": "Unité de l'énergie électrique : puissance (kW) × temps (h).",
     "why": "Le watt porte le nom de James Watt, l'ingénieur écossais qui perfectionna la machine à vapeur. 1 kWh = 3 600 000 joules."
    }
   ],
   "edges": [
    [
     "energia",
     "fonti",
     "provient de"
    ],
    [
     "fonti",
     "rinn",
     "type"
    ],
    [
     "fonti",
     "nonrinn",
     "type"
    ],
    [
     "rinn",
     "turbina",
     "eau, vent font tourner"
    ],
    [
     "nonrinn",
     "turbina",
     "la vapeur fait tourner"
    ],
    [
     "turbina",
     "alternatore",
     "fait tourner"
    ],
    [
     "rinn",
     "fv",
     "le Soleil alimente"
    ],
    [
     "alternatore",
     "rete",
     "injecte dans"
    ],
    [
     "fv",
     "rete",
     "avec onduleur"
    ],
    [
     "rete",
     "kwh",
     "se mesure en"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : calculs avec l'énergie",
   "questions": [
    {
     "type": "num",
     "q": "Un sèche-cheveux de 2 kW reste allumé 0,5 heure. Combien de kWh consomme-t-il ?",
     "answer": 1,
     "unit": "kWh",
     "explain": "2 × 0,5 = 1 kWh."
    },
    {
     "type": "num",
     "q": "Une centrale reçoit 200 unités d'énergie et en transforme 70 en électricité. Quel est le rendement en % ?",
     "answer": 35,
     "unit": "%",
     "explain": "70 ÷ 200 × 100 = 35 %."
    },
    {
     "type": "mc",
     "q": "Pourquoi transporte-t-on l'électricité à très haute tension ?",
     "options": [
      "Pour qu'elle arrive plus vite",
      "Pour réduire les pertes dans les câbles",
      "Pour la rendre plus sûre à la maison"
     ],
     "answer": 1,
     "explain": "À haute tension, il faut moins de courant pour transporter la même puissance, donc les câbles chauffent moins et on gaspille moins d'énergie."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Énergie",
   "d": "Capacité d'effectuer un travail ; elle se mesure en joules (J) ou en kilowattheures (kWh)."
  },
  {
   "t": "Source renouvelable",
   "d": "Source qui se régénère en peu de temps : soleil, vent, eau, géothermie, biomasse."
  },
  {
   "t": "Combustible fossile",
   "d": "Pétrole, charbon ou gaz, formés en millions d'années à partir de restes d'organismes."
  },
  {
   "t": "Turbine",
   "d": "Roue à pales mise en rotation par l'eau, la vapeur ou le vent."
  },
  {
   "t": "Alternateur",
   "d": "Machine qui transforme le mouvement en courant électrique alternatif."
  },
  {
   "t": "Transformateur",
   "d": "Dispositif qui augmente ou abaisse la tension électrique."
  },
  {
   "t": "Ligne à haute tension",
   "d": "Ligne de câbles et de pylônes qui transporte l'énergie à haute tension."
  },
  {
   "t": "Effet photovoltaïque",
   "d": "Transformation directe de la lumière en électricité dans les cellules de silicium."
  },
  {
   "t": "Fission nucléaire",
   "d": "Cassure de noyaux lourds (uranium) qui libère de grandes quantités de chaleur."
  },
  {
   "t": "Rendement",
   "d": "Rapport entre l'énergie utile obtenue et l'énergie dépensée, en pourcentage."
  },
  {
   "t": "Kilowattheure (kWh)",
   "d": "Énergie consommée par un appareil de 1 kW allumé pendant une heure."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "tf",
    "q": "Selon le principe de conservation, l'énergie se transforme mais ne se crée pas à partir de rien.",
    "answer": true,
    "explain": "L'énergie ne se crée ni ne se détruit, elle se transforme."
   },
   {
    "type": "mc",
    "q": "Laquelle de ces sources est non renouvelable ?",
    "options": [
     "Géothermie",
     "Uranium",
     "Biomasse"
    ],
    "answer": 1,
    "explain": "L'uranium est un minerai présent en quantité limitée."
   },
   {
    "type": "mc",
    "q": "Qui a découvert l'induction électromagnétique en 1831 ?",
    "options": [
     "Thomas Edison",
     "Michael Faraday",
     "Alessandro Volta"
    ],
    "answer": 1,
    "explain": "Michael Faraday, scientifique anglais."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre le fonctionnement d'une centrale thermique.",
    "items": [
     "Le combustible brûle dans la chaudière",
     "L'eau devient de la vapeur",
     "La vapeur fait tourner la turbine",
     "L'alternateur produit du courant",
     "Le transformateur augmente la tension"
    ],
    "explain": "Chimique → thermique → mécanique → électrique, puis le réseau."
   },
   {
    "type": "num",
    "q": "Un téléviseur de 0,1 kW reste allumé 4 heures. Combien de kWh consomme-t-il ?",
    "answer": 0.4,
    "tol": 0.001,
    "unit": "kWh",
    "explain": "0,1 × 4 = 0,4 kWh."
   },
   {
    "type": "mc",
    "q": "Dans quelle centrale n'y a-t-il pas de turbine ?",
    "options": [
     "Éolienne",
     "Photovoltaïque",
     "Hydroélectrique"
    ],
    "answer": 1,
    "explain": "Le photovoltaïque transforme directement la lumière en électricité."
   },
   {
    "type": "text",
    "q": "Comment s'appelle la localité toscane où, en 1904, on produisit pour la première fois de l'électricité géothermique ?",
    "answer": [
     "larderello"
    ],
    "explain": "Larderello, dans la province de Pise."
   },
   {
    "type": "num",
    "q": "Quelle est la tension (en volts) des prises de la maison en Italie ?",
    "answer": 230,
    "unit": "V",
    "explain": "En Italie (et en Europe), le réseau domestique est à 230 V, 50 Hz."
   },
   {
    "type": "tf",
    "q": "Les centrales hydroélectriques consomment l'eau, qui ne retourne plus dans le fleuve.",
    "answer": false,
    "explain": "L'eau passe dans la turbine et retourne dans le fleuve : elle est utilisée, pas consommée."
   },
   {
    "type": "mc",
    "q": "Quel est le principal inconvénient des combustibles fossiles pour le climat ?",
    "options": [
     "Ils font trop de bruit",
     "Ils libèrent du CO₂ qui contribue au réchauffement climatique",
     "Ils ne fonctionnent que de jour"
    ],
    "answer": 1,
    "explain": "La combustion libère du dioxyde de carbone, un gaz à effet de serre."
   },
   {
    "type": "num",
    "q": "Un panneau reçoit 1000 W de lumière et produit 200 W d'électricité. Quel est le rendement en % ?",
    "answer": 20,
    "unit": "%",
    "explain": "200 ÷ 1000 × 100 = 20 %."
   },
   {
    "type": "mc",
    "q": "À quoi sert une centrale à pompage ?",
    "options": [
     "À conserver de l'énergie en pompant de l'eau vers le haut quand il y en a en surplus",
     "À pomper du pétrole du sous-sol",
     "À refroidir les centrales nucléaires"
    ],
    "answer": 0,
    "explain": "Elle fonctionne comme une grande batterie : elle accumule l'énergie sous forme d'eau en altitude."
   }
  ],
  "gen": [
   [
    "percent",
    2
   ]
  ]
 }
});
