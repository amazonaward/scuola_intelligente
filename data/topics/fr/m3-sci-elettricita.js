TOPIC('fr', {
  id: "m3-sci-elettricita",
  title: "Électricité et magnétisme",
  intro: "Tu allumes la lumière, tu recharges ton téléphone, la boussole indique le Nord, un éclair déchire le ciel : derrière tout cela, il y a les <b>charges électriques</b> et le <b>magnétisme</b>, deux faces d'un même phénomène. Nous découvrirons ce que sont le courant, la tension et la résistance, comment fonctionne un circuit, la <b>loi d'Ohm</b> et comment un aimant peut produire de l'électricité.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. La charge électrique",
      html: `<p>Toute la matière est faite d'<b>atomes</b>. Dans le noyau, il y a les <b>protons</b> (charge <b>positive +</b>) et les neutrons (sans charge) ; autour se déplacent les <b>électrons</b> (charge <b>négative −</b>). En général, un atome a autant de protons que d'électrons : il est <b>neutre</b>.</p>
<p>Les électrons les plus externes peuvent passer d'un corps à un autre. Un corps qui a des <b>électrons en trop</b> est chargé négativement ; celui qui en a <b>en moins</b> est chargé positivement.</p>
<ul>
<li>Les charges <b>de même signe se repoussent</b> (+ et +, − et −) ;</li>
<li>les charges <b>de signes opposés s'attirent</b> (+ et −).</li>
</ul>
<p>Un corps peut être <b>électrisé</b> de trois façons :</p>
<ol>
<li><b>par frottement</b> : frotte un ballon sur tes cheveux ; des électrons passent des cheveux au ballon, qui ensuite colle au mur ;</li>
<li><b>par contact</b> : un corps chargé en touche un neutre et lui cède une partie de sa charge ;</li>
<li><b>par influence</b> : un corps chargé s'approche sans toucher et « déplace » les charges de l'autre (c'est ainsi que le ballon attire de petits morceaux de papier).</li>
</ol>
<p>La charge se mesure en <b>coulombs (C)</b>, du nom du physicien français Charles-Augustin de Coulomb, qui mesura en 1785 la force entre les charges.</p>`
    },
    {
      type: "3d",
      title: "Pourquoi les métaux conduisent-ils ? Regarde l'atome",
      scene: "atom",
      options: { elements: ["Cu", "Na", "C", "O", "Fe"] },
      caption: "Choisis le cuivre (Cu) : il a 29 électrons et le dernier, seul sur l'orbite la plus externe, est faiblement lié. Dans les métaux, ces électrons quittent l'atome et forment une « mer » d'électrons libres de se déplacer : c'est pour cela que les métaux conduisent le courant."
    },
    {
      type: "text",
      title: "2. Conducteurs et isolants",
      html: `<ul>
<li><b>Conducteurs</b> : ils laissent passer facilement les charges. Ce sont les <b>métaux</b> (argent, cuivre, or, aluminium, fer), le <b>graphite</b>, l'<b>eau</b> contenant des sels dissous (même celle du robinet !) et le <b>corps humain</b>.</li>
<li><b>Isolants</b> : ils ne laissent pas passer les charges. Plastique, caoutchouc, verre, céramique, bois sec, air sec.</li>
<li><b>Semi-conducteurs</b> : comme le <b>silicium</b>, ils conduisent « sur commande » : ils sont la base des puces des ordinateurs et des téléphones.</li>
</ul>
<p>Dans les câbles électriques, le cuivre (conducteur) est enveloppé de plastique (isolant) : le courant va où il doit aller et nous sommes protégés.</p>`
    },
    {
      type: "widget",
      title: "Conducteur ou isolant ?",
      widget: "classify",
      options: {
        groups: ["⚡ Conducteur", "🛡️ Isolant"],
        items: [
          ["🔩 Clou en fer", 0],
          ["🧤 Gant en caoutchouc", 1],
          ["🥄 Cuillère en acier", 0],
          ["🥛 Verre en verre", 1],
          ["✏️ Mine de crayon (graphite)", 0],
          ["🪵 Règle en bois sec", 1],
          ["💧 Eau salée", 0],
          ["🧸 Plastique d'un jouet", 1],
          ["🪙 Pièce de monnaie", 0]
        ]
      },
      caption: "Touche un objet, puis le bon groupe. Tu pourrais le vérifier avec une pile, une ampoule et deux fils."
    },
    {
      type: "text",
      title: "3. Courant, tension et résistance",
      html: `<p>Quand les charges se déplacent de façon ordonnée dans un conducteur, on a un <b>courant électrique</b>. Pour le décrire, il faut trois grandeurs :</p>
<table>
<tr><th>Grandeur</th><th>Ce que c'est</th><th>Unité</th><th>Instrument</th></tr>
<tr><td><b>Intensité du courant (I)</b></td><td>Quelle quantité de charge passe en une seconde dans une section du fil : I = Q : t</td><td><b>ampère (A)</b></td><td>ampèremètre (en série)</td></tr>
<tr><td><b>Tension ou différence de potentiel (V)</b></td><td>La « poussée » qui met les charges en mouvement, fournie par le générateur (pile, prise)</td><td><b>volt (V)</b></td><td>voltmètre (en parallèle)</td></tr>
<tr><td><b>Résistance (R)</b></td><td>À quel point un matériau s'oppose au passage du courant</td><td><b>ohm (Ω)</b></td><td>ohmmètre</td></tr>
</table>
<p>La résistance d'un fil est plus grande si le fil est <b>plus long</b>, <b>plus fin</b> ou fait d'un matériau <b>moins conducteur</b> ; en général, elle augmente aussi avec la température.</p>
<p>Quelques valeurs : une pile bâton donne <b>1,5 V</b>, une batterie de voiture <b>12 V</b>, les prises de la maison en Italie <b>230 V</b> (courant alternatif à 50 Hz). Une ampoule LED absorbe environ 0,04 A, un four électrique environ 9 A.</p>`
    },
    {
      type: "text",
      title: "4. La loi d'Ohm",
      html: `<p>En <b>1827</b>, le physicien allemand <b>Georg Simon Ohm</b> découvrit que, pour beaucoup de conducteurs (à température constante), le courant est <b>directement proportionnel</b> à la tension :</p>
<p style="text-align:center;font-size:1.3em"><b>V = R × I</b></p>
<p>d'où : <b>I = V : R</b> et <b>R = V : I</b>.</p>
<p>Si tu doubles la tension, le courant double ; si tu doubles la résistance, le courant est divisé par deux. Le graphique tension–courant d'un conducteur « ohmique » est une <b>droite qui passe par l'origine</b> : la pente est la résistance.</p>
<p><b>Puissance et énergie</b> : la <b>puissance</b> électrique, c'est-à-dire la quantité d'énergie utilisée chaque seconde, est <b>P = V × I</b> et se mesure en <b>watts (W)</b>. L'énergie consommée est <b>E = P × t</b> : sur la facture, elle se mesure en <b>kilowattheures (kWh)</b>, l'énergie utilisée par un appareil de 1 000 W allumé pendant 1 heure.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : des calculs avec la loi d'Ohm",
      html: `<ol>
<li><b>Lampe de poche</b> : pile de 4,5 V, ampoule de 9 Ω. I = V : R = 4,5 : 9 = <b>0,5 A</b>.</li>
<li><b>Grille-pain</b> : branché sur une prise de 230 V, il absorbe 4 A. R = V : I = 230 : 4 = <b>57,5 Ω</b>. Puissance : P = 230 × 4 = <b>920 W</b>.</li>
<li><b>Chargeur de téléphone</b> : 5 V et 2 A → P = 5 × 2 = <b>10 W</b>. En 2 heures, il utilise 10 × 2 = 20 Wh = 0,02 kWh : très peu !</li>
<li><b>Sèche-cheveux</b> de 2 000 W utilisé pendant une demi-heure : E = 2 kW × 0,5 h = <b>1 kWh</b>. Si 1 kWh coûte environ 0,25 €, cela fait 25 centimes.</li>
</ol>
<p>Voilà pourquoi une ampoule LED de 8 W, qui éclaire autant qu'une vieille ampoule à incandescence de 60 W, fait économiser plus de 85 % d'énergie.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : charges et loi d'Ohm",
      questions: [
        { type: "tf", q: "Deux corps chargés négativement s'attirent.", answer: false, explain: "Les charges de même signe se repoussent." },
        { type: "num", q: "Une résistance de 20 Ω est reliée à 10 V. Combien d'ampères passent ?", answer: 0.5, tol: 0.001, unit: "A", explain: "I = V : R = 10 : 20 = 0,5 A." },
        { type: "num", q: "Un radiateur d'appoint absorbe 8 A sous 230 V. Quelle est sa puissance en watts ?", answer: 1840, unit: "W", explain: "P = V × I = 230 × 8 = 1840 W." },
        { type: "mc", q: "Dans quelle unité se mesure la résistance ?", options: ["Volt", "Ampère", "Ohm", "Watt"], answer: 2, explain: "En ohms (Ω)." }
      ]
    },
    {
      type: "text",
      title: "5. Le circuit électrique : série et parallèle",
      html: `<p>Un <b>circuit</b> est un parcours <b>fermé</b> dans lequel circule le courant. Il comprend : un <b>générateur</b> (pile), des <b>conducteurs</b> (fils), un ou plusieurs <b>récepteurs</b> (ampoules, moteurs) et un <b>interrupteur</b>. Si l'interrupteur est ouvert, le circuit est interrompu et le courant ne passe pas.</p>
<p><b>Montage en série</b> (les uns après les autres, un seul parcours) :</p>
<ul>
<li>le courant est <b>le même</b> dans tous les récepteurs ;</li>
<li>les résistances s'<b>additionnent</b> : R = R₁ + R₂ + … ;</li>
<li>si une ampoule grille, <b>toutes s'éteignent</b> (comme certaines vieilles guirlandes de sapin de Noël).</li>
</ul>
<p><b>Montage en parallèle</b> (chacun sur une branche différente) :</p>
<ul>
<li>la tension est <b>la même</b> pour tous ;</li>
<li>la résistance totale <b>diminue</b> : 1/R = 1/R₁ + 1/R₂ + … ;</li>
<li>si une ampoule grille, <b>les autres restent allumées</b>. C'est pourquoi l'installation de la maison est en parallèle : chaque prise a 230 V et fonctionne seule.</li>
</ul>
<p>Exemple : R₁ = 6 Ω et R₂ = 3 Ω. En série : 9 Ω. En parallèle : 1/R = 1/6 + 1/3 = 3/6 → R = <b>2 Ω</b>.</p>`
    },
    {
      type: "svg",
      title: "Circuit en série et en parallèle",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<text x="150" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#0f172a">EN SÉRIE</text>
<rect x="40" y="60" width="220" height="180" fill="none" stroke="#334155" stroke-width="4"/>
<rect x="25" y="125" width="30" height="50" fill="#f8fafc"/>
<line x1="28" y1="135" x2="52" y2="135" stroke="#dc2626" stroke-width="5"/>
<line x1="33" y1="150" x2="47" y2="150" stroke="#0f172a" stroke-width="5"/>
<line x1="28" y1="160" x2="52" y2="160" stroke="#dc2626" stroke-width="5"/>
<text x="10" y="200" font-size="14" fill="#334155">pile</text>
<circle cx="110" cy="60" r="18" fill="#fde047" stroke="#334155" stroke-width="3"/>
<path d="M98 48 L122 72 M122 48 L98 72" stroke="#334155" stroke-width="2"/>
<circle cx="190" cy="60" r="18" fill="#fde047" stroke="#334155" stroke-width="3"/>
<path d="M178 48 L202 72 M202 48 L178 72" stroke="#334155" stroke-width="2"/>
<text x="150" y="275" font-size="14" text-anchor="middle" fill="#334155">un seul parcours : même courant</text>
<path d="M120 240 L150 240" stroke="#2563eb" stroke-width="3"/>
<polygon points="150,234 162,240 150,246" fill="#2563eb"/>
<text x="470" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#0f172a">EN PARALLÈLE</text>
<rect x="360" y="60" width="240" height="180" fill="none" stroke="#334155" stroke-width="4"/>
<line x1="480" y1="60" x2="480" y2="240" stroke="#334155" stroke-width="4"/>
<rect x="345" y="125" width="30" height="50" fill="#f8fafc"/>
<line x1="348" y1="135" x2="372" y2="135" stroke="#dc2626" stroke-width="5"/>
<line x1="353" y1="150" x2="367" y2="150" stroke="#0f172a" stroke-width="5"/>
<line x1="348" y1="160" x2="372" y2="160" stroke="#dc2626" stroke-width="5"/>
<circle cx="480" cy="150" r="18" fill="#fde047" stroke="#334155" stroke-width="3"/>
<path d="M468 138 L492 162 M492 138 L468 162" stroke="#334155" stroke-width="2"/>
<circle cx="600" cy="150" r="18" fill="#fde047" stroke="#334155" stroke-width="3"/>
<path d="M588 138 L612 162 M612 138 L588 162" stroke="#334155" stroke-width="2"/>
<text x="480" y="275" font-size="14" text-anchor="middle" fill="#334155">plusieurs branches : même tension</text>
</svg>`,
      caption: "Symboles : les lignes rouges et noires sont la pile, le cercle avec le X est l'ampoule. À gauche, si on dévisse une ampoule, l'autre s'éteint aussi ; à droite, non."
    },
    {
      type: "widget",
      title: "Reconnais les parties du circuit",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<rect x="100" y="60" width="400" height="180" fill="none" stroke="#475569" stroke-width="5"/>
<rect x="70" y="110" width="60" height="80" rx="6" fill="#f59e0b" stroke="#78350f" stroke-width="3"/>
<rect x="88" y="98" width="24" height="12" fill="#78350f"/>
<circle cx="300" cy="60" r="28" fill="#fef08a" stroke="#475569" stroke-width="4"/>
<path d="M285 60 Q 300 40 315 60" stroke="#b45309" stroke-width="3" fill="none"/>
<rect x="255" y="230" width="90" height="20" fill="#ecfeff"/>
<circle cx="260" cy="240" r="6" fill="#475569"/>
<circle cx="340" cy="240" r="6" fill="#475569"/>
<line x1="260" y1="240" x2="330" y2="210" stroke="#475569" stroke-width="5"/>
<circle cx="500" cy="150" r="30" fill="#e2e8f0" stroke="#475569" stroke-width="4"/>
<text x="500" y="158" font-size="22" text-anchor="middle" fill="#0f172a">A</text>
</svg>`,
        spots: [
          { x: 100, y: 150, label: "Générateur (pile)" },
          { x: 300, y: 60, label: "Récepteur (ampoule)" },
          { x: 295, y: 225, label: "Interrupteur ouvert" },
          { x: 500, y: 150, label: "Ampèremètre" },
          { x: 200, y: 240, label: "Fil conducteur" }
        ]
      },
      caption: "Touche chaque point et choisis le nom. Avec l'interrupteur ouvert, l'ampoule est éteinte : le circuit n'est pas fermé."
    },
    {
      type: "text",
      title: "6. Les effets du courant et la sécurité",
      html: `<ul>
<li><b>Effet thermique</b> (effet Joule) : un conducteur traversé par un courant s'échauffe. Les radiateurs, fours, fers à repasser, sèche-cheveux et chauffe-eau l'utilisent.</li>
<li><b>Effet lumineux</b> : ampoules et LED.</li>
<li><b>Effet magnétique</b> : le courant crée un champ magnétique (électroaimants, sonnettes, moteurs).</li>
<li><b>Effet chimique</b> : le courant peut séparer des substances (<b>électrolyse</b>) ; à l'inverse, une réaction chimique peut produire du courant (piles et batteries).</li>
</ul>
<p>⚠️ <b>Le courant est dangereux</b> pour le corps humain, qui est un conducteur : dès des courants d'environ <b>30 milliampères</b> à travers le corps peuvent être très dangereux pour le cœur. Règles d'or :</p>
<ul>
<li>ne jamais toucher des appareils électriques avec les mains mouillées ni dans la salle de bains près de l'eau ;</li>
<li>ne pas enfoncer d'objets dans les prises et ne pas tirer sur les câbles ;</li>
<li>ne pas surcharger les multiprises ;</li>
<li>à la maison, le <b>disjoncteur différentiel</b> (« sauve-vie ») coupe le courant en une fraction de seconde s'il détecte une fuite vers la terre (en général dès 30 mA) ; le <b>fil de terre</b> (jaune-vert) envoie à la terre les courants de défaut. Les installations doivent être réalisées et certifiées par des techniciens habilités.</li>
<li>pendant un orage, ne t'abrite pas sous un arbre isolé.</li>
</ul>`
    },
    {
      type: "text",
      title: "7. Le magnétisme",
      html: `<p>Un <b>aimant</b> attire les objets en <b>fer</b>, en <b>nickel</b> et en <b>cobalt</b>. Chaque aimant a deux <b>pôles</b>, Nord et Sud : les pôles <b>identiques se repoussent</b>, les pôles <b>opposés s'attirent</b>. Si tu casses un aimant, tu obtiens deux aimants plus petits, chacun avec son Nord et son Sud : on ne peut pas isoler un seul pôle.</p>
<p>Autour d'un aimant, il y a un <b>champ magnétique</b>, que l'on « voit » en répandant de la limaille de fer sur une feuille : elle se dispose le long des <b>lignes de champ</b>, qui sortent du pôle Nord et entrent dans le pôle Sud.</p>
<p>La <b>Terre</b> aussi est un énorme aimant, grâce au fer fondu qui se déplace dans le noyau externe. L'aiguille de la <b>boussole</b> (inventée en Chine, utilisée par les navigateurs européens à partir du XIIe–XIIIe siècle) s'oriente le long du champ terrestre et indique le Nord. Le champ magnétique nous protège aussi du vent solaire : quand les particules du Soleil arrivent près des pôles, on voit les <b>aurores polaires</b>.</p>`
    },
    {
      type: "text",
      title: "8. Électricité et magnétisme sont cousins",
      html: `<p>En <b>1820</b>, le Danois <b>Hans Christian Ørsted</b> remarqua, pendant un cours, que l'aiguille d'une boussole bougeait quand un courant passait dans un fil à proximité : <b>le courant électrique crée un champ magnétique</b>. En enroulant un fil autour d'un clou en fer, on obtient un <b>électroaimant</b>, qui s'« éteint » quand on coupe le courant (utilisé dans les grues de ferrailleurs, les sonnettes, les relais).</p>
<p>En <b>1831</b>, l'Anglais <b>Michael Faraday</b> découvrit l'inverse : <b>en déplaçant un aimant dans une bobine de fil, on produit du courant</b> (induction électromagnétique). C'est de là que naissent :</p>
<ul>
<li>le <b>générateur</b> (alternateur) : dans les centrales hydrauliques, éoliennes, thermiques, une turbine fait tourner des aimants et des bobines et produit du courant. La dynamo du vélo fonctionne de la même façon ;</li>
<li>le <b>moteur électrique</b> : il fait le chemin inverse, il transforme l'énergie électrique en mouvement (mixeurs, voitures électriques, ventilateurs). L'Italien <b>Galileo Ferraris</b> découvrit en 1885 le champ magnétique tournant, à la base des moteurs à courant alternatif ;</li>
<li>le <b>transformateur</b>, qui augmente ou diminue la tension : le courant voyage dans les lignes à haute tension (jusqu'à 380 000 V en Italie) et arrive à la maison à 230 V.</li>
</ul>
<p>En 1865, l'Écossais <b>James Clerk Maxwell</b> réunit tout en quatre équations et comprit que la <b>lumière</b> elle-même est une onde électromagnétique.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : construis un électroaimant",
      html: `<p>Il te faut : un clou en fer d'environ 8 cm, 1 mètre de fil de cuivre isolé fin, une pile de 1,5 V, quelques trombones. Fais-le avec un adulte.</p>
<ol>
<li>Enroule le fil autour du clou en faisant 30 à 40 spires serrées, en laissant libres les deux bouts.</li>
<li>Retire le plastique aux extrémités du fil sur environ 1 cm.</li>
<li>Maintiens les bouts sur les pôles de la pile pendant quelques secondes : le clou <b>attire les trombones</b> !</li>
<li>Détache un bout : les trombones tombent.</li>
</ol>
<p>Essaie de doubler les spires : combien de trombones soulève-t-il maintenant ? Plus de spires et plus de courant = champ magnétique plus fort. ⚠️ Ne le laisse pas branché longtemps : le fil chauffe (effet Joule) et la pile se décharge.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La pile est italienne",
      html: `<p>En <b>1799</b>, Alessandro <b>Volta</b>, originaire de Côme, empila des disques de zinc et de cuivre séparés par des chiffons imbibés d'eau salée et obtint la première <b>pile</b>, le premier générateur de courant continu (il l'annonça en 1800). Il le fit pour démontrer que Luigi Galvani se trompait au sujet de l'« électricité animale » des grenouilles. En son honneur, l'unité de la tension s'appelle le <b>volt</b>. Et le mot « électricité » vient du grec <i>élektron</i>, qui signifie <b>ambre</b> : déjà le philosophe Thalès, au VIe siècle avant notre ère, avait remarqué que l'ambre frotté attirait des brins de paille.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La foudre et le paratonnerre",
      html: `<p>Un <b>éclair</b> est une gigantesque décharge entre le nuage et le sol : la tension peut atteindre des centaines de millions de volts et le courant des dizaines de milliers d'ampères, mais cela dure moins d'un millième de seconde. L'air autour chauffe à environ 30 000 °C (plus que la surface du Soleil) et se dilate d'un coup : c'est le <b>tonnerre</b>. En 1752, Benjamin Franklin démontra avec un cerf-volant que la foudre est de l'électricité et inventa le <b>paratonnerre</b>. Pour savoir à quelle distance se trouve un orage : compte les secondes entre l'éclair et le tonnerre et divise par 3 : tu obtiens les kilomètres.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre le courant",
      intro: "Le courant ne se voit pas : voici quelques images qui aident à le « voir ».",
      tabs: [
        {
          label: "💧 L'analogie de l'eau",
          html: `<p>Pense à un circuit comme à une installation hydraulique :</p>
<ul>
<li>la <b>pile</b> est une <b>pompe</b> qui fait monter l'eau : la <b>tension</b> est la différence de hauteur (la pression) ;</li>
<li>le <b>courant</b> est la quantité d'eau qui passe chaque seconde dans le tuyau ;</li>
<li>la <b>résistance</b> est un tuyau étroit ou un robinet presque fermé ;</li>
<li>l'<b>interrupteur</b> est une vanne.</li>
</ul>
<p>Avec plus de pression, il passe plus d'eau (V plus grand → I plus grand) ; avec un tuyau plus étroit, il en passe moins (R plus grande → I plus petit). C'est la loi d'Ohm !</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<rect x="40" y="40" width="80" height="60" fill="#38bdf8" stroke="#0369a1" stroke-width="3"/>
<text x="80" y="76" font-size="15" text-anchor="middle" fill="#0c4a6e">réservoir haut</text>
<rect x="40" y="190" width="80" height="40" fill="#38bdf8" stroke="#0369a1" stroke-width="3"/>
<text x="80" y="215" font-size="14" text-anchor="middle" fill="#0c4a6e">en bas</text>
<path d="M120 70 L360 70 L360 210 L120 210" fill="none" stroke="#0369a1" stroke-width="16"/>
<rect x="340" y="110" width="40" height="60" fill="#f59e0b" stroke="#78350f" stroke-width="3"/>
<text x="400" y="145" font-size="15" fill="#78350f">étranglement = résistance</text>
<circle cx="80" cy="150" r="22" fill="#a78bfa" stroke="#5b21b6" stroke-width="3"/>
<text x="80" y="156" font-size="14" text-anchor="middle" fill="#fff">pompe</text>
<line x1="80" y1="128" x2="80" y2="100" stroke="#5b21b6" stroke-width="4"/>
<line x1="80" y1="172" x2="80" y2="190" stroke="#5b21b6" stroke-width="4"/>
<text x="240" y="60" font-size="15" text-anchor="middle" fill="#0c4a6e">débit d'eau = courant →</text>
<text x="180" y="130" font-size="15" fill="#5b21b6">pompe = pile</text>
<text x="180" y="150" font-size="15" fill="#5b21b6">dénivelé = tension</text>
</svg>`
        },
        {
          label: "🔺 Le triangle magique",
          html: `<p>Dans les écoles anglaises, on utilise le <b>triangle VRI</b>. Cache avec le doigt la grandeur que tu cherches et lis ce qui reste :</p>
<ul><li>cache <b>V</b> → il reste R à côté de I → <b>V = R × I</b> ;</li>
<li>cache <b>I</b> → il reste V au-dessus de R → <b>I = V : R</b> ;</li>
<li>cache <b>R</b> → il reste V au-dessus de I → <b>R = V : I</b>.</li></ul>
<p>La même astuce fonctionne pour la puissance, avec P en haut et V, I en bas.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fdf4ff"/>
<polygon points="300,20 470,230 130,230" fill="#f0abfc" stroke="#86198f" stroke-width="4"/>
<line x1="210" y1="130" x2="390" y2="130" stroke="#86198f" stroke-width="4"/>
<line x1="300" y1="130" x2="300" y2="230" stroke="#86198f" stroke-width="4"/>
<text x="300" y="110" font-size="44" text-anchor="middle" font-weight="bold" fill="#4a044e">V</text>
<text x="240" y="200" font-size="40" text-anchor="middle" font-weight="bold" fill="#4a044e">R</text>
<text x="360" y="200" font-size="40" text-anchor="middle" font-weight="bold" fill="#4a044e">I</text>
<text x="300" y="255" font-size="15" text-anchor="middle" fill="#4a044e">ligne horizontale = divisé · ligne verticale = fois</text>
</svg>`
        },
        {
          label: "⚛️ Les électrons en 3D",
          html: `<p>Regarde les atomes de près : dans les métaux comme le <b>cuivre</b>, l'électron le plus externe est loin du noyau et peu retenu. Quand tu branches une pile, tous ces électrons libres « glissent » dans la même direction, du pôle négatif vers le positif. Détail curieux : ils se déplacent très lentement (quelques millimètres par minute !), mais la « poussée » se propage presque à la vitesse de la lumière, comme quand tu pousses une file de billes dans un tube plein.</p>`,
          scene: "atom",
          options: { elements: ["Cu", "Ag", "Au", "Al"] }
        },
        {
          label: "🧲 Associe savant et découverte",
          html: `<p>L'histoire de l'électricité est un relais entre des savants de nombreux pays. Associe chacun à sa découverte.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Alessandro Volta", "La pile (1799)"],
              ["Hans Christian Ørsted", "Le courant fait bouger la boussole (1820)"],
              ["Georg Simon Ohm", "V = R × I (1827)"],
              ["Michael Faraday", "Induction électromagnétique (1831)"],
              ["Galileo Ferraris", "Champ magnétique tournant (1885)"],
              ["Benjamin Franklin", "Le paratonnerre (1752)"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de l'électricité et du magnétisme : touche les nœuds et découvre le pourquoi",
      nodes: [
        { id: "carica", label: "Charge électrique", x: 50, y: 6, color: "#ef4444", html: "Propriété des protons (+) et des électrons (−).", why: "L'électron fut découvert par J. J. Thomson en 1897 ; la plus petite charge (celle de l'électron, 1,6 × 10⁻¹⁹ C) fut mesurée par Robert Millikan en 1909 avec de minuscules gouttes d'huile." },
        { id: "coulomb", label: "Attraction et répulsion", x: 15, y: 22, color: "#f97316", html: "Les charges identiques se repoussent, les opposées s'attirent.", why: "En 1785, <b>Coulomb</b> mesura avec une balance de torsion que la force diminue avec le carré de la distance, exactement comme la gravité de Newton." },
        { id: "conduttori", label: "Conducteurs et isolants", x: 85, y: 22, color: "#f59e0b", html: "Matériaux qui laissent ou non les charges se déplacer.", why: "Cela dépend des électrons externes : dans les métaux, ils sont libres de se déplacer entre les atomes, dans les isolants ils restent liés à leurs atomes." },
        { id: "corrente", label: "Courant, tension, résistance", x: 50, y: 38, color: "#2563eb", html: "I (ampère), V (volt), R (ohm).", why: "Le courant continu ne devint étudiable qu'après la <b>pile de Volta</b> (1799) : avant, on ne connaissait que des décharges instantanées." },
        { id: "ohm", label: "Loi d'Ohm", x: 20, y: 60, color: "#0ea5e9", html: "V = R × I.", why: "<b>Ohm</b> la déduisit en 1827 en mesurant soigneusement le courant dans des fils de longueurs différentes. Au début, il fut critiqué ; puis la Royal Society le récompensa en 1841." },
        { id: "circuiti", label: "Circuits série et parallèle", x: 20, y: 85, color: "#14b8a6", html: "Différents montages des récepteurs.", why: "De la loi d'Ohm et de la conservation de la charge (lois de Kirchhoff, 1845), on déduit comment les résistances s'additionnent en série et en parallèle." },
        { id: "potenza", label: "Puissance et énergie", x: 50, y: 85, color: "#22c55e", html: "P = V × I (watt) ; E = P × t (kWh).", why: "James Prescott Joule (1840) mesura la chaleur produite par le courant et démontra que l'énergie se transforme mais se conserve." },
        { id: "magnetismo", label: "Aimants et champ magnétique", x: 82, y: 55, color: "#a855f7", html: "Pôles Nord et Sud, lignes de champ, magnétisme terrestre.", why: "William Gilbert, en 1600 (<i>De Magnete</i>), comprit que la Terre est un grand aimant. Le champ terrestre naît du fer liquide en mouvement dans le noyau externe." },
        { id: "elettromagnetismo", label: "Électromagnétisme", x: 82, y: 85, color: "#7c3aed", html: "Le courant crée du magnétisme ; le magnétisme en mouvement crée du courant.", why: "<b>Ørsted</b> (1820) et <b>Faraday</b> (1831) le découvrirent ; <b>Maxwell</b> (1865) le décrivit avec 4 équations, en prévoyant les ondes électromagnétiques (radio, lumière), trouvées ensuite par Hertz en 1887." }
      ],
      edges: [
        ["carica", "coulomb", "exerce des forces"],
        ["carica", "conduttori", "se déplace dans les"],
        ["conduttori", "corrente", "permettent le"],
        ["corrente", "ohm", "est reliée par la"],
        ["ohm", "circuiti", "explique les"],
        ["corrente", "potenza", "transporte de la"],
        ["corrente", "elettromagnetismo", "génère du magnétisme"],
        ["magnetismo", "elettromagnetismo", "en mouvement génère du courant"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : circuits et aimants",
      questions: [
        { type: "mc", q: "Pourquoi l'installation de la maison est-elle montée en parallèle ?", options: ["Pour économiser du fil", "Parce que chaque appareil reçoit 230 V et fonctionne seul", "Parce que le courant est plus faible"], answer: 1, explain: "En parallèle, chaque branche a la même tension et est indépendante." },
        { type: "num", q: "Deux résistances de 4 Ω et 6 Ω sont en série. Quelle est la résistance totale ?", answer: 10, unit: "Ω", explain: "En série, elles s'additionnent : 4 + 6 = 10 Ω." },
        { type: "tf", q: "En déplaçant un aimant dans une bobine, on produit du courant.", answer: true, explain: "C'est l'induction électromagnétique découverte par Faraday." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Les charges identiques se repoussent, les opposées s'attirent. Électrisation : frottement, contact, influence.</li>
<li><b>I</b> en ampères, <b>V</b> en volts, <b>R</b> en ohms. Loi d'Ohm : <b>V = R × I</b>.</li>
<li><b>P = V × I</b> (watts) ; énergie <b>E = P × t</b> (kWh).</li>
<li>Série : même courant, les R s'additionnent. Parallèle : même tension, branches indépendantes.</li>
<li>Les pôles magnétiques identiques se repoussent ; la Terre est un aimant.</li>
<li>Courant → magnétisme (Ørsted) ; aimant en mouvement → courant (Faraday).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Charge électrique", d: "Propriété de la matière : positive (protons) ou négative (électrons)." },
    { t: "Conducteur", d: "Matériau dans lequel les charges se déplacent facilement." },
    { t: "Isolant", d: "Matériau qui ne laisse pas passer le courant." },
    { t: "Courant électrique", d: "Flux ordonné de charges ; il se mesure en ampères (A)." },
    { t: "Tension", d: "Différence de potentiel qui pousse les charges ; elle se mesure en volts (V)." },
    { t: "Résistance", d: "Opposition au passage du courant ; elle se mesure en ohms (Ω)." },
    { t: "Puissance électrique", d: "Énergie utilisée chaque seconde : P = V × I, en watts." },
    { t: "Kilowattheure", d: "Énergie utilisée par un appareil de 1 000 W pendant une heure." },
    { t: "Circuit", d: "Parcours fermé dans lequel circule le courant." },
    { t: "Champ magnétique", d: "Zone autour d'un aimant ou d'un courant où agissent des forces magnétiques." },
    { t: "Induction électromagnétique", d: "Production de courant par un champ magnétique qui varie." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Un ballon frotté sur les cheveux se charge…", options: ["par contact", "par frottement", "par influence"], answer: 1, explain: "Le frottement transfère des électrons des cheveux au ballon." },
      { type: "mc", q: "Lequel de ces matériaux est un isolant ?", options: ["Cuivre", "Caoutchouc", "Eau salée", "Graphite"], answer: 1, explain: "Le caoutchouc ne laisse pas passer le courant." },
      { type: "num", q: "Une ampoule a une résistance de 6 Ω et la pile donne 12 V. Combien d'ampères passent ?", answer: 2, unit: "A", explain: "I = 12 : 6 = 2 A." },
      { type: "num", q: "Dans un circuit, 0,5 A traverse une résistance de 18 Ω. Quelle est la tension ?", answer: 9, unit: "V", explain: "V = R × I = 18 × 0,5 = 9 V." },
      { type: "num", q: "Un four de 2 kW reste allumé 3 heures. Combien de kWh consomme-t-il ?", answer: 6, unit: "kWh", explain: "E = 2 kW × 3 h = 6 kWh." },
      { type: "num", q: "Deux résistances de 10 Ω sont en parallèle. Quelle est la résistance totale ?", answer: 5, unit: "Ω", explain: "1/R = 1/10 + 1/10 = 2/10 → R = 5 Ω." },
      { type: "tf", q: "Dans un circuit en série, si une ampoule grille, les autres restent allumées.", answer: false, explain: "En série, il n'y a qu'un seul parcours : toutes s'éteignent." },
      { type: "text", q: "Comment s'appelle le savant italien qui inventa la pile ?", answer: ["volta", "alessandro volta"], explain: "Alessandro Volta, en 1799." },
      { type: "mc", q: "Qu'est-ce qu'Ørsted découvrit en 1820 ?", options: ["Que le courant crée un champ magnétique", "La loi V = R × I", "L'électron"], answer: 0, explain: "Un fil parcouru par un courant fait tourner l'aiguille de la boussole." },
      { type: "mc", q: "Sur quel principe reposent les générateurs des centrales électriques ?", options: ["L'effet Joule", "L'induction électromagnétique", "L'électrisation par frottement"], answer: 1, explain: "Des aimants et des bobines en rotation produisent du courant." },
      { type: "tf", q: "Deux pôles Nord de deux aimants s'attirent.", answer: false, explain: "Les pôles identiques se repoussent." },
      { type: "order", q: "Mets les découvertes dans l'ordre chronologique.", items: ["Paratonnerre de Franklin", "Pile de Volta", "Expérience d'Ørsted", "Loi d'Ohm", "Induction de Faraday"], explain: "1752, 1799, 1820, 1827, 1831." }
    ],
    gen: [["proportion", 2]]
  }
});
