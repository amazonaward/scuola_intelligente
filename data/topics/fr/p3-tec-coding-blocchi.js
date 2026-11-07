TOPIC('fr', {
  id: "p3-tec-coding-blocchi",
  title: "Programmer avec des blocs",
  intro: "Un ordinateur est très rapide, mais tout seul il ne sait rien faire : quelqu'un doit lui dire <b>quoi faire</b>, étape après étape. C'est ce qu'on appelle <b>programmer</b> (coder). Aujourd'hui, nous apprenons à le faire avec des <b>blocs colorés</b>, comme dans Scratch, et nous découvrons deux idées fondamentales : la <b>séquence</b> et la <b>boucle</b>. 🧩🤖",
  minutes: 30,
  sections: [
    {
      type: "text", title: "Étape 1 : qu'est-ce qu'un algorithme ?",
      html: `<p>Un <b>algorithme</b> est une liste d'<b>instructions</b> claires, dans un ordre précis, pour résoudre un problème ou faire quelque chose.</p>
<p>Toi aussi, tu utilises des algorithmes tous les jours ! Par exemple, pour te laver les dents :</p>
<ol><li>prends ta brosse à dents ;</li><li>mets le dentifrice ;</li><li>brosse les dents ;</li><li>rince-toi la bouche ;</li><li>lave la brosse à dents.</li></ol>
<p>Un <b>programme</b> est un algorithme écrit dans une langue que l'ordinateur comprend : un <b>langage de programmation</b>.</p>
<p>⚠️ L'ordinateur est un exécutant <b>précis mais sans imagination</b> : il fait exactement ce que tu écris, ni plus ni moins. Si tu oublies une étape, il ne la devine pas !</p>`
    },
    {
      type: "text", title: "Étape 2 : les blocs",
      html: `<p>Dans les langages <b>à blocs</b> (comme <b>Scratch</b> ou <b>Code.org</b>), il n'est pas nécessaire d'écrire : les instructions sont des <b>briques colorées</b> qui s'emboîtent comme les pièces d'un puzzle. 🧩</p>
<ul>
<li>🟨 <b>Événements</b> (jaune) : <i>quand le drapeau vert est cliqué</i> → le programme démarre.</li>
<li>🟦 <b>Mouvement</b> (bleu) : <i>avancer de 10 pas</i>, <i>tourner de 90 degrés</i>.</li>
<li>🟪 <b>Apparence</b> (violet) : <i>dire « Bonjour ! »</i>, <i>changer de costume</i>.</li>
<li>🟧 <b>Contrôle</b> (orange) : <i>répéter 4 fois</i>, <i>attendre 1 seconde</i>.</li>
</ul>
<p>Si deux blocs ne peuvent pas aller ensemble, ils <b>ne s'emboîtent pas</b> : il est donc difficile de se tromper en « écrivant ».</p>`
    },
    {
      type: "svg", title: "Un programme à blocs : le carré",
      caption: "À gauche : la longue séquence (8 blocs). À droite : le même programme avec une boucle « répéter 4 fois » (3 blocs). Le résultat est le même carré !",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#f8fafc"/>
<text x="110" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">SÉQUENCE</text>
<rect x="20" y="32" width="180" height="26" rx="10" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="30" y="51" font-size="14" fill="#422006">quand on clique 🏁</text>
<rect x="20" y="60" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="77" font-size="14" fill="#ffffff">avancer de 100 pas</text>
<rect x="20" y="86" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="103" font-size="14" fill="#ffffff">tourner ↻ de 90 degrés</text>
<rect x="20" y="112" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="129" font-size="14" fill="#ffffff">avancer de 100 pas</text>
<rect x="20" y="138" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="155" font-size="14" fill="#ffffff">tourner ↻ de 90 degrés</text>
<rect x="20" y="164" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="181" font-size="14" fill="#ffffff">avancer de 100 pas</text>
<rect x="20" y="190" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="207" font-size="14" fill="#ffffff">tourner ↻ de 90 degrés</text>
<rect x="20" y="216" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="233" font-size="14" fill="#ffffff">avancer de 100 pas</text>
<rect x="20" y="242" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="259" font-size="14" fill="#ffffff">tourner ↻ de 90 degrés</text>
<text x="315" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">BOUCLE</text>
<rect x="225" y="32" width="180" height="26" rx="10" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="235" y="51" font-size="14" fill="#422006">quand on clique 🏁</text>
<path d="M225,60 L405,60 L405,86 L250,86 L250,140 L405,140 L405,162 L225,162 Z" fill="#f97316"/>
<text x="235" y="78" font-size="14" fill="#ffffff" font-weight="bold">répéter 4 fois</text>
<rect x="250" y="88" width="150" height="24" rx="4" fill="#3b82f6"/>
<text x="258" y="105" font-size="14" fill="#ffffff">avancer de 100 pas</text>
<rect x="250" y="114" width="150" height="24" rx="4" fill="#3b82f6"/>
<text x="258" y="131" font-size="14" fill="#ffffff">tourner ↻ de 90°</text>
<text x="315" y="200" font-size="15" text-anchor="middle" fill="#15803d" font-weight="bold">3 blocs au lieu de 8 !</text>
<text x="510" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">RÉSULTAT</text>
<rect x="450" y="60" width="120" height="120" fill="none" stroke="#7c3aed" stroke-width="5"/>
<text x="510" y="58" font-size="22" text-anchor="middle">🐱</text>
<text x="510" y="215" font-size="15" text-anchor="middle" fill="#0f172a">4 côtés égaux</text>
<text x="510" y="235" font-size="15" text-anchor="middle" fill="#0f172a">4 angles de 90°</text>
</svg>`
    },
    {
      type: "remember", title: "Séquence et boucle",
      html: `<ul>
<li><b>Séquence</b> : les instructions sont exécutées <b>l'une après l'autre</b>, de haut en bas. L'<b>ordre</b> compte ! D'abord les chaussettes, puis les chaussures. 🧦👟</li>
<li><b>Boucle</b> (loop) : un bloc qui fait <b>répéter</b> les instructions qu'il contient un certain nombre de fois (<i>répéter 4 fois</i>) ou à l'infini (<i>répéter indéfiniment</i>).</li>
</ul>
<p>Quand tu vois des instructions qui se répètent à l'identique, demande-toi : <b>puis-je utiliser une boucle ?</b> Le programme devient plus court, plus facile à lire et à corriger.</p>`
    },
    {
      type: "example", title: "Exemple pratique : le robot dans le labyrinthe",
      html: `<p>Un robot 🤖 doit arriver à la pomme 🍎. Il ne connaît que trois instructions : <b>⬆️ avancer d'1 case</b>, <b>↪️ tourner à gauche</b>, <b>↩️ tourner à droite</b>.</p>
<p>La pomme est à 3 cases devant, puis à 2 cases à droite. Le programme est :</p>
<p>⬆️ ⬆️ ⬆️ ↩️ ⬆️ ⬆️</p>
<p>Avec des boucles, il devient : <b>répéter 3 fois</b> [⬆️] → ↩️ → <b>répéter 2 fois</b> [⬆️].</p>
<p>Si tu écris par erreur ↪️ au lieu de ↩️, le robot va à gauche et heurte le mur : tu as trouvé un <b>bug</b> (une erreur) ! Le corriger s'appelle faire du <b>débogage</b>. 🐞🔧</p>`
    },
    {
      type: "svg", title: "Le parcours du robot",
      caption: "Suis les flèches : 3 cases en avant, un virage à droite, 2 cases en avant. Voilà la pomme !",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#ecfeff"/>
<g stroke="#94a3b8" stroke-width="2" fill="#ffffff">
<rect x="150" y="20" width="60" height="60"/><rect x="210" y="20" width="60" height="60"/><rect x="270" y="20" width="60" height="60"/><rect x="330" y="20" width="60" height="60"/>
<rect x="150" y="80" width="60" height="60"/><rect x="210" y="80" width="60" height="60"/><rect x="270" y="80" width="60" height="60"/><rect x="330" y="80" width="60" height="60"/>
<rect x="150" y="140" width="60" height="60"/><rect x="210" y="140" width="60" height="60"/><rect x="270" y="140" width="60" height="60"/><rect x="330" y="140" width="60" height="60"/>
<rect x="150" y="200" width="60" height="60"/><rect x="210" y="200" width="60" height="60"/><rect x="270" y="200" width="60" height="60"/><rect x="330" y="200" width="60" height="60"/>
</g>
<rect x="210" y="80" width="60" height="60" fill="#475569"/>
<rect x="270" y="140" width="60" height="60" fill="#475569"/>
<path d="M180,230 L180,50 L300,50" stroke="#16a34a" stroke-width="6" fill="none" stroke-dasharray="10 6"/>
<text x="180" y="245" font-size="34" text-anchor="middle">🤖</text>
<text x="300" y="62" font-size="34" text-anchor="middle">🍎</text>
<text x="460" y="70" font-size="18" font-weight="bold" fill="#0f172a">⬆️ ⬆️ ⬆️</text>
<text x="460" y="110" font-size="18" font-weight="bold" fill="#0f172a">↩️ droite</text>
<text x="460" y="150" font-size="18" font-weight="bold" fill="#0f172a">⬆️ ⬆️</text>
<text x="460" y="200" font-size="15" fill="#475569">gris = mur</text>
</svg>`
    },
    {
      type: "quiz", title: "Mini-quiz : séquences",
      questions: [
        { type: "mc", q: "Une liste d'instructions claires et ordonnées pour résoudre un problème est…", options: ["un algorithme", "un dessin", "un ordinateur"], answer: 0, explain: "Algorithme = instructions dans l'ordre." },
        { type: "order", q: "Mets dans l'ordre la séquence pour t'habiller les pieds.", items: ["mets les chaussettes", "mets les chaussures", "noue les lacets"], explain: "Dans une séquence, l'ordre compte : d'abord les chaussettes, puis les chaussures !" },
        { type: "tf", q: "L'ordinateur devine tout seul les instructions que nous avons oubliées.", answer: false, explain: "L'ordinateur exécute seulement ce qui est écrit : si une étape manque, il ne la fait pas." }
      ]
    },
    {
      type: "3d", title: "Une boucle, c'est comme une multiplication",
      scene: "blocks",
      options: { mode: "array", a: 4, b: 3 },
      caption: "« Répéter 4 fois : poser 3 cubes » → 4 rangées de 3 = 12 cubes. Bouge les curseurs et réfléchis : combien de fois je répète ? Combien de cubes je pose à chaque fois ?"
    },
    {
      type: "example", title: "Exemple pratique : la fête du chat de Scratch",
      html: `<p>Tu veux que le chat 🐱 danse. Voici le programme :</p>
<ul>
<li>🟨 quand le drapeau vert est cliqué</li>
<li>🟧 <b>répéter 10 fois</b> :
<ul><li>🟦 avancer de 10 pas</li><li>🟪 changer de costume</li><li>🟧 attendre 0,2 seconde</li><li>🟦 avancer de -10 pas (revenir en arrière)</li></ul></li>
<li>🟪 dire « Quelle belle fête ! » pendant 2 secondes</li>
</ul>
<p>Combien de fois le chat change-t-il de costume ? <b>10</b>, une fois par tour de boucle. Combien de pas fait-il en tout vers l'avant ? 10 × 10 = <b>100</b>.</p>`
    },
    {
      type: "widget", title: "Jeu : séquence ou boucle ?",
      widget: "classify",
      caption: "Ces activités sont-elles une séquence d'étapes différentes, ou la même étape répétée plusieurs fois (boucle) ?",
      options: {
        groups: ["➡️ Séquence (étapes différentes)", "🔁 Boucle (répéter)"],
        items: [["Préparer un sandwich", 0], ["Se laver les dents", 0], ["Allumer l'ordinateur et ouvrir Scratch", 0], ["S'habiller pour sortir", 0], ["Sauter à la corde 20 fois", 1], ["Les aiguilles qui tournent", 1], ["Monter 15 marches", 1], ["Le refrain d'une chanson", 1], ["Les saisons chaque année", 1]]
      }
    },
    {
      type: "widget", title: "Associe le bloc à ce qu'il fait",
      widget: "match",
      options: { pairs: [["quand on clique 🏁", "fait démarrer le programme"], ["avancer de 10 pas", "déplace le personnage"], ["tourner de 90°", "fait tourner le personnage"], ["répéter 4 fois", "répète les blocs qu'il contient"], ["répéter indéfiniment", "répète sans jamais s'arrêter"], ["attendre 1 seconde", "fait une pause"]] }
    },
    {
      type: "curiosity", title: "Le savais-tu ? La première programmeuse était une femme du XIXe siècle !",
      html: `<p>En <b>1843</b>, la mathématicienne anglaise <b>Ada Lovelace</b> écrivit les instructions pour faire calculer des nombres spéciaux à la « Machine analytique » inventée par Charles Babbage. La machine ne fut jamais construite, mais ces instructions sont considérées comme le <b>premier programme</b> de l'histoire ! Ada avait déjà compris l'idée de la <b>boucle</b> : répéter plusieurs fois les mêmes opérations.</p>
<p>Encore avant, en <b>1804</b>, le Français Joseph-Marie Jacquard inventa un métier à tisser qui réalisait des dessins en suivant des <b>cartes perforées</b> : une sorte de programme pour les tissus !</p>`
    },
    {
      type: "curiosity", title: "Le savais-tu ? Le premier « bug » était un vrai insecte !",
      html: `<p>En anglais, <b>bug</b> veut dire « insecte ». En <b>1947</b>, à l'université Harvard, un ordinateur géant appelé Mark II tomba en panne. Les techniciens ouvrirent la machine et trouvèrent… un <b>papillon de nuit</b> coincé entre les contacts ! 🦋 Ils le collèrent avec du ruban adhésif sur le registre en écrivant « premier cas de bug réellement trouvé ». La page existe toujours, dans un musée de Washington.</p>
<p>Les ingénieurs appelaient déjà « bug » les pannes auparavant, mais depuis, l'histoire du papillon de nuit est devenue très célèbre, souvent racontée par la programmeuse <b>Grace Hopper</b>.</p>`
    },
    {
      type: "alternatives", title: "D'autres façons de comprendre",
      intro: "Si les blocs sur l'écran ne te convainquent pas, essaie de programmer d'une autre façon.",
      tabs: [
        {
          label: "🃏 Coding débranché (sans ordinateur)",
          html: `<p>En Italie est né <b>CodyRoby</b>, un jeu de cartes inventé à l'université d'Urbino pour apprendre le code <b>sans ordinateur</b>. Les cartes ont trois flèches : <b>avancer</b>, <b>tourner à gauche</b>, <b>tourner à droite</b>.</p>
<ol><li>Dessine un échiquier par terre avec de la craie ou du ruban adhésif.</li>
<li>Un enfant joue le <b>robot</b>, un autre le <b>programmeur</b>.</li>
<li>Le programmeur aligne les cartes ; le robot les exécute <b>à la lettre</b>, sans réfléchir.</li>
<li>Si le robot n'arrive pas à l'arrivée, cherchez ensemble le bug !</li></ol>`
        },
        {
          label: "🧁 La recette",
          html: `<p>Une <b>recette</b> est un algorithme pour la cuisine :</p>
<ul><li><b>Séquence</b> : casse les œufs → ajoute le sucre → mélange → ajoute la farine → enfourne.</li>
<li><b>Boucle</b> : « <i>mélange jusqu'à ce que</i> la pâte soit lisse », « <i>répète pour chaque</i> moule : verse une cuillère de pâte ».</li></ul>
<p>Si tu changes l'ordre (tu enfournes avant de mélanger 😱), le résultat est un désastre : exactement comme dans un programme !</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="200" fill="#fff7ed"/>
<text x="60" y="80" font-size="44" text-anchor="middle">🥚</text>
<text x="60" y="125" font-size="15" text-anchor="middle" fill="#0f172a">1. œufs</text>
<text x="120" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="180" y="80" font-size="44" text-anchor="middle">🍚</text>
<text x="180" y="125" font-size="15" text-anchor="middle" fill="#0f172a">2. sucre</text>
<text x="240" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="300" y="80" font-size="44" text-anchor="middle">🥣</text>
<text x="300" y="125" font-size="15" text-anchor="middle" fill="#0f172a">3. mélanger</text>
<path d="M270,140 Q300,180 330,140" stroke="#7c3aed" stroke-width="4" fill="none"/>
<text x="300" y="190" font-size="15" text-anchor="middle" fill="#7c3aed" font-weight="bold">🔁 jusqu'à lisse</text>
<text x="360" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="420" y="80" font-size="44" text-anchor="middle">🌾</text>
<text x="420" y="125" font-size="15" text-anchor="middle" fill="#0f172a">4. farine</text>
<text x="480" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="540" y="80" font-size="44" text-anchor="middle">🧁</text>
<text x="540" y="125" font-size="15" text-anchor="middle" fill="#0f172a">5. enfourner</text>
</svg>`
        },
        {
          label: "🎵 Le refrain",
          html: `<p>Les chansons sont pleines de <b>boucles</b> ! Dans les livres de musique, au lieu de tout réécrire, on utilise le signe de <b>reprise</b> 𝄆 … 𝄇 : cela veut dire « <b>répète</b> cette partie ».</p>
<p>C'est exactement comme le bloc « répéter 2 fois ». Les musiciens utilisent les boucles depuis des siècles, bien avant les ordinateurs ! Essaie de frapper des mains : <b>répéter 4 fois</b> [👏 👏 🦶].</p>`
        },
        {
          label: "🧊 Boucles avec des cubes 3D",
          html: `<p>Chaque tour de boucle ajoute une rangée de cubes. Change les nombres : avec <b>5 tours de 2</b>, combien de cubes as-tu ? Et avec 2 tours de 5 ? Le résultat est le même (10), mais le programme est différent !</p>`,
          scene: "blocks",
          options: { mode: "array", a: 5, b: 2 }
        }
      ]
    },
    {
      type: "conceptMap", title: "Carte : les idées du code",
      nodes: [
        { id: "problema", label: "Un problème", x: 50, y: 6, color: "#ef4444", html: "Quelque chose à faire ou à résoudre : dessiner un carré, amener le robot à la pomme.", why: "Programmer commence toujours par une question : qu'est-ce que je veux obtenir ? Ensuite, on divise le grand problème en petits morceaux, ce qui est le cœur de la « pensée informatique »." },
        { id: "algoritmo", label: "Algorithme", x: 50, y: 28, color: "#f97316", html: "Instructions claires, finies, dans l'ordre.", why: "Le mot vient du nom du mathématicien perse <b>al-Khwarizmi</b> (IXe siècle), qui écrivit à Bagdad un livre sur la façon de faire les calculs étape par étape. En latin, son nom devint « Algorismus »." },
        { id: "sequenza", label: "Séquence", x: 18, y: 52, color: "#3b82f6", html: "Instructions exécutées l'une après l'autre.", why: "L'ordinateur a un seul « exécutant » principal qui lit une instruction à la fois, de haut en bas : c'est pourquoi l'ordre est fondamental." },
        { id: "ciclo", label: "Boucle (répéter)", x: 50, y: 52, color: "#a855f7", html: "Répéter des instructions plusieurs fois.", why: "Les ordinateurs sont très forts pour répéter sans se fatiguer ni se tromper. Ada Lovelace décrivait déjà en 1843 comment faire répéter un groupe d'opérations à la Machine analytique." },
        { id: "evento", label: "Événement", x: 82, y: 52, color: "#eab308", html: "Ce qui fait démarrer le programme (clic sur le drapeau, une touche).", why: "Les programmes modernes « attendent » qu'il se passe quelque chose : un clic, un toucher sur l'écran. C'est pourquoi, dans Scratch, chaque programme commence par un bloc jaune en forme de chapeau." },
        { id: "blocchi", label: "Langage à blocs", x: 25, y: 78, color: "#0ea5e9", html: "Instructions comme des briques qui s'emboîtent.", why: "Scratch a été créé au MIT de Boston par le groupe de Mitchel Resnick et publié en 2007. Il s'inspire du langage Logo de Seymour Papert (années 1960), celui de la tortue qui dessine. Les blocs évitent les fautes d'écriture." },
        { id: "bug", label: "Bug et débogage", x: 75, y: 78, color: "#16a34a", html: "L'erreur et sa correction.", why: "Se tromper est normal, même pour les programmeurs expérimentés ! On essaie le programme, on regarde où le résultat est différent de celui attendu et on corrige : c'est ainsi qu'on apprend." },
        { id: "computer", label: "L'ordinateur exécute", x: 50, y: 95, color: "#475569", html: "Il exécute les instructions à la lettre, très vite.", why: "Un ordinateur moderne exécute des milliards d'instructions par seconde, mais seulement celles que nous lui donnons : il n'a ni intentions ni imagination. L'intelligence du programme vient de celui qui l'écrit." }
      ],
      edges: [
        ["problema", "algoritmo", "se résout avec"], ["algoritmo", "sequenza", "a"], ["algoritmo", "ciclo", "a"], ["algoritmo", "evento", "démarre avec"],
        ["sequenza", "blocchi", "s'écrit avec"], ["ciclo", "blocchi", "s'écrit avec"], ["blocchi", "computer", "commande"], ["computer", "bug", "si je me trompe"], ["bug", "algoritmo", "je corrige"]
      ]
    },
    {
      type: "quiz", title: "Mini-quiz : les boucles",
      questions: [
        { type: "num", q: "« Répéter 5 fois : sauter 2 fois ». Combien de sauts fais-tu en tout ?", answer: 10, tol: 0, explain: "5 tours × 2 sauts = 10 sauts." },
        { type: "mc", q: "Pour dessiner un carré avec une boucle, j'écris…", options: ["répéter 4 fois : avancer, tourner de 90°", "répéter 3 fois : avancer, tourner de 90°", "répéter 4 fois : avancer"], answer: 0, explain: "Le carré a 4 côtés et 4 angles droits (90°)." },
        { type: "tf", q: "Une erreur dans un programme s'appelle un bug.", answer: true, explain: "Bug = erreur ; débogage = la corriger." }
      ]
    }
  ],
  glossary: [
    { t: "Coder / programmer", d: "Écrire des instructions qu'un ordinateur ou un robot peut exécuter." },
    { t: "Algorithme", d: "Liste d'instructions claires et ordonnées pour résoudre un problème." },
    { t: "Instruction", d: "Une seule commande : « avancer de 10 pas », « tourner à droite »." },
    { t: "Programme", d: "Un algorithme écrit dans un langage que l'ordinateur comprend." },
    { t: "Séquence", d: "Instructions exécutées l'une après l'autre, dans l'ordre." },
    { t: "Boucle (loop)", d: "Bloc qui fait répéter les instructions qu'il contient." },
    { t: "Événement", d: "Ce qui fait démarrer le programme, comme le clic sur le drapeau vert." },
    { t: "Bug", d: "Erreur dans un programme." },
    { t: "Débogage", d: "Trouver et corriger les erreurs." },
    { t: "Scratch", d: "Langage de programmation à blocs créé au MIT en 2007." },
    { t: "Débranché", d: "Activités de code faites sans ordinateur, avec des cartes, de la craie ou son propre corps." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qu'est-ce qu'un algorithme ?", options: ["Une liste d'instructions ordonnées pour résoudre un problème", "Un type d'ordinateur", "Un jeu de ballon"], answer: 0, explain: "Algorithme = instructions claires dans l'ordre." },
      { type: "mc", q: "Dans une séquence, les instructions sont exécutées…", options: ["toutes ensemble", "l'une après l'autre, dans l'ordre", "dans un ordre aléatoire"], answer: 1, explain: "L'une après l'autre, de haut en bas." },
      { type: "mc", q: "À quoi sert une boucle ?", options: ["À répéter des instructions", "À éteindre l'ordinateur", "À changer la couleur des blocs"], answer: 0, explain: "La boucle répète les blocs qu'elle contient." },
      { type: "num", q: "« Répéter 3 fois : avancer de 4 pas ». Combien de pas le personnage fait-il en tout ?", answer: 12, tol: 0, unit: "pas", explain: "3 × 4 = 12 pas." },
      { type: "num", q: "Pour dessiner un triangle à côtés égaux, j'utilise « répéter … fois : avancer, tourner ». Combien de fois ?", answer: 3, tol: 0, explain: "Le triangle a 3 côtés : répéter 3 fois." },
      { type: "text", q: "Comment s'appelle une erreur dans un programme ?", answer: ["bug", "un bug", "bogue", "une bogue"], explain: "Bug (en français, on dit aussi « bogue »)." },
      { type: "tf", q: "Dans les langages à blocs, les instructions s'emboîtent comme les pièces d'un puzzle.", answer: true, explain: "Les blocs qui ne peuvent pas aller ensemble ne s'emboîtent pas." },
      { type: "tf", q: "Dans un programme, l'ordre des instructions n'est pas important.", answer: false, explain: "L'ordre est fondamental : d'abord les chaussettes, puis les chaussures !" },
      { type: "order", q: "Mets dans l'ordre le programme pour faire dire « Bonjour » au chat après un clic sur le drapeau.", items: ["quand le drapeau vert est cliqué", "avancer de 10 pas", "dire « Bonjour ! » pendant 2 secondes"], explain: "Le bloc événement (drapeau) se met toujours en haut." },
      { type: "mc", q: "Quel bloc fait démarrer le programme dans Scratch ?", options: ["répéter 10 fois", "quand le drapeau vert est cliqué", "tourner de 90 degrés"], answer: 1, explain: "C'est un bloc événement, jaune, en forme de chapeau." },
      { type: "mc", q: "Qui écrivit en 1843 ce qui est considéré comme le premier programme de l'histoire ?", options: ["Ada Lovelace", "Léonard de Vinci", "Galilée"], answer: 0, explain: "Ada Lovelace, pour la Machine analytique de Babbage." },
      { type: "mc", q: "Le robot doit avancer de 4 cases. Quel est le programme le plus court ?", options: ["avancer, avancer, avancer, avancer", "répéter 4 fois : avancer", "répéter 2 fois : avancer"], answer: 1, explain: "La boucle « répéter 4 fois » fait le même travail avec moins de blocs." }
    ]
  }
});
