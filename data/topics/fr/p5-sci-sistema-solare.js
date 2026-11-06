TOPIC('fr', {
  id: "p5-sci-sistema-solare",
  title: "Le Système solaire",
  intro: "Le Système solaire est notre « maison » dans l'espace : une étoile, le <b>Soleil</b>, et tout ce qui tourne autour d'elle. Découvrons les planètes, les lunes, les astéroïdes et les comètes, et pourquoi il y a sur Terre le jour, la nuit et les saisons.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce que le Système solaire ?",
      html: `<p>Le <b>Système solaire</b> est formé :</p>
<ul>
<li>du <b>Soleil</b>, une étoile au centre ;</li>
<li>de <b>8 planètes</b> qui tournent autour de lui ;</li>
<li>des <b>planètes naines</b>, comme Pluton et Cérès ;</li>
<li>de plus de 200 <b>satellites</b> (lunes) qui tournent autour des planètes ;</li>
<li>de millions d'<b>astéroïdes</b>, de <b>comètes</b> et de petits fragments de roche et de glace.</li>
</ul>
<p>Tous ces corps sont retenus ensemble par une force invisible : la <b>force de gravité</b> du Soleil. C'est la même force qui fait tomber une pomme par terre !</p>
<p>Le Système solaire s'est formé il y a environ <b>4,6 milliards d'années</b> à partir d'un énorme nuage de gaz et de poussière.</p>`
    },
    {
      type: "text",
      title: "Le Soleil : notre étoile",
      html: `<p>Le Soleil est une <b>étoile</b> : une gigantesque sphère de gaz très chaud (surtout de l'hydrogène et de l'hélium). En son centre, la température atteint environ <b>15 millions de degrés</b> !</p>
<p>Le Soleil produit de la <b>lumière</b> et de la <b>chaleur</b> : sans lui, il n'y aurait pas de vie sur Terre. Les plantes utilisent sa lumière pour grandir, et nous mangeons les plantes (ou des animaux qui les mangent).</p>
<p>Le Soleil est énorme : son diamètre est environ <b>109 fois</b> celui de la Terre. À lui seul, il contient plus de 99 % de toute la matière du Système solaire.</p>
<p><b>Attention :</b> il ne faut jamais regarder le Soleil directement, même avec des lunettes de soleil : on s'abîme les yeux !</p>`
    },
    {
      type: "svg",
      title: "Les huit planètes dans l'ordre",
      svg: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="260" fill="#0b1026"/>
<circle cx="20" cy="20" r="1.5" fill="#fff"/><circle cx="300" cy="30" r="1.2" fill="#fff"/><circle cx="520" cy="25" r="1.5" fill="#fff"/><circle cx="420" cy="230" r="1.2" fill="#fff"/><circle cx="180" cy="235" r="1.3" fill="#fff"/>
<circle cx="-40" cy="125" r="110" fill="#fbbf24"/>
<text x="10" y="130" font-size="16" fill="#7c2d12" font-weight="bold">Soleil</text>
<circle cx="95" cy="125" r="5" fill="#9ca3af"/>
<circle cx="125" cy="125" r="10" fill="#f5c76b"/>
<circle cx="163" cy="125" r="11" fill="#3b82f6"/>
<circle cx="163" cy="125" r="4" fill="#22c55e"/>
<circle cx="198" cy="125" r="7" fill="#dc4b2a"/>
<circle cx="268" cy="125" r="40" fill="#d6a46b"/>
<rect x="230" y="113" width="76" height="6" fill="#b4794a"/>
<rect x="232" y="130" width="72" height="6" fill="#c98b57"/>
<ellipse cx="385" cy="125" rx="62" ry="10" fill="none" stroke="#e8d18f" stroke-width="5"/>
<circle cx="385" cy="125" r="33" fill="#e8c77a"/>
<circle cx="485" cy="125" r="20" fill="#7dd3fc"/>
<circle cx="565" cy="125" r="19" fill="#3b5bdb"/>
<g font-size="14" fill="#fff" text-anchor="middle">
<text x="95" y="160">Mercure</text>
<text x="125" y="95">Vénus</text>
<text x="163" y="160">Terre</text>
<text x="198" y="95">Mars</text>
<text x="268" y="190">Jupiter</text>
<text x="385" y="185">Saturne</text>
<text x="485" y="165">Uranus</text>
<text x="565" y="165">Neptune</text>
</g>
<text x="320" y="245" font-size="13" fill="#cbd5e1" text-anchor="middle">Les tailles des planètes sont proportionnelles entre elles, mais pas les distances !</text>
</svg>`,
      caption: "Astuce pour retenir l'ordre : « <b>M</b>e <b>V</b>oici <b>T</b>oute <b>M</b>ignonne, <b>J</b>e <b>S</b>uis <b>U</b>ne <b>N</b>ébuleuse » (Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune)."
    },
    {
      type: "3d",
      title: "Le Système solaire en 3D",
      scene: "solar",
      options: { labels: true },
      caption: "Fais glisser pour faire tourner le modèle. Observe : les planètes les plus proches du Soleil tournent plus vite !"
    },
    {
      type: "text",
      title: "Planètes rocheuses et planètes gazeuses",
      html: `<p>Les 8 planètes se divisent en deux groupes :</p>
<ul>
<li><b>Planètes intérieures ou rocheuses</b> : Mercure, Vénus, la Terre et Mars. Elles sont petites, proches du Soleil et ont une surface solide, faite de roches et de métaux.</li>
<li><b>Planètes extérieures ou géantes gazeuses</b> : Jupiter, Saturne, Uranus et Neptune. Elles sont énormes, loin du Soleil et formées surtout de gaz (hydrogène, hélium) et de glaces. Elles n'ont pas de surface sur laquelle marcher !</li>
</ul>
<p>Entre Mars et Jupiter se trouve la <b>ceinture d'astéroïdes</b>, une « ceinture » de millions de rochers qui tournent autour du Soleil.</p>
<table>
<tr><th>Planète</th><th>Type</th><th>Diamètre (km)</th><th>Distance moyenne au Soleil (millions de km)</th><th>Année (tour du Soleil)</th><th>Lunes</th></tr>
<tr><td>Mercure</td><td>rocheuse</td><td>4 879</td><td>58</td><td>88 jours</td><td>0</td></tr>
<tr><td>Vénus</td><td>rocheuse</td><td>12 104</td><td>108</td><td>225 jours</td><td>0</td></tr>
<tr><td>Terre</td><td>rocheuse</td><td>12 742</td><td>150</td><td>365 jours</td><td>1</td></tr>
<tr><td>Mars</td><td>rocheuse</td><td>6 779</td><td>228</td><td>687 jours</td><td>2</td></tr>
<tr><td>Jupiter</td><td>gazeuse</td><td>139 820</td><td>778</td><td>environ 12 ans</td><td>plus de 90</td></tr>
<tr><td>Saturne</td><td>gazeuse</td><td>116 460</td><td>1 430</td><td>environ 29 ans</td><td>plus de 140</td></tr>
<tr><td>Uranus</td><td>gazeuse (glacée)</td><td>50 724</td><td>2 870</td><td>environ 84 ans</td><td>28</td></tr>
<tr><td>Neptune</td><td>gazeuse (glacée)</td><td>49 244</td><td>4 500</td><td>environ 165 ans</td><td>16</td></tr>
</table>
<p><small>Le nombre de lunes de Jupiter et de Saturne augmente souvent, parce que les astronomes en découvrent de nouvelles !</small></p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p><b>Vénus</b> est la planète la plus chaude, même si Mercure est plus proche du Soleil : son atmosphère épaisse de dioxyde de carbone retient la chaleur comme une serre. À sa surface, il fait environ <b>460 °C</b>, assez pour faire fondre le plomb !</p>
<p>Sur Vénus, en plus, un jour dure plus longtemps qu'une année : la planète tourne sur elle-même très, très lentement.</p>`
    },
    {
      type: "text",
      title: "Les mouvements de la Terre : rotation et révolution",
      html: `<p>La Terre fait deux mouvements principaux :</p>
<ul>
<li><b>La rotation</b> : la Terre tourne sur elle-même, autour d'un axe imaginaire qui passe par les pôles. Un tour complet dure environ <b>24 heures</b>. La rotation provoque l'alternance du <b>jour et de la nuit</b> : la partie tournée vers le Soleil est éclairée (jour), la partie opposée est dans l'obscurité (nuit).</li>
<li><b>La révolution</b> : la Terre tourne autour du Soleil en suivant un chemin en forme d'ellipse, appelé <b>orbite</b>. Un tour complet dure environ <b>365 jours et 6 heures</b> : c'est une <b>année</b>.</li>
</ul>
<p>L'axe de la Terre est <b>incliné</b> (d'environ 23 degrés). C'est pour cela que, pendant l'année, les rayons du Soleil arrivent plus droits sur une partie de la Terre et plus inclinés sur l'autre : c'est ainsi que naissent les <b>saisons</b>.</p>`
    },
    {
      type: "svg",
      title: "Le jour et la nuit : la rotation",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#0f172a"/>
<circle cx="40" cy="130" r="70" fill="#fbbf24"/>
<text x="20" y="135" font-size="16" fill="#7c2d12" font-weight="bold">Soleil</text>
<g stroke="#fde68a" stroke-width="3">
<line x1="120" y1="80" x2="330" y2="80"/><line x1="120" y1="130" x2="330" y2="130"/><line x1="120" y1="180" x2="330" y2="180"/>
</g>
<circle cx="400" cy="130" r="80" fill="#1e3a8a"/>
<path d="M400 50 A80 80 0 0 0 400 210 Z" fill="#60a5fa"/>
<path d="M360 90 q20 -10 30 10 q10 20 -10 30 q-20 10 -20 -20z" fill="#22c55e"/>
<path d="M420 140 q25 -5 25 20 q-10 20 -30 5z" fill="#166534"/>
<line x1="380" y1="35" x2="420" y2="225" stroke="#fff" stroke-width="2" stroke-dasharray="6 4"/>
<path d="M455 60 a70 20 0 0 1 20 25" fill="none" stroke="#f472b6" stroke-width="3"/>
<polygon points="475,85 468,72 482,74" fill="#f472b6"/>
<text x="340" y="250" font-size="16" fill="#fde68a">JOUR</text>
<text x="430" y="250" font-size="16" fill="#93c5fd">NUIT</text>
<text x="490" y="60" font-size="14" fill="#f9a8d4">rotation</text>
<text x="490" y="78" font-size="14" fill="#f9a8d4">(24 heures)</text>
<text x="500" y="140" font-size="14" fill="#fff">axe</text>
</svg>`,
      caption: "La moitié de la Terre tournée vers le Soleil est éclairée : là, il fait jour. En tournant, chaque endroit passe de la lumière à l'obscurité."
    },
    {
      type: "example",
      title: "Exemple pratique : le jour et la nuit avec une lampe de poche",
      html: `<p>Essaie à la maison, dans une pièce sombre :</p>
<ol>
<li>Allume une lampe de poche et pose-la sur une table : c'est le <b>Soleil</b>.</li>
<li>Prends une orange et plante un crayon de haut en bas : c'est la <b>Terre</b> avec son axe.</li>
<li>Colle un autocollant sur l'orange : c'est ta ville.</li>
<li>Fais tourner lentement le crayon : l'autocollant passe de la partie éclairée (jour) à la partie sombre (nuit).</li>
</ol>
<p>Maintenant, penche un peu le crayon et fais tourner l'orange autour de la lampe : tu verras que parfois la partie du haut reçoit plus de lumière, parfois moins. Voilà les saisons !</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : les planètes",
      questions: [
        { type: "mc", q: "Quelle est la planète la plus proche du Soleil ?", options: ["Vénus", "Mercure", "Mars", "Terre"], answer: 1, explain: "Mercure est la première planète, à environ 58 millions de km du Soleil." },
        { type: "mc", q: "Quelle est la plus grande planète du Système solaire ?", options: ["Saturne", "Terre", "Jupiter", "Neptune"], answer: 2, explain: "Jupiter est la géante : son diamètre est environ 11 fois celui de la Terre." },
        { type: "tf", q: "Mars est une planète gazeuse.", answer: false, explain: "Mars est une planète rocheuse, la quatrième à partir du Soleil : elle a une surface solide rougeâtre." },
        { type: "order", q: "Range de la plus proche à la plus éloignée du Soleil", items: ["Vénus", "Terre", "Jupiter", "Uranus"], explain: "L'ordre est Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune." }
      ]
    },
    {
      type: "text",
      title: "La Lune et les autres corps célestes",
      html: `<p>La <b>Lune</b> est l'unique satellite naturel de la Terre. Elle se trouve à environ <b>384 000 km</b> de nous et tourne autour de la Terre en environ <b>27 jours</b>. La Lune n'a pas de lumière propre : elle <b>réfléchit la lumière du Soleil</b>. C'est pour cela que nous la voyons changer de forme : ce sont les <b>phases de la Lune</b> (nouvelle lune, premier quartier, pleine lune, dernier quartier).</p>
<p>Autres corps du Système solaire :</p>
<ul>
<li><b>Astéroïdes</b> : des roches de forme irrégulière, de quelques mètres à des centaines de km.</li>
<li><b>Comètes</b> : des « boules de neige sale » faites de glace et de poussière. Quand elles s'approchent du Soleil, la glace s'évapore et il se forme une longue <b>queue</b> lumineuse.</li>
<li><b>Météores</b> : de petits fragments qui entrent dans l'atmosphère et brûlent, en créant une traînée de lumière : nous les appelons « étoiles filantes ». Si un fragment arrive jusqu'au sol, on l'appelle une <b>météorite</b>.</li>
<li><b>Planètes naines</b> : comme <b>Pluton</b>, qui jusqu'en 2006 était considérée comme la neuvième planète.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Les étoiles filantes d'août",
      html: `<p>Vers le <b>10 août</b>, la nuit de la Saint-Laurent, on voit énormément d'« étoiles filantes ». Ce sont les <b>Perséides</b> : de minuscules grains laissés par la comète Swift-Tuttle. Chaque année, la Terre traverse cette « traînée de poussière » et les grains brûlent dans l'atmosphère à plus de 200 000 km/h !</p>
<p>Et sur la Lune ? Les empreintes des astronautes d'Apollo 11 (1969) y sont encore : sur la Lune, il n'y a pas de vent qui pourrait les effacer.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : le Soleil est-il loin ?",
      html: `<p>La lumière voyage à environ <b>300 000 km par seconde</b>. Pour aller du Soleil à la Terre (150 millions de km), elle met environ <b>8 minutes</b>.</p>
<p>Cela veut dire que quand tu regardes le coucher de soleil, tu vois le Soleil tel qu'il était 8 minutes plus tôt !</p>
<p>Et si on y allait en voiture ? À 100 km/h, sans jamais s'arrêter, il faudrait environ <b>171 ans</b> pour arriver au Soleil. Depuis la Lune, en revanche, la lumière met à peine plus d'1 seconde.</p>`
    },
    {
      type: "widget",
      title: "Associe chaque planète à sa caractéristique",
      widget: "match",
      options: {
        pairs: [
          ["Mercure", "La plus proche du Soleil"],
          ["Vénus", "La plus chaude"],
          ["Terre", "La seule avec de l'eau liquide en surface et une vie connue"],
          ["Mars", "La planète rouge"],
          ["Jupiter", "La plus grande"],
          ["Saturne", "Célèbre pour ses anneaux"],
          ["Uranus", "Elle tourne « couchée » sur le côté"],
          ["Neptune", "La plus lointaine, avec des vents très forts"]
        ]
      },
      caption: "Clique sur une planète puis sur sa caractéristique."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre le Système solaire",
      intro: "Les nombres de l'espace sont si grands qu'il est difficile de les imaginer. Essaie l'un de ces chemins : choisis celui qui te fait dire « ah, je vois ! ».",
      tabs: [
        {
          label: "⚽ Maquette à l'échelle : le terrain de football",
          html: "<p>Rapetissons tout, toujours dans la même proportion. Si le <b>Soleil</b> était un <b>ballon de football</b> (22 cm) posé au centre du terrain :</p><table><tr><th>Corps céleste</th><th>Grand comme…</th><th>Distance du ballon</th></tr><tr><td>Mercure</td><td>un grain de sable (0,8 mm)</td><td>9 mètres</td></tr><tr><td>Terre</td><td>un grain de poivre (2 mm)</td><td>24 mètres</td></tr><tr><td>Lune</td><td>une miette (0,5 mm)</td><td>6 cm de la Terre</td></tr><tr><td>Mars</td><td>une pointe de crayon (1 mm)</td><td>36 mètres</td></tr><tr><td>Jupiter</td><td>une noisette (2,2 cm)</td><td>123 mètres : hors du terrain !</td></tr><tr><td>Saturne</td><td>une cacahuète (1,8 cm)</td><td>227 mètres</td></tr><tr><td>Neptune</td><td>un grain de maïs (8 mm)</td><td>plus de 700 mètres</td></tr></table><p>Et l'étoile la plus proche, Proxima du Centaure ? Dans ce modèle, elle serait à environ <b>6000 km</b> : à peu près la distance entre Rome et New York ! L'espace est surtout… <b>vide</b>.</p>",
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="220" fill="#4ade80"/><rect x="10" y="10" width="580" height="200" fill="none" stroke="#fff" stroke-width="3"/><line x1="300" y1="10" x2="300" y2="210" stroke="#fff" stroke-width="3"/><circle cx="300" cy="110" r="40" fill="none" stroke="#fff" stroke-width="3"/><circle cx="60" cy="110" r="22" fill="#fbbf24" stroke="#b45309" stroke-width="2"/><text x="60" y="160" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">Soleil = ballon</text><circle cx="230" cy="110" r="3" fill="#1d4ed8"/><text x="230" y="95" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">Terre</text><line x1="82" y1="125" x2="228" y2="125" stroke="#14532d" stroke-width="2" stroke-dasharray="6 4"/><text x="155" y="145" font-size="15" text-anchor="middle" fill="#14532d">24 mètres</text><text x="560" y="60" font-size="16" text-anchor="end" fill="#14532d" font-weight="bold">Jupiter : 123 m →</text><text x="560" y="190" font-size="16" text-anchor="end" fill="#14532d" font-weight="bold">Neptune : plus de 700 m →</text></svg>`
        },
        {
          label: "🔦 Lampe et orange : le jour et la nuit",
          html: "<p>Dans le noir, allume une lampe de poche (le Soleil) et pointe-la sur une orange (la Terre) traversée par un crayon (l'axe). Fais tourner lentement le crayon : la partie éclairée, c'est le <b>jour</b> ; celle dans l'ombre, c'est la <b>nuit</b>. Chaque point de l'orange passe du jour à la nuit : c'est la <b>rotation</b>, qui dure environ 24 heures.</p><p>Sur le globe 3D ci-dessous, tu trouves trois villes éloignées : quand il est midi en Italie, c'est le soir au Japon et le petit matin au Brésil. En faisant tourner le globe, tu comprends pourquoi.</p>",
          scene: "globe",
          options: { points: [ { lat: 41.9, lon: 12.5, label: "Rome", color: "#ef4444" }, { lat: 35.7, lon: 139.7, label: "Tokyo", color: "#f59e0b" }, { lat: -23.5, lon: -46.6, label: "São Paulo", color: "#22c55e" }, { lat: 40.7, lon: -74.0, label: "New York", color: "#8b5cf6" } ] }
        },
        {
          label: "💃 Avec le corps : la danse des planètes",
          html: "<p>Dans la cour : un camarade joue le <b>Soleil</b> et reste immobile au centre. Toi, tu es la <b>Terre</b> : tourne sur toi-même (<b>rotation</b>) et en même temps marche en cercle autour du Soleil (<b>révolution</b>). Un autre camarade, la <b>Lune</b>, tourne autour de toi.</p><ul><li>Celui qui joue Mercure marche sur un petit cercle, vite.</li><li>Celui qui joue Neptune marche très loin et très lentement : pour faire un tour complet, il lui faudrait 165 de nos années !</li></ul><p>Comme ça, on sent avec le corps que les planètes proches du Soleil tournent plus vite.</p>"
        },
        {
          label: "🪐 Regarde toi-même en 3D",
          html: "<p>Fais tourner le Système solaire, ralentis (🐢) ou accélère (🐇) le temps. Observe : Mercure fait beaucoup de tours pendant que Jupiter n'en fait qu'un petit morceau. Essaie de le regarder d'en haut puis de côté : les orbites sont presque dans le même plan, comme des pistes sur une grande table.</p>",
          scene: "solar",
          options: { labels: true }
        }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Le Soleil est une <b>étoile</b> ; les planètes n'ont pas de lumière propre.</li>
<li>Les 8 planètes : Mercure, Vénus, Terre, Mars (rocheuses) – Jupiter, Saturne, Uranus, Neptune (gazeuses).</li>
<li><b>Rotation</b> (24 heures) → jour et nuit. <b>Révolution</b> (365 jours) → année ; avec l'axe incliné → saisons.</li>
<li>La Lune est le satellite de la Terre et réfléchit la lumière du Soleil.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : les mouvements de la Terre",
      questions: [
        { type: "mc", q: "Qu'est-ce qui provoque l'alternance du jour et de la nuit ?", options: ["La révolution", "La rotation", "La Lune", "Les nuages"], answer: 1, explain: "La rotation de la Terre sur elle-même, en environ 24 heures, amène chaque endroit d'abord à la lumière puis à l'obscurité." },
        { type: "num", q: "Combien de jours dure environ un tour de la Terre autour du Soleil ?", answer: 365, tol: 1, unit: "jours", explain: "La révolution dure environ 365 jours et 6 heures : tous les 4 ans, les 6 heures deviennent un jour de plus (année bissextile)." },
        { type: "tf", q: "Les saisons dépendent de l'inclinaison de l'axe de la Terre.", answer: true, explain: "Grâce à l'axe incliné, les rayons du Soleil arrivent plus ou moins droits au cours de l'année." }
      ]
    },
    {
      type: "3d",
      title: "À l'intérieur du Soleil en 3D",
      scene: "layers",
      options: { layers: [ { r: 1, color: "#fde047", label: "Photosphère (surface, environ 5500 °C)" }, { r: 0.7, color: "#fb923c", label: "Zone convective" }, { r: 0.45, color: "#f97316", label: "Zone radiative" }, { r: 0.25, color: "#dc2626", label: "Cœur (environ 15 millions de °C)" } ] },
      caption: "Dans le cœur, l'hydrogène se transforme en hélium (fusion nucléaire) et libère de l'énergie. Cette énergie met des milliers d'années pour arriver à la surface, puis seulement 8 minutes pour atteindre la Terre sous forme de lumière."
    },
    {
      type: "conceptMap",
      title: "Comment avons-nous compris que la Terre tourne autour du Soleil",
      nodes: [
        { id: "cielo", label: "Observer le ciel", x: 50, y: 6, color: "#64748b", html: "Depuis des milliers d'années, les êtres humains observent le Soleil, la Lune, les étoiles et les « vagabonds » du ciel : les planètes.", why: "Les Babyloniens et les Égyptiens notaient les mouvements des astres pour faire des calendriers et savoir quand semer ou quand arrivait la crue du Nil. Les observations répétées sont la base de toute découverte." },
        { id: "geo", label: "Géocentrisme", x: 20, y: 24, color: "#ef4444", html: "L'idée que la Terre est immobile au centre de l'univers et que tout tourne autour d'elle. Aristote (IVe s. av. J.-C.), puis Ptolémée (IIe s. apr. J.-C.), l'ont rendue célèbre.", why: "Ça semble évident : chaque jour, nous voyons le Soleil se lever et se coucher et nous ne sentons pas la Terre bouger. Ptolémée a construit un modèle avec des cercles dans des cercles (les épicycles) qui prévoyait assez bien la position des planètes. C'est pour cela qu'on y a cru pendant environ 1400 ans." },
        { id: "aristarco", label: "Aristarque", x: 80, y: 24, color: "#a855f7", html: "Aristarque de Samos (IIIe s. av. J.-C.) avait déjà proposé que la Terre tourne autour du Soleil.", why: "En mesurant avec la géométrie les distances de la Lune et du Soleil, il comprit que le Soleil est beaucoup plus grand que la Terre, et il trouva étrange que le plus grand tourne autour du plus petit. Mais il n'avait pas assez de preuves et son idée fut oubliée." },
        { id: "copernico", label: "Copernic (1543)", x: 50, y: 42, color: "#f59e0b", html: "Nicolas Copernic a publié un modèle héliocentrique : le Soleil au centre, la Terre est une planète comme les autres.", why: "Le modèle de Ptolémée était devenu très compliqué. Copernic remarqua qu'en mettant le Soleil au centre, beaucoup de mouvements bizarres des planètes (comme Mars qui semble revenir en arrière) s'expliquent plus simplement : c'est la Terre qui la dépasse." },
        { id: "galileo", label: "Galilée (1610)", x: 20, y: 62, color: "#3b82f6", html: "Galilée a pointé sa lunette vers le ciel : il a vu les satellites de Jupiter, les phases de Vénus, les montagnes de la Lune.", why: "Les lunes de Jupiter prouvaient que tout ne tourne pas autour de la Terre. Les phases de Vénus (comme celles de la Lune) ne s'expliquent que si Vénus tourne autour du Soleil. C'étaient des preuves observées, pas seulement des idées." },
        { id: "keplero", label: "Kepler (1609)", x: 80, y: 62, color: "#14b8a6", html: "Johannes Kepler a découvert que les orbites des planètes ne sont pas des cercles mais des ellipses, et que les planètes les plus proches du Soleil sont plus rapides.", why: "Il a utilisé les mesures très précises de son maître Tycho Brahe. Avec des cercles, les calculs sur Mars ne collaient pas, à 8 minutes d'arc près : au lieu d'ignorer l'erreur, Kepler changea la forme de l'orbite et tout colla." },
        { id: "newton", label: "Newton (1687)", x: 50, y: 80, color: "#22c55e", html: "Isaac Newton a expliqué pourquoi les planètes tournent : la force de gravité.", why: "La même force qui fait tomber une pomme retient la Lune autour de la Terre et les planètes autour du Soleil. Avec sa loi, on peut retrouver les lois de Kepler : pour la première fois, le ciel et la Terre suivent les mêmes règles." },
        { id: "oggi", label: "Le Système solaire aujourd'hui", x: 50, y: 96, color: "#0ea5e9", html: "Aujourd'hui, nous savons qu'il y a 8 planètes, des planètes naines comme Pluton, des astéroïdes et des comètes ; des sondes comme Voyager ont visité les planètes géantes.", why: "Grâce à la gravité de Newton, en 1846, on a prévu par le calcul où se trouvait Neptune avant même de la voir. En 2006, les astronomes ont décidé d'une définition précise de la planète : Pluton est devenue une « planète naine »." }
      ],
      edges: [ ["cielo", "geo", "première idée"], ["cielo", "aristarco", "autre idée"], ["geo", "copernico", "remis en question par"], ["aristarco", "copernico", "reprise par"], ["copernico", "galileo", "preuves avec la lunette"], ["copernico", "keplero", "calculs plus précis"], ["galileo", "newton", "lois du mouvement"], ["keplero", "newton", "orbites elliptiques"], ["newton", "oggi", "permet de prévoir"] ]
    }
  ],
  glossary: [
    { t: "Étoile", d: "Corps céleste qui produit sa propre lumière et sa propre chaleur, comme le Soleil." },
    { t: "Planète", d: "Corps céleste qui tourne autour d'une étoile et n'a pas de lumière propre." },
    { t: "Satellite", d: "Corps céleste qui tourne autour d'une planète, comme la Lune." },
    { t: "Orbite", d: "Le chemin qu'un corps céleste suit en tournant autour d'un autre." },
    { t: "Rotation", d: "Mouvement de la Terre sur elle-même : il dure environ 24 heures." },
    { t: "Révolution", d: "Mouvement de la Terre autour du Soleil : il dure environ 365 jours." },
    { t: "Gravité", d: "Force qui attire les corps les uns vers les autres." },
    { t: "Comète", d: "Corps de glace et de poussière qui, près du Soleil, forme une queue lumineuse." },
    { t: "Astéroïde", d: "Roche de forme irrégulière qui tourne autour du Soleil." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Le Soleil est…", options: ["une planète", "une étoile", "un satellite", "une comète"], answer: 1, explain: "Le Soleil est une étoile : il produit sa propre lumière et sa propre chaleur." },
      { type: "num", q: "Combien y a-t-il de planètes dans le Système solaire ?", answer: 8, tol: 0, explain: "Il y en a 8 : de Mercure à Neptune. Pluton est une planète naine." },
      { type: "mc", q: "Laquelle de ces planètes est rocheuse ?", options: ["Jupiter", "Saturne", "Mars", "Neptune"], answer: 2, explain: "Les planètes rocheuses sont Mercure, Vénus, la Terre et Mars." },
      { type: "text", q: "Comment s'appelle la planète célèbre pour ses grands anneaux ?", answer: ["saturne"], explain: "Saturne a des anneaux formés de milliards de morceaux de glace et de roche." },
      { type: "tf", q: "La Lune produit sa propre lumière.", answer: false, explain: "La Lune réfléchit la lumière du Soleil." },
      { type: "mc", q: "Où se trouve la ceinture d'astéroïdes ?", options: ["Entre la Terre et Mars", "Entre Mars et Jupiter", "Après Neptune", "Entre Vénus et la Terre"], answer: 1, explain: "La principale ceinture d'astéroïdes se trouve entre Mars et Jupiter." },
      { type: "mc", q: "Combien de temps dure environ la rotation de la Terre ?", options: ["1 heure", "24 heures", "7 jours", "365 jours"], answer: 1, explain: "La Terre tourne sur elle-même en environ 24 heures." },
      { type: "order", q: "Range de la plus proche à la plus éloignée du Soleil", items: ["Mercure", "Terre", "Mars", "Saturne", "Neptune"], explain: "Ordre : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune." },
      { type: "tf", q: "Vénus est plus chaude que Mercure, même si elle est plus loin du Soleil.", answer: true, explain: "L'épaisse atmosphère de Vénus retient la chaleur (effet de serre)." },
      { type: "mc", q: "Les « étoiles filantes » sont…", options: ["des étoiles qui tombent", "des fragments qui brûlent dans l'atmosphère", "des satellites artificiels", "des planètes naines"], answer: 1, explain: "Ce sont des météores : de petits fragments qui brûlent en entrant dans l'atmosphère." },
      { type: "num", q: "Combien de minutes met environ la lumière du Soleil pour arriver sur Terre ?", answer: 8, tol: 1, unit: "minutes", explain: "Environ 8 minutes (150 millions de km à 300 000 km/s)." },
      { type: "text", q: "Comment s'appelle le mouvement de la Terre autour du Soleil ?", answer: ["révolution", "la révolution", "revolution", "mouvement de révolution"], explain: "C'est la révolution : elle dure environ un an." }
    ]
  }
});
