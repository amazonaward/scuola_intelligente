TOPIC('fr', {
  id: "p3-sci-catene-alimentari",
  title: "Les chaînes alimentaires",
  intro: `Dans la nature, tout le monde mange quelqu'un… ou quelque chose ! L'herbe est mangée par le lapin, le lapin par le renard. Ces étapes forment une <b>chaîne alimentaire</b>. Découvrons qui sont les <b>producteurs</b>, les <b>consommateurs</b> et les <b>décomposeurs</b>, et pourquoi chacun est important.`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Qui mange qui ?",
      html: `<p>Chaque être vivant a besoin d'<b>énergie</b> pour grandir, bouger et vivre. Cette énergie vient de la <b>nourriture</b>.</p>
<p>Si l'on met en file qui mange qui, on obtient une <b>chaîne alimentaire</b>. Voici un exemple dans une prairie :</p>
<p style="font-size:1.2em">🌿 herbe → 🐰 lapin → 🦊 renard</p>
<p>La flèche se lit <b>« est mangé par »</b> : l'herbe est mangée par le lapin, le lapin est mangé par le renard. La flèche montre le chemin que suit l'énergie.</p>`
    },
    {
      type: "text",
      title: "Étape 1 : les producteurs",
      html: `<p>Au début de <b>toute</b> chaîne alimentaire, il y a toujours une <b>plante</b> (ou une algue). Les plantes sont les <b>producteurs</b> : elles <b>fabriquent seules</b> leur nourriture !</p>
<ul>
<li>Elles captent la <b>lumière du Soleil</b> avec leurs feuilles vertes ;</li>
<li>elles puisent l'<b>eau</b> et les sels minéraux dans le sol avec leurs racines ;</li>
<li>elles prennent le <b>dioxyde de carbone</b> dans l'air ;</li>
<li>avec tout cela, elles fabriquent des <b>sucres</b> (leur nourriture) et rejettent de l'<b>oxygène</b>.</li>
</ul>
<p>Ce « travail » s'appelle la <b>photosynthèse</b>, qui veut dire « assembler avec la lumière ».</p>`
    },
    {
      type: "text",
      title: "Étape 2 : les consommateurs",
      html: `<p>Les animaux ne savent pas fabriquer leur nourriture : ils doivent <b>manger</b> des plantes ou d'autres animaux. C'est pourquoi on les appelle <b>consommateurs</b>.</p>
<ul>
<li><b>Herbivores</b> (consommateurs primaires) : ils mangent uniquement des végétaux. Exemples : lapin, vache, sauterelle, chenille, cerf.</li>
<li><b>Carnivores</b> (consommateurs secondaires et tertiaires) : ils mangent d'autres animaux. Exemples : renard, loup, aigle, araignée, lion.</li>
<li><b>Omnivores</b> : ils mangent aussi bien des végétaux que des animaux. Exemples : ours, sanglier, hérisson, poule… et nous, les êtres humains !</li>
</ul>
<p>Le carnivore qui se trouve tout en haut et n'est mangé par aucun autre animal s'appelle un <b>superprédateur</b> (par exemple l'aigle royal ou l'orque).</p>`
    },
    {
      type: "text",
      title: "Étape 3 : les décomposeurs",
      html: `<p>Que deviennent les feuilles tombées, les animaux morts, les crottes des animaux ? Ce sont les <b>décomposeurs</b> qui s'en occupent : <b>champignons</b>, <b>bactéries</b> et petits animaux comme les <b>vers de terre</b>.</p>
<p>Ils mangent les restes et les « démontent » en minuscules morceaux : les <b>sels minéraux</b>. Ceux-ci retournent dans le sol et les racines des plantes les absorbent de nouveau.</p>
<p>Ainsi, la chaîne devient un <b>cercle</b> : rien ne se perd ! Les décomposeurs sont les <b>« éboueurs »</b> et les <b>« recycleurs »</b> de la nature.</p>`
    },
    {
      type: "svg",
      title: "Le cercle de la vie dans une prairie",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="fa" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker></defs>
<rect width="600" height="340" fill="#ecfccb"/>
<circle cx="545" cy="45" r="30" fill="#facc15"/>
<text x="545" y="95" font-size="14" text-anchor="middle" fill="#92400e">Soleil</text>
<path d="M515 60 L420 100" stroke="#f59e0b" stroke-width="4" stroke-dasharray="8 6" marker-end="url(#fa)"/>
<rect x="330" y="105" width="130" height="60" rx="14" fill="#22c55e"/>
<text x="395" y="132" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">🌿 Herbe</text>
<text x="395" y="153" font-size="13" text-anchor="middle" fill="#ffffff">PRODUCTEUR</text>
<rect x="60" y="105" width="150" height="60" rx="14" fill="#f97316"/>
<text x="135" y="132" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">🐰 Lapin</text>
<text x="135" y="153" font-size="13" text-anchor="middle" fill="#ffffff">HERBIVORE</text>
<rect x="60" y="235" width="150" height="60" rx="14" fill="#dc2626"/>
<text x="135" y="262" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">🦊 Renard</text>
<text x="135" y="283" font-size="13" text-anchor="middle" fill="#ffffff">CARNIVORE</text>
<rect x="320" y="235" width="160" height="60" rx="14" fill="#92400e"/>
<text x="400" y="262" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">🍄🪱 Champignons, vers</text>
<text x="400" y="283" font-size="13" text-anchor="middle" fill="#ffffff">DÉCOMPOSEURS</text>
<path d="M328 135 L216 135" stroke="#334155" stroke-width="4" marker-end="url(#fa)"/>
<path d="M135 167 L135 229" stroke="#334155" stroke-width="4" marker-end="url(#fa)"/>
<path d="M212 265 L314 265" stroke="#334155" stroke-width="4" marker-end="url(#fa)"/>
<path d="M400 233 L400 171" stroke="#334155" stroke-width="4" marker-end="url(#fa)"/>
<text x="272" y="125" font-size="13" text-anchor="middle" fill="#334155">est mangée par</text>
<text x="70" y="205" font-size="13" fill="#334155">est mangé par</text>
<text x="262" y="255" font-size="13" text-anchor="middle" fill="#334155">quand il meurt</text>
<text x="490" y="205" font-size="13" text-anchor="middle" fill="#334155">sels minéraux</text>
<text x="490" y="222" font-size="13" text-anchor="middle" fill="#334155">dans le sol</text>
</svg>`,
      caption: "Les flèches montrent le voyage de l'énergie et de la matière : du Soleil aux plantes, aux animaux, aux décomposeurs et de nouveau aux plantes."
    },
    {
      type: "quiz",
      title: "Mini-quiz : producteurs et consommateurs",
      questions: [
        { type: "mc", q: "Qui se trouve toujours au début d'une chaîne alimentaire ?", options: ["Un carnivore", "Une plante (un producteur)", "Un champignon"], answer: 1, explain: "Les plantes fabriquent leur nourriture grâce à la lumière du Soleil : ce sont les producteurs, le premier maillon." },
        { type: "mc", q: "La vache mange seulement de l'herbe. C'est un…", options: ["herbivore", "carnivore", "décomposeur"], answer: 0, explain: "Celui qui mange uniquement des végétaux est un herbivore (consommateur primaire)." },
        { type: "tf", q: "Les champignons et les vers de terre sont des décomposeurs.", answer: true, explain: "Ils transforment les restes de plantes et d'animaux en sels minéraux pour le sol." }
      ]
    },
    {
      type: "widget",
      title: "Jeu : dans quel groupe va-t-il ?",
      widget: "classify",
      caption: "Mets chaque être vivant dans le bon groupe.",
      options: {
        groups: ["🌿 Producteurs", "🐰 Herbivores", "🦊 Carnivores", "🐻 Omnivores", "🍄 Décomposeurs"],
        items: [
          ["🌳 chêne", 0], ["🌾 blé", 0], ["🟢 algue", 0],
          ["🐄 vache", 1], ["🐛 chenille", 1], ["🦌 cerf", 1],
          ["🐺 loup", 2], ["🦅 aigle", 2], ["🕷️ araignée", 2],
          ["🐻 ours", 3], ["🐗 sanglier", 3],
          ["🍄 champignon", 4], ["🪱 ver de terre", 4]
        ]
      }
    },
    {
      type: "svg",
      title: "La pyramide de l'énergie",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<polygon points="300,20 350,85 250,85" fill="#dc2626"/>
<polygon points="250,85 350,85 400,150 200,150" fill="#f97316"/>
<polygon points="200,150 400,150 450,215 150,215" fill="#facc15"/>
<polygon points="150,215 450,215 500,280 100,280" fill="#22c55e"/>
<text x="300" y="75" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">🦅</text>
<text x="300" y="125" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">🐍 serpents</text>
<text x="300" y="190" font-size="15" text-anchor="middle" fill="#78350f" font-weight="bold">🐭 souris</text>
<text x="300" y="255" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">🌾 plantes et graines</text>
<text x="515" y="60" font-size="14" fill="#991b1b">très peu</text>
<text x="525" y="270" font-size="14" fill="#166534">énormément</text>
<text x="20" y="60" font-size="14" fill="#334155">1 kg</text>
<text x="20" y="125" font-size="14" fill="#334155">10 kg</text>
<text x="20" y="190" font-size="14" fill="#334155">100 kg</text>
<text x="20" y="255" font-size="14" fill="#334155">1000 kg</text>
<text x="300" y="308" font-size="14" text-anchor="middle" fill="#334155">À chaque étage, seulement 1/10 environ de l'énergie passe</text>
</svg>`,
      caption: "Pour faire grandir 1 kg d'aigle, il faut beaucoup de serpents, énormément de souris et une montagne de plantes (nombres arrondis)."
    },
    {
      type: "text",
      title: "Pourquoi y a-t-il peu d'animaux tout en haut ?",
      html: `<p>Quand un animal mange, il utilise presque toute l'énergie de la nourriture pour <b>vivre</b> : respirer, courir, se réchauffer. Seule une petite partie (environ <b>un dixième</b>) devient son corps et passe à celui qui le mangera.</p>
<p>C'est pourquoi les plantes sont très nombreuses, les herbivores un peu moins, les carnivores peu nombreux et les superprédateurs très rares. En dessinant ces nombres par étages, on obtient une <b>pyramide alimentaire</b> (ou pyramide écologique).</p>`
    },
    {
      type: "3d",
      title: "La pyramide alimentaire en 3D",
      scene: "solid",
      options: { shape: "pyramid", n: 4, r: 1.2, h: 1.3, color: "#22c55e", labels: false },
      caption: "Imagine la pyramide divisée en 4 étages : la base large, ce sont les plantes, la pointe étroite, les superprédateurs. Fais-la tourner et réfléchis : combien de « briques » d'herbe faut-il pour soutenir la pointe ?"
    },
    {
      type: "text",
      title: "Les réseaux alimentaires",
      html: `<p>Dans la nature, les choses sont plus entremêlées. Le lapin est mangé par le renard, mais aussi par l'aigle et le loup. Le renard mange des lapins, mais aussi des souris, des œufs et des fruits. Les nombreuses chaînes se croisent et forment un <b>réseau alimentaire</b>, comme une toile d'araignée.</p>
<p>Si un maillon disparaît, tout le réseau en souffre. Par exemple : si l'on élimine tous les renards, les lapins deviennent trop nombreux, mangent toute l'herbe… et finalement les lapins eux-mêmes n'ont plus de nourriture.</p>`
    },
    {
      type: "widget",
      title: "Construis la chaîne : qui vient après ?",
      widget: "match",
      options: {
        pairs: [
          ["🌾 blé", "🐭 souris"],
          ["🐭 souris", "🐍 serpent"],
          ["🍃 feuille de mûrier", "🐛 ver à soie"],
          ["🦗 sauterelle", "🐸 grenouille"],
          ["🟢 algues de la mer", "🦐 petits crustacés"],
          ["🦐 krill", "🐋 baleine"]
        ]
      },
      caption: "Associe chaque être vivant à celui qui le mange (le maillon suivant de la chaîne)."
    },
    {
      type: "example",
      title: "Exemple pratique : une chaîne dans la mer",
      html: `<p>Dans la mer aussi, le premier maillon est un producteur : le <b>phytoplancton</b>, de minuscules algues qui flottent et font la photosynthèse.</p>
<p style="font-size:1.1em">🟢 phytoplancton → 🦐 zooplancton (petits crustacés) → 🐟 anchois → 🐟 thon → 🦈 requin</p>
<p>Le phytoplancton produit aussi <b>environ la moitié de l'oxygène</b> que nous respirons sur Terre !</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : la chaîne dans ton assiette",
      html: `<p>Toi aussi, tu fais partie de chaînes alimentaires. Pense au goûter :</p>
<ul>
<li>🌾 blé → 🍞 pain → 🧒 <b>toi</b> : tu es un consommateur primaire (tu manges un végétal).</li>
<li>🌱 herbe → 🐄 vache → 🥛 lait → 🧒 <b>toi</b> : tu es un consommateur secondaire.</li>
</ul>
<p>Et la peau de la pomme qui finit dans le <b>composteur</b> ? Là, les vers de terre, les champignons et les bactéries la transforment en terreau idéal pour le potager : les décomposeurs au travail dans le jardin !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le plus grand animal mange parmi les plus petits !",
      html: `<p>La <b>baleine bleue</b>, longue d'environ 30 mètres, est le plus grand animal ayant jamais existé. Pourtant, elle mange surtout du <b>krill</b>, de petites crevettes longues de quelques centimètres ! Elle en filtre plusieurs tonnes par jour, en ouvrant la bouche et en les retenant avec ses fanons, comme une énorme passoire.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Il existe des plantes « carnivores » !",
      html: `<p>La <b>dionée</b> (ou attrape-mouche) a des feuilles en forme de piège qui se referment d'un coup quand un insecte les touche. En France aussi vivent des plantes carnivores, comme la <b>drosera</b> dans les tourbières de montagne. Mais elles aussi font la photosynthèse : les insectes ne servent que de « complément » en sels minéraux, parce qu'elles vivent sur des sols pauvres.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Dans le parc de Yellowstone, les loups ont sauvé les rivières !",
      html: `<p>Aux États-Unis, dans le parc de Yellowstone, les loups avaient été éliminés. Les cerfs ont énormément augmenté en nombre et ont mangé les jeunes arbres le long des rivières. En <b>1995</b>, les loups ont été ramenés dans le parc : les cerfs ont diminué et changé d'habitudes, les arbres ont pu repousser dans de nombreux endroits et les oiseaux et les castors sont revenus. Un seul maillon peut changer tout le réseau !</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la chaîne alimentaire",
      intro: "Si les flèches te troublent, essaie l'une de ces autres façons de voir la même idée.",
      tabs: [
        {
          label: "🔋 Comme les piles",
          html: `<p>Imagine l'énergie comme une <b>batterie</b>. Le Soleil recharge les plantes. Le lapin mange l'herbe et prend sa charge, mais il en dépense presque toute pour sauter et se réchauffer. Il n'arrive au renard qu'un tout petit morceau de charge.</p>
<p>Voilà pourquoi la flèche va <b>de celui qui est mangé à celui qui mange</b> : elle suit la charge qui passe de main en main, comme dans une course de relais.</p>`
        },
        {
          label: "🇬🇧 Comment on le dit en anglais",
          html: `<p>Dans les écoles anglaises, on parle de <b>food chain</b> (chaîne) et de <b>food web</b> (réseau, toile d'araignée). Les rôles s'appellent :</p>
<ul>
<li><b>Producer</b> = producteur (celui qui produit) ;</li>
<li><b>Consumer</b> = consommateur (celui qui consomme) ;</li>
<li><b>Decomposer</b> = décomposeur ;</li>
<li><b>Predator</b> et <b>prey</b> = prédateur et proie.</li>
</ul>
<p>Dans de nombreuses écoles américaines, on fait un jeu : chaque enfant a une étiquette (herbe, lapin, renard…) et on les relie entre eux avec une <b>pelote de laine</b>. À la fin, on voit une vraie toile d'araignée ! Si l'un lâche le fil, tout le réseau se détend.</p>`
        },
        {
          label: "🧩 Jeu d'association",
          html: `<p>Associe chaque mot à sa définition simple.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Producteur", "Il fabrique sa nourriture avec la lumière"],
              ["Herbivore", "Il mange uniquement des végétaux"],
              ["Carnivore", "Il mange d'autres animaux"],
              ["Omnivore", "Il mange de tout"],
              ["Décomposeur", "Il recycle les restes en sels minéraux"]
            ]
          }
        },
        {
          label: "🌍 Des chaînes dans le monde entier",
          html: `<p>Chaque milieu de la Terre a ses propres chaînes. Fais tourner le globe :</p>
<ul>
<li><b>Savane africaine</b> : herbe → zèbre → lion.</li>
<li><b>Arctique</b> : algues → krill et poissons → phoque → ours polaire.</li>
<li><b>Australie</b> : feuilles d'eucalyptus → koala (qui ne mange presque que cela !).</li>
<li><b>Alpes</b> : herbe → chamois → aigle royal.</li>
<li><b>Amazonie</b> : fruits → singe → jaguar.</li>
</ul>`,
          scene: "globe",
          options: {
            points: [
              { lat: -2.3, lon: 34.8, label: "Savane : herbe → zèbre → lion", color: "#f59e0b" },
              { lat: 78, lon: 16, label: "Arctique : krill → phoque → ours polaire", color: "#0ea5e9" },
              { lat: -27, lon: 152, label: "Australie : eucalyptus → koala", color: "#22c55e" },
              { lat: 46.5, lon: 10.5, label: "Alpes : herbe → chamois → aigle", color: "#a855f7" },
              { lat: -3.5, lon: -62, label: "Amazonie : fruits → singe → jaguar", color: "#16a34a" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : d'où vient l'énergie ? Touche les nœuds",
      nodes: [
        { id: "sole", label: "☀️ Le Soleil", x: 50, y: 6, color: "#f59e0b", html: "La source de presque toute l'énergie sur Terre.", why: "Dans le Soleil, l'hydrogène se transforme en hélium et libère une quantité énorme d'énergie, qui nous arrive sous forme de lumière et de chaleur en environ 8 minutes. Sans Soleil, les plantes ne pourraient pas produire de nourriture et toutes les chaînes s'arrêteraient." },
        { id: "foto", label: "Photosynthèse", x: 20, y: 24, color: "#84cc16", html: "Les plantes utilisent la lumière, l'eau et le dioxyde de carbone pour fabriquer des sucres et de l'oxygène.", why: "Elle a été découverte pas à pas : en 1779, le médecin néerlandais Jan Ingenhousz a démontré que les plantes rejettent de l'oxygène seulement à la lumière. La partie verte des feuilles, la chlorophylle, capte la lumière." },
        { id: "prod", label: "🌿 Producteurs", x: 50, y: 30, color: "#22c55e", html: "Plantes et algues : le premier maillon de chaque chaîne.", why: "Ce sont les seuls capables de transformer la lumière en nourriture. C'est pourquoi on les appelle \"autotrophes\", du grec \"qui se nourrissent eux-mêmes\"." },
        { id: "erb", label: "🐰 Herbivores", x: 30, y: 52, color: "#f97316", html: "Consommateurs primaires : ils mangent les producteurs.", why: "Ils ont des dents plates pour broyer et un long intestin, car les végétaux sont difficiles à digérer. La vache a même un estomac divisé en 4 parties !" },
        { id: "carn", label: "🦊 Carnivores", x: 55, y: 70, color: "#dc2626", html: "Consommateurs secondaires et tertiaires : ils mangent d'autres animaux.", why: "Ils ont des dents pointues (canines) pour attraper la proie et des sens très développés pour chasser. Ils contrôlent le nombre des herbivores." },
        { id: "super", label: "🦅 Superprédateurs", x: 85, y: 55, color: "#7f1d1d", html: "Ils sont tout en haut : aucun animal ne les chasse quand ils sont adultes.", why: "Ils sont peu nombreux parce qu'à chaque étage on perd environ 90 % de l'énergie. Cette règle des « 10 pour cent » a été décrite par l'écologue américain Raymond Lindeman en 1942." },
        { id: "dec", label: "🍄 Décomposeurs", x: 25, y: 88, color: "#92400e", html: "Champignons, bactéries et vers de terre recyclent les restes.", why: "Les bactéries ont été vues pour la première fois en 1676 par Antoni van Leeuwenhoek avec un microscope qu'il avait fabriqué lui-même. Sans décomposeurs, le monde serait submergé de feuilles et de restes, et le sol perdrait ses sels minéraux." },
        { id: "rete", label: "🕸️ Réseau alimentaire", x: 80, y: 88, color: "#6366f1", html: "Beaucoup de chaînes entremêlées dans un milieu.", why: "Chaque animal mange plusieurs choses et est mangé par plusieurs prédateurs. Le mot \"écosystème\", pour désigner l'ensemble des êtres vivants et de leur milieu, a été inventé en 1935 par le botaniste anglais Arthur Tansley." }
      ],
      edges: [
        ["sole", "foto", "lumière pour la"],
        ["foto", "prod", "nourrit les"],
        ["prod", "erb", "mangés par les"],
        ["erb", "carn", "mangés par les"],
        ["carn", "super", "mangés par les"],
        ["carn", "dec", "restes pour les"],
        ["dec", "prod", "sels minéraux pour les"],
        ["carn", "rete", "s'entremêlent dans un"]
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Une <b>chaîne alimentaire</b> montre qui mange qui ; la flèche veut dire « est mangé par ».</li>
<li>Au début, il y a les <b>producteurs</b> (plantes et algues), qui fabriquent leur nourriture avec la lumière du Soleil.</li>
<li>Les <b>consommateurs</b> peuvent être <b>herbivores</b>, <b>carnivores</b> ou <b>omnivores</b>.</li>
<li>Les <b>décomposeurs</b> recyclent les restes et rendent les sels minéraux au sol.</li>
<li>Beaucoup de chaînes entremêlées forment un <b>réseau alimentaire</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : le réseau de la vie",
      questions: [
        { type: "order", q: "Remets dans l'ordre la chaîne alimentaire de la mer.", items: ["Phytoplancton", "Zooplancton", "Anchois", "Thon"], explain: "On part du producteur (phytoplancton) et on monte jusqu'au plus grand prédateur." },
        { type: "mc", q: "Si tous les renards disparaissaient d'un bois, que se passerait-il d'abord pour les lapins ?", options: ["Ils diminueraient", "Ils augmenteraient", "Rien ne changerait"], answer: 1, explain: "Sans leur prédateur, les lapins augmenteraient, puis ils mangeraient trop d'herbe." },
        { type: "tf", q: "Au sommet de la pyramide alimentaire, il y a plus d'animaux qu'à la base.", answer: false, explain: "C'est le contraire : à la base, il y a énormément de producteurs, au sommet très peu de prédateurs." }
      ]
    }
  ],
  glossary: [
    { t: "Chaîne alimentaire", d: "Suite d'êtres vivants où chacun sert de nourriture au suivant." },
    { t: "Réseau alimentaire", d: "Ensemble de nombreuses chaînes alimentaires entremêlées dans un milieu." },
    { t: "Producteur", d: "Plante ou algue qui fabrique sa propre nourriture avec la lumière du Soleil." },
    { t: "Photosynthèse", d: "Processus par lequel les plantes utilisent la lumière, l'eau et le dioxyde de carbone pour produire des sucres et de l'oxygène." },
    { t: "Consommateur", d: "Animal qui se nourrit d'autres êtres vivants." },
    { t: "Herbivore", d: "Animal qui mange uniquement des végétaux." },
    { t: "Carnivore", d: "Animal qui mange d'autres animaux." },
    { t: "Omnivore", d: "Animal qui mange aussi bien des végétaux que des animaux." },
    { t: "Décomposeur", d: "Champignon, bactérie ou petit animal qui transforme les restes en sels minéraux." },
    { t: "Superprédateur", d: "Animal au sommet de la chaîne, qui n'a pas d'ennemis naturels à l'âge adulte." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Que signifie la flèche dans une chaîne alimentaire (herbe → lapin) ?", options: ["« mange »", "« est mangé par »", "« est ami avec »"], answer: 1, explain: "On lit « l'herbe est mangée par le lapin » : la flèche suit le chemin de l'énergie." },
      { type: "mc", q: "De quoi les plantes ont-elles besoin pour faire la photosynthèse ?", options: ["De lumière, d'eau et de dioxyde de carbone", "De viande et d'oxygène", "Seulement de terre"], answer: 0, explain: "Avec la lumière, l'eau et le dioxyde de carbone, les plantes produisent des sucres et rejettent de l'oxygène." },
      { type: "text", q: "Comment s'appellent les êtres vivants qui fabriquent eux-mêmes leur nourriture ?", answer: ["producteurs", "les producteurs", "producteur", "un producteur"], explain: "Ce sont les producteurs : plantes et algues." },
      { type: "mc", q: "Lequel de ces animaux est un omnivore ?", options: ["Le cerf", "L'ours", "L'aigle"], answer: 1, explain: "L'ours mange des fruits, des racines, du miel, des poissons et de petits animaux." },
      { type: "tf", q: "Les champignons sont des décomposeurs.", answer: true, explain: "Beaucoup de champignons se nourrissent de feuilles et de bois morts et les transforment en sels minéraux." },
      { type: "order", q: "Remets la chaîne alimentaire dans l'ordre.", items: ["🌾 blé", "🐭 souris", "🐍 serpent", "🦅 aigle"], explain: "Blé (producteur) → souris (herbivore) → serpent (carnivore) → aigle (superprédateur)." },
      { type: "mc", q: "Le loup, qui mange des cerfs et des lièvres, est un…", options: ["producteur", "herbivore", "carnivore"], answer: 2, explain: "Il mange d'autres animaux, c'est donc un carnivore." },
      { type: "tf", q: "Une chaîne alimentaire peut commencer par un animal carnivore.", answer: false, explain: "Toute chaîne commence par un producteur (plante ou algue), car eux seuls transforment la lumière en nourriture." },
      { type: "mc", q: "Pourquoi y a-t-il peu d'animaux au sommet de la pyramide alimentaire ?", options: ["Parce qu'à chaque passage, une grande partie de l'énergie se perd", "Parce que les prédateurs sont paresseux", "Parce qu'ils mangent seulement de l'herbe"], answer: 0, explain: "Seulement 1/10 environ de l'énergie passe d'un étage au suivant, il en reste donc peu pour ceux qui sont tout en haut." },
      { type: "mc", q: "Quel est le producteur dans la chaîne de la mer ?", options: ["Le thon", "Le phytoplancton", "Le requin"], answer: 1, explain: "Le phytoplancton est fait d'algues microscopiques qui font la photosynthèse." },
      { type: "text", q: "Comment s'appelle l'ensemble de nombreuses chaînes alimentaires entremêlées ?", answer: ["réseau alimentaire", "le réseau alimentaire", "réseau", "un réseau alimentaire"], explain: "Cela s'appelle un réseau alimentaire, parce qu'il ressemble à une toile d'araignée." },
      { type: "mc", q: "Que deviennent les sels minéraux produits par les décomposeurs ?", options: ["Ils disparaissent", "Ils sont absorbés de nouveau par les racines des plantes", "Ils deviennent de la lumière"], answer: 1, explain: "Ils retournent dans le sol et les plantes les réutilisent : ainsi le cercle se referme." }
    ]
  }
});
