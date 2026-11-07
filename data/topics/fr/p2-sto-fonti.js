TOPIC('fr', {
  id: "p2-sto-fonti",
  title: "Les sources",
  intro: "Comment savons-nous ce qui s'est passé il y a très longtemps, quand nous n'étions pas là ? 🤔 Nous faisons comme les <b>détectives</b> 🕵️ : nous cherchons les <b>traces</b> du passé. Ces traces s'appellent des <b>sources</b>.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce qu'une source ?",
      html: `<p>Une <b>source historique</b> est <b>n'importe quoi</b> qui nous donne des informations sur le passé.</p>
<p>Le mot « source » désigne aussi l'endroit où l'eau jaillit ⛲ : comme l'eau sort de la source, les <b>informations</b> sortent de la source historique.</p>
<p>Les personnes qui étudient les sources pour reconstituer le passé s'appellent des <b>historiens</b> 📚. Celles qui cherchent les traces en creusant dans la terre s'appellent des <b>archéologues</b> ⛏️.</p>`
    },
    {
      type: "text",
      title: "Les quatre types de sources",
      html: `<ul>
<li>📜 <b>Sources écrites</b> : tout ce qui contient des mots écrits. Lettres, journaux intimes, livres, journaux, bulletins scolaires, cartes postales, documents, inscriptions sur les monuments.</li>
<li>🧸 <b>Sources matérielles</b> : des objets que l'on peut toucher. Jouets, vêtements, outils, pièces de monnaie, maisons, ossements, vases.</li>
<li>🖼️ <b>Sources iconographiques</b> (ou visuelles) : des images. Photographies, dessins, peintures, vidéos, cartes.</li>
<li>🗣️ <b>Sources orales</b> : les récits racontés de vive voix. Les souvenirs des grands-parents, les chansons, les comptines, les interviews enregistrées.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Les sources de l'histoire de papy",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<rect x="20" y="30" width="130" height="170" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<rect x="165" y="30" width="130" height="170" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<rect x="310" y="30" width="130" height="170" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="455" y="30" width="130" height="170" rx="12" fill="#fce7f3" stroke="#be185d" stroke-width="3"/>
<rect x="45" y="60" width="80" height="95" fill="#ffffff" stroke="#92400e" stroke-width="2"/>
<line x1="55" y1="80" x2="115" y2="80" stroke="#92400e" stroke-width="3"/><line x1="55" y1="97" x2="115" y2="97" stroke="#92400e" stroke-width="3"/><line x1="55" y1="114" x2="105" y2="114" stroke="#92400e" stroke-width="3"/><line x1="55" y1="131" x2="110" y2="131" stroke="#92400e" stroke-width="3"/>
<text x="230" y="125" font-size="56" text-anchor="middle">🧸</text>
<rect x="335" y="60" width="80" height="95" fill="#ffffff" stroke="#1e3a8a" stroke-width="4"/>
<circle cx="375" cy="95" r="15" fill="#94a3b8"/><path d="M350 150 Q375 105 400 150 Z" fill="#94a3b8"/>
<text x="520" y="125" font-size="56" text-anchor="middle">👴</text>
<text x="85" y="230" font-size="18" text-anchor="middle" font-weight="bold" fill="#92400e">écrite</text>
<text x="85" y="252" font-size="14" text-anchor="middle" fill="#78350f">une lettre</text>
<text x="230" y="230" font-size="18" text-anchor="middle" font-weight="bold" fill="#166534">matérielle</text>
<text x="230" y="252" font-size="14" text-anchor="middle" fill="#14532d">son ourson</text>
<text x="375" y="230" font-size="18" text-anchor="middle" font-weight="bold" fill="#1d4ed8">iconographique</text>
<text x="375" y="252" font-size="14" text-anchor="middle" fill="#1e3a8a">une vieille photo</text>
<text x="520" y="230" font-size="18" text-anchor="middle" font-weight="bold" fill="#be185d">orale</text>
<text x="520" y="252" font-size="14" text-anchor="middle" fill="#831843">ses récits</text>
<text x="300" y="288" font-size="17" text-anchor="middle" fill="#334155">ensemble, elles racontent comment était son enfance</text>
</svg>`,
      caption: "Une lettre, un jouet, une photo et un récit : quatre sources différentes pour connaître l'histoire de papy."
    },
    {
      type: "widget",
      title: "Quel type de source est-ce ?",
      widget: "classify",
      options: {
        groups: ["📜 Écrite", "🧸 Matérielle", "🖼️ Iconographique", "🗣️ Orale"],
        items: [
          ["le bulletin scolaire de maman", 0],
          ["une pièce de monnaie ancienne", 1],
          ["une photo du mariage des grands-parents", 2],
          ["le récit de l'arrière-grand-mère", 3],
          ["un journal intime", 0],
          ["un vase romain", 1],
          ["un tableau dans un musée", 2],
          ["une berceuse chantée par papy", 3],
          ["un vieux ticket de train", 0],
          ["mon premier petit chausson", 1]
        ]
      },
      caption: "Souviens-toi : s'il y a des mots écrits, elle est écrite ; si c'est une image, elle est iconographique ; si c'est un objet, elle est matérielle ; si c'est un récit de vive voix, elle est orale."
    },
    {
      type: "quiz",
      title: "Mini-quiz : les types de sources",
      questions: [
        { type: "mc", q: "Une vieille photographie est une source…", options: ["écrite", "iconographique", "orale"], answer: 1, explain: "Les images (photos, dessins, peintures) sont des sources iconographiques." },
        { type: "mc", q: "Le récit de papy est une source…", options: ["orale", "matérielle", "écrite"], answer: 0, explain: "Les informations racontées de vive voix sont des sources orales." },
        { type: "tf", q: "Un jouet ancien est une source matérielle.", answer: true, explain: "C'est un objet que l'on peut toucher : source matérielle." }
      ]
    },
    {
      type: "example",
      title: "Exemple : mon histoire personnelle 👶",
      html: `<p>Toi aussi, tu as une histoire ! Pour la reconstituer, tu peux utiliser plein de sources :</p>
<ul>
<li>📜 l'<b>acte de naissance</b> ou le bracelet de l'hôpital (écrite) : il te dit <b>quand et où</b> tu es né ;</li>
<li>🖼️ les <b>photos</b> et les vidéos de quand tu étais petit (iconographiques) : comment tu étais ;</li>
<li>🧸 ta première <b>tétine</b>, tes chaussons, ton premier dessin (matérielles) ;</li>
<li>🗣️ les <b>récits de maman et papa</b> (orales) : ton premier mot, tes premiers pas.</li>
</ul>
<p>En les mettant en ordre sur la <b>frise chronologique</b>, tu reconstitues ton histoire !</p>`
    },
    {
      type: "widget",
      title: "La frise chronologique de Marco",
      widget: "timeline",
      options: {
        unit: "anni",
        events: [
          { year: 2019, label: "Naissance de Marco (acte de naissance)", icon: "👶" },
          { year: 2020, label: "Les premiers pas (vidéo de maman)", icon: "🚶" },
          { year: 2022, label: "École maternelle (photo du premier jour)", icon: "🎒" },
          { year: 2023, label: "Il perd sa première dent de lait (il la garde dans une petite boîte)", icon: "🦷" },
          { year: 2025, label: "CP (le premier cahier)", icon: "✏️" },
          { year: 2026, label: "CE1", icon: "📚" }
        ]
      },
      caption: "Chaque moment de l'histoire de Marco est raconté par une source différente."
    },
    {
      type: "text",
      title: "L'historien est un détective",
      html: `<p>Pour bien comprendre le passé, l'historien procède ainsi :</p>
<ol>
<li>🔍 Il <b>cherche</b> les sources : à la maison, dans les musées, dans les <b>archives</b> (où l'on conserve les documents), dans les bibliothèques, sous terre.</li>
<li>❓ Il <b>pose des questions</b> à la source : qu'est-ce que c'est ? Qui l'a faite ? Quand ? À quoi servait-elle ?</li>
<li>⚖️ Il <b>compare</b> plusieurs sources : si elles disent la même chose, l'information est plus sûre.</li>
<li>✍️ Il <b>raconte</b> : il écrit l'histoire de ce qu'il a découvert.</li>
</ol>
<p>⚠️ Attention : les sources aussi peuvent <b>se tromper</b> ! Papy peut mal se souvenir d'une date ; une photo peut ne montrer qu'une partie de la scène. C'est pour cela qu'il faut les comparer.</p>`
    },
    {
      type: "widget",
      title: "La fouille de l'archéologue",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#e0f2fe"/>
<rect y="40" width="600" height="60" fill="#a3e635"/>
<rect y="100" width="600" height="70" fill="#d6a46b"/>
<rect y="170" width="600" height="70" fill="#b07a4a"/>
<rect y="240" width="600" height="80" fill="#7c4a2a"/>
<text x="560" y="78" font-size="16" text-anchor="end" fill="#14532d" font-weight="bold">aujourd'hui</text>
<text x="560" y="300" font-size="16" text-anchor="end" fill="#fde68a" font-weight="bold">il y a très très longtemps</text>
<rect x="80" y="62" width="40" height="22" rx="4" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/>
<circle cx="230" cy="135" r="16" fill="#facc15" stroke="#a16207" stroke-width="3"/>
<path d="M350 185 L400 185 L392 225 L358 225 Z" fill="#ea580c" stroke="#7c2d12" stroke-width="3"/>
<path d="M160 270 L240 285 M175 262 L170 295" stroke="#f5f5f4" stroke-width="8" stroke-linecap="round"/>
<line x1="0" y1="100" x2="600" y2="100" stroke="#78350f" stroke-width="2"/>
<line x1="0" y1="170" x2="600" y2="170" stroke="#78350f" stroke-width="2"/>
<line x1="0" y1="240" x2="600" y2="240" stroke="#78350f" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 100, y: 73, label: "Canette d'aujourd'hui" },
          { x: 230, y: 135, label: "Pièce de monnaie d'il y a 100 ans" },
          { x: 375, y: 205, label: "Vase romain" },
          { x: 200, y: 278, label: "Ossements préhistoriques" }
        ]
      },
      caption: "Le sol se forme par couches, comme un gâteau : les couches les plus basses sont les plus anciennes. Clique sur chaque objet et choisis ce que c'est, en partant du haut (le plus récent)."
    },
    {
      type: "example",
      title: "Exemple : l'école des grands-parents 🏫",
      html: `<p>Tu veux savoir comment était l'école de papy, il y a 60 ans ?</p>
<ul>
<li>🗣️ <b>Tu l'interviewes</b> : « Il n'y avait qu'une seule maîtresse, on écrivait avec la plume et l'encre. »</li>
<li>🖼️ Tu regardes la <b>photo de classe</b> : des blouses noires et des cols blancs, des bancs en bois.</li>
<li>📜 Tu lis son <b>bulletin</b> : les notes étaient écrites à la main.</li>
<li>🧸 Tu trouves au grenier son <b>encrier</b>.</li>
</ul>
<p>Les quatre sources disent la même chose : maintenant, tu es sûr ! ✅</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Ötzi, l'homme venu des glaces",
      html: `<p>En <b>1991</b>, deux randonneurs allemands trouvèrent un corps dans le glacier du Similaun, dans les Alpes, à la frontière entre l'Italie et l'Autriche. Ils pensaient que c'était un alpiniste malchanceux… mais c'était un homme qui avait vécu il y a plus de <b>5 000 ans</b> ! ❄️</p>
<p>On l'appela <b>Ötzi</b>. La glace l'avait conservé avec ses vêtements, sa hache de cuivre, son arc et ses flèches : des sources matérielles précieuses ! Aujourd'hui, il se trouve au Musée archéologique de <b>Bolzano</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La ville sous les cendres",
      html: `<p>En l'an <b>79 apr. J.-C.</b>, le volcan <b>Vésuve</b> entra en éruption et ensevelit la ville romaine de <b>Pompéi</b> sous des mètres de cendres et de lapilli. 🌋</p>
<p>Les cendres ont conservé des maisons, des rues, des peintures, du pain dans les fours et même les inscriptions sur les murs, comme nos graffitis ! Les fouilles ont commencé en <b>1748</b> et continuent encore aujourd'hui : Pompéi est une gigantesque source pour connaître la vie des Romains.</p>`
    },
    {
      type: "3d",
      title: "Voyage dans le temps : des sources célèbres",
      scene: "spacetime",
      caption: "La carte est la base, la hauteur est le temps. En bas, il y a le moment où la source a été faite ; plus haut, celui où elle a été découverte ou comprise. Touche les événements et suis les flèches.",
      options: {
        lat: [30, 56],
        lon: [-5, 32],
        years: [-3500, 2000],
        places: [
          { lat: 46.5, lon: 11.35, label: "Bolzano" },
          { lat: 40.75, lon: 14.49, label: "Pompéi" },
          { lat: 31.4, lon: 30.42, label: "Rosette (Égypte)" },
          { lat: 48.85, lon: 2.35, label: "Paris" },
          { lat: 55.0, lon: -2.36, label: "Vindolanda" }
        ],
        events: [
          { id: "otzi", lat: 46.78, lon: 10.84, year: -3300, label: "Ötzi meurt dans les Alpes", html: "Un homme de l'<b>âge du cuivre</b> meurt sur un col alpin, à plus de 3 200 mètres. La neige et la glace le recouvrent et le conservent pendant plus de 5 000 ans, avec ses vêtements et ses outils." },
          { id: "otzi2", lat: 46.5, lon: 11.35, year: 1991, label: "Ötzi est retrouvé", html: "Le 19 septembre 1991, deux randonneurs trouvent le corps dans le glacier du Similaun. Les scientifiques étudient tout : ce qu'il avait mangé, ses maladies, même ses <b>61 tatouages</b>. Aujourd'hui, il est au Musée archéologique de Bolzano.", causes: ["otzi"] },
          { id: "rosetta", lat: 31.4, lon: 30.42, year: -196, label: "La pierre de Rosette", html: "En Égypte, on grave une pierre avec le même texte en trois écritures : <b>hiéroglyphique</b>, <b>démotique</b> et <b>grecque</b>. C'est une source écrite qui deviendra la « clé » pour lire les hiéroglyphes." },
          { id: "champollion", lat: 48.85, lon: 2.35, year: 1822, label: "Champollion lit les hiéroglyphes", html: "En comparant le grec de la pierre (retrouvée en 1799) avec les hiéroglyphes, le Français <b>Jean-François Champollion</b> réussit à les déchiffrer. Des milliers de sources écrites égyptiennes deviennent enfin lisibles !", causes: ["rosetta"] },
          { id: "pompei", lat: 40.75, lon: 14.49, year: 79, label: "Le Vésuve ensevelit Pompéi", html: "L'éruption du <b>Vésuve</b> recouvre Pompéi et Herculanum. L'écrivain romain <b>Pline le Jeune</b> la vit de loin et la décrivit dans deux lettres : une source écrite qui confirme la source matérielle." },
          { id: "scavi", lat: 40.76, lon: 14.5, year: 1748, label: "Début des fouilles de Pompéi", html: "Les fouilles commencent. Plus tard, en 1863, l'archéologue <b>Giuseppe Fiorelli</b> invente une méthode : il verse du plâtre dans les vides laissés dans la cendre et obtient les <b>moulages</b> des personnes et des animaux.", causes: ["pompei"] },
          { id: "vindolanda", lat: 55.0, lon: -2.36, year: 100, label: "Les tablettes de Vindolanda", html: "Dans un fort romain de Bretagne, des soldats et des familles écrivent des lettres sur de fines <b>tablettes de bois</b>. Il y a même une invitation à une fête d'anniversaire ! Retrouvées depuis 1973, elles comptent parmi les plus anciennes lettres manuscrites d'Europe." },
          { id: "foto", lat: 46.72, lon: 4.85, year: 1827, label: "La première photographie", html: "En France, <b>Nicéphore Niépce</b> réussit à fixer l'image de la vue depuis sa fenêtre : c'est la plus ancienne photographie parvenue jusqu'à nous (1826–1827). Depuis, les photos deviennent de précieuses sources iconographiques." },
          { id: "voce", lat: 48.86, lon: 2.34, year: 1860, label: "La première voix enregistrée", html: "À Paris, <b>Édouard-Léon Scott de Martinville</b> enregistre une personne qui chante « Au clair de la lune » avec une machine qui dessine le son. Ce n'est qu'en 2008 que des scientifiques ont réussi à la réécouter : la plus ancienne source orale enregistrée !", causes: ["foto"] }
        ]
      }
    },
    {
      type: "decision",
      title: "1991 : vous avez trouvé un corps dans la glace !",
      html: `<p>Tu es en montagne, à plus de 3 000 mètres, avec un ami. Dans la glace qui fond, vous voyez apparaître le dos et la tête d'une personne. Tout près, il y a des morceaux de bois et de cuir.</p>`,
      question: "Que faites-vous ?",
      options: [
        { label: "Nous le sortons tout seuls avec les piolets et nous rapportons les objets à la maison comme souvenir.", outcome: "Vous risqueriez de casser le corps et les objets, et surtout on perdrait la chose la plus importante : <b>où</b> et <b>comment</b> se trouvait chaque chose. Pour les archéologues, la position des objets est une information précieuse." },
        { label: "Nous prenons une photo, nous ne touchons à rien et nous prévenons tout de suite le refuge et les autorités.", outcome: "C'est le bon choix : la photo est déjà une source, et les experts pourront tout récupérer avec soin et l'étudier." },
        { label: "Nous faisons comme si de rien n'était et nous redescendons dans la vallée.", outcome: "En fondant, la glace aurait laissé le corps au soleil et aux intempéries : en peu de temps, il se serait abîmé, et une source unique aurait été perdue." }
      ],
      answer: 1,
      explain: "Erika et Helmut Simon, le 19 septembre 1991, photographièrent le corps et prévinrent le refuge. Au début, tout le monde pensait à un alpiniste mort récemment, et la première récupération fut faite en hâte avec un marteau-piqueur, abîmant un peu le corps et certains objets. Puis l'archéologue <b>Konrad Spindler</b> comprit qu'il avait plus de 4 000 ans (aujourd'hui, on sait : environ 5 300). Depuis, Ötzi est l'un des vestiges les plus étudiés au monde. La règle des archéologues est : <b>ne pas toucher, documenter, prévenir</b>. Dans la plupart des pays, celui qui trouve des vestiges anciens doit prévenir les autorités : ils appartiennent à tout le monde."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les sources",
      intro: "On comprend mieux les sources en jouant aux historiens.",
      tabs: [
        {
          label: "📦 La boîte à souvenirs",
          html: `<p>Prépare à la maison une <b>boîte du temps</b> : mets dedans une photo de toi, un dessin, un jouet que tu n'utilises plus et une lettre écrite par toi (« Aujourd'hui j'ai 7 ans et j'aime… »). Ferme-la et écris dessus : « À ouvrir dans 10 ans ».</p>
<p>Dans 10 ans, cette boîte sera une petite collection de <b>sources</b> sur toi ! Dans le monde entier, on enterre ainsi des « capsules temporelles » pour les générations futures.</p>`
        },
        {
          label: "🕵️ Les questions du détective",
          html: `<p>Devant chaque source, pose les <b>5 questions</b> du détective. Retourne les cartes !</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "❓ Qu'est-ce que c'est ?", back: "Une lettre, un vase, une photo, un récit…" },
              { front: "👤 Qui l'a faite ?", back: "Une personne célèbre, un enfant, un soldat, un artisan…" },
              { front: "📅 Quand ?", back: "Je regarde la date, la couche de terrain, comment elle est faite." },
              { front: "📍 Où ?", back: "Où elle a été trouvée ou écrite." },
              { front: "🎯 Pourquoi ?", back: "À quoi servait-elle ? Qu'est-ce qu'elle voulait raconter ?" }
            ]
          }
        },
        {
          label: "🌍 Des sources dans le monde",
          html: `<p>Certaines sources sont si importantes qu'elles sont célèbres dans le monde entier. Fais tourner le globe et trouve-les !</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 46.78, lon: 10.84, label: "Ötzi (Alpes)", color: "#0ea5e9" },
              { lat: 40.75, lon: 14.49, label: "Pompéi", color: "#ef4444" },
              { lat: 45.05, lon: 1.17, label: "Grotte de Lascaux : peintures d'il y a environ 17 000 ans", color: "#a16207" },
              { lat: 31.4, lon: 30.42, label: "Pierre de Rosette (Égypte)", color: "#eab308" },
              { lat: 34.38, lon: 109.27, label: "Armée de terre cuite (Chine)", color: "#b45309" },
              { lat: -13.16, lon: -72.55, label: "Machu Picchu (Pérou)", color: "#16a34a" }
            ]
          }
        },
        {
          label: "🍰 Le gâteau à étages",
          html: `<p>Imagine que tu fais un gâteau à étages : d'abord tu mets le biscuit, puis la crème, puis le chocolat, puis la chantilly. La couche <b>du fond</b>, tu l'as mise <b>en premier</b> ; celle du dessus en dernier.</p>
<p>Le sol fonctionne de la même façon : la terre, la poussière et les débris s'accumulent tout doucement. C'est pour cela que l'archéologue sait que, en général, plus il creuse <b>profondément</b>, plus il trouve des objets <b>anciens</b>. Cette idée s'appelle la <b>stratigraphie</b>.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fdf2f8"/>
<rect x="150" y="40" width="300" height="35" rx="6" fill="#ffffff" stroke="#9ca3af" stroke-width="2"/>
<rect x="150" y="75" width="300" height="35" fill="#78350f"/>
<rect x="150" y="110" width="300" height="35" fill="#fde68a"/>
<rect x="150" y="145" width="300" height="45" rx="6" fill="#fbbf24"/>
<text x="470" y="63" font-size="16" fill="#334155" font-weight="bold">4. chantilly (dernière)</text>
<text x="470" y="98" font-size="16" fill="#78350f" font-weight="bold">3. chocolat</text>
<text x="470" y="133" font-size="16" fill="#a16207" font-weight="bold">2. crème</text>
<text x="470" y="173" font-size="16" fill="#b45309" font-weight="bold">1. biscuit</text>
<text x="20" y="63" font-size="16" fill="#16a34a" font-weight="bold">plus récent ↑</text>
<text x="20" y="173" font-size="16" fill="#7c2d12" font-weight="bold">plus ancien ↓</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des sources : touche les nœuds et découvre pourquoi",
      nodes: [
        { id: "passato", label: "Le passé", x: 50, y: 6, color: "#64748b", html: "Tout ce qui s'est déjà passé.", why: "Le passé ne peut pas être revu : la machine à remonter le temps n'existe pas ! Nous ne pouvons le connaître qu'à travers les traces qu'il a laissées." },
        { id: "fonti", label: "Les sources", x: 50, y: 28, color: "#a855f7", html: "Toutes les traces qui nous donnent des informations sur le passé.", why: "Chaque personne, chaque jour, laisse des traces : objets, écrits, photos, souvenirs. Certaines se conservent pendant des siècles, d'autres se perdent. C'est pour cela que les historiens travaillent avec les sources qui sont parvenues jusqu'à nous." },
        { id: "scritte", label: "Écrites", x: 12, y: 50, color: "#b45309", html: "Lettres, journaux intimes, livres, documents, inscriptions.", why: "Elles existent depuis l'invention de l'<b>écriture</b>, il y a environ <b>5 000 ans</b> en Mésopotamie. C'est pour cela que la période avant l'écriture s'appelle la <b>Préhistoire</b> : « avant l'histoire écrite »." },
        { id: "materiali", label: "Matérielles", x: 37, y: 55, color: "#16a34a", html: "Objets, maisons, outils, ossements, pièces de monnaie.", why: "Ce sont les sources les plus anciennes : elles nous racontent aussi la Préhistoire, quand on n'écrivait pas. Beaucoup se trouvent en creusant, parce qu'avec le temps elles sont recouvertes par la terre." },
        { id: "iconografiche", label: "Iconographiques", x: 63, y: 55, color: "#1d4ed8", html: "Photos, dessins, peintures, vidéos.", why: "« Iconographique » vient du grec <i>eikón</i> = image. Les premières images sont les peintures dans les grottes, vieilles de dizaines de milliers d'années ; la première photographie date de 1826–1827." },
        { id: "orali", label: "Orales", x: 88, y: 50, color: "#be185d", html: "Récits, souvenirs, chansons transmises de vive voix.", why: "Pendant des milliers d'années, les histoires passèrent de grand-père à petit-enfant seulement de vive voix. Même les poèmes d'Homère, l'Iliade et l'Odyssée, furent chantés de mémoire pendant des siècles avant d'être écrits." },
        { id: "storico", label: "Historien et archéologue", x: 30, y: 82, color: "#0ea5e9", html: "Celui qui cherche, étudie et compare les sources.", why: "L'historien grec <b>Hérodote</b> (il y a environ 2 500 ans) est appelé le « père de l'histoire » : il voyagea et posa des questions pour recueillir les nouvelles. L'archéologie moderne, qui fouille avec méthode couche par couche, est née ces 200 dernières années." },
        { id: "luoghi", label: "Musées et archives", x: 70, y: 85, color: "#ef4444", html: "Là où l'on conserve les sources.", why: "Dans les <b>musées</b>, on conserve les objets, dans les <b>archives</b> les documents, dans les <b>bibliothèques</b> les livres. Le Musée du Capitole à Rome, ouvert en 1734, est l'un des plus anciens musées publics du monde." }
      ],
      edges: [
        ["passato", "fonti", "laisse des traces :"],
        ["fonti", "scritte", "peuvent être"],
        ["fonti", "materiali", "peuvent être"],
        ["fonti", "iconografiche", "peuvent être"],
        ["fonti", "orali", "peuvent être"],
        ["materiali", "storico", "les fouille l'"],
        ["scritte", "storico", "les lit l'"],
        ["storico", "luoghi", "les conserve dans les"],
        ["iconografiche", "luoghi", "exposées dans les"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : détectives de l'histoire",
      questions: [
        { type: "mc", q: "Qui cherche les traces du passé en creusant dans la terre ?", options: ["L'archéologue", "Le cuisinier", "L'astronaute"], answer: 0, explain: "L'archéologue fouille et étudie les sources matérielles." },
        { type: "tf", q: "Dans les couches du sol, en général, les objets les plus bas sont les plus anciens.", answer: true, explain: "Les couches se déposent les unes sur les autres : les plus profondes sont les plus vieilles." },
        { type: "mc", q: "Pourquoi est-il utile de comparer plusieurs sources ?", options: ["Pour perdre du temps", "Parce qu'une source seule peut se tromper", "Parce que les sources sont toutes pareilles"], answer: 1, explain: "Si plusieurs sources disent la même chose, l'information est plus sûre." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Les <b>sources</b> sont les traces du passé.</li>
<li>Il y a des sources <b>écrites</b>, <b>matérielles</b>, <b>iconographiques</b> et <b>orales</b>.</li>
<li>L'<b>historien</b> les cherche, pose des questions, les <b>compare</b> et raconte.</li>
<li>L'<b>archéologue</b> fouille : plus bas = plus ancien.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Source historique", d: "N'importe quelle trace qui nous donne des informations sur le passé." },
    { t: "Source écrite", d: "Source avec des mots écrits : lettres, journaux intimes, documents." },
    { t: "Source matérielle", d: "Un objet : jouets, outils, vases, maisons, ossements." },
    { t: "Source iconographique", d: "Une image : photos, dessins, peintures, vidéos." },
    { t: "Source orale", d: "Un récit fait de vive voix, comme les souvenirs des grands-parents." },
    { t: "Historien", d: "Celui qui étudie les sources pour reconstituer le passé." },
    { t: "Archéologue", d: "Celui qui cherche et étudie les traces du passé en fouillant." },
    { t: "Archives", d: "Lieu où l'on conserve les documents." },
    { t: "Vestige", d: "Objet ancien retrouvé lors d'une fouille." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qu'est-ce qu'une source historique ?", options: ["Une fontaine sur la place", "Une trace qui nous donne des informations sur le passé", "Un livre de contes"], answer: 1, explain: "Les sources sont les traces du passé." },
      { type: "mc", q: "Une lettre de l'arrière-grand-mère est une source…", options: ["écrite", "orale", "matérielle"], answer: 0, explain: "Elle contient des mots écrits : source écrite." },
      { type: "mc", q: "Une épée ancienne est une source…", options: ["iconographique", "matérielle", "orale"], answer: 1, explain: "C'est un objet : source matérielle." },
      { type: "mc", q: "Un tableau est une source…", options: ["iconographique", "écrite", "orale"], answer: 0, explain: "Les images sont des sources iconographiques." },
      { type: "tf", q: "Les souvenirs racontés par papy sont une source orale.", answer: true, explain: "Ce sont des informations racontées de vive voix." },
      { type: "tf", q: "Une seule source suffit toujours pour être sûr.", answer: false, explain: "Les sources peuvent se tromper : mieux vaut en comparer plus d'une." },
      { type: "text", q: "Comment s'appelle celui qui fouille pour trouver les traces du passé ?", answer: ["archéologue", "l'archéologue", "un archéologue", "archeologue"], explain: "L'archéologue." },
      { type: "order", q: "Une fouille : mets dans l'ordre, des objets les plus récents (en haut) aux plus anciens (en bas).", items: ["canette d'aujourd'hui", "pièce de monnaie de papy", "vase romain", "ossements préhistoriques"], explain: "Les couches les plus profondes sont les plus anciennes." },
      { type: "mc", q: "Où se trouve aujourd'hui Ötzi, l'homme venu des glaces ?", options: ["À Bolzano", "À Paris", "À New York"], answer: 0, explain: "Au Musée archéologique du Haut-Adige, à Bolzano." },
      { type: "mc", q: "Quel volcan ensevelit Pompéi en 79 apr. J.-C. ?", options: ["L'Etna", "Le Vésuve", "Le Stromboli"], answer: 1, explain: "Le Vésuve, près de Naples." },
      { type: "mc", q: "Où conserve-t-on les documents anciens ?", options: ["Dans les archives", "Dans les réfrigérateurs", "Au gymnase"], answer: 0, explain: "Les archives conservent les documents." }
    ]
  }
});
