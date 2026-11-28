TOPIC('fr', {
  id: "l1-geo-citta",
  title: "Villes et urbanisation",
  intro: "Depuis 2007, pour la première fois dans l'histoire, plus de personnes vivent en <b>ville</b> qu'à la campagne dans le monde. Les villes occupent très peu d'espace (moins de 3 % des terres émergées), mais elles consomment la plus grande partie de l'énergie et produisent l'essentiel des richesses et des émissions. Comment naissent-elles, comment grandissent-elles, comment sont-elles organisées ? Et comment peuvent-elles devenir <b>durables</b> ?",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Qu'est-ce qu'une ville et comment naît-elle ?",
      html: `<p>Il n'existe pas de définition unique de la ville : les statistiques utilisent des seuils différents (au Danemark, 200 habitants suffisent ; au Japon, il en faut 50 000). En géographie, on appelle <b>ville</b> un établissement humain permanent, densément peuplé, dont les fonctions sont <b>autres qu'agricoles</b> (commerce, artisanat, pouvoir politique, culture, services) et qui exerce une influence sur le territoire environnant.</p>
<p>Les premières villes sont apparues il y a environ <b>5 000 à 6 000 ans</b> en <b>Mésopotamie</b> (<b>Uruk</b>, dans l'actuel Irak, l'une des plus anciennes, avec plusieurs dizaines de milliers d'habitants), puis peu après le long du Nil, de l'Indus (Mohenjo-daro) et du fleuve Jaune. Condition nécessaire : l'agriculture produisait un <b>surplus</b> de nourriture, ce qui permettait à une partie de la population de faire autre chose (artisans, prêtres, soldats, scribes). Les villes antiques se trouvaient près de l'eau, au croisement de voies de communication ou sur des hauteurs faciles à défendre.</p>
<p>L'<b>urbanisation</b> est le processus d'augmentation de la part de la population qui vit en ville. Elle a explosé avec la <b>révolution industrielle</b> : Londres, qui comptait environ 1 million d'habitants en 1800, en avait plus de 6 millions en 1900. Aujourd'hui, la croissance la plus rapide concerne l'<b>Asie</b> et l'<b>Afrique</b> : des villes comme Lagos (Nigeria) ou Dacca (Bangladesh) gagnent des centaines de milliers d'habitants chaque année.</p>`
    },
    {
      type: "text",
      title: "2. L'urbanisation en chiffres",
      html: `<ul>
<li>1950 : environ 30 % de la population mondiale vit en ville. <b>2007</b> : on dépasse les 50 %. Aujourd'hui : environ <b>57 %</b>. Prévision de l'ONU pour <b>2050</b> : environ <b>68 %</b>.</li>
<li>Amérique du Nord, Europe occidentale, Amérique latine : plus de 80 % d'urbains. En <b>Italie</b>, environ 71 %. Afrique et Asie du Sud : encore environ 45-50 %, mais avec une urbanisation très rapide.</li>
<li><b>Métropole</b> : grande ville dont l'aire d'influence s'étend aux communes voisines (<b>aire métropolitaine</b>, ou <b>conurbation</b> lorsque les agglomérations se rejoignent).</li>
<li><b>Mégapole</b> (ou mégaville) : plus de <b>10 millions</b> d'habitants. On en compte aujourd'hui environ 33 à 37. Les plus grandes : <b>Tokyo</b> (environ 37 millions dans l'aire métropolitaine), <b>Delhi</b> (plus de 30), <b>Shanghai</b>, <b>Dacca</b>, <b>São Paulo</b>, <b>Mexico</b>, <b>Le Caire</b>, <b>Pékin</b>, <b>Bombay</b>, <b>Osaka</b>. La plupart des mégapoles se trouvent en Asie et dans les pays en développement.</li>
<li><b>Mégalopole</b> : vaste région urbaine formée de plusieurs métropoles qui se rejoignent. Le terme a été rendu célèbre par le géographe français <b>Jean Gottmann</b> (1961) pour la côte nord-est des États-Unis, de <b>Boston à Washington</b> (« Boswash »), avec plus de 50 millions d'habitants. Autres exemples : l'axe <b>Tokyo-Osaka</b> (Tokaido), le <b>delta de la rivière des Perles</b> en Chine et, en Europe, la fameuse <b>« banane bleue »</b> (Londres-Benelux-Rhin-Milan).</li>
</ul>
<p>Les villes grandissent grâce à leur <b>solde naturel</b>, mais surtout grâce à l'<b>exode rural</b> : les paysans quittent la campagne (poussés par la mécanisation agricole et la pauvreté rurale, attirés par les salaires et les services) pour s'installer en ville.</p>`
    },
    {
      type: "3d",
      title: "Sur le globe : les mégapoles",
      scene: "globe",
      options: {
        points: [
          { lat: 35.7, lon: 139.7, label: "Tokyo", color: "#dc2626" },
          { lat: 28.6, lon: 77.2, label: "Delhi", color: "#dc2626" },
          { lat: 31.2, lon: 121.5, label: "Shanghai", color: "#dc2626" },
          { lat: 23.8, lon: 90.4, label: "Dacca", color: "#dc2626" },
          { lat: -23.5, lon: -46.6, label: "São Paulo", color: "#f59e0b" },
          { lat: 19.4, lon: -99.1, label: "Mexico", color: "#f59e0b" },
          { lat: 30.0, lon: 31.2, label: "Le Caire", color: "#f59e0b" },
          { lat: 19.1, lon: 72.9, label: "Bombay", color: "#dc2626" },
          { lat: 40.7, lon: -74.0, label: "New York", color: "#2563eb" },
          { lat: 6.5, lon: 3.4, label: "Lagos (en croissance rapide)", color: "#16a34a" },
          { lat: 41.9, lon: 12.5, label: "Rome", color: "#7c3aed" }
        ]
      },
      caption: "Rouge : mégapoles asiatiques ; orange : Amérique latine et Afrique du Nord ; vert : Lagos, l'une des villes les plus dynamiques du monde. Remarque que la plupart se trouvent en Asie."
    },
    {
      type: "svg",
      title: "La croissance de la population urbaine",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#111827" stroke-width="2"/>
<line x1="60" y1="30" x2="60" y2="250" stroke="#111827" stroke-width="2"/>
<rect x="85" y="190" width="70" height="60" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="185" y="160" width="70" height="90" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="285" y="125" width="70" height="125" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="385" y="95" width="70" height="155" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<rect x="485" y="60" width="70" height="190" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<text x="120" y="183" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">30%</text>
<text x="220" y="153" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">36%</text>
<text x="320" y="118" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">43%</text>
<text x="420" y="88" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">51%</text>
<text x="520" y="53" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">57%</text>
<text x="120" y="272" font-size="15" text-anchor="middle" fill="#111827">1950</text>
<text x="220" y="272" font-size="15" text-anchor="middle" fill="#111827">1970</text>
<text x="320" y="272" font-size="15" text-anchor="middle" fill="#111827">1985</text>
<text x="420" y="272" font-size="15" text-anchor="middle" fill="#111827">2007</text>
<text x="520" y="272" font-size="15" text-anchor="middle" fill="#111827">aujourd'hui</text>
<text x="300" y="20" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Part de la population mondiale vivant en ville (valeurs arrondies)</text>
</svg>`,
      caption: "L'urbanisation a progressé de façon constante : la population urbaine a dépassé la population rurale vers 2007. Les pourcentages sont approximatifs, d'après les estimations de l'ONU."
    },
    {
      type: "quiz",
      title: "Mini-quiz : chiffres et définitions",
      questions: [
        { type: "mc", q: "Quand la population urbaine a-t-elle dépassé pour la première fois la population rurale ?", options: ["1850", "1950", "Vers 2007"], answer: 2, explain: "Vers 2007, selon l'ONU, le seuil de 50 % de population urbaine a été franchi." },
        { type: "mc", q: "Combien d'habitants (environ) doit compter une mégapole ?", options: ["Plus de 1 million", "Plus de 10 millions", "Plus de 100 millions"], answer: 1, explain: "Par convention, une mégapole compte plus de 10 millions d'habitants." },
        { type: "text", q: "Comment appelle-t-on la région urbaine formée de plusieurs métropoles qui se rejoignent (par ex. Boston-Washington) ?", answer: ["mégalopole", "megalopole", "la mégalopole", "mégalopole (boswash)"], explain: "Une mégalopole, terme rendu célèbre par Jean Gottmann en 1961." }
      ]
    },
    {
      type: "text",
      title: "3. Comment une ville est-elle organisée ?",
      html: `<p>Les géographes ont proposé plusieurs <b>modèles</b> pour décrire la structure interne des villes :</p>
<ul>
<li><b>Modèle des zones concentriques</b> (Ernest Burgess, Chicago, 1925) : au centre le <b>CBD</b> (<i>Central Business District</i>, le quartier des affaires), puis une zone de transition, les quartiers ouvriers, les quartiers résidentiels des classes moyennes et enfin, en périphérie, les quartiers des navetteurs.</li>
<li><b>Modèle sectoriel</b> (Homer Hoyt, 1939) : la ville se développe en secteurs le long des grandes voies de communication (routes, voies ferrées, fleuves).</li>
<li><b>Modèle polynucléaire</b> (Harris et Ullman, 1945) : plusieurs centres (port, université, zone industrielle, centre commercial) aux fonctions différentes.</li>
</ul>
<p>Les principales <b>fonctions urbaines</b> sont l'habitat, le commerce, l'industrie, les services (école, santé, administration), la culture et les loisirs, les infrastructures et les transports. La ville est divisée en <b>quartiers</b> : centre historique, zones résidentielles, banlieues, zones industrielles, espaces verts.</p>
<p>Le <b>centre historique</b> des villes italiennes et européennes conserve souvent le plan médiéval (rues étroites, places, remparts), souvent issu de l'ancien <b>castrum romain</b> (deux rues perpendiculaires, le <i>cardo</i> et le <i>decumanus</i>, comme à Turin ou à Florence). Les villes nord-américaines ont au contraire un centre de gratte-ciel et un plan en <b>damier</b> (Manhattan). Les villes du monde musulman ont souvent une <b>médina</b> aux ruelles étroites autour de la mosquée et du marché (<i>souk</i>). Les villes d'Amérique latine ont été fondées par les Espagnols autour d'une <b>plaza mayor</b>.</p>`
    },
    {
      type: "svg",
      title: "Le modèle des zones concentriques de Burgess",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="170" cy="150" r="130" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<circle cx="170" cy="150" r="100" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<circle cx="170" cy="150" r="70" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<circle cx="170" cy="150" r="42" fill="#fdba74" stroke="#c2410c" stroke-width="2"/>
<circle cx="170" cy="150" r="18" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<text x="170" y="155" font-size="14" text-anchor="middle" fill="#ffffff" font-weight="bold">1</text>
<text x="170" y="115" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">2</text>
<text x="170" y="85" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">3</text>
<text x="170" y="52" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">4</text>
<text x="170" y="26" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">5</text>
<text x="340" y="55" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#dc2626">1</tspan> Quartier des affaires (CBD)</text>
<text x="340" y="95" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#c2410c">2</tspan> Zone de transition (petite industrie)</text>
<text x="340" y="135" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#b45309">3</tspan> Quartiers ouvriers</text>
<text x="340" y="175" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#15803d">4</tspan> Résidences des classes moyennes</text>
<text x="340" y="215" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#15803d">5</tspan> Zone des navetteurs</text>
<text x="340" y="265" font-size="14" fill="#6b7280">Modèle théorique (Chicago, 1925) : chaque ville réelle a sa forme.</text>
</svg>`,
      caption: "Le modèle concentrique est né de l'observation de Chicago : la ville grandit du centre vers l'extérieur et les groupes sociaux se répartissent en anneaux. Aujourd'hui, beaucoup de villes ont plusieurs centres."
    },
    {
      type: "text",
      title: "4. Problèmes et défis des villes",
      html: `<ul>
<li><b>Bidonvilles</b> (<i>slums</i>, <i>favelas</i>) : environ <b>1,1 milliard</b> de personnes vivent dans des quartiers informels, sans eau potable, sans égouts ni titre de propriété. <b>Dharavi</b> (Bombay), <b>Kibera</b> (Nairobi) et la <b>Rocinha</b> (Rio de Janeiro) sont parmi les plus connus. Mais ce sont aussi des lieux d'une grande vitalité économique : à Dharavi, des milliers de petites entreprises travaillent dans le recyclage, le cuir et la céramique.</li>
<li><b>Embouteillages et smog</b> : les villes concentrent les véhicules et les émissions. Delhi, Lahore et Dacca sont parmi les villes les plus polluées du monde ; en hiver, la plaine du Pô (Italie du Nord) présente souvent des taux de particules fines (PM10, PM2,5) supérieurs aux limites, car les montagnes et la faible ventilation font stagner l'air.</li>
<li><b>Îlot de chaleur urbain</b> : l'asphalte et le béton absorbent la chaleur et la végétation est rare, si bien que la ville peut être plus chaude que la campagne de <b>2 à 5 °C</b> le jour, et jusqu'à 8-10 °C certaines nuits d'été.</li>
<li><b>Artificialisation des sols</b> et <b>étalement urbain</b> (<i>urban sprawl</i>, expansion à faible densité) : construire sur les terres agricoles imperméabilise le sol et augmente le risque d'inondation ; en Italie, de nombreux hectares de sol disparaissent chaque jour.</li>
<li><b>Inégalités</b> et <b>ségrégation</b> (quartiers riches et quartiers pauvres), <b>gentrification</b> (un quartier se rénove et des habitants plus aisés s'y installent, tandis que les anciens habitants sont chassés par la hausse des loyers).</li>
<li><b>Déchets, bruit, logement</b> : traitement des ordures, coût des loyers, manque de logements.</li>
<li><b>Risques</b> : séismes, inondations, canicules ; les grandes villes côtières (Jakarta, Miami, Venise, Dacca) sont exposées à la montée de la mer. Jakarta s'enfonce à cause du pompage de l'eau souterraine, et l'Indonésie construit une nouvelle capitale, Nusantara, sur l'île de Bornéo.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple pratique : la circulation en ville",
      html: `<p>Pour amener 1 000 personnes au centre-ville, il faut :</p>
<ul>
<li>environ <b>800 voitures</b> (avec 1,2 personne par voiture) : elles occupent plus d'un kilomètre de route à deux voies ;</li>
<li>environ <b>12 bus</b> pleins ;</li>
<li>environ <b>2 tramways</b> (ou une seule rame de métro de 6 voitures).</li>
</ul>
<p>Ce sont des ordres de grandeur, mais ils montrent pourquoi les <b>transports en commun</b> sont l'outil le plus efficace pour les villes denses : ils utilisent moins d'espace, moins d'énergie et produisent moins d'émissions <i>par passager</i>. Un vélo occupe environ un dixième de l'espace d'une voiture en mouvement. C'est pourquoi beaucoup de villes (Copenhague, Amsterdam, Utrecht, Paris) ont développé les pistes cyclables et les zones piétonnes.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : quelle est la densité de ta ville ?",
      html: `<p>Une ville compte <b>150 000 habitants</b> sur <b>60 km²</b> ; une ville voisine en compte 150 000 sur <b>240 km²</b>.</p>
<ul>
<li>Densité de la première = 150 000 ÷ 60 = <b>2 500 hab./km²</b>.</li>
<li>Densité de la seconde = 150 000 ÷ 240 = <b>625 hab./km²</b>.</li>
</ul>
<p>Pour le même nombre d'habitants, la seconde occupe <b>quatre fois plus de sol</b> : il faut plus de routes, de canalisations, de lignes électriques et plus de kilomètres pour aller à l'école ou au travail. Voilà pourquoi beaucoup d'urbanistes défendent la <b>ville compacte</b>. Mais la densité ne fait pas tout : une ville dense a aussi besoin de parcs et d'espaces publics de qualité, sinon on y vit mal.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Une ville peut vivre sur l'eau",
      html: `<p><b>Venise</b> est construite sur environ 118 petites îles de la lagune, sur des pieux d'aulne, de mélèze et de chêne enfoncés dans la vase. Elle compte plus de 400 ponts. Pour la protéger de l'« acqua alta » (les hautes eaux), on a construit le système de digues mobiles <b>MOSE</b>, entré en service en 2020. Mais le réchauffement climatique et la subsidence (l'affaissement du sol) restent un défi : Venise est un laboratoire d'<b>adaptation</b> pour toutes les villes côtières.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Certaines villes ont été construites à partir de rien",
      html: `<p>Certaines capitales ont été entièrement conçues sur plan : <b>Brasília</b> (Brésil, inaugurée en 1960, dessinée par Lúcio Costa et Oscar Niemeyer en forme d'avion), <b>Canberra</b> en Australie (1913), <b>Washington</b> D.C., <b>Abuja</b> au Nigeria (depuis 1991). Toutes ne fonctionnent pas comme prévu : une ville ne vit pas seulement de plans, mais aussi des habitudes de ceux qui l'habitent.</p>`
    },
    {
      type: "text",
      title: "5. Vers des villes durables",
      html: `<p>Les villes occupent environ 3 % des terres émergées mais consomment plus des deux tiers de l'énergie mondiale et produisent environ 70 % des émissions de CO₂ liées à l'énergie. C'est justement pour cela qu'elles sont le lieu où la transition écologique peut le mieux fonctionner : la densité permet des services plus efficaces, des transports en commun et moins de gaspillage de sol.</p>
<p>L'<b>Objectif 11</b> de l'Agenda 2030 de l'ONU s'intitule précisément « <b>Villes et communautés durables</b> » : rendre les villes inclusives, sûres, résilientes et durables. Quelques stratégies :</p>
<ul>
<li><b>Mobilité durable</b> : métros, tramways, bus électriques, pistes cyclables, zones à circulation limitée. Exemple : <b>Curitiba</b> (Brésil) a inventé dans les années 1970 les couloirs réservés aux bus rapides (BRT, bus à haut niveau de service), ensuite copiés par des centaines de villes.</li>
<li><b>Ville compacte</b> et <b>« ville du quart d'heure »</b> (proposée par le professeur Carlos Moreno et adoptée à Paris) : les services essentiels (école, commerces, médecin, espaces verts) accessibles à pied ou à vélo en 15 minutes.</li>
<li><b>Plus de verdure</b> : parcs, toits végétalisés, arbres qui réduisent l'îlot de chaleur (un arbre adulte peut absorber des dizaines de kg de CO₂ par an et procurer une ombre fraîche). À Milan, le <b>Bosco Verticale</b> (« forêt verticale », Stefano Boeri, 2014) compte environ 800 arbres (et des milliers d'arbustes) sur les façades de deux tours.</li>
<li><b>Bâtiments économes</b> : isolation, panneaux solaires, chauffage urbain (à Turin et à Brescia), rénovation énergétique.</li>
<li><b>Économie circulaire</b> : tri sélectif, recyclage, réemploi.</li>
<li><b>Participation</b> : les citoyens décident grâce aux budgets participatifs et aux conseils de quartier.</li>
<li>Les villes intelligentes (<b>smart cities</b>) utilisent capteurs et données pour gérer la circulation, les déchets, l'éclairage et l'eau, mais elles doivent aussi protéger la <b>vie privée</b>.</li>
</ul>`
    },
    {
      type: "decision",
      title: "Que faire de la place centrale ?",
      html: `<p>Tu es adjoint(e) au maire chargé(e) de la mobilité dans une ville de 300 000 habitants. Le centre est saturé de voitures et l'air est souvent pollué. Tu as la possibilité de transformer la place centrale, aujourd'hui un parking de 150 places.</p>`,
      question: "Quel choix te semble le meilleur pour une ville durable ?",
      options: [
        { label: "Construire un parking souterrain plus grand", outcome: "Il attire encore plus de voitures au centre : la circulation augmente, les émissions restent élevées et le coût est très important." },
        { label: "Rendre la place piétonne, avec des arbres et des bancs, et renforcer bus et tramways", outcome: "Beaucoup de villes (Pontevedra en Espagne, Oslo, Bologne avec ses zones 30) ont vu baisser la circulation et les accidents, tandis que les commerces sont restés actifs, voire se sont développés." },
        { label: "Ne rien faire pour ne mécontenter personne", outcome: "Le problème demeure et s'aggrave avec l'augmentation du nombre de voitures, et la pollution nuit à la santé des habitants." }
      ],
      answer: 1,
      explain: "Les études sur les villes européennes montrent qu'offrir des alternatives à la voiture individuelle (transports en commun, pistes cyclables, espaces piétons) réduit la circulation et la pollution ; les commerçants craignent souvent une baisse des ventes qui ne se produit finalement pas, car les piétons passent plus de temps et dépensent plus d'argent dans les magasins."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les villes",
      intro: "Une ville est un système complexe : voici trois façons de la regarder.",
      tabs: [
        {
          label: "🫀 La ville comme un organisme",
          html: `<p>On peut comparer une ville à un <b>corps</b> : les routes et les voies ferrées sont les <b>artères</b> qui transportent personnes et marchandises ; les égouts et les stations d'épuration sont l'<b>appareil digestif</b> ; l'électricité et internet sont le <b>système nerveux</b> ; les parcs sont les <b>poumons</b> ; le centre est le <b>cœur</b> économique. Comme un corps, la ville consomme de l'énergie et produit des déchets (son <b>métabolisme urbain</b>) : une ville durable cherche à réduire ce qu'elle prélève et à recycler ce qu'elle rejette.</p>`
        },
        {
          label: "🗺️ Lire le plan d'une ville",
          html: `<p>La forme des rues raconte l'histoire : des rues <b>courbes et étroites</b> sont typiques des centres médiévaux ; des rues <b>orthogonales</b> (en damier) rappellent les castra romains ou les villes planifiées (le centre de Turin, l'Eixample de Barcelone) ; les grandes <b>avenues</b> et les <b>boulevards</b> sont l'héritage des réformes du XIXe siècle (le Paris d'Haussmann) ; les rues en <b>arête de poisson</b> ou en <b>impasse</b> (cul-de-sac) sont typiques des quartiers pavillonnaires du XXe siècle. Essaie avec un plan de ta ville : combien de ces formes retrouves-tu ?</p>`,
          widget: "match",
          options: { pairs: [["Rues courbes et ruelles", "Centre médiéval"], ["Plan en damier", "Castrum romain ou ville planifiée"], ["Grandes avenues bordées d'arbres", "Réforme du XIXe siècle"], ["Impasses et pavillons", "Banlieue du XXe siècle"]] }
        },
        {
          label: "🌡️ L'îlot de chaleur",
          html: `<p>Une journée d'août : la pelouse d'un parc est à environ 30 °C, l'asphalte au soleil peut atteindre <b>60 °C</b>, un toit en béton clair 45 °C. L'asphalte absorbe la lumière et la restitue la nuit sous forme de chaleur, et le béton ne transpire pas comme les feuilles. C'est pourquoi la ville ne se refroidit pas la nuit. Solutions : toits clairs ou végétalisés, plus d'arbres, revêtements drainants, fontaines, moins de climatisation (qui rejette la chaleur à l'extérieur).</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#fffbeb"/><polyline points="30,150 100,130 180,60 250,50 320,70 400,120 470,140" fill="none" stroke="#dc2626" stroke-width="4"/><text x="250" y="35" font-size="15" text-anchor="middle" fill="#dc2626" font-weight="bold">centre-ville (plus chaud)</text><text x="60" y="175" font-size="14" fill="#15803d" font-weight="bold">campagne</text><text x="400" y="175" font-size="14" fill="#15803d" font-weight="bold">parc / campagne</text><text x="250" y="190" font-size="14" text-anchor="middle" fill="#111827">profil de température d'un bout à l'autre</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : la ville, pourquoi elle existe et comment elle change",
      nodes: [
        { id: "surplus", label: "Agriculture et surplus", x: 20, y: 8, color: "#16a34a", html: "Produire plus de nourriture que ce dont les paysans ont besoin.", why: "Sans surplus agricole, personne ne pourrait être artisan ou prêtre : la ville naît après la révolution agricole, il y a environ 5 000 à 6 000 ans en Mésopotamie, grâce à l'irrigation et aux techniques de conservation des céréales." },
        { id: "funzioni", label: "Fonctions urbaines", x: 80, y: 8, color: "#2563eb", html: "Commerce, pouvoir, culture, services.", why: "La ville concentre les échanges et les informations : plus de gens proches les uns des autres, c'est plus de rencontres, plus d'idées et un marché plus grand (les « économies d'agglomération » étudiées par l'économiste Alfred Marshall en 1890)." },
        { id: "urbanizzazione", label: "Urbanisation", x: 50, y: 30, color: "#f59e0b", html: "La part des habitants vivant en ville augmente.", why: "Avec la révolution industrielle (à partir de 1760 environ), les usines concentrent le travail dans les villes ; aujourd'hui, la croissance urbaine est portée par l'Asie et l'Afrique et par la mécanisation de l'agriculture, qui libère de la main-d'œuvre dans les campagnes." },
        { id: "struttura", label: "Structure et modèles", x: 20, y: 56, color: "#a855f7", html: "Centre, périphéries, quartiers, modèles concentrique et sectoriel.", why: "Les modèles de Burgess, Hoyt, Harris et Ullman sont nés de l'École de Chicago, qui, dans les années 1920, a étudié la ville comme un laboratoire social." },
        { id: "problemi", label: "Problèmes", x: 80, y: 56, color: "#dc2626", html: "Smog, embouteillages, bidonvilles, îlot de chaleur.", why: "Ce sont des effets de la concentration : plus de personnes et d'activités dans le même espace, souvent en croissance plus rapide que les services. Dans beaucoup de villes, l'expansion informelle précède les infrastructures." },
        { id: "sostenibilita", label: "Villes durables", x: 50, y: 80, color: "#14b8a6", html: "Mobilité, verdure, bâtiments économes, participation.", why: "L'Objectif 11 de l'Agenda 2030 et le Nouveau Programme pour les villes (ONU, Habitat III, Quito 2016) reconnaissent que l'avenir de la planète se joue en grande partie dans les villes." },
        { id: "futuro", label: "L'avenir urbain", x: 50, y: 96, color: "#ec4899", html: "Environ 2,5 milliards de nouveaux citadins d'ici 2050.", why: "Selon l'ONU, près de 90 % de la croissance urbaine aura lieu en Asie et en Afrique : les choix faits aujourd'hui en matière de logement et de transports détermineront la consommation de ressources pendant des décennies." }
      ],
      edges: [
        ["surplus", "funzioni", "permet"],
        ["funzioni", "urbanizzazione", "attirent →"],
        ["urbanizzazione", "struttura", "produit"],
        ["urbanizzazione", "problemi", "engendre"],
        ["problemi", "sostenibilita", "exigent"],
        ["struttura", "sostenibilita", "oriente la"],
        ["sostenibilita", "futuro", "prépare l'"]
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Depuis <b>2007</b>, plus de personnes vivent en ville qu'à la campagne (aujourd'hui environ 57 %, en 2050 environ 68 %).</li>
<li><b>Métropole</b>, <b>mégapole</b> (plus de 10 millions), <b>mégalopole</b> (plusieurs métropoles qui se rejoignent : Boswash).</li>
<li>Modèles de ville : <b>concentrique</b> (Burgess), <b>sectoriel</b> (Hoyt), <b>polynucléaire</b> (Harris-Ullman).</li>
<li>Problèmes : bidonvilles (1,1 milliard de personnes), smog, embouteillages, îlot de chaleur, artificialisation des sols, inégalités.</li>
<li><b>Villes durables</b> : transports collectifs, verdure urbaine, efficacité énergétique, économie circulaire, Objectif 11 de l'Agenda 2030.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : structure et durabilité",
      questions: [
        { type: "mc", q: "Qu'est-ce que l'îlot de chaleur urbain ?", options: ["Une zone de la ville plus chaude que la campagne environnante", "Une île en mer près de la ville", "Un quartier avec beaucoup de parcs"], answer: 0, explain: "L'asphalte et le béton accumulent la chaleur : les villes sont plus chaudes que la campagne, surtout la nuit." },
        { type: "mc", q: "Quel est le numéro de l'Objectif de l'Agenda 2030 consacré aux villes durables ?", options: ["Objectif 2", "Objectif 11", "Objectif 17"], answer: 1, explain: "L'Objectif 11 s'intitule « Villes et communautés durables »." },
        { type: "tf", q: "Le modèle de Burgess décrit la ville comme une série d'anneaux concentriques autour du quartier des affaires.", answer: true, explain: "C'est le modèle des zones concentriques, élaboré à Chicago en 1925." }
      ]
    }
  ],
  glossary: [
    { t: "Urbanisation", d: "Augmentation de la part de la population vivant en ville et croissance des espaces urbains." },
    { t: "Métropole", d: "Grande ville aux fonctions importantes, dont l'aire d'influence comprend les communes voisines." },
    { t: "Mégapole", d: "Ville de plus de 10 millions d'habitants." },
    { t: "Mégalopole", d: "Vaste région urbaine formée de plusieurs métropoles qui se rejoignent (par ex. Boston-Washington)." },
    { t: "Conurbation", d: "Ensemble de plusieurs villes voisines qui se sont rejointes pour former un seul tissu urbain." },
    { t: "CBD", d: "Central Business District : le quartier des affaires de la ville, avec bureaux, banques et commerces." },
    { t: "Exode rural", d: "Départ de la population des campagnes vers les villes." },
    { t: "Bidonville", d: "Quartier urbain informel et pauvre, aux habitations précaires et avec peu de services (slum, favela)." },
    { t: "Îlot de chaleur", d: "Phénomène par lequel les zones urbaines ont des températures plus élevées que les zones rurales environnantes." },
    { t: "Gentrification", d: "Rénovation d'un quartier populaire avec l'arrivée d'habitants plus aisés et la hausse des loyers." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quelle condition a rendu possible la naissance des premières villes ?", options: ["Un surplus agricole qui libérait des personnes du travail des champs", "L'invention de l'automobile", "La découverte de l'Amérique"], answer: 0, explain: "Quand les paysans ont produit plus de nourriture que nécessaire, d'autres personnes ont pu se consacrer à l'artisanat, au commerce et au gouvernement." },
      { type: "num", q: "Si 57 % de 8 milliards de personnes vivent en ville, combien de milliards de personnes sont urbaines (arrondis à une décimale) ?", answer: 4.6, tol: 0.1, unit: "milliards", explain: "8 × 0,57 = 4,56 ≈ 4,6 milliards." },
      { type: "mc", q: "Qui a créé le terme « mégalopole » pour la côte nord-est des États-Unis ?", options: ["Jean Gottmann", "Ernest Burgess", "Carlos Moreno"], answer: 0, explain: "Le géographe français Jean Gottmann, en 1961." },
      { type: "mc", q: "Dans quelle zone du modèle de Burgess se trouvent les bureaux, les banques et les principaux magasins ?", options: ["Zone des navetteurs", "Le CBD, le quartier des affaires", "Quartiers ouvriers"], answer: 1, explain: "Le CBD occupe le cœur de la ville." },
      { type: "tf", q: "Les bidonvilles sont toujours des lieux sans activité économique.", answer: false, explain: "Beaucoup d'entre eux (comme Dharavi à Bombay) accueillent des milliers de petites entreprises ; ce qui manque, ce sont les services et la sécurité." },
      { type: "order", q: "Range dans l'ordre chronologique.", items: ["Premières villes en Mésopotamie", "Révolution industrielle et croissance de Londres", "La population urbaine dépasse la population rurale (2007)", "Prévision de 68 % d'urbains (2050)"], explain: "Des origines mésopotamiennes à l'urbanisation industrielle, puis à 2007 et aux prévisions pour 2050." },
      { type: "mc", q: "Quelle mesure réduit l'îlot de chaleur urbain ?", options: ["Plus d'arbres et de toits végétalisés", "Plus d'asphalte sombre", "Plus de climatisation rejetant la chaleur dehors"], answer: 0, explain: "La végétation fait de l'ombre et rafraîchit l'air par la transpiration." },
      { type: "mc", q: "Que propose l'idée de la « ville du quart d'heure » ?", options: ["Avoir les services essentiels accessibles à pied ou à vélo en 15 minutes", "Construire des autoroutes à 15 voies", "Limiter la population à 15 000 habitants"], answer: 0, explain: "Ce modèle réduit les déplacements en voiture et rend les quartiers plus agréables à vivre." },
      { type: "text", q: "Comment appelle-t-on le phénomène par lequel la population quitte les campagnes pour s'installer en ville ?", answer: ["exode rural", "l'exode rural", "urbanisation"], explain: "L'exode rural (l'urbanisation en est souvent la conséquence)." },
      { type: "tf", q: "D'ici 2050, presque toute la croissance de la population urbaine aura lieu en Asie et en Afrique.", answer: true, explain: "Selon les projections de l'ONU, environ 90 % de la croissance urbaine aura lieu sur ces deux continents." }
    ]
  }
});
