TOPIC('fr', {
  id: "l2-sci-membrana-trasporti",
  title: "Membrane et échanges cellulaires",
  intro: "Une cellule n'est pas une pièce fermée : elle doit faire entrer des nutriments et de l'oxygène, faire sortir des déchets et des signaux, tout en gardant un intérieur différent de l'extérieur. Le rôle de gardien est tenu par la <b>membrane plasmique</b>, épaisse d'à peine 7 à 8 nanomètres mais capable de trier chaque molécule. Dans cette leçon, nous étudions sa structure et la façon dont se font les <b>échanges</b> : <b>diffusion</b>, <b>osmose</b>, <b>transport actif</b>, <b>endocytose</b> et <b>exocytose</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "La structure de la membrane : le modèle de la mosaïque fluide",
      html: `<p>La membrane est constituée surtout de <b>phospholipides</b>, des molécules <b>amphiphiles</b> : elles ont une <b>tête hydrophile</b> (avec le groupe phosphate, qui « aime » l'eau) et deux <b>queues hydrophobes</b> (des chaînes d'acides gras, qui « fuient » l'eau). En milieu aqueux, elles se disposent spontanément en une <b>bicouche</b> : les têtes tournées vers l'eau à l'intérieur et à l'extérieur de la cellule, les queues cachées au centre. Dès <b>1925</b>, Gorter et Grendel avaient estimé, en extrayant les lipides des globules rouges, que deux couches suffisaient à recouvrir la cellule.</p>
<p>En <b>1972</b>, <b>Singer et Nicolson</b> proposèrent le <b>modèle de la mosaïque fluide</b> :</p>
<ul>
<li><b>fluide</b> : les phospholipides ne sont pas fixes mais se déplacent latéralement, comme des personnes dans une foule ;</li>
<li><b>mosaïque</b> : dans la bicouche sont insérées des <b>protéines</b> (canaux, transporteurs, récepteurs, enzymes, protéines de reconnaissance) ;</li>
<li>le <b>cholestérol</b> (dans les cellules animales) règle la fluidité : il la rend moins sensible aux changements de température ;</li>
<li>à l'extérieur, des chaînes de sucres liées aux lipides et aux protéines forment le <b>glycocalyx</b>, qui sert à la reconnaissance entre cellules (il détermine par exemple les groupes sanguins ABO).</li>
</ul>
<p>Grâce à cette structure, la membrane a une <b>perméabilité sélective</b> : elle laisse passer facilement certaines substances et en bloque d'autres.</p>
<table>
<tr><th>Substance</th><th>Traverse-t-elle directement la bicouche ?</th></tr>
<tr><td>Oxygène, CO₂, azote (petites molécules apolaires)</td><td>oui, facilement</td></tr>
<tr><td>Molécules liposolubles (stéroïdes, alcool, vitamines A-D-E-K)</td><td>oui</td></tr>
<tr><td>Eau</td><td>un peu (petite molécule mais polaire) ; beaucoup plus à travers les <b>aquaporines</b></td></tr>
<tr><td>Glucose, acides aminés (grandes et polaires)</td><td>non : il faut des transporteurs</td></tr>
<tr><td>Ions (Na⁺, K⁺, Cl⁻, Ca²⁺) </td><td>non : il faut des canaux ou des pompes</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "La membrane en mosaïque fluide",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="0" width="600" height="90" fill="#dbeafe"/><rect x="0" y="210" width="600" height="90" fill="#fef9c3"/>
<text x="20" y="30" font-size="16" font-weight="bold" fill="#1e3a8a">EXTÉRIEUR de la cellule</text>
<text x="20" y="285" font-size="16" font-weight="bold" fill="#854d0e">CYTOPLASME</text>
<g fill="#f59e0b" stroke="#b45309" stroke-width="1">
<circle cx="30" cy="100" r="12"/><circle cx="70" cy="100" r="12"/><circle cx="110" cy="100" r="12"/><circle cx="150" cy="100" r="12"/><circle cx="190" cy="100" r="12"/><circle cx="350" cy="100" r="12"/><circle cx="390" cy="100" r="12"/><circle cx="430" cy="100" r="12"/><circle cx="470" cy="100" r="12"/><circle cx="510" cy="100" r="12"/><circle cx="550" cy="100" r="12"/>
<circle cx="30" cy="200" r="12"/><circle cx="70" cy="200" r="12"/><circle cx="110" cy="200" r="12"/><circle cx="150" cy="200" r="12"/><circle cx="190" cy="200" r="12"/><circle cx="350" cy="200" r="12"/><circle cx="390" cy="200" r="12"/><circle cx="430" cy="200" r="12"/><circle cx="470" cy="200" r="12"/><circle cx="510" cy="200" r="12"/><circle cx="550" cy="200" r="12"/></g>
<g stroke="#b45309" stroke-width="3"><line x1="30" y1="112" x2="30" y2="188"/><line x1="70" y1="112" x2="70" y2="188"/><line x1="110" y1="112" x2="110" y2="188"/><line x1="150" y1="112" x2="150" y2="188"/><line x1="190" y1="112" x2="190" y2="188"/><line x1="350" y1="112" x2="350" y2="188"/><line x1="390" y1="112" x2="390" y2="188"/><line x1="430" y1="112" x2="430" y2="188"/><line x1="470" y1="112" x2="470" y2="188"/><line x1="510" y1="112" x2="510" y2="188"/><line x1="550" y1="112" x2="550" y2="188"/></g>
<rect x="225" y="82" width="95" height="136" rx="30" fill="#a78bfa" stroke="#5b21b6" stroke-width="3"/>
<rect x="250" y="95" width="45" height="110" rx="8" fill="#ede9fe"/>
<text x="272" y="155" font-size="14" font-weight="bold" fill="#4c1d95" text-anchor="middle">canal</text>
<ellipse cx="205" cy="150" rx="8" ry="8" fill="#16a34a"/><text x="130" y="155" font-size="14" fill="#166534" font-weight="bold">cholestérol</text>
<path d="M560 80 q10 -20 20 0 q10 20 20 0" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="470" y="60" font-size="14" font-weight="bold" fill="#991b1b">glycocalyx</text>
<text x="100" y="75" font-size="14" font-weight="bold" fill="#92400e">têtes hydrophiles</text>
<text x="400" y="155" font-size="14" font-weight="bold" fill="#92400e">queues hydrophobes</text>
</svg>`,
      caption: "Bicouche de phospholipides avec une protéine-canal, du cholestérol et des chaînes de sucres à l'extérieur."
    },
    {
      type: "3d",
      title: "Un phospholipide en 3D (schéma)",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 1.2, z: 0, r: 0.5, color: "#f59e0b", label: "Tête (phosphate)" },
          { x: 0, y: 0.5, z: 0, r: 0.25, color: "#a855f7", label: "Glycérol" },
          { x: -0.4, y: -0.2, z: 0, r: 0.2, color: "#64748b", label: "" },
          { x: -0.4, y: -0.9, z: 0, r: 0.2, color: "#64748b", label: "" },
          { x: -0.4, y: -1.6, z: 0, r: 0.2, color: "#64748b", label: "Queue 1" },
          { x: 0.4, y: -0.2, z: 0, r: 0.2, color: "#64748b", label: "" },
          { x: 0.4, y: -0.9, z: 0, r: 0.2, color: "#64748b", label: "" },
          { x: 0.4, y: -1.6, z: 0, r: 0.2, color: "#64748b", label: "Queue 2" }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 7]]
      },
      caption: "Schéma simplifié : une tête hydrophile (jaune) et deux queues hydrophobes d'acides gras (gris). Fais-le tourner avec le doigt."
    },
    {
      type: "text",
      title: "Le transport passif : la diffusion",
      html: `<p>Les molécules sont toujours en mouvement désordonné (agitation thermique). Si elles sont plus concentrées dans une zone que dans une autre, par pur effet <b>statistique</b>, davantage de molécules vont de la zone dense vers la zone moins dense que dans le sens inverse : c'est la <b>diffusion</b>. Une goutte d'encre dans un verre d'eau s'étale toute seule jusqu'à se répartir uniformément. Aucune énergie métabolique n'est nécessaire : c'est un <b>transport passif</b>, qui suit le <b>gradient de concentration</b>, de la concentration la plus forte vers la plus faible, jusqu'à l'équilibre.</p>
<p>À travers la membrane, la diffusion peut être :</p>
<ul>
<li><b>simple</b> : la molécule traverse directement la bicouche (O₂, CO₂, molécules liposolubles). Dans les poumons, l'oxygène passe de l'air au sang parce qu'il est plus concentré dans l'air ; le CO₂ fait le chemin inverse ;</li>
<li><b>facilitée</b> : la molécule (glucose, acides aminés, ions) passe grâce à une <b>protéine canal</b> ou à un <b>transporteur</b> qui change de forme ; toujours dans le sens du gradient et sans consommation d'ATP. La vitesse atteint un maximum quand tous les transporteurs sont occupés (saturation).</li>
</ul>
<p>La vitesse de diffusion augmente avec la différence de concentration, avec la température et avec la surface disponible, et diminue avec l'épaisseur à traverser : c'est pourquoi les échanges gazeux pulmonaires ont lieu dans des alvéoles aux parois très fines (une cellule d'épaisseur) et d'une surface totale d'environ 70 à 100 m².</p>`
    },
    {
      type: "text",
      title: "L'osmose : la diffusion de l'eau",
      html: `<p>L'<b>osmose</b> est la diffusion de l'<b>eau</b> à travers une membrane semi-perméable, lorsque les solutions des deux côtés ont des concentrations différentes en solutés qui ne peuvent pas passer. L'eau se déplace <b>vers la solution la plus concentrée</b> (c'est-à-dire là où il y a le moins d'eau « libre »), et tend à la diluer. La force qui pousse l'eau est la <b>pression osmotique</b>.</p>
<p>Pour comparer deux solutions, on utilise les termes :</p>
<ul>
<li><b>isotonique</b> : même concentration en solutés, aucun déplacement net ;</li>
<li><b>hypertonique</b> : plus concentrée (en solutés) que l'autre : elle attire l'eau ;</li>
<li><b>hypotonique</b> : moins concentrée : elle cède de l'eau.</li>
</ul>
<p>Ce qui arrive à une cellule placée dans une solution :</p>
<table>
<tr><th>Solution extérieure</th><th>Globule rouge (animal)</th><th>Cellule végétale</th></tr>
<tr><td><b>Hypotonique</b> (eau pure)</td><td>l'eau entre : il gonfle et éclate (<b>hémolyse</b>)</td><td>l'eau entre : la <b>turgescence</b> augmente, la paroi l'empêche d'éclater</td></tr>
<tr><td><b>Isotonique</b></td><td>forme normale</td><td>cellule « flasque »</td></tr>
<tr><td><b>Hypertonique</b> (eau salée/sucrée)</td><td>l'eau sort : il se ratatine (<b>crénelure</b>)</td><td>la membrane se décolle de la paroi : <b>plasmolyse</b></td></tr>
</table>
<p>En 2003, <b>Peter Agre</b> reçut le prix Nobel de chimie pour avoir découvert les <b>aquaporines</b>, des protéines-canaux spécifiques de l'eau, qui rendent l'osmose beaucoup plus rapide (par exemple dans les reins, qui réabsorbent chaque jour des litres d'eau).</p>`
    },
    {
      type: "example",
      title: "Le sérum physiologique et le sucre sur les fraises",
      html: `<p>Le <b>sérum physiologique</b> utilisé à l'hôpital est une solution de chlorure de sodium à <b>0,9 %</b> (masse/volume) : 9 g de sel par litre ; il a la même pression osmotique que le plasma sanguin (il est <b>isotonique</b>). Si l'on injectait de l'eau distillée dans une veine, les globules rouges, placés dans un milieu hypotonique, gonfleraient et éclateraient.</p>
<p>Combien de sel faut-il pour 500 mL de sérum physiologique ? 9 g/L × 0,5 L = <b>4,5 g</b>.</p>
<p>En cuisine : si tu saupoudres des fraises de sucre, au bout d'un moment un jus apparaît au fond. Le sucre crée à l'extérieur un milieu <b>hypertonique</b> : l'eau sort par osmose des cellules du fruit. Le même principe explique pourquoi le sel conserve la viande et le poisson : dans un milieu hypertonique, les microbes perdent leur eau et meurent ou ne se reproduisent plus. Et pourquoi boire de l'eau de mer déshydrate : elle est plus salée que nos liquides corporels et attirerait l'eau hors des tissus.</p>`
    },
    {
      type: "example",
      title: "Pourquoi faut-il des vaisseaux sanguins ? La lenteur de la diffusion",
      html: `<p>Le temps que met une molécule à diffuser croît comme le <b>carré</b> de la distance : t ≈ x² / (2D), où D est le coefficient de diffusion (pour une petite molécule dans l'eau, environ 10⁻⁹ m²/s).</p>
<ul>
<li>x = 10 µm (taille d'une cellule) : t ≈ (10⁻⁵)² / (2 · 10⁻⁹) = 10⁻¹⁰ / (2 · 10⁻⁹) ≈ <b>0,05 s</b> ;</li>
<li>x = 1 cm (10⁻² m) : t ≈ 10⁻⁴ / (2 · 10⁻⁹) = 5 · 10⁴ s ≈ <b>14 heures</b>.</li>
</ul>
<p>Parcourir une distance 1000 fois plus grande demande un temps 1 million de fois plus long. Voilà pourquoi la diffusion convient à l'intérieur de la cellule, mais pas d'un bout à l'autre d'un corps : les grands animaux ont besoin d'un appareil circulatoire qui transporte les substances par « convection » et amène des capillaires à quelques micromètres de chaque cellule.</p>`
    },
    {
      type: "widget",
      title: "Que se passe-t-il pour la cellule ?",
      widget: "classify",
      options: { groups: ["L'eau entre dans la cellule", "L'eau sort de la cellule", "Aucun déplacement net"], items: [
        ["Globule rouge dans de l'eau distillée", 0],
        ["Fraise saupoudrée de sucre", 1],
        ["Globule rouge dans une solution de NaCl à 0,9 %", 2],
        ["Limace avec du sel sur le corps", 1],
        ["Racine de plante dans un sol riche en eau douce", 0],
        ["Laitue fanée plongée dans de l'eau fraîche", 0]
      ] },
      caption: "Rappel : l'eau va toujours vers la solution la plus concentrée en solutés."
    },
    {
      type: "quiz",
      title: "Mini-quiz : diffusion et osmose",
      questions: [
        { type: "mc", q: "Vers où l'eau se déplace-t-elle par osmose ?", options: ["Vers la solution la plus concentrée", "Vers la solution la plus diluée", "Elle ne se déplace jamais"], answer: 0, explain: "L'eau se déplace vers la zone qui contient le plus de soluté, et tend à la diluer." },
        { type: "tf", q: "La diffusion facilitée consomme de l'ATP.", answer: false, explain: "C'est un transport passif : il utilise des protéines mais suit le gradient et ne demande pas d'énergie métabolique." },
        { type: "mc", q: "Comment appelle-t-on une solution qui a la même concentration en solutés que le sang ?", options: ["Hypotonique", "Isotonique", "Hypertonique"], answer: 1, explain: "Isotonique signifie même pression osmotique ; le sérum physiologique est isotonique." }
      ]
    },
    {
      type: "text",
      title: "Le transport actif : contre le gradient, en payant en ATP",
      html: `<p>Très souvent, la cellule doit concentrer une substance là où elle est déjà abondante, ou l'expulser là où elle est déjà en excès : aller <b>contre le gradient</b>, c'est comme pousser une balle en montée, et cela demande de l'énergie. C'est le <b>transport actif</b>, assuré par des protéines appelées <b>pompes</b>, qui utilisent l'énergie de l'<b>ATP</b>.</p>
<p>L'exemple le plus important est la <b>pompe sodium-potassium</b> (Na⁺/K⁺-ATPase), découverte par <b>Jens Skou</b> en 1957 (prix Nobel 1997). À chaque cycle, en consommant une molécule d'ATP, elle <b>expulse 3 ions Na⁺</b> et <b>fait entrer 2 ions K⁺</b>. Ainsi, il y a beaucoup de potassium et peu de sodium dans la cellule, et l'inverse à l'extérieur. Ce gradient :</p>
<ul>
<li>crée la différence de potentiel électrique (environ −70 mV dans les neurones au repos) sur laquelle repose l'<b>influx nerveux</b> ;</li>
<li>règle le volume cellulaire (en s'opposant à l'entrée d'eau) ;</li>
<li>permet le <b>transport actif secondaire</b> : dans l'intestin, le sodium rentre dans le sens de son gradient en entraînant avec lui le glucose (cotransport).</li>
</ul>
<p>On estime que, dans les neurones, la pompe consomme jusqu'à environ 20 à 40 % de l'ATP.</p>
<p>Une autre pompe est celle des protons (H⁺) dans l'estomac : les cellules pariétales pompent des H⁺ jusqu'à produire de l'acide chlorhydrique, ce qui amène le pH du suc gastrique à environ 1,5-2.</p>`
    },
    {
      type: "svg",
      title: "La pompe sodium-potassium",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="0" width="600" height="95" fill="#dbeafe"/><rect x="0" y="205" width="600" height="95" fill="#fef9c3"/>
<rect x="0" y="95" width="600" height="110" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<path d="M230 80 L370 80 L350 220 L250 220 Z" fill="#a78bfa" stroke="#5b21b6" stroke-width="3"/>
<text x="300" y="155" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">POMPE Na⁺/K⁺</text>
<text x="20" y="28" font-size="16" font-weight="bold" fill="#1e3a8a">Dehors : beaucoup de Na⁺, peu de K⁺</text>
<text x="20" y="285" font-size="16" font-weight="bold" fill="#854d0e">Dedans : beaucoup de K⁺, peu de Na⁺</text>
<g fill="#ef4444"><circle cx="440" cy="40" r="12"/><circle cx="480" cy="55" r="12"/><circle cx="520" cy="40" r="12"/></g>
<text x="480" y="85" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">3 Na⁺ sortent</text>
<g fill="#2563eb"><circle cx="100" cy="60" r="12"/><circle cx="140" cy="70" r="12"/></g>
<text x="120" y="92" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">2 K⁺ entrent</text>
<text x="450" y="250" font-size="16" font-weight="bold" fill="#92400e">ATP → ADP + P</text>
<path d="M400 120 C420 90 440 70 440 55" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M200 70 C190 95 190 110 200 135" fill="none" stroke="#2563eb" stroke-width="4"/>
</svg>`,
      caption: "La pompe dépense de l'ATP pour faire sortir 3 ions sodium et entrer 2 ions potassium, toujours contre leur gradient."
    },
    {
      type: "text",
      title: "Les transports en masse : endocytose et exocytose",
      html: `<p>Les particules trop grosses pour traverser les canaux et les pompes (protéines, bactéries, gros fragments) voyagent dans des <b>vésicules</b> formées par la membrane elle-même. Ce sont des processus qui consomment de l'ATP.</p>
<ul>
<li><b>Endocytose</b> : la membrane s'invagine, entoure la matière et se referme en une vésicule qui entre dans la cellule.
<ul>
<li><b>Phagocytose</b> (« manger des cellules ») : ingestion de grosses particules solides, comme des bactéries ; elle est réalisée par les globules blancs (macrophages, granulocytes neutrophiles) et par les amibes. La vésicule fusionne avec les lysosomes et son contenu est digéré. Elle fut observée par <b>Élie Metchnikoff</b> (prix Nobel 1908) chez des larves d'étoile de mer ;</li>
<li><b>Pinocytose</b> (« boire ») : entrée de liquides contenant des molécules dissoutes ;</li>
<li><b>Endocytose par récepteurs</b> : seules des molécules spécifiques qui se lient à des récepteurs sont capturées : c'est ainsi que les cellules absorbent le cholestérol (LDL).</li>
</ul></li>
<li><b>Exocytose</b> : une vésicule interne fusionne avec la membrane et libère son contenu à l'extérieur : c'est ainsi que sortent les hormones (l'insuline), les enzymes digestives et les neurotransmetteurs au niveau de la synapse. La membrane de la vésicule s'ajoute à celle de la cellule.</li>
</ul>
<p>Endocytose et exocytose s'équilibrent, si bien que la surface de la cellule reste constante.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : transports actifs et en masse",
      questions: [
        { type: "num", q: "Combien d'ions K⁺ la pompe sodium-potassium fait-elle entrer à chaque cycle ?", answer: 2, explain: "3 Na⁺ sortent et 2 K⁺ entrent, pour une molécule d'ATP." },
        { type: "mc", q: "Quel processus permet à un globule blanc d'englober une bactérie ?", options: ["La phagocytose", "L'osmose", "La diffusion simple"], answer: 0, explain: "C'est une forme d'endocytose qui forme une vésicule autour de la particule." },
        { type: "tf", q: "Le transport actif déplace toujours les substances dans le sens de leur gradient de concentration.", answer: false, explain: "C'est le contraire : il va contre le gradient, et c'est pour cela qu'il demande de l'énergie." }
      ]
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les échanges",
      intro: "Pour t'y retrouver parmi les types de transport, essaie ces analogies.",
      tabs: [
        {
          label: "⛷️ Descente ou montée",
          html: `<p>Imagine la <b>concentration</b> comme l'altitude d'une piste de ski. <b>Diffusion</b> (simple ou facilitée) : tu descends la piste sans effort, même si pour passer un portillon (<i>canal</i>) tu dois attendre. <b>Transport actif</b> : tu remontes la piste, il te faut une remontée mécanique, c'est-à-dire une pompe qui brûle de l'énergie (ATP). <b>Vésicules</b> : tu descends en luge une très grosse charge, qui ne passe pas par le portillon.</p>`
        },
        {
          label: "🍵 Le thé et le sachet",
          html: `<p>Plonge un sachet dans de l'eau chaude : les substances du thé sortent du sachet (membrane perméable) et diffusent jusqu'à ce que la couleur soit uniforme. Pendant ce temps, l'eau entre dans le sachet, un peu comme dans l'osmose (le sachet retient les feuilles, trop grosses pour passer). Le thé infuse plus vite dans l'eau chaude, de même que la diffusion augmente avec la température.</p>`
        },
        {
          label: "🥔 Expérience avec la pomme de terre",
          html: `<p>Coupe deux cubes de pomme de terre identiques et pèse-les. Mets-en un dans de l'eau pure et l'autre dans de l'eau très salée (par exemple 100 g de sel par litre) pendant une heure. Pèse-les de nouveau : celui de l'eau pure est plus lourd et plus ferme (l'eau est entrée par osmose), celui de l'eau salée est plus léger et mou (l'eau est sortie). Mesurer la différence de masse te permet d'estimer la concentration à laquelle le cube ne change pas de masse : c'est la concentration isotonique aux cellules de la pomme de terre.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><rect x="40" y="90" width="220" height="170" rx="10" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/><rect x="340" y="90" width="220" height="170" rx="10" fill="#fde68a" stroke="#b45309" stroke-width="3"/><rect x="120" y="170" width="60" height="60" fill="#fef3c7" stroke="#92400e" stroke-width="3"/><rect x="430" y="180" width="40" height="40" fill="#fef3c7" stroke="#92400e" stroke-width="3"/><text x="150" y="70" font-size="16" font-weight="bold" fill="#1e40af" text-anchor="middle">Eau pure</text><text x="450" y="70" font-size="16" font-weight="bold" fill="#92400e" text-anchor="middle">Eau salée</text><text x="150" y="285" font-size="14" fill="#1e293b" text-anchor="middle">il gonfle (l'eau entre)</text><text x="450" y="285" font-size="14" fill="#1e293b" text-anchor="middle">il rétrécit (l'eau sort)</text></svg>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Anesthésiques, poisons et membrane",
      html: `<p>Beaucoup de poisons agissent en bloquant des protéines membranaires. La <b>tétrodotoxine</b> du poisson-globe (fugu) bloque les canaux sodium des neurones : les nerfs ne peuvent plus transmettre d'influx et la paralysie s'installe. La <b>digitaline</b> (digoxine), un médicament tiré de la plante Digitalis, inhibe la pompe Na⁺/K⁺ et, à doses contrôlées, renforce les contractions du cœur. La toxine du choléra, elle, fait ouvrir les canaux chlorure des cellules intestinales : l'eau sort par osmose, ce qui provoque une diarrhée très grave ; c'est pourquoi on la soigne avant tout avec des solutions de sels et de sucres (réhydratation orale), en exploitant le cotransport sodium-glucose.</p>`
    },
    {
      type: "curiosity",
      title: "Pourquoi les doigts se rident-ils dans l'eau ?",
      html: `<p>Après un long bain, la peau des mains et des pieds se plisse. On a longtemps cru que c'était seulement de l'osmose, la peau gonflant d'eau. En réalité, le phénomène est contrôlé par le système nerveux : les vaisseaux sanguins des doigts se resserrent et la peau se replie en formant des sillons. Certaines études suggèrent que ces sillons améliorent la prise sur les objets mouillés. C'est un bon exemple de phénomène en apparence « physique » qui a une explication plus complexe.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte des échanges : touche les nœuds et découvre le pourquoi",
      nodes: [
        { id: "membrana", label: "Membrane plasmique", x: 50, y: 6, color: "#3b82f6", html: "Bicouche de phospholipides avec des protéines : perméabilité sélective.", why: "Gorter et Grendel (1925) trouvèrent que les lipides des globules rouges suffisaient à couvrir deux fois la cellule ; Singer et Nicolson (1972) intégrèrent les protéines dans le modèle de la mosaïque fluide, confirmé ensuite par la microscopie électronique et la technique de cryofracture." },
        { id: "diff", label: "Diffusion", x: 15, y: 36, color: "#22c55e", html: "Du plus concentré vers le moins concentré, sans énergie.", why: "C'est une conséquence de l'agitation thermique : en 1827, le botaniste Robert Brown observa le mouvement désordonné de grains issus du pollen dans l'eau ; Einstein l'expliqua en 1905 par les chocs des molécules, et Jean Perrin le confirma expérimentalement, démontrant la réalité des atomes." },
        { id: "osmosi", label: "Osmose", x: 50, y: 36, color: "#0ea5e9", html: "Diffusion de l'eau à travers une membrane semi-perméable.", why: "L'abbé Nollet décrivit le phénomène en 1748 ; au XIX<sup>e</sup> siècle, Pfeffer mesura la pression osmotique et van 't Hoff (prix Nobel 1901) montra qu'elle se comporte comme la pression d'un gaz : π = MRT (pour des solutions diluées)." },
        { id: "facil", label: "Diffusion facilitée", x: 85, y: 36, color: "#a855f7", html: "Avec des canaux et des transporteurs, sans ATP.", why: "Elle est nécessaire parce que les molécules polaires ne traversent pas le cœur hydrophobe de la bicouche ; les canaux ioniques ont été étudiés grâce à la technique du patch-clamp de Neher et Sakmann (prix Nobel 1991)." },
        { id: "attivo", label: "Transport actif", x: 25, y: 66, color: "#ef4444", html: "Des pompes qui utilisent l'ATP contre le gradient.", why: "Pour vivre, les cellules doivent maintenir un intérieur différent de l'extérieur : c'est un état hors d'équilibre. La pompe Na⁺/K⁺ (Skou, 1957) maintient les gradients nécessaires aux nerfs, aux muscles et à l'absorption intestinale." },
        { id: "massa", label: "Endo/exocytose", x: 75, y: 66, color: "#f59e0b", html: "Transports en vésicules pour les grosses molécules.", why: "Ils servent quand la particule est trop grosse pour les protéines de transport. Metchnikoff, en observant la phagocytose, comprit le rôle des cellules dans la défense immunitaire (prix Nobel 1908)." },
        { id: "atp", label: "Énergie (ATP)", x: 50, y: 88, color: "#14b8a6", html: "La monnaie énergétique de la cellule.", why: "Son coût explique pourquoi les transports actifs sont limités aux cas indispensables : la cellule ne dépense de l'ATP que pour aller contre le gradient." }
      ],
      edges: [
        ["membrana", "diff", "permet"],
        ["membrana", "osmosi", "permet"],
        ["diff", "facil", "avec des protéines"],
        ["membrana", "attivo", "abrite des pompes"],
        ["attivo", "atp", "consomme"],
        ["massa", "atp", "consomme"],
        ["membrana", "massa", "se déforme"]
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul><li>Passifs (sans ATP, dans le sens du gradient) : diffusion simple, diffusion facilitée, osmose.</li><li>Actifs (ATP, contre le gradient ou en masse) : pompes comme Na⁺/K⁺ (3 dehors, 2 dedans), endocytose, exocytose.</li><li>L'eau va vers la solution la plus concentrée (hypertonique).</li><li>Globule rouge : milieu hypotonique = il éclate, milieu hypertonique = il se ratatine.</li></ul>`
    }
  ],
  glossary: [
    { t: "Phospholipide", d: "Lipide à tête hydrophile et à deux queues hydrophobes : composant de base de la membrane." },
    { t: "Mosaïque fluide", d: "Modèle de la membrane : bicouche fluide de phospholipides dans laquelle sont insérées des protéines." },
    { t: "Perméabilité sélective", d: "Capacité de la membrane à laisser passer certaines substances et pas d'autres." },
    { t: "Diffusion", d: "Déplacement passif des particules de la zone la plus concentrée vers la moins concentrée." },
    { t: "Osmose", d: "Diffusion de l'eau à travers une membrane semi-perméable." },
    { t: "Solution isotonique", d: "Solution ayant la même concentration en solutés qu'une autre (en général la cellule)." },
    { t: "Solution hypertonique", d: "Solution plus concentrée en solutés qu'une autre." },
    { t: "Solution hypotonique", d: "Solution moins concentrée en solutés qu'une autre." },
    { t: "Transport actif", d: "Transport contre le gradient qui consomme de l'énergie (ATP)." },
    { t: "Pompe sodium-potassium", d: "Protéine qui expulse 3 Na⁺ et fait entrer 2 K⁺ pour chaque ATP consommé." },
    { t: "Endocytose", d: "Entrée de matière dans la cellule dans des vésicules formées par la membrane." },
    { t: "Exocytose", d: "Libération de substances à l'extérieur par fusion de vésicules avec la membrane." },
    { t: "Plasmolyse", d: "Décollement de la membrane de la paroi dans une cellule végétale placée en milieu hypertonique." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Pourquoi les phospholipides forment-ils une bicouche dans l'eau ?", options: ["Les queues hydrophobes se cachent au centre et les têtes hydrophiles sont tournées vers l'eau", "Les têtes repoussent les queues", "Parce que ce sont des molécules apolaires"], answer: 0, explain: "Leur nature amphiphile conduit à l'organisation spontanée en bicouche." },
      { type: "tf", q: "L'oxygène traverse la membrane par diffusion simple.", answer: true, explain: "C'est une petite molécule apolaire, qui passe directement entre les phospholipides." },
      { type: "mc", q: "Un globule rouge placé dans de l'eau distillée...", options: ["se ratatine", "gonfle et peut éclater", "ne change pas"], answer: 1, explain: "L'eau distillée est hypotonique : l'eau entre par osmose et provoque l'hémolyse." },
      { type: "num", q: "Combien de grammes de NaCl faut-il pour 2 litres de sérum physiologique (9 g/L) ?", answer: 18, unit: "g", explain: "9 g/L × 2 L = 18 g." },
      { type: "mc", q: "Quel processus nécessite de l'ATP ?", options: ["L'osmose", "La diffusion facilitée", "La pompe sodium-potassium"], answer: 2, explain: "La pompe transporte des ions contre le gradient et consomme de l'ATP." },
      { type: "num", q: "À chaque cycle de la pompe Na⁺/K⁺, combien d'ions sodium sont expulsés ?", answer: 3, explain: "Chaque cycle expulse 3 Na⁺ et fait entrer 2 K⁺." },
      { type: "text", q: "Comment appelle-t-on l'ingestion par une cellule d'une grosse particule solide, comme une bactérie ?", answer: ["phagocytose", "la phagocytose"], explain: "C'est une forme d'endocytose réalisée par exemple par les macrophages." },
      { type: "order", q: "Remets dans l'ordre les étapes de l'exocytose d'une hormone.", items: ["L'hormone est emballée dans une vésicule par le Golgi", "La vésicule se déplace vers la membrane", "La vésicule fusionne avec la membrane", "L'hormone est libérée à l'extérieur"], explain: "Le contenu passe du Golgi à la vésicule, la vésicule rejoint la membrane, fusionne avec elle et libère son contenu." },
      { type: "tf", q: "Dans une cellule végétale placée dans une solution hypertonique, il se produit une plasmolyse.", answer: true, explain: "L'eau sort, le cytoplasme se rétracte et la membrane se décolle de la paroi." },
      { type: "mc", q: "Pourquoi des fruits saupoudrés de sucre rendent-ils du jus ?", options: ["Parce que le sucre réagit avec l'eau en formant un acide", "Parce que le sucre crée un milieu hypertonique qui attire l'eau", "Parce que les fruits se réchauffent"], answer: 1, explain: "L'eau sort par osmose vers la zone la plus concentrée, c'est-à-dire le sucre à l'extérieur." }
    ]
  }
});
