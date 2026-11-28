TOPIC('fr', {
  id: "l2-mat-disequazioni-primo-grado",
  title: "Inéquations du premier degré",
  intro: "Un ascenseur supporte <i>au maximum</i> 600 kg ; un abonnement devient avantageux <i>à partir d'</i>un certain nombre d'entrées ; pour réussir un examen, il faut <i>au moins</i> 10 points sur 20. Dans la vie réelle, on ne cherche souvent pas une valeur précise, mais un <b>intervalle</b> de valeurs acceptables. Les <b>inéquations</b> sont l'outil qui le permet. Rappelons les équations du premier degré de l'an dernier et découvrons la règle nouvelle et piégeuse : <b>ce qui se passe quand on multiplie par un nombre négatif</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Inégalités et inéquations",
      html: `<p>Une <b>inégalité</b> compare deux quantités avec l'un des symboles <b>&lt;</b> (strictement inférieur), <b>&gt;</b> (strictement supérieur), <b>≤</b> (inférieur ou égal), <b>≥</b> (supérieur ou égal). Une <b>inéquation</b> est une inégalité qui contient une <b>inconnue</b> : elle est vraie pour certaines valeurs de x et fausse pour d'autres. L'ensemble des valeurs qui la rendent vraie est l'<b>ensemble des solutions</b> et, contrairement à une équation du premier degré, il contient en général une <b>infinité de nombres</b>.</p>
<p>Exemple : <b>x + 3 &gt; 7</b> est vraie pour x = 5, x = 4,1, x = 100… et fausse pour x = 4 ou x = 0. Les solutions sont tous les nombres <b>strictement supérieurs à 4</b>.</p>
<p>On écrit les solutions de trois façons équivalentes :</p>
<ul>
<li><b>Inégalité</b> : x &gt; 4</li>
<li><b>Intervalle</b> : ]4 ; +∞[, avec le crochet <b>tourné vers l'extérieur</b> quand la borne est exclue et <b>tourné vers l'intérieur</b> quand elle est incluse : x ≥ 4 devient [4 ; +∞[. Du côté de l'infini, le crochet est toujours ouvert. (En Italie et dans les pays anglophones, on écrit (4, +∞) et [4, +∞), avec une parenthèse pour une borne exclue.)</li>
<li><b>Représentation graphique</b> sur la droite des réels : <b>point vide</b> (○) si la borne est exclue, <b>point plein</b> (●) si elle est incluse, avec un trait sur la partie qui contient les solutions.</li>
</ul>
<p>Deux inéquations sont <b>équivalentes</b> si elles ont les mêmes solutions. Si aucun nombre ne la vérifie, l'inéquation est <b>impossible</b> (solution : ensemble vide) ; si tous les nombres réels la vérifient, c'est une <b>identité</b>.</p>`
    },
    {
      type: "text",
      title: "Les deux règles d'équivalence (et la règle qui change)",
      html: `<p>Comme pour les équations, on résout en transformant l'inéquation en d'autres inéquations équivalentes de plus en plus simples :</p>
<ul>
<li><b>1re règle</b> : si l'on ajoute ou soustrait la <b>même expression</b> aux deux membres, le sens de l'inégalité ne change pas. (D'où la règle du « passage de l'autre côté » : un terme change de membre en changeant de signe.)</li>
<li><b>2e règle</b> : si l'on multiplie ou divise les deux membres par un <b>nombre strictement positif</b>, le sens <b>ne change pas</b> ; par un <b>nombre strictement négatif</b>, le sens <b>s'inverse</b> (&lt; devient &gt;, ≤ devient ≥ et inversement).</li>
</ul>
<p>Pourquoi ? Essaie avec une inégalité vraie : 2 &lt; 5. En multipliant par 3 : 6 &lt; 15, toujours vrai. En multipliant par −3 : −6 et −15 ; mais −6 se trouve à <b>droite</b> de −15 sur la droite des réels, donc −6 &gt; −15. Changer de signe « réfléchit » la droite des réels et l'ordre s'inverse.</p>
<p>⚠️ C'est l'erreur la plus fréquente : <b>−2x &gt; 6</b> donne <b>x &lt; −3</b>, et non x &gt; −3. Vérifie toujours avec une valeur test : x = −5 → −2·(−5) = 10 &gt; 6 ✔️ ; alors que x = 0 → 0 &gt; 6 est faux.</p>`
    },
    {
      type: "remember",
      title: "La méthode en six étapes",
      html: `<ol>
<li>Supprime les <b>parenthèses</b>.</li>
<li>S'il y a des dénominateurs numériques, multiplie tout par leur <b>PPCM</b> (positif, donc le sens reste le même).</li>
<li><b>Fais passer</b> les termes en x à gauche et les nombres à droite (en changeant leur signe).</li>
<li><b>Réduis</b> les termes semblables : ax &gt; b (ou &lt;, ≥, ≤).</li>
<li><b>Divise</b> par a : si a est <b>négatif</b>, inverse le sens.</li>
<li><b>Écris</b> les solutions sous forme d'inégalité, d'intervalle ou de graphique, et fais une <b>vérification</b> avec un nombre test.</li>
</ol>`
    },
    {
      type: "example",
      title: "Exemple guidé",
      html: `<p>Résous <b>(x − 1)/2 − (2x + 3)/3 ≤ 1</b>.</p>
<ol>
<li>PPCM(2, 3) = 6 : 3(x − 1) − 2(2x + 3) ≤ 6</li>
<li>Parenthèses : 3x − 3 − 4x − 6 ≤ 6</li>
<li>Je réduis : −x − 9 ≤ 6 → −x ≤ 15</li>
<li>Je divise par −1 et j'<b>inverse le sens</b> : <b>x ≥ −15</b>, c'est-à-dire [−15 ; +∞[.</li>
<li>Test avec x = 0 : −1/2 − 1 = −3/2 ≤ 1 ✔️. Test avec x = −20 : −21/2 − (−37/3) = −10,5 + 12,33… ≈ 1,83 &gt; 1, non vérifiée, comme prévu.</li>
</ol>`
    },
    {
      type: "svg",
      title: "La droite des réels : point plein ou vide ?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="30" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">Même nombre 2, deux inéquations différentes</text>
<line x1="40" y1="100" x2="560" y2="100" stroke="#475569" stroke-width="2"/>
<line x1="300" y1="92" x2="300" y2="108" stroke="#475569" stroke-width="2"/>
<text x="300" y="128" font-size="16" text-anchor="middle" fill="#334155">2</text>
<line x1="300" y1="100" x2="560" y2="100" stroke="#2563eb" stroke-width="6"/>
<circle cx="300" cy="100" r="9" fill="#f8fafc" stroke="#2563eb" stroke-width="3"/>
<text x="40" y="70" font-size="16" fill="#1d4ed8" font-weight="bold">x &gt; 2   →   ]2 ; +∞[   2 exclu</text>
<line x1="40" y1="210" x2="560" y2="210" stroke="#475569" stroke-width="2"/>
<line x1="300" y1="202" x2="300" y2="218" stroke="#475569" stroke-width="2"/>
<text x="300" y="238" font-size="16" text-anchor="middle" fill="#334155">2</text>
<line x1="40" y1="210" x2="300" y2="210" stroke="#ea580c" stroke-width="6"/>
<circle cx="300" cy="210" r="9" fill="#ea580c" stroke="#ea580c" stroke-width="3"/>
<text x="40" y="180" font-size="16" fill="#9a3412" font-weight="bold">x ≤ 2   →   ]−∞ ; 2]   2 inclus</text>
<text x="300" y="280" font-size="14" text-anchor="middle" fill="#475569">Point vide = exclu · Point plein = inclus</text>
</svg>`,
      caption: "La représentation sur la droite montre d'un coup d'œil quels nombres sont solutions de l'inéquation."
    },
    {
      type: "widget",
      title: "À toi : où tombe le nombre ?",
      widget: "numberLine",
      options: { min: -10, max: 10, step: 1, marks: [-3] },
      caption: "Résous −2x > 6 : la solution est x < −3. Déplace-toi sur la droite et vérifie que les nombres à gauche de −3 (comme −4 et −5) conviennent, et ceux à droite non."
    },
    {
      type: "example",
      title: "Exemple concret : l'abonnement à la salle de sport",
      html: `<p>Une salle de sport propose deux formules : l'<b>entrée à l'unité</b> à 8 € ou l'<b>abonnement</b> à 30 € par mois plus 4 € par entrée. À partir de combien d'entrées par mois l'abonnement est-il avantageux ?</p>
<ul>
<li>Inconnue : n = nombre d'entrées par mois.</li>
<li>L'abonnement est avantageux s'il coûte <i>moins cher</i> : 30 + 4n &lt; 8n.</li>
<li>30 &lt; 4n → n &gt; 7,5. Comme n est un entier, l'abonnement est avantageux à partir de <b>8 entrées</b>.</li>
<li>Remarque : le contexte impose que la solution soit un entier naturel ; dans l'ensemble des solutions algébriques (n &gt; 7,5), on garde donc la partie qui a un sens dans le problème.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : les règles de base",
      questions: [
        { type: "mc", q: "En résolvant −3x &lt; 12, on obtient…", options: ["x &lt; −4", "x &gt; −4", "x &gt; 4"], answer: 1, explain: "En divisant par −3, le sens s'inverse : x &gt; −4." },
        { type: "tf", q: "Si l'on divise les deux membres d'une inéquation par un nombre positif, le sens change.", answer: false, explain: "Le sens ne change que si l'on multiplie ou divise par un nombre négatif." },
        { type: "mc", q: "L'intervalle [2 ; 7[ contient…", options: ["2 mais pas 7", "7 mais pas 2", "à la fois 2 et 7"], answer: 0, explain: "Le crochet tourné vers l'intérieur inclut la borne (2), le crochet tourné vers l'extérieur l'exclut (7)." }
      ]
    },
    {
      type: "text",
      title: "Inéquations fractionnaires et étude du signe",
      html: `<p>Une inéquation est <b>fractionnaire</b> (ou inéquation quotient) quand l'inconnue apparaît dans un dénominateur, par exemple <b>(x − 1)/(x + 2) ≥ 0</b>. Ici, <b>on ne peut pas supprimer les dénominateurs</b> comme dans les équations : multiplier par (x + 2) n'est permis que si l'on connaît le signe de (x + 2), qui change selon x ! On utilise à la place l'<b>étude du signe</b>.</p>
<ol>
<li>Fais tout passer à gauche, avec 0 à droite, et réduis à <b>une seule fraction</b> N(x)/D(x).</li>
<li><b>CE</b> (conditions d'existence, ou valeurs interdites) : D(x) ≠ 0.</li>
<li>Étudie le <b>signe du numérateur</b> (N &gt; 0) et le <b>signe du dénominateur</b> (D &gt; 0), chacun sur sa propre ligne.</li>
<li>Construis le <b>tableau de signes</b> : sous chaque zone, écris le signe du quotient (+·+ = +, +·− = −, −·− = +).</li>
<li>Choisis les zones qui répondent à la question (&gt; 0 ou &lt; 0). Avec ≥ ou ≤, les zéros du <b>numérateur</b> sont inclus, ceux du <b>dénominateur</b> jamais.</li>
</ol>
<p><b>Exemple</b> : (x − 1)/(x + 2) ≥ 0. CE : x ≠ −2. Numérateur ≥ 0 pour x ≥ 1. Dénominateur &gt; 0 pour x &gt; −2. Tableau : pour x &lt; −2, numérateur − et dénominateur − → fraction + ; entre −2 et 1, numérateur − et dénominateur + → − ; pour x ≥ 1, les deux + → +. Solution : <b>x &lt; −2 ou x ≥ 1</b>, c'est-à-dire ]−∞ ; −2[ ∪ [1 ; +∞[.</p>`
    },
    {
      type: "svg",
      title: "Le tableau de signes",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">(x − 1)/(x + 2) ≥ 0</text>
<line x1="150" y1="50" x2="150" y2="250" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="380" y1="50" x2="380" y2="250" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<text x="150" y="268" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">−2</text>
<text x="380" y="268" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">1</text>
<text x="20" y="90" font-size="16" fill="#334155">N : x − 1 ≥ 0</text>
<line x1="150" y1="104" x2="380" y2="104" stroke="#dc2626" stroke-width="3" stroke-dasharray="3 4"/>
<line x1="380" y1="104" x2="580" y2="104" stroke="#16a34a" stroke-width="4"/>
<line x1="20" y1="104" x2="150" y2="104" stroke="#dc2626" stroke-width="3" stroke-dasharray="3 4"/>
<circle cx="380" cy="104" r="7" fill="#16a34a"/>
<text x="20" y="150" font-size="16" fill="#334155">D : x + 2 &gt; 0</text>
<line x1="20" y1="164" x2="150" y2="164" stroke="#dc2626" stroke-width="3" stroke-dasharray="3 4"/>
<line x1="150" y1="164" x2="580" y2="164" stroke="#16a34a" stroke-width="4"/>
<circle cx="150" cy="164" r="7" fill="#f8fafc" stroke="#16a34a" stroke-width="3"/>
<text x="20" y="215" font-size="16" fill="#334155" font-weight="bold">N/D</text>
<text x="85" y="215" font-size="20" text-anchor="middle" fill="#16a34a" font-weight="bold">+</text>
<text x="265" y="215" font-size="20" text-anchor="middle" fill="#dc2626" font-weight="bold">−</text>
<text x="480" y="215" font-size="20" text-anchor="middle" fill="#16a34a" font-weight="bold">+</text>
</svg>`,
      caption: "Trait plein vert = positif ; pointillés rouges = négatif. La fraction est ≥ 0 à gauche de −2 (exclu) et à partir de 1 (inclus)."
    },
    {
      type: "example",
      title: "Exemple : le fourgon de livraison",
      html: `<p>Une entreprise de transport doit livrer un colis en 3 heures au plus. Le chargement et le déchargement prennent 40 minutes au total ; le trajet est long de 120 km. À quelle vitesse moyenne minimale (en km/h) le fourgon doit-il rouler ?</p>
<ul>
<li>Temps disponible pour conduire : 3 h − 2/3 h = 7/3 h.</li>
<li>Le temps de conduite doit être d'au plus 7/3 h : 120/v ≤ 7/3, avec v &gt; 0.</li>
<li>Je multiplie par v (positif, le sens reste le même) : 120 ≤ (7/3)v → v ≥ 120 · 3/7 = 360/7 ≈ 51,4.</li>
<li>Le fourgon doit maintenir une moyenne d'au moins <b>51,4 km/h environ</b>. C'est une inéquation fractionnaire dont le dénominateur est forcément positif : c'est pourquoi on peut multiplier sans étudier le signe.</li>
</ul>`
    },
    {
      type: "text",
      title: "Systèmes d'inéquations",
      html: `<p>Parfois, une seule condition ne suffit pas : le nombre de passagers d'une voiture doit être <i>au moins 1</i> <b>et</b> <i>au plus 5</i>. Un <b>système d'inéquations</b> exige que <b>toutes</b> les inéquations soient vraies en même temps : les solutions sont l'<b>intersection</b> (∩) des ensembles de solutions.</p>
<ol>
<li>Résous <b>chaque</b> inéquation séparément.</li>
<li>Représente-les sur des <b>droites parallèles</b>, l'une sous l'autre, en alignant les nombres.</li>
<li>Cherche la zone où <b>tous</b> les traits sont présents (on trace en général un trait plein pour les solutions).</li>
<li>Écris le résultat ; s'il n'y a aucune zone commune, le système est <b>impossible</b>.</li>
</ol>
<p><b>Exemple</b> : { x − 1 &gt; 0 ; 2x + 4 ≤ 10 }. Première : x &gt; 1. Deuxième : 2x ≤ 6 → x ≤ 3. Intersection : <b>1 &lt; x ≤ 3</b>, c'est-à-dire ]1 ; 3].</p>
<p><b>Exemple impossible</b> : { x &gt; 5 ; x &lt; 2 }. Aucun nombre n'est à la fois supérieur à 5 et inférieur à 2.</p>
<p>Un <b>encadrement</b> (double inégalité) comme 2 &lt; 3x − 1 ≤ 8 est un système déguisé : 2 &lt; 3x − 1 et 3x − 1 ≤ 8, ce qui équivaut à 3 &lt; 3x ≤ 9, donc 1 &lt; x ≤ 3.</p>`
    },
    {
      type: "svg",
      title: "Intersection des solutions",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">{ x &gt; 1 ; x ≤ 3 }  →  1 &lt; x ≤ 3</text>
<line x1="40" y1="90" x2="560" y2="90" stroke="#475569" stroke-width="2"/>
<line x1="200" y1="90" x2="560" y2="90" stroke="#2563eb" stroke-width="6"/>
<circle cx="200" cy="90" r="9" fill="#f8fafc" stroke="#2563eb" stroke-width="3"/>
<text x="200" y="125" font-size="16" text-anchor="middle" fill="#334155">1</text>
<text x="40" y="70" font-size="16" fill="#1d4ed8" font-weight="bold">x &gt; 1</text>
<line x1="40" y1="180" x2="560" y2="180" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="180" x2="360" y2="180" stroke="#ea580c" stroke-width="6"/>
<circle cx="360" cy="180" r="9" fill="#ea580c"/>
<text x="360" y="215" font-size="16" text-anchor="middle" fill="#334155">3</text>
<text x="40" y="160" font-size="16" fill="#9a3412" font-weight="bold">x ≤ 3</text>
<rect x="200" y="245" width="160" height="14" fill="#16a34a" opacity="0.8"/>
<circle cx="200" cy="252" r="9" fill="#f8fafc" stroke="#16a34a" stroke-width="3"/>
<circle cx="360" cy="252" r="9" fill="#16a34a"/>
<text x="40" y="270" font-size="16" fill="#166534" font-weight="bold">Commun</text>
<line x1="200" y1="55" x2="200" y2="250" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
<line x1="360" y1="55" x2="360" y2="250" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
</svg>`,
      caption: "La partie verte est la zone où les deux conditions sont vraies : l'intersection des solutions."
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? D'où viennent &lt; et &gt;",
      html: `<p>Les symboles <b>&lt;</b> et <b>&gt;</b> ont été introduits par l'Anglais <b>Thomas Harriot</b>, mathématicien et astronome, dans son traité posthume <i>Artis Analyticae Praxis</i> (1631). Avant lui, on écrivait les inégalités en toutes lettres. Le signe = était apparu en 1557 avec Robert Recorde, qui choisit deux traits parallèles « parce que rien ne peut être plus égal que deux droites jumelles ».</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Inéquations et optimisation",
      html: `<p>Les entreprises utilisent des systèmes d'inéquations tous les jours : <i>« avec 40 heures de travail et 200 kg de matière première, combien de produits A et B faut-il fabriquer pour gagner le plus ? »</i> C'est la <b>programmation linéaire</b>, formalisée au XXe siècle, née en grande partie des besoins logistiques de la Seconde Guerre mondiale et utilisée aujourd'hui pour les horaires des trains, les plannings dans les hôpitaux et les trajets des avions. Chaque contrainte est une inéquation du premier degré.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les inéquations",
      intro: "Si la règle « on inverse le sens » te semble arbitraire, voici trois façons de la voir de tes propres yeux.",
      tabs: [
        {
          label: "📏 La droite réfléchie",
          html: `<p>Prends la droite des réels et imagine que tu multiplies chaque point par −1 : 3 va en −3, −5 va en 5. Le résultat est une <b>symétrie</b> par rapport à zéro : ce qui était à droite passe à gauche et inversement. L'ordre s'inverse, donc 2 &lt; 5 devient −2 &gt; −5. Multiplier par −3, c'est une symétrie suivie d'un agrandissement : l'inversion demeure.</p>`,
          widget: "numberLine",
          options: { min: -6, max: 6, step: 1, marks: [-5, -2, 2, 5] }
        },
        {
          label: "🌡️ Le thermomètre",
          html: `<p>Imagine une expression comme la <b>hauteur d'un thermomètre</b>. Dire « 5 − x &gt; 2 » veut dire « la température 5 − x est au-dessus de 2 ». Si x augmente, 5 − x <i>diminue</i> : x doit être assez petit, c'est-à-dire x &lt; 3. Comprendre si une fonction <b>croît ou décroît</b> avec x (coefficient positif ou négatif) explique pourquoi le sens s'inverse dans le second cas.</p>`
        },
        {
          label: "📈 Avec le graphique",
          html: `<p>Trace la droite y = ax + b et la droite y = 0 (l'axe des abscisses). L'inéquation ax + b &gt; 0 demande <b>où la droite est au-dessus de l'axe</b>. Si la droite monte (a &gt; 0), elle est au-dessus à droite du point où elle coupe l'axe ; si elle descend (a &lt; 0), elle est au-dessus à gauche : voilà qui explique l'inversion du sens. Les inéquations deviennent des questions du type <b>« quand le graphique est-il au-dessus ou au-dessous ? »</b>.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="30" y1="150" x2="570" y2="150" stroke="#475569" stroke-width="2"/><line x1="300" y1="20" x2="300" y2="280" stroke="#475569" stroke-width="2"/><line x1="80" y1="250" x2="260" y2="50" stroke="#2563eb" stroke-width="4"/><line x1="340" y1="50" x2="520" y2="250" stroke="#ea580c" stroke-width="4"/><text x="40" y="270" font-size="16" fill="#1d4ed8" font-weight="bold">a &gt; 0 : monte</text><text x="400" y="270" font-size="16" fill="#9a3412" font-weight="bold">a &lt; 0 : descend</text><text x="310" y="170" font-size="16" fill="#334155">x</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte mentale des inéquations",
      nodes: [
        { id: "dis", label: "Inéquation", x: 50, y: 6, color: "#6366f1", html: "Inégalité avec une inconnue : ses solutions forment en général un intervalle.", why: "Elle exprime des conditions du type « au moins », « au plus », « dans la limite de », typiques des problèmes réels : coûts, capacités, durées." },
        { id: "p1", label: "1re règle", x: 18, y: 28, color: "#16a34a", html: "Ajouter ou soustraire la même expression : le sens ne change pas.", why: "Déplacer deux nombres de la même quantité le long de la droite ne modifie pas leur ordre." },
        { id: "p2", label: "2e règle", x: 82, y: 28, color: "#f59e0b", html: "Multiplier/diviser par un nombre ≠ 0 : s'il est négatif, on inverse le sens.", why: "Multiplier par un négatif réfléchit la droite par rapport à zéro : l'ordre s'inverse. C'est pourquoi c'est la règle la plus importante à retenir." },
        { id: "intervalli", label: "Intervalles", x: 50, y: 48, color: "#a855f7", html: "Notation des ensembles de solutions : crochet vers l'extérieur = exclu, vers l'intérieur = inclus.", why: "On ne peut pas énumérer une infinité de nombres réels : on décrit l'ensemble par ses bornes, une notion de base de l'analyse." },
        { id: "fratte", label: "Fractionnaires", x: 18, y: 72, color: "#0ea5e9", html: "On se ramène à N/D ≷ 0 et on étudie le signe avec un tableau.", why: "On ne peut pas multiplier par D(x) sans connaître son signe : c'est pourquoi on étudie le signe du numérateur et du dénominateur." },
        { id: "sistemi", label: "Systèmes", x: 82, y: 72, color: "#ef4444", html: "Plusieurs inéquations à la fois : solutions = intersection.", why: "Le connecteur logique « et » correspond à l'intersection d'ensembles : on retrouve la logique des premières années." },
        { id: "prob", label: "Problèmes", x: 50, y: 92, color: "#22c55e", html: "On traduit des contraintes en inéquations et on interprète l'intervalle.", why: "La solution algébrique doit toujours être confrontée au contexte : par exemple, un nombre de personnes est un entier positif." }
      ],
      edges: [
        ["dis", "p1", "se transforme avec la"],
        ["dis", "p2", "se transforme avec la"],
        ["p1", "intervalli", "mène aux"],
        ["p2", "intervalli", "mène aux"],
        ["intervalli", "fratte", "étude du signe"],
        ["intervalli", "sistemi", "intersection"],
        ["sistemi", "prob", "modélisent"],
        ["fratte", "prob", "modélisent"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : fractionnaires et systèmes",
      questions: [
        { type: "mc", q: "La solution du système { x &gt; 2 ; x ≤ 6 } est…", options: ["2 &lt; x ≤ 6", "x &gt; 6", "x ≤ 2"], answer: 0, explain: "L'intersection de x &gt; 2 et de x ≤ 6 est l'intervalle ]2 ; 6]." },
        { type: "mc", q: "Dans une inéquation fractionnaire avec ≥ 0, les zéros du dénominateur…", options: ["sont toujours inclus", "ne sont jamais inclus", "ne sont inclus que si le numérateur est positif"], answer: 1, explain: "Le dénominateur ne peut pas être nul : ses zéros sont toujours exclus (valeurs interdites)." },
        { type: "mc", q: "{ x &gt; 5 ; x &lt; 2 } est…", options: ["déterminé", "impossible", "indéterminé"], answer: 1, explain: "Il n'existe pas de nombres supérieurs à 5 et inférieurs à 2 : aucune solution." }
      ]
    }
  ],
  glossary: [
    { t: "Inéquation", d: "Inégalité contenant une inconnue, vérifiée pour un ensemble de valeurs." },
    { t: "Intervalle", d: "Ensemble des nombres compris entre deux bornes ; crochet tourné vers l'extérieur si la borne est exclue, vers l'intérieur si elle est incluse." },
    { t: "Sens de l'inégalité", d: "Le symbole (&lt;, &gt;, ≤, ≥) qui indique quel membre est le plus grand." },
    { t: "Inéquations équivalentes", d: "Inéquations qui ont le même ensemble de solutions." },
    { t: "Inéquation fractionnaire", d: "Inéquation dont l'inconnue figure au dénominateur." },
    { t: "Tableau de signes", d: "Tableau qui indique le signe de chaque facteur et du produit ou du quotient dans les différentes zones." },
    { t: "Système d'inéquations", d: "Ensemble d'inéquations qui doivent être vérifiées toutes à la fois : les solutions sont l'intersection." },
    { t: "Intersection", d: "Ensemble des éléments qui appartiennent à tous les ensembles considérés." },
    { t: "Ensemble vide", d: "Ensemble sans aucun élément (∅) : c'est la solution d'une inéquation impossible." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Résous : −4x + 3 &lt; 11", options: ["x &lt; −2", "x &gt; −2", "x &gt; 2"], answer: 1, explain: "−4x &lt; 8 ; en divisant par −4, le sens s'inverse : x &gt; −2." },
      { type: "mc", q: "L'ensemble des solutions de 3x − 2 ≥ 7 est…", options: ["]3 ; +∞[", "[3 ; +∞[", "]−∞ ; 3]"], answer: 1, explain: "3x ≥ 9 → x ≥ 3, avec 3 inclus : [3 ; +∞[." },
      { type: "num", q: "Quel est le plus petit nombre entier qui vérifie 2(x − 1) &gt; 7 ?", answer: 5, explain: "2x − 2 &gt; 7 → x &gt; 4,5 ; le premier entier supérieur à 4,5 est 5." },
      { type: "tf", q: "En multipliant par −1 les deux membres de 2 &lt; 5, on obtient −2 &lt; −5.", answer: false, explain: "Le sens s'inverse : −2 &gt; −5." },
      { type: "mc", q: "(x − 4)/(x + 1) &gt; 0 est vérifiée pour…", options: ["x &lt; −1 ou x &gt; 4", "−1 &lt; x &lt; 4", "x &gt; 4 seulement"], answer: 0, explain: "N &gt; 0 pour x &gt; 4 ; D &gt; 0 pour x &gt; −1 ; le quotient est positif à gauche de −1 et à droite de 4." },
      { type: "mc", q: "Le système { 2x − 1 &gt; 3 ; x &lt; 5 } a pour solution…", options: ["2 &lt; x &lt; 5", "x &gt; 5", "x &lt; 2"], answer: 0, explain: "La première donne x &gt; 2 ; avec x &lt; 5, l'intersection est ]2 ; 5[." },
      { type: "tf", q: "L'inéquation 3(x + 1) &gt; 3x + 5 est impossible.", answer: true, explain: "Elle se réduit à 3 &gt; 5, faux pour tout x : aucune solution." },
      { type: "num", q: "Un taxi coûte 3 € de prise en charge plus 1,50 € par km. Avec un budget de 18 €, quel est le nombre maximal de kilomètres que l'on peut parcourir ?", answer: 10, unit: "km", explain: "3 + 1,5x ≤ 18 → 1,5x ≤ 15 → x ≤ 10." },
      { type: "order", q: "Range dans l'ordre les étapes de résolution d'une inéquation fractionnaire.", items: ["Tout faire passer à gauche avec 0 à droite", "Réduire à une seule fraction N/D", "Écrire les conditions d'existence", "Étudier le signe de N et de D", "Construire le tableau de signes et choisir les zones"], explain: "On prépare la forme N/D ≷ 0, puis on étudie le signe et on lit la solution dans le tableau." },
      { type: "text", q: "Comment s'appelle le mathématicien anglais qui a introduit les symboles &lt; et &gt; en 1631 (prénom ou nom) ?", answer: ["harriot", "thomas harriot", "hariot", "thomas hariot"], explain: "Thomas Harriot les a utilisés dans son traité posthume Artis Analyticae Praxis (1631)." }
    ]
  }
});
