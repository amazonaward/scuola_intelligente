TOPIC('fr', {
  id: "p3-mat-divisioni",
  title: "Les divisions",
  intro: "Diviser, c'est <b>faire des parts égales</b> 🍬 ou <b>découvrir combien de fois</b> un nombre est contenu dans un autre. Apprenons le nom des termes, la division posée, le <b>reste</b> et la <b>preuve</b> pour vérifier que le résultat est juste.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Deux façons de diviser",
      html: `<p>La division répond à <b>deux questions différentes</b> :</p>
<ul>
<li>🍬 <b>Partage</b> (faire des parts égales) : <i>« J'ai 12 bonbons et 3 amis. Combien de bonbons pour chacun ? »</i> → 12 : 3 = <b>4</b> bonbons chacun.</li>
<li>📦 <b>Groupement</b> (combien de fois ça rentre) : <i>« J'ai 12 œufs et des boîtes de 3. Combien de boîtes je remplis ? »</i> → 12 : 3 = <b>4</b> boîtes.</li>
</ul>
<p>Le calcul est le même, mais la question change ! Le signe de la division est <b>:</b> (deux points). Dans d'autres pays, on utilise aussi <b>÷</b> ou <b>/</b>.</p>`
    },
    {
      type: "text",
      title: "Le nom des termes",
      html: `<p>Dans <b>24 : 6 = 4</b> :</p>
<ul>
<li><b>24</b> est le <b>dividende</b> : le nombre que l'on divise ;</li>
<li><b>6</b> est le <b>diviseur</b> : le nombre par lequel on divise ;</li>
<li><b>4</b> est le <b>quotient</b> : le résultat.</li>
</ul>
<p>La division est l'<b>opération inverse de la multiplication</b> : 24 : 6 = 4 parce que <b>4 × 6 = 24</b>. C'est pour ça que bien connaître les tables aide énormément ! 🧠</p>`
    },
    {
      type: "svg",
      title: "12 bonbons pour 3 enfants",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fdf4ff"/>
<text x="300" y="34" font-size="22" font-weight="bold" fill="#86198f" text-anchor="middle">12 : 3 = 4</text>
<g>
<rect x="30" y="60" width="160" height="150" rx="16" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="220" y="60" width="160" height="150" rx="16" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<rect x="410" y="60" width="160" height="150" rx="16" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
</g>
<g fill="#ef4444" stroke="#7f1d1d" stroke-width="2">
<circle cx="80" cy="110" r="18"/><circle cx="140" cy="110" r="18"/><circle cx="80" cy="165" r="18"/><circle cx="140" cy="165" r="18"/>
<circle cx="270" cy="110" r="18"/><circle cx="330" cy="110" r="18"/><circle cx="270" cy="165" r="18"/><circle cx="330" cy="165" r="18"/>
<circle cx="460" cy="110" r="18"/><circle cx="520" cy="110" r="18"/><circle cx="460" cy="165" r="18"/><circle cx="520" cy="165" r="18"/>
</g>
<text x="110" y="245" font-size="20" fill="#92400e" text-anchor="middle" font-weight="bold">Anna : 4</text>
<text x="300" y="245" font-size="20" fill="#166534" text-anchor="middle" font-weight="bold">Luca : 4</text>
<text x="490" y="245" font-size="20" fill="#1e40af" text-anchor="middle" font-weight="bold">Sara : 4</text>
<text x="300" y="285" font-size="18" fill="#1f2937" text-anchor="middle">dividende 12 · diviseur 3 · quotient 4</text>
</svg>`,
      caption: "Partage : les 12 bonbons sont répartis en 3 groupes égaux de 4."
    },
    {
      type: "text",
      title: "Quand il reste quelque chose : le reste",
      html: `<p>La division n'est pas toujours <b>exacte</b>. Si j'ai <b>14 bonbons</b> pour <b>3 amis</b> :</p>
<ul>
<li>j'en donne 4 à chacun (4 × 3 = 12) ;</li>
<li>il m'en <b>reste 2</b> : ce n'est pas assez pour en donner un autre à tout le monde.</li>
</ul>
<p>On écrit : <b>14 : 3 = 4 reste 2</b> (on peut aussi écrire <b>4 r 2</b>).</p>
<p>⚠️ Le <b>reste</b> doit toujours être <b>plus petit que le diviseur</b>. S'il est égal ou plus grand, cela veut dire que tu pouvais encore donner un bonbon à tout le monde !</p>`
    },
    {
      type: "widget",
      title: "Essaie toi-même de faire des parts égales",
      widget: "counter",
      options: { emoji: "🍬", max: 30 },
      caption: "Mets 14 bonbons, puis essaie de les répartir en groupes de 3 : combien de groupes peux-tu faire ? Combien en reste-t-il ?"
    },
    {
      type: "quiz",
      title: "Mini-quiz : les termes et le reste",
      questions: [
        { type: "mc", q: "Dans 35 : 5 = 7, le nombre 35 s'appelle…", options: ["diviseur", "dividende", "quotient"], answer: 1, explain: "Le dividende est le nombre que l'on divise : 35." },
        { type: "num", q: "17 : 5 = 3 avec un reste de…", answer: 2, explain: "5 × 3 = 15 ; 17 − 15 = 2." },
        { type: "tf", q: "Dans une division par 4, le reste peut être 5.", answer: false, explain: "Le reste doit être plus petit que le diviseur : avec le diviseur 4, le reste ne peut être que 0, 1, 2 ou 3." }
      ]
    },
    {
      type: "text",
      title: "La division posée, pas à pas",
      html: `<p>Calculons <b>85 : 3</b>. On commence <b>par la gauche</b>, c'est-à-dire par les plus grands chiffres !</p>
<ol>
<li>Je regarde les <b>dizaines</b> : 8 : 3 = <b>2</b> (parce que 2 × 3 = 6). J'écris 2 au quotient.</li>
<li>Je multiplie et je soustrais : 8 − 6 = <b>2</b> dizaines qui restent.</li>
<li>J'<b>abaisse</b> les unités : à côté du 2 j'écris le 5 → j'obtiens <b>25</b>.</li>
<li>Je divise : 25 : 3 = <b>8</b> (parce que 8 × 3 = 24). J'écris 8 au quotient.</li>
<li>Je soustrais : 25 − 24 = <b>1</b>. Il n'y a plus de chiffres à abaisser : 1 est le <b>reste</b>.</li>
</ol>
<p>Résultat : <b>85 : 3 = 28 reste 1</b>.</p>`
    },
    {
      type: "svg",
      title: "85 : 3 posée (méthode italienne)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<text x="90" y="70" font-size="42" font-family="monospace" fill="#1d4ed8" font-weight="bold">8</text>
<text x="125" y="70" font-size="42" font-family="monospace" fill="#1d4ed8" font-weight="bold">5</text>
<line x1="170" y1="30" x2="170" y2="260" stroke="#1f2937" stroke-width="4"/>
<text x="190" y="70" font-size="42" font-family="monospace" fill="#b45309" font-weight="bold">3</text>
<line x1="170" y1="85" x2="290" y2="85" stroke="#1f2937" stroke-width="4"/>
<text x="190" y="128" font-size="42" font-family="monospace" fill="#15803d" font-weight="bold">28</text>
<text x="70" y="120" font-size="34" font-family="monospace" fill="#6b7280">-6</text>
<line x1="70" y1="132" x2="115" y2="132" stroke="#6b7280" stroke-width="3"/>
<text x="90" y="170" font-size="38" font-family="monospace" fill="#1f2937">2</text>
<text x="125" y="170" font-size="38" font-family="monospace" fill="#dc2626" font-weight="bold">5</text>
<path d="M140 80 Q155 115 140 140" stroke="#dc2626" stroke-width="3" fill="none"/>
<text x="70" y="215" font-size="34" font-family="monospace" fill="#6b7280">-24</text>
<line x1="70" y1="227" x2="160" y2="227" stroke="#6b7280" stroke-width="3"/>
<text x="125" y="265" font-size="38" font-family="monospace" fill="#7c3aed" font-weight="bold">1</text>
<text x="320" y="70" font-size="18" fill="#1d4ed8">dividende</text>
<text x="320" y="100" font-size="18" fill="#b45309">diviseur (en haut à droite)</text>
<text x="320" y="130" font-size="18" fill="#15803d">quotient (sous le diviseur)</text>
<text x="320" y="170" font-size="18" fill="#dc2626">j'abaisse le 5 → 25</text>
<text x="320" y="265" font-size="18" fill="#7c3aed">reste : 1 (plus petit que 3 ✔)</text>
</svg>`,
      caption: "En Italie, le diviseur s'écrit à droite, séparé par une ligne ; le quotient va sous le diviseur."
    },
    {
      type: "text",
      title: "La preuve de la division",
      html: `<p>Pour contrôler si une division est juste, on utilise la <b>multiplication</b> :</p>
<p style="font-size:1.2em"><b>quotient × diviseur + reste = dividende</b></p>
<p>Preuve de 85 : 3 = 28 r 1 → 28 × 3 = 84 ; 84 + 1 = <b>85</b> ✔ Elle est juste !</p>
<p>Si le reste est 0, il suffit de faire quotient × diviseur : 24 : 6 = 4 → 4 × 6 = 24 ✔</p>`
    },
    {
      type: "remember",
      title: "Cas particuliers",
      html: `<ul>
<li>Un nombre divisé par <b>1</b> reste le même : 9 : 1 = 9.</li>
<li>Un nombre divisé par <b>lui-même</b> fait 1 : 7 : 7 = 1.</li>
<li><b>0</b> divisé par un nombre fait 0 : 0 : 5 = 0 (pas de bonbons à partager !).</li>
<li>🚫 <b>On ne peut pas diviser par 0</b> : partager 5 bonbons entre 0 enfant n'a pas de sens !</li>
<li>Diviser par <b>10</b> : si le nombre finit par 0, on enlève le zéro : 70 : 10 = 7 ; pour <b>100</b>, on enlève deux zéros : 300 : 100 = 3.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple pratique : la sortie en minibus",
      html: `<p>À la sortie participent <b>58 enfants</b>. Chaque minibus a <b>9 places</b>. Combien de minibus faut-il ?</p>
<ul>
<li>58 : 9 = <b>6 reste 4</b> (6 × 9 = 54 ; 58 − 54 = 4).</li>
<li>6 minibus sont pleins, mais <b>4 enfants</b> resteraient à la maison ! 😮</li>
<li>Donc il faut <b>7 minibus</b>.</li>
</ul>
<p>👉 Dans les problèmes, il faut toujours penser à <b>ce que signifie le reste</b> !</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : les vignettes dans l'album",
      html: `<p>Giulia a <b>96 vignettes</b> et veut les mettre dans un album avec <b>4 vignettes par page</b>. Combien de pages remplit-elle ?</p>
<ol>
<li>9 dizaines : 4 = 2 (2 × 4 = 8), il reste 1 dizaine.</li>
<li>J'abaisse le 6 : 16 : 4 = 4.</li>
<li>Résultat : <b>96 : 4 = 24 pages</b>, reste 0.</li>
</ol>
<p>Preuve : 24 × 4 = 96 ✔</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Le signe <b>÷</b> s'appelle l'<b>obèle</b> et a été utilisé pour la division par le Suisse <b>Johann Rahn</b> en 1659. Les deux points <b>:</b> ont été rendus célèbres par le mathématicien allemand <b>Gottfried Leibniz</b> vers 1684. Voilà pourquoi en Italie nous utilisons <b>:</b> et en Angleterre ou aux États-Unis souvent <b>÷</b> !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Pourquoi une heure a-t-elle <b>60 minutes</b> ? Parce que les anciens <b>Babyloniens</b> aimaient le 60 : on peut le diviser exactement par 2, 3, 4, 5, 6, 10, 12, 15, 20 et 30 ! Il est très facile de diviser une heure en demi-heures, quarts d'heure, dix minutes… 🕐</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la division",
      intro: "La division posée ne te convainc pas ? Voici d'autres chemins pour arriver au même résultat : choisis celui que tu préfères !",
      tabs: [
        {
          label: "🧊 Cubes 3D",
          html: `<p>Voici <b>24 cubes</b> rangés en un rectangle de <b>4 rangées de 6</b>. Regarde :</p>
<ul>
<li>24 : 4 = <b>6</b> (chaque rangée a 6 cubes) ;</li>
<li>24 : 6 = <b>4</b> (il y a 4 rangées).</li>
</ul>
<p>La division est la multiplication « à l'envers » : tu connais le total et l'une des deux mesures, tu cherches l'autre. Change les curseurs et invente de nouvelles divisions !</p>`,
          scene: "blocks",
          options: { mode: "array", a: 4, b: 6 }
        },
        {
          label: "🐸 Sauts en arrière",
          html: `<p>Une grenouille part de <b>20</b> et saute en arrière de <b>4</b> à la fois : 20 → 16 → 12 → 8 → 4 → 0.</p>
<p>Elle a fait <b>5 sauts</b> : donc <b>20 : 4 = 5</b>. C'est le <b>groupement</b> : combien de fois le 4 est-il contenu dans le 20 ? Essaie sur la droite !</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [0, 4, 8, 12, 16, 20] }
        },
        {
          label: "🇬🇧 Méthode par morceaux (chunking)",
          html: `<p>Dans les écoles anglaises, beaucoup d'enfants divisent en <b>retirant de gros morceaux</b> qu'ils connaissent bien. Exemple : <b>85 : 3</b></p>
<ul>
<li>j'enlève 10 fois 3 = 30 → il reste 55 ;</li>
<li>j'enlève encore 10 fois 3 = 30 → il reste 25 ;</li>
<li>j'enlève 8 fois 3 = 24 → il reste <b>1</b>.</li>
</ul>
<p>Combien de fois ai-je enlevé le 3 ? 10 + 10 + 8 = <b>28</b>, reste <b>1</b>. Même résultat que la méthode posée ! 🎉</p>`
        },
        {
          label: "🇺🇸 La méthode « petite maison »",
          html: `<p>Aux États-Unis et en Angleterre, la division s'écrit autrement : le diviseur est <b>à gauche</b>, le dividende dans une sorte de <b>petite maison</b> et le quotient <b>au-dessus du toit</b>. Mais les étapes sont identiques aux nôtres : divise, multiplie, soustrais, abaisse !</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#eff6ff"/>
<text x="150" y="60" font-size="40" font-family="monospace" fill="#15803d" font-weight="bold">28 r1</text>
<path d="M120 75 Q135 110 120 150 M120 75 L320 75" stroke="#1f2937" stroke-width="4" fill="none"/>
<text x="70" y="125" font-size="40" font-family="monospace" fill="#b45309" font-weight="bold">3</text>
<text x="150" y="125" font-size="40" font-family="monospace" fill="#1d4ed8" font-weight="bold">85</text>
<text x="360" y="60" font-size="18" fill="#15803d">quotient sur le toit</text>
<text x="360" y="110" font-size="18" fill="#1d4ed8">dividende dans la maison</text>
<text x="360" y="150" font-size="18" fill="#b45309">diviseur dehors, à gauche</text>
<text x="300" y="230" font-size="20" fill="#1f2937" text-anchor="middle">Mêmes étapes : divise · multiplie · soustrais · abaisse</text>
</svg>`
        },
        {
          label: "🍕 L'analogie de la pizzeria",
          html: `<p>Pense à un pizzaiolo qui a <b>26 parts</b> à mettre dans des assiettes, <b>4 parts par assiette</b>.</p>
<p>Il remplit une assiette, puis une autre, puis une autre… à la fin il a <b>6 assiettes pleines</b> et il reste <b>2 parts</b> sur le comptoir : trop peu pour une assiette entière. Les 2 parts sont le <b>reste</b> !</p>
<p>26 : 4 = 6 r 2 → preuve : 6 × 4 + 2 = 26 ✔</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de la division : touche un nœud et découvre pourquoi",
      nodes: [
        { id: "div", label: "Division", x: 50, y: 8, color: "#7c3aed", html: "Opération qui sert à faire des parts égales ou à découvrir combien de fois un nombre est contenu dans un autre.", why: "Le mot vient du latin <i>dividere</i>, « séparer ». Les gens partagent depuis toujours : récoltes, terrains, pain. Les anciens Égyptiens divisaient avec des doublements, comme le raconte le papyrus de Rhind (vers 1650 av. J.-C.)." },
        { id: "rip", label: "Partage", x: 18, y: 30, color: "#f59e0b", html: "Diviser en parts égales : combien revient à chacun ?", why: "C'est le sens le plus ancien : donner à chacun la même quantité, de façon juste." },
        { id: "cont", label: "Groupement", x: 82, y: 30, color: "#0ea5e9", html: "Combien de fois un nombre est contenu dans un autre : combien de groupes puis-je faire ?", why: "Cela revient à soustraire toujours le même nombre tant que c'est possible : 20 − 4 − 4 − 4 − 4 − 4 = 0 → 5 fois." },
        { id: "termini", label: "Dividende, diviseur, quotient", x: 50, y: 45, color: "#16a34a", html: "Dividende : diviseur = quotient.", why: "« Quotient » vient du latin <i>quotiens</i>, qui veut dire « combien de fois » : justement la question du groupement !" },
        { id: "molt", label: "Inverse de la multiplication", x: 18, y: 65, color: "#ef4444", html: "24 : 6 = 4 parce que 4 × 6 = 24.", why: "Multiplier, c'est mettre ensemble des groupes égaux ; diviser, c'est les séparer de nouveau. C'est pour ça que les tables servent à diviser." },
        { id: "resto", label: "Reste", x: 82, y: 65, color: "#ec4899", html: "Ce qui reste quand la division n'est pas exacte. Il est toujours plus petit que le diviseur.", why: "Si le reste était égal ou supérieur au diviseur, on pourrait encore faire un groupe : cela voudrait dire que le quotient est trop petit." },
        { id: "prova", label: "La preuve", x: 50, y: 82, color: "#14b8a6", html: "quotient × diviseur + reste = dividende.", why: "Si tu remets ensemble les groupes et que tu ajoutes ce qui restait, tu dois retrouver tout ce que tu avais au début : rien ne se crée et rien ne se perd." },
        { id: "zero", label: "Jamais divisé par 0", x: 18, y: 92, color: "#64748b", html: "Diviser par zéro n'est pas possible.", why: "Aucun nombre multiplié par 0 ne donne 5 : donc 5 : 0 n'a pas de réponse. Déjà les mathématiciens indiens comme Brahmagupta (VIIe siècle) se demandaient ce qui se passait en divisant par zéro." }
      ],
      edges: [
        ["div", "rip", "peut vouloir dire"],
        ["div", "cont", "peut vouloir dire"],
        ["div", "termini", "s'écrit avec"],
        ["termini", "molt", "se contrôle avec"],
        ["termini", "resto", "parfois il y a un"],
        ["resto", "prova", "entre dans la"],
        ["molt", "prova", "sert pour la"],
        ["molt", "zero", "explique pourquoi"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : la division posée et la preuve",
      questions: [
        { type: "num", q: "Combien font 72 : 4 ?", answer: 18, explain: "7 : 4 = 1 reste 3 ; j'abaisse le 2 → 32 : 4 = 8. Quotient 18." },
        { type: "mc", q: "Quelle est la preuve de 50 : 7 = 7 reste 1 ?", options: ["7 × 7 + 1 = 50", "7 × 7 − 1 = 50", "50 × 7 + 1"], answer: 0, explain: "Quotient × diviseur + reste : 49 + 1 = 50 ✔" },
        { type: "num", q: "Il y a 30 enfants et 4 par table. Combien de tables faut-il pour que tous soient assis ?", answer: 8, explain: "30 : 4 = 7 reste 2 : 7 tables pleines et 2 enfants en plus, donc il faut une huitième table." }
      ]
    }
  ],
  glossary: [
    { t: "Division", d: "Opération pour faire des parts égales ou pour savoir combien de fois un nombre est contenu dans un autre." },
    { t: "Dividende", d: "Le nombre que l'on divise (le premier)." },
    { t: "Diviseur", d: "Le nombre par lequel on divise (le deuxième)." },
    { t: "Quotient", d: "Le résultat de la division." },
    { t: "Reste", d: "Ce qui reste quand la division n'est pas exacte ; il est toujours plus petit que le diviseur." },
    { t: "Division exacte", d: "Division avec un reste égal à 0." },
    { t: "Partage", d: "Division qui sert à faire des parts égales." },
    { t: "Groupement", d: "Division qui sert à savoir combien de fois un nombre est contenu dans un autre." },
    { t: "Preuve", d: "Contrôle du résultat : quotient × diviseur + reste = dividende." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Combien font 45 : 5 ?", answer: 9, explain: "9 × 5 = 45." },
      { type: "mc", q: "Dans 63 : 9 = 7, le 9 est…", options: ["le dividende", "le diviseur", "le quotient"], answer: 1, explain: "Le diviseur est le nombre par lequel on divise." },
      { type: "num", q: "29 : 6 = 4 avec un reste de…", answer: 5, explain: "6 × 4 = 24 ; 29 − 24 = 5 (plus petit que 6 ✔)." },
      { type: "tf", q: "On peut diviser un nombre par 0.", answer: false, explain: "Il n'existe aucun nombre qui, multiplié par 0, donne par exemple 8 : diviser par 0 est impossible." },
      { type: "num", q: "Combien font 84 : 3 ?", answer: 28, explain: "8 : 3 = 2 r 2 ; j'abaisse le 4 → 24 : 3 = 8. Quotient 28." },
      { type: "mc", q: "« J'ai 40 € et chaque livre coûte 8 €. Combien de livres puis-je acheter ? » C'est une division de…", options: ["partage", "groupement", "aucune des deux"], answer: 1, explain: "Je cherche combien de fois 8 est contenu dans 40 : groupement. 40 : 8 = 5 livres." },
      { type: "text", q: "Comment s'appelle le résultat de la division ?", answer: ["quotient", "le quotient"], explain: "Le résultat s'appelle le quotient." },
      { type: "tf", q: "Le reste doit toujours être plus petit que le diviseur.", answer: true, explain: "Sinon on pourrait faire un autre groupe." },
      { type: "num", q: "Combien font 600 : 100 ?", answer: 6, explain: "En divisant par 100, on enlève deux zéros : 6." },
      { type: "order", q: "Mets dans l'ordre les étapes de la division posée.", items: ["Je divise le premier chiffre", "Je multiplie le quotient par le diviseur", "Je soustrais", "J'abaisse le chiffre suivant"], explain: "Divise, multiplie, soustrais, abaisse… et recommence !" },
      { type: "num", q: "Mamie a 50 biscuits et les met dans des sachets de 6. Combien de biscuits restent ?", answer: 2, explain: "50 : 6 = 8 reste 2 (8 × 6 = 48)." },
      { type: "mc", q: "Quelle preuve est juste pour 38 : 5 = 7 r 3 ?", options: ["7 × 5 + 3 = 38", "7 × 3 + 5 = 38", "38 × 5 = 7"], answer: 0, explain: "7 × 5 = 35 ; 35 + 3 = 38 ✔" }
    ],
    gen: [["divExact", 2], ["divRem", 2]]
  }
});
