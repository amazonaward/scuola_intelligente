TOPIC('fr', {
  id: "p3-sci-aria",
  title: "L'air",
  intro: "Nous ne le voyons pas, il n'a pas d'odeur, et pourtant il est partout : c'est l'<b>air</b> ! 🌬️ Découvrons ce que c'est, de quoi il est fait, pourquoi nous ne pourrions pas vivre sans lui et comment le protéger.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "L'air est de la matière",
      html: `<p>L'air est <b>invisible</b>, <b>inodore</b> (sans odeur) et <b>sans saveur</b>. Mais attention : ce n'est <b>pas « rien »</b> ! L'air est de la <b>matière</b>, comme l'eau et les cailloux, sauf qu'il est à l'état <b>gazeux</b>.</p>
<p>Comment le savons-nous ? Grâce aux expériences ! L'air :</p>
<ul>
<li>📦 <b>occupe de la place</b> : un verre « vide » est en réalité plein d'air ;</li>
<li>⚖️ <b>a un poids</b> : un ballon gonflé pèse un tout petit peu plus qu'un ballon dégonflé ;</li>
<li>🎈 <b>peut être comprimé</b> : en bouchant une seringue sans aiguille, tu peux pousser le piston, parce que l'air se « serre » ;</li>
<li>💨 <b>se dilate</b> et appuie dans toutes les directions : c'est pour ça qu'il gonfle les ballons et les pneus de vélo.</li>
</ul>`
    },
    {
      type: "example",
      title: "Expérience : le mouchoir qui ne se mouille pas",
      html: `<p>Il te faut : un verre, un mouchoir en papier, une bassine d'eau.</p>
<ol>
<li>Froisse le mouchoir en boule et coince-le bien au <b>fond</b> du verre.</li>
<li>Retourne le verre et plonge-le <b>bien droit</b> dans la bassine, jusqu'au fond.</li>
<li>Ressors-le toujours bien droit et touche le mouchoir…</li>
</ol>
<p>Il est <b>sec</b> ! 😲 L'air à l'intérieur du verre occupe la place et ne laisse pas entrer l'eau. Essaie ensuite d'incliner le verre sous l'eau : des <b>bulles</b> sortent (l'air s'échappe) et l'eau entre.</p>`
    },
    {
      type: "text",
      title: "De quoi est fait l'air",
      html: `<p>L'air n'est pas un seul gaz : c'est un <b>mélange de gaz</b>. Sur 100 parties d'air sec, il y a environ :</p>
<ul>
<li>🔵 <b>78 parties d'azote</b> : le gaz le plus abondant ; il sert aux plantes (qui le prennent dans le sol grâce à des bactéries) ;</li>
<li>🔴 <b>21 parties d'oxygène</b> : celui que nous respirons et qui fait brûler le feu ;</li>
<li>⚪ <b>1 partie d'autres gaz</b> : surtout l'<b>argon</b>, puis un tout petit peu de <b>dioxyde de carbone</b> (CO₂), qui sert aux plantes pour la photosynthèse.</li>
</ul>
<p>Dans l'air, il y a aussi de la <b>vapeur d'eau</b> (l'eau sous forme de gaz, qui forme les nuages et la pluie) et des <b>poussières</b> : poussière, pollen, grains minuscules que tu vois « danser » dans un rayon de soleil qui entre par la fenêtre. ☀️</p>`
    },
    {
      type: "svg",
      title: "La composition de l'air",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="300" y="30" font-size="22" font-weight="bold" fill="#1f2937" text-anchor="middle">100 « petites billes » d'air</text>
<g>
<rect x="30" y="55" width="390" height="40" fill="#3b82f6"/>
<rect x="420" y="55" width="105" height="40" fill="#ef4444"/>
<rect x="525" y="55" width="5" height="40" fill="#a3a3a3"/>
</g>
<rect x="30" y="55" width="500" height="40" fill="none" stroke="#1f2937" stroke-width="3"/>
<text x="225" y="83" font-size="20" fill="#ffffff" text-anchor="middle" font-weight="bold">AZOTE 78</text>
<text x="472" y="83" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">O₂ 21</text>
<g font-size="20" fill="#1f2937">
<rect x="40" y="130" width="30" height="30" fill="#3b82f6"/><text x="85" y="152">Azote (N₂) : 78 sur 100</text>
<rect x="40" y="175" width="30" height="30" fill="#ef4444"/><text x="85" y="197">Oxygène (O₂) : 21 sur 100</text>
<rect x="40" y="220" width="30" height="30" fill="#a3a3a3"/><text x="85" y="242">Argon, dioxyde de carbone et autres : environ 1</text>
</g>
<text x="300" y="285" font-size="16" fill="#475569" text-anchor="middle">+ vapeur d'eau et poussières, qui changent d'un endroit à l'autre</text>
</svg>`,
      caption: "Si l'air était fait de 100 billes, 78 seraient d'azote, 21 d'oxygène et seulement 1 d'autres gaz."
    },
    {
      type: "3d",
      title: "Les molécules de l'air",
      scene: "molecule",
      options: {
        atoms: [
          { x: -2.4, y: 0.6, z: 0, r: 0.5, color: "#3b82f6", label: "N (azote)" },
          { x: -1.5, y: 0.6, z: 0, r: 0.5, color: "#3b82f6", label: "N (azote)" },
          { x: 0.5, y: 0.6, z: 0, r: 0.5, color: "#ef4444", label: "O (oxygène)" },
          { x: 1.4, y: 0.6, z: 0, r: 0.5, color: "#ef4444", label: "O (oxygène)" },
          { x: 0, y: -1.2, z: 0, r: 0.5, color: "#374151", label: "C (carbone)" },
          { x: -1.0, y: -1.2, z: 0, r: 0.45, color: "#ef4444", label: "O" },
          { x: 1.0, y: -1.2, z: 0, r: 0.45, color: "#ef4444", label: "O" }
        ],
        bonds: [[0, 1], [2, 3], [4, 5], [4, 6]]
      },
      caption: "En haut : une molécule d'azote (N₂) et une d'oxygène (O₂). En bas : dioxyde de carbone (CO₂). Fais-les tourner avec ton doigt !"
    },
    {
      type: "quiz",
      title: "Mini-quiz : qu'est-ce que l'air",
      questions: [
        { type: "tf", q: "Un verre « vide » est en réalité plein d'air.", answer: true, explain: "L'air occupe de la place : l'expérience du mouchoir sec le démontre." },
        { type: "mc", q: "Quel est le gaz le plus abondant dans l'air ?", options: ["Oxygène", "Azote", "Dioxyde de carbone"], answer: 1, explain: "L'azote : environ 78 parties sur 100." },
        { type: "num", q: "Sur 100 parties d'air, environ combien sont d'oxygène ?", answer: 21, explain: "Environ 21 sur 100." }
      ]
    },
    {
      type: "text",
      title: "Pourquoi l'air est important",
      html: `<ul>
<li>🫁 <b>Respiration</b> : les humains, les animaux et aussi les plantes prennent de l'<b>oxygène</b> et rejettent du <b>dioxyde de carbone</b>. Sans air, une personne ne résiste que quelques minutes.</li>
<li>🌿 <b>Photosynthèse</b> : le jour, les plantes vertes prennent du <b>dioxyde de carbone</b>, produisent leur nourriture grâce à la lumière du Soleil et libèrent de l'<b>oxygène</b>. Plantes et animaux s'entraident !</li>
<li>🔥 <b>Combustion</b> : le feu a besoin d'oxygène pour brûler.</li>
<li>🛡️ <b>Atmosphère</b> : la couche d'air qui enveloppe la Terre nous protège des rayons les plus dangereux du Soleil (grâce à l'<b>ozone</b>), retient la chaleur la nuit et fait brûler presque toutes les météorites avant qu'elles n'arrivent au sol (les « étoiles filantes » 🌠).</li>
<li>🌬️ <b>Vent et météo</b> : l'air qui bouge forme le vent, apporte les nuages et la pluie, fait tourner les éoliennes et gonfle les voiles.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Les couches de l'atmosphère",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#1e1b4b", label: "Exosphère : il n'y a presque plus d'air, beaucoup de satellites volent ici" },
          { r: 0.9, color: "#4338ca", label: "Thermosphère : aurores polaires et Station spatiale (environ 400 km)" },
          { r: 0.8, color: "#6366f1", label: "Mésosphère : c'est ici que brûlent les étoiles filantes" },
          { r: 0.7, color: "#38bdf8", label: "Stratosphère : la couche d'ozone qui nous protège" },
          { r: 0.6, color: "#bae6fd", label: "Troposphère : jusqu'à environ 12 km, c'est ici qu'il y a les nuages, la pluie et le vent" },
          { r: 0.5, color: "#16a34a", label: "Terre" }
        ]
      },
      caption: "L'atmosphère est divisée en couches (les épaisseurs ne sont pas à l'échelle). Nous vivons dans la troposphère, la plus proche de la Terre."
    },
    {
      type: "text",
      title: "L'air chaud monte, l'air froid descend",
      html: `<p>Quand l'air se <b>réchauffe</b>, il s'élargit (il se dilate) et devient plus <b>léger</b> : c'est pour ça qu'il <b>monte</b> vers le haut. L'air <b>froid</b> est plus lourd et <b>descend</b>.</p>
<ul>
<li>🎈 Les <b>montgolfières</b> volent parce qu'un brûleur chauffe l'air à l'intérieur du ballon.</li>
<li>🏠 Dans une pièce, on sent davantage la chaleur près du plafond.</li>
<li>🌬️ Le <b>vent</b> naît ainsi : l'air chaud monte et, à sa place, de l'air plus frais arrive d'un autre endroit.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple pratique : le ballon sur la bouteille",
      html: `<p>Avec un adulte : enfile un ballon dégonflé sur le goulot d'une bouteille en plastique vide.</p>
<ul>
<li>Mets la bouteille dans un bol d'<b>eau chaude</b> 🔥 : le ballon se <b>gonfle</b> un peu ! L'air à l'intérieur s'est réchauffé et dilaté.</li>
<li>Puis mets-la dans de l'<b>eau froide</b> 🧊 : le ballon se <b>dégonfle</b> de nouveau.</li>
</ul>
<p>Tu viens de démontrer que l'air chaud occupe plus de place que l'air froid !</p>`
    },
    {
      type: "text",
      title: "La pollution de l'air",
      html: `<p>L'air est <b>pollué</b> quand il reçoit des fumées et des substances nocives :</p>
<ul>
<li>🚗 gaz d'échappement des voitures, camions et scooters ;</li>
<li>🏭 fumées des usines et des centrales électriques ;</li>
<li>🏠 chauffage des maisons (surtout au bois, au fioul ou au charbon) ;</li>
<li>🔥 incendies et déchets brûlés.</li>
</ul>
<p>Les <b>particules fines</b> font du mal aux poumons et l'excès de <b>dioxyde de carbone</b> retient trop de chaleur et réchauffe la planète (<b>changement climatique</b>).</p>
<p>Que pouvons-nous faire ? 🚶 aller à pied ou à vélo, 🚌 utiliser les transports en commun, 🌳 planter des arbres, 💡 éteindre les lumières et le chauffage quand ils ne servent pas.</p>`
    },
    {
      type: "widget",
      title: "Est-ce bon ou mauvais pour l'air ?",
      widget: "classify",
      options: {
        groups: ["Aide l'air propre 🌳", "Pollue l'air 🏭"],
        items: [
          ["🚲 aller à l'école à vélo", 0],
          ["🔥 brûler du plastique dans le jardin", 1],
          ["🌳 planter des arbres", 0],
          ["🚗 laisser la voiture allumée à l'arrêt", 1],
          ["🚌 prendre le bus", 0],
          ["🏭 fumées des usines sans filtres", 1],
          ["🌡️ baisser un peu le chauffage", 0],
          ["🚶 faire le pédibus", 0]
        ]
      },
      caption: "Glisse chaque action dans le bon groupe."
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Chaque jour, tu respires <b>plus de 20 000 fois</b> ! Un enfant au repos fait environ 20 respirations par minute : en 24 heures, cela fait presque 29 000. Et l'air qui est au-dessus de nous appuie sur chaque centimètre carré de notre corps avec un poids d'environ <b>1 kilo</b> : nous ne le sentons pas parce que notre corps pousse vers l'extérieur avec la même force. Cette poussée s'appelle la <b>pression atmosphérique</b> et elle a été découverte par l'Italien <b>Evangelista Torricelli</b> en <b>1643</b>, qui a inventé le <b>baromètre</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Plus on monte en montagne, plus l'air est <b>raréfié</b> (il y en a moins). Au sommet de l'<b>Everest</b> (8849 m), chaque respiration n'apporte aux poumons qu'environ <b>un tiers</b> de l'oxygène que l'on respire au bord de la mer. C'est pour ça que presque tous les alpinistes utilisent des bouteilles d'oxygène. 🏔️ Et les avions volent à environ 10 000 mètres avec la cabine « pressurisée ».</p>`
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>L'air est de la matière : il occupe de la place, a un poids, peut être comprimé.</li>
<li>C'est un mélange : azote 78 %, oxygène 21 %, autres gaz 1 % (argon, CO₂…), plus vapeur d'eau et poussières.</li>
<li>Il sert à respirer, à la photosynthèse et à la combustion.</li>
<li>L'air chaud monte, l'air froid descend : c'est ainsi que naît le vent.</li>
<li>L'atmosphère nous protège ; la pollution l'abîme.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre l'air",
      intro: "L'air ne se voit pas : c'est pour ça qu'il est difficile à imaginer. Voici quelques façons de le « voir ».",
      tabs: [
        {
          label: "🐠 Nous sommes des poissons dans l'air",
          html: `<p>Pense aux <b>poissons</b> : ils vivent plongés dans l'eau et ne s'aperçoivent peut-être même pas qu'elle est là. Nous sommes pareils : nous vivons au <b>fond d'un « océan » d'air</b> haut de centaines de kilomètres !</p>
<p>Quand tu roules à vélo, tu sens l'air qui te pousse au visage, exactement comme tu sens l'eau quand tu nages. Et comme l'eau, l'air « pèse » aussi sur nous d'en haut : c'est la pression atmosphérique.</p>`
        },
        {
          label: "🎨 Les billes colorées",
          html: `<p>Imagine un sachet avec <b>100 billes</b> : 78 <b>bleues</b> (azote), 21 <b>rouges</b> (oxygène) et 1 <b>grise</b> (argon, dioxyde de carbone et autres gaz).</p>
<p>Chaque fois que tu respires, tu prends un « sachet » comme ça. Le corps utilise une partie des billes rouges et rend quelques billes de dioxyde de carbone. Les billes bleues entrent et sortent sans être utilisées !</p>
<p>Essaie de compter 78 billes bleues avec le compteur : ça fait beaucoup !</p>`,
          widget: "counter",
          options: { emoji: "🔵", max: 100 }
        },
        {
          label: "🌍 L'atmosphère comme la peau",
          html: `<p>Si la Terre était une <b>pomme</b>, l'atmosphère où il y a des nuages et de la pluie serait fine <b>comme la peau</b> ! 🍎</p>
<p>La troposphère n'est haute que de 10–12 km (jusqu'à environ 18 km à l'équateur), alors que le rayon de la Terre est d'environ 6371 km. C'est pour ça que nous devons en prendre soin : c'est une couche fine et précieuse.</p>`,
          scene: "globe",
          options: { points: [{ lat: 41.9, lon: 12.5, label: "Rome", color: "#ef4444" }, { lat: 27.99, lon: 86.93, label: "Everest : air raréfié", color: "#3b82f6" }] }
        },
        {
          label: "🔄 Plantes et animaux : l'échange",
          html: `<p>Les animaux (et nous) prennent de l'<b>oxygène</b> et rendent du <b>dioxyde de carbone</b>. Les plantes, le jour, font le contraire avec la photosynthèse : elles prennent du dioxyde de carbone et donnent de l'oxygène. C'est comme un <b>échange de cadeaux</b> entre amis !</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<circle cx="520" cy="45" r="28" fill="#facc15"/>
<rect x="100" y="150" width="20" height="80" fill="#92400e"/>
<circle cx="110" cy="120" r="60" fill="#22c55e"/>
<text x="110" y="250" font-size="20" text-anchor="middle" font-weight="bold" fill="#166534">plante</text>
<text x="470" y="170" font-size="70" text-anchor="middle">🧒</text>
<text x="470" y="250" font-size="20" text-anchor="middle" font-weight="bold" fill="#1d4ed8">enfant</text>
<defs><marker id="a1" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#dc2626"/></marker><marker id="a2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker></defs>
<path d="M190 100 Q300 50 410 100" stroke="#dc2626" stroke-width="5" fill="none" marker-end="url(#a1)"/>
<path d="M410 175 Q300 220 190 175" stroke="#475569" stroke-width="5" fill="none" marker-end="url(#a2)"/>
<text x="300" y="60" font-size="22" text-anchor="middle" fill="#dc2626" font-weight="bold">oxygène O₂</text>
<text x="300" y="235" font-size="22" text-anchor="middle" fill="#475569" font-weight="bold">dioxyde de carbone CO₂</text>
</svg>`
        },
        {
          label: "🎈 Expériences avec les mains",
          html: `<p>Trois essais très rapides pour « sentir » l'air :</p>
<ul>
<li>✋ Souffle sur la paume de ta main : tu sens l'air qui bouge.</li>
<li>📄 Laisse tomber une feuille ouverte et une feuille froissée en boule : la feuille ouverte descend doucement parce que l'air la <b>freine</b>.</li>
<li>🥤 Mets une paille dans l'eau, bouche le trou du haut avec le doigt et soulève-la : l'eau reste dedans ! C'est la <b>pression de l'air</b> qui la maintient.</li>
</ul>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de l'air : touche un nœud et découvre pourquoi",
      nodes: [
        { id: "aria", label: "Air", x: 50, y: 8, color: "#0ea5e9", html: "Mélange de gaz invisible qui enveloppe la Terre.", why: "Les anciens Grecs, comme Empédocle (Ve siècle av. J.-C.), pensaient que l'air était l'un des quatre « éléments » avec la terre, l'eau et le feu. Ce n'est qu'au XVIIIe siècle qu'on a découvert qu'il est fait de gaz différents." },
        { id: "materia", label: "C'est de la matière", x: 15, y: 28, color: "#64748b", html: "Il occupe de la place, a un poids, peut être comprimé et se dilate.", why: "Les expériences le démontrent : le verre renversé, le ballon gonflé qui pèse plus, la seringue bouchée. Torricelli, en 1643, a le premier mesuré le poids de l'air avec le baromètre à mercure." },
        { id: "azoto", label: "Azote 78 %", x: 38, y: 40, color: "#3b82f6", html: "Le gaz le plus abondant de l'air.", why: "Il a été découvert en 1772 par Daniel Rutherford. Le nom français <i>azote</i>, choisi par Lavoisier, veut dire « sans vie », parce que dans un récipient rempli seulement d'azote, un animal ne peut pas respirer." },
        { id: "ossigeno", label: "Oxygène 21 %", x: 62, y: 40, color: "#ef4444", html: "Le gaz que nous respirons et qui fait brûler le feu.", why: "Découvert dans les années 1770 par Carl Scheele et Joseph Priestley ; Antoine Lavoisier a compris son rôle dans la respiration et la combustion et lui a donné son nom." },
        { id: "co2", label: "Dioxyde de carbone", x: 85, y: 28, color: "#475569", html: "Gaz présent en petite quantité (environ 0,04 %).", why: "Il sert aux plantes pour la photosynthèse. En brûlant du charbon, du pétrole et du gaz, l'homme en a augmenté la quantité, et cela réchauffe la planète." },
        { id: "resp", label: "Respiration et photosynthèse", x: 50, y: 62, color: "#16a34a", html: "Les êtres vivants échangent des gaz avec l'air.", why: "L'oxygène est dans l'air grâce aux plantes et aux algues : il y a des milliards d'années, les premiers organismes qui faisaient la photosynthèse l'ont « rempli » d'oxygène." },
        { id: "atmo", label: "Atmosphère", x: 18, y: 78, color: "#6366f1", html: "La couche d'air autour de la Terre, divisée en troposphère, stratosphère, mésosphère, thermosphère, exosphère.", why: "Elle reste attachée à la Terre grâce à la force de gravité. La couche d'ozone dans la stratosphère filtre les rayons ultraviolets du Soleil." },
        { id: "vento", label: "Vent", x: 50, y: 92, color: "#f59e0b", html: "De l'air qui se déplace.", why: "Le Soleil réchauffe différemment la terre et la mer : l'air chaud monte, l'air froid vient prendre sa place." },
        { id: "inq", label: "Pollution", x: 82, y: 78, color: "#dc2626", html: "Fumées et poussières qui rendent l'air nocif.", why: "Elle naît surtout de la circulation, du chauffage et des industries. C'est pour ça qu'il existe des lois et des stations qui mesurent chaque jour la qualité de l'air." }
      ],
      edges: [
        ["aria", "materia", "est"],
        ["aria", "azoto", "contient de l'"],
        ["aria", "ossigeno", "contient de l'"],
        ["aria", "co2", "contient un peu de"],
        ["ossigeno", "resp", "sert à la"],
        ["co2", "resp", "sert à la"],
        ["aria", "atmo", "forme l'"],
        ["atmo", "vento", "bouge comme le"],
        ["co2", "inq", "augmente avec la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : l'air et la vie",
      questions: [
        { type: "mc", q: "Le jour, les plantes libèrent avec la photosynthèse…", options: ["de l'oxygène", "de l'azote", "de la fumée"], answer: 0, explain: "Elles prennent du dioxyde de carbone et libèrent de l'oxygène." },
        { type: "tf", q: "L'air chaud a tendance à descendre vers le bas.", answer: false, explain: "L'air chaud est plus léger et monte ; l'air froid descend." },
        { type: "mc", q: "Dans quelle couche de l'atmosphère y a-t-il les nuages et la pluie ?", options: ["Troposphère", "Exosphère", "Mésosphère"], answer: 0, explain: "La troposphère est la couche la plus basse, où se produisent les phénomènes météo." }
      ]
    }
  ],
  glossary: [
    { t: "Air", d: "Mélange de gaz (surtout azote et oxygène) qui enveloppe la Terre." },
    { t: "Gaz", d: "État de la matière sans forme ni volume propres : il occupe tout l'espace disponible." },
    { t: "Azote", d: "Le gaz le plus abondant de l'air (environ 78 %)." },
    { t: "Oxygène", d: "Gaz de l'air (environ 21 %) nécessaire pour respirer et pour brûler." },
    { t: "Dioxyde de carbone", d: "Gaz (CO₂) produit par la respiration et utilisé par les plantes dans la photosynthèse." },
    { t: "Atmosphère", d: "Enveloppe d'air qui entoure la Terre." },
    { t: "Pression atmosphérique", d: "La poussée que l'air exerce sur tout ce qui se trouve sous lui." },
    { t: "Poussières", d: "Minuscules particules de poussière, de pollen et de fumée en suspension dans l'air." },
    { t: "Pollution", d: "Présence dans l'air de substances nocives pour la santé et l'environnement." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "tf", q: "L'air n'a pas de poids.", answer: false, explain: "L'air est de la matière et a un poids : un ballon gonflé pèse plus qu'un ballon dégonflé." },
      { type: "mc", q: "Dans l'expérience du verre retourné, le mouchoir reste sec parce que…", options: ["le verre est magique", "l'air occupe la place et empêche l'eau d'entrer", "l'eau est trop froide"], answer: 1, explain: "L'air à l'intérieur du verre occupe de la place." },
      { type: "num", q: "Sur 100 parties d'air, environ combien sont d'azote ?", answer: 78, explain: "Environ 78 sur 100." },
      { type: "text", q: "Quel gaz de l'air respirons-nous et nous sert à vivre ?", answer: ["oxygène", "oxygene", "l'oxygène", "l'oxygene", "o2"], explain: "L'oxygène." },
      { type: "mc", q: "Les plantes, avec la photosynthèse, absorbent…", options: ["de l'oxygène", "du dioxyde de carbone", "de l'argon"], answer: 1, explain: "Elles absorbent du dioxyde de carbone et libèrent de l'oxygène." },
      { type: "tf", q: "Le feu a besoin d'oxygène pour brûler.", answer: true, explain: "Sans oxygène, la flamme s'éteint, comme dans l'expérience de la bougie sous le verre." },
      { type: "mc", q: "Pourquoi la montgolfière vole-t-elle ?", options: ["Parce que l'air chaud à l'intérieur du ballon est plus léger", "Parce qu'elle a un moteur à hélice", "Parce qu'elle est pleine d'eau"], answer: 0, explain: "L'air chauffé par le brûleur se dilate et devient plus léger que l'air autour." },
      { type: "mc", q: "Qui a inventé le baromètre en 1643 ?", options: ["Galilée", "Evangelista Torricelli", "Alessandro Volta"], answer: 1, explain: "Evangelista Torricelli, élève de Galilée." },
      { type: "order", q: "Range les couches de l'atmosphère de la plus basse à la plus haute.", items: ["Troposphère", "Stratosphère", "Mésosphère", "Thermosphère", "Exosphère"], explain: "En partant de la Terre : troposphère, stratosphère, mésosphère, thermosphère, exosphère." },
      { type: "mc", q: "Laquelle de ces actions aide à garder l'air propre ?", options: ["Brûler les déchets", "Aller à l'école à pied", "Laisser le moteur allumé"], answer: 1, explain: "Aller à pied ne produit pas de gaz d'échappement." },
      { type: "tf", q: "En haute montagne, l'air est plus raréfié et il y a moins d'oxygène à chaque respiration.", answer: true, explain: "En montant, il y a de moins en moins d'air : sur l'Everest, chaque respiration apporte environ un tiers de l'oxygène du niveau de la mer." },
      { type: "text", q: "Comment s'appelle la couche de gaz qui, dans la stratosphère, nous protège des rayons ultraviolets ?", answer: ["ozone", "l'ozone", "couche d'ozone", "la couche d'ozone"], explain: "C'est la couche d'ozone." }
    ]
  }
});
