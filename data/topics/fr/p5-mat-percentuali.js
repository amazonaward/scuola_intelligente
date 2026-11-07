TOPIC('fr', {
 "id": "p5-mat-percentuali",
 "title": "Les pourcentages",
 "intro": "« Soldes : −30 % ! », « Batterie à 15 % », « 60 % de la classe préfère le football ». Les <b>pourcentages</b> sont partout. Le symbole <b>%</b> veut simplement dire <b>« sur cent »</b>. Apprenons à les calculer, à les utiliser pour les <b>réductions</b> et les <b>augmentations</b> et à les lire dans les <b>diagrammes circulaires</b>.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Qu'est-ce qu'un pourcentage",
   "html": "<p>Un <b>pourcentage</b> est une <b>fraction de dénominateur 100</b>, écrite avec le symbole <b>%</b> (« pour cent »).</p>\n<ul>\n<li><b>25 %</b> = 25/100 = 0,25 → 25 parts sur 100 ;</li>\n<li><b>50 %</b> = 50/100 = 1/2 → <b>la moitié</b>;</li>\n<li><b>100 %</b> = 100/100 = 1 → <b>tout</b>, l'entier ;</li>\n<li><b>10 %</b> = 10/100 = 1/10 → un dixième.</li>\n</ul>\n<p>Pourquoi justement 100 ? Parce que c'est ainsi très facile de <b>comparer</b> : « 18 sur 25 » et « 35 sur 50 » sont difficiles à comparer, mais « 72 % » et « 70 % » se comparent tout de suite !</p>"
  },
  {
   "type": "svg",
   "title": "La grille de 100",
   "svg": "<svg viewBox=\"0 0 640 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"300\" fill=\"#f8fafc\"/>\n<g transform=\"translate(30,30)\">\n<rect x=\"0\" y=\"0\" width=\"240\" height=\"240\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<rect x=\"0\" y=\"0\" width=\"240\" height=\"48\" fill=\"#f97316\"/>\n<rect x=\"0\" y=\"48\" width=\"120\" height=\"24\" fill=\"#f97316\"/>\n<g stroke=\"#cbd5e1\" stroke-width=\"1\">\n<line x1=\"24\" y1=\"0\" x2=\"24\" y2=\"240\"/><line x1=\"48\" y1=\"0\" x2=\"48\" y2=\"240\"/><line x1=\"72\" y1=\"0\" x2=\"72\" y2=\"240\"/><line x1=\"96\" y1=\"0\" x2=\"96\" y2=\"240\"/><line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"240\"/><line x1=\"144\" y1=\"0\" x2=\"144\" y2=\"240\"/><line x1=\"168\" y1=\"0\" x2=\"168\" y2=\"240\"/><line x1=\"192\" y1=\"0\" x2=\"192\" y2=\"240\"/><line x1=\"216\" y1=\"0\" x2=\"216\" y2=\"240\"/>\n<line x1=\"0\" y1=\"24\" x2=\"240\" y2=\"24\"/><line x1=\"0\" y1=\"48\" x2=\"240\" y2=\"48\"/><line x1=\"0\" y1=\"72\" x2=\"240\" y2=\"72\"/><line x1=\"0\" y1=\"96\" x2=\"240\" y2=\"96\"/><line x1=\"0\" y1=\"120\" x2=\"240\" y2=\"120\"/><line x1=\"0\" y1=\"144\" x2=\"240\" y2=\"144\"/><line x1=\"0\" y1=\"168\" x2=\"240\" y2=\"168\"/><line x1=\"0\" y1=\"192\" x2=\"240\" y2=\"192\"/><line x1=\"0\" y1=\"216\" x2=\"240\" y2=\"216\"/>\n</g>\n</g>\n<text x=\"310\" y=\"70\" font-size=\"20\" fill=\"#1f2937\">100 petits carreaux = <tspan font-weight=\"bold\">100 %</tspan> (l'entier)</text>\n<text x=\"310\" y=\"115\" font-size=\"20\" fill=\"#c2410c\">25 petits carreaux colorés</text>\n<text x=\"310\" y=\"150\" font-size=\"26\" fill=\"#c2410c\" font-weight=\"bold\">= 25/100 = 25%</text>\n<text x=\"310\" y=\"190\" font-size=\"20\" fill=\"#1f2937\">= 0,25 = 1/4</text>\n<text x=\"310\" y=\"235\" font-size=\"17\" fill=\"#475569\">un quart de la grille !</text>\n</svg>",
   "caption": "Dans une grille de 100 petits carreaux, chaque carreau vaut 1 %. En colorier 25, c'est colorier 25 %."
  },
  {
   "type": "widget",
   "title": "Construis le pourcentage sur les carreaux",
   "widget": "areaGrid",
   "options": {
    "w": 5,
    "h": 4,
    "max": 10
   },
   "caption": "La grille 10 × 10 a 100 petits carreaux : l'aire colorée est le pourcentage. Avec 5 × 4 = 20 carreaux, tu as 20 %. Essaie de faire 30 %, 50 %, 64 % !"
  },
  {
   "type": "text",
   "title": "Calculer le pourcentage d'un nombre",
   "html": "<p>Calculer un pourcentage, c'est comme calculer une <b>fraction d'un nombre</b> de dénominateur 100 :</p>\n<ol>\n<li><b>divise</b> le nombre par <b>100</b> (tu trouves 1 %) ;</li>\n<li><b>multiplie</b> par le pourcentage.</li>\n</ol>\n<p>Exemple : 30 % de 250 → 250 : 100 = 2,5 → 2,5 × 30 = <b>75</b>.</p>\n<p>Ou bien, dans l'autre sens : 250 × 30 : 100 = 7500 : 100 = <b>75</b>.</p>\n<p><b>Pourcentages « amis »</b> à retenir : 50 % = moitié ( : 2), 25 % = un quart ( : 4), 10 % = un dixième ( : 10), 20 % = un cinquième ( : 5), 75 % = trois quarts.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : la classe et le sport",
   "html": "<p>Dans la classe de CM2 A, il y a <b>20 élèves</b>. <b>40 %</b> font de la natation. Combien sont-ils ?</p>\n<p>20 : 100 × 40 = <b>8 élèves</b>. Astuce : 10 % de 20 font 2, donc 40 % font 2 × 4 = 8.</p>\n<p>Et dans l'autre sens : <b>5 élèves sur 20</b> jouent d'un instrument. Quel pourcentage est-ce ? 5/20 = 25/100 = <b>25 %</b> (j'ai multiplié numérateur et dénominateur par 5 pour arriver à 100).</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : calculer les pourcentages",
   "questions": [
    {
     "type": "num",
     "q": "Combien font 50 % de 84 ?",
     "answer": 42,
     "explain": "50 % c'est la moitié : 84 : 2 = 42."
    },
    {
     "type": "num",
     "q": "Combien font 10 % de 350 ?",
     "answer": 35,
     "explain": "10 % c'est un dixième : 350 : 10 = 35."
    },
    {
     "type": "mc",
     "q": "25 % correspond à la fraction…",
     "options": [
      "1/2",
      "1/4",
      "1/25"
     ],
     "answer": 1,
     "explain": "25/100 = 1/4."
    },
    {
     "type": "num",
     "q": "3 élèves sur 10 portent des lunettes. Quel pourcentage est-ce ?",
     "answer": 30,
     "unit": "%",
     "explain": "3/10 = 30/100 = 30%."
    }
   ]
  },
  {
   "type": "text",
   "title": "Réductions et augmentations",
   "html": "<p><b>Réduction</b> : le prix <b>diminue</b> d'un certain pourcentage.</p>\n<ol>\n<li>calcule la réduction : prix × % : 100 ;</li>\n<li>retire la réduction du prix : <b>prix réduit = prix − réduction</b>.</li>\n</ol>\n<p>Des chaussures à <b>60 €</b> avec une réduction de <b>20 %</b> : réduction = 60 × 20 : 100 = 12 € → prix final <b>60 − 12 = 48 €</b>.</p>\n<p><b>Augmentation</b> : le prix <b>croît</b> d'un certain pourcentage. Un abonnement de <b>40 €</b> augmenté de <b>5 %</b> : augmentation = 40 × 5 : 100 = 2 € → nouveau prix <b>42 €</b>.</p>\n<p><b>Raccourci</b> : avec une réduction de 20 %, tu paies <b>80 %</b> du prix : 60 × 80 : 100 = 48 €. Même résultat !</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : les soldes",
   "html": "<p>Un vélo coûte <b>180 €</b>. Pendant les soldes, il est réduit de <b>30 %</b>.</p>\n<ul>\n<li>Réduction : 180 : 100 × 30 = <b>54 €</b>.</li>\n<li>Prix réduit : 180 − 54 = <b>126 €</b>.</li>\n<li>Vérification : 70 % de 180 = 18 × 7 = 126 € ✅.</li>\n</ul>\n<p>⚠️ <b>Attention au piège !</b> Si un prix augmente de 10 % puis diminue de 10 %, il <b>ne</b> revient <b>pas</b> à la même valeur : 100 € → +10 % = 110 € → −10 % = 99 € ! Parce que le second 10 % se calcule sur 110, pas sur 100.</p>"
  },
  {
   "type": "text",
   "title": "Les diagrammes circulaires (aérogrammes)",
   "html": "<p>Le <b>diagramme circulaire</b> (ou <b>aérogramme</b>) est un cercle divisé en parts : <b>tout le cercle est 100 %</b> et chaque part montre un pourcentage.</p>\n<p>Le cercle fait <b>360°</b>, donc :</p>\n<ul>\n<li>100 % = 360°, 50 % = 180° (demi-cercle), 25 % = 90° (un angle droit), 10 % = 36° ;</li>\n<li><b>1 % = 3,6°</b> : pour dessiner une part, multiplie le pourcentage par 3,6.</li>\n</ul>\n<p>La somme de toutes les parts doit toujours faire <b>100 %</b> (et 360°).</p>"
  },
  {
   "type": "svg",
   "title": "Le fruit préféré de la classe de CM2 B",
   "svg": "<svg viewBox=\"0 0 640 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"300\" fill=\"#fffbeb\"/>\n<path d=\"M160,150 L160,30 A120,120 0 0,1 280,150 Z\" fill=\"#ef4444\"/>\n<path d=\"M160,150 L280,150 A120,120 0 0,1 160,270 Z\" fill=\"#facc15\"/>\n<path d=\"M160,150 L160,270 A120,120 0 0,1 62.9,220.5 Z\" fill=\"#22c55e\"/>\n<path d=\"M160,150 L62.9,220.5 A120,120 0 0,1 160,30 Z\" fill=\"#f97316\"/>\n<g font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1f2937\">\n<text x=\"210\" y=\"105\">25%</text><text x=\"210\" y=\"205\">25%</text><text x=\"125\" y=\"228\">15%</text><text x=\"105\" y=\"125\">35%</text>\n</g>\n<g font-size=\"18\" fill=\"#1f2937\">\n<rect x=\"340\" y=\"50\" width=\"24\" height=\"24\" fill=\"#f97316\"/><text x=\"374\" y=\"69\">🍊 orange 35 % (7 élèves)</text>\n<rect x=\"340\" y=\"95\" width=\"24\" height=\"24\" fill=\"#ef4444\"/><text x=\"374\" y=\"114\">🍎 pomme 25 % (5 élèves)</text>\n<rect x=\"340\" y=\"140\" width=\"24\" height=\"24\" fill=\"#facc15\"/><text x=\"374\" y=\"159\">🍌 banane 25 % (5 élèves)</text>\n<rect x=\"340\" y=\"185\" width=\"24\" height=\"24\" fill=\"#22c55e\"/><text x=\"374\" y=\"204\">🍐 poire 15 % (3 élèves)</text>\n<text x=\"340\" y=\"250\" font-weight=\"bold\">Total : 20 élèves = 100 %</text>\n</g>\n</svg>",
   "caption": "Chaque élève vaut 100 : 20 = 5 %. La pomme (25 %) occupe un quart de cercle : 90°."
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? D'où vient le symbole %",
   "html": "<p>Le symbole <b>%</b> est né en <b>Italie</b>! Dans les manuscrits des marchands du XVe siècle, on écrivait <i>« per cento »</i> abrégé en <b>« p cento »</b> ou <b>« p c° »</b>. À force de l'écrire vite, le « c » et le petit cercle sont devenus une sorte de fraction avec deux petits cercles : <b>%</b>. Il existe aussi le <b>pour mille ‰</b> (avec trois petits cercles), utilisé par exemple pour la salinité de la mer (environ 35 ‰).</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le premier diagramme circulaire",
   "html": "<p>Le premier diagramme circulaire connu fut dessiné en <b>1801</b> par l'ingénieur écossais <b>William Playfair</b>, qui inventa aussi le diagramme en barres et celui en lignes. Plus tard, l'infirmière <b>Florence Nightingale</b> utilisa un diagramme semblable, en « rose », pour montrer que pendant la guerre de Crimée (1853–1856), plus de soldats mouraient de maladies que de blessures : grâce à ses graphiques, les hôpitaux militaires ont amélioré l'hygiène !</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li><b>% = sur cent</b> : 35 % = 35/100 = 0,35.</li>\n<li>Pourcentage d'un nombre : <b>nombre × % : 100</b>.</li>\n<li><b>Réduction</b> : prix − réduction (ou tu paies 100 % − réduction %). <b>Augmentation</b> : prix + augmentation.</li>\n<li>Diagramme circulaire : <b>100 % = 360°</b>, 1 % = 3,6°.</li>\n<li>50 % = moitié, 25 % = un quart, 10 % = un dixième, 20 % = un cinquième.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les pourcentages",
   "intro": "Les pourcentages peuvent se comprendre avec la tarte, avec la méthode des 10 % utilisée dans les pays anglo-saxons, avec la batterie du téléphone ou avec le tableau de proportionnalité.",
   "tabs": [
    {
     "label": "🥧 Tarte et fractions",
     "html": "<p>Les pourcentages sont des <b>fractions déguisées</b>! Bouge les curseurs : avec 1/4 la tarte est à <b>25 %</b>, avec 1/2 à <b>50 %</b>, avec 3/4 à <b>75 %</b>, avec 1/5 à <b>20 %</b>, avec 1/10 à <b>10 %</b>.</p>\n<p>Pour passer d'une fraction à un pourcentage, trouve la fraction équivalente de dénominateur 100 : 3/5 = 60/100 = <b>60 %</b>.</p>",
     "widget": "fractionPie",
     "options": {
      "n": 1,
      "d": 4
     }
    },
    {
     "label": "🔟 La méthode des 10 %",
     "html": "<p>En Angleterre et dans beaucoup d'autres pays, on enseigne à tout calculer en partant des <b>10 %</b>, qu'on trouve tout de suite en divisant par 10 :</p>\n<ul>\n<li>10 % de 80 = <b>8</b></li>\n<li>20 % = 8 × 2 = <b>16</b>;  30 % = 8 × 3 = <b>24</b></li>\n<li>5 % = moitié de 10 % = <b>4</b></li>\n<li>15 % = 10 % + 5 % = 8 + 4 = <b>12</b></li>\n<li>1 % = 10 % : 10 = <b>0,8</b></li>\n</ul>\n<p>Ainsi 35 % de 80 = 30 % + 5 % = 24 + 4 = <b>28</b>. Tout de tête, sans papier ! 🧠</p>"
    },
    {
     "label": "🔋 La batterie",
     "html": "<p>La <b>batterie du téléphone</b> est un parfait « mesureur de pourcentages » : 100 % c'est pleine, 0 % c'est vide, 50 % c'est à moitié.</p>\n<p>Si la batterie dure <b>20 heures</b> et que tu es à <b>25 %</b>, il te reste 20 × 25 : 100 = <b>5 heures</b>.</p>",
     "svg": "<svg viewBox=\"0 0 600 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"200\" fill=\"#f1f5f9\"/>\n<g stroke=\"#1f2937\" stroke-width=\"4\">\n<rect x=\"30\" y=\"60\" width=\"140\" height=\"70\" rx=\"10\" fill=\"#ffffff\"/><rect x=\"170\" y=\"80\" width=\"10\" height=\"30\" fill=\"#1f2937\"/>\n<rect x=\"220\" y=\"60\" width=\"140\" height=\"70\" rx=\"10\" fill=\"#ffffff\"/><rect x=\"360\" y=\"80\" width=\"10\" height=\"30\" fill=\"#1f2937\"/>\n<rect x=\"410\" y=\"60\" width=\"140\" height=\"70\" rx=\"10\" fill=\"#ffffff\"/><rect x=\"550\" y=\"80\" width=\"10\" height=\"30\" fill=\"#1f2937\"/>\n</g>\n<rect x=\"36\" y=\"66\" width=\"128\" height=\"58\" rx=\"6\" fill=\"#22c55e\"/>\n<rect x=\"226\" y=\"66\" width=\"64\" height=\"58\" rx=\"6\" fill=\"#facc15\"/>\n<rect x=\"416\" y=\"66\" width=\"32\" height=\"58\" rx=\"6\" fill=\"#ef4444\"/>\n<g font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1f2937\">\n<text x=\"100\" y=\"165\">100%</text><text x=\"290\" y=\"165\">50%</text><text x=\"480\" y=\"165\">25%</text>\n</g>\n<g font-size=\"15\" text-anchor=\"middle\" fill=\"#475569\">\n<text x=\"100\" y=\"190\">pleine</text><text x=\"290\" y=\"190\">moitié</text><text x=\"480\" y=\"190\">un quart</text>\n</g>\n</svg>"
    },
    {
     "label": "📊 Le tableau (proportionnalité)",
     "html": "<p>Tu peux utiliser un <b>tableau à deux lignes</b> : en haut la quantité, en bas le pourcentage. Ce que tu fais à une colonne, tu le fais aussi à l'autre.</p>\n<table>\n<tr><th>Quantité</th><td>240</td><td>24</td><td>72</td></tr>\n<tr><th>Pourcentage</th><td>100 %</td><td>10 %</td><td>30 %</td></tr>\n</table>\n<p>De 100 % à 10 %, je divise par 10 (donc 240 : 10 = 24) ; de 10 % à 30 %, je multiplie par 3 (24 × 3 = 72). Donc <b>30 % de 240, c'est 72</b>. Au collège, cela deviendra une <b>proportion</b> : 240 : 100 = x : 30.</p>"
    },
    {
     "label": "🇸🇬 Le modèle en barres (Singapour)",
     "html": "<p>À <b>Singapour</b>, les problèmes avec les pourcentages se résolvent en dessinant une <b>barre</b> : la barre entière est le <b>100 %</b>, et on la divise en parts égales.</p><p><b>Problème 1</b> : un vélo coûte <b>240 €</b> et il est réduit de <b>25 %</b>. Combien le paies-tu ?</p><ol><li>Dessine une barre = 100 % = 240 €.</li><li>25 % c'est un quart : divise la barre en <b>4 parts</b>. Chaque part vaut 240 : 4 = <b>60 €</b>.</li><li>La réduction est 1 part (60 €) ; tu paies les 3 autres parts : 3 × 60 = <b>180 €</b>.</li></ol><p><b>Problème 2</b> (dans l'autre sens !) : les <b>30 %</b> des enfants d'une classe sont <b>6</b>. Combien y a-t-il d'enfants en tout ?</p><ol><li>Divise la barre en <b>10 parts</b> de 10 %.</li><li>30 % = 3 parts = 6 enfants → 1 part = 6 : 3 = 2.</li><li>Toute la barre = 10 parts = <b>20 enfants</b>.</li></ol><p>Le dessin te fait voir tout de suite s'il faut multiplier ou diviser.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><text x=\"20\" y=\"30\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Vélo : 240 € — réduction 25 %</text><rect x=\"40\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"100\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><rect x=\"160\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"220\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><rect x=\"280\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"340\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><rect x=\"400\" y=\"45\" width=\"120\" height=\"44\" fill=\"#fecaca\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"460\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><text x=\"40\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">100 % = 240 €  →  1 part = 240 : 4 = 60 €</text><text x=\"40\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">Tu paies 3 parts = 180 €</text><text x=\"400\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">réduction</text><line x1=\"20\" y1=\"152\" x2=\"580\" y2=\"152\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><text x=\"20\" y=\"180\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">30 % de la classe = 6 enfants. Combien en tout ?</text><rect x=\"40\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"65\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"90\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"115\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"140\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"165\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"190\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"215\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"240\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"265\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"290\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"315\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"340\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"365\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"390\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"415\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"440\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"465\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"490\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"515\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><text x=\"40\" y=\"258\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">3 parts de 10 % = 6  →  1 part = 2</text><text x=\"40\" y=\"280\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">10 parts = 100 % = 20 enfants</text></svg>"
    },
    {
     "label": "🇬🇧 Le « multiplicateur » anglais",
     "html": "<p>Dans les écoles du <b>Royaume-Uni</b>, on apprend une astuce très rapide pour les réductions et les augmentations : le <b>multiplier</b>, c'est-à-dire le <b>multiplicateur</b>. L'idée : au lieu de calculer la réduction puis de la retirer, tu calcules <b>tout de suite combien tu paies</b>.</p><ul><li>Réduction de <b>20 %</b> → tu paies <b>80 %</b> → 80/100 = <b>0,8</b> → multiplie par 0,8.<br>45 € × 0,8 = <b>36 €</b>.</li><li>Réduction de <b>50 %</b> → tu paies 50 % → × 0,5 (c'est-à-dire la moitié).</li><li>Augmentation de <b>10 %</b> → tu paies <b>110 %</b> → × <b>1,1</b>.<br>50 € × 1,1 = <b>55 €</b>.</li></ul><p><b>Comment trouver le multiplicateur</b> : pars de 100 %, retire la réduction (ou ajoute l'augmentation) et divise par 100.</p><p>⚠️ <b>Piège</b> : une augmentation de 10 % suivie d'une réduction de 10 % ne te ramène <b>pas</b> au prix de départ ! 100 € × 1,1 = 110 € ; 110 € × 0,9 = <b>99 €</b>. Pourquoi ? Le second 10 % est calculé sur un nombre plus grand.</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des pourcentages",
   "nodes": [
    {
     "id": "frazioni",
     "label": "Fractions décimales",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "Fractions de dénominateur 10, 100, 1000.",
     "why": "Les pourcentages en sont un cas particulier : des fractions de dénominateur 100. C'est pourquoi tout ce que tu sais sur les fractions vaut aussi pour les pourcentages."
    },
    {
     "id": "percentuale",
     "label": "Pourcentage",
     "x": 50,
     "y": 28,
     "color": "#2563eb",
     "html": "Une fraction sur 100, écrite avec % : 35 % = 35/100.",
     "why": "Du latin <i>per centum</i> = « pour chaque cent ». Les Romains utilisaient déjà une taxe de 1/100 (<i>centesima rerum venalium</i>) sur les marchandises vendues aux enchères, introduite par Auguste."
    },
    {
     "id": "simbolo",
     "label": "Symbole %",
     "x": 15,
     "y": 28,
     "color": "#a855f7",
     "html": "Le signe qui signifie « pour cent ».",
     "why": "Né des abréviations des marchands italiens du XVe siècle (« p cento » → « p c° » → %). Utiliser toujours 100 comme dénominateur rend les comparaisons faciles."
    },
    {
     "id": "calcolo",
     "label": "% d'un nombre",
     "x": 22,
     "y": 55,
     "color": "#16a34a",
     "html": "Nombre × pourcentage : 100.",
     "why": "C'est la règle de la fraction d'un nombre (divisé par le dénominateur, multiplié par le numérateur) avec dénominateur 100."
    },
    {
     "id": "decimale",
     "label": "Forme décimale",
     "x": 50,
     "y": 55,
     "color": "#eab308",
     "html": "35% = 0,35; 5% = 0,05; 100% = 1.",
     "why": "Diviser par 100 déplace la virgule de deux rangs vers la gauche : c'est pourquoi les calculatrices transforment les pourcentages en nombres décimaux."
    },
    {
     "id": "sconti",
     "label": "Réductions et augmentations",
     "x": 22,
     "y": 82,
     "color": "#dc2626",
     "html": "Prix − réduction ; prix + augmentation.",
     "why": "Elles sont nées avec le commerce : les marchands calculaient intérêts, gains et pertes « pour cent » dans leurs livres de comptes, déjà au Moyen Âge (Fibonacci en parle dans le <i>Liber Abaci</i>, 1202)."
    },
    {
     "id": "torta",
     "label": "Diagramme circulaire",
     "x": 78,
     "y": 55,
     "color": "#f97316",
     "html": "Cercle divisé en parts : 100 % = 360°.",
     "why": "Inventé par William Playfair en 1801. Il fonctionne parce que le cercle entier représente bien l'idée de « tout » (100 %)."
    },
    {
     "id": "gradi",
     "label": "1% = 3,6°",
     "x": 78,
     "y": 82,
     "color": "#0ea5e9",
     "html": "Pour dessiner une part : pourcentage × 3,6.",
     "why": "Le cercle fait 360°, un héritage des Babyloniens qui comptaient en base 60 : 360 : 100 = 3,6."
    },
    {
     "id": "statistica",
     "label": "Statistique",
     "x": 50,
     "y": 92,
     "color": "#14b8a6",
     "html": "Recueillir des données et les comparer avec les pourcentages.",
     "why": "Les pourcentages permettent de comparer des groupes de taille différente (5 sur 20 et 30 sur 120 font tous deux 25 %) : c'est pourquoi l'ISTAT (l'institut italien de statistique) et les sondages les utilisent toujours."
    }
   ],
   "edges": [
    [
     "frazioni",
     "percentuale",
     "cas particulier"
    ],
    [
     "percentuale",
     "simbolo",
     "s'écrit avec le"
    ],
    [
     "percentuale",
     "calcolo",
     "se calcule"
    ],
    [
     "percentuale",
     "decimale",
     "équivaut à la"
    ],
    [
     "calcolo",
     "sconti",
     "sert pour les"
    ],
    [
     "percentuale",
     "torta",
     "se représente avec la"
    ],
    [
     "torta",
     "gradi",
     "se dessine avec les"
    ],
    [
     "decimale",
     "statistica",
     "utilisée en"
    ],
    [
     "torta",
     "statistica",
     "utilisé en"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : réductions et diagrammes",
   "questions": [
    {
     "type": "num",
     "q": "Un jeu coûte 50 € et il est réduit de 10 %. Combien le paies-tu ?",
     "answer": 45,
     "unit": "€",
     "explain": "Réduction : 5 € ; 50 − 5 = 45 €."
    },
    {
     "type": "num",
     "q": "Dans un diagramme circulaire, combien de degrés mesure la part de 50 % ?",
     "answer": 180,
     "unit": "°",
     "explain": "50 % de 360° = 180°."
    },
    {
     "type": "tf",
     "q": "Dans un diagramme circulaire, la somme des pourcentages doit faire 100 %.",
     "answer": true,
     "explain": "Le cercle entier représente le total, c'est-à-dire 100 %."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Pourcentage",
   "d": "Fraction de dénominateur 100, indiquée par le symbole %."
  },
  {
   "t": "Réduction",
   "d": "Diminution d'un prix, souvent exprimée en pourcentage."
  },
  {
   "t": "Prix réduit",
   "d": "Prix initial moins la réduction."
  },
  {
   "t": "Augmentation",
   "d": "Hausse d'un prix ou d'une quantité, souvent exprimée en pourcentage."
  },
  {
   "t": "Diagramme circulaire (aérogramme)",
   "d": "Cercle divisé en parts proportionnelles aux pourcentages ; le cercle entier est 100 %."
  },
  {
   "t": "Pour mille (‰)",
   "d": "Fraction de dénominateur 1000."
  },
  {
   "t": "Total",
   "d": "L'entier de référence, qui correspond à 100 %."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Que signifie 40 % ?",
    "options": [
     "40 sur 10",
     "40 sur 100",
     "40 sur 1000"
    ],
    "answer": 1,
    "explain": "Pour cent = sur cent : 40/100."
   },
   {
    "type": "num",
    "q": "Combien font 25 % de 120 ?",
    "answer": 30,
    "explain": "25 % c'est un quart : 120 : 4 = 30."
   },
   {
    "type": "num",
    "q": "Combien font 15 % de 200 ?",
    "answer": 30,
    "explain": "200 × 15 : 100 = 30."
   },
   {
    "type": "mc",
    "q": "Quel pourcentage équivaut à 3/4 ?",
    "options": [
     "34%",
     "75%",
     "43%"
    ],
    "answer": 1,
    "explain": "3/4 = 75/100 = 75%."
   },
   {
    "type": "num",
    "q": "Un T-shirt coûte 30 € avec une réduction de 20 %. Combien paie-t-on ?",
    "answer": 24,
    "unit": "€",
    "explain": "Réduction : 30 × 20 : 100 = 6 € ; 30 − 6 = 24 €."
   },
   {
    "type": "num",
    "q": "L'abonnement coûte 200 € et augmente de 5 %. Quel est le nouveau prix ?",
    "answer": 210,
    "unit": "€",
    "explain": "Augmentation : 10 € ; 200 + 10 = 210 €."
   },
   {
    "type": "num",
    "q": "Dans une classe de 25 élèves, 5 ont un chien. Quel pourcentage est-ce ?",
    "answer": 20,
    "unit": "%",
    "explain": "5/25 = 20/100 = 20%."
   },
   {
    "type": "num",
    "q": "Dans un diagramme circulaire, combien de degrés correspondent à 25 % ?",
    "answer": 90,
    "unit": "°",
    "explain": "360 × 25 : 100 = 90°."
   },
   {
    "type": "tf",
    "q": "0,07 et 7 % indiquent la même quantité.",
    "answer": true,
    "explain": "7% = 7/100 = 0,07."
   },
   {
    "type": "tf",
    "q": "Si un prix augmente de 10 % puis baisse de 10 %, il revient au prix initial.",
    "answer": false,
    "explain": "100 → 110 → 99 : le second 10 % se calcule sur un nombre plus grand."
   },
   {
    "type": "order",
    "q": "Range de la plus petite quantité à la plus grande.",
    "items": [
     "5 % de 100",
     "10 % de 100",
     "1/4 de 100",
     "50 % de 100"
    ],
    "explain": "5 < 10 < 25 < 50."
   },
   {
    "type": "mc",
    "q": "Où est né le symbole % ?",
    "options": [
     "dans les manuscrits des marchands italiens",
     "dans les pyramides égyptiennes",
     "dans les ordinateurs américains"
    ],
    "answer": 0,
    "explain": "De l'abréviation de « per cento » dans les manuscrits commerciaux italiens du XVe siècle."
   }
  ],
  "gen": [
   [
    "percent",
    3
   ]
  ]
 }
});
