TOPIC('fr', {
  id: "p2-geo-mappe",
  title: "Plans et cartes",
  intro: "Imagine que tu es un <b>petit oiseau</b> 🐦 qui vole au-dessus de ta classe : que verrais-tu ? Seulement les <b>toits</b>, le <b>dessus</b> des tables et des chaises ! Aujourd'hui, nous apprenons à <b>voir d'en haut</b> et à lire des <b>plans</b>, des <b>cartes</b> et des <b>légendes</b> 🗺️.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Trois façons de regarder un objet 👀",
      html: `<p>Un même objet semble différent si tu le regardes de points de vue différents. Prends un <b>verre</b> 🥛 :</p>
<ul>
<li>👁️ <b>De face</b> (vue de face) : tu vois un rectangle.</li>
<li>↘️ <b>De biais</b> (vue oblique, un peu d'en haut) : tu vois le verre et un peu du bord rond.</li>
<li>⬇️ <b>D'en haut</b> (vue de dessus, « à vol d'oiseau ») : tu vois seulement un <b>cercle</b> !</li>
</ul>
<p>Les <b>plans</b> et les <b>cartes</b> se dessinent toujours <b>d'en haut</b>, comme les verrait un petit oiseau.</p>`
    },
    {
      type: "svg",
      title: "Une table vue de trois façons",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="40" y="110" width="140" height="18" fill="#b45309"/>
<rect x="50" y="128" width="14" height="80" fill="#92400e"/>
<rect x="156" y="128" width="14" height="80" fill="#92400e"/>
<polygon points="250,110 400,110 370,145 220,145" fill="#d97706"/>
<rect x="220" y="145" width="150" height="12" fill="#b45309"/>
<rect x="226" y="157" width="12" height="60" fill="#92400e"/>
<rect x="355" y="157" width="12" height="60" fill="#92400e"/>
<rect x="388" y="125" width="10" height="60" fill="#92400e"/>
<rect x="450" y="90" width="120" height="120" fill="#f59e0b" stroke="#92400e" stroke-width="4"/>
<text x="110" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">de face</text>
<text x="300" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">de biais</text>
<text x="510" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">d'en haut</text>
<text x="510" y="275" font-size="15" text-anchor="middle" fill="#475569">(comme sur un plan)</text>
<text x="300" y="40" font-size="22" text-anchor="middle" fill="#1e3a8a" font-weight="bold">La même table !</text>
</svg>`,
      caption: "D'en haut, la table devient un carré : on ne voit plus les pieds, ils sont cachés dessous."
    },
    {
      type: "3d",
      title: "Fais tourner le solide et regarde-le d'en haut 🔄",
      scene: "solid",
      options: { shape: "cube", shapes: ["cube", "cylinder", "cone", "pyramid", "sphere"], color: "#38bdf8" },
      caption: "Change de solide avec les boutons et fais-le tourner jusqu'à le voir exactement de dessus. Le cube devient un carré, le cylindre et le cône deviennent un cercle, la pyramide un carré avec un X !"
    },
    {
      type: "text",
      title: "Rapetisser : la réduction 🔍",
      html: `<p>Une vraie pièce est grande ; la feuille est petite. Pour la dessiner, nous devons tout <b>rapetisser</b> <b>de la même façon</b>. Cela s'appelle la <b>réduction à l'échelle</b>.</p>
<p>Une façon facile est d'utiliser les <b>carreaux</b> du cahier :</p>
<p style="font-size:1.1em">📏 <b>1 carreau = 1 pas</b> (ou 1 mètre)</p>
<p>Si le bureau de la maîtresse mesure 2 pas de long, tu le dessines long de <b>2 carreaux</b>. Si la classe mesure 8 pas de long, tu la dessines longue de <b>8 carreaux</b>. Ainsi tout reste <b>proportionné</b> : les grandes choses restent plus grandes, les petites plus petites.</p>`
    },
    {
      type: "widget",
      title: "Dessine le plan d'une pièce sur les carreaux",
      widget: "areaGrid",
      options: { w: 6, h: 4, max: 12 },
      caption: "Chaque carreau est 1 pas. Déplace les curseurs : combien de carreaux faut-il pour une pièce longue de 6 pas et large de 4 ?"
    },
    {
      type: "text",
      title: "Plan, carte, carte géographique 🗺️",
      html: `<p>Plus l'espace est grand, plus il faut rapetisser. Le nom du dessin change aussi :</p>
<table>
<tr><th>Nom</th><th>Ce qu'il montre</th><th>Exemple</th></tr>
<tr><td>📐 <b>Plan</b></td><td>un petit espace, avec beaucoup de détails</td><td>ta chambre, la classe, une maison</td></tr>
<tr><td>🗺️ <b>Carte</b> (plan de ville)</td><td>un espace plus grand : rues, places, parcs</td><td>le quartier, le centre-ville</td></tr>
<tr><td>🌍 <b>Carte géographique</b></td><td>de très grands espaces : régions, États, continents</td><td>la carte de l'Italie, le globe terrestre</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : vu d'en haut",
      questions: [
        { type: "mc", q: "Vu d'en haut, un ballon ressemble à…", options: ["un carré", "un cercle", "un triangle"], answer: 1, explain: "Le ballon vu de dessus se voit comme un cercle." },
        { type: "mc", q: "Comment s'appelle le dessin d'une pièce vue d'en haut ?", options: ["Plan", "Portrait", "Bande dessinée"], answer: 0, explain: "C'est le plan." },
        { type: "num", q: "1 carreau = 1 pas. Une armoire large de 3 pas : combien de carreaux ?", answer: 3, tol: 0, unit: "carreaux", explain: "3 pas = 3 carreaux." }
      ]
    },
    {
      type: "text",
      title: "La légende : le dictionnaire de la carte 🔑",
      html: `<p>Sur les plans et les cartes, on ne dessine pas tout avec précision : on utilise des <b>symboles</b> 🔣 (petits dessins, couleurs, lignes).</p>
<p>Pour comprendre ce que veut dire chaque symbole, il y a la <b>légende</b> : un encadré, en général dans un coin, qui explique tous les symboles. C'est comme un petit <b>dictionnaire</b> !</p>
<p>Certaines couleurs s'utilisent presque toujours de la même façon :</p>
<ul>
<li>🟦 <b>bleu</b> : l'eau (fleuves, lacs, mer) ;</li>
<li>🟩 <b>vert</b> : prés, parcs, plaines ;</li>
<li>🟫 <b>marron</b> : montagnes et collines ;</li>
<li>⬜ <b>gris</b> ou <b>blanc</b> : rues et places.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Une carte avec sa légende",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#ffffff"/>
<rect x="10" y="10" width="400" height="300" fill="#bbf7d0" stroke="#0f172a" stroke-width="2"/>
<path d="M10 220 C120 200 200 260 410 230" stroke="#3b82f6" stroke-width="16" fill="none"/>
<rect x="10" y="110" width="400" height="22" fill="#d1d5db"/>
<rect x="190" y="10" width="22" height="300" fill="#d1d5db"/>
<rect x="60" y="40" width="70" height="50" fill="#f87171" stroke="#7f1d1d" stroke-width="2"/>
<rect x="260" y="40" width="50" height="50" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
<circle cx="340" cy="170" r="16" fill="#15803d"/>
<circle cx="370" cy="160" r="16" fill="#15803d"/>
<circle cx="80" cy="165" r="16" fill="#15803d"/>
<rect x="430" y="10" width="160" height="300" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
<text x="510" y="38" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">LÉGENDE</text>
<rect x="445" y="60" width="28" height="22" fill="#f87171" stroke="#7f1d1d" stroke-width="2"/>
<text x="482" y="77" font-size="15" fill="#0f172a">école</text>
<rect x="445" y="100" width="28" height="22" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
<text x="482" y="117" font-size="15" fill="#0f172a">magasin</text>
<circle cx="459" cy="152" r="12" fill="#15803d"/>
<text x="482" y="157" font-size="15" fill="#0f172a">arbre</text>
<rect x="445" y="182" width="28" height="14" fill="#d1d5db"/>
<text x="482" y="195" font-size="15" fill="#0f172a">rue</text>
<rect x="445" y="222" width="28" height="12" fill="#3b82f6"/>
<text x="482" y="234" font-size="15" fill="#0f172a">rivière</text>
<rect x="445" y="258" width="28" height="22" fill="#bbf7d0" stroke="#0f172a" stroke-width="1"/>
<text x="482" y="275" font-size="15" fill="#0f172a">pré</text>
</svg>`,
      caption: "Grâce à la légende, tu comprends tout de suite où sont l'école, le magasin, les arbres et la rivière."
    },
    {
      type: "widget",
      title: "Associe le symbole à sa signification",
      widget: "match",
      options: {
        pairs: [
          ["🟦 ligne bleue", "rivière"],
          ["🟩 zone verte", "parc ou pré"],
          ["🔺 triangle marron", "montagne"],
          ["✝️ croix", "église"],
          ["🅿️ P bleu", "parking"],
          ["➕ croix verte", "pharmacie"]
        ]
      },
      caption: "Ce sont des symboles très utilisés sur les vraies cartes."
    },
    {
      type: "example",
      title: "Exemple pratique : le plan de ma classe ✏️",
      html: `<p>Voici comment Matteo dessine le plan de sa classe :</p>
<ol>
<li>👣 Il <b>mesure</b> la classe en pas : 8 pas de longueur, 6 de largeur.</li>
<li>📏 Sur le cahier, il dessine un rectangle de <b>8 × 6 carreaux</b>.</li>
<li>🚪 Il marque la <b>porte</b> et les <b>fenêtres</b> sur les bons côtés.</li>
<li>🟫 Il dessine les <b>tables</b> comme de petits rectangles, le <b>bureau</b> comme un rectangle plus grand, le <b>tableau</b> comme un trait épais sur le mur.</li>
<li>🔑 Il fait la <b>légende</b> : table = petit rectangle marron, bureau = rectangle bleu…</li>
</ol>
<p>Maintenant, un camarade d'une autre classe, en regardant le plan, sait où est la table de Matteo !</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : la chasse au trésor 🏴‍☠️",
      html: `<p>La maîtresse cache un trésor dans le jardin et donne aux enfants une <b>carte</b> :</p>
<ul>
<li>🌳 Trois cercles verts = les trois arbres.</li>
<li>🟫 Un rectangle marron = le banc.</li>
<li>❌ Une croix rouge = le trésor, entre le banc et le plus grand arbre.</li>
</ul>
<p>Les enfants <b>tournent la carte</b> jusqu'à ce que les dessins soient placés comme les vraies choses devant eux (on dit <b>orienter la carte</b>) et… ils trouvent le trésor ! 🎁</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? 🏛️",
      html: `<p>Il y a plus de <b>1 800 ans</b>, à Rome, on fit un gigantesque plan de la ville gravé dans le <b>marbre</b> : la <b>Forma Urbis</b>. Il mesurait environ <b>18 mètres</b> de large et <b>13</b> de haut, comme la façade d'un immeuble, et montrait chaque maison et chaque pièce ! Aujourd'hui, il n'en reste que des morceaux, et les archéologues essaient de les remettre ensemble comme un puzzle.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? 🛰️",
      html: `<p>Aujourd'hui, les cartes se font aussi avec les <b>photos de satellites</b>, qui tournent autour de la Terre à des centaines de kilomètres d'altitude et photographient tout <b>d'en haut</b>. Les applications de cartes sur le téléphone utilisent justement ces photos : tu peux voir le toit de ton école !</p>`
    },
    {
      type: "3d",
      title: "De la réalité à la carte : le paysage 3D",
      scene: "terrain",
      caption: "Fais tourner le paysage et regarde-le exactement de dessus : tu verras la montagne comme une tache marron, le lac et le fleuve comme des formes bleues, la plaine verte. C'est ainsi que naît une carte géographique !",
      options: {
        features: {
          mountain: { label: "Montagne", html: "Sur les cartes, elle se colorie en <b>marron</b> : plus il est foncé, plus elle est haute." },
          hill: { label: "Colline", html: "Sur les cartes, elle est d'un marron clair ou jaune." },
          plain: { label: "Plaine", html: "Sur les cartes, elle se colorie en <b>vert</b>." },
          river: { label: "Fleuve", html: "Sur les cartes, c'est une <b>ligne bleue</b> qui s'élargit vers la mer." },
          lake: { label: "Lac", html: "Sur les cartes, c'est une tache <b>bleue</b> fermée." },
          sea: { label: "Mer", html: "Sur les cartes, elle est <b>bleue</b> : plus elle est foncée, plus elle est profonde." }
        }
      }
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les cartes",
      intro: "Les cartes te semblent difficiles ? Essaie avec ces autres façons.",
      tabs: [
        {
          label: "🧱 Avec des briques",
          html: `<p>Construis ta chambre avec des <b>briques</b> ou de petites boîtes : une brique longue pour le lit, une carrée pour la table de nuit…</p>
<p>Puis pose-les sur une <b>feuille</b> et <b>repasse</b> au crayon le contour de chaque brique. Enlève les briques : sur la feuille, il reste le <b>plan</b> de ta chambre ! C'est exactement comme la voir d'en haut.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 1 }
        },
        {
          label: "🔦 Le jeu des ombres",
          html: `<p>Dans le noir, place une lampe de poche <b>exactement au-dessus</b> d'un objet (une tasse, un jouet). L'<b>ombre</b> sur la table est la forme que tu verrais d'en haut !</p>
<ul>
<li>☕ la tasse fait une ombre en cercle ;</li>
<li>📦 une boîte fait une ombre en rectangle ;</li>
<li>🧸 un ourson fait une ombre en tache.</li>
</ul>
<p>Les plans sont un peu comme les « ombres d'en haut » des choses.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#1e293b"/>
<rect x="270" y="10" width="60" height="30" rx="6" fill="#facc15"/>
<polygon points="280,40 320,40 420,200 180,200" fill="#fef9c3" opacity="0.25"/>
<rect x="265" y="120" width="70" height="60" fill="#60a5fa"/>
<ellipse cx="300" cy="205" rx="45" ry="14" fill="#0f172a"/>
<rect x="0" y="200" width="600" height="40" fill="#78350f"/>
<ellipse cx="300" cy="215" rx="50" ry="12" fill="#1c1917"/>
<text x="480" y="90" font-size="17" fill="#fef9c3" text-anchor="middle">lampe au-dessus</text>
<text x="480" y="225" font-size="17" fill="#fef9c3" text-anchor="middle">ombre = forme vue d'en haut</text>
</svg>`
        },
        {
          label: "🌍 Les cartes d'autres peuples",
          html: `<p>Dans le monde, on a fait des cartes de plein de façons :</p>
<ul>
<li>🐚 Les habitants des <b>îles Marshall</b> (océan Pacifique) construisaient des <b>cartes avec des bâtonnets et des coquillages</b> : les coquillages étaient les îles, les bâtonnets montraient comment bougent les vagues.</li>
<li>🏺 En <b>Mésopotamie</b> (l'actuel Irak), il y a environ 2 600 ans, on grava sur une tablette d'argile l'une des plus anciennes « cartes du monde ».</li>
<li>📜 La <b>Table de Peutinger</b> est une copie médiévale d'une carte romaine des routes : elle mesure presque <b>7 mètres</b> de long et seulement 34 cm de large, comme un très long rouleau !</li>
</ul>`
        },
        {
          label: "🧩 Lis le plan du parc",
          html: `<p>Regarde le petit plan et clique sur les points : peux-tu dire ce qu'est chaque chose, en regardant seulement la forme vue d'en haut ?</p>`,
          widget: "labelDiagram",
          options: {
            svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#bbf7d0"/>
<path d="M0 150 L600 150" stroke="#d6d3d1" stroke-width="26"/>
<ellipse cx="130" cy="70" rx="80" ry="40" fill="#60a5fa"/>
<circle cx="330" cy="70" r="22" fill="#15803d"/>
<circle cx="380" cy="80" r="22" fill="#15803d"/>
<rect x="470" y="210" width="80" height="20" fill="#a16207"/>
<rect x="100" y="210" width="90" height="60" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<circle cx="320" cy="240" r="30" fill="#e5e7eb" stroke="#64748b" stroke-width="4"/>
</svg>`,
            spots: [
              { x: 130, y: 70, label: "Petit étang" },
              { x: 355, y: 75, label: "Arbres" },
              { x: 300, y: 150, label: "Allée" },
              { x: 510, y: 220, label: "Banc" },
              { x: 145, y: 240, label: "Bac à sable" },
              { x: 320, y: 240, label: "Fontaine" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des cartes",
      nodes: [
        { id: "alto", label: "Vue d'en haut", x: 50, y: 6, color: "#6366f1", html: "<p>Regarder les choses de dessus, comme un petit oiseau.</p>", why: "<p>D'en haut, on voit toutes les choses <b>ensemble</b> et à leur vraie position, sans que l'une cache l'autre. C'est pour cela que les cartographes (ceux qui font les cartes) dessinent toujours d'en haut.</p>" },
        { id: "riduzione", label: "Réduction à l'échelle", x: 20, y: 30, color: "#f97316", html: "<p>Rapetisser tout de la même façon.</p>", why: "<p>Une feuille ne peut pas être aussi grande qu'une ville ! En rapetissant tout <b>avec la même mesure</b> (par exemple 1 carreau = 1 mètre), les formes et les distances restent justes.</p>" },
        { id: "simboli", label: "Symboles", x: 50, y: 30, color: "#0ea5e9", html: "<p>Petits dessins, couleurs et lignes à la place des vraies choses.</p>", why: "<p>Si nous dessinions chaque maison avec toutes ses fenêtres, la carte serait confuse. Les symboles sont <b>simples</b> et rapides à reconnaître.</p>" },
        { id: "legenda", label: "Légende", x: 80, y: 30, color: "#a855f7", html: "<p>L'encadré qui explique les symboles.</p>", why: "<p>Le mot vient du latin <i>legenda</i>, « les choses à lire ». Sans légende, les symboles seraient un code secret !</p>" },
        { id: "pianta", label: "Plan", x: 20, y: 62, color: "#16a34a", html: "<p>Petits espaces : une pièce, une maison, l'école.</p>", why: "<p>On réduit peu, donc on voit beaucoup de détails : portes, fenêtres, meubles. Les <b>architectes</b> dessinent les plans avant de construire une maison.</p>" },
        { id: "mappa", label: "Carte (plan de ville)", x: 50, y: 62, color: "#eab308", html: "<p>Espaces plus grands : le quartier, la ville.</p>", why: "<p>On réduit davantage : les maisons deviennent de petits rectangles et l'on voit surtout les rues, les places et les parcs.</p>" },
        { id: "carta", label: "Carte géographique", x: 80, y: 62, color: "#ef4444", html: "<p>Très grands espaces : l'Italie, les continents.</p>", why: "<p>On réduit énormément : une ville devient un petit point. Le géographe grec <b>Ptolémée</b>, il y a environ 1 900 ans, écrivit comment dessiner le monde avec des parallèles et des méridiens.</p>" },
        { id: "colori", label: "Couleurs conventionnelles", x: 50, y: 92, color: "#14b8a6", html: "<p>Bleu = eau, vert = plaine, marron = montagne.</p>", why: "<p>« Conventionnel » veut dire <b>décidé tous ensemble</b>. Si tout le monde utilise les mêmes couleurs, n'importe qui dans le monde peut lire une carte sans connaître la langue de celui qui l'a faite.</p>" }
      ],
      edges: [
        ["alto", "riduzione", "puis on fait la"],
        ["alto", "simboli", "on utilise des"],
        ["simboli", "legenda", "expliqués dans la"],
        ["riduzione", "pianta", "petite :"],
        ["riduzione", "mappa", "plus grande :"],
        ["riduzione", "carta", "énorme :"],
        ["simboli", "colori", "comme les"],
        ["carta", "colori", "utilise les"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : la légende",
      questions: [
        { type: "mc", q: "À quoi sert la légende ?", options: ["À expliquer les symboles de la carte", "À colorier la carte", "À mesurer la température"], answer: 0, explain: "La légende est le « dictionnaire » des symboles." },
        { type: "mc", q: "En général, sur les cartes, le bleu indique…", options: ["les montagnes", "l'eau", "les routes"], answer: 1, explain: "Bleu = mers, lacs et fleuves." },
        { type: "tf", q: "Pour dessiner le quartier, on utilise la même réduction que pour la chambre.", answer: false, explain: "Le quartier est plus grand : il faut réduire davantage." }
      ]
    },
    {
      type: "remember",
      title: "À retenir 📌",
      html: `<ul>
<li>Les plans et les cartes montrent les lieux <b>vus d'en haut</b>.</li>
<li>Pour les dessiner, on <b>rapetisse</b> tout de la même façon (réduction à l'échelle).</li>
<li><b>Plan</b> = petits espaces ; <b>carte</b> = espaces plus grands ; <b>carte géographique</b> = très grands espaces.</li>
<li>Les <b>symboles</b> sont expliqués dans la <b>légende</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Plan", d: "Dessin d'en haut d'un petit espace, comme une pièce." },
    { t: "Carte", d: "Dessin d'en haut d'un espace plus grand, comme un quartier." },
    { t: "Carte géographique", d: "Dessin de territoires très grands : régions, États, continents." },
    { t: "Vue de dessus", d: "Regarder d'en haut, exactement de dessus." },
    { t: "Réduction à l'échelle", d: "Rapetisser tout de la même façon pour que cela tienne sur la feuille." },
    { t: "Symbole", d: "Un petit dessin ou une couleur qui remplace une vraie chose." },
    { t: "Légende", d: "L'encadré qui explique ce que veulent dire les symboles." },
    { t: "Cartographe", d: "La personne qui dessine les cartes." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Vu d'en haut, un verre ressemble à…", options: ["un rectangle", "un cercle", "une étoile"], answer: 1, explain: "De dessus, on voit le bord rond : un cercle." },
      { type: "mc", q: "Comment s'appelle la vue « à vol d'oiseau », exactement de dessus ?", options: ["De face", "De dessus", "De côté"], answer: 1, explain: "Vue de dessus = d'en haut." },
      { type: "text", q: "Comment s'appelle l'encadré qui explique les symboles d'une carte ?", answer: ["légende", "la légende", "legende"], explain: "La légende." },
      { type: "order", q: "Mets dans l'ordre, du dessin de l'espace le plus petit au plus grand.", items: ["Plan de la chambre", "Carte du quartier", "Carte géographique de l'Italie"], explain: "Plan → carte → carte géographique." },
      { type: "num", q: "1 carreau = 1 pas. La classe mesure 9 pas de long. Combien de carreaux dessines-tu ?", answer: 9, tol: 0, unit: "carreaux", explain: "9 pas = 9 carreaux." },
      { type: "tf", q: "Sur les cartes géographiques, la plaine est souvent coloriée en vert.", answer: true, explain: "Vert = plaine, marron = montagne, bleu = eau." },
      { type: "mc", q: "Vu d'en haut, un lit ressemble à…", options: ["un rectangle", "un cercle", "un triangle"], answer: 0, explain: "Le lit vu de dessus est un rectangle." },
      { type: "mc", q: "Pourquoi utilise-t-on des symboles sur les cartes ?", options: ["Pour les rendre plus faciles à lire", "Pour les cacher aux pirates", "Parce que les vrais dessins sont interdits"], answer: 0, explain: "Les symboles sont simples et rapides à reconnaître." },
      { type: "tf", q: "Rapetisser « à l'échelle » veut dire rapetisser chaque chose de façon différente.", answer: false, explain: "Tout doit être rapetissé de la même façon, pour que les proportions restent justes." },
      { type: "order", q: "Mets dans l'ordre les étapes pour dessiner le plan de la classe.", items: ["Je mesure la classe en pas", "Je dessine le contour sur les carreaux", "Je dessine portes, fenêtres et tables", "Je fais la légende"], explain: "D'abord on mesure, puis on dessine le contour, puis l'intérieur, enfin on explique les symboles." },
      { type: "mc", q: "Qu'était la Forma Urbis ?", options: ["Un plan de Rome gravé dans le marbre", "Une appli de cartes", "Une boussole romaine"], answer: 0, explain: "Un gigantesque plan en marbre de la Rome antique." }
    ]
  }
});
