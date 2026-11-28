TOPIC('fr', {
  id: `l1-art-proiezioni-ortogonali`,
  title: `Dessin : projections orthogonales`,
  intro: `Comment un ingénieur explique-t-il à une usine comment fabriquer une pièce sans lui envoyer l'objet lui-même ? Il le <b>dessine sous plusieurs angles</b>, selon des règles précises, pour que n'importe qui dans le monde puisse le reconstruire et le mesurer. Les <b>projections orthogonales</b> sont le langage universel du dessin technique : chaque point, chaque segment, chaque solide est « aplati » sur des plans perpendiculaires entre eux. Apprenons à lire et à écrire ce langage. 📐🧊`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Qu'est-ce qu'une projection orthogonale ?`,
      html: `<p>Projeter un point sur un plan, c'est mener depuis ce point une droite (<b>rayon projetant</b>) jusqu'au plan. Si le rayon est <b>perpendiculaire</b> au plan, la projection est <b>orthogonale</b>. L'image obtenue ressemble à l'ombre d'un objet éclairé par une source très lointaine et perpendiculaire au plan.</p>
<p>Une seule projection ne suffit pas : l'ombre d'un cube vu de face est un carré, mais ce même carré pourrait être l'ombre d'un pavé très profond ! Pour identifier un objet avec certitude, il faut <b>au moins deux projections sur des plans perpendiculaires</b>, souvent trois.</p>
<p>La méthode a été mise au point par <b>Gaspard Monge</b> (1746-1818), mathématicien français, pour concevoir des fortifications militaires. Gardée secrète pendant des années, elle fut ensuite enseignée à l'École normale (1795) et publiée sous le titre <i>Géométrie descriptive</i> : c'est la naissance de la <b>géométrie descriptive</b>. On parle donc de <b>méthode de Monge</b>.</p>`
    },
    {
      type: `text`, title: `2. Les trois plans et le rabattement`,
      html: `<p>Imagine le coin d'une pièce : deux murs et le sol se rencontrent à 90°. Ce sont les trois plans de projection :</p>
<ul>
<li><b>PV – plan vertical</b> (le mur d'en face) : on y projette l'<b>élévation</b> (vue de face) ;</li>
<li><b>PH – plan horizontal</b> (le sol) : on y projette la <b>vue de dessus</b> (le plan) ;</li>
<li><b>PL – plan latéral</b> (le mur de côté) : on y projette la <b>vue de côté</b> (le profil, en général vu depuis la gauche).</li>
</ul>
<p>Les droites d'intersection des plans sont les axes du système : la <b>ligne de terre</b> (PV ∩ PH) et les deux autres. Pour tout mettre sur une seule feuille plate, on effectue le <b>rabattement</b> : le PV reste fixe, le PH tourne de 90° autour de la ligne de terre jusqu'à se superposer au PV, et le PL tourne de 90° autour de sa propre ligne de terre.</p>
<p>On obtient la <b>disposition standard</b> : l'<b>élévation</b> en haut à gauche, la <b>vue de dessus</b> <b>sous</b> l'élévation (même largeur), la <b>vue de côté</b> <b>à droite</b> de l'élévation (même hauteur). Grâce aux <b>lignes de rappel</b> (traits fins), les trois vues se correspondent.</p>`
    },
    {
      type: `svg`, title: `Les trois vues d'un pavé droit`,
      caption: `Élévation (en haut à gauche), vue de dessus (en dessous) et vue de côté (à droite) d'un pavé de 120 × 70 × 80. Les traits fins sont les lignes de rappel : l'élévation et la vue de dessus ont la même largeur, l'élévation et la vue de côté la même hauteur.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="30" width="170" height="90" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<rect x="60" y="150" width="170" height="110" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<rect x="270" y="30" width="110" height="90" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<g stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"><line x1="60" y1="120" x2="60" y2="150"/><line x1="230" y1="120" x2="230" y2="150"/><line x1="230" y1="30" x2="270" y2="30"/><line x1="230" y1="120" x2="270" y2="120"/></g>
<line x1="20" y1="135" x2="250" y2="135" stroke="#dc2626" stroke-width="2"/>
<text x="26" y="130" font-size="14" fill="#dc2626">ligne de terre</text>
<text x="145" y="80" font-size="17" font-weight="bold" fill="#1e3a8a" text-anchor="middle">ÉLÉVATION</text>
<text x="145" y="210" font-size="17" font-weight="bold" fill="#166534" text-anchor="middle">VUE DE DESSUS</text>
<text x="325" y="80" font-size="17" font-weight="bold" fill="#92400e" text-anchor="middle">CÔTÉ</text>
<text x="145" y="108" font-size="14" fill="#334155" text-anchor="middle">largeur × hauteur</text>
<text x="145" y="232" font-size="14" fill="#334155" text-anchor="middle">largeur × profondeur</text>
<text x="325" y="104" font-size="14" fill="#334155" text-anchor="middle">profondeur × hauteur</text>
<text x="420" y="60" font-size="15" fill="#1e293b">PV : mur d'en face</text>
<text x="420" y="90" font-size="15" fill="#1e293b">PH : sol</text>
<text x="420" y="120" font-size="15" fill="#1e293b">PL : mur de côté</text>
<text x="420" y="180" font-size="15" fill="#334155">chaque vue montre</text>
<text x="420" y="205" font-size="15" fill="#334155">deux dimensions et en</text>
<text x="420" y="230" font-size="15" fill="#334155">cache une</text>
</svg>`
    },
    {
      type: `3d`, title: `Fais tourner le solide : d'où le regardes-tu ?`,
      scene: `solid`,
      options: { shape: `box`, w: 3, h: 2, d: 2, color: `#3b82f6`, labels: true, shapes: [`box`, `cube`, `prism`, `pyramid`, `cylinder`, `cone`, `sphere`] },
      caption: `Regarde le solide d'en haut (vue de dessus), de face (élévation) et de côté (profil). Essaie ensuite avec la pyramide, le cylindre et le cône : quelle vue montre un cercle ? laquelle un triangle ?`
    },
    {
      type: `quiz`, title: `Mini-quiz : les trois plans`,
      questions: [
        { type: `mc`, q: `Sur quel plan projette-t-on la vue de dessus ?`, options: [`PV`, `PH`, `PL`], answer: 1, explain: `La vue de dessus se projette sur le plan horizontal (PH).` },
        { type: `mc`, q: `Dans la disposition standard, où dessine-t-on la vue de dessus par rapport à l'élévation ?`, options: [`Au-dessus`, `En dessous`, `À droite`], answer: 1, explain: `Après le rabattement du PH, la vue de dessus se trouve sous l'élévation, avec la même largeur.` },
        { type: `tf`, q: `Une seule projection orthogonale suffit à déterminer un solide.`, answer: false, explain: `Des solides différents peuvent avoir la même projection : il faut au moins deux vues.` }
      ]
    },
    {
      type: `text`, title: `3. Points et segments`,
      html: `<p>Un <b>point</b> P de l'espace a trois coordonnées (x, y, z). Ses projections sont : <b>P'</b> sur le PH (vue de dessus, qui indique largeur et profondeur), <b>P''</b> sur le PV (élévation, qui indique largeur et cote). Après le rabattement, P' et P'' se trouvent sur la <b>même perpendiculaire à la ligne de terre</b> (la « ligne de rappel »). La distance de P'' à la ligne de terre est la <b>cote</b> (hauteur de P au-dessus du sol) ; la distance de P' à la ligne de terre est l'<b>éloignement</b> (distance de P au mur).</p>
<p>Un <b>segment</b> AB se projette en reliant les projections de ses deux extrémités. Les positions particulières sont :</p>
<ul>
<li><b>parallèle au PH</b> (horizontal) : en vue de dessus il est en <b>vraie grandeur</b>, en élévation il est parallèle à la ligne de terre ;</li>
<li><b>parallèle au PV</b> : en élévation il est en vraie grandeur ;</li>
<li><b>perpendiculaire au PH</b> (vertical) : en vue de dessus il se réduit à un <b>point</b>, en élévation il est en vraie grandeur et perpendiculaire à la ligne de terre ;</li>
<li><b>perpendiculaire au PV</b> : en élévation c'est un point, en vue de dessus il est en vraie grandeur et perpendiculaire à la ligne de terre ;</li>
<li><b>quelconque</b> (oblique) : dans les <b>deux</b> projections il est plus court qu'en réalité, et sa vraie longueur s'obtient par une construction auxiliaire.</li>
</ul>
<p>Règle générale : la projection orthogonale d'un segment a pour <b>longueur celle du segment multipliée par le cosinus</b> de l'angle qu'il fait avec le plan : s'il est parallèle (0°), le cosinus vaut 1 et rien ne change ; s'il est perpendiculaire (90°), le cosinus vaut 0 et il se réduit à un point.</p>`
    },
    {
      type: `example`, title: `Exemple : où se trouve la lampe ?`,
      html: `<p>Une lampe suspendue au plafond d'une pièce se trouve à 2,5 m du sol et à 1,2 m du mur du fond. Comment la représenter ?</p>
<ul>
<li>L'<b>élévation</b> (PV) montre la lampe à <b>2,5 m</b> au-dessus de la ligne de terre.</li>
<li>La <b>vue de dessus</b> (PH) la montre à <b>1,2 m</b> sous la ligne de terre (après le rabattement).</li>
<li>Les deux projections sont sur la même verticale (la ligne de rappel).</li>
</ul>
<p>Avec deux simples mesures, on retrouve la position exacte dans l'espace : c'est le principe des cartes topographiques avec leurs altitudes et des coordonnées des systèmes GPS.</p>`
    },
    {
      type: `text`, title: `4. Les figures planes`,
      html: `<p>Une <b>figure plane</b> (par exemple un carré ou un cercle) se projette orthogonalement point par point. Le résultat dépend de sa <b>position</b> dans l'espace :</p>
<ul>
<li><b>parallèle à un plan de projection</b> : sur ce plan elle apparaît en <b>vraie forme</b> (même forme et mêmes dimensions), sur l'autre elle se réduit à un <b>segment</b> (parallèle à la ligne de terre) ;</li>
<li><b>perpendiculaire à un plan</b> : sur celui-ci c'est un <b>segment</b> ;</li>
<li><b>inclinée</b> : dans les deux projections elle est <b>déformée</b> (un carré devient un parallélogramme ; un cercle une <b>ellipse</b>).</li>
</ul>
<p>Exemple : un <b>carré de 4 cm de côté</b> posé sur le sol (parallèle au PH) est, en vue de dessus, un carré de 4 × 4 cm en vraie forme ; en élévation, un segment horizontal de 4 cm. Si on le dresse sur la tranche (perpendiculaire au PV), c'est l'inverse.</p>
<p>Un <b>cercle</b> parallèle au PH se projette en vue de dessus comme un cercle et en élévation comme un segment de la longueur du diamètre. S'il est incliné, il devient une ellipse : son grand axe reste égal au diamètre.</p>`
    },
    {
      type: `text`, title: `5. Les solides : règles pour les dessiner`,
      html: `<p>Pour dessiner les projections orthogonales d'un solide posé sur le plan, on procède ainsi :</p>
<ol>
<li>Dessine la <b>vue de dessus</b> (la base) : c'est le contour vu d'en haut.</li>
<li>Trace depuis chaque sommet de la vue de dessus une <b>ligne de rappel</b> verticale vers le haut.</li>
<li>Sur l'élévation, reporte les <b>hauteurs</b> (cotes) des sommets à partir de la ligne de terre, puis relie les points.</li>
<li>Pour la <b>vue de côté</b>, utilise des rappels horizontaux depuis l'élévation (mêmes hauteurs) et reporte les profondeurs depuis la vue de dessus, en les faisant tourner avec une droite à 45° ou au compas.</li>
<li>Repasse les <b>arêtes visibles en trait continu</b> et les <b>arêtes cachées en trait interrompu</b> (pointillés) ; les <b>axes de symétrie</b> en trait mixte (trait-point).</li>
</ol>
<p>Quelques vues caractéristiques :</p>
<ul>
<li><b>Cube</b> (posé sur une face) : élévation et vue de côté sont des carrés, la vue de dessus aussi.</li>
<li><b>Prisme droit</b> : élévation rectangulaire, vue de dessus = polygone de base.</li>
<li><b>Pyramide régulière</b> à base carrée : élévation en <b>triangle</b>, vue de dessus en carré avec ses <b>diagonales</b> (les arêtes latérales).</li>
<li><b>Cylindre</b> (axe vertical) : élévation rectangulaire, vue de dessus en <b>cercle</b>.</li>
<li><b>Cône</b> (axe vertical) : élévation en triangle isocèle, vue de dessus en cercle avec son centre.</li>
<li><b>Sphère</b> : les trois projections sont des <b>cercles</b> identiques.</li>
</ul>`
    },
    {
      type: `svg`, title: `Vue de dessus et élévation des principaux solides`,
      caption: `Les solides de révolution (cylindre, cône, sphère) ont au moins une vue circulaire : c'est l'indice qui permet de les reconnaître. La pyramide montre en vue de dessus ses diagonales, qui sont les arêtes obliques vues d'en haut.`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#f8fafc"/><line x1="10" y1="150" x2="590" y2="150" stroke="#dc2626" stroke-width="2"/><text x="14" y="145" font-size="14" fill="#dc2626">ligne de terre</text><text x="60" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Cube</text><rect x="30" y="60" width="60" height="60" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><rect x="30" y="180" width="60" height="60" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="60" y1="122" x2="60" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="180" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Pyramide</text><polygon points="145,120 215,120 180,50" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><rect x="145" y="175" width="70" height="70" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="145" y1="175" x2="215" y2="245" stroke="#1e3a8a" stroke-width="1.5"/><line x1="215" y1="175" x2="145" y2="245" stroke="#1e3a8a" stroke-width="1.5"/><line x1="180" y1="122" x2="180" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="300" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Cylindre</text><rect x="270" y="50" width="60" height="70" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="300" cy="210" r="30" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="300" y1="122" x2="300" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="420" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Cône</text><polygon points="385,120 455,120 420,45" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="420" cy="210" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="420" cy="210" r="3" fill="#1e3a8a"/><line x1="420" y1="122" x2="420" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="540" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Sphère</text><circle cx="540" cy="85" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="540" cy="210" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="540" y1="122" x2="540" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="300" y="285" font-size="15" fill="#334155" text-anchor="middle">en haut : élévation (sur le PV) – en bas : vue de dessus (sur le PH)</text><text x="300" y="308" font-size="14" fill="#475569" text-anchor="middle">les projections d'un même point sont sur la même perpendiculaire à la ligne de terre</text></svg>`
    },
    {
      type: `example`, title: `Exemple : le gobelet en carton`,
      html: `<p>Un gobelet en carton est un <b>tronc de cône</b> dont la petite base est en bas. Son élévation est un <b>trapèze isocèle</b> ; sa vue de dessus est formée de <b>deux cercles concentriques</b> (le grand bord en haut et le fond plus petit). Qui ne lit que l'élévation pourrait penser à un vase ou à un seau ; la vue de dessus circulaire, avec ses deux cercles, indique qu'il s'agit d'un solide de révolution. C'est justement en croisant les vues qu'on « reconstruit » l'objet.</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Monge a dû garder sa méthode secrète`,
      html: `<p>Gaspard Monge a inventé sa méthode très jeune (vers 1765), alors qu'il travaillait comme dessinateur à l'école militaire de Mézières, pour calculer où placer les canons sans longs calculs numériques. Elle fut considérée comme un <b>secret militaire</b> et resta confidentielle pendant une trentaine d'années. Ce n'est qu'après la Révolution française que Monge, devenu ministre et fondateur de l'École polytechnique, put l'enseigner publiquement. Il fut aussi l'un des conseillers scientifiques de Napoléon lors de la campagne d'Égypte.</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Les jeux vidéo et les imprimantes 3D raisonnent aussi comme ça`,
      html: `<p>Les logiciels de modélisation 3D (Blender, CAO) affichent par défaut quatre vues : <b>Top</b> (vue de dessus), <b>Front</b> (élévation), <b>Right/Left</b> (vue de côté) et une vue 3D. Ce sont exactement les projections de Monge ! Les imprimantes 3D travaillent « par couches » : chaque couche est la section horizontale de l'objet, c'est-à-dire une « vue de dessus » à une certaine hauteur.</p>`
    },
    {
      type: `remember`, title: `À retenir`,
      html: `<ul>
<li>Projection <b>orthogonale</b> : rayons perpendiculaires au plan.</li>
<li>Trois plans : <b>PV</b> (élévation), <b>PH</b> (vue de dessus), <b>PL</b> (vue de côté). Après le rabattement : vue de dessus sous l'élévation, vue de côté à droite.</li>
<li>Une figure <b>parallèle</b> à un plan apparaît en <b>vraie forme</b> sur ce plan ; <b>perpendiculaire</b> → segment (ou point, pour un segment).</li>
<li>Arêtes visibles en trait <b>continu</b>, cachées en trait <b>interrompu</b>, axes en trait <b>mixte</b> (trait-point).</li>
<li>Le cylindre, le cône et la sphère ont une vue <b>circulaire</b>.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `D'autres façons de comprendre`,
      intro: `Les projections orthogonales se comprennent mieux en les voyant et en les manipulant.`,
      tabs: [
        {
          label: `🔦 Les ombres`,
          html: `<p>Place un objet devant un mur et éclaire-le avec une lampe très éloignée (ou avec le soleil) : l'ombre est la projection. Si le mur est perpendiculaire aux rayons, l'ombre est <b>orthogonale</b>. Essaie avec une boîte de céréales : d'un côté l'ombre est un rectangle large, de l'autre un rectangle étroit, d'en haut un rectangle encore différent. Chacune est une vue.</p>`
        },
        {
          label: `🧊 La boîte en verre`,
          html: `<p>Imagine l'objet à l'intérieur d'une boîte en verre transparent : en regardant par la face avant, par celle du dessus et par celle de côté, tu vois les trois vues « dessinées » sur le verre. Si tu ouvres la boîte comme un carton (c'est-à-dire en <b>rabattant</b> les faces sur un plan), tu obtiens exactement les trois vues disposées comme sur la feuille.</p>`,
          scene: `solid`,
          options: { shape: `cube`, color: `#60a5fa`, labels: true, shapes: [`cube`, `box`, `pyramid`, `cone`] }
        },
        {
          label: `🇺🇸 Méthode européenne et américaine`,
          html: `<p>Il existe deux conventions dans le monde :</p>
<ul>
<li><b>Méthode européenne</b> (premier dièdre, celle qu'on utilise en France et en Italie) : l'objet est <b>entre l'observateur et le plan</b> ; la vue de dessus va sous l'élévation, la vue de gauche à droite.</li>
<li><b>Méthode américaine</b> (troisième dièdre) : le plan est entre l'observateur et l'objet, comme une vitre transparente ; la vue de dessus va <b>au-dessus</b> de l'élévation et la vue de gauche à gauche.</li>
</ul>
<p>Dans les normes internationales (ISO), un petit symbole représentant un cône tronqué indique quelle méthode a été utilisée dans le dessin.</p>`
        },
        {
          label: `🏷️ Reconnais les vues`,
          html: `<p>Associe chaque solide à sa vue de dessus.</p>`,
          widget: `match`,
          options: { pairs: [[`Cube`, `Carré`], [`Cylindre`, `Cercle`], [`Pyramide à base carrée`, `Carré avec diagonales`], [`Cône`, `Cercle avec point central`], [`Sphère`, `Cercle`]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : les projections orthogonales`,
      nodes: [
        { id: `rapp`, label: `Représenter la 3D sur une feuille`, x: 50, y: 6, color: `#64748b`, html: `Comment réduire un objet en trois dimensions à des dessins plans sans perdre les mesures.`, why: `Un dessin plan perd toujours une dimension. On la récupère en combinant plusieurs vues sur des plans différents.` },
        { id: `proj`, label: `Projection orthogonale`, x: 20, y: 30, color: `#0ea5e9`, html: `Rayons perpendiculaires au plan.`, why: `Si le rayon est perpendiculaire, un segment parallèle au plan garde sa longueur : c'est pourquoi la méthode conserve les mesures.` },
        { id: `piani`, label: `Trois plans PV, PH, PL`, x: 52, y: 30, color: `#f59e0b`, html: `Mur d'en face, sol, mur de côté.`, why: `Il faut deux plans perpendiculaires pour fixer un point : x, y, z sont les coordonnées cartésiennes de Descartes (1637) appliquées aux vues.` },
        { id: `rib`, label: `Rabattement`, x: 82, y: 30, color: `#a855f7`, html: `Faire tourner les plans pour tout étaler sur la feuille.`, why: `L'idée géniale de <b>Monge</b> (vers 1765, publiée en 1795-1799) : rendre plan un espace à trois dimensions par une rotation de 90°.` },
        { id: `vera`, label: `Vraie grandeur`, x: 22, y: 62, color: `#22c55e`, html: `Un segment ou une figure parallèle au plan n'est pas déformé.`, why: `Une projection multiplie les longueurs par le cosinus de l'angle avec le plan : si l'angle vaut 0, le cosinus vaut 1.` },
        { id: `solidi`, label: `Les solides`, x: 52, y: 62, color: `#ef4444`, html: `Vue de dessus + élévation (+ vue de côté) identifient un solide.`, why: `Chaque vue donne deux dimensions ; avec deux ou trois vues, on les obtient toutes les trois. Les arêtes cachées sont en pointillés pour lire l'intérieur.` },
        { id: `norma`, label: `Normes et conventions`, x: 82, y: 62, color: `#14b8a6`, html: `Traits continus, interrompus, mixtes ; méthode européenne et américaine.`, why: `Pour que celui qui dessine à Turin et celui qui lit à Tokyo comprennent le même dessin, il faut des règles communes : les normes ISO (et nationales, comme UNI en Italie ou NF en France).` },
        { id: `uso`, label: `Applications`, x: 50, y: 90, color: `#0ea5e9`, html: `Mécanique, architecture, CAO, impression 3D.`, why: `Chaque pièce fabriquée en série est définie par un dessin coté en projections orthogonales.` }
      ],
      edges: [
        [`rapp`, `proj`, `méthode`], [`rapp`, `piani`, `utilise`], [`piani`, `rib`, `on obtient`], [`proj`, `vera`, `si parallèle`],
        [`rib`, `solidi`, `pour`], [`piani`, `solidi`, `dessine`], [`solidi`, `norma`, `respecte`], [`solidi`, `uso`, `pour`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : segments et solides`,
      questions: [
        { type: `mc`, q: `Un segment perpendiculaire au plan horizontal apparaît en vue de dessus comme…`, options: [`Un segment en vraie grandeur`, `Un point`, `Un segment réduit de moitié`], answer: 1, explain: `Le rayon projetant coïncide avec le segment : la projection se réduit à un point.` },
        { type: `mc`, q: `La vue de dessus d'un cône d'axe vertical est…`, options: [`Un triangle`, `Un cercle avec son point central`, `Un rectangle`], answer: 1, explain: `La base circulaire et le sommet projeté au centre.` },
        { type: `tf`, q: `L'élévation d'une sphère est un cercle.`, answer: true, explain: `Les trois projections de la sphère sont des cercles, de rayon égal à celui de la sphère.` },
        { type: `num`, q: `Un cube de 5 cm d'arête est posé sur une face : quelle est l'aire du carré de l'élévation ?`, answer: 25, tol: 0, unit: `cm²`, explain: `L'élévation est un carré en vraie forme de 5 cm de côté : 5 × 5 = 25 cm².` }
      ]
    }
  ],
  glossary: [
    { t: `Projection orthogonale`, d: `Projection dont les rayons sont perpendiculaires au plan de projection.` },
    { t: `Vue de dessus`, d: `Vue d'en haut : projection sur le plan horizontal (PH).` },
    { t: `Élévation`, d: `Vue de face : projection sur le plan vertical (PV).` },
    { t: `Vue de côté`, d: `Vue latérale (profil) : projection sur le plan latéral (PL).` },
    { t: `Ligne de terre`, d: `Droite d'intersection entre le plan vertical et le plan horizontal.` },
    { t: `Rabattement`, d: `Rotation de 90° des plans pour étaler toutes les vues sur la feuille.` },
    { t: `Vraie grandeur`, d: `Projection d'un segment ou d'une figure qui conserve ses dimensions réelles.` },
    { t: `Ligne de rappel`, d: `Trait fin qui met en correspondance les projections d'un même point.` },
    { t: `Méthode de Monge`, d: `Système de représentation par plans orthogonaux rabattus, inventé par Gaspard Monge.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Qui a mis au point la méthode des projections orthogonales (géométrie descriptive) ?`, options: [`Gaspard Monge`, `Filippo Brunelleschi`, `Euclide`], answer: 0, explain: `Monge, mathématicien français, a publié la Géométrie descriptive (1795-1799).` },
      { type: `mc`, q: `L'élévation se projette sur le…`, options: [`plan horizontal`, `plan vertical`, `plan latéral`], answer: 1, explain: `L'élévation est la vue de face : PV.` },
      { type: `tf`, q: `Un segment parallèle au plan de projection se projette en vraie grandeur.`, answer: true, explain: `Le segment et sa projection sont les côtés opposés d'un rectangle.` },
      { type: `num`, q: `Un segment vertical mesure 8 cm : combien mesure sa projection sur le plan horizontal (en cm) ?`, answer: 0, tol: 0, unit: `cm`, explain: `C'est un point : longueur nulle.` },
      { type: `mc`, q: `Comment dessine-t-on les arêtes cachées ?`, options: [`En trait continu épais`, `En trait interrompu`, `On ne les dessine jamais`], answer: 1, explain: `Convention du dessin technique : trait interrompu (pointillés).` },
      { type: `mc`, q: `Un cylindre d'axe vertical a pour vue de dessus…`, options: [`un rectangle`, `un cercle`, `un triangle`], answer: 1, explain: `Vu d'en haut, on voit la base circulaire.` },
      { type: `order`, q: `Remets dans l'ordre les étapes pour dessiner la vue de dessus et l'élévation d'une pyramide.`, items: [`Dessine la vue de dessus de la base`, `Trace les lignes de rappel verticales`, `Reporte les cotes sur l'élévation`, `Relie les points et repasse`], explain: `La vue de dessus donne les positions horizontales, puis on reporte les hauteurs.` },
      { type: `tf`, q: `L'élévation d'une pyramide régulière à base carrée, vue de face, est un triangle.`, answer: true, explain: `On voit la base comme un segment et les faces comme un triangle.` },
      { type: `text`, q: `Comment appelle-t-on la droite d'intersection entre le plan vertical et le plan horizontal ?`, answer: [`ligne de terre`, `la ligne de terre`], explain: `La ligne de terre : après le rabattement, elle sépare l'élévation de la vue de dessus.` },
      { type: `mc`, q: `Quel solide a trois projections identiques, toutes des cercles ?`, options: [`Sphère`, `Cône`, `Cylindre`], answer: 0, explain: `La sphère est symétrique dans toutes les directions.` }
    ]
  }
});
