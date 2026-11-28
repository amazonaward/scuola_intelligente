TOPIC('fr', {
  id: "l2-fis-moto-accelerato",
  title: "Le mouvement uniformément accéléré",
  intro: "Le feu passe au vert et la voiture démarre : sa vitesse n'est pas constante, elle <b>augmente</b>. Une pierre lâchée d'un pont va de plus en plus vite à chaque instant. Quand la vitesse change, une nouvelle grandeur apparaît : l'<b>accélération</b>. Le cas le plus simple et le plus important est le <b>mouvement uniformément accéléré</b>, dans lequel la vitesse varie de façon régulière au cours du temps. C'est le mouvement de la <b>chute libre</b>, que Galilée étudia avec le plan incliné et qui changea pour toujours la manière de faire de la physique.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "L'accélération : quand la vitesse change",
      html: `<p>Dans la leçon précédente, la vitesse était constante. Maintenant, nous la laissons varier. L'<b>accélération moyenne</b> est le quotient de la variation de vitesse par la durée :</p>
<p style="text-align:center"><b>a<sub>m</sub> = Δv / Δt = (v₂ − v₁) / (t₂ − t₁)</b></p>
<p>Son unité est le <b>mètre par seconde carrée (m/s²)</b> : « des m/s à chaque seconde ». Une accélération de 3 m/s² signifie que la vitesse augmente de 3 m/s chaque seconde.</p>
<p>L'accélération a un <b>signe</b> (dans le mouvement rectiligne) et doit être interprétée avec la vitesse :</p>
<ul>
<li><b>a et v de même signe</b> : le corps <b>accélère</b> (la valeur de la vitesse augmente).</li>
<li><b>a et v de signes opposés</b> : le corps <b>ralentit</b>, il décélère (il freine).</li>
<li>a = 0 : vitesse constante (mouvement uniforme).</li>
</ul>
<p>Attention : <b>« freiner » ne veut pas dire « avoir une accélération négative » dans l'absolu</b> : si une voiture recule (v &lt; 0) en prenant de la vitesse, a est négative aussi, mais la valeur de la vitesse augmente. Ce qui compte, c'est la comparaison des signes.</p>
<p>On parle de mouvement <b>uniformément accéléré</b> quand l'accélération est <b>constante</b>. C'est un modèle, mais il convient à beaucoup de situations : la chute libre, un freinage avec des freins réguliers, le lancement d'une fusée sur une courte portion.</p>`
    },
    {
      type: "example",
      title: "Exemples : ordres de grandeur de l'accélération",
      html: `<p><b>Une voiture de sport</b> passe de 0 à 100 km/h en 8 s. 100 km/h ≈ 27,8 m/s : a = 27,8 / 8 ≈ <b>3,5 m/s²</b>. Une petite citadine, en 14 s, a a ≈ 2 m/s² ; une voiture électrique très puissante, en 2,5 s, a a ≈ 11 m/s² (plus que la pesanteur).</p>
<p><b>Un freinage</b> : une voiture à 72 km/h (20 m/s) s'arrête en 4 s : a = (0 − 20) / 4 = <b>−5 m/s²</b> (négative, parce que la vitesse est positive et diminue).</p>
<p><b>Un objet qui tombe</b> : sa vitesse augmente d'environ 9,8 m/s chaque seconde. Au bout de 1 s, il va à 9,8 m/s (35 km/h), au bout de 2 s à 19,6 m/s (70 km/h), au bout de 3 s à 29,4 m/s (106 km/h) : en l'absence d'air.</p>
<p><b>Des accélérations record</b> : une Formule 1 passe de 0 à 100 km/h en 2,5 s environ. Dans les virages serrés et au freinage, les pilotes subissent des accélérations de plus de 4 à 5 fois la pesanteur.</p>`
    },
    {
      type: "remember",
      title: "Les lois du mouvement uniformément accéléré",
      html: `<p>Si l'accélération <b>a</b> est constante, avec une vitesse initiale <b>v₀</b> et une position initiale <b>s₀</b> à l'instant t = 0 :</p>
<ul>
<li><b>Loi de la vitesse</b> : <b>v = v₀ + a · t</b></li>
<li><b>Équation horaire</b> : <b>s = s₀ + v₀ · t + ½ · a · t²</b></li>
<li><b>Sans le temps</b> : <b>v² = v₀² + 2 · a · (s − s₀)</b></li>
</ul>
<p>Si le corps part arrêté (v₀ = 0) et de l'origine (s₀ = 0) : v = a t, s = ½ a t², v² = 2 a s. On obtient aussi la relation <b>s = (v₀ + v)/2 · t</b> : la distance est la vitesse <i>moyenne</i> (la moyenne arithmétique de v₀ et v) multipliée par le temps. Remarque : au cours du temps, la position augmente comme <b>t²</b> : ce n'est plus une droite, mais une <b>parabole</b>.</p>`
    },
    {
      type: "svg",
      title: "Le graphique vitesse-temps : une droite inclinée",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="60,250 460,250 460,50" fill="#bbf7d0" stroke="none"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="24" stroke="#1f2937" stroke-width="3"/>
<polygon points="570,250 558,244 558,256" fill="#1f2937"/><polygon points="60,24 54,36 66,36" fill="#1f2937"/>
<text x="540" y="276" font-size="16" fill="#1f2937" font-weight="bold">t (s)</text>
<text x="70" y="32" font-size="16" fill="#1f2937" font-weight="bold">v (m/s)</text>
<line x1="60" y1="250" x2="460" y2="50" stroke="#166534" stroke-width="5"/>
<line x1="460" y1="250" x2="460" y2="50" stroke="#6b7280" stroke-width="2" stroke-dasharray="6 5"/>
<text x="456" y="274" font-size="16" fill="#1f2937" font-weight="bold">5</text>
<text x="26" y="56" font-size="16" fill="#1f2937" font-weight="bold">20</text>
<text x="120" y="228" font-size="16" fill="#14532d" font-weight="bold">Aire = ½ · 5 · 20 = 50 m</text>
<text x="290" y="130" font-size="16" fill="#166534" font-weight="bold">pente = a = 4 m/s²</text>
<text x="290" y="154" font-size="16" fill="#1f2937">(départ arrêté)</text>
</svg>`,
      caption: "La pente de la droite v-t est l'accélération ; l'aire sous la droite est la distance parcourue. Ici : départ arrêté, a = 4 m/s² pendant 5 s ⇒ vitesse finale 20 m/s et distance 50 m."
    },
    {
      type: "svg",
      title: "Le graphique position-temps : une parabole",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="24" stroke="#1f2937" stroke-width="3"/>
<polygon points="570,250 558,244 558,256" fill="#1f2937"/><polygon points="60,24 54,36 66,36" fill="#1f2937"/>
<text x="540" y="276" font-size="16" fill="#1f2937" font-weight="bold">t (s)</text>
<text x="70" y="32" font-size="16" fill="#1f2937" font-weight="bold">s (m)</text>
<polyline points="60,250 100,248 140,242 180,232 220,218 260,200 300,178 340,152 380,122 420,88 460,50" fill="none" stroke="#7c3aed" stroke-width="5"/>
<circle cx="140" cy="242" r="5" fill="#7c3aed"/><circle cx="220" cy="218" r="5" fill="#7c3aed"/><circle cx="300" cy="178" r="5" fill="#7c3aed"/><circle cx="380" cy="122" r="5" fill="#7c3aed"/><circle cx="460" cy="50" r="5" fill="#7c3aed"/>
<text x="340" y="212" font-size="16" fill="#6d28d9" font-weight="bold">s = ½ a t² = 2 t²</text>
<text x="340" y="236" font-size="16" fill="#1f2937">(a = 4 m/s², départ arrêté)</text>
<text x="76" y="140" font-size="16" fill="#1f2937">La courbe devient</text>
<text x="76" y="162" font-size="16" fill="#1f2937">de plus en plus raide :</text>
<text x="76" y="184" font-size="16" fill="#1f2937">la vitesse augmente</text>
</svg>`,
      caption: "Dans le mouvement uniformément accéléré avec départ arrêté, la distance augmente comme t² : 2 m en 1 s, 8 m en 2 s, 18 m en 3 s, 32 m en 4 s, 50 m en 5 s."
    },
    {
      type: "quiz",
      title: "Mini-quiz : vitesse et accélération",
      questions: [
        { type: "num", q: "Un scooter part arrêté et, au bout de 5 s, a une vitesse de 10 m/s. Quelle est son accélération moyenne ?", answer: 2, unit: "m/s²", explain: "a = Δv / Δt = 10 / 5 = 2 m/s²." },
        { type: "num", q: "Un corps avec a = 3 m/s² part arrêté. Quelle est sa vitesse au bout de 6 s ?", answer: 18, unit: "m/s", explain: "v = a t = 3 · 6 = 18 m/s." },
        { type: "num", q: "Une voiture part arrêtée avec a = 2 m/s². Combien de mètres parcourt-elle en 10 s ?", answer: 100, unit: "m", explain: "s = ½ a t² = ½ · 2 · 100 = 100 m." },
        { type: "tf", q: "Dans le graphique vitesse-temps, l'aire sous la courbe représente la distance parcourue.", answer: true, explain: "L'aire est la somme des v·Δt : le déplacement total." }
      ]
    },
    {
      type: "text",
      title: "Le freinage et la distance d'arrêt",
      html: `<p>Une application fondamentale de la troisième formule. Une voiture a une vitesse initiale v₀ et freine avec une décélération constante de valeur <b>a</b> (accélération −a) jusqu'à l'arrêt (v = 0) :</p>
<ul>
<li><b>Durée de freinage</b> : 0 = v₀ − a t, donc <b>t = v₀ / a</b>.</li>
<li><b>Distance de freinage</b> : 0 = v₀² − 2 a s, donc <b>s = v₀² / (2 a)</b>.</li>
</ul>
<p><b>La distance de freinage augmente comme le carré de la vitesse</b> ! Si la vitesse double, la distance est <b>multipliée par quatre</b> ; si elle triple, par 9. Avec a = 5 m/s² :</p>
<table>
<tr><th>Vitesse</th><th>v₀ (m/s)</th><th>Distance de freinage</th></tr>
<tr><td>30 km/h</td><td>8,3</td><td>≈ 7 m</td></tr>
<tr><td>50 km/h</td><td>13,9</td><td>≈ 19 m</td></tr>
<tr><td>90 km/h</td><td>25</td><td>= 62,5 m</td></tr>
<tr><td>130 km/h</td><td>36,1</td><td>≈ 130 m</td></tr>
</table>
<p>À cela s'ajoute la distance parcourue pendant le <b>temps de réaction</b> (environ 1 s, à vitesse constante) : à 130 km/h, cela fait 36 m de plus. Au total, <b>distance d'arrêt ≈ 166 m</b>. C'est pourquoi les limitations de vitesse sont plus sévères là où il y a des piétons : percuté à 30 km/h, un piéton a de bonnes chances de survivre ; à 50 km/h, beaucoup moins.</p>`
    },
    {
      type: "example",
      title: "Exemple : un problème complet",
      html: `<p><b>Problème</b> : un train roule à 54 km/h et freine avec une décélération constante de 0,5 m/s². Au bout de combien de temps s'arrête-t-il et quelle distance parcourt-il ?</p>
<ol>
<li>Conversion : 54 km/h = 54 / 3,6 = 15 m/s.</li>
<li>Durée : t = v₀ / a = 15 / 0,5 = <b>30 s</b>.</li>
<li>Distance : s = v₀² / (2 a) = 225 / 1 = <b>225 m</b> (ou bien s = v₀ t / 2 = 15 · 30 / 2 = 225 m : vitesse moyenne 7,5 m/s pendant 30 s).</li>
</ol>
<p><b>Un autre</b> : une voiture part arrêtée et accélère à 3 m/s² jusqu'à 30 m/s (108 km/h). Quelle distance lui faut-il ? s = v² / (2a) = 900 / 6 = <b>150 m</b>, en t = v / a = 10 s.</p>`
    },
    {
      type: "text",
      title: "La chute libre",
      html: `<p>Dans le <b>vide</b>, tout corps lâché se déplace avec la <b>même accélération</b>, quels que soient sa masse, sa forme et sa matière : l'<b>accélération de la pesanteur</b> <b>g ≈ 9,8 m/s²</b> (valeur normale 9,80665 ; sur Terre, elle varie légèrement, d'environ 9,78 à l'équateur à environ 9,83 aux pôles). Dans les exercices, on utilise souvent 9,8 ou 10 m/s² pour simplifier.</p>
<p>La <b>chute libre</b> est un mouvement uniformément accéléré avec a = g. Pour un corps lâché sans vitesse à une hauteur h :</p>
<ul>
<li>Vitesse au bout de t : <b>v = g t</b></li>
<li>Distance parcourue : <b>s = ½ g t²</b></li>
<li>Durée de chute d'une hauteur h : <b>t = √(2h / g)</b></li>
<li>Vitesse à l'impact : <b>v = √(2 g h)</b></li>
</ul>
<p><b>Exemple</b> : un plongeur saute de 10 m. t = √(2 · 10 / 9,8) ≈ 1,43 s et v = 9,8 · 1,43 ≈ 14 m/s = <b>50 km/h</b> quand il touche l'eau.</p>
<p><b>Lancer vers le haut</b> : tu lances une balle vers le haut à 19,6 m/s. Le mouvement est uniformément accéléré avec a = −g (la pesanteur freine la montée) : la vitesse diminue de 9,8 m/s chaque seconde, s'annule au bout de <b>2 s</b> (point le plus haut, h = v₀² / 2g = 19,6 m), puis la balle retombe et repasse par ta main au bout de 4 s avec la vitesse opposée (−19,6 m/s). La montée et la descente sont symétriques.</p>
<p>En réalité, l'<b>air</b> freine la chute avec une résistance qui augmente avec la vitesse : un parachutiste en chute, bras écartés, cesse d'accélérer vers 55 m/s (200 km/h) : il a atteint sa <b>vitesse limite</b>. Une plume tombe lentement pour la même raison.</p>`
    },
    {
      type: "svg",
      title: "La règle des nombres impairs de Galilée",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="150" x2="560" y2="150" stroke="#9ca3af" stroke-width="3"/>
<circle cx="60" cy="150" r="9" fill="#dc2626"/>
<circle cx="85" cy="150" r="9" fill="#ea580c"/>
<circle cx="160" cy="150" r="9" fill="#ca8a04"/>
<circle cx="285" cy="150" r="9" fill="#16a34a"/>
<circle cx="460" cy="150" r="9" fill="#2563eb"/>
<g font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="60" y="124">t = 0</text><text x="85" y="104">1 s</text><text x="160" y="124">2 s</text><text x="285" y="124">3 s</text><text x="460" y="124">4 s</text>
</g>
<g font-size="16" text-anchor="middle" fill="#1f2937">
<text x="85" y="186">1</text><text x="160" y="186">4</text><text x="285" y="186">9</text><text x="460" y="186">16</text>
<text x="122" y="226" fill="#b45309" font-weight="bold">3</text><text x="222" y="226" fill="#b45309" font-weight="bold">5</text><text x="372" y="226" fill="#b45309" font-weight="bold">7</text>
<text x="72" y="226" fill="#b45309" font-weight="bold">1</text>
</g>
<text x="40" y="262" font-size="16" fill="#1f2937">Distances totales : 1, 4, 9, 16 (carrés). Par seconde : 1, 3, 5, 7 (impairs).</text>
<text x="40" y="30" font-size="16" fill="#1f2937">Une bille part arrêtée de l'origine et accélère : chaque seconde, elle va plus loin.</text>
</svg>`,
      caption: "Galilée découvrit que, pendant des durées égales, les distances parcourues sont entre elles comme les nombres impairs 1 : 3 : 5 : 7…, et donc que les distances totales sont comme les carrés des temps."
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Galilée contre Aristote",
      html: `<p>Pendant presque 2000 ans, on a cru <b>Aristote</b> : les corps lourds tombent plus vite que les corps légers. <b>Galilée</b> comprit que ce n'était pas le cas : dans le vide, ils tombent ensemble. Comme la chute libre était trop rapide pour être mesurée avec les instruments du XVIIe siècle, il utilisa un <b>plan incliné</b> pour « ralentir » la chute (peu incliné, la bille descend lentement) et mesura les durées avec une horloge à eau. Il trouva que les distances augmentent comme le carré des temps. Il publia ses résultats dans les <i>Discours et démonstrations mathématiques concernant deux sciences nouvelles</i> (1638). La légende de l'expérience du haut de la tour de Pise est attribuée à son élève Vincenzo Viviani : rien ne prouve que Galilée l'ait vraiment réalisée.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le marteau et la plume sur la Lune",
      html: `<p>Le 2 août 1971, pendant la mission <b>Apollo 15</b>, l'astronaute <b>David Scott</b> lâcha sur la Lune un marteau et une plume de faucon, devant les caméras. Sur la Lune, il n'y a pas d'air, et l'accélération de la pesanteur vaut environ 1,62 m/s² (un sixième de celle de la Terre) : les deux objets touchèrent le sol ensemble. Scott déclara : « M. Galilée avait raison ». À toi de vérifier : si tu mesures 1,7 m, un objet qui tombe de tes mains met 0,59 s sur Terre, mais 1,45 s sur la Lune.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre le mouvement accéléré",
      intro: "Accélérer est une sensation de tous les jours : tu la sens dans le ventre quand la voiture démarre. Voici d'autres façons de la voir.",
      tabs: [
        {
          label: "🎢 La sensation du corps",
          html: `<p>L'accélération se <b>ressent</b> : quand la voiture démarre, tu te sens poussé contre le siège ; quand elle freine, vers l'avant ; dans un ascenseur qui monte, tu te sens plus lourd au démarrage, plus léger à l'arrêt. Tu ne sens pas la vitesse (en avion à 900 km/h, tu es tranquille), mais tu <b>ressens</b> ses variations. C'est pourquoi l'accélération se mesure aussi en « g » : une accélération de 1 g vaut 9,8 m/s², celle que tu ressens quand tu es immobile sur la Terre. Les astronautes subissent environ 3 g au décollage ; un pilote de chasse jusqu'à 9 g.</p>`
        },
        {
          label: "📋 Tableau d'une chute",
          html: `<p>Avec g ≈ 9,8 m/s², pour un corps lâché sans vitesse :</p>
<table><tr><th>t (s)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>v (m/s)</th><td>0</td><td>9,8</td><td>19,6</td><td>29,4</td><td>39,2</td></tr><tr><th>s (m)</th><td>0</td><td>4,9</td><td>19,6</td><td>44,1</td><td>78,4</td></tr></table>
<p>Observe : la vitesse augmente de 9,8 chaque seconde (une droite sur le graphique v-t) ; la distance augmente beaucoup plus vite : 4,9 → 19,6 → 44,1 → 78,4, soit 1 : 4 : 9 : 16.</p>`
        },
        {
          label: "🧮 L'aire du triangle",
          html: `<p>Une façon géométrique de retenir s = ½ a t² : sur le graphique v-t, pour un départ arrêté, la vitesse forme une droite. La distance parcourue est l'<b>aire du triangle</b> sous la droite : base t, hauteur v = a t, donc aire = ½ · t · a t = <b>½ a t²</b>. Si tu pars avec une vitesse initiale v₀, à l'aire du triangle s'ajoute celle du rectangle v₀ · t situé en dessous : s = v₀ t + ½ a t². Aucune formule à apprendre par cœur : il suffit de savoir calculer une aire !</p>`
        }
      ]
    },
    {
      type: "widget",
      title: "Accélère, ralentit ou va à vitesse constante ?",
      widget: "classify",
      options: { groups: ["Accélère (|v| augmente)", "Ralentit (|v| diminue)", "Vitesse constante"], items: [
        ["v = +10 m/s et a = +2 m/s²", 0],
        ["v = +10 m/s et a = −2 m/s²", 1],
        ["v = −10 m/s et a = −2 m/s²", 0],
        ["v = −10 m/s et a = +2 m/s²", 1],
        ["v = +30 m/s et a = 0", 2],
        ["Une pierre en chute libre (sans air)", 0],
        ["Une voiture qui freine à un feu rouge", 1]
      ] },
      caption: "Règle : si v et a ont le même signe, le corps accélère ; s'ils ont des signes opposés, il ralentit."
    },
    {
      type: "conceptMap",
      title: "Carte : le mouvement uniformément accéléré",
      nodes: [
        { id: "acc", label: "Accélération", x: 50, y: 6, color: "#6366f1", html: "a = Δv / Δt, en m/s².", why: "Elle mesure à quelle rapidité la vitesse change. Introduite au XVIIe siècle par Galilée, qui fut le premier à distinguer la vitesse de sa variation : une idée qui échappait à l'intuition des Grecs." },
        { id: "mua", label: "Mouvement uniformément accéléré", x: 50, y: 32, color: "#a855f7", html: "Accélération constante : v affine en t, s du second degré en t.", why: "C'est le mouvement le plus simple après le mouvement uniforme : la « variation régulière de la vitesse ». Newton montrera qu'une force constante produit exactement une accélération constante." },
        { id: "vt", label: "Graphique v-t", x: 18, y: 56, color: "#16a34a", html: "Droite inclinée : pente = a, aire = distance.", why: "La distance est l'aire parce que chaque petit intervalle apporte v·Δt : additionner les aires des rectangles, c'est l'idée de l'intégrale." },
        { id: "st", label: "Graphique s-t", x: 82, y: 56, color: "#ef4444", html: "Parabole : s = s₀ + v₀t + ½at².", why: "La vitesse augmente, donc la pente de la courbe augmente : une courbe de plus en plus raide, une parabole. Galilée trouva 1 : 3 : 5 : 7." },
        { id: "cad", label: "Chute libre", x: 82, y: 82, color: "#0ea5e9", html: "a = g ≈ 9,8 m/s², indépendante de la masse.", why: "Dans le vide, tous les corps tombent ensemble (Galilée) : un corps plus lourd est plus attiré, mais il a aussi plus d'inertie, et les deux effets se compensent. Newton l'expliquera avec F = ma et la gravitation." },
        { id: "fre", label: "Freinage et distance d'arrêt", x: 18, y: 82, color: "#f59e0b", html: "s = v₀² / (2a) : elle augmente comme le carré de v₀.", why: "Elle découle de v² = v₀² + 2as. C'est la raison scientifique des limitations de vitesse et des distances de sécurité." },
        { id: "uni", label: "Depuis le mouvement uniforme", x: 50, y: 94, color: "#14b8a6", html: "Avec a = 0, les formules redonnent s = s₀ + v t.", why: "Le mouvement uniforme est le cas particulier a = 0 : chaque formule du mouvement accéléré le contient." }
      ],
      edges: [
        ["acc", "mua", "constante, donne le"],
        ["mua", "vt", "se lit sur le"],
        ["mua", "st", "se lit sur le"],
        ["mua", "cad", "cas a = g"],
        ["mua", "fre", "cas a < 0"],
        ["mua", "uni", "généralise le"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : chute et freinage",
      questions: [
        { type: "num", q: "Une pierre tombe sans vitesse initiale pendant 3 s (g = 10 m/s², sans air). Combien de mètres a-t-elle parcourus ?", answer: 45, unit: "m", explain: "s = ½ g t² = 5 · 9 = 45 m." },
        { type: "num", q: "Une voiture à 20 m/s freine avec une décélération de 5 m/s². Combien de mètres parcourt-elle avant de s'arrêter ?", answer: 40, unit: "m", explain: "s = v₀² / (2a) = 400 / 10 = 40 m." },
        { type: "mc", q: "Si la vitesse initiale d'un freinage double, la distance d'arrêt…", options: ["Double", "Est multipliée par quatre", "Reste la même"], answer: 1, explain: "s = v₀² / (2a) : le carré de la vitesse multiplie la distance par quatre." },
        { type: "tf", q: "Dans le vide, une plume et un marteau lâchés ensemble arrivent au sol au même instant.", answer: true, explain: "Sans air, l'accélération de chute est la même pour tous les corps." }
      ]
    }
  ],
  glossary: [
    { t: "Accélération", d: "Variation de la vitesse par unité de temps : a = Δv/Δt, en m/s²." },
    { t: "Mouvement uniformément accéléré", d: "Mouvement rectiligne à accélération constante." },
    { t: "Décélération", d: "Accélération qui diminue la valeur de la vitesse (signe opposé à v)." },
    { t: "Chute libre", d: "Mouvement d'un corps soumis uniquement à la pesanteur : a = g ≈ 9,8 m/s²." },
    { t: "Accélération de la pesanteur", d: "Accélération g d'un corps en chute libre ; sur Terre ≈ 9,8 m/s²." },
    { t: "Distance de freinage", d: "Distance parcourue par un corps qui freine jusqu'à l'arrêt : s = v₀²/(2a)." },
    { t: "Vitesse limite", d: "Vitesse constante atteinte quand la résistance de l'air compense le poids." },
    { t: "Parabole", d: "Courbe du graphique s-t du mouvement uniformément accéléré : s augmente comme t²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "L'unité de l'accélération dans le Système international est…", options: ["m/s", "m/s²", "m²/s"], answer: 1, explain: "Le m/s², c'est-à-dire des mètres par seconde à chaque seconde." },
      { type: "num", q: "Une moto passe de 0 à 27 m/s en 9 s. Quelle est son accélération moyenne ?", answer: 3, unit: "m/s²", explain: "27 / 9 = 3 m/s²." },
      { type: "num", q: "Un corps part avec v₀ = 4 m/s et a = 2 m/s². Quelle est sa vitesse au bout de 5 s ?", answer: 14, unit: "m/s", explain: "v = 4 + 2 · 5 = 14 m/s." },
      { type: "num", q: "Une voiture part arrêtée avec a = 4 m/s². Combien de mètres parcourt-elle en 5 s ?", answer: 50, unit: "m", explain: "s = ½ · 4 · 25 = 50 m." },
      { type: "tf", q: "Le graphique position-temps du mouvement uniformément accéléré est une droite.", answer: false, explain: "C'est une parabole : s dépend du carré du temps." },
      { type: "num", q: "De quelle hauteur doit tomber un objet pour toucher le sol au bout de 2 s ? (g = 9,8 m/s²)", answer: 19.6, tol: 0.1, unit: "m", explain: "h = ½ · 9,8 · 4 = 19,6 m." },
      { type: "num", q: "Un train à 30 m/s freine avec a = −1,5 m/s². Au bout de combien de secondes s'arrête-t-il ?", answer: 20, unit: "s", explain: "t = v₀ / |a| = 30 / 1,5 = 20 s." },
      { type: "mc", q: "Une balle est lancée vers le haut. Au point le plus haut…", options: ["Vitesse nulle, accélération −g", "Vitesse et accélération nulles", "Accélération nulle et vitesse maximale"], answer: 0, explain: "La vitesse s'annule un instant, mais la pesanteur continue d'agir : a = −g." },
      { type: "text", q: "Comment s'appelle le savant qui étudia la chute des corps avec le plan incliné au XVIIe siècle ?", answer: ["galilée", "galilee", "galileo", "galileo galilei", "galilei"], explain: "Galilée (Galileo Galilei), dans les Discours (1638)." },
      { type: "order", q: "Range dans l'ordre les étapes pour calculer la distance de freinage.", items: ["Convertis la vitesse en m/s", "Repère v₀ et la décélération a", "Applique s = v₀² / (2a)", "Vérifie l'unité : des mètres"], explain: "On travaille d'abord en unités SI, puis on applique la formule et on vérifie le résultat." }
    ]
  }
});
