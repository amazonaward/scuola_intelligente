TOPIC('fr', {
  id: "p2-geo-punti-riferimento",
  title: "Les points de repère",
  intro: "Comment fais-tu pour ne pas te perdre quand tu vas à l'école ou au parc ? 🤔 Tu utilises les <b>points de repère</b> : des choses que tu vois autour de toi et qui t'aident à comprendre <b>où tu es</b> et <b>où aller</b>. Aujourd'hui, nous apprenons à <b>nous orienter</b> 🧭.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce qu'un point de repère ? 📍",
      html: `<p>Un <b>point de repère</b> est quelque chose que l'on voit bien et qui <b>ne bouge pas</b>.</p>
<p>Par exemple, pour aller chez mamie : <i>« Je passe devant la <b>fontaine</b> ⛲, je tourne près de la <b>pharmacie</b> ➕ et la maison est celle avec la <b>grande porte verte</b> 🟩. »</i></p>
<p>Un bon point de repère est :</p>
<ul>
<li>👀 <b>facile à voir</b> (grand, coloré, haut) ;</li>
<li>🧱 <b>fixe</b> : il reste toujours là ;</li>
<li>⭐ <b>spécial</b> : il n'y en a pas beaucoup de pareils à côté.</li>
</ul>
<p><b>S'orienter</b>, c'est comprendre où l'on se trouve et quel chemin prendre.</p>`
    },
    {
      type: "text",
      title: "Fixes ou mobiles ? 🌳🚗",
      html: `<p>Attention : toutes les choses ne conviennent pas comme points de repère !</p>
<table>
<tr><th>✅ Fixes (ça convient)</th><th>❌ Mobiles (ça ne convient pas)</th></tr>
<tr><td>⛪ une église</td><td>🚗 une voiture garée</td></tr>
<tr><td>🌳 un grand arbre</td><td>🐕 un chien qui dort</td></tr>
<tr><td>⛲ une fontaine</td><td>🚌 l'autobus</td></tr>
<tr><td>🏔️ une montagne</td><td>☁️ un nuage</td></tr>
<tr><td>🏫 l'école</td><td>🧑 un monsieur assis sur le banc</td></tr>
</table>
<p>Si je dis <i>« Tourne là où il y a la voiture rouge »</i> et que la voiture s'en va… je suis perdu ! 😵</p>`
    },
    {
      type: "widget",
      title: "Jeu : fixe ou mobile ?",
      widget: "classify",
      options: {
        groups: ["🧱 Fixe : bon point de repère", "🚶 Mobile : ne convient pas"],
        items: [
          ["⛪ clocher", 0],
          ["🚲 vélo", 1],
          ["🌉 pont", 0],
          ["🐈 chat", 1],
          ["🏰 château", 0],
          ["🚚 camion", 1],
          ["🗼 tour", 0],
          ["🎈 ballon", 1],
          ["🚦 feu tricolore", 0]
        ]
      },
      caption: "Mets chaque chose dans le bon groupe."
    },
    {
      type: "text",
      title: "Les mots pour s'orienter ↔️↕️",
      html: `<p>Pour expliquer où se trouve une chose, nous utilisons les <b>mots de la position</b>. Ils dépendent de <b>celui qui regarde</b> !</p>
<ul>
<li>⬆️⬇️ <b>au-dessus</b> / <b>en dessous</b> : le cadre est <i>au-dessus</i> du tableau.</li>
<li>➡️⬅️ <b>devant</b> / <b>derrière</b> : le jardin est <i>derrière</i> l'école.</li>
<li>👈👉 <b>à gauche</b> / <b>à droite</b> : la porte est <i>à ma droite</i>.</li>
<li>🤏📏 <b>près</b> / <b>loin</b> : le café est <i>près</i> de la maison.</li>
<li>🎯 <b>au milieu</b> / <b>entre</b> : le banc est <i>entre</i> deux arbres.</li>
</ul>
<p>💡 <b>Astuce pour la droite :</b> la main droite est en général celle avec laquelle tu écris (si tu es gaucher, c'est l'autre !). Beaucoup d'enfants mettent un bracelet au poignet droit.</p>`
    },
    {
      type: "svg",
      title: "Où se trouve-t-il ? Regarde le dessin",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#bae6fd"/>
<rect y="230" width="600" height="90" fill="#86efac"/>
<rect x="230" y="110" width="150" height="120" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<polygon points="220,110 305,50 390,110" fill="#b91c1c"/>
<rect x="290" y="170" width="35" height="60" fill="#7c2d12"/>
<text x="305" y="150" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">ÉCOLE</text>
<rect x="95" y="160" width="16" height="70" fill="#78350f"/>
<circle cx="103" cy="140" r="40" fill="#16a34a"/>
<text x="103" y="265" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">arbre</text>
<circle cx="490" cy="215" r="28" fill="#93c5fd" stroke="#1e40af" stroke-width="3"/>
<rect x="484" y="170" width="12" height="30" fill="#64748b"/>
<text x="490" y="265" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">fontaine</text>
<circle cx="520" cy="50" r="28" fill="#facc15"/>
<text x="520" y="100" font-size="16" text-anchor="middle" fill="#92400e" font-weight="bold">soleil</text>
<rect x="400" y="280" width="60" height="22" rx="5" fill="#a16207"/>
<text x="430" y="297" font-size="13" text-anchor="middle" fill="#ffffff">banc</text>
<text x="160" y="300" font-size="17" text-anchor="middle" fill="#0f172a">L'arbre est à GAUCHE de l'école</text>
</svg>`,
      caption: "En regardant le dessin : l'arbre est à gauche de l'école, la fontaine à droite, le soleil au-dessus de la fontaine."
    },
    {
      type: "quiz",
      title: "Mini-quiz : regarde le dessin",
      questions: [
        { type: "mc", q: "Dans le dessin, qu'y a-t-il à droite de l'école ?", options: ["L'arbre", "La fontaine", "Rien"], answer: 1, explain: "La fontaine est à droite de l'école." },
        { type: "tf", q: "Une voiture garée est un bon point de repère.", answer: false, explain: "Les voitures se déplacent : ce n'est pas un point fixe." },
        { type: "mc", q: "Quel mot est le contraire de « près » ?", options: ["en dessous", "loin", "derrière"], answer: 1, explain: "Près ↔ loin." }
      ]
    },
    {
      type: "text",
      title: "Le Soleil : un point de repère dans le ciel ☀️",
      html: `<p>Le ciel aussi nous aide à nous orienter !</p>
<ul>
<li>🌅 Le matin, le Soleil <b>se lève</b> (il apparaît) d'un côté qui s'appelle l'<b>EST</b>.</li>
<li>🌞 À midi, il est haut vers le <b>SUD</b>.</li>
<li>🌇 Le soir, il <b>se couche</b> du côté opposé, à l'<b>OUEST</b>.</li>
<li>🧊 Derrière nous, quand nous regardons le Soleil de midi, il y a le <b>NORD</b>.</li>
</ul>
<p>Nord, Sud, Est et Ouest sont les <b>points cardinaux</b>. Ils sont les mêmes pour tout le monde, partout dans le monde : c'est pour cela qu'ils sont plus précis que « droite » et « gauche ».</p>
<p>🧭 La <b>boussole</b> a une aiguille aimantée qui indique toujours le <b>Nord</b>.</p>`
    },
    {
      type: "svg",
      title: "La rose des vents",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fefce8"/>
<circle cx="300" cy="160" r="120" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<polygon points="300,45 318,160 300,175 282,160" fill="#dc2626"/>
<polygon points="300,275 318,160 300,145 282,160" fill="#1e3a8a"/>
<polygon points="185,160 300,142 315,160 300,178" fill="#64748b"/>
<polygon points="415,160 300,142 285,160 300,178" fill="#f59e0b"/>
<circle cx="300" cy="160" r="8" fill="#0f172a"/>
<text x="300" y="30" font-size="22" text-anchor="middle" fill="#dc2626" font-weight="bold">N - Nord</text>
<text x="300" y="305" font-size="22" text-anchor="middle" fill="#1e3a8a" font-weight="bold">S - Sud</text>
<text x="490" y="168" font-size="22" text-anchor="middle" fill="#b45309" font-weight="bold">E - Est</text>
<text x="105" y="168" font-size="22" text-anchor="middle" fill="#475569" font-weight="bold">O - Ouest</text>
<text x="530" y="210" font-size="15" text-anchor="middle" fill="#b45309">le Soleil se lève</text>
<text x="80" y="210" font-size="15" text-anchor="middle" fill="#475569">le Soleil se couche</text>
</svg>`,
      caption: "La rose des vents montre les 4 points cardinaux. L'aiguille rouge de la boussole pointe vers le Nord."
    },
    {
      type: "example",
      title: "Exemple pratique : le chemin de l'école 🎒",
      html: `<p>Sara décrit son chemin en utilisant les points de repère :</p>
<ol>
<li>🏠 Je sors de chez moi et je vais vers la <b>boulangerie</b> 🥖.</li>
<li>➡️ À la boulangerie, je tourne <b>à droite</b>.</li>
<li>⛲ Je marche tout droit jusqu'à la <b>fontaine</b> de la place.</li>
<li>⬅️ À la fontaine, je tourne <b>à gauche</b>.</li>
<li>🏫 L'école est <b>devant</b> moi, à côté de l'<b>église</b> ⛪.</li>
</ol>
<p>Essaie toi aussi : écris le chemin de chez toi à l'école avec au moins <b>3 points de repère</b> !</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : perdu au parc de jeux 🎠",
      html: `<p>Luca s'est éloigné de maman et ne la voit plus. Que fait-il ?</p>
<ul>
<li>😮‍💨 Il s'arrête et il respire.</li>
<li>👀 Il cherche un <b>point de repère</b> qu'il connaît : le grand <b>toboggan jaune</b>, près de l'endroit où ils s'étaient assis.</li>
<li>🚶 Il retourne vers le toboggan et il attend là.</li>
</ul>
<p>💡 Un conseil : quand tu arrives dans un endroit nouveau, choisis avec tes parents un <b>point de rendez-vous</b> facile à voir (« on se retrouve sous la grande horloge »).</p>`
    },
    {
      type: "3d",
      title: "Les points de repère de la nature 🏞️",
      scene: "terrain",
      caption: "Fais tourner le paysage et touche les différentes parties : ce sont des points de repère naturels, grands et fixes.",
      options: {
        features: {
          mountain: { label: "Montagne", html: "On la voit de très loin et elle ne bouge jamais : un point de repère parfait. Celui qui vit à Turin, par exemple, voit les Alpes et le Mont Viso." },
          peak: { label: "Sommet", html: "La pointe de la montagne. Les randonneurs l'utilisent pour comprendre dans quelle direction marcher." },
          river: { label: "Fleuve", html: "En suivant un fleuve, on arrive à la mer ou à un lac. Beaucoup de villes sont nées le long des fleuves : « j'habite de ce côté-ci ou de l'autre côté du fleuve »." },
          lake: { label: "Lac", html: "Une grande étendue d'eau douce calme : facile à reconnaître même d'en haut." },
          hill: { label: "Colline", html: "Plus basse que la montagne. Souvent, sur les collines, il y a un château ou une église que l'on voit de loin." },
          valley: { label: "Vallée", html: "La partie basse entre deux montagnes. Souvent il y a un fleuve et la route principale y passe." },
          sea: { label: "Mer", html: "Sur la côte, la mer est un excellent repère : « la plage est de ce côté-là »." }
        }
      }
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? 🗿",
      html: `<p>Dans le Grand Nord du Canada, où il n'y a que de la neige et de la glace et où tout semble pareil, le peuple <b>Inuit</b> construit des <b>inukshuk</b> : des tas de pierres en forme de personne. Ils servent de <b>points de repère</b> pour indiquer le chemin, un bon endroit pour pêcher ou un danger.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? 🐝",
      html: `<p>Les animaux aussi utilisent les points de repère ! Les <b>abeilles</b> se souviennent des arbres et des maisons pour retourner à la ruche et utilisent le <b>Soleil</b> comme boussole. Les <b>pigeons voyageurs</b> savent rentrer chez eux depuis des centaines de kilomètres, en s'aidant du Soleil, du champ magnétique de la Terre et des fleuves et des routes qu'ils voient d'en haut.</p>`
    },
    {
      type: "widget",
      title: "Trouve les points de repère sur le plan",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#dcfce7"/>
<rect x="0" y="130" width="600" height="40" fill="#9ca3af"/>
<rect x="280" y="0" width="40" height="300" fill="#9ca3af"/>
<rect x="60" y="40" width="120" height="70" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<rect x="400" y="30" width="80" height="80" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<circle cx="440" cy="70" r="12" fill="#92400e"/>
<circle cx="300" cy="150" r="22" fill="#60a5fa" stroke="#1e40af" stroke-width="3"/>
<circle cx="120" cy="230" r="35" fill="#16a34a"/>
<rect x="400" y="200" width="120" height="70" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>
</svg>`,
        spots: [
          { x: 120, y: 75, label: "École" },
          { x: 440, y: 70, label: "Église avec son clocher" },
          { x: 300, y: 150, label: "Fontaine" },
          { x: 120, y: 230, label: "Grand arbre" },
          { x: 460, y: 235, label: "Bibliothèque" }
        ]
      },
      caption: "Clique sur chaque point et choisis le nom. La fontaine est juste au croisement des deux rues !"
    },
    {
      type: "alternatives",
      title: "D'autres façons de s'orienter",
      intro: "Dans le monde, les gens s'orientent de plein de façons différentes. Essaie de les découvrir !",
      tabs: [
        {
          label: "🌊 Les navigateurs polynésiens",
          html: `<p>Dans l'océan Pacifique, il y a des milliers d'années, les <b>Polynésiens</b> voyageaient d'une île à l'autre en pirogue, sur des milliers de kilomètres, <b>sans boussole ni cartes</b> !</p>
<ul>
<li>⭐ La nuit, ils regardaient les <b>étoiles</b> : chacune se lève à un endroit précis de l'horizon.</li>
<li>🌊 Ils sentaient la forme des <b>vagues</b> sous la pirogue.</li>
<li>🐦 Ils suivaient les <b>oiseaux</b> marins, qui le soir retournent vers la terre.</li>
<li>☁️ Ils cherchaient les <b>nuages</b> immobiles au-dessus des îles.</li>
</ul>
<p>Pour eux, les étoiles, les vagues et les oiseaux étaient des points de repère !</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -17.5, lon: -149.6, label: "Tahiti", color: "#f97316" },
              { lat: 19.6, lon: -155.5, label: "Hawaï", color: "#ef4444" },
              { lat: -41, lon: 174, label: "Nouvelle-Zélande", color: "#22c55e" },
              { lat: -27.1, lon: -109.4, label: "Île de Pâques", color: "#a855f7" }
            ],
            routes: [{ points: [0, 1], color: "#0ea5e9" }, { points: [0, 2], color: "#0ea5e9" }, { points: [0, 3], color: "#0ea5e9" }]
          }
        },
        {
          label: "🎶 Les « pistes des rêves » australiennes",
          html: `<p>Les peuples <b>aborigènes</b> d'Australie ont les <b>songlines</b>, les « pistes des chants » : de longues chansons qui décrivent, l'un après l'autre, les points de repère du voyage (un rocher, un point d'eau, une colline).</p>
<p>En chantant la chanson, on se souvient du chemin ! 🎵 C'est un peu comme si tu inventais une comptine : <i>« Chez le boulanger je tourne à droite, la fontaine fait la fête, puis à gauche il y a l'église… »</i></p>`
        },
        {
          label: "🤖 Comme le GPS de la voiture",
          html: `<p>Le <b>GPS</b> des téléphones et des voitures parle justement avec des points de repère : <i>« Dans 200 mètres, au rond-point, prenez la deuxième sortie »</i>.</p>
<p>Il sait où tu es grâce aux <b>satellites</b> qui tournent autour de la Terre 🛰️ : le téléphone reçoit leurs signaux et calcule sa position. Mais le GPS aussi a besoin d'une <b>carte</b> et de mots comme droite, gauche, tout droit.</p>`
        },
        {
          label: "🧍 Le jeu du corps",
          html: `<p>Mets-toi debout au milieu de la pièce. 🧍</p>
<ol>
<li>Montre avec la main droite la <b>porte</b>.</li>
<li>Tourne-toi : maintenant la porte est <b>derrière</b> toi !</li>
<li>Tourne-toi encore d'un quart de tour : est-elle maintenant à <b>gauche</b> ?</li>
</ol>
<p>Tu as découvert que <b>droite, gauche, devant et derrière changent</b> si tu te tournes, mais la porte reste toujours là. C'est pour cela que les points de repère fixes sont si utiles !</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f1f5f9"/>
<circle cx="300" cy="80" r="26" fill="#fcd9b6" stroke="#92400e" stroke-width="2"/>
<rect x="278" y="108" width="44" height="70" rx="8" fill="#3b82f6"/>
<line x1="230" y1="130" x2="278" y2="125" stroke="#334155" stroke-width="8"/>
<line x1="322" y1="125" x2="370" y2="130" stroke="#334155" stroke-width="8"/>
<text x="160" y="140" font-size="20" text-anchor="middle" fill="#b91c1c" font-weight="bold">GAUCHE</text>
<text x="450" y="140" font-size="20" text-anchor="middle" fill="#15803d" font-weight="bold">DROITE</text>
<text x="300" y="30" font-size="20" text-anchor="middle" fill="#0f172a" font-weight="bold">DEVANT (vers toi)</text>
<text x="300" y="208" font-size="16" text-anchor="middle" fill="#475569">L'enfant te regarde : sa droite est de ton côté gauche !</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : comment nous nous orientons",
      nodes: [
        { id: "orientarsi", label: "S'orienter", x: 50, y: 6, color: "#6366f1", html: "<p>Comprendre où nous sommes et où aller.</p>", why: "<p>Le mot vient d'<b>Orient</b>, c'est-à-dire l'Est, où le Soleil se lève. Autrefois, les cartes et les églises se dessinaient et se construisaient « en regardant vers l'Orient » : s'orienter voulait dire justement trouver l'Est.</p>" },
        { id: "riferimento", label: "Points de repère", x: 25, y: 30, color: "#f97316", html: "<p>Des choses fixes et bien visibles : une église, un arbre, une fontaine.</p>", why: "<p>Notre cerveau se souvient mieux des <b>images</b> que des mots. Dans le cerveau, il y a une partie, l'<b>hippocampe</b>, qui crée une sorte de « carte » des lieux : les scientifiques qui l'ont découvert ont reçu le prix Nobel en 2014.</p>" },
        { id: "posizione", label: "Mots de la position", x: 75, y: 30, color: "#0ea5e9", html: "<p>Au-dessus, en dessous, devant, derrière, droite, gauche, près, loin.</p>", why: "<p>Ces mots dépendent de <b>celui qui regarde</b> : ta droite est la gauche de celui qui est en face de toi. C'est pour cela qu'ils sont pratiques mais peuvent prêter à confusion.</p>" },
        { id: "fissi", label: "Fixes et mobiles", x: 10, y: 55, color: "#16a34a", html: "<p>Seules les choses qui ne bougent pas sont de bons repères.</p>", why: "<p>Un repère doit toujours être au même endroit, sinon la description du chemin ne marche plus la fois suivante.</p>" },
        { id: "sole", label: "Le Soleil", x: 45, y: 55, color: "#eab308", html: "<p>Il se lève à l'est et se couche à l'ouest.</p>", why: "<p>Le Soleil semble bouger dans le ciel, mais en réalité c'est la <b>Terre qui tourne</b> sur elle-même d'ouest en est, une fois par jour. C'est pour cela que nous voyons toujours le Soleil apparaître du côté de l'est.</p>" },
        { id: "cardinali", label: "Points cardinaux", x: 75, y: 72, color: "#ef4444", html: "<p>Nord, Sud, Est, Ouest.</p>", why: "<p>Ils sont les mêmes pour tout le monde, partout dans le monde, parce qu'ils dépendent de la Terre et pas de nous. On les appelle « cardinaux » du latin <i>cardo</i>, gond : ce sont les « gonds » sur lesquels tourne l'orientation.</p>" },
        { id: "bussola", label: "La boussole", x: 45, y: 92, color: "#a855f7", html: "<p>Instrument avec une aiguille qui indique le Nord.</p>", why: "<p>La Terre est comme un énorme <b>aimant</b> : l'aiguille aimantée se tourne vers le Nord. La boussole fut inventée en <b>Chine</b> et arriva en Europe au Moyen Âge ; les marins d'<b>Amalfi</b> l'utilisaient beaucoup.</p>" },
        { id: "mappe", label: "Cartes", x: 15, y: 85, color: "#14b8a6", html: "<p>Des dessins des lieux vus d'en haut.</p>", why: "<p>Sur une carte, les points de repère sont dessinés avec des <b>symboles</b> : ainsi, n'importe qui peut trouver son chemin même dans un endroit jamais vu.</p>" }
      ],
      edges: [
        ["orientarsi", "riferimento", "avec les"],
        ["orientarsi", "posizione", "avec les"],
        ["riferimento", "fissi", "doivent être"],
        ["orientarsi", "sole", "aussi avec le"],
        ["sole", "cardinali", "indique les"],
        ["cardinali", "bussola", "trouvés avec la"],
        ["riferimento", "mappe", "dessinés sur les"],
        ["posizione", "cardinali", "plus précis :"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : le Soleil et la boussole",
      questions: [
        { type: "mc", q: "De quel côté le Soleil se lève-t-il ?", options: ["Nord", "Est", "Ouest"], answer: 1, explain: "Le Soleil se lève à l'Est." },
        { type: "mc", q: "Vers où pointe l'aiguille de la boussole ?", options: ["Vers le Nord", "Vers le Soleil", "Vers la maison"], answer: 0, explain: "L'aiguille aimantée indique toujours le Nord." },
        { type: "num", q: "Combien y a-t-il de points cardinaux ?", answer: 4, tol: 0, explain: "Nord, Sud, Est et Ouest." }
      ]
    },
    {
      type: "remember",
      title: "À retenir 📌",
      html: `<ul>
<li>Un <b>point de repère</b> est une chose <b>fixe</b> et <b>facile à voir</b>.</li>
<li>Les mots de la position (droite, gauche, devant, derrière…) <b>changent</b> si nous nous tournons.</li>
<li>Le Soleil se lève à l'<b>Est</b> et se couche à l'<b>Ouest</b>.</li>
<li>Les <b>points cardinaux</b> sont le Nord, le Sud, l'Est, l'Ouest ; la <b>boussole</b> indique le Nord.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Point de repère", d: "Une chose fixe et bien visible qui nous aide à nous orienter." },
    { t: "S'orienter", d: "Comprendre où l'on se trouve et quelle direction prendre." },
    { t: "Fixe", d: "Qui ne bouge jamais." },
    { t: "Mobile", d: "Qui peut être déplacé ou qui bouge tout seul." },
    { t: "Points cardinaux", d: "Nord, Sud, Est, Ouest : les directions identiques pour tout le monde." },
    { t: "Boussole", d: "Instrument avec une aiguille magnétique qui indique le Nord." },
    { t: "Rose des vents", d: "Dessin en forme d'étoile qui montre les points cardinaux." },
    { t: "Parcours", d: "Le chemin que l'on fait pour aller d'un endroit à un autre." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quel est le meilleur point de repère ?", options: ["🐕 Un chien", "⛪ Un clocher", "☁️ Un nuage"], answer: 1, explain: "Le clocher est fixe et se voit de loin." },
      { type: "tf", q: "Un point de repère doit être fixe.", answer: true, explain: "S'il bouge, il ne nous aide plus à trouver le chemin." },
      { type: "mc", q: "Le contraire de « au-dessus » est…", options: ["en dessous", "derrière", "loin"], answer: 0, explain: "Au-dessus ↔ en dessous." },
      { type: "mc", q: "Le Soleil se couche à…", options: ["l'Est", "l'Ouest", "le Nord"], answer: 1, explain: "Il se lève à l'Est et se couche à l'Ouest." },
      { type: "text", q: "Comment s'appelle l'instrument qui indique le Nord ?", answer: ["boussole", "la boussole"], explain: "La boussole, avec son aiguille aimantée." },
      { type: "order", q: "Mets dans l'ordre le parcours de Sara : maison → … → école.", items: ["Je sors de chez moi", "À la boulangerie, je tourne à droite", "J'arrive à la fontaine", "Je tourne à gauche", "J'entre à l'école"], explain: "C'est l'ordre du chemin décrit dans l'exemple." },
      { type: "tf", q: "Si je me tourne, ma droite et ma gauche changent par rapport aux choses autour de moi.", answer: true, explain: "Droite et gauche dépendent de la façon dont je suis tourné." },
      { type: "mc", q: "Une personne est en face de toi et lève sa main droite. De quel côté la vois-tu ?", options: ["À ma droite", "À ma gauche", "Au-dessus de moi"], answer: 1, explain: "Celui qui est en face de toi est tourné dans l'autre sens : sa droite est de ton côté gauche." },
      { type: "num", q: "Combien y a-t-il de points cardinaux ?", answer: 4, tol: 0, explain: "Nord, Sud, Est, Ouest." },
      { type: "mc", q: "Que construisent les Inuits pour indiquer le chemin ?", options: ["Des inukshuk, des tas de pierres", "Des feux tricolores", "Des tours de glace"], answer: 0, explain: "Les inukshuk sont des points de repère en pierre." },
      { type: "text", q: "Le point cardinal opposé au Nord est le…", answer: ["sud", "le sud"], explain: "Nord ↔ Sud, Est ↔ Ouest." }
    ]
  }
});
