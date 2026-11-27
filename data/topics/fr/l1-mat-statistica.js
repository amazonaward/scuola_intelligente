TOPIC('fr', {
  id: "l1-mat-statistica",
  title: "Statistique descriptive",
  intro: "Chaque jour, nous sommes submergés de chiffres : sondages, pourcentages, « en moyenne », « la majorité des »… La <b>statistique</b> est la science qui nous permet de recueillir des données, de les organiser, de les résumer et de les lire avec un esprit critique. Dans cette leçon, tu apprends à construire des tableaux d'effectifs et des graphiques, et à calculer les <b>indicateurs</b> qui résument une série de données : <b>moyenne, médiane, mode</b> et les mesures de <b>dispersion</b> (étendue, variance, écart-type).",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Population, échantillon, caractère",
      html: `<p>La statistique descriptive s'appuie sur quelques termes :</p>
<ul>
<li><b>Population</b> : l'ensemble de tous les individus étudiés (les élèves d'un lycée, les familles d'une ville…). Chaque élément est un <b>individu</b> (ou unité statistique).</li>
<li><b>Échantillon</b> : une partie de la population, choisie pour l'étudier sans interroger tout le monde. Pour qu'un échantillon soit fiable, il doit être <b>représentatif</b> (choisi au hasard, pas seulement parmi ses amis !).</li>
<li><b>Caractère</b> (ou variable) : ce que l'on observe sur chaque individu ; ses différentes valeurs possibles sont les <b>modalités</b>.</li>
</ul>
<p>Les caractères peuvent être :</p>
<ul>
<li><b>qualitatifs</b> : les modalités sont des mots (couleur des yeux, équipe préférée, filière d'études) ;</li>
<li><b>quantitatifs discrets</b> : des nombres entiers obtenus en comptant (nombre de frères et sœurs, notes entières) ;</li>
<li><b>quantitatifs continus</b> : des nombres mesurés, qui peuvent prendre n'importe quelle valeur dans un intervalle (taille, masse, temps). On les regroupe en <b>classes</b>.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Quel type de caractère ?",
      widget: "classify",
      options: { groups: ["Qualitatif", "Quantitatif discret", "Quantitatif continu"], items: [
        ["couleur des yeux", 0],
        ["nombre de frères et sœurs", 1],
        ["taille", 2],
        ["équipe supportée", 0],
        ["note au bulletin (entière)", 1],
        ["masse", 2],
        ["temps au 100 m", 2],
        ["messages envoyés par jour", 1]
      ] },
      caption: "Si tu comptes, c'est discret ; si tu mesures, c'est continu ; si tu décris avec des mots, c'est qualitatif."
    },
    {
      type: "text",
      title: "Effectifs, fréquences et tableaux",
      html: `<p>Après avoir recueilli les données, on compte combien de fois apparaît chaque modalité :</p>
<ul>
<li><b>effectif</b> (n<sub>i</sub>) : le nombre de fois où la modalité apparaît ;</li>
<li><b>fréquence</b> (n<sub>i</sub>/N) : la proportion par rapport au nombre total N d'observations (un nombre entre 0 et 1) ;</li>
<li><b>fréquence en pourcentage</b> : la fréquence × 100 ;</li>
<li><b>effectif cumulé</b> : somme des effectifs jusqu'à cette modalité (pour les caractères qu'on peut ordonner).</li>
</ul>
<p><b>Exemple</b> : les notes de 20 élèves à un contrôle.</p>
<table>
<tr><th>Note</th><th>Effectif</th><th>Fréquence</th><th>%</th><th>Cumulé</th></tr>
<tr><td>5</td><td>2</td><td>0,10</td><td>10 %</td><td>2</td></tr>
<tr><td>6</td><td>5</td><td>0,25</td><td>25 %</td><td>7</td></tr>
<tr><td>7</td><td>7</td><td>0,35</td><td>35 %</td><td>14</td></tr>
<tr><td>8</td><td>4</td><td>0,20</td><td>20 %</td><td>18</td></tr>
<tr><td>9</td><td>2</td><td>0,10</td><td>10 %</td><td>20</td></tr>
<tr><td><b>Total</b></td><td><b>20</b></td><td><b>1</b></td><td><b>100 %</b></td><td></td></tr>
</table>
<p>Vérification : la somme des effectifs vaut N et celle des fréquences vaut toujours <b>1</b>. (Les notes sont ici sur 10, comme dans l'école italienne.)</p>`
    },
    {
      type: "svg",
      title: "Le graphique des notes",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="560" y2="250" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="250" x2="60" y2="60" stroke="#475569" stroke-width="2"/>
<rect x="80" y="200" width="70" height="50" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="170" y="125" width="70" height="125" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="260" y="75" width="70" height="175" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
<rect x="350" y="150" width="70" height="100" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="440" y="200" width="70" height="50" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<g font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="115" y="278">5</text><text x="205" y="278">6</text><text x="295" y="278">7</text><text x="385" y="278">8</text><text x="475" y="278">9</text>
</g>
<g font-size="16" text-anchor="middle" fill="#1e3a8a">
<text x="115" y="192">2</text><text x="205" y="117">5</text><text x="295" y="67">7</text><text x="385" y="142">4</text><text x="475" y="192">2</text>
</g>
<line x1="290" y1="45" x2="290" y2="250" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<text x="300" y="38" font-size="16" fill="#dc2626" font-weight="bold">moyenne 6,95 · médiane 7 · mode 7</text>
<text x="570" y="296" font-size="14" text-anchor="end" fill="#475569">note</text>
<text x="66" y="52" font-size="14" fill="#475569">nombre d'élèves</text>
</svg>`,
      caption: "Diagramme en bâtons de la répartition des notes : le pic est le mode, la ligne pointillée indique où se situent la moyenne et la médiane."
    },
    {
      type: "text",
      title: "Représentations graphiques",
      html: `<p>Le choix du graphique dépend du type de données :</p>
<ul>
<li><b>Diagramme en bâtons (ou en barres)</b> : pour les caractères qualitatifs ou discrets ; les barres sont séparées et leur hauteur est proportionnelle à l'effectif.</li>
<li><b>Histogramme</b> : pour les caractères continus regroupés en classes ; les rectangles sont <b>accolés</b> et c'est l'<b>aire</b> (et non la hauteur !) qui est proportionnelle à l'effectif, si les classes ont des amplitudes différentes.</li>
<li><b>Diagramme circulaire (camembert)</b> : chaque modalité est un secteur dont l'angle = fréquence × 360°. Utile pour montrer les parties d'un tout.</li>
<li><b>Graphique cartésien (courbe)</b> : pour une évolution dans le temps (évolution des températures, de la population).</li>
</ul>
<p>⚠️ Un graphique peut tromper : un axe vertical qui ne commence pas à zéro, ou trop de dimensions (graphiques 3D), grossissent de petites différences. Regarde toujours les axes !</p>
<p><b>Exemple de diagramme circulaire</b> : 35 % de notes égales à 7 → angle 0,35 · 360° = <b>126°</b>.</p>`
    },
    {
      type: "text",
      title: "Les indicateurs de position : moyenne, médiane, mode",
      html: `<p>Pour résumer une série de données par un seul nombre, on utilise des <b>indicateurs de tendance centrale</b> :</p>
<ul>
<li><b>Moyenne arithmétique</b> : somme de toutes les valeurs divisée par le nombre de données. Avec un tableau d'effectifs, on utilise la moyenne pondérée : (Σ valeur · effectif)/N.</li>
<li><b>Médiane</b> : la valeur qui se trouve <b>au milieu</b> des données rangées dans l'ordre. Si N est impair, c'est la donnée centrale ; si N est pair, c'est la moyenne des deux données centrales.</li>
<li><b>Mode</b> : la valeur qui a le <b>plus grand effectif</b>. Il peut ne pas être unique (série bimodale) et il s'utilise aussi pour les caractères qualitatifs.</li>
</ul>
<p><b>Exemple</b> : les données 2, 4, 4, 4, 5, 5, 7, 9 (N = 8).</p>
<ul>
<li>Moyenne : (2 + 4 + 4 + 4 + 5 + 5 + 7 + 9)/8 = 40/8 = <b>5</b>.</li>
<li>Médiane : les données sont déjà rangées ; les deux centrales sont la 4e et la 5e (4 et 5) : (4 + 5)/2 = <b>4,5</b>.</li>
<li>Mode : le 4 apparaît trois fois : <b>4</b>.</li>
</ul>
<p><b>Avec les notes du tableau</b> : moyenne = (5·2 + 6·5 + 7·7 + 8·4 + 9·2)/20 = 139/20 = <b>6,95</b> ; médiane : la 10e et la 11e données valent toutes deux 7 → <b>7</b> ; mode <b>7</b>.</p>`
    },
    {
      type: "example",
      title: "Exemple concret : la moyenne qui trompe",
      html: `<p>Dans une petite entreprise, 9 employés gagnent <b>1 500 €</b> par mois et le patron <b>11 500 €</b>. Quel est le salaire « typique » ?</p>
<ul>
<li>Moyenne : (9 · 1 500 + 11 500)/10 = 25 000/10 = <b>2 500 €</b>.</li>
<li>Médiane : <b>1 500 €</b>. Mode : <b>1 500 €</b>.</li>
</ul>
<p>Si l'entreprise annonce « salaire moyen 2 500 € », c'est formellement vrai, mais aucun employé ne gagne une somme proche ! Une <b>valeur aberrante</b> (<i>outlier</i>) déplace beaucoup la moyenne, et très peu la médiane. C'est pourquoi, quand les données sont asymétriques (revenus, prix des logements), on préfère la <b>médiane</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : fréquences et indicateurs de position",
      questions: [
        { type: "num", q: "Dans une classe de 25 élèves, 5 viennent au lycée à vélo. Quel pourcentage cela représente-t-il ?", answer: 20, unit: "%", explain: "5/25 = 0,20 → 20 %." },
        { type: "num", q: "Quelle est la moyenne de 4, 6, 8, 10, 12 ?", answer: 8, explain: "40/5 = 8." },
        { type: "num", q: "Quelle est la médiane de 3, 9, 4, 7, 5 ?", answer: 5, explain: "Rangées : 3, 4, 5, 7, 9 : la donnée centrale est 5." }
      ]
    },
    {
      type: "text",
      title: "Indicateurs de dispersion",
      html: `<p>Deux classes peuvent avoir la même moyenne mais être très différentes : A = {6, 6, 6, 6}, B = {2, 4, 8, 10} : moyenne 6 dans les deux cas, mais dans la B les notes sont très dispersées. Les <b>indicateurs de dispersion</b> mesurent à quel point les données sont étalées :</p>
<ul>
<li><b>Étendue</b> : maximum − minimum. (A : 0, B : 8.) Simple, mais ne dépend que des valeurs extrêmes.</li>
<li><b>Écart</b> d'une donnée : différence avec la moyenne (x − m). Les écarts ont une <b>somme nulle</b>, on ne peut donc pas les additionner directement.</li>
<li><b>Variance</b> (σ²) : la <b>moyenne des carrés des écarts</b>. En élevant au carré, les signes disparaissent et les grands écarts pèsent davantage.</li>
<li><b>Écart-type</b> (σ) : la racine carrée de la variance ; il a la <b>même unité</b> que les données.</li>
</ul>
<p><b>Exemple</b> : données 2, 4, 4, 4, 5, 5, 7, 9 (moyenne 5). Écarts : −3, −1, −1, −1, 0, 0, 2, 4. Carrés : 9, 1, 1, 1, 0, 0, 4, 16, somme 32. Variance = 32/8 = <b>4</b> ; écart-type = √4 = <b>2</b>.</p>
<p>Pour les notes du tableau : Σx² = 991, donc σ² = 991/20 − 6,95² = 49,55 − 48,3025 = <b>1,2475</b>, et σ ≈ <b>1,12</b>. Une formule pratique : σ² = (moyenne des carrés) − (carré de la moyenne).</p>`
    },
    {
      type: "remember",
      title: "Comment choisir l'indicateur",
      html: `<ul>
<li><b>Moyenne</b> : données numériques sans valeurs aberrantes ; elle utilise toutes les données.</li>
<li><b>Médiane</b> : données asymétriques ou avec des valeurs aberrantes ; il suffit de ranger les données.</li>
<li><b>Mode</b> : le seul utilisable avec les caractères qualitatifs (couleur préférée, marque…).</li>
<li><b>Variance / σ</b> : pour dire si la moyenne « représente bien » les données : σ petit = données proches de la moyenne.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le poulet de Trilussa",
      html: `<p>Le poète romain <b>Trilussa</b> (1871–1950) a écrit un poème, <i>La statistica</i> (« La statistique »), qui se moque des moyennes : si quelqu'un mange deux poulets et quelqu'un d'autre aucun, « en moyenne » ils ont mangé un poulet chacun, mais l'un a eu une indigestion et l'autre est resté le ventre vide. La moyenne seule ne dit pas <i>comment</i> les données sont réparties : c'est pourquoi il faut aussi la médiane et la dispersion.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Florence Nightingale",
      html: `<p>L'infirmière <b>Florence Nightingale</b> (1820–1910), pendant la guerre de Crimée (1853–1856), recueillit les données sur les décès dans les camps militaires britanniques et découvrit que la plupart des soldats ne mouraient pas de leurs blessures mais de maladies dues au manque d'hygiène. Pour convaincre le gouvernement, elle inventa un graphique en secteurs très efficace, le « diagramme en crête de coq » (<i>coxcomb</i>) : les réformes sanitaires qui suivirent sauvèrent énormément de vies. Elle fut aussi la première femme élue membre de la Royal Statistical Society. Le mot <i>statistique</i> vient de l'allemand <i>Staat</i>, « État » : elle est née pour décrire les données de l'État (population, impôts, armées).</p>`
    },
    {
      type: "example",
      title: "Exemple : lire un sondage avec esprit critique",
      html: `<p>« 70 % des Italiens veulent une école plus longue », titre un journal. Questions à se poser : qui a été interrogé (l'<b>échantillon</b> est-il représentatif, ou s'agit-il de 100 personnes d'un seul quartier) ? Comment la question a-t-elle été formulée ? Combien de personnes ont répondu ? Une fréquence de 0,7 sur 10 personnes en dit beaucoup moins que sur 1 000. En statistique, la qualité des données compte autant que les calculs.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les indicateurs statistiques",
      intro: "La moyenne, la médiane et la variance ont aussi des interprétations intuitives, presque physiques.",
      tabs: [
        {
          label: "⚖️ La moyenne comme centre de gravité",
          html: `<p>Place les données sur une <b>balançoire à bascule</b> : chaque donnée est un petit caillou posé à sa position sur la droite numérique. La <b>moyenne</b> est le point où il faut placer l'appui pour que la balançoire soit en <b>équilibre</b>. Les données éloignées du centre « pèsent » davantage : voilà pourquoi une valeur aberrante entraîne la moyenne. Les écarts à gauche compensent exactement ceux de droite : leur somme est nulle.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="50" y1="170" x2="550" y2="170" stroke="#334155" stroke-width="4"/>
<g stroke="#334155" stroke-width="2"><line x1="150" y1="170" x2="150" y2="178"/><line x1="200" y1="170" x2="200" y2="178"/><line x1="250" y1="170" x2="250" y2="178"/><line x1="300" y1="170" x2="300" y2="178"/><line x1="350" y1="170" x2="350" y2="178"/><line x1="400" y1="170" x2="400" y2="178"/><line x1="450" y1="170" x2="450" y2="178"/><line x1="500" y1="170" x2="500" y2="178"/></g>
<g fill="#f59e0b" stroke="#92400e" stroke-width="2">
<circle cx="150" cy="152" r="14"/>
<circle cx="250" cy="152" r="14"/><circle cx="250" cy="124" r="14"/><circle cx="250" cy="96" r="14"/>
<circle cx="300" cy="152" r="14"/><circle cx="300" cy="124" r="14"/>
<circle cx="400" cy="152" r="14"/>
<circle cx="500" cy="152" r="14"/>
</g>
<polygon points="300,176 275,215 325,215" fill="#dc2626"/>
<g font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="150" y="240">2</text><text x="200" y="240">3</text><text x="250" y="240">4</text><text x="300" y="240">5</text><text x="350" y="240">6</text><text x="400" y="240">7</text><text x="450" y="240">8</text><text x="500" y="240">9</text>
</g>
<text x="300" y="268" font-size="17" text-anchor="middle" fill="#dc2626" font-weight="bold">appui = moyenne = 5 (équilibre)</text>
<text x="300" y="40" font-size="17" text-anchor="middle" fill="#1f2937">données : 2, 4, 4, 4, 5, 5, 7, 9</text>
</svg>`
        },
        {
          label: "🍬 Redistribuer",
          html: `<p>La moyenne est la valeur qu'aurait chaque individu si la quantité totale était <b>répartie en parts égales</b>. Quatre amis ont 2, 4, 6 et 12 bonbons : 24 au total. S'ils les mettent en commun et les partagent, chacun en reçoit 24/4 = <b>6</b> : c'est la moyenne. Avec cette idée, on comprend facilement pourquoi la somme des écarts est nulle : ceux qui sont au-dessus de la moyenne donnent exactement ce que reçoivent ceux qui sont en dessous.</p>`
        },
        {
          label: "🚶 La médiane : la file",
          html: `<p>Range les élèves en file du plus petit au plus grand : la <b>médiane</b> est la taille de celui qui se trouve <b>au milieu de la file</b>. La moitié des élèves sont plus petits ou de même taille, l'autre moitié plus grands ou de même taille. Si un basketteur très grand arrive, la file s'allonge mais <b>celui du milieu change très peu</b> : c'est pour cela que la médiane résiste bien aux valeurs aberrantes. La moyenne, en revanche, se déplace tout de suite vers le nouvel arrivant.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de la statistique descriptive",
      nodes: [
        { id: "pop", label: "Population et échantillon", x: 50, y: 6, color: "#6366f1", html: "Tous les individus ou une partie représentative.", why: "Interroger tout le monde est souvent impossible ou trop coûteux : on étudie un échantillon. S'il est mal choisi (pas au hasard), les résultats sont faussés." },
        { id: "car", label: "Caractère", x: 20, y: 26, color: "#16a34a", html: "Qualitatif, discret, continu.", why: "Le type de caractère détermine quels graphiques et quels indicateurs ont un sens : on ne peut pas faire la moyenne de couleurs." },
        { id: "freq", label: "Effectifs et fréquences", x: 80, y: 26, color: "#f59e0b", html: "Effectifs, fréquences, pourcentages, cumuls.", why: "Ils transforment une liste désordonnée de données en une distribution lisible ; les fréquences permettent de comparer des échantillons de tailles différentes." },
        { id: "graf", label: "Graphiques", x: 80, y: 52, color: "#a855f7", html: "Bâtons, histogramme, diagramme circulaire, courbe.", why: "Florence Nightingale montra avec des graphiques que les réformes sanitaires étaient nécessaires : une image peut convaincre là où les tableaux échouent." },
        { id: "pos", label: "Moyenne, médiane, mode", x: 25, y: 52, color: "#0ea5e9", html: "Valeurs qui résument le « centre » des données.", why: "La moyenne (Gauss, moindres carrés) minimise la somme des carrés des écarts ; la médiane, la somme des valeurs absolues des écarts ; le mode indique la valeur la plus typique." },
        { id: "var", label: "Dispersion", x: 50, y: 74, color: "#ef4444", html: "Étendue, variance, écart-type.", why: "Ils sont nécessaires parce que le centre seul ne suffit pas : les mêmes valeurs moyennes peuvent cacher des données très dispersées." },
        { id: "out", label: "Valeurs aberrantes", x: 82, y: 82, color: "#14b8a6", html: "Données très éloignées des autres.", why: "Elles déplacent la moyenne mais pas la médiane : le choix de l'indicateur dépend de la présence de valeurs aberrantes." },
        { id: "inf", label: "Vers les probabilités", x: 20, y: 88, color: "#ec4899", html: "De la description à la prévision.", why: "La statistique inférentielle utilise les probabilités pour étendre à la population ce qu'on observe sur l'échantillon, avec une marge d'erreur." }
      ],
      edges: [
        ["pop", "car", "on observe un"],
        ["car", "freq", "on compte avec"],
        ["freq", "graf", "on représente par"],
        ["freq", "pos", "on résume par"],
        ["pos", "var", "on complète par"],
        ["var", "out", "sensible aux"],
        ["pop", "inf", "mène à"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : dispersion",
      questions: [
        { type: "tf", q: "La moyenne d'une série de données est sensible aux valeurs aberrantes, la médiane beaucoup moins.", answer: true, explain: "Une valeur aberrante déplace la moyenne ; la médiane ne dépend que de la donnée centrale." },
        { type: "num", q: "Quelle est l'étendue de 3, 9, 4, 12, 7 ?", answer: 9, explain: "12 − 3 = 9." },
        { type: "mc", q: "La variance est…", options: ["la moyenne des carrés des écarts à la moyenne", "la différence entre le maximum et le minimum", "la donnée la plus fréquente"], answer: 0, explain: "Sa racine carrée est l'écart-type." }
      ]
    }
  ],
  glossary: [
    { t: "Population", d: "L'ensemble de tous les individus étudiés." },
    { t: "Échantillon", d: "Partie représentative de la population." },
    { t: "Caractère", d: "La propriété observée sur chaque individu : qualitative ou quantitative (discrète ou continue)." },
    { t: "Effectif / fréquence", d: "Nombre de fois où apparaît une modalité / sa proportion par rapport au total." },
    { t: "Moyenne arithmétique", d: "Somme des données divisée par leur nombre." },
    { t: "Médiane", d: "Valeur centrale des données rangées dans l'ordre." },
    { t: "Mode", d: "Modalité qui a le plus grand effectif." },
    { t: "Étendue", d: "Différence entre la valeur maximale et la valeur minimale." },
    { t: "Variance", d: "Moyenne des carrés des écarts à la moyenne." },
    { t: "Écart-type", d: "Racine carrée de la variance." },
    { t: "Valeur aberrante", d: "Valeur (outlier) très éloignée des autres données." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Le nombre de frères et sœurs est un caractère…", options: ["quantitatif discret", "qualitatif", "quantitatif continu"], answer: 0, explain: "On l'obtient en comptant : valeurs entières." },
      { type: "num", q: "Quelle est la moyenne de 4, 6, 8, 10, 12 ?", answer: 8, explain: "40/5 = 8." },
      { type: "num", q: "Quelle est la médiane de 3, 9, 4, 7, 5 ?", answer: 5, explain: "En rangeant : 3, 4, 5, 7, 9 ; la donnée centrale est 5." },
      { type: "num", q: "Quelle est la médiane de 2, 4, 6, 10 ?", answer: 5, explain: "N est pair : moyenne des deux valeurs centrales, (4 + 6)/2 = 5." },
      { type: "mc", q: "Quel est le mode de 1, 2, 2, 3, 3, 3, 4 ?", options: ["3", "2", "2,5"], answer: 0, explain: "Le 3 apparaît trois fois, plus que toute autre valeur." },
      { type: "num", q: "Dans un échantillon de 48 personnes, 12 préfèrent le thé. Quelle est la fréquence ?", answer: 0.25, tol: 0.001, explain: "12/48 = 0,25." },
      { type: "tf", q: "Une valeur aberrante très grande augmente beaucoup la moyenne mais change peu la médiane.", answer: true, explain: "C'est la raison pour laquelle on préfère souvent la médiane pour les revenus." },
      { type: "num", q: "Neuf employés gagnent 1 500 € et le patron 11 500 €. Quel est le salaire moyen, en euros ?", answer: 2500, unit: "€", explain: "(9 · 1 500 + 11 500)/10 = 2 500 €." },
      { type: "order", q: "Range dans l'ordre les étapes du calcul de la variance.", items: ["Calculer la moyenne", "Calculer les écarts à la moyenne", "Élever les écarts au carré", "Faire la moyenne des carrés des écarts"], explain: "La racine carrée de la variance est l'écart-type." },
      { type: "num", q: "Combien vaut l'écart-type des données 4 et 6 ?", answer: 1, explain: "Moyenne 5 ; écarts −1 et +1 ; carrés 1 et 1 ; variance 1 ; racine 1." }
    ]
  }
});
