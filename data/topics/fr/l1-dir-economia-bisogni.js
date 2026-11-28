TOPIC('fr', {
  id: "l1-dir-economia-bisogni",
  title: "Économie : besoins, biens et services",
  intro: "Tu as 20 euros. Une place de cinéma, un casque audio, une pizza avec tes amis : tu ne peux pas tout avoir. Chaque jour, sans le savoir, tu fais des choix économiques. L'<b>économie</b> étudie justement cela : comment les personnes, les entreprises et les États choisissent d'utiliser des ressources <b>limitées</b> pour satisfaire des besoins <b>illimités</b>. Dans cette leçon, tu découvres ce que sont les <b>besoins</b>, les <b>biens</b> et les <b>services</b>, pourquoi les biens sont <b>rares</b> et ce que signifie faire un choix qui a un <b>coût d'opportunité</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Qu'est-ce que l'économie",
      html: `<p>Le mot vient du grec <i>oikonomia</i>, « administration de la maison » (<i>oikos</i> = maison, <i>nomos</i> = règle). Aujourd'hui, l'<b>économie</b> est la science qui étudie comment les personnes et les sociétés <b>utilisent des ressources rares</b> pour produire des biens et des services et les répartir entre les individus. Une définition célèbre a été donnée en 1932 par l'économiste anglais <b>Lionel Robbins</b> : l'économie étudie le comportement humain en tant que relation entre des <b>fins</b> et des <b>moyens rares</b> qui ont des usages alternatifs.</p>
<p>L'économie se divise en :</p>
<ul>
<li><b>microéconomie</b> : elle étudie le comportement des agents pris individuellement (un ménage, une entreprise) et la formation des prix sur les marchés ;</li>
<li><b>macroéconomie</b> : elle étudie les phénomènes de l'ensemble du système (production nationale, emploi, inflation, dette publique).</li>
</ul>
<p>On distingue ensuite l'économie <b>positive</b> (elle décrit les faits : « si le prix augmente, la demande diminue ») et l'économie <b>normative</b> (elle juge ce qu'il serait juste de faire : « l'État devrait augmenter les impôts des riches »). Le premier type d'affirmation peut être vérifié avec des données ; le second dépend aussi de valeurs.</p>`
    },
    {
      type: "text",
      title: "2. Les besoins",
      html: `<p>Le <b>besoin</b> est la sensation de manque de quelque chose, accompagnée du désir de la faire cesser. Les besoins humains sont pratiquement <b>illimités</b> : dès que tu en satisfais un, un autre apparaît (tu as faim, tu manges ; puis tu veux un dessert ; puis un meilleur restaurant). On les classe de plusieurs façons.</p>
<p><b>Selon leur importance :</b></p>
<ul>
<li><b>primaires</b> (ou vitaux) : indispensables à la survie : manger, boire, s'abriter du froid, se soigner ;</li>
<li><b>secondaires</b> (ou de confort) : non indispensables mais capables d'améliorer la vie : voyager, faire du sport, écouter de la musique, posséder un smartphone dernier cri.</li>
</ul>
<p><b>Selon le sujet :</b></p>
<ul>
<li><b>individuels</b> : ressentis par une seule personne (acheter un livre) ;</li>
<li><b>collectifs</b> : ressentis par toute une communauté et satisfaits par des services communs (sécurité, école, routes, justice, santé publique).</li>
</ul>
<p>Le psychologue américain <b>Abraham Maslow</b> (1943) a proposé une « pyramide » à cinq niveaux : besoins <b>physiologiques</b> (nourriture, sommeil), de <b>sécurité</b> (logement, santé, travail), d'<b>appartenance</b> (amis, famille, amour), d'<b>estime</b> (respect, réussite), d'<b>accomplissement de soi</b> (développer ses propres capacités). Selon Maslow, on cherche en général à satisfaire les besoins des niveaux inférieurs avant de passer aux niveaux supérieurs.</p>
<p>Les besoins dépendent de l'<b>époque, de la culture, de l'âge et du revenu</b> : aujourd'hui, Internet est pour beaucoup un besoin presque primaire ; il y a cinquante ans, il n'existait pas.</p>`
    },
    {
      type: "svg",
      title: "La pyramide des besoins de Maslow",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pyramide de Maslow à cinq niveaux">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<polygon points="300,15 245,65 355,65" fill="#e9d5ff" stroke="#7e22ce" stroke-width="2"/>
<text x="300" y="52" text-anchor="middle" font-size="14" font-weight="bold" fill="#581c87">Soi</text>
<polygon points="245,65 355,65 390,115 210,115" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/>
<text x="300" y="97" text-anchor="middle" font-size="14" font-weight="bold" fill="#831843">Estime</text>
<polygon points="210,115 390,115 425,165 175,165" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<text x="300" y="147" text-anchor="middle" font-size="14" font-weight="bold" fill="#7c2d12">Appartenance</text>
<polygon points="175,165 425,165 460,215 140,215" fill="#fef08a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="197" text-anchor="middle" font-size="14" font-weight="bold" fill="#713f12">Sécurité</text>
<polygon points="140,215 460,215 495,270 105,270" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<text x="300" y="248" text-anchor="middle" font-size="14" font-weight="bold" fill="#14532d">Physiologiques</text>
<text x="515" y="45" font-size="14" fill="#334155">S'accomplir</text>
<text x="515" y="150" font-size="14" fill="#334155">Relations</text>
<text x="515" y="250" font-size="14" fill="#334155">Survie</text>
</svg>`,
      caption: "Les besoins selon Maslow, de la base (survie) au sommet (accomplissement de soi)."
    },
    {
      type: "widget",
      title: "Primaires ou secondaires ?",
      widget: "classify",
      options: {
        groups: ["Besoin primaire", "Besoin secondaire"],
        items: [
          ["Boire de l'eau", 0],
          ["Jouer aux jeux vidéo", 1],
          ["Se soigner quand on est malade", 0],
          ["Partir en vacances à l'étranger", 1],
          ["Avoir un toit au-dessus de sa tête", 0],
          ["Acheter des vêtements de marque", 1],
          ["Manger", 0],
          ["Aller à un concert", 1]
        ]
      },
      caption: "Distingue ce qui est nécessaire à la vie de ce qui la rend plus agréable."
    },
    {
      type: "text",
      title: "3. Biens et services",
      html: `<p>Les besoins se satisfont avec des <b>biens</b> et des <b>services</b>.</p>
<p>Les <b>biens</b> sont les choses utiles pour satisfaire un besoin. On les classe ainsi :</p>
<ul>
<li><b>libres</b> : disponibles en quantité illimitée, ils n'exigent pas de travail pour être obtenus (l'air, la lumière du soleil) ; ils sont de moins en moins nombreux : l'eau propre, par exemple, a aujourd'hui un coût ;</li>
<li><b>économiques</b> : disponibles en quantité limitée, ils ont un <b>prix</b> et exigent du travail pour être produits. Ils sont l'objet de l'économie.</li>
</ul>
<p>Les biens économiques se divisent encore en :</p>
<ul>
<li>biens <b>matériels</b> (un vélo, le pain) et <b>immatériels</b> (un brevet, un logiciel, une marque) ;</li>
<li>biens <b>de consommation</b> : ils satisfont directement un besoin (un sandwich, une paire de chaussures) ; ils peuvent être <b>durables</b> (on les utilise plusieurs fois : lave-linge, téléphone) ou <b>non durables</b> (ils se consomment tout de suite : la nourriture) ;</li>
<li>biens <b>de production</b> (ou biens d'équipement, capital) : ils servent à produire d'autres biens (machines, ordinateurs d'une entreprise, un four) ;</li>
<li>biens <b>complémentaires</b> : ils s'utilisent ensemble (voiture et essence, stylo et encre) ;</li>
<li>biens <b>substituables</b> (ou substituts) : ils satisfont le même besoin et peuvent se remplacer (beurre et margarine, train et car).</li>
</ul>
<p>Les <b>services</b> sont des prestations, des activités qui satisfont un besoin sans produire d'objet : l'enseignement, la consultation médicale, le transport, la coupe de cheveux. Ils sont produits et consommés au même moment et ne peuvent pas être stockés.</p>`
    },
    {
      type: "example",
      title: "La journée de Sofia en biens et services",
      html: `<p>Sofia se réveille (<b>bien libre</b> : l'air, la lumière), boit son café avec du sucre (<b>biens de consommation non durables</b>, <b>complémentaires</b> entre eux). Elle va au lycée en bus (<b>service</b> de transport public) et étudie avec une tablette (<b>bien durable</b>). Son professeur fournit un <b>service</b> d'enseignement. La pizzeria utilise le four, un <b>bien de production</b>, pour cuire les pizzas. Si le prix du car augmente, Sofia pourrait préférer le train : les deux sont des <b>substituts</b>.</p>`
    },
    {
      type: "widget",
      title: "Bien ou service ?",
      widget: "classify",
      options: {
        groups: ["Bien", "Service"],
        items: [
          ["Une paire de chaussures", 0],
          ["Un cours de guitare", 1],
          ["Un sandwich", 0],
          ["Une consultation chez le médecin", 1],
          ["Un tracteur", 0],
          ["Le transport en train", 1],
          ["Un livre", 0],
          ["Une coupe de cheveux", 1]
        ]
      },
      caption: "Un bien est une chose, un service est une activité."
    },
    {
      type: "quiz",
      title: "Vérifie tout de suite",
      questions: [
        { type: "mc", q: "Lequel de ces biens est un bien de production ?", options: ["Le four d'une pizzeria", "Une glace", "Une chanson écoutée"], answer: 0, explain: "Il sert à produire d'autres biens (les pizzas) ; les autres satisfont directement un besoin." },
        { type: "tf", q: "Les besoins humains sont limités et ils sont bientôt tous satisfaits.", answer: false, explain: "Les besoins sont illimités : quand l'un est satisfait, un autre apparaît." },
        { type: "mc", q: "Le stylo et l'encre sont des biens…", options: ["Complémentaires", "Substituables", "Libres"], answer: 0, explain: "Ils s'utilisent ensemble ; les biens substituables se remplacent l'un l'autre." }
      ]
    },
    {
      type: "text",
      title: "4. La rareté et le problème économique",
      html: `<p>Les ressources naturelles, le temps, le travail et l'argent sont <b>limités</b>, alors que les besoins sont <b>illimités</b>. Cette contradiction s'appelle la <b>rareté</b> et elle est à l'origine de l'économie. Cela ne veut pas dire que les ressources sont peu nombreuses dans l'absolu, mais qu'elles sont <b>insuffisantes</b> pour satisfaire tous les besoins.</p>
<p>Comme on ne peut pas tout avoir, chaque société (et chaque personne) doit répondre à trois questions fondamentales :</p>
<ol>
<li><b>Que produire</b>, et en quelle quantité (plus d'écoles ou plus de routes ? plus de nourriture ou plus de voitures) ?</li>
<li><b>Comment produire</b> (avec beaucoup de machines ou beaucoup de travail humain ? avec quelles technologies) ?</li>
<li><b>Pour qui produire</b> : comment répartir les biens entre les personnes ?</li>
</ol>
<p>Les réponses à ces questions définissent les différents <b>systèmes économiques</b> (que nous verrons dans la prochaine leçon).</p>
<p>Pour produire, on utilise les <b>facteurs de production</b> :</p>
<ul>
<li>le <b>travail</b> (l'activité de ceux qui travaillent, physique ou intellectuelle) ;</li>
<li>la <b>terre</b> (les ressources naturelles : sol, eau, minerais, énergie) ;</li>
<li>le <b>capital</b> (machines, bâtiments, outils et l'argent pour les acheter) ;</li>
<li>l'<b>esprit d'entreprise</b> (la capacité d'organiser les facteurs et d'assumer le risque de l'entreprise ; parfois considéré comme un facteur à part).</li>
</ul>
<p>Celui qui fournit un facteur reçoit une rémunération : le <b>salaire</b> pour le travail, la <b>rente</b> pour la terre, l'<b>intérêt</b> pour le capital, le <b>profit</b> pour l'entreprise.</p>`
    },
    {
      type: "text",
      title: "5. Choisir a un coût : le coût d'opportunité",
      html: `<p>Comme les ressources sont rares, chaque choix implique un renoncement. Le <b>coût d'opportunité</b> d'un choix est la <b>valeur de la meilleure alternative à laquelle on renonce</b>. Ce n'est pas seulement le prix payé : il comprend aussi ce que tu aurais pu faire avec cet argent ou ce temps.</p>
<p>Exemples :</p>
<ul>
<li>Tu as 20 euros : choisis-tu le cinéma (10 euros) ou un livre (10 euros) que tu aurais été prêt à payer plus cher ? Le coût d'opportunité du cinéma, c'est le livre auquel tu renonces.</li>
<li>Une heure d'étude l'après-midi a pour coût d'opportunité une heure de sport avec tes amis ; le temps lui aussi est une ressource rare.</li>
<li>Un État qui dépense plus pour la défense a moins de ressources pour l'école : c'est le vieux dilemme « des canons ou du beurre ».</li>
</ul>
<p>Les économistes représentent ce problème avec la <b>frontière des possibilités de production</b> : un graphique qui montre les combinaisons maximales de deux biens qu'une économie peut produire avec les ressources dont elle dispose. Pour avoir plus de l'un, il faut produire moins de l'autre.</p>`
    },
    {
      type: "svg",
      title: "La frontière des possibilités de production",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Frontière des possibilités de production">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<line x1="80" y1="250" x2="80" y2="30" stroke="#334155" stroke-width="2"/>
<line x1="80" y1="250" x2="540" y2="250" stroke="#334155" stroke-width="2"/>
<path d="M80,60 Q300,80 480,250" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3" fill-opacity="0.6"/>
<circle cx="250" cy="105" r="8" fill="#16a34a"/>
<text x="268" y="102" font-size="14" font-weight="bold" fill="#14532d">A : efficace</text>
<circle cx="170" cy="190" r="8" fill="#f59e0b"/>
<text x="188" y="200" font-size="14" font-weight="bold" fill="#78350f">B : ressources gaspillées</text>
<circle cx="450" cy="90" r="8" fill="#dc2626"/>
<text x="360" y="75" font-size="14" font-weight="bold" fill="#7f1d1d">C : inaccessible</text>
<text x="40" y="45" font-size="14" fill="#1e293b">Biens X</text>
<text x="490" y="275" font-size="14" fill="#1e293b">Biens Y</text>
</svg>`,
      caption: "Les points sur la courbe sont des combinaisons efficaces ; ceux en dessous indiquent des ressources sous-utilisées ; ceux au-delà sont inaccessibles avec les ressources actuelles."
    },
    {
      type: "example",
      title: "Le coût d'opportunité d'un samedi",
      html: `<p>Luca a un samedi libre et deux possibilités : travailler 5 heures dans un magasin et gagner 40 euros, ou aller à un tournoi de foot à cinq qui lui plaît beaucoup (gratuit). S'il va au tournoi, son <b>coût d'opportunité</b> est de <b>40 euros</b> : ce à quoi il renonce. S'il travaille, le coût d'opportunité est le plaisir du tournoi. Il n'y a pas de bon choix dans l'absolu : tout dépend de la valeur que Luca accorde à chaque option. Mais c'est une erreur de dire qu'aller au tournoi « ne coûte rien ».</p>`
    },
    {
      type: "curiosity",
      title: "Le paradoxe de l'eau et du diamant",
      html: `<p>Adam Smith, dans <i>La Richesse des nations</i> (1776), a remarqué un paradoxe : l'eau est indispensable à la vie mais elle coûte très peu, les diamants sont inutiles pour survivre mais coûtent très cher. La valeur économique ne dépend pas seulement de l'utilité, mais de la <b>rareté</b>. Plus tard, les économistes ont expliqué que c'est l'<b>utilité marginale</b> qui compte : pour celui qui a beaucoup d'eau, un litre de plus vaut peu ; dans le désert, un seul verre peut valoir énormément.</p>`
    },
    {
      type: "text",
      title: "6. L'utilité marginale décroissante",
      html: `<p>Quand tu consommes plusieurs unités du même bien, l'<b>utilité</b> (la satisfaction) apportée par chaque unité supplémentaire <b>diminue</b>. Le premier sandwich, quand tu as très faim, donne une grande satisfaction ; le deuxième en donne moins ; le cinquième pourrait même te déranger. C'est la <b>loi de l'utilité marginale décroissante</b>.</p>
<p>C'est l'une des raisons pour lesquelles les gens ne dépensent pas tout pour un seul bien, mais <b>diversifient leur consommation</b>. Elle aide aussi à expliquer la formation du prix : si un bien est très rare, l'utilité de la dernière unité reste élevée et les gens sont prêts à payer plus.</p>
<p>On distingue la <b>valeur d'usage</b> d'un bien (l'utilité qu'il a pour celui qui l'utilise) et sa <b>valeur d'échange</b> (ce que l'on peut obtenir en échange : le prix). L'eau a une forte valeur d'usage et une faible valeur d'échange ; les diamants, l'inverse.</p>`
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Les <b>besoins</b> sont illimités ; les <b>ressources</b> sont rares. C'est de là que naît l'économie.</li>
<li>Besoins : primaires/secondaires, individuels/collectifs.</li>
<li>Biens (libres, économiques) et services. Les biens peuvent être de consommation ou de production ; complémentaires ou substituables.</li>
<li>Facteurs de production : <b>travail, terre, capital</b> (+ esprit d'entreprise).</li>
<li><b>Coût d'opportunité</b> : la valeur de la meilleure alternative à laquelle tu renonces.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la rareté et le choix",
      intro: "La notion de choix économique est plus simple quand on la voit en action.",
      tabs: [
        {
          label: "🍕 Le budget de 20 euros",
          html: `<p>Tu as 20 euros pour le week-end : 10 pour le cinéma, 8 pour la pizza, 15 pour un casque audio : 33 euros en tout. Ce n'est pas suffisant : tu dois choisir. Si tu choisis cinéma + pizza (18 euros), tu renonces au casque : sa valeur est le <b>coût d'opportunité</b> de ton choix. Faire un budget, c'est faire exactement ce que fait l'économie, en petit.</p>`
        },
        {
          label: "⏰ Le temps comme ressource",
          html: `<p>Le temps est la ressource la plus rare de toutes : chaque journée a 24 heures pour tout le monde. Une heure passée sur un jeu vidéo est une heure que tu ne consacres pas à l'étude, au sommeil ou à tes amis. Même la personne la plus riche n'a qu'une journée de 24 heures. C'est pourquoi on dit que « le temps, c'est de l'argent » : non parce que c'est la même chose, mais parce que le temps a toujours un coût d'opportunité.</p>`
        },
        {
          label: "🌍 Le village avec un seul bateau",
          html: `<p>Dans un village, il n'y a qu'un seul bateau. Il peut servir à pêcher (nourriture) ou à transporter des marchandises au marché (revenu). Chaque jour où il est utilisé pour l'un, il n'est pas disponible pour l'autre. La communauté doit décider <b>quoi produire</b>, <b>comment</b> et <b>pour qui</b> : ce sont les trois questions fondamentales de tout système économique.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : le problème économique",
      nodes: [
        { id: "bisogni", label: "Besoins illimités", x: 20, y: 10, color: "#2563eb", html: "Primaires et secondaires, individuels et collectifs.", why: "Les besoins sont illimités parce qu'ils changent avec la culture, la technologie, le revenu : dès que les besoins vitaux sont satisfaits, apparaissent des besoins de sécurité, d'appartenance, d'estime (Maslow)." },
        { id: "risorse", label: "Ressources rares", x: 80, y: 10, color: "#dc2626", html: "Terre, travail, capital, temps.", why: "Les ressources ont une limite physique (la planète, le temps, les compétences). Le progrès technique repousse cette limite, mais ne la supprime pas." },
        { id: "scarsita", label: "Rareté", x: 50, y: 38, color: "#a855f7", html: "Les ressources ne suffisent pas pour tous les besoins.", why: "C'est le problème fondamental de l'économie : si tout était abondant, il ne serait nécessaire ni de choisir ni de donner un prix aux biens." },
        { id: "scelta", label: "Choix et coût d'opportunité", x: 20, y: 68, color: "#16a34a", html: "Choisir, c'est renoncer à quelque chose.", why: "Chaque choix a un coût, non seulement en argent mais en alternatives perdues. Cette notion explique pourquoi il existe des prix, l'épargne, l'investissement, les études (renoncer aujourd'hui pour gagner demain)." },
        { id: "beni", label: "Biens et services", x: 80, y: 68, color: "#f59e0b", html: "Libres/économiques ; de consommation/de production ; services.", why: "Ce sont les moyens de satisfaire les besoins. Seuls les biens économiques sont rares et ont donc un prix : l'air est un bien libre, l'eau potable non." },
        { id: "produzione", label: "Facteurs de production", x: 50, y: 90, color: "#0891b2", html: "Travail, terre, capital, esprit d'entreprise.", why: "Ce sont les ingrédients avec lesquels on produit des biens et des services. Ceux qui les fournissent reçoivent une rémunération : salaire, rente, intérêt, profit." }
      ],
      edges: [["bisogni", "scarsita", "se heurtent à"], ["risorse", "scarsita", "causent"], ["scarsita", "scelta", "oblige à"], ["scarsita", "beni", "rend économiques"], ["beni", "produzione", "produits avec"]]
    },
    {
      type: "curiosity",
      title: "Les biens libres deviennent économiques",
      html: `<p>Autrefois, l'eau propre était un bien libre pour de nombreuses communautés. Aujourd'hui, à cause de la pollution et de la croissance de la population, elle est dans beaucoup de régions un bien <b>économique</b>, avec un prix (les factures) et même des conflits pour son usage. L'air pur dans les grandes villes tend lui aussi à devenir rare : c'est pourquoi il existe des limites d'émissions et des marchés de « droits d'émission ».</p>`
    },
    {
      type: "quiz",
      title: "Deuxième vérification",
      questions: [
        { type: "mc", q: "Quel est le coût d'opportunité d'un après-midi passé au cinéma au lieu de travailler pour 30 euros ?", options: ["Au moins les 30 euros auxquels on renonce", "Zéro, parce que le cinéma est gratuit", "Seulement le prix du billet"], answer: 0, explain: "C'est la valeur de la meilleure alternative à laquelle on renonce : 30 euros non gagnés (en plus du billet, s'il est payant)." },
        { type: "tf", q: "Les services peuvent être stockés comme les biens.", answer: false, explain: "Un service est produit et consommé au même moment (un cours, un trajet en train)." },
        { type: "mc", q: "Comment s'appelle la rémunération du capital ?", options: ["Intérêt", "Salaire", "Rente"], answer: 0, explain: "Salaire pour le travail, rente pour la terre, intérêt pour le capital, profit pour l'entrepreneur." }
      ]
    }
  ],
  glossary: [
    { t: "Économie", d: "Science qui étudie comment utiliser des ressources rares pour satisfaire des besoins illimités." },
    { t: "Besoin", d: "Sensation de manque de quelque chose, accompagnée du désir de la faire cesser." },
    { t: "Bien économique", d: "Bien rare, qui a un prix et exige du travail pour être produit." },
    { t: "Bien libre", d: "Bien disponible en quantité illimitée, sans coût, comme l'air." },
    { t: "Bien de production", d: "Bien utilisé pour produire d'autres biens (machines, équipements)." },
    { t: "Service", d: "Prestation qui satisfait un besoin sans produire d'objet." },
    { t: "Rareté", d: "Insuffisance des ressources par rapport aux besoins illimités." },
    { t: "Coût d'opportunité", d: "Valeur de la meilleure alternative à laquelle on renonce en faisant un choix." },
    { t: "Facteurs de production", d: "Travail, terre, capital (et esprit d'entreprise) : les ressources utilisées pour produire." },
    { t: "Utilité marginale", d: "Satisfaction supplémentaire apportée par une unité de plus d'un bien ; en règle générale, elle décroît." },
    { t: "Microéconomie et macroéconomie", d: "Étude des agents individuels et des marchés (micro) et de l'ensemble du système économique (macro)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Pourquoi le problème économique apparaît-il ?", options: ["Parce que les ressources sont rares par rapport aux besoins", "Parce que les prix sont trop élevés", "Parce que l'argent existe"], answer: 0, explain: "La rareté oblige à choisir." },
      { type: "tf", q: "L'air est un exemple classique de bien libre.", answer: true, explain: "Il est disponible en quantité illimitée sans qu'il faille payer." },
      { type: "mc", q: "Quel bien est complémentaire de la voiture ?", options: ["L'essence", "Le car", "Le vélo"], answer: 0, explain: "Les biens complémentaires s'utilisent ensemble ; le car et le vélo sont des substituts." },
      { type: "text", q: "Comment s'appelle la valeur de la meilleure alternative à laquelle on renonce ?", answer: ["coût d'opportunité", "cout d'opportunite", "le coût d'opportunité", "le cout d'opportunite", "coût d'opportunite"], explain: "C'est le coût d'opportunité." },
      { type: "mc", q: "Lequel n'est pas un facteur de production ?", options: ["L'argent des consommateurs", "Le travail", "La terre"], answer: 0, explain: "Les facteurs sont le travail, la terre, le capital (plus l'esprit d'entreprise)." },
      { type: "order", q: "Range les besoins de la pyramide de Maslow du plus bas au plus haut.", items: ["Physiologiques", "Sécurité", "Appartenance", "Estime", "Accomplissement de soi"], explain: "Les besoins les plus élémentaires viennent d'abord, ceux de l'accomplissement de soi sont au sommet." },
      { type: "num", q: "Tu as 30 euros et tu choisis de dépenser 12 euros pour le cinéma et 18 pour une pizza. Combien te reste-t-il ?", answer: 0, tol: 0, unit: "euros", explain: "12 + 18 = 30 : il ne te reste rien ; toute autre dépense aurait exigé de renoncer à quelque chose." },
      { type: "mc", q: "Un service est…", options: ["Une activité qui satisfait un besoin sans produire d'objet", "Un objet durable", "Un bien de production"], answer: 0, explain: "Un cours, une consultation, un transport sont des services." },
      { type: "tf", q: "Selon la loi de l'utilité marginale décroissante, chaque unité supplémentaire d'un même bien apporte en général moins de satisfaction.", answer: true, explain: "Le cinquième sandwich fait moins plaisir que le premier." },
      { type: "mc", q: "La microéconomie étudie…", options: ["Le comportement des agents individuels et des marchés", "L'ensemble de la production nationale", "L'histoire de la monnaie"], answer: 0, explain: "L'analyse de l'ensemble du système relève de la macroéconomie." }
    ]
  }
});
