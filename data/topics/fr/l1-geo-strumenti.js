TOPIC('fr', {
  id: "l1-geo-strumenti",
  title: "Les outils de la géographie",
  intro: "Le géographe ne se contente pas de décrire le monde : il le <b>mesure</b>, le <b>représente</b> et l'<b>interprète</b>. Dans cette leçon, tu apprends à lire une <b>carte</b>, à utiliser l'<b>échelle</b> et les <b>coordonnées</b>, à comprendre pourquoi toute carte déforme la réalité, et tu découvres comment le <b>GPS</b> et les <b>SIG</b> ont changé la façon d'étudier le territoire.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Représenter la Terre : cartes, plans, mappes",
      html: `<p>La Terre est (presque) une sphère, mais nous avons besoin de la représenter sur une feuille ou sur un écran plat. Toute représentation est une <b>réduction</b> de la réalité, faite dans un but précis. Les principales sont :</p>
<ul>
<li><b>Plan</b> 🏙️ : il représente une zone très petite (une ville, un bâtiment) avec un très grand niveau de détail ; échelles typiques de 1/1 000 à 1/10 000.</li>
<li><b>Carte topographique</b> 🥾 : elle montre un territoire avec ses routes, rivières, forêts, bâtiments et son relief, par exemple les cartes de l'IGN en France ou de l'IGM (Istituto Geografico Militare) en Italie au 1/25 000, celles qu'utilisent randonneurs et alpinistes.</li>
<li><b>Carte géographique</b> 🗺️ : zone plus vaste (une région, un État), moins de détails, échelle autour de 1/100 000 – 1/1 000 000.</li>
<li><b>Planisphère</b> 🌍 : toute la surface terrestre sur un plan ; échelles de l'ordre de la centaine de millions.</li>
<li><b>Carte thématique</b> 📊 : elle montre <b>un seul phénomène</b> (densité de population, climat, revenu, vote) sur un fond géographique simple.</li>
</ul>
<p>Toute carte comporte quelques éléments fixes : un <b>titre</b>, une <b>orientation</b> (en général le nord en haut), une <b>échelle</b>, une <b>légende</b> (qui explique les symboles et les couleurs) et, si besoin, le <b>quadrillage géographique</b>.</p>`
    },
    {
      type: "text",
      title: "2. L'échelle : à quel point la réalité est réduite",
      html: `<p>L'<b>échelle</b> est le rapport entre une distance mesurée sur la carte et la distance réelle correspondante. On peut l'indiquer de trois façons :</p>
<ul>
<li><b>numérique</b> : 1/50 000 signifie que 1 cm sur la carte correspond à 50 000 cm (soit <b>500 m</b>) dans la réalité ;</li>
<li><b>graphique</b> : un segment gradué avec les distances réelles (pratique, car il reste juste si tu agrandis ou réduis la photocopie) ;</li>
<li><b>en toutes lettres</b> : « 1 cm = 500 m ».</li>
</ul>
<p>Attention au paradoxe : une <b>grande</b> échelle comme 1/1 000 (fraction grande, 1/1 000) montre une zone <b>petite</b> avec beaucoup de détails ; une <b>petite</b> échelle comme 1/10 000 000 montre une zone <b>vaste</b> avec peu de détails.</p>
<p><b>Formules utiles</b> (avec D = distance sur la carte, R = distance réelle, N = dénominateur de l'échelle) :</p>
<p style="text-align:center"><b>R = D × N</b> &nbsp;&nbsp;&nbsp; <b>D = R ÷ N</b> &nbsp;&nbsp;&nbsp; <b>N = R ÷ D</b></p>`
    },
    {
      type: "example",
      title: "Exemple concret : mesurer un itinéraire",
      html: `<p>Sur une carte au <b>1/50 000</b>, le sentier qui va du refuge au sommet mesure <b>7,2 cm</b>. Quelle est sa longueur réelle ?</p>
<p>R = 7,2 cm × 50 000 = 360 000 cm = <b>3 600 m = 3,6 km</b>.</p>
<p>Si un randonneur marche à 3 km/h sur le plat mais que le dénivelé le ralentit, il peut compter environ 1 h 15 min. Attention : la carte mesure la distance <b>à l'horizontale</b> ; si le sentier monte fort, le parcours réel est un peu plus long que ce que suggère la règle.</p>
<p><b>Dans l'autre sens</b> : deux villages sont distants de 12 km et tu veux une carte de 24 cm. Il faut N = 12 km ÷ 24 cm = 1 200 000 cm ÷ 24 cm = 50 000 : échelle <b>1/50 000</b>.</p>`
    },
    {
      type: "text",
      title: "3. Le quadrillage géographique : latitude et longitude",
      html: `<p>Pour indiquer avec précision un point sur la Terre, on utilise le <b>quadrillage géographique</b>, formé de deux familles de cercles imaginaires :</p>
<ul>
<li>les <b>parallèles</b> : des cercles parallèles à l'<b>équateur</b> (0°). Ils mesurent la <b>latitude</b>, c'est-à-dire la distance angulaire à l'équateur, de 0° à <b>90° Nord</b> (pôle Nord) et de 0° à <b>90° Sud</b> (pôle Sud). Les principaux parallèles sont : l'équateur, le tropique du Cancer (environ 23°26′ N), le tropique du Capricorne (environ 23°26′ S), les cercles polaires arctique et antarctique (environ 66°34′ N et S).</li>
<li>les <b>méridiens</b> : des demi-cercles qui relient les pôles. Ils mesurent la <b>longitude</b>, c'est-à-dire la distance angulaire au <b>méridien de Greenwich</b> (0°), de 0° à <b>180° Est</b> et de 0° à <b>180° Ouest</b>.</li>
</ul>
<p>Le méridien de référence passe par l'observatoire de <b>Greenwich</b>, à Londres : il fut choisi par la conférence internationale de Washington en <b>1884</b>. Les coordonnées s'écrivent en degrés (°), minutes (′) et secondes (″) : <b>Rome</b> se trouve à environ <b>41°54′ N, 12°30′ E</b> ; Milan à environ 45°28′ N, 9°11′ E.</p>
<p>Un degré de latitude correspond toujours à environ <b>111 km</b> à la surface. Un degré de longitude, en revanche, ne mesure 111 km qu'à l'équateur et <b>raccourcit</b> à mesure qu'on s'approche des pôles, où les méridiens se rejoignent.</p>`
    },
    {
      type: "svg",
      title: "Le quadrillage géographique",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<circle cx="170" cy="150" r="115" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<ellipse cx="170" cy="150" rx="115" ry="30" fill="none" stroke="#dc2626" stroke-width="3"/>
<ellipse cx="170" cy="95" rx="100" ry="22" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="205" rx="100" ry="22" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="150" rx="35" ry="115" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="150" rx="80" ry="115" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<line x1="170" y1="25" x2="170" y2="275" stroke="#15803d" stroke-width="4"/>
<circle cx="214" cy="116" r="6" fill="#f59e0b" stroke="#111827" stroke-width="2"/>
<text x="170" y="20" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Pôle Nord 90°N</text>
<text x="170" y="294" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Pôle Sud 90°S</text>
<text x="330" y="60" font-size="16" fill="#dc2626" font-weight="bold">Équateur = 0° (parallèle)</text>
<text x="330" y="100" font-size="16" fill="#15803d" font-weight="bold">Méridien de Greenwich = 0°</text>
<text x="330" y="140" font-size="16" fill="#1e3a8a">Parallèles : latitude</text>
<text x="330" y="170" font-size="16" fill="#1e3a8a">Méridiens : longitude</text>
<text x="330" y="215" font-size="16" fill="#92400e" font-weight="bold">Un point = latitude + longitude</text>
<text x="330" y="245" font-size="15" fill="#111827">ex. 45°N, 10°E (plaine du Pô)</text>
</svg>`,
      caption: "Les parallèles (horizontaux) donnent la latitude, les méridiens (verticaux) la longitude. Leur croisement désigne un point unique sur la Terre."
    },
    {
      type: "quiz",
      title: "Mini-quiz : échelle et coordonnées",
      questions: [
        { type: "num", q: "Sur une carte au 1/25 000, deux points sont distants de 6 cm. Combien de kilomètres cela fait-il dans la réalité ?", answer: 1.5, tol: 0.01, unit: "km", explain: "6 cm × 25 000 = 150 000 cm = 1 500 m = 1,5 km." },
        { type: "mc", q: "Quelle carte a la plus petite échelle ?", options: ["1/1 000", "1/50 000", "1/10 000 000"], answer: 2, explain: "Plus le dénominateur est grand, plus l'échelle est petite : le 1/10 000 000 représente une zone très vaste avec peu de détails." },
        { type: "mc", q: "Que mesure la latitude ?", options: ["La distance angulaire à l'équateur", "La distance angulaire à Greenwich", "L'altitude au-dessus du niveau de la mer"], answer: 0, explain: "La latitude va de 0° (équateur) à 90° N ou S (pôles). La distance à Greenwich, c'est la longitude." }
      ]
    },
    {
      type: "text",
      title: "4. Toute carte déforme : les projections",
      html: `<p>On ne peut pas aplatir une sphère sans l'étirer ou la déchirer (essayez d'étaler une peau d'orange). La méthode mathématique qui permet de reporter le quadrillage de la sphère sur un plan s'appelle une <b>projection cartographique</b>. Aucune projection ne conserve toutes les propriétés à la fois : il faut <b>choisir ce que l'on sacrifie</b>.</p>
<ul>
<li><b>Projections conformes</b> : elles conservent les <b>angles</b> et les formes locales, mais déforment les surfaces. La plus célèbre est la <b>projection de Mercator</b> (Gerardus Mercator, 1569), conçue pour la <b>navigation</b> : une route à cap constant (boussole fixe) devient une ligne droite. En contrepartie, elle agrandit énormément les régions proches des pôles : le <b>Groenland</b> paraît aussi grand que l'Afrique, alors que l'Afrique est environ <b>14 fois plus étendue</b>.</li>
<li><b>Projections équivalentes</b> : elles conservent les <b>surfaces</b> mais déforment les formes (par exemple la projection de <b>Gall-Peters</b>, popularisée dans les années 1970 par Arno Peters, ou la projection de Mollweide). Utiles pour comparer des superficies et pour les cartes thématiques.</li>
<li><b>Projections aphylactiques</b> : des compromis qui ne conservent rien exactement mais limitent les déformations (par exemple la projection de Robinson, longtemps utilisée par le National Geographic).</li>
</ul>
<p>Pour l'Italie et le reste de l'Europe, les cartes officielles utilisent des projections conformes de type <b>cylindrique transverse</b> (comme Gauss-Boaga et UTM) ou conique (comme Lambert en France), car pour de petites zones les déformations deviennent négligeables.</p>`
    },
    {
      type: "svg",
      title: "Pourquoi le Groenland paraît énorme",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="30" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Mercator (conforme)</text>
<text x="450" y="30" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Équivalente (vraies surfaces)</text>
<ellipse cx="150" cy="95" rx="55" ry="38" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="150" y="100" font-size="15" text-anchor="middle" fill="#111827">Groenland</text>
<ellipse cx="150" cy="215" rx="55" ry="62" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<text x="150" y="220" font-size="15" text-anchor="middle" fill="#111827">Afrique</text>
<ellipse cx="450" cy="105" rx="20" ry="14" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="450" y="140" font-size="15" text-anchor="middle" fill="#111827">Groenland</text>
<ellipse cx="450" cy="215" rx="55" ry="62" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<text x="450" y="220" font-size="15" text-anchor="middle" fill="#111827">Afrique</text>
<text x="300" y="290" font-size="14" text-anchor="middle" fill="#111827">Groenland : environ 2,2 millions de km². Afrique : environ 30 millions de km².</text>
</svg>`,
      caption: "Schéma simplifié : dans la projection de Mercator, les régions proches des pôles sont agrandies. En réalité, l'Afrique est environ 14 fois plus grande que le Groenland."
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La Terre n'est pas une sphère parfaite",
      html: `<p>La Terre est un <b>géoïde</b> : aplatie aux pôles et renflée à l'équateur, parce qu'elle tourne sur elle-même. Le rayon équatorial mesure environ <b>6 378 km</b>, le rayon polaire environ <b>6 357 km</b> : une différence d'environ 21 km. Pour les mesures courantes, la sphère suffit (circonférence d'environ <b>40 000 km</b> : ce n'est pas un hasard, car le <b>mètre</b> fut défini à la fin du XVIIIe siècle comme la dix-millionième partie de la distance pôle Nord–équateur) ; pour les calculs de précision, on utilise un <b>ellipsoïde</b> de référence.</p>`
    },
    {
      type: "text",
      title: "5. Lire le relief et les symboles",
      html: `<p>Comment représenter sur une feuille plate la <b>troisième dimension</b>, c'est-à-dire l'altitude ? Les principales méthodes sont :</p>
<ul>
<li><b>Courbes de niveau</b> (isohypses) : des lignes qui relient tous les points situés à la même altitude. Elles sont séparées par une <b>équidistance</b> fixe (par exemple 25 m). Là où les courbes sont <b>serrées</b>, la pente est <b>raide</b> ; là où elles sont <b>espacées</b>, elle est douce. Des cercles concentriques indiquent une colline ou un sommet ; des courbes en « V » pointent vers l'amont le long d'une vallée.</li>
<li><b>Teintes hypsométriques</b> : des bandes de couleur pour les différentes altitudes (vert pour les plaines, brun pour les montagnes, blanc pour les sommets au-dessus d'une certaine altitude ; bleu de plus en plus foncé pour les profondeurs marines, avec les <b>isobathes</b>).</li>
<li><b>Ombrage et modèles 3D</b> : ils donnent l'illusion du relief et sont aujourd'hui calculés à partir de <b>modèles numériques de terrain</b>.</li>
</ul>
<p>Les <b>cartes thématiques</b> utilisent d'autres langages : cartes <b>choroplèthes</b> (une couleur différente pour chaque région selon la valeur de la donnée, par exemple la densité), cartes à <b>symboles proportionnels</b> (un cercle plus grand pour une ville plus peuplée), cartes par <b>points</b> et cartes en <b>isolignes</b> (isothermes pour la température, isobares pour la pression, isohyètes pour les précipitations).</p>`
    },
    {
      type: "svg",
      title: "Courbes de niveau : une colline vue d'en haut et de profil",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<ellipse cx="150" cy="150" rx="120" ry="95" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<ellipse cx="150" cy="150" rx="85" ry="65" fill="#86efac" stroke="#166534" stroke-width="2"/>
<ellipse cx="135" cy="148" rx="50" ry="38" fill="#4ade80" stroke="#166534" stroke-width="2"/>
<ellipse cx="125" cy="146" rx="18" ry="14" fill="#16a34a" stroke="#166534" stroke-width="2"/>
<text x="125" y="151" font-size="14" text-anchor="middle" fill="#ffffff" font-weight="bold">300</text>
<text x="45" y="153" font-size="14" fill="#111827">100</text>
<text x="80" y="153" font-size="14" fill="#111827">200</text>
<text x="150" y="30" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Vue d'en haut (carte)</text>
<path d="M330 250 L400 230 L440 180 L470 120 L500 180 L540 230 L580 250 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<line x1="320" y1="250" x2="590" y2="250" stroke="#111827" stroke-width="2"/>
<line x1="352" y1="236" x2="568" y2="236" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="423" y1="206" x2="518" y2="206" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="455" y="30" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">De profil (coupe)</text>
<text x="470" y="108" font-size="14" text-anchor="middle" fill="#111827">sommet</text>
<text x="450" y="280" font-size="14" text-anchor="middle" fill="#111827">courbes tous les 100 m : raide à droite, douce à gauche</text>
</svg>`,
      caption: "Chaque courbe relie des points situés à la même altitude. Plus les courbes sont rapprochées, plus la pente est raide."
    },
    {
      type: "text",
      title: "6. S'orienter et mesurer le temps : boussole, GPS et fuseaux horaires",
      html: `<p>S'orienter, c'est trouver les points cardinaux. Pendant des siècles, on a utilisé le <b>Soleil</b>, l'<b>étoile Polaire</b> (qui, dans l'hémisphère Nord, indique le nord) et la <b>boussole</b>, qui exploite le champ magnétique terrestre. Attention : l'aiguille indique le <b>nord magnétique</b>, qui ne coïncide pas avec le nord géographique (la différence s'appelle la <b>déclinaison magnétique</b>).</p>
<p>Aujourd'hui, la méthode la plus utilisée est le <b>GNSS</b> (Global Navigation Satellite System), dont le <b>GPS</b> américain est le pionnier. Le principe : un récepteur (comme ton téléphone) calcule le temps que met le signal radio pour venir de plusieurs satellites et en déduit sa distance à chacun ; avec au moins <b>quatre satellites</b> (trois pour la position, un pour corriger l'horloge), il détermine latitude, longitude et altitude. Les principaux systèmes sont le GPS (États-Unis), <b>Galileo</b> (Union européenne), GLONASS (Russie) et BeiDou (Chine) ; chacun compte des dizaines de satellites en orbite à environ 20 000 km d'altitude.</p>
<p>L'<b>heure</b> dépend elle aussi de la position. La Terre fait un tour de 360° en 24 heures : chaque <b>15° de longitude</b> correspondent à <b>1 heure</b>. Le globe est divisé en <b>24 fuseaux horaires</b> ; dans les faits (pour des raisons politiques), les fuseaux réels sont plus nombreux. L'Italie, comme la France, est dans le fuseau d'Europe centrale (<b>UTC+1</b>, <b>UTC+2</b> à l'heure d'été). En franchissant la <b>ligne de changement de date</b> (près du méridien 180°), on gagne ou on perd un jour.</p>`
    },
    {
      type: "3d",
      title: "Sur le globe : les coordonnées de quelques villes",
      scene: "globe",
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: "Rome (41,9° N, 12,5° E)", color: "#dc2626" },
          { lat: 51.48, lon: 0, label: "Greenwich (0°)", color: "#16a34a" },
          { lat: 0, lon: -78.5, label: "Quito (presque sur l'équateur)", color: "#f59e0b" },
          { lat: -33.9, lon: 151.2, label: "Sydney (33,9° S)", color: "#2563eb" },
          { lat: 40.7, lon: -74.0, label: "New York", color: "#7c3aed" },
          { lat: 35.7, lon: 139.7, label: "Tokyo", color: "#0ea5e9" }
        ],
        routes: [ { points: [0, 4], color: "#dc2626" }, { points: [0, 5], color: "#2563eb" } ]
      },
      caption: "Fais tourner le globe : remarque que Greenwich est sur le méridien 0° et que Quito est presque sur l'équateur (le pays porte d'ailleurs ce nom : Ecuador = équateur)."
    },
    {
      type: "text",
      title: "7. SIG, télédétection et données : la géographie numérique",
      html: `<p>Le <b>SIG</b> (<i>Système d'information géographique</i>, en anglais <b>GIS</b>, <i>Geographic Information System</i>) est un système informatique qui stocke, relie et analyse des données en fonction de leur position. L'idée clé est celle des <b>couches superposées</b> (<i>layers</i>) : routes, rivières, bâtiments, occupation du sol, population… chacun dans une couche, que l'on peut afficher, masquer et croiser avec les autres. Les données sont de deux types : <b>vectorielles</b> (points, lignes, polygones : un arrêt, une route, une commune) et <b>raster</b> (grilles de pixels : une image satellite, un modèle d'altitude).</p>
<p>Exemple historique de « SIG avant l'heure » : en <b>1854</b>, lors d'une épidémie de <b>choléra</b> à Londres, le médecin <b>John Snow</b> reporta sur une carte les maisons des victimes et découvrit qu'elles se concentraient autour d'une pompe à eau de Broad Street. Il fit retirer la poignée de la pompe et les cas diminuèrent : la <b>carte</b> avait révélé la cause (l'eau contaminée) avant même que l'on connaisse la bactérie.</p>
<p>La <b>télédétection</b> recueille à distance des informations sur la surface terrestre, grâce aux satellites et aux drones. Des programmes comme <b>Copernicus</b> (UE, satellites Sentinel) et Landsat (États-Unis) produisent des images gratuites utilisées pour suivre les incendies, les inondations, les glaciers, les récoltes et la croissance des villes. Les images infrarouges, par exemple, révèlent l'état de santé de la végétation.</p>`
    },
    {
      type: "example",
      title: "Exemple concret : où construire une école ?",
      html: `<p>Une commune doit choisir où construire une nouvelle école. Avec un SIG, on superpose quatre couches :</p>
<ol>
<li>le domicile des enfants d'âge scolaire (données d'état civil : points) ;</li>
<li>le réseau routier et les arrêts de transports en commun (lignes et points) ;</li>
<li>les zones inondables (polygones) ;</li>
<li>les terrains libres appartenant à la collectivité (polygones).</li>
</ol>
<p>Le système calcule les terrains libres, <b>hors zone inondable</b>, à moins de 500 m d'un arrêt, qui <b>minimisent la distance moyenne</b> au domicile des enfants. En quelques secondes, il propose 2 ou 3 sites : la décision revient aux personnes, mais elle s'appuie sur des données et non sur des impressions. C'est la même méthode que pour planifier des hôpitaux, des lignes de bus et des plans de sécurité civile.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le GPS a besoin de la relativité",
      html: `<p>Les horloges atomiques des satellites GPS vont <b>un peu plus vite</b> que celles au sol (la gravité est plus faible en altitude : relativité générale) et un peu plus lentement (car les satellites se déplacent vite : relativité restreinte). Le résultat net est une avance d'environ <b>38 microsecondes par jour</b>. Sans correction, l'erreur de position augmenterait d'environ <b>10 km par jour</b> ! Chaque fois que tu utilises ton smartphone pour t'orienter, tu utilises (sans le savoir) la théorie d'Einstein.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre cartes et coordonnées",
      intro: "Si l'échelle ou les coordonnées te posent problème, essaie de les regarder sous un autre angle.",
      tabs: [
        {
          label: "🏀 La peau d'orange",
          html: `<p>Prends une peau d'orange et essaie de l'aplatir sur la table : elle se déchire ou s'étire. C'est exactement le problème des projections ! Pour obtenir une carte continue, il faut <b>étirer</b> certaines zones (comme Mercator le fait avec les pôles) ou <b>découper</b> la surface en « quartiers » (cartes en fuseaux, comme celles de Goode). Voilà pourquoi aucune carte plane n'est « juste » : chacune est un choix entre formes, surfaces, distances et directions.</p>`
        },
        {
          label: "🧭 L'adresse du monde",
          html: `<p>Pense aux coordonnées comme à une <b>adresse</b> du type « rue, numéro » dans une ville en damier (comme New York ou Turin) : la <b>latitude</b> est comme la « ligne » (à quelle distance tu es au nord ou au sud de l'équateur) et la <b>longitude</b> comme la « colonne » (à quelle distance tu es à l'est ou à l'ouest de Greenwich). Deux nombres suffisent pour situer un point : et un téléphone peut même te dire combien de mètres te séparent de la poste.</p>`,
          widget: "labelDiagram",
          options: {
            svg: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="260" fill="#eff6ff"/><line x1="40" y1="130" x2="470" y2="130" stroke="#dc2626" stroke-width="3"/><line x1="250" y1="20" x2="250" y2="240" stroke="#15803d" stroke-width="3"/><circle cx="360" cy="70" r="8" fill="#f59e0b" stroke="#111827" stroke-width="2"/><circle cx="130" cy="190" r="8" fill="#2563eb" stroke="#111827" stroke-width="2"/></svg>`,
            spots: [
              { x: 120, y: 130, label: "Équateur (0° de latitude)" },
              { x: 250, y: 40, label: "Méridien de Greenwich (0° de longitude)" },
              { x: 360, y: 70, label: "Point au nord et à l'est" },
              { x: 130, y: 190, label: "Point au sud et à l'ouest" }
            ]
          }
        },
        {
          label: "👣 Mesurer au pas",
          html: `<p>Une façon simple de « sentir » l'échelle : mesure ton <b>pas</b>. Un pas d'adulte fait environ 70 à 75 cm ; <b>1 000 pas</b> font donc environ 700 m, et tu peux ainsi estimer la distance entre chez toi et l'école. Reporte-la ensuite sur un plan de la ville au 1/10 000 : si tu obtiens 7 cm, l'échelle fonctionne. Ou bien compare avec « l'échelle humaine » : sur une carte au 1/25 000, 4 cm font 1 km, soit environ 15 minutes à pied.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : les outils du géographe",
      nodes: [
        { id: "carta", label: "La carte", x: 50, y: 8, color: "#2563eb", html: "Représentation réduite, symbolique et approximative de la surface terrestre.", why: "Les plus anciennes cartes connues remontent à Babylone (tablette de Nippur et « carte du monde babylonienne », vers le VIe siècle av. J.-C.). Les Grecs, avec Ératosthène (vers 240 av. J.-C.), mesurèrent la circonférence terrestre avec un écart de quelques pour cent par rapport à la valeur actuelle, et Ptolémée (IIe s. apr. J.-C.) fixa l'idée d'un quadrillage de coordonnées." },
        { id: "scala", label: "Échelle", x: 15, y: 38, color: "#16a34a", html: "Rapport entre la distance sur la carte et la distance réelle.", why: "C'est un simple rapport de proportionnalité : il permet de mesurer sur la carte et d'en déduire les dimensions réelles. L'échelle explique pourquoi une carte est toujours un choix entre niveau de détail et étendue." },
        { id: "coordinate", label: "Coordonnées", x: 50, y: 38, color: "#dc2626", html: "La latitude et la longitude situent chaque point.", why: "L'équateur et les pôles sont définis par la rotation de la Terre : la latitude est donc une référence naturelle. La longitude, elle, n'a pas de référence naturelle : c'est une convention, fixée à Greenwich en 1884. La mesurer en mer fut pendant des siècles un problème : il fut résolu au XVIIIe siècle par le chronomètre de marine de John Harrison." },
        { id: "proiezioni", label: "Projections", x: 85, y: 38, color: "#a855f7", html: "Comment passer de la sphère au plan.", why: "Un théorème de Gauss (le Theorema Egregium, 1827) démontre qu'une sphère ne peut pas être étalée sur un plan sans déformer les distances ou les surfaces : la déformation n'est pas un défaut des cartographes, c'est une propriété mathématique de la surface." },
        { id: "rilievo", label: "Relief et symboles", x: 25, y: 68, color: "#f59e0b", html: "Courbes de niveau, teintes hypsométriques, légende.", why: "Les courbes de niveau furent introduites entre le XVIIIe et le XIXe siècle, quand les armées eurent besoin de cartes permettant de prévoir les déplacements sur le terrain. Aujourd'hui encore, les cartes topographiques nationales (IGM en Italie, IGN en France) sont nées de ce besoin militaire." },
        { id: "gps", label: "GPS et satellites", x: 60, y: 68, color: "#0ea5e9", html: "Position calculée à partir de la distance à plusieurs satellites.", why: "Le GPS fut développé par le département de la Défense des États-Unis (premiers satellites dans les années 1970, système complet dans les années 1990) à des fins militaires. Depuis 2000, le signal civil est disponible avec une précision bien meilleure." },
        { id: "gis", label: "SIG et données", x: 50, y: 93, color: "#ec4899", html: "Couches superposées d'informations géoréférencées.", why: "Le premier vrai SIG fut le Canada Geographic Information System, conçu par Roger Tomlinson dans les années 1960 pour inventorier les ressources du territoire canadien ; c'est pourquoi on l'appelle le « père du SIG »." }
      ],
      edges: [
        ["carta", "scala", "a une"],
        ["carta", "coordinate", "porte le quadrillage des"],
        ["carta", "proiezioni", "naît d'une"],
        ["carta", "rilievo", "montre le"],
        ["coordinate", "gps", "sont calculées par le"],
        ["gps", "gis", "alimente le"],
        ["proiezioni", "gis", "servent au"]
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li><b>Échelle</b> = distance sur la carte ÷ distance réelle. R = D × N. Grande échelle = petite zone, beaucoup de détails.</li>
<li><b>Latitude</b> (parallèles, de 0° à 90° N/S depuis l'équateur) ; <b>longitude</b> (méridiens, de 0° à 180° E/O depuis Greenwich).</li>
<li>Toute <b>projection</b> déforme : Mercator conserve les angles, Gall-Peters les surfaces.</li>
<li><b>Courbes de niveau</b> serrées = pente raide.</li>
<li>Le <b>GPS</b> utilise au moins 4 satellites ; le <b>SIG</b> superpose des couches de données géoréférencées.</li>
<li>15° de longitude = 1 heure de décalage.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : projections et SIG",
      questions: [
        { type: "mc", q: "Pourquoi, dans la projection de Mercator, le Groenland paraît-il aussi grand que l'Afrique ?", options: ["Parce que les régions proches des pôles sont agrandies", "Parce que le Groenland est vraiment très grand", "Parce que l'échelle est fausse"], answer: 0, explain: "Mercator conserve les angles (utile pour la navigation) mais agrandit beaucoup les régions éloignées de l'équateur." },
        { type: "tf", q: "Le nord indiqué par l'aiguille de la boussole coïncide exactement avec le nord géographique.", answer: false, explain: "L'aiguille indique le nord magnétique, qui diffère du nord géographique d'un angle appelé déclinaison magnétique." },
        { type: "text", q: "Comment s'appelle le système qui superpose des couches de données géoréférencées (sigle de trois lettres) ?", answer: ["sig", "gis"], explain: "SIG : système d'information géographique (en anglais GIS, Geographic Information System)." }
      ]
    }
  ],
  glossary: [
    { t: "Échelle", d: "Rapport entre une distance mesurée sur la carte et la distance réelle correspondante (ex. 1/50 000)." },
    { t: "Latitude", d: "Distance angulaire d'un point à l'équateur, de 0° à 90° Nord ou Sud ; elle se mesure avec les parallèles." },
    { t: "Longitude", d: "Distance angulaire d'un point au méridien de Greenwich, de 0° à 180° Est ou Ouest ; elle se mesure avec les méridiens." },
    { t: "Projection cartographique", d: "Méthode mathématique qui reporte le quadrillage de la sphère terrestre sur un plan, toujours avec une certaine déformation." },
    { t: "Courbes de niveau", d: "Lignes qui relient les points de même altitude ; elles permettent de lire le relief sur la carte." },
    { t: "Carte thématique", d: "Carte qui montre un seul phénomène (climat, population, revenu…) sur un fond géographique simplifié." },
    { t: "GPS / GNSS", d: "Système de positionnement par satellite : le récepteur calcule sa position à partir de sa distance à au moins quatre satellites." },
    { t: "SIG", d: "Système d'information géographique : il stocke, superpose et analyse des données liées à la position." },
    { t: "Télédétection", d: "Recueil à distance d'informations sur la surface terrestre, par satellites, avions ou drones." },
    { t: "Fuseau horaire", d: "Chacune des 24 bandes de 15° de longitude entre lesquelles la Terre est divisée, avec la même heure légale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Sur une carte au 1/100 000, deux villes sont distantes de 8,5 cm. Combien de km les séparent dans la réalité ?", answer: 8.5, tol: 0.05, unit: "km", explain: "8,5 cm × 100 000 = 850 000 cm = 8 500 m = 8,5 km." },
      { type: "mc", q: "Laquelle de ces échelles montre le plus de détails ?", options: ["1/5 000", "1/500 000", "1/50 000 000"], answer: 0, explain: "Le 1/5 000 est la plus grande échelle (le plus petit dénominateur) : il représente une petite zone avec beaucoup de détails." },
      { type: "mc", q: "En quelle année le méridien de Greenwich a-t-il été choisi comme méridien de référence international ?", options: ["1492", "1884", "1969", "1990"], answer: 1, explain: "La conférence internationale de Washington de 1884 choisit Greenwich comme méridien 0°." },
      { type: "tf", q: "Un degré de longitude mesure toujours environ 111 km, partout sur la Terre.", answer: false, explain: "C'est vrai seulement à l'équateur : les méridiens convergent vers les pôles, donc la distance entre deux méridiens diminue avec la latitude." },
      { type: "mc", q: "Quelle projection conserve les angles et a été conçue pour la navigation ?", options: ["Gall-Peters", "Mercator", "Mollweide"], answer: 1, explain: "Mercator (1569) : les routes à cap constant deviennent des lignes droites, mais les surfaces aux pôles sont démesurément agrandies." },
      { type: "mc", q: "Sur une carte topographique, les courbes de niveau sont très rapprochées. Qu'est-ce que cela indique ?", options: ["Une pente raide", "Une plaine", "Un lac"], answer: 0, explain: "Des courbes serrées signifient une forte variation d'altitude sur peu d'espace : une pente raide." },
      { type: "order", q: "Range de la plus grande échelle (plus de détails) à la plus petite (moins de détails).", items: ["1/1 000", "1/25 000", "1/500 000", "1/30 000 000"], explain: "Plus le dénominateur est petit, plus l'échelle est grande : plan, carte topographique, carte régionale, planisphère." },
      { type: "num", q: "Combien de satellites faut-il au minimum à un récepteur GPS pour calculer sa position et corriger son horloge ?", answer: 4, tol: 0, explain: "Trois servent pour la position dans l'espace, le quatrième pour corriger l'erreur d'horloge du récepteur." },
      { type: "text", q: "Comment s'appelle la ligne qui relie les points de même altitude sur une carte ?", answer: ["courbe de niveau", "courbes de niveau", "isohypse", "isohypses", "la courbe de niveau"], explain: "La courbe de niveau (ou isohypse)." },
      { type: "tf", q: "En étudiant sur une carte les morts du choléra à Londres en 1854, John Snow a identifié la pompe de Broad Street comme source de la contamination.", answer: true, explain: "C'est l'un des premiers exemples d'analyse spatiale de données : la concentration des cas autour de la pompe désigna l'eau contaminée." }
    ]
  }
});
