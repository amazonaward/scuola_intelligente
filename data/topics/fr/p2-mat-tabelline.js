TOPIC('fr', {
  id: "p2-mat-tabelline",
  title: "Les tables de multiplication",
  intro: "Les <b>tables de multiplication</b> sont un super-pouvoir 🦸 : elles nous font compter très vite plein de choses toutes pareilles. Découvrons que <b>multiplier</b> veut dire faire une <b>addition répétée</b> !",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Multiplier = additionner plusieurs fois le même nombre",
      html: "<p>Tu as <b>3 assiettes</b> et sur chaque assiette il y a <b>4 biscuits</b> 🍪.</p>" +
        "<p>Tu peux compter comme ça : 4 + 4 + 4 = 12.</p>" +
        "<p>Ou bien tu peux dire : <b>3 fois 4</b>, qui s'écrit <b>3 × 4 = 12</b>.</p>" +
        "<p>Le signe <b>×</b> se lit « fois ». Les nombres que l'on multiplie s'appellent les <b>facteurs</b>, le résultat s'appelle le <b>produit</b>.</p>"
    },
    {
      type: "svg",
      title: "3 × 4 en quadrillage",
      svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="600" height="300" fill="#fefce8"/>' +
        '<text x="300" y="40" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">3 lignes × 4 colonnes = 12</text>' +
        '<g fill="#a16207" stroke="#713f12" stroke-width="2">' +
        '<circle cx="110" cy="100" r="24"/><circle cx="180" cy="100" r="24"/><circle cx="250" cy="100" r="24"/><circle cx="320" cy="100" r="24"/>' +
        '<circle cx="110" cy="170" r="24"/><circle cx="180" cy="170" r="24"/><circle cx="250" cy="170" r="24"/><circle cx="320" cy="170" r="24"/>' +
        '<circle cx="110" cy="240" r="24"/><circle cx="180" cy="240" r="24"/><circle cx="250" cy="240" r="24"/><circle cx="320" cy="240" r="24"/></g>' +
        '<g fill="#fde68a"><circle cx="102" cy="94" r="4"/><circle cx="172" cy="94" r="4"/><circle cx="242" cy="94" r="4"/><circle cx="312" cy="94" r="4"/>' +
        '<circle cx="102" cy="164" r="4"/><circle cx="172" cy="164" r="4"/><circle cx="242" cy="164" r="4"/><circle cx="312" cy="164" r="4"/>' +
        '<circle cx="102" cy="234" r="4"/><circle cx="172" cy="234" r="4"/><circle cx="242" cy="234" r="4"/><circle cx="312" cy="234" r="4"/></g>' +
        '<g font-size="22" fill="#2563eb" font-weight="bold"><text x="370" y="108">4</text><text x="370" y="178">+ 4</text><text x="370" y="248">+ 4</text></g>' +
        '<text x="470" y="178" font-size="34" font-weight="bold" fill="#dc2626">= 12</text>' +
        '</svg>',
      caption: "Un quadrillage : des lignes et des colonnes de biscuits. 3 lignes de 4, ça fait 12."
    },
    {
      type: "example",
      title: "Exemple : les pattes des chiens 🐕",
      html: "<p>Dans le parc, il y a <b>5 chiens</b>. Chaque chien a <b>4 pattes</b>.</p>" +
        "<p>Combien de pattes en tout ? 4 + 4 + 4 + 4 + 4 = 20, c'est-à-dire <b>5 × 4 = 20</b> pattes ! 🐾</p>"
    },
    {
      type: "text",
      title: "Des astuces pour retenir les tables",
      html: "<ul>" +
        "<li><b>× 1</b> : le nombre reste le même. 7 × 1 = 7.</li>" +
        "<li><b>× 0</b> : ça fait toujours 0 ! 8 × 0 = 0 (0 assiette = 0 biscuit).</li>" +
        "<li><b>× 2</b> : c'est le <b>double</b>. 6 × 2 = 6 + 6 = 12.</li>" +
        "<li><b>× 5</b> : les résultats finissent toujours par <b>0</b> ou par <b>5</b> : 5, 10, 15, 20…</li>" +
        "<li><b>× 10</b> : ajoute un <b>0</b> à la fin. 3 × 10 = 30.</li>" +
        "<li><b>× 9</b> : les chiffres du résultat additionnés font 9 ! 9 × 3 = 27 → 2 + 7 = 9.</li>" +
        "</ul>"
    },
    {
      type: "remember",
      title: "La commutativité",
      html: "<p>Si tu échanges les facteurs, le résultat <b>ne change pas</b> : <b>3 × 4 = 4 × 3 = 12</b>.</p>" +
        "<p>Donc, si tu connais 3 × 8, tu connais aussi 8 × 3 ! Il y a deux fois moins de tables à apprendre. 😄</p>"
    },
    {
      type: "widget",
      title: "La table de Pythagore",
      widget: "timesTable",
      options: { size: 10 },
      caption: "Touche une case : la ligne et la colonne se croisent sur le résultat. Regarde : la table est la même des deux côtés de la diagonale !"
    },
    {
      type: "quiz",
      title: "Mini-quiz : additions répétées",
      questions: [
        { type: "mc", q: "2 + 2 + 2 + 2 est égal à…", options: ["2 × 4", "2 × 2", "4 + 2"], answer: 0, explain: "Le 2 est répété 4 fois : 2 × 4 = 8." },
        { type: "num", q: "Combien font 5 × 3 ?", answer: 15, explain: "5 + 5 + 5 = 15." },
        { type: "tf", q: "6 × 0 = 6", answer: false, explain: "N'importe quel nombre fois 0 fait 0." }
      ]
    },
    {
      type: "widget",
      title: "Des sauts sur la droite : la table de 3",
      widget: "numberLine",
      options: { min: 0, max: 30, step: 3, marks: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30] },
      caption: "Fais des sauts de 3 : 3, 6, 9, 12… ce sont les résultats de la table de 3 !"
    },
    {
      type: "example",
      title: "Exemple : les courses au marché 🥚",
      html: "<p>Mamie achète <b>2 boîtes d'œufs</b>. Dans chaque boîte, il y a <b>6 œufs</b>.</p>" +
        "<p>Combien d'œufs ? <b>2 × 6 = 12</b> œufs. Une douzaine ! 🥚</p>"
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? 🏛️",
      html: "<p>Le tableau des multiplications s'appelle la <b>table de Pythagore</b>, en l'honneur de <b>Pythagore</b>, un mathématicien grec qui a vécu il y a plus de 2500 ans.</p>"
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? ✋",
      html: "<p>Il existe une astuce avec les doigts pour la table de 9 ! Ouvre les mains. Pour faire 9 × 4, baisse le <b>4e doigt</b> en partant de la gauche : à gauche il reste <b>3 doigts</b> et à droite <b>6 doigts</b>. Le résultat est <b>36</b> !</p>"
    },
    {
      type: "3d",
      title: "Les tables en 3D 🧊",
      scene: "blocks",
      options: { mode: "array", a: 3, b: 4 },
      caption: "Une multiplication, c'est un rectangle de cubes : 3 rangées de 4 cubes = 12 cubes. Change les nombres avec les curseurs et fais tourner le rectangle : 3 × 4 et 4 × 3 ont les mêmes cubes !"
    },
    {
      type: "alternatives",
      title: "La méthode de l'école ne te plaît pas ? Voici d'autres façons ! 🌍",
      intro: "<p>Partout dans le monde, les enfants multiplient de façons différentes. Il n'y a pas qu'une seule bonne façon : choisis celle que tu comprends le mieux !</p>",
      tabs: [
        {
          label: "🧊 Cubes 3D",
          html: "<p>Range les cubes en <b>rangées</b> : 3 rangées de 5 cubes. Combien y en a-t-il en tout ? Compte les rangées et les cubes de chaque rangée : <b>3 × 5 = 15</b>.</p><p>Bouge les curseurs et construis toi-même les tables !</p>",
          scene: "blocks",
          options: { mode: "array", a: 3, b: 5 }
        },
        {
          label: "🔄 Tourne le rectangle",
          html: "<p>Dessine 3 lignes de 5 carreaux. Maintenant <b>tourne la feuille</b> : ça devient 5 lignes de 3 carreaux ! Il y a toujours <b>15</b> carreaux.</p><p>C'est pour ça que <b>3 × 5 = 5 × 3</b>. On appelle ça la <b>commutativité</b>. Comme ça, tu n'as à apprendre que la moitié de la table de Pythagore ! 😉</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#f0f9ff"/><g fill="#60a5fa" stroke="#1e3a8a" stroke-width="2"><rect x="40" y="50" width="30" height="30"/><rect x="70" y="50" width="30" height="30"/><rect x="100" y="50" width="30" height="30"/><rect x="130" y="50" width="30" height="30"/><rect x="160" y="50" width="30" height="30"/><rect x="40" y="80" width="30" height="30"/><rect x="70" y="80" width="30" height="30"/><rect x="100" y="80" width="30" height="30"/><rect x="130" y="80" width="30" height="30"/><rect x="160" y="80" width="30" height="30"/><rect x="40" y="110" width="30" height="30"/><rect x="70" y="110" width="30" height="30"/><rect x="100" y="110" width="30" height="30"/><rect x="130" y="110" width="30" height="30"/><rect x="160" y="110" width="30" height="30"/></g><text x="115" y="185" font-size="26" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1e3a8a">3 × 5 = 15</text><text x="300" y="110" font-size="44" text-anchor="middle">🔄</text><g fill="#f472b6" stroke="#831843" stroke-width="2"><rect x="420" y="20" width="30" height="30"/><rect x="450" y="20" width="30" height="30"/><rect x="480" y="20" width="30" height="30"/><rect x="420" y="50" width="30" height="30"/><rect x="450" y="50" width="30" height="30"/><rect x="480" y="50" width="30" height="30"/><rect x="420" y="80" width="30" height="30"/><rect x="450" y="80" width="30" height="30"/><rect x="480" y="80" width="30" height="30"/><rect x="420" y="110" width="30" height="30"/><rect x="450" y="110" width="30" height="30"/><rect x="480" y="110" width="30" height="30"/><rect x="420" y="140" width="30" height="30"/><rect x="450" y="140" width="30" height="30"/><rect x="480" y="140" width="30" height="30"/></g><text x="465" y="215" font-size="26" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#831843">5 × 3 = 15</text></svg>`
        },
        {
          label: "🇯🇵 Les lignes japonaises",
          html: "<p>Au <b>Japon</b> et en <b>Chine</b>, beaucoup d'enfants multiplient en dessinant des <b>lignes</b> ! Pour 12 × 13 :</p><ol><li>tu dessines 1 ligne puis 2 lignes (le 12) penchées d'un côté ;</li><li>tu dessines 1 ligne puis 3 lignes (le 13) penchées de l'autre côté ;</li><li>tu comptes les <b>croisements</b> dans chaque zone : à gauche les centaines, au milieu les dizaines, à droite les unités.</li></ol><p>Résultat : 1 | 5 | 6 → <b>156</b>. Regarde l'animation !</p>",
          widget: "lineMultiply",
          options: { a: 12, b: 13 }
        },
        {
          label: "🇷🇺 Le paysan russe",
          html: "<p>On raconte que les <b>paysans russes</b> multipliaient en sachant faire seulement deux choses : <b>diviser par deux</b> et <b>doubler</b> !</p><ol><li>Écris les deux nombres dans deux colonnes.</li><li>À gauche, divise par 2 (sans le reste), à droite, double.</li><li>Barre les lignes où, à gauche, il y a un nombre <b>pair</b>.</li><li>Additionne les nombres qui restent à droite.</li></ol><p>Essaie : 8 × 6 = 48.</p>",
          widget: "russianPeasant",
          options: { a: 8, b: 6 }
        },
        {
          label: "🏺 Les anciens Égyptiens",
          html: "<p>Il y a plus de 3500 ans, les <b>Égyptiens</b> multipliaient en faisant seulement des <b>doubles</b> ! Pour 7 × 6 :</p><ul><li>1 × 6 = 6</li><li>2 × 6 = 12</li><li>4 × 6 = 24</li></ul><p>Puis ils choisissent les lignes qui ensemble font 7 : 1 + 2 + 4 = 7. Ils additionnent 6 + 12 + 24 = <b>42</b>. Ingénieux, non ?</p>",
          widget: "egyptianMultiply",
          options: { a: 7, b: 6 }
        },
        {
          label: "🔲 La jalousie",
          html: "<p>La <b>multiplication par jalousie</b> utilise une grille avec des diagonales, qui ressemble aux volets appelés « jalousies ». Elle vient du monde <b>arabe</b> et a été utilisée à <b>Venise</b> et dans toute l'Italie au Moyen Âge.</p><p>Dans chaque case, tu écris le résultat d'une table (les dizaines au-dessus de la diagonale, les unités en dessous), puis tu additionnes le long des diagonales.</p>",
          widget: "lattice",
          options: { a: 23, b: 4 }
        },
        {
          label: "✋ L'astuce du 9",
          html: "<p>Pour la table de 9, les mains suffisent !</p><ol><li>Ouvre les mains devant toi : 10 doigts.</li><li>Pour faire 9 × 3, baisse le <b>troisième doigt</b> en partant de la gauche.</li><li>Les doigts levés à <b>gauche</b> du doigt baissé sont les <b>dizaines</b> : 2.</li><li>Les doigts levés à <b>droite</b> sont les <b>unités</b> : 7.</li></ol><p>9 × 3 = <b>27</b> ! Ça marche de 9 × 1 à 9 × 10.</p>",
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="220" fill="#fefce8"/><g fill="#fdba74" stroke="#9a3412" stroke-width="2"><rect x="40" y="40" width="34" height="110" rx="17"/><rect x="90" y="40" width="34" height="110" rx="17"/><rect x="140" y="110" width="34" height="40" rx="17" fill="#fca5a5"/><rect x="190" y="40" width="34" height="110" rx="17"/><rect x="240" y="40" width="34" height="110" rx="17"/><rect x="320" y="40" width="34" height="110" rx="17"/><rect x="370" y="40" width="34" height="110" rx="17"/><rect x="420" y="40" width="34" height="110" rx="17"/><rect x="470" y="40" width="34" height="110" rx="17"/><rect x="520" y="40" width="34" height="110" rx="17"/></g><text x="157" y="30" font-size="18" text-anchor="middle" font-family="sans-serif" fill="#b91c1c" font-weight="bold">3e</text><text x="82" y="185" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1e3a8a">2 dizaines</text><text x="400" y="185" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#166534">7 unités</text><text x="300" y="212" font-size="24" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#111827">9 × 3 = 27</text></svg>`
        },
        {
          label: "🐸 Les sauts de la grenouille",
          html: "<p>Une grenouille saute toujours de la même longueur. Si elle fait des sauts de <b>4</b>, après 5 sauts, où arrive-t-elle ? 4, 8, 12, 16, <b>20</b> ! Les tables, ce sont des <b>sauts égaux</b> sur la droite des nombres.</p>",
          widget: "numberLine",
          options: { min: 0, max: 40, step: 4, marks: [20, 40] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La carte de la multiplication 🗺️",
      nodes: [
        { id: "addizione", label: "Addition", x: 50, y: 6, color: "#22c55e", html: "<p>Tu sais déjà faire les additions : 3 + 3 + 3 + 3.</p>", why: "<p>L'addition est la première opération : mettre ensemble. Toutes les autres opérations naissent d'elle.</p>" },
        { id: "ripetuta", label: "Addition répétée", x: 50, y: 26, color: "#16a34a", html: "<p>Quand tu ajoutes plusieurs fois <b>le même nombre</b>, tu peux prendre un raccourci : la multiplication. 3 + 3 + 3 + 3 = 4 × 3.</p>", why: "<p>Écrire 3 + 3 + 3 + … cent fois serait très long ! La multiplication est née pour <b>s'économiser de la fatigue</b>.</p>" },
        { id: "moltiplicazione", label: "Multiplication ×", x: 50, y: 46, color: "#3b82f6", html: "<p>4 × 3 = 12. Les nombres que tu multiplies s'appellent les <b>facteurs</b>, le résultat s'appelle le <b>produit</b>.</p>", why: "<p>Le signe × a été utilisé pour la première fois par un mathématicien anglais, <b>William Oughtred</b>, il y a presque 400 ans. Avant, on l'écrivait en toutes lettres !</p>" },
        { id: "rettangolo", label: "Rectangle de carreaux", x: 15, y: 46, color: "#f97316", html: "<p>Chaque multiplication peut se dessiner comme un <b>rectangle</b> : 4 lignes de 3 carreaux.</p>", why: "<p>Le rectangle nous fait <b>voir</b> la multiplication : les lignes sont égales, exactement comme les termes égaux de l'addition répétée.</p>" },
        { id: "tabelline", label: "Tables", x: 85, y: 46, color: "#a855f7", html: "<p>Les <b>tables</b> sont les multiplications de 1 à 10 à connaître par cœur. Ensemble, elles forment la <b>table de Pythagore</b>.</p>", why: "<p>Elle s'appelle « de Pythagore » en l'honneur du mathématicien grec <b>Pythagore</b>, mais les tables sont encore plus anciennes : en <b>Chine</b>, on a trouvé une table de multiplication écrite sur des lamelles de bambou il y a plus de 2300 ans !</p>" },
        { id: "commutativa", label: "On peut tourner : 3×5 = 5×3", x: 15, y: 75, color: "#ec4899", html: "<p><b>Commutativité</b> : si tu échanges les facteurs, le produit ne change pas.</p>", why: "<p>Pourquoi ? Prends le rectangle 3 × 5 et tourne-le : il devient 5 × 3, mais les carreaux sont toujours les mêmes ! Personne n'en a ajouté ni enlevé.</p>" },
        { id: "zero", label: "× 0 = 0", x: 40, y: 75, color: "#64748b", html: "<p>N'importe quel nombre fois <b>0</b> fait <b>0</b>.</p>", why: "<p>5 × 0 veut dire « 5 fois rien » : si tu as 5 boîtes vides, combien de bonbons as-tu ? Zéro !</p>" },
        { id: "uno", label: "× 1 ne change rien", x: 62, y: 75, color: "#0ea5e9", html: "<p>N'importe quel nombre fois <b>1</b> reste le même : 7 × 1 = 7.</p>", why: "<p>7 × 1 veut dire « le 7 une seule fois » : rien ne change !</p>" },
        { id: "dieci", label: "× 10 : ajoute un 0", x: 85, y: 75, color: "#eab308", html: "<p>4 × 10 = 40 : on ajoute un <b>zéro</b>.</p>", why: "<p>Multiplier par 10 transforme chaque unité en une dizaine : les chiffres se déplacent d'un rang vers la gauche et le zéro garde la place vide des unités.</p>" },
        { id: "divisione", label: "Division", x: 50, y: 95, color: "#ef4444", html: "<p>La <b>division</b> est l'opération contraire : si 4 × 3 = 12, alors 12 : 3 = 4.</p>", why: "<p>Bien connaître les tables t'aidera énormément pour les divisions : c'est le même tableau lu à l'envers !</p>" }
      ],
      edges: [
        ["addizione", "ripetuta", "avec des nombres égaux"],
        ["ripetuta", "moltiplicazione", "raccourci"],
        ["moltiplicazione", "rettangolo", "se dessine comme"],
        ["moltiplicazione", "tabelline", "de 1 à 10"],
        ["rettangolo", "commutativa", "en le tournant"],
        ["moltiplicazione", "zero", ""],
        ["moltiplicazione", "uno", ""],
        ["tabelline", "dieci", ""],
        ["moltiplicazione", "divisione", "le contraire"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : tables rapides",
      questions: [
        { type: "num", q: "7 × 2 = ?", answer: 14, explain: "Le double de 7 est 14." },
        { type: "num", q: "4 × 10 = ?", answer: 40, explain: "Fois 10, on ajoute un zéro : 40." },
        { type: "mc", q: "Quel résultat est dans la table de 5 ?", options: ["23", "35", "41"], answer: 1, explain: "35 = 5 × 7 ; les résultats de la table de 5 finissent par 0 ou 5." }
      ]
    }
  ],
  glossary: [
    { t: "Multiplication", d: "Une addition répétée du même nombre. On utilise le signe ×." },
    { t: "Facteurs", d: "Les nombres que l'on multiplie." },
    { t: "Produit", d: "Le résultat de la multiplication." },
    { t: "Quadrillage", d: "Des objets rangés en lignes et en colonnes égales." },
    { t: "Double", d: "Un nombre pris 2 fois." },
    { t: "Table de Pythagore", d: "Le tableau avec tous les résultats des tables de multiplication." },
    { t: "Commutativité", d: "Quand on échange les facteurs, le produit ne change pas." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "3 × 3 = ?", answer: 9, explain: "3 + 3 + 3 = 9." },
      { type: "num", q: "6 × 5 = ?", answer: 30, explain: "5 + 5 + 5 + 5 + 5 + 5 = 30." },
      { type: "num", q: "8 × 2 = ?", answer: 16, explain: "Le double de 8 est 16." },
      { type: "mc", q: "Quelle addition est égale à 4 × 3 ?", options: ["4 + 3", "3 + 3 + 3 + 3", "4 + 4 + 4 + 4"], answer: 1, explain: "4 × 3 signifie 4 fois le 3." },
      { type: "tf", q: "5 × 2 est égal à 2 × 5.", answer: true, explain: "Commutativité : les deux font 10." },
      { type: "num", q: "9 × 1 = ?", answer: 9, explain: "Fois 1, le nombre reste le même." },
      { type: "num", q: "Une araignée a 8 pattes. Combien de pattes ont 3 araignées ? 🕷️", answer: 24, explain: "3 × 8 = 24." },
      { type: "mc", q: "Comment s'appelle le résultat d'une multiplication ?", options: ["Somme", "Produit", "Différence"], answer: 1, explain: "Le résultat de la multiplication est le produit." },
      { type: "order", q: "Range dans l'ordre les résultats de la table de 4", items: ["4", "8", "12", "16", "20"], explain: "4, 8, 12, 16, 20 : chaque fois + 4." },
      { type: "num", q: "0 × 7 = ?", answer: 0, explain: "Multiplier par 0 donne toujours 0." }
    ],
    gen: [["times", 4]]
  }
});
