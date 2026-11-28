TOPIC('fr', {
  id: "l2-sci-evoluzione-classificazione",
  title: "Évolution et classification",
  intro: "Sur Terre vivent aujourd'hui quelques millions d'espèces décrites, et probablement beaucoup d'autres encore inconnues, qui descendent toutes d'ancêtres communs. Comment naissent de nouvelles espèces ? Et comment mettre de l'ordre dans une telle variété ? Au collège, tu as rencontré Darwin et la sélection naturelle : nous les reprenons ici de façon plus rigoureuse, avec la <b>génétique des populations</b> et la <b>synthèse moderne</b>, puis nous voyons comment les biologistes <b>classent</b> les êtres vivants en domaines et en règnes, en suivant leur parenté évolutive.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Rappel : Darwin et la sélection naturelle",
      html: `<p>En <b>1859</b>, Charles Darwin, dans <i>L'Origine des espèces</i> (et, indépendamment, Alfred Russel Wallace), proposa que les espèces se transforment au cours du temps et descendent d'ancêtres communs, et que le mécanisme principal en est la <b>sélection naturelle</b>. Elle repose sur quatre observations :</p>
<ol>
<li>les individus d'une population <b>varient</b> entre eux ;</li>
<li>beaucoup de ces variations sont <b>héréditaires</b> ;</li>
<li>il naît plus d'individus que le milieu ne peut en nourrir : il y a <b>compétition</b> pour les ressources ;</li>
<li>les individus aux caractères les plus avantageux dans ce milieu <b>survivent et se reproduisent davantage</b> : ces caractères deviennent plus fréquents dans les générations suivantes.</li>
</ol>
<p>Darwin ne connaissait ni l'origine de la variabilité ni les lois de l'hérédité (les travaux de Mendel, 1866, restèrent ignorés jusqu'en 1900). La <b>théorie synthétique de l'évolution</b> (ou synthèse moderne, années 1930-1940, avec Fisher, Haldane, Wright, Dobzhansky, Mayr, Simpson) les a réunis : <b>évolution = changement des fréquences alléliques d'une population au fil des générations</b>. Attention : c'est la <b>population</b> qui évolue, pas l'individu, et la sélection n'a pas de but et ne « conçoit » rien : elle favorise ce qui, <i>à ce moment-là et dans ce milieu</i>, fonctionne le mieux.</p>`
    },
    {
      type: "text",
      title: "Les sources de la variabilité et les facteurs de l'évolution",
      html: `<p>Le <b>pool génique</b> d'une population est l'ensemble de tous les allèles qui y sont présents. Sa composition peut changer pour cinq raisons principales :</p>
<ul>
<li>Les <b>mutations</b> : des modifications aléatoires de l'ADN (substitutions d'une base, insertions, délétions). Elles sont la source première des nouveaux allèles. Elles sont <b>aléatoires par rapport aux besoins</b> : le milieu ne « demande » pas la mutation, mais il en retient certaines parmi celles qui existent. Chez l'être humain, on estime à une trentaine le nombre de nouvelles mutations par génome à chaque génération.</li>
<li>La <b>recombinaison sexuée</b> (crossing-over, assortiment indépendant, fécondation) : elle brasse les allèles existants.</li>
<li>La <b>sélection naturelle</b> : survie et reproduction différentielles. Ce qui compte, c'est la <b>valeur sélective</b> (fitness), c'est-à-dire le succès reproducteur : combien de descendants fertiles un individu laisse.</li>
<li>La <b>dérive génétique</b> : des variations des fréquences alléliques dues au seul hasard, importantes surtout dans les petites populations. Les cas typiques sont l'<b>effet goulot d'étranglement</b> (population réduite brutalement par une catastrophe, comme les guépards, génétiquement très homogènes) et l'<b>effet fondateur</b> (quelques individus colonisent une île).</li>
<li>Le <b>flux génique</b> : migration d'individus, donc d'allèles, entre populations ; il tend à rendre les populations plus semblables.</li>
</ul>
<p>La sélection naturelle peut prendre trois formes :</p>
<table>
<tr><th>Type</th><th>Ce qu'elle favorise</th><th>Exemple</th></tr>
<tr><td><b>Directionnelle</b></td><td>un extrême du caractère</td><td>résistance aux pesticides ou aux antibiotiques ; becs plus grands chez les pinsons des Galápagos les années de sécheresse (Peter et Rosemary Grant)</td></tr>
<tr><td><b>Stabilisante</b></td><td>les valeurs intermédiaires</td><td>le poids de naissance des nouveau-nés : les bébés trop petits ou trop gros courent plus de risques</td></tr>
<tr><td><b>Diversifiante (disruptive)</b></td><td>les deux extrêmes</td><td>becs grands ou petits, mais pas moyens, chez certains oiseaux africains qui mangent des graines dures et des graines tendres</td></tr>
</table>
<p>Il existe aussi la <b>sélection sexuelle</b> : des caractères comme la queue du paon ou les bois des cerfs se répandent parce qu'ils augmentent le succès dans l'accouplement, même s'ils réduisent la survie.</p>`
    },
    {
      type: "example",
      title: "Hardy-Weinberg : mesurer l'évolution avec les mathématiques",
      html: `<p>En 1908, le mathématicien <b>Godfrey Hardy</b> et le médecin <b>Wilhelm Weinberg</b> démontrèrent indépendamment un principe important. Dans une grande population, où les accouplements se font au hasard, sans mutations, ni migration, ni sélection, les fréquences des allèles restent constantes. Si, pour un gène à deux allèles, <b>A</b> (fréquence <i>p</i>) et <b>a</b> (fréquence <i>q</i>), on a p + q = 1, les fréquences des génotypes sont :</p>
<p style="text-align:center"><b>p² (AA) + 2pq (Aa) + q² (aa) = 1</b></p>
<p>Si les valeurs observées s'écartent de celles-ci, cela signifie que l'une des conditions n'est pas remplie et que la population <b>est en train d'évoluer</b>.</p>
<p><b>Application.</b> La mucoviscidose est une maladie récessive (aa) qui touche en Europe environ 1 personne sur 2500.</p>
<ol>
<li>q² = 1/2500 = 0,0004, donc q = √0,0004 = <b>0,02</b> ;</li>
<li>p = 1 − 0,02 = <b>0,98</b> ;</li>
<li>porteurs sains (Aa) : 2pq = 2 × 0,98 × 0,02 ≈ <b>0,039</b>, soit environ <b>4 %</b>, une personne sur 25.</li>
</ol>
<p>Presque tous les allèles « a » sont cachés chez des hétérozygotes sains : c'est pourquoi un allèle récessif nuisible disparaît très lentement.</p>`
    },
    {
      type: "example",
      title: "Lire un nom scientifique",
      html: `<p>Le nom binominal t'indique déjà qui est parent de qui. <i>Panthera leo</i> (lion) et <i>Panthera tigris</i> (tigre) partagent le genre <i>Panthera</i> : ils sont plus proches l'un de l'autre que du chat domestique, <i>Felis catus</i>, qui appartient à un autre genre (mais à la même famille, les Felidae). Le loup <i>Canis lupus</i> et le chien <i>Canis lupus familiaris</i> sont même la même espèce (le chien est une sous-espèce domestique), et ils se croisent d'ailleurs en donnant une descendance fertile ; le renard roux, <i>Vulpes vulpes</i>, est dans la même famille (Canidae) mais dans un autre genre, et il ne se croise pas avec le chien. Reconnaître le genre aide à comprendre le degré de parenté bien mieux que les noms communs : la baleine, par exemple, est un mammifère, alors que l'hippocampe est un poisson, malgré son aspect et son nom.</p>`
    },
    {
      type: "decision",
      title: "Antibiotiques : que se passe-t-il si tu arrêtes le traitement à mi-chemin ?",
      html: `<p>Un patient a une infection bactérienne. Après 3 jours d'antibiotique, sur les 7 prévus, il se sent mieux et pense arrêter.</p>`,
      question: "Du point de vue de l'évolution, que peut-il se passer ?",
      options: [
        { label: "Rien : les bactéries restantes sont mortes de toute façon.", outcome: "Non : ce sont justement les bactéries un peu moins sensibles au médicament qui survivent." },
        { label: "Les bactéries les moins sensibles survivent, se reproduisent et transmettent la résistance.", outcome: "C'est la sélection naturelle à l'œuvre : l'antibiotique élimine les bactéries sensibles et laisse celles qui portent des mutations de résistance." },
        { label: "Les antibiotiques font muter les bactéries et les rendent résistantes.", outcome: "Non : les mutations de résistance sont aléatoires et préexistantes ; le médicament ne les provoque pas, il les sélectionne." }
      ],
      answer: 1,
      explain: "Les bactéries se reproduisent en quelques minutes ou quelques heures : un seul individu porteur d'une mutation de résistance, jusque-là sans importance, possède en présence du médicament un énorme avantage et laisse de nombreux descendants. C'est pourquoi les antibiotiques ne doivent être pris que sur prescription et pendant toute la durée indiquée ; la résistance aux antimicrobiens est l'une des grandes urgences sanitaires mondiales."
    },
    {
      type: "quiz",
      title: "Mini-quiz : les mécanismes de l'évolution",
      questions: [
        { type: "mc", q: "Qu'est-ce qui évolue, selon la théorie synthétique ?", options: ["L'individu", "La population, par changement des fréquences alléliques", "L'espèce entière de façon coordonnée"], answer: 1, explain: "Les individus ne modifient pas leur ADN pour s'adapter : c'est la composition génétique de la population qui change." },
        { type: "num", q: "Dans une population à l'équilibre de Hardy-Weinberg, q = 0,1. Combien vaut p ?", answer: 0.9, tol: 0.001, explain: "p + q = 1, donc p = 0,9." },
        { type: "tf", q: "La dérive génétique a des effets plus forts dans les petites populations.", answer: true, explain: "Les fluctuations dues au hasard pèsent beaucoup plus lorsque peu d'individus se reproduisent." }
      ]
    },
    {
      type: "text",
      title: "Qu'est-ce qu'une espèce, et comment en naissent de nouvelles",
      html: `<p>Selon le <b>concept biologique d'espèce</b> d'<b>Ernst Mayr</b> (1942), une espèce est un ensemble de populations naturelles qui peuvent se croiser entre elles et produire une descendance <b>fertile</b>, et qui sont isolées sur le plan reproductif des autres populations. Ce concept est utile pour les animaux, mais pas pour les bactéries ou les organismes à reproduction asexuée, ni pour les fossiles, pour lesquels on utilise d'autres critères (morphologie, ADN).</p>
<p>Une nouvelle espèce naît par <b>spéciation</b>, c'est-à-dire lorsque deux populations développent un <b>isolement reproductif</b> :</p>
<ul>
<li><b>Spéciation allopatrique</b> (« autre patrie ») : une barrière géographique (un bras de mer, une chaîne de montagnes, un fleuve qui change de cours) sépare une population en deux. N'échangeant plus d'allèles, les deux groupes accumulent des mutations différentes et subissent des sélections différentes (et de la dérive). S'ils se retrouvent, ils ne se croisent plus. C'est le cas le plus courant ; exemples classiques : les <b>pinsons de Darwin</b> des Galápagos, descendants d'une seule espèce venue du continent, aux becs différents adaptés à des nourritures différentes, et les cichlidés des lacs africains.</li>
<li><b>Spéciation sympatrique</b> : la nouvelle espèce naît sur le même territoire, sans barrière. Chez les plantes, elle est fréquente par <b>polyploïdie</b> (des erreurs de méiose qui produisent des gamètes au nombre de chromosomes doublé : le blé tendre est hexaploïde, 6n = 42) ou par spécialisation écologique.</li>
</ul>
<p>Les <b>barrières reproductives</b> peuvent être <b>prézygotiques</b> (elles empêchent la formation du zygote : parades nuptiales différentes, périodes de floraison différentes, organes génitaux incompatibles) ou <b>postzygotiques</b> (l'hybride naît mais ne survit pas ou est stérile : le <b>mulet</b>, hybride d'un âne et d'une jument, a 63 chromosomes et ne peut pas produire de gamètes normaux).</p>
<p>Deux autres phénomènes importants : l'<b>évolution convergente</b> (des espèces éloignées développent des caractères semblables parce qu'elles subissent des pressions semblables : les ailes des insectes, des oiseaux et des chauves-souris, ou la forme hydrodynamique des requins et des dauphins) et la <b>radiation adaptative</b> (un ancêtre donne de nombreuses espèces qui occupent des niches différentes : les mammifères après l'extinction des dinosaures, il y a 66 millions d'années).</p>`
    },
    {
      type: "widget",
      title: "L'histoire de la vie sur Terre (échelle logarithmique)",
      widget: "timeline",
      options: { scale: "log", unit: "ans", events: [
        { year: -4540000000, label: "Formation de la Terre", icon: "🌍" },
        { year: -3800000000, label: "Premières cellules (procaryotes)", icon: "🦠" },
        { year: -2400000000, label: "Photosynthèse oxygénique : de l'oxygène dans l'atmosphère", icon: "🫧" },
        { year: -1800000000, label: "Premières cellules eucaryotes", icon: "🔬" },
        { year: -541000000, label: "Explosion cambrienne", icon: "🦐" },
        { year: -375000000, label: "Les vertébrés vers la terre ferme", icon: "🐟" },
        { year: -252000000, label: "Extinction de la fin du Permien", icon: "🌋" },
        { year: -66000000, label: "Extinction des dinosaures non aviens", icon: "☄️" },
        { year: -300000, label: "Homo sapiens", icon: "🧑" }
      ] },
      caption: "Sur l'échelle logarithmique, chaque graduation correspond à un facteur 10 : on voit ainsi ensemble des milliards et des milliers d'années."
    },
    {
      type: "text",
      title: "Classer les êtres vivants : de Linné aux domaines",
      html: `<p>Mettre de l'ordre parmi des millions d'espèces est la tâche de la <b>systématique</b> (ou taxonomie). Le père de la taxonomie moderne est le Suédois <b>Carl von Linné</b>, qui, dans le <i>Systema Naturae</i> (première édition 1735, dixième édition 1758 pour les animaux), introduisit deux idées fondamentales.</p>
<ul>
<li>La <b>nomenclature binominale</b> : chaque espèce porte un nom latin en deux parties, le <b>genre</b> (avec majuscule) + l'<b>épithète spécifique</b> (en minuscule), en italique : <i>Homo sapiens</i>, <i>Canis lupus</i> (loup), <i>Canis lupus familiaris</i> (chien domestique), <i>Quercus robur</i> (chêne pédonculé). Elle évite les ambiguïtés des noms vernaculaires (qui changent d'une langue à l'autre et même d'une région à l'autre).</li>
<li>Une <b>hiérarchie de catégories emboîtées (taxons)</b> : de la plus large à la plus précise : <b>domaine, règne, embranchement (phylum), classe, ordre, famille, genre, espèce</b>. Chaque groupe contient des groupes plus petits, comme des poupées russes.</li>
</ul>
<p><b>Exemple : la classification de l'être humain.</b> Domaine Eukarya → règne Animalia → embranchement Chordata → classe Mammalia → ordre Primates → famille Hominidae → genre <i>Homo</i> → espèce <i>Homo sapiens</i>.</p>
<p>Linné classait d'après la <b>ressemblance</b> observable. Après Darwin, la classification obéit à un critère plus profond : elle doit refléter la <b>parenté évolutive</b> (la <b>phylogénie</b>). L'Allemand <b>Willi Hennig</b> (années 1950) fonda la <b>cladistique</b> : les groupes valables sont les <b>clades</b>, ou groupes <b>monophylétiques</b>, formés d'un ancêtre et de <b>tous</b> ses descendants. On construit des arbres (<b>cladogrammes</b>) à partir des <b>caractères dérivés partagés</b> (homologies) et, aujourd'hui, surtout en comparant les séquences d'ADN et de protéines. Une conséquence surprenante : les oiseaux sont des dinosaures théropodes, donc les « reptiles » traditionnels ne forment pas un groupe monophylétique ; les crocodiles sont plus proches des oiseaux que des lézards.</p>`
    },
    {
      type: "svg",
      title: "Un arbre phylogénétique simplifié des vertébrés",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#334155" stroke-width="4" fill="none">
<line x1="40" y1="150" x2="140" y2="150"/>
<line x1="140" y1="60" x2="140" y2="240"/>
<line x1="140" y1="60" x2="400" y2="60"/>
<line x1="140" y1="240" x2="190" y2="240"/>
<line x1="190" y1="150" x2="190" y2="240"/>
<line x1="190" y1="150" x2="250" y2="150"/>
<line x1="250" y1="110" x2="250" y2="190"/>
<line x1="250" y1="110" x2="400" y2="110"/>
<line x1="250" y1="190" x2="320" y2="190"/>
<line x1="320" y1="160" x2="320" y2="220"/>
<line x1="320" y1="160" x2="400" y2="160"/>
<line x1="320" y1="220" x2="400" y2="220"/>
<line x1="190" y1="270" x2="400" y2="270"/>
<line x1="190" y1="240" x2="190" y2="270"/>
</g>
<g font-size="16" font-weight="bold" fill="#0f172a">
<text x="410" y="66">Poissons cartilagineux (requins)</text>
<text x="410" y="116">Poissons osseux (truite)</text>
<text x="410" y="166">Amphibiens (grenouille)</text>
<text x="410" y="226">Reptiles et oiseaux</text>
<text x="410" y="276">Mammifères</text>
</g>
<g fill="#ef4444"><circle cx="140" cy="150" r="7"/><circle cx="190" cy="240" r="7"/><circle cx="250" cy="190" r="7"/><circle cx="320" cy="190" r="7"/></g>
<text x="20" y="30" font-size="14" fill="#475569">Chaque nœud (cercle rouge) est un ancêtre commun.</text>
<text x="20" y="290" font-size="14" fill="#475569">Structure simplifiée : les branches ne sont pas à l'échelle du temps.</text>
</svg>`,
      caption: "Arbre simplifié : les nœuds sont des ancêtres communs ; il n'y a pas d'« espèces plus évoluées », mais des groupes plus ou moins apparentés."
    },
    {
      type: "text",
      title: "Les domaines et les règnes du vivant",
      html: `<p>En <b>1969</b>, <b>Robert Whittaker</b> proposa cinq règnes : Monères, Protistes, Champignons, Plantes, Animaux. En <b>1977</b>, <b>Carl Woese</b>, en comparant l'ARN ribosomique, montra que les procaryotes comprennent deux lignées évolutives très différentes : c'est ainsi que naquit le système des <b>trois domaines</b> :</p>
<table>
<tr><th>Domaine</th><th>Caractéristiques</th><th>Exemples</th></tr>
<tr><td><b>Bacteria</b></td><td>procaryotes unicellulaires, paroi de peptidoglycane</td><td><i>Escherichia coli</i>, cyanobactéries, streptocoques</td></tr>
<tr><td><b>Archaea</b></td><td>procaryotes aux membranes et aux gènes plus proches de ceux des eucaryotes ; souvent dans des milieux extrêmes (sources chaudes, marais salants, milieux sans oxygène)</td><td>méthanogènes, <i>Halobacterium</i></td></tr>
<tr><td><b>Eukarya</b></td><td>cellules avec noyau et organites</td><td>protistes, champignons, plantes, animaux</td></tr>
</table>
<p>Parmi les <b>eucaryotes</b>, on distingue :</p>
<ul>
<li>Les <b>protistes</b> : groupe hétérogène et non monophylétique d'eucaryotes pour la plupart unicellulaires (amibes, paramécie, algues unicellulaires, plasmodium du paludisme). Certains sont autotrophes, d'autres hétérotrophes.</li>
<li>Les <b>champignons</b> : eucaryotes <b>hétérotrophes par absorption</b> (ils sécrètent des enzymes et absorbent les nutriments), à paroi de <b>chitine</b> ; organisés en <b>hyphes</b> qui forment le <b>mycélium</b> ; levures, moisissures, champignons à chapeau. Ils sont plus proches des animaux que des plantes.</li>
<li>Les <b>plantes</b> : pluricellulaires, <b>autotrophes</b> (photosynthèse), à paroi de cellulose : mousses, fougères, gymnospermes (conifères, à graines nues), angiospermes (plantes à fleurs et à fruits).</li>
<li>Les <b>animaux</b> : pluricellulaires, <b>hétérotrophes par ingestion</b>, sans paroi, le plus souvent mobiles ; éponges, cnidaires, vers, mollusques, arthropodes (le groupe le plus nombreux : plus de 80 % des espèces animales décrites), échinodermes, cordés (dont les vertébrés).</li>
</ul>
<p>On estime que les espèces décrites sont environ 2 millions ; celles qui existent pourraient être 8 à 10 millions (ou beaucoup plus si l'on compte les micro-organismes). Les <b>virus</b> n'entrent dans aucun domaine, car ce ne sont pas des cellules.</p>`
    },
    {
      type: "widget",
      title: "À quel règne appartient-il ?",
      widget: "classify",
      options: { groups: ["Animaux", "Plantes", "Champignons", "Bactéries/Archées", "Protistes"], items: [
        ["Levure de bière", 2],
        ["Paramécie", 4],
        ["Sapin", 1],
        ["Méduse", 0],
        ["Escherichia coli", 3],
        ["Cèpe", 2],
        ["Algue verte unicellulaire (Chlamydomonas)", 4],
        ["Fougère", 1],
        ["Araignée", 0],
        ["Méthanogène des marais", 3]
      ] },
      caption: "Rappel : un champignon n'est pas une plante (il ne fait pas de photosynthèse et sa paroi est en chitine), et une méduse est un animal."
    },
    {
      type: "3d",
      title: "Tous les êtres vivants sont apparentés : une molécule en commun",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0, z: 0, r: 0.45, color: "#ef4444", label: "ATP : ribose" },
          { x: 0.9, y: 0.4, z: 0, r: 0.4, color: "#f59e0b", label: "phosphate" },
          { x: 1.8, y: 0.1, z: 0.3, r: 0.4, color: "#f59e0b", label: "phosphate" },
          { x: 2.7, y: 0.5, z: 0, r: 0.4, color: "#f59e0b", label: "phosphate" },
          { x: -0.9, y: -0.4, z: 0, r: 0.45, color: "#3b82f6", label: "adénine" }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [0, 4]]
      },
      caption: "Le schéma de l'ATP (adénosine triphosphate) est le même chez les bactéries, les champignons, les plantes et les animaux : un indice d'un ancêtre commun."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre l'évolution et la classification",
      intro: "Deux idées souvent difficiles : l'ancêtre commun, et le fait que l'évolution n'a pas de but.",
      tabs: [
        {
          label: "🌳 L'arbre et les cousins",
          html: `<p>Pense à l'arbre généalogique de ta famille. Ton cousin et toi avez des grands-parents en commun, mais vous ne descendez pas l'un de l'autre. De la même façon, <b>l'être humain ne descend pas du chimpanzé</b> : tous deux partagent un ancêtre commun, qui vivait il y a environ 6 à 7 millions d'années, à partir duquel les deux lignées se sont séparées. C'est pourquoi une question comme « Pourquoi y a-t-il encore des singes, si nous descendons d'eux ? » n'a pas de sens : les singes actuels sont nos « cousins », pas nos ancêtres.</p>`
        },
        {
          label: "🏔️ Le paysage des possibles",
          html: `<p>Imagine un paysage de collines : chaque point est une combinaison génétique et l'altitude représente la valeur sélective. Les populations « montent » sous l'effet de la sélection naturelle, mais s'arrêtent sur la première colline rencontrée, même s'il en existe une plus haute : l'évolution procède par petites modifications graduelles, elle ne peut pas « revenir en arrière et tout redessiner ». C'est pourquoi il existe des « défauts » comme le nerf laryngé récurrent de la girafe, qui fait un détour de plusieurs mètres du cerveau jusqu'au thorax avant de remonter au larynx : c'est l'héritage d'un ancêtre au cou court.</p>`
        },
        {
          label: "📊 Le jeu des couleurs",
          html: `<p>Prends 100 haricots : 50 rouges et 50 blancs, répartis sur une table à taches rouges. Un oiseau (toi, en clignant des yeux) en mange 10 à la fois en choisissant les plus visibles, c'est-à-dire les blancs. Après 5 « chasses », il reste beaucoup plus de rouges. À chaque fois, les rouges restants se « reproduisent » en doublant. Après quelques générations, la population est presque entièrement rouge, alors qu'aucun haricot n'a jamais « voulu » changer de couleur : c'est le moins visible qui a gagné. C'est la sélection naturelle en miniature, et on peut vraiment le faire en classe avec des haricots et des feuilles de couleur.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "La plus longue étude de l'évolution",
      html: `<p>Depuis 1988, le biologiste <b>Richard Lenski</b> cultive en laboratoire 12 populations d'<i>Escherichia coli</i>, en les transférant chaque jour dans un milieu neuf contenant peu de glucose, ainsi que du citrate. Après plus de 70 000 générations, toutes les populations sont devenues plus rapides à croître. Dans l'une d'elles, vers la génération 31 500, une nouveauté importante est apparue : les bactéries ont commencé à se nourrir du <b>citrate</b>, ce qui est impossible pour <i>E. coli</i> en présence d'oxygène. C'est la démonstration, en temps réel, que des mutations aléatoires et la sélection produisent des nouveautés.</p>`
    },
    {
      type: "curiosity",
      title: "Fossiles vivants et chaînons manquants",
      html: `<p>Le <b>cœlacanthe</b>, un poisson à nageoires charnues que l'on croyait disparu depuis 66 millions d'années, fut pêché vivant en 1938 au large de l'Afrique du Sud. <i>Tiktaalik</i>, découvert en 2004 au Canada par Neil Shubin et ses collaborateurs (environ 375 millions d'années), a des branchies et des écailles comme un poisson, mais aussi un cou mobile et des os dans les nageoires semblables à ceux de membres : un exemple de <b>forme de transition</b> entre poissons et tétrapodes. On en connaît beaucoup d'autres : <i>Archaeopteryx</i> (environ 150 millions d'années), avec des dents et une queue de reptile mais aussi des plumes, ou des baleines primitives comme <i>Pakicetus</i>, avec des pattes et les caractéristiques des mammifères terrestres.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte de l'évolution : touche les nœuds et découvre le pourquoi",
      nodes: [
        { id: "darwin", label: "Sélection naturelle", x: 50, y: 6, color: "#3b82f6", html: "Variabilité, hérédité, lutte pour les ressources, succès reproducteur différentiel.", why: "Darwin et Wallace présentèrent ensemble la théorie à la Linnean Society en 1858. Elle fut inspirée aussi par l'essai de Malthus sur la population (les populations croissent plus vite que les ressources) et par la sélection artificielle pratiquée par les éleveurs de pigeons." },
        { id: "gen", label: "Génétique", x: 18, y: 32, color: "#22c55e", html: "Les mutations et la recombinaison produisent la variabilité.", why: "Au XX<sup>e</sup> siècle, la redécouverte de Mendel (1900) et la théorie synthétique expliquèrent la cause de la variabilité : Dobzhansky résuma en 1973 que « rien n'a de sens en biologie, si ce n'est à la lumière de l'évolution »." },
        { id: "hw", label: "Hardy-Weinberg", x: 82, y: 32, color: "#a855f7", html: "Modèle d'équilibre des fréquences alléliques.", why: "Il fournit l'hypothèse nulle : si une population s'écarte de l'équilibre, on sait qu'un facteur est à l'œuvre (sélection, dérive, migration, mutation, accouplements non aléatoires)." },
        { id: "spec", label: "Spéciation", x: 82, y: 60, color: "#f59e0b", html: "Isolement reproductif et naissance de nouvelles espèces.", why: "Mayr (1942) fonda le concept d'espèce sur l'isolement reproductif et étudia les populations isolées des îles du Pacifique. Les Galápagos et les lacs africains sont de véritables laboratoires naturels de la spéciation." },
        { id: "filo", label: "Phylogénie", x: 18, y: 60, color: "#ef4444", html: "Arbre des parentés entre les êtres vivants.", why: "Darwin dessina la première esquisse d'arbre en 1837, avec la mention « I think ». Aujourd'hui, on construit des arbres bien plus détaillés en comparant les séquences d'ADN de milliers d'espèces." },
        { id: "tass", label: "Classification", x: 50, y: 82, color: "#14b8a6", html: "Nomenclature binominale et groupes hiérarchisés.", why: "Linné créa un système pratique, indépendant de toute théorie de l'évolution (il était fixiste) ; après Darwin, le même schéma a été réinterprété comme le reflet de la descendance commune, et l'on cherche aujourd'hui à ce que les groupes soient monophylétiques." },
        { id: "prove", label: "Preuves", x: 50, y: 40, color: "#06b6d4", html: "Fossiles, anatomie comparée, embryologie, ADN, biogéographie.", why: "Tous les êtres vivants utilisent le même code génétique (avec de petites variantes), un fait difficile à expliquer sans ancêtre commun. La comparaison de l'ADN de l'être humain et du chimpanzé indique une ressemblance d'environ 98-99 % dans les séquences alignables." }
      ],
      edges: [
        ["gen", "darwin", "explique la variabilité"],
        ["darwin", "spec", "conduit à"],
        ["hw", "gen", "mesure les changements"],
        ["spec", "filo", "crée les branches"],
        ["filo", "tass", "guide"],
        ["prove", "darwin", "soutiennent"],
        ["prove", "filo", "reconstituent"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : classification",
      questions: [
        { type: "mc", q: "Quel ordre est correct, du plus large au plus précis ?", options: ["Genre, famille, ordre, classe", "Classe, ordre, famille, genre", "Ordre, classe, genre, famille"], answer: 1, explain: "Domaine, règne, embranchement, classe, ordre, famille, genre, espèce." },
        { type: "text", q: "Quel savant introduisit la nomenclature binominale ?", answer: ["linné", "linne", "carl von linné", "carl linné", "linnaeus", "carl linnaeus"], explain: "Linné l'utilisa dans le Systema Naturae (1735-1758)." },
        { type: "tf", q: "Les champignons sont plus proches des animaux que des plantes sur le plan de l'évolution.", answer: true, explain: "Les analyses d'ADN le montrent : champignons et animaux partagent un ancêtre commun plus récent que celui qu'ils ont avec les plantes." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul><li>Évolution = changement des fréquences alléliques d'une population. Facteurs : mutations, sélection, dérive, flux génique, recombinaison.</li><li>Hardy-Weinberg : p + q = 1 ; p² + 2pq + q² = 1.</li><li>Spéciation = isolement reproductif (allopatrique ou sympatrique).</li><li>Trois domaines : Bacteria, Archaea, Eukarya. Eucaryotes : protistes, champignons, plantes, animaux.</li><li>Espèce : nom binominal en italique (<i>Homo sapiens</i>).</li></ul>`
    }
  ],
  glossary: [
    { t: "Sélection naturelle", d: "Survie et reproduction différentielles des individus les mieux adaptés." },
    { t: "Pool génique", d: "Ensemble de tous les allèles présents dans une population." },
    { t: "Dérive génétique", d: "Variation aléatoire des fréquences alléliques, plus forte dans les petites populations." },
    { t: "Valeur sélective (fitness)", d: "Capacité d'un individu à laisser des descendants fertiles." },
    { t: "Spéciation", d: "Processus de formation de nouvelles espèces." },
    { t: "Isolement reproductif", d: "Impossibilité de croisement fertile entre populations différentes." },
    { t: "Homologie", d: "Ressemblance due à un ancêtre commun." },
    { t: "Phylogénie", d: "Histoire évolutive et parentés des groupes d'organismes." },
    { t: "Groupe monophylétique (clade)", d: "Groupe formé d'un ancêtre et de tous ses descendants." },
    { t: "Nomenclature binominale", d: "Système qui donne à chaque espèce un nom en deux parties : le genre et l'épithète spécifique." },
    { t: "Domaine", d: "Catégorie la plus large de la classification : Bacteria, Archaea, Eukarya." },
    { t: "Évolution convergente", d: "Apparition de caractères semblables chez des groupes non apparentés, soumis à des pressions de sélection semblables." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Les mutations sont...", options: ["provoquées par le besoin de s'adapter", "aléatoires par rapport aux besoins de l'organisme", "possibles seulement chez les bactéries"], answer: 1, explain: "Les mutations sont aléatoires : le milieu sélectionne ensuite parmi celles qui existent déjà." },
      { type: "num", q: "Une maladie récessive touche 1 personne sur 10 000 (q² = 0,0001). Combien vaut q ?", answer: 0.01, tol: 0.0005, explain: "q = √0,0001 = 0,01." },
      { type: "mc", q: "Une barrière géographique qui divise une population favorise la...", options: ["spéciation allopatrique", "spéciation sympatrique", "dérive génétique nulle"], answer: 0, explain: "L'isolement géographique interrompt le flux génique et permet aux populations de diverger." },
      { type: "tf", q: "L'être humain descend du chimpanzé.", answer: false, explain: "Nous partageons avec le chimpanzé un ancêtre commun : ce sont deux lignées parallèles." },
      { type: "text", q: "Comment s'appelle le système de Linné qui donne à chaque espèce un nom en deux parties (genre + espèce) ?", answer: ["nomenclature binominale", "nomenclature binomiale", "binominale", "binomiale", "binôme"], explain: "Par ex. Canis lupus pour le loup." },
      { type: "mc", q: "Dans quel domaine se trouvent les procaryotes qui vivent souvent dans des milieux extrêmes et ont des gènes proches de ceux des eucaryotes ?", options: ["Bacteria", "Archaea", "Eukarya"], answer: 1, explain: "Ce sont les Archées, distinguées des Bactéries par Woese en 1977." },
      { type: "order", q: "Range les catégories de la classification de la plus large à la plus précise.", items: ["Domaine", "Règne", "Classe", "Famille", "Espèce"], explain: "Domaine → règne → embranchement → classe → ordre → famille → genre → espèce." },
      { type: "tf", q: "Les champignons sont des plantes sans chlorophylle.", answer: false, explain: "Ils forment un règne à part : hétérotrophes par absorption, à paroi de chitine, plus apparentés aux animaux." },
      { type: "mc", q: "Les ailes d'un oiseau et celles d'un insecte sont...", options: ["homologues", "analogues", "identiques par leur origine"], answer: 1, explain: "Elles ont la même fonction mais une origine différente : c'est un cas d'évolution convergente." },
      { type: "mc", q: "Pourquoi la résistance aux médicaments est-elle un exemple de sélection naturelle ?", options: ["Le médicament provoque la mutation voulue", "Le médicament élimine les individus sensibles et favorise les résistants déjà présents", "Les bactéries décident de changer"], answer: 1, explain: "Le médicament agit comme un facteur de sélection sur une variabilité préexistante." }
    ]
  }
});
