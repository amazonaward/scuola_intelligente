TOPIC('fr', {
  id: "l1-sto-ebrei-fenici",
  title: "Hébreux, Phéniciens et peuples de la Méditerranée",
  intro: "Vers <b>1200 av. J.-C.</b>, le Proche-Orient traverse une grande crise : des empires s'effondrent, des villes sont détruites, des « Peuples de la mer » migrent. Des ruines émergent des peuples plus petits, mais destinés à laisser un héritage immense. Les <b>Hébreux</b> développent l'idée d'un <b>Dieu unique</b> et un patrimoine de lois et de récits qui est à la base du judaïsme, du christianisme et de l'islam. Les <b>Phéniciens</b>, habiles navigateurs et commerçants, fondent des colonies dans toute la Méditerranée et diffusent l'<b>alphabet</b> dont dérivent ceux que nous utilisons aujourd'hui. Dans cette leçon, nous les rencontrons, avec leurs voisins.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Le Proche-Orient après 1200 av. J.-C.",
      html: `<p>Vers <b>1200 av. J.-C.</b>, de nombreuses civilisations de l'âge du bronze s'effondrèrent presque en même temps : les Hittites disparurent, les cités mycéniennes et Ougarit furent détruites, l'Égypte fut affaiblie. Les Égyptiens parlent des <b>Peuples de la mer</b>, des groupes mystérieux qui attaquaient par la mer. Les causes sont encore discutées : sécheresse, séismes, migrations, rupture du commerce du bronze, révoltes internes.</p>
<p>Dans ce vide de pouvoir naissent ou se renforcent de <b>petits royaumes</b> sur la bande de terre entre la Méditerranée et le désert syro-arabique, la région de <b>Canaan</b> (aujourd'hui le Liban, Israël, la Palestine) :</p>
<ul>
<li>les <b>Phéniciens</b> sur la côte (Liban) ;</li>
<li>les <b>Hébreux</b> (ou Israélites) dans les collines de l'intérieur ;</li>
<li>les <b>Philistins</b> sur la côte sud (d'où le nom « Palestine ») ;</li>
<li>les <b>Araméens</b> en Syrie, dont la langue deviendra la langue commune du Proche-Orient.</li>
</ul>
<p>Plus à l'ouest, vers le VIIe siècle av. J.-C., dans le royaume de <b>Lydie</b> (Anatolie), apparaît une autre invention fondamentale : la <b>monnaie</b> frappée (le roi Crésus).</p>`
    },
    {
      type: "3d",
      title: "Carte 3D : Phéniciens et Hébreux en Méditerranée",
      scene: "spacetime",
      caption: "La base est la Méditerranée, la hauteur représente le temps (1200-500 av. J.-C.). Touche les événements : les flèches relient les causes et les effets.",
      options: {
        lat: [29, 42],
        lon: [-8, 40],
        years: [-1250, -500],
        places: [
          { lat: 33.27, lon: 35.2, label: "Tyr" },
          { lat: 31.78, lon: 35.22, label: "Jérusalem" },
          { lat: 36.85, lon: 10.32, label: "Carthage" },
          { lat: 36.53, lon: -6.29, label: "Cadix" }
        ],
        events: [
          { id: "mare", lat: 33.5, lon: 36.0, year: -1200, label: "Crise et Peuples de la mer", html: "Vers 1200 av. J.-C., de nombreux royaumes de l'âge du bronze s'effondrent : la place est libre pour de nouveaux peuples et de nouvelles cités-États.", causes: [] },
          { id: "fenici", lat: 34.1, lon: 35.65, year: -1100, label: "Les cités phéniciennes", html: "Byblos, Sidon et Tyr deviennent des puissances commerciales. Elles mettent au point un <b>alphabet de 22 signes</b> (uniquement des consonnes).", causes: ["mare"] },
          { id: "davide", lat: 31.78, lon: 35.22, year: -1000, label: "David et Jérusalem", html: "Le roi David unifie les tribus d'Israël et fait de Jérusalem sa capitale (vers 1000 av. J.-C.). Son fils Salomon construit le Temple (vers 960 av. J.-C.).", causes: ["mare"] },
          { id: "cadice", lat: 36.53, lon: -6.29, year: -1000, label: "Gadir (Cadix)", html: "L'une des plus anciennes colonies phéniciennes d'Occident (selon la tradition, vers 1100 av. J.-C.) : les Phéniciens y cherchent l'argent et l'étain de l'Espagne.", causes: ["fenici"] },
          { id: "cartagine", lat: 36.85, lon: 10.32, year: -814, label: "Fondation de Carthage", html: "Selon la tradition, en 814 av. J.-C., la princesse Élissa-Didon de Tyr fonde Carthage (la « ville nouvelle ») en Afrique, qui deviendra la plus grande puissance de la Méditerranée occidentale.", causes: ["fenici"] },
          { id: "scisma", lat: 32.2, lon: 35.2, year: -930, label: "Le royaume se divise", html: "À la mort de Salomon (vers 930 av. J.-C.), le royaume se scinde : Israël au nord (capitale Samarie) et Juda au sud (Jérusalem).", causes: ["davide"] },
          { id: "assiri", lat: 32.2, lon: 35.2, year: -722, label: "Les Assyriens détruisent Israël", html: "En 722 av. J.-C., les Assyriens conquièrent Samarie et déportent une grande partie de la population : ce sont les « dix tribus perdues ».", causes: ["scisma"] },
          { id: "babilonia", lat: 31.78, lon: 35.22, year: -586, label: "Destruction du Temple", html: "En 586 av. J.-C., Nabuchodonosor II conquiert Jérusalem, détruit le Temple et déporte l'élite à Babylone : c'est l'<b>exil à Babylone</b>. Les Hébreux mettent alors par écrit de nombreux textes sacrés.", causes: ["assiri"] },
          { id: "ciro", lat: 31.78, lon: 35.22, year: -539, label: "Retour de Babylone", html: "En 539 av. J.-C., Cyrus le Grand, roi des Perses, conquiert Babylone et permet aux exilés de rentrer. Le Second Temple sera inauguré vers 516 av. J.-C.", causes: ["babilonia"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. Les Hébreux : une histoire, une foi",
      html: `<p>Nos sources principales sont les textes sacrés réunis dans la <b>Bible hébraïque</b> (<i>Tanakh</i>), que les historiens lisent comme une source religieuse et historique à croiser avec l'archéologie.</p>
<ul>
<li><b>Les patriarches</b> : selon la tradition, <b>Abraham</b> quitte Ur, en Mésopotamie, pour Canaan avec la promesse de Dieu : une terre et une descendance. Viennent ensuite Isaac et Jacob (Israël).</li>
<li><b>L'Exode</b> : selon le récit biblique, les Hébreux vivent en esclavage en Égypte et sont guidés par <b>Moïse</b> vers Canaan (traditionnellement au XIIIe siècle av. J.-C.). Sur le <b>Sinaï</b>, ils reçoivent la Loi (les <b>Dix Commandements</b>) et concluent une <b>Alliance</b> avec Dieu. La Pâque juive (<i>Pessah</i>) rappelle cette libération.</li>
<li><b>Juges et rois</b> : après l'installation en Canaan, les douze tribus sont guidées par des chefs charismatiques (les juges). Pour se défendre contre les Philistins, elles choisissent un roi : <b>Saül</b>, puis <b>David</b> (vers 1000 av. J.-C.), qui conquiert <b>Jérusalem</b>, et <b>Salomon</b>, bâtisseur du Temple.</li>
<li><b>Division</b> (vers 930 av. J.-C.) : <b>Israël</b> au nord et <b>Juda</b> au sud. Les Assyriens détruisent Israël (722 av. J.-C.), Babylone détruit Juda (586 av. J.-C.).</li>
<li><b>Retour</b> grâce à la tolérance perse (539 av. J.-C.) : reconstruction du Temple et fixation de la <b>Torah</b> comme loi. Le peuple de Juda prend le nom de <b>Judéens</b> (d'où le mot « juifs »).</li>
</ul>
<p>Attention : pour les historiens, de nombreux détails (l'Exode, les patriarches, l'étendue du royaume de David) restent discutés, car il manque des preuves archéologiques directes.</p>`
    },
    {
      type: "text",
      title: "3. La grande nouveauté : un Dieu unique",
      html: `<p>Presque tous les peuples de l'Antiquité étaient <b>polythéistes</b> : de nombreux dieux, souvent liés à une ville, à un phénomène naturel, à un métier. Les Hébreux développent peu à peu le <b>monothéisme</b> : un seul Dieu, <b>Yahvé</b>, créateur de toute chose, invisible (on ne doit pas le représenter par des images), juste et lié à son peuple par une <b>alliance</b>.</p>
<ul>
<li>Dieu n'est pas la nature : il est <b>au-dessus</b> de la nature et de l'histoire. L'histoire a un sens et une direction (libération, justice, attente du Messie).</li>
<li>La <b>Loi</b> concerne toute la vie : le culte, la justice, la famille, la nourriture, les rapports avec l'étranger et avec le pauvre.</li>
<li>Les <b>prophètes</b> (Isaïe, Jérémie, Ézéchiel...) ne prédisent pas l'avenir comme des devins, mais rappellent le peuple et les rois à la justice sociale et à la fidélité.</li>
<li>Les livres sacrés (<b>Torah</b>, Prophètes, Écrits) sont mis par écrit surtout après l'exil et deviennent l'identité commune du peuple, même sans État et sans Temple.</li>
</ul>
<p>Du <b>judaïsme</b> dériveront le <b>christianisme</b> (Ier siècle apr. J.-C.) et l'<b>islam</b> (VIIe siècle apr. J.-C.) : les trois grandes religions monothéistes.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : les Hébreux",
      questions: [
        { type: "mc", q: "Selon la tradition, qui a guidé les Hébreux hors d'Égypte ?", options: ["Moïse", "David", "Abraham"], answer: 0, explain: "Moïse, qui reçut la Loi sur le Sinaï." },
        { type: "mc", q: "Quel roi fit de Jérusalem sa capitale ?", options: ["Saül", "David", "Nabuchodonosor"], answer: 1, explain: "David, vers 1000 av. J.-C." },
        { type: "tf", q: "Le monothéisme hébreu prévoyait un seul Dieu qu'on ne devait pas représenter par des images.", answer: true, explain: "Dieu est unique et invisible." },
        { type: "mc", q: "Qu'a été l'exil à Babylone ?", options: ["La déportation des Hébreux à Babylone après 586 av. J.-C.", "La fuite hors d'Égypte", "Un voyage d'Abraham"], answer: 0, explain: "Nabuchodonosor II détruisit le Temple et déporta l'élite." }
      ]
    },
    {
      type: "text",
      title: "4. Les Phéniciens : marchands de la mer",
      html: `<p>Les Phéniciens habitaient une étroite bande côtière (aujourd'hui le Liban), adossée à des montagnes couvertes de <b>cèdres</b>, avec peu de place pour les champs. La mer était leur voie de développement.</p>
<ul>
<li><b>Cités-États</b> indépendantes (Byblos, Sidon, Tyr, Arwad), chacune avec son roi et sa flotte ; elles ne formèrent jamais un royaume unique. Tyr était la plus riche, construite sur une île près de la côte.</li>
<li><b>Navires et navigation</b> : ils construisaient des navires de commerce et de guerre (en bois de cèdre) et s'orientaient grâce aux étoiles, en particulier la Petite Ourse (l'« étoile des Phéniciens »).</li>
<li><b>Marchandises</b> : bois de cèdre, verre, <b>pourpre</b> (colorant tiré du coquillage murex, si précieux que la « couleur pourpre » devint le symbole des rois et des empereurs ; le nom « Phéniciens » vient peut-être du grec <i>phoinix</i>, « rouge pourpre »), étoffes, ivoire, métaux.</li>
<li><b>Commerce</b> : ils échangeaient des produits entre l'Orient et l'Occident : d'Espagne, ils rapportaient de l'argent et de l'étain, d'Égypte du lin et de l'or.</li>
</ul>
<p>Les Phéniciens n'étaient pas des conquérants : ils cherchaient des <b>marchés et des ports</b>, pas des territoires. Leur domination était celle du commerce.</p>`
    },
    {
      type: "text",
      title: "5. Les colonies et Carthage",
      html: `<p>Entre le Xe et le VIIe siècle av. J.-C., les Phéniciens fondèrent des <b>comptoirs</b> (escales commerciales) et des colonies le long des routes de la Méditerranée : à Chypre, à Malte, en <b>Sicile</b> (Motyé, Palerme/<i>Zyz</i>, Solonte), en <b>Sardaigne</b> (Nora, Tharros, Sulcis), en Afrique du Nord (<b>Utique</b>, <b>Carthage</b>), en Espagne (<b>Gadir</b>, aujourd'hui Cadix).</p>
<p>La plus importante fut <b>Carthage</b> (dans l'actuelle Tunisie), fondée, selon la tradition, en <b>814 av. J.-C.</b> par la princesse tyrienne <b>Élissa (Didon)</b>. Quand Tyr fut affaiblie par les Assyriens puis par Babylone, Carthage devint une puissance autonome : elle avait une très grande flotte, une aristocratie de marchands et un empire commercial en Méditerranée occidentale. Elle devint la grande rivale de <b>Rome</b>, qui la détruisit en 146 av. J.-C. (nous le verrons avec les guerres puniques ; « punique » vient du latin <i>poenus</i>, « phénicien »).</p>`
    },
    {
      type: "svg",
      title: "La découverte de l'alphabet",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Un signe pour chaque son : l'évolution de la lettre « A »</text>
<g stroke="#1e3a8a" stroke-width="4" fill="none">
<path d="M50 90 L80 140 L110 90 M80 140 L80 110" />
<path d="M200 150 L230 90 L260 150 M215 125 L245 125"/>
<path d="M350 150 L380 90 L410 150 M360 128 L400 128"/>
<path d="M490 150 L520 90 L550 150 M502 130 L538 130"/>
</g>
<g font-size="15" fill="#0f172a" text-anchor="middle">
<text x="80" y="185">hiéroglyphe :</text><text x="80" y="205">tête de bœuf</text>
<text x="230" y="185">phénicien</text><text x="230" y="205">aleph (« bœuf »)</text>
<text x="380" y="185">grec</text><text x="380" y="205">alpha</text>
<text x="520" y="185">latin</text><text x="520" y="205">A</text>
</g>
<g stroke="#b45309" stroke-width="3" fill="#b45309"><line x1="115" y1="115" x2="170" y2="115"/><polygon points="170,108 186,115 170,122"/>
<line x1="270" y1="115" x2="320" y2="115"/><polygon points="320,108 336,115 320,122"/>
<line x1="425" y1="115" x2="470" y2="115"/><polygon points="470,108 486,115 470,122"/></g>
<text x="300" y="265" font-size="15" text-anchor="middle" fill="#7c2d12">Schéma simplifié : la forme renversée de la lettre rappelle une tête de bœuf.</text>
</svg>`,
      caption: "L'alphabet phénicien (22 signes, uniquement des consonnes) fut repris par les Grecs, qui ajoutèrent les voyelles ; du grec dérivent les alphabets latin et cyrillique."
    },
    {
      type: "text",
      title: "6. L'alphabet : la révolution des 22 signes",
      html: `<p>Les systèmes d'écriture précédents (cunéiforme, hiéroglyphes) comptaient des centaines de signes et demandaient des années d'apprentissage : c'était une affaire de scribes. L'<b>alphabet phénicien</b>, mis au point vers <b>1200-1000 av. J.-C.</b> à partir d'écritures sémitiques antérieures, ne compte que <b>22 signes</b>, un pour chaque <b>consonne</b>. Apprendre à lire et à écrire devient beaucoup plus rapide, et c'est utile aux marchands.</p>
<ul>
<li>Le nom des premières lettres désigne un objet : <i>aleph</i> = bœuf, <i>beth</i> = maison, <i>gimel</i> = chameau. D'où <b>alpha, bêta, gamma</b> et le mot « alphabet ».</li>
<li>Les <b>Grecs</b> (vers les IXe-VIIIe siècles av. J.-C.) reprirent l'alphabet et utilisèrent certains signes pour les <b>voyelles</b>, ce qui le rendit adapté aux langues indo-européennes.</li>
<li>Du grec dérivent l'alphabet <b>étrusque</b>, puis <b>latin</b> (le nôtre) et <b>cyrillique</b> (russe, bulgare...).</li>
<li>L'<b>hébreu</b> et l'<b>arabe</b> dérivent eux aussi d'écritures sémitiques proches de l'écriture phénicienne, et s'écrivent de droite à gauche.</li>
</ul>`
    },
    {
      type: "decision",
      title: "Tyr, vers 800 av. J.-C. : explorer la mer ou rester au pays ?",
      html: `<p>Tu es un riche marchand de Tyr. La ville est surpeuplée, la terre manque, les Assyriens exigent des tributs de plus en plus lourds. Certains capitaines racontent qu'au-delà de la mer, dans l'extrême Occident, il y a des mines d'argent et d'étain et des côtes libres de tout empire. Mais le voyage dure des semaines et le risque est élevé.</p>`,
      question: "Que décides-tu ?",
      options: [
        { label: "Rester à Tyr et payer le tribut aux Assyriens : il ne vaut pas la peine de prendre des risques.", outcome: "On évite le risque, mais le commerce diminue et les impôts augmentent. Avec le temps, Tyr perdrait sa richesse et son importance." },
        { label: "Fonder des comptoirs et des colonies en Méditerranée occidentale, loin des empires.", outcome: "C'est le choix des Phéniciens : des escales tous les quelques jours de navigation, des alliances avec les peuples locaux et un commerce sûr. Certaines colonies, comme Carthage, deviendront aussi riches que la métropole." },
        { label: "Lever une armée et conquérir les territoires voisins pour agrandir le royaume.", outcome: "Une cité-État commerçante n'a pas les ressources pour soutenir une guerre contre un empire comme l'Assyrie : ce serait un pari trop risqué." }
      ],
      answer: 1,
      explain: "Les Phéniciens choisirent de <b>s'étendre par la mer</b> : les colonies leur assurèrent matières premières et marchés. Quand Tyr tomba sous la domination des empires orientaux, les colonies, et Carthage en particulier, continuèrent à prospérer."
    },
    {
      type: "example",
      title: "Exemple concret : d'où vient le mot « bibliothèque » ?",
      html: `<p>La cité phénicienne de <b>Byblos</b> exportait du papyrus égyptien. Les Grecs appelèrent donc <i>byblos</i> le papyrus, et <i>biblíon</i> le « livre » fait de papyrus. D'où :</p>
<ul>
<li><b>Bible</b> (littéralement : « les livres »), <b>bibliothèque</b> (« dépôt de livres »), <b>bibliographie</b>.</li>
</ul>
<p>Beaucoup de mots du commerce méditerranéen viennent aussi de langues sémitiques : « magasin » et « tarif » (de l'arabe), « coton » et « sucre » (de l'arabe). Les mots voyagent comme les marchandises : suivre un mot est une façon de faire de l'histoire.</p>`
    },
    {
      type: "example",
      title: "Exemple concret : lire un texte ancien avec esprit critique",
      html: `<p>La Bible est une source historique sur les royaumes d'Israël et de Juda, mais ce n'est pas un compte rendu neutre : c'est un texte religieux écrit et remanié au fil des siècles. Comment l'historien l'utilise-t-il ?</p>
<ol>
<li><b>Qui écrit et quand ?</b> Les textes ont été rédigés et retouchés pendant longtemps, en grande partie après les événements.</li>
<li><b>Dans quel but ?</b> Transmettre un message religieux : la justice et la fidélité à l'Alliance.</li>
<li><b>Que disent les autres sources ?</b> Des inscriptions assyriennes (comme celles de Sennachérib assiégeant Jérusalem), des textes babyloniens et des fouilles archéologiques confirment certains événements et en corrigent d'autres.</li>
</ol>
<p>Par exemple, les textes assyriens confirment la destruction de Samarie en 722 av. J.-C. et la déportation de ses habitants. Croiser les sources est la méthode centrale de l'histoire.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La « couleur pourpre » coûtait plus cher que l'or",
      html: `<p>Pour obtenir un seul gramme de colorant pourpre, il fallait des milliers de coquillages murex, dont on extrayait une glande qu'on laissait macérer. Le résultat était un rouge violacé qui ne passait pas. Dans l'Antiquité, une étoffe pourpre pouvait coûter plus que son poids en argent. C'est pourquoi elle était réservée aux rois, aux prêtres et, à Rome, aux sénateurs et aux empereurs : « naître dans la pourpre » signifiait naître dans la famille impériale.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le tour de l'Afrique",
      html: `<p>L'historien grec Hérodote raconte que vers <b>600 av. J.-C.</b>, le pharaon Nékao II chargea une expédition de marins phéniciens de faire le tour de l'Afrique. Partis de la mer Rouge, ils revinrent en trois ans par les colonnes d'Hercule et racontèrent que, pendant la navigation, ils avaient eu « le soleil à leur droite » : un détail auquel Hérodote ne croyait pas, mais qui prouve qu'ils avaient franchi l'équateur vers le sud. Si le voyage a vraiment eu lieu, il précéderait de plus de 2000 ans celui du Portugais Vasco de Gama.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les Hébreux et les Phéniciens",
      intro: "Deux petits peuples, deux héritages immenses. Voici quelques clés pour s'en souvenir.",
      tabs: [
        {
          label: "⚓ Un outil contre une idée",
          html: `<p>Une façon simple de les retenir : les Phéniciens ont laissé <b>un outil</b>, les Hébreux <b>une idée</b>.</p>
<ul>
<li><b>Phéniciens → l'alphabet</b> : une façon rapide d'écrire n'importe quelle langue ; il a changé la communication.</li>
<li><b>Hébreux → le monothéisme éthique</b> : un seul Dieu, une Loi qui concerne aussi la justice et la pauvreté, un texte sacré qui maintient l'unité d'un peuple même en exil.</li>
</ul>
<p>Deux peuples sans grandes armées ni vastes empires ont laissé une marque plus durable que bien des empires.</p>`
        },
        {
          label: "🗺️ Fais tourner le globe",
          html: `<p>Fais tourner le globe : les routes phéniciennes, de la côte du Liban jusqu'à Cadix et Carthage.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 33.27, lon: 35.2, label: "Tyr", color: "#7c3aed" },
              { lat: 35.1, lon: 33.4, label: "Chypre", color: "#f97316" },
              { lat: 35.9, lon: 14.4, label: "Malte", color: "#f97316" },
              { lat: 37.9, lon: 12.5, label: "Motyé", color: "#f97316" },
              { lat: 36.85, lon: 10.32, label: "Carthage", color: "#ef4444" },
              { lat: 36.53, lon: -6.29, label: "Gadir (Cadix)", color: "#f97316" },
              { lat: 31.78, lon: 35.22, label: "Jérusalem", color: "#2563eb" }
            ],
            routes: [{ points: [0, 1, 2, 4, 5], color: "#7c3aed" }]
          }
        },
        {
          label: "🔤 Associe la lettre et son sens",
          html: `<p>Certaines lettres phéniciennes avaient un nom qui désignait un objet. Associe-les à leur signification.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Aleph", "Bœuf"],
              ["Beth", "Maison"],
              ["Gimel", "Chameau"],
              ["Mem", "Eau"],
              ["Ayin", "Œil"]
            ]
          }
        },
        {
          label: "📅 Frise chronologique",
          html: `<p>Fais défiler les principales dates des Hébreux et des Phéniciens.</p>`,
          widget: "timeline",
          options: {
            unit: "ans",
            events: [
              { year: -1200, label: "Crise et Peuples de la mer", icon: "🌊" },
              { year: -1000, label: "David à Jérusalem", icon: "👑" },
              { year: -960, label: "Temple de Salomon", icon: "🏛️" },
              { year: -930, label: "Division du royaume", icon: "✂️" },
              { year: -814, label: "Carthage", icon: "⚓" },
              { year: -722, label: "Fin d'Israël", icon: "⚔️" },
              { year: -586, label: "Exil à Babylone", icon: "⛓️" },
              { year: -539, label: "Retour avec Cyrus", icon: "🏠" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : petits peuples, grands héritages",
      nodes: [
        { id: "crisi", label: "Crise de 1200 av. J.-C.", x: 50, y: 6, color: "#64748b", html: "Effondrement de royaumes de l'âge du bronze, Peuples de la mer.", why: "L'effondrement des grands empires laissa des espaces libres : les cités côtières et les peuples des collines purent se développer sans être étouffés par un pouvoir central." },
        { id: "fenici", label: "Phéniciens", x: 20, y: 32, color: "#7c3aed", html: "Cités-États marchandes sur la côte libanaise.", why: "Peu de terres cultivables et beaucoup de bois : leur ressource était la mer. Ils choisirent le commerce et non la conquête." },
        { id: "ebrei", label: "Hébreux", x: 80, y: 32, color: "#2563eb", html: "Des tribus, puis les royaumes d'Israël et de Juda ; la foi en un Dieu unique.", why: "Petit peuple pris entre de grands empires (Égypte, Assyrie, Babylone) : pendant l'exil, la religion et la Loi écrite devinrent son véritable lien." },
        { id: "colonie", label: "Colonies et Carthage", x: 15, y: 60, color: "#f97316", html: "Comptoirs phéniciens du Liban à l'Espagne ; Carthage fondée en 814 av. J.-C.", why: "Ils cherchaient des métaux et des marchés sûrs loin des empires orientaux ; les colonies formèrent un réseau autonome qui survécut à Tyr." },
        { id: "alfabeto", label: "Alphabet", x: 50, y: 60, color: "#16a34a", html: "22 signes consonantiques.", why: "Les marchands avaient besoin d'une écriture simple et rapide pour les contrats et les lettres : l'alphabet la rendit accessible à beaucoup de gens, pas seulement aux scribes." },
        { id: "mono", label: "Monothéisme", x: 85, y: 60, color: "#0ea5e9", html: "Un seul Dieu, une Loi, une Alliance.", why: "Après la destruction du Temple, l'idée d'un Dieu non lié à un lieu permit de conserver l'identité en exil et ouvrit la voie au christianisme et à l'islam." },
        { id: "eredita", label: "Héritage en Méditerranée", x: 50, y: 92, color: "#7c2d12", html: "Alphabets grec et latin ; la Bible ; le commerce.", why: "Les Grecs et les Romains héritèrent à la fois de l'alphabet et des routes maritimes ; du judaïsme naquirent le christianisme et l'islam." }
      ],
      edges: [
        ["crisi", "fenici", "laisse la place aux"],
        ["crisi", "ebrei", "laisse la place aux"],
        ["fenici", "colonie", "fondent"],
        ["fenici", "alfabeto", "diffusent l'"],
        ["ebrei", "mono", "développent le"],
        ["colonie", "eredita", "laissent des réseaux et des villes"],
        ["alfabeto", "eredita", "passe aux Grecs et aux Romains"],
        ["mono", "eredita", "engendre des religions"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : les Phéniciens",
      questions: [
        { type: "mc", q: "Combien de lettres (consonnes) comptait l'alphabet phénicien ?", options: ["12", "22", "50"], answer: 1, explain: "Vingt-deux signes, uniquement des consonnes." },
        { type: "tf", q: "Les Phéniciens formèrent un grand empire uni sous un seul roi.", answer: false, explain: "C'étaient des cités-États indépendantes." },
        { type: "text", q: "Comment s'appelle la colonie phénicienne d'Afrique du Nord qui devint une grande puissance ?", answer: ["carthage"], explain: "Carthage, fondée (selon la tradition) en 814 av. J.-C." },
        { type: "mc", q: "Qui a ajouté les voyelles à l'alphabet phénicien ?", options: ["Les Grecs", "Les Romains", "Les Égyptiens"], answer: 0, explain: "Les Grecs adaptèrent certains signes à leurs voyelles." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Après la crise de <b>1200 av. J.-C.</b>, des peuples plus petits émergent : Phéniciens, Hébreux, Philistins, Araméens.</li>
<li><b>Hébreux</b> : Abraham, Moïse (Exode, Loi), royaumes de David et de Salomon, division en Israël et Juda, exil à Babylone (586 av. J.-C.). Héritage : le <b>monothéisme</b> et la Torah.</li>
<li><b>Phéniciens</b> : cités-États (Tyr, Sidon, Byblos), commerce, pourpre, colonies ; <b>Carthage</b> (814 av. J.-C.).</li>
<li><b>Alphabet</b> phénicien de 22 consonnes → grec (avec voyelles) → latin.</li>
<li>La <b>monnaie</b> naît en Lydie (VIIe siècle av. J.-C.).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Peuples de la mer", d: "Groupes d'envahisseurs qui, vers 1200 av. J.-C., attaquèrent les côtes orientales de la Méditerranée." },
    { t: "Monothéisme", d: "Croyance en un Dieu unique." },
    { t: "Polythéisme", d: "Croyance en de nombreux dieux." },
    { t: "Alliance", d: "Pacte entre Dieu et le peuple hébreu, fondement de la Loi." },
    { t: "Torah", d: "La Loi : les cinq premiers livres de la Bible hébraïque." },
    { t: "Prophète", d: "Celui qui parle au nom de Dieu et rappelle le peuple à la justice." },
    { t: "Exil à Babylone", d: "Déportation des Hébreux de Juda à Babylone après 586 av. J.-C." },
    { t: "Comptoir", d: "Escale commerciale en terre étrangère." },
    { t: "Pourpre", d: "Colorant précieux tiré du coquillage murex." },
    { t: "Alphabet", d: "Système d'écriture dans lequel chaque signe indique un son." },
    { t: "Punique", d: "Relatif aux Phéniciens d'Occident et à Carthage." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Que s'est-il passé vers 1200 av. J.-C. en Méditerranée orientale ?", options: ["L'effondrement de nombreux royaumes de l'âge du bronze", "La naissance de l'Empire romain", "L'invention de la monnaie"], answer: 0, explain: "Une crise générale, avec les « Peuples de la mer »." },
      { type: "mc", q: "Quel souverain fit de Jérusalem la capitale des Hébreux ?", options: ["David", "Salomon", "Saül"], answer: 0, explain: "David, vers 1000 av. J.-C. (Salomon y construisit le Temple)." },
      { type: "tf", q: "Le royaume hébreu se divisa en Israël (au nord) et Juda (au sud).", answer: true, explain: "Après la mort de Salomon, vers 930 av. J.-C." },
      { type: "mc", q: "Qu'a été l'exil à Babylone ?", options: ["La déportation des Hébreux de Juda à Babylone", "La fuite hors d'Égypte", "La conquête de Canaan"], answer: 0, explain: "Après la destruction du Temple en 586 av. J.-C." },
      { type: "text", q: "Comment s'appelle la principale cité phénicienne, bâtie sur une île, qui possédait une grande flotte ?", answer: ["tyr"], explain: "Tyr." },
      { type: "mc", q: "Pourquoi les Phéniciens fondèrent-ils des colonies ?", options: ["Pour avoir des escales commerciales et des matières premières", "Pour fonder des empires territoriaux", "Pour diffuser le monothéisme"], answer: 0, explain: "Ils cherchaient des marchés et des métaux, pas des conquêtes." },
      { type: "order", q: "Range dans l'ordre chronologique.", items: ["David à Jérusalem", "Fondation de Carthage", "Chute de Samarie", "Destruction du Temple", "Retour des exilés avec Cyrus"], explain: "Vers 1000, 814, 722, 586, 539 av. J.-C." },
      { type: "mc", q: "Quelle est la principale différence entre l'alphabet phénicien et le cunéiforme ?", options: ["Le phénicien a peu de signes, un par son", "Le phénicien a des milliers de signes", "Le phénicien n'utilise que des dessins"], answer: 0, explain: "22 signes contre des centaines." },
      { type: "num", q: "Combien de signes comptait l'alphabet phénicien ?", answer: 22, tol: 0, explain: "Vingt-deux consonnes." },
      { type: "tf", q: "L'alphabet latin dérive de l'alphabet grec, qui dérive de l'alphabet phénicien.", answer: true, explain: "Phénicien → grec → étrusque/latin." },
      { type: "mc", q: "Laquelle de ces religions n'est PAS issue du judaïsme ?", options: ["Christianisme", "Islam", "Zoroastrisme"], answer: 2, explain: "Le zoroastrisme est la religion perse, d'une origine différente." }
    ]
  }
});
