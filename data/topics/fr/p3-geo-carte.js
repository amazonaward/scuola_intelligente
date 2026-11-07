TOPIC('fr', {
  id: "p3-geo-carte",
  title: "Les cartes géographiques",
  intro: "Une carte géographique est comme une <b>photographie prise d'en haut</b>, rapetissée et dessinée avec des couleurs et des symboles. Aujourd'hui, nous découvrons comment faire tenir une ville, une région ou le monde entier sur une feuille : l'<b>échelle</b>, la <b>légende</b> et les différents <b>types de cartes</b>. 🗺️",
  minutes: 30,
  sections: [
    {
      type: "text", title: "Étape 1 : regarder d'en haut",
      html: `<p>Essaie de regarder ta trousse sous trois angles différents :</p>
<ul>
<li><b>De face</b> (vue frontale) : tu vois le devant.</li>
<li><b>En biais</b> (vue oblique) : tu vois le devant et un peu le dessus.</li>
<li><b>D'en haut</b> (vue <b>zénithale</b>, ou « à vol d'oiseau ») : tu ne vois que le dessus. 🦅</li>
</ul>
<p>Les cartographes, c'est-à-dire ceux qui dessinent les cartes, utilisent <b>toujours la vue d'en haut</b>. Ainsi chaque chose garde sa vraie forme et on peut mesurer les distances.</p>`
    },
    {
      type: "text", title: "Étape 2 : rapetisser (la réduction à l'échelle)",
      html: `<p>Un parc ou une ville sont trop grands pour une feuille. Alors le cartographe les <b>rapetisse</b> : toutes les mesures sont divisées par le même nombre. C'est ce qu'on appelle la <b>réduction à l'échelle</b>.</p>
<p>L'<b>échelle</b> s'écrit ainsi : <b>1 : 100</b> (on lit « un pour cent »). Cela veut dire :</p>
<p style="font-size:1.15em">📏 <b>1 cm</b> sur le dessin = <b>100 cm</b> (c'est-à-dire 1 mètre) dans la réalité.</p>
<ul>
<li><b>1 : 100</b> → 1 cm = 1 m. Convient pour le plan de ta classe.</li>
<li><b>1 : 100 000</b> → 1 cm = 1 km. Convient pour un département.</li>
<li><b>1 : 10 000 000</b> → 1 cm = 100 km. Convient pour toute l'Italie.</li>
</ul>
<p>Plus le deuxième nombre est <b>grand</b>, plus la réalité a été rapetissée et <b>moins de détails</b> on voit.</p>`
    },
    {
      type: "svg", title: "De la réalité au plan",
      caption: "La même classe vue en biais puis d'en haut, rapetissée et dessinée avec les symboles de la légende.",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<text x="140" y="28" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">VUE EN BIAIS</text>
<polygon points="40,240 240,240 270,110 70,110" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<polygon points="70,110 270,110 270,60 70,60" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
<rect x="110" y="70" width="70" height="30" fill="#166534" stroke="#14532d" stroke-width="2"/>
<polygon points="80,215 120,215 128,185 88,185" fill="#a16207"/>
<polygon points="150,215 190,215 198,185 158,185" fill="#a16207"/>
<polygon points="105,170 140,170 146,145 111,145" fill="#a16207"/>
<polygon points="175,170 210,170 216,145 181,145" fill="#a16207"/>
<text x="300" y="165" font-size="34" text-anchor="middle" fill="#2563eb">➜</text>
<text x="300" y="195" font-size="13" text-anchor="middle" fill="#1e3a8a">d'en haut</text>
<text x="465" y="28" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">PLAN 1 : 100</text>
<rect x="350" y="50" width="230" height="190" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
<rect x="420" y="54" width="90" height="12" fill="#166534"/>
<rect x="375" y="100" width="40" height="25" fill="#a16207"/>
<rect x="445" y="100" width="40" height="25" fill="#a16207"/>
<rect x="515" y="100" width="40" height="25" fill="#a16207"/>
<rect x="375" y="160" width="40" height="25" fill="#a16207"/>
<rect x="445" y="160" width="40" height="25" fill="#a16207"/>
<rect x="515" y="160" width="40" height="25" fill="#a16207"/>
<rect x="545" y="236" width="30" height="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
<rect x="355" y="258" width="16" height="12" fill="#a16207"/>
<text x="377" y="269" font-size="14" fill="#0f172a">bureau</text>
<rect x="425" y="258" width="16" height="12" fill="#166534"/>
<text x="447" y="269" font-size="14" fill="#0f172a">tableau</text>
<rect x="510" y="258" width="16" height="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
<text x="532" y="269" font-size="14" fill="#0f172a">porte</text>
<text x="465" y="292" font-size="14" text-anchor="middle" fill="#475569">LÉGENDE</text>
</svg>`
    },
    {
      type: "example", title: "Exemple pratique : mesurer sur le plan",
      html: `<p>Sur le plan de ta classe à l'échelle <b>1 : 100</b>, le long mur mesure <b>7 cm</b>.</p>
<p>Quelle est sa vraie longueur ? Chaque centimètre vaut 100 cm, donc :</p>
<p><b>7 × 100 = 700 cm = 7 mètres</b> ✅</p>
<p>Et à l'inverse : si le couloir mesure 12 m de long, je le dessine sur le plan avec une longueur de <b>12 cm</b>.</p>`
    },
    {
      type: "remember", title: "La légende et les couleurs",
      html: `<p>Chaque carte a une <b>légende</b> : un encadré qui explique ce que veulent dire les <b>symboles</b> et les <b>couleurs</b>. Sur les cartes physiques, les couleurs sont presque toujours celles-ci :</p>
<ul>
<li>🟦 <b>bleu clair / bleu</b> : mers, lacs, fleuves (plus c'est foncé, plus l'eau est profonde) ;</li>
<li>🟩 <b>vert</b> : plaines ;</li>
<li>🟨 <b>jaune / brun clair</b> : collines ;</li>
<li>🟫 <b>brun foncé</b> : montagnes (plus c'est foncé, plus elles sont hautes) ;</li>
<li>⬜ <b>blanc</b> : glaciers et neiges éternelles.</li>
</ul>
<p>Et n'oublie pas le <b>Nord</b> : en général il est <b>en haut</b>, indiqué par une flèche ou par la <b>rose des vents</b>.</p>`
    },
    {
      type: "3d", title: "Le vrai paysage et ses couleurs sur la carte",
      scene: "terrain",
      caption: "Fais tourner le paysage et touche les parties : pour chacune, découvre avec quelle couleur ou quel symbole le cartographe la dessine.",
      options: {
        features: {
          sea: { label: "Mer", html: "Sur la carte physique, elle est <b>bleue</b> : plus le bleu est foncé, plus la mer est profonde." },
          coast: { label: "Côte", html: "Elle est dessinée par un <b>trait</b> qui sépare le bleu de la mer de la couleur de la terre." },
          plain: { label: "Plaine", html: "Terre plate et basse (moins de 200 m) : sur la carte physique, elle est <b>verte</b>." },
          hill: { label: "Colline", html: "Relief jusqu'à environ 600 m : sur la carte, il est <b>jaune</b> ou brun clair." },
          mountain: { label: "Montagne", html: "Relief au-dessus de 600 m : sur la carte, il est <b>brun</b>, de plus en plus foncé en montant." },
          peak: { label: "Sommet", html: "Le haut de la montagne : on le marque d'un <b>petit triangle ▲</b> et de son altitude en mètres, par exemple ▲ 4 808 (Mont Blanc)." },
          glacier: { label: "Glacier", html: "Glace qui ne fond jamais : sur la carte, il est <b>blanc</b>." },
          river: { label: "Fleuve", html: "Un <b>trait bleu</b> qui s'élargit vers l'embouchure." },
          lake: { label: "Lac", html: "Une <b>tache bleue</b> entourée de terre." }
        }
      }
    },
    {
      type: "quiz", title: "Mini-quiz : échelle et légende",
      questions: [
        { type: "mc", q: "La carte dessinée en regardant d'en haut utilise la vue…", options: ["frontale", "zénithale", "latérale"], answer: 1, explain: "Zénithale = d'en haut, comme un oiseau en vol." },
        { type: "num", q: "Échelle 1 : 100. Un mur sur le plan mesure 5 cm. Combien de mètres mesure-t-il en vrai ?", answer: 5, tol: 0, unit: "m", explain: "5 cm × 100 = 500 cm = 5 m." },
        { type: "mc", q: "Sur une carte physique, les plaines sont de couleur…", options: ["brune", "verte", "blanche"], answer: 1, explain: "Vert pour les plaines, brun pour les montagnes." }
      ]
    },
    {
      type: "text", title: "Étape 3 : les types de cartes",
      html: `<p>Les cartes se classent de deux façons : <b>selon leur degré de réduction</b> (l'échelle) et <b>selon ce qu'elles montrent</b> (le contenu).</p>
<table>
<tr><th>Selon l'échelle</th><th>Ce qu'elle montre</th><th>Échelle typique</th></tr>
<tr><td><b>Plan</b></td><td>une pièce, une maison, une école</td><td>1 : 50 – 1 : 500</td></tr>
<tr><td><b>Plan de ville</b></td><td>un quartier, une ville avec ses rues</td><td>jusqu'à 1 : 10 000</td></tr>
<tr><td><b>Carte topographique</b></td><td>un petit territoire : sentiers, maisons, bois</td><td>1 : 25 000 – 1 : 100 000</td></tr>
<tr><td><b>Carte régionale</b></td><td>une région</td><td>1 : 200 000 – 1 : 1 000 000</td></tr>
<tr><td><b>Carte géographique</b></td><td>un État, un continent</td><td>au-delà de 1 : 1 000 000</td></tr>
<tr><td><b>Planisphère</b></td><td>toute la Terre sur une feuille</td><td>environ 1 : 100 000 000</td></tr>
</table>
<p>Selon le <b>contenu</b> :</p>
<ul>
<li><b>Carte physique</b> : monts, plaines, fleuves, lacs, mers (les éléments de la nature).</li>
<li><b>Carte politique</b> : États, régions, frontières, villes (les éléments décidés par l'homme). Chaque État a une couleur différente.</li>
<li><b>Carte thématique</b> : un seul sujet, par exemple le climat, les routes, les produits agricoles ou les endroits où vivent le plus de personnes.</li>
</ul>`
    },
    {
      type: "svg", title: "Physique, politique ou thématique ?",
      caption: "La même île imaginaire dessinée de trois façons différentes.",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#ffffff"/>
<rect x="10" y="40" width="185" height="200" fill="#7dd3fc"/>
<ellipse cx="102" cy="140" rx="75" ry="80" fill="#4ade80"/>
<ellipse cx="110" cy="125" rx="45" ry="45" fill="#facc15"/>
<ellipse cx="115" cy="115" rx="22" ry="22" fill="#92400e"/>
<polygon points="115,100 108,112 122,112" fill="#ffffff"/>
<path d="M115,130 Q90,170 70,215" stroke="#1d4ed8" stroke-width="4" fill="none"/>
<text x="102" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#166534">PHYSIQUE</text>
<text x="102" y="265" font-size="14" text-anchor="middle" fill="#0f172a">monts, collines,</text>
<text x="102" y="283" font-size="14" text-anchor="middle" fill="#0f172a">plaines, fleuves</text>
<rect x="208" y="40" width="185" height="200" fill="#e0f2fe"/>
<path d="M300,60 A75,80 0 0 0 225,140 L300,140 Z" fill="#fca5a5" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<path d="M300,60 A75,80 0 0 1 375,140 L300,140 Z" fill="#c4b5fd" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<path d="M225,140 A75,80 0 0 0 375,140 Z" fill="#fde68a" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<circle cx="270" cy="115" r="5" fill="#0f172a"/>
<circle cx="335" cy="110" r="5" fill="#0f172a"/>
<rect x="294" y="174" width="12" height="12" fill="#dc2626"/>
<text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#b91c1c">POLITIQUE</text>
<text x="300" y="265" font-size="14" text-anchor="middle" fill="#0f172a">frontières, régions,</text>
<text x="300" y="283" font-size="14" text-anchor="middle" fill="#0f172a">villes, capitale ■</text>
<rect x="406" y="40" width="185" height="200" fill="#e0f2fe"/>
<ellipse cx="498" cy="140" rx="75" ry="80" fill="#e5e7eb"/>
<text x="470" y="115" font-size="26" text-anchor="middle">🍇</text>
<text x="530" y="125" font-size="26" text-anchor="middle">🐄</text>
<text x="490" y="180" font-size="26" text-anchor="middle">🌾</text>
<text x="498" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#7c3aed">THÉMATIQUE</text>
<text x="498" y="265" font-size="14" text-anchor="middle" fill="#0f172a">un seul thème :</text>
<text x="498" y="283" font-size="14" text-anchor="middle" fill="#0f172a">les produits agricoles</text>
</svg>`
    },
    {
      type: "widget", title: "Jeu : carte physique ou carte politique ?",
      widget: "classify",
      caption: "Sur quelle carte cherches-tu ces choses ? Les éléments naturels sont sur la physique, ceux décidés par l'homme sur la politique.",
      options: {
        groups: ["🏔️ Carte physique", "🏛️ Carte politique"],
        items: [
          ["le fleuve Pô", 0], ["les Alpes", 0], ["le lac de Garde", 0], ["la plaine du Pô", 0], ["l'altitude du Mont Blanc", 0],
          ["la frontière avec la France", 1], ["Rome, capitale", 1], ["les 20 régions", 1], ["les chefs-lieux de province", 1], ["le nom des États", 1]
        ]
      }
    },
    {
      type: "example", title: "Exemple pratique : quelle carte me faut-il ?",
      html: `<ul>
<li>🥾 Tu pars en randonnée en montagne et tu veux suivre le sentier → <b>carte topographique</b> au 1 : 25 000 (on y voit aussi les refuges et les fontaines).</li>
<li>🏙️ Tu dois trouver la rue Victor-Hugo dans une ville inconnue → <b>plan de ville</b>.</li>
<li>🚗 Vous partez en vacances de Paris à Marseille → <b>carte routière</b> de la France (une carte thématique : les routes).</li>
<li>☀️ Tu veux savoir où il pleut le plus en France → <b>carte thématique du climat</b>.</li>
<li>🌍 Tu veux voir tous les continents ensemble → <b>planisphère</b> ou <b>globe terrestre</b>.</li>
</ul>`
    },
    {
      type: "3d", title: "Le globe terrestre : la Terre sans déformations",
      scene: "globe",
      caption: "Fais tourner le globe. Le globe terrestre est la seule « carte » qui montre la Terre avec sa vraie forme : toutes les cartes plates la déforment un peu.",
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: "Rome" },
          { lat: 72, lon: -40, label: "Groenland" },
          { lat: 2, lon: 21, label: "Afrique (centre)" },
          { lat: 51.48, lon: 0, label: "Greenwich (méridien 0°)" },
          { lat: 0, lon: -50, label: "Équateur" },
          { lat: 90, lon: 0, label: "Pôle Nord" }
        ]
      }
    },
    {
      type: "curiosity", title: "Le savais-tu ? Le Groenland semble aussi grand que l'Afrique !",
      html: `<p>Sur beaucoup de planisphères (ceux dessinés avec la méthode de <b>Gerardus Mercator</b>, en 1569), le <b>Groenland</b> semble presque aussi grand que l'<b>Afrique</b>. En réalité, l'Afrique est environ <b>14 fois plus grande</b> ! 😮</p>
<p>La raison : la Terre est une boule et, pour l'« aplatir » sur une feuille, il faut l'étirer. Les terres proches des pôles sont étirées énormément. C'est pourquoi le <b>globe terrestre</b> est plus fidèle que n'importe quelle carte plate.</p>`
    },
    {
      type: "curiosity", title: "Le savais-tu ? Il existe une carte longue de presque 7 mètres !",
      html: `<p>La <b>Table de Peutinger</b> est une copie médiévale d'une carte routière de la <b>Rome antique</b>. C'est un rouleau long d'environ <b>6 mètres 75 centimètres</b> et haut de seulement 34 cm ! Elle montre les routes de l'Empire romain, les villes et les distances entre une étape et l'autre, comme un vieux « GPS » pour les voyageurs. Aujourd'hui, elle se trouve à Vienne.</p>`
    },
    {
      type: "alternatives", title: "D'autres façons de comprendre",
      intro: "Si l'échelle ou les symboles te semblent difficiles, essaie l'un de ces chemins.",
      tabs: [
        {
          label: "🧸 Le monde des jouets",
          html: `<p>Une <b>petite voiture</b> jouet est une vraie voiture rapetissée. Souvent, il est écrit dessous <b>1 : 43</b> : cela veut dire que la vraie voiture est <b>43 fois</b> plus longue.</p>
<p>Une carte fait la même chose avec un territoire : l'échelle te dit <b>combien de fois</b> la réalité a été rapetissée. Une maison de poupée, une maquette de petit train, une maquette d'avion : ce sont tous des objets « à l'échelle » !</p>`
        },
        {
          label: "🏃 Les cartes de course d'orientation (Suède et Norvège)",
          html: `<p>Dans les pays nordiques, les enfants apprennent les cartes en jouant à la <b>course d'orientation</b> : une course dans les bois avec la carte et la boussole, à la recherche de points marqués. Leurs cartes utilisent des couleurs spéciales, les mêmes dans le monde entier :</p>
<ul>
<li>⬜ <b>blanc</b> = bois où l'on court bien ;</li>
<li>🟩 <b>vert</b> = bois dense, difficile à traverser ;</li>
<li>🟨 <b>jaune</b> = prairie ouverte ;</li>
<li>🟦 <b>bleu</b> = eau ;</li>
<li>🟫 <b>brun</b> = formes du terrain (courbes de niveau) ;</li>
<li>⬛ <b>noir</b> = sentiers, rochers, maisons.</li>
</ul>
<p>As-tu remarqué ? Ici le blanc n'est pas la glace ! C'est pourquoi il faut <b>toujours lire la légende</b>.</p>`
        },
        {
          label: "✏️ Dessine ta chambre",
          html: `<p>La meilleure façon de comprendre un plan est d'<b>en faire un</b> :</p>
<ol>
<li>Mesure ta chambre avec le mètre (par exemple 4 m × 3 m).</li>
<li>Choisis l'échelle 1 : 100 : 1 m devient 1 cm. Dessine un rectangle de <b>4 cm × 3 cm</b>.</li>
<li>Dessine d'en haut le lit, l'armoire, le bureau, toujours rapetissés.</li>
<li>Invente un symbole pour chaque meuble et écris-le dans la <b>légende</b>.</li>
<li>Dessine la flèche du <b>Nord</b>.</li>
</ol>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#f1f5f9"/>
<rect x="40" y="20" width="320" height="200" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
<rect x="50" y="30" width="90" height="140" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<rect x="55" y="35" width="80" height="30" fill="#ffffff" stroke="#1e3a8a"/>
<rect x="250" y="30" width="100" height="40" fill="#a16207"/>
<rect x="270" y="160" width="80" height="50" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<rect x="150" y="214" width="60" height="10" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<text x="200" y="130" font-size="15" text-anchor="middle" fill="#475569">4 cm × 3 cm</text>
<text x="390" y="40" font-size="17" font-weight="bold" fill="#0f172a">LÉGENDE</text>
<rect x="390" y="55" width="22" height="16" fill="#93c5fd" stroke="#1e3a8a"/>
<text x="420" y="69" font-size="15" fill="#0f172a">lit</text>
<rect x="390" y="85" width="22" height="16" fill="#a16207"/>
<text x="420" y="99" font-size="15" fill="#0f172a">armoire</text>
<rect x="390" y="115" width="22" height="16" fill="#fbbf24" stroke="#92400e"/>
<text x="420" y="129" font-size="15" fill="#0f172a">bureau</text>
<rect x="390" y="145" width="22" height="8" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<text x="420" y="155" font-size="15" fill="#0f172a">porte</text>
<text x="420" y="190" font-size="15" fill="#0f172a">échelle 1 : 100</text>
<polygon points="545,30 535,60 555,60" fill="#dc2626"/>
<text x="545" y="80" font-size="18" font-weight="bold" text-anchor="middle" fill="#dc2626">N</text>
</svg>`
        },
        {
          label: "🌍 Globe 3D contre feuille",
          html: `<p>Essaie d'« éplucher » une orange et d'écraser la peau sur la table : elle se déchire ou s'étire ! C'est le même problème que celui des cartographes avec la Terre. Fais tourner le globe et observe où se trouvent le Groenland et l'Afrique : sur le globe, tu vois leurs <b>vraies</b> tailles.</p>`,
          scene: "globe",
          options: { points: [ { lat: 72, lon: -40, label: "Groenland : 2,2 millions de km²" }, { lat: 2, lon: 21, label: "Afrique : 30 millions de km²" } ] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Carte : comment naît une carte géographique",
      nodes: [
        { id: "realta", label: "Le territoire réel", x: 50, y: 6, color: "#16a34a", html: "Montagnes, fleuves, villes et routes, grands et en trois dimensions.", why: "Le territoire est trop grand pour être vu tout entier d'un coup : c'est pourquoi les hommes ont toujours cherché à le dessiner, d'abord sur l'argile et la peau, puis sur le papier, aujourd'hui sur l'écran." },
        { id: "zenit", label: "Vue d'en haut", x: 18, y: 30, color: "#0ea5e9", html: "On regarde le territoire d'en haut (vue zénithale).", why: "Ce n'est qu'en regardant d'en haut que chaque chose garde sa forme et que l'on peut mesurer les distances. Autrefois, on mesurait au sol avec des instruments optiques ; depuis le XIXe siècle, on a utilisé les photographies prises depuis des ballons et des avions, aujourd'hui les images des satellites." },
        { id: "scala", label: "Réduction à l'échelle", x: 50, y: 30, color: "#f97316", html: "Toutes les mesures sont divisées par le même nombre.", why: "Si l'on rapetisse tout de la même façon, les formes restent les mêmes (elles sont « semblables », comme dit la géométrie). Ainsi, avec une règle, on peut calculer la vraie distance : mesure sur la carte × le nombre de l'échelle." },
        { id: "simboli", label: "Symboles et légende", x: 82, y: 30, color: "#a855f7", html: "Couleurs et signes à la place des vraies choses.", why: "Une vraie maison sur une carte de l'Italie serait plus petite qu'un point : on utilise donc des symboles. Beaucoup de couleurs sont des conventions acceptées dans le monde entier (bleu pour l'eau, vert pour la plaine), mais chaque carte les explique dans sa légende." },
        { id: "nord", label: "Orientation (Nord)", x: 82, y: 58, color: "#dc2626", html: "Le Nord est en général en haut.", why: "C'est une habitude répandue en Europe avec les cartes imprimées à partir du XVIe siècle, liée aussi à l'usage de la boussole, dont l'aiguille indique le Nord. Au Moyen Âge, beaucoup de cartes européennes avaient au contraire l'Est en haut, vers Jérusalem : de là vient le mot « s'orienter » (chercher l'Orient)." },
        { id: "proiezione", label: "De la sphère à la feuille", x: 18, y: 58, color: "#0284c7", html: "La Terre est sphérique, la feuille est plate : toute carte plate déforme un peu.", why: "Déjà Ératosthène, vers 240 av. J.-C., calcula la circonférence de la Terre. Ptolémée (IIe siècle apr. J.-C.) enseigna à dessiner la Terre avec des parallèles et des méridiens. En 1569, Mercator inventa une carte très utile aux marins, mais qui agrandit les terres proches des pôles." },
        { id: "fisica", label: "Carte physique", x: 18, y: 88, color: "#65a30d", html: "Elle montre les éléments naturels.", why: "Elle sert à comprendre comment est fait le territoire : où l'on peut cultiver (plaines), où coulent les fleuves, quelle est la hauteur des montagnes. Pour les reliefs, on utilise des bandes de couleur ou des courbes de niveau." },
        { id: "politica", label: "Carte politique", x: 50, y: 88, color: "#e11d48", html: "Elle montre États, régions, frontières et villes.", why: "Les frontières ne se voient pas sur le terrain : elles sont décidées par les hommes avec des lois et des traités, et peuvent changer avec le temps. C'est pourquoi les cartes politiques doivent être mises à jour plus souvent que les cartes physiques." },
        { id: "tematica", label: "Carte thématique", x: 82, y: 88, color: "#7c3aed", html: "Elle montre un seul sujet (climat, routes, population…).", why: "En mettant un seul thème sur une carte, on voit tout de suite les différences d'un lieu à l'autre. L'une des plus célèbres fut dessinée par le médecin John Snow en 1854 à Londres : en marquant les malades du choléra, il comprit que la maladie venait d'une fontaine." }
      ],
      edges: [
        ["realta", "zenit", "on regarde"], ["realta", "scala", "on rapetisse"], ["realta", "simboli", "on simplifie"],
        ["zenit", "proiezione", "si c'est toute la Terre"], ["simboli", "nord", "avec"], ["scala", "fisica", "contenu"], ["scala", "politica", "contenu"], ["scala", "tematica", "contenu"],
        ["simboli", "tematica", "un seul thème"]
      ]
    },
    {
      type: "quiz", title: "Mini-quiz : les types de cartes",
      questions: [
        { type: "mc", q: "Sur quelle carte trouves-tu les frontières entre les États ?", options: ["physique", "politique", "topographique des sentiers"], answer: 1, explain: "La carte politique montre États, régions et frontières." },
        { type: "mc", q: "La carte qui montre toute la Terre sur une feuille est…", options: ["le planisphère", "le plan", "le plan de ville"], answer: 0, explain: "Le planisphère (ou, si c'est une boule, le globe terrestre)." },
        { type: "tf", q: "Sur une carte à l'échelle 1 : 1 000 000, on voit plus de détails que sur une carte au 1 : 25 000.", answer: false, explain: "C'est le contraire : plus le deuxième nombre est grand, plus la réalité est rapetissée et moins de détails on voit." }
      ]
    }
  ],
  glossary: [
    { t: "Cartographe", d: "Celui qui dessine les cartes géographiques." },
    { t: "Vue zénithale", d: "La façon de regarder un lieu d'en haut, perpendiculairement." },
    { t: "Réduction à l'échelle", d: "Rapetisser la réalité en divisant toutes les mesures par le même nombre." },
    { t: "Échelle", d: "Le rapport entre les mesures sur la carte et les mesures réelles. 1 : 100 veut dire 1 cm = 100 cm." },
    { t: "Légende", d: "L'encadré qui explique la signification des symboles et des couleurs de la carte." },
    { t: "Plan", d: "Dessin d'en haut, à très grande échelle, d'un petit espace (pièce, maison, école)." },
    { t: "Carte physique", d: "Carte qui montre les éléments naturels : monts, plaines, fleuves, lacs, mers." },
    { t: "Carte politique", d: "Carte qui montre États, régions, frontières et villes." },
    { t: "Carte thématique", d: "Carte consacrée à un seul sujet, comme le climat, les routes ou la population." },
    { t: "Planisphère", d: "Carte qui représente toute la surface de la Terre sur une feuille." },
    { t: "Globe terrestre", d: "Globe qui représente la Terre avec sa forme sphérique, sans déformations." },
    { t: "Rose des vents", d: "Dessin qui indique les points cardinaux : Nord, Sud, Est, Ouest." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Les cartes géographiques représentent le territoire vu…", options: ["de face", "d'en haut", "de côté"], answer: 1, explain: "On utilise la vue zénithale, d'en haut." },
      { type: "mc", q: "Que signifie l'échelle 1 : 100 ?", options: ["1 cm sur la carte = 100 cm dans la réalité", "1 m sur la carte = 100 km dans la réalité", "la carte a 100 symboles"], answer: 0, explain: "Chaque centimètre dessiné correspond à 100 cm, c'est-à-dire 1 mètre." },
      { type: "num", q: "Plan à l'échelle 1 : 100. Le lit sur le dessin mesure 2 cm. Combien de mètres mesure le vrai lit ?", answer: 2, tol: 0, unit: "m", explain: "2 × 100 = 200 cm = 2 m." },
      { type: "num", q: "Échelle 1 : 100. Le gymnase mesure 20 m de long. Combien de centimètres mesurera-t-il sur le plan ?", answer: 20, tol: 0, unit: "cm", explain: "Avec l'échelle 1 : 100, chaque mètre devient 1 cm : 20 m → 20 cm." },
      { type: "text", q: "Comment s'appelle l'encadré qui explique les symboles d'une carte ?", answer: ["légende", "la légende", "legende"], explain: "La légende." },
      { type: "mc", q: "Sur une carte physique, les montagnes sont…", options: ["vertes", "brunes", "bleues"], answer: 1, explain: "Brun, de plus en plus foncé là où les montagnes sont plus hautes." },
      { type: "mc", q: "Tu veux savoir où passe la frontière entre l'Italie et la Suisse. Tu utilises une carte…", options: ["physique", "politique", "du climat"], answer: 1, explain: "Les frontières sont sur la carte politique." },
      { type: "mc", q: "Une carte qui montre seulement les pluies en Italie est une carte…", options: ["thématique", "topographique", "politique"], answer: 0, explain: "Elle traite un seul thème : elle est thématique." },
      { type: "order", q: "Range de la carte qui représente le lieu le plus petit à celle qui représente le plus grand.", items: ["plan de la classe", "plan de la ville", "carte de la région", "carte de l'Italie", "planisphère"], explain: "Plus le territoire est grand, plus il faut rapetisser." },
      { type: "tf", q: "Le globe terrestre montre la forme de la Terre mieux qu'un planisphère.", answer: true, explain: "La Terre est sphérique comme le globe ; toute carte plate la déforme un peu." },
      { type: "tf", q: "Sur les planisphères de Mercator, le Groenland paraît plus petit qu'il ne l'est en réalité.", answer: false, explain: "Il paraît beaucoup plus grand : les terres proches des pôles sont étirées." },
      { type: "mc", q: "En général, sur les cartes, le Nord se trouve…", options: ["en bas", "en haut", "à droite"], answer: 1, explain: "Par convention, le Nord est en haut, indiqué par une flèche ou par la rose des vents." }
    ]
  }
});
