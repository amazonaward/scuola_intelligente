TOPIC('fr', {
  id: "l1-sto-mesopotamia-egitto",
  title: "La Mésopotamie et l'Égypte",
  intro: "Deux grands fleuves, le <b>Tigre et l'Euphrate</b>, et un autre encore plus célèbre, le <b>Nil</b>, ont vu naître les premières villes, les premières lois écrites et les premiers États de l'histoire. Dans ces « civilisations fluviales », l'eau était la vie et le pouvoir : celui qui savait la maîtriser commandait. Dans cette leçon, nous comparons deux mondes très différents, la <b>Mésopotamie</b> des cités-États et l'<b>Égypte</b> du pharaon, et nous découvrons ce qu'ils nous ont laissé : l'écriture, les mathématiques, les codes de lois, les pyramides.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Les civilisations fluviales : le don (et le danger) de l'eau",
      html: `<p>Entre le IVe et le IIIe millénaire av. J.-C., quatre grandes civilisations naquirent le long de fleuves : la <b>Mésopotamie</b> (Tigre et Euphrate), l'<b>Égypte</b> (Nil), la <b>vallée de l'Indus</b> et la <b>vallée du fleuve Jaune</b>. Qu'ont-elles en commun ?</p>
<ul>
<li><b>Des terres fertiles</b> : les fleuves déposent du limon qui rend le sol très productif.</li>
<li><b>La maîtrise de l'eau</b> : il faut creuser des <b>canaux</b>, construire des digues et des réservoirs. Il faut un travail collectif, des calendriers, des fonctionnaires : un <b>État</b> naît.</li>
<li><b>Le surplus</b> : des récoltes abondantes nourrissent artisans, prêtres, scribes et soldats.</li>
<li><b>L'écriture</b>, pour tenir les comptes des entrepôts et noter les lois.</li>
</ul>
<p>L'historien Karl Wittfogel parla de « sociétés hydrauliques » ; aujourd'hui, cette définition est discutée, mais l'idée reste utile : <b>eau → organisation → pouvoir</b>.</p>
<p><b>Mésopotamie</b> signifie « pays entre les deux fleuves » (en grec). Le Nil, lui, a une crue prévisible (de juillet à octobre) et un désert de chaque côté : l'<b>Égypte</b> est un « don du Nil », comme l'écrivit l'historien grec Hérodote.</p>`
    },
    {
      type: "3d",
      title: "Carte 3D : d'Uruk à Ramsès",
      scene: "spacetime",
      caption: "La base est la carte du Proche-Orient et de l'Égypte, la hauteur représente le temps (3500-1000 av. J.-C.). Touche les événements : les flèches relient les causes et les effets.",
      options: {
        lat: [22, 38],
        lon: [28, 52],
        years: [-3500, -1000],
        places: [
          { lat: 30.05, lon: 31.25, label: "Memphis / Le Caire" },
          { lat: 25.7, lon: 32.65, label: "Thèbes" },
          { lat: 32.5, lon: 44.4, label: "Babylone" },
          { lat: 36.35, lon: 43.15, label: "Ninive" },
          { lat: 30.96, lon: 46.1, label: "Ur" }
        ],
        events: [
          { id: "uruk", lat: 31.32, lon: 45.64, year: -3300, label: "Uruk : la ville et l'écriture", html: "Dans la cité sumérienne d'Uruk naît l'<b>écriture</b> : des signes sur des tablettes d'argile pour enregistrer le grain, la bière, les troupeaux. C'est l'un des premiers centres urbains de l'histoire." },
          { id: "unif", lat: 29.85, lon: 31.25, year: -3100, label: "Unification de l'Égypte", html: "Vers 3100 av. J.-C. (selon la tradition : le roi Ménès/Narmer), la Haute et la Basse-Égypte sont réunies en un seul royaume, avec Memphis pour capitale.", causes: [] },
          { id: "sargon", lat: 32.5, lon: 44.3, year: -2334, label: "Sargon d'Akkad", html: "Sargon bat les cités sumériennes et crée le premier <b>empire</b> de l'histoire, du golfe Persique à la Méditerranée." , causes: ["uruk"] },
          { id: "giza", lat: 29.98, lon: 31.13, year: -2560, label: "Pyramide de Khéops", html: "Le pharaon Khéops (Khoufou) fait construire à Gizeh la Grande Pyramide, haute à l'origine d'environ 146 m : symbole du pouvoir absolu du pharaon-dieu.", causes: ["unif"] },
          { id: "hammurabi", lat: 32.54, lon: 44.42, year: -1754, label: "Code de Hammurabi", html: "Le roi de Babylone Hammurabi (vers 1792-1750 av. J.-C.) fait graver sur une stèle de basalte 282 lois : le recueil le plus complet du monde mésopotamien.", causes: ["sargon"] },
          { id: "hyksos", lat: 30.9, lon: 31.8, year: -1650, label: "Les Hyksos en Égypte", html: "Des peuples asiatiques dotés de chars et de chevaux conquièrent le delta du Nil ; ils seront chassés vers 1550 av. J.-C. par les Égyptiens, qui apprennent à utiliser des chars et de meilleures armes en bronze.", causes: ["giza"] },
          { id: "nuovo", lat: 25.7, lon: 32.65, year: -1550, label: "Nouvel Empire", html: "Avec l'expulsion des Hyksos commence le Nouvel Empire (1550-1070 av. J.-C.) : l'Égypte devient une puissance militaire, avec Thèbes pour capitale ; des pharaons comme Thoutmôsis III conquièrent la Syrie.", causes: ["hyksos"] },
          { id: "akhenaton", lat: 27.65, lon: 30.9, year: -1350, label: "Akhenaton et Aton", html: "Le pharaon Amenhotep IV se fait appeler Akhenaton et impose le culte d'un seul dieu, le disque solaire <b>Aton</b>, en fondant la ville d'Akhetaton (Amarna). À sa mort, on revient au polythéisme.", causes: ["nuovo"] },
          { id: "qadesh", lat: 34.57, lon: 36.52, year: -1274, label: "Bataille de Qadesh", html: "Ramsès II affronte les Hittites à Qadesh (Syrie) : il n'y a pas de vainqueur net. Vers 1259 av. J.-C., les deux royaumes signent le <b>premier traité de paix écrit</b> conservé.", causes: ["nuovo"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. La Mésopotamie : cités-États et empires",
      html: `<p>Dans la plaine entre le Tigre et l'Euphrate, pauvre en pierre et en métaux mais riche en argile, de nombreux peuples se succédèrent.</p>
<ul>
<li><b>Sumériens</b> (à partir du IVe millénaire av. J.-C.) : ils vivent dans des <b>cités-États</b> indépendantes et souvent en guerre : Uruk, Ur, Lagash, Kish. Au centre de chaque ville se dressait la <b>ziggourat</b>, une tour à étages surmontée d'un temple. Le roi-prêtre gouvernait au nom du dieu de la cité.</li>
<li><b>Akkadiens</b> : <b>Sargon</b> (vers 2334 av. J.-C.) unifie la région dans le premier empire.</li>
<li><b>Babyloniens</b> : la ville de <b>Babylone</b> devient puissante avec <b>Hammurabi</b> (vers 1792-1750 av. J.-C.). Elle connaît un second âge d'or avec <b>Nabuchodonosor II</b> (VIe siècle av. J.-C.).</li>
<li><b>Assyriens</b> : venus du nord de la Mésopotamie, du IXe au VIIe siècle av. J.-C., ils créent un empire grâce à une armée équipée de fer et d'une cruauté célèbre ; Ninive abritait la bibliothèque d'<b>Assurbanipal</b> (plus de 20 000 tablettes).</li>
</ul>
<p>Avec le temps, la région fut conquise par les Perses de <b>Cyrus le Grand</b> (chute de Babylone en 539 av. J.-C.).</p>`
    },
    {
      type: "text",
      title: "3. L'écriture cunéiforme et la culture mésopotamienne",
      html: `<p>L'écriture est née de besoins très pratiques : <b>compter</b>. Les premiers signes (vers 3300 av. J.-C.) sont des pictogrammes sur des tablettes d'argile : une tête de bœuf, un épi, un nombre. Puis les signes deviennent de plus en plus stylisés et on les imprime avec un roseau à pointe triangulaire : c'est l'écriture <b>cunéiforme</b> (du latin <i>cuneus</i>, « coin », en forme de clou). Elle s'adapte à plusieurs langues (sumérien, akkadien, hittite, vieux perse).</p>
<ul>
<li>Les <b>scribes</b> apprenaient pendant des années dans les « maisons des tablettes » (édubba) : ils formaient l'administration de l'État.</li>
<li><b>Littérature</b> : l'<b>Épopée de Gilgamesh</b>, poème sur le roi d'Uruk en quête d'immortalité, contient un récit de <b>déluge</b> très semblable à celui de la Bible.</li>
<li><b>Mathématiques</b> : système de numération en base <b>sexagésimale</b> (60). C'est de là que viennent les 60 minutes de l'heure et les 360 degrés du cercle.</li>
<li><b>Astronomie</b> : ils observèrent le ciel avec précision, prévirent les éclipses et inventèrent le zodiaque.</li>
<li><b>Technique</b> : la roue (vers 3500 av. J.-C.), l'araire, les canaux.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Du dessin au coin : comment l'écriture évolue",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<text x="300" y="32" font-size="18" font-weight="bold" text-anchor="middle" fill="#78350f">De l'image au signe</text>
<g stroke="#78350f" stroke-width="3" fill="none">
<path d="M70 120 Q55 90 80 80 Q110 70 120 100 Q130 130 105 150 Z"/>
<path d="M200 140 L260 90 M215 100 L260 140 M190 120 L270 120"/>
<path d="M360 80 L380 140 M395 80 L415 140 M420 100 L440 100"/>
</g>
<g fill="#78350f"><polygon points="500,90 520,90 510,130"/><polygon points="530,90 550,90 540,130"/><polygon points="510,135 530,135 520,175"/></g>
<text x="95" y="190" font-size="15" text-anchor="middle" fill="#0f172a">dessin d'une</text>
<text x="95" y="210" font-size="15" text-anchor="middle" fill="#0f172a">tête de bœuf</text>
<text x="230" y="190" font-size="15" text-anchor="middle" fill="#0f172a">signe tourné</text>
<text x="230" y="210" font-size="15" text-anchor="middle" fill="#0f172a">et simplifié</text>
<text x="400" y="190" font-size="15" text-anchor="middle" fill="#0f172a">signes plus rapides</text>
<text x="400" y="210" font-size="15" text-anchor="middle" fill="#0f172a">sur l'argile</text>
<text x="520" y="190" font-size="15" text-anchor="middle" fill="#0f172a">cunéiforme</text>
<text x="520" y="210" font-size="15" text-anchor="middle" fill="#0f172a">au roseau</text>
<text x="300" y="262" font-size="15" text-anchor="middle" fill="#7c2d12">Schéma simplifié : l'évolution a demandé de nombreux siècles.</text>
</svg>`,
      caption: "Le cunéiforme est né de pictogrammes tracés sur de l'argile fraîche, utilisés pour tenir les comptes."
    },
    {
      type: "quiz",
      title: "Mini-quiz : la Mésopotamie",
      questions: [
        { type: "mc", q: "Qu'était la ziggourat ?", options: ["Une tour à étages surmontée d'un temple", "Un type de navire", "Un code de lois"], answer: 0, explain: "C'était le centre religieux de la cité sumérienne." },
        { type: "mc", q: "Pourquoi une heure compte-t-elle 60 minutes ?", options: ["C'est l'héritage du système sexagésimal mésopotamien", "Par décision de Ramsès II", "À cause de la longueur du Nil"], answer: 0, explain: "Les Babyloniens comptaient en base 60, et cette tradition est arrivée jusqu'à nous." },
        { type: "tf", q: "L'écriture cunéiforme était gravée avec une pointe sur de la pierre.", answer: false, explain: "On l'imprimait avec un roseau à pointe triangulaire sur de l'argile fraîche." }
      ]
    },
    {
      type: "text",
      title: "4. Le code de Hammurabi et la justice écrite",
      html: `<p>Vers <b>1754 av. J.-C.</b>, le roi de Babylone <b>Hammurabi</b> fit graver sur une stèle de basalte noir (haute de plus de 2 mètres, aujourd'hui au musée du Louvre) <b>282 lois</b>. En haut, le roi reçoit sa mission du dieu de la justice, <b>Shamash</b>. Ce n'est pas le premier code (avant, il y eut celui d'<b>Ur-Nammu</b>, vers 2100 av. J.-C.), mais c'est le plus complet.</p>
<ul>
<li><b>Loi du talion</b> : « œil pour œil, dent pour dent » — la peine doit être proportionnée à l'offense et ne pas la dépasser : c'est une façon de limiter la vengeance privée.</li>
<li>Mais la peine <b>dépend de la classe sociale</b> : si un noble blesse un autre noble, il paie par la même blessure ; s'il blesse un homme de rang inférieur, il paie une amende.</li>
<li>Des règles sur le <b>commerce, les prêts, le mariage, l'héritage, les salaires</b> et la responsabilité des maçons et des médecins.</li>
<li>Les lois sont <b>écrites et publiques</b> : le juge ne peut pas décider selon son caprice.</li>
</ul>
<p>Pour nous, la nouveauté importante est le principe de <b>sécurité juridique</b> : tout le monde doit connaître la loi. Aujourd'hui, ces lois nous paraissent dures et inégalitaires, mais à l'époque elles étaient un progrès par rapport à la justice arbitraire du plus fort.</p>`
    },
    {
      type: "decision",
      title: "Babylone, vers 1760 av. J.-C. : la justice doit-elle être écrite ?",
      html: `<p>Tu es un conseiller de Hammurabi. Le royaume s'est agrandi et compte de nombreuses villes aux coutumes et aux juges différents. Les marchands se plaignent : un même litige peut avoir des issues opposées d'une ville à l'autre. Les prêtres-juges affirment que la justice est entre les mains des dieux et de leurs décisions au cas par cas.</p>`,
      question: "Que conseilles-tu au roi ?",
      options: [
        { label: "Laisser les juges locaux décider au cas par cas, comme toujours.", outcome: "On préserve les traditions locales, mais la justice reste imprévisible et les marchands n'ont pas confiance : les échanges en souffrent." },
        { label: "Rassembler des lois identiques pour tout le royaume et les faire graver dans des lieux publics.", outcome: "Le royaume devient plus uni et plus prévisible : les sujets savent ce qu'ils risquent. Le roi renforce son autorité en se présentant comme le garant de la justice." },
        { label: "Confier tout à un seul grand tribunal du roi à Babylone.", outcome: "La justice est centralisée, mais les délais deviennent très longs et beaucoup de sujets ne peuvent pas se rendre dans la capitale." }
      ],
      answer: 1,
      explain: "Hammurabi choisit la voie des <b>lois écrites et publiques</b> : la stèle fut placée dans des lieux où elle pouvait être lue (mais beaucoup ne savaient pas lire : juges et scribes servaient d'intermédiaires). C'était aussi un instrument de propagande : le roi juste, voulu par les dieux."
    },
    {
      type: "text",
      title: "5. L'Égypte : le don du Nil et le pharaon",
      html: `<p>L'Égypte est une bande de terre fertile (la « Terre noire ») entourée par le désert (la « Terre rouge »). Le Nil coule du sud vers le nord et se divise en un grand <b>delta</b>. Chaque année, en été, il déborde et dépose du limon ; c'est pourquoi les Égyptiens inventèrent un <b>calendrier de 365 jours</b> fondé sur les crues et sur l'étoile Sirius.</p>
<p><b>Une histoire de 3000 ans</b>, divisée en :</p>
<ul>
<li><b>Période prédynastique</b> et unification (vers <b>3100 av. J.-C.</b>) : la Haute-Égypte (au sud) et la Basse-Égypte (au nord, avec le delta) s'unissent sous un seul roi.</li>
<li><b>Ancien Empire</b> (vers 2686-2181 av. J.-C.) : capitale Memphis, les grandes <b>pyramides de Gizeh</b> (Khéops, Khéphren, Mykérinos).</li>
<li><b>Moyen Empire</b> (vers 2055-1650 av. J.-C.) : réunification, capitale Thèbes, art et littérature ; puis invasion des <b>Hyksos</b>.</li>
<li><b>Nouvel Empire</b> (vers 1550-1070 av. J.-C.) : l'époque impériale et des grands pharaons : <b>Hatchepsout</b> (une femme pharaon), <b>Thoutmôsis III</b>, <b>Amenhotep IV/Akhenaton</b>, <b>Toutânkhamon</b>, <b>Ramsès II</b>.</li>
<li><b>Basse époque</b> : invasions des Assyriens, des Perses (525 av. J.-C.), puis conquête d'<b>Alexandre le Grand</b> (332 av. J.-C.) et des Ptolémées, enfin de Rome (30 av. J.-C.).</li>
</ul>
<p><b>Le pharaon</b> était un roi et un dieu vivant, fils du dieu Horus et garant de l'<b>ordre cosmique</b> (Maât). En théorie, il possédait toute la terre. Il gouvernait avec l'aide d'un <b>vizir</b>, de fonctionnaires-<b>scribes</b> et de prêtres.</p>`
    },
    {
      type: "svg",
      title: "La pyramide sociale de l'Égypte",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef9c3"/>
<polygon points="300,20 160,270 440,270" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<line x1="270" y1="80" x2="330" y2="80" stroke="#92400e" stroke-width="2"/>
<line x1="235" y1="140" x2="365" y2="140" stroke="#92400e" stroke-width="2"/>
<line x1="200" y1="200" x2="400" y2="200" stroke="#92400e" stroke-width="2"/>
<text x="300" y="68" font-size="16" font-weight="bold" text-anchor="middle" fill="#7c2d12">Pharaon</text>
<text x="300" y="118" font-size="14" text-anchor="middle" fill="#0f172a">Vizir, prêtres, nobles</text>
<text x="300" y="175" font-size="14" text-anchor="middle" fill="#0f172a">Scribes, soldats, artisans</text>
<text x="300" y="240" font-size="14" text-anchor="middle" fill="#0f172a">Paysans (la grande majorité)</text>
<text x="500" y="262" font-size="14" text-anchor="middle" fill="#0f172a">Esclaves (peu nombreux)</text>
<text x="90" y="262" font-size="14" text-anchor="middle" fill="#0f172a">Prisonniers</text>
</svg>`,
      caption: "La société égyptienne était très hiérarchisée ; pendant la crue, les paysans travaillaient aussi sur les grands chantiers de l'État."
    },
    {
      type: "text",
      title: "6. Écriture, religion et vie après la mort",
      html: `<ul>
<li><b>Hiéroglyphes</b> (« gravures sacrées ») : une écriture en images qui combine des signes indiquant des sons, des idées et des catégories. À côté, pour la vie quotidienne, on utilisait l'écriture <b>hiératique</b> puis la <b>démotique</b>. On écrivait sur du <b>papyrus</b>, tiré d'une plante du Nil.</li>
<li>Les hiéroglyphes furent oubliés, puis déchiffrés en <b>1822</b> par <b>Jean-François Champollion</b> grâce à la <b>pierre de Rosette</b> (découverte en 1799), qui porte le même texte en hiéroglyphes, en démotique et en grec.</li>
<li><b>Religion polythéiste</b> : Rê (le soleil), Osiris (l'au-delà), Isis, Horus, Anubis. Les dieux ont souvent une tête d'animal.</li>
<li><b>Au-delà</b> : après la mort, le défunt est jugé : son cœur est pesé contre la plume de Maât. C'est pourquoi on pratiquait la <b>momification</b> (conserver le corps) et on construisait des <b>tombeaux</b> avec des trésors et le « Livre des morts ».</li>
<li><b>Sciences</b> : la géométrie pour retracer les limites des champs après les crues, une médecine pratique (papyrus médicaux), l'astronomie.</li>
</ul>
<p>Les <b>pyramides</b> sont les tombeaux monumentaux des pharaons de l'Ancien Empire, construits par des ouvriers organisés (et non par des esclaves, d'après les découvertes archéologiques faites près de Gizeh) à l'aide de rampes et de blocs de pierre. Ensuite, par peur des pillages, les pharaons du Nouvel Empire se firent enterrer dans des tombes creusées dans la roche de la <b>Vallée des Rois</b>, près de Thèbes.</p>`
    },
    {
      type: "example",
      title: "Exemple concret : lire un cartouche",
      html: `<p>Le nom d'un pharaon s'écrivait dans un ovale allongé, le <b>cartouche</b>. Champollion comprit que les hiéroglyphes des cartouches de Ptolémée et de Cléopâtre, sur la pierre de Rosette, indiquaient des <b>sons</b> et pas seulement des idées : c'est à partir de là qu'il commença à tout déchiffrer. Essaie de raisonner comme lui :</p>
<ol>
<li>La stèle porte le même texte dans <b>trois écritures</b> : on savait lire le grec, qui donnait donc la traduction.</li>
<li>Le nom « Ptolémée » apparaît plusieurs fois dans le texte grec : cherche la même séquence dans les hiéroglyphes, à l'intérieur d'un cartouche.</li>
<li>Associe chaque signe à un son et compare avec « Cléopâtre » : les lettres communes (P, O, L, T) correspondent aux mêmes signes.</li>
</ol>
<p>C'est la méthode qui permet de déchiffrer n'importe quelle écriture perdue : il faut une clé de comparaison et beaucoup de patience.</p>`
    },
    {
      type: "example",
      title: "Exemple concret : ta montre est babylonienne",
      html: `<p>Chaque fois que tu regardes l'heure ou que tu mesures un angle, tu utilises un héritage mésopotamien :</p>
<ul>
<li>1 heure = 60 minutes, 1 minute = 60 secondes : base 60 ;</li>
<li>le cercle compte 360 degrés (6 × 60) ;</li>
<li>les jours de la semaine sont liés aux sept astres visibles à l'œil nu (Soleil, Lune, Mars, Mercure, Jupiter, Vénus, Saturne), comme on le voit encore dans les noms français : lundi (Lune), mardi (Mars)...</li>
</ul>
<p>Et de l'Égypte, nous avons hérité le <b>calendrier solaire de 365 jours</b>, corrigé ensuite par les Romains avec Jules César (année bissextile).</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La malédiction de Toutânkhamon",
      html: `<p>En <b>1922</b>, l'archéologue britannique <b>Howard Carter</b> découvrit dans la Vallée des Rois la tombe presque intacte de <b>Toutânkhamon</b>, pharaon mort très jeune (vers 18-19 ans) vers 1323 av. J.-C., fils ou parent d'Akhenaton. Quand mourut en 1923 le mécène Lord Carnarvon, on parla de « malédiction du pharaon ». Mais les archéologues ont montré que la plupart des participants moururent de mort naturelle et à un âge avancé (Carter en 1939) : la « malédiction » est une invention des journaux. La tombe contenait plus de 5000 objets, dont le célèbre masque funéraire en or.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le premier « traité de paix » de l'histoire",
      html: `<p>Après la bataille de Qadesh (vers 1274 av. J.-C.), le pharaon <b>Ramsès II</b> et le roi hittite <b>Hattusili III</b> signèrent, vers 1259 av. J.-C., un traité de paix et d'alliance dont nous possédons à la fois la version égyptienne (gravée sur les murs du temple de Karnak) et la version hittite (tablettes d'argile). Une copie est exposée au siège de l'ONU à New York comme exemple d'accord international ancien.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la Mésopotamie et l'Égypte",
      intro: "Deux civilisations fluviales, deux solutions. Voici quelques façons de les comparer.",
      tabs: [
        {
          label: "⚖️ Comparaison en deux colonnes",
          html: `<table>
<tr><th></th><th>Mésopotamie</th><th>Égypte</th></tr>
<tr><td><b>Fleuve</b></td><td>Tigre et Euphrate : crues soudaines et destructrices</td><td>Nil : crue régulière et prévisible</td></tr>
<tr><td><b>Territoire</b></td><td>Plaine ouverte, facile à envahir</td><td>Déserts de chaque côté : bien protégé</td></tr>
<tr><td><b>État</b></td><td>Nombreuses cités-États, puis empires</td><td>Un royaume uni sous le pharaon</td></tr>
<tr><td><b>Roi</b></td><td>Roi-prêtre, représentant des dieux</td><td>Pharaon : dieu vivant</td></tr>
<tr><td><b>Écriture</b></td><td>Cunéiforme sur argile</td><td>Hiéroglyphes sur papyrus</td></tr>
<tr><td><b>Monuments</b></td><td>Ziggourats, en briques</td><td>Pyramides et temples, en pierre</td></tr>
<tr><td><b>Au-delà</b></td><td>Triste et poussiéreux</td><td>Vie heureuse pour qui réussit le jugement</td></tr>
</table>
<p>La géographie explique beaucoup : un fleuve capricieux et un territoire ouvert produisent des cités en conflit et des peuples agressifs ; un fleuve régulier et un désert protecteur produisent une unité stable et une vision optimiste de la vie.</p>`
        },
        {
          label: "🗺️ Où sont-elles : fais tourner le globe",
          html: `<p>Fais tourner le globe pour localiser les grandes villes des deux civilisations.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 31.3, lon: 45.6, label: "Uruk", color: "#f97316" },
              { lat: 30.96, lon: 46.1, label: "Ur", color: "#f97316" },
              { lat: 32.5, lon: 44.4, label: "Babylone", color: "#ef4444" },
              { lat: 36.35, lon: 43.15, label: "Ninive", color: "#ef4444" },
              { lat: 29.98, lon: 31.13, label: "Gizeh", color: "#2563eb" },
              { lat: 25.7, lon: 32.65, label: "Thèbes", color: "#2563eb" }
            ],
            routes: [{ points: [0, 1, 2, 3], color: "#f97316" }, { points: [4, 5], color: "#2563eb" }]
          }
        },
        {
          label: "📅 Frise chronologique",
          html: `<p>Place les événements sur la frise chronologique : tu vois combien ces histoires sont longues.</p>`,
          widget: "timeline",
          options: {
            unit: "ans",
            events: [
              { year: -3300, label: "Écriture à Uruk", icon: "✍️" },
              { year: -3100, label: "Unification de l'Égypte", icon: "👑" },
              { year: -2560, label: "Pyramide de Khéops", icon: "🔺" },
              { year: -2334, label: "Sargon d'Akkad", icon: "⚔️" },
              { year: -1754, label: "Code de Hammurabi", icon: "⚖️" },
              { year: -1550, label: "Nouvel Empire", icon: "🏛️" },
              { year: -1350, label: "Akhenaton", icon: "☀️" },
              { year: -1274, label: "Qadesh", icon: "🛡️" },
              { year: -539, label: "Les Perses à Babylone", icon: "🏰" },
              { year: -332, label: "Alexandre en Égypte", icon: "🐎" }
            ]
          }
        },
        {
          label: "🃏 Cartes de révision",
          html: `<p>Retourne les cartes pour réviser les mots clés.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Ziggourat", back: "Tour à étages surmontée d'un temple, centre de la cité sumérienne" },
              { front: "Cunéiforme", back: "Écriture faite de signes en forme de coin imprimés sur de l'argile" },
              { front: "Hammurabi", back: "Roi de Babylone (vers 1792-1750 av. J.-C.), auteur du célèbre code de 282 lois" },
              { front: "Pharaon", back: "Roi-dieu de l'Égypte, garant de l'ordre (Maât)" },
              { front: "Rosette", back: "Stèle portant le même texte en trois écritures : la clé pour déchiffrer les hiéroglyphes" },
              { front: "Loi du talion", back: "Peine proportionnée à l'offense (« œil pour œil »)" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des civilisations fluviales : touche les nœuds et découvre pourquoi",
      nodes: [
        { id: "fiumi", label: "Grands fleuves", x: 50, y: 6, color: "#0ea5e9", html: "Le Tigre, l'Euphrate et le Nil offrent de l'eau, du limon et des voies de transport.", why: "Là où l'eau est abondante et prévisible (ou maîtrisable), la terre rapporte beaucoup : plus de nourriture signifie plus de monde et un surplus pour entretenir des spécialistes." },
        { id: "canali", label: "Irrigation et maîtrise de l'eau", x: 18, y: 30, color: "#16a34a", html: "Canaux, digues, calendriers des crues.", why: "Pour creuser et entretenir les canaux, il faut un travail collectif et de la coordination. Le pouvoir central s'impose justement parce qu'il organise et défend ces ouvrages." },
        { id: "surplus", label: "Surplus et entrepôts", x: 82, y: 30, color: "#eab308", html: "Les récoltes s'accumulent dans les greniers du temple ou du palais.", why: "Ceux qui gèrent les entrepôts ont besoin d'enregistrer ce qui entre et ce qui sort : la comptabilité est née." },
        { id: "scrittura", label: "Écriture", x: 50, y: 50, color: "#a855f7", html: "Cunéiforme en Mésopotamie, hiéroglyphes en Égypte.", why: "Inventée pour compter les réserves et les dettes, elle servit ensuite pour les lois, les lettres, les prières et les récits. Elle marque la naissance de l'histoire." },
        { id: "stato", label: "État et roi", x: 20, y: 75, color: "#ef4444", html: "Cités-États sumériennes, empires mésopotamiens, royaume uni d'Égypte.", why: "Le pouvoir se légitime par la religion : le roi est le représentant du dieu (Mésopotamie) ou est lui-même un dieu (Égypte). L'armée, les impôts et l'administration soutiennent l'État." },
        { id: "leggi", label: "Lois écrites", x: 80, y: 75, color: "#7c2d12", html: "Code d'Ur-Nammu, code de Hammurabi.", why: "Dans des sociétés grandes et complexes, on ne peut plus se fier seulement à la tradition orale : il faut des règles communes et publiques pour régler les conflits et garantir le commerce." },
        { id: "cultura", label: "Science et religion", x: 50, y: 95, color: "#0f766e", html: "Mathématiques, astronomie, momification, temples.", why: "Calculer le calendrier, mesurer les champs après les crues et construire de grands ouvrages stimulent les mathématiques et l'astronomie ; la peur de la mort et le besoin d'ordre produisent des mythes et des rites." }
      ],
      edges: [
        ["fiumi", "canali", "exigent"],
        ["fiumi", "surplus", "produisent"],
        ["canali", "stato", "renforcent l'"],
        ["surplus", "scrittura", "exige l'"],
        ["scrittura", "leggi", "permet les"],
        ["stato", "leggi", "promulgue"],
        ["scrittura", "cultura", "transmet"],
        ["stato", "cultura", "finance"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : l'Égypte",
      questions: [
        { type: "mc", q: "Qui a déchiffré les hiéroglyphes en 1822 ?", options: ["Howard Carter", "Jean-François Champollion", "Hérodote"], answer: 1, explain: "Champollion utilisa la pierre de Rosette." },
        { type: "mc", q: "Qu'était le pharaon pour les Égyptiens ?", options: ["Un roi-dieu garant de l'ordre cosmique", "Un simple juge", "Un chef militaire élu"], answer: 0, explain: "Il était considéré comme le fils des dieux et le garant de Maât." },
        { type: "tf", q: "Les pyramides de Gizeh appartiennent au Nouvel Empire.", answer: false, explain: "Elles furent construites sous l'Ancien Empire (vers 2600-2500 av. J.-C.)." },
        { type: "text", q: "Comment s'appelle l'écriture égyptienne en images ?", answer: ["hiéroglyphes", "hiéroglyphe", "les hiéroglyphes", "hieroglyphes", "écriture hiéroglyphique"], explain: "Les hiéroglyphes, « gravures sacrées »." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Les civilisations fluviales naissent là où l'eau donne un surplus et exige de l'organisation : Mésopotamie, Égypte, Indus, fleuve Jaune.</li>
<li><b>Mésopotamie</b> : Sumériens (cités-États, ziggourats, cunéiforme), Akkadiens (Sargon, premier empire), Babyloniens (<b>Hammurabi</b>, vers 1792-1750 av. J.-C.), Assyriens.</li>
<li><b>Code de Hammurabi</b> : 282 lois écrites, talion, peines différentes selon la classe sociale.</li>
<li><b>Égypte</b> : unification vers 3100 av. J.-C. ; Ancien (pyramides), Moyen et Nouvel Empire ; pharaon roi-dieu ; hiéroglyphes déchiffrés en 1822.</li>
<li>Héritage : l'écriture, la base 60, le calendrier de 365 jours, la géométrie, les lois écrites.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Civilisation fluviale", d: "Société née le long d'un grand fleuve, qui en exploite et en maîtrise les eaux." },
    { t: "Cité-État", d: "Ville indépendante avec son propre gouvernement et son territoire." },
    { t: "Ziggourat", d: "Tour à étages mésopotamienne surmontée d'un temple." },
    { t: "Cunéiforme", d: "Écriture mésopotamienne faite de signes en forme de coin imprimés sur de l'argile." },
    { t: "Scribe", d: "Fonctionnaire qui savait lire et écrire." },
    { t: "Talion", d: "Principe selon lequel la peine est égale au dommage subi." },
    { t: "Pharaon", d: "Roi d'Égypte, considéré comme un dieu." },
    { t: "Hiéroglyphe", d: "Écriture en images de l'Égypte ancienne." },
    { t: "Papyrus", d: "Support d'écriture tiré d'une plante du Nil." },
    { t: "Momification", d: "Technique de conservation du corps des défunts." },
    { t: "Empire", d: "État étendu qui domine de nombreux peuples." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Que signifie « Mésopotamie » ?", options: ["Pays entre les deux fleuves", "Pays du Nil", "Pays du soleil"], answer: 0, explain: "Du grec : « pays au milieu des fleuves » (le Tigre et l'Euphrate)." },
      { type: "mc", q: "Quelle est l'écriture des Sumériens ?", options: ["Hiéroglyphique", "Cunéiforme", "Alphabétique"], answer: 1, explain: "Le cunéiforme, sur des tablettes d'argile." },
      { type: "tf", q: "Le code de Hammurabi prévoyait des peines identiques pour les nobles et les gens du peuple.", answer: false, explain: "Les peines dépendaient de la classe sociale." },
      { type: "text", q: "Comment s'appelle le premier roi qui unifia la Mésopotamie en un empire, vers 2334 av. J.-C. ?", answer: ["sargon", "sargon d'akkad", "sargon d'agadé"], explain: "Sargon d'Akkad." },
      { type: "mc", q: "À quelle période les pyramides de Gizeh furent-elles construites ?", options: ["Ancien Empire", "Nouvel Empire", "Époque ptolémaïque"], answer: 0, explain: "Ancien Empire, vers 2600-2500 av. J.-C." },
      { type: "mc", q: "Qu'est-ce qui a permis de déchiffrer les hiéroglyphes ?", options: ["La pierre de Rosette", "La tombe de Toutânkhamon", "Le code de Hammurabi"], answer: 0, explain: "Le texte en trois écritures, dont une grecque, fut la clé." },
      { type: "order", q: "Range dans l'ordre chronologique.", items: ["Naissance de l'écriture à Uruk", "Unification de l'Égypte", "Pyramide de Khéops", "Code de Hammurabi", "Bataille de Qadesh"], explain: "Vers 3300, 3100, 2560, 1754, 1274 av. J.-C." },
      { type: "mc", q: "Pourquoi l'Égypte était-elle plus stable que la Mésopotamie ?", options: ["Elle avait un Nil régulier et des frontières protégées par le désert", "Elle n'avait pas de fleuves", "C'était une île"], answer: 0, explain: "La crue prévisible et la protection naturelle favorisèrent un royaume uni." },
      { type: "num", q: "Combien de lois contient le code de Hammurabi ? (environ)", answer: 282, tol: 2, explain: "282 articles, gravés sur la stèle de basalte." },
      { type: "tf", q: "Akhenaton introduisit en Égypte le culte d'un seul dieu, Aton.", answer: true, explain: "Ce fut une tentative de monothéisme, abandonnée après sa mort." },
      { type: "mc", q: "Quel héritage mésopotamien utilisons-nous encore aujourd'hui ?", options: ["La division de l'heure en 60 minutes", "Les chiffres romains", "La monnaie"], answer: 0, explain: "Le système sexagésimal." }
    ]
  }
});
