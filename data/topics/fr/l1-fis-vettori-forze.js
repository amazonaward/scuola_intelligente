TOPIC('fr', {
  id: "l1-fis-vettori-forze",
  title: "Vecteurs et forces",
  intro: "Si je te dis « marche 5 mètres », cela ne suffit pas pour que tu arrives à un endroit précis : je dois aussi te dire <b>dans quelle direction</b> et <b>dans quel sens</b>. Certaines grandeurs physiques, comme la <b>force</b>, ont besoin de ces informations et se décrivent par des <b>vecteurs</b>. Dans cette leçon, nous apprenons à additionner des vecteurs et à connaître trois forces fondamentales de la mécanique : le <b>poids</b>, la <b>force élastique</b> (loi de Hooke) et les <b>frottements</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Grandeurs scalaires et vectorielles",
      html: `<p>Les grandeurs physiques se répartissent en deux grandes familles :</p>
<ul>
<li><b>Grandeurs scalaires</b> : elles sont décrites par un <b>nombre accompagné d'une unité</b>. Exemples : masse (3 kg), temps (5 s), température (20 °C), énergie, volume.</li>
<li><b>Grandeurs vectorielles</b> : il faut une <b>norme</b> (combien elle vaut), une <b>direction</b> (la droite sur laquelle elle agit) et un <b>sens</b> (de quel côté), et parfois aussi un <b>point d'application</b>. Exemples : déplacement, vitesse, accélération, <b>force</b>.</li>
</ul>
<p>Un <b>vecteur</b> se représente par une <b>flèche</b> : sa longueur est proportionnelle à la norme, la droite qui le porte donne la direction, la pointe indique le sens. On le note par une lettre surmontée d'une flèche (<b>v⃗</b>, <b>F⃗</b>) ; sa norme s'écrit v ou ‖v⃗‖.</p>
<p>Deux vecteurs sont <b>égaux</b> s'ils ont la même norme, la même direction et le même sens, même s'ils ont des points d'application différents. Le vecteur <b>opposé</b> de v⃗ a la même norme et la même direction, mais le sens contraire (−v⃗).</p>`
    },
    {
      type: "widget",
      title: "Scalaire ou vecteur ?",
      widget: "classify",
      options: { groups: ["Scalaire", "Vecteur"], items: [
        ["Masse", 0],
        ["Force", 1],
        ["Temps", 0],
        ["Vitesse", 1],
        ["Température", 0],
        ["Déplacement", 1],
        ["Volume", 0],
        ["Accélération", 1]
      ] },
      caption: "S'il faut aussi savoir « dans quelle direction et dans quel sens », c'est un vecteur."
    },
    {
      type: "text",
      title: "Somme de vecteurs",
      html: `<p>Additionner deux vecteurs, c'est trouver l'effet <b>global</b> (le <b>vecteur résultant</b>). On n'additionne pas simplement les normes !</p>
<p><b>Méthode « bout à bout » (relation de Chasles).</b> On trace le premier vecteur ; à partir de sa pointe, on trace le second ; le vecteur somme va de l'origine du premier à la pointe du second.</p>
<p><b>Méthode du parallélogramme.</b> On trace les deux vecteurs à partir de la même origine et on complète le parallélogramme : la <b>diagonale</b> issue de l'origine est la somme.</p>
<p><b>Cas particuliers</b> (les plus importants en début de lycée) :</p>
<table>
<tr><th>Situation</th><th>Norme de la somme</th></tr>
<tr><td>Même direction et même sens</td><td>on <b>additionne</b> les normes : R = a + b</td></tr>
<tr><td>Même direction, sens opposés</td><td>on <b>soustrait</b> les normes : R = |a − b|, dans le sens du plus grand</td></tr>
<tr><td>Directions perpendiculaires</td><td><b>théorème de Pythagore</b> : R = √(a² + b²)</td></tr>
</table>
<p>La <b>différence</b> a⃗ − b⃗ se calcule en ajoutant à a⃗ l'opposé de b⃗. Le produit d'un vecteur par un <b>nombre</b> k change sa norme (multipliée par |k|) et, si k est négatif, aussi son sens.</p>`
    },
    {
      type: "svg",
      title: "Somme de deux vecteurs",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="aR" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="aB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
<marker id="aG" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#16a34a"/></marker>
</defs>
<g font-family="sans-serif">
<text x="160" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Bout à bout</text>
<line x1="40" y1="230" x2="180" y2="230" stroke="#dc2626" stroke-width="4" marker-end="url(#aR)"/>
<line x1="180" y1="230" x2="250" y2="130" stroke="#2563eb" stroke-width="4" marker-end="url(#aB)"/>
<line x1="40" y1="230" x2="250" y2="130" stroke="#16a34a" stroke-width="5" marker-end="url(#aG)"/>
<text x="110" y="254" font-size="16" fill="#dc2626" font-weight="bold" text-anchor="middle">a</text>
<text x="235" y="190" font-size="16" fill="#2563eb" font-weight="bold">b</text>
<text x="120" y="160" font-size="16" fill="#16a34a" font-weight="bold">a + b</text>
<text x="480" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Parallélogramme</text>
<line x1="360" y1="230" x2="500" y2="230" stroke="#dc2626" stroke-width="4" marker-end="url(#aR)"/>
<line x1="360" y1="230" x2="430" y2="130" stroke="#2563eb" stroke-width="4" marker-end="url(#aB)"/>
<line x1="500" y1="230" x2="570" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="430" y1="130" x2="570" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="360" y1="230" x2="570" y2="130" stroke="#16a34a" stroke-width="5" marker-end="url(#aG)"/>
<text x="430" y="254" font-size="16" fill="#dc2626" font-weight="bold" text-anchor="middle">a</text>
<text x="385" y="175" font-size="16" fill="#2563eb" font-weight="bold">b</text>
<text x="480" y="165" font-size="16" fill="#16a34a" font-weight="bold">a + b</text>
</g>
</svg>`,
      caption: "Les deux méthodes donnent le même résultat : le vecteur somme est la diagonale du parallélogramme."
    },
    {
      type: "example",
      title: "Le tir à la corde et le bateau sur la rivière",
      html: `<p><b>Tir à la corde.</b> L'équipe A tire vers la gauche avec 800 N, l'équipe B vers la droite avec 650 N. Même direction, sens opposés : résultante = 800 − 650 = <b>150 N vers la gauche</b>. La corde se déplace vers A.</p>
<p><b>Le bateau.</b> Un bateau avance à 4,0 m/s <b>perpendiculairement</b> à la rive d'une rivière dont le courant va à 3,0 m/s. Sa vitesse par rapport à la rive vaut : √(4² + 3²) = √25 = <b>5,0 m/s</b>, inclinée vers l'aval. Le bateau arrive sur l'autre rive plus en aval que son point de départ.</p>
<p>Si au contraire les deux vecteurs étaient parallèles et de même sens, on aurait 4 + 3 = 7 m/s : la norme de la somme dépend de l'angle entre les vecteurs.</p>`
    },
    {
      type: "remember",
      title: "Coordonnées d'un vecteur",
      html: `<p>Un vecteur peut aussi être <b>décomposé</b> en deux vecteurs perpendiculaires (ses <b>composantes</b>), en général selon les axes x et y. Les composantes valent v<sub>x</sub> = v · cos θ et v<sub>y</sub> = v · sin θ, où θ est l'angle avec l'axe x (tu étudieras mieux la trigonométrie plus tard). Décomposer est l'opération inverse de la somme et permet d'additionner beaucoup de vecteurs : on additionne séparément les composantes x et les composantes y, puis on recompose avec Pythagore.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : vecteurs",
      questions: [
        { type: "num", q: "Deux forces perpendiculaires de 6 N et 8 N agissent sur le même point. Quelle est la norme de la résultante ?", answer: 10, tol: 0, unit: "N", explain: "√(6² + 8²) = √100 = 10 N." },
        { type: "num", q: "Deux forces de 15 N et 9 N agissent sur la même droite, en sens opposés. Quelle est la norme de la résultante ?", answer: 6, tol: 0, unit: "N", explain: "15 − 9 = 6 N, dans le sens de la plus grande force." },
        { type: "tf", q: "La norme de la somme de deux vecteurs est toujours égale à la somme de leurs normes.", answer: false, explain: "C'est le cas seulement s'ils ont la même direction et le même sens." }
      ]
    },
    {
      type: "text",
      title: "Qu'est-ce qu'une force ?",
      html: `<p>Une <b>force</b> est une grandeur vectorielle qui décrit l'interaction entre des corps. Elle peut produire deux effets :</p>
<ul>
<li><b>déformer</b> un corps (un ressort qui s'allonge, une boule d'argile qui s'écrase) ;</li>
<li><b>modifier le mouvement</b> d'un corps : le mettre en mouvement, l'arrêter, changer sa vitesse ou sa direction (un ballon frappé du pied).</li>
</ul>
<p>Son unité dans le Système international est le <b>newton</b> (N), en l'honneur d'Isaac Newton. Un newton correspond à peu près au poids d'une pomme de 100 g. L'instrument qui mesure les forces est le <b>dynamomètre</b>, fondé sur l'allongement d'un ressort.</p>
<p>On distingue les <b>forces de contact</b> (poussée d'une main, frottements, force élastique) et les <b>forces à distance</b> (poids, force magnétique, force électrique).</p>`
    },
    {
      type: "text",
      title: "Le poids",
      html: `<p>Le <b>poids</b> est la force avec laquelle une planète attire un corps vers son centre. Il se calcule par :</p>
<p style="text-align:center"><b>P = m · g</b></p>
<p>où <b>m</b> est la masse (kg) et <b>g</b> l'<b>intensité de la pesanteur</b> (ou accélération de la pesanteur), qui vaut en moyenne <b>9,8 m/s²</b> à la surface de la Terre (précisément 9,81 aux latitudes moyennes). Le poids est un <b>vecteur</b> : direction verticale, sens vers le bas (vers le centre de la Terre), point d'application au centre de gravité.</p>
<p><b>Masse et poids, ce n'est pas la même chose :</b></p>
<table>
<tr><th></th><th>Masse</th><th>Poids</th></tr>
<tr><td>Qu'est-ce que c'est ?</td><td>quantité de matière, inertie</td><td>force d'attraction gravitationnelle</td></tr>
<tr><td>Unité</td><td>kg</td><td>N</td></tr>
<tr><td>Type</td><td>scalaire</td><td>vecteur</td></tr>
<tr><td>Dépend-elle du lieu ?</td><td>non</td><td>oui (dépend de g)</td></tr>
<tr><td>Instrument</td><td>balance à plateaux</td><td>dynamomètre</td></tr>
</table>
<p>Valeurs de g : Terre 9,8 m/s² ; Lune ≈ 1,6 m/s² ; Mars ≈ 3,7 m/s² ; Jupiter ≈ 25 m/s². Une personne de 60 kg pèse environ 588 N sur Terre, 97 N sur la Lune. Sa <b>masse</b> reste de 60 kg partout.</p>`
    },
    {
      type: "widget",
      title: "Masse et poids dans le Système solaire",
      widget: "flashcards",
      options: { cards: [
        { front: "🌍 Terre, 60 kg", back: "g = 9,8 m/s² → P ≈ 588 N" },
        { front: "🌙 Lune, 60 kg", back: "g ≈ 1,6 m/s² → P ≈ 97 N" },
        { front: "🔴 Mars, 60 kg", back: "g ≈ 3,7 m/s² → P ≈ 222 N" },
        { front: "🪐 Jupiter, 60 kg", back: "g ≈ 25 m/s² → P ≈ 1500 N" },
        { front: "🚀 Espace lointain, 60 kg", back: "g ≈ 0 → poids ≈ 0, mais la masse reste de 60 kg" }
      ] },
      caption: "C'est le poids qui change, pas la masse. Retourne les cartes pour voir les valeurs."
    },
    {
      type: "text",
      title: "La force élastique et la loi de Hooke",
      html: `<p>Un <b>ressort</b> (ou un élastique) que l'on étire ou que l'on comprime tend à reprendre sa longueur initiale en exerçant une <b>force de rappel</b>, appelée <b>force élastique</b>. Le physicien anglais <b>Robert Hooke</b> a découvert que, tant que la déformation est petite, la force est <b>proportionnelle</b> à l'allongement :</p>
<p style="text-align:center"><b>F = k · Δx</b></p>
<ul>
<li><b>Δx</b> est l'allongement (ou la compression) du ressort par rapport à sa longueur à vide, en mètres ;</li>
<li><b>k</b> est la <b>constante de raideur</b> du ressort, en <b>N/m</b> : un ressort raide a un k grand, un ressort souple un k petit ;</li>
<li>la force est <b>toujours opposée</b> à la déformation (c'est pourquoi on écrit souvent F = −k·Δx).</li>
</ul>
<p>Au-delà de la <b>limite d'élasticité</b>, le ressort se déforme de façon permanente et la loi ne s'applique plus. Le dynamomètre fonctionne ainsi : plus le corps suspendu est lourd, plus le ressort s'allonge ; l'échelle est graduée en newtons.</p>
<p><b>Exemple.</b> Un ressort de raideur k = 50 N/m est allongé de 0,20 m : F = 50 × 0,20 = <b>10 N</b>. Pour l'allonger de 0,40 m, il faut 20 N (le double).</p>`
    },
    {
      type: "svg",
      title: "Le graphique d'un ressort",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fffbeb"/>
<g font-family="sans-serif">
<line x1="70" y1="250" x2="360" y2="250" stroke="#334155" stroke-width="3"/>
<line x1="70" y1="250" x2="70" y2="30" stroke="#334155" stroke-width="3"/>
<text x="215" y="285" font-size="15" text-anchor="middle" fill="#334155">allongement Δx (m)</text>
<text x="30" y="140" font-size="15" fill="#334155" transform="rotate(-90 30 140)" text-anchor="middle">force F (N)</text>
<line x1="70" y1="250" x2="270" y2="80" stroke="#d97706" stroke-width="5"/>
<line x1="270" y1="80" x2="340" y2="60" stroke="#dc2626" stroke-width="5" stroke-dasharray="8 6"/>
<g fill="#334155" font-size="14" text-anchor="middle"><text x="120" y="270">0,1</text><text x="170" y="270">0,2</text><text x="220" y="270">0,3</text></g>
<g fill="#334155" font-size="14" text-anchor="end"><text x="62" y="208">5</text><text x="62" y="165">10</text><text x="62" y="122">15</text></g>
<text x="170" y="100" font-size="15" fill="#92400e" font-weight="bold">pente = k</text>
<text x="300" y="120" font-size="14" fill="#991b1b">au-delà de la limite</text>
<text x="300" y="138" font-size="14" fill="#991b1b">d'élasticité</text>
<rect x="420" y="50" width="26" height="30" fill="#94a3b8"/>
<path d="M433 80 l-14 8 l28 12 l-28 12 l28 12 l-28 12 l28 12 l-14 8" stroke="#d97706" stroke-width="4" fill="none"/>
<rect x="415" y="168" width="36" height="34" rx="4" fill="#2563eb"/>
<text x="433" y="190" font-size="14" fill="#fff" text-anchor="middle">m</text>
<line x1="500" y1="100" x2="500" y2="168" stroke="#16a34a" stroke-width="3"/>
<text x="540" y="140" font-size="15" fill="#166534">Δx</text>
<line x1="433" y1="202" x2="433" y2="248" stroke="#dc2626" stroke-width="4"/>
<text x="470" y="236" font-size="15" fill="#991b1b" font-weight="bold">P = m·g</text>
</g>
</svg>`,
      caption: "Dans le domaine élastique, le graphique est une droite passant par l'origine : la force et l'allongement sont proportionnels."
    },
    {
      type: "text",
      title: "Les frottements",
      html: `<p>Quand deux surfaces sont en contact et que l'une tend à glisser sur l'autre, il apparaît une force qui s'<b>oppose</b> au glissement : les <b>frottements</b>. Cette force est parallèle aux surfaces et de sens opposé au mouvement (ou à la tendance au mouvement). Elle dépend de la <b>nature des surfaces</b> (rugosité) et de la force avec laquelle elles sont pressées l'une contre l'autre (la <b>réaction normale</b> N, perpendiculaire à la surface). Sur un plan horizontal, N = P = m·g.</p>
<ul>
<li><b>Frottement statique</b> (corps immobile) : il empêche le corps de se mettre en mouvement. Il augmente avec la force appliquée jusqu'à une valeur maximale : <b>F<sub>s,max</sub> = μ<sub>s</sub> · N</b>. Si la force dépasse cette valeur, le corps démarre.</li>
<li><b>Frottement dynamique</b> ou de glissement (corps en mouvement) : il vaut <b>F<sub>d</sub> = μ<sub>d</sub> · N</b>, constant. En général <b>μ<sub>d</sub> &lt; μ<sub>s</sub></b> : il est plus difficile de faire démarrer un meuble que de le maintenir en mouvement.</li>
<li><b>Frottement de roulement</b> : pour un corps qui roule (roue, bille), il est bien plus faible que le frottement de glissement : c'est pourquoi la roue est une grande invention.</li>
</ul>
<p>μ (prononcé « mu ») est le <b>coefficient de frottement</b>, un nombre sans unité qui ne dépend que des deux surfaces. Dans le modèle utilisé en début de lycée, les frottements <b>ne dépendent pas de l'aire de contact</b> ni de la vitesse.</p>
<p><b>Exemple.</b> Une caisse de 20 kg sur un sol horizontal, avec μ<sub>s</sub> = 0,5 et μ<sub>d</sub> = 0,4. N = 20 × 9,8 = 196 N. Pour la faire démarrer, il faut plus de 0,5 × 196 = <b>98 N</b> ; pour la maintenir en mouvement à vitesse constante, il suffit de 0,4 × 196 ≈ <b>78 N</b>.</p>`
    },
    {
      type: "example",
      title: "Peser avec un ressort",
      html: `<p>Un dynamomètre contient un ressort de raideur k = 40 N/m. Tu y suspends un sac à dos et le ressort s'allonge de 0,25 m. La force élastique compense le poids : P = k·Δx = 40 × 0,25 = <b>10 N</b>. La masse du sac est m = P/g = 10/9,8 ≈ <b>1,0 kg</b>. Si l'on emportait ce même sac sur la Lune, le ressort ne s'allongerait que d'environ 0,04 m (P ≈ 1,6 N) : le dynamomètre mesure le poids, pas la masse.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : poids, ressort, frottements",
      questions: [
        { type: "num", q: "Calcule le poids d'un corps de 5 kg sur Terre (g = 9,8 m/s²).", answer: 49, tol: 0.1, unit: "N", explain: "P = m · g = 5 × 9,8 = 49 N." },
        { type: "num", q: "Un ressort de raideur k = 200 N/m est allongé de 5 cm. Quelle est la valeur de la force élastique ?", answer: 10, tol: 0.01, unit: "N", explain: "Δx = 0,05 m ; F = 200 × 0,05 = 10 N." },
        { type: "mc", q: "Un bloc de 10 kg a μ_s = 0,3. Avec g = 10 m/s², quelle est environ la force minimale pour le faire démarrer ?", options: ["3 N", "30 N", "100 N", "300 N"], answer: 1, explain: "N = 100 N ; F = 0,3 × 100 = 30 N." }
      ]
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre vecteurs et forces",
      intro: "Un vecteur, c'est « une flèche qui a un sens physique ». Voyons-le sous d'autres angles.",
      tabs: [
        {
          label: "🗺️ Chasse au trésor",
          html: "<p>Un vecteur est une consigne de <b>déplacement</b> : « fais 3 pas vers l'est, puis 4 vers le nord ». Le vecteur somme est la consigne <b>directe</b> : tu te retrouves à 5 pas vers le nord-est (Pythagore : 3, 4, 5). Si au contraire tu fais 3 pas vers l'est et 3 vers l'ouest, tu es revenu au point de départ : somme nulle, même si tu as marché 6 pas.</p>"
        },
        {
          label: "⚖️ Équilibre des forces",
          html: "<p>Un lustre suspendu à deux câbles : son poids, vers le bas, est compensé par la somme des tensions des deux câbles, qui pointent vers le haut et un peu sur le côté. Quand <b>la somme vectorielle de toutes les forces est nulle</b>, le corps est en équilibre (tu l'étudieras dans le chapitre suivant). C'est pour cela que des câbles très inclinés sont plus tendus que le poids qu'ils soutiennent.</p>"
        },
        {
          label: "🔗 Associe force et formule",
          html: "<p>Relie chaque force à sa formule.</p>",
          widget: "match",
          options: { pairs: [
            ["Poids", "P = m · g"],
            ["Force élastique", "F = k · Δx"],
            ["Frottement dynamique", "F = μd · N"],
            ["Frottement statique maximal", "F = μs · N"]
          ] }
        },
        {
          label: "📊 Dessin des frottements",
          html: "<p>Le graphique montre comment le frottement statique augmente jusqu'à son maximum puis, dès que le corps glisse, redescend à la valeur dynamique.</p>",
          svg: "<svg viewBox='0 0 600 260' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='260' fill='#f0fdf4'/><g font-family='sans-serif'><line x1='60' y1='220' x2='560' y2='220' stroke='#334155' stroke-width='3'/><line x1='60' y1='220' x2='60' y2='20' stroke='#334155' stroke-width='3'/><path d='M60 220 L240 60 L260 100 L540 100' stroke='#16a34a' stroke-width='5' fill='none'/><line x1='240' y1='60' x2='240' y2='220' stroke='#94a3b8' stroke-width='2' stroke-dasharray='6 5'/><text x='300' y='248' font-size='14' fill='#334155' text-anchor='middle'>force appliquée</text><text x='30' y='120' font-size='14' fill='#334155' transform='rotate(-90 30 120)' text-anchor='middle'>frottement</text><text x='245' y='50' font-size='14' fill='#166534' text-anchor='middle'>maximum statique</text><text x='420' y='88' font-size='14' fill='#166534' text-anchor='middle'>frottement dynamique (constant)</text><text x='150' y='170' font-size='14' fill='#166534'>immobile</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Ut tensio, sic vis",
      html: `<p>Robert Hooke, pour qu'on ne lui vole pas ses découvertes, avait l'habitude de publier ses annonces sous forme d'<b>anagrammes</b>. En 1676, il publia <i>ceiiinosssttuv</i> ; ce n'est qu'en 1678 qu'il en révéla la solution : <b>« Ut tensio, sic vis »</b>, c'est-à-dire « telle l'extension, telle la force ». C'est la loi qui porte aujourd'hui son nom. C'est aussi lui qui employa pour la première fois le mot « cellule » en observant au microscope un morceau de liège.</p>`
    },
    {
      type: "curiosity",
      title: "Sauter sur la Lune",
      html: `<p>Sur la Lune, g vaut environ 1,6 m/s², soit environ <b>un sixième</b> de sa valeur sur Terre. Les astronautes d'Apollo, avec leur combinaison et leur sac de plusieurs dizaines de kg, pesaient six fois moins que sur Terre, mais leur <b>masse</b> était la même : c'est pourquoi mettre en mouvement ou arrêter un objet demandait le même effort que sur Terre (la masse mesure l'inertie), alors que le soulever en demandait beaucoup moins.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte des vecteurs et des forces",
      nodes: [
        { id: "vettore", label: "Vecteur", x: 50, y: 8, color: "#2563eb", html: "Flèche avec une norme, une direction et un sens.", why: "Certaines grandeurs (forces, vitesses) ont une orientation qui influence le résultat : deux poussées opposées s'annulent, deux poussées dans le même sens s'additionnent. Les vecteurs sont nés pour décrire cette réalité de façon géométrique." },
        { id: "somma", label: "Somme de vecteurs", x: 15, y: 42, color: "#16a34a", html: "Bout à bout ou parallélogramme ; Pythagore dans les cas perpendiculaires.", why: "La règle du parallélogramme était déjà connue de Newton et de Stevin : elle vient de l'observation expérimentale que deux forces appliquées au même point équivalent à une seule force « diagonale »." },
        { id: "forza", label: "Force", x: 50, y: 42, color: "#ef4444", html: "Grandeur vectorielle qui déforme ou modifie le mouvement (newton).", why: "Newton, dans les Principia (1687), fit de la force le concept central de la dynamique : elle est la cause des changements de mouvement. Avant lui, on pensait qu'un corps avait besoin d'une poussée continue pour se déplacer." },
        { id: "peso", label: "Poids", x: 85, y: 42, color: "#f59e0b", html: "P = m·g, vers le centre de la Terre.", why: "Le poids est un cas particulier de la gravitation universelle de Newton : tous les corps qui ont une masse s'attirent. Il dépend de g, donc il change d'une planète à l'autre, alors que la masse est une propriété du corps." },
        { id: "elastica", label: "Force élastique", x: 28, y: 80, color: "#8b5cf6", html: "F = k·Δx : loi de Hooke.", why: "Hooke observa (1676-78) que, pour de petites déformations, la force de rappel augmente proportionnellement à l'allongement : c'est le principe du dynamomètre et de tout ressort. Elle provient des forces électriques entre les atomes du matériau." },
        { id: "attrito", label: "Frottements", x: 72, y: 80, color: "#64748b", html: "Force qui s'oppose au glissement : statique, dynamique, de roulement.", why: "À l'échelle microscopique, les surfaces sont rugueuses et leurs aspérités s'accrochent ; de plus, des forces d'adhésion agissent entre les molécules. C'est pourquoi les frottements dépendent des matériaux et de la force qui les presse, et non de l'aire apparente." }
      ],
      edges: [["vettore", "somma", "se combinent par la"], ["vettore", "forza", "décrit la"], ["forza", "peso", "comprend le"], ["forza", "elastica", "comprend la"], ["forza", "attrito", "comprend les"], ["somma", "forza", "donne la résultante des"]]
    }
  ],
  glossary: [
    { t: "Grandeur scalaire", d: "Grandeur décrite par un seul nombre accompagné d'une unité." },
    { t: "Vecteur", d: "Grandeur qui a une norme, une direction et un sens, représentée par une flèche." },
    { t: "Norme", d: "Intensité (longueur) d'un vecteur." },
    { t: "Résultante", d: "Vecteur somme de plusieurs vecteurs." },
    { t: "Newton (N)", d: "Unité de force dans le SI : 1 N = 1 kg·m/s²." },
    { t: "Poids", d: "Force d'attraction gravitationnelle exercée sur un corps : P = m·g." },
    { t: "Constante de raideur", d: "Rapport k entre la force élastique et l'allongement du ressort, en N/m." },
    { t: "Frottements", d: "Force qui s'oppose au glissement entre deux surfaces en contact." },
    { t: "Réaction normale", d: "Force perpendiculaire à la surface d'appui, que la surface exerce sur le corps." },
    { t: "Dynamomètre", d: "Instrument qui mesure les forces grâce à l'allongement d'un ressort." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Laquelle de ces grandeurs est vectorielle ?", options: ["Masse", "Température", "Force", "Temps"], answer: 2, explain: "La force a une norme, une direction et un sens." },
      { type: "tf", q: "Deux vecteurs de même norme sont toujours égaux.", answer: false, explain: "Ils doivent aussi avoir la même direction et le même sens." },
      { type: "num", q: "Deux forces perpendiculaires de 9 N et 12 N agissent sur le même point. Calcule la norme de la résultante.", answer: 15, tol: 0, unit: "N", explain: "√(9² + 12²) = √225 = 15 N." },
      { type: "num", q: "Un corps de 8 kg : calcule son poids sur Terre (g = 9,8 m/s²).", answer: 78.4, tol: 0.1, unit: "N", explain: "P = 8 × 9,8 = 78,4 N." },
      { type: "mc", q: "Qu'est-ce qui change quand on emporte un objet sur la Lune ?", options: ["Ni la masse ni le poids", "La masse, pas le poids", "Le poids, pas la masse", "La masse et le poids"], answer: 2, explain: "La masse est une propriété du corps ; le poids dépend de g, qui sur la Lune vaut environ un sixième." },
      { type: "num", q: "Un ressort s'allonge de 0,12 m sous une force de 6 N. Calcule sa constante de raideur.", answer: 50, tol: 0.1, unit: "N/m", explain: "k = F/Δx = 6/0,12 = 50 N/m." },
      { type: "tf", q: "D'après la loi de Hooke, si l'on double l'allongement, la force élastique double (dans la limite d'élasticité).", answer: true, explain: "F = k·Δx : la force et l'allongement sont proportionnels." },
      { type: "mc", q: "En général, comment se situe le frottement dynamique par rapport au frottement statique maximal ?", options: ["Il est plus grand", "Il est plus petit", "Il est toujours égal", "Il est nul"], answer: 1, explain: "En général μ_d < μ_s : il est plus facile de maintenir un objet en mouvement que de le faire démarrer." },
      { type: "num", q: "Un bloc de 4 kg sur un plan horizontal (g = 9,8 m/s²) a μ_d = 0,25. Calcule la force de frottement dynamique.", answer: 9.8, tol: 0.1, unit: "N", explain: "N = 4 × 9,8 = 39,2 N ; F = 0,25 × 39,2 = 9,8 N." },
      { type: "order", q: "Range par ordre croissant le poids d'une personne de 60 kg sur les astres suivants.", items: ["Espace lointain", "Lune", "Mars", "Terre", "Jupiter"], explain: "Le poids augmente avec g : espace lointain (≈0) < Lune (1,6) < Mars (3,7) < Terre (9,8) < Jupiter (≈25 m/s²)." }
    ]
  }
});
