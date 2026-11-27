TOPIC('fr', {
  id: "l1-fis-grandezze-misure",
  title: "Grandeurs physiques et Système international",
  intro: "La physique commence quand on arrête de dire « c'est long », « c'est lourd », « c'est rapide » et qu'on commence à dire <b>combien</b>. Pour cela, il faut des <b>grandeurs</b>, des <b>unités de mesure</b> partagées par tous et une façon pratique d'écrire des nombres énormes ou minuscules. Dans cette leçon, nous voyons le <b>Système international (SI)</b>, les préfixes, les conversions, la <b>notation scientifique</b> et les <b>ordres de grandeur</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce qu'une grandeur physique ?",
      html: `<p>Une <b>grandeur physique</b> est une propriété d'un corps ou d'un phénomène que l'on peut <b>mesurer</b> : la longueur d'une table, la masse d'un sac à dos, la durée d'un cours, la température d'une pièce. Le « beau », le « sympathique », le « bon » ne sont pas des grandeurs physiques : il n'existe aucun instrument pour les mesurer de façon objective.</p>
<p><b>Mesurer</b> une grandeur, c'est <b>la comparer à une grandeur de même nature choisie comme étalon</b> (l'<b>unité de mesure</b>) et compter combien de fois celle-ci est contenue dans la première. Le résultat est un <b>nombre suivi d'une unité</b> :</p>
<p style="text-align:center"><b>mesure = nombre × unité</b>, par exemple l = 3,2 m</p>
<p>Sans unité, un nombre n'a aucun sens en physique : « 5 » peut être 5 mètres, 5 secondes ou 5 kilos. Les grandeurs physiques se divisent en :</p>
<ul>
<li><b>grandeurs fondamentales</b> (ou de base) : choisies comme point de départ (longueur, masse, temps…) ;</li>
<li><b>grandeurs dérivées</b> : obtenues en combinant les grandeurs fondamentales par des produits et des quotients (aire, volume, vitesse, masse volumique…).</li>
</ul>`
    },
    {
      type: "text",
      title: "Le Système international (SI)",
      html: `<p>Pendant des siècles, chaque pays, et parfois chaque ville, utilisait ses propres unités (pieds, coudées, livres, onces…). En 1960, la Conférence générale des poids et mesures a adopté le <b>Système international d'unités</b>, utilisé aujourd'hui par toute la communauté scientifique. Il comporte <b>sept grandeurs de base</b> :</p>
<table>
<tr><th>Grandeur</th><th>Unité</th><th>Symbole</th></tr>
<tr><td>Longueur</td><td>mètre</td><td>m</td></tr>
<tr><td>Masse</td><td>kilogramme</td><td>kg</td></tr>
<tr><td>Temps</td><td>seconde</td><td>s</td></tr>
<tr><td>Intensité du courant électrique</td><td>ampère</td><td>A</td></tr>
<tr><td>Température thermodynamique</td><td>kelvin</td><td>K</td></tr>
<tr><td>Quantité de matière</td><td>mole</td><td>mol</td></tr>
<tr><td>Intensité lumineuse</td><td>candela</td><td>cd</td></tr>
</table>
<p>Au programme de première année, on utilise surtout les trois premières : <b>longueur, masse, temps</b>.</p>`
    },
    {
      type: "widget",
      title: "De base ou dérivées ?",
      widget: "classify",
      options: { groups: ["De base (SI)", "Dérivée"], items: [
        ["Longueur", 0],
        ["Vitesse", 1],
        ["Masse", 0],
        ["Aire", 1],
        ["Temps", 0],
        ["Masse volumique", 1],
        ["Température (kelvin)", 0],
        ["Volume", 1],
        ["Force", 1]
      ] },
      caption: "Les grandeurs dérivées s'obtiennent à partir des grandeurs de base par des produits et des quotients."
    },
    {
      type: "text",
      title: "Comment on définit les unités",
      html: `<p>Au fil du temps, les définitions ont changé pour devenir toujours plus précises et reproductibles :</p>
<ul>
<li>le <b>mètre</b> est aujourd'hui défini comme la distance parcourue par la lumière dans le vide en <b>1/299 792 458 de seconde</b> ; en 1791, il avait été conçu comme la dix-millionième partie du quart du méridien terrestre ;</li>
<li>la <b>seconde</b> est la durée de <b>9 192 631 770 périodes</b> du rayonnement émis par un atome de césium 133 ;</li>
<li>le <b>kilogramme</b>, défini jusqu'en 2019 par un cylindre de platine iridié conservé à Sèvres (France), est défini depuis le 20 mai 2019 à partir de la <b>constante de Planck</b>.</li>
</ul>
<p>Aujourd'hui, toutes les unités SI reposent sur des <b>constantes fondamentales de la nature</b> : elles ne dépendent plus d'un objet qui pourrait s'abîmer.</p>`
    },
    {
      type: "text",
      title: "Les grandeurs dérivées",
      html: `<p>Les unités des grandeurs dérivées s'obtiennent en combinant les unités de base :</p>
<table>
<tr><th>Grandeur</th><th>Définition</th><th>Unité SI</th></tr>
<tr><td>Aire</td><td>longueur × longueur</td><td>m²</td></tr>
<tr><td>Volume</td><td>longueur × longueur × longueur</td><td>m³</td></tr>
<tr><td>Vitesse</td><td>distance / temps</td><td>m/s</td></tr>
<tr><td>Masse volumique</td><td>masse / volume</td><td>kg/m³</td></tr>
<tr><td>Force (nous l'étudierons)</td><td>masse × accélération</td><td>newton : N = kg·m/s²</td></tr>
</table>
<p>Pour vérifier si une formule est correcte, on fait une <b>analyse dimensionnelle</b> : les unités doivent être cohérentes. Exemple : la vitesse est une distance divisée par un temps, donc la formule <i>v = d / t</i> a pour unité m/s. Si l'on écrivait <i>v = d · t</i>, on obtiendrait des m·s, ce qui n'est pas une vitesse.</p>`
    },
    {
      type: "remember",
      title: "Les règles pour écrire les mesures",
      html: `<ul>
<li>Le symbole de l'unité s'écrit <b>sans point</b> et <b>sans pluriel</b> : 5 kg et non « 5 kg. » ni « 5 kgs ».</li>
<li>On laisse une espace entre le nombre et l'unité : 12 m.</li>
<li>Les symboles d'unités qui viennent d'un nom propre prennent une <b>majuscule</b> (N pour Newton, K pour Kelvin, A pour Ampère), les autres sont en minuscules (m, kg, s).</li>
<li>En Italie comme en France, le séparateur décimal est la virgule : 3,5 m.</li>
</ul>`
    },
    {
      type: "text",
      title: "Multiples et sous-multiples",
      html: `<p>Quand une grandeur est beaucoup plus grande ou plus petite que l'unité, on utilise des <b>préfixes</b>, qui multiplient l'unité par une puissance de 10 :</p>
<table>
<tr><th>Préfixe</th><th>Symbole</th><th>Facteur</th></tr>
<tr><td>téra</td><td>T</td><td>10¹²</td></tr>
<tr><td>giga</td><td>G</td><td>10⁹</td></tr>
<tr><td>méga</td><td>M</td><td>10⁶</td></tr>
<tr><td>kilo</td><td>k</td><td>10³</td></tr>
<tr><td>centi</td><td>c</td><td>10⁻²</td></tr>
<tr><td>milli</td><td>m</td><td>10⁻³</td></tr>
<tr><td>micro</td><td>μ</td><td>10⁻⁶</td></tr>
<tr><td>nano</td><td>n</td><td>10⁻⁹</td></tr>
<tr><td>pico</td><td>p</td><td>10⁻¹²</td></tr>
</table>
<p>Exemples : 1 km = 10³ m ; 1 mm = 10⁻³ m ; 1 Go = 10⁹ octets ; 1 nm = 10⁻⁹ m (une fraction du diamètre d'un virus).</p>
<p>Attention au <b>kilogramme</b> : c'est la seule unité SI de base qui contient déjà un préfixe. Les multiples et sous-multiples se forment à partir du gramme (1 mg = 10⁻³ g = 10⁻⁶ kg).</p>`
    },
    {
      type: "widget",
      title: "Préfixes et puissances de 10",
      widget: "match",
      options: { pairs: [
        ["kilo (k)", "10³"],
        ["méga (M)", "10⁶"],
        ["giga (G)", "10⁹"],
        ["milli (m)", "10⁻³"],
        ["micro (μ)", "10⁻⁶"],
        ["nano (n)", "10⁻⁹"]
      ] },
      caption: "Associe chaque préfixe à son facteur."
    },
    {
      type: "svg",
      title: "L'échelle des préfixes",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Chaque marche vaut mille fois la précédente</text>
<line x1="30" y1="130" x2="610" y2="130" stroke="#334155" stroke-width="3"/>
<g fill="#2563eb"><circle cx="60" cy="130" r="9"/><circle cx="145" cy="130" r="9"/><circle cx="230" cy="130" r="9"/><circle cx="315" cy="130" r="9"/><circle cx="400" cy="130" r="9"/><circle cx="485" cy="130" r="9"/><circle cx="570" cy="130" r="9"/></g>
<g font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">
<text x="60" y="108">nano</text><text x="145" y="108">micro</text><text x="230" y="108">milli</text><text x="315" y="108">unité</text><text x="400" y="108">kilo</text><text x="485" y="108">méga</text><text x="570" y="108">giga</text>
</g>
<g font-size="15" text-anchor="middle" fill="#1d4ed8">
<text x="60" y="160">10⁻⁹</text><text x="145" y="160">10⁻⁶</text><text x="230" y="160">10⁻³</text><text x="315" y="160">1</text><text x="400" y="160">10³</text><text x="485" y="160">10⁶</text><text x="570" y="160">10⁹</text>
</g>
<g font-size="14" text-anchor="middle" fill="#475569">
<text x="102" y="205">× 1000</text><text x="187" y="205">× 1000</text><text x="272" y="205">× 1000</text><text x="357" y="205">× 1000</text><text x="442" y="205">× 1000</text><text x="527" y="205">× 1000</text>
</g>
<text x="320" y="262" font-size="15" text-anchor="middle" fill="#0f172a">Pour passer au préfixe de droite : divise le nombre par 1000</text>
</g>
</svg>`,
      caption: "En allant vers la droite, la même quantité s'exprime par un nombre mille fois plus petit (1000 m = 1 km)."
    },
    {
      type: "example",
      title: "Les conversions en pratique",
      html: `<p><b>1)</b> Convertir 2,5 km en mètres : 2,5 × 10³ m = <b>2500 m</b>.</p>
<p><b>2)</b> Convertir 450 mm en mètres : 450 × 10⁻³ m = <b>0,45 m</b>.</p>
<p><b>3)</b> Convertir 36 km/h en m/s : 36 × 1000 m / 3600 s = <b>10 m/s</b>. Règle pratique : pour passer des km/h aux m/s, on divise par 3,6 ; pour l'inverse, on multiplie par 3,6.</p>
<p><b>4)</b> Aires et volumes : 1 m² = (10² cm)² = <b>10⁴ cm²</b> ; 1 m³ = <b>10⁶ cm³</b> ; 1 L = 1 dm³ = 10⁻³ m³. Attention : pour les aires et les volumes, les facteurs sont élevés au carré et au cube !</p>
<p><b>5)</b> Masse volumique : 1 g/cm³ = 10⁻³ kg / 10⁻⁶ m³ = <b>10³ kg/m³</b>. L'eau a une masse volumique d'environ 1000 kg/m³.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : unités et préfixes",
      questions: [
        { type: "num", q: "Combien de mètres font 3,2 km ?", answer: 3200, tol: 0, unit: "m", explain: "3,2 × 1000 = 3200 m." },
        { type: "num", q: "Convertis 72 km/h en m/s.", answer: 20, tol: 0, unit: "m/s", explain: "72 : 3,6 = 20 m/s." },
        { type: "tf", q: "Le kilogramme est l'unité de masse du Système international.", answer: true, explain: "Le kg est l'unité SI de masse." }
      ]
    },
    {
      type: "text",
      title: "La notation scientifique",
      html: `<p>Des nombres comme la masse de la Terre (5 970 000 000 000 000 000 000 000 kg) sont peu pratiques à écrire. On utilise la <b>notation scientifique</b> :</p>
<p style="text-align:center"><b>a × 10ⁿ</b> avec <b>1 ≤ a &lt; 10</b> et n entier</p>
<p>Pour écrire un nombre en notation scientifique, on déplace la virgule jusqu'à n'avoir qu'un seul chiffre non nul avant la virgule ; l'exposant n est le nombre de rangs dont on a déplacé la virgule (positif si le nombre était grand, négatif s'il était petit).</p>
<ul>
<li>45 000 = <b>4,5 × 10⁴</b> (virgule déplacée de 4 rangs vers la gauche)</li>
<li>0,00032 = <b>3,2 × 10⁻⁴</b> (virgule déplacée de 4 rangs vers la droite)</li>
<li>Masse de la Terre ≈ <b>5,97 × 10²⁴ kg</b></li>
<li>Masse de l'électron ≈ <b>9,11 × 10⁻³¹ kg</b></li>
</ul>
<p><b>Opérations.</b> Pour multiplier, on multiplie les nombres et on additionne les exposants : (2 × 10³)(3 × 10⁴) = 6 × 10⁷. Pour diviser, on soustrait les exposants : (8 × 10⁹)/(2 × 10³) = 4 × 10⁶. Pour additionner, il faut d'abord ramener les nombres à la même puissance de 10.</p>`
    },
    {
      type: "text",
      title: "L'ordre de grandeur",
      html: `<p>L'<b>ordre de grandeur</b> d'un nombre est la <b>puissance de 10 la plus proche</b> de ce nombre. Il sert à se faire rapidement une idée de « l'échelle » d'une grandeur et à faire des estimations.</p>
<p>Règle pratique : on écrit le nombre en notation scientifique a × 10ⁿ. Si <b>a &lt; 5</b>, l'ordre de grandeur est <b>10ⁿ</b> ; si <b>a ≥ 5</b>, c'est <b>10ⁿ⁺¹</b> (le seuil exact serait √10 ≈ 3,16, mais dans les manuels scolaires on utilise souvent 5).</p>
<ul>
<li>3,2 × 10⁴ → ordre de grandeur 10⁴</li>
<li>8 × 10⁴ → 10⁵</li>
<li>Diamètre d'un atome : ≈ 10⁻¹⁰ m. Diamètre d'un cheveu : ≈ 10⁻⁴ m. Taille d'une personne : ≈ 10⁰ m. Rayon terrestre : ≈ 10⁷ m (6,4 × 10⁶ m). Distance Terre-Soleil : ≈ 10¹¹ m (1,5 × 10¹¹ m).</li>
</ul>
<p>Deux grandeurs qui diffèrent de <b>n ordres de grandeur</b> ont un rapport d'environ 10ⁿ.</p>`
    },
    {
      type: "widget",
      title: "Du plus petit au plus grand",
      widget: "flashcards",
      options: { cards: [
        { front: "⚛️ Noyau atomique", back: "environ 10⁻¹⁵ m" },
        { front: "🔬 Atome", back: "environ 10⁻¹⁰ m" },
        { front: "🦠 Bactérie", back: "environ 10⁻⁶ m" },
        { front: "💇 Épaisseur d'un cheveu", back: "environ 10⁻⁴ m" },
        { front: "🧍 Un être humain", back: "environ 10⁰ m (1-2 m)" },
        { front: "🌍 Rayon de la Terre", back: "6,4 × 10⁶ m, ordre 10⁷ m" },
        { front: "☀️ Distance Terre-Soleil", back: "1,5 × 10¹¹ m" },
        { front: "✨ Une année-lumière", back: "environ 9,5 × 10¹⁵ m" },
        { front: "🌌 Diamètre de la Voie lactée", back: "environ 10²¹ m" }
      ] },
      caption: "Retourne les cartes : tout l'Univers observable tient en 36 ordres de grandeur."
    },
    {
      type: "example",
      title: "Estimer à vue d'œil : combien de fois bat le cœur ?",
      html: `<p>Une personne a environ <b>70 battements par minute</b>. Combien de battements en une vie de 80 ans ?</p>
<ol>
<li>Minutes dans une année : 60 × 24 × 365 ≈ 5,3 × 10⁵.</li>
<li>Minutes en 80 ans : 5,3 × 10⁵ × 80 ≈ 4,2 × 10⁷.</li>
<li>Battements : 70 × 4,2 × 10⁷ ≈ <b>3 × 10⁹</b>, soit environ <b>trois milliards</b>.</li>
</ol>
<p>L'ordre de grandeur est 10⁹ : pas besoin du nombre exact, il suffit de comprendre qu'on parle de milliards.</p>`
    },
    {
      type: "curiosity",
      title: "Le désastre de Mars Climate Orbiter",
      html: `<p>En 1999, la sonde de la NASA <b>Mars Climate Orbiter</b> s'est désintégrée dans l'atmosphère de Mars en tentant de se mettre en orbite, à une altitude bien plus basse que prévu. La cause : un logiciel fournissait les données de poussée en <b>livres-force</b> (unité anglo-saxonne), alors qu'un autre programme les attendait en <b>newtons</b> (SI). Une erreur d'unité a coûté environ 125 millions de dollars.</p>`
    },
    {
      type: "curiosity",
      title: "Un mètre né de la Révolution",
      html: `<p>Le système métrique décimal a été conçu en France pendant la Révolution, avec l'idée de créer des mesures « à tous les temps, à tous les peuples ». En 1791, l'Académie des sciences proposa de définir le mètre comme la <b>dix-millionième partie du quart du méridien terrestre</b>. Deux astronomes, Delambre et Méchain, mesurèrent l'arc de méridien entre Dunkerque et Barcelone, au prix de mille difficultés et même d'arrestations. L'étalon en platine fut réalisé en 1799.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les conversions",
      intro: "Si les conversions te semblent confuses, essaie de les voir autrement.",
      tabs: [
        {
          label: "🪜 L'escalier des préfixes",
          html: "<p>Imagine un <b>escalier</b> (comme sur le dessin) : chaque marche multiplie ou divise par 1000. Si tu descends d'une marche, le <b>nombre</b> est multiplié par 1000 (3 km = 3000 m) ; si tu montes, il est divisé par 1000 (3000 m = 3 km). Pour les <b>aires</b>, chaque marche vaut 10⁶ (1 km² = 10⁶ m²), pour les <b>volumes</b> 10⁹ (1 km³ = 10⁹ m³).</p>"
        },
        {
          label: "🧮 La méthode des facteurs de conversion",
          html: "<p>On multiplie par une fraction égale à 1, écrite de façon que les unités indésirables se simplifient.<br>Exemple : 54 km/h = 54 <u>km</u>/<u>h</u> × (1000 m / 1 <u>km</u>) × (1 <u>h</u> / 3600 s) = 54 000 / 3600 m/s = <b>15 m/s</b>.<br>Il suffit de vérifier qu'à la fin il ne reste que les unités voulues : sinon, tu as retourné une fraction.</p>"
        },
        {
          label: "🔢 La méthode de la notation scientifique",
          html: "<p>Remplace le préfixe par la puissance de 10 : 45 μm = 45 × 10⁻⁶ m = 4,5 × 10⁻⁵ m. Avec la notation scientifique, on ne perd pas de zéros et on compare facilement des grandeurs très différentes : les nombres ont deux chiffres et c'est l'<b>exposant</b> qui fait le travail.</p>"
        },
        {
          label: "📏 Dessin : ordres de grandeur",
          html: "<p>Chaque pas vers la droite sur la droite graduée correspond à une puissance de 10 de plus.</p>",
          svg: "<svg viewBox='0 0 600 200' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='200' fill='#fff7ed'/><line x1='40' y1='100' x2='560' y2='100' stroke='#9a3412' stroke-width='3'/><g fill='#ea580c'><circle cx='60' cy='100' r='8'/><circle cx='150' cy='100' r='8'/><circle cx='240' cy='100' r='8'/><circle cx='330' cy='100' r='8'/><circle cx='420' cy='100' r='8'/><circle cx='510' cy='100' r='8'/></g><g font-family='sans-serif' font-size='15' text-anchor='middle' fill='#7c2d12'><text x='60' y='80'>10⁻¹⁰</text><text x='150' y='80'>10⁻⁶</text><text x='240' y='80'>10⁻²</text><text x='330' y='80'>10²</text><text x='420' y='80'>10⁶</text><text x='510' y='80'>10¹⁰</text><text x='60' y='135'>atome</text><text x='150' y='135'>bactérie</text><text x='240' y='135'>fourmi</text><text x='330' y='135'>terrain</text><text x='420' y='135'>Italie</text><text x='510' y='135'>Terre-Lune x30</text></g></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des grandeurs et des mesures",
      nodes: [
        { id: "grandezza", label: "Grandeur physique", x: 50, y: 8, color: "#2563eb", html: "Propriété mesurable d'un objet ou d'un phénomène.", why: "Galilée affirmait que le livre de la nature est écrit en langage mathématique : pour étudier un phénomène, il faut d'abord trouver ce que l'on peut mesurer. La physique moderne naît quand on choisit des grandeurs mesurables (temps, espace, masse) plutôt que des qualités vagues." },
        { id: "misura", label: "Mesure = nombre × unité", x: 18, y: 42, color: "#16a34a", html: "Comparaison avec un étalon de même nature, l'unité de mesure.", why: "Une mesure est une comparaison : dire qu'une table mesure 2 m signifie que le mètre étalon y est contenu 2 fois. Sans étalon commun, on ne peut pas comparer des résultats obtenus par des personnes différentes." },
        { id: "si", label: "Système international", x: 82, y: 42, color: "#f59e0b", html: "Sept unités de base partagées dans le monde entier.", why: "Le SI est issu du système métrique décimal français (1790-99) et de la Convention du Mètre (1875). Depuis 2019, les unités sont définies à partir de constantes physiques (c, h, e, k, N_A) : elles sont donc stables et reproductibles partout." },
        { id: "derivate", label: "Grandeurs dérivées", x: 82, y: 78, color: "#8b5cf6", html: "Aire, volume, vitesse, masse volumique, force…", why: "Les grandeurs dérivées naissent des lois physiques : la vitesse est le rapport entre distance et temps ; la force (F = m·a) combine masse et accélération. Leurs unités se déduisent des unités de base." },
        { id: "potenze", label: "Puissances de 10 et préfixes", x: 18, y: 78, color: "#ef4444", html: "Notation scientifique, ordres de grandeur, multiples et sous-multiples.", why: "L'Univers s'étend de 10⁻¹⁵ m à 10²⁶ m : aucune écriture ordinaire n'y suffit. Les puissances de 10 sont l'échelle logarithmique qui permet aux scientifiques de s'orienter entre le noyau atomique et les galaxies." },
        { id: "stima", label: "Estimations et vérifications", x: 50, y: 78, color: "#64748b", html: "Analyse dimensionnelle et ordres de grandeur pour vérifier les résultats.", why: "Enrico Fermi était célèbre pour ses estimations rapides (les « problèmes de Fermi ») : un résultat dont l'ordre de grandeur est faux est sûrement erroné, donc l'estimation est une vérification précieuse." }
      ],
      edges: [["grandezza", "misura", "s'exprime par"], ["misura", "si", "utilise les unités du"], ["si", "derivate", "engendre"], ["grandezza", "potenze", "s'écrit avec"], ["potenze", "stima", "sert à"], ["derivate", "stima", "se vérifient par"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz : notation scientifique",
      questions: [
        { type: "mc", q: "Comment écrit-on 0,0045 en notation scientifique ?", options: ["4,5 × 10⁻³", "4,5 × 10³", "45 × 10⁻⁴", "0,45 × 10⁻²"], answer: 0, explain: "On déplace la virgule de 3 rangs vers la droite : 4,5 × 10⁻³." },
        { type: "mc", q: "Quel est l'ordre de grandeur de 7,5 × 10⁵ ?", options: ["10⁵", "10⁶", "10⁴", "10⁷"], answer: 1, explain: "Comme 7,5 ≥ 5, l'ordre de grandeur est 10⁶." },
        { type: "num", q: "Calcule (2 × 10⁴) × (3 × 10⁵) et donne l'exposant de 10 du résultat écrit sous la forme 6 × 10ⁿ.", answer: 9, tol: 0, explain: "6 × 10⁹ : les exposants s'additionnent, 4 + 5 = 9." }
      ]
    }
  ],
  glossary: [
    { t: "Grandeur physique", d: "Propriété d'un corps ou d'un phénomène que l'on peut mesurer." },
    { t: "Unité de mesure", d: "Grandeur étalon à laquelle on compare les autres grandeurs de même nature." },
    { t: "Système international (SI)", d: "Système d'unités adopté par toute la communauté scientifique, avec sept grandeurs de base." },
    { t: "Grandeur dérivée", d: "Grandeur obtenue à partir des grandeurs de base par des produits et des quotients, comme la vitesse ou la masse volumique." },
    { t: "Préfixe", d: "Début du nom de l'unité qui indique un multiple ou un sous-multiple (kilo-, milli-…)." },
    { t: "Notation scientifique", d: "Écriture d'un nombre sous la forme a × 10ⁿ, avec 1 ≤ a < 10." },
    { t: "Ordre de grandeur", d: "Puissance de 10 la plus proche d'un nombre." },
    { t: "Analyse dimensionnelle", d: "Vérification d'une formule à l'aide des unités de mesure." },
    { t: "Masse volumique", d: "Rapport entre la masse et le volume d'un corps (kg/m³)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Mesurer une grandeur, c'est :", options: ["L'estimer à vue d'œil", "La comparer à un étalon de même nature, l'unité de mesure", "Compter combien de chiffres elle a", "La calculer avec une formule"], answer: 1, explain: "Une mesure est le rapport entre la grandeur et l'unité choisie." },
      { type: "tf", q: "Le Système international comporte sept grandeurs de base.", answer: true, explain: "Longueur, masse, temps, intensité du courant, température, quantité de matière et intensité lumineuse." },
      { type: "text", q: "Quel est le symbole correct de l'unité de masse du SI ?", answer: ["kg"], explain: "Le kilogramme s'écrit kg, sans point et sans pluriel." },
      { type: "num", q: "Combien de mètres font 450 mm ?", answer: 0.45, tol: 0.001, unit: "m", explain: "450 × 10⁻³ m = 0,45 m." },
      { type: "num", q: "Combien de mètres par seconde font 108 km/h ?", answer: 30, tol: 0.01, unit: "m/s", explain: "108 : 3,6 = 30 m/s." },
      { type: "mc", q: "Quelle unité SI convient pour la masse volumique ?", options: ["kg·m", "kg/m³", "m/s", "kg/s"], answer: 1, explain: "Masse volumique = masse/volume, donc kg/m³." },
      { type: "mc", q: "Écris 52 000 000 en notation scientifique.", options: ["52 × 10⁶", "5,2 × 10⁷", "0,52 × 10⁸", "5,2 × 10⁶"], answer: 1, explain: "La virgule se déplace de 7 rangs : 5,2 × 10⁷." },
      { type: "mc", q: "Quel est l'ordre de grandeur de 3 × 10⁻⁵ ?", options: ["10⁻⁴", "10⁻⁵", "10⁻⁶", "10⁵"], answer: 1, explain: "Comme 3 < 5, l'ordre de grandeur est 10⁻⁵." },
      { type: "tf", q: "1 m² est égal à 100 cm².", answer: false, explain: "1 m² = (100 cm)² = 10 000 cm² = 10⁴ cm²." },
      { type: "order", q: "Range du plus petit au plus grand.", items: ["1 nm", "1 μm", "1 mm", "1 km"], explain: "nano 10⁻⁹ m < micro 10⁻⁶ m < milli 10⁻³ m < kilo 10³ m." }
    ]
  }
});
