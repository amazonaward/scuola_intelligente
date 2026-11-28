TOPIC('fr', {
  id: "l2-mat-sistemi-lineari",
  title: "Systèmes linéaires",
  intro: "Un cinéma a vendu 120 billets, les uns à plein tarif, les autres à tarif réduit, pour une recette de 840 € : combien en a-t-il vendu de chaque sorte ? Ici il y a <b>deux</b> inconnues et une seule équation ne suffit pas : il faut <b>deux conditions à la fois</b>. Un <b>système linéaire</b>, c'est exactement cela : plusieurs équations du premier degré à satisfaire en même temps. Apprenons les quatre méthodes classiques (<b>substitution, comparaison, combinaison, Cramer</b>), voyons ce qu'elles signifient dans le plan et comment les utiliser pour résoudre des problèmes concrets.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce qu'un système linéaire ?",
      html: `<p>Une équation linéaire à deux inconnues, comme <b>x + y = 5</b>, a <b>une infinité de solutions</b> (les couples (0,5), (1,4), (2,3)…). Mais si l'on exige qu'on ait <i>aussi</i> <b>x − y = 1</b>, un seul couple vérifie les deux : (3, 2). Réunir plusieurs équations à vérifier en même temps, c'est écrire un <b>système</b>, avec une accolade à gauche :</p>
<p style="text-align:center"><b>{ x + y = 5 ; x − y = 1 }</b></p>
<p>Une <b>solution</b> du système est un couple (x, y) qui rend vraies <b>toutes</b> les équations. On dit que le système est <b>linéaire</b> parce que toutes les équations sont du premier degré, et <b>2 × 2</b> s'il a deux équations et deux inconnues.</p>
<p>La <b>forme réduite</b> (ou canonique) est :</p>
<p style="text-align:center"><b>{ a x + b y = c ; a′ x + b′ y = c′ }</b></p>
<p>Avant de résoudre, on met les équations sous cette forme : les inconnues à gauche, les termes constants à droite.</p>
<p>Un système peut être :</p>
<ul>
<li><b>déterminé</b> : il a <b>une seule</b> solution ;</li>
<li><b>impossible</b> (ou incompatible) : il n'en a aucune ;</li>
<li><b>indéterminé</b> : il en a <b>une infinité</b>.</li>
</ul>
<p>Deux systèmes qui ont les mêmes solutions sont dits <b>équivalents</b> : les méthodes qui suivent transforment le système en un système équivalent plus simple.</p>`
    },
    {
      type: "svg",
      title: "Ce que cela signifie géométriquement",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="20" y1="200" x2="580" y2="200" stroke="#475569" stroke-width="2"/>
<line x1="200" y1="10" x2="200" y2="290" stroke="#475569" stroke-width="2"/>
<line x1="200" y1="25" x2="325" y2="275" stroke="#2563eb" stroke-width="4"/>
<line x1="175" y1="275" x2="350" y2="100" stroke="#ea580c" stroke-width="4"/>
<circle cx="275" cy="175" r="8" fill="#16a34a"/>
<text x="290" y="160" font-size="16" fill="#166534" font-weight="bold">(3, 1)</text>
<text x="210" y="30" font-size="16" fill="#1d4ed8" font-weight="bold">2x + y = 7</text>
<text x="360" y="105" font-size="16" fill="#9a3412" font-weight="bold">x − y = 2</text>
<text x="420" y="200" font-size="16" fill="#334155" dy="-8">x</text>
<text x="210" y="22" font-size="16" fill="#334155" dx="-30">y</text>
<text x="420" y="260" font-size="16" fill="#334155">Chaque équation est une droite ;</text>
<text x="420" y="280" font-size="16" fill="#334155">la solution est leur intersection.</text>
</svg>`,
      caption: "Chaque équation linéaire en x et y est une droite du plan. Le système { 2x + y = 7 ; x − y = 2 } a pour solution le point où les deux droites se coupent."
    },
    {
      type: "remember",
      title: "Les trois cas et les droites",
      html: `<ul>
<li><b>Déterminé</b> : les droites sont <b>sécantes</b> (elles se coupent en un seul point).</li>
<li><b>Impossible</b> : les droites sont <b>parallèles distinctes</b> (elles ne se coupent jamais).</li>
<li><b>Indéterminé</b> : les droites sont <b>confondues</b> (elles ont tous leurs points en commun).</li>
</ul>
<p>Exemples : { x + y = 3 ; 2x + 2y = 8 } est impossible (la seconde équation s'écrit x + y = 4, parallèle à la première) ; { x + y = 3 ; 2x + 2y = 6 } est indéterminé (la seconde est la première multipliée par 2).</p>`
    },
    {
      type: "text",
      title: "Méthode par substitution",
      html: `<p>L'idée : <b>exprimer</b> une inconnue à partir d'une équation et la <b>substituer</b> dans l'autre, qui n'a plus alors qu'une seule inconnue.</p>
<ol>
<li>Choisis l'équation et l'inconnue les plus pratiques (celle dont le coefficient est 1 ou −1).</li>
<li>Exprime cette inconnue en fonction de l'autre.</li>
<li>Remplace-la dans l'<b>autre</b> équation et résous l'équation du premier degré obtenue.</li>
<li>Reporte la valeur trouvée dans l'expression de l'étape 2 pour trouver la seconde inconnue.</li>
<li>Vérifie dans les deux équations de départ.</li>
</ol>
<p><b>Exemple</b> : { x − 2y = 1 ; 3x − y = 8 }.</p>
<ul>
<li>De la première : x = 2y + 1.</li>
<li>Dans la seconde : 3(2y + 1) − y = 8 → 6y + 3 − y = 8 → 5y = 5 → y = 1.</li>
<li>x = 2·1 + 1 = 3. Solution <b>(3, 1)</b>.</li>
<li>Vérification : 3 − 2 = 1 ✔️ ; 9 − 1 = 8 ✔️.</li>
</ul>
<p>Si tu arrives à une égalité fausse (par exemple 0 = 5), le système est <b>impossible</b> ; si tu arrives à une égalité toujours vraie (0 = 0), il est <b>indéterminé</b>.</p>`
    },
    {
      type: "text",
      title: "Méthode par comparaison",
      html: `<p>Si <b>la même inconnue</b> est déjà isolée (ou facile à isoler) dans les <b>deux</b> équations, on <b>égale</b> les deux expressions : deux quantités égales à une même troisième sont égales entre elles.</p>
<p><b>Exemple</b> : { y = 2x − 1 ; y = x + 2 }. Les deux expressions de y doivent être égales : 2x − 1 = x + 2 → x = 3, puis y = 3 + 2 = 5. Solution <b>(3, 5)</b>.</p>
<p>La comparaison est en réalité une substitution « sans effort » : elle est pratique quand le système est déjà écrit sous la forme y = mx + p (équations réduites de droites).</p>`
    },
    {
      type: "text",
      title: "Méthode par combinaison (ou par addition)",
      html: `<p>L'idée : <b>additionner ou soustraire</b> les deux équations membre à membre pour faire <b>disparaître</b> une inconnue. Cela marche parce qu'en additionnant des égalités on obtient une égalité.</p>
<ol>
<li>Multiplie les équations par des nombres bien choisis pour qu'une des inconnues ait des <b>coefficients opposés</b> (on additionne) ou <b>égaux</b> (on soustrait).</li>
<li>Additionne ou soustrais membre à membre : il reste une équation à une seule inconnue.</li>
<li>Résous-la, puis recommence pour l'autre inconnue (ou bien substitue).</li>
</ol>
<p><b>Exemple</b> : { 3x + 2y = 12 ; 2x − 3y = −5 }.</p>
<ul>
<li>Pour éliminer y : je multiplie la première par 3 et la seconde par 2 → { 9x + 6y = 36 ; 4x − 6y = −10 }.</li>
<li>J'additionne : 13x = 26 → <b>x = 2</b>.</li>
<li>Je remplace dans la première : 6 + 2y = 12 → y = 3. Solution <b>(2, 3)</b>.</li>
<li>Vérification : 6 + 6 = 12 ✔️ ; 4 − 9 = −5 ✔️.</li>
</ul>
<p>C'est la méthode la plus utilisée quand les coefficients ne valent pas 1, et celle d'où viennent les méthodes pour résoudre des systèmes de nombreuses équations.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : les trois méthodes",
      questions: [
        { type: "num", q: "Résous { x + y = 9 ; x − y = 3 } et donne la valeur de x.", answer: 6, explain: "En additionnant : 2x = 12, donc x = 6 (et y = 3)." },
        { type: "mc", q: "En additionnant membre à membre { 2x + 3y = 7 ; 4x − 3y = 5 }, on obtient…", options: ["6x = 12", "6x + 6y = 12", "2x = 2"], answer: 0, explain: "Les y s'annulent (3y − 3y = 0) : 6x = 12." },
        { type: "tf", q: "Si, par substitution, on arrive à 0 = 5, le système est indéterminé.", answer: false, explain: "0 = 5 est faux : le système est impossible. Il est indéterminé si l'on arrive à 0 = 0." }
      ]
    },
    {
      type: "widget",
      title: "Déterminé, impossible ou indéterminé ?",
      widget: "classify",
      options: { groups: ["Déterminé", "Impossible", "Indéterminé"], items: [
        ["x + y = 4 ; x − y = 2", 0],
        ["x + y = 3 ; 2x + 2y = 8", 1],
        ["x + y = 3 ; 2x + 2y = 6", 2],
        ["y = 2x ; y = 2x + 5", 1],
        ["y = 3x − 1 ; 2y = 6x − 2", 2],
        ["2x + y = 5 ; x − y = 1", 0]
      ] },
      caption: "Astuce : regarde si une équation est un multiple de l'autre (même rapport entre les coefficients)."
    },
    {
      type: "text",
      title: "Méthode de Cramer (avec les déterminants)",
      html: `<p>La méthode de Cramer donne la solution par une <b>formule</b>, sans étapes intermédiaires. Pour le système { ax + by = c ; a′x + b′y = c′ }, on définit le <b>déterminant</b> de la matrice des coefficients :</p>
<p style="text-align:center"><b>D = a b′ − a′ b</b></p>
<p>et les déterminants obtenus en remplaçant la colonne de x ou celle de y par la colonne des termes constants :</p>
<p style="text-align:center"><b>Dₓ = c b′ − c′ b &nbsp;&nbsp;&nbsp; D<sub>y</sub> = a c′ − a′ c</b></p>
<ul>
<li>Si <b>D ≠ 0</b> : système <b>déterminé</b>, avec <b>x = Dₓ / D</b> et <b>y = D<sub>y</sub> / D</b>.</li>
<li>Si <b>D = 0</b> et Dₓ ≠ 0 ou D<sub>y</sub> ≠ 0 : système <b>impossible</b>.</li>
<li>Si <b>D = Dₓ = D<sub>y</sub> = 0</b> : système <b>indéterminé</b> (ou avec des équations nulles).</li>
</ul>
<p><b>Exemple</b>, le même que tout à l'heure : { 3x + 2y = 12 ; 2x − 3y = −5 }.</p>
<ul>
<li>D = 3·(−3) − 2·2 = −9 − 4 = −13</li>
<li>Dₓ = 12·(−3) − 2·(−5) = −36 + 10 = −26 → x = −26/−13 = <b>2</b></li>
<li>D<sub>y</sub> = 3·(−5) − 12·2 = −15 − 24 = −39 → y = −39/−13 = <b>3</b></li>
</ul>
<p>Tu obtiens (2, 3), comme par combinaison. Le déterminant D a une signification géométrique : si D = 0, les droites ont la même pente (elles sont parallèles ou confondues).</p>`
    },
    {
      type: "example",
      title: "Exemple concret : les billets de cinéma",
      html: `<p>Un cinéma a vendu 120 billets, les uns à 8 € (plein tarif), les autres à 5 € (tarif réduit), pour une recette de 840 €. Combien de billets de chaque sorte ?</p>
<ul>
<li>Inconnues : x = billets plein tarif, y = billets tarif réduit.</li>
<li>Système : { x + y = 120 ; 8x + 5y = 840 }.</li>
<li>Substitution : y = 120 − x → 8x + 5(120 − x) = 840 → 3x + 600 = 840 → x = 80, y = 40.</li>
<li>Vérification : 80 + 40 = 120 ✔️ ; 640 + 200 = 840 ✔️.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple concret : vitesses et courant",
      html: `<p>Un bateau parcourt 24 km dans le sens du courant en 2 heures, et les mêmes 24 km à contre-courant en 3 heures. Quelles sont la vitesse du bateau en eau calme et celle du courant ?</p>
<ul>
<li>x = vitesse du bateau, y = vitesse du courant (km/h).</li>
<li>Dans le sens du courant : x + y = 24/2 = 12. À contre-courant : x − y = 24/3 = 8.</li>
<li>En additionnant : 2x = 20 → x = 10 km/h ; puis y = 2 km/h.</li>
<li>Vérification : 12 · 2 = 24 ✔️ ; 8 · 3 = 24 ✔️.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Comment résoudre un problème avec un système",
      html: `<ol>
<li><b>Lis</b> l'énoncé et repère les deux grandeurs inconnues ; appelle-les x et y, avec leur unité.</li>
<li><b>Traduis</b> chaque condition de l'énoncé par une équation.</li>
<li><b>Résous</b> avec la méthode la plus pratique.</li>
<li><b>Contrôle</b> que la solution a un sens (pas de nombre de personnes négatif ou fractionnaire, etc.).</li>
<li><b>Vérifie</b> avec l'énoncé et rédige la réponse par une phrase.</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Les Neuf Chapitres",
      html: `<p>Le texte chinois <b>Les Neuf Chapitres sur l'art mathématique</b> (<i>Jiuzhang suanshu</i>), compilé il y a environ deux mille ans, résout des systèmes linéaires à plusieurs inconnues en disposant les coefficients dans un <b>tableau</b> et en faisant disparaître les inconnues l'une après l'autre : c'est en substance la méthode par combinaison qu'en Occident on appellera « élimination de Gauss », du nom du mathématicien allemand Carl Friedrich Gauss (1777–1855), qui l'utilisa et la systématisa bien des siècles plus tard.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Gabriel Cramer",
      html: `<p>La règle qui porte son nom a été publiée par le Suisse <b>Gabriel Cramer</b> (1704–1752) en 1750, dans son livre <i>Introduction à l'analyse des lignes courbes algébriques</i>. Aujourd'hui, les systèmes linéaires se résolvent par ordinateur, et des problèmes à <b>des millions d'inconnues</b> (prévisions météo, simulation de ponts et d'avions, images 3D, moteurs de recherche) se ramènent justement à d'énormes systèmes linéaires.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de voir un système",
      intro: "Le calcul est une façon de faire. Voici trois autres chemins pour comprendre ce qui se passe.",
      tabs: [
        {
          label: "⚖️ La balance",
          html: `<p>Imagine deux balances en équilibre, avec des masses inconnues : chaque équation est une balance. Si l'une indique x + y = 12 et l'autre x − y = 8, en les superposant (en additionnant les plateaux) le y s'annule : deux fois x pèsent 20, donc x = 10. Additionner des équations, c'est « verser » une balance dans l'autre, et la combinaison devient un geste concret.</p>`
        },
        {
          label: "📈 Le graphique",
          html: `<p>Chaque équation est une droite : écris y en fonction de x et trace-la à partir de deux points. La solution est le <b>point d'intersection</b>. Si les droites sont parallèles, elles ne se coupent pas (impossible) ; si elles sont confondues, elles ont tous leurs points en commun (indéterminé). Le graphique donne une estimation visuelle et un contrôle rapide, même si les coordonnées exactes s'obtiennent par les méthodes algébriques.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="20" y1="150" x2="580" y2="150" stroke="#475569" stroke-width="2"/><line x1="300" y1="10" x2="300" y2="290" stroke="#475569" stroke-width="2"/><line x1="60" y1="260" x2="320" y2="40" stroke="#2563eb" stroke-width="4"/><line x1="60" y1="60" x2="320" y2="260" stroke="#ea580c" stroke-width="4"/><circle cx="191" cy="150" r="8" fill="#16a34a"/><text x="330" y="55" font-size="16" fill="#1d4ed8" font-weight="bold">Sécantes : une solution</text><text x="330" y="250" font-size="16" fill="#9a3412" font-weight="bold">Parallèles : aucune</text></svg>`
        },
        {
          label: "🔢 Essais guidés",
          html: `<p>Avec de petits nombres, un <b>tableau d'essais</b> fonctionne aussi : dans le problème du cinéma, s'il y a 60 billets plein tarif, il y a 60 billets réduits et la recette est 480 + 300 = 780 (trop peu) ; avec 80 pleins tarifs et 40 réduits, on arrive à 840. Chaque billet qui passe de réduit à plein tarif augmente la recette de 3 €. Les Égyptiens et les Babyloniens résolvaient ainsi les premières questions de ce type, mais les méthodes algébriques sont plus rapides et plus générales.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 120, step: 10, marks: [60, 80] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des systèmes linéaires",
      nodes: [
        { id: "sis", label: "Système linéaire", x: 50, y: 6, color: "#6366f1", html: "Plusieurs équations du premier degré à satisfaire ensemble.", why: "Il sert quand un problème a plusieurs inconnues et plusieurs conditions : une seule équation ne suffit pas à les déterminer." },
        { id: "sost", label: "Substitution", x: 15, y: 30, color: "#16a34a", html: "Exprime une inconnue et remplace-la dans l'autre équation.", why: "Elle ramène un problème à deux inconnues à un problème à une seule, qu'on sait déjà résoudre avec les équations du premier degré." },
        { id: "conf", label: "Comparaison", x: 50, y: 30, color: "#f59e0b", html: "Égale les deux expressions de la même inconnue.", why: "Si deux quantités sont égales à une troisième, elles sont égales entre elles : c'est la transitivité de l'égalité." },
        { id: "rid", label: "Combinaison", x: 85, y: 30, color: "#a855f7", html: "Additionne ou soustrais les équations pour éliminer une inconnue.", why: "En additionnant membre à membre deux égalités, on obtient encore une égalité (première règle d'équivalence)." },
        { id: "cram", label: "Cramer", x: 50, y: 56, color: "#0ea5e9", html: "x = Dₓ/D, y = D_y/D si D ≠ 0.", why: "On l'obtient en appliquant la combinaison aux coefficients quelconques a, b, c, a′, b′, c′ : c'est la « solution en formule » du système." },
        { id: "casi", label: "Trois cas", x: 15, y: 80, color: "#ef4444", html: "Déterminé, impossible, indéterminé.", why: "Ils dépendent de D : si D ≠ 0, une solution ; si D = 0, droites parallèles (aucune) ou confondues (une infinité)." },
        { id: "geo", label: "Droites du plan", x: 85, y: 80, color: "#14b8a6", html: "Chaque équation est une droite ; la solution est l'intersection.", why: "Cela relie algèbre et géométrie, une idée de Descartes et de Fermat au XVIIe siècle : les équations comme des figures." },
        { id: "prob", label: "Problèmes", x: 50, y: 92, color: "#22c55e", html: "On traduit les conditions en équations et on interprète le résultat.", why: "La modélisation est la compétence clé : de l'énoncé au système, puis retour au contexte avec un contrôle de vraisemblance." }
      ],
      edges: [
        ["sis", "sost", "se résout par"],
        ["sis", "conf", "se résout par"],
        ["sis", "rid", "se résout par"],
        ["rid", "cram", "généralisée en"],
        ["cram", "casi", "décide"],
        ["casi", "geo", "vus comme"],
        ["prob", "sis", "se traduisent en"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : Cramer et problèmes",
      questions: [
        { type: "num", q: "Calcule le déterminant D de { 2x + 3y = 5 ; x + 4y = 6 }.", answer: 5, explain: "D = 2·4 − 1·3 = 8 − 3 = 5." },
        { type: "mc", q: "Si D = 0 et Dₓ ≠ 0, le système est…", options: ["déterminé", "impossible", "indéterminé"], answer: 1, explain: "D = 0 signifie des droites de même pente ; si Dₓ ≠ 0, elles ne sont pas confondues : elles sont parallèles distinctes, donc le système est impossible." },
        { type: "num", q: "Deux nombres ont pour somme 25 et pour différence 7. Quel est le plus grand ?", answer: 16, explain: "{ x + y = 25 ; x − y = 7 } → 2x = 32 → x = 16 (l'autre vaut 9)." }
      ]
    }
  ],
  glossary: [
    { t: "Système linéaire", d: "Ensemble d'équations du premier degré dont on cherche les valeurs qui les vérifient toutes à la fois." },
    { t: "Solution du système", d: "Couple (ou n-uplet) de valeurs qui rend vraies toutes les équations." },
    { t: "Système déterminé", d: "Il a une seule solution : les droites se coupent en un point." },
    { t: "Système impossible", d: "Il n'a pas de solution : les droites sont parallèles distinctes." },
    { t: "Système indéterminé", d: "Il a une infinité de solutions : les droites sont confondues." },
    { t: "Forme réduite", d: "ax + by = c, avec les inconnues à gauche et le terme constant à droite." },
    { t: "Substitution", d: "Méthode : on exprime une inconnue et on la remplace dans l'autre équation." },
    { t: "Combinaison", d: "Méthode : on additionne ou on soustrait les équations pour éliminer une inconnue." },
    { t: "Déterminant", d: "Nombre D = ab′ − a′b qui indique si le système 2×2 a une seule solution." },
    { t: "Systèmes équivalents", d: "Systèmes qui ont les mêmes solutions." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Résous { x + y = 10 ; x − y = 4 }.", options: ["(7, 3)", "(6, 4)", "(5, 5)"], answer: 0, explain: "En additionnant : 2x = 14 → x = 7, y = 3." },
      { type: "num", q: "Résous { y = 2x − 3 ; y = x + 1 } et donne la valeur de x.", answer: 4, explain: "Comparaison : 2x − 3 = x + 1 → x = 4 (et y = 5)." },
      { type: "num", q: "Résous { 2x + y = 11 ; x − y = 1 } et donne la valeur de y.", answer: 3, explain: "En additionnant : 3x = 12 → x = 4 ; y = 4 − 1 = 3." },
      { type: "mc", q: "Le système { x + 2y = 4 ; 3x + 6y = 5 } est…", options: ["déterminé", "impossible", "indéterminé"], answer: 1, explain: "La seconde équation donne x + 2y = 5/3, parallèle à x + 2y = 4 mais différente : aucune solution." },
      { type: "mc", q: "Le système { 2x − y = 3 ; 4x − 2y = 6 } est…", options: ["déterminé", "impossible", "indéterminé"], answer: 2, explain: "La seconde équation est le double de la première : les droites sont confondues et il y a une infinité de solutions." },
      { type: "num", q: "Avec la règle de Cramer, calcule D pour { 3x + 2y = 12 ; 2x − 3y = −5 }.", answer: -13, explain: "D = 3·(−3) − 2·2 = −13." },
      { type: "num", q: "Un parking contient 50 véhicules, voitures (4 roues) et motos (2 roues), pour 160 roues en tout. Combien y a-t-il de voitures ?", answer: 30, explain: "{ v + m = 50 ; 4v + 2m = 160 } → 2v = 60 → v = 30 (et m = 20)." },
      { type: "tf", q: "Un système linéaire 2×2 peut avoir exactement deux solutions.", answer: false, explain: "Deux droites ont 0, 1 ou une infinité de points communs : jamais exactement deux." },
      { type: "order", q: "Remets dans l'ordre les étapes de la méthode par substitution.", items: ["Exprimer une inconnue à partir d'une équation", "La remplacer dans l'autre équation", "Résoudre l'équation à une seule inconnue", "Calculer l'autre inconnue", "Vérifier dans les équations de départ"], explain: "On ramène le système à une seule inconnue, puis on remonte à la seconde et on vérifie." },
      { type: "text", q: "Comment s'appelait le Suisse qui a publié en 1750 la règle de résolution par les déterminants ?", answer: ["cramer", "gabriel cramer"], explain: "Gabriel Cramer (1704–1752)." }
    ]
  }
});
