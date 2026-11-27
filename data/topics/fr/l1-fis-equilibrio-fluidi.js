TOPIC('fr', {
  id: "l1-fis-equilibrio-fluidi",
  title: "L'équilibre des fluides",
  intro: "Pourquoi a-t-on mal aux oreilles quand on plonge en profondeur ? Pourquoi un navire en acier flotte-t-il alors qu'une épingle coule ? Comment une petite pression du pied sur la pédale peut-elle arrêter une voiture d'une tonne ? Les réponses se trouvent dans la <b>pression</b> et dans trois lois qui portent les noms de grands savants : <b>Pascal</b>, <b>Stevin</b> et <b>Archimède</b>. Dans cette leçon, nous étudions les fluides, c'est-à-dire les liquides et les gaz, lorsqu'ils sont <b>au repos</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce que la pression ?",
      html: `<p>Marcher dans la neige fraîche avec des chaussures de montagne te fait t'enfoncer, avec des skis non. Le poids est le même, mais la <b>surface</b> sur laquelle il se répartit change. Pour décrire cet effet, on utilise la <b>pression</b> :</p>
<p style="text-align:center"><b>p = F / S</b></p>
<p>où F est la force <b>perpendiculaire</b> à la surface et S l'aire sur laquelle elle agit. Dans le Système international, l'unité est le <b>pascal</b> (Pa) : 1 Pa = 1 N/m². C'est une pression minuscule (une feuille de papier posée sur une table exerce environ 1 Pa !), c'est pourquoi on utilise souvent :</p>
<ul>
<li>l'<b>hectopascal</b> (hPa) = 100 Pa, utilisé dans les prévisions météo ;</li>
<li>l'<b>atmosphère</b> (atm) : 1 atm = 101 325 Pa ≈ 1013 hPa, la pression moyenne de l'air au niveau de la mer ;</li>
<li>le <b>bar</b> : 1 bar = 100 000 Pa (la pression des pneus se mesure en bars) ;</li>
<li>le <b>millimètre de mercure</b> (mmHg) : 1 atm = 760 mmHg.</li>
</ul>
<p>Exemple : un clou et un marteau. La même force de 100 N, appliquée sur la tête du clou (environ 1 cm² = 0,0001 m²), donne p = 100/0,0001 = 1 000 000 Pa, mais sur la pointe (0,01 mm² = 10<sup>−8</sup> m²) elle donne p = 10 000 000 000 Pa : voilà pourquoi la pointe pénètre dans le bois.</p>`
    },
    {
      type: "example",
      title: "Exemple : talon aiguille contre chaussure de montagne",
      html: `<p>Une personne de 60 kg (P = 588 N) se tient debout sur un talon aiguille d'aire 1 cm² (0,0001 m²), ou bien sur deux chaussures de montagne, chacune avec une semelle de 200 cm² (0,02 m²).</p>
<ol>
<li>Talon aiguille (tout le poids sur un talon) : p = 588 / 0,0001 = <b>5 880 000 Pa</b> (environ 58 atm !).</li>
<li>Chaussures de montagne (deux semelles, S totale = 0,04 m²) : p = 588 / 0,04 = <b>14 700 Pa</b> (environ 0,15 atm).</li>
</ol>
<p>Le talon exerce une pression presque 400 fois plus grande : c'est pourquoi il peut abîmer un parquet, contrairement aux chaussures de montagne. C'est aussi pour cela que les skis, les raquettes à neige et les chenilles des tracteurs répartissent le poids sur de grandes surfaces.</p>`
    },
    {
      type: "text",
      title: "Le principe de Pascal et la presse hydraulique",
      html: `<p>Les liquides sont (pratiquement) <b>incompressibles</b> et transmettent la pression dans toutes les directions. Blaise Pascal (1623-1662) l'a énoncé ainsi :</p>
<p style="text-align:center"><b>Une pression exercée en un point d'un fluide en équilibre se transmet intégralement en tout point du fluide et aux parois du récipient.</b></p>
<p>Application : la <b>presse hydraulique</b>. Deux pistons de sections différentes, S<sub>1</sub> (petite) et S<sub>2</sub> (grande), sont reliés par un liquide. Si l'on pousse le petit avec F<sub>1</sub>, la pression p = F<sub>1</sub>/S<sub>1</sub> se transmet au grand, qui exerce F<sub>2</sub> = p·S<sub>2</sub> :</p>
<p style="text-align:center"><b>F<sub>1</sub> / S<sub>1</sub> = F<sub>2</sub> / S<sub>2</sub></b></p>
<p>Si S<sub>2</sub> vaut 100 fois S<sub>1</sub>, la force est multipliée par 100. Mais attention : le liquide ne se crée ni ne disparaît, donc le petit piston doit se déplacer <b>100 fois plus</b> que le grand. Le travail (force × déplacement) est le même : comme pour le levier, on ne gagne pas d'énergie, on échange de la force contre du déplacement.</p>
<p>Le principe de Pascal est à la base des freins hydrauliques des voitures, des ponts élévateurs des garages, des presses et des bras des pelleteuses.</p>`
    },
    {
      type: "svg",
      title: "La presse hydraulique",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<path d="M90 120 L90 230 L510 230 L510 100 L420 100 L420 190 L180 190 L180 120 Z" fill="#7dd3fc" stroke="#0369a1" stroke-width="3"/>
<rect x="95" y="100" width="80" height="18" fill="#64748b"/>
<rect x="125" y="60" width="20" height="40" fill="#64748b"/>
<line x1="135" y1="20" x2="135" y2="56" stroke="#16a34a" stroke-width="5"/>
<polygon points="135,58 126,42 144,42" fill="#16a34a"/>
<text x="150" y="35" font-size="18" fill="#15803d" font-weight="bold">F1 (petite)</text>
<text x="135" y="260" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">S1</text>
<rect x="425" y="78" width="130" height="18" fill="#64748b"/>
<rect x="470" y="40" width="40" height="38" fill="#64748b"/>
<rect x="445" y="14" width="90" height="26" rx="4" fill="#ef4444"/>
<text x="490" y="33" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">charge</text>
<line x1="590" y1="40" x2="590" y2="92" stroke="#16a34a" stroke-width="5"/>
<polygon points="590,38 582,54 598,54" fill="#16a34a"/>
<text x="480" y="260" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">S2 (grande)</text>
<text x="300" y="215" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">même pression partout</text>
<text x="300" y="130" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">F1 / S1 = F2 / S2</text>
</svg>`,
      caption: "La pression p = F/S est la même dans les deux pistons. Si S2 = 20·S1, alors F2 = 20·F1, mais le petit piston descend d'une distance 20 fois plus grande."
    },
    {
      type: "quiz",
      title: "Mini-quiz : pression et Pascal",
      questions: [
        { type: "num", q: "Une force de 200 N agit perpendiculairement sur une surface de 0,5 m². Quelle est la pression (en Pa) ?", answer: 400, unit: "Pa", explain: "p = F/S = 200 / 0,5 = 400 Pa." },
        { type: "num", q: "Dans une presse hydraulique, le petit piston a une section de 4 cm² et le grand de 100 cm². Si l'on exerce 50 N sur le petit, quelle force (en N) obtient-on sur le grand ?", answer: 1250, unit: "N", explain: "F2 = F1·S2/S1 = 50 × 100/4 = 1250 N." },
        { type: "tf", q: "La presse hydraulique fait économiser du travail, en plus de la force.", answer: false, explain: "Le travail reste le même : la force est multipliée, mais le déplacement du grand piston est proportionnellement plus petit." }
      ]
    },
    {
      type: "text",
      title: "La loi de Stevin",
      html: `<p>Dans un liquide au repos, la pression <b>augmente avec la profondeur</b> : en chaque point plus bas s'ajoute le poids de la colonne de liquide située au-dessus. Simon Stevin (1548-1620), mathématicien et ingénieur flamand, a formulé cette loi, appelée aussi <b>principe fondamental de l'hydrostatique</b> :</p>
<p style="text-align:center"><b>p = p<sub>0</sub> + ρ · g · h</b></p>
<ul>
<li>p<sub>0</sub> est la pression à la surface (en général la pression atmosphérique) ;</li>
<li>ρ est la <b>masse volumique</b> du liquide (eau : environ 1000 kg/m³) ;</li>
<li>g = 9,8 m/s² ;</li>
<li>h est la <b>profondeur</b>.</li>
</ul>
<p>On déduit de la formule que :</p>
<ul>
<li>la pression dépend <b>seulement de la profondeur</b> et de la masse volumique, pas de la forme du récipient ni de la quantité d'eau (le « paradoxe hydrostatique ») ;</li>
<li>tous les points situés à la même profondeur ont la même pression : la surface libre d'un liquide est <b>horizontale</b> ;</li>
<li>dans des <b>vases communicants</b>, un liquide homogène atteint le même niveau dans toutes les branches ; si les liquides sont différents, les hauteurs sont <b>inversement proportionnelles</b> aux masses volumiques (ρ<sub>1</sub>h<sub>1</sub> = ρ<sub>2</sub>h<sub>2</sub>).</li>
</ul>
<p>Tous les <b>10 m</b> de profondeur dans l'eau, la pression augmente d'environ <b>1 atm</b> (ρgh = 1000·9,8·10 ≈ 98 000 Pa). À 30 m, un plongeur subit donc une pression totale d'environ 4 atm : 1 due à l'air plus 3 dues à l'eau.</p>`
    },
    {
      type: "example",
      title: "Exemple : la pression dans une piscine et au fond de la mer",
      html: `<p>Calculons la pression <b>due à l'eau</b> à différentes profondeurs (ρ = 1000 kg/m³, g = 9,8 m/s²) :</p>
<ul>
<li>3 m (fond d'une piscine profonde) : ρgh = 1000 × 9,8 × 3 = 29 400 Pa, environ 0,3 atm ;</li>
<li>40 m (limite pour une plongée de loisir profonde) : 392 000 Pa, environ 3,9 atm d'eau seule, environ 4,9 atm au total ;</li>
<li>environ 10 900 m (fosse des Mariannes, en son point le plus profond) : environ 1100 atm : sur chaque centimètre carré pèse un poids de plus d'une tonne.</li>
</ul>
<p>C'est pourquoi les sous-marins ont des coques résistantes et les bathyscaphes sont des sphères d'acier ou de titane épais : la sphère répartit mieux la pression. Sur notre tympan, à seulement 2 m de profondeur, la différence de pression est déjà sensible (environ 0,2 atm) et nous fait « sentir » l'oreille.</p>`
    },
    {
      type: "svg",
      title: "La pression augmente avec la profondeur",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="40" width="260" height="230" fill="#7dd3fc" stroke="#0369a1" stroke-width="3"/>
<line x1="60" y1="40" x2="320" y2="40" stroke="#0369a1" stroke-width="4"/>
<text x="190" y="30" font-size="16" text-anchor="middle" fill="#0369a1" font-weight="bold">surface : p0</text>
<g stroke="#1e3a8a" stroke-width="3" fill="#1e3a8a">
<line x1="150" y1="90" x2="205" y2="90"/><polygon points="210,90 198,84 198,96"/>
<line x1="150" y1="170" x2="225" y2="170"/><polygon points="230,170 218,164 218,176"/>
<line x1="150" y1="250" x2="245" y2="250"/><polygon points="250,250 238,244 238,256"/>
</g>
<text x="75" y="95" font-size="16" fill="#1f2937">h = 5 m</text>
<text x="75" y="175" font-size="16" fill="#1f2937">h = 15 m</text>
<text x="75" y="255" font-size="16" fill="#1f2937">h = 25 m</text>
<text x="360" y="95" font-size="17" fill="#1f2937">p = 1 + 0,5 = 1,5 atm</text>
<text x="360" y="175" font-size="17" fill="#1f2937">p = 1 + 1,5 = 2,5 atm</text>
<text x="360" y="255" font-size="17" fill="#1f2937">p = 1 + 2,5 = 3,5 atm</text>
<text x="360" y="50" font-size="16" fill="#475569">flèche plus longue = pression plus forte</text>
</svg>`,
      caption: "Chaque tranche de 10 m d'eau ajoute environ 1 atm. Les flèches montrent que la pression agit perpendiculairement aux parois et augmente quand on descend."
    },
    {
      type: "text",
      title: "La pression atmosphérique et Torricelli",
      html: `<p>L'air aussi a un poids : au-dessus de chaque mètre carré de la surface terrestre se trouve une colonne d'air haute de plusieurs dizaines de km qui pèse environ 100 000 N. C'est pourquoi la pression atmosphérique au niveau de la mer vaut environ <b>1 atm = 101 325 Pa</b>.</p>
<p>En <b>1643</b>, Evangelista Torricelli, élève de Galilée, remplit de mercure un tube de verre long d'environ un mètre, fermé à une extrémité, et le retourna dans une cuve de mercure. Le mercure descendit jusqu'à se stabiliser à environ <b>760 mm</b> au-dessus du niveau de la cuve, laissant en haut un espace vide (le « vide de Torricelli »). C'était la pression de l'air qui soutenait la colonne : le <b>baromètre</b> était né. Le mercure est 13,6 fois plus dense que l'eau : avec de l'eau, la colonne mesurerait plus de 10 m (environ 10,3 m).</p>
<p>Vers 1654, Otto von Guericke démontra la force de la pression atmosphérique avec les <b>hémisphères de Magdebourg</b> : après avoir retiré l'air de deux hémisphères en cuivre, deux attelages de chevaux ne parvinrent pas à les séparer. En altitude, la pression diminue : vers 5500 m, elle vaut environ la moitié de celle au niveau de la mer, et c'est pourquoi en montagne l'eau bout à moins de 100 °C et les paquets de chips gonflent en avion.</p>`
    },
    {
      type: "text",
      title: "Le principe d'Archimède",
      html: `<p>Pourquoi un caillou pèse-t-il moins dans l'eau et pourquoi est-il difficile de maintenir un ballon sous l'eau ? Parce que tout corps plongé dans un fluide reçoit une poussée vers le haut, qu'Archimède de Syracuse (IIIe siècle av. J.-C.) a formulée ainsi :</p>
<p style="text-align:center"><b>Tout corps plongé dans un fluide reçoit une poussée verticale, dirigée vers le haut, égale au poids du fluide déplacé.</b></p>
<p style="text-align:center"><b>F<sub>A</sub> = ρ<sub>fluide</sub> · V<sub>immergé</sub> · g</b></p>
<p>D'où vient-elle ? D'après la loi de Stevin, la pression sur la face inférieure du corps (plus profonde) est plus grande que celle sur la face supérieure : la différence donne une force nette vers le haut, qui ne dépend que du volume de fluide déplacé.</p>
<p>Quand on lâche un corps de masse volumique ρ<sub>c</sub> dans un fluide de masse volumique ρ<sub>f</sub>, on compare son poids (ρ<sub>c</sub> V g) et la poussée (ρ<sub>f</sub> V g) :</p>
<ul>
<li>ρ<sub>c</sub> &gt; ρ<sub>f</sub> : le poids l'emporte, le corps <b>coule</b> ;</li>
<li>ρ<sub>c</sub> = ρ<sub>f</sub> : équilibre en n'importe quel point, le corps reste <b>en suspension</b> (comme un sous-marin bien équilibré) ;</li>
<li>ρ<sub>c</sub> &lt; ρ<sub>f</sub> : la poussée l'emporte, le corps remonte et <b>flotte</b>. À l'équilibre, la partie immergée vérifie ρ<sub>f</sub> V<sub>imm</sub> = ρ<sub>c</sub> V, c'est-à-dire V<sub>imm</sub>/V = ρ<sub>c</sub>/ρ<sub>f</sub>.</li>
</ul>
<p>Un bloc de glace (ρ = 917 kg/m³) dans l'eau douce (1000 kg/m³) a environ <b>92 %</b> de son volume immergé : la « partie émergée de l'iceberg » est vraiment petite. Dans l'eau de mer (environ 1025 kg/m³), il émerge un peu plus (environ 10 %).</p>`
    },
    {
      type: "example",
      title: "Exemple : combien pèse un caillou dans l'eau ?",
      html: `<p>Un caillou de volume 2 dm³ (0,002 m³) et de masse volumique 2700 kg/m³ est suspendu à un dynamomètre.</p>
<ol>
<li>Masse : m = 2700 × 0,002 = 5,4 kg ; poids dans l'air : P = 5,4 × 9,8 ≈ <b>52,9 N</b>.</li>
<li>Complètement immergé dans l'eau : poussée F<sub>A</sub> = 1000 × 0,002 × 9,8 = <b>19,6 N</b>.</li>
<li>Le dynamomètre indique le <b>poids apparent</b> : 52,9 − 19,6 ≈ <b>33,3 N</b>.</li>
</ol>
<p>Le caillou « pèse » environ 37 % de moins. C'est pour cela qu'à la piscine tu arrives à soulever un ami : son poids apparent dans l'eau n'est qu'une petite fraction de son poids réel.</p>`
    },
    {
      type: "curiosity",
      title: "« Eurêka ! » et la couronne du roi",
      html: `<p>Selon le récit de l'architecte romain Vitruve, le tyran de Syracuse Hiéron II avait confié de l'or à un orfèvre pour une couronne et soupçonnait qu'il avait été mélangé à de l'argent. Archimède devait découvrir la tromperie sans l'abîmer. En entrant dans une baignoire, il remarqua que l'eau débordait et comprit qu'il pouvait mesurer le <b>volume</b> de la couronne grâce à l'eau déplacée ; en comparant sa masse volumique à celle de l'or, il découvrirait la fraude. Il courut nu dans la rue en criant « Eurêka ! » (« j'ai trouvé ! »). Les historiens doutent des détails de l'histoire (certains pensent qu'il utilisa une balance hydrostatique), mais la méthode fondée sur la masse volumique sert encore aujourd'hui à identifier les matériaux.</p>`
    },
    {
      type: "curiosity",
      title: "Pourquoi un navire en acier flotte-t-il ?",
      html: `<p>L'acier a une masse volumique d'environ 7800 kg/m³, presque huit fois celle de l'eau : un morceau plein coule. Mais une coque est <b>creuse</b> : elle contient beaucoup d'air. Ce qui compte, c'est la <b>masse volumique moyenne</b> de l'objet entier (coque + air + cargaison). Si elle est inférieure à celle de l'eau, le navire flotte. Quand on charge le navire, il s'enfonce un peu plus, déplace plus d'eau et la poussée augmente, jusqu'à ce qu'elle égale le poids total : c'est pourquoi on dessine sur la coque des « lignes de charge » (la marque Plimsoll). Si une voie d'eau s'ouvre et que l'eau prend la place de l'air, la masse volumique moyenne dépasse celle de l'eau et le navire coule.</p>`
    },
    {
      type: "widget",
      title: "Flotte ou coule dans l'eau douce ?",
      widget: "classify",
      options: { groups: ["Flotte", "Coule"], items: [
        ["🧊 glace (917 kg/m³)", 0],
        ["🪵 bois de pin (environ 500 kg/m³)", 0],
        ["🫒 huile d'olive (environ 920 kg/m³)", 0],
        ["🪨 caillou (environ 2700 kg/m³)", 1],
        ["🔩 fer plein (7870 kg/m³)", 1],
        ["🥇 or (19 300 kg/m³)", 1],
        ["🎈 polystyrène (environ 30 kg/m³)", 0],
        ["⚓ plomb (11 340 kg/m³)", 1]
      ] },
      caption: "Compare la masse volumique du corps à celle de l'eau (1000 kg/m³)."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre poussée et pression",
      intro: "Archimède et Stevin ne sont pas aussi intuitifs qu'il y paraît. Voici d'autres chemins.",
      tabs: [
        {
          label: "📦 Le fluide qui se déplace",
          html: `<p>Imagine qu'on retire le caillou de l'eau et qu'on le remplace par une « bulle d'eau » de même forme. Cette bulle resterait immobile, en équilibre avec l'eau qui l'entoure : la poussée sur l'eau de la bulle est donc exactement égale à son poids. Remets maintenant le caillou : l'eau autour ne « sait » pas ce qu'il y a dans la forme, donc elle pousse de la même manière. <b>La poussée est le poids de l'eau que le corps a chassée</b>. Ce raisonnement (typique d'Archimède) explique aussi pourquoi la forme ne compte pas, seulement le volume déplacé.</p>`
        },
        {
          label: "🥤 La presse avec des seringues",
          html: `<p>Prends deux seringues de diamètres différents, reliées par un petit tuyau rempli d'eau. Si tu pousses la plus petite avec peu de force, la grande bouge avec plus de force, mais <b>de peu</b> : pour déplacer de 1 cm le grand piston (diamètre double, section 4 fois plus grande), tu dois pousser le petit de 4 cm. Tu obtiens 4 fois plus de force, mais tu dois faire 4 fois plus de chemin. On peut faire l'expérience à la maison : c'est un moyen facile de « sentir » le principe de Pascal.</p>`
        },
        {
          label: "🏔️ La colonne d'eau",
          html: `<p>Pense à une tour de briques : la brique du bas supporte le poids de toutes celles du dessus. Il en va de même dans l'eau : à la profondeur h, au-dessus de chaque cm² se trouve une colonne d'eau de hauteur h. Son poids vaut : volume (S·h) × masse volumique × g. En divisant par S, on obtient p = ρ g h. Peu importe qu'au-dessus il y ait une piscine ou un immense lac : c'est la <b>hauteur</b> de la colonne qui compte.</p>`
        },
        {
          label: "📏 Mesurer le niveau",
          html: `<p>Le « paradoxe hydrostatique » dit que le fond d'un vase large en bas et étroit en haut subit la même pression que celui d'un vase cylindrique, si la hauteur de liquide est la même. Dans des vases communicants, le liquide s'établit à la même hauteur, car c'est la seule façon pour que la pression au fond soit la même dans chaque branche.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de l'équilibre des fluides",
      nodes: [
        { id: "fluidi", label: "Fluides en équilibre", x: 50, y: 6, color: "#64748b", html: "Liquides et gaz au repos : ils n'ont pas de forme propre, ils prennent celle du récipient.", why: "Leur statique (l'hydrostatique) naît dans l'Antiquité avec Archimède et fut relancée au XVIIe siècle par Stevin, Torricelli et Pascal, quand la science expérimentale commença à mesurer la pression de l'air." },
        { id: "pressione", label: "Pression p = F/S", x: 20, y: 28, color: "#2563eb", html: "Force perpendiculaire par unité de surface, en pascals.", why: "L'unité porte le nom de Blaise Pascal. La notion est utile parce que, dans les fluides, la force n'est pas appliquée en un point mais répartie sur toute la surface." },
        { id: "pascal", label: "Principe de Pascal", x: 12, y: 54, color: "#16a34a", html: "La pression se transmet intégralement dans tout le fluide.", why: "Pascal le formula en 1647-1654, après les expériences de Torricelli. Il découle du fait qu'un fluide en équilibre ne peut pas supporter de forces tangentielles : la force sur les parois est toujours perpendiculaire." },
        { id: "stevino", label: "Loi de Stevin", x: 40, y: 54, color: "#f59e0b", html: "p = p0 + ρgh : la pression augmente avec la profondeur.", why: "Stevin (1586) l'obtint en raisonnant sur l'équilibre d'une portion de liquide : sur sa face inférieure doit agir la pression qui soutient le poids de toute la colonne située au-dessus." },
        { id: "torchio", label: "Presse hydraulique", x: 8, y: 80, color: "#22c55e", html: "F1/S1 = F2/S2 : multiplie la force.", why: "Application technique du principe de Pascal (fin du XVIIIe siècle, Bramah). Elle ne crée pas d'énergie : la force gagnée se paie en déplacement." },
        { id: "atmosfera", label: "Pression atmosphérique", x: 60, y: 28, color: "#0ea5e9", html: "Le poids de l'air : environ 1 atm au niveau de la mer.", why: "Torricelli (1643) la mesura avec le baromètre à mercure : la colonne mesure 760 mm parce que ρ_Hg g h est égal à la pression de l'air." },
        { id: "archimede", label: "Poussée d'Archimède", x: 75, y: 54, color: "#9333ea", html: "FA = ρ V g, vers le haut.", why: "Elle découle de la loi de Stevin : sous le corps, la pression est plus grande qu'au-dessus. Archimède l'énonça dans son traité Des corps flottants (IIIe s. av. J.-C.)." },
        { id: "galleggiamento", label: "Flottaison", x: 70, y: 82, color: "#ef4444", html: "Dépend de la comparaison entre la masse volumique du corps et celle du fluide.", why: "Si le poids dépasse la poussée, le corps coule ; sinon il remonte jusqu'à ce que la poussée sur la partie immergée égale le poids. Un navire flotte grâce à sa masse volumique moyenne." }
      ],
      edges: [["fluidi", "pressione", "se mesure par"], ["pressione", "pascal", "se transmet"], ["pressione", "stevino", "augmente avec h"], ["pascal", "torchio", "application"], ["stevino", "atmosfera", "colonne d'air"], ["stevino", "archimede", "dont découle"], ["archimede", "galleggiamento", "explique"]]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li><b>Pression</b> : p = F/S (pascal, 1 Pa = 1 N/m²). 1 atm = 101 325 Pa = 760 mmHg.</li>
<li><b>Pascal</b> : la pression se transmet intégralement dans tout le fluide. Presse : F1/S1 = F2/S2.</li>
<li><b>Stevin</b> : p = p0 + ρ g h. Tous les 10 m d'eau : +1 atm.</li>
<li><b>Archimède</b> : F<sub>A</sub> = ρ<sub>fluide</sub> · V<sub>immergé</sub> · g = poids du fluide déplacé.</li>
<li>Un corps flotte si sa masse volumique <b>moyenne</b> est inférieure à celle du fluide.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : Stevin et Archimède",
      questions: [
        { type: "num", q: "Quelle pression (en Pa) l'eau (ρ = 1000 kg/m³, g = 10 m/s²) exerce-t-elle à 5 m de profondeur, sans compter l'atmosphère ?", answer: 50000, tol: 0, unit: "Pa", explain: "p = ρ g h = 1000 × 10 × 5 = 50 000 Pa." },
        { type: "num", q: "Un cube de 10 cm de côté est complètement immergé dans l'eau (ρ = 1000 kg/m³, g = 10 m/s²). Quelle est la poussée d'Archimède (en N) ?", answer: 10, unit: "N", explain: "V = 0,001 m³ ; F = 1000 × 0,001 × 10 = 10 N." },
        { type: "mc", q: "Un corps de masse volumique 800 kg/m³ placé dans l'eau…", options: ["coule", "flotte avec 80 % de son volume immergé", "flotte avec 20 % de son volume immergé"], answer: 1, explain: "La fraction immergée est ρc/ρf = 800/1000 = 0,8, soit 80 %." },
        { type: "tf", q: "La pression dans un liquide au repos dépend de la forme du récipient.", answer: false, explain: "Elle ne dépend que de la profondeur et de la masse volumique (loi de Stevin)." }
      ]
    }
  ],
  glossary: [
    { t: "Pression", d: "Rapport entre la force perpendiculaire et la surface sur laquelle elle agit : p = F/S." },
    { t: "Pascal", d: "Unité de pression du Système international : 1 Pa = 1 N/m²." },
    { t: "Atmosphère", d: "Unité de pression : 1 atm = 101 325 Pa, pression moyenne de l'air au niveau de la mer." },
    { t: "Principe de Pascal", d: "La pression exercée en un point d'un fluide en équilibre se transmet intégralement dans tout le fluide." },
    { t: "Presse hydraulique", d: "Machine à deux pistons de sections différentes qui multiplie la force grâce au principe de Pascal." },
    { t: "Loi de Stevin", d: "p = p0 + ρgh : la pression dans un liquide augmente linéairement avec la profondeur." },
    { t: "Masse volumique", d: "Rapport entre la masse et le volume : ρ = m/V." },
    { t: "Vases communicants", d: "Récipients reliés entre eux dans lesquels un liquide homogène atteint le même niveau." },
    { t: "Poussée d'Archimède", d: "Force vers le haut exercée sur un corps immergé, égale au poids du fluide déplacé." },
    { t: "Baromètre", d: "Instrument qui mesure la pression atmosphérique ; le premier fut inventé par Torricelli en 1643." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Une force de 600 N est répartie uniformément sur 0,3 m². Quelle est la pression (en Pa) ?", answer: 2000, unit: "Pa", explain: "p = F/S = 600/0,3 = 2000 Pa." },
      { type: "mc", q: "À combien de pascals correspond environ 1 atm ?", options: ["1000 Pa", "101 325 Pa", "760 Pa"], answer: 1, explain: "1 atm = 101 325 Pa, soit 760 mmHg." },
      { type: "num", q: "Dans une presse hydraulique, le petit piston a une section de 5 cm², le grand de 200 cm². Avec quelle force (en N) faut-il pousser le petit pour soulever une charge qui demande 4000 N sur le grand ?", answer: 100, unit: "N", explain: "F1 = F2·S1/S2 = 4000 × 5/200 = 100 N." },
      { type: "tf", q: "Dans la presse hydraulique, le déplacement du grand piston est plus grand que celui du petit.", answer: false, explain: "Le volume de liquide déplacé est le même : le grand piston, qui a une section plus grande, se déplace moins." },
      { type: "num", q: "Quelle est la pression de l'eau (ρ = 1000 kg/m³, g = 9,8 m/s²) à 20 m de profondeur, sans compter l'atmosphère, en Pa ?", answer: 196000, tol: 100, unit: "Pa", explain: "p = ρ g h = 1000 × 9,8 × 20 = 196 000 Pa, environ 2 atm." },
      { type: "mc", q: "Qui a mesuré le premier la pression atmosphérique avec un tube de mercure ?", options: ["Archimède", "Torricelli", "Newton"], answer: 1, explain: "Evangelista Torricelli, en 1643 : le mercure s'arrêta à environ 760 mm." },
      { type: "tf", q: "Un corps dont la masse volumique est supérieure à celle de l'eau ne peut jamais flotter, même s'il est creux.", answer: false, explain: "C'est la masse volumique moyenne qui compte : un navire en acier creux a une masse volumique moyenne inférieure à celle de l'eau." },
      { type: "num", q: "Un objet de volume 0,005 m³ est complètement immergé dans l'eau (ρ = 1000 kg/m³, g = 10 m/s²). Quelle est la poussée (en N) ?", answer: 50, unit: "N", explain: "FA = ρ V g = 1000 × 0,005 × 10 = 50 N." },
      { type: "order", q: "Range dans l'ordre les étapes pour savoir si un corps flotte.", items: ["Mesurer la masse et le volume du corps", "Calculer la masse volumique du corps (m/V)", "La comparer à la masse volumique du fluide", "Conclure : il flotte si elle est plus petite, il coule si elle est plus grande"], explain: "On compare les masses volumiques : le corps flotte si sa masse volumique moyenne est inférieure à celle du fluide." },
      { type: "mc", q: "Pourquoi la pression augmente-t-elle quand on descend dans un lac ?", options: ["Parce que l'eau est plus froide", "Parce qu'au-dessus il y a le poids de la colonne d'eau", "Parce que la gravité augmente"], answer: 1, explain: "Chaque couche doit supporter le poids de l'eau située au-dessus, comme le prévoit la loi de Stevin." },
      { type: "text", q: "Quel est le cri attribué à Archimède quand il découvrit la méthode pour mesurer le volume de la couronne ?", answer: ["eureka", "eurêka", "heureka", "heurêka"], explain: "« Eurêka ! », du grec « j'ai trouvé »." }
    ]
  }
});
