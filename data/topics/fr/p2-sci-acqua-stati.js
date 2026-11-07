TOPIC('fr', {
  id: "p2-sci-acqua-stati",
  title: "L'eau et ses états",
  intro: "L'eau est une vraie magicienne 🎩 : elle peut être de la <b>glace</b> 🧊 dure, de l'<b>eau</b> 💧 qui coule ou de la <b>vapeur</b> ♨️ invisible. Ce sont les trois <b>états</b> de l'eau : <b>solide</b>, <b>liquide</b> et <b>gazeux</b>.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Trois façons d'être de l'eau",
      html: `<ul>
<li>🧊 <b>Solide</b> : la <b>glace</b>, la <b>neige</b>, la grêle. Elle a une <b>forme à elle</b> : un glaçon reste un glaçon même si tu le poses dans une assiette.</li>
<li>💧 <b>Liquide</b> : l'<b>eau</b> du robinet, de la mer, de la pluie. Elle <b>n'a pas de forme à elle</b> : elle prend la forme du récipient (verre, bouteille, baignoire).</li>
<li>♨️ <b>Gazeux</b> : la <b>vapeur d'eau</b>. Elle est <b>invisible</b> et se répand partout dans l'air.</li>
</ul>
<p>C'est toujours <b>la même eau</b> ! Seul son état change.</p>`
    },
    {
      type: "svg",
      title: "Solide, liquide, gazeux",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<rect x="60" y="110" width="90" height="90" rx="10" fill="#bae6fd" stroke="#0284c7" stroke-width="4"/>
<path d="M75 125 L100 125" stroke="#ffffff" stroke-width="6"/>
<path d="M250 100 L265 220 L335 220 L350 100" fill="none" stroke="#475569" stroke-width="4"/>
<path d="M256 150 L262 216 L338 216 L344 150 Z" fill="#3b82f6"/>
<path d="M465 210 Q450 180 470 160 Q490 140 470 115 Q455 95 475 75" stroke="#94a3b8" stroke-width="6" fill="none" stroke-dasharray="4 8"/>
<path d="M505 210 Q490 180 510 160 Q530 140 510 115 Q495 95 515 75" stroke="#94a3b8" stroke-width="6" fill="none" stroke-dasharray="4 8"/>
<path d="M440 220 L540 220 L530 250 L450 250 Z" fill="#64748b"/>
<text x="105" y="60" font-size="24" text-anchor="middle" font-weight="bold" fill="#0369a1">SOLIDE</text>
<text x="300" y="60" font-size="24" text-anchor="middle" font-weight="bold" fill="#1d4ed8">LIQUIDE</text>
<text x="490" y="45" font-size="24" text-anchor="middle" font-weight="bold" fill="#475569">GAZEUX</text>
<text x="105" y="240" font-size="17" text-anchor="middle" fill="#0c4a6e">glace</text>
<text x="105" y="262" font-size="15" text-anchor="middle" fill="#0c4a6e">forme propre</text>
<text x="300" y="250" font-size="17" text-anchor="middle" fill="#1e3a8a">eau</text>
<text x="300" y="272" font-size="15" text-anchor="middle" fill="#1e3a8a">forme du récipient</text>
<text x="490" y="275" font-size="17" text-anchor="middle" fill="#334155">vapeur : elle se répand</text>
</svg>`,
      caption: "La glace a une forme à elle, l'eau prend la forme du verre, la vapeur se répand dans l'air."
    },
    {
      type: "text",
      title: "Qu'est-ce qui fait changer d'état ? La chaleur !",
      html: `<p>🔥 Si on <b>chauffe</b> :</p>
<ul>
<li>🧊 → 💧 la glace <b>fond</b> et devient de l'eau : c'est la <b>fusion</b> (elle a lieu à <b>0 °C</b>) ;</li>
<li>💧 → ♨️ l'eau devient de la vapeur : c'est l'<b>évaporation</b>. Si on la chauffe beaucoup, à <b>100 °C</b>, elle <b>bout</b> : c'est l'<b>ébullition</b>.</li>
</ul>
<p>❄️ Si on <b>refroidit</b> :</p>
<ul>
<li>♨️ → 💧 la vapeur redevient de petites gouttelettes : c'est la <b>condensation</b> ;</li>
<li>💧 → 🧊 l'eau <b>gèle</b> : c'est la <b>solidification</b> (à <b>0 °C</b>).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Le tour des changements",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<circle cx="100" cy="150" r="60" fill="#bae6fd" stroke="#0284c7" stroke-width="4"/>
<circle cx="300" cy="150" r="60" fill="#93c5fd" stroke="#1d4ed8" stroke-width="4"/>
<circle cx="500" cy="150" r="60" fill="#e2e8f0" stroke="#64748b" stroke-width="4"/>
<text x="100" y="162" font-size="38" text-anchor="middle">🧊</text>
<text x="300" y="162" font-size="38" text-anchor="middle">💧</text>
<text x="500" y="162" font-size="38" text-anchor="middle">♨️</text>
<path d="M150 115 Q200 70 250 115" stroke="#dc2626" stroke-width="5" fill="none"/><polygon points="242,104 258,122 238,124" fill="#dc2626"/>
<path d="M350 115 Q400 70 450 115" stroke="#dc2626" stroke-width="5" fill="none"/><polygon points="442,104 458,122 438,124" fill="#dc2626"/>
<path d="M450 185 Q400 230 350 185" stroke="#2563eb" stroke-width="5" fill="none"/><polygon points="358,196 342,178 362,176" fill="#2563eb"/>
<path d="M250 185 Q200 230 150 185" stroke="#2563eb" stroke-width="5" fill="none"/><polygon points="158,196 142,178 162,176" fill="#2563eb"/>
<text x="200" y="62" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">fusion 🔥</text>
<text x="400" y="62" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">évaporation 🔥</text>
<text x="400" y="250" font-size="17" text-anchor="middle" fill="#1d4ed8" font-weight="bold">condensation ❄️</text>
<text x="200" y="250" font-size="17" text-anchor="middle" fill="#1d4ed8" font-weight="bold">solidification ❄️</text>
<text x="100" y="235" font-size="15" text-anchor="middle" fill="#0c4a6e">solide</text>
<text x="300" y="285" font-size="15" text-anchor="middle" fill="#1e3a8a">liquide</text>
<text x="500" y="235" font-size="15" text-anchor="middle" fill="#334155">gazeux</text>
<text x="300" y="25" font-size="16" text-anchor="middle" fill="#7f1d1d">rouge = je chauffe · bleu = je refroidis</text>
</svg>`,
      caption: "Les flèches rouges se font en chauffant, les bleues en refroidissant."
    },
    {
      type: "quiz",
      title: "Mini-quiz : les trois états",
      questions: [
        { type: "mc", q: "La glace est de l'eau à l'état…", options: ["solide", "liquide", "gazeux"], answer: 0, explain: "La glace est solide : elle a une forme à elle." },
        { type: "tf", q: "L'eau liquide prend la forme du récipient.", answer: true, explain: "Dans le verre, elle a la forme du verre ; dans la bouteille, celle de la bouteille." },
        { type: "mc", q: "Que se passe-t-il à la glace si tu la chauffes ?", options: ["Elle fond", "Elle devient plus dure", "Elle disparaît dans le néant"], answer: 0, explain: "La glace fond et devient de l'eau liquide : c'est la fusion." }
      ]
    },
    {
      type: "example",
      title: "Exemple : la glace à l'eau au soleil 🍧",
      html: `<p>En été, une glace à l'eau au soleil <b>fond</b> : la chaleur la fait passer de <b>solide</b> à <b>liquide</b> (fusion).</p>
<p>Le jus qui tombe sur le bitume chaud, au bout d'un moment, <b>disparaît</b> : il s'est <b>évaporé</b>, il est devenu de la vapeur invisible dans l'air.</p>`
    },
    {
      type: "example",
      title: "Exemple : le miroir de la salle de bains 🪞",
      html: `<p>Après une douche chaude, le miroir se couvre de <b>buée</b>.</p>
<p>La vapeur de l'eau chaude touche le miroir, qui est plus <b>froid</b>, et redevient plein de petites gouttelettes : c'est la <b>condensation</b>. Tu peux même écrire dessus avec ton doigt !</p>
<p>C'est pareil quand une bouteille froide sortie du frigo « transpire » des gouttelettes.</p>`
    },
    {
      type: "widget",
      title: "Quel état est-ce ?",
      widget: "classify",
      options: {
        groups: ["🧊 Solide", "💧 Liquide", "♨️ Gazeux"],
        items: [
          ["❄️ neige", 0],
          ["🌧️ pluie", 1],
          ["vapeur de la casserole", 2],
          ["🧊 glaçon au congélateur", 0],
          ["🌊 mer", 1],
          ["humidité invisible dans l'air", 2],
          ["grêle", 0],
          ["🚿 eau de la douche", 1]
        ]
      },
      caption: "Attention : le petit « nuage » blanc au-dessus de la casserole est fait de gouttelettes déjà condensées. La vraie vapeur est invisible !"
    },
    {
      type: "3d",
      title: "La molécule d'eau",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0, z: 0, r: 0.6, color: "#ef4444", label: "O (oxygène)" },
          { x: 0.76, y: 0.58, z: 0, r: 0.38, color: "#f8fafc", label: "H (hydrogène)" },
          { x: -0.76, y: 0.58, z: 0, r: 0.38, color: "#f8fafc", label: "H (hydrogène)" }
        ],
        bonds: [[0, 1], [0, 2]]
      },
      caption: "L'eau est faite de minuscules particules, les molécules H₂O : un atome d'oxygène et deux d'hydrogène. Elles sont si petites que dans une goutte il y en a des milliards de milliards ! Fais-la tourner."
    },
    {
      type: "text",
      title: "Que font les particules ?",
      html: `<p>Les molécules d'eau bougent <b>toujours</b>. La chaleur les fait bouger <b>plus fort</b> :</p>
<ul>
<li>🧊 dans la <b>glace</b>, elles sont <b>proches et immobiles à leur place</b> : elles vibrent seulement, comme des enfants en rang qui se tiennent par la main ;</li>
<li>💧 dans l'<b>eau</b>, elles sont proches mais <b>glissent</b> les unes sur les autres, comme des enfants qui se promènent dans la cour ;</li>
<li>♨️ dans la <b>vapeur</b>, elles sont <b>loin les unes des autres</b> et courent partout, comme des enfants qui jouent à chat dans un immense pré.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La glace flotte",
      html: `<p>Presque toutes les substances, quand elles deviennent solides, se resserrent. Pas l'eau ! Quand elle gèle, elle <b>gonfle</b> (d'environ un dixième) : c'est pour cela qu'une bouteille pleine oubliée dans le congélateur peut <b>éclater</b>. 💥</p>
<p>Pour la même raison, la glace est plus légère que l'eau et <b>flotte</b> : les icebergs flottent sur la mer et, en hiver, les lacs ne gèlent qu'en surface. En dessous, les poissons continuent de nager ! 🐟</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? En montagne, les pâtes cuisent moins bien",
      html: `<p>En ville, l'eau bout à <b>100 °C</b>. Très haut en montagne, l'air « appuie » moins sur l'eau et elle bout plus tôt : au sommet de l'<b>Everest</b> (8 849 m), elle bout à environ <b>70 °C</b> !</p>
<p>Là-haut, les pâtes et les œufs cuisent donc beaucoup plus lentement. 🍝🏔️</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les états de l'eau",
      intro: "Si les mots difficiles t'embrouillent, essaie avec des jeux, des dessins et la 3D.",
      tabs: [
        {
          label: "💃 La danse des particules",
          html: `<p>Jouez en classe ! Chaque enfant est une molécule d'eau.</p>
<ul>
<li>🧊 <b>Glace</b> : tous serrés, vous vous tenez par la main et vous vous balancez sur place.</li>
<li>💧 La maîtresse dit « <b>je chauffe !</b> » : vous lâchez les mains et vous marchez tout près les uns des autres, en glissant l'un à côté de l'autre.</li>
<li>♨️ « <b>Je chauffe encore !</b> » : vous courez dans tout le gymnase, loin les uns des autres.</li>
<li>❄️ « <b>Je refroidis !</b> » : vous ralentissez et vous vous rapprochez…</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f8fafc"/>
<rect x="20" y="30" width="170" height="150" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
<rect x="215" y="30" width="170" height="150" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="410" y="30" width="170" height="150" fill="#f1f5f9" stroke="#64748b" stroke-width="3"/>
<g fill="#38bdf8" stroke="#0369a1" stroke-width="2">
<circle cx="55" cy="65" r="14"/><circle cx="90" cy="65" r="14"/><circle cx="125" cy="65" r="14"/><circle cx="160" cy="65" r="14"/>
<circle cx="55" cy="100" r="14"/><circle cx="90" cy="100" r="14"/><circle cx="125" cy="100" r="14"/><circle cx="160" cy="100" r="14"/>
<circle cx="55" cy="135" r="14"/><circle cx="90" cy="135" r="14"/><circle cx="125" cy="135" r="14"/><circle cx="160" cy="135" r="14"/>
</g>
<g fill="#3b82f6" stroke="#1e3a8a" stroke-width="2">
<circle cx="245" cy="150" r="14"/><circle cx="275" cy="160" r="14"/><circle cx="305" cy="148" r="14"/><circle cx="340" cy="158" r="14"/>
<circle cx="260" cy="122" r="14"/><circle cx="292" cy="120" r="14"/><circle cx="325" cy="125" r="14"/><circle cx="360" cy="130" r="14"/>
</g>
<g fill="#cbd5e1" stroke="#475569" stroke-width="2">
<circle cx="440" cy="60" r="14"/><circle cx="540" cy="80" r="14"/><circle cx="480" cy="150" r="14"/><circle cx="555" cy="155" r="14"/><circle cx="500" cy="95" r="14"/>
</g>
<text x="105" y="205" font-size="18" text-anchor="middle" fill="#0369a1" font-weight="bold">glace : en rang</text>
<text x="300" y="205" font-size="18" text-anchor="middle" fill="#1d4ed8" font-weight="bold">eau : elles glissent</text>
<text x="495" y="205" font-size="18" text-anchor="middle" fill="#475569" font-weight="bold">vapeur : elles courent</text>
</svg>`
        },
        {
          label: "🇺🇸 Les degrés américains",
          html: `<p>En France, on mesure la température en <b>degrés Celsius</b> (°C) : la glace fond à <b>0 °C</b> et l'eau bout à <b>100 °C</b>.</p>
<p>Aux <b>États-Unis</b>, on utilise les <b>degrés Fahrenheit</b> (°F) : là-bas, la glace fond à <b>32 °F</b> et l'eau bout à <b>212 °F</b> ! Si un enfant américain dit « dehors il fait 90 degrés », il ne brûle pas : cela fait environ 32 °C, une journée d'été.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["La glace fond", "0 °C = 32 °F"],
              ["L'eau bout", "100 °C = 212 °F"],
              ["Notre corps", "environ 37 °C = 98,6 °F"],
              ["Une belle journée d'été", "environ 30 °C = 86 °F"]
            ]
          }
        },
        {
          label: "🌍 L'eau sur la planète",
          html: `<p>Sur la Terre, l'eau existe sous les trois états : <b>solide</b> dans les glaces des pôles et sur les montagnes, <b>liquide</b> dans les mers, les lacs et les fleuves, <b>gazeuse</b> dans l'air. Les mers couvrent environ <b>7 dixièmes</b> de la surface de la Terre : c'est pour cela que, vue de l'espace, elle ressemble à une planète bleue ! Fais tourner le globe.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -80, lon: 0, label: "🧊 Antarctique : glace", color: "#38bdf8" },
              { lat: 72, lon: -40, label: "🧊 Groenland : glace", color: "#38bdf8" },
              { lat: 0, lon: -150, label: "💧 Océan Pacifique", color: "#1d4ed8" },
              { lat: 46, lon: 8, label: "🏔️ Glaciers des Alpes", color: "#7dd3fc" },
              { lat: -3, lon: -60, label: "♨️ Amazonie : air très humide", color: "#64748b" }
            ]
          }
        },
        {
          label: "🃏 Cartes des changements",
          html: `<p>Retourne les cartes et révise les noms des changements d'état.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🧊 → 💧", back: "Fusion (en chauffant, à 0 °C)" },
              { front: "💧 → 🧊", back: "Solidification (en refroidissant, à 0 °C)" },
              { front: "💧 → ♨️", back: "Évaporation (ébullition à 100 °C)" },
              { front: "♨️ → 💧", back: "Condensation (en refroidissant)" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des états de l'eau : touche les nœuds et découvre pourquoi",
      nodes: [
        { id: "molecole", label: "Molécules H₂O", x: 50, y: 8, color: "#ef4444", html: "Les toutes petites particules dont l'eau est faite : 1 oxygène + 2 hydrogènes.", why: "En <b>1783–1784</b>, le Français <b>Antoine Lavoisier</b> démontra que l'eau n'est pas un « élément », comme on le croyait depuis 2000 ans, mais qu'elle est faite de deux gaz : l'hydrogène et l'oxygène. L'Anglais Henry Cavendish avait déjà obtenu de l'eau en brûlant de l'hydrogène." },
        { id: "calore", label: "Chaleur", x: 50, y: 32, color: "#f97316", html: "Plus de chaleur = particules plus agitées.", why: "La chaleur est de l'énergie : elle fait bouger les molécules de plus en plus vite. Quand elles bougent assez fort, elles se détachent les unes des autres et l'eau change d'état." },
        { id: "solido", label: "Solide (glace)", x: 15, y: 55, color: "#0ea5e9", html: "Forme et volume propres ; particules immobiles à leur place.", why: "Dans la glace, les molécules s'« accrochent » en une multitude d'hexagones : c'est pour cela que les flocons de neige ont <b>6 branches</b>. Cette structure est pleine de vides : c'est pour cela que la glace flotte." },
        { id: "liquido", label: "Liquide (eau)", x: 50, y: 60, color: "#2563eb", html: "Volume propre mais forme du récipient ; particules qui glissent.", why: "Les molécules restent proches parce qu'elles s'attirent, mais elles peuvent glisser les unes sur les autres. C'est pour cela que l'eau se verse et remplit tous les recoins du verre." },
        { id: "gas", label: "Gazeux (vapeur)", x: 85, y: 55, color: "#64748b", html: "Ni forme ni volume propres ; particules lointaines qui courent.", why: "Les molécules sont si rapides qu'elles se détachent complètement et occupent tout l'espace qu'elles trouvent. C'est pour cela que l'odeur du gâteau arrive jusque dans la chambre !" },
        { id: "termometro", label: "Thermomètre et degrés", x: 20, y: 85, color: "#a855f7", html: "Instrument qui mesure la température en degrés.", why: "En <b>1742</b>, le Suédois <b>Anders Celsius</b> inventa son échelle en utilisant deux points fixes de l'eau. Au début, pourtant, il l'avait faite « à l'envers » : 0 pour l'eau qui bout et 100 pour la glace ! Peu après, elle fut retournée et c'est celle que nous utilisons aujourd'hui." },
        { id: "punti", label: "0 °C et 100 °C", x: 55, y: 85, color: "#16a34a", html: "L'eau gèle à 0 °C et bout à 100 °C (au niveau de la mer).", why: "Ce sont des nombres « ronds » parce que l'échelle Celsius a été construite justement sur l'eau. En montagne, l'eau bout avant 100 °C, parce que l'air appuie moins." },
        { id: "ciclo", label: "Cycle de l'eau", x: 85, y: 85, color: "#14b8a6", html: "Dans la nature, l'eau change d'état en permanence : mers, nuages, pluie.", why: "Le Soleil fait évaporer la mer, la vapeur monte et se condense en nuages, puis retombe en pluie ou en neige. C'est toujours la même eau depuis des milliards d'années : tu as peut-être bu une gorgée d'eau qu'un dinosaure a bue aussi ! 🦕" }
      ],
      edges: [
        ["molecole", "calore", "s'agitent avec la"],
        ["calore", "solido", "peu"],
        ["calore", "liquido", "plus"],
        ["calore", "gas", "beaucoup"],
        ["solido", "liquido", "fusion"],
        ["liquido", "gas", "évaporation"],
        ["termometro", "punti", "mesure"],
        ["liquido", "punti", "change d'état à"],
        ["gas", "ciclo", "forme les nuages du"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : les changements",
      questions: [
        { type: "mc", q: "À quelle température l'eau bout-elle (au niveau de la mer) ?", options: ["0 °C", "37 °C", "100 °C"], answer: 2, explain: "L'eau bout à 100 °C." },
        { type: "mc", q: "Le miroir embué après la douche est un exemple de…", options: ["fusion", "condensation", "solidification"], answer: 1, explain: "La vapeur touche le miroir froid et redevient liquide : condensation." },
        { type: "tf", q: "La glace coule au fond de l'eau.", answer: false, explain: "La glace est plus légère que l'eau et elle flotte." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>L'eau a 3 états : <b>solide</b> (glace), <b>liquide</b> (eau), <b>gazeux</b> (vapeur).</li>
<li>En chauffant : <b>fusion</b> (🧊→💧) et <b>évaporation</b> (💧→♨️).</li>
<li>En refroidissant : <b>condensation</b> (♨️→💧) et <b>solidification</b> (💧→🧊).</li>
<li>Elle gèle à <b>0 °C</b>, elle bout à <b>100 °C</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "État solide", d: "A une forme et un volume propres, comme la glace." },
    { t: "État liquide", d: "A un volume propre mais prend la forme du récipient, comme l'eau." },
    { t: "État gazeux", d: "N'a ni forme ni volume propres et se répand partout, comme la vapeur." },
    { t: "Fusion", d: "Passage de l'état solide à l'état liquide." },
    { t: "Solidification", d: "Passage de l'état liquide à l'état solide." },
    { t: "Évaporation", d: "Passage de l'état liquide à l'état gazeux." },
    { t: "Condensation", d: "Passage de l'état gazeux à l'état liquide." },
    { t: "Ébullition", d: "Évaporation rapide avec des bulles, à 100 °C." },
    { t: "Thermomètre", d: "Instrument qui mesure la température." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Dans quel état se trouve la neige ?", options: ["Solide", "Liquide", "Gazeux"], answer: 0, explain: "La neige est de l'eau solide." },
      { type: "mc", q: "Comment s'appelle le passage de la glace à l'eau ?", options: ["Fusion", "Condensation", "Évaporation"], answer: 0, explain: "La fusion : le solide devient liquide." },
      { type: "num", q: "À combien de degrés Celsius l'eau gèle-t-elle ?", answer: 0, unit: "°C", explain: "L'eau gèle à 0 °C." },
      { type: "num", q: "À combien de degrés Celsius l'eau bout-elle au niveau de la mer ?", answer: 100, unit: "°C", explain: "L'eau bout à 100 °C." },
      { type: "tf", q: "La vapeur d'eau est invisible.", answer: true, explain: "La vraie vapeur est invisible ; le petit « nuage » blanc est fait de gouttelettes." },
      { type: "tf", q: "L'eau liquide a une forme à elle.", answer: false, explain: "L'eau prend la forme du récipient." },
      { type: "mc", q: "Le linge étendu sèche parce que l'eau…", options: ["gèle", "s'évapore", "se condense"], answer: 1, explain: "La chaleur et le vent font évaporer l'eau du linge." },
      { type: "order", q: "Mets dans l'ordre : un glaçon dans une casserole sur le feu.", items: ["Glace solide", "La glace fond", "Eau liquide", "L'eau bout et devient de la vapeur"], explain: "En chauffant : d'abord la fusion, puis l'évaporation." },
      { type: "text", q: "Comment s'appelle le passage de la vapeur à l'eau liquide ?", answer: ["condensation", "la condensation"], explain: "La condensation." },
      { type: "mc", q: "Pourquoi une bouteille d'eau pleine peut-elle éclater au congélateur ?", options: ["Parce que l'eau gonfle en gelant", "Parce que le congélateur est trop chaud", "Parce que la glace est lourde"], answer: 0, explain: "Quand elle gèle, l'eau augmente de volume." },
      { type: "mc", q: "Qu'est-ce qui fait changer l'eau d'état ?", options: ["La couleur", "La chaleur", "Le bruit"], answer: 1, explain: "En chauffant ou en refroidissant, l'eau change d'état." },
      { type: "tf", q: "Glace, eau et vapeur sont la même substance.", answer: true, explain: "Elles sont toutes faites de molécules H₂O : seul l'état change." }
    ]
  }
});
