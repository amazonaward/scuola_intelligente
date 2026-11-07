TOPIC('fr', {
  id: "p2-sto-orologio",
  title: "L'horloge",
  intro: "À quelle heure commence l'école ? Combien de temps reste-t-il avant la récréation ? ⏰ Pour le savoir, nous utilisons l'<b>horloge</b>. Apprenons à lire les <b>heures</b> et les <b>minutes</b> et découvrons comment les humains ont appris à mesurer le temps.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Comment est faite l'horloge",
      html: `<p>L'horloge à aiguilles a :</p>
<ul>
<li>🔢 les <b>nombres de 1 à 12</b> en cercle ;</li>
<li>⬛ la <b>petite aiguille</b> : elle indique les <b>heures</b>. Elle est lente : elle fait un tour en 12 heures ;</li>
<li>➖ la <b>grande aiguille</b> : elle indique les <b>minutes</b>. Elle fait un tour complet en <b>1 heure</b> (60 minutes) ;</li>
<li>🔴 parfois il y a aussi la <b>fine aiguille des secondes</b>, qui fait un tour en 1 minute.</li>
</ul>
<p>Les aiguilles tournent toujours dans le même sens : le <b>sens des aiguilles d'une montre</b> ↻.</p>`
    },
    {
      type: "svg",
      title: "Il est 3 heures pile",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<circle cx="170" cy="150" r="125" fill="#ffffff" stroke="#c2410c" stroke-width="8"/>
<g font-size="24" font-weight="bold" fill="#1e293b" text-anchor="middle">
<text x="170" y="52">12</text><text x="222" y="66">1</text><text x="258" y="102">2</text><text x="272" y="158">3</text><text x="258" y="212">4</text><text x="222" y="248">5</text>
<text x="170" y="262">6</text><text x="118" y="248">7</text><text x="82" y="212">8</text><text x="68" y="158">9</text><text x="82" y="102">10</text><text x="118" y="66">11</text>
</g>
<line x1="170" y1="150" x2="170" y2="60" stroke="#2563eb" stroke-width="7" stroke-linecap="round"/>
<line x1="170" y1="150" x2="235" y2="150" stroke="#dc2626" stroke-width="11" stroke-linecap="round"/>
<circle cx="170" cy="150" r="9" fill="#1e293b"/>
<text x="330" y="80" font-size="22" fill="#dc2626" font-weight="bold">petite aiguille → 3</text>
<text x="330" y="110" font-size="18" fill="#7f1d1d">(les heures)</text>
<text x="330" y="160" font-size="22" fill="#2563eb" font-weight="bold">grande aiguille → 12</text>
<text x="330" y="190" font-size="18" fill="#1e3a8a">(les minutes : « pile »)</text>
<text x="330" y="250" font-size="26" fill="#0f172a" font-weight="bold">Il est 3:00</text>
</svg>`,
      caption: "Quand la grande aiguille est sur le 12, c'est l'heure « pile ». La petite aiguille dit de quelle heure il s'agit."
    },
    {
      type: "text",
      title: "Les minutes : on compte de 5 en 5",
      html: `<p>Entre un nombre et le suivant, il y a <b>5 minutes</b> (5 petits traits).</p>
<ul>
<li>Grande aiguille sur le <b>1</b> → 5 minutes ; sur le <b>2</b> → 10 ; sur le <b>3</b> → 15… sur le <b>6</b> → 30… jusqu'au <b>12</b> → 60, c'est-à-dire une heure entière !</li>
</ul>
<p>Pour lire les minutes, il suffit de compter par sauts de 5 : c'est la <b>table de 5</b> ! 🖐️</p>`
    },
    {
      type: "widget",
      title: "Saute de 5 en 5 minutes",
      widget: "numberLine",
      options: { min: 0, max: 60, step: 5, marks: [15, 30, 45, 60] },
      caption: "Chaque saut est un nombre de l'horloge. 3 sauts = 15 minutes (un quart d'heure), 6 sauts = 30 minutes (une demi-heure), 12 sauts = 60 minutes (une heure)."
    },
    {
      type: "remember",
      title: "Les mots de l'horloge",
      html: `<table>
<tr><th>Grande aiguille sur le…</th><th>On dit</th><th>Exemple</th></tr>
<tr><td><b>12</b></td><td>« pile »</td><td>8 heures pile (8:00)</td></tr>
<tr><td><b>3</b></td><td>« et quart » (15 min)</td><td>8 heures et quart (8:15)</td></tr>
<tr><td><b>6</b></td><td>« et demie » (30 min)</td><td>8 heures et demie (8:30)</td></tr>
<tr><td><b>9</b></td><td>« moins le quart » (45 min)</td><td>9 heures moins le quart (8:45)</td></tr>
</table>
<p>1 heure = <b>60 minutes</b>. 1 minute = <b>60 secondes</b>. 1 jour = <b>24 heures</b>.</p>`
    },
    {
      type: "svg",
      title: "Un quart, une demie, trois quarts",
      svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f8fafc"/>
<circle cx="100" cy="110" r="75" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<path d="M100 110 L100 35 A75 75 0 0 1 175 110 Z" fill="#fde047"/>
<circle cx="300" cy="110" r="75" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<path d="M300 110 L300 35 A75 75 0 0 1 300 185 Z" fill="#86efac"/>
<circle cx="500" cy="110" r="75" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<path d="M500 110 L500 35 A75 75 0 1 1 425 110 Z" fill="#93c5fd"/>
<line x1="100" y1="110" x2="160" y2="110" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>
<line x1="300" y1="110" x2="300" y2="172" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>
<line x1="500" y1="110" x2="440" y2="110" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>
<g fill="#1e293b"><circle cx="100" cy="110" r="6"/><circle cx="300" cy="110" r="6"/><circle cx="500" cy="110" r="6"/></g>
<text x="100" y="215" font-size="18" text-anchor="middle" font-weight="bold" fill="#854d0e">et quart = 15 min</text>
<text x="300" y="215" font-size="18" text-anchor="middle" font-weight="bold" fill="#166534">et demie = 30 min</text>
<text x="500" y="215" font-size="18" text-anchor="middle" font-weight="bold" fill="#1e40af">moins le quart = 45 min</text>
</svg>`,
      caption: "Comme une pizza 🍕 : un quart de tour de la grande aiguille, ce sont 15 minutes ; un demi-tour, 30 ; trois quarts de tour, 45."
    },
    {
      type: "quiz",
      title: "Mini-quiz : lire l'horloge",
      questions: [
        { type: "mc", q: "Quelle aiguille indique les heures ?", options: ["La petite aiguille", "La grande aiguille", "Aucune"], answer: 0, explain: "La petite aiguille indique les heures, la grande les minutes." },
        { type: "num", q: "La grande aiguille est sur le 4. Combien de minutes cela fait-il ?", answer: 20, unit: "min", explain: "4 sauts de 5 : 5, 10, 15, 20." },
        { type: "mc", q: "La petite aiguille est sur le 7, la grande sur le 6. Quelle heure est-il ?", options: ["6 heures 7", "7 heures et demie", "7 heures pile"], answer: 1, explain: "Grande aiguille sur le 6 = 30 minutes, c'est-à-dire « et demie » : il est 7 heures et demie (7:30)." }
      ]
    },
    {
      type: "text",
      title: "L'horloge numérique et les 24 heures",
      html: `<p>L'horloge <b>numérique</b> 📱 écrit l'heure avec des chiffres : d'abord les <b>heures</b>, puis deux points, puis les <b>minutes</b>. <b>08:30</b> = 8 heures et demie.</p>
<p>Le jour a <b>24 heures</b>, mais l'horloge à aiguilles n'en montre que 12 : la petite aiguille fait <b>2 tours</b> par jour !</p>
<ul>
<li>🌅 Les heures du matin : de 0 à 12.</li>
<li>🌇 Les heures de l'après-midi et du soir : de 13 à 24. Pour les trouver, ajoute 12 : <b>3 heures de l'après-midi</b> = 3 + 12 = <b>15:00</b>.</li>
</ul>
<p><b>12:00</b>, c'est <b>midi</b> ; <b>24:00</b> (ou 00:00), c'est <b>minuit</b>.</p>`
    },
    {
      type: "example",
      title: "Exemple : ma journée ⏰",
      html: `<table>
<tr><td>🛏️ Je me réveille</td><td>7:00</td><td>7 heures pile</td></tr>
<tr><td>🏫 J'entre à l'école</td><td>8:15</td><td>8 heures et quart</td></tr>
<tr><td>🍎 Récréation</td><td>10:30</td><td>10 heures et demie</td></tr>
<tr><td>🍝 Déjeuner</td><td>12:45</td><td>une heure moins le quart</td></tr>
<tr><td>⚽ Entraînement</td><td>17:00</td><td>5 heures de l'après-midi</td></tr>
<tr><td>🌙 Au lit</td><td>21:00</td><td>9 heures du soir</td></tr>
</table>
<p>De 7:00 à 8:15, il se passe <b>1 heure et 15 minutes</b> : le temps de s'habiller, de prendre le petit-déjeuner et d'aller à l'école.</p>`
    },
    {
      type: "example",
      title: "Exemple : combien de temps dure le dessin animé ? 📺",
      html: `<p>Le dessin animé commence à <b>16:00</b> et finit à <b>16:30</b>.</p>
<p>La grande aiguille va du 12 au 6 : <b>un demi-tour</b> = <b>30 minutes</b>. Le dessin animé dure une demi-heure !</p>`
    },
    {
      type: "widget",
      title: "Associe l'heure écrite de deux façons",
      widget: "match",
      options: {
        pairs: [
          ["9 heures pile", "9:00"],
          ["4 heures et quart", "4:15"],
          ["6 heures et demie", "6:30"],
          ["11 heures moins le quart", "10:45"],
          ["2 heures de l'après-midi", "14:00"],
          ["minuit", "00:00"]
        ]
      },
      caption: "Attention au « moins le quart » : 11 heures moins le quart, c'est encore 10 heures 45 !"
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Pourquoi 60 minutes et 24 heures ?",
      html: `<p>L'idée de diviser le jour en <b>24 heures</b> vient des <b>anciens Égyptiens</b> : 12 heures pour le jour et 12 pour la nuit.</p>
<p>Le <b>60</b>, lui, vient des <b>Babyloniens</b>, qui, il y a plus de 4 000 ans, comptaient par groupes de 60. Le 60 peut se diviser de plein de façons (par 2, 3, 4, 5, 6, 10, 12…) : très pratique pour faire des demi-heures, des tiers et des quarts d'heure !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? L'horloge la plus précise",
      html: `<p>Les <b>horloges atomiques</b> mesurent le temps en comptant les « vibrations » des atomes. Les plus modernes sont si précises qu'elles se tromperaient de <b>moins d'1 seconde</b> en des milliards d'années !</p>
<p>Ton téléphone et le GPS de la voiture utilisent des signaux qui viennent d'horloges atomiques placées sur des satellites. 🛰️</p>`
    },
    {
      type: "3d",
      title: "Voyage dans le temps : l'histoire de l'horloge",
      scene: "spacetime",
      caption: "La carte est la base, la hauteur est le temps : plus un événement est haut, plus il est récent. Touche un événement et suis les flèches des causes vers les effets.",
      options: {
        lat: [20, 56],
        lon: [-10, 120],
        years: [-2100, 2000],
        places: [
          { lat: 32.54, lon: 44.42, label: "Babylone" },
          { lat: 25.7, lon: 32.64, label: "Thèbes (Égypte)" },
          { lat: 31.2, lon: 29.92, label: "Alexandrie" },
          { lat: 41.9, lon: 12.5, label: "Rome" },
          { lat: 51.5, lon: -0.12, label: "Londres" },
          { lat: 34.8, lon: 114.3, label: "Kaifeng (Chine)" }
        ],
        events: [
          { id: "babilonia", lat: 32.54, lon: 44.42, year: -2000, label: "Les Babyloniens comptent par 60", html: "En Mésopotamie, les scribes comptent par groupes de <b>60</b> et divisent le cercle en 360 degrés. C'est de là que viendront les <b>60 minutes</b> de l'heure et les <b>60 secondes</b> de la minute." },
          { id: "meridiana", lat: 25.74, lon: 32.6, year: -1500, label: "Les cadrans solaires en Égypte", html: "Les Égyptiens utilisent un bâton et son <b>ombre</b> pour connaître l'heure : c'est l'ancêtre du <b>cadran solaire</b>. Ils divisent le jour en <b>12 heures</b> de lumière et la nuit en 12 heures d'obscurité." },
          { id: "clessidra", lat: 25.72, lon: 32.66, year: -1400, label: "La clepsydre", html: "Dans le temple de Karnak, on utilise un petit bassin de pierre percé d'un minuscule trou : l'eau s'écoule tout doucement et son niveau indique les heures même la <b>nuit</b>, quand le cadran solaire ne marche pas.", causes: ["meridiana"] },
          { id: "ctesibio", lat: 31.2, lon: 29.92, year: -250, label: "Ctésibios perfectionne la clepsydre", html: "À Alexandrie, l'inventeur grec <b>Ctésibios</b> construit des clepsydres très précises, avec des flotteurs et des aiguilles qui bougent toutes seules.", causes: ["clessidra", "babilonia"] },
          { id: "roma", lat: 41.9, lon: 12.5, year: -263, label: "Le premier cadran solaire de Rome", html: "Selon les historiens anciens, le premier cadran solaire arrive à Rome depuis la Sicile comme butin de guerre. Mais il avait été fait pour Catane : à Rome, il indiquait la mauvaise heure, et pendant des années personne ne s'en rendit compte !", causes: ["meridiana"] },
          { id: "susong", lat: 34.8, lon: 114.3, year: 1088, label: "La tour-horloge de Su Song", html: "En Chine, le savant <b>Su Song</b> construit une tour d'environ 12 mètres de haut avec une horloge mue par une grande <b>roue à eau</b>, qui fait sonner des tambours et des cloches et montre les étoiles.", causes: ["clessidra"] },
          { id: "padova", lat: 45.41, lon: 11.88, year: 1344, label: "L'horloge de Padoue", html: "Les horloges <b>mécaniques</b>, avec des engrenages et des poids, apparaissent en Europe à la fin du XIIIe siècle. À Padoue, <b>Jacopo Dondi</b> construit une grande horloge astronomique pour la tour de la ville : les cloches sonnent les heures pour tout le monde.", causes: ["ctesibio"] },
          { id: "galileo", lat: 43.72, lon: 10.4, year: 1583, label: "Galilée et le lustre", html: "On raconte que dans la cathédrale de <b>Pise</b>, le jeune <b>Galilée</b> observa un lustre qui oscillait et mesura les oscillations avec les battements de son pouls : grandes ou petites, elles duraient toujours le même temps ! C'est la loi du <b>pendule</b>.", causes: ["padova"] },
          { id: "huygens", lat: 52.08, lon: 4.3, year: 1656, label: "L'horloge à pendule", html: "Le Néerlandais <b>Christiaan Huygens</b> reprend l'idée de Galilée et construit la première horloge à <b>pendule</b> : elle passe d'une erreur de 15 minutes par jour à moins d'1 minute !", causes: ["galileo"] },
          { id: "greenwich", lat: 51.48, lon: 0, year: 1884, label: "Les fuseaux horaires et Greenwich", html: "Avec les trains et le télégraphe, il faut une heure identique pour tous. En 1884, les pays du monde choisissent le méridien de <b>Greenwich</b> (Londres) comme point de départ et divisent le monde en <b>24 fuseaux horaires</b>. En Italie, l'heure unique arrive le 1er novembre 1893.", causes: ["huygens"] },
          { id: "atomico", lat: 51.42, lon: -0.33, year: 1955, label: "La première horloge atomique", html: "En Angleterre, <b>Louis Essen</b> construit la première horloge atomique précise, qui mesure le temps avec les vibrations des atomes de césium. Depuis 1967, la <b>seconde</b> est définie justement ainsi.", causes: ["greenwich", "babilonia"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Année 1880 : tu es le chef des chemins de fer italiens",
      html: `<p>Autrefois, chaque ville réglait ses horloges sur le <b>Soleil</b> : quand le Soleil était le plus haut dans le ciel, il était midi. Mais le Soleil arrive plus tôt à Venise (à l'est) et plus tard à Turin (à l'ouest) !</p>
<p>Ainsi, quand il était midi à Venise, il manquait encore environ <b>20 minutes</b> à Turin. Avec les chevaux, cela n'importait à personne… mais maintenant il y a les <b>trains</b>, et les horaires deviennent confus.</p>`,
      question: "Que décides-tu ?",
      options: [
        { label: "Chaque ville garde son heure du Soleil.", outcome: "Chaque gare aurait un horaire différent : les voyageurs manqueraient leurs trains et deux trains sur la même voie pourraient ne pas savoir où est l'autre. Dangereux !" },
        { label: "Une seule heure pour tout le pays, la même dans chaque gare.", outcome: "Le midi de l'horloge ne coïncidera plus parfaitement avec le Soleil dans chaque ville, mais toutes les horloges d'Italie indiqueront la même heure. Les horaires des trains deviennent clairs et sûrs." },
        { label: "Pas d'horaires : les trains partent quand ils sont pleins.", outcome: "Personne ne saurait quand partir de chez soi : on attendrait des heures en gare, et les marchandises et le courrier arriveraient en retard." }
      ],
      answer: 1,
      explain: "Les chemins de fer italiens utilisaient déjà depuis 1866 l'heure de Rome pour tous les trains. Puis, en <b>1884</b>, le monde fut divisé en <b>24 fuseaux horaires</b> à partir de Greenwich, et dès le <b>1er novembre 1893</b> toute l'Italie adopta une heure unique, celle de l'<b>Europe centrale</b>, que nous utilisons encore aujourd'hui. Ce sont justement les trains qui ont rendu nécessaire une heure identique pour tous !"
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre l'horloge",
      intro: "Si les aiguilles t'embrouillent, essaie ces autres chemins.",
      tabs: [
        {
          label: "🇺🇸 AM et PM",
          html: `<p>En France, on dit « 15 heures ». Aux <b>États-Unis</b> et en Angleterre, on utilise presque toujours l'horloge de 12 heures avec deux sigles latins :</p>
<ul>
<li><b>a.m.</b> (<i>ante meridiem</i> = « avant midi ») : 9 a.m. = 9 heures du matin ;</li>
<li><b>p.m.</b> (<i>post meridiem</i> = « après midi ») : 3 p.m. = 15:00.</li>
</ul>
<p>Associe !</p>`,
          widget: "match",
          options: {
            pairs: [
              ["7 a.m.", "7:00 du matin"],
              ["7 p.m.", "19:00"],
              ["12 p.m. (noon)", "midi"],
              ["12 a.m. (midnight)", "minuit"],
              ["4 p.m.", "16:00"]
            ]
          }
        },
        {
          label: "🍕 L'horloge-pizza",
          html: `<p>Imagine l'horloge comme une <b>pizza</b> coupée en <b>12 parts</b>. Chaque part vaut <b>5 minutes</b>.</p>
<ul>
<li>3 parts = un <b>quart</b> de pizza = 15 minutes ;</li>
<li>6 parts = une <b>demi</b>-pizza = 30 minutes ;</li>
<li>9 parts = <b>trois quarts</b> = 45 minutes ;</li>
<li>12 parts = la pizza entière = 60 minutes = <b>1 heure</b>.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fff7ed"/>
<circle cx="150" cy="120" r="100" fill="#fbbf24" stroke="#b45309" stroke-width="8"/>
<path d="M150 120 L150 20 A100 100 0 0 1 250 120 Z" fill="#ef4444" stroke="#b45309" stroke-width="3"/>
<g stroke="#b45309" stroke-width="2">
<line x1="150" y1="120" x2="150" y2="20"/><line x1="150" y1="120" x2="200" y2="33"/><line x1="150" y1="120" x2="237" y2="70"/><line x1="150" y1="120" x2="250" y2="120"/>
<line x1="150" y1="120" x2="237" y2="170"/><line x1="150" y1="120" x2="200" y2="207"/><line x1="150" y1="120" x2="150" y2="220"/><line x1="150" y1="120" x2="100" y2="207"/>
<line x1="150" y1="120" x2="63" y2="170"/><line x1="150" y1="120" x2="50" y2="120"/><line x1="150" y1="120" x2="63" y2="70"/><line x1="150" y1="120" x2="100" y2="33"/>
</g>
<text x="300" y="80" font-size="22" fill="#991b1b" font-weight="bold">3 parts rouges</text>
<text x="300" y="115" font-size="22" fill="#991b1b" font-weight="bold">= 3 × 5 = 15 minutes</text>
<text x="300" y="160" font-size="22" fill="#78350f" font-weight="bold">12 parts = 60 minutes</text>
<text x="300" y="195" font-size="22" fill="#78350f" font-weight="bold">= 1 heure</text>
</svg>`
        },
        {
          label: "🌍 Quelle heure est-il dans le monde ?",
          html: `<p>Le Soleil n'éclaire pas toute la Terre en même temps : quand c'est le jour chez nous, de l'autre côté c'est la nuit ! C'est pourquoi chaque zone du monde a son heure (son <b>fuseau horaire</b>).</p>
<p>Quand il est <b>midi</b> en Italie (en hiver) : à Londres, il est 11 heures, à New York 6 heures du matin, à Moscou 14 heures, à Pékin 19 heures et à Tokyo 20 heures. Fais tourner le globe !</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Rome 12:00", color: "#16a34a" },
              { lat: 51.5, lon: -0.12, label: "Londres 11:00", color: "#2563eb" },
              { lat: 40.7, lon: -74, label: "New York 6:00", color: "#7c3aed" },
              { lat: 55.75, lon: 37.6, label: "Moscou 14:00", color: "#f97316" },
              { lat: 39.9, lon: 116.4, label: "Pékin 19:00", color: "#ef4444" },
              { lat: 35.7, lon: 139.7, label: "Tokyo 20:00", color: "#db2777" }
            ]
          }
        },
        {
          label: "🕰️ La frise chronologique des horloges",
          html: `<p>Des anciens bâtons avec l'ombre jusqu'aux horloges atomiques : fais défiler la frise chronologique.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: -1500, label: "Cadran solaire égyptien", icon: "☀️" },
              { year: -1400, label: "Clepsydre", icon: "💧" },
              { year: 1344, label: "Horloge de la tour de Padoue", icon: "🏰" },
              { year: 1656, label: "Horloge à pendule de Huygens", icon: "🕰️" },
              { year: 1884, label: "24 fuseaux horaires", icon: "🌍" },
              { year: 1955, label: "Horloge atomique", icon: "⚛️" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de l'horloge : touche les nœuds et découvre pourquoi",
      nodes: [
        { id: "sole", label: "Le Soleil", x: 50, y: 6, color: "#eab308", html: "La première « horloge » de l'histoire.", why: "La Terre tourne sur elle-même en environ 24 heures : c'est pour cela que nous voyons le Soleil se lever, monter et se coucher. Les premiers humains mesuraient le temps en regardant la lumière et les ombres." },
        { id: "giorno", label: "Jour = 24 heures", x: 20, y: 28, color: "#f97316", html: "Un tour complet de la Terre sur elle-même.", why: "Les <b>anciens Égyptiens</b> divisèrent le jour en 12 heures de lumière et la nuit en 12 heures d'obscurité : 12 + 12 = 24. Le 12 venait peut-être du comptage des phalanges des doigts avec le pouce (4 doigts × 3 phalanges = 12)." },
        { id: "sessanta", label: "60 minutes, 60 secondes", x: 80, y: 28, color: "#a855f7", html: "Une heure a 60 minutes, une minute a 60 secondes.", why: "Cela vient des <b>Babyloniens</b>, qui comptaient par groupes de 60. Le 60 se divise par 2, 3, 4, 5, 6, 10, 12, 15, 20 et 30 : parfait pour faire des demi-heures et des quarts d'heure." },
        { id: "lancette", label: "Les aiguilles", x: 50, y: 45, color: "#2563eb", html: "Petite = heures, grande = minutes, fine = secondes.", why: "Les aiguilles tournent dans le « sens des aiguilles d'une montre » parce qu'elles copient l'ombre du <b>cadran solaire</b> : dans la partie nord du monde, où sont nées les horloges, l'ombre tourne justement dans ce sens." },
        { id: "meccanico", label: "Horloges mécaniques", x: 20, y: 65, color: "#64748b", html: "Engrenages, poids et ressorts qui font tourner les aiguilles.", why: "Elles apparurent en Europe vers la fin du XIIIe siècle sur les tours des villes et des monastères : les moines devaient prier à des heures précises, même la nuit. Le pendule (Galilée, Huygens) les rendit beaucoup plus précises." },
        { id: "digitale", label: "Horloge numérique", x: 80, y: 65, color: "#16a34a", html: "Elle montre l'heure avec des chiffres : 14:30.", why: "Elle utilise un minuscule cristal de <b>quartz</b> qui vibre plus de 32 000 fois par seconde : une puce compte les vibrations. La première montre-bracelet à quartz sortit en 1969." },
        { id: "fusi", label: "Fuseaux horaires", x: 35, y: 88, color: "#ef4444", html: "Le monde divisé en 24 zones, chacune avec son heure.", why: "Quand les trains rendirent les voyages rapides, chaque ville avec son heure du Soleil créait de la confusion. En <b>1884</b>, on choisit Greenwich comme point de départ." },
        { id: "atomico", label: "Horloge atomique", x: 70, y: 88, color: "#0ea5e9", html: "L'horloge la plus précise : elle compte les vibrations des atomes.", why: "Depuis 1967, la seconde est définie avec les atomes de <b>césium</b>. Sans horloges atomiques, le GPS de ton téléphone se tromperait de plusieurs kilomètres sur ta position." }
      ],
      edges: [
        ["sole", "giorno", "donne le"],
        ["giorno", "sessanta", "divisé en heures par"],
        ["sole", "lancette", "l'ombre inspire les"],
        ["sessanta", "lancette", "les nombres du cadran"],
        ["lancette", "meccanico", "mues par"],
        ["meccanico", "digitale", "puis le quartz :"],
        ["giorno", "fusi", "différent dans le monde :"],
        ["digitale", "atomico", "encore plus précis :"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : 24 heures et histoire",
      questions: [
        { type: "num", q: "4 heures de l'après-midi, c'est l'heure…", answer: 16, explain: "4 + 12 = 16 : 16:00." },
        { type: "mc", q: "Qui nous a légué les 60 minutes ?", options: ["Les Babyloniens", "Les Romains", "Les Américains"], answer: 0, explain: "Les Babyloniens comptaient par groupes de 60." },
        { type: "tf", q: "Le cadran solaire fonctionne aussi la nuit.", answer: false, explain: "Le cadran solaire utilise l'ombre du Soleil : la nuit, il ne marche pas. C'est pour cela qu'on a inventé la clepsydre." }
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li><b>Petite aiguille</b> = heures ; <b>grande aiguille</b> = minutes.</li>
<li>Entre un nombre et le suivant, il y a <b>5 minutes</b>.</li>
<li>15 min = <b>un quart d'heure</b> ; 30 min = <b>une demi-heure</b> ; 45 min = <b>trois quarts d'heure</b>.</li>
<li>1 jour = 24 heures ; 1 heure = 60 minutes ; 1 minute = 60 secondes.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Heure", d: "Chacune des 24 parties du jour ; elle dure 60 minutes." },
    { t: "Minute", d: "La soixantième partie de l'heure ; elle dure 60 secondes." },
    { t: "Aiguille", d: "La petite tige qui tourne sur le cadran et indique les heures, les minutes ou les secondes." },
    { t: "Cadran", d: "Le cercle avec les nombres de 1 à 12." },
    { t: "Sens des aiguilles d'une montre", d: "Le sens dans lequel tournent les aiguilles ↻." },
    { t: "Cadran solaire", d: "Instrument qui indique l'heure avec l'ombre du Soleil." },
    { t: "Clepsydre", d: "Instrument qui mesure le temps avec de l'eau qui s'écoule tout doucement." },
    { t: "Fuseau horaire", d: "Zone de la Terre où tout le monde a la même heure." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quelle aiguille indique les minutes ?", options: ["La petite", "La grande", "Le cadran"], answer: 1, explain: "La grande aiguille indique les minutes." },
      { type: "num", q: "Combien y a-t-il de minutes dans une heure ?", answer: 60, unit: "min", explain: "1 heure = 60 minutes." },
      { type: "num", q: "Combien y a-t-il d'heures dans un jour ?", answer: 24, explain: "Un jour a 24 heures." },
      { type: "num", q: "La grande aiguille est sur le 9. Combien de minutes indique-t-elle ?", answer: 45, unit: "min", explain: "9 × 5 = 45 minutes." },
      { type: "mc", q: "8:30 peut se dire…", options: ["8 heures et quart", "8 heures et demie", "9 heures moins le quart"], answer: 1, explain: "30 minutes = une demi-heure : 8 heures et demie." },
      { type: "mc", q: "9 heures moins le quart, c'est…", options: ["9:15", "8:45", "9:45"], answer: 1, explain: "Il manque un quart d'heure pour arriver à 9 heures : il est 8 heures 45." },
      { type: "tf", q: "La petite aiguille fait 2 tours par jour.", answer: true, explain: "Le cadran a 12 heures : en 24 heures, la petite aiguille fait 2 tours." },
      { type: "text", q: "15:00, c'est … heures de l'après-midi. (écris le nombre)", answer: ["3", "trois"], explain: "15 − 12 = 3 : 3 heures de l'après-midi." },
      { type: "order", q: "Mets dans l'ordre les horaires de la journée.", items: ["7:00 réveil", "8:15 début de l'école", "12:45 déjeuner", "17:00 sport", "21:00 au lit"], explain: "Du matin au soir." },
      { type: "mc", q: "Un dessin animé commence à 16:00 et finit à 16:30. Combien de temps dure-t-il ?", options: ["Un quart d'heure", "Une demi-heure", "Une heure"], answer: 1, explain: "De 16:00 à 16:30, il se passe 30 minutes." },
      { type: "mc", q: "Quel instrument les anciens utilisaient-ils pour lire l'heure avec l'ombre du Soleil ?", options: ["Le cadran solaire", "Le thermomètre", "La balance"], answer: 0, explain: "Le cadran solaire indique l'heure avec l'ombre." },
      { type: "tf", q: "Galilée découvrit la loi du pendule en observant un lustre.", answer: true, explain: "C'est ce que raconte la tradition : dans la cathédrale de Pise, vers 1583." }
    ]
  }
});
