TOPIC('fr', {
  id: "m3-sci-sistema-nervoso",
  title: "Le système nerveux",
  intro: "Lire cette phrase, se rappeler une chanson, retirer sa main d'une casserole brûlante, sentir l'odeur de la pizza : tout passe par le <b>système nerveux</b>, le réseau de communication du corps. Il est fait de milliards de cellules spéciales, les <b>neurones</b>, qui s'échangent des signaux électriques et chimiques en quelques millièmes de seconde.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. À quoi sert le système nerveux",
      html: `<p>Le système nerveux remplit trois tâches, l'une après l'autre :</p>
<ol>
<li><b>Recevoir</b> des informations de l'extérieur et de l'intérieur du corps, grâce aux <b>récepteurs</b> des organes des sens (yeux, oreilles, peau…) et des organes internes.</li>
<li><b>Traiter</b> les informations : les comparer aux souvenirs, décider quoi faire. C'est le travail du <b>cerveau</b> et de la <b>moelle épinière</b>.</li>
<li><b>Répondre</b>, en envoyant des ordres aux <b>effecteurs</b> : les muscles (qui se contractent) et les glandes (qui produisent des substances).</li>
</ol>
<p>Il travaille avec le <b>système endocrinien</b> (les glandes qui produisent des hormones) : le système nerveux est rapide comme un message sur le téléphone, les hormones sont plus lentes mais leurs effets durent plus longtemps, comme une lettre.</p>`
    },
    {
      type: "text",
      title: "2. Le neurone, la cellule qui « parle »",
      html: `<p>Le <b>neurone</b> est la cellule du système nerveux. Dans le cerveau humain, il y en a environ <b>86 milliards</b>. Il est formé de :</p>
<ul>
<li>un <b>corps cellulaire</b>, avec le noyau ;</li>
<li>des <b>dendrites</b> : de courtes ramifications qui <b>reçoivent</b> les signaux des autres neurones ;</li>
<li>l'<b>axone</b> : un long prolongement (il peut dépasser 1 mètre, de la moelle épinière jusqu'au gros orteil !) qui <b>transmet</b> le signal ;</li>
<li>la <b>gaine de myéline</b> : un revêtement isolant de graisse, comme le plastique autour des fils électriques, qui rend le signal beaucoup plus rapide ;</li>
<li>les <b>terminaisons synaptiques</b> : les « doigts » finaux qui passent le message à la cellule suivante.</li>
</ul>
<p>Le signal qui court le long de l'axone s'appelle <b>influx nerveux</b> : c'est une petite onde électrique produite par le passage d'ions (sodium et potassium) à travers la membrane. Dans les fibres à myéline, il peut voyager jusqu'à environ <b>120 m/s</b> (plus de 400 km/h).</p>
<p>Outre les neurones, il y a les <b>cellules gliales</b>, qui les nourrissent, les protègent et forment la myéline.</p>`
    },
    {
      type: "widget",
      title: "Reconnais les parties du neurone",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="260" fill="#eff6ff"/>
<path d="M90 130 L30 70 M90 130 L25 130 M90 130 L35 195 M60 100 L45 60 M55 165 L30 175 M40 70 L20 50" stroke="#7c3aed" stroke-width="7" stroke-linecap="round" fill="none"/>
<circle cx="100" cy="130" r="38" fill="#c084fc" stroke="#6d28d9" stroke-width="4"/>
<circle cx="100" cy="130" r="13" fill="#4c1d95"/>
<line x1="138" y1="130" x2="540" y2="130" stroke="#6d28d9" stroke-width="8"/>
<rect x="170" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<rect x="260" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<rect x="350" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<rect x="440" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<path d="M540 130 L590 85 M540 130 L600 130 M540 130 L590 180" stroke="#6d28d9" stroke-width="6" fill="none"/>
<circle cx="592" cy="83" r="9" fill="#22c55e"/><circle cx="604" cy="130" r="9" fill="#22c55e"/><circle cx="592" cy="182" r="9" fill="#22c55e"/>
<text x="340" y="230" font-size="16" fill="#1e3a8a" text-anchor="middle">sens de l'influx →</text>
</svg>`,
        spots: [
          { x: 35, y: 70, label: "Dendrites" },
          { x: 100, y: 105, label: "Corps cellulaire" },
          { x: 100, y: 130, label: "Noyau" },
          { x: 300, y: 130, label: "Gaine de myéline" },
          { x: 250, y: 155, label: "Axone" },
          { x: 604, y: 130, label: "Terminaisons synaptiques" }
        ]
      },
      caption: "Touche chaque point et choisis le bon nom. Le signal entre par les dendrites et sort par les terminaisons."
    },
    {
      type: "text",
      title: "3. La synapse : un saut chimique",
      html: `<p>Les neurones ne se touchent pas : entre un neurone et le suivant, il y a un espace microscopique, la <b>synapse</b>. Quand l'influx électrique arrive au bout de l'axone, le neurone libère des substances chimiques, les <b>neurotransmetteurs</b> (par exemple l'acétylcholine, la dopamine, la sérotonine). Elles traversent l'espace et se fixent sur la cellule suivante, qui peut alors « s'allumer » ou « s'éteindre ».</p>
<p>Chaque neurone peut avoir des milliers de synapses : dans le cerveau, il y en a des centaines de <b>milliers de milliards</b>. Quand nous apprenons quelque chose, certaines synapses se renforcent et de nouvelles se forment : c'est la <b>plasticité</b> du cerveau. C'est pour cela que s'entraîner fonctionne !</p>
<p>Beaucoup de <b>drogues</b>, l'<b>alcool</b> et la <b>nicotine</b> agissent justement sur les synapses, en imitant ou en bloquant les neurotransmetteurs : ils modifient les perceptions et les réflexes et peuvent créer une <b>dépendance</b>. Le cerveau des adolescents est encore en construction (jusqu'à environ 25 ans) et il est particulièrement vulnérable.</p>`
    },
    {
      type: "text",
      title: "4. L'organisation : central et périphérique",
      html: `<table>
<tr><th>Système nerveux central (SNC)</th><th>Système nerveux périphérique (SNP)</th></tr>
<tr><td><b>Encéphale</b> (dans le crâne) et <b>moelle épinière</b> (à l'intérieur de la colonne vertébrale). Il traite les informations et prend les décisions.</td>
<td>Les <b>nerfs</b> qui relient le SNC à tout le corps : <b>12 paires de nerfs crâniens</b> (qui partent de l'encéphale) et <b>31 paires de nerfs rachidiens</b> (qui partent de la moelle).</td></tr>
</table>
<p>Le SNC est protégé par des <b>os</b> (crâne et vertèbres), par trois membranes, les <b>méninges</b> (dure-mère, arachnoïde, pie-mère), et par un liquide qui sert de coussin, le <b>liquide cérébro-spinal</b>.</p>
<p>Le SNP se divise en :</p>
<ul>
<li>système <b>somatique</b> (volontaire) : il contrôle les muscles squelettiques, ceux que tu bouges quand tu le veux ;</li>
<li>système <b>autonome</b> (involontaire) : il contrôle le cœur, l'estomac, l'intestin, les glandes. Il a deux parties qui agissent de façon opposée :
<ul><li><b>sympathique</b> : « combats ou fuis » – il accélère le cœur, dilate les pupilles, bloque la digestion ;</li>
<li><b>parasympathique</b> : « repose-toi et digère » – il ralentit le cœur, favorise la digestion.</li></ul></li>
</ul>`
    },
    {
      type: "text",
      title: "5. L'encéphale",
      html: `<p>L'<b>encéphale</b> pèse environ <b>1,3–1,4 kg</b>, soit 2 % du poids du corps, mais il consomme environ <b>20 % de l'énergie</b>. Il comprend :</p>
<ul>
<li>Le <b>cerveau</b> : divisé en deux <b>hémisphères</b> reliés par le <b>corps calleux</b>. La partie externe, le <b>cortex cérébral</b> (substance grise, pleine de plis), est l'endroit où naissent la pensée, le langage, la mémoire et les mouvements volontaires. Chaque hémisphère se divise en 4 <b>lobes</b> : frontal, pariétal, temporal, occipital.</li>
<li>Le <b>diencéphale</b> : le <b>thalamus</b> trie les informations des sens ; l'<b>hypothalamus</b> règle la température, la faim, la soif, le sommeil et commande l'hypophyse (la « reine » des glandes).</li>
<li>Le <b>cervelet</b> : derrière et sous le cerveau ; il coordonne les mouvements et l'<b>équilibre</b>. Il te permet de faire du vélo sans y penser.</li>
<li>Le <b>tronc cérébral</b> : il relie l'encéphale et la moelle ; il contrôle des fonctions vitales automatiques comme la <b>respiration</b> et le <b>rythme cardiaque</b>.</li>
</ul>
<p>Un détail curieux : les nerfs se <b>croisent</b>. L'hémisphère <b>gauche</b> contrôle la partie <b>droite</b> du corps, et inversement.</p>`
    },
    {
      type: "svg",
      title: "Les lobes du cerveau et leurs fonctions",
      svg: `<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="330" fill="#fff7ed"/>
<path d="M120 190 C 100 110, 170 40, 280 38 C 380 35, 470 70, 490 150 C 505 205, 470 240, 420 240 L 160 240 C 130 238, 122 215, 120 190 Z" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<path d="M280 38 C 270 100, 290 150, 260 240" stroke="#7f1d1d" stroke-width="3" fill="none"/>
<path d="M420 70 C 400 130, 420 180, 440 235" stroke="#7f1d1d" stroke-width="3" fill="none"/>
<path d="M140 200 C 220 180, 330 190, 420 200" stroke="#7f1d1d" stroke-width="3" fill="none"/>
<path d="M120 190 C 100 110, 170 40, 280 38 C 270 100, 290 150, 270 195 C 220 185, 170 190, 120 190 Z" fill="#60a5fa" opacity="0.75"/>
<path d="M280 38 C 380 35, 410 50, 420 70 C 400 130, 420 180, 420 200 C 360 192, 310 190, 270 195 C 290 150, 270 100, 280 38 Z" fill="#fbbf24" opacity="0.75"/>
<path d="M420 70 C 470 85, 495 130, 490 160 C 500 205, 470 238, 440 236 C 425 220, 420 210, 420 200 C 420 180, 400 130, 420 70 Z" fill="#a78bfa" opacity="0.8"/>
<path d="M140 200 C 220 182, 330 190, 420 200 C 430 220, 438 232, 440 238 L 170 240 C 150 236, 142 222, 140 200 Z" fill="#34d399" opacity="0.8"/>
<ellipse cx="430" cy="270" rx="55" ry="32" fill="#f472b6" stroke="#831843" stroke-width="3"/>
<rect x="335" y="238" width="30" height="80" fill="#fb923c" stroke="#7c2d12" stroke-width="3"/>
<text x="195" y="130" font-size="16" font-weight="bold" fill="#1e3a8a">FRONTAL</text>
<text x="160" y="150" font-size="13" fill="#1e3a8a">décider, mouvement,</text>
<text x="170" y="166" font-size="13" fill="#1e3a8a">parler (Broca)</text>
<text x="300" y="90" font-size="16" font-weight="bold" fill="#78350f">PARIÉTAL</text>
<text x="300" y="110" font-size="13" fill="#78350f">toucher, position</text>
<text x="430" y="140" font-size="14" font-weight="bold" fill="#3b0764">OCCIPI-</text>
<text x="435" y="157" font-size="14" font-weight="bold" fill="#3b0764">TAL</text>
<text x="437" y="175" font-size="13" fill="#3b0764">vue</text>
<text x="215" y="218" font-size="16" font-weight="bold" fill="#064e3b">TEMPORAL : ouïe, mémoire</text>
<text x="430" y="275" font-size="14" font-weight="bold" fill="#831843" text-anchor="middle">Cervelet</text>
<text x="300" y="300" font-size="14" font-weight="bold" fill="#7c2d12" text-anchor="end">Tronc cérébral</text>
<text x="40" y="60" font-size="15" fill="#334155">avant ←</text>
</svg>`,
      caption: "Hémisphère gauche vu de côté. Chaque lobe a des fonctions principales, mais pour presque chaque activité, de nombreuses zones travaillent ensemble."
    },
    {
      type: "3d",
      title: "Les couches qui protègent le cerveau",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fcd5b5", label: "Cuir chevelu" },
          { r: 0.95, color: "#f1f5f9", label: "Os du crâne" },
          { r: 0.87, color: "#93c5fd", label: "Méninges et liquide cérébro-spinal" },
          { r: 0.82, color: "#9ca3af", label: "Cortex (substance grise)" },
          { r: 0.72, color: "#f8fafc", label: "Substance blanche (axones à myéline)" },
          { r: 0.15, color: "#38bdf8", label: "Ventricules remplis de liquide" }
        ]
      },
      caption: "Fais tourner et regarde la coupe : la substance grise contient les corps des neurones, la substance blanche est blanche à cause de la myéline des axones. Le casque à vélo ajoute une couche de plus !"
    },
    {
      type: "quiz",
      title: "Mini-quiz : neurones et encéphale",
      questions: [
        { type: "mc", q: "Quelle partie du neurone reçoit les signaux ?", options: ["L'axone", "Les dendrites", "La gaine de myéline"], answer: 1, explain: "Les dendrites reçoivent, l'axone transmet." },
        { type: "mc", q: "Quel organe coordonne l'équilibre ?", options: ["Le cervelet", "La moelle épinière", "Le thalamus"], answer: 0, explain: "Le cervelet coordonne les mouvements et l'équilibre." },
        { type: "tf", q: "L'hémisphère gauche contrôle surtout la partie gauche du corps.", answer: false, explain: "Les voies nerveuses se croisent : l'hémisphère gauche contrôle la partie droite." },
        { type: "text", q: "Comment s'appelle l'espace entre deux neurones où passent les neurotransmetteurs ?", answer: ["synapse", "la synapse", "fente synaptique"], explain: "C'est la synapse." }
      ]
    },
    {
      type: "text",
      title: "6. La moelle épinière et les réflexes",
      html: `<p>La <b>moelle épinière</b> est un cordon long d'environ <b>45 cm</b> qui descend à l'intérieur de la colonne vertébrale. Elle sert d'« autoroute » entre l'encéphale et le corps, mais elle sait aussi décider toute seule dans les <b>réflexes</b>.</p>
<p>Un <b>réflexe</b> est une réponse <b>automatique, très rapide et involontaire</b>. Le trajet s'appelle <b>arc réflexe</b> :</p>
<ol>
<li>un <b>récepteur</b> (dans la peau) sent la chaleur de la casserole ;</li>
<li>un <b>neurone sensitif</b> porte le signal à la moelle épinière ;</li>
<li>dans la moelle, un <b>interneurone</b> le passe aussitôt à…</li>
<li>…un <b>neurone moteur</b>, qui arrive au <b>muscle</b> du bras ;</li>
<li>le muscle se contracte : tu <b>retires la main</b>. C'est seulement <b>après</b> que le cerveau reçoit l'information et que tu sens la douleur !</li>
</ol>
<p>Le médecin vérifie le <b>réflexe rotulien</b> en frappant avec un petit marteau sous le genou : la jambe se détend toute seule. Cligner des yeux, éternuer et tousser sont aussi des réflexes.</p>`
    },
    {
      type: "svg",
      title: "L'arc réflexe",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f0fdf4"/>
<ellipse cx="480" cy="150" rx="70" ry="80" fill="#e5e7eb" stroke="#475569" stroke-width="3"/>
<path d="M455 120 C 440 150, 440 170, 460 190 L 500 190 C 520 170, 520 150, 505 120 Z" fill="#9ca3af"/>
<text x="480" y="255" font-size="15" text-anchor="middle" fill="#1e293b" font-weight="bold">Moelle épinière</text>
<rect x="40" y="60" width="80" height="50" rx="10" fill="#ef4444"/>
<text x="80" y="92" font-size="15" fill="#fff" text-anchor="middle">🔥 chaleur</text>
<circle cx="140" cy="85" r="10" fill="#f59e0b"/>
<text x="140" y="45" font-size="14" fill="#92400e" text-anchor="middle">1 récepteur</text>
<path d="M150 85 C 260 60, 380 70, 470 135" stroke="#2563eb" stroke-width="6" fill="none"/>
<text x="290" y="58" font-size="14" fill="#1d4ed8" text-anchor="middle">2 neurone sensitif →</text>
<circle cx="480" cy="155" r="9" fill="#a855f7"/>
<text x="560" y="160" font-size="14" fill="#6b21a8">3 interneurone</text>
<path d="M470 165 C 380 230, 260 240, 160 215" stroke="#dc2626" stroke-width="6" fill="none"/>
<text x="300" y="262" font-size="14" fill="#b91c1c" text-anchor="middle">← 4 neurone moteur</text>
<ellipse cx="120" cy="210" rx="45" ry="25" fill="#fb7185" stroke="#9f1239" stroke-width="3"/>
<text x="120" y="215" font-size="14" fill="#fff" text-anchor="middle">muscle</text>
<text x="120" y="262" font-size="14" fill="#9f1239" text-anchor="middle">5 tu retires la main !</text>
</svg>`,
      caption: "Le trajet du réflexe ne passe pas par le cerveau : c'est pour cela qu'il est si rapide."
    },
    {
      type: "widget",
      title: "Volontaire ou involontaire ?",
      widget: "classify",
      options: {
        groups: ["🙋 Volontaire (c'est toi qui décides)", "⚡ Involontaire / réflexe"],
        items: [
          ["Lever la main pour parler", 0],
          ["Les battements du cœur", 1],
          ["Taper dans un ballon", 0],
          ["Cligner des yeux quand un moucheron arrive", 1],
          ["Écrire une phrase", 0],
          ["La pupille qui se resserre sous une lumière forte", 1],
          ["L'éternuement", 1],
          ["Mâcher un sandwich", 0],
          ["La digestion dans l'estomac", 1]
        ]
      },
      caption: "Les mouvements volontaires partent du cortex ; les involontaires, de la moelle, du tronc cérébral ou du système autonome."
    },
    {
      type: "text",
      title: "7. Les organes des sens",
      html: `<p>Les organes des sens contiennent des <b>récepteurs</b> qui transforment un stimulus (lumière, son, pression, substances chimiques) en influx nerveux. Le cerveau les interprète ensuite : en réalité, nous <b>voyons et entendons avec le cerveau</b>.</p>
<table>
<tr><th>Sens</th><th>Organe et récepteurs</th><th>Zone du cerveau</th></tr>
<tr><td>👁️ Vue</td><td>L'œil : la lumière traverse la cornée, la pupille et le cristallin et forme une image <b>renversée</b> sur la <b>rétine</b>, où se trouvent les <b>cônes</b> (environ 6 millions, ils voient les couleurs) et les <b>bâtonnets</b> (environ 120 millions, ils voient avec peu de lumière). Le <b>nerf optique</b> porte le signal au cerveau, qui « redresse » l'image.</td><td>Lobe occipital</td></tr>
<tr><td>👂 Ouïe et équilibre</td><td>Oreille externe (pavillon) → moyenne (tympan et trois osselets : marteau, enclume, <b>étrier</b>, le plus petit os du corps, environ 3 mm) → interne : la <b>cochlée</b> pour l'ouïe et les <b>canaux semi-circulaires</b> pour l'équilibre.</td><td>Lobe temporal ; cervelet</td></tr>
<tr><td>👃 Odorat</td><td>Récepteurs dans la partie haute du nez, sensibles à des milliers d'odeurs.</td><td>Lobe temporal et système limbique (émotions et souvenirs)</td></tr>
<tr><td>👅 Goût</td><td>Papilles gustatives sur la langue : sucré, salé, acide, amer et <b>umami</b> (la saveur « savoureuse » du parmesan et du bouillon).</td><td>Cortex gustatif</td></tr>
<tr><td>✋ Toucher</td><td>Récepteurs dans la <b>peau</b> pour la pression, la vibration, le chaud, le froid et la douleur. Le bout des doigts et les lèvres en ont énormément.</td><td>Lobe pariétal</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Associe la partie à sa fonction",
      widget: "match",
      options: {
        pairs: [
          ["Rétine", "Contient des cônes et des bâtonnets"],
          ["Cochlée", "Transforme les sons en influx"],
          ["Canaux semi-circulaires", "Sens de l'équilibre"],
          ["Lobe occipital", "Traite la vue"],
          ["Tronc cérébral", "Contrôle la respiration et le rythme cardiaque"],
          ["Hypothalamus", "Règle la faim, la soif et la température"]
        ]
      },
      caption: "Touche un élément à gauche, puis le bon élément à droite."
    },
    {
      type: "example",
      title: "Exemple pratique : mesure ton temps de réaction avec une règle",
      html: `<p>Il te faut un camarade et une règle de 30 cm.</p>
<ol>
<li>Le camarade tient la règle à la verticale, avec le 0 en bas, entre ton pouce et ton index ouverts (sans la toucher).</li>
<li>Sans prévenir, il la lâche : toi, tu l'attrapes le plus vite possible.</li>
<li>Lis à combien de centimètres tu l'as attrapée.</li>
</ol>
<p>La règle tombe comme n'importe quel objet, donc on peut déduire le temps de la distance : <b>t = √(2 × d : 9,8)</b> (avec d en mètres).<br>
Si tu l'as attrapée à <b>20 cm</b> : t = √(2 × 0,20 : 9,8) ≈ <b>0,2 seconde</b>. À 15 cm ≈ 0,17 s ; à 10 cm ≈ 0,14 s.</p>
<p>Pendant ce temps, l'œil voit, le signal va au cerveau, le cerveau décide et envoie l'ordre aux muscles de la main. Essayez de recommencer après avoir lu à voix haute ou avec une distraction : le temps s'allonge. C'est la raison pour laquelle <b>on n'utilise pas le téléphone en conduisant</b> : à 50 km/h, en 1 seconde de distraction on parcourt environ 14 mètres.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : trouve ta tache aveugle",
      html: `<p>Sur une feuille, dessine un <b>X</b> à gauche et un <b>rond</b> 8 cm plus à droite. Ferme l'œil gauche et fixe le X avec l'œil droit. Rapproche et éloigne lentement la feuille : à environ 25–30 cm, le rond <b>disparaît</b> !</p>
<p>À cet endroit, l'image tombe là où le <b>nerf optique</b> sort de la rétine : il n'y a ni cônes ni bâtonnets. Normalement nous ne le remarquons pas parce que le cerveau « comble le trou » avec ce qu'il y a autour et parce que les deux yeux se complètent.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Un prix Nobel italien pour les neurones",
      html: `<p>En 1873, le médecin italien <b>Camillo Golgi</b>, à Pavie, inventa une coloration avec des sels d'argent (la « réaction noire ») qui montrait pour la première fois des neurones entiers au microscope. L'Espagnol <b>Santiago Ramón y Cajal</b> l'utilisa pour démontrer que le système nerveux est fait de cellules séparées. En <b>1906</b>, ils reçurent ensemble le prix Nobel, bien qu'ils ne soient pas d'accord sur le fonctionnement des neurones ! En 1986, une autre Italienne, <b>Rita Levi-Montalcini</b>, reçut le Nobel pour la découverte du facteur de croissance nerveuse (NGF).</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le cerveau ne s'éteint jamais",
      html: `<p>Pendant le <b>sommeil</b>, le cerveau travaille énormément : il range les souvenirs de la journée, renforce ce que tu as appris et fait le « ménage » des déchets. C'est pourquoi dormir 9 à 10 heures par nuit, à ton âge, aide vraiment à mieux étudier. Et le cerveau ne ressent pas la douleur : il n'a pas de récepteurs de la douleur, au point que certaines opérations se font avec le patient éveillé !</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre le système nerveux",
      intro: "Si les noms des parties ne te restent pas en tête, essaie de voir le système nerveux d'une autre manière.",
      tabs: [
        {
          label: "🏢 L'entreprise des messages",
          html: `<p>Imagine le corps comme une grande <b>entreprise</b> :</p>
<ul>
<li>les <b>récepteurs</b> sont les capteurs et les caméras à l'entrée ;</li>
<li>les <b>nerfs sensitifs</b> sont les fils qui portent les nouvelles au bureau central ;</li>
<li>le <b>cerveau</b> est la direction, où l'on décide ; le <b>cortex frontal</b> est le directeur, le <b>cervelet</b> le coordinateur des travaux, le <b>tronc cérébral</b> le gardien qui garde le chauffage allumé même la nuit ;</li>
<li>la <b>moelle épinière</b> est le standard de triage, qui en cas d'urgence (réflexe) agit sans demander au directeur ;</li>
<li>les <b>nerfs moteurs</b> portent les ordres aux ouvriers : les <b>muscles</b>.</li>
</ul>`
        },
        {
          label: "🔌 Comme une installation électrique",
          html: `<p>Un neurone ressemble à un <b>câble électrique</b> : l'axone est le fil de cuivre, la <b>myéline</b> est la gaine isolante en plastique. Mais il y a une différence importante : dans le neurone, ce ne sont pas des électrons qui courent comme dans le cuivre, mais des <b>ions</b> (sodium et potassium) qui entrent et sortent à travers la membrane, un « déclic » après l'autre, comme une file de dominos qui tombent. Dans la fibre à myéline, le signal « saute » d'une interruption de la gaine à la suivante : c'est pourquoi il est plus rapide.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<text x="20" y="35" font-size="16" fill="#0f172a" font-weight="bold">Câble électrique</text>
<rect x="20" y="50" width="560" height="34" rx="17" fill="#3b82f6"/>
<rect x="20" y="61" width="560" height="12" fill="#d97706"/>
<text x="300" y="104" font-size="14" fill="#1e3a8a" text-anchor="middle">gaine de plastique + cuivre : les électrons courent</text>
<text x="20" y="140" font-size="16" fill="#0f172a" font-weight="bold">Axone à myéline</text>
<line x1="20" y1="172" x2="580" y2="172" stroke="#7c3aed" stroke-width="10"/>
<rect x="40" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<rect x="170" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<rect x="300" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<rect x="430" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<path d="M160 150 Q 225 115 290 150 Q 355 115 420 150 Q 485 115 550 150" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="300" y="212" font-size="14" fill="#7f1d1d" text-anchor="middle">le signal « saute » entre les parties à nu : plus rapide</text>
</svg>`
        },
        {
          label: "👁️ L'œil en 3D",
          html: `<p>L'œil est une sphère d'environ <b>2,4 cm</b>. Fais tourner le modèle : de l'extérieur, tu trouves la <b>sclérotique</b> (le « blanc » de l'œil), la <b>choroïde</b> riche en vaisseaux sanguins, la <b>rétine</b> avec les récepteurs et, à l'intérieur, l'<b>humeur vitrée</b>, une gelée transparente. À l'avant, la cornée et le cristallin fonctionnent comme les lentilles d'un appareil photo.</p>`,
          scene: "layers",
          options: {
            layers: [
              { r: 1, color: "#f8fafc", label: "Sclérotique" },
              { r: 0.94, color: "#b91c1c", label: "Choroïde" },
              { r: 0.89, color: "#f59e0b", label: "Rétine (cônes et bâtonnets)" },
              { r: 0.85, color: "#bae6fd", label: "Humeur vitrée" }
            ]
          }
        },
        {
          label: "🃏 Cartes de révision",
          html: `<p>Retourne les cartes : devant, la partie ; derrière, ce qu'elle fait. Réviser avec des cartes exploite justement la plasticité du cerveau : chaque fois que tu te souviens, la synapse se renforce.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🧠 Cortex frontal", back: "Décisions, mouvements volontaires, langage parlé" },
              { front: "⚖️ Cervelet", back: "Équilibre et coordination des mouvements" },
              { front: "❤️ Tronc cérébral", back: "Respiration, rythme cardiaque, déglutition" },
              { front: "🦴 Moelle épinière", back: "Relie l'encéphale et le corps ; gère les réflexes" },
              { front: "🏃 Sympathique", back: "Combats ou fuis : accélère le cœur" },
              { front: "😌 Parasympathique", back: "Repose-toi et digère : ralentit le cœur" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte du système nerveux : touche les nœuds et découvre le pourquoi",
      nodes: [
        { id: "stimolo", label: "Stimuli et récepteurs", x: 12, y: 10, color: "#f59e0b", html: "Lumière, sons, chaleur, pression, substances chimiques perçus par les récepteurs.", why: "Les récepteurs sont des cellules spécialisées qui transforment un type d'énergie en signal électrique. Chaque récepteur ne répond qu'à un seul type de stimulus : c'est pourquoi un coup sur l'œil fait « voir des étoiles »." },
        { id: "neurone", label: "Neurone", x: 50, y: 10, color: "#a855f7", html: "La cellule qui transmet les signaux nerveux.", why: "La <b>théorie neuronale</b> de Ramón y Cajal (fin du XIXe siècle), rendue possible par la coloration de <b>Golgi</b> (1873), démontra que le système nerveux est fait de cellules distinctes. Nobel 1906 pour tous les deux." },
        { id: "impulso", label: "Influx électrique", x: 85, y: 10, color: "#ef4444", html: "Une onde électrique qui court le long de l'axone.", why: "<b>Luigi Galvani</b>, en 1791, vit des pattes de grenouille se contracter au contact de métaux et parla d'« électricité animale ». En 1952, Hodgkin et Huxley expliquèrent le rôle des ions sodium et potassium (Nobel 1963)." },
        { id: "sinapsi", label: "Synapse", x: 85, y: 40, color: "#db2777", html: "Le point de contact chimique entre deux neurones.", why: "Le nom fut proposé par Charles Sherrington en 1897. En 1921, Otto Loewi démontra, avec une expérience sur des cœurs de grenouille, que les neurones communiquent par des substances chimiques (les neurotransmetteurs)." },
        { id: "snc", label: "Système nerveux central", x: 50, y: 45, color: "#2563eb", html: "Encéphale et moelle épinière : ils traitent et décident.", why: "Il s'est développé en concentrant les neurones dans un « centre de commande » protégé par les os : les animaux simples comme les méduses n'ont qu'un réseau diffus de neurones, les vertébrés un encéphale de plus en plus complexe." },
        { id: "snp", label: "Système nerveux périphérique", x: 15, y: 45, color: "#0ea5e9", html: "12 paires de nerfs crâniens et 31 de nerfs rachidiens.", why: "Les nerfs sont des faisceaux d'axones : ils doivent atteindre chaque muscle et chaque centimètre de peau, c'est pourquoi ils se ramifient dans tout le corps." },
        { id: "riflessi", label: "Réflexes", x: 15, y: 80, color: "#14b8a6", html: "Réponses automatiques gérées par la moelle épinière.", why: "Ils sont un avantage pour la survie : en court-circuitant le cerveau, on gagne de précieuses millisecondes pour échapper à un danger." },
        { id: "corteccia", label: "Cortex et lobes", x: 50, y: 80, color: "#16a34a", html: "Pensée, langage, mémoire, sens.", why: "En 1861, <b>Paul Broca</b> étudia un patient qui comprenait mais ne parvenait pas à parler, et trouva une lésion dans le lobe frontal gauche : ce fut la première preuve que les fonctions ont une « place » dans le cerveau." },
        { id: "autonomo", label: "Système autonome", x: 85, y: 80, color: "#64748b", html: "Le sympathique et le parasympathique règlent les organes internes.", why: "Les fonctions vitales (rythme cardiaque, digestion) doivent toujours fonctionner, même quand nous dormons ou pensons à autre chose : c'est pourquoi elles sont confiées à un système qui ne dépend pas de la volonté." }
      ],
      edges: [
        ["stimolo", "neurone", "activent le"],
        ["neurone", "impulso", "produit l'"],
        ["impulso", "sinapsi", "arrive à la"],
        ["neurone", "snc", "forme le"],
        ["neurone", "snp", "forme le"],
        ["snp", "snc", "porte des informations au"],
        ["snp", "riflessi", "avec la moelle crée les"],
        ["snc", "corteccia", "comprend le"],
        ["snc", "autonomo", "commande le"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : réflexes et sens",
      questions: [
        { type: "order", q: "Mets dans l'ordre l'arc réflexe.", items: ["Récepteur", "Neurone sensitif", "Moelle épinière (interneurone)", "Neurone moteur", "Muscle"], explain: "Le signal va du récepteur à la moelle et revient au muscle." },
        { type: "mc", q: "Quelles cellules de la rétine voient les couleurs ?", options: ["Les bâtonnets", "Les cônes", "Les cellules gliales"], answer: 1, explain: "Les cônes voient les couleurs ; les bâtonnets fonctionnent avec peu de lumière." },
        { type: "tf", q: "Le parasympathique accélère le rythme du cœur en cas de danger.", answer: false, explain: "C'est le sympathique qui l'accélère ; le parasympathique le ralentit." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Le <b>neurone</b> reçoit par les dendrites et transmet par l'axone ; il communique par les <b>synapses</b> grâce aux neurotransmetteurs.</li>
<li><b>SNC</b> = encéphale + moelle épinière ; <b>SNP</b> = nerfs (12 paires crâniennes, 31 rachidiennes).</li>
<li>Encéphale : <b>cerveau</b> (4 lobes, 2 hémisphères), <b>cervelet</b> (équilibre), <b>tronc cérébral</b> (fonctions vitales).</li>
<li><b>Réflexe</b> : réponse automatique gérée par la moelle épinière.</li>
<li>Système autonome : <b>sympathique</b> (active) et <b>parasympathique</b> (calme).</li>
<li>Protège ton cerveau : sommeil, casque, ni alcool ni drogues.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Neurone", d: "Cellule nerveuse qui reçoit et transmet des influx." },
    { t: "Axone", d: "Long prolongement du neurone qui transmet l'influx." },
    { t: "Dendrites", d: "Courtes ramifications du neurone qui reçoivent les signaux." },
    { t: "Myéline", d: "Revêtement isolant qui rend l'influx plus rapide." },
    { t: "Synapse", d: "Zone de communication entre deux neurones ou entre un neurone et un muscle." },
    { t: "Neurotransmetteur", d: "Substance chimique qui transmet le signal dans la synapse." },
    { t: "Encéphale", d: "Partie du SNC située dans le crâne : cerveau, cervelet, tronc cérébral." },
    { t: "Réflexe", d: "Réponse automatique et involontaire à un stimulus." },
    { t: "Récepteur", d: "Cellule ou structure qui capte un stimulus." },
    { t: "Méninges", d: "Trois membranes qui enveloppent l'encéphale et la moelle épinière." },
    { t: "Rétine", d: "Couche interne de l'œil avec les photorécepteurs (cônes et bâtonnets)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Le système nerveux central est formé de…", options: ["nerfs crâniens et rachidiens", "l'encéphale et la moelle épinière", "le cerveau et le cœur"], answer: 1, explain: "SNC = encéphale + moelle épinière." },
      { type: "mc", q: "À quoi sert la gaine de myéline ?", options: ["À nourrir le neurone", "À rendre l'influx plus rapide", "À produire des hormones"], answer: 1, explain: "Elle isole l'axone et fait « sauter » le signal." },
      { type: "text", q: "Comment s'appellent les substances chimiques libérées dans la synapse ?", answer: ["neurotransmetteurs", "les neurotransmetteurs", "neurotransmetteur"], explain: "Les neurotransmetteurs, comme la dopamine et la sérotonine." },
      { type: "num", q: "Combien de paires de nerfs rachidiens le corps humain possède-t-il ?", answer: 31, explain: "31 paires, qui sortent de la moelle épinière entre les vertèbres." },
      { type: "mc", q: "Quel lobe traite les images vues par les yeux ?", options: ["Frontal", "Temporal", "Occipital", "Pariétal"], answer: 2, explain: "Le lobe occipital, à l'arrière." },
      { type: "tf", q: "Dans le réflexe, le signal passe d'abord par le cerveau, puis par la moelle.", answer: false, explain: "Le réflexe est géré par la moelle ; le cerveau est informé ensuite." },
      { type: "mc", q: "Quelle partie de l'encéphale contrôle la respiration et le rythme cardiaque ?", options: ["Le tronc cérébral", "Le corps calleux", "Le lobe pariétal"], answer: 0, explain: "Le tronc cérébral contrôle les fonctions vitales." },
      { type: "mc", q: "Où se trouve la cochlée ?", options: ["Dans l'œil", "Dans l'oreille interne", "Dans le nez"], answer: 1, explain: "La cochlée, en forme d'escargot, est dans l'oreille interne." },
      { type: "tf", q: "Le système sympathique prépare le corps à l'action (« combats ou fuis »).", answer: true, explain: "Il accélère le cœur et la respiration, dilate les pupilles." },
      { type: "order", q: "Mets dans l'ordre le trajet du signal dans un neurone.", items: ["Dendrites", "Corps cellulaire", "Axone", "Terminaisons synaptiques"], explain: "On entre par les dendrites, on sort par les terminaisons." },
      { type: "text", q: "Quel scientifique italien inventa la « réaction noire » pour colorer les neurones ?", answer: ["golgi", "camillo golgi"], explain: "Camillo Golgi, Nobel 1906." },
      { type: "num", q: "Une règle est attrapée en environ 0,2 s. Si un vélo roule à 5 m/s, combien de mètres parcourt-il pendant ce temps ?", answer: 1, tol: 0.01, unit: "m", explain: "5 m/s × 0,2 s = 1 m." }
    ]
  }
});
