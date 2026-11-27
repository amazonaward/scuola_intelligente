TOPIC('fr', {
  id: "l1-mat-equazioni-primo-grado",
  title: "Équations du premier degré",
  intro: "À partir de combien de minutes d'appel un forfait devient-il plus avantageux qu'un autre ? Quand se croisent deux trains partis de villes différentes ? Ce sont des questions avec une <b>inconnue</b>, et la réponse passe par une <b>équation</b>. Au collège, tu as appris les équations numériques ; maintenant, nous les consolidons en utilisant avec rigueur les <b>principes d'équivalence</b>, nous ajoutons les <b>équations fractionnaires</b> (avec les conditions d'existence) et nous apprenons à transformer des problèmes réels en équations.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Équations et principes d'équivalence",
      html: `<p>Une <b>équation</b> est une égalité entre deux expressions qui contient au moins une <b>inconnue</b> et qui n'est vraie que pour certaines valeurs de celle-ci (les <b>solutions</b> ou racines). Elle est du <b>premier degré</b> si, une fois réduite, l'inconnue y apparaît avec l'exposant 1.</p>
<p>Deux équations sont <b>équivalentes</b> si elles ont les mêmes solutions. Résoudre, c'est passer, par des transformations sûres, à des équations équivalentes de plus en plus simples :</p>
<ul>
<li><b>1er principe</b> : en ajoutant ou en soustrayant aux deux membres la <b>même expression</b>, on obtient une équation équivalente. (D'où la règle de transposition : un terme passe dans l'autre membre en changeant de signe.)</li>
<li><b>2e principe</b> : en multipliant ou en divisant les deux membres par un même nombre <b>non nul</b>, on obtient une équation équivalente.</li>
</ul>
<p>⚠️ Attention au 2e principe avec les <b>expressions contenant x</b> : si tu divises par x, tu perds la possibilité que x = 0 soit solution ; si tu multiplies par (x − 2), tu peux introduire une « solution » x = 2 qui n'existait pas. On ne peut pas multiplier ou diviser à la légère par des expressions en x : c'est pourquoi les équations fractionnaires exigent les CE.</p>
<p>Réduite à la <b>forme ax = b</b>, l'équation est : <b>déterminée</b> si a ≠ 0 (x = b/a), <b>impossible</b> si a = 0 et b ≠ 0, <b>indéterminée</b> si a = 0 et b = 0.</p>`
    },
    {
      type: "remember",
      title: "La méthode pour les équations entières",
      html: `<ol>
<li>Supprime les <b>parenthèses</b> (distributivité).</li>
<li>S'il y a des <b>dénominateurs numériques</b>, multiplie tout par leur PPCM.</li>
<li><b>Transpose</b> : les termes en x à gauche, les nombres à droite.</li>
<li><b>Réduis</b> : tu obtiens ax = b.</li>
<li><b>Divise</b> par a, si a ≠ 0.</li>
<li><b>Vérifie</b> en remplaçant dans l'équation de départ.</li>
</ol>`
    },
    {
      type: "example",
      title: "Exemple guidé : équation avec des fractions numériques",
      html: `<p>Résous <b>(2x − 1)/3 − (x + 2)/2 = 1</b>.</p>
<ol>
<li>PPCM(3, 2) = 6 : je multiplie tout par 6 → 2(2x − 1) − 3(x + 2) = 6</li>
<li>Parenthèses (attention au signe moins !) : 4x − 2 − 3x − 6 = 6</li>
<li>Je réduis : x − 8 = 6 → <b>x = 14</b></li>
<li>Vérification : (28 − 1)/3 − (14 + 2)/2 = 9 − 8 = 1 ✔️</li>
</ol>`
    },
    {
      type: "svg",
      title: "La solution est un croisement",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="260" x2="560" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="260" x2="40" y2="30" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="187" x2="540" y2="113" stroke="#2563eb" stroke-width="4"/>
<line x1="40" y1="260" x2="540" y2="40" stroke="#ea580c" stroke-width="4"/>
<line x1="290" y1="150" x2="290" y2="260" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/>
<circle cx="290" cy="150" r="8" fill="#16a34a"/>
<text x="290" y="282" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">100 minutes</text>
<text x="300" y="140" font-size="16" fill="#166534" font-weight="bold">même coût : 15 €</text>
<text x="400" y="85" font-size="16" fill="#9a3412" font-weight="bold">Forfait B : 0,15 · m</text>
<text x="330" y="215" font-size="16" fill="#1d4ed8" font-weight="bold">Forfait A : 10 + 0,05 · m</text>
<text x="50" y="24" font-size="16" fill="#334155">Coût (€)</text>
<text x="545" y="282" font-size="16" fill="#334155" text-anchor="end">minutes par mois</text>
</svg>`,
      caption: "On résout l'équation 10 + 0,05m = 0,15m en cherchant le point où les deux droites se croisent."
    },
    {
      type: "example",
      title: "Exemple concret : quel forfait choisir ?",
      html: `<p>Le forfait <b>A</b> coûte 10 € par mois plus 0,05 € la minute ; le forfait <b>B</b> n'a pas d'abonnement mais coûte 0,15 € la minute. À partir de combien de minutes A est-il plus avantageux ?</p>
<ul>
<li>Inconnue : m = minutes par mois.</li>
<li>Coûts égaux : 10 + 0,05m = 0,15m → 10 = 0,10m → <b>m = 100</b>.</li>
<li>Interprétation : en dessous de 100 minutes, B est plus avantageux ; au-dessus, c'est A. La solution de l'équation est le « seuil de rentabilité » (<i>break-even</i>), une notion utilisée en économie par toutes les entreprises.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple concret : la rencontre des trains",
      html: `<p>Deux gares sont distantes de 360 km. À 9 h 00, un train part de la première à 80 km/h et un autre part de la seconde vers la première à 100 km/h. Quand se croisent-ils ?</p>
<ul>
<li>Inconnue : t = heures écoulées. Distances parcourues : 80t et 100t, et ensemble elles couvrent 360 km.</li>
<li>Équation : 80t + 100t = 360 → 180t = 360 → <b>t = 2 heures</b> : ils se croisent à 11 h 00, à 160 km de la première gare.</li>
<li>Vérification : 160 + 200 = 360 ✔️</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : équations entières",
      questions: [
        { type: "num", q: "Résous : 3x − 7 = 11", answer: 6, explain: "3x = 18, donc x = 6." },
        { type: "num", q: "Résous : x/4 + 1 = 4", answer: 12, explain: "x/4 = 3, donc x = 12." },
        { type: "tf", q: "Pour résoudre une équation, on peut toujours diviser les deux membres par x.", answer: false, explain: "Si x = 0, la division n'est pas permise et on peut perdre la solution x = 0 : par exemple x² = 3x." }
      ]
    },
    {
      type: "text",
      title: "Équations fractionnaires : les conditions d'existence",
      html: `<p>Une équation est <b>fractionnaire</b> (ou rationnelle) quand l'inconnue apparaît au dénominateur. La démarche change, car il faut exclure les valeurs qui annulent un dénominateur :</p>
<ol>
<li><b>Factorise</b> les dénominateurs.</li>
<li>Écris les <b>CE</b> : dénominateurs ≠ 0.</li>
<li>Calcule le PPCM et <b>multiplie les deux membres</b> par celui-ci (c'est permis car, avec les CE, le PPCM n'est pas nul) : les dénominateurs disparaissent.</li>
<li>Résous l'équation entière obtenue.</li>
<li><b>Compare avec les CE</b> : la solution n'est <b>acceptable</b> que si elle respecte les CE ; sinon, il faut la rejeter.</li>
</ol>
<p><b>Exemple 1</b> : 1/(x − 1) + 1/(x + 1) = 4/(x² − 1). CE : x ≠ ±1. Je multiplie par (x − 1)(x + 1) : (x + 1) + (x − 1) = 4 → 2x = 4 → <b>x = 2</b>, acceptable.</p>
<p><b>Exemple 2</b> : x/(x − 3) = 3/(x − 3). CE : x ≠ 3. Je multiplie par (x − 3) : x = 3. Mais x = 3 ne respecte pas les CE ! La solution n'est pas acceptable : l'équation est <b>impossible</b>.</p>
<p><b>Exemple 3</b> : x/(x − 2) = 2/(x − 2) + 1. CE : x ≠ 2. Je multiplie par (x − 2) : x = 2 + x − 2 → x = x : c'est une identité. Les solutions sont <b>tous les nombres sauf 2</b>.</p>`
    },
    {
      type: "widget",
      title: "Combien de solutions ?",
      widget: "classify",
      options: { groups: ["Une solution", "Impossible", "Indéterminée"], items: [
        ["3x − 5 = 2x + 1", 0],
        ["2(x + 1) = 2x + 3", 1],
        ["4x − 4 = 4(x − 1)", 2],
        ["x/(x − 3) = 3/(x − 3)", 1],
        ["x/2 + x/3 = 5", 0],
        ["x/(x − 2) = 2/(x − 2) + 1", 2],
        ["5 − x = x − 5", 0]
      ] },
      caption: "Ramène à ax = b et, pour les équations fractionnaires, pense à contrôler les CE."
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le mot « algèbre »",
      html: `<p>Le mot <b>algèbre</b> vient de l'arabe <i>al-jabr</i>, « restauration », et figure dans le titre du traité que le mathématicien perse <b>Muhammad ibn Mūsā al-Khwārizmī</b> écrivit à Bagdad vers 820 apr. J.-C. Son nom latinisé, <i>Algoritmi</i>, a donné le mot <b>algorithme</b>. Al-jabr désignait le transfert d'un terme soustrait dans l'autre membre ; <i>al-muqābala</i> (« comparaison », « équilibrage ») la réduction des termes semblables : ce sont nos deux principes d'équivalence, mais sans symboles, entièrement en mots !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Qui a inventé les lettres ?",
      html: `<p>Pendant des siècles, les équations s'écrivaient en mots. Le Français <b>François Viète</b> (1540–1603) fut le premier à utiliser systématiquement des lettres pour les quantités, y compris pour les données connues. Au XVIIe siècle, <b>René Descartes</b> fixa l'usage que nous connaissons aujourd'hui : x, y, z pour les inconnues et a, b, c pour les valeurs connues ; quant au signe =, on le doit au Gallois <b>Robert Recorde</b> (1557).</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de résoudre une équation",
      intro: "La méthode mécanique fonctionne, mais comprendre pourquoi elle fonctionne, c'est autre chose. Voici des méthodes historiques et visuelles.",
      tabs: [
        {
          label: "🕌 Al-jabr et al-muqābala",
          html: `<p>Al-Khwārizmī raisonnait sur des « choses » (<i>shay</i>, notre x) et des nombres. Exemple, avec nos symboles : <b>5x − 3 = 2x + 9</b>.</p>
<ul>
<li><b>al-jabr</b> (« restaurer ») : le −3 rend le membre « incomplet » ; j'ajoute 3 des deux côtés : 5x = 2x + 12.</li>
<li><b>al-muqābala</b> (« comparer ») : j'enlève 2x des deux côtés : 3x = 12.</li>
<li>Je divise : <b>x = 4</b>.</li>
</ul>
<p>C'est exactement la transposition des termes et la réduction que tu fais, mais racontées comme le fait de « rétablir » et d'« équilibrer » une situation d'équilibre.</p>`
        },
        {
          label: "🏺 Fausse position (Égypte)",
          html: `<p>Les scribes égyptiens résolvaient le problème « une quantité et son septième font 19 » (x + x/7 = 19) par la méthode de la <b>fausse position</b> : on choisit une valeur pratique (7), on calcule le résultat (7 + 1 = 8) et on le corrige proportionnellement.</p>
<ul>
<li>J'essaie x = 7 : 7 + 1 = 8, mais je dois obtenir 19.</li>
<li>Coefficient de correction : 19/8. Donc x = 7 · 19/8 = <b>133/8</b>.</li>
<li>Vérification : 133/8 + 19/8 = 152/8 = 19 ✔️</li>
</ul>
<p>Cela fonctionne parce que dans une équation ax = b, le résultat est <b>proportionnel</b> à x : si x double, le résultat double. C'est la méthode « par essai et correction », encore utilisée aujourd'hui (sous un autre nom) dans les algorithmes numériques.</p>`
        },
        {
          label: "📈 Avec le graphique",
          html: `<p>Chaque membre d'une équation du premier degré est une <b>droite</b> si on le regarde comme une fonction de x. Résoudre l'équation, c'est trouver pour quel x les deux droites ont la <b>même valeur</b>, c'est-à-dire où elles se croisent (comme sur le graphique des forfaits). Si les droites sont parallèles, elles ne se rencontrent jamais : équation <b>impossible</b> ; si c'est la même droite, elles se rencontrent partout : équation <b>indéterminée</b>.</p>`
        },
        {
          label: "🔁 Opérations inverses",
          html: `<p>Si l'inconnue n'apparaît qu'une seule fois, tu peux « dérouler » la suite d'opérations à l'envers. 3x − 7 = 11 signifie : je pars de x, je multiplie par 3, j'enlève 7, j'obtiens 11. Je refais le chemin en sens inverse avec les opérations inverses : 11 + 7 = 18, puis 18 : 3 = 6. Donc <b>x = 6</b>.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [6, 11, 18] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des équations du premier degré",
      nodes: [
        { id: "eq", label: "Équation", x: 50, y: 6, color: "#6366f1", html: "Égalité vraie seulement pour certaines valeurs de l'inconnue.", why: "Elle exprime un problème sous forme mathématique : « trouve la valeur qui satisfait cette condition ». On en trouve des exemples dès le papyrus Rhind et les tablettes babyloniennes." },
        { id: "p1", label: "1er principe", x: 20, y: 28, color: "#16a34a", html: "On ajoute ou on soustrait la même expression aux deux membres.", why: "Si deux quantités sont égales, en leur ajoutant la même quantité elles restent égales : l'une des « notions communes » d'Euclide. C'est l'al-jabr d'al-Khwārizmī." },
        { id: "p2", label: "2e principe", x: 80, y: 28, color: "#f59e0b", html: "On multiplie ou on divise par un même nombre ≠ 0.", why: "Multiplier par 0 efface toute information ; avec des expressions en x, multiplier peut introduire des solutions étrangères, diviser peut en faire perdre." },
        { id: "forma", label: "Forme ax = b", x: 50, y: 50, color: "#a855f7", html: "Le résultat des transformations.", why: "À partir de là, selon que a ≠ 0 ou a = 0, on classe toute équation du premier degré." },
        { id: "casi", label: "Trois cas", x: 20, y: 72, color: "#ef4444", html: "Déterminée, impossible, indéterminée.", why: "Géométriquement : droites sécantes, parallèles distinctes, confondues." },
        { id: "fratte", label: "Équations fractionnaires", x: 80, y: 62, color: "#0ea5e9", html: "L'inconnue est au dénominateur : il faut les CE.", why: "Diviser par zéro est impossible, donc les valeurs qui annulent un dénominateur doivent être exclues avant de résoudre." },
        { id: "acc", label: "Acceptabilité", x: 80, y: 88, color: "#14b8a6", html: "Une solution qui ne respecte pas les CE doit être rejetée.", why: "En multipliant par le PPCM, on obtient une équation qui peut avoir des solutions « étrangères » à l'équation de départ." },
        { id: "probl", label: "Problèmes", x: 40, y: 92, color: "#22c55e", html: "Choisir l'inconnue, traduire, résoudre, interpréter.", why: "L'étape fondamentale est la modélisation : passer du langage courant au langage algébrique, avec Viète et Descartes." }
      ],
      edges: [
        ["eq", "p1", "se transforme avec"],
        ["eq", "p2", "se transforme avec"],
        ["p1", "forma", "mène à"],
        ["p2", "forma", "mène à"],
        ["forma", "casi", "décide"],
        ["eq", "fratte", "si x au dénominateur"],
        ["fratte", "acc", "contrôle final"],
        ["probl", "eq", "se traduisent en"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : équations fractionnaires et problèmes",
      questions: [
        { type: "mc", q: "L'équation x/(x − 3) = 3/(x − 3) a pour solutions…", options: ["x = 3", "aucune solution", "tous les nombres"], answer: 1, explain: "On obtient x = 3, mais x = 3 annule le dénominateur : solution non acceptable, donc l'équation est impossible." },
        { type: "num", q: "Résous : 2/(x + 1) = 1", answer: 1, explain: "Avec x ≠ −1 : 2 = x + 1, donc x = 1." },
        { type: "num", q: "Le triple d'un nombre diminué de 4 vaut 26. Quel est ce nombre ?", answer: 10, explain: "3x − 4 = 26 → 3x = 30 → x = 10." }
      ]
    }
  ],
  glossary: [
    { t: "Équation", d: "Égalité entre des expressions, vraie seulement pour certaines valeurs de l'inconnue." },
    { t: "Solution (racine)", d: "Valeur de l'inconnue qui rend l'équation vraie." },
    { t: "Équations équivalentes", d: "Équations qui ont les mêmes solutions." },
    { t: "Principes d'équivalence", d: "Règles (addition/soustraction et multiplication/division par un nombre ≠ 0) qui transforment une équation en une équation équivalente." },
    { t: "Forme réduite", d: "La forme ax = b à laquelle se ramène une équation du premier degré." },
    { t: "Équation fractionnaire", d: "Équation dont l'inconnue apparaît au dénominateur." },
    { t: "Conditions d'existence", d: "Valeurs de l'inconnue à exclure parce qu'elles annulent un dénominateur." },
    { t: "Solution acceptable", d: "Solution qui respecte les conditions d'existence." },
    { t: "Seuil de rentabilité", d: "Point d'équilibre (break-even) où deux coûts, ou les coûts et les recettes, sont égaux." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Résous : 5(x − 2) − 3 = 2x + 8", answer: 7, explain: "5x − 13 = 2x + 8 → 3x = 21 → x = 7." },
      { type: "num", q: "Résous : (2x − 1)/3 − (x + 2)/2 = 1", answer: 14, explain: "En multipliant par 6 : 4x − 2 − 3x − 6 = 6 → x = 14." },
      { type: "mc", q: "L'équation 3(x − 1) + 2 = 3x − 1 est…", options: ["déterminée", "impossible", "indéterminée"], answer: 2, explain: "3x − 1 = 3x − 1 : elle se ramène à 0x = 0, donc une infinité de solutions." },
      { type: "mc", q: "L'équation x/(x − 4) = 4/(x − 4) a…", options: ["la solution x = 4", "aucune solution acceptable", "une infinité de solutions"], answer: 1, explain: "Avec la CE x ≠ 4, en multipliant par (x − 4), on obtient x = 4, qui ne respecte pas les CE : l'équation est impossible." },
      { type: "num", q: "Résous : 1/(x − 1) + 1/(x + 1) = 4/(x² − 1)", answer: 2, explain: "CE x ≠ ±1 ; 2x = 4 → x = 2, acceptable." },
      { type: "tf", q: "Multiplier les deux membres par une expression contenant x est toujours une transformation équivalente.", answer: false, explain: "Si l'expression peut s'annuler, on peut introduire des solutions étrangères : c'est pourquoi on contrôle les CE." },
      { type: "num", q: "Deux trains partent au même instant de deux gares distantes de 450 km et roulent l'un vers l'autre à 70 km/h et 80 km/h. Au bout de combien d'heures se croisent-ils ?", answer: 3, unit: "h", explain: "(70 + 80)t = 450 → t = 3." },
      { type: "order", q: "Range dans l'ordre les étapes de résolution d'une équation fractionnaire.", items: ["Factoriser les dénominateurs", "Écrire les CE", "Multiplier par le PPCM", "Résoudre l'équation entière", "Contrôler la solution avec les CE"], explain: "Les CE s'écrivent d'abord ; le contrôle de l'acceptabilité clôt la démarche." },
      { type: "text", q: "Comment s'appelait le mathématicien perse dont viennent les mots « algèbre » et « algorithme » ?", answer: ["al-khwarizmi", "al khwarizmi", "khwarizmi", "alkhwarizmi", "al-khwârizmî", "al khuwarizmi", "al-khuwarizmi"], explain: "Al-Khwārizmī (IXe siècle) : al-jabr figure dans le titre de son ouvrage, et son nom latinisé a donné « algorithme »." },
      { type: "num", q: "Forfait A : 12 € fixes + 0,04 €/min. Forfait B : 0,10 €/min. Pour combien de minutes les deux forfaits coûtent-ils la même chose ?", answer: 200, unit: "min", explain: "12 + 0,04m = 0,10m → 12 = 0,06m → m = 200." }
    ]
  }
});
