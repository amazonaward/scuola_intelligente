TOPIC('fr', {
  id: "l1-sto-guerre-persiane-pericle",
  title: "Les guerres médiques et le siècle de Périclès",
  intro: "En <b>490 av. J.-C.</b>, une petite armée de citoyens athéniens affronta à Marathon les troupes du plus grand empire du monde et les vainquit. Dix ans plus tard, à Salamine, une flotte grecque détruisit celle de Xerxès. Ce fut le moment où une poignée de cités libres sauva l'Occident de la domination d'un roi absolu : du moins, c'est ainsi que les Grecs le racontèrent. De cette victoire naquit l'<b>âge d'or d'Athènes</b>, avec <b>Périclès</b>, la démocratie la plus avancée de l'Antiquité, le Parthénon, le théâtre et la philosophie. Mais la puissance même d'Athènes déclencha la guerre avec Sparte, qui la mena à la ruine.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. L'Empire perse et la révolte des cités ioniennes",
      html: `<p>Au VIe s. av. J.-C., les <b>Perses</b>, menés par <b>Cyrus le Grand</b> (559-530 av. J.-C.), créèrent le plus vaste empire jamais vu : de la mer Égée à l'Inde, avec Babylone, la Lydie et l'Égypte (conquise par Cambyse en 525 av. J.-C.). Sous <b>Darius Ier</b> (522-486 av. J.-C.), l'empire fut divisé en <b>satrapies</b> gouvernées par des satrapes, reliées par la <b>Route royale</b> et ses relais de poste ; les Perses respectaient les langues et les religions des peuples soumis, mais exigeaient des <b>tributs</b> et des soldats.</p>
<p>Les <b>cités grecques d'Asie Mineure</b> (Ionie : Milet, Éphèse, Phocée) étaient sujettes des Perses. En <b>499 av. J.-C.</b>, elles se révoltèrent (<b>révolte de l'Ionie</b>) et <b>Athènes</b> et <b>Érétrie</b> envoyèrent quelques navires en renfort. Les Perses écrasèrent la révolte en détruisant Milet (494 av. J.-C.), et Darius décida de punir les deux cités « rebelles » de Grèce continentale. Pour les Perses, c'était une affaire d'ordre impérial ; pour les Grecs, cela allait devenir la lutte pour la liberté.</p>`
    },
    {
      type: "text",
      title: "2. La première guerre médique et Marathon (490 av. J.-C.)",
      html: `<p>En <b>490 av. J.-C.</b>, une flotte perse débarqua dans la plaine de <b>Marathon</b>, à environ 40 km d'Athènes, après avoir détruit Érétrie. Les Athéniens, menés par le stratège <b>Miltiade</b>, alignèrent environ 10 000 hoplites (aidés d'un millier de Platéens) face à des forces perses estimées à plusieurs milliers d'hommes. Sparte, pour des raisons religieuses, arriva en retard.</p>
<p>La <b>phalange</b> grecque, avec ses cuirasses de bronze, ses boucliers et ses longues lances, attaqua au pas de course, renforçant les ailes et encerclant le centre perse. Ce fut une victoire écrasante : les Perses perdirent environ 6 400 hommes, les Athéniens 192. La légende raconte qu'un messager, <b>Philippidès</b>, courut jusqu'à Athènes pour annoncer « Nous avons vaincu ! » et mourut d'épuisement (d'où le <b>marathon</b> de 42,195 km). L'historien Hérodote raconte plutôt que Philippidès courut jusqu'à Sparte pour demander de l'aide avant la bataille, soit environ 240 km en deux jours.</p>
<p>Après Marathon, Darius prépara une nouvelle expédition, mais il mourut en 486 av. J.-C.</p>`
    },
    {
      type: "3d",
      title: "Carte 3D : des guerres médiques à la guerre du Péloponnèse",
      scene: "spacetime",
      caption: "La base est la carte de la Méditerranée orientale, la hauteur représente le temps (500-400 av. J.-C.). Touche les événements : les flèches relient causes et effets.",
      options: {
        lat: [33, 42],
        lon: [14, 30],
        years: [-500, -400],
        places: [
          { lat: 37.97, lon: 23.72, label: "Athènes" },
          { lat: 37.08, lon: 22.43, label: "Sparte" },
          { lat: 37.53, lon: 27.28, label: "Milet" },
          { lat: 37.07, lon: 15.29, label: "Syracuse" }
        ],
        events: [
          { id: "ionica", lat: 37.53, lon: 27.28, year: -499, label: "Révolte de l'Ionie", html: "Les cités grecques d'Asie se révoltent contre les Perses. Athènes et Érétrie envoient des navires : c'est le prétexte de la guerre.", causes: [] },
          { id: "maratona", lat: 38.15, lon: 23.96, year: -490, label: "Marathon", html: "Les Athéniens de Miltiade repoussent le débarquement perse : 192 morts athéniens contre environ 6 400 Perses. Victoire de l'armée de citoyens.", causes: ["ionica"] },
          { id: "termopili", lat: 38.8, lon: 22.54, year: -480, label: "Thermopyles", html: "Août 480 av. J.-C. : Léonidas, avec 300 Spartiates et quelques milliers d'alliés, arrête pendant trois jours l'armée de Xerxès, puis il est contourné et meurt avec ses hommes.", causes: ["maratona"] },
          { id: "atene480", lat: 37.97, lon: 23.72, year: -480, label: "Athènes évacuée et incendiée", html: "Les Perses occupent Athènes et incendient l'Acropole. Sur le conseil de Thémistocle, les Athéniens s'étaient réfugiés sur les navires et à Salamine.", causes: ["termopili"] },
          { id: "salamina", lat: 37.95, lon: 23.5, year: -480, label: "Salamine", html: "Septembre 480 av. J.-C. : la flotte grecque de Thémistocle attire les navires perses dans le détroit de Salamine et les détruit : Xerxès rentre en Asie.", causes: ["atene480"] },
          { id: "platea", lat: 38.22, lon: 23.27, year: -479, label: "Platées et Mycale", html: "En 479 av. J.-C., les Grecs l'emportent à Platées (armée de terre) et au cap Mycale (flotte) : la menace perse est écartée.", causes: ["salamina"] },
          { id: "delo", lat: 37.4, lon: 25.27, year: -478, label: "Ligue de Délos", html: "En 478-477 av. J.-C., Athènes prend la tête à Délos d'une ligue de cités pour poursuivre la guerre : chaque cité paie un tribut ou fournit des navires. Bientôt, Athènes la transforme en empire.", causes: ["platea"] },
          { id: "partenone", lat: 37.97, lon: 23.72, year: -447, label: "Parthénon", html: "Avec Périclès commencent (447 av. J.-C.) les travaux du Parthénon sur l'Acropole, financé en partie par le trésor de la ligue (transféré à Athènes en 454).", causes: ["delo"] },
          { id: "peloponneso", lat: 37.08, lon: 22.43, year: -431, label: "Guerre du Péloponnèse", html: "En 431 av. J.-C. éclate la guerre entre Athènes et Sparte (avec la Ligue du Péloponnèse) : elle durera jusqu'en 404 av. J.-C.", causes: ["partenone"] },
          { id: "sicilia", lat: 37.07, lon: 15.29, year: -413, label: "Désastre de Sicile", html: "L'expédition athénienne contre Syracuse (415-413 av. J.-C.) s'achève par la destruction de la flotte et de l'armée.", causes: ["peloponneso"] },
          { id: "egospotami", lat: 40.35, lon: 26.55, year: -405, label: "Aigos Potamos", html: "En 405 av. J.-C., la flotte spartiate, financée par les Perses, détruit la flotte athénienne. Athènes capitule en 404.", causes: ["sicilia"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. La seconde guerre médique : les Thermopyles et Salamine (480-479 av. J.-C.)",
      html: `<p>En <b>480 av. J.-C.</b>, le nouveau roi <b>Xerxès</b> envahit la Grèce avec une armée immense (les chiffres d'Hérodote, plus d'un million, sont exagérés : peut-être 100 000 à 200 000 hommes) et une grande flotte. Les cités grecques, bien que divisées, s'allièrent sous la direction de Sparte pour l'armée de terre et d'Athènes pour la flotte.</p>
<ul>
<li><b>Thermopyles</b> : dans l'étroit défilé, le roi spartiate <b>Léonidas</b> résiste pendant trois jours ; trahi par un Grec qui montre un sentier aux Perses, il est contourné et meurt avec ses hommes. Ce sacrifice renforce la résistance.</li>
<li><b>Athènes évacuée</b> : les Athéniens quittent la ville, qui est pillée et incendiée.</li>
<li><b>Salamine</b> (septembre 480 av. J.-C.) : <b>Thémistocle</b>, stratège athénien, avait fait construire une grande flotte de <b>trières</b> (navires de guerre à trois rangs de rameurs) grâce aux revenus des mines d'argent du Laurion. Il attire les Perses dans le détroit, où les plus grands navires se gênent les uns les autres. Ce fut une victoire décisive.</li>
<li><b>Platées et Mycale</b> (479 av. J.-C.) : victoires sur terre et sur mer qui libèrent la Grèce.</li>
</ul>
<p>Pour les Grecs, ce fut la victoire de la <b>liberté</b> des citoyens sur le despotisme d'un roi, comme la raconta <b>Hérodote</b>, le « père de l'histoire », dans ses <i>Histoires</i>. Mais souviens-toi que, là aussi, l'histoire est écrite par les vainqueurs : pour les Perses, c'était une expédition secondaire dans une province lointaine.</p>`
    },
    {
      type: "svg",
      title: "La bataille de Salamine (schéma)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#bae6fd"/>
<path d="M0 0 L600 0 L600 60 Q520 90 480 130 L480 300 L0 300 Z" fill="#d6d3d1"/>
<path d="M0 300 L0 120 Q80 160 120 200 L200 300 Z" fill="#a8a29e"/>
<text x="60" y="260" font-size="16" font-weight="bold" fill="#0f172a">ATTIQUE</text>
<text x="500" y="40" font-size="16" font-weight="bold" fill="#0f172a">SALAMINE</text>
<g fill="#2563eb" stroke="#1e3a8a" stroke-width="2">
<polygon points="260,210 300,200 300,220"/><polygon points="260,240 300,230 300,250"/><polygon points="250,180 290,170 290,190"/>
</g>
<g fill="#dc2626" stroke="#7f1d1d" stroke-width="2">
<polygon points="440,130 400,120 400,140"/><polygon points="430,170 390,160 390,180"/><polygon points="460,100 420,90 420,110"/><polygon points="420,210 380,200 380,220"/>
</g>
<path d="M330 140 L360 140" stroke="#dc2626" stroke-width="3"/>
<text x="120" y="110" font-size="15" fill="#1e3a8a" font-weight="bold">Flotte grecque</text>
<text x="400" y="260" font-size="15" fill="#7f1d1d" font-weight="bold">Flotte perse</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#0f172a">Schéma simplifié : dans le détroit, les navires perses ne peuvent pas manœuvrer.</text>
</svg>`,
      caption: "À Salamine, les navires grecs, plus petits et plus maniables, tirèrent parti de l'espace étroit contre la flotte perse plus nombreuse."
    },
    {
      type: "quiz",
      title: "Mini-quiz : les guerres médiques",
      questions: [
        { type: "mc", q: "Qui commandait les Athéniens à Marathon ?", options: ["Miltiade", "Périclès", "Léonidas"], answer: 0, explain: "Le stratège Miltiade, en 490 av. J.-C." },
        { type: "mc", q: "Dans quelle bataille navale Thémistocle a-t-il vaincu les Perses ?", options: ["Salamine", "Mycale", "Aigos Potamos"], answer: 0, explain: "À Salamine, en septembre 480 av. J.-C." },
        { type: "tf", q: "Léonidas et ses hommes ont défendu le défilé des Thermopyles pendant des mois.", answer: false, explain: "Ils résistèrent trois jours, puis furent contournés." },
        { type: "text", q: "Comment s'appelle le « père de l'histoire » qui a raconté les guerres médiques ?", answer: ["hérodote", "herodote"], explain: "Hérodote d'Halicarnasse." }
      ]
    },
    {
      type: "text",
      title: "4. De la ligue de Délos à l'empire athénien",
      html: `<p>Après la victoire, en <b>478-477 av. J.-C.</b>, Athènes fonda la <b>ligue de Délos</b> (du nom de l'île où était gardé le trésor) avec des centaines de cités de la mer Égée. Chaque allié fournissait des navires ou payait un <b>tribut</b> (<i>phoros</i>). Athènes commandait la flotte et utilisait l'argent à son profit : en <b>454 av. J.-C.</b>, le trésor fut transféré à Athènes, et les cités qui voulaient quitter la ligue (comme Naxos et Thasos) étaient soumises par la force. La ligue devint un véritable <b>empire maritime</b>, qui enrichit Athènes et la rendit redoutable aux yeux de Sparte.</p>
<p>Qu'une puissance démocratique opprime d'autres cités libres est une contradiction que les Grecs relevaient déjà : la liberté des citoyens d'Athènes reposait sur le tribut des alliés et sur le travail des esclaves.</p>`
    },
    {
      type: "text",
      title: "5. Périclès et la démocratie athénienne",
      html: `<p><b>Périclès</b> (vers 495-429 av. J.-C.), aristocrate mais chef du parti populaire, fut réélu <b>stratège</b> (commandant militaire, l'une des rares charges électives) presque chaque année de 443 à 429 av. J.-C. L'historien <b>Thucydide</b> écrivit qu'Athènes était « de nom une démocratie, mais en fait le gouvernement du premier citoyen ».</p>
<ul>
<li><b>Ecclésia</b> : assemblée de tous les citoyens hommes adultes (environ 30 000 à 40 000), qui décide de la guerre, de la paix, des lois, des tributs ; on vote à main levée.</li>
<li><b>Boulè des 500</b> : conseil tiré au sort qui prépare les propositions ; à tour de rôle, une de ses sections gouverne au quotidien.</li>
<li><b>Héliée</b> : grands tribunaux populaires avec des jurés tirés au sort (parfois 501).</li>
<li><b>Tirage au sort</b> : presque toutes les charges sont attribuées par tirage au sort, car tous sont jugés également capables.</li>
<li><b>Misthos</b> : Périclès introduit une indemnité pour ceux qui exercent des charges publiques, afin que même les pauvres puissent participer sans y perdre.</li>
</ul>
<p>Dans la célèbre <b>Oraison funèbre</b> en l'honneur des soldats morts (431 ou 430 av. J.-C.), rapportée par Thucydide, Périclès déclare : « notre constitution s'appelle démocratie parce que le pouvoir est entre les mains non pas de quelques-uns, mais du plus grand nombre ». Mais n'oublie pas ses limites : les <b>femmes, les esclaves et les métèques</b> (étrangers résidents) restaient exclus du pouvoir, soit environ les 3/4 de la population.</p>`
    },
    {
      type: "text",
      title: "6. L'âge d'or : art, théâtre, pensée",
      html: `<p>Grâce aux tributs de la ligue, Athènes devient le centre culturel du monde grec.</p>
<ul>
<li><b>Architecture</b> : sur l'Acropole, reconstruite après l'incendie perse, s'élève le <b>Parthénon</b> (447-432 av. J.-C.), temple d'Athéna, œuvre d'Ictinos et de Callicratès, avec des sculptures dirigées par <b>Phidias</b>. C'est un modèle d'harmonie et de proportion (ordre dorique).</li>
<li><b>Théâtre</b> : né lors des fêtes de Dionysos, avec les tragédies d'<b>Eschyle</b> (<i>Les Perses</i>), de <b>Sophocle</b> (<i>Œdipe roi</i>, <i>Antigone</i>) et d'<b>Euripide</b> (<i>Médée</i>), et les comédies d'<b>Aristophane</b>. Le théâtre était une expérience civique : les citoyens y réfléchissaient à la justice et au pouvoir.</li>
<li><b>Histoire</b> : <b>Hérodote</b> et <b>Thucydide</b> (auteur d'une histoire de la guerre du Péloponnèse fondée sur des preuves et des témoignages, sans intervention divine).</li>
<li><b>Philosophie</b> : les <b>sophistes</b> enseignent l'art de la parole ; <b>Socrate</b> (469-399 av. J.-C.) interroge les citoyens sur la vertu et la justice (« je sais que je ne sais rien »).</li>
<li><b>Médecine</b> : <b>Hippocrate</b> de Cos, qui cherche des causes naturelles aux maladies.</li>
</ul>
<p>À cette époque, Athènes comptait environ 250 000 à 300 000 habitants (avec l'Attique), et son port, Le Pirée, était l'un des plus actifs de la Méditerranée.</p>`
    },
    {
      type: "decision",
      title: "Athènes, 431 av. J.-C. : affronter Sparte en rase campagne ou s'abriter derrière les Longs Murs ?",
      html: `<p>Tu es Périclès. Sparte et la Ligue du Péloponnèse s'apprêtent à envahir l'Attique avec une armée d'hoplites bien plus forte que la tienne. Mais Athènes possède la <b>flotte</b> la plus puissante de la Méditerranée et les <b>Longs Murs</b> qui relient la ville au port du Pirée, par lequel elle peut recevoir du blé par la mer.</p>`,
      question: "Quelle stratégie choisis-tu ?",
      options: [
        { label: "Affronter les Spartiates en bataille rangée hors des murs.", outcome: "Sparte a la meilleure armée de terre : Athènes risque une défaite décisive dès le début." },
        { label: "Faire entrer toute la population à l'intérieur des murs, laisser dévaster les champs et frapper par la mer avec la flotte.", outcome: "C'est une stratégie sensée : Athènes ne peut pas être affamée tant qu'elle contrôle la mer. Mais l'entassement dans la ville aura un coût terrible : la peste." },
        { label: "Demander tout de suite la paix en renonçant au contrôle de la mer Égée.", outcome: "Athènes perdrait son empire et ses tributs : sa richesse et sa puissance." }
      ],
      answer: 1,
      explain: "Périclès choisit la <b>stratégie défensive</b> : s'abriter derrière les murs et frapper par la mer. En 430 av. J.-C., une <b>peste</b> éclata dans la ville surpeuplée et tua peut-être un tiers de la population, y compris Périclès lui-même (429 av. J.-C.). Sans lui, Athènes suivit des dirigeants plus impulsifs."
    },
    {
      type: "text",
      title: "7. La guerre du Péloponnèse (431-404 av. J.-C.)",
      html: `<p>La croissance d'Athènes effraya Sparte et ses alliés (Corinthe en particulier). Thucydide écrivit que « la vraie cause fut l'accroissement de la puissance athénienne et la crainte qu'elle inspirait à Sparte ». La guerre se divise en plusieurs phases :</p>
<ul>
<li><b>Guerre archidamique</b> (431-421 av. J.-C.) : invasions spartiates de l'Attique, raids de la flotte athénienne, peste (430-426). Elle se termine par la <b>paix de Nicias</b> (421 av. J.-C.), fragile.</li>
<li><b>Expédition de Sicile</b> (415-413 av. J.-C.) : poussés par l'ambitieux <b>Alcibiade</b>, les Athéniens attaquent Syracuse ; l'expédition finit en catastrophe : flotte détruite, milliers de prisonniers.</li>
<li><b>Phase finale</b> (413-404 av. J.-C.) : Sparte, financée par la Perse, construit une flotte ; en <b>405 av. J.-C.</b>, à <b>Aigos Potamos</b>, elle détruit la flotte athénienne. En <b>404 av. J.-C.</b>, Athènes capitule : murs abattus, empire perdu. Pendant une courte période gouverne une oligarchie pro-spartiate, les <b>Trente Tyrans</b>, puis la démocratie est rétablie (403 av. J.-C.).</li>
</ul>
<p><b>Conséquences</b> : toute la Grèce en sort épuisée, avec des cités dévastées, des guerres civiles et une hégémonie spartiate mal acceptée. En 399 av. J.-C., Socrate fut condamné à mort pour impiété et corruption de la jeunesse, dans un climat de peur et de rancœur. Affaiblies, les cités seront conquises au IVe siècle par le roi de Macédoine, Philippe II.</p>`
    },
    {
      type: "example",
      title: "Exemple concret : la voix des vainqueurs et des vaincus",
      html: `<p>Presque tout ce que nous savons des guerres médiques vient d'<b>Hérodote</b>, un Grec, et des textes athéniens. Les Perses ont laissé peu de récits écrits sur ces événements. Quelles questions se pose un historien ?</p>
<ol>
<li><b>Qui raconte, et pourquoi ?</b> Hérodote veut célébrer les exploits des Grecs et expliquer le conflit entre Grecs et barbares.</li>
<li><b>Que savons-nous par d'autres sources ?</b> Les inscriptions perses (comme celle de Darius à Behistun) et les fouilles montrent que l'empire était très organisé et tolérant ; pour les Perses, la guerre fut une expédition de frontière.</li>
<li><b>Qu'est-ce qui est exagéré ?</b> Les effectifs de l'armée de Xerxès, certainement gonflés.</li>
</ol>
<p>Une histoire racontée par un seul camp est toujours incomplète : pour comprendre, il faut croiser plusieurs sources.</p>`
    },
    {
      type: "example",
      title: "Exemple concret : le marathon d'aujourd'hui",
      html: `<p>La course de <b>42,195 km</b> est née d'une idée du Français Michel Bréal pour les premiers Jeux olympiques modernes d'Athènes en <b>1896</b> : il voulait rappeler la légende du messager. La distance officielle ne fut fixée qu'en 1921, d'après celle du marathon de Londres de 1908. Entre Marathon et Athènes, il y a environ 40 km : la légende de Philippidès est donc plus symbolique qu'historique, mais elle continue de nous inspirer.</p>
<p>Un autre exemple d'héritage : le mot <b>« démocratie »</b>. Aujourd'hui, dans nos établissements, nous élisons des délégués de classe ; à Athènes, tous les citoyens votaient directement à l'assemblée.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le Parthénon peint",
      html: `<p>Aujourd'hui, le Parthénon a la couleur claire du marbre, mais dans l'Antiquité les statues et les frises étaient <b>peintes de couleurs vives</b> (bleu, rouge, jaune). Le temps a effacé les pigments. En 1687, pendant la guerre entre Venise et les Turcs, une bombe vénitienne fit exploser la poudrière ottomane installée dans le temple, détruisant une grande partie du toit. Les célèbres marbres de la frise, emportés à Londres en 1801-1812 par Lord Elgin, sont aujourd'hui au British Museum, et la Grèce en réclame la restitution.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La peste racontée par un témoin",
      html: `<p>Thucydide, qui attrapa la peste et survécut, en décrivit les symptômes avec une telle précision clinique que les médecins modernes ont pu formuler des hypothèses sur la maladie (peut-être le typhus ou la fièvre typhoïde ; la question reste ouverte). Son but : laisser « une acquisition pour toujours ». Son « Histoire de la guerre du Péloponnèse » est considérée comme le premier exemple d'histoire scientifique.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la Grèce classique",
      intro: "Événements, personnages et idées : essaie de les regarder avec d'autres outils.",
      tabs: [
        {
          label: "🏁 David contre Goliath",
          html: `<p>On peut voir les guerres médiques comme l'affrontement entre un <b>géant</b> (l'Empire perse, 20 millions de sujets) et des <b>petits</b> (les cités grecques, quelques centaines de milliers de citoyens). Mais attention : ce n'était pas une histoire de gentils et de méchants.</p>
<ul>
<li>Les Grecs gagnèrent parce qu'ils combattaient <b>près de chez eux</b>, sur un terrain étroit et montagneux, avec une tactique adaptée (phalange, trières).</li>
<li>Les Perses étaient nombreux, mais avaient des problèmes de ravitaillement et de coordination entre des troupes de peuples différents.</li>
<li>Pour Athènes, la victoire eut des effets politiques : les citoyens rameurs de la flotte réclamèrent plus de poids politique, et la démocratie s'élargit.</li>
</ul>`
        },
        {
          label: "📅 Frise chronologique",
          html: `<p>Parcours les grands événements de 499 à 399 av. J.-C.</p>`,
          widget: "timeline",
          options: {
            unit: "ans",
            events: [
              { year: -499, label: "Révolte de l'Ionie", icon: "🔥" },
              { year: -490, label: "Marathon", icon: "🏃" },
              { year: -480, label: "Thermopyles et Salamine", icon: "⚓" },
              { year: -478, label: "Ligue de Délos", icon: "🤝" },
              { year: -447, label: "Début du Parthénon", icon: "🏛️" },
              { year: -431, label: "Guerre du Péloponnèse", icon: "⚔️" },
              { year: -429, label: "Mort de Périclès", icon: "🕯️" },
              { year: -404, label: "Capitulation d'Athènes", icon: "🏳️" },
              { year: -399, label: "Mort de Socrate", icon: "🍷" }
            ]
          }
        },
        {
          label: "🗺️ Fais tourner le globe",
          html: `<p>Fais tourner le globe : les lieux clés des guerres médiques et de la guerre du Péloponnèse.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 37.97, lon: 23.72, label: "Athènes", color: "#2563eb" },
              { lat: 38.15, lon: 23.96, label: "Marathon", color: "#ef4444" },
              { lat: 38.8, lon: 22.54, label: "Thermopyles", color: "#ef4444" },
              { lat: 37.95, lon: 23.5, label: "Salamine", color: "#ef4444" },
              { lat: 37.08, lon: 22.43, label: "Sparte", color: "#f97316" },
              { lat: 37.07, lon: 15.29, label: "Syracuse", color: "#f97316" },
              { lat: 29.93, lon: 52.9, label: "Persépolis", color: "#7c3aed" }
            ],
            routes: [{ points: [6, 0, 1], color: "#7c3aed" }]
          }
        },
        {
          label: "🃏 Cartes de révision",
          html: `<p>Retourne les cartes pour réviser.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Marathon", back: "490 av. J.-C. : victoire athénienne de Miltiade sur les Perses" },
              { front: "Salamine", back: "480 av. J.-C. : victoire navale de Thémistocle" },
              { front: "Ligue de Délos", back: "Alliance dirigée par Athènes à partir de 478 av. J.-C., puis empire" },
              { front: "Périclès", back: "Stratège, guide de la démocratie athénienne ; Parthénon" },
              { front: "Aigos Potamos", back: "405 av. J.-C. : la flotte spartiate détruit la flotte athénienne" },
              { front: "Misthos", back: "Indemnité pour les charges publiques introduite par Périclès" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : de la victoire à la chute d'Athènes",
      nodes: [
        { id: "persia", label: "Empire perse", x: 50, y: 6, color: "#7c3aed", html: "Le plus vaste empire de l'époque, avec Darius et Xerxès.", why: "La révolte des cités ioniennes, soutenue par Athènes, poussa Darius à punir la Grèce et à consolider sa frontière occidentale." },
        { id: "vittoria", label: "Victoire grecque", x: 25, y: 28, color: "#ef4444", html: "Marathon (490), Thermopyles et Salamine (480), Platées (479).", why: "Les Grecs gagnèrent parce qu'ils combattaient sur un terrain favorable, avec la phalange et les trières, et avec la forte motivation de défendre leurs cités." },
        { id: "lega", label: "Ligue de Délos", x: 75, y: 28, color: "#f97316", html: "Alliance maritime qui devient l'empire d'Athènes.", why: "Athènes avait la flotte la plus forte : les alliés préférèrent payer un tribut plutôt qu'armer des navires. Athènes devint ainsi maîtresse de la mer Égée." },
        { id: "democrazia", label: "Démocratie de Périclès", x: 20, y: 55, color: "#16a34a", html: "Assemblée, tirage au sort, indemnités pour les charges.", why: "Les rameurs de la flotte, pauvres, avaient contribué à la victoire : ils exigèrent plus de droits. Les tributs financèrent les indemnités." },
        { id: "cultura", label: "Âge d'or", x: 50, y: 55, color: "#eab308", html: "Parthénon, théâtre, philosophie, histoire.", why: "La richesse et la fierté de la victoire financèrent des œuvres publiques et stimulèrent l'esprit critique et le débat public." },
        { id: "paura", label: "Peur de Sparte", x: 82, y: 55, color: "#0ea5e9", html: "Sparte et Corinthe redoutent la puissance athénienne.", why: "Thucydide voit dans la croissance d'Athènes et la peur de Sparte la cause profonde de la guerre." },
        { id: "guerra", label: "Guerre du Péloponnèse", x: 50, y: 78, color: "#7c2d12", html: "431-404 av. J.-C. : peste, Sicile, Aigos Potamos.", why: "La guerre fut longue et épuisante ; les erreurs stratégiques et la peste affaiblirent Athènes, tandis que les Perses finançaient Sparte." },
        { id: "crisi", label: "Crise de la cité", x: 50, y: 96, color: "#334155", html: "Hégémonies instables, guerres civiles, montée de la Macédoine.", why: "Après la guerre, aucune cité ne réussit à unir la Grèce ; cette faiblesse ouvrit la voie à Philippe II de Macédoine." }
      ],
      edges: [
        ["persia", "vittoria", "vaincu par la"],
        ["vittoria", "lega", "conduit à la"],
        ["lega", "democrazia", "finance la"],
        ["democrazia", "cultura", "stimule l'"],
        ["lega", "paura", "provoque la"],
        ["paura", "guerra", "déclenche la"],
        ["cultura", "guerra", "n'empêche pas la"],
        ["guerra", "crisi", "conduit à la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : Périclès et la guerre",
      questions: [
        { type: "mc", q: "Qu'a fait construire Périclès sur l'Acropole ?", options: ["Le Parthénon", "Le Colisée", "Les murs de Troie"], answer: 0, explain: "Le Parthénon, temple d'Athéna (447-432 av. J.-C.)." },
        { type: "mc", q: "Qui a gagné la guerre du Péloponnèse ?", options: ["Sparte", "Athènes", "La Perse"], answer: 0, explain: "Sparte, avec l'aide financière des Perses." },
        { type: "tf", q: "Périclès est mort lui aussi pendant la peste.", answer: true, explain: "Il mourut en 429 av. J.-C." },
        { type: "order", q: "Range dans l'ordre.", items: ["Marathon", "Salamine", "Ligue de Délos", "Guerre du Péloponnèse"], explain: "490, 480, 478, 431 av. J.-C." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li><b>Perses</b> : empire immense (Cyrus, Darius, Xerxès) ; révolte de l'Ionie (499 av. J.-C.).</li>
<li>Première guerre : <b>Marathon</b> (490, Miltiade). Seconde : <b>Thermopyles</b> (Léonidas) et <b>Salamine</b> (Thémistocle) en 480 ; <b>Platées</b> et <b>Mycale</b> (479).</li>
<li><b>Ligue de Délos</b> (478-477) : Athènes dirige l'alliance et crée un empire.</li>
<li><b>Périclès</b> : démocratie directe avec indemnités ; Parthénon ; théâtre, Hérodote, Thucydide, Socrate.</li>
<li><b>Guerre du Péloponnèse</b> (431-404) : Athènes vaincue par Sparte ; crise des cités.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Satrapie", d: "Province de l'Empire perse gouvernée par un satrape." },
    { t: "Phalange", d: "Formation serrée d'hoplites armés d'un bouclier et d'une lance." },
    { t: "Trière", d: "Navire de guerre à trois rangs de rameurs." },
    { t: "Stratège", d: "Commandant militaire athénien, charge élective." },
    { t: "Ligue de Délos", d: "Alliance de cités de la mer Égée dirigée par Athènes (478-477 av. J.-C.)." },
    { t: "Tribut", d: "Somme versée par un État soumis ou allié." },
    { t: "Misthos", d: "Indemnité versée aux citoyens pour les charges publiques." },
    { t: "Ecclésia", d: "Assemblée des citoyens d'Athènes." },
    { t: "Sophiste", d: "Maître de rhétorique et de savoir pratique." },
    { t: "Peste d'Athènes", d: "Épidémie de 430-426 av. J.-C. pendant la guerre." },
    { t: "Hégémonie", d: "Suprématie d'une cité ou d'un État sur d'autres." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qu'est-ce qui a provoqué l'intervention perse en Grèce ?", options: ["Le soutien d'Athènes et d'Érétrie à la révolte de l'Ionie", "La fondation de la ligue de Délos", "Les jeux Olympiques"], answer: 0, explain: "Athènes et Érétrie aidèrent les cités rebelles." },
      { type: "mc", q: "Qui commandait les Grecs à Salamine ?", options: ["Thémistocle", "Miltiade", "Alcibiade"], answer: 0, explain: "Le stratège athénien Thémistocle." },
      { type: "tf", q: "À Marathon, ce sont les Perses qui ont gagné.", answer: false, explain: "Ce sont les Athéniens qui gagnèrent, en 490 av. J.-C." },
      { type: "text", q: "Comment s'appelle le navire de guerre grec à trois rangs de rameurs ?", answer: ["trière", "la trière", "triere", "trirème"], explain: "La trière." },
      { type: "mc", q: "Qu'était la ligue de Délos ?", options: ["Une alliance de cités de la mer Égée dirigée par Athènes", "Une alliance de Sparte", "Une association de marchands"], answer: 0, explain: "Fondée en 478-477 av. J.-C., elle devint un empire." },
      { type: "mc", q: "Quelle mesure de Périclès a permis aux pauvres de participer à la vie politique ?", options: ["Une indemnité pour les charges publiques", "L'abolition de l'esclavage", "Le droit de vote des femmes"], answer: 0, explain: "Le misthos." },
      { type: "order", q: "Range dans l'ordre chronologique.", items: ["Marathon", "Thermopyles et Salamine", "Ligue de Délos", "Début du Parthénon", "Guerre du Péloponnèse"], explain: "490, 480, 478, 447, 431 av. J.-C." },
      { type: "mc", q: "Quelle est l'issue de la guerre du Péloponnèse ?", options: ["Sparte gagne, Athènes perd ses murs et son empire", "Athènes gagne et conquiert Sparte", "La Perse gagne"], answer: 0, explain: "En 404 av. J.-C., Athènes capitule." },
      { type: "num", q: "En quelle année av. J.-C. a eu lieu la bataille de Marathon ?", answer: 490, tol: 0, explain: "490 av. J.-C." },
      { type: "tf", q: "La démocratie athénienne était ouverte aux femmes et aux esclaves.", answer: false, explain: "Seuls les citoyens hommes adultes votaient." },
      { type: "mc", q: "Quelle a été la cause de la mort de Périclès ?", options: ["La peste", "Une bataille", "L'ostracisme"], answer: 0, explain: "Il mourut de la peste en 429 av. J.-C." }
    ]
  }
});
