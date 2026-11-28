TOPIC('fr', {
  id: "l2-mat-similitudine",
  title: "Similitude et théorème de Thalès",
  intro: "Comment mesurer la hauteur d'une pyramide ou d'un gratte-ciel sans monter dessus ? Comment une carte peut-elle tenir sur une feuille sans que la ville change de forme ? La réponse, c'est la <b>similitude</b> : deux figures sont semblables quand elles ont la <b>même forme</b>, mais pas forcément la même taille. Dans cette leçon, tu rencontres le <b>théorème de Thalès</b>, les <b>critères de similitude des triangles</b> et leurs applications, de l'ombre d'un bâton à l'échelle des cartes géographiques.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Proportions entre segments",
      html: `<p>Deux segments AB et CD ont un <b>rapport</b> AB / CD (un nombre sans unité, si les deux segments sont mesurés avec la même unité). Quatre segments forment une <b>proportion</b> si AB : CD = EF : GH, c'est-à-dire si les deux rapports sont égaux. Propriété fondamentale : <b>le produit des moyens est égal au produit des extrêmes</b> (produit en croix), AB · GH = CD · EF.</p>
<p>Autres propriétés utiles des proportions, pour a : b = c : d :</p>
<ul>
<li><b>Échanger les moyens</b> : a : c = b : d.</li>
<li><b>Inverser</b> : b : a = d : c.</li>
<li><b>Additionner</b> : (a + b) : a = (c + d) : c, et <b>soustraire</b> : (a − b) : a = (c − d) : c.</li>
</ul>
<p>Deux grandeurs sont <b>proportionnelles</b> si leur rapport est constant : si l'une double, l'autre double. Dans une similitude, toutes les longueurs correspondantes sont proportionnelles, avec le même rapport.</p>`
    },
    {
      type: "text",
      title: "Le théorème de Thalès",
      html: `<p><b>Des droites parallèles</b> coupées par deux sécantes déterminent sur celles-ci des segments correspondants <b>proportionnels</b>.</p>
<p>En symboles, si les parallèles a, b, c coupent la sécante r en A, B, C et la sécante s en A', B', C', alors :</p>
<p style="text-align:center"><b>AB : BC = A'B' : B'C'</b></p>
<p>De façon équivalente : AB : A'B' = BC : B'C' = AC : A'C'. En particulier, si les parallèles déterminent des segments égaux sur une sécante, elles déterminent aussi des segments égaux sur l'autre (par exemple le milieu d'un côté et la parallèle à la base dans les triangles).</p>
<p><b>Conséquence dans les triangles</b> : une droite parallèle à un côté d'un triangle partage les deux autres côtés en parties proportionnelles. Avec une droite parallèle à la base (BC) qui coupe [AB] en D et [AC] en E : AD : DB = AE : EC et AD : AB = AE : AC.</p>
<p><b>La réciproque est vraie aussi</b> : si une droite partage deux côtés d'un triangle en parties proportionnelles, elle est parallèle au troisième côté.</p>
<p>Le théorème porte le nom de <b>Thalès de Milet</b> (VIIe–VIe siècle av. J.-C.), mais on le trouve sous ses formes les plus générales dans les <i>Éléments</i> d'Euclide (livre VI, proposition 2).</p>`
    },
    {
      type: "svg",
      title: "Parallèles et sécantes",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="60" x2="560" y2="60" stroke="#4338ca" stroke-width="3"/>
<line x1="30" y1="150" x2="560" y2="150" stroke="#4338ca" stroke-width="3"/>
<line x1="30" y1="250" x2="560" y2="250" stroke="#4338ca" stroke-width="3"/>
<text x="540" y="50" font-size="16" fill="#4338ca" font-weight="bold">a</text>
<text x="540" y="140" font-size="16" fill="#4338ca" font-weight="bold">b</text>
<text x="540" y="240" font-size="16" fill="#4338ca" font-weight="bold">c</text>
<line x1="100" y1="60" x2="184" y2="250" stroke="#dc2626" stroke-width="4"/>
<line x1="330" y1="60" x2="457" y2="250" stroke="#166534" stroke-width="4"/>
<circle cx="100" cy="60" r="6" fill="#dc2626"/><circle cx="140" cy="150" r="6" fill="#dc2626"/><circle cx="184" cy="250" r="6" fill="#dc2626"/>
<circle cx="330" cy="60" r="6" fill="#166534"/><circle cx="390" cy="150" r="6" fill="#166534"/><circle cx="457" cy="250" r="6" fill="#166534"/>
<text x="74" y="52" font-size="16" fill="#b91c1c" font-weight="bold">A</text>
<text x="114" y="142" font-size="16" fill="#b91c1c" font-weight="bold">B</text>
<text x="158" y="272" font-size="16" fill="#b91c1c" font-weight="bold">C</text>
<text x="338" y="52" font-size="16" fill="#166534" font-weight="bold">A'</text>
<text x="398" y="142" font-size="16" fill="#166534" font-weight="bold">B'</text>
<text x="465" y="272" font-size="16" fill="#166534" font-weight="bold">C'</text>
<text x="215" y="104" font-size="16" fill="#1f2937" font-weight="bold">AB : BC = A'B' : B'C'</text>
</svg>`,
      caption: "Les trois parallèles a, b, c partagent les deux sécantes (rouge et verte) en segments proportionnels."
    },
    {
      type: "example",
      title: "Exemples avec Thalès",
      html: `<p><b>1.</b> Trois droites parallèles coupent deux sécantes. Sur l'une, les segments mesurent AB = 6 cm et BC = 9 cm ; sur l'autre, A'B' = 8 cm. Combien vaut B'C' ? De la proportion 6 : 9 = 8 : x, on tire x = 9 · 8 / 6 = <b>12 cm</b>.</p>
<p><b>2.</b> Dans un triangle ABC, une droite parallèle à (BC) coupe [AB] en D et [AC] en E. On sait que AD = 4, DB = 6 et AE = 5. D'après Thalès, AD : DB = AE : EC, c'est-à-dire 4 : 6 = 5 : EC ; donc EC = 6 · 5 / 4 = <b>7,5</b>.</p>
<p><b>3. Partager un segment en parties égales</b>. Pour partager un segment [AB] en 5 parties égales à la règle et au compas, trace à partir de A une demi-droite quelconque, reporte dessus 5 segments égaux, relie le dernier point à B et trace les <b>parallèles</b> à cette droite passant par les points intermédiaires. D'après Thalès, elles partagent aussi [AB] en 5 parties égales.</p>`
    },
    {
      type: "text",
      title: "Figures semblables et rapport de similitude",
      html: `<p>Deux polygones sont <b>semblables</b> s'ils ont leurs <b>angles respectivement égaux</b> et leurs <b>côtés correspondants proportionnels</b>. Le rapport constant entre côtés correspondants s'appelle le <b>rapport de similitude</b> k (ou rapport d'agrandissement/de réduction). Si k = 1, les figures sont superposables. Deux cercles sont toujours semblables (k = rapport des rayons) ; deux carrés sont toujours semblables ; deux rectangles, en général, non.</p>
<p>Qu'est-ce qui change quand on agrandit d'un facteur k ?</p>
<ul>
<li>Les <b>longueurs</b> (côtés, périmètres, hauteurs, diagonales, rayons) sont multipliées par <b>k</b>.</li>
<li>Les <b>angles</b> ne changent pas.</li>
<li>Les <b>aires</b> sont multipliées par <b>k²</b>.</li>
<li>Les <b>volumes</b> (solides semblables) sont multipliés par <b>k³</b>.</li>
</ul>
<p>Pourquoi k² ? Si tu agrandis un carré de côté l avec k = 3, le côté devient 3l et l'aire passe de l² à 9l² : on peut y placer 9 copies du petit carré de départ. Agrandir une photo 2× ne double pas le papier, cela le quadruple.</p>`
    },
    {
      type: "remember",
      title: "Les trois critères de similitude des triangles",
      html: `<p>Deux triangles sont semblables s'ils ont :</p>
<ol>
<li><b>1er critère (AA)</b> : <b>deux angles</b> respectivement égaux (le troisième l'est alors aussi, puisque la somme vaut 180°).</li>
<li><b>2e critère (CAC)</b> : <b>deux côtés proportionnels</b> et l'<b>angle compris</b> entre eux égal.</li>
<li><b>3e critère (CCC)</b> : leurs <b>trois côtés</b> proportionnels.</li>
</ol>
<p>Les critères de similitude sont la « version proportionnelle » des cas d'égalité des triangles. Le premier (AA) est le plus utilisé : pour reconnaître deux triangles semblables, il suffit souvent de trouver deux angles égaux, par exemple grâce à des côtés parallèles ou à des angles opposés par le sommet.</p>
<p>⚠️ <b>Attention</b> : dans des triangles semblables, la proportion doit porter sur les côtés <b>correspondants</b>, c'est-à-dire ceux qui sont opposés à des angles égaux.</p>`
    },
    {
      type: "widget",
      title: "Semblables ou pas ?",
      widget: "classify",
      options: { groups: ["Forcément semblables", "Pas forcément semblables"], items: [
        ["Deux triangles ayant deux angles égaux (50° et 60°)", 0],
        ["Deux triangles équilatéraux quelconques", 0],
        ["Deux rectangles quelconques", 1],
        ["Deux carrés quelconques", 0],
        ["Deux losanges ayant un côté égal", 1],
        ["Deux cercles quelconques", 0],
        ["Deux triangles isocèles", 1],
        ["Deux triangles rectangles ayant un angle aigu de 30°", 0]
      ] },
      caption: "Pour les triangles, les critères suffisent (par exemple deux angles égaux) ; pour les polygones de plus de 3 côtés, il faut à la fois des angles égaux et des côtés proportionnels."
    },
    {
      type: "svg",
      title: "Deux triangles semblables",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="40,250 200,250 80,150" fill="#bbf7d0" stroke="#166534" stroke-width="4"/>
<polygon points="260,250 580,250 340,50" fill="#fed7aa" stroke="#c2410c" stroke-width="4"/>
<path d="M 64,250 A 24,24 0 0 0 54,226" fill="none" stroke="#166534" stroke-width="3"/>
<path d="M 300,250 A 40,40 0 0 0 282,220" fill="none" stroke="#c2410c" stroke-width="3"/>
<path d="M 184,250 A 16,16 0 0 1 188,238" fill="none" stroke="#166534" stroke-width="3"/>
<path d="M 540,250 A 40,40 0 0 1 553,223" fill="none" stroke="#c2410c" stroke-width="3"/>
<text x="120" y="276" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">côté 160 px</text>
<text x="420" y="276" font-size="16" text-anchor="middle" fill="#c2410c" font-weight="bold">côté 320 px</text>
<text x="300" y="30" font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">k = 320 / 160 = 2</text>
<text x="210" y="120" font-size="16" fill="#1f2937">mêmes angles, côtés ×2</text>
<text x="210" y="145" font-size="16" fill="#1f2937">aire ×4, périmètre ×2</text>
</svg>`,
      caption: "Le triangle orange est l'agrandissement 2:1 du triangle vert : les angles ne changent pas, les longueurs doublent, les aires quadruplent."
    },
    {
      type: "quiz",
      title: "Mini-quiz : Thalès et similitude",
      questions: [
        { type: "num", q: "Deux triangles semblables ont un rapport de similitude de 3. Le périmètre du plus petit est de 14 cm. Combien mesure le périmètre du plus grand ?", answer: 42, unit: "cm", explain: "Les périmètres sont dans le même rapport que les côtés : 14 · 3 = 42 cm." },
        { type: "num", q: "Le rapport de similitude entre deux polygones est 4. L'aire du plus petit est de 5 cm². Quelle est l'aire du plus grand ?", answer: 80, unit: "cm²", explain: "Les aires sont dans le rapport k² = 16 : 5 · 16 = 80 cm²." },
        { type: "tf", q: "Deux triangles qui ont deux angles égaux sont forcément semblables.", answer: true, explain: "C'est le premier critère de similitude (AA) : le troisième angle est automatiquement égal." },
        { type: "mc", q: "Dans le triangle ABC, une droite parallèle à (BC) coupe [AB] en D et [AC] en E. Quelle proportion est correcte ?", options: ["AD : DB = AE : EC", "AD : DB = EC : AE", "AD : AB = EC : AC"], answer: 0, explain: "D'après le théorème de Thalès : AD : DB = AE : EC, ou encore AD : AB = AE : AC." }
      ]
    },
    {
      type: "text",
      title: "Applications : la similitude dans le monde réel",
      html: `<ul>
<li><b>Mesurer des hauteurs inaccessibles</b>. Si une personne de 1,5 m projette une ombre de 2 m et qu'au même moment un arbre projette une ombre de 6 m, les rayons du Soleil sont parallèles et les deux triangles (objet-ombre) ont les mêmes angles (AA) : ils sont semblables. Donc h : 6 = 1,5 : 2 et h = 6 · 1,5 / 2 = <b>4,5 m</b>.</li>
<li><b>Cartes géographiques et maquettes</b> : une carte à l'échelle 1 : 25 000 est semblable au territoire avec k = 1/25 000. 4 cm sur la carte représentent 4 · 25 000 = 100 000 cm = 1 km. Les <b>aires</b> à l'échelle sont divisées par k² : 1 cm² sur la carte représente 625 000 000 cm² = 62 500 m².</li>
<li><b>La méthode du miroir</b> : pose un miroir plan au sol et recule jusqu'à y voir le sommet du bâtiment. Le rayon qui arrive et celui qui repart font des angles égaux avec le sol (loi de la réflexion) : les triangles objet-miroir et œil-miroir sont semblables.</li>
<li><b>Photocopies et projecteurs</b> : un agrandissement à 141 % (√2) transforme une feuille A4 en A3. L'aire double car k² = 2 : c'est pourquoi les formats de la série A ont tous le même rapport entre leurs côtés, égal à √2.</li>
</ul>`
    },
    {
      type: "text",
      title: "Théorème de la bissectrice et lien avec Euclide",
      html: `<p><b>Théorème de la bissectrice (intérieure)</b> : la bissectrice d'un angle d'un triangle partage le côté opposé en deux segments <b>proportionnels aux deux autres côtés</b>. Si [AD] est la bissectrice de l'angle en A du triangle ABC (D sur [BC]) : <b>BD : DC = AB : AC</b>.</p>
<p><b>Le lien avec Euclide</b> : dans un triangle ABC rectangle en A, la hauteur [AH] relative à l'hypoténuse le partage en deux triangles ABH et ACH. Ils ont un angle droit en H et ont un angle aigu en commun avec ABC : ils sont donc <b>semblables à ABC</b> (AA) et semblables entre eux. Les proportions entre côtés correspondants donnent les théorèmes d'Euclide :</p>
<ul>
<li>ABC ~ HBA : BC : AB = AB : BH, c'est-à-dire <b>c : a = a : p</b>, d'où a² = c · p (1er théorème).</li>
<li>HBA ~ HAC : BH : AH = AH : HC, c'est-à-dire <b>p : h = h : q</b>, d'où h² = p · q (2e théorème).</li>
</ul>
<p>Ainsi, la similitude démontre en quelques lignes ce qu'Euclide obtient par l'équivalence, et l'on en déduit aussi le théorème de Pythagore.</p>`
    },
    {
      type: "example",
      title: "Exemple : la bissectrice",
      html: `<p>Dans un triangle ABC, on a AB = 6 cm, AC = 9 cm et BC = 10 cm. La bissectrice de l'angle en A coupe [BC] en D. Calcule BD et DC.</p>
<p>D'après le théorème : BD : DC = 6 : 9 = 2 : 3, et BD + DC = 10. En partageant 10 en parts de 2 et 3 : BD = 10 · 2 / 5 = <b>4 cm</b> et DC = 10 · 3 / 5 = <b>6 cm</b>.</p>
<p><b>Contrôle rapide</b> : la bissectrice découpe la plus petite partie du côté du plus petit côté (AB est le plus petit : BD est la plus petite partie).</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Thalès et la pyramide",
      html: `<p>Selon la tradition, rapportée entre autres par <b>Diogène Laërce</b> et <b>Plutarque</b>, Thalès de Milet mesura la hauteur de la pyramide de Khéops en Égypte : il attendit le moment de la journée où son ombre était égale à sa taille, et mesura à cet instant l'ombre de la pyramide (en ajoutant la moitié du côté de la base, car l'ombre part du centre). Si l'ombre est aussi longue que la hauteur, le triangle ombre-objet est un triangle rectangle isocèle : les deux triangles sont semblables et la hauteur de la pyramide est égale à son ombre. Un cas particulier de proportion très élégant !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Les lois d'échelle des animaux",
      html: `<p>Pourquoi n'existe-t-il pas d'insectes grands comme des éléphants, ni de fourmis géantes comme dans les films ? À cause de la <b>loi des carrés et des cubes</b>. Si un animal était agrandi d'un facteur k, sa masse augmenterait comme k³ (le volume), mais la section de ses os et de ses muscles, qui détermine sa résistance, seulement comme k². Le rapport poids/résistance serait multiplié par k : les pattes céderaient. <b>Galilée</b> l'avait déjà remarqué dans ses <i>Discours et démonstrations mathématiques concernant deux sciences nouvelles</i> (1638) : pour porter un corps plus grand, il faut une ossature disproportionnellement plus épaisse. C'est pourquoi les éléphants ont des pattes trapues et les fourmis des pattes fines.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la similitude",
      intro: "Si les proportions te semblent abstraites, essaie de les voir avec les yeux ou avec les mains.",
      tabs: [
        {
          label: "📷 Le zoom",
          html: `<p>Pense à une photo que tu agrandis avec le zoom de ton téléphone : tout s'agrandit de la même façon, aucun angle ne change, le visage reste le même. C'est cela, la similitude : un agrandissement (ou une réduction) avec un <b>rapport d'échelle</b> identique dans toutes les directions. Si au contraire tu étires l'image seulement à l'horizontale, le visage se déforme : il n'y a plus similitude, car les rapports ne sont plus les mêmes partout.</p>
<p>Cela vaut aussi pour les longueurs réelles : si sur la carte tu vois 3 cm entre deux villes et que l'échelle est 1 : 500 000, la distance réelle est 3 · 500 000 = 1 500 000 cm = 15 km.</p>`
        },
        {
          label: "🌞 L'ombre",
          html: `<p>Dessine un bâton et son ombre, puis un arbre et son ombre : les rayons du Soleil sont parallèles, donc les angles sont les mêmes et les deux triangles sont semblables. Le bâton de 1,5 m a une ombre de 2 m ; l'arbre a une ombre de 6 m ; la hauteur de l'arbre découle de la proportion h : 1,5 = 6 : 2.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="240" width="600" height="60" fill="#d9f99d"/>
<circle cx="560" cy="40" r="22" fill="#facc15"/>
<line x1="80" y1="180" x2="160" y2="240" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8 6"/>
<line x1="250" y1="60" x2="490" y2="240" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8 6"/>
<line x1="80" y1="240" x2="80" y2="180" stroke="#92400e" stroke-width="7"/>
<line x1="80" y1="240" x2="160" y2="240" stroke="#475569" stroke-width="6"/>
<line x1="250" y1="240" x2="250" y2="60" stroke="#166534" stroke-width="10"/>
<circle cx="250" cy="60" r="26" fill="#22c55e"/>
<line x1="250" y1="240" x2="490" y2="240" stroke="#475569" stroke-width="6"/>
<text x="40" y="168" font-size="16" fill="#92400e" font-weight="bold">1,5 m</text>
<text x="96" y="266" font-size="16" fill="#1f2937" font-weight="bold">2 m</text>
<text x="262" y="150" font-size="16" fill="#166534" font-weight="bold">h = ?</text>
<text x="360" y="266" font-size="16" fill="#1f2937" font-weight="bold">6 m</text>
<text x="320" y="110" font-size="16" fill="#1f2937">h : 1,5 = 6 : 2 → h = 4,5 m</text>
</svg>`
        },
        {
          label: "🧊 Avec les solides en 3D",
          html: `<p>Des cubes, des sphères et des cylindres de tailles différentes sont semblables quand leurs proportions sont les mêmes. Change de solide avec les boutons et imagine de doubler toutes ses dimensions : la surface est multipliée par 4 (k² = 4) et le volume devient 8 fois plus grand (k³ = 8). C'est pourquoi une pizza deux fois plus large a une aire quatre fois plus grande : si tu ne paies la grande pizza que le double, tu y gagnes !</p>`,
          scene: "solid",
          options: { shape: "cube", color: "#6366f1", labels: true, shapes: ["cube", "cylinder", "cone", "sphere", "pyramid"] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : la similitude",
      nodes: [
        { id: "prop", label: "Proportions", x: 50, y: 6, color: "#6366f1", html: "Égalité entre deux rapports : a : b = c : d.", why: "Pour les Grecs, les rapports entre grandeurs étaient la base de la géométrie : la théorie des proportions d'Eudoxe (IVe siècle av. J.-C.) permet de traiter aussi les rapports incommensurables. Euclide l'expose dans le livre V." },
        { id: "tal", label: "Théorème de Thalès", x: 20, y: 30, color: "#f59e0b", html: "Des parallèles coupent des sécantes en segments proportionnels.", why: "C'est la propriété qui « transporte » un rapport le long des parallèles : elle naît de l'observation que des parallèles équidistantes découpent des parts égales. La théorie de la similitude repose sur elle." },
        { id: "sim", label: "Figures semblables", x: 80, y: 30, color: "#16a34a", html: "Mêmes angles et côtés proportionnels, de rapport k.", why: "Elle formalise l'idée de « même forme » : agrandissements et réductions. Elle permet d'étudier un grand objet avec un petit modèle (cartes, maquettes, modèles en soufflerie)." },
        { id: "crit", label: "Critères pour les triangles", x: 50, y: 54, color: "#a855f7", html: "AA, CAC, CCC.", why: "Ce sont les équivalents des cas d'égalité, où « égal » est remplacé par « proportionnel ». AA suffit parce que la somme des angles vaut 180°." },
        { id: "k", label: "Rapports : k, k², k³", x: 80, y: 76, color: "#ef4444", html: "Longueurs ×k, aires ×k², volumes ×k³.", why: "Les aires dépendent de deux dimensions, les volumes de trois. C'est la loi d'échelle de Galilée : elle explique la forme des animaux et des ponts." },
        { id: "euc", label: "Théorèmes d'Euclide", x: 20, y: 76, color: "#0ea5e9", html: "Ils découlent de la similitude des triangles ABC, HBA, HAC.", why: "La hauteur relative à l'hypoténuse crée deux triangles semblables au premier : des rapports entre côtés naissent a² = c·p et h² = p·q, et de là Pythagore." },
        { id: "app", label: "Applications", x: 50, y: 92, color: "#14b8a6", html: "Ombres, cartes, miroirs, relevés.", why: "La topographie (mesure du terrain) utilise la triangulation : à partir d'une base mesurée au sol, on calcule des distances inaccessibles avec des triangles semblables." }
      ],
      edges: [
        ["prop", "tal", "est à la base du"],
        ["prop", "sim", "définit"],
        ["tal", "crit", "démontre"],
        ["sim", "crit", "se vérifie avec"],
        ["crit", "euc", "démontrent"],
        ["sim", "k", "implique"],
        ["crit", "app", "utilisés pour"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : applications",
      questions: [
        { type: "num", q: "Un poteau de 2 m projette une ombre de 3 m. Au même instant, un bâtiment projette une ombre de 24 m. Quelle est la hauteur du bâtiment ?", answer: 16, unit: "m", explain: "h : 2 = 24 : 3, donc h = 2 · 24 / 3 = 16 m." },
        { type: "num", q: "À l'échelle 1 : 50 000, combien de kilomètres réels représentent 6 cm sur la carte ?", answer: 3, unit: "km", explain: "6 · 50 000 = 300 000 cm = 3 000 m = 3 km." },
        { type: "num", q: "Dans le triangle ABC, la bissectrice [AD] partage [BC] en BD et DC, avec AB = 8 et AC = 12. Si BC = 15, combien mesure BD ?", answer: 6, unit: "", explain: "BD : DC = AB : AC = 8 : 12 = 2 : 3 ; BD = 15 · 2/5 = 6." }
      ]
    }
  ],
  glossary: [
    { t: "Proportion", d: "Égalité entre deux rapports : a : b = c : d." },
    { t: "Théorème de Thalès", d: "Des droites parallèles déterminent sur deux sécantes des segments correspondants proportionnels." },
    { t: "Figures semblables", d: "Figures dont les angles correspondants sont égaux et les côtés correspondants proportionnels." },
    { t: "Rapport de similitude", d: "Le rapport constant k entre les côtés correspondants de deux figures semblables." },
    { t: "Critères de similitude", d: "AA (deux angles), CAC (deux côtés proportionnels et l'angle compris), CCC (trois côtés proportionnels)." },
    { t: "Théorème de la bissectrice", d: "La bissectrice partage le côté opposé en parties proportionnelles aux deux autres côtés." },
    { t: "Échelle", d: "Rapport entre une longueur sur le dessin et la longueur réelle (par exemple 1 : 25 000)." },
    { t: "Côtés correspondants", d: "Dans deux triangles semblables, ce sont les côtés opposés à des angles égaux." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Le théorème de Thalès affirme que des droites parallèles…", options: ["partagent les sécantes en segments proportionnels", "sont toujours perpendiculaires aux sécantes", "forment des triangles superposables"], answer: 0, explain: "Les segments correspondants sur les deux sécantes sont proportionnels." },
      { type: "num", q: "Trois parallèles déterminent sur une sécante AB = 4 et BC = 10 ; sur l'autre, A'B' = 6. Combien vaut B'C' ?", answer: 15, unit: "", explain: "4 : 10 = 6 : x, donc x = 10 · 6 / 4 = 15." },
      { type: "tf", q: "Deux triangles équilatéraux sont toujours semblables.", answer: true, explain: "Tous leurs angles valent 60° : d'après le critère AA, ils sont semblables." },
      { type: "num", q: "Deux polygones semblables ont un rapport de similitude de 5. L'aire du plus petit est de 4 cm². Quelle est l'aire du plus grand ?", answer: 100, unit: "cm²", explain: "Les aires sont dans le rapport k² = 25 : 4 · 25 = 100 cm²." },
      { type: "num", q: "Les côtés d'un triangle mesurent 3, 4 et 5 cm. Un triangle semblable a un plus grand côté de 15 cm. Combien mesure son périmètre ?", answer: 36, unit: "cm", explain: "k = 15 / 5 = 3 ; le périmètre de départ est de 12 cm : 12 · 3 = 36 cm." },
      { type: "mc", q: "Un bâton de 1 m projette une ombre de 0,8 m. Un arbre a une ombre de 12 m. Quelle est sa hauteur ?", options: ["9,6 m", "15 m", "12,8 m"], answer: 1, explain: "h : 1 = 12 : 0,8, donc h = 15 m." },
      { type: "tf", q: "Dans le triangle ABC, une droite parallèle à (BC) qui coupe [AB] en D et [AC] en E donne AD : AB = AE : AC.", answer: true, explain: "C'est une forme du théorème de Thalès (et aussi une conséquence de la similitude ADE ~ ABC)." },
      { type: "num", q: "À l'échelle 1 : 200 000, combien de centimètres sur la carte correspondent à 8 km réels ?", answer: 4, unit: "cm", explain: "8 km = 800 000 cm ; divisé par 200 000 = 4 cm." },
      { type: "text", q: "Quel critère de similitude des triangles ne demande que deux angles égaux ? (écris le sigle)", answer: ["aa", "angle-angle", "premier", "1", "1er", "premier critère", "le premier"], explain: "Le premier critère (AA) : deux angles égaux ; le troisième l'est automatiquement." },
      { type: "order", q: "Remets dans l'ordre les étapes pour mesurer la hauteur d'un arbre grâce à son ombre.", items: ["Mesure la longueur de l'ombre de l'arbre", "Mesure au même instant la hauteur et l'ombre d'un bâton", "Remarque que les triangles ont les mêmes angles (semblables)", "Écris la proportion entre hauteurs et ombres", "Résous la proportion pour trouver la hauteur de l'arbre"], explain: "Les mesures doivent être prises au même instant ; ensuite on reconnaît la similitude et on écrit la proportion." }
    ]
  }
});
