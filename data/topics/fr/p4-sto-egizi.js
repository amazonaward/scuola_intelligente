TOPIC('fr', {
  id: "p4-sto-egizi",
  title: "Les Égyptiens",
  intro: "Il y a plus de 5000 ans, le long du fleuve <b>Nil</b>, est née l'une des civilisations les plus célèbres de l'histoire : celle des <b>anciens Égyptiens</b>, avec leurs pharaons, leurs pyramides, leurs momies et leurs hiéroglyphes.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Le Nil, un don précieux",
      html: `<p>L'Égypte se trouve au nord-est de l'Afrique et c'est presque entièrement un <b>désert</b>. Mais elle est traversée par le <b>Nil</b>, l'un des plus longs fleuves du monde (environ 6650 km).</p>
<p>Chaque année, en été, le Nil <b>débordait</b> (c'était la crue). Quand l'eau se retirait, il restait sur les champs le <b>limon</b>, une boue noire très fertile. Les Égyptiens y cultivaient le <b>blé, l'orge, le lin et le papyrus</b>.</p>
<p>C'est pour cela que l'historien grec Hérodote a écrit que l'Égypte était <b>« un don du Nil »</b>.</p>
<p>Les Égyptiens ont appris à construire des <b>canaux</b> et des <b>digues</b> et ils ont inventé le <b>chadouf</b>, une sorte de balançoire avec un seau pour puiser l'eau du fleuve.</p>`
    },
    {
      type: "svg",
      title: "La vallée du Nil",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fcd34d"/>
<rect width="600" height="40" fill="#60a5fa"/>
<text x="300" y="28" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">Mer Méditerranée</text>
<path d="M300 320 C290 260 320 220 300 170 C285 130 310 100 300 70 L250 40 L350 40 L300 70" fill="#22c55e"/>
<path d="M300 320 C290 260 320 220 300 170 C285 130 310 100 300 70" stroke="#2563eb" stroke-width="10" fill="none"/>
<path d="M300 70 L262 42 M300 70 L338 42" stroke="#2563eb" stroke-width="6"/>
<path d="M300 320 C270 260 340 220 280 170 C260 130 330 100 300 70" stroke="#16a34a" stroke-width="40" stroke-opacity="0.35" fill="none"/>
<polygon points="200,150 225,110 250,150" fill="#d97706" stroke="#92400e" stroke-width="2"/>
<polygon points="170,160 190,128 210,160" fill="#d97706" stroke="#92400e" stroke-width="2"/>
<text x="210" y="178" font-size="16" fill="#78350f" text-anchor="middle">Pyramides de Gizeh</text>
<text x="300" y="62" font-size="15" fill="#14532d" text-anchor="middle">Delta</text>
<text x="380" y="240" font-size="20" fill="#1e3a8a" font-weight="bold">Nil</text>
<text x="490" y="170" font-size="22" fill="#92400e" text-anchor="middle">Désert</text>
<text x="100" y="270" font-size="22" fill="#92400e" text-anchor="middle">Désert</text>
<text x="420" y="300" font-size="16" fill="#14532d">bande verte = terre fertile</text>
</svg>`,
      caption: "Les Égyptiens vivaient le long de l'étroite bande verte autour du Nil ; tout autour, il y avait le désert."
    },
    {
      type: "text",
      title: "Le pharaon et la société",
      html: `<p>Vers <b>3100 av. J.-C.</b>, le roi Narmer (appelé aussi Ménès) a réuni la Haute et la Basse-Égypte en un seul royaume. Le roi s'appelait <b>pharaon</b>.</p>
<p>Le pharaon était considéré comme un <b>dieu sur terre</b> : il commandait l'armée, faisait les lois et possédait toutes les terres. La société était comme une <b>pyramide</b> :</p>
<ul>
<li>au sommet, le <b>pharaon</b> ;</li>
<li>puis les <b>prêtres</b>, les <b>nobles</b> et les <b>fonctionnaires</b> ;</li>
<li>les <b>scribes</b>, qui savaient lire et écrire et tenaient les comptes ;</li>
<li>les <b>soldats</b>, les <b>artisans</b> et les <b>marchands</b> ;</li>
<li>à la base, les <b>paysans</b>, les plus nombreux, et les <b>esclaves</b>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "La pyramide sociale",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<polygon points="300,20 345,80 255,80" fill="#facc15" stroke="#78350f" stroke-width="2"/>
<polygon points="255,80 345,80 390,140 210,140" fill="#fb923c" stroke="#78350f" stroke-width="2"/>
<polygon points="210,140 390,140 435,200 165,200" fill="#f87171" stroke="#78350f" stroke-width="2"/>
<polygon points="165,200 435,200 480,270 120,270" fill="#a3e635" stroke="#78350f" stroke-width="2"/>
<text x="300" y="70" font-size="15" text-anchor="middle" font-weight="bold">Pharaon</text>
<text x="300" y="117" font-size="15" text-anchor="middle" font-weight="bold">Prêtres, nobles, scribes</text>
<text x="300" y="177" font-size="15" text-anchor="middle" font-weight="bold">Soldats, artisans, marchands</text>
<text x="300" y="242" font-size="15" text-anchor="middle" font-weight="bold">Paysans et esclaves</text>
<text x="520" y="60" font-size="14" fill="#78350f">peu nombreux</text>
<text x="520" y="80" font-size="14" fill="#78350f">et puissants</text>
<text x="500" y="250" font-size="14" fill="#78350f">très nombreux</text>
</svg>`,
      caption: "Plus on descend, plus les personnes sont nombreuses mais moins elles sont puissantes."
    },
    {
      type: "quiz",
      title: "Mini-quiz : le Nil et le pharaon",
      questions: [
        { type: "mc", q: "Pourquoi le Nil était-il si important ?", options: ["Parce qu'il était salé", "Parce que ses crues laissaient un limon fertile", "Parce qu'il apportait de l'or"], answer: 1, explain: "Le limon rendait les champs fertiles au milieu du désert." },
        { type: "text", q: "Comment s'appelait le roi des Égyptiens ?", answer: ["pharaon", "le pharaon"], explain: "Le roi était le pharaon." },
        { type: "tf", q: "Les paysans étaient le groupe le plus nombreux.", answer: true, explain: "La plupart des Égyptiens travaillaient dans les champs." }
      ]
    },
    {
      type: "text",
      title: "Les pyramides",
      html: `<p>Les <b>pyramides</b> étaient les <b>tombeaux</b> des pharaons. La plus grande est la <b>pyramide de Khéops</b> à Gizeh, construite vers <b>2560 av. J.-C.</b> : elle mesurait environ <b>146 mètres</b> de haut (comme un immeuble de 45 étages !) et elle est faite de plus de <b>2 millions de blocs</b> de pierre.</p>
<p>Les ouvriers étaient des travailleurs payés et organisés en équipes, et non des esclaves comme on le croyait autrefois. Ils déplaçaient les blocs avec des traîneaux en bois, des rampes et des cordes, en mouillant le sable pour qu'ils glissent mieux.</p>
<p>Près des pyramides de Gizeh se trouve le <b>Sphinx</b> : un énorme lion à tête humaine.</p>`
    },
    {
      type: "3d",
      title: "Une pyramide en 3D",
      scene: "solid",
      options: { shape: "pyramid", n: 4, r: 1.2, h: 1.1, color: "#e0b25a", labels: true },
      caption: "Les pyramides égyptiennes ont une base carrée et 4 faces triangulaires. Fais-la tourner pour la voir de tous les côtés."
    },
    {
      type: "text",
      title: "La vie après la mort et les momies",
      html: `<p>Les Égyptiens croyaient qu'après la mort, il y avait une autre vie. Pour la vivre, il fallait <b>conserver le corps</b> : c'est pour cela qu'on le <b>momifiait</b>.</p>
<ol>
<li>On retirait les organes internes, qui étaient placés dans des <b>vases canopes</b>.</li>
<li>Le corps était recouvert de <b>natron</b>, un sel qui le séchait, pendant environ 40 jours.</li>
<li>Puis il était enduit d'huiles parfumées et enveloppé dans de longues bandelettes de lin.</li>
<li>Tout le travail durait environ <b>70 jours</b>. La momie était placée dans le <b>sarcophage</b>.</li>
</ol>
<p>Dans le tombeau, on mettait de la nourriture, des bijoux, des meubles et des statuettes de serviteurs (les <b>oushebtis</b>) pour la vie dans l'au-delà.</p>`
    },
    {
      type: "text",
      title: "L'écriture : les hiéroglyphes",
      html: `<p>Les Égyptiens ont inventé une écriture faite de dessins : les <b>hiéroglyphes</b> (cela signifie « signes sacrés »). Certains signes représentaient des objets, d'autres des sons.</p>
<p>Ils écrivaient sur du <b>papyrus</b>, une sorte de papier fabriqué avec une plante qui poussait sur les rives du Nil, avec des pinceaux de jonc et de l'encre.</p>
<p>Pendant des siècles, plus personne ne savait lire les hiéroglyphes. En <b>1799</b>, on a trouvé la <b>pierre de Rosette</b>, avec le même texte écrit en hiéroglyphes, en démotique et en grec. Grâce à elle, en <b>1822</b>, le Français <b>Jean-François Champollion</b> a réussi à les déchiffrer.</p>`
    },
    {
      type: "widget",
      title: "Associe le signe à sa signification",
      widget: "match",
      options: {
        pairs: [
          ["👁️ œil", "Œil d'Horus : protection"],
          ["☥ ânkh", "Symbole de la vie"],
          ["🪲 scarabée", "Renaissance du Soleil"],
          ["🦅 faucon", "Le dieu Horus"],
          ["☀️ disque solaire", "Le dieu Rê"]
        ]
      },
      caption: "Beaucoup de symboles égyptiens avaient une signification religieuse."
    },
    {
      type: "widget",
      title: "Les parties de la pyramide",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fde68a"/>
<polygon points="300,30 540,270 60,270" fill="#e0b25a" stroke="#78350f" stroke-width="3"/>
<path d="M300 270 L300 200 L250 160 L250 120 L330 120" stroke="#78350f" stroke-width="5" fill="none"/>
<rect x="320" y="105" width="50" height="30" fill="#78350f"/>
<rect x="280" y="190" width="40" height="25" fill="#a16207"/>
<rect x="0" y="270" width="600" height="30" fill="#d97706"/>
</svg>`,
        spots: [
          { x: 300, y: 40, label: "Sommet" },
          { x: 345, y: 120, label: "Chambre du roi" },
          { x: 300, y: 202, label: "Chambre de la reine" },
          { x: 250, y: 140, label: "Grande galerie" },
          { x: 120, y: 260, label: "Base carrée" }
        ]
      },
      caption: "Clique sur chaque point et choisis le bon nom (schéma simplifié de la pyramide de Khéops)."
    },
    {
      type: "example",
      title: "Exemple pratique : le calendrier égyptien",
      html: `<p>Les Égyptiens observaient le ciel et le fleuve pour savoir quand semer. Leur année comptait <b>365 jours</b> : 12 mois de 30 jours plus 5 jours de fête.</p>
<p>Elle était divisée en <b>3 saisons</b> liées au Nil : l'<b>Inondation</b> (Akhet), les <b>Semailles</b> (Peret) et la <b>Récolte</b> (Shemou). Nous aussi, aujourd'hui, nous utilisons une année de 365 jours !</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : écris ton prénom en hiéroglyphes",
      html: `<p>À certains hiéroglyphes correspond un son, comme une lettre. Voici quelques exemples (simplifiés) :</p>
<table>
<tr><td><b>A</b> 🦅 vautour</td><td><b>B</b> 🦶 pied</td><td><b>M</b> 🦉 hibou</td></tr>
<tr><td><b>N</b> 🌊 eau</td><td><b>R</b> 👄 bouche</td><td><b>S</b> 🧵 tissu plié</td></tr>
</table>
<p>Essaie d'écrire « MARA » : 🦉🦅👄🦅. Les Égyptiens entouraient ensuite les noms des pharaons d'un ovale appelé <b>cartouche</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>En <b>1922</b>, l'archéologue Howard Carter a découvert le tombeau du jeune pharaon <b>Toutânkhamon</b>, presque intact, avec plus de 5000 objets précieux, dont le célèbre masque en or. Toutânkhamon était devenu pharaon vers 9 ans !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Les Égyptiens momifiaient aussi les animaux : des chats, des crocodiles, des oiseaux. Le <b>chat</b> était sacré pour la déesse Bastet, et celui qui faisait du mal à un chat était sévèrement puni !</p>`
    },
    {
      type: "widget",
      title: "La frise chronologique des Égyptiens",
      widget: "timeline",
      options: {
        unit: "ans",
        events: [
          { year: -3100, label: "Narmer unifie l'Égypte", icon: "👑" },
          { year: -2560, label: "Pyramide de Khéops", icon: "🔺" },
          { year: -1332, label: "Toutânkhamon pharaon", icon: "🎭" },
          { year: -1279, label: "Règne de Ramsès II", icon: "🏛️" },
          { year: -30, label: "Mort de Cléopâtre : l'Égypte devient romaine", icon: "🐍" },
          { year: 1822, label: "Champollion déchiffre les hiéroglyphes", icon: "📜" }
        ]
      },
      caption: "Les années avant la naissance du Christ s'indiquent avec av. J.-C."
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>La civilisation égyptienne est née le long du <b>Nil</b>, qui rendait la terre fertile grâce à ses crues.</li>
<li>Le roi était le <b>pharaon</b>, considéré comme un dieu.</li>
<li>Les <b>pyramides</b> étaient des tombeaux ; les corps étaient <b>momifiés</b>.</li>
<li>Ils écrivaient en <b>hiéroglyphes</b> sur du <b>papyrus</b>.</li>
</ul>`
    },
    {
      type: "3d",
      title: "La carte 3D espace-temps de l'Égypte ancienne",
      scene: "spacetime",
      caption: "Le Nil coule du sud (Assouan) vers le nord (la Méditerranée). Plus un événement est haut, plus il est récent. Touche les événements : les flèches relient les causes aux effets.",
      options: {
        lat: [21.5, 32],
        lon: [28, 35],
        years: [-3200, 0],
        places: [
          { lat: 31.2, lon: 29.92, label: "Alexandrie" },
          { lat: 29.85, lon: 31.25, label: "Memphis" },
          { lat: 25.7, lon: 32.64, label: "Thèbes (Louxor)" },
          { lat: 24.09, lon: 32.9, label: "Assouan" },
          { lat: 31.9, lon: 32.0, label: "Mer Méditerranée" },
          { lat: 26.5, lon: 34.3, label: "Mer Rouge" }
        ],
        events: [
          { id: "narmer", lat: 26.18, lon: 31.92, year: -3100, label: "Narmer unit l'Égypte", html: "Le roi <b>Narmer</b> (peut-être le même que celui qu'on appelle Ménès) unit la Haute-Égypte (le sud) et la Basse-Égypte (le nord, le delta). Naît le premier grand État de l'histoire, dirigé par le <b>pharaon</b>. À Abydos se trouvent les tombeaux des premiers rois." },
          { id: "djoser", lat: 29.87, lon: 31.22, year: -2650, label: "La pyramide à degrés", html: "À Saqqarah, l'architecte <b>Imhotep</b> construit pour le pharaon Djéser la première grande construction tout en pierre : une pyramide faite de 6 « marches », les unes sur les autres.", causes: ["narmer"] },
          { id: "cheope", lat: 29.98, lon: 31.13, year: -2560, label: "Grande pyramide de Khéops", html: "À Gizeh, on achève la pyramide de <b>Khéops</b> : haute à l'origine d'environ 146 mètres, avec plus de 2 millions de blocs de pierre. Pendant presque 4000 ans, ce sera la construction la plus haute du monde.", causes: ["djoser"] },
          { id: "sfinge", lat: 29.975, lon: 31.138, year: -2500, label: "Le Sphinx", html: "À côté des pyramides, on sculpte le <b>Grand Sphinx</b> : un corps de lion et une tête de pharaon (probablement Khéphren), long d'environ 73 mètres.", causes: ["cheope"] },
          { id: "tebe", lat: 25.7, lon: 32.64, year: -2040, label: "Moyen Empire : Thèbes capitale", html: "Après une période de désordres, le pharaon <b>Montouhotep II</b> réunifie le pays. <b>Thèbes</b> devient une ville très importante, avec le grand temple de Karnak dédié au dieu Amon.", causes: ["narmer"] },
          { id: "valle", lat: 25.74, lon: 32.6, year: -1500, label: "La Vallée des Rois", html: "Au Nouvel Empire, les pharaons arrêtent de construire des pyramides et se font enterrer dans des tombeaux cachés creusés dans la roche, dans la <b>Vallée des Rois</b>, pour les protéger des voleurs.", causes: ["tebe", "cheope"] },
          { id: "tutankhamon", lat: 25.74, lon: 32.61, year: -1323, label: "Toutânkhamon", html: "Le pharaon <b>Toutânkhamon</b> meurt très jeune. Son tombeau restera presque intact jusqu'en 1922, quand l'archéologue Howard Carter le découvrira plein de trésors, dont le célèbre masque en or.", causes: ["valle"] },
          { id: "abusimbel", lat: 22.34, lon: 31.63, year: -1264, label: "Abou Simbel", html: "Le pharaon <b>Ramsès II</b> fait sculpter dans la montagne les temples d'Abou Simbel, avec quatre statues géantes de lui-même hautes d'environ 20 mètres, pour montrer sa puissance aux frontières du royaume.", causes: ["valle"] },
          { id: "alessandria", lat: 31.2, lon: 29.92, year: -331, label: "Alexandre fonde Alexandrie", html: "<b>Alexandre le Grand</b> conquiert l'Égypte et fonde Alexandrie. Après lui règnent les Ptolémées, des rois d'origine grecque : la ville devient célèbre pour sa Bibliothèque et son Phare.", causes: ["narmer"] },
          { id: "rosetta", lat: 31.4, lon: 30.42, year: -196, label: "La pierre de Rosette", html: "On grave un décret en trois écritures : <b>hiéroglyphique</b>, <b>démotique</b> et <b>grecque</b>. Retrouvée en 1799 près de la ville de Rachid (Rosette), elle permettra à Jean-François <b>Champollion</b> de déchiffrer les hiéroglyphes en 1822.", causes: ["alessandria"] },
          { id: "cleopatra", lat: 31.21, lon: 29.9, year: -30, label: "Cléopâtre et Rome", html: "<b>Cléopâtre</b>, la dernière reine d'Égypte, meurt. Octave (le futur empereur Auguste) conquiert le pays : l'Égypte devient une province romaine et son blé nourrit Rome.", causes: ["alessandria"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Tu es le chef d'un village, il y a 5000 ans : où vous installez-vous ?",
      html: `<p>Ton peuple vit de la chasse et de quelques récoltes, mais le climat devient plus sec et le désert avance. Tu dois choisir où vous arrêter pour toujours.</p>
<p>Chaque année, en été, le <b>Nil</b> gonfle et inonde les terres voisines pendant quelques semaines ; quand l'eau se retire, elle laisse une boue noire.</p>`,
      question: "Où emmènes-tu ton village ?",
      options: [
        { label: "Dans le désert, loin du fleuve : là, les crues ne nous atteignent pas.", outcome: "Vous seriez à l'abri de l'eau… mais sans eau ! Dans le désert, on ne cultive presque rien et chaque seau d'eau doit être apporté de loin." },
        { label: "Sur les rives du Nil, dans la zone inondable : nous utiliserons les crues.", outcome: "Risqué ? Les crues arrivent chaque année presque à la même période, on peut donc les prévoir. La boue qu'elles laissent, le limon, est un engrais naturel : on peut faire deux récoltes et avoir de la nourriture en plus." },
        { label: "Sur la côte de la mer Rouge, pour pêcher.", outcome: "Il y a du poisson, mais l'eau de mer est salée : on ne peut ni la boire ni l'utiliser pour les champs. Et la côte de la mer Rouge est entourée de déserts et de montagnes." }
      ],
      answer: 1,
      explain: "Les anciens Égyptiens ont choisi le Nil : ils appelaient la terre noire du limon <b>Kemet</b>, « la terre noire », et le désert « la terre rouge ». Les crues régulières permettaient des récoltes abondantes ; la nourriture en surplus faisait vivre les scribes, les artisans, les prêtres et les ouvriers. Le fleuve était aussi une autoroute : on descendait vers le nord avec le courant et on remontait vers le sud à la voile, grâce au vent qui souffle du nord. Pour prévoir les crues, ils ont inventé un calendrier de 365 jours. L'historien grec Hérodote a écrit que l'Égypte est « un don du Nil »."
    },
    {
      type: "decision",
      title: "Tu es un pharaon du Nouvel Empire : construis-tu encore une pyramide ?",
      html: `<p>Les pyramides de Gizeh sont célèbres dans le monde entier. Mais elles coûtent des années de travail à des milliers de personnes et, dit-on, presque toutes ont déjà été <b>vidées par les voleurs</b> : une montagne de pierre au milieu du désert dit à tout le monde « ici, il y a un trésor ».</p>`,
      question: "Comment te fais-tu enterrer ?",
      options: [
        { label: "Avec une pyramide encore plus grande : tout le monde doit voir combien je suis puissant !", outcome: "Une grande gloire… mais les voleurs sauront tout de suite où chercher. Et il faudrait d'énormes quantités de pierres, de nourriture et de travailleurs." },
        { label: "Dans un tombeau caché, creusé dans la roche d'une vallée surveillée.", outcome: "Moins spectaculaire, mais bien plus difficile à trouver et plus facile à protéger avec des gardes. Pour montrer ta grandeur, tu peux construire des temples énormes, séparés du tombeau." },
        { label: "Enterré au milieu de la ville, dans le palais.", outcome: "Pour les Égyptiens, les morts devaient être enterrés à l'ouest du Nil, là où le Soleil se couche : la ville des vivants était à l'est, celle des morts à l'ouest." }
      ],
      answer: 1,
      explain: "Les pharaons du Nouvel Empire (à partir de 1550 av. J.-C. environ) ont choisi la <b>Vallée des Rois</b>, près de Thèbes, sur la rive ouest du Nil : des tombeaux creusés dans la roche, aux entrées cachées, surveillés par des gardes et construits par un village d'ouvriers spécialisés (Deir el-Médineh). Ils montraient leur grandeur avec des temples gigantesques comme Karnak et Abou Simbel. Même cela n'a pas complètement arrêté les voleurs : presque tous les tombeaux ont été pillés. Celui de Toutânkhamon a été sauvé parce que son entrée s'est retrouvée enterrée sous les déblais d'un tombeau creusé plus tard."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les Égyptiens",
      intro: "On peut aussi comprendre les Égyptiens en faisant, en construisant et en jouant : essaie ces autres points de vue.",
      tabs: [
        {
          label: "🏗️ Comment la construisaient-ils ?",
          html: `<p>Personne ne nous a laissé les instructions complètes, mais les archéologues ont trouvé beaucoup d'indices :</p>
<ul>
<li>les blocs étaient taillés dans les <b>carrières</b> avec des ciseaux en cuivre, des coins et des marteaux en pierre dure ;</li>
<li>les pierres les plus précieuses arrivaient en <b>bateau sur le Nil</b>, même depuis Assouan, à presque 900 km ;</li>
<li>les blocs étaient traînés sur des <b>traîneaux en bois</b> : une peinture égyptienne montre un ouvrier qui verse de l'eau sur le sable devant le traîneau, pour qu'il glisse mieux ;</li>
<li>pour monter, on utilisait des <b>rampes</b> de briques et de terre (droites, en zigzag ou en spirale : les chercheurs en discutent encore !).</li>
</ul>
<p>Ce n'étaient pas des esclaves : c'étaient surtout des <b>ouvriers payés</b> avec du pain, de la bière et des oignons, et des paysans qui travaillaient quand les champs étaient inondés.</p>`
        },
        {
          label: "🔤 Le code des hiéroglyphes",
          html: `<p>Pense aux hiéroglyphes comme à des <b>emojis</b>, mais beaucoup plus compliqués ! Un signe peut fonctionner de trois façons :</p>
<ul>
<li>comme <b>dessin</b> de l'objet (un soleil dessiné = « soleil ») ;</li>
<li>comme <b>son</b> (une bouche = le son « r »), comme nos lettres ;</li>
<li>comme <b>aide</b> pour comprendre le sens, sans se lire.</li>
</ul>
<p>Les noms des pharaons étaient entourés d'un ovale, le <b>cartouche</b>. Champollion est parti justement de là : il a comparé les noms grecs de Ptolémée et de Cléopâtre sur la pierre de Rosette avec les signes à l'intérieur des cartouches et il a découvert les sons des lettres.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="220" fill="#fef3c7"/>
<rect x="60" y="40" width="480" height="110" rx="55" fill="none" stroke="#92400e" stroke-width="6"/>
<line x1="545" y1="60" x2="545" y2="130" stroke="#92400e" stroke-width="6"/>
<rect x="110" y="70" width="40" height="40" fill="#1d4ed8"/>
<path d="M200,110 L230,65 L260,110 Z" fill="#b45309"/>
<ellipse cx="320" cy="90" rx="30" ry="18" fill="#dc2626"/>
<path d="M380,110 Q400,60 420,110" fill="none" stroke="#065f46" stroke-width="8"/>
<circle cx="480" cy="90" r="20" fill="#f59e0b"/>
<text x="300" y="190" font-size="20" text-anchor="middle" fill="#78350f">Un cartouche (inventé) : les signes dans l'ovale forment le nom du pharaon</text>
</svg>`
        },
        {
          label: "🌍 Le Nil sur le globe",
          html: `<p>Le Nil est l'un des plus longs fleuves du monde (environ 6 650 km). Il naît au cœur de l'Afrique et coule vers le <b>nord</b> jusqu'à la Méditerranée, en traversant le désert : sans lui, l'Égypte serait presque entièrement du sable. Fais tourner le globe et suis son parcours.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -1.0, lon: 33.0, label: "Lac Victoria", color: "#0ea5e9" },
              { lat: 15.6, lon: 32.5, label: "Khartoum", color: "#f97316" },
              { lat: 24.09, lon: 32.9, label: "Assouan", color: "#f97316" },
              { lat: 25.7, lon: 32.64, label: "Thèbes", color: "#ef4444" },
              { lat: 29.98, lon: 31.13, label: "Gizeh", color: "#ef4444" },
              { lat: 31.2, lon: 29.92, label: "Alexandrie", color: "#a855f7" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5], color: "#2563eb" }]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de la civilisation égyptienne : touche les nœuds et découvre le pourquoi",
      nodes: [
        { id: "nilo", label: "Le Nil", x: 50, y: 6, color: "#2563eb", html: "Le grand fleuve qui traverse l'Égypte du sud au nord.", why: "Dans un pays presque entièrement désertique, le Nil était la seule source d'eau sûre : toute la civilisation égyptienne est née le long d'une bande verte de quelques kilomètres de large de chaque côté." },
        { id: "piene", label: "Crues et limon", x: 20, y: 26, color: "#0ea5e9", html: "Chaque été, le fleuve gonflait et inondait les champs, en laissant une boue fertile.", why: "Les pluies d'été sur les hauts plateaux d'Éthiopie gonflaient le Nil Bleu. Aujourd'hui, il n'y a plus de crues : depuis 1970, le grand barrage d'Assouan retient l'eau dans le lac Nasser." },
        { id: "agricoltura", label: "Agriculture", x: 20, y: 50, color: "#16a34a", html: "Blé, orge, lin, légumes : les champs le long du fleuve donnaient des récoltes abondantes.", why: "Le limon est un engrais naturel. Avec les canaux et le <b>chadouf</b> (une sorte de balançoire avec un seau), les Égyptiens apportaient l'eau même aux champs les plus éloignés." },
        { id: "faraone", label: "Le pharaon", x: 50, y: 40, color: "#f59e0b", html: "Le roi d'Égypte, considéré comme le fils des dieux.", why: "Pour construire des canaux, conserver le blé dans des greniers et le distribuer les années de disette, il fallait quelqu'un qui organise tout. Le pharaon, aidé par des fonctionnaires et des prêtres, avait ce pouvoir ; et pour paraître indiscutable, il se présentait comme un dieu sur terre." },
        { id: "scribi", label: "Scribes et écriture", x: 80, y: 26, color: "#a855f7", html: "Les scribes savaient écrire les hiéroglyphes et faire les comptes.", why: "Pour compter le blé, mesurer les champs après les crues et collecter les impôts, il fallait des registres précis. L'écriture est née aussi pour cela, vers 3200 av. J.-C., et on écrivait sur des feuilles de <b>papyrus</b>, une plante qui pousse le long du Nil." },
        { id: "calendario", label: "Calendrier et géométrie", x: 80, y: 50, color: "#14b8a6", html: "Une année de 365 jours divisée en 3 saisons ; des mesures précises des champs.", why: "Les Égyptiens remarquèrent que la crue arrivait quand l'étoile Sirius redevenait visible à l'aube : ils créèrent ainsi un calendrier pour la prévoir. Et comme les crues effaçaient les limites des champs, ils apprirent à les remesurer : le mot « géométrie » veut justement dire « mesure de la terre »." },
        { id: "religione", label: "Religion et au-delà", x: 35, y: 72, color: "#ef4444", html: "De nombreux dieux (Rê, Osiris, Isis, Anubis…) et la foi en une vie après la mort.", why: "Le Soleil qui « renaît » chaque matin et les champs qui renaissent après chaque crue faisaient penser que la vie aussi pouvait recommencer après la mort." },
        { id: "mummie", label: "Momification", x: 15, y: 92, color: "#92400e", html: "Le corps était conservé avec le sel de natron et des bandelettes de lin.", why: "Selon les Égyptiens, l'esprit avait besoin du corps pour vivre dans l'au-delà ; il fallait donc conserver le corps pour toujours. Le climat sec du désert aidait." },
        { id: "piramidi", label: "Pyramides et temples", x: 60, y: 92, color: "#d97706", html: "Des tombeaux et des temples gigantesques en pierre.", why: "Ils servaient à protéger le corps et les trésors du pharaon pour l'éternité et à montrer sa puissance. On ne pouvait les construire que grâce à la nourriture en surplus de l'agriculture, qui faisait vivre des milliers d'ouvriers." }
      ],
      edges: [
        ["nilo", "piene", "provoque les"],
        ["piene", "agricoltura", "rendent fertile"],
        ["piene", "calendario", "à prévoir →"],
        ["agricoltura", "faraone", "nourriture à organiser"],
        ["faraone", "scribi", "commande les"],
        ["scribi", "calendario", "enregistrent"],
        ["faraone", "religione", "fils des dieux"],
        ["religione", "mummie", "mène à la"],
        ["religione", "piramidi", "mène aux"],
        ["agricoltura", "piramidi", "nourrit les ouvriers des"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : pyramides, momies et écriture",
      questions: [
        { type: "mc", q: "À quoi servaient les pyramides ?", options: ["C'étaient les maisons des paysans", "C'étaient les tombeaux des pharaons", "C'étaient des greniers à blé"], answer: 1, explain: "Les pyramides étaient les tombeaux des pharaons." },
        { type: "mc", q: "Sur quoi écrivaient les Égyptiens ?", options: ["Sur du papyrus", "Sur du papier de riz", "Sur un ordinateur"], answer: 0, explain: "Le papyrus était fabriqué avec une plante du Nil." },
        { type: "tf", q: "La pierre de Rosette a aidé à lire les hiéroglyphes.", answer: true, explain: "Elle contenait le même texte aussi en grec." }
      ]
    }
  ],
  glossary: [
    { t: "Pharaon", d: "Le roi de l'Égypte ancienne, considéré comme un dieu." },
    { t: "Limon", d: "Boue fertile laissée par le Nil après les crues." },
    { t: "Pyramide", d: "Grand tombeau en pierre à base carrée des pharaons." },
    { t: "Momie", d: "Corps conservé avec des sels, des huiles et des bandelettes." },
    { t: "Sarcophage", d: "Cercueil dans lequel on plaçait la momie." },
    { t: "Hiéroglyphes", d: "L'écriture en images des Égyptiens." },
    { t: "Papyrus", d: "Plante du Nil et feuille pour écrire fabriquée avec elle." },
    { t: "Scribe", d: "Fonctionnaire qui savait lire, écrire et compter." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Sur quel continent se trouve l'Égypte ?", options: ["Asie", "Afrique", "Europe"], answer: 1, explain: "L'Égypte est au nord-est de l'Afrique." },
      { type: "mc", q: "Que laissait le Nil sur les champs après les crues ?", options: ["Du sable", "Du sel", "Du limon fertile"], answer: 2, explain: "Le limon rendait la terre fertile." },
      { type: "text", q: "Comment s'appelle l'écriture des Égyptiens ?", answer: ["hiéroglyphes", "les hiéroglyphes", "hiéroglyphe", "hieroglyphes"], explain: "Les hiéroglyphes." },
      { type: "tf", q: "Le pharaon était considéré comme un dieu sur terre.", answer: true, explain: "Oui, le pharaon avait un pouvoir religieux et politique." },
      { type: "mc", q: "Qui savait lire, écrire et tenir les comptes ?", options: ["Les paysans", "Les scribes", "Les soldats"], answer: 1, explain: "Les scribes." },
      { type: "order", q: "Range dans l'ordre les étapes de la momification.", items: ["On retire les organes internes", "On sèche le corps avec le natron", "On enveloppe le corps dans les bandelettes", "On place la momie dans le sarcophage"], explain: "D'abord on retire les organes, puis on sèche le corps, on le bande et on le place dans le sarcophage." },
      { type: "mc", q: "Quelle est la plus grande pyramide de Gizeh ?", options: ["Celle de Khéops", "Celle de Toutânkhamon", "Celle de Cléopâtre"], answer: 0, explain: "La pyramide de Khéops, haute à l'origine d'environ 146 m." },
      { type: "tf", q: "Le tombeau de Toutânkhamon a été découvert en 1922.", answer: true, explain: "C'est Howard Carter qui l'a découvert en 1922." },
      { type: "mc", q: "Qui a déchiffré les hiéroglyphes ?", options: ["Hérodote", "Champollion", "Ramsès II"], answer: 1, explain: "Jean-François Champollion, en 1822." },
      { type: "num", q: "Combien de jours comptait l'année égyptienne ?", answer: 365, explain: "12 mois de 30 jours + 5 jours de fête = 365." }
    ]
  }
});
