TOPIC('fr', {
  id: "p3-mat-misure-lunghezza",
  title: "Les mesures de longueur",
  intro: "Quelle est la longueur de ton bureau ? Et quelle est ta taille ? 📏 Pour répondre, nous utilisons le <b>mètre</b> et ses « enfants » plus petits : le <b>décimètre, le centimètre et le millimètre</b>. Apprenons à mesurer et à passer d'une unité à l'autre.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Pourquoi il faut une unité de mesure identique pour tous",
      html: `<p><b>Mesurer</b>, c'est découvrir <b>combien de fois</b> une unité de mesure est contenue dans une longueur.</p>
<p>Essaie de mesurer le bureau avec des <b>empans</b> ✋ : toi, tu trouves 6 empans, la maîtresse 4 ! Qui a raison ? Tous les deux… mais vos mains sont différentes.</p>
<p>C'est pour ça qu'il faut une unité <b>identique pour tous</b>, dans le monde entier : le <b>mètre</b> (symbole <b>m</b>). On l'écrit sans point : 3 m, pas 3 m. ni 3 mt !</p>`
    },
    {
      type: "text",
      title: "Le mètre et ses sous-multiples",
      html: `<p>Le mètre est un peu trop long pour mesurer un crayon. Alors nous le divisons en parties plus petites, les <b>sous-multiples</b> :</p>
<ul>
<li>en divisant le mètre en <b>10</b> parties égales → <b>décimètre</b> (<b>dm</b>), large à peu près comme ta main ;</li>
<li>en divisant le décimètre en <b>10</b> parties → <b>centimètre</b> (<b>cm</b>), large environ comme le bout de ton petit doigt ;</li>
<li>en divisant le centimètre en <b>10</b> parties → <b>millimètre</b> (<b>mm</b>), épais comme une petite pièce de 1 centime (qui mesure environ 1,7 mm).</li>
</ul>
<p>Donc : <b>1 m = 10 dm = 100 cm = 1000 mm</b>.</p>
<p>Les noms viennent du latin : <i>déci</i> = 10, <i>centi</i> = 100, <i>milli</i> = 1000. Un décimètre est <b>la dixième partie</b> du mètre, un centimètre <b>la centième</b>, un millimètre <b>la millième</b>.</p>`
    },
    {
      type: "svg",
      title: "À l'intérieur d'un mètre",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<rect x="40" y="40" width="500" height="50" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<text x="290" y="75" font-size="26" fill="#78350f" text-anchor="middle" font-weight="bold">1 mètre (m)</text>
<g stroke="#1e3a8a" stroke-width="3">
<rect x="40" y="120" width="50" height="40" fill="#93c5fd"/><rect x="90" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="140" y="120" width="50" height="40" fill="#93c5fd"/><rect x="190" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="240" y="120" width="50" height="40" fill="#93c5fd"/>
<rect x="290" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="340" y="120" width="50" height="40" fill="#93c5fd"/><rect x="390" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="440" y="120" width="50" height="40" fill="#93c5fd"/><rect x="490" y="120" width="50" height="40" fill="#bfdbfe"/>
</g>
<text x="565" y="148" font-size="20" fill="#1e3a8a" font-weight="bold">10 dm</text>
<line x1="40" y1="160" x2="60" y2="215" stroke="#6b7280" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="90" y1="160" x2="540" y2="215" stroke="#6b7280" stroke-width="2" stroke-dasharray="5 4"/>
<g stroke="#166534" stroke-width="2" fill="#bbf7d0">
<rect x="60" y="215" width="48" height="40"/><rect x="108" y="215" width="48" height="40"/><rect x="156" y="215" width="48" height="40"/><rect x="204" y="215" width="48" height="40"/><rect x="252" y="215" width="48" height="40"/>
<rect x="300" y="215" width="48" height="40"/><rect x="348" y="215" width="48" height="40"/><rect x="396" y="215" width="48" height="40"/><rect x="444" y="215" width="48" height="40"/><rect x="492" y="215" width="48" height="40"/>
</g>
<text x="300" y="285" font-size="20" fill="#166534" text-anchor="middle" font-weight="bold">1 dm = 10 cm (agrandi)</text>
</svg>`,
      caption: "Chaque étape divise en 10 parties égales : mètre → décimètres → centimètres → millimètres."
    },
    {
      type: "text",
      title: "Le tableau et la règle du 10",
      html: `<table>
<tr><th>m</th><th>dm</th><th>cm</th><th>mm</th></tr>
<tr><td>mètre</td><td>décimètre</td><td>centimètre</td><td>millimètre</td></tr>
<tr><td>1</td><td>10</td><td>100</td><td>1000</td></tr>
</table>
<p>Chaque unité est <b>10 fois</b> plus grande que celle qui est à sa droite. Donc :</p>
<ul>
<li>d'une unité <b>plus grande</b> vers une <b>plus petite</b> (vers la droite) → <b>× 10</b> à chaque pas : 3 m = 30 dm = 300 cm.</li>
<li>d'une unité <b>plus petite</b> vers une <b>plus grande</b> (vers la gauche) → <b>: 10</b> à chaque pas : 500 cm = 50 dm = 5 m.</li>
</ul>
<p>💡 Raisonne ainsi : <b>unités plus petites → il faut plus de morceaux → le nombre devient plus grand</b>.</p>`
    },
    {
      type: "remember",
      title: "Et les longues distances ? Les multiples",
      html: `<p>Pour mesurer des routes et des voyages, le mètre est trop petit. On utilise les <b>multiples</b> :</p>
<ul>
<li><b>décamètre</b> (dam) = 10 m</li>
<li><b>hectomètre</b> (hm) = 100 m</li>
<li><b>kilomètre</b> (km) = <b>1000 m</b> 🚗</li>
</ul>
<p>Le plus utilisé est le <b>kilomètre</b> : de Turin à Milan, il y a environ 140 km d'autoroute. En CE2, nous nous concentrons sur <b>m, dm, cm, mm</b>.</p>`
    },
    {
      type: "widget",
      title: "Associe les mesures égales",
      widget: "match",
      options: {
        pairs: [
          ["1 m", "100 cm"],
          ["1 dm", "10 cm"],
          ["1 cm", "10 mm"],
          ["5 dm", "50 cm"],
          ["2 m", "20 dm"],
          ["30 mm", "3 cm"]
        ]
      },
      caption: "Relie chaque mesure à sa mesure égale écrite avec une autre unité."
    },
    {
      type: "quiz",
      title: "Mini-quiz : les unités",
      questions: [
        { type: "num", q: "1 mètre, combien de centimètres cela fait-il ?", answer: 100, unit: "cm", explain: "1 m = 10 dm = 100 cm." },
        { type: "mc", q: "Quelle unité utilises-tu pour mesurer la longueur d'une fourmi ?", options: ["mètres", "millimètres", "kilomètres"], answer: 1, explain: "Une fourmi mesure quelques millimètres." },
        { type: "num", q: "40 mm, combien de cm cela fait-il ?", answer: 4, unit: "cm", explain: "De mm à cm, on fait : 10 → 40 : 10 = 4 cm." }
      ]
    },
    {
      type: "text",
      title: "Mesures avec plusieurs unités : le tableau des positions",
      html: `<p>Parfois une mesure s'écrit avec plusieurs unités : <b>1 m 3 dm 5 cm</b>. C'est comme la valeur de position des nombres !</p>
<table>
<tr><th>m</th><th>dm</th><th>cm</th></tr>
<tr><td>1</td><td>3</td><td>5</td></tr>
</table>
<p>En lisant toute la ligne jusqu'aux centimètres : <b>135 cm</b>. Exactement comme 1 centaine, 3 dizaines et 5 unités font 135 !</p>
<p>Dans l'autre sens : <b>247 cm</b> = 2 m 4 dm 7 cm.</p>`
    },
    {
      type: "3d",
      title: "Des centimètres en cubes",
      scene: "blocks",
      options: { mode: "base10", value: 135 },
      caption: "Si chaque petit cube vaut 1 cm : une barre de 10 est 1 dm et une plaque de 100 est 1 m (mise en file). 135 cm = 1 m 3 dm 5 cm."
    },
    {
      type: "example",
      title: "Exemple pratique : quelle est ta taille ?",
      html: `<p>Luca se mesure contre la porte : il mesure <b>1 m et 32 cm</b>.</p>
<ul>
<li>En centimètres : 100 + 32 = <b>132 cm</b>.</li>
<li>Sa sœur Emma mesure <b>118 cm</b>. Qui est le plus grand ? Luca, de 132 − 118 = <b>14 cm</b>.</li>
<li>Le papa mesure <b>178 cm</b> = 1 m 7 dm 8 cm. 👨</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple pratique : le ruban pour le cadeau",
      html: `<p>Maman a un ruban long de <b>2 m</b>. Elle en utilise <b>65 cm</b> pour un paquet 🎁. Combien de ruban reste-t-il ?</p>
<ol>
<li>D'abord je transforme tout dans la même unité : 2 m = <b>200 cm</b>.</li>
<li>200 − 65 = <b>135 cm</b> = 1 m 3 dm 5 cm.</li>
</ol>
<p>⚠️ Pour faire des calculs avec les mesures, il faut toujours utiliser <b>la même unité</b> !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Le mètre est né en <b>France</b> en <b>1791</b>, pendant la Révolution française. Les scientifiques ont décidé qu'il devait être <b>une partie sur 10 millions</b> de la distance entre le pôle Nord et l'équateur ! Deux astronomes, Delambre et Méchain, ont mis environ 7 ans à mesurer le méridien de Dunkerque à Barcelone. Aujourd'hui, le mètre est défini avec la <b>vitesse de la lumière</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Avant le mètre, chaque ville avait ses propres mesures ! À Turin, on utilisait le <b>trabucco</b> (environ 3 mètres), à Milan la <b>brasse</b> (<i>braccio</i>), à Venise le <b>pas</b> (<i>passo</i>). Sur les murs de certains hôtels de ville médiévaux, les mesures officielles sont encore sculptées ou scellées pour éviter les tromperies au marché. 🏛️</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les mesures",
      intro: "Passer d'une unité à l'autre te donne le tournis ? Essaie l'une de ces méthodes !",
      tabs: [
        {
          label: "🪜 La petite échelle",
          html: `<p>Imagine les unités comme les <b>marches d'un escalier</b> : m en haut, puis dm, cm et mm en bas.</p>
<ul>
<li>Si tu <b>descends</b> d'une marche → <b>× 10</b> (tu ajoutes un zéro).</li>
<li>Si tu <b>montes</b> d'une marche → <b>: 10</b> (tu enlèves un zéro).</li>
</ul>
<p>Exemple : 4 m → cm. Je descends 2 marches : × 10 × 10 → <b>400 cm</b>.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#f0fdf4"/>
<g stroke="#1f2937" stroke-width="3">
<rect x="40" y="30" width="130" height="50" fill="#fbbf24"/>
<rect x="160" y="90" width="130" height="50" fill="#60a5fa"/>
<rect x="280" y="150" width="130" height="50" fill="#4ade80"/>
<rect x="400" y="210" width="130" height="50" fill="#f472b6"/>
</g>
<text x="105" y="64" font-size="26" text-anchor="middle" font-weight="bold">m</text>
<text x="225" y="124" font-size="26" text-anchor="middle" font-weight="bold">dm</text>
<text x="345" y="184" font-size="26" text-anchor="middle" font-weight="bold">cm</text>
<text x="465" y="244" font-size="26" text-anchor="middle" font-weight="bold">mm</text>
<text x="200" y="60" font-size="20" fill="#dc2626" font-weight="bold">↘ × 10</text>
<text x="320" y="120" font-size="20" fill="#dc2626" font-weight="bold">↘ × 10</text>
<text x="440" y="180" font-size="20" fill="#dc2626" font-weight="bold">↘ × 10</text>
<text x="40" y="170" font-size="20" fill="#1d4ed8" font-weight="bold">je monte ↖ : 10</text>
</svg>`
        },
        {
          label: "💶 Comme les euros",
          html: `<p>Les mesures fonctionnent comme l'argent !</p>
<ul>
<li>1 € = 100 centimes ↔ 1 m = 100 <b>centi</b>mètres. Même mot : « cent » !</li>
<li>10 centimes ↔ 10 cm = 1 dm.</li>
</ul>
<p>Si tu sais que 2 € font 200 centimes, tu sais déjà que 2 m font 200 cm. 🪙</p>`
        },
        {
          label: "🇺🇸 Pouces et pieds",
          html: `<p>Aux <b>États-Unis</b>, on utilise encore des unités anciennes : le <b>pouce</b> (inch) et le <b>pied</b> (foot).</p>
<ul>
<li>1 pouce = <b>2,54 cm</b> (environ la largeur de ton pouce quand tu seras grand 👍)</li>
<li>1 pied = 12 pouces = environ <b>30 cm</b></li>
</ul>
<p>Les mesures américaines ne vont pas de 10 en 10 : 12 pouces font un pied, 3 pieds font un yard… C'est beaucoup plus difficile ! C'est pour ça que presque tout le monde utilise le <b>système métrique décimal</b>. Les écrans de télévision se mesurent aussi en pouces : une télé de 50 pouces a une diagonale d'environ 127 cm. 📺</p>`
        },
        {
          label: "✋ Le corps comme règle",
          html: `<p>Connais ta « règle personnelle » et tu pourras estimer des mesures sans instruments !</p>
<ul>
<li>Ton <b>petit doigt</b> est large d'environ <b>1 cm</b>.</li>
<li>Ta <b>main</b> fermée (4 doigts) est large d'environ <b>6–7 cm</b> ; quand tu seras grand, environ <b>1 dm</b>.</li>
<li>Un grand <b>pas</b> d'adulte mesure environ <b>1 m</b>.</li>
</ul>
<p>Les anciens Égyptiens mesuraient avec la <b>coudée</b> : la longueur du coude à la pointe du majeur, environ 52 cm pour la coudée royale.</p>`
        },
        {
          label: "📏 Sur la règle",
          html: `<p>Regarde ta règle : les <b>nombres</b> indiquent les centimètres, les <b>petits traits</b> entre un nombre et l'autre sont les <b>millimètres</b> (il y en a 10 !).</p>
<p>Sur la droite ci-dessous, chaque saut vaut 1 cm : essaie de compter de 0 à 10 cm, c'est-à-dire <b>1 dm</b>. Rappelle-toi : on mesure toujours en partant du <b>0</b>, pas du bord de la règle !</p>`,
          widget: "numberLine",
          options: { min: 0, max: 15, step: 1, marks: [10] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des mesures de longueur : touche un nœud et découvre pourquoi",
      nodes: [
        { id: "misurare", label: "Mesurer", x: 50, y: 6, color: "#64748b", html: "Comparer une longueur à une unité et compter combien de fois elle y est contenue.", why: "Les gens mesurent depuis des milliers d'années pour construire des maisons, partager des champs et faire du commerce. Au début, ils utilisaient des parties du corps : pied, empan, coudée." },
        { id: "unita", label: "Unité identique pour tous", x: 50, y: 24, color: "#f59e0b", html: "Une mesure qui vaut la même chose partout.", why: "Avec les empans ou les pieds, chacun trouvait des nombres différents, et au marché naissaient disputes et tromperies. Il fallait un étalon unique." },
        { id: "metro", label: "Mètre (m)", x: 50, y: 44, color: "#2563eb", html: "L'unité fondamentale de longueur.", why: "Né en France en 1791 comme 1/10 000 000 de la distance pôle Nord–équateur. Le nom vient du grec <i>metron</i> = mesure. En Italie, il est obligatoire par la loi depuis 1861. Depuis 1983, il est défini avec la vitesse de la lumière." },
        { id: "sotto", label: "Sous-multiples", x: 22, y: 64, color: "#16a34a", html: "dm, cm, mm : parties du mètre.", why: "Du latin : <i>déci</i> = dixième partie, <i>centi</i> = centième, <i>milli</i> = millième." },
        { id: "multi", label: "Multiples", x: 78, y: 64, color: "#dc2626", html: "dam, hm, km : plus grands que le mètre.", why: "Du grec : <i>déca</i> = 10, <i>hecto</i> = 100, <i>kilo</i> = 1000. Ainsi : le latin pour les petites parties, le grec pour les grandes !" },
        { id: "dieci", label: "Règle du 10", x: 50, y: 78, color: "#a855f7", html: "Chaque unité est 10 fois celle qui est à sa droite.", why: "Le système métrique est décimal comme nos nombres : c'est pour ça que convertir revient à déplacer des chiffres entre centaines, dizaines et unités." },
        { id: "conv", label: "Équivalences", x: 22, y: 92, color: "#14b8a6", html: "Écrire la même mesure avec une autre unité : 3 m = 300 cm.", why: "Elles servent à comparer et à faire des calculs : on ne peut additionner ou soustraire que des mesures dans la même unité." },
        { id: "strumenti", label: "Instruments", x: 78, y: 92, color: "#ec4899", html: "Règle, mètre de couturière, mètre ruban, roue de mesure.", why: "Chaque instrument convient à des longueurs différentes : la règle pour le cahier, le mètre ruban pour la pièce." }
      ],
      edges: [
        ["misurare", "unita", "a besoin d'une"],
        ["unita", "metro", "c'est le"],
        ["metro", "sotto", "se divise en"],
        ["metro", "multi", "se multiplie en"],
        ["sotto", "dieci", "suivent la"],
        ["multi", "dieci", "suivent la"],
        ["dieci", "conv", "permet les"],
        ["dieci", "strumenti", "se lit sur les"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : équivalences",
      questions: [
        { type: "num", q: "3 m = … dm", answer: 30, unit: "dm", explain: "De m à dm, on descend d'une marche : 3 × 10 = 30 dm." },
        { type: "num", q: "1 m 4 dm 6 cm = … cm", answer: 146, unit: "cm", explain: "100 + 40 + 6 = 146 cm." },
        { type: "mc", q: "Quelle mesure est la plus longue ?", options: ["90 cm", "1 m", "9 dm"], answer: 1, explain: "1 m = 100 cm ; 9 dm = 90 cm. La plus longue est 1 m." }
      ]
    }
  ],
  glossary: [
    { t: "Mesurer", d: "Découvrir combien de fois une unité de mesure est contenue dans une grandeur." },
    { t: "Mètre (m)", d: "Unité fondamentale de mesure de la longueur." },
    { t: "Décimètre (dm)", d: "La dixième partie du mètre : 1 m = 10 dm." },
    { t: "Centimètre (cm)", d: "La centième partie du mètre : 1 m = 100 cm." },
    { t: "Millimètre (mm)", d: "La millième partie du mètre : 1 m = 1000 mm ; 1 cm = 10 mm." },
    { t: "Kilomètre (km)", d: "Multiple du mètre : 1 km = 1000 m." },
    { t: "Sous-multiples", d: "Unités plus petites que l'unité fondamentale." },
    { t: "Multiples", d: "Unités plus grandes que l'unité fondamentale." },
    { t: "Équivalence", d: "La même mesure écrite avec une unité différente (ex. 2 m = 200 cm)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "text", q: "Quelle est l'unité fondamentale de mesure de la longueur ?", answer: ["mètre", "metre", "le mètre", "le metre", "m"], explain: "Le mètre (m)." },
      { type: "num", q: "1 dm = … cm", answer: 10, unit: "cm", explain: "Le décimètre contient 10 centimètres." },
      { type: "num", q: "5 cm = … mm", answer: 50, unit: "mm", explain: "De cm à mm : × 10 → 50 mm." },
      { type: "num", q: "700 cm = … m", answer: 7, unit: "m", explain: "De cm à m, on monte de deux marches : 700 : 100 = 7 m." },
      { type: "mc", q: "Pour mesurer la longueur de la classe, tu utilises…", options: ["les millimètres", "les mètres", "les kilomètres"], answer: 1, explain: "Une classe mesure quelques mètres de long." },
      { type: "tf", q: "1 m = 1000 mm.", answer: true, explain: "1 m = 10 dm = 100 cm = 1000 mm." },
      { type: "mc", q: "Le préfixe « centi » veut dire…", options: ["dix fois plus grand", "la centième partie", "mille"], answer: 1, explain: "Centi = la centième partie : 1 cm = 1/100 de mètre." },
      { type: "num", q: "2 m 5 dm = … dm", answer: 25, unit: "dm", explain: "2 m = 20 dm ; 20 + 5 = 25 dm." },
      { type: "order", q: "Range de la mesure la plus courte à la plus longue.", items: ["8 mm", "3 cm", "5 dm", "90 cm", "2 m"], explain: "En mm : 8, 30, 500, 900, 2000." },
      { type: "num", q: "Un ruban mesure 1 m. Tu en coupes 35 cm. Combien de cm restent ?", answer: 65, unit: "cm", explain: "1 m = 100 cm ; 100 − 35 = 65 cm." },
      { type: "tf", q: "Pour additionner 1 m et 20 cm, il suffit de faire 1 + 20 = 21.", answer: false, explain: "Il faut utiliser la même unité : 100 cm + 20 cm = 120 cm." },
      { type: "mc", q: "En quelle année et dans quel pays est né le mètre ?", options: ["1791, en France", "1492, en Espagne", "1861, en Italie"], answer: 0, explain: "Il a été défini en France en 1791 ; l'Italie l'a adopté par la loi en 1861." }
    ],
    gen: [["lengthConv", 3]]
  }
});
