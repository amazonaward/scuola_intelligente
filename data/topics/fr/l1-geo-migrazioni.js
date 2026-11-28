TOPIC('fr', {
  id: "l1-geo-migrazioni",
  title: "Les migrations",
  intro: "Les êtres humains se sont toujours déplacés : les premiers <i>Homo sapiens</i> ont quitté l'Afrique il y a des dizaines de milliers d'années, et aujourd'hui environ <b>280 à 300 millions</b> de personnes vivent dans un pays différent de celui où elles sont nées. Pourquoi part-on ? Où va-t-on ? Qu'est-ce qui change pour ceux qui partent, pour ceux qui arrivent et pour ceux qui restent ? Apprenons à distinguer les termes, les causes, les routes et les conséquences, avec des données et non avec des slogans.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Les mots justes : qui est un migrant ?",
      html: `<p>Dans le langage courant, on emploie comme synonymes des mots qui ont en réalité des sens différents, y compris juridiques. Les distinguer est la première étape pour bien raisonner.</p>
<ul>
<li><b>Migrant</b> (ou émigré/immigré) : personne qui s'installe dans un autre lieu pour une période importante. On parle d'<b>émigré</b> du point de vue du pays de départ, d'<b>immigré</b> du point de vue du pays d'arrivée. Les migrations sont <b>internes</b> (à l'intérieur d'un même État, comme du Sud vers le Nord de l'Italie dans les années 1950-1960) ou <b>internationales</b> (d'un État à un autre).</li>
<li><b>Migrant économique</b> : personne qui part pour trouver du travail ou améliorer ses conditions de vie.</li>
<li><b>Réfugié</b> : selon la <b>convention de Genève de 1951</b>, personne qui se trouve hors de son pays et qui ne peut ou ne veut pas y retourner parce qu'elle craint avec raison d'être persécutée du fait de sa race, de sa religion, de sa nationalité, de son appartenance à un groupe social ou de ses opinions politiques. Elle a droit à la <b>protection internationale</b> et au principe de <b>non-refoulement</b> : elle ne peut pas être renvoyée là où sa vie est menacée.</li>
<li><b>Demandeur d'asile</b> : personne qui a demandé une protection et attend la réponse de l'État. Tous les demandeurs d'asile ne sont pas reconnus comme réfugiés.</li>
<li><b>Déplacé interne</b> (<i>internally displaced person</i>) : personne obligée de quitter son domicile mais qui reste dans son pays (c'est souvent le cas de la majorité des victimes de guerres et d'inondations).</li>
<li><b>Migrant en situation irrégulière</b> : personne qui entre ou reste dans un pays sans les documents exigés. La régularité est une situation juridique, pas une qualité de la personne.</li>
</ul>
<p>La Constitution italienne prévoit le droit d'asile à son <b>article 10</b> : l'étranger qui est empêché, dans son pays, d'exercer effectivement les libertés démocratiques garanties par la Constitution italienne a droit à l'asile. (En France, le droit d'asile figure aussi dans le préambule de la Constitution de 1946.)</p>`
    },
    {
      type: "text",
      title: "2. Pourquoi migre-t-on : facteurs répulsifs et attractifs",
      html: `<p>En 1966, le géographe Everett Lee proposa un modèle encore utilisé : la décision de migrer naît de la comparaison entre les <b>facteurs répulsifs</b> (<i>push</i>, qui poussent à quitter le lieu d'origine) et les <b>facteurs attractifs</b> (<i>pull</i>, qui attirent vers le lieu de destination), en présence d'<b>obstacles</b> (distance, coûts, lois, langue).</p>
<ul>
<li><b>Facteurs répulsifs</b> : pauvreté et chômage, guerres et persécutions, régimes autoritaires, catastrophes naturelles et <b>changement climatique</b> (sécheresse, désertification, montée des mers), manque de services (écoles, santé).</li>
<li><b>Facteurs attractifs</b> : emploi et salaires plus élevés, sécurité, liberté, études, regroupement familial, services et qualité de vie.</li>
<li><b>Réseaux sociaux</b> : on part souvent là où se trouvent déjà des parents ou des gens du même village, qui aident à trouver un logement et un travail (<b>migration en chaîne</b>). C'est pourquoi les Italiens se regroupaient dans certains quartiers de New York ou dans certaines villes d'Argentine, et pourquoi, aujourd'hui, les communautés marocaines ou chinoises s'installent dans des zones précises.</li>
</ul>
<p><b>Une idée fausse mais répandue</b> : la plupart des migrants <b>ne sont pas</b> les plus pauvres parmi les pauvres. Émigrer coûte cher (voyage, papiers, parfois des milliers d'euros), donc ce sont ceux qui ont un peu plus de ressources qui partent. De plus, <b>la plupart des migrants africains se déplacent en restant en Afrique</b>, et la plupart des réfugiés du monde sont accueillis dans des pays à revenu faible ou intermédiaire voisins du leur (Turquie, Iran, Colombie, Ouganda, Pakistan), et non en Europe.</p>`
    },
    {
      type: "widget",
      title: "Activité : répulsif ou attractif ?",
      widget: "classify",
      options: {
        groups: ["Facteur répulsif", "Facteur attractif"],
        items: [
          ["💥 Guerre dans le pays d'origine", 0],
          ["💼 Offre d'emploi à l'étranger", 1],
          ["🌵 Sécheresse et récoltes perdues", 0],
          ["🎓 Université prestigieuse", 1],
          ["👪 Parents déjà émigrés", 1],
          ["🚫 Persécutions politiques", 0],
          ["🏥 Système de santé efficace", 1],
          ["📉 Chômage des jeunes très élevé", 0]
        ]
      },
      caption: "En réalité, chaque décision de migrer combine presque toujours plusieurs facteurs."
    },
    {
      type: "svg",
      title: "Qui migre : les grands chiffres",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Sur 100 personnes dans le monde (environ)</text>
<g>
<rect x="40" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="75" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="110" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="145" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="180" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="215" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="250" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="285" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="320" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="355" y="50" width="30" height="30" fill="#f97316" stroke="#9a3412"/>
</g>
<text x="40" y="110" font-size="15" fill="#111827">Près de 96-97 personnes sur 100 vivent dans le pays où elles sont nées.</text>
<text x="40" y="136" font-size="15" fill="#9a3412" font-weight="bold">Environ 3-4 sur 100 sont des migrants internationaux.</text>
<rect x="40" y="170" width="520" height="22" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="40" y="170" width="94" height="22" fill="#ef4444" stroke="#7f1d1d"/>
<text x="40" y="215" font-size="15" fill="#111827">Parmi eux (environ 1 sur 3 ou 4) : des personnes fuyant guerres et persécutions.</text>
<text x="40" y="240" font-size="15" fill="#111827">Les déplacés forcés dans le monde (déplacés internes compris) : plus de 120 millions.</text>
<text x="40" y="270" font-size="14" fill="#6b7280">Estimations ONU / HCR (données arrondies, mises à jour chaque année).</text>
</svg>`,
      caption: "Le nombre de migrants (environ 3,6-3,7 % de la population mondiale) est élevé en valeur absolue mais limité en pourcentage : la grande majorité des gens ne quitte pas le pays où elle est née."
    },
    {
      type: "quiz",
      title: "Mini-quiz : termes et causes",
      questions: [
        { type: "mc", q: "Qui est un réfugié selon la convention de Genève ?", options: ["Une personne qui émigre pour trouver un meilleur travail", "Une personne qui est hors de son pays par crainte fondée de persécution", "Une personne qui change de ville dans son propre pays"], answer: 1, explain: "Le réfugié fuit des persécutions liées à sa race, sa religion, sa nationalité, son groupe social ou ses opinions politiques." },
        { type: "mc", q: "Lequel de ces facteurs est un facteur répulsif ?", options: ["Un travail bien payé à l'étranger", "Une guerre dans le pays d'origine", "Une université prestigieuse"], answer: 1, explain: "Les guerres poussent les gens à quitter leur lieu d'origine ; les autres sont des facteurs attractifs." },
        { type: "tf", q: "La plupart des réfugiés du monde sont accueillis en Europe.", answer: false, explain: "La plupart sont accueillis dans des pays à revenu faible ou intermédiaire voisins de leur pays d'origine." }
      ]
    },
    {
      type: "text",
      title: "3. Une histoire de déplacements",
      html: `<p>Les migrations ne sont pas un phénomène récent :</p>
<ul>
<li><b>Préhistoire</b> : <i>Homo sapiens</i> se répand à partir de l'Afrique (les migrations qui ont peuplé le reste du monde datent d'environ 70 000 à 60 000 ans) et atteint tous les continents, sauf l'Antarctique.</li>
<li><b>Antiquité et Moyen Âge</b> : colonisation grecque et phénicienne de la Méditerranée, migrations des peuples germaniques après le IVe siècle, expansion arabe et mongole.</li>
<li><b>À partir du XVIe siècle</b> : conquête des Amériques et <b>traite atlantique des esclaves</b> : environ <b>12,5 millions</b> d'Africains furent embarqués de force entre le XVIe et le XIXe siècle, dont environ 10,7 millions survécurent à la traversée. Ce fut une migration <b>forcée</b>.</li>
<li><b>1850-1914</b> : la <b>grande émigration européenne</b> outre-mer : entre 50 et 60 millions d'Européens (Irlandais, Allemands, Italiens, Polonais, Scandinaves, Juifs d'Europe de l'Est) partirent vers l'Amérique du Nord, l'Argentine, le Brésil, l'Australie. À Ellis Island, à New York, environ 12 millions de personnes passèrent entre 1892 et 1954.</li>
<li><b>XXe siècle</b> : déplacements de masse liés aux guerres (échanges de populations, réfugiés de la Seconde Guerre mondiale), décolonisation, migration de travailleurs vers l'Europe occidentale après 1945 (<b>Gastarbeiter</b> en Allemagne), Grande Migration des Afro-Américains du Sud vers le Nord des États-Unis (1916-1970, environ 6 millions de personnes).</li>
<li><b>Aujourd'hui</b> : migrations vers les pays du Golfe, les États-Unis, l'Europe ; forte migration à l'intérieur de l'Asie et de l'Afrique ; migrations climatiques et de réfugiés (Syrie, Afghanistan, Ukraine, Soudan, Venezuela).</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple concret : les Italiens qui sont partis",
      html: `<p>Entre <b>1876</b> et <b>1976</b>, environ <b>27 millions d'Italiens</b> quittèrent leur pays (certains revinrent ensuite). Les destinations furent les Amériques (Argentine, Brésil, États-Unis), les pays européens (France, Suisse, Allemagne, Belgique) et l'Australie. Partirent d'abord les Vénètes, les Frioulans, les Piémontais, puis de plus en plus de gens du Sud (Sicile, Campanie, Calabre, Pouilles).</p>
<p>En 1900, un paysan du Sud de l'Italie pouvait gagner en quelques mois à New York plus qu'en un an dans son pays : le facteur répulsif était la <b>faim de terre et de travail</b>, le facteur attractif les salaires américains. En 1946, l'Italie signa un accord avec la Belgique : des hommes partaient travailler dans les mines en échange de charbon. Le 8 août 1956, dans la mine de <b>Marcinelle</b>, 262 mineurs moururent, dont 136 Italiens. Les Italiens subirent eux aussi préjugés et discriminations, et furent victimes de violences, comme le lynchage de onze Italiens à La Nouvelle-Orléans en 1891 ou le massacre d'Aigues-Mortes, en France, en 1893.</p>
<p>Aujourd'hui, plus de <b>6 millions de citoyens italiens</b> vivent à l'étranger (inscrits au registre AIRE), et environ <b>80 millions de personnes dans le monde</b> ont des origines italiennes (surtout au Brésil et en Argentine). Depuis les années 2010, beaucoup de jeunes diplômés partent encore : c'est ce qu'on appelle la <b>« fuite des cerveaux »</b>.</p>`
    },
    {
      type: "3d",
      title: "Sur le globe : quelques grandes routes migratoires",
      scene: "globe",
      options: {
        points: [
          { lat: 38.1, lon: 13.4, label: "Italie (départ des migrants du XIXe siècle)", color: "#16a34a" },
          { lat: 40.7, lon: -74.0, label: "New York (Ellis Island)", color: "#7c3aed" },
          { lat: -34.6, lon: -58.4, label: "Buenos Aires", color: "#0ea5e9" },
          { lat: 14.7, lon: -17.4, label: "Dakar (Afrique de l'Ouest)", color: "#f59e0b" },
          { lat: 33.9, lon: 10.1, label: "Tunisie (route de la Méditerranée centrale)", color: "#dc2626" },
          { lat: 36.0, lon: 14.5, label: "Lampedusa", color: "#dc2626" },
          { lat: 25.3, lon: 55.3, label: "Émirats (travailleurs venus d'Asie)", color: "#a16207" },
          { lat: 28.6, lon: 77.2, label: "Delhi (Inde)", color: "#ec4899" },
          { lat: 19.4, lon: -99.1, label: "Mexico", color: "#2563eb" },
          { lat: 33.7, lon: -118.2, label: "Los Angeles", color: "#2563eb" }
        ],
        routes: [
          { points: [0, 1], color: "#16a34a" },
          { points: [0, 2], color: "#16a34a" },
          { points: [4, 5, 0], color: "#dc2626" },
          { points: [7, 6], color: "#ec4899" },
          { points: [8, 9], color: "#2563eb" }
        ]
      },
      caption: "Vert : l'émigration italienne historique. Rouge : la route de la Méditerranée centrale. Rose : les travailleurs asiatiques vers les pays du Golfe. Bleu : Mexique-États-Unis."
    },
    {
      type: "text",
      title: "4. Aujourd'hui : d'où, vers où",
      html: `<p>Selon les estimations de l'ONU, il y avait en 2020 environ <b>281 millions</b> de migrants internationaux (3,6 % de la population mondiale) ; en 2024, ils sont passés à environ <b>304 millions</b> (3,7 %).</p>
<ul>
<li><b>Pays de destination</b> : les <b>États-Unis</b> (environ 50 millions de personnes nées à l'étranger) arrivent en tête ; suivent l'<b>Allemagne</b>, l'<b>Arabie saoudite</b>, la <b>Russie</b>, le <b>Royaume-Uni</b>. Dans les pays du Golfe (Émirats, Qatar, Koweït), les étrangers sont la <b>majorité</b> des habitants (par exemple environ 88 % au Qatar), surtout des ouvriers du bâtiment et des employés domestiques venus d'Inde, du Pakistan, du Bangladesh, du Népal et des Philippines.</li>
<li><b>Pays d'origine</b> : l'<b>Inde</b> (environ 18 millions d'émigrés, la plus grande diaspora), le <b>Mexique</b>, la <b>Russie</b>, la <b>Chine</b>, la <b>Syrie</b>, le <b>Bangladesh</b>, le <b>Pakistan</b>, l'<b>Ukraine</b>.</li>
<li><b>Principaux corridors</b> : Mexique → États-Unis ; Asie du Sud → pays du Golfe ; Syrie → Turquie, Liban, Allemagne ; Ukraine → Pologne et UE (depuis 2022) ; Venezuela → Colombie et Amérique du Sud ; Afrique subsaharienne → autres pays africains et, dans une moindre mesure, Europe.</li>
<li><b>Réfugiés et déplacés</b> (HCR) : plus de <b>120 millions</b> de personnes contraintes de fuir (déplacés internes compris). Parmi les pays qui accueillent le plus de réfugiés : Iran, Turquie, Colombie, Allemagne, Ouganda, Pakistan.</li>
</ul>
<p>La <b>route de la Méditerranée centrale</b> (de la Libye et de la Tunisie vers Lampedusa et la Sicile) est l'une des plus dangereuses : depuis 2014, on a compté plus de 25 000 morts et disparus en Méditerranée. L'Union européenne dispose du <b>règlement de Dublin</b>, qui prévoit (en général) que la demande d'asile est examinée par le premier pays de l'UE où la personne est entrée, et d'un récent <b>pacte sur la migration et l'asile</b> (2024).</p>
<p>En <b>Italie</b> résident plus de <b>5 millions</b> d'étrangers (environ 9 % de la population), venus de Roumanie, du Maroc, d'Albanie, de Chine, d'Ukraine. La <b>nationalité</b> italienne s'acquiert en principe par le <b>droit du sang</b> (<i>ius sanguinis</i>, descendance de citoyens italiens) ou, pour les étrangers, après 10 ans de résidence (4 ans pour les citoyens de l'UE, 5 pour les apatrides et les réfugiés) ou par mariage.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Les transferts d'argent valent plus que l'aide",
      html: `<p>Les migrants envoient chez eux une partie de leurs gains : ce sont les <b>transferts de fonds</b> (ou envois de fonds). Selon la Banque mondiale, ils ont atteint en 2023 environ <b>650 milliards de dollars</b> vers les pays à revenu faible ou intermédiaire, plus que les investissements directs et bien plus que l'aide au développement. Dans certains pays (Tonga, Liban, Tadjikistan, Népal), ils représentent plus d'un quart du PIB. Un travailleur philippin à Dubaï qui envoie 300 dollars par mois chez lui peut payer les études de deux neveux.</p>`
    },
    {
      type: "example",
      title: "Exemple concret : lire une donnée migratoire",
      html: `<p>Un pays compte <b>10 millions</b> d'habitants, dont <b>1,2 million</b> nés à l'étranger ; en un an, 80 000 personnes arrivent et 30 000 partent.</p>
<ul>
<li>Part des personnes nées à l'étranger = 1 200 000 ÷ 10 000 000 = <b>12 %</b>.</li>
<li><b>Solde migratoire</b> = 80 000 − 30 000 = <b>+50 000</b> (environ +5 pour mille).</li>
<li>Si, cette année-là, les naissances ne dépassent les décès que de 10 000, le solde total est de +60 000 : <b>les 5/6 de la croissance viennent des migrations</b>.</li>
</ul>
<p>C'est le cas de nombreux pays européens : la population augmente (ou ne diminue pas) grâce au solde migratoire, et non au solde naturel.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le Brésil compte plus d'« Italiens » que l'Italie",
      html: `<p>Selon les estimations, environ <b>30 millions</b> de personnes d'origine italienne vivent au <b>Brésil</b> (plus de 10 % de la population), plus que dans n'importe quelle région italienne, et il y a à <b>São Paulo</b> plus de descendants d'Italiens qu'à Rome. En Argentine aussi, environ la moitié de la population a au moins un ancêtre italien. Les migrations laissent des traces dans les noms de famille, la cuisine, les dialectes (le <i>talian</i>, dérivé du vénitien, est une langue reconnue dans certaines communes du Rio Grande do Sul).</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Les migrations internes changent aussi le visage d'un pays",
      html: `<p>Entre les années 1950 et 1970, des millions d'Italiens partirent du Sud vers le Nord. <b>Turin</b> fut même appelée « la troisième ville méridionale d'Italie » (après Naples et Palerme), car pendant des années des milliers de personnes y arrivaient chaque mois pour travailler chez Fiat. En 1861, l'Italie était unifiée mais divisée par ses langues et ses habitudes : ce sont les migrations internes, avec l'école et la télévision, qui ont fait de l'italien une langue parlée par tous.</p>`
    },
    {
      type: "text",
      title: "5. Conséquences : pour ceux qui partent, ceux qui arrivent et ceux qui restent",
      html: `<p>Les migrations produisent des effets complexes, que les études mesurent avec des données et non avec des impressions.</p>
<ul>
<li><b>Dans les pays d'arrivée</b> : les migrants occupent des emplois pour lesquels on manque de main-d'œuvre (agriculture, aide aux personnes âgées, bâtiment, restauration, santé) et <b>compensent le vieillissement</b> : en Italie, les étrangers versent chaque année plus de cotisations qu'ils ne reçoivent de prestations (des estimations de fondations et de l'INPS, la sécurité sociale italienne, montrent un solde positif) et contribuent à environ <b>9 %</b> du PIB (estimations de fondations de recherche). En même temps, il y a des défis : <b>intégration</b> scolaire et linguistique, concurrence dans certains secteurs peu qualifiés, tensions si les arrivées sont très rapides et concentrées, risque d'exploitation (le <i>caporalato</i>, recrutement illégal de main-d'œuvre agricole en Italie).</li>
<li><b>Dans les pays d'origine</b> : arrivent des <b>transferts de fonds</b> et des compétences acquises à l'étranger (<i>brain circulation</i>), mais il peut y avoir une <b>fuite des cerveaux</b> (<i>brain drain</i>) : des médecins, des ingénieurs, des infirmiers qui partent et laissent le pays sans professionnels.</li>
<li><b>Pour les migrants</b> : des revenus plus élevés, mais aussi des risques (voyage, exploitation, discrimination) et l'éloignement de la famille.</li>
<li><b>Sur le plan culturel</b> : langues, cuisines, musiques et religions se mélangent. Pense à tout ce qui, dans la cuisine « italienne » (tomate, pomme de terre, maïs), vient des Amériques, ou à la pizza aux États-Unis et au Brésil.</li>
</ul>
<p>Les sociétés suivent différents modèles d'accueil : l'<b>assimilation</b> (le migrant adopte la culture dominante et perd la sienne), le <b>multiculturalisme</b> (des cultures différentes coexistent avec la même dignité), l'<b>intégration</b> (le migrant participe pleinement à la société, et chacun respecte les règles communes tout en gardant son identité). La Constitution italienne protège les droits inviolables de toute personne, citoyenne ou non (art. 2).</p>`
    },
    {
      type: "decision",
      title: "1905 : partir ou rester ?",
      html: `<p>Nous sommes en 1905. Tu es un jeune paysan d'un village de Calabre. La terre est rare, la récolte de blé est maigre, tu as une femme et un petit enfant. Une lettre arrive d'un cousin : à Buenos Aires (ou à New York), on cherche des ouvriers agricoles, des ouvriers du bâtiment et des maçons, et le salaire est au moins quatre fois plus élevé. Le voyage en bateau en troisième classe coûte presque une année de revenus. Les journaux parlent d'escroqueries d'« agents d'émigration » et de conditions de vie difficiles.</p>`,
      question: "Qu'aurais-tu fait ?",
      options: [
        { label: "Rester et espérer une meilleure année", outcome: "Tu restes près de ta famille, mais les données montrent que le niveau de vie de beaucoup de familles paysannes du Sud se dégradait ; ceux qui restaient finissaient souvent par émigrer quelques années plus tard." },
        { label: "Partir seul et envoyer l'argent à la maison", outcome: "C'était le choix le plus courant : le père partait, travaillait pendant des années et envoyait de l'argent. Beaucoup revenaient (environ la moitié des émigrés italiens du XXe siècle rentrèrent au pays)." },
        { label: "Partir avec toute la famille", outcome: "C'était moins fréquent et très coûteux : on risquait de couper complètement les liens avec ses origines, même si les enfants auraient de meilleures chances." }
      ],
      answer: 1,
      explain: "L'histoire montre que beaucoup d'émigrés partirent seuls (migration « temporaire » ou d'aller-retour) et envoyèrent de l'argent ; le « retour » faisait partie du projet, et les transferts des émigrés furent pendant des décennies une ressource importante de l'économie italienne. Aucun choix n'était sans risque."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les migrations",
      intro: "On parle souvent des migrations avec des chiffres et des slogans : voici d'autres points de vue.",
      tabs: [
        {
          label: "🌊 Le fleuve et le barrage",
          html: `<p>Imagine les migrations comme l'eau d'un fleuve : elle coule des endroits « hauts » (avec peu de possibilités) vers les endroits « bas » (avec plus de possibilités), et elle trouve toujours un chemin. Construire un <b>barrage</b> (barrières, frontières fermées) peut détourner le flux ou changer son parcours (routes plus longues et plus dangereuses), mais l'arrête rarement complètement : souvent, il le fait passer de légal à irrégulier. Les politiques migratoires efficaces cherchent à <b>gérer</b> le flux par des voies légales (visas de travail, couloirs humanitaires, regroupement familial), comme si l'on construisait des <b>canaux</b> et pas seulement des barrages.</p>`
        },
        {
          label: "🧳 L'histoire d'une famille",
          html: `<p>Demande à tes grands-parents et arrière-grands-parents : d'où vient ta famille ? Beaucoup de familles ont un parent qui a vécu dans un autre pays ou une autre région. Tu peux dessiner un <b>arbre des migrations</b> : une carte avec des flèches allant du lieu de naissance au lieu de résidence, sur trois générations. Tu découvriras que les migrations, proches ou lointaines, font partie de l'histoire de presque tout le monde. L'Italie contemporaine est elle aussi née de <b>migrations internes</b> : après la guerre, des millions de méridionaux et de Vénètes partirent travailler à Turin, Milan, Gênes.</p>`
        },
        {
          label: "📊 Une autre échelle",
          html: `<p>Une façon de mesurer : les quelque <b>181 000</b> arrivées par la mer en Italie en 2016 (le record historique) représentaient environ <b>0,3 %</b> de la population italienne ; le Liban a accueilli plus d'un million de Syriens pour environ 6 millions d'habitants (plus de 15 %). En changeant l'<b>échelle</b> de comparaison (pays, continent, monde), la perception change. Autre échelle utile : dans le monde, environ 3,7 personnes sur 100 vivent hors de leur pays de naissance ; <b>96,3 sur 100, non</b>.</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#fefce8"/><rect x="40" y="60" width="420" height="30" fill="#e5e7eb" stroke="#6b7280"/><rect x="40" y="60" width="16" height="30" fill="#f97316" stroke="#9a3412"/><text x="40" y="45" font-size="15" fill="#111827" font-weight="bold">Migrants internationaux dans le monde : 3,7 %</text><rect x="40" y="130" width="420" height="30" fill="#e5e7eb" stroke="#6b7280"/><rect x="40" y="130" width="38" height="30" fill="#ef4444" stroke="#7f1d1d"/><text x="40" y="115" font-size="15" fill="#111827" font-weight="bold">Étrangers résidant en Italie : environ 9 %</text><text x="40" y="185" font-size="14" fill="#6b7280">barres à l'échelle (gris = le reste de la population)</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : pourquoi et comment on se déplace",
      nodes: [
        { id: "spinta", label: "Facteurs répulsifs", x: 20, y: 8, color: "#dc2626", html: "Pauvreté, guerres, persécutions, catastrophes, climat.", why: "Ce sont les raisons pour lesquelles il est difficile de rester : la pauvreté extrême ou les guerres réduisent les possibilités de choix. Les recherches montrent cependant que la pauvreté seule n'explique pas les départs : il faut aussi des ressources et des aspirations." },
        { id: "attrazione", label: "Facteurs attractifs", x: 80, y: 8, color: "#16a34a", html: "Travail, sécurité, études, liberté.", why: "Les salaires en Europe ou aux États-Unis peuvent être 5 à 10 fois plus élevés que dans beaucoup de pays d'origine, et le besoin de main-d'œuvre vient aussi du vieillissement des pays riches : la démographie relie le Nord et le Sud." },
        { id: "reti", label: "Réseaux et obstacles", x: 50, y: 30, color: "#a855f7", html: "Parents à l'étranger, lois, coûts, distance.", why: "Les réseaux sociaux expliquent pourquoi les migrations se concentrent sur quelques corridors (le sociologue Douglas Massey les a étudiés pour le corridor Mexique-États-Unis) ; les lois et les coûts déterminent si le voyage est régulier ou irrégulier." },
        { id: "rotte", label: "Routes et flux", x: 20, y: 56, color: "#2563eb", html: "Méditerranée, Mexique-États-Unis, Asie-Golfe.", why: "Les routes suivent la géographie et les politiques : si un passage se ferme (Balkans, 2016), le flux se déplace vers une autre route (Méditerranée centrale), souvent plus risquée." },
        { id: "diritto", label: "Droit international", x: 80, y: 56, color: "#f59e0b", html: "Convention de Genève de 1951, non-refoulement, asile.", why: "Après la Seconde Guerre mondiale et l'expérience des millions de réfugiés et de ceux qui avaient été refoulés vers les régimes qui les persécutaient, les États décidèrent d'établir un droit international à la protection." },
        { id: "effetti", label: "Conséquences", x: 50, y: 78, color: "#ec4899", html: "Démographiques, économiques, culturelles.", why: "Les effets dépendent de la rapidité des arrivées, de la qualification des migrants et des politiques d'intégration : une même migration peut être une ressource ou un problème selon la façon dont elle est gérée." },
        { id: "gestione", label: "Gérer les migrations", x: 50, y: 95, color: "#14b8a6", html: "Voies légales, accords, coopération, intégration.", why: "Le Pacte mondial pour des migrations sûres, ordonnées et régulières (ONU, 2018) est le premier accord international sur ce sujet : il n'est pas contraignant, mais il reconnaît qu'aucun pays ne peut gérer seul la question." }
      ],
      edges: [
        ["spinta", "reti", "plus"],
        ["attrazione", "reti", "plus"],
        ["reti", "rotte", "orientent les"],
        ["diritto", "rotte", "encadre les"],
        ["rotte", "effetti", "produisent des"],
        ["diritto", "effetti", "protège"],
        ["effetti", "gestione", "exigent de"]
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Environ <b>280 à 300 millions</b> de migrants internationaux, soit environ <b>3,6-3,7 %</b> de l'humanité.</li>
<li><b>Migrant</b> ≠ <b>réfugié</b> ≠ <b>demandeur d'asile</b> ≠ <b>déplacé interne</b>. Convention de Genève : 1951.</li>
<li><b>Push</b> (facteurs répulsifs) et <b>pull</b> (facteurs attractifs) ; réseaux sociaux et obstacles.</li>
<li>Grande émigration européenne 1850-1914 ; émigrés italiens : environ 27 millions entre 1876 et 1976.</li>
<li>Transferts de fonds : environ 650 milliards de dollars par an vers les pays à revenu faible ou intermédiaire.</li>
<li>Les effets dépendent beaucoup de la façon dont les migrations sont <b>gérées</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : histoire et conséquences",
      questions: [
        { type: "mc", q: "Quel événement historique a provoqué la migration forcée d'environ 12,5 millions d'Africains ?", options: ["La traite atlantique des esclaves", "La révolution industrielle", "La Première Guerre mondiale"], answer: 0, explain: "Entre le XVIe et le XIXe siècle, environ 12,5 millions d'Africains furent embarqués de force vers les Amériques." },
        { type: "text", q: "Comment appelle-t-on l'argent que les migrants envoient à leur famille dans le pays d'origine ?", answer: ["transferts de fonds", "les transferts de fonds", "envois de fonds", "transferts", "remises"], explain: "Les transferts de fonds sont une ressource essentielle pour beaucoup de pays pauvres." },
        { type: "tf", q: "La « fuite des cerveaux » est le départ de personnes très qualifiées de leur pays d'origine.", answer: true, explain: "Oui : des médecins, des ingénieurs, des chercheurs qui émigrent. On dit aussi brain drain." }
      ]
    }
  ],
  glossary: [
    { t: "Migrant", d: "Personne qui s'installe dans un autre lieu, dans son propre pays ou à l'étranger, pour une période importante." },
    { t: "Réfugié", d: "Personne qui a quitté son pays par crainte fondée de persécution et qui a droit à la protection internationale (convention de Genève, 1951)." },
    { t: "Demandeur d'asile", d: "Personne qui a demandé une protection internationale et attend la décision de l'État." },
    { t: "Déplacé interne", d: "Personne obligée de quitter son domicile mais qui reste à l'intérieur des frontières de son pays." },
    { t: "Facteurs répulsifs (push)", d: "Conditions du lieu d'origine qui poussent à partir : pauvreté, guerres, persécutions, catastrophes." },
    { t: "Facteurs attractifs (pull)", d: "Conditions du lieu de destination qui attirent : travail, sécurité, études, liberté." },
    { t: "Transferts de fonds", d: "Sommes d'argent que les migrants envoient à leur famille restée dans le pays d'origine." },
    { t: "Fuite des cerveaux", d: "Émigration de personnes hautement qualifiées (brain drain)." },
    { t: "Non-refoulement", d: "Principe du droit international : personne ne peut être renvoyé dans un lieu où il risque des persécutions ou la mort." },
    { t: "Intégration", d: "Processus par lequel les migrants participent pleinement à la vie sociale, économique et culturelle du pays d'arrivée." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Environ quel pourcentage de la population mondiale est composé de migrants internationaux ?", options: ["Environ 3,7 %", "Environ 20 %", "Environ 50 %"], answer: 0, explain: "Environ 280 à 300 millions sur 8 milliards : moins de 4 %." },
      { type: "mc", q: "Quelle est la différence entre un réfugié et un migrant économique ?", options: ["Le réfugié fuit des persécutions et a droit à la protection internationale", "Il n'y a aucune différence", "Le migrant économique voyage seulement en avion"], answer: 0, explain: "Le réfugié est protégé par la convention de Genève de 1951 ; le migrant économique part pour travailler ou améliorer ses conditions de vie." },
      { type: "tf", q: "La majorité des réfugiés du monde est accueillie par des pays européens riches.", answer: false, explain: "La plupart sont accueillis par des pays à revenu faible ou intermédiaire, souvent voisins de leur pays d'origine." },
      { type: "num", q: "Combien d'Italiens (en millions, environ) ont émigré entre 1876 et 1976 ?", answer: 27, tol: 2, unit: "millions", explain: "Environ 27 millions : l'une des plus grandes émigrations de l'histoire moderne." },
      { type: "mc", q: "Qu'est-ce que la migration en chaîne ?", options: ["Le départ de personnes qui suivent des parents et des amis déjà émigrés", "Un voyage en bateau dans des conditions d'esclavage", "Un type de route maritime"], answer: 0, explain: "Les réseaux sociaux facilitent le choix de la destination : on part souvent là où l'on connaît déjà quelqu'un." },
      { type: "text", q: "Comment s'appelle l'île de la baie de New York par laquelle passèrent environ 12 millions d'immigrants entre 1892 et 1954 ?", answer: ["ellis island", "ellis"], explain: "Ellis Island, dans la baie de New York." },
      { type: "order", q: "Range dans l'ordre chronologique.", items: ["Traite atlantique des esclaves (dès le XVIe siècle)", "Grande émigration européenne (1850-1914)", "Gastarbeiter en Allemagne (après 1945)", "Crise des réfugiés syriens (depuis 2011)"], explain: "De la traite atlantique à la grande émigration, puis aux travailleurs invités et aux réfugiés des conflits récents." },
      { type: "mc", q: "Quel effet peut avoir le départ de médecins et d'ingénieurs de leur pays d'origine ?", options: ["Une fuite des cerveaux", "Un dividende démographique", "Une hausse du solde naturel"], answer: 0, explain: "C'est le brain drain : le pays perd des compétences coûteuses à former." },
      { type: "tf", q: "En droit international, le principe de non-refoulement interdit de renvoyer une personne là où elle risque la mort ou la persécution.", answer: true, explain: "C'est l'un des principes fondamentaux de la convention de Genève." },
      { type: "mc", q: "Pourquoi les migrations au départ des pays pauvres ne concernent-elles pas les personnes les plus pauvres ?", options: ["Parce qu'émigrer coûte cher et demande quelques ressources", "Parce que les plus pauvres ne veulent pas se déplacer", "Parce que c'est interdit par la loi"], answer: 0, explain: "Le voyage et les papiers coûtent cher : ceux qui partent ont souvent un minimum de ressources, d'études ou un réseau d'entraide." }
    ]
  }
});
