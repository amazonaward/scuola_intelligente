TOPIC('fr', {
  id: `p5-tec-ia-intro`,
  title: `Qu'est-ce que l'intelligence artificielle ?`,
  intro: `Le téléphone qui reconnaît ton visage, l'assistant vocal qui répond aux questions, le programme qui traduit un texte en un instant : derrière, il y a l'<b>intelligence artificielle</b> (IA). Mais comment une machine peut-elle « apprendre » ? Est-elle vraiment intelligente comme nous ? Aujourd'hui, nous le découvrons, et nous apprenons aussi à l'utiliser avec discernement. 🤖🧠`,
  minutes: 35,
  sections: [
    {
      type: `text`, title: `1. Programmes ordinaires et programmes qui apprennent`,
      html: `<p>Un <b>programme ordinaire</b> suit des <b>instructions</b> écrites par une personne, pas à pas, comme une recette : <i>« si le nombre est pair, écris PAIR ; sinon écris IMPAIR »</i>. Le programmeur doit tout prévoir.</p>
<p>Mais essaie d'écrire les instructions pour reconnaître un <b>chat</b> sur une photo : « il a les oreilles pointues »… les renards aussi ! « Il a des moustaches »… les souris aussi ! Il est presque impossible d'écrire toutes les règles.</p>
<p>L'<b>intelligence artificielle</b> prend un autre chemin : au lieu de donner des règles à la machine, nous lui donnons <b>énormément d'exemples</b>, et elle découvre toute seule les « règles cachées ». Cette façon de faire s'appelle l'<b>apprentissage automatique</b> (en anglais <i>machine learning</i>).</p>
<p>C'est un peu comme toi quand tu as appris à reconnaître les chiens : personne ne t'a donné de définition, tu as vu beaucoup de chiens et tu as compris comment ils étaient faits !</p>`
    },
    {
      type: `text`, title: `2. Comment une machine apprend : 4 étapes`,
      html: `<ol>
<li><b>Rassembler les données</b> : par exemple 10 000 photos de chats et 10 000 photos de chiens.</li>
<li><b>Étiqueter</b> : une personne écrit sur chaque photo « chat » ou « chien ». Ce sont les <b>données d'entraînement</b>.</li>
<li><b>Entraîner</b> (<i>training</i>) : la machine regarde les photos, essaie de deviner, vérifie l'étiquette et, si elle s'est trompée, se corrige un petit peu. Elle le répète des milliers et des milliers de fois. À la fin, elle a construit un <b>modèle</b>.</li>
<li><b>Utiliser et vérifier</b> : on lui montre une <b>nouvelle</b> photo, jamais vue. Le modèle répond : « chat à 95 % ». On contrôle combien de fois il a raison.</li>
</ol>
<p>Remarque : l'IA n'est pas sûre à 100 %, elle donne une <b>probabilité</b>. Et elle n'apprend que de ce qu'on lui donne : si dans les photos il n'y a que des chats noirs, elle pourrait ne pas reconnaître un chat blanc !</p>`
    },
    {
      type: `svg`, title: `Des exemples au modèle`,
      caption: `Beaucoup d'exemples avec étiquette ➜ entraînement ➜ un modèle qui reconnaît aussi de nouveaux exemples.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<text x="95" y="30" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">1. Exemples + étiquettes</text>
<rect x="20" y="45" width="70" height="60" rx="8" fill="#ffffff" stroke="#a78bfa" stroke-width="2"/><text x="55" y="85" font-size="30" text-anchor="middle">🐱</text>
<rect x="100" y="45" width="70" height="60" rx="8" fill="#ffffff" stroke="#a78bfa" stroke-width="2"/><text x="135" y="85" font-size="30" text-anchor="middle">🐶</text>
<rect x="20" y="125" width="70" height="60" rx="8" fill="#ffffff" stroke="#a78bfa" stroke-width="2"/><text x="55" y="165" font-size="30" text-anchor="middle">🐈</text>
<rect x="100" y="125" width="70" height="60" rx="8" fill="#ffffff" stroke="#a78bfa" stroke-width="2"/><text x="135" y="165" font-size="30" text-anchor="middle">🐕</text>
<text x="55" y="120" font-size="13" text-anchor="middle" fill="#16a34a" font-weight="bold">chat</text>
<text x="135" y="120" font-size="13" text-anchor="middle" fill="#2563eb" font-weight="bold">chien</text>
<text x="55" y="200" font-size="13" text-anchor="middle" fill="#16a34a" font-weight="bold">chat</text>
<text x="135" y="200" font-size="13" text-anchor="middle" fill="#2563eb" font-weight="bold">chien</text>
<text x="95" y="230" font-size="14" text-anchor="middle" fill="#4c1d95">… des milliers de photos</text>
<text x="200" y="130" font-size="34" fill="#7c3aed">➜</text>
<rect x="240" y="70" width="140" height="120" rx="16" fill="#7c3aed"/>
<text x="310" y="110" font-size="34" text-anchor="middle">⚙️</text>
<text x="310" y="145" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">2. Entraînement</text>
<text x="310" y="168" font-size="13" text-anchor="middle" fill="#ede9fe">essaie, se trompe, corrige</text>
<text x="390" y="130" font-size="34" fill="#7c3aed">➜</text>
<rect x="430" y="45" width="150" height="80" rx="12" fill="#ffffff" stroke="#7c3aed" stroke-width="3"/>
<text x="505" y="75" font-size="15" text-anchor="middle" fill="#4c1d95" font-weight="bold">3. Nouvelle photo</text>
<text x="505" y="112" font-size="30" text-anchor="middle">🐈‍⬛</text>
<rect x="430" y="150" width="150" height="80" rx="12" fill="#22c55e"/>
<text x="505" y="182" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">4. Réponse</text>
<text x="505" y="212" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">chat : 95 %</text>
<line x1="505" y1="125" x2="505" y2="150" stroke="#7c3aed" stroke-width="3"/>
<text x="300" y="275" font-size="16" text-anchor="middle" fill="#4c1d95">Plus d'exemples bons et variés = de meilleures réponses</text>
</svg>`
    },
    {
      type: `widget`, title: `À toi d'« entraîner » ton cerveau`,
      widget: `classify`,
      caption: `Fais comme une IA : regarde les exemples et répartis-les en deux groupes. Quelle « règle cachée » as-tu utilisée ?`,
      options: {
        groups: [`🍎 Fruits`, `🥕 Légumes`],
        items: [
          [`🍎 pomme`, 0], [`🍌 banane`, 0], [`🍇 raisin`, 0], [`🍓 fraise`, 0], [`🍐 poire`, 0],
          [`🥕 carotte`, 1], [`🥦 brocoli`, 1], [`🥬 laitue`, 1], [`🧅 oignon`, 1], [`🥔 pomme de terre`, 1]
        ]
      }
    },
    {
      type: `quiz`, title: `Mini-quiz : comment l'IA apprend`,
      questions: [
        { type: `mc`, q: `Comment un système d'apprentissage automatique apprend-il ?`, options: [`Il lit un livre de règles`, `À partir de beaucoup d'exemples`, `En demandant à la maîtresse`], answer: 1, explain: `Il apprend des données d'entraînement : beaucoup d'exemples, souvent avec des étiquettes.` },
        { type: `tf`, q: `L'IA est toujours sûre à 100 % de ses réponses.`, answer: false, explain: `Elle donne une probabilité et peut se tromper.` },
        { type: `order`, q: `Remets les étapes dans l'ordre.`, items: [`Rassembler les données`, `Étiqueter les exemples`, `Entraîner le modèle`, `Essayer avec de nouvelles données`], explain: `Données ➜ étiquettes ➜ entraînement ➜ vérification.` }
      ]
    },
    {
      type: `text`, title: `3. Les réseaux de neurones : un « cerveau » fait de nombres`,
      html: `<p>Beaucoup d'IA d'aujourd'hui utilisent les <b>réseaux de neurones artificiels</b>, inspirés (de très loin) des <b>neurones</b> de notre cerveau.</p>
<ul>
<li>Un réseau est fait de nombreux « neurones » artificiels disposés en <b>couches</b>.</li>
<li>La première couche reçoit les données (par exemple les pixels d'une photo).</li>
<li>Les couches du milieu, dites <b>cachées</b>, découvrent des choses de plus en plus complexes : d'abord des lignes et des taches, puis des formes comme des yeux et des oreilles, puis « museau de chat ».</li>
<li>La dernière couche donne la réponse.</li>
</ul>
<p>Chaque connexion a un <b>poids</b>, un nombre qui dit son importance. Entraîner le réseau, c'est <b>ajuster les poids</b> petit à petit jusqu'à ce que les réponses deviennent justes. Les plus grands réseaux ont des <b>milliards</b> de poids !</p>
<p>Quand les réseaux ont beaucoup de couches, on parle d'<b>apprentissage profond</b> (<i>deep learning</i>).</p>`
    },
    {
      type: `3d`, title: `Un réseau de neurones en 3D`,
      scene: `molecule`,
      caption: `Fais tourner le réseau : à gauche les entrées (E, en bleu), au centre la couche cachée (N, en violet), à droite les sorties (chat Ct et chien Cn, en vert). Chaque bâtonnet est une connexion avec son « poids ».`,
      options: {
        atoms: [
          { x: -1.6, y: 0.9, z: 0, r: 0.25, color: `#3b82f6`, label: `E` },
          { x: -1.6, y: 0.3, z: 0, r: 0.25, color: `#3b82f6`, label: `E` },
          { x: -1.6, y: -0.3, z: 0, r: 0.25, color: `#3b82f6`, label: `E` },
          { x: -1.6, y: -0.9, z: 0, r: 0.25, color: `#3b82f6`, label: `E` },
          { x: 0, y: 0.75, z: 0.3, r: 0.28, color: `#a855f7`, label: `N` },
          { x: 0, y: 0, z: -0.3, r: 0.28, color: `#a855f7`, label: `N` },
          { x: 0, y: -0.75, z: 0.3, r: 0.28, color: `#a855f7`, label: `N` },
          { x: 1.6, y: 0.4, z: 0, r: 0.32, color: `#22c55e`, label: `Ct` },
          { x: 1.6, y: -0.4, z: 0, r: 0.32, color: `#22c55e`, label: `Cn` }
        ],
        bonds: [
          [0, 4], [0, 5], [0, 6], [1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6],
          [4, 7], [4, 8], [5, 7], [5, 8], [6, 7], [6, 8]
        ]
      }
    },
    {
      type: `text`, title: `4. Où trouves-tu l'IA chaque jour`,
      html: `<ul>
<li>📷 <b>Reconnaître des images</b> : le déverrouillage par le visage, les photos regroupées par personne, la voiture qui lit les panneaux routiers.</li>
<li>🗣️ <b>Comprendre la voix</b> : les assistants vocaux, les sous-titres automatiques.</li>
<li>🌐 <b>Traduire</b> : les traducteurs automatiques.</li>
<li>🎬 <b>Recommander</b> : les vidéos et les chansons « qui pourraient te plaire ».</li>
<li>💬 <b>Générer des textes et des images</b> : les chatbots et les programmes qui créent des dessins à partir d'une description (IA <b>générative</b>).</li>
<li>🏥 <b>Médecine</b> : aider les médecins à trouver des maladies sur les radiographies.</li>
<li>🌦️ <b>Science</b> : prévoir la météo, découvrir la forme des protéines.</li>
</ul>`
    },
    {
      type: `example`, title: `Exemple pratique : le filtre anti-spam`,
      html: `<p>La boîte mail sépare toute seule les e-mails utiles de ceux qui sont publicitaires ou frauduleux (<b>spam</b>). Comment ?</p>
<ol>
<li>Des millions d'utilisateurs ont appuyé sur le bouton « Signaler comme spam » : ce sont les <b>étiquettes</b>.</li>
<li>Le système a appris que certaines choses apparaissent souvent dans le spam : « VOUS AVEZ GAGNÉ !!! », des liens bizarres, des expéditeurs inconnus.</li>
<li>Quand un nouveau mail arrive, il calcule la probabilité que ce soit du spam. Si elle est élevée, il le déplace dans le dossier spam.</li>
</ol>
<p>Chaque fois que tu signales un spam, tu aides l'IA à apprendre !</p>`
    },
    {
      type: `example`, title: `Exemple pratique : pourquoi le chatbot peut se tromper`,
      html: `<p>Un <b>chatbot</b> (comme les assistants avec lesquels on peut « bavarder ») a été entraîné sur une énorme quantité de textes. Il a appris à prévoir <b>quel mot vient ensuite</b>, si bien qu'il écrit des phrases qui semblent venir d'une personne.</p>
<p>Mais il ne « sait » <b>pas</b> les choses comme toi : parfois il invente des réponses fausses écrites de façon très convaincante (on les appelle des « <b>hallucinations</b> »).</p>
<p>Exemple : tu demandes « Qui a gagné la course de mon école ? ». Le chatbot ne peut pas le savoir, mais il pourrait inventer un nom ! C'est pourquoi il faut toujours <b>vérifier</b> les informations sur des sources fiables : un livre, un enseignant, un site sérieux.</p>`
    },
    {
      type: `decision`, title: `Toi, que ferais-tu ?`,
      html: `<p>Tu dois faire une recherche sur les Égyptiens pour l'école. Un chatbot t'écrit en un instant un très beau texte, qui dit aussi que « les pyramides ont été construites en 1200 apr. J.-C. ».</p>`,
      question: `Que fais-tu ?`,
      options: [
        { label: `Je copie le texte tel quel et je le rends.`, outcome: `Le texte n'est pas de toi et contient une erreur grave : les pyramides de Gizeh ont environ 4 500 ans (2600–2500 av. J.-C.) ! La maîtresse s'en aperçoit, et surtout tu n'as rien appris.` },
        { label: `J'utilise le chatbot pour me faire expliquer les idées principales, je vérifie les données dans le livre et j'écris le texte avec mes mots.`, outcome: `Très bien ! Tu utilises l'IA comme un assistant, pas comme quelqu'un qui travaille à ta place. En vérifiant, tu découvres aussi l'erreur sur la date.` },
        { label: `Je n'utilise jamais aucune IA parce qu'elles se trompent toutes.`, outcome: `C'est prudent, mais l'IA peut être utile : elle explique de différentes façons, aide à faire des schémas, à s'exercer. L'important est de l'utiliser avec un adulte, avec les bonnes autorisations, et de toujours vérifier.` }
      ],
      answer: 1,
      explain: `L'IA est un <b>outil</b> : elle peut t'aider à comprendre et à organiser tes idées, mais elle peut se tromper et ne remplace pas ton cerveau. La règle d'or : <b>utilise-la, mais vérifie toujours et écris avec tes propres mots</b>. Et rappelle-toi que pour beaucoup de services d'IA, il faut l'autorisation des parents, surtout avant 14 ans.`
    },
    {
      type: `remember`, title: `Les règles pour bien utiliser l'IA`,
      html: `<ul>
<li>✅ <b>Vérifie</b> : l'IA peut se tromper ou inventer. Contrôle sur des sources fiables.</li>
<li>🔒 <b>Vie privée</b> : n'écris jamais ton nom complet, ton adresse, ton école, tes mots de passe ou des photos personnelles.</li>
<li>🧠 <b>Réfléchis toi-même</b> : utilise-la pour mieux comprendre, pas pour copier.</li>
<li>👨‍👩‍👧 <b>Demande à un adulte</b> : beaucoup de services demandent l'autorisation des parents.</li>
<li>⚖️ <b>Respect</b> : ne l'utilise pas pour se moquer de quelqu'un ou créer de fausses images de personnes réelles.</li>
</ul>`
    },
    {
      type: `widget`, title: `Jeu : IA ou pas IA ?`,
      widget: `classify`,
      caption: `Lesquelles de ces choses utilisent l'apprentissage automatique, et lesquelles suivent seulement des règles fixes ?`,
      options: {
        groups: [`🤖 Utilise l'IA (apprend des données)`, `⚙️ Suit des règles fixes`],
        items: [
          [`Déverrouillage du téléphone par le visage`, 0], [`Traducteur automatique`, 0], [`Vidéos recommandées`, 0], [`Assistant vocal`, 0], [`Filtre anti-spam`, 0],
          [`Calculatrice`, 1], [`Feu de signalisation minuté`, 1], [`Réveil`, 1], [`Thermostat qui s'allume à 20 °C`, 1]
        ]
      }
    },
    {
      type: `curiosity`, title: `Le savais-tu ? La question « les machines peuvent-elles penser ? » a plus de 75 ans`,
      html: `<p>En <b>1950</b>, le mathématicien anglais <b>Alan Turing</b> a proposé un jeu : une personne discute avec deux interlocuteurs cachés, un humain et une machine. Si elle n'arrive pas à comprendre qui est la machine, alors la machine se comporte de façon « intelligente ». C'est le célèbre <b>test de Turing</b>. Le nom « intelligence artificielle » est né en revanche en <b>1956</b>, lors d'une conférence au Dartmouth College (États-Unis) organisée par <b>John McCarthy</b>.</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? Un ordinateur a battu le champion du monde d'échecs`,
      html: `<p>En <b>1997</b>, l'ordinateur <b>Deep Blue</b> d'IBM a battu le champion du monde d'échecs <b>Garry Kasparov</b>. En <b>2016</b>, le programme <b>AlphaGo</b> a battu le champion <b>Lee Sedol</b> au <b>go</b>, un jeu chinois qui a plus de positions possibles que d'atomes dans l'univers. AlphaGo avait appris en étudiant des parties d'êtres humains, puis en jouant des millions de parties… contre lui-même !</p>`
    },
    {
      type: `curiosity`, title: `Le savais-tu ? L'Europe a fait la première loi sur l'IA`,
      html: `<p>En <b>2024</b>, l'Union européenne a adopté l'<b>AI Act</b> (règlement sur l'intelligence artificielle), la première grande loi au monde sur l'intelligence artificielle. Elle classe les IA selon le <b>risque</b> : certaines sont interdites (par exemple celles qui manipulent les personnes), d'autres, comme celles utilisées à l'hôpital ou à l'école, doivent respecter des règles strictes. L'Italie aussi, en 2025, a fait sa loi sur l'IA.</p>`
    },
    {
      type: `alternatives`, title: `D'autres façons de comprendre`,
      intro: `L'apprentissage automatique est une idée difficile. Voici d'autres chemins.`,
      tabs: [
        {
          label: `🐕 Comme dresser un chien`,
          html: `<p>Quand tu apprends à un chien à s'asseoir, tu ne lui expliques pas les règles : tu dis « assis », et quand il le fait, tu lui donnes une récompense 🦴. S'il se trompe, pas de récompense. Après beaucoup d'essais, le chien « a compris ».</p>
<p>Certaines IA apprennent exactement ainsi ! Cela s'appelle l'<b>apprentissage par renforcement</b> : la machine essaie des actions, reçoit des « points » quand elle réussit, et peu à peu apprend la meilleure stratégie. C'est ainsi qu'AlphaGo est devenu champion.</p>`
        },
        {
          label: `🍝 La recette et le chef`,
          html: `<table>
<tr><th>Programme ordinaire</th><th>Intelligence artificielle</th></tr>
<tr><td>Comme suivre une <b>recette</b> mot pour mot : 200 g de pâtes, 10 minutes, du sel.</td><td>Comme un cuisinier qui a goûté <b>mille plats</b> et a compris tout seul ce qui les rend bons.</td></tr>
<tr><td>Règles ➜ réponses</td><td>Exemples + réponses ➜ règles</td></tr>
<tr><td>Il fait seulement ce qui est écrit.</td><td>Il peut affronter des cas nouveaux, mais peut aussi se tromper.</td></tr>
</table>`
        },
        {
          label: `📈 Devine la règle`,
          html: `<p>Regarde ces exemples : 1 ➜ 3 · 2 ➜ 5 · 3 ➜ 7 · 4 ➜ 9. Quel sera le résultat pour 10 ?</p>
<p>Tu as découvert la règle « <b>le double plus un</b> » et tu as répondu <b>21</b>, même si personne ne te l'a dit. C'est exactement ce que fait une machine qui apprend : elle trouve la règle cachée dans les exemples ! Sur la droite ci-dessous sont marqués les résultats : vois-tu le schéma ?</p>`,
          widget: `numberLine`,
          options: { min: 0, max: 22, step: 1, marks: [3, 5, 7, 9, 21] }
        },
        {
          label: `🔗 Les mots de l'IA`,
          html: `<p>Associe chaque mot à sa signification.</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`Données d'entraînement`, `Les exemples dont la machine apprend`],
              [`Étiquette`, `La bonne réponse écrite sur un exemple`],
              [`Modèle`, `Le résultat de l'entraînement`],
              [`Réseau de neurones`, `Couches de neurones artificiels reliés`],
              [`Hallucination`, `Réponse inventée mais convaincante`],
              [`Chatbot`, `Programme avec lequel on converse`]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : les racines de l'intelligence artificielle`,
      nodes: [
        { id: `ia`, label: `Intelligence artificielle`, x: 50, y: 8, color: `#7c3aed`, html: `Systèmes qui accomplissent des tâches qui demandent d'habitude l'intelligence humaine.`, why: `Le nom a été choisi par <b>John McCarthy</b> pour la conférence de Dartmouth de 1956. Les scientifiques de l'époque pensaient résoudre le problème en quelques années… il a fallu des décennies !` },
        { id: `turing`, label: `Alan Turing`, x: 15, y: 25, color: `#64748b`, html: `Le « père » de l'informatique et de l'IA.`, why: `En 1936, il a décrit la « machine de Turing », le modèle de tout ordinateur. En 1950, il s'est demandé si les machines peuvent penser et a proposé son test. Pendant la guerre, il a aidé à déchiffrer les codes secrets nazis.` },
        { id: `dati`, label: `Données`, x: 85, y: 25, color: `#0ea5e9`, html: `Les exemples dont la machine apprend.`, why: `Les IA modernes fonctionnent parce qu'aujourd'hui, grâce à Internet, il existe d'énormes quantités de textes, de photos et de sons. Un grand projet, <b>ImageNet</b> (2009), a rassemblé plus de 14 millions d'images étiquetées à la main.` },
        { id: `ml`, label: `Apprentissage automatique`, x: 50, y: 35, color: `#a855f7`, html: `Apprendre des exemples plutôt que de règles écrites.`, why: `Le terme <i>machine learning</i> a été utilisé en 1959 par <b>Arthur Samuel</b>, qui a créé un programme de jeu de dames capable de s'améliorer en jouant contre lui-même.` },
        { id: `neuro`, label: `Neurones du cerveau`, x: 15, y: 60, color: `#ec4899`, html: `L'inspiration biologique.`, why: `En 1943, McCulloch et Pitts ont décrit un « neurone mathématique ». Notre cerveau a environ 86 milliards de neurones reliés entre eux : les réseaux artificiels en imitent l'idée, pas le fonctionnement exact.` },
        { id: `rete`, label: `Réseaux de neurones`, x: 40, y: 62, color: `#8b5cf6`, html: `Couches de neurones artificiels avec des poids à régler.`, why: `Le premier, le <b>Perceptron</b>, a été construit par Frank Rosenblatt en 1958. Les réseaux profonds ne sont devenus puissants qu'après 2012, grâce à plus de données et à des puces très rapides (les GPU, nés pour les jeux vidéo !).` },
        { id: `usi`, label: `Usages quotidiens`, x: 70, y: 62, color: `#22c55e`, html: `Traducteurs, assistants vocaux, photos, médecine.`, why: `Elles fonctionnent bien là où il y a beaucoup d'exemples et des règles difficiles à écrire à la main : images, voix, langues.` },
        { id: `etica`, label: `Usage responsable`, x: 55, y: 88, color: `#ef4444`, html: `Vérifier, protéger la vie privée, éviter les injustices.`, why: `Si les données d'entraînement sont incomplètes ou pleines de préjugés, l'IA le sera aussi (on appelle cela le <b>biais</b>). C'est pourquoi il faut des règles, comme l'AI Act européen de 2024, et des personnes qui contrôlent.` }
      ],
      edges: [
        [`turing`, `ia`, `pose la question`], [`ia`, `ml`, `aujourd'hui surtout`], [`dati`, `ml`, `nourrissent`], [`neuro`, `rete`, `inspirent`],
        [`ml`, `rete`, `utilise`], [`rete`, `usi`, `permettent`], [`usi`, `etica`, `exigent`], [`dati`, `etica`, `peuvent avoir des biais`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : l'IA dans la vie de tous les jours`,
      questions: [
        { type: `mc`, q: `Qu'est-ce qu'une « hallucination » d'un chatbot ?`, options: [`Un rêve de l'ordinateur`, `Une réponse inventée mais écrite de façon convaincante`, `Un virus`], answer: 1, explain: `Le chatbot peut inventer des faits : il faut toujours vérifier.` },
        { type: `tf`, q: `C'est une bonne idée d'écrire son adresse personnelle dans un chatbot.`, answer: false, explain: `Ne jamais partager de données personnelles en ligne.` },
        { type: `mc`, q: `Laquelle de ces choses n'utilise PAS l'IA ?`, options: [`Le traducteur automatique`, `Une calculatrice`, `Le déverrouillage par le visage`], answer: 1, explain: `La calculatrice suit des règles fixes, elle n'apprend pas.` }
      ]
    }
  ],
  glossary: [
    { t: `Intelligence artificielle (IA)`, d: `Systèmes informatiques capables d'accomplir des tâches comme reconnaître, traduire, prévoir, en apprenant des données.` },
    { t: `Apprentissage automatique`, d: `Machine learning : la machine apprend à partir d'exemples plutôt que de règles écrites.` },
    { t: `Données d'entraînement`, d: `Les exemples utilisés pour apprendre à une IA.` },
    { t: `Étiquette`, d: `La bonne réponse associée à un exemple (par ex. « chat »).` },
    { t: `Modèle`, d: `Le résultat de l'entraînement, qui donne des réponses sur de nouvelles données.` },
    { t: `Réseau de neurones`, d: `Ensemble de neurones artificiels disposés en couches et reliés par des poids.` },
    { t: `Chatbot`, d: `Programme avec lequel on peut converser en écrivant ou en parlant.` },
    { t: `Hallucination`, d: `Réponse fausse inventée par une IA mais présentée comme vraie.` },
    { t: `Biais`, d: `Préjugé : erreur systématique due à des données incomplètes ou déséquilibrées.` },
    { t: `Algorithme`, d: `Suite d'instructions précises pour résoudre un problème.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quelle est la différence principale entre un programme ordinaire et une IA qui apprend ?`, options: [`L'IA est plus colorée`, `Le programme ordinaire suit des règles écrites ; l'IA trouve les règles à partir d'exemples`, `Il n'y a pas de différence`], answer: 1, explain: `L'IA apprend à partir d'exemples (données d'entraînement).` },
      { type: `text`, q: `Comment s'appelle en anglais l'apprentissage automatique ?`, answer: [`machine learning`], explain: `Machine learning.` },
      { type: `order`, q: `Remets dans l'ordre les étapes de l'entraînement.`, items: [`Je rassemble beaucoup de photos`, `J'écris l'étiquette sur chaque photo`, `La machine essaie, se trompe et se corrige`, `J'essaie le modèle avec de nouvelles photos`], explain: `Données ➜ étiquettes ➜ entraînement ➜ vérification.` },
      { type: `mc`, q: `Qui a proposé en 1950 un test pour savoir si une machine « pense » ?`, options: [`Alan Turing`, `Léonard de Vinci`, `Albert Einstein`], answer: 0, explain: `Le test de Turing.` },
      { type: `num`, q: `En quelle année est né le nom « intelligence artificielle » ?`, answer: 1956, tol: 0, explain: `À la conférence de Dartmouth, en 1956.` },
      { type: `tf`, q: `Si une IA n'apprend qu'à partir de photos de chats noirs, elle pourrait ne pas reconnaître un chat blanc.`, answer: true, explain: `L'IA n'apprend que de ce qu'elle voit : il faut des données variées (sinon il y a un biais).` },
      { type: `mc`, q: `Les réseaux de neurones artificiels sont inspirés…`, options: [`des neurones du cerveau`, `des toiles d'araignée`, `des filets de pêche`], answer: 0, explain: `Ils sont inspirés, de très loin, des neurones.` },
      { type: `mc`, q: `Un chatbot te donne une date historique. Que fais-tu ?`, options: [`J'y crois tout de suite`, `Je la vérifie dans un livre ou sur un site fiable`, `Je la change au hasard`], answer: 1, explain: `Les IA peuvent se tromper : vérifie toujours.` },
      { type: `mc`, q: `Quelle donnée ne faut-il JAMAIS écrire dans un chatbot ?`, options: [`Une question sur les dinosaures`, `Ton mot de passe`, `Un mot à traduire`], answer: 1, explain: `Les mots de passe et les données personnelles doivent toujours être protégés.` },
      { type: `tf`, q: `En 1997, l'ordinateur Deep Blue a battu le champion du monde d'échecs.`, answer: true, explain: `Il a battu Garry Kasparov.` },
      { type: `text`, q: `Comment s'appelle la loi européenne sur l'IA de 2024 ? (en anglais)`, answer: [`ai act`, `l'ai act`, `artificial intelligence act`, `l’ai act`], explain: `L'AI Act, la première grande loi au monde sur l'IA.` },
      { type: `mc`, q: `Que veut dire « entraîner » un réseau de neurones ?`, options: [`L'allumer`, `Ajuster les poids des connexions jusqu'à ce que les réponses soient justes`, `Le connecter à Internet`], answer: 1, explain: `L'entraînement règle les poids petit à petit.` }
    ]
  }
});
