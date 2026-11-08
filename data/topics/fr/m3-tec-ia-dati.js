TOPIC('fr', {
  id: `m3-tec-ia-dati`,
  title: `Intelligence artificielle et données`,
  intro: `Les suggestions de vidéos, le traducteur, les chatbots qui écrivent des textes, les voitures qui freinent toutes seules : l'<b>intelligence artificielle</b> (IA) fait déjà partie de notre vie. Mais comment une machine fait-elle pour <b>apprendre à partir des données</b> ? Qu'est-ce qu'un <b>réseau de neurones</b> ? Et quels sont les <b>risques</b> (erreurs, préjugés, vie privée, faux) et les <b>opportunités</b> ? Dans cette leçon, nous regardons à l'intérieur de la « boîte noire ». 🤖📊`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Données, informations, connaissances`,
      html: `<p>Une <b>donnée</b> est une valeur brute : <i>38,5</i>. Une <b>information</b> est une donnée qui a un sens : <i>la température de Marco est de 38,5 °C</i>. La <b>connaissance</b> naît de la mise en relation de nombreuses informations : <i>au-dessus de 37,5 °C, on a de la fièvre</i>.</p>
<p>Les données peuvent être :</p>
<ul>
<li><b>structurées</b> : rangées dans des tableaux (notes, températures, prix) ;</li>
<li><b>non structurées</b> : textes, photos, sons, vidéos (elles sont la grande majorité).</li>
</ul>
<p>Dans l'ordinateur, chaque donnée devient une suite de <b>bits</b> (0 et 1). Une photo est une grille de pixels, chacun avec trois nombres (rouge, vert, bleu de 0 à 255). Un texte est une suite de nombres, un pour chaque caractère ou morceau de mot.</p>
<p>Chaque jour, dans le monde, on produit des quantités énormes de données (on parle de <b>big data</b>) : c'est justement cette abondance qui a permis à l'IA moderne de fonctionner.</p>`
    },
    {
      type: `text`, title: `2. Programmer ou faire apprendre ?`,
      html: `<p>Dans la <b>programmation classique</b>, la personne écrit les <b>règles</b> ; l'ordinateur les applique aux données et donne les réponses.</p>
<p>Dans le <b>machine learning</b> (apprentissage automatique), on donne à l'ordinateur les <b>données</b> et les <b>bonnes réponses</b> (exemples) ; l'ordinateur déduit lui-même les <b>règles</b>, c'est-à-dire qu'il construit un <b>modèle</b>.</p>
<p>Il existe trois grandes façons d'apprendre :</p>
<ul>
<li><b>Supervisé</b> : des exemples avec la bonne <b>étiquette</b> (« ce courriel est un spam / n'est pas un spam »). Le modèle apprend à prédire l'étiquette.</li>
<li><b>Non supervisé</b> : des données sans étiquette ; le modèle trouve seul des <b>groupes</b> et des ressemblances (ex. des clients aux goûts proches).</li>
<li><b>Par renforcement</b> : le modèle essaie des actions et reçoit des <b>récompenses ou des pénalités</b>, comme lorsqu'on dresse un chien (ex. apprendre à jouer à un jeu vidéo).</li>
</ul>`
    },
    {
      type: `svg`, title: `Le cycle de l'apprentissage automatique`,
      caption: `Données ➜ division en entraînement et test ➜ entraînement ➜ vérification sur des données jamais vues ➜ utilisation. Si le modèle se trompe trop, on revient aux données.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<rect x="20" y="40" width="120" height="70" rx="12" fill="#a78bfa"/>
<text x="80" y="70" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">1. DONNÉES</text>
<text x="80" y="94" font-size="13" fill="#fff" text-anchor="middle">collecte, nettoyage</text>
<rect x="170" y="20" width="120" height="50" rx="10" fill="#22c55e"/>
<text x="230" y="50" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">80% entraînement</text>
<rect x="170" y="85" width="120" height="50" rx="10" fill="#f59e0b"/>
<text x="230" y="115" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">20% test</text>
<rect x="320" y="20" width="130" height="70" rx="12" fill="#7c3aed"/>
<text x="385" y="50" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">2. ENTRAÎNE</text>
<text x="385" y="73" font-size="12" fill="#ede9fe" text-anchor="middle">essaie, se trompe, corrige</text>
<rect x="470" y="40" width="115" height="70" rx="12" fill="#1d4ed8"/>
<text x="527" y="70" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">3. MODÈLE</text>
<text x="527" y="93" font-size="12" fill="#dbeafe" text-anchor="middle">les « règles » trouvées</text>
<rect x="320" y="170" width="130" height="70" rx="12" fill="#f59e0b"/>
<text x="385" y="200" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">4. VÉRIFIE</text>
<text x="385" y="223" font-size="12" fill="#fff" text-anchor="middle">sur les données de test</text>
<rect x="470" y="170" width="115" height="70" rx="12" fill="#16a34a"/>
<text x="527" y="200" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">5. USAGE</text>
<text x="527" y="223" font-size="12" fill="#fff" text-anchor="middle">données nouvelles</text>
<g stroke="#4c1d95" stroke-width="3" fill="none">
<path d="M140 65 L168 45"/><path d="M140 85 L168 110"/>
<path d="M290 45 L318 50"/><path d="M450 55 L468 70"/>
<path d="M527 112 L527 168"/><path d="M290 110 C 330 120, 360 140, 380 168"/>
<path d="M450 205 L468 205"/>
<path d="M320 220 C 200 260, 90 230, 80 112" stroke-dasharray="7 5"/>
</g>
<text x="170" y="262" font-size="13" fill="#4c1d95" font-weight="bold">trop d'erreurs ? améliore les données</text>
</svg>`
    },
    {
      type: `text`, title: `3. À l'intérieur d'un réseau de neurones`,
      html: `<p>Les IA les plus puissantes d'aujourd'hui utilisent les <b>réseaux de neurones artificiels</b>, inspirés (de très loin) des neurones du cerveau.</p>
<p>Un <b>neurone artificiel</b> effectue un calcul très simple :</p>
<ol>
<li>il reçoit des <b>nombres en entrée</b> (input) ;</li>
<li>il multiplie chacun par un <b>poids</b> (son importance) ;</li>
<li>il additionne le tout (plus une valeur appelée <i>biais</i>) ;</li>
<li>si le résultat dépasse un <b>seuil</b>, il « s'active » et envoie un signal aux neurones suivants.</li>
</ol>
<p>Exemple : <i>« Est-ce que j'vais au parc ? »</i> Entrées : il y a du soleil (1), j'ai des devoirs (1), il y a un ami (1). Poids : soleil +3, devoirs −4, ami +2. Somme : 3 − 4 + 2 = <b>1</b>. Seuil 0 ➜ 1 &gt; 0 ➜ <b>oui, j'y vais !</b></p>
<p>Un réseau est fait de <b>couches</b> : couche d'entrée, une ou plusieurs <b>couches cachées</b>, couche de sortie. Quand les réseaux ont beaucoup de couches, on parle de <b>deep learning</b> (apprentissage profond). <b>Entraîner</b> le réseau signifie ajuster automatiquement, des millions de fois, les <b>poids</b> pour réduire les erreurs. Les grands modèles de langage ont des <b>milliards</b> de poids.</p>`
    },
    {
      type: `3d`, title: `Un petit réseau de neurones en 3D`,
      scene: `molecule`,
      options: {
        atoms: [
          { x: -2, y: 1.2, z: 0, r: 0.3, color: `#22c55e`, label: `entrée 1` },
          { x: -2, y: 0, z: 0, r: 0.3, color: `#22c55e`, label: `entrée 2` },
          { x: -2, y: -1.2, z: 0, r: 0.3, color: `#22c55e`, label: `entrée 3` },
          { x: 0, y: 1.6, z: 0.5, r: 0.3, color: `#a855f7`, label: `caché` },
          { x: 0, y: 0.5, z: -0.5, r: 0.3, color: `#a855f7`, label: `caché` },
          { x: 0, y: -0.5, z: 0.5, r: 0.3, color: `#a855f7`, label: `caché` },
          { x: 0, y: -1.6, z: -0.5, r: 0.3, color: `#a855f7`, label: `caché` },
          { x: 2, y: 0.6, z: 0, r: 0.35, color: `#f97316`, label: `chat` },
          { x: 2, y: -0.6, z: 0, r: 0.35, color: `#f97316`, label: `chien` }
        ],
        bonds: [[0, 3], [0, 4], [0, 5], [0, 6], [1, 3], [1, 4], [1, 5], [1, 6], [2, 3], [2, 4], [2, 5], [2, 6], [3, 7], [3, 8], [4, 7], [4, 8], [5, 7], [5, 8], [6, 7], [6, 8]]
      },
      caption: `Vert : neurones d'entrée (par exemple des pixels). Violet : couche cachée. Orange : sorties (chat ou chien). Chaque liaison a un poids qui est réglé pendant l'entraînement.`
    },
    {
      type: `quiz`, title: `Mini-quiz : comment apprend une machine`,
      questions: [
        { type: `mc`, q: `Un modèle qui apprend à partir de courriels déjà étiquetés « spam / non spam » utilise l'apprentissage…`, options: [`supervisé`, `non supervisé`, `par renforcement`], answer: 0, explain: `Les exemples ont la bonne étiquette : c'est supervisé.` },
        { type: `num`, q: `Un neurone a les entrées 1 et 1, et les poids 2 et −5. Quelle est la somme pondérée ?`, answer: -3, tol: 0, explain: `1×2 + 1×(−5) = 2 − 5 = −3.` },
        { type: `tf`, q: `Les données de test servent à vérifier le modèle sur des exemples qu'il n'a jamais vus.`, answer: true, explain: `Si l'on vérifiait sur les mêmes données que l'entraînement, le modèle pourrait seulement « retenir » et non généraliser.` }
      ]
    },
    {
      type: `text`, title: `4. L'IA générative et les chatbots`,
      html: `<p>L'<b>IA générative</b> crée des contenus nouveaux : textes, images, musique, vidéos. Les chatbots que tu connais se basent sur de <b>grands modèles de langage</b> (LLM, <i>Large Language Models</i>).</p>
<p>Un LLM a été entraîné sur d'énormes quantités de textes pour faire une seule chose, mais très bien : <b>prévoir le mot (ou le morceau de mot) suivant</b>. En répétant la prévision de nombreuses fois, il écrit des phrases entières.</p>
<p>Conséquences importantes :</p>
<ul>
<li>le modèle <b>ne « sait » pas comme une personne</b> : il produit le texte le plus probable, qui est en général correct, mais il <b>invente parfois</b> des faits, des dates ou des sources de manière convaincante (ce sont les <b>hallucinations</b>) ;</li>
<li>les réponses dépendent de la façon dont tu poses la question (le <b>prompt</b>) ;</li>
<li>les informations doivent toujours être <b>vérifiées</b> auprès de sources fiables.</li>
</ul>`
    },
    {
      type: `text`, title: `5. Risques et règles`,
      html: `<ul>
<li><b>Préjugés (biais)</b> : si les données sont déséquilibrées, le modèle le sera aussi. Un système entraîné presque uniquement sur des visages d'un certain type reconnaît moins bien les autres.</li>
<li><b>Erreurs et hallucinations</b> : l'IA peut se tromper avec beaucoup d'assurance.</li>
<li><b>Vie privée</b> : photos, voix, messages, position sont des <b>données personnelles</b>. En Europe, elles sont protégées par le <b>RGPD</b> (Règlement général sur la protection des données, en vigueur depuis 2018).</li>
<li><b>Deepfakes et désinformation</b> : images, sons et vidéos faux mais réalistes.</li>
<li><b>Énergie et environnement</b> : entraîner et utiliser les grands modèles demande des centres de données qui consomment beaucoup d'électricité et d'eau pour le refroidissement.</li>
<li><b>Travail et études</b> : l'IA peut aider, mais si elle fait les devoirs à ta place… tu n'apprends pas !</li>
</ul>
<p>L'Union européenne a approuvé en <b>2024</b> l'<b>AI Act</b>, la première grande loi au monde sur l'IA : elle répartit les systèmes selon leur <b>niveau de risque</b> et interdit ceux qui sont inacceptables (par exemple le « score social » des citoyens). En 2025, l'Italie a aussi approuvé sa propre loi sur l'IA, qui exige entre autres le <b>consentement des parents</b> pour l'utilisation par les mineurs de moins de 14 ans.</p>
<p><b>Opportunités</b> : diagnostics médicaux plus précoces, traductions instantanées, aide aux personnes en situation de handicap (lecture de textes pour les personnes aveugles, sous-titres automatiques), prévisions météo, découverte de nouveaux médicaments et matériaux.</p>`
    },
    {
      type: `widget`, title: `Jeu : risque ou opportunité ?`,
      widget: `classify`,
      options: {
        groups: [`Opportunité 🌱`, `Risque ⚠️`],
        items: [
          [`🩺 Repérer des tumeurs sur les radiographies avant le médecin`, 0],
          [`🔊 Lire à voix haute un texte à une personne aveugle`, 0],
          [`🌍 Traduire une conversation en temps réel`, 0],
          [`💊 Découvrir de nouvelles molécules pour les médicaments`, 0],
          [`🎭 Vidéo truquée d'un politicien qui dit des choses jamais dites`, 1],
          [`📸 Utiliser des photos de personnes sans leur permission`, 1],
          [`⚖️ Sélectionner des candidats avec des données pleines de préjugés`, 1],
          [`📝 Recopier un devoir écrit par l'IA sans le comprendre`, 1]
        ]
      },
      caption: `Le même outil peut servir à de bonnes ou de mauvaises fins : ce qui compte, c'est la façon dont on l'utilise.`
    },
    {
      type: `example`, title: `Exemple pratique : le filtre anti-spam`,
      html: `<p>Ton service de messagerie reçoit des millions de messages. Pour entraîner le filtre :</p>
<ol>
<li><b>Données</b> : de nombreux courriels déjà signalés par les utilisateurs comme « spam » ou « non spam ».</li>
<li><b>Caractéristiques</b> (features) : des mots comme « GRATUIT », « tu as gagné », des liens bizarres, un expéditeur inconnu…</li>
<li><b>Entraînement</b> : le modèle apprend le poids de chaque caractéristique.</li>
<li><b>Test</b> : sur 1000 nouveaux courriels, il en classe bien 980 ➜ <b>précision</b> = 980 ÷ 1000 = <b>98 %</b>.</li>
</ol>
<p>Quand tu appuies sur « Signaler comme spam », tu fournis un nouvel exemple étiqueté : toi aussi, tu entraînes le modèle !</p>`
    },
    {
      type: `example`, title: `Exemple pratique : les suggestions de vidéos`,
      html: `<p>Les plateformes vidéo enregistrent ce que tu regardes, combien de temps, ce que tu passes. Avec l'apprentissage <b>non supervisé</b>, elles regroupent les utilisateurs aux goûts proches ; puis elles te proposent ce qui a plu aux « personnes qui te ressemblent ».</p>
<p>Le côté positif : tu découvres des contenus intéressants. Le risque : la <b>bulle de filtrage</b> (<i>filter bubble</i>), c'est-à-dire voir toujours les mêmes idées, et le temps qui passe sans que tu t'en aperçoives. L'objectif du système est de te garder le plus longtemps possible : souviens-t'en !</p>`
    },
    {
      type: `curiosity`, title: `Le saviez-vous ? Le nom « intelligence artificielle » a une date de naissance ?`,
      html: `<p>En <b>1950</b>, le mathématicien anglais <b>Alan Turing</b> se demanda « Les machines peuvent-elles penser ? » et proposa un jeu, appelé plus tard <b>test de Turing</b>. Le terme <b>« artificial intelligence »</b> fut employé par <b>John McCarthy</b> pour un séminaire d'été au Dartmouth College (États-Unis) en <b>1956</b>. En 1958, Frank Rosenblatt construisit le <b>perceptron</b>, le premier neurone artificiel capable d'apprendre.</p>`
    },
    {
      type: `curiosity`, title: `Le saviez-vous ? Les machines ont battu les champions ?`,
      html: `<p>En <b>1997</b>, l'ordinateur <b>Deep Blue</b> d'IBM battit le champion du monde d'échecs <b>Garry Kasparov</b>, mais en utilisant surtout un calcul « par force brute ». En <b>2016</b>, <b>AlphaGo</b> de DeepMind battit le champion <b>Lee Sedol</b> au <b>jeu de Go</b>, un jeu qui compte plus de positions possibles que d'atomes dans l'univers observable : là, il fallait des réseaux de neurones. En novembre <b>2022</b>, la sortie de ChatGPT a fait connaître les chatbots à des centaines de millions de personnes en quelques mois.</p>`
    },
    {
      type: `widget`, title: `L'histoire de l'IA`,
      widget: `timeline`,
      options: { events: [
        { year: 1950, label: `Turing : « Les machines peuvent-elles penser ? »`, icon: `🧠` },
        { year: 1956, label: `Dartmouth : naissance du terme « IA »`, icon: `🏫` },
        { year: 1958, label: `Perceptron de Rosenblatt`, icon: `🔘` },
        { year: 1997, label: `Deep Blue bat Kasparov aux échecs`, icon: `♟️` },
        { year: 2012, label: `Les réseaux profonds reconnaissent les images`, icon: `🖼️` },
        { year: 2016, label: `AlphaGo bat Lee Sedol au Go`, icon: `⚫` },
        { year: 2022, label: `Les chatbots deviennent grand public`, icon: `💬` },
        { year: 2024, label: `UE : adoption de l'AI Act`, icon: `⚖️` }
      ], unit: `ans` },
      caption: `Soixante-dix ans d'histoire : de longues périodes d'attente (les « hivers de l'IA ») et des accélérations soudaines.`
    },
    {
      type: `remember`, title: `À retenir : utiliser l'IA avec discernement`,
      html: `<ul>
<li>L'IA apprend <b>à partir des données</b> : si les données sont fausses ou partielles, elle le sera aussi.</li>
<li>Elle donne des réponses <b>probables</b>, pas certaines : <b>vérifie</b> toujours auprès de sources fiables.</li>
<li><b>N'inscris pas de données personnelles</b> (les tiennes ou celles des autres) dans les chatbots.</li>
<li>Utilise-la pour comprendre, pas pour recopier ; et dis quand tu t'en es servi.</li>
<li>Les décisions importantes restent aux <b>personnes</b>.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `D'autres façons de le comprendre`,
      intro: `Comment une machine « apprend »-elle vraiment ? Voici quatre pistes différentes.`,
      tabs: [
        {
          label: `🍳 Le cuisinier et la recette`,
          html: `<p><b>Programmation classique</b> : je te donne la <b>recette</b> (règles) et les ingrédients (données) ➜ tu fais le gâteau (réponse).</p>
<p><b>Machine learning</b> : je te donne <b>beaucoup de gâteaux déjà faits</b> avec leurs ingrédients, et tu dois <b>deviner la recette</b>. Tu goûtes, tu essaies, tu te trompes, tu corriges… À la fin, la « recette » que tu as reconstituée est le <b>modèle</b>.</p>`
        },
        {
          label: `🎛️ Les boutons`,
          html: `<p>Imagine une table de mixage avec des milliers de <b>boutons</b> (les poids). Tu montres à la machine une photo de chat : elle répond « chien ». Erreur ! Alors tu tournes <b>un tout petit peu</b> chaque bouton dans le sens qui aurait réduit l'erreur. Tu répètes avec des millions de photos. À la fin, les boutons sont dans la bonne position pour reconnaître les chats.</p>
<p>Cette méthode pour régler les boutons s'appelle la <b>descente de gradient</b> : c'est comme descendre une montagne dans le brouillard en faisant toujours un pas vers le bas.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#0f172a"/>
<g fill="#334155" stroke="#94a3b8" stroke-width="2">
<circle cx="80" cy="90" r="34"/><circle cx="190" cy="90" r="34"/><circle cx="300" cy="90" r="34"/><circle cx="410" cy="90" r="34"/><circle cx="520" cy="90" r="34"/>
</g>
<g stroke="#facc15" stroke-width="5" stroke-linecap="round">
<line x1="80" y1="90" x2="100" y2="65"/><line x1="190" y1="90" x2="165" y2="70"/><line x1="300" y1="90" x2="300" y2="58"/><line x1="410" y1="90" x2="440" y2="100"/><line x1="520" y1="90" x2="500" y2="62"/>
</g>
<g font-size="15" fill="#e2e8f0" text-anchor="middle"><text x="80" y="150">poids 1</text><text x="190" y="150">poids 2</text><text x="300" y="150">poids 3</text><text x="410" y="150">poids 4</text><text x="520" y="150">…</text></g>
<text x="300" y="195" font-size="16" fill="#facc15" text-anchor="middle" font-weight="bold">chaque erreur ➜ petite correction de tous les boutons</text>
</svg>`
        },
        {
          label: `👶 Comme un enfant`,
          html: `<p>Un petit enfant voit un chien et dit « ouaf ». Puis il voit un chat et dit « ouaf » : la maman le corrige, « non, celui-là c'est un <b>chat</b> ». Après beaucoup d'exemples, il apprend la différence. C'est l'apprentissage <b>supervisé</b>.</p>
<p>Mais attention aux différences : à un enfant, quelques exemples suffisent ; à un réseau de neurones, il en faut des milliers ou des millions. Et l'enfant <b>comprend</b> ce qu'est un animal, alors que le réseau trouve seulement des régularités dans les nombres.</p>`
        },
        {
          label: `🃏 Fiches des termes`,
          html: `<p>Révise les mots clés de l'IA (beaucoup sont en anglais).</p>`,
          widget: `flashcards`,
          options: { cards: [
            { front: `dataset`, back: `ensemble de données utilisé pour l'entraînement` },
            { front: `training`, back: `entraînement : le modèle règle les poids` },
            { front: `modèle`, back: `le résultat de l'entraînement : les « règles » trouvées` },
            { front: `bias`, back: `préjugé présent dans les données que le modèle apprend` },
            { front: `prompt`, back: `la demande que tu écris au chatbot` },
            { front: `hallucination`, back: `réponse inventée mais convaincante` },
            { front: `deepfake`, back: `vidéo/audio faux créé avec l'IA` }
          ] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : l'intelligence artificielle`,
      nodes: [
        { id: `dati`, label: `Données`, x: 15, y: 10, color: `#a855f7`, html: `Nombres, textes, images, sons : la « matière première » de l'IA.`, why: `Avec Internet, les smartphones et les capteurs, depuis les années 2000 la quantité de données numériques a explosé : sans cette abondance, les réseaux de neurones n'auraient pas assez d'exemples.` },
        { id: `ml`, label: `Machine learning`, x: 50, y: 10, color: `#7c3aed`, html: `Apprendre des règles à partir d'exemples au lieu de les écrire.`, why: `Le terme fut utilisé par <b>Arthur Samuel</b> en 1959 pour un programme qui apprenait à jouer aux dames en s'améliorant partie après partie.` },
        { id: `calc`, label: `Puissance de calcul`, x: 85, y: 10, color: `#0ea5e9`, html: `Processeurs graphiques (GPU) et centres de données.`, why: `Les GPU, nés pour les jeux vidéo, font des milliers de multiplications en parallèle : exactement ce qu'il faut aux réseaux de neurones. Depuis 2012, ils sont devenus l'outil principal de l'IA.` },
        { id: `sup`, label: `Supervisé`, x: 15, y: 40, color: `#22c55e`, html: `Exemples avec la bonne étiquette.`, why: `C'est la méthode la plus utilisée, car on peut facilement mesurer l'erreur : on compare la réponse du modèle à l'étiquette.` },
        { id: `nonsup`, label: `Non supervisé`, x: 40, y: 40, color: `#16a34a`, html: `Trouve des groupes dans des données sans étiquette.`, why: `Étiqueter demande du temps et du travail humain : beaucoup de données en sont privées, et les algorithmes de regroupement (clustering) les exploitent quand même.` },
        { id: `rinf`, label: `Par renforcement`, x: 65, y: 40, color: `#15803d`, html: `Récompenses et pénalités.`, why: `Il s'inspire des expériences de psychologie sur le conditionnement des animaux (comme celles de B. F. Skinner). AlphaGo l'utilisa en jouant des millions de parties contre lui-même.` },
        { id: `rete`, label: `Réseaux de neurones`, x: 85, y: 62, color: `#f97316`, html: `Couches de neurones artificiels aux poids réglables.`, why: `Inspirés du neurone biologique décrit par McCulloch et Pitts (1943) et du perceptron de Rosenblatt (1958). La méthode pour entraîner des réseaux à nombreuses couches (la rétropropagation) fut rendue célèbre en 1986.` },
        { id: `gen`, label: `IA générative`, x: 55, y: 75, color: `#ef4444`, html: `Crée des textes, images, sons nouveaux.`, why: `En 2017, les chercheurs de Google publièrent l'architecture <b>Transformer</b>, qui permet d'analyser des phrases entières en parallèle : elle est la base des grands modèles de langage.` },
        { id: `etica`, label: `Risques et règles`, x: 20, y: 85, color: `#64748b`, html: `Préjugés, vie privée, deepfakes, énergie ; RGPD et AI Act.`, why: `Plus l'IA décide de choses importantes (prêts, travail, santé), plus il faut de règles. L'UE a choisi une approche fondée sur le <b>niveau de risque</b> : plus le risque est élevé, plus les contrôles sont stricts.` }
      ],
      edges: [
        [`dati`, `ml`, `alimentent`], [`calc`, `ml`, `rend possible`], [`ml`, `sup`, `type`], [`ml`, `nonsup`, `type`], [`ml`, `rinf`, `type`],
        [`ml`, `rete`, `outil`], [`rete`, `gen`, `permet`], [`dati`, `etica`, `vie privée`], [`gen`, `etica`, `deepfakes`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : risques et usage responsable`,
      questions: [
        { type: `mc`, q: `Qu'est-ce qu'une « hallucination » d'un chatbot ?`, options: [`Une erreur de connexion`, `Une réponse inventée mais écrite de manière convaincante`, `Une image colorée`], answer: 1, explain: `Le modèle génère un texte probable, qui parfois n'est pas vrai.` },
        { type: `tf`, q: `Si les données d'entraînement contiennent des préjugés, le modèle peut les reproduire.`, answer: true, explain: `Le modèle apprend ce qu'il trouve dans les données, y compris les préjugés (biais).` },
        { type: `mc`, q: `Quelle règle européenne protège les données personnelles depuis 2018 ?`, options: [`AI Act`, `RGPD`, `Wi-Fi Act`], answer: 1, explain: `Le RGPD, Règlement général sur la protection des données.` }
      ]
    }
  ],
  glossary: [
    { t: `Donnée`, d: `Valeur brute qui, avec un sens, devient information.` },
    { t: `Machine learning`, d: `Apprentissage automatique : l'ordinateur déduit des règles à partir d'exemples.` },
    { t: `Modèle`, d: `Résultat de l'entraînement, utilisé pour faire des prévisions sur des données nouvelles.` },
    { t: `Réseau de neurones`, d: `Ensemble de neurones artificiels organisés en couches, reliés par des poids.` },
    { t: `Poids`, d: `Nombre qui indique l'importance d'une liaison dans un réseau de neurones.` },
    { t: `Deep learning`, d: `Apprentissage avec des réseaux de neurones à nombreuses couches.` },
    { t: `LLM`, d: `Grand modèle de langage : il prévoit le mot suivant dans un texte.` },
    { t: `Bias`, d: `Préjugé ou déséquilibre dans les données que le modèle apprend.` },
    { t: `Deepfake`, d: `Image, audio ou vidéo faux réalisé avec l'IA.` },
    { t: `AI Act`, d: `Loi de l'Union européenne sur l'IA (2024), fondée sur les niveaux de risque.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `En machine learning, que fournit-on à l'ordinateur ?`, options: [`Seulement les règles`, `Beaucoup d'exemples (données), souvent avec les bonnes réponses`, `Seulement l'électricité`], answer: 1, explain: `L'ordinateur déduit les règles à partir des exemples.` },
      { type: `mc`, q: `Un robot qui apprend à marcher en recevant une récompense quand il ne tombe pas utilise l'apprentissage…`, options: [`supervisé`, `non supervisé`, `par renforcement`], answer: 2, explain: `Récompenses et pénalités : apprentissage par renforcement.` },
      { type: `num`, q: `Un modèle classe correctement 450 photos sur 500. Quelle est la précision en pourcentage ?`, answer: 90, tol: 0, unit: `%`, explain: `450 ÷ 500 = 0,9 = 90 %.` },
      { type: `num`, q: `Neurone : entrées 1, 0, 1 avec les poids 3, 5, −1. Somme pondérée ?`, answer: 2, tol: 0, explain: `1×3 + 0×5 + 1×(−1) = 3 + 0 − 1 = 2.` },
      { type: `tf`, q: `Un chatbot dit toujours la vérité parce qu'il a lu tout Internet.`, answer: false, explain: `Il peut commettre des erreurs et des « hallucinations » : il faut vérifier.` },
      { type: `tf`, q: `Le deep learning utilise des réseaux de neurones à nombreuses couches.`, answer: true, explain: `« Deep » = profond : beaucoup de couches cachées.` },
      { type: `mc`, q: `À quoi servent les données de test ?`, options: [`À entraîner le modèle`, `À vérifier le modèle sur des exemples jamais vus`, `À décorer le dataset`], answer: 1, explain: `On mesure à quel point le modèle généralise.` },
      { type: `text`, q: `Comment s'appelle le mathématicien anglais qui se demanda en 1950 si les machines peuvent penser ?`, answer: [`turing`, `alan turing`], explain: `Alan Turing proposa le « jeu de l'imitation », le test de Turing.` },
      { type: `order`, q: `Mets dans l'ordre les phases de l'apprentissage automatique.`, items: [`Collecter et nettoyer les données`, `Entraîner le modèle`, `Le vérifier sur les données de test`, `L'utiliser sur des données nouvelles`], explain: `Données ➜ entraînement ➜ test ➜ usage.` },
      { type: `mc`, q: `Quel comportement est correct avec un chatbot ?`, options: [`Écrire l'adresse et le numéro de téléphone de ses camarades`, `L'utiliser pour comprendre un sujet puis vérifier dans le livre`, `Rendre le texte généré comme s'il était le tien`], answer: 1, explain: `Usage responsable : pour comprendre, en vérifiant, sans données personnelles.` },
      { type: `mc`, q: `Pourquoi un logiciel de reconnaissance faciale peut-il moins bien fonctionner avec certaines personnes ?`, options: [`Parce que les données d'entraînement étaient déséquilibrées`, `Parce que ces personnes bougent`, `Parce que l'ordinateur est fatigué`], answer: 0, explain: `C'est un cas de biais dans les données.` },
      { type: `tf`, q: `L'AI Act européen classe les systèmes d'IA selon leur niveau de risque.`, answer: true, explain: `Risque inacceptable (interdit), élevé, limité, minimal.` }
    ],
    gen: [[`percent`, 2]]
  }
});
