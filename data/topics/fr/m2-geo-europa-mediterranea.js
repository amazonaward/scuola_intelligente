TOPIC('fr', {
  id: `m2-geo-europa-mediterranea`,
  title: `L'Europe méditerranéenne et balkanique`,
  intro: `En face de l'Italie, sur l'autre rive de l'Adriatique et de la mer Ionienne, s'allonge la <b>péninsule balkanique</b> : des montagnes âpres, des côtes pleines d'îles, des mers limpides. On y trouve la <b>Grèce</b>, berceau de la civilisation occidentale, la <b>Croatie</b> et ses mille îles, et les autres États des <b>Balkans</b>, nés pour la plupart de l'éclatement de la Yougoslavie. Une région toute proche de nous, riche d'histoire, de peuples et de langues différents.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. La péninsule balkanique : montagnes et mers`,
      html: `<p>La <b>péninsule balkanique</b> est la plus orientale des trois grandes péninsules de la Méditerranée européenne (ibérique, italienne, balkanique). Elle est baignée par quatre mers : l'<b>Adriatique</b>, la mer <b>Ionienne</b>, la mer <b>Égée</b> et la <b>mer Noire</b>. Au nord, on fait en général coïncider sa limite avec les fleuves Save et Danube.</p>
<p>Le nom vient des <b>monts Balkans</b>, en Bulgarie : en turc, <i>balkan</i> signifie « chaîne de montagnes boisées ». La péninsule est en effet très <b>montagneuse</b> :</p>
<ul>
<li>le long de l'Adriatique courent les <b>Alpes dinariques</b>, des montagnes calcaires qui descendent à pic vers la mer ;</li>
<li>au centre et à l'est, les <b>Balkans</b> et les <b>Rhodopes</b> ; le plus haut sommet est le <b>Moussala</b> (2 925 m) en Bulgarie ;</li>
<li>au sud, les montagnes de la Grèce, avec l'<b>Olympe</b> (2 918 m), la « demeure des dieux ».</li>
</ul>
<p><b>Climat</b> : <b>méditerranéen</b> sur les côtes (étés chauds et secs, hivers doux et pluvieux), <b>continental</b> à l'intérieur, où les montagnes bloquent l'influence de la mer. Sur la côte adriatique souffle souvent la <b>bora</b>, un vent froid et violent qui descend des montagnes.</p>`
    },
    {
      type: `svg`,
      title: `La péninsule balkanique et ses mers (schéma)`,
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#7dd3fc"/>
<polygon points="40,20 600,20 600,110 520,110 500,150 470,180 440,175 430,210 455,240 420,260 400,300 360,320 330,290 300,250 270,215 230,180 180,140 130,95 80,60 40,50" fill="#bef264" stroke="#3f6212" stroke-width="3"/>
<polygon points="350,328 410,322 420,336 345,338" fill="#bef264" stroke="#3f6212" stroke-width="2"/>
<text x="385" y="318" font-size="12" text-anchor="middle">Crète</text>
<path d="M60 50 L200 160" stroke="#a16207" stroke-width="10" stroke-linecap="round" fill="none"/>
<text x="150" y="98" font-size="13" fill="#713f12" font-weight="bold" transform="rotate(38 150 98)">Alpes dinariques</text>
<text x="400" y="80" font-size="14" text-anchor="middle" font-weight="bold" fill="#3f6212">Danube et Save (limite nord)</text>
<path d="M120 40 C250 60 400 50 560 70" stroke="#2563eb" stroke-width="5" fill="none"/>
<text x="110" y="190" font-size="17" font-weight="bold" fill="#1e3a8a">Mer Adriatique</text>
<text x="180" y="290" font-size="17" font-weight="bold" fill="#1e3a8a">Mer Ionienne</text>
<text x="500" y="250" font-size="17" font-weight="bold" fill="#1e3a8a">Mer Égée</text>
<text x="555" y="140" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Mer Noire</text>
<text x="330" y="150" font-size="18" text-anchor="middle" font-weight="bold" fill="#365314">BALKANS</text>
<text x="340" y="250" font-size="14" text-anchor="middle" fill="#365314">Grèce</text>
<text x="495" y="182" font-size="12" fill="#7f1d1d">Bosphore</text>
</svg>`,
      caption: `Schéma simplifié, pas à l'échelle. Les montagnes proches de l'Adriatique séparent la côte de l'intérieur : c'est pourquoi les climats sont si différents.`
    },
    {
      type: `3d`,
      title: `Les paysages de la Méditerranée orientale en 3D`,
      scene: `terrain`,
      caption: `Fais tourner la scène et touche les éléments : chacun a un exemple réel en Grèce ou dans les Balkans.`,
      options: {
        features: {
          peninsula: { label: `Péninsule`, html: `Le <b>Péloponnèse</b>, dans le sud de la Grèce, et la <b>péninsule balkanique</b> elle-même. L'<b>Istrie</b> (Croatie et Slovénie) est aussi une péninsule.` },
          isthmus: { label: `Isthme`, html: `L'<b>isthme de Corinthe</b> reliait le Péloponnèse au reste de la Grèce ; en 1893, il fut coupé par un canal large d'à peine plus de 20 m et long de 6,4 km.` },
          island: { label: `Île`, html: `La <b>Crète</b> est la plus grande île de Grèce (environ 8 300 km²), siège de l'ancienne civilisation minoenne.` },
          archipelago: { label: `Archipel`, html: `Les <b>Cyclades</b> en Grèce et les îles de <b>Dalmatie</b> en Croatie : des centaines d'îles et d'écueils.` },
          strait: { label: `Détroit`, html: `Le <b>Bosphore</b> et les <b>Dardanelles</b> relient la mer Noire à la mer Égée ; le <b>canal d'Otrante</b> sépare l'Italie de l'Albanie (environ 72 km).` },
          gulf: { label: `Golfe`, html: `Le <b>golfe de Corinthe</b> sépare presque complètement le Péloponnèse de la Grèce continentale.` },
          bay: { label: `Baie`, html: `Les <b>bouches de Kotor</b> au Monténégro : une échancrure profonde et sinueuse entre des montagnes abruptes, qui ressemble à un fjord.` },
          mountain: { label: `Chaîne de montagnes`, html: `Les <b>Alpes dinariques</b>, calcaires, courent le long de toute la côte adriatique, de la Slovénie à l'Albanie.` },
          peak: { label: `Sommet`, html: `L'<b>Olympe</b> (2 918 m), la plus haute montagne de Grèce, où, selon les mythes, habitaient Zeus et les autres dieux.` },
          volcano: { label: `Volcan`, html: `<b>Santorin</b> est ce qui reste d'un volcan qui a explosé il y a environ 3 600 ans : sa caldeira est aujourd'hui une lagune de mer entourée de falaises.` },
          lake: { label: `Lac`, html: `Le <b>lac d'Ohrid</b>, entre la Macédoine du Nord et l'Albanie, est l'un des plus anciens lacs d'Europe (plus d'un million d'années). En Croatie, il y a les 16 <b>lacs de Plitvice</b>, reliés par des cascades.` },
          beach: { label: `Plage`, html: `Les plages de la Grèce et de la Croatie attirent chaque année des dizaines de millions de touristes, dont de très nombreux Italiens.` },
          coast: { label: `Côte`, html: `La côte de la <b>Grèce</b>, avec ses îles, mesure environ 13 700 km : l'une des plus longues d'Europe.` }
        }
      }
    },
    {
      type: `text`,
      title: `2. La Grèce`,
      html: `<p><b>Capitale</b> : Athènes · <b>Habitants</b> : environ 10,4 millions · <b>Superficie</b> : environ 132 000 km² · <b>Régime</b> : république parlementaire · <b>UE</b> depuis 1981, euro depuis 2001.</p>
<ul>
<li>Environ <b>80 %</b> du territoire est montagneux ; le reste est fait de petites plaines côtières et d'<b>îles</b> : environ 6 000 entre îles et îlots, dont un peu plus de 200 habitées (Crète, Eubée, Rhodes, Corfou, les Cyclades…).</li>
<li>Aucun point de la Grèce n'est à plus d'environ 140 km de la mer. C'est pourquoi les Grecs ont toujours été un peuple de navigateurs : aujourd'hui, les armateurs grecs possèdent la <b>plus grande flotte marchande du monde</b>.</li>
<li><b>Économie</b> : tourisme (environ 3 touristes par habitant chaque année), transport maritime, agriculture (olives et huile, raisin, agrumes, coton), fromage feta.</li>
<li>La Grèce antique nous a laissé la <b>démocratie</b>, la philosophie, le théâtre, les Jeux olympiques et des milliers de mots français. Monuments célèbres : l'<b>Acropole</b> d'Athènes avec le Parthénon, Delphes, Olympie, le palais de Cnossos en Crète.</li>
<li>C'est l'une des zones les plus <b>sismiques</b> d'Europe : là, la plaque africaine glisse sous la plaque eurasienne.</li>
</ul>`
    },
    {
      type: `text`,
      title: `3. La Croatie et la Slovénie`,
      html: `<p><b>Croatie</b> – Capitale : <b>Zagreb</b> · environ 3,8 millions d'habitants · environ 56 600 km² · république parlementaire.</p>
<ul>
<li>Elle a une curieuse forme « en croissant » : une partie continentale et plate au nord (vers le Danube) et une longue bande côtière, la <b>Dalmatie</b>, plus l'<b>Istrie</b>.</li>
<li>Devant la côte, il y a plus de <b>1 200</b> îles, îlots et écueils (les plus grandes sont Krk et Cres).</li>
<li>Villes historiques : <b>Dubrovnik</b> (l'ancienne République de Raguse), <b>Split</b> (construite à l'intérieur du palais de l'empereur romain Dioclétien), Pula avec son arène romaine. En Istrie vit une minorité de langue italienne.</li>
<li>Entrée dans l'UE en <b>2013</b> ; depuis le 1er janvier <b>2023</b>, elle utilise l'<b>euro</b> et est dans l'espace Schengen. Économie : tourisme, chantiers navals, agriculture.</li>
</ul>
<p><b>Slovénie</b> – Capitale : <b>Ljubljana</b> · environ 2,1 millions d'habitants · environ 20 300 km². Elle a une frontière avec l'Italie (Frioul-Vénétie Julienne) ; elle a un petit morceau de côte (Koper, Piran). Plus haut sommet : le <b>Triglav</b> (2 864 m). Elle est célèbre pour les grottes du <b>Karst</b>, comme celles de Postojna. Dans l'UE depuis 2004, euro depuis 2007.</p>`
    },
    {
      type: `quiz`,
      title: `Mini-quiz : Grèce et Croatie`,
      questions: [
        { type: `mc`, q: `Quelle est la plus grande île de Grèce ?`, options: [`Rhodes`, `La Crète`, `Corfou`], answer: 1, explain: `La Crète, environ 8 300 km².` },
        { type: `text`, q: `Quelle est la capitale de la Croatie ?`, answer: [`zagreb`, `zagabria`], explain: `Zagreb.` },
        { type: `tf`, q: `La Croatie utilise l'euro depuis 2023.`, answer: true, explain: `Depuis le 1er janvier 2023, quand elle est aussi entrée dans l'espace Schengen.` }
      ]
    },
    {
      type: `text`,
      title: `4. Les autres États des Balkans`,
      html: `<p>De 1918 à 1991, une grande partie des Balkans occidentaux formait un seul État, la <b>Yougoslavie</b> (« terre des Slaves du sud »). Après la mort du maréchal Tito (1980), les tensions entre les différents peuples augmentèrent ; entre <b>1991</b> et 2001, la Yougoslavie se disloqua à travers une série de <b>guerres</b> très sanglantes. La plus grave eut lieu en <b>Bosnie-Herzégovine</b> (1992-95), avec le siège de Sarajevo et le génocide de <b>Srebrenica</b> (juillet 1995), où furent tués environ 8 000 hommes et garçons musulmans bosniaques. Aujourd'hui, ces lieux sont des mémoriaux et la région travaille à la réconciliation.</p>
<table>
<tr><th>État</th><th>Capitale</th><th>À savoir</th></tr>
<tr><td><b>Bosnie-Herzégovine</b></td><td>Sarajevo</td><td>Le pont de Mostar (1566), détruit en 1993 et reconstruit en 2004. À Sarajevo, en 1914, l'attentat qui fit éclater la Première Guerre mondiale.</td></tr>
<tr><td><b>Serbie</b></td><td>Belgrade</td><td>Belgrade s'élève là où la Save se jette dans le Danube. On utilise à la fois l'alphabet cyrillique et l'alphabet latin.</td></tr>
<tr><td><b>Monténégro</b></td><td>Podgorica</td><td>Il utilise l'euro tout en n'étant pas dans l'UE. Bouches de Kotor.</td></tr>
<tr><td><b>Albanie</b></td><td>Tirana</td><td>L'albanais est une langue indo-européenne sans « sœurs ». En Italie vivent depuis des siècles des communautés arbëreshë, d'origine albanaise.</td></tr>
<tr><td><b>Macédoine du Nord</b></td><td>Skopje</td><td>Lac d'Ohrid ; elle a changé de nom en 2019.</td></tr>
<tr><td><b>Kosovo</b></td><td>Pristina</td><td>Il a déclaré son indépendance en 2008 ; la Serbie et plusieurs autres États ne la reconnaissent pas.</td></tr>
<tr><td><b>Bulgarie</b></td><td>Sofia</td><td>Dans l'UE depuis 2007, dans l'euro depuis 2026. Célèbre pour l'huile de rose.</td></tr>
</table>
<p>L'Albanie, la Bosnie-Herzégovine, la Macédoine du Nord, le Monténégro et la Serbie sont des <b>pays candidats</b> à l'entrée dans l'UE. En Méditerranée, deux États insulaires font aussi partie de l'UE : <b>Malte</b> (le plus petit État de l'UE) et <b>Chypre</b>.</p>`
    },
    {
      type: `widget`,
      title: `Associe le pays et la capitale`,
      widget: `match`,
      options: {
        pairs: [
          [`🇬🇷 Grèce`, `Athènes`],
          [`🇭🇷 Croatie`, `Zagreb`],
          [`🇸🇮 Slovénie`, `Ljubljana`],
          [`🇧🇦 Bosnie-Herzégovine`, `Sarajevo`],
          [`🇷🇸 Serbie`, `Belgrade`],
          [`🇦🇱 Albanie`, `Tirana`],
          [`🇧🇬 Bulgarie`, `Sofia`],
          [`🇲🇰 Macédoine du Nord`, `Skopje`]
        ]
      },
      caption: `Huit États, huit capitales : certaines sont tout près de l'Italie à vol d'oiseau (Tirana est à environ 200 km des Pouilles).`
    },
    {
      type: `widget`,
      title: `Dans l'UE ou candidat ?`,
      widget: `classify`,
      options: {
        groups: [`Membre de l'UE`, `Pays candidat`],
        items: [
          [`🇬🇷 Grèce`, 0],
          [`🇭🇷 Croatie`, 0],
          [`🇸🇮 Slovénie`, 0],
          [`🇧🇬 Bulgarie`, 0],
          [`🇲🇹 Malte`, 0],
          [`🇨🇾 Chypre`, 0],
          [`🇦🇱 Albanie`, 1],
          [`🇷🇸 Serbie`, 1],
          [`🇲🇪 Monténégro`, 1],
          [`🇲🇰 Macédoine du Nord`, 1],
          [`🇧🇦 Bosnie-Herzégovine`, 1]
        ]
      },
      caption: `Pour entrer dans l'UE, un pays doit respecter la démocratie, les droits de l'homme et l'État de droit, et adapter des milliers de lois.`
    },
    {
      type: `svg`,
      title: `Le karst : l'eau qui creuse la roche`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#e0f2fe"/>
<rect x="0" y="90" width="600" height="230" fill="#d6d3d1"/>
<path d="M0 90 L150 90 Q190 135 230 90 L600 90" fill="#a3e635" stroke="#3f6212" stroke-width="3"/>
<text x="190" y="80" font-size="15" text-anchor="middle" font-weight="bold">doline</text>
<line x1="80" y1="20" x2="70" y2="55" stroke="#2563eb" stroke-width="3"/>
<line x1="110" y1="20" x2="100" y2="55" stroke="#2563eb" stroke-width="3"/>
<line x1="140" y1="20" x2="130" y2="55" stroke="#2563eb" stroke-width="3"/>
<text x="110" y="15" font-size="14" text-anchor="middle" fill="#1d4ed8">pluie (avec CO₂)</text>
<path d="M190 120 L200 170 L230 200" stroke="#2563eb" stroke-width="5" fill="none"/>
<ellipse cx="350" cy="225" rx="170" ry="55" fill="#57534e"/>
<polygon points="250,180 258,210 266,180" fill="#e7e5e4"/>
<polygon points="300,172 308,215 316,172" fill="#e7e5e4"/>
<polygon points="400,175 408,205 416,175" fill="#e7e5e4"/>
<polygon points="440,272 448,240 456,272" fill="#e7e5e4"/>
<polygon points="330,278 338,250 346,278" fill="#e7e5e4"/>
<path d="M190 255 Q350 285 520 250" stroke="#3b82f6" stroke-width="7" fill="none"/>
<text x="350" y="230" font-size="16" text-anchor="middle" font-weight="bold" fill="#ffffff">GROTTE</text>
<text x="545" y="190" font-size="13" text-anchor="middle">stalactites</text>
<text x="545" y="206" font-size="13" text-anchor="middle">(par le haut)</text>
<text x="545" y="290" font-size="13" text-anchor="middle">stalagmites (par le bas)</text>
<text x="200" y="305" font-size="13" text-anchor="middle" fill="#1d4ed8">rivière souterraine</text>
<text x="450" y="120" font-size="15" text-anchor="middle" fill="#44403c">roche calcaire</text>
</svg>`,
      caption: `L'eau de pluie, légèrement acide, dissout le calcaire : en surface se forment des cuvettes (dolines), sous terre des grottes et des rivières. Le phénomène tire son nom du Karst, entre l'Italie et la Slovénie.`
    },
    {
      type: `example`,
      title: `Exemple pratique : en ferry de l'Italie aux Balkans`,
      html: `<p>Des ports de l'Adriatique partent chaque jour des ferries vers l'autre rive :</p>
<table>
<tr><th>Départ</th><th>Arrivée</th><th>Durée indicative</th></tr>
<tr><td>Ancône</td><td>Split (Croatie)</td><td>environ 10-11 heures (de nuit)</td></tr>
<tr><td>Bari</td><td>Durrës (Albanie)</td><td>environ 9 heures</td></tr>
<tr><td>Brindisi</td><td>Igoumenitsa (Grèce)</td><td>environ 8 heures</td></tr>
<tr><td>Ancône / Bari</td><td>Patras (Grèce)</td><td>environ 16-22 heures</td></tr>
</table>
<p>Sur une carte, mesure avec la règle la distance Bari-Durrës : environ 200 km à vol d'oiseau. Si le ferry navigue à environ 22 nœuds (environ 40 km/h), combien d'heures faut-il en théorie ? (200 : 40 = 5 heures : le reste du temps sert aux manœuvres, au chargement et à une vitesse moyenne plus basse.)</p>`
    },
    {
      type: `example`,
      title: `Exemple pratique : tu parles grec sans le savoir !`,
      html: `<p>Énormément de mots français, surtout scientifiques, viennent du grec ancien. Essaie de les décomposer :</p>
<ul>
<li><b>géo-graphie</b> = terre + écriture (description de la Terre) ;</li>
<li><b>démo-cratie</b> = peuple + pouvoir ;</li>
<li><b>archipel</b> = mer principale (c'était le nom de la mer Égée, pleine d'îles) ;</li>
<li><b>télé-phone</b> = loin + voix ;</li>
<li><b>Méditerranée</b>, en revanche, est latin : « au milieu des terres ».</li>
</ul>
<p>Utilise les cartes ci-dessous pour t'entraîner.</p>`
    },
    {
      type: `widget`,
      title: `Flashcards : des mots grecs dans le français`,
      widget: `flashcards`,
      options: {
        cards: [
          { front: `🌍 géo-`, back: `terre (géographie, géologie)` },
          { front: `👥 démo-`, back: `peuple (démocratie, démographie)` },
          { front: `📞 télé-`, back: `loin (téléphone, télévision)` },
          { front: `🏙️ polis`, back: `ville (métropole, politique)` },
          { front: `📖 -logie`, back: `étude, discours (biologie, zoologie)` },
          { front: `🔊 phonè`, back: `voix, son (téléphone, microphone)` },
          { front: `🌊 pelagos`, back: `mer (archipel, pélagique)` }
        ]
      },
      caption: `Retourne les cartes : devine le sens avant de regarder le verso.`
    },
    {
      type: `curiosity`,
      title: `Le savais-tu ? La cravate vient de Croatie !`,
      html: `<p>Au XVIIe siècle, les soldats croates au service du roi de France portaient autour du cou un foulard noué. Les Parisiens l'adorèrent et l'appelèrent « à la croate » : de là vient le mot <b>cravate</b>. Le 18 octobre, on célèbre en Croatie la Journée de la cravate. Et le dalmatien, le chien à taches noires et blanches, tire son nom de la Dalmatie !</p>`
    },
    {
      type: `curiosity`,
      title: `Le savais-tu ? En Bulgarie, « oui » et « non » se font à l'envers !`,
      html: `<p>En Bulgarie (et en partie en Albanie et en Macédoine du Nord), on <b>secoue traditionnellement la tête</b> de droite à gauche pour dire <b>oui</b> et on fait un signe de haut en bas pour dire <b>non</b>. Beaucoup de Bulgares utilisent aujourd'hui aussi les gestes « internationaux », donc… mieux vaut demander à voix haute ! Et l'alphabet cyrillique s'est développé justement dans les écoles du premier royaume bulgare, aux IXe-Xe siècles.</p>`
    },
    {
      type: `decision`,
      title: `2018 : la Grèce et la Macédoine, une querelle pour un nom`,
      html: `<p>Depuis 1991, un petit État balkanique s'appelle « République de Macédoine ». Mais la <b>Macédoine</b> est aussi le nom d'une grande région de la Grèce, la terre d'Alexandre le Grand. La Grèce craint des revendications sur son territoire et sur son histoire, et c'est pourquoi elle bloque l'entrée de son voisin dans l'OTAN et les négociations avec l'UE. Tu es l'un des négociateurs.</p>`,
      question: `Quelle solution proposes-tu ?`,
      options: [
        { label: `L'État voisin doit renoncer complètement au mot « Macédoine ».`, outcome: `Pour ses habitants, qui s'appellent Macédoniens depuis des générations et parlent la langue macédonienne, ce serait inacceptable : aucun gouvernement ne pourrait le signer.` },
        { label: `Un nom avec un adjectif géographique qui le distingue de la région grecque, plus des garanties réciproques.`, outcome: `Les deux parties doivent renoncer à quelque chose et les nationalistes des deux pays protesteront. Mais on débloque une querelle qui dure depuis 27 ans.` },
        { label: `Laissons les choses en l'état.`, outcome: `Le blocage continuerait : pas d'OTAN, pas d'UE, des relations tendues entre voisins.` }
      ],
      answer: 1,
      explain: `Avec l'<b>accord de Prespa</b> (juin 2018, du nom du lac situé à la frontière entre les pays), le voisin de la Grèce a pris le nom de <b>République de Macédoine du Nord</b> (en vigueur depuis 2019), en précisant n'avoir aucun lien avec l'ancienne Macédoine d'Alexandre le Grand ; la Grèce a levé son veto. En 2020, la Macédoine du Nord est entrée dans l'OTAN. Les deux Premiers ministres ont reçu plusieurs distinctions internationales : c'est un exemple de la façon dont la diplomatie peut résoudre des conflits liés à la géographie et à l'identité.`
    },
    {
      type: `alternatives`,
      title: `D'autres façons de comprendre les Balkans`,
      intro: `Une région complexe : voici d'autres clés pour la comprendre.`,
      tabs: [
        {
          label: `🧩 La Yougoslavie comme une mosaïque`,
          html: `<p>Imagine une mosaïque faite de tesselles de couleurs différentes, tenues ensemble par un cadre. Les tesselles étaient les peuples (Slovènes, Croates, Serbes, Bosniaques, Monténégrins, Macédoniens, Albanais du Kosovo…), avec des langues, des religions (catholique, orthodoxe, musulmane) et des histoires différentes. Le cadre était l'État yougoslave dirigé par Tito. Quand le cadre s'est brisé, les tesselles se sont séparées, malheureusement avec beaucoup de violence.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#f8fafc"/>
<rect x="20" y="20" width="250" height="160" fill="none" stroke="#334155" stroke-width="6"/>
<rect x="30" y="30" width="70" height="60" fill="#60a5fa"/>
<rect x="100" y="30" width="80" height="60" fill="#f87171"/>
<rect x="180" y="30" width="80" height="60" fill="#fbbf24"/>
<rect x="30" y="90" width="80" height="80" fill="#34d399"/>
<rect x="110" y="90" width="70" height="80" fill="#a78bfa"/>
<rect x="180" y="90" width="80" height="80" fill="#f472b6"/>
<text x="145" y="198" font-size="14" text-anchor="middle">Yougoslavie (jusqu'en 1991)</text>
<text x="300" y="105" font-size="30" text-anchor="middle">→</text>
<rect x="340" y="25" width="60" height="50" fill="#60a5fa"/>
<rect x="420" y="20" width="65" height="50" fill="#f87171"/>
<rect x="505" y="30" width="65" height="50" fill="#fbbf24"/>
<rect x="345" y="105" width="65" height="60" fill="#34d399"/>
<rect x="430" y="110" width="60" height="60" fill="#a78bfa"/>
<rect x="510" y="115" width="60" height="55" fill="#f472b6"/>
<text x="455" y="198" font-size="14" text-anchor="middle">7 États d'aujourd'hui (avec le Kosovo)</text>
</svg>`
        },
        {
          label: `🍬 Le karst avec du sucre`,
          html: `<p>Fais une expérience : construis une petite tour avec des <b>morceaux de sucre</b> (ils représentent le calcaire) et verse dessus lentement quelques gouttes d'eau avec une pipette. Tu verras que l'eau « creuse » des canaux et des trous et que la tour s'effrite là où l'eau passe.</p>
<p>Le calcaire se dissout bien plus lentement que le sucre (il faut des milliers d'années), mais le principe est le même : l'eau de pluie, rendue légèrement acide par le dioxyde de carbone, dissout la roche et crée des dolines, des grottes, des rivières qui disparaissent sous terre. C'est pourquoi, sur les côtes dalmates et sur le Karst, il y a peu de cours d'eau en surface.</p>`
        },
        {
          label: `🌍 Sur le globe`,
          html: `<p>Fais tourner le globe et trouve les capitales et les lieux célèbres de la région. Remarque comme ils sont proches de l'Italie !</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 37.98, lon: 23.73, label: `Athènes`, color: `#2563eb` },
              { lat: 45.81, lon: 15.98, label: `Zagreb`, color: `#ef4444` },
              { lat: 42.65, lon: 18.09, label: `Dubrovnik`, color: `#f97316` },
              { lat: 43.86, lon: 18.41, label: `Sarajevo`, color: `#eab308` },
              { lat: 44.82, lon: 20.46, label: `Belgrade`, color: `#a855f7` },
              { lat: 41.33, lon: 19.82, label: `Tirana`, color: `#dc2626` },
              { lat: 42.7, lon: 23.32, label: `Sofia`, color: `#16a34a` },
              { lat: 40.09, lon: 22.36, label: `Mont Olympe`, color: `#64748b` },
              { lat: 36.4, lon: 25.43, label: `Santorin`, color: `#f97316` },
              { lat: 41.11, lon: 16.87, label: `Bari (Italie)`, color: `#0ea5e9` }
            ]
          }
        },
        {
          label: `📐 Comparons avec l'Italie`,
          html: `<table>
<tr><th></th><th>Grèce</th><th>Italie</th></tr>
<tr><td>Superficie</td><td>132 000 km²</td><td>302 000 km²</td></tr>
<tr><td>Habitants</td><td>10,4 millions</td><td>59 millions</td></tr>
<tr><td>Îles</td><td>environ 6 000 (environ 200 habitées)</td><td>environ 800 (environ 80 habitées)</td></tr>
<tr><td>Plus haut sommet</td><td>Olympe 2 918 m</td><td>Mont Blanc 4 806 m</td></tr>
<tr><td>Volcans actifs célèbres</td><td>Santorin</td><td>Etna, Vésuve, Stromboli</td></tr>
<tr><td>Climat côtier</td><td>méditerranéen</td><td>méditerranéen</td></tr>
</table>
<p>La Grèce et l'Italie sont deux péninsules « sœurs » : même mer, même climat, beaucoup de séismes, une longue histoire en commun (la Grande-Grèce dans le sud de l'Italie).</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Carte de l'Europe méditerranéenne et balkanique`,
      nodes: [
        { id: `placche`, label: `Choc de plaques`, x: 50, y: 6, color: `#7c3aed`, html: `La plaque africaine pousse contre la plaque eurasienne.`, why: `Ce mouvement très lent (quelques cm par an) a soulevé les montagnes de la région et provoque encore séismes et volcans, comme en Grèce et à Santorin.` },
        { id: `montagne`, label: `Montagnes calcaires`, x: 20, y: 25, color: `#a16207`, html: `Alpes dinariques, Balkans, Pinde : la péninsule est en grande partie montagneuse.`, why: `Les roches calcaires se sont formées au fond d'anciennes mers à partir de coquilles et de squelettes d'organismes marins ; puis le choc des plaques les a soulevées.` },
        { id: `carsismo`, label: `Karst`, x: 20, y: 55, color: `#57534e`, html: `Grottes, dolines, rivières souterraines.`, why: `L'eau de pluie, rendue acide par le dioxyde de carbone, dissout le calcaire. Le nom vient du Karst (Kras), entre Trieste et la Slovénie, où le phénomène fut étudié pour la première fois.` },
        { id: `coste`, label: `Côtes et îles`, x: 80, y: 25, color: `#0ea5e9`, html: `Côtes découpées et des milliers d'îles en Grèce et en Croatie.`, why: `À la fin de la dernière glaciation, le niveau de la mer monta de plus de 100 m et envahit les vallées entre les montagnes côtières : les sommets restés hors de l'eau sont devenus des îles.` },
        { id: `clima`, label: `Climat méditerranéen et continental`, x: 50, y: 40, color: `#eab308`, html: `Chaud et sec sur les côtes, froid en hiver à l'intérieur.`, why: `Les montagnes parallèles à la côte arrêtent l'influence de la mer : à quelques km de distance, le climat change beaucoup.` },
        { id: `turismo`, label: `Tourisme et mer`, x: 80, y: 55, color: `#f97316`, html: `Tourisme, navigation et pêche sont des activités essentielles.`, why: `Une mer limpide, un climat ensoleillé et un riche patrimoine historique attirent des dizaines de millions de visiteurs ; les longues côtes ont toujours poussé les peuples à naviguer.` },
        { id: `popoli`, label: `Beaucoup de peuples et de religions`, x: 50, y: 70, color: `#a855f7`, html: `Grecs, Slaves du sud, Albanais ; orthodoxes, catholiques, musulmans.`, why: `La péninsule a été un carrefour : Grecs, Romains, Byzantins, Slaves (à partir des VIe-VIIe siècles), Vénitiens, Ottomans (pendant presque 500 ans) et Habsbourg y ont laissé des langues, des religions et des cultures différentes.` },
        { id: `jugoslavia`, label: `Yougoslavie et guerres`, x: 25, y: 90, color: `#7f1d1d`, html: `Un État uni (1918-1991), puis la dislocation et les guerres des années 1990.`, why: `Après la fin des grands empires, on chercha à unir les Slaves du sud ; la crise économique et les nationalismes des années 1980-1990 menèrent à une division violente.` },
        { id: `ue`, label: `Vers l'Europe unie`, x: 75, y: 90, color: `#1d4ed8`, html: `La Grèce, la Slovénie, la Croatie, la Bulgarie dans l'UE ; d'autres États candidats.`, why: `L'entrée dans l'UE est vue comme une garantie de paix, de démocratie et de développement ; elle exige des réformes et le règlement des différends entre voisins, comme le montre l'accord de Prespa.` }
      ],
      edges: [
        [`placche`, `montagne`, `soulèvent les`],
        [`montagne`, `carsismo`, `de calcaire → `],
        [`placche`, `coste`, `avec la mer qui monte →`],
        [`montagne`, `clima`, `séparent côte et intérieur`],
        [`coste`, `turismo`, `attirent le`],
        [`montagne`, `popoli`, `vallées isolées`],
        [`popoli`, `jugoslavia`, `unis puis divisés`],
        [`jugoslavia`, `ue`, `de la guerre à l'intégration`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-quiz : les Balkans`,
      questions: [
        { type: `mc`, q: `D'où vient le nom « Balkans » ?`, options: [`D'un roi antique`, `Des monts Balkans : en turc « chaîne de montagnes boisées »`, `D'un fleuve`], answer: 1, explain: `Les monts Balkans se trouvent en Bulgarie.` },
        { type: `mc`, q: `Qu'est-ce qui provoque le karst ?`, options: [`Le vent qui polit les roches`, `L'eau qui dissout le calcaire en formant des grottes et des dolines`, `Les volcans`], answer: 1, explain: `Il tire son nom du Karst, entre l'Italie et la Slovénie.` },
        { type: `text`, q: `Quelle est la capitale de la Serbie ?`, answer: [`belgrade`, `beograd`, `belgrado`], explain: `Belgrade, au confluent de la Save et du Danube.` }
      ]
    }
  ],
  glossary: [
    { t: `Péninsule balkanique`, d: `Péninsule d'Europe du sud-est entre l'Adriatique, la mer Ionienne, la mer Égée et la mer Noire.` },
    { t: `Alpes dinariques`, d: `Chaîne de montagnes calcaires qui court le long de la côte orientale de l'Adriatique.` },
    { t: `Karst`, d: `Ensemble des phénomènes produits par l'eau qui dissout les roches calcaires (grottes, dolines, rivières souterraines).` },
    { t: `Doline`, d: `Cuvette en forme d'entonnoir créée par le karst.` },
    { t: `Bora`, d: `Vent froid et violent qui souffle du nord-est sur l'Adriatique.` },
    { t: `Isthme`, d: `Étroite bande de terre qui relie deux terres et sépare deux mers, comme celui de Corinthe.` },
    { t: `Yougoslavie`, d: `État des Slaves du sud qui a existé de 1918 à 1991-92, puis divisé en plusieurs États.` },
    { t: `Caldeira`, d: `Grande cuvette formée par l'effondrement d'un volcan après une éruption, comme à Santorin.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quelles mers baignent la péninsule balkanique ?`, options: [`Adriatique, Ionienne, Égée, mer Noire`, `Tyrrhénienne, Ligure, Baltique`, `Mer du Nord et Atlantique`], answer: 0, explain: `Quatre mers : l'Adriatique, la mer Ionienne, la mer Égée et la mer Noire.` },
      { type: `text`, q: `Quelle est la capitale de la Grèce ?`, answer: [`athènes`, `athenes`, `athina`, `atene`], explain: `Athènes.` },
      { type: `mc`, q: `Quelle est la plus haute montagne de Grèce ?`, options: [`L'Olympe`, `Le Triglav`, `Le Moussala`], answer: 0, explain: `L'Olympe, 2 918 m. Le Triglav est en Slovénie, le Moussala en Bulgarie.` },
      { type: `tf`, q: `La Grèce a des milliers d'îles, mais seules un peu plus de 200 sont habitées.`, answer: true, explain: `Environ 6 000 entre îles et îlots, un peu plus de 200 habitées.` },
      { type: `mc`, q: `Que relie le canal de Corinthe ?`, options: [`La mer Noire et la mer Égée`, `Le golfe de Corinthe et la mer Égée, en coupant l'isthme`, `L'Adriatique et la mer Ionienne`], answer: 1, explain: `Il fut creusé en 1893 à travers l'isthme de Corinthe.` },
      { type: `num`, q: `En quelle année la Croatie est-elle entrée dans l'Union européenne ?`, answer: 2013, explain: `En 2013 ; depuis 2023, elle utilise l'euro.` },
      { type: `mc`, q: `Quel État utilise l'euro tout en ne faisant pas partie de l'UE ?`, options: [`Le Monténégro`, `La Serbie`, `L'Albanie`], answer: 0, explain: `Le Monténégro l'a adopté unilatéralement.` },
      { type: `order`, q: `Mets dans l'ordre chronologique.`, items: [`Attentat de Sarajevo`, `Naissance de la Yougoslavie`, `Mort de Tito`, `Début de la dislocation de la Yougoslavie`, `La Croatie dans l'UE`], explain: `1914, 1918, 1980, 1991, 2013.` },
      { type: `mc`, q: `Pourquoi y a-t-il peu de cours d'eau en surface sur la côte dalmate ?`, options: [`Parce qu'il ne pleut jamais`, `Parce que, à cause du karst, l'eau coule sous terre`, `Parce que les fleuves ont été détournés`], answer: 1, explain: `Le calcaire est dissous par l'eau, qui s'infiltre et forme des rivières souterraines.` },
      { type: `text`, q: `Comment s'appelle aujourd'hui l'État qui a changé de nom avec l'accord de Prespa ? (Macédoine du …)`, answer: [`nord`, `macédoine du nord`, `macedoine du nord`], explain: `République de Macédoine du Nord, depuis 2019.` },
      { type: `tf`, q: `Le climat de l'intérieur des Balkans est le même que celui de la côte.`, answer: false, explain: `Sur les côtes il est méditerranéen ; à l'intérieur, protégé par les montagnes, il est continental.` },
      { type: `mc`, q: `Quel État est le plus petit de l'Union européenne ?`, options: [`Chypre`, `Malte`, `La Slovénie`], answer: 1, explain: `Malte, environ 316 km².` }
    ]
  }
});
