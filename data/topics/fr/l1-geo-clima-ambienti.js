TOPIC('fr', {
  id: "l1-geo-clima-ambienti",
  title: "Climats et milieux de la Terre",
  intro: "Pourquoi peut-on voir des glaciers à Quito, sur l'équateur ? Pourquoi Oslo est-elle plus douce qu'Anchorage alors qu'elles sont à la même latitude ? Le <b>climat</b> dépend de quelques facteurs qui se combinent de façons toujours différentes et, à son tour, il façonne les <b>milieux naturels</b> (les <b>biomes</b>) où vivent plantes, animaux et peuples. De plus, aujourd'hui, le climat est en train de <b>changer</b> : voyons comment et pourquoi.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Temps qu'il fait et climat",
      html: `<p>Le <b>temps</b> (au sens météorologique) est l'état de l'atmosphère en un lieu et à un moment donnés (aujourd'hui il pleut, il fait 12 °C). Le <b>climat</b>, lui, est l'<b>ensemble des conditions moyennes</b> d'un lieu, calculé sur une longue période : l'Organisation météorologique mondiale (OMM) utilise par convention des périodes d'<b>au moins trente ans</b> (la période de référence actuelle est 1991-2020). On décrit le climat par les moyennes de <b>température</b>, de <b>précipitations</b>, d'<b>humidité</b>, de <b>pression</b> et de <b>vents</b>.</p>
<p>Une phrase aide à retenir : <i>« le climat, c'est ce à quoi tu t'attends ; le temps, c'est ce que tu trouves »</i>. Une journée froide ne dément pas le réchauffement climatique, pas plus qu'une quinte de toux ne dément la bonne santé d'une personne.</p>
<p>On étudie le climat avec les données des stations météorologiques et on le représente par un <b>climatogramme</b> (ou diagramme ombrothermique) : les <b>températures moyennes mensuelles</b> forment une courbe, les <b>précipitations mensuelles</b> des histogrammes (barres). Un climatogramme permet de lire tout de suite l'<b>amplitude thermique annuelle</b> (différence entre le mois le plus chaud et le plus froid), le total des pluies et la présence d'une saison sèche.</p>`
    },
    {
      type: "text",
      title: "2. Les facteurs du climat",
      html: `<p>Le climat d'un lieu dépend de <b>facteurs astronomiques</b> et de <b>facteurs géographiques</b> :</p>
<ul>
<li><b>Latitude</b> ☀️ : les rayons du Soleil arrivent presque à la verticale près de l'équateur (beaucoup de chaleur concentrée) et très inclinés aux pôles (chaleur répartie sur une surface plus grande, et plus d'atmosphère à traverser). C'est pourquoi la température moyenne diminue de l'équateur vers les pôles.</li>
<li><b>Altitude</b> ⛰️ : dans la troposphère, la température baisse d'environ <b>6,5 °C tous les 1 000 m</b> (gradient thermique vertical). À 3 000 m, il fait environ 20 °C de moins qu'au niveau de la mer.</li>
<li><b>Distance à la mer</b> 🌊 : l'eau se réchauffe et se refroidit plus lentement que la terre ferme (forte capacité thermique). Près de la mer, les températures sont adoucies (climat <b>océanique</b> ou maritime, faible amplitude thermique) ; à l'intérieur des continents, on a un climat <b>continental</b> (étés chauds, hivers froids).</li>
<li><b>Courants marins</b> 🌀 : ils transportent de la chaleur. Le <b>Gulf Stream</b> amène des eaux tièdes des Caraïbes vers l'Europe du Nord-Ouest : grâce à lui, Bergen (Norvège, 60° N) a des hivers bien plus doux que le Labrador, à la même latitude. Les courants froids (comme celui de Humboldt, le long du Chili et du Pérou) refroidissent les côtes et favorisent des déserts comme l'<b>Atacama</b>.</li>
<li><b>Vents et masses d'air</b> 💨 : les vents dominants apportent de l'air humide ou sec, chaud ou froid. Les <b>alizés</b> soufflent d'est vers l'équateur, les <b>vents d'ouest</b> aux latitudes moyennes ; les <b>moussons</b> changent de direction entre l'été et l'hiver et apportent des pluies torrentielles en Inde et en Asie du Sud-Est.</li>
<li><b>Relief et exposition</b> 🏔️ : une chaîne de montagnes bloque les nuages sur le versant exposé au vent (<b>pluies orographiques</b>) et laisse l'autre versant « à l'abri des pluies », sec. <b>Cherrapunji</b>, sur les pentes de l'Himalaya indien, est l'un des endroits les plus pluvieux du monde (plus de 11 000 mm par an).</li>
<li><b>Couverture du sol (albédo)</b> : la neige et la glace réfléchissent jusqu'à 80-90 % de la lumière solaire, la mer sombre moins de 10 %.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple concret : quelle température au sommet ?",
      html: `<p>À Courmayeur, vers <b>1 200 m</b>, il fait 14 °C à midi. À la même heure, quelle température peut-on attendre à la pointe Helbronner, vers <b>3 460 m</b> ?</p>
<p>Différence d'altitude : 3 460 − 1 200 = 2 260 m. Baisse : 2,26 × 6,5 ≈ <b>14,7 °C</b>. Température prévue : 14 − 14,7 ≈ <b>−0,7 °C</b>, environ zéro degré. Ce calcul est une estimation moyenne (l'air réel peut varier selon l'humidité et la stabilité), mais il explique pourquoi on met une veste sur les sommets en été alors qu'on transpire dans la vallée, et pourquoi on trouve des glaciers et des neiges éternelles en montagne même près de l'équateur (le Kilimandjaro, à 3° S, a un glacier à son sommet).</p>`
    },
    {
      type: "svg",
      title: "Le climatogramme d'un climat méditerranéen",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<line x1="70" y1="240" x2="560" y2="240" stroke="#111827" stroke-width="2"/>
<line x1="70" y1="40" x2="70" y2="240" stroke="#111827" stroke-width="2"/>
<g fill="#60a5fa" stroke="#1e3a8a" stroke-width="1">
<rect x="82" y="165" width="26" height="75"/>
<rect x="123" y="170" width="26" height="70"/>
<rect x="164" y="175" width="26" height="65"/>
<rect x="205" y="180" width="26" height="60"/>
<rect x="246" y="205" width="26" height="35"/>
<rect x="287" y="222" width="26" height="18"/>
<rect x="328" y="230" width="26" height="10"/>
<rect x="369" y="226" width="26" height="14"/>
<rect x="410" y="198" width="26" height="42"/>
<rect x="451" y="150" width="26" height="90"/>
<rect x="492" y="142" width="26" height="98"/>
<rect x="533" y="165" width="26" height="75"/>
</g>
<polyline points="95,178 136,172 177,160 218,148 259,128 300,105 341,92 382,95 423,112 464,138 505,160 546,172" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="300" y="25" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Climat méditerranéen (type Rome) : été chaud et sec, hiver doux et pluvieux</text>
<text x="95" y="262" font-size="14" text-anchor="middle" fill="#111827">J</text><text x="259" y="262" font-size="14" text-anchor="middle" fill="#111827">M</text><text x="341" y="262" font-size="14" text-anchor="middle" fill="#111827">J</text><text x="546" y="262" font-size="14" text-anchor="middle" fill="#111827">D</text>
<text x="76" y="285" font-size="14" fill="#dc2626" font-weight="bold">courbe rouge = température (max en été)</text>
<text x="340" y="285" font-size="14" fill="#1e3a8a" font-weight="bold">barres bleues = pluies (min en été)</text>
</svg>`,
      caption: "Le pic des températures coïncide avec le minimum des pluies : c'est la signature du climat méditerranéen (saison sèche en été). Valeurs dessinées à titre d'illustration."
    },
    {
      type: "quiz",
      title: "Mini-quiz : les facteurs du climat",
      questions: [
        { type: "mc", q: "De combien la température baisse-t-elle en moyenne quand on monte de 1 000 m dans la troposphère ?", options: ["Environ 0,65 °C", "Environ 6,5 °C", "Environ 65 °C"], answer: 1, explain: "Le gradient thermique vertical est d'environ 6,5 °C tous les 1 000 m (0,65 °C tous les 100 m)." },
        { type: "tf", q: "Un hiver particulièrement froid prouve que le climat ne se réchauffe pas.", answer: false, explain: "Le climat est une moyenne sur des décennies ; un seul hiver relève de la météo et peut être froid même dans un climat qui se réchauffe." },
        { type: "mc", q: "Quel courant rend l'Europe du Nord-Ouest plus douce que sa latitude ne le laisserait penser ?", options: ["Le courant de Humboldt", "Le Gulf Stream", "Le courant du Labrador"], answer: 1, explain: "Le Gulf Stream amène des eaux tièdes des Caraïbes vers l'Atlantique Nord." }
      ]
    },
    {
      type: "text",
      title: "3. La classification des climats de Köppen",
      html: `<p>Les climats de la Terre sont très nombreux : pour les étudier, on les classe. La classification la plus utilisée, proposée par le climatologue russo-allemand <b>Wladimir Köppen</b> (1884, puis révisée avec Rudolf Geiger jusqu'aux années 1930), repose sur la température et les précipitations et utilise cinq groupes désignés par une lettre :</p>
<ul>
<li><b>A – Climats tropicaux (chauds et humides)</b> : tous les mois au-dessus de 18 °C. Ce groupe comprend le climat tropical humide (forêt pluviale, pluies toute l'année) et le climat tropical à saison sèche (savane, mousson).</li>
<li><b>B – Climats arides</b> : l'évaporation dépasse les précipitations. <b>Désertique</b> (BW) et <b>steppique</b> (BS). Ils ne dépendent pas seulement de la température : il existe des déserts froids, comme le Gobi.</li>
<li><b>C – Climats tempérés</b> : le mois le plus froid entre −3 et 18 °C. Ce groupe inclut le climat <b>méditerranéen</b> (été sec), le climat <b>subtropical humide</b> et le climat <b>océanique</b> (pluies réparties, hivers doux : Irlande, Bretagne, nord-ouest Pacifique des États-Unis).</li>
<li><b>D – Climats continentaux (froids)</b> : hivers longs et rigoureux (mois le plus froid sous −3 °C), étés chauds ou frais. Ils sont répandus dans l'hémisphère Nord (Russie, Canada).</li>
<li><b>E – Climats polaires</b> : aucun mois au-dessus de 10 °C ; toundra et calottes glaciaires.</li>
</ul>
<p>En Italie, le climat est <b>méditerranéen</b> sur les côtes, dans le Sud et dans les îles, <b>tempéré à tendance continentale</b> dans la plaine du Pô (hivers froids et brumeux, étés chauds et lourds), <b>alpin</b> en montagne, avec une température qui baisse avec l'altitude.</p>`
    },
    {
      type: "svg",
      title: "Les zones climatiques de la Terre",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<rect x="40" y="30" width="520" height="30" fill="#e0f2fe" stroke="#0369a1" stroke-width="1"/>
<rect x="40" y="60" width="520" height="30" fill="#bbf7d0" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="90" width="520" height="30" fill="#fde68a" stroke="#b45309" stroke-width="1"/>
<rect x="40" y="120" width="520" height="30" fill="#bbf7d0" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="150" width="520" height="30" fill="#86efac" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="180" width="520" height="30" fill="#fde68a" stroke="#b45309" stroke-width="1"/>
<rect x="40" y="210" width="520" height="30" fill="#bbf7d0" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="240" width="520" height="30" fill="#e0f2fe" stroke="#0369a1" stroke-width="1"/>
<text x="300" y="50" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Polaire (90°-66°N) : toundra, glaces</text>
<text x="300" y="80" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Subpolaire (66°-50°N) : taïga</text>
<text x="300" y="110" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Tempéré (50°-35°N) : forêts, méditerranéen</text>
<text x="300" y="140" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Subtropical/désertique (35°-23°N)</text>
<text x="300" y="170" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Équatorial : forêt pluviale</text>
<text x="300" y="200" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Subtropical/désertique (23°-35°S)</text>
<text x="300" y="230" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Tempéré austral</text>
<text x="300" y="260" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Polaire austral : Antarctique</text>
<text x="30" y="150" font-size="14" text-anchor="end" fill="#111827">N</text>
<text x="30" y="215" font-size="14" text-anchor="end" fill="#111827">S</text>
</svg>`,
      caption: "Schéma simplifié des grands groupes de climats par bandes de latitude : entre l'équateur et les pôles, la succession suit à peu près ces bandes. Les écarts (mers, reliefs, courants) rendent la carte réelle bien plus complexe."
    },
    {
      type: "text",
      title: "4. Les biomes : les milieux naturels",
      html: `<p>Un <b>biome</b> est un grand ensemble d'écosystèmes à la végétation et à la faune semblables, déterminé surtout par la <b>température et les précipitations</b>. Les principaux :</p>
<ul>
<li>🌴 <b>Forêt pluviale équatoriale</b> (Amazonie, Congo, Indonésie) : toujours chaude et pluvieuse, avec la <b>plus grande biodiversité</b> de la planète ; sols pauvres malgré une végétation luxuriante, car les nutriments se trouvent dans la biomasse et non dans le sol.</li>
<li>🦁 <b>Savane</b> (Afrique de l'Est, Brésil central, nord de l'Australie) : hautes herbes et arbres épars, saison sèche et saison des pluies ; grands troupeaux d'herbivores.</li>
<li>🏜️ <b>Désert</b> (Sahara, Arabie, Atacama, Gobi, Australie) : moins de 250 mm de pluie par an, forts écarts de température entre le jour et la nuit ; plantes grasses, animaux nocturnes.</li>
<li>🌾 <b>Steppe et prairie</b> (Eurasie centrale, Grandes Plaines, pampa argentine) : de l'herbe, peu d'arbres, des sols très fertiles (les <i>tchernozioms</i> d'Ukraine et de Russie), aujourd'hui en grande partie cultivés en céréales.</li>
<li>🌿 <b>Maquis méditerranéen</b> (côtes de la Méditerranée, Californie, Chili central, Afrique du Sud, sud-ouest de l'Australie) : arbustes à feuillage persistant et coriace (chêne vert, myrte, lentisque) adaptés à la sécheresse estivale et aux incendies.</li>
<li>🍂 <b>Forêt tempérée</b> (Europe, est de l'Amérique du Nord, Asie orientale) : arbres à feuilles caduques (chênes, hêtres), avec quatre saisons.</li>
<li>🌲 <b>Taïga</b> (Canada, Scandinavie, Sibérie) : forêt de conifères, la plus étendue du monde ; hivers longs et très froids.</li>
<li>❄️ <b>Toundra</b> : mousses et lichens ; <b>pergélisol</b> (sol gelé en profondeur) qui empêche la croissance des arbres.</li>
<li>🏔️ <b>Milieux de haute montagne</b> : la végétation change avec l'altitude selon des <b>étages</b> (feuillus, conifères, pâturages, rochers et glaces), comme elle changerait en voyageant vers le pôle.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Activité : à chaque milieu son climat",
      widget: "classify",
      options: {
        groups: ["Chaud et humide toute l'année", "Aride", "Froid"],
        items: [
          ["🌴 Forêt pluviale", 0],
          ["🏜️ Sahara", 1],
          ["❄️ Toundra", 2],
          ["🌲 Taïga", 2],
          ["🐪 Gobi", 1],
          ["🌊 Bassin du Congo", 0],
          ["🧊 Antarctique", 2],
          ["🏜️ Atacama", 1]
        ]
      },
      caption: "Fais glisser ou sélectionne chaque milieu dans la bonne catégorie climatique."
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Il existe des déserts froids et un désert de glace",
      html: `<p>L'<b>Antarctique</b> est le plus grand désert du monde : il y tombe moins de 200 mm de précipitations par an (en moyenne, beaucoup moins à l'intérieur). Un désert ne se définit pas par la chaleur mais par la <b>rareté des pluies</b>. L'Antarctique est aussi le continent le plus froid : en 1983, à la station russe de Vostok, on a mesuré <b>−89,2 °C</b>, le minimum officiel sur Terre. Le record de chaleur (54,4 °C) a été enregistré dans la vallée de la Mort, en Californie (en 2020 et en 2021).</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Dans l'Atacama, il peut ne pas pleuvoir pendant des années",
      html: `<p>Le <b>désert d'Atacama</b> (Chili) est le lieu non polaire le plus aride du monde : dans certaines zones de l'intérieur, les pluies sont presque absentes pendant des années. La raison est double : la <b>cordillère des Andes</b> bloque les nuages venant de l'Amazonie, et le <b>courant froid de Humboldt</b> refroidit l'air au-dessus du Pacifique, ce qui empêche la formation de pluies. La NASA utilise l'Atacama pour tester les instruments destinés à Mars.</p>`
    },
    {
      type: "text",
      title: "5. Le changement climatique",
      html: `<p>Le <b>climat a toujours changé</b> : périodes glaciaires et interglaciaires se sont succédé pour des causes naturelles (variations de l'orbite terrestre, les <b>cycles de Milanković</b>, activité solaire, éruptions volcaniques). Mais depuis environ deux siècles, le changement est <b>trop rapide</b> pour s'expliquer uniquement par des causes naturelles : la communauté scientifique, réunie au sein du <b>GIEC</b> (Groupe d'experts intergouvernemental sur l'évolution du climat, créé en 1988 par l'ONU et l'OMM ; en anglais IPCC), conclut que les <b>activités humaines</b> en sont responsables.</p>
<p>Le mécanisme est l'<b>effet de serre</b> : certains gaz de l'atmosphère (<b>vapeur d'eau</b>, <b>dioxyde de carbone CO₂</b>, <b>méthane CH₄</b>, protoxyde d'azote N₂O) laissent passer la lumière du Soleil mais retiennent une partie de la chaleur que la Terre émet sous forme d'infrarouges. L'effet de serre <b>naturel</b> est indispensable : sans lui, la température moyenne de la Terre serait d'environ <b>−18 °C</b> au lieu d'environ +15 °C. Le problème, c'est l'effet de serre <b>renforcé</b> par les émissions humaines.</p>
<ul>
<li>Brûler du <b>charbon, du pétrole et du gaz</b> (combustibles fossiles) libère du CO₂ accumulé pendant des millions d'années.</li>
<li>La <b>déforestation</b> réduit le nombre d'arbres qui absorbent le CO₂.</li>
<li>L'<b>élevage</b> et les rizières produisent du méthane, un gaz à effet de serre bien plus puissant que le CO₂ (mais qui reste moins longtemps dans l'atmosphère).</li>
</ul>
<p><b>Les données</b> : la concentration de CO₂ est passée d'environ <b>280 ppm</b> (parties par million) avant la révolution industrielle à plus de <b>420 ppm</b> aujourd'hui, le niveau le plus élevé depuis au moins 800 000 ans (on le sait grâce aux gaz piégés dans les bulles d'air des glaces de l'Antarctique, les <i>carottes de glace</i>). La température moyenne mondiale a augmenté d'environ <b>1,1 à 1,2 °C</b> par rapport à la période 1850-1900 ; les dernières années sont les plus chaudes jamais mesurées. Le niveau moyen des mers a monté d'environ <b>20 cm</b> depuis 1900 (par dilatation thermique de l'eau et fonte des glaces).</p>`
    },
    {
      type: "svg",
      title: "Comment fonctionne l'effet de serre",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<rect x="0" y="40" width="600" height="60" fill="#bfdbfe" opacity="0.7"/>
<text x="300" y="75" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Gaz à effet de serre (CO₂, CH₄, vapeur d'eau)</text>
<circle cx="70" cy="40" r="26" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
<line x1="90" y1="55" x2="200" y2="260" stroke="#f59e0b" stroke-width="5"/>
<polygon points="200,260 188,238 210,243" fill="#f59e0b"/>
<rect x="0" y="260" width="600" height="40" fill="#86efac"/>
<line x1="260" y1="255" x2="260" y2="120" stroke="#dc2626" stroke-width="4"/>
<polygon points="260,110 250,130 270,130" fill="#dc2626"/>
<path d="M260 118 C285 95 330 95 345 118" fill="none" stroke="#dc2626" stroke-width="4"/>
<polygon points="345,125 337,106 355,108" fill="#dc2626"/>
<line x1="420" y1="255" x2="420" y2="10" stroke="#dc2626" stroke-width="4" stroke-dasharray="8 6"/>
<polygon points="420,4 410,24 430,24" fill="#dc2626"/>
<text x="215" y="170" font-size="14" fill="#92400e" font-weight="bold">lumière solaire</text>
<text x="430" y="150" font-size="14" fill="#991b1b" font-weight="bold">chaleur (infrarouge)</text>
<text x="430" y="170" font-size="14" fill="#991b1b" font-weight="bold">qui part dans l'espace</text>
<text x="275" y="205" font-size="14" fill="#991b1b" font-weight="bold">chaleur retenue</text>
<text x="300" y="285" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">Surface terrestre</text>
</svg>`,
      caption: "Une partie de la chaleur émise par la Terre s'échappe dans l'espace, une autre est absorbée par les gaz à effet de serre et renvoyée vers le bas. Plus il y a de gaz à effet de serre, plus la chaleur reste."
    },
    {
      type: "example",
      title: "Exemple concret : les conséquences en Méditerranée et en Italie",
      html: `<p>Le bassin méditerranéen est considéré comme un <b>« point chaud »</b> du climat : il se réchauffe plus vite que la moyenne mondiale. En Italie, on observe déjà :</p>
<ul>
<li>des <b>vagues de chaleur</b> plus fréquentes et plus longues (les étés 2003 et 2022 sont parmi les plus chauds) ;</li>
<li>des <b>sécheresses</b> et le recul des glaciers alpins : la Marmolada a perdu une grande partie de son glacier, et en juillet 2022 un effondrement a provoqué une tragédie ;</li>
<li>des <b>pluies intenses</b> concentrées sur peu de temps, avec des inondations (Émilie-Romagne, mai 2023) ;</li>
<li>la <b>montée de la mer</b> et des risques pour les côtes basses, comme la lagune de Venise et le delta du Pô ;</li>
<li>des changements pour l'agriculture (vendanges plus précoces, nouvelles maladies des plantes) et pour la santé.</li>
</ul>
<p>Il ne faut pas confondre l'<b>adaptation</b> (se préparer : digues, nouvelles cultures, plans canicule) et l'<b>atténuation</b> (réduire les émissions pour ralentir le phénomène) : les deux sont nécessaires.</p>`
    },
    {
      type: "decision",
      title: "Que faire ? Un choix pour une ville côtière",
      html: `<p>Tu es maire d'une ville côtière menacée par des tempêtes de plus en plus fortes. Tu disposes d'un budget limité et de deux priorités : <b>protéger le littoral</b> et <b>réduire les émissions</b> de la ville.</p>`,
      question: "Quelle stratégie te semble la plus efficace à long terme ?",
      options: [
        { label: "Uniquement des digues et des barrières", outcome: "Cela protège à court terme, mais n'arrête pas les causes et peut coûter très cher ; les barrières rigides abîment parfois les plages voisines." },
        { label: "Uniquement réduire les émissions locales", outcome: "Utile, mais une ville seule ne peut pas arrêter le changement : le niveau de la mer monte déjà à cause des émissions passées." },
        { label: "Les deux : s'adapter et atténuer", outcome: "C'est l'approche recommandée par le GIEC : s'adapter aux changements inévitables tout en réduisant les émissions pour éviter les pires scénarios." }
      ],
      answer: 2,
      explain: "L'accord de Paris (2015) prévoit de maintenir la hausse de la température « nettement en dessous » de 2 °C par rapport à l'ère préindustrielle et de poursuivre les efforts pour la limiter à 1,5 °C : atténuation et adaptation vont de pair."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre le climat et son évolution",
      intro: "Le climat est un système complexe : voici trois comparaisons pour en saisir les mécanismes.",
      tabs: [
        {
          label: "🚗 La voiture au soleil",
          html: `<p>Laisse une voiture au soleil, vitres fermées : à l'intérieur, il fait bien plus chaud que dehors. La lumière traverse le verre et chauffe l'habitacle, qui émet des infrarouges que le verre <b>retient</b>. Les gaz à effet de serre font la même chose avec l'atmosphère : ils sont la vitre de la voiture (même si l'atmosphère n'est pas une serre fermée et que le mécanisme physique est un peu différent, la comparaison donne l'idée). Ajouter du CO₂, c'est comme mettre une vitre plus épaisse.</p>`
        },
        {
          label: "🛁 La baignoire",
          html: `<p>Le carbone, c'est comme l'eau d'une baignoire : les robinets sont les émissions, la bonde est l'absorption par les forêts et les océans. Aujourd'hui, les robinets versent plus que ce que la bonde peut évacuer, donc <b>le niveau monte</b>. Si tu réduis les émissions de moitié, la baignoire continue de se remplir, simplement plus lentement : pour l'arrêter, il faut zéro émission nette (comme l'Europe, qui vise la neutralité climatique d'ici <b>2050</b>).</p>`
        },
        {
          label: "🧊 Les carottes de glace",
          html: `<p>Les scientifiques forent les glaces de l'Antarctique et du Groenland et en extraient des cylindres de glace profonde, parfois de plus de 3 km. La glace se forme couche après couche, comme les cernes d'un arbre, et emprisonne des bulles d'air ancien : en mesurant le CO₂ et les isotopes de l'oxygène, on reconstitue <b>la température et l'atmosphère d'il y a des centaines de milliers d'années</b>. La carotte de Vostok et celle du projet EPICA (Dôme C) montrent que le CO₂ et la température ont toujours évolué ensemble.</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#f0f9ff"/><rect x="40" y="20" width="60" height="160" fill="#e0f2fe" stroke="#0369a1" stroke-width="3"/><line x1="40" y1="60" x2="100" y2="60" stroke="#0369a1" stroke-width="2"/><line x1="40" y1="100" x2="100" y2="100" stroke="#0369a1" stroke-width="2"/><line x1="40" y1="140" x2="100" y2="140" stroke="#0369a1" stroke-width="2"/><text x="120" y="45" font-size="15" fill="#111827">couches récentes (CO₂ élevé)</text><text x="120" y="125" font-size="15" fill="#111827">couches anciennes (CO₂ plus bas)</text><text x="120" y="175" font-size="15" fill="#111827">jusqu'à il y a 800 000 ans</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : pourquoi le climat change d'un lieu à l'autre et dans le temps",
      nodes: [
        { id: "sole", label: "Énergie du Soleil", x: 50, y: 6, color: "#f59e0b", html: "Moteur du climat : il chauffe la Terre de façon inégale.", why: "La Terre est sphérique et son axe est incliné d'environ 23,4° : les rayons arrivent plus ou moins inclinés, et les saisons viennent de cette inclinaison, pas de la distance au Soleil (en janvier, la Terre est plus proche du Soleil, mais c'est l'hiver dans l'hémisphère Nord)." },
        { id: "lat", label: "Latitude et altitude", x: 18, y: 32, color: "#2563eb", html: "Plus loin de l'équateur et plus haut = plus froid.", why: "Aux pôles, les rayons sont obliques et traversent plus d'atmosphère ; en altitude, l'air est plus raréfié et retient moins la chaleur. Le gradient de 6,5 °C/km est établi grâce aux mesures des ballons-sondes." },
        { id: "mare", label: "Mers et courants", x: 82, y: 32, color: "#0ea5e9", html: "Ils adoucissent les températures et transportent la chaleur.", why: "La capacité thermique de l'eau est environ quatre fois celle de l'air sec : il faut beaucoup d'énergie pour la réchauffer ou la refroidir. Les courants naissent des vents, de la rotation terrestre et des différences de température et de salinité (circulation thermohaline)." },
        { id: "clima", label: "Climat et Köppen", x: 50, y: 52, color: "#16a34a", html: "Cinq groupes : A, B, C, D, E.", why: "Köppen remarqua que la végétation reflète le climat et utilisa les limites entre biomes comme guide pour tracer les limites entre climats : sa classification part des plantes." },
        { id: "bioma", label: "Biomes", x: 18, y: 76, color: "#84cc16", html: "Forêts, savanes, déserts, steppes, toundra…", why: "Chaque végétal a une plage de température et d'eau dans laquelle il survit ; le biome est la réponse évolutive de la végétation et des animaux aux conditions climatiques de la zone." },
        { id: "serra", label: "Effet de serre", x: 82, y: 76, color: "#ef4444", html: "Les gaz à effet de serre retiennent une partie de la chaleur.", why: "Il fut pressenti par Joseph Fourier (1824), démontré en laboratoire par John Tyndall (1859) et calculé par Svante Arrhenius (1896), qui estima l'effet d'un doublement du CO₂ sur la température." },
        { id: "cc", label: "Changement climatique", x: 50, y: 94, color: "#dc2626", html: "Réchauffement rapide dû aux émissions humaines.", why: "Les mesures de CO₂ sur le volcan Mauna Loa (Hawaï), commencées par Charles Keeling en 1958, montrent la hausse continue du CO₂ (la « courbe de Keeling ») ; depuis 1990, le GIEC résume les preuves dans ses rapports." }
      ],
      edges: [
        ["sole", "lat", "dépend de"],
        ["sole", "mare", "réchauffe"],
        ["lat", "clima", "déterminent le"],
        ["mare", "clima", "déterminent le"],
        ["clima", "bioma", "façonne les"],
        ["sole", "serra", "piégée par l'"],
        ["serra", "cc", "renforcé → "],
        ["cc", "clima", "modifie le"]
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li><b>Temps</b> = état momentané de l'atmosphère ; <b>climat</b> = moyennes sur de nombreuses années.</li>
<li>Facteurs : latitude, altitude (−6,5 °C/1 000 m), distance à la mer, courants, vents, reliefs.</li>
<li>Köppen : A tropical, B aride, C tempéré, D continental, E polaire.</li>
<li>Biomes : forêt pluviale, savane, désert, steppe, maquis méditerranéen, forêt tempérée, taïga, toundra.</li>
<li><b>Effet de serre</b> naturel (+15 °C au lieu de −18 °C) et <b>effet de serre renforcé</b> par les émissions humaines (CO₂ de ~280 à plus de 420 ppm ; +1,1 à 1,2 °C).</li>
<li>Réponses : <b>atténuation</b> et <b>adaptation</b> ; accord de Paris de 2015.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : biomes et changement climatique",
      questions: [
        { type: "mc", q: "Quel biome a un sol gelé en profondeur (pergélisol) ?", options: ["La savane", "La toundra", "Le maquis méditerranéen"], answer: 1, explain: "La toundra a un pergélisol, qui empêche les arbres d'enfoncer profondément leurs racines." },
        { type: "tf", q: "Sans effet de serre naturel, la Terre serait plus chaude.", answer: false, explain: "Sans les gaz à effet de serre naturels, la température moyenne serait d'environ −18 °C : l'effet de serre naturel est essentiel à la vie." },
        { type: "mc", q: "Réduire les émissions de gaz à effet de serre pour ralentir le réchauffement s'appelle…", options: ["L'adaptation", "L'atténuation", "La compensation"], answer: 1, explain: "Atténuation = réduire les causes ; adaptation = réduire les dégâts des effets déjà en cours." }
      ]
    }
  ],
  glossary: [
    { t: "Climat", d: "Ensemble des conditions atmosphériques moyennes d'un lieu, évaluées sur une longue période (au moins 30 ans)." },
    { t: "Temps (météorologique)", d: "État de l'atmosphère en un lieu et à un moment précis." },
    { t: "Climatogramme", d: "Graphique qui présente les températures moyennes mensuelles (courbe) et les précipitations (barres) d'un lieu." },
    { t: "Amplitude thermique", d: "Différence entre la température maximale et minimale (journalière ou annuelle)." },
    { t: "Biome", d: "Grand ensemble d'écosystèmes à la végétation et à la faune semblables, lié à un certain climat." },
    { t: "Pergélisol", d: "Sol qui reste gelé toute l'année, typique de la toundra et du nord de la taïga (en anglais permafrost)." },
    { t: "Effet de serre", d: "Phénomène par lequel certains gaz de l'atmosphère retiennent une partie de la chaleur émise par la Terre." },
    { t: "GIEC", d: "Groupe d'experts intergouvernemental sur l'évolution du climat (IPCC en anglais) : il rassemble et synthétise les recherches scientifiques sur le climat." },
    { t: "Atténuation", d: "Ensemble des actions visant à réduire les émissions de gaz à effet de serre et à ralentir le changement climatique." },
    { t: "Adaptation", d: "Ensemble des actions visant à réduire les dégâts des effets du changement climatique déjà en cours." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quelle est la différence entre le temps et le climat ?", options: ["Aucune, ce sont des synonymes", "Le temps est l'état momentané, le climat est la moyenne sur de nombreuses années", "Le climat change chaque jour, le temps chaque année"], answer: 1, explain: "Le climat décrit les conditions moyennes d'un lieu sur une longue période ; le temps, c'est ce qui se passe à un moment précis." },
      { type: "num", q: "Dans une localité au niveau de la mer, il fait 24 °C. Quelle température (en °C) peut-on attendre à 2 000 m d'altitude (avec un gradient de 6,5 °C/km) ?", answer: 11, tol: 0.5, unit: "°C", explain: "Baisse : 2 × 6,5 = 13 °C. Température : 24 − 13 = 11 °C." },
      { type: "mc", q: "Pourquoi Bergen (Norvège) a-t-elle des hivers plus doux que les lieux canadiens à la même latitude ?", options: ["À cause du Gulf Stream", "À cause d'une altitude plus élevée", "À cause des moussons"], answer: 0, explain: "Le Gulf Stream transporte des eaux chaudes dans l'Atlantique Nord, ce qui adoucit le climat norvégien." },
      { type: "mc", q: "Le climat méditerranéen se caractérise par…", options: ["un été sec et un hiver doux et pluvieux", "des pluies toute l'année et des étés frais", "des hivers très rigoureux"], answer: 0, explain: "Étés chauds et secs, hivers doux et humides : c'est le climat des côtes de la Méditerranée." },
      { type: "text", q: "Comment s'appelle le grand biome de forêt de conifères de l'hémisphère Nord (Canada, Scandinavie, Sibérie) ?", answer: ["taïga", "la taïga", "taiga"], explain: "La taïga est la plus grande forêt du monde, une forêt de conifères." },
      { type: "tf", q: "Les effets du changement climatique ne concernent que les régions polaires.", answer: false, explain: "Il y a des effets partout : vagues de chaleur, sécheresses, inondations, montée des mers, recul des glaciers alpins." },
      { type: "order", q: "Range de la plus faible à la plus forte concentration de CO₂ dans l'atmosphère.", items: ["Ère préindustrielle (~280 ppm)", "Années 1950 (~315 ppm)", "Années 2000 (~370 ppm)", "Aujourd'hui (plus de 420 ppm)"], explain: "Le CO₂ augmente sans cesse depuis la révolution industrielle ; la courbe de Keeling le montre depuis 1958." },
      { type: "mc", q: "Quel groupe de Köppen comprend les climats où aucun mois ne dépasse 10 °C ?", options: ["A", "C", "E"], answer: 2, explain: "Le groupe E est celui des climats polaires : toundra et glaces." },
      { type: "num", q: "Quelle serait la température moyenne de la Terre sans effet de serre naturel (en °C) ?", answer: -18, tol: 1, unit: "°C", explain: "Environ −18 °C, contre +15 °C aujourd'hui : l'effet de serre naturel représente environ 33 °C." },
      { type: "mc", q: "Laquelle de ces actions relève de l'adaptation (et non de l'atténuation) ?", options: ["Construire des barrières contre les tempêtes", "Passer à l'énergie solaire", "Planter des forêts pour absorber le CO₂"], answer: 0, explain: "Les barrières réduisent les dégâts d'un effet déjà en cours ; les deux autres actions réduisent le CO₂ et relèvent donc de l'atténuation." }
    ]
  }
});
