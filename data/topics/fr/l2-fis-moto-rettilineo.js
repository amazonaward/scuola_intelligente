TOPIC('fr', {
  id: "l2-fis-moto-rettilineo",
  title: "Le mouvement rectiligne uniforme",
  intro: "Décrire comment un corps se déplace est la première tâche de la physique : c'est la <b>cinématique</b>. Avant de nous demander <i>pourquoi</i> quelque chose bouge (la dynamique), nous apprenons à décrire <i>comment</i> : où il se trouve, à quelle vitesse il va, où il sera dans un instant. Le cas le plus simple est le <b>mouvement rectiligne uniforme</b> : une trajectoire droite et une vitesse qui ne change jamais. Avec quelques idées (position, vitesse, équation horaire et graphiques), tu pourras prévoir où deux trains vont se croiser ou combien de temps il te faudra pour arriver à destination.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Référentiel, position et déplacement",
      html: `<p>Dire « le train est à l'arrêt » ou « il avance » ne suffit pas : <b>par rapport à quoi</b> ? Pour un passager assis, son voisin est immobile ; pour quelqu'un qui attend en gare, ce voisin roule à 150 km/h. Le mouvement est toujours <b>relatif à un référentiel</b> : un corps de référence et des axes de coordonnées avec une origine.</p>
<p>Pour le mouvement rectiligne, on utilise un seul axe (une droite orientée) avec une origine O et un sens positif. La <b>position</b> d'un point est sa coordonnée <b>s</b> (ou x) sur cet axe, avec un signe : positive d'un côté de l'origine, négative de l'autre. Elle se mesure en <b>mètres (m)</b>.</p>
<ul>
<li>La <b>trajectoire</b> est la ligne décrite par le point en mouvement. Si c'est une droite, le mouvement est <b>rectiligne</b>.</li>
<li>Le <b>déplacement</b> est la variation de position : <b>Δs = s₂ − s₁</b>. Il peut être positif, négatif ou nul. Il ne se confond pas avec la <b>distance parcourue</b> (toujours positive) : si tu vas au lycée et que tu rentres chez toi, la distance parcourue vaut le double du trajet, mais le déplacement est <b>nul</b>.</li>
<li>La <b>durée</b> (intervalle de temps) est Δt = t₂ − t₁, mesurée en <b>secondes (s)</b>.</li>
</ul>
<p>Un corps en mouvement est modélisé par un <b>point matériel</b> lorsque ses dimensions sont négligeables devant les distances parcourues (une voiture qui va de Rome à Milan).</p>`
    },
    {
      type: "text",
      title: "La vitesse moyenne et la vitesse instantanée",
      html: `<p>La <b>vitesse moyenne</b> est le quotient du déplacement par la durée correspondante :</p>
<p style="text-align:center"><b>v<sub>m</sub> = Δs / Δt = (s₂ − s₁) / (t₂ − t₁)</b></p>
<p>Son unité dans le Système international est le <b>mètre par seconde (m/s)</b>. Dans la vie courante, on utilise le <b>km/h</b>. La conversion est utile et doit être retenue :</p>
<p style="text-align:center"><b>1 m/s = 3,6 km/h</b> &nbsp;&nbsp; (pour passer des km/h aux m/s, on <b>divise par 3,6</b> ; des m/s aux km/h, on multiplie)</p>
<p>Pourquoi 3,6 ? 1 km = 1000 m et 1 h = 3600 s, donc 1 km/h = 1000/3600 m/s = 1/3,6 m/s. Par exemple 90 km/h = 25 m/s ; 10 m/s = 36 km/h.</p>
<p>Le compteur de vitesse d'une voiture indique la <b>vitesse instantanée</b> : la vitesse à un instant donné, c'est-à-dire la vitesse moyenne calculée sur une durée si courte qu'elle devient presque un point. Dans le mouvement rectiligne uniforme, la vitesse instantanée est toujours égale à la vitesse moyenne.</p>
<p>La vitesse a un <b>signe</b> (dans le mouvement rectiligne) : positive si le corps se déplace dans le sens de l'axe, négative s'il va dans le sens opposé. Le signe indique le sens du mouvement, pas « à quel point » il va vite ; la <b>norme</b> (valeur absolue) s'appelle aussi la valeur de la vitesse.</p>`
    },
    {
      type: "remember",
      title: "Qu'est-ce que le mouvement rectiligne uniforme",
      html: `<p>Un mouvement est <b>rectiligne uniforme</b> si la trajectoire est une <b>droite</b> et si la <b>vitesse est constante</b> : pendant des durées égales, le corps parcourt des <b>distances égales</b>. Cela revient à dire que le quotient Δs / Δt est toujours le même.</p>
<p>L'<b>équation horaire</b> est la formule qui donne la position à chaque instant :</p>
<p style="text-align:center"><b>s(t) = s₀ + v · t</b></p>
<p>où s₀ est la position à l'instant t = 0 (position initiale), v la vitesse (constante) et t le temps écoulé. Si le corps part de l'origine, s₀ = 0 et s = v · t. De la même formule on tire <b>t = (s − s₀) / v</b> et <b>v = (s − s₀) / t</b>.</p>`
    },
    {
      type: "example",
      title: "Exemples : calculs avec l'équation horaire",
      html: `<p><b>1. Le radar « tronçon »</b>. Deux portiques sont à 10 km l'un de l'autre sur la même portion d'autoroute. Une voiture les franchit à 5 minutes d'intervalle. Vitesse moyenne : 10 km / (5/60 h) = 10 / 0,0833 = <b>120 km/h</b>. Si la limite était de 110 km/h, elle serait verbalisée même si elle n'a jamais dépassé cette limite sous l'œil d'un radar fixe : la vitesse moyenne ne se cache pas.</p>
<p><b>2. À vélo</b>. Un vélo roule à 18 km/h = 5 m/s. Il part de la position s₀ = 200 m. Au bout de 40 s, il se trouve en s = 200 + 5 · 40 = <b>400 m</b>. Pour arriver à 1000 m, il faut t = (1000 − 200) / 5 = 160 s.</p>
<p><b>3. Le son et la lumière</b>. Le son se propage dans l'air à environ 343 m/s (à 20 °C) ; la lumière dans le vide à <b>299 792 458 m/s</b>, environ 300 000 km/s. Après un éclair, si tu entends le tonnerre 6 s plus tard, la foudre est tombée à 343 · 6 ≈ 2 060 m, soit environ 2 km (la lumière arrive pratiquement tout de suite).</p>
<p><b>4. La vitesse moyenne n'est pas la moyenne des vitesses</b>. Tu vas de A à B (120 km) à 60 km/h et tu reviens à 40 km/h. Ce n'est pas 50 km/h ! Durée de l'aller 120/60 = 2 h, du retour 120/40 = 3 h ; la distance totale est de 240 km en 5 h : la vitesse moyenne vaut 240 / 5 = <b>48 km/h</b> (plus faible, parce que tu as passé plus de temps à la vitesse la plus basse).</p>`
    },
    {
      type: "svg",
      title: "Le graphique position-temps : une droite",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="24" stroke="#1f2937" stroke-width="3"/>
<polygon points="570,250 558,244 558,256" fill="#1f2937"/><polygon points="60,24 54,36 66,36" fill="#1f2937"/>
<text x="540" y="276" font-size="16" fill="#1f2937" font-weight="bold">t (s)</text>
<text x="70" y="32" font-size="16" fill="#1f2937" font-weight="bold">s (m)</text>
<line x1="60" y1="250" x2="510" y2="50" stroke="#dc2626" stroke-width="4"/>
<line x1="60" y1="150" x2="510" y2="250" stroke="#2563eb" stroke-width="4"/>
<circle cx="210" cy="183" r="7" fill="#166534"/>
<text x="222" y="178" font-size="16" fill="#166534" font-weight="bold">rencontre</text>
<text x="440" y="86" font-size="16" fill="#dc2626" font-weight="bold">A : s = 20 t</text>
<text x="280" y="222" font-size="16" fill="#2563eb" font-weight="bold">B : s = 100 − 10 t</text>
<text x="66" y="142" font-size="16" fill="#2563eb">s₀ = 100 m</text>
<line x1="60" y1="150" x2="60" y2="150" stroke="#2563eb"/>
<text x="352" y="146" font-size="16" fill="#1f2937">pente = vitesse</text>
<text x="352" y="166" font-size="16" fill="#dc2626">(montée → v &gt; 0)</text>
<text x="352" y="270" font-size="16" fill="#2563eb">(descente → v &lt; 0)</text>
</svg>`,
      caption: "Dans le graphique position-temps du mouvement uniforme, la position est une droite : sa pente est la vitesse. La droite rouge monte (v = +20 m/s), la bleue descend (v = −10 m/s). Là où elles se croisent, les deux corps sont au même endroit au même instant."
    },
    {
      type: "text",
      title: "Lire les graphiques : s-t et v-t",
      html: `<p><b>Graphique position-temps (s, t)</b> : dans le mouvement rectiligne uniforme, c'est une <b>droite</b>.</p>
<ul>
<li>L'<b>ordonnée à l'origine</b> (intersection avec l'axe vertical) est la position initiale s₀.</li>
<li>La <b>pente</b> (inclinaison) est la vitesse : Δs / Δt. Droite plus raide = vitesse plus grande ; droite horizontale = corps immobile ; droite qui descend = mouvement dans le sens opposé.</li>
</ul>
<p><b>Graphique vitesse-temps (v, t)</b> : c'est une <b>droite horizontale</b> (la vitesse ne change pas). Ici, la grandeur intéressante est l'<b>aire</b> sous la courbe entre deux instants : c'est le <b>déplacement</b> Δs = v · Δt (aire d'un rectangle de base Δt et de hauteur v). Cette idée (aire sous la courbe = grandeur accumulée) reviendra avec le mouvement accéléré et, plus tard, avec l'intégrale.</p>`
    },
    {
      type: "svg",
      title: "Le graphique vitesse-temps et l'aire",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="100" width="320" height="150" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="24" stroke="#1f2937" stroke-width="3"/>
<polygon points="570,250 558,244 558,256" fill="#1f2937"/><polygon points="60,24 54,36 66,36" fill="#1f2937"/>
<text x="540" y="276" font-size="16" fill="#1f2937" font-weight="bold">t (s)</text>
<text x="70" y="32" font-size="16" fill="#1f2937" font-weight="bold">v (m/s)</text>
<line x1="60" y1="100" x2="440" y2="100" stroke="#166534" stroke-width="5"/>
<text x="34" y="106" font-size="16" fill="#166534" font-weight="bold">15</text>
<text x="372" y="274" font-size="16" fill="#1f2937" font-weight="bold">4</text>
<text x="140" y="180" font-size="18" fill="#14532d" font-weight="bold">Aire = v · Δt</text>
<text x="140" y="206" font-size="18" fill="#14532d" font-weight="bold">= 15 · 4 = 60 m</text>
<text x="400" y="130" font-size="16" fill="#1f2937">v constante :</text>
<text x="400" y="152" font-size="16" fill="#1f2937">droite horizontale</text>
</svg>`,
      caption: "L'aire du rectangle sous la droite v = 15 m/s entre 0 et 4 s vaut 60 : c'est exactement le déplacement effectué."
    },
    {
      type: "quiz",
      title: "Mini-quiz : vitesse et équation horaire",
      questions: [
        { type: "num", q: "Une voiture roule à 108 km/h. Combien vaut sa vitesse en m/s ?", answer: 30, unit: "m/s", explain: "108 / 3,6 = 30 m/s." },
        { type: "num", q: "Un cycliste part de l'origine et roule à 6 m/s. Au bout de combien de secondes a-t-il parcouru 150 m ?", answer: 25, unit: "s", explain: "t = s / v = 150 / 6 = 25 s." },
        { type: "tf", q: "Dans le graphique position-temps du mouvement rectiligne uniforme, une droite plus raide indique une vitesse plus grande.", answer: true, explain: "La pente de la droite s-t est la vitesse : plus elle est inclinée, plus le corps va vite." },
        { type: "mc", q: "Un corps a pour équation horaire s = 50 − 5t (en unités SI). Que signifie le signe moins devant 5 ?", options: ["Que le corps se déplace dans le sens opposé au sens positif de l'axe", "Que le corps est immobile", "Que le temps s'écoule à l'envers"], answer: 0, explain: "La vitesse est v = −5 m/s : le corps se déplace dans le sens négatif et se rapproche de l'origine en partant de s₀ = 50 m." }
      ]
    },
    {
      type: "text",
      title: "Quand deux corps se rencontrent",
      html: `<p>Un problème classique de cinématique : <b>deux mobiles sur la même droite partent de points différents ; ils se rencontrent lorsqu'ils ont la même position au même instant</b>. Méthode :</p>
<ol>
<li>Choisis un axe avec une origine et un sens positif.</li>
<li>Écris l'équation horaire de <b>chaque</b> corps avec sa position initiale et sa vitesse (<b>avec le signe !</b>) : s<sub>A</sub> = s₀A + v<sub>A</sub> t et s<sub>B</sub> = s₀B + v<sub>B</sub> t.</li>
<li><b>Égale</b> les deux positions : s<sub>A</sub> = s<sub>B</sub>.</li>
<li>Résous l'équation du premier degré d'inconnue t ; puis remplace t pour trouver où a lieu la rencontre.</li>
</ol>
<p><b>Exemple</b> : deux trains, A et B, se trouvent dans deux gares distantes de 300 km. Le train A part d'une gare (s = 0) vers l'autre à 100 km/h ; le train B part de l'autre gare (s = 300 km) au même instant vers A à 80 km/h. Équations horaires : s<sub>A</sub> = 100 t ; s<sub>B</sub> = 300 − 80 t. Ils se croisent quand 100 t = 300 − 80 t, c'est-à-dire 180 t = 300, <b>t = 1,67 h</b> (1 h 40 min). Position : s = 100 · 1,67 ≈ <b>167 km</b> de la gare de A.</p>
<p><b>Poursuite</b> : si les deux corps vont dans le même sens, la rencontre n'a lieu que si celui de derrière est plus rapide. Une voiture à 30 m/s poursuit un camion à 20 m/s qui a 200 m d'avance : la vitesse relative est de 10 m/s, donc la voiture le rattrape en 200 / 10 = <b>20 s</b>, après avoir parcouru 600 m.</p>`
    },
    {
      type: "example",
      title: "Exemple : le dépassement sur l'autoroute",
      html: `<p>Une voiture roule à 126 km/h (35 m/s) et s'approche d'un camion qui roule à 90 km/h (25 m/s). La voiture est 40 m derrière le camion et veut le doubler : elle doit se retrouver 20 m devant lui. Elle doit donc rattraper 40 + 20 = 60 m (on néglige, pour simplifier, la longueur des véhicules). La vitesse relative est 35 − 25 = 10 m/s, donc le dépassement dure 60 / 10 = <b>6 s</b>. Pendant ces 6 secondes, la voiture parcourt 35 · 6 = <b>210 m</b>. Si une autre voiture arrive en sens inverse à 90 km/h (25 m/s), elle parcourt 25 · 6 = 150 m pendant ce temps : les deux voitures se rapprochent de (35 + 25) · 6 = <b>360 m</b>. La voiture d'en face doit donc se trouver à plus de 360 m au début du dépassement !</p>`
    },
    {
      type: "text",
      title: "Galilée et la relativité du mouvement",
      html: `<p>Dans le <i>Dialogue sur les deux grands systèmes du monde</i> (1632), <b>Galilée</b> proposa une célèbre expérience de pensée : enfermez-vous dans la cale d'un grand navire avec quelques mouches, des papillons, un récipient d'eau avec des poissons, une bouteille suspendue qui goutte. Tant que le navire avance d'un <b>mouvement uniforme, sans oscillations</b>, vous ne pourrez pas savoir, en observant ce qui se passe à l'intérieur, si le navire est à l'arrêt ou en mouvement. Les gouttes tombent au même endroit, les poissons nagent dans toutes les directions, les sauts ont la même longueur.</p>
<p>C'est le <b>principe de relativité galiléenne</b> : les lois de la physique sont les mêmes dans tous les référentiels en mouvement rectiligne uniforme les uns par rapport aux autres (référentiels galiléens, ou inertiels). Conséquence : les <b>vitesses s'additionnent</b>. Si tu marches à 1 m/s dans le couloir d'un train qui roule à 30 m/s, ta vitesse par rapport aux rails est de 31 m/s (ou 29 m/s si tu marches dans l'autre sens). Albert Einstein montrera en 1905 que cette règle n'est valable qu'aux faibles vitesses, mais pour la vie de tous les jours elle est précise.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? À quelle vitesse court Bolt",
      html: `<p>Le 16 août 2009 à Berlin, <b>Usain Bolt</b> a couru le 100 m en <b>9,58 s</b>, record du monde toujours invaincu. Sa vitesse moyenne a été de 100 / 9,58 ≈ <b>10,44 m/s ≈ 37,6 km/h</b>. Dans les portions les plus rapides, il a atteint environ 12,3 m/s (44 km/h). Ce n'est pas un mouvement uniforme : il est parti arrêté et a accéléré. On en parle dans la prochaine leçon !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le Soleil d'il y a 8 minutes",
      html: `<p>La lumière met environ <b>8 minutes et 20 secondes</b> pour parcourir les 150 millions de km qui séparent le Soleil de la Terre : t = 1,496 × 10¹¹ m / 3 × 10⁸ m/s ≈ 499 s. Quand tu regardes le Soleil, tu le vois tel qu'il était il y a plus de 8 minutes : s'il s'éteignait maintenant, nous ne le découvririons que 8 minutes plus tard. De la même façon, la lumière d'une étoile située à 4,2 années-lumière (Proxima du Centaure) nous montre l'étoile telle qu'elle était il y a plus de 4 ans : regarder loin, c'est regarder dans le passé.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre le mouvement uniforme",
      intro: "Le mouvement est facile à ressentir mais difficile à décrire : voici trois façons de le voir.",
      tabs: [
        {
          label: "🎞️ Les images successives (stroboscopie)",
          html: `<p>Imagine que tu photographies une voiture chaque seconde, vue d'en haut, au-dessus d'une bande graduée en mètres. Si le mouvement est <b>uniforme</b>, entre deux photos la voiture avance toujours du même nombre de mètres. Un tableau :</p>
<table><tr><th>t (s)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>s (m)</th><td>5</td><td>15</td><td>25</td><td>35</td><td>45</td></tr><tr><th>Δs (m)</th><td></td><td>10</td><td>10</td><td>10</td><td>10</td></tr></table>
<p>Δs vaut toujours 10 m à chaque seconde : v = 10 m/s et l'équation horaire est s = 5 + 10t. Quand le tableau a des accroissements constants, le mouvement est uniforme ; si les accroissements augmentent, le corps accélère.</p>`
        },
        {
          label: "🔄 Conversion d'unités",
          html: `<p>Le 3,6 s'apprend en associant des cas concrets. Associe les vitesses en km/h à celles en m/s.</p>`,
          widget: "match",
          options: { pairs: [
            ["36 km/h", "10 m/s"],
            ["72 km/h", "20 m/s"],
            ["108 km/h", "30 m/s"],
            ["18 km/h", "5 m/s"],
            ["90 km/h", "25 m/s"],
            ["7,2 km/h", "2 m/s"]
          ] }
        },
        {
          label: "🚦 Le temps de réaction",
          html: `<p>Le mouvement uniforme permet de comprendre une donnée importante : un conducteur met environ <b>1 s</b> pour réagir à un obstacle avant de commencer à freiner. À 130 km/h (36,1 m/s), pendant cette seule seconde la voiture parcourt <b>36 mètres</b> à vitesse constante, avant même de toucher la pédale de frein. À 50 km/h (13,9 m/s), cela fait 14 mètres. C'est pourquoi se laisser distraire par son téléphone pendant seulement 3 secondes à 90 km/h revient à parcourir 75 m « à l'aveugle » (25 m/s × 3 s).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : le mouvement rectiligne uniforme",
      nodes: [
        { id: "rif", label: "Référentiel", x: 50, y: 6, color: "#6366f1", html: "Origine, axe et sens : ils servent à définir une position.", why: "Le mouvement est relatif : sans référentiel, « immobile » ou « en mouvement » n'ont pas de sens. Galilée fut le premier à le comprendre en 1632, en répondant à ceux qui affirmaient que la Terre ne pouvait pas bouger." },
        { id: "pos", label: "Position et déplacement", x: 18, y: 30, color: "#f59e0b", html: "s et Δs = s₂ − s₁.", why: "La position a un signe par rapport à l'origine ; le déplacement est une différence et donne une grandeur vectorielle (sens compris)." },
        { id: "vel", label: "Vitesse", x: 82, y: 30, color: "#16a34a", html: "v = Δs / Δt, en m/s (1 m/s = 3,6 km/h).", why: "C'est un quotient entre une distance et une durée : la « rapidité de variation de la position ». La définition montre pourquoi son unité est le m/s : on divise une longueur par un temps." },
        { id: "mru", label: "Mouvement rectiligne uniforme", x: 50, y: 55, color: "#a855f7", html: "Trajectoire droite, vitesse constante.", why: "C'est le cas le plus simple et aussi une bonne approximation de nombreux mouvements réels. D'après le principe d'inertie (Galilée, Newton), un corps soumis à aucune force se déplace exactement ainsi." },
        { id: "lo", label: "Équation horaire", x: 18, y: 82, color: "#ef4444", html: "s = s₀ + v t.", why: "Elle découle de la définition d'une vitesse constante : si Δs/Δt = v pour toute durée, alors s − s₀ = v t. C'est une fonction affine du temps." },
        { id: "gr", label: "Graphiques s-t et v-t", x: 82, y: 82, color: "#0ea5e9", html: "s-t : droite de pente v ; v-t : droite horizontale dont l'aire donne Δs.", why: "Les graphiques cartésiens (idée de Descartes et de Galilée) transforment une formule en image : la pente mesure la vitesse et l'aire le déplacement. C'est le germe de la dérivée et de l'intégrale." },
        { id: "inc", label: "Rencontre de deux mobiles", x: 50, y: 94, color: "#14b8a6", html: "On égale les deux équations horaires.", why: "Deux corps se rencontrent lorsqu'ils ont la même position au même instant : sur le graphique s-t, là où les deux droites se coupent." }
      ],
      edges: [
        ["rif", "pos", "définit"],
        ["rif", "vel", "mesurée par rapport à"],
        ["pos", "mru", "varie dans le"],
        ["vel", "mru", "constante dans le"],
        ["mru", "lo", "décrit par"],
        ["mru", "gr", "représenté par"],
        ["lo", "inc", "sert à trouver"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : graphiques et rencontres",
      questions: [
        { type: "num", q: "Un corps a pour équation horaire s = 10 + 4t (SI). Quelle est sa position au bout de 6 s ?", answer: 34, unit: "m", explain: "s = 10 + 4 · 6 = 34 m." },
        { type: "num", q: "Deux corps ont pour équations s_A = 5t et s_B = 60 − 7t (SI). Au bout de combien de secondes se rencontrent-ils ?", answer: 5, unit: "s", explain: "5t = 60 − 7t → 12t = 60 → t = 5 s." },
        { type: "tf", q: "Dans un graphique vitesse-temps du mouvement rectiligne uniforme, l'aire sous la droite représente le déplacement.", answer: true, explain: "Aire = v · Δt = Δs." },
        { type: "mc", q: "Sur le graphique position-temps, une droite horizontale signifie que…", options: ["Le corps est immobile", "Le corps a une vitesse constante non nulle", "Le corps accélère"], answer: 0, explain: "Si la position ne change pas au cours du temps, la vitesse est nulle : le corps est immobile." }
      ]
    }
  ],
  glossary: [
    { t: "Cinématique", d: "Partie de la physique qui décrit le mouvement sans s'occuper de ses causes." },
    { t: "Référentiel", d: "Corps de référence muni d'une origine et d'axes, par rapport auquel on décrit le mouvement." },
    { t: "Position", d: "Coordonnée s d'un point sur l'axe, avec un signe par rapport à l'origine." },
    { t: "Déplacement", d: "Variation de position Δs = s₂ − s₁." },
    { t: "Vitesse moyenne", d: "Quotient du déplacement par la durée : vm = Δs/Δt." },
    { t: "Vitesse instantanée", d: "Vitesse à un instant donné : la moyenne sur une durée très courte." },
    { t: "Mouvement rectiligne uniforme", d: "Mouvement sur une droite à vitesse constante." },
    { t: "Équation horaire", d: "Formule qui donne la position en fonction du temps : s = s₀ + v·t dans le mouvement uniforme." },
    { t: "Point matériel", d: "Modèle d'un corps dont les dimensions sont négligeables devant les distances parcourues." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Dans le mouvement rectiligne uniforme…", options: ["La vitesse est constante", "L'accélération est constante et non nulle", "La trajectoire est une courbe"], answer: 0, explain: "C'est la définition : trajectoire rectiligne et vitesse constante." },
      { type: "num", q: "Un train parcourt 270 km en 3 heures. Quelle est sa vitesse moyenne ?", answer: 90, unit: "km/h", explain: "270 / 3 = 90 km/h." },
      { type: "num", q: "Convertis 72 km/h en m/s.", answer: 20, unit: "m/s", explain: "72 / 3,6 = 20 m/s." },
      { type: "num", q: "Une voiture part de s₀ = 30 m avec v = 12 m/s. Où se trouve-t-elle au bout de 5 s ?", answer: 90, unit: "m", explain: "s = 30 + 12 · 5 = 90 m." },
      { type: "tf", q: "Si tu vas au lycée et que tu rentres chez toi, le déplacement total est égal à deux fois la distance.", answer: false, explain: "Tu reviens au point de départ : le déplacement total est nul (c'est la distance parcourue qui vaut le double)." },
      { type: "num", q: "Une voiture parcourt 120 km à 60 km/h puis 120 km à 120 km/h. Quelle est la vitesse moyenne sur l'ensemble du trajet ?", answer: 80, unit: "km/h", explain: "Durées : 2 h + 1 h = 3 h ; distance 240 km ; 240/3 = 80 km/h." },
      { type: "mc", q: "Que représente la pente d'une droite dans le graphique position-temps ?", options: ["La position initiale", "La vitesse", "Le temps"], answer: 1, explain: "Pente = Δs / Δt = vitesse." },
      { type: "num", q: "Deux cyclistes partent de deux points distants de 90 km et roulent l'un vers l'autre à 20 km/h et 25 km/h. Au bout de combien d'heures se rencontrent-ils ?", answer: 2, unit: "h", explain: "Vitesse de rapprochement 45 km/h : t = 90 / 45 = 2 h." },
      { type: "text", q: "Comment s'appelle la formule qui donne la position d'un corps en fonction du temps ?", answer: ["équation horaire", "l'équation horaire", "equation horaire", "loi horaire", "équation du mouvement"], explain: "C'est l'équation horaire : s = s₀ + v·t dans le mouvement rectiligne uniforme." },
      { type: "order", q: "Range dans l'ordre les étapes pour trouver où deux mobiles se rencontrent.", items: ["Choisis l'origine et le sens de l'axe", "Écris l'équation horaire de chaque corps", "Égale les deux positions", "Résous pour trouver le temps", "Remplace le temps pour trouver le lieu"], explain: "On écrit le modèle de chaque mouvement, on impose la même position au même instant et on résout." }
    ]
  }
});
