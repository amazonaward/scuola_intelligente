TOPIC('fr', {
  id: "p3-mat-frazioni-intro",
  title: "Les fractions : introduction",
  intro: "As-tu déjà partagé un gâteau 🎂 avec tes amis ? Alors tu connais déjà les <b>fractions</b> ! Apprenons à <b>partager l'entier en parts égales</b>, à lire et écrire les fractions et à trouver la fraction d'un groupe d'objets.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "L'entier et les parts égales",
      html: `<p>L'<b>entier</b> est une chose tout entière : une pizza 🍕, une feuille 📄, une tablette de chocolat 🍫, un groupe de 12 billes…</p>
<p><b>Fractionner</b>, c'est partager l'entier en <b>parts égales</b>.</p>
<ul>
<li>✅ Une pizza coupée en 4 parts <b>toutes égales</b> : chaque part est <b>un quart</b>.</li>
<li>❌ Une pizza coupée en 4 parts, une grande et trois petites : ce <b>ne sont pas</b> des quarts !</li>
</ul>
<p>Chaque part égale s'appelle une <b>unité fractionnaire</b>. Si je partage en 2 → <b>un demi</b> (1/2) ; en 3 → <b>un tiers</b> (1/3) ; en 4 → <b>un quart</b> (1/4) ; en 5 → <b>un cinquième</b> (1/5)…</p>`
    },
    {
      type: "svg",
      title: "Parts égales ou non ?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="40" y="40" width="220" height="160" fill="#86efac" stroke="#166534" stroke-width="4"/>
<line x1="150" y1="40" x2="150" y2="200" stroke="#166534" stroke-width="4"/>
<line x1="40" y1="120" x2="260" y2="120" stroke="#166534" stroke-width="4"/>
<text x="150" y="240" font-size="24" fill="#166534" text-anchor="middle" font-weight="bold">✔ 4 parts égales</text>
<text x="150" y="270" font-size="20" fill="#166534" text-anchor="middle">chaque part = 1/4</text>
<rect x="340" y="40" width="220" height="160" fill="#fca5a5" stroke="#991b1b" stroke-width="4"/>
<line x1="490" y1="40" x2="490" y2="200" stroke="#991b1b" stroke-width="4"/>
<line x1="340" y1="90" x2="490" y2="90" stroke="#991b1b" stroke-width="4"/>
<line x1="490" y1="150" x2="560" y2="150" stroke="#991b1b" stroke-width="4"/>
<text x="450" y="240" font-size="24" fill="#991b1b" text-anchor="middle" font-weight="bold">✘ parts différentes</text>
<text x="450" y="270" font-size="20" fill="#991b1b" text-anchor="middle">ce ne sont pas des quarts !</text>
</svg>`,
      caption: "Les deux feuilles sont partagées en 4 morceaux, mais seule la première est partagée en quarts."
    },
    {
      type: "text",
      title: "Comment s'écrit une fraction",
      html: `<p>Une fraction s'écrit avec <b>deux nombres</b> et un <b>trait</b> au milieu :</p>
<ul>
<li>en dessous, il y a le <b>dénominateur</b> 👇 : en combien de parts égales j'ai partagé l'entier ;</li>
<li>au-dessus, il y a le <b>numérateur</b> 👆 : combien de parts je prends (ou je colorie) ;</li>
<li>au milieu, le <b>trait de fraction</b>.</li>
</ul>
<p>Exemple : <b>2/5</b> → j'ai partagé l'entier en 5 parts égales et j'en prends 2. Cela se lit <b>« deux cinquièmes »</b>.</p>
<p>Comment on les lit : 1/2 un demi · 1/3 un tiers · 3/4 trois quarts · 2/5 deux cinquièmes · 5/6 cinq sixièmes · 3/8 trois huitièmes · 7/10 sept dixièmes.</p>`
    },
    {
      type: "widget",
      title: "Construis ta fraction",
      widget: "fractionPie",
      options: { n: 1, d: 4 },
      caption: "Déplace les curseurs : le dénominateur coupe le gâteau, le numérateur colorie les parts."
    },
    {
      type: "quiz",
      title: "Mini-quiz : lire les fractions",
      questions: [
        { type: "mc", q: "Un gâteau est coupé en 8 parts égales et j'en colorie 3. Quelle fraction est-ce ?", options: ["8/3", "3/8", "3/5"], answer: 1, explain: "8 parts en tout (dénominateur), 3 coloriées (numérateur) : 3/8." },
        { type: "mc", q: "Comment lit-on 1/3 ?", options: ["un tiers", "un et trois", "trois unités"], answer: 0, explain: "Le dénominateur 3 se lit « tiers » : un tiers." },
        { type: "tf", q: "Si je coupe une pomme en 2 morceaux différents, chacun est 1/2.", answer: false, explain: "Pour être des moitiés, les parts doivent être égales." }
      ]
    },
    {
      type: "text",
      title: "La partie qui reste",
      html: `<p>Si je partage une pizza en <b>6 parts</b> et que j'en mange <b>4</b>, j'ai mangé <b>4/6</b>.</p>
<p>Combien en reste-t-il ? 6 − 4 = 2 parts, c'est-à-dire <b>2/6</b>.</p>
<p>Et si je remets toutes les parts ensemble ? <b>6/6</b> = <b>1 pizza entière</b> ! Quand le numérateur et le dénominateur sont <b>égaux</b>, la fraction vaut <b>un entier</b>.</p>`
    },
    {
      type: "text",
      title: "La fraction d'un groupe d'objets",
      html: `<p>L'entier peut aussi être un <b>groupe</b> de choses. Pour trouver <b>1/3 de 12 billes</b> :</p>
<ol>
<li>je partage les 12 billes en <b>3 groupes égaux</b> : 12 : 3 = <b>4</b> ;</li>
<li>un groupe, c'est-à-dire <b>1/3</b>, contient <b>4 billes</b>.</li>
</ol>
<p>Et <b>2/3 de 12</b> ? Je prends 2 groupes : 4 × 2 = <b>8 billes</b>.</p>
<p>🔑 Règle : je <b>divise par le nombre du bas</b> (dénominateur), puis je <b>multiplie par le nombre du haut</b> (numérateur).</p>`
    },
    {
      type: "svg",
      title: "1/3 de 12 billes",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<rect x="30" y="40" width="170" height="120" rx="20" fill="#dbeafe" stroke="#1d4ed8" stroke-width="4"/>
<rect x="215" y="40" width="170" height="120" rx="20" fill="#ffffff" stroke="#6b7280" stroke-width="3" stroke-dasharray="8 6"/>
<rect x="400" y="40" width="170" height="120" rx="20" fill="#ffffff" stroke="#6b7280" stroke-width="3" stroke-dasharray="8 6"/>
<g fill="#2563eb"><circle cx="80" cy="80" r="18"/><circle cx="150" cy="80" r="18"/><circle cx="80" cy="125" r="18"/><circle cx="150" cy="125" r="18"/></g>
<g fill="#a3a3a3"><circle cx="265" cy="80" r="18"/><circle cx="335" cy="80" r="18"/><circle cx="265" cy="125" r="18"/><circle cx="335" cy="125" r="18"/>
<circle cx="450" cy="80" r="18"/><circle cx="520" cy="80" r="18"/><circle cx="450" cy="125" r="18"/><circle cx="520" cy="125" r="18"/></g>
<text x="115" y="195" font-size="24" fill="#1d4ed8" text-anchor="middle" font-weight="bold">1/3 = 4</text>
<text x="300" y="195" font-size="22" fill="#6b7280" text-anchor="middle">1/3</text>
<text x="485" y="195" font-size="22" fill="#6b7280" text-anchor="middle">1/3</text>
<text x="300" y="240" font-size="22" fill="#1f2937" text-anchor="middle">12 : 3 = 4 billes dans chaque groupe</text>
</svg>`,
      caption: "Le groupe de 12 billes est partagé en 3 groupes égaux : chacun est un tiers."
    },
    {
      type: "example",
      title: "Exemple pratique : la tablette de chocolat",
      html: `<p>Une tablette a <b>10 carrés</b>. Marco en mange <b>3</b> et Sofia <b>2</b>.</p>
<ul>
<li>Marco a mangé <b>3/10</b> de la tablette.</li>
<li>Sofia a mangé <b>2/10</b>.</li>
<li>En tout, ils ont mangé 5 carrés, c'est-à-dire <b>5/10</b>… ce qui est justement <b>la moitié</b> de la tablette ! 🍫</li>
<li>Il reste <b>5/10</b>.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple pratique : les crayons de couleur",
      html: `<p>Dans une trousse, il y a <b>20 crayons</b>. <b>1/4</b> sont rouges. Combien y a-t-il de crayons rouges ?</p>
<ol>
<li>20 : 4 = <b>5</b> (un quart des crayons).</li>
<li>Numérateur 1 → <b>5 crayons rouges</b> ✏️</li>
</ol>
<p>Et si c'était <b>3/4</b> ? 5 × 3 = <b>15 crayons</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Le mot <b>fraction</b> vient du latin <i>frangere</i>, qui veut dire <b>briser</b>. Une fraction est un entier « brisé » en morceaux égaux ! Le mot <b>fragile</b> 🥚 vient aussi de là.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Quand tu dis <b>« un quart d'heure »</b>, tu utilises une fraction ! Une heure a 60 minutes : 60 : 4 = <b>15 minutes</b>. Et <b>« une demi-heure »</b> est 1/2 d'heure = <b>30 minutes</b>. ⏰</p>`
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Les parts doivent être <b>toutes égales</b>.</li>
<li>Dénominateur (en bas) = en combien de parts je partage. Numérateur (en haut) = combien de parts je prends.</li>
<li>Si le nombre du haut et celui du bas sont les mêmes, c'est <b>un entier</b> : 4/4 = 1.</li>
<li>Fraction d'un nombre : <b>: dénominateur</b>, puis <b>× numérateur</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les fractions",
      intro: "On peut voir les fractions de bien des façons. Essaie celle qui te semble la plus claire !",
      tabs: [
        {
          label: "📄 Plie la feuille",
          html: `<p>Prends une vraie feuille de papier !</p>
<ol>
<li>Plie-la en deux : en l'ouvrant, tu vois <b>2 parties égales</b> → chacune est <b>1/2</b>.</li>
<li>Plie-la encore en deux : maintenant il y a <b>4</b> parties → chacune est <b>1/4</b>.</li>
<li>Encore une fois : <b>8 parties</b> → chacune est <b>1/8</b>.</li>
</ol>
<p>Colorie 3 petits rectangles : tu as colorié <b>3/8</b> de la feuille. Plus tu plies, plus les parties deviennent <b>petites</b> !</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0f9ff"/>
<rect x="20" y="40" width="160" height="120" fill="#fde68a" stroke="#1f2937" stroke-width="3"/>
<line x1="100" y1="40" x2="100" y2="160" stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"/>
<text x="100" y="195" font-size="22" text-anchor="middle">1/2</text>
<rect x="220" y="40" width="160" height="120" fill="#bbf7d0" stroke="#1f2937" stroke-width="3"/>
<line x1="300" y1="40" x2="300" y2="160" stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"/>
<line x1="220" y1="100" x2="380" y2="100" stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"/>
<text x="300" y="195" font-size="22" text-anchor="middle">1/4</text>
<rect x="420" y="40" width="160" height="120" fill="#ffffff" stroke="#1f2937" stroke-width="3"/>
<rect x="420" y="40" width="40" height="60" fill="#f472b6"/><rect x="460" y="40" width="40" height="60" fill="#f472b6"/><rect x="500" y="40" width="40" height="60" fill="#f472b6"/>
<g stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"><line x1="460" y1="40" x2="460" y2="160"/><line x1="500" y1="40" x2="500" y2="160"/><line x1="540" y1="40" x2="540" y2="160"/><line x1="420" y1="100" x2="580" y2="100"/></g>
<text x="500" y="195" font-size="22" text-anchor="middle" fill="#be185d" font-weight="bold">3/8</text>
</svg>`
        },
        {
          label: "🧊 Cubes 3D",
          html: `<p>Ici, il y a <b>12 cubes</b> en 3 rangées de 4.</p>
<ul>
<li>Une <b>rangée</b> est <b>1/3</b> des cubes : 4 cubes.</li>
<li>Une <b>colonne</b> est <b>1/4</b> des cubes : 3 cubes.</li>
</ul>
<p>Tourne le modèle et change les curseurs : combien de cubes y a-t-il dans 1/3 ? Et dans 1/4 ?</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "📏 Sur la droite",
          html: `<p>Les fractions sont aussi des <b>nombres</b> qui se trouvent entre 0 et 1 sur la droite. Imagine que le segment de 0 à 1 est partagé en <b>4 sauts égaux</b> : un saut est <b>1/4</b>, deux sauts <b>2/4</b> (c'est-à-dire la moitié !), quatre sauts arrivent à <b>1</b>.</p>
<p>Ici la droite va de 0 à 8 : pense que chaque segment de 0 à 4 est <b>un entier</b> partagé en quarts. Le repère sur le 2 est la moitié, c'est-à-dire 2/4 !</p>`,
          widget: "numberLine",
          options: { min: 0, max: 8, step: 1, marks: [2, 4] }
        },
        {
          label: "👨‍🍳 L'analogie du cuisinier",
          html: `<p>Une recette dit : <b>« 1/2 litre de lait »</b>. Le cuisinier prend une bouteille de 1 litre et en verse <b>la moitié</b>.</p>
<p>Puis elle dit : <b>« 3/4 de plaquette de beurre »</b>. Il coupe la plaquette en <b>4 morceaux égaux</b> et en utilise <b>3</b>.</p>
<p>En cuisine, on utilise toujours des fractions : un demi-kilo, un quart de litre, un tiers de tasse… 🥛🧈</p>`
        },
        {
          label: "🇬🇧 Comment on dit en anglais",
          html: `<p>En anglais aussi, les fractions ont des noms spéciaux :</p>
<ul>
<li>1/2 = <b>one half</b> (un demi)</li>
<li>1/4 = <b>one quarter</b> (un quart) — comme le « quarter » de 25 cents de dollar, qui est justement 1/4 de dollar ! 💵</li>
<li>1/3 = <b>one third</b>, 2/5 = <b>two fifths</b></li>
</ul>
<p>Dans beaucoup de pays, au lieu du trait horizontal, on écrit la fraction avec la barre oblique : <b>3/4</b>. Ce sont deux façons d'écrire la même chose.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des fractions : touche un nœud et découvre pourquoi",
      nodes: [
        { id: "intero", label: "Entier", x: 50, y: 8, color: "#2563eb", html: "La chose tout entière : une pizza, une feuille, un groupe d'objets.", why: "Sans savoir quel est l'entier, une fraction n'a pas de sens : la moitié d'une petite pizza est moins que la moitié d'une pizza géante !" },
        { id: "uguali", label: "Parts égales", x: 50, y: 28, color: "#16a34a", html: "Pour fractionner l'entier, les morceaux doivent être tous égaux.", why: "Les fractions sont nées pour partager de façon juste : terrains, récoltes, pain. Si les parts ne sont pas égales, quelqu'un reçoit plus !" },
        { id: "unita", label: "Unité fractionnaire", x: 15, y: 45, color: "#a855f7", html: "Une seule part de l'entier : 1/2, 1/3, 1/4…", why: "Les anciens Égyptiens, il y a presque 4000 ans, n'utilisaient presque que ces fractions de numérateur 1. Le papyrus de Rhind (vers 1650 av. J.-C.) en est plein." },
        { id: "den", label: "Dénominateur", x: 30, y: 65, color: "#f59e0b", html: "Le nombre sous le trait : en combien de parts égales je partage.", why: "On l'appelle ainsi parce qu'il « donne le nom » aux parts : 4 → quarts, 5 → cinquièmes, 10 → dixièmes." },
        { id: "num", label: "Numérateur", x: 70, y: 65, color: "#ef4444", html: "Le nombre sur le trait : combien de parts je prends.", why: "Il vient de « numéroter », c'est-à-dire compter : il compte les parts prises." },
        { id: "intera", label: "Fraction = 1 entier", x: 85, y: 45, color: "#0ea5e9", html: "Quand numérateur et dénominateur sont égaux : 5/5 = 1.", why: "Si je prends toutes les parts en lesquelles j'ai partagé, j'ai reconstitué l'entier." },
        { id: "gruppo", label: "Fraction d'un nombre", x: 50, y: 85, color: "#14b8a6", html: "On divise par le dénominateur et on multiplie par le numérateur.", why: "Diviser par le dénominateur fait les groupes égaux (combien vaut une part) ; multiplier par le numérateur prend le bon nombre de groupes." },
        { id: "linea", label: "Trait de fraction", x: 85, y: 88, color: "#64748b", html: "Le petit trait entre numérateur et dénominateur.", why: "Il a été utilisé par les mathématiciens arabes et apporté en Europe par Léonard de Pise (Fibonacci) dans le livre <i>Liber Abaci</i> (1202)." }
      ],
      edges: [
        ["intero", "uguali", "se partage en"],
        ["uguali", "unita", "chacune est une"],
        ["uguali", "den", "combien il y en a →"],
        ["uguali", "num", "combien j'en prends →"],
        ["num", "intera", "si égal au dén."],
        ["den", "gruppo", ": par le dén."],
        ["num", "gruppo", "× par le num."],
        ["num", "linea", "séparé par"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : la fraction d'un nombre",
      questions: [
        { type: "num", q: "Combien est 1/2 de 16 ?", answer: 8, explain: "16 : 2 = 8." },
        { type: "num", q: "Combien est 1/5 de 30 ?", answer: 6, explain: "30 : 5 = 6." },
        { type: "mc", q: "Quelle fraction vaut un entier ?", options: ["3/4", "6/6", "1/6"], answer: 1, explain: "6 parts sur 6 : tout l'entier." }
      ]
    }
  ],
  glossary: [
    { t: "Entier", d: "La chose ou le groupe tout entier que l'on veut partager." },
    { t: "Fraction", d: "Une ou plusieurs parts égales d'un entier." },
    { t: "Fractionner", d: "Partager un entier en parts égales." },
    { t: "Unité fractionnaire", d: "Une seule des parts égales, avec numérateur 1 (ex. 1/4)." },
    { t: "Numérateur", d: "Le nombre au-dessus du trait : combien de parts je prends." },
    { t: "Dénominateur", d: "Le nombre au-dessous du trait : en combien de parts égales je partage l'entier." },
    { t: "Trait de fraction", d: "Le petit trait qui sépare le numérateur et le dénominateur." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Pour faire une fraction, les parts doivent être…", options: ["toutes égales", "toutes différentes", "plus de dix"], answer: 0, explain: "Les parts doivent être égales." },
      { type: "mc", q: "Dans 3/7, le numérateur est…", options: ["7", "3", "10"], answer: 1, explain: "Le numérateur est au-dessus du trait : 3." },
      { type: "text", q: "Comment s'appelle le nombre sous le trait de fraction ?", answer: ["dénominateur", "denominateur", "le dénominateur", "le denominateur"], explain: "C'est le dénominateur : il dit en combien de parts je partage." },
      { type: "mc", q: "Comment lit-on 2/5 ?", options: ["deux cinquièmes", "cinq demis", "deux et cinq"], answer: 0, explain: "Deux (numérateur) cinquièmes (dénominateur 5)." },
      { type: "tf", q: "4/4 est égal à un entier.", answer: true, explain: "Je prends les 4 parts : l'entier." },
      { type: "num", q: "Une pizza est coupée en 8 parts et tu en manges 3. Combien de parts restent ?", answer: 5, explain: "8 − 3 = 5 parts, c'est-à-dire 5/8." },
      { type: "num", q: "Combien est 1/4 de 20 ?", answer: 5, explain: "20 : 4 = 5." },
      { type: "num", q: "Combien est 2/3 de 9 ?", answer: 6, explain: "9 : 3 = 3 ; 3 × 2 = 6." },
      { type: "tf", q: "Plus le dénominateur est grand, plus chaque part est grande.", answer: false, explain: "C'est le contraire : si je coupe en plus de morceaux, chaque morceau est plus petit. 1/8 est plus petit que 1/2." },
      { type: "order", q: "Range de la plus grande part à la plus petite.", items: ["1/2", "1/3", "1/4", "1/10"], explain: "Avec le numérateur 1, plus le dénominateur est grand, plus la part est petite." },
      { type: "mc", q: "Un quart d'heure, combien de minutes est-ce ?", options: ["25", "15", "4"], answer: 1, explain: "60 : 4 = 15 minutes." }
    ],
    gen: [["fracOf", 3]]
  }
});
