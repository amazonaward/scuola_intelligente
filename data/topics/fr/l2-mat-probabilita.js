TOPIC('fr', {
  id: "l2-mat-probabilita",
  title: "Introduction aux probabilités",
  intro: "Lancer une pièce, jouer au loto, lire la météo, décider de se faire vacciner ou non : les probabilités servent à raisonner <b>en situation d'incertitude</b>. Elles sont nées au XVIIe siècle d'une discussion sur les jeux de hasard et sont aujourd'hui à la base de la statistique, des assurances, de la physique quantique et de l'intelligence artificielle. Dans cette leçon, tu apprends à calculer la probabilité d'un événement selon trois approches différentes (<b>classique</b>, <b>fréquentiste</b> et <b>subjective</b>) et à combiner des événements par la <b>réunion</b> et l'<b>intersection</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Expériences aléatoires, univers et événements",
      html: `<p>Une <b>expérience aléatoire</b> est une expérience dont on ne peut pas prévoir le résultat avec certitude avant de la réaliser : je lance une pièce, je tire une carte, je lance un dé. Même sans connaître le résultat, je sais <b>quels résultats sont possibles</b>.</p>
<ul>
<li>L'ensemble de tous les résultats possibles (les <b>issues</b>) s'appelle l'<b>univers</b>, noté Ω. Pour un dé : Ω = {1, 2, 3, 4, 5, 6}. Pour une pièce : Ω = {Pile, Face}.</li>
<li>Un <b>événement</b> est une partie de Ω : une proposition qui est réalisée ou non. « Obtenir un nombre pair » est l'événement E = {2, 4, 6}.</li>
<li><b>Événement élémentaire</b> : il ne contient qu'une seule issue (obtenir 5).</li>
<li><b>Événement certain</b> : il est égal à Ω tout entier (obtenir un nombre entre 1 et 6). <b>Événement impossible</b> : c'est l'ensemble vide ∅ (obtenir 7).</li>
<li><b>Événement contraire</b> de E, noté Ē : il est réalisé quand E ne l'est pas. Le contraire de « pair » est « impair ».</li>
</ul>
<p>Avec le langage des ensembles (vu en première année) : l'événement <b>A ∪ B</b> (« A <b>ou</b> B ») est la réunion et l'événement <b>A ∩ B</b> (« A <b>et</b> B ») est l'intersection. Deux événements sont <b>incompatibles</b> s'ils ne peuvent pas se réaliser en même temps : A ∩ B = ∅ (obtenir un nombre pair et obtenir un nombre impair). Sinon, ils sont <b>compatibles</b>.</p>`
    },
    {
      type: "text",
      title: "La probabilité classique (Laplace)",
      html: `<p>Si toutes les issues sont <b>également possibles</b> (équiprobables), la probabilité d'un événement E est le rapport entre le nombre de cas favorables et le nombre de cas possibles :</p>
<p style="text-align:center"><b>p(E) = cas favorables / cas possibles</b></p>
<p>C'est la définition <b>classique</b>, ou de <b>Laplace</b> (1812). Conséquences :</p>
<ul>
<li>Une probabilité est un nombre entre <b>0 et 1</b> : 0 ≤ p(E) ≤ 1 (on l'exprime aussi en pourcentage : 0,25 = 25 %).</li>
<li>L'événement impossible a pour probabilité 0 ; l'événement certain a pour probabilité 1.</li>
<li><b>Événement contraire</b> : p(Ē) = 1 − p(E). C'est utile : il est souvent plus facile de calculer le contraire.</li>
</ul>
<p><b>Exemples</b> :</p>
<ul>
<li>Dé : p(obtenir un nombre pair) = 3/6 = 1/2. p(obtenir un multiple de 3) = 2/6 = 1/3.</li>
<li>Jeu italien de 40 cartes : p(tirer un as) = 4/40 = 1/10 ; p(tirer une carte de « deniers », l'une des quatre couleurs) = 10/40 = 1/4.</li>
<li>Deux pièces : Ω = {FF, FP, PF, PP} : p(deux fois face) = 1/4, p(un pile et un face) = 2/4 = 1/2.</li>
</ul>
<p>⚠️ <b>Attention à l'équiprobabilité</b> : avec deux dés, la somme 7 est plus probable que la somme 2, non pas parce que le dé le « décide », mais parce qu'il y a plus de façons de l'obtenir. Il faut compter les issues <b>élémentaires</b> équiprobables (les couples ordonnés).</p>`
    },
    {
      type: "svg",
      title: "Deux dés : pourquoi le 7 sort plus souvent",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<rect x="60" y="220" width="36" height="30" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="105" y="190" width="36" height="60" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="150" y="160" width="36" height="90" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="195" y="130" width="36" height="120" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="240" y="100" width="36" height="150" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="285" y="70" width="36" height="180" fill="#f87171" stroke="#b91c1c" stroke-width="2"/>
<rect x="330" y="100" width="36" height="150" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="375" y="130" width="36" height="120" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="420" y="160" width="36" height="90" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="465" y="190" width="36" height="60" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="510" y="220" width="36" height="30" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<g font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="78" y="274">2</text><text x="123" y="274">3</text><text x="168" y="274">4</text><text x="213" y="274">5</text><text x="258" y="274">6</text><text x="303" y="274" fill="#b91c1c">7</text><text x="348" y="274">8</text><text x="393" y="274">9</text><text x="438" y="274">10</text><text x="483" y="274">11</text><text x="528" y="274">12</text>
</g>
<text x="303" y="60" font-size="16" text-anchor="middle" fill="#b91c1c" font-weight="bold">6/36 = 1/6</text>
<text x="78" y="212" font-size="16" text-anchor="middle" fill="#4338ca">1/36</text>
<text x="528" y="212" font-size="16" text-anchor="middle" fill="#4338ca">1/36</text>
<text x="40" y="30" font-size="16" fill="#1f2937">Somme de deux dés : 6 × 6 = 36 couples ordonnés équiprobables</text>
</svg>`,
      caption: "La somme 7 s'obtient de 6 façons (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) ; les sommes 2 et 12 d'une seule façon."
    },
    {
      type: "example",
      title: "Exemples guidés",
      html: `<p><b>1. Dé à 6 faces</b> : quelle est la probabilité d'obtenir un nombre supérieur à 4 ? Cas favorables : {5, 6} = 2 ; cas possibles : 6 ; p = 2/6 = <b>1/3</b> ≈ 33 %.</p>
<p><b>2. Une boîte</b> contient 5 boules rouges, 3 bleues et 2 vertes. p(bleue) = 3/10 = 30 %. p(pas rouge) = 1 − 5/10 = 5/10 = 50 %.</p>
<p><b>3. Au moins un 6 en 4 lancers de dé</b> : calculer « au moins un » est difficile ; le contraire, « aucun 6 en 4 lancers », est facile : chaque lancer donne autre chose que 6 avec une probabilité de 5/6, et les lancers sont indépendants, donc p(aucun 6) = (5/6)⁴ = 625/1296 ≈ 0,482. Alors p(au moins un 6) = 1 − 0,482 = <b>0,518</b>, un peu plus de 1/2. C'est le jeu que le <b>chevalier de Méré</b> proposait à ses amis au XVIIe siècle et qui le faisait gagner, en moyenne, plus souvent que perdre.</p>
<p><b>4. Tirage dans un jeu de 52 cartes</b> : p(roi) = 4/52 = 1/13 ; p(cœur) = 13/52 = 1/4.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : probabilité classique",
      questions: [
        { type: "num", q: "On lance un dé à 6 faces. Quelle est la probabilité (nombre décimal entre 0 et 1) d'obtenir un nombre impair ?", answer: 0.5, tol: 0.01, explain: "Impair : {1, 3, 5} = 3 cas sur 6 = 1/2 = 0,5." },
        { type: "mc", q: "Quel nombre NE peut PAS être une probabilité ?", options: ["0", "1,3", "0,75"], answer: 1, explain: "Une probabilité est toujours comprise entre 0 et 1 : 1,3 est supérieur à 1." },
        { type: "num", q: "Une urne contient 4 boules blanches et 6 noires. Quelle est la probabilité (en %) de tirer une boule blanche ?", answer: 40, unit: "%", explain: "4 cas favorables sur 10 : 4/10 = 40 %." },
        { type: "tf", q: "Si l'événement E a une probabilité de 0,3, son événement contraire a une probabilité de 0,7.", answer: true, explain: "p(Ē) = 1 − p(E) = 1 − 0,3 = 0,7." }
      ]
    },
    {
      type: "text",
      title: "La probabilité fréquentiste et la loi des grands nombres",
      html: `<p>La définition classique exige des issues équiprobables, mais beaucoup d'événements ne sont pas ainsi : une punaise qui tombe pointe en l'air ou non, un patient qui guérit grâce à un traitement, la pluie demain. Dans ces cas, on utilise la <b>probabilité fréquentiste</b> : on répète l'expérience <b>de nombreuses fois</b> et on observe la <b>fréquence</b> :</p>
<p style="text-align:center"><b>f = nombre de fois où E est réalisé / nombre d'essais</b></p>
<p>La <b>loi des grands nombres</b> (démontrée par <b>Jacques Bernoulli</b> dans l'<i>Ars Conjectandi</i>, publiée en 1713) dit que, quand le nombre d'essais augmente, la fréquence se rapproche de plus en plus de la vraie probabilité. En lançant 10 fois une pièce, tu pourrais obtenir 7 fois face (f = 0,7), mais avec 10 000 lancers tu t'attends à une valeur proche de 0,5. Le mathématicien <b>John Kerrich</b>, interné au Danemark pendant la Seconde Guerre mondiale, lança une pièce 10 000 fois et obtint 5 067 faces (50,67 %).</p>
<p>La probabilité fréquentiste est à la base des <b>assurances</b>, des statistiques médicales et des prévisions météo (« 70 % de risque de pluie » signifie que, dans des situations atmosphériques semblables, il a plu environ 7 fois sur 10).</p>
<p>⚠️ <b>L'erreur du joueur</b> : si à la roulette le rouge est sorti 5 fois de suite, la probabilité du noir au tour suivant <b>n'augmente pas</b> : la roue n'a pas de mémoire. La loi des grands nombres vaut <b>en moyenne</b> et sur de nombreux essais ; elle ne « compense » pas les résultats individuels.</p>
<p>Il existe aussi la <b>probabilité subjective</b> : c'est le degré de confiance qu'une personne accorde à un événement en fonction des informations dont elle dispose (la probabilité qu'une équipe gagne un championnat, qu'une nouvelle entreprise réussisse). On la mesure par le pari qu'on est prêt à faire.</p>`
    },
    {
      type: "remember",
      title: "Les trois définitions comparées",
      html: `<ul>
<li><b>Classique</b> (Laplace) : p = favorables / possibles ; elle exige des cas équiprobables. On la calcule <i>avant</i> de faire l'expérience (dés, cartes, urnes).</li>
<li><b>Fréquentiste</b> : p ≈ fréquence sur de nombreux essais ; on l'obtient <i>après</i> avoir observé. Elle sert quand les cas ne sont pas équiprobables.</li>
<li><b>Subjective</b> : degré de confiance personnel ; utilisée quand l'événement n'est pas répétable.</li>
</ul>
<p>Au XXe siècle, <b>Andreï Kolmogorov</b> (1933) fonda les probabilités sur trois axiomes (p ≥ 0 ; p(Ω) = 1 ; pour des événements incompatibles, p(A ∪ B) = p(A) + p(B)), valables pour toutes les définitions.</p>`
    },
    {
      type: "text",
      title: "Réunion d'événements : « A ou B »",
      html: `<p><b>Événements incompatibles</b> : si A et B ne peuvent pas se réaliser en même temps,</p>
<p style="text-align:center"><b>p(A ∪ B) = p(A) + p(B)</b></p>
<p>Exemple : avec un dé, p(obtenir 1 ou obtenir 6) = 1/6 + 1/6 = 1/3.</p>
<p><b>Événements compatibles</b> : si A et B peuvent se réaliser en même temps, en additionnant les probabilités on compterait deux fois l'intersection. On la soustrait :</p>
<p style="text-align:center"><b>p(A ∪ B) = p(A) + p(B) − p(A ∩ B)</b></p>
<p><b>Exemple</b> : dans un jeu de 40 cartes à quatre couleurs (cœur, carreau, trèfle, pique), p(as ou cœur) ? p(as) = 4/40 ; p(cœur) = 10/40 ; p(as de cœur) = 1/40. Donc p = 4/40 + 10/40 − 1/40 = <b>13/40</b>.</p>
<p><b>Exemple avec le dé</b> : A = « pair » = {2, 4, 6}, B = « supérieur à 4 » = {5, 6} ; A ∩ B = {6}. p(A ∪ B) = 3/6 + 2/6 − 1/6 = 4/6 = 2/3. En effet A ∪ B = {2, 4, 5, 6} : 4 cas sur 6.</p>
<p><b>Événements contraires</b> : ils sont incompatibles et leur réunion est l'événement certain, donc p(E) + p(Ē) = 1.</p>`
    },
    {
      type: "text",
      title: "Intersection d'événements : « A et ensuite B »",
      html: `<p>Deux événements sont <b>indépendants</b> si la réalisation de l'un ne change pas la probabilité de l'autre (deux lancers de pièce). Pour des événements indépendants :</p>
<p style="text-align:center"><b>p(A ∩ B) = p(A) · p(B)</b></p>
<p><b>Exemples</b> :</p>
<ul>
<li>Deux fois face de suite : 1/2 · 1/2 = 1/4.</li>
<li>Trois 6 consécutifs avec un dé : (1/6)³ = 1/216 ≈ 0,46 %.</li>
<li>Une boule tirée d'une urne contenant 3 blanches et 2 noires est <b>remise</b> après chaque tirage : p(blanche, puis blanche) = 3/5 · 3/5 = 9/25. Si elle n'est <b>pas</b> remise, le second événement dépend du premier : p(blanche, puis blanche) = 3/5 · 2/4 = 6/20 = 3/10 (événements dépendants).</li>
</ul>
<p>Pour s'y retrouver : <b>ou → on additionne</b> ; <b>et (ensuite) → on multiplie</b>.</p>`
    },
    {
      type: "example",
      title: "Exemple de la vie réelle : la prévision et la classe",
      html: `<p><b>Prévisions météo.</b> Si l'application annonce « pluie à 30 % », cela signifie p = 0,3 : sur 10 jours aux conditions semblables, il pleut environ 3 fois. Ce n'est pas une erreur s'il pleut : la prévision ne dit pas « il pleut » ou « il ne pleut pas », mais à quel point c'est plausible. Avec p = 0,3, « il ne pleut pas » a une probabilité de 0,7 : prendre un parapluie a du sens si l'inconvénient d'être mouillé compte plus que la gêne de le porter.</p>
<p><b>Les sports d'une classe.</b> Dans une classe de 25 élèves, 10 jouent au football, 8 au volley et 3 pratiquent les deux sports. En choisissant un élève au hasard, p(football ou volley) = 10/25 + 8/25 − 3/25 = <b>15/25 = 3/5 = 60 %</b> : les 3 qui pratiquent les deux ne sont comptés qu'une seule fois.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Pascal, Fermat et le chevalier de Méré",
      html: `<p>La théorie des probabilités est née en <b>1654</b>, quand le chevalier <b>Antoine Gombaud de Méré</b>, joueur passionné, posa à <b>Blaise Pascal</b> deux problèmes, dont celui de savoir comment partager la mise d'une partie interrompue avant la fin (le « problème des partis »). Pascal en discuta dans une célèbre correspondance avec <b>Pierre de Fermat</b> : tous deux parvinrent à la même solution en comptant les suites possibles de la partie. Quelques années plus tard, <b>Christiaan Huygens</b> écrivit le premier traité sur le sujet (1657). <b>Laplace</b> donnera à la théorie sa forme classique en 1812.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le paradoxe des anniversaires et le loto",
      html: `<p><b>Anniversaires</b> : dans une classe de seulement <b>23 personnes</b>, la probabilité qu'au moins deux soient nées le même jour de l'année dépasse <b>50 %</b> (elle vaut environ 50,7 %) ; avec 70 personnes, elle dépasse 99,9 %. Cela semble absurde parce que nous pensons aux comparaisons avec nous-mêmes, mais il y a 253 paires possibles parmi 23 personnes.</p>
<p><b>SuperEnalotto</b> (une loterie italienne) : on choisit une combinaison de six numéros parmi les nombres de 1 à 90. Il y a 622 614 630 combinaisons possibles : la probabilité de gagner le premier prix avec une grille est d'environ 1 sur 622 millions, un événement pratiquement impossible. Acheter un billet ne change pratiquement rien à ton avenir financier, mais il change celui de l'organisateur du jeu, qui a une marge garantie.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les probabilités",
      intro: "Si les formules te semblent trop abstraites, observe les probabilités autrement.",
      tabs: [
        {
          label: "🎲 Une expérience pratique",
          html: `<p>Prends deux pièces et lance-les 40 fois, en notant combien de fois tu obtiens deux faces, un face et un pile, deux piles. Le calcul théorique donne 1/4, 1/2, 1/4 (soit environ 10, 20, 10 sur 40). Tu n'obtiendras probablement pas exactement ces nombres, mais tu t'en approcheras. Si tu recommences 200 fois, tu t'en approcheras encore plus : tu vois la loi des grands nombres de tes propres mains. Avec un tableur ou un programme, tu peux simuler en quelques secondes 100 000 lancers.</p>`
        },
        {
          label: "🌳 L'arbre des issues",
          html: `<p>Pour compter les cas sans en oublier, dessine un <b>arbre</b>. Chaque branche est un choix ; les résultats finaux sont les chemins. Avec deux lancers de pièce, il y a 4 chemins, chacun de probabilité 1/2 · 1/2 = 1/4. En additionnant les chemins qui réalisent l'événement « un face et un pile » (FP et PF), on obtient 1/4 + 1/4 = 1/2.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="60" cy="150" r="8" fill="#1f2937"/>
<line x1="60" y1="150" x2="230" y2="80" stroke="#4338ca" stroke-width="3"/>
<line x1="60" y1="150" x2="230" y2="220" stroke="#4338ca" stroke-width="3"/>
<text x="110" y="100" font-size="16" fill="#4338ca" font-weight="bold">F  1/2</text>
<text x="110" y="216" font-size="16" fill="#4338ca" font-weight="bold">P  1/2</text>
<circle cx="230" cy="80" r="8" fill="#1f2937"/><circle cx="230" cy="220" r="8" fill="#1f2937"/>
<line x1="230" y1="80" x2="400" y2="40" stroke="#166534" stroke-width="3"/>
<line x1="230" y1="80" x2="400" y2="120" stroke="#166534" stroke-width="3"/>
<line x1="230" y1="220" x2="400" y2="180" stroke="#166534" stroke-width="3"/>
<line x1="230" y1="220" x2="400" y2="260" stroke="#166534" stroke-width="3"/>
<text x="290" y="48" font-size="16" fill="#166534" font-weight="bold">F  1/2</text>
<text x="290" y="116" font-size="16" fill="#166534" font-weight="bold">P  1/2</text>
<text x="290" y="186" font-size="16" fill="#166534" font-weight="bold">F  1/2</text>
<text x="290" y="256" font-size="16" fill="#166534" font-weight="bold">P  1/2</text>
<text x="415" y="46" font-size="16" fill="#1f2937">FF → 1/4</text>
<text x="415" y="126" font-size="16" fill="#b91c1c">FP → 1/4</text>
<text x="415" y="186" font-size="16" fill="#b91c1c">PF → 1/4</text>
<text x="415" y="266" font-size="16" fill="#1f2937">PP → 1/4</text>
</svg>`
        },
        {
          label: "🃏 Associe événement et probabilité",
          html: `<p>Essaie d'associer chaque événement à sa probabilité, en utilisant la formule classique (cas favorables sur cas possibles).</p>`,
          widget: "match",
          options: { pairs: [
            ["Lancer d'un dé : obtenir 6", "1/6"],
            ["Lancer d'une pièce : obtenir face", "1/2"],
            ["Jeu de 52 cartes : tirer un roi", "1/13"],
            ["Deux pièces : deux fois pile", "1/4"],
            ["Dé : obtenir un nombre inférieur à 7", "1 (événement certain)"],
            ["Dé : obtenir 0", "0 (événement impossible)"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : les probabilités",
      nodes: [
        { id: "inc", label: "Incertitude", x: 50, y: 6, color: "#6366f1", html: "Situations dont l'issue n'est pas prévisible avec certitude.", why: "Les probabilités n'éliminent pas l'incertitude : elles la mesurent. Avant le XVIIe siècle, le hasard était vu comme « volonté divine » ou « fortune » ; avec Pascal et Fermat, il devient objet de calcul." },
        { id: "ev", label: "Événements et univers", x: 18, y: 30, color: "#f59e0b", html: "Ω, parties de Ω, événement certain/impossible/contraire.", why: "On utilise le langage des ensembles : réunion, intersection, complémentaire. C'est ce qui permet de formaliser les opérations sur les événements." },
        { id: "cl", label: "Probabilité classique", x: 50, y: 40, color: "#16a34a", html: "Favorables / possibles, avec des cas équiprobables.", why: "Elle naît des jeux de dés et de cartes, où la symétrie rend les issues également possibles (principe d'indifférence). Laplace l'a systématisée en 1812." },
        { id: "fr", label: "Probabilité fréquentiste", x: 82, y: 30, color: "#a855f7", html: "Fréquence observée sur de nombreux essais.", why: "Elle sert quand il n'y a pas de symétrie. Elle repose sur la loi des grands nombres de Bernoulli : plus il y a d'essais, plus la fréquence se rapproche de la probabilité." },
        { id: "ass", label: "Axiomes (Kolmogorov)", x: 50, y: 65, color: "#ef4444", html: "p ≥ 0 ; p(Ω) = 1 ; additivité pour des événements incompatibles.", why: "En 1933, Kolmogorov a fait des probabilités une théorie mathématique rigoureuse, valable pour toutes les définitions : de ces trois axiomes découle tout le reste." },
        { id: "som", label: "Réunion", x: 22, y: 85, color: "#0ea5e9", html: "p(A ∪ B) = p(A) + p(B) − p(A ∩ B).", why: "Soustraire l'intersection évite de compter deux fois les cas communs : c'est le principe d'inclusion-exclusion." },
        { id: "pro", label: "Intersection", x: 78, y: 85, color: "#14b8a6", html: "Pour des événements indépendants : p(A ∩ B) = p(A) · p(B).", why: "Indépendance signifie que savoir que A est réalisé ne change pas la probabilité de B ; alors les probabilités se multiplient le long des branches de l'arbre." }
      ],
      edges: [
        ["inc", "ev", "se décrit avec"],
        ["inc", "cl", "mesurée par"],
        ["inc", "fr", "mesurée par"],
        ["cl", "ass", "vérifie"],
        ["fr", "ass", "vérifie"],
        ["ass", "som", "implique"],
        ["ass", "pro", "s'étend à"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : réunion et intersection",
      questions: [
        { type: "num", q: "Dans un jeu de 40 cartes, quelle est la probabilité (en %) de tirer un roi ou un as ?", answer: 20, unit: "%", explain: "Événements incompatibles : 4/40 + 4/40 = 8/40 = 1/5 = 20 %." },
        { type: "num", q: "On lance deux fois une pièce. Quelle est la probabilité (en %) d'obtenir deux fois pile ?", answer: 25, unit: "%", explain: "1/2 · 1/2 = 1/4 = 25 %." },
        { type: "tf", q: "Si A et B sont compatibles, p(A ∪ B) = p(A) + p(B).", answer: false, explain: "Il faut soustraire p(A ∩ B), sinon les cas communs sont comptés deux fois." },
        { type: "mc", q: "À la roulette, le rouge est sorti 5 fois de suite. Au tour suivant…", options: ["Le noir est plus probable", "Le rouge et le noir ont les mêmes probabilités qu'avant", "Le rouge est plus probable"], answer: 1, explain: "La roue n'a pas de mémoire : les tours sont indépendants (erreur du joueur)." }
      ]
    }
  ],
  glossary: [
    { t: "Univers", d: "L'ensemble Ω de toutes les issues possibles d'une expérience aléatoire." },
    { t: "Événement", d: "Partie de l'univers : un fait qui peut se réaliser ou non." },
    { t: "Événement certain / impossible", d: "Événement qui se réalise toujours (p = 1) / jamais (p = 0)." },
    { t: "Événement contraire", d: "Événement Ē qui se réalise quand E ne se réalise pas ; p(Ē) = 1 − p(E)." },
    { t: "Événements incompatibles", d: "Événements qui ne peuvent pas se réaliser en même temps." },
    { t: "Événements indépendants", d: "Événements tels que la réalisation de l'un n'influence pas la probabilité de l'autre." },
    { t: "Probabilité classique", d: "Rapport entre cas favorables et cas possibles, lorsqu'ils sont équiprobables." },
    { t: "Fréquence", d: "Rapport entre le nombre de fois où un événement se réalise et le nombre d'essais." },
    { t: "Loi des grands nombres", d: "Quand le nombre d'essais augmente, la fréquence se rapproche de la probabilité." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Laquelle de ces phrases est la définition classique de la probabilité ?", options: ["Cas favorables divisés par cas possibles, s'ils sont équiprobables", "Nombre d'essais divisé par nombre de succès", "Le degré de confiance personnel"], answer: 0, explain: "C'est la définition de Laplace, valable pour des cas également possibles." },
      { type: "num", q: "On tire une carte d'un jeu de 52. Quelle est la probabilité (en %) de tirer un pique ? (13 sur 52)", answer: 25, unit: "%", explain: "13/52 = 1/4 = 25 %." },
      { type: "tf", q: "La probabilité d'un événement peut valoir 1,2.", answer: false, explain: "Elle est toujours comprise entre 0 et 1." },
      { type: "num", q: "Une urne contient 3 boules rouges, 5 bleues et 2 jaunes. Quelle est la probabilité (en %) que la boule tirée ne soit PAS bleue ?", answer: 50, unit: "%", explain: "Pas bleue = 5 sur 10 = 50 % ; ou bien 1 − 5/10." },
      { type: "num", q: "En lançant deux dés, quelle est la probabilité (en %, arrondie à l'unité) que la somme soit 7 ?", answer: 17, tol: 1, unit: "%", explain: "6/36 = 1/6 ≈ 16,7 % ≈ 17 %." },
      { type: "mc", q: "Deux événements A et B sont incompatibles. Comment calcule-t-on p(A ∪ B) ?", options: ["p(A) · p(B)", "p(A) + p(B)", "p(A) − p(B)"], answer: 1, explain: "Pour des événements incompatibles, les probabilités s'additionnent." },
      { type: "num", q: "On lance un dé deux fois. Quelle est la probabilité (en %, arrondie à l'unité) d'obtenir 6 les deux fois ?", answer: 3, tol: 0.5, unit: "%", explain: "1/6 · 1/6 = 1/36 ≈ 2,8 % ≈ 3 %." },
      { type: "tf", q: "Sur 10 lancers, une pièce donne 7 fois face : cela signifie que la probabilité de face est 0,7.", answer: false, explain: "Avec peu d'essais, la fréquence peut s'écarter beaucoup de la probabilité ; la loi des grands nombres vaut pour de nombreux essais." },
      { type: "text", q: "Comment s'appelle le mathématicien qui, en 1812, a formulé la définition classique de la probabilité ?", answer: ["laplace", "pierre-simon laplace", "pierre simon laplace", "pierre-simon de laplace"], explain: "Pierre-Simon Laplace, dans la Théorie analytique des probabilités." },
      { type: "order", q: "Remets dans l'ordre les étapes pour calculer la probabilité classique d'un événement.", items: ["Liste les cas possibles (l'univers)", "Vérifie qu'ils sont équiprobables", "Compte les cas favorables à l'événement", "Calcule le rapport favorables / possibles"], explain: "On définit d'abord l'univers, puis on vérifie l'équiprobabilité, on compte les cas favorables et on calcule le rapport." }
    ]
  }
});
