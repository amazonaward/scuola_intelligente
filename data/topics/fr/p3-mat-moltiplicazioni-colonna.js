TOPIC('fr', {
  id: "p3-mat-moltiplicazioni-colonna",
  title: "Les multiplications posées",
  intro: "Tu connais les tables ? Alors tu es prêt à multiplier aussi les grands nombres ! ✖️ Apprenons la <b>multiplication posée</b> avec un chiffre et avec deux chiffres, la <b>retenue</b>, la <b>preuve</b>… et découvrons comment on multiplie au Japon, en Russie et comment on faisait au temps des Égyptiens.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Révisons : qu'est-ce que la multiplication ?",
      html: `<p>La <b>multiplication</b> est une <b>addition répétée</b> de nombres égaux : 4 × 3 = 4 + 4 + 4 = 12.</p>
<ul>
<li>Les nombres que l'on multiplie s'appellent les <b>facteurs</b>.</li>
<li>Le résultat s'appelle le <b>produit</b>.</li>
</ul>
<p>Propriétés utiles :</p>
<ul>
<li><b>Commutativité</b> : si on change l'ordre des facteurs, le produit ne change pas : 4 × 3 = 3 × 4.</li>
<li><b>Distributivité</b> : je peux « casser » un facteur : 23 × 4 = (20 × 4) + (3 × 4) = 80 + 12 = 92. C'est justement le secret de la multiplication posée !</li>
<li>Multiplier par <b>10</b> : on ajoute un <b>zéro</b> à la fin : 34 × 10 = 340. Chaque chiffre se déplace d'une place vers la gauche (les unités deviennent des dizaines…).</li>
</ul>`
    },
    {
      type: "3d",
      title: "La multiplication est un rectangle",
      scene: "blocks",
      options: { mode: "array", a: 3, b: 4 },
      caption: "3 rangées de 4 cubes = 12 cubes. Tourne le rectangle : il devient 4 rangées de 3, mais il y a toujours 12 cubes (commutativité). Utilise les curseurs pour changer les facteurs."
    },
    {
      type: "text",
      title: "Posée, avec un chiffre au multiplicateur",
      html: `<p>Calculons <b>247 × 3</b>. On aligne les nombres en colonnes et on multiplie en <b>partant des unités</b>, de droite à gauche :</p>
<ol>
<li><b>Unités</b> : 3 × 7 = 21 → j'écris <b>1</b> aux unités et je retiens <b>2</b> dizaines (la <b>retenue</b>) au-dessus des dizaines.</li>
<li><b>Dizaines</b> : 3 × 4 = 12, plus la retenue 2 = 14 → j'écris <b>4</b> et je retiens <b>1</b> au-dessus des centaines.</li>
<li><b>Centaines</b> : 3 × 2 = 6, plus la retenue 1 = <b>7</b> → j'écris 7.</li>
</ol>
<p>Résultat : 247 × 3 = <b>741</b>.</p>
<p><b>Attention :</b> la retenue s'<b>ajoute après</b> avoir multiplié, pas avant ! (3 × 4 + 2, et non 3 × 6.)</p>`
    },
    {
      type: "svg",
      title: "247 × 3 pas à pas",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<g font-size="20" font-weight="bold" fill="#8b5cf6" text-anchor="middle"><text x="110" y="30">h</text></g>
<g font-size="20" font-weight="bold" fill="#3b82f6" text-anchor="middle"><text x="160" y="30">da</text></g>
<g font-size="20" font-weight="bold" fill="#22c55e" text-anchor="middle"><text x="210" y="30">u</text></g>
<text x="110" y="62" font-size="22" font-weight="bold" fill="#dc2626" text-anchor="middle">1</text>
<text x="160" y="62" font-size="22" font-weight="bold" fill="#dc2626" text-anchor="middle">2</text>
<g font-size="44" font-family="monospace" text-anchor="middle" fill="#1f2937">
<text x="110" y="110">2</text><text x="160" y="110">4</text><text x="210" y="110">7</text>
<text x="60" y="165">×</text><text x="210" y="165">3</text>
</g>
<line x1="40" y1="182" x2="240" y2="182" stroke="#1f2937" stroke-width="4"/>
<g font-size="44" font-family="monospace" text-anchor="middle" font-weight="bold" fill="#b45309">
<text x="110" y="235">7</text><text x="160" y="235">4</text><text x="210" y="235">1</text>
</g>
<g font-size="20" fill="#1f2937">
<text x="290" y="80">① 3 × 7 = 21 → j'écris 1, je retiens 2</text>
<text x="290" y="135">② 3 × 4 = 12, + 2 = 14</text>
<text x="320" y="160">→ j'écris 4, je retiens 1</text>
<text x="290" y="215">③ 3 × 2 = 6, + 1 = 7</text>
</g>
<text x="300" y="285" font-size="18" text-anchor="middle" fill="#dc2626">Les petits nombres rouges sont les retenues.</text>
</svg>`,
      caption: "On part toujours des unités ; les retenues s'écrivent en petit au-dessus de la colonne suivante."
    },
    {
      type: "quiz",
      title: "Mini-quiz : avec un chiffre",
      questions: [
        { type: "num", q: "Combien font 132 × 3 ?", answer: 396, explain: "3 × 2 = 6 ; 3 × 3 = 9 ; 3 × 1 = 3 → 396 (aucune retenue)." },
        { type: "num", q: "Combien font 58 × 4 ?", answer: 232, explain: "4 × 8 = 32, j'écris 2 et je retiens 3 ; 4 × 5 = 20 + 3 = 23 → 232." },
        { type: "mc", q: "Dans 46 × 7, après avoir fait 7 × 6 = 42, combien je retiens ?", options: ["2", "4", "42"], answer: 1, explain: "J'écris 2 aux unités et je retiens 4 dizaines." }
      ]
    },
    {
      type: "text",
      title: "Posée, avec deux chiffres au multiplicateur",
      html: `<p>Calculons <b>34 × 12</b>. Le multiplicateur 12 = <b>1 dizaine et 2 unités</b>, donc nous faisons <b>deux multiplications</b> puis nous les additionnons :</p>
<ol>
<li><b>Première ligne</b> – je multiplie par les <b>unités</b> (2) : 34 × 2 = <b>68</b>.</li>
<li><b>Deuxième ligne</b> – je multiplie par les <b>dizaines</b> (1, qui vaut 10) : j'écris d'abord un <b>0</b> (ou un tiret « – ») à la place des unités, parce que je multiplie par 10 ; puis 34 × 1 = 34 → la ligne devient <b>340</b>.</li>
<li><b>J'additionne</b> les deux lignes (les <b>produits partiels</b>) : 68 + 340 = <b>408</b>.</li>
</ol>
<p>Pourquoi le zéro ? Parce que 34 × 12 = 34 × 2 + 34 × <b>10</b>. La deuxième ligne est 34 × 10 = 340, pas 34 !</p>`
    },
    {
      type: "svg",
      title: "34 × 12 : les deux produits partiels",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#eff6ff"/>
<g font-size="40" font-family="monospace" text-anchor="middle" fill="#1f2937">
<text x="160" y="55">3</text><text x="200" y="55">4</text>
<text x="70" y="105">×</text><text x="160" y="105">1</text><text x="200" y="105">2</text>
</g>
<line x1="60" y1="120" x2="230" y2="120" stroke="#1f2937" stroke-width="4"/>
<g font-size="40" font-family="monospace" text-anchor="middle" fill="#2563eb">
<text x="160" y="170">6</text><text x="200" y="170">8</text>
</g>
<g font-size="40" font-family="monospace" text-anchor="middle" fill="#16a34a">
<text x="120" y="220">3</text><text x="160" y="220">4</text>
</g>
<text x="200" y="220" font-size="40" font-family="monospace" text-anchor="middle" fill="#dc2626">0</text>
<line x1="60" y1="235" x2="230" y2="235" stroke="#1f2937" stroke-width="4"/>
<text x="70" y="200" font-size="34" text-anchor="middle" fill="#1f2937">+</text>
<g font-size="40" font-family="monospace" text-anchor="middle" font-weight="bold" fill="#b45309">
<text x="120" y="285">4</text><text x="160" y="285">0</text><text x="200" y="285">8</text>
</g>
<g font-size="20">
<text x="270" y="170" fill="#2563eb">← 34 × 2 unités = 68</text>
<text x="270" y="210" fill="#16a34a">← 34 × 1 dizaine = 340</text>
<text x="290" y="236" fill="#dc2626">(le 0 rouge : × 10)</text>
<text x="270" y="285" fill="#b45309">← somme : 68 + 340 = 408</text>
</g>
</svg>`,
      caption: "Chaque chiffre du multiplicateur donne une ligne. La ligne des dizaines se décale d'une place vers la gauche."
    },
    {
      type: "text",
      title: "Un exemple avec des retenues, et la preuve",
      html: `<p><b>56 × 23</b> :</p>
<ol>
<li>56 × <b>3</b> : 3 × 6 = 18 (j'écris 8, je retiens 1) ; 3 × 5 = 15 + 1 = 16 → <b>168</b>.</li>
<li>56 × <b>2</b> dizaines : j'écris 0 ; 2 × 6 = 12 (j'écris 2, je retiens 1) ; 2 × 5 = 10 + 1 = 11 → <b>1120</b>.</li>
<li>168 + 1120 = <b>1288</b>.</li>
</ol>
<p><b>Conseil :</b> quand tu passes à la deuxième ligne, <b>efface les retenues</b> de la première, pour ne pas les confondre !</p>
<p><b>La preuve</b> : grâce à la commutativité, tu peux refaire le calcul en échangeant les facteurs : 23 × 56 doit donner encore 1288. Tu peux aussi faire une <b>estimation</b> : 56 × 23 vaut environ 60 × 20 = 1200, donc 1288 est un résultat raisonnable. Si tu avais trouvé 128 ou 12 880, tu aurais tout de suite compris qu'il y avait une erreur !</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : la sortie scolaire",
      html: `<p>Pour la sortie, <b>4 autocars</b> partent. Chaque autocar a <b>54 places</b>. Combien d'enfants peuvent partir au maximum ?</p>
<p>54 × 4 : 4 × 4 = 16 (j'écris 6, je retiens 1) ; 4 × 5 = 20 + 1 = 21 → <b>216 enfants</b>.</p>
<p>Le billet pour le musée coûte <b>12 €</b> par enfant. Si 216 enfants partent, combien dépense-t-on ?</p>
<p>216 × 12 : 216 × 2 = 432 ; 216 × 10 = 2160 ; 432 + 2160 = <b>2592 €</b>.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : les œufs au magasin",
      html: `<p>Un commerçant reçoit <b>18 boîtes</b> d'œufs. Dans chaque boîte, il y a <b>6 rangées de 5 œufs</b>, c'est-à-dire 30 œufs. Combien d'œufs en tout ?</p>
<p>D'abord chaque boîte : 6 × 5 = 30. Puis toutes les boîtes : 30 × 18.</p>
<p>Posée : 30 × 8 = 240 ; 30 × 1 dizaine = 300 ; 240 + 300 = <b>540 œufs</b>.</p>
<p>Astuce : 30 × 18 = 3 × 18 × 10 = 54 × 10 = 540. Même résultat !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Qui a inventé le signe ×",
      html: `<p>Le signe <b>×</b> a été utilisé pour la première fois dans un livre imprimé par le mathématicien anglais <b>William Oughtred</b>, en <b>1631</b>. Le grand mathématicien allemand Leibniz ne l'aimait pas, parce qu'il se confondait avec la lettre x, et il préférait le <b>point</b> (3 · 4). Aujourd'hui encore, dans beaucoup de pays, et au collège, on utilise les deux !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La multiplication « par jalousie »",
      html: `<p>Dans l'Italie du XVe siècle, on multipliait avec une méthode à grille appelée « <b>par jalousie</b> » (<i>per gelosia</i>), parce que la grille ressemble aux grillages des fenêtres (les « jalousies ») par lesquels on pouvait regarder dehors sans être vu. On la trouve dans l'<b>Arithmétique de Trévise</b> (1478), l'un des premiers livres de mathématiques imprimés en Europe. Elle était venue du monde arabe et indien.</p>`
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>On commence toujours par les <b>unités</b>, de droite à gauche.</li>
<li>La <b>retenue</b> s'ajoute <b>après</b> avoir multiplié.</li>
<li>Avec deux chiffres : une ligne pour les unités, une ligne pour les dizaines avec le <b>0</b> (ou le tiret) à la place des unités.</li>
<li>À la fin, on <b>additionne</b> les produits partiels.</li>
<li>Preuve : échange les facteurs (commutativité) ou fais une estimation.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de multiplier",
      intro: "La méthode posée n'est pas la seule ! Dans le monde et dans l'histoire, on a multiplié de bien des façons. Essaie celle que tu préfères : toutes donnent le même résultat.",
      tabs: [
        {
          label: "🇯🇵 Méthode des lignes",
          html: `<p>Au Japon et en Chine, on enseigne aussi à multiplier en <b>dessinant des lignes</b>. Pour 23 × 12 : tu dessines 2 lignes et 3 lignes dans une direction (pour 23) et 1 ligne et 2 lignes dans l'autre direction (pour 12). Puis tu <b>comptes les croisements</b> dans chaque zone : à gauche les centaines, au centre les dizaines, à droite les unités. 2 | 7 | 6 → <b>276</b>.</p>`,
          widget: "lineMultiply",
          options: { a: 23, b: 12 }
        },
        {
          label: "🕌 Par jalousie (grille)",
          html: `<p>Tu dessines une grille avec une case pour chaque couple de chiffres, coupée en diagonale. Dans chaque case, tu écris le produit (dizaines en haut, unités en bas). Puis tu additionnes le long des diagonales, en partant de la droite. Pas de retenues pendant que tu multiplies ! 47 × 36 = <b>1692</b>.</p>`,
          widget: "lattice",
          options: { a: 47, b: 36 }
        },
        {
          label: "🇷🇺 Le paysan russe",
          html: `<p>Il suffit de savoir <b>diviser par deux</b> et <b>doubler</b> ! Tu écris les deux nombres en colonnes : à gauche tu divises par deux (en ignorant le reste), à droite tu doubles. Puis tu <b>barres</b> les lignes où il y a un nombre <b>pair</b> à gauche et tu additionnes ce qui reste à droite. 37 × 24 = <b>888</b>.</p>`,
          widget: "russianPeasant",
          options: { a: 37, b: 24 }
        },
        {
          label: "𓂀 Comme les Égyptiens",
          html: `<p>Les scribes égyptiens, il y a plus de 3500 ans, multipliaient seulement en <b>doublant</b> : 21, 42, 84, 168… Puis ils choisissaient les bons doubles et les additionnaient. Pour 13 × 21 : 13 = 1 + 4 + 8, donc 21 + 84 + 168 = <b>273</b>.</p>`,
          widget: "egyptianMultiply",
          options: { a: 13, b: 21 }
        },
        {
          label: "🟦 Le rectangle découpé",
          html: `<p>Beaucoup d'enseignants en Angleterre et aux États-Unis utilisent la « <b>méthode de la boîte</b> » (<i>box method</i>) : on découpe les nombres en dizaines et unités et on dessine un rectangle divisé en morceaux.</p>
<p>34 × 12 → (30 + 4) × (10 + 2) : quatre rectangles 300, 40, 60, 8. Somme : 300 + 40 + 60 + 8 = <b>408</b>. C'est exactement ce que fait la multiplication posée, mais là on le voit !</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#ffffff"/>
<text x="210" y="30" font-size="22" font-weight="bold" text-anchor="middle" fill="#1d4ed8">30</text>
<text x="400" y="30" font-size="22" font-weight="bold" text-anchor="middle" fill="#1d4ed8">4</text>
<text x="45" y="125" font-size="22" font-weight="bold" text-anchor="middle" fill="#15803d">10</text>
<text x="45" y="225" font-size="22" font-weight="bold" text-anchor="middle" fill="#15803d">2</text>
<rect x="80" y="45" width="260" height="150" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<rect x="340" y="45" width="120" height="150" fill="#fde68a" stroke="#1e3a8a" stroke-width="3"/>
<rect x="80" y="195" width="260" height="60" fill="#bbf7d0" stroke="#1e3a8a" stroke-width="3"/>
<rect x="340" y="195" width="120" height="60" fill="#fecaca" stroke="#1e3a8a" stroke-width="3"/>
<text x="210" y="128" font-size="30" font-weight="bold" text-anchor="middle" fill="#1e3a8a">300</text>
<text x="400" y="128" font-size="30" font-weight="bold" text-anchor="middle" fill="#78350f">40</text>
<text x="210" y="234" font-size="26" font-weight="bold" text-anchor="middle" fill="#14532d">60</text>
<text x="400" y="234" font-size="26" font-weight="bold" text-anchor="middle" fill="#7f1d1d">8</text>
<text x="530" y="130" font-size="22" text-anchor="middle" fill="#1f2937">= 408</text>
</svg>`
        },
        {
          label: "🧊 Cubes 3D",
          html: `<p>Une multiplication est un rectangle de cubes : 12 rangées de 4 = 48. Déplace les curseurs et observe : si tu doubles un facteur, le rectangle devient deux fois plus grand. En découpant le rectangle en deux morceaux (10 rangées + 2 rangées), tu vois les deux lignes de la multiplication posée !</p>`,
          scene: "blocks",
          options: { mode: "array", a: 12, b: 4, max: 12 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de la multiplication posée : touche un nœud et découvre pourquoi",
      nodes: [
        { id: "addizione", label: "Addition répétée", x: 50, y: 6, color: "#2563eb", html: "4 × 3 = 4 + 4 + 4.", why: "La multiplication naît comme un raccourci : au lieu d'additionner plusieurs fois le même nombre, on utilise une seule opération. Les Égyptiens et les Babyloniens l'utilisaient déjà il y a 4000 ans pour calculer les récoltes et les terrains." },
        { id: "tabelline", label: "Tables", x: 18, y: 26, color: "#f59e0b", html: "Les produits de 1 × 1 à 10 × 10.", why: "Ce sont les « briques » de tout calcul : chaque multiplication posée est faite de nombreuses petites tables. Le tableau s'appelle « pythagoricien » en l'honneur de Pythagore, même si des tables semblables existaient déjà à Babylone." },
        { id: "posizione", label: "Valeur de position", x: 82, y: 26, color: "#8b5cf6", html: "Chaque chiffre vaut u, da ou h selon la place.", why: "La méthode posée ne fonctionne que grâce au système de position indo-arabe avec le zéro, apporté en Europe par Fibonacci en 1202 : avec les chiffres romains, c'était presque impossible !" },
        { id: "distributiva", label: "Propriété distributive", x: 50, y: 45, color: "#16a34a", html: "34 × 12 = 34 × 10 + 34 × 2.", why: "C'est le vrai « pourquoi » de la multiplication posée : je casse un facteur en dizaines et unités, je multiplie les morceaux puis j'additionne. Chaque ligne de la colonne est un de ces morceaux." },
        { id: "riporto", label: "Retenue", x: 18, y: 62, color: "#dc2626", html: "Les dizaines en plus qui passent à la colonne de gauche.", why: "Si un produit dépasse 9, il ne tient pas dans une case : 10 unités deviennent 1 dizaine et « montent » à la place suivante. C'est l'échange du système décimal." },
        { id: "zero", label: "Le zéro (ou tiret)", x: 82, y: 62, color: "#64748b", html: "À la deuxième ligne, on met un 0 sous les unités.", why: "Quand je multiplie par le chiffre des dizaines, je multiplie par 10, 20, 30… : le résultat doit se décaler d'une place vers la gauche. Le 0 garde vide la place des unités." },
        { id: "parziali", label: "Produits partiels", x: 50, y: 74, color: "#0ea5e9", html: "Les lignes que l'on additionne ensuite : 68 et 340.", why: "Ce sont les morceaux de la propriété distributive écrits l'un sous l'autre, déjà alignés pour être additionnés." },
        { id: "commutativa", label: "Commutativité et preuve", x: 22, y: 90, color: "#a855f7", html: "a × b = b × a : je refais le calcul en échangeant les facteurs.", why: "Un rectangle de 3 × 4 cubes tourné devient 4 × 3 : les cubes restent les mêmes. C'est pour ça qu'échanger les facteurs est un excellent contrôle." },
        { id: "altri", label: "Autres méthodes", x: 78, y: 90, color: "#ec4899", html: "Lignes japonaises, jalousie, paysan russe, Égyptiens.", why: "Toutes utilisent les mêmes idées (doublement, distributivité, valeur de position) de façons différentes. La méthode posée s'est répandue en Europe parce qu'elle est rapide à écrire sur papier et prend peu de place." }
      ],
      edges: [
        ["addizione", "tabelline", "se mémorise dans les"],
        ["addizione", "posizione", "avec de grands nombres utilise la"],
        ["tabelline", "distributiva", "+"],
        ["posizione", "distributiva", "+"],
        ["distributiva", "riporto", "demande la"],
        ["distributiva", "zero", "pour les dizaines il faut le"],
        ["distributiva", "parziali", "produit les"],
        ["parziali", "commutativa", "se contrôlent avec la"],
        ["parziali", "altri", "se font aussi avec d'"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : avec deux chiffres",
      questions: [
        { type: "num", q: "Combien font 23 × 13 ?", answer: 299, explain: "23 × 3 = 69 ; 23 × 10 = 230 ; 69 + 230 = 299." },
        { type: "mc", q: "Dans 45 × 21, la deuxième ligne (pour les dizaines) est…", options: ["90", "900", "45"], answer: 1, explain: "45 × 2 dizaines = 45 × 20 = 900." },
        { type: "tf", q: "À la deuxième ligne, on écrit un 0 à la place des unités parce qu'on multiplie par les dizaines.", answer: true, explain: "Multiplier par 10, 20, 30… décale tout d'une place vers la gauche." }
      ]
    }
  ],
  glossary: [
    { t: "Multiplication", d: "Opération qui correspond à une addition répétée de nombres égaux." },
    { t: "Facteurs", d: "Les nombres que l'on multiplie." },
    { t: "Produit", d: "Le résultat de la multiplication." },
    { t: "Retenue", d: "Les dizaines (ou centaines) qui passent à la colonne de gauche quand un produit dépasse 9." },
    { t: "Produit partiel", d: "Chaque ligne obtenue en multipliant par un chiffre du multiplicateur." },
    { t: "Propriété commutative", d: "Si on change l'ordre des facteurs, le produit ne change pas." },
    { t: "Propriété distributive", d: "On peut casser un facteur et multiplier les parties : 23 × 4 = 20 × 4 + 3 × 4." },
    { t: "Estimation", d: "Calcul approché pour contrôler si le résultat est raisonnable." },
    { t: "Preuve", d: "Contrôle du résultat, par exemple en échangeant les facteurs." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Combien font 213 × 3 ?", answer: 639, explain: "3 × 3 = 9 ; 3 × 1 = 3 ; 3 × 2 = 6 → 639." },
      { type: "num", q: "Combien font 125 × 4 ?", answer: 500, explain: "4 × 5 = 20 (0, retenue 2) ; 4 × 2 = 8 + 2 = 10 (0, retenue 1) ; 4 × 1 = 4 + 1 = 5 → 500." },
      { type: "num", q: "Combien font 27 × 14 ?", answer: 378, explain: "27 × 4 = 108 ; 27 × 10 = 270 ; 108 + 270 = 378." },
      { type: "mc", q: "Par quel chiffre commence-t-on à multiplier en colonne ?", options: ["les centaines", "les unités", "les dizaines"], answer: 1, explain: "On part des unités, de droite à gauche." },
      { type: "tf", q: "La retenue s'ajoute avant de multiplier.", answer: false, explain: "D'abord on multiplie, ensuite on ajoute la retenue." },
      { type: "num", q: "Combien font 64 × 10 ?", answer: 640, explain: "En multipliant par 10, on ajoute un zéro." },
      { type: "mc", q: "Quel calcul sert à contrôler 36 × 15 = 540 ?", options: ["15 × 36", "36 + 15", "540 − 36"], answer: 0, explain: "Commutativité : en échangeant les facteurs, le produit doit être le même." },
      { type: "order", q: "Mets dans l'ordre les étapes de 34 × 12.", items: ["34 × 2 = 68", "j'écris 0 sous les unités", "34 × 1 = 34 → 340", "68 + 340 = 408"], explain: "D'abord les unités, puis les dizaines avec le zéro, enfin la somme." },
      { type: "num", q: "Un autocar a 52 places. Combien de places y a-t-il dans 6 autocars ?", answer: 312, explain: "52 × 6 : 6 × 2 = 12 (2, retenue 1) ; 6 × 5 = 30 + 1 = 31 → 312." },
      { type: "mc", q: "Une estimation de 48 × 21 est environ…", options: ["100", "1000", "10 000"], answer: 1, explain: "48 vaut environ 50, 21 environ 20 : 50 × 20 = 1000. Le résultat exact est 1008." },
      { type: "num", q: "Combien font 45 × 21 ?", answer: 945, explain: "45 × 1 = 45 ; 45 × 20 = 900 ; 45 + 900 = 945." }
    ],
    gen: [["mult2", 3]]
  }
});
