TOPIC('fr', {
  id: `l1-art-costruzioni-geometriche`,
  title: `Dessin : constructions géométriques`,
  intro: `Avant de dessiner une maison, une machine ou un logo, il faut savoir tracer avec précision des <b>droites perpendiculaires, des parallèles, des angles et des polygones</b>. Les instruments sont peu nombreux : <b>règle, équerres et compas</b>. Les constructions géométriques sont la grammaire du dessin technique : chaque étape a une raison mathématique, et chaque erreur se voit tout de suite. Apprenons à « raisonner avec le compas », comme les géomètres grecs ! 📐✏️`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Les instruments et les règles du jeu`,
      html: `<p>La géométrie euclidienne classique n'admet que deux instruments : la <b>règle non graduée</b> (pour tracer des droites) et le <b>compas</b> (pour tracer des cercles et reporter des longueurs). En dessin technique, on utilise aussi les <b>équerres</b> et le <b>rapporteur</b>, qui accélèrent le travail, mais les constructions « à la règle et au compas » restent fondamentales.</p>
<ul>
<li><b>Crayons</b> : un crayon dur (H, 2H) pour les traits de construction fins et légers ; un plus tendre (HB, B) pour repasser le dessin terminé.</li>
<li><b>Équerres</b> : l'équerre à <b>45°</b> (triangle rectangle isocèle) et celle à <b>30°/60°</b> (moitié d'un triangle équilatéral). Une équerre posée contre la règle permet de tracer perpendiculaires et parallèles ; en combinant les deux équerres, on obtient aussi des angles de 15°, 75°, 105°.</li>
<li><b>Compas</b> : on plante la pointe au centre et on fait tourner la mine. Règle d'or : <b>ne jamais changer l'écartement</b> tant que la construction ne l'exige pas.</li>
</ul>
<p>Conventions : les points sont désignés par des lettres <b>majuscules</b> (A, B, C), les droites par des lettres minuscules (r, s) ; les arcs de construction restent <b>visibles et fins</b> : celui qui regarde doit pouvoir « lire » ton raisonnement. Le dessin terminé est repassé d'un trait appuyé.</p>`
    },
    {
      type: `text`, title: `2. Médiatrice d'un segment et milieu`,
      html: `<p>La <b>médiatrice</b> d'un segment [AB] est la droite perpendiculaire à [AB] qui passe par son milieu. C'est aussi l'ensemble des points <b>équidistants</b> de A et de B : c'est pour cela que la construction fonctionne.</p>
<ol>
<li>Pique le compas en <b>A</b> avec un écartement <b>supérieur à la moitié de AB</b> et trace un arc au-dessus et au-dessous du segment.</li>
<li>Sans changer l'écartement, pique en <b>B</b> et trace deux arcs qui coupent les précédents aux points <b>C</b> et <b>D</b>.</li>
<li>Relie C et D : la droite (CD) est la <b>médiatrice</b> ; le point M où elle coupe [AB] est le <b>milieu</b>.</li>
</ol>
<p>Pourquoi ça marche : C et D sont à égale distance de A et de B (même rayon), donc ils sont tous deux sur la médiatrice ; deux points suffisent pour déterminer une droite. Les quatre côtés AC, BC, AD, BD sont égaux, et ACBD est un <b>losange</b> : les diagonales d'un losange sont perpendiculaires et se coupent en leur milieu.</p>`
    },
    {
      type: `svg`, title: `La médiatrice d'un segment, étape par étape`,
      caption: `Deux arcs de même rayon, centrés en A et en B, se coupent en C et D : la droite (CD) est perpendiculaire à [AB] et passe par le milieu M.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="150" x2="340" y2="150" stroke="#1e293b" stroke-width="3"/>
<path d="M200 52 A140 140 0 0 1 200 248" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M200 52 A140 140 0 0 0 200 248" fill="none" stroke="#dc2626" stroke-width="2"/>
<line x1="200" y1="30" x2="200" y2="270" stroke="#16a34a" stroke-width="3" stroke-dasharray="8 4"/>
<g fill="#1e293b"><circle cx="100" cy="150" r="5"/><circle cx="300" cy="150" r="5"/><circle cx="200" cy="52" r="5"/><circle cx="200" cy="248" r="5"/><circle cx="200" cy="150" r="5" fill="#16a34a"/></g>
<g font-size="18" font-weight="bold" fill="#1e293b"><text x="82" y="140">A</text><text x="308" y="140">B</text><text x="210" y="50">C</text><text x="210" y="266">D</text><text x="210" y="142" fill="#16a34a">M</text></g>
<text x="400" y="100" font-size="16" fill="#2563eb">arc centré en A</text>
<text x="400" y="130" font-size="16" fill="#dc2626">arc centré en B</text>
<text x="400" y="160" font-size="16" fill="#16a34a">médiatrice (CD) (perpendiculaire)</text>
<text x="400" y="200" font-size="15" fill="#334155">même rayon : AC = BC = AD = BD</text>
</svg>`
    },
    {
      type: `text`, title: `3. Perpendiculaires et parallèles`,
      html: `<p><b>Perpendiculaire à une droite r passant par un point P</b></p>
<ul>
<li><b>P sur r</b> : avec le centre en P, trace un arc qui coupe r en deux points X et Y ; construis ensuite la médiatrice du segment [XY] (c'est la perpendiculaire cherchée, elle passe par P).</li>
<li><b>P hors de r</b> : avec le centre en P, trace un arc qui coupe r en X et Y ; à partir de X et de Y, avec le même écartement, trace deux arcs qui se coupent en Q ; la droite (PQ) est la perpendiculaire.</li>
<li><b>Avec les équerres</b> : pose un côté de l'angle droit de l'équerre sur la droite, fais-la glisser jusqu'à ce que l'autre côté passe par P et trace.</li>
</ul>
<p><b>Parallèle à une droite r passant par un point P</b></p>
<ul>
<li><b>Avec deux équerres</b> : pose l'hypoténuse (ou un côté de l'angle droit) d'une équerre sur r, la seconde équerre sert de « guide » contre la première ; fais glisser la première jusqu'à P et trace. C'est la méthode la plus utilisée à la table à dessin.</li>
<li><b>Au compas (losange)</b> : choisis un point A sur r ; avec le centre en A et le rayon AP, trace un arc qui coupe r en B ; avec le même rayon et les centres en B et en P, trace deux arcs qui se coupent en Q (du côté de P). APQB est un losange, donc (PQ) est parallèle à r.</li>
<li><b>Avec deux perpendiculaires</b> : deux droites perpendiculaires à une même droite r sont parallèles entre elles.</li>
</ul>
<p>Un cas important est celui des <b>parallèles à une distance donnée d</b> : construis une perpendiculaire à r, reporte dessus la distance d et trace à partir de là la perpendiculaire à cette perpendiculaire.</p>`
    },
    {
      type: `example`, title: `Exemple pratique : la marge d'un cahier et un cadre`,
      html: `<p>Tu veux dessiner un cadre de <b>1,5 cm</b> de large autour d'un rectangle. Il suffit de tracer quatre <b>parallèles aux côtés à 1,5 cm de distance</b> : pour chacune, construis une perpendiculaire, reporte 1,5 cm au compas et trace la parallèle avec les équerres. Les angles restent droits, car des parallèles à des côtés perpendiculaires sont elles-mêmes perpendiculaires. C'est le procédé qu'utilise un graphiste pour les marges d'une page.</p>`
    },
    {
      type: `text`, title: `4. La bissectrice d'un angle et le partage d'un segment`,
      html: `<p><b>Bissectrice</b> (la demi-droite qui partage l'angle en deux angles égaux), pour un angle de sommet V :</p>
<ol>
<li>Avec le centre en V, trace un arc qui coupe les deux côtés en A et B.</li>
<li>Avec le centre en A puis en B, et le même écartement, trace deux arcs qui se coupent en E.</li>
<li>La demi-droite [VE) est la bissectrice. Cela fonctionne parce que VAEB est un losange (ou un cerf-volant) et que la diagonale d'un losange partage ses angles en deux.</li>
</ol>
<p>Avec la bissectrice, tu peux construire des angles de <b>45°</b> (bissectrice de 90°), <b>30°</b> (bissectrice de 60°), <b>15°</b>, <b>22,5°</b>, etc. L'angle de <b>60°</b> s'obtient avec un triangle équilatéral (même écartement de compas pour les trois côtés) ; celui de <b>90°</b> avec la perpendiculaire.</p>
<p><b>Partager un segment en n parties égales</b> (théorème de Thalès) : pour partager [AB] en 5 parties :</p>
<ol>
<li>À partir de A, trace une demi-droite quelconque, non alignée avec [AB].</li>
<li>Avec un écartement de compas quelconque, reporte dessus <b>5 segments égaux</b> consécutifs : A1, A2, … A5.</li>
<li>Relie A5 à B et trace, à partir de A4, A3, A2, A1, les <b>parallèles à (A5B)</b> : elles partagent [AB] en 5 parties égales.</li>
</ol>
<p>La raison : un faisceau de droites parallèles coupe deux sécantes selon des segments proportionnels (Thalès). Si les segments sont égaux sur une sécante, ils le sont aussi sur l'autre.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz : les premiers outils`,
      questions: [
        { type: `mc`, q: `Quelle propriété ont tous les points de la médiatrice d'un segment [AB] ?`, options: [`Ils sont équidistants de A et de B`, `Ils sont à la même distance du point A seulement`, `Ils sont alignés avec A et B`], answer: 0, explain: `La médiatrice est le lieu des points équidistants des extrémités : c'est pourquoi on la construit avec deux arcs de même rayon.` },
        { type: `num`, q: `Combien de degrés la bissectrice d'un angle droit forme-t-elle avec chaque côté ?`, answer: 45, tol: 0, unit: `°`, explain: `90° : 2 = 45°.` },
        { type: `tf`, q: `Pour partager un segment en 7 parties égales, il suffit de reporter 7 segments égaux sur une demi-droite auxiliaire et de tracer des parallèles.`, answer: true, explain: `C'est l'application du théorème de Thalès : les parallèles coupent le segment en parties égales.` }
      ]
    },
    {
      type: `text`, title: `5. Polygones réguliers inscrits dans un cercle`,
      html: `<p>Un <b>polygone régulier</b> a tous ses côtés et tous ses angles égaux. Inscrit dans un cercle de rayon r, il a ses sommets sur le cercle : le cercle est partagé en <b>n arcs égaux</b>, chacun de 360°/n.</p>
<ul>
<li><b>Triangle équilatéral</b> : partage le cercle en 3 parties (arcs de 120°) ou construis les trois côtés égaux. Le côté vaut l = r√3 ≈ 1,732 r.</li>
<li><b>Carré</b> : trace deux diamètres perpendiculaires : leurs extrémités sont les 4 sommets. Le côté vaut l = r√2 ≈ 1,414 r.</li>
<li><b>Hexagone régulier</b> : le <b>côté est égal au rayon</b> (l = r). Avec le même écartement de compas, tu reportes 6 fois sur le cercle et tu reviens exactement au point de départ. En reliant un sommet sur deux, tu obtiens le <b>triangle équilatéral</b>.</li>
<li><b>Octogone</b> : pars du carré et trouve le milieu des arcs (bissectrices) ; le nombre de côtés double : 4 → 8 → 16.</li>
<li><b>Pentagone</b> : plus compliqué, son côté est lié au <b>nombre d'or</b>. On l'obtient avec une construction qui utilise le milieu d'un rayon (voir plus bas).</li>
<li><b>Décagone</b> : son côté est la section dorée du rayon ; en doublant le décagone, on obtient 20 côtés.</li>
</ul>
<p>L'hexagone est le plus simple parce que 360° : 6 = 60°, et le triangle formé par deux rayons et un côté est <b>équilatéral</b>. Voilà pourquoi l'hexagone est partout dans la nature : alvéoles des abeilles, cristaux de neige, structure du graphène.</p>`
    },
    {
      type: `svg`, title: `L'hexagone régulier au compas`,
      caption: `On trace le cercle de rayon r ; sans changer l'écartement, on reporte le rayon 6 fois sur le cercle. Reliés, les 6 points forment l'hexagone. Six triangles équilatéraux remplissent l'hexagone.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="170" cy="150" r="110" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 4"/>
<polygon points="280,150 225,245.3 115,245.3 60,150 115,54.7 225,54.7" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3" stroke-linejoin="round"/>
<g stroke="#1e3a8a" stroke-width="1.5"><line x1="170" y1="150" x2="280" y2="150"/><line x1="170" y1="150" x2="225" y2="245.3"/><line x1="170" y1="150" x2="115" y2="245.3"/><line x1="170" y1="150" x2="60" y2="150"/><line x1="170" y1="150" x2="115" y2="54.7"/><line x1="170" y1="150" x2="225" y2="54.7"/></g>
<g fill="#dc2626"><circle cx="280" cy="150" r="5"/><circle cx="225" cy="245.3" r="5"/><circle cx="115" cy="245.3" r="5"/><circle cx="60" cy="150" r="5"/><circle cx="115" cy="54.7" r="5"/><circle cx="225" cy="54.7" r="5"/></g>
<circle cx="170" cy="150" r="5" fill="#1e293b"/>
<text x="180" y="170" font-size="16" fill="#1e293b">O</text>
<text x="222" y="142" font-size="16" fill="#92400e" font-weight="bold">r</text>
<polygon points="450,150 490,81 570,81 610,150 570,219 490,219" fill="none"/>
<text x="330" y="60" font-size="17" font-weight="bold" fill="#1e3a8a">Hexagone régulier</text>
<text x="330" y="95" font-size="16" fill="#334155">côté = rayon (l = r)</text>
<text x="330" y="125" font-size="16" fill="#334155">angle au centre = 60°</text>
<text x="330" y="155" font-size="16" fill="#334155">angle intérieur = 120°</text>
<text x="330" y="185" font-size="16" fill="#334155">6 triangles équilatéraux</text>
<text x="330" y="225" font-size="16" fill="#334155">en reliant un sommet sur deux :</text>
<text x="330" y="250" font-size="16" fill="#334155">triangle équilatéral inscrit</text>
</svg>`
    },
    {
      type: `3d`, title: `Le prisme hexagonal : une construction qui prend du volume`,
      scene: `solid`,
      options: { shape: `prism`, n: 6, r: 1, h: 1.6, color: `#3b82f6`, labels: true, shapes: [`prism`, `pyramid`, `cube`, `cylinder`] },
      caption: `La base de ce prisme est l'hexagone que tu viens de construire. En comptant les faces, les arêtes et les sommets, tu trouves F + S - A = 2 (formule d'Euler). Une section horizontale reproduit ta construction.`
    },
    {
      type: `text`, title: `6. Un polygone quelconque : méthode générale et pentagone`,
      html: `<p><b>Autres polygones</b> : pour n quelconque, on peut partager le cercle au rapporteur en arcs de 360°/n (par exemple 40° pour l'ennéagone). À la règle et au compas, en revanche, seuls certains polygones sont constructibles exactement : ceux obtenus en doublant le nombre de côtés (4, 8, 16 ; 6, 12 ; 5, 10, 20), plus le triangle et le polygone à 17 côtés. Pour les autres (7, 9, 11…), on utilise des méthodes approchées.</p>
<p><b>Pentagone régulier inscrit</b> dans un cercle de centre O (construction classique) :</p>
<ol>
<li>Trace deux diamètres perpendiculaires : [AB] horizontal et [CD] vertical.</li>
<li>Trouve le milieu M du rayon [OB].</li>
<li>Avec le centre en M et le rayon MC (de M à l'extrémité C du diamètre vertical), trace un arc qui coupe le diamètre [AB] en N, du côté opposé à B.</li>
<li>Le segment [CN] est le <b>côté du pentagone</b>. Avec cet écartement, reporte-le 5 fois sur le cercle à partir de C.</li>
</ol>
<p>Le rapport entre la diagonale et le côté du pentagone vaut <b>(1+√5)/2 ≈ 1,618</b>, le <b>nombre d'or φ</b>. Les pythagoriciens avaient adopté le pentagramme (étoile à cinq branches) comme symbole secret.</p>`
    },
    {
      type: `example`, title: `Exemple pratique : le logo en étoile`,
      html: `<p>Tu veux dessiner une étoile à cinq branches pour un logo. Construis le pentagone régulier dans le cercle, puis relie chaque sommet au deuxième sommet suivant : tu obtiens un <b>pentagramme</b> parfait. Si tu le faisais « à l'œil », il serait bancal ; au compas, les branches sont toutes égales, car le cercle est partagé en 5 arcs de 72°.</p>
<p>C'est la même chose pour une horloge : les 12 chiffres sont aux sommets d'un dodécagone régulier, espacés de 30°. On l'obtient à partir de l'hexagone, en coupant les arcs en deux.</p>`
    },
    {
      type: `text`, title: `7. Tangentes et raccordements`,
      html: `<p>Une <b>tangente</b> à un cercle touche la courbe en un seul point, le <b>point de tangence</b>, et elle est <b>perpendiculaire au rayon</b> qui aboutit en ce point. Cette propriété est la clé de tous les raccordements.</p>
<p>Un <b>raccordement</b> est un arc de cercle qui relie « en douceur » deux lignes (deux droites, ou une droite et une courbe) sans angle vif. On le voit dans les routes, les voies ferrées, les bords arrondis des meubles et des téléphones.</p>
<p><b>Raccordement de deux droites sécantes par un arc de rayon r</b> :</p>
<ol>
<li>Trace deux droites <b>parallèles</b> à chacune des deux droites données, à la distance <b>r</b> (du côté intérieur de l'angle).</li>
<li>Leur point d'intersection <b>C</b> est le <b>centre de l'arc</b> : il est à la distance r des deux droites.</li>
<li>À partir du centre C, trace les <b>perpendiculaires</b> aux deux droites : leurs pieds T₁ et T₂ sont les <b>points de tangence</b>.</li>
<li>Avec le centre en C et le rayon r, trace l'arc de T₁ à T₂. Repasse d'un trait appuyé <b>seulement</b> les portions de droites jusqu'à T₁ et T₂, et l'arc.</li>
</ol>
<p><b>Raccordement entre une droite et un cercle</b>, ou entre deux cercles : le centre de l'arc se trouve à la distance r de la droite et à la distance (R + r) (raccordement extérieur) ou (R − r) (raccordement intérieur) du centre du cercle. Le point de tangence est toujours sur la <b>droite qui relie les centres</b>.</p>`
    },
    {
      type: `svg`, title: `Raccordement de deux droites perpendiculaires`,
      caption: `Le centre C est à la distance r des deux droites ; T1 et T2 sont les points de tangence et l'arc les relie sans cassure. Les droites en pointillés sont les parallèles auxiliaires.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#94a3b8" stroke-width="2" stroke-dasharray="7 5"><line x1="120" y1="240" x2="120" y2="40"/><line x1="120" y1="240" x2="520" y2="240"/></g>
<g stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 4"><line x1="200" y1="40" x2="200" y2="270"/><line x1="90" y1="160" x2="520" y2="160"/></g>
<g stroke="#1e293b" stroke-width="4" stroke-linecap="round" fill="none"><path d="M120 40 L120 160 A80 80 0 0 0 200 240 L520 240"/></g>
<g stroke="#16a34a" stroke-width="2"><line x1="200" y1="160" x2="120" y2="160"/><line x1="200" y1="160" x2="200" y2="240"/></g>
<g fill="#dc2626"><circle cx="200" cy="160" r="6"/><circle cx="120" cy="160" r="5"/><circle cx="200" cy="240" r="5"/></g>
<g font-size="17" font-weight="bold" fill="#1e293b"><text x="208" y="152">C</text><text x="70" y="156">T1</text><text x="208" y="262">T2</text></g>
<text x="240" y="200" font-size="16" fill="#16a34a">r</text>
<text x="150" y="190" font-size="16" fill="#16a34a">r</text>
<text x="320" y="110" font-size="16" fill="#334155">1) parallèles à la distance r</text>
<text x="320" y="135" font-size="16" fill="#334155">2) leur intersection est le centre C</text>
<text x="320" y="190" font-size="16" fill="#334155">3) perpendiculaires : points T1 et T2</text>
<text x="320" y="215" font-size="16" fill="#334155">4) arc de centre C et de rayon r</text>
</svg>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Euclide a écrit les règles il y a 2300 ans`,
      html: `<p>Les <i>Éléments</i> d'<b>Euclide</b> (Alexandrie, en Égypte, vers 300 av. J.-C.) commencent par la construction d'un triangle équilatéral sur un segment donné : elle utilise justement deux cercles comme ceux de la médiatrice. Pendant plus de deux mille ans, on s'est demandé quelles constructions étaient possibles avec la seule règle et le compas. Ce n'est qu'au XIXe siècle qu'on a démontré qu'avec ces instruments <b>on ne peut pas</b> résoudre trois problèmes célèbres : <b>la trisection d'un angle quelconque</b>, <b>la duplication du cube</b> et <b>la quadrature du cercle</b>. Le jeune <b>Carl Friedrich Gauss</b>, en 1796, à 19 ans, découvrit en revanche qu'on peut construire le polygone régulier à <b>17 côtés</b> : il en fut si fier qu'il voulut le faire graver sur sa tombe.</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Les abeilles « dessinent » des hexagones`,
      html: `<p>Les alvéoles des rayons de miel sont des <b>hexagones réguliers</b>. Parmi les formes qui pavent le plan sans laisser de trous (triangle équilatéral, carré, hexagone), l'hexagone est celle qui a <b>le plus petit périmètre pour une aire donnée</b> : il faut moins de cire pour construire les parois. Pappus d'Alexandrie (IVe siècle apr. J.-C.) l'avait déjà remarqué ; la démonstration mathématique complète, la « conjecture du nid d'abeilles », a été donnée par Thomas Hales en 1999.</p>`
    },
    {
      type: `remember`, title: `À retenir`,
      html: `<ul>
<li><b>Médiatrice</b> d'un segment : arcs de même rayon à partir de A et de B ; la droite passant par les intersections est perpendiculaire et passe par le milieu.</li>
<li><b>Bissectrice</b> : un arc depuis le sommet, puis deux arcs égaux depuis les points trouvés sur les côtés.</li>
<li><b>Thalès</b> pour partager un segment en parties égales, avec une demi-droite et des parallèles.</li>
<li><b>Hexagone</b> : côté = rayon ; <b>carré</b> : deux diamètres perpendiculaires ; <b>pentagone</b> : côté lié au nombre d'or.</li>
<li><b>Raccordement</b> : centre à la distance r des deux lignes ; points de tangence au pied des perpendiculaires menées du centre.</li>
<li>Les traits de construction restent <b>fins et visibles</b>, le résultat est repassé d'un <b>trait appuyé</b>.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `D'autres façons de comprendre`,
      intro: `Si le compas te semble un rituel mystérieux, essaie de regarder les mêmes constructions par d'autres chemins.`,
      tabs: [
        {
          label: `🧠 Le pourquoi : les lieux géométriques`,
          html: `<p>Chaque construction répond à une question du type « <b>où sont tous les points qui… ?</b> » (lieu géométrique).</p>
<ul>
<li>Les points à la distance <i>r</i> de O → <b>cercle</b>.</li>
<li>Les points équidistants de A et B → <b>médiatrice</b> du segment.</li>
<li>Les points équidistants de deux droites sécantes → <b>bissectrice</b>.</li>
<li>Les points à la distance <i>r</i> d'une droite → deux <b>droites parallèles</b>.</li>
</ul>
<p>Le compas sert à obtenir des distances égales, la règle à relier les points. Un raccordement est l'intersection de deux lieux : <b>centre = (parallèle à distance r) ∩ (parallèle à distance r)</b>.</p>`
        },
        {
          label: `✂️ Avec du papier plié (origami)`,
          html: `<p>Une feuille de papier est un instrument de géomètre ! Plie une feuille en faisant coïncider deux points A et B : le <b>pli</b> est la médiatrice du segment [AB]. Plie en faisant coïncider les deux côtés d'un angle : le pli est la <b>bissectrice</b>. En pliant un carré en deux selon sa diagonale, tu obtiens un angle de 45°.</p>
<p>L'origami permet même de <b>trisecter un angle</b> et de dupliquer le cube, choses impossibles à la règle et au compas : en 1980, le Japonais <b>Hisashi Abe</b> l'a montré.</p>`
        },
        {
          label: `💻 Comment fait l'ordinateur (CAO)`,
          html: `<p>Dans les logiciels de dessin (CAO, Illustrator, Inkscape), des commandes comme « <i>Offset</i> » (décalage : parallèle à une distance donnée), « <i>Fillet</i> » (congé : raccordement) et « <i>Polygon</i> » (polygone régulier) exécutent automatiquement ces constructions : <b>Offset</b> trace les parallèles à la distance r et <b>Fillet</b> cherche le centre de l'arc à l'intersection des parallèles. Comprendre la démarche te permet d'utiliser le logiciel sans tâtonner.</p>`
        },
        {
          label: `🏷️ Reconnais les points`,
          html: `<p>Sur la médiatrice d'un segment, clique sur un point et donne-lui le bon nom.</p>`,
          widget: `labelDiagram`,
          options: {
            svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f8fafc"/><line x1="40" y1="150" x2="360" y2="150" stroke="#1e293b" stroke-width="3"/><path d="M200 35 A130 130 0 0 1 200 265" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M200 35 A130 130 0 0 0 200 265" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="280" stroke="#16a34a" stroke-width="3" stroke-dasharray="8 4"/><g fill="#1e293b"><circle cx="100" cy="150" r="5"/><circle cx="300" cy="150" r="5"/><circle cx="200" cy="35" r="5"/><circle cx="200" cy="265" r="5"/><circle cx="200" cy="150" r="5"/></g></svg>`,
            spots: [
              { x: 100, y: 150, label: `Extrémité A` },
              { x: 300, y: 150, label: `Extrémité B` },
              { x: 200, y: 150, label: `Milieu M` },
              { x: 200, y: 35, label: `Intersection des arcs (C)` },
              { x: 200, y: 22, label: `Médiatrice du segment` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : les constructions géométriques`,
      nodes: [
        { id: `eucl`, label: `Règle et compas`, x: 50, y: 6, color: `#64748b`, html: `Deux instruments : la droite et le cercle.`, why: `Les postulats d'<b>Euclide</b> (Éléments, vers 300 av. J.-C.) n'admettent que « tracer une droite entre deux points » et « décrire un cercle de centre et de rayon donnés ». Tout le reste doit être construit.` },
        { id: `asse`, label: `Médiatrice et perpendiculaires`, x: 18, y: 32, color: `#2563eb`, html: `Médiatrice d'un segment, perpendiculaires, milieu.`, why: `Par l'équidistance : deux cercles de même rayon se coupent aux deux points équidistants des centres (losange aux diagonales perpendiculaires).` },
        { id: `bis`, label: `Bissectrice`, x: 50, y: 32, color: `#f59e0b`, html: `Partager un angle en deux : 45°, 30°, 15°…`, why: `On utilise un losange : sa diagonale partage les angles en deux. Avec la bissectrice, on double le nombre de côtés des polygones.` },
        { id: `tal`, label: `Thalès et proportions`, x: 82, y: 32, color: `#a855f7`, html: `Partage d'un segment en parties égales.`, why: `<b>Thalès de Milet</b> (VIe s. av. J.-C.) : un faisceau de parallèles détermine sur deux sécantes des segments proportionnels. C'est aussi l'origine de la notion de figures semblables.` },
        { id: `pol`, label: `Polygones réguliers`, x: 30, y: 62, color: `#ef4444`, html: `Triangle, carré, hexagone, pentagone, octogone…`, why: `Partager le cercle en n arcs égaux. Gauss (1801) démontra que le polygone régulier à n côtés est constructible à la règle et au compas si n est le produit d'une puissance de 2 et de nombres premiers de Fermat distincts (3, 5, 17, 257, 65537).` },
        { id: `tan`, label: `Tangentes et raccordements`, x: 70, y: 62, color: `#16a34a`, html: `Des arcs qui relient des lignes sans angle vif.`, why: `La tangente est perpendiculaire au rayon au point de contact. Le centre du raccordement est le point situé à la distance r des deux lignes : l'intersection de deux lieux géométriques.` },
        { id: `app`, label: `Applications`, x: 50, y: 90, color: `#0ea5e9`, html: `Architecture, mécanique, design, graphisme, CAO.`, why: `De la rosace gothique (arcs tracés au compas) aux routes (courbes de raccordement) en passant par les pièces mécaniques aux arêtes arrondies, tout part de ces constructions.` }
      ],
      edges: [
        [`eucl`, `asse`, `engendre`], [`eucl`, `bis`, `engendre`], [`eucl`, `tal`, `utilise`], [`asse`, `pol`, `sert à`], [`bis`, `pol`, `double les côtés`],
        [`tal`, `pol`, `généralise`], [`asse`, `tan`, `perpendiculaires`], [`pol`, `app`, `pour`], [`tan`, `app`, `pour`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : polygones et raccordements`,
      questions: [
        { type: `mc`, q: `Quelle est la longueur du côté d'un hexagone régulier inscrit dans un cercle de rayon 4 cm ?`, options: [`2 cm`, `4 cm`, `8 cm`], answer: 1, explain: `Dans l'hexagone régulier, le côté est égal au rayon : l = r = 4 cm.` },
        { type: `mc`, q: `Où se trouve le centre d'un arc de raccordement entre deux droites sécantes ?`, options: [`Au point où les deux droites se coupent`, `À l'intersection des parallèles aux deux droites, à la distance r`, `Au milieu entre les deux droites`], answer: 1, explain: `Le centre doit être à la distance r des deux droites : c'est l'intersection des deux parallèles à la distance r.` },
        { type: `tf`, q: `Une tangente à un cercle est perpendiculaire au rayon au point de tangence.`, answer: true, explain: `C'est la propriété fondamentale des tangentes, à la base des raccordements.` },
        { type: `num`, q: `Combien de degrés mesure l'angle au centre d'un octogone régulier ?`, answer: 45, tol: 0, unit: `°`, explain: `360° : 8 = 45°.` }
      ]
    }
  ],
  glossary: [
    { t: `Médiatrice d'un segment`, d: `Droite perpendiculaire au segment en son milieu ; lieu des points équidistants des extrémités.` },
    { t: `Bissectrice`, d: `Demi-droite qui partage un angle en deux angles égaux.` },
    { t: `Perpendiculaire`, d: `Droite qui forme un angle de 90° avec une autre.` },
    { t: `Parallèles`, d: `Droites d'un même plan qui ne se coupent jamais.` },
    { t: `Polygone régulier`, d: `Polygone dont tous les côtés et tous les angles sont égaux ; il est inscriptible dans un cercle.` },
    { t: `Tangente`, d: `Droite qui touche un cercle en un seul point, perpendiculaire au rayon.` },
    { t: `Raccordement`, d: `Arc de cercle qui relie sans angle vif deux lignes, tangent à chacune d'elles.` },
    { t: `Lieu géométrique`, d: `Ensemble de tous les points qui ont une même propriété.` },
    { t: `Nombre d'or`, d: `Rapport φ = (1+√5)/2 ≈ 1,618, lié au pentagone régulier.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Pour construire la médiatrice de [AB], l'écartement du compas doit être…`, options: [`inférieur à la moitié de AB`, `supérieur à la moitié de AB`, `exactement AB`], answer: 1, explain: `S'il était inférieur ou égal à la moitié, les arcs ne se couperaient pas (ou se toucheraient seulement) : il faut plus de la moitié.` },
      { type: `tf`, q: `La médiatrice d'un segment passe par son milieu.`, answer: true, explain: `Elle est perpendiculaire au segment justement en son milieu M.` },
      { type: `num`, q: `Combien mesure chaque angle intérieur d'un hexagone régulier ?`, answer: 120, tol: 0, unit: `°`, explain: `Somme des angles intérieurs (6−2)·180° = 720° ; 720° : 6 = 120°.` },
      { type: `mc`, q: `Avec l'équerre à 30°/60° et l'équerre à 45° placées ensemble, on peut obtenir un angle de…`, options: [`15°`, `20°`, `25°`], answer: 0, explain: `45° − 30° = 15° ; on obtient aussi 75° (45° + 30°).` },
      { type: `num`, q: `Dans un raccordement de rayon r = 3 cm entre deux droites perpendiculaires, à quelle distance du sommet (mesurée le long de chaque droite) se trouvent les points de tangence ?`, answer: 3, tol: 0, unit: `cm`, explain: `Le centre est à 3 cm de chaque droite ; les points de tangence sont à 3 cm du sommet le long de chaque droite (le carré de côté r).` },
      { type: `order`, q: `Mets dans l'ordre les étapes de construction de la bissectrice d'un angle.`, items: [`Arc de centre le sommet : il coupe les côtés en A et B`, `Arc de centre A`, `Même rayon, arc de centre B : intersection E`, `Trace la demi-droite du sommet à E`], explain: `D'abord les points sur les côtés, puis deux arcs égaux qui se coupent, enfin la demi-droite.` },
      { type: `text`, q: `Comment s'appelle le théorème utilisé pour partager un segment en parties égales avec des parallèles ?`, answer: [`thalès`, `thales`, `théorème de thalès`, `theoreme de thales`, `de thalès`], explain: `Le théorème de Thalès : un faisceau de droites parallèles détermine des segments proportionnels sur les sécantes.` },
      { type: `mc`, q: `Quel polygone régulier a son côté égal au rayon du cercle circonscrit ?`, options: [`Carré`, `Pentagone`, `Hexagone`], answer: 2, explain: `L'angle au centre vaut 60° et le triangle formé par deux rayons et un côté est équilatéral.` },
      { type: `tf`, q: `Le point de tangence d'un raccordement se trouve sur la perpendiculaire à la droite menée depuis le centre de l'arc.`, answer: true, explain: `Le rayon au point de tangence est perpendiculaire à la tangente, donc le pied de la perpendiculaire issue du centre est le point de tangence.` },
      { type: `mc`, q: `Quel crayon utilise-t-on pour les traits de construction ?`, options: [`Dur (H) et léger`, `Tendre (B) et très appuyé`, `Feutre`], answer: 0, explain: `Les traits de construction doivent être fins ; le dessin terminé est repassé d'un trait plus appuyé.` }
    ]
  }
});
