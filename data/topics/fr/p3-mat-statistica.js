TOPIC('fr', {
  id: "p3-mat-statistica",
  title: "Enquêtes et graphiques",
  intro: "Quel est le parfum de glace préféré de ta classe ? 🍦 Pour le découvrir, il faut faire une <b>enquête</b> : poser une question, recueillir les réponses (les <b>données</b>), les compter et les dessiner dans un <b>graphique</b>. Devenons de petits statisticiens !",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Les étapes d'une enquête",
      html: `<p>Une <b>enquête statistique</b> est une recherche pour découvrir quelque chose sur un groupe de personnes, d'animaux ou de choses. Elle se fait en <b>5 étapes</b> :</p>
<ol>
<li>❓ <b>La question</b> : je décide ce que je veux savoir. Ex. <i>« Quel est ton animal préféré ? »</i></li>
<li>👥 <b>Le groupe</b> : je décide à qui demander (ex. les 20 enfants du CE2 B).</li>
<li>📝 <b>Le recueil des données</b> : je demande à chacun et je note les réponses.</li>
<li>🔢 <b>Le comptage</b> : je mets les données dans un <b>tableau</b>.</li>
<li>📊 <b>Le graphique</b> : je dessine les données pour les voir « d'un coup d'œil » et en tirer des <b>conclusions</b>.</li>
</ol>
<p>Les réponses que nous recueillons s'appellent des <b>données</b>. Elles peuvent être des <b>mots</b> (couleur, parfum, sport) ou des <b>nombres</b> (âge, nombre de frères et sœurs, taille).</p>`
    },
    {
      type: "text",
      title: "Recueillir les données : les bâtons",
      html: `<p>Pour compter vite, on utilise les <b>bâtons</b> : un petit trait | pour chaque réponse. Toutes les 5 réponses, on fait un <b>paquet</b> : quatre traits et une barre en travers. Ainsi on compte les données par groupes de 5 !</p>
<p>Ensuite on écrit le total dans la colonne de l'<b>effectif</b> (<i>frequenza</i>), c'est-à-dire <b>combien de fois</b> chaque réponse est apparue.</p>
<table>
<tr><th>Animal</th><th>Bâtons</th><th>Effectif</th></tr>
<tr><td>🐶 Chien</td><td>卌 |||</td><td>8</td></tr>
<tr><td>🐱 Chat</td><td>卌</td><td>5</td></tr>
<tr><td>🐰 Lapin</td><td>|||</td><td>3</td></tr>
<tr><td>🐟 Poisson</td><td>||||</td><td>4</td></tr>
<tr><td><b>Total</b></td><td></td><td><b>20</b></td></tr>
</table>
<p>✅ Contrôle : le total des effectifs doit être égal au nombre de personnes interrogées (20).</p>`
    },
    {
      type: "svg",
      title: "L'histogramme des animaux préférés",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<text x="320" y="28" font-size="20" fill="#1f2937" text-anchor="middle" font-weight="bold">Animaux préférés du CE2 B</text>
<g stroke="#e2e8f0" stroke-width="2">
<line x1="80" y1="250" x2="560" y2="250"/><line x1="80" y1="225" x2="560" y2="225"/><line x1="80" y1="200" x2="560" y2="200"/><line x1="80" y1="175" x2="560" y2="175"/>
<line x1="80" y1="150" x2="560" y2="150"/><line x1="80" y1="125" x2="560" y2="125"/><line x1="80" y1="100" x2="560" y2="100"/><line x1="80" y1="75" x2="560" y2="75"/><line x1="80" y1="50" x2="560" y2="50"/>
</g>
<line x1="80" y1="275" x2="560" y2="275" stroke="#1f2937" stroke-width="3"/>
<line x1="80" y1="40" x2="80" y2="275" stroke="#1f2937" stroke-width="3"/>
<g font-size="16" fill="#1f2937" text-anchor="end">
<text x="72" y="280">0</text><text x="72" y="230">2</text><text x="72" y="180">4</text><text x="72" y="130">6</text><text x="72" y="80">8</text>
</g>
<rect x="110" y="75" width="80" height="200" fill="#f97316"/>
<rect x="230" y="150" width="80" height="125" fill="#3b82f6"/>
<rect x="350" y="200" width="80" height="75" fill="#22c55e"/>
<rect x="470" y="175" width="80" height="100" fill="#a855f7"/>
<g font-size="20" text-anchor="middle" font-weight="bold">
<text x="150" y="68" fill="#c2410c">8</text><text x="270" y="143" fill="#1d4ed8">5</text><text x="390" y="193" fill="#15803d">3</text><text x="510" y="168" fill="#7e22ce">4</text>
</g>
<g font-size="18" text-anchor="middle" fill="#1f2937">
<text x="150" y="300">🐶 chien</text><text x="270" y="300">🐱 chat</text><text x="390" y="300">🐰 lapin</text><text x="510" y="300">🐟 poisson</text>
</g>
<text x="30" y="160" font-size="16" fill="#475569" transform="rotate(-90 30 160)" text-anchor="middle">nombre d'enfants</text>
</svg>`,
      caption: "Chaque colonne est aussi haute que l'effectif : on voit tout de suite que le chien est l'animal le plus voté."
    },
    {
      type: "text",
      title: "Les types de graphiques",
      html: `<ul>
<li>📊 <b>Histogramme</b> (diagramme en barres ou en colonnes) : chaque réponse a une colonne aussi haute que son effectif. Sur l'axe horizontal, il y a les réponses, sur l'axe vertical les nombres. Les colonnes doivent avoir <b>toutes la même largeur</b>.</li>
<li>🖼️ <b>Pictogramme</b> : on utilise de <b>petits dessins</b> (symboles). Attention à la <b>légende</b> : un dessin peut valoir 1, mais aussi 2, 5 ou 10 !</li>
<li>🟦 <b>Diagramme à carreaux</b> : comme l'histogramme, mais on colorie un carreau pour chaque donnée.</li>
<li>🥧 <b>Diagramme circulaire</b> (camembert) : le cercle entier est le total et chaque part est une partie. Tu l'utiliseras davantage dans les années à venir.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Un pictogramme avec légende",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fff7ed"/>
<text x="300" y="30" font-size="20" text-anchor="middle" font-weight="bold" fill="#1f2937">Glaces vendues en une semaine</text>
<text x="20" y="85" font-size="20" fill="#1f2937">🍫 chocolat</text>
<text x="20" y="145" font-size="20" fill="#1f2937">🍓 fraise</text>
<text x="20" y="205" font-size="20" fill="#1f2937">🍋 citron</text>
<g fill="#f472b6" stroke="#9d174d" stroke-width="2">
<circle cx="210" cy="78" r="18"/><circle cx="260" cy="78" r="18"/><circle cx="310" cy="78" r="18"/><circle cx="360" cy="78" r="18"/><circle cx="410" cy="78" r="18"/><circle cx="460" cy="78" r="18"/>
<circle cx="210" cy="138" r="18"/><circle cx="260" cy="138" r="18"/><circle cx="310" cy="138" r="18"/><circle cx="360" cy="138" r="18"/>
<circle cx="210" cy="198" r="18"/><circle cx="260" cy="198" r="18"/>
</g>
<path d="M260 216 L260 180 A18 18 0 0 1 260 216 Z" fill="#fff7ed"/>
<text x="520" y="85" font-size="20" fill="#9d174d" font-weight="bold">60</text>
<text x="520" y="145" font-size="20" fill="#9d174d" font-weight="bold">40</text>
<text x="520" y="205" font-size="20" fill="#9d174d" font-weight="bold">15</text>
<rect x="150" y="235" width="300" height="34" rx="8" fill="#ffffff" stroke="#9d174d" stroke-width="2"/>
<circle cx="180" cy="252" r="12" fill="#f472b6" stroke="#9d174d" stroke-width="2"/>
<text x="200" y="259" font-size="18" fill="#1f2937">Légende : 1 boule = 10 glaces</text>
</svg>`,
      caption: "Avec la légende « 1 boule = 10 », une demi-boule vaut 5 : le citron a 10 + 5 = 15 glaces."
    },
    {
      type: "quiz",
      title: "Mini-quiz : lire les données",
      questions: [
        { type: "num", q: "Dans l'histogramme des animaux, combien d'enfants ont choisi le chat ?", answer: 5, explain: "La colonne du chat arrive à 5." },
        { type: "mc", q: "Dans le pictogramme des glaces, chaque boule vaut…", options: ["1 glace", "10 glaces", "5 glaces"], answer: 1, explain: "La légende le dit : 1 boule = 10 glaces." },
        { type: "num", q: "Combien de glaces à la fraise ont été vendues ?", answer: 40, explain: "4 boules × 10 = 40 glaces." }
      ]
    },
    {
      type: "text",
      title: "Lire un graphique : le mode et la comparaison",
      html: `<p>Un graphique sert à répondre à des questions. En regardant l'histogramme des animaux :</p>
<ul>
<li>Quelle est la réponse <b>la plus fréquente</b> ? Le <b>chien</b> (8). Cela s'appelle le <b>mode</b> : c'est la réponse qui apparaît <b>le plus de fois</b>. 👑</li>
<li>Quelle est la moins choisie ? Le lapin (3).</li>
<li>Combien d'enfants de plus préfèrent le chien au chat ? 8 − 5 = <b>3</b>.</li>
<li>Combien d'enfants ont répondu en tout ? 8 + 5 + 3 + 4 = <b>20</b>.</li>
</ul>
<p>Attention : le mode n'est <b>pas</b> un nombre du tableau, c'est la <b>réponse</b> (« chien ») !</p>`
    },
    {
      type: "widget",
      title: "Données en mots ou données en nombres ?",
      widget: "classify",
      options: {
        groups: ["Réponse en mots", "Réponse en nombres"],
        items: [
          ["🎨 Couleur préférée", 0],
          ["🎂 Quel âge as-tu ?", 1],
          ["⚽ Sport préféré", 0],
          ["👨‍👩‍👧 Combien de frères et sœurs as-tu ?", 1],
          ["🍝 Plat préféré", 0],
          ["👟 Pointure", 1],
          ["🚌 Comment viens-tu à l'école ?", 0],
          ["📚 Combien de livres as-tu lus cette année ?", 1]
        ]
      },
      caption: "Chaque question d'une enquête donne des données de type différent : range-les dans les deux groupes."
    },
    {
      type: "example",
      title: "Exemple pratique : comment venez-vous à l'école ?",
      html: `<p>Le CE2 A (24 élèves) fait une enquête : <i>« Comment viens-tu à l'école ? »</i></p>
<table>
<tr><th>Moyen</th><th>Effectif</th></tr>
<tr><td>🚶 à pied</td><td>9</td></tr>
<tr><td>🚗 en voiture</td><td>7</td></tr>
<tr><td>🚌 car scolaire</td><td>5</td></tr>
<tr><td>🚲 à vélo</td><td>3</td></tr>
</table>
<p>Contrôle : 9 + 7 + 5 + 3 = <b>24</b> ✔. Le mode est <b>à pied</b>. Conclusion : plus d'un tiers de la classe vient à pied… et la classe propose à la mairie un <b>pédibus</b> ! 🚸</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : la météo sur deux semaines",
      html: `<p>Chaque matin, Marta regarde le ciel et note le temps pendant 2 semaines (14 jours) :</p>
<ul>
<li>☀️ soleil : |||| | → <b>6</b></li>
<li>☁️ nuageux : |||| → <b>4</b></li>
<li>🌧️ pluie : ||| → <b>3</b></li>
<li>❄️ neige : | → <b>1</b></li>
</ul>
<p>Total 6 + 4 + 3 + 1 = 14 ✔. Le temps le plus fréquent (le mode) est le <b>soleil</b>. Il a plu la moitié des jours de soleil (3 est la moitié de 6).</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>En Italie, l'<b>ISTAT</b> fait une gigantesque enquête sur toute la population : le <b>recensement</b>. Aujourd'hui on le fait chaque année avec des échantillons de familles. Déjà les anciens <b>Romains</b> faisaient le recensement tous les 5 ans pour compter les citoyens : le magistrat qui s'en occupait s'appelait le <b>censeur</b> !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Le diagramme en barres et le diagramme circulaire ont été inventés par un Écossais, <b>William Playfair</b>, entre 1786 et 1801. Avant lui, les données s'écrivaient seulement dans de longs tableaux de nombres ! Et l'infirmière <b>Florence Nightingale</b> a utilisé des graphiques colorés en 1858 pour convaincre le gouvernement anglais d'améliorer l'hygiène dans les hôpitaux, sauvant énormément de vies. 🏥</p>`
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Enquête : question → recueil des données → tableau → graphique → conclusions.</li>
<li><b>Effectif</b> (<i>frequenza</i>) = combien de fois apparaît une réponse.</li>
<li><b>Mode</b> = la réponse la plus fréquente.</li>
<li>Dans le pictogramme, lis toujours la <b>légende</b> !</li>
<li>Le total des effectifs = le nombre de personnes interrogées.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les graphiques",
      intro: "Les graphiques te semblent des dessins mystérieux ? Voici d'autres façons de les voir et de les construire.",
      tabs: [
        {
          label: "🧱 Tours de briques",
          html: `<p>Construis un histogramme avec des <b>briques</b> ou des cubes ! Pour chaque enfant qui vote « chien », tu mets un cube sur la tour du chien, et ainsi de suite.</p>
<p>À la fin, mets les tours en file : la plus haute est le <b>mode</b> ! Ici, les cubes forment une tour : change les nombres et essaie d'imaginer les tours pour chaque réponse.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 8, b: 1 }
        },
        {
          label: "🙋 Graphique humain",
          html: `<p>On peut faire un graphique… avec des personnes ! Au gymnase ou dans la cour :</p>
<ol>
<li>dessinez au sol à la craie les catégories (chien, chat, lapin, poisson) ;</li>
<li>chaque enfant se met <b>en file</b> derrière sa réponse ;</li>
<li>regardez d'en haut (ou prenez une photo depuis la fenêtre) : les files sont les <b>colonnes</b> de l'histogramme ! 📸</li>
</ol>
<p>Ainsi on comprend que chaque carreau du graphique est <b>une vraie personne</b>.</p>`
        },
        {
          label: "🔢 Compte avec les bâtons",
          html: `<p>Essaie de compter comme les statisticiens : ajoute un 🖊️ pour chaque réponse et arrête-toi quand tu as fini. Toutes les 5, fais un paquet !</p>
<p>Dans beaucoup de pays, les bâtons se font différemment : en <b>Chine et au Japon</b>, on écrit le caractère <b>正</b> (qui a 5 traits), un trait pour chaque vote ; en <b>Amérique latine</b>, on dessine un carré avec une diagonale (4 côtés + 1 = 5).</p>`,
          widget: "counter",
          options: { emoji: "🖊️", max: 30 }
        },
        {
          label: "🥧 Le diagramme circulaire",
          html: `<p>Si la classe est un <b>gâteau entier</b>, chaque réponse prend une <b>part</b>. Avec 20 enfants : le chien (8 votes) prend presque la moitié du gâteau, le lapin (3) une petite part.</p>
<p>C'est une façon très utilisée dans les journaux et à la télé, et elle te servira quand tu étudieras les fractions et les pourcentages !</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<path d="M150 130 L150 30 A100 100 0 0 1 209 211 Z" fill="#f97316"/>
<path d="M150 130 L209 211 A100 100 0 0 1 69 189 Z" fill="#3b82f6"/>
<path d="M150 130 L69 189 A100 100 0 0 1 55 99 Z" fill="#22c55e"/>
<path d="M150 130 L55 99 A100 100 0 0 1 150 30 Z" fill="#a855f7"/>
<circle cx="150" cy="130" r="100" fill="none" stroke="#1f2937" stroke-width="3"/>
<g font-size="20" fill="#1f2937">
<rect x="300" y="50" width="22" height="22" fill="#f97316"/><text x="332" y="68">chien 8</text>
<rect x="300" y="90" width="22" height="22" fill="#3b82f6"/><text x="332" y="108">chat 5</text>
<rect x="300" y="130" width="22" height="22" fill="#22c55e"/><text x="332" y="148">lapin 3</text>
<rect x="300" y="170" width="22" height="22" fill="#a855f7"/><text x="332" y="188">poisson 4</text>
</g>
<text x="300" y="230" font-size="18" fill="#475569">gâteau entier = 20 enfants</text>
</svg>`
        },
        {
          label: "🕵️ Le détective des données",
          html: `<p>Pense à l'enquête comme au travail d'un <b>détective</b> 🔍 :</p>
<ul>
<li>le <b>mystère</b> est la question ;</li>
<li>les <b>indices</b> sont les données que tu recueilles ;</li>
<li>le <b>carnet</b> est le tableau ;</li>
<li>le <b>tableau d'affichage</b> avec les photos reliées est le graphique ;</li>
<li>la <b>solution</b> de l'affaire est la conclusion !</li>
</ul>
<p>Un bon détective ne saute aucun indice et n'en invente pas : le statisticien aussi doit compter <b>toutes</b> les données, honnêtement.</p>`
        },
        {
          "label": "🇺🇸 Le « line plot » avec des croix (USA)",
          "html": "<p>Dans les écoles des <b>États-Unis</b>, en deuxième et troisième année, on apprend le <b>line plot</b> : un graphique très rapide à faire, avec une <b>ligne de nombres</b> et beaucoup de <b>croix</b>.</p><ol><li>Pose une question avec des réponses <b>numériques</b> : « Combien de frères et sœurs as-tu ? ».</li><li>Dessine une ligne et écris dessous les nombres possibles : 0, 1, 2, 3.</li><li>Pour chaque réponse, mets une <b>✕ au-dessus du nombre</b>, les unes sur les autres.</li><li>Lis le graphique : 3 enfants n'ont pas de frères et sœurs, 6 en ont 1, 4 en ont 2, 1 en a 3.</li></ol><p>La colonne de croix la plus haute est le <b>mode</b> : ici c'est <b>1</b>. En comptant toutes les croix, tu sais combien d'enfants ont répondu : 3 + 6 + 4 + 1 = <b>14</b>.</p><p>🎯 Fais un line plot de ta classe avec la question : « Combien de lettres a ton prénom ? ».</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><line x1=\"60\" y1=\"240\" x2=\"540\" y2=\"240\" stroke=\"#334155\" stroke-width=\"3\"/><line x1=\"120\" y1=\"232\" x2=\"120\" y2=\"248\" stroke=\"#334155\" stroke-width=\"3\"/><text x=\"120\" y=\"272\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">0</text><text x=\"120\" y=\"222\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"120\" y=\"192\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"120\" y=\"162\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"240\" y1=\"232\" x2=\"240\" y2=\"248\" stroke=\"#334155\" stroke-width=\"3\"/><text x=\"240\" y=\"272\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"240\" y=\"222\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"240\" y=\"192\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"240\" y=\"162\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"240\" y=\"132\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"240\" y=\"102\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"240\" y=\"72\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"360\" y1=\"232\" x2=\"360\" y2=\"248\" stroke=\"#334155\" stroke-width=\"3\"/><text x=\"360\" y=\"272\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><text x=\"360\" y=\"222\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"360\" y=\"192\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"360\" y=\"162\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"360\" y=\"132\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"480\" y1=\"232\" x2=\"480\" y2=\"248\" stroke=\"#334155\" stroke-width=\"3\"/><text x=\"480\" y=\"272\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">3</text><text x=\"480\" y=\"222\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"300\" y=\"296\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">Combien de frères et sœurs as-tu ?</text><text x=\"400\" y=\"70\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">La colonne la plus haute</text><text x=\"400\" y=\"90\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">c'est le mode : 1</text></svg>"
        },
        {
          "label": "🇬🇧 La « rose » de Florence Nightingale (Angleterre)",
          "html": "<p><b>Florence Nightingale</b> était une infirmière <b>anglaise</b>. Pendant la guerre de Crimée (1853–1856), elle soignait les soldats et s'est aperçue que beaucoup tombaient malades à cause de la <b>saleté</b> des hôpitaux. Pour convaincre le gouvernement de les nettoyer, en 1858 elle a dessiné un nouveau graphique, en forme de <b>rose</b> : un cercle divisé en <b>12 parts</b>, une pour chaque mois. Plus la part est longue, plus le nombre est grand. Grâce aussi à ses graphiques, les hôpitaux sont devenus plus propres et plus sûrs.</p><p>Construis la <b>rose des anniversaires</b> de ta classe :</p><ol><li>Dessine au compas plusieurs cercles de même centre, à 1, 2, 3, 4 carreaux : chaque cercle vaut <b>1 enfant</b>.</li><li>Divise le cercle en <b>12 parts</b> égales (comme les heures de l'horloge) et écris les mois.</li><li>Pour chaque mois, colorie la part jusqu'au bon cercle : si en mai 4 enfants ont leur anniversaire, tu vas jusqu'au quatrième cercle.</li></ol><p>D'un coup d'œil, tu vois le mois avec le plus d'anniversaires. En août, il n'y a personne !</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fdf2f8\"/><circle cx=\"200\" cy=\"150\" r=\"30\" fill=\"none\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><circle cx=\"200\" cy=\"150\" r=\"60\" fill=\"none\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><circle cx=\"200\" cy=\"150\" r=\"90\" fill=\"none\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><circle cx=\"200\" cy=\"150\" r=\"120\" fill=\"none\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><path d=\"M200,150 L200,90 A60,60 0 0 1 230,98 Z\" fill=\"#60a5fa\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"235.7\" y=\"21.7\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">J</text><path d=\"M200,150 L215,124 A30,30 0 0 1 226,135 Z\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"297.6\" y=\"57.4\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">F</text><path d=\"M200,150 L277.9,105 A90,90 0 0 1 290,150 Z\" fill=\"#34d399\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"333.3\" y=\"119.3\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">M</text><path d=\"M200,150 L260,150 A60,60 0 0 1 252,180 Z\" fill=\"#fbbf24\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"333.3\" y=\"190.7\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><path d=\"M200,150 L303.9,210 A120,120 0 0 1 260,253.9 Z\" fill=\"#60a5fa\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"297.6\" y=\"252.6\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">M</text><path d=\"M200,150 L215,176 A30,30 0 0 1 200,180 Z\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"235.7\" y=\"288.3\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">J</text><path d=\"M200,150 L200,210 A60,60 0 0 1 170,202 Z\" fill=\"#34d399\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"164.3\" y=\"288.3\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">J</text><text x=\"102.4\" y=\"252.6\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><path d=\"M200,150 L122.1,195 A90,90 0 0 1 110,150 Z\" fill=\"#60a5fa\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"66.7\" y=\"190.7\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">S</text><path d=\"M200,150 L140,150 A60,60 0 0 1 148,120 Z\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"66.7\" y=\"119.3\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">O</text><path d=\"M200,150 L174,135 A30,30 0 0 1 185,124 Z\" fill=\"#34d399\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"102.4\" y=\"57.4\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">N</text><path d=\"M200,150 L170,98 A60,60 0 0 1 200,90 Z\" fill=\"#fbbf24\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"164.3\" y=\"21.7\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">D</text><text x=\"370\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Anniversaires de la classe</text><text x=\"370\" y=\"90\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">• 12 parts = 12 mois</text><text x=\"370\" y=\"114\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">• chaque part = 30°</text><text x=\"370\" y=\"138\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">• 1 cercle = 1 enfant</text><text x=\"370\" y=\"172\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Mai a la part</text><text x=\"370\" y=\"194\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">la plus longue : 4 enfants !</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de l'enquête : touche un nœud et découvre pourquoi",
      nodes: [
        { id: "domanda", label: "Question", x: 50, y: 6, color: "#f59e0b", html: "Ce que nous voulons découvrir sur un groupe.", why: "Chaque enquête naît d'une curiosité ou d'un besoin : savoir combien de personnes il y a, ce qu'elles préfèrent, de quoi elles ont besoin." },
        { id: "gruppo", label: "Groupe (population)", x: 18, y: 24, color: "#64748b", html: "Les personnes, les animaux ou les choses à qui nous demandons.", why: "En statistique, le groupe s'appelle « population » même s'il s'agit… d'arbres ou de voitures ! Quand le groupe est énorme, on n'en choisit qu'une partie, l'« échantillon »." },
        { id: "dati", label: "Données", x: 50, y: 30, color: "#16a34a", html: "Les réponses recueillies : des mots ou des nombres.", why: "« Donnée » veut dire « ce qui est donné », c'est-à-dire la réponse qui nous est donnée. Sans vraies données, les conclusions ne sont que des opinions." },
        { id: "tacche", label: "Bâtons", x: 82, y: 24, color: "#0ea5e9", html: "Petits traits pour compter, par paquets de 5.", why: "C'est l'une des plus anciennes façons de compter : l'os d'Ishango, trouvé en Afrique centrale et vieux d'environ 20 000 ans, porte des rangées d'encoches gravées." },
        { id: "tabella", label: "Tableau et effectif", x: 50, y: 52, color: "#2563eb", html: "Pour chaque réponse, on écrit combien de fois elle apparaît.", why: "Mettre les données en ordre en lignes et colonnes les rend faciles à compter et à contrôler : le total doit tomber juste." },
        { id: "grafici", label: "Graphiques", x: 25, y: 74, color: "#a855f7", html: "Histogramme, pictogramme, à carreaux, circulaire.", why: "Le cerveau comprend plus vite un dessin qu'une liste de nombres. William Playfair a inventé le diagramme en barres en 1786 et le circulaire en 1801." },
        { id: "moda", label: "Mode", x: 75, y: 74, color: "#ec4899", html: "La réponse la plus fréquente.", why: "On l'appelle ainsi parce qu'il indique ce qui est « à la mode », c'est-à-dire le choix le plus répandu dans le groupe." },
        { id: "conclusioni", label: "Conclusions", x: 50, y: 93, color: "#14b8a6", html: "Ce que nous avons découvert et ce que nous pouvons faire.", why: "Les enquêtes servent à prendre des décisions : les mairies décident où faire des écoles et des routes, les médecins quels soins marchent le mieux." }
      ],
      edges: [
        ["domanda", "gruppo", "à qui je demande ?"],
        ["domanda", "dati", "les réponses sont des"],
        ["dati", "tacche", "se comptent avec des"],
        ["dati", "tabella", "s'ordonnent dans un"],
        ["tabella", "grafici", "se dessinent en"],
        ["tabella", "moda", "on y trouve le"],
        ["grafici", "conclusioni", "aident à tirer des"],
        ["moda", "conclusioni", "mène aux"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : le mode et les graphiques",
      questions: [
        { type: "mc", q: "Dans l'exemple « Comment viens-tu à l'école ? », quel est le mode ?", options: ["en voiture", "à pied", "à vélo"], answer: 1, explain: "« À pied » a l'effectif le plus élevé : 9." },
        { type: "tf", q: "Dans un histogramme, les colonnes doivent avoir des largeurs différentes.", answer: false, explain: "Toutes les colonnes ont la même largeur : seule la hauteur change." },
        { type: "num", q: "Avec la légende « 1 🍎 = 2 enfants », combien d'enfants indiquent 4 pommes ?", answer: 8, explain: "4 × 2 = 8 enfants." }
      ]
    }
  ],
  glossary: [
    { t: "Enquête statistique", d: "Recherche pour découvrir des informations sur un groupe en recueillant des données." },
    { t: "Données", d: "Les réponses recueillies pendant l'enquête." },
    { t: "Effectif (frequenza)", d: "Combien de fois apparaît une réponse." },
    { t: "Tableau", d: "Schéma en lignes et colonnes où l'on range les données." },
    { t: "Histogramme", d: "Graphique en colonnes : chaque colonne est aussi haute que l'effectif." },
    { t: "Pictogramme (ideogramma)", d: "Graphique fait de symboles ; chaque symbole vaut ce que dit la légende." },
    { t: "Légende", d: "Explication de ce que vaut chaque symbole ou couleur d'un graphique." },
    { t: "Mode (moda)", d: "La réponse dont l'effectif est le plus élevé." },
    { t: "Recensement", d: "Enquête qui compte toute la population d'un pays." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Mets dans l'ordre les étapes d'une enquête.", items: ["Choisir la question", "Recueillir les données", "Ranger les données dans un tableau", "Dessiner le graphique", "Tirer les conclusions"], explain: "D'abord on décide quoi demander, puis on recueille, on compte, on dessine et on interprète les données." },
      { type: "text", q: "Comment s'appelle la réponse qui apparaît le plus de fois ?", answer: ["mode", "le mode", "moda", "la moda"], explain: "La réponse la plus fréquente est le mode." },
      { type: "mc", q: "Un graphique fait de petits dessins s'appelle…", options: ["histogramme", "pictogramme", "tableau"], answer: 1, explain: "Le pictogramme utilise des symboles." },
      { type: "num", q: "Combien de votes indique ce paquet de bâtons : 卌 卌 || ?", answer: 12, explain: "Deux paquets de 5 = 10, plus 2 traits = 12." },
      { type: "tf", q: "Le total des effectifs doit être égal au nombre de personnes interrogées.", answer: true, explain: "Chaque personne donne une réponse : en les additionnant, on les retrouve toutes." },
      { type: "num", q: "Légende : 1 ⭐ = 5 enfants. Combien d'enfants indiquent 3 étoiles ?", answer: 15, explain: "3 × 5 = 15." },
      { type: "mc", q: "Quelle question donne une réponse avec un nombre ?", options: ["Quelle est ta couleur préférée ?", "Combien d'animaux as-tu à la maison ?", "Quel est ton sport préféré ?"], answer: 1, explain: "« Combien » demande un nombre." },
      { type: "num", q: "Pizza 7, pâtes 6, risotto 2 : combien d'enfants ont répondu en tout ?", answer: 15, explain: "7 + 6 + 2 = 15." },
      { type: "num", q: "Pizza 7, pâtes 6, risotto 2 : combien d'enfants de plus préfèrent la pizza au risotto ?", answer: 5, explain: "7 − 2 = 5." },
      { type: "tf", q: "Dans le pictogramme, chaque symbole vaut toujours 1.", answer: false, explain: "Cela dépend de la légende : il peut valoir 1, 2, 5, 10…" },
      { type: "mc", q: "Qui a inventé le diagramme en barres ?", options: ["William Playfair", "Léonard de Vinci", "Galilée"], answer: 0, explain: "L'Écossais William Playfair, en 1786." }
    ]
  }
});
