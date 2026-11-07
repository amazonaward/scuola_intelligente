TOPIC('fr', {
  id: "p3-ita-fiaba-favola",
  title: "Conte et fable (fiaba e favola)",
  intro: "« Il était une fois… » 🏰 Les contes et les fables sont parmi les histoires les plus anciennes du monde. Elles se ressemblent, mais ce n'est pas la même chose ! Découvrons comment les reconnaître : dans le <b>conte</b> (<i>fiaba</i>), il y a de la <b>magie</b> ✨ ; dans la <b>fable</b> (<i>favola</i>), les <b>animaux parlent</b> 🦊 et, à la fin, il y a une <b>morale</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Le conte : magie et fin heureuse",
      html: `<p>Le <b>conte</b> (<i>fiaba</i>) est un récit fantastique, né il y a très longtemps et transmis de vive voix par les grands-parents à leurs petits-enfants. Ses caractéristiques :</p>
<ul>
<li>✨ <b>Magie</b> : fées, sorcières, ogres, dragons, objets magiques (la pantoufle, la lampe, les bottes de sept lieues).</li>
<li>🕰️ <b>Temps indéterminé</b> : « Il était une fois… », « Il y a très longtemps… ».</li>
<li>🌲 <b>Lieu indéterminé</b> : « dans un royaume lointain », « dans une forêt épaisse ».</li>
<li>👑 <b>Personnages fixes</b> : le protagoniste (héros ou héroïne), l'antagoniste (le méchant), l'aide, l'objet magique.</li>
<li>⚔️ Le protagoniste doit surmonter des <b>épreuves</b> difficiles.</li>
<li>😊 <b>Fin heureuse</b> : « …et ils vécurent heureux ».</li>
</ul>
<p>Contes célèbres : <i>Cendrillon</i>, <i>Blanche-Neige</i>, <i>Hansel et Gretel</i>, <i>Le Chat botté</i>, <i>La Belle au bois dormant</i>.</p>`
    },
    {
      type: "text",
      title: "La fable : animaux et morale",
      html: `<p>La <b>fable</b> (<i>favola</i>) est un récit <b>court</b> qui veut <b>enseigner quelque chose</b>. Ses caractéristiques :</p>
<ul>
<li>🦊 Les protagonistes sont presque toujours des <b>animaux</b> qui parlent et se comportent comme des personnes.</li>
<li>🎭 Chaque animal représente un <b>caractère</b> : le renard est rusé, le lion est fort et autoritaire, la fourmi est travailleuse, l'âne est têtu, l'agneau est sans défense.</li>
<li>⚡ L'histoire est <b>courte</b>, avec peu de personnages (souvent seulement deux) et souvent un dialogue.</li>
<li>📜 À la fin, il y a la <b>morale</b> : un enseignement sur la façon de se comporter. Parfois elle est écrite, parfois c'est à toi de la découvrir.</li>
<li>❌ Il n'y a pas de magie et pas toujours de fin heureuse.</li>
</ul>
<p>Fables célèbres : <i>Le Renard et les Raisins</i>, <i>La Cigale et la Fourmi</i>, <i>Le Lièvre et la Tortue</i>, <i>Le Loup et l'Agneau</i>.</p>`
    },
    {
      type: "svg",
      title: "Conte ou fable ? En un coup d'œil",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#faf5ff"/>
<rect x="20" y="20" width="270" height="260" rx="20" fill="#ede9fe" stroke="#7c3aed" stroke-width="4"/>
<rect x="310" y="20" width="270" height="260" rx="20" fill="#fef3c7" stroke="#d97706" stroke-width="4"/>
<text x="155" y="60" font-size="30" font-weight="bold" text-anchor="middle" fill="#5b21b6">CONTE</text>
<text x="445" y="60" font-size="30" font-weight="bold" text-anchor="middle" fill="#92400e">FABLE</text>
<text x="155" y="105" font-size="34" text-anchor="middle">🧚 🐉 👑</text>
<text x="445" y="105" font-size="34" text-anchor="middle">🦊 🍇 🐢</text>
<g font-size="18" fill="#1f2937">
<text x="40" y="145">✨ magie</text>
<text x="40" y="175">📖 histoire longue</text>
<text x="40" y="205">🧍 personnages humains</text>
<text x="40" y="235">⚔️ épreuves à surmonter</text>
<text x="40" y="265">😊 fin heureuse</text>
<text x="330" y="145">🚫 pas de magie</text>
<text x="330" y="175">⚡ histoire courte</text>
<text x="330" y="205">🐾 animaux qui parlent</text>
<text x="330" y="235">🎭 un défaut ou une qualité</text>
<text x="330" y="265">📜 morale finale</text>
</g>
</svg>`,
      caption: "Deux genres différents : le conte fait rêver, la fable fait réfléchir."
    },
    {
      type: "quiz",
      title: "Mini-quiz : conte ou fable ?",
      questions: [
        { type: "mc", q: "Une histoire avec une fée, un prince et un enchantement est…", options: ["un conte", "une fable"], answer: 0, explain: "La magie et les personnages fantastiques sont typiques du conte." },
        { type: "mc", q: "Une histoire courte où un corbeau et un renard parlent et où il y a un enseignement à la fin est…", options: ["un conte", "une fable"], answer: 1, explain: "Animaux qui parlent + morale = fable." },
        { type: "tf", q: "Dans la fable, le renard représente d'habitude la ruse.", answer: true, explain: "Les animaux des fables ont des caractères fixes : le renard est rusé." }
      ]
    },
    {
      type: "text",
      title: "Les auteurs : qui a écrit des contes et des fables",
      html: `<p><b>Fables</b></p>
<ul>
<li><b>Ésope</b> 🇬🇷 : il a vécu en Grèce au <b>VIe siècle av. J.-C.</b> ; selon la tradition, c'était un esclave très sage. Ses fables (<i>Le Renard et les Raisins</i>, <i>Le Lièvre et la Tortue</i>) sont arrivées jusqu'à nous.</li>
<li><b>Phèdre</b> 🏛️ : poète latin du <b>Ier siècle apr. J.-C.</b>, il a réécrit en vers beaucoup de fables d'Ésope (<i>Le Loup et l'Agneau</i>).</li>
<li><b>Jean de La Fontaine</b> 🇫🇷 : en <b>1668</b>, il a publié en France ses <i>Fables</i> en vers (<i>La Cigale et la Fourmi</i>).</li>
</ul>
<p><b>Contes</b></p>
<ul>
<li><b>Giambattista Basile</b> 🇮🇹 : Napolitain, il a écrit <i>Lo cunto de li cunti</i> (publié en <b>1634–1636</b>), l'un des premiers recueils de contes d'Europe, où l'on trouve déjà <i>La gatta Cenerentola</i> (La chatte Cendrillon).</li>
<li><b>Charles Perrault</b> 🇫🇷 : en <b>1697</b>, il a publié <i>Le Petit Chaperon rouge</i>, <i>Le Chat botté</i>, <i>Cendrillon</i>.</li>
<li><b>Frères Grimm</b> 🇩🇪 : Jacob et Wilhelm ont recueilli les contes populaires allemands et les ont publiés à partir de <b>1812</b> (<i>Hansel et Gretel</i>, <i>Blanche-Neige</i>).</li>
<li><b>Hans Christian Andersen</b> 🇩🇰 : à partir de <b>1835</b>, il a écrit des contes nouveaux : <i>La Petite Sirène</i>, <i>Le Vilain Petit Canard</i>.</li>
<li><b>Italo Calvino</b> 🇮🇹 : en <b>1956</b>, il a recueilli et réécrit 200 <i>Contes italiens</i> (<i>Fiabe italiane</i>) de toutes les régions.</li>
</ul>`
    },
    {
      type: "widget",
      title: "La frise chronologique des contes et des fables",
      widget: "timeline",
      options: {
        events: [
          { year: -550, label: "Ésope", icon: "🦊", text: "Fables grecques, VIe siècle av. J.-C. (date approximative)." },
          { year: 40, label: "Phèdre", icon: "🐺", text: "Fables en latin, Ier siècle apr. J.-C. (date approximative)." },
          { year: 1634, label: "Basile", icon: "📜", text: "Lo cunto de li cunti, Naples (1634–1636)." },
          { year: 1668, label: "La Fontaine", icon: "🦗", text: "Les Fables, France." },
          { year: 1697, label: "Perrault", icon: "🐈", text: "Le Petit Chaperon rouge, Cendrillon, Le Chat botté." },
          { year: 1812, label: "Frères Grimm", icon: "🍬", text: "Contes pour les enfants et les familles : Hansel et Gretel, Blanche-Neige." },
          { year: 1835, label: "Andersen", icon: "🧜", text: "Premiers contes ; puis La Petite Sirène, Le Vilain Petit Canard." },
          { year: 1956, label: "Calvino", icon: "📚", text: "Contes italiens : 200 contes des régions d'Italie." }
        ]
      },
      caption: "Touche un point pour découvrir l'auteur. Les histoires sont bien plus anciennes que les livres : on les racontait de vive voix."
    },
    {
      type: "text",
      title: "La structure du conte",
      html: `<p>Presque tous les contes suivent le même parcours en <b>cinq étapes</b> :</p>
<ol>
<li><b>Situation initiale</b> : « Il était une fois une jeune fille gentille qui vivait avec sa belle-mère… »</li>
<li><b>Rupture de l'équilibre</b> (le problème) : un interdit enfreint, un enchantement, un enlèvement.</li>
<li><b>Péripéties</b> : le protagoniste part, affronte des épreuves, rencontre des aides et des antagonistes, reçoit un objet magique.</li>
<li><b>Dénouement</b> : le méchant est vaincu, l'enchantement se brise.</li>
<li><b>Situation finale</b> : le protagoniste est heureux (et souvent il se marie ou devient roi).</li>
</ol>
<p>La fable, elle, est plus simple : <b>situation → fait → conclusion → morale</b>.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : la fable « Le Renard et les Raisins » (Ésope)",
      html: `<p><i>Un renard affamé vit des grappes de raisin mûr qui pendaient d'une treille haute. Il sauta une fois, deux fois, trois fois, mais ne réussit pas à les atteindre. Alors il s'en alla en disant : « De toute façon, ce raisin est trop vert ! »</i></p>
<ul>
<li>Personnage : le renard (animal qui parle).</li>
<li>Situation : il a faim et voit le raisin.</li>
<li>Fait : il essaie de le prendre mais n'y arrive pas.</li>
<li>Conclusion : il dit que le raisin n'est pas bon.</li>
<li><b>Morale</b> : celui qui n'arrive pas à obtenir quelque chose fait souvent semblant de ne pas le vouloir. D'où l'expression « faire comme le renard avec les raisins ».</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple pratique : le conte de Cendrillon",
      html: `<ul>
<li><b>Situation initiale</b> : Cendrillon vit avec sa belle-mère et ses demi-sœurs, qui la traitent comme une servante.</li>
<li><b>Rupture</b> : le prince organise un bal, mais il lui est interdit d'y aller.</li>
<li><b>Aide et objets magiques</b> : la fée marraine transforme une citrouille en carrosse et lui donne une robe et des pantoufles de verre (dans la version de Perrault).</li>
<li><b>Épreuve</b> : elle doit rentrer avant minuit ; en s'enfuyant, elle perd une pantoufle.</li>
<li><b>Antagonistes</b> : la belle-mère et les demi-sœurs, qui essaient de tromper le prince.</li>
<li><b>Dénouement et fin heureuse</b> : la pantoufle ne va qu'à elle ; elle épouse le prince.</li>
</ul>
<p>Le même conte se raconte dans le monde entier sous des noms différents : en Chine, il existe une histoire semblable, <i>Ye Xian</i>, écrite dès le IXe siècle !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Les 31 « fonctions » du conte",
      html: `<p>En <b>1928</b>, le chercheur russe <b>Vladimir Propp</b> a lu et comparé une centaine de contes merveilleux russes et a découvert qu'ils étaient tous construits avec les mêmes « briques » : <b>31 fonctions</b>, c'est-à-dire des actions typiques (éloignement, interdiction, transgression de l'interdit, don de l'objet magique, combat, victoire, mariage…). Les contes semblent tous différents, mais au fond ils ont le même squelette !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Rodari et les contes au téléphone",
      html: `<p>L'écrivain italien <b>Gianni Rodari</b> a publié en <b>1962</b> <i>Favole al telefono</i> (Contes au téléphone) : les histoires que le comptable Bianchi, toujours en voyage pour son travail, racontait chaque soir à sa fille par téléphone. Elles devaient être courtes parce qu'il payait avec des jetons ! En <b>1970</b>, Rodari a remporté le <b>prix Hans Christian Andersen</b>, le plus important prix du monde pour les écrivains pour la jeunesse : il est le seul écrivain italien à l'avoir gagné.</p>`
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<table>
<tr><th></th><th>CONTE</th><th>FABLE</th></tr>
<tr><td>Personnages</td><td>humains et fantastiques (fées, ogres)</td><td>animaux qui parlent</td></tr>
<tr><td>Magie</td><td>oui</td><td>non</td></tr>
<tr><td>Longueur</td><td>plus longue, avec beaucoup d'épreuves</td><td>courte</td></tr>
<tr><td>Temps et lieu</td><td>indéterminés (« il était une fois »)</td><td>indéterminés</td></tr>
<tr><td>Fin</td><td>fin heureuse</td><td>morale</td></tr>
<tr><td>Auteurs</td><td>Basile, Perrault, Grimm, Andersen, Calvino</td><td>Ésope, Phèdre, La Fontaine</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Jeu : les personnages du conte",
      widget: "classify",
      options: {
        groups: ["Protagoniste", "Antagoniste", "Aide", "Objet magique"],
        items: [
          ["👧 Le Petit Chaperon rouge", 0], ["👸 Blanche-Neige", 0], ["🧒 Hansel", 0],
          ["🐺 le loup", 1], ["🧙‍♀️ la sorcière", 1], ["👹 l'ogre", 1],
          ["🧚 la fée marraine", 2], ["🪓 le chasseur", 2], ["🐦 les petits oiseaux", 2],
          ["👠 la pantoufle de verre", 3], ["🪄 la baguette", 3], ["👢 les bottes de sept lieues", 3]
        ]
      },
      caption: "Chaque personnage a un rôle précis dans le conte : mets-le à la bonne place."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre contes et fables",
      intro: "Tu peux aussi comprendre la différence avec une bande dessinée, avec les cartes de Propp, en associant les morales ou en voyageant dans le monde avec Cendrillon.",
      tabs: [
        {
          label: "🎨 Le conte en bande dessinée",
          html: `<p>Voici les cinq étapes du conte dessinées comme une bande dessinée. Essaie de raconter <i>Hansel et Gretel</i> en suivant les vignettes !</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#ffffff"/>
<g stroke="#1f2937" stroke-width="3">
<rect x="10" y="20" width="108" height="150" fill="#dbeafe"/>
<rect x="128" y="20" width="108" height="150" fill="#fee2e2"/>
<rect x="246" y="20" width="108" height="150" fill="#fef3c7"/>
<rect x="364" y="20" width="108" height="150" fill="#dcfce7"/>
<rect x="482" y="20" width="108" height="150" fill="#fce7f3"/>
</g>
<g font-size="40" text-anchor="middle">
<text x="64" y="95">🏠</text><text x="182" y="95">🌲</text><text x="300" y="95">🍬</text><text x="418" y="95">🔥</text><text x="536" y="95">🤗</text>
</g>
<g font-size="14" text-anchor="middle" fill="#1f2937">
<text x="64" y="135">famille</text><text x="64" y="155">pauvre</text>
<text x="182" y="135">abandonnés</text><text x="182" y="155">dans la forêt</text>
<text x="300" y="135">maison en</text><text x="300" y="155">pain d'épice</text>
<text x="418" y="135">Gretel</text><text x="418" y="155">bat la sorcière</text>
<text x="536" y="135">ils rentrent</text><text x="536" y="155">à la maison</text>
</g>
<g font-size="15" font-weight="bold" text-anchor="middle" fill="#7c3aed">
<text x="64" y="200">1. début</text><text x="182" y="200">2. problème</text><text x="300" y="200">3. épreuves</text><text x="418" y="200">4. solution</text><text x="536" y="200">5. fin heureuse</text>
</g>
</svg>`
        },
        {
          label: "🃏 Les cartes de Propp",
          html: `<p>L'écrivain <b>Gianni Rodari</b>, dans le livre <i>Grammatica della fantasia</i> (1973), a proposé de transformer les fonctions de Propp en <b>cartes à jouer</b> : tu piochas quelques cartes dans l'ordre et tu inventes un nouveau conte ! Essaie avec celles-ci :</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "1. Éloignement", back: "Quelqu'un quitte la maison (le papa part, le héros va dans la forêt)." },
              { front: "2. Interdiction", back: "« N'ouvre pas cette porte ! », « Ne parle pas au loup ! »" },
              { front: "3. Transgression", back: "L'interdit est violé… et voilà les ennuis !" },
              { front: "4. Don magique", back: "Un aide offre un objet magique au héros." },
              { front: "5. Combat", back: "Le héros affronte l'antagoniste." },
              { front: "6. Victoire", back: "Le méchant est vaincu." },
              { front: "7. Retour", back: "Le héros rentre chez lui." },
              { front: "8. Mariage", back: "Fin heureuse : le héros se marie ou devient roi." }
            ]
          }
        },
        {
          label: "🔗 Associe fable et morale",
          html: `<p>Relie chaque fable à sa morale.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Le Lièvre et la Tortue", "Rien ne sert de courir, il faut partir à point"],
              ["La Cigale et la Fourmi", "Il faut penser à l'avenir"],
              ["Le Renard et les Raisins", "Celui qui n'obtient pas une chose fait semblant de ne pas la vouloir"],
              ["Le Loup et l'Agneau", "Le plus fort trouve toujours une excuse"],
              ["Le Lion et le Rat", "Même les petits peuvent aider les grands"]
            ]
          }
        },
        {
          label: "🌍 Cendrillon dans le monde (3D)",
          html: `<p>La même histoire voyage à travers le monde et change de costume. Fais tourner le globe et trouve les lieux :</p>
<ul>
<li>🇨🇳 <b>Ye Xian</b> (Chine, IXe siècle) : l'aide magique est un poisson, et elle perd une pantoufle d'or.</li>
<li>🇮🇹 <b>La gatta Cenerentola</b> (Basile, Naples, 1634) : la protagoniste s'appelle Zezolla.</li>
<li>🇫🇷 <b>Cendrillon</b> (Perrault, Paris, 1697) : arrivent la fée, la citrouille-carrosse et la pantoufle de verre.</li>
<li>🇩🇪 <b>Aschenputtel</b> (Grimm, 1812) : pas de fée, ce sont un arbre magique et des petits oiseaux qui l'aident.</li>
</ul>
<p>Les chercheurs ont recueilli des centaines de versions différentes de ce conte dans le monde !</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 23, lon: 109, label: "Ye Xian (Chine)", color: "#ef4444" },
              { lat: 40.85, lon: 14.27, label: "Basile (Naples)", color: "#22c55e" },
              { lat: 48.86, lon: 2.35, label: "Perrault (Paris)", color: "#3b82f6" },
              { lat: 50.32, lon: 9.4, label: "Grimm (Allemagne)", color: "#f59e0b" }
            ]
          }
        },
        {
          label: "🎭 Les animaux-masques",
          html: `<p>Dans la fable, chaque animal est comme un <b>masque</b> du théâtre : dès que tu le vois, tu sais déjà comment il est.</p>
<table>
<tr><th>Animal</th><th>Caractère</th></tr>
<tr><td>🦊 renard</td><td>rusé, tricheur</td></tr>
<tr><td>🦁 lion</td><td>fort, puissant, parfois autoritaire</td></tr>
<tr><td>🐺 loup</td><td>méchant, brutal</td></tr>
<tr><td>🐑 agneau</td><td>innocent, sans défense</td></tr>
<tr><td>🐜 fourmi</td><td>travailleuse, prévoyante</td></tr>
<tr><td>🦗 cigale</td><td>insouciante, paresseuse</td></tr>
<tr><td>🐢 tortue</td><td>lente mais constante</td></tr>
</table>
<p>Utiliser les animaux permettait à Ésope et à Phèdre de critiquer les puissants… sans les nommer !</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des contes et des fables : touche un nœud et découvre pourquoi",
      nodes: [
        { id: "racconto", label: "Récit fantastique", x: 50, y: 6, color: "#2563eb", html: "Histoire inventée avec des éléments qui n'existent pas dans la réalité.", why: "Les êtres humains racontent des histoires depuis que le langage existe : elles servaient à divertir, à expliquer le monde et à enseigner aux plus jeunes comment se comporter." },
        { id: "orale", label: "Tradition orale", x: 50, y: 26, color: "#64748b", html: "Les histoires passaient de vive voix, de génération en génération.", why: "Pendant des siècles, presque personne ne savait lire : on racontait les histoires le soir, près du feu. Pour s'en souvenir, on utilisait des formules fixes (« Il était une fois ») et des répétitions (trois épreuves, trois frères)." },
        { id: "fiaba", label: "Conte", x: 22, y: 45, color: "#7c3aed", html: "Récit avec magie, épreuves et fin heureuse.", why: "Le mot italien vient du latin <i>fabula</i>, « récit ». Les contes donnent de l'espoir : même le plus petit et le plus pauvre, s'il est courageux et bon, peut gagner." },
        { id: "favola", label: "Fable", x: 78, y: 45, color: "#d97706", html: "Récit court avec des animaux qui parlent et une morale.", why: "« Favola » vient lui aussi de <i>fabula</i>. Dans l'Antiquité, c'était une façon d'enseigner et de critiquer les puissants sans risque, en faisant parler les animaux à la place des personnes." },
        { id: "personaggi", label: "Rôles des personnages", x: 10, y: 70, color: "#ec4899", html: "Protagoniste, antagoniste, aide, objet magique.", why: "Propp a découvert que dans les contes merveilleux les personnages changent de nom mais les <b>rôles</b> sont toujours les mêmes : il en a repéré sept (dont le héros, l'antagoniste, le donateur et l'aide)." },
        { id: "propp", label: "Les 31 fonctions de Propp", x: 34, y: 70, color: "#a855f7", html: "Les actions typiques qui construisent chaque conte.", why: "Vladimir Propp les a décrites dans le livre <i>Morphologie du conte</i> (1928), en comparant une centaine de contes merveilleux russes. Sa méthode a ensuite servi à étudier aussi des films et des romans." },
        { id: "morale", label: "Morale", x: 66, y: 70, color: "#16a34a", html: "L'enseignement final de la fable.", why: "Ésope et Phèdre écrivaient pour enseigner à vivre : la morale résume en une phrase la leçon de l'histoire. Beaucoup d'expressions (« faire comme le renard avec les raisins ») viennent justement des fables." },
        { id: "animali", label: "Animaux-symboles", x: 90, y: 70, color: "#f59e0b", html: "Renard rusé, lion fort, fourmi travailleuse.", why: "Les animaux ont des caractères « fixes » que tout le monde reconnaît tout de suite : ainsi la fable peut être très courte, parce qu'il n'est pas nécessaire d'expliquer comment est le personnage." },
        { id: "autori", label: "Collecteurs et auteurs", x: 50, y: 92, color: "#0ea5e9", html: "Ésope, Phèdre, Basile, Perrault, Grimm, Andersen, Calvino, Rodari.", why: "Beaucoup d'entre eux n'ont pas inventé les histoires : ils les ont <b>recueillies</b> dans la voix du peuple et les ont mises par écrit, les sauvant de l'oubli. D'autres, comme Andersen et Rodari, en ont écrit de nouvelles." }
      ],
      edges: [
        ["racconto", "orale", "naît de la"],
        ["orale", "fiaba", "a donné naissance au"],
        ["orale", "favola", "et à la"],
        ["fiaba", "personaggi", "a des"],
        ["fiaba", "propp", "étudié par"],
        ["favola", "morale", "finit par la"],
        ["favola", "animali", "utilise les"],
        ["orale", "autori", "mise par écrit par"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : auteurs et structure",
      questions: [
        { type: "mc", q: "Qui est l'auteur grec de fables le plus célèbre ?", options: ["Ésope", "Andersen", "Perrault"], answer: 0, explain: "Ésope a vécu en Grèce au VIe siècle av. J.-C." },
        { type: "mc", q: "Comment s'appelle le « méchant » du conte ?", options: ["aide", "antagoniste", "protagoniste"], answer: 1, explain: "L'antagoniste fait obstacle au protagoniste." },
        { type: "order", q: "Mets dans l'ordre la structure du conte.", items: ["Situation initiale", "Rupture de l'équilibre", "Péripéties et épreuves", "Dénouement", "Situation finale"], explain: "Début, problème, épreuves, solution, fin heureuse." }
      ]
    }
  ],
  glossary: [
    { t: "Conte (fiaba)", d: "Récit fantastique avec magie, épreuves à surmonter et fin heureuse." },
    { t: "Fable (favola)", d: "Récit court avec des animaux qui parlent et qui se termine par une morale." },
    { t: "Morale", d: "L'enseignement que l'on tire d'une fable." },
    { t: "Protagoniste", d: "Le personnage principal de l'histoire." },
    { t: "Antagoniste", d: "Le personnage qui fait obstacle au protagoniste." },
    { t: "Aide", d: "Le personnage qui aide le protagoniste (fée, animal magique)." },
    { t: "Objet magique", d: "Objet aux pouvoirs spéciaux qui aide le héros (baguette, bottes)." },
    { t: "Fin heureuse", d: "Fin joyeuse de l'histoire." },
    { t: "Tradition orale", d: "Histoires transmises de vive voix de génération en génération." },
    { t: "Fonctions de Propp", d: "Les 31 actions typiques des contes merveilleux repérées par Vladimir Propp (1928)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quel élément se trouve dans le conte mais d'habitude pas dans la fable ?", options: ["la magie", "les personnages", "un début"], answer: 0, explain: "La magie (fées, enchantements, objets magiques) est typique du conte." },
      { type: "mc", q: "« La Cigale et la Fourmi » est…", options: ["un conte", "une fable"], answer: 1, explain: "Animaux qui parlent et morale : c'est une fable (Ésope, puis La Fontaine)." },
      { type: "tf", q: "Les contes commencent souvent par « Il était une fois ».", answer: true, explain: "C'est la formule qui indique un temps indéterminé." },
      { type: "text", q: "Comment s'appelle l'enseignement à la fin d'une fable ?", answer: ["morale", "la morale", "la moralité", "moralité"], explain: "La morale." },
      { type: "mc", q: "Dans le conte de Cendrillon, la fée marraine est…", options: ["l'antagoniste", "l'aide", "la protagoniste"], answer: 1, explain: "Elle aide Cendrillon à aller au bal." },
      { type: "mc", q: "Qui a recueilli les contes populaires allemands, comme Hansel et Gretel ?", options: ["les frères Grimm", "Ésope", "Phèdre"], answer: 0, explain: "Jacob et Wilhelm Grimm, à partir de 1812." },
      { type: "tf", q: "Dans les fables, chaque animal représente un caractère humain.", answer: true, explain: "Par exemple, le renard est la ruse, la fourmi le travail." },
      { type: "order", q: "Mets les auteurs dans l'ordre chronologique, du plus ancien.", items: ["Ésope", "Phèdre", "Perrault", "Frères Grimm", "Italo Calvino"], explain: "VIe s. av. J.-C., Ier s. apr. J.-C., 1697, 1812, 1956." },
      { type: "mc", q: "Quelle est la morale de « Le Lièvre et la Tortue » ?", options: ["Rien ne sert de courir, il faut partir à point", "L'union fait la force", "Le plus fort gagne toujours"], answer: 0, explain: "La tortue, lente mais constante, bat le lièvre prétentieux." },
      { type: "mc", q: "Quel écrivain italien a recueilli 200 « Contes italiens » en 1956 ?", options: ["Gianni Rodari", "Italo Calvino", "Carlo Collodi"], answer: 1, explain: "Italo Calvino, dans toutes les régions d'Italie." },
      { type: "tf", q: "Dans la fable, il y a toujours une fin heureuse.", answer: false, explain: "Pas toujours : dans « Le Loup et l'Agneau », l'agneau est mangé. La fable a toujours une morale, pas toujours une fin heureuse." },
      { type: "mc", q: "Le Napolitain Giambattista Basile a écrit…", options: ["Lo cunto de li cunti", "Les Aventures de Pinocchio", "Favole al telefono"], answer: 0, explain: "L'un des premiers recueils de contes d'Europe (1634–1636)." }
    ]
  }
});
