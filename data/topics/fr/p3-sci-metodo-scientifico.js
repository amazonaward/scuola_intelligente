TOPIC('fr', {
  id: "p3-sci-metodo-scientifico",
  title: "La méthode scientifique",
  intro: "Pourquoi les feuilles changent-elles de couleur en automne ? 🍂 Pourquoi la glace flotte-t-elle ? Les scientifiques répondent aux questions en suivant des étapes précises : la <b>méthode scientifique</b>. Apprenons à <b>observer, faire des hypothèses et expérimenter</b> comme de vrais scientifiques !",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce que la méthode scientifique",
      html: `<p>La <b>méthode scientifique</b> est une façon ordonnée de découvrir comment fonctionne le monde. Il ne suffit pas de dire <i>« selon moi, c'est comme ça »</i> : il faut le <b>prouver</b> avec une expérience !</p>
<p>Elle a été rendue célèbre par le scientifique italien <b>Galilée</b> (Galileo Galilei, Pise, 1564 – Arcetri, 1642). Galilée disait que, pour comprendre la nature, il faut des <b>« sensate esperienze »</b> (c'est-à-dire observer et expérimenter) et des <b>« necessarie dimostrazioni »</b> (c'est-à-dire raisonner et mesurer).</p>`
    },
    {
      type: "text",
      title: "Les étapes de la méthode",
      html: `<ol>
<li>👀 <b>Observation</b> : je regarde avec attention un phénomène en utilisant mes sens et des instruments. <i>« La plante sur le rebord de la fenêtre est penchée vers la fenêtre. »</i></li>
<li>❓ <b>Question</b> (le problème) : <i>« Pourquoi se penche-t-elle ainsi ? »</i></li>
<li>💡 <b>Hypothèse</b> : j'essaie de donner une réponse possible. <i>« Peut-être que la plante pousse vers la lumière. »</i></li>
<li>🧪 <b>Expérience</b> : je prépare un test pour voir si l'hypothèse est juste. Je mets deux plantes identiques : une près de la lumière qui arrive d'un côté, une dans le noir à l'intérieur d'une boîte avec un seul trou.</li>
<li>📋 <b>Recueil des données</b> : chaque jour, j'observe, je mesure, je dessine et j'écris.</li>
<li>✅ <b>Conclusion</b> : l'hypothèse était-elle juste (<b>confirmée</b>) ou fausse (<b>infirmée</b>) ? Si elle est fausse… ce n'est pas un échec ! On fait une <b>nouvelle hypothèse</b> et on recommence.</li>
</ol>
<p>À la fin, on <b>communique</b> les résultats, pour que d'autres scientifiques puissent répéter l'expérience et vérifier.</p>`
    },
    {
      type: "svg",
      title: "Le cycle de la méthode scientifique",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0f9ff"/>
<defs><marker id="m" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker></defs>
<g stroke="#475569" stroke-width="3" fill="none" marker-end="url(#m)">
<path d="M220 60 L360 60"/><path d="M470 85 L500 130"/><path d="M500 195 L470 240"/><path d="M360 265 L240 265"/><path d="M125 240 L95 195"/><path d="M95 130 L125 85"/>
</g>
<g stroke-width="3">
<rect x="110" y="35" width="110" height="50" rx="14" fill="#fde68a" stroke="#b45309"/>
<rect x="365" y="35" width="120" height="50" rx="14" fill="#fecaca" stroke="#b91c1c"/>
<rect x="450" y="135" width="140" height="55" rx="14" fill="#bbf7d0" stroke="#15803d"/>
<rect x="355" y="240" width="140" height="50" rx="14" fill="#bfdbfe" stroke="#1d4ed8"/>
<rect x="110" y="240" width="130" height="50" rx="14" fill="#e9d5ff" stroke="#7e22ce"/>
<rect x="10" y="135" width="150" height="55" rx="14" fill="#fed7aa" stroke="#c2410c"/>
</g>
<g font-size="16" text-anchor="middle" font-weight="bold" fill="#1f2937">
<text x="165" y="66">👀 J'observe</text>
<text x="425" y="66">❓ Question</text>
<text x="520" y="168">💡 Hypothèse</text>
<text x="425" y="271">🧪 Expérience</text>
<text x="175" y="271">📋 Données</text>
<text x="85" y="168">✅ Conclusion</text>
</g>
<text x="300" y="150" font-size="18" fill="#0f172a" text-anchor="middle">Si l'hypothèse est fausse,</text>
<text x="300" y="175" font-size="18" fill="#0f172a" text-anchor="middle">on recommence avec une nouvelle !</text>
</svg>`,
      caption: "La méthode scientifique est un cercle : chaque conclusion peut faire naître de nouvelles questions."
    },
    {
      type: "quiz",
      title: "Mini-quiz : les étapes",
      questions: [
        { type: "mc", q: "« Peut-être que la glace fond plus vite au soleil qu'à l'ombre. » Cette phrase est…", options: ["une observation", "une hypothèse", "une conclusion"], answer: 1, explain: "C'est une réponse possible à vérifier : une hypothèse." },
        { type: "mc", q: "Quel scientifique italien a rendu célèbre la méthode scientifique ?", options: ["Galilée", "Christophe Colomb", "Léonard de Pise (Fibonacci)"], answer: 0, explain: "Galilée, qui a vécu entre 1564 et 1642." },
        { type: "tf", q: "Si une hypothèse est infirmée, l'expérience a été inutile.", answer: false, explain: "Découvrir qu'une hypothèse est fausse est aussi un résultat important : cela nous fait chercher une autre explication." }
      ]
    },
    {
      type: "text",
      title: "La règle d'or : ne changer qu'une seule chose",
      html: `<p>Une expérience est <b>correcte</b> (les scientifiques disent « contrôlée ») si l'on change <b>une seule chose à la fois</b>. Tout le reste doit rester <b>identique</b>.</p>
<p>Exemple : je veux savoir si les graines ont besoin d'<b>eau</b> pour germer 🌱.</p>
<ul>
<li>Pot A : coton + 5 haricots + <b>eau</b>.</li>
<li>Pot B : coton + 5 haricots + <b>pas d'eau</b>.</li>
<li>Même température, même lumière, mêmes haricots, mêmes pots.</li>
</ul>
<p>Si je changeais aussi la lumière, je ne saurais plus si la différence vient de l'eau ou de la lumière ! 🤔</p>
<p>De plus, il vaut mieux utiliser <b>plusieurs graines</b> et <b>répéter</b> le test : une seule graine pourrait être « défectueuse ».</p>`
    },
    {
      type: "decision",
      title: "Quelle expérience est la bonne ?",
      html: "Sofia veut découvrir si les plantes poussent davantage avec la lumière. Elle a deux plants de basilic identiques.",
      question: "Quelle expérience devrait-elle faire ?",
      options: [
        { label: "L'un au soleil avec beaucoup d'eau, l'autre dans le noir sans eau", outcome: "Ce n'est pas bon : on change deux choses en même temps (lumière et eau). Si la plante dans le noir meurt, on ne sait pas si c'est la faute du noir ou de la soif." },
        { label: "L'un au soleil et l'autre dans le noir, tous les deux avec la même eau", outcome: "Parfait ! On ne change que la lumière : toute différence viendra de la lumière." },
        { label: "Les deux au soleil, l'un dans un pot rouge et l'autre dans un pot bleu", outcome: "Ainsi on n'étudie pas la lumière : les deux plants reçoivent la même lumière et seule la couleur du pot change." }
      ],
      answer: 1,
      explain: "Dans une expérience correcte, on change une seule variable (la lumière) et on garde tout le reste identique (eau, terre, pot, type de plante). Au bout d'une semaine, Sofia verra que la plante dans le noir est devenue jaune et allongée : sans lumière, les plantes ne peuvent pas faire la photosynthèse ni produire la chlorophylle verte."
    },
    {
      type: "text",
      title: "Les instruments du scientifique",
      html: `<p>Nos <b>cinq sens</b> sont les premiers instruments, mais ils peuvent parfois tromper (l'eau tiède semble chaude si tu as les mains froides !). C'est pourquoi on utilise des instruments qui <b>mesurent</b> :</p>
<ul>
<li>🌡️ <b>thermomètre</b> – température</li>
<li>⚖️ <b>balance</b> – poids (masse)</li>
<li>📏 <b>règle</b> et mètre – longueur</li>
<li>⏱️ <b>chronomètre</b> – temps</li>
<li>🔍 <b>loupe</b> et <b>microscope</b> – choses minuscules</li>
<li>🔭 <b>lunette</b> – choses très lointaines</li>
<li>📓 <b>cahier de laboratoire</b> – pour tout écrire !</li>
</ul>`
    },
    {
      type: "widget",
      title: "Observation, hypothèse ou conclusion ?",
      widget: "classify",
      options: {
        groups: ["Observation", "Hypothèse", "Conclusion"],
        items: [
          ["🍂 Les feuilles de l'arbre sont jaunes", 0],
          ["💭 Peut-être que le sel fait fondre la glace plus vite", 1],
          ["📋 Après 3 essais, la glace avec le sel a toujours fondu plus tôt", 2],
          ["🐌 L'escargot laisse une traînée brillante", 0],
          ["💭 Selon moi, la bougie s'éteint parce que l'air s'épuise", 1],
          ["📋 Les haricots sans eau n'ont pas germé : l'eau est nécessaire", 2]
        ]
      },
      caption: "Mets chaque phrase dans la bonne case."
    },
    {
      type: "example",
      title: "Exemple pratique : quel papier absorbe le plus ?",
      html: `<p><b>Question</b> : quel papier absorbe le plus d'eau : la serviette en papier, l'essuie-tout ou la feuille de cahier ?</p>
<p><b>Hypothèse</b> : l'essuie-tout, parce qu'il est épais et doux.</p>
<p><b>Expérience</b> : je coupe 3 bandes <b>de la même taille</b>, je trempe le bout de chacune dans un verre avec <b>la même quantité</b> d'eau colorée, j'attends <b>5 minutes</b> pour toutes.</p>
<p><b>Données</b> : je mesure avec la règle de combien l'eau est montée.</p>
<table><tr><th>Papier</th><th>Eau montée</th></tr><tr><td>Essuie-tout</td><td>7 cm</td></tr><tr><td>Serviette</td><td>5 cm</td></tr><tr><td>Cahier</td><td>1 cm</td></tr></table>
<p><b>Conclusion</b> : l'hypothèse est confirmée ! 🎉 (Rappelle-toi : tes nombres pourraient être différents, cela dépend du papier.)</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : la bougie sous le verre",
      html: `<p><b>Observation</b> : si je recouvre une bougie allumée avec un verre, elle s'éteint peu après. 🕯️ (Fais-le seulement avec un adulte !)</p>
<p><b>Hypothèse</b> : la flamme a besoin de quelque chose qui est dans l'air et qui s'épuise sous le verre.</p>
<p><b>Expérience</b> : j'essaie avec un petit verre et avec un grand bocal, en mesurant le temps avec le chronomètre.</p>
<p><b>Données</b> : sous le petit verre, elle s'éteint après quelques secondes, sous le grand bocal elle dure plus longtemps.</p>
<p><b>Conclusion</b> : plus il y a d'air, plus longtemps la bougie brûle. Les scientifiques ont découvert qu'il faut de l'<b>oxygène</b>, l'un des gaz de l'air.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Pendant plus de 1900 ans, tout le monde a cru <b>Aristote</b>, qui disait que les objets lourds tombent plus vite que les légers. <b>Galilée</b> a voulu le vérifier en faisant rouler des billes sur des plans inclinés et en mesurant le temps. Il a découvert que, sans l'air qui freine, <b>tous les objets tombent à la même vitesse</b> ! En 1971, l'astronaute <b>David Scott</b> l'a essayé sur la Lune, où il n'y a pas d'air : un marteau et une plume ont touché le sol ensemble. 🪶🔨</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Certaines grandes découvertes sont nées d'une « erreur » bien observée ! En <b>1928</b>, <b>Alexander Fleming</b> a trouvé une moisissure poussée par erreur sur une boîte de son laboratoire : autour de cette moisissure, les bactéries ne poussaient pas. Au lieu de tout jeter, il s'est demandé <b>pourquoi</b>… et il a découvert la <b>pénicilline</b>, le premier antibiotique, qui a sauvé des millions de vies. 🧫</p>`
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Observation → question → hypothèse → expérience → données → conclusion.</li>
<li>Une hypothèse est une <b>réponse possible</b> qu'il faut vérifier.</li>
<li>Dans l'expérience, on change <b>une seule chose</b> à la fois.</li>
<li>On mesure, on écrit tout et on <b>répète</b> le test.</li>
<li>Une hypothèse infirmée est quand même une découverte !</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la méthode scientifique",
      intro: "Tu utilises déjà la méthode scientifique tous les jours, même sans le savoir ! Voici quelques façons de la reconnaître.",
      tabs: [
        {
          label: "🕵️ Le détective",
          html: `<p>Un scientifique travaille comme un <b>détective</b> :</p>
<ul>
<li>il trouve des <b>indices</b> (observation) ;</li>
<li>il pense à un <b>suspect</b> (hypothèse) ;</li>
<li>il cherche les <b>preuves</b> (expérience) ;</li>
<li>il décide si le suspect est coupable ou innocent (conclusion).</li>
</ul>
<p>Si les preuves disent « innocent », le détective ne se fâche pas : il cherche un autre suspect !</p>`
        },
        {
          label: "🍳 En cuisine",
          html: `<p>As-tu déjà fait des biscuits ? 🍪 S'ils sont trop durs, tu <b>observes</b> le problème ; tu fais une <b>hypothèse</b> (« peut-être qu'ils sont restés trop longtemps au four ») ; la fois suivante, tu ne changes <b>que le temps</b> de cuisson (expérience) ; tu goûtes (données) ; et tu comprends si tu avais raison (conclusion).</p>
<p>Si tu avais changé aussi la farine et le sucre, tu ne saurais plus quel était le problème !</p>`
        },
        {
          label: "🔭 Comme Galilée",
          html: `<p>En <b>1609</b>, Galilée a construit une lunette et l'a pointée vers le ciel. En janvier <b>1610</b>, il a vu quatre petits points près de Jupiter qui changeaient de position chaque nuit. Il a <b>observé</b> pendant de nombreuses nuits, il a tout dessiné et il est arrivé à la <b>conclusion</b> : ce sont des <b>lunes</b> qui tournent autour de Jupiter ! C'était une preuve que tout ne tourne pas autour de la Terre.</p>
<p>Explore le Système solaire en 3D et cherche Jupiter.</p>`,
          scene: "solar",
          options: { labels: true }
        },
        {
          label: "📅 L'histoire de la science",
          html: `<p>La méthode scientifique a été construite petit à petit par beaucoup de personnes, dans beaucoup de pays. Fais défiler la frise chronologique !</p>`,
          widget: "timeline",
          options: {
            events: [
              { year: -350, label: "Aristote observe et classe les animaux", icon: "🐟" },
              { year: 1021, label: "Alhazen (Ibn al-Haytham) étudie la lumière avec des expériences", icon: "💡" },
              { year: 1610, label: "Galilée découvre les lunes de Jupiter", icon: "🔭" },
              { year: 1668, label: "Francesco Redi : les mouches ne naissent pas de la viande pourrie", icon: "🪰" },
              { year: 1928, label: "Fleming découvre la pénicilline", icon: "🧫" },
              { year: 1971, label: "Un marteau et une plume tombent ensemble sur la Lune", icon: "🌕" }
            ],
            unit: "ans"
          }
        },
        {
          label: "🪰 L'expérience de Redi",
          html: `<p>Autrefois, on croyait que les vers naissaient tout seuls de la viande avariée. En <b>1668</b>, le médecin toscan <b>Francesco Redi</b> a fait une expérience parfaite :</p>
<ul>
<li>bocal A : viande <b>ouverte</b> → après quelques jours, des vers (larves de mouche) ;</li>
<li>bocal B : viande <b>couverte d'une gaze</b> → l'air passe, les mouches non → <b>aucun ver</b> sur la viande !</li>
</ul>
<p>Il ne changeait qu'<b>une seule chose</b> : si les mouches pouvaient toucher la viande. Conclusion : les vers naissent des <b>œufs des mouches</b>.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<rect x="80" y="80" width="140" height="140" rx="12" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<ellipse cx="150" cy="190" rx="50" ry="20" fill="#dc2626"/>
<text x="120" y="60" font-size="28">🪰</text><text x="170" y="185" font-size="22">🐛</text>
<text x="150" y="250" font-size="20" text-anchor="middle" font-weight="bold" fill="#0369a1">A : ouvert</text>
<rect x="380" y="80" width="140" height="140" rx="12" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<path d="M375 80 L525 80" stroke="#a3a3a3" stroke-width="10" stroke-dasharray="4 3"/>
<ellipse cx="450" cy="190" rx="50" ry="20" fill="#dc2626"/>
<text x="430" y="55" font-size="28">🪰</text>
<text x="450" y="250" font-size="20" text-anchor="middle" font-weight="bold" fill="#0369a1">B : avec la gaze</text>
<text x="300" y="150" font-size="22" text-anchor="middle" fill="#1f2937">contre</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de la méthode scientifique : touche un nœud et découvre pourquoi",
      nodes: [
        { id: "oss", label: "Observation", x: 50, y: 6, color: "#f59e0b", html: "Regarder avec attention en utilisant les sens et les instruments.", why: "Toute la science part de la curiosité pour ce que nous voyons. Galilée l'appelait « sensata esperienza » (expérience sensible)." },
        { id: "dom", label: "Question", x: 82, y: 22, color: "#ef4444", html: "Le problème à résoudre : pourquoi ? comment ? que se passe-t-il si… ?", why: "Une bonne question doit pouvoir être vérifiée par un test : « le sel fait-il fondre la glace ? » oui ; « quelle est la plus belle couleur ? » non, c'est un goût personnel." },
        { id: "ipo", label: "Hypothèse", x: 82, y: 50, color: "#16a34a", html: "Une réponse possible à mettre à l'épreuve.", why: "Du grec <i>hypóthesis</i>, « ce que l'on met dessous », c'est-à-dire à la base d'un raisonnement. Une hypothèse scientifique doit pouvoir être infirmée par une expérience." },
        { id: "esp", label: "Expérience", x: 60, y: 72, color: "#2563eb", html: "Un test préparé avec soin pour vérifier l'hypothèse.", why: "Galilée a compris qu'il ne suffit pas de raisonner : il faut interroger la nature avec des essais reproductibles. C'est pour ça qu'on change une seule variable et qu'on garde tout le reste identique." },
        { id: "var", label: "Une chose à la fois", x: 88, y: 88, color: "#0ea5e9", html: "Dans une expérience, on change un seul facteur.", why: "Si je changeais deux choses ensemble, je ne pourrais pas savoir laquelle des deux a causé le résultat. C'est l'idée de l'expérience « contrôlée », déjà utilisée par Francesco Redi en 1668." },
        { id: "dati", label: "Données et mesures", x: 30, y: 72, color: "#a855f7", html: "Ce que l'on observe et mesure pendant l'expérience.", why: "Les sens peuvent tromper ; les instruments (thermomètre, balance, chronomètre) donnent des nombres que tout le monde peut vérifier." },
        { id: "concl", label: "Conclusion", x: 18, y: 45, color: "#14b8a6", html: "L'hypothèse est confirmée ou infirmée.", why: "Si elle est infirmée, on revient à l'hypothèse. Si elle est confirmée de nombreuses fois, par beaucoup de scientifiques différents, elle peut devenir une loi ou une théorie." },
        { id: "galileo", label: "Galilée", x: 18, y: 15, color: "#64748b", html: "Scientifique pisan (1564–1642), père de la méthode scientifique moderne.", why: "Il unissait expériences et mathématiques : « le livre de la nature est écrit en langue mathématique », écrivit-il dans <i>L'Essayeur</i> (<i>Il Saggiatore</i>, 1623)." }
      ],
      edges: [
        ["oss", "dom", "fait naître une"],
        ["dom", "ipo", "on y répond par une"],
        ["ipo", "esp", "se vérifie par une"],
        ["esp", "var", "règle d'or"],
        ["esp", "dati", "produit des"],
        ["dati", "concl", "mènent à la"],
        ["concl", "oss", "nouvelles questions"],
        ["galileo", "oss", "« sensate esperienze »"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : expériences correctes",
      questions: [
        { type: "tf", q: "Dans une bonne expérience, on change plusieurs choses ensemble pour aller plus vite.", answer: false, explain: "On change une seule chose à la fois, sinon on ne comprend pas ce qui a causé le résultat." },
        { type: "mc", q: "Quel instrument utilises-tu pour mesurer la température de l'eau ?", options: ["balance", "thermomètre", "chronomètre"], answer: 1, explain: "Le thermomètre mesure la température." },
        { type: "mc", q: "Pourquoi vaut-il mieux répéter une expérience plusieurs fois ?", options: ["Pour être sûr que le résultat n'est pas un hasard", "Parce que c'est amusant", "Il n'est pas nécessaire de la répéter"], answer: 0, explain: "En répétant, on vérifie que le résultat est toujours le même et ne dépend pas d'une erreur ni du hasard." }
      ]
    }
  ],
  glossary: [
    { t: "Méthode scientifique", d: "Démarche ordonnée pour étudier la nature avec des observations et des expériences." },
    { t: "Observation", d: "Regarder avec attention un phénomène avec les sens et les instruments." },
    { t: "Hypothèse", d: "Réponse possible à une question, à vérifier." },
    { t: "Expérience", d: "Test préparé pour vérifier une hypothèse." },
    { t: "Variable", d: "Ce que l'on change dans une expérience (une seule à la fois)." },
    { t: "Données", d: "Les informations recueillies en observant et en mesurant." },
    { t: "Conclusion", d: "Le résultat final : l'hypothèse est confirmée ou infirmée." },
    { t: "Phénomène", d: "Tout fait qui se produit dans la nature et que l'on peut observer." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Mets dans l'ordre les étapes de la méthode scientifique.", items: ["Observation", "Question", "Hypothèse", "Expérience", "Recueil des données", "Conclusion"], explain: "On observe, on se demande pourquoi, on fait une hypothèse, on expérimente, on recueille les données et on conclut." },
      { type: "text", q: "Comment s'appelle la réponse possible à une question scientifique, à vérifier avec une expérience ?", answer: ["hypothèse", "hypothese", "l'hypothèse", "l'hypothese", "une hypothèse", "une hypothese"], explain: "C'est l'hypothèse." },
      { type: "mc", q: "À quel siècle a vécu Galilée ?", options: ["Au XIIIe siècle (années 1200)", "Entre le XVIe et le XVIIe siècle (années 1500–1600)", "Au XXe siècle (années 1900)"], answer: 1, explain: "Galilée est né en 1564 et mort en 1642." },
      { type: "tf", q: "Nos sens peuvent parfois nous tromper : c'est pour ça que nous utilisons des instruments de mesure.", answer: true, explain: "Thermomètre, balance, règle donnent des mesures précises et vérifiables." },
      { type: "mc", q: "Je veux savoir si le sel fait fondre la glace plus vite. Que dois-je changer entre les deux glaçons ?", options: ["Seulement la présence du sel", "Le sel et la taille du glaçon", "Le sel et l'endroit où je les mets"], answer: 0, explain: "On ne change que le sel ; la taille et l'endroit doivent rester identiques." },
      { type: "mc", q: "« Le haricot avec de l'eau a germé, celui sans eau non. » Cette phrase est…", options: ["une hypothèse", "une donnée/un résultat", "une question"], answer: 1, explain: "Elle décrit ce qui a été observé pendant l'expérience." },
      { type: "tf", q: "Une hypothèse infirmée est un échec et ne sert à rien.", answer: false, explain: "Savoir qu'une hypothèse est fausse est aussi une découverte : on passe à une nouvelle hypothèse." },
      { type: "mc", q: "Qu'a découvert Galilée en 1610 avec sa lunette ?", options: ["Les lunes de Jupiter", "La pénicilline", "L'électricité"], answer: 0, explain: "Il a vu quatre lunes qui tournaient autour de Jupiter." },
      { type: "text", q: "Quel instrument utilises-tu pour mesurer le temps d'une expérience ?", answer: ["chronomètre", "chronometre", "le chronomètre", "le chronometre", "montre", "minuteur"], explain: "Le chronomètre mesure le temps." },
      { type: "mc", q: "Dans l'expérience de Redi, pourquoi un bocal était-il couvert d'une gaze ?", options: ["Pour empêcher les mouches d'entrer tout en laissant passer l'air", "Pour garder la viande au chaud", "Pour le décorer"], answer: 0, explain: "Ainsi il ne changeait qu'une seule chose : si les mouches pouvaient toucher la viande." },
      { type: "tf", q: "Après l'expérience, il est juste de communiquer les résultats pour que d'autres puissent la répéter.", answer: true, explain: "La science fonctionne parce que les résultats sont vérifiés par d'autres personnes." }
    ]
  }
});
