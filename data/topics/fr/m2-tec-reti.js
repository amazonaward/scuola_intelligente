TOPIC('fr', {
 "id": "m2-tec-reti",
 "title": "Les réseaux et Internet",
 "intro": "Quand tu envoies un message à un ami en Australie, il met moins d'une seconde à arriver, en traversant des câbles sous l'océan, des routeurs et des antennes. Comment est-ce possible ? Dans cette leçon, nous découvrons ce qu'est un <b>réseau</b>, comment fonctionne <b>Internet</b> et comment voyagent les <b>données</b>, découpées en une multitude de petits <b>paquets</b>.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "Qu'est-ce qu'un réseau",
   "html": "<p>Un <b>réseau informatique</b> est un ensemble d'appareils (ordinateurs, smartphones, imprimantes, consoles…) <b>reliés</b> entre eux pour échanger des données et partager des ressources.</p>\n<p>Les réseaux se classent selon leur <b>étendue</b> :</p>\n<ul>\n<li><b>PAN</b> (Personal Area Network) : quelques mètres, par exemple un casque Bluetooth et le téléphone.</li>\n<li><b>LAN</b> (Local Area Network) : une maison, une école, un bureau. Le Wi-Fi de la maison est un LAN sans fil (WLAN).</li>\n<li><b>MAN</b> (Metropolitan Area Network) : une ville.</li>\n<li><b>WAN</b> (Wide Area Network) : régions, pays, continents.</li>\n</ul>\n<p><b>Internet</b> est le plus grand WAN du monde : c'est un <b>réseau de réseaux</b>, c'est-à-dire des millions de réseaux différents reliés entre eux avec des règles communes.</p>"
  },
  {
   "type": "text",
   "title": "Qui y a-t-il dans un réseau",
   "html": "<ul>\n<li><b>Client</b> : l'appareil qui <b>demande</b> un service (ton téléphone qui ouvre une vidéo).</li>\n<li><b>Serveur</b> : l'ordinateur qui <b>fournit</b> le service (l'ordinateur qui conserve la vidéo et l'envoie). Beaucoup de serveurs sont rassemblés dans de grands <b>centres de données</b> (data centers).</li>\n<li><b>Routeur</b> : l'« aiguilleur » qui décide du chemin des données d'un réseau à l'autre. Celui de la maison relie ton LAN à Internet.</li>\n<li><b>Switch</b> (commutateur) : il relie entre eux, avec des câbles, les appareils d'un même LAN.</li>\n<li><b>Point d'accès</b> : l'antenne du Wi-Fi.</li>\n</ul>\n<p>Les <b>supports de transmission</b> peuvent être : des câbles de <b>cuivre</b> (signaux électriques), la <b>fibre optique</b> (impulsions de <b>lumière</b> dans un fil de verre fin comme un cheveu) et les <b>ondes radio</b> (Wi-Fi, réseau mobile 4G/5G, satellites).</p>"
  },
  {
   "type": "svg",
   "title": "De ta maison au serveur",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#eef2ff\"/>\n<rect x=\"15\" y=\"40\" width=\"190\" height=\"220\" rx=\"16\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/>\n<text x=\"110\" y=\"65\" font-size=\"16\" font-weight=\"bold\" fill=\"#0369a1\" text-anchor=\"middle\">LAN de la maison</text>\n<rect x=\"35\" y=\"90\" width=\"50\" height=\"80\" rx=\"8\" fill=\"#1e293b\"/>\n<rect x=\"41\" y=\"98\" width=\"38\" height=\"58\" fill=\"#38bdf8\"/>\n<text x=\"60\" y=\"190\" font-size=\"14\" fill=\"#0f172a\" text-anchor=\"middle\">client</text>\n<rect x=\"35\" y=\"205\" width=\"70\" height=\"40\" rx=\"4\" fill=\"#475569\"/>\n<rect x=\"42\" y=\"211\" width=\"56\" height=\"26\" fill=\"#a5f3fc\"/>\n<rect x=\"125\" y=\"140\" width=\"65\" height=\"35\" rx=\"8\" fill=\"#f97316\" stroke=\"#7c2d12\" stroke-width=\"2\"/>\n<text x=\"157\" y=\"163\" font-size=\"14\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">routeur</text>\n<path d=\"M85 130 Q 110 130 125 150\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"3\" stroke-dasharray=\"5 4\"/>\n<line x1=\"105\" y1=\"225\" x2=\"125\" y2=\"170\" stroke=\"#0ea5e9\" stroke-width=\"3\"/>\n<ellipse cx=\"330\" cy=\"150\" rx=\"105\" ry=\"70\" fill=\"#c7d2fe\" stroke=\"#4338ca\" stroke-width=\"3\"/>\n<text x=\"330\" y=\"140\" font-size=\"22\" font-weight=\"bold\" fill=\"#3730a3\" text-anchor=\"middle\">INTERNET</text>\n<text x=\"330\" y=\"165\" font-size=\"14\" fill=\"#3730a3\" text-anchor=\"middle\">réseau de réseaux</text>\n<circle cx=\"270\" cy=\"110\" r=\"8\" fill=\"#f97316\"/>\n<circle cx=\"390\" cy=\"115\" r=\"8\" fill=\"#f97316\"/>\n<circle cx=\"300\" cy=\"195\" r=\"8\" fill=\"#f97316\"/>\n<circle cx=\"380\" cy=\"190\" r=\"8\" fill=\"#f97316\"/>\n<line x1=\"190\" y1=\"157\" x2=\"228\" y2=\"155\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<line x1=\"433\" y1=\"150\" x2=\"470\" y2=\"150\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<rect x=\"470\" y=\"80\" width=\"110\" height=\"160\" rx=\"10\" fill=\"#334155\"/>\n<rect x=\"482\" y=\"95\" width=\"86\" height=\"25\" rx=\"4\" fill=\"#22c55e\"/>\n<rect x=\"482\" y=\"130\" width=\"86\" height=\"25\" rx=\"4\" fill=\"#22c55e\"/>\n<rect x=\"482\" y=\"165\" width=\"86\" height=\"25\" rx=\"4\" fill=\"#22c55e\"/>\n<text x=\"525\" y=\"222\" font-size=\"15\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">serveur</text>\n<text x=\"300\" y=\"275\" font-size=\"15\" fill=\"#1f2937\" text-anchor=\"middle\">les points orange sont les routeurs qui aiguillent les paquets</text>\n</svg>",
   "caption": "Le client demande, les routeurs aiguillent, le serveur répond. Entre ta maison et le serveur, il peut y avoir 15 à 20 routeurs."
  },
  {
   "type": "text",
   "title": "Adresses IP et DNS : comment on trouve son chemin",
   "html": "<p>Pour envoyer une lettre, il faut une adresse. Sur Internet, chaque appareil connecté a une <b>adresse IP</b> (Internet Protocol).</p>\n<ul>\n<li><b>IPv4</b> : 4 nombres de <b>0 à 255</b> séparés par des points, par exemple <code>192.168.1.10</code>. Cela fait 32 bits en tout, environ <b>4,3 milliards</b> d'adresses : trop peu pour tous les appareils du monde !</li>\n<li><b>IPv6</b> : 128 bits, écrits en hexadécimal (<code>2001:db8::1</code>). Le nombre d'adresses possibles a 39 chiffres : pratiquement infini.</li>\n</ul>\n<p>Mais nous n'écrivons pas des nombres, nous écrivons des noms comme <code>www.wikipedia.org</code>. Le <b>DNS</b> (Domain Name System) est le « répertoire » d'Internet : il traduit le nom en adresse IP du serveur. Il fonctionne comme le répertoire du téléphone : tu cherches « Mamie » et le téléphone compose le numéro.</p>"
  },
  {
   "type": "text",
   "title": "Les paquets et le protocole TCP/IP",
   "html": "<p>Les données ne voyagent pas d'un seul bloc : elles sont divisées en <b>paquets</b> (en général d'environ 1500 octets au maximum chacun). Chaque paquet contient :</p>\n<ul>\n<li>l'<b>adresse IP de l'expéditeur</b> et celle du <b>destinataire</b> ;</li>\n<li>un <b>numéro d'ordre</b> (pour remettre les morceaux ensemble) ;</li>\n<li>un petit morceau des <b>données</b> proprement dites.</li>\n</ul>\n<p>Les routeurs envoient chaque paquet par le chemin <b>le plus libre à ce moment-là</b> : des paquets d'un même message peuvent suivre des parcours différents et arriver en désordre. Cette méthode s'appelle la <b>commutation de paquets</b>.</p>\n<p>Les règles que tout le monde respecte s'appellent des <b>protocoles</b>. Les plus importants sont <b>IP</b> (il amène chaque paquet à la bonne adresse) et <b>TCP</b> (il vérifie qu'ils arrivent tous, les remet en ordre et fait renvoyer ceux qui sont perdus). Ensemble, ils forment le <b>TCP/IP</b>, inventé par <b>Vinton Cerf</b> et <b>Robert Kahn</b> en 1974.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : réseaux et adresses",
   "questions": [
    {
     "type": "mc",
     "q": "Le réseau Wi-Fi de ta maison est un…",
     "options": [
      "WAN",
      "LAN",
      "MAN"
     ],
     "answer": 1,
     "explain": "Il couvre une petite zone (la maison) : c'est un réseau local, LAN (sans fil : WLAN)."
    },
    {
     "type": "tf",
     "q": "Le DNS traduit les noms des sites en adresses IP.",
     "answer": true,
     "explain": "C'est le « répertoire téléphonique » d'Internet."
    },
    {
     "type": "mc",
     "q": "Laquelle de ces adresses est une adresse IPv4 valide ?",
     "options": [
      "192.168.1.300",
      "10.0.0.25",
      "256.1.1.1"
     ],
     "answer": 1,
     "explain": "Chaque nombre d'une IPv4 va de 0 à 255 : 300 et 256 sont trop grands."
    }
   ]
  },
  {
   "type": "3d",
   "title": "Les autoroutes sous la mer",
   "scene": "globe",
   "options": {
    "points": [
     {
      "lat": 45.46,
      "lon": 9.19,
      "label": "Milan",
      "color": "#ef4444"
     },
     {
      "lat": 43.3,
      "lon": 5.37,
      "label": "Marseille",
      "color": "#f97316"
     },
     {
      "lat": 31.2,
      "lon": 29.92,
      "label": "Alexandrie",
      "color": "#f97316"
     },
     {
      "lat": 19.07,
      "lon": 72.88,
      "label": "Mumbai",
      "color": "#f97316"
     },
     {
      "lat": 1.35,
      "lon": 103.82,
      "label": "Singapour",
      "color": "#f97316"
     },
     {
      "lat": 51.5,
      "lon": -0.13,
      "label": "Londres",
      "color": "#2563eb"
     },
     {
      "lat": 40.71,
      "lon": -74,
      "label": "New York",
      "color": "#2563eb"
     },
     {
      "lat": -33.87,
      "lon": 151.21,
      "label": "Sydney",
      "color": "#16a34a"
     }
    ],
    "routes": [
     {
      "points": [
       0,
       1,
       2,
       3,
       4,
       7
      ],
      "color": "#f97316"
     },
     {
      "points": [
       0,
       5,
       6
      ],
      "color": "#2563eb"
     }
    ]
   },
   "caption": "Plus de 95 % des données entre les continents voyagent dans des câbles sous-marins en fibre optique, pas par les satellites. Fais tourner le globe et suis deux parcours possibles de tes paquets."
  },
  {
   "type": "example",
   "title": "Exemple pratique : que se passe-t-il quand tu ouvres un site",
   "html": "<ol>\n<li>Tu écris <code>www.exemple.it</code> dans le navigateur.</li>\n<li>L'ordinateur interroge le <b>DNS</b> : « Quelle est l'IP de www.exemple.it ? » et reçoit, par exemple, <code>93.184.216.34</code>.</li>\n<li>Le navigateur envoie au serveur une <b>requête</b> (protocole <b>HTTP</b>, ou <b>HTTPS</b> si elle est chiffrée : le cadenas 🔒).</li>\n<li>La requête, divisée en paquets, passe par ton <b>routeur</b>, puis par les routeurs de ton fournisseur d'accès à Internet et d'autres réseaux.</li>\n<li>Le <b>serveur</b> répond en envoyant la page, elle aussi en paquets.</li>\n<li><b>TCP</b> remet les paquets en ordre ; le navigateur <b>dessine</b> la page. Tout cela en quelques dixièmes de seconde !</li>\n</ol>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : combien de temps pour télécharger ?",
   "html": "<p>La vitesse d'une connexion se mesure en <b>bits par seconde</b> (Mbit/s = millions de bits par seconde). La taille des fichiers, en revanche, se mesure en <b>octets</b>. Attention : <b>1 octet = 8 bits</b> !</p>\n<p>Tu veux télécharger un jeu de <b>500 Mo</b> (mégaoctets) avec une connexion de <b>100 Mbit/s</b> :</p>\n<ol>\n<li>Je transforme en bits : 500 × 8 = <b>4000 Mbit</b>.</li>\n<li>Je divise par la vitesse : 4000 ÷ 100 = <b>40 secondes</b> (dans des conditions idéales).</li>\n</ol>\n<p>Avec une vieille ligne ADSL de 8 Mbit/s, il faudrait 4000 ÷ 8 = 500 secondes, plus de 8 minutes. Avec la fibre à 1 Gbit/s (1000 Mbit/s), 4 secondes suffisent !</p>"
  },
  {
   "type": "widget",
   "title": "Associe les termes",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "Routeur",
      "Aiguille les paquets entre les réseaux"
     ],
     [
      "Serveur",
      "Fournit des services et des contenus"
     ],
     [
      "DNS",
      "Traduit les noms en adresses IP"
     ],
     [
      "Paquet",
      "Petit morceau de données avec expéditeur et destinataire"
     ],
     [
      "Fibre optique",
      "Transmet des données avec des impulsions de lumière"
     ],
     [
      "TCP",
      "Vérifie que tous les paquets arrivent dans l'ordre"
     ]
    ]
   },
   "caption": "Relie chaque mot à sa définition."
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le premier message fut « LO »",
   "html": "<p>Le <b>29 octobre 1969</b>, deux ordinateurs du réseau <b>ARPANET</b>, l'ancêtre d'Internet, l'un à l'université UCLA de Los Angeles et l'autre au Stanford Research Institute, essayèrent d'échanger le premier message : le mot <b>LOGIN</b>. Après les deux premières lettres, « L » et « O », le système tomba en panne !</p>\n<p>Ainsi, le premier message de l'histoire d'Internet fut « <b>LO</b> », qui en anglais archaïque signifie… « voici ! ». Une heure plus tard, la connexion fonctionna en entier.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Internet et le Web ne sont pas la même chose",
   "html": "<p><b>Internet</b> est le réseau physique (câbles, routeurs, protocoles). Le <b>World Wide Web</b> n'est qu'<b>un</b> des services qui circulent sur Internet, comme le courrier électronique ou les appels vidéo.</p>\n<p>Le Web a été inventé au <b>CERN</b> de Genève par l'Anglais <b>Tim Berners-Lee</b> : il le proposa en <b>1989</b> et le premier site fut mis en ligne en 1991. Le 30 avril 1993, le CERN le rendit libre et gratuit pour tous.</p>\n<p>Et l'Italie ? Le <b>30 avril 1986</b>, le centre CNUCE de <b>Pise</b> fut le premier en Italie à se connecter à Internet, par satellite, avec les États-Unis.</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Réseau = appareils reliés. Selon l'étendue : PAN, LAN, MAN, WAN. Internet = réseau de réseaux.</li>\n<li>Le <b>client</b> demande, le <b>serveur</b> répond, le <b>routeur</b> aiguille.</li>\n<li>Chaque appareil a une <b>adresse IP</b> ; le <b>DNS</b> traduit les noms en IP.</li>\n<li>Les données voyagent en <b>paquets</b> qui peuvent suivre des chemins différents ; <b>TCP/IP</b> les guide et les remet en ordre.</li>\n<li>Vitesse en bits/s, fichiers en octets : <b>1 octet = 8 bits</b>.</li>\n<li>Internet ≠ Web : le Web est un service d'Internet.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre Internet",
   "intro": "Internet est invisible, mais on peut l'imaginer de bien des façons. Choisis celle qui t'aide le plus.",
   "tabs": [
    {
     "label": "✉️ Les cartes postales numérotées",
     "html": "<p>Tu dois envoyer à un ami un livre entier, mais la poste n'accepte que des <b>cartes postales</b>. Alors :</p>\n<ol>\n<li>tu recopies le livre sur 300 cartes postales et tu les <b>numérotes</b> (1/300, 2/300…) ;</li>\n<li>sur chacune, tu écris l'<b>expéditeur</b> et le <b>destinataire</b> ;</li>\n<li>tu les postes : certaines passent par Bologne, d'autres par Florence, selon les camions libres (les <b>routeurs</b>) ;</li>\n<li>ton ami les reçoit en désordre, les <b>remet en ordre</b> grâce aux numéros et, s'il en manque une, te demande de la renvoyer (c'est le travail de <b>TCP</b>).</li>\n</ol>\n<p>C'est exactement la <b>commutation de paquets</b> !</p>"
    },
    {
     "label": "🛣️ Le réseau routier",
     "html": "<p>Pense à Internet comme au réseau routier :</p>\n<ul>\n<li>les <b>câbles</b> sont les routes (la fibre est l'autoroute, la vieille paire de cuivre un petit chemin) ;</li>\n<li>les <b>routeurs</b> sont les ronds-points avec les panneaux ;</li>\n<li>les <b>adresses IP</b> sont les adresses des maisons ;</li>\n<li>le <b>DNS</b> est le GPS qui transforme « maison de mamie » en rue et numéro ;</li>\n<li>les <b>paquets</b> sont les voitures : s'il y a du trafic sur une route, le GPS en choisit une autre.</li>\n</ul>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#dcfce7\"/>\n<path d=\"M40 130 L200 60 L400 60 L560 130\" fill=\"none\" stroke=\"#475569\" stroke-width=\"22\"/>\n<path d=\"M40 130 L200 200 L400 200 L560 130\" fill=\"none\" stroke=\"#475569\" stroke-width=\"22\"/>\n<path d=\"M200 60 L400 200\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"14\"/>\n<circle cx=\"200\" cy=\"60\" r=\"22\" fill=\"#f97316\"/>\n<circle cx=\"400\" cy=\"60\" r=\"22\" fill=\"#f97316\"/>\n<circle cx=\"200\" cy=\"200\" r=\"22\" fill=\"#f97316\"/>\n<circle cx=\"400\" cy=\"200\" r=\"22\" fill=\"#f97316\"/>\n<rect x=\"10\" y=\"105\" width=\"50\" height=\"50\" fill=\"#2563eb\"/>\n<text x=\"35\" y=\"137\" font-size=\"20\" text-anchor=\"middle\">🏠</text>\n<rect x=\"540\" y=\"105\" width=\"50\" height=\"50\" fill=\"#334155\"/>\n<text x=\"565\" y=\"137\" font-size=\"20\" text-anchor=\"middle\">🖥️</text>\n<text x=\"280\" y=\"55\" font-size=\"22\" text-anchor=\"middle\">🚗</text>\n<text x=\"300\" y=\"215\" font-size=\"22\" text-anchor=\"middle\">🚙</text>\n<text x=\"300\" y=\"140\" font-size=\"22\" text-anchor=\"middle\">🚕</text>\n<text x=\"300\" y=\"250\" font-size=\"15\" fill=\"#14532d\" text-anchor=\"middle\">ronds-points orange = routeurs · voitures = paquets qui choisissent des routes différentes</text>\n</svg>"
    },
    {
     "label": "🔦 La fibre optique",
     "html": "<p>Essaie cette expérience (avec un adulte) : dans une pièce sombre, fais sortir un jet d'eau d'une bouteille percée et éclaire le trou de l'autre côté avec une lampe de poche. La lumière <b>suit la courbe</b> de l'eau au lieu de sortir tout droit !</p>\n<p>C'est la <b>réflexion totale</b> : la lumière rebondit sur les parois internes et reste « piégée ». Dans la fibre optique, il se passe la même chose dans un fil de verre très pur : les impulsions de lumière (allumé = 1, éteint = 0) voyagent sur des dizaines de kilomètres. L'expérience fut montrée dès 1842 par le physicien suisse <b>Daniel Colladon</b>.</p>"
    },
    {
     "label": "⏳ Frise chronologique",
     "html": "<p>D'un réseau de quelques ordinateurs à des milliards d'appareils.</p>",
     "widget": "timeline",
     "options": {
      "unit": "anni",
      "events": [
       {
        "year": 1969,
        "label": "ARPANET : premier message « LO »",
        "icon": "📡"
       },
       {
        "year": 1971,
        "label": "Premier e-mail (Ray Tomlinson, symbole @)",
        "icon": "📧"
       },
       {
        "year": 1974,
        "label": "Cerf et Kahn décrivent le TCP/IP",
        "icon": "📜"
       },
       {
        "year": 1986,
        "label": "Pise : l'Italie se connecte à Internet",
        "icon": "🇮🇹"
       },
       {
        "year": 1991,
        "label": "Tim Berners-Lee met en ligne le premier site web",
        "icon": "🌐"
       },
       {
        "year": 1997,
        "label": "Naissance de la norme Wi-Fi (IEEE 802.11)",
        "icon": "📶"
       },
       {
        "year": 2007,
        "label": "Smartphone à écran tactile : Internet dans la poche",
        "icon": "📱"
       }
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte d'Internet",
   "nodes": [
    {
     "id": "rete",
     "label": "Réseau informatique",
     "x": 50,
     "y": 7,
     "color": "#7c3aed",
     "html": "Appareils reliés pour échanger des données et des ressources.",
     "why": "Les premiers réseaux sont nés dans les années 1960 pour partager les ordinateurs très coûteux des universités. L'idée d'un réseau sans centre, qui continue à fonctionner même si un nœud tombe en panne, a été étudiée par Paul Baran (États-Unis) et Donald Davies (Royaume-Uni)."
    },
    {
     "id": "internet",
     "label": "Internet",
     "x": 50,
     "y": 27,
     "color": "#2563eb",
     "html": "Le réseau mondial formé de millions de réseaux reliés.",
     "why": "Il descend d'ARPANET (1969), projet financé par le département de la Défense américain. En 1983, ARPANET adopta le TCP/IP : c'est considéré comme la date de naissance de l'Internet moderne."
    },
    {
     "id": "clientserver",
     "label": "Client et serveur",
     "x": 15,
     "y": 45,
     "color": "#0ea5e9",
     "html": "Le client demande, le serveur répond.",
     "why": "Partager les tâches permet de garder les données à un seul endroit (le serveur) et de les utiliser depuis des millions d'appareils différents."
    },
    {
     "id": "ip",
     "label": "Adresse IP",
     "x": 40,
     "y": 50,
     "color": "#f59e0b",
     "html": "Nombre qui identifie chaque appareil connecté.",
     "why": "IPv4 (1981) utilise 32 bits : 2³² ≈ 4,3 milliards d'adresses. Avec l'explosion des smartphones et des objets connectés, cela ne suffisait plus : IPv6 est né, avec 128 bits."
    },
    {
     "id": "dns",
     "label": "DNS",
     "x": 40,
     "y": 72,
     "color": "#eab308",
     "html": "Traduit les noms de sites en adresses IP.",
     "why": "Inventé par Paul Mockapetris en 1983 : avant, il existait un fichier unique avec tous les noms, mis à jour à la main, qui ne pouvait plus suffire."
    },
    {
     "id": "pacchetti",
     "label": "Paquets",
     "x": 65,
     "y": 50,
     "color": "#ef4444",
     "html": "Petits morceaux de données avec expéditeur, destinataire et numéro d'ordre.",
     "why": "Diviser les données en paquets permet de partager les lignes entre de nombreux utilisateurs et de contourner les pannes : si une route est coupée, les paquets en prennent une autre."
    },
    {
     "id": "tcpip",
     "label": "TCP/IP",
     "x": 65,
     "y": 72,
     "color": "#16a34a",
     "html": "Les règles (protocoles) communes à tout Internet.",
     "why": "Écrit par Vinton Cerf et Robert Kahn en 1974 pour faire communiquer des réseaux différents. C'est pourquoi on les appelle « les pères d'Internet »."
    },
    {
     "id": "mezzi",
     "label": "Supports physiques",
     "x": 88,
     "y": 45,
     "color": "#64748b",
     "html": "Cuivre, fibre optique, ondes radio, satellites.",
     "why": "La fibre optique exploite la réflexion totale de la lumière ; le premier câble télégraphique transatlantique fut posé dès 1858. Aujourd'hui, plus de 500 câbles sous-marins relient les continents."
    },
    {
     "id": "web",
     "label": "World Wide Web",
     "x": 50,
     "y": 92,
     "color": "#a855f7",
     "html": "Le service des pages reliées par des liens, au-dessus d'Internet.",
     "why": "Inventé par Tim Berners-Lee au CERN (1989–1991) pour permettre aux scientifiques de partager des documents. Il utilise le protocole HTTP et le langage HTML."
    }
   ],
   "edges": [
    [
     "rete",
     "internet",
     "la plus grande est"
    ],
    [
     "internet",
     "clientserver",
     "modèle"
    ],
    [
     "internet",
     "ip",
     "identifie avec"
    ],
    [
     "ip",
     "dns",
     "trouvé grâce à"
    ],
    [
     "internet",
     "pacchetti",
     "transporte"
    ],
    [
     "pacchetti",
     "tcpip",
     "réglés par"
    ],
    [
     "internet",
     "mezzi",
     "voyage sur"
    ],
    [
     "tcpip",
     "web",
     "fonctionne au-dessus"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : paquets et vitesse",
   "questions": [
    {
     "type": "num",
     "q": "Combien y a-t-il de bits dans 1 octet ?",
     "answer": 8,
     "explain": "1 octet = 8 bits."
    },
    {
     "type": "tf",
     "q": "Les paquets d'un même message suivent toujours le même chemin.",
     "answer": false,
     "explain": "Chaque paquet peut prendre le chemin le plus libre ; TCP les remet en ordre à l'arrivée."
    },
    {
     "type": "num",
     "q": "Un fichier de 50 Mo avec une connexion de 100 Mbit/s : combien de secondes faut-il (dans des conditions idéales) ?",
     "answer": 4,
     "unit": "s",
     "explain": "50 × 8 = 400 Mbit ; 400 ÷ 100 = 4 s."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Réseau",
   "d": "Ensemble d'appareils reliés pour échanger des données."
  },
  {
   "t": "LAN / WAN",
   "d": "Réseau local (maison, école) / réseau étendu (pays, continents)."
  },
  {
   "t": "Client",
   "d": "Appareil qui demande un service."
  },
  {
   "t": "Serveur",
   "d": "Ordinateur qui fournit des services et des contenus à d'autres appareils."
  },
  {
   "t": "Routeur",
   "d": "Appareil qui dirige les paquets entre des réseaux différents."
  },
  {
   "t": "Adresse IP",
   "d": "Nombre qui identifie un appareil sur le réseau (IPv4 ou IPv6)."
  },
  {
   "t": "DNS",
   "d": "Système qui traduit les noms de sites en adresses IP."
  },
  {
   "t": "Paquet",
   "d": "Petite portion de données avec des adresses et un numéro d'ordre."
  },
  {
   "t": "Protocole",
   "d": "Ensemble de règles pour communiquer en réseau (TCP, IP, HTTP…)."
  },
  {
   "t": "Fibre optique",
   "d": "Fil de verre qui transmet des données avec des impulsions de lumière."
  },
  {
   "t": "Bit / octet",
   "d": "Unités d'information : 1 octet = 8 bits."
  },
  {
   "t": "World Wide Web",
   "d": "Service de pages reliées par des liens qui fonctionne sur Internet."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Qu'est-ce qu'Internet ?",
    "options": [
     "Un unique grand ordinateur",
     "Un réseau de réseaux reliés dans le monde entier",
     "Un programme pour naviguer"
    ],
    "answer": 1,
    "explain": "Internet relie des millions de réseaux différents avec des règles communes."
   },
   {
    "type": "mc",
    "q": "Quel appareil aiguille les paquets entre des réseaux différents ?",
    "options": [
     "Routeur",
     "Imprimante",
     "Écran"
    ],
    "answer": 0,
    "explain": "Le routeur décide du chemin des paquets."
   },
   {
    "type": "tf",
    "q": "Internet et le World Wide Web sont la même chose.",
    "answer": false,
    "explain": "Le Web est l'un des services qui fonctionnent sur Internet, comme l'e-mail."
   },
   {
    "type": "num",
    "q": "Quel est le plus grand nombre qui peut apparaître dans chacune des 4 parties d'une adresse IPv4 ?",
    "answer": 255,
    "explain": "Chaque partie fait 8 bits : de 0 à 255."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le système qui traduit www.nomdusite.fr en adresse IP ? (sigle)",
    "answer": [
     "dns"
    ],
    "explain": "DNS = Domain Name System."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre ce qui se passe quand tu ouvres un site.",
    "items": [
     "Tu écris l'adresse dans le navigateur",
     "Le DNS trouve l'adresse IP",
     "Le navigateur envoie la requête au serveur",
     "Le serveur répond avec les paquets",
     "Le navigateur affiche la page"
    ],
    "explain": "Nom → IP → requête → réponse → affichage."
   },
   {
    "type": "mc",
    "q": "Qu'est-ce qui voyage dans une fibre optique ?",
    "options": [
     "Du courant électrique",
     "Des impulsions de lumière",
     "Des ondes sonores"
    ],
    "answer": 1,
    "explain": "La fibre transmet les bits sous forme d'éclairs de lumière."
   },
   {
    "type": "num",
    "q": "Un fichier de 200 Mo avec une connexion de 400 Mbit/s : combien de secondes faut-il (dans des conditions idéales) ?",
    "answer": 4,
    "unit": "s",
    "explain": "200 × 8 = 1600 Mbit ; 1600 ÷ 400 = 4 s."
   },
   {
    "type": "mc",
    "q": "Quel est le rôle du protocole TCP ?",
    "options": [
     "Donner un nom aux sites",
     "Vérifier que tous les paquets arrivent et les remettre en ordre",
     "Allumer le Wi-Fi"
    ],
    "answer": 1,
    "explain": "TCP garantit que les données arrivent complètes et ordonnées."
   },
   {
    "type": "text",
    "q": "Dans quel centre de recherche de Genève est né le World Wide Web ? (sigle)",
    "answer": [
     "cern",
     "il cern"
    ],
    "explain": "Au CERN, grâce à Tim Berners-Lee."
   },
   {
    "type": "mc",
    "q": "En quelle année ARPANET a-t-il envoyé le premier message ?",
    "options": [
     "1959",
     "1969",
     "1991"
    ],
    "answer": 1,
    "explain": "Le 29 octobre 1969, entre l'UCLA et le Stanford Research Institute."
   },
   {
    "type": "tf",
    "q": "La plupart des données entre les continents voyagent dans des câbles sous-marins.",
    "answer": true,
    "explain": "Plus de 95 % du trafic intercontinental passe par des câbles en fibre optique au fond des océans."
   }
  ]
 }
});
