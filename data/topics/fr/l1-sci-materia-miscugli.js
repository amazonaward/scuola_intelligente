TOPIC('fr', {
  id: "l1-sci-materia-miscugli",
  title: "La matière : corps purs et mélanges",
  intro: "Tout ce qui nous entoure, de l'air que tu respires à l'écran que tu regardes, est de la <b>matière</b> : cela a une masse et occupe de l'espace. Mais la matière n'est pas partout la même : l'eau du robinet, l'or d'une bague et le sable de la plage sont des choses très différentes. Dans cette leçon, nous apprenons à la classer (<b>états de la matière</b>, <b>corps purs</b> et <b>mélanges</b>) et à séparer ce que la nature a mélangé, comme le fait chaque jour un laboratoire de chimie.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce que la matière ?",
      html: `<p>La <b>matière</b> est tout ce qui a une <b>masse</b> et occupe un <b>volume</b>. L'air, que nous ne voyons pas, est de la matière : un ballon gonflé pèse plus qu'un ballon dégonflé.</p>
<p>Les grandeurs physiques d'un corps se répartissent en deux familles :</p>
<ul>
<li><b>propriétés extensives</b> : elles dépendent de la quantité de matière (masse, volume) ;</li>
<li><b>propriétés intensives</b> : elles ne dépendent pas de la quantité, mais caractérisent la substance (masse volumique, température de fusion, température d'ébullition, couleur).</li>
</ul>
<p>Une propriété intensive très utilisée est la <b>masse volumique</b> : ρ = m / V. Elle se mesure en g/cm³ (ou en kg/m³). L'eau à 4 °C a une masse volumique de 1,00 g/cm³ ; le fer environ 7,9 g/cm³ ; l'or environ 19,3 g/cm³. Si deux objets sont faits du même matériau, ils ont la même masse volumique, même si l'un est grand et l'autre petit.</p>
<p>Rappelle-toi la différence entre la <b>masse</b> (quantité de matière, en kg, la même partout) et le <b>poids</b> (force avec laquelle la gravité attire le corps, en newtons : sur la Lune, il vaut environ 1/6 de celui sur Terre).</p>`
    },
    {
      type: "example",
      title: "Flotte ou coule ? Le calcul de la masse volumique",
      html: `<p>Un petit cube d'un matériau inconnu a une masse de <b>54 g</b> et un volume de <b>20 cm³</b>. Quelle est sa masse volumique ? Flotte-t-il dans l'eau ?</p>
<ol>
<li>ρ = m / V = 54 g / 20 cm³ = <b>2,7 g/cm³</b> (c'est la masse volumique de l'aluminium).</li>
<li>L'eau a une masse volumique de 1 g/cm³ : un corps de masse volumique plus grande <b>coule</b>, un corps de masse volumique plus petite <b>flotte</b>.</li>
<li>2,7 &gt; 1 : le cube coule.</li>
</ol>
<p>Un navire en fer flotte parce qu'il est creux : sa masse volumique <i>moyenne</i> (acier + air intérieur) est inférieure à celle de l'eau.</p>`
    },
    {
      type: "text",
      title: "Les trois états de la matière",
      html: `<p>Selon la température et la pression, une même substance peut se présenter sous trois états principaux. Pour les distinguer, on regarde la <b>forme</b> et le <b>volume</b> et, à l'échelle microscopique, la façon dont se déplacent les particules (atomes, molécules ou ions).</p>
<table>
<tr><th>État</th><th>Forme</th><th>Volume</th><th>Particules</th></tr>
<tr><td><b>Solide</b></td><td>propre</td><td>propre</td><td>très proches, à des positions fixes (elles ne font que vibrer) ; ordonnées dans les solides cristallins</td></tr>
<tr><td><b>Liquide</b></td><td>celle du récipient</td><td>propre</td><td>proches mais libres de glisser les unes sur les autres</td></tr>
<tr><td><b>Gazeux</b> (gaz ou vapeur)</td><td>celle du récipient</td><td>celui du récipient</td><td>très éloignées, en mouvement rapide et désordonné</td></tr>
</table>
<p>Le <b>modèle cinétique moléculaire</b> explique tout avec deux idées : les particules sont toujours en mouvement, et leur <b>énergie cinétique moyenne</b> augmente avec la température. Un gaz est compressible parce qu'entre ses particules il n'y a presque que du vide ; un liquide ne l'est pas, parce que ses particules sont déjà en contact.</p>`
    },
    {
      type: "svg",
      title: "Les particules dans les trois états",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<rect x="15" y="40" width="190" height="190" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<rect x="225" y="40" width="190" height="190" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<rect x="435" y="40" width="190" height="190" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<g fill="#0369a1">
<circle cx="45" cy="70" r="12"/><circle cx="75" cy="70" r="12"/><circle cx="105" cy="70" r="12"/><circle cx="135" cy="70" r="12"/><circle cx="165" cy="70" r="12"/>
<circle cx="45" cy="100" r="12"/><circle cx="75" cy="100" r="12"/><circle cx="105" cy="100" r="12"/><circle cx="135" cy="100" r="12"/><circle cx="165" cy="100" r="12"/>
<circle cx="45" cy="130" r="12"/><circle cx="75" cy="130" r="12"/><circle cx="105" cy="130" r="12"/><circle cx="135" cy="130" r="12"/><circle cx="165" cy="130" r="12"/>
<circle cx="45" cy="160" r="12"/><circle cx="75" cy="160" r="12"/><circle cx="105" cy="160" r="12"/><circle cx="135" cy="160" r="12"/><circle cx="165" cy="160" r="12"/>
<circle cx="45" cy="190" r="12"/><circle cx="75" cy="190" r="12"/><circle cx="105" cy="190" r="12"/><circle cx="135" cy="190" r="12"/><circle cx="165" cy="190" r="12"/>
</g>
<g fill="#15803d">
<circle cx="250" cy="170" r="12"/><circle cx="276" cy="196" r="12"/><circle cx="302" cy="170" r="12"/><circle cx="330" cy="200" r="12"/><circle cx="358" cy="178" r="12"/><circle cx="386" cy="200" r="12"/>
<circle cx="262" cy="144" r="12"/><circle cx="292" cy="120" r="12"/><circle cx="330" cy="150" r="12"/><circle cx="364" cy="128" r="12"/><circle cx="392" cy="152" r="12"/><circle cx="318" cy="118" r="12"/>
</g>
<g fill="#b45309">
<circle cx="470" cy="75" r="12"/><circle cx="560" cy="62" r="12"/><circle cx="600" cy="120" r="12"/><circle cx="520" cy="130" r="12"/><circle cx="465" cy="180" r="12"/><circle cx="585" cy="195" r="12"/><circle cx="530" cy="205" r="12"/>
</g>
<g stroke="#b45309" stroke-width="2"><line x1="470" y1="75" x2="500" y2="95"/><line x1="560" y1="62" x2="535" y2="45"/><line x1="585" y1="195" x2="560" y2="215"/></g>
<text x="110" y="30" font-size="20" text-anchor="middle" fill="#0c4a6e" font-weight="bold">SOLIDE</text>
<text x="320" y="30" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">LIQUIDE</text>
<text x="530" y="30" font-size="20" text-anchor="middle" fill="#78350f" font-weight="bold">GAZ</text>
<text x="110" y="256" font-size="15" text-anchor="middle" fill="#1f2937">ordonnées et proches</text>
<text x="320" y="256" font-size="15" text-anchor="middle" fill="#1f2937">proches mais désordonnées</text>
<text x="530" y="256" font-size="15" text-anchor="middle" fill="#1f2937">éloignées et rapides</text>
<text x="320" y="287" font-size="15" text-anchor="middle" fill="#334155">Les traits indiquent le mouvement des particules du gaz</text>
</svg>`,
      caption: "Même substance, trois organisations des particules : ce qui change, ce sont les distances et la liberté de mouvement."
    },
    {
      type: "curiosity",
      title: "Le quatrième état : le plasma",
      html: `<p>Plus de 99 % de la matière visible de l'Univers n'est ni solide, ni liquide, ni gazeuse : c'est du <b>plasma</b>, un gaz si chaud que les atomes perdent leurs électrons et deviennent des ions libres de se déplacer. Le Soleil et les étoiles, les éclairs, les aurores polaires et les tubes au néon sont faits de plasma. Il existe même un cinquième état, le <b>condensat de Bose-Einstein</b>, observé en 1995 en refroidissant des atomes à quelques milliardièmes de degré au-dessus du zéro absolu.</p>`
    },
    {
      type: "text",
      title: "Corps purs et mélanges",
      html: `<p>Un <b>corps pur</b> a une composition définie et des propriétés intensives constantes (par exemple une température d'ébullition précise). Il peut être :</p>
<ul>
<li><b>simple</b> : formé d'un seul type d'atomes, c'est-à-dire d'un seul élément (dioxygène O₂, fer Fe, or Au) ;</li>
<li><b>composé</b> : formé d'atomes d'éléments différents en proportions fixes (eau H₂O, sel de cuisine NaCl) ; on ne peut le décomposer que par des réactions chimiques.</li>
</ul>
<p>Un <b>mélange</b> est formé de deux ou plusieurs substances (les <b>constituants</b>) mélangées sans réagir, en proportions <b>variables</b>. Chaque constituant conserve ses propriétés et peut être séparé par des méthodes <b>physiques</b>.</p>
<ul>
<li><b>Homogène</b> (<b>solution</b>) : il ne présente qu'une seule phase, d'aspect uniforme même au microscope optique. Exemples : eau salée, air, bronze (alliage de cuivre et d'étain), vinaigre.</li>
<li><b>Hétérogène</b> : il présente deux phases ou plus que l'on peut distinguer. Exemples : eau et sable (suspension), huile et eau (émulsion si on agite), granite, brouillard (liquide dans un gaz), fumée (solide dans un gaz).</li>
</ul>
<p>Une <b>phase</b> est une portion de matière aux propriétés uniformes. L'eau avec trois glaçons est un système à <b>deux phases</b> bien qu'il ne contienne qu'une seule substance : attention, phase et substance ne sont pas la même chose.</p>`
    },
    {
      type: "widget",
      title: "Classe la matière",
      widget: "classify",
      options: { groups: ["Corps pur", "Mélange homogène", "Mélange hétérogène"], items: [
        ["Or 24 carats", 0],
        ["Eau distillée", 0],
        ["Air pur", 1],
        ["Eau sucrée (sucre dissous)", 1],
        ["Eau et sable", 2],
        ["Granite", 2],
        ["Dioxygène", 0],
        ["Bronze", 1],
        ["Lait", 2],
        ["Huile et eau", 2]
      ] },
      caption: "Le lait semble uniforme, mais au microscope il contient des gouttelettes de matière grasse en suspension dans l'eau : c'est une émulsion, donc un mélange hétérogène."
    },
    {
      type: "remember",
      title: "Corps pur ou mélange ? Un test pratique",
      html: `<p>Un corps pur, pendant un changement d'état, garde une <b>température constante</b> (l'eau pure bout à 100 °C au niveau de la mer et reste à 100 °C tant qu'il reste du liquide). Un mélange change de température pendant le changement d'état : l'eau salée commence à bouillir un peu au-dessus de 100 °C et la température augmente au fur et à mesure que l'eau s'évapore et que la solution se concentre. C'est cette différence qui permet de les reconnaître au laboratoire.</p>`
    },
    {
      type: "text",
      title: "Les solutions et la concentration",
      html: `<p>Dans une <b>solution</b>, le constituant en plus petite quantité est le <b>soluté</b>, celui en plus grande quantité est le <b>solvant</b>. Le solvant le plus important est l'eau.</p>
<p>La <b>concentration</b> indique la quantité de soluté présente. Les expressions les plus utilisées :</p>
<ul>
<li><b>pourcentage massique</b> (% m/m) = (masse de soluté / masse de solution) × 100 ;</li>
<li><b>pourcentage volumique</b> (% V/V), utilisé pour l'alcool dans les boissons (degré d'alcool) ;</li>
<li><b>concentration en masse</b> (g/L).</li>
</ul>
<p>À une température donnée, le solvant peut dissoudre une quantité maximale de soluté : c'est la <b>solubilité</b>. Au-delà de cette limite, la solution est <b>saturée</b> et le soluté en excès reste au fond. En général, la solubilité des solides augmente avec la température ; celle des <b>gaz</b> diminue (c'est pourquoi une boisson gazeuse chaude perd vite son dioxyde de carbone).</p>`
    },
    {
      type: "example",
      title: "Combien de sel y a-t-il ?",
      html: `<p>Tu dissous <b>30 g</b> de sel dans <b>220 g</b> d'eau. Quel est le pourcentage massique ?</p>
<ol>
<li>Masse de la solution : 30 + 220 = 250 g.</li>
<li>% m/m = 30 / 250 × 100 = <b>12 %</b>.</li>
</ol>
<p>À titre de comparaison, l'eau de mer contient en moyenne environ <b>3,5 %</b> de sels dissous (soit environ 35 g par kg), alors que la mer Morte en contient plus de 30 % : c'est pourquoi on y flotte facilement, car la masse volumique de l'eau y est beaucoup plus élevée.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : classer et calculer",
      questions: [
        { type: "mc", q: "Lequel de ces exemples est un corps pur ?", options: ["Eau de mer", "Eau distillée", "Air", "Lait"], answer: 1, explain: "L'eau distillée n'est formée que de H₂O. Les autres sont des mélanges." },
        { type: "num", q: "Un objet a une masse de 120 g et un volume de 15 cm³. Quelle est sa masse volumique ?", answer: 8, unit: "g/cm³", explain: "ρ = m/V = 120/15 = 8 g/cm³." },
        { type: "tf", q: "Dans un mélange, les constituants perdent leurs propriétés.", answer: false, explain: "Dans les mélanges, les constituants conservent leurs propriétés : on peut les séparer par des méthodes physiques." }
      ]
    },
    {
      type: "text",
      title: "Comment séparer les mélanges",
      html: `<p>Comme dans les mélanges les substances n'ont pas réagi, on les sépare par des <b>méthodes physiques</b>, qui exploitent une différence de propriété. On choisit la méthode selon le type de mélange.</p>
<table>
<tr><th>Méthode</th><th>Mélange</th><th>Propriété exploitée</th></tr>
<tr><td><b>Filtration</b></td><td>solide insoluble + liquide (eau et sable)</td><td>taille des particules</td></tr>
<tr><td><b>Décantation</b></td><td>solide + liquide, ou deux liquides non miscibles (huile et eau, avec une ampoule à décanter)</td><td>masse volumique</td></tr>
<tr><td><b>Centrifugation</b></td><td>suspensions fines (sang : plasma et globules)</td><td>masse volumique, effet accéléré par la rotation</td></tr>
<tr><td><b>Tamisage</b></td><td>solides de granulométrie différente (sable et gravier)</td><td>taille</td></tr>
<tr><td><b>Séparation magnétique</b></td><td>fer + autres solides</td><td>magnétisme</td></tr>
<tr><td><b>Évaporation</b></td><td>soluté solide + solvant (sel et eau)</td><td>volatilité</td></tr>
<tr><td><b>Distillation</b></td><td>liquides miscibles ou solutions (eau et alcool)</td><td>température d'ébullition</td></tr>
<tr><td><b>Chromatographie</b></td><td>mélanges de colorants ou de substances complexes</td><td>affinité différente pour une phase fixe et une phase mobile</td></tr>
<tr><td><b>Extraction par solvant</b></td><td>soluté dissous dans un solvant</td><td>solubilité dans un autre solvant</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Associe la méthode au mélange",
      widget: "match",
      options: { pairs: [
        ["Eau et sable", "Filtration"],
        ["Huile et eau", "Décantation (ampoule à décanter)"],
        ["Sel dissous dans l'eau", "Évaporation"],
        ["Eau et éthanol", "Distillation"],
        ["Limaille de fer et soufre", "Aimant"],
        ["Pigments d'une encre", "Chromatographie"],
        ["Plasma et globules du sang", "Centrifugation"]
      ] },
      caption: "Pour chaque mélange, trouve la propriété qui permet de le séparer."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la distillation",
      intro: "La distillation repose sur une différence de température d'ébullition. Si ce n'est pas clair pour toi, essaie ces images.",
      tabs: [
        {
          label: "🔬 Le schéma du montage",
          html: `<p>On chauffe le mélange dans le ballon : le constituant dont la température d'ébullition est la plus basse (par exemple l'éthanol, 78 °C, par rapport à l'eau, 100 °C) s'évapore le premier. La vapeur monte, passe dans le <b>réfrigérant</b> (un tube refroidi par de l'eau froide qui circule autour) et se <b>condense</b> : le liquide pur tombe dans le récipient de recueil ; on l'appelle le <b>distillat</b>.</p>`,
          svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<circle cx="110" cy="190" r="60" fill="#e0f2fe" stroke="#334155" stroke-width="3"/>
<path d="M56 205 A60 60 0 0 0 164 205 Z" fill="#7dd3fc"/>
<rect x="100" y="95" width="20" height="45" fill="#e0f2fe" stroke="#334155" stroke-width="3"/>
<rect x="60" y="255" width="100" height="20" rx="4" fill="#f59e0b"/>
<text x="110" y="270" font-size="14" text-anchor="middle" fill="#1f2937">chauffage</text>
<line x1="110" y1="95" x2="250" y2="95" stroke="#334155" stroke-width="3"/>
<line x1="250" y1="95" x2="470" y2="160" stroke="#334155" stroke-width="3"/>
<rect x="300" y="100" width="130" height="38" transform="rotate(16 365 119)" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<text x="365" y="75" font-size="16" text-anchor="middle" fill="#0369a1" font-weight="bold">réfrigérant</text>
<path d="M470 160 L470 215" stroke="#334155" stroke-width="3"/>
<path d="M440 220 L500 220 L492 280 L448 280 Z" fill="#dcfce7" stroke="#334155" stroke-width="3"/>
<text x="470" y="298" font-size="14" text-anchor="middle" fill="#14532d">distillat</text>
<text x="110" y="75" font-size="14" text-anchor="middle" fill="#7c2d12">la vapeur monte</text>
<text x="560" y="150" font-size="14" text-anchor="middle" fill="#0369a1">eau froide</text>
</svg>`
        },
        {
          label: "☕ L'analogie de la cafetière italienne",
          html: `<p>Dans la cafetière italienne (moka), tu chauffes l'eau : la vapeur pousse le liquide vers le haut, à travers le filtre. Dans l'appareil à distiller aussi, la chaleur fait passer une substance du liquide à la vapeur, mais ensuite la vapeur se <b>refroidit et redevient liquide</b> : tu le vois chaque fois que la vapeur d'une casserole se condense sur le couvercle et retombe en gouttes. La distillation, c'est exactement cela, fait de façon contrôlée.</p>`
        },
        {
          label: "🧪 Une course de vitesse",
          html: `<p>Imagine deux coureurs : l'éthanol est le plus rapide à se transformer en vapeur, l'eau est plus lente. Si tu chauffes avec soin et que tu arrêtes la course au bon moment, ce sont presque uniquement les rapides qui arrivent dans le récipient de recueil. Comme la séparation n'est jamais parfaite du premier coup, l'industrie utilise la <b>distillation fractionnée</b> (des colonnes à nombreux « plateaux »), qui revient à répéter la course de nombreuses fois : c'est ainsi qu'on obtient à partir du pétrole l'essence, le gazole, le kérosène et d'autres produits.</p>`
        }
      ]
    },
    {
      type: "example",
      title: "Problème : séparer sable, sel et limaille de fer",
      html: `<p>Tu as un mélange de <b>sable, sel et limaille de fer</b>. Comment obtenir les trois constituants purs ?</p>
<ol>
<li><b>Aimant</b> : il attire la limaille de fer, qu'on retire à sec.</li>
<li><b>Eau</b> : on ajoute de l'eau et on mélange ; le sel se dissout, le sable non.</li>
<li><b>Filtration</b> : le sable reste sur le filtre (on le fait sécher).</li>
<li><b>Évaporation</b> du filtrat : l'eau s'en va, le sel cristallise.</li>
</ol>
<p>L'ordre compte : si l'on ajoutait de l'eau avant l'aimant, le fer pourrait rouiller. Réfléchir à un « plan de séparation » est un raisonnement typique de la chimie analytique.</p>`
    },
    {
      type: "curiosity",
      title: "Les marais salants et la chromatographie",
      html: `<p>Le sel de cuisine est encore obtenu aujourd'hui, dans de nombreux marais salants italiens comme ceux de Trapani ou de Cervia (et en France à Guérande ou en Camargue), par <b>évaporation</b> de l'eau de mer dans des bassins peu profonds, chauffés par le soleil et le vent. Quant à la chromatographie, son nom signifie « écriture avec les couleurs » : elle fut utilisée par le botaniste russe <b>Mikhaïl Tsvet</b> vers 1900 pour séparer les pigments des feuilles. C'est aujourd'hui l'outil qui permet de rechercher le dopage, les médicaments et les polluants. Tu peux l'essayer chez toi : une bande de papier filtre, un point de feutre noir lavable et un peu d'eau qui monte par capillarité séparent les couleurs mélangées.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte de la matière : touche les nœuds et découvre le pourquoi",
      nodes: [
        { id: "materia", label: "Matière", x: 50, y: 6, color: "#a855f7", html: "Tout ce qui a une masse et un volume.", why: "La définition remonte aux philosophes grecs : <b>Démocrite</b> (Ve s. av. J.-C.) imagina la matière faite d'atomes indivisibles, <b>Aristote</b> de quatre éléments continus. Ce n'est qu'au début du XIXe siècle que la théorie atomique de <b>Dalton</b> la rendit scientifique." },
        { id: "stati", label: "États de la matière", x: 18, y: 28, color: "#3b82f6", html: "Solide, liquide, gazeux.", why: "On les explique par le <b>modèle cinétique moléculaire</b>, développé au XIXe siècle par Clausius, Maxwell et Boltzmann : ce qui varie avec la température, c'est l'énergie de mouvement des particules et l'intensité des forces qui les maintiennent ensemble." },
        { id: "pura", label: "Corps purs", x: 50, y: 32, color: "#22c55e", html: "Corps simples et composés de composition définie.", why: "La notion de composition définie vient de la <b>loi de Proust</b> (1799) : un composé contient toujours les mêmes éléments dans les mêmes proportions en masse." },
        { id: "miscugli", label: "Mélanges", x: 82, y: 28, color: "#f97316", html: "Plusieurs substances mélangées, en proportions variables.", why: "Si les substances réagissaient entre elles et que les proportions étaient fixes, on n'aurait pas des mélanges mais des composés : c'est pourquoi on reconnaît les mélanges à la possibilité de faire varier les quantités et de séparer les constituants par des méthodes physiques." },
        { id: "omo", label: "Homogènes (solutions)", x: 68, y: 56, color: "#0ea5e9", html: "Une seule phase : air, bronze, eau salée.", why: "Les particules de soluté sont dispersées à l'échelle des molécules ou des ions isolés, trop petites pour être vues ou retenues par un filtre : il faut donc une distillation ou une évaporation." },
        { id: "etero", label: "Hétérogènes", x: 92, y: 56, color: "#ef4444", html: "Plusieurs phases visibles : eau et sable, granite.", why: "Les particules dispersées sont grosses ou agrégées, donc plus denses ou plus grandes que le milieu : on les sépare par décantation, filtration ou tamisage." },
        { id: "metodi", label: "Méthodes de séparation", x: 76, y: 82, color: "#14b8a6", html: "Filtration, distillation, chromatographie…", why: "Chaque méthode exploite une propriété <b>intensive</b> différente entre les constituants (masse volumique, température d'ébullition, solubilité, taille) : c'est la raison pour laquelle le choix dépend du mélange." },
        { id: "densita", label: "Masse volumique", x: 28, y: 62, color: "#eab308", html: "ρ = m/V, propriété intensive.", why: "On raconte qu'<b>Archimède</b> (IIIe s. av. J.-C.) découvrit le principe de la poussée hydrostatique justement en cherchant un moyen de vérifier si la couronne de Hiéron était en or pur, en comparant les masses volumiques sans abîmer l'objet." }
      ],
      edges: [
        ["materia", "stati", "se présente sous des"],
        ["materia", "pura", "se classe en"],
        ["materia", "miscugli", "se classe en"],
        ["miscugli", "omo", "peuvent être"],
        ["miscugli", "etero", "peuvent être"],
        ["omo", "metodi", "se séparent par des"],
        ["etero", "metodi", "se séparent par des"],
        ["pura", "densita", "ont une"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : séparations",
      questions: [
        { type: "mc", q: "Pour séparer l'huile et l'eau, on utilise…", options: ["la distillation", "l'ampoule à décanter (décantation)", "l'aimant"], answer: 1, explain: "Les deux liquides ne se mélangent pas et ont des masses volumiques différentes : l'huile, moins dense, reste au-dessus." },
        { type: "mc", q: "L'air est…", options: ["un corps pur", "un mélange homogène de gaz", "un mélange hétérogène"], answer: 1, explain: "C'est un mélange de diazote (78 %), de dioxygène (21 %) et d'autres gaz : une seule phase." },
        { type: "tf", q: "Pendant l'ébullition d'un corps pur, la température reste constante.", answer: true, explain: "La chaleur fournie sert à changer d'état, pas à élever la température." }
      ]
    }
  ],
  glossary: [
    { t: "Matière", d: "Tout ce qui a une masse et occupe un volume." },
    { t: "Masse volumique", d: "Rapport entre la masse et le volume d'un corps : ρ = m/V." },
    { t: "Propriété intensive", d: "Propriété qui ne dépend pas de la quantité de matière (masse volumique, température d'ébullition)." },
    { t: "État de la matière", d: "Façon dont les particules sont organisées : solide, liquide, gazeux." },
    { t: "Corps pur", d: "Matière de composition définie : un corps simple ou un corps composé." },
    { t: "Mélange", d: "Ensemble de plusieurs substances non combinées chimiquement, en proportions variables." },
    { t: "Phase", d: "Portion de matière aux propriétés uniformes, séparée du reste par une surface." },
    { t: "Solution", d: "Mélange homogène d'un soluté dans un solvant." },
    { t: "Solubilité", d: "Quantité maximale de soluté qui peut se dissoudre dans une quantité donnée de solvant à une température donnée." },
    { t: "Distillation", d: "Séparation de liquides fondée sur la différence de température d'ébullition." },
    { t: "Chromatographie", d: "Technique de séparation fondée sur l'affinité différente des constituants pour une phase fixe et une phase mobile." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quelle propriété NE dépend PAS de la quantité de matière ?", options: ["Masse", "Volume", "Masse volumique"], answer: 2, explain: "La masse volumique est une propriété intensive : elle est la même pour un gramme et pour un kilo du même matériau." },
      { type: "num", q: "Un bloc a une masse de 540 g et un volume de 200 cm³. Quelle est sa masse volumique ?", answer: 2.7, tol: 0.01, unit: "g/cm³", explain: "ρ = 540/200 = 2,7 g/cm³." },
      { type: "mc", q: "Dans quel état les particules sont-elles très éloignées et en mouvement rapide et désordonné ?", options: ["Solide", "Liquide", "Gazeux"], answer: 2, explain: "Dans les gaz, les forces entre les particules sont négligeables et le volume est celui du récipient." },
      { type: "tf", q: "Le bronze, alliage de cuivre et d'étain, est un mélange homogène.", answer: true, explain: "Il ne présente qu'une seule phase et ses constituants sont en proportions variables." },
      { type: "tf", q: "Un mélange a toujours une température d'ébullition constante.", answer: false, explain: "Seuls les corps purs gardent une température constante pendant un changement d'état." },
      { type: "mc", q: "Pour obtenir de l'eau potable à partir de l'eau de mer, en exploitant la différence de volatilité, on utilise…", options: ["la filtration", "la distillation", "le tamisage"], answer: 1, explain: "L'eau s'évapore puis se condense, en laissant les sels : c'est le principe des usines de dessalement thermique." },
      { type: "num", q: "Tu dissous 15 g de sucre dans 135 g d'eau. Quel est le % m/m ?", answer: 10, unit: "%", explain: "15 / (15 + 135) × 100 = 10 %." },
      { type: "order", q: "Range dans l'ordre les étapes pour séparer sable, sel et fer.", items: ["Passer l'aimant", "Ajouter de l'eau et mélanger", "Filtrer", "Faire évaporer le filtrat"], explain: "On retire d'abord le fer à sec, puis on dissout le sel, on filtre le sable et enfin on récupère le sel." },
      { type: "text", q: "Comment s'appelle le constituant en plus grande quantité dans une solution ?", answer: ["solvant", "le solvant"], explain: "Le solvant est le constituant majoritaire ; le soluté est celui qui se dissout." },
      { type: "mc", q: "Une suspension de globules rouges dans le plasma se sépare par…", options: ["centrifugation", "évaporation", "chromatographie"], answer: 0, explain: "La rotation rapide accentue la différence de masse volumique et les globules se déposent au fond." }
    ]
  }
});
