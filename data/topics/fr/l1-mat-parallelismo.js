TOPIC('fr', {
  id: "l1-mat-parallelismo",
  title: "Droites parallèles et quadrilatères",
  intro: "Deux rails de chemin de fer courent côte à côte sans jamais se rencontrer. Cela semble évident, mais c'est l'une des idées les plus subtiles des mathématiques : démontrer que les parallèles existent est facile, comprendre combien il y en a a demandé <b>deux mille ans</b> et a mené à la découverte de géométries entièrement nouvelles. Dans cette leçon, nous voyons les <b>angles formés par des parallèles</b>, la <b>somme des angles</b> d'un triangle et les propriétés des <b>quadrilatères</b> (parallélogrammes et trapèzes).",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Droites parallèles et sécante",
      html: `<p>Deux droites du plan sont <b>parallèles</b> si elles n'ont aucun point commun (ou si elles sont confondues). On écrit <b>r ∥ s</b>. Dans le plan, deux droites non parallèles se coupent en un point.</p>
<p>Quand une troisième droite, la <b>sécante</b>, coupe deux droites, elle forme huit angles. Les paires importantes sont :</p>
<ul>
<li><b>alternes-internes</b> : situés entre les deux droites, de part et d'autre de la sécante ;</li>
<li><b>alternes-externes</b> : à l'extérieur des deux droites, de part et d'autre de la sécante ;</li>
<li><b>correspondants</b> : dans la même position par rapport aux deux droites et à la sécante ;</li>
<li><b>intérieurs du même côté</b> (ou extérieurs du même côté) : du même côté de la sécante, tous deux entre les droites (ou tous deux à l'extérieur).</li>
</ul>
<p><b>Théorème.</b> Deux droites coupées par une sécante sont parallèles si et seulement si l'une de ces conditions est vérifiée :</p>
<ul>
<li>les angles <b>alternes-internes</b> (ou alternes-externes) sont <b>égaux</b> ;</li>
<li>les angles <b>correspondants</b> sont <b>égaux</b> ;</li>
<li>les angles <b>intérieurs du même côté</b> sont <b>supplémentaires</b> (somme 180°).</li>
</ul>
<p>« Si et seulement si » signifie que c'est vrai dans les deux sens. La partie « si les angles alternes-internes sont égaux, alors les droites sont parallèles » se démontre avec les quatre premiers postulats seulement ; le sens inverse, « si elles sont parallèles, alors les angles alternes-internes sont égaux », <b>exige le cinquième postulat</b>.</p>`
    },
    {
      type: "svg",
      title: "Les angles formés par deux parallèles",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="100" x2="560" y2="100" stroke="#1f2937" stroke-width="3"/>
<line x1="40" y1="200" x2="560" y2="200" stroke="#1f2937" stroke-width="3"/>
<line x1="200" y1="40" x2="400" y2="260" stroke="#6366f1" stroke-width="3"/>
<text x="500" y="90" font-size="16" fill="#1f2937">r</text>
<text x="500" y="190" font-size="16" fill="#1f2937">s</text>
<text x="420" y="268" font-size="16" fill="#4338ca">sécante</text>
<circle cx="255" cy="100" r="5" fill="#1f2937"/><circle cx="345" cy="200" r="5" fill="#1f2937"/>
<text x="272" y="132" font-size="22" fill="#16a34a" font-weight="bold">α</text>
<text x="300" y="186" font-size="22" fill="#16a34a" font-weight="bold">α</text>
<text x="368" y="226" font-size="22" fill="#ea580c" font-weight="bold">α</text>
<text x="212" y="132" font-size="22" fill="#dc2626" font-weight="bold">β</text>
<text x="340" y="170" font-size="22" fill="#dc2626" font-weight="bold">β</text>
<text x="40" y="30" font-size="16" fill="#16a34a" font-weight="bold">vert : alternes-internes (égaux)</text>
<text x="40" y="52" font-size="16" fill="#ea580c" font-weight="bold">orange : correspondants (égaux)</text>
<text x="330" y="30" font-size="16" fill="#dc2626" font-weight="bold">β = 180° − α (même côté)</text>
</svg>`,
      caption: "Si r ∥ s : les angles verts (alternes-internes) et l'angle orange (correspondant) sont égaux à α ; l'angle rouge β est son supplémentaire."
    },
    {
      type: "example",
      title: "Exemple : calculer les angles",
      html: `<p>Deux droites parallèles sont coupées par une sécante ; l'un des huit angles mesure <b>65°</b>. Combien mesurent les autres ?</p>
<ul>
<li>Chaque angle mesure soit <b>65°</b>, soit son supplémentaire <b>180° − 65° = 115°</b>.</li>
<li>Quatre angles (les deux alternes-internes, les correspondants, les opposés par le sommet) valent 65° ; les quatre autres valent 115°.</li>
<li>À chacun des deux points d'intersection, deux angles adjacents forment un angle plat (180°) ; les angles opposés par le sommet sont égaux.</li>
</ul>`
    },
    {
      type: "text",
      title: "La somme des angles d'un triangle",
      html: `<p>Le premier grand résultat qui découle du cinquième postulat :</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>Dans tout triangle, la somme des angles intérieurs vaut 180°.</b></p>
<p><b>Démonstration.</b> Soit ABC un triangle. Par le sommet C, je trace la parallèle r au côté AB. Les angles que r forme avec les côtés CA et CB sont alternes-internes avec les angles A et B du triangle (par rapport aux sécantes CA et CB) : ils sont donc égaux à A et à B. Avec l'angle C, ces angles forment un <b>angle plat</b> : A + B + C = 180°. ∎</p>
<p>Conséquences :</p>
<ul>
<li><b>Angle extérieur</b> : dans un triangle, un angle extérieur est égal à la <b>somme des deux angles intérieurs non adjacents</b> (car 180° − C = A + B).</li>
<li><b>Polygone à n côtés</b> : il se découpe en (n − 2) triangles, donc la somme de ses angles intérieurs vaut <b>(n − 2) · 180°</b>. Quadrilatère : 360° ; pentagone : 540° ; hexagone : 720°.</li>
<li>La somme des <b>angles extérieurs</b> d'un polygone convexe (un par sommet) vaut toujours <b>360°</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "Parallélogrammes",
      html: `<p>Un <b>parallélogramme</b> est un quadrilatère dont les <b>côtés opposés sont parallèles</b>. À partir de cette seule définition, avec les théorèmes sur les angles et les parallèles et les cas d'égalité des triangles, on démontre ses propriétés :</p>
<ul>
<li>les côtés opposés sont <b>égaux</b> (de même longueur) ;</li>
<li>les angles opposés sont <b>égaux</b>, deux angles consécutifs sont <b>supplémentaires</b> ;</li>
<li>les <b>diagonales</b> se coupent en leur milieu.</li>
</ul>
<p>La réciproque est vraie aussi : un quadrilatère est un parallélogramme s'il a ses côtés opposés de même longueur, ou deux côtés opposés parallèles et de même longueur, ou des diagonales qui se coupent en leur milieu.</p>
<p><b>Parallélogrammes particuliers</b> :</p>
<ul>
<li><b>Rectangle</b> : quatre angles droits ; les diagonales sont de <b>même longueur</b>.</li>
<li><b>Losange</b> : quatre côtés de même longueur ; les diagonales sont <b>perpendiculaires</b> et ce sont les bissectrices des angles.</li>
<li><b>Carré</b> : à la fois rectangle et losange (quatre côtés égaux et quatre angles égaux).</li>
</ul>
<p><b>Trapèze</b> : quadrilatère ayant <b>une seule paire de côtés parallèles</b> (les bases). Si les deux autres côtés sont de même longueur, il est <b>isocèle</b> (angles à la base égaux, diagonales de même longueur) ; si l'un d'eux est perpendiculaire aux bases, il est <b>rectangle</b>. Dans tout trapèze, les angles adjacents à un côté non parallèle sont supplémentaires (intérieurs du même côté).</p>`
    },
    {
      type: "widget",
      title: "Associe la propriété au quadrilatère",
      widget: "match",
      options: { pairs: [
        ["Côtés opposés parallèles et de même longueur", "Parallélogramme"],
        ["Diagonales de même longueur qui se coupent en leur milieu", "Rectangle"],
        ["Diagonales perpendiculaires et quatre côtés égaux", "Losange"],
        ["Quatre côtés et quatre angles égaux", "Carré"],
        ["Une seule paire de côtés parallèles", "Trapèze"]
      ] },
      caption: "Chaque quadrilatère a ses propriétés caractéristiques."
    },
    {
      type: "svg",
      title: "La famille des quadrilatères",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="16" text-anchor="middle" font-weight="bold">
<rect x="210" y="14" width="180" height="40" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="300" y="40" fill="#312e81">Quadrilatère</text>
<rect x="60" y="110" width="150" height="40" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2"/><text x="135" y="136" fill="#78350f">Trapèze</text>
<rect x="390" y="110" width="170" height="40" rx="8" fill="#dcfce7" stroke="#166534" stroke-width="2"/><text x="475" y="136" fill="#14532d">Parallélogramme</text>
<rect x="290" y="210" width="110" height="40" rx="8" fill="#fce7f3" stroke="#9d174d" stroke-width="2"/><text x="345" y="236" fill="#831843">Losange</text>
<rect x="450" y="210" width="130" height="40" rx="8" fill="#cffafe" stroke="#0e7490" stroke-width="2"/><text x="515" y="236" fill="#164e63">Rectangle</text>
<rect x="360" y="266" width="120" height="30" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/><text x="420" y="287" fill="#78350f">Carré</text>
</g>
<g stroke="#334155" stroke-width="2" fill="none">
<line x1="270" y1="54" x2="150" y2="110"/><line x1="330" y1="54" x2="450" y2="110"/>
<line x1="440" y1="150" x2="365" y2="210"/><line x1="500" y1="150" x2="515" y2="210"/>
<line x1="365" y1="250" x2="400" y2="266"/><line x1="515" y1="250" x2="460" y2="266"/>
</g>
<text x="20" y="215" font-size="14" fill="#475569">chaque figure du bas a toutes</text>
<text x="20" y="235" font-size="14" fill="#475569">les propriétés de celle du haut</text>
</svg>`,
      caption: "Le carré est un losange, un rectangle et un parallélogramme, mais pas l'inverse."
    },
    {
      type: "example",
      title: "Exemple concret : le pantographe et la lampe articulée",
      html: `<p>Le <b>pantographe</b> est un instrument fait de tiges articulées qui forment un parallélogramme : on s'en servait pour recopier des dessins en les agrandissant ou en les réduisant. Il fonctionne parce que, lorsque le parallélogramme se déforme, les côtés opposés restent <b>parallèles et de même longueur</b>. On retrouve ces parallélogrammes articulés dans les lampes de bureau à bras, dans les ponts élévateurs des garages et dans les pantographes des trains électriques : la partie supérieure reste parallèle à la base pendant qu'elle monte et descend.</p>
<p>Ici, le fait que le parallélogramme <b>ne soit pas rigide</b> (contrairement au triangle) est un avantage : on a justement besoin que sa forme puisse changer.</p>`
    },
    {
      type: "example",
      title: "Exemple : les angles d'un parallélogramme",
      html: `<p>Dans un parallélogramme ABCD, l'angle A mesure <b>70°</b>. Combien mesurent les autres angles et, si AB = 12 cm et BC = 8 cm, quel est le périmètre ?</p>
<ul>
<li>L'angle opposé C est égal à A : <b>70°</b>.</li>
<li>L'angle B est supplémentaire de A : 180° − 70° = <b>110°</b> ; de même, D = 110°.</li>
<li>Vérification : 70 + 110 + 70 + 110 = 360° ✔️</li>
<li>Périmètre : 2(12 + 8) = <b>40 cm</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : angles et parallèles",
      questions: [
        { type: "num", q: "Deux droites parallèles sont coupées par une sécante. Un angle mesure 65° : combien mesure l'angle alterne-interne correspondant ?", answer: 65, unit: "°", explain: "Avec des parallèles, les angles alternes-internes sont égaux." },
        { type: "mc", q: "Deux angles intérieurs du même côté formés par des parallèles sont…", options: ["égaux", "supplémentaires", "complémentaires"], answer: 1, explain: "Leur somme vaut 180° (un angle plat)." },
        { type: "tf", q: "Si deux droites coupées par une sécante forment des angles correspondants égaux, alors elles sont parallèles.", answer: true, explain: "C'est l'une des conditions du théorème sur le parallélisme." }
      ]
    },
    {
      type: "decision",
      title: "Le postulat que personne n'arrivait à démontrer",
      html: `<p>Tu es un mathématicien du début du XIXe siècle. Le cinquième postulat d'Euclide (« par un point passe une seule parallèle à une droite donnée ») te semble trop compliqué pour être un postulat : depuis deux mille ans, des milliers de savants, de Proclus à Saccheri, ont essayé de le <b>démontrer</b> à partir des quatre autres, mais chaque « démonstration » cache une erreur.</p>`,
      question: "Qu'aurais-tu tenté ?",
      options: [
        { label: "Continuer à chercher une démonstration", outcome: "C'est la voie suivie pendant deux millénaires, sans succès : chaque tentative supposait (en cachette) quelque chose d'équivalent au postulat lui-même." },
        { label: "Supposer qu'il est FAUX et voir si l'on arrive à une contradiction", outcome: "C'est l'idée de la démonstration par l'absurde : si le nier mène à une absurdité, le postulat est démontré. Mais que se passe-t-il si l'absurdité n'arrive jamais ?" },
        { label: "L'accepter comme postulat et continuer", outcome: "C'est ce que fit Euclide, à juste titre. Mais un doute subsiste : est-ce vraiment la seule géométrie possible ?" }
      ],
      answer: 1,
      explain: "Saccheri (1733) essaya justement par l'absurde, mais crut avoir trouvé une contradiction qui n'existait pas. Puis Gauss (en privé), Lobatchevski (1829) et Bolyai (1832) comprirent qu'en niant le postulat, aucune contradiction n'apparaît : on obtient des géométries non euclidiennes, aussi cohérentes que celle d'Euclide. Au XIXe siècle, Riemann élargit ce cadre, et au XXe siècle Einstein utilisa une géométrie non euclidienne pour décrire la gravitation dans la relativité générale."
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Des triangles à trois angles droits",
      html: `<p>À la surface de la Terre, tu peux construire un triangle avec <b>trois angles droits</b> : pars du pôle Nord, descends le long d'un méridien jusqu'à l'équateur, parcours un quart de l'équateur, puis remonte le long d'un autre méridien jusqu'au pôle. La somme des angles vaut 270° ! Ce n'est pas une erreur : sur la sphère, les postulats d'Euclide ne sont pas vérifiés, car il <b>n'existe pas de droites parallèles</b> (deux « droites », c'est-à-dire deux grands cercles, se coupent toujours). Voilà pourquoi les pilotes d'avion suivent des trajectoires qui, sur une carte, semblent courbes.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La tortue de Logo",
      html: `<p>La somme des <b>angles extérieurs</b> de n'importe quel polygone convexe vaut <b>360°</b> : on le comprend en marchant le long de son bord. À chaque sommet, tu tournes d'un certain angle, et quand tu reviens au point de départ, tu as fait un tour complet. C'est l'idée à la base du langage de programmation <i>Logo</i> (la « tortue » de Seymour Papert, années 1960) : pour dessiner un carré, la tortue avance et tourne 4 fois de 90°.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre le parallélisme et les quadrilatères",
      intro: "Si les noms des angles t'embrouillent, essaie de les associer à des images et à des mouvements.",
      tabs: [
        {
          label: "🚂 Rails et passages piétons",
          html: `<p>Les bandes d'un <b>passage piéton</b> sont parallèles ; la <b>route</b> qui les coupe est la sécante. En traversant d'un côté à l'autre, tu tournes toujours du même angle par rapport aux bandes. C'est pourquoi les angles correspondants sont égaux : « même position = même inclinaison ». Les angles alternes-internes sont égaux pour la même raison (il suffit d'une rotation d'un demi-tour autour du milieu du segment de sécante). Les angles intérieurs du même côté forment ensemble un angle plat, 180°, comme les deux battants d'une porte ouverte.</p>`
        },
        {
          label: "🐢 La tortue qui marche",
          html: `<p>Imagine que tu marches le long du bord d'un polygone et qu'à chaque sommet tu tournes d'un angle (<b>l'angle extérieur</b>). Quand tu reviens au point de départ, tourné dans la direction initiale, tu as tourné de <b>360°</b> au total. La somme des angles extérieurs vaut donc 360°, <b>quel que soit le nombre de côtés</b>.</p>
<p>Un polygone régulier à n côtés a n angles extérieurs égaux : chacun vaut 360°/n. L'angle intérieur vaut 180° − 360°/n. Pour l'hexagone : 180° − 60° = 120° ; pour l'octogone : 180° − 45° = 135°. Compare avec la formule (n − 2) · 180°/n : on obtient le même résultat.</p>`
        },
        {
          label: "🌍 Sur la sphère (3D)",
          html: `<p>Fais tourner le globe : le triangle qui part du pôle Nord, descend jusqu'à l'équateur à la longitude 0°, suit l'équateur jusqu'à 90° est et remonte au pôle a <b>trois angles droits</b>. Sur une surface courbe, la somme des angles d'un triangle dépasse 180° : la géométrie d'Euclide est valable dans le plan, pas sur la sphère.</p>`,
          scene: "globe",
          options: { points: [ { lat: 90, lon: 0, label: "Pôle Nord", color: "#ef4444" }, { lat: 0, lon: 0, label: "Équateur 0°", color: "#2563eb" }, { lat: 0, lon: 90, label: "Équateur 90° E", color: "#16a34a" } ], routes: [ { points: [0, 1, 2, 0], color: "#f97316" } ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte du parallélisme",
      nodes: [
        { id: "v", label: "Cinquième postulat", x: 50, y: 6, color: "#ef4444", html: "Par un point extérieur à une droite passe une seule parallèle.", why: "Euclide le formula de façon longue et peu « évidente » ; pendant deux millénaires, on a essayé de le déduire des autres. Playfair (1795) lui donna sa forme moderne." },
        { id: "par", label: "Droites parallèles", x: 20, y: 28, color: "#6366f1", html: "Droites d'un même plan sans point commun.", why: "L'existence se démontre sans le Ve postulat (angles alternes égaux) ; l'unicité, elle, l'exige." },
        { id: "ang", label: "Angles et sécante", x: 50, y: 40, color: "#16a34a", html: "Alternes, correspondants, du même côté.", why: "Ils « traduisent » le parallélisme en mesures d'angles : ils permettent de démontrer que deux droites sont parallèles en mesurant des angles." },
        { id: "tri", label: "Somme des angles = 180°", x: 80, y: 28, color: "#f59e0b", html: "Dans tout triangle, A + B + C = 180°.", why: "On le démontre en traçant par un sommet la parallèle au côté opposé : cela dépend du Ve postulat (sur la sphère, la somme dépasse 180°)." },
        { id: "pol", label: "Angles des polygones", x: 80, y: 55, color: "#a855f7", html: "Somme intérieure (n − 2)·180°, extérieure 360°.", why: "Un polygone se découpe en n − 2 triangles ; la somme extérieure correspond à un tour complet." },
        { id: "parall", label: "Parallélogrammes", x: 20, y: 62, color: "#0ea5e9", html: "Côtés opposés parallèles : propriétés des côtés, des angles, des diagonales.", why: "Toutes les propriétés découlent des angles alternes formés par des parallèles et de l'égalité des triangles obtenus en traçant une diagonale." },
        { id: "part", label: "Rectangle, losange, carré", x: 20, y: 88, color: "#22c55e", html: "Des parallélogrammes avec des propriétés en plus.", why: "En ajoutant une propriété (angles droits, côtés égaux), la famille se restreint : c'est la logique des classifications." },
        { id: "trap", label: "Trapèze", x: 55, y: 80, color: "#14b8a6", html: "Une seule paire de côtés parallèles.", why: "Les angles adjacents à un côté non parallèle sont intérieurs du même côté entre les bases parallèles, donc supplémentaires." },
        { id: "non", label: "Géométries non euclidiennes", x: 85, y: 88, color: "#ec4899", html: "Géométries où le Ve postulat est faux.", why: "Lobatchevski (1829), Bolyai (1832) et Riemann (1854) : en niant le Ve postulat, on obtient des géométries cohérentes. Einstein les utilise pour la gravitation." }
      ],
      edges: [
        ["v", "par", "régit"],
        ["par", "ang", "se traduit en"],
        ["ang", "tri", "démontrent"],
        ["tri", "pol", "se généralise aux"],
        ["par", "parall", "définit"],
        ["parall", "part", "se spécialisent en"],
        ["par", "trap", "définit"],
        ["v", "non", "nié par"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : polygones",
      questions: [
        { type: "num", q: "Combien vaut la somme des angles intérieurs d'un hexagone ?", answer: 720, unit: "°", explain: "(6 − 2) · 180° = 720°." },
        { type: "num", q: "Dans un parallélogramme, un angle mesure 70°. Combien mesure un angle consécutif ?", answer: 110, unit: "°", explain: "Deux angles consécutifs sont supplémentaires : 180° − 70° = 110°." },
        { type: "mc", q: "Les diagonales d'un losange sont…", options: ["perpendiculaires", "toujours de même longueur", "parallèles"], answer: 0, explain: "Dans un losange, les diagonales sont perpendiculaires et ce sont les bissectrices des angles." }
      ]
    }
  ],
  glossary: [
    { t: "Droites parallèles", d: "Droites d'un même plan qui n'ont aucun point commun." },
    { t: "Sécante", d: "Droite qui coupe deux droites ou plus." },
    { t: "Angles alternes-internes", d: "Angles situés entre les deux droites, de part et d'autre de la sécante." },
    { t: "Angles correspondants", d: "Angles situés dans la même position par rapport aux deux droites et à la sécante." },
    { t: "Angles du même côté", d: "Angles situés du même côté de la sécante, tous deux intérieurs ou tous deux extérieurs." },
    { t: "Angle extérieur", d: "Angle formé par un côté d'un polygone et le prolongement du côté adjacent." },
    { t: "Parallélogramme", d: "Quadrilatère dont les côtés opposés sont parallèles." },
    { t: "Trapèze", d: "Quadrilatère ayant une seule paire de côtés parallèles (les bases)." },
    { t: "Géométrie non euclidienne", d: "Géométrie dans laquelle le cinquième postulat d'Euclide n'est pas vérifié." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Deux droites parallèles sont coupées par une sécante. Deux angles intérieurs du même côté sont…", options: ["supplémentaires", "égaux", "complémentaires"], answer: 0, explain: "Ils sont du même côté de la sécante et leur somme vaut 180°." },
      { type: "num", q: "Dans un triangle, deux angles intérieurs mesurent 50° et 60°. Combien mesure l'angle extérieur adjacent au troisième angle ?", answer: 110, unit: "°", explain: "L'angle extérieur est la somme des deux angles intérieurs non adjacents : 50° + 60° = 110°." },
      { type: "num", q: "Quelle est la somme des angles intérieurs d'un pentagone ?", answer: 540, unit: "°", explain: "(5 − 2) · 180° = 540°." },
      { type: "num", q: "Combien mesure chaque angle intérieur d'un hexagone régulier ?", answer: 120, unit: "°", explain: "720°/6 = 120°, ou bien 180° − 360°/6." },
      { type: "mc", q: "Quel quadrilatère a des diagonales de même longueur qui se coupent en leur milieu ?", options: ["Le rectangle", "Le losange (non carré)", "Le trapèze quelconque"], answer: 0, explain: "C'est une propriété du rectangle." },
      { type: "tf", q: "Dans tout parallélogramme, les diagonales ont la même longueur.", answer: false, explain: "Elles n'ont la même longueur que dans le rectangle (et donc dans le carré). En général, elles se coupent en leur milieu mais ont des longueurs différentes." },
      { type: "mc", q: "Le quadrilatère qui a une seule paire de côtés parallèles s'appelle…", options: ["trapèze", "parallélogramme", "losange"], answer: 0, explain: "Les bases du trapèze sont ses côtés parallèles." },
      { type: "num", q: "Un parallélogramme a un périmètre de 50 cm et un côté de 15 cm. Combien mesure le côté consécutif ?", answer: 10, unit: "cm", explain: "Demi-périmètre 25 cm : 25 − 15 = 10 cm." },
      { type: "order", q: "Range dans l'ordre les étapes de la démonstration que la somme des angles d'un triangle vaut 180°.", items: ["Par un sommet, je trace la parallèle au côté opposé", "Je repère les angles alternes-internes, égaux aux angles du triangle", "Les trois angles en ce sommet forment un angle plat", "Je conclus : la somme vaut 180°"], explain: "L'idée clé est la parallèle passant par un sommet." },
      { type: "mc", q: "Sur une sphère, la somme des angles d'un triangle est…", options: ["supérieure à 180°", "exactement 180°", "inférieure à 180°"], answer: 0, explain: "En géométrie sphérique (elliptique), la somme dépasse 180° : par exemple 270° pour un triangle à trois angles droits." }
    ]
  }
});
