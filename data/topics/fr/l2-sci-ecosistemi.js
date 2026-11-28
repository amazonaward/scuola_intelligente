TOPIC('fr', {
  id: "l2-sci-ecosistemi",
  title: "Les écosystèmes",
  intro: "Un loup, une forêt, un lac, un récif de corail : aucun être vivant ne vit seul. Chaque organisme dépend d'autres organismes et du milieu qui l'entoure : lumière, eau, sol, température. L'étude de ces relations s'appelle l'<b>écologie</b>. Dans cette leçon, nous découvrons comment est organisé un <b>écosystème</b>, qui mange qui, comment circulent l'<b>énergie</b> et la <b>matière</b> (les <b>cycles biogéochimiques</b>), et pourquoi la <b>biodiversité</b> est si importante, et si menacée.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce que l'écologie ? Les niveaux d'organisation",
      html: `<p>Le mot <b>écologie</b> (du grec <i>oikos</i>, maison, et <i>logos</i>, discours) fut créé en <b>1866</b> par le biologiste allemand <b>Ernst Haeckel</b>. L'écologie étudie les relations entre les organismes et leur milieu, à des niveaux de complexité croissante :</p>
<ul>
<li><b>Individu</b> : un seul organisme ;</li>
<li><b>Population</b> : les individus d'une même espèce qui vivent dans une même zone (les cerfs d'une forêt) ;</li>
<li><b>Communauté</b> (ou biocénose) : toutes les populations d'espèces différentes qui vivent dans une même zone ;</li>
<li><b>Écosystème</b> : la communauté plus le milieu physique (non vivant) avec lequel elle interagit, formant un système qui échange énergie et matière (terme d'Arthur Tansley, 1935) ;</li>
<li><b>Biome</b> : grand ensemble d'écosystèmes au climat et à la végétation semblables (toundra, taïga, forêt tropicale humide, savane, désert) ;</li>
<li><b>Biosphère</b> : l'ensemble de tous les écosystèmes de la Terre, c'est-à-dire la partie de la planète où il y a de la vie (des fonds océaniques, à environ 10 km de profondeur, jusqu'à quelques kilomètres dans l'atmosphère).</li>
</ul>
<p>Un écosystème a deux composantes :</p>
<ul>
<li>les facteurs <b>abiotiques</b> (non vivants) : lumière, température, eau, pH, salinité, composition du sol, vent ;</li>
<li>les facteurs <b>biotiques</b> (vivants) : les organismes et leurs interactions (prédation, compétition, etc.).</li>
</ul>
<p>Chaque espèce vit dans un <b>habitat</b> (le lieu avec ses conditions, « l'adresse ») et occupe une <b>niche écologique</b> (« le métier ») : l'ensemble des ressources qu'elle utilise et de sa façon de vivre (ce qu'elle mange, quand elle est active, où elle s'abrite). Selon le <b>principe d'exclusion compétitive</b> de <b>Gause</b> (1934, avec des expériences sur deux espèces de <i>Paramecium</i>), deux espèces ayant la même niche ne peuvent pas coexister longtemps au même endroit : soit l'une l'emporte, soit elles se différencient (comme les pinsons aux becs différents).</p>`
    },
    {
      type: "3d",
      title: "La biosphère en couches (schéma)",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#60a5fa", label: "Atmosphère (vie dans les premiers km)" },
        { r: 0.92, color: "#22c55e", label: "Biosphère (sol, eaux, organismes)" },
        { r: 0.85, color: "#a16207", label: "Croûte terrestre" },
        { r: 0.55, color: "#f97316", label: "Manteau" },
        { r: 0.25, color: "#ef4444", label: "Noyau" }
      ] },
      caption: "La biosphère est une couche très mince, épaisse de quelques dizaines de kilomètres seulement, comparée aux quelque 6370 km du rayon terrestre."
    },
    {
      type: "text",
      title: "Qui fait quoi : les rôles dans l'écosystème",
      html: `<p>Chaque organisme joue un rôle dans le flux d'énergie :</p>
<ul>
<li>Les <b>producteurs</b> (autotrophes) : ils fabriquent de la matière organique à partir de substances minérales. Les plantes, les algues et les cyanobactéries utilisent la <b>photosynthèse</b> (énergie de la lumière) ; près des sources hydrothermales des fonds océaniques, certaines bactéries exploitent de l'énergie chimique (<b>chimiosynthèse</b>), sans lumière.</li>
<li>Les <b>consommateurs</b> (hétérotrophes) : ils se nourrissent d'autres organismes. <b>Primaires</b> (herbivores), <b>secondaires</b> (carnivores qui mangent des herbivores), <b>tertiaires</b> (superprédateurs au sommet). Les <b>omnivores</b> occupent plusieurs niveaux.</li>
<li>Les <b>décomposeurs</b> (champignons et bactéries) : ils dégradent les restes et les excréments, et rendent les sels minéraux au sol. Les <b>détritivores</b> (lombrics, mille-pattes) fragmentent la matière morte et en facilitent la décomposition.</li>
</ul>
<p>Les relations alimentaires forment des <b>chaînes alimentaires</b> : herbe → criquet → grenouille → serpent → aigle. Mais dans la nature, chaque espèce a plusieurs proies et plusieurs prédateurs : les chaînes s'entrecroisent donc en <b>réseaux trophiques</b>. Le <b>niveau trophique</b> est la place qu'occupe un organisme dans la chaîne (producteur = niveau 1, herbivore = niveau 2, etc.).</p>
<p>D'autres types de relations entre espèces :</p>
<table>
<tr><th>Relation</th><th>Effet sur les deux espèces</th><th>Exemple</th></tr>
<tr><td>Prédation</td><td>+ / −</td><td>lion et zèbre</td></tr>
<tr><td>Compétition</td><td>− / −</td><td>deux espèces d'oiseaux qui se disputent les mêmes graines</td></tr>
<tr><td>Parasitisme</td><td>+ / − (le parasite vit aux dépens de son hôte)</td><td>tique et chien, ténia et être humain</td></tr>
<tr><td>Mutualisme</td><td>+ / +</td><td>abeilles et fleurs ; lichens (algue ou cyanobactérie + champignon) ; bactéries <i>Rhizobium</i> dans les racines des légumineuses</td></tr>
<tr><td>Commensalisme</td><td>+ / 0</td><td>rémoras qui s'accrochent aux requins pour se déplacer et manger leurs restes</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Producteur, consommateur ou décomposeur ?",
      widget: "classify",
      options: { groups: ["Producteur", "Consommateur", "Décomposeur"], items: [
        ["Chêne", 0],
        ["Cerf", 1],
        ["Loup", 1],
        ["Champignon du sous-bois", 2],
        ["Algue marine", 0],
        ["Lombric", 2],
        ["Cyanobactérie", 0],
        ["Zooplancton", 1],
        ["Bactéries du sol", 2]
      ] },
      caption: "Le lombric est un détritivore : dans ce schéma simple, nous le rangeons avec les décomposeurs. Un organisme qui ne fait ni photosynthèse ni chimiosynthèse n'est jamais un producteur."
    },
    {
      type: "svg",
      title: "Un réseau trophique de prairie",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<defs><marker id="ar" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker></defs>
<g font-size="15" font-weight="bold" text-anchor="middle">
<rect x="20" y="230" width="120" height="44" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="80" y="258" fill="#14532d">Herbe</text>
<rect x="190" y="230" width="120" height="44" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="250" y="258" fill="#14532d">Graines</text>
<rect x="20" y="140" width="120" height="44" rx="10" fill="#fde68a" stroke="#b45309" stroke-width="2"/><text x="80" y="168" fill="#78350f">Criquet</text>
<rect x="190" y="140" width="120" height="44" rx="10" fill="#fde68a" stroke="#b45309" stroke-width="2"/><text x="250" y="168" fill="#78350f">Souris</text>
<rect x="100" y="55" width="120" height="44" rx="10" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/><text x="160" y="83" fill="#7f1d1d">Grenouille</text>
<rect x="360" y="140" width="120" height="44" rx="10" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/><text x="420" y="168" fill="#7f1d1d">Serpent</text>
<rect x="400" y="30" width="120" height="44" rx="10" fill="#e9d5ff" stroke="#7e22ce" stroke-width="2"/><text x="460" y="58" fill="#581c87">Aigle</text>
<rect x="400" y="235" width="170" height="44" rx="10" fill="#e7e5e4" stroke="#57534e" stroke-width="2"/><text x="485" y="263" fill="#292524">Décomposeurs</text>
</g>
<g stroke="#334155" stroke-width="3" fill="none" marker-end="url(#ar)">
<line x1="80" y1="230" x2="80" y2="188"/><line x1="250" y1="230" x2="250" y2="188"/><line x1="100" y1="230" x2="230" y2="188"/>
<line x1="80" y1="140" x2="140" y2="103"/><line x1="250" y1="140" x2="190" y2="103"/>
<line x1="210" y1="75" x2="395" y2="55"/><line x1="320" y1="150" x2="365" y2="155"/><line x1="440" y1="140" x2="455" y2="78"/><line x1="220" y1="85" x2="370" y2="143"/>
</g>
<g stroke="#a8a29e" stroke-width="2" stroke-dasharray="5 5" fill="none"><path d="M460 30 C560 60 560 200 520 232"/></g>
<text x="300" y="20" font-size="14" fill="#475569" text-anchor="middle">Les flèches vont de celui qui est mangé à celui qui mange (énergie)</text>
</svg>`,
      caption: "Dans ce réseau, l'aigle mange à la fois des serpents et des grenouilles ; les décomposeurs reçoivent les restes de tous les niveaux (ligne en pointillés)."
    },
    {
      type: "text",
      title: "Le flux d'énergie et les pyramides écologiques",
      html: `<p>Le Soleil est la source de presque toute l'énergie de la biosphère. Les plantes en fixent moins de 1 % de celle qui arrive sur les feuilles (une partie est réfléchie, une autre sert à évaporer l'eau). Cette énergie passe le long de la chaîne, mais <b>à chaque étape, la plus grande partie est perdue</b> : elle est utilisée par l'organisme pour vivre (respiration cellulaire, mouvement, maintien de la température) et dissipée sous forme de <b>chaleur</b>, et une partie reste dans des parties non mangées (os, poils, racines). En moyenne, environ <b>10 %</b> seulement de l'énergie d'un niveau trophique passe au suivant (<b>règle des 10 %</b>, formulée par Raymond Lindeman en 1942 ; la valeur réelle varie de 5 à 20 %).</p>
<p>Conséquences :</p>
<ul>
<li>les chaînes alimentaires ont <b>peu de maillons</b> (en général 3 à 5) : il n'y a pas assez d'énergie pour entretenir davantage de niveaux ;</li>
<li>les superprédateurs sont <b>peu nombreux et rares</b> ;</li>
<li>l'énergie <b>circule à sens unique</b> (du Soleil aux êtres vivants, puis en chaleur), alors que la <b>matière est recyclée</b>.</li>
</ul>
<p>Les <b>pyramides écologiques</b> représentent visuellement les niveaux trophiques : pyramides de l'<b>énergie</b> (toujours en forme de pyramide), de la <b>biomasse</b> (masse totale des organismes) et des <b>nombres</b> (elle peut être inversée : un seul arbre héberge des milliers d'insectes).</p>`
    },
    {
      type: "example",
      title: "Calcul : combien d'énergie parvient au lion ?",
      html: `<p>Dans une savane, supposons pour simplifier que les producteurs (l'herbe) fixent <b>20 000 kcal</b> en un an sur une surface donnée. Appliquons la règle des 10 % :</p>
<table>
<tr><th>Niveau</th><th>Organismes</th><th>Énergie disponible</th></tr>
<tr><td>1 - Producteurs</td><td>herbe</td><td>20 000 kcal</td></tr>
<tr><td>2 - Consommateurs primaires</td><td>zèbres, gazelles</td><td>2000 kcal</td></tr>
<tr><td>3 - Consommateurs secondaires</td><td>lions</td><td>200 kcal</td></tr>
<tr><td>4 - Consommateurs tertiaires</td><td>(s'il existait un prédateur des lions)</td><td>20 kcal</td></tr>
</table>
<p>Chaque niveau dispose de 10 % du précédent : il suffit de 4 niveaux pour réduire l'énergie à un millième. Voilà pourquoi un champ de blé peut nourrir plus de personnes que la viande obtenue sur la même surface cultivée pour le fourrage : manger les producteurs (niveau 1) est plus efficace énergétiquement que de passer par un herbivore (niveau 2). Pour obtenir 1 kg de viande de bœuf, il faut en moyenne plusieurs kilogrammes d'aliments pour le bétail (6 à 10 kg ou plus, selon les méthodes de calcul).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : réseaux trophiques et énergie",
      questions: [
        { type: "mc", q: "Quelle part de l'énergie passe en moyenne d'un niveau trophique au suivant ?", options: ["Environ 90 %", "Environ 10 %", "Environ 1 %"], answer: 1, explain: "C'est la règle des 10 % : le reste est dissipé sous forme de chaleur ou n'est pas utilisé." },
        { type: "mc", q: "Le mutualisme est une relation dans laquelle...", options: ["les deux espèces tirent un avantage", "une espèce nuit à l'autre", "une espèce vit aux dépens de l'autre sans lui nuire"], answer: 0, explain: "C'est une relation +/+ : par exemple les abeilles et les fleurs." },
        { type: "tf", q: "L'énergie circule dans l'écosystème de façon cyclique, comme la matière.", answer: false, explain: "L'énergie suit un flux à sens unique (Soleil → organismes → chaleur) ; la matière, elle, est recyclée." }
      ]
    },
    {
      type: "text",
      title: "Les cycles biogéochimiques : la matière se recycle",
      html: `<p>Les éléments chimiques dont nous sommes faits (carbone, azote, phosphore, hydrogène, oxygène, soufre...) sont en quantité limitée : ils ne viennent pas de l'extérieur et doivent donc être <b>recyclés</b>. Les <b>cycles biogéochimiques</b> décrivent leur parcours entre les organismes (partie « bio »), l'atmosphère, les eaux et les roches (partie « géo »). L'eau a déjà son propre cycle (leçon sur l'hydrosphère). Voyons les autres.</p>
<p><b>Le cycle du carbone.</b> Le carbone est l'élément de base de toutes les molécules organiques.</p>
<ul>
<li>Les producteurs absorbent le <b>CO₂</b> de l'atmosphère par la <b>photosynthèse</b> (6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂) et l'incorporent à la matière organique ;</li>
<li>les consommateurs le reçoivent avec leur nourriture ; tous les organismes le rejettent sous forme de CO₂ par la <b>respiration cellulaire</b> ; les décomposeurs le libèrent à partir des restes ;</li>
<li>une partie est retirée du cycle pour des durées très longues : sous forme de <b>combustibles fossiles</b> (charbon, pétrole, gaz, formés à partir de restes organiques enfouis pendant des millions d'années) et de roches calcaires (CaCO₃ issu des coquilles marines) ;</li>
<li>les océans absorbent du CO₂ atmosphérique (environ un quart de celui émis par l'être humain), ce qui provoque l'acidification de l'eau.</li>
</ul>
<p>En brûlant les combustibles fossiles, l'être humain remet en circulation en quelques décennies du carbone accumulé pendant des millions d'années : le CO₂ atmosphérique est passé d'environ <b>280 ppm</b> (parties par million) avant la révolution industrielle à plus de <b>420 ppm</b> aujourd'hui, ce qui renforce l'effet de serre.</p>
<p><b>Le cycle de l'azote.</b> L'azote est présent dans les protéines et les acides nucléiques. L'atmosphère est composée à <b>78 %</b> d'azote (N₂), mais la plupart des organismes ne peuvent pas l'utiliser sous cette forme, car la triple liaison N≡N est extrêmement solide.</p>
<ol>
<li><b>Fixation</b> : certaines bactéries (<i>Rhizobium</i> dans les nodosités des racines des haricots, des pois, du trèfle ; cyanobactéries) transforment N₂ en ammoniac (NH₃/NH₄⁺) ; la foudre et l'industrie (procédé <b>Haber-Bosch</b>, mis au point entre 1909 et 1913, qui produit les engrais) en fixent aussi ;</li>
<li><b>Nitrification</b> : des bactéries du sol oxydent l'ammonium en nitrites (NO₂⁻) puis en nitrates (NO₃⁻) ;</li>
<li><b>Assimilation</b> : les plantes absorbent les nitrates et l'ammonium et fabriquent des protéines ; les animaux les obtiennent en les mangeant ;</li>
<li><b>Ammonification</b> : les décomposeurs transforment l'azote organique en ammonium ;</li>
<li><b>Dénitrification</b> : d'autres bactéries réduisent les nitrates en N₂, qui retourne dans l'atmosphère.</li>
</ol>
<p><b>Le cycle du phosphore.</b> Le phosphore est nécessaire à l'ADN, à l'ATP, aux membranes, aux os. Contrairement aux autres, son cycle n'a pas de phase gazeuse importante : libéré lentement des roches (phosphates) par l'érosion, il passe dans le sol et les eaux, entre dans les plantes puis dans les animaux, et retourne enfin aux sédiments (un processus très lent, de millions d'années). C'est pourquoi il est souvent un <b>facteur limitant</b> et qu'on l'ajoute aux sols avec les engrais.</p>
<p>Les engrais et les détergents riches en phosphates et en nitrates qui arrivent dans les lacs et les mers provoquent l'<b>eutrophisation</b> : les algues prolifèrent (« efflorescences ») ; quand elles meurent, les bactéries décomposeuses consomment l'oxygène dissous et les poissons meurent asphyxiés. Un cas célèbre est celui de la mer Adriatique, dans les années 1980.</p>`
    },
    {
      type: "svg",
      title: "Le cycle du carbone",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<defs><marker id="ac" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1e293b"/></marker></defs>
<rect x="190" y="20" width="220" height="56" rx="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="300" y="55" font-size="17" font-weight="bold" fill="#1e3a8a" text-anchor="middle">CO₂ atmosphérique</text>
<rect x="30" y="140" width="150" height="56" rx="14" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="105" y="174" font-size="17" font-weight="bold" fill="#14532d" text-anchor="middle">Plantes</text>
<rect x="420" y="140" width="150" height="56" rx="14" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="495" y="174" font-size="17" font-weight="bold" fill="#78350f" text-anchor="middle">Animaux</text>
<rect x="200" y="235" width="200" height="50" rx="14" fill="#e7e5e4" stroke="#57534e" stroke-width="3"/>
<text x="300" y="266" font-size="16" font-weight="bold" fill="#292524" text-anchor="middle">Sol et fossiles</text>
<g stroke="#1e293b" stroke-width="3" fill="none" marker-end="url(#ac)">
<path d="M230 78 C180 100 140 120 120 138"/>
<path d="M170 140 C190 110 230 90 250 80"/>
<path d="M170 180 C300 150 330 150 418 170"/>
<path d="M440 138 C420 100 380 90 360 80"/>
<path d="M120 198 C130 220 160 240 198 255"/>
<path d="M480 198 C470 230 430 250 402 262"/>
<path d="M300 233 C300 180 300 130 300 80" stroke-dasharray="6 5"/>
</g>
<text x="95" y="105" font-size="14" font-weight="bold" fill="#166534">photosynthèse</text>
<text x="200" y="130" font-size="14" fill="#1e293b">respiration</text>
<text x="270" y="150" font-size="14" fill="#1e293b">nourriture</text>
<text x="455" y="105" font-size="14" fill="#1e293b">respiration</text>
<text x="312" y="200" font-size="14" fill="#7c2d12">combustion et décomposition</text>
</svg>`,
      caption: "Le carbone passe de l'atmosphère aux producteurs par la photosynthèse et retourne dans l'atmosphère par la respiration, la décomposition et la combustion."
    },
    {
      type: "widget",
      title: "Quel processus ? Le cycle de l'azote",
      widget: "match",
      options: { pairs: [
        ["Fixation", "N₂ → ammoniac, grâce à des bactéries comme Rhizobium"],
        ["Nitrification", "Ammonium → nitrites → nitrates"],
        ["Assimilation", "Les plantes absorbent les nitrates pour fabriquer des protéines"],
        ["Ammonification", "Les décomposeurs libèrent de l'ammonium à partir des restes organiques"],
        ["Dénitrification", "Les nitrates redeviennent de l'azote gazeux N₂"]
      ] },
      caption: "Associe chaque étape à sa signification."
    },
    {
      type: "text",
      title: "Dynamique des populations et succession écologique",
      html: `<p>Le nombre d'individus d'une population dépend des naissances, des morts, de l'immigration et de l'émigration. Dans des conditions idéales, la croissance est <b>exponentielle</b> (courbe en J : la population double à intervalles réguliers). Mais les ressources sont limitées : la croissance ralentit et s'arrête à la <b>capacité de charge</b> (K) du milieu ; elle devient <b>logistique</b> (courbe en S). Les <b>facteurs limitants</b> sont <b>dépendants de la densité</b> (compétition, prédateurs, maladies, qui pèsent davantage quand la population est nombreuse) ou <b>indépendants de la densité</b> (sécheresse, incendies, gelées).</p>
<p>Les communautés changent au cours du temps selon la <b>succession écologique</b>. Dans la <b>succession primaire</b>, on part d'un milieu sans sol (lave refroidie, roche laissée par un glacier) : arrivent d'abord les <b>espèces pionnières</b> (lichens, mousses), qui produisent du sol ; puis les herbes, les arbustes, les arbres, jusqu'à la <b>communauté climacique</b> (le climax), relativement stable. Dans la <b>succession secondaire</b>, on repart d'un sol déjà existant après une perturbation (un incendie, un champ abandonné), et elle est plus rapide. Un exemple de succession primaire a été observé sur l'île volcanique de <b>Surtsey</b> (Islande), née d'une éruption sous-marine en 1963 : en quelques décennies, elle a été colonisée par des mousses, des plantes, des insectes et des oiseaux marins.</p>`
    },
    {
      type: "text",
      title: "La biodiversité et sa crise",
      html: `<p>La <b>biodiversité</b> est la variété du vivant à trois niveaux : <b>génétique</b> (diversité des allèles au sein d'une espèce), des <b>espèces</b> (le nombre d'espèces différentes) et des <b>écosystèmes</b>. Elle n'est pas répartie uniformément : elle augmente des pôles vers l'équateur, et les forêts tropicales humides, qui couvrent moins de 7 % de la surface terrestre, abritent plus de la moitié des espèces connues. Il existe des <b>points chauds de biodiversité</b> (hotspots), comme le bassin méditerranéen, riches en espèces endémiques (qui ne vivent que là).</p>
<p>Pourquoi est-elle importante ? Elle fournit des <b>services écosystémiques</b> : pollinisation (environ trois quarts des cultures alimentaires dépendent au moins en partie des pollinisateurs), épuration de l'eau, fertilité des sols, régulation du climat, matières premières, médicaments (l'aspirine vient de l'écorce du saule, la pénicilline d'une moisissure) ; sans oublier sa valeur esthétique et culturelle. Une communauté riche est aussi plus <b>résiliente</b> : si une espèce disparaît, d'autres peuvent jouer son rôle.</p>
<p>Certaines espèces ont un rôle disproportionné par rapport à leur abondance : ce sont les <b>espèces clés de voûte</b>. En 1966, le biologiste <b>Robert Paine</b> retira l'étoile de mer <i>Pisaster</i> de portions de côte rocheuse : les moules, ses proies, envahirent le milieu et le nombre d'espèces passa de 15 à environ 8. Un autre exemple est la réintroduction des <b>loups</b> dans le parc de Yellowstone en 1995 : les wapitis, contrôlés et plus mobiles, ont cessé de brouter les berges, la végétation s'est rétablie, et avec elle les castors, les oiseaux et même la forme des cours d'eau (la « cascade trophique »).</p>
<p>Les extinctions sont un phénomène naturel, mais selon de nombreuses estimations, leur rythme actuel est <b>100 à 1000 fois</b> supérieur au rythme de fond. On parle de <b>sixième extinction de masse</b>. Les principales causes :</p>
<ul>
<li>la <b>perte et la fragmentation des habitats</b> (déforestation, urbanisation, agriculture intensive) ;</li>
<li>les <b>espèces envahissantes</b> introduites par l'être humain (l'écrevisse de Louisiane, l'écureuil gris qui remplace l'écureuil roux en Italie et en Grande-Bretagne) ;</li>
<li>la <b>surexploitation</b> (pêche et chasse excessives) ;</li>
<li>la <b>pollution</b> (pesticides, plastique, eutrophisation) ;</li>
<li>le <b>changement climatique</b> (blanchissement des coraux, déplacement des aires de répartition).</li>
</ul>
<p>L'organisation <b>UICN</b> publie la <b>Liste rouge</b> des espèces menacées, avec des catégories allant de « préoccupation mineure » à « en danger critique », jusqu'à « éteinte ».</p>`
    },
    {
      type: "example",
      title: "Le DDT et la bioamplification",
      html: `<p>Certaines substances (DDT, PCB, mercure) ne se dégradent pas et s'accumulent dans les tissus graisseux. Le long de la chaîne alimentaire, leur concentration <b>augmente</b> à chaque niveau, parce que chaque prédateur mange de nombreux individus du niveau précédent : c'est la <b>bioamplification</b>. Un exemple schématique (valeurs indicatives, en parties par million) :</p>
<table>
<tr><th>Niveau</th><th>Concentration de DDT</th></tr>
<tr><td>Eau</td><td>0,000003 ppm</td></tr>
<tr><td>Plancton</td><td>0,04 ppm</td></tr>
<tr><td>Petits poissons</td><td>0,5 ppm</td></tr>
<tr><td>Poissons prédateurs</td><td>2 ppm</td></tr>
<tr><td>Oiseaux piscivores (balbuzard pêcheur)</td><td>25 ppm</td></tr>
</table>
<p>Entre l'eau et les oiseaux, le DDT se concentre <b>des millions de fois</b>. Chez les rapaces, le DDT amincissait la coquille des œufs, qui se cassaient. En 1962, <b>Rachel Carson</b>, dans son livre <i>Printemps silencieux</i>, dénonça les effets des pesticides : le livre contribua à l'interdiction du DDT aux États-Unis en 1972 et à la naissance des mouvements écologistes. Les populations de pygargue à tête blanche et de faucon pèlerin se sont ensuite rétablies.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les écosystèmes",
      intro: "Si les cycles et les réseaux te semblent des schémas à apprendre par cœur, essaie ces images.",
      tabs: [
        {
          label: "🏪 L'écosystème comme une économie",
          html: `<p>Les producteurs sont comme les <b>usines</b> qui créent de la richesse (de la matière organique) à partir d'énergie et de matières premières. Les consommateurs sont les <b>clients</b>. Les décomposeurs sont les <b>recycleurs</b> : sans eux, la ville serait ensevelie sous les déchets et les matières premières s'épuiseraient. L'énergie solaire est comme l'électricité, qui arrive de l'extérieur et ne se recycle pas ; le carbone et l'azote sont comme les métaux, qu'on réutilise à l'infini. Une crise économique peut être dévastatrice, tout comme la disparition d'une espèce clé de voûte.</p>`
        },
        {
          label: "🍰 Le gâteau de l'énergie",
          html: `<p>Tu as un gâteau de 100 parts (l'énergie solaire fixée). Les manges-tu toutes ? Non, il ne t'en arrive que 10 (l'herbivore) ; les 90 autres sont utilisées pour vivre ou brûlées pour bouger. Ensuite, le carnivore ne reçoit qu'une seule part, et un second carnivore n'en aurait que 0,1. Après 4 ou 5 étapes, le gâteau est fini : voilà pourquoi une chaîne ne peut pas être longue. C'est aussi la raison pour laquelle les thons (au sommet) sont beaucoup plus rares que les sardines.</p>`
        },
        {
          label: "🔄 Un diagramme du cycle de l'azote",
          html: `<p>Une façon simple de retenir le cycle : <b>N₂ → NH₄⁺ → NO₂⁻ → NO₃⁻ → protéines → NH₄⁺ → N₂</b>. Les trois flèches centrales sont l'œuvre de bactéries différentes. Chaque maillon est une « équipe » de microbes spécialisée, et l'absence de l'une d'elles bloque le cycle.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><defs><marker id="an" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1e293b"/></marker></defs><g font-size="16" font-weight="bold" text-anchor="middle"><rect x="20" y="40" width="110" height="50" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="75" y="72" fill="#1e3a8a">N₂ (air)</text><rect x="170" y="40" width="110" height="50" rx="10" fill="#fde68a" stroke="#b45309" stroke-width="2"/><text x="225" y="72" fill="#78350f">NH₄⁺</text><rect x="320" y="40" width="110" height="50" rx="10" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/><text x="375" y="72" fill="#7c2d12">NO₂⁻</text><rect x="470" y="40" width="110" height="50" rx="10" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/><text x="525" y="72" fill="#7f1d1d">NO₃⁻</text><rect x="400" y="200" width="170" height="50" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="485" y="232" fill="#14532d">Protéines (plantes)</text></g><g stroke="#1e293b" stroke-width="3" marker-end="url(#an)" fill="none"><line x1="132" y1="65" x2="168" y2="65"/><line x1="282" y1="65" x2="318" y2="65"/><line x1="432" y1="65" x2="468" y2="65"/><line x1="525" y1="92" x2="510" y2="198"/><path d="M400 225 C250 240 225 180 225 92"/><path d="M510 40 C510 10 75 10 75 38"/></g><g font-size="14" fill="#475569"><text x="150" y="110" text-anchor="middle">fixation</text><text x="300" y="110" text-anchor="middle">nitrification</text><text x="450" y="110" text-anchor="middle">nitrification</text><text x="300" y="20" text-anchor="middle">dénitrification</text><text x="350" y="260" text-anchor="middle">ammonification</text><text x="545" y="165" text-anchor="start">assimilation</text></g></svg>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Les forêts qui se parlent",
      html: `<p>Sous le sol d'une forêt, les racines de nombreux arbres sont reliées par des <b>réseaux d'hyphes de champignons mycorhiziens</b> : une symbiose mutualiste dans laquelle le champignon obtient des sucres de l'arbre et aide les racines à absorber l'eau et les minéraux (surtout le phosphore et l'azote). Dans les années 1990, la chercheuse Suzanne Simard a montré que du carbone peut passer d'un arbre à l'autre par ce réseau. La presse l'a surnommé le « wood wide web » ; les mécanismes et l'importance de ces échanges sont encore étudiés et débattus par les scientifiques, mais la symbiose mycorhizienne est aujourd'hui démontrée pour plus de 80 % des plantes terrestres.</p>`
    },
    {
      type: "curiosity",
      title: "Le plus grand organisme du monde",
      html: `<p>Dans les forêts de l'Oregon (États-Unis), le champignon <i>Armillaria ostoyae</i> occupe avec son mycélium souterrain environ 9 km² (plusieurs centaines de terrains de football), et son âge est estimé à plus de 2000 ans. S'il s'agit vraiment d'un seul individu, c'est le plus grand organisme connu par sa surface. Un autre « organisme » gigantesque est la forêt de peupliers faux-trembles <i>Pando</i>, dans l'Utah : un clone de milliers de troncs reliés par les mêmes racines, qui pèse environ 6000 tonnes. Ils prouvent que les frontières entre « individu » et « écosystème » ne sont pas toujours nettes.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte des écosystèmes : touche les nœuds et découvre le pourquoi",
      nodes: [
        { id: "eco", label: "Écosystème", x: 50, y: 6, color: "#3b82f6", html: "Communauté + milieu physique, avec des flux d'énergie et de matière.", why: "Arthur Tansley (1935) introduisit le terme pour souligner que les organismes et leur milieu forment un seul système physique. Eugene Odum, avec son manuel Fundamentals of Ecology (1953), fit de cette idée la base de l'écologie moderne." },
        { id: "energia", label: "Flux d'énergie", x: 18, y: 32, color: "#f59e0b", html: "Soleil → producteurs → consommateurs → chaleur. Règle des 10 %.", why: "Lindeman (1942), en étudiant le lac Cedar Bog dans le Minnesota, montra qu'à chaque étape environ 90 % de l'énergie est perdue, et l'expliqua par les lois de la thermodynamique : aucune transformation d'énergie n'a un rendement de 100 %." },
        { id: "cicli", label: "Cycles biogéochimiques", x: 82, y: 32, color: "#22c55e", html: "Carbone, azote, phosphore : la matière se recycle.", why: "La matière sur Terre forme un système fermé : les atomes ne se créent ni ne se détruisent (Lavoisier, 1789). C'est pourquoi chaque atome de carbone de ton corps a déjà été dans l'atmosphère, dans une plante, peut-être dans un autre animal." },
        { id: "reti", label: "Réseaux trophiques", x: 18, y: 60, color: "#ef4444", html: "Qui mange qui : des chaînes entrecroisées.", why: "Charles Elton introduisit en 1927 les chaînes alimentaires et les pyramides des nombres ; les réseaux décrivent mieux la réalité et montrent pourquoi retirer une espèce peut provoquer des effets en cascade." },
        { id: "biodiv", label: "Biodiversité", x: 82, y: 60, color: "#a855f7", html: "Variété des gènes, des espèces et des écosystèmes.", why: "Le terme fut popularisé en 1986 lors du Forum sur la biodiversité de Washington ; la Convention sur la diversité biologique (Rio de Janeiro, 1992) la reconnaît comme un bien commun. Une communauté variée est plus stable et plus résiliente." },
        { id: "uomo", label: "Impact humain", x: 50, y: 82, color: "#14b8a6", html: "Perte d'habitats, pollution, climat, espèces envahissantes.", why: "L'être humain prélève déjà une part importante de la production primaire de la planète et a modifié plus de 70 % des terres émergées libres de glace. Comprendre les écosystèmes sert à trouver des solutions (aires protégées, agriculture durable, réensauvagement)." },
        { id: "chiave", label: "Espèces clés de voûte", x: 50, y: 48, color: "#06b6d4", html: "Espèces qui ont un effet énorme par rapport à leur abondance.", why: "Les expériences de Paine (1966) sur les étoiles de mer et la réintroduction des loups à Yellowstone (1995) montrent que les superprédateurs peuvent déterminer la structure de toute la communauté." }
      ],
      edges: [
        ["eco", "energia", "possède un"],
        ["eco", "cicli", "possède des"],
        ["energia", "reti", "circule dans les"],
        ["cicli", "biodiv", "entretiennent"],
        ["reti", "chiave", "comprennent des"],
        ["biodiv", "uomo", "menacée par"],
        ["chiave", "biodiv", "maintiennent"]
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul><li>Écosystème = communauté + milieu abiotique. Niveaux : individu, population, communauté, écosystème, biome, biosphère.</li><li>Énergie : flux à sens unique, avec 90 % de pertes à chaque niveau trophique. Matière : cycles (C, N, P).</li><li>Relations : prédation (+/−), compétition (−/−), parasitisme (+/−), mutualisme (+/+), commensalisme (+/0).</li><li>Menaces sur la biodiversité : habitats, espèces envahissantes, surexploitation, pollution, climat.</li></ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : cycles et biodiversité",
      questions: [
        { type: "mc", q: "Quels organismes rendent au sol les sels minéraux contenus dans les restes de plantes et d'animaux ?", options: ["Les producteurs", "Les décomposeurs", "Les consommateurs tertiaires"], answer: 1, explain: "Les champignons et les bactéries décomposeurs minéralisent la matière organique." },
        { type: "mc", q: "Quel processus transforme l'azote atmosphérique en ammoniac ?", options: ["La fixation", "La nitrification", "La dénitrification"], answer: 0, explain: "La fixation est réalisée surtout par des bactéries comme Rhizobium et par des cyanobactéries." },
        { type: "tf", q: "Le cycle du phosphore comporte une importante phase gazeuse dans l'atmosphère.", answer: false, explain: "Le phosphore circule surtout entre les roches, le sol, l'eau et les organismes." }
      ]
    }
  ],
  glossary: [
    { t: "Écosystème", d: "Ensemble formé par une communauté d'organismes et le milieu physique dans lequel elle vit." },
    { t: "Habitat", d: "Le lieu où vit une espèce, avec ses conditions." },
    { t: "Niche écologique", d: "Ensemble des ressources utilisées par une espèce et de sa façon de vivre." },
    { t: "Producteur", d: "Organisme autotrophe qui fabrique de la matière organique à partir de substances minérales." },
    { t: "Décomposeur", d: "Organisme (champignons, bactéries) qui dégrade les restes organiques." },
    { t: "Niveau trophique", d: "Place d'un organisme dans la chaîne alimentaire." },
    { t: "Règle des 10 %", d: "En moyenne, seuls 10 % de l'énergie passent d'un niveau trophique au suivant." },
    { t: "Mutualisme", d: "Relation entre deux espèces dont toutes deux tirent un avantage." },
    { t: "Cycle biogéochimique", d: "Parcours d'un élément entre les êtres vivants, l'atmosphère, les eaux et les roches." },
    { t: "Eutrophisation", d: "Excès de nutriments dans une eau, qui provoque des proliférations d'algues et un manque d'oxygène." },
    { t: "Biodiversité", d: "Variété des gènes, des espèces et des écosystèmes." },
    { t: "Bioamplification", d: "Augmentation de la concentration d'une substance persistante le long de la chaîne alimentaire." },
    { t: "Espèce clé de voûte", d: "Espèce dont l'effet sur l'écosystème est bien plus grand que son abondance." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qui créa le mot écologie en 1866 ?", options: ["Ernst Haeckel", "Charles Darwin", "Carl von Linné"], answer: 0, explain: "Haeckel forma le mot à partir du grec oikos (maison)." },
      { type: "tf", q: "Un écosystème comprend à la fois les êtres vivants et le milieu physique.", answer: true, explain: "Le biotique et l'abiotique forment un seul système." },
      { type: "num", q: "Les producteurs disposent de 50 000 kcal. Combien de kcal parviennent en moyenne aux consommateurs secondaires (niveau 3) selon la règle des 10 % ?", answer: 500, unit: "kcal", explain: "50 000 → 5000 (primaires) → 500 (secondaires)." },
      { type: "mc", q: "La relation entre une abeille et une fleur est un exemple de...", options: ["parasitisme", "mutualisme", "compétition"], answer: 1, explain: "L'abeille obtient du nectar, la fleur est pollinisée." },
      { type: "order", q: "Range la chaîne alimentaire du producteur au sommet.", items: ["Herbe", "Criquet", "Grenouille", "Serpent"], explain: "Producteur, consommateur primaire, secondaire, tertiaire." },
      { type: "mc", q: "Pourquoi les chaînes alimentaires dépassent-elles rarement 4 ou 5 maillons ?", options: ["Par manque de place", "Parce qu'à chaque niveau environ 90 % de l'énergie est perdue", "Parce que les prédateurs disparaissent"], answer: 1, explain: "Après quelques étapes, l'énergie disponible est trop faible pour entretenir d'autres niveaux." },
      { type: "text", q: "Comment appelle-t-on l'excès de nutriments (nitrates et phosphates) dans un lac, qui provoque la prolifération des algues ?", answer: ["eutrophisation", "l'eutrophisation"], explain: "Quand les algues meurent, les décomposeurs consomment l'oxygène et les poissons meurent." },
      { type: "tf", q: "La matière circule en cycles, alors que l'énergie suit un flux à sens unique.", answer: true, explain: "L'énergie solaire arrive, passe le long de la chaîne et se disperse sous forme de chaleur ; les atomes, eux, sont recyclés." },
      { type: "mc", q: "Quel processus rend à l'atmosphère le carbone des organismes ?", options: ["La respiration et la décomposition", "La fixation de l'azote", "L'eutrophisation"], answer: 0, explain: "La respiration, la décomposition et la combustion libèrent du CO₂." },
      { type: "mc", q: "Pourquoi la disparition d'une espèce clé de voûte est-elle si grave ?", options: ["Parce qu'elle a un effet disproportionné sur la structure de la communauté", "Parce que c'est toujours la plus nombreuse", "Parce qu'elle n'a pas de prédateurs"], answer: 0, explain: "Comme l'étoile de mer Pisaster ou le loup à Yellowstone, elle influence beaucoup d'autres espèces." }
    ]
  }
});
