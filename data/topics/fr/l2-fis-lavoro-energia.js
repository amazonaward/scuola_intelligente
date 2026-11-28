TOPIC('fr', {
  id: "l2-fis-lavoro-energia",
  title: "Travail et énergie",
  intro: "Dans le langage courant, « travailler » et « faire un effort » sont presque synonymes. En physique, le <b>travail</b> a une définition précise : c'est ce qu'effectue une force quand elle déplace un corps. De cette définition naît le concept le plus important et le plus unificateur de toute la physique, l'<b>énergie</b>, et avec lui une loi qui n'a jamais été démentie : l'énergie ne se crée pas et ne se détruit pas, elle se transforme. Avec ces outils, tu résoudras des problèmes qui seraient beaucoup plus laborieux avec les seules lois de la dynamique.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Le travail d'une force",
      html: `<p>Le <b>travail</b> d'une force constante F dont le point d'application se déplace d'une distance s est :</p>
<p style="text-align:center"><b>W = F · s · cos θ</b></p>
<p>où θ est l'angle entre la direction de la force et celle du déplacement. L'unité est le <b>joule</b> (J) : 1 J = 1 N · 1 m, le travail d'une force de 1 N qui déplace un corps de 1 m dans sa propre direction.</p>
<ul>
<li><b>θ = 0°</b> (force dans le sens du déplacement) : cos θ = 1, travail <b>positif</b> et maximal ; la force est <b>motrice</b>, elle « aide » le mouvement ;</li>
<li><b>θ = 90°</b> (force perpendiculaire) : cos θ = 0, <b>travail nul</b>. Une force perpendiculaire au déplacement ne travaille pas : par exemple la réaction normale sur un corps qui glisse sur un plan, ou le poids d'une valise que tu portes à l'horizontale ;</li>
<li><b>θ = 180°</b> (force opposée au déplacement) : cos θ = −1, travail <b>négatif</b> ; la force est <b>résistante</b>, elle « freine ». C'est ainsi que travaille le frottement de glissement.</li>
</ul>
<p>Le travail est une grandeur <b>scalaire</b>. Si plusieurs forces agissent, le travail total est la somme des travaux (ou le travail de la résultante). Remarque : pour effectuer un travail, il ne suffit pas d'exercer une force : si tu tiens un sac à dos immobile, tu fais un effort musculaire, mais tu n'effectues aucun travail sur le sac, car le déplacement est nul.</p>`
    },
    {
      type: "svg",
      title: "Le travail dépend de l'angle",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="wF" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="wS" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
</defs>
<g font-family="sans-serif">
<line x1="20" y1="110" x2="210" y2="110" stroke="#475569" stroke-width="2"/>
<rect x="60" y="80" width="50" height="30" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<line x1="110" y1="95" x2="190" y2="95" stroke="#dc2626" stroke-width="4" marker-end="url(#wF)"/>
<line x1="60" y1="130" x2="190" y2="130" stroke="#2563eb" stroke-width="3" marker-end="url(#wS)"/>
<text x="115" y="165" font-size="15" fill="#0f172a" text-anchor="middle">θ = 0°</text>
<text x="115" y="188" font-size="15" fill="#16a34a" text-anchor="middle" font-weight="bold">W = F·s</text>
<line x1="230" y1="110" x2="420" y2="110" stroke="#475569" stroke-width="2"/>
<rect x="270" y="80" width="50" height="30" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<line x1="295" y1="80" x2="295" y2="25" stroke="#dc2626" stroke-width="4" marker-end="url(#wF)"/>
<line x1="270" y1="130" x2="400" y2="130" stroke="#2563eb" stroke-width="3" marker-end="url(#wS)"/>
<text x="325" y="165" font-size="15" fill="#0f172a" text-anchor="middle">θ = 90°</text>
<text x="325" y="188" font-size="15" fill="#475569" text-anchor="middle" font-weight="bold">W = 0</text>
<line x1="440" y1="110" x2="630" y2="110" stroke="#475569" stroke-width="2"/>
<rect x="500" y="80" width="50" height="30" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<line x1="500" y1="95" x2="450" y2="95" stroke="#dc2626" stroke-width="4" marker-end="url(#wF)"/>
<line x1="500" y1="130" x2="620" y2="130" stroke="#2563eb" stroke-width="3" marker-end="url(#wS)"/>
<text x="535" y="165" font-size="15" fill="#0f172a" text-anchor="middle">θ = 180°</text>
<text x="535" y="188" font-size="15" fill="#dc2626" text-anchor="middle" font-weight="bold">W = −F·s</text>
<text x="320" y="250" font-size="16" fill="#0f172a" text-anchor="middle">Force en rouge, déplacement en bleu</text>
</g>
</svg>`,
      caption: "Même sens : travail positif. Perpendiculaire : nul. Sens opposé : négatif."
    },
    {
      type: "example",
      title: "Quel travail ?",
      html: `<p><b>Poussée horizontale.</b> Tu pousses un meuble avec 50 N sur 4 m, dans le sens de la force : W = 50 · 4 = <b>200 J</b>.</p>
<p><b>Tirer une valise.</b> Tu tires une valise par une poignée inclinée de 60° par rapport au sol, avec 40 N, sur 10 m : W = 40 · 10 · cos 60° = 40 · 10 · 0,5 = <b>200 J</b>. Seule la composante horizontale de la force travaille.</p>
<p><b>Soulever une charge.</b> Tu soulèves à vitesse constante une caisse de 10 kg de 2 m (g = 9,8 m/s²) : il te faut une force égale au poids, 98 N, donc W = 98 · 2 = <b>196 J</b>. Le poids, pendant le même déplacement, effectue un travail de <b>−196 J</b>.</p>`
    },
    {
      type: "text",
      title: "La puissance",
      html: `<p>Monter un escalier en courant ou tranquillement demande le même travail, mais pas la même <b>puissance</b> : la puissance mesure <b>à quelle vitesse</b> le travail est effectué.</p>
<p style="text-align:center"><b>P = W / Δt</b> &nbsp;&nbsp; (si la force est constante et parallèle à v : <b>P = F · v</b>)</p>
<p>L'unité est le <b>watt</b> (W) = 1 J/s, du nom de James Watt, qui perfectionna la machine à vapeur. Une unité encore très utilisée est le <b>cheval-vapeur</b> (ch) : 1 ch ≈ 735,5 W. L'énergie que tu paies sur ta facture d'électricité se mesure en <b>kilowattheures</b> : 1 kWh est l'énergie consommée par un appareil de 1 kW pendant une heure, soit 3,6 · 10⁶ J = 3,6 MJ.</p>
<p>Un moteur de 60 kW qui propulse une voiture à 20 m/s (72 km/h) développe une force motrice moyenne F = P/v = 60000/20 = 3000 N.</p>`
    },
    {
      type: "widget",
      title: "Le travail est-il positif, nul ou négatif ?",
      widget: "classify",
      options: { groups: ["Travail positif", "Travail nul", "Travail négatif"], items: [
        ["Tu pousses un chariot dans le sens du mouvement", 0],
        ["Tu portes un sac à dos en marchant sur du plat (travail du poids)", 1],
        ["Frottement sur une caisse qui glisse", 2],
        ["Pesanteur sur une pierre qui tombe", 0],
        ["Freins d'une voiture qui ralentit", 2],
        ["Gravitation sur un satellite en orbite circulaire", 1]
      ] },
      caption: "Regarde l'angle entre la force et le déplacement."
    },
    {
      type: "quiz",
      title: "Vérifie : travail et puissance",
      questions: [
        { type: "num", q: "Une force de 30 N déplace un corps de 5 m dans sa propre direction. Combien vaut le travail ?", answer: 150, tol: 0.1, unit: "J", explain: "W = F·s = 30 · 5 = 150 J." },
        { type: "tf", q: "Le travail de la force centripète dans un mouvement circulaire uniforme est nul.", answer: true, explain: "La force est toujours perpendiculaire au déplacement : cos 90° = 0." },
        { type: "num", q: "Un moteur effectue 6000 J en 30 s. Calcule sa puissance.", answer: 200, tol: 0.1, unit: "W", explain: "P = W/Δt = 6000/30 = 200 W." }
      ]
    },
    {
      type: "text",
      title: "L'énergie cinétique et le théorème de l'énergie cinétique",
      html: `<p>Un corps en mouvement peut effectuer un travail (un marteau qui frappe un clou, l'eau qui fait tourner une roue). Cette capacité liée au mouvement s'appelle l'<b>énergie cinétique</b> :</p>
<p style="text-align:center"><b>E<sub>c</sub> = ½ · m · v²</b></p>
<p>Elle dépend du <b>carré</b> de la vitesse : si v double, l'énergie devient 4 fois plus grande. C'est pourquoi les accidents à grande vitesse sont beaucoup plus graves (et pourquoi les distances de freinage augmentent comme le carré de v).</p>
<p><b>Théorème de l'énergie cinétique.</b> Le travail total effectué sur le corps est égal à la variation de son énergie cinétique :</p>
<p style="text-align:center"><b>W<sub>tot</sub> = ΔE<sub>c</sub> = ½ m v² − ½ m v₀²</b></p>
<p>On le déduit de la deuxième loi de Newton ; il relie directement les forces et les vitesses, sans passer par le temps. Exemple : une voiture de 1000 kg à 20 m/s a E<sub>c</sub> = ½ · 1000 · 400 = 200 000 J = 200 kJ. À 40 m/s, ce serait 800 kJ. Pour l'arrêter sur 40 m, le frottement doit effectuer −200 000 J : la force de freinage moyenne vaut 200000/40 = 5000 N.</p>`
    },
    {
      type: "text",
      title: "L'énergie potentielle",
      html: `<p>Un objet soulevé ou un ressort comprimé peuvent restituer du travail même s'ils sont immobiles : ils possèdent une <b>énergie potentielle</b>, une énergie liée à la <b>position</b> (ou à la configuration). C'est le cas pour les <b>forces conservatives</b>, celles dont le travail ne dépend pas du chemin suivi mais seulement des positions initiale et finale (poids, force élastique, gravitation, force électrique).</p>
<ul>
<li><b>Énergie potentielle de pesanteur</b> (près de la Terre) : <b>U = m · g · h</b>, où h est l'altitude par rapport à un niveau de référence choisi librement (seule la différence compte). Le travail du poids est W = −ΔU ;</li>
<li><b>Énergie potentielle élastique</b> d'un ressort de raideur k déformé de x : <b>U = ½ · k · x²</b>.</li>
</ul>
<p>Le <b>frottement</b>, en revanche, est une force <b>dissipative</b> : son travail dépend du chemin suivi (plus de chemin, plus de travail négatif) et il transforme l'énergie mécanique en énergie thermique.</p>`
    },
    {
      type: "svg",
      title: "Les montagnes russes et l'énergie",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<path d="M30 60 C 120 60 170 250 280 250 C 390 250 420 130 470 130 C 520 130 540 190 610 190" fill="none" stroke="#475569" stroke-width="4"/>
<circle cx="45" cy="60" r="11" fill="#dc2626"/>
<circle cx="280" cy="250" r="11" fill="#dc2626"/>
<circle cx="470" cy="130" r="11" fill="#dc2626"/>
<text x="60" y="40" font-size="15" fill="#0f172a">A : tout en U (v ≈ 0)</text>
<text x="215" y="285" font-size="15" fill="#0f172a">B : tout en Ec (h = 0)</text>
<text x="395" y="105" font-size="15" fill="#0f172a">C : un peu de U et de Ec</text>
<rect x="30" y="85" width="60" height="14" fill="#2563eb"/>
<rect x="30" y="103" width="2" height="14" fill="#16a34a"/>
<rect x="330" y="215" width="2" height="14" fill="#2563eb"/>
<rect x="330" y="233" width="60" height="14" fill="#16a34a"/>
<text x="95" y="97" font-size="14" fill="#2563eb">U</text>
<text x="40" y="132" font-size="14" fill="#16a34a">Ec</text>
<text x="400" y="228" font-size="14" fill="#2563eb">U</text>
<text x="395" y="246" font-size="14" fill="#16a34a">Ec</text>
</g>
</svg>`,
      caption: "En l'absence de frottement, la somme U + Ec reste constante : en haut, l'énergie est entièrement potentielle ; en bas, entièrement cinétique."
    },
    {
      type: "remember",
      title: "Conservation de l'énergie mécanique",
      html: `<p>Si <b>seules des forces conservatives</b> travaillent (ou si les autres ne travaillent pas), l'énergie mécanique <b>E = E<sub>c</sub> + U</b> se conserve : <b>½mv₁² + mgh₁ = ½mv₂² + mgh₂</b>.</p>
<p>Si des forces dissipatives agissent : <b>E<sub>finale</sub> = E<sub>initiale</sub> + W<sub>frottement</sub></b> (avec W<sub>frottement</sub> négatif) : l'énergie mécanique diminue, mais l'énergie <b>totale</b> (en comptant la chaleur produite) reste constante. C'est le <b>principe de conservation de l'énergie</b>, vérifié dans toutes les expériences réalisées jusqu'ici.</p>`
    },
    {
      type: "example",
      title: "Chute, pendule et ressort",
      html: `<p><b>Chute.</b> Une pierre tombe de 20 m sans vitesse initiale. Conservation : mgh = ½mv², donc v = √(2gh) = √(2 · 9,8 · 20) ≈ <b>19,8 m/s</b> (environ 71 km/h). La masse se simplifie : c'est vrai pour tout corps, et c'est l'idée de Galilée sous forme énergétique.</p>
<p><b>Pendule.</b> Un pendule de 1 m, lâché 20 cm au-dessus de son point le plus bas, passe par ce point avec v = √(2 · 9,8 · 0,2) ≈ 1,98 m/s. La tension du fil est toujours perpendiculaire au déplacement et ne travaille pas.</p>
<p><b>Ressort.</b> Un ressort de raideur k = 200 N/m, comprimé de 0,10 m, emmagasine U = ½ · 200 · 0,01 = 1 J. S'il pousse une bille de 20 g sur un plan lisse, il la lance à v = √(2 · 1/0,02) = <b>10 m/s</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Calories, joules et barres énergétiques",
      html: `<p>La calorie alimentaire (kcal) vaut environ 4186 J. Une barre de 200 kcal contient donc environ 837 kJ d'énergie : en théorie, de quoi soulever de 1 m une masse de plus de 85 tonnes ! Mais notre corps a un rendement d'environ 20 à 25 % et consomme de l'énergie même au repos : c'est pourquoi la fatigue est bien plus grande que le « travail utile » que nous effectuons. C'est James Prescott Joule qui, dans les années 1840, montra par ses expériences (des palettes qui agitent de l'eau) que le travail mécanique et la chaleur sont deux formes de la même grandeur, l'énergie : l'unité porte son nom.</p>`
    },
    {
      type: "curiosity",
      title: "Un barrage est une batterie d'eau",
      html: `<p>Un mètre cube d'eau (1000 kg) qui tombe d'une hauteur de 100 m libère mgh = 1000 · 9,8 · 100 ≈ 980 000 J, soit environ 0,27 kWh. Les centrales hydroélectriques transforment exactement ainsi l'énergie potentielle en énergie cinétique (l'eau dans les conduites forcées), puis en énergie électrique (dans les turbines). Certaines, appelées stations de transfert d'énergie par pompage (STEP), remontent l'eau dans le bassin supérieur aux heures de faible demande pour la réutiliser lors des pics de consommation : ce sont de véritables batteries gravitaires.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre",
      intro: "Le travail et l'énergie sont des idées abstraites : voici quelques analogies utiles.",
      tabs: [
        { label: "🏦 Le compte en banque", html: "<p>Imagine l'énergie comme un <b>compte</b> avec plusieurs « poches » : cinétique, potentielle, thermique. Le travail est un <b>virement</b> d'une poche à l'autre (ou de l'extérieur vers le système). Le principe de conservation dit que le total ne change jamais : tu peux seulement déplacer l'argent. Le frottement est un virement qui envoie l'énergie mécanique dans la poche « chaleur », d'où il est très difficile de la faire revenir.</p>" },
        { label: "🎢 Sur la piste", html: "<p>Pour résoudre un problème de mouvement le long d'une piste sans frottement, tu n'as pas besoin de connaître la forme de la piste : les altitudes suffisent. Si tu pars sans vitesse de l'altitude h₁ et que tu arrives à l'altitude h₂, ½mv² = mg(h₁ − h₂). Étonnamment, la vitesse ne dépend pas du chemin choisi (rampe douce ou toboggan raide), mais seulement du dénivelé. Le chemin ne compte que pour la <b>durée</b> du trajet.</p>" },
        { label: "📊 L'aire sous la courbe", html: "<p>Si tu représentes la force F en fonction du déplacement s, le travail est l'<b>aire sous la courbe</b>. Pour une force constante, c'est un rectangle (F · s) ; pour un ressort (F = k·x), c'est un triangle : aire = ½ · x · (k·x) = ½ k x², c'est-à-dire exactement l'énergie potentielle élastique.</p>", svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#f8fafc"/><g font-family="sans-serif"><line x1="60" y1="220" x2="540" y2="220" stroke="#475569" stroke-width="2"/><line x1="60" y1="220" x2="60" y2="30" stroke="#475569" stroke-width="2"/><polygon points="60,220 400,220 400,70" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/><line x1="60" y1="220" x2="440" y2="50" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/><text x="400" y="244" font-size="15" fill="#0f172a" text-anchor="middle">x</text><text x="535" y="240" font-size="15" fill="#0f172a">allongement</text><text x="70" y="40" font-size="15" fill="#0f172a">F = kx</text><text x="300" y="195" font-size="16" fill="#166534" font-weight="bold">aire = ½·k·x²</text></g></svg>` }
      ]
    },
    {
      type: "quiz",
      title: "Vérifie : l'énergie",
      questions: [
        { type: "num", q: "Un cycliste de 80 kg (vélo compris) roule à 10 m/s. Calcule son énergie cinétique.", answer: 4000, tol: 1, unit: "J", explain: "Ec = ½ · 80 · 100 = 4000 J." },
        { type: "mc", q: "Si la vitesse d'un corps triple, son énergie cinétique...", options: ["Triple", "Est multipliée par 6", "Est multipliée par 9", "Reste la même"], answer: 2, explain: "Ec dépend de v² : 3² = 9." },
        { type: "num", q: "Une boule de 2 kg est à 5 m du sol (g = 10 m/s²). Combien vaut son énergie potentielle par rapport au sol ?", answer: 100, tol: 0.5, unit: "J", explain: "U = m·g·h = 2 · 10 · 5 = 100 J." }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte du travail et de l'énergie",
      nodes: [
        { id: "lavoro", label: "Travail", x: 15, y: 12, color: "#2563eb", html: "W = F·s·cos θ : transfert d'énergie par l'intermédiaire d'une force.", why: "Le concept naît au XIXe siècle avec l'ingénierie des machines à vapeur : Coriolis (1829) et Poncelet introduisirent le terme « travail » pour mesurer l'effet utile produit par une machine." },
        { id: "potenza", label: "Puissance", x: 50, y: 12, color: "#f59e0b", html: "P = W/Δt : travail par unité de temps, en watts.", why: "Watt la définit en comparant ses machines au travail des chevaux de trait : d'où le cheval-vapeur. Le coût et les performances d'un moteur dépendent de sa puissance, pas seulement du travail." },
        { id: "cin", label: "Énergie cinétique", x: 85, y: 12, color: "#16a34a", html: "Ec = ½mv² : énergie du mouvement.", why: "Leibniz parlait déjà de « vis viva » (force vive) mv² ; le facteur ½ et le nom « énergie cinétique » arrivent au XIXe siècle (Coriolis, Thomson/Kelvin). On l'obtient en intégrant la deuxième loi le long du déplacement." },
        { id: "pot", label: "Énergie potentielle", x: 20, y: 50, color: "#ef4444", html: "U = mgh et U = ½kx² : énergie de position.", why: "Elle n'existe que pour les forces conservatives, c'est-à-dire dont le travail ne dépend pas du chemin suivi : la force dérive d'une énergie potentielle. Le terme fut introduit par Rankine (1853)." },
        { id: "teo", label: "Théorème de l'énergie cinétique", x: 78, y: 50, color: "#a855f7", html: "W_tot = ΔEc.", why: "On le démontre à partir de la deuxième loi de Newton : F·s = m·a·s = ½mv² − ½mv₀². C'est une façon équivalente d'écrire F = ma, utile quand on connaît les déplacements et non les durées." },
        { id: "cons", label: "Conservation de l'énergie", x: 50, y: 88, color: "#0ea5e9", html: "Dans un système isolé, l'énergie totale est constante.", why: "Elle fut établie au milieu du XIXe siècle par Mayer, Joule, Helmholtz et d'autres, en étudiant la chaleur, le travail, l'électricité et le vivant. Avec l'expérience de Joule (1845) sur l'équivalent mécanique de la chaleur, l'énergie devint le concept unificateur de la physique." }
      ],
      edges: [["lavoro", "potenza", "rapporté au temps donne la"], ["lavoro", "cin", "de la résultante : = ΔEc"], ["lavoro", "pot", "forces conservatives : = −ΔU"], ["cin", "cons", "s'ajoute à U dans la"], ["pot", "cons", "s'ajoute à Ec dans la"], ["teo", "cons", "conduit à la"]]
    }
  ],
  glossary: [
    { t: "Travail", d: "Grandeur scalaire W = F·s·cos θ, mesurée en joules." },
    { t: "Joule (J)", d: "Unité d'énergie et de travail : 1 J = 1 N·m." },
    { t: "Puissance", d: "Travail effectué par unité de temps : P = W/Δt, en watts." },
    { t: "Énergie cinétique", d: "Énergie due au mouvement : Ec = ½mv²." },
    { t: "Énergie potentielle", d: "Énergie liée à la position (de pesanteur, mgh) ou à la déformation (élastique, ½kx²)." },
    { t: "Force conservative", d: "Force dont le travail ne dépend pas du chemin suivi, mais seulement des points de départ et d'arrivée." },
    { t: "Force dissipative", d: "Force, comme le frottement, qui transforme l'énergie mécanique en chaleur." },
    { t: "Énergie mécanique", d: "Somme de l'énergie cinétique et de l'énergie potentielle." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quand le travail d'une force est-il nul ?", options: ["Quand F est perpendiculaire au déplacement", "Quand la force est petite", "Quand le corps se déplace rapidement", "Jamais"], answer: 0, explain: "W = F·s·cos θ s'annule pour θ = 90°, ou si s = 0 ou F = 0." },
      { type: "num", q: "Une force de 20 N inclinée de 60° par rapport au déplacement agit sur 10 m. Calcule le travail.", answer: 100, tol: 0.5, unit: "J", explain: "W = 20 · 10 · cos 60° = 200 · 0,5 = 100 J." },
      { type: "num", q: "Une grue soulève 500 kg à 10 m de hauteur en 20 s (g = 10 m/s²). Combien vaut la puissance minimale ?", answer: 2500, tol: 5, unit: "W", explain: "W = mgh = 500 · 10 · 10 = 50 000 J ; P = 50 000/20 = 2500 W." },
      { type: "num", q: "Conversion : combien de joules y a-t-il dans 2 kWh ?", answer: 7200000, tol: 1000, unit: "J", explain: "1 kWh = 3,6 · 10⁶ J, donc 2 kWh = 7,2 · 10⁶ J." },
      { type: "tf", q: "Si la vitesse d'une voiture double, son énergie cinétique double.", answer: false, explain: "Ec ∝ v² : si v double, Ec est multipliée par quatre." },
      { type: "num", q: "Un corps de 4 kg passe de 2 m/s à 6 m/s. Calcule le travail total effectué sur le corps.", answer: 64, tol: 0.5, unit: "J", explain: "W = ½·4·(36 − 4) = 2 · 32 = 64 J." },
      { type: "num", q: "Une balle est lâchée de 5 m de haut (g = 10 m/s², sans frottement). À quelle vitesse arrive-t-elle au sol ?", answer: 10, tol: 0.1, unit: "m/s", explain: "v = √(2gh) = √(100) = 10 m/s." },
      { type: "mc", q: "Qu'arrive-t-il à l'énergie mécanique d'un corps qui glisse avec frottement ?", options: ["Elle reste constante", "Elle augmente", "Elle diminue en se transformant en chaleur", "Elle disparaît dans le néant"], answer: 2, explain: "Le frottement effectue un travail négatif : l'énergie mécanique est transformée en énergie thermique ; l'énergie totale se conserve." },
      { type: "tf", q: "L'énergie potentielle de pesanteur dépend du choix du niveau de référence, mais pas ses variations.", answer: true, explain: "Seules les différences comptent : ΔU = mgΔh ne dépend pas du zéro choisi." },
      { type: "order", q: "Range de l'énergie la plus faible à la plus grande (même corps de 1 kg).", items: ["Immobile au sol", "Immobile à 1 m de hauteur (g = 10)", "Immobile à 5 m de hauteur", "En mouvement à 12 m/s au sol"], explain: "Immobile au sol : 0 J ; à 1 m : mgh = 10 J ; à 5 m : 50 J ; en mouvement à 12 m/s : ½·1·144 = 72 J." }
    ]
  }
});
