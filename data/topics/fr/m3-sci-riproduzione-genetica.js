TOPIC('fr', {
  id: "m3-sci-riproduzione-genetica",
  title: "Reproduction et génétique",
  intro: "Pourquoi ressembles-tu à tes parents sans être identique à eux ? Pourquoi deux frères peuvent-ils avoir les yeux de couleurs différentes ? La réponse est écrite dans une très longue molécule présente dans chacune de tes cellules : l'<b>ADN</b>. Dans cette leçon, nous verrons comment se reproduisent les êtres vivants, comment fonctionne la reproduction humaine et comment se transmettent les caractères, des expériences de <b>Mendel</b> jusqu'à la double hélice.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Deux façons de se reproduire",
      html: `<p>Tous les êtres vivants se reproduisent, c'est-à-dire qu'ils engendrent de nouveaux individus de la même espèce. Il y a deux stratégies :</p>
<table>
<tr><th>Reproduction asexuée</th><th>Reproduction sexuée</th></tr>
<tr><td>Il suffit d'<b>un seul parent</b>. Les descendants sont des <b>copies identiques</b> (clones).</td><td>Il faut <b>deux parents</b>, qui produisent des cellules spéciales, les <b>gamètes</b>. Les descendants sont <b>différents</b> des parents et entre eux.</td></tr>
<tr><td>Exemples : la <b>scissiparité</b> des bactéries ; le <b>bourgeonnement</b> de l'hydre et de la levure ; la <b>fragmentation</b> de l'étoile de mer ; chez les plantes, les <b>boutures</b>, les <b>tubercules</b> (pomme de terre), les <b>stolons</b> (fraisier).</td><td>Exemples : presque tous les animaux et les plantes à fleurs. La <b>fécondation</b> est l'union d'un gamète mâle et d'un gamète femelle, qui forme le <b>zygote</b>.</td></tr>
<tr><td>✅ rapide, pas besoin de partenaire<br>❌ aucune variété : une maladie peut frapper tout le monde</td><td>✅ grande <b>variabilité</b> : certains individus peuvent s'adapter aux changements du milieu<br>❌ plus lente et « coûteuse »</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Asexuée ou sexuée ?",
      widget: "classify",
      options: {
        groups: ["🧬 Asexuée (un parent, clones)", "💞 Sexuée (deux gamètes)"],
        items: [
          ["🦠 Une bactérie qui se divise en deux", 0],
          ["🌱 Une bouture de géranium qui prend racine", 0],
          ["🐸 Les œufs de grenouille fécondés", 1],
          ["🍓 Un fraisier qui produit des stolons", 0],
          ["🌸 Une fleur pollinisée par une abeille", 1],
          ["⭐ Un bras d'étoile de mer qui fait repousser un corps entier", 0],
          ["🐣 La naissance d'un poussin", 1],
          ["🍞 La levure qui forme des bourgeons", 0]
        ]
      },
      caption: "Touche un exemple, puis le bon groupe."
    },
    {
      type: "text",
      title: "2. Chromosomes, mitose et méiose",
      html: `<p>Dans le <b>noyau</b> de chaque cellule, l'ADN est enroulé en structures appelées <b>chromosomes</b>. Les cellules humaines en ont <b>46</b>, c'est-à-dire <b>23 paires</b> : dans chaque paire, un chromosome vient de la mère et un du père. 22 paires sont identiques chez les garçons et chez les filles (les <b>autosomes</b>) ; la 23e est celle des <b>chromosomes sexuels</b> : <b>XX</b> chez les filles, <b>XY</b> chez les garçons.</p>
<p>Les cellules se divisent de deux façons :</p>
<ul>
<li>La <b>mitose</b> : à partir d'1 cellule naissent <b>2 cellules identiques</b>, avec 46 chromosomes chacune. Elle sert à grandir et à réparer les tissus (une plaie qui se referme).</li>
<li>La <b>méiose</b> : elle n'a lieu que dans les organes reproducteurs. À partir d'1 cellule naissent <b>4 gamètes</b> avec <b>la moitié des chromosomes</b> : 23. Pendant la méiose, les chromosomes échangent des morceaux (<b>crossing-over</b>) : ainsi chaque gamète est unique.</li>
</ul>
<p>À la fécondation : 23 (spermatozoïde) + 23 (ovule) = <b>46</b> chromosomes dans le zygote. Le sexe dépend du spermatozoïde : s'il porte un X, c'est une fille (XX) ; s'il porte un Y, un garçon (XY). La probabilité est d'environ 1/2.</p>`
    },
    {
      type: "3d",
      title: "À l'intérieur de la cellule : où se trouve l'ADN",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#86efac", label: "Membrane cellulaire" },
          { r: 0.97, color: "#dcfce7", label: "Cytoplasme (avec les ribosomes, où se fabriquent les protéines)" },
          { r: 0.45, color: "#a78bfa", label: "Membrane nucléaire" },
          { r: 0.42, color: "#7c3aed", label: "Noyau : 46 chromosomes d'ADN" },
          { r: 0.12, color: "#f472b6", label: "Nucléole" }
        ]
      },
      caption: "L'ADN d'une seule cellule humaine, déroulé, mesurerait environ 2 mètres, mais il tient dans un noyau de quelques millièmes de millimètre."
    },
    {
      type: "text",
      title: "3. La reproduction humaine",
      html: `<p>Avec la <b>puberté</b> (en général entre 9 et 14 ans, plus tôt chez les filles), le corps change sous l'effet des <b>hormones sexuelles</b> et les organes reproducteurs deviennent capables de produire des gamètes.</p>
<p><b>Appareil reproducteur masculin</b> : les <b>testicules</b> produisent les <b>spermatozoïdes</b> (à partir de la puberté, des millions chaque jour) et l'hormone <b>testostérone</b>. Les spermatozoïdes parcourent les canaux déférents, se mélangent aux liquides produits par les vésicules séminales et la prostate (formant le sperme) et sortent par le <b>pénis</b> en passant par l'urètre.</p>
<p><b>Appareil reproducteur féminin</b> : les <b>ovaires</b> contiennent les <b>ovules</b> (déjà présents à la naissance) et produisent les <b>œstrogènes</b> et la <b>progestérone</b>. Environ une fois par mois, un ovule mûr est libéré (<b>ovulation</b>) et passe dans la <b>trompe de Fallope</b>. L'<b>utérus</b> prépare une paroi riche en vaisseaux sanguins ; s'il n'y a pas de fécondation, cette paroi se détache : ce sont les <b>règles</b>. Le <b>cycle menstruel</b> dure en moyenne environ 28 jours.</p>
<p><b>De la fécondation à la naissance</b> :</p>
<ol>
<li>la <b>fécondation</b> a lieu dans la trompe : un spermatozoïde entre dans l'ovule → <b>zygote</b> ;</li>
<li>le zygote se divise par mitose et, après environ une semaine, s'<b>implante</b> dans la paroi de l'utérus : c'est l'<b>embryon</b> ;</li>
<li>se forment le <b>placenta</b> et le <b>cordon ombilical</b>, qui apportent l'oxygène et les nutriments de la mère ;</li>
<li>à partir du troisième mois, on parle de <b>fœtus</b> : tous les organes sont ébauchés et grandissent ;</li>
<li>après environ <b>9 mois</b> (40 semaines comptées à partir des dernières règles) a lieu l'<b>accouchement</b>.</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : reproduction et chromosomes",
      questions: [
        { type: "num", q: "Combien de chromosomes a un gamète humain ?", answer: 23, explain: "Les gamètes ont la moitié des chromosomes : 23." },
        { type: "mc", q: "À quoi sert la mitose ?", options: ["À produire les gamètes", "À grandir et à réparer les tissus", "À changer l'ADN"], answer: 1, explain: "La mitose produit des cellules identiques pour la croissance et la réparation." },
        { type: "mc", q: "Où a lieu généralement la fécondation chez la femme ?", options: ["Dans l'ovaire", "Dans la trompe de Fallope", "Dans le placenta"], answer: 1, explain: "Le spermatozoïde rencontre l'ovule dans la trompe." },
        { type: "tf", q: "Le sexe du bébé dépend du chromosome (X ou Y) porté par le spermatozoïde.", answer: true, explain: "L'ovule porte toujours un X ; le spermatozoïde, un X ou un Y." }
      ]
    },
    {
      type: "text",
      title: "4. L'ADN, la molécule de la vie",
      html: `<p>L'<b>ADN</b> (acide désoxyribonucléique) est une longue molécule en forme de <b>double hélice</b>, comme un escalier en colimaçon :</p>
<ul>
<li>les deux « rampes » sont faites de sucre et de phosphate ;</li>
<li>les « marches » sont des paires de <b>bases azotées</b> : <b>A</b> (adénine), <b>T</b> (thymine), <b>G</b> (guanine), <b>C</b> (cytosine). Elles s'apparient toujours de la même façon : <b>A avec T</b> et <b>G avec C</b>.</li>
</ul>
<p>La séquence des bases est un <b>code</b>, comme les lettres d'un livre. Un <b>gène</b> est un tronçon d'ADN qui contient les instructions pour fabriquer une <b>protéine</b> (par exemple l'hémoglobine du sang ou le pigment des yeux). Les bases se lisent par groupes de trois (<b>triplets</b>) : chaque triplet désigne une brique de la protéine, un acide aminé.</p>
<p>L'ADN humain compte environ <b>3 milliards de paires de bases</b> et environ <b>20 000 gènes</b>. Imprimé, il remplirait environ 200 volumes d'annuaire téléphonique ! Le <b>Projet génome humain</b> l'a presque entièrement lu en <b>2003</b>.</p>
<p>Comme A va avec T et G avec C, chaque brin est le « moule » de l'autre : quand la cellule se divise, la double hélice s'ouvre et chaque moitié reconstruit celle qui manque. Ainsi l'ADN se <b>copie</b>.</p>`
    },
    {
      type: "3d",
      title: "La double hélice en 3D",
      scene: "molecule",
      options: {"atoms":[{"x":1,"y":-1.8,"z":0,"r":0.17,"color":"#64748b"},{"x":0.38,"y":-1.8,"z":0,"r":0.2,"color":"#ef4444","label":"A"},{"x":-0.38,"y":-1.8,"z":0,"r":0.2,"color":"#f59e0b","label":"T"},{"x":-1,"y":-1.8,"z":0,"r":0.17,"color":"#64748b"},{"x":0.81,"y":-1.4,"z":0.59,"r":0.17,"color":"#64748b"},{"x":0.31,"y":-1.4,"z":0.22,"r":0.2,"color":"#f59e0b","label":"T"},{"x":-0.31,"y":-1.4,"z":-0.22,"r":0.2,"color":"#ef4444","label":"A"},{"x":-0.81,"y":-1.4,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":0.31,"y":-1,"z":0.95,"r":0.17,"color":"#64748b"},{"x":0.12,"y":-1,"z":0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":-0.12,"y":-1,"z":-0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":-0.31,"y":-1,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":-0.6,"z":0.95,"r":0.17,"color":"#64748b"},{"x":-0.12,"y":-0.6,"z":0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":0.12,"y":-0.6,"z":-0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":0.31,"y":-0.6,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":-0.81,"y":-0.2,"z":0.59,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":-0.2,"z":0.22,"r":0.2,"color":"#22c55e","label":"G"},{"x":0.31,"y":-0.2,"z":-0.22,"r":0.2,"color":"#3b82f6","label":"C"},{"x":0.81,"y":-0.2,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":-1,"y":0.2,"z":0,"r":0.17,"color":"#64748b"},{"x":-0.38,"y":0.2,"z":0,"r":0.2,"color":"#f59e0b","label":"T"},{"x":0.38,"y":0.2,"z":0,"r":0.2,"color":"#ef4444","label":"A"},{"x":1,"y":0.2,"z":0,"r":0.17,"color":"#64748b"},{"x":-0.81,"y":0.6,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":0.6,"z":-0.22,"r":0.2,"color":"#ef4444","label":"A"},{"x":0.31,"y":0.6,"z":0.22,"r":0.2,"color":"#f59e0b","label":"T"},{"x":0.81,"y":0.6,"z":0.59,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":1,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":-0.12,"y":1,"z":-0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":0.12,"y":1,"z":0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":0.31,"y":1,"z":0.95,"r":0.17,"color":"#64748b"},{"x":0.31,"y":1.4,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":0.12,"y":1.4,"z":-0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":-0.12,"y":1.4,"z":0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":-0.31,"y":1.4,"z":0.95,"r":0.17,"color":"#64748b"},{"x":0.81,"y":1.8,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":0.31,"y":1.8,"z":-0.22,"r":0.2,"color":"#ef4444","label":"A"},{"x":-0.31,"y":1.8,"z":0.22,"r":0.2,"color":"#f59e0b","label":"T"},{"x":-0.81,"y":1.8,"z":0.59,"r":0.17,"color":"#64748b"}],"bonds":[[0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[0,4],[3,7],[8,9],[9,10],[10,11],[4,8],[7,11],[12,13],[13,14],[14,15],[8,12],[11,15],[16,17],[17,18],[18,19],[12,16],[15,19],[20,21],[21,22],[22,23],[16,20],[19,23],[24,25],[25,26],[26,27],[20,24],[23,27],[28,29],[29,30],[30,31],[24,28],[27,31],[32,33],[33,34],[34,35],[28,32],[31,35],[36,37],[37,38],[38,39],[32,36],[35,39]]},
      caption: "Modèle simplifié de 10 marches d'ADN : les rampes grises sont faites de sucre-phosphate ; les boules colorées sont les bases. Fais tourner l'hélice et vérifie : A (rouge) va toujours avec T (orange), G (vert) avec C (bleu). Un tour complet de l'hélice compte environ 10 marches."
    },
    {
      type: "example",
      title: "Exemple pratique : complète le brin",
      html: `<p>Un brin d'ADN a la séquence : <b>A T G C C A T</b>.</p>
<p>Le brin complémentaire s'écrit en remplaçant A↔T et G↔C : <b>T A C G G T A</b>.</p>
<p>C'est exactement ce que fait la cellule avant de se diviser. À toi : quel est le complémentaire de <b>G G A T C</b> ? (Réponse : C C T A G.)</p>
<p>La même logique est utilisée dans le <b>test ADN</b> de la police scientifique et dans les tests de paternité : on compare des tronçons d'ADN qui varient beaucoup d'une personne à l'autre.</p>`
    },
    {
      type: "text",
      title: "5. Mendel et les lois de l'hérédité",
      html: `<p><b>Gregor Mendel</b> était un moine augustin qui vivait dans le monastère de Brno (aujourd'hui en République tchèque). Entre 1856 et 1863, il cultiva environ <b>28 000 plants de pois</b>, en étudiant 7 caractères (couleur et forme de la graine, couleur de la fleur, hauteur de la plante…). Il publia ses résultats en <b>1866</b>, mais personne ne les comprit avant <b>1900</b>, quand ils furent redécouverts.</p>
<p>Aujourd'hui nous utilisons ces mots :</p>
<ul>
<li><b>allèle</b> : chaque version d'un gène (par ex. « graine jaune » J et « graine verte » j). Chacun de nous a <b>2 allèles</b> pour chaque gène, un par parent ;</li>
<li><b>dominant</b> (lettre majuscule) : il se manifeste même s'il n'est présent qu'une fois ; <b>récessif</b> (minuscule) : il ne se manifeste que s'il est présent deux fois ;</li>
<li><b>homozygote</b> : deux allèles identiques (JJ ou jj) ; <b>hétérozygote</b> : différents (Jj) ;</li>
<li><b>génotype</b> : les allèles que l'on possède ; <b>phénotype</b> : le caractère visible.</li>
</ul>
<p><b>Les trois lois de Mendel</b> :</p>
<ol>
<li><b>Dominance</b> (uniformité) : en croisant des plantes pures jaunes (JJ) et vertes (jj), tous les descendants (F1) sont Jj, donc <b>jaunes</b>.</li>
<li><b>Ségrégation</b> : en croisant entre eux les descendants Jj, les petits-enfants (F2) sont JJ, Jj, jJ, jj → <b>3 jaunes : 1 vert</b>. Le caractère vert « caché » réapparaît !</li>
<li><b>Assortiment indépendant</b> : des caractères différents (couleur et forme de la graine) se transmettent de façon indépendante → en F2, des proportions de <b>9 : 3 : 3 : 1</b>.</li>
</ol>`
    },
    {
      type: "svg",
      title: "L'échiquier de Punnett : Jj × Jj",
      svg: `<svg viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="330" fill="#f7fee7"/>
<text x="300" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#14532d">Gamètes du père →</text>
<text x="40" y="195" font-size="18" text-anchor="middle" font-weight="bold" fill="#14532d" transform="rotate(-90 40 195)">Gamètes de la mère →</text>
<rect x="200" y="45" width="120" height="50" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<rect x="320" y="45" width="120" height="50" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="260" y="78" font-size="24" text-anchor="middle" font-weight="bold">J</text>
<text x="380" y="78" font-size="24" text-anchor="middle" font-weight="bold">j</text>
<rect x="80" y="95" width="120" height="100" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<rect x="80" y="195" width="120" height="100" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="140" y="153" font-size="24" text-anchor="middle" font-weight="bold">J</text>
<text x="140" y="253" font-size="24" text-anchor="middle" font-weight="bold">j</text>
<rect x="200" y="95" width="120" height="100" fill="#fef9c3" stroke="#166534" stroke-width="2"/>
<rect x="320" y="95" width="120" height="100" fill="#fef9c3" stroke="#166534" stroke-width="2"/>
<rect x="200" y="195" width="120" height="100" fill="#fef9c3" stroke="#166534" stroke-width="2"/>
<rect x="320" y="195" width="120" height="100" fill="#dcfce7" stroke="#166534" stroke-width="2"/>
<circle cx="260" cy="130" r="22" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<circle cx="380" cy="130" r="22" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<circle cx="260" cy="230" r="22" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<circle cx="380" cy="230" r="22" fill="#22c55e" stroke="#166534" stroke-width="2"/>
<text x="260" y="178" font-size="20" text-anchor="middle">JJ</text>
<text x="380" y="178" font-size="20" text-anchor="middle">Jj</text>
<text x="260" y="278" font-size="20" text-anchor="middle">Jj</text>
<text x="380" y="278" font-size="20" text-anchor="middle">jj</text>
<text x="460" y="150" font-size="16" fill="#713f12">3 jaunes</text>
<text x="460" y="172" font-size="16" fill="#713f12">(JJ, Jj, Jj)</text>
<text x="460" y="240" font-size="16" fill="#14532d">1 vert (jj)</text>
<text x="300" y="320" font-size="15" text-anchor="middle" fill="#334155">Chaque case a une probabilité de 1/4 : jaune 3/4 = 75 %, vert 1/4 = 25 %</text>
</svg>`,
      caption: "L'échiquier de Punnett (inventé par Reginald Punnett en 1905) combine tous les gamètes possibles des deux parents."
    },
    {
      type: "example",
      title: "Exemple pratique : les groupes sanguins",
      html: `<p>Le groupe sanguin ABO dépend d'un gène à 3 allèles : <b>A</b> et <b>B</b> sont tous deux dominants sur <b>O</b>, et entre eux ils sont <b>codominants</b> (s'ils sont présents tous les deux, on les voit tous les deux : groupe AB).</p>
<p>Maman de groupe A avec le génotype <b>AO</b>, papa de groupe B avec le génotype <b>BO</b>. Gamètes de la maman : A ou O ; du papa : B ou O. L'échiquier de Punnett donne :</p>
<table><tr><th></th><th>B</th><th>O</th></tr>
<tr><th>A</th><td>AB → groupe <b>AB</b></td><td>AO → groupe <b>A</b></td></tr>
<tr><th>O</th><td>BO → groupe <b>B</b></td><td>OO → groupe <b>O</b></td></tr></table>
<p>Chaque enfant a <b>1/4</b> de probabilité pour chaque groupe : dans cette famille, les enfants pourraient avoir les quatre groupes différents ! Connaître son groupe sanguin est fondamental pour les <b>transfusions</b> : c'est pourquoi donner son sang (à partir de la majorité) est si important.</p>`
    },
    {
      type: "text",
      title: "6. Mutations et maladies génétiques",
      html: `<p>Une <b>mutation</b> est un changement dans l'ADN. Elle peut naître d'une erreur pendant la copie ou être causée par des <b>agents mutagènes</b> : les rayons ultraviolets du Soleil, les radiations, certaines substances chimiques comme celles de la <b>fumée de cigarette</b>. Beaucoup de mutations n'ont aucun effet ; certaines sont nuisibles ; peu sont avantageuses et elles sont le « moteur » de l'évolution.</p>
<ul>
<li>Les <b>maladies récessives</b>, comme la <b>mucoviscidose</b> : elles ne se manifestent que si l'on reçoit deux allèles mutés. Celui qui n'en a qu'un seul est un <b>porteur sain</b> : en Italie, environ 1 personne sur 25–30.</li>
<li>Les <b>caractères liés au chromosome X</b>, comme le <b>daltonisme</b> (difficulté à distinguer le rouge et le vert) : il touche environ 8 % des garçons et moins de 1 % des filles. Les garçons n'ont qu'un X : s'il est muté, le caractère se manifeste ; les filles en ont deux, et le second « compense » généralement.</li>
<li>Les <b>variations du nombre de chromosomes</b> : dans le <b>syndrome de Down</b>, il y a un chromosome 21 en plus (47 chromosomes). Il fut découvert par le médecin français Jérôme Lejeune en 1959. Les personnes porteuses du syndrome de Down étudient, travaillent, font du sport et ont, comme tout le monde, des talents et des caractères différents.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Associe le mot à sa signification",
      widget: "match",
      options: {
        pairs: [
          ["Allèle", "Une version d'un gène"],
          ["Génotype", "Les allèles que tu possèdes (par ex. Jj)"],
          ["Phénotype", "Le caractère que l'on voit (par ex. jaune)"],
          ["Homozygote", "Deux allèles identiques"],
          ["Hétérozygote", "Deux allèles différents"],
          ["Récessif", "On ne le voit que s'il est présent deux fois"]
        ]
      },
      caption: "Le vocabulaire de la génétique : associe chaque terme."
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La photo qui révéla la double hélice",
      html: `<p>En 1953, <b>James Watson</b> et <b>Francis Crick</b> publièrent le modèle en double hélice de l'ADN. Ils y parvinrent aussi grâce à une photographie aux rayons X, la célèbre <b>« Photo 51 »</b>, obtenue par <b>Rosalind Franklin</b> et son étudiant Raymond Gosling. En 1962, Watson, Crick et Maurice Wilkins reçurent le Nobel ; Franklin était morte en 1958, à seulement 37 ans, et sa contribution n'a été pleinement reconnue que bien plus tard.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Jumeaux et ciseaux moléculaires",
      html: `<p>Les <b>vrais jumeaux</b> (monozygotes) naissent d'un seul zygote qui se divise en deux : ils ont le même ADN, mais pas les mêmes empreintes digitales ! Les <b>faux jumeaux</b> naissent de deux ovules fécondés par deux spermatozoïdes différents : ils se ressemblent comme deux frères quelconques.</p>
<p>En 2012, <b>Jennifer Doudna</b> et <b>Emmanuelle Charpentier</b> ont mis au point <b>CRISPR</b>, des « ciseaux » moléculaires qui coupent l'ADN à un endroit précis : on s'en sert dans la recherche pour soigner des maladies génétiques. Elles ont reçu le prix Nobel de chimie en 2020.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la génétique",
      intro: "La génétique se comprend mieux quand on la « voit ». Essaie l'un de ces points de vue.",
      tabs: [
        {
          label: "📖 L'ADN comme un livre de recettes",
          html: `<p>Imagine l'ADN comme un énorme <b>livre de recettes</b> conservé dans la cuisine (le noyau) :</p>
<ul>
<li>les <b>lettres</b> sont les 4 bases A, T, G, C ;</li>
<li>les <b>mots</b> de 3 lettres (triplets) désignent un ingrédient (un acide aminé) ;</li>
<li>une <b>recette</b> est un gène : elle dit comment préparer un plat, c'est-à-dire une protéine ;</li>
<li>les <b>chapitres</b> sont les chromosomes : 46 volumes, en 23 paires (un exemplaire de maman, un de papa) ;</li>
<li>une <b>mutation</b> est une faute d'impression : parfois elle ne change rien, parfois elle gâche le plat, parfois elle en invente un nouveau et délicieux.</li>
</ul>
<p>Si tu as deux versions d'une recette (deux allèles) et que l'une est « plus forte », c'est celle-là qui arrive sur la table : c'est la <b>dominance</b>.</p>`
        },
        {
          label: "🇺🇸 Méthode « en branches » (forked-line)",
          html: `<p>Dans les écoles américaines, pour les croisements avec <b>deux caractères</b>, au lieu d'un échiquier de 16 cases on utilise la <b>méthode en branches</b> : on calcule chaque caractère séparément, puis on multiplie les probabilités (parce que les caractères sont indépendants, troisième loi de Mendel).</p>
<p>Croisement JjLl × JjLl (J = jaune, L = lisse) :</p>
<ul>
<li>couleur : 3/4 jaune, 1/4 vert ;</li>
<li>forme : 3/4 lisse, 1/4 ridé.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<text x="80" y="80" font-size="17" text-anchor="middle" font-weight="bold" fill="#a16207">3/4 jaune</text>
<text x="80" y="200" font-size="17" text-anchor="middle" font-weight="bold" fill="#15803d">1/4 vert</text>
<line x1="135" y1="75" x2="230" y2="45" stroke="#334155" stroke-width="3"/>
<line x1="135" y1="75" x2="230" y2="110" stroke="#334155" stroke-width="3"/>
<line x1="135" y1="195" x2="230" y2="165" stroke="#334155" stroke-width="3"/>
<line x1="135" y1="195" x2="230" y2="230" stroke="#334155" stroke-width="3"/>
<text x="240" y="50" font-size="16" fill="#0f172a">3/4 lisse</text>
<text x="240" y="115" font-size="16" fill="#0f172a">1/4 ridé</text>
<text x="240" y="170" font-size="16" fill="#0f172a">3/4 lisse</text>
<text x="240" y="235" font-size="16" fill="#0f172a">1/4 ridé</text>
<text x="360" y="50" font-size="16" fill="#0f172a">→ jaune lisse = <tspan font-weight="bold">9/16</tspan></text>
<text x="360" y="115" font-size="16" fill="#0f172a">→ jaune ridé = <tspan font-weight="bold">3/16</tspan></text>
<text x="360" y="170" font-size="16" fill="#0f172a">→ vert lisse = <tspan font-weight="bold">3/16</tspan></text>
<text x="360" y="235" font-size="16" fill="#0f172a">→ vert ridé = <tspan font-weight="bold">1/16</tspan></text>
</svg>`
        },
        {
          label: "🧬 La double hélice à faire tourner",
          html: `<p>Fais tourner l'hélice et observe les paires de bases : c'est comme une fermeture éclair torsadée. Quand la cellule se divise, la fermeture s'ouvre et chaque moitié se referme avec de nouvelles bases : A appelle T, G appelle C. On obtient ainsi deux copies identiques.</p>`,
          scene: "molecule",
          options: {"atoms":[{"x":1,"y":-1.8,"z":0,"r":0.17,"color":"#64748b"},{"x":0.38,"y":-1.8,"z":0,"r":0.2,"color":"#ef4444","label":"A"},{"x":-0.38,"y":-1.8,"z":0,"r":0.2,"color":"#f59e0b","label":"T"},{"x":-1,"y":-1.8,"z":0,"r":0.17,"color":"#64748b"},{"x":0.81,"y":-1.4,"z":0.59,"r":0.17,"color":"#64748b"},{"x":0.31,"y":-1.4,"z":0.22,"r":0.2,"color":"#f59e0b","label":"T"},{"x":-0.31,"y":-1.4,"z":-0.22,"r":0.2,"color":"#ef4444","label":"A"},{"x":-0.81,"y":-1.4,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":0.31,"y":-1,"z":0.95,"r":0.17,"color":"#64748b"},{"x":0.12,"y":-1,"z":0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":-0.12,"y":-1,"z":-0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":-0.31,"y":-1,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":-0.6,"z":0.95,"r":0.17,"color":"#64748b"},{"x":-0.12,"y":-0.6,"z":0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":0.12,"y":-0.6,"z":-0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":0.31,"y":-0.6,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":-0.81,"y":-0.2,"z":0.59,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":-0.2,"z":0.22,"r":0.2,"color":"#22c55e","label":"G"},{"x":0.31,"y":-0.2,"z":-0.22,"r":0.2,"color":"#3b82f6","label":"C"},{"x":0.81,"y":-0.2,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":-1,"y":0.2,"z":0,"r":0.17,"color":"#64748b"},{"x":-0.38,"y":0.2,"z":0,"r":0.2,"color":"#f59e0b","label":"T"},{"x":0.38,"y":0.2,"z":0,"r":0.2,"color":"#ef4444","label":"A"},{"x":1,"y":0.2,"z":0,"r":0.17,"color":"#64748b"},{"x":-0.81,"y":0.6,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":0.6,"z":-0.22,"r":0.2,"color":"#ef4444","label":"A"},{"x":0.31,"y":0.6,"z":0.22,"r":0.2,"color":"#f59e0b","label":"T"},{"x":0.81,"y":0.6,"z":0.59,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":1,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":-0.12,"y":1,"z":-0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":0.12,"y":1,"z":0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":0.31,"y":1,"z":0.95,"r":0.17,"color":"#64748b"},{"x":0.31,"y":1.4,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":0.12,"y":1.4,"z":-0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":-0.12,"y":1.4,"z":0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":-0.31,"y":1.4,"z":0.95,"r":0.17,"color":"#64748b"},{"x":0.81,"y":1.8,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":0.31,"y":1.8,"z":-0.22,"r":0.2,"color":"#ef4444","label":"A"},{"x":-0.31,"y":1.8,"z":0.22,"r":0.2,"color":"#f59e0b","label":"T"},{"x":-0.81,"y":1.8,"z":0.59,"r":0.17,"color":"#64748b"}],"bonds":[[0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[0,4],[3,7],[8,9],[9,10],[10,11],[4,8],[7,11],[12,13],[13,14],[14,15],[8,12],[11,15],[16,17],[17,18],[18,19],[12,16],[15,19],[20,21],[21,22],[22,23],[16,20],[19,23],[24,25],[25,26],[26,27],[20,24],[23,27],[28,29],[29,30],[30,31],[24,28],[27,31],[32,33],[33,34],[34,35],[28,32],[31,35],[36,37],[37,38],[38,39],[32,36],[35,39]]}
        },
        {
          label: "🎲 Avec des dés et des pièces",
          html: `<p>Fais une expérience : deux camarades sont les parents <b>Jj</b>. Chacun lance une pièce : <b>pile = J</b>, <b>face = j</b>. Les deux pièces ensemble donnent le génotype de l'« enfant ». Recommencez 40 fois et comptez : vous obtiendrez environ 10 JJ, 20 Jj et 10 jj, soit environ <b>30 jaunes et 10 verts (3:1)</b>. C'est exactement ce que vit Mendel : l'hérédité suit les lois de la <b>probabilité</b>, parce que chaque gamète reçoit au hasard l'un des deux allèles.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de la génétique : touche les nœuds et découvre le pourquoi",
      nodes: [
        { id: "riproduzione", label: "Reproduction", x: 50, y: 6, color: "#ec4899", html: "Asexuée (un parent, clones) ou sexuée (deux gamètes, variabilité).", why: "La reproduction sexuée, apparue il y a plus d'un milliard d'années, mélange les gènes à chaque génération : la variabilité aide les espèces à survivre aux changements et aux maladies." },
        { id: "meiosi", label: "Méiose et gamètes", x: 20, y: 28, color: "#f97316", html: "Division qui produit 4 gamètes à 23 chromosomes.", why: "Si les gamètes avaient 46 chromosomes, à chaque génération le nombre doublerait. La méiose fut observée pour la première fois par Oscar Hertwig en 1876 dans des œufs d'oursin." },
        { id: "cromosomi", label: "Chromosomes", x: 80, y: 28, color: "#a855f7", html: "46 chez l'être humain, en 23 paires ; XX ou XY.", why: "Ils furent vus au microscope au XIXe siècle ; en 1902, Walter Sutton et Theodor Boveri comprirent qu'ils se comportent exactement comme les « facteurs » de Mendel. Le nombre exact, 46, ne fut compté qu'en 1956 (Tjio et Levan)." },
        { id: "mendel", label: "Lois de Mendel", x: 20, y: 55, color: "#16a34a", html: "Dominance, ségrégation, assortiment indépendant.", why: "<b>Gregor Mendel</b> les déduisit des pois en comptant des milliers de graines et en utilisant les mathématiques (publiées en 1866). Elles furent redécouvertes en 1900 par de Vries, Correns et Tschermak." },
        { id: "dna", label: "ADN", x: 80, y: 55, color: "#2563eb", html: "La molécule en double hélice qui contient l'information héréditaire.", why: "Isolé par Friedrich Miescher en 1869 ; Avery démontra en 1944 que c'est le matériel génétique ; sa structure fut découverte en 1953 par <b>Watson et Crick</b> grâce aux images de <b>Rosalind Franklin</b>." },
        { id: "gene", label: "Gènes et allèles", x: 50, y: 45, color: "#0ea5e9", html: "Tronçons d'ADN avec les instructions pour une protéine ; les versions s'appellent allèles.", why: "Le mot « gène » fut inventé en 1909 par le Danois Wilhelm Johannsen. Les allèles existent parce qu'avec le temps les mutations ont créé des versions différentes d'un même gène." },
        { id: "fenotipo", label: "Phénotype", x: 50, y: 75, color: "#facc15", html: "Les caractères visibles, fruits du génotype et du milieu.", why: "Les protéines fabriquées par les gènes déterminent couleur, forme et fonctions ; mais le milieu compte aussi : la taille dépend des gènes et de l'alimentation." },
        { id: "mutazioni", label: "Mutations", x: 82, y: 85, color: "#ef4444", html: "Changements dans la séquence de l'ADN.", why: "La copie de l'ADN est très précise mais pas parfaite, et les UV, les radiations et les substances chimiques peuvent l'endommager. Sans mutations, il n'y aurait ni nouveaux allèles ni évolution." },
        { id: "biotech", label: "Biotechnologies", x: 18, y: 88, color: "#64748b", html: "Tests génétiques, insuline produite par des bactéries, CRISPR.", why: "En connaissant le code, on peut lire et modifier l'ADN : depuis 1982, l'insuline des diabétiques est produite par des bactéries modifiées ; en 2012 est né CRISPR. Les usages et les limites se décident aussi avec la <b>bioéthique</b>." }
      ],
      edges: [
        ["riproduzione", "meiosi", "la sexuée utilise la"],
        ["meiosi", "cromosomi", "divise par deux les"],
        ["cromosomi", "dna", "sont faits d'"],
        ["dna", "gene", "contient les"],
        ["mendel", "gene", "découvrit les « facteurs » ="],
        ["gene", "fenotipo", "déterminent le"],
        ["dna", "mutazioni", "peut subir des"],
        ["mutazioni", "gene", "créent de nouveaux allèles"],
        ["dna", "biotech", "est lu et modifié par les"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : ADN et Mendel",
      questions: [
        { type: "text", q: "Avec quelle base la G s'apparie-t-elle toujours ?", answer: ["c", "cytosine", "la cytosine"], explain: "G (guanine) s'apparie avec C (cytosine)." },
        { type: "mc", q: "Dans le croisement Jj × Jj, quelle probabilité un enfant a-t-il d'être jj ?", options: ["0", "1/4", "1/2", "3/4"], answer: 1, explain: "Une case sur quatre de l'échiquier de Punnett." },
        { type: "tf", q: "Un individu Jj a la graine verte.", answer: false, explain: "J (jaune) est dominant : le phénotype est jaune." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Reproduction <b>asexuée</b> = clones ; <b>sexuée</b> = gamètes + fécondation = variabilité.</li>
<li>Cellules humaines : <b>46 chromosomes</b> (23 paires) ; gamètes : <b>23</b>. Mitose → 2 cellules identiques ; méiose → 4 gamètes.</li>
<li>ADN : double hélice ; bases <b>A–T</b> et <b>G–C</b> ; un <b>gène</b> = instructions pour une protéine.</li>
<li>Mendel : dominance, ségrégation (3:1), assortiment indépendant (9:3:3:1).</li>
<li>Génotype = allèles ; phénotype = caractère visible.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Gamète", d: "Cellule reproductrice avec la moitié des chromosomes : spermatozoïde ou ovule." },
    { t: "Zygote", d: "La première cellule du nouvel individu, née de la fécondation." },
    { t: "Chromosome", d: "Structure du noyau formée d'ADN enroulé autour de protéines." },
    { t: "Mitose", d: "Division cellulaire qui produit deux cellules identiques." },
    { t: "Méiose", d: "Division qui produit quatre gamètes avec la moitié des chromosomes." },
    { t: "ADN", d: "Acide désoxyribonucléique : la molécule qui contient l'information génétique." },
    { t: "Gène", d: "Tronçon d'ADN qui contient les instructions pour une protéine." },
    { t: "Allèle", d: "Chacune des formes alternatives d'un gène." },
    { t: "Dominant / récessif", d: "Allèle qui se manifeste toujours / seulement en double exemplaire." },
    { t: "Génotype", d: "L'ensemble des allèles d'un individu." },
    { t: "Phénotype", d: "L'ensemble des caractères observables." },
    { t: "Mutation", d: "Changement dans la séquence de l'ADN." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Lequel de ces exemples est une reproduction asexuée ?", options: ["La fécondation d'un ovule", "La bouture d'une plante", "La pollinisation d'une fleur"], answer: 1, explain: "D'une bouture naît une plante identique à la plante mère." },
      { type: "num", q: "Combien de chromosomes a une cellule de la peau humaine ?", answer: 46, explain: "Les cellules du corps ont 46 chromosomes (23 paires)." },
      { type: "mc", q: "La méiose produit…", options: ["2 cellules identiques à 46 chromosomes", "4 gamètes à 23 chromosomes", "1 zygote"], answer: 1, explain: "La méiose produit 4 gamètes haploïdes." },
      { type: "text", q: "Écris le brin complémentaire de ATTGC.", answer: ["taacg"], explain: "A↔T, G↔C : TAACG." },
      { type: "tf", q: "L'ADN a la forme d'une double hélice.", answer: true, explain: "Comme un escalier en colimaçon." },
      { type: "mc", q: "Qui découvrit les lois de l'hérédité en étudiant les pois ?", options: ["Charles Darwin", "Gregor Mendel", "Francis Crick"], answer: 1, explain: "Gregor Mendel, publication de 1866." },
      { type: "mc", q: "En croisant JJ × jj, les descendants sont…", options: ["tous Jj (jaunes)", "moitié jaunes et moitié verts", "tous jj (verts)"], answer: 0, explain: "Première loi : uniformité de la F1." },
      { type: "mc", q: "Dans le croisement Jj × Jj, quel rapport entre jaunes et verts faut-il attendre ?", options: ["1:1", "3:1", "9:3:3:1"], answer: 1, explain: "Deuxième loi : 3 jaunes et 1 vert." },
      { type: "mc", q: "Maman AO et papa BO : quel groupe sanguin un enfant NE peut-il PAS avoir ?", options: ["AB", "O", "Aucun : tous sont possibles"], answer: 2, explain: "L'échiquier donne AB, A, B et O, chacun avec une probabilité de 1/4." },
      { type: "tf", q: "Le daltonisme est plus fréquent chez les garçons parce qu'ils n'ont qu'un seul chromosome X.", answer: true, explain: "Avec un seul X, un allèle muté suffit pour que le caractère se manifeste." },
      { type: "order", q: "Mets dans l'ordre les étapes du développement.", items: ["Fécondation", "Zygote", "Embryon implanté dans l'utérus", "Fœtus", "Accouchement"], explain: "Du zygote à l'embryon, puis au fœtus et à la naissance." },
      { type: "text", q: "Comment s'appelle le caractère visible d'un individu (par opposition au génotype) ?", answer: ["phénotype", "le phénotype", "phenotype"], explain: "Le phénotype." }
    ]
  }
});
