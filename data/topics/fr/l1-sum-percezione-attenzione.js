TOPIC('fr', {
  id: "l1-sum-percezione-attenzione",
  title: "Perception et attention",
  intro: "Tu penses voir le monde « tel qu'il est », comme une caméra. En réalité, le cerveau <b>construit</b> ce que nous voyons : il comble les vides, choisit, interprète, et parfois il se trompe. Dans cette leçon, tu découvriras la différence entre <b>sensation et perception</b>, les <b>lois de la Gestalt</b>, les <b>illusions d'optique</b> (Müller-Lyer, Ponzo, Kanizsa, le vase de Rubin) et le rôle de l'<b>attention</b>, avec des expériences célèbres comme le « gorille invisible » et l'effet Stroop.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Sensation et perception",
      html: `<p>Quand tu regardes un ami qui s'approche, deux processus travaillent ensemble :</p>
<ul>
<li>La <b>sensation</b> est l'<b>enregistrement des stimuli</b> par les organes des sens : la lumière frappe la rétine, les cellules sensibles (cônes et bâtonnets) la transforment en influx nerveux. C'est un processus « ascendant », physiologique.</li>
<li>La <b>perception</b> est l'<b>organisation et l'interprétation</b> de ces influx par le cerveau : nous reconnaissons « Luca » qui s'approche, et pas seulement des taches de couleur. C'est un processus qui dépend aussi de l'<b>expérience, des attentes, de la culture, des émotions</b> (« descendant »).</li>
</ul>
<p>La perception n'est pas une copie de la réalité, mais une <b>construction active</b>. La preuve : la <b>tache aveugle</b>. À l'endroit où le nerf optique sort de la rétine, il n'y a pas de cellules sensibles à la lumière, et pourtant nous ne voyons pas de « trou » dans le champ visuel, parce que le cerveau le comble à partir de ce qui l'entoure.</p>
<p>Un chercheur italien très important dans ce domaine est <b>Gaetano Kanizsa</b> (1913-1993), originaire de Trieste, héritier de la tradition gestaltiste, dont nous verrons le célèbre triangle.</p>`
    },
    {
      type: "svg",
      title: "Du monde au cerveau",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="15" y="100" width="120" height="90" rx="12" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="75" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">STIMULUS</text>
<text x="75" y="157" font-size="14" text-anchor="middle" fill="#0f172a">lumière, sons,</text>
<text x="75" y="175" font-size="14" text-anchor="middle" fill="#0f172a">odeurs...</text>
<rect x="170" y="100" width="120" height="90" rx="12" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="230" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">SENSATION</text>
<text x="230" y="157" font-size="14" text-anchor="middle" fill="#0f172a">organes des sens</text>
<text x="230" y="175" font-size="14" text-anchor="middle" fill="#0f172a">(rétine...)</text>
<rect x="325" y="100" width="120" height="90" rx="12" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="385" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">PERCEPTION</text>
<text x="385" y="157" font-size="14" text-anchor="middle" fill="#0f172a">organisation</text>
<text x="385" y="175" font-size="14" text-anchor="middle" fill="#0f172a">et sens</text>
<rect x="480" y="100" width="105" height="90" rx="12" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/>
<text x="532" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">RÉPONSE</text>
<text x="532" y="157" font-size="14" text-anchor="middle" fill="#0f172a">« C'est Luca ! »</text>
<polygon points="138,145 166,145 158,137" fill="#0f172a"/><line x1="135" y1="145" x2="166" y2="145" stroke="#0f172a" stroke-width="3"/>
<line x1="290" y1="145" x2="322" y2="145" stroke="#0f172a" stroke-width="3"/><polygon points="322,145 312,138 312,152" fill="#0f172a"/>
<line x1="445" y1="145" x2="477" y2="145" stroke="#0f172a" stroke-width="3"/><polygon points="477,145 467,138 467,152" fill="#0f172a"/>
<rect x="325" y="30" width="260" height="46" rx="10" fill="#fed7aa" stroke="#9a3412" stroke-width="2"/>
<text x="455" y="58" font-size="14" text-anchor="middle" fill="#0f172a">expérience, attentes, culture, émotions</text>
<line x1="385" y1="78" x2="385" y2="98" stroke="#9a3412" stroke-width="2" stroke-dasharray="5 4"/>
<text x="300" y="250" font-size="14" text-anchor="middle" fill="#0f172a">La perception est une interprétation : même sensation, perceptions différentes.</text>
</svg>`,
      caption: "La sensation est la matière brute ; la perception lui donne forme et sens."
    },
    {
      type: "text",
      title: "2. La Gestalt : nous percevons des formes, pas des morceaux",
      html: `<p>Au début du XX<sup>e</sup> siècle, en Allemagne, <b>Max Wertheimer</b> (1880-1943), <b>Wolfgang Köhler</b> et <b>Kurt Koffka</b> fondèrent la psychologie de la <b>Gestalt</b> (mot allemand qui signifie « forme, configuration »). En <b>1912</b>, Wertheimer publia ses études sur le <b>phénomène phi</b> : deux lumières fixes qui s'allument et s'éteignent en succession rapide sont perçues comme <b>une lumière qui se déplace</b> (c'est le principe du cinéma et des enseignes lumineuses). Le mouvement n'est pas dans les stimuli : c'est le cerveau qui l'« ajoute ». C'est pourquoi le tout est <b>différent de la somme des parties</b> : une mélodie reste la même si on la transpose dans une autre tonalité, même si toutes les notes ont changé.</p>
<p>Les gestaltistes décrivirent quelques <b>lois de l'organisation perceptive</b>, c'est-à-dire les critères selon lesquels le cerveau regroupe les stimuli :</p>
<ul>
<li><b>Figure et fond</b> : nous percevons toujours un objet qui « est devant » (la figure) sur un fond.</li>
<li><b>Proximité</b> : les éléments proches sont vus comme un groupe.</li>
<li><b>Similitude</b> : les éléments semblables (par la couleur, la forme) se regroupent.</li>
<li><b>Clôture</b> : nous avons tendance à compléter les figures ouvertes.</li>
<li><b>Continuité</b> : nous voyons des lignes qui se prolongent de façon régulière, plutôt que des lignes brisées.</li>
<li><b>Bonne forme</b> (ou prégnance) : parmi les interprétations possibles, nous choisissons la plus simple, régulière et symétrique.</li>
<li><b>Destin commun</b> : des éléments qui se déplacent ensemble sont vus comme une unité (un vol d'oiseaux).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Les lois de la Gestalt en un coup d'œil",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="100" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Proximité</text>
<g fill="#1e3a8a"><circle cx="40" cy="70" r="8"/><circle cx="64" cy="70" r="8"/><circle cx="88" cy="70" r="8"/><circle cx="130" cy="70" r="8"/><circle cx="154" cy="70" r="8"/><circle cx="178" cy="70" r="8"/><circle cx="40" cy="100" r="8"/><circle cx="64" cy="100" r="8"/><circle cx="88" cy="100" r="8"/><circle cx="130" cy="100" r="8"/><circle cx="154" cy="100" r="8"/><circle cx="178" cy="100" r="8"/></g>
<text x="100" y="140" font-size="14" text-anchor="middle" fill="#0f172a">deux groupes, pas 12 points</text>
<text x="300" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Similitude</text>
<g><circle cx="230" cy="70" r="9" fill="#dc2626"/><circle cx="260" cy="70" r="9" fill="#1e3a8a"/><circle cx="290" cy="70" r="9" fill="#dc2626"/><circle cx="320" cy="70" r="9" fill="#1e3a8a"/><circle cx="350" cy="70" r="9" fill="#dc2626"/><circle cx="380" cy="70" r="9" fill="#1e3a8a"/>
<circle cx="230" cy="100" r="9" fill="#dc2626"/><circle cx="260" cy="100" r="9" fill="#1e3a8a"/><circle cx="290" cy="100" r="9" fill="#dc2626"/><circle cx="320" cy="100" r="9" fill="#1e3a8a"/><circle cx="350" cy="100" r="9" fill="#dc2626"/><circle cx="380" cy="100" r="9" fill="#1e3a8a"/></g>
<text x="305" y="140" font-size="14" text-anchor="middle" fill="#0f172a">on voit des colonnes de couleur</text>
<text x="510" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Clôture</text>
<path d="M 450 100 A 40 40 0 1 1 470 112" fill="none" stroke="#166534" stroke-width="5" stroke-dasharray="10 8"/>
<text x="510" y="140" font-size="14" text-anchor="middle" fill="#0f172a">on voit un cercle</text>
<text x="150" y="176" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Figure et fond</text>
<rect x="60" y="190" width="180" height="90" fill="#0f172a"/>
<path d="M 110 280 L 110 235 Q 110 205 150 205 Q 190 205 190 235 L 190 280 Z" fill="#f8fafc"/>
<text x="400" y="176" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Le triangle de Kanizsa</text>
<g fill="#0f172a"><circle cx="400" cy="208" r="14"/><circle cx="362" cy="272" r="14"/><circle cx="438" cy="272" r="14"/></g>
<polygon points="400,208 362,272 438,272" fill="#ffffff"/>
<text x="520" y="240" font-size="14" text-anchor="middle" fill="#0f172a">on « voit » un</text>
<text x="520" y="258" font-size="14" text-anchor="middle" fill="#0f172a">triangle qui n'existe pas</text>
</svg>`,
      caption: "Le cerveau organise ce qu'il voit selon des règles : il regroupe, complète, simplifie."
    },
    {
      type: "example",
      title: "Les lois en action dans la vie de tous les jours",
      html: `<ul>
<li><b>Proximité</b> : sur une page web, des boutons rapprochés semblent appartenir à la même fonction.</li>
<li><b>Similitude</b> : avec les maillots, les joueurs qui portent la même tenue sont tout de suite vus comme une équipe.</li>
<li><b>Clôture</b> : le logo du WWF montre un panda construit avec des taches noires non reliées, mais nous voyons l'animal entier.</li>
<li><b>Destin commun</b> : dans une nuée d'étourneaux, des centaines de points qui bougent ensemble sont vus comme un seul « nuage ».</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Le triangle qui n'existe pas",
      html: `<p>En <b>1955</b>, Gaetano Kanizsa publia la figure du triangle qui porte son nom : trois « pac-man » et trois angles ouverts suggèrent un triangle blanc, qui semble même plus clair que le fond, avec des <b>contours illusoires</b> qui en réalité n'existent pas. C'est un exemple de <b>clôture</b> et de <b>bonne forme</b> : le cerveau préfère « expliquer » le dessin par un triangle superposé plutôt que par trois cercles incomplets.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : sensation, perception, Gestalt",
      questions: [
        { type: "mc", q: "Le processus par lequel le cerveau organise et interprète les données des sens est...", options: ["la sensation", "la perception", "l'attention sélective", "le conditionnement"], answer: 1, explain: "La sensation enregistre, la perception interprète." },
        { type: "mc", q: "Le phénomène phi de Wertheimer (1912) montre que...", options: ["le mouvement peut être perçu même s'il n'est pas dans le stimulus", "les couleurs n'existent pas", "la mémoire est infaillible", "l'attention est limitée"], answer: 0, explain: "Deux lumières alternées sont vues comme une lumière qui se déplace." },
        { type: "tf", q: "Selon la Gestalt, la perception est la simple somme de sensations élémentaires.", answer: false, explain: "Le tout est différent de la somme des parties : ce qui compte, ce sont les relations et l'organisation." }
      ]
    },
    {
      type: "text",
      title: "3. Les illusions d'optique et les constances perceptives",
      html: `<p>Les <b>illusions</b> sont des « erreurs » systématiques et partagées de la perception. Elles ne révèlent pas un cerveau qui fonctionne mal, mais les <b>critères</b> qu'il utilise pour interpréter le monde. Trois exemples classiques :</p>
<ul>
<li><b>Illusion de Müller-Lyer</b> (Franz Müller-Lyer, 1889) : deux segments égaux semblent de longueur différente s'ils se terminent par des flèches tournées vers l'intérieur ou vers l'extérieur.</li>
<li><b>Illusion de Ponzo</b> (Mario Ponzo, 1913) : deux segments égaux placés entre deux lignes convergentes (comme des rails) semblent différents ; celui qui paraît « plus loin » semble plus grand.</li>
<li><b>Vase de Rubin</b> (Edgar Rubin, 1915) : une image vue soit comme un vase, soit comme deux profils qui se regardent. Elle illustre la <b>réversibilité de la figure et du fond</b> : on ne peut pas voir les deux en même temps.</li>
</ul>
<p>Les illusions sont liées aux <b>constances perceptives</b> : nous continuons à percevoir un objet avec une taille, une forme et une couleur stables, même quand les conditions d'observation changent. Une personne qui s'éloigne projette une image de plus en plus petite sur la rétine, mais nous ne la voyons pas « rétrécir » : le cerveau compense avec la distance (<b>constance de taille</b>). Un livre vu de côté reste rectangulaire (<b>constance de forme</b>). Les illusions apparaissent quand ces mécanismes sont « trompés » par des indices trompeurs.</p>`
    },
    {
      type: "svg",
      title: "Müller-Lyer et Ponzo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="150" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Müller-Lyer</text>
<line x1="50" y1="80" x2="250" y2="80" stroke="#1e3a8a" stroke-width="4"/>
<line x1="50" y1="80" x2="75" y2="60" stroke="#1e3a8a" stroke-width="4"/><line x1="50" y1="80" x2="75" y2="100" stroke="#1e3a8a" stroke-width="4"/>
<line x1="250" y1="80" x2="225" y2="60" stroke="#1e3a8a" stroke-width="4"/><line x1="250" y1="80" x2="225" y2="100" stroke="#1e3a8a" stroke-width="4"/>
<line x1="50" y1="180" x2="250" y2="180" stroke="#dc2626" stroke-width="4"/>
<line x1="50" y1="180" x2="25" y2="160" stroke="#dc2626" stroke-width="4"/><line x1="50" y1="180" x2="25" y2="200" stroke="#dc2626" stroke-width="4"/>
<line x1="250" y1="180" x2="275" y2="160" stroke="#dc2626" stroke-width="4"/><line x1="250" y1="180" x2="275" y2="200" stroke="#dc2626" stroke-width="4"/>
<text x="150" y="240" font-size="14" text-anchor="middle" fill="#0f172a">Les deux segments ont la même longueur (200).</text>
<text x="450" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Ponzo</text>
<line x1="380" y1="270" x2="440" y2="40" stroke="#6b7280" stroke-width="3"/>
<line x1="540" y1="270" x2="470" y2="40" stroke="#6b7280" stroke-width="3"/>
<line x1="432" y1="85" x2="480" y2="85" stroke="#dc2626" stroke-width="6"/>
<line x1="450" y1="205" x2="498" y2="205" stroke="#1e3a8a" stroke-width="6"/>
<text x="450" y="290" font-size="14" text-anchor="middle" fill="#0f172a">Les deux segments sont égaux (48).</text>
</svg>`,
      caption: "Mesure avec une règle : dans les deux figures, les segments comparés sont égaux, mais le contexte nous trompe."
    },
    {
      type: "widget",
      title: "Associe le chercheur et la découverte",
      widget: "match",
      options: { pairs: [
        ["Wertheimer (1912)", "Phénomène phi"],
        ["Kanizsa (1955)", "Contours illusoires"],
        ["Rubin (1915)", "Vase / deux profils"],
        ["Müller-Lyer (1889)", "Segments avec flèches"],
        ["Ponzo (1913)", "Lignes convergentes"]
      ] },
      caption: "Relie chaque chercheur à sa contribution."
    },
    {
      type: "text",
      title: "4. L'attention : un projecteur limité",
      html: `<p>À chaque instant, nos sens reçoivent beaucoup plus d'informations que le cerveau ne peut en traiter. L'<b>attention</b> est le processus qui <b>sélectionne</b> certains stimuli et en ignore d'autres. C'est une ressource à <b>capacité limitée</b>.</p>
<ul>
<li><b>Attention sélective</b> : se concentrer sur un stimulus en excluant les autres. Exemple : l'<b>« effet cocktail party »</b> étudié par Colin Cherry (1953) : dans une pièce bruyante, nous suivons une seule conversation, mais si quelqu'un prononce notre prénom, nous le remarquons même si nous ne l'écoutions pas. Donald Broadbent proposa (1958) le modèle du <b>filtre</b> : un « goulot d'étranglement » ne laisse passer que les informations choisies (des modèles ultérieurs, comme celui de Treisman, admettent un filtre plus « nuancé » où les stimuli importants passent malgré tout).</li>
<li><b>Attention soutenue</b> (vigilance) : maintenir la concentration longtemps, comme pendant un cours.</li>
<li><b>Attention partagée</b> (ou divisée) : essayer de faire plusieurs choses à la fois. Cela ne marche que si l'une des tâches est <b>automatisée</b> (marcher et parler), pas si les deux demandent des ressources (conduire et écrire un message).</li>
</ul>
<p>On peut diriger l'attention de façon <b>volontaire</b> (« descendante », c'est moi qui décide) ou elle peut être <b>captée</b> par des stimuli forts (un bruit soudain, une couleur vive : « ascendante »).</p>`
    },
    {
      type: "example",
      title: "Le gorille invisible (Simons et Chabris, 1999)",
      html: `<p>Daniel Simons et Christopher Chabris montrèrent à des volontaires un court film dans lequel deux équipes de joueurs, l'une en maillot blanc et l'autre en maillot noir, se passaient un ballon de basket. La consigne était de <b>compter les passes</b> de l'équipe blanche. Au milieu de la vidéo, une personne déguisée en <b>gorille</b> traversait la scène, se frappait la poitrine et sortait, en restant visible environ neuf secondes.</p>
<p>Résultat : environ <b>la moitié</b> des participants, concentrés sur la tâche, <b>ne remarquèrent pas le gorille</b>. Ce phénomène s'appelle la <b>cécité attentionnelle</b> (<i>inattentional blindness</i>) : si l'attention est occupée ailleurs, nous pouvons ne pas voir ce qui passe sous nos yeux. Cela explique pourquoi un conducteur distrait par un message peut « ne pas voir » un piéton.</p>`
    },
    {
      type: "curiosity",
      title: "L'effet Stroop",
      html: `<p>En 1935, John Ridley Stroop montra que nommer la <b>couleur de l'encre</b> est plus lent quand le mot écrit désigne une autre couleur (par exemple le mot ROUGE écrit en bleu). Lire est tellement automatique que cela interfère avec la tâche : l'attention doit <b>inhiber</b> la réponse automatique. Le test de Stroop est encore utilisé pour évaluer le contrôle attentionnel.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre l'attention et la perception",
      intro: "Si ces notions restent abstraites, essaie de les regarder sous un autre angle.",
      tabs: [
        { label: "🔦 Le projecteur", html: `<p>L'attention est comme le <b>faisceau d'une lampe de poche</b> dans une pièce obscure : elle éclaire bien un point et laisse le reste dans l'ombre. Tu peux la déplacer (attention sélective), la garder longtemps immobile (soutenue) ou essayer d'éclairer deux points avec un faisceau élargi (partagée), mais tu perds en netteté.</p>` },
        { label: "🎬 Le réalisateur", html: `<p>La perception est comme un <b>réalisateur</b> qui monte un film à partir de prises incomplètes : il choisit les scènes, comble les trous (tache aveugle, clôture), garde la cohérence (constances). C'est pourquoi deux spectateurs peuvent « monter » le même matériau de façon différente, selon leurs expériences et leurs attentes.</p>` },
        { label: "👉 À toi d'essayer", html: `<p>Ferme l'œil gauche et fixe avec l'œil droit une croix dessinée à gauche d'une feuille, en tenant la feuille à environ 30-40 cm ; place à droite, à une dizaine de centimètres, un point noir. En rapprochant ou en éloignant la feuille, le point va <b>disparaître</b> : il tombe dans ta tache aveugle. Le cerveau comble le vide avec le fond.</p>` }
      ]
    },
    {
      type: "decision",
      title: "Un message en conduisant ?",
      html: `<p>Tu es en scooter et tu reçois une notification. Tu sais que l'attention est une ressource limitée, mais tu penses : « Ça va prendre une seconde, de toute façon je conduis en automatique ».</p>`,
      question: "Que vaut-il mieux faire, d'après les données de la psychologie ?",
      options: [
        { label: "Répondre vite : conduire est devenu automatique.", outcome: "Conduire n'est automatique que dans des conditions prévisibles. Il suffit d'un imprévu (un piéton, un freinage) alors que tes ressources attentionnelles sont occupées par la lecture : le risque de cécité attentionnelle augmente énormément." },
        { label: "Attendre d'être arrêté dans un endroit sûr.", outcome: "C'est le bon choix : l'attention partagée entre deux tâches complexes dégrade les deux." },
        { label: "Répondre à voix haute avec le kit mains libres : comme ça, on ne regarde pas l'écran.", outcome: "C'est moins risqué que d'écrire, mais une conversation mobilise aussi des ressources cognitives et réduit la capacité à remarquer les imprévus." }
      ],
      answer: 1,
      explain: "Les études sur l'attention montrent que le <b>multitâche</b> avec des tâches non automatiques est en réalité un passage continu d'une tâche à l'autre, avec un coût en temps et en erreurs. L'expérience du gorille invisible montre aussi que celui qui est concentré sur autre chose ne voit pas ce qui est devant lui."
    },
    {
      type: "conceptMap",
      title: "Carte : perception et attention",
      nodes: [
        { id: "sens", label: "Sensation", x: 15, y: 10, color: "#3b82f6", html: "Enregistrement des stimuli par les organes des sens.", why: "Elle dépend de la physiologie : cônes et bâtonnets dans la rétine, récepteurs de l'oreille, de la peau. Sans sensation, il n'y a pas de matériau sur lequel travailler." },
        { id: "perc", label: "Perception", x: 50, y: 10, color: "#10b981", html: "Organisation et interprétation des stimuli.", why: "Le cerveau doit choisir une interprétation : les données des sens sont ambiguës (une image 2D sur la rétine peut correspondre à une infinité de scènes 3D). C'est pourquoi il utilise des règles et des connaissances." },
        { id: "gest", label: "Lois de la Gestalt", x: 85, y: 10, color: "#f59e0b", html: "Proximité, similitude, clôture, continuité, bonne forme, destin commun.", why: "Wertheimer, Köhler et Koffka (à partir de 1912) observèrent que l'organisation perceptive est spontanée et suit des principes de simplicité et de régularité : ce sont des raccourcis utiles pour comprendre vite le monde." },
        { id: "ill", label: "Illusions", x: 85, y: 50, color: "#ef4444", html: "Müller-Lyer, Ponzo, Kanizsa, Rubin.", why: "Elles naissent quand des indices trompeurs activent des mécanismes qui d'habitude fonctionnent bien (comme les constances perceptives). Elles révèlent les règles cachées de la perception." },
        { id: "att", label: "Attention", x: 50, y: 50, color: "#8b5cf6", html: "Sélection des stimuli : sélective, soutenue, partagée.", why: "Les ressources de traitement sont limitées (Broadbent, 1958) : sans filtre, nous serions submergés d'informations. Le prix à payer, c'est que ce que nous ne sélectionnons pas peut nous échapper (gorille invisible)." },
        { id: "cec", label: "Cécité attentionnelle", x: 20, y: 80, color: "#ec4899", html: "Ne pas voir ce qui est visible parce que l'attention est ailleurs.", why: "Simons et Chabris (1999) : la moitié des participants ne voient pas un gorille. Cela montre que voir n'est pas passif, mais dépend de ce que nous cherchons." }
      ],
      edges: [["sens", "perc", "alimente"], ["perc", "gest", "suit"], ["gest", "ill", "en révèle les limites"], ["att", "perc", "oriente"], ["att", "cec", "si limitée, provoque"]]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Sensation = <b>enregistrer</b> ; perception = <b>interpréter</b>.</li>
<li>La Gestalt (1912, Wertheimer, Köhler, Koffka) : le <b>tout</b> n'est pas la somme des parties.</li>
<li>Les illusions montrent les <b>règles</b> de la perception, pas un défaut.</li>
<li>L'attention est <b>limitée</b> : le multitâche est une illusion si les tâches ne sont pas automatiques.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : illusions et attention",
      questions: [
        { type: "mc", q: "Dans l'expérience du gorille invisible, les participants devaient...", options: ["compter les passes d'une équipe", "reconnaître des visages", "retenir des couleurs", "résoudre des devinettes"], answer: 0, explain: "La tâche de comptage occupait l'attention." },
        { type: "tf", q: "Le vase de Rubin illustre la réversibilité de la figure et du fond.", answer: true, explain: "On voit soit le vase, soit deux profils, jamais les deux en même temps." },
        { type: "mc", q: "L'« effet cocktail party » est un exemple d'attention...", options: ["sélective", "partagée", "soutenue", "absente"], answer: 0, explain: "Nous suivons une seule conversation en écartant les autres, mais nous restons sensibles à notre prénom." }
      ]
    }
  ],
  glossary: [
    { t: "Sensation", d: "Enregistrement des stimuli par les organes des sens." },
    { t: "Perception", d: "Organisation et interprétation des sensations par le cerveau." },
    { t: "Gestalt", d: "« Forme » : école qui étudie l'organisation perceptive en totalités structurées." },
    { t: "Figure et fond", d: "Distinction perceptive entre l'objet au premier plan et ce qui se trouve derrière lui." },
    { t: "Phénomène phi", d: "Illusion de mouvement produite par des lumières qui s'allument successivement (Wertheimer, 1912)." },
    { t: "Constance perceptive", d: "Capacité à percevoir comme stables la taille, la forme, la couleur d'un objet quand les conditions changent." },
    { t: "Illusion d'optique", d: "Erreur perceptive systématique et partagée." },
    { t: "Attention sélective", d: "Capacité à se concentrer sur certains stimuli en ignorant les autres." },
    { t: "Cécité attentionnelle", d: "Absence de perception d'un stimulus visible parce que l'attention est ailleurs." },
    { t: "Effet Stroop", d: "Interférence entre la lecture automatique et la dénomination de la couleur de l'encre (1935)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qu'est-ce qui distingue la perception de la sensation ?", options: ["La perception interprète et organise les stimuli", "La perception n'a lieu que dans les rêves", "La sensation dépend de la culture, la perception non", "C'est la même chose"], answer: 0, explain: "La sensation enregistre, la perception donne forme et sens." },
      { type: "tf", q: "La tache aveugle de la rétine est un trou que nous voyons noir dans le champ visuel.", answer: false, explain: "Le cerveau comble le vide avec l'information environnante, donc nous ne la voyons pas." },
      { type: "mc", q: "Qui publia en 1912 les études sur le phénomène phi ?", options: ["Kanizsa", "Wertheimer", "Stroop", "Broadbent"], answer: 1, explain: "Max Wertheimer, fondateur de la Gestalt." },
      { type: "mc", q: "Une série de points vus comme deux groupes séparés illustre la loi de...", options: ["proximité", "clôture", "destin commun", "figure-fond"], answer: 0, explain: "Les éléments proches sont regroupés." },
      { type: "text", q: "Comment s'appelle l'illusion avec deux segments égaux qui se terminent par des flèches tournées vers l'intérieur ou vers l'extérieur ?", answer: ["muller-lyer", "müller-lyer", "illusion de muller-lyer", "illusion de müller-lyer"], explain: "C'est l'illusion de Müller-Lyer (1889)." },
      { type: "mc", q: "Le « gorille invisible » démontre la...", options: ["cécité attentionnelle", "constance de forme", "loi de clôture", "mémoire à court terme"], answer: 0, explain: "Celui qui est concentré sur une tâche peut ne pas voir un stimulus inattendu." },
      { type: "mc", q: "Le modèle du filtre (Broadbent, 1958) affirme que...", options: ["un goulot d'étranglement sélectionne les informations à traiter", "tous les stimuli sont traités jusqu'au bout", "l'attention n'a pas de limites", "la perception est innée"], answer: 0, explain: "Un filtre ne laisse passer qu'une partie de l'information." },
      { type: "tf", q: "Le multitâche fonctionne bien même entre deux tâches qui demandent toutes les deux de la concentration.", answer: false, explain: "L'attention est limitée : on passe d'une tâche à l'autre, avec un coût en temps et en erreurs." },
      { type: "order", q: "Remets dans l'ordre chronologique.", items: ["Illusion de Müller-Lyer", "Phénomène phi de Wertheimer", "Vase de Rubin", "Triangle de Kanizsa"], explain: "1889, 1912, 1915, 1955." },
      { type: "mc", q: "L'effet Stroop montre que...", options: ["une réponse automatique (lire) peut interférer avec la tâche demandée", "tout le monde perçoit les couleurs de la même façon", "la mémoire est limitée", "les enfants perçoivent mieux que les adultes"], answer: 0, explain: "Lire est automatique et interfère avec la dénomination de la couleur de l'encre." }
    ]
  }
});
