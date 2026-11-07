TOPIC('fr', {
 "id": "p4-tec-condizioni",
 "title": "Si… alors : les conditions",
 "intro": "<i>S'il pleut, alors je prends mon parapluie. ☔ Sinon, je prends ma casquette. 🧢</i> Chaque jour, tu prends plein de décisions comme ça, sans t'en rendre compte. Les ordinateurs, les jeux vidéo et les robots décident eux aussi avec des <b>conditions</b> : <b>SI</b> quelque chose est vrai, <b>ALORS</b> ils font une action, <b>SINON</b> ils en font une autre. Découvrons comment on « apprend à décider » à une machine !",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "1. Qu'est-ce qu'une condition ?",
   "html": "<p>Une <b>condition</b> est une question à laquelle on ne peut répondre que par <b>OUI</b> ou <b>NON</b>, c'est-à-dire <b>VRAI</b> ou <b>FAUX</b>.</p>\n<ul>\n<li>« Est-ce qu'il pleut ? » → oui / non ✅</li>\n<li>« Le feu est-il rouge ? » → oui / non ✅</li>\n<li>« Le score est-il supérieur à 100 ? » → oui / non ✅</li>\n<li>« Quelle heure est-il ? » → ❌ ce n'est <b>pas</b> une condition : la réponse n'est pas oui ou non !</li>\n</ul>\n<p>L'ordinateur vérifie la condition et, selon la réponse, choisit <b>quel chemin</b> suivre dans le programme. Ce choix s'appelle une <b>sélection</b> ou <b>instruction conditionnelle</b>.</p>"
  },
  {
   "type": "text",
   "title": "2. SI… ALORS (if… then)",
   "html": "<p>La forme la plus simple est :</p>\n<p style=\"font-size:1.2em\">🟨 <b>SI</b> <i>condition</i> <b>ALORS</b> <i>action</i></p>\n<p>Si la condition est <b>vraie</b>, l'ordinateur fait l'action. Si elle est <b>fausse</b>, il la saute et continue.</p>\n<ul>\n<li>SI la batterie est sous les 20 % ALORS affiche « Batterie faible » 🔋</li>\n<li>SI le chat touche le poisson ALORS ajoute 1 point 🐱🐟</li>\n<li>SI la nuit tombe ALORS allume les lampadaires 💡</li>\n</ul>\n<p>En anglais, la langue des programmeurs, <b>SI</b> se dit <b>if</b> et <b>ALORS</b> se dit <b>then</b>.</p>"
  },
  {
   "type": "text",
   "title": "3. SI… ALORS… SINON (if… else)",
   "html": "<p>Souvent, on veut faire une chose si la condition est vraie et <b>une autre</b> si elle est fausse :</p>\n<p style=\"font-size:1.2em\">🟨 <b>SI</b> <i>condition</i> <b>ALORS</b> <i>action A</i> <b>SINON</b> <i>action B</i></p>\n<ul>\n<li>SI la réponse est juste ALORS dis « Bravo ! » 🎉 SINON dis « Essaie encore ! » 🔁</li>\n<li>SI le feu est vert ALORS traverse 🚶 SINON attends ✋</li>\n</ul>\n<p><b>Sinon</b> se dit <b>else</b> en anglais. Avec le sinon, le programme fait <b>toujours</b> l'une des deux actions, <b>jamais les deux</b> et <b>jamais aucune</b>.</p>"
  },
  {
   "type": "svg",
   "title": "L'organigramme : le losange des décisions",
   "svg": "<svg viewBox=\"0 0 600 340\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"340\" fill=\"#f8fafc\"/>\n<ellipse cx=\"300\" cy=\"35\" rx=\"70\" ry=\"24\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"42\" font-size=\"18\" font-weight=\"bold\" fill=\"#14532d\" text-anchor=\"middle\">DÉBUT</text>\n<line x1=\"300\" y1=\"59\" x2=\"300\" y2=\"85\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<polygon points=\"300,85 410,145 300,205 190,145\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"140\" font-size=\"18\" font-weight=\"bold\" fill=\"#78350f\" text-anchor=\"middle\">Il pleut ?</text>\n<text x=\"300\" y=\"162\" font-size=\"14\" fill=\"#78350f\" text-anchor=\"middle\">(condition)</text>\n<line x1=\"190\" y1=\"145\" x2=\"110\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"145\" x2=\"110\" y2=\"225\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"410\" y1=\"145\" x2=\"490\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"490\" y1=\"145\" x2=\"490\" y2=\"225\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<text x=\"150\" y=\"135\" font-size=\"18\" font-weight=\"bold\" fill=\"#15803d\" text-anchor=\"middle\">OUI</text>\n<text x=\"450\" y=\"135\" font-size=\"18\" font-weight=\"bold\" fill=\"#b91c1c\" text-anchor=\"middle\">NON</text>\n<rect x=\"30\" y=\"225\" width=\"160\" height=\"50\" rx=\"6\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<text x=\"110\" y=\"256\" font-size=\"17\" fill=\"#1e3a8a\" text-anchor=\"middle\">Prends le parapluie ☔</text>\n<rect x=\"410\" y=\"225\" width=\"160\" height=\"50\" rx=\"6\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<text x=\"490\" y=\"256\" font-size=\"17\" fill=\"#1e3a8a\" text-anchor=\"middle\">Prends la casquette 🧢</text>\n<line x1=\"110\" y1=\"275\" x2=\"110\" y2=\"305\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"490\" y1=\"275\" x2=\"490\" y2=\"305\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"305\" x2=\"490\" y2=\"305\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"330\" font-size=\"16\" fill=\"#334155\" text-anchor=\"middle\">puis on continue : sors de la maison 🚪</text>\n</svg>",
   "caption": "Dans les organigrammes, la condition se dessine dans un losange : il a une entrée et deux sorties, OUI (vrai) et NON (faux)."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : reconnaître les conditions",
   "questions": [
    {
     "type": "mc",
     "q": "Laquelle de ces phrases est une condition ?",
     "options": [
      "De quelle couleur est le ciel ?",
      "Le score est-il supérieur à 10 ?",
      "Quel âge as-tu ?"
     ],
     "answer": 1,
     "explain": "Une condition n'a que deux réponses : vrai ou faux. « Le score est-il supérieur à 10 ? » → oui ou non."
    },
    {
     "type": "mc",
     "q": "Dans un organigramme, la condition se dessine dans…",
     "options": [
      "un rectangle",
      "un losange",
      "un ovale"
     ],
     "answer": 1,
     "explain": "Le losange est le symbole de la décision, avec deux sorties (oui / non)."
    },
    {
     "type": "tf",
     "q": "Avec SI… ALORS… SINON, le programme peut exécuter les deux actions en même temps.",
     "answer": false,
     "explain": "Il n'en exécute toujours qu'une seule : celle du OUI ou celle du NON."
    },
    {
     "type": "mc",
     "q": "Comment dit-on « sinon » dans les langages de programmation ?",
     "options": [
      "then",
      "if",
      "else"
     ],
     "answer": 2,
     "explain": "if = si, then = alors, else = sinon."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Comparaisons : plus grand, plus petit, égal",
   "html": "<p>Beaucoup de conditions <b>comparent des nombres</b>. On utilise les symboles que tu connais en mathématiques :</p>\n<table>\n<tr><th>Symbole</th><th>Signifie</th><th>Exemple</th><th>Vrai ou faux ?</th></tr>\n<tr><td><b>&gt;</b></td><td>supérieur à</td><td>points &gt; 100 (avec points = 120)</td><td>✅ vrai</td></tr>\n<tr><td><b>&lt;</b></td><td>inférieur à</td><td>vies &lt; 1 (avec vies = 3)</td><td>❌ faux</td></tr>\n<tr><td><b>=</b></td><td>égal à</td><td>âge = 9 (avec âge = 9)</td><td>✅ vrai</td></tr>\n</table>\n<p>Les valeurs comme « points », « vies », « âge », qui peuvent changer pendant le jeu, s'appellent des <b>variables</b> : ce sont comme des boîtes avec une étiquette, dans lesquelles l'ordinateur range un nombre.</p>"
  },
  {
   "type": "text",
   "title": "5. Conditions composées : ET, OU, NON",
   "html": "<p>Parfois, il faut plusieurs conditions à la fois. On les relie avec trois petits mots magiques, les <b>opérateurs logiques</b> :</p>\n<ul>\n<li>🤝 <b>ET</b> (and) : vrai seulement si <b>les deux</b> conditions sont vraies.<br><i>SI j'ai fini mes devoirs <b>ET</b> qu'il ne pleut pas ALORS je vais au parc.</i></li>\n<li>🔀 <b>OU</b> (or) : vrai si <b>au moins une</b> condition est vraie.<br><i>SI c'est samedi <b>OU</b> dimanche ALORS pas d'école.</i></li>\n<li>🔄 <b>NON</b> (not) : <b>renverse</b> la réponse : le vrai devient faux et le faux devient vrai.<br><i>SI je <b>N'</b>ai <b>PAS</b> mon goûter ALORS je l'achète.</i></li>\n</ul>\n<p>On peut aussi mettre des conditions <b>les unes dans les autres</b> (conditions imbriquées) : SI c'est l'été ALORS (SI il y a du soleil ALORS je vais à la mer SINON je vais à la piscine).</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : le jeu dans Scratch",
   "html": "<p>Dans <b>Scratch</b>, les blocs de conditions sont orange (catégorie <i>Contrôle</i>) et ont un emplacement en forme d'hexagone où se glisse la condition.</p>\n<p>Programme du chat qui ramasse les pommes 🍎 :</p>\n<p style=\"font-family:monospace;background:#fff7ed;padding:8px;border-radius:8px\">\nquand le drapeau vert est cliqué<br>\nrépéter indéfiniment<br>\n&nbsp;&nbsp;<b>si</b> &lt;touche Pomme ?&gt; <b>alors</b><br>\n&nbsp;&nbsp;&nbsp;&nbsp;ajouter 1 à points<br>\n&nbsp;&nbsp;&nbsp;&nbsp;jouer le son « pop »<br>\n&nbsp;&nbsp;<b>si</b> &lt;points = 10&gt; <b>alors</b><br>\n&nbsp;&nbsp;&nbsp;&nbsp;dire « Tu as gagné ! » 🏆<br>\n&nbsp;&nbsp;&nbsp;&nbsp;stop tout\n</p>\n<p>Remarque : la condition est vérifiée <b>en continu</b> parce qu'elle est dans une boucle « répéter indéfiniment ». Sans boucle, elle ne serait vérifiée qu'une seule fois, au début !</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : les conditions autour de toi",
   "html": "<p>Les machines de tous les jours sont pleines de SI… ALORS :</p>\n<ul>\n<li>🚪 <b>Porte automatique</b> du supermarché : SI le capteur voit une personne ALORS ouvre SINON ferme.</li>\n<li>🌡️ <b>Thermostat</b> du chauffage : SI la température &lt; 20 °C ALORS allume la chaudière SINON éteins-la.</li>\n<li>🚗 <b>Radar de recul</b> : SI l'obstacle est à moins de 30 cm ALORS sonne plus vite.</li>\n<li>📱 <b>Téléphone</b> : SI le code est juste ALORS déverrouille SINON après 5 erreurs bloque pendant un moment.</li>\n<li>🌿 <b>Arrosage du jardin</b> : SI il est 7 heures ET que la terre est sèche ALORS ouvre l'eau.</li>\n</ul>"
  },
  {
   "type": "widget",
   "title": "Vrai ou faux ? À toi de jouer",
   "widget": "classify",
   "options": {
    "groups": [
     "✅ VRAI",
     "❌ FAUX"
    ],
    "items": [
     [
      "7 > 5",
      0
     ],
     [
      "3 > 8",
      1
     ],
     [
      "10 = 10",
      0
     ],
     [
      "4 < 2",
      1
     ],
     [
      "(2 < 5) E (6 > 1)",
      0
     ],
     [
      "(2 > 5) ET (6 > 1)",
      1
     ],
     [
      "(2 > 5) OU (6 > 1)",
      0
     ],
     [
      "(1 > 3) OU (0 > 9)",
      1
     ],
     [
      "NON (3 = 3)",
      1
     ],
     [
      "NON (5 < 1)",
      0
     ]
    ]
   },
   "caption": "Touche chaque condition et mets-la dans la bonne boîte. Rappelle-toi : ET veut que les deux soient vraies, OU en veut au moins une, NON renverse."
  },
  {
   "type": "decision",
   "title": "Programme le robot aspirateur",
   "html": "Tu programmes un robot aspirateur 🤖. Il a un capteur à l'avant qui dit s'il y a un <b>obstacle</b> (un mur, le pied de la table, le chat…). Le robot doit nettoyer toute la pièce sans rester coincé.",
   "question": "Quelle règle écrirais-tu ?",
   "options": [
    {
     "label": "SI il y a un obstacle ALORS arrête-toi pour toujours.",
     "outcome": "Le robot se bloque au premier mur et ne nettoie plus rien : la pièce reste sale !"
    },
    {
     "label": "SI il y a un obstacle ALORS tourne un peu SINON avance (et répète pour toujours).",
     "outcome": "Le robot évite les obstacles, change de direction et continue de nettoyer : ça marche !"
    },
    {
     "label": "Avance toujours, sans condition.",
     "outcome": "Le robot cogne contre le mur et continue de pousser : les roues tournent dans le vide."
    }
   ],
   "answer": 1,
   "explain": "Les premiers robots aspirateurs pour la maison (comme ceux vendus depuis le début des années 2000) utilisaient justement des règles simples de ce genre : SI je heurte quelque chose ALORS je tourne et je repars, le tout dans une boucle qui se répète. Il faut une <b>condition</b> (y a-t-il un obstacle ?), les <b>deux chemins</b> (tourne / avance) et une <b>boucle</b> qui répète la vérification. Aujourd'hui, beaucoup de robots utilisent aussi des cartes et des caméras, mais à l'intérieur, il y a toujours énormément de SI… ALORS."
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? George Boole et le vrai/faux",
   "html": "<p>En <b>1854</b>, le mathématicien anglais <b>George Boole</b> publia un livre, <i>Les Lois de la pensée</i>, dans lequel il traitait VRAI et FAUX comme des nombres : <b>1</b> et <b>0</b>. Il inventa une algèbre avec les opérations ET, OU, NON.</p>\n<p>À son époque, cela ressemblait à un simple jeu de mathématiciens. Presque un siècle plus tard, les ingénieurs comprirent que les circuits électriques fonctionnent de la même façon (courant oui = 1, courant non = 0) : aujourd'hui, chaque ordinateur et chaque smartphone « raisonne » avec l'<b>algèbre de Boole</b>. En son honneur, dans les langages de programmation, les valeurs vrai/faux s'appellent des <b>booléens</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Les livres dont vous êtes le héros",
   "html": "<p>Il existe des livres où c'est toi qui décides comment l'histoire se déroule : à la fin d'une page, tu lis <i>« Si tu veux entrer dans la caverne, va à la page 42, sinon va à la page 17 »</i>. On les appelle des <b>livres dont vous êtes le héros</b> (en anglais <i>gamebooks</i>) et ils sont devenus célèbres dans les années 1980.</p>\n<p>Un livre-jeu est exactement un <b>programme fait de SI… SINON</b>, et le lecteur joue le rôle de l'ordinateur ! Les jeux vidéo avec des histoires à embranchements fonctionnent eux aussi comme ça.</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Une <b>condition</b> est une question dont la réponse est <b>vrai</b> ou <b>faux</b>.</li>\n<li><b>SI … ALORS</b> (if … then) : l'action n'est faite que si la condition est vraie.</li>\n<li><b>SI … ALORS … SINON</b> (if … else) : on fait toujours l'une des deux actions.</li>\n<li>Comparaisons : <b>&gt;</b> supérieur, <b>&lt;</b> inférieur, <b>=</b> égal.</li>\n<li><b>ET</b> = toutes vraies ; <b>OU</b> = au moins une vraie ; <b>NON</b> = renverse.</li>\n<li>Dans les organigrammes, la condition est un <b>losange</b> à deux sorties.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les conditions",
   "intro": "La même idée peut s'écrire et se voir de bien des façons : en blocs, dans un vrai langage de programmation, comme une bifurcation dans la forêt, comme les règles des jeux ou comme un jeu d'association.",
   "tabs": [
    {
     "label": "🧩 En blocs (Scratch)",
     "html": "<p>Dans Scratch (créé au <b>MIT</b> de Boston et publié en 2007), le bloc <b>si… alors… sinon</b> ressemble à une <b>double bouche en forme de C</b> : dans la première bouche, tu mets les blocs du OUI, dans la seconde ceux du NON. La condition a la forme d'un <b>hexagone</b> : seuls les blocs hexagonaux (qui donnent vrai ou faux) peuvent s'y emboîter !</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#ffffff\"/>\n<path d=\"M60 20 H420 V70 H120 V120 H420 V150 H120 V200 H420 V240 H60 Z\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<text x=\"80\" y=\"52\" font-size=\"20\" font-weight=\"bold\" fill=\"#ffffff\">si</text>\n<polygon points=\"120,32 140,22 330,22 350,32 330,62 140,62\" fill=\"#38bdf8\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"50\" font-size=\"17\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">touche Pomme ?</text>\n<text x=\"360\" y=\"52\" font-size=\"20\" font-weight=\"bold\" fill=\"#ffffff\">alors</text>\n<rect x=\"130\" y=\"80\" width=\"230\" height=\"32\" rx=\"6\" fill=\"#a855f7\"/>\n<text x=\"245\" y=\"102\" font-size=\"17\" fill=\"#ffffff\" text-anchor=\"middle\">dire « Miam ! » 🍎</text>\n<text x=\"80\" y=\"142\" font-size=\"20\" font-weight=\"bold\" fill=\"#ffffff\">sinon</text>\n<rect x=\"130\" y=\"160\" width=\"230\" height=\"32\" rx=\"6\" fill=\"#3b82f6\"/>\n<text x=\"245\" y=\"182\" font-size=\"17\" fill=\"#ffffff\" text-anchor=\"middle\">avancer de 10 pas 🐾</text>\n<text x=\"440\" y=\"100\" font-size=\"16\" fill=\"#15803d\" font-weight=\"bold\">← si VRAI</text>\n<text x=\"440\" y=\"182\" font-size=\"16\" fill=\"#b91c1c\" font-weight=\"bold\">← si FAUX</text>\n</svg>"
    },
    {
     "label": "🐍 Comme les vrais programmeurs",
     "html": "<p>Plus tard, tu écriras des programmes avec des mots. Voici la même idée en <b>Python</b>, l'un des langages les plus utilisés au monde (y compris pour l'intelligence artificielle) :</p>\n<p style=\"font-family:monospace;background:#0f172a;color:#e2e8f0;padding:10px;border-radius:8px\">\npoints = 12<br>\n<span style=\"color:#f472b6\">if</span> points &gt; 10 :<br>\n&nbsp;&nbsp;&nbsp;&nbsp;print(\"Tu as gagné !\")<br>\n<span style=\"color:#f472b6\">else</span>:<br>\n&nbsp;&nbsp;&nbsp;&nbsp;print(\"Continue à jouer\")\n</p>\n<p>Les lignes décalées vers la droite (indentation) sont celles qui sont « dans » la condition, exactement comme les blocs dans la bouche du bloc Scratch. Ce programme écrit <b>« Tu as gagné ! »</b> parce que 12 &gt; 10 est vrai.</p>"
    },
    {
     "label": "🌲 La bifurcation dans la forêt",
     "html": "<p>Imagine que tu marches sur un sentier et que tu arrives à une <b>bifurcation</b> avec un panneau : <i>« Tu as la lampe torche ? OUI → sentier de la grotte. NON → sentier du lac. »</i></p>\n<p>Tu ne peux pas prendre les deux sentiers, et tu ne peux pas rester immobile : <b>tu dois en choisir un</b> selon la réponse. Un programme est une forêt pleine de bifurcations : l'ordinateur arrive à chaque bifurcation, lit le panneau (la condition) et prend un chemin.</p>\n<p>Et si le panneau dit seulement <i>« Tu as soif ? OUI → passe par la fontaine »</i>? Alors, si tu réponds NON, tu continues tout droit : c'est le cas du <b>SI… ALORS sans SINON</b>.</p>"
    },
    {
     "label": "🚦 Les règles des jeux",
     "html": "<p>Tous les jeux de société sont pleins de conditions, même ceux d'autres pays :</p>\n<ul>\n<li>🎲 <b>Jeu de l'oie</b> : SI tu arrives sur la case du puits ALORS reste immobile jusqu'à l'arrivée d'un autre joueur.</li>\n<li>🐍 <b>Serpents et échelles</b> (né en Inde, il s'appelait <i>Moksha Patam</i>) : SI tu finis sur une échelle ALORS monte, SI tu finis sur la tête d'un serpent ALORS descends.</li>\n<li>🃏 <b>UNO</b> : SI la carte a la même couleur OU le même numéro ALORS tu peux la jouer SINON tu pioches.</li>\n</ul>\n<p>Essaie : écris avec SI… ALORS… SINON les règles de ton jeu préféré !</p>"
    },
    {
     "label": "🎮 Associe condition et action",
     "html": "<p>Chaque machine a sa règle. Associe la condition (SI…) à la bonne action (ALORS…).</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "SI la nuit tombe",
        "allume les lampadaires"
       ],
       [
        "SI la température est sous 20 °C",
        "allume le chauffage"
       ],
       [
        "SI le capteur voit une personne",
        "ouvre la porte"
       ],
       [
        "SI la batterie est sous 20 %",
        "affiche « Batterie faible »"
       ],
       [
        "SI le robot heurte un obstacle",
        "tourne et repars"
       ],
       [
        "SI le code est faux",
        "ne déverrouille pas"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des conditions : touche un nœud",
   "nodes": [
    {
     "id": "algoritmo",
     "label": "Algorithme",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Une suite d'instructions précises pour résoudre un problème.",
     "why": "Le nom vient d'<b>al-Khwarizmi</b>, mathématicien persan qui vécut à Bagdad vers l'an 800 et dont les livres firent connaître en Europe les chiffres indo-arabes et les méthodes de calcul."
    },
    {
     "id": "condizione",
     "label": "Condition",
     "x": 50,
     "y": 30,
     "color": "#f59e0b",
     "html": "Une question dont la réponse est vrai ou faux.",
     "why": "Un ordinateur ne sait pas « penser » comme nous : il sait seulement vérifier si une chose est vraie ou fausse, des millions de fois par seconde. C'est pourquoi chaque décision doit être transformée en questions oui/non."
    },
    {
     "id": "booleani",
     "label": "Vrai / Faux (booléens)",
     "x": 18,
     "y": 30,
     "color": "#a855f7",
     "html": "Les deux seules valeurs possibles d'une condition : vrai (1) et faux (0).",
     "why": "<b>George Boole</b> les a étudiées en 1854. En 1937, <b>Claude Shannon</b> a montré que les interrupteurs des circuits électriques suivent les règles de Boole : c'est de là que sont nés les ordinateurs numériques."
    },
    {
     "id": "ifthen",
     "label": "SI… ALORS",
     "x": 30,
     "y": 58,
     "color": "#16a34a",
     "html": "if … then : l'action n'est faite que si la condition est vraie.",
     "why": "C'est l'idée de <b>sélection</b> : avec la <b>séquence</b> (instructions l'une après l'autre) et la <b>répétition</b> (boucles), c'est l'une des trois briques avec lesquelles, comme l'ont démontré Böhm et Jacopini en 1966, on peut construire n'importe quel programme."
    },
    {
     "id": "else",
     "label": "SINON",
     "x": 30,
     "y": 84,
     "color": "#ef4444",
     "html": "else : le chemin à suivre quand la condition est fausse.",
     "why": "Il sert à ne pas laisser le programme « sans réponse » : avec if… else, l'ordinateur fait toujours exactement l'une des deux choses."
    },
    {
     "id": "confronti",
     "label": "Comparaisons > < =",
     "x": 70,
     "y": 58,
     "color": "#0ea5e9",
     "html": "Conditions qui comparent des nombres ou des variables.",
     "why": "Ce sont les mêmes symboles qu'en mathématiques. Les symboles &gt; et &lt; ont été introduits par le mathématicien anglais Thomas Harriot (publié en 1631) ; le signe = a été inventé par Robert Recorde en 1557, « parce que rien n'est plus égal que deux lignes parallèles »."
    },
    {
     "id": "logici",
     "label": "ET · OU · NON",
     "x": 82,
     "y": 30,
     "color": "#db2777",
     "html": "Opérateurs logiques pour relier ou renverser les conditions.",
     "why": "Ils viennent de la logique des philosophes grecs (Aristote) et ont été transformés en calculs par Boole. Dans les circuits, on les appelle <i>portes logiques</i> AND, OR, NOT : il y en a des milliards dans un processeur."
    },
    {
     "id": "rombo",
     "label": "Organigramme",
     "x": 70,
     "y": 84,
     "color": "#64748b",
     "html": "Dessin du programme : la condition est un losange avec des sorties OUI et NON.",
     "why": "Les organigrammes sont utilisés en informatique depuis les années 1940 (Goldstine et von Neumann, 1947) pour concevoir les programmes avant de les écrire ; les symboles ont ensuite été normalisés. Ils servent à voir tous les chemins possibles."
    }
   ],
   "edges": [
    [
     "algoritmo",
     "condizione",
     "décide avec"
    ],
    [
     "condizione",
     "booleani",
     "vaut"
    ],
    [
     "condizione",
     "ifthen",
     "s'utilise dans"
    ],
    [
     "ifthen",
     "else",
     "+ chemin du NON"
    ],
    [
     "condizione",
     "confronti",
     "est souvent un"
    ],
    [
     "condizione",
     "logici",
     "se combine avec"
    ],
    [
     "ifthen",
     "rombo",
     "se dessine avec"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : suis le programme",
   "questions": [
    {
     "type": "mc",
     "q": "points = 7. SI points > 5 ALORS dire « Bien » SINON dire « Allez ! ». Que dit-il ?",
     "options": [
      "Bien",
      "Allez !",
      "Rien"
     ],
     "answer": 0,
     "explain": "7 > 5 est vrai, donc on suit le chemin du OUI : « Bien »."
    },
    {
     "type": "mc",
     "q": "SI c'est samedi OU dimanche ALORS pas d'école. Aujourd'hui, c'est dimanche. Y a-t-il école ?",
     "options": [
      "Oui",
      "Non"
     ],
     "answer": 1,
     "explain": "Avec OU, une seule condition vraie suffit : c'est dimanche, donc pas d'école."
    },
    {
     "type": "tf",
     "q": "(3 > 1) ET (2 > 5) est vrai.",
     "answer": false,
     "explain": "Avec ET, il faut que les deux soient vraies : 2 > 5 est faux, donc le tout est faux."
    },
    {
     "type": "mc",
     "q": "NON (vrai) est égal à…",
     "options": [
      "vrai",
      "faux"
     ],
     "answer": 1,
     "explain": "NON renverse la valeur."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Condition",
   "d": "Question dont la réponse est seulement vrai ou faux."
  },
  {
   "t": "Instruction conditionnelle (sélection)",
   "d": "Partie du programme qui choisit quoi faire selon une condition."
  },
  {
   "t": "if / then / else",
   "d": "Si / alors / sinon, dans les langages de programmation."
  },
  {
   "t": "Variable",
   "d": "Une « boîte » avec un nom qui contient une valeur pouvant changer (points, vies…)."
  },
  {
   "t": "Opérateurs de comparaison",
   "d": "Symboles > (supérieur), < (inférieur), = (égal)."
  },
  {
   "t": "Opérateurs logiques",
   "d": "ET (and), OU (or), NON (not) : ils relient ou renversent des conditions."
  },
  {
   "t": "Booléen",
   "d": "Valeur qui ne peut être que vraie ou fausse, d'après le nom de George Boole."
  },
  {
   "t": "Organigramme",
   "d": "Dessin d'un algorithme : les décisions sont des losanges avec des sorties OUI/NON."
  },
  {
   "t": "Capteur",
   "d": "Dispositif qui mesure quelque chose (lumière, température, distance) et fournit des données aux conditions."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Une condition peut avoir pour réponse…",
    "options": [
     "n'importe quel nombre",
     "seulement vrai ou faux",
     "seulement des mots"
    ],
    "answer": 1,
    "explain": "Une condition est vraie ou fausse."
   },
   {
    "type": "mc",
    "q": "Comment dit-on « si » en anglais dans les programmes ?",
    "options": [
     "then",
     "if",
     "else"
    ],
    "answer": 1,
    "explain": "if = si."
   },
   {
    "type": "mc",
    "q": "vies = 0. SI vies = 0 ALORS « Game over » SINON « Continue ». Que s'affiche-t-il ?",
    "options": [
     "Game over",
     "Continue"
    ],
    "answer": 0,
    "explain": "vies = 0 est vrai → Game over."
   },
   {
    "type": "mc",
    "q": "âge = 8. SI âge > 10 ALORS « Tu peux monter » SINON « Tu es trop petit ». Que s'affiche-t-il ?",
    "options": [
     "Tu peux monter",
     "Tu es trop petit"
    ],
    "answer": 1,
    "explain": "8 > 10 est faux → on suit le SINON."
   },
   {
    "type": "tf",
    "q": "Avec l'opérateur OU, il suffit qu'une seule condition soit vraie.",
    "answer": true,
    "explain": "OU est vrai si au moins une condition est vraie."
   },
   {
    "type": "tf",
    "q": "(5 = 5) ET (1 < 4) est vrai.",
    "answer": true,
    "explain": "Les deux sont vraies, donc ET donne vrai."
   },
   {
    "type": "tf",
    "q": "Dans les organigrammes, la décision se dessine dans un cercle.",
    "answer": false,
    "explain": "Elle se dessine dans un losange."
   },
   {
    "type": "text",
    "q": "Comment s'appelle, dans les programmes, le mot qui signifie « sinon » ?",
    "answer": [
     "else"
    ],
    "explain": "else = sinon."
   },
   {
    "type": "num",
    "q": "points = 4. SI points < 5 ALORS ajoute 10 aux points. Combien y a-t-il de points à la fin ?",
    "answer": 14,
    "explain": "4 < 5 est vrai, donc 4 + 10 = 14."
   },
   {
    "type": "num",
    "q": "x = 9. SI x > 5 ET x < 8 ALORS x devient 0 SINON x devient 1. Combien vaut x à la fin ?",
    "answer": 1,
    "explain": "9 > 5 est vrai mais 9 < 8 est faux : avec ET, le résultat est faux, donc x devient 1."
   },
   {
    "type": "mc",
    "q": "Quel objet utilise la règle « SI la température est basse ALORS allume » ?",
    "options": [
     "le thermostat",
     "le livre",
     "le crayon"
    ],
    "answer": 0,
    "explain": "Le thermostat mesure la température et allume ou éteint le chauffage."
   },
   {
    "type": "order",
    "q": "Remets dans l'ordre le fonctionnement d'un programme avec une condition.",
    "items": [
     "arrive à la condition",
     "vérifie si elle est vraie ou fausse",
     "choisit le chemin OUI ou NON",
     "exécute les actions de ce chemin",
     "continue avec la suite du programme"
    ],
    "explain": "L'ordinateur vérifie, choisit un chemin, exécute, puis continue."
   }
  ]
 }
});
