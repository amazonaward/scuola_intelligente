TOPIC('fr', {
  id: `m3-tec-assonometria`,
  title: `L'axonométrie`,
  intro: `Une feuille est plate, mais les objets ont trois dimensions. Comment dessiner un cube, un meuble ou un bâtiment de façon à comprendre <b>la forme</b> et à pouvoir aussi <b>mesurer</b> les parties ? Avec l'<b>axonométrie</b> : une méthode de dessin technique qui représente, dans une seule vue, la largeur, la profondeur et la hauteur. C'est le langage des concepteurs, des architectes… et de nombreux jeux vidéo ! 📐🧊`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. Des projections orthogonales à l'axonométrie`,
      html: `<p>Avec les <b>projections orthogonales</b> (que tu as déjà étudiées), un objet se dessine avec <b>trois vues séparées</b> : plan, élévation, profil. Elles sont précises, mais pour comprendre la forme il faut les « assembler » dans sa tête.</p>
<p>L'<b>axonométrie</b> (du grec <i>áxōn</i> = axe et <i>métron</i> = mesure : « mesure le long des axes ») montre au contraire l'objet <b>dans un seul dessin</b>, avec trois faces visibles ensemble.</p>
<p>C'est une <b>projection parallèle</b> : les rayons de projection sont tous parallèles entre eux, comme si l'on regardait l'objet depuis une distance infinie. Conséquences importantes :</p>
<ul>
<li>les droites <b>parallèles</b> dans la réalité restent <b>parallèles</b> sur le dessin ;</li>
<li>les mesures le long des axes se <b>lisent avec la règle</b> (éventuellement multipliées par un coefficient) ;</li>
<li>les objets <b>ne rapetissent pas</b> au loin (contrairement à la <b>perspective</b>).</li>
</ul>`
    },
    {
      type: `text`, title: `2. Les trois axes : x, y, z`,
      html: `<p>Chaque axonométrie se construit sur <b>trois axes</b> partant d'une origine O :</p>
<ul>
<li><b>axe z</b> : toujours <b>vertical</b>, pour les <b>hauteurs</b> ;</li>
<li><b>axe x</b> : pour les <b>largeurs</b> (longueurs) ;</li>
<li><b>axe y</b> : pour les <b>profondeurs</b>.</li>
</ul>
<p>Les différentes axonométries se distinguent par deux éléments :</p>
<ol>
<li>les <b>angles</b> que les axes x et y forment avec l'horizontale ;</li>
<li>les <b>coefficients de réduction</b> : les mesures le long d'un axe se reportent en vraie grandeur (×1) ou réduites (par exemple ×½).</li>
</ol>`
    },
    {
      type: `text`, title: `3. Les types d'axonométrie`,
      html: `<table>
<tr><th>Type</th><th>Angles des axes x et y</th><th>Réductions</th><th>Usage typique</th></tr>
<tr><td><b>Isométrique</b></td><td>30° et 30° (les trois axes forment des angles de 120°)</td><td>aucune : x, y, z en vraie grandeur</td><td>mécanique, objets, design</td></tr>
<tr><td><b>Cavalière</b></td><td>x horizontal ; y à 45° (ou 30°, 60°)</td><td>y réduit à ½ (cavalière « réduite »)</td><td>objets avec une face importante, croquis rapides</td></tr>
<tr><td><b>Monométrique (planométrique)</b></td><td>x et y à 30°/60° (ou 45°/45°) entre eux à 90°</td><td>aucune</td><td>architecture, mobilier : le plan reste vrai</td></tr>
</table>
<p><b>Isométrique</b> = « même mesure » : les trois axes ont la même échelle. En théorie la réduction exacte serait d'environ 0,82 sur tous les axes, mais en dessin technique on utilise l'<b>isométrie unifiée</b>, avec des mesures vraies : le dessin devient seulement un peu plus grand.</p>
<p>En <b>cavalière</b>, la face frontale est dessinée <b>exactement telle quelle</b> (en vraie forme) : parfaite pour les objets avec un avant compliqué, comme une roue dentée ou une lettre.</p>
<p>En <b>monométrique</b>, le <b>plan</b> est en vraie forme, seulement tourné : on dessine le plan d'une maison puis on « lève » les murs à la verticale.</p>`
    },
    {
      type: `svg`, title: `Le même cube en trois axonométries`,
      caption: `Cube de côté 60 : isométrique (axes à 30°), cavalière (profondeur à 45° réduite de moitié), monométrique (plan tourné de 30°/60°).`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<g stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round">
<polygon points="100,140 152,170 100,200 48,170" fill="#fde68a"/>
<polygon points="48,170 100,200 100,260 48,230" fill="#f59e0b"/>
<polygon points="100,200 152,170 152,230 100,260" fill="#fbbf24"/>
</g>
<text x="100" y="40" font-size="17" font-weight="bold" fill="#92400e" text-anchor="middle">ISOMÉTRIQUE</text>
<text x="100" y="62" font-size="13" fill="#334155" text-anchor="middle">30° – 30°, tout ×1</text>
<g stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round">
<polygon points="250,170 310,170 331,149 271,149" fill="#bfdbfe"/>
<polygon points="310,170 331,149 331,209 310,230" fill="#3b82f6"/>
<rect x="250" y="170" width="60" height="60" fill="#60a5fa"/>
</g>
<text x="290" y="40" font-size="17" font-weight="bold" fill="#1e40af" text-anchor="middle">CAVALIÈRE</text>
<text x="290" y="62" font-size="13" fill="#334155" text-anchor="middle">y à 45°, réduit ×½</text>
<g stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round">
<polygon points="490,120 542,150 512,202 460,172" fill="#bbf7d0"/>
<polygon points="460,172 512,202 512,262 460,232" fill="#22c55e"/>
<polygon points="512,202 542,150 542,210 512,262" fill="#4ade80"/>
</g>
<text x="490" y="40" font-size="17" font-weight="bold" fill="#166534" text-anchor="middle">MONOMÉTRIQUE</text>
<text x="490" y="62" font-size="13" fill="#334155" text-anchor="middle">plan 30°/60°, ×1</text>
<line x1="20" y1="290" x2="580" y2="290" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="300" y="312" font-size="13" fill="#475569" text-anchor="middle">les droites parallèles restent parallèles : aucun point de fuite</text>
</svg>`
    },
    {
      type: `3d`, title: `Fais tourner le solide et trouve la vue isométrique`,
      scene: `solid`,
      options: { shape: `box`, w: 3, h: 2, d: 2, color: `#f59e0b`, labels: true, shapes: [`cube`, `box`, `prism`, `pyramid`, `cylinder`] },
      caption: `Fais tourner le solide jusqu'à voir trois faces ayant la même « importance » : c'est le point de vue de l'isométrie. Les dimensions indiquées sont celles à reporter sur les axes.`
    },
    {
      type: `quiz`, title: `Mini-quiz : reconnais l'axonométrie`,
      questions: [
        { type: `mc`, q: `Dans l'axonométrie isométrique, les axes x et y forment avec l'horizontale un angle de…`, options: [`45°`, `30°`, `60°`], answer: 1, explain: `Isométrique : x et y à 30°, z vertical ; les trois axes sont à 120° l'un de l'autre.` },
        { type: `mc`, q: `Dans quelle axonométrie la face frontale est-elle en vraie forme ?`, options: [`Isométrique`, `Cavalière`, `Monométrique`], answer: 1, explain: `En cavalière, le plan frontal (x-z) est dessiné tel quel.` },
        { type: `tf`, q: `En axonométrie, les droites parallèles convergent en un point de fuite.`, answer: false, explain: `C'est une projection parallèle : les parallèles restent parallèles. Le point de fuite est propre à la perspective.` }
      ]
    },
    {
      type: `text`, title: `4. Comment dessiner un parallélépipède en isométrie (pas à pas)`,
      html: `<p>Dessinons une boîte de <b>4 × 3 × 2 cm</b> (largeur × profondeur × hauteur) avec des équerres de 30°/60° et une règle.</p>
<ol>
<li><b>Origine</b> : choisis un point O en bas au centre de la feuille.</li>
<li><b>Axes</b> : à partir de O, trace la verticale (z) et, avec l'équerre de 30°, deux droites à 30° au-dessus de l'horizontale : vers la droite (x) et vers la gauche (y).</li>
<li><b>Mesures</b> : sur l'axe x, reporte 4 cm ; sur l'axe y, 3 cm ; sur l'axe z, 2 cm.</li>
<li><b>Base</b> : à partir des extrémités, trace les parallèles aux axes (parallèle à y depuis le point de x, parallèle à x depuis le point de y) : tu obtiens le losange de la base.</li>
<li><b>Arêtes verticales</b> : de chaque sommet visible de la base, élève une verticale de 2 cm.</li>
<li><b>Face supérieure</b> : relie les sommets hauts avec des parallèles aux axes x et y.</li>
<li><b>Repassage</b> : repasse avec un trait <b>épais</b> les arêtes en vue ; les arêtes cachées se font <b>en pointillés</b> ou se omettent ; efface les lignes de construction.</li>
</ol>
<p>Règle d'or : <b>on ne mesure que le long des axes</b> (ou parallèlement à eux). Les diagonales et les cercles ne sont pas en vraie grandeur !</p>`
    },
    {
      type: `svg`, title: `Les constructions pas à pas`,
      caption: `1) axes à 30° ; 2) mesures sur les axes et base ; 3) arêtes verticales et face supérieure.`,
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fffbeb"/>
<g font-size="16" font-weight="bold" fill="#92400e"><text x="100" y="28" text-anchor="middle">1. Axes</text><text x="300" y="28" text-anchor="middle">2. Base</text><text x="500" y="28" text-anchor="middle">3. Solide</text></g>
<g stroke="#64748b" stroke-width="2"><line x1="100" y1="240" x2="100" y2="60"/><line x1="100" y1="240" x2="185" y2="191"/><line x1="100" y1="240" x2="15" y2="191"/></g>
<text x="108" y="70" font-size="16" fill="#dc2626" font-weight="bold">z</text>
<text x="180" y="185" font-size="16" fill="#dc2626" font-weight="bold">x</text>
<text x="15" y="185" font-size="16" fill="#dc2626" font-weight="bold">y</text>
<path d="M140 240 A40 40 0 0 0 135 220" stroke="#2563eb" stroke-width="2" fill="none"/>
<line x1="100" y1="240" x2="185" y2="240" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="145" y="258" font-size="14" fill="#2563eb">30°</text>
<g stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 3"><line x1="300" y1="250" x2="390" y2="198"/><line x1="300" y1="250" x2="225" y2="207"/><line x1="300" y1="250" x2="300" y2="120"/></g>
<polygon points="300,250 369,210 317,180 248,220" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="345" y="248" font-size="14" fill="#b45309">4 cm</text>
<text x="240" y="250" font-size="14" fill="#b45309">3 cm</text>
<polygon points="500,240 569,200 569,165 500,205" fill="#f59e0b" stroke="#1e293b" stroke-width="3"/>
<polygon points="500,240 448,210 448,175 500,205" fill="#fbbf24" stroke="#1e293b" stroke-width="3"/>
<polygon points="500,205 569,165 517,135 448,175" fill="#fef3c7" stroke="#1e293b" stroke-width="3"/>
<polyline points="448,210 517,170 569,200" fill="none" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="517" y1="170" x2="517" y2="135" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="580" y="190" font-size="14" fill="#1e293b">2 cm</text>
</svg>`
    },
    {
      type: `example`, title: `Exemple pratique : l'étagère de la chambre d'enfant`,
      html: `<p>Tu veux faire fabriquer une étagère de <b>80 × 20 × 2 cm</b>. Avec les seules projections orthogonales, le menuisier comprendrait, mais tes parents peut-être pas. En la dessinant en <b>isométrie</b> à l'échelle 1:10 (8 cm sur l'axe x, 2 cm sur y, 0,2 cm sur z), on voit tout de suite sa forme, et l'on peut écrire les <b>cotes</b> le long des arêtes.</p>
<p>Si l'étagère a une découpe décorative sur le devant, la <b>cavalière</b> convient mieux : la face frontale reste en vraie forme et la découpe se dessine facilement.</p>`
    },
    {
      type: `example`, title: `Exemple pratique : le plan de la maison en monométrique`,
      html: `<p>Tu as le plan de ta chambre à l'échelle 1:50. Pour la montrer « meublée » :</p>
<ol>
<li>tu tournes le plan de 30° (ou 45°) et tu le recopies tel quel : les mesures restent vraies ;</li>
<li>de chaque angle tu lèves les murs à la verticale, par exemple 2,70 m ➜ 5,4 cm à l'échelle 1:50 ;</li>
<li>tu dessines le lit et le bureau comme des parallélépipèdes, en levant toujours les hauteurs à la verticale.</li>
</ol>
<p>Les architectes utilisent souvent cette vue « à vol d'oiseau », appelée aussi <b>éclaté</b> lorsque les parties sont séparées.</p>`
    },
    {
      type: `curiosity`, title: `Le saviez-vous ? Les jeux vidéo utilisent l'axonométrie ?`,
      html: `<p>De nombreux jeux de stratégie et de simulation (comme les classiques <i>SimCity 2000</i> ou <i>Age of Empires</i>) utilisent une vue dite « isométrique ». En réalité, sur les pixels, on utilise presque toujours une <b>dimétrique 2:1</b> : les lignes montent de 1 pixel tous les 2 en horizontal (angle d'environ 26,6° au lieu de 30°), car ainsi les lignes à l'écran restent nettes, sans « marches » irrégulières. Comme en axonométrie, les objets éloignés <b>ne deviennent pas plus petits</b> !</p>`
    },
    {
      type: `curiosity`, title: `Le saviez-vous ? La Chine dessinait en axonométrie il y a des siècles ?`,
      html: `<p>Dans les rouleaux peints chinois, comme le célèbre <i>Le long du fleuve pendant la fête de Qingming</i> (XIIe siècle), maisons et ponts sont dessinés avec des lignes parallèles obliques : c'est une sorte d'<b>axonométrie</b>, qui permet de « dérouler » la ville sans point de vue fixe. En Europe, l'isométrie fut décrite comme méthode scientifique par le professeur anglais <b>William Farish</b> en <b>1822</b>, pour dessiner des machines.</p>`
    },
    {
      type: `remember`, title: `À retenir`,
      html: `<ul>
<li>Axonométrie = projection <b>parallèle</b> sur trois axes (x largeur, y profondeur, z hauteur verticale).</li>
<li><b>Isométrique</b> : x et y à 30°, toutes les mesures vraies.</li>
<li><b>Cavalière</b> : face frontale vraie, profondeur à 45° réduite de ½.</li>
<li><b>Monométrique</b> : plan vrai tourné (30°/60° ou 45°), hauteurs vraies.</li>
<li>On ne mesure que <b>parallèlement aux axes</b> ; arêtes en vue épaisses, cachées en pointillés.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `D'autres façons de le comprendre`,
      intro: `L'axonométrie est plus facile à voir qu'à expliquer. Essaie ces approches.`,
      tabs: [
        {
          label: `🧊 Fais tourner le cube 3D`,
          html: `<p>Prends le cube et fais-le tourner de manière que l'<b>arête verticale la plus proche</b> soit au centre et que tu voies trois faces égales (dessus, gauche, droite). C'est exactement la vue de l'<b>isométrie</b> : aucune face n'est « plus importante » que les autres.</p>`,
          scene: `solid`,
          options: { shape: `cube`, color: `#3b82f6`, labels: true }
        },
        {
          label: `📄 Papier isométrique`,
          html: `<p>Dans beaucoup de pays (Royaume-Uni, Japon, États-Unis), on utilise à l'école le <b>papier isométrique</b> : une feuille de points disposés en triangles. Il suffit de relier les points selon les trois directions (verticale et deux à 30°) et le dessin se fait tout seul, sans équerres !</p>
<p>Essaie : un cube de côté 1 occupe un hexagone formé de 6 petits triangles.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<g fill="#94a3b8">
<circle cx="100" cy="30" r="3"/><circle cx="100" cy="70" r="3"/><circle cx="100" cy="110" r="3"/><circle cx="100" cy="150" r="3"/><circle cx="100" cy="190" r="3"/><circle cx="100" cy="230" r="3"/>
<circle cx="135" cy="50" r="3"/><circle cx="135" cy="90" r="3"/><circle cx="135" cy="130" r="3"/><circle cx="135" cy="170" r="3"/><circle cx="135" cy="210" r="3"/>
<circle cx="170" cy="30" r="3"/><circle cx="170" cy="70" r="3"/><circle cx="170" cy="110" r="3"/><circle cx="170" cy="150" r="3"/><circle cx="170" cy="190" r="3"/><circle cx="170" cy="230" r="3"/>
<circle cx="205" cy="50" r="3"/><circle cx="205" cy="90" r="3"/><circle cx="205" cy="130" r="3"/><circle cx="205" cy="170" r="3"/><circle cx="205" cy="210" r="3"/>
<circle cx="240" cy="30" r="3"/><circle cx="240" cy="70" r="3"/><circle cx="240" cy="110" r="3"/><circle cx="240" cy="150" r="3"/><circle cx="240" cy="190" r="3"/><circle cx="240" cy="230" r="3"/>
<circle cx="275" cy="50" r="3"/><circle cx="275" cy="90" r="3"/><circle cx="275" cy="130" r="3"/><circle cx="275" cy="170" r="3"/><circle cx="275" cy="210" r="3"/>
<circle cx="65" cy="50" r="3"/><circle cx="65" cy="90" r="3"/><circle cx="65" cy="130" r="3"/><circle cx="65" cy="170" r="3"/><circle cx="65" cy="210" r="3"/>
</g>
<g stroke="#1e293b" stroke-width="3" stroke-linejoin="round">
<polygon points="170,70 240,110 170,150 100,110" fill="#fde68a"/>
<polygon points="100,110 170,150 170,230 100,190" fill="#f59e0b"/>
<polygon points="170,150 240,110 240,190 170,230" fill="#fbbf24"/>
</g>
<text x="440" y="100" font-size="17" fill="#1e293b" text-anchor="middle" font-weight="bold">Relie les points</text>
<text x="440" y="130" font-size="15" fill="#334155" text-anchor="middle">seulement dans 3 directions :</text>
<text x="440" y="160" font-size="15" fill="#334155" text-anchor="middle">| verticale, / et \ à 30°</text>
</svg>`
        },
        {
          label: `🔦 L'ombre au soleil`,
          html: `<p>Le Soleil est si loin que ses rayons arrivent <b>parallèles</b>. L'ombre d'un objet sur le sol est donc une <b>projection parallèle</b>, exactement comme l'axonométrie ! Si tu déplaces un cube en fil de fer au soleil, son ombre change de forme, mais les lignes parallèles restent toujours parallèles.</p>
<p>Avec une lampe proche, en revanche, les rayons partent d'un point : l'ombre s'élargit, comme en <b>perspective</b>.</p>`
        },
        {
          label: `🏷️ Nomme les axes`,
          html: `<p>Touche les points du dessin et choisis la bonne étiquette.</p>`,
          widget: `labelDiagram`,
          options: {
            svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f8fafc"/><g stroke="#1e293b" stroke-width="3"><polygon points="200,90 290,140 200,190 110,140" fill="#bfdbfe"/><polygon points="110,140 200,190 200,270 110,220" fill="#3b82f6"/><polygon points="200,190 290,140 290,220 200,270" fill="#60a5fa"/></g><g stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"><line x1="200" y1="270" x2="200" y2="30"/><line x1="200" y1="270" x2="360" y2="178"/><line x1="200" y1="270" x2="40" y2="178"/></g></svg>`,
            spots: [
              { x: 200, y: 40, label: `Axe z (hauteur)` },
              { x: 350, y: 184, label: `Axe x (largeur)` },
              { x: 50, y: 184, label: `Axe y (profondeur)` },
              { x: 200, y: 270, label: `Origine O` },
              { x: 200, y: 140, label: `Face supérieure` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : l'axonométrie`,
      nodes: [
        { id: `rapp`, label: `Représenter la 3D`, x: 50, y: 6, color: `#64748b`, html: `Dessiner des objets tridimensionnels sur une feuille plate.`, why: `Chaque dessin sur papier perd une dimension. La <b>géométrie descriptive</b>, fondée par <b>Gaspard Monge</b> (1795), étudie comment le faire sans perdre d'informations.` },
        { id: `orto`, label: `Projections orthogonales`, x: 15, y: 30, color: `#0ea5e9`, html: `Trois vues séparées : plan, élévation, profil.`, why: `Méthode systématisée par Monge pour les fortifications militaires françaises : précise mais peu intuitive.` },
        { id: `ass`, label: `Axonométrie`, x: 50, y: 30, color: `#f59e0b`, html: `Une seule vue avec trois axes et des mesures lisibles.`, why: `Elle naît pour avoir ensemble la précision des mesures et l'immédiateté de la forme. L'isométrie fut formalisée par William Farish (Cambridge, 1822).` },
        { id: `prosp`, label: `Perspective`, x: 85, y: 30, color: `#a855f7`, html: `Comme voit l'œil : les parallèles convergent vers les points de fuite.`, why: `Redécouverte par <b>Filippo Brunelleschi</b> à Florence vers 1415 et décrite par Leon Battista Alberti en 1435. Réaliste, mais les mesures ne se lisent pas directement.` },
        { id: `par`, label: `Projection parallèle`, x: 50, y: 52, color: `#22c55e`, html: `Rayons tous parallèles : pas de point de fuite.`, why: `C'est comme regarder depuis une distance infinie. Une transformation parallèle conserve le parallélisme et les rapports entre segments parallèles : c'est pour cela qu'on peut mesurer à la règle.` },
        { id: `iso`, label: `Isométrique`, x: 15, y: 78, color: `#ef4444`, html: `x et y à 30°, tout en vraie mesure.`, why: `Si tu regardes un cube le long de sa diagonale, les trois arêtes apparaissent égales et à 120° entre elles. Le facteur théorique est √(2/3) ≈ 0,82 ; on utilise 1 par commodité (isométrie unifiée).` },
        { id: `cav`, label: `Cavalière`, x: 50, y: 78, color: `#3b82f6`, html: `Face frontale vraie, profondeur à 45° ×½.`, why: `Le nom vient de la « cavalière », la petite colline des fortifications d'où l'on voyait tout d'en haut. La réduction de ½ rend le solide plus naturel.` },
        { id: `mono`, label: `Monométrique`, x: 85, y: 78, color: `#16a34a`, html: `Plan vrai tourné, hauteurs verticales.`, why: `Très utilisée par les architectes du XXe siècle (par exemple dans le mouvement De Stijl et au Bauhaus) parce que le plan reste mesurable et que l'on « lève » les murs.` }
      ],
      edges: [
        [`rapp`, `orto`, `méthode`], [`rapp`, `ass`, `méthode`], [`rapp`, `prosp`, `méthode`], [`ass`, `par`, `est une`],
        [`par`, `iso`, `type`], [`par`, `cav`, `type`], [`par`, `mono`, `type`], [`orto`, `par`, `aussi`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : construire`,
      questions: [
        { type: `num`, q: `En cavalière réduite, une profondeur réelle de 6 cm se dessine longue de…`, answer: 3, tol: 0, unit: `cm`, explain: `Coefficient ½ : 6 × 0,5 = 3 cm.` },
        { type: `mc`, q: `Comment dessine-t-on les arêtes cachées ?`, options: [`Avec un trait épais continu`, `En pointillés (ou on ne les dessine pas)`, `En rouge`], answer: 1, explain: `Convention du dessin technique : lignes en pointillés pour les arêtes cachées.` },
        { type: `tf`, q: `En isométrie, on peut mesurer à la règle une diagonale de la face.`, answer: false, explain: `On ne mesure que le long de directions parallèles aux axes.` }
      ]
    }
  ],
  glossary: [
    { t: `Axonométrie`, d: `Méthode de représentation par projection parallèle sur trois axes.` },
    { t: `Axes x, y, z`, d: `Directions de largeur, profondeur et hauteur (z toujours vertical).` },
    { t: `Isométrique`, d: `Axonométrie avec les axes x et y à 30° et des mesures vraies sur tous les axes.` },
    { t: `Cavalière`, d: `Axonométrie avec face frontale en vraie forme et profondeur oblique réduite.` },
    { t: `Monométrique`, d: `Axonométrie avec plan en vraie forme tourné et hauteurs verticales.` },
    { t: `Coefficient de réduction`, d: `Nombre par lequel on multiplie les mesures le long d'un axe (ex. ½).` },
    { t: `Perspective`, d: `Représentation avec points de fuite, comme voit l'œil.` },
    { t: `Projection parallèle`, d: `Projection dont tous les rayons sont parallèles entre eux.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `« Axonométrie » signifie…`, options: [`mesure le long des axes`, `dessin à main levée`, `vue de dessus`], answer: 0, explain: `Du grec áxōn (axe) + métron (mesure).` },
      { type: `mc`, q: `L'axe z représente…`, options: [`la profondeur`, `la hauteur`, `la largeur`], answer: 1, explain: `z est toujours vertical : les hauteurs.` },
      { type: `mc`, q: `En isométrie, les trois axes forment entre eux des angles de…`, options: [`90°`, `120°`, `45°`], answer: 1, explain: `360° : 3 = 120°.` },
      { type: `num`, q: `Un cube de côté 5 cm en isométrie unifiée : quelle est la longueur de l'arête dessinée sur l'axe x ?`, answer: 5, tol: 0, unit: `cm`, explain: `Dans l'isométrie unifiée, les mesures sont vraies.` },
      { type: `num`, q: `En cavalière réduite (½), une boîte profonde de 12 cm : longueur dessinée sur l'axe y ?`, answer: 6, tol: 0, unit: `cm`, explain: `12 × ½ = 6 cm.` },
      { type: `tf`, q: `En axonométrie, les objets éloignés se dessinent plus petits.`, answer: false, explain: `Cela se produit en perspective, pas en axonométrie.` },
      { type: `tf`, q: `En monométrique, le plan est en vraie forme.`, answer: true, explain: `Le plan est seulement tourné (30°/60° ou 45°).` },
      { type: `order`, q: `Mets dans l'ordre les étapes pour dessiner un parallélépipède en isométrie.`, items: [`Fixe l'origine et trace les axes`, `Reporte les mesures sur les axes`, `Dessine la base avec des parallèles aux axes`, `Élève les arêtes verticales`, `Ferme la face supérieure`, `Repasse les arêtes en vue`], explain: `D'abord axes et mesures, puis base, hauteurs, face supérieure et repassage.` },
      { type: `mc`, q: `Pour un objet avec un avant très décoré, il vaut mieux…`, options: [`la cavalière`, `l'isométrique`, `la perspective centrale`], answer: 0, explain: `La cavalière garde la face frontale en vraie forme.` },
      { type: `text`, q: `Comment s'appelle la méthode à points de fuite, redécouverte par Brunelleschi ?`, answer: [`perspective`, `la perspective`], explain: `La perspective, utilisée à partir de la Renaissance.` },
      { type: `mc`, q: `Qui décrivit l'isométrie comme méthode scientifique en 1822 ?`, options: [`Léonard de Vinci`, `William Farish`, `Gaspard Monge`], answer: 1, explain: `William Farish, professeur à Cambridge.` }
    ]
  }
});
