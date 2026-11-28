TOPIC('fr', {
  id: "l2-fis-principi-dinamica",
  title: "Les lois de Newton",
  intro: "Pourquoi un ballon finit-il par s'arrêter de rouler ? Pourquoi es-tu plaqué contre le siège quand la voiture démarre ? Pendant près de deux mille ans, à la suite d'Aristote, on a pensé qu'un corps ne bouge que si quelque chose le pousse en permanence. Galilée puis <b>Isaac Newton</b> ont renversé cette idée, et les trois lois de la dynamique (publiées dans les <i>Philosophiae Naturalis Principia Mathematica</i>, 1687) sont toujours la base de la mécanique avec laquelle nous concevons des ponts, des voitures et des sondes spatiales.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Première loi : l'inertie",
      html: `<p>Dans la physique d'Aristote, l'état « naturel » des corps sur Terre était le repos. Galilée, grâce à des expériences sur des plans inclinés et à une célèbre expérience de pensée, comprit que ce sont les <b>frottements</b> qui arrêtent les corps, et non leur nature. Si une bille descend un plan incliné puis remonte sur un second plan, elle arrive presque à la même hauteur ; si l'on diminue l'inclinaison du second plan, elle doit parcourir un chemin de plus en plus long ; sur un plan horizontal parfaitement lisse, elle ne s'arrêterait jamais.</p>
<p><b>Première loi (principe d'inertie).</b> Un corps soumis à aucune force, ou soumis à des forces dont la <b>résultante est nulle</b>, conserve son état de repos ou de mouvement rectiligne uniforme.</p>
<p>La tendance à conserver son état de mouvement s'appelle l'<b>inertie</b>, et elle se mesure par la <b>masse inerte</b> : plus de masse signifie plus de difficulté à changer de vitesse. Quand la voiture freine brusquement, ton corps « continue » vers l'avant : ce n'est pas une force qui te pousse, c'est l'absence de force sur ton corps, jusqu'à ce que la ceinture intervienne.</p>
<p>Cette loi est valable dans les <b>référentiels galiléens</b> (ou inertiels) : ceux dans lesquels la loi elle-même est vérifiée (un train à vitesse constante en est un, une voiture qui freine ou prend un virage, non).</p>`
    },
    {
      type: "example",
      title: "Le verre et la nappe",
      html: `<p>Si tu tires d'un coup sec une nappe placée sous un verre, le verre reste (presque) immobile : la force de frottement agit pendant un temps très court et n'arrive pas à modifier sensiblement sa vitesse. Plus le verre est massif, mieux le tour fonctionne.</p>
<p>Sur la glace d'une patinoire, tu ressens nettement l'inertie : après une poussée, tu continues à glisser longtemps, parce que les frottements sont faibles. Dans l'espace, loin des étoiles et des planètes, une sonde aux moteurs éteints continue à avancer à vitesse constante pendant des millions d'années : la sonde Voyager 1, lancée en 1977, en est un exemple.</p>`
    },
    {
      type: "text",
      title: "Deuxième loi : F = m · a",
      html: `<p>Si la résultante des forces n'est pas nulle, la vitesse change. <b>Deuxième loi.</b> L'accélération d'un corps est <b>proportionnelle à la force résultante</b> et <b>inversement proportionnelle à sa masse</b> ; elle a la même direction et le même sens que la force :</p>
<p style="text-align:center"><b>F⃗<sub>rés</sub> = m · a⃗</b></p>
<p>L'unité de force est le <b>newton</b> : 1 N = 1 kg · m/s², la force qui communique à 1 kg une accélération de 1 m/s². Quelques points à retenir :</p>
<ul>
<li>ce qui compte, c'est la <b>résultante</b> (somme vectorielle) de toutes les forces qui agissent sur le corps ;</li>
<li>pour une même force, un corps plus massif accélère moins ;</li>
<li>le <b>poids</b> P = m·g est un cas particulier : un corps en chute libre a une accélération g parce que la seule force est son poids (F = m·g = m·a, donc a = g pour tous les corps : la masse se simplifie) ;</li>
<li>si a = 0, on retrouve la première loi (équilibre) : la première loi est donc un cas particulier de la deuxième, mais historiquement et logiquement elle définit les référentiels galiléens dans lesquels la deuxième est valable.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Plus de force, plus de masse",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="dF" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="dA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#16a34a"/></marker>
</defs>
<g font-family="sans-serif">
<line x1="20" y1="120" x2="620" y2="120" stroke="#475569" stroke-width="3"/>
<rect x="80" y="70" width="60" height="50" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<text x="110" y="100" font-size="15" fill="#0f172a" text-anchor="middle">m</text>
<line x1="140" y1="95" x2="200" y2="95" stroke="#dc2626" stroke-width="4" marker-end="url(#dF)"/>
<text x="150" y="60" font-size="15" fill="#dc2626" font-weight="bold">F</text>
<line x1="80" y1="140" x2="170" y2="140" stroke="#16a34a" stroke-width="4" marker-end="url(#dA)"/>
<text x="95" y="162" font-size="15" fill="#16a34a" font-weight="bold">a = F/m</text>
<line x1="20" y1="260" x2="620" y2="260" stroke="#475569" stroke-width="3"/>
<rect x="80" y="190" width="120" height="70" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<text x="140" y="232" font-size="15" fill="#0f172a" text-anchor="middle">2m</text>
<line x1="200" y1="225" x2="260" y2="225" stroke="#dc2626" stroke-width="4" marker-end="url(#dF)"/>
<text x="215" y="212" font-size="15" fill="#dc2626" font-weight="bold">F</text>
<line x1="80" y1="280" x2="125" y2="280" stroke="#16a34a" stroke-width="4" marker-end="url(#dA)"/>
<text x="135" y="285" font-size="15" fill="#16a34a" font-weight="bold">a/2</text>
<text x="330" y="100" font-size="16" fill="#0f172a">Même force, masse double :</text>
<text x="330" y="124" font-size="16" fill="#0f172a">accélération divisée par deux</text>
</g>
</svg>`,
      caption: "L'accélération est proportionnelle à la force et inversement proportionnelle à la masse."
    },
    {
      type: "example",
      title: "Voiture, ascenseur et plan incliné",
      html: `<p><b>Voiture.</b> Une voiture de 1500 kg accélère sous l'effet d'une force motrice nette de 3000 N : a = 3000/1500 = <b>2 m/s²</b>. En 5 s, sa vitesse passe de 0 à 10 m/s.</p>
<p><b>Ascenseur.</b> Une personne de 70 kg se tient sur un pèse-personne dans un ascenseur (g = 9,8 m/s²). À l'arrêt, le pèse-personne indique 70 · 9,8 = 686 N (≈ 70 kg). Si l'ascenseur <b>accélère vers le haut</b> à 2 m/s² : N − mg = ma, N = 70 · (9,8 + 2) = <b>826 N</b> (tu te sens plus lourd). S'il accélère vers le bas à 2 m/s² : N = 70 · (9,8 − 2) = <b>546 N</b> (tu te sens plus léger). Si le câble casse (chute libre, a = g), N = 0 : impesanteur apparente.</p>
<p><b>Plan incliné lisse.</b> Sur un plan incliné de 30° sans frottement, l'accélération le long du plan vaut g · sin 30° = 9,8 · 0,5 = <b>4,9 m/s²</b>, indépendamment de la masse.</p>`
    },
    {
      type: "quiz",
      title: "Vérifie : première et deuxième loi",
      questions: [
        { type: "mc", q: "Un corps se déplace à vitesse constante sur une droite. Que peut-on dire de la résultante des forces ?", options: ["Elle est dirigée dans le sens du mouvement", "Elle est nulle", "Elle est égale au poids", "Elle est constante mais non nulle"], answer: 1, explain: "Vitesse constante signifie accélération nulle, donc résultante nulle (première loi)." },
        { type: "num", q: "Quelle force résultante faut-il pour communiquer une accélération de 3 m/s² à un chariot de 20 kg ?", answer: 60, tol: 0.1, unit: "N", explain: "F = m·a = 20 · 3 = 60 N." },
        { type: "tf", q: "Une masse double, soumise à la même force, a une accélération double.", answer: false, explain: "a = F/m : avec une masse double, l'accélération est divisée par deux." }
      ]
    },
    {
      type: "text",
      title: "Troisième loi : action et réaction",
      html: `<p><b>Troisième loi.</b> Si un corps A exerce une force sur un corps B, alors B exerce sur A une force de <b>même valeur, même direction et sens opposé</b> : F⃗<sub>AB</sub> = −F⃗<sub>BA</sub>.</p>
<p>Deux précisions importantes, souvent source d'erreurs :</p>
<ul>
<li>les deux forces s'appliquent à des <b>corps différents</b> : c'est pourquoi elles ne s'annulent pas entre elles (elles ne s'annuleraient que si elles agissaient sur le même corps) ;</li>
<li>il n'y a pas « d'abord l'action, puis la réaction » : elles naissent ensemble et sont de <b>même nature</b> (deux forces gravitationnelles, deux forces de contact, etc.).</li>
</ul>
<p>Si tu pousses un mur avec 100 N, le mur te pousse avec 100 N. Quand tu marches, tu pousses le sol vers l'arrière avec ton pied et le sol te pousse vers l'avant : c'est cette réaction (frottement statique) qui te fait avancer. Une fusée pousse les gaz vers le bas et les gaz poussent la fusée vers le haut, même dans le vide où il n'y a rien sur quoi « s'appuyer ».</p>
<p>Les forces d'un couple action-réaction ont la même valeur même si les corps ont des masses différentes ; mais les accélérations sont différentes : a = F/m. Quand la Terre attire une pomme avec 1 N, la pomme attire elle aussi la Terre avec 1 N, mais l'accélération de la Terre est infime.</p>`
    },
    {
      type: "svg",
      title: "Couples de forces : un livre sur la table",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="tP" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="tN" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
</defs>
<g font-family="sans-serif">
<rect x="200" y="140" width="140" height="50" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="270" y="170" font-size="16" fill="#0f172a" text-anchor="middle">Livre</text>
<rect x="120" y="190" width="300" height="30" fill="#d6d3d1" stroke="#57534e" stroke-width="3"/>
<text x="270" y="210" font-size="16" fill="#0f172a" text-anchor="middle">Table</text>
<line x1="270" y1="165" x2="270" y2="235" stroke="#dc2626" stroke-width="4" marker-end="url(#tP)"/>
<text x="285" y="245" font-size="15" fill="#dc2626" font-weight="bold">Poids P (Terre→livre)</text>
<line x1="240" y1="140" x2="240" y2="70" stroke="#2563eb" stroke-width="4" marker-end="url(#tN)"/>
<text x="130" y="60" font-size="15" fill="#2563eb" font-weight="bold">N (table→livre)</text>
<text x="450" y="150" font-size="15" fill="#0f172a">Le livre est immobile : P et N</text>
<text x="450" y="172" font-size="15" fill="#0f172a">se compensent, mais ce NE sont</text>
<text x="450" y="194" font-size="15" fill="#0f172a">PAS action et réaction.</text>
<text x="450" y="226" font-size="15" fill="#0f172a">La réaction de N est la poussée</text>
<text x="450" y="248" font-size="15" fill="#0f172a">du livre sur la table.</text>
</g>
</svg>`,
      caption: "Le poids et la réaction normale agissent sur le même corps et se compensent : ils ne forment pas un couple action-réaction."
    },
    {
      type: "curiosity",
      title: "Pourquoi un cheval arrive-t-il à tirer une charrette ?",
      html: `<p>Un paradoxe classique : « Si la charrette tire le cheval vers l'arrière avec la même force que celle avec laquelle le cheval tire la charrette, comment peuvent-ils avancer ? ». La solution, c'est que les deux forces agissent sur des corps différents. La charrette accélère parce que la force du cheval sur elle dépasse les frottements ; le cheval avance parce qu'il pousse sur le sol avec ses sabots et que le sol (réaction) le pousse vers l'avant plus fort que la charrette ne le retient. Pour comprendre le mouvement, il faut considérer <b>toutes les forces qui s'exercent sur chaque corps</b>.</p>`
    },
    {
      type: "remember",
      title: "Les trois lois en une ligne",
      html: `<p><b>1re</b> : si la résultante est nulle, le mouvement ne change pas (inertie). <b>2e</b> : F = m·a (la résultante produit l'accélération). <b>3e</b> : chaque force a sa réaction, égale et opposée, <b>sur un autre corps</b>.</p>
<p>Méthode pour les exercices : 1) dessine le corps et <b>toutes les forces qui s'exercent sur lui</b> ; 2) choisis un axe et écris que la somme des composantes est égale à m·a ; 3) résous pour trouver l'inconnue ; 4) vérifie les unités et l'ordre de grandeur.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre",
      intro: "Toute la deuxième loi tient là-dedans : force, masse et accélération. Regarde-la avec d'autres images.",
      tabs: [
        { label: "🛒 Le chariot de supermarché", html: "<p>Pousser un chariot vide est facile : peu de masse, grande accélération. Avec le chariot plein, la même poussée le fait démarrer beaucoup plus lentement (a = F/m). Si deux personnes poussent ensemble dans le même sens, la force double et l'accélération double aussi ; si elles poussent en sens opposés avec la même force, le chariot ne bouge pas (résultante nulle). Chaque fois que tu « sens » qu'il faut pousser plus fort pour mettre en mouvement quelque chose de plus lourd, tu retrouves F = m·a.</p>" },
        { label: "📈 Le graphique", html: "<p>Si, au laboratoire, tu mesures l'accélération d'un chariot en faisant varier la force (masse constante), les points s'alignent sur une <b>droite passant par l'origine</b> : a ∝ F. Si tu gardes la force fixe et que tu changes la masse, le graphique a–m est une <b>hyperbole</b> : a ∝ 1/m. Le coefficient directeur de la droite a–F vaut 1/m.</p>", svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#f8fafc"/><g font-family="sans-serif"><line x1="60" y1="220" x2="320" y2="220" stroke="#475569" stroke-width="2"/><line x1="60" y1="220" x2="60" y2="30" stroke="#475569" stroke-width="2"/><line x1="60" y1="220" x2="290" y2="60" stroke="#16a34a" stroke-width="4"/><text x="300" y="236" font-size="15" fill="#0f172a">F</text><text x="40" y="40" font-size="15" fill="#0f172a">a</text><text x="190" y="248" font-size="15" fill="#16a34a" font-weight="bold">a ∝ F</text><line x1="360" y1="220" x2="580" y2="220" stroke="#475569" stroke-width="2"/><line x1="360" y1="220" x2="360" y2="30" stroke="#475569" stroke-width="2"/><path d="M375 40 Q 400 190 560 212" fill="none" stroke="#dc2626" stroke-width="4"/><text x="570" y="240" font-size="15" fill="#0f172a">m</text><text x="340" y="40" font-size="15" fill="#0f172a">a</text><text x="470" y="248" font-size="15" fill="#dc2626" font-weight="bold">a ∝ 1/m</text></g></svg>` },
        { label: "🚀 Dans l'espace", html: "<p>Un astronaute hors de la station spatiale qui lance un marteau dans une direction part dans la direction opposée : troisième loi. Si le marteau a une masse de 2 kg et l'astronaute avec sa combinaison 100 kg, les deux forces étant égales, l'accélération de l'astronaute est 50 fois plus petite que celle du marteau (a = F/m). La quantité de mouvement totale se conserve : m₁v₁ + m₂v₂ = 0, donc v_astronaute = −(2/100)·v_marteau. Il n'y a besoin ni d'air ni de sol.</p>" }
      ]
    },
    {
      type: "quiz",
      title: "Vérifie : action et réaction",
      questions: [
        { type: "mc", q: "Quelle est la réaction au poids que la Terre exerce sur une pomme ?", options: ["La poussée de la table sur la pomme", "La force avec laquelle la pomme attire la Terre", "Le frottement de l'air", "Elle n'existe pas"], answer: 1, explain: "Troisième loi : si la Terre attire la pomme avec P, la pomme attire la Terre avec une force égale et opposée." },
        { type: "tf", q: "Les forces d'action et de réaction s'annulent parce qu'elles sont égales et opposées.", answer: false, explain: "Elles s'appliquent à des corps différents, on ne peut donc pas les additionner pour obtenir la résultante sur un seul corps." },
        { type: "num", q: "Une personne de 50 kg se trouve dans un ascenseur qui accélère vers le haut à 1 m/s² (g = 10 m/s²) : combien vaut la réaction normale du plancher ?", answer: 550, tol: 1, unit: "N", explain: "N − mg = ma → N = m(g + a) = 50 · 11 = 550 N." }
      ]
    },
    {
      type: "curiosity",
      title: "Newton en 1687",
      html: `<p>Les <i>Principia</i> furent publiés en 1687, grâce notamment aux encouragements et au financement d'Edmond Halley. Newton ne se contenta pas d'énoncer les trois lois : il les utilisa, avec la loi de la gravitation universelle, pour expliquer les orbites des planètes, les marées et la trajectoire des comètes. C'était la première fois que la même physique expliquait la chute d'une pomme et le mouvement de la Lune. Aujourd'hui, nous savons que ces lois sont valables avec une excellente approximation pour des vitesses très inférieures à celle de la lumière et pour des objets non microscopiques : au-delà de ces limites, il faut la relativité d'Einstein (1905, 1915) et la mécanique quantique.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte de la dynamique",
      nodes: [
        { id: "inerzia", label: "1re loi : inertie", x: 18, y: 12, color: "#16a34a", html: "Sans force résultante : repos ou mouvement rectiligne uniforme.", why: "Galilée comprit que ce sont les frottements, et non la nature des corps, qui freinent les mouvements ; Descartes puis Newton en donnèrent la formulation générale. Cela renversa la physique d'Aristote, selon laquelle il fallait une cause pour entretenir un mouvement." },
        { id: "fma", label: "2e loi : F = m·a", x: 50, y: 40, color: "#ef4444", html: "La résultante des forces détermine l'accélération.", why: "Newton définit la force comme la cause de la variation de la quantité de mouvement (p = m·v) : F = Δp/Δt. D'où F = ma quand la masse est constante. Elle fournit une méthode quantitative pour prévoir tout mouvement." },
        { id: "azione", label: "3e loi : action-réaction", x: 82, y: 12, color: "#2563eb", html: "Les forces apparaissent par paires, sur des corps différents.", why: "Elle naît de l'observation des chocs (Wren, Huygens, Wallis) : la quantité de mouvement totale se conserve. Newton la généralisa à toute interaction : c'est l'origine de la conservation de la quantité de mouvement." },
        { id: "massa", label: "Masse inerte", x: 20, y: 72, color: "#f59e0b", html: "Elle mesure la résistance d'un corps à la variation de sa vitesse.", why: "Le fait que la masse inerte (dans F = ma) coïncide avec la masse grave (dans le poids) explique pourquoi tous les corps tombent avec le même g : c'est le principe d'équivalence, qui deviendra la base de la relativité générale d'Einstein." },
        { id: "peso", label: "Poids et chute libre", x: 52, y: 85, color: "#0ea5e9", html: "P = m·g : tous les corps tombent avec l'accélération g.", why: "Galilée montra que, si l'on néglige la résistance de l'air, la chute ne dépend pas de la masse. En 1971, l'astronaute David Scott le montra sur la Lune en lâchant ensemble un marteau et une plume." },
        { id: "conserv", label: "Conservation de la quantité de mouvement", x: 85, y: 62, color: "#a855f7", html: "Dans un système isolé, la quantité de mouvement totale ne change pas.", why: "Conséquence directe de la troisième loi : les variations de quantité de mouvement des deux corps sont égales et opposées, et la somme reste constante. Elle reste valable même là où la mécanique newtonienne ne l'est plus." }
      ],
      edges: [["inerzia", "fma", "est le cas a = 0 de la"], ["fma", "massa", "définit la"], ["fma", "peso", "explique"], ["azione", "conserv", "implique la"], ["fma", "azione", "se complète avec la"], ["massa", "peso", "égale à la masse grave (équivalence)"]]
    }
  ],
  glossary: [
    { t: "Inertie", d: "Tendance d'un corps à conserver son état de repos ou de mouvement rectiligne uniforme." },
    { t: "Masse inerte", d: "Mesure de la résistance d'un corps à la variation de sa vitesse." },
    { t: "Résultante", d: "Somme vectorielle de toutes les forces qui agissent sur un corps." },
    { t: "Newton (N)", d: "Force qui communique à un corps de 1 kg une accélération de 1 m/s²." },
    { t: "Référentiel galiléen", d: "Référentiel dans lequel les lois de la dynamique sont valables sous leur forme habituelle (aussi appelé référentiel inertiel)." },
    { t: "Réaction d'un support", d: "Force exercée par une surface ou une liaison sur un corps, par exemple la réaction normale." },
    { t: "Chute libre", d: "Mouvement sous l'effet du seul poids : accélération g pour tous les corps." },
    { t: "Quantité de mouvement", d: "Produit de la masse par la vitesse : p = m·v." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qui a formulé le premier l'idée qu'un corps soumis à aucune force conserve un mouvement rectiligne uniforme, renversant la physique d'Aristote ?", options: ["Galilée", "Ptolémée", "Archimède", "Kepler"], answer: 0, explain: "Galilée, par ses expériences et ses raisonnements sur le mouvement, prépara le principe d'inertie formulé ensuite par Newton." },
      { type: "tf", q: "Un corps en mouvement à vitesse constante doit être soumis à une force résultante dirigée dans le sens du mouvement.", answer: false, explain: "C'est justement l'idée d'Aristote démentie par la première loi : à vitesse constante, la résultante est nulle." },
      { type: "num", q: "Une force résultante de 120 N agit sur un corps de 30 kg. Calcule l'accélération.", answer: 4, tol: 0.05, unit: "m/s²", explain: "a = F/m = 120/30 = 4 m/s²." },
      { type: "num", q: "Une voiture de 1000 kg passe de 0 à 20 m/s en 8 s avec une accélération constante. Combien vaut la force résultante ?", answer: 2500, tol: 5, unit: "N", explain: "a = 20/8 = 2,5 m/s² ; F = 1000 · 2,5 = 2500 N." },
      { type: "mc", q: "Qu'arrive-t-il à la réaction normale sur une personne dans un ascenseur qui ralentit pendant la montée (accélération vers le bas) ?", options: ["Elle augmente", "Elle diminue", "Elle reste égale à mg", "Elle devient toujours nulle"], answer: 1, explain: "Si a est dirigée vers le bas, N = m(g − a) < mg : tu te sens plus léger." },
      { type: "mc", q: "Une balle de tennis frappe une raquette. Quelle relation y a-t-il entre les forces de contact ?", options: ["Celle sur la raquette est plus grande", "Celle sur la balle est plus grande", "Elles sont de même valeur et opposées", "Cela dépend de la vitesse de la balle"], answer: 2, explain: "Troisième loi : les forces sont toujours égales et opposées, même si leurs effets (les accélérations) sont différents." },
      { type: "tf", q: "Le poids et la réaction normale d'un livre posé immobile sur une table forment un couple action-réaction.", answer: false, explain: "Ils agissent sur le même corps. La réaction au poids est la force avec laquelle le livre attire la Terre." },
      { type: "num", q: "Un bloc glisse sur un plan incliné lisse de 30° (g = 10 m/s²). Calcule l'accélération le long du plan.", answer: 5, tol: 0.1, unit: "m/s²", explain: "a = g · sin 30° = 10 · 0,5 = 5 m/s²." },
      { type: "text", q: "Comment s'appelle l'unité de force dans le Système international ?", answer: ["newton", "le newton", "n"], explain: "Le newton : 1 N = 1 kg·m/s²." },
      { type: "order", q: "Range dans l'ordre chronologique.", items: ["Galilée étudie le mouvement sur des plans inclinés", "Newton publie les Principia (1687)", "Einstein formule la relativité restreinte (1905)", "Premiers pas sur la Lune (1969)"], explain: "Galilée (début du XVIIe siècle) → Newton (1687) → Einstein (1905) → Apollo 11 (1969)." }
    ]
  }
});
