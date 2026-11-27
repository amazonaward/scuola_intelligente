TOPIC('fr', {
  id: "l1-fis-ottica-geometrica",
  title: "Optique géométrique",
  intro: "Pourquoi une paille dans un verre semble-t-elle cassée ? Comment un microscope peut-il grossir une cellule et des lunettes corriger la myopie ? Pourquoi les fibres optiques apportent-elles internet jusque chez nous ? Pour répondre, inutile de savoir ce qu'est la lumière au plus profond : il suffit de décrire son trajet par des <b>lignes droites</b>, les <b>rayons lumineux</b>, et deux lois très simples, la <b>réflexion</b> et la <b>réfraction</b>. C'est l'<b>optique géométrique</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "La lumière et les rayons",
      html: `<p>Une <b>source lumineuse</b> émet de la lumière (le Soleil, une ampoule, un écran) ; un <b>objet éclairé</b> (ou diffusant) la renvoie vers nos yeux (la Lune, un livre). Dans un <b>milieu homogène et transparent</b> (air, eau, verre), la lumière se propage en <b>ligne droite</b> : c'est le fondement de l'optique géométrique. Son trajet se représente par un <b>rayon lumineux</b>, une simple ligne orientée ; un ensemble de rayons forme un <b>faisceau</b> (parallèle, divergent ou convergent).</p>
<p>La lumière se propage aussi dans le <b>vide</b>, à la vitesse</p>
<p style="text-align:center"><b>c = 299 792 458 m/s ≈ 3,00 × 10<sup>8</sup> m/s</b></p>
<p>Le Soleil est à environ 150 millions de km : sa lumière met environ 8 minutes et 20 secondes pour arriver sur Terre. L'<b>année-lumière</b> est la distance parcourue par la lumière en un an (environ 9,46 × 10<sup>12</sup> km).</p>
<p>La propagation rectiligne explique les <b>ombres</b> : derrière un obstacle opaque éclairé par une source ponctuelle, il y a une zone sombre nette (l'<b>ombre</b>) ; si la source est étendue, apparaît aussi une zone de <b>pénombre</b>, éclairée seulement en partie. Les <b>éclipses</b> sont des ombres et des pénombres astronomiques : lors d'une éclipse de Soleil, la Lune projette son ombre sur la Terre ; lors d'une éclipse de Lune, c'est la Terre qui assombrit la Lune.</p>
<p>Un corps peut être <b>transparent</b> (il laisse passer la lumière), <b>translucide</b> (il la diffuse) ou <b>opaque</b> (il l'absorbe ou la réfléchit). Quand un rayon arrive sur une surface qui sépare deux milieux, en général une partie est <b>réfléchie</b>, une partie <b>réfractée</b> et une partie <b>absorbée</b>.</p>`
    },
    {
      type: "example",
      title: "Exemple : mesurer la hauteur d'un arbre grâce à son ombre",
      html: `<p>À 15 h, un piquet de 1,5 m de haut projette une ombre de 2 m ; l'ombre de l'arbre mesure 14 m. Les rayons du Soleil (très lointain) sont pratiquement parallèles, donc les deux triangles formés par l'objet, l'ombre et le rayon sont semblables :</p>
<ol>
<li>hauteur de l'arbre / ombre de l'arbre = hauteur du piquet / ombre du piquet</li>
<li>h / 14 = 1,5 / 2</li>
<li>h = 14 × 0,75 = <b>10,5 m</b></li>
</ol>
<p>Selon la tradition, c'est avec cette méthode, fondée sur la propagation rectiligne, que Thalès (VIe siècle av. J.-C.) mesura déjà la hauteur des pyramides.</p>`
    },
    {
      type: "text",
      title: "La réflexion et les miroirs plans",
      html: `<p>Quand un rayon frappe une surface lisse (un miroir, une eau calme, un métal poli), il est renvoyé : c'est la <b>réflexion</b>. On mesure les angles par rapport à la <b>normale</b>, la perpendiculaire à la surface au point d'incidence.</p>
<p><b>Lois de la réflexion</b> (lois de Snell-Descartes) :</p>
<ol>
<li>le rayon incident, le rayon réfléchi et la normale sont <b>dans un même plan</b> ;</li>
<li>l'<b>angle de réflexion est égal à l'angle d'incidence</b> : θ<sub>r</sub> = θ<sub>i</sub>.</li>
</ol>
<p>Si la surface est lisse, on a une <b>réflexion spéculaire</b> (des rayons parallèles restent parallèles) ; si elle est rugueuse, les rayons sont renvoyés dans toutes les directions : c'est la <b>diffusion</b>. C'est grâce à la diffusion que nous voyons les objets de n'importe quelle position, même s'ils ne sont pas des miroirs.</p>
<p><b>Miroir plan.</b> L'image d'un objet est :</p>
<ul>
<li><b>virtuelle</b> (derrière le miroir : les rayons n'y passent pas réellement, mais semblent en provenir) ;</li>
<li><b>droite</b> et de <b>même taille</b> ;</li>
<li><b>symétrique</b> par rapport au miroir : l'image est à la même distance derrière le miroir que l'objet devant. C'est pourquoi la droite et la gauche semblent inversées (ta main droite devient la main gauche de l'image).</li>
</ul>
<p>Pour te voir en entier dans un miroir plan, il suffit qu'il mesure la <b>moitié</b> de ta taille et que son bord inférieur soit à mi-hauteur entre tes yeux et le sol.</p>`
    },
    {
      type: "svg",
      title: "Réflexion et réfraction",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="150" fill="#f0f9ff"/>
<rect y="150" width="600" height="150" fill="#bae6fd"/>
<line x1="0" y1="150" x2="600" y2="150" stroke="#0369a1" stroke-width="3"/>
<line x1="300" y1="20" x2="300" y2="280" stroke="#64748b" stroke-width="2" stroke-dasharray="8 6"/>
<text x="308" y="35" font-size="16" fill="#475569">normale</text>
<line x1="130" y1="50" x2="300" y2="150" stroke="#f59e0b" stroke-width="4"/>
<polygon points="300,150 284,130 274,142" fill="#f59e0b"/>
<line x1="300" y1="150" x2="470" y2="50" stroke="#ef4444" stroke-width="4"/>
<polygon points="470,50 450,52 460,66" fill="#ef4444"/>
<line x1="300" y1="150" x2="390" y2="270" stroke="#16a34a" stroke-width="4"/>
<polygon points="390,270 380,252 368,262" fill="#16a34a"/>
<text x="95" y="45" font-size="17" fill="#b45309" font-weight="bold">rayon incident</text>
<text x="445" y="38" font-size="17" fill="#b91c1c" font-weight="bold">réfléchi</text>
<text x="400" y="275" font-size="17" fill="#15803d" font-weight="bold">réfracté</text>
<text x="215" y="120" font-size="17" fill="#1f2937" font-weight="bold">θi</text>
<text x="345" y="120" font-size="17" fill="#1f2937" font-weight="bold">θr = θi</text>
<text x="335" y="205" font-size="17" fill="#1f2937" font-weight="bold">θ2</text>
<text x="20" y="100" font-size="18" fill="#0c4a6e" font-weight="bold">air (n1 = 1)</text>
<text x="20" y="190" font-size="18" fill="#0c4a6e" font-weight="bold">eau (n2 = 1,33)</text>
</svg>`,
      caption: "Un rayon qui passe de l'air à l'eau se divise : une partie est réfléchie avec θr = θi, une partie entre dans l'eau en se rapprochant de la normale (θ2 < θi)."
    },
    {
      type: "text",
      title: "La réfraction et la loi de Snell-Descartes",
      html: `<p>Quand la lumière passe d'un milieu à un autre, elle <b>change de vitesse</b> et, si elle arrive obliquement, elle <b>change de direction</b> : c'est la <b>réfraction</b>. Chaque milieu transparent est caractérisé par son <b>indice de réfraction</b> :</p>
<p style="text-align:center"><b>n = c / v</b></p>
<p>où v est la vitesse de la lumière dans ce milieu (donc toujours n ≥ 1). Valeurs typiques : air environ 1,000 ; eau 1,33 ; verre ordinaire environ 1,5 ; diamant 2,42.</p>
<p><b>Loi de Snell-Descartes</b>, formulée par le Néerlandais Willebrord Snell vers 1621 et publiée par Descartes :</p>
<p style="text-align:center"><b>n<sub>1</sub> · sin θ<sub>1</sub> = n<sub>2</sub> · sin θ<sub>2</sub></b></p>
<p>avec les angles mesurés par rapport à la normale. Conséquences :</p>
<ul>
<li>en passant dans un milieu d'indice <b>plus grand</b> (plus « réfringent », par ex. air → eau), le rayon <b>se rapproche de la normale</b> ;</li>
<li>en passant dans un milieu d'indice <b>plus petit</b> (eau → air), le rayon <b>s'écarte de la normale</b> ;</li>
<li>un rayon perpendiculaire à la surface (θ<sub>1</sub> = 0) n'est pas dévié.</li>
</ul>
<p>La réfraction explique pourquoi la paille dans un verre semble cassée, pourquoi une piscine paraît moins profonde qu'elle ne l'est et pourquoi le Soleil couchant paraît aplati : l'atmosphère a un indice de réfraction qui augmente vers le bas et courbe les rayons.</p>`
    },
    {
      type: "example",
      title: "Exemple : de l'air à l'eau",
      html: `<p>Un rayon frappe la surface d'une piscine avec un angle d'incidence de 45°. Avec quel angle continue-t-il dans l'eau (n = 1,33) ?</p>
<ol>
<li>1,00 · sin 45° = 1,33 · sin θ<sub>2</sub></li>
<li>sin θ<sub>2</sub> = 0,7071 / 1,33 ≈ 0,532</li>
<li>θ<sub>2</sub> ≈ <b>32°</b></li>
</ol>
<p>Le rayon s'est rapproché de la normale (de 45° à 32°). C'est pourquoi un poisson vu d'en haut semble plus proche de la surface qu'il ne l'est vraiment, et qu'un pêcheur au harpon doit viser plus bas que l'endroit où il le voit.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : réflexion et réfraction",
      questions: [
        { type: "num", q: "Un rayon arrive sur un miroir avec un angle de 35° par rapport à la normale. Quel est l'angle entre le rayon incident et le rayon réfléchi ?", answer: 70, unit: "°", explain: "θr = θi = 35°, donc entre les deux rayons il y a 35° + 35° = 70°." },
        { type: "mc", q: "Un rayon passe de l'air au verre (n = 1,5) sous une incidence oblique. Le rayon réfracté…", options: ["s'écarte de la normale", "se rapproche de la normale", "ne change pas de direction"], answer: 1, explain: "En passant dans un milieu d'indice plus grand, il se rapproche de la normale : sin θ2 = sin θ1 / 1,5 < sin θ1." },
        { type: "num", q: "Dans un matériau, la lumière se déplace à 2,0 × 10^8 m/s. Quel est son indice de réfraction (c = 3,0 × 10^8 m/s) ?", answer: 1.5, tol: 0.01, explain: "n = c/v = 3,0 × 10^8 / 2,0 × 10^8 = 1,5." }
      ]
    },
    {
      type: "text",
      title: "La réflexion totale et les fibres optiques",
      html: `<p>Quand la lumière passe d'un milieu d'indice plus grand à un milieu d'indice plus petit (par exemple de l'eau à l'air), le rayon s'écarte de la normale. En augmentant l'angle d'incidence, on atteint un <b>angle limite</b> θ<sub>L</sub> pour lequel le rayon réfracté « rase » la surface (θ<sub>2</sub> = 90°) :</p>
<p style="text-align:center"><b>sin θ<sub>L</sub> = n<sub>2</sub> / n<sub>1</sub></b> (avec n<sub>2</sub> &lt; n<sub>1</sub>)</p>
<p>Au-delà de cet angle, il n'y a plus de rayon réfracté : toute la lumière est réfléchie. C'est la <b>réflexion totale</b>. Pour eau-air, θ<sub>L</sub> = arcsin(1/1,33) ≈ 48,8° ; pour verre-air (n = 1,5), ≈ 41,8°. C'est la raison des reflets « argentés » que tu vois quand tu regardes la surface de l'eau par en dessous, sous l'eau, et de l'éclat du diamant (θ<sub>L</sub> ≈ 24,4°, très petit : la lumière rebondit à l'intérieur de la pierre avant d'en sortir).</p>
<p>Les <b>fibres optiques</b> sont des fils de verre très fins : la lumière, qui y entre avec une faible inclinaison, subit des réflexions totales successives sur les parois et voyage sur des centaines de km en suivant les courbes. Elles transportent une grande partie du trafic internet et sont utilisées en médecine (endoscopes).</p>`
    },
    {
      type: "text",
      title: "Miroirs sphériques",
      html: `<p>Un <b>miroir sphérique</b> est une calotte de sphère de rayon R. Il a un <b>centre</b> C, un <b>sommet</b> S et un <b>axe optique</b> (la droite CS). Pour des rayons proches de l'axe (conditions de Gauss), les rayons parallèles à l'axe se croisent en un point, le <b>foyer</b> F, à la distance</p>
<p style="text-align:center"><b>f = R / 2</b></p>
<ul>
<li>Miroir <b>concave</b> (qui réfléchit sur sa face intérieure, comme une cuillère) : il fait <b>converger</b> les rayons, foyer réel, avec f &gt; 0. On l'utilise dans les phares, les antennes paraboliques, les télescopes à miroir et les miroirs de maquillage ;</li>
<li>Miroir <b>convexe</b> (qui réfléchit sur sa face extérieure) : il fait <b>diverger</b> les rayons, foyer virtuel (f &lt; 0). Il donne toujours une image virtuelle, droite et réduite, avec un large champ de vision : c'est le miroir des rétroviseurs et des parkings.</li>
</ul>
<p>En notant <b>p</b> la distance entre l'objet et le miroir et <b>q</b> celle de l'image, on a la <b>relation de conjugaison</b> :</p>
<p style="text-align:center"><b>1/p + 1/q = 1/f</b></p>
<p>et le <b>grandissement</b> G = −q/p (G &lt; 0 : image renversée ; |G| &gt; 1 : image agrandie). Pour le miroir concave, si l'objet est au-delà du centre C, l'image est réelle, renversée et réduite ; entre C et F, réelle, renversée et agrandie ; entre F et S, virtuelle, droite et agrandie (comme le miroir grossissant pour se raser).</p>`
    },
    {
      type: "example",
      title: "Exemple : l'image dans un miroir concave",
      html: `<p>Un miroir concave a un rayon de courbure R = 40 cm. Une bougie est à p = 60 cm du sommet. Où se forme l'image ?</p>
<ol>
<li>Foyer : f = R/2 = 20 cm.</li>
<li>1/q = 1/f − 1/p = 1/20 − 1/60 = 3/60 − 1/60 = 2/60 = 1/30 → <b>q = 30 cm</b> (positif : image réelle, devant le miroir).</li>
<li>Grandissement : G = −q/p = −30/60 = <b>−0,5</b> : image renversée et deux fois plus petite.</li>
</ol>
<p>Si l'on rapproche la bougie à p = 10 cm (entre F et S) : 1/q = 1/20 − 1/10 = −1/20 → q = −20 cm (virtuelle, derrière le miroir), G = −(−20)/10 = +2 : droite et deux fois plus grande. C'est ce que tu vois dans un miroir de maquillage.</p>`
    },
    {
      type: "text",
      title: "Les lentilles minces",
      html: `<p>Une <b>lentille</b> est un morceau de matériau transparent (verre ou plastique) limité par des surfaces courbes ; les rayons sont déviés deux fois par réfraction, en entrant et en sortant. Pour une <b>lentille mince</b>, on utilise les mêmes relations que pour les miroirs :</p>
<p style="text-align:center"><b>1/p + 1/q = 1/f &nbsp;&nbsp;&nbsp; G = −q/p</b></p>
<ul>
<li><b>Lentille convergente</b> (plus épaisse au centre, f &gt; 0) : les rayons parallèles à l'axe convergent au foyer. Si l'objet est au-delà du foyer, elle donne une image réelle et renversée (comme l'appareil photo, le projecteur, notre œil) ; s'il est entre la lentille et le foyer, elle donne une image virtuelle, droite et agrandie : c'est la <b>loupe</b> ;</li>
<li><b>Lentille divergente</b> (plus mince au centre, f &lt; 0) : les rayons s'écartent ; l'image est toujours virtuelle, droite et réduite.</li>
</ul>
<p>La <b>vergence</b> d'une lentille se mesure en <b>dioptries</b> (D, ou δ) : V = 1/f avec f en mètres. Une lentille de f = 50 cm = 0,5 m a une vergence de +2 D ; une lentille de f = −25 cm a une vergence de −4 D. Plus la vergence est grande, plus la lentille dévie les rayons.</p>
<p><b>L'œil et les lunettes.</b> Dans l'œil, la cornée et le cristallin forment sur la rétine une image réelle et renversée (le cerveau la redresse). Dans la <b>myopie</b>, l'image d'un objet éloigné se forme <b>avant</b> la rétine (œil trop long) : on la corrige avec une lentille <b>divergente</b> (dioptries négatives). Dans l'<b>hypermétropie</b>, elle se forme <b>après</b> la rétine : on la corrige avec une lentille <b>convergente</b> (dioptries positives). La presbytie, fréquente après 45 ans, se corrige aussi avec des lentilles convergentes.</p>`
    },
    {
      type: "widget",
      title: "Miroir ou lentille, convergent ou divergent ?",
      widget: "classify",
      options: { groups: ["Fait converger les rayons", "Fait diverger les rayons"], items: [
        ["🪞 miroir concave", 0],
        ["🔍 loupe (lentille convergente)", 0],
        ["👓 verre pour la myopie", 1],
        ["🚗 rétroviseur (convexe)", 1],
        ["👓 verre pour l'hypermétropie", 0],
        ["🔭 miroir principal d'un télescope", 0],
        ["🪞 miroir de surveillance dans les magasins (convexe)", 1],
        ["📷 objectif d'un appareil photo (ensemble convergent)", 0]
      ] },
      caption: "Rappel : concave et convergent font converger les rayons (f > 0) ; convexe et divergent les font diverger (f < 0)."
    },
    {
      type: "curiosity",
      title: "Alhazen et le premier livre d'optique",
      html: `<p>L'optique comme science expérimentale est née dans le monde islamique. <b>Ibn al-Haytham</b> (latinisé en Alhazen, vers 965-1040), né à Bassora et actif au Caire, écrivit entre 1011 et 1021 le <i>Livre de l'optique</i>. Il démontra par des expériences, à l'aide de la chambre noire, que nous voyons parce que la lumière <b>entre</b> dans l'œil depuis un objet, et non parce que l'œil « émet » des rayons, comme le croyaient de nombreux philosophes grecs. Sa méthode, faite d'hypothèses vérifiées par des expériences reproductibles, est considérée comme une précurseure de la méthode scientifique moderne. Traduit en latin, son livre influença Roger Bacon, Kepler et Léonard de Vinci.</p>`
    },
    {
      type: "curiosity",
      title: "Les mirages et le Soleil « en avance »",
      html: `<p>Sur les routes, en été, on voit parfois des « flaques d'eau » qui disparaissent quand on s'approche : c'est un <b>mirage</b>. L'asphalte brûlant chauffe l'air à son contact, qui a un indice de réfraction plus faible que l'air situé au-dessus : les rayons venant du ciel se courbent vers le haut avant d'arriver à nos yeux, et nous voyons un morceau de ciel « par terre », qui ressemble à de l'eau. Le coucher de soleil est aussi un effet de réfraction : quand le Soleil semble à peine toucher l'horizon, il est en réalité déjà en dessous d'environ un demi-degré, et son image est un peu aplatie parce que l'atmosphère courbe les rayons.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la réfraction",
      intro: "Pourquoi la lumière se plie-t-elle quand elle change de milieu ? Trois images différentes, qui mènent à la même loi.",
      tabs: [
        {
          label: "🏖️ Le maître-nageur de Fermat",
          html: `<p>Un maître-nageur doit rejoindre un nageur en mer en partant de la plage. Sur le sable, il court vite ; dans l'eau, il nage plus lentement. Le trajet le plus rapide <b>n'est pas la ligne droite</b> : il vaut mieux courir un peu plus longtemps sur le sable et nager moins dans l'eau. Pierre de Fermat (1601-1665) comprit que la lumière fait de même : entre deux points, elle choisit le trajet qui demande le <b>temps minimal</b> (<b>principe de Fermat</b>). De ce principe, on déduit à la fois la réflexion et la loi de Snell-Descartes, et il explique pourquoi la lumière se rapproche de la normale quand elle ralentit (en entrant dans un milieu d'indice plus grand).</p>`
        },
        {
          label: "🛒 Le chariot sur la pelouse",
          html: `<p>Un chariot dont les roues sont côte à côte passe en biais d'un asphalte lisse à une pelouse. La roue qui touche l'herbe en premier ralentit, tandis que l'autre continue vite : le chariot <b>tourne</b> du côté de la roue lente et change de direction. De la même façon, un front de lumière qui entre en biais dans un milieu plus lent pivote. Cette analogie est très proche de celle qu'utilisaient Huygens et les partisans de la théorie ondulatoire de la lumière au XVIIe siècle.</p>`
        },
        {
          label: "✏️ Tracer les rayons dans une lentille",
          html: `<p>Pour construire l'image d'un objet par une lentille convergente, il suffit de deux rayons « particuliers » partant de la pointe de la flèche :</p>
<ol>
<li>le rayon <b>parallèle</b> à l'axe : après la lentille, il passe par le <b>foyer</b> ;</li>
<li>le rayon qui passe par le <b>centre</b> optique de la lentille : il n'est pas dévié.</li>
</ol>
<p>Là où ils se croisent (eux ou leurs prolongements) se forme la pointe de l'image.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<line x1="20" y1="150" x2="580" y2="150" stroke="#64748b" stroke-width="2"/>
<path d="M300 40 Q320 150 300 260 Q280 150 300 40 Z" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/>
<circle cx="210" cy="150" r="5" fill="#111827"/><text x="203" y="178" font-size="16" fill="#111827" font-weight="bold">F</text>
<circle cx="390" cy="150" r="5" fill="#111827"/><text x="383" y="178" font-size="16" fill="#111827" font-weight="bold">F'</text>
<line x1="100" y1="150" x2="100" y2="100" stroke="#16a34a" stroke-width="5"/>
<polygon points="100,95 93,110 107,110" fill="#16a34a"/>
<text x="60" y="130" font-size="16" fill="#15803d" font-weight="bold">objet</text>
<line x1="100" y1="100" x2="300" y2="100" stroke="#f59e0b" stroke-width="3"/>
<line x1="300" y1="100" x2="490" y2="205" stroke="#f59e0b" stroke-width="3"/>
<line x1="100" y1="100" x2="490" y2="198" stroke="#ef4444" stroke-width="3"/>
<line x1="490" y1="150" x2="490" y2="200" stroke="#dc2626" stroke-width="5"/>
<polygon points="490,205 483,190 497,190" fill="#dc2626"/>
<text x="500" y="232" font-size="16" fill="#b91c1c" font-weight="bold">image réelle et renversée</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de l'optique géométrique",
      nodes: [
        { id: "luce", label: "Rayons lumineux", x: 50, y: 6, color: "#64748b", html: "Modèle : la lumière se propage en ligne droite dans un milieu homogène.", why: "C'est un modèle approché, valable quand les objets sont beaucoup plus grands que la longueur d'onde de la lumière (environ un demi-millième de mm). Quand ce n'est pas le cas, interviennent la diffraction et les interférences." },
        { id: "ombre", label: "Ombres et éclipses", x: 15, y: 25, color: "#94a3b8", html: "Zones que la lumière n'atteint pas derrière un obstacle.", why: "Elles sont la preuve la plus simple de la propagation rectiligne : déjà les Grecs de l'Antiquité mesurèrent, avec des ombres et de la géométrie, les dimensions de la Terre (Ératosthène) et des distances astronomiques." },
        { id: "riflessione", label: "Réflexion", x: 50, y: 28, color: "#ef4444", html: "θr = θi, rayons dans un même plan.", why: "Elle découle du principe de Fermat : le trajet réfléchi le plus court est celui qui a des angles égaux. Euclide et Héron la connaissaient déjà." },
        { id: "rifrazione", label: "Réfraction", x: 82, y: 28, color: "#16a34a", html: "n1 sin θ1 = n2 sin θ2.", why: "La lumière ralentit dans les milieux d'indice plus grand (n = c/v). Snell (1621) et Descartes la formulèrent ; Fermat la déduisit du principe du temps minimal (1662)." },
        { id: "specchi", label: "Miroirs", x: 28, y: 55, color: "#f59e0b", html: "Plans et sphériques : 1/p + 1/q = 1/f.", why: "Dans le miroir sphérique, le foyer est à R/2 parce que, pour des rayons proches de l'axe, la géométrie du cercle fait converger les rayons réfléchis à mi-chemin entre le sommet et le centre." },
        { id: "riftot", label: "Réflexion totale", x: 82, y: 55, color: "#0ea5e9", html: "Au-delà de l'angle limite sin θL = n2/n1, il n'y a pas de rayon réfracté.", why: "C'est la loi de Snell-Descartes poussée à la limite : si sin θ2 devait dépasser 1, il n'y a pas de solution et toute la lumière est réfléchie. Elle rend possibles les fibres optiques." },
        { id: "lenti", label: "Lentilles", x: 62, y: 78, color: "#9333ea", html: "Convergentes et divergentes, vergence en dioptries.", why: "Une lentille réalise deux réfractions successives sur des surfaces courbes ; sa forme dévie davantage les rayons éloignés du centre, de façon à les faire converger en un point." },
        { id: "occhio", label: "L'œil et les instruments", x: 30, y: 92, color: "#22c55e", html: "Lunettes, microscope, télescope, appareil photo.", why: "Tous combinent des lentilles ou des miroirs. La lunette astronomique fut perfectionnée par Galilée en 1609 ; Kepler comprit en 1604 le fonctionnement optique de l'œil et comment en corriger les défauts." }
      ],
      edges: [["luce", "ombre", "preuve"], ["luce", "riflessione", "sur des surfaces"], ["luce", "rifrazione", "entre milieux"], ["riflessione", "specchi", "application"], ["rifrazione", "riftot", "cas limite"], ["rifrazione", "lenti", "application"], ["lenti", "occhio", "instruments"], ["specchi", "occhio", "instruments"]]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>La lumière se propage en ligne droite ; dans le vide, c = 3,00 × 10<sup>8</sup> m/s.</li>
<li><b>Réflexion</b> : θ<sub>r</sub> = θ<sub>i</sub>. Le miroir plan donne une image virtuelle, droite, symétrique.</li>
<li><b>Réfraction</b> : n = c/v ; n<sub>1</sub> sin θ<sub>1</sub> = n<sub>2</sub> sin θ<sub>2</sub>. Vers un indice plus grand, le rayon se rapproche de la normale.</li>
<li><b>Réflexion totale</b> si n<sub>1</sub> &gt; n<sub>2</sub> et θ &gt; θ<sub>L</sub>, avec sin θ<sub>L</sub> = n<sub>2</sub>/n<sub>1</sub>.</li>
<li>Miroirs et lentilles minces : <b>1/p + 1/q = 1/f</b>, G = −q/p ; miroir sphérique f = R/2 ; vergence V = 1/f (dioptries).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : miroirs et lentilles",
      questions: [
        { type: "num", q: "Une lentille convergente a une distance focale de 10 cm. Un objet est à 30 cm. À quelle distance (en cm) se forme l'image ?", answer: 15, unit: "cm", explain: "1/q = 1/10 − 1/30 = 2/30, donc q = 15 cm." },
        { type: "num", q: "Combien de dioptries a une lentille convergente de distance focale 25 cm ?", answer: 4, unit: "D", explain: "V = 1/f = 1/0,25 m = 4 D." },
        { type: "mc", q: "Quelle lentille corrige la myopie ?", options: ["Convergente", "Divergente", "Plane"], answer: 1, explain: "Dans l'œil myope, l'image se forme avant la rétine : il faut une lentille divergente pour la reculer." },
        { type: "tf", q: "Le miroir convexe donne toujours une image virtuelle, droite et réduite.", answer: true, explain: "Quelle que soit la position de l'objet : c'est pourquoi on l'utilise dans les rétroviseurs, avec un large champ de vision." }
      ]
    }
  ],
  glossary: [
    { t: "Rayon lumineux", d: "Ligne orientée qui représente le trajet de la lumière." },
    { t: "Normale", d: "Droite perpendiculaire à une surface au point où arrive un rayon." },
    { t: "Réflexion", d: "Retour de la lumière dans le même milieu après avoir rencontré une surface : θr = θi." },
    { t: "Réfraction", d: "Changement de direction de la lumière quand elle passe d'un milieu à un autre." },
    { t: "Indice de réfraction", d: "n = c/v : rapport entre la vitesse de la lumière dans le vide et dans le milieu." },
    { t: "Angle limite", d: "Angle d'incidence au-delà duquel se produit la réflexion totale : sin θL = n2/n1." },
    { t: "Foyer", d: "Point où convergent les rayons parallèles à l'axe après un miroir ou une lentille." },
    { t: "Distance focale", d: "Distance entre le foyer et le miroir ou la lentille : f = R/2 pour les miroirs sphériques." },
    { t: "Image réelle / virtuelle", d: "Réelle : formée par des rayons qui se croisent vraiment. Virtuelle : formée par les prolongements des rayons." },
    { t: "Dioptrie", d: "Unité de vergence d'une lentille : 1 D = 1 m⁻¹." },
    { t: "Fibre optique", d: "Fil de verre dans lequel la lumière voyage par réflexion totale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quelle est l'hypothèse de base de l'optique géométrique ?", options: ["La lumière se propage en ligne droite dans un milieu homogène", "La lumière n'est faite que d'ondes", "La lumière s'arrête sur les miroirs"], answer: 0, explain: "Le modèle des rayons rectilignes décrit très bien la formation des ombres et le fonctionnement des miroirs et des lentilles." },
      { type: "num", q: "Un rayon arrive sur un miroir plan avec un angle de 28° par rapport à la normale. Quel est l'angle de réflexion ?", answer: 28, unit: "°", explain: "D'après la loi de la réflexion, θr = θi = 28°." },
      { type: "num", q: "Dans un liquide, la lumière se déplace à 2,25 × 10^8 m/s. Calcule l'indice de réfraction (c = 3,0 × 10^8 m/s). Arrondis à deux décimales.", answer: 1.33, tol: 0.01, explain: "n = c/v = 3,0/2,25 = 1,33 : c'est l'eau." },
      { type: "tf", q: "En passant de l'eau à l'air, un rayon oblique se rapproche de la normale.", answer: false, explain: "En passant dans un milieu d'indice plus petit (l'air), le rayon s'écarte de la normale." },
      { type: "num", q: "Un rayon passe de l'air (n = 1) au verre (n = 1,5) avec une incidence de 30°. Que vaut sin θ2 (arrondis à deux décimales) ?", answer: 0.33, tol: 0.01, explain: "sin θ2 = sin 30° / 1,5 = 0,5/1,5 ≈ 0,33, soit θ2 ≈ 19,5°." },
      { type: "mc", q: "Pourquoi une fibre optique transporte-t-elle la lumière sans la disperser ?", options: ["Parce qu'elle est en métal", "Par réflexion totale sur les parois internes", "Parce que la lumière s'arrête dans le verre"], answer: 1, explain: "Dans la fibre, la lumière arrive sur les parois avec des angles supérieurs à l'angle limite : elle est totalement réfléchie et continue son chemin." },
      { type: "num", q: "Un miroir concave a un rayon de courbure de 60 cm. Quelle est sa distance focale (en cm) ?", answer: 30, unit: "cm", explain: "f = R/2 = 30 cm." },
      { type: "num", q: "Une lentille a f = 20 cm et un objet est placé à 60 cm. Calcule la distance de l'image (en cm).", answer: 30, unit: "cm", explain: "1/q = 1/20 − 1/60 = 2/60, donc q = 30 cm ; G = −0,5." },
      { type: "tf", q: "Une loupe est une lentille convergente avec l'objet placé entre la lentille et le foyer.", answer: true, explain: "Dans ce cas, l'image est virtuelle, droite et agrandie." },
      { type: "order", q: "Range dans l'ordre les étapes pour construire graphiquement l'image donnée par une lentille convergente.", items: ["Tracer l'axe optique, la lentille et les foyers", "Tracer l'objet et un rayon parallèle à l'axe", "Faire passer ce rayon par le foyer après la lentille", "Tracer le rayon qui passe par le centre de la lentille", "Trouver l'intersection : c'est là que se forme l'image"], explain: "Deux rayons particuliers suffisent : là où ils se croisent se trouve la pointe de l'image." },
      { type: "text", q: "Comment s'appelle le phénomène par lequel un rayon, au-delà d'un certain angle, ne sort plus du milieu mais est entièrement renvoyé ?", answer: ["réflexion totale", "la réflexion totale", "reflexion totale"], explain: "C'est la réflexion totale, qui se produit au-delà de l'angle limite." }
    ]
  }
});
