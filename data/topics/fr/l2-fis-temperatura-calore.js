TOPIC('fr', {
  id: "l2-fis-temperatura-calore",
  title: "Température et chaleur",
  intro: "« Quelle chaleur ! », « ce fer est brûlant », « le café a refroidi » : nous utilisons tous les jours les mots <b>température</b> et <b>chaleur</b>, souvent comme s'ils désignaient la même chose. En physique, ce sont deux concepts distincts, et les distinguer est la première étape pour comprendre pourquoi la mer se réchauffe plus lentement que le sable en été, comment fonctionne une bouteille isotherme, pourquoi les rails ont des joints et pourquoi transpirer nous rafraîchit. Dans cette leçon, nous relions les grandeurs macroscopiques (température, chaleur) au mouvement invisible des atomes et des molécules.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "La température et ses échelles",
      html: `<p>La <b>température</b> mesure à quel point un corps est « chaud » ou « froid », mais notre sens du toucher nous trompe (une poignée en métal semble plus froide que du bois à la même température, parce qu'elle conduit mieux la chaleur). À l'échelle microscopique, la température est liée à l'<b>énergie cinétique moyenne</b> des particules (atomes et molécules) qui constituent le corps, toujours animées d'une agitation thermique désordonnée : plus elles sont agitées, plus le corps est chaud.</p>
<p>Pour la mesurer, on utilise des <b>thermomètres</b>, qui exploitent une propriété variant avec la température : la dilatation d'un liquide (mercure, alcool coloré), la résistance électrique, le rayonnement infrarouge émis. Les principales échelles :</p>
<table>
<tr><th>Échelle</th><th>Points de référence</th><th>Conversions</th></tr>
<tr><td><b>Celsius (°C)</b></td><td>0 °C glace fondante, 100 °C eau bouillante (sous une pression de 1 atm)</td><td>T(K) = T(°C) + 273,15</td></tr>
<tr><td><b>Kelvin (K)</b></td><td>0 K = zéro absolu (−273,15 °C)</td><td>Unité SI ; un écart ΔT a la même valeur en K et en °C</td></tr>
<tr><td><b>Fahrenheit (°F)</b></td><td>32 °F glace fondante, 212 °F eau bouillante</td><td>T(°F) = 1,8 · T(°C) + 32</td></tr>
</table>
<p>L'échelle Celsius doit son nom à Anders Celsius (1742) ; l'échelle absolue fut proposée par William Thomson, lord Kelvin, au milieu du XIXe siècle. Le <b>zéro absolu</b> est la température la plus basse concevable, celle où l'agitation thermique serait minimale ; il ne peut pas être atteint en pratique (troisième principe de la thermodynamique). C'est pourquoi l'échelle Kelvin n'a pas de valeurs négatives.</p>`
    },
    {
      type: "example",
      title: "Convertir les températures",
      html: `<p>Température du corps : 37 °C = 310,15 K = 1,8 · 37 + 32 = <b>98,6 °F</b>. L'eau à 20 °C = 293,15 K. Une journée à 77 °F correspond à (77 − 32)/1,8 = <b>25 °C</b>. L'azote liquide bout à −196 °C, soit environ 77 K. Un écart de 10 °C est un écart de 10 K, mais de 18 °F.</p>`
    },
    {
      type: "text",
      title: "La dilatation thermique",
      html: `<p>Quand on chauffe un corps, l'agitation des particules augmente et, en moyenne, elles s'écartent un peu les unes des autres : le corps se <b>dilate</b>. Pour de petites variations de température :</p>
<ul>
<li><b>dilatation linéaire</b> (barres, fils) : <b>ΔL = λ · L₀ · ΔT</b>, où λ est le coefficient de dilatation linéaire (K⁻¹). Valeurs typiques : acier ≈ 12·10⁻⁶ K⁻¹, aluminium ≈ 23·10⁻⁶ K⁻¹, verre ordinaire ≈ 9·10⁻⁶ K⁻¹ ;</li>
<li><b>dilatation volumique</b> : ΔV = β · V₀ · ΔT ; pour les solides isotropes, β ≈ 3λ. Les liquides se dilatent plus que les solides, et les gaz encore plus.</li>
</ul>
<p>Conséquences pratiques : les joints de dilatation des ponts et des rails, les câbles électriques laissés un peu détendus en été, les sols carrelés avec des joints. Les bilames (deux métaux de λ différents soudés ensemble) se courbent quand T varie et commandent de nombreux thermostats.</p>
<p><b>Une exception importante : l'eau.</b> Entre 0 °C et 4 °C, l'eau qui se réchauffe se <i>contracte</i> : sa masse volumique est maximale vers 4 °C. C'est pourquoi la glace flotte et pourquoi, en hiver, les lacs gèlent par la surface en laissant de l'eau liquide (à 4 °C) au fond, où la vie survit.</p>`
    },
    {
      type: "example",
      title: "Le rail et le pont",
      html: `<p>Un rail en acier de 100 m passe de −10 °C en hiver à +30 °C en été : ΔT = 40 K. ΔL = 12·10⁻⁶ · 100 · 40 = 0,048 m = <b>4,8 cm</b>. Si les voies n'avaient pas de joints ou n'étaient pas soudées avec des techniques de mise en tension préalable, elles se déformeraient en été (les rails « en baïonnette »). Un pont en aluminium de 500 m, pour le même écart de température, s'allongerait de 23·10⁻⁶ · 500 · 40 = 0,46 m.</p>`
    },
    {
      type: "curiosity",
      title: "La tour qui grandit en été",
      html: `<p>La tour Eiffel mesure environ 330 m et elle est en fer : entre l'hiver et l'été, sa hauteur varie de quelques centimètres (selon les estimations, environ 15 cm entre les valeurs extrêmes). Le Pyrex, de son côté, est célèbre justement pour son faible coefficient de dilatation, qui lui permet de ne pas se briser quand il passe du réfrigérateur au four : un verre ordinaire chauffé de manière non uniforme se dilate de façon inégale et éclate.</p>`
    },
    {
      type: "quiz",
      title: "Vérifie : température et dilatation",
      questions: [
        { type: "num", q: "Convertis 27 °C en kelvins (utilise 273).", answer: 300, tol: 0.5, unit: "K", explain: "T(K) = 27 + 273 = 300 K." },
        { type: "tf", q: "Une température de −300 °C est physiquement possible.", answer: false, explain: "Le zéro absolu est −273,15 °C : il n'existe pas de températures plus basses." },
        { type: "num", q: "Une barre de 2 m avec λ = 20·10⁻⁶ K⁻¹ est chauffée de 50 K. De combien de millimètres s'allonge-t-elle ?", answer: 2, tol: 0.05, unit: "mm", explain: "ΔL = 20·10⁻⁶ · 2 · 50 = 2·10⁻³ m = 2 mm." }
      ]
    },
    {
      type: "text",
      title: "Qu'est-ce que la chaleur ?",
      html: `<p>La <b>chaleur</b> n'est pas une « chose » contenue dans les corps : c'est de l'<b>énergie en transit</b>, qui passe d'un corps à température plus élevée vers un corps à température plus basse. Un corps « ne possède pas » de chaleur : il possède une énergie interne (la somme des énergies de ses particules) ; la chaleur Q est la quantité d'énergie transférée à cause d'une différence de température. Elle se mesure en <b>joules</b>, même si l'on utilise encore la <b>calorie</b> (1 cal = 4,186 J, la quantité de chaleur qui fait passer 1 g d'eau de 14,5 à 15,5 °C).</p>
<p>Si l'on met en contact deux corps à des températures différentes, la chaleur passe du plus chaud au plus froid jusqu'à ce que l'<b>équilibre thermique</b> soit atteint : même température (principe zéro de la thermodynamique).</p>
<p><b>Capacité thermique et capacité thermique massique.</b> Pour chauffer d'autant des corps différents, il faut plus ou moins d'énergie. On a :</p>
<p style="text-align:center"><b>Q = m · c · ΔT</b></p>
<p>où <b>c</b> est la <b>capacité thermique massique</b> (ou chaleur massique), en J/(kg·K) : l'énergie nécessaire pour élever de 1 K la température de 1 kg de substance. Valeurs typiques : <b>eau 4186</b>, glace ≈ 2100, aluminium ≈ 900, fer ≈ 450, cuivre ≈ 385, plomb ≈ 130 J/(kg·K). L'eau a une capacité thermique massique très élevée : elle se réchauffe et se refroidit lentement, et c'est pourquoi la mer adoucit le climat des côtes.</p>
<p><b>Chaleur latente.</b> Pendant un changement d'état (fusion, vaporisation…), la température reste constante : la chaleur sert à rompre les liaisons entre les particules. On a <b>Q = m · L</b>. Pour l'eau : fusion <b>L = 3,34·10⁵ J/kg</b>, vaporisation <b>L = 2,26·10⁶ J/kg</b>.</p>`
    },
    {
      type: "svg",
      title: "Chauffer 1 kg de glace jusqu'à la vapeur",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<line x1="60" y1="260" x2="610" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="260" x2="60" y2="20" stroke="#475569" stroke-width="2"/>
<polyline points="60,230 140,200" fill="none" stroke="#2563eb" stroke-width="4"/>
<line x1="140" y1="200" x2="260" y2="200" stroke="#dc2626" stroke-width="5"/>
<polyline points="260,200 340,120" fill="none" stroke="#2563eb" stroke-width="4"/>
<line x1="340" y1="120" x2="540" y2="120" stroke="#dc2626" stroke-width="5"/>
<polyline points="540,120 580,50" fill="none" stroke="#2563eb" stroke-width="4"/>
<text x="62" y="278" font-size="15" fill="#0f172a">Chaleur fournie Q →</text>
<text x="70" y="38" font-size="15" fill="#0f172a">T</text>
<text x="40" y="204" font-size="15" fill="#0f172a" text-anchor="end">0 °C</text>
<text x="40" y="124" font-size="15" fill="#0f172a" text-anchor="end">100 °C</text>
<text x="150" y="222" font-size="15" fill="#dc2626" font-weight="bold">fusion</text>
<text x="395" y="140" font-size="15" fill="#dc2626" font-weight="bold">vaporisation</text>
<text x="85" y="250" font-size="14" fill="#0f172a">glace</text>
<text x="255" y="170" font-size="14" fill="#0f172a">eau</text>
<text x="545" y="105" font-size="14" fill="#0f172a">vapeur</text>
</g>
</svg>`,
      caption: "Sur les paliers horizontaux (en rouge), la chaleur ne fait pas monter la température : elle sert à changer l'état physique."
    },
    {
      type: "example",
      title: "Eau, glace et mélanges",
      html: `<p><b>Chauffer de l'eau.</b> Pour faire passer 1 kg d'eau de 20 °C à 100 °C : Q = 1 · 4186 · 80 ≈ <b>335 kJ</b>. Pour ensuite la vaporiser entièrement, il faut encore Q = 1 · 2,26·10⁶ = 2260 kJ, près de sept fois plus.</p>
<p><b>Équilibre thermique.</b> Tu mélanges 200 g d'eau à 80 °C avec 300 g d'eau à 20 °C. La chaleur cédée par l'eau chaude est égale à celle absorbée par l'eau froide : 0,2 · c · (80 − T<sub>f</sub>) = 0,3 · c · (T<sub>f</sub> − 20), d'où T<sub>f</sub> = (0,2·80 + 0,3·20)/0,5 = 22/0,5 = <b>44 °C</b>. La valeur de c se simplifie parce qu'il s'agit du même liquide.</p>
<p><b>La transpiration.</b> L'évaporation de 1 g de sueur prend au corps environ 2,3 kJ (L·m = 2,26·10⁶ · 0,001) : c'est notre climatiseur naturel.</p>`
    },
    {
      type: "text",
      title: "Comment la chaleur se propage",
      html: `<p>La chaleur passe d'un corps à l'autre de trois façons :</p>
<ul>
<li><b>Conduction</b> : dans les solides (et un peu dans tous les corps), l'agitation des particules se transmet de choc en choc, sans que la matière se déplace. Les métaux sont d'excellents conducteurs (les électrons libres transportent l'énergie) ; le bois, le polystyrène et l'air immobile sont des isolants. Le flux de chaleur est proportionnel à la différence de température et à la section, et inversement proportionnel à l'épaisseur (loi de Fourier) ;</li>
<li><b>Convection</b> : dans les fluides (liquides et gaz), la chaleur est transportée par le mouvement même de la matière. Le fluide chaud se dilate, devient moins dense et monte ; le fluide froid descend : des courants se forment. C'est le principe des radiateurs, des brises de mer et des mouvements de l'atmosphère ;</li>
<li><b>Rayonnement</b> : la chaleur est transportée par des <b>ondes électromagnétiques</b> (surtout l'infrarouge) et n'a pas besoin de matière. C'est la seule façon dont l'énergie du Soleil nous parvient à travers le vide de l'espace. Tout corps émet un rayonnement thermique, d'autant plus intense qu'il est chaud.</li>
</ul>
<p>Une <b>bouteille isotherme</b> (thermos) exploite les trois principes : une double paroi avec du vide entre les deux (ni conduction ni convection) et des surfaces argentées qui réfléchissent le rayonnement.</p>`
    },
    {
      type: "widget",
      title: "Conduction, convection ou rayonnement ?",
      widget: "classify",
      options: { groups: ["Conduction", "Convection", "Rayonnement"], items: [
        ["Le manche d'une cuillère dans la casserole chauffe", 0],
        ["La chaleur du Soleil arrive sur la Terre", 2],
        ["L'eau d'une casserole se mélange pendant qu'elle bout", 1],
        ["La chaleur d'un feu de camp sur le visage, à distance", 2],
        ["Le radiateur chauffe l'air de la pièce", 1],
        ["Une poêle en fer qui chauffe sur la plaque de cuisson", 0]
      ] },
      caption: "Demande-toi s'il faut un contact, un mouvement de matière ou aucune matière."
    },
    {
      type: "remember",
      title: "Formules à retenir",
      html: `<p><b>T(K) = T(°C) + 273,15</b> · <b>ΔL = λ·L₀·ΔT</b> · <b>Q = m·c·ΔT</b> · <b>Q = m·L</b> (changements d'état, T constante) · à l'équilibre : <b>Σ chaleurs cédées = Σ chaleurs absorbées</b>.</p>
<p>Température = agitation moyenne des particules ; chaleur = énergie qui passe à cause d'une différence de température. Un glaçon et une baignoire d'eau tiède : la baignoire a une température plus élevée, mais aussi énormément plus d'énergie interne.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre",
      intro: "Température et chaleur sont faciles à confondre : voici trois analogies.",
      tabs: [
        { label: "💧 Les deux réservoirs", html: "<p>Imagine deux réservoirs d'eau reliés par un tuyau : l'eau s'écoule du niveau le plus haut vers le plus bas jusqu'à ce que les niveaux soient égaux. Le <b>niveau</b>, c'est la température ; la <b>quantité d'eau qui passe</b>, c'est la chaleur. Le grand réservoir a besoin de plus d'eau (de chaleur) pour changer de niveau (de température) : c'est la capacité thermique m·c. Et c'est pour cela que la mer change de température beaucoup plus lentement qu'une flaque.</p>" },
        { label: "🔬 Les molécules", html: "<p>Dans le modèle cinétique, un gaz est un ensemble de particules qui se déplacent au hasard et se heurtent. Si tu chauffes le récipient, les particules vont plus vite ; la <b>température absolue est proportionnelle à l'énergie cinétique moyenne</b> (Ec moyenne = 3/2 k_B T pour un gaz parfait). La chaleur est l'échange d'énergie qui se produit quand des particules rapides heurtent les parois d'un corps dont les particules sont lentes.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.9, y: 0.6, z: 0, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.9, y: 0.6, z: 0, r: 0.3, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2]] } },
        { label: "🧊 Le glaçon dans la tasse", html: "<p>Mets un glaçon (0 °C) dans une tasse de thé chaud. Le thé cède de la chaleur, le glaçon l'absorbe ; mais pendant un bon moment, la température de la glace ne monte pas : l'énergie sert à la <b>faire fondre</b> (chaleur latente), pas à la réchauffer. Ce n'est que lorsque toute la glace est liquide que la température commence à monter. Voilà pourquoi une boisson avec des glaçons reste fraîche plus longtemps qu'une boisson à 0 °C sans glaçons.</p>" }
      ]
    },
    {
      type: "quiz",
      title: "Vérifie : la chaleur",
      questions: [
        { type: "num", q: "Quelle quantité de chaleur faut-il pour élever de 10 K la température de 2 kg d'eau ? (c = 4186 J/(kg·K))", answer: 83720, tol: 100, unit: "J", explain: "Q = 2 · 4186 · 10 = 83 720 J." },
        { type: "mc", q: "Pourquoi la température reste-t-elle à 0 °C pendant la fusion de la glace ?", options: ["La glace n'absorbe pas de chaleur", "La chaleur sert à rompre les liaisons, pas à augmenter l'agitation", "Le thermomètre est défectueux", "La chaleur est réfléchie"], answer: 1, explain: "La chaleur latente augmente l'énergie potentielle des particules, pas leur énergie cinétique." },
        { type: "tf", q: "Le vide isole de la conduction et de la convection, mais pas du rayonnement.", answer: true, explain: "La conduction et la convection ont besoin de matière ; le rayonnement se propage aussi dans le vide." }
      ]
    },
    {
      type: "curiosity",
      title: "Pourquoi le café dans une tasse en métal brûle-t-il ?",
      html: `<p>Une tasse en céramique et une tasse en aluminium contenant le même café à 70 °C : la seconde brûle davantage les lèvres et refroidit plus vite. Le métal conduit mieux la chaleur et la transmet donc rapidement à la main ou à l'air ambiant. De même, à −10 °C, un gant en laine retient la chaleur parce que l'air emprisonné dans les fibres est un excellent isolant. Autre curiosité historique : avant Joule, on se représentait la chaleur comme un fluide invisible (le « calorique »), idée abandonnée lorsqu'on comprit qu'on pouvait produire de la chaleur sans fin par frottement, comme l'avait déjà remarqué Benjamin Thompson (comte Rumford) à la fin du XVIIIe siècle en alésant des canons.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte de la température et de la chaleur",
      nodes: [
        { id: "temp", label: "Température", x: 15, y: 12, color: "#ef4444", html: "Mesure de l'agitation thermique moyenne des particules (K, °C, °F).", why: "On la définit de façon opérationnelle avec les thermomètres ; la théorie cinétique (Maxwell, Boltzmann, seconde moitié du XIXe siècle) montra qu'elle est proportionnelle à l'énergie cinétique moyenne des molécules d'un gaz." },
        { id: "calore", label: "Chaleur", x: 50, y: 12, color: "#f59e0b", html: "Énergie qui passe d'un corps chaud à un corps froid.", why: "Dans les années 1840, Joule démontra l'équivalent mécanique de la chaleur : en dissipant du travail mécanique, on produit une quantité fixe de chaleur. La chaleur est donc un mode de transfert d'énergie, et non une substance." },
        { id: "dil", label: "Dilatation", x: 85, y: 12, color: "#2563eb", html: "ΔL = λL₀ΔT : les corps se dilatent quand on les chauffe.", why: "Dans un solide, les atomes vibrent autour de positions d'équilibre ; comme la force entre atomes n'est pas parfaitement symétrique, plus l'agitation est grande, plus la distance moyenne augmente. Pour l'eau, les liaisons hydrogène sont responsables de l'anomalie à 4 °C." },
        { id: "spec", label: "Capacité thermique massique", x: 20, y: 52, color: "#16a34a", html: "Q = m·c·ΔT : l'énergie qu'il faut pour chauffer.", why: "Black (XVIIIe siècle) distingua la quantité de chaleur et la température en observant que des masses égales de substances différentes demandent des chaleurs différentes pour s'élever de 1 degré. L'eau a un c élevé à cause de ses fortes liaisons hydrogène." },
        { id: "lat", label: "Chaleur latente", x: 52, y: 62, color: "#a855f7", html: "Q = m·L : l'énergie des changements d'état.", why: "Elle aussi fut découverte par Joseph Black (vers 1760) : quand on chauffe de la glace fondante, la température ne monte pas, la chaleur sert à changer d'état. Ce fut décisif pour la machine à vapeur de Watt." },
        { id: "prop", label: "Propagation", x: 85, y: 52, color: "#0ea5e9", html: "Conduction, convection, rayonnement.", why: "Fourier (1822) formula la loi mathématique de la conduction ; Stefan (1879) et Boltzmann (1884) celle du rayonnement du corps noir, qui ouvrit la voie à la physique quantique avec Planck (1900)." },
        { id: "eq", label: "Équilibre thermique", x: 50, y: 90, color: "#64748b", html: "Des corps en contact atteignent la même température.", why: "C'est le principe zéro de la thermodynamique : si A et B sont en équilibre avec C, ils le sont entre eux. Il est à la base même de la définition de la température et du fonctionnement des thermomètres." }
      ],
      edges: [["temp", "calore", "une différence de T fait passer la"], ["calore", "spec", "quantifiée par la"], ["calore", "lat", "dans les changements d'état"], ["temp", "dil", "provoque la"], ["calore", "prop", "se transmet par"], ["calore", "eq", "conduit à l'"]]
    }
  ],
  glossary: [
    { t: "Température", d: "Grandeur liée à l'énergie cinétique moyenne des particules d'un corps." },
    { t: "Kelvin (K)", d: "Unité SI de température ; 0 K est le zéro absolu." },
    { t: "Dilatation thermique", d: "Variation des dimensions d'un corps quand sa température varie." },
    { t: "Chaleur", d: "Énergie transférée d'un corps à température plus élevée vers un corps à température plus basse." },
    { t: "Capacité thermique massique", d: "Énergie nécessaire pour élever de 1 K la température de 1 kg de substance." },
    { t: "Chaleur latente", d: "Énergie par unité de masse nécessaire à un changement d'état à température constante." },
    { t: "Équilibre thermique", d: "Situation dans laquelle des corps en contact ont la même température." },
    { t: "Conduction, convection, rayonnement", d: "Les trois modes de propagation de la chaleur." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "À quelle température en kelvins correspond 0 °C (environ) ?", options: ["0 K", "100 K", "273 K", "373 K"], answer: 2, explain: "T(K) = T(°C) + 273,15." },
      { type: "num", q: "Convertis 50 °F en degrés Celsius.", answer: 10, tol: 0.1, unit: "°C", explain: "T(°C) = (50 − 32)/1,8 = 10 °C." },
      { type: "num", q: "Une barre d'acier (λ = 12·10⁻⁶ K⁻¹) de 10 m est chauffée de 50 K. De combien de millimètres s'allonge-t-elle ?", answer: 6, tol: 0.1, unit: "mm", explain: "ΔL = 12·10⁻⁶ · 10 · 50 = 6·10⁻³ m = 6 mm." },
      { type: "tf", q: "À la température de 4 °C, l'eau liquide a sa masse volumique maximale.", answer: true, explain: "Entre 0 et 4 °C, l'eau se contracte quand elle se réchauffe : c'est pourquoi la glace flotte et pourquoi les lacs gèlent par le haut." },
      { type: "num", q: "Quelle quantité de chaleur faut-il pour élever de 40 K la température de 500 g de cuivre (c = 385 J/(kg·K)) ?", answer: 7700, tol: 10, unit: "J", explain: "Q = 0,5 · 385 · 40 = 7700 J." },
      { type: "num", q: "Tu mélanges 1 kg d'eau à 90 °C avec 1 kg d'eau à 10 °C (sans pertes). Quelle est la température finale ?", answer: 50, tol: 0.5, unit: "°C", explain: "Masses égales et même c : moyenne des températures, 50 °C." },
      { type: "num", q: "Quelle énergie faut-il pour faire fondre 2 kg de glace déjà à 0 °C (L = 3,34·10⁵ J/kg) ?", answer: 668000, tol: 1000, unit: "J", explain: "Q = m·L = 2 · 3,34·10⁵ = 6,68·10⁵ J." },
      { type: "mc", q: "De quelle façon l'énergie du Soleil arrive-t-elle sur la Terre ?", options: ["Par conduction", "Par convection", "Par rayonnement", "Par évaporation"], answer: 2, explain: "Dans le vide de l'espace, l'énergie ne se propage que par ondes électromagnétiques." },
      { type: "tf", q: "La chaleur est une substance contenue dans les corps chauds.", answer: false, explain: "C'est de l'énergie en transit ; ce qu'un corps possède, c'est de l'énergie interne." },
      { type: "order", q: "Range par capacité thermique massique croissante.", items: ["Plomb", "Cuivre", "Aluminium", "Eau"], explain: "Plomb ≈ 130 < cuivre ≈ 385 < aluminium ≈ 900 < eau 4186 J/(kg·K)." }
    ]
  }
});
