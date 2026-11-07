TOPIC('fr', {
  id: "p3-geo-punti-cardinali",
  title: "Les points cardinaux",
  intro: `Pour ne pas nous perdre et pour expliquer où se trouve un lieu, nous utilisons quatre directions spéciales : le <b>Nord</b>, l'<b>Est</b>, le <b>Sud</b> et l'<b>Ouest</b>. Ce sont les <b>points cardinaux</b>. Apprenons à les trouver avec le <b>Soleil</b>, avec les <b>étoiles</b> et avec la <b>boussole</b>, et à les lire sur les cartes géographiques.`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Droite et gauche ne suffisent pas",
      html: `<p>Si tu dis à un ami « l'école est à droite », il doit savoir de quel côté tu es tourné. Si vous vous retournez, la droite change ! Droite, gauche, devant et derrière sont des <b>repères relatifs</b> : ils dépendent de la façon dont nous sommes tournés.</p>
<p>Les <b>points cardinaux</b>, eux, sont <b>toujours les mêmes</b>, pour tout le monde, dans toutes les régions du monde :</p>
<ul>
<li>le <b>Nord</b> (N), appelé aussi <b>Septentrion</b> ;</li>
<li>le <b>Sud</b> (S), appelé aussi <b>Midi</b> ;</li>
<li>l'<b>Est</b> (E), appelé aussi <b>Orient</b> ou <b>Levant</b> ;</li>
<li>l'<b>Ouest</b> (O), appelé aussi <b>Occident</b> ou <b>Ponant</b>.</li>
</ul>
<p>« Cardinal » vient du latin <i>cardo</i>, gond : ce sont les directions « pivots » autour desquelles tourne toute l'orientation.</p>`
    },
    {
      type: "text",
      title: "Étape 1 : le Soleil nous montre la route",
      html: `<p>La plus ancienne façon de s'orienter est de regarder le <b>Soleil</b> :</p>
<ul>
<li>🌅 le matin, le Soleil <b>se lève</b> à l'<b>Est</b> (c'est pourquoi l'Est s'appelle aussi Levant : là où le Soleil « se lève ») ;</li>
<li>☀️ à midi, en France, le Soleil est au <b>Sud</b> (c'est pourquoi le Sud s'appelle aussi le Midi) ;</li>
<li>🌇 le soir, le Soleil <b>se couche</b> à l'<b>Ouest</b> (le Ponant : là où le Soleil « se pose », c'est-à-dire descend) ;</li>
<li>🌙 le <b>Nord</b> est la direction où le Soleil, chez nous, ne passe jamais.</li>
</ul>
<p>En réalité, le Soleil se lève exactement à l'Est et se couche exactement à l'Ouest seulement deux jours par an, aux <b>équinoxes</b> (vers le 21 mars et le 23 septembre). L'été, il se lève un peu plus vers le Nord-Est, l'hiver plus vers le Sud-Est.</p>`
    },
    {
      type: "svg",
      title: "Le voyage du Soleil dans le ciel",
      svg: `<svg viewBox="0 0 600 310" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="310" fill="#e0f2fe"/>
<rect y="220" width="600" height="90" fill="#86efac"/>
<path d="M60 220 Q300 -20 540 220" stroke="#f59e0b" stroke-width="4" stroke-dasharray="10 8" fill="none"/>
<circle cx="70" cy="205" r="22" fill="#fb923c"/>
<circle cx="300" cy="62" r="26" fill="#facc15"/>
<circle cx="530" cy="205" r="22" fill="#f97316"/>
<text x="70" y="160" font-size="15" text-anchor="middle" fill="#9a3412" font-weight="bold">matin</text>
<text x="300" y="25" font-size="15" text-anchor="middle" fill="#854d0e" font-weight="bold">midi</text>
<text x="530" y="160" font-size="15" text-anchor="middle" fill="#9a3412" font-weight="bold">soir</text>
<text x="70" y="255" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">EST</text>
<text x="300" y="255" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">SUD</text>
<text x="530" y="255" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">OUEST</text>
<circle cx="300" cy="285" r="10" fill="#1e293b"/>
<text x="318" y="292" font-size="14" fill="#1e293b">toi, qui regardes vers le Sud</text>
<text x="300" y="150" font-size="14" text-anchor="middle" fill="#334155">derrière toi, il y a le NORD</text>
</svg>`,
      caption: "Si tu regardes le Soleil à midi (en France), tu as le Sud devant toi, l'Est à ta gauche, l'Ouest à ta droite et le Nord derrière."
    },
    {
      type: "remember",
      title: "L'astuce des bras",
      html: `<p>Le matin, place-toi avec le <b>bras droit</b> tendu vers le Soleil qui se lève. Alors :</p>
<ul>
<li>le bras <b>droit</b> indique l'<b>Est</b> ;</li>
<li>le bras <b>gauche</b> indique l'<b>Ouest</b> ;</li>
<li><b>devant</b> toi, il y a le <b>Nord</b> ;</li>
<li><b>derrière</b> toi, il y a le <b>Sud</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : le Soleil et les directions",
      questions: [
        { type: "mc", q: "Où le Soleil se lève-t-il ?", options: ["Au Nord", "À l'Est", "À l'Ouest"], answer: 1, explain: "Le Soleil se lève à l'Est, c'est pourquoi l'Est s'appelle aussi Levant." },
        { type: "mc", q: "Comment appelle-t-on aussi l'Ouest ?", options: ["Ponant ou Occident", "Midi", "Septentrion"], answer: 0, explain: "Ponant, parce que là, le Soleil « se pose », se couche." },
        { type: "tf", q: "Droite et gauche sont les mêmes pour tout le monde, comme les points cardinaux.", answer: false, explain: "Droite et gauche dépendent de la façon dont tu es tourné ; les points cardinaux, non." }
      ]
    },
    {
      type: "text",
      title: "Étape 2 : la rose des vents",
      html: `<p>Entre les quatre points cardinaux, il y a les directions <b>intermédiaires</b> :</p>
<ul>
<li>le <b>Nord-Est</b> (NE), entre le Nord et l'Est ;</li>
<li>le <b>Sud-Est</b> (SE), entre le Sud et l'Est ;</li>
<li>le <b>Sud-Ouest</b> (SO), entre le Sud et l'Ouest ;</li>
<li>le <b>Nord-Ouest</b> (NO), entre le Nord et l'Ouest.</li>
</ul>
<p>Toutes ensemble forment la <b>rose des vents</b>. Elle s'appelle ainsi parce que les marins de la Méditerranée donnaient un nom au <b>vent</b> qui arrive de chaque direction : la <b>Tramontane</b> du Nord, le <b>Grec</b> du Nord-Est, le <b>Levant</b> de l'Est, le <b>Sirocco</b> du Sud-Est, l'<b>Autan</b> du Sud, le <b>Libeccio</b> du Sud-Ouest, le <b>Ponant</b> de l'Ouest et le <b>Mistral</b> du Nord-Ouest.</p>`
    },
    {
      type: "widget",
      title: "Complète la rose des vents",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<circle cx="300" cy="170" r="140" fill="#e0f2fe" stroke="#0369a1" stroke-width="3"/>
<polygon points="300,40 318,170 300,300 282,170" fill="#1e3a8a"/>
<polygon points="170,170 300,152 430,170 300,188" fill="#1e3a8a"/>
<polygon points="300,40 318,170 300,170" fill="#dc2626"/>
<polygon points="210,80 304,166 390,260 296,174" fill="#60a5fa" opacity="0.8"/>
<polygon points="390,80 304,174 210,260 296,166" fill="#60a5fa" opacity="0.8"/>
<circle cx="300" cy="170" r="10" fill="#facc15" stroke="#1e293b" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 300, y: 45, label: "Nord" },
          { x: 425, y: 170, label: "Est" },
          { x: 300, y: 295, label: "Sud" },
          { x: 175, y: 170, label: "Ouest" },
          { x: 385, y: 85, label: "Nord-Est" },
          { x: 385, y: 255, label: "Sud-Est" },
          { x: 215, y: 255, label: "Sud-Ouest" },
          { x: 215, y: 85, label: "Nord-Ouest" }
        ]
      },
      caption: "Touche chaque pointe et choisis le bon nom. La pointe rouge indique le Nord. Retiens l'ordre dans le sens des aiguilles d'une montre : N, E, S, O (« Nous Étudions Sans Oublier »)."
    },
    {
      type: "text",
      title: "Étape 3 : la boussole",
      html: `<p>La nuit, par temps nuageux ou dans un bois, on ne voit pas le Soleil. Alors on utilise la <b>boussole</b>.</p>
<p>Dans la boussole, il y a une <b>aiguille aimantée</b> (un petit aimant) libre de tourner. La Terre se comporte comme un gigantesque aimant : c'est pourquoi l'aiguille se tourne toujours avec sa pointe colorée vers le <b>Nord</b>.</p>
<p>Comment l'utiliser :</p>
<ol>
<li>tiens la boussole <b>à l'horizontale</b>, immobile, loin des objets en fer et du téléphone ;</li>
<li>attends que l'aiguille s'arrête ;</li>
<li>tourne la boussole jusqu'à ce que la lettre <b>N</b> du cadran soit sous la pointe colorée de l'aiguille ;</li>
<li>maintenant tu peux lire toutes les directions !</li>
</ol>
<p>Attention : l'aiguille indique le <b>Nord magnétique</b>, qui est un peu différent du <b>pôle Nord géographique</b> et se déplace lentement chaque année. En France, la différence est petite, de quelques degrés.</p>`
    },
    {
      type: "3d",
      title: "Le Nord et le Sud sur le globe",
      scene: "globe",
      options: {
        points: [
          { lat: 90, lon: 0, label: "Pôle Nord", color: "#dc2626" },
          { lat: -90, lon: 0, label: "Pôle Sud", color: "#2563eb" },
          { lat: 86, lon: 140, label: "Pôle Nord magnétique (environ, il se déplace)", color: "#f97316" },
          { lat: 41.9, lon: 12.5, label: "Rome", color: "#16a34a" },
          { lat: 0, lon: -78.5, label: "Quito (sur l'équateur)", color: "#a855f7" },
          { lat: -33.9, lon: 151.2, label: "Sydney", color: "#0ea5e9" }
        ],
        routes: [{ points: [3, 0], color: "#dc2626" }]
      },
      caption: "Fais tourner le globe. De n'importe quel endroit, aller vers le Nord veut dire aller vers le pôle Nord (la ligne rouge part de Rome). L'équateur divise la Terre en hémisphère Nord et hémisphère Sud."
    },
    {
      type: "text",
      title: "Étape 4 : les points cardinaux sur les cartes",
      html: `<p>Sur presque toutes les cartes géographiques, le <b>Nord est en haut</b>, le <b>Sud en bas</b>, l'<b>Est à droite</b> et l'<b>Ouest à gauche</b>. Souvent, dans un coin, il y a une petite rose des vents ou une flèche avec un « N ».</p>
<p>Ainsi, nous pouvons décrire où se trouvent les lieux. Par exemple, en Italie :</p>
<ul>
<li>les <b>Alpes</b> sont au <b>Nord</b> ;</li>
<li>la <b>Sicile</b> est au <b>Sud</b> ;</li>
<li>la <b>mer Adriatique</b> est à l'<b>Est</b> de la péninsule ;</li>
<li>la <b>mer Tyrrhénienne</b> est à l'<b>Ouest</b> ;</li>
<li>le <b>Piémont</b> est au <b>Nord-Ouest</b>, les <b>Pouilles</b> au <b>Sud-Est</b>.</li>
</ul>
<p>C'est pourquoi on dit « Italie du Nord » (septentrionale), « centrale » et « du Sud » (méridionale).</p>`
    },
    {
      type: "svg",
      title: "L'Italie et les points cardinaux",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#bae6fd"/>
<path d="M150 40 L330 30 L350 60 L330 90 L300 95 L320 140 L370 190 L420 215 L450 240 L430 250 L400 235 L395 260 L370 285 L355 270 L360 245 L330 215 L290 185 L260 150 L230 110 L200 95 L170 80 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<path d="M320 300 L380 295 L370 325 L330 330 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<path d="M190 190 L220 185 L225 250 L195 255 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<text x="240" y="62" font-size="15" fill="#14532d" font-weight="bold">Alpes</text>
<text x="350" y="322" font-size="13" fill="#14532d" font-weight="bold">Sicile</text>
<text x="160" y="275" font-size="13" fill="#14532d" font-weight="bold">Sardaigne</text>
<text x="400" y="140" font-size="15" fill="#0c4a6e" font-weight="bold">Mer Adriatique</text>
<text x="220" y="300" font-size="15" fill="#0c4a6e" font-weight="bold">Mer Tyrrhénienne</text>
<circle cx="170" cy="70" r="6" fill="#dc2626"/><text x="100" y="60" font-size="13" fill="#7f1d1d" font-weight="bold">Turin</text>
<g transform="translate(520,80)">
<circle r="45" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
<polygon points="0,-38 7,0 0,38 -7,0" fill="#1e3a8a"/>
<polygon points="-38,0 0,-7 38,0 0,7" fill="#1e3a8a"/>
<polygon points="0,-38 7,0 0,0" fill="#dc2626"/>
<text y="-50" font-size="16" text-anchor="middle" font-weight="bold" fill="#dc2626">N</text>
<text y="64" font-size="16" text-anchor="middle" font-weight="bold">S</text>
<text x="56" y="6" font-size="16" text-anchor="middle" font-weight="bold">E</text>
<text x="-56" y="6" font-size="16" text-anchor="middle" font-weight="bold">O</text>
</g>
</svg>`,
      caption: "Dessin simplifié (pas à l'échelle). Avec la rose des vents dans le coin, tu peux dire que Turin est au Nord-Ouest et la Sicile au Sud."
    },
    {
      type: "example",
      title: "Exemple pratique : s'orienter dans ta salle de classe",
      html: `<p>Essaie cette expérience à l'école :</p>
<ol>
<li>Un matin de soleil, regarde par quelle fenêtre entre la lumière : ce mur est tourné à peu près vers l'<b>Est</b>.</li>
<li>Écris une pancarte « EST » et accroche-la à ce mur.</li>
<li>Sur le mur opposé, accroche « OUEST ».</li>
<li>Place-toi dos à l'Ouest, en regardant l'Est : à ta <b>gauche</b> il y a le <b>Nord</b>, à ta <b>droite</b> le <b>Sud</b>.</li>
<li>Vérifie avec une boussole (ou avec l'appli boussole d'un téléphone, avec l'aide de la maîtresse) : avais-tu raison ?</li>
</ol>
<p>Maintenant tu peux dire : « Le tableau est au Nord, la porte à l'Ouest… ».</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : l'ombre d'un bâton",
      html: `<p>Une façon très ancienne de trouver le Nord avec le Soleil, appelée <b>gnomon</b> :</p>
<ol>
<li>plante un bâton bien droit dans un terrain plat et ensoleillé, en fin de matinée ;</li>
<li>marque avec un petit caillou la pointe de l'<b>ombre</b> ;</li>
<li>attends 15 à 20 minutes : l'ombre s'est déplacée. Marque la nouvelle pointe avec un autre caillou ;</li>
<li>relie les deux cailloux par une ligne : la première marque est vers l'<b>Ouest</b>, la seconde vers l'<b>Est</b> ;</li>
<li>la ligne perpendiculaire indique le Nord et le Sud. Vers midi, l'ombre du bâton est la plus courte et pointe (en France) droit vers le <b>Nord</b>.</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La boussole a été inventée en Chine !",
      html: `<p>Il y a plus de 2000 ans, en <b>Chine</b>, on utilisait une cuillère de <b>magnétite</b> (une pierre qui attire le fer) posée sur un plateau de bronze : le manche se tournait toujours vers le <b>Sud</b> ! On l'appelait <b>sinan</b>, « qui indique le sud ». Les savants chinois ont décrit l'aiguille magnétique pour la navigation vers l'an <b>1100</b> ; peu après, la boussole est arrivée aussi en Méditerranée. À <b>Amalfi</b>, il y a une statue de Flavio Gioia, qu'une légende désigne comme l'inventeur de la boussole : aujourd'hui on sait que les marins amalfitains l'ont améliorée, mais ne l'ont pas inventée.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Certains peuples ne disent jamais « droite » et « gauche » !",
      html: `<p>En Australie, le peuple aborigène qui parle la langue <b>guugu yimithirr</b> utilise seulement les points cardinaux. Ils ne disent pas « tu as une fourmi sur la jambe gauche », mais « tu as une fourmi sur la jambe Ouest » ! Même les petits enfants savent toujours où est le Nord, même dans une pièce sans fenêtres.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? « S'orienter » veut dire « regarder vers l'Orient » !",
      html: `<p>Au Moyen Âge, beaucoup de cartes géographiques européennes avaient l'<b>Est (Orient) en haut</b>, vers Jérusalem et le paradis terrestre imaginé en Asie. Se tourner vers l'Orient était la façon de trouver son chemin : d'où le mot <b>s'orienter</b> ! Beaucoup d'anciennes églises sont aussi construites avec l'autel tourné vers l'Est.</p>`
    },
    {
      type: "widget",
      title: "Jeu : associe le nom à la direction",
      widget: "match",
      options: {
        pairs: [
          ["Septentrion", "Nord"],
          ["Midi", "Sud"],
          ["Levant / Orient", "Est"],
          ["Ponant / Occident", "Ouest"],
          ["Tramontane", "Vent du Nord"],
          ["Sirocco", "Vent du Sud-Est"]
        ]
      }
    },
    {
      type: "alternatives",
      title: "D'autres façons de trouver le Nord",
      intro: "Tu n'as pas de boussole et le Soleil ne t'aide pas ? Voici d'autres méthodes, utilisées dans d'autres pays et à d'autres époques.",
      tabs: [
        {
          label: "⭐ L'étoile Polaire",
          html: `<p>La nuit, dans notre hémisphère, on cherche l'<b>étoile Polaire</b>. C'est la seule étoile qui semble <b>immobile</b> pendant que les autres tournent autour d'elle, parce qu'elle se trouve presque exactement au-dessus du pôle Nord.</p>
<p>Comment la trouver : cherche la <b>Grande Ourse</b> (sept étoiles en forme de casserole). Prends les deux étoiles du bord de la casserole, à l'opposé du manche, et prolonge leur distance environ <b>5 fois</b> : tu arrives à l'étoile Polaire. Sous elle, à l'horizon, il y a le <b>Nord</b>.</p>
<p>Dans l'hémisphère Sud (Australie, Amérique du Sud), la Polaire ne se voit pas : on utilise la constellation de la <b>Croix du Sud</b>.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#0f172a"/>
<g fill="#fde68a">
<circle cx="380" cy="200" r="6"/><circle cx="440" cy="210" r="6"/><circle cx="450" cy="160" r="6"/><circle cx="390" cy="150" r="6"/>
<circle cx="330" cy="140" r="5"/><circle cx="280" cy="150" r="5"/><circle cx="230" cy="180" r="5"/>
</g>
<path d="M380 200 L440 210 L450 160 L390 150 Z M390 150 L330 140 L280 150 L230 180" stroke="#94a3b8" stroke-width="2" fill="none"/>
<path d="M440 210 L450 160 L480 30" stroke="#f87171" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
<circle cx="482" cy="28" r="9" fill="#ffffff"/>
<text x="495" y="34" font-size="16" fill="#ffffff" font-weight="bold">Étoile Polaire</text>
<text x="330" y="250" font-size="16" fill="#e2e8f0" font-weight="bold">Grande Ourse</text>
<text x="40" y="40" font-size="14" fill="#cbd5e1">prolonge 5 fois →</text>
<rect y="265" width="600" height="15" fill="#14532d"/>
</svg>`
        },
        {
          label: "🇦🇺 La boussole dans le corps",
          html: `<p>Comme les locuteurs du guugu yimithirr en Australie, essaie pendant une journée de <b>ne pas dire droite et gauche</b>, mais seulement Nord, Sud, Est, Ouest : « passe-moi le crayon qui est à l'Est du cahier ».</p>
<p>Au début, c'est difficile, mais le cerveau apprend à garder toujours en tête où sont les points cardinaux, comme une boussole intérieure. Beaucoup d'animaux ont aussi une « boussole » : les <b>tortues marines</b>, les <b>pigeons voyageurs</b> et les <b>oiseaux migrateurs</b> sentent le champ magnétique de la Terre !</p>`
        },
        {
          label: "🧲 Construis une boussole",
          html: `<p>Il te faut : une <b>aiguille</b> à coudre, un <b>aimant</b>, un bouchon de liège (ou une feuille), un bol d'eau.</p>
<ol>
<li>Frotte l'aiguille sur l'aimant environ <b>30 fois</b>, toujours dans la <b>même direction</b> : l'aiguille devient un petit aimant.</li>
<li>Pose l'aiguille sur le bouchon et mets le bouchon à flotter dans l'eau.</li>
<li>Attends : l'aiguille tournera toute seule jusqu'à indiquer la ligne <b>Nord–Sud</b> !</li>
</ol>
<p>Pour savoir quelle pointe va vers le Nord, compare avec le Soleil : à midi, le Soleil est du côté opposé.</p>`
        },
        {
          label: "🌍 Le Nord sur le globe",
          html: `<p>Fais tourner le globe : le Nord est toujours la direction vers le <b>pôle Nord</b>, l'Est est la direction dans laquelle la Terre tourne (c'est pourquoi le Soleil semble se lever à l'Est). En Australie, dans l'hémisphère Sud, à midi, le Soleil est au <b>Nord</b>, pas au Sud !</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 90, lon: 0, label: "N - Pôle Nord", color: "#dc2626" },
              { lat: -90, lon: 0, label: "S - Pôle Sud", color: "#2563eb" },
              { lat: 45, lon: 7.7, label: "Turin", color: "#16a34a" },
              { lat: -33.9, lon: 151.2, label: "Sydney : à midi, le Soleil est au Nord", color: "#f97316" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : d'où viennent les points cardinaux ? Touche les nœuds",
      nodes: [
        { id: "rotazione", label: "🌍 La Terre tourne", x: 50, y: 6, color: "#0ea5e9", html: "La Terre tourne sur elle-même d'Ouest en Est en environ 24 heures.", why: "Que ce soit la Terre qui tourne, et non le ciel, ont soutenu Nicolas Copernic (1543) et Galilée. En 1851, Léon Foucault l'a démontré à Paris avec un énorme pendule qui change lentement de direction." },
        { id: "poli", label: "🧊 Les pôles", x: 20, y: 28, color: "#2563eb", html: "Les deux points par où passe l'axe de rotation : pôle Nord et pôle Sud.", why: "Ce sont les seuls points de la Terre qui ne tournent pas en cercle. Le Nord et le Sud sont définis justement ainsi : la direction vers l'un ou l'autre pôle." },
        { id: "sole", label: "☀️ Le Soleil se lève et se couche", x: 50, y: 30, color: "#f59e0b", html: "Il se lève à l'Est, se couche à l'Ouest.", why: "Le Soleil ne tourne pas autour de nous : c'est nous qui, en tournant avec la Terre vers l'Est, le voyons apparaître de ce côté. C'est pourquoi l'Est et l'Ouest s'appellent aussi Levant et Ponant." },
        { id: "nsoe", label: "🧭 N, E, S, O", x: 80, y: 28, color: "#dc2626", html: "Les quatre points cardinaux.", why: "Nord-Sud suit l'axe de la Terre, Est-Ouest suit le sens de la rotation : c'est pourquoi ils sont perpendiculaires et les mêmes pour tout le monde. Le nom \"cardinaux\" vient du latin cardo, gond." },
        { id: "rosa", label: "🌹 Rose des vents", x: 80, y: 58, color: "#ec4899", html: "8 (ou 16, ou 32) directions portant le nom des vents.", why: "Les marins de la Méditerranée donnaient un nom aux vents selon leur provenance : Grec de Grèce, Sirocco de Syrie, Libeccio de Libye, Mistral du \"vent maître\", c'est-à-dire le plus fort. C'étaient les repères pour naviguer." },
        { id: "magnete", label: "🧲 Le magnétisme terrestre", x: 20, y: 58, color: "#7c3aed", html: "La Terre se comporte comme un énorme aimant.", why: "Dans le noyau externe de la Terre, le fer fondu bouge et génère un champ magnétique. Le médecin anglais William Gilbert l'a pressenti le premier en 1600, dans le livre \"De Magnete\"." },
        { id: "bussola", label: "🧭 La boussole", x: 50, y: 70, color: "#16a34a", html: "Une aiguille aimantée qui s'aligne avec le champ magnétique.", why: "Inventée en Chine (d'abord pour la divination, puis pour la navigation vers 1100), elle est arrivée en Europe au XIIe siècle et a permis aux marins de naviguer même sans voir le Soleil ni les étoiles." },
        { id: "carte", label: "🗺️ Les cartes avec le Nord en haut", x: 50, y: 93, color: "#92400e", html: "Convention : Nord en haut, Est à droite.", why: "Il n'y a pas de \"haut\" dans l'espace : c'est un choix. Il s'est répandu avec les navigateurs qui utilisaient la boussole, qui pointe vers le Nord, et avec les cartes imprimées à la Renaissance (comme celles de Gerardus Mercator, 1569)." }
      ],
      edges: [
        ["rotazione", "poli", "autour de l'axe des"],
        ["rotazione", "sole", "fait lever et coucher le"],
        ["poli", "nsoe", "donnent Nord et Sud"],
        ["sole", "nsoe", "donne Est et Ouest"],
        ["nsoe", "rosa", "se divisent dans la"],
        ["magnete", "bussola", "fait tourner l'aiguille de la"],
        ["bussola", "nsoe", "indique le Nord"],
        ["bussola", "carte", "mène aux"]
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Les points cardinaux sont le <b>Nord</b>, l'<b>Est</b>, le <b>Sud</b>, l'<b>Ouest</b> (dans le sens des aiguilles d'une montre : « Nous Étudions Sans Oublier »).</li>
<li>Le Soleil <b>se lève à l'Est</b>, à midi en France il est au <b>Sud</b>, il <b>se couche à l'Ouest</b>.</li>
<li>La nuit, on trouve le Nord avec l'<b>étoile Polaire</b>.</li>
<li>La <b>boussole</b> a une aiguille aimantée qui indique le Nord.</li>
<li>Sur les cartes, le <b>Nord est en haut</b>, l'Est à droite, le Sud en bas, l'Ouest à gauche.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : boussole et cartes",
      questions: [
        { type: "mc", q: "Vers où pointe l'aiguille de la boussole ?", options: ["Vers le Nord", "Vers le Soleil", "Vers la maison"], answer: 0, explain: "L'aiguille aimantée s'aligne avec le champ magnétique terrestre et pointe vers le Nord." },
        { type: "mc", q: "Sur une carte géographique, l'Est est généralement…", options: ["en haut", "à droite", "à gauche"], answer: 1, explain: "Nord en haut, Est à droite, Sud en bas, Ouest à gauche." },
        { type: "order", q: "Mets les points cardinaux dans le sens des aiguilles d'une montre, en partant du Nord.", items: ["Nord", "Est", "Sud", "Ouest"], explain: "N → E → S → O : « Nous Étudions Sans Oublier »." }
      ]
    }
  ],
  glossary: [
    { t: "Points cardinaux", d: "Les quatre directions principales : Nord, Est, Sud, Ouest." },
    { t: "S'orienter", d: "Comprendre où l'on se trouve et dans quelle direction aller." },
    { t: "Septentrion", d: "Autre nom du Nord." },
    { t: "Midi", d: "Autre nom du Sud." },
    { t: "Levant / Orient", d: "Autres noms de l'Est, où le Soleil se lève." },
    { t: "Ponant / Occident", d: "Autres noms de l'Ouest, où le Soleil se couche." },
    { t: "Rose des vents", d: "Dessin avec les points cardinaux et les directions intermédiaires, chacune portant le nom d'un vent." },
    { t: "Boussole", d: "Instrument avec une aiguille aimantée qui indique le Nord." },
    { t: "Étoile Polaire", d: "Étoile située presque au-dessus du pôle Nord, qui indique la direction du Nord." },
    { t: "Équinoxe", d: "Jour où le jour et la nuit durent autant et où le Soleil se lève exactement à l'Est." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quels sont les quatre points cardinaux ?", options: ["Nord, Sud, Est, Ouest", "Droite, gauche, dessus, dessous", "Mer, montagne, lac, fleuve"], answer: 0, explain: "Nord, Sud, Est et Ouest." },
      { type: "mc", q: "Où le Soleil se couche-t-il ?", options: ["À l'Est", "À l'Ouest", "Au Nord"], answer: 1, explain: "À l'Ouest, appelé aussi Ponant." },
      { type: "tf", q: "En France, à midi, le Soleil se trouve au Sud.", answer: true, explain: "C'est pourquoi le Sud s'appelle aussi le Midi." },
      { type: "text", q: "Comment s'appelle l'instrument à aiguille aimantée qui indique le Nord ?", answer: ["boussole", "la boussole"], explain: "La boussole." },
      { type: "mc", q: "Comment appelle-t-on aussi le Nord ?", options: ["Midi", "Septentrion", "Levant"], answer: 1, explain: "Septentrion ; le Sud est le Midi." },
      { type: "mc", q: "Quelle étoile indique le Nord la nuit ?", options: ["L'étoile Polaire", "Le Soleil", "Sirius"], answer: 0, explain: "L'étoile Polaire, qu'on trouve à l'aide de la Grande Ourse." },
      { type: "mc", q: "Quelle direction se trouve entre le Sud et l'Ouest ?", options: ["Nord-Est", "Sud-Est", "Sud-Ouest"], answer: 2, explain: "Sud-Ouest (SO), d'où souffle le Libeccio." },
      { type: "tf", q: "Sur les cartes géographiques, le Nord est généralement en bas.", answer: false, explain: "Généralement, le Nord est en haut." },
      { type: "order", q: "Remets dans l'ordre le parcours du Soleil pendant la journée (en France).", items: ["Il se lève à l'Est", "À midi, il est au Sud", "Il se couche à l'Ouest"], explain: "Est → Sud → Ouest." },
      { type: "mc", q: "La Sicile, par rapport au Piémont, se trouve au…", options: ["Nord-Ouest", "Sud-Est", "Nord-Est"], answer: 1, explain: "Le Piémont est au Nord-Ouest de l'Italie, la Sicile au Sud : par rapport au Piémont, elle est au Sud-Est." },
      { type: "mc", q: "Où la boussole a-t-elle été inventée ?", options: ["En Chine", "En Amérique", "En Australie"], answer: 0, explain: "En Chine ; puis elle est arrivée en Méditerranée vers le XIIe siècle." },
      { type: "text", q: "Comment s'appelle le vent qui souffle du Nord ?", answer: ["tramontane", "la tramontane"], explain: "La Tramontane, vent froid qui arrive « d'au-delà des monts »." }
    ]
  }
});
