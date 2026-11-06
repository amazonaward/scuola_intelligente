TOPIC('fr', {
  id: 'p3-geo-mare-coste',
  title: `La mer et les côtes`,
  intro: `Là où la terre rencontre la mer naissent beaucoup de formes différentes : îles, golfes, presqu'îles, détroits… Leurs noms sont un peu difficiles, mais aujourd'hui on apprend à les reconnaître <b>en faisant tourner un paysage en 3D</b> et en les cherchant sur la carte de l'Italie et du monde.`,
  minutes: 30,
  sections: [
    {
      type: 'text', title: `Qu'est-ce que la côte ?`,
      html: `<p>La <b>côte</b> est la bande de terre qui touche la mer. La ligne exacte où l'eau rencontre la terre s'appelle le <b>trait de côte</b>.</p>
<ul>
<li><b>Côte haute</b> (rocheuse) : la terre se termine par des parois raides, les <b>falaises</b>. La mer est tout de suite profonde. Exemple : les Cinque Terre en Ligurie, la côte amalfitaine.</li>
<li><b>Côte basse</b> (sableuse) : la terre descend tout doucement dans la mer et forme de longues <b>plages</b>. Exemple : la côte de Romagne.</li>
</ul>
<p>La mer travaille sans arrêt sur la côte : les <b>vagues</b> usent les roches (érosion) et transportent le sable d'un endroit à un autre (dépôt).</p>`
    },
    {
      type: '3d', title: `Le paysage de la côte en 3D`,
      scene: 'terrain',
      caption: `Fais tourner le paysage et touche chaque étiquette : la partie s'illumine. Essaie de les trouver toutes les 13 !`,
      options: {
        features: {
          sea: { label: `Mer`, html: `Grande étendue d'eau salée. L'Italie est baignée par la mer Méditerranée.` },
          coast: { label: `Côte`, html: `La bande de terre qui borde la mer. Elle peut être <b>haute</b> (falaises) ou <b>basse</b> (plages).` },
          beach: { label: `Plage`, html: `Partie de côte basse couverte de sable ou de galets, apportés par les vagues et les fleuves.` },
          island: { label: `Île`, html: `Terre entourée d'eau <b>de tous les côtés</b>. La plus grande d'Italie (et de la Méditerranée) est la <b>Sicile</b>.` },
          archipelago: { label: `Archipel`, html: `Un <b>groupe d'îles</b> proches les unes des autres. Exemples : les <b>îles Éoliennes</b>, l'archipel toscan, la Maddalena.` },
          peninsula: { label: `Presqu'île (péninsule)`, html: `Terre entourée d'eau <b>sur trois côtés</b> et reliée au continent par le quatrième. L'<b>Italie</b> est une péninsule en forme de botte !` },
          cape: { label: `Cap (promontoire)`, html: `Une pointe de terre qui avance dans la mer. Si elle est haute et rocheuse, on l'appelle aussi <b>promontoire</b>, comme le Gargano (l'« éperon » de la botte).` },
          gulf: { label: `Golfe`, html: `Un <b>grand</b> creux de la côte : la mer entre dans la terre en formant une large courbe. Exemple : le <b>golfe de Naples</b>.` },
          bay: { label: `Baie`, html: `Un creux <b>petit</b>, comme un golfe en miniature, souvent abrité du vent : idéal pour les bateaux.` },
          isthmus: { label: `Isthme`, html: `Une <b>bande étroite de terre</b> qui relie deux terres plus grandes et sépare deux mers. Exemples : l'isthme de <b>Corinthe</b> en Grèce, l'isthme de <b>Panama</b>.` },
          strait: { label: `Détroit`, html: `Un <b>passage étroit de mer</b> entre deux terres, qui relie deux mers. Le contraire de l'isthme ! Exemple : le <b>détroit de Messine</b> entre la Sicile et la Calabre.` },
          lagoon: { label: `Lagune`, html: `Une étendue d'eau salée peu profonde, séparée de la mer par des bandes de sable (lidos). Exemple : la <b>lagune de Venise</b>.` },
          delta: { label: `Delta`, html: `L'embouchure d'un fleuve qui se divise en plusieurs bras, en forme de triangle, parce que le fleuve dépose beaucoup de débris. Le nom vient de la lettre grecque Δ. Exemple : le <b>delta du Pô</b>.` }
        }
      }
    },
    {
      type: 'svg', title: `Île, presqu'île, isthme, détroit : les différences`,
      caption: `Regarde bien où il y a de l'eau (bleu clair) et où il y a de la terre (vert).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#7dd3fc"/>
<g>
<ellipse cx="80" cy="120" rx="50" ry="35" fill="#4ade80" stroke="#166534" stroke-width="2"/>
<text x="80" y="200" font-size="17" text-anchor="middle" fill="#0c4a6e" font-weight="bold">ÎLE</text>
<text x="80" y="222" font-size="13" text-anchor="middle" fill="#0c4a6e">eau tout autour</text>
</g>
<g>
<rect x="160" y="20" width="130" height="50" fill="#4ade80"/>
<path d="M200,70 L250,70 L240,150 L210,150 Z" fill="#4ade80" stroke="#166534" stroke-width="2"/>
<text x="225" y="200" font-size="17" text-anchor="middle" fill="#0c4a6e" font-weight="bold">PRESQU'ÎLE</text>
<text x="225" y="222" font-size="13" text-anchor="middle" fill="#0c4a6e">eau sur 3 côtés</text>
</g>
<g>
<circle cx="345" cy="70" r="35" fill="#4ade80"/>
<rect x="337" y="100" width="16" height="45" fill="#4ade80" stroke="#166534" stroke-width="2"/>
<circle cx="345" cy="170" r="30" fill="#4ade80"/>
<text x="345" y="235" font-size="17" text-anchor="middle" fill="#0c4a6e" font-weight="bold">ISTHME</text>
<text x="345" y="257" font-size="13" text-anchor="middle" fill="#0c4a6e">terre étroite entre deux mers</text>
</g>
<g>
<rect x="430" y="40" width="65" height="130" fill="#4ade80"/>
<rect x="520" y="40" width="65" height="130" fill="#4ade80"/>
<rect x="495" y="40" width="25" height="130" fill="#0284c7"/>
<text x="508" y="200" font-size="17" text-anchor="middle" fill="#0c4a6e" font-weight="bold">DÉTROIT</text>
<text x="508" y="222" font-size="13" text-anchor="middle" fill="#0c4a6e">mer étroite entre deux terres</text>
</g>
</svg>`
    },
    {
      type: 'remember', title: `Des paires de « contraires »`,
      html: `<ul>
<li><b>Isthme ↔ Détroit</b> : l'isthme est de la terre étroite entre deux eaux ; le détroit est de l'eau étroite entre deux terres.</li>
<li><b>Cap ↔ Golfe</b> : le cap est de la terre qui avance dans la mer ; le golfe est de la mer qui entre dans la terre.</li>
<li><b>Île ↔ Lac</b> : l'île est de la terre entourée d'eau ; le lac est de l'eau entourée de terre.</li>
</ul>`
    },
    {
      type: 'example', title: `Exemple pratique : l'Italie est un catalogue de formes !`,
      html: `<p>Prends une carte de l'Italie et cherche :</p>
<ul>
<li>La <b>péninsule</b> : toute l'Italie en forme de botte.</li>
<li>Les grandes <b>îles</b> : la <b>Sicile</b> et la <b>Sardaigne</b>.</li>
<li>Un <b>archipel</b> : les <b>Éoliennes</b> (Lipari, Vulcano, Stromboli, Salina, Panarea, Filicudi, Alicudi).</li>
<li>Un <b>golfe</b> : le golfe de Naples, le golfe de Tarente (sous la botte).</li>
<li>Un <b>promontoire</b> : le Gargano, l'« éperon ».</li>
<li>Un <b>détroit</b> : le détroit de Messine, large d'environ 3 km seulement à l'endroit le plus étroit.</li>
<li>Une <b>lagune</b> : la lagune de Venise. Un <b>delta</b> : le delta du Pô.</li>
</ul>`
    },
    {
      type: '3d', title: `Trouve les vrais exemples sur le globe`,
      scene: 'globe',
      caption: `Fais tourner le globe : les points orange sont de vrais exemples d'îles, de détroits, d'isthmes, de golfes, de lagunes et de deltas.`,
      options: {
        points: [
          { lat: 37.6, lon: 14.0, label: `Sicile (île)` },
          { lat: 38.5, lon: 14.95, label: `Éoliennes (archipel)` },
          { lat: 42.5, lon: 12.8, label: `Péninsule italienne` },
          { lat: 40.75, lon: 14.2, label: `Golfe de Naples` },
          { lat: 38.2, lon: 15.6, label: `Détroit de Messine` },
          { lat: 41.8, lon: 15.95, label: `Gargano (promontoire)` },
          { lat: 45.4, lon: 12.33, label: `Lagune de Venise` },
          { lat: 44.95, lon: 12.45, label: `Delta du Pô` },
          { lat: 37.93, lon: 22.98, label: `Isthme de Corinthe` },
          { lat: 9.1, lon: -79.7, label: `Isthme de Panama` },
          { lat: 35.95, lon: -5.6, label: `Détroit de Gibraltar` }
        ]
      }
    },
    {
      type: 'quiz', title: `Mini-quiz : île ou presqu'île ?`,
      questions: [
        { type: 'mc', q: `Une terre entourée d'eau de tous les côtés est…`, options: [`une presqu'île`, `une île`, `un isthme`], answer: 1, explain: `L'île a de l'eau tout autour.` },
        { type: 'mc', q: `Un groupe d'îles proches s'appelle…`, options: [`un archipel`, `un golfe`, `un delta`], answer: 0, explain: `Un archipel, comme les Éoliennes.` },
        { type: 'tf', q: `L'Italie est une péninsule.`, answer: true, explain: `Elle est entourée par la mer sur trois côtés et reliée à l'Europe au nord.` }
      ]
    },
    {
      type: 'widget', title: `Jeu : associe la forme à sa définition`,
      widget: 'match',
      options: {
        pairs: [
          [`Île`, `Terre avec de l'eau tout autour`],
          [`Presqu'île`, `Terre avec de l'eau sur trois côtés`],
          [`Isthme`, `Bande de terre entre deux mers`],
          [`Détroit`, `Bras de mer entre deux terres`],
          [`Golfe`, `Grand creux de mer dans la côte`],
          [`Cap`, `Pointe de terre dans la mer`],
          [`Lagune`, `Eau peu profonde séparée de la mer par des lidos`],
          [`Delta`, `Embouchure d'un fleuve à plusieurs bras`]
        ]
      }
    },
    {
      type: 'widget', title: `Jeu : terre ou eau ?`,
      widget: 'classify',
      caption: `Certaines formes sont des « morceaux de terre », d'autres des « morceaux d'eau ». Range-les dans le bon groupe.`,
      options: {
        groups: [`🟩 C'est de la terre`, `🟦 C'est de l'eau`],
        items: [
          [`île`, 0], [`presqu'île`, 0], [`isthme`, 0], [`cap`, 0], [`promontoire`, 0],
          [`détroit`, 1], [`golfe`, 1], [`baie`, 1], [`lagune`, 1], [`lac`, 1]
        ]
      }
    },
    {
      type: 'curiosity', title: `Le savais-tu ? À Venise, les maisons reposent sur des millions de pieux !`,
      html: `<p>Venise est construite sur plus de 100 petites îles dans la <b>lagune</b>. Le sol est de la boue molle, alors les Vénitiens ont planté dans le fond <b>des millions de pieux en bois</b>, les uns à côté des autres, et ils ont construit les maisons dessus. Sous l'eau, sans air, le bois ne pourrit pas : certains pieux sont là depuis plus de mille ans !</p>`
    },
    {
      type: 'curiosity', title: `Le savais-tu ? Les Éoliennes sont des volcans !`,
      html: `<p>Les îles de l'archipel des <b>Éoliennes</b> sont les sommets de volcans qui sortent de la mer. Le <b>Stromboli</b> est actif depuis des milliers d'années et lance des lapilli toutes les quelques minutes : les marins de l'Antiquité l'appelaient « le phare de la Méditerranée », parce que la nuit on le voyait briller de loin.</p>`
    },
    {
      type: 'alternatives', title: `D'autres façons de comprendre`,
      intro: `Si tu mélanges tous ces mots, essaie ces astuces.`,
      tabs: [
        {
          label: `🛁 Dans la baignoire`,
          html: `<p>Remplis un peu la baignoire (ou une bassine) et mets dedans différents objets :</p>
<ul>
<li>Une <b>éponge</b> qui flotte loin des bords : c'est une <b>île</b>.</li>
<li>Plein de petites éponges proches : un <b>archipel</b>.</li>
<li>Ton <b>bras</b> posé sur le bord qui entre dans l'eau : une <b>presqu'île</b> ; le bout des doigts, c'est le <b>cap</b>.</li>
<li>L'espace d'eau entre deux doigts écartés : un <b>détroit</b>.</li>
</ul>`
        },
        {
          label: `🔤 À partir des mots`,
          html: `<p>Beaucoup de noms viennent du latin et du grec et contiennent déjà l'explication :</p>
<ul>
<li><b>Péninsule</b> = du latin <i>paene insula</i>, « <b>presque</b> une île » (comme presqu'île !).</li>
<li><b>Archipel</b> = du grec, « mer principale » : c'était le nom de la mer Égée, pleine d'îles.</li>
<li><b>Delta</b> = la lettre grecque <b>Δ</b>, un triangle, comme la forme de l'embouchure.</li>
<li><b>Cap</b> = « tête » : la tête de la terre qui avance dans la mer.</li>
</ul>`
        },
        {
          label: `🗺️ Le dessin vu d'en haut`,
          html: `<p>Dessine vu d'en haut avec deux couleurs : en <b>vert</b> la terre, en <b>bleu</b> l'eau. Puis demande-toi : <i>qui entoure qui ?</i></p>
<ul>
<li>Du vert entouré de bleu → île.</li>
<li>Du bleu entouré de vert → lac.</li>
<li>Une fine bande verte → isthme. Une fine bande bleue → détroit.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="290" height="220" fill="#7dd3fc"/>
<ellipse cx="145" cy="105" rx="80" ry="55" fill="#4ade80"/>
<text x="145" y="112" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">ÎLE</text>
<rect x="310" y="0" width="290" height="220" fill="#4ade80"/>
<ellipse cx="455" cy="105" rx="80" ry="55" fill="#38bdf8"/>
<text x="455" y="112" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">LAC</text>
</svg>`
        }
      ]
    },
    {
      type: 'conceptMap', title: `Carte : comment naissent les formes de la côte`,
      nodes: [
        { id: 'mare', label: `Mer et terre`, x: 50, y: 8, color: '#0ea5e9', html: `Là où elles se rencontrent naissent les formes de la côte.`, why: `Le trait de côte ne reste jamais immobile : la mer l'use ou l'allonge, le niveau de la mer monte et descend, les fleuves apportent des débris. Les formes que nous voyons sont une « photographie » de ce travail continu.` },
        { id: 'onde', label: `Érosion des vagues`, x: 18, y: 35, color: '#ef4444', html: `Les vagues usent les roches.`, why: `Chaque vague frappe la roche avec force et lance du sable et des cailloux comme de petits marteaux. Les roches tendres s'usent avant les dures : c'est ainsi que naissent les golfes (là où la roche était tendre) et les caps (là où elle était dure).` },
        { id: 'deposito', label: `Dépôt de sable`, x: 50, y: 35, color: '#eab308', html: `Les fleuves et les courants apportent et laissent du sable.`, why: `Quand l'eau ralentit, elle n'arrive plus à transporter le sable et le laisse tomber. C'est ainsi que se forment les plages, les lidos, les lagunes et les deltas.` },
        { id: 'livello', label: `Niveau de la mer et volcans`, x: 82, y: 35, color: '#a855f7', html: `La mer monte et descend, les volcans créent de nouvelles terres.`, why: `Pendant la dernière glaciation (il y a environ 20 000 ans), la mer était plus basse de plus de 100 mètres : beaucoup d'îles d'aujourd'hui étaient des collines reliées au continent. Quand les glaces ont fondu, la mer est montée et les a entourées.` },
        { id: 'golfo', label: `Golfes et caps`, x: 12, y: 68, color: '#f97316', html: `Des creux et des pointes de terre.`, why: `Ils naissent d'une érosion inégale : les roches tendres reculent (golfe), les dures résistent et avancent (cap).` },
        { id: 'spiaggia', label: `Plages et lagunes`, x: 40, y: 68, color: '#facc15', html: `Des côtes basses et sableuses.`, why: `Le sable déposé forme de longs lidos ; si un lido ferme un morceau de mer, une lagune se forme derrière, comme à Venise.` },
        { id: 'delta', label: `Delta`, x: 62, y: 88, color: '#22c55e', html: `Embouchure à plusieurs bras.`, why: `Il se forme quand le fleuve apporte plus de débris que la mer ne peut en emporter : l'embouchure avance et le fleuve se divise en bras.` },
        { id: 'isola', label: `Îles et archipels`, x: 85, y: 68, color: '#16a34a', html: `Des terres entourées par la mer.`, why: `Elles peuvent être des morceaux de continent séparés par la mer qui monte (comme la Sardaigne), ou des sommets de volcans nés au fond de la mer (comme les Éoliennes).` }
      ],
      edges: [
        ['mare', 'onde', 'use'], ['mare', 'deposito', 'apporte'], ['mare', 'livello', 'change'],
        ['onde', 'golfo', 'creuse'], ['deposito', 'spiaggia', 'forme'], ['deposito', 'delta', 'forme'], ['livello', 'isola', 'sépare / crée']
      ]
    },
    {
      type: 'example', title: `Exemple pratique : pourquoi les navires passent-ils par les détroits et les canaux ?`,
      html: `<p>Un navire qui va de Gênes à Venise pourrait faire le tour de la Sicile, mais en passant par le <b>détroit de Messine</b>, il économise beaucoup de kilomètres.</p>
<p>Parfois, l'homme a même <b>coupé un isthme</b> pour creuser un canal : le <b>canal de Corinthe</b> (1893) coupe l'isthme de Corinthe, et le <b>canal de Panama</b> (1914) relie l'océan Atlantique et le Pacifique. Avant, les navires devaient faire le tour de toute l'Amérique du Sud !</p>`
    },
    {
      type: 'quiz', title: `Mini-quiz : les formes de l'eau`,
      questions: [
        { type: 'mc', q: `Le détroit de Messine sépare…`, options: [`la Sardaigne et la Corse`, `la Sicile et la Calabre`, `l'Italie et la Grèce`], answer: 1, explain: `Il sépare la Sicile de la Calabre et relie la mer Tyrrhénienne à la mer Ionienne.` },
        { type: 'mc', q: `Un petit creux de côte abrité est…`, options: [`une baie`, `un cap`, `un isthme`], answer: 0, explain: `La baie est comme un petit golfe.` },
        { type: 'tf', q: `Le delta tient son nom d'une lettre grecque.`, answer: true, explain: `La lettre Δ, en forme de triangle.` }
      ]
    }
  ],
  glossary: [
    { t: `Côte`, d: `Bande de terre qui borde la mer ; elle peut être haute ou basse.` },
    { t: `Île`, d: `Terre entourée d'eau de tous les côtés.` },
    { t: `Archipel`, d: `Groupe d'îles proches.` },
    { t: `Presqu'île / péninsule`, d: `Terre entourée d'eau sur trois côtés.` },
    { t: `Cap / promontoire`, d: `Pointe de terre qui avance dans la mer (le promontoire est haut).` },
    { t: `Golfe`, d: `Large creux de la côte où la mer entre dans la terre.` },
    { t: `Baie`, d: `Petit creux de côte abrité.` },
    { t: `Isthme`, d: `Bande étroite de terre qui relie deux terres et sépare deux mers.` },
    { t: `Détroit`, d: `Bras de mer étroit qui sépare deux terres et relie deux mers.` },
    { t: `Lagune`, d: `Eau salée peu profonde séparée de la mer par des cordons de sable.` },
    { t: `Delta`, d: `Embouchure d'un fleuve divisée en plusieurs bras en forme de triangle.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: 'mc', q: `Une terre entourée d'eau sur trois côtés est…`, options: [`une île`, `une presqu'île`, `un golfe`], answer: 1, explain: `Presqu'île = « presque une île ».` },
      { type: 'mc', q: `Quelle est la plus grande île de la Méditerranée ?`, options: [`la Sardaigne`, `la Sicile`, `la Corse`], answer: 1, explain: `La Sicile, environ 25 700 km².` },
      { type: 'mc', q: `La bande de terre qui relie deux terres et sépare deux mers est…`, options: [`un détroit`, `un isthme`, `une lagune`], answer: 1, explain: `L'isthme, comme celui de Panama.` },
      { type: 'tf', q: `Un détroit est un passage de mer entre deux terres.`, answer: true, explain: `Exemple : le détroit de Messine, le détroit de Gibraltar.` },
      { type: 'text', q: `Comment s'appelle un groupe d'îles proches ?`, answer: [`archipel`, `un archipel`], explain: `Un archipel, comme les Éoliennes.` },
      { type: 'mc', q: `Une côte avec des falaises raides est…`, options: [`une côte haute`, `une côte basse`, `un delta`], answer: 0, explain: `La côte haute est rocheuse et raide.` },
      { type: 'mc', q: `Venise se trouve dans…`, options: [`un delta`, `une lagune`, `un détroit`], answer: 1, explain: `La lagune de Venise, séparée de la mer par des lidos de sable.` },
      { type: 'mc', q: `Le Gargano est…`, options: [`un promontoire`, `un archipel`, `une lagune`], answer: 0, explain: `C'est l'« éperon » de la botte : un promontoire.` },
      { type: 'tf', q: `Le golfe est de la terre qui avance dans la mer.`, answer: false, explain: `C'est le contraire : le golfe est de la mer qui entre dans la terre. La terre qui avance dans la mer, c'est le cap.` },
      { type: 'mc', q: `Le delta du Pô se trouve sur la mer…`, options: [`Tyrrhénienne`, `Adriatique`, `Ionienne`], answer: 1, explain: `Le Pô se jette dans l'Adriatique, entre la Vénétie et l'Émilie-Romagne.` },
      { type: 'mc', q: `Pourquoi un delta se forme-t-il ?`, options: [`Parce que le fleuve dépose beaucoup de débris à son embouchure`, `Parce que les vagues creusent la roche`, `Parce qu'il y a un volcan`], answer: 0, explain: `Les débris s'accumulent et le fleuve se divise en plusieurs bras.` }
    ]
  }
});
