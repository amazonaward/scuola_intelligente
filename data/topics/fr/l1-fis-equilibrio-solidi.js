TOPIC('fr', {
  id: "l1-fis-equilibrio-solidi",
  title: "L'équilibre des solides",
  intro: "Pourquoi une caisse reste-t-elle immobile sur une rampe ? Pourquoi un enfant léger peut-il soulever un adulte sur une balançoire à bascule ? Pourquoi la tour de Pise penche-t-elle sans tomber ? Derrière toutes ces questions se cachent deux idées simples et très puissantes : la <b>somme des forces</b> et la <b>somme des moments</b>. Dans cette leçon, nous apprenons à reconnaître quand un corps est en <b>équilibre</b> et à utiliser le plan incliné et les leviers, les « machines simples » grâce auxquelles l'humanité soulève des charges depuis des millénaires.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Que veut dire « être en équilibre » ?",
      html: `<p>Un corps est en <b>équilibre statique</b> quand il <b>reste immobile</b> tout en étant soumis à des forces. Une force est une grandeur <b>vectorielle</b> : elle a une valeur (en <b>newtons</b>, N), une direction et un sens. C'est pourquoi il ne suffit pas d'additionner des nombres : il faut additionner des <b>vecteurs</b>.</p>
<p>Pour un <b>point matériel</b> (un corps si petit, ou si compact, qu'on peut le traiter comme un point), il n'y a qu'une seule condition d'équilibre :</p>
<p style="text-align:center"><b>la résultante des forces appliquées est nulle : ΣF = 0</b></p>
<p>Les forces que l'on rencontre le plus souvent sont :</p>
<ul>
<li>le <b>poids</b> P = m·g, dirigé vers le centre de la Terre, avec g ≈ 9,8 m/s² (on arrondit souvent à 10 pour le calcul mental). Une masse de 50 kg a un poids P = 50 × 9,8 = 490 N. Attention : la <b>masse</b> se mesure en kg et elle est la même partout, le <b>poids</b> se mesure en N et il est environ six fois plus petit sur la Lune ;</li>
<li>la <b>réaction du support</b> : la force par laquelle un appui, un fil ou une paroi empêche un mouvement. Une table ne « veut » pas te faire tomber : elle se déforme d'un rien et pousse vers le haut avec une force égale au poids de l'objet ;</li>
<li>la <b>force de frottement statique</b>, qui s'oppose au glissement. Elle a une valeur maximale F<sub>s</sub> = μ<sub>s</sub>·N, où N est la force pressante perpendiculaire à la surface et μ<sub>s</sub> le coefficient de frottement statique (il dépend des deux surfaces).</li>
</ul>
<p>Exemple : un livre posé sur la table. Le poids P est dirigé vers le bas, la réaction N vers le haut : P = N, la résultante est nulle et le livre reste immobile. Si en revanche tu heurtes un mur en poussant un chariot, le mur te répond par une force égale et opposée (troisième loi de Newton), mais elle agit sur un autre corps : il ne faut pas la confondre avec le couple poids/réaction du support.</p>`
    },
    {
      type: "example",
      title: "Exemple : une lampe suspendue à deux fils",
      html: `<p>Une lampe de masse 4 kg est suspendue au plafond par un seul fil vertical. Quelle est la tension T du fil ?</p>
<ol>
<li>Le poids vaut P = 4 × 9,8 = 39,2 N vers le bas.</li>
<li>Le point matériel (la lampe) est immobile : ΣF = 0, donc la tension doit compenser le poids : T = 39,2 N vers le haut.</li>
</ol>
<p>Si la même lampe est tenue par <b>deux fils identiques</b> inclinés, chaque fil doit fournir une composante verticale de 19,6 N, mais la force totale le long du fil est <b>supérieure</b> à 19,6 N, car une partie de la tension « tire sur le côté ». Plus les fils sont proches de l'horizontale, plus la tension augmente : c'est pourquoi une corde tendue à l'horizontale, avec un poids au milieu, ne peut jamais devenir parfaitement droite sans se rompre.</p>`
    },
    {
      type: "svg",
      title: "Le plan incliné et la décomposition du poids",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="60,260 540,260 540,60" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
<text x="548" y="170" font-size="18" fill="#334155" font-weight="bold">h</text>
<text x="280" y="285" font-size="16" fill="#334155">base b</text>
<text x="190" y="190" font-size="16" fill="#334155" transform="rotate(-22 190 190)">longueur l</text>
<path d="M130 260 A70 70 0 0 0 126 238" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="140" y="250" font-size="18" fill="#dc2626" font-weight="bold">α</text>
<g transform="translate(300 160) rotate(-22.6)">
<rect x="-30" y="-40" width="60" height="40" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
</g>
<circle cx="292" cy="141" r="4" fill="#111827"/>
<line x1="292" y1="141" x2="292" y2="228" stroke="#16a34a" stroke-width="4"/>
<polygon points="292,236 285,222 299,222" fill="#16a34a"/>
<text x="262" y="250" font-size="18" fill="#16a34a" font-weight="bold">P</text>
<line x1="292" y1="141" x2="262" y2="154" stroke="#2563eb" stroke-width="4"/>
<polygon points="256,157 267,147 270,161" fill="#2563eb"/>
<text x="100" y="140" font-size="16" fill="#2563eb" font-weight="bold">P∥ = P sin α</text>
<line x1="292" y1="141" x2="322" y2="215" stroke="#9333ea" stroke-width="4"/>
<polygon points="324,221 314,208 328,203" fill="#9333ea"/>
<text x="345" y="225" font-size="16" fill="#9333ea" font-weight="bold">P⊥ = P cos α</text>
<text x="20" y="30" font-size="17" fill="#1f2937">Le poids se décompose en une partie le long du plan et une partie perpendiculaire.</text>
</svg>`,
      caption: "La composante parallèle P∥ tend à faire glisser le corps ; la composante perpendiculaire P⊥ est compensée par la réaction du plan. L'angle α est celui que fait le plan avec l'horizontale."
    },
    {
      type: "text",
      title: "Le plan incliné",
      html: `<p>Le <b>plan incliné</b> est une surface plane qui forme un angle α avec l'horizontale. Sur le corps posé dessus agit le poids P, vertical. Il est pratique de le décomposer selon deux axes : l'un <b>parallèle</b> au plan, l'autre <b>perpendiculaire</b>.</p>
<ul>
<li>P<sub>⊥</sub> = P·cos α : elle plaque le corps contre le plan et elle est compensée par la réaction du support N = P cos α ;</li>
<li>P<sub>∥</sub> = P·sin α : elle tire le corps vers le bas de la pente.</li>
</ul>
<p>Si le plan est <b>lisse</b> (sans frottement), pour maintenir le corps immobile il faut une force F, parallèle au plan, qui compense P<sub>∥</sub> :</p>
<p style="text-align:center"><b>F = P·sin α = P·h/l</b></p>
<p>où h est la hauteur du plan et l sa longueur (sin α = h/l dans le triangle rectangle). Comme h &lt; l, la force nécessaire est <b>inférieure au poids</b> : le plan incliné « fait économiser de la force », mais il faut parcourir une distance plus longue. Le travail (force × déplacement) pour atteindre la même hauteur reste le même, si les frottements sont négligeables.</p>
<p>Avec frottements, le corps reste immobile tant que P sin α ≤ μ<sub>s</sub>·P cos α, c'est-à-dire tant que <b>tan α ≤ μ<sub>s</sub></b>. Au-delà de l'angle critique, le corps commence à glisser, et la masse ne compte pas : la condition ne dépend pas du poids !</p>`
    },
    {
      type: "example",
      title: "Exemple : la rampe de la camionnette",
      html: `<p>Tu dois charger dans une camionnette un réfrigérateur de 80 kg. Le plateau est à 1 m du sol et tu utilises une rampe de 4 m (on néglige les frottements).</p>
<ol>
<li>Poids : P = 80 × 9,8 = 784 N.</li>
<li>Force parallèle nécessaire pour le maintenir immobile (ou le monter à vitesse constante) : F = P·h/l = 784 × 1/4 = <b>196 N</b>, comme si l'on soulevait environ 20 kg.</li>
<li>Avec une rampe de 8 m, la force descend à 98 N, mais il faut pousser sur une distance double.</li>
</ol>
<p>C'est le même principe que les sentiers en lacets en montagne, les escaliers à pente douce et les routes des cols alpins : augmenter la longueur pour diminuer l'effort.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : forces et plan incliné",
      questions: [
        { type: "mc", q: "Un point matériel est en équilibre quand…", options: ["la somme des normes des forces est nulle", "la résultante vectorielle des forces est nulle", "une seule force agit sur lui"], answer: 1, explain: "Les forces sont des vecteurs : ΣF = 0 signifie que leur somme vectorielle est nulle, même si chaque norme ne l'est pas." },
        { type: "num", q: "Un corps de 10 kg est posé sur un plan incliné lisse de 30°. Quelle est (en N, avec g = 9,8 m/s²) la force parallèle au plan qui le maintient immobile ?", answer: 49, tol: 0.5, unit: "N", explain: "P = 98 N ; F = P sin 30° = 98 × 0,5 = 49 N." },
        { type: "tf", q: "Sur un plan avec frottements, l'angle maximal pour lequel un corps reste immobile dépend de sa masse.", answer: false, explain: "Il reste immobile tant que tan α ≤ μs : la masse se simplifie et ne compte pas." }
      ]
    },
    {
      type: "text",
      title: "Le moment d'une force",
      html: `<p>Pousser une porte près des gonds est très difficile ; près de la poignée, c'est facile. La force est la même, mais l'effet <b>de rotation</b> change. Pour le décrire, on introduit le <b>moment d'une force</b> par rapport à un point O (le pivot ou point d'appui) :</p>
<p style="text-align:center"><b>M = F · b</b></p>
<p>où <b>b</b> est le <b>bras de levier</b> : la distance <b>perpendiculaire</b> entre le point O et la <b>droite d'action</b> de la force. Il se mesure en <b>newtons-mètres</b> (N·m).</p>
<ul>
<li>Si la force est perpendiculaire à la barre, le bras de levier coïncide avec la distance au pivot ;</li>
<li>si la force passe par le pivot, le bras de levier est nul et le moment aussi : pousser la porte dans son propre plan ne la fait pas tourner ;</li>
<li>le moment a un <b>signe</b> : par convention positif s'il fait tourner dans le sens inverse des aiguilles d'une montre, négatif dans le sens des aiguilles d'une montre.</li>
</ul>
<p>Un <b>couple de forces</b> est formé de deux forces égales, parallèles et opposées, dont les droites d'action sont distinctes : la résultante est nulle, mais pas le moment (il vaut F·d, où d est la distance entre les droites). C'est ce que tu utilises pour tourner un volant à deux mains ou pour dévisser un bouchon.</p>
<p>Un <b>solide indéformable</b> est en équilibre si <b>deux</b> conditions sont réunies :</p>
<p style="text-align:center"><b>ΣF = 0 (il ne se déplace pas) &nbsp;et&nbsp; ΣM = 0 (il ne tourne pas)</b></p>`
    },
    {
      type: "svg",
      title: "Le levier : force motrice, force résistante et point d'appui",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<polygon points="300,215 270,260 330,260" fill="#475569"/>
<g transform="rotate(0 300 210)"><rect x="60" y="200" width="480" height="14" rx="4" fill="#92400e"/></g>
<rect x="95" y="140" width="70" height="60" rx="6" fill="#ef4444"/>
<text x="130" y="178" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">charge</text>
<line x1="130" y1="95" x2="130" y2="135" stroke="#ef4444" stroke-width="4"/>
<polygon points="130,139 122,124 138,124" fill="#ef4444"/>
<text x="130" y="85" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">résistante Fr</text>
<line x1="470" y1="120" x2="470" y2="196" stroke="#16a34a" stroke-width="4"/>
<polygon points="470,200 462,185 478,185" fill="#16a34a"/>
<text x="470" y="108" font-size="17" text-anchor="middle" fill="#15803d" font-weight="bold">force motrice Fm</text>
<text x="300" y="285" font-size="17" text-anchor="middle" fill="#334155" font-weight="bold">point d'appui</text>
<line x1="130" y1="232" x2="300" y2="232" stroke="#2563eb" stroke-width="3"/>
<line x1="300" y1="232" x2="470" y2="232" stroke="#9333ea" stroke-width="3"/>
<text x="215" y="250" font-size="16" text-anchor="middle" fill="#2563eb" font-weight="bold">br</text>
<text x="385" y="250" font-size="16" text-anchor="middle" fill="#9333ea" font-weight="bold">bm</text>
<text x="300" y="30" font-size="20" text-anchor="middle" fill="#1f2937" font-weight="bold">Équilibre : Fm · bm = Fr · br</text>
</svg>`,
      caption: "Un levier inter-appui (1er genre) : le point d'appui est au milieu. Le bras bm est le double de br, il suffit donc d'une force motrice égale à la moitié de la charge."
    },
    {
      type: "text",
      title: "Les leviers",
      html: `<p>Le <b>levier</b> est une barre rigide qui peut tourner autour d'un point fixe, le <b>point d'appui</b> (ou pivot). Sur lui agissent une <b>force motrice</b> F<sub>m</sub> (celle que nous appliquons) et une <b>force résistante</b> F<sub>r</sub> (la charge à soulever ou à vaincre). Le levier est en équilibre quand les moments se compensent :</p>
<p style="text-align:center"><b>F<sub>m</sub> · b<sub>m</sub> = F<sub>r</sub> · b<sub>r</sub></b></p>
<p>D'où l'<b>avantage mécanique</b> du levier : F<sub>m</sub>/F<sub>r</sub> = b<sub>r</sub>/b<sub>m</sub>. Si le bras de la force motrice est plus grand que celui de la résistance, le levier est <b>avantageux</b> (on économise de la force) ; s'il est plus petit, il est <b>désavantageux</b> (on perd en force mais on gagne en vitesse et en amplitude de mouvement).</p>
<table>
<tr><th>Genre</th><th>Disposition</th><th>Exemples</th><th>Avantage</th></tr>
<tr><td><b>1er</b> (inter-appui)</td><td>point d'appui entre la force et la résistance</td><td>balançoire à bascule, ciseaux, tenailles, pied-de-biche</td><td>peut être avantageux, désavantageux ou neutre</td></tr>
<tr><td><b>2e</b> (inter-résistant)</td><td>résistance entre le point d'appui et la force</td><td>brouette, casse-noix, décapsuleur, coupe-ongles</td><td>toujours avantageux</td></tr>
<tr><td><b>3e</b> (inter-moteur)</td><td>force entre le point d'appui et la résistance</td><td>pince à épiler, pince à glaçons, canne à pêche, avant-bras</td><td>toujours désavantageux</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Exemple : la balançoire à bascule en équilibre",
      html: `<p>Un adulte de 60 kg est assis à 1 m du centre d'une balançoire à bascule. À quelle distance doit s'asseoir un enfant de 20 kg pour l'équilibrer ?</p>
<ol>
<li>Les poids : 588 N (adulte) et 196 N (enfant) ; mais il suffit d'utiliser les masses, car g se simplifie.</li>
<li>Équilibre des moments : 60 · 1 = 20 · x</li>
<li>x = 60/20 = <b>3 m</b>.</li>
</ol>
<p>L'enfant pèse trois fois moins et se place trois fois plus loin : le produit « poids × distance » est le même. Si la balançoire ne mesure que 4 m au total (2 m de chaque côté), l'enfant ne pourrait pas équilibrer l'adulte de là : c'est l'adulte qui devrait se rapprocher du point d'appui (0,67 m).</p>`
    },
    {
      type: "widget",
      title: "De quel genre est ce levier ?",
      widget: "classify",
      options: { groups: ["1er genre (appui au milieu)", "2e genre (résistance au milieu)", "3e genre (force au milieu)"], items: [
        ["balançoire à bascule", 0],
        ["ciseaux", 0],
        ["tenailles", 0],
        ["brouette", 1],
        ["casse-noix", 1],
        ["décapsuleur à levier", 1],
        ["pince à épiler", 2],
        ["pince à glaçons", 2],
        ["canne à pêche", 2]
      ] },
      caption: "Repère les trois points (appui, force, résistance) et regarde lequel est au milieu."
    },
    {
      type: "curiosity",
      title: "« Donnez-moi un point d'appui et je soulèverai le monde »",
      html: `<p>Cette phrase est attribuée à <b>Archimède de Syracuse</b> (IIIe siècle av. J.-C.), qui, dans son traité <i>De l'équilibre des figures planes</i>, démontra le premier avec une rigueur mathématique la loi du levier : deux poids sont en équilibre quand ils sont inversement proportionnels à leurs distances au point d'appui. La citation nous est parvenue par des sources plus tardives (Pappus d'Alexandrie), mais elle résume bien l'idée : avec un bras assez long, une petite force en équilibre une énorme. Pour soulever la Terre, cependant, Archimède aurait dû déplacer son levier sur des distances astronomiques : le gain de force se paie toujours par un déplacement plus grand.</p>`
    },
    {
      type: "curiosity",
      title: "Ton corps est plein de leviers",
      html: `<p>Le coude est le point d'appui, le biceps s'attache à quelques centimètres du coude, tandis que la main qui tient une charge se trouve à environ 30 cm : c'est un levier du <b>3e genre</b>, désavantageux en force. Pour tenir une charge de 5 kg (49 N) le bras plié, le biceps doit exercer une force plusieurs fois plus grande. Mais en échange, on obtient une grande vitesse et une grande amplitude de mouvement : un petit raccourcissement du muscle déplace beaucoup la main. Le pied qui se soulève sur la pointe est au contraire un levier du 2e genre, avantageux. Mâcher avec la mâchoire et hocher la tête utilisent aussi des leviers !</p>`
    },
    {
      type: "text",
      title: "Centre de gravité et types d'équilibre",
      html: `<p>Le <b>centre de gravité</b> est le point où l'on peut considérer que s'applique tout le poids d'un corps. Dans un corps homogène et symétrique, il coïncide avec le centre géométrique (au centre d'un disque, d'un cube, d'une sphère). Un corps suspendu à un fil est immobile quand son centre de gravité se trouve sur la verticale du point de suspension ; un corps posé ne tombe pas tant que la <b>verticale passant par le centre de gravité tombe à l'intérieur de sa base d'appui</b> (polygone de sustentation).</p>
<p>Pour un corps qui peut se déplacer ou tourner, on distingue trois cas après un petit écart par rapport à l'équilibre :</p>
<ul>
<li><b>équilibre stable</b> : le corps tend à revenir à sa position initiale (une bille au fond d'un bol ; le centre de gravité monte quand on la déplace) ;</li>
<li><b>équilibre instable</b> : le corps s'éloigne encore plus (une bille au sommet d'une colline ; le centre de gravité descend) ;</li>
<li><b>équilibre indifférent</b> : le corps reste dans sa nouvelle position (une sphère sur une table plane ; le centre de gravité ne change pas de hauteur).</li>
</ul>
<p>Plus le centre de gravité est <b>bas</b> et la base <b>large</b>, plus l'équilibre est stable : c'est pourquoi les voitures de course sont basses et larges, qu'un camion chargé en hauteur se renverse plus facilement dans un virage, et qu'on tient mieux debout dans le tram les jambes écartées.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre le moment",
      intro: "La notion de moment est souvent la plus difficile de la leçon. Voici quatre chemins différents pour la saisir.",
      tabs: [
        {
          label: "🚪 La porte",
          html: `<p>Essaie de fermer une porte en poussant à 5 cm des gonds : il faut une force énorme. Pousse à la poignée, à 80 cm, et un doigt suffit. Le <b>moment</b> M = F·b mesure cette différence : si le bras b devient 16 fois plus grand, on obtient la même rotation avec une force 16 fois plus petite. C'est pour cela que les poignées sont du côté opposé aux gonds et que les clés à molette ont un long manche.</p>`
        },
        {
          label: "⚖️ Poids × distance",
          html: `<p>Imagine une barre avec des sachets suspendus à différentes distances du centre. Ce qui compte, ce n'est pas seulement <b>combien pèse</b> un sachet, mais aussi <b>où</b> il est suspendu : on multiplie le poids par la distance. Si à gauche tu as 3 kg à 4 cm (3 × 4 = 12) et à droite 2 kg à 6 cm (2 × 6 = 12), les « scores » sont égaux et la barre est en équilibre. Si à droite tu mets 2 kg à 5 cm, le score est 10 et c'est la gauche qui l'emporte.</p>`,
          widget: "match",
          options: { pairs: [["3 kg à 4 cm", "moment 12"], ["5 kg à 2 cm", "moment 10"], ["1 kg à 9 cm", "moment 9"], ["4 kg à 5 cm", "moment 20"]] }
        },
        {
          label: "🏗️ Le bras perpendiculaire",
          html: `<p>Le bras de levier est la distance <b>perpendiculaire</b> entre le pivot et la droite d'action de la force, pas n'importe quelle distance. Si tu pousses une clé à molette en biais, seule la composante perpendiculaire au manche fait tourner le boulon. Pousser le long du manche, vers le boulon, ne le fait pas tourner du tout (bras nul). C'est pourquoi on peut aussi écrire le moment M = F·d·sin θ, où θ est l'angle entre la force et le segment qui va du pivot au point d'application.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<circle cx="90" cy="130" r="16" fill="#475569"/>
<text x="90" y="170" font-size="16" text-anchor="middle" fill="#1f2937">boulon</text>
<rect x="90" y="124" width="320" height="12" rx="5" fill="#92400e"/>
<line x1="410" y1="130" x2="470" y2="50" stroke="#16a34a" stroke-width="4"/>
<polygon points="474,45 456,53 468,63" fill="#16a34a"/>
<text x="480" y="48" font-size="17" fill="#15803d" font-weight="bold">F</text>
<line x1="410" y1="130" x2="410" y2="62" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 3"/>
<text x="360" y="72" font-size="16" fill="#2563eb" font-weight="bold">F sin θ</text>
<text x="300" y="200" font-size="17" text-anchor="middle" fill="#1f2937">Seule la composante perpendiculaire au manche fait tourner.</text>
</svg>`
        },
        {
          label: "🔁 Le moment, « combien ça tourne »",
          html: `<p>Une analogie utile avec le mouvement en ligne droite : la force fait <b>varier la vitesse</b> d'un corps, le moment fait <b>varier la rotation</b>. Une force nulle signifie pas d'accélération ; un moment nul signifie pas d'accélération angulaire. Un corps en équilibre est comme un corps qui ne se déplace pas, n'accélère pas et ne tourne pas : voilà pourquoi il faut à la fois ΣF = 0 et ΣM = 0.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de l'équilibre des solides",
      nodes: [
        { id: "equilibrio", label: "Équilibre statique", x: 50, y: 6, color: "#64748b", html: "Un corps est immobile et le reste : il ne se déplace pas et ne tourne pas.", why: "C'est la statique, la première branche de la physique traitée avec rigueur mathématique, dès Archimède (IIIe s. av. J.-C.), puis par Stevin et Galilée. Si un corps immobile accélérait, on le verrait bouger : l'équilibre est la situation où les effets des forces s'annulent mutuellement." },
        { id: "forze", label: "Somme des forces nulle", x: 20, y: 28, color: "#2563eb", html: "ΣF = 0 : le corps ne se déplace pas.", why: "Cela découle de la deuxième loi de Newton (1687) : F = ma. Si la résultante est nulle, l'accélération est nulle. Et si le corps part du repos, il reste au repos (première loi, déjà pressentie par Galilée)." },
        { id: "momenti", label: "Somme des moments nulle", x: 80, y: 28, color: "#9333ea", html: "ΣM = 0 : le corps ne tourne pas.", why: "Pour un corps étendu, il ne suffit pas d'additionner les forces : les points d'application comptent aussi. Le moment M = F·b mesure la capacité d'une force à faire tourner. Cette notion vient de la loi du levier d'Archimède." },
        { id: "peso", label: "Poids et réactions", x: 8, y: 52, color: "#16a34a", html: "P = mg, N, tensions, frottements.", why: "Le poids est l'attraction gravitationnelle de la Terre (Newton, 1687) ; les réactions du support découlent de la troisième loi : à toute action correspond une réaction égale et opposée." },
        { id: "inclinato", label: "Plan incliné", x: 32, y: 66, color: "#22c55e", html: "Décomposition du poids : P sin α le long du plan, P cos α perpendiculairement.", why: "La décomposition des vecteurs en composantes est une application de la trigonométrie et de la règle du parallélogramme. Galilée étudia le plan incliné pour « ralentir » la chute des corps et pouvoir la mesurer." },
        { id: "leve", label: "Leviers", x: 80, y: 56, color: "#f59e0b", html: "Fm·bm = Fr·br ; trois genres.", why: "Archimède démontra la loi du levier dans son traité De l'équilibre des figures planes (IIIe s. av. J.-C.), à partir de postulats de symétrie. C'est un cas particulier de la condition ΣM = 0." },
        { id: "baricentro", label: "Centre de gravité", x: 56, y: 80, color: "#ef4444", html: "Le point d'application du poids total.", why: "Archimède l'étudia pour des figures planes (parabole, triangle). Un corps est stable si la verticale passant par son centre de gravité tombe dans sa base." },
        { id: "stabilita", label: "Stable / instable / indifférent", x: 20, y: 92, color: "#0ea5e9", html: "Ce qui se passe après une petite perturbation.", why: "Cela dépend de l'énergie potentielle de pesanteur : l'équilibre est stable là où l'énergie potentielle est minimale (le centre de gravité est au point le plus bas possible)." }
      ],
      edges: [["equilibrio", "forze", "condition 1"], ["equilibrio", "momenti", "condition 2"], ["forze", "peso", "forces en jeu"], ["peso", "inclinato", "se décompose"], ["momenti", "leve", "application"], ["peso", "baricentro", "appliqué au"], ["baricentro", "stabilita", "détermine"]]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Point matériel : <b>ΣF = 0</b>. Solide indéformable : <b>ΣF = 0 et ΣM = 0</b>.</li>
<li>Poids : <b>P = m g</b>. Composantes sur le plan incliné : <b>P∥ = P sin α</b>, <b>P⊥ = P cos α</b>.</li>
<li>Moment : <b>M = F · b</b> (b = bras de levier, distance perpendiculaire à la droite d'action).</li>
<li>Levier : <b>Fm · bm = Fr · br</b>. 1er genre : appui au milieu ; 2e : résistance au milieu ; 3e : force au milieu.</li>
<li>Une machine simple <b>ne fait pas économiser de travail</b> : elle change seulement le rapport force / déplacement.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : moments, leviers et équilibre",
      questions: [
        { type: "num", q: "Une force de 20 N agit perpendiculairement à 0,5 m du point d'appui. Quel est son moment (en N·m) ?", answer: 10, unit: "N·m", explain: "M = F·b = 20 × 0,5 = 10 N·m." },
        { type: "mc", q: "La brouette est un levier du…", options: ["1er genre", "2e genre", "3e genre"], answer: 1, explain: "Le point d'appui est la roue, la charge est au milieu, la force est appliquée aux poignées : résistance entre l'appui et la force, donc 2e genre, toujours avantageux." },
        { type: "mc", q: "Une sphère posée sur une table horizontale est en équilibre…", options: ["stable", "instable", "indifférent"], answer: 2, explain: "Si tu la déplaces, elle reste là où tu l'as mise : son centre de gravité ne change pas de hauteur." },
        { type: "tf", q: "Une force qui passe par le point d'appui a un moment nul.", answer: true, explain: "Le bras de levier est nul : le moment M = F·0 = 0." }
      ]
    }
  ],
  glossary: [
    { t: "Équilibre statique", d: "État d'un corps immobile pour lequel la résultante des forces et celle des moments sont nulles." },
    { t: "Résultante", d: "Somme vectorielle de toutes les forces qui agissent sur un corps." },
    { t: "Poids", d: "Force avec laquelle la Terre attire un corps : P = m·g, en newtons." },
    { t: "Réaction du support", d: "Force exercée par un appui, un fil ou une paroi qui empêche un mouvement." },
    { t: "Frottement statique", d: "Force qui s'oppose au début du glissement ; valeur maximale μs·N." },
    { t: "Plan incliné", d: "Surface plane inclinée d'un angle α par rapport à l'horizontale." },
    { t: "Moment d'une force", d: "M = F·b : mesure la capacité d'une force à faire tourner un corps autour d'un point." },
    { t: "Bras de levier", d: "Distance perpendiculaire entre le pivot et la droite d'action de la force." },
    { t: "Couple de forces", d: "Deux forces égales, parallèles et opposées, de droites d'action différentes : résultante nulle, moment non nul." },
    { t: "Levier", d: "Barre rigide qui tourne autour d'un point d'appui, soumise à une force motrice et à une force résistante." },
    { t: "Centre de gravité", d: "Point où l'on considère que s'applique le poids total d'un corps." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quelle est la condition d'équilibre d'un point matériel ?", options: ["La résultante des forces est nulle", "Le moment des forces est nul", "Le poids est égal à la masse"], answer: 0, explain: "Pour un point matériel, il n'y a pas de rotation à considérer : ΣF = 0 suffit." },
      { type: "num", q: "Quel est le poids (en N, avec g = 9,8 m/s²) d'un objet de 5 kg ?", answer: 49, tol: 0.1, unit: "N", explain: "P = m·g = 5 × 9,8 = 49 N." },
      { type: "num", q: "Un plan incliné lisse a une hauteur de 2 m et une longueur de 5 m. Quelle force parallèle (en N) maintient immobile une charge de poids 300 N ?", answer: 120, unit: "N", explain: "F = P·h/l = 300 × 2/5 = 120 N." },
      { type: "tf", q: "Avec frottements, l'angle maximal d'un plan sur lequel un corps reste immobile dépend de la masse du corps.", answer: false, explain: "La condition est tan α ≤ μs : la masse se simplifie." },
      { type: "num", q: "Une force de 50 N est appliquée perpendiculairement à 0,4 m de l'axe de rotation. Calcule son moment (N·m).", answer: 20, unit: "N·m", explain: "M = F·b = 50 × 0,4 = 20 N·m." },
      { type: "num", q: "Un levier est en équilibre avec une résistance de 90 N à 20 cm du point d'appui. Quelle force motrice (en N) faut-il à 60 cm du point d'appui, de l'autre côté ?", answer: 30, unit: "N", explain: "Fm·60 = 90·20, donc Fm = 1800/60 = 30 N." },
      { type: "mc", q: "Lequel de ces outils est un levier du 3e genre ?", options: ["Ciseaux", "Pince à épiler", "Casse-noix"], answer: 1, explain: "Dans la pince à épiler, la force est appliquée entre le point d'appui (la charnière) et la pointe, où se trouve la résistance." },
      { type: "tf", q: "Un levier du 2e genre est toujours avantageux.", answer: true, explain: "La résistance est plus proche du point d'appui que la force motrice : br < bm, donc Fm < Fr." },
      { type: "order", q: "Range dans l'ordre les étapes pour résoudre un problème d'équilibre sur un plan incliné.", items: ["Représenter toutes les forces qui s'exercent sur le corps", "Choisir les axes parallèle et perpendiculaire au plan", "Décomposer le poids en ses deux composantes", "Écrire ΣF = 0 selon chaque axe", "En déduire la force inconnue"], explain: "La méthode standard : schéma, axes adaptés, décomposition, équilibre selon chaque axe, solution." },
      { type: "mc", q: "Quand un corps posé ne se renverse-t-il pas ?", options: ["Quand le centre de gravité est au point le plus haut", "Quand la verticale passant par le centre de gravité tombe à l'intérieur de la base d'appui", "Quand la masse est petite"], answer: 1, explain: "Si la verticale passant par le centre de gravité sort de la base, le poids crée un moment qui fait tourner le corps jusqu'à le renverser." },
      { type: "text", q: "Comment appelle-t-on le point fixe autour duquel tourne un levier ?", answer: ["point d'appui", "le point d'appui", "pivot", "le pivot", "appui"], explain: "Le point d'appui (ou pivot) est le point fixe du levier." }
    ]
  }
});
