TOPIC('fr', {
  id: `m2-geo-europa-orientale`,
  title: `L'Europe orientale`,
  intro: `À l'est, l'Europe s'élargit en une plaine immense qui va jusqu'aux <b>monts Oural</b>. On y trouve la <b>Roumanie</b> et la <b>Moldavie</b>, où l'on parle une langue néolatine comme l'italien, l'<b>Ukraine</b>, le « grenier de l'Europe », et la partie européenne de la <b>Russie</b>, le plus grand État du monde. C'est une région de grands fleuves, d'hivers glacials, de terres très fertiles et d'une histoire marquée par des empires, des régimes et des guerres, y compris récentes.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Une plaine sans limites et un climat « extrême »`,
      html: `<p>La plus grande partie de l'Europe orientale est occupée par la <b>plaine sarmatique</b> (ou russe), la plus grande plaine d'Europe : sur des milliers de km, le terrain est presque plat, avec de basses collines. Les principaux reliefs sont sur les bords :</p>
<ul>
<li>les <b>Carpates</b>, un grand arc montagneux en Roumanie et dans l'ouest de l'Ukraine ;</li>
<li>l'<b>Oural</b>, des montagnes anciennes et basses (environ 1 900 m au maximum) qui marquent la frontière avec l'Asie ;</li>
<li>le <b>Caucase</b>, entre la mer Noire et la mer Caspienne, avec l'<b>Elbrouz</b> (5 642 m).</li>
</ul>
<p>Loin de l'océan, le climat est <b>continental</b> : hivers longs et très froids, étés chauds, grande différence de température entre les saisons. À <b>Moscou</b>, la moyenne de janvier est d'environ -6 °C, mais il fait souvent moins de -20 °C ; en juillet, la moyenne est d'environ +19 °C.</p>
<p>La végétation change du nord au sud : <b>toundra</b> (près de l'océan Arctique), <b>taïga</b> (immenses forêts de conifères), <b>forêt mixte</b>, <b>steppe</b> (prairies sans arbres, aux terres très fertiles).</p>`
    },
    {
      type: `svg`,
      title: `Les bandes de végétation du nord au sud`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<rect x="0" y="0" width="600" height="55" fill="#e0f2fe"/>
<text x="20" y="34" font-size="16" font-weight="bold" fill="#0c4a6e">NORD · océan Arctique</text>
<rect x="0" y="55" width="600" height="55" fill="#cbd5e1"/>
<text x="20" y="88" font-size="16" font-weight="bold" fill="#1e293b">TOUNDRA : mousses, lichens, sol gelé</text>
<rect x="0" y="110" width="600" height="65" fill="#166534"/>
<text x="20" y="148" font-size="16" font-weight="bold" fill="#ffffff">TAÏGA : forêts de sapins, pins, mélèzes</text>
<polygon points="470,170 485,120 500,170" fill="#14532d"/>
<polygon points="510,170 525,125 540,170" fill="#14532d"/>
<polygon points="550,170 565,118 580,170" fill="#14532d"/>
<rect x="0" y="175" width="600" height="55" fill="#4ade80"/>
<text x="20" y="208" font-size="16" font-weight="bold" fill="#14532d">FORÊT MIXTE : chênes, bouleaux, érables</text>
<rect x="0" y="230" width="600" height="60" fill="#fde047"/>
<text x="20" y="265" font-size="16" font-weight="bold" fill="#713f12">STEPPE : prairies et champs de blé sur « terre noire »</text>
<rect x="0" y="290" width="600" height="30" fill="#60a5fa"/>
<text x="20" y="311" font-size="15" font-weight="bold" fill="#ffffff">SUD · mer Noire et mer Caspienne</text>
</svg>`,
      caption: `Plus on va vers le sud, plus il fait chaud et plus la belle saison dure longtemps : la toundra laisse la place à la forêt, puis à la steppe.`
    },
    {
      type: `3d`,
      title: `Les paysages de l'Europe orientale en 3D`,
      scene: `terrain`,
      caption: `Fais tourner le paysage et touche chaque élément.`,
      options: {
        features: {
          plain: { label: `Plaine`, html: `La <b>plaine sarmatique</b> s'étend de la Pologne à l'Oural : la plus vaste d'Europe.` },
          river: { label: `Fleuve`, html: `La <b>Volga</b> (environ 3 530 km) est le plus long fleuve d'Europe ; le <b>Dniepr</b> (environ 2 200 km) traverse l'Ukraine et la ville de Kiev.` },
          delta: { label: `Delta`, html: `Le <b>delta du Danube</b>, en Roumanie et en Ukraine : canaux, roselières et plus de 300 espèces d'oiseaux, dont des pélicans. C'est une réserve de biosphère de l'UNESCO.` },
          mountain: { label: `Chaîne de montagnes`, html: `Les <b>Carpates</b> forment un arc d'environ 1 500 km ; en Roumanie, le Moldoveanu atteint 2 544 m. On y trouve des ours, des loups et des lynx.` },
          peak: { label: `Sommet`, html: `L'<b>Elbrouz</b> (5 642 m), un volcan éteint du Caucase russe : si l'on considère le Caucase comme européen, c'est la plus haute montagne d'Europe.` },
          glacier: { label: `Glacier`, html: `Les sommets du <b>Caucase</b> sont couverts de grands glaciers.` },
          lake: { label: `Lac`, html: `Le <b>Ladoga</b>, près de Saint-Pétersbourg, est le plus grand lac d'Europe (environ 17 700 km²). La mer Caspienne, à la frontière avec l'Asie, est le plus grand lac du monde.` },
          sea: { label: `Mer`, html: `La <b>mer Noire</b> baigne la Roumanie, l'Ukraine et la Russie ; elle est reliée à la Méditerranée par les détroits du Bosphore et des Dardanelles.` },
          peninsula: { label: `Péninsule`, html: `La <b>Crimée</b>, dans la mer Noire, est une péninsule reliée au continent par un mince isthme.` },
          hill: { label: `Collines`, html: `La <b>Moldavie</b> est un pays de douces collines couvertes de vignobles et de vergers : le point le plus haut dépasse à peine 400 m.` },
          lagoon: { label: `Lagune`, html: `Le long de la côte de la mer Noire se trouvent de nombreuses lagunes (les <i>limans</i>), à l'embouchure des fleuves.` }
        }
      }
    },
    {
      type: `text`,
      title: `2. La Roumanie`,
      html: `<p><b>Capitale</b> : Bucarest · <b>Habitants</b> : environ 19 millions · <b>Superficie</b> : environ 238 000 km² · <b>Régime</b> : république semi-présidentielle · <b>Monnaie</b> : le leu roumain.</p>
<ul>
<li>Le territoire a une forme « en cercles » : au centre le plateau de <b>Transylvanie</b>, autour l'arc des <b>Carpates</b>, puis des collines et des plaines, au sud le <b>Danube</b> et à l'est la <b>mer Noire</b> (port de Constanța).</li>
<li>Le nom et la langue rappellent <b>Rome</b> : en 106 apr. J.-C., l'empereur <b>Trajan</b> conquit la Dacie et la région fut romanisée. Le <b>roumain</b> est une langue néolatine, sœur de l'italien.</li>
<li>Elle fait partie de l'<b>UE depuis 2007</b> et, depuis 2025, elle est pleinement dans l'espace Schengen.</li>
<li>Économie : industrie automobile (Dacia), informatique, agriculture (maïs, blé, tournesol), pétrole et gaz, tourisme.</li>
<li>En Italie vit la communauté roumaine la plus nombreuse parmi les communautés étrangères : environ un million de personnes.</li>
</ul>`
    },
    {
      type: `text`,
      title: `3. La Moldavie (République de Moldova)`,
      html: `<p><b>Capitale</b> : Chișinău · <b>Habitants</b> : environ 2,4 millions · <b>Superficie</b> : environ 33 800 km² (environ un neuvième de l'Italie) · <b>Régime</b> : république parlementaire · <b>Monnaie</b> : le leu moldave.</p>
<ul>
<li>Elle est serrée entre deux fleuves : le <b>Prut</b> à l'ouest (frontière avec la Roumanie) et le <b>Dniestr</b> à l'est. Elle n'a pas d'accès à la mer.</li>
<li>La langue officielle est le <b>roumain</b>. Beaucoup de personnes parlent aussi russe ; il y a des minorités ukrainienne, gagaouze et bulgare.</li>
<li>Son territoire est vallonné, avec des sols fertiles : on y cultive la vigne, des fruits, le tournesol, des céréales. Le <b>vin</b> est une tradition très importante : la cave de <b>Mileștii Mici</b> a environ 200 km de galeries souterraines et est entrée dans le Guinness des records pour la plus grande collection de vins du monde (environ 2 millions de bouteilles).</li>
<li>La région de la <b>Transnistrie</b>, à l'est du Dniestr, s'est séparée de fait au début des années 1990 et n'est reconnue par aucun État membre de l'ONU.</li>
<li>Depuis <b>2022</b>, la Moldavie est <b>pays candidat</b> à l'entrée dans l'Union européenne.</li>
</ul>`
    },
    {
      type: `quiz`,
      title: `Mini-quiz : Roumanie et Moldavie`,
      questions: [
        { type: `mc`, q: `Quel type de langue est le roumain ?`, options: [`Slave`, `Néolatine`, `Germanique`], answer: 1, explain: `Elle dérive du latin, comme l'italien : la Dacie fut une province romaine.` },
        { type: `text`, q: `Quelle est la capitale de la Moldavie ?`, answer: [`chisinau`, `chișinău`, `chisinău`, `kichinev`, `kishinev`], explain: `Chișinău.` },
        { type: `tf`, q: `La Moldavie a un accès à la mer Noire.`, answer: false, explain: `C'est un État sans accès à la mer, entre la Roumanie et l'Ukraine.` }
      ]
    },
    {
      type: `text`,
      title: `4. L'Ukraine`,
      html: `<p><b>Capitale</b> : Kiev (en ukrainien Kyiv) · <b>Superficie</b> : environ 603 500 km², le plus grand État situé entièrement en Europe · <b>Habitants</b> : environ 41 millions avant 2022 ; aujourd'hui le chiffre est incertain à cause de la guerre · <b>Monnaie</b> : la hryvnia.</p>
<ul>
<li>Elle est presque entièrement plate, traversée par le <b>Dniepr</b>. À l'ouest se trouvent les Carpates (Hoverla, 2 061 m), au sud la mer Noire et la mer d'Azov.</li>
<li>Une grande partie du sol est du <b>tchernoziom</b>, la « terre noire », l'un des sols les plus fertiles du monde, très riche en humus. C'est pourquoi l'Ukraine est appelée le <b>« grenier de l'Europe »</b> : c'est l'un des principaux exportateurs mondiaux de blé, de maïs et d'<b>huile de tournesol</b>.</li>
<li>La langue est l'<b>ukrainien</b>, une langue slave écrite en alphabet cyrillique.</li>
<li>Histoire récente : indépendante de l'URSS depuis le <b>24 août 1991</b>. En 1986 y eut lieu la catastrophe nucléaire de <b>Tchernobyl</b>. En 2014, la Russie a occupé et annexé la Crimée, annexion que l'Assemblée générale de l'ONU n'a pas reconnue. Depuis le <b>24 février 2022</b>, la Russie a lancé une <b>invasion à grande échelle</b> de l'Ukraine, condamnée par l'Assemblée générale de l'ONU : la guerre a causé énormément de victimes, de destructions et des millions de réfugiés, dont beaucoup ont aussi été accueillis en Italie.</li>
</ul>
<p><i>Remarque : quand une guerre est en cours, les frontières contrôlées et les données sur la population changent : pour des chiffres à jour, consulte des sources récentes et fiables.</i></p>`
    },
    {
      type: `text`,
      title: `5. La Russie européenne`,
      html: `<p>La <b>Russie</b> est le plus grand État du monde : environ <b>17,1 millions de km²</b> (plus de 56 fois l'Italie), avec 11 fuseaux horaires et environ 146 millions d'habitants. C'est une <b>fédération</b> ; la capitale est <b>Moscou</b>.</p>
<p>L'Oural la partage en deux : la partie <b>asiatique</b> (la Sibérie) est énorme mais peu peuplée ; la partie <b>européenne</b> représente environ un quart du territoire mais abrite environ <b>les trois quarts</b> de la population, les principales villes (Moscou, <b>Saint-Pétersbourg</b>, Nijni Novgorod, Kazan) et la plupart des industries.</p>
<ul>
<li><b>La Volga</b>, le plus long fleuve d'Europe, naît près de Moscou et se jette dans la <b>mer Caspienne</b> ; grâce à des canaux et des barrages, elle est reliée à cinq mers.</li>
<li>Au nord, le port de <b>Mourmansk</b>, au-delà du cercle polaire arctique, reste libre de glaces toute l'année grâce aux eaux chaudes du courant nord-atlantique.</li>
<li><b>Économie</b> : pétrole et gaz naturel (parmi les premiers producteurs du monde), métaux, blé, armes ; beaucoup de ressources viennent de Sibérie.</li>
<li>Parmi ses voisins : la <b>Biélorussie</b> (capitale Minsk) ; au nord-ouest les trois <b>pays baltes</b> (Estonie, Lettonie, Lituanie), indépendants depuis 1991 et dans l'UE depuis 2004.</li>
</ul>`
    },
    {
      type: `widget`,
      title: `De quel pays parle-t-on ?`,
      widget: `classify`,
      options: {
        groups: [`Roumanie`, `Moldavie`, `Ukraine`, `Russie`],
        items: [
          [`🏰 Transylvanie`, 0],
          [`🚗 Voitures Dacia`, 0],
          [`⚓ Port de Constanța`, 0],
          [`🍇 Caves de Mileștii Mici`, 1],
          [`🌊 Entre le Prut et le Dniestr`, 1],
          [`🌻 Grenier de l'Europe, terre noire`, 2],
          [`🏙️ Kyiv sur le Dniepr`, 2],
          [`☢️ Tchernobyl`, 2],
          [`🚂 Transsibérien`, 3],
          [`🏛️ Saint-Pétersbourg`, 3],
          [`🌊 Volga qui se jette dans la Caspienne`, 3]
        ]
      },
      caption: `Certains éléments (Danube, mer Noire, Carpates) sont partagés par plusieurs pays : ici nous avons choisi ceux qui n'appartiennent qu'à un seul.`
    },
    {
      type: `widget`,
      title: `Associe le pays et la capitale`,
      widget: `match`,
      options: {
        pairs: [
          [`🇷🇴 Roumanie`, `Bucarest`],
          [`🇲🇩 Moldavie`, `Chișinău`],
          [`🇺🇦 Ukraine`, `Kiev (Kyiv)`],
          [`🇷🇺 Russie`, `Moscou`],
          [`🇧🇾 Biélorussie`, `Minsk`],
          [`🇧🇬 Bulgarie`, `Sofia`]
        ]
      },
      caption: `La Bulgarie, sur la mer Noire, est souvent étudiée avec les Balkans.`
    },
    {
      type: `example`,
      title: `Exemple pratique : le plus long voyage en train`,
      html: `<p>Le <b>Transsibérien</b> relie Moscou à Vladivostok, sur l'océan Pacifique : <b>9 289 km</b>, la plus longue ligne de chemin de fer du monde. Le voyage dure environ <b>7 jours</b> et traverse 8 fuseaux horaires : à chaque fuseau, il faut avancer sa montre d'une heure.</p>
<p>Calcule : si tu partais de Moscou à 12 h 00 et que le train allait toujours vers l'est, combien d'heures devrais-tu ajouter en arrivant à Vladivostok ? (+7 heures : entre Moscou et Vladivostok il y a 7 heures de différence.) Le tout premier tronçon, de Moscou à l'Oural, traverse toute la Russie européenne : plaines, forêts de bouleaux, la Volga.</p>`
    },
    {
      type: `example`,
      title: `Exemple pratique : l'Europe orientale à table`,
      html: `<p>Beaucoup de produits que tu utilises tous les jours viennent d'ici :</p>
<ul>
<li>l'<b>huile de tournesol</b> dans les biscuits et les chips : l'Ukraine a longtemps été le premier exportateur mondial ;</li>
<li>le <b>blé</b> pour le pain et les pâtes : la Russie et l'Ukraine sont parmi les plus grands exportateurs du monde ;</li>
<li>le <b>maïs</b> pour l'alimentation des animaux ;</li>
<li>le <b>vin</b> moldave et roumain, parmi les plus anciens d'Europe.</li>
</ul>
<p>En 2022, quand la guerre a bloqué pendant des mois les ports ukrainiens de la mer Noire, les prix du blé et de l'huile de tournesol ont augmenté dans le monde entier. C'est un exemple de la façon dont la géographie d'une région lointaine peut toucher notre vie quotidienne.</p>`
    },
    {
      type: `curiosity`,
      title: `Le savais-tu ? La mer Caspienne est un lac !`,
      html: `<p>La <b>mer Caspienne</b>, à la frontière entre l'Europe et l'Asie, est le <b>plus grand lac du monde</b> : environ 371 000 km², plus grand que l'Italie ! On l'appelle « mer » parce que son eau est légèrement salée. Sa surface se trouve à environ <b>28 mètres sous le niveau de la mer</b>. Des esturgeons y vivent, dont les œufs donnent le caviar.</p>`
    },
    {
      type: `curiosity`,
      title: `Le savais-tu ? À Tchernobyl vivent aujourd'hui des loups et des chevaux sauvages !`,
      html: `<p>Après l'explosion du réacteur en 1986, une <b>zone d'exclusion</b> d'environ 30 km de rayon fut créée autour de la centrale et plus de 100 000 personnes furent évacuées. Sans êtres humains, la nature a repris ses droits : aujourd'hui y vivent des loups, des élans, des lynx et même des chevaux de Przewalski, lâchés là dans les années 1990. Mais dans certaines zones, les niveaux de radioactivité restent dangereux pour l'être humain.</p>`
    },
    {
      type: `decision`,
      title: `1703 : tu es le tsar Pierre le Grand`,
      html: `<p>La Russie est immense mais presque fermée : la mer Noire est contrôlée par l'Empire ottoman, les ports de l'Arctique gèlent pendant de nombreux mois et la capitale, Moscou, est très loin de la mer. Tu veux moderniser le pays et le faire commercer avec l'Europe occidentale. Tu viens de conquérir sur les Suédois un tronçon de côte marécageuse à l'embouchure du fleuve Neva, sur la mer Baltique.</p>`,
      question: `Que fais-tu ?`,
      options: [
        { label: `Je reste à Moscou : c'est le cœur historique et religieux de la Russie.`, outcome: `Moscou est sûre, mais à des centaines de km de la mer : le commerce avec l'Europe reste lent et difficile.` },
        { label: `Je construis une nouvelle ville et un port sur la Neva et j'en fais la capitale.`, outcome: `Les marais rendent les travaux très durs, le climat est froid et humide et les Suédois pourraient revenir. Mais la Russie aurait une « fenêtre sur l'Europe ».` },
        { label: `Je mise tout sur l'Arctique, sur la mer Blanche.`, outcome: `Le port d'Arkhangelsk existait déjà, mais il gèle pendant environ six mois par an et il est très loin de l'Europe centrale.` }
      ],
      answer: 1,
      explain: `En 1703, Pierre le Grand fonda <b>Saint-Pétersbourg</b> et, en 1712, il en fit la capitale. Des dizaines de milliers d'ouvriers, souvent forcés, asséchèrent les marais et construisirent la ville sur des îles et des canaux ; beaucoup moururent. La ville devint la « fenêtre sur l'Europe » de la Russie et resta capitale jusqu'en 1918, quand les bolcheviks ramenèrent la capitale à Moscou. Aujourd'hui, c'est la deuxième ville de Russie, avec plus de 5 millions d'habitants, et elle est célèbre pour l'Ermitage et les nuits blanches d'été.`
    },
    {
      type: `alternatives`,
      title: `D'autres façons de comprendre l'Europe orientale`,
      intro: `Des langues, des climats et des distances différents : essaie ces clés de lecture.`,
      tabs: [
        {
          label: `🔤 Le cyrillique en 5 minutes`,
          html: `<p>L'ukrainien, le russe, le biélorusse et le bulgare s'écrivent avec l'<b>alphabet cyrillique</b>, né au IXe siècle grâce aux missionnaires Cyrille et Méthode (et à leurs disciples), surtout à partir de l'alphabet grec. Certaines lettres sont « amies », d'autres « trompeuses » :</p>
<table>
<tr><th>Lettre</th><th>Son</th><th>Attention !</th></tr>
<tr><td>А, К, М, О, Т</td><td>a, k, m, o, t</td><td>comme en français</td></tr>
<tr><td>В</td><td>v</td><td>elle ressemble à un B mais c'est un V</td></tr>
<tr><td>Н</td><td>n</td><td>elle ressemble à un H mais c'est un N</td></tr>
<tr><td>Р</td><td>r</td><td>elle ressemble à un P mais c'est un R</td></tr>
<tr><td>С</td><td>s</td><td>elle ressemble à un C mais c'est un S</td></tr>
<tr><td>Д, Л, П</td><td>d, l, p</td><td>viennent des Δ, Λ, Π grecs</td></tr>
</table>
<p>Essaie de lire : <b>МОСКВА</b> (M-O-S-K-V-A = Moskva, Moscou) et <b>КИЇВ</b> (Kyiv).</p>`
        },
        {
          label: `🌡️ Pourquoi fait-il si froid ?`,
          html: `<p>La mer fonctionne comme un <b>radiateur</b> qui se réchauffe lentement en été et restitue lentement sa chaleur en hiver. La terre ferme, elle, est comme une <b>poêle</b> : elle se réchauffe et se refroidit vite.</p>
<p>L'Europe occidentale reçoit les vents humides et tièdes de l'Atlantique. Plus on va vers l'est, plus ces vents s'« usent » et plus la poêle l'emporte : étés chauds, hivers glacials. Voici les moyennes de janvier à peu près à la même latitude (52-55° N) :</p>
<table>
<tr><th>Ville</th><th>Distance de l'Atlantique</th><th>Moyenne de janvier</th></tr>
<tr><td>Dublin</td><td>sur l'océan</td><td>environ +5 °C</td></tr>
<tr><td>Berlin</td><td>moyenne</td><td>environ +1 °C</td></tr>
<tr><td>Moscou</td><td>très éloignée</td><td>environ -6 °C</td></tr>
</table>`
        },
        {
          label: `🗣️ Roumain et italien`,
          html: `<p>Le roumain est un proche parent de l'italien : beaucoup de mots se comprennent tout de suite ! (Le français aussi est un cousin : on le voit bien.)</p>
<table>
<tr><th>Italien</th><th>Français</th><th>Roumain</th></tr>
<tr><td>casa</td><td>maison</td><td>casă</td></tr>
<tr><td>lupo</td><td>loup</td><td>lup</td></tr>
<tr><td>latte</td><td>lait</td><td>lapte</td></tr>
<tr><td>notte</td><td>nuit</td><td>noapte</td></tr>
<tr><td>scuola</td><td>école</td><td>școală</td></tr>
<tr><td>grazie</td><td>merci</td><td>mulțumesc</td></tr>
</table>
<p>Attention aux surprises : « merci » (mulțumesc) vient d'une autre racine, et l'article défini se place <b>après</b> le nom : <i>lupul</i> = le loup, <i>casa</i> = la maison. Si tu as dans ta classe des camarades roumains ou moldaves, demande-leur de te lire ces mots !</p>`
        },
        {
          label: `🌍 Sur le globe`,
          html: `<p>Fais tourner le globe : trouve les capitales et suis le Transsibérien de Moscou jusqu'au Pacifique. Remarque comme l'Europe est petite par rapport à la Russie asiatique !</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 44.43, lon: 26.1, label: `Bucarest`, color: `#2563eb` },
              { lat: 47.01, lon: 28.86, label: `Chișinău`, color: `#eab308` },
              { lat: 50.45, lon: 30.52, label: `Kiev (Kyiv)`, color: `#0ea5e9` },
              { lat: 55.76, lon: 37.62, label: `Moscou`, color: `#ef4444` },
              { lat: 56.84, lon: 60.6, label: `Iekaterinbourg (Oural)`, color: `#f97316` },
              { lat: 55.03, lon: 82.92, label: `Novossibirsk`, color: `#f97316` },
              { lat: 52.29, lon: 104.3, label: `Irkoutsk (lac Baïkal)`, color: `#f97316` },
              { lat: 43.12, lon: 131.89, label: `Vladivostok`, color: `#ef4444` }
            ],
            routes: [{ points: [3, 4, 5, 6, 7], color: `#dc2626` }]
          }
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Carte de l'Europe orientale`,
      nodes: [
        { id: `pianura`, label: `Plaine sarmatique`, x: 50, y: 6, color: `#65a30d`, html: `La plus vaste plaine d'Europe, de la Pologne à l'Oural.`, why: `C'est un ancien socle de roches très stables (la « plate-forme russe »), recouvert de sédiments ; les glaciers des glaciations l'ont encore aplanie.` },
        { id: `clima`, label: `Climat continental`, x: 18, y: 25, color: `#0ea5e9`, html: `Hivers glacials, étés chauds, forte amplitude thermique.`, why: `L'éloignement de l'Atlantique supprime l'effet adoucissant de la mer ; et dans la plaine, sans montagnes pour faire barrière, l'air froid arctique descend librement vers le sud.` },
        { id: `fasce`, label: `Toundra, taïga, steppe`, x: 18, y: 55, color: `#166534`, html: `Bandes de végétation du nord au sud.`, why: `La végétation dépend surtout de la température et des pluies : avec la latitude change la quantité de lumière et de chaleur qui vient du Soleil.` },
        { id: `terranera`, label: `Terre noire (tchernoziom)`, x: 50, y: 40, color: `#3f3f46`, html: `Sol très fertile des steppes d'Ukraine et du sud de la Russie.`, why: `Pendant des milliers d'années, les herbes de la steppe ont poussé et sont mortes en accumulant de l'humus ; les hivers froids ralentissent leur décomposition, donc le sol s'est enrichi en matière organique.` },
        { id: `granaio`, label: `Grenier de l'Europe`, x: 50, y: 70, color: `#eab308`, html: `Blé, maïs, tournesol exportés dans le monde entier.`, why: `Terre noire + grandes plaines faciles à cultiver avec des machines + ports sur la mer Noire = d'énormes productions agricoles à exporter.` },
        { id: `fiumi`, label: `Grands fleuves`, x: 82, y: 25, color: `#2563eb`, html: `Volga, Dniepr, Danube, Don.`, why: `Dans une plaine énorme et peu inclinée, les fleuves deviennent très longs et lents : parfaits pour la navigation, au point d'avoir été les premières « routes » de la Russie médiévale.` },
        { id: `lingue`, label: `Langues slaves et romanes`, x: 82, y: 55, color: `#a855f7`, html: `Russe, ukrainien, biélorusse (slaves, en cyrillique) ; roumain (néolatin).`, why: `Les peuples slaves se sont répandus dans la région au début du Moyen Âge ; la Dacie, elle, avait été une province romaine (106-271 apr. J.-C.) et a conservé une langue latine, entourée de langues slaves et du hongrois.` },
        { id: `storia`, label: `Empires et indépendances`, x: 82, y: 85, color: `#7f1d1d`, html: `Empire russe, URSS, puis indépendance de l'Ukraine, de la Moldavie, des pays baltes (1991) ; guerre en Ukraine depuis 2014 et à grande échelle depuis 2022.`, why: `Une plaine sans frontières naturelles est facile à traverser pour les armées : pendant des siècles, différents empires se sont disputé ces terres. L'effondrement de l'URSS en 1991 a créé de nouveaux États, avec des questions de frontières et de minorités encore ouvertes.` },
        { id: `risorse`, label: `Pétrole et gaz`, x: 18, y: 85, color: `#f97316`, html: `La Russie est parmi les premiers producteurs mondiaux.`, why: `Dans le sous-sol de la Sibérie, de l'Oural et de la région de la Volga se sont accumulés, en des millions d'années, des restes d'organismes transformés en hydrocarbures. Gazoducs et oléoducs les acheminent en Europe et en Asie.` }
      ],
      edges: [
        [`pianura`, `clima`, `laisse passer l'air arctique`],
        [`clima`, `fasce`, `détermine les`],
        [`fasce`, `terranera`, `dans la steppe naît la`],
        [`terranera`, `granaio`, `fait de l'Ukraine le`],
        [`pianura`, `fiumi`, `abrite`],
        [`fiumi`, `granaio`, `transportent le blé`],
        [`pianura`, `storia`, `facile à envahir`],
        [`lingue`, `storia`, `racontent l'`],
        [`risorse`, `storia`, `intérêts économiques`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-quiz : Ukraine et Russie`,
      questions: [
        { type: `mc`, q: `Pourquoi l'Ukraine est-elle appelée le « grenier de l'Europe » ?`, options: [`À cause de ses grands entrepôts`, `À cause de sa terre noire très fertile et de ses grandes cultures de céréales`, `Parce qu'elle importe beaucoup de blé`], answer: 1, explain: `Le tchernoziom et les vastes plaines permettent d'énormes récoltes.` },
        { type: `mc`, q: `Où la Volga se jette-t-elle ?`, options: [`Dans la mer Noire`, `Dans la mer Baltique`, `Dans la mer Caspienne`], answer: 2, explain: `Dans la mer Caspienne, le plus grand lac du monde.` },
        { type: `tf`, q: `La plupart des habitants de la Russie vivent dans la partie européenne.`, answer: true, explain: `Environ les trois quarts, même si la partie européenne ne représente qu'un quart du territoire.` }
      ]
    }
  ],
  glossary: [
    { t: `Plaine sarmatique`, d: `La grande plaine de l'Europe orientale, appelée aussi plaine russe.` },
    { t: `Climat continental`, d: `Climat aux hivers très froids et aux étés chauds, typique des régions éloignées de la mer.` },
    { t: `Amplitude thermique`, d: `Différence entre la température la plus haute et la plus basse sur une période (jour ou année).` },
    { t: `Toundra`, d: `Milieu froid sans arbres, avec des mousses et des lichens, près du cercle polaire arctique.` },
    { t: `Taïga`, d: `Immense forêt de conifères des régions froides de l'hémisphère nord.` },
    { t: `Steppe`, d: `Vaste prairie sans arbres, aux étés chauds et secs.` },
    { t: `Tchernoziom (terre noire)`, d: `Sol sombre et très fertile, riche en humus, typique des steppes.` },
    { t: `Alphabet cyrillique`, d: `Alphabet utilisé pour le russe, l'ukrainien, le biélorusse, le bulgare, le serbe et d'autres langues.` },
    { t: `Langue néolatine`, d: `Langue issue du latin, comme l'italien, le roumain, le français, l'espagnol.` },
    { t: `Pays candidat`, d: `État officiellement en attente d'entrer dans l'Union européenne, comme la Moldavie et l'Ukraine.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quelles montagnes marquent la frontière entre l'Europe et l'Asie ?`, options: [`Les Carpates`, `L'Oural`, `Les Alpes`], answer: 1, explain: `L'Oural, en Russie.` },
      { type: `text`, q: `Quelle est la capitale de la Roumanie ?`, answer: [`bucarest`, `bucuresti`, `bucurești`], explain: `Bucarest.` },
      { type: `mc`, q: `Pourquoi parle-t-on une langue néolatine en Roumanie ?`, options: [`À cause du commerce avec l'Espagne`, `Parce que la Dacie a été conquise et romanisée par les Romains`, `À cause d'une loi moderne`], answer: 1, explain: `Trajan conquit la Dacie en 106 apr. J.-C.` },
      { type: `mc`, q: `Entre quels fleuves se trouve la Moldavie ?`, options: [`Prut et Dniestr`, `Volga et Don`, `Rhin et Danube`], answer: 0, explain: `Le Prut à l'ouest, le Dniestr à l'est.` },
      { type: `tf`, q: `L'Ukraine est le plus grand État situé entièrement en Europe.`, answer: true, explain: `Environ 603 500 km² ; la Russie est plus grande mais en grande partie en Asie.` },
      { type: `order`, q: `Classe les bandes de végétation du NORD au SUD.`, items: [`Toundra`, `Taïga`, `Forêt mixte`, `Steppe`], explain: `Du froid de l'Arctique aux prairies chaudes près de la mer Noire.` },
      { type: `mc`, q: `Qu'est-ce que le tchernoziom ?`, options: [`Un vent froid`, `Un sol noir et très fertile`, `Une montagne`], answer: 1, explain: `La « terre noire » riche en humus des steppes.` },
      { type: `num`, q: `Environ combien de kilomètres mesure le Transsibérien ?`, answer: 9289, tol: 300, unit: `km`, explain: `9 289 km de Moscou à Vladivostok.` },
      { type: `mc`, q: `Quel lac est le plus grand d'Europe ?`, options: [`Le Ladoga`, `Le Balaton`, `Le lac de Garde`], answer: 0, explain: `Le Ladoga, en Russie, environ 17 700 km².` },
      { type: `mc`, q: `Quel alphabet utilise-t-on pour écrire l'ukrainien et le russe ?`, options: [`Latin`, `Grec`, `Cyrillique`], answer: 2, explain: `L'alphabet cyrillique.` },
      { type: `text`, q: `Quelle ville Pierre le Grand a-t-il fondée en 1703 sur la mer Baltique ? (Saint-…)`, answer: [`saint-pétersbourg`, `saint-petersbourg`, `saint pétersbourg`, `saint petersbourg`, `pétersbourg`, `petersbourg`], explain: `Saint-Pétersbourg, capitale de la Russie de 1712 à 1918.` },
      { type: `tf`, q: `La Roumanie fait partie de l'Union européenne depuis 2007.`, answer: true, explain: `En même temps que la Bulgarie, en 2007.` }
    ]
  }
});
