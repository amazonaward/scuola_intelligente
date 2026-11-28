TOPIC('fr', {
  id: "l1-sum-memoria-apprendimento",
  title: "Mémoire et apprentissage",
  intro: "Pourquoi retenons-nous un numéro de téléphone quelques secondes seulement, mais l'odeur de la cuisine de notre grand-mère toute la vie ? Pourquoi les chiens de Pavlov salivaient-ils au son d'une cloche ? Dans cette leçon, tu étudieras comment fonctionne la <b>mémoire</b> (sensorielle, à court et à long terme, la courbe de l'oubli d'Ebbinghaus, les souvenirs qui se reconstruisent) et les principales théories de l'<b>apprentissage</b> : conditionnement classique (Pavlov), opérant (Thorndike, Skinner), apprentissage par insight (Köhler) et par observation (Bandura). À la fin, tu comprendras aussi <b>comment utiliser ces études pour mieux apprendre</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Qu'est-ce que la mémoire ?",
      html: `<p>La <b>mémoire</b> est la capacité d'<b>encoder, conserver et récupérer</b> des informations. Ce sont trois étapes distinctes, et un souvenir peut « échouer » à chacune d'elles :</p>
<ul>
<li><b>Encodage</b> : transformer l'information sous une forme que le cerveau peut stocker (si tu ne fais pas attention, rien n'est encodé).</li>
<li><b>Stockage</b> (rétention) : la conserver dans le temps.</li>
<li><b>Récupération</b> : la rappeler quand on en a besoin (parfois on l'a « sur le bout de la langue »).</li>
</ul>
<p>Le modèle classique le plus connu est le modèle <b>multi-store</b> (à « mémoires multiples ») proposé par <b>Richard Atkinson et Richard Shiffrin en 1968</b> : l'information passe par trois systèmes.</p>
<ol>
<li><b>Mémoire sensorielle</b> : elle retient pendant des <b>fractions de seconde</b> (environ 1/4 à 1 s pour les images, quelques secondes pour les sons) ce que les sens enregistrent. George Sperling (1960) a montré, grâce à une expérience avec des grilles de lettres, que la « trace iconique » contient bien plus que ce que nous parvenons ensuite à rapporter, mais qu'elle s'efface très vite.</li>
<li><b>Mémoire à court terme</b> (MCT) : elle conserve peu d'informations pendant quelques secondes. George <b>Miller</b>, en <b>1956</b> (article « Le nombre magique sept, plus ou moins deux »), a estimé sa capacité à <b>7 ± 2 éléments</b> (<i>chunks</i>). Sans répétition, elle dure environ 15 à 30 secondes (Peterson et Peterson, 1959).</li>
<li><b>Mémoire à long terme</b> (MLT) : capacité pratiquement illimitée et durée qui peut aller jusqu'à toute une vie.</li>
</ol>
<p>Pour passer de la MCT à la MLT, il faut de la <b>répétition</b> et, plus encore, un <b>traitement du sens</b> (relier les nouvelles informations à celles qu'on connaît déjà).</p>`
    },
    {
      type: "svg",
      title: "Le modèle d'Atkinson et Shiffrin (1968)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="10" y="100" width="105" height="80" rx="12" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="62" y="130" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">STIMULI</text>
<text x="62" y="150" font-size="14" text-anchor="middle" fill="#0f172a">de l'extérieur</text>
<rect x="150" y="100" width="130" height="80" rx="12" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="215" y="128" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">MÉMOIRE</text>
<text x="215" y="146" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">SENSORIELLE</text>
<text x="215" y="166" font-size="14" text-anchor="middle" fill="#0f172a">~1 seconde</text>
<rect x="315" y="100" width="120" height="80" rx="12" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="375" y="128" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">COURT</text>
<text x="375" y="146" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">TERME</text>
<text x="375" y="166" font-size="14" text-anchor="middle" fill="#0f172a">7 ± 2 chunks</text>
<rect x="470" y="100" width="120" height="80" rx="12" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/>
<text x="530" y="128" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">LONG</text>
<text x="530" y="146" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">TERME</text>
<text x="530" y="166" font-size="14" text-anchor="middle" fill="#0f172a">illimitée</text>
<line x1="115" y1="140" x2="148" y2="140" stroke="#0f172a" stroke-width="3"/><polygon points="148,140 138,133 138,147" fill="#0f172a"/>
<line x1="280" y1="130" x2="313" y2="130" stroke="#0f172a" stroke-width="3"/><polygon points="313,130 303,123 303,137" fill="#0f172a"/>
<text x="297" y="122" font-size="14" text-anchor="middle" fill="#0f172a">attention</text>
<line x1="435" y1="130" x2="468" y2="130" stroke="#0f172a" stroke-width="3"/><polygon points="468,130 458,123 458,137" fill="#0f172a"/>
<text x="452" y="122" font-size="14" text-anchor="middle" fill="#0f172a">répét.</text>
<path d="M 530 182 Q 530 250 375 250 Q 375 220 375 182" fill="none" stroke="#6b21a8" stroke-width="3"/>
<polygon points="375,184 368,196 382,196" fill="#6b21a8"/>
<text x="450" y="272" font-size="14" text-anchor="middle" fill="#0f172a">récupération</text>
<text x="215" y="215" font-size="14" text-anchor="middle" fill="#991b1b">oubli</text>
<line x1="215" y1="182" x2="215" y2="200" stroke="#991b1b" stroke-width="2"/>
</svg>`,
      caption: "L'information passe par trois mémoires ; seule une partie arrive dans la mémoire à long terme."
    },
    {
      type: "example",
      title: "L'astuce des chunks",
      html: `<p>Essaie de retenir pendant quelques secondes : <b>1 4 9 2 1 7 7 6 1 8 6 1</b>. Cela fait douze chiffres, trop pour la MCT. Maintenant, regroupe-les en dates que tu connais : <b>1492</b> (la découverte de l'Amérique), <b>1776</b> (la déclaration d'indépendance américaine), <b>1861</b> (l'unité de l'Italie). Les « morceaux » à retenir passent de douze à trois. Un <b>chunk</b> est une unité qui a du sens : un joueur d'échecs expert reconnaît des configurations entières de pièces comme un seul chunk, alors qu'un débutant voit les pièces une par une. C'est le principe des numéros de téléphone écrits par groupes de chiffres.</p>`
    },
    {
      type: "text",
      title: "2. La mémoire à long terme et la mémoire de travail",
      html: `<p>La mémoire à long terme n'est pas un bloc unique. On distingue :</p>
<ul>
<li><b>Mémoire déclarative</b> (explicite) : des souvenirs que l'on peut « déclarer » avec des mots. Elle se divise en <b>épisodique</b> (épisodes de notre vie : la sortie d'hier) et <b>sémantique</b> (connaissances générales : la capitale de la France). Cette distinction est due à <b>Endel Tulving</b> (1972).</li>
<li><b>Mémoire procédurale</b> (implicite) : le « savoir-faire » (faire du vélo, lacer ses chaussures, jouer d'un instrument). Elle s'exprime dans l'action, pas dans les mots, et elle est très résistante.</li>
</ul>
<p>En <b>1974</b>, <b>Alan Baddeley et Graham Hitch</b> critiquèrent l'idée d'une simple MCT et proposèrent la notion de <b>mémoire de travail</b> : un système actif qui <b>maintient et manipule</b> les informations pendant que nous réalisons une tâche (faire un calcul de tête, suivre une phrase). Elle comprend un « administrateur central » qui coordonne et deux sous-systèmes : une <b>boucle phonologique</b> (pour les sons et les mots) et un <b>calepin visuo-spatial</b> (pour les images et les positions).</p>
<p>Un cas célèbre : le patient <b>H.M.</b> (Henry Molaison), opéré en 1953 pour soigner de graves crises d'épilepsie, perdit une partie de l'hippocampe et ne parvint plus à former de <b>nouveaux souvenirs déclaratifs</b>, tout en conservant ses souvenirs anciens et la capacité d'apprendre de nouvelles habiletés motrices. Il a montré que l'<b>hippocampe</b> est essentiel à la consolidation et que la mémoire déclarative et la mémoire procédurale sont des systèmes distincts.</p>`
    },
    {
      type: "widget",
      title: "Quel type de mémoire est-ce ?",
      widget: "classify",
      options: { groups: ["Épisodique", "Sémantique", "Procédurale"], items: [
        ["Te souvenir de ta fête d'anniversaire de l'an dernier", 0],
        ["Savoir que Rome est la capitale de l'Italie", 1],
        ["Faire du vélo sans y penser", 2],
        ["Te rappeler où tu étais pendant la dernière sortie scolaire", 0],
        ["Connaître le sens du mot « démocratie »", 1],
        ["Taper au clavier sans regarder les touches", 2]
      ] },
      caption: "Range chaque souvenir dans son « tiroir »."
    },
    {
      type: "text",
      title: "3. Oublier et reconstruire : Ebbinghaus, Bartlett, Loftus",
      html: `<p><b>Hermann Ebbinghaus</b> (1850-1909) fut le premier à étudier la mémoire par des expériences : en <b>1885</b>, il apprit par cœur des listes de <b>syllabes sans signification</b> (comme « DAX », « BOK », pour éliminer l'influence du sens) et mesura combien il s'en souvenait après différents intervalles. Il obtint la <b>courbe de l'oubli</b> : la perte est <b>très rapide pendant les premières heures</b>, puis elle ralentit. Sans révision, en quelques jours nous oublions la plus grande partie du contenu ; réviser à intervalles croissants rend le souvenir beaucoup plus durable (<b>effet de la répétition espacée</b>).</p>
<p>Des effets utiles à connaître : dans une liste, nous retenons mieux les premiers éléments (<b>effet de primauté</b>, passés dans la MLT grâce à davantage de répétition) et les derniers (<b>effet de récence</b>, encore dans la MCT), moins bien ceux du milieu (courbe de position sérielle).</p>
<p>Mais le souvenir n'est pas un enregistrement vidéo. En <b>1932</b>, <b>Frederic Bartlett</b> fit lire à des étudiants anglais un récit amérindien, « La guerre des fantômes », et leur demanda de le réécrire après un certain temps. Les versions devenaient plus courtes et <b>modifiées selon des schémas culturels</b> anglais (les détails étranges étaient supprimés ou « normalisés »). La mémoire est <b>reconstructive</b> : elle utilise des <b>schémas</b> et des connaissances pour combler les vides.</p>
<p>En <b>1974</b>, <b>Elizabeth Loftus et John Palmer</b> montrèrent des films d'accidents et demandèrent à quelle vitesse roulaient les voitures quand elles « se sont <i>percutées</i> » (<i>smashed</i>) ou « se sont <i>heurtées</i> » (<i>hit</i>). Avec le verbe « percutées », les estimations étaient plus élevées ; une semaine plus tard, beaucoup disaient avoir vu du verre brisé, alors qu'il n'y en avait pas. Les <b>questions suggestives</b> peuvent modifier les souvenirs : c'est pourquoi les témoignages oculaires doivent être traités avec prudence.</p>`
    },
    {
      type: "svg",
      title: "La courbe de l'oubli",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<line x1="70" y1="250" x2="570" y2="250" stroke="#0f172a" stroke-width="2"/>
<line x1="70" y1="30" x2="70" y2="250" stroke="#0f172a" stroke-width="2"/>
<text x="30" y="40" font-size="14" fill="#0f172a">100%</text>
<text x="40" y="255" font-size="14" fill="#0f172a">0%</text>
<text x="320" y="285" font-size="14" text-anchor="middle" fill="#0f172a">temps écoulé depuis l'apprentissage</text>
<path d="M 70 40 C 110 140 150 175 230 195 C 340 215 450 225 560 230" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M 70 40 C 90 90 110 110 150 118 L 150 60 C 175 100 200 125 260 135 L 260 62 C 300 100 350 120 420 128 L 420 70 C 460 100 500 110 560 116" fill="none" stroke="#166534" stroke-width="4"/>
<text x="330" y="205" font-size="14" fill="#991b1b">sans révision</text>
<text x="400" y="60" font-size="14" fill="#166534">avec révisions espacées</text>
<text x="150" y="268" font-size="14" text-anchor="middle" fill="#0f172a">20 min</text>
<text x="260" y="268" font-size="14" text-anchor="middle" fill="#0f172a">1 jour</text>
<text x="420" y="268" font-size="14" text-anchor="middle" fill="#0f172a">1 semaine</text>
</svg>`,
      caption: "Schéma simplifié : sans révision, l'oubli est rapide au début ; chaque révision « remonte » la courbe et la rend plus plate (les repères sont indicatifs)."
    },
    {
      type: "curiosity",
      title: "« Le mot sur le bout de la langue »",
      html: `<p>Le phénomène du « mot sur le bout de la langue » (<i>tip of the tongue</i>) montre qu'un souvenir peut être présent mais <b>impossible à récupérer</b> sur le moment : on se rappelle sa première lettre ou son nombre de syllabes. L'oubli n'est donc pas toujours une perte de l'information : c'est souvent une <b>difficulté de récupération</b>, qui s'améliore avec des <b>indices</b> (c'est pourquoi les QCM sont plus faciles que les questions ouvertes).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : la mémoire",
      questions: [
        { type: "mc", q: "Combien d'éléments la mémoire à court terme peut-elle retenir selon Miller (1956) ?", options: ["2 ± 1", "7 ± 2", "20 ± 5", "un nombre illimité"], answer: 1, explain: "Le « nombre magique sept, plus ou moins deux »." },
        { type: "mc", q: "Le travail de Bartlett (« La guerre des fantômes », 1932) montre que la mémoire est...", options: ["un enregistrement fidèle", "reconstructive", "seulement procédurale", "fixée dès la naissance"], answer: 1, explain: "Le souvenir est reconstruit à partir de schémas culturels et de connaissances." },
        { type: "tf", q: "La courbe de l'oubli d'Ebbinghaus montre qu'on oublie beaucoup pendant les premières heures, puis de plus en plus lentement.", answer: true, explain: "La perte est plus forte au début, puis elle ralentit." }
      ]
    },
    {
      type: "text",
      title: "4. Apprendre : le conditionnement classique (Pavlov)",
      html: `<p>L'<b>apprentissage</b> est une <b>modification relativement stable du comportement</b> due à l'expérience. Les premières théories scientifiques naissent avec le behaviorisme.</p>
<p><b>Ivan Pavlov</b> (1849-1936), physiologiste russe (prix Nobel de médecine en 1904 pour ses études sur la digestion), remarqua que les chiens du laboratoire salivaient non seulement en voyant la nourriture, mais déjà à l'arrivée du soigneur. Il mena alors des expériences systématiques (à partir de 1900 environ) :</p>
<ol>
<li>La nourriture (<b>stimulus inconditionnel</b>, SI) provoque la salivation (<b>réponse inconditionnelle</b>, RI) : c'est un réflexe inné.</li>
<li>Le son d'une cloche (<b>stimulus neutre</b>) ne provoque pas de salivation.</li>
<li>On présente plusieurs fois la cloche <b>juste avant</b> la nourriture (<b>association</b>).</li>
<li>Finalement, la cloche seule (<b>stimulus conditionnel</b>, SC) provoque la salivation (<b>réponse conditionnelle</b>, RC).</li>
</ol>
<p>Autres phénomènes : l'<b>extinction</b> (si la cloche sonne de nombreuses fois sans nourriture, la réponse disparaît), la <b>généralisation</b> (des sons semblables provoquent la réponse), la <b>discrimination</b> (le chien apprend à distinguer des sons différents).</p>
<p>Le conditionnement explique des <b>réactions émotionnelles</b> : les phobies, le dégoût pour un aliment qui nous a rendus malades, l'anxiété liée à un lieu. En 1920, <b>Watson et Rayner</b> conditionnèrent le « petit Albert » à avoir peur d'un rat blanc en l'associant à un bruit violent (une expérience aujourd'hui inacceptable sur le plan éthique).</p>`
    },
    {
      type: "svg",
      title: "Le conditionnement classique en trois étapes",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="100" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">1. Avant</text>
<rect x="15" y="45" width="170" height="40" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="100" y="71" font-size="14" text-anchor="middle" fill="#0f172a">Nourriture (SI) → salive (RI)</text>
<rect x="15" y="100" width="170" height="40" rx="8" fill="#e5e7eb" stroke="#4b5563" stroke-width="2"/>
<text x="100" y="126" font-size="14" text-anchor="middle" fill="#0f172a">Cloche → rien</text>
<text x="300" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">2. Pendant</text>
<rect x="215" y="45" width="170" height="95" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="300" y="75" font-size="14" text-anchor="middle" fill="#0f172a">Cloche + nourriture</text>
<text x="300" y="98" font-size="14" text-anchor="middle" fill="#0f172a">répétées plusieurs fois</text>
<text x="300" y="121" font-size="14" text-anchor="middle" fill="#0f172a">→ salive</text>
<text x="500" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">3. Après</text>
<rect x="415" y="45" width="170" height="95" rx="8" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="500" y="75" font-size="14" text-anchor="middle" fill="#0f172a">Cloche seule (SC)</text>
<text x="500" y="98" font-size="14" text-anchor="middle" fill="#0f172a">→ salive (RC)</text>
<text x="500" y="121" font-size="14" text-anchor="middle" fill="#0f172a">réponse apprise</text>
<line x1="188" y1="92" x2="212" y2="92" stroke="#0f172a" stroke-width="3"/><polygon points="212,92 202,86 202,98" fill="#0f172a"/>
<line x1="388" y1="92" x2="412" y2="92" stroke="#0f172a" stroke-width="3"/><polygon points="412,92 402,86 402,98" fill="#0f172a"/>
<rect x="60" y="175" width="480" height="95" rx="12" fill="#ffffff" stroke="#6b21a8" stroke-width="2"/>
<text x="300" y="205" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">Exemple de la vie quotidienne</text>
<text x="300" y="230" font-size="14" text-anchor="middle" fill="#0f172a">Le bruit de la roulette du dentiste (stimulus neutre) est</text>
<text x="300" y="250" font-size="14" text-anchor="middle" fill="#0f172a">associé à la douleur : ensuite, le bruit seul rend anxieux.</text>
</svg>`,
      caption: "Pour conditionner, le stimulus neutre doit précéder de très près le stimulus inconditionnel."
    },
    {
      type: "text",
      title: "5. Le conditionnement opérant : Thorndike et Skinner",
      html: `<p>Dans le conditionnement classique, l'organisme <i>subit</i> une association entre des stimuli. Dans le <b>conditionnement opérant</b> (ou instrumental), il apprend que les <b>conséquences</b> d'une action la rendent plus ou moins probable.</p>
<p><b>Edward Thorndike</b> (1898) enferma des chats affamés dans des « boîtes à problèmes » dont on sortait en appuyant sur un levier. Les chats procédaient par <b>essais et erreurs</b> ; avec le temps, ils sortaient de plus en plus vite. Il formula la <b>loi de l'effet</b> : un comportement suivi de conséquences agréables tend à se répéter, un comportement suivi de conséquences désagréables tend à disparaître.</p>
<p><b>Burrhus F. Skinner</b> (1904-1990) perfectionna la méthode avec la <b>« boîte de Skinner »</b> : une cage dans laquelle un rat reçoit de la nourriture en appuyant sur un levier. Il distingua :</p>
<ul>
<li><b>Renforcement positif</b> : on <b>ajoute</b> quelque chose d'agréable après le comportement (félicitation, récompense) → le comportement augmente.</li>
<li><b>Renforcement négatif</b> : on <b>retire</b> quelque chose de désagréable → le comportement augmente (attacher sa ceinture pour faire cesser le « bip »). Ce n'est pas une punition !</li>
<li><b>Punition</b> : une conséquence désagréable (ou le retrait de quelque chose d'agréable) → le comportement diminue.</li>
</ul>
<p>Skinner étudia aussi les <b>programmes de renforcement</b> : un renforcement donné <i>de temps en temps</i> (intermittent, comme avec les machines à sous) rend le comportement beaucoup plus résistant à l'extinction qu'un renforcement donné à chaque fois. Il appliqua ces idées à l'<b>enseignement programmé</b> (machines à enseigner, à partir des années 1950).</p>`
    },
    {
      type: "widget",
      title: "Renforcement ou punition ?",
      widget: "classify",
      options: { groups: ["Renforcement positif", "Renforcement négatif", "Punition"], items: [
        ["Le professeur félicite un élève qui a bien répondu, et l'élève lève la main plus souvent", 0],
        ["Tu attaches ta ceinture pour faire cesser le « bip » agaçant", 1],
        ["On confisque le téléphone de ceux qui font du bruit en classe, pour réduire le bruit", 2],
        ["Un enfant reçoit un autocollant chaque fois qu'il range ses jouets", 0],
        ["Tu prends un antidouleur et ton mal de tête passe : tu en reprendras la prochaine fois", 1],
        ["Une amende pour qui se gare en double file", 2]
      ] },
      caption: "Ajouter ou retirer ? Le comportement augmente-t-il ou diminue-t-il ?"
    },
    {
      type: "example",
      title: "Le conditionnement à l'école",
      html: `<p>Un garçon se fait moquer une fois alors qu'il lit à voix haute. Après plusieurs expériences de ce genre, la seule idée de lire en classe lui provoque de l'anxiété (<b>conditionnement classique</b> : la lecture a été associée à l'humiliation). Pour éviter l'anxiété, il commence à « oublier » son livre à la maison : ce comportement d'évitement est <b>renforcé négativement</b> parce qu'il fait cesser l'état désagréable (<b>conditionnement opérant</b>). Un enseignant attentif travaillera à <b>éteindre</b> cette association, en créant des expériences de lecture positives et progressives.</p>`
    },
    {
      type: "text",
      title: "6. Insight et apprentissage social",
      html: `<p>Tout apprentissage ne se fait pas par essais et erreurs. En 1917, le gestaltiste <b>Wolfgang Köhler</b>, qui observait des chimpanzés à Tenerife, vit le chimpanzé <b>Sultan</b>, incapable d'atteindre une banane avec un seul bâton, emboîter deux cannes après une pause <b>de réflexion</b> et l'attraper. Il parla d'<b>insight</b> (« intuition », « restructuration soudaine » du problème) : on comprend la solution d'un seul coup, pas par des essais au hasard.</p>
<p><b>Edward Tolman</b> montra que les rats forment des <b>cartes cognitives</b> des labyrinthes, même sans renforcement (<b>apprentissage latent</b>) : ils apprennent sans que cela se voie tout de suite dans leur comportement.</p>
<p><b>Albert Bandura</b> (expérience de la poupée Bobo, 1961) démontra l'<b>apprentissage par observation</b> (<i>modeling</i>, ou apprentissage vicariant) : on apprend en regardant les autres et les conséquences de leurs actions, sans essayer soi-même. Pour cela, il faut quatre processus : attention, mémorisation, reproduction, motivation. Bandura introduisit ensuite (1977) la notion d'<b>auto-efficacité</b> : la confiance en sa propre capacité à réussir une tâche.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre l'apprentissage",
      intro: "Les théories de l'apprentissage sont nombreuses : voici quelques analogies pour s'y retrouver.",
      tabs: [
        { label: "🐕 Trois façons d'apprendre", html: `<p><b>Associer</b> (Pavlov) : « quand tu entends le son, la nourriture arrive ». <b>Essayer et recevoir des conséquences</b> (Thorndike, Skinner) : « si j'appuie sur le levier, je reçois de la nourriture ». <b>Regarder et comprendre</b> (Bandura, Köhler) : « j'ai vu ce qu'il a fait » ou « j'ai compris comment ça marche ».</p>` },
        { label: "🧭 Le GPS", html: `<p>Le behavioriste dit que, pour aller quelque part, j'apprends une suite de virages renforcés (stimulus → réponse). Tolman dirait qu'au contraire j'apprends une <b>carte</b> de la ville : si une rue est fermée, je trouve un autre chemin. Les deux se produisent, selon la tâche.</p>` },
        { label: "🎮 Jeu vidéo", html: `<p>Un jeu vidéo utilise tous ces principes : <b>renforcement</b> (points, niveaux, récompenses intermittentes), <b>essais et erreurs</b> (on meurt, on recommence), <b>modeling</b> (on regarde des tutoriels) et <b>insight</b> (on comprend l'astuce pour battre le boss). Comprendre ces mécanismes aide aussi à concevoir de bonnes activités pédagogiques.</p>` }
      ]
    },
    {
      type: "text",
      title: "7. Apprendre à apprendre : ce qui marche vraiment",
      html: `<p>La recherche sur la mémoire et l'apprentissage a produit des conseils pratiques. L'étude la plus citée (Dunlosky et ses collègues, 2013) a comparé dix techniques de travail :</p>
<ul>
<li><b>Très efficaces</b> : la <b>pratique de la récupération</b> (<i>retrieval practice</i> : essayer de se souvenir sans regarder, s'interroger, se faire interroger) et la <b>répétition espacée</b> (réviser à intervalles croissants, au lieu de tout étudier en une nuit).</li>
<li><b>Peu efficaces</b> : <b>relire</b> et <b>surligner</b> passivement, ce qui donne l'illusion de savoir (le texte nous semble familier) sans véritable apprentissage.</li>
</ul>
<p>En 2006, Roediger et Karpicke montrèrent que des élèves qui lisaient un texte une fois puis essayaient de le « rappeler » de mémoire en retenaient davantage une semaine plus tard que ceux qui l'avaient relu plusieurs fois : c'est l'<b>effet de test</b> (<i>testing effect</i>). Autres conseils : <b>traiter</b> le sens (Craik et Lockhart, 1972, « niveaux de traitement » : réfléchir au sens fixe mieux que répéter les sons), <b>relier</b> les nouvelles informations à ce qu'on sait déjà, utiliser des <b>images et des cartes mentales</b>, et <b>dormir</b>, car le sommeil favorise la consolidation des souvenirs.</p>`
    },
    {
      type: "decision",
      title: "Interro dans trois jours : quel plan choisis-tu ?",
      html: `<p>Dans trois jours, tu as un contrôle d'histoire. Tu disposes de deux heures par jour. Tu peux choisir comment les utiliser.</p>`,
      question: "Quelle stratégie est la plus rentable, d'après les recherches sur la mémoire ?",
      options: [
        { label: "Relire et surligner tout le chapitre d'une traite la veille au soir.", outcome: "Cela donne une impression de familiarité, mais l'oubli rapide décrit par Ebbinghaus efface une grande partie du contenu ; le souvenir reste fragile." },
        { label: "Travailler chaque jour, par petits blocs, et t'interroger toi-même sans regarder le livre.", outcome: "Cela combine répétition espacée et pratique de la récupération : ce sont les deux stratégies les plus efficaces. C'est plus fatigant, mais le souvenir dure beaucoup plus longtemps." },
        { label: "Recopier le chapitre mot pour mot dans un cahier.", outcome: "C'est un travail long, mais peu élaboré : on répète sans comprendre et sans vérifier ce dont on se souvient." }
      ],
      answer: 1,
      explain: "Les résultats d'Ebbinghaus (courbe de l'oubli), de Roediger et Karpicke (effet de test) et de Dunlosky indiquent la même voie : <b>étaler le travail dans le temps et s'interroger activement</b>. Une difficulté « désirable » (se souvenir avec effort) renforce la mémoire."
    },
    {
      type: "conceptMap",
      title: "Carte : mémoire et apprentissage",
      nodes: [
        { id: "mem", label: "Mémoire", x: 25, y: 8, color: "#3b82f6", html: "Encodage, stockage, récupération.", why: "Pour se souvenir, il faut que l'information soit entrée (attention), qu'elle ait été conservée (consolidation) et qu'on puisse la retrouver (indices). Un échec à chaque étape donne un type d'oubli différent." },
        { id: "mod", label: "Modèles", x: 8, y: 45, color: "#10b981", html: "Atkinson-Shiffrin (1968) : sensorielle, MCT, MLT. Baddeley-Hitch (1974) : mémoire de travail.", why: "Ils naissent de l'idée cognitiviste de l'esprit comme système qui traite l'information ; les cas cliniques comme H.M. et les expériences sur la MCT montrent que ces systèmes sont séparables." },
        { id: "obl", label: "Oubli et reconstruction", x: 40, y: 45, color: "#ef4444", html: "Courbe d'Ebbinghaus, schémas de Bartlett, suggestion de Loftus.", why: "Ebbinghaus (1885) mesura la perte dans le temps ; Bartlett (1932) et Loftus (1974) montrèrent que le souvenir se remodèle. C'est pourquoi les témoignages et les souvenirs doivent être vérifiés." },
        { id: "app", label: "Apprentissage", x: 75, y: 8, color: "#f59e0b", html: "Modification stable du comportement due à l'expérience.", why: "Le behaviorisme l'étudie par des expériences sur les animaux pour obtenir des données observables. Puis le cognitivisme rappelle que des processus se déroulent dans l'esprit (insight, cartes)." },
        { id: "cond", label: "Conditionnements", x: 62, y: 45, color: "#8b5cf6", html: "Classique (Pavlov) et opérant (Thorndike, Skinner).", why: "Le premier explique les associations entre stimuli (émotions, phobies), le second le rôle des conséquences (récompenses, punitions). Ils sont à la base de la modification du comportement et de nombreuses pratiques éducatives." },
        { id: "soc", label: "Insight et modeling", x: 90, y: 45, color: "#ec4899", html: "Köhler, Tolman, Bandura.", why: "Ils montrent qu'on apprend aussi en comprenant (restructuration) ou en observant les autres : les êtres humains ne sont pas de simples « machines stimulus-réponse »." },
        { id: "str", label: "Stratégies de travail", x: 50, y: 82, color: "#0ea5e9", html: "Récupération active, répétition espacée, traitement du sens, sommeil.", why: "Elles appliquent les résultats de la recherche : on retient mieux ce qu'on récupère activement et qu'on revoit à intervalles réguliers, en le reliant à ce qu'on sait déjà." }
      ],
      edges: [["mem", "mod", "décrite par"], ["mem", "obl", "inclut"], ["app", "cond", "s'explique par"], ["app", "soc", "s'explique par"], ["obl", "str", "oriente"], ["cond", "str", "oriente"]]
    },
    {
      type: "curiosity",
      title: "Le chien qui n'était pas qu'un chien",
      html: `<p>Pavlov découvrit le conditionnement alors qu'il étudiait tout autre chose : la <b>digestion</b>. Son prix Nobel (1904) ne concerne pas les réflexes conditionnels, découverts ensuite au cours de ses études sur la salivation. Beaucoup de découvertes en psychologie sont nées d'observations faites « en marge » d'une autre recherche. Autre curiosité : dans ses expériences, Pavlov n'utilisait pas seulement des cloches, mais aussi des métronomes, des lumières et même des stimuli tactiles.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : l'apprentissage",
      questions: [
        { type: "mc", q: "Dans le conditionnement classique de Pavlov, la cloche devient...", options: ["un stimulus inconditionnel", "un stimulus conditionnel", "un renforcement négatif", "une punition"], answer: 1, explain: "Après l'association avec la nourriture, la cloche est un stimulus conditionnel." },
        { type: "mc", q: "Le renforcement négatif...", options: ["fait diminuer le comportement", "retire quelque chose de désagréable et fait augmenter le comportement", "équivaut à la punition", "ajoute une récompense"], answer: 1, explain: "Il ne faut pas le confondre avec la punition : le comportement augmente parce qu'il évite ou fait cesser quelque chose de désagréable." },
        { type: "tf", q: "Avec l'insight (Köhler), le problème se résout par essais et erreurs au hasard.", answer: false, explain: "L'insight est une restructuration soudaine du problème, pas une série d'essais au hasard." }
      ]
    }
  ],
  glossary: [
    { t: "Mémoire", d: "Capacité d'encoder, de conserver et de récupérer des informations." },
    { t: "Chunk", d: "Unité d'information porteuse de sens, qui permet d'augmenter la capacité de la mémoire à court terme." },
    { t: "Mémoire de travail", d: "Système qui maintient et manipule les informations pendant la réalisation d'une tâche (Baddeley et Hitch, 1974)." },
    { t: "Mémoire épisodique / sémantique", d: "Souvenirs d'épisodes personnels / connaissances générales (Tulving)." },
    { t: "Mémoire procédurale", d: "Mémoire des habiletés et du « savoir-faire »." },
    { t: "Courbe de l'oubli", d: "Évolution de l'oubli dans le temps, décrite par Ebbinghaus (1885)." },
    { t: "Schéma", d: "Structure de connaissances qui guide l'interprétation et la reconstruction des souvenirs." },
    { t: "Conditionnement classique", d: "Apprentissage par association entre des stimuli (Pavlov)." },
    { t: "Conditionnement opérant", d: "Apprentissage fondé sur les conséquences du comportement (Thorndike, Skinner)." },
    { t: "Renforcement / punition", d: "Conséquences qui rendent un comportement plus probable / moins probable." },
    { t: "Insight", d: "Compréhension soudaine de la solution d'un problème (Köhler)." },
    { t: "Modeling", d: "Apprentissage par observation d'un modèle (Bandura)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quelles sont les trois étapes de la mémoire ?", options: ["Encodage, stockage, récupération", "Écoute, lecture, écriture", "Perception, attention, oubli", "Sensation, conditionnement, renforcement"], answer: 0, explain: "Un souvenir peut échouer à chacune de ces étapes." },
      { type: "mc", q: "Qui proposa le modèle de la mémoire à mémoires multiples en 1968 ?", options: ["Atkinson et Shiffrin", "Baddeley et Hitch", "Bartlett", "Pavlov"], answer: 0, explain: "Atkinson et Shiffrin : sensorielle, court terme, long terme." },
      { type: "tf", q: "Ebbinghaus utilisa des syllabes sans signification pour éliminer l'influence du sens.", answer: true, explain: "En 1885, il utilisa des syllabes comme « DAX » pour étudier la mémoire de façon contrôlée." },
      { type: "mc", q: "Savoir faire du vélo est un exemple de mémoire...", options: ["épisodique", "sémantique", "procédurale", "sensorielle"], answer: 2, explain: "C'est un « savoir-faire » : mémoire procédurale (implicite)." },
      { type: "mc", q: "Dans l'expérience de Loftus et Palmer (1974), le verbe « percutées » faisait estimer...", options: ["des vitesses plus élevées", "des vitesses plus basses", "la même vitesse", "aucune vitesse"], answer: 0, explain: "Les questions suggestives modifient le souvenir." },
      { type: "text", q: "Comment s'appelle le physiologiste russe qui a étudié les réflexes conditionnels chez les chiens ?", answer: ["pavlov", "ivan pavlov", "ivan petrovitch pavlov", "ivan petrovic pavlov"], explain: "Ivan Pavlov." },
      { type: "mc", q: "Attacher sa ceinture pour faire cesser un « bip » est un exemple de...", options: ["renforcement négatif", "punition", "conditionnement classique", "extinction"], answer: 0, explain: "On retire un stimulus désagréable et le comportement augmente." },
      { type: "order", q: "Remets dans l'ordre les étapes du conditionnement classique.", items: ["La cloche ne provoque pas de salivation", "La cloche et la nourriture sont présentées ensemble plusieurs fois", "La cloche seule provoque la salivation"], explain: "D'abord le stimulus neutre, puis l'association, puis la réponse conditionnelle." },
      { type: "mc", q: "Quel couple de stratégies est le plus efficace d'après les recherches ?", options: ["Récupération active et répétition espacée", "Relecture et surlignage", "Recopiage et travail de nuit", "Écoute de musique et relecture"], answer: 0, explain: "Ce sont les techniques dont l'efficacité est la mieux prouvée." },
      { type: "tf", q: "Bandura a montré qu'on peut apprendre simplement en observant un modèle.", answer: true, explain: "C'est l'apprentissage par observation (expérience de la poupée Bobo, 1961)." }
    ]
  }
});
