TOPIC('fr', {
  id: "l1-geo-risorse-sostenibilita",
  title: "Ressources et développement durable",
  intro: "De l'eau à boire, de l'énergie pour allumer la lumière, de la nourriture dans l'assiette : ce sont les trois ressources dont dépend la vie de chaque être humain. Mais elles sont réparties de façon inégale et consommées à un rythme que la planète a du mal à supporter. Dans cette leçon, nous verrons où elles se trouvent, qui les utilise, quels problèmes elles posent et comment l'<b>Agenda 2030</b> propose de concilier développement, justice et environnement.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Qu'est-ce qu'une ressource ?",
      html: `<p>Une <b>ressource</b> est tout élément de la nature que les êtres humains utilisent pour satisfaire leurs besoins. On distingue deux grandes catégories :</p>
<ul>
<li><b>Ressources renouvelables</b> : elles se régénèrent rapidement par rapport à la consommation, si on les utilise avec modération. Eau douce, bois, sol fertile, vent, lumière du Soleil, poissons. Attention : renouvelable ne veut pas dire infini. Une forêt coupée plus vite qu'elle ne repousse, ou un banc de poissons surexploité, finit par s'épuiser.</li>
<li><b>Ressources non renouvelables</b> : elles se sont formées en des millions d'années et ne se reconstituent pas à l'échelle humaine. Pétrole, gaz naturel, charbon, minerais (fer, cuivre, lithium, terres rares).</li>
</ul>
<p>Chaque ressource a une <b>répartition géographique</b> qui ne correspond pas à celle de la population : le pétrole se concentre dans le golfe Persique, en Russie, en Amérique du Nord et au Venezuela ; l'eau douce abonde au Canada, au Brésil et en Russie, mais elle manque au Moyen-Orient et au Sahel ; le lithium se trouve dans le « triangle » Chili-Argentine-Bolivie et en Australie ; plus des deux tiers du cobalt sont en République démocratique du Congo. De ces différences naissent le commerce, les dépendances, les conflits et la coopération.</p>`
    },
    {
      type: "widget",
      title: "Activité : renouvelable ou non renouvelable ?",
      widget: "classify",
      options: {
        groups: ["Renouvelable", "Non renouvelable"],
        items: [
          ["☀️ Lumière du Soleil", 0],
          ["🛢️ Pétrole", 1],
          ["💨 Vent", 0],
          ["⛏️ Charbon", 1],
          ["🌊 Houle (énergie des vagues)", 0],
          ["⛽ Gaz naturel", 1],
          ["🌋 Chaleur de la Terre (géothermie)", 0],
          ["⚛️ Uranium", 1]
        ]
      },
      caption: "La frontière tient au temps de régénération : l'uranium est un minerai, il ne se régénère pas ; le bois, oui, mais seulement si l'on ne coupe pas plus que ce qui repousse."
    },
    {
      type: "text",
      title: "2. L'eau",
      html: `<p>La Terre est la « planète bleue », mais l'eau utilisable est très rare. <b>97,5 %</b> de l'eau de la planète est <b>salée</b> (mers et océans). Les <b>2,5 %</b> restants sont de l'eau douce, mais environ deux tiers de celle-ci sont bloqués dans les <b>glaciers et les calottes polaires</b>, et presque tout le reste se trouve dans les <b>nappes souterraines</b>. Les fleuves, les lacs et les zones humides contiennent moins de <b>0,01 %</b> de toute l'eau de la Terre, et pourtant ce sont les sources les plus accessibles.</p>
<p>Les principaux <b>usages</b> de l'eau douce dans le monde : environ <b>70 % pour l'agriculture</b> (irrigation), environ <b>20 % pour l'industrie</b> et environ <b>10 % pour les usages domestiques</b> (boire, cuisiner, se laver). En Italie, chaque habitant consomme chez lui environ 215 à 220 litres d'eau par jour, l'une des valeurs les plus élevées d'Europe.</p>
<p><b>Les problèmes</b> :</p>
<ul>
<li><b>Accès</b> : dans le monde, environ <b>2,2 milliards</b> de personnes n'ont pas accès à une eau potable gérée en toute sécurité et environ <b>3,5 milliards</b> n'ont pas accès à des installations sanitaires sûres (OMS/UNICEF). Chaque jour, des enfants et des femmes, surtout en Afrique subsaharienne, marchent pendant des heures pour aller chercher de l'eau.</li>
<li><b>Stress hydrique</b> : lorsque les prélèvements dépassent une grande partie des ressources disponibles. Il touche le Moyen-Orient et l'Afrique du Nord, l'Inde, l'Asie centrale, la Californie et, de plus en plus, l'Europe méditerranéenne.</li>
<li><b>Pollution</b> : rejets industriels, engrais, pesticides, plastique et eaux usées non traitées.</li>
<li><b>Surexploitation</b> : le cas le plus dramatique est celui de la <b>mer d'Aral</b>, en Asie centrale : à partir des années 1960, l'URSS a détourné les fleuves Amou-Daria et Syr-Daria pour irriguer le coton, et ce lac, qui était le quatrième plus grand du monde, s'est réduit à une petite fraction de sa surface, laissant place à un désert de sel.</li>
<li><b>Conflits</b> : les fleuves qui traversent plusieurs États (Nil, Tigre et Euphrate, Jourdain, Mékong, Indus) sont souvent disputés. Le grand barrage éthiopien sur le Nil Bleu (GERD) est source de tensions avec l'Égypte et le Soudan.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Où se trouve l'eau de la Terre",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="300" y="24" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Toute l'eau de la Terre</text>
<rect x="40" y="40" width="520" height="34" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="2"/>
<rect x="40" y="40" width="13" height="34" fill="#38bdf8" stroke="#0369a1" stroke-width="1"/>
<text x="300" y="63" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">97,5 % salée (mers et océans)</text>
<text x="40" y="100" font-size="15" fill="#0369a1" font-weight="bold">2,5 % douce</text>
<text x="300" y="130" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Répartition de l'eau douce</text>
<rect x="40" y="145" width="520" height="34" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<rect x="40" y="145" width="360" height="34" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<rect x="400" y="145" width="155" height="34" fill="#7dd3fc" stroke="#0369a1" stroke-width="2"/>
<rect x="555" y="145" width="5" height="34" fill="#1d4ed8"/>
<text x="220" y="168" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">environ 69 % : glaciers</text>
<text x="478" y="168" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">environ 30 % : nappes</text>
<text x="560" y="205" font-size="14" text-anchor="end" fill="#1d4ed8" font-weight="bold">moins de 1 % : fleuves, lacs, humidité</text>
<text x="40" y="250" font-size="15" fill="#111827">L'eau facilement accessible (fleuves, lacs, nappes peu profondes)</text>
<text x="40" y="272" font-size="15" fill="#111827">est une infime fraction du total : d'où l'importance de ne pas la gaspiller.</text>
</svg>`,
      caption: "Données arrondies (USGS et UNESCO). Les barres ne sont pas parfaitement à l'échelle."
    },
    {
      type: "example",
      title: "Exemple pratique : l'eau cachée dans les produits",
      html: `<p>L'<b>empreinte eau</b> (<i>water footprint</i>) mesure l'eau utilisée pour produire un bien, même si on ne la voit pas. Ordres de grandeur (estimations du Water Footprint Network) :</p>
<table>
<tr><th>Produit</th><th>Eau nécessaire (environ)</th></tr>
<tr><td>1 tasse de café</td><td>140 litres</td></tr>
<tr><td>1 kg de pain</td><td>1 600 litres</td></tr>
<tr><td>1 kg de fromage</td><td>5 000 litres</td></tr>
<tr><td>1 kg de viande de bœuf</td><td>plus de 15 000 litres</td></tr>
<tr><td>1 jean</td><td>7 000 à 10 000 litres</td></tr>
</table>
<p>Une douche de 5 minutes utilise environ 50 à 60 litres ; pour produire 1 kg de viande de bœuf, il faut l'eau d'environ 250 douches. Cela ne veut pas dire ne jamais manger de viande, mais que nos choix alimentaires pèsent beaucoup sur l'eau : une alimentation plus riche en légumineuses, céréales et légumes a une empreinte eau bien plus faible.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : ressources et eau",
      questions: [
        { type: "mc", q: "Quel pourcentage de l'eau de la Terre est de l'eau douce ?", options: ["Environ 2,5 %", "Environ 25 %", "Environ 50 %"], answer: 0, explain: "97,5 % de l'eau est salée ; l'eau douce se trouve surtout dans les glaciers et les nappes." },
        { type: "mc", q: "Dans quel secteur utilise-t-on la plus grande partie de l'eau douce dans le monde ?", options: ["L'industrie", "L'agriculture", "Les usages domestiques"], answer: 1, explain: "Environ 70 % des prélèvements servent à irriguer les champs." },
        { type: "tf", q: "Le pétrole est une ressource renouvelable parce que la Terre en produit continuellement.", answer: false, explain: "Il s'est formé en des millions d'années : à l'échelle humaine, il n'est pas renouvelable." }
      ]
    },
    {
      type: "text",
      title: "3. L'énergie",
      html: `<p>L'énergie fait tourner les industries, les transports, les maisons, les hôpitaux. Dans le monde, <b>environ 80 %</b> de l'énergie primaire provient encore des <b>combustibles fossiles</b> : <b>pétrole</b> (environ 30 %), <b>charbon</b> (environ 26 %) et <b>gaz naturel</b> (environ 23 %). Le reste est fourni par l'<b>hydroélectricité</b>, le <b>nucléaire</b>, le <b>solaire</b>, l'<b>éolien</b> et la <b>biomasse</b>.</p>
<p>La consommation est très inégalement répartie : en moyenne, un habitant des États-Unis ou du Canada consomme <b>plus de cinq fois</b> plus d'énergie qu'un Africain ou un Indien. Environ <b>700 millions</b> de personnes dans le monde n'ont pas d'électricité et environ <b>2 milliards</b> cuisinent au bois ou au charbon de façon polluante, avec de graves conséquences pour la santé.</p>
<p><b>Les problèmes</b> :</p>
<ul>
<li><b>Changement climatique</b> : brûler des combustibles fossiles libère du CO₂ (environ deux tiers des émissions de gaz à effet de serre proviennent de l'énergie).</li>
<li><b>Dépendance et géopolitique</b> : les pays importateurs dépendent des pays exportateurs. L'Italie importe près de 75 à 80 % de l'énergie qu'elle consomme. Le <b>choc pétrolier de 1973</b> (embargo des pays arabes de l'OPEP) a fait quadrupler le prix du pétrole et entraîné des mesures d'austérité (en Italie, les « dimanches à pied », sans voitures) ; en 2022, l'invasion de l'Ukraine par la Russie a montré à quel point l'Europe dépendait du gaz russe.</li>
<li><b>Épuisement</b> des ressources non renouvelables et impacts environnementaux de l'extraction (marées noires, déforestation, mines).</li>
</ul>
<p>La <b>transition énergétique</b> est le passage des énergies fossiles aux énergies renouvelables et à une utilisation plus efficace. Le <b>solaire</b> et l'<b>éolien</b> ont connu une croissance très rapide : le coût du photovoltaïque a baissé de plus de 80 % en dix ans (2010-2020) et les renouvelables produisent aujourd'hui environ <b>30 %</b> de l'électricité mondiale (et plus de 40 % en Italie, surtout grâce à l'hydroélectricité, au solaire, à l'éolien et à la géothermie en Toscane, où, en 1904, à Larderello, s'est allumée la première ampoule alimentée par l'énergie géothermique).</p>
<p>Il n'existe pas de source « parfaite » : le <b>solaire</b> et l'<b>éolien</b> sont intermittents (il faut du stockage et des réseaux) ; le <b>nucléaire</b> n'émet pas de CO₂ mais produit des déchets radioactifs et coûte cher, avec des délais longs (en Italie, deux référendums, en 1987 et en 2011, ont dit non) ; l'<b>hydroélectricité</b> modifie les cours d'eau ; la <b>biomasse</b> entre en concurrence avec l'alimentation. C'est pourquoi on parle de <b>mix énergétique</b> et d'<b>efficacité</b> (l'énergie la moins chère est celle qu'on ne gaspille pas).</p>`
    },
    {
      type: "svg",
      title: "Le mix énergétique mondial",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">D'où vient l'énergie primaire dans le monde (valeurs arrondies)</text>
<rect x="40" y="50" width="300" height="30" fill="#1f2937"/>
<text x="350" y="72" font-size="15" fill="#111827">Pétrole ~30 %</text>
<rect x="40" y="95" width="260" height="30" fill="#6b7280"/>
<text x="310" y="117" font-size="15" fill="#111827">Charbon ~26 %</text>
<rect x="40" y="140" width="230" height="30" fill="#f97316"/>
<text x="280" y="162" font-size="15" fill="#111827">Gaz naturel ~23 %</text>
<rect x="40" y="185" width="70" height="30" fill="#2563eb"/>
<text x="120" y="207" font-size="15" fill="#111827">Hydroélectricité ~7 %</text>
<rect x="40" y="230" width="40" height="30" fill="#a855f7"/>
<text x="90" y="252" font-size="15" fill="#111827">Nucléaire ~4 %</text>
<rect x="300" y="230" width="90" height="30" fill="#16a34a"/>
<text x="400" y="252" font-size="15" fill="#111827">Autres renouvelables ~10 %</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#6b7280">Estimation : les fossiles restent environ 80 % du total ; les parts varient d'une année à l'autre.</text>
</svg>`,
      caption: "L'énergie primaire comprend tout : électricité, transports, chauffage. La part des renouvelables dans la seule électricité est bien plus élevée (environ 30 %)."
    },
    {
      type: "text",
      title: "4. L'alimentation",
      html: `<p>Le monde produit assez de nourriture pour tous (en théorie pour environ 10 milliards de personnes, selon la FAO), et pourtant environ <b>733 millions</b> de personnes (environ 9 % de l'humanité, données FAO 2023) <b>souffrent de la faim</b>, surtout en Afrique subsaharienne et en Asie du Sud, et près de <b>2,8 milliards</b> ne peuvent pas se permettre une alimentation saine. Dans le même temps, plus d'<b>un adulte sur huit</b> dans le monde est obèse. C'est le paradoxe de la <b>malnutrition</b> : pas seulement la faim, mais aussi des carences et des excès. La faim a des causes plus <b>politiques et économiques</b> qu'agricoles : pauvreté, guerres, instabilité des prix, événements climatiques extrêmes (comme l'a expliqué Amartya Sen, qui a montré que les grandes famines se produisent souvent sans véritable manque de nourriture).</p>
<ul>
<li><b>Révolution verte</b> (années 1950-1970) : grâce à des semences sélectionnées, aux engrais, aux pesticides et à l'irrigation, l'agronome <b>Norman Borlaug</b> (prix Nobel de la paix 1970) et d'autres ont fortement augmenté les récoltes de blé et de riz au Mexique, en Inde et en Asie, évitant des famines à des centaines de millions de personnes. Mais elle a aussi provoqué une pollution due aux produits agrochimiques, une perte de biodiversité et une forte consommation d'eau.</li>
<li><b>Gaspillage alimentaire</b> : selon le PNUE, environ <b>1 milliard de tonnes</b> de nourriture ont été gaspillées en 2022, soit près de 19 % de celle disponible pour les consommateurs (sans compter les pertes dans les champs et le long de la filière). Gaspiller de la nourriture, c'est aussi gaspiller de l'eau, de la terre et de l'énergie, et causer environ 8 à 10 % des émissions mondiales de gaz à effet de serre.</li>
<li><b>Élevage</b> : il exige beaucoup de terres, d'eau et d'aliments pour animaux, et émet du méthane ; l'élevage est responsable d'environ 12 à 15 % des émissions mondiales.</li>
<li><b>Pêche</b> : plus d'un tiers des stocks de poissons dans le monde sont pêchés au-delà de leurs limites biologiques de renouvellement (surpêche). L'aquaculture fournit aujourd'hui environ la moitié du poisson que nous mangeons.</li>
<li><b>Sols</b> : érosion, désertification, perte de fertilité. Un tiers des sols du monde est dégradé ; il faut des siècles pour former quelques centimètres de sol fertile.</li>
<li><b>Accaparement des terres</b> (<i>land grabbing</i>) : achat ou location de vastes surfaces agricoles dans des pays pauvres par des États ou des sociétés étrangères.</li>
</ul>
<p>Les solutions tournent autour d'une <b>agriculture durable</b> (rotation des cultures, agriculture biologique et de précision, agroécologie), de la réduction du gaspillage, d'une alimentation plus riche en végétaux, des circuits courts et du soutien aux petits producteurs.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Ce que nous mangeons a une géographie",
      html: `<p>La <b>tomate</b>, la <b>pomme de terre</b>, le <b>maïs</b>, le cacao et le piment viennent des <b>Amériques</b> : avant 1492, la cuisine italienne ne connaissait pas la tomate ! Le <b>café</b> vient d'Éthiopie, le <b>riz</b> d'Asie, et les <b>pâtes sèches</b> se sont répandues en Sicile et dans le sud de l'Italie dès le Moyen Âge. Aujourd'hui, plus de la moitié des calories consommées dans le monde proviennent de seulement <b>trois céréales</b> : le riz, le blé et le maïs. Une alimentation fondée sur peu de variétés est fragile : une maladie peut détruire des récoltes entières, comme le <b>mildiou</b> de la pomme de terre en Irlande (1845-1849), qui a causé environ un million de morts et poussé plus d'un million de personnes à émigrer.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? L'eau en bouteille coûte plus cher que l'eau du robinet",
      html: `<p>En Italie, l'eau du robinet coûte en moyenne environ <b>2 euros les 1 000 litres</b> (1 m³), alors que l'eau en bouteille peut coûter mille fois plus. L'Italie est l'un des premiers pays au monde pour la consommation d'eau en bouteille (plus de 200 litres par personne et par an), avec un fort impact en plastique et en transport, alors que l'eau du robinet est contrôlée très fréquemment. Les fontaines publiques d'eau filtrée (en Italie, les <b>case dell'acqua</b>) et les gourdes sont parmi les moyens les plus simples de réduire les déchets et les émissions.</p>`
    },
    {
      type: "text",
      title: "5. Le développement durable",
      html: `<p>En <b>1972</b>, le rapport <i>Les limites à la croissance</i> (commandé par le Club de Rome, fondé par l'Italien <b>Aurelio Peccei</b>) a averti qu'une croissance infinie sur une planète finie est impossible. En <b>1987</b>, le rapport <i>Notre avenir à tous</i> (<b>rapport Brundtland</b>, du nom de la présidente de la commission, la Norvégienne Gro Harlem Brundtland) a défini le <b>développement durable</b> : <i>« un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures de répondre aux leurs »</i>.</p>
<p>Trois dimensions (<b>les trois piliers</b>), qu'il faut faire tenir ensemble :</p>
<ul>
<li>🌍 <b>environnementale</b> : ne pas consommer les ressources plus vite qu'elles ne se régénèrent, réduire la pollution et les émissions ;</li>
<li>⚖️ <b>sociale</b> : équité, travail décent, santé, éducation, égalité ;</li>
<li>💶 <b>économique</b> : prospérité et emploi durables.</li>
</ul>
<p><b>Les étapes</b> : conférence de l'ONU à <b>Rio de Janeiro</b> (1992, « Sommet de la Terre »), <b>protocole de Kyoto</b> (1997), objectifs du Millénaire pour le développement (2000-2015), <b>accord de Paris</b> sur le climat (2015) et, le 25 septembre 2015, l'<b>Agenda 2030</b> pour le développement durable, adopté par les <b>193</b> pays de l'ONU : <b>17 objectifs</b> (ODD, objectifs de développement durable, en anglais <i>Sustainable Development Goals</i>) et <b>169 cibles</b> à atteindre d'ici <b>2030</b>.</p>
<p>Un outil utile est l'<b>empreinte écologique</b>, la surface de terre et de mer nécessaire pour produire les ressources qu'une personne ou un pays consomme et pour absorber ses déchets. Le <b>jour du dépassement</b> (<i>Earth Overshoot Day</i>) indique le jour de l'année où l'humanité a déjà consommé toutes les ressources que la Terre peut régénérer en un an : en 2024, il est tombé le <b>1er août</b>. Si tout le monde vivait comme un Italien, il faudrait environ 2,7 planètes ; comme un habitant moyen des États-Unis, environ 5.</p>`
    },
    {
      type: "svg",
      title: "Les 17 objectifs de l'Agenda 2030",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="300" y="22" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Agenda 2030 : trois groupes d'objectifs</text>
<rect x="20" y="40" width="175" height="240" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="107" y="65" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">Population</text>
<text x="30" y="92" font-size="14" fill="#111827">1 Pas de pauvreté</text>
<text x="30" y="116" font-size="14" fill="#111827">2 Faim « zéro »</text>
<text x="30" y="140" font-size="14" fill="#111827">3 Bonne santé</text>
<text x="30" y="164" font-size="14" fill="#111827">4 Éducation de qualité</text>
<text x="30" y="188" font-size="14" fill="#111827">5 Égalité des sexes</text>
<text x="30" y="212" font-size="14" fill="#111827">10 Moins d'inégalités</text>
<text x="30" y="236" font-size="14" fill="#111827">16 Paix et justice</text>
<rect x="213" y="40" width="175" height="240" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="300" y="65" font-size="15" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Planète</text>
<text x="223" y="92" font-size="14" fill="#111827">6 Eau propre</text>
<text x="223" y="116" font-size="14" fill="#111827">11 Villes durables</text>
<text x="223" y="140" font-size="14" fill="#111827">12 Consommation responsable</text>
<text x="223" y="164" font-size="14" fill="#111827">13 Lutte climatique</text>
<text x="223" y="188" font-size="14" fill="#111827">14 Vie aquatique</text>
<text x="223" y="212" font-size="14" fill="#111827">15 Vie terrestre</text>
<rect x="406" y="40" width="175" height="240" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="493" y="65" font-size="15" text-anchor="middle" fill="#92400e" font-weight="bold">Prospérité et partenariats</text>
<text x="416" y="92" font-size="14" fill="#111827">7 Énergie propre</text>
<text x="416" y="116" font-size="14" fill="#111827">8 Travail décent</text>
<text x="416" y="140" font-size="14" fill="#111827">9 Industrie et innovation</text>
<text x="416" y="164" font-size="14" fill="#111827">17 Partenariats</text>
</svg>`,
      caption: "Les 17 objectifs sont interconnectés : aucun ne peut être atteint seul (par exemple, l'éducation des filles réduit la pauvreté, la faim et la mortalité infantile)."
    },
    {
      type: "example",
      title: "Exemple pratique : ton empreinte au quotidien",
      html: `<p>Essaie de relire ta journée avec le regard du développement durable :</p>
<ul>
<li><b>Petit-déjeuner</b> : lait, café, pain : combien d'eau et d'énergie se cachent derrière ? Chaque tasse de café « vaut » environ 140 litres d'eau.</li>
<li><b>Trajet jusqu'à l'école</b> : à pied ou à vélo, tu n'émets pas de CO₂ ; en bus, tu émets environ un tiers de ce qu'émet une voiture par personne ; en voiture avec une seule personne, beaucoup plus.</li>
<li><b>Smartphone et ordinateur</b> : ils contiennent du cobalt, du lithium et des terres rares ; prolonger leur durée de vie d'un an réduit beaucoup leur impact (la plupart des émissions d'un smartphone ont lieu pendant sa fabrication, pas pendant son utilisation).</li>
<li><b>Vêtements</b> : un jean demande 7 000 à 10 000 litres d'eau ; acheter d'occasion ou réparer réduit l'impact.</li>
<li><b>Déjeuner</b> : gaspillage ou assiette vide ? Près d'un cinquième de la nourriture que nous achetons finit à la poubelle.</li>
</ul>
<p>Il ne s'agit pas de se sentir coupable, mais de choisir en connaissance de cause : les grands changements exigent des choix collectifs et politiques, mais les habitudes individuelles, multipliées par des millions de personnes, comptent.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la durabilité",
      intro: "La durabilité est une idée abstraite : voici trois images pour la saisir.",
      tabs: [
        {
          label: "🏦 Le compte en banque de la nature",
          html: `<p>La nature est un <b>compte en banque</b>. Les ressources renouvelables sont comme les <b>intérêts</b> (forêts qui repoussent, poissons qui se reproduisent, eau qui se recycle), les ressources non renouvelables sont le <b>capital</b> (pétrole, minerais). Un mode de vie durable ne dépense que les intérêts, sans entamer le capital. Le « jour du dépassement » est le moment où l'humanité a déjà dépensé tous les intérêts de l'année et commence à vivre « à découvert » : nous consommons aujourd'hui le capital dont nos enfants auraient besoin.</p>`
        },
        {
          label: "🛁 La baignoire et le robinet",
          html: `<p>Une nappe phréatique est comme une <b>baignoire</b> : la pluie qui s'infiltre est le robinet, les puits qui pompent sont la bonde. Si l'on pompe plus d'eau qu'il n'en entre, le niveau baisse ; si cela continue, la baignoire se vide (comme dans de nombreuses régions de l'Inde, de la Californie ou de la plaine du Pô). Quand la nappe est proche de la mer, l'eau salée s'infiltre dans le vide : le puits devient inutilisable. L'idée de <b>durabilité</b>, c'est de prélever au maximum ce que la nature renouvelle.</p>`
        },
        {
          label: "🌐 Le jeu de la durabilité",
          html: `<p>Imagine un village de 10 pêcheurs qui partagent un lac contenant 100 poissons qui se reproduisent. Si chaque pêcheur en prend 5 par an, le lac en perd 50 et les poissons diminuent ; s'ils en prennent 2, le lac se repeuple. La <b>« tragédie des biens communs »</b> (décrite par l'écologue Garrett Hardin en 1968) se produit quand chacun ne pense qu'à son propre intérêt. La lauréate du prix Nobel d'économie <b>Elinor Ostrom</b> (2009) a montré que beaucoup de communautés ont réussi à bien gérer des ressources communes (pâturages, forêts, eau) grâce à des <b>règles partagées et à un contrôle mutuel</b>.</p>`,
          widget: "match",
          options: { pairs: [["Rapport Brundtland", "1987 : définition du développement durable"], ["Agenda 2030", "2015 : 17 objectifs pour les pays de l'ONU"], ["Accord de Paris", "2015 : limiter le réchauffement à 1,5-2 °C"], ["Protocole de Kyoto", "1997 : premiers engagements sur les émissions"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : ressources, besoins et durabilité",
      nodes: [
        { id: "risorse", label: "Ressources naturelles", x: 50, y: 6, color: "#16a34a", html: "Renouvelables et non renouvelables.", why: "Une ressource n'en est une que par rapport à la technologie : l'uranium n'était pas une ressource avant la physique nucléaire, le pétrole l'est devenu avec le moteur à explosion au XIXe siècle. Ce que la société peut utiliser change avec les connaissances." },
        { id: "acqua", label: "Eau", x: 15, y: 32, color: "#2563eb", html: "Douce, rare et inégalement répartie.", why: "L'eau douce accessible représente moins de 1 % du total : l'agriculture en utilise 70 %, et le réchauffement climatique déplace les pluies et fait fondre les glaciers qui alimentent les grands fleuves d'Asie." },
        { id: "energia", label: "Énergie", x: 50, y: 32, color: "#f59e0b", html: "Fossiles ~80 % ; la transition est en cours.", why: "Le charbon a alimenté la révolution industrielle (machine à vapeur de Watt, 1769), le pétrole le XXe siècle. Chaque transition énergétique a pris des décennies : aujourd'hui, nous devons aller plus vite, pour le climat." },
        { id: "cibo", label: "Alimentation", x: 85, y: 32, color: "#84cc16", html: "Production suffisante mais mal répartie.", why: "Les famines modernes sont plus souvent des crises d'accès (revenus, conflits, prix) que de disponibilité, comme l'a montré Amartya Sen en 1981 en étudiant la famine du Bengale de 1943." },
        { id: "impatto", label: "Impacts et limites", x: 30, y: 62, color: "#dc2626", html: "Climat, pollution, perte de biodiversité, surexploitation.", why: "Des scientifiques (Johan Rockström, 2009) ont défini neuf « limites planétaires » (climat, biodiversité, cycles de l'azote et du phosphore…) à l'intérieur desquelles l'humanité peut évoluer en sécurité ; certaines sont déjà dépassées." },
        { id: "equita", label: "Équité", x: 70, y: 62, color: "#a855f7", html: "Qui consomme et qui en subit les effets.", why: "Les pays riches ont historiquement émis le plus de CO₂, mais les effets les plus graves touchent souvent les plus pauvres : d'où le principe des « responsabilités communes mais différenciées » des traités sur le climat." },
        { id: "sostenibile", label: "Développement durable", x: 50, y: 82, color: "#14b8a6", html: "Environnement + société + économie.", why: "Le rapport Brundtland (1987) l'a défini pour dépasser l'opposition entre protection de l'environnement et développement économique : l'idée est que ce sont les deux faces d'un même problème." },
        { id: "agenda", label: "Agenda 2030", x: 50, y: 96, color: "#ec4899", html: "17 objectifs, 169 cibles, 193 pays.", why: "Adopté le 25 septembre 2015, c'est le premier programme universel : il vaut pour tous les pays, riches et pauvres. Il repose sur cinq « P » : population, planète, prospérité, paix, partenariats." }
      ],
      edges: [
        ["risorse", "acqua", "ex."],
        ["risorse", "energia", "ex."],
        ["risorse", "cibo", "ex."],
        ["energia", "impatto", "cause"],
        ["acqua", "impatto", "subit"],
        ["cibo", "equita", "pose la question de l'"],
        ["impatto", "sostenibile", "exige"],
        ["equita", "sostenibile", "exige"],
        ["sostenibile", "agenda", "se traduit par"]
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Ressources <b>renouvelables</b> (elles se régénèrent) et <b>non renouvelables</b> (pétrole, charbon, gaz, minerais).</li>
<li><b>Eau</b> : 97,5 % salée ; 2,5 % douce, presque toute dans les glaciers et les nappes ; 70 % des prélèvements vont à l'agriculture ; 2,2 milliards de personnes sans eau potable sûre.</li>
<li><b>Énergie</b> : ~80 % fossiles ; transition vers les renouvelables et l'efficacité ; aucune source n'est sans impact.</li>
<li><b>Alimentation</b> : suffisante pour tous mais mal répartie (environ 733 millions de personnes souffrant de la faim) ; gaspillage et révolution verte.</li>
<li><b>Développement durable</b> (Brundtland, 1987) : trois piliers, environnemental, social, économique ; <b>Agenda 2030</b> (2015) : 17 objectifs.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : énergie, alimentation et Agenda 2030",
      questions: [
        { type: "mc", q: "Quelle part de l'énergie primaire mondiale provient encore des combustibles fossiles ?", options: ["Environ 20 %", "Environ 50 %", "Environ 80 %"], answer: 2, explain: "Le pétrole, le charbon et le gaz couvrent encore environ 80 % de l'énergie primaire." },
        { type: "mc", q: "Qui a présidé la commission qui a défini le développement durable en 1987 ?", options: ["Gro Harlem Brundtland", "Greta Thunberg", "Aurelio Peccei"], answer: 0, explain: "Le rapport Brundtland (1987), du nom de la présidente de la commission." },
        { type: "num", q: "Combien d'objectifs de développement durable compte l'Agenda 2030 ?", answer: 17, tol: 0, explain: "17 objectifs (ODD) et 169 cibles." }
      ]
    }
  ],
  glossary: [
    { t: "Ressource renouvelable", d: "Ressource qui se régénère rapidement (soleil, vent, eau douce, bois), si on l'utilise avec modération." },
    { t: "Ressource non renouvelable", d: "Ressource formée en des millions d'années, qui ne peut pas se reconstituer à l'échelle humaine (pétrole, charbon, minerais)." },
    { t: "Stress hydrique", d: "Situation dans laquelle les prélèvements d'eau sont très élevés par rapport à l'eau disponible." },
    { t: "Empreinte eau", d: "Volume d'eau nécessaire pour produire un bien ou pour couvrir la consommation d'une personne." },
    { t: "Transition énergétique", d: "Passage des combustibles fossiles aux énergies renouvelables et à une utilisation plus efficace de l'énergie." },
    { t: "Mix énergétique", d: "Ensemble des sources qu'un pays utilise pour produire son énergie." },
    { t: "Révolution verte", d: "Forte hausse des récoltes (années 1950-1970) grâce aux semences sélectionnées, aux engrais, aux pesticides et à l'irrigation." },
    { t: "Développement durable", d: "Développement qui répond aux besoins du présent sans compromettre la capacité des générations futures de répondre aux leurs (rapport Brundtland, 1987)." },
    { t: "Agenda 2030", d: "Programme de l'ONU (2015) comprenant 17 objectifs de développement durable à atteindre d'ici 2030." },
    { t: "Empreinte écologique", d: "Surface de terre et de mer nécessaire pour produire les ressources consommées et absorber les déchets d'une personne ou d'un pays." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Laquelle de ces ressources est non renouvelable ?", options: ["Le vent", "Le gaz naturel", "Le bois d'une forêt bien gérée"], answer: 1, explain: "Le gaz naturel s'est formé en des millions d'années." },
      { type: "mc", q: "Quelle part de l'eau douce prélevée dans le monde sert à l'agriculture ?", options: ["Environ 10 %", "Environ 30 %", "Environ 70 %"], answer: 2, explain: "L'irrigation absorbe environ 70 % des prélèvements." },
      { type: "tf", q: "Le monde ne produit pas assez de nourriture pour tous, et c'est la cause principale de la faim.", answer: false, explain: "On produit assez de nourriture pour tous : la faim dépend surtout de la pauvreté, des conflits, des prix et de la répartition." },
      { type: "num", q: "Un jean demande environ 7 000 litres d'eau. À combien de douches de 50 litres cela correspond-il ?", answer: 140, tol: 0, explain: "7 000 ÷ 50 = 140 douches." },
      { type: "mc", q: "Quels sont les trois piliers du développement durable ?", options: ["Environnemental, social, économique", "Politique, militaire, religieux", "Agricole, industriel, tertiaire"], answer: 0, explain: "L'environnement, la société et l'économie doivent être pris en compte ensemble." },
      { type: "text", q: "Comment s'appelle le programme de l'ONU de 2015 comprenant les 17 objectifs de développement durable ?", answer: ["agenda 2030", "l'agenda 2030", "programme 2030"], explain: "L'Agenda 2030 pour le développement durable, adopté par 193 pays." },
      { type: "order", q: "Range dans l'ordre chronologique.", items: ["Rapport Brundtland (1987)", "Conférence de Rio (1992)", "Protocole de Kyoto (1997)", "Agenda 2030 (2015)"], explain: "De la définition du développement durable aux traités sur le climat, jusqu'à l'Agenda 2030." },
      { type: "mc", q: "Pourquoi l'énergie solaire et l'énergie éolienne ont-elles besoin de systèmes de stockage et de réseaux flexibles ?", options: ["Elles sont intermittentes", "Elles sont trop chères", "Elles produisent des déchets radioactifs"], answer: 0, explain: "Le Soleil et le vent ne sont pas disponibles en permanence : il faut donc des batteries, des réseaux et un mix de sources." },
      { type: "tf", q: "L'Earth Overshoot Day (jour du dépassement) indique le jour où l'humanité a déjà consommé les ressources que la Terre peut régénérer en un an.", answer: true, explain: "En 2024, il est tombé le 1er août : après cette date, on vit « à découvert »." },
      { type: "mc", q: "Qu'est-il arrivé à la mer d'Aral ?", options: ["Elle s'est fortement réduite à cause du détournement des fleuves qui l'alimentaient", "Elle a été remplie par un barrage", "Elle est devenue le plus grand lac du monde"], answer: 0, explain: "À partir des années 1960, l'irrigation du coton a privé d'eau les fleuves Amou-Daria et Syr-Daria, et le lac s'est presque asséché." }
    ]
  }
});
