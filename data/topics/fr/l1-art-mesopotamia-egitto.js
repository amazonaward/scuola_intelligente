TOPIC('fr', {
  id: `l1-art-mesopotamia-egitto`,
  title: `L'art mésopotamien et égyptien`,
  intro: `Entre le Tigre et l'Euphrate et le long du Nil, il y a plus de 5000 ans, naissent les <b>premières villes</b>, l'<b>écriture</b> et les premières grandes architectures de pierre et de brique : ziggourats, pyramides, temples gigantesques. Deux civilisations voisines, deux manières différentes de faire de l'art : les <b>Sumériens et les Babyloniens</b> bâtissent des tours vers le ciel et gravent des lois dans la pierre ; les <b>Égyptiens</b> construisent pour l'éternité, car pour eux l'art sert à <b>vaincre la mort</b>. 🏛️🔺`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Deux civilisations des grands fleuves`,
      html: `<p>Les premières civilisations naissent là où l'agriculture est favorisée par de grands fleuves qui rendent le sol fertile.</p>
<ul>
<li><b>Mésopotamie</b> (du grec « pays entre les fleuves », l'actuel Irak) : Sumériens (à partir de 3500 av. J.-C.), Akkadiens, Babyloniens, Assyriens. Des cités-États gouvernées par des rois-prêtres. L'<b>écriture cunéiforme</b> (des signes en forme de clou gravés sur des tablettes d'argile) apparaît vers <b>3300 av. J.-C.</b> La pierre et le bois manquent : le matériau de base est la <b>brique crue</b> d'argile.</li>
<li><b>Égypte</b> : une civilisation longue d'environ 3000 ans le long du Nil, unifiée vers <b>3100 av. J.-C.</b> sous le premier pharaon (Narmer ou Ménès). La crue annuelle du Nil fertilise la terre. Ici, la <b>pierre</b> abonde (calcaire, granit, grès) : l'architecture est en pierre de taille. Écriture : les <b>hiéroglyphes</b> (déchiffrés en 1822 par <b>Champollion</b> grâce à la pierre de Rosette).</li>
</ul>
<p>Dans les deux cas, <b>religion et pouvoir</b> se confondent : l'art sert à honorer les dieux et le roi. Mais le but est différent : en Mésopotamie, les temples sont la <b>maison du dieu</b> sur terre et le lieu où le roi montre sa puissance ; en Égypte, le pharaon est un <b>dieu vivant</b>, et les tombes comme les images doivent garantir sa survie dans l'au-delà.</p>`
    },
    {
      type: `3d`, title: `Voyager dans le temps et l'espace : de la Mésopotamie à l'Égypte`,
      scene: `spacetime`,
      options: {
        lat: [20, 36], lon: [28, 52], years: [-3200, -400],
        places: [ { lat: 30.0, lon: 31.1, label: `Gizeh` }, { lat: 30.96, lon: 46.1, label: `Ur` }, { lat: 32.54, lon: 44.42, label: `Babylone` }, { lat: 25.72, lon: 32.66, label: `Karnak` } ],
        events: [
          { id: `e1`, lat: 30.96, lon: 46.1, year: -2100, label: `Ziggourat d'Ur`, html: `Le roi Ur-Nammu fait construire la grande ziggourat dédiée au dieu-lune Nanna, vers 2100 av. J.-C.` },
          { id: `e2`, lat: 29.87, lon: 31.22, year: -2650, label: `Pyramide de Djéser (Saqqarah)`, html: `Imhotep conçoit la première grande construction en pierre : la pyramide à degrés.` },
          { id: `e3`, lat: 30.0, lon: 31.1, year: -2560, label: `Grande Pyramide de Khéops`, html: `Le pharaon Khéops fait construire la plus grande pyramide, haute de 146,6 m à l'origine.`, causes: [`e2`] },
          { id: `e4`, lat: 32.54, lon: 44.42, year: -1750, label: `Code d'Hammurabi`, html: `Le roi babylonien Hammurabi fait graver environ 282 lois sur une stèle de basalte.` },
          { id: `e5`, lat: 25.72, lon: 32.66, year: -1300, label: `Salle hypostyle de Karnak`, html: `Les pharaons Séthi Ier et Ramsès II achèvent la salle aux 134 colonnes du temple d'Amon.` },
          { id: `e6`, lat: 32.54, lon: 44.42, year: -575, label: `Porte d'Ishtar`, html: `Nabuchodonosor II fait construire à Babylone la porte en briques émaillées bleues.`, causes: [`e4`] }
        ]
      },
      caption: `La carte est la base, la hauteur représente le temps : touche un événement pour lire sa fiche et les flèches entre causes et effets.`
    },
    {
      type: `text`, title: `2. L'architecture mésopotamienne : la ziggourat`,
      html: `<p>Le symbole de l'art mésopotamien est la <b>ziggourat</b> (de l'akkadien <i>ziqqurratu</i>, « sommet, pointe ») : une <b>tour à degrés</b> en briques crues revêtues de briques cuites et de bitume, avec des escaliers extérieurs. Au sommet se trouvait un petit sanctuaire, la « maison » du dieu, où le prêtre montait pour les rites.</p>
<ul>
<li>La ziggourat d'<b>Ur</b> (sud de l'Irak), construite par le roi <b>Ur-Nammu</b> vers <b>2100 av. J.-C.</b> et dédiée au dieu-lune <b>Nanna</b> : une base d'environ 60 × 45 m, trois terrasses, trois escaliers qui se rejoignent. Seule la partie inférieure (restaurée) est conservée aujourd'hui.</li>
<li>L'<b>Etemenanki</b> de <b>Babylone</b>, dédiée à Marduk, que l'on considère comme l'origine du récit biblique de la <b>tour de Babel</b> : les sources parlent d'environ sept étages.</li>
</ul>
<p>Faute de pierre, on construit en brique et on utilise <b>arcs et voûtes</b> dès le IIIe millénaire av. J.-C. Les façades sont décorées de <b>briques émaillées</b> (comme la <b>porte d'Ishtar</b>, voir plus bas).</p>`
    },
    {
      type: `text`, title: `3. Sculpture et reliefs mésopotamiens`,
      html: `<p>Dans les œuvres mésopotamiennes, ce n'est pas la ressemblance qui compte, mais l'<b>importance sociale</b> du personnage et le récit.</p>
<ul>
<li><b>Sumériens – Étendard d'Ur</b> (vers 2600-2500 av. J.-C., British Museum) : un coffret en bois décoré d'une <b>mosaïque</b> de lapis-lazuli, de coquillage et de calcaire rouge, divisé en « registres » horizontaux. Une face montre la <b>guerre</b>, l'autre la <b>paix</b> (un banquet). Il se lit de bas en haut.</li>
<li><b>Sumériens – statuettes d'orants</b> (Tell Asmar, vers 2700-2500 av. J.-C.) : des figures aux yeux immenses en coquillage et lapis-lazuli, les mains jointes, déposées dans les temples à la place des fidèles.</li>
<li><b>Babyloniens – Stèle d'Hammurabi</b> (vers 1750 av. J.-C., Louvre) : un bloc de <b>basalte noir</b> haut d'environ 2,25 m, découvert à Suse en 1901-1902. En haut, le roi reçoit le symbole du pouvoir du dieu soleil <b>Shamash</b> ; en dessous, en écriture cunéiforme, <b>282 lois</b> (le « code » d'Hammurabi), dont la célèbre loi du talion (« œil pour œil »).</li>
<li><b>Babyloniens – Porte d'Ishtar</b> (vers 575 av. J.-C., Nabuchodonosor II) : l'entrée de la ville, revêtue de <b>briques émaillées bleues</b> avec des rangées de taureaux (Adad) et de dragons (Marduk). Elle est reconstituée au Pergamonmuseum de Berlin.</li>
<li><b>Assyriens</b> (IXe-VIIe s. av. J.-C.) : une puissance militaire. Palais de Khorsabad (Sargon II) et de Ninive avec des <b>lamassus</b> (taureaux ailés à tête humaine, gardiens des portes, à cinq pattes pour être vus aussi bien de face que de profil) et des <b>bas-reliefs</b> de batailles et de chasses (comme la <i>Chasse au lion</i> d'Assurbanipal, vers 645 av. J.-C.).</li>
</ul>`
    },
    {
      type: `quiz`, title: `Mini-quiz : la Mésopotamie`,
      questions: [
        { type: `mc`, q: `Quel matériau les Mésopotamiens utilisent-ils surtout pour construire ?`, options: [`La brique d'argile`, `Le granit`, `Le marbre`], answer: 0, explain: `La pierre et le bois manquent : on utilise l'argile (briques crues et cuites).` },
        { type: `mc`, q: `Où se trouve aujourd'hui la stèle portant le code d'Hammurabi ?`, options: [`Au Louvre, à Paris`, `Au Musée égyptien de Turin`, `À Bagdad`], answer: 0, explain: `Elle a été apportée à Paris après sa découverte à Suse (1901-1902).` },
        { type: `tf`, q: `La ziggourat était une tombe royale.`, answer: false, explain: `C'était une tour à degrés surmontée d'un sanctuaire, pas une tombe.` }
      ]
    },
    {
      type: `text`, title: `4. L'architecture égyptienne : du mastaba à la pyramide`,
      html: `<p>Pour les Égyptiens, la mort est un passage : le corps doit être conservé (<b>momification</b>) et la tombe pourvue de tout le nécessaire. C'est pourquoi l'architecture funéraire se développe énormément.</p>
<ul>
<li><b>Mastaba</b> (de l'arabe « banc ») : une tombe en forme de pyramide tronquée à base rectangulaire, en brique ou en pierre, avec une chambre souterraine pour le sarcophage et une chapelle pour les offrandes.</li>
<li><b>Pyramide à degrés de Djéser</b> à <b>Saqqarah</b> (vers 2650 av. J.-C., IIIe dynastie) : conçue par l'architecte et médecin <b>Imhotep</b>, plus tard divinisé. C'est la première grande construction en pierre de taille : six mastabas superposés, hauts d'environ 60 m.</li>
<li><b>Pyramides de Snéfrou</b> à Dahchour (vers 2600 av. J.-C.) : la « rhomboïdale » change d'inclinaison à mi-hauteur (d'environ 54° à 43°) parce qu'on craignait un effondrement ; la « rouge » a déjà une pente constante d'environ 43°.</li>
<li><b>Pyramides de Gizeh</b> (IVe dynastie, vers 2560-2470 av. J.-C.) : celles de <b>Khéops</b> (Khufu, hauteur d'origine <b>146,6 m</b>, base carrée d'environ <b>230 m</b> de côté, 2,3 millions de blocs de 2,5 tonnes en moyenne), de <b>Khéphren</b> (environ 143,5 m) et de <b>Mykérinos</b> (environ 65 m). Le <b>Sphinx</b>, taillé dans la roche calcaire, mesure environ 73 m de long et 20 m de haut : il a un corps de lion et le visage, peut-être, de Khéphren.</li>
</ul>
<p>La pyramide aux faces lisses représente les <b>rayons du Soleil</b> qui descendent du ciel : une « échelle » pour le pharaon vers Rê. La Grande Pyramide est restée l'édifice le plus haut du monde pendant environ <b>3800 ans</b>, jusqu'à la cathédrale de Lincoln en Angleterre (vers 1311). Ses côtés sont orientés vers les points cardinaux avec une erreur minime.</p>`
    },
    {
      type: `svg`, title: `Du mastaba à la pyramide`,
      caption: `Trois étapes de l'architecture funéraire égyptienne : le mastaba, la pyramide à degrés de Djéser (Imhotep, vers 2650 av. J.-C.) et la pyramide à faces lisses de Gizeh (Khéops, vers 2560 av. J.-C.).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<rect x="0" y="230" width="600" height="70" fill="#fcd34d"/>
<polygon points="30,230 175,230 160,180 45,180" fill="#d6a85a" stroke="#78350f" stroke-width="3" stroke-linejoin="round"/>
<text x="102" y="260" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">MASTABA</text>
<text x="102" y="280" font-size="14" fill="#78350f" text-anchor="middle">vers 3000-2700 av. J.-C.</text>
<g fill="#d6a85a" stroke="#78350f" stroke-width="3" stroke-linejoin="round">
<polygon points="215,230 365,230 365,205 215,205"/>
<polygon points="230,205 350,205 350,180 230,180"/>
<polygon points="245,180 335,180 335,155 245,155"/>
<polygon points="258,155 322,155 322,130 258,130"/>
<polygon points="270,130 310,130 310,108 270,108"/>
<polygon points="278,108 302,108 302,88 278,88"/>
</g>
<text x="290" y="260" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">DJÉSER À SAQQARAH</text>
<text x="290" y="280" font-size="14" fill="#78350f" text-anchor="middle">à degrés, vers 2650 av. J.-C.</text>
<polygon points="395,230 580,230 487,45" fill="#e8c068" stroke="#78350f" stroke-width="3" stroke-linejoin="round"/>
<line x1="487" y1="45" x2="487" y2="230" stroke="#92400e" stroke-width="2" stroke-dasharray="6 4"/>
<text x="487" y="260" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">KHÉOPS À GIZEH</text>
<text x="487" y="280" font-size="14" fill="#78350f" text-anchor="middle">faces lisses, vers 2560 av. J.-C.</text>
<text x="497" y="150" font-size="14" fill="#92400e">146,6 m</text>
</svg>`
    },
    {
      type: `3d`, title: `Une pyramide à faire tourner`,
      scene: `solid`,
      options: { shape: `pyramid`, n: 4, r: 1.6, h: 2.2, color: `#e8c068`, labels: true, shapes: [`pyramid`, `prism`, `cube`, `cone`] },
      caption: `La pyramide égyptienne est une pyramide régulière à base carrée. Regarde-la d'en haut (vue de dessus carrée avec les diagonales) et de côté (élévation triangulaire) : tu retrouves les projections orthogonales.`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Ce ne sont pas des esclaves qui ont construit les pyramides`,
      html: `<p>Des fouilles près de Gizeh (à partir des années 1990, avec Zahi Hawass et Mark Lehner) ont mis au jour le village des <b>ouvriers</b> : maisons, boulangeries, brasseries, et tombes avec titres honorifiques. Des travailleurs <b>payés et nourris</b> (pain, bière, viande), organisés en équipes aux noms amusants comme « Les amis de Khéops ». Le chantier a duré une vingtaine d'années. Les blocs arrivaient souvent des carrières par le <b>Nil</b> pendant la crue, quand le fleuve s'approchait du chantier : un papyrus découvert en 2013 à Ouadi el-Jarf (le « journal de Merer ») raconte justement le transport des blocs de calcaire de Tourah.</p>`
    },
    {
      type: `text`, title: `5. Le temple égyptien`,
      html: `<p>Le temple du Nouvel Empire (vers 1550-1070 av. J.-C.) est la maison terrestre du dieu. Son plan est <b>axial</b> : de l'entrée vers le sanctuaire, on passe d'espaces lumineux et ouverts à des espaces sombres et de plus en plus réservés. Le système de construction est <b>trilithique</b> (piliers et architraves), avec des plafonds faits de dalles de pierre.</p>
<ol>
<li><b>Allée de sphinx</b> : l'entrée monumentale.</li>
<li><b>Pylônes</b> : deux tours massives en forme de trapèze de part et d'autre de l'entrée, avec des reliefs du pharaon victorieux et des obélisques devant.</li>
<li><b>Cour</b> à ciel ouvert entourée de portiques à colonnes.</li>
<li><b>Salle hypostyle</b> (du grec « soutenue par des colonnes ») : une forêt serrée de colonnes aux chapiteaux en forme de <b>papyrus</b> (ouvert ou fermé), de <b>lotus</b> ou de <b>palmier</b> ; la lumière entre par des fenêtres hautes (claustra).</li>
<li><b>Naos</b> (<i>saint des saints</i>) : la chambre obscure abritant la statue du dieu, accessible seulement aux prêtres et au pharaon.</li>
</ol>
<p>Exemples : le <b>temple d'Amon à Karnak</b> (Thèbes, construit et agrandi pendant environ 2000 ans ; la salle hypostyle compte <b>134 colonnes</b>, les plus hautes de 21 m) ; le <b>temple de Louxor</b> ; le <b>temple de Ramsès II à Abou Simbel</b> (vers 1265 av. J.-C., creusé dans la roche, avec quatre statues assises hautes d'environ 20 m ; déplacé plus haut entre 1964 et 1968 pour le sauver des eaux du barrage d'Assouan) ; le <b>temple funéraire d'Hatshepsout</b> à Deir el-Bahari (vers 1470 av. J.-C., terrasses à portiques, attribué à l'architecte Senenmout).</p>`
    },
    {
      type: `svg`, title: `Plan d'un temple égyptien (schéma)`,
      caption: `De l'allée de sphinx au sanctuaire : l'espace devient de plus en plus étroit, sombre et sacré. Les colonnes de la salle hypostyle sont serrées parce qu'elles portent de lourdes architraves de pierre.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<g fill="#b45309" stroke="#78350f" stroke-width="1.5">
<rect x="20" y="115" width="20" height="10"/><rect x="50" y="115" width="20" height="10"/><rect x="80" y="115" width="20" height="10"/>
<rect x="20" y="175" width="20" height="10"/><rect x="50" y="175" width="20" height="10"/><rect x="80" y="175" width="20" height="10"/>
</g>
<polygon points="110,100 150,95 150,135 110,135" fill="#d6a85a" stroke="#78350f" stroke-width="3"/>
<polygon points="110,200 150,205 150,165 110,165" fill="#d6a85a" stroke="#78350f" stroke-width="3"/>
<rect x="150" y="90" width="110" height="120" fill="#fef9c3" stroke="#78350f" stroke-width="3"/>
<g fill="#78350f"><circle cx="165" cy="105" r="5"/><circle cx="165" cy="195" r="5"/><circle cx="245" cy="105" r="5"/><circle cx="245" cy="195" r="5"/><circle cx="165" cy="135" r="5"/><circle cx="165" cy="165" r="5"/><circle cx="245" cy="135" r="5"/><circle cx="245" cy="165" r="5"/></g>
<rect x="260" y="95" width="150" height="110" fill="#e7d3a1" stroke="#78350f" stroke-width="3"/>
<g fill="#78350f">
<circle cx="280" cy="115" r="6"/><circle cx="310" cy="115" r="6"/><circle cx="340" cy="115" r="6"/><circle cx="370" cy="115" r="6"/><circle cx="395" cy="115" r="6"/>
<circle cx="280" cy="150" r="6"/><circle cx="310" cy="150" r="6"/><circle cx="340" cy="150" r="6"/><circle cx="370" cy="150" r="6"/><circle cx="395" cy="150" r="6"/>
<circle cx="280" cy="185" r="6"/><circle cx="310" cy="185" r="6"/><circle cx="340" cy="185" r="6"/><circle cx="370" cy="185" r="6"/><circle cx="395" cy="185" r="6"/>
</g>
<rect x="410" y="115" width="80" height="70" fill="#d6c08a" stroke="#78350f" stroke-width="3"/>
<rect x="490" y="130" width="60" height="40" fill="#a16207" stroke="#451a03" stroke-width="3"/>
<g font-size="14" fill="#1c1917" font-weight="bold">
<text x="60" y="80" text-anchor="middle">allée de sphinx</text>
<text x="130" y="75" text-anchor="middle">pylône</text>
<text x="205" y="75" text-anchor="middle">cour</text>
<text x="335" y="75" text-anchor="middle">salle hypostyle</text>
<text x="450" y="75" text-anchor="middle">vestibules</text>
<text x="520" y="115" text-anchor="middle">naos</text>
</g>
<text x="300" y="250" font-size="15" fill="#44403c" text-anchor="middle">lumière et grand espace  →  pénombre  →  obscurité et sacré</text>
<path d="M60 275 L540 275" stroke="#78350f" stroke-width="2"/><polygon points="540,270 552,275 540,280" fill="#78350f"/>
</svg>`
    },
    {
      type: `text`, title: `6. Peinture et sculpture égyptiennes`,
      html: `<p>L'art égyptien obéit à des <b>règles strictes</b>, restées presque inchangées pendant 3000 ans, parce que l'image a une valeur <b>magique</b> : ce qui est peint « existe » dans l'au-delà. On recherche la clarté, pas l'illusion.</p>
<p>La <b>loi de frontalité</b> (dans le relief et la peinture) : la figure humaine est représentée avec la <b>tête de profil</b>, l'<b>œil vu de face</b>, les <b>épaules et le torse de face</b>, la <b>taille et les jambes de profil</b>, un pied en avant. Ainsi, chaque partie du corps montre son aspect « le plus reconnaissable ». Les figures sont disposées en <b>registres</b> (bandes horizontales) et la <b>taille indique le rang</b> : le pharaon est plus grand que les serviteurs (perspective hiérarchique).</p>
<ul>
<li><b>Palette de Narmer</b> (vers 3100 av. J.-C.) : Narmer unifie la Haute et la Basse-Égypte.</li>
<li><b>Peinture funéraire</b> : tombes de Thèbes avec des scènes de la vie quotidienne, comme la <i>Chasse aux oiseaux dans les marais</i> de la tombe de <b>Nebamon</b> (vers 1350 av. J.-C., British Museum). Couleurs minérales : ocre, azurite, malachite, noir de fumée.</li>
<li><b>Sculpture</b> : statues en granit ou en diorite, <b>frontales, symétriques, immobiles</b>, un pied en avant ; le <b>Scribe accroupi</b> (vers 2500 av. J.-C., Louvre) est plus naturel ; la <b>Triade de Mykérinos</b>.</li>
<li><b>Période amarnienne</b> (vers 1350-1330 av. J.-C.) : le pharaon <b>Akhenaton</b> impose le culte d'un seul dieu, le disque solaire <b>Aton</b>, et change aussi le style : plus naturaliste, visages allongés et moments de vie familiale. De là vient le <b>Buste de Néfertiti</b> du sculpteur <b>Thoutmôsis</b> (vers 1345 av. J.-C., calcaire et stuc peint, Neues Museum de Berlin).</li>
<li><b>Masque funéraire de Toutânkhamon</b> (vers 1323 av. J.-C.) : en or massif avec pâte de verre et pierres dures, 54 cm ; la tombe a été découverte par <b>Howard Carter</b> le 4 novembre 1922 (la chambre funéraire a été ouverte en 1923) dans la Vallée des Rois. Musée égyptien du Caire.</li>
</ul>`
    },
    {
      type: `example`, title: `Exemple : lire un relief égyptien`,
      html: `<p>Regarde un relief montrant le pharaon qui frappe ses ennemis. Les règles t'aident à le « lire » :</p>
<ul>
<li>le pharaon est <b>gigantesque</b> par rapport aux ennemis : c'est le plus important ;</li>
<li>les figures sont placées sur des <b>registres</b> superposés : en haut le roi et les dieux, en bas les serviteurs ;</li>
<li>le corps est un <b>collage</b> de points de vue : tête de profil, œil de face, torse de face, jambes de profil ;</li>
<li>à côté apparaissent les <b>hiéroglyphes</b> : le texte raconte ce que l'image montre.</li>
</ul>
<p>Ce n'est pas que les Égyptiens « ne savaient pas » dessiner en perspective : ils voulaient rendre l'image <b>claire et complète</b>, pas réaliste.</p>`
    },
    {
      type: `example`, title: `Exemple : calculer l'inclinaison d'une pyramide`,
      html: `<p>La Grande Pyramide a un côté de base d'environ 230 m et une hauteur d'origine d'environ 146,6 m. La moitié de la base mesure 115 m : l'<b>angle d'inclinaison</b> des faces est celui dont la tangente vaut hauteur / demi-base = 146,6 / 115 ≈ 1,275, soit environ <b>51,9°</b>. Le rapport entre l'apothème (la distance du milieu d'un côté au sommet, environ 186 m) et la demi-base (115 m) vaut environ 1,62, très proche du nombre d'or ; mais il découle probablement d'une pente choisie (7 palmes par coudée) et non d'un choix « doré » intentionnel.</p>`
    },
    {
      type: `decision`, title: `Où te fais-tu enterrer ?`,
      html: `<p>Tu es un pharaon du Nouvel Empire (vers 1500 av. J.-C.). Les pyramides de tes ancêtres, bien visibles dans le désert, ont presque toutes été <b>pillées</b> par les voleurs de tombes : la momie et le trésor ont disparu. Tu dois décider où construire ta tombe.</p>`,
      question: `Qu'aurais-tu choisi ?`,
      options: [
        { label: `Une nouvelle pyramide, énorme, encore plus haute`, outcome: `Coûteuse et très visible : elle attirerait les voleurs exactement comme les autres.` },
        { label: `Une tombe creusée dans la roche dans une vallée cachée`, outcome: `C'est le choix des pharaons du Nouvel Empire : la Vallée des Rois, près de Thèbes, avec des tombes souterraines sans monument extérieur, et un temple funéraire éloigné pour le culte.` },
        { label: `Pas de tombe : s'en remettre aux dieux`, outcome: `Pour les Égyptiens, la tombe était indispensable à l'immortalité : ils n'y auraient jamais renoncé.` }
      ],
      answer: 1,
      explain: `À partir de 1500 av. J.-C. environ, les pharaons choisirent la Vallée des Rois (une soixantaine de tombes) : couloirs et chambres creusés dans la roche, aux parois peintes. Même cela ne suffit pas : presque toutes furent pillées dès l'Antiquité. Seule exception, la tombe de Toutânkhamon (KV62), petite et recouverte de débris, découverte presque intacte par Howard Carter en 1922.`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Champollion a lu les hiéroglyphes en 1822`,
      html: `<p>La <b>pierre de Rosette</b> (196 av. J.-C., British Museum) porte le même décret en trois écritures : hiéroglyphique, démotique et grecque. Le Français <b>Jean-François Champollion</b> compara les noms de rois inscrits dans des cartouches (Ptolémée, Cléopâtre) et annonça le 27 septembre 1822 qu'il avait déchiffré le système, qui mêle signes-images et signes-sons. Ainsi, les Égyptiens recommencèrent à parler après 1400 ans de silence.</p>`
    },
    {
      type: `remember`, title: `À retenir`,
      html: `<ul>
<li><b>Mésopotamie</b> : briques, <b>ziggourat</b> (Ur, vers 2100 av. J.-C.), stèle d'Hammurabi (vers 1750 av. J.-C.), porte d'Ishtar (vers 575 av. J.-C.), lamassus assyriens.</li>
<li><b>Égypte</b> : mastaba → pyramide à degrés (Djéser, Imhotep, vers 2650 av. J.-C.) → pyramides de Gizeh (Khéops vers 2560 av. J.-C., 146,6 m).</li>
<li><b>Temple égyptien</b> : allée de sphinx, pylônes, cour, <b>salle hypostyle</b>, naos ; système trilithique.</li>
<li><b>Peinture et sculpture égyptiennes</b> : loi de frontalité, registres, taille hiérarchique ; exception d'Amarna (Néfertiti).</li>
<li>Masque de Toutânkhamon (vers 1323 av. J.-C.), découvert en 1922 par Carter.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `D'autres façons de comprendre`,
      intro: `Pour t'orienter dans ces deux civilisations, essaie de les regarder sous des angles différents.`,
      tabs: [
        {
          label: `🔺 La pyramide en coupe`,
          html: `<p>À l'intérieur de la Grande Pyramide se trouvent trois chambres : la chambre <b>souterraine</b> (inachevée), la <b>chambre de la reine</b> et la <b>chambre du roi</b> (avec le sarcophage en granit rose d'Assouan), à laquelle on accède par une <b>Grande Galerie</b> à voûte en encorbellement haute d'environ 8 m. Au-dessus de la chambre du roi, cinq « chambres de décharge » allègent le poids pesant sur le plafond.</p>`,
          scene: `solid`,
          options: { shape: `pyramid`, n: 4, r: 1.6, h: 2.2, color: `#fcd34d`, labels: true }
        },
        {
          label: `🧱 Construire sans grue`,
          html: `<p>Comment construisait-on ? Des rampes de briques et de terre (droites ou en spirale) pour faire monter les blocs sur des traîneaux en bois ; on mouillait le sol devant le traîneau pour réduire le frottement (comme le montre une peinture de Deir el-Bercha) ; des leviers en bois pour la mise en place finale ; des cordes de papyrus et de fibres. Les pierres de parement (calcaire fin de Tourah) étaient posées de haut en bas et polies au fur et à mesure. Les Anciens n'avaient pas de roues pour les charges lourdes : la force, c'était l'<b>équipe</b> organisée.</p>`
        },
        {
          label: `📜 Mésopotamie et Égypte comparées`,
          html: `<table>
<tr><th></th><th>Mésopotamie</th><th>Égypte</th></tr>
<tr><td><b>Matériau</b></td><td>brique crue et cuite</td><td>pierre de taille</td></tr>
<tr><td><b>Édifice symbole</b></td><td>ziggourat (vers le ciel)</td><td>pyramide (tombe)</td></tr>
<tr><td><b>Écriture</b></td><td>cunéiforme sur argile</td><td>hiéroglyphes sur pierre et papyrus</td></tr>
<tr><td><b>Roi</b></td><td>représentant des dieux</td><td>dieu vivant</td></tr>
<tr><td><b>Art</b></td><td>récit, pouvoir, lois</td><td>éternité, au-delà</td></tr>
</table>`
        },
        {
          label: `🧩 Associe`,
          html: `<p>Relie chaque œuvre à sa civilisation.</p>`,
          widget: `classify`,
          options: { groups: [`Mésopotamie`, `Égypte`], items: [[`Stèle d'Hammurabi`, 0], [`Pyramide de Khéops`, 1], [`Porte d'Ishtar`, 0], [`Masque de Toutânkhamon`, 1], [`Lamassu`, 0], [`Salle hypostyle de Karnak`, 1], [`Ziggourat d'Ur`, 0], [`Buste de Néfertiti`, 1]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : l'art mésopotamien et égyptien`,
      nodes: [
        { id: `fiumi`, label: `Civilisations des grands fleuves`, x: 50, y: 6, color: `#64748b`, html: `Tigre-Euphrate et Nil.`, why: `Les crues fertilisent le sol : surplus agricole, donc villes, scribes, artisans et rois capables de bâtir des œuvres monumentales.` },
        { id: `mes`, label: `Mésopotamie`, x: 22, y: 30, color: `#2563eb`, html: `Sumériens, Babyloniens, Assyriens.`, why: `Une région sans pierre : on construit en brique. Les cités-États sont en guerre, si bien que le pouvoir s'exprime aussi par des scènes de bataille et des lois écrites.` },
        { id: `egi`, label: `Égypte`, x: 78, y: 30, color: `#d97706`, html: `Un royaume unifié pendant des millénaires.`, why: `Isolement naturel (désert et mer), continuité politique : le style change peu pendant 3000 ans.` },
        { id: `zig`, label: `Ziggourat et porte d'Ishtar`, x: 15, y: 62, color: `#3b82f6`, html: `Tours à degrés et briques émaillées.`, why: `Une montagne artificielle pour se rapprocher du dieu : le temple s'élève dans une plaine sans relief.` },
        { id: `ham`, label: `Stèle d'Hammurabi`, x: 35, y: 85, color: `#0ea5e9`, html: `282 lois en cunéiforme.`, why: `Écrire les lois dans la pierre rend les règles publiques : personne ne peut prétendre les ignorer (vers 1750 av. J.-C.).` },
        { id: `pir`, label: `Pyramides`, x: 68, y: 62, color: `#f59e0b`, html: `Mastaba → Djéser → Gizeh.`, why: `Des pierres superposées (Djéser, Imhotep) à la forme pure : le pharaon monte au ciel avec la lumière de Rê.` },
        { id: `tem`, label: `Temple et salle hypostyle`, x: 92, y: 62, color: `#ef4444`, html: `Plan axial, colonnes papyriformes.`, why: `Le temple est une montagne primordiale et un marais de papyrus : les colonnes imitent les plantes.` },
        { id: `front`, label: `Frontalité et registres`, x: 78, y: 88, color: `#a855f7`, html: `Des règles fixes pour les images.`, why: `Une image correcte agit magiquement dans l'au-delà : c'est pourquoi on ne la change pas.` }
      ],
      edges: [
        [`fiumi`, `mes`, `1re`], [`fiumi`, `egi`, `2e`], [`mes`, `zig`, `édifice`], [`mes`, `ham`, `lois`], [`egi`, `pir`, `tombes`], [`egi`, `tem`, `culte`], [`egi`, `front`, `images`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : l'Égypte`,
      questions: [
        { type: `mc`, q: `Qui a conçu la pyramide à degrés de Djéser ?`, options: [`Imhotep`, `Senenmout`, `Champollion`], answer: 0, explain: `Imhotep, architecte et médecin, vers 2650 av. J.-C.` },
        { type: `tf`, q: `Selon la loi de frontalité, la tête est de profil et l'œil est vu de face.`, answer: true, explain: `Ainsi, chaque partie du corps est représentée sous son aspect le plus reconnaissable.` },
        { type: `num`, q: `Combien de colonnes compte la salle hypostyle du temple d'Amon à Karnak ?`, answer: 134, tol: 0, explain: `134 colonnes, celles du centre hautes d'environ 21 m.` },
        { type: `mc`, q: `Qui a découvert la tombe de Toutânkhamon en 1922 ?`, options: [`Howard Carter`, `Heinrich Schliemann`, `Arthur Evans`], answer: 0, explain: `L'archéologue britannique Howard Carter, dans la Vallée des Rois.` }
      ]
    }
  ],
  glossary: [
    { t: `Ziggourat`, d: `Tour à degrés mésopotamienne en briques, surmontée d'un sanctuaire.` },
    { t: `Cunéiforme`, d: `Écriture faite de signes en forme de clou, gravés sur de l'argile.` },
    { t: `Lamassu`, d: `Taureau ailé à tête humaine, gardien des portes des palais assyriens.` },
    { t: `Mastaba`, d: `Tombe égyptienne en forme de pyramide tronquée à base rectangulaire.` },
    { t: `Pyramide`, d: `Tombe monumentale des pharaons, à base carrée et faces triangulaires.` },
    { t: `Salle hypostyle`, d: `Salle du temple égyptien aux rangées serrées de colonnes.` },
    { t: `Naos`, d: `Chambre du temple où se trouve la statue du dieu.` },
    { t: `Loi de frontalité`, d: `Convention égyptienne : tête de profil, œil et torse de face, jambes de profil.` },
    { t: `Hiéroglyphes`, d: `Écriture égyptienne faite de signes-images et de signes-sons.` },
    { t: `Registre`, d: `Bande horizontale dans laquelle se déroule une scène.` },
    { t: `Trilithique`, d: `Système de construction fait de piliers et d'une architrave.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Qu'est-ce qu'une ziggourat ?`, options: [`Une tombe égyptienne`, `Une tour à degrés mésopotamienne surmontée d'un sanctuaire`, `Un palais crétois`], answer: 1, explain: `C'était la maison terrestre du dieu, en briques.` },
      { type: `mc`, q: `Où se trouve la porte d'Ishtar reconstituée ?`, options: [`Au Louvre`, `Au Pergamonmuseum de Berlin`, `Au musée du Caire`], answer: 1, explain: `Elle a été apportée à Berlin après les fouilles allemandes de Koldewey (1899-1917).` },
      { type: `tf`, q: `La stèle d'Hammurabi contient environ 282 lois.`, answer: true, explain: `Elles sont gravées en cunéiforme sur du basalte noir.` },
      { type: `order`, q: `Remets dans l'ordre chronologique.`, items: [`Pyramide de Djéser`, `Pyramide de Khéops`, `Stèle d'Hammurabi`, `Masque de Toutânkhamon`, `Porte d'Ishtar`], explain: `Djéser (vers 2650), Khéops (vers 2560), Hammurabi (vers 1750), Toutânkhamon (vers 1323), porte d'Ishtar (vers 575 av. J.-C.).` },
      { type: `num`, q: `Quelle était la hauteur d'origine de la pyramide de Khéops (en mètres, arrondie à l'unité) ?`, answer: 147, tol: 1, unit: `m`, explain: `146,6 m à l'origine, environ 138 m aujourd'hui car elle a perdu son parement et son sommet.` },
      { type: `mc`, q: `Quel pharaon a changé la religion et le style artistique (Amarna) ?`, options: [`Akhenaton`, `Ramsès II`, `Khéops`], answer: 0, explain: `Akhenaton a imposé le culte d'Aton et un style plus naturaliste.` },
      { type: `text`, q: `Comment appelle-t-on la tombe égyptienne en forme de pyramide tronquée à base rectangulaire, antérieure aux pyramides ?`, answer: [`mastaba`, `le mastaba`, `un mastaba`], explain: `Le mastaba (de l'arabe « banc »).` },
      { type: `mc`, q: `Qui a déchiffré les hiéroglyphes en 1822 ?`, options: [`Champollion`, `Carter`, `Hammurabi`], answer: 0, explain: `Jean-François Champollion, grâce à la pierre de Rosette.` },
      { type: `tf`, q: `Les pyramides ont été construites par des esclaves enchaînés.`, answer: false, explain: `Les fouilles montrent des ouvriers payés et nourris, qui avaient leurs propres tombes.` },
      { type: `mc`, q: `Dans un temple égyptien, quelle partie est la plus sacrée et la plus sombre ?`, options: [`L'allée de sphinx`, `La cour`, `Le naos`], answer: 2, explain: `Le naos abrite la statue du dieu, accessible seulement aux prêtres et au pharaon.` }
    ]
  }
});
