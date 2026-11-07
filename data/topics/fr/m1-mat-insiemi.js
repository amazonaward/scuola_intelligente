TOPIC('fr', {
  id: "m1-mat-insiemi",
  title: "Les ensembles",
  intro: "Un <b>ensemble</b> est une collection d'objets choisis selon un critère précis. Avec les ensembles, nous pouvons organiser nos idées, classer, résoudre des problèmes et comprendre le langage qu'utilisent toutes les mathématiques. Apprenons à les <b>représenter</b> et à faire les <b>opérations</b> : intersection, réunion, différence, complémentaire et produit cartésien.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce qu'un ensemble ?",
      html: `<p>En mathématiques, un <b>ensemble</b> est un regroupement d'objets (appelés <b>éléments</b>) pour lequel on peut établir <b>sans ambiguïté</b> si un objet en fait partie ou non.</p>
<ul>
<li>« Les mois de l'année qui commencent par la lettre M » → <b>c'est un ensemble</b> : mars, mai. Aucun doute.</li>
<li>« Les nombres pairs inférieurs à 10 » → <b>c'est un ensemble</b> : 0, 2, 4, 6, 8.</li>
<li>« Les plus beaux films » → <b>ce n'est pas un ensemble</b> : « beau » dépend des goûts !</li>
</ul>
<p><b>Symboles</b> :</p>
<ul>
<li>les ensembles se notent avec des lettres <b>majuscules</b> : A, B, C… ; les éléments avec des lettres minuscules ou des nombres ;</li>
<li><b>∈</b> signifie « <b>appartient à</b> » : 4 ∈ P (4 appartient à l'ensemble des nombres pairs) ;</li>
<li><b>∉</b> signifie « <b>n'appartient pas à</b> » : 7 ∉ P ;</li>
<li>un ensemble sans éléments est l'<b>ensemble vide</b> : ∅ ou { } (par ex. « les mois de 32 jours ») ;</li>
<li>le nombre d'éléments s'appelle le <b>cardinal</b> : |A| ou n(A). Un ensemble peut être <b>fini</b> (les lettres de l'alphabet) ou <b>infini</b> (les nombres naturels).</li>
</ul>`
    },
    {
      type: "text",
      title: "Trois façons de représenter un ensemble",
      html: `<p>Un même ensemble peut s'écrire de trois façons. Prenons A = les voyelles de l'alphabet.</p>
<ol>
<li><b>Représentation par énumération</b> (ou en extension) : on écrit tous les éléments entre accolades, séparés par des virgules, <b>sans répétitions</b> et dans n'importe quel ordre :<br><b>A = { a, e, i, o, u }</b></li>
<li><b>Représentation par caractéristique</b> (ou en compréhension) : on écrit la propriété qu'ils ont en commun :<br><b>A = { x | x est une voyelle de l'alphabet (sans le y) }</b><br>(on lit : « A est l'ensemble des x tels que x est une voyelle »). Elle est très utile pour les ensembles infinis : P = { x | x est un nombre naturel pair }.</li>
<li><b>Représentation graphique</b> (diagramme d'<b>Euler-Venn</b>) : on dessine une ligne fermée et, à l'intérieur, on place les éléments avec un point. Ce qui est dehors n'appartient pas à l'ensemble.</li>
</ol>
<p>Attention : { 1, 2, 3 } et { 3, 1, 2 } sont le <b>même</b> ensemble (l'ordre ne compte pas), et { 1, 1, 2 } s'écrit simplement { 1, 2 }.</p>`
    },
    {
      type: "svg",
      title: "Le diagramme d'Euler-Venn",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<ellipse cx="180" cy="150" rx="140" ry="105" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="4"/>
<text x="60" y="55" font-size="28" font-weight="bold" fill="#1d4ed8">A</text>
<g font-size="22" font-weight="bold" fill="#1e3a8a">
<circle cx="120" cy="110" r="5"/><text x="132" y="117">a</text>
<circle cx="210" cy="100" r="5"/><text x="222" y="107">e</text>
<circle cx="140" cy="180" r="5"/><text x="152" y="187">i</text>
<circle cx="230" cy="170" r="5"/><text x="242" y="177">o</text>
<circle cx="185" cy="225" r="5"/><text x="197" y="232">u</text>
</g>
<g font-size="22" fill="#64748b">
<circle cx="380" cy="80" r="5"/><text x="392" y="87">b</text>
<circle cx="430" cy="160" r="5"/><text x="442" y="167">m</text>
<circle cx="370" cy="230" r="5"/><text x="382" y="237">z</text>
</g>
<text x="480" y="60" font-size="18" fill="#0f172a">a ∈ A</text>
<text x="480" y="95" font-size="18" fill="#0f172a">m ∉ A</text>
<text x="480" y="130" font-size="18" fill="#0f172a">|A| = 5</text>
<text x="330" y="285" font-size="15" fill="#475569">en dehors de la ligne : n'appartiennent pas</text>
</svg>`,
      caption: "Il porte ce nom en l'honneur de Leonhard Euler (1707–1783) et de John Venn (1834–1923), qui utilisèrent ces dessins pour raisonner en logique."
    },
    {
      type: "text",
      title: "Sous-ensembles et égalité",
      html: `<p>Un ensemble B est un <b>sous-ensemble</b> de A si <b>chaque</b> élément de B est aussi un élément de A. On écrit <b>B ⊆ A</b> (B est <b>inclus</b> dans A).</p>
<p>Exemple : A = { 1, 2, 3, 4, 5, 6 }, B = { 2, 4, 6 } → B ⊆ A. Dans le diagramme, B est dessiné <b>à l'intérieur</b> de A.</p>
<ul>
<li>Si B ⊆ A et que A a au moins un élément de plus, B est un sous-ensemble <b>propre</b> : <b>B ⊂ A</b>.</li>
<li>Tout ensemble est un sous-ensemble de lui-même, et l'ensemble vide est un sous-ensemble de <b>n'importe quel</b> ensemble : on les appelle sous-ensembles <b>impropres</b>.</li>
<li>Deux ensembles sont <b>égaux</b> s'ils ont exactement les mêmes éléments : A ⊆ B et B ⊆ A.</li>
</ul>
<p>L'ensemble de <b>tous</b> les sous-ensembles de A s'appelle l'<b>ensemble des parties</b> P(A). Si A a n éléments, il a <b>2ⁿ</b> sous-ensembles. Pour A = { x, y } : ∅, {x}, {y}, {x, y} → 4 = 2².</p>
<p>Attention aux symboles : <b>∈</b> relie un <b>élément</b> à un ensemble (2 ∈ A) ; <b>⊆</b> relie un <b>ensemble</b> à un ensemble ({2} ⊆ A).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : représenter les ensembles",
      questions: [
        { type: "tf", q: "« Les élèves sympathiques de la classe » est un ensemble au sens mathématique.", answer: false, explain: "« Sympathique » est un jugement personnel : on ne peut pas établir sans ambiguïté qui en fait partie." },
        { type: "mc", q: "Comment écrit-on par énumération l'ensemble des lettres du mot « MAMAN » ?", options: ["{ M, A, M, A, N }", "{ M, A, N }", "{ MAMAN }", "{ M, M, M }"], answer: 1, explain: "Les éléments ne se répètent pas : les lettres différentes sont seulement M, A et N." },
        { type: "mc", q: "Si A = { 3, 5, 7 }, quelle écriture est correcte ?", options: ["5 ⊆ A", "{5} ∈ A", "5 ∈ A", "4 ∈ A"], answer: 2, explain: "5 est un élément : on utilise ∈. {5} est un ensemble : on écrirait {5} ⊆ A." },
        { type: "num", q: "Combien de sous-ensembles a un ensemble de 3 éléments ?", answer: 8, tol: 0, explain: "2³ = 8, en comptant aussi l'ensemble vide et l'ensemble lui-même." }
      ]
    },
    {
      type: "text",
      title: "Les opérations sur les ensembles",
      html: `<p>Prenons A = { 1, 2, 3, 4, 5, 6 } (les nombres du dé) et B = { 2, 4, 6, 8 } (pairs inférieurs à 10, sans le 0).</p>
<table>
<tr><th>Opération</th><th>Symbole</th><th>Signification</th><th>Résultat</th></tr>
<tr><td><b>Intersection</b></td><td>A ∩ B</td><td>éléments qui sont <b>dans A et dans B</b> (communs)</td><td>{ 2, 4, 6 }</td></tr>
<tr><td><b>Réunion</b></td><td>A ∪ B</td><td>éléments qui sont <b>dans A ou dans B</b> (dans au moins un), pris une seule fois</td><td>{ 1, 2, 3, 4, 5, 6, 8 }</td></tr>
<tr><td><b>Différence</b></td><td>A − B (ou A \\ B)</td><td>éléments de A qui ne sont <b>pas</b> dans B</td><td>{ 1, 3, 5 }</td></tr>
<tr><td><b>Différence</b></td><td>B − A</td><td>éléments de B qui ne sont pas dans A</td><td>{ 8 }</td></tr>
</table>
<ul>
<li>Si A ∩ B = ∅, les ensembles sont dits <b>disjoints</b> (par ex. pairs et impairs).</li>
<li>La réunion et l'intersection ont la propriété <b>commutative</b> : A ∪ B = B ∪ A. La différence, <b>non</b> !</li>
<li>Si B ⊆ U (U = ensemble <b>univers</b>, qui contient tout), la différence U − B s'appelle le <b>complémentaire</b> de B par rapport à U : B̄ ou C<sub>U</sub>B.</li>
<li><b>Règle pour compter</b> : |A ∪ B| = |A| + |B| − |A ∩ B|. On soustrait les éléments communs, sinon on les compterait deux fois. Ici : 6 + 4 − 3 = 7 ✔️</li>
</ul>`
    },
    {
      type: "svg",
      title: "Les opérations dessinées",
      svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#ffffff"/>
<defs>
<clipPath id="ia"><circle cx="80" cy="95" r="55"/></clipPath>

</defs>
<circle cx="80" cy="95" r="55" fill="#ffffff" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="130" cy="95" r="55" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<circle cx="130" cy="95" r="55" fill="#a855f7" clip-path="url(#ia)"/>
<circle cx="80" cy="95" r="55" fill="none" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="130" cy="95" r="55" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="105" y="185" font-size="22" font-weight="bold" text-anchor="middle" fill="#581c87">A ∩ B</text>
<circle cx="280" cy="95" r="55" fill="#a855f7" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="330" cy="95" r="55" fill="#a855f7" stroke="#dc2626" stroke-width="3"/>
<circle cx="280" cy="95" r="55" fill="none" stroke="#1d4ed8" stroke-width="3"/>
<text x="305" y="185" font-size="22" font-weight="bold" text-anchor="middle" fill="#581c87">A ∪ B</text>
<circle cx="470" cy="95" r="55" fill="#a855f7" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="520" cy="95" r="55" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<circle cx="470" cy="95" r="55" fill="none" stroke="#1d4ed8" stroke-width="3"/>
<text x="495" y="185" font-size="22" font-weight="bold" text-anchor="middle" fill="#581c87">A − B</text>
<g font-size="18" font-weight="bold"><text x="45" y="40" fill="#1d4ed8">A</text><text x="160" y="40" fill="#dc2626">B</text><text x="245" y="40" fill="#1d4ed8">A</text><text x="360" y="40" fill="#dc2626">B</text><text x="435" y="40" fill="#1d4ed8">A</text><text x="550" y="40" fill="#dc2626">B</text></g>
<text x="300" y="212" font-size="15" text-anchor="middle" fill="#475569">en violet : le résultat de l'opération</text>
</svg>`,
      caption: "Intersection = la partie commune (le « et ») ; réunion = tout (le « ou ») ; différence = A privé de la partie de B."
    },
    {
      type: "example",
      title: "Exemple pratique : le sport en classe",
      html: `<p>Dans une classe de <b>24</b> élèves, <b>14</b> jouent au football, <b>9</b> font de la natation et <b>5</b> pratiquent les deux sports. Combien ne font aucun des deux ?</p>
<ol>
<li>Dessine deux cercles qui se coupent : F (football) et N (natation), à l'intérieur du rectangle U (la classe).</li>
<li>Dans l'intersection, écris <b>5</b>.</li>
<li>Football seulement : 14 − 5 = <b>9</b>. Natation seulement : 9 − 5 = <b>4</b>.</li>
<li>Au moins un sport : |F ∪ N| = 14 + 9 − 5 = <b>18</b> (ou 9 + 5 + 4).</li>
<li>Aucun sport (complémentaire) : 24 − 18 = <b>6</b> élèves.</li>
</ol>
<p>Erreur typique : additionner 14 + 9 = 23 et conclure qu'un seul élève ne fait pas de sport. Mais ainsi, les 5 qui font les deux sont comptés <b>deux fois</b> !</p>`
    },
    {
      type: "text",
      title: "Le produit cartésien",
      html: `<p>Le <b>produit cartésien</b> A × B est l'ensemble de tous les <b>couples ordonnés</b> (a ; b) dont le premier élément est pris dans A et le second dans B.</p>
<p>A = { pâtes, riz }, B = { tomate, pesto, beurre } →<br>A × B = { (pâtes ; tomate), (pâtes ; pesto), (pâtes ; beurre), (riz ; tomate), (riz ; pesto), (riz ; beurre) }</p>
<ul>
<li>Le nombre de couples est <b>|A| × |B|</b> = 2 × 3 = 6. C'est pour cela qu'on l'appelle « produit » !</li>
<li>Les couples sont <b>ordonnés</b> : (pâtes ; pesto) ≠ (pesto ; pâtes), donc en général A × B ≠ B × A.</li>
<li>On le représente avec un <b>tableau à double entrée</b>, un <b>diagramme à flèches</b> ou un <b>repère cartésien</b> (un réseau de points).</li>
</ul>
<p>Il porte ce nom en l'honneur de <b>René Descartes</b> (1596–1650), le philosophe français qui inventa le repère cartésien avec les coordonnées (x ; y).</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : combien d'associations ?",
      html: `<p>Tu as <b>3 T-shirts</b> (rouge, bleu, vert) et <b>2 pantalons</b> (jean, jogging). Combien de tenues différentes peux-tu composer ?</p>
<table>
<tr><th>×</th><th>jean</th><th>jogging</th></tr>
<tr><td><b>rouge</b></td><td>(rouge ; jean)</td><td>(rouge ; jogging)</td></tr>
<tr><td><b>bleu</b></td><td>(bleu ; jean)</td><td>(bleu ; jogging)</td></tr>
<tr><td><b>vert</b></td><td>(vert ; jean)</td><td>(vert ; jogging)</td></tr>
</table>
<p>3 × 2 = <b>6 associations</b>. Si tu ajoutes 4 paires de chaussures : 6 × 4 = 24 combinaisons ! C'est le même raisonnement que pour compter les plaques d'immatriculation ou les mots de passe possibles.</p>`
    },
    {
      type: "widget",
      title: "Où va chaque nombre ?",
      widget: "classify",
      options: {
        groups: ["Multiples de 2 seulement", "Multiples de 2 et de 3 (intersection)", "Multiples de 3 seulement", "Ni l'un ni l'autre"],
        items: [["4", 0], ["6", 1], ["9", 2], ["12", 1], ["5", 3], ["8", 0], ["15", 2], ["18", 1], ["7", 3], ["10", 0], ["21", 2], ["1", 3]]
      },
      caption: "Avec U = {1…21}, A = multiples de 2, B = multiples de 3 : l'intersection A ∩ B, ce sont les multiples de 6 !"
    },
    {
      type: "curiosity",
      title: "Cantor et les infinis de tailles différentes",
      html: `<p>La théorie des ensembles fut créée par le mathématicien allemand <b>Georg Cantor</b> entre <b>1874</b> et 1897. Il découvrit une chose qui laissa sans voix les mathématiciens de son époque : <b>il existe des infinis plus grands que d'autres</b> !</p>
<p>Les nombres naturels (0, 1, 2, 3…) et les nombres pairs sont « aussi nombreux » : on peut les associer 0↔0, 1↔2, 2↔4, 3↔6… sans qu'il n'en reste aucun. En revanche, les points d'une droite sont « plus nombreux » que les nombres naturels : on ne peut pas les compter un à un, même en un temps infini. Le mathématicien David Hilbert dit : « Personne ne pourra nous chasser du paradis que Cantor a créé pour nous. »</p>`
    },
    {
      type: "curiosity",
      title: "Le paradoxe du barbier",
      html: `<p>En <b>1901</b>, le philosophe anglais <b>Bertrand Russell</b> découvrit un problème dans la théorie des ensembles, qu'il expliqua ainsi : dans un village, le barbier rase <b>tous et seulement</b> les hommes qui <b>ne</b> se rasent <b>pas</b> eux-mêmes. Qui rase le barbier ?</p>
<ul>
<li>S'il se rase lui-même, alors il ne devrait pas se raser (il rase seulement ceux qui ne se rasent pas eux-mêmes).</li>
<li>S'il ne se rase pas lui-même, alors il devrait se raser !</li>
</ul>
<p>C'est un <b>paradoxe</b> : un tel barbier n'existe pas. Pour éviter des problèmes semblables, les mathématiciens ont dû établir des règles plus rigoureuses sur ce qui peut être un ensemble. Voilà pourquoi la définition dit « sans ambiguïté » !</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre",
      intro: "Les ensembles sont partout autour de toi : essaie de les voir de ces façons.",
      tabs: [
        {
          label: "🧺 Avec des cerceaux (hula-hoop)",
          html: `<p>Dans les écoles de nombreux pays (et dans la méthode Montessori), on fait les ensembles au gymnase : deux cerceaux posés sur le sol qui se chevauchent un peu. Chacun va où il doit : dans le cerceau rouge, ceux qui ont un frère ou une sœur, dans le bleu, ceux qui ont un animal. Celui qui a les deux se place dans la partie commune (<b>intersection</b>) ; celui qui n'a ni l'un ni l'autre reste <b>dehors</b> (complémentaire).</p><p>Essaie chez toi avec deux lacets et tes jouets : petites voitures rouges et jouets à roues… où va la petite voiture rouge ?</p>`
        },
        {
          label: "🔍 Comme un moteur de recherche",
          html: `<p>Quand tu cherches sur internet ou que tu filtres les produits d'une boutique en ligne, tu utilises les opérations entre ensembles !</p><ul><li>« chaussures <b>ET</b> rouges » → <b>intersection</b> : seulement les chaussures qui sont aussi rouges ;</li><li>« chats <b>OU</b> chiens » → <b>réunion</b> : toutes les pages qui parlent d'au moins l'un des deux ;</li><li>« pizza <b>SANS</b> ananas » → <b>différence</b> : les pages sur la pizza, moins celles avec l'ananas.</li></ul><p>Ces opérateurs s'appellent <b>AND, OR, NOT</b> (ET, OU, NON) et viennent de l'<b>algèbre de Boole</b> (George Boole, 1854). Ils sont à la base du fonctionnement des ordinateurs !</p>`
        },
        {
          label: "📊 Le diagramme de Carroll",
          html: `<p>L'auteur d'<i>Alice au pays des merveilles</i>, <b>Lewis Carroll</b>, était aussi mathématicien ! Il inventa une autre façon de dessiner les ensembles : un tableau. Il est très utilisé dans les écoles anglaises.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#ffffff"/><rect x="150" y="50" width="420" height="190" fill="#f8fafc" stroke="#0f172a" stroke-width="3"/><line x1="360" y1="50" x2="360" y2="240" stroke="#0f172a" stroke-width="3"/><line x1="150" y1="145" x2="570" y2="145" stroke="#0f172a" stroke-width="3"/><g font-size="18" font-weight="bold" text-anchor="middle"><text x="255" y="38" fill="#1d4ed8">pairs</text><text x="465" y="38" fill="#1d4ed8">PAS pairs</text><text x="75" y="102" fill="#dc2626">multiples</text><text x="75" y="122" fill="#dc2626">de 3</text><text x="75" y="192" fill="#dc2626">PAS multiples</text><text x="75" y="212" fill="#dc2626">de 3</text></g><g font-size="24" text-anchor="middle" fill="#0f172a"><text x="255" y="105">6, 12, 18</text><text x="465" y="105">3, 9, 15</text><text x="255" y="200">2, 4, 8, 10</text><text x="465" y="200">1, 5, 7, 11</text></g><rect x="150" y="50" width="210" height="95" fill="#a855f7" fill-opacity="0.25"/></svg>`
        },
        {
          label: "🧊 Le produit cartésien en 3D",
          html: `<p>Le produit cartésien A × B peut se « voir » comme un <b>rectangle de cubes</b> : chaque ligne est un élément de A, chaque colonne un élément de B, et chaque cube est un couple. Avec 3 T-shirts et 4 pantalons, tu obtiens 3 × 4 = 12 cubes = 12 associations. Change les nombres avec les curseurs !</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "🧩 Associe symbole et signification",
          html: "<p>Relie chaque symbole à sa signification.</p>",
          widget: "match",
          options: { pairs: [["∈", "appartient à"], ["∉", "n'appartient pas à"], ["∅", "ensemble vide"], ["⊆", "est un sous-ensemble de"], ["∩", "intersection"], ["∪", "réunion"], ["×", "produit cartésien"]] }
        },
        {
          "label": "🇫🇷 Les « patates » en France",
          "html": "<p>En <b>France</b>, beaucoup d'enseignants et d'élèves appellent, en plaisantant, les diagrammes d'Euler-Venn des <b>« patates »</b>, parce qu'on les dessine comme des lignes fermées arrondies, pas forcément des cercles parfaits. C'est une idée importante : <b>la forme ne compte pas</b>, ce qui compte, c'est <b>qui est dedans et qui est dehors</b>.</p><p>Essayons. Univers U = nombres de 1 à 12. A = multiples de 2, B = multiples de 3.</p><ol><li>Dessine deux « patates » qui se <b>chevauchent</b> un peu, dans un rectangle (l'univers).</li><li>Commence toujours par la <b>partie commune</b> : quels nombres sont multiples de 2 et de 3 à la fois ? <b>6 et 12</b> → A ∩ B = {6, 12}.</li><li>Ensuite, le reste de A : 2, 4, 8, 10.</li><li>Ensuite, le reste de B : 3, 9.</li><li>Enfin, <b>en dehors des patates</b> mais dans l'univers : 1, 5, 7, 11.</li></ol><p>Maintenant lis le dessin : A ∪ B = {2, 3, 4, 6, 8, 9, 10, 12} (tout ce qui est dans au moins une patate) ; le <b>complémentaire</b> de A ∪ B = {1, 5, 7, 11}. Tu as aussi découvert une règle : les multiples communs de 2 et de 3 sont les <b>multiples de 6</b> !</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><rect x=\"20\" y=\"20\" width=\"560\" height=\"260\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"32\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">U = {1, 2, …, 12}</text><path d=\"M120,150 C110,70 230,50 300,90 C350,120 360,200 300,230 C230,265 130,230 120,150 Z\" fill=\"#bfdbfe\" fill-opacity=\"0.7\" stroke=\"#1d4ed8\" stroke-width=\"3\"/><path d=\"M260,140 C250,80 360,55 430,85 C500,115 490,215 420,235 C340,258 270,210 260,140 Z\" fill=\"#fbcfe8\" fill-opacity=\"0.7\" stroke=\"#be185d\" stroke-width=\"3\"/><text x=\"150\" y=\"80\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">A : multiples de 2</text><text x=\"380\" y=\"72\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#be185d\" font-weight=\"bold\">B : multiples de 3</text><text x=\"160\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">2</text><text x=\"200\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">4</text><text x=\"170\" y=\"190\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">8</text><text x=\"220\" y=\"210\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">10</text><text x=\"282\" y=\"150\" font-size=\"22\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">6</text><text x=\"286\" y=\"190\" font-size=\"22\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">12</text><text x=\"380\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">3</text><text x=\"410\" y=\"195\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">9</text><text x=\"60\" y=\"260\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">1</text><text x=\"510\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">5</text><text x=\"530\" y=\"250\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">7</text><text x=\"60\" y=\"110\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\">11</text></svg>"
        },
        {
          "label": "🇺🇸 La « New Math » américaine : compter en associant",
          "html": "<p>Dans les années 1960, aux <b>États-Unis</b>, une grande réforme de l'école appelée <b>« New Math »</b> amena les ensembles dès l'école primaire. L'une des idées clés, empruntée à Cantor, était celle-ci : <b>deux ensembles ont le même nombre d'éléments si on peut les associer un à un</b>, sans qu'il n'en reste aucun (c'est ce qu'on appelle une <b>correspondance biunivoque</b>). Il n'est même pas nécessaire de savoir compter !</p><ol><li>A = {🍎, 🍐, 🍌} et B = {a, b, c}. Associe : 🍎↔a, 🍐↔b, 🍌↔c. Personne ne reste seul → A et B ont le <b>même nombre</b> d'éléments (3).</li><li>C = {🐶, 🐱, 🐭, 🐰} et B = {a, b, c} : après les associations, il reste un animal → C a <b>plus</b> d'éléments que B.</li><li>Maintenant, la surprise. N = {1, 2, 3, 4, …} et P = {2, 4, 6, 8, …}. Associe chaque nombre à son double : 1↔2, 2↔4, 3↔6, 4↔8… Il n'en reste jamais aucun !</li></ol><p>Donc les nombres pairs sont « aussi nombreux » que tous les nombres naturels, même si P n'est qu'une partie de N. Avec les ensembles <b>infinis</b>, il se passe des choses impossibles avec les ensembles finis : c'est exactement ce que découvrit Cantor.</p><p>🎯 Essaie : comment associes-tu N à l'ensemble des multiples de 10 ?</p>"
        }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : opérations",
      questions: [
        { type: "mc", q: "A = { 1, 3, 5, 7 }, B = { 3, 4, 5 }. Que vaut A ∩ B ?", options: ["{ 1, 3, 4, 5, 7 }", "{ 3, 5 }", "{ 1, 7 }", "{ 4 }"], answer: 1, explain: "Les éléments communs sont 3 et 5." },
        { type: "mc", q: "Avec les mêmes ensembles, que vaut A − B ?", options: ["{ 1, 7 }", "{ 4 }", "{ 3, 5 }", "∅"], answer: 0, explain: "On enlève de A les éléments qui sont aussi dans B : il reste 1 et 7." },
        { type: "num", q: "|A| = 10, |B| = 7, |A ∩ B| = 3. Que vaut |A ∪ B| ?", answer: 14, tol: 0, explain: "10 + 7 − 3 = 14 : les éléments communs ne sont comptés qu'une seule fois." },
        { type: "tf", q: "A × B et B × A sont toujours le même ensemble.", answer: false, explain: "Les couples sont ordonnés : (1 ; a) est différent de (a ; 1). Ils ont cependant le même nombre d'éléments." }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : pourquoi les ensembles sont le langage des mathématiques",
      nodes: [
        { id: "classificare", label: "Classer", x: 50, y: 6, color: "#64748b", html: "Regrouper des objets selon une caractéristique.", why: "C'est l'une des premières activités de la pensée : déjà Aristote (IV<sup>e</sup> siècle av. J.-C.) classait animaux et concepts en genres et espèces." },
        { id: "insieme", label: "Ensemble", x: 50, y: 22, color: "#2563eb", html: "Collection d'éléments bien définie.", why: "Georg Cantor (1874) en fit un concept mathématique rigoureux : « un ensemble est une collection d'objets distincts, pensés comme un tout »." },
        { id: "appartenenza", label: "Appartenance ∈", x: 15, y: 36, color: "#0ea5e9", html: "Un élément appartient ou n'appartient pas : pas de demi-mesure.", why: "C'est le principe logique du « tiers exclu » (Aristote) : une chose est ou n'est pas. Le symbole ∈ vient de la lettre grecque epsilon, initiale de « est », choisie par Giuseppe Peano en 1889." },
        { id: "rappresentazioni", label: "Représentations", x: 85, y: 36, color: "#16a34a", html: "Énumération, caractéristique, diagramme d'Euler-Venn.", why: "Euler utilisa les cercles dans les « Lettres à une princesse d'Allemagne » (1768) ; John Venn les perfectionna en 1880 pour la logique." },
        { id: "sottoinsiemi", label: "Sous-ensembles", x: 25, y: 56, color: "#9333ea", html: "B ⊆ A si chaque élément de B est dans A.", why: "Les sous-ensembles d'un ensemble de n éléments sont au nombre de 2ⁿ : pour chaque élément, on décide « dedans » ou « dehors », 2 choix répétés n fois." },
        { id: "operazioni", label: "Opérations ∩ ∪ −", x: 50, y: 56, color: "#ea580c", html: "Intersection, réunion, différence, complémentaire.", why: "Elles correspondent aux mots « et », « ou », « non » de la logique. George Boole (1854) créa une algèbre de la logique qui fait aujourd'hui fonctionner les circuits des ordinateurs." },
        { id: "cartesiano", label: "Produit cartésien", x: 78, y: 56, color: "#dc2626", html: "Tous les couples ordonnés (a ; b).", why: "Il naît de l'idée de Descartes (1637) de décrire chaque point du plan par un couple de nombres : les coordonnées." },
        { id: "contare", label: "Compter : |A ∪ B|", x: 35, y: 80, color: "#f59e0b", html: "|A ∪ B| = |A| + |B| − |A ∩ B|.", why: "C'est le « principe d'inclusion-exclusion » : on soustrait l'intersection parce qu'elle a été comptée deux fois." },
        { id: "fondamenti", label: "Fondements des mathématiques", x: 72, y: 82, color: "#0f766e", html: "Nombres, fonctions, géométrie se définissent avec les ensembles.", why: "Après le paradoxe de Russell (1901), Zermelo (1908) et Fraenkel établirent les axiomes de la théorie des ensembles (ZF), base de presque toutes les mathématiques modernes." }
      ],
      edges: [["classificare", "insieme", "se formalise en"], ["insieme", "appartenenza", "repose sur"], ["insieme", "rappresentazioni", "s'écrit avec"], ["insieme", "sottoinsiemi", "contient"], ["insieme", "operazioni", "se combine avec"], ["insieme", "cartesiano", "se multiplie"], ["operazioni", "contare", "permet de"], ["sottoinsiemi", "fondamenti", "structure"], ["operazioni", "fondamenti", "logique"], ["cartesiano", "fondamenti", "coordonnées"]]
    }
  ],
  glossary: [
    { t: "Ensemble", d: "Regroupement d'objets pour lequel on peut dire sans ambiguïté si un objet en fait partie." },
    { t: "Élément", d: "Chacun des objets qui forment un ensemble." },
    { t: "Ensemble vide", d: "Ensemble sans éléments : ∅." },
    { t: "Cardinal", d: "Nombre d'éléments d'un ensemble." },
    { t: "Sous-ensemble", d: "Ensemble dont tous les éléments appartiennent à un autre ensemble." },
    { t: "Intersection", d: "Ensemble des éléments communs à deux ensembles : A ∩ B." },
    { t: "Réunion", d: "Ensemble des éléments qui appartiennent à au moins un des deux ensembles : A ∪ B." },
    { t: "Différence", d: "Éléments du premier ensemble qui n'appartiennent pas au second : A − B." },
    { t: "Complémentaire", d: "Éléments de l'univers qui n'appartiennent pas à un ensemble." },
    { t: "Produit cartésien", d: "Ensemble de tous les couples ordonnés (a ; b) avec a ∈ A et b ∈ B." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Lequel de ces regroupements est un ensemble au sens mathématique ?", options: ["Les livres intéressants", "Les nombres impairs inférieurs à 10", "Les plus belles chansons", "Les garçons grands"], answer: 1, explain: "{ 1, 3, 5, 7, 9 } : on établit sans doute qui en fait partie." },
      { type: "num", q: "Combien d'éléments a l'ensemble des lettres du mot « FORMES » ?", answer: 6, tol: 0, explain: "{ F, O, R, M, E, S } : 6 lettres différentes." },
      { type: "mc", q: "L'ensemble des mois de 32 jours est…", options: ["infini", "vide", "formé d'un élément", "pas un ensemble"], answer: 1, explain: "Aucun mois n'a 32 jours : c'est l'ensemble vide ∅." },
      { type: "mc", q: "A = { a, b, c, d }, B = { c, d, e }. A ∪ B = ?", options: ["{ c, d }", "{ a, b }", "{ a, b, c, d, e }", "{ a, b, c, d, c, d, e }"], answer: 2, explain: "Tous les éléments, chacun une seule fois." },
      { type: "tf", q: "L'ensemble vide est un sous-ensemble de tout ensemble.", answer: true, explain: "Il n'a pas d'éléments qui puissent être « dehors » : c'est un sous-ensemble impropre de n'importe quel ensemble." },
      { type: "mc", q: "Deux ensembles sont dits disjoints quand…", options: ["ils sont égaux", "leur intersection est vide", "l'un est un sous-ensemble de l'autre", "ils ont le même nombre d'éléments"], answer: 1, explain: "Ils n'ont aucun élément en commun : A ∩ B = ∅." },
      { type: "num", q: "Dans une classe de 25 élèves, 15 suivent un cours d'anglais en plus, 12 d'espagnol en plus et 7 les deux. Combien ne suivent aucune langue en plus ?", answer: 5, tol: 0, explain: "Au moins une : 15 + 12 − 7 = 20. Aucune : 25 − 20 = 5." },
      { type: "num", q: "A a 4 éléments et B en a 5. Combien de couples a A × B ?", answer: 20, tol: 0, explain: "|A × B| = 4 × 5 = 20." },
      { type: "text", q: "Comment s'appelle le diagramme à lignes fermées utilisé pour représenter les ensembles ? (noms des deux mathématiciens)", answer: ["euler-venn", "euler venn", "venn", "euler", "d'euler-venn", "diagramme d'euler-venn", "patates"], explain: "Diagramme d'Euler-Venn." },
      { type: "mc", q: "U = { 1, 2, 3, 4, 5, 6 }, B = { 2, 3 }. Le complémentaire de B par rapport à U est…", options: ["{ 2, 3 }", "{ 1, 4, 5, 6 }", "∅", "{ 1, 2, 3, 4, 5, 6 }"], answer: 1, explain: "Les éléments de U qui ne sont pas dans B." },
      { type: "order", q: "Remets dans l'ordre les étapes pour résoudre un problème avec le diagramme de Venn", items: ["Dessine l'univers et les ensembles qui se coupent", "Écris le nombre d'éléments communs", "Calcule les parties « A seulement » et « B seulement »", "Calcule ce qui reste en dehors"], explain: "On part toujours de l'intersection, puis des parties exclusives, enfin du complémentaire." },
      { type: "mc", q: "Qui a fondé la théorie des ensembles ?", options: ["Euclide", "Georg Cantor", "Pythagore", "Isaac Newton"], answer: 1, explain: "Georg Cantor, à partir de 1874." }
    ]
  }
});
