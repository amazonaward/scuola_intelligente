TOPIC('fr', {
  id: "l1-sci-leggi-ponderali",
  title: "Les lois pondérales et la théorie atomique",
  intro: "À la fin du XVIIIe siècle, la chimie devient une science grâce à une idée simple : <b>peser</b>. En mesurant avec précision les masses de ce qui réagit, Lavoisier, Proust et Dalton découvrirent des règles numériques si précises qu'une question s'imposa : pourquoi la nature est-elle aussi ordonnée ? La réponse fut l'une des idées les plus puissantes de l'histoire : la matière est faite d'<b>atomes</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Avant Lavoisier : le mystère du feu",
      html: `<p>Au XVIIIe siècle, on pensait qu'un corps qui brûle perd une substance mystérieuse, le <b>phlogistique</b>. Mais il y avait un problème : le fer qui rouille ou le métal qui se « calcine » à l'air <b>gagne</b> du poids. Comment un corps qui perd quelque chose peut-il devenir plus lourd ?</p>
<p>Antoine-Laurent de <b>Lavoisier</b> (1743–1794) transforma la chimie en une science quantitative : il pesait toujours tout, <b>avant et après</b>, et travaillait dans des récipients fermés, pour qu'aucun gaz ne puisse s'échapper. Il comprit que la combustion est une réaction avec l'<b>oxygène</b> de l'air (gaz isolé par Priestley en 1774 et baptisé « oxygène » par Lavoisier), et que le métal pèse plus lourd après parce qu'il a <b>absorbé</b> de l'oxygène.</p>`
    },
    {
      type: "text",
      title: "La loi de conservation de la masse (Lavoisier, 1789)",
      html: `<p>Dans son <i>Traité élémentaire de chimie</i> (1789), Lavoisier énonça le principe que l'on résume ainsi :</p>
<p><b>« Rien ne se perd, rien ne se crée, tout se transforme. »</b></p>
<p>Lors d'une réaction chimique dans un <b>système fermé</b>, la masse totale des réactifs est égale à la masse totale des produits :</p>
<p><b>m(réactifs) = m(produits)</b></p>
<p>Pourquoi cela ne semble-t-il pas toujours vrai ? Si tu brûles un morceau de papier, la cendre pèse moins que le papier de départ : mais le reste de la masse est parti dans les gaz (CO₂ et vapeur d'eau) qui se sont dispersés dans l'air. Si en revanche tu brûles de la laine de fer, le poids <b>augmente</b>, parce qu'elle se lie à l'oxygène de l'air.</p>
<p>Aujourd'hui, on sait que la conservation est vérifiée avec une grande précision dans les réactions chimiques ; les variations de masse liées à la variation d'énergie (E = mc²) sont trop petites pour être mesurées. Elles ne deviennent importantes que dans les réactions nucléaires.</p>`
    },
    {
      type: "example",
      title: "Peser une combustion",
      html: `<p>On brûle <b>12 g de carbone</b> dans un récipient fermé contenant de l'oxygène. Il se forme <b>44 g de dioxyde de carbone</b>. Quelle masse d'oxygène a réagi ?</p>
<ol>
<li>m(réactifs) = m(produits) : m(C) + m(O₂) = m(CO₂).</li>
<li>12 g + m(O₂) = 44 g → m(O₂) = <b>32 g</b>.</li>
</ol>
<p>Autre cas : 5,6 g de fer réagissent avec du soufre et donnent 8,8 g de sulfure de fer. Le soufre consommé vaut 8,8 − 5,6 = <b>3,2 g</b>.</p>`
    },
    {
      type: "text",
      title: "La loi des proportions définies (Proust, 1799)",
      html: `<p>Le chimiste français Joseph-Louis <b>Proust</b> (1754–1826) analysa pendant des années des échantillons de composés d'origines différentes et trouva un fait surprenant :</p>
<p><b>Dans un corps composé pur, les éléments sont toujours combinés selon le même rapport de masses, quelle que soit l'origine du composé.</b></p>
<p>L'eau est toujours formée de <b>1 partie d'hydrogène pour 8 parties d'oxygène</b> en masse (1 : 8) : 9 g d'eau contiennent 1 g de H et 8 g de O ; 90 g contiennent 10 g de H et 80 g de O. Si tu mets 2 g d'hydrogène avec 8 g d'oxygène, seul 1 g d'hydrogène réagit : 1 g de H reste en excès, car le rapport doit être respecté.</p>
<p>La loi fut très discutée : le chimiste <b>Berthollet</b> soutenait que les proportions pouvaient varier selon les conditions. Le débat dura près de dix ans, mais les données de Proust, de plus en plus précises, l'emportèrent. Certains composés solides, dits <b>non stœchiométriques</b>, peuvent présenter de petites variations (par exemple certains oxydes de fer) : ce ne sont pas des exceptions à la loi, mais des cas où la structure cristalline présente des « lacunes ».</p>`
    },
    {
      type: "example",
      title: "Appliquer la loi de Proust",
      html: `<p>L'oxyde de calcium se forme à partir de calcium et d'oxygène dans un rapport de masses <b>5 : 2</b> (c'est-à-dire 5 g de Ca pour 2 g de O). Quelle masse d'oxygène faut-il pour 35 g de calcium ?</p>
<ol>
<li>Proportion : 5 : 2 = 35 : x</li>
<li>x = 2 × 35 / 5 = <b>14 g d'oxygène</b>.</li>
<li>Il se forme 35 + 14 = 49 g d'oxyde de calcium (conservation de la masse).</li>
</ol>`
    },
    {
      type: "svg",
      title: "Le rapport 1 : 8 dans l'eau",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<text x="320" y="26" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Eau de sources différentes : toujours 1 partie de H pour 8 de O</text>
<line x1="30" y1="240" x2="610" y2="240" stroke="#475569" stroke-width="2"/>
<rect x="60" y="232" width="34" height="8" fill="#9ca3af" stroke="#475569"/><rect x="94" y="176" width="34" height="64" fill="#ef4444" stroke="#475569"/>
<text x="94" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">Rivière</text><text x="94" y="282" font-size="14" text-anchor="middle" fill="#1f2937">1 g H + 8 g O</text>
<rect x="240" y="224" width="34" height="16" fill="#9ca3af" stroke="#475569"/><rect x="274" y="112" width="34" height="128" fill="#ef4444" stroke="#475569"/>
<text x="274" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">Pluie</text><text x="274" y="282" font-size="14" text-anchor="middle" fill="#1f2937">2 g H + 16 g O</text>
<rect x="420" y="216" width="34" height="24" fill="#9ca3af" stroke="#475569"/><rect x="454" y="48" width="34" height="192" fill="#ef4444" stroke="#475569"/>
<text x="454" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">Mer</text><text x="454" y="282" font-size="14" text-anchor="middle" fill="#1f2937">3 g H + 24 g O</text>
<rect x="530" y="60" width="16" height="16" fill="#9ca3af" stroke="#475569"/><text x="552" y="74" font-size="14" fill="#1f2937">hydrogène</text>
<rect x="530" y="86" width="16" height="16" fill="#ef4444" stroke="#475569"/><text x="552" y="100" font-size="14" fill="#1f2937">oxygène</text>
</svg>`,
      caption: "La barre rouge (oxygène) est toujours 8 fois plus haute que la grise (hydrogène), pour chaque échantillon d'eau."
    },
    {
      type: "text",
      title: "La loi des proportions multiples (Dalton, 1803)",
      html: `<p>L'Anglais John <b>Dalton</b> (1766–1844), professeur et météorologue, se demanda ce qui se passe quand <b>deux éléments forment plusieurs composés différents</b>. Exemple : le carbone et l'oxygène forment le monoxyde (CO) et le dioxyde (CO₂).</p>
<table>
<tr><th>Composé</th><th>g de O pour 12 g de C</th></tr>
<tr><td>CO (monoxyde de carbone)</td><td>16 g</td></tr>
<tr><td>CO₂ (dioxyde de carbone)</td><td>32 g</td></tr>
</table>
<p>Le rapport entre les masses d'oxygène qui se combinent avec la <b>même masse</b> de carbone est 16 : 32 = <b>1 : 2</b>, un rapport de <b>petits nombres entiers</b>. Voici la loi :</p>
<p><b>Lorsque deux éléments se combinent de plusieurs façons pour donner des composés différents, les masses de l'un qui se combinent avec une masse fixe de l'autre sont entre elles dans des rapports de petits nombres entiers.</b></p>
<p>Autre exemple : l'azote et l'oxygène forment N₂O, NO, N₂O₃, NO₂, N₂O₅. Les masses d'oxygène pour 28 g d'azote sont 16, 32, 48, 64 et 80 g : rapport 1 : 2 : 3 : 4 : 5.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : les trois lois",
      questions: [
        { type: "mc", q: "Quelle loi affirme que, lors d'une réaction dans un système fermé, la masse se conserve ?", options: ["Proust", "Lavoisier", "Dalton"], answer: 1, explain: "C'est la loi de conservation de la masse de Lavoisier (1789)." },
        { type: "num", q: "L'eau contient H et O dans un rapport de masses 1 : 8. Combien de grammes d'oxygène se combinent avec 5 g d'hydrogène ?", answer: 40, unit: "g", explain: "5 × 8 = 40 g." },
        { type: "tf", q: "Selon Dalton, si deux éléments forment des composés différents, les rapports entre les masses d'un élément qui se combine avec une quantité fixe de l'autre sont des petits nombres entiers.", answer: true, explain: "C'est l'énoncé de la loi des proportions multiples." }
      ]
    },
    {
      type: "text",
      title: "La théorie atomique de Dalton (1808)",
      html: `<p>Les trois lois sont des règles expérimentales : elles <b>décrivent</b> mais n'<b>expliquent</b> pas. En 1808 (<i>A New System of Chemical Philosophy</i>), Dalton proposa un modèle capable de les expliquer toutes. L'idée d'atome était ancienne (<b>Démocrite</b> et Leucippe, Ve siècle av. J.-C.), mais c'était une spéculation philosophique ; Dalton en fit une théorie qui prédisait des nombres. Ses postulats :</p>
<ol>
<li>La matière est formée d'<b>atomes</b> minuscules et indivisibles.</li>
<li>Les atomes d'un même élément sont <b>tous identiques</b> (même masse, mêmes propriétés) ; les atomes d'éléments différents sont différents.</li>
<li>Les atomes <b>ne sont ni créés ni détruits</b> lors des réactions : ils se réorganisent.</li>
<li>Les composés se forment par l'union d'atomes d'éléments différents dans des <b>rapports simples et fixes</b> (un atome de A avec un, deux, trois atomes de B).</li>
</ol>
<p>Comment ils expliquent les lois :</p>
<ul>
<li><b>Lavoisier</b> : si les atomes ne sont ni créés ni détruits, la masse totale ne peut pas changer.</li>
<li><b>Proust</b> : si chaque molécule d'eau a toujours la même structure (2 H + 1 O), le rapport de masses entre H et O est toujours le même.</li>
<li><b>Dalton (proportions multiples)</b> : CO et CO₂ diffèrent par 1 atome de O contre 2 atomes de O pour chaque atome de C : d'où le rapport 1 : 2.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Un atome en 3D",
      scene: "atom",
      options: { elements: ["H", "He", "C", "O", "Na"] },
      caption: "Le modèle de Dalton voyait les atomes comme des sphères pleines et indivisibles. Aujourd'hui, on sait qu'ils ont un noyau entouré d'électrons : mais l'essentiel de son idée reste valable pour la chimie."
    },
    {
      type: "text",
      title: "Ce qui a été corrigé après Dalton",
      html: `<p>La théorie de Dalton était une grande idée avec quelques erreurs, que la science a corrigées par la suite :</p>
<ul>
<li><b>Des atomes indivisibles ?</b> Non : en 1897, <b>J.J. Thomson</b> découvrit l'électron ; en 1911, <b>Rutherford</b> découvrit le noyau ; le neutron fut découvert par <b>Chadwick</b> en 1932.</li>
<li><b>Des atomes tous identiques ?</b> Pas exactement : les <b>isotopes</b> d'un même élément ont des masses différentes (carbone 12 et carbone 14).</li>
<li><b>Formules des composés</b> : Dalton pensait que l'eau était HO. En 1811, <b>Avogadro</b> proposa que des volumes égaux de gaz, à même température et même pression, contiennent le même nombre de molécules, et que les éléments gazeux soient des molécules diatomiques (H₂, O₂) ; mais il fut ignoré pendant 50 ans, jusqu'à ce que <b>Cannizzaro</b>, au congrès de Karlsruhe en 1860, en montre la force. Depuis Gay-Lussac (1808), on savait que 2 volumes d'hydrogène et 1 d'oxygène donnent 2 volumes de vapeur : la formule H₂O explique ce rapport.</li>
</ul>
<p>Tout le monde n'accepta pas l'atome : en 1900 encore, d'illustres scientifiques (comme <b>Ostwald</b> et <b>Mach</b>) n'y voyaient qu'un outil de calcul. Le mouvement brownien, expliqué par Einstein en 1905 et confirmé par <b>Perrin</b> en 1908, convainquit même les sceptiques.</p>`
    },
    {
      type: "text",
      title: "Atomes, éléments, molécules et composés",
      html: `<p>Un <b>élément</b> est formé d'atomes ayant le même <b>numéro atomique</b> Z (nombre de protons). On connaît 118 éléments, rangés dans le <b>tableau périodique</b> de <b>Mendeleïev</b> (1869), qui laissa des cases vides pour des éléments encore à découvrir et en prédit les propriétés : le gallium (1875) et le germanium (1886) les confirmèrent.</p>
<p>Une <b>molécule</b> est un groupe d'atomes liés : O₂, H₂O, CO₂. Un <b>composé</b> contient des atomes d'éléments différents.</p>
<p>La <b>masse atomique</b> se mesure en <b>unités de masse atomique</b> (u) : 1 u est le douzième de la masse d'un atome de carbone 12, environ 1,66 × 10⁻²⁷ kg. L'hydrogène pèse environ 1 u, le carbone 12 u, l'oxygène 16 u. La <b>masse moléculaire</b> de la molécule d'eau vaut 2 × 1 + 16 = 18 u : tu retrouves le rapport 2 : 16 = 1 : 8 de Proust !</p>`
    },
    {
      type: "widget",
      title: "Le tableau périodique",
      widget: "periodicTable",
      options: {},
      caption: "Touche les éléments : symbole, numéro atomique, masse et famille. Trouve H, C, N, O, Na, Cl."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les lois pondérales",
      intro: "Si les rapports de masses te paraissent confus, essaie de raisonner en atomes ou par analogies.",
      tabs: [
        {
          label: "🧱 Avec des briques",
          html: `<p>Imagine les atomes de H comme des briques blanches de 1 g et les atomes de O comme des briques rouges de 16 g. Une molécule d'eau, c'est 2 blanches + 1 rouge : 2 g + 16 g = 18 g, dans un rapport 1 : 8. Quel que soit le nombre de molécules, chaque « construction » a le même rapport : voilà la loi de Proust. Et si tu fais des constructions « doublées » (H₂O₂, l'eau oxygénée : 2 blanches + 2 rouges), le rapport de O pour la même masse de H double : loi des proportions multiples (H₂O : 16 g de O pour 2 g de H ; H₂O₂ : 32 g de O pour 2 g de H, donc 1 : 2).</p>`,
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" }, { x: -0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" } ], bonds: [[0,1],[0,2]] }
        },
        {
          label: "🥪 Le sandwich",
          html: `<p>Un sandwich demande toujours 2 tranches de pain et 1 tranche de jambon : si tu as 10 tranches de pain et 10 de jambon, tu fais 5 sandwichs et il te reste 5 tranches de jambon. De la même façon, 2 g d'hydrogène et 8 g d'oxygène ne réagissent pas complètement : 1 g de H réagit avec 8 g de O et 1 g de H reste. Les rapports fixes ne sont pas une règle humaine, mais la conséquence du fait que les molécules sont des « sandwichs » d'atomes.</p>`
        },
        {
          label: "🗂️ Un peu d'histoire",
          html: `<p>Trois idées en vingt ans : <b>1789</b> (Lavoisier : la masse se conserve), <b>1799</b> (Proust : les rapports sont fixes), <b>1803–1808</b> (Dalton : les atomes expliquent tout). Chacune demanda des instruments plus précis : la balance de Lavoisier, construite avec une grande précision pour l'époque, permettait d'apprécier des différences de quelques milligrammes. Ainsi, pas à pas, la chimie passa de l'alchimie à la science exacte.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lavoisier, la fin d'un génie",
      html: `<p>Lavoisier ne fut pas seulement un chimiste : il était aussi membre de la <b>Ferme générale</b>, l'organisme privé qui percevait les impôts pour la monarchie française. Pendant la Révolution, il fut arrêté et guillotiné le 8 mai 1794. On raconte que le mathématicien Lagrange aurait dit : « Il ne leur a fallu qu'un moment pour faire tomber cette tête, et cent années peut-être ne suffiront pas pour en reproduire une semblable. » Sa femme, <b>Marie-Anne Paulze</b>, fut sa collaboratrice : elle dessinait les instruments, traduisait des textes anglais et s'occupa de la publication de ses œuvres.</p>`
    },
    {
      type: "curiosity",
      title: "Combien d'atomes dans une goutte d'eau ?",
      html: `<p>Une goutte d'eau d'environ 0,05 g contient environ <b>1,7 × 10²¹ molécules</b>, c'est-à-dire plus de mille milliards de milliards. Un atome a un diamètre de l'ordre de 10⁻¹⁰ m (un dixième de nanomètre) : sur l'épaisseur d'un cheveu (environ 70 µm), on peut en aligner environ 700 000. Voilà pourquoi, pour compter les atomes, les chimistes utilisent la <b>mole</b> : 1 mole contient 6,022 × 10²³ entités (nombre d'Avogadro) et a une masse en grammes égale à la masse moléculaire : 18 g d'eau, c'est une mole de molécules.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte de la théorie atomique : touche les nœuds et découvre pourquoi",
      nodes: [
        { id: "lav", label: "Conservation de la masse", x: 15, y: 8, color: "#3b82f6", html: "Dans un système fermé, la masse ne change pas.", why: "<b>Lavoisier</b> (1789) l'établit en pesant avec précision réactifs et produits dans des récipients fermés, et détruisit ainsi la théorie du phlogistique : la combustion ajoute de l'oxygène, elle n'enlève pas de phlogistique." },
        { id: "prou", label: "Proportions définies", x: 50, y: 8, color: "#22c55e", html: "Un composé a toujours la même composition en masse.", why: "<b>Proust</b> (1799) le démontra par des analyses répétées du carbonate de cuivre et d'autres composés naturels et artificiels, en répondant aux objections de Berthollet." },
        { id: "mult", label: "Proportions multiples", x: 85, y: 8, color: "#f59e0b", html: "Des rapports de petits nombres entiers.", why: "<b>Dalton</b> (1803) la tira des données sur les composés du carbone et de l'oxygène et sur ceux de l'azote et de l'oxygène : c'est justement l'existence de nombres entiers qui suggéra que la matière était « granulaire »." },
        { id: "dalton", label: "Théorie atomique de Dalton", x: 50, y: 38, color: "#a855f7", html: "Des atomes indivisibles, identiques pour chaque élément, qui se réorganisent.", why: "Dalton reprit l'idée d'atome de Démocrite et Leucippe et en fit une théorie quantitative en 1808, en associant à chaque élément une masse relative (hydrogène = 1)." },
        { id: "avog", label: "Avogadro et Cannizzaro", x: 20, y: 62, color: "#06b6d4", html: "Molécules et volumes des gaz.", why: "Dalton ne distinguait pas atomes et molécules, et donnait des formules fausses (eau = HO). <b>Avogadro</b> (1811) résolut le problème, mais ne fut écouté qu'après Cannizzaro (Karlsruhe, 1860)." },
        { id: "elettrone", label: "Électron, noyau, neutron", x: 50, y: 70, color: "#ef4444", html: "L'atome a une structure interne.", why: "Thomson (1897), Rutherford (1911), Chadwick (1932) : des expériences sur les rayons cathodiques et sur la diffusion de particules alpha montrèrent que l'atome n'est pas indivisible." },
        { id: "tavola", label: "Tableau périodique", x: 82, y: 62, color: "#14b8a6", html: "Les éléments rangés par numéro atomique.", why: "<b>Mendeleïev</b> (1869) rangea les éléments selon leur masse atomique et leurs propriétés, en laissant des cases vides ; <b>Moseley</b> (1913) montra que le véritable ordre est celui du numéro atomique." },
        { id: "mole", label: "Mole", x: 50, y: 92, color: "#eab308", html: "Unité de quantité de matière.", why: "Elle permet de passer de l'échelle des atomes isolés (u) à celle des grammes, car 1 mole contient le même nombre d'entités (6,022 × 10²³) pour n'importe quelle substance." }
      ],
      edges: [
        ["lav", "dalton", "expliquée par"],
        ["prou", "dalton", "expliquée par"],
        ["mult", "dalton", "expliquée par"],
        ["dalton", "avog", "corrigée par"],
        ["dalton", "elettrone", "dépassée par"],
        ["avog", "tavola", "mène à"],
        ["elettrone", "tavola", "explique"],
        ["avog", "mole", "mène à"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : les atomes",
      questions: [
        { type: "mc", q: "Quel postulat de Dalton a été corrigé par les découvertes ultérieures ?", options: ["Les atomes sont indivisibles", "La matière est faite d'atomes", "Les atomes se réorganisent lors des réactions"], answer: 0, explain: "L'atome a une structure interne : un noyau (protons et neutrons) et des électrons." },
        { type: "num", q: "Quelle est la masse moléculaire de l'eau en u ? (H = 1, O = 16)", answer: 18, unit: "u", explain: "2 × 1 + 16 = 18 u." },
        { type: "tf", q: "Dalton pensait que la formule de l'eau était H₂O.", answer: false, explain: "Il pensait HO, car il ne connaissait pas la nature diatomique de l'hydrogène et de l'oxygène gazeux (Avogadro, 1811)." }
      ]
    }
  ],
  glossary: [
    { t: "Loi de Lavoisier", d: "Lors d'une réaction chimique dans un système fermé, la masse des réactifs est égale à celle des produits." },
    { t: "Loi de Proust", d: "Dans un composé, les éléments sont toujours combinés selon le même rapport de masses." },
    { t: "Loi de Dalton", d: "Les masses d'un élément qui se combinent avec une masse fixe d'un autre sont dans un rapport de petits nombres entiers." },
    { t: "Atome", d: "La plus petite particule d'un élément qui en conserve les propriétés chimiques." },
    { t: "Molécule", d: "Assemblage de deux atomes liés ou plus." },
    { t: "Élément", d: "Corps pur formé d'atomes ayant tous le même numéro atomique." },
    { t: "Composé", d: "Corps pur formé d'atomes d'éléments différents dans un rapport fixe." },
    { t: "Numéro atomique (Z)", d: "Nombre de protons dans le noyau : il identifie l'élément." },
    { t: "Unité de masse atomique (u)", d: "Un douzième de la masse d'un atome de carbone 12." },
    { t: "Isotopes", d: "Atomes d'un même élément ayant un nombre de neutrons différent." },
    { t: "Mole", d: "Quantité de matière qui contient 6,022 × 10²³ entités." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qui a énoncé la loi de conservation de la masse ?", options: ["Dalton", "Lavoisier", "Proust"], answer: 1, explain: "Lavoisier, dans le Traité élémentaire de chimie (1789)." },
      { type: "num", q: "10 g de magnésium brûlent en formant 16,6 g d'oxyde de magnésium. Combien de grammes d'oxygène ont réagi ?", answer: 6.6, tol: 0.05, unit: "g", explain: "16,6 − 10 = 6,6 g, par conservation de la masse." },
      { type: "num", q: "Le rapport de masses H : O dans l'eau est 1 : 8. Quelle masse d'hydrogène y a-t-il dans 45 g d'eau ?", answer: 5, unit: "g", explain: "1 partie sur 9 est de l'hydrogène : 45/9 = 5 g." },
      { type: "mc", q: "Quelle loi explique que CO et CO₂ contiennent de l'oxygène dans un rapport 1 : 2 pour la même masse de carbone ?", options: ["Conservation de la masse", "Proportions définies", "Proportions multiples"], answer: 2, explain: "C'est la loi des proportions multiples de Dalton." },
      { type: "tf", q: "Selon Dalton, les atomes d'un élément sont tous identiques entre eux.", answer: true, explain: "C'était l'un de ses postulats ; les isotopes l'ont ensuite nuancé." },
      { type: "mc", q: "Qui a découvert l'électron en 1897 ?", options: ["J.J. Thomson", "Rutherford", "Mendeleïev"], answer: 0, explain: "Joseph John Thomson, en étudiant les rayons cathodiques." },
      { type: "text", q: "Comment s'appelle l'unité qui contient 6,022 × 10²³ entités ?", answer: ["mole", "la mole", "une mole"], explain: "Une mole contient un nombre d'Avogadro d'entités." },
      { type: "order", q: "Range dans l'ordre chronologique.", items: ["Conservation de la masse (Lavoisier)", "Proportions définies (Proust)", "Théorie atomique (Dalton)", "Congrès de Karlsruhe (Cannizzaro)"], explain: "1789, 1799, 1808, 1860." },
      { type: "mc", q: "Qu'a démontré Rutherford en 1911 ?", options: ["Que l'atome a un noyau petit et dense", "Que les atomes n'existent pas", "Que les électrons sont des ondes"], answer: 0, explain: "Grâce à l'expérience de diffusion des particules alpha sur une feuille d'or." },
      { type: "num", q: "On fait réagir 4 g d'hydrogène avec 24 g d'oxygène (rapport 1 : 8). Combien de grammes d'hydrogène restent en excès ?", answer: 1, unit: "g", explain: "24 g de O réagissent avec 3 g de H : il reste 4 − 3 = 1 g." }
    ]
  }
});
