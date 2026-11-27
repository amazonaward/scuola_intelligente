TOPIC('fr', {
  id: "l1-fis-errori-misura",
  title: "La mesure et les incertitudes",
  intro: "Aucune mesure n'est <b>exacte</b>. Si tu mesures trois fois le même bureau avec le même mètre, tu obtiendras probablement trois résultats légèrement différents. Ce n'est pas un échec : c'est la nature même de la mesure. La physique expérimentale ne cherche pas le « nombre vrai », mais un <b>résultat accompagné de son incertitude</b>, écrit honnêtement. Dans cette leçon, nous apprenons à reconnaître les <b>caractéristiques des instruments</b>, à distinguer les types d'<b>erreurs</b>, à calculer l'<b>incertitude absolue et relative</b> et à écrire correctement les <b>chiffres significatifs</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Les instruments de mesure et leurs caractéristiques",
      html: `<p>Un instrument de mesure se décrit par quelques <b>caractéristiques</b> :</p>
<ul>
<li><b>Calibre</b> (ou portée) : la valeur maximale que l'instrument peut mesurer. Une balance de cuisine de calibre 5 kg ne peut pas peser une personne.</li>
<li><b>Sensibilité</b> (ou résolution) : la <b>plus petite variation</b> de la grandeur que l'instrument peut détecter. Pour une règle graduée en millimètres, c'est 1 mm ; pour un pied à coulisse au vingtième, 0,05 mm ; pour un chronomètre numérique, 0,01 s.</li>
<li><b>Rapidité</b> : la vitesse à laquelle l'instrument réagit à une variation (un thermomètre à mercure est moins rapide qu'un thermomètre numérique).</li>
<li><b>Fidélité</b> (précision) : la capacité de donner, quand on répète la mesure dans les mêmes conditions, des <b>valeurs proches les unes des autres</b>.</li>
<li><b>Justesse</b> (exactitude) : la capacité de donner des valeurs <b>proches de la valeur vraie</b>.</li>
</ul>
<p>Les instruments peuvent être <b>analogiques</b> (avec une échelle graduée et une aiguille ou un index : règle, thermomètre à mercure) ou <b>numériques</b> (avec un affichage chiffré : chronomètre, balance électronique).</p>`
    },
    {
      type: "svg",
      title: "Fidélité et justesse : la cible",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<g transform="translate(80,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-5" cy="4" r="5"/><circle cx="10" cy="-6" r="5"/><circle cx="3" cy="9" r="5"/><circle cx="-9" cy="-8" r="5"/><circle cx="8" cy="5" r="5"/></g>
</g>
<g transform="translate(240,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="38" cy="-30" r="5"/><circle cx="46" cy="-24" r="5"/><circle cx="40" cy="-20" r="5"/><circle cx="44" cy="-34" r="5"/><circle cx="35" cy="-26" r="5"/></g>
</g>
<g transform="translate(400,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-28" cy="-20" r="5"/><circle cx="30" cy="14" r="5"/><circle cx="6" cy="40" r="5"/><circle cx="-34" cy="30" r="5"/><circle cx="20" cy="-36" r="5"/></g>
</g>
<g transform="translate(560,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-6" cy="-3" r="5"/><circle cx="4" cy="8" r="5"/><circle cx="-12" cy="10" r="5"/><circle cx="14" cy="-8" r="5"/><circle cx="0" cy="-14" r="5"/></g>
</g>
<g font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">
<text x="80" y="212">Fidèle et</text><text x="80" y="230">juste</text>
<text x="240" y="212">Fidèle mais</text><text x="240" y="230">pas juste</text>
<text x="400" y="212">Ni fidèle</text><text x="400" y="230">ni juste</text>
<text x="560" y="212">Juste en moyenne,</text><text x="560" y="230">peu fidèle</text>
</g>
<text x="320" y="270" font-size="14" text-anchor="middle" fill="#334155">Centre de la cible = valeur vraie ; points bleus = mesures répétées</text>
</g>
</svg>`,
      caption: "Fidélité = mesures proches les unes des autres. Justesse = mesures proches de la valeur vraie. Ce sont deux choses différentes."
    },
    {
      type: "text",
      title: "Les erreurs de mesure",
      html: `<p>Toute mesure est entachée d'une <b>erreur</b>, au sens non pas de faute mais d'<b>incertitude</b>. On distingue deux familles :</p>
<ul>
<li><b>Erreurs systématiques</b> : elles décalent toutes les mesures <b>toujours dans le même sens</b>. Causes : instrument mal étalonné (erreur de zéro : la balance indique 20 g sans rien dessus), méthode incorrecte, mauvaise position de l'œil (<b>erreur de parallaxe</b>). On les corrige si on les découvre, mais on ne les réduit pas en répétant la mesure.</li>
<li><b>Erreurs aléatoires</b> (ou accidentelles) : elles varient d'une mesure à l'autre, en plus ou en moins, sans règle, car elles dépendent de nombreuses petites causes (tremblement de la main, vibrations, temps de réaction de la personne qui déclenche le chronomètre). On les <b>réduit en répétant</b> la mesure de nombreuses fois et en faisant la moyenne.</li>
</ul>
<p>Il existe enfin l'<b>erreur grossière</b>, c'est-à-dire la véritable faute (lire 28 au lieu de 82) : il faut l'éliminer, elle ne fait pas partie de la théorie des erreurs.</p>`
    },
    {
      type: "widget",
      title: "Systématique ou aléatoire ?",
      widget: "classify",
      options: { groups: ["Systématique", "Aléatoire"], items: [
        ["La balance indique 5 g même sans rien dessus", 0],
        ["On arrête le chronomètre tantôt trop tôt, tantôt trop tard", 1],
        ["Je lis toujours la règle de côté (parallaxe)", 0],
        ["De petites vibrations de la table pendant la pesée", 1],
        ["Le mètre en plastique s'est dilaté au soleil et mesure toujours un peu trop", 0],
        ["Les lectures du thermomètre oscillent de quelques dixièmes de degré", 1]
      ] },
      caption: "L'erreur systématique décale toujours dans le même sens ; l'erreur aléatoire va tantôt en plus, tantôt en moins."
    },
    {
      type: "text",
      title: "La mesure unique et l'incertitude absolue",
      html: `<p>Quand on effectue <b>une seule mesure</b>, le résultat ne peut pas être plus précis que ce que permet l'instrument. Par convention (dans de nombreux manuels), on prend comme <b>incertitude absolue</b> la <b>sensibilité</b> de l'instrument :</p>
<p style="text-align:center"><b>x = x₀ ± E<sub>a</sub></b></p>
<p>où x₀ est la valeur mesurée et E<sub>a</sub> l'incertitude absolue. Exemple : avec une règle au millimètre, tu mesures 32 cm et 4 mm ; tu écris <b>l = (32,4 ± 0,1) cm</b>. Cela signifie : « la valeur vraie se trouve très probablement entre 32,3 et 32,5 cm ». Certains manuels prennent comme incertitude la <b>moitié</b> de la sensibilité : dans chaque exercice, il faut suivre la convention indiquée.</p>
<p>L'incertitude absolue a la <b>même unité</b> que la grandeur et elle est toujours positive.</p>`
    },
    {
      type: "text",
      title: "Mesures répétées : valeur moyenne et demi-dispersion",
      html: `<p>Si l'on peut répéter la mesure N fois dans les mêmes conditions, les valeurs obtenues seront légèrement différentes. On procède ainsi :</p>
<ol>
<li><b>Valeur moyenne</b> : la somme de toutes les mesures divisée par N. C'est la meilleure estimation de la valeur vraie.</li>
<li><b>Incertitude absolue</b> égale à la <b>demi-dispersion maximale</b> : E<sub>a</sub> = (x<sub>max</sub> − x<sub>min</sub>) / 2.</li>
<li>On écrit le résultat : <b>x = valeur moyenne ± E<sub>a</sub></b>.</li>
</ol>
<p><b>Exemple.</b> Tu mesures la largeur d'un cahier avec une règle au mm et tu obtiens : 21,3 cm ; 21,5 ; 21,4 ; 21,4 ; 21,6.</p>
<ul>
<li>Somme : 21,3 + 21,5 + 21,4 + 21,4 + 21,6 = 107,2 ; moyenne = 107,2 / 5 = <b>21,44 cm</b>.</li>
<li>Demi-dispersion : (21,6 − 21,3) / 2 = <b>0,15 cm</b>.</li>
<li>Résultat : <b>l = (21,44 ± 0,15) cm</b>, que l'on arrondit à <b>(21,4 ± 0,2) cm</b> : l'incertitude s'écrit avec <b>un seul chiffre significatif</b> et la valeur avec le même nombre de décimales que l'incertitude.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Incertitude relative et pourcentage",
      html: `<p>L'incertitude absolue ne dit pas si la mesure est « bonne » : une incertitude de 1 cm est petite si je mesure un terrain de football, énorme si je mesure un ongle. C'est pourquoi on calcule l'<b>incertitude relative</b> :</p>
<p style="text-align:center"><b>E<sub>r</sub> = E<sub>a</sub> / x</b> (nombre sans unité)</p>
<p>et l'<b>incertitude en pourcentage</b> : <b>E% = E<sub>r</sub> × 100</b>. Plus l'incertitude relative est petite, meilleure est la mesure.</p>`
    },
    {
      type: "example",
      title: "Quelle mesure est la meilleure ?",
      html: `<p>Marta mesure la longueur d'une route : (500 ± 1) m. Luca mesure l'épaisseur d'un livre : (3,0 ± 0,5) cm. Qui a le mieux mesuré ?</p>
<ul>
<li>Marta : E<sub>r</sub> = 1/500 = 0,002 = <b>0,2 %</b>.</li>
<li>Luca : E<sub>r</sub> = 0,5/3,0 ≈ 0,17 = <b>17 %</b>.</li>
</ul>
<p>Même si l'incertitude absolue de Luca (0,5 cm) est numériquement plus petite que celle de Marta (1 m), sa mesure est bien moins bonne en proportion. L'<b>incertitude relative</b> est la bonne façon de comparer des mesures de grandeurs différentes.</p>`
    },
    {
      type: "example",
      title: "Le chronomètre et le temps de réaction",
      html: `<p>Pour mesurer le temps de chute d'une balle lâchée de 2 m, trois élèves utilisent un chronomètre numérique au centième de seconde. Ils obtiennent 0,71 s ; 0,64 s ; 0,78 s ; 0,69 s. La sensibilité de l'instrument est 0,01 s, mais les mesures diffèrent de presque 0,1 s : la cause est le <b>temps de réaction humain</b>, une erreur aléatoire bien plus grande que la sensibilité. La valeur moyenne est 0,705 s et la demi-dispersion (0,78 − 0,64)/2 = 0,07 s : le résultat correct est <b>(0,71 ± 0,07) s</b>, et non (0,705 ± 0,01) s. L'instrument a une meilleure sensibilité que ce que permet la méthode : c'est l'incertitude <i>dominante</i> qui compte.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : incertitudes",
      questions: [
        { type: "num", q: "Valeurs mesurées : 12,0 s ; 12,4 s ; 12,2 s. Calcule la valeur moyenne.", answer: 12.2, tol: 0.01, unit: "s", explain: "(12,0 + 12,4 + 12,2) / 3 = 36,6 / 3 = 12,2 s." },
        { type: "num", q: "Avec les mêmes mesures (12,0 ; 12,4 ; 12,2 s), calcule l'incertitude absolue comme demi-dispersion maximale.", answer: 0.2, tol: 0.001, unit: "s", explain: "(12,4 − 12,0) / 2 = 0,2 s." },
        { type: "tf", q: "Une erreur systématique se réduit en répétant de nombreuses fois la mesure et en faisant la moyenne.", answer: false, explain: "L'erreur systématique décale toutes les mesures dans le même sens : la moyenne ne l'élimine pas." }
      ]
    },
    {
      type: "text",
      title: "Les chiffres significatifs",
      html: `<p>Les <b>chiffres significatifs</b> d'une mesure sont ceux qui ont une signification réelle, c'est-à-dire les chiffres certains plus le premier chiffre incertain. Écrire 3,20 m ou 3,2 m, ce n'est pas la même chose : dans le premier cas, l'instrument va jusqu'au centimètre, dans le second jusqu'au décimètre.</p>
<p><b>Règles de comptage :</b></p>
<ul>
<li>les chiffres non nuls sont toujours significatifs ;</li>
<li>les zéros <b>entre</b> des chiffres significatifs sont significatifs (<b>4 0 7 </b> → 3 chiffres) ;</li>
<li>les zéros <b>à gauche</b> ne sont pas significatifs (0,0052 a <b>2</b> chiffres) ;</li>
<li>les zéros <b>à droite après la virgule</b> sont significatifs (2,50 a <b>3</b> chiffres) ;</li>
<li>pour un entier terminé par des zéros comme 1500, le nombre est ambigu : pour lever l'ambiguïté, on utilise la notation scientifique (1,5 × 10³ a 2 chiffres ; 1,50 × 10³ en a 3).</li>
</ul>
<table>
<tr><th>Nombre</th><th>Chiffres significatifs</th></tr>
<tr><td>35,2</td><td>3</td></tr>
<tr><td>0,0045</td><td>2</td></tr>
<tr><td>3,020</td><td>4</td></tr>
<tr><td>6,0 × 10⁻³</td><td>2</td></tr>
</table>`
    },
    {
      type: "text",
      title: "Calculs et chiffres significatifs",
      html: `<p>Le résultat d'un calcul ne peut pas être plus précis que les données de départ.</p>
<ul>
<li><b>Multiplications et divisions</b> : le résultat a autant de chiffres significatifs que la donnée qui en a le <b>moins</b>. Exemple : 3,2 m × 1,45 m = 4,64 m² → on écrit <b>4,6 m²</b> (2 chiffres).</li>
<li><b>Additions et soustractions</b> : le résultat a autant de <b>décimales</b> que la donnée qui en a le <b>moins</b>. Exemple : 12,34 + 0,5 = 12,84 → on écrit <b>12,8</b>.</li>
<li><b>Arrondi</b> : si le chiffre à supprimer est ≥ 5, on augmente de 1 le chiffre précédent ; s'il est &lt; 5, on le laisse inchangé (2,46 → 2,5 ; 2,44 → 2,4).</li>
</ul>
<p>Le danger est la <b>fausse précision</b> : la calculatrice affiche 8 chiffres, mais si les données étaient mesurées avec 2 chiffres, les autres sont inventés.</p>`
    },
    {
      type: "text",
      title: "Comment se propagent les incertitudes",
      html: `<p>Quand on calcule une nouvelle grandeur à partir de mesures entachées d'incertitudes, le résultat a lui aussi une incertitude. Règles simples (dans le pire des cas) :</p>
<ul>
<li><b>Somme et différence</b> : les <b>incertitudes absolues s'additionnent</b>. (5,0 ± 0,1) cm + (3,0 ± 0,1) cm = (8,0 ± 0,2) cm. Pour la différence aussi, elles s'additionnent !</li>
<li><b>Produit et quotient</b> : les <b>incertitudes relatives s'additionnent</b>.</li>
</ul>
<p><b>Exemple, aire d'un rectangle</b> de côtés (5,0 ± 0,1) cm et (3,0 ± 0,1) cm :</p>
<ul>
<li>E<sub>r</sub> des côtés : 0,1/5,0 = 2 % et 0,1/3,0 ≈ 3,3 % ;</li>
<li>E<sub>r</sub> de l'aire ≈ 2 % + 3,3 % = 5,3 % ;</li>
<li>Aire = 5,0 × 3,0 = 15 cm² ; incertitude absolue = 15 × 0,053 ≈ 0,8 cm² ;</li>
<li>résultat : <b>A = (15,0 ± 0,8) cm²</b>.</li>
</ul>
<p>C'est pourquoi, dans une formule contenant un produit, il vaut mieux mesurer plus précisément la grandeur qui a la plus grande incertitude relative.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les incertitudes",
      intro: "Si les calculs te semblent abstraits, essaie ces points de vue.",
      tabs: [
        {
          label: "🎯 La cible",
          html: "<p>Pense à un tireur. <b>Fidélité</b> = les impacts sont groupés. <b>Justesse</b> = le groupe est proche du centre. Une erreur <b>systématique</b> décale tout le groupe sur le côté (viseur de travers) ; une erreur <b>aléatoire</b> élargit le groupe (main qui tremble). La « valeur vraie » est le centre que tu ne vois jamais directement, mais dont tu te rapproches avec plus de mesures.</p>"
        },
        {
          label: "📏 La règle à crans",
          html: "<p>Imagine que la règle avance par crans de 1 mm : tu ne peux pas lire 3,5 mm, seulement 3 ou 4. La <b>sensibilité</b> est la largeur du « cran » et elle fixe la précision maximale d'une seule lecture. C'est pourquoi cela n'a aucun sens d'écrire 12,347 cm si l'instrument va jusqu'au millimètre : les chiffres 4 et 7 sont inventés.</p>"
        },
        {
          label: "🧮 La moyenne avec des cartes",
          html: "<p>Cinq mesures : 20,1 ; 20,3 ; 20,2 ; 20,2 ; 20,2 cm. Une astuce : enlève le « 20, » commun et travaille sur les décimales : 1, 3, 2, 2, 2 → somme 10 → moyenne 2 → la valeur moyenne est 20,2 cm. C'est un moyen de faire les calculs de tête.</p>",
          widget: "flashcards",
          options: { cards: [
            { front: "Valeur moyenne", back: "somme des mesures / nombre de mesures" },
            { front: "Incertitude absolue (mesures répétées)", back: "(x max - x min) / 2" },
            { front: "Incertitude relative", back: "incertitude absolue / valeur mesurée" },
            { front: "Incertitude en pourcentage", back: "incertitude relative × 100" },
            { front: "Somme de mesures", back: "on additionne les incertitudes absolues" },
            { front: "Produit de mesures", back: "on additionne les incertitudes relatives" }
          ] }
        },
        {
          label: "🔁 Les étapes d'une mesure",
          html: "<p>Toute expérience suit ces étapes : choisir l'instrument → vérifier le zéro → mesurer plusieurs fois → écarter les erreurs grossières → calculer moyenne et incertitude → écrire le résultat avec les bons chiffres → comparer avec d'autres résultats ou avec la valeur attendue.</p>",
          svg: "<svg viewBox='0 0 600 160' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='160' fill='#f0f9ff'/><g font-family='sans-serif' font-size='14' text-anchor='middle' fill='#0c4a6e'><rect x='10' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='52' y='84'>Instrument</text><rect x='115' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='157' y='84'>Mesures</text><rect x='220' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='262' y='84'>Moyenne</text><rect x='325' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='367' y='84'>Incertitude</text><rect x='430' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='472' y='84'>Chiffres</text><rect x='535' y='55' width='55' height='50' rx='8' fill='#7dd3fc'/><text x='562' y='84'>x±E</text><path d='M95 80 L115 80 M200 80 L220 80 M305 80 L325 80 M410 80 L430 80 M515 80 L535 80' stroke='#0369a1' stroke-width='3'/></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Quand le neutrino a « dépassé » la lumière",
      html: `<p>En septembre 2011, l'expérience <b>OPERA</b> (qui mesurait des neutrinos envoyés du CERN, à Genève, vers les laboratoires du Gran Sasso, en Italie) annonça que les neutrinos semblaient voyager <b>un tout petit peu plus vite que la lumière</b>. Cela aurait été une découverte révolutionnaire. Dans les mois suivants, les chercheurs vérifièrent tout et trouvèrent deux <b>erreurs systématiques</b> : un câble de fibre optique mal branché et un oscillateur défectueux. Après correction, la vitesse redevint compatible avec celle de la lumière. Cela montre que même les grands laboratoires recherchent et corrigent leurs propres erreurs, et qu'une découverte exceptionnelle exige des preuves extraordinaires.</p>`
    },
    {
      type: "curiosity",
      title: "Ératosthène et la circonférence de la Terre",
      html: `<p>Vers 240 av. J.-C., <b>Ératosthène</b> de Cyrène mesura la circonférence terrestre avec un bâton, une ombre et une distance : à Syène (aujourd'hui Assouan), les rayons du Soleil à midi, le jour du solstice d'été, tombaient à la verticale, tandis qu'à Alexandrie, environ 5000 stades plus au nord, ils formaient un angle d'environ 7,2° (1/50 de tour complet). Il en déduisit une circonférence de 250 000 stades. La valeur du stade utilisé est incertaine, mais la mesure ne s'écarte de la valeur moderne que d'un faible pourcentage : une excellente estimation, obtenue avec des instruments simples et une incertitude clairement évaluée.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte de la mesure",
      nodes: [
        { id: "misura", label: "La mesure", x: 50, y: 8, color: "#2563eb", html: "Comparaison d'une grandeur avec un étalon, au moyen d'un instrument.", why: "Toute donnée expérimentale est le résultat d'une mesure : sans comprendre comment on l'obtient et à quel point elle est fiable, on ne peut se fier à aucune loi physique. C'est pourquoi la méthode expérimentale de Galilée a placé la mesure au centre." },
        { id: "strumenti", label: "Instrument", x: 15, y: 42, color: "#16a34a", html: "Calibre, sensibilité, rapidité, fidélité, justesse.", why: "Les caractéristiques de l'instrument fixent les limites de toute mesure : aucun calcul ne peut obtenir plus de précision que n'en a l'instrument." },
        { id: "errori", label: "Erreurs", x: 50, y: 42, color: "#ef4444", html: "Systématiques et aléatoires : l'incertitude de toute mesure.", why: "Les erreurs aléatoires naissent de nombreuses petites causes indépendantes, donc elles se compensent quand on fait la moyenne ; les erreurs systématiques dépendent d'un défaut de la méthode ou de l'instrument et il faut les découvrir, pas les moyenner." },
        { id: "incertezza", label: "Incertitude absolue et relative", x: 85, y: 42, color: "#f59e0b", html: "Ea = demi-dispersion ou sensibilité ; Er = Ea/x ; E% = Er × 100.", why: "L'incertitude absolue indique à quel point on peut se fier au résultat ; l'incertitude relative permet de comparer des mesures de grandeurs différentes. C'est la comparaison avec l'incertitude relative qui donne du sens à un nombre." },
        { id: "cifre", label: "Chiffres significatifs", x: 30, y: 80, color: "#8b5cf6", html: "Chiffres certains plus le premier chiffre incertain.", why: "N'écrire que les chiffres significatifs est une question d'honnêteté : chaque chiffre en trop est une promesse de précision impossible à tenir." },
        { id: "propagazione", label: "Propagation des incertitudes", x: 72, y: 80, color: "#64748b", html: "Somme : incertitudes absolues. Produit : incertitudes relatives.", why: "Cela vient du raisonnement du pire des cas : si chaque mesure peut se tromper par excès, l'incertitude du résultat est la somme des contributions. Il vaut donc mieux améliorer la mesure qui pèse le plus." }
      ],
      edges: [["misura", "strumenti", "dépend de l'"], ["misura", "errori", "comporte toujours des"], ["errori", "incertezza", "se quantifient par l'"], ["incertezza", "cifre", "fixe les"], ["incertezza", "propagazione", "se propage dans les calculs"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz : chiffres significatifs",
      questions: [
        { type: "mc", q: "Combien de chiffres significatifs a 0,0360 ?", options: ["2", "3", "4", "5"], answer: 1, explain: "Les zéros à gauche ne comptent pas ; 3, 6 et le zéro final après la virgule comptent : 3 chiffres." },
        { type: "mc", q: "Le produit 2,5 m × 3,14 m donne 7,85 m². Comment l'écrire avec les bons chiffres significatifs ?", options: ["7,85 m²", "7,9 m²", "8 m²", "7,850 m²"], answer: 1, explain: "La donnée qui a le moins de chiffres (2,5) en a 2 : le résultat a 2 chiffres, 7,9 m²." }
      ]
    }
  ],
  glossary: [
    { t: "Sensibilité", d: "Plus petite variation de la grandeur que l'instrument peut détecter." },
    { t: "Calibre", d: "Valeur maximale mesurable par un instrument." },
    { t: "Fidélité", d: "Capacité de donner des mesures répétées proches les unes des autres." },
    { t: "Justesse", d: "Capacité de donner des mesures proches de la valeur vraie." },
    { t: "Erreur systématique", d: "Erreur qui décale les mesures toujours dans le même sens." },
    { t: "Erreur aléatoire", d: "Erreur qui varie de façon imprévisible d'une mesure à l'autre." },
    { t: "Incertitude absolue", d: "Incertitude d'une mesure, exprimée dans la même unité que la grandeur." },
    { t: "Incertitude relative", d: "Rapport entre l'incertitude absolue et la valeur de la mesure." },
    { t: "Chiffres significatifs", d: "Chiffres certains d'une mesure plus le premier chiffre incertain." },
    { t: "Parallaxe", d: "Erreur de lecture due à la position de l'œil par rapport à l'échelle." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qu'est-ce que la sensibilité d'un instrument ?", options: ["La valeur maximale mesurable", "La plus petite variation détectable", "La rapidité de réponse", "Le prix de l'instrument"], answer: 1, explain: "La sensibilité est la plus petite variation que l'instrument peut apprécier." },
      { type: "tf", q: "Un instrument très fidèle est forcément juste.", answer: false, explain: "Il peut donner des valeurs proches les unes des autres mais toutes décalées par rapport à la valeur vraie, à cause d'une erreur systématique." },
      { type: "mc", q: "La balance indique 10 g avec le plateau vide. De quel type d'erreur s'agit-il ?", options: ["Aléatoire", "Systématique", "Grossière", "Relative"], answer: 1, explain: "Elle décale toutes les mesures dans le même sens : erreur de zéro, donc systématique." },
      { type: "num", q: "Mesures d'une longueur : 8,2 cm ; 8,4 cm ; 8,3 cm ; 8,3 cm. Calcule la valeur moyenne.", answer: 8.3, tol: 0.01, unit: "cm", explain: "(8,2 + 8,4 + 8,3 + 8,3) / 4 = 33,2 / 4 = 8,3 cm." },
      { type: "num", q: "Avec les mêmes mesures (8,2 ; 8,4 ; 8,3 ; 8,3 cm), calcule l'incertitude absolue comme demi-dispersion.", answer: 0.1, tol: 0.001, unit: "cm", explain: "(8,4 − 8,2) / 2 = 0,1 cm." },
      { type: "num", q: "Une mesure vaut (50 ± 2) cm. Calcule l'incertitude en pourcentage.", answer: 4, tol: 0.01, unit: "%", explain: "E_r = 2/50 = 0,04, soit 4 %." },
      { type: "mc", q: "Combien de chiffres significatifs a 4,050 ?", options: ["2", "3", "4", "5"], answer: 2, explain: "Le zéro entre 4 et 5 et le zéro final après la virgule sont significatifs : 4 chiffres." },
      { type: "mc", q: "Quel est le résultat de 12,34 + 0,5 avec les bons chiffres significatifs ?", options: ["12,84", "12,8", "13", "12,9"], answer: 1, explain: "Pour une somme, on garde le nombre de décimales de la donnée qui en a le moins (1) : 12,8." },
      { type: "tf", q: "Quand on soustrait deux mesures, les incertitudes absolues se soustraient.", answer: false, explain: "Dans le pire des cas, les incertitudes absolues s'additionnent, même pour une différence." },
      { type: "order", q: "Range les étapes pour écrire le résultat de mesures répétées.", items: ["Effectuer plusieurs mesures", "Calculer la valeur moyenne", "Calculer l'incertitude absolue", "Écrire x = moyenne ± incertitude avec les bons chiffres"], explain: "On recueille d'abord les données, puis on calcule la moyenne, puis l'incertitude, et enfin on écrit le résultat." }
    ]
  }
});
