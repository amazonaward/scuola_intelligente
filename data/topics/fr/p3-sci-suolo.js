TOPIC('fr', {
  id: "p3-sci-suolo",
  title: "Le sol",
  intro: "Sous nos pieds, il y a un monde caché plein de vie ! 🪱 Le <b>sol</b> est la couche de terre où poussent les plantes et où vivent beaucoup de petites bêtes. Découvrons de quoi il est fait, comment il se forme, ses <b>couches</b> et qui y habite.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce que le sol",
      html: `<p>Le <b>sol</b> (ou <b>terrain</b>) est la couche la plus externe de la croûte terrestre, celle sur laquelle nous marchons et où les plantes plongent leurs racines. 🌱</p>
<p>Ce n'est pas seulement de la « terre sale » ! C'est un <b>mélange</b> de plein de choses :</p>
<ul>
<li>🪨 des <b>morceaux de roche</b> de différentes tailles : le <b>gravier</b> (gros), le <b>sable</b> (moyens), le <b>limon</b> et l'<b>argile</b> (très fins) ;</li>
<li>🍂 l'<b>humus</b> : la partie sombre et odorante, faite de restes de feuilles, de branches et d'animaux décomposés. C'est la « nourriture » des plantes ;</li>
<li>💧 de l'<b>eau</b>, qui se glisse entre les grains ;</li>
<li>🌬️ de l'<b>air</b>, dans les petits espaces vides (les <b>pores</b>) ;</li>
<li>🐛 des <b>êtres vivants</b> : vers de terre, insectes, champignons, bactéries… des milliards !</li>
</ul>`
    },
    {
      type: "example",
      title: "Expérience : le bocal qui se divise en couches",
      html: `<p>Il te faut : un bocal transparent avec son bouchon, un peu de terre du jardin, de l'eau.</p>
<ol>
<li>Remplis le bocal sur <b>un tiers</b> avec la terre.</li>
<li>Ajoute de l'eau presque jusqu'au bord et ferme bien.</li>
<li><b>Secoue</b> fort pendant une minute, puis laisse reposer une journée entière.</li>
</ol>
<p>Que vois-tu ? Le terrain s'est divisé en <b>couches</b> : au fond les petits cailloux et le <b>sable</b> (lourds), au-dessus le <b>limon</b>, puis l'<b>argile</b> très fine ; l'eau reste un peu trouble et à la surface <b>flottent</b> des morceaux de feuilles et de brindilles (l'humus pas encore décomposé). Tu as « démonté » le sol ! 🔬</p>`
    },
    {
      type: "text",
      title: "Comment se forme le sol",
      html: `<p>Le sol se forme <b>très lentement</b>, de deux façons qui travaillent ensemble :</p>
<ol>
<li>🪨➡️🟤 <b>La roche s'effrite</b> (cela s'appelle la <b>désagrégation</b>) :
<ul>
<li>le <b>gel</b> : l'eau entre dans les fissures, gèle, s'élargit et fait éclater la roche ;</li>
<li>la <b>pluie</b> et les <b>rivières</b> l'usent ;</li>
<li>le <b>vent</b> la polit avec le sable ;</li>
<li>les <b>racines</b> des plantes se glissent dans les fentes et les élargissent.</li>
</ul></li>
<li>🍂➡️🟫 <b>Les restes des êtres vivants se décomposent</b> : feuilles, branches et animaux morts sont mangés et transformés par les vers de terre, les champignons et les bactéries (les <b>décomposeurs</b>) et deviennent de l'<b>humus</b>.</li>
</ol>
<p>⏳ Pour former <b>1 centimètre</b> de sol fertile, il peut falloir de <b>100 à 1000 ans</b> ! C'est pour ça que le sol est un trésor précieux.</p>`
    },
    {
      type: "svg",
      title: "Les couches du sol",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#e0f2fe"/>
<rect x="40" y="40" width="300" height="20" fill="#65a30d"/>
<path d="M70 40 L75 15 L80 40 M120 40 L127 10 L132 40 M190 40 L195 20 L200 40 M260 40 L268 12 L274 40" stroke="#15803d" stroke-width="4" fill="none"/>
<rect x="40" y="60" width="300" height="25" fill="#3f2a14"/>
<rect x="40" y="85" width="300" height="70" fill="#6b4423"/>
<rect x="40" y="155" width="300" height="65" fill="#a16207"/>
<rect x="40" y="220" width="300" height="55" fill="#a8a29e"/>
<rect x="40" y="275" width="300" height="55" fill="#57534e"/>
<g fill="#d6d3d1" stroke="#44403c" stroke-width="2">
<ellipse cx="90" cy="240" rx="22" ry="12"/><ellipse cx="170" cy="250" rx="28" ry="14"/><ellipse cx="260" cy="238" rx="20" ry="11"/><ellipse cx="310" cy="258" rx="18" ry="10"/>
<ellipse cx="130" cy="190" rx="10" ry="6"/><ellipse cx="240" cy="200" rx="12" ry="7"/>
</g>
<path d="M195 60 L190 110 L180 140 M190 110 L205 150" stroke="#fef3c7" stroke-width="3" fill="none"/>
<path d="M100 120 q15 -10 30 0 q15 10 30 0" stroke="#f472b6" stroke-width="6" fill="none" stroke-linecap="round"/>
<g font-size="17" fill="#1f2937">
<text x="355" y="56">Litière : feuilles et brindilles</text>
<text x="355" y="80" font-weight="bold">Humus sombre</text>
<text x="355" y="125" font-weight="bold">Couche superficielle (terre</text>
<text x="355" y="145" font-weight="bold">cultivable) : racines et vers</text>
<text x="355" y="192">Sous-sol : plus clair,</text>
<text x="355" y="212">peu d'humus, argile</text>
<text x="355" y="252">Roche fragmentée</text>
<text x="355" y="308" font-weight="bold">Roche mère</text>
</g>
</svg>`,
      caption: "En coupant le terrain, on voit des couches de couleurs différentes, appelées horizons : de la plus sombre et riche en haut jusqu'à la roche en bas."
    },
    {
      type: "text",
      title: "Les couches (horizons) de haut en bas",
      html: `<ol>
<li>🍂 <b>Litière</b> : feuilles, brindilles, aiguilles de pin tout juste tombées.</li>
<li>🟫 <b>Couche superficielle</b> (terre cultivable) : sombre, souple, riche en <b>humus</b>. Il y a ici presque toutes les <b>racines</b> et la plupart des animaux. C'est la couche que le paysan <b>laboure</b>.</li>
<li>🟧 <b>Sous-sol</b> : plus clair et compact, avec peu d'humus, beaucoup d'argile et de cailloux. Seules les racines les plus longues des arbres y arrivent.</li>
<li>🪨 <b>Roche fragmentée</b> : des morceaux de roche qui sont en train de s'effriter.</li>
<li>⛰️ <b>Roche mère</b> : la roche entière et dure d'où, tout doucement, naît le sol.</li>
</ol>
<p>La couche superficielle n'est en général épaisse que de quelques dizaines de centimètres !</p>`
    },
    {
      type: "3d",
      title: "Le sol en 3D",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#65a30d", label: "Litière : feuilles tombées" },
          { r: 0.9, color: "#3f2a14", label: "Humus et couche superficielle : racines et vers de terre" },
          { r: 0.75, color: "#a16207", label: "Sous-sol : argile et cailloux" },
          { r: 0.55, color: "#a8a29e", label: "Roche fragmentée" },
          { r: 0.35, color: "#57534e", label: "Roche mère" }
        ]
      },
      caption: "Une part découpée montre les couches du terrain les unes sur les autres (pas à l'échelle). Fais-la tourner et touche chaque couche !"
    },
    {
      type: "quiz",
      title: "Mini-quiz : comment est fait le sol",
      questions: [
        { type: "mc", q: "Comment s'appelle la partie sombre du sol faite de restes de feuilles et d'animaux décomposés ?", options: ["l'argile", "l'humus", "la roche mère"], answer: 1, explain: "C'est l'humus, très nourrissant pour les plantes." },
        { type: "tf", q: "Dans le sol, il y a aussi de l'air et de l'eau.", answer: true, explain: "L'air et l'eau remplissent les petits espaces entre les grains." },
        { type: "mc", q: "Quelle est la couche la plus profonde ?", options: ["La litière", "Le sous-sol", "La roche mère"], answer: 2, explain: "Tout au fond, il y a la roche mère, d'où le sol se forme." }
      ]
    },
    {
      type: "text",
      title: "Qui vit dans le sol",
      html: `<p>Dans une cuillère de terre fertile, il y a <b>plus d'êtres vivants que d'habitants sur la Terre</b> : surtout des <b>bactéries</b> invisibles ! Voici quelques habitants :</p>
<ul>
<li>🪱 <b>Ver de terre</b> : le « paysan » du sol. Il creuse des galeries qui laissent entrer l'air et l'eau, mange de la terre et des feuilles et les rend sous forme d'engrais.</li>
<li>🐜 <b>Fourmis</b> : elles construisent des nids avec plein de pièces et brassent la terre.</li>
<li>🦔 <b>Taupe</b> : elle creuse de longues galeries et mange des vers de terre et des larves. Elle est presque aveugle mais a des pattes en forme de pelle !</li>
<li>🐞 <b>Cloporte</b> : ce n'est pas un insecte mais un crustacé, cousin des crevettes ! Il mange des feuilles pourries.</li>
<li>🐛 des <b>larves</b> d'insectes, des <b>mille-pattes</b>, des <b>escargots</b>, des <b>araignées</b>…</li>
<li>🍄 <b>Champignons</b> et 🦠 <b>bactéries</b> : les décomposeurs qui transforment les restes en humus.</li>
</ul>
<p>Tous ensemble, ils forment une <b>chaîne</b> : sans eux, les feuilles et les restes s'accumuleraient et les plantes n'auraient pas de nourriture.</p>`
    },
    {
      type: "widget",
      title: "Habite-t-il dans le sol ou non ?",
      widget: "classify",
      options: {
        groups: ["Vit dans le sol 🟫", "Ne vit pas dans le sol ☁️"],
        items: [
          ["🪱 ver de terre", 0],
          ["🦅 aigle", 1],
          ["🐜 fourmi", 0],
          ["🐟 truite", 1],
          ["🦔 taupe", 0],
          ["🍄 champignons", 0],
          ["🦋 papillon adulte", 1],
          ["🐞 cloporte", 0],
          ["🐦 moineau", 1]
        ]
      },
      caption: "Glisse chaque être vivant dans le bon groupe."
    },
    {
      type: "text",
      title: "Types de sol : qui laisse passer l'eau ?",
      html: `<p>Tous les terrains ne sont pas pareils. Cela dépend de la quantité de sable, d'argile et d'humus qu'ils contiennent :</p>
<table>
<tr><th>Terrain</th><th>Comment il est</th><th>Eau</th></tr>
<tr><td>🏖️ <b>Sableux</b></td><td>gros grains, il s'effrite</td><td>passe <b>très vite</b> (très <b>perméable</b>) : il sèche tout de suite</td></tr>
<tr><td>🧱 <b>Argileux</b></td><td>grains très fins, collant, se modèle</td><td>passe <b>très peu</b> (<b>imperméable</b>) : il fait des flaques</td></tr>
<tr><td>🌻 <b>Humifère</b> (mélangé, riche en humus)</td><td>sombre, souple, odorant</td><td>retient la bonne quantité d'eau : le <b>meilleur</b> pour cultiver</td></tr>
<tr><td>🪨 <b>Calcaire</b> / caillouteux</td><td>clair, plein de cailloux</td><td>laisse passer l'eau ; convient à la vigne et à l'olivier</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Expérience : la perméabilité",
      html: `<p>Prends 3 bouteilles en plastique coupées en deux, et utilise la partie haute retournée comme <b>entonnoir</b> (avec un morceau de gaze ou de coton dans le goulot).</p>
<ul>
<li>Entonnoir 1 : du <b>sable</b> ; entonnoir 2 : de l'<b>argile</b> ; entonnoir 3 : du <b>terreau</b> de jardin. Tous avec <b>la même quantité</b> !</li>
<li>Verse dans chacun <b>un verre d'eau</b> et lance le chronomètre ⏱️.</li>
</ul>
<p>Résultat : sous le sable, l'eau descend tout de suite ; sous l'argile, seules quelques gouttes descendent ; le terreau laisse passer un peu d'eau et en retient un peu. Tu viens d'utiliser la <b>méthode scientifique</b> : tu n'as changé qu'une seule chose (le type de terrain) !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Le grand savant <b>Charles Darwin</b>, célèbre pour la théorie de l'évolution, a étudié les <b>vers de terre</b> pendant plus de 40 ans ! En <b>1881</b>, il a écrit un livre entier sur eux et a calculé que, dans un champ, les vers de terre peuvent remonter à la surface plusieurs tonnes de terre chaque année. Il les appelait les « charrues de la nature ». 🪱</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Environ <b>95 %</b> de la nourriture que nous mangeons vient, directement ou indirectement, du sol : fruits, légumes, céréales et même la viande (parce que les animaux mangent des plantes). 🍎🌾 Pour nous rappeler combien il est important, l'ONU a institué la <b>Journée mondiale des sols</b>, le <b>5 décembre</b> de chaque année.</p>`
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Le sol est un mélange de fragments de roche, d'humus, d'eau, d'air et d'êtres vivants.</li>
<li>Il se forme par la désagrégation de la roche et la décomposition des restes des êtres vivants : il faut des siècles.</li>
<li>Couches : litière, couche superficielle avec humus, sous-sol, roche fragmentée, roche mère.</li>
<li>Sableux = perméable ; argileux = imperméable ; humifère = le plus fertile.</li>
<li>Vers de terre, champignons et bactéries le rendent fertile : nous devons le protéger.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre le sol",
      intro: "Le sol est caché sous nos pieds : voici quelques façons de le « voir » et de mieux s'en souvenir.",
      tabs: [
        {
          label: "🍰 Le gâteau en couches",
          html: `<p>Imagine le sol comme un <b>gâteau en couches</b> (ou des lasagnes !) 🍰 :</p>
<ul>
<li>au-dessus, les <b>décorations</b> émiettées = la litière de feuilles ;</li>
<li>la <b>crème au chocolat</b> sombre et moelleuse = la couche avec l'humus ;</li>
<li>le <b>biscuit</b> plus clair et compact = le sous-sol ;</li>
<li>les <b>biscuits</b> émiettés au fond = la roche fragmentée ;</li>
<li>le <b>plateau</b> dur = la roche mère.</li>
</ul>
<p>Si tu coupes une part, tu vois toutes les couches : exactement comme les scientifiques quand ils creusent un trou !</p>`
        },
        {
          label: "🪱 Le lombricomposteur en classe",
          html: `<p>Construis un <b>lombricomposteur</b> dans un grand bocal en verre :</p>
<ol>
<li>alterne des couches de <b>sable clair</b> et de <b>terreau sombre</b> ;</li>
<li>en surface, mets des feuilles sèches et des épluchures de légumes ;</li>
<li>ajoute 3 ou 4 vers de terre trouvés au jardin et humidifie un peu ;</li>
<li>couvre le verre avec un carton sombre (ils aiment l'obscurité).</li>
</ol>
<p>Au bout d'une semaine, les couches seront <b>mélangées</b> et les feuilles en partie disparues sous la terre ! Ensuite, remets les vers de terre là où tu les as trouvés. 🌿</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<rect x="60" y="30" width="160" height="210" rx="14" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<rect x="66" y="60" width="148" height="30" fill="#78350f"/>
<rect x="66" y="90" width="148" height="30" fill="#fde68a"/>
<rect x="66" y="120" width="148" height="30" fill="#78350f"/>
<rect x="66" y="150" width="148" height="30" fill="#fde68a"/>
<rect x="66" y="180" width="148" height="54" fill="#78350f"/>
<path d="M80 55 l20 -10 l20 10 M140 55 l25 -12 l15 12" stroke="#ca8a04" stroke-width="5" fill="none"/>
<text x="140" y="255" font-size="18" text-anchor="middle" font-weight="bold">jour 1</text>
<rect x="360" y="30" width="160" height="210" rx="14" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<rect x="366" y="60" width="148" height="174" fill="#92400e"/>
<g fill="#fde68a"><circle cx="400" cy="100" r="8"/><circle cx="470" cy="140" r="10"/><circle cx="420" cy="190" r="9"/><circle cx="490" cy="210" r="7"/></g>
<path d="M390 120 q15 -10 30 0 q15 10 30 0 M430 170 q12 -8 24 0 q12 8 24 0" stroke="#f472b6" stroke-width="6" fill="none" stroke-linecap="round"/>
<text x="440" y="255" font-size="18" text-anchor="middle" font-weight="bold">après 1 semaine</text>
<text x="290" y="140" font-size="40" text-anchor="middle">➡️</text>
</svg>`
        },
        {
          label: "🧊 Les couches en 3D",
          html: `<p>Essaie de regarder les couches comme les étages d'un immeuble : à l'étage le plus haut, il y a la vie (racines, vers de terre), et en descendant on arrive aux « fondations » de roche.</p>
<p>Fais tourner le modèle et observe comment les couches s'enveloppent les unes dans les autres.</p>`,
          scene: "layers",
          options: {
            layers: [
              { r: 1, color: "#3f2a14", label: "Couche avec humus" },
              { r: 0.75, color: "#a16207", label: "Sous-sol" },
              { r: 0.5, color: "#57534e", label: "Roche mère" }
            ]
          }
        },
        {
          label: "🌍 Les sols du monde",
          html: `<p>Dans chaque partie du monde, le sol est différent :</p>
<ul>
<li>🇺🇦 En <b>Ukraine</b> et en Russie, il y a le <b>tchernoziom</b> (« terre noire ») : l'un des sols les plus fertiles de la planète, très riche en humus, épais parfois de plus d'un mètre.</li>
<li>🇧🇷 En <b>Amazonie</b>, les peuples anciens ont créé la <b>terra preta</b> (« terre noire ») en ajoutant du charbon de bois, des tessons et des restes : elle est encore fertile aujourd'hui, après des centaines d'années !</li>
<li>🇨🇳 En <b>Chine</b> et en <b>Ligurie</b>, on construit des <b>terrasses</b> : des gradins avec des murets en pierres sèches qui empêchent la pluie d'emporter le sol des collines.</li>
<li>🏜️ Dans les <b>déserts</b>, le sol est presque uniquement du sable, avec très peu d'humus.</li>
</ul>`
        },
        {
          label: "♻️ Fais du compost",
          html: `<p>Le <b>compost</b>, c'est de l'humus fait maison ! On met dans un composteur des épluchures de fruits et de légumes, du marc de café, des feuilles sèches, de l'herbe coupée. Les vers de terre, les champignons et les bactéries font le reste.</p>
<p>Au bout de quelques mois, on obtient une terre sombre et odorante à donner aux plantes. C'est exactement ce qui se passe dans la forêt, mais en plus rapide. 🌱 Pas de plastique, de verre ou de métal : les décomposeurs ne les mangent pas !</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte du sol : touche un nœud et découvre pourquoi",
      nodes: [
        { id: "suolo", label: "Sol", x: 50, y: 8, color: "#78350f", html: "La couche superficielle de la Terre où poussent les plantes.", why: "La science qui étudie le sol s'appelle la pédologie (du grec <i>pédon</i>, « terrain »). Son fondateur est le Russe Vassili Dokoutchaïev, qui a compris en 1883 que le sol est un corps naturel « vivant » qui naît de la roche, du climat, des êtres vivants et du temps." },
        { id: "roccia", label: "Roche mère", x: 15, y: 30, color: "#57534e", html: "La roche d'où se forme le sol.", why: "Le type de roche décide en partie du type de sol : d'un granite naît un sol sableux, d'un calcaire un sol calcaire." },
        { id: "disg", label: "Désagrégation", x: 15, y: 55, color: "#0ea5e9", html: "La roche s'effrite à cause du gel, de l'eau, du vent et des racines.", why: "En gelant, l'eau augmente de volume d'environ un dixième : en entrant dans les fissures, elle agit comme un coin et fait éclater la roche." },
        { id: "humus", label: "Humus", x: 85, y: 30, color: "#3f2a14", html: "Partie sombre faite de restes décomposés de plantes et d'animaux.", why: "Du latin <i>humus</i>, « terre » : de ce mot viennent aussi « humble » et peut-être « homme ». L'humus retient l'eau et les nutriments comme une éponge." },
        { id: "decomp", label: "Décomposeurs", x: 85, y: 55, color: "#ec4899", html: "Vers de terre, champignons et bactéries qui transforment les restes en humus.", why: "Sans eux, la forêt serait ensevelie sous les feuilles mortes. Darwin a montré en 1881 combien les vers de terre travaillent." },
        { id: "strati", label: "Couches (horizons)", x: 50, y: 42, color: "#a16207", html: "Litière, couche superficielle, sous-sol, roche fragmentée, roche mère.", why: "Elles se forment parce qu'en haut arrive plus de matière organique venant des plantes, alors qu'en bas il y a surtout de la roche qui s'effrite." },
        { id: "tipi", label: "Types de sol", x: 30, y: 80, color: "#f59e0b", html: "Sableux, argileux, humifère, calcaire.", why: "Cela dépend de la taille des grains : entre de gros grains (sable), l'eau passe facilement, entre des grains très fins (argile), presque pas." },
        { id: "vita", label: "Vie et nourriture", x: 70, y: 80, color: "#16a34a", html: "Le sol nourrit les plantes et donc aussi nous.", why: "Environ 95 % de notre nourriture dépend du sol. C'est pour ça que la FAO et l'ONU célèbrent la Journée mondiale des sols le 5 décembre." },
        { id: "tempo", label: "Temps très long", x: 50, y: 95, color: "#64748b", html: "1 cm de sol fertile se forme en 100 à 1000 ans.", why: "La désagrégation et la décomposition sont très lentes. Le sol se détruit vite (béton, érosion, pollution) mais se reconstruit doucement : c'est une ressource à protéger." }
      ],
      edges: [
        ["roccia", "disg", "subit la"],
        ["disg", "suolo", "forme le"],
        ["decomp", "humus", "produisent l'"],
        ["humus", "suolo", "enrichit le"],
        ["suolo", "strati", "est divisé en"],
        ["suolo", "tipi", "il existe plusieurs"],
        ["suolo", "vita", "permet la"],
        ["strati", "tempo", "se forment en un"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : habitants et types de sol",
      questions: [
        { type: "mc", q: "Quel animal est appelé la « charrue de la nature » ?", options: ["la taupe", "le ver de terre", "la fourmi"], answer: 1, explain: "Le ver de terre brasse la terre et la fait respirer avec ses galeries." },
        { type: "mc", q: "Dans quel terrain l'eau passe-t-elle le plus vite ?", options: ["argileux", "sableux", "humifère"], answer: 1, explain: "Entre les gros grains du sable, il y a des espaces plus grands." },
        { type: "tf", q: "Le cloporte est un insecte.", answer: false, explain: "C'est un crustacé, cousin des crevettes !" }
      ]
    }
  ],
  glossary: [
    { t: "Sol", d: "Couche superficielle de la croûte terrestre où poussent les plantes." },
    { t: "Humus", d: "Partie sombre du sol formée de restes décomposés de plantes et d'animaux." },
    { t: "Roche mère", d: "Roche d'où, en s'effritant, se forme le sol." },
    { t: "Désagrégation", d: "Effritement de la roche à cause du gel, de l'eau, du vent et des racines." },
    { t: "Décomposeurs", d: "Êtres vivants (vers de terre, champignons, bactéries) qui transforment les restes en humus." },
    { t: "Litière", d: "Couche de feuilles et de brindilles tombées sur le sol." },
    { t: "Sous-sol", d: "Couche sous la couche superficielle, plus claire et pauvre en humus." },
    { t: "Perméable", d: "Qui laisse passer l'eau (par exemple un terrain sableux)." },
    { t: "Imperméable", d: "Qui ne laisse pas passer l'eau (par exemple un terrain argileux)." },
    { t: "Compost", d: "Humus produit à partir des déchets de cuisine et de jardin." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qu'est-ce que le sol ?", options: ["La couche superficielle de la Terre où poussent les plantes", "Le centre de la Terre", "La couche d'air autour de la Terre"], answer: 0, explain: "C'est la couche la plus externe de la croûte terrestre." },
      { type: "order", q: "Range les couches du sol de haut en bas.", items: ["Litière", "Couche superficielle avec humus", "Sous-sol", "Roche fragmentée", "Roche mère"], explain: "En haut la matière organique, en bas la roche." },
      { type: "text", q: "Comment s'appelle la partie sombre et fertile du sol formée des restes décomposés ?", answer: ["humus", "l'humus"], explain: "C'est l'humus." },
      { type: "tf", q: "Le sol contient aussi de l'air et de l'eau.", answer: true, explain: "Ils se trouvent dans les pores entre les grains." },
      { type: "mc", q: "Laquelle de ces choses n'aide PAS à effriter la roche ?", options: ["le gel", "les racines", "la lumière de la Lune"], answer: 2, explain: "Le gel, l'eau, le vent et les racines désagrègent la roche ; la lumière de la Lune non." },
      { type: "mc", q: "Le terrain argileux…", options: ["laisse passer l'eau très vite", "retient l'eau et forme des flaques", "est fait de gros cailloux"], answer: 1, explain: "L'argile a des grains très fins : elle est presque imperméable." },
      { type: "mc", q: "Combien de temps peut-il falloir pour former 1 cm de sol fertile ?", options: ["Un jour", "Un an", "De 100 à 1000 ans"], answer: 2, explain: "Le sol se forme très lentement." },
      { type: "text", q: "Quel animal aux pattes en forme de pelle creuse des galeries et mange des vers de terre ?", answer: ["taupe", "la taupe"], explain: "La taupe." },
      { type: "tf", q: "Les champignons et les bactéries sont des décomposeurs.", answer: true, explain: "Ils transforment les restes de plantes et d'animaux en humus." },
      { type: "mc", q: "Quel terrain est le meilleur pour cultiver un potager ?", options: ["sableux", "humifère", "uniquement de la roche"], answer: 1, explain: "Le terrain humifère est riche en nutriments et retient la bonne quantité d'eau." },
      { type: "mc", q: "Dans l'expérience du bocal secoué, qu'est-ce qui se dépose au fond ?", options: ["Des petits cailloux et du sable, parce qu'ils sont plus lourds", "Les feuilles", "L'argile très fine"], answer: 0, explain: "Les grains les plus gros et lourds descendent en premier ; les feuilles flottent." },
      { type: "mc", q: "Quel jour célèbre-t-on la Journée mondiale des sols ?", options: ["5 décembre", "22 mars", "25 avril"], answer: 0, explain: "Le 5 décembre (le 22 mars est la Journée mondiale de l'eau)." }
    ]
  }
});
