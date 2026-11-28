TOPIC('fr', {
  id: "l2-mat-piano-cartesiano-retta",
  title: "Repère cartésien et droite",
  intro: "Comment le GPS sait-il combien de kilomètres il te reste à parcourir, ou une carte peut-elle t'indiquer un endroit avec deux nombres ? Comment un jeu vidéo sait-il où se trouve ton personnage ? Derrière tout cela, il y a une idée géniale du XVIIe siècle : <b>décrire les points par des nombres et les figures par des équations</b>. Dans cette leçon, nous utilisons le <b>repère cartésien</b> pour calculer des distances et des milieux, et nous découvrons l'<b>équation de droite</b>, ses éléments (coefficient directeur et ordonnée à l'origine) et à quelle condition deux droites sont <b>parallèles</b> ou <b>perpendiculaires</b>.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Le repère cartésien",
      html: `<p>Un <b>repère orthonormé</b> est formé de deux droites perpendiculaires, les <b>axes</b> : l'<b>axe des abscisses</b> (horizontal, axe x) et l'<b>axe des ordonnées</b> (vertical, axe y), qui se coupent à l'<b>origine</b> O(0, 0), avec la même unité sur les deux. Chaque point P du plan est repéré par un <b>couple</b> (x, y) : l'<b>abscisse</b> x est la distance (avec son signe) à l'axe y, l'<b>ordonnée</b> y la distance à l'axe x. Les axes partagent le plan en quatre <b>quadrants</b> : I (x &gt; 0, y &gt; 0), II (x &lt; 0, y &gt; 0), III (x &lt; 0, y &lt; 0), IV (x &gt; 0, y &lt; 0).</p>
<p>Quelques faits utiles : les points de l'axe x ont y = 0 ; ceux de l'axe y ont x = 0. Le <b>symétrique</b> de P(a, b) par rapport à l'axe x est (a, −b), par rapport à l'axe y c'est (−a, b), par rapport à l'origine c'est (−a, −b).</p>
<p>Le pas essentiel est le suivant : <b>une figure géométrique devient un ensemble de points dont les coordonnées vérifient une équation</b>. La géométrie se traduit en algèbre, et inversement : c'est la <b>géométrie analytique</b>.</p>`
    },
    {
      type: "svg",
      title: "Distance et milieu",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="250" x2="400" y2="250" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="20" x2="60" y2="280" stroke="#475569" stroke-width="2"/>
<line x1="110" y1="200" x2="310" y2="50" stroke="#ea580c" stroke-width="4"/>
<line x1="110" y1="200" x2="310" y2="200" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 5"/>
<line x1="310" y1="200" x2="310" y2="50" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 5"/>
<circle cx="110" cy="200" r="7" fill="#16a34a"/>
<circle cx="310" cy="50" r="7" fill="#16a34a"/>
<circle cx="210" cy="125" r="7" fill="#dc2626"/>
<text x="90" y="222" font-size="16" fill="#166534" font-weight="bold">A(1, 1)</text>
<text x="320" y="55" font-size="16" fill="#166534" font-weight="bold">B(5, 4)</text>
<text x="222" y="118" font-size="16" fill="#991b1b" font-weight="bold">M(3 ; 2,5)</text>
<text x="210" y="222" font-size="16" fill="#1d4ed8" text-anchor="middle">Δx = 4</text>
<text x="322" y="130" font-size="16" fill="#1d4ed8">Δy = 3</text>
<text x="150" y="130" font-size="16" fill="#9a3412" font-weight="bold" text-anchor="end">AB = 5</text>
<text x="420" y="90" font-size="16" fill="#334155">AB = √(Δx² + Δy²)</text>
<text x="420" y="120" font-size="16" fill="#334155">= √(16 + 9) = 5</text>
<text x="420" y="170" font-size="16" fill="#334155">M = ((x₁+x₂)/2 ; (y₁+y₂)/2)</text>
</svg>`,
      caption: "La distance entre deux points est l'hypoténuse d'un triangle rectangle construit avec les différences des coordonnées (théorème de Pythagore)."
    },
    {
      type: "remember",
      title: "Distance et milieu",
      html: `<ul>
<li><b>Distance</b> entre A(x₁, y₁) et B(x₂, y₂) : <b>AB = √[(x₂ − x₁)² + (y₂ − y₁)²]</b>. Si les points ont la même ordonnée (segment horizontal), la distance vaut |x₂ − x₁| ; s'ils ont la même abscisse, elle vaut |y₂ − y₁|.</li>
<li><b>Milieu</b> de [AB] : <b>M = ( (x₁ + x₂)/2 ; (y₁ + y₂)/2 )</b> : la moyenne des abscisses et la moyenne des ordonnées.</li>
</ul>
<p>Exemple : A(1, 2) et B(7, 10) : AB = √(36 + 64) = √100 = <b>10</b> ; M = (4, 6).</p>`
    },
    {
      type: "widget",
      title: "Pythagore en action",
      widget: "pythagoras",
      options: {},
      caption: "Place les curseurs sur 3 et 4 : l'hypoténuse vaut 5, comme la distance entre A(1,1) et B(5,4). La formule de la distance, c'est le théorème de Pythagore appliqué à Δx et Δy."
    },
    {
      type: "text",
      title: "Équation de droite",
      html: `<p>Toute droite du plan a une équation du premier degré en x et y. La forme <b>cartésienne</b> est <b>ax + by + c = 0</b> (a et b non tous les deux nuls). Si b ≠ 0, on obtient l'<b>équation réduite</b> :</p>
<p style="text-align:center"><b>y = m x + p</b></p>
<ul>
<li><b>m</b> est le <b>coefficient directeur</b> (la pente) : de combien y monte (ou descend) quand x augmente de 1.</li>
<li><b>p</b> est l'<b>ordonnée à l'origine</b> : l'ordonnée du point où la droite coupe l'axe y, c'est-à-dire (0, p).</li>
</ul>
<p>Cas particuliers :</p>
<ul>
<li>Droite <b>horizontale</b> (parallèle à l'axe x) : <b>y = k</b> (m = 0). L'axe x a pour équation y = 0.</li>
<li>Droite <b>verticale</b> (parallèle à l'axe y) : <b>x = k</b> : elle <b>n'a pas</b> de coefficient directeur (on ne peut pas l'écrire sous forme réduite). L'axe y a pour équation x = 0.</li>
<li>Droite passant par l'origine : <b>y = mx</b> (p = 0), qui traduit une <b>proportionnalité</b>.</li>
<li>Bissectrices des quadrants : y = x (I et III) et y = −x (II et IV).</li>
</ul>
<p>Pour tracer une droite, <b>deux points</b> suffisent : en général ses intersections avec les axes (en posant x = 0, puis y = 0). Un point appartient à la droite si et seulement si ses coordonnées <b>vérifient l'équation</b> : le point (2, 5) est sur y = 3x − 1 car 3·2 − 1 = 5.</p>`
    },
    {
      type: "text",
      title: "Trouver la droite : par deux points, par un point",
      html: `<p>Le <b>coefficient directeur</b> de la droite passant par A(x₁, y₁) et B(x₂, y₂), avec x₁ ≠ x₂, est le rapport entre la variation de y et celle de x :</p>
<p style="text-align:center"><b>m = (y₂ − y₁)/(x₂ − x₁)</b></p>
<p>Si m &gt; 0, la droite <b>monte</b> (de gauche à droite) ; si m &lt; 0, elle <b>descend</b> ; si m = 0, elle est horizontale ; plus |m| est grand, plus la droite est raide.</p>
<ul>
<li><b>Droite passant par P(x₀, y₀) de coefficient directeur m</b> : <b>y − y₀ = m(x − x₀)</b>.</li>
<li><b>Droite passant par deux points</b> : on calcule m, puis on utilise la formule précédente (ou bien <b>(y − y₁)/(y₂ − y₁) = (x − x₁)/(x₂ − x₁)</b>).</li>
</ul>
<p><b>Exemple</b> : droite passant par A(1, 2) et B(3, 8). m = (8 − 2)/(3 − 1) = 3. Droite passant par A : y − 2 = 3(x − 1) → <b>y = 3x − 1</b>. Vérification avec B : 3·3 − 1 = 8 ✔️.</p>
<p><b>Intersection de deux droites</b> : on résout le <b>système</b> formé par leurs équations (leçon précédente !). Ex. y = x + 1 et y = −2x + 7 : x + 1 = −2x + 7 → x = 2, y = 3 : elles se coupent en (2, 3). S'il n'y a pas de solution, les droites sont parallèles ; s'il y en a une infinité, elles sont confondues.</p>`
    },
    {
      type: "example",
      title: "Exemple concret : le tarif du taxi",
      html: `<p>Un taxi applique une prise en charge de 4 €, puis 1,20 € par kilomètre. Le prix y pour x km est <b>y = 1,2x + 4</b> : une droite avec <b>m = 1,2</b> (€ par km : la vitesse à laquelle le prix augmente) et <b>p = 4</b> (la prise en charge, le prix pour une distance nulle). Pour 15 km : y = 18 + 4 = 22 €. Combien de km avec 40 € ? 1,2x = 36 → x = 30 km.</p>
<p>Un autre taxi a une prise en charge de 2 € et 1,40 €/km : y = 1,4x + 2. Pour quelle distance coûtent-ils la même chose ? Intersection : 1,2x + 4 = 1,4x + 2 → 2 = 0,2x → x = 10 km (prix 16 €). En dessous de 10 km, le second est plus avantageux ; au-dessus, c'est le premier.</p>`
    },
    {
      type: "example",
      title: "Exemple concret : le drone et la station de recharge",
      html: `<p>Sur une carte graduée en mètres, un drone se trouve en D(2, 3) et la station de recharge en S(14, 8). Quelle distance doit-il parcourir en ligne droite ? Et où se trouve-t-il à mi-chemin ?</p>
<ul>
<li>Δx = 14 − 2 = 12 et Δy = 8 − 3 = 5.</li>
<li>Distance : √(12² + 5²) = √169 = <b>13 m</b> (un triplet pythagoricien : 5-12-13).</li>
<li>Milieu : ((2 + 14)/2 ; (3 + 8)/2) = <b>(8 ; 5,5)</b>.</li>
<li>La trajectoire est sur la droite de coefficient directeur m = 5/12 : y − 3 = (5/12)(x − 2).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : distance et droite",
      questions: [
        { type: "num", q: "Calcule la distance entre O(0, 0) et P(6, 8).", answer: 10, explain: "√(36 + 64) = √100 = 10." },
        { type: "num", q: "Quel est le coefficient directeur de la droite passant par A(0, 1) et B(2, 7) ?", answer: 3, explain: "m = (7 − 1)/(2 − 0) = 3." },
        { type: "mc", q: "Quelle est l'équation de la droite verticale passant par (4, 9) ?", options: ["y = 9", "x = 4", "y = 4x"], answer: 1, explain: "Une droite verticale a une équation de la forme x = constante : x = 4." }
      ]
    },
    {
      type: "text",
      title: "Droites parallèles et perpendiculaires",
      html: `<p>Soient deux droites non verticales r : y = mx + p et r′ : y = m′x + p′. Elles sont :</p>
<ul>
<li><b>parallèles</b> (r ∥ r′) si et seulement si elles ont le <b>même coefficient directeur</b> : <b>m = m′</b> (si de plus p = p′, elles sont confondues) ;</li>
<li><b>perpendiculaires</b> (r ⊥ r′) si et seulement si <b>m · m′ = −1</b>, c'est-à-dire <b>m′ = −1/m</b> (coefficients directeurs « opposés des inverses »).</li>
</ul>
<p>Si une droite est horizontale (m = 0), ses perpendiculaires sont les droites verticales x = k.</p>
<p><b>Exemple 1.</b> Droite passant par P(0, 5) parallèle à y = 2x + 1 : même m = 2 → <b>y = 2x + 5</b>.</p>
<p><b>Exemple 2.</b> Droite passant par P(4, 1) perpendiculaire à y = 2x + 1 : m′ = −1/2, y − 1 = −½(x − 4) → <b>y = −x/2 + 3</b>.</p>
<p><b>Exemple 3 : médiatrice d'un segment</b>. La médiatrice de [AB] est la droite perpendiculaire à (AB) passant par son milieu ; tous ses points sont à égale distance de A et de B. Pour A(1, 1) et B(5, 4) : m<sub>AB</sub> = 3/4 ; M(3 ; 2,5) ; médiatrice de coefficient directeur −4/3 : y − 2,5 = −(4/3)(x − 3) → <b>y = −(4/3)x + 6,5</b>.</p>
<p><b>Distance d'un point à une droite</b> (formule utile) : la distance de P(x₀, y₀) à la droite ax + by + c = 0 est <b>d = |ax₀ + by₀ + c| / √(a² + b²)</b>. Ex. : distance de O à la droite 3x + 4y − 10 = 0 : |−10|/5 = <b>2</b>.</p>`
    },
    {
      type: "svg",
      title: "Parallèles et perpendiculaires",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="20" y1="150" x2="580" y2="150" stroke="#cbd5e1" stroke-width="1"/>
<line x1="300" y1="10" x2="300" y2="290" stroke="#cbd5e1" stroke-width="1"/>
<line x1="60" y1="260" x2="340" y2="40" stroke="#2563eb" stroke-width="4"/>
<line x1="120" y1="285" x2="400" y2="65" stroke="#2563eb" stroke-width="4" stroke-dasharray="10 6"/>
<line x1="240" y1="30" x2="470" y2="270" stroke="#ea580c" stroke-width="4" transform="rotate(0)"/>
<text x="30" y="30" font-size="16" fill="#1d4ed8" font-weight="bold">r ∥ r′ : même pente (m = m′)</text>
<text x="330" y="288" font-size="16" fill="#9a3412" font-weight="bold">s ⊥ r : m · m′ = −1</text>
<text x="400" y="45" font-size="14" fill="#334155">(trait plein et pointillés :</text>
<text x="400" y="62" font-size="14" fill="#334155">parallèles)</text>
</svg>`,
      caption: "Deux droites de même pente sont parallèles ; si le produit des pentes vaut −1, elles se coupent à angle droit."
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Descartes et la mouche",
      html: `<p>Le repère cartésien doit son nom à <b>René Descartes</b>, en latin <i>Cartesius</i>, qui publia en 1637 <i>La Géométrie</i>, en appendice au <i>Discours de la méthode</i>. À la même époque, le Français <b>Pierre de Fermat</b> développait des idées semblables. Une anecdote, dont on n'a aucune preuve certaine, raconte que Descartes eut l'idée en regardant une mouche au plafond de sa chambre : pour dire où elle se trouvait, il suffisait d'indiquer sa distance à deux murs. Vrai ou pas, c'est exactement ainsi que fonctionnent les coordonnées !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Des coordonnées partout",
      html: `<p>Les <b>coordonnées géographiques</b> (latitude et longitude) sont un système de repérage sur la sphère ; le <b>GPS</b> calcule ta position à partir de ta distance à plusieurs satellites, en utilisant la même idée de distance entre points dans un espace muni de coordonnées (en 3D, la formule a un terme de plus, Δz²). Chaque pixel de l'écran a lui aussi des coordonnées (x, y), et un jeu vidéo calcule distances et collisions avec les formules de cette leçon.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la droite",
      intro: "Le coefficient directeur et la perpendicularité ne sont pas des formules à apprendre par cœur : voici trois façons de les voir.",
      tabs: [
        {
          label: "⛰️ La pente d'une route",
          html: `<p>Le <b>coefficient directeur</b> est la <b>pente</b>, comme sur les panneaux routiers : « 10 % » signifie que sur 100 m à l'horizontale on monte de 10 m, c'est-à-dire m = 0,10. Un escalier en colimaçon n'a pas la même pente qu'une rampe pour fauteuils roulants (environ 8 %, soit m ≈ 0,08). Montée = m positif, descente = m négatif, route plate = m = 0, paroi verticale = pas de m (on ne peut pas diviser par Δx = 0).</p>`
        },
        {
          label: "🔄 Rotation de 90°",
          html: `<p>Une droite de pente m a pour direction (1, m) : à chaque pas de 1 vers la droite, on monte de m. En faisant tourner cette direction de <b>90° dans le sens inverse des aiguilles d'une montre</b>, le vecteur (a, b) devient (−b, a) : (1, m) → (−m, 1), c'est-à-dire la direction d'une droite de pente 1/(−m) = <b>−1/m</b>. Voilà pourquoi, pour des perpendiculaires, m · m′ = −1 : c'est l'effet de la rotation d'un angle droit.</p>`,
          widget: "numberLine",
          options: { min: -4, max: 4, step: 1, marks: [2, -2] }
        },
        {
          label: "📋 Tableau de valeurs",
          html: `<p>Pour tracer y = 2x − 1, construis un tableau : x = −1, 0, 1, 2 → y = −3, −1, 1, 3. Tu remarques que chaque fois que x augmente de 1, y augmente de <b>2</b> : cette différence constante, c'est justement m. C'est pourquoi la droite représente les situations à croissance <b>constante</b> (salaire horaire, factures avec une part fixe et une part variable, distance parcourue à vitesse constante).</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="20" y1="150" x2="580" y2="150" stroke="#475569" stroke-width="2"/><line x1="300" y1="10" x2="300" y2="290" stroke="#475569" stroke-width="2"/><line x1="140" y1="280" x2="440" y2="20" stroke="#2563eb" stroke-width="4"/><circle cx="300" cy="200" r="7" fill="#16a34a"/><text x="312" y="222" font-size="16" fill="#166534" font-weight="bold">(0, −1) : p</text><text x="340" y="120" font-size="16" fill="#1d4ed8" font-weight="bold">y = 2x − 1  (m = 2)</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de la géométrie analytique de la droite",
      nodes: [
        { id: "piano", label: "Repère cartésien", x: 50, y: 6, color: "#6366f1", html: "Deux axes perpendiculaires ; chaque point est un couple (x, y).", why: "Descartes et Fermat (XVIIe siècle) réunissent géométrie et algèbre : on étudie les figures avec des équations." },
        { id: "dist", label: "Distance", x: 18, y: 28, color: "#16a34a", html: "AB = √(Δx² + Δy²).", why: "C'est le théorème de Pythagore dans le triangle rectangle de côtés Δx et Δy : elle découle donc de la géométrie euclidienne." },
        { id: "med", label: "Milieu", x: 82, y: 28, color: "#f59e0b", html: "Moyennes des coordonnées.", why: "Le milieu est à mi-chemin à l'horizontale et à la verticale : chaque coordonnée est la moyenne des deux." },
        { id: "retta", label: "Équation de droite", x: 50, y: 50, color: "#a855f7", html: "ax + by + c = 0, ou y = mx + p.", why: "Des points alignés ont une variation de y proportionnelle à la variation de x : d'où une équation du premier degré." },
        { id: "m", label: "Coefficient directeur", x: 18, y: 75, color: "#ef4444", html: "m = Δy/Δx : la pente.", why: "Les triangles rectangles semblables construits sur la droite ont le même rapport côté vertical/côté horizontal : c'est pourquoi m est constant (Thalès et similitude)." },
        { id: "par", label: "Parallèles et perpendiculaires", x: 82, y: 75, color: "#0ea5e9", html: "m = m′ : parallèles ; m·m′ = −1 : perpendiculaires.", why: "Parallèles = même inclinaison. Perpendiculaires = direction tournée de 90°, ce qui transforme m en −1/m." },
        { id: "sist", label: "Systèmes et intersections", x: 50, y: 92, color: "#14b8a6", html: "L'intersection de deux droites s'obtient en résolvant un système linéaire.", why: "Un point est sur les deux droites seulement si ses coordonnées vérifient les deux équations." }
      ],
      edges: [
        ["piano", "dist", "mesure avec"],
        ["piano", "med", "calcule"],
        ["piano", "retta", "contient"],
        ["retta", "m", "a un"],
        ["m", "par", "compare"],
        ["retta", "sist", "se coupent grâce à"],
        ["par", "sist", "cas sans solution"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : parallèles et perpendiculaires",
      questions: [
        { type: "mc", q: "La droite perpendiculaire à y = 4x − 3 a pour coefficient directeur…", options: ["4", "−4", "−1/4"], answer: 2, explain: "m·m′ = −1 → m′ = −1/4." },
        { type: "mc", q: "La droite passant par (0, 1) et parallèle à y = 3x + 5 est…", options: ["y = 3x + 1", "y = −3x + 1", "y = x/3 + 1"], answer: 0, explain: "Même m = 3 et passage par (0, 1) : p = 1." },
        { type: "tf", q: "Les droites y = 2x et y = −x/2 sont perpendiculaires.", answer: true, explain: "2 · (−1/2) = −1." }
      ]
    }
  ],
  glossary: [
    { t: "Abscisse", d: "La coordonnée x d'un point : sa distance, avec son signe, à l'axe y." },
    { t: "Ordonnée", d: "La coordonnée y d'un point : sa distance, avec son signe, à l'axe x." },
    { t: "Quadrant", d: "Chacune des quatre régions en lesquelles les axes partagent le plan." },
    { t: "Milieu", d: "Le point d'un segment à égale distance des extrémités : ses coordonnées sont les moyennes de celles des extrémités." },
    { t: "Coefficient directeur", d: "Le nombre m de la droite y = mx + p : il indique la pente." },
    { t: "Ordonnée à l'origine", d: "Le terme p de y = mx + p : ordonnée du point où la droite coupe l'axe y." },
    { t: "Droites parallèles", d: "Droites non verticales qui ont le même coefficient directeur." },
    { t: "Droites perpendiculaires", d: "Droites dont le produit des coefficients directeurs vaut −1." },
    { t: "Médiatrice d'un segment", d: "Droite perpendiculaire au segment en son milieu : ensemble des points à égale distance des extrémités." },
    { t: "Équation cartésienne", d: "L'équation de la droite écrite sous la forme ax + by + c = 0." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Calcule la distance entre A(−1, 2) et B(2, 6).", answer: 5, explain: "√(3² + 4²) = 5." },
      { type: "mc", q: "Le milieu de A(2, −4) et B(8, 6) est…", options: ["(5, 1)", "(10, 2)", "(3, 5)"], answer: 0, explain: "((2 + 8)/2 ; (−4 + 6)/2) = (5, 1)." },
      { type: "num", q: "Coefficient directeur de la droite passant par A(1, 5) et B(4, −1).", answer: -2, explain: "m = (−1 − 5)/(4 − 1) = −2." },
      { type: "mc", q: "La droite passant par (2, 3) de coefficient directeur m = 2 est…", options: ["y = 2x − 1", "y = 2x + 3", "y = −2x + 7"], answer: 0, explain: "y − 3 = 2(x − 2) → y = 2x − 1." },
      { type: "mc", q: "Quelle droite est parallèle à 2x + y − 3 = 0 ?", options: ["y = −2x + 5", "y = 2x + 5", "y = x/2 + 1"], answer: 0, explain: "2x + y − 3 = 0 → y = −2x + 3 : m = −2, comme y = −2x + 5." },
      { type: "mc", q: "Quelle droite est perpendiculaire à y = 3x + 1 ?", options: ["y = 3x − 5", "y = −x/3 + 2", "y = −3x"], answer: 1, explain: "Il faut m′ = −1/3." },
      { type: "num", q: "Où se coupent y = x + 1 et y = −2x + 7 ? Donne l'abscisse.", answer: 2, explain: "x + 1 = −2x + 7 → x = 2 (le point est (2, 3))." },
      { type: "tf", q: "La droite x = 5 a pour coefficient directeur 0.", answer: false, explain: "x = 5 est verticale : elle n'a pas de coefficient directeur. Celle de coefficient directeur 0 est horizontale, y = k." },
      { type: "order", q: "Remets dans l'ordre les étapes pour écrire l'équation de la droite passant par deux points.", items: ["Calculer m = (y₂ − y₁)/(x₂ − x₁)", "Choisir l'un des deux points", "Écrire y − y₁ = m(x − x₁)", "Isoler y et simplifier", "Vérifier avec l'autre point"], explain: "D'abord la pente, puis la formule avec un point, et enfin la vérification." },
      { type: "text", q: "Comment s'appelle le philosophe et mathématicien français (nom latinisé Cartesius) à qui l'on doit le repère cartésien ? (nom de famille)", answer: ["descartes", "rené descartes", "rene descartes", "cartesius"], explain: "René Descartes (Cartesius), La Géométrie, 1637." }
    ]
  }
});
