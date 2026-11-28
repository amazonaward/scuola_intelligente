TOPIC('fr', {
  id: "l1-sci-atmosfera",
  title: "L'atmosphère et la météo",
  intro: "Nous sommes plongés dans un océan d'air qui nous protège des rayonnements, régule la température de la planète et nous apporte la pluie. Chaque jour, nous en voyons les effets : un orage soudain, un ciel limpide après la tramontane, le brouillard dans la plaine du Pô. Dans cette leçon, nous découvrons comment est faite l'<b>atmosphère</b>, pourquoi il y a du <b>vent</b>, comment se forment les <b>nuages et la pluie</b> et comment on lit une carte météo.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Comment est faite l'atmosphère",
      html: `<p>L'<b>atmosphère</b> est l'enveloppe gazeuse qui entoure la Terre, retenue par la gravité. Bien qu'elle s'étende sur des centaines de kilomètres, <b>99 %</b> de sa masse se trouve dans les 30 premiers kilomètres, et 50 % en dessous de 5,5 km.</p>
<p>La <b>composition de l'air sec</b> (en volume) :</p>
<table>
<tr><th>Gaz</th><th>Pourcentage</th></tr>
<tr><td>Diazote (N₂)</td><td>78,08 %</td></tr>
<tr><td>Dioxygène (O₂)</td><td>20,95 %</td></tr>
<tr><td>Argon (Ar)</td><td>0,93 %</td></tr>
<tr><td>Dioxyde de carbone (CO₂)</td><td>environ 0,042 % (environ 420 ppm)</td></tr>
<tr><td>Autres (néon, hélium, méthane, ozone…)</td><td>traces</td></tr>
</table>
<p>L'air contient en outre une quantité variable de <b>vapeur d'eau</b> (de presque 0 à 4 %) et de <b>particules</b> (poussières, sels marins, pollen, cendres). Même si le CO₂ n'en représente qu'une infime fraction, c'est un gaz à effet de serre : depuis 1750, sa concentration est passée d'environ 280 à plus de 420 ppm à cause de l'utilisation des combustibles fossiles.</p>
<p>L'atmosphère actuelle est très différente de l'atmosphère primitive : le dioxygène est apparu surtout grâce aux <b>cyanobactéries</b>, il y a environ 2,4 milliards d'années (<b>Grande Oxydation</b>), un événement qui a rendu possible la vie complexe.</p>`
    },
    {
      type: "svg",
      title: "Les couches de l'atmosphère",
      svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="340" fill="#f8fafc"/>
<rect x="30" y="285" width="260" height="35" fill="#fde68a" stroke="#92400e"/>
<rect x="30" y="215" width="260" height="70" fill="#bfdbfe" stroke="#1d4ed8"/>
<rect x="30" y="150" width="260" height="65" fill="#c7d2fe" stroke="#4338ca"/>
<rect x="30" y="85" width="260" height="65" fill="#ddd6fe" stroke="#6d28d9"/>
<rect x="30" y="20" width="260" height="65" fill="#1e1b4b" stroke="#312e81"/>
<text x="160" y="308" font-size="15" text-anchor="middle" fill="#1f2937">TERRE</text>
<text x="160" y="255" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">TROPOSPHÈRE</text>
<text x="160" y="187" font-size="16" text-anchor="middle" fill="#312e81" font-weight="bold">STRATOSPHÈRE</text>
<text x="160" y="122" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">MÉSOSPHÈRE</text>
<text x="160" y="58" font-size="16" text-anchor="middle" fill="#e0e7ff" font-weight="bold">THERMOSPHÈRE</text>
<g font-size="14" fill="#1f2937">
<text x="305" y="285">0 km</text>
<text x="305" y="219">~12 km (tropopause)</text>
<text x="305" y="154">~50 km</text>
<text x="305" y="89">~85 km</text>
<text x="305" y="24">au-delà de 600 km : exosphère</text>
</g>
<g font-size="14" fill="#334155">
<text x="470" y="250">météo, nuages, avions de ligne</text>
<text x="470" y="182">couche d'ozone (15-35 km)</text>
<text x="470" y="118">météores (étoiles filantes)</text>
<text x="470" y="55">aurores, ISS (environ 400 km)</text>
</g>
<text x="470" y="270" font-size="14" fill="#1d4ed8">T : de +15 à -56 °C</text>
<text x="470" y="202" font-size="14" fill="#4338ca">T : de -56 à environ 0 °C</text>
<text x="470" y="138" font-size="14" fill="#6d28d9">T : jusqu'à -90 °C</text>
<text x="470" y="74" font-size="14" fill="#312e81">T : plus de 1000 °C (mais très peu d'air)</text>
</svg>`,
      caption: "La température baisse avec l'altitude dans la troposphère, augmente dans la stratosphère (l'ozone absorbe les rayons UV), diminue à nouveau dans la mésosphère et remonte dans la thermosphère."
    },
    {
      type: "text",
      title: "Les couches, une par une",
      html: `<ul>
<li><b>Troposphère</b> (0-12 km environ ; 8 km aux pôles, 16-18 km à l'équateur) : elle contient environ 80 % de la masse de l'air et presque toute la vapeur d'eau. C'est là que se produisent les phénomènes météorologiques. La température <b>diminue d'environ 6,5 °C tous les 1000 m</b> (gradient thermique vertical), jusqu'à environ −56 °C à la <b>tropopause</b>.</li>
<li><b>Stratosphère</b> (12-50 km) : l'air y est stable et sec ; on y trouve la <b>couche d'ozone</b> (O₃), qui absorbe une grande partie des rayons ultraviolets (UV) nocifs, ce qui réchauffe l'air.</li>
<li><b>Mésosphère</b> (50-85 km) : la zone la plus froide (jusqu'à −90 °C) ; les météorites y brûlent par frottement.</li>
<li><b>Thermosphère</b> (85-600 km environ) : raréfiée, avec des températures théoriques de plus de 1000 °C dues à l'absorption des rayons X et UV, mais un objet ne s'y réchauffe pas car il y a trop peu de molécules. Elle abrite les <b>aurores polaires</b> et les satellites en orbite basse.</li>
<li><b>Exosphère</b> : transition vers l'espace.</li>
</ul>
<p>En 1985, l'équipe de <b>Joseph Farman</b> découvrit le <b>trou dans la couche d'ozone</b> au-dessus de l'Antarctique, causé par les chlorofluorocarbures (CFC) utilisés dans les réfrigérateurs et les bombes aérosols. Avec le <b>protocole de Montréal</b> (1987), presque tous les pays interdirent les CFC : la couche d'ozone se reconstitue, et c'est considéré comme l'un des plus grands succès de la coopération environnementale internationale.</p>`
    },
    {
      type: "curiosity",
      title: "L'effet de serre : ennemi ou ami ?",
      html: `<p>Sans effet de serre, la température moyenne de la Terre serait d'environ <b>−18 °C</b> au lieu des quelque <b>+15 °C</b> actuels. L'effet de serre naturel est <b>indispensable à la vie</b> : des gaz comme la vapeur d'eau, le CO₂ et le méthane laissent passer la lumière du Soleil, qui chauffe le sol, mais retiennent une partie du rayonnement infrarouge émis par la surface. Le problème est le renforcement de l'effet de serre dû aux émissions humaines : la température moyenne mondiale a déjà augmenté d'environ <b>1,1-1,2 °C</b> par rapport à l'époque préindustrielle. Le phénomène fut pressenti par <b>Fourier</b> (1824), démontré en laboratoire par <b>Tyndall</b> (1859) et calculé pour la première fois par <b>Arrhenius</b> (1896), qui prévit qu'un doublement du CO₂ réchaufferait la Terre de plusieurs degrés.</p>`
    },
    {
      type: "text",
      title: "La pression atmosphérique",
      html: `<p>L'air a un poids : une colonne d'air allant de la surface jusqu'aux limites de l'atmosphère, sur 1 cm², pèse environ 1 kg. La <b>pression atmosphérique</b> est la force que l'air exerce par unité de surface. Au niveau de la mer, elle vaut en moyenne <b>1013 hPa</b> (hectopascals), soit <b>1 atmosphère</b>, ou encore 760 mm de mercure.</p>
<p>C'est <b>Evangelista Torricelli</b>, élève de Galilée, qui le démontra en 1643 : en retournant un tube de verre rempli de mercure dans une cuve, le mercure descendit jusqu'à former une colonne de 76 cm, soutenue par le poids de l'air sur le mercure de la cuve : le <b>baromètre</b> était né. En 1648, <b>Blaise Pascal</b> fit répéter l'expérience par son beau-frère sur le puy de Dôme et constata qu'en montant en altitude la colonne baissait : il y a moins d'air au-dessus.</p>
<p>Comment la pression varie :</p>
<ul>
<li><b>avec l'altitude</b> : elle diminue, d'environ 1 hPa tous les 8 m dans les premiers kilomètres ; elle est divisée par deux environ tous les 5,5 km (au sommet de l'Everest, elle vaut environ un tiers de celle du niveau de la mer, environ 330 hPa) ;</li>
<li><b>avec la température</b> : l'air chaud est plus léger, il monte donc et crée une zone de <b>basse pression</b> (<b>dépression ou cyclone</b>) ; l'air froid est plus lourd et descend, créant une <b>haute pression</b> (<b>anticyclone</b>).</li>
</ul>
<p>Sur les cartes météorologiques, les <b>isobares</b> sont des lignes qui relient les points de même pression. Dans une dépression, le temps est en général perturbé ; dans un anticyclone, il est beau.</p>`
    },
    {
      type: "example",
      title: "Température et pression en altitude",
      html: `<p>À Milan (120 m), il fait <b>20 °C</b>. Quelle température fait-il, dans les mêmes conditions, au sommet du mont Rose (pointe Gnifetti, 4554 m) ?</p>
<ol>
<li>Dénivelé : 4554 − 120 = 4434 m ≈ 4,43 km.</li>
<li>Baisse : 4,43 × 6,5 = 28,8 °C.</li>
<li>T ≈ 20 − 28,8 = <b>environ −8,8 °C</b>.</li>
</ol>
<p>La pression au sommet sera d'environ 580 hPa, soit environ 57 % de celle du niveau de la mer : c'est pourquoi les alpinistes respirent « moins d'oxygène » (le pourcentage d'O₂ est toujours de 21 %, mais chaque inspiration en contient moins de molécules).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : l'air et la pression",
      questions: [
        { type: "mc", q: "Quel est le gaz le plus abondant dans l'air ?", options: ["Dioxygène", "Diazote", "Dioxyde de carbone"], answer: 1, explain: "Le diazote représente 78 %." },
        { type: "mc", q: "Dans quelle couche se produisent les phénomènes météorologiques ?", options: ["Troposphère", "Stratosphère", "Thermosphère"], answer: 0, explain: "C'est la couche la plus basse, qui contient la plus grande partie de la vapeur d'eau." },
        { type: "tf", q: "Dans un anticyclone, le temps est généralement beau.", answer: true, explain: "L'air descend, se réchauffe et les nuages se dissipent." }
      ]
    },
    {
      type: "text",
      title: "Le vent",
      html: `<p>Le <b>vent</b> est de l'air en mouvement horizontal, des zones de <b>haute pression</b> vers les zones de <b>basse pression</b>, comme l'eau qui descend une pente. Il est d'autant plus fort que les isobares sont rapprochées (plus grand <b>gradient</b> de pression).</p>
<ul>
<li>À cause de la <b>force de Coriolis</b>, le vent est dévié : <b>vers la droite</b> dans l'hémisphère Nord, vers la gauche dans l'hémisphère Sud. C'est pourquoi, autour d'une dépression, l'air tourne dans le sens <b>inverse des aiguilles d'une montre</b> dans l'hémisphère Nord (et converge vers le centre), et autour d'un anticyclone dans le sens des aiguilles d'une montre.</li>
<li>On le mesure avec l'<b>anémomètre</b> (vitesse, en m/s, en nœuds ou en km/h) et la <b>manche à air</b> ou la girouette (direction). La direction indique toujours d'où il souffle : le mistral vient du nord-ouest.</li>
<li>L'<b>échelle de Beaufort</b> (1805) le classe de 0 (calme) à 12 (ouragan, plus de 118 km/h).</li>
</ul>
<p><b>Vents locaux</b> : la <b>brise de mer</b> le jour (la terre se réchauffe plus que la mer, l'air chaud monte et l'air frais de la mer le remplace : le vent va de la mer vers la terre) et la <b>brise de terre</b> la nuit ; les <b>brises de montagne et de vallée</b> ; le <b>foehn</b>, vent chaud et sec qui descend après avoir franchi les montagnes.</p>
<p><b>Vents réguliers</b> : les <b>alizés</b> soufflent vers l'équateur depuis le nord-est (hémisphère Nord) et depuis le sud-est (hémisphère Sud) ; les vents d'ouest aux latitudes moyennes ; les <b>moussons</b> changent de direction selon la saison et apportent les pluies en Inde et en Asie du Sud-Est en été. Sur les mers italiennes, retiens la rose des vents traditionnelle : tramontane (N), grégal (NE), levant (E), sirocco (SE), ostro (S), libeccio (SO), ponant (O), mistral (<i>maestrale</i>, NO).</p>`
    },
    {
      type: "svg",
      title: "Comment naît le vent : la brise de mer",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#e0f2fe"/>
<rect x="0" y="210" width="320" height="90" fill="#38bdf8"/>
<rect x="320" y="210" width="320" height="90" fill="#d6a85f"/>
<circle cx="560" cy="45" r="28" fill="#facc15"/>
<text x="160" y="270" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">MER (plus froide)</text>
<text x="480" y="270" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">TERRE (plus chaude)</text>
<g stroke="#dc2626" stroke-width="4" fill="none"><path d="M480 200 L480 110"/><path d="M455 200 L455 120"/><path d="M505 200 L505 120"/></g>
<polygon points="480,95 468,115 492,115" fill="#dc2626"/><polygon points="455,105 443,125 467,125" fill="#dc2626"/><polygon points="505,105 493,125 517,125" fill="#dc2626"/>
<text x="480" y="80" font-size="14" text-anchor="middle" fill="#7f1d1d" font-weight="bold">l'air chaud monte : basse pression</text>
<path d="M240 200 L420 200" stroke="#1d4ed8" stroke-width="5" fill="none"/><polygon points="436,200 416,190 416,210" fill="#1d4ed8"/>
<text x="330" y="190" font-size="15" text-anchor="middle" fill="#1e3a8a" font-weight="bold">brise de mer</text>
<path d="M420 70 L240 70" stroke="#6b7280" stroke-width="3" fill="none" stroke-dasharray="6 5"/><polygon points="224,70 244,60 244,80" fill="#6b7280"/>
<text x="330" y="60" font-size="14" text-anchor="middle" fill="#374151">retour en altitude</text>
<text x="160" y="150" font-size="14" text-anchor="middle" fill="#1e3a8a" font-weight="bold">air froid : haute pression</text>
</svg>`,
      caption: "Le jour, la terre se réchauffe plus que la mer : l'air chaud monte et l'air frais de la mer accourt pour le remplacer."
    },
    {
      type: "text",
      title: "Humidité, nuages et précipitations",
      html: `<p>L'<b>humidité absolue</b> est la masse de vapeur d'eau par m³ d'air (g/m³). Mais l'air ne peut pas en contenir autant qu'il veut : il existe un maximum, la <b>saturation</b>, qui augmente avec la température (à 0 °C environ 4,8 g/m³ ; à 20 °C environ 17,3 g/m³ ; à 30 °C environ 30 g/m³). L'<b>humidité relative</b> est le rapport, en pourcentage, entre la vapeur présente et la vapeur maximale à la même température : HR = (humidité absolue / maximum) × 100. On la mesure avec l'<b>hygromètre</b>. À 100 %, l'air est saturé. On appelle <b>point de rosée</b> la température à laquelle l'air, en se refroidissant, devient saturé.</p>
<p>Quand l'air saturé se refroidit encore, la vapeur se <b>condense</b> sur de petites particules (noyaux de condensation) en formant des gouttelettes : des <b>nuages</b> (en altitude) ou du <b>brouillard</b> (au sol). Près du sol se forment la <b>rosée</b> ou le <b>givre</b> (sous 0 °C).</p>
<p>Les nuages se classent selon leur forme et leur altitude (Luke Howard, 1803) :</p>
<ul>
<li><b>cirrus</b>, filamenteux et fins (au-delà de 6 km, cristaux de glace) ;</li>
<li><b>cumulus</b>, en forme de chou-fleur (développement vertical ; s'ils sont énormes, ce sont des <b>cumulonimbus</b>, qui apportent orages et grêle) ;</li>
<li><b>stratus</b>, couches uniformes et grises (à basse altitude : brouillard élevé, bruine) ;</li>
<li><b>nimbus</b> (<i>nimbus</i> = pluie) : les nimbostratus, qui donnent des pluies continues.</li>
</ul>
<p>Les gouttelettes d'un nuage (environ 0,02 mm) ne tombent pas : elles sont trop légères. Pour devenir une goutte de pluie (1-3 mm), elles doivent s'unir (coalescence) ou grossir sur de la glace. Les <b>précipitations</b> peuvent être de la pluie, de la neige, de la grêle (grêlons de glace qui montent et descendent plusieurs fois dans le cumulonimbus) et du grésil. On les mesure avec le <b>pluviomètre</b>, en mm (1 mm = 1 L/m²).</p>`
    },
    {
      type: "example",
      title: "Humidité relative et point de rosée",
      html: `<p>Un soir d'été, à 20 °C, l'air contient <b>10 g/m³</b> de vapeur. À 20 °C, le maximum est de <b>17,3 g/m³</b>.</p>
<ol>
<li>HR = 10 / 17,3 × 100 ≈ <b>58 %</b>.</li>
<li>La nuit, la température descend à environ 11 °C, où le maximum est d'environ 10 g/m³ : l'air devient saturé (HR = 100 %).</li>
<li>Le <b>point de rosée</b> est d'environ 11 °C : de la rosée se dépose sur l'herbe, et si le ciel est dégagé et sans vent, du brouillard peut apparaître.</li>
</ol>
<p>C'est pourquoi les vitres de la voiture s'embuent en hiver : l'air chaud et humide de l'habitacle touche la vitre froide, descend sous le point de rosée et se condense.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les nuages et la pluie",
      intro: "Du nuage à la goutte, en passant par l'air qui monte.",
      tabs: [
        {
          label: "🥶 La bouteille froide",
          html: `<p>Expérience : sors du réfrigérateur une bouteille ou une canette froide par une journée chaude. Au bout de quelques minutes, elle se couvre de gouttelettes. L'eau n'est pas « passée à travers » le verre : l'air proche de la paroi s'est refroidi sous le point de rosée, et sa vapeur s'est condensée. C'est la même chose qui se passe dans le ciel quand l'air monte et se refroidit.</p>`
        },
        {
          label: "⛰️ Pourquoi il pleut davantage en montagne",
          html: `<p>Quand un vent humide rencontre une chaîne de montagnes, il est obligé de monter. En montant, il se détend et se refroidit (environ 6-10 °C pour 1000 m), la vapeur se condense et forme des nuages et des pluies (<b>précipitations orographiques</b>). Sur le versant opposé, l'air descend, se réchauffe et s'assèche : c'est le <b>foehn</b>, ou « ombre pluviométrique ». Voilà pourquoi les Alpes reçoivent beaucoup plus de précipitations que les fonds de vallée et pourquoi la plaine du Pô reçoit en hiver un vent sec et froid quand la tramontane franchit les montagnes.</p>`
        },
        {
          label: "🌩️ Pourquoi il y a des orages",
          html: `<p>En été, le sol se réchauffe, l'air chaud et humide monte en colonne (<b>convection</b>), se condense et libère de la chaleur (la <b>chaleur latente</b>), ce qui le fait monter encore. Un cumulonimbus de 10-12 km de haut se développe. Dans les nuages, les cristaux de glace qui se heurtent se chargent électriquement : le haut positivement, la base négativement. Quand la différence de potentiel est assez élevée, l'<b>éclair</b> jaillit ; il chauffe l'air à environ 30 000 °C et le fait se dilater violemment : c'est le <b>tonnerre</b>. La lumière se propage à 300 000 km/s, le son à environ 340 m/s : en comptant les secondes entre l'éclair et le tonnerre et en divisant par 3, tu obtiens la distance de la foudre en km.</p>`
        }
      ]
    },
    {
      type: "text",
      title: "Perturbations, fronts et prévisions météo",
      html: `<p>Une <b>masse d'air</b> est un grand volume d'air de température et d'humidité uniformes. Quand des masses d'air différentes se rencontrent, leur surface de séparation s'appelle un <b>front</b> :</p>
<ul>
<li><b>front chaud</b> : l'air chaud monte lentement au-dessus de l'air froid : nuages en couches, pluies faibles mais longues, puis hausse de la température ;</li>
<li><b>front froid</b> : l'air froid s'insinue sous l'air chaud et le pousse vers le haut : cumulonimbus, averses et orages violents mais brefs, puis baisse de la température et ciel qui se dégage.</li>
</ul>
<p>Les <b>perturbations</b> de nos latitudes naissent de la rencontre entre l'air polaire et l'air subtropical ; elles arrivent de l'ouest (de l'Atlantique). Sur l'Italie agissent aussi l'<b>anticyclone des Açores</b> (été stable) et l'<b>anticyclone russo-sibérien</b> (froid hivernal).</p>
<p>Le <b>temps</b> (météorologique) est l'état de l'atmosphère en un lieu et à un moment donnés (température, pression, vent, humidité, nuages, précipitations) : il change d'heure en heure. Le <b>climat</b>, lui, est l'ensemble des conditions moyennes sur au moins 30 ans. On dit : « le climat, c'est ce à quoi tu t'attends ; le temps, c'est ce que tu trouves ».</p>
<p>Les <b>prévisions</b> reposent sur les données des stations au sol, des ballons-sondes, des radars, des satellites, et sur des <b>modèles numériques</b> qui résolvent par ordinateur les équations de la dynamique des fluides et de la thermodynamique de l'atmosphère : l'idée est de <b>Lewis Fry Richardson</b> (1922), et la première prévision automatique par ordinateur date de 1950. Au-delà d'environ une semaine, la prévision se dégrade car l'atmosphère est un système <b>chaotique</b> : <b>Edward Lorenz</b>, dans les années 1960, découvrit que de petites différences initiales grandissent rapidement (le fameux « effet papillon »).</p>`
    },
    {
      type: "curiosity",
      title: "Les ouragans et les grandes perturbations",
      html: `<p>Un <b>cyclone tropical</b> (ouragan dans l'Atlantique, typhon dans le Pacifique ouest) se forme au-dessus des océans dont l'eau de surface dépasse environ 26,5 °C : la vapeur qui se condense libère d'énormes quantités de chaleur, qui alimentent la tempête, avec des vents de plus de 118 km/h et un « œil » central calme. En 1900, l'ouragan qui frappa Galveston (Texas) fit environ 8000 morts. En Méditerranée se forment parfois des <b>medicanes</b> (<i>Mediterranean hurricanes</i>), des cyclones de structure semblable mais plus petits et plus faibles.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte de l'atmosphère : touche les nœuds et découvre pourquoi",
      nodes: [
        { id: "atm", label: "Atmosphère", x: 50, y: 6, color: "#3b82f6", html: "Enveloppe gazeuse : 78 % de diazote, 21 % de dioxygène.", why: "L'air fut considéré comme un élément simple jusqu'au XVIIIe siècle : <b>Priestley</b> (1774) et <b>Scheele</b> isolèrent l'oxygène, et <b>Lavoisier</b> comprit que l'air est un mélange de deux gaz principaux." },
        { id: "strati", label: "Couches", x: 20, y: 28, color: "#6366f1", html: "Troposphère, stratosphère, mésosphère, thermosphère.", why: "En 1902, <b>Léon Teisserenc de Bort</b>, grâce à des ballons-sondes sans équipage, découvrit qu'au-delà d'environ 11 km la température cesse de baisser : ce fut la découverte de la stratosphère." },
        { id: "pres", label: "Pression", x: 80, y: 28, color: "#f59e0b", html: "Poids de l'air : 1013 hPa au niveau de la mer.", why: "<b>Torricelli</b> (1643) mesura la pression et démontra l'existence du vide ; <b>Pascal</b> (1648) confirma qu'elle diminue avec l'altitude." },
        { id: "vento", label: "Vent", x: 50, y: 48, color: "#22c55e", html: "Air qui va des hautes vers les basses pressions.", why: "Le vent est une tentative de l'atmosphère de rééquilibrer les différences de pression ; la force de Coriolis (1835) le dévie vers la droite dans l'hémisphère Nord et explique le sens de rotation des cyclones." },
        { id: "temp", label: "Température", x: 15, y: 56, color: "#ef4444", html: "Elle dépend du Soleil, de l'altitude, de l'effet de serre.", why: "L'effet de serre naturel maintient la Terre à +15 °C ; <b>Arrhenius</b> (1896) calcula qu'en doublant le CO₂ la température augmenterait de plusieurs degrés, anticipant d'un siècle la question climatique." },
        { id: "umid", label: "Humidité et nuages", x: 80, y: 64, color: "#0ea5e9", html: "La vapeur se condense quand elle se refroidit.", why: "L'air plus chaud contient plus de vapeur : quand il monte et se refroidit, la vapeur en excès se condense et forme des nuages. Luke Howard, en 1803, les classa avec les noms latins encore utilisés aujourd'hui." },
        { id: "prec", label: "Précipitations", x: 50, y: 82, color: "#14b8a6", html: "Pluie, neige, grêle.", why: "Elles se forment quand les gouttelettes deviennent assez lourdes pour tomber ; elles peuvent être convectives (orages), orographiques (sur les montagnes) ou frontales." },
        { id: "fronti", label: "Fronts et perturbations", x: 18, y: 84, color: "#a855f7", html: "Rencontre de masses d'air différentes.", why: "La théorie des fronts fut élaborée par l'école norvégienne de <b>Vilhelm Bjerknes</b> en 1918-1922, par analogie avec les fronts de la Première Guerre mondiale." },
        { id: "clima", label: "Climat", x: 85, y: 90, color: "#64748b", html: "Moyenne des conditions sur au moins 30 ans.", why: "Le temps est chaotique et imprévisible au-delà d'environ 10 jours (Lorenz), tandis que le climat est la statistique à long terme, prévisible en moyenne : c'est pourquoi on peut l'étudier sur des dizaines d'années." }
      ],
      edges: [
        ["atm", "strati", "est divisée en"],
        ["atm", "pres", "exerce"],
        ["pres", "vento", "engendre"],
        ["temp", "pres", "modifie"],
        ["temp", "umid", "règle"],
        ["umid", "prec", "produit"],
        ["fronti", "prec", "causent"],
        ["vento", "fronti", "apporte"],
        ["prec", "clima", "forment"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : vent et nuages",
      questions: [
        { type: "mc", q: "Le vent souffle…", options: ["des hautes vers les basses pressions", "des basses vers les hautes pressions", "toujours de la mer vers la terre"], answer: 0, explain: "Comme l'eau qui descend d'un niveau plus haut vers un niveau plus bas." },
        { type: "num", q: "Une humidité absolue de 8,65 g/m³ à 20 °C (maximum 17,3 g/m³) : quelle est l'humidité relative ?", answer: 50, unit: "%", explain: "8,65 / 17,3 = 0,5 → 50 %." },
        { type: "tf", q: "Les cumulonimbus sont des nuages qui peuvent donner des orages et de la grêle.", answer: true, explain: "Ce sont des nuages à fort développement vertical." }
      ]
    }
  ],
  glossary: [
    { t: "Atmosphère", d: "Enveloppe gazeuse qui entoure la Terre." },
    { t: "Troposphère", d: "Couche la plus basse, où se développent les phénomènes météorologiques." },
    { t: "Ozone", d: "Gaz (O₃) de la stratosphère qui absorbe les rayons UV." },
    { t: "Pression atmosphérique", d: "Force exercée par l'air par unité de surface : 1013 hPa au niveau de la mer." },
    { t: "Isobare", d: "Ligne qui relie des points de même pression." },
    { t: "Anticyclone / dépression", d: "Zone de haute pression (beau temps) / de basse pression (temps perturbé)." },
    { t: "Humidité relative", d: "Rapport, en pourcentage, entre la vapeur présente et la vapeur maximale à cette température." },
    { t: "Point de rosée", d: "Température à laquelle l'air devient saturé et la vapeur se condense." },
    { t: "Front", d: "Surface de séparation entre deux masses d'air différentes." },
    { t: "Temps (météorologique)", d: "État de l'atmosphère en un lieu et à un moment donnés." },
    { t: "Climat", d: "Conditions atmosphériques moyennes d'un lieu, sur au moins 30 ans." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quel est le pourcentage de dioxygène dans l'air ?", options: ["Environ 21 %", "Environ 78 %", "Environ 50 %"], answer: 0, explain: "Le dioxygène représente 20,95 % ; le diazote 78 %." },
      { type: "mc", q: "Où se trouve la couche d'ozone ?", options: ["Troposphère", "Stratosphère", "Thermosphère"], answer: 1, explain: "Entre 15 et 35 km environ." },
      { type: "num", q: "De combien de °C la température baisse-t-elle quand on monte de 2000 m dans la troposphère (6,5 °C/km) ?", answer: 13, unit: "°C", explain: "2 × 6,5 = 13 °C." },
      { type: "mc", q: "Qui a mesuré le premier la pression atmosphérique avec du mercure ?", options: ["Torricelli", "Galilée", "Newton"], answer: 0, explain: "Evangelista Torricelli, en 1643." },
      { type: "tf", q: "Dans une dépression (basse pression), le temps est généralement perturbé.", answer: true, explain: "L'air monte, se condense et forme des nuages et des précipitations." },
      { type: "mc", q: "Pourquoi indique-t-on la direction du vent par son point d'origine ?", options: ["C'est une convention : vent du nord = qui vient du nord", "Parce que le vent va vers le nord", "Parce que c'est plus simple"], answer: 0, explain: "La tramontane, par exemple, souffle du nord vers le sud." },
      { type: "num", q: "L'air à 25 °C contient 11,5 g/m³ de vapeur ; le maximum à 25 °C est de 23 g/m³. Quelle est l'humidité relative ?", answer: 50, unit: "%", explain: "11,5 / 23 = 50 %." },
      { type: "order", q: "Range les couches de l'atmosphère du bas vers le haut.", items: ["Troposphère", "Stratosphère", "Mésosphère", "Thermosphère"], explain: "Du sol vers l'espace." },
      { type: "text", q: "Comment s'appelle l'instrument qui mesure la pression ?", answer: ["baromètre", "le baromètre", "barometre", "un baromètre"], explain: "Inventé par Torricelli en 1643." },
      { type: "mc", q: "Le climat, c'est…", options: ["l'état de l'atmosphère en ce moment", "la moyenne des conditions atmosphériques sur au moins 30 ans", "la température maximale de la journée"], answer: 1, explain: "Le temps change d'heure en heure ; le climat décrit le comportement typique d'un lieu." }
    ]
  }
});
