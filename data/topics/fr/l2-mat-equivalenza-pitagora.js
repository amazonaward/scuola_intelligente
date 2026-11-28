TOPIC('fr', {
  id: "l2-mat-equivalenza-pitagora",
  title: "Équivalence et théorèmes d'Euclide et de Pythagore",
  intro: "Un rectangle et un triangle peuvent avoir des formes très différentes et occuper <b>la même place</b>. Quand deux figures ont la même étendue, on dit qu'elles sont <b>équivalentes</b>. De cette idée, que tu as déjà utilisée pour calculer des aires, naît le théorème le plus célèbre des mathématiques, celui de <b>Pythagore</b>, ainsi que les deux théorèmes d'<b>Euclide</b> sur le triangle rectangle. Tu verras non seulement comment on les utilise, mais aussi <b>pourquoi</b> ils sont vrais.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Figures équivalentes",
      html: `<p>Deux figures planes sont dites <b>superposables</b> (ou isométriques) si l'on peut les faire coïncider exactement. Elles sont dites <b>équivalentes</b> si elles ont la <b>même étendue</b>, c'est-à-dire la même aire, même si leurs formes sont différentes. Deux figures superposables sont toujours équivalentes, mais pas l'inverse : un carré de 4 cm de côté et un rectangle de 8 cm × 2 cm ont tous les deux une aire de 16 cm², mais ils ne sont pas superposables.</p>
<p>L'équivalence est une relation d'équivalence (réflexive, symétrique, transitive) et elle a deux propriétés utiles :</p>
<ul>
<li>des sommes de figures équivalentes <b>(sans points intérieurs communs)</b> sont équivalentes ;</li>
<li>des différences de figures équivalentes sont équivalentes.</li>
</ul>
<p>C'est la technique du <b>découpage et recollement</b> : on découpe une figure en morceaux et on les réassemble pour former une autre figure. Ainsi, pour comparer des aires, pas besoin de formules : des ciseaux et de l'imagination suffisent. Le paradoxe apparent, c'est qu'on peut comparer des aires sans les mesurer.</p>`
    },
    {
      type: "text",
      title: "Aires des polygones : tout part du rectangle",
      html: `<p>À partir du rectangle, on obtient toutes les autres formules grâce à l'équivalence :</p>
<ul>
<li><b>Rectangle</b> : A = longueur × largeur (base × hauteur).</li>
<li><b>Parallélogramme</b> : il est équivalent à un rectangle de <b>même base et même hauteur</b> (on déplace le petit triangle de gauche vers la droite). A = b × h.</li>
<li><b>Triangle</b> : c'est la <b>moitié</b> d'un parallélogramme de même base et même hauteur. A = b × h / 2. Tous les triangles de même base et de même hauteur sont équivalents, même s'ils ont des formes différentes : il suffit de faire glisser le sommet sur une parallèle à la base.</li>
<li><b>Trapèze</b> : A = (B + b) × h / 2 (on l'accole à un second trapèze identique retourné, et on obtient un parallélogramme de base B + b).</li>
<li><b>Losange</b> : A = (D × d) / 2.</li>
<li><b>Polygone circonscrit à un cercle</b> : A = p × r (demi-périmètre fois rayon).</li>
</ul>
<p>Rappel : deux figures peuvent avoir la même aire mais des périmètres différents, et inversement. À périmètre égal, parmi tous les rectangles, c'est le carré qui a la plus grande aire.</p>`
    },
    {
      type: "svg",
      title: "Le triangle qui glisse",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="60" x2="570" y2="60" stroke="#6366f1" stroke-width="3" stroke-dasharray="9 7"/>
<line x1="60" y1="240" x2="360" y2="240" stroke="#1f2937" stroke-width="4"/>
<polygon points="60,240 360,240 150,60" fill="#bbf7d0" fill-opacity="0.55" stroke="#166534" stroke-width="3"/>
<polygon points="60,240 360,240 300,60" fill="#fed7aa" fill-opacity="0.55" stroke="#c2410c" stroke-width="3"/>
<polygon points="60,240 360,240 480,60" fill="#bfdbfe" fill-opacity="0.55" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="150" cy="60" r="7" fill="#166534"/><circle cx="300" cy="60" r="7" fill="#c2410c"/><circle cx="480" cy="60" r="7" fill="#1d4ed8"/>
<line x1="150" y1="60" x2="150" y2="240" stroke="#6b7280" stroke-width="2" stroke-dasharray="5 5"/>
<text x="458" y="150" font-size="16" fill="#1f2937">même base b</text>
<text x="458" y="178" font-size="16" fill="#1f2937">même hauteur h</text>
<text x="458" y="214" font-size="16" fill="#166534" font-weight="bold">trois triangles différents,</text>
<text x="458" y="236" font-size="16" fill="#166534" font-weight="bold">même aire b·h/2</text>
<text x="40" y="42" font-size="16" fill="#4338ca">Le sommet peut glisser sur cette droite parallèle à la base</text>
</svg>`,
      caption: "Si le sommet se déplace sur une parallèle à la base, la hauteur ne change pas : tous les triangles obtenus sont équivalents."
    },
    {
      type: "remember",
      title: "Le triangle rectangle et ses éléments",
      html: `<p>Dans un triangle rectangle, les côtés qui forment l'angle droit sont les <b>côtés de l'angle droit</b> (a, b) ; le côté opposé à l'angle droit est l'<b>hypoténuse</b> (c) : c'est toujours le plus long côté. Si tu traces la <b>hauteur h</b> relative à l'hypoténuse, elle la partage en deux segments, les <b>projections des côtés de l'angle droit</b> sur l'hypoténuse : <b>p</b> est la projection du côté a et <b>q</b> celle du côté b. On a c = p + q.</p>
<p>Un théorème est une implication : le théorème <b>direct</b> (« si H alors C ») et sa <b>réciproque</b> (« si C alors H »). Le théorème de Pythagore est vrai aussi dans l'autre sens.</p>`
    },
    {
      type: "text",
      title: "Le théorème de Pythagore",
      html: `<p><b>Énoncé géométrique</b> : dans un triangle rectangle, le carré construit sur l'hypoténuse est équivalent à la somme des carrés construits sur les deux autres côtés.</p>
<p><b>Formule</b> : si a et b sont les côtés de l'angle droit et c l'hypoténuse, <b>a² + b² = c²</b>. On en déduit :</p>
<ul>
<li>c = √(a² + b²)</li>
<li>a = √(c² − b²) et b = √(c² − a²)</li>
</ul>
<p><b>Réciproque</b> : si, dans un triangle, le carré d'un côté est égal à la somme des carrés des deux autres, le triangle est <b>rectangle</b> et ce côté est l'hypoténuse. C'est le principe de la <b>corde à nœuds</b> des arpenteurs : une corde à 12 nœuds équidistants, tendue en triangle de côtés 3, 4 et 5 unités, donne un angle droit parfait (en effet 3² + 4² = 9 + 16 = 25 = 5²).</p>
<p>Les <b>triplets pythagoriciens</b> sont des triplets de nombres entiers qui vérifient a² + b² = c² : (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25), et tous leurs multiples, comme (6, 8, 10) ou (9, 12, 15).</p>
<p><b>Deux triangles rectangles à connaître par cœur</b> :</p>
<ul>
<li>Le <b>triangle rectangle isocèle</b> (45°-45°-90°) : la diagonale d d'un carré de côté l vaut <b>d = l · √2</b>.</li>
<li>La <b>moitié d'un triangle équilatéral</b> (30°-60°-90°) : le petit côté de l'angle droit vaut la moitié de l'hypoténuse, le grand vaut (hypoténuse · √3) / 2. La hauteur d'un triangle équilatéral de côté l est <b>h = l · √3 / 2</b>.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Joue avec le théorème de Pythagore",
      widget: "pythagoras",
      options: {},
      caption: "Change les côtés de l'angle droit avec les curseurs : l'aire du carré construit sur l'hypoténuse est toujours la somme des aires des deux carrés construits sur les autres côtés."
    },
    {
      type: "example",
      title: "Exemples : l'échelle et l'écran",
      html: `<p><b>L'échelle</b>. Une échelle de 5 m est appuyée contre un mur, son pied étant à 3 m du mur. À quelle hauteur arrive-t-elle ? L'échelle est l'hypoténuse, la distance au mur est un côté de l'angle droit : la hauteur vaut √(5² − 3²) = √(25 − 9) = √16 = <b>4 m</b>.</p>
<p><b>L'écran</b>. Quand on dit qu'un téléviseur fait « 55 pouces », on indique sa <b>diagonale</b>. Un écran de 48 cm de large et 36 cm de haut a une diagonale de √(48² + 36²) = √(2304 + 1296) = √3600 = <b>60 cm</b> : c'est le triplet 3-4-5 multiplié par 12.</p>
<p><b>La diagonale d'une pièce</b>. Une pièce mesure 8 m de long, 6 m de large et 3 m de haut. La diagonale du sol vaut √(64 + 36) = 10 m ; la plus longue barre qui tient dans la pièce mesure √(10² + 3²) = √109 ≈ 10,44 m (le théorème vaut aussi dans l'espace !).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : Pythagore",
      questions: [
        { type: "num", q: "Les côtés de l'angle droit d'un triangle rectangle mesurent 9 cm et 12 cm. Combien mesure l'hypoténuse ?", answer: 15, unit: "cm", explain: "√(81 + 144) = √225 = 15 cm (triplet 3-4-5 multiplié par 3)." },
        { type: "num", q: "L'hypoténuse d'un triangle rectangle mesure 17 cm et un des autres côtés 8 cm. Combien mesure le troisième côté ?", answer: 15, unit: "cm", explain: "√(17² − 8²) = √(289 − 64) = √225 = 15 cm (triplet 8-15-17)." },
        { type: "tf", q: "Un triangle de côtés 6, 8 et 11 cm est rectangle.", answer: false, explain: "6² + 8² = 100, alors que 11² = 121 : la réciproque ne s'applique pas." },
        { type: "mc", q: "Combien vaut la diagonale d'un carré de 10 cm de côté ?", options: ["10√2 cm ≈ 14,1 cm", "20 cm", "10√3 cm"], answer: 0, explain: "d = l·√2 = 10√2 ≈ 14,14 cm." }
      ]
    },
    {
      type: "text",
      title: "Les deux théorèmes d'Euclide",
      html: `<p>Euclide démontre le théorème de Pythagore (Éléments I.47) par un raisonnement sur l'équivalence. De sa technique, on tire deux théorèmes sur le triangle rectangle (en France, on parle de <b>relations métriques dans le triangle rectangle</b>), qui portent sur la hauteur h relative à l'hypoténuse et sur les projections p et q des côtés de l'angle droit.</p>
<p><b>Premier théorème d'Euclide</b> : dans un triangle rectangle, le carré construit sur un côté de l'angle droit est équivalent au rectangle qui a pour dimensions l'hypoténuse et la projection de ce côté sur l'hypoténuse.</p>
<p style="text-align:center"><b>a² = c · p &nbsp;&nbsp;&nbsp; b² = c · q</b></p>
<p>En mots : <b>un côté de l'angle droit est moyenne proportionnelle entre l'hypoténuse et sa projection</b> : c / a = a / p.</p>
<p><b>Second théorème d'Euclide</b> : le carré construit sur la hauteur relative à l'hypoténuse est équivalent au rectangle qui a pour dimensions les deux projections.</p>
<p style="text-align:center"><b>h² = p · q</b></p>
<p>La hauteur est <b>moyenne proportionnelle</b> entre les projections : p / h = h / q.</p>
<p><b>Des théorèmes d'Euclide à Pythagore</b> : en additionnant a² = c·p et b² = c·q, on obtient a² + b² = c·(p + q) = c·c = c². Le théorème de Pythagore est donc une conséquence du premier théorème d'Euclide. La hauteur vaut aussi h = (a · b) / c (on l'obtient en calculant l'aire de deux façons : a·b/2 = c·h/2).</p>`
    },
    {
      type: "svg",
      title: "Le triangle rectangle et ses projections",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="40,250 400,250 144,87" fill="#e0e7ff" stroke="#4338ca" stroke-width="4"/>
<line x1="144" y1="87" x2="144" y2="250" stroke="#dc2626" stroke-width="4" stroke-dasharray="8 6"/>
<rect x="144" y="236" width="14" height="14" fill="none" stroke="#dc2626" stroke-width="3"/>
<circle cx="40" cy="250" r="6" fill="#1f2937"/><circle cx="400" cy="250" r="6" fill="#1f2937"/><circle cx="144" cy="87" r="6" fill="#1f2937"/><circle cx="144" cy="250" r="6" fill="#dc2626"/>
<text x="22" y="276" font-size="16" fill="#1f2937">B</text>
<text x="404" y="276" font-size="16" fill="#1f2937">C</text>
<text x="136" y="75" font-size="16" fill="#1f2937">A (angle droit)</text>
<text x="136" y="274" font-size="16" fill="#dc2626">H</text>
<text x="76" y="272" font-size="16" fill="#166534" font-weight="bold">p</text>
<text x="262" y="272" font-size="16" fill="#c2410c" font-weight="bold">q</text>
<text x="150" y="190" font-size="16" fill="#dc2626" font-weight="bold">h</text>
<text x="58" y="168" font-size="16" fill="#4338ca" font-weight="bold">côté a</text>
<text x="290" y="170" font-size="16" fill="#4338ca" font-weight="bold">côté b</text>
<text x="210" y="236" font-size="16" fill="#1f2937">hypoténuse c = p + q</text>
<text x="430" y="90" font-size="16" fill="#1f2937">1er th. d'Euclide :</text>
<text x="430" y="115" font-size="16" fill="#166534" font-weight="bold">a² = c · p</text>
<text x="430" y="140" font-size="16" fill="#c2410c" font-weight="bold">b² = c · q</text>
<text x="430" y="180" font-size="16" fill="#1f2937">2e th. d'Euclide :</text>
<text x="430" y="205" font-size="16" fill="#dc2626" font-weight="bold">h² = p · q</text>
<text x="430" y="245" font-size="16" fill="#1f2937">Pythagore : a² + b² = c²</text>
</svg>`,
      caption: "Sur le schéma, p est la projection du côté a ([AB]) sur l'hypoténuse et q celle du côté b ([AC])."
    },
    {
      type: "example",
      title: "Exemple numérique avec les théorèmes d'Euclide",
      html: `<p>Dans un triangle rectangle, les projections des côtés de l'angle droit sur l'hypoténuse mesurent p = 4 cm et q = 9 cm. Calcule tous les éléments.</p>
<ul>
<li>Hypoténuse : c = p + q = 13 cm.</li>
<li>Hauteur (2e théorème d'Euclide) : h = √(p · q) = √36 = <b>6 cm</b>.</li>
<li>Côté a (1er théorème d'Euclide) : a = √(c · p) = √(13 · 4) = √52 = 2√13 ≈ 7,21 cm.</li>
<li>Côté b : b = √(c · q) = √(13 · 9) = √117 = 3√13 ≈ 10,82 cm.</li>
<li>Vérification avec Pythagore : a² + b² = 52 + 117 = 169 = 13². ✓</li>
<li>Aire : c · h / 2 = 13 · 6 / 2 = <b>39 cm²</b> (et aussi a · b / 2 = (2√13 · 3√13) / 2 = 6 · 13 / 2 = 39 : les deux calculs coïncident).</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Avant Pythagore",
      html: `<p>Le théorème porte le nom de <b>Pythagore de Samos</b> (VIe siècle av. J.-C.), mais la relation était déjà connue d'autres peuples. La tablette babylonienne <b>Plimpton 322</b> (vers 1800 av. J.-C.) énumère des triplets pythagoriciens très grands, comme (119, 120, 169). En Inde, les <i>Sulba Sutra</i> décrivent des règles pour construire des autels à l'aide de triangles rectangles ; en Chine, le <i>Zhou Bi Suan Jing</i> montre la démonstration avec des carrés. Les Grecs furent probablement les premiers à le démontrer de façon générale : les mathématiques grecques ne se contentaient pas de savoir que cela marche, elles voulaient savoir <b>pourquoi</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le président mathématicien et le côté impossible",
      html: `<p>Le théorème a des centaines de démonstrations différentes. L'une d'elles fut publiée en 1876 par <b>James A. Garfield</b>, alors membre du Congrès des États-Unis et plus tard vingtième président : elle utilisait un trapèze formé de trois triangles rectangles.</p>
<p>Le théorème a aussi provoqué une crise. La diagonale d'un carré de côté 1 vaut √2, et <b>√2 n'est pas un rapport de nombres entiers</b> (il est irrationnel). Selon la tradition, cette découverte troubla les pythagoriciens, qui croyaient que tout était nombre entier ou rapport d'entiers : c'était la découverte des <b>grandeurs incommensurables</b>.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de voir le théorème de Pythagore",
      intro: "Tu n'as pas à faire confiance à la formule : tu peux la voir de tes propres yeux, en découpant et en recollant.",
      tabs: [
        {
          label: "🇨🇳 Démonstration chinoise (carré incliné)",
          html: `<p>Prends un carré de côté <b>a + b</b>. À l'intérieur, place <b>4 triangles rectangles identiques</b> (côtés de l'angle droit a et b) de deux façons différentes. Dans la première, les triangles laissent libre un carré incliné de côté <b>c</b>. Dans la seconde, les triangles laissent libres deux carrés, de côté <b>a</b> et de côté <b>b</b>. L'aire du grand carré est la même dans les deux cas et les quatre triangles sont les mêmes : ce qui reste doit être égal. Donc <b>c² = a² + b²</b>. Aucun calcul : ce n'est qu'un réarrangement !</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="30" y="30" width="200" height="200" fill="#fef9c3" stroke="#1f2937" stroke-width="3"/>
<polygon points="30,30 98,30 30,162" fill="#a5b4fc" stroke="#1f2937" stroke-width="2"/>
<polygon points="230,30 230,98 98,30" fill="#a5b4fc" stroke="#1f2937" stroke-width="2"/>
<polygon points="230,230 162,230 230,98" fill="#a5b4fc" stroke="#1f2937" stroke-width="2"/>
<polygon points="30,230 30,162 162,230" fill="#a5b4fc" stroke="#1f2937" stroke-width="2"/>
<polygon points="98,30 230,98 162,230 30,162" fill="#fde68a" stroke="#b45309" stroke-width="3" fill-opacity="0.6"/>
<text x="95" y="140" font-size="16" fill="#92400e" font-weight="bold">c²</text>
<rect x="330" y="30" width="200" height="200" fill="#fef9c3" stroke="#1f2937" stroke-width="3"/>
<rect x="330" y="30" width="68" height="68" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<rect x="398" y="98" width="132" height="132" fill="#fed7aa" stroke="#c2410c" stroke-width="3"/>
<text x="352" y="72" font-size="16" fill="#166534" font-weight="bold">b²</text>
<text x="446" y="168" font-size="16" fill="#c2410c" font-weight="bold">a²</text>
<text x="70" y="262" font-size="16" fill="#1f2937">Carré de côté a + b : 4 triangles + c²</text>
<text x="300" y="286" font-size="16" fill="#1f2937">Mêmes 4 triangles + a² + b²  →  c² = a² + b²</text>
</svg>`
        },
        {
          label: "🧩 Avec les carreaux",
          html: `<p>Sur du papier quadrillé, dessine un triangle rectangle dont les côtés de l'angle droit mesurent 3 et 4 carreaux. Construis les trois carrés sur les côtés et compte : celui construit sur le côté de 3 contient 9 carreaux, celui sur le côté de 4 en contient 16, et celui sur l'hypoténuse en contient <b>25</b> (côté 5) : 9 + 16 = 25. Essaie ensuite avec 5 et 12 : 25 + 144 = 169 = 13². Si les trois nombres ne forment pas un triplet pythagoricien, l'hypoténuse n'est pas un nombre entier et on ne peut plus compter ses carreaux « à l'œil » : mais l'égalité des aires reste vraie.</p>`
        },
        {
          label: "🧵 La corde à 12 nœuds",
          html: `<p>Comment les bâtisseurs traçaient-ils les angles droits (et les anciens Égyptiens, selon la tradition des <i>harpédonaptes</i>, les « tendeurs de corde ») ? Avec une corde à <b>12 nœuds</b> équidistants. Ils la tendaient en triangle de côtés 3, 4 et 5 segments : l'angle entre les côtés de 3 et 4 est <b>droit</b>. La réciproque du théorème garantit qu'il en est toujours ainsi : si les côtés vérifient 3² + 4² = 5², le triangle est rectangle. Aujourd'hui encore, les maçons utilisent la « règle du 3-4-5 » pour mettre les fondations d'équerre.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : équivalence, Euclide, Pythagore",
      nodes: [
        { id: "equi", label: "Équivalence", x: 50, y: 6, color: "#6366f1", html: "Même étendue, même avec des formes différentes.", why: "Les Anciens n'avaient pas de nombres pour mesurer toutes les aires (les grandeurs incommensurables les mettaient en crise) : ils comparaient les figures par découpages et recollements, sans nombres." },
        { id: "aree", label: "Formules des aires", x: 20, y: 30, color: "#f59e0b", html: "Rectangle, parallélogramme, triangle, trapèze.", why: "Chaque formule découle du rectangle par un découpage : parallélogramme = rectangle, triangle = moitié de parallélogramme." },
        { id: "rett", label: "Triangle rectangle", x: 80, y: 30, color: "#16a34a", html: "Côtés de l'angle droit, hypoténuse, hauteur, projections.", why: "C'est la « brique » de la trigonométrie et du calcul des distances : tout triangle se découpe en triangles rectangles grâce à une hauteur." },
        { id: "euc", label: "Théorèmes d'Euclide", x: 50, y: 52, color: "#a855f7", html: "a² = c·p, b² = c·q, h² = p·q.", why: "Euclide les obtient par l'équivalence de carrés et de rectangles (livres I et VI). On les démontre aussi par la similitude des trois triangles ABC, HBA, HAC : tu le verras dans la leçon suivante." },
        { id: "pit", label: "Théorème de Pythagore", x: 20, y: 76, color: "#ef4444", html: "a² + b² = c².", why: "Chez les Babyloniens, c'était une recette numérique ; chez Euclide (I.47), cela devient un théorème démontré : les carrés ne sont pas des nombres, mais des figures." },
        { id: "inv", label: "Réciproque", x: 80, y: 76, color: "#0ea5e9", html: "Si a² + b² = c², le triangle est rectangle.", why: "Elle permet de reconnaître un angle droit uniquement par des mesures de longueur : la corde à nœuds, la mise d'équerre des murs." },
        { id: "irr", label: "Irrationnels", x: 50, y: 92, color: "#14b8a6", html: "√2 n'est pas une fraction.", why: "Pythagore appliqué au carré de côté 1 donne la diagonale √2. Son irrationalité, découverte par les pythagoriciens, montra que les nombres rationnels ne suffisent pas pour mesurer la géométrie." }
      ],
      edges: [
        ["equi", "aree", "permet"],
        ["aree", "euc", "utilisées dans"],
        ["rett", "euc", "possède"],
        ["euc", "pit", "implique"],
        ["pit", "inv", "a pour réciproque"],
        ["pit", "irr", "mène aux"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : Euclide",
      questions: [
        { type: "num", q: "Dans un triangle rectangle, l'hypoténuse mesure 25 cm et la projection d'un des côtés de l'angle droit sur elle 9 cm. Combien mesure ce côté ?", answer: 15, unit: "cm", explain: "Premier théorème d'Euclide : a² = c · p = 25 · 9 = 225, donc a = 15 cm." },
        { type: "num", q: "Les projections des côtés de l'angle droit sur l'hypoténuse mesurent 2 cm et 8 cm. Combien mesure la hauteur relative à l'hypoténuse ?", answer: 4, unit: "cm", explain: "Second théorème d'Euclide : h² = p · q = 16, donc h = 4 cm." },
        { type: "tf", q: "Deux triangles de même base et de même hauteur ont toujours la même aire.", answer: true, explain: "Aire = base × hauteur / 2 : si les bases et les hauteurs sont égales, les aires le sont aussi (les triangles sont équivalents)." }
      ]
    }
  ],
  glossary: [
    { t: "Figures équivalentes", d: "Figures qui ont la même aire (étendue), même si leurs formes sont différentes." },
    { t: "Superposables", d: "Figures que l'on peut faire coïncider exactement par un déplacement (isométrie)." },
    { t: "Côté de l'angle droit", d: "Chacun des deux côtés d'un triangle rectangle qui forment l'angle droit." },
    { t: "Hypoténuse", d: "Le côté opposé à l'angle droit : le plus long du triangle rectangle." },
    { t: "Projection d'un côté de l'angle droit", d: "Segment de l'hypoténuse compris entre un sommet et le pied de la hauteur relative à l'hypoténuse." },
    { t: "Théorème de Pythagore", d: "Dans un triangle rectangle, a² + b² = c²." },
    { t: "Triplet pythagoricien", d: "Trois nombres entiers qui vérifient a² + b² = c², comme (3, 4, 5)." },
    { t: "Moyenne proportionnelle", d: "Le nombre x tel que a / x = x / b, c'est-à-dire x = √(a·b)." },
    { t: "Théorèmes d'Euclide", d: "Dans un triangle rectangle : a² = c·p, b² = c·q (premier) et h² = p·q (second)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Deux figures sont équivalentes quand…", options: ["Elles sont superposables", "Elles ont la même aire", "Elles ont le même périmètre"], answer: 1, explain: "Équivalentes = même étendue (aire), même avec des formes différentes." },
      { type: "num", q: "Un triangle a une base de 10 cm et une hauteur de 6 cm. Quelle est son aire ?", answer: 30, unit: "cm²", explain: "A = b · h / 2 = 10 · 6 / 2 = 30 cm²." },
      { type: "num", q: "Les côtés de l'angle droit d'un triangle rectangle mesurent 5 cm et 12 cm. Combien mesure l'hypoténuse ?", answer: 13, unit: "cm", explain: "√(25 + 144) = √169 = 13 cm." },
      { type: "tf", q: "Dans un triangle de côtés 7, 24 et 25 cm, l'angle opposé au côté de 25 cm est droit.", answer: true, explain: "7² + 24² = 49 + 576 = 625 = 25² : d'après la réciproque, le triangle est rectangle." },
      { type: "num", q: "La diagonale d'un carré mesure 12√2 cm. Combien mesure son côté ?", answer: 12, unit: "cm", explain: "d = l√2, donc l = d/√2 = 12 cm." },
      { type: "mc", q: "Le premier théorème d'Euclide affirme que…", options: ["h² = p · q", "a² = c · p", "a + b = c"], answer: 1, explain: "Le carré d'un côté de l'angle droit est égal au produit de l'hypoténuse par la projection de ce côté." },
      { type: "num", q: "Dans un triangle rectangle, les projections des côtés de l'angle droit sur l'hypoténuse mesurent 3 cm et 12 cm. Combien mesure la hauteur relative à l'hypoténuse ?", answer: 6, unit: "cm", explain: "h = √(3 · 12) = √36 = 6 cm." },
      { type: "num", q: "Un triangle équilatéral a un côté de 10 cm. Combien vaut sa hauteur, arrondie au dixième ? (√3 ≈ 1,732)", answer: 8.7, tol: 0.1, unit: "cm", explain: "h = l · √3 / 2 = 10 · 1,732 / 2 ≈ 8,66 ≈ 8,7 cm." },
      { type: "text", q: "Comment s'appelle le côté d'un triangle rectangle opposé à l'angle droit ?", answer: ["hypoténuse", "l'hypoténuse", "hypotenuse"], explain: "L'hypoténuse est le plus long côté du triangle rectangle." },
      { type: "order", q: "Remets dans l'ordre les étapes pour trouver la hauteur atteinte par une échelle contre un mur.", items: ["Repère le triangle rectangle (échelle = hypoténuse)", "Écris c² = a² + b²", "Isole le côté cherché : a = √(c² − b²)", "Calcule la valeur numérique"], explain: "On repère le triangle, on applique Pythagore, on isole le côté inconnu et on calcule." }
    ]
  }
});
