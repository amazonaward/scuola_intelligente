TOPIC('fr', {
  id: "p3-mat-numeri-1000",
  title: "Les nombres jusqu'à 1000",
  intro: "Hier encore, tu comptais jusqu'à 100. Aujourd'hui, nous faisons un énorme bond : nous arrivons jusqu'à <b>1000</b> ! 🚀 Découvrons les <b>centaines</b>, apprenons à lire, écrire, décomposer et comparer les nombres à trois chiffres, et faisons connaissance avec le grand <b>millier</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Des unités aux centaines",
      html: `<p>Notre système de numération s'appelle <b>décimal</b> parce qu'il fonctionne par groupes de <b>dix</b> :</p>
<ul>
<li><b>10 unités</b> (u) forment <b>1 dizaine</b> (da) → 10</li>
<li><b>10 dizaines</b> forment <b>1 centaine</b> (h) → 100</li>
<li><b>10 centaines</b> forment <b>1 millier</b> (k) → 1000</li>
</ul>
<p>Chaque fois que tu as 10 éléments d'un ordre, tu peux les « échanger » contre 1 élément de l'ordre supérieur, comme quand tu échanges 10 pièces de 10 centimes contre 1 euro ! 💶</p>
<p>La lettre <b>h</b> des centaines vient de <i>hecto</i>, un mot grec qui veut dire « cent » ; le <b>k</b> du millier vient de <i>kilo</i>, « mille ».</p>`
    },
    {
      type: "3d",
      title: "Cubes, barres et plaques en 3D",
      scene: "blocks",
      options: { mode: "base10", value: 245 },
      caption: "Le petit cube est 1 unité, la barre (10 cubes) est 1 dizaine, la plaque (10 barres = 100 cubes) est 1 centaine. Déplace le curseur et tourne le modèle : 245 = 2 plaques, 4 barres, 5 cubes."
    },
    {
      type: "text",
      title: "La valeur de position : chaque chiffre a sa place",
      html: `<p>Un nombre jusqu'à 999 s'écrit avec <b>trois chiffres</b> au maximum. Chaque chiffre a une valeur différente selon la <b>place</b> qu'il occupe :</p>
<table>
<tr><th>h (centaines)</th><th>da (dizaines)</th><th>u (unités)</th></tr>
<tr><td style="color:#8b5cf6;font-weight:bold">3</td><td style="color:#3b82f6;font-weight:bold">5</td><td style="color:#22c55e;font-weight:bold">6</td></tr>
<tr><td>3 × 100 = 300</td><td>5 × 10 = 50</td><td>6 × 1 = 6</td></tr>
</table>
<p>356 se lit « <b>trois cent cinquante-six</b> ».</p>
<p>Attention au chiffre <b>0</b> : c'est un « marque-place », il dit qu'à cet endroit il n'y a rien. <b>305</b> = 3 h, <b>0</b> da, 5 u (trois cent cinq) ; <b>350</b> = 3 h, 5 da, <b>0</b> u (trois cent cinquante). Sans le zéro, nous ne pourrions pas les distinguer !</p>
<p>Le même <b>3</b> vaut 3 dans 123, 30 dans 132 et 300 dans 312 : la place compte !</p>`
    },
    {
      type: "widget",
      title: "L'abaque à trois tiges",
      widget: "abacus",
      options: { columns: ["h", "da", "u"], value: 356 },
      caption: "Chaque boule sur la tige des h vaut 100, sur la tige des da vaut 10, sur la tige des u vaut 1. Essaie de faire 407 puis 999. Que se passe-t-il si tu ajoutes encore 1 ?"
    },
    {
      type: "text",
      title: "Composer et décomposer",
      html: `<p><b>Décomposer</b> un nombre, c'est le diviser en ses parties :</p>
<ul>
<li>472 = <b>4 h + 7 da + 2 u</b></li>
<li>472 = <b>400 + 70 + 2</b> (décomposition additive)</li>
<li>472 = <b>4 × 100 + 7 × 10 + 2 × 1</b></li>
</ul>
<p><b>Composer</b>, c'est le contraire : 6 h + 0 da + 8 u = <b>608</b>.</p>
<p>Un même nombre peut aussi se décomposer d'autres façons : 472 = 47 da + 2 u, ou bien 472 = 3 h + 17 da + 2 u (j'ai « cassé » une centaine en 10 dizaines). Cette astuce te servira beaucoup dans les soustractions avec retenue !</p>`
    },
    {
      type: "svg",
      title: "Le tableau des centaines",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<rect x="40" y="30" width="170" height="60" rx="8" fill="#8b5cf6"/>
<rect x="215" y="30" width="170" height="60" rx="8" fill="#3b82f6"/>
<rect x="390" y="30" width="170" height="60" rx="8" fill="#22c55e"/>
<text x="125" y="70" font-size="30" font-weight="bold" text-anchor="middle" fill="#ffffff">h</text>
<text x="300" y="70" font-size="30" font-weight="bold" text-anchor="middle" fill="#ffffff">da</text>
<text x="475" y="70" font-size="30" font-weight="bold" text-anchor="middle" fill="#ffffff">u</text>
<g stroke="#4c1d95" stroke-width="2" fill="#ffffff">
<rect x="40" y="95" width="170" height="80"/><rect x="215" y="95" width="170" height="80"/><rect x="390" y="95" width="170" height="80"/>
</g>
<text x="125" y="155" font-size="56" font-weight="bold" text-anchor="middle" fill="#7c3aed">4</text>
<text x="300" y="155" font-size="56" font-weight="bold" text-anchor="middle" fill="#2563eb">7</text>
<text x="475" y="155" font-size="56" font-weight="bold" text-anchor="middle" fill="#16a34a">2</text>
<text x="125" y="215" font-size="26" text-anchor="middle" fill="#7c3aed">400</text>
<text x="300" y="215" font-size="26" text-anchor="middle" fill="#2563eb">70</text>
<text x="475" y="215" font-size="26" text-anchor="middle" fill="#16a34a">2</text>
<text x="212" y="215" font-size="26" text-anchor="middle" fill="#1f2937">+</text>
<text x="387" y="215" font-size="26" text-anchor="middle" fill="#1f2937">+</text>
<text x="300" y="270" font-size="24" font-weight="bold" text-anchor="middle" fill="#1f2937">quatre cent soixante-douze</text>
</svg>`,
      caption: "Chaque chiffre dans sa case : 472 = 400 + 70 + 2."
    },
    {
      type: "quiz",
      title: "Mini-quiz : la valeur des chiffres",
      questions: [
        { type: "num", q: "Dans 583, quelle est la valeur du chiffre 8 ?", answer: 80, explain: "Le 8 est à la place des dizaines : 8 × 10 = 80." },
        { type: "num", q: "Compose le nombre : 7 h + 0 da + 4 u", answer: 704, explain: "Sept cent quatre : le zéro tient la place des dizaines." },
        { type: "mc", q: "Comment s'écrit « deux cent dix-neuf » ?", options: ["2019", "219", "209"], answer: 1, explain: "Deux cents (200) + dix-neuf (19) = 219." }
      ]
    },
    {
      type: "text",
      title: "Comparer et ranger",
      html: `<p>Pour savoir quel nombre est le plus grand :</p>
<ol>
<li>S'ils n'ont pas le même nombre de chiffres, le plus grand est celui qui a <b>le plus de chiffres</b> : 1000 &gt; 999, 105 &gt; 98.</li>
<li>S'ils ont le même nombre de chiffres, compare les <b>centaines</b> : 512 &gt; 498 (5 h &gt; 4 h).</li>
<li>Si les centaines sont égales, compare les <b>dizaines</b> : 372 &gt; 365.</li>
<li>Si les dizaines sont aussi égales, compare les <b>unités</b> : 847 &gt; 843.</li>
</ol>
<p>Rappelle-toi les symboles : <b>&gt;</b> plus grand que, <b>&lt;</b> plus petit que, <b>=</b> égal. Le « bec » ouvert regarde toujours le plus grand nombre ! 🐊</p>
<p><b>Précédent et suivant</b> : le suivant de 399 est <b>400</b> (+1) ; le précédent de 700 est <b>699</b> (−1).</p>`
    },
    {
      type: "widget",
      title: "La droite des nombres jusqu'à 1000",
      widget: "numberLine",
      options: { min: 0, max: 1000, step: 100, marks: [250, 500, 750, 1000] },
      caption: "Fais des sauts de 100 : 100, 200, 300… Dix sauts te mènent à 1000 ! Où se trouve 500 ? Exactement au milieu."
    },
    {
      type: "text",
      title: "Le millier : 1000",
      html: `<p>Après 999 vient <b>1000</b> (mille) : 999 + 1 = 1000. Tu as rempli toutes les cases et tu dois « échanger » :</p>
<ul>
<li>10 unités → 1 dizaine (les unités reviennent à 0) ;</li>
<li>10 dizaines → 1 centaine (les dizaines reviennent à 0) ;</li>
<li>10 centaines → <b>1 millier</b> (les centaines reviennent à 0).</li>
</ul>
<p>Pour écrire 1000, il faut une <b>quatrième case</b> : <b>k</b> (milliers). 1000 = 1 k, 0 h, 0 da, 0 u.</p>
<p>1000 = 10 centaines = 100 dizaines = 1000 unités. Dans « deux mille », « trois mille »…, « mille » ne prend pas de s.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : les vignettes dans la boîte",
      html: `<p>Luca collectionne les vignettes. Il les range ainsi : les vignettes seules (unités), les pochettes de 10 (dizaines) et les boîtes de 100 (centaines).</p>
<p>Il a <b>3 boîtes</b>, <b>12 pochettes</b> et <b>7 vignettes seules</b>. Combien de vignettes a-t-il ?</p>
<ul>
<li>12 pochettes = 10 pochettes + 2 pochettes = 1 boîte + 2 pochettes</li>
<li>Donc il a 4 boîtes, 2 pochettes, 7 seules</li>
<li>4 h + 2 da + 7 u = <b>427 vignettes</b></li>
</ul>
<p>Combien lui en manque-t-il pour arriver à 1000 ? Faisons des sauts jusqu'aux nombres « ronds » : 427 + 3 = 430, 430 + 70 = 500, 500 + 500 = 1000 → 3 + 70 + 500 = <b>573</b>.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : l'argent de la tirelire",
      html: `<p>Dans la tirelire d'Anna, il y a : 2 billets de 100 €, 5 billets de 10 €, 9 pièces de 1 €.</p>
<p>Total : 200 + 50 + 9 = <b>259 €</b>.</p>
<p>Anna veut acheter un vélo à <b>295 €</b>. 259 &lt; 295 : ça ne suffit pas encore ! Il lui manque 295 − 259 = <b>36 €</b>.</p>
<p>Les euros fonctionnent exactement comme h, da, u : 100 €, 10 €, 1 €.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le zéro est arrivé tard",
      html: `<p>Les chiffres que nous utilisons (0, 1, 2… 9) s'appellent <b>indo-arabes</b> : ils ont été inventés en <b>Inde</b>, puis les mathématiciens arabes les ont fait connaître et ils sont arrivés en Italie grâce à <b>Léonard de Pise (Fibonacci)</b>, dans son livre <i>Liber Abaci</i> de <b>1202</b>. La grande nouveauté était le <b>zéro</b>, qui permet la valeur de position. Avant, en Europe, on utilisait les chiffres romains, qui n'avaient pas de zéro !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le M des Romains et la fleur de lotus des Égyptiens",
      html: `<p>Les Romains écrivaient <b>C</b> = 100 (de <i>centum</i>), <b>D</b> = 500 et <b>M</b> = 1000 (de <i>mille</i>). Ainsi 356 devenait <b>CCCLVI</b> : très long ! Les anciens <b>Égyptiens</b>, eux, dessinaient : un bâtonnet pour 1, un petit arc pour 10, une corde enroulée pour 100 et une <b>fleur de lotus</b> 🪷 pour 1000.</p>`
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>10 u = 1 da · 10 da = 1 h · 10 h = 1 k (1000).</li>
<li>La valeur d'un chiffre dépend de la <b>place</b> : h, da, u.</li>
<li>Le <b>0</b> tient la place vide : 305 ≠ 35.</li>
<li>Décomposer : 472 = 4 h + 7 da + 2 u = 400 + 70 + 2.</li>
<li>Comparer : d'abord les h, puis les da, puis les u.</li>
<li>999 + 1 = 1000 (mille).</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les nombres jusqu'à 1000",
      intro: "Si l'abaque ne te suffit pas, essaie avec l'argent, avec les nombres chinois, avec les Romains ou avec le compteur kilométrique.",
      tabs: [
        {
          label: "💶 L'argent",
          html: `<p>Les euros sont un abaque parfait :</p>
<ul>
<li>💵 billet de <b>100 €</b> = 1 centaine</li>
<li>💵 billet de <b>10 €</b> = 1 dizaine</li>
<li>🪙 pièce de <b>1 €</b> = 1 unité</li>
</ul>
<p>Pour payer <b>638 €</b> avec le moins de pièces et billets possible : 6 de 100, 3 de 10, 8 de 1. Si le magasin n'a pas de monnaie et te donne 10 pièces de 1 € à la place d'un billet de 10 €… c'est justement l'« échange » entre dizaines et unités !</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0fdf4"/>
<g fill="#86efac" stroke="#15803d" stroke-width="3">
<rect x="20" y="30" width="100" height="50" rx="6"/><rect x="30" y="40" width="100" height="50" rx="6"/><rect x="40" y="50" width="100" height="50" rx="6"/>
</g>
<text x="90" y="82" font-size="22" font-weight="bold" text-anchor="middle" fill="#14532d">100 €</text>
<text x="90" y="140" font-size="22" text-anchor="middle" fill="#14532d">× 6 = 600</text>
<g fill="#fca5a5" stroke="#b91c1c" stroke-width="3">
<rect x="230" y="40" width="90" height="45" rx="6"/><rect x="240" y="50" width="90" height="45" rx="6"/>
</g>
<text x="285" y="80" font-size="20" font-weight="bold" text-anchor="middle" fill="#7f1d1d">10 €</text>
<text x="285" y="140" font-size="22" text-anchor="middle" fill="#7f1d1d">× 3 = 30</text>
<g fill="#fde047" stroke="#a16207" stroke-width="3">
<circle cx="440" cy="60" r="22"/><circle cx="480" cy="60" r="22"/><circle cx="520" cy="60" r="22"/><circle cx="460" cy="95" r="22"/><circle cx="500" cy="95" r="22"/>
</g>
<text x="480" y="66" font-size="16" font-weight="bold" text-anchor="middle" fill="#713f12">1 €</text>
<text x="480" y="140" font-size="22" text-anchor="middle" fill="#713f12">× 8 = 8</text>
<text x="300" y="195" font-size="30" font-weight="bold" text-anchor="middle" fill="#1f2937">600 + 30 + 8 = 638 €</text>
</svg>`
        },
        {
          label: "🇨🇳 Comme en Chine et au Japon",
          html: `<p>En chinois (et en japonais), les nombres se disent de façon <b>très régulière</b> : on dit exactement combien il y a de centaines, de dizaines et d'unités !</p>
<ul>
<li>356 = 三百五十六 = « <b>trois-cent cinq-dix six</b> »</li>
<li>11 = 十一 = « <b>dix un</b> » (en français, « onze » ne se comprend pas !)</li>
<li>20 = 二十 = « <b>deux-dix</b> »</li>
</ul>
<p>Essaie de dire les nombres « à la chinoise » : 472 = « quatre-cent sept-dix deux ». C'est une très belle façon de comprendre la valeur de position. Certains chercheurs pensent que cela aide les enfants d'Asie orientale à apprendre les nombres plus vite !</p>`
        },
        {
          label: "🧊 Cubes 3D",
          html: `<p>Construis le nombre avec les blocs : la plaque est 100, la barre est 10, le petit cube est 1. Essaie de faire <b>999</b> : 9 plaques, 9 barres, 9 cubes. Maintenant imagine d'ajouter 1 cube : 10 cubes deviennent une barre, 10 barres une plaque, et 10 plaques, l'une sur l'autre, forment un <b>grand cube de 1000</b> !</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 999 }
        },
        {
          label: "🚗 Le compteur kilométrique",
          html: `<p>As-tu déjà regardé le compteur kilométrique d'une vieille voiture ? Il a des <b>roulettes</b> avec les chiffres de 0 à 9.</p>
<p>Quand la roulette des unités passe de 9 à 0, elle fait avancer d'un cran la roulette des dizaines. Quand celle des dizaines passe de 9 à 0, elle fait avancer les centaines.</p>
<p>0 9 9 → 1 0 0 · 9 9 9 → 1 0 0 0 : toutes les roulettes tournent ensemble ! C'est l'« échange » du système décimal, fait par une machine.</p>`
        },
        {
          label: "🏛️ Chiffres romains",
          html: `<p>Les Romains n'avaient pas la valeur de position : chaque symbole vaut toujours la même chose et les valeurs s'additionnent (ou se soustraient si un petit symbole est placé avant un grand).</p>
<table>
<tr><th>Symbole</th><td>I</td><td>V</td><td>X</td><td>L</td><td>C</td><td>D</td><td>M</td></tr>
<tr><th>Valeur</th><td>1</td><td>5</td><td>10</td><td>50</td><td>100</td><td>500</td><td>1000</td></tr>
</table>
<p>Exemples : <b>CCXL</b> = 100 + 100 + (50 − 10) = 240 · <b>CMXCIX</b> = 999 · <b>M</b> = 1000.</p>
<p>Compare : nous écrivons 999 avec 3 chiffres, les Romains avec 6 symboles !</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des nombres jusqu'à 1000 : touche un nœud et découvre pourquoi",
      nodes: [
        { id: "decimale", label: "Système décimal", x: 50, y: 6, color: "#2563eb", html: "Nous comptons par groupes de dix.", why: "Presque sûrement parce que nous avons <b>10 doigts</b> ! Tous les peuples n'ont pas fait pareil : les Mayas comptaient en base 20 (doigts des mains et des pieds), les Babyloniens en base 60, d'où viennent les 60 minutes d'une heure." },
        { id: "cifre", label: "10 chiffres", x: 20, y: 26, color: "#f59e0b", html: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9.", why: "Ce sont les chiffres indo-arabes : inventés en Inde, diffusés par les mathématiciens arabes (comme al-Khwarizmi, IXe siècle) et apportés en Europe par Fibonacci en 1202." },
        { id: "zero", label: "Le zéro", x: 20, y: 52, color: "#64748b", html: "Le chiffre qui indique une place vide.", why: "Le mathématicien indien <b>Brahmagupta</b>, en 628 apr. J.-C., fut l'un des premiers à traiter le zéro comme un vrai nombre avec ses règles. Sans zéro, on ne pourrait pas distinguer 35 de 305." },
        { id: "posizione", label: "Valeur de position", x: 50, y: 40, color: "#a855f7", html: "Un chiffre vaut plus ou moins selon la place.", why: "C'est l'idée géniale qui rend les calculs faciles : avec seulement 10 chiffres, on peut écrire n'importe quel nombre. En déplaçant un chiffre d'une place vers la gauche, sa valeur devient 10 fois plus grande." },
        { id: "unita", label: "Unités (u)", x: 82, y: 22, color: "#22c55e", html: "Le petit cube : il vaut 1.", why: "C'est le point de départ : compter un par un. Du mot latin <i>unus</i>, un." },
        { id: "decine", label: "Dizaines (da)", x: 82, y: 46, color: "#3b82f6", html: "10 unités = 1 dizaine.", why: "Regrouper par 10 permet de compter vite beaucoup de choses : au lieu de 30 objets, tu comptes 3 groupes." },
        { id: "centinaia", label: "Centaines (h)", x: 82, y: 70, color: "#8b5cf6", html: "10 dizaines = 1 centaine = 100.", why: "Le symbole h vient du préfixe grec <i>hecto-</i> (cent), que nous utilisons aussi dans hectolitre (100 litres) et hectare." },
        { id: "migliaio", label: "Millier (k)", x: 50, y: 92, color: "#ef4444", html: "10 centaines = 1000.", why: "« Mille » vient du latin <i>mille</i>, dont le pluriel était <i>milia</i>. Le symbole k vient du grec <i>chílioi</i> (mille), comme dans kilogramme et kilomètre." },
        { id: "confronto", label: "Comparer et décomposer", x: 20, y: 80, color: "#14b8a6", html: "472 = 400 + 70 + 2 ; 512 &gt; 498.", why: "Comme chaque place vaut 10 fois celle qui est à sa droite, une seule centaine de plus compte plus que n'importe quel nombre de dizaines et d'unités : c'est pour ça qu'on compare d'abord les centaines." }
      ],
      edges: [
        ["decimale", "cifre", "utilise"],
        ["cifre", "zero", "y compris le"],
        ["decimale", "posizione", "repose sur la"],
        ["posizione", "unita", "place des"],
        ["unita", "decine", "×10"],
        ["decine", "centinaia", "×10"],
        ["centinaia", "migliaio", "×10"],
        ["zero", "posizione", "rend possible la"],
        ["posizione", "confronto", "permet de"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : comparer et le millier",
      questions: [
        { type: "mc", q: "Quel nombre est le plus grand ?", options: ["689", "698", "669"], answer: 1, explain: "Mêmes centaines (6) : je compare les dizaines, 9 est la plus grande → 698." },
        { type: "num", q: "Quel est le suivant de 599 ?", answer: 600, explain: "599 + 1 = 600 : les unités et les dizaines « s'échangent »." },
        { type: "num", q: "Combien de centaines y a-t-il dans 1000 ?", answer: 10, explain: "10 × 100 = 1000." }
      ]
    }
  ],
  glossary: [
    { t: "Unité (u)", d: "L'élément seul : il vaut 1." },
    { t: "Dizaine (da)", d: "Groupe de 10 unités." },
    { t: "Centaine (h)", d: "Groupe de 10 dizaines, c'est-à-dire 100 unités." },
    { t: "Millier (k)", d: "Groupe de 10 centaines, c'est-à-dire 1000 unités." },
    { t: "Chiffre", d: "Chacun des 10 symboles avec lesquels on écrit les nombres (0–9)." },
    { t: "Valeur de position", d: "La valeur d'un chiffre dépend de la place qu'il occupe dans le nombre." },
    { t: "Décomposer", d: "Diviser un nombre en ses parties : 472 = 400 + 70 + 2." },
    { t: "Composer", d: "Former un nombre à partir de ses parties : 4 h + 7 da + 2 u = 472." },
    { t: "Précédent", d: "Le nombre qui vient juste avant (−1)." },
    { t: "Suivant", d: "Le nombre qui vient juste après (+1)." },
    { t: "Système décimal", d: "Système de numération qui regroupe par 10." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Compose le nombre : 5 h + 3 da + 9 u", answer: 539, explain: "500 + 30 + 9 = 539." },
      { type: "num", q: "Dans 742, quelle est la valeur du chiffre 7 ?", answer: 700, explain: "Il est à la place des centaines : 7 × 100 = 700." },
      { type: "mc", q: "Comment s'écrit « neuf cent six » ?", options: ["960", "906", "9006"], answer: 1, explain: "Neuf centaines, zéro dizaine, six unités : 906." },
      { type: "tf", q: "305 et 350 sont le même nombre.", answer: false, explain: "305 a 0 dizaine et 5 unités ; 350 a 5 dizaines et 0 unité." },
      { type: "num", q: "Quel est le précédent de 800 ?", answer: 799, explain: "800 − 1 = 799." },
      { type: "mc", q: "Quelle décomposition est juste pour 608 ?", options: ["600 + 80", "600 + 8", "60 + 8"], answer: 1, explain: "6 h, 0 da, 8 u = 600 + 8." },
      { type: "order", q: "Range du plus petit au plus grand.", items: ["98", "189", "198", "891", "1000"], explain: "D'abord le nombre à deux chiffres, puis on compare les centaines, les dizaines, enfin 1000." },
      { type: "num", q: "Combien de dizaines y a-t-il dans 1000 ?", answer: 100, explain: "1000 : 10 = 100 dizaines." },
      { type: "mc", q: "Quel symbole va entre 457 … 475 ?", options: [">", "<", "="], answer: 1, explain: "Mêmes centaines ; dizaines 5 < 7 : 457 < 475." },
      { type: "text", q: "Écris en lettres le nombre 1000.", answer: ["mille"], explain: "1000 se lit « mille »." },
      { type: "num", q: "Luca a 3 boîtes de 100 vignettes, 4 pochettes de 10 et 6 vignettes seules. Combien de vignettes a-t-il ?", answer: 346, explain: "300 + 40 + 6 = 346." }
    ],
    gen: [["placeValue", 3]]
  }
});
