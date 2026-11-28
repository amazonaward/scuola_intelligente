TOPIC('fr', {
  id: "l1-sci-idrosfera",
  title: "L'hydrosphère",
  intro: "Vue de l'espace, notre planète est bleue : environ <b>71 %</b> de sa surface est couverte d'eau. L'<b>hydrosphère</b> est l'ensemble de toute l'eau de la Terre, à l'état liquide, solide et gazeux : océans, mers, lacs, fleuves, nappes souterraines, glaciers et vapeur dans l'air. C'est le milieu où la vie est née, et elle régule le climat. Dans cette leçon, nous suivons les gouttes le long du <b>cycle de l'eau</b> et nous étudions les océans, les courants, les fleuves, les lacs et les glaciers.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Combien d'eau y a-t-il, et où ?",
      html: `<p>Le volume total d'eau sur Terre est d'environ <b>1,4 milliard de km³</b>. Mais presque toute cette eau est impropre à la consommation :</p>
<table>
<tr><th>Où</th><th>Pourcentage de l'eau totale</th></tr>
<tr><td>Océans et mers (eau salée)</td><td>environ <b>97,5 %</b></td></tr>
<tr><td>Eau douce</td><td>environ <b>2,5 %</b></td></tr>
</table>
<p>Et pour l'eau douce :</p>
<ul>
<li>environ <b>69 %</b> est bloquée dans les <b>glaciers et les calottes polaires</b> ;</li>
<li>environ <b>30 %</b> est de l'<b>eau souterraine</b> (nappes) ;</li>
<li>moins de <b>1 %</b> se trouve dans les lacs, les fleuves, le sol et l'atmosphère : c'est-à-dire qu'environ 0,01 % de l'eau totale est facilement accessible.</li>
</ul>
<p>Si toute l'eau de la Terre était rassemblée en une sphère, celle-ci aurait un diamètre d'environ 1400 km : la taille d'une lune comme Europe.</p>
<p>Les <b>eaux salées</b> contiennent des sels (surtout du chlorure de sodium, environ 85 %), en moyenne <b>35 g par kg</b>, soit une <b>salinité</b> de 35 ‰. La salinité varie : plus faible là où arrivent beaucoup de fleuves ou là où il pleut beaucoup (mer Baltique : 5-10 ‰), plus forte là où l'évaporation est intense (mer Rouge : 40 ‰ ; mer Morte : environ 300 ‰, un lac salé).</p>`
    },
    {
      type: "widget",
      title: "Eau douce ou eau salée ?",
      widget: "classify",
      options: { groups: ["Eau salée", "Eau douce"], items: [
        ["Océan Pacifique", 0],
        ["Mer Méditerranée", 0],
        ["Lac de Garde", 1],
        ["Fleuve Pô", 1],
        ["Glacier d'Aletsch", 1],
        ["Mer Rouge", 0],
        ["Nappe phréatique", 1],
        ["Mer Morte", 0],
        ["Banquise antarctique", 1],
        ["Lac de Bolsena", 1]
      ] },
      caption: "La mer Morte et la mer Caspienne portent un nom « de mer » mais sont en réalité des lacs (la Caspienne est saumâtre). Remarque que la glace, sur les terres émergées, est de l'eau douce."
    },
    {
      type: "text",
      title: "Le cycle de l'eau",
      html: `<p>L'eau n'est jamais immobile : le <b>cycle hydrologique</b> la fait circuler entre les océans, l'atmosphère et les terres émergées, grâce à l'énergie du Soleil et à la gravité. Les étapes :</p>
<ol>
<li><b>Évaporation</b> : le Soleil chauffe l'eau des mers, des lacs et du sol ; environ 86 % de l'évaporation provient des océans.</li>
<li><b>Transpiration</b> des plantes (qui, avec l'évaporation, forme l'<b>évapotranspiration</b>).</li>
<li><b>Condensation</b> : en montant, la vapeur se refroidit et se condense en gouttelettes : les nuages.</li>
<li><b>Précipitations</b> : pluie, neige, grêle.</li>
<li><b>Ruissellement</b> (eau qui s'écoule en surface vers les fleuves et les mers), <b>infiltration</b> (eau qui pénètre dans le sol et alimente les nappes) et <b>fonte</b> de la neige et de la glace.</li>
</ol>
<p>Une idée importante : l'eau présente sur la planète est pratiquement toujours la même. L'eau que tu bois aujourd'hui a pu se trouver dans un océan, dans un nuage, dans un glacier, dans le corps d'un dinosaure. Les molécules sont « recyclées » depuis des milliards d'années. Le <b>temps de résidence</b> varie énormément : environ 9 jours seulement dans l'atmosphère, quelques semaines dans les fleuves, environ 3000 ans dans les océans, des dizaines de milliers d'années dans les glaciers de l'Antarctique.</p>`
    },
    {
      type: "svg",
      title: "Le cycle de l'eau",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#e0f2fe"/>
<circle cx="560" cy="45" r="28" fill="#facc15"/>
<path d="M0 230 L120 190 L200 215 L300 140 L400 205 L640 205 L640 320 L0 320 Z" fill="#a3a38a"/>
<path d="M300 140 L275 168 L300 160 L325 170 Z" fill="#fff"/>
<rect x="0" y="260" width="640" height="60" fill="#38bdf8"/>
<ellipse cx="190" cy="70" rx="60" ry="26" fill="#f1f5f9" stroke="#94a3b8"/><ellipse cx="230" cy="64" rx="45" ry="22" fill="#f1f5f9" stroke="#94a3b8"/>
<g stroke="#1d4ed8" stroke-width="3"><line x1="180" y1="100" x2="170" y2="130"/><line x1="200" y1="100" x2="190" y2="130"/><line x1="220" y1="100" x2="210" y2="130"/></g>
<g stroke="#dc2626" stroke-width="3" fill="none"><path d="M480 255 C480 200 480 150 440 100"/><path d="M520 255 C530 210 530 160 500 110"/></g>
<text x="500" y="285" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">évaporation</text>
<text x="135" y="160" font-size="14" fill="#1e3a8a" text-anchor="middle" font-weight="bold">précipitations</text>
<text x="230" y="30" font-size="14" fill="#334155" text-anchor="middle" font-weight="bold">condensation (nuages)</text>
<text x="350" y="125" font-size="14" fill="#334155" font-weight="bold">neige et glaciers</text>
<path d="M240 218 C210 232 170 250 150 262" fill="none" stroke="#1d4ed8" stroke-width="4"/>
<text x="190" y="248" font-size="14" fill="#1e3a8a" font-weight="bold">fleuve</text>
<g stroke="#334155" stroke-width="2" stroke-dasharray="4 4"><line x1="90" y1="215" x2="90" y2="250"/><line x1="70" y1="215" x2="70" y2="250"/></g>
<text x="75" y="305" font-size="14" fill="#fff" font-weight="bold">infiltration et nappe</text>
<text x="440" y="305" font-size="16" fill="#fff" font-weight="bold">OCÉAN</text>
</svg>`,
      caption: "Le cycle est alimenté par le Soleil (qui fait évaporer l'eau) et par la gravité (qui la fait retomber et s'écouler)."
    },
    {
      type: "example",
      title: "Combien d'eau tombe-t-il ? Le bilan hydrique",
      html: `<p>Une pluie de <b>1 mm</b> équivaut à <b>1 litre d'eau par m²</b>. Si, lors d'une journée orageuse, il tombe 50 mm sur un bassin de <b>20 km²</b>, quelle quantité d'eau arrive ?</p>
<ol>
<li>20 km² = 20 000 000 m².</li>
<li>50 mm = 50 L/m² → 50 × 20 000 000 = <b>1 000 000 000 L</b> = 10⁹ L = <b>1 million de m³</b>.</li>
</ol>
<p>Une piscine olympique contient 2500 m³ : cela fait environ <b>400 piscines olympiques</b>. Un bilan hydrique compare les précipitations (P), l'évapotranspiration (E) et l'écoulement (D) : dans un bassin stable, P ≈ E + D. Si les prélèvements dépassent la recharge, le niveau des nappes baisse.</p>`
    },
    {
      type: "example",
      title: "Combien de sel y a-t-il dans un bac d'eau de mer ?",
      html: `<p>L'eau de mer a une masse volumique moyenne d'environ <b>1,025 kg/L</b> et une salinité de <b>35 ‰</b>. Quelle masse de sel obtient-on en faisant évaporer <b>200 L</b> d'eau de mer ?</p>
<ol>
<li>Masse de l'eau : 200 L × 1,025 kg/L = 205 kg.</li>
<li>Masse des sels : 205 × 0,035 = <b>environ 7,2 kg</b>.</li>
</ol>
<p>Tous les sels ne sont pas du chlorure de sodium : dans les marais salants, on obtient d'abord du gypse puis le sel de cuisine (NaCl), en laissant des « eaux mères » riches en magnésium et en potassium.</p>`
    },
    {
      type: "text",
      title: "Océans et mers",
      html: `<p>Les trois grands océans sont le <b>Pacifique</b> (environ 165 millions de km², près de la moitié de la surface océanique et plus que toutes les terres émergées réunies), l'<b>Atlantique</b> (environ 106 millions de km²) et l'<b>océan Indien</b> (environ 70 millions de km²) ; les océans <b>Arctique</b> et <b>Austral</b> (Antarctique) sont plus petits. En réalité, ils forment un seul océan mondial. La profondeur moyenne est d'environ <b>3700 m</b> ; la profondeur maximale se trouve dans la <b>fosse des Mariannes</b> (Challenger Deep), environ <b>10 900 m</b> : l'Everest (8849 m) y tiendrait avec plus de 2 km d'eau au-dessus du sommet.</p>
<p>Les <b>fonds océaniques</b> ont un relief varié : <b>plateau continental</b> (jusqu'à environ 200 m, riche en vie et en pêche), <b>talus continental</b>, <b>plaine abyssale</b>, <b>dorsales océaniques</b> (chaînes de montagnes sous-marines où naît une nouvelle croûte) et <b>fosses</b> (où la croûte plonge dans le manteau) : des sujets liés à la tectonique des plaques.</p>
<p>Une <b>mer</b> est une portion d'océan plus petite et délimitée par les terres (mer fermée comme la Méditerranée, qui ne communique avec l'océan que par le détroit de Gibraltar ; mer ouverte comme la mer des Caraïbes).</p>
<p>La température diminue avec la profondeur : la couche superficielle (environ 100-200 m), brassée par les vagues et le vent, est chaude ; sous la <b>thermocline</b>, la température chute rapidement ; au-delà de 1000 m, elle est presque constante, autour de 2-4 °C.</p>`
    },
    {
      type: "text",
      title: "Les mouvements de la mer : vagues, marées et courants",
      html: `<ul>
<li><b>Vagues</b> : elles sont causées par le vent. L'eau n'avance pas : les particules décrivent des cercles et c'est l'<b>énergie</b> qui se propage. Les vagues grandissent avec la vitesse du vent, sa durée et le <b>fetch</b> (longueur de mer sur laquelle souffle le vent). Les <b>tsunamis</b> sont des vagues très longues (jusqu'à 100-200 km entre deux crêtes) provoquées par des séismes sous-marins ou des glissements de terrain : en pleine mer, ils se propagent à environ 800 km/h avec une hauteur de moins d'un mètre, puis ralentissent et s'élèvent en approchant de la côte.</li>
<li><b>Marées</b> : deux marées hautes et deux marées basses toutes les 24 h 50 min environ, à cause de l'attraction gravitationnelle de la Lune et du Soleil.</li>
<li><b>Courants</b> : de grands fleuves à l'intérieur de la mer.
<ul>
<li><b>Courants de surface</b> : causés par les <b>vents dominants</b> et déviés par la <b>force de Coriolis</b> ; ils forment de grands tourbillons (<b>gyres</b>) qui tournent dans le sens des aiguilles d'une montre dans l'hémisphère Nord et en sens inverse dans l'hémisphère Sud. Exemple : le <b>Gulf Stream</b>, qui apporte de l'eau chaude du golfe du Mexique vers l'Europe du Nord et rend le climat des îles Britanniques plus doux que celui du Labrador à la même latitude.</li>
<li><b>Courants profonds</b> (<b>circulation thermohaline</b>) : dus aux différences de <b>température</b> et de <b>salinité</b>, c'est-à-dire de masse volumique. L'eau froide et salée près des pôles plonge et s'écoule le long du fond vers l'équateur : un « tapis roulant » mondial qui met environ 1000 ans à faire le tour complet.</li>
</ul></li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Les canards en plastique qui racontent les courants",
      html: `<p>En 1992, un cargo perdit dans le Pacifique un conteneur contenant 28 800 jouets de bain en plastique (canards, tortues, castors, grenouilles). En suivant les endroits où les jouets s'échouaient sur les plages de l'Alaska, du Japon et, des années plus tard, d'autres côtes de l'Atlantique Nord, les océanographes ont reconstitué les courants de surface et les tourbillons des gyres. Aujourd'hui encore, les grandes accumulations de déchets plastiques, comme le « vortex de déchets du Pacifique nord » (Great Pacific Garbage Patch), se forment justement là où les courants des gyres convergent et font stagner l'eau.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : eau et océans",
      questions: [
        { type: "mc", q: "Quel pourcentage de l'eau terrestre est de l'eau douce ?", options: ["environ 2,5 %", "environ 25 %", "environ 50 %"], answer: 0, explain: "97,5 % est salée, et de la petite partie douce, presque tout est dans les glaces." },
        { type: "tf", q: "Le Gulf Stream contribue à rendre plus doux le climat de l'Europe du Nord-Ouest.", answer: true, explain: "Il transporte de l'eau chaude des tropiques vers le nord." },
        { type: "num", q: "Une pluie de 25 mm apporte combien de litres d'eau sur un champ de 100 m² ?", answer: 2500, unit: "L", explain: "1 mm = 1 L/m² : 25 × 100 = 2500 L." }
      ]
    },
    {
      type: "text",
      title: "Fleuves et bassins versants",
      html: `<p>Un <b>cours d'eau</b> s'écoule dans un lit, de la <b>source</b> jusqu'à l'<b>embouchure</b>. Le territoire qui recueille toutes les eaux qui alimentent un fleuve est son <b>bassin versant</b>, séparé des bassins voisins par la <b>ligne de partage des eaux</b>. Le fleuve principal reçoit des <b>affluents</b> ; à la mer, il se termine par un <b>delta</b> (avec des bras et des terres déposées : le Pô, le Nil, le Mississippi) ou par un <b>estuaire</b> (embouchure en entonnoir ouverte sur la mer, où les marées sont fortes : la Tamise, la Seine).</p>
<p>Le parcours du fleuve se divise en trois parties :</p>
<ul>
<li><b>cours supérieur</b> (montagne) : forte pente, eau rapide qui <b>érode</b> et creuse des vallées en V ;</li>
<li><b>cours moyen</b> : pente plus faible, transport de débris ;</li>
<li><b>cours inférieur</b> (plaine) : il est lent, forme des <b>méandres</b> et <b>dépose</b> les sédiments (alluvions), jusqu'à l'embouchure.</li>
</ul>
<p>Le <b>débit</b> est le volume d'eau qui traverse une section en une seconde (m³/s). Le <b>régime</b> est l'évolution du débit au cours de l'année : <b>pluvial</b> (il dépend des pluies : Apennins), <b>nival</b> ou <b>glaciaire</b> (maximum au printemps-été grâce à la fonte de la neige et de la glace : Alpes), <b>mixte</b>.</p>
<p>Quelques chiffres : le <b>Pô</b> est le fleuve le plus long d'Italie (652 km) et celui qui a le plus d'eau (débit moyen à l'embouchure d'environ 1500 m³/s) ; le <b>Nil</b> (environ 6650 km) et l'<b>Amazone</b> (environ 6400 km) se disputent le record de longueur ; l'Amazone est le premier pour le débit (environ 200 000 m³/s, environ un cinquième de toute l'eau douce déversée par les fleuves dans les océans).</p>`
    },
    {
      type: "3d",
      title: "Le paysage de l'eau",
      scene: "terrain",
      options: { features: {
        glacier: { label: "Glacier", html: "<p>Une masse de glace qui descend lentement dans la vallée sous son propre poids. En fondant, elle alimente les fleuves et forme des lacs glaciaires.</p>" },
        source: { label: "Source", html: "<p>Le point où l'eau souterraine ou de fonte sort à la surface et où commence le cours d'eau.</p>" },
        river: { label: "Fleuve", html: "<p>Un cours d'eau qui s'écoule vers la mer ou vers un lac. Il érode en montagne et dépose en plaine.</p>" },
        valley: { label: "Vallée", html: "<p>Creusée par le cours d'eau (en V) ou par un glacier (en U).</p>" },
        lake: { label: "Lac", html: "<p>Une étendue d'eau douce ou salée entourée de terres. Il peut être glaciaire, volcanique, tectonique ou de barrage.</p>" },
        delta: { label: "Delta", html: "<p>Zone de l'embouchure où le fleuve dépose ses sédiments et se divise en plusieurs bras.</p>" },
        sea: { label: "Mer", html: "<p>Là où tout le cycle se termine... et recommence avec l'évaporation.</p>" },
        plain: { label: "Plaine", html: "<p>Formée par les sédiments du fleuve (plaine alluviale) : la plaine du Pô est la plus grande d'Italie.</p>" }
      } },
      caption: "Touche les parties du paysage : de la source au delta, suis le parcours de l'eau."
    },
    {
      type: "text",
      title: "Lacs, eaux souterraines et glaciers",
      html: `<p><b>Lacs</b> : des masses d'eau rassemblées dans une dépression. Selon leur origine :</p>
<ul>
<li><b>glaciaires</b> : creusés ou barrés par les glaciers (les grands lacs préalpins : lac Majeur, lac de Côme, lac de Garde ; les Grands Lacs américains) ;</li>
<li><b>tectoniques</b> : dans des dépressions dues aux mouvements de la croûte (le Baïkal, le plus profond, 1642 m, qui contient environ 20 % de l'eau douce de surface) ;</li>
<li><b>volcaniques</b> : dans des cratères (Bolsena, Albano, Bracciano : cratères et caldeiras d'anciens volcans) ;</li>
<li><b>de barrage</b> (glissements de terrain, barrages), <b>côtiers</b> (lagunes), <b>karstiques</b>.</li>
</ul>
<p>Le lac le plus étendu d'Italie est le <b>lac de Garde</b> (368 km²) ; le plus profond est le lac de Côme (environ 410 m).</p>
<p><b>Eaux souterraines</b> : l'eau qui s'infiltre remplit les pores des roches <b>perméables</b> (sables, graviers, calcaires fissurés) jusqu'à rencontrer une couche <b>imperméable</b> (argile) : elle forme une <b>nappe</b>. Si la nappe affleure, on a une <b>source</b> (dans la plaine du Pô, on les appelle <i>risorgive</i> ou <i>fontanili</i>). Les <b>puits</b> l'atteignent. Dans les régions calcaires, l'eau dissout la roche et crée le <b>karst</b> : grottes, dolines, rivières souterraines.</p>
<p><b>Glaciers</b> : de grandes masses de glace formées par la neige qui se tasse pendant des années ou des siècles. Les <b>calottes glaciaires</b> (Antarctique et Groenland) contiennent environ 99 % de la glace terrestre : si tout l'Antarctique fondait, le niveau de la mer monterait d'environ 58 m ; avec le Groenland, d'environ 7 m. Les <b>glaciers alpins</b> (de vallée) avancent de quelques mètres par an et sont considérés comme des sentinelles du climat : en 150 ans, les glaciers alpins ont perdu plus de la moitié de leur volume.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre l'hydrosphère",
      intro: "Si les chiffres de l'eau te semblent trop abstraits, essaie ces représentations.",
      tabs: [
        {
          label: "🥤 Un bidon d'eau",
          html: `<p>Imagine toute l'eau de la Terre dans un grand bidon de <b>100 litres</b>. Les océans occupent 97,5 L. Seuls 2,5 L sont de l'eau douce. Sur ces 2,5 L, près de 1,7 L sont dans les glaces et environ 0,75 L sous terre. Il reste environ <b>0,03 L : une cuillère à soupe</b> pour tous les fleuves, les lacs, le sol et l'humidité de l'air. Toute la vie d'eau douce de surface dépend de cette cuillère, que le cycle de l'eau renouvelle sans cesse.</p>`
        },
        {
          label: "🧂 Pourquoi la mer est-elle salée ?",
          html: `<p>Les fleuves dissolvent lentement les roches et apportent à la mer de petites quantités de sels minéraux ; les volcans sous-marins et les sources hydrothermales en ajoutent d'autres. L'eau s'évapore en laissant les sels : ceux-ci s'accumulent pendant des millions d'années. C'est pourquoi la mer est salée et pas les fleuves. La salinité de l'océan est pourtant restée à peu près constante pendant des centaines de millions d'années, car les sels sont aussi éliminés : déposés sur le fond sous forme de roches (évaporites) ou incorporés par les organismes.</p>`
        },
        {
          label: "🧊 Pourquoi la glace flotte-t-elle ?",
          html: `<p>L'eau est presque unique : à l'état liquide, quand elle se refroidit, elle se contracte jusqu'à <b>4 °C</b> (masse volumique maximale, 1,000 g/cm³), puis en dessous de 4 °C elle se dilate et, en gelant, devient environ 9 % moins dense (glace : 0,92 g/cm³). C'est à cause des <b>liaisons hydrogène</b> : dans la glace, les molécules forment une structure hexagonale avec beaucoup d'espace vide. C'est pourquoi la glace flotte, les lacs gèlent par la surface et, sous la croûte de glace, il reste de l'eau liquide à environ 4 °C où poissons et plantes survivent à l'hiver. Si la glace coulait, les lacs gèleraient par le fond et la vie serait très différente.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "La mer d'Aral : l'eau qui a disparu",
      html: `<p>La mer d'Aral, en Asie centrale, était en 1960 le quatrième lac du monde (environ 68 000 km²). Dans les années 1960, l'URSS détourna les fleuves Amou-Daria et Syr-Daria pour irriguer les champs de coton : le lac a perdu plus de 90 % de sa surface et sa partie sud est aujourd'hui un désert salé (l'Aralkoum). Des navires rouillés gisent dans le sable. C'est l'un des exemples les plus connus de la façon dont l'activité humaine peut modifier le bilan hydrique de toute une région, avec des conséquences sur le climat, la santé et la pêche.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte de l'hydrosphère : touche les nœuds et découvre pourquoi",
      nodes: [
        { id: "ciclo", label: "Cycle de l'eau", x: 50, y: 6, color: "#3b82f6", html: "Évaporation, condensation, précipitations, écoulement.", why: "Les Grecs avaient déjà l'intuition du cycle, mais pendant des siècles on pensa que les sources étaient alimentées par la mer à travers des canaux souterrains. Au XVIIe siècle, <b>Pierre Perrault</b> et <b>Edme Mariotte</b> mesurèrent la pluie et le débit de la Seine et démontrèrent que les précipitations suffisaient à alimenter les fleuves." },
        { id: "oceani", label: "Océans", x: 20, y: 30, color: "#0ea5e9", html: "97,5 % de l'eau, salinité moyenne 35 ‰.", why: "Ils ont une profondeur moyenne d'environ 3700 m : l'expédition du navire britannique <b>Challenger</b> (1872-76) fut la première campagne océanographique systématique et découvrit la fosse des Mariannes." },
        { id: "correnti", label: "Courants", x: 20, y: 56, color: "#22c55e", html: "De surface (vent) et profonds (thermohalins).", why: "Les courants de surface dépendent des vents et de l'effet Coriolis, décrit par <b>Coriolis</b> en 1835 ; la circulation thermohaline fut pressentie par <b>Benjamin Thompson (comte Rumford)</b> en 1797 et décrite par <b>Wallace Broecker</b>, qui forgea dans les années 1980 l'expression « tapis roulant »." },
        { id: "fiumi", label: "Fleuves et bassins", x: 80, y: 30, color: "#f59e0b", html: "Ils transportent l'eau des montagnes à la mer.", why: "La notion de bassin versant explique pourquoi les crues dépendent de ce qui se passe en amont : l'eau d'une vaste zone se concentre dans une seule section du fleuve." },
        { id: "laghi", label: "Lacs", x: 80, y: 56, color: "#a855f7", html: "Étendues d'eau, surtout douce.", why: "Leur origine géologique (glaciaire, tectonique, volcanique) les relie à l'histoire de la Terre : les lacs préalpins sont un héritage des glaciations du Quaternaire." },
        { id: "ghiacci", label: "Glaciers", x: 50, y: 70, color: "#06b6d4", html: "69 % de l'eau douce.", why: "Louis Agassiz (1837) proposa le premier que de grandes périodes glaciaires avaient recouvert l'Europe, ce qui expliquait les blocs erratiques éloignés de leurs roches d'origine. Aujourd'hui, les glaciers sont des archives : les bulles d'air des carottes de glace de l'Antarctique racontent le climat des 800 000 dernières années." },
        { id: "falde", label: "Nappes", x: 20, y: 86, color: "#ef4444", html: "Eau souterraine (30 % de l'eau douce).", why: "La loi de <b>Darcy</b> (1856), établie en étudiant les fontaines de Dijon, décrit comment l'eau se déplace dans un milieu poreux : vitesse proportionnelle à la pente et à la perméabilité." },
        { id: "uomo", label: "Usages humains", x: 80, y: 86, color: "#14b8a6", html: "Agriculture (environ 70 % des prélèvements), industrie, usages domestiques.", why: "Seule une petite partie de l'eau est accessible : la gestion durable de la ressource est l'un des grands défis du siècle ; la mer d'Aral en est un exemple négatif." }
      ],
      edges: [
        ["ciclo", "oceani", "depuis l'océan"],
        ["ciclo", "fiumi", "alimente"],
        ["oceani", "correnti", "abritent"],
        ["fiumi", "laghi", "alimentent"],
        ["ghiacci", "fiumi", "alimentent"],
        ["ciclo", "falde", "recharge"],
        ["falde", "uomo", "utilisées par"],
        ["fiumi", "uomo", "utilisés par"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : fleuves, lacs, glaciers",
      questions: [
        { type: "mc", q: "Quel est le fleuve le plus long d'Italie ?", options: ["Tibre", "Pô", "Adige"], answer: 1, explain: "Le Pô mesure 652 km et a aussi le plus grand débit." },
        { type: "tf", q: "La glace flotte parce qu'elle est moins dense que l'eau liquide.", answer: true, explain: "Glace : 0,92 g/cm³, contre 1,00 g/cm³ pour l'eau." },
        { type: "mc", q: "Comment s'appelle le territoire qui recueille les eaux d'un fleuve ?", options: ["Bassin versant", "Delta", "Nappe"], answer: 0, explain: "Il est séparé des bassins voisins par la ligne de partage des eaux." }
      ]
    }
  ],
  glossary: [
    { t: "Hydrosphère", d: "Ensemble de toute l'eau de la Terre sous ses différents états." },
    { t: "Cycle hydrologique", d: "Circulation continue de l'eau entre les océans, l'atmosphère et les terres émergées." },
    { t: "Salinité", d: "Quantité de sels dissous par kg d'eau (en moyenne 35 ‰ dans les océans)." },
    { t: "Courant marin", d: "Déplacement de grandes masses d'eau océaniques." },
    { t: "Circulation thermohaline", d: "Circulation profonde due aux différences de température et de salinité." },
    { t: "Bassin versant", d: "Territoire dont un fleuve recueille les eaux." },
    { t: "Débit", d: "Volume d'eau qui traverse une section d'un cours d'eau en une seconde." },
    { t: "Régime", d: "Évolution du débit d'un cours d'eau au cours de l'année." },
    { t: "Delta", d: "Embouchure d'un fleuve à plusieurs bras avec des dépôts de sédiments." },
    { t: "Nappe phréatique", d: "Eau qui remplit les pores d'une couche perméable du sous-sol." },
    { t: "Glacier", d: "Masse de glace permanente qui se déplace lentement sous l'effet de la gravité." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quelle fraction de l'eau douce se trouve dans les glaciers ?", options: ["Environ 69 %", "Environ 10 %", "Environ 0,3 %"], answer: 0, explain: "Près de 70 % de l'eau douce est de la glace, surtout en Antarctique et au Groenland." },
      { type: "tf", q: "La plus grande partie de l'évaporation terrestre se fait à partir des océans.", answer: true, explain: "Environ 86 % de l'évaporation totale." },
      { type: "mc", q: "Comment s'appelle l'eau qui pénètre dans le sol ?", options: ["Ruissellement", "Infiltration", "Condensation"], answer: 1, explain: "L'infiltration alimente les nappes." },
      { type: "num", q: "Combien de litres apporte une pluie de 10 mm sur un toit de 60 m² ?", answer: 600, unit: "L", explain: "10 L/m² × 60 m² = 600 L." },
      { type: "mc", q: "Quelle est la salinité moyenne des océans ?", options: ["3,5 ‰", "35 ‰", "350 ‰"], answer: 1, explain: "35 g de sels par kg, soit 35 ‰ (3,5 %)." },
      { type: "mc", q: "Dans l'hémisphère Nord, les courants de surface des gyres tournent dans le sens…", options: ["des aiguilles d'une montre", "inverse des aiguilles d'une montre", "aléatoire"], answer: 0, explain: "À cause de la force de Coriolis, qui dévie vers la droite." },
      { type: "tf", q: "Le lac de Garde est le lac le plus étendu d'Italie.", answer: true, explain: "Environ 368 km²." },
      { type: "order", q: "Range dans l'ordre les étapes du cycle de l'eau.", items: ["Évaporation", "Condensation", "Précipitations", "Ruissellement ou infiltration"], explain: "L'eau monte, forme les nuages, retombe puis s'écoule ou s'infiltre." },
      { type: "text", q: "Comment s'appelle l'embouchure à plusieurs bras typique du Pô et du Nil ?", answer: ["delta", "le delta", "un delta"], explain: "Le delta se forme là où le fleuve dépose ses sédiments." },
      { type: "mc", q: "Pourquoi les vagues d'un tsunami sont-elles presque imperceptibles en pleine mer ?", options: ["Elles mesurent moins d'un mètre de haut mais ont une longueur énorme", "Elles sont très lentes", "Ce sont des ondes sonores"], answer: 0, explain: "Elles ne s'élèvent qu'en approchant de la côte, où le fond ralentit leur partie avant." }
    ]
  }
});
