TOPIC('fr', {
  id: "l1-ita-testo-narrativo",
  title: "Le texte narratif",
  intro: "Nous racontons des histoires depuis que le langage existe : autour du feu, dans les romans, dans les séries, dans les jeux vidéo. Mais comment une histoire est-elle construite ? Dans cette leçon, tu apprends les <b>outils de l'analyse narrative</b> : la différence entre <b>histoire et récit</b> (en italien <i>fabula</i> et <i>intreccio</i>), le <b>narrateur</b> et le <b>point de vue</b>, les <b>personnages</b>, le <b>temps</b> et l'<b>espace</b>. Ce sont les mêmes outils qu'utilisent les critiques, les scénaristes et les écrivains.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Qu'est-ce qu'un texte narratif ?",
      html: `<p>Un <b>texte narratif</b> raconte une série de <b>faits</b> (réels ou inventés), liés entre eux dans le temps et par des rapports de cause à effet, qui concernent des <b>personnages</b>. Sont narratifs le roman, le récit, la nouvelle, le conte, la fable, mais aussi un article de faits divers, une bande dessinée, un film.</p>
<p>Un texte narratif est généralement composé de plusieurs types de <b>séquences</b> :</p>
<ul>
<li><b>narratives</b> : elles racontent les faits et font avancer l'action ;</li>
<li><b>descriptives</b> : elles présentent des lieux, des personnes, des objets, et arrêtent un instant l'action ;</li>
<li><b>dialoguées</b> : elles rapportent les paroles des personnages (discours direct) ;</li>
<li><b>réflexives</b> (ou argumentatives) : elles contiennent des pensées et des commentaires du narrateur ou des personnages.</li>
</ul>
<p>Une histoire a une structure typique en quatre phases, que l'on appelle le <b>schéma narratif</b> :</p>
<ol>
<li><b>Situation initiale</b> (équilibre) : qui, où, quand.</li>
<li><b>Élément perturbateur</b> (rupture de l'équilibre) : il se passe quelque chose qui met l'histoire en mouvement.</li>
<li><b>Péripéties</b> : le protagoniste affronte des obstacles (souvent jusqu'à un point culminant, le <i>climax</i>).</li>
<li><b>Dénouement</b> et <b>situation finale</b> : le problème est résolu, un nouvel équilibre apparaît (parfois ouvert).</li>
</ol>`
    },
    {
      type: "svg",
      title: "Le schéma narratif",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polyline points="30,230 130,230 200,170 290,120 380,60 470,170 570,200" fill="none" stroke="#2563eb" stroke-width="4"/>
<circle cx="30" cy="230" r="7" fill="#2563eb"/><circle cx="130" cy="230" r="7" fill="#dc2626"/><circle cx="380" cy="60" r="8" fill="#f59e0b"/><circle cx="570" cy="200" r="7" fill="#16a34a"/>
<text x="30" y="260" font-size="14" fill="#0f172a">Situation</text><text x="30" y="278" font-size="14" fill="#0f172a">initiale</text>
<text x="105" y="205" font-size="14" fill="#dc2626" font-weight="bold">Élément</text><text x="105" y="222" font-size="14" fill="#dc2626" font-weight="bold">perturbateur</text>
<text x="215" y="115" font-size="14" fill="#0f172a">Péripéties</text><text x="215" y="133" font-size="14" fill="#0f172a">(obstacles)</text>
<text x="395" y="55" font-size="14" fill="#b45309" font-weight="bold">Climax</text>
<text x="470" y="210" font-size="14" fill="#0f172a">Dénouement</text><text x="470" y="288" font-size="14" fill="#16a34a" font-weight="bold">Situation finale</text>
<text x="300" y="25" font-size="16" text-anchor="middle" font-weight="bold" fill="#0f172a">La tension monte puis redescend</text>
</svg>`,
      caption: "La ligne bleue représente la tension narrative : elle augmente jusqu'au climax puis se dénoue."
    },
    {
      type: "text",
      title: "2. Histoire et récit (fabula et intreccio)",
      html: `<p>Au XX<sup>e</sup> siècle, les <b>formalistes russes</b> (Viktor Chklovski, Boris Tomachevski) ont distingué deux niveaux :</p>
<ul>
<li>la <b>fabula</b> (l'histoire) : les faits dans l'<b>ordre chronologique et causal</b> où ils se sont \"réellement\" produits ;</li>
<li>l'<b>intreccio</b> (le récit, l'intrigue) : les faits tels que l'auteur <b>choisit de les présenter</b>, même dans un ordre différent (anticipations, retours en arrière, sauts), pour créer du suspense, de la surprise ou du sens.</li>
</ul>
<p>Exemple : dans un roman policier, la fabula part du crime et arrive à la découverte du coupable ; le récit commence par le cadavre et reconstitue <i>à rebours</i> comment on en est arrivé là. La fabula est une \"chronique\" ; le récit est l'<b>art</b> de raconter.</p>`
    },
    {
      type: "example",
      title: "Même histoire, deux récits",
      html: `<p><b>Histoire (fabula)</b> : (1) Sara perd son portefeuille, (2) un passant le trouve, (3) il l'apporte à la police, (4) Sara le récupère.</p>
<p><b>Récit A</b> (linéaire) : 1-2-3-4, dans l'ordre des faits.</p>
<p><b>Récit B</b> (avec retour en arrière) : il s'ouvre sur Sara qui récupère son portefeuille au commissariat (4) ; puis on revient en arrière : \"trois heures plus tôt\", elle l'avait perdu (1)... Le lecteur se demande tout de suite <i>comment il est arrivé là</i> : la curiosité naît. L'histoire est identique, l'effet est différent.</p>`
    },
    {
      type: "widget",
      title: "Histoire ou récit ?",
      widget: "classify",
      options: { groups: ["Relève du récit (technique narrative)", "Relève de l'histoire (ordre des faits)"], items: [["Retour en arrière (flashback)", 0], ["Anticipation", 0], ["Ordre chronologique des faits", 1], ["Récit qui commence par la fin", 0], ["La succession réelle cause-effet", 1]] },
      caption: "Distingue les techniques de l'auteur de l'ordre réel des faits."
    },
    {
      type: "text",
      title: "3. Le narrateur et le point de vue",
      html: `<p>Il ne faut pas confondre l'<b>auteur</b> (la personne réelle qui écrit) et le <b>narrateur</b> (la voix qui raconte à l'intérieur du texte). Le narrateur peut être :</p>
<ul>
<li><b>Externe</b> (3<sup>e</sup> personne) : il ne participe pas à l'histoire (\"Lucia courait vers chez elle...\"). Il peut être <b>omniscient</b> (il sait tout, même les pensées) ou se limiter à ce qu'on peut observer de l'extérieur.</li>
<li><b>Interne</b> (1<sup>re</sup> personne) : c'est un personnage de l'histoire, protagoniste ou témoin (\"Je courais vers chez moi...\"). Il ne connaît que ce qu'il sait et voit lui-même, et il peut être <b>peu fiable</b>.</li>
</ul>
<p>Le théoricien français <b>Gérard Genette</b> (1930-2018) distingue aussi la <b>focalisation</b>, c'est-à-dire <i>de quel point de vue</i> nous voyons les faits :</p>
<ul>
<li><b>Focalisation zéro</b> : le narrateur en sait plus que les personnages (omniscience). Ex. <i>Les Fiancés</i> (<i>I promessi sposi</i>) de Manzoni.</li>
<li><b>Focalisation interne</b> : nous voyons à travers les yeux d'un personnage et nous ne savons que ce qu'il sait.</li>
<li><b>Focalisation externe</b> : le narrateur en sait moins que le personnage et ne rapporte que ce qu'on voit et entend, sans expliquer les pensées.</li>
</ul>
<p>Les <b>paroles des personnages</b> sont rapportées de trois façons : <b>discours direct</b> (guillemets ou tirets : \"Je viens\", dit-il), <b>indirect</b> (Il dit qu'il viendrait) et <b>indirect libre</b> (sans introduction, la voix du personnage se mêle à celle du narrateur : <i>Il alla à la fenêtre. Quel ennui, cette pluie !</i>).</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre le point de vue",
      intro: "Le point de vue est ce qu'il y a de plus difficile à voir dans un texte. Voici trois métaphores.",
      tabs: [
        { label: "🎥 La caméra", html: "<p>Imagine le narrateur comme une <b>caméra</b>. En <b>focalisation zéro</b>, la caméra est un drone qui voit tout d'en haut, même à l'intérieur des maisons. En <b>focalisation interne</b>, c'est un jeu vidéo à la première personne : tu ne vois que ce que voit le personnage. En <b>focalisation externe</b>, c'est une caméra de surveillance : elle enregistre les actions et les paroles, mais pas les pensées.</p>" },
        { label: "🔁 Réécris la scène", html: "<p>La meilleure façon de comprendre le point de vue, c'est de le <b>changer</b>. Scène : un garçon arrive en retard en cours. <br><b>Externe omniscient</b> : <i>Marco entra en classe, anxieux : il savait que le professeur était déjà furieux.</i> <br><b>Interne (1<sup>re</sup> personne)</b> : <i>J'entrai et mon sang se glaça : le prof me fixait.</i> <br><b>Externe objectif</b> : <i>Marco ouvrit la porte. Le professeur cessa de parler.</i><br>Le ton change, les informations aussi, ainsi que la sympathie que nous éprouvons pour le personnage.</p>" },
        { label: "👁️ Schéma des points de vue", html: "<p>Le schéma montre ce que sait le narrateur par rapport au personnage.</p>", svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a">Focalisation (Genette)</text><rect x="30" y="60" width="160" height="150" rx="10" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="110" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">ZÉRO</text><text x="110" y="125" font-size="14" text-anchor="middle" fill="#0f172a">narrateur &gt; personnage</text><text x="110" y="150" font-size="14" text-anchor="middle" fill="#0f172a">il sait tout</text><text x="110" y="175" font-size="14" text-anchor="middle" fill="#0f172a">(omniscience)</text><rect x="220" y="60" width="160" height="150" rx="10" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="300" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">INTERNE</text><text x="300" y="125" font-size="14" text-anchor="middle" fill="#0f172a">narrateur = personnage</text><text x="300" y="150" font-size="14" text-anchor="middle" fill="#0f172a">il voit par ses yeux</text><rect x="410" y="60" width="160" height="150" rx="10" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="490" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">EXTERNE</text><text x="490" y="125" font-size="14" text-anchor="middle" fill="#0f172a">narrateur &lt; personnage</text><text x="490" y="150" font-size="14" text-anchor="middle" fill="#0f172a">actions et paroles</text><text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">Le point de vue change ce que nous savons et ce que nous ressentons</text></svg>` }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : narrateur et histoire",
      questions: [
        { type: "mc", q: "Dans un récit à la première personne, le narrateur est...", options: ["externe", "interne", "toujours omniscient"], answer: 1, explain: "Celui qui dit « je » est un personnage de l'histoire : narrateur interne." },
        { type: "tf", q: "Le récit (intreccio) respecte toujours l'ordre chronologique des faits.", answer: false, explain: "Le récit peut modifier l'ordre avec des retours en arrière et des anticipations ; c'est l'histoire (fabula) qui suit l'ordre réel." },
        { type: "mc", q: "« Il s'assit. Quel ennui, ce cours ! » est un exemple de...", options: ["discours direct", "discours indirect libre", "description"], answer: 1, explain: "La pensée du personnage entre dans le récit sans verbe introducteur ni guillemets." }
      ]
    },
    {
      type: "text",
      title: "4. Les personnages",
      html: `<p>Les personnages sont les êtres (personnes, animaux, créatures fantastiques) qui agissent dans l'histoire. Selon leur <b>rôle</b>, on distingue :</p>
<ul>
<li>le <b>protagoniste</b> : le personnage central, dont nous suivons l'histoire (c'est le <b>héros</b> dans les contes) ;</li>
<li>l'<b>antagoniste</b> (ou opposant) : celui qui s'oppose au protagoniste ;</li>
<li>l'<b>adjuvant</b> (ou allié) : celui qui l'aide. Les <b>personnages secondaires</b> complètent l'action.</li>
</ul>
<p>L'écrivain anglais <b>E. M. Forster</b> (<i>Aspects du roman</i>, 1927) a distingué les personnages <b>plats</b> (définis par une seule qualité, prévisibles) des personnages <b>ronds</b> (complexes, capables de surprendre et de changer). Un personnage peut être :</p>
<ul>
<li><b>statique</b> (il ne change pas au cours de l'histoire) ou <b>dynamique</b> (il se transforme) ;</li>
<li>un <b>type</b> (il représente une catégorie, comme l'avare) ou un <b>individu</b> (unique).</li>
</ul>
<p>Le lecteur découvre un personnage de plusieurs façons : <b>caractérisation directe</b> (le narrateur le décrit : \"c'était un homme avare\") et <b>indirecte</b> (nous le déduisons de ses actions, de ses paroles, de ses choix et des objets qu'il possède). Cette dernière est préférée dans le récit moderne : <i>\"show, don't tell\"</i> (montre, ne dis pas).</p>`
    },
    {
      type: "example",
      title: "Comment nous \"voyons\" un personnage",
      html: `<p>Compare deux façons de présenter le même personnage :</p>
<p><b>Directe</b> : <i>\"Giulia était une personne très généreuse.\"</i></p>
<p><b>Indirecte</b> : <i>\"Giulia vida son porte-monnaie pour l'homme assis sur le trottoir, puis rentra chez elle à pied.\"</i></p>
<p>Dans le second cas, nous le déduisons des faits : le lecteur participe activement, et il s'implique donc davantage.</p>`
    },
    {
      type: "text",
      title: "5. Le temps et l'espace",
      html: `<p>Le <b>temps</b> a deux dimensions :</p>
<ul>
<li>le <b>temps de l'histoire</b> : la durée réelle des événements (des années, une journée) ;</li>
<li>le <b>temps du récit</b> : la place que le texte consacre à ces événements (lignes, pages).</li>
</ul>
<p>Le rapport entre les deux crée le <b>rythme</b> :</p>
<ul>
<li><b>Scène</b> : temps de l'histoire ≈ temps du récit (surtout dans les dialogues).</li>
<li><b>Sommaire</b> : de longues périodes racontées en quelques lignes (\"Dix ans passèrent\").</li>
<li><b>Ellipse</b> : une période est entièrement passée sous silence.</li>
<li><b>Pause</b> : le récit s'arrête (description, réflexion) alors que l'histoire n'avance pas.</li>
<li><b>Ralenti</b> (dilatation) : un instant dure de nombreuses lignes (la longue attente).</li>
</ul>
<p>Et pour l'ordre : <b>analepse</b> (retour en arrière, flashback : saut dans le passé), <b>prolepse</b> (anticipation de l'avenir). Le temps peut être <b>chronologique</b> (extérieur, celui des horloges) ou <b>psychologique</b> (intérieur : une heure d'ennui semble éternelle).</p>
<p>L'<b>espace</b> est le lieu de l'action : <b>réel</b> ou <b>imaginaire</b>, <b>ouvert</b> ou <b>fermé</b>. Ce n'est pas seulement un décor : il crée une atmosphère, exprime un état d'âme, et il est parfois un symbole (le château, la forêt, la mer).</p>`
    },
    {
      type: "curiosity",
      title: "Les \"Fiancés\" commencent par un paysage",
      html: `<p>Le célèbre incipit d'Alessandro Manzoni, <i>\"Quel ramo del lago di Como, che volge a mezzogiorno...\"</i> (« Cette branche du lac de Côme qui se tourne vers le midi... »), ouvre l'histoire par une <b>longue description</b> des lieux (pause narrative) avant même de présenter les personnages. Le roman, publié dans sa version définitive en 1840-42, a un narrateur externe <b>omniscient</b> et souvent ironique, qui commente les faits. Il fait croire qu'il réécrit le manuscrit d'un auteur anonyme du XVII<sup>e</sup> siècle : c'est le procédé du \"manuscrit retrouvé\".</p>`
    },
    {
      type: "curiosity",
      title: "Le temps des jeux vidéo et des séries",
      html: `<p>Les séries utilisent sans cesse les techniques que nous avons vues : le <i>flashback</i> (analepse), l'<i>ellipse</i> (\"trois mois plus tard\") et le <i>cliffhanger</i> (fin suspendue au moment de tension maximale, comme une série laissée en plein milieu). Les jeux vidéo jouent eux aussi sur le point de vue : la caméra à la première personne est une focalisation interne, la vue de dessus est une omniscience.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte : les éléments du texte narratif",
      nodes: [
        { id: "tn", label: "Texte narratif", x: 50, y: 8, color: "#3b82f6", html: "Il raconte des faits liés dans le temps et par des rapports de cause à effet, vécus par des personnages.", why: "Raconter est l'une des plus anciennes formes de la pensée : cela met de l'ordre dans l'expérience et la rend communicable." },
        { id: "fab", label: "Histoire et récit", x: 18, y: 38, color: "#10b981", html: "Histoire (fabula) = ordre chronologique des faits ; récit (intreccio) = ordre choisi par l'auteur.", why: "Distinction proposée par les formalistes russes (années 1910-1920) pour expliquer que l'art réside dans la manière de raconter, et pas seulement dans ce qu'on raconte." },
        { id: "nar", label: "Narrateur et point de vue", x: 82, y: 38, color: "#f59e0b", html: "Narrateur externe ou interne ; focalisation zéro, interne, externe.", why: "Celui qui raconte décide de ce que nous savons et de la confiance que nous lui accordons. Genette (<i>Figures III</i>, 1972) a systématisé ces notions pour permettre une analyse précise." },
        { id: "per", label: "Personnages", x: 30, y: 72, color: "#8b5cf6", html: "Protagoniste, antagoniste, adjuvants ; plats ou ronds.", why: "Les personnages donnent un sens émotionnel à l'intrigue : Forster (1927) a montré qu'un personnage bien construit surprend de façon convaincante." },
        { id: "ts", label: "Temps et espace", x: 70, y: 72, color: "#ef4444", html: "Temps de l'histoire et du récit ; analepse et prolepse ; les lieux comme atmosphère et symbole.", why: "Le temps du récit crée le rythme et le suspense ; l'espace n'est pas seulement un décor mais charge l'histoire de sens." }
      ],
      edges: [["tn", "fab", "s'organise en"], ["tn", "nar", "est filtré par"], ["tn", "per", "a"], ["tn", "ts", "se situe dans"]]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<p>Pour analyser un texte narratif, demande-toi : <b>qui raconte ?</b> (narrateur), <b>d'où voit-il ?</b> (focalisation), <b>dans quel ordre ?</b> (histoire/récit), <b>qui agit ?</b> (personnages), <b>quand et où ?</b> (temps et espace). Cherche ensuite la <b>structure</b> : situation initiale, élément perturbateur, péripéties, dénouement.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : personnages, temps et espace",
      questions: [
        { type: "mc", q: "Un personnage construit sur une seule qualité et prévisible est, selon Forster...", options: ["rond", "plat", "dynamique"], answer: 1, explain: "Forster appelle « plats » les personnages qui n'ont qu'une seule caractéristique." },
        { type: "mc", q: "« Dix ans plus tard, Anna revint au village. » Ici, le temps est traité par...", options: ["une pause", "un sommaire/une ellipse", "une scène"], answer: 1, explain: "Dix ans sont résumés en quelques mots." },
        { type: "tf", q: "Un flashback est une analepse.", answer: true, explain: "C'est un saut en arrière dans le temps de l'histoire." }
      ]
    }
  ],
  glossary: [
    { t: "Histoire (fabula)", d: "Faits racontés dans l'ordre chronologique et causal où ils se sont produits." },
    { t: "Récit (intreccio)", d: "Faits racontés dans l'ordre choisi par l'auteur." },
    { t: "Narrateur", d: "La voix qui raconte l'histoire, distincte de l'auteur." },
    { t: "Focalisation", d: "Le point de vue à partir duquel les faits sont présentés." },
    { t: "Analepse", d: "Saut en arrière dans le temps (flashback)." },
    { t: "Prolepse", d: "Anticipation de faits futurs." },
    { t: "Ellipse", d: "Saut dans le temps : une période n'est pas racontée." },
    { t: "Climax", d: "Le moment de tension maximale de l'histoire." },
    { t: "Antagoniste", d: "Personnage qui s'oppose au protagoniste." },
    { t: "Discours indirect libre", d: "Les paroles ou les pensées du personnage se fondent dans la voix du narrateur, sans signal." },
    { t: "Cliffhanger", d: "Fin d'un épisode suspendue au moment de tension maximale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qu'est-ce qui distingue l'histoire (fabula) du récit (intreccio) ?", options: ["La longueur du texte", "L'ordre dans lequel les faits sont présentés", "Le nombre de personnages", "Le type de narrateur"], answer: 1, explain: "L'histoire suit l'ordre chronologique ; le récit, l'ordre choisi par l'auteur." },
      { type: "tf", q: "L'auteur et le narrateur sont toujours la même chose.", answer: false, explain: "L'auteur est la personne réelle ; le narrateur est une voix créée dans le texte." },
      { type: "mc", q: "En focalisation interne, le lecteur...", options: ["en sait plus que les personnages", "ne sait que ce que sait le personnage", "ne connaît pas les pensées et ne voit que les actions", "connaît l'avenir"], answer: 1, explain: "Nous voyons l'histoire à travers les yeux d'un personnage." },
      { type: "text", q: "Comment s'appelle le saut en arrière dans le temps dans un récit ?", answer: ["analepse", "flashback", "l'analepse", "retour en arrière", "un flashback"], explain: "Analepse (flashback) : on évoque un fait passé." },
      { type: "order", q: "Range dans l'ordre les phases du schéma narratif.", items: ["Situation initiale", "Élément perturbateur", "Péripéties", "Dénouement"], explain: "On part de l'équilibre, il se rompt, l'action se développe et enfin se dénoue." },
      { type: "mc", q: "« C'était un homme avare » est un exemple de caractérisation...", options: ["directe", "indirecte", "ironique", "dialoguée"], answer: 0, explain: "Le narrateur déclare directement la qualité." },
      { type: "mc", q: "Une description qui arrête l'action est...", options: ["une scène", "une pause", "une ellipse", "un climax"], answer: 1, explain: "Le temps de l'histoire n'avance pas alors que le récit continue : c'est une pause." },
      { type: "num", q: "Combien de phases compte le schéma narratif de base décrit dans la leçon (situation initiale, élément perturbateur, péripéties, dénouement) ?", answer: 4, tol: 0, explain: "Il y en a quatre." },
      { type: "mc", q: "Dans « Les Fiancés » (I promessi sposi), le narrateur est...", options: ["interne protagoniste", "externe omniscient", "externe objectif", "interne témoin"], answer: 1, explain: "Il raconte de l'extérieur, sait tout et commente." }
    ]
  }
});
