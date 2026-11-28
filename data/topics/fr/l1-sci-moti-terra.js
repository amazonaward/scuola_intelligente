TOPIC('fr', {
  id: "l1-sci-moti-terra",
  title: "Les mouvements de la Terre et de la Lune",
  intro: "Nous ne nous rendons compte de rien, et pourtant, en ce moment, tu tournes autour de l'axe terrestre à plus de 1000 km/h (aux latitudes moyennes) et tu voyages autour du Soleil à environ 30 km par seconde. De ces deux mouvements dépendent le jour et la nuit, les saisons, les fuseaux horaires. Et la Lune, avec ses phases, les marées et les éclipses, complète le spectacle. Dans cette leçon, nous découvrons la <b>géométrie du ciel</b> et pourquoi il fait chaud en été alors qu'en été la Terre est <i>plus loin</i> du Soleil.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "La rotation terrestre",
      html: `<p>La Terre tourne autour de son <b>axe</b> (la droite qui passe par les pôles) d'<b>ouest en est</b> (sens inverse des aiguilles d'une montre vu du pôle Nord). C'est pourquoi le Soleil, la Lune et les étoiles semblent se lever à l'est et se coucher à l'ouest.</p>
<ul>
<li>Le <b>jour sidéral</b> (par rapport aux étoiles) dure <b>23 h 56 min 4 s</b>.</li>
<li>Le <b>jour solaire</b> (d'un midi au suivant) dure en moyenne <b>24 heures</b>. Il est un peu plus long parce que, pendant que la Terre tourne, elle se déplace aussi sur son orbite et doit tourner environ 4 minutes de plus pour ramener le Soleil à la même position.</li>
<li>La vitesse d'un point de la surface dépend de la latitude : à l'équateur elle vaut environ <b>1670 km/h</b>, à Rome (environ 42° N) environ 1240 km/h, aux pôles elle est nulle.</li>
</ul>
<p>Conséquences de la rotation :</p>
<ul>
<li>l'<b>alternance du jour et de la nuit</b> ;</li>
<li>l'<b>aplatissement aux pôles</b> (la Terre est un géoïde) ;</li>
<li>la <b>déviation des corps en mouvement</b> due à la <b>force de Coriolis</b> : vers la droite dans l'hémisphère Nord, vers la gauche dans l'hémisphère Sud (importante pour les vents et les courants, mais pas pour l'écoulement de l'évier, qui dépend d'autres facteurs) ;</li>
<li>les <b>marées</b> s'expliquent par la Lune et le Soleil, mais la rotation les fait « courir » sur la planète.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Le pendule de Foucault : la preuve que la Terre tourne",
      html: `<p>En 1851, le physicien français <b>Léon Foucault</b> suspendit à la voûte du Panthéon de Paris une sphère de 28 kg au bout d'un câble de 67 mètres. Le pendule oscillait, et son plan d'oscillation tournait lentement : c'était le sol, c'est-à-dire la Terre, qui tournait sous lui. À Paris, le plan fait un tour complet en environ 32 heures ; aux pôles en 24 heures ; à l'équateur, il ne tourne pas. Ce fut la première démonstration directe, en laboratoire, de la rotation terrestre.</p>`
    },
    {
      type: "text",
      title: "La révolution et l'inclinaison de l'axe",
      html: `<p>La Terre parcourt une orbite elliptique presque circulaire autour du Soleil, dans le même sens que la rotation (sens inverse des aiguilles d'une montre vu du pôle Nord). L'<b>année sidérale</b> dure <b>365,256 jours</b> ; l'<b>année tropique</b> (d'équinoxe à équinoxe, sur laquelle repose le calendrier) environ <b>365,242 jours</b>. D'où les <b>années bissextiles</b> (calendrier grégorien, 1582) : tous les 4 ans un jour de plus, sauf les années séculaires non divisibles par 400 (1900 ne fut pas bissextile, 2000 oui).</p>
<p>La distance Terre-Soleil varie peu : <b>périhélie</b> environ 147,1 millions de km (début janvier), <b>aphélie</b> environ 152,1 millions de km (début juillet). La différence n'est que de 3 % : <b>ce n'est pas la distance qui cause les saisons</b>.</p>
<p>La vraie cause est l'<b>inclinaison de l'axe</b> terrestre : l'axe forme un angle d'environ <b>23,4°</b> (23° 27') avec la perpendiculaire au <b>plan de l'orbite</b> (appelé <b>écliptique</b>), et au cours de l'année il <b>garde la même direction dans l'espace</b> (il pointe à peu près vers l'étoile Polaire). Ainsi, pendant la moitié de l'année, c'est l'hémisphère Nord qui est incliné vers le Soleil, et pendant l'autre moitié l'hémisphère Sud.</p>`
    },
    {
      type: "svg",
      title: "Les saisons : pourquoi elles changent",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#0f172a"/>
<circle cx="320" cy="160" r="26" fill="#facc15"/><text x="320" y="205" font-size="14" text-anchor="middle" fill="#fde68a">Soleil</text>
<ellipse cx="320" cy="160" rx="240" ry="105" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>
<g>
<circle cx="80" cy="160" r="20" fill="#3b82f6"/><line x1="68" y1="190" x2="92" y2="130" stroke="#f8fafc" stroke-width="3"/><text x="80" y="228" font-size="14" text-anchor="middle" fill="#e2e8f0">21 juin</text><text x="80" y="246" font-size="14" text-anchor="middle" fill="#93c5fd">solstice d'été N</text>
<circle cx="560" cy="160" r="20" fill="#3b82f6"/><line x1="548" y1="190" x2="572" y2="130" stroke="#f8fafc" stroke-width="3"/><text x="560" y="228" font-size="14" text-anchor="middle" fill="#e2e8f0">21 décembre</text><text x="560" y="246" font-size="14" text-anchor="middle" fill="#93c5fd">solstice d'hiver N</text>
<circle cx="320" cy="265" r="20" fill="#3b82f6"/><line x1="308" y1="295" x2="332" y2="235" stroke="#f8fafc" stroke-width="3"/><text x="320" y="312" font-size="14" text-anchor="middle" fill="#e2e8f0">équinoxe</text>
<circle cx="320" cy="55" r="20" fill="#3b82f6"/><line x1="308" y1="85" x2="332" y2="25" stroke="#f8fafc" stroke-width="3"/><text x="320" y="20" font-size="14" text-anchor="middle" fill="#e2e8f0">équinoxe</text>
</g>
<text x="140" y="60" font-size="14" fill="#93c5fd">axe toujours parallèle à lui-même</text>
</svg>`,
      caption: "L'axe (ligne blanche) pointe toujours dans la même direction : en juin, l'hémisphère Nord est incliné vers le Soleil, en décembre dans la direction opposée."
    },
    {
      type: "text",
      title: "Solstices, équinoxes et saisons",
      html: `<p>Quand l'hémisphère Nord est incliné vers le Soleil, les rayons arrivent <b>plus verticalement</b> et le Soleil reste <b>plus longtemps</b> dans le ciel : l'énergie par mètre carré est plus grande et il y a plus de temps pour chauffer. C'est l'été. Six mois plus tard, c'est le contraire. Les saisons de l'hémisphère Sud sont toujours opposées à celles de l'hémisphère Nord (à Noël, c'est l'été en Australie).</p>
<table>
<tr><th>Date (environ)</th><th>Événement</th><th>Ce qui se passe (hémisphère Nord)</th></tr>
<tr><td>20-21 mars</td><td><b>Équinoxe de printemps</b></td><td>jour et nuit égaux (12 h) partout ; le Soleil est au zénith à l'équateur</td></tr>
<tr><td>20-21 juin</td><td><b>Solstice d'été</b></td><td>jour le plus long ; Soleil au zénith sur le tropique du Cancer (23,4° N)</td></tr>
<tr><td>22-23 septembre</td><td><b>Équinoxe d'automne</b></td><td>jour et nuit égaux</td></tr>
<tr><td>21-22 décembre</td><td><b>Solstice d'hiver</b></td><td>jour le plus court ; Soleil au zénith sur le tropique du Capricorne (23,4° S)</td></tr>
</table>
<p>À <b>midi</b>, le Soleil atteint une hauteur maximale au-dessus de l'horizon égale à <b>90° − latitude + déclinaison</b>. À Rome (42° N), le 21 juin, elle vaut 90 − 42 + 23,4 = <b>71,4°</b> ; le 21 décembre, 90 − 42 − 23,4 = <b>24,6°</b>.</p>
<p>Les <b>zones astronomiques</b> : zone torride entre les tropiques (±23,4°) ; zones tempérées entre les tropiques et les cercles polaires ; zones glaciales des <b>cercles polaires</b> (±66,6°) aux pôles, où l'on observe le <b>soleil de minuit</b> en été et la nuit polaire en hiver.</p>`
    },
    {
      type: "example",
      title: "La hauteur du Soleil à Milan",
      html: `<p>Milan a une latitude d'environ <b>45,5° N</b>. Quelle est la hauteur du Soleil à midi aux équinoxes et aux solstices ?</p>
<ul>
<li>Équinoxe (déclinaison 0°) : 90 − 45,5 = <b>44,5°</b></li>
<li>Solstice d'été : 90 − 45,5 + 23,4 = <b>67,9°</b></li>
<li>Solstice d'hiver : 90 − 45,5 − 23,4 = <b>21,1°</b></li>
</ul>
<p>L'ombre d'un poteau de 2 m à midi mesure 2 / tan(21,1°) ≈ 5,2 m en décembre, mais seulement 2 / tan(67,9°) ≈ 0,8 m en juin. C'est grâce à cette idée que les cadrans solaires indiquent les saisons.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : saisons et rotation",
      questions: [
        { type: "mc", q: "La cause des saisons est…", options: ["la variation de la distance au Soleil", "l'inclinaison de l'axe terrestre", "la rotation sur son axe"], answer: 1, explain: "L'axe incliné de 23,4° fait varier l'angle d'arrivée des rayons et la durée du jour." },
        { type: "tf", q: "En décembre, la Terre est plus proche du Soleil qu'en juin.", answer: true, explain: "Le périhélie a lieu en janvier : l'hiver boréal se produit quand la Terre est plus proche du Soleil." },
        { type: "num", q: "Quelle hauteur maximale le Soleil atteint-il au-dessus de l'horizon en un lieu situé à 40° N à l'équinoxe ?", answer: 50, unit: "°", explain: "90 − 40 = 50°." }
      ]
    },
    {
      type: "3d",
      title: "Le globe et les parallèles remarquables",
      scene: "globe",
      options: { points: [
        { lat: 0, lon: 0, label: "Équateur / Greenwich", color: "#ef4444" },
        { lat: 23.4, lon: 30, label: "Tropique du Cancer", color: "#f97316" },
        { lat: -23.4, lon: 30, label: "Tropique du Capricorne", color: "#f97316" },
        { lat: 66.6, lon: 30, label: "Cercle polaire arctique", color: "#3b82f6" },
        { lat: 41.9, lon: 12.5, label: "Rome", color: "#16a34a" }
      ], routes: [] },
      caption: "Fais tourner le globe : les tropiques marquent la limite jusqu'à laquelle le Soleil peut se trouver au zénith ; les cercles polaires, la limite du soleil de minuit."
    },
    {
      type: "text",
      title: "Les fuseaux horaires",
      html: `<p>La Terre tourne de 360° en 24 heures, soit <b>15° par heure</b> (1° toutes les 4 minutes). Le Soleil culmine (il est « midi ») à des moments différents selon la longitude : Rome (12,5° E) et Turin (7,7° E) diffèrent d'environ 4,8°, donc le vrai midi arrive à Turin environ 19 minutes après Rome. Au XIXe siècle, chaque ville avait sa propre heure et les horaires de chemin de fer devenaient impossibles : en 1884, lors de la <b>Conférence internationale du méridien</b> à Washington, on choisit comme origine le <b>méridien de Greenwich</b> (longitude 0°) et on divisa le globe en <b>24 fuseaux</b> de 15°.</p>
<ul>
<li>En allant vers l'<b>est</b>, l'heure <b>avance</b> (on gagne des heures) ; vers l'<b>ouest</b>, elle <b>recule</b>.</li>
<li>L'Italie (comme la France) se trouve dans le fuseau de l'Europe centrale (<b>CET = UTC+1</b>, méridien 15° E, qui passe près de l'Etna) ; en été, l'<b>heure d'été</b> la porte à UTC+2.</li>
<li>La <b>ligne de changement de date</b> (environ 180° de longitude, dans le Pacifique) est l'endroit où l'on passe d'un jour au suivant : en la franchissant vers l'ouest, on <b>ajoute</b> un jour.</li>
</ul>
<p>Beaucoup de pays utilisent des fuseaux qui ne sont pas rigoureusement centrés sur les méridiens : la Chine, qui couvre cinq fuseaux géographiques, utilise une seule heure (UTC+8).</p>`
    },
    {
      type: "example",
      title: "Quelle heure est-il à New York ?",
      html: `<p>À Rome, il est <b>18 h 00</b> (CET, UTC+1). New York est à UTC−5 (heure d'hiver). Quelle heure est-il à New York ?</p>
<ol>
<li>Différence entre les fuseaux : +1 − (−5) = 6 heures.</li>
<li>New York est à l'ouest, donc l'heure <b>recule</b> : 18 h 00 − 6 h = <b>12 h 00</b>.</li>
</ol>
<p>Pour Tokyo (UTC+9) : différence 9 − 1 = 8 heures, vers l'est : 18 h 00 + 8 = <b>2 h 00 le lendemain</b>.</p>`
    },
    {
      type: "text",
      title: "La Lune et ses mouvements",
      html: `<p>La Lune est notre unique satellite naturel : diamètre 3474 km (environ un quart de celui de la Terre), distance moyenne <b>384 400 km</b>. Elle effectue trois mouvements :</p>
<ul>
<li>une <b>rotation</b> sur elle-même en 27,3 jours ;</li>
<li>une <b>révolution</b> autour de la Terre en 27,3 jours (<b>mois sidéral</b>) ;</li>
<li>une <b>translation</b> avec la Terre autour du Soleil.</li>
</ul>
<p>Comme la rotation et la révolution durent le même temps (<b>rotation synchrone</b>, due aux forces de marée), la Lune nous montre <b>toujours la même face</b>. L'autre face (non pas « sombre », mais « cachée ») fut photographiée pour la première fois par la sonde soviétique <b>Luna 3</b> en 1959.</p>
<p>Les <b>phases de la Lune</b> dépendent de la position relative du Soleil, de la Terre et de la Lune : la Lune est toujours éclairée à moitié par le Soleil, mais nous en voyons une partie différente. Le cycle (<b>mois synodique</b> ou lunaison) dure <b>29,53 jours</b>, plus que le mois sidéral car, entre-temps, la Terre s'est déplacée sur son orbite et la Lune doit « rattraper » le Soleil pour s'aligner à nouveau.</p>
<table>
<tr><th>Phase</th><th>Position</th><th>Aspect</th></tr>
<tr><td><b>Nouvelle lune</b></td><td>Lune entre la Terre et le Soleil</td><td>invisible</td></tr>
<tr><td>Premier quartier</td><td>à 90° du Soleil</td><td>moitié droite éclairée (hémisphère Nord), se lève à midi</td></tr>
<tr><td><b>Pleine lune</b></td><td>Terre entre le Soleil et la Lune</td><td>tout le disque ; se lève au coucher du Soleil</td></tr>
<tr><td>Dernier quartier</td><td>à 90° du Soleil</td><td>moitié gauche éclairée ; se lève à minuit</td></tr>
</table>
<p>Moyen mnémotechnique (hémisphère Nord) : « la Lune est menteuse ». Si elle a la forme d'un D (bosse tournée vers l'ouest), elle est <b>croissante</b> ; si elle a la forme d'un C, elle est <b>décroissante</b>.</p>`
    },
    {
      type: "svg",
      title: "Les phases de la Lune",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#0f172a"/>
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#f8fafc" font-weight="bold">Les phases vues de la Terre (hémisphère Nord), au cours d'un mois</text>
<g>
<circle cx="70" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
<circle cx="190" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M190 74 A36 36 0 0 1 190 146 A18 36 0 0 0 190 74 Z" fill="#fde68a"/>
<circle cx="310" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M310 74 A36 36 0 0 1 310 146 Z" fill="#fde68a"/>
<circle cx="430" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M430 74 A36 36 0 0 1 430 146 A18 36 0 0 1 430 74 Z" fill="#fde68a"/>
<circle cx="550" cy="110" r="36" fill="#fde68a" stroke="#64748b" stroke-width="2"/>
</g>
<g font-size="14" fill="#e2e8f0" text-anchor="middle">
<text x="70" y="175">Nouvelle</text><text x="190" y="175">Croissant</text><text x="310" y="175">Premier quartier</text><text x="430" y="175">Gibbeuse</text><text x="550" y="175">Pleine</text>
<text x="70" y="195" fill="#94a3b8">jour 0</text><text x="190" y="195" fill="#94a3b8">~3-4</text><text x="310" y="195" fill="#94a3b8">~7,4</text><text x="430" y="195" fill="#94a3b8">~11</text><text x="550" y="195" fill="#94a3b8">~14,8</text>
</g>
<text x="320" y="250" font-size="15" text-anchor="middle" fill="#cbd5e1">Puis la Lune décroît : gibbeuse, dernier quartier (jour ~22), croissant, et de nouveau nouvelle (29,5)</text>
<text x="320" y="275" font-size="14" text-anchor="middle" fill="#94a3b8">La partie éclairée est toujours du côté du Soleil</text>
</svg>`,
      caption: "La Lune ne change pas de forme : c'est la portion de sa moitié éclairée tournée vers nous qui change."
    },
    {
      type: "text",
      title: "Les éclipses",
      html: `<p>Une <b>éclipse</b> se produit quand le Soleil, la Terre et la Lune sont alignés.</p>
<ul>
<li><b>Éclipse de Soleil</b> : la Lune s'interpose entre la Terre et le Soleil, à la <b>nouvelle</b> lune. Son ombre tombe sur la Terre et ceux qui se trouvent dans la zone d'ombre (une bande large d'environ 270 km au maximum) voient l'éclipse <b>totale</b>, d'une durée maximale d'environ 7 minutes et demie. En dehors, dans la <b>pénombre</b>, elle est partielle. C'est une heureuse coïncidence que le Soleil soit environ 400 fois plus grand que la Lune et environ 400 fois plus éloigné : les deux disques paraissent presque égaux dans le ciel. Si la Lune est au point le plus éloigné, l'éclipse est <b>annulaire</b>.</li>
<li><b>Éclipse de Lune</b> : la Terre s'interpose, à la <b>pleine</b> lune, et la Lune entre dans l'ombre de la Terre. Elle est visible depuis toute la moitié de la Terre où il fait nuit, et la totalité peut durer près de deux heures ; la Lune ne disparaît pas mais devient <b>rougeâtre</b>, car l'atmosphère terrestre dévie vers la Lune la lumière rouge du Soleil (comme lors d'un coucher de Soleil).</li>
</ul>
<p>Pourquoi n'y a-t-il pas d'éclipse à chaque nouvelle et pleine lune ? Parce que l'orbite lunaire est inclinée d'environ <b>5,1°</b> par rapport à l'écliptique : en général, la Lune passe un peu au-dessus ou au-dessous du Soleil ou de l'ombre terrestre. Il n'y a éclipse que si la Lune est proche des <b>nœuds</b>, les deux points où son orbite traverse le plan de l'écliptique. Chaque année, il y a de 4 à 7 éclipses (solaires et lunaires confondues).</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les phases de la Lune",
      intro: "Les phases sont un malentendu classique : l'ombre de la Terre n'y est pour rien. Essaie de les recréer.",
      tabs: [
        {
          label: "💡 L'expérience de la lampe",
          html: `<p>Dans une pièce sombre, allume une lampe (le Soleil) et tiens une balle (la Lune), ta tête étant la Terre. En tournant sur toi-même avec la balle tendue devant toi, tu verras la balle éclairée comme dans toutes les phases : pleine quand elle est à l'opposé de la lampe, nouvelle quand elle est entre toi et la lampe. L'ombre de ta tête ne tombe sur la balle que dans une position précise : l'éclipse de Lune.</p>`
        },
        {
          label: "🧭 Quand elle se lève et quand elle se couche",
          html: `<p>Une façon de reconnaître la phase d'après l'heure : la <b>nouvelle</b> lune se lève et se couche avec le Soleil ; la <b>pleine</b> lune se lève quand le Soleil se couche (et inversement) ; le <b>premier quartier</b> se lève à midi et se couche à minuit ; le <b>dernier quartier</b> se lève à minuit et se couche à midi. Chaque jour, la Lune se lève en moyenne environ 50 minutes plus tard que la veille, car elle se déplace d'environ 12-13° vers l'est sur son chemin.</p>`
        },
        {
          label: "🌊 Pourquoi y a-t-il des marées ?",
          html: `<p>La gravité lunaire attire l'eau du côté tourné vers la Lune et, par effet différentiel, crée aussi un renflement du côté opposé : deux marées hautes et deux marées basses par jour (environ toutes les 12 heures et 25 minutes). À la <b>nouvelle</b> et à la <b>pleine</b> lune, les effets du Soleil et de la Lune s'additionnent : marées plus fortes, les <b>vives-eaux</b> (syzygies). Aux quartiers, ils se contrarient : marées plus faibles, les <b>mortes-eaux</b> (quadratures). En Méditerranée, les marées sont faibles (quelques décimètres, mais jusqu'à environ 1 m à Venise) ; dans la baie de Fundy, au Canada, elles dépassent 15 m.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "La Lune s'éloigne",
      html: `<p>Les miroirs laissés sur la Lune par les astronautes d'Apollo (1969-1972) permettent de mesurer au laser la distance Terre-Lune avec une précision de l'ordre du millimètre. Résultat : la Lune s'éloigne d'environ <b>3,8 cm par an</b>, tandis que la rotation de la Terre ralentit. Il y a un milliard d'années, les jours duraient environ 19-20 heures, et dans plusieurs milliards d'années une éclipse totale de Soleil ne sera plus possible, car la Lune paraîtra trop petite pour couvrir le disque solaire. On pense que la Lune s'est formée il y a environ 4,5 milliards d'années, à la suite de l'impact entre la proto-Terre et un corps de la taille de Mars (<b>Théia</b>).</p>`
    },
    {
      type: "conceptMap",
      title: "Carte des mouvements : touche les nœuds et découvre pourquoi",
      nodes: [
        { id: "rot", label: "Rotation", x: 18, y: 8, color: "#3b82f6", html: "Tour de la Terre sur elle-même en 24 h.", why: "Elle fut proposée par <b>Héraclide du Pont</b> (IVe siècle av. J.-C.) et défendue par Copernic ; démontrée par <b>Foucault</b> en 1851. Elle produit le jour et la nuit, l'effet Coriolis et l'aplatissement aux pôles." },
        { id: "riv", label: "Révolution", x: 82, y: 8, color: "#22c55e", html: "Tour autour du Soleil en environ 365,25 jours.", why: "Avec <b>Copernic</b> (1543) et Galilée, la Terre perdit son immobilité. La confirmation vint de la <b>parallaxe stellaire</b> (Bessel, 1838) et de l'aberration de la lumière (Bradley, 1729)." },
        { id: "asse", label: "Axe incliné (23,4°)", x: 50, y: 32, color: "#f97316", html: "L'axe n'est pas perpendiculaire à l'orbite.", why: "Selon l'hypothèse la plus admise, l'inclinaison est due à l'impact qui forma la Lune il y a environ 4,5 milliards d'années. La Lune joue le rôle de stabilisateur : sans elle, l'angle pourrait varier beaucoup, avec des effets drastiques sur le climat." },
        { id: "stag", label: "Saisons", x: 82, y: 40, color: "#ef4444", html: "Changement de l'angle des rayons et de la durée du jour.", why: "Une idée répandue mais fausse est qu'elles dépendent de la distance au Soleil : or la Terre en est plus proche en janvier, et l'hémisphère Sud a l'été à Noël." },
        { id: "fusi", label: "Fuseaux horaires", x: 18, y: 44, color: "#eab308", html: "24 fuseaux de 15°.", why: "Ils sont nés avec les chemins de fer et le télégraphe : 1884, Conférence de Washington, avec le méridien de Greenwich comme origine." },
        { id: "luna", label: "Mouvements de la Lune", x: 50, y: 62, color: "#a855f7", html: "Rotation synchrone, révolution en 27,3 jours.", why: "La rotation synchrone est due aux forces de marée que la Terre a exercées sur la Lune pendant des milliards d'années, freinant sa rotation jusqu'à la faire coïncider avec sa révolution." },
        { id: "fasi", label: "Phases de la Lune", x: 18, y: 82, color: "#06b6d4", html: "Cycle de 29,53 jours.", why: "<b>Aristarque de Samos</b> (IIIe siècle av. J.-C.) tira déjà de la phase de demi-Lune la distance relative du Soleil et de la Lune, par une méthode géométrique juste mais avec des mesures erronées." },
        { id: "ecl", label: "Éclipses", x: 82, y: 82, color: "#14b8a6", html: "Alignement Soleil-Terre-Lune.", why: "Les Babyloniens découvrirent le <b>cycle de Saros</b> (environ 18 ans et 11 jours), après lequel les éclipses se répètent presque à l'identique, et l'utilisaient pour les prévoir. Les éclipses ne sont pas mensuelles car l'orbite lunaire est inclinée de 5,1°." }
      ],
      edges: [
        ["rot", "fusi", "est à l'origine des"],
        ["riv", "stag", "avec l'axe incliné donne"],
        ["asse", "stag", "cause"],
        ["luna", "fasi", "est à l'origine des"],
        ["luna", "ecl", "si alignée donne"],
        ["rot", "luna", "tourne comme"],
        ["riv", "asse", "conserve"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : la Lune",
      questions: [
        { type: "mc", q: "Pourquoi voyons-nous toujours la même face de la Lune ?", options: ["Parce que la Lune ne tourne pas", "Parce que sa rotation et sa révolution durent le même temps", "Parce que l'autre face est toujours dans l'ombre"], answer: 1, explain: "C'est la rotation synchrone. L'autre face reçoit autant de lumière que la première." },
        { type: "mc", q: "Pendant quelle phase de la Lune une éclipse de Soleil peut-elle se produire ?", options: ["Pleine lune", "Nouvelle lune", "Premier quartier"], answer: 1, explain: "La Lune doit être entre la Terre et le Soleil, elle nous montre donc sa face non éclairée." },
        { type: "num", q: "À Rome, il est 12 h 00 (UTC+1). Quelle heure est-il à Londres (UTC+0), en heures ?", answer: 11, unit: "h", explain: "Londres est à l'ouest : l'heure recule d'une heure." }
      ]
    }
  ],
  glossary: [
    { t: "Rotation", d: "Mouvement de la Terre autour de son axe, en 24 heures." },
    { t: "Révolution", d: "Mouvement de la Terre autour du Soleil, en environ 365,25 jours." },
    { t: "Écliptique", d: "Plan de l'orbite terrestre autour du Soleil." },
    { t: "Solstice", d: "Moment où le Soleil atteint sa déclinaison maximale nord ou sud : jour le plus long ou le plus court." },
    { t: "Équinoxe", d: "Moment où le jour et la nuit ont la même durée." },
    { t: "Fuseau horaire", d: "Chacune des 24 bandes de 15° de longitude ayant la même heure." },
    { t: "Mois synodique", d: "Intervalle entre deux phases identiques de la Lune : 29,53 jours." },
    { t: "Rotation synchrone", d: "Situation où un corps tourne sur lui-même en un temps égal à celui de sa révolution." },
    { t: "Éclipse de Soleil", d: "La Lune cache le Soleil à la Terre (nouvelle lune)." },
    { t: "Éclipse de Lune", d: "La Lune passe dans l'ombre de la Terre (pleine lune)." },
    { t: "Marées", d: "Oscillations du niveau de la mer dues à l'attraction de la Lune et du Soleil." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Combien dure le jour solaire moyen ?", options: ["23 h 56 min", "24 h", "27 jours"], answer: 1, explain: "Le jour solaire moyen dure 24 heures (le jour sidéral 23 h 56 min)." },
      { type: "tf", q: "Les saisons sont dues à la distance de la Terre au Soleil.", answer: false, explain: "Elles dépendent de l'inclinaison de l'axe terrestre." },
      { type: "mc", q: "Quel événement a lieu le 21 juin dans l'hémisphère Nord ?", options: ["Équinoxe de printemps", "Solstice d'été", "Équinoxe d'automne"], answer: 1, explain: "Le jour le plus long de l'année." },
      { type: "num", q: "Quelle est la hauteur maximale du Soleil à midi au solstice d'été à 45° N ? (déclinaison 23,4°)", answer: 68.4, tol: 0.2, unit: "°", explain: "90 − 45 + 23,4 = 68,4°." },
      { type: "num", q: "En combien de minutes la Terre tourne-t-elle de 1° de longitude ?", answer: 4, unit: "min", explain: "360° en 24 heures : 1° toutes les 4 minutes." },
      { type: "mc", q: "Pourquoi la Lune nous montre-t-elle toujours la même face ?", options: ["Rotation synchrone", "La Lune est immobile", "Les marées l'arrêtent"], answer: 0, explain: "Sa rotation et sa révolution durent toutes deux environ 27,3 jours." },
      { type: "tf", q: "Une éclipse de Lune se produit à la pleine lune.", answer: true, explain: "La Terre est entre le Soleil et la Lune, et la Lune entre dans le cône d'ombre." },
      { type: "mc", q: "Pourquoi n'y a-t-il pas d'éclipse à chaque nouvelle lune ?", options: ["L'orbite lunaire est inclinée d'environ 5° sur l'écliptique", "La Lune est trop petite", "La Terre tourne"], answer: 0, explain: "En général, la Lune passe au-dessus ou au-dessous de la ligne Soleil-Terre." },
      { type: "order", q: "Range dans l'ordre les phases de la Lune après la nouvelle lune.", items: ["Premier croissant", "Premier quartier", "Pleine lune", "Dernier quartier"], explain: "Le cycle complet dure 29,5 jours." },
      { type: "text", q: "Quel physicien français a démontré la rotation terrestre avec un pendule en 1851 ?", answer: ["foucault", "leon foucault", "léon foucault"], explain: "Léon Foucault, au Panthéon de Paris." }
    ]
  }
});
