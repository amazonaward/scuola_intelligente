TOPIC('fr', {
 "id": "p5-mat-probabilita",
 "title": "Probabilités et statistiques",
 "intro": "Va-t-il pleuvoir demain ? Quel parfum de glace préfère ta classe ? Qui gagnera à pile ou face ? La <b>statistique</b> recueille et lit les données, la <b>probabilité</b> mesure à quel point il est facile qu'une chose arrive. Apprenons la <b>moyenne, le mode et la médiane</b> et à reconnaître les événements <b>certains, possibles et impossibles</b>.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Qu'est-ce que la statistique ?",
   "html": "<p>La <b>statistique</b> est la partie des mathématiques qui <b>recueille</b>, <b>organise</b> et <b>interprète</b> des données pour comprendre un phénomène.</p>\n<p>Une enquête statistique se fait en 4 étapes :</p>\n<ol>\n<li><b>La question</b> : que veux-je savoir ? (par ex. « Quel est le sport préféré de la classe ? »)</li>\n<li><b>La collecte des données</b> : avec un questionnaire, une interview, des mesures.</li>\n<li><b>L'organisation</b> : on compte les données dans un <b>tableau des effectifs</b> (combien de fois apparaît chaque réponse).</li>\n<li><b>La représentation et la lecture</b> : on dessine un <b>graphique</b> (histogramme, pictogramme, diagramme circulaire…) et on calcule les <b>indicateurs</b> : mode, moyenne, médiane.</li>\n</ol>\n<p>Les choses que nous étudions (sport, âge, taille…) s'appellent des <b>caractères</b> ; les réponses possibles s'appellent des <b>modalités</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Le sport préféré de la classe de CM2 B (histogramme)",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<line x1=\"70\" y1=\"270\" x2=\"570\" y2=\"270\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<line x1=\"70\" y1=\"270\" x2=\"70\" y2=\"30\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<g stroke=\"#cbd5e1\" stroke-width=\"1\">\n<line x1=\"70\" y1=\"230\" x2=\"570\" y2=\"230\"/><line x1=\"70\" y1=\"190\" x2=\"570\" y2=\"190\"/><line x1=\"70\" y1=\"150\" x2=\"570\" y2=\"150\"/><line x1=\"70\" y1=\"110\" x2=\"570\" y2=\"110\"/><line x1=\"70\" y1=\"70\" x2=\"570\" y2=\"70\"/>\n</g>\n<g font-size=\"16\" fill=\"#1f2937\" text-anchor=\"end\">\n<text x=\"60\" y=\"275\">0</text><text x=\"60\" y=\"235\">2</text><text x=\"60\" y=\"195\">4</text><text x=\"60\" y=\"155\">6</text><text x=\"60\" y=\"115\">8</text><text x=\"60\" y=\"75\">10</text>\n</g>\n<rect x=\"100\" y=\"110\" width=\"70\" height=\"160\" fill=\"#22c55e\"/>\n<rect x=\"200\" y=\"190\" width=\"70\" height=\"80\" fill=\"#3b82f6\"/>\n<rect x=\"300\" y=\"210\" width=\"70\" height=\"60\" fill=\"#f97316\"/>\n<rect x=\"400\" y=\"230\" width=\"70\" height=\"40\" fill=\"#a855f7\"/>\n<rect x=\"500\" y=\"250\" width=\"50\" height=\"20\" fill=\"#ef4444\"/>\n<g font-size=\"17\" text-anchor=\"middle\" fill=\"#1f2937\">\n<text x=\"135\" y=\"295\">⚽ Football</text><text x=\"235\" y=\"295\">🏊 Natation</text><text x=\"335\" y=\"295\">🏐 Volley</text><text x=\"435\" y=\"295\">🤸 Danse</text><text x=\"525\" y=\"295\">🏀 Basket</text>\n</g>\n<g font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">\n<text x=\"135\" y=\"102\">8</text><text x=\"235\" y=\"182\">4</text><text x=\"335\" y=\"202\">3</text><text x=\"435\" y=\"222\">2</text><text x=\"525\" y=\"242\">1</text>\n</g>\n<text x=\"330\" y=\"40\" font-size=\"20\" fill=\"#166534\" font-weight=\"bold\" text-anchor=\"middle\">Mode = Football (la colonne la plus haute)</text>\n</svg>",
   "caption": "18 élèves ont répondu. L'effectif est le nombre de fois où une réponse apparaît."
  },
  {
   "type": "text",
   "title": "Mode, moyenne et médiane",
   "html": "<p>Ce sont trois façons différentes de décrire un groupe de données avec <b>un seul nombre</b>.</p>\n<p>Exemple : les notes de Marta en mathématiques : <b>6, 8, 7, 8, 9, 10, 8</b></p>\n<ul>\n<li><b>Mode</b> : la donnée qui apparaît <b>le plus souvent</b>. Ici le 8 apparaît 3 fois → mode = <b>8</b>. (Il peut aussi y avoir deux modes, ou aucun.)</li>\n<li><b>Moyenne arithmétique</b> : on <b>additionne</b> toutes les données et on <b>divise</b> par leur nombre.<br>6 + 8 + 7 + 8 + 9 + 10 + 8 = 56 → 56 : 7 = <b>8</b>.</li>\n<li><b>Médiane</b> : on range les données <b>dans l'ordre</b> et on prend celle qui est <b>au milieu</b>.<br>6, 7, 8, <b>8</b>, 8, 9, 10 → médiane = <b>8</b>.<br>Si le nombre de données est pair, la médiane est la moyenne des deux données centrales.</li>\n</ul>\n<p>Le <b>mode</b> peut aussi s'utiliser avec des données qui ne sont pas des nombres (par ex. couleurs, sports). La moyenne et la médiane, seulement avec des nombres.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : les températures de la semaine",
   "html": "<p>La classe a mesuré la température à midi pendant 5 jours : <b>12 °C, 15 °C, 14 °C, 11 °C, 18 °C</b>.</p>\n<ul>\n<li>Somme : 12 + 15 + 14 + 11 + 18 = 70</li>\n<li>Moyenne : 70 : 5 = <b>14 °C</b></li>\n<li>Dans l'ordre : 11, 12, <b>14</b>, 15, 18 → médiane = <b>14 °C</b></li>\n<li>Aucune valeur ne se répète → <b>il n'y a pas de mode</b>.</li>\n</ul>\n<p>L'<b>étendue</b> est la différence entre la valeur la plus haute et la plus basse : 18 − 11 = <b>7 °C</b>. Elle nous dit à quel point les données sont « dispersées ».</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : quand la moyenne trompe",
   "html": "<p>Dans une rue, il y a 5 magasins. Chaque jour ils encaissent : <b>100 €, 120 €, 90 €, 110 €</b> et le supermarché <b>1580 €</b>.</p>\n<ul>\n<li>Moyenne : (100 + 120 + 90 + 110 + 1580) : 5 = 2000 : 5 = <b>400 €</b></li>\n<li>Médiane : 90, 100, <b>110</b>, 120, 1580 → <b>110 €</b></li>\n</ul>\n<p>Quel nombre décrit le mieux un magasin « typique » de la rue ? La <b>médiane</b> ! Une seule valeur très grande « tire vers le haut » la moyenne. C'est pourquoi les statisticiens regardent toujours plusieurs indicateurs ensemble.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : mode, moyenne, médiane",
   "questions": [
    {
     "type": "num",
     "q": "Quelle est la moyenne de 4, 6, 8 ?",
     "answer": 6,
     "explain": "4 + 6 + 8 = 18; 18 : 3 = 6."
    },
    {
     "type": "num",
     "q": "Quel est le mode de 3, 5, 5, 7, 5, 2 ?",
     "answer": 5,
     "explain": "Le 5 apparaît 3 fois, plus que tous les autres."
    },
    {
     "type": "num",
     "q": "Quelle est la médiane de 9, 2, 7, 4, 5 ?",
     "answer": 5,
     "explain": "Dans l'ordre : 2, 4, 5, 7, 9. Celui du milieu est 5."
    },
    {
     "type": "tf",
     "q": "Le mode peut aussi se calculer pour les couleurs préférées.",
     "answer": true,
     "explain": "Le mode est la réponse la plus fréquente : il vaut aussi pour des données non numériques."
    }
   ]
  },
  {
   "type": "text",
   "title": "Certain, possible, impossible",
   "html": "<p>Un <b>événement</b> est quelque chose qui peut arriver (ou non). En lançant un dé normal à 6 faces :</p>\n<ul>\n<li><b>Événement certain</b> : il arrive <b>toujours</b>. « On obtient un nombre de 1 à 6. » ✅</li>\n<li><b>Événement impossible</b> : il <b>n'arrive jamais</b>. « On obtient le 7. » ❌</li>\n<li><b>Événement possible</b> (ou probable) : il <b>peut arriver ou non</b>. « On obtient le 4. » 🤔</li>\n</ul>\n<p>Parmi les événements possibles, certains sont <b>plus probables</b> que d'autres : « on obtient un nombre pair » (3 cas sur 6) est plus probable que « on obtient le 6 » (1 cas sur 6).</p>"
  },
  {
   "type": "widget",
   "title": "Certain, possible ou impossible ?",
   "widget": "classify",
   "options": {
    "groups": [
     "✅ Certain",
     "🤔 Possible",
     "❌ Impossible"
    ],
    "items": [
     [
      "🎲 En lançant un dé, on obtient un nombre inférieur à 7",
      0
     ],
     [
      "🎲 En lançant un dé, on obtient le 3",
      1
     ],
     [
      "🎲 En lançant un dé, on obtient le 0",
      2
     ],
     [
      "🪙 En lançant une pièce, on obtient face",
      1
     ],
     [
      "📅 Après lundi vient mardi",
      0
     ],
     [
      "🐘 Un éléphant entre dans ta trousse",
      2
     ],
     [
      "🌧️ Demain il pleut",
      1
     ],
     [
      "🔴 Je pioche une boule rouge dans un sachet de boules uniquement bleues",
      2
     ],
     [
      "🔵 Je pioche une boule bleue dans un sachet de boules uniquement bleues",
      0
     ]
    ]
   },
   "caption": "Mets chaque événement dans le bon groupe."
  },
  {
   "type": "text",
   "title": "Mesurer la probabilité avec une fraction",
   "html": "<p>La <b>probabilité</b> d'un événement peut s'écrire avec une <b>fraction</b> :</p>\n<p style=\"text-align:center;font-size:1.2em\"><b>probabilité = cas favorables / cas possibles</b></p>\n<ul>\n<li><b>Cas possibles</b> : tous les résultats qui peuvent sortir (tous aussi probables).</li>\n<li><b>Cas favorables</b> : les résultats qui conviennent à notre événement.</li>\n</ul>\n<p>Exemples avec un dé :</p>\n<ul>\n<li>« On obtient le 5 » : 1 cas favorable sur 6 → <b>1/6</b></li>\n<li>« On obtient un nombre pair » (2, 4, 6) : 3 sur 6 → <b>3/6 = 1/2</b>, c'est-à-dire 50 %</li>\n<li>Événement <b>certain</b> : 6/6 = <b>1</b> (100 %)</li>\n<li>Événement <b>impossible</b> : 0/6 = <b>0</b> (0 %)</li>\n</ul>\n<p>Donc la probabilité est toujours un nombre <b>entre 0 et 1</b> : plus il est proche de 1, plus l'événement est probable.</p>"
  },
  {
   "type": "svg",
   "title": "L'échelle des probabilités",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><linearGradient id=\"pg\" x1=\"0\" x2=\"1\" y1=\"0\" y2=\"0\"><stop offset=\"0\" stop-color=\"#ef4444\"/><stop offset=\"0.5\" stop-color=\"#facc15\"/><stop offset=\"1\" stop-color=\"#22c55e\"/></linearGradient></defs>\n<rect width=\"600\" height=\"260\" fill=\"#ffffff\"/>\n<rect x=\"50\" y=\"110\" width=\"500\" height=\"30\" rx=\"15\" fill=\"url(#pg)\"/>\n<g font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1f2937\">\n<text x=\"60\" y=\"170\">0</text><text x=\"175\" y=\"170\">1/6</text><text x=\"300\" y=\"170\">1/2</text><text x=\"540\" y=\"170\">1</text>\n</g>\n<g stroke=\"#1f2937\" stroke-width=\"3\">\n<line x1=\"60\" y1=\"100\" x2=\"60\" y2=\"150\"/><line x1=\"133\" y1=\"100\" x2=\"133\" y2=\"150\"/><line x1=\"300\" y1=\"100\" x2=\"300\" y2=\"150\"/><line x1=\"540\" y1=\"100\" x2=\"540\" y2=\"150\"/>\n</g>\n<g font-size=\"17\" text-anchor=\"middle\">\n<text x=\"60\" y=\"60\" fill=\"#b91c1c\">impossible</text><text x=\"60\" y=\"85\" fill=\"#b91c1c\">on obtient 7</text>\n<text x=\"133\" y=\"210\" fill=\"#92400e\">on obtient 5</text>\n<text x=\"300\" y=\"60\" fill=\"#854d0e\">pile ou face</text><text x=\"300\" y=\"85\" fill=\"#854d0e\">on obtient face</text>\n<text x=\"300\" y=\"210\" fill=\"#854d0e\">nombre pair</text>\n<text x=\"530\" y=\"60\" fill=\"#166534\">certain</text><text x=\"530\" y=\"85\" fill=\"#166534\">de 1 à 6</text>\n</g>\n<text x=\"300\" y=\"245\" font-size=\"16\" fill=\"#475569\" text-anchor=\"middle\">plus à droite = plus probable</text>\n</svg>",
   "caption": "Chaque événement a sa place entre 0 (impossible) et 1 (certain)."
  },
  {
   "type": "widget",
   "title": "La probabilité comme un gâteau",
   "widget": "fractionPie",
   "options": {
    "n": 1,
    "d": 6
   },
   "caption": "Le dénominateur est le nombre de cas possibles, le numérateur celui des cas favorables. 1/6 = probabilité d'obtenir un numéro précis du dé. Essaie 3/6 : c'est la probabilité d'obtenir un nombre pair."
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le jeu qui a fait naître les probabilités",
   "html": "<p>La probabilité comme science est née en <b>1654</b> d'une question sur le jeu de dés. Un joueur français, le chevalier de Méré, demanda au mathématicien <b>Blaise Pascal</b> comment partager équitablement la mise d'une partie interrompue. Pascal en discuta par lettres avec <b>Pierre de Fermat</b> et ensemble ils inventèrent le calcul des probabilités.</p>\n<p>Un Italien aussi s'en était approché un siècle plus tôt : le médecin et mathématicien <b>Gerolamo Cardano</b>, grand passionné de dés !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? La pièce n'a pas de mémoire",
   "html": "<p>Tu as lancé une pièce 5 fois et elle est toujours tombée sur face. Au sixième lancer, est-il plus probable d'obtenir pile ? <b>Non !</b> La pièce ne se souvient pas des lancers précédents : la probabilité de pile est toujours de <b>1/2</b>.</p>\n<p>Croire le contraire s'appelle « l'erreur du joueur ». En 1913, dans un casino de Monte-Carlo, à la roulette la noire sortit <b>26 fois de suite</b>, et beaucoup de joueurs perdirent énormément d'argent en misant sur la rouge, convaincus que « maintenant elle devait sortir ».</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li><b>Mode</b> = la donnée la plus fréquente.</li>\n<li><b>Moyenne</b> = somme des données : nombre de données.</li>\n<li><b>Médiane</b> = la donnée centrale, après les avoir rangées dans l'ordre.</li>\n<li>Événement <b>certain</b> (probabilité 1), <b>possible</b> (entre 0 et 1), <b>impossible</b> (0).</li>\n<li><b>Probabilité</b> = cas favorables / cas possibles.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre statistiques et probabilités",
   "intro": "La moyenne et la probabilité se comprennent mieux en faisant : en égalisant des tours, en piochant des boules, en comptant des lancers. Choisis ta façon !",
   "tabs": [
    {
     "label": "🧱 La moyenne qui « égalise »",
     "html": "<p>Imagine les données comme des <b>tours de cubes</b> : 2, 5, 3, 6.</p>\n<p>La <b>moyenne</b> est la hauteur qu'auraient toutes les tours si tu déplaçais des cubes des tours hautes vers les tours basses jusqu'à les rendre <b>toutes égales</b>.</p>\n<p>En tout il y a 2 + 5 + 3 + 6 = 16 cubes. Partagés entre 4 tours : 16 : 4 = <b>4 cubes</b> chacune. La moyenne est 4 !</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0f9ff\"/>\n<g fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"2\">\n<rect x=\"30\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"30\" y=\"160\" width=\"30\" height=\"30\"/>\n<rect x=\"70\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"160\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"130\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"100\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"70\" width=\"30\" height=\"30\"/>\n<rect x=\"110\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"110\" y=\"160\" width=\"30\" height=\"30\"/><rect x=\"110\" y=\"130\" width=\"30\" height=\"30\"/>\n<rect x=\"150\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"150\" y=\"160\" width=\"30\" height=\"30\"/><rect x=\"150\" y=\"130\" width=\"30\" height=\"30\"/><rect x=\"150\" y=\"100\" width=\"30\" height=\"30\"/><rect x=\"150\" y=\"70\" width=\"30\" height=\"30\"/><rect x=\"150\" y=\"40\" width=\"30\" height=\"30\"/>\n</g>\n<text x=\"105\" y=\"245\" font-size=\"18\" text-anchor=\"middle\">2, 5, 3, 6</text>\n<text x=\"290\" y=\"140\" font-size=\"44\" fill=\"#1e3a8a\" text-anchor=\"middle\">→</text>\n<g fill=\"#34d399\" stroke=\"#065f46\" stroke-width=\"2\">\n<rect x=\"380\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"380\" y=\"160\" width=\"30\" height=\"30\"/><rect x=\"380\" y=\"130\" width=\"30\" height=\"30\"/><rect x=\"380\" y=\"100\" width=\"30\" height=\"30\"/>\n<rect x=\"420\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"160\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"130\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"100\" width=\"30\" height=\"30\"/>\n<rect x=\"460\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"460\" y=\"160\" width=\"30\" height=\"30\"/><rect x=\"460\" y=\"130\" width=\"30\" height=\"30\"/><rect x=\"460\" y=\"100\" width=\"30\" height=\"30\"/>\n<rect x=\"500\" y=\"190\" width=\"30\" height=\"30\"/><rect x=\"500\" y=\"160\" width=\"30\" height=\"30\"/><rect x=\"500\" y=\"130\" width=\"30\" height=\"30\"/><rect x=\"500\" y=\"100\" width=\"30\" height=\"30\"/>\n</g>\n<line x1=\"370\" y1=\"100\" x2=\"545\" y2=\"100\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/>\n<text x=\"455\" y=\"245\" font-size=\"18\" text-anchor=\"middle\">moyenne = 4</text>\n</svg>"
    },
    {
     "label": "🎨 Le sachet de boules",
     "html": "<p>Dans un sachet il y a <b>3 boules rouges</b>, <b>2 bleues</b> et <b>5 jaunes</b> (10 en tout). Tu pioches sans regarder :</p>\n<ul>\n<li>probabilité de la <b>jaune</b> : 5/10 = <b>1/2</b> (la plus probable) ;</li>\n<li>probabilité de la <b>rouge</b> : <b>3/10</b> ;</li>\n<li>probabilité de la <b>bleue</b> : 2/10 = <b>1/5</b> ;</li>\n<li>probabilité de la <b>verte</b> : 0/10 = <b>0</b> (impossible).</li>\n</ul>\n<p>Additionne toutes les probabilités : 5/10 + 3/10 + 2/10 = 10/10 = <b>1</b>. Il faut bien que quelque chose sorte !</p>",
     "widget": "counter",
     "options": {
      "emoji": "🔴",
      "max": 20
     }
    },
    {
     "label": "🎲 Essaie de lancer !",
     "html": "<p>La probabilité dit ce qui se passe <b>« en moyenne » après beaucoup d'essais</b>. Fais l'expérience :</p>\n<ol>\n<li>lance une pièce <b>10 fois</b> et compte les « face » : peut-être 7 face et 3 pile ;</li>\n<li>maintenant lance-la <b>100 fois</b> (fais-toi aider par toute la classe !) : les « face » seront beaucoup plus proches de <b>50</b>.</li>\n</ol>\n<p>C'est ce qu'on appelle la <b>loi des grands nombres</b> : plus tu fais d'essais, plus la fréquence se rapproche de la probabilité. Le mathématicien Karl Pearson lança une pièce <b>24 000 fois</b> et obtint 12 012 « face » : presque exactement la moitié !</p>"
    },
    {
     "label": "🍕 Les diagrammes circulaires",
     "html": "<p>Une autre représentation est le <b>diagramme circulaire</b> (« camembert ») : le cercle est le total et chaque part est aussi grande que sa portion.</p>\n<p>Sur 18 élèves, 9 préfèrent le football : c'est <b>la moitié du disque</b>. 6 la natation : un tiers. 3 la danse : un sixième.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#fefce8\"/>\n<path d=\"M160 130 L160 30 A100 100 0 0 1 160 230 Z\" fill=\"#22c55e\" stroke=\"#ffffff\" stroke-width=\"3\"/>\n<path d=\"M160 130 L160 230 A100 100 0 0 1 73.4 80 Z\" fill=\"#3b82f6\" stroke=\"#ffffff\" stroke-width=\"3\"/>\n<path d=\"M160 130 L73.4 80 A100 100 0 0 1 160 30 Z\" fill=\"#a855f7\" stroke=\"#ffffff\" stroke-width=\"3\"/>\n<rect x=\"320\" y=\"60\" width=\"26\" height=\"26\" fill=\"#22c55e\"/><text x=\"356\" y=\"80\" font-size=\"20\">⚽ Football : 9 (1/2)</text>\n<rect x=\"320\" y=\"115\" width=\"26\" height=\"26\" fill=\"#3b82f6\"/><text x=\"356\" y=\"135\" font-size=\"20\">🏊 Natation : 6 (1/3)</text>\n<rect x=\"320\" y=\"170\" width=\"26\" height=\"26\" fill=\"#a855f7\"/><text x=\"356\" y=\"190\" font-size=\"20\">🤸 Danse : 3 (1/6)</text>\n</svg>"
    },
    {
     "label": "🌍 La statistique dans le monde",
     "html": "<ul>\n<li>🇮🇹 L'<b>ISTAT</b> (Institut national de statistique italien) compte chaque année les habitants de l'Italie : environ <b>59 millions</b>.</li>\n<li>🏛️ Les anciens <b>Romains</b> faisaient le <b>census</b> (recensement) tous les 5 ans pour compter les citoyens et leurs richesses : le mot vient de là !</li>\n<li>🇬🇧 L'infirmière anglaise <b>Florence Nightingale</b>, en 1858, utilisa des diagrammes circulaires colorés pour convaincre le gouvernement que les soldats mouraient plus de maladies que de blessures. Grâce à ses données, les hôpitaux devinrent plus propres et des milliers de vies furent sauvées.</li>\n<li>🌦️ Quand la météo dit « <b>70 % de probabilité de pluie</b> », cela signifie que dans 7 jours sur 10 avec un temps comme celui-là, il pleut.</li>\n</ul>"
    },
    {
     "label": "🇫🇷 Pascal et Fermat : la partie interrompue (France)",
     "html": "<p>En <b>1654</b>, en <b>France</b>, deux mathématiciens, <b>Blaise Pascal</b> et <b>Pierre de Fermat</b>, s'écrivirent des lettres pour résoudre un problème : comment partager équitablement l'argent d'un jeu <b>interrompu</b> avant la fin ? De ces lettres est né le calcul des probabilités.</p><p><b>Le problème</b> : Anna (A) et Bruno (B) jouent. Chaque manche peut être gagnée par l'un ou par l'autre avec la même probabilité. Celui qui arrive le premier à <b>3 points</b> gagne la partie et empoche le prix de <b>24 vignettes</b>. Sur le score de <b>2 à 1</b> pour Anna, ils doivent s'arrêter. Comment partagent-ils les vignettes ?</p><p>La méthode de Fermat : <b>imagine de jouer quand même les manches qui manquent</b> (au maximum 2) et dessine l'<b>arbre</b> des possibilités :</p><ul><li>AA → Anna gagne ; AB → Anna gagne (elle a déjà gagné à la première !) ; BA → Anna gagne ; BB → Bruno gagne.</li></ul><p>Il y a 4 cas, tous aussi probables : Anna gagne dans <b>3 cas sur 4</b>, Bruno dans <b>1 cas sur 4</b>. Il est donc juste de donner les <b>3/4</b> des vignettes à Anna (<b>18</b>) et <b>1/4</b> à Bruno (<b>6</b>). Les partager en deux moitiés serait injuste pour Anna ; les donner toutes à Anna serait injuste pour Bruno, qui pouvait encore gagner.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"80\" cy=\"150\" r=\"24\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"80\" y=\"156\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2–1</text><line x1=\"104\" y1=\"150\" x2=\"218\" y2=\"80\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"104\" y1=\"150\" x2=\"218\" y2=\"220\" stroke=\"#334155\" stroke-width=\"2\"/><circle cx=\"240\" cy=\"80\" r=\"22\" fill=\"#bbf7d0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"240\" y=\"86\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><circle cx=\"240\" cy=\"220\" r=\"22\" fill=\"#fecaca\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"240\" y=\"226\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">B</text><line x1=\"262\" y1=\"80\" x2=\"378\" y2=\"50\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"262\" y1=\"80\" x2=\"378\" y2=\"110\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"262\" y1=\"220\" x2=\"378\" y2=\"190\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"262\" y1=\"220\" x2=\"378\" y2=\"250\" stroke=\"#334155\" stroke-width=\"2\"/><circle cx=\"400\" cy=\"50\" r=\"22\" fill=\"#bbf7d0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"56\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><circle cx=\"400\" cy=\"110\" r=\"22\" fill=\"#fecaca\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"116\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">B</text><circle cx=\"400\" cy=\"190\" r=\"22\" fill=\"#bbf7d0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"196\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><circle cx=\"400\" cy=\"250\" r=\"22\" fill=\"#fecaca\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"256\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">B</text><text x=\"436\" y=\"56\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">AA → A gagne</text><text x=\"436\" y=\"116\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">AB → A gagne</text><text x=\"436\" y=\"196\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">BA → A gagne</text><text x=\"436\" y=\"256\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">BB → B gagne</text><text x=\"160\" y=\"290\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\">1re manche</text><text x=\"320\" y=\"290\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\">2e manche</text><text x=\"510\" y=\"290\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A: 3/4  B: 1/4</text></svg>"
    },
    {
     "label": "🇬🇷 Les osselets des Grecs : des faces inégales",
     "html": "<p>Avant les dés à 6 faces, les anciens <b>Grecs</b> et les Romains jouaient avec les <b>osselets</b> (« astragales ») : de petits os de patte de mouton ou de chèvre. Un osselet peut tomber sur <b>4 côtés</b>, auxquels on donnait les valeurs <b>1, 3, 4 et 6</b>. Les Romains appelaient « coup de Vénus » le lancer de 4 osselets donnant 4 valeurs toutes différentes.</p><p>Mais attention : les 4 côtés <b>ne sont pas égaux</b> ! Deux côtés sont larges (3 et 4) et deux sont étroits (1 et 6). L'osselet tombe beaucoup plus souvent sur un côté large : environ <b>4 fois sur 10</b> chacun, contre environ <b>1 fois sur 10</b> pour chaque côté étroit.</p><p>Donc pour l'osselet on <b>ne</b> peut <b>pas</b> dire « probabilité du 6 = 1/4 », parce que la règle <b>cas favorables : cas possibles</b> ne vaut que si tous les cas sont <b>également probables</b>, comme avec un dé bien fait. Quand les cas ne sont pas égaux, on estime la probabilité avec des <b>expériences</b> : on lance beaucoup de fois et on calcule la <b>fréquence</b>.</p><p>🎯 <b>Expérience</b> : lance 50 fois un bouchon de bouteille. Combien de fois tombe-t-il l'ouverture vers le haut ? Calcule la fréquence (par exemple 18/50). Est-elle proche de 1/2 ? Regroupe les résultats de toute la classe : avec plus de lancers, l'estimation devient plus fiable.</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des statistiques et probabilités : touche un nœud",
   "nodes": [
    {
     "id": "dati",
     "label": "Données",
     "x": 30,
     "y": 6,
     "color": "#2563eb",
     "html": "Les informations recueillies : nombres, réponses, mesures.",
     "why": "Sans données, pas de statistique. Le mot <i>statistique</i> vient de « État » : elle est née aux XVIIe-XVIIIe siècles pour compter les habitants, les naissances, les morts et les impôts des États."
    },
    {
     "id": "frequenza",
     "label": "Effectifs et tableaux",
     "x": 15,
     "y": 30,
     "color": "#0ea5e9",
     "html": "Combien de fois apparaît chaque réponse.",
     "why": "Mettre les données en tableau les rend lisibles : une liste de 100 réponses embrouille, un tableau de 5 lignes non. En 1662, l'Anglais <b>John Graunt</b> étudia ainsi les listes des morts de Londres, inventant la statistique moderne."
    },
    {
     "id": "grafici",
     "label": "Graphiques",
     "x": 45,
     "y": 30,
     "color": "#f97316",
     "html": "Histogrammes, pictogrammes, diagrammes circulaires (camemberts).",
     "why": "Les yeux comprennent les hauteurs et les aires plus vite que les nombres. L'Écossais <b>William Playfair</b> inventa le diagramme en barres (1786) et le diagramme circulaire (1801)."
    },
    {
     "id": "indici",
     "label": "Mode, moyenne, médiane",
     "x": 30,
     "y": 55,
     "color": "#16a34a",
     "html": "Des nombres qui résument un groupe de données.",
     "why": "La moyenne est la hauteur qu'auraient les données « égalisées » (en partageant le total en parts égales) ; la médiane partage les données en deux ; le mode est le plus voté. Chacun raconte quelque chose de différent, c'est pourquoi on en utilise plusieurs."
    },
    {
     "id": "evento",
     "label": "Événement",
     "x": 72,
     "y": 6,
     "color": "#a855f7",
     "html": "Un fait qui peut arriver ou non.",
     "why": "Dans la vie il y a des choses sûres et des choses incertaines. Pour prendre des décisions (prendre le parapluie ? jouer ?), il vaut mieux mesurer l'incertitude."
    },
    {
     "id": "tipi",
     "label": "Certain, possible, impossible",
     "x": 85,
     "y": 30,
     "color": "#ec4899",
     "html": "Les trois types d'événement.",
     "why": "Si tous les cas possibles sont favorables, l'événement est certain ; si aucun ne l'est, il est impossible ; sinon il est possible."
    },
    {
     "id": "prob",
     "label": "Probabilité",
     "x": 72,
     "y": 55,
     "color": "#ef4444",
     "html": "Cas favorables / cas possibles : un nombre de 0 à 1.",
     "why": "La définition « classique » fut écrite par le Français <b>Pierre-Simon Laplace</b> (1812), après les travaux de <b>Pascal et Fermat</b> (1654). Elle fonctionne quand tous les cas sont également probables, comme les faces d'un dé non truqué."
    },
    {
     "id": "frazioni",
     "label": "Fractions et pourcentages",
     "x": 72,
     "y": 82,
     "color": "#14b8a6",
     "html": "La probabilité s'écrit comme une fraction (1/2) ou un pourcentage (50 %).",
     "why": "Une probabilité est une « partie » des cas possibles, exactement comme une fraction est une partie du tout."
    },
    {
     "id": "grandi",
     "label": "Loi des grands nombres",
     "x": 30,
     "y": 85,
     "color": "#64748b",
     "html": "En répétant beaucoup de fois une expérience, la fréquence se rapproche de la probabilité.",
     "why": "Elle fut démontrée par le Suisse <b>Jakob Bernoulli</b> en 1713. C'est le pont entre la statistique (les données observées) et la probabilité (la prévision)."
    }
   ],
   "edges": [
    [
     "dati",
     "frequenza",
     "s'organisent en"
    ],
    [
     "frequenza",
     "grafici",
     "se dessinent en"
    ],
    [
     "frequenza",
     "indici",
     "se résument avec"
    ],
    [
     "evento",
     "tipi",
     "peut être"
    ],
    [
     "evento",
     "prob",
     "se mesure avec la"
    ],
    [
     "prob",
     "frazioni",
     "s'écrit avec"
    ],
    [
     "indici",
     "grandi",
     "fréquences observées"
    ],
    [
     "prob",
     "grandi",
     "prévision"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : la probabilité",
   "questions": [
    {
     "type": "mc",
     "q": "En lançant un dé, quelle est la probabilité d'obtenir le 2 ?",
     "options": [
      "1/2",
      "1/6",
      "2/6"
     ],
     "answer": 1,
     "explain": "1 cas favorable sur 6 possibles."
    },
    {
     "type": "mc",
     "q": "« Je pioche une carte de cœur dans un paquet fait uniquement de cœurs » est un événement…",
     "options": [
      "certain",
      "possible",
      "impossible"
     ],
     "answer": 0,
     "explain": "Toutes les cartes sont des cœurs : cela arrive toujours."
    },
    {
     "type": "tf",
     "q": "Une probabilité peut être 3/2.",
     "answer": false,
     "explain": "Les cas favorables ne peuvent pas être plus nombreux que les cas possibles : la probabilité est comprise entre 0 et 1."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Statistique",
   "d": "Science qui recueille, organise et interprète les données."
  },
  {
   "t": "Effectif",
   "d": "Nombre de fois où une donnée apparaît."
  },
  {
   "t": "Mode",
   "d": "La donnée qui a l'effectif le plus élevé."
  },
  {
   "t": "Moyenne arithmétique",
   "d": "Somme des données divisée par leur nombre."
  },
  {
   "t": "Médiane",
   "d": "La donnée centrale d'une liste ordonnée."
  },
  {
   "t": "Histogramme",
   "d": "Graphique en colonnes : la hauteur indique l'effectif."
  },
  {
   "t": "Diagramme circulaire",
   "d": "Graphique en camembert : chaque part est proportionnelle à sa portion."
  },
  {
   "t": "Événement",
   "d": "Fait qui peut arriver ou non."
  },
  {
   "t": "Probabilité",
   "d": "Mesure de la probabilité qu'un événement arrive : cas favorables / cas possibles."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Calcule la moyenne de 10, 20, 30, 40.",
    "answer": 25,
    "explain": "10 + 20 + 30 + 40 = 100; 100 : 4 = 25."
   },
   {
    "type": "num",
    "q": "Quel est le mode de 2, 4, 4, 6, 4, 2, 8 ?",
    "answer": 4,
    "explain": "Le 4 apparaît 3 fois."
   },
   {
    "type": "num",
    "q": "Quelle est la médiane de 15, 3, 8, 12, 6 ?",
    "answer": 8,
    "explain": "Dans l'ordre : 3, 6, 8, 12, 15 → la donnée centrale est 8."
   },
   {
    "type": "mc",
    "q": "Pour trouver la médiane, il faut d'abord…",
    "options": [
     "additionner les données",
     "ranger les données dans l'ordre",
     "compter la donnée la plus fréquente"
    ],
    "answer": 1,
    "explain": "La médiane est la valeur centrale des données rangées dans l'ordre."
   },
   {
    "type": "mc",
    "q": "« Demain le Soleil se lèvera à l'ouest » est un événement…",
    "options": [
     "certain",
     "possible",
     "impossible"
    ],
    "answer": 2,
    "explain": "Le Soleil se lève toujours à l'est."
   },
   {
    "type": "mc",
    "q": "Dans un sachet il y a 4 boules rouges et 6 vertes. Quelle est la probabilité de piocher une rouge ?",
    "options": [
     "4/6",
     "4/10",
     "6/10"
    ],
    "answer": 1,
    "explain": "4 cas favorables sur 10 possibles."
   },
   {
    "type": "tf",
    "q": "La probabilité d'un événement certain est 1.",
    "answer": true,
    "explain": "Tous les cas sont favorables : n/n = 1."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le graphique en colonnes ?",
    "answer": [
     "histogramme",
     "l'histogramme",
     "l histogramme"
    ],
    "explain": "C'est l'histogramme."
   },
   {
    "type": "mc",
    "q": "En lançant un dé, quel événement est le plus probable ?",
    "options": [
     "On obtient le 6",
     "On obtient un nombre impair",
     "On obtient un nombre supérieur à 6"
    ],
    "answer": 1,
    "explain": "Impair : 3/6. Le 6 : 1/6. Supérieur à 6 : impossible (0)."
   },
   {
    "type": "order",
    "q": "Range du moins probable au plus probable (lancer d'un dé).",
    "items": [
     "On obtient le 8",
     "On obtient le 3",
     "On obtient un nombre pair",
     "On obtient un nombre de 1 à 6"
    ],
    "explain": "0, puis 1/6, puis 3/6, puis 6/6 = 1."
   },
   {
    "type": "num",
    "q": "En lançant une pièce, quelle est la probabilité d'obtenir face, écrite en pourcentage ? (seulement le nombre)",
    "answer": 50,
    "unit": "%",
    "explain": "1/2 = 50%."
   },
   {
    "type": "tf",
    "q": "Si avec une pièce on a obtenu pile 4 fois de suite, au cinquième lancer il est plus probable d'obtenir face.",
    "answer": false,
    "explain": "La pièce n'a pas de mémoire : la probabilité reste 1/2."
   }
  ]
 }
});
