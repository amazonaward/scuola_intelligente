TOPIC('fr', {
  id: "l2-mat-circonferenza-poligoni",
  title: "Cercle et polygones",
  intro: "Le cercle est la courbe la plus parfaite qui soit : chacun de ses points est à la même distance du centre. Des roues aux CD, des lentilles aux orbites, il est partout. Dans cette leçon, tu découvres ses propriétés géométriques : <b>cordes, tangentes, angles au centre et angles inscrits</b>, et le lien particulier qui l'unit aux <b>polygones inscrits et circonscrits</b>. Un résultat avant tout : l'angle inscrit vaut <b>la moitié</b> de l'angle au centre qui intercepte le même arc.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Cercle et disque : le vocabulaire",
      html: `<p>Le <b>cercle</b> est l'ensemble des points du plan situés à une distance fixe <b>r</b> (le <b>rayon</b>) d'un point fixe <b>O</b>, le <b>centre</b>. Le <b>disque</b> est le cercle avec la partie du plan qu'il délimite. C'est le dernier des trois postulats « de construction » d'Euclide : étant donnés un centre et un rayon, on peut tracer un cercle.</p>
<ul>
<li><b>Corde</b> : segment qui joint deux points du cercle. La plus grande corde passe par le centre et s'appelle <b>diamètre</b> (d = 2r).</li>
<li><b>Arc</b> : portion de cercle comprise entre deux de ses points. Une corde détermine deux arcs ; un diamètre les rend égaux (deux <b>demi-cercles</b>).</li>
<li><b>Angle au centre</b> : son sommet est le centre O et ses côtés passent par les extrémités de l'arc : il <i>intercepte</i> cet arc.</li>
<li><b>Angle inscrit</b> : son sommet est <i>sur</i> le cercle et ses côtés sont des cordes (ou une corde et une tangente).</li>
<li><b>Secteur circulaire</b> et <b>segment circulaire</b> : parties du disque délimitées respectivement par deux rayons et un arc, ou par une corde et un arc.</li>
</ul>
<p>Dans un <b>même cercle</b> (ou dans des cercles de même rayon), arcs, cordes et angles au centre se correspondent : à des arcs égaux correspondent des cordes égales et des angles au centre égaux, et réciproquement.</p>`
    },
    {
      type: "text",
      title: "Cordes, diamètres et tangentes",
      html: `<p>Quelques propriétés fondamentales, qui se démontrent à l'aide des triangles égaux (isométriques) :</p>
<ul>
<li>Le <b>diamètre</b> est la plus longue corde. Une corde <i>qui ne passe pas par le centre</i> est d'autant plus longue qu'elle est proche du centre.</li>
<li>Le diamètre perpendiculaire à une corde la coupe en son milieu (et coupe aussi les arcs en deux). Par conséquent, <b>la médiatrice d'une corde passe par le centre</b> : pour trouver le centre d'un cercle tracé, il suffit de tracer les médiatrices de deux cordes ; le centre est leur point d'intersection.</li>
<li>Une droite et un cercle peuvent être <b>sécants</b> (deux points communs), <b>tangents</b> (un seul) ou <b>extérieurs</b> l'un à l'autre (aucun). On le sait en comparant la distance d de la droite au centre avec le rayon r : d &lt; r sécante, d = r tangente, d &gt; r extérieure.</li>
<li><b>La tangente est perpendiculaire au rayon</b> au point de contact.</li>
<li>D'un point P <b>extérieur</b> au cercle partent <b>deux tangentes</b>, et les deux segments de tangente PA et PB sont <b>égaux</b>. La droite (PO) est la bissectrice de l'angle APB.</li>
</ul>
<p>Deux cercles aussi peuvent avoir différentes positions relatives : extérieurs, tangents extérieurement, sécants, tangents intérieurement, l'un intérieur à l'autre. On les distingue en comparant la distance des centres avec la somme et la différence des rayons.</p>`
    },
    {
      type: "svg",
      title: "La tangente et les deux tangentes issues d'un point",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="100" cy="150" r="80" fill="#e0e7ff" stroke="#4338ca" stroke-width="4"/>
<line x1="100" y1="150" x2="131" y2="76" stroke="#1f2937" stroke-width="3"/>
<line x1="100" y1="150" x2="131" y2="224" stroke="#1f2937" stroke-width="3"/>
<line x1="308" y1="150" x2="131" y2="76" stroke="#dc2626" stroke-width="4"/>
<line x1="308" y1="150" x2="131" y2="224" stroke="#dc2626" stroke-width="4"/>
<line x1="100" y1="150" x2="308" y2="150" stroke="#9ca3af" stroke-width="2" stroke-dasharray="7 6"/>
<circle cx="100" cy="150" r="5" fill="#1f2937"/><circle cx="308" cy="150" r="6" fill="#1f2937"/>
<circle cx="131" cy="76" r="6" fill="#dc2626"/><circle cx="131" cy="224" r="6" fill="#dc2626"/>
<text x="76" y="172" font-size="18" fill="#1f2937" font-weight="bold">O</text>
<text x="318" y="156" font-size="18" fill="#1f2937" font-weight="bold">P</text>
<text x="136" y="68" font-size="18" fill="#b91c1c" font-weight="bold">A</text>
<text x="136" y="248" font-size="18" fill="#b91c1c" font-weight="bold">B</text>
<text x="380" y="80" font-size="16" fill="#1f2937">OA ⟂ PA et OB ⟂ PB</text>
<text x="380" y="115" font-size="16" fill="#b91c1c">PA = PB (tangentes égales)</text>
<text x="380" y="165" font-size="16" fill="#1f2937">Exemple : r = 5, OP = 13</text>
<text x="380" y="195" font-size="16" fill="#166534" font-weight="bold">PA² = 13² − 5² = 144</text>
<text x="380" y="225" font-size="16" fill="#166534" font-weight="bold">PA = PB = 12</text>
</svg>`,
      caption: "Le triangle OAP est rectangle en A (rayon ⟂ tangente) : avec le théorème de Pythagore, on calcule la longueur de la tangente."
    },
    {
      type: "remember",
      title: "Angle au centre et angle inscrit",
      html: `<p><b>Théorème.</b> Tout angle inscrit vaut la <b>moitié</b> de l'angle au centre qui intercepte le même arc.</p>
<p>Conséquences importantes :</p>
<ul>
<li>Tous les angles inscrits qui interceptent le <b>même arc</b> sont <b>égaux</b> entre eux (quelle que soit la position du sommet sur l'arc opposé).</li>
<li>Un angle inscrit qui intercepte un <b>demi-cercle</b> est <b>droit</b> : l'angle au centre correspondant est plat (180°), sa moitié vaut 90°. Dans de nombreux pays, on l'appelle le <b>théorème de Thalès</b> (sur le demi-cercle).</li>
<li>Si le triangle ABC est inscrit dans un demi-cercle de diamètre [AB], alors il est <b>rectangle</b> en C. La réciproque est vraie aussi : le centre du cercle circonscrit à un triangle rectangle est le <b>milieu de l'hypoténuse</b>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Pourquoi la moitié ?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="170" cy="150" r="120" fill="#ecfdf5" stroke="#166534" stroke-width="4"/>
<line x1="170" y1="150" x2="57" y2="191" stroke="#4338ca" stroke-width="4"/>
<line x1="170" y1="150" x2="283" y2="191" stroke="#4338ca" stroke-width="4"/>
<line x1="170" y1="30" x2="57" y2="191" stroke="#ea580c" stroke-width="4"/>
<line x1="170" y1="30" x2="283" y2="191" stroke="#ea580c" stroke-width="4"/>
<circle cx="170" cy="150" r="5" fill="#1f2937"/>
<circle cx="170" cy="30" r="6" fill="#ea580c"/><circle cx="57" cy="191" r="6" fill="#1f2937"/><circle cx="283" cy="191" r="6" fill="#1f2937"/>
<text x="180" y="146" font-size="16" fill="#4338ca" font-weight="bold">140°</text>
<text x="176" y="62" font-size="16" fill="#c2410c" font-weight="bold">70°</text>
<text x="176" y="26" font-size="16" fill="#1f2937">P</text>
<text x="28" y="212" font-size="16" fill="#1f2937">B</text>
<text x="290" y="212" font-size="16" fill="#1f2937">C</text>
<text x="156" y="170" font-size="16" fill="#1f2937">O</text>
<circle cx="460" cy="200" r="110" fill="#fef9c3" stroke="#a16207" stroke-width="4"/>
<line x1="350" y1="200" x2="570" y2="200" stroke="#1f2937" stroke-width="4"/>
<line x1="350" y1="200" x2="515" y2="105" stroke="#dc2626" stroke-width="4"/>
<line x1="570" y1="200" x2="515" y2="105" stroke="#dc2626" stroke-width="4"/>
<circle cx="350" cy="200" r="6" fill="#1f2937"/><circle cx="570" cy="200" r="6" fill="#1f2937"/><circle cx="515" cy="105" r="6" fill="#dc2626"/>
<rect x="499" y="116" width="14" height="14" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="330" y="222" font-size="16" fill="#1f2937">A</text>
<text x="574" y="222" font-size="16" fill="#1f2937">B</text>
<text x="522" y="98" font-size="16" fill="#1f2937">C</text>
<text x="412" y="250" font-size="16" fill="#a16207" font-weight="bold">[AB] diamètre → 90°</text>
</svg>`,
      caption: "À gauche : angle au centre de 140° et angle inscrit de 70° interceptant le même arc BC. À droite : l'angle qui intercepte un diamètre est toujours droit."
    },
    {
      type: "example",
      title: "Comment le démontrer (idée)",
      html: `<p>Prends un angle inscrit BPC dont le centre O est à l'intérieur, et trace le rayon [OP]. Les triangles OPB et OPC sont <b>isocèles</b> (deux de leurs côtés sont des rayons). D'après la propriété de l'angle extérieur d'un triangle, l'angle au centre formé par [OB] et le prolongement de [PO] est égal à la somme des deux angles à la base : il vaut donc <b>le double</b> de l'angle OPB. Il se passe la même chose de l'autre côté, avec le triangle OPC. En additionnant les deux morceaux : <b>BOC = 2 · BPC</b>.</p>
<p>Exemple numérique : l'angle au centre BOC mesure 140°. Tout point P pris sur le « grand » arc voit [BC] sous un angle de 70°. Si tu déplaces P le long de l'arc, l'angle ne change pas : c'est le principe des instruments qui mesurent les angles et de la construction des <b>arcs capables</b> utilisés en topographie.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : cercle et angles",
      questions: [
        { type: "num", q: "Un angle au centre d'un cercle mesure 100°. Combien mesure l'angle inscrit qui intercepte le même arc ?", answer: 50, unit: "°", explain: "L'angle inscrit vaut la moitié de l'angle au centre : 100° / 2 = 50°." },
        { type: "mc", q: "Un triangle est inscrit dans un demi-cercle, l'un de ses côtés étant le diamètre. Quel type de triangle est-ce ?", options: ["Équilatéral", "Rectangle", "Obtusangle"], answer: 1, explain: "L'angle opposé au diamètre est un angle inscrit qui intercepte un demi-cercle : il vaut donc 90°." },
        { type: "tf", q: "La tangente à un cercle en un point est perpendiculaire au rayon qui aboutit à ce point.", answer: true, explain: "C'est la propriété fondamentale de la tangente : le rayon au point de contact lui est perpendiculaire." },
        { type: "num", q: "D'un point P, on trace les tangentes à un cercle de rayon 6 cm. La distance de P au centre est de 10 cm. Quelle est la longueur de chaque segment de tangente PA ?", answer: 8, unit: "cm", explain: "OAP est rectangle en A : PA = √(10² − 6²) = √64 = 8 cm." }
      ]
    },
    {
      type: "text",
      title: "Polygones inscrits et circonscrits",
      html: `<p>Un polygone est <b>inscrit</b> dans un cercle si tous ses sommets sont sur le cercle ; on dit alors que le cercle est <b>circonscrit</b> au polygone. Un polygone est <b>circonscrit</b> à un cercle si tous ses côtés sont tangents à ce cercle ; le cercle est alors <b>inscrit</b> dans le polygone.</p>
<p><b>Triangles</b> : tout triangle est toujours à la fois inscriptible et circonscriptible.</p>
<ul>
<li>Le cercle circonscrit a pour centre le <b>centre du cercle circonscrit</b>, point d'intersection des <b>médiatrices des côtés</b> (chaque point d'une médiatrice est à égale distance des extrémités du côté). Ce point est intérieur au triangle si celui-ci est acutangle, au milieu de l'hypoténuse s'il est rectangle, extérieur s'il est obtusangle.</li>
<li>Le cercle inscrit a pour centre le <b>centre du cercle inscrit</b>, point d'intersection des <b>bissectrices</b> (chaque point d'une bissectrice est à égale distance des côtés de l'angle). Le rayon est la distance de ce point aux côtés.</li>
</ul>
<p><b>Quadrilatères</b> : ils ne sont pas tous inscriptibles ou circonscriptibles.</p>
<ul>
<li>Un quadrilatère (convexe) est <b>inscriptible</b> dans un cercle si et seulement si ses <b>angles opposés sont supplémentaires</b> (somme 180°). Sont donc inscriptibles le carré, le rectangle, le trapèze isocèle ; ne sont pas inscriptibles un losange qui n'est pas un carré, ni un parallélogramme quelconque.</li>
<li>Un quadrilatère (convexe) est <b>circonscriptible</b> à un cercle si et seulement si la <b>somme de deux côtés opposés est égale à la somme des deux autres</b> (théorème de Pitot). Sont circonscriptibles le carré, le losange, le cerf-volant ; pas le rectangle qui n'est pas un carré.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Inscriptible, circonscriptible, les deux ou aucun ?",
      widget: "classify",
      options: { groups: ["Inscriptible", "Circonscriptible", "Les deux", "Aucun des deux"], items: [
        ["Carré", 2],
        ["Rectangle (non carré)", 0],
        ["Losange (non carré)", 1],
        ["Trapèze isocèle", 0],
        ["Parallélogramme quelconque", 3],
        ["Triangle quelconque", 2],
        ["Cerf-volant", 1]
      ] },
      caption: "Rappel : inscriptible = angles opposés supplémentaires ; circonscriptible = sommes des côtés opposés égales. Un trapèze isocèle est inscriptible mais, en général, pas circonscriptible."
    },
    {
      type: "example",
      title: "Exemples : deux calculs sur les quadrilatères",
      html: `<p><b>1.</b> Le quadrilatère ABCD est inscrit dans un cercle et l'angle en A mesure 72°. Alors l'angle opposé en C vaut 180° − 72° = <b>108°</b>. Si l'angle en B mesure 95°, l'angle en D vaut 180° − 95° = 85°.</p>
<p><b>2.</b> Un quadrilatère circonscrit à un cercle a trois côtés consécutifs de 7 cm, 9 cm et 10 cm. D'après Pitot, les sommes des côtés opposés sont égales, donc AB + CD = BC + DA. Avec AB = 7, BC = 9, CD = 10, le quatrième côté est DA = 7 + 10 − 9 = <b>8 cm</b>. Le périmètre est de 34 cm.</p>
<p><b>Dans la vie réelle</b> : si tu veux découper la plus grande roue possible dans une planche triangulaire, son centre est le centre du cercle inscrit et son rayon la distance aux côtés. Si tu veux planter un piquet à égale distance de trois arbres, tu le places au centre du cercle circonscrit au triangle formé par les arbres.</p>`
    },
    {
      type: "text",
      title: "Polygones réguliers",
      html: `<p>Un polygone est <b>régulier</b> si tous ses côtés sont égaux et tous ses angles sont égaux. Tous les polygones réguliers sont <b>à la fois inscriptibles et circonscriptibles</b>, et les deux cercles ont le <b>même centre</b>, appelé <b>centre du polygone</b>.</p>
<ul>
<li>Le <b>rayon</b> R du cercle circonscrit joint le centre à un sommet.</li>
<li>L'<b>apothème</b> a est le rayon du cercle inscrit : il joint le centre au milieu d'un côté et lui est perpendiculaire.</li>
<li>L'angle au centre qui intercepte un côté mesure 360° / n ; l'angle intérieur mesure 180° · (n − 2) / n (hexagone : 120°).</li>
<li>L'<b>aire</b> d'un polygone régulier est A = <b>(périmètre × apothème) / 2</b> : on le découpe en n triangles isocèles égaux, de base le côté et de hauteur l'apothème. La formule vaut en général pour tout polygone circonscrit à un cercle, avec le rayon du cercle inscrit à la place de l'apothème.</li>
</ul>
<p><b>Trois rapports fixes</b> (entre apothème, rayon et côté) :</p>
<ul>
<li>Triangle équilatéral : a = l · √3 / 6 et R = l · √3 / 3 (R = 2a).</li>
<li>Carré : a = l / 2 et R = l · √2 / 2.</li>
<li>Hexagone régulier : a = l · √3 / 2 et <b>R = l</b> : le côté de l'hexagone régulier est égal au rayon. Pourquoi ? Le triangle formé par deux rayons et un côté a un angle au centre de 60° et il est isocèle : il est donc équilatéral.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Archimède et le nombre π",
      html: `<p>Le rapport entre la longueur d'un cercle et son diamètre est toujours le même nombre, <b>π (pi)</b> ≈ 3,14159. Vers le IIIe siècle av. J.-C., <b>Archimède</b> le calcula en <b>emprisonnant</b> le cercle entre un polygone régulier inscrit et un polygone régulier circonscrit, en doublant le nombre de côtés jusqu'à 96. Il trouva que 223/71 &lt; π &lt; 22/7, c'est-à-dire entre 3,1408 et 3,1429. Le périmètre du cercle est plus grand que celui du polygone inscrit et plus petit que celui du polygone circonscrit : plus le polygone a de côtés, plus la « cage » se resserre. C'est l'idée qui est à la base du calcul infinitésimal que tu rencontreras dans les dernières années du lycée.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le pentagone et la construction de Gauss",
      html: `<p>À la règle et au compas, Euclide savait inscrire dans un cercle le triangle équilatéral, le carré, le pentagone et l'hexagone réguliers (et, à partir d'eux, le polygone à 15 côtés ou ceux obtenus en doublant le nombre de côtés). Pendant plus de deux mille ans, personne ne trouva d'autre polygone régulier constructible. En 1796, à seulement 18 ans, <b>Carl Friedrich Gauss</b> démontra que l'on peut aussi construire le <b>polygone régulier à 17 côtés</b> : il en fut si fier que, selon la tradition, il souhaita un heptadécagone sur sa tombe. Il établit ensuite précisément quels polygones réguliers sont constructibles : par exemple, ceux à 7 ou à 9 côtés ne le sont pas.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre le cercle",
      intro: "Si les théorèmes te semblent abstraits, essaie de les voir sous un autre angle.",
      tabs: [
        {
          label: "🧭 Le cercle comme ensemble de points",
          html: `<p>Pense au cercle comme à une <b>règle</b> plutôt qu'à une forme : « tous les points à la distance r de O ». Si tu tends une ficelle attachée à un piquet au centre, avec une craie à l'autre bout, tu traces un cercle (c'est ainsi que les jardiniers tracent les massifs ronds). De cette définition découlent toutes les propriétés : les rayons sont tous égaux, donc les triangles dont deux côtés sont des rayons sont isocèles, et <b>c'est de là que viennent les égalités d'angles</b> que tu utilises dans les démonstrations.</p>`
        },
        {
          label: "🎯 L'angle sous lequel on voit",
          html: `<p><b>Une image de l'angle inscrit</b> : imagine une corde [BC] comme « l'écran d'un cinéma » et une personne P assise sur le cercle, du côté opposé. Si P se déplace le long de l'arc, elle voit l'écran toujours sous le <b>même angle</b> (70° dans l'exemple). Si elle s'assoit à l'intérieur du cercle, elle le voit sous un angle plus grand ; si elle en sort, sous un angle plus petit. C'est pour cela que, dans les théâtres en demi-cercle, les spectateurs assis sur un même arc voient la scène sous le même angle.</p>`
        },
        {
          label: "⬡ L'hexagone : six triangles équilatéraux",
          html: `<p>Trace un cercle de rayon R et, sans changer l'écartement du compas, « marche » six fois le long du cercle : tu reviens exactement au point de départ. Les six points sont les sommets d'un hexagone régulier, car chacun des six triangles formés avec le centre a deux côtés égaux à R et un angle de 60° : il est équilatéral, donc le côté de l'hexagone vaut lui aussi R. La rosace que l'on dessine au compas (la « fleur de vie ») naît de cette construction.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="200" cy="150" r="100" fill="#fef9c3" stroke="#a16207" stroke-width="3"/>
<polygon points="300,150 250,236.6 150,236.6 100,150 150,63.4 250,63.4" fill="#bbf7d0" stroke="#166534" stroke-width="4"/>
<line x1="200" y1="150" x2="300" y2="150" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="250" y2="236.6" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="150" y2="236.6" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="100" y2="150" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="150" y2="63.4" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="250" y2="63.4" stroke="#4338ca" stroke-width="3"/>
<circle cx="200" cy="150" r="5" fill="#1f2937"/>
<text x="360" y="110" font-size="16" fill="#1f2937">6 triangles équilatéraux</text>
<text x="360" y="140" font-size="16" fill="#4338ca">côté = rayon R</text>
<text x="360" y="170" font-size="16" fill="#1f2937">angle au centre = 60°</text>
<text x="360" y="200" font-size="16" fill="#166534" font-weight="bold">périmètre = 6R</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : cercle et polygones",
      nodes: [
        { id: "circ", label: "Cercle", x: 50, y: 6, color: "#6366f1", html: "Ensemble des points à la distance r du centre.", why: "C'est la figure « constructible » par excellence : le troisième postulat d'Euclide dit qu'étant donnés un centre et un rayon, on peut le tracer. Toutes ses propriétés découlent du fait que les rayons sont égaux." },
        { id: "tang", label: "Tangentes", x: 15, y: 30, color: "#f59e0b", html: "Tangente ⟂ rayon ; les deux tangentes issues d'un point extérieur sont égales.", why: "La tangente est la droite qui n'a qu'un seul point commun avec le cercle : c'est la position limite d'une sécante quand ses deux points se rapprochent. Cette idée mènera à la dérivée." },
        { id: "ang", label: "Angle au centre / angle inscrit", x: 70, y: 30, color: "#a855f7", html: "L'angle inscrit vaut la moitié de l'angle au centre qui intercepte le même arc.", why: "On le démontre en découpant la figure en triangles isocèles (deux côtés sont des rayons) et en utilisant l'angle extérieur. Les Éléments d'Euclide le traitent dans le livre III." },
        { id: "semi", label: "Demi-cercle → 90°", x: 85, y: 58, color: "#ef4444", html: "Un triangle dont un côté est un diamètre et dont le troisième sommet est sur le cercle est rectangle.", why: "C'est le cas particulier où l'angle au centre est plat (180°). Attribué à Thalès, c'est la clé pour construire des tangentes et pour trouver le centre d'un cercle." },
        { id: "ins", label: "Inscrits et circonscrits", x: 30, y: 58, color: "#16a34a", html: "Les triangles toujours ; les quadrilatères seulement sous conditions.", why: "Le centre du cercle circonscrit (médiatrices) et celui du cercle inscrit (bissectrices) viennent des ensembles de points équidistants de deux points ou de deux droites. Pour un quadrilatère, il faut 4 points sur un même cercle : c'est trop demander à une figure quelconque." },
        { id: "reg", label: "Polygones réguliers", x: 50, y: 85, color: "#0ea5e9", html: "Inscriptibles et circonscriptibles, avec un centre commun ; aire = périmètre × apothème / 2.", why: "Leur symétrie totale fait coïncider les centres des cercles circonscrit et inscrit. Avec un nombre de côtés de plus en plus grand, le polygone se rapproche du cercle : c'est la méthode d'Archimède pour π." }
      ],
      edges: [
        ["circ", "tang", "a des"],
        ["circ", "ang", "a des"],
        ["ang", "semi", "cas à 180°"],
        ["circ", "ins", "se combine avec"],
        ["ins", "reg", "cas le plus symétrique"],
        ["semi", "ins", "utilisé pour"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : polygones inscrits et réguliers",
      questions: [
        { type: "tf", q: "Un parallélogramme qui n'est pas un rectangle peut être inscrit dans un cercle.", answer: false, explain: "Un parallélogramme a ses angles opposés égaux : ils ne seraient supplémentaires que s'ils valaient tous 90°, c'est-à-dire s'il s'agissait d'un rectangle." },
        { type: "num", q: "Un hexagone régulier a un côté de 8 cm. Combien mesure le rayon du cercle circonscrit ?", answer: 8, unit: "cm", explain: "Dans l'hexagone régulier, le rayon est égal au côté." },
        { type: "num", q: "Un polygone régulier a un périmètre de 60 cm et un apothème de 8 cm. Quelle est son aire ?", answer: 240, unit: "cm²", explain: "A = périmètre × apothème / 2 = 60 × 8 / 2 = 240 cm²." },
        { type: "mc", q: "Où se trouve le centre du cercle circonscrit à un triangle rectangle ?", options: ["Au sommet de l'angle droit", "Au milieu de l'hypoténuse", "Au centre de gravité"], answer: 1, explain: "L'hypoténuse est un diamètre (angle droit inscrit dans un demi-cercle) : le centre est son milieu." }
      ]
    }
  ],
  glossary: [
    { t: "Cercle", d: "Ensemble des points du plan situés à la même distance d'un point appelé centre." },
    { t: "Corde et diamètre", d: "La corde joint deux points du cercle ; le diamètre est la corde qui passe par le centre." },
    { t: "Angle au centre", d: "Angle dont le sommet est le centre du cercle." },
    { t: "Angle inscrit", d: "Angle dont le sommet est sur le cercle ; il vaut la moitié de l'angle au centre qui intercepte le même arc." },
    { t: "Tangente", d: "Droite qui n'a qu'un seul point commun avec le cercle ; elle est perpendiculaire au rayon au point de contact." },
    { t: "Sécante", d: "Droite qui coupe le cercle en deux points." },
    { t: "Polygone inscrit", d: "Polygone dont tous les sommets sont sur le cercle." },
    { t: "Polygone circonscrit", d: "Polygone dont tous les côtés sont tangents au cercle." },
    { t: "Centres des cercles circonscrit et inscrit", d: "Dans un triangle, le centre du cercle circonscrit est l'intersection des médiatrices des côtés ; celui du cercle inscrit, l'intersection des bissectrices." },
    { t: "Apothème", d: "Rayon du cercle inscrit dans un polygone régulier, perpendiculaire à un côté." },
    { t: "Polygone régulier", d: "Polygone dont tous les côtés et tous les angles sont égaux." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quel est le rapport entre un angle inscrit et l'angle au centre qui intercepte le même arc ?", options: ["Ils sont égaux", "L'angle inscrit vaut la moitié", "L'angle inscrit vaut le double"], answer: 1, explain: "Le théorème affirme que l'angle inscrit vaut la moitié de l'angle au centre correspondant." },
      { type: "num", q: "L'angle au centre BOC mesure 112°. Combien mesure l'angle inscrit qui intercepte l'arc BC ?", answer: 56, unit: "°", explain: "112° / 2 = 56°." },
      { type: "tf", q: "La tangente à un cercle en un point est parallèle au rayon en ce point.", answer: false, explain: "Elle est perpendiculaire au rayon au point de contact." },
      { type: "num", q: "Un cercle a un rayon de 9 cm. D'un point P situé à 15 cm du centre partent deux tangentes. Quelle est la longueur de chaque segment de tangente ?", answer: 12, unit: "cm", explain: "PA = √(15² − 9²) = √144 = 12 cm." },
      { type: "mc", q: "Quel quadrilatère est toujours inscriptible dans un cercle ?", options: ["Le losange", "Le rectangle", "Le parallélogramme quelconque"], answer: 1, explain: "Le rectangle a des angles opposés de 90° + 90° = 180° : ils sont supplémentaires." },
      { type: "num", q: "Un quadrilatère inscrit ABCD a un angle B de 64°. Combien mesure l'angle opposé D ?", answer: 116, unit: "°", explain: "Les angles opposés d'un quadrilatère inscrit sont supplémentaires : 180° − 64° = 116°." },
      { type: "text", q: "Comment appelle-t-on le point où se coupent les bissectrices d'un triangle, centre du cercle inscrit ?", answer: ["centre du cercle inscrit", "le centre du cercle inscrit", "incentre", "l'incentre"], explain: "Le centre du cercle inscrit est à égale distance des trois côtés." },
      { type: "mc", q: "Un quadrilatère a des côtés consécutifs de 5, 8, 9 et 6 cm (dans cet ordre). Est-il circonscriptible à un cercle ?", options: ["Oui : 5 + 9 = 8 + 6", "Non : 5 + 9 ≠ 8 + 6", "Oui, parce qu'il a 4 côtés"], answer: 0, explain: "Théorème de Pitot : côtés opposés 5 et 9, puis 8 et 6 ; 5 + 9 = 14 = 8 + 6, il est donc circonscriptible." },
      { type: "order", q: "Remets dans l'ordre les étapes pour trouver le centre d'un cercle tracé.", items: ["Trace deux cordes non parallèles", "Trace la médiatrice de chaque corde", "Repère le point d'intersection des médiatrices", "Ce point est le centre"], explain: "Les médiatrices des cordes passent par le centre : leur point d'intersection est le centre." },
      { type: "num", q: "Un hexagone régulier a un côté de 10 cm. Quel est son périmètre ?", answer: 60, unit: "cm", explain: "6 côtés de 10 cm : 6 × 10 = 60 cm." }
    ]
  }
});
