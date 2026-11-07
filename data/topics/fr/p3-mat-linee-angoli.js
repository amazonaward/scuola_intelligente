TOPIC('fr', {
  id: "p3-mat-linee-angoli",
  title: "Lignes et angles",
  intro: "Regarde autour de toi : les rails du train 🚆, les coins du bureau, les aiguilles de l'horloge 🕒… tout est fait de <b>lignes</b> et d'<b>angles</b> ! Apprenons à reconnaître les droites, les demi-droites et les segments, et à donner un nom aux angles.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Beaucoup de types de lignes",
      html: `<p>Une <b>ligne</b> est la trace que laisse la pointe du crayon quand elle se déplace sur la feuille. Il y a des lignes :</p>
<ul>
<li><b>courbes</b> 〰️ : elles changent de direction doucement, comme une vague ;</li>
<li><b>droites</b> ➖ : elles vont toujours tout droit dans la même direction ;</li>
<li><b>brisées</b> ⚡ : faites de morceaux droits qui changent de direction d'un coup ;</li>
<li><b>mixtes</b> : un peu courbes et un peu droites.</li>
</ul>
<p>Une ligne peut être <b>ouverte</b> (les extrémités ne se touchent pas) ou <b>fermée</b> (elle finit là où elle a commencé, comme le bord d'un cercle ⭕). Une ligne fermée partage la feuille en une <b>région intérieure</b> et une <b>région extérieure</b>.</p>`
    },
    {
      type: "text",
      title: "Droite, demi-droite et segment",
      html: `<p>Les lignes droites ont trois « cousins » importants :</p>
<ul>
<li><b>Droite</b> ↔️ : elle n'a ni début ni fin, elle continue <b>à l'infini</b> dans les deux directions. Sur la feuille, on n'en dessine qu'un morceau.</li>
<li><b>Demi-droite</b> •→ : elle a un <b>point de départ</b> (l'<b>origine</b>) puis continue à l'infini d'un seul côté, comme le rayon d'une lampe de poche 🔦.</li>
<li><b>Segment</b> •—• : il a un <b>début</b> et une <b>fin</b> (deux <b>extrémités</b>). C'est le seul que l'on peut <b>mesurer</b> avec la règle ! 📏</li>
</ul>
<p>Les points s'indiquent avec des <b>lettres majuscules</b> : le segment de A à B s'appelle <b>[AB]</b>.</p>`
    },
    {
      type: "svg",
      title: "Droite, demi-droite, segment",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="fr" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#2563eb"/></marker><marker id="fl" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto-start-reverse"><path d="M0 0 L12 6 L0 12 z" fill="#2563eb"/></marker><marker id="fg" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#16a34a"/></marker></defs>
<line x1="60" y1="60" x2="540" y2="60" stroke="#2563eb" stroke-width="5" marker-start="url(#fl)" marker-end="url(#fr)"/>
<text x="300" y="95" font-size="22" fill="#1d4ed8" text-anchor="middle" font-weight="bold">DROITE : sans début ni fin</text>
<line x1="80" y1="150" x2="540" y2="150" stroke="#16a34a" stroke-width="5" marker-end="url(#fg)"/>
<circle cx="80" cy="150" r="9" fill="#16a34a"/>
<text x="70" y="135" font-size="20" fill="#166534" font-weight="bold">O</text>
<text x="300" y="185" font-size="22" fill="#166534" text-anchor="middle" font-weight="bold">DEMI-DROITE : une origine, puis à l'infini</text>
<line x1="150" y1="240" x2="450" y2="240" stroke="#dc2626" stroke-width="5"/>
<circle cx="150" cy="240" r="9" fill="#dc2626"/><circle cx="450" cy="240" r="9" fill="#dc2626"/>
<text x="140" y="225" font-size="20" fill="#991b1b" font-weight="bold">A</text>
<text x="445" y="225" font-size="20" fill="#991b1b" font-weight="bold">B</text>
<text x="300" y="280" font-size="22" fill="#991b1b" text-anchor="middle" font-weight="bold">SEGMENT [AB] : deux extrémités, on le mesure</text>
</svg>`,
      caption: "Les flèches indiquent que la ligne continue à l'infini ; les points marquent l'endroit où elle commence ou finit."
    },
    {
      type: "text",
      title: "Comment sont les droites : position",
      html: `<p>Par rapport à la feuille (ou au sol), une droite peut être :</p>
<ul>
<li><b>horizontale</b> ➖ comme l'horizon de la mer ;</li>
<li><b>verticale</b> | comme un fil à plomb ou un poteau électrique ;</li>
<li><b>oblique</b> ⟋ c'est-à-dire inclinée, comme un toboggan 🛝.</li>
</ul>
<p>Deux droites, l'une par rapport à l'autre, peuvent être :</p>
<ul>
<li><b>parallèles</b> ⏸ : elles ne se rencontrent jamais, elles restent toujours à la même distance, comme les <b>rails</b> ;</li>
<li><b>sécantes</b> ✖️ : elles se rencontrent en un point ;</li>
<li><b>perpendiculaires</b> ➕ : elles sont sécantes et forment <b>4 angles droits</b>, comme les lignes d'un cahier à carreaux.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Cherche les droites parallèles et perpendiculaires dans un cube",
      scene: "solid",
      options: { shape: "cube", color: "#60a5fa", labels: true },
      caption: "Tourne le cube : les arêtes qui sont « côte à côte » sans se toucher sont parallèles ; celles qui se rencontrent en un sommet forment des angles droits, c'est-à-dire qu'elles sont perpendiculaires."
    },
    {
      type: "quiz",
      title: "Mini-quiz : les lignes",
      questions: [
        { type: "mc", q: "Quelle ligne a deux extrémités et peut se mesurer ?", options: ["La droite", "La demi-droite", "Le segment"], answer: 2, explain: "Le segment a un début et une fin : on peut le mesurer avec la règle." },
        { type: "mc", q: "Les rails du train sont…", options: ["parallèles", "perpendiculaires", "sécants"], answer: 0, explain: "Ils ne se rencontrent jamais et restent à la même distance : parallèles." },
        { type: "tf", q: "Une droite a un point de départ appelé origine.", answer: false, explain: "La droite n'a ni début ni fin. C'est la demi-droite qui a une origine." }
      ]
    },
    {
      type: "text",
      title: "Qu'est-ce qu'un angle ?",
      html: `<p>Si, d'un même point, partent <b>deux demi-droites</b>, elles partagent la feuille en deux parties. Chacune de ces parties est un <b>angle</b>.</p>
<ul>
<li>le point d'où elles partent s'appelle le <b>sommet</b> ;</li>
<li>les deux demi-droites s'appellent les <b>côtés</b> de l'angle ;</li>
<li>l'« ouverture » entre les côtés est l'<b>amplitude</b> (la mesure).</li>
</ul>
<p>⚠️ L'amplitude <b>ne dépend pas de la longueur</b> des côtés que tu dessines, mais seulement de <b>leur ouverture</b> ! Un angle avec de longs côtés n'est pas plus « grand » qu'un angle avec des côtés courts, si l'ouverture est la même.</p>
<p>L'amplitude se mesure en <b>degrés</b> (°) avec le <b>rapporteur</b>.</p>`
    },
    {
      type: "text",
      title: "Le nom des angles",
      html: `<table>
<tr><th>Angle</th><th>Comment il est</th><th>Degrés</th></tr>
<tr><td>📐 <b>Droit</b></td><td>comme le coin d'une feuille ; les côtés sont perpendiculaires</td><td>90°</td></tr>
<tr><td>🔺 <b>Aigu</b></td><td>plus fermé qu'un angle droit</td><td>moins de 90°</td></tr>
<tr><td>🔓 <b>Obtus</b></td><td>plus ouvert qu'un angle droit mais moins qu'un angle plat</td><td>entre 90° et 180°</td></tr>
<tr><td>➖ <b>Plat</b></td><td>les côtés forment une ligne droite</td><td>180° (= 2 droits)</td></tr>
<tr><td>🔄 <b>Plein</b> (tour complet)</td><td>un côté fait le tour complet et revient sur l'autre</td><td>360° (= 4 droits)</td></tr>
</table>
<p>Astuce : pour savoir si un angle est droit, pose le <b>coin d'une feuille</b> ou d'une équerre : s'il se superpose parfaitement, il est droit !</p>`
    },
    {
      type: "svg",
      title: "Aigu, droit, obtus, plat",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<g stroke-width="5" stroke-linecap="round">
<line x1="30" y1="200" x2="140" y2="200" stroke="#1f2937"/><line x1="30" y1="200" x2="120" y2="110" stroke="#1f2937"/>
<line x1="180" y1="200" x2="280" y2="200" stroke="#1f2937"/><line x1="180" y1="200" x2="180" y2="100" stroke="#1f2937"/>
<line x1="350" y1="200" x2="440" y2="200" stroke="#1f2937"/><line x1="350" y1="200" x2="290" y2="120" stroke="#1f2937"/>
<line x1="460" y1="200" x2="590" y2="200" stroke="#1f2937"/>
</g>
<path d="M70 200 A40 40 0 0 0 58 172" fill="none" stroke="#16a34a" stroke-width="4"/>
<rect x="180" y="170" width="30" height="30" fill="none" stroke="#2563eb" stroke-width="4"/>
<path d="M390 200 A40 40 0 0 0 326 168" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M565 200 A40 40 0 0 0 485 200" fill="none" stroke="#7c3aed" stroke-width="4"/>
<circle cx="525" cy="200" r="7" fill="#7c3aed"/>
<text x="85" y="245" font-size="22" fill="#16a34a" text-anchor="middle" font-weight="bold">aigu</text>
<text x="85" y="272" font-size="18" fill="#16a34a" text-anchor="middle">&lt; 90°</text>
<text x="230" y="245" font-size="22" fill="#2563eb" text-anchor="middle" font-weight="bold">droit</text>
<text x="230" y="272" font-size="18" fill="#2563eb" text-anchor="middle">90°</text>
<text x="370" y="245" font-size="22" fill="#dc2626" text-anchor="middle" font-weight="bold">obtus</text>
<text x="370" y="272" font-size="18" fill="#dc2626" text-anchor="middle">entre 90° et 180°</text>
<text x="525" y="245" font-size="22" fill="#7c3aed" text-anchor="middle" font-weight="bold">plat</text>
<text x="525" y="272" font-size="18" fill="#7c3aed" text-anchor="middle">180°</text>
<text x="300" y="40" font-size="22" fill="#1f2937" text-anchor="middle">l'arc coloré montre l'amplitude</text>
</svg>`,
      caption: "Le petit carré bleu est le symbole de l'angle droit."
    },
    {
      type: "widget",
      title: "Quel angle est-ce ?",
      widget: "classify",
      options: {
        groups: ["Aigu", "Droit", "Obtus"],
        items: [
          ["📄 le coin d'une feuille", 1],
          ["🍕 la pointe d'une part de pizza", 0],
          ["🕒 les aiguilles à 3 h 00", 1],
          ["🕐 les aiguilles à 1 h 00", 0],
          ["🕔 les aiguilles à 5 h 00", 2],
          ["💻 l'écran d'ordinateur très ouvert", 2],
          ["🪟 le coin d'une fenêtre", 1],
          ["✂️ des ciseaux à peine ouverts", 0]
        ]
      },
      caption: "Glisse chaque objet dans le bon groupe."
    },
    {
      type: "example",
      title: "Exemple pratique : l'horloge",
      html: `<p>Les aiguilles de l'horloge sont deux demi-droites avec le même sommet : l'axe au centre ! ⏰</p>
<ul>
<li>À <b>3 h 00</b> elles forment un angle <b>droit</b> (90°).</li>
<li>À <b>2 h 00</b> elles forment un angle <b>aigu</b> (60°).</li>
<li>À <b>4 h 00</b> elles forment un angle <b>obtus</b> (120°).</li>
<li>À <b>6 h 00</b> elles forment un angle <b>plat</b> (180°).</li>
</ul>
<p>En une heure, la grande aiguille fait un <b>tour complet</b> : 360° !</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : la chasse aux lignes à l'école",
      html: `<p>Fais une chasse au trésor géométrique en classe ! 🔍</p>
<ul>
<li><b>Droites parallèles</b> : les grands côtés du tableau, les lignes du cahier.</li>
<li><b>Droites perpendiculaires</b> : l'arête du mur qui rencontre le sol, les lignes et les colonnes des carreaux.</li>
<li><b>Segments</b> : le bord de la gomme, le crayon.</li>
<li><b>Angles droits</b> : les coins du bureau, de la porte, du livre.</li>
<li><b>Angles aigus</b> : la pointe du crayon taillé ✏️.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Le tour complet mesure <b>360 degrés</b> grâce aux anciens <b>Babyloniens</b>, qui comptaient en base 60. Ils l'ont peut-être choisi parce que l'année dure environ 360 jours et parce que 360 se divise exactement par beaucoup de nombres : 2, 3, 4, 5, 6, 8, 9, 10, 12…</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Le mathématicien grec <b>Euclide</b>, il y a environ 2300 ans, a écrit un livre célébrissime, les <b>Éléments</b>, où il définissait le point comme <i>« ce qui n'a pas de parties »</i> et la ligne comme <i>« longueur sans largeur »</i>. Pendant des siècles, ce fut le livre de géométrie le plus étudié du monde ! 📜</p>`
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Droite : infinie des deux côtés. Demi-droite : elle a une origine. Segment : il a deux extrémités.</li>
<li>Parallèles : elles ne se rencontrent jamais. Perpendiculaires : elles se rencontrent en formant des angles droits.</li>
<li>Angle = deux demi-droites de même origine (sommet).</li>
<li>Aigu &lt; 90° · Droit = 90° · Obtus entre 90° et 180° · Plat = 180° · Plein = 360°.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre lignes et angles",
      intro: "La géométrie se comprend mieux en bougeant et en touchant. Essaie l'un de ces chemins !",
      tabs: [
        {
          label: "🙆 Avec les bras",
          html: `<p>Lève-toi ! Ton corps peut faire les angles :</p>
<ul>
<li>un bras en haut et un sur le côté → angle <b>droit</b> 🙋 ;</li>
<li>bras ouverts en ligne droite → angle <b>plat</b> 🤸 ;</li>
<li>bras presque fermés au-dessus de la tête → angle <b>aigu</b> ;</li>
<li>un tour complet sur toi-même → angle <b>plein</b> ! 🔄</li>
</ul>
<p>Ton épaule est le <b>sommet</b>, les bras sont les <b>côtés</b>.</p>`
        },
        {
          label: "🕒 Avec l'horloge",
          html: `<p>Pense à la grande aiguille qui part de 12 h. Toutes les 5 minutes, elle tourne de <b>30°</b>.</p>
<ul>
<li>Après 15 minutes → <b>90°</b>, un angle droit (un quart de tour).</li>
<li>Après 30 minutes → <b>180°</b>, angle plat (un demi-tour).</li>
<li>Après 60 minutes → <b>360°</b>, angle plein (tour complet).</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#eff6ff"/>
<circle cx="130" cy="130" r="100" fill="#ffffff" stroke="#1f2937" stroke-width="5"/>
<path d="M130 130 L130 30 A100 100 0 0 1 230 130 Z" fill="#93c5fd" opacity="0.8"/>
<line x1="130" y1="130" x2="130" y2="45" stroke="#1f2937" stroke-width="6" stroke-linecap="round"/>
<line x1="130" y1="130" x2="215" y2="130" stroke="#dc2626" stroke-width="6" stroke-linecap="round"/>
<circle cx="130" cy="130" r="8" fill="#1f2937"/>
<text x="130" y="25" font-size="18" text-anchor="middle">12</text>
<text x="245" y="136" font-size="18">3</text>
<text x="300" y="80" font-size="24" fill="#1d4ed8" font-weight="bold">15 minutes</text>
<text x="300" y="120" font-size="24" fill="#1f2937">= 1/4 de tour</text>
<text x="300" y="160" font-size="24" fill="#dc2626" font-weight="bold">= 90° (droit)</text>
</svg>`
        },
        {
          label: "🧊 Dans les solides 3D",
          html: `<p>Les objets aussi ont des lignes et des angles ! Dans cette <b>boîte</b> (pavé droit) :</p>
<ul>
<li>les <b>arêtes</b> sont des segments ;</li>
<li>les arêtes qui se rencontrent forment des angles <b>droits</b> ;</li>
<li>les arêtes opposées d'une face sont <b>parallèles</b>.</li>
</ul>
<p>Change de solide avec les boutons : la pyramide a aussi des angles <b>aigus</b> !</p>`,
          scene: "solid",
          options: { shape: "box", w: 3, h: 2, d: 1.5, color: "#fbbf24", labels: true, shapes: ["box", "cube", "pyramid"] }
        },
        {
          label: "🗺️ L'analogie des rues",
          html: `<p>Pense aux rues d'une ville :</p>
<ul>
<li>deux rues qui courent côte à côte sans jamais se croiser sont <b>parallèles</b> ;</li>
<li>un <b>carrefour</b> est l'endroit où deux rues <b>sécantes</b> se rencontrent ;</li>
<li>si le carrefour forme une croix « parfaite » ➕, les rues sont <b>perpendiculaires</b>.</li>
</ul>
<p>À New York, à Turin et à Barcelone, beaucoup de rues sont construites ainsi, en <b>damier</b> : toutes parallèles ou perpendiculaires !</p>`
        },
        {
          label: "🔤 Les lettres de l'alphabet",
          html: `<p>Même les lettres majuscules cachent des lignes et des angles !</p>
<ul>
<li><b>L</b> et <b>T</b> : angles <b>droits</b>, segments perpendiculaires.</li>
<li><b>V</b> et <b>A</b> : angles <b>aigus</b>.</li>
<li><b>H</b>, <b>=</b> : segments <b>parallèles</b>.</li>
<li><b>X</b> : segments <b>sécants</b>.</li>
<li><b>O</b>, <b>C</b>, <b>S</b> : lignes <b>courbes</b> ; le O est une ligne <b>fermée</b> !</li>
</ul>
<p>Essaie d'écrire ton prénom et cherche les angles ! ✍️</p>`
        },
        {
          "label": "𓂀 L'équerre et le fil à plomb des Égyptiens",
          "html": "<p>Les anciens <b>Égyptiens</b> construisaient des pyramides et des temples énormes avec des murs parfaitement droits. Comment faisaient-ils sans instruments électroniques ? Dans une tombe du village des ouvriers de <b>Deir el-Médineh</b>, celle de <b>Sennedjem</b>, qui travaillait aux tombes des pharaons il y a plus de 3000 ans, on a retrouvé ses outils : une <b>équerre</b> et un <b>niveau en forme de A</b> avec un <b>fil à plomb</b>.</p><ul><li>Le <b>fil à plomb</b> est un fil avec un poids : le poids tire le fil vers le bas, qui devient toujours <b>vertical</b>.</li><li>Le niveau en A : quand le fil passe exactement sur le <b>repère central</b>, la base du A est <b>horizontale</b>.</li><li>L'<b>équerre</b> sert à contrôler les <b>angles droits</b>.</li></ul><p>🎯 <b>Construis ton fil à plomb</b> : attache une gomme à une ficelle et tiens-la immobile. Le fil est vertical. Pose une équerre contre le fil : le côté du bas est horizontal. Vertical et horizontal sont <b>perpendiculaires</b> : ils forment un angle droit ! Maintenant, contrôle : le montant de la porte est-il vertical ? Le bureau est-il horizontal ?</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/><polyline points=\"150,260 300,40 450,260\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"12\" stroke-linejoin=\"round\"/><line x1=\"205\" y1=\"180\" x2=\"395\" y2=\"180\" stroke=\"#92400e\" stroke-width=\"10\"/><line x1=\"300\" y1=\"40\" x2=\"300\" y2=\"215\" stroke=\"#1e293b\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"222\" r=\"10\" fill=\"#475569\" stroke=\"none\" stroke-width=\"2\"/><line x1=\"300\" y1=\"172\" x2=\"300\" y2=\"188\" stroke=\"#dc2626\" stroke-width=\"4\"/><line x1=\"110\" y1=\"266\" x2=\"490\" y2=\"266\" stroke=\"#16a34a\" stroke-width=\"4\"/><text x=\"320\" y=\"120\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">fil à plomb</text><text x=\"320\" y=\"140\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">(vertical)</text><text x=\"410\" y=\"288\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">base horizontale</text><text x=\"330\" y=\"200\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#dc2626\">repère central</text><polyline points=\"30,40 30,130 120,130\" fill=\"none\" stroke=\"#a16207\" stroke-width=\"12\"/><text x=\"30\" y=\"160\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#a16207\" font-weight=\"bold\">équerre</text><rect x=\"30\" y=\"112\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/></svg>"
        },
        {
          "label": "🇯🇵 L'angle droit avec l'origami (Japon)",
          "html": "<p>Au <b>Japon</b>, l'<b>origami</b>, l'art de plier le papier, se pratique aussi à l'école. Avec deux plis, tu peux construire un <b>angle droit</b> parfait, même en partant d'un morceau de papier au bord tout de travers !</p><ol><li>Prends un morceau de papier quelconque et plie-le en deux, où tu veux. Le bord du pli est une <b>ligne droite</b>.</li><li>Maintenant plie de nouveau en faisant <b>coïncider le pli avec lui-même</b> (un morceau de pli sur l'autre).</li><li>Ouvre la feuille : les deux plis se croisent et forment <b>4 angles droits</b> ! Les deux plis sont <b>perpendiculaires</b>.</li><li>Referme et plie encore en deux l'angle droit : tu obtiens un angle <b>aigu</b> (la moitié d'un angle droit).</li></ol><p>🎯 Utilise ton « angle droit en papier » comme un instrument : pose-le contre les coins du livre, du tableau, de la fenêtre. Si l'angle est plus petit, il est <b>aigu</b>, s'il est plus grand, il est <b>obtus</b>.</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des lignes et des angles : touche un nœud et découvre pourquoi",
      nodes: [
        { id: "punto", label: "Point", x: 50, y: 6, color: "#64748b", html: "Le plus petit « endroit » de la géométrie : il n'a pas de dimensions. On l'indique avec une lettre majuscule.", why: "Euclide, dans le livre des <i>Éléments</i> (vers 300 av. J.-C.), l'a défini comme « ce qui n'a pas de parties ». C'est une idée : le point du crayon n'est qu'une façon de le voir." },
        { id: "linea", label: "Ligne", x: 50, y: 24, color: "#0ea5e9", html: "Courbe, droite, brisée ou mixte ; ouverte ou fermée.", why: "Pour Euclide, c'est une « longueur sans largeur ». Tu peux l'imaginer comme le chemin d'un point qui se déplace." },
        { id: "retta", label: "Droite", x: 18, y: 42, color: "#2563eb", html: "Ligne droite sans début ni fin.", why: "L'un des postulats d'Euclide dit que par deux points passe une et une seule droite : c'est pour ça qu'une règle suffit pour la tracer." },
        { id: "semi", label: "Demi-droite", x: 50, y: 48, color: "#16a34a", html: "Une droite coupée en un point : elle a une origine.", why: "Si tu choisis un point sur une droite, tu la partages en deux demi-droites : « demi » veut dire « moitié »." },
        { id: "seg", label: "Segment", x: 82, y: 42, color: "#dc2626", html: "Le morceau de droite entre deux points : on peut le mesurer.", why: "Le mot vient du latin <i>secare</i>, « couper » : c'est un morceau coupé dans la droite. C'est la ligne la plus courte entre deux points." },
        { id: "pos", label: "Parallèles et perpendiculaires", x: 18, y: 72, color: "#f59e0b", html: "Parallèles : ne jamais se rencontrer. Perpendiculaires : se rencontrer à angle droit.", why: "Le cinquième postulat d'Euclide concerne justement les parallèles. Pendant 2000 ans, les mathématiciens ont essayé de le démontrer ; au XIXe siècle, on a découvert qu'il existe aussi d'autres géométries, où les « droites » sont courbes, comme sur la surface d'une sphère." },
        { id: "angolo", label: "Angle", x: 60, y: 72, color: "#a855f7", html: "Partie du plan entre deux demi-droites de même origine (sommet).", why: "Il vient du latin <i>angulus</i>, « coin, courbure ». Seule compte l'ouverture, pas la longueur des côtés." },
        { id: "gradi", label: "Degrés et types d'angles", x: 60, y: 93, color: "#ec4899", html: "Aigu, droit (90°), obtus, plat (180°), plein (360°).", why: "Les Babyloniens ont divisé le tour en 360 parties parce qu'ils comptaient en base 60 et parce que 360 se divise par beaucoup de nombres. L'instrument pour mesurer est le rapporteur ; en italien, <i>goniometro</i>, du grec <i>gonia</i> = angle." }
      ],
      edges: [
        ["punto", "linea", "se déplace et trace"],
        ["linea", "retta", "si elle est droite"],
        ["retta", "semi", "coupée en un point"],
        ["retta", "seg", "coupée en deux points"],
        ["retta", "pos", "deux droites peuvent être"],
        ["semi", "angolo", "deux de même origine"],
        ["angolo", "gradi", "se mesure en"],
        ["pos", "gradi", "perpendiculaires = 90°"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : les angles",
      questions: [
        { type: "mc", q: "Un angle de 120° est…", options: ["aigu", "droit", "obtus"], answer: 2, explain: "Il mesure plus de 90° et moins de 180° : obtus." },
        { type: "num", q: "Combien de degrés mesure un angle plat ?", answer: 180, unit: "°", explain: "Un angle plat vaut deux angles droits : 90° + 90° = 180°." },
        { type: "tf", q: "Si je rallonge les côtés d'un angle, l'angle devient plus ouvert.", answer: false, explain: "L'amplitude dépend seulement de l'ouverture des côtés, pas de leur longueur." }
      ]
    }
  ],
  glossary: [
    { t: "Droite", d: "Ligne droite sans début ni fin." },
    { t: "Demi-droite", d: "Partie de droite avec une origine, infinie d'un seul côté." },
    { t: "Segment", d: "Partie de droite comprise entre deux points (extrémités) ; on peut le mesurer." },
    { t: "Droites parallèles", d: "Droites qui ne se rencontrent jamais." },
    { t: "Droites sécantes", d: "Droites qui se rencontrent en un point." },
    { t: "Droites perpendiculaires", d: "Droites sécantes qui forment quatre angles droits." },
    { t: "Angle", d: "Partie du plan comprise entre deux demi-droites de même origine." },
    { t: "Sommet", d: "Le point d'où partent les côtés d'un angle." },
    { t: "Angle droit", d: "Angle de 90°, comme le coin d'une feuille." },
    { t: "Rapporteur", d: "Instrument pour mesurer l'amplitude des angles en degrés." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quelle ligne n'a ni début ni fin ?", options: ["Segment", "Droite", "Demi-droite"], answer: 1, explain: "La droite continue à l'infini des deux côtés." },
      { type: "mc", q: "Comment s'appelle le point de départ d'une demi-droite ?", options: ["Origine", "Extrémité finale", "Côté"], answer: 0, explain: "La demi-droite part de l'origine." },
      { type: "tf", q: "Deux droites parallèles finissent tôt ou tard par se rencontrer.", answer: false, explain: "Les droites parallèles ne se rencontrent jamais." },
      { type: "mc", q: "Deux droites qui se rencontrent en formant 4 angles droits sont…", options: ["parallèles", "perpendiculaires", "obliques"], answer: 1, explain: "Elles sont perpendiculaires." },
      { type: "num", q: "Combien de degrés mesure un angle droit ?", answer: 90, unit: "°", explain: "L'angle droit mesure 90°." },
      { type: "mc", q: "Un angle de 45° est…", options: ["aigu", "obtus", "plat"], answer: 0, explain: "Il est plus petit que 90° : aigu." },
      { type: "text", q: "Comment s'appelle le point d'où partent les côtés d'un angle ?", answer: ["sommet", "le sommet"], explain: "C'est le sommet." },
      { type: "num", q: "Combien d'angles droits forment un angle plein ?", answer: 4, explain: "4 × 90° = 360°." },
      { type: "mc", q: "À 6 h 00, les aiguilles de l'horloge forment un angle…", options: ["droit", "aigu", "plat"], answer: 2, explain: "L'une pointe le 12 et l'autre le 6 : elles sont en ligne droite, angle plat." },
      { type: "order", q: "Range les angles du plus fermé au plus ouvert.", items: ["aigu", "droit", "obtus", "plat", "plein"], explain: "Aigu < 90° < obtus < 180° (plat) < 360° (plein)." },
      { type: "tf", q: "Le segment est la seule de ces lignes que l'on peut mesurer avec la règle.", answer: true, explain: "La droite et la demi-droite sont infinies ; le segment a deux extrémités." }
    ]
  }
});
