TOPIC('fr', {
  id: "l1-sto-grecia-polis",
  title: "La Grèce des cités",
  intro: "Un territoire de montagnes et d'îles, sans grands fleuves ni plaines, où personne ne réussit jamais à réunir tout le monde sous un seul roi. Et pourtant, c'est ici que sont nés la <b>démocratie</b>, la philosophie, le théâtre, les jeux Olympiques. Comment ? Grâce à une invention bien grecque : la <b>polis</b>, une cité qui est à la fois une ville, un État et une communauté de citoyens. Dans cette leçon, nous partons des civilisations de l'âge du bronze, les Minoens et les Mycéniens, pour arriver aux deux modèles opposés de <b>Sparte</b> et d'<b>Athènes</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Le territoire grec et pourquoi il compte",
      html: `<p>La Grèce est faite de <b>péninsules, d'îles et de montagnes</b> : environ 80 % du territoire est montagneux, les plaines cultivables sont petites et séparées. Cela a trois effets décisifs :</p>
<ul>
<li><b>Morcellement politique</b> : chaque vallée ou île développe une communauté autonome ; il est difficile de les réunir en un seul royaume.</li>
<li><b>Manque de terres</b> : les récoltes sont limitées (peu de blé, beaucoup d'huile et de vin) : on cherche ailleurs nourriture et commerce.</li>
<li><b>Vocation maritime</b> : aucun point de la Grèce n'est loin de la mer ; la Méditerranée est la route. Comme le disait Platon, les Grecs vivent « autour de la mer comme des grenouilles autour d'une mare ».</li>
</ul>
<p>Les Grecs s'appelaient eux-mêmes <b>Hellènes</b> et leur pays <b>Hellade</b> ; ils se sentaient un seul peuple par la langue, la religion (les mêmes dieux de l'Olympe), les fêtes panhelléniques (<b>jeux Olympiques</b>, à partir de <b>776 av. J.-C.</b>) et les sanctuaires (Delphes, avec l'oracle d'Apollon). Celui qui ne parlait pas grec était un <i>bárbaros</i>.</p>`
    },
    {
      type: "text",
      title: "2. Minoens et Mycéniens : la Grèce de l'âge du bronze",
      html: `<p><b>Civilisation minoenne</b> (Crète, vers 2000-1450 av. J.-C.) : elle tire son nom du roi légendaire Minos. De riches <b>palais</b> comme celui de <b>Cnossos</b>, sans murailles défensives (signe de puissance maritime), des fresques vivantes avec des dauphins, des taureaux, de jeunes acrobates. Les Minoens écrivaient en <b>linéaire A</b>, encore non déchiffré. Leur puissance déclina après l'éruption du volcan de <b>Théra</b> (Santorin, vers 1600 av. J.-C.) et la conquête par les Mycéniens.</p>
<p><b>Civilisation mycénienne</b> (Grèce continentale, vers 1600-1100 av. J.-C.) : de <b>Mycènes</b>, dans le Péloponnèse. C'étaient des <b>Grecs</b> de langue indo-européenne, arrivés du nord au IIe millénaire av. J.-C. Ils construisaient des <b>citadelles fortifiées</b> (avec d'énormes blocs, les « murs cyclopéens », et la porte des Lionnes), des tombes à tholos remplies de trésors en or (masque « d'Agamemnon »). Ils écrivaient en <b>linéaire B</b>, déchiffré en 1952 par <b>Michael Ventris</b> : c'est du grec ancien, et il nous livre des inventaires de palais. À la fin du IIe millénaire av. J.-C. (vers 1200-1100), la civilisation mycénienne s'effondra, dans le cadre de la crise générale de la Méditerranée (invasions, séismes, guerres).</p>
<p>Le souvenir de cette époque survit dans les poèmes d'<b>Homère</b> (<i>Iliade</i> et <i>Odyssée</i>, composés peut-être au VIIIe s. av. J.-C.) : guerre de Troie (vers 1200 av. J.-C.), le roi Agamemnon, Achille, Ulysse. Ce sont des récits littéraires, pas des chroniques, mais ils contiennent de vrais souvenirs.</p>`
    },
    {
      type: "3d",
      title: "Carte 3D : de la Grèce mycénienne aux colonies",
      scene: "spacetime",
      caption: "La base est la carte de la Grèce et de la mer Égée, la hauteur représente le temps (1700-500 av. J.-C.). Touche les événements : les flèches relient causes et effets.",
      options: {
        lat: [34, 41],
        lon: [20, 30],
        years: [-1700, -500],
        places: [
          { lat: 37.97, lon: 23.72, label: "Athènes" },
          { lat: 37.08, lon: 22.43, label: "Sparte" },
          { lat: 37.73, lon: 22.76, label: "Mycènes" },
          { lat: 35.3, lon: 25.16, label: "Cnossos" }
        ],
        events: [
          { id: "cnosso", lat: 35.3, lon: 25.16, year: -1700, label: "Palais de Cnossos", html: "Le grand palais de Crète est le centre administratif et religieux de la civilisation minoenne.", causes: [] },
          { id: "micene", lat: 37.73, lon: 22.76, year: -1500, label: "Mycènes", html: "Les Mycéniens, Grecs du continent, dominent le Péloponnèse et conquièrent la Crète vers 1450 av. J.-C.", causes: ["cnosso"] },
          { id: "crollo", lat: 37.73, lon: 22.76, year: -1150, label: "Effondrement des palais", html: "Vers 1200-1100 av. J.-C., les palais mycéniens sont détruits. Suivent des siècles de déclin : le « Moyen Âge grec » ou « siècles obscurs ».", causes: ["micene"] },
          { id: "olimpiadi", lat: 37.64, lon: 21.63, year: -776, label: "Premiers jeux Olympiques", html: "En 776 av. J.-C. (date traditionnelle) ont lieu à Olympie les premiers jeux panhelléniques en l'honneur de Zeus : on s'en servait pour dater les événements.", causes: ["crollo"] },
          { id: "polis", lat: 37.97, lon: 23.72, year: -800, label: "Naissance des cités", html: "Vers le VIIIe s. av. J.-C., les villages s'unissent en cités-États (poleis), avec acropole, agora et assemblée des citoyens.", causes: ["crollo"] },
          { id: "cuma", lat: 40.85, lon: 14.05, year: -750, label: "Cumes : première colonie en Italie", html: "Vers 750 av. J.-C., des colons venus de Chalcis et d'Érétrie débarquent en Campanie : c'est le début de la Grande-Grèce.", causes: ["polis"] },
          { id: "siracusa", lat: 37.07, lon: 15.29, year: -733, label: "Syracuse", html: "En 733 av. J.-C., des colons de Corinthe fondent Syracuse, qui deviendra la cité grecque la plus puissante d'Occident.", causes: ["polis"] },
          { id: "solone", lat: 37.97, lon: 23.72, year: -594, label: "Réformes de Solon", html: "À Athènes, Solon annule les dettes et abolit l'esclavage pour dettes, répartit les citoyens selon leur fortune et ouvre l'assemblée à tous.", causes: ["polis"] },
          { id: "clistene", lat: 37.97, lon: 23.72, year: -508, label: "Réformes de Clisthène", html: "En 508-507 av. J.-C., Clisthène réorganise les citoyens en 10 tribus mixtes et crée la Boulè des 500 : c'est le début de la démocratie athénienne.", causes: ["solone"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. Qu'est-ce qu'une polis ?",
      html: `<p>Après l'effondrement mycénien, entre le IXe et le VIIIe s. av. J.-C., les villages grecs se regroupent en <b>poleis</b> (singulier <i>polis</i>) : des communautés autonomes avec leurs propres lois, armée, monnaie et dieux protecteurs. Ce n'est pas simplement une ville : c'est un <b>État</b> en miniature.</p>
<ul>
<li><b>Acropole</b> (« ville haute ») : colline fortifiée avec les temples, refuge en cas d'attaque.</li>
<li><b>Agora</b> : place centrale pour le marché et les assemblées ; cœur de la vie publique.</li>
<li><b>Chôra</b> : la campagne autour, avec les champs des citoyens.</li>
<li><b>Citoyens</b> : seuls les hommes adultes nés de citoyens participent à la vie politique. Les femmes, les esclaves et les étrangers (<i>métèques</i>) en sont exclus.</li>
<li>Taille : de quelques milliers d'habitants à quelques dizaines de milliers (Athènes et Syracuse étaient les plus grandes). Ainsi, tout le monde pouvait se connaître et participer directement.</li>
</ul>
<p>Les cités étaient rivales et souvent en guerre, mais elles se sentaient membres d'une même culture. Les régimes politiques changent au fil du temps : <b>monarchie → aristocratie (oligarchie) → tyrannie → démocratie</b>. Le <b>tyran</b> est celui qui prend le pouvoir par la force (souvent avec l'appui des pauvres) et gouverne en dehors des règles ; le mot n'avait pas forcément le sens négatif d'aujourd'hui.</p>`
    },
    {
      type: "svg",
      title: "Comment est organisée une polis",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfccb"/>
<rect x="0" y="230" width="600" height="70" fill="#bfdbfe"/>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#1e3a8a">mer : port et commerce</text>
<path d="M200 220 L250 90 L350 90 L400 220 Z" fill="#d6d3d1" stroke="#44403c" stroke-width="3"/>
<rect x="265" y="55" width="70" height="35" fill="#fafaf9" stroke="#44403c" stroke-width="2"/>
<polygon points="260,55 300,30 340,55" fill="#fecaca" stroke="#7f1d1d" stroke-width="2"/>
<text x="300" y="75" font-size="14" text-anchor="middle" fill="#0f172a">temple</text>
<text x="300" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">ACROPOLE</text>
<rect x="215" y="150" width="170" height="60" fill="#fef9c3" stroke="#a16207" stroke-width="2"/>
<text x="300" y="185" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">AGORA</text>
<g fill="#fde68a" stroke="#92400e" stroke-width="2"><rect x="60" y="170" width="50" height="40"/><rect x="120" y="180" width="50" height="30"/><rect x="430" y="170" width="50" height="40"/><rect x="490" y="180" width="50" height="30"/></g>
<text x="115" y="160" font-size="14" text-anchor="middle" fill="#0f172a">maisons</text>
<text x="490" y="160" font-size="14" text-anchor="middle" fill="#0f172a">maisons</text>
<text x="85" y="40" font-size="14" fill="#14532d">champs et villages (chôra)</text>
<text x="400" y="40" font-size="14" fill="#14532d">champs et villages (chôra)</text>
</svg>`,
      caption: "Schéma idéal d'une polis : acropole avec les temples, agora au centre, maisons, campagne et port."
    },
    {
      type: "quiz",
      title: "Mini-quiz : les origines",
      questions: [
        { type: "mc", q: "Quelle écriture des Mycéniens a été déchiffrée en 1952 ?", options: ["Le linéaire A", "Le linéaire B", "Les hiéroglyphes"], answer: 1, explain: "Le linéaire B, par Michael Ventris : c'est du grec." },
        { type: "mc", q: "Qu'était l'agora ?", options: ["La place centrale de la polis", "La colline fortifiée", "Un temple"], answer: 0, explain: "La place du marché et des assemblées." },
        { type: "tf", q: "La Grèce antique était un État unifié sous un seul roi.", answer: false, explain: "Elle était divisée en de nombreuses cités indépendantes." }
      ]
    },
    {
      type: "text",
      title: "4. La colonisation grecque (VIIIe-VIe s. av. J.-C.)",
      html: `<p>Entre le VIIIe et le VIe s. av. J.-C., de nombreuses cités envoyèrent des groupes de citoyens fonder des <b>colonies</b> sur les côtes de la Méditerranée et de la mer Noire. Chaque colonie (<i>apoikia</i>, « maison au loin ») était une polis <b>indépendante</b>, liée à la cité mère (<i>métropole</i>) par des liens religieux et affectifs.</p>
<p><b>Pourquoi ?</b></p>
<ul>
<li><b>Surpopulation et manque de terres</b> : les fils cadets des paysans n'avaient pas de champs ;</li>
<li><b>Commerce</b> : il fallait des escales pour les métaux et le blé ;</li>
<li><b>Luttes politiques</b> : les vaincus partaient souvent ;</li>
<li><b>Goût de l'aventure</b> et curiosité.</li>
</ul>
<p>Avant de partir, les colons consultaient l'<b>oracle de Delphes</b>. Le chef de l'expédition s'appelait l'<i>œciste</i>.</p>
<p><b>Où ?</b> À l'ouest : la <b>Grande-Grèce</b> (Italie du Sud) et la <b>Sicile</b> : Cumes, Naples, Tarente (Sparte, vers 706 av. J.-C.), Sybaris, Crotone, Rhégion, Syracuse (Corinthe, 733 av. J.-C.), Agrigente, Naxos. En France, <b>Massalia</b> (Marseille, vers 600 av. J.-C.), en Espagne Emporion ; à l'est, sur la mer Noire et l'Hellespont (Byzance, vers 660 av. J.-C.).</p>
<p><b>Conséquences</b> : plus de commerce et de richesse ; naissance d'une <b>classe de marchands</b> qui réclame du pouvoir ; diffusion de la culture grecque (et de l'alphabet) chez les peuples italiques et rencontre avec les Étrusques et les Romains ; naissance du sentiment d'une identité <b>grecque</b> commune face aux barbares.</p>`
    },
    {
      type: "text",
      title: "5. Sparte : l'État-caserne",
      html: `<p><b>Sparte</b>, dans la plaine de Laconie (Péloponnèse), conquit ses voisins les Messéniens au terme d'une longue guerre (VIIIe-VIIe s. av. J.-C.) et les réduisit à l'état d'<b>hilotes</b>, serfs collectifs de l'État qui travaillaient la terre. Pour les maintenir soumis, les Spartiates choisirent de devenir un peuple de soldats.</p>
<ul>
<li><b>Trois groupes</b> : les <b>Spartiates</b> ou « Égaux » (citoyens de plein droit, peu nombreux, guerriers), les <b>périèques</b> (libres mais sans droits politiques, artisans et commerçants) et les <b>hilotes</b>.</li>
<li><b>Régime mixte</b>, attribué au légendaire <b>Lycurgue</b> : deux <b>rois</b> (dyarchie) aux pouvoirs surtout militaires ; la <b>gérousia</b>, conseil de 28 anciens de plus de 60 ans plus les deux rois ; l'<b>apella</b>, assemblée de tous les Spartiates qui approuvait ou rejetait les propositions par acclamation ; les cinq <b>éphores</b>, magistrats élus chaque année qui surveillaient les rois.</li>
<li><b>Agogè</b> (« éducation ») : à 7 ans, les garçons quittaient leur famille pour être élevés par l'État : discipline, faim, résistance à la douleur, entraînement. Jusqu'à 30 ans, ils vivaient en caserne.</li>
<li><b>Femmes</b> : elles avaient plus de liberté et de considération qu'ailleurs en Grèce (activité physique, gestion des biens), mais leur rôle était de donner naissance à des guerriers.</li>
<li>Sparte avait la <b>phalange</b> la plus redoutable : des soldats armés d'un bouclier (<i>hoplon</i>) et d'une lance, en rangs serrés. Au Ve siècle, elle comptait environ 8 000 Spartiates.</li>
</ul>
<p>Sparte resta fermée, conservatrice et peu tournée vers les arts ; sa force militaire fit d'elle la cheffe de la <b>Ligue du Péloponnèse</b>.</p>`
    },
    {
      type: "text",
      title: "6. Athènes : de l'aristocratie à la démocratie",
      html: `<p><b>Athènes</b>, en Attique, était plus grande et plus ouverte sur la mer. Son évolution politique fut progressive, étape par étape :</p>
<ul>
<li><b>Aristocratie</b> : le pouvoir appartenait aux grands propriétaires (<i>eupatrides</i>), qui élisaient les neuf <b>archontes</b>. Les petits paysans endettés risquaient de devenir esclaves.</li>
<li><b>Dracon</b> (621 av. J.-C.) : il met les lois par écrit : très sévères (« draconiennes »), mais désormais connues de tous.</li>
<li><b>Solon</b> (594 av. J.-C.) : il annule les dettes (<i>seisachtheia</i>, « levée des fardeaux ») et interdit l'esclavage pour dettes ; il répartit les citoyens en <b>quatre classes selon leur fortune</b> : l'accès aux charges dépend de la richesse et non plus de la naissance ; il crée un conseil de 400 membres et un tribunal populaire.</li>
<li><b>Pisistrate</b> (561-527 av. J.-C.) : tyran populaire, il protège les paysans, fait construire des ouvrages publics et organise des fêtes (les Grandes Dionysies).</li>
<li><b>Clisthène</b> (508-507 av. J.-C.) : il répartit la population en <b>10 tribus mixtes</b> (qui ne sont plus liées aux familles nobles) et crée la <b>Boulè des 500</b>, qui prépare les lois. Il introduit l'<b>ostracisme</b> : chaque année, les citoyens peuvent voter en écrivant sur un tesson le nom d'un homme jugé dangereux, qui est exilé pour 10 ans sans procès.</li>
</ul>
<p>Avec Clisthène naît la <b>démocratie</b> (« pouvoir du peuple ») : les décisions les plus importantes reviennent à l'<b>Ecclésia</b> (assemblée de tous les citoyens hommes adultes, qui se réunissait sur la colline de la Pnyx) et la plupart des charges sont <b>attribuées par tirage au sort</b>.</p>`
    },
    {
      type: "widget",
      title: "Sparte ou Athènes ?",
      widget: "classify",
      options: {
        groups: ["🛡️ Sparte", "🏛️ Athènes"],
        items: [
          ["Deux rois et cinq éphores", 0],
          ["Assemblée de tous les citoyens (Ecclésia)", 1],
          ["Agogè, éducation militaire dès 7 ans", 0],
          ["Ostracisme", 1],
          ["Hilotes qui travaillent la terre", 0],
          ["Réformes de Solon et de Clisthène", 1],
          ["Gérousia de 28 anciens", 0],
          ["Puissante flotte commerciale et militaire", 1]
        ]
      },
      caption: "Touche une expression, puis la bonne cité."
    },
    {
      type: "decision",
      title: "Athènes, 508 av. J.-C. : qui doit décider ?",
      html: `<p>Après la chute des tyrans, Athènes est déchirée par la rivalité entre familles nobles. Tu es <b>Clisthène</b>, un aristocrate qui veut éviter la guerre civile et le retour d'un tyran. Presque tous les pouvoirs sont encore entre les mains de quelques familles. Les autres citoyens, surtout les paysans et les artisans, demandent à peser davantage.</p>`,
      question: "Quelle solution proposes-tu ?",
      options: [
        { label: "Renforcer le pouvoir des grandes familles, pour qu'elles gouvernent avec fermeté.", outcome: "Les familles restent en conflit, et les citoyens exclus soutiennent un nouveau tyran : le risque de guerre civile reste élevé." },
        { label: "Donner à tous les citoyens hommes une place dans l'assemblée et les conseils, en réorganisant les tribus.", outcome: "Les citoyens se sentent responsables de l'État et le défendent : ce sera la force d'Athènes pendant les guerres médiques. Le prix : la majorité de la population (femmes, esclaves, métèques) reste exclue." },
        { label: "Tout confier à un roi qui gouverne pour tous.", outcome: "On revient à la monarchie, alors que les Athéniens l'avaient abandonnée depuis des siècles : ce serait un choix à contre-courant de l'époque." }
      ],
      answer: 1,
      explain: "Clisthène choisit la voie de la <b>participation élargie</b> : le pouvoir passa de l'aristocratie de naissance à l'ensemble des citoyens hommes. Ce fut la naissance de la démocratie athénienne, qui atteindra son apogée avec Périclès."
    },
    {
      type: "example",
      title: "Exemple concret : un citoyen athénien au travail",
      html: `<p>Imagine que tu es <b>Nicias</b>, paysan athénien de 30 ans. Ta journée :</p>
<ol>
<li>Le matin, tu travailles ton potager et tes oliviers, aidé par un esclave.</li>
<li>Environ tous les dix jours, tu te rends sur la <b>Pnyx</b> pour l'<b>assemblée</b> : tu votes à main levée sur la guerre, les impôts, les lois.</li>
<li>Si tu es tiré au sort, tu deviens pour un an membre de la <b>Boulè</b> ou <b>juré</b> dans les tribunaux populaires (avec une petite indemnité pour ne pas y perdre).</li>
<li>En cas de guerre, tu es un <b>hoplite</b> et tu combats avec ton bouclier.</li>
</ol>
<p>Tu participes directement aux décisions, contrairement à aujourd'hui, où nous élisons des représentants : la démocratie athénienne était <b>directe</b>. Mais ta femme, tes esclaves et ton voisin métèque ne peuvent pas voter.</p>`
    },
    {
      type: "example",
      title: "Exemple concret : les noms des régimes politiques",
      html: `<p>Les mots politiques que nous utilisons aujourd'hui sont grecs :</p>
<ul>
<li><b>monarchie</b> : gouvernement d'un seul (<i>mónos</i> + <i>archía</i>) ;</li>
<li><b>aristocratie</b> : gouvernement des meilleurs (<i>áristoi</i>) ;</li>
<li><b>oligarchie</b> : gouvernement de quelques-uns (<i>olígoi</i>) ;</li>
<li><b>démocratie</b> : pouvoir du peuple (<i>dêmos</i> + <i>krátos</i>) ;</li>
<li><b>tyrannie</b> : pouvoir de celui qui a pris le commandement par la force.</li>
</ul>
<p>Essaie de classer ainsi l'État dans lequel tu vis : qui décide ? Combien de citoyens peuvent voter ? Comment les dirigeants sont-ils choisis ? Les questions que se posaient les Grecs servent encore aujourd'hui.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Les 300 des Thermopyles",
      html: `<p>En <b>480 av. J.-C.</b>, le roi spartiate <b>Léonidas</b> résista pendant trois jours au défilé des Thermopyles avec 300 Spartiates et quelques milliers d'autres Grecs face à l'immense armée perse. En réalité, les alliés grecs étaient environ 7 000 ; les 300 Spartiates formaient le noyau du groupe. Quand il fut contourné, Léonidas renvoya la plupart des alliés et resta combattre avec ses hommes jusqu'à la mort. Nous verrons dans la prochaine leçon le contexte de ces guerres.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Voter avec un tesson",
      html: `<p>Le mot « ostracisme » vient de <i>óstrakon</i>, le tesson de céramique sur lequel les citoyens écrivaient le nom de celui qu'ils voulaient exiler. Les archéologues en ont retrouvé plus de dix mille sur l'agora d'Athènes. Certains, portant le nom de <b>Thémistocle</b>, avaient été préparés à l'avance par des adversaires politiques, tous écrits de la même main : la preuve que, déjà à l'époque, on faisait de la propagande électorale ! Après ses dix ans d'exil, l'ostracisé pouvait revenir et retrouver tous ses droits.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre Sparte et Athènes",
      intro: "Deux cités, deux choix opposés. Voici quelques comparaisons pour les retenir.",
      tabs: [
        {
          label: "🏫 Deux écoles face à face",
          html: `<p>Imagine deux écoles aux règles opposées.</p>
<ul>
<li><b>École Sparte</b> : discipline de fer, uniforme, horaires militaires, quelques enseignants décident de tout, tous pareils, pas d'art. Efficace en cas d'urgence, peu douée pour le changement.</li>
<li><b>École Athènes</b> : assemblée de classe qui discute et vote, toutes les matières, sport, théâtre, expérimentation. Plus de désordre et de lenteur, mais de la créativité et de l'innovation.</li>
</ul>
<p>Sparte choisit la <b>sécurité et l'ordre</b>, Athènes la <b>participation et la liberté</b>. Aucune des deux n'était parfaite : toutes deux excluaient la majorité (femmes, esclaves, étrangers).</p>`
        },
        {
          label: "📊 Qui gouverne ?",
          html: `<table>
<tr><th></th><th>Sparte</th><th>Athènes</th></tr>
<tr><td>Dirigeants</td><td>2 rois + 5 éphores</td><td>9 archontes, stratèges, Boulè</td></tr>
<tr><td>Assemblée</td><td>Apella (acclamation)</td><td>Ecclésia (vote, débat)</td></tr>
<tr><td>Économie</td><td>Agricole, avec des hilotes</td><td>Commerce, artisanat, flotte</td></tr>
<tr><td>Armée</td><td>Phalange de Spartiates</td><td>Hoplites puis flotte de trières</td></tr>
<tr><td>Culture</td><td>Discipline et silence</td><td>Théâtre, philosophie, art</td></tr>
<tr><td>Exclus</td><td>Hilotes, périèques, femmes</td><td>Esclaves, métèques, femmes</td></tr>
</table>`
        },
        {
          label: "🗺️ Fais tourner le globe",
          html: `<p>Fais tourner le globe : les cités et les colonies grecques, de Marseille à la mer Noire.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 37.97, lon: 23.72, label: "Athènes", color: "#2563eb" },
              { lat: 37.08, lon: 22.43, label: "Sparte", color: "#ef4444" },
              { lat: 37.07, lon: 15.29, label: "Syracuse", color: "#f97316" },
              { lat: 40.85, lon: 14.05, label: "Cumes", color: "#f97316" },
              { lat: 40.47, lon: 17.24, label: "Tarente", color: "#f97316" },
              { lat: 43.3, lon: 5.37, label: "Marseille", color: "#f97316" },
              { lat: 41.01, lon: 28.98, label: "Byzance", color: "#f97316" }
            ],
            routes: [{ points: [0, 2, 3], color: "#f97316" }, { points: [0, 6], color: "#f97316" }]
          }
        },
        {
          label: "📅 Frise chronologique",
          html: `<p>Parcours les grandes étapes, des Mycéniens à Clisthène.</p>`,
          widget: "timeline",
          options: {
            unit: "ans",
            events: [
              { year: -2000, label: "Palais minoens", icon: "🐂" },
              { year: -1600, label: "Mycènes", icon: "🛡️" },
              { year: -1200, label: "Guerre de Troie (tradition)", icon: "🐴" },
              { year: -776, label: "Premiers jeux Olympiques", icon: "🥇" },
              { year: -733, label: "Syracuse", icon: "⚓" },
              { year: -621, label: "Dracon", icon: "📜" },
              { year: -594, label: "Solon", icon: "⚖️" },
              { year: -508, label: "Clisthène", icon: "🗳️" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de la Grèce des cités",
      nodes: [
        { id: "geo", label: "Territoire morcelé", x: 50, y: 6, color: "#16a34a", html: "Montagnes, îles, petites plaines.", why: "La géographie empêche l'unification : chaque communauté s'organise seule et apprend à se gouverner. La mer pousse au commerce et à la colonisation." },
        { id: "polis", label: "Polis", x: 20, y: 32, color: "#2563eb", html: "Cité-État avec acropole, agora et citoyens.", why: "De petites communautés où les citoyens se connaissent et participent : c'est le terrain où naît l'idée de citoyenneté." },
        { id: "colonie", label: "Colonisation", x: 82, y: 32, color: "#f97316", html: "Des colonies de la mer Noire à l'Espagne.", why: "Le manque de terres, la surpopulation et le désir de commercer poussèrent à fonder de nouvelles cités. La culture grecque se diffuse, et naît l'idée d'être des Hellènes face aux barbares." },
        { id: "sparta", label: "Sparte", x: 20, y: 62, color: "#ef4444", html: "Oligarchie militaire avec des hilotes.", why: "Devant contrôler un nombre énorme d'hilotes, Sparte choisit une discipline militaire permanente ; cela la rendit forte mais rigide et peu créative." },
        { id: "atene", label: "Athènes", x: 80, y: 62, color: "#7c3aed", html: "De l'aristocratie à la démocratie (Solon, Clisthène).", why: "Les tensions entre riches et pauvres (dettes, esclavage) rendirent les réformes nécessaires. Élargir les droits renforça la cité et donna aux citoyens une identité commune." },
        { id: "democrazia", label: "Démocratie", x: 50, y: 85, color: "#0ea5e9", html: "Pouvoir du dêmos : assemblée, tirage au sort, ostracisme.", why: "Elle est directe et réservée à une minorité (hommes adultes nés athéniens), mais c'est la première fois qu'on essaie de faire décider la communauté. Elle influencera les démocraties modernes." },
        { id: "panellenismo", label: "Identité grecque", x: 50, y: 50, color: "#eab308", html: "Langue, dieux, jeux Olympiques, oracle de Delphes.", why: "Bien que divisées, les cités partageaient une culture : c'est ce qui les unit pour résister aux Perses." }
      ],
      edges: [
        ["geo", "polis", "donne naissance à la"],
        ["geo", "colonie", "pousse à la"],
        ["polis", "sparta", "modèle"],
        ["polis", "atene", "modèle"],
        ["atene", "democrazia", "développe la"],
        ["colonie", "panellenismo", "renforce l'"],
        ["panellenismo", "democrazia", "partage des valeurs avec la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : Sparte et Athènes",
      questions: [
        { type: "mc", q: "Comment s'appelaient les serfs de Sparte ?", options: ["Les hilotes", "Les métèques", "Les éphores"], answer: 0, explain: "Les hilotes travaillaient la terre pour les Spartiates." },
        { type: "mc", q: "Selon la tradition, qui a donné ses lois à Sparte ?", options: ["Lycurgue", "Solon", "Clisthène"], answer: 0, explain: "Le légendaire Lycurgue." },
        { type: "tf", q: "Solon a interdit l'esclavage pour dettes.", answer: true, explain: "Il annula les dettes et libéra ceux qui avaient été réduits en esclavage." },
        { type: "mc", q: "Qu'était l'ostracisme ?", options: ["Un exil de 10 ans voté sur un tesson", "Une peine de mort", "Un type d'impôt"], answer: 0, explain: "On écrivait sur un tesson le nom de celui qu'on voulait exiler." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Minoens (Crète, linéaire A) et Mycéniens (Mycènes, linéaire B, effondrement vers 1200-1100 av. J.-C.).</li>
<li><b>Polis</b> : cité-État avec acropole, agora, citoyens hommes adultes ; jamais unifiées.</li>
<li><b>Colonisation</b> (VIIIe-VIe s. av. J.-C.) : Grande-Grèce, Syracuse (733), Marseille ; causes : manque de terres et commerce.</li>
<li><b>Sparte</b> : oligarchie militaire, deux rois, éphores, hilotes, agogè. <b>Athènes</b> : de l'aristocratie à la démocratie avec Dracon, Solon, Pisistrate, Clisthène (508 av. J.-C.).</li>
<li>Jeux Olympiques depuis 776 av. J.-C. ; oracle de Delphes ; langue et dieux communs.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Polis", d: "Cité-État grecque, communauté autonome de citoyens." },
    { t: "Acropole", d: "Partie haute et fortifiée de la polis, avec les temples." },
    { t: "Agora", d: "Place centrale de la polis, lieu du marché et de l'assemblée." },
    { t: "Grande-Grèce", d: "Les colonies grecques de l'Italie du Sud." },
    { t: "Hilote", d: "Serf appartenant à l'État spartiate." },
    { t: "Éphore", d: "Magistrat spartiate qui contrôlait les rois." },
    { t: "Agogè", d: "Éducation militaire des jeunes Spartiates." },
    { t: "Ecclésia", d: "Assemblée des citoyens athéniens." },
    { t: "Ostracisme", d: "Exil de dix ans voté par l'assemblée." },
    { t: "Métèque", d: "Étranger résidant à Athènes, sans droits politiques." },
    { t: "Tyran", d: "Celui qui prend le pouvoir par la force, en dehors des règles." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Pourquoi la Grèce ne s'est-elle pas unifiée en un seul État ?", options: ["À cause de son territoire morcelé entre montagnes et îles", "Parce qu'elle manquait d'eau", "Parce qu'elle n'avait pas de dieux"], answer: 0, explain: "Le territoire favorisa des communautés autonomes." },
      { type: "mc", q: "Qui a déchiffré le linéaire B ?", options: ["Michael Ventris", "Howard Carter", "Champollion"], answer: 0, explain: "En 1952 ; il découvrit que c'était du grec ancien." },
      { type: "tf", q: "Une colonie grecque était soumise à sa métropole comme une province.", answer: false, explain: "C'était une polis indépendante, liée à sa métropole par des liens religieux et affectifs." },
      { type: "text", q: "Comment s'appelle la partie haute et fortifiée d'une polis, avec les temples ?", answer: ["acropole", "l'acropole", "acropolis"], explain: "L'acropole." },
      { type: "mc", q: "Quelle cité grecque a fondé Syracuse (733 av. J.-C.) ?", options: ["Corinthe", "Sparte", "Athènes"], answer: 0, explain: "Des colons de Corinthe." },
      { type: "mc", q: "Quelle réforme de Clisthène a posé les bases de la démocratie ?", options: ["Dix tribus mixtes et la Boulè des 500", "L'abolition de l'esclavage", "La tyrannie populaire"], answer: 0, explain: "Elle dépassa les divisions entre familles nobles." },
      { type: "order", q: "Range dans l'ordre chronologique.", items: ["Premiers jeux Olympiques", "Dracon", "Solon", "Pisistrate tyran", "Clisthène"], explain: "776, 621, 594, 561, 508 av. J.-C." },
      { type: "mc", q: "Qui étaient les éphores à Sparte ?", options: ["Cinq magistrats élus qui surveillaient les rois", "Des prêtres de l'oracle", "Des guerriers d'élite"], answer: 0, explain: "Ils contrôlaient les rois et dirigeaient la politique." },
      { type: "num", q: "En quelle année av. J.-C. eurent lieu, selon la tradition, les premiers jeux Olympiques ?", answer: 776, tol: 0, explain: "776 av. J.-C." },
      { type: "tf", q: "À Athènes, les femmes et les esclaves participaient à l'assemblée.", answer: false, explain: "Seuls les citoyens hommes adultes votaient." },
      { type: "mc", q: "Pourquoi Sparte avait-elle une organisation aussi militarisée ?", options: ["Pour contrôler un grand nombre d'hilotes", "Pour conquérir l'Asie", "Pour se défendre contre les Romains"], answer: 0, explain: "Peu de Spartiates devaient dominer beaucoup d'hilotes." }
    ]
  }
});
