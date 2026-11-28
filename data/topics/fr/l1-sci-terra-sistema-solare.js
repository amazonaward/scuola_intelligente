TOPIC('fr', {
  id: "l1-sci-terra-sistema-solare",
  title: "La Terre dans le système solaire",
  intro: "Nous sommes les passagers d'une sphère de roche qui file à environ 30 km par seconde autour d'une étoile. Comment le savons-nous ? Pendant des millénaires, l'humanité a cru le contraire : que la Terre était immobile au centre du cosmos. Dans cette leçon, nous découvrons comment est fait le <b>système solaire</b>, les <b>lois de Kepler</b> qui en gouvernent les mouvements et comment on est arrivé à mesurer la <b>forme et les dimensions de la Terre</b> avec des instruments très simples.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Notre famille d'astres",
      html: `<p>Le <b>système solaire</b> s'est formé il y a environ <b>4,6 milliards d'années</b> à partir de l'effondrement d'un nuage de gaz et de poussières (la <b>nébuleuse solaire</b>). Au centre s'est formé le Soleil ; la matière restante, aplatie en un disque en rotation, s'est agrégée en planètes, lunes, astéroïdes et comètes.</p>
<ul>
<li>Le <b>Soleil</b> est une étoile de petite taille (une « naine jaune ») mais il contient <b>99,86 %</b> de la masse du système. Son diamètre vaut environ 109 fois celui de la Terre. Il brille parce que, dans son cœur (environ 15 millions de degrés), l'hydrogène est transformé en hélium par <b>fusion nucléaire</b>.</li>
<li>Les <b>planètes</b> sont au nombre de huit. Quatre <b>telluriques</b> (rocheuses, petites, denses, proches du Soleil) : Mercure, Vénus, la Terre, Mars. Quatre <b>géantes</b> : les géantes <b>gazeuses</b> Jupiter et Saturne (hydrogène et hélium) et les géantes <b>glacées</b> Uranus et Neptune.</li>
<li>La <b>ceinture d'astéroïdes</b> entre Mars et Jupiter ; la <b>ceinture de Kuiper</b> au-delà de Neptune ; le très lointain <b>nuage d'Oort</b>, réservoir de comètes.</li>
<li>Les <b>planètes naines</b> (Pluton, Cérès, Éris...) : depuis 2006, l'Union astronomique internationale définit une planète comme un corps qui tourne autour du Soleil, est sphérique grâce à sa propre gravité et a « fait le ménage » sur son orbite. Pluton ne l'a pas fait : c'est donc une planète naine.</li>
</ul>
<p>Pourquoi les planètes proches du Soleil sont-elles rocheuses et les lointaines gazeuses ? Dans le disque primitif, près du Soleil, il faisait trop chaud pour que les gaz et les glaces se condensent : il ne resta que des métaux et des roches. Au-delà de la « ligne des glaces » (entre Mars et Jupiter), les protoplanètes purent accumuler de la glace et capturer de l'hydrogène et de l'hélium.</p>`
    },
    {
      type: "3d",
      title: "Le système solaire en mouvement",
      scene: "solar",
      options: { labels: true },
      caption: "Fais tourner la vue. Remarque que les planètes tournent presque dans le même plan et dans le même sens : c'est l'héritage du disque dont elles sont nées."
    },
    {
      type: "svg",
      title: "Les distances au Soleil",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#0f172a"/>
<circle cx="25" cy="150" r="22" fill="#facc15"/>
<g stroke="#334155" stroke-width="1" stroke-dasharray="4 4"><line x1="75" y1="40" x2="75" y2="260"/><line x1="105" y1="40" x2="105" y2="260"/><line x1="125" y1="40" x2="125" y2="260"/><line x1="170" y1="40" x2="170" y2="260"/></g>
<g>
<circle cx="75" cy="150" r="4" fill="#9ca3af"/><text x="75" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Me</text>
<circle cx="100" cy="150" r="7" fill="#fbbf24"/><text x="100" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Vé</text>
<circle cx="130" cy="150" r="8" fill="#3b82f6"/><text x="130" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Te</text>
<circle cx="170" cy="150" r="5" fill="#ef4444"/><text x="170" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Ma</text>
<circle cx="290" cy="150" r="22" fill="#d97706"/><text x="290" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Ju</text>
<circle cx="400" cy="150" r="18" fill="#eab308"/><text x="400" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Sa</text>
<circle cx="520" cy="150" r="12" fill="#22d3ee"/><text x="520" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Ur</text>
<circle cx="600" cy="150" r="12" fill="#2563eb"/><text x="600" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Ne</text>
</g>
<text x="320" y="30" font-size="16" text-anchor="middle" fill="#f8fafc" font-weight="bold">Distances moyennes au Soleil (tailles pas à l'échelle)</text>
<text x="320" y="270" font-size="14" text-anchor="middle" fill="#cbd5e1">0,39 · 0,72 · 1 · 1,52 · 5,2 · 9,6 · 19,2 · 30 ua</text>
</svg>`,
      caption: "Distances en unités astronomiques (ua). 1 ua = distance moyenne Terre-Soleil ≈ 149,6 millions de km. La lumière du Soleil la parcourt en environ 8 minutes et 20 secondes."
    },
    {
      type: "example",
      title: "À quelle distance est le Soleil, en temps-lumière ?",
      html: `<p>La lumière se propage à environ <b>300 000 km/s</b>. Distance Terre-Soleil : <b>149,6 millions de km</b>.</p>
<ol>
<li>t = d / v = 149 600 000 km / 300 000 km/s ≈ <b>499 s</b>.</li>
<li>499 s ≈ 8 minutes et 19 secondes.</li>
</ol>
<p>Cela signifie que lorsque tu regardes le Soleil, tu le vois tel qu'il était il y a plus de 8 minutes. Pour Neptune (30 ua), la lumière met environ 4 heures et demie : les signaux des sondes Voyager, à plus de 20 milliards de km, mettent plus de 18 heures à arriver.</p>`
    },
    {
      type: "text",
      title: "Du géocentrisme à l'héliocentrisme",
      html: `<p>Pour voir comment la façon de penser a changé, reconstitue les étapes :</p>
<ul>
<li><b>Aristote</b> puis <b>Ptolémée</b> (IIe siècle apr. J.-C., <i>Almageste</i>) : la Terre est immobile au centre et tout tourne autour d'elle. Pour expliquer le mouvement « rétrograde » des planètes (qui semblent parfois revenir en arrière), Ptolémée utilisait des cercles sur des cercles, les <b>épicycles</b>.</li>
<li><b>Aristarque de Samos</b> (IIIe siècle av. J.-C.) avait déjà proposé un système avec le Soleil au centre, mais il ne fut pas suivi.</li>
<li><b>Copernic</b> (<i>De revolutionibus</i>, 1543) : le Soleil est au centre et la Terre est une planète qui tourne sur elle-même et autour du Soleil. Le mouvement rétrograde devient un effet de perspective : la Terre, plus rapide, dépasse Mars.</li>
<li><b>Galilée</b> (1610), avec la lunette : les quatre lunes de Jupiter (qui tournent autour de Jupiter, pas de la Terre), les phases de Vénus, les taches solaires, les cratères de la Lune.</li>
<li><b>Kepler</b> (1609-1619) et <b>Newton</b> (1687) donnèrent au modèle ses lois mathématiques.</li>
</ul>`
    },
    {
      type: "decision",
      title: "Nous sommes en 1610 : la Terre est-elle immobile ou en mouvement ?",
      html: `<p>Tu viens de lire le <i>Sidereus Nuncius</i> de Galilée. Il affirme avoir vu, avec une lunette, <b>quatre « étoiles » qui tournent autour de Jupiter</b> et que Vénus présente des phases comme la Lune, du « croissant » à la « pleine ». L'Église et presque tous les professeurs d'université défendent le système de Ptolémée, où tout tourne autour de la Terre. Qu'en penses-tu ?</p>`,
      question: "Qu'aurais-tu pensé ?",
      options: [
        { label: "Galilée se trompe : ce sont des défauts des lentilles", outcome: "C'était la réaction de beaucoup à l'époque. Mais d'autres astronomes, y compris des jésuites du Collège romain, reproduisirent les observations et les confirmèrent." },
        { label: "Tout ne tourne pas autour de la Terre, mais je ne sais pas si le Soleil est le centre", outcome: "Raisonnable : les lunes de Jupiter montrent qu'il existe des centres de mouvement autres que la Terre. Le système hybride de Tycho Brahe (les planètes autour du Soleil et le Soleil autour de la Terre) expliquait lui aussi les phases de Vénus." },
        { label: "Le modèle de Copernic est le plus simple et le plus cohérent", outcome: "C'est la conclusion à laquelle arrivèrent Galilée et Kepler, même si la preuve décisive (la parallaxe stellaire) n'arriva qu'en 1838 avec Bessel." }
      ],
      answer: 2,
      explain: "Les observations de Galilée (1610) ne prouvaient pas à elles seules l'héliocentrisme, mais montraient que le modèle de Ptolémée ne tenait pas. En 1633, Galilée fut jugé par l'Inquisition et contraint d'abjurer. Le système de Copernic fut ensuite démontré par les lois de Kepler et la gravitation de Newton."
    },
    {
      type: "text",
      title: "Les trois lois de Kepler",
      html: `<p>Johannes <b>Kepler</b> (1571–1630) hérita des observations de Mars, d'une précision sans précédent, de <b>Tycho Brahe</b>. Après des années de calculs, il découvrit que les orbites ne sont pas des cercles :</p>
<ol>
<li><b>Première loi (1609)</b> : chaque planète décrit une <b>ellipse</b> dont le Soleil occupe l'un des deux <b>foyers</b>.</li>
<li><b>Deuxième loi (1609)</b> : le segment qui relie la planète au Soleil <b>balaie des aires égales pendant des durées égales</b>. Conséquence : la planète va plus vite quand elle est proche du Soleil (<b>périhélie</b>) et plus lentement quand elle en est loin (<b>aphélie</b>).</li>
<li><b>Troisième loi (1619)</b> : le carré de la période de révolution est proportionnel au cube du demi-grand axe de l'orbite : <b>T² / a³ = constante</b>. Avec T en années et a en ua, la constante vaut 1 : <b>T² = a³</b>.</li>
</ol>
<p>En 1687, Newton montra que les trois lois découlent d'une seule force : la <b>gravitation universelle</b>, F = G · m₁ · m₂ / r².</p>`
    },
    {
      type: "svg",
      title: "L'ellipse et la loi des aires",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<ellipse cx="320" cy="150" rx="260" ry="100" fill="none" stroke="#2563eb" stroke-width="3"/>
<circle cx="220" cy="150" r="14" fill="#facc15" stroke="#b45309" stroke-width="2"/>
<circle cx="420" cy="150" r="4" fill="#475569"/>
<text x="220" y="185" font-size="14" text-anchor="middle" fill="#1f2937">Soleil (foyer)</text>
<text x="420" y="170" font-size="14" text-anchor="middle" fill="#475569">autre foyer</text>
<path d="M220 150 L560 150 A260 100 0 0 0 543 106 Z" fill="#fde68a" opacity="0.9" stroke="#b45309" stroke-width="1"/>
<path d="M220 150 L83 128 A260 100 0 0 0 80 175 Z" fill="#bbf7d0" opacity="0.9" stroke="#15803d" stroke-width="1"/>
<circle cx="580" cy="150" r="9" fill="#3b82f6"/>
<circle cx="60" cy="150" r="9" fill="#3b82f6"/>
<text x="580" y="185" font-size="14" text-anchor="middle" fill="#1f2937">aphélie</text>
<text x="60" y="185" font-size="14" text-anchor="middle" fill="#1f2937">périhélie</text>
<text x="320" y="30" font-size="16" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Les deux aires colorées sont égales : même durée de parcours</text>
<text x="320" y="285" font-size="14" text-anchor="middle" fill="#475569">(l'excentricité est très exagérée : l'orbite de la Terre est presque un cercle)</text>
</svg>`,
      caption: "Plus la planète est proche du Soleil, plus elle va vite : pour balayer la même aire avec un rayon plus court, il faut plus de vitesse ; pour l'aire plus large, il en faut moins."
    },
    {
      type: "example",
      title: "Utiliser la troisième loi : la période de Mars",
      html: `<p>Mars a un demi-grand axe <b>a = 1,52 ua</b>. Combien dure son année ?</p>
<ol>
<li>T² = a³ = 1,52³ ≈ 3,51</li>
<li>T = √3,51 ≈ <b>1,87 année</b> terrestre (environ 687 jours).</li>
</ol>
<p>Pour Jupiter, a = 5,2 ua : T² = 140,6 → T ≈ <b>11,9 ans</b>. Et pour un astéroïde de période 8 ans ? a³ = 64 → a = <b>4 ua</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : système solaire et Kepler",
      questions: [
        { type: "mc", q: "En quel point de son orbite une planète a-t-elle la vitesse la plus grande ?", options: ["Aphélie", "Périhélie", "Elle est toujours la même"], answer: 1, explain: "Deuxième loi : plus elle est proche du Soleil, plus elle est rapide." },
        { type: "num", q: "Une planète a un demi-grand axe a = 4 ua. Combien vaut sa période T (en années) ?", answer: 8, tol: 0.05, unit: "ans", explain: "T² = 4³ = 64 → T = 8 ans." },
        { type: "tf", q: "Le Soleil contient environ 99,86 % de la masse du système solaire.", answer: true, explain: "Les planètes, toutes ensemble, représentent moins de 0,2 % (Jupiter à lui seul en contient plus des deux tiers)." }
      ]
    },
    {
      type: "text",
      title: "La forme et les dimensions de la Terre",
      html: `<p>On savait que la Terre est une sphère bien avant Christophe Colomb. Les philosophes grecs apportaient déjà des preuves :</p>
<ul>
<li>pendant les <b>éclipses de Lune</b>, l'ombre de la Terre sur le disque lunaire est toujours ronde (<b>Aristote</b>, IVe siècle av. J.-C.) ;</li>
<li>les <b>navires qui disparaissent à l'horizon</b> en commençant par la coque : d'abord la coque disparaît, puis les voiles ;</li>
<li>en allant vers le sud, de nouvelles étoiles apparaissent, et la hauteur de l'étoile Polaire change avec la latitude ;</li>
<li>aujourd'hui : les photos prises depuis l'espace, le tour du monde, le GPS.</li>
</ul>
<p>Plus précisément, la Terre n'est pas une sphère parfaite mais un <b>géoïde</b> : elle est aplatie aux pôles à cause de sa rotation. Rayon équatorial <b>6378 km</b>, rayon polaire <b>6357 km</b> (différence d'environ 21 km, soit 0,3 %). Circonférence à l'équateur environ <b>40 075 km</b> ; le long d'un méridien environ 40 008 km. 1° de latitude mesure environ 111 km : c'est de là que vient la définition originale du <b>mètre</b> (1791 : un dix-millionième du quart de méridien, du pôle à l'équateur).</p>`
    },
    {
      type: "example",
      title: "Ératosthène mesure la Terre (vers 240 av. J.-C.)",
      html: `<p>Ératosthène, directeur de la Bibliothèque d'Alexandrie, apprit qu'à <b>Syène</b> (aujourd'hui Assouan), le jour du solstice d'été à midi, le Soleil éclairait le fond des puits : il était au <b>zénith</b>. Au même moment, à <b>Alexandrie</b>, un bâton vertical (gnomon) projetait une ombre : le Soleil formait un angle d'environ <b>7,2°</b> avec la verticale, soit 1/50 de tour complet.</p>
<ol>
<li>La distance Syène-Alexandrie est donc 1/50 de la circonférence terrestre.</li>
<li>La distance (mesurée par les « bématistes », qui comptaient les pas) était d'environ <b>5000 stades</b>.</li>
<li>Circonférence = 5000 × 50 = <b>250 000 stades</b>.</li>
</ol>
<p>Avec un stade compris entre 157 et 185 m, le résultat se situe entre 39 000 et 46 000 km : étonnamment proche de la vraie valeur de 40 000 km, avec un bâton, une ombre et un peu de géométrie.</p>`
    },
    {
      type: "widget",
      title: "Le globe",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f0f9ff"/><circle cx="200" cy="150" r="110" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/><ellipse cx="200" cy="150" rx="110" ry="30" fill="none" stroke="#dc2626" stroke-width="2"/><ellipse cx="200" cy="150" rx="40" ry="110" fill="none" stroke="#16a34a" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="280" stroke="#475569" stroke-width="2" stroke-dasharray="6 4"/><ellipse cx="200" cy="92" rx="70" ry="14" fill="none" stroke="#7c3aed" stroke-width="2"/></svg>`,
        spots: [
          { x: 200, y: 20, label: "Axe de rotation" },
          { x: 310, y: 150, label: "Équateur" },
          { x: 200, y: 78, label: "Parallèle" },
          { x: 160, y: 220, label: "Méridien" }
        ]
      },
      caption: "Le quadrillage géographique : les parallèles (cercles parallèles à l'équateur) mesurent la latitude, les méridiens (d'un pôle à l'autre) la longitude."
    },
    {
      type: "3d",
      title: "L'intérieur de la Terre",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#92400e", label: "Croûte (5-70 km)" },
        { r: 0.9, color: "#ea580c", label: "Manteau (jusqu'à 2900 km)" },
        { r: 0.55, color: "#f59e0b", label: "Noyau externe (liquide)" },
        { r: 0.2, color: "#fef08a", label: "Noyau interne (solide)" }
      ] },
      caption: "Le rayon terrestre est d'environ 6371 km. On le connaît grâce aux ondes sismiques des séismes, qui changent de vitesse en traversant des matériaux différents (les proportions sont ici schématiques)."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les dimensions",
      intro: "Les distances astronomiques échappent à l'intuition. Essaie avec ces échelles.",
      tabs: [
        {
          label: "⚽ À l'échelle 1/10 milliards",
          html: `<p>Réduisons tout 10 milliards de fois : le Soleil devient une balle d'environ 14 cm, la Terre un grain de 1,3 mm à 15 m de distance. Jupiter est une bille de 1,4 cm à 78 m ; Neptune est à 450 m. L'étoile la plus proche, Proxima du Centaure, serait à plus de 4000 km, comme de Rome à Moscou et au-delà. Le système solaire est presque entièrement vide.</p>`
        },
        {
          label: "🏎️ À 100 km/h",
          html: `<p>Une voiture à 100 km/h mettrait environ <b>1,5 million d'heures</b>, soit environ <b>170 ans</b>, pour aller de la Terre au Soleil. La Lune (384 400 km), en environ 160 jours. La lumière fait 7,5 fois le tour de l'équateur en une seconde.</p>`
        },
        {
          label: "📅 Le calendrier cosmique",
          html: `<p>Comprimons les 13,8 milliards d'années d'histoire de l'Univers en une année : le Big Bang a lieu le 1er janvier ; le système solaire naît vers le 2 septembre ; la vie apparaît à la mi-septembre ; les dinosaures dominent fin décembre ; <b>Homo sapiens</b> apparaît quelques minutes avant minuit le 31 décembre. Toute l'histoire humaine écrite tient dans les dernières secondes.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Sommes-nous la tête en bas ?",
      html: `<p>Il n'existe pas de « haut » absolu dans l'espace : le « bas », c'est là où pointe la gravité, c'est-à-dire vers le centre de la Terre. Un Australien n'est « à l'envers » par rapport à un Européen que sur nos cartes, qui placent le nord en haut par convention (autrefois, beaucoup de cartes médiévales avaient l'est en haut, d'où le mot <b>s'orienter</b>, de « Orient »). Autre curiosité : la Terre ne tourne pas seulement autour du Soleil à environ 30 km/s : le Soleil lui-même tourne autour du centre de la Voie lactée à environ 220 km/s et en fait le tour en environ 230 millions d'années.</p>`
    },
    {
      type: "curiosity",
      title: "Pourquoi Pluton n'est plus une planète",
      html: `<p>Pluton fut découvert en 1930 par <b>Clyde Tombaugh</b>. Mais dans les années 2000, on découvrit d'autres corps de taille semblable dans la ceinture de Kuiper : <b>Éris</b>, en 2005, est même un peu plus massive que Pluton. Soit on déclarait planètes des dizaines d'objets, soit on redéfinissait la catégorie. En 2006, l'Union astronomique internationale choisit la seconde voie et créa la catégorie des <b>planètes naines</b>. En 2015, la sonde <b>New Horizons</b> nous a envoyé des photos spectaculaires de la surface de Pluton, avec une immense plaine de glace d'azote en forme de cœur.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte du système solaire : touche les nœuds et découvre pourquoi",
      nodes: [
        { id: "nebulosa", label: "Nébuleuse solaire", x: 50, y: 6, color: "#a855f7", html: "Le nuage de gaz et de poussières d'où tout est né, il y a 4,6 milliards d'années.", why: "L'hypothèse de la nébuleuse fut proposée par <b>Kant</b> (1755) et <b>Laplace</b> (1796) pour expliquer pourquoi les planètes tournent toutes dans le même sens et presque dans le même plan ; l'âge de 4,57 milliards d'années vient de la datation radiométrique des météorites les plus anciennes." },
        { id: "sole", label: "Soleil", x: 20, y: 28, color: "#facc15", html: "L'étoile centrale.", why: "L'énergie solaire naît de la fusion de l'hydrogène en hélium : <b>Bethe</b> (1938-39) en expliqua les réactions. C'est pourquoi le Soleil a une durée de vie limitée : il lui reste environ 5 milliards d'années de combustible." },
        { id: "pianeti", label: "Planètes", x: 50, y: 40, color: "#3b82f6", html: "Quatre telluriques et quatre géantes.", why: "La différence de composition dépend de la température du disque : en deçà de la ligne des glaces, seulement des roches et des métaux ; au-delà, aussi des glaces et des gaz." },
        { id: "keplero", label: "Lois de Kepler", x: 80, y: 28, color: "#22c55e", html: "Orbites elliptiques, aires égales, T² ∝ a³.", why: "Kepler chercha pendant des années à faire coller les données de Tycho Brahe avec des orbites circulaires, mais il restait toujours un écart de 8 minutes d'arc : se fiant aux données plus qu'à la tradition, il découvrit les ellipses." },
        { id: "newton", label: "Gravitation universelle", x: 80, y: 56, color: "#ef4444", html: "F = G·m₁·m₂/r².", why: "Newton (1687) montra que la même force qui fait tomber une pomme gouverne le mouvement de la Lune et des planètes, et il en déduisit mathématiquement les trois lois de Kepler." },
        { id: "terra", label: "Forme de la Terre", x: 20, y: 62, color: "#06b6d4", html: "Un géoïde légèrement aplati aux pôles.", why: "La rotation crée une force centrifuge maximale à l'équateur, et la roche s'écoule en un renflement. En 1735, les expéditions françaises en Laponie et au Pérou mesurèrent la longueur d'un degré de méridien et confirmèrent l'aplatissement prévu par Newton." },
        { id: "eratostene", label: "Ératosthène", x: 20, y: 86, color: "#f59e0b", html: "Première mesure de la circonférence terrestre.", why: "Il utilisa la géométrie : les angles alternes-internes formés par des rayons solaires parallèles, et la distance entre deux villes, donnent la fraction de circonférence." },
        { id: "geo", label: "Géocentrisme et héliocentrisme", x: 55, y: 80, color: "#14b8a6", html: "La Terre ou le Soleil au centre ?", why: "Copernic (1543), Galilée (1610), Kepler (1609) et Newton (1687) construisirent, l'un après l'autre, le modèle moderne. La confirmation observationnelle de la révolution annuelle de la Terre, la parallaxe stellaire, arriva en 1838 avec Bessel." }
      ],
      edges: [
        ["nebulosa", "sole", "forme"],
        ["nebulosa", "pianeti", "forme"],
        ["pianeti", "keplero", "décrites par"],
        ["keplero", "newton", "expliquées par"],
        ["pianeti", "terra", "dont"],
        ["terra", "eratostene", "mesurée par"],
        ["geo", "keplero", "mène à"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : la Terre",
      questions: [
        { type: "mc", q: "Qui a mesuré le premier la circonférence terrestre avec des ombres et de la géométrie ?", options: ["Ératosthène", "Ptolémée", "Kepler"], answer: 0, explain: "Ératosthène de Cyrène, bibliothécaire à Alexandrie (IIIe siècle av. J.-C.)." },
        { type: "mc", q: "La forme de la Terre est mieux décrite comme…", options: ["une sphère parfaite", "un géoïde, aplati aux pôles", "un disque"], answer: 1, explain: "La rotation fait gonfler l'équateur : le rayon équatorial dépasse de 21 km le rayon polaire." },
        { type: "tf", q: "Pluton est une planète naine.", answer: true, explain: "Depuis 2006, selon la définition de l'UAI." }
      ]
    }
  ],
  glossary: [
    { t: "Système solaire", d: "Le Soleil et tous les corps qui tournent autour de lui." },
    { t: "Unité astronomique (ua)", d: "Distance moyenne Terre-Soleil, environ 149,6 millions de km." },
    { t: "Planète tellurique", d: "Planète rocheuse et petite : Mercure, Vénus, la Terre, Mars." },
    { t: "Planète géante", d: "Planète de grande taille et de faible densité : Jupiter, Saturne, Uranus, Neptune." },
    { t: "Planète naine", d: "Corps sphérique qui tourne autour du Soleil mais n'a pas fait le ménage sur son orbite (Pluton, Cérès)." },
    { t: "Ellipse", d: "Courbe fermée pour laquelle la somme des distances aux deux foyers est constante." },
    { t: "Périhélie / aphélie", d: "Points de l'orbite le plus proche et le plus éloigné du Soleil." },
    { t: "Troisième loi de Kepler", d: "T² / a³ est la même pour toutes les planètes." },
    { t: "Géoïde", d: "La forme réelle de la Terre, aplatie aux pôles." },
    { t: "Latitude / longitude", d: "Coordonnées angulaires qui situent un point sur la Terre par rapport à l'équateur et au méridien de Greenwich." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quel est le corps le plus massif du système solaire ?", options: ["Jupiter", "Le Soleil", "La Terre"], answer: 1, explain: "Le Soleil possède 99,86 % de la masse." },
      { type: "mc", q: "Quelles sont les planètes gazeuses ?", options: ["Jupiter et Saturne", "Uranus et Neptune", "Mars et Vénus"], answer: 0, explain: "Jupiter et Saturne sont surtout faites d'hydrogène et d'hélium ; Uranus et Neptune sont des géantes glacées." },
      { type: "tf", q: "Selon Kepler, les orbites des planètes sont des ellipses dont le Soleil occupe un foyer.", answer: true, explain: "C'est la première loi de Kepler." },
      { type: "num", q: "Une planète a un demi-grand axe a = 9 ua. Quelle est sa période en années ?", answer: 27, unit: "ans", explain: "T² = 9³ = 729 → T = 27 ans." },
      { type: "mc", q: "En janvier, la Terre est au périhélie, donc…", options: ["elle se déplace plus vite", "il fait plus chaud dans l'hémisphère Nord", "elle est plus loin du Soleil"], answer: 0, explain: "Proche du Soleil, elle va plus vite (deuxième loi). Les saisons ne dépendent pas de la distance mais de l'inclinaison de l'axe." },
      { type: "num", q: "Si la lumière met 500 secondes pour aller du Soleil à la Terre, à combien de km se trouve le Soleil ? (c = 300 000 km/s)", answer: 150000000, tol: 1000000, unit: "km", explain: "d = c · t = 300 000 × 500 = 150 millions de km." },
      { type: "mc", q: "Quelle preuve de la sphéricité de la Terre Aristote a-t-il donnée ?", options: ["L'ombre circulaire de la Terre lors des éclipses de Lune", "Les photos prises depuis l'espace", "Les marées"], answer: 0, explain: "Seul un corps sphérique projette toujours une ombre circulaire." },
      { type: "text", q: "Qui a écrit en 1543 le De revolutionibus orbium coelestium ?", answer: ["copernic", "nicolas copernic", "nicolas copernik", "copernik"], explain: "Nicolas Copernic, qui proposa le système héliocentrique." },
      { type: "order", q: "Range les planètes par distance croissante au Soleil.", items: ["Mercure", "Terre", "Mars", "Jupiter", "Saturne"], explain: "Mercure 0,39 ua, Terre 1, Mars 1,52, Jupiter 5,2, Saturne 9,6." },
      { type: "mc", q: "Comment a-t-on pu étudier la structure interne de la Terre ?", options: ["Grâce aux ondes sismiques", "En creusant jusqu'au noyau", "Avec des télescopes"], answer: 0, explain: "Le forage le plus profond (Kola, environ 12 km) n'atteint même pas le manteau : on connaît l'intérieur grâce aux ondes sismiques." }
    ]
  }
});
