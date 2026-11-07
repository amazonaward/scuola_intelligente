TOPIC('fr', {
  id: "p2-tec-algoritmi",
  title: "Les algorithmes de tous les jours",
  intro: "Sais-tu que chaque matin tu suis des <b>algorithmes</b> ? 🪥 Se brosser les dents, préparer son sac 🎒, faire un gâteau 🎂… Un <b>algorithme</b> est une liste d'<b>instructions dans l'ordre</b> pour arriver à un résultat. Les ordinateurs et les robots 🤖 fonctionnent justement ainsi !",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce qu'un algorithme ? 📝",
      html: `<p>Un <b>algorithme</b> est une <b>suite d'instructions</b> (d'étapes) qui, suivie du début à la fin, résout un problème.</p>
<p>Un bon algorithme est :</p>
<ul>
<li>🔢 <b>ordonné</b> : les étapes se suivent, l'une après l'autre ;</li>
<li>🎯 <b>précis</b> : chaque instruction se comprend sans doute ;</li>
<li>🏁 <b>fini</b> : tôt ou tard, il arrive à la fin.</li>
</ul>
<p>Exemple : <b>se laver les mains</b> 🧼</p>
<ol>
<li>Ouvre l'eau 🚰</li>
<li>Mouille les mains</li>
<li>Mets du savon 🧼</li>
<li>Frotte pendant 20 secondes</li>
<li>Rince</li>
<li>Ferme l'eau</li>
<li>Essuie les mains 🧻</li>
</ol>`
    },
    {
      type: "text",
      title: "L'ordre est important ! 🔀",
      html: `<p>Si tu changes l'ordre des étapes, le résultat peut devenir… un désastre ! 😱</p>
<table>
<tr><th>✅ Bon ordre</th><th>❌ Mauvais ordre</th></tr>
<tr><td>1. Je mets les chaussettes 🧦<br>2. Je mets les chaussures 👟</td><td>1. Je mets les chaussures 👟<br>2. Je mets les chaussettes 🧦<br><i>…les chaussettes par-dessus les chaussures ?!</i></td></tr>
<tr><td>1. J'ouvre le parapluie ☂️<br>2. Je sors sous la pluie</td><td>1. Je sors sous la pluie<br>2. J'ouvre le parapluie<br><i>…je suis déjà mouillé !</i></td></tr>
</table>
<p>Un ordinateur exécute les instructions <b>exactement</b> dans l'ordre où tu les écris : il ne s'aperçoit pas s'il y a une erreur !</p>`
    },
    {
      type: "svg",
      title: "L'algorithme du gâteau 🎂",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fff7ed"/>
<rect x="200" y="10" width="200" height="40" rx="20" fill="#22c55e"/>
<text x="300" y="37" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">DÉBUT</text>
<line x1="300" y1="50" x2="300" y2="65" stroke="#334155" stroke-width="3"/>
<polygon points="293,62 307,62 300,70" fill="#334155"/>
<rect x="160" y="70" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="95" font-size="16" text-anchor="middle" fill="#713f12">1. Casse 3 œufs dans le saladier</text>
<line x1="300" y1="108" x2="300" y2="120" stroke="#334155" stroke-width="3"/>
<polygon points="293,117 307,117 300,125" fill="#334155"/>
<rect x="160" y="125" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="150" font-size="16" text-anchor="middle" fill="#713f12">2. Ajoute sucre et farine</text>
<line x1="300" y1="163" x2="300" y2="175" stroke="#334155" stroke-width="3"/>
<polygon points="293,172 307,172 300,180" fill="#334155"/>
<rect x="160" y="180" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="205" font-size="16" text-anchor="middle" fill="#713f12">3. Mélange bien</text>
<line x1="300" y1="218" x2="300" y2="230" stroke="#334155" stroke-width="3"/>
<polygon points="293,227 307,227 300,235" fill="#334155"/>
<rect x="160" y="235" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="260" font-size="16" text-anchor="middle" fill="#713f12">4. Fais cuire au four 30 minutes</text>
<line x1="300" y1="273" x2="300" y2="280" stroke="#334155" stroke-width="3"/>
<rect x="200" y="280" width="200" height="36" rx="18" fill="#ef4444"/>
<text x="300" y="304" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">FIN : gâteau !</text>
<text x="80" y="160" font-size="50" text-anchor="middle">🥚</text>
<text x="520" y="200" font-size="50" text-anchor="middle">🎂</text>
</svg>`,
      caption: "Un algorithme peut se dessiner comme un diagramme : on part de DÉBUT, on suit les flèches et on arrive à FIN."
    },
    {
      type: "quiz",
      title: "Mini-quiz : dans l'ordre !",
      questions: [
        { type: "order", q: "Mets dans l'ordre : se brosser les dents 🪥", items: ["Je prends la brosse à dents", "Je mets le dentifrice", "Je brosse les dents", "Je rince la bouche"], explain: "D'abord on prépare la brosse à dents, puis on brosse, puis on rince." },
        { type: "tf", q: "Dans un algorithme, l'ordre des étapes n'a pas d'importance.", answer: false, explain: "L'ordre compte énormément : les chaussettes avant les chaussures !" },
        { type: "mc", q: "Un algorithme est…", options: ["une liste d'instructions dans l'ordre", "un type d'animal", "un jeu de cartes"], answer: 0, explain: "C'est une suite ordonnée d'instructions." }
      ]
    },
    {
      type: "text",
      title: "Des instructions précises pour un robot 🤖",
      html: `<p>Un robot n'est pas malin comme toi : il fait <b>seulement</b> ce que tu lui dis, <b>mot pour mot</b>.</p>
<p>Si tu dis au robot « <i>Prépare le goûter</i> », il ne sait pas par où commencer ! 🤷 Tu dois expliquer chaque étape :</p>
<ol>
<li>Ouvre le placard.</li>
<li>Prends le pain.</li>
<li>Prends le couteau à tartiner.</li>
<li>Étale la confiture sur le pain.</li>
</ol>
<p>Pour déplacer un robot sur un damier, on utilise des flèches simples :</p>
<p style="font-size:1.2em">⬆️ <b>avance de 1</b> &nbsp; ↪️ <b>tourne à droite</b> &nbsp; ↩️ <b>tourne à gauche</b></p>
<p>Écrire des instructions pour un ordinateur ou un robot s'appelle <b>programmer</b> (ou faire du <b>coding</b>).</p>`
    },
    {
      type: "svg",
      title: "Aide le robot à atteindre la pomme 🍎",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<g stroke="#94a3b8" stroke-width="2" fill="#e0f2fe">
<rect x="40" y="20" width="70" height="70"/><rect x="110" y="20" width="70" height="70"/><rect x="180" y="20" width="70" height="70"/><rect x="250" y="20" width="70" height="70"/>
<rect x="40" y="90" width="70" height="70"/><rect x="110" y="90" width="70" height="70"/><rect x="180" y="90" width="70" height="70"/><rect x="250" y="90" width="70" height="70"/>
<rect x="40" y="160" width="70" height="70"/><rect x="110" y="160" width="70" height="70"/><rect x="180" y="160" width="70" height="70"/><rect x="250" y="160" width="70" height="70"/>
<rect x="40" y="230" width="70" height="70"/><rect x="110" y="230" width="70" height="70"/><rect x="180" y="230" width="70" height="70"/><rect x="250" y="230" width="70" height="70"/>
</g>
<rect x="55" y="245" width="40" height="40" rx="8" fill="#64748b"/>
<circle cx="68" cy="260" r="5" fill="#facc15"/>
<circle cx="82" cy="260" r="5" fill="#facc15"/>
<rect x="66" y="272" width="18" height="4" fill="#facc15"/>
<circle cx="285" cy="55" r="20" fill="#ef4444"/>
<rect x="283" y="30" width="4" height="10" fill="#78350f"/>
<path d="M75 245 L75 125 L285 125 L285 80" stroke="#f97316" stroke-width="6" fill="none" stroke-dasharray="10 6"/>
<text x="460" y="60" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">Le programme :</text>
<text x="460" y="95" font-size="17" text-anchor="middle" fill="#0f172a">avance, avance</text>
<text x="460" y="125" font-size="17" text-anchor="middle" fill="#0f172a">tourne à droite</text>
<text x="460" y="155" font-size="17" text-anchor="middle" fill="#0f172a">avance, avance, avance</text>
<text x="460" y="185" font-size="17" text-anchor="middle" fill="#0f172a">tourne à gauche</text>
<text x="460" y="215" font-size="17" text-anchor="middle" fill="#0f172a">avance</text>
<text x="460" y="260" font-size="18" text-anchor="middle" fill="#15803d" font-weight="bold">Pomme atteinte !</text>
</svg>`,
      caption: "Le robot part en bas à gauche en regardant vers le haut. Suis le parcours orange avec le doigt et vérifie chaque instruction."
    },
    {
      type: "widget",
      title: "Instruction précise ou confuse ?",
      widget: "classify",
      options: {
        groups: ["🎯 Précise : le robot comprend", "🤷 Confuse : le robot ne comprend pas"],
        items: [
          ["Fais 2 pas en avant", 0],
          ["Va un peu plus loin", 1],
          ["Tourne à droite", 0],
          ["Fais quelque chose de bien", 1],
          ["Prends le ballon rouge", 0],
          ["Range tout", 1],
          ["Répète 3 fois : saute", 0],
          ["Fais comme tu veux", 1]
        ]
      },
      caption: "Une instruction est précise quand elle dit exactement quoi faire, combien et quelle chose."
    },
    {
      type: "text",
      title: "Deux astuces des algorithmes : RÉPÈTE et SI 🔁❓",
      html: `<p><b>🔁 RÉPÈTE (boucle)</b><br>Au lieu d'écrire « avance, avance, avance, avance », j'écris : <b>« répète 4 fois : avance »</b>. Plus court et plus clair !</p>
<p>Exemple : pour monter l'escalier 🪜 → <i>répète jusqu'à ce que tu sois en haut : monte une marche</i>.</p>
<p><b>❓ SI… ALORS… SINON (condition)</b><br>Parfois, il faut choisir :</p>
<p>☔ <i><b>SI</b> il pleut, <b>ALORS</b> je prends le parapluie, <b>SINON</b> je prends la casquette.</i></p>
<p>🚦 <i><b>SI</b> le feu est vert, <b>ALORS</b> je traverse, <b>SINON</b> j'attends.</i></p>
<p>Avec des <b>suites</b>, des <b>boucles</b> et des <b>conditions</b>, on peut construire tous les programmes du monde, même les jeux vidéo ! 🎮</p>`
    },
    {
      type: "3d",
      title: "RÉPÈTE avec des cubes 🧊",
      scene: "blocks",
      options: { mode: "array", a: 3, b: 4 },
      caption: "L'algorithme est : « RÉPÈTE 3 fois : pose une rangée de 4 cubes ». Déplace les curseurs pour changer combien de fois répéter et combien de cubes poser chaque fois. Combien de cubes en tout ?"
    },
    {
      type: "example",
      title: "Exemple pratique : le sac pour l'école 🎒",
      html: `<p>Chaque soir, Tommaso suit son algorithme :</p>
<ol>
<li>📅 Il regarde l'emploi du temps de demain.</li>
<li>🔁 <b>Répète</b> pour chaque matière : mets dans le sac le livre et le cahier.</li>
<li>✏️ Il vérifie la trousse.</li>
<li>❓ <b>Si</b> demain il y a éducation physique, <b>alors</b> il prépare les baskets 👟.</li>
<li>🚪 Il met le sac près de la porte.</li>
</ol>
<p>Il y a une <b>suite</b>, une <b>boucle</b> (répète) et une <b>condition</b> (si) ! Ainsi, il n'oublie rien.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : le jeu du robot humain 🧍‍♂️🤖",
      html: `<p>En classe, on joue par deux : l'un est le <b>programmeur</b>, l'autre le <b>robot</b>.</p>
<ul>
<li>Le programmeur écrit sur une feuille les flèches pour mener le robot de la table au tableau : ⬆️⬆️↪️⬆️⬆️⬆️</li>
<li>Le robot exécute <b>seulement</b> ce qui est écrit, sans réfléchir.</li>
<li>Si le robot se cogne contre une chaise… il y a une <b>erreur</b> dans le programme ! Cela s'appelle un <b>bug</b> 🐞.</li>
<li>Le programmeur trouve l'erreur et la corrige : cela s'appelle le <b>débogage</b> (<b>debug</b>).</li>
</ul>
<p>Se tromper, c'est très bien : même les meilleurs programmeurs trouvent et corrigent des erreurs tous les jours !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? 📜",
      html: `<p>Le mot <b>algorithme</b> vient du nom d'un grand mathématicien, <b>al-Khwarizmi</b>, qui vécut il y a environ <b>1 200 ans</b> à <b>Bagdad</b> (aujourd'hui en Irak). Il écrivit un livre pour expliquer comment faire les calculs avec les chiffres que nous utilisons encore aujourd'hui, 0 1 2 3… Quand le livre fut traduit en latin, son nom devint « Algoritmi » !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? 🦋",
      html: `<p>Pourquoi une erreur dans les programmes s'appelle-t-elle un <b>bug</b> (en anglais, « insecte ») ? En <b>1947</b>, aux États-Unis, un ordinateur géant tomba en panne : à l'intérieur, les scientifiques du groupe de <b>Grace Hopper</b> trouvèrent un <b>papillon de nuit</b> coincé ! Ils le collèrent dans leur cahier avec du ruban adhésif, en écrivant qu'ils avaient trouvé le premier vrai « bug ». Le cahier avec le papillon de nuit se trouve encore dans un musée !</p>`
    },
    {
      type: "widget",
      title: "L'histoire des algorithmes",
      widget: "timeline",
      options: {
        unit: "anni",
        events: [
          { year: -300, label: "Euclide écrit un algorithme pour les nombres", icon: "📐" },
          { year: 825, label: "Al-Khwarizmi à Bagdad", icon: "📜" },
          { year: 1843, label: "Ada Lovelace écrit le premier programme", icon: "👩‍💻" },
          { year: 1947, label: "Le premier « bug » : un papillon de nuit !", icon: "🦋" },
          { year: 2007, label: "Naissance de Scratch, le coding par blocs", icon: "🐱" },
          { year: 2013, label: "Première Europe Code Week", icon: "🇪🇺" }
        ]
      },
      caption: "Les algorithmes existent depuis bien avant les ordinateurs !"
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les algorithmes",
      intro: "Les algorithmes peuvent aussi s'apprendre sans ordinateur : avec le corps, avec la musique, avec des cartes !",
      tabs: [
        {
          label: "🃏 CodyRoby, le jeu italien",
          html: `<p><b>CodyRoby</b> est un jeu de cartes inventé en <b>Italie</b> par le professeur <b>Alessandro Bogliolo</b> de l'Université d'Urbino pour la <b>Code Week</b>.</p>
<ul>
<li>Il y a des cartes avec <b>trois flèches</b> : ⬆️ avance, ↩️ tourne à gauche, ↪️ tourne à droite.</li>
<li>Sur un damier dessiné par terre ou sur une feuille, un enfant (ou un pion) est le robot <b>Roby</b>.</li>
<li>On aligne les cartes pour faire le <b>programme</b>, puis Roby l'exécute.</li>
</ul>
<p>On joue sans écran : cela s'appelle le <b>coding unplugged</b> (« programmer sans prise ») 🔌.</p>`
        },
        {
          label: "💃 La danse est un algorithme",
          html: `<p>Chaque ballet est un algorithme ! Essaie ceci :</p>
<p>🎵 <b>RÉPÈTE 2 fois :</b><br>👏 tape dans les mains<br>🦶 tape du pied droit<br>🔄 tourne sur toi-même<br><b>FIN RÉPÈTE</b><br>🙌 lève les bras !</p>
<p>Les <b>chansons</b> fonctionnent aussi ainsi : le <b>refrain</b> est une boucle qui se répète. Les danses de groupe et les jeux de mains (comme « Pomme de reinette et pomme d'api ») sont aussi des algorithmes !</p>`
        },
        {
          label: "🔢 Petits sauts sur la droite",
          html: `<p>Voici un algorithme avec des nombres : <b>pars de 0. RÉPÈTE 5 fois : saute en avant de 3.</b> Où arrives-tu ?</p>
<p>Essaie sur la droite ci-dessous : 0 → 3 → 6 → 9 → 12 → <b>15</b>. C'est la table de 3 ! Les tables de multiplication sont des algorithmes qui répètent une addition.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [3, 6, 9, 12, 15] }
        },
        {
          label: "🍝 Les recettes dans le monde",
          html: `<p>Les <b>recettes</b> sont les algorithmes les plus anciens et les plus aimés du monde !</p>
<ul>
<li>🇮🇹 Les <b>pâtes à la tomate</b> : ingrédients (= les données) + étapes dans l'ordre (= les instructions).</li>
<li>🇯🇵 Les <b>origamis</b> japonais : des instructions précises pour plier le papier, étape après étape, jusqu'à une grue en papier 🦢.</li>
<li>🧶 Les <b>aiguilles à tricoter</b> : « répète 20 fois : une maille à l'endroit, une maille à l'envers » est justement une boucle !</li>
</ul>
<p>Une tablette d'argile de <b>Babylone</b>, vieille d'environ 3 700 ans, contient des recettes écrites : parmi les plus anciennes du monde.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des algorithmes",
      nodes: [
        { id: "algoritmo", label: "Algorithme", x: 50, y: 6, color: "#6366f1", html: "<p>Une suite d'instructions ordonnées, précises et finies pour résoudre un problème.</p>", why: "<p>Le nom vient d'<b>al-Khwarizmi</b>, mathématicien de Bagdad du IXe siècle. Mais le premier algorithme célèbre est encore plus ancien : celui d'<b>Euclide</b> (vers 300 av. J.-C.) pour trouver le plus grand diviseur commun de deux nombres.</p>" },
        { id: "sequenza", label: "Suite", x: 18, y: 32, color: "#22c55e", html: "<p>Les étapes l'une après l'autre, dans l'ordre.</p>", why: "<p>Beaucoup d'actions dépendent de celles d'avant : tu ne peux pas cuire le gâteau si tu n'as pas mélangé les ingrédients. C'est pour cela que l'ordre est important.</p>" },
        { id: "ciclo", label: "Boucle (RÉPÈTE)", x: 50, y: 32, color: "#f59e0b", html: "<p>Répéter les mêmes instructions plusieurs fois.</p>", why: "<p>Les machines sont très fortes pour répéter sans se fatiguer. Avec une boucle, un programme court peut faire énormément de travail : l'ordinateur répète des millions de fois sans s'ennuyer !</p>" },
        { id: "condizione", label: "Condition (SI)", x: 82, y: 32, color: "#ef4444", html: "<p>Choisir quoi faire selon une situation.</p>", why: "<p>Le monde change (il pleut, il ne pleut pas) et le programme doit s'adapter. Avec le <b>SI</b>, l'ordinateur vérifie si une chose est vraie ou fausse, puis décide.</p>" },
        { id: "preciso", label: "Instructions précises", x: 18, y: 62, color: "#0ea5e9", html: "<p>Chaque instruction doit être claire, sans doute.</p>", why: "<p>L'ordinateur ne sait pas « deviner » ce que nous voulons : il exécute à la lettre. C'est pour cela que les langages de programmation ont des règles très strictes.</p>" },
        { id: "programma", label: "Programme", x: 50, y: 62, color: "#a855f7", html: "<p>Un algorithme écrit dans une langue que l'ordinateur comprend.</p>", why: "<p>La première personne à écrire un programme fut <b>Ada Lovelace</b>, en <b>1843</b>, pour une machine à calculer imaginée par Charles Babbage qui ne fut jamais terminée. C'est pour cela qu'on se souvient d'elle comme de la première programmeuse de l'histoire.</p>" },
        { id: "bug", label: "Bug et débogage", x: 82, y: 62, color: "#64748b", html: "<p>Bug = erreur. Debug = trouver et corriger l'erreur.</p>", why: "<p>En 1947, le groupe de Grace Hopper trouva un vrai papillon de nuit dans un ordinateur. Depuis, « bug » est le nom de toutes les erreurs dans les programmes.</p>" },
        { id: "coding", label: "Coding", x: 50, y: 92, color: "#14b8a6", html: "<p>Apprendre à programmer, même en jouant, avec ou sans ordinateur.</p>", why: "<p>Le coding apprend à diviser un grand problème en petits morceaux : cette façon de raisonner s'appelle la <b>pensée informatique</b> (computationnelle). Les programmes scolaires la prévoient déjà dès l'école primaire.</p>" }
      ],
      edges: [
        ["algoritmo", "sequenza", "est fait d'une"],
        ["algoritmo", "ciclo", "peut utiliser une"],
        ["algoritmo", "condizione", "peut utiliser une"],
        ["sequenza", "preciso", "d'instructions"],
        ["algoritmo", "programma", "écrit pour le PC ="],
        ["programma", "bug", "peut avoir un"],
        ["programma", "coding", "s'apprend avec le"],
        ["ciclo", "programma", "dans le"],
        ["condizione", "programma", "dans le"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : répète et si",
      questions: [
        { type: "mc", q: "« Répète 3 fois : saute ». Combien de sauts fais-tu ?", options: ["1", "3", "6"], answer: 1, explain: "La boucle répète le saut 3 fois." },
        { type: "mc", q: "« SI il pleut ALORS je prends le parapluie ». Aujourd'hui il y a du soleil. Je prends le parapluie ?", options: ["Oui", "Non"], answer: 1, explain: "La condition « il pleut » est fausse, donc je ne prends pas le parapluie." },
        { type: "text", q: "Comment s'appelle en anglais une erreur dans un programme ?", answer: ["bug", "un bug"], explain: "Bug, comme l'insecte trouvé en 1947 !" }
      ]
    },
    {
      type: "remember",
      title: "À retenir 📌",
      html: `<ul>
<li>Un <b>algorithme</b> est une liste d'instructions <b>ordonnées</b>, <b>précises</b> et <b>finies</b>.</li>
<li>Les recettes et les routines de chaque jour sont des algorithmes.</li>
<li>🔁 <b>Répète</b> = boucle ; ❓ <b>Si… alors… sinon</b> = condition.</li>
<li>Un algorithme écrit pour l'ordinateur est un <b>programme</b> ; une erreur est un <b>bug</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Algorithme", d: "Suite ordonnée d'instructions précises pour résoudre un problème." },
    { t: "Instruction", d: "Une seule étape qui dit quoi faire." },
    { t: "Suite (séquence)", d: "Des étapes mises dans l'ordre, l'une après l'autre." },
    { t: "Boucle", d: "Des instructions qui se répètent plusieurs fois (RÉPÈTE)." },
    { t: "Condition", d: "Un choix : SI une chose arrive ALORS fais ceci, SINON cela." },
    { t: "Programme", d: "Un algorithme écrit dans un langage que l'ordinateur comprend." },
    { t: "Coding", d: "Programmer ; même en jouant, sans ordinateur." },
    { t: "Bug", d: "Une erreur dans un programme." },
    { t: "Debug (débogage)", d: "Trouver et corriger les erreurs." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qu'est-ce qu'un algorithme ?", options: ["Une suite d'instructions dans l'ordre", "Un dessin au hasard", "Un type d'ordinateur"], answer: 0, explain: "Des instructions ordonnées, précises et finies." },
      { type: "order", q: "Mets dans l'ordre : s'habiller pour sortir.", items: ["Je mets les chaussettes", "Je mets les chaussures", "Je lace les chaussures", "Je sors de la maison"], explain: "Les chaussettes avant les chaussures !" },
      { type: "order", q: "Mets dans l'ordre : préparer un thé.", items: ["Je chauffe l'eau", "Je verse l'eau dans la tasse", "Je mets le sachet", "J'attends quelques minutes", "J'enlève le sachet et je bois"], explain: "Chaque étape dépend de la précédente." },
      { type: "tf", q: "Un robot comprend l'instruction « Fais quelque chose de bien ».", answer: false, explain: "C'est une instruction confuse : le robot a besoin d'instructions précises." },
      { type: "mc", q: "Quelle instruction est PRÉCISE ?", options: ["Va par là", "Fais 3 pas en avant", "Bouge un peu"], answer: 1, explain: "Elle dit exactement quoi faire et combien." },
      { type: "num", q: "« Répète 4 fois : mets 2 bonbons dans le sachet ». Combien de bonbons y a-t-il à la fin ?", answer: 8, tol: 0, unit: "bonbons", explain: "4 fois 2 = 8." },
      { type: "mc", q: "« SI le feu est rouge ALORS je m'arrête SINON je traverse ». Le feu est vert : que fais-je ?", options: ["Je m'arrête", "Je traverse", "Je rentre à la maison"], answer: 1, explain: "La condition « rouge » est fausse : c'est SINON qui s'applique." },
      { type: "text", q: "Comment s'appelle le fait de trouver et corriger les erreurs d'un programme ?", answer: ["debug", "debugging", "le debug", "débogage", "le débogage"], explain: "Debug : enlever les bugs." },
      { type: "mc", q: "D'où vient le mot « algorithme » ?", options: ["Du nom d'un mathématicien de Bagdad", "D'un robot japonais", "D'un jeu vidéo"], answer: 0, explain: "Du nom d'al-Khwarizmi." },
      { type: "tf", q: "On peut faire du coding même sans ordinateur.", answer: true, explain: "Cela s'appelle le coding unplugged : avec des cartes, des flèches, des jeux." },
      { type: "num", q: "Pars de 0 et « répète 5 fois : saute en avant de 2 ». À quel nombre arrives-tu ?", answer: 10, tol: 0, explain: "0 → 2 → 4 → 6 → 8 → 10." },
      { type: "mc", q: "Qui est considérée comme la première programmeuse de l'histoire ?", options: ["Ada Lovelace", "Cléopâtre", "Grace Kelly"], answer: 0, explain: "Ada Lovelace écrivit le premier programme en 1843." }
    ]
  }
});
