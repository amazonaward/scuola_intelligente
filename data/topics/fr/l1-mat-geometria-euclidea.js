TOPIC('fr', {
  id: "l1-mat-geometria-euclidea",
  title: "Géométrie euclidienne : axiomes et triangles",
  intro: "Il y a près de deux mille trois cents ans, à Alexandrie, en Égypte, Euclide eut une idée révolutionnaire : partir d'un tout petit nombre d'affirmations acceptées sans preuve et <b>déduire</b> tout le reste par des raisonnements rigoureux. Ainsi naquit la méthode hypothético-déductive, fondement de toutes les mathématiques. Dans cette leçon, tu vas voir comment elle fonctionne : les <b>notions premières</b>, les <b>axiomes et les postulats</b>, et le premier grand résultat, les <b>cas d'égalité des triangles</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Euclide et la méthode déductive",
      html: `<p><b>Euclide</b> vécut à Alexandrie, en Égypte, vers 300 av. J.-C. et écrivit les <b>Éléments</b>, en 13 livres : un traité qui rassemble et organise de façon systématique la géométrie grecque (et un peu de théorie des nombres). Pendant plus de deux mille ans, ce fut le manuel de géométrie par excellence, et l'un des livres les plus diffusés de l'histoire après la Bible.</p>
<p>Voici la méthode :</p>
<ul>
<li><b>Notions premières</b> : des concepts qu'on ne définit pas, car toute définition demanderait d'autres mots, eux-mêmes à définir, et ainsi de suite à l'infini. En géométrie : <b>point, droite, plan</b> (et « être entre »). On les décrit par leurs propriétés, et non par une définition.</li>
<li><b>Définitions</b> : on explique le sens des nouveaux concepts à l'aide de concepts déjà connus (segment, angle, triangle, bissectrice…).</li>
<li><b>Axiomes et postulats</b> : des affirmations qu'on accepte comme vraies sans les démontrer. Euclide appelait <i>notions communes</i> celles qui sont valables partout (« des choses égales à une même chose sont égales entre elles ») et <i>postulats</i> celles qui sont propres à la géométrie.</li>
<li><b>Théorèmes</b> : des affirmations qu'on <b>démontre</b>, c'est-à-dire qu'on déduit logiquement des axiomes, des postulats et des théorèmes déjà démontrés.</li>
</ul>
<p>Un théorème s'énonce avec une <b>hypothèse</b> (ce qu'on suppose vrai) et une <b>conclusion</b> (ce qu'on veut prouver). Si H est l'hypothèse et C la conclusion, le théorème dit : « si H, alors C ».</p>`
    },
    {
      type: "text",
      title: "Les cinq postulats d'Euclide",
      html: `<ol>
<li>Par deux points distincts passe une (et une seule) droite, autrement dit on peut tracer un segment entre deux points.</li>
<li>Un segment peut être prolongé indéfiniment en ligne droite.</li>
<li>Étant donnés un centre et un rayon, on peut tracer un cercle.</li>
<li>Tous les angles droits sont égaux entre eux.</li>
<li><b>Le cinquième postulat</b> : si une droite qui en coupe deux autres forme, d'un même côté, des angles intérieurs dont la somme est inférieure à deux angles droits, les deux droites, prolongées, se rencontrent de ce côté. (En langage moderne, cela équivaut à : « par un point extérieur à une droite passe <b>une seule</b> parallèle à cette droite ».)</li>
</ol>
<p>Les quatre premiers semblent évidents. Le cinquième est long et compliqué : pendant des siècles, les mathématiciens ont cherché à le démontrer à partir des autres, sans y parvenir. Nous en parlerons dans la leçon sur les droites parallèles.</p>`
    },
    {
      type: "svg",
      title: "Pourquoi le triangle est spécial",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="34" font-size="18" text-anchor="middle" fill="#166534" font-weight="bold">Triangle : rigide</text>
<polygon points="50,240 250,240 150,80" fill="#bbf7d0" stroke="#166534" stroke-width="4"/>
<circle cx="50" cy="240" r="8" fill="#166534"/><circle cx="250" cy="240" r="8" fill="#166534"/><circle cx="150" cy="80" r="8" fill="#166534"/>
<text x="150" y="272" font-size="16" text-anchor="middle" fill="#14532d">trois côtés fixés → forme fixée (CCC)</text>
<text x="430" y="34" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Quadrilatère : il se déforme</text>
<polygon points="340,240 520,240 520,100 340,100" fill="#fed7aa" stroke="#9a3412" stroke-width="4"/>
<polygon points="340,240 520,240 560,100 380,100" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<circle cx="340" cy="240" r="8" fill="#9a3412"/><circle cx="520" cy="240" r="8" fill="#9a3412"/><circle cx="520" cy="100" r="8" fill="#9a3412"/><circle cx="340" cy="100" r="8" fill="#9a3412"/>
<text x="430" y="272" font-size="16" text-anchor="middle" fill="#7c2d12">quatre côtés fixés, forme variable</text>
</svg>`,
      caption: "C'est pourquoi les pylônes, les ponts et les grues sont faits de triangles : les triangles ne se déforment pas."
    },
    {
      type: "text",
      title: "Le triangle et ses éléments",
      html: `<p>Un <b>triangle</b> est la partie du plan délimitée par trois segments (les <b>côtés</b>) qui relient trois points non alignés (les <b>sommets</b>). Il a trois <b>angles intérieurs</b>.</p>
<ul>
<li><b>Selon les côtés</b> : <b>quelconque</b> (trois côtés différents), <b>isocèle</b> (deux côtés égaux), <b>équilatéral</b> (trois côtés égaux).</li>
<li><b>Selon les angles</b> : <b>acutangle</b>, <b>rectangle</b> (un angle droit), <b>obtusangle</b>.</li>
<li><b>Droites remarquables</b> : la <b>médiane</b> relie un sommet au milieu du côté opposé ; la <b>bissectrice</b> partage l'angle en deux angles égaux ; la <b>hauteur</b> est le segment issu d'un sommet et perpendiculaire à la droite qui porte le côté opposé. Les trois médianes se coupent au <b>centre de gravité</b>, les trois bissectrices au centre du cercle inscrit, les trois hauteurs à l'<b>orthocentre</b>.</li>
</ul>
<p>Deux figures sont <b>superposables</b> (on dit aussi <b>égales</b> ou isométriques) si on peut les faire coïncider par un déplacement (translation, rotation, retournement) : même forme et mêmes dimensions. Pour un triangle, cela demande 6 égalités (3 côtés et 3 angles), mais les <b>cas d'égalité</b> nous disent qu'il en suffit de <b>trois</b>, bien choisies.</p>
<p><b>Inégalité triangulaire</b> : dans tout triangle, chaque côté est <b>inférieur à la somme</b> des deux autres (et supérieur à leur différence). Avec trois bâtonnets de 2, 3 et 7 cm, tu ne construis aucun triangle : 2 + 3 &lt; 7 !</p>`
    },
    {
      type: "remember",
      title: "Les trois cas d'égalité",
      html: `<p>Deux triangles sont égaux s'ils ont, dans le même ordre, égaux :</p>
<ol>
<li><b>1er cas (CAC)</b> : deux côtés et l'<b>angle compris</b> entre eux.</li>
<li><b>2e cas (ACA)</b> : un côté et les <b>deux angles adjacents</b> à ce côté.</li>
<li><b>3e cas (CCC)</b> : les <b>trois côtés</b>.</li>
</ol>
<p>⚠️ <b>Ce ne sont pas des cas d'égalité</b> : trois angles égaux (triangles semblables mais de dimensions différentes), deux côtés et un angle <b>non compris</b> (CCA : il peut y avoir plusieurs triangles possibles).</p>`
    },
    {
      type: "widget",
      title: "Quel cas d'égalité ?",
      widget: "classify",
      options: { groups: ["1er cas (CAC)", "2e cas (ACA)", "3e cas (CCC)", "Insuffisant"], items: [
        ["deux côtés et l'angle compris", 0],
        ["un côté et les deux angles adjacents", 1],
        ["les trois côtés", 2],
        ["trois angles égaux", 3],
        ["deux côtés et un angle non compris", 3],
        ["AB = DE, BC = EF et angle B = angle E", 0],
        ["AB = DE, angle A = D et angle B = E", 1]
      ] },
      caption: "L'angle doit être compris entre les deux côtés ; le côté doit être adjacent aux deux angles."
    },
    {
      type: "example",
      title: "Une démonstration : les angles à la base du triangle isocèle",
      html: `<p><b>Théorème</b> : dans un triangle isocèle, les angles à la base sont égaux.</p>
<p><b>Hypothèse</b> : ABC avec AC = BC. <b>Conclusion</b> : angle A = angle B.</p>
<p><b>Démonstration</b> : je trace la bissectrice de l'angle C, qui coupe AB en D. Je considère les triangles ACD et BCD :</p>
<ul>
<li>AC = BC par hypothèse ;</li>
<li>l'angle ACD = l'angle BCD car CD est la bissectrice ;</li>
<li>CD est un côté commun.</li>
</ul>
<p>Ils ont deux côtés et l'angle compris égaux : d'après le <b>1er cas</b>, ACD et BCD sont égaux. Donc les angles correspondants, en A et en B, sont égaux. <b>CQFD</b> (ce qu'il fallait démontrer)</p>
<p>Ce théorème (Éléments, I.5) fut appelé au Moyen Âge <i>pons asinorum</i>, le « pont aux ânes », car c'était le premier obstacle où s'arrêtaient les élèves les moins doués.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : axiomes et cas d'égalité",
      questions: [
        { type: "mc", q: "Quelles sont les notions premières de la géométrie ?", options: ["Le point, la droite et le plan", "Le triangle, le carré et le cercle", "L'angle, le segment et l'aire"], answer: 0, explain: "Le point, la droite et le plan ne se définissent pas : on les décrit par les axiomes." },
        { type: "tf", q: "Un postulat doit être démontré avant de pouvoir être utilisé.", answer: false, explain: "Un postulat est une affirmation acceptée sans démonstration." },
        { type: "num", q: "Combien y a-t-il de postulats d'Euclide ?", answer: 5, explain: "Cinq ; le cinquième est le célèbre postulat des parallèles." }
      ]
    },
    {
      type: "example",
      title: "Exemple concret : mesurer un fleuve sans le traverser",
      html: `<p>Comment mesurer la largeur AT d'un fleuve ? Depuis la rive où tu te trouves, en A, face à un arbre T sur l'autre rive :</p>
<ol>
<li>marche le long de la rive, perpendiculairement à AT, jusqu'à un point B et plante un piquet ;</li>
<li>continue sur la même longueur jusqu'à C (donc AB = BC) ;</li>
<li>à partir de C, éloigne-toi perpendiculairement à la rive jusqu'à ce que, en regardant en arrière, l'arbre T et le piquet B soient alignés avec toi : tu es en D.</li>
</ol>
<p>Les triangles ABT et CBD ont AB = CB, des angles droits en A et en C et des angles égaux en B car opposés par le sommet : d'après le <b>2e cas</b>, ils sont égaux. Donc CD = AT : la distance que tu as mesurée sur la terre ferme est la largeur du fleuve. Le dessin se trouve dans l'onglet « Le fleuve » parmi les explications alternatives.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le pont aux ânes et Thalès",
      html: `<p>Selon la tradition, le premier à avoir démontré des théorèmes de géométrie fut <b>Thalès de Milet</b> (VIIe–VIe siècle av. J.-C.). On raconte qu'il utilisait justement l'égalité des triangles pour calculer la distance d'un navire à la côte, une application très proche du problème du fleuve. Euclide, trois siècles plus tard, organisa le tout en un système.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Hilbert et la rigueur moderne",
      html: `<p>Les <i>Éléments</i> d'Euclide, bien que géniaux, ont quelques trous logiques : Euclide utilise parfois des choses « évidentes » sur la figure qui ne figurent pas dans les postulats. En 1899, le mathématicien allemand <b>David Hilbert</b> publia les <i>Grundlagen der Geometrie</i> (« Fondements de la géométrie »), avec un système d'axiomes complet et sans lacunes. Hilbert disait qu'au lieu de points, de droites et de plans, on pourrait dire « tables, chaises et chopes de bière » : ce qui compte, ce sont les relations entre les objets, pas leur nom.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la géométrie euclidienne",
      intro: "La géométrie se comprend mieux avec les mains et avec le dessin. Essaie ces chemins.",
      tabs: [
        {
          label: "📏 Règle et compas",
          html: `<p>Dans le premier théorème des <i>Éléments</i> (I.1), Euclide construit un <b>triangle équilatéral</b> sur un segment AB en utilisant seulement les trois premiers postulats. Avec le compas (postulat 3), tu traces le cercle de centre A et de rayon AB, puis celui de centre B et de rayon AB. Ils se coupent en C, et AC = AB (rayons du premier), BC = AB (rayons du second) : les trois côtés sont égaux. Aucune mesure, seulement de la logique !</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="225" cy="190" r="90" fill="none" stroke="#6366f1" stroke-width="3"/>
<circle cx="315" cy="190" r="90" fill="none" stroke="#f97316" stroke-width="3"/>
<polygon points="225,190 315,190 270,112" fill="#fde68a" stroke="#1f2937" stroke-width="4"/>
<circle cx="225" cy="190" r="6" fill="#1f2937"/><circle cx="315" cy="190" r="6" fill="#1f2937"/><circle cx="270" cy="112" r="6" fill="#1f2937"/>
<text x="212" y="212" font-size="18" fill="#1f2937" font-weight="bold">A</text>
<text x="322" y="212" font-size="18" fill="#1f2937" font-weight="bold">B</text>
<text x="262" y="100" font-size="18" fill="#1f2937" font-weight="bold">C</text>
<text x="470" y="140" font-size="16" fill="#4338ca">AC = rayon du cercle A</text>
<text x="470" y="170" font-size="16" fill="#c2410c">BC = rayon du cercle B</text>
<text x="470" y="200" font-size="16" fill="#1f2937">AB = rayon des deux</text>
<text x="470" y="232" font-size="16" fill="#166534" font-weight="bold">→ ABC équilatéral</text>
</svg>`
        },
        {
          label: "🌊 Le fleuve (avec le dessin)",
          html: `<p>Voici le schéma du problème du fleuve : les triangles ABT et CBD sont « l'un à l'envers de l'autre », tournés d'un demi-tour autour de B. Si deux triangles se superposent par une rotation, ils sont égaux.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="70" width="600" height="110" fill="#bae6fd"/>
<text x="500" y="125" font-size="18" fill="#0369a1" font-weight="bold">fleuve</text>
<circle cx="150" cy="70" r="9" fill="#16a34a"/><text x="130" y="60" font-size="18" fill="#166534" font-weight="bold">T (arbre)</text>
<line x1="150" y1="70" x2="150" y2="180" stroke="#1f2937" stroke-width="3"/>
<line x1="150" y1="180" x2="450" y2="180" stroke="#1f2937" stroke-width="3"/>
<line x1="450" y1="180" x2="450" y2="280" stroke="#1f2937" stroke-width="3"/>
<line x1="150" y1="70" x2="450" y2="280" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<circle cx="150" cy="180" r="6" fill="#1f2937"/><circle cx="300" cy="180" r="6" fill="#1f2937"/><circle cx="450" cy="180" r="6" fill="#1f2937"/><circle cx="450" cy="280" r="6" fill="#1f2937"/>
<text x="128" y="206" font-size="18" fill="#1f2937" font-weight="bold">A</text>
<text x="293" y="206" font-size="18" fill="#1f2937" font-weight="bold">B</text>
<text x="458" y="206" font-size="18" fill="#1f2937" font-weight="bold">C</text>
<text x="458" y="285" font-size="18" fill="#1f2937" font-weight="bold">D</text>
<text x="225" y="228" font-size="16" text-anchor="middle" fill="#1f2937">AB = BC</text>
<text x="105" y="130" font-size="16" fill="#1f2937">AT</text>
<text x="470" y="240" font-size="16" fill="#1f2937">CD = AT</text>
</svg>`
        },
        {
          label: "🥢 Avec des bâtonnets",
          html: `<p>Prends des bâtonnets ou des pailles de 3, 4 et 5 cm et relie-les par leurs extrémités avec un peu de pâte à modeler : tu obtiendras <b>un seul triangle possible</b> (au retournement près). Tout autre triangle construit avec les trois mêmes longueurs se superpose au tien : c'est le 3e cas d'égalité. Maintenant, relie quatre bâtonnets : le quadrilatère s'écrase et change de forme. C'est pourquoi une diagonale (un bâtonnet de plus) suffit à le rendre rigide, et c'est pourquoi on voit des triangles partout dans les pylônes et les ponts.</p>
<p>Essaie aussi de construire un triangle avec 2, 3 et 7 cm : tu n'y arrives pas, car 2 + 3 &lt; 7 (inégalité triangulaire).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de la géométrie euclidienne",
      nodes: [
        { id: "prim", label: "Notions premières", x: 50, y: 6, color: "#6366f1", html: "Point, droite, plan : on ne les définit pas.", why: "Une définition utilise d'autres mots qui doivent à leur tour être définis : pour ne pas continuer à l'infini, on part de quelques concepts considérés comme connus. Hilbert (1899) les laissa volontairement « sans nom »." },
        { id: "ass", label: "Axiomes et postulats", x: 20, y: 28, color: "#f59e0b", html: "Vérités acceptées sans démonstration.", why: "Ils sont nécessaires car toute démonstration part de quelque chose de déjà admis. Euclide en choisit peu, et simples : les cinq postulats et les notions communes." },
        { id: "def", label: "Définitions", x: 80, y: 28, color: "#16a34a", html: "On explique de nouveaux concepts avec ceux déjà connus.", why: "Elles donnent des noms précis (triangle, bissectrice…) en n'utilisant que ce qui a déjà été introduit." },
        { id: "teo", label: "Théorèmes et démonstrations", x: 50, y: 52, color: "#a855f7", html: "Hypothèse → conclusion, par déductions logiques.", why: "La méthode hypothético-déductive, déjà présente chez Thalès et Pythagore et systématisée par Euclide, garantit qu'une vérité est aussi certaine que les postulats dont elle découle." },
        { id: "cong", label: "Égalité de figures", x: 20, y: 76, color: "#0ea5e9", html: "Même forme et mêmes dimensions : figures superposables.", why: "Euclide l'introduit par la « superposition » (un déplacement) ; Hilbert la prend comme relation primitive, avec ses propres axiomes." },
        { id: "crit", label: "Cas d'égalité des triangles", x: 50, y: 92, color: "#ef4444", html: "CAC, ACA, CCC.", why: "Ils découlent des postulats : trois éléments bien choisis déterminent le triangle de façon unique. C'est le fondement de la triangulation utilisée par les géomètres et les navigateurs." },
        { id: "isos", label: "Triangle isocèle", x: 85, y: 76, color: "#22c55e", html: "Angles à la base égaux (et réciproquement).", why: "C'est le premier « vrai » théorème du livre I (pons asinorum) : on le démontre avec le 1er cas d'égalité." },
        { id: "v", label: "Cinquième postulat", x: 85, y: 52, color: "#14b8a6", html: "Condition pour que deux droites se rencontrent ; équivaut à l'unicité de la parallèle.", why: "Le nier mène aux géométries non euclidiennes (Lobatchevski, Bolyai, Riemann au XIXe siècle) : une autre géométrie, tout aussi cohérente." }
      ],
      edges: [
        ["prim", "ass", "décrites par"],
        ["prim", "def", "base des"],
        ["ass", "teo", "prémisses des"],
        ["def", "teo", "langage des"],
        ["teo", "cong", "étudient"],
        ["cong", "crit", "se vérifie avec"],
        ["crit", "isos", "démontrent"],
        ["ass", "v", "comprennent"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : triangles",
      questions: [
        { type: "mc", q: "Deux triangles ont leurs trois côtés respectivement égaux. Ils sont égaux d'après…", options: ["le 1er cas", "le 2e cas", "le 3e cas"], answer: 2, explain: "Trois côtés égaux : cas CCC, le troisième." },
        { type: "tf", q: "Deux triangles qui ont leurs trois angles respectivement égaux sont toujours égaux.", answer: false, explain: "Ils peuvent avoir la même forme mais des dimensions différentes (ils sont semblables, pas égaux)." },
        { type: "num", q: "Un triangle isocèle a un angle au sommet principal de 40°. Combien mesure chaque angle à la base ? (La somme des angles intérieurs vaut 180°.)", answer: 70, unit: "°", explain: "(180 − 40)/2 = 70° chacun." }
      ]
    }
  ],
  glossary: [
    { t: "Notion première", d: "Concept qu'on ne définit pas (point, droite, plan)." },
    { t: "Axiome / postulat", d: "Affirmation acceptée sans démonstration." },
    { t: "Théorème", d: "Affirmation démontrée à partir d'axiomes et de théorèmes déjà connus." },
    { t: "Hypothèse et conclusion", d: "L'hypothèse est ce qu'on suppose vrai ; la conclusion est ce qu'on veut démontrer." },
    { t: "Figures égales (superposables)", d: "Figures qu'on peut faire coïncider par un déplacement." },
    { t: "Cas d'égalité", d: "Conditions minimales (CAC, ACA, CCC) qui garantissent que deux triangles sont égaux." },
    { t: "Triangle isocèle", d: "Triangle qui a au moins deux côtés égaux." },
    { t: "Médiane, bissectrice, hauteur", d: "Droites remarquables d'un triangle : vers le milieu du côté opposé, qui partage l'angle en deux, perpendiculaire au côté opposé." },
    { t: "Inégalité triangulaire", d: "Chaque côté d'un triangle est inférieur à la somme des deux autres." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Pourquoi le point, la droite et le plan sont-ils des notions premières ?", options: ["Parce qu'on ne les définit pas : toute définition demanderait d'autres termes à définir", "Parce que ce sont les plus faciles à dessiner", "Parce qu'ils ont été démontrés en premier"], answer: 0, explain: "Ce sont les concepts de départ de la théorie, décrits par les axiomes." },
      { type: "tf", q: "Un postulat est une affirmation acceptée sans démonstration.", answer: true, explain: "Les axiomes et les postulats sont le point de départ des démonstrations." },
      { type: "text", q: "Qui a écrit les Éléments vers 300 av. J.-C. ?", answer: ["euclide"], explain: "Euclide, à Alexandrie, en Égypte." },
      { type: "mc", q: "Le 1er cas d'égalité des triangles demande…", options: ["deux côtés et l'angle compris", "deux côtés et un angle quelconque", "trois angles"], answer: 0, explain: "CAC : deux côtés et l'angle compris entre eux." },
      { type: "mc", q: "Le 2e cas demande…", options: ["un côté et les deux angles adjacents", "trois côtés", "deux angles et deux côtés"], answer: 0, explain: "ACA : un côté et les deux angles qui lui sont adjacents." },
      { type: "num", q: "Un triangle isocèle a un périmètre de 40 cm et une base de 12 cm. Combien mesure chacun des deux côtés égaux ?", answer: 14, unit: "cm", explain: "(40 − 12)/2 = 14 cm." },
      { type: "order", q: "Range dans l'ordre les étapes d'une démonstration.", items: ["Écrire l'hypothèse", "Écrire la conclusion", "Faire la figure et repérer les triangles à comparer", "Appliquer un cas d'égalité", "Conclure"], explain: "On part de l'hypothèse et de la conclusion, puis on construit la chaîne de déductions." },
      { type: "mc", q: "Pourquoi utilise-t-on des triangles dans les pylônes ?", options: ["Parce qu'avec trois côtés fixés, la forme ne peut pas se déformer (3e cas)", "Parce qu'ils sont moins chers que les carrés", "Parce qu'ils ont les plus grands angles"], answer: 0, explain: "Le triangle est le seul polygone rigide." },
      { type: "tf", q: "Dans un triangle isocèle, les angles à la base sont égaux.", answer: true, explain: "On le démontre avec le 1er cas d'égalité en traçant la bissectrice de l'angle au sommet principal." },
      { type: "num", q: "Un triangle a deux côtés de 3 cm et 5 cm ; le troisième mesure un nombre entier de cm. Quelle est sa plus grande valeur possible ?", answer: 7, unit: "cm", explain: "Le troisième côté doit être inférieur à 3 + 5 = 8 et supérieur à 5 − 3 = 2 : le plus grand entier est 7." }
    ]
  }
});
