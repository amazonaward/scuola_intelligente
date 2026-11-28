TOPIC('fr', {
  id: "l1-geo-popolazione",
  title: "La population mondiale",
  intro: "En novembre 2022, les êtres humains ont dépassé les <b>8 milliards</b>. Comment en est-on arrivé là ? Pourquoi naît-il beaucoup d'enfants dans certains pays et très peu dans d'autres ? Et pourquoi la moitié de l'humanité vit-elle dans quelques zones très denses ? La <b>démographie</b> étudie le nombre, l'âge et la répartition des personnes : elle t'aide à comprendre l'économie, l'école, la santé et l'avenir.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Combien sommes-nous et comment avons-nous augmenté ?",
      html: `<p>Il a fallu presque toute l'histoire humaine pour que la population mondiale atteigne le <b>premier milliard</b> (vers <b>1804</b>), puis elle a accéléré de façon vertigineuse :</p>
<ul>
<li>1 milliard : vers <b>1804</b></li>
<li>2 milliards : <b>1927</b> (123 ans plus tard)</li>
<li>4 milliards : <b>1974</b></li>
<li>6 milliards : <b>1999</b></li>
<li>8 milliards : <b>novembre 2022</b> (estimation de l'ONU)</li>
</ul>
<p>Le dernier milliard est arrivé en seulement <b>11 à 12 ans environ</b>. La cause n'est pas que les femmes ont plus d'enfants (au contraire, la <b>fécondité</b> mondiale a baissé), mais qu'on <b>meurt beaucoup moins</b> : l'hygiène, les vaccins, les antibiotiques, l'eau potable et une meilleure alimentation ont fait baisser la mortalité, surtout infantile. L'<b>espérance de vie</b> mondiale à la naissance est passée d'environ 30-35 ans en 1800 à plus de <b>70 ans</b> aujourd'hui.</p>
<p>Le premier à réfléchir à la croissance démographique fut l'économiste anglais <b>Thomas Malthus</b>, qui affirma en <b>1798</b> que la population croissait selon une progression géométrique (1, 2, 4, 8…) et les ressources alimentaires seulement selon une progression arithmétique (1, 2, 3, 4…), et que la faim et les guerres étaient donc inévitables. Il n'avait pas prévu le progrès technique (engrais, machines, nouvelles semences) qui a multiplié les récoltes. Aujourd'hui, le problème est plus souvent la <b>répartition</b> de la nourriture que sa quantité, ainsi que la <b>durabilité</b> environnementale.</p>`
    },
    {
      type: "widget",
      title: "La frise chronologique : les milliards",
      widget: "timeline",
      options: {
        unit: "ans",
        events: [
          { year: 1804, label: "1 milliard", icon: "👶" },
          { year: 1927, label: "2 milliards", icon: "👨‍👩‍👧" },
          { year: 1960, label: "3 milliards", icon: "🏙️" },
          { year: 1974, label: "4 milliards", icon: "🌍" },
          { year: 1987, label: "5 milliards", icon: "📈" },
          { year: 1999, label: "6 milliards", icon: "🌐" },
          { year: 2011, label: "7 milliards", icon: "📱" },
          { year: 2022, label: "8 milliards", icon: "🚀" }
        ]
      },
      caption: "Plus on s'approche du présent, plus les milliards arrivent vite : une accélération sans précédent dans l'histoire humaine."
    },
    {
      type: "text",
      title: "2. Les indicateurs démographiques",
      html: `<p>Pour décrire une population, on utilise quelques indicateurs fondamentaux :</p>
<ul>
<li><b>Taux de natalité</b> : naissances pour 1 000 habitants en un an (ex. Italie environ 6-7 ‰ ; Niger environ 45 ‰).</li>
<li><b>Taux de mortalité</b> : décès pour 1 000 habitants en un an (Italie environ 11-12 ‰).</li>
<li><b>Solde naturel</b> = natalité − mortalité. En Italie, il est <b>négatif</b> : il meurt plus de personnes qu'il n'en naît (depuis 2015 environ ; en 2023, les naissances ont été d'environ 380 000, un minimum historique).</li>
<li><b>Indice de fécondité</b> (ou nombre moyen d'enfants par femme). Pour qu'une population reste stable, il faut environ <b>2,1 enfants par femme</b> (« seuil de renouvellement des générations »). Moyenne mondiale : environ 2,3. Italie : environ <b>1,2</b> ; Corée du Sud : moins de <b>0,8</b>, le minimum mondial ; Niger : plus de <b>6</b>.</li>
<li><b>Mortalité infantile</b> : décès avant un an pour 1 000 naissances vivantes (Italie environ 2-3 ‰ ; Afrique subsaharienne plus de 50 ‰ en moyenne).</li>
<li><b>Espérance de vie à la naissance</b> : Japon et Italie au-dessus de 83-84 ans ; Tchad, Nigeria et République centrafricaine autour de 53-55 ans.</li>
<li><b>Indice de vieillissement</b> : personnes âgées (plus de 65 ans) pour 100 jeunes (0-14 ans). En Italie, il dépasse 190 : les personnes âgées sont presque deux fois plus nombreuses que les jeunes.</li>
</ul>
<p>La croissance totale dépend du <b>solde naturel</b> et du <b>solde migratoire</b> (immigrants − émigrants).</p>`
    },
    {
      type: "example",
      title: "Exemple concret : calculer un taux",
      html: `<p>Un pays compte <b>60 millions</b> d'habitants. En un an naissent <b>420 000</b> enfants et meurent <b>700 000</b> personnes. Calcule la natalité, la mortalité et le solde naturel.</p>
<ul>
<li>Natalité = 420 000 ÷ 60 000 000 × 1 000 = <b>7 ‰</b></li>
<li>Mortalité = 700 000 ÷ 60 000 000 × 1 000 ≈ <b>11,7 ‰</b></li>
<li>Solde naturel = 420 000 − 700 000 = <b>−280 000</b> personnes, soit environ −4,7 ‰</li>
</ul>
<p>La population diminue de 280 000 personnes par an pour des causes naturelles (comme si une ville de 280 000 habitants disparaissait chaque année). Pour la maintenir stable, il faudrait un solde migratoire positif équivalent, ou une hausse des naissances.</p>`
    },
    {
      type: "text",
      title: "3. La transition démographique",
      html: `<p>En étudiant les pays européens, les démographes (Warren Thompson en 1929, Frank Notestein en 1945) ont décrit un modèle en <b>quatre phases</b>, la <b>transition démographique</b>, au cours de laquelle un pays passe de « beaucoup de naissances et beaucoup de décès » à « peu de naissances et peu de décès » :</p>
<ol>
<li><b>Phase préindustrielle</b> : natalité <b>élevée</b>, mortalité <b>élevée</b>. La population augmente peu (Europe jusqu'au XVIIIe siècle, quelques zones isolées aujourd'hui).</li>
<li><b>Phase d'expansion</b> : la mortalité <b>baisse</b> (médecine, hygiène), la natalité reste élevée : c'est l'<b>explosion démographique</b> (Europe au XIXe siècle ; aujourd'hui l'Afrique subsaharienne).</li>
<li><b>Phase de ralentissement</b> : la natalité <b>baisse</b> à son tour (urbanisation, scolarisation des femmes, contraception, coût des enfants) : la croissance ralentit (Amérique latine, Inde, une grande partie de l'Asie).</li>
<li><b>Phase de maturité</b> : natalité <b>faible</b>, mortalité <b>faible</b>. Croissance presque nulle ou négative ; vieillissement (Europe, Japon, Corée).</li>
</ol>
<p>Certains chercheurs proposent une cinquième phase, où la natalité descend <b>sous</b> la mortalité et où la population <b>diminue</b> (Italie, Japon, Chine depuis 2022).</p>`
    },
    {
      type: "svg",
      title: "Le modèle de la transition démographique",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="50" y1="250" x2="570" y2="250" stroke="#111827" stroke-width="2"/>
<line x1="50" y1="30" x2="50" y2="250" stroke="#111827" stroke-width="2"/>
<path d="M50 60 L170 60 C220 60 250 100 300 150 C360 200 420 225 570 225" fill="none" stroke="#2563eb" stroke-width="5"/>
<path d="M50 65 L130 65 C180 65 200 150 250 200 C300 235 400 240 570 240" fill="none" stroke="#dc2626" stroke-width="5"/>
<path d="M170 60 C220 60 250 100 300 150 C360 200 420 225 570 225 L570 240 C400 240 300 235 250 200 C200 150 180 65 130 65 Z" fill="#fde68a" opacity="0.6"/>
<line x1="170" y1="250" x2="170" y2="30" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="300" y1="250" x2="300" y2="30" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="420" y1="250" x2="420" y2="30" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="110" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Phase 1</text>
<text x="235" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Phase 2</text>
<text x="360" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Phase 3</text>
<text x="495" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Phase 4</text>
<text x="60" y="48" font-size="15" fill="#2563eb" font-weight="bold">natalité</text>
<text x="100" y="95" font-size="15" fill="#dc2626" font-weight="bold">mortalité</text>
<text x="240" y="150" font-size="14" fill="#92400e" font-weight="bold">croissance</text>
<text x="420" y="20" font-size="14" text-anchor="middle" fill="#111827">temps et développement →</text>
</svg>`,
      caption: "La zone jaune entre les deux courbes représente l'accroissement naturel : il est maximal pendant la phase 2, quand la mortalité a déjà baissé mais que la natalité est encore élevée."
    },
    {
      type: "quiz",
      title: "Mini-quiz : indicateurs et transition",
      questions: [
        { type: "mc", q: "Combien d'enfants par femme faut-il (environ) pour qu'une population reste stable ?", options: ["1,0", "2,1", "4,0"], answer: 1, explain: "Le seuil de renouvellement est d'environ 2,1 : un peu plus de 2, car tous les enfants n'atteignent pas l'âge adulte." },
        { type: "mc", q: "Dans quelle phase de la transition la croissance est-elle maximale ?", options: ["Phase 1", "Phase 2", "Phase 4"], answer: 1, explain: "Pendant la phase 2, la mortalité a déjà baissé mais la natalité est encore élevée." },
        { type: "num", q: "Dans un pays de 10 millions d'habitants, 150 000 enfants naissent en un an. Quel est le taux de natalité (en ‰) ?", answer: 15, tol: 0, unit: "‰", explain: "150 000 ÷ 10 000 000 × 1 000 = 15 pour mille." }
      ]
    },
    {
      type: "text",
      title: "4. La pyramide des âges",
      html: `<p>La <b>pyramide des âges</b> est un graphique à barres horizontales : chaque barre représente une tranche d'âge (en général par groupes de 5 ans), avec les hommes à gauche et les femmes à droite. Sa forme révèle la situation démographique d'un pays :</p>
<ul>
<li><b>Pyramide en expansion</b> (base large, sommet étroit) : beaucoup de jeunes, natalité élevée, mortalité élevée à l'âge adulte (Niger, Mali, Somalie, Afghanistan). Population très jeune (âge médian autour de 15-16 ans).</li>
<li><b>Pyramide stationnaire</b> (forme presque rectangulaire) : natalité et mortalité faibles et proches.</li>
<li><b>Pyramide en régression</b> (base étroite, renflement aux âges moyens et élevés) : peu de jeunes et beaucoup de personnes âgées (Italie, Japon, Allemagne, Corée). L'âge médian des Italiens est d'environ <b>48 ans</b>, l'un des plus élevés au monde.</li>
</ul>
<p>Les conséquences se voient dans la vie réelle : dans un pays jeune, il faut des écoles et du travail pour des millions de jeunes (et un <b>dividende démographique</b> peut apparaître si les jeunes trouvent un emploi) ; dans un pays vieillissant, les dépenses de <b>retraites et de santé</b> augmentent, les travailleurs manquent, des écoles et des villages ferment.</p>`
    },
    {
      type: "svg",
      title: "Trois pyramides des âges comparées",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="100" y="22" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">En expansion</text>
<text x="300" y="22" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Stationnaire</text>
<text x="500" y="22" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">En régression</text>
<g fill="#38bdf8" stroke="#075985">
<rect x="30" y="230" width="140" height="20"/>
<rect x="45" y="205" width="110" height="20"/>
<rect x="58" y="180" width="84" height="20"/>
<rect x="70" y="155" width="60" height="20"/>
<rect x="78" y="130" width="44" height="20"/>
<rect x="86" y="105" width="28" height="20"/>
<rect x="92" y="80" width="16" height="20"/>
<rect x="96" y="55" width="8" height="20"/>
</g>
<g fill="#38bdf8" stroke="#075985">
<rect x="235" y="230" width="130" height="20"/>
<rect x="232" y="205" width="136" height="20"/>
<rect x="230" y="180" width="140" height="20"/>
<rect x="232" y="155" width="136" height="20"/>
<rect x="236" y="130" width="128" height="20"/>
<rect x="244" y="105" width="112" height="20"/>
<rect x="256" y="80" width="88" height="20"/>
<rect x="276" y="55" width="48" height="20"/>
</g>
<g fill="#38bdf8" stroke="#075985">
<rect x="460" y="230" width="80" height="20"/>
<rect x="450" y="205" width="100" height="20"/>
<rect x="440" y="180" width="120" height="20"/>
<rect x="430" y="155" width="140" height="20"/>
<rect x="435" y="130" width="130" height="20"/>
<rect x="445" y="105" width="110" height="20"/>
<rect x="455" y="80" width="90" height="20"/>
<rect x="470" y="55" width="60" height="20"/>
</g>
<text x="100" y="275" font-size="14" text-anchor="middle" fill="#111827">Niger, Mali</text>
<text x="300" y="275" font-size="14" text-anchor="middle" fill="#111827">États-Unis (environ)</text>
<text x="500" y="275" font-size="14" text-anchor="middle" fill="#111827">Italie, Japon</text>
<text x="20" y="245" font-size="14" fill="#111827">0</text>
<text x="20" y="70" font-size="14" fill="#111827">80+</text>
</svg>`,
      caption: "Sur l'axe vertical figure l'âge (en bas les enfants, en haut les personnes âgées), la largeur des barres indique le nombre de personnes. Dessins schématiques (pas à l'échelle)."
    },
    {
      type: "text",
      title: "5. Où vit l'humanité : répartition et densité",
      html: `<p>Les êtres humains ne sont pas répartis de façon uniforme. La <b>densité de population</b> se calcule en divisant le nombre d'habitants par la superficie (habitants/km²) :</p>
<ul>
<li>moyenne mondiale : environ <b>60 hab./km²</b> (calculée sur les terres émergées) ;</li>
<li><b>Bangladesh</b> : plus de 1 100 hab./km², parmi les grands pays les plus denses du monde ;</li>
<li><b>Italie</b> : environ <b>195</b> hab./km² (avec des valeurs très différentes entre la Lombardie et la Sardaigne ou le Val d'Aoste) ;</li>
<li><b>Mongolie</b> : environ <b>2</b> hab./km² ; <b>Groenland</b> : environ 0,03 ; <b>Monaco</b> : près de 20 000.</li>
</ul>
<p>Plus de la <b>moitié</b> de l'humanité vit en Asie (environ 59 %), l'Afrique en accueille environ 18 %, l'Europe moins de 10 %. Les pays les plus peuplés sont l'<b>Inde</b> (qui a dépassé la Chine en 2023, environ 1,43 milliard), la <b>Chine</b>, les États-Unis, l'Indonésie, le Pakistan, le Nigeria et le Brésil.</p>
<p>Les zones les plus <b>peuplées</b> se trouvent là où il y a des <b>plaines fertiles</b>, des <b>fleuves</b> et des <b>climats doux</b> : vallées du Gange, du fleuve Jaune et du Yangzi, Java, plaine du Pô, Nil (en Égypte, <b>95 %</b> des habitants vivent le long du fleuve et dans le delta). Les zones <b>vides</b> sont les déserts, les forêts froides, la haute montagne et les régions polaires. Aujourd'hui, plus de la moitié de la population (environ <b>57 %</b>) vit en <b>ville</b>, et cette part augmente.</p>`
    },
    {
      type: "example",
      title: "Exemple concret : densité et espace par personne",
      html: `<p>L'<b>Italie</b> compte environ 59 millions d'habitants sur environ 302 000 km². Densité = 59 000 000 ÷ 302 000 ≈ <b>195 hab./km²</b>. En moyenne, chaque habitant dispose d'environ 5 100 m² (soit presque un demi-hectare).</p>
<p>La <b>Lombardie</b> compte environ 10 millions d'habitants sur environ 23 900 km² : densité ≈ <b>420 hab./km²</b>, plus du double de la moyenne nationale. Le <b>Val d'Aoste</b> compte environ 123 000 habitants sur 3 260 km² : densité ≈ <b>38 hab./km²</b>.</p>
<p>Attention : la densité est une <b>moyenne</b> et peut tromper. L'Égypte compte environ 100 millions d'habitants sur 1 million de km² (densité ≈ 100), mais presque tout le monde vit sur moins de 5 % du territoire : la densité « physiologique » (calculée sur les seules terres habitées ou cultivées) est bien plus élevée.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La Chine a appliqué la politique de l'enfant unique",
      html: `<p>De <b>1979</b> à <b>2015</b>, la Chine a imposé à presque toutes les familles de n'avoir qu'<b>un seul enfant</b>, pour freiner la croissance démographique. Le résultat a été une forte baisse de la natalité, mais aussi un vieillissement très rapide : aujourd'hui, la population chinoise a commencé à <b>diminuer</b> (depuis 2022) et beaucoup de jeunes doivent prendre en charge deux parents et quatre grands-parents. Depuis 2016, deux enfants sont autorisés, et trois depuis 2021.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Au Japon, 29 % des habitants ont plus de 65 ans",
      html: `<p>Le <b>Japon</b> est le pays le plus « vieux » parmi les grands pays : environ <b>29 %</b> des habitants ont plus de 65 ans (environ 24 % en Italie, moins de 3 % au Niger). Au Japon, on vend plus de couches pour adultes que pour bébés, et beaucoup de villages se vident. Les réponses : la <b>robotique</b> d'assistance, l'allongement de la vie professionnelle et (avec prudence) une plus grande ouverture à l'immigration.</p>`
    },
    {
      type: "text",
      title: "6. L'avenir : combien serons-nous ?",
      html: `<p>Les projections de l'ONU (<i>World Population Prospects 2024</i>) indiquent que la population mondiale pourrait atteindre un <b>pic d'environ 10,3 milliards</b> vers le milieu des <b>années 2080</b>, puis commencer à diminuer lentement. La raison : la fécondité baisse presque partout, même dans les pays les plus pauvres, plus vite qu'on ne le pensait.</p>
<p>La croissance future sera concentrée en <b>Afrique subsaharienne</b>, qui pourrait compter en 2100 près de la moitié des jeunes du monde, et en Asie du Sud ; dans de nombreux pays (Europe, Asie orientale), la population va <b>diminuer</b>. Les défis : créer des emplois pour des centaines de millions de jeunes Africains, garantir les retraites et l'aide aux personnes âgées dans les pays du Nord, utiliser les ressources de manière durable.</p>
<p>Attention : ce sont des <b>projections</b>, pas des prévisions certaines. Les démographes calculent différents scénarios (haut, moyen, bas) selon l'évolution de la fécondité.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la population mondiale",
      intro: "Les chiffres de la démographie sont gigantesques. Voici comment les rendre concrets.",
      tabs: [
        {
          label: "🏘️ Le village de 100 personnes",
          html: `<p>Si le monde était un village de <b>100 personnes</b>, avec les proportions actuelles : environ <b>59 vivraient en Asie</b> (dont environ 17 en Inde et 17 en Chine), <b>18 en Afrique</b>, <b>9 en Europe</b>, <b>8 en Amérique latine</b>, <b>5 en Amérique du Nord</b>, <b>moins de 1</b> en Océanie. Environ <b>57 vivraient en ville</b>. Environ <b>26 auraient moins de 15 ans</b> et <b>10 plus de 65 ans</b>. Ainsi, les milliards deviennent une histoire que tu peux te représenter.</p>`
        },
        {
          label: "🛁 La baignoire et les robinets",
          html: `<p>Imagine la population comme une baignoire. Les <b>naissances</b> sont le robinet, les <b>décès</b> la bonde. Pendant la phase 1, le robinet est grand ouvert et la bonde aussi : le niveau monte peu. Pendant la phase 2, on <b>resserre la bonde</b> (médecine) mais le robinet reste ouvert : la baignoire se remplit vite. Pendant la phase 3, on ferme aussi le robinet : le niveau se stabilise. Pendant la phase 5, le robinet est plus fermé que la bonde : le niveau baisse. Les migrants sont le second robinet, celui qui amène de l'eau de l'extérieur.</p>`
        },
        {
          label: "📊 Quel poids pour les jeunes ?",
          html: `<p>Compare les <b>âges médians</b> (l'âge qui partage la population en deux moitiés égales) : Niger environ <b>15 ans</b> (la moitié de la population a moins de 15 ans !), Inde environ 28, États-Unis environ 38, Italie environ 48, Japon environ 49. Imagine une classe de 20 personnes choisies au hasard : au Niger, 10 d'entre elles auraient moins de 15 ans ; au Japon, environ 2 sur 20 auraient moins de 15 ans et presque 6 plus de 65 ans. C'est un indicateur simple qui résume la pyramide.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : la dynamique de la population",
      nodes: [
        { id: "natalita", label: "Natalité et fécondité", x: 20, y: 8, color: "#2563eb", html: "Naissances pour 1 000 habitants ; enfants par femme.", why: "La fécondité baisse avec la scolarisation des femmes, l'urbanisation, la contraception, le coût des enfants et la baisse de la mortalité infantile (on fait moins d'enfants quand on est sûr qu'ils survivront)." },
        { id: "mortalita", label: "Mortalité et espérance de vie", x: 80, y: 8, color: "#dc2626", html: "Décès pour 1 000 habitants ; durée de vie moyenne.", why: "La baisse de la mortalité est due à l'hygiène publique, aux vaccins (le premier, contre la variole, fut mis au point par Edward Jenner en 1796), aux antibiotiques (pénicilline découverte par Fleming en 1928) et à une meilleure alimentation." },
        { id: "transizione", label: "Transition démographique", x: 50, y: 32, color: "#a855f7", html: "Du modèle « beaucoup de naissances, beaucoup de décès » à « peu de naissances, peu de décès ».", why: "Elle repose sur l'observation de l'Europe aux XIXe et XXe siècles ; ce n'est pas une loi mais un modèle : l'ordre des phases se répète dans de nombreux pays, mais les rythmes changent (la Corée du Sud l'a parcourue en 40 ans, la France en 150)." },
        { id: "piramide", label: "Pyramide des âges", x: 20, y: 58, color: "#f59e0b", html: "Répartition par âge et par sexe.", why: "Sa forme est la « mémoire » de l'histoire démographique : le baby-boom de l'après-guerre (1946-1964) ou la baisse de la natalité des années 1990 restent visibles pendant des décennies sous forme de renflements ou de creux dans la pyramide." },
        { id: "densita", label: "Répartition et densité", x: 80, y: 58, color: "#16a34a", html: "Où vivent les gens : plaines, fleuves, côtes, villes.", why: "Les premières civilisations sont nées le long des grands fleuves (Nil, Tigre-Euphrate, Indus, fleuve Jaune), car l'agriculture irriguée nourrit beaucoup de personnes par km² : la géographie de la population garde cet héritage." },
        { id: "migrazioni", label: "Migrations", x: 50, y: 78, color: "#ec4899", html: "Des déplacements qui modifient la population d'un lieu.", why: "Là où la population croît vite et où le travail et les ressources manquent, ou là où elle vieillit et où l'on a besoin de travailleurs, naissent des flux migratoires : la démographie est l'une des principales causes des migrations." },
        { id: "futuro", label: "Durabilité et avenir", x: 50, y: 95, color: "#14b8a6", html: "Pic vers 10,3 milliards, puis baisse.", why: "Le rapport Brundtland (1987) et l'Agenda 2030 (2015) relient la démographie à l'usage des ressources : ce qui compte, ce n'est pas seulement combien nous sommes, mais combien nous consommons (un habitant des États-Unis consomme bien plus de ressources qu'un habitant du Niger)." }
      ],
      edges: [
        ["natalita", "transizione", "baisse des naissances →"],
        ["mortalita", "transizione", "baisse des décès →"],
        ["transizione", "piramide", "modifie la"],
        ["transizione", "densita", "avec l'urbanisation"],
        ["piramide", "migrazioni", "les déséquilibres créent des"],
        ["densita", "migrazioni", "les déséquilibres créent des"],
        ["migrazioni", "futuro", "influencent l'"]
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>8 milliards de personnes (novembre 2022) ; croissance très rapide depuis 1800 grâce à la baisse de la mortalité.</li>
<li><b>Natalité</b> et <b>mortalité</b> (pour mille) ; <b>solde naturel</b> et <b>solde migratoire</b> ; <b>fécondité</b> (renouvellement = 2,1).</li>
<li><b>Transition démographique</b> : 4 phases ; Italie et Japon en phase de maturité/régression, Afrique subsaharienne en phase d'expansion.</li>
<li><b>Pyramide</b> : en expansion (Niger), stationnaire, en régression (Italie, Japon).</li>
<li><b>Densité</b> = habitants ÷ km² ; l'humanité vit surtout dans les plaines fertiles, près des fleuves et des côtes.</li>
<li>Pic estimé vers <b>10,3 milliards</b> dans les années 2080, puis baisse.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : densité et pyramides",
      questions: [
        { type: "num", q: "Un pays compte 2 millions d'habitants sur 40 000 km². Quelle est sa densité ?", answer: 50, tol: 0, unit: "hab./km²", explain: "2 000 000 ÷ 40 000 = 50 habitants par km²." },
        { type: "mc", q: "Quelle forme a la pyramide des âges d'un pays avec peu de jeunes et beaucoup de personnes âgées ?", options: ["En expansion", "En régression", "En triangle équilatéral"], answer: 1, explain: "La pyramide en régression a une base étroite : peu de naissances, beaucoup de personnes âgées." },
        { type: "tf", q: "L'Italie a un solde naturel positif.", answer: false, explain: "En Italie, les décès dépassent les naissances depuis des années : le solde naturel est négatif." }
      ]
    }
  ],
  glossary: [
    { t: "Démographie", d: "Discipline qui étudie la taille, la structure et l'évolution des populations humaines." },
    { t: "Taux de natalité", d: "Nombre de naissances pour 1 000 habitants en un an." },
    { t: "Taux de mortalité", d: "Nombre de décès pour 1 000 habitants en un an." },
    { t: "Solde naturel", d: "Différence entre les naissances et les décès sur une période." },
    { t: "Solde migratoire", d: "Différence entre les immigrants et les émigrants sur une période." },
    { t: "Indice de fécondité", d: "Nombre moyen d'enfants par femme en âge d'en avoir ; le seuil de renouvellement est d'environ 2,1." },
    { t: "Espérance de vie", d: "Nombre moyen d'années qu'un nouveau-né peut espérer vivre, dans les conditions de mortalité actuelles." },
    { t: "Transition démographique", d: "Passage d'une natalité et d'une mortalité élevées à une natalité et une mortalité faibles." },
    { t: "Pyramide des âges", d: "Graphique qui représente la population par tranches d'âge et par sexe." },
    { t: "Densité de population", d: "Rapport entre le nombre d'habitants et la superficie, en habitants par km²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quelle cause principale explique l'explosion démographique du siècle dernier ?", options: ["La hausse de la fécondité par femme", "La forte baisse de la mortalité", "La hausse des migrations"], answer: 1, explain: "La médecine, l'hygiène, les vaccins et la nourriture ont surtout réduit la mortalité infantile ; la fécondité, elle, a même diminué." },
      { type: "num", q: "Un pays compte 50 millions d'habitants ; en un an naissent 500 000 enfants. Quel est le taux de natalité (‰) ?", answer: 10, tol: 0, unit: "‰", explain: "500 000 ÷ 50 000 000 × 1 000 = 10 pour mille." },
      { type: "mc", q: "Quelle phase de la transition démographique se caractérise par une natalité élevée et une mortalité en forte baisse ?", options: ["Phase 1", "Phase 2", "Phase 4"], answer: 1, explain: "C'est la phase d'expansion, avec le plus fort accroissement naturel." },
      { type: "tf", q: "Thomas Malthus pensait que la population augmentait plus vite que les ressources alimentaires.", answer: true, explain: "En 1798, il affirma que la population croît selon une progression géométrique et la nourriture selon une progression arithmétique. Il ne prévit pas le progrès technique en agriculture." },
      { type: "mc", q: "Lequel de ces pays a une pyramide des âges en expansion ?", options: ["Le Japon", "L'Allemagne", "Le Niger"], answer: 2, explain: "Le Niger a une fécondité supérieure à 6 enfants par femme et une population très jeune." },
      { type: "text", q: "Comment s'appelle le rapport entre le nombre d'habitants et la superficie ?", answer: ["densité", "densité de population", "la densité", "densite"], explain: "La densité de population, en habitants par km²." },
      { type: "order", q: "Range dans l'ordre chronologique ces étapes.", items: ["1 milliard", "2 milliards", "4 milliards", "8 milliards"], explain: "1804, 1927, 1974, 2022." },
      { type: "mc", q: "Quelle région du monde connaîtra la plus forte croissance démographique dans les prochaines décennies ?", options: ["L'Afrique subsaharienne", "L'Europe", "Le Japon"], answer: 0, explain: "La fécondité en Afrique subsaharienne est encore élevée et la population continuera d'augmenter." },
      { type: "tf", q: "La densité de population d'un pays décrit toujours bien la répartition des habitants sur le territoire.", answer: false, explain: "C'est une moyenne : l'Égypte a une densité modeste, mais presque tout le monde vit le long du Nil et dans le delta." },
      { type: "mc", q: "Pourquoi la politique chinoise de l'enfant unique (1979-2015) a-t-elle créé des problèmes ?", options: ["Elle a accéléré le vieillissement de la population", "Elle a fait trop augmenter la natalité", "Elle a empêché l'urbanisation"], answer: 0, explain: "Elle a réduit rapidement les naissances ; aujourd'hui, peu de jeunes travailleurs doivent soutenir beaucoup de personnes âgées." }
    ]
  }
});
