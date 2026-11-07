TOPIC('fr', {
  id: "p3-geo-fiumi-laghi",
  title: "Fleuves et lacs",
  intro: `Chaque fleuve fait un long voyage : il naît en montagne d'une petite <b>source</b>, descend vite entre les rochers, traverse la plaine en larges courbes et finit par se jeter dans la mer à l'<b>embouchure</b>. En chemin, il rencontre d'autres cours d'eau et s'arrête parfois dans un <b>lac</b>. Suivons ce voyage, même en <b>3D</b> !`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "D'où vient l'eau des fleuves ?",
      html: `<p>L'eau des fleuves vient du <b>ciel</b> : c'est la <b>pluie</b> et la <b>neige</b> qui tombent sur les montagnes. Une partie coule tout de suite sur le sol, une partie pénètre sous terre puis ressort aux <b>sources</b>, une partie reste gelée dans les <b>glaciers</b> et fond peu à peu en été.</p>
<p>Le fleuve porte l'eau vers la <b>mer</b> ; de la mer, le Soleil la fait s'évaporer, les nuages se forment et il pleut de nouveau sur les monts. C'est le <b>cycle de l'eau</b> : les fleuves sont les « routes » par lesquelles l'eau retourne à la mer.</p>
<p>L'eau descend toujours <b>vers le bas</b>, à cause de la force de gravité : c'est pourquoi les fleuves naissent en haut et finissent en bas, dans la mer, dans un lac ou dans un autre fleuve.</p>`
    },
    {
      type: "text",
      title: "Étape 1 : le voyage du fleuve",
      html: `<ol>
<li>💧 <b>Source</b> : le point où le fleuve naît, en général en montagne, à partir d'une fontaine ou d'un glacier.</li>
<li>⛰️ <b>Cours supérieur</b> (en montagne) : le lit est étroit et pentu, l'eau est <b>rapide</b>, forme des rapides et des <b>cascades</b> et creuse de profondes <b>vallées</b> en forme de <b>V</b>. Elle entraîne de gros cailloux.</li>
<li>🌳 <b>Cours moyen</b> (en colline) : le fleuve ralentit et s'élargit, il reçoit d'autres cours d'eau.</li>
<li>🌾 <b>Cours inférieur</b> (en plaine) : l'eau est <b>lente</b> et le fleuve dessine de grandes courbes appelées <b>méandres</b>. Il dépose du sable et du limon fin.</li>
<li>🌊 <b>Embouchure</b> : le point où le fleuve finit, dans la mer, dans un lac ou dans un autre fleuve.</li>
</ol>
<p>Le « canal » dans lequel coule l'eau s'appelle le <b>lit</b> ; ses bords sont les <b>berges</b> ; les remblais de terre construits pour éviter les inondations sont les <b>digues</b>. En regardant vers l'embouchure, la berge de droite est la <b>rive droite</b> et celle de gauche est la <b>rive gauche</b>.</p>`
    },
    {
      type: "svg",
      title: "De la source à l'embouchure",
      svg: `<svg viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="330" fill="#e0f2fe"/>
<path d="M0 150 L70 40 L130 110 L180 60 L250 170 L600 250 L600 330 L0 330 Z" fill="#a8a29e"/>
<path d="M50 70 L70 40 L90 68 Z M165 82 L180 60 L196 86 Z" fill="#ffffff"/>
<path d="M200 180 L600 250 L600 330 L120 330 Z" fill="#86efac"/>
<path d="M480 260 L600 250 L600 330 L460 330 Z" fill="#3b82f6"/>
<path d="M95 85 Q110 120 140 150 Q170 175 200 190 Q260 215 300 235 Q260 250 320 262 Q390 270 360 285 Q420 300 475 290" stroke="#2563eb" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M475 290 L500 275 M475 290 L505 300 M475 290 L495 315" stroke="#2563eb" stroke-width="5"/>
<path d="M250 140 Q240 180 230 200" stroke="#60a5fa" stroke-width="5" fill="none"/>
<circle cx="95" cy="85" r="8" fill="#0ea5e9" stroke="#ffffff" stroke-width="3"/>
<g font-size="15" font-weight="bold" fill="#0f172a">
<text x="20" y="25">💧 source</text>
<text x="100" y="175">cours supérieur</text>
<text x="100" y="193" font-size="12" font-weight="normal">rapide, vallée en V</text>
<text x="275" y="200">affluent</text>
<text x="270" y="310">méandres</text>
<text x="500" y="245">embouchure (delta)</text>
<text x="540" y="320" fill="#ffffff">mer</text>
</g>
<path d="M120 30 L160 30" stroke="#f59e0b" stroke-width="3"/>
<text x="165" y="35" font-size="13" fill="#78350f">en haut : eau rapide → en bas : eau lente</text>
</svg>`,
      caption: "Le voyage d'un fleuve : en montagne, l'eau court et creuse, en plaine elle ralentit et dessine des courbes, à l'embouchure elle entre dans la mer."
    },
    {
      type: "3d",
      title: "Le paysage du fleuve en 3D",
      scene: "terrain",
      caption: "Fais tourner le paysage et touche chaque étiquette : la partie s'illumine. Suis le voyage de l'eau du glacier à la mer.",
      options: {
        features: {
          glacier: { label: "Glacier", html: "Une grande masse de glace sur les montagnes les plus hautes. L'été, elle fond un peu et donne de l'eau aux fleuves même quand il ne pleut pas. La <b>Dora Baltea</b> naît des glaciers du Mont Blanc." },
          peak: { label: "Sommet", html: "Le haut de la montagne. Les lignes de crête entre les sommets sont les <b>lignes de partage des eaux</b> : la pluie qui tombe d'un côté va dans un fleuve, celle qui tombe de l'autre côté va dans un autre." },
          mountain: { label: "Montagne", html: "Ici, il pleut et neige davantage : les montagnes sont les « réservoirs » d'eau des fleuves." },
          source: { label: "Source", html: "Le point où naît le fleuve. Le <b>Pô</b> naît dans le Piémont, au <b>Pian del Re</b>, à environ 2000 mètres, au pied du Viso." },
          valley: { label: "Vallée", html: "Le fleuve, avec la force de l'eau et des cailloux, creuse la roche : les vallées des fleuves ont la forme d'un <b>V</b>. Les vallées creusées par les glaciers, elles, ont la forme d'un <b>U</b>." },
          river: { label: "Fleuve", html: "Cours d'eau qui coule toute l'année. En plaine, il ralentit et forme des <b>méandres</b>, de grandes courbes en forme de S." },
          lake: { label: "Lac", html: "Eau douce rassemblée dans une cuvette du terrain. Le cours d'eau qui entre dans le lac s'appelle <b>tributaire</b>, celui qui en sort <b>émissaire</b>." },
          plain: { label: "Plaine", html: "C'est souvent le fleuve lui-même qui l'a construite, en déposant du sable et du limon pendant des milliers d'années : la <b>plaine du Pô</b> a été formée par le Pô et ses affluents." },
          delta: { label: "Delta", html: "Embouchure en forme de triangle, divisée en plusieurs bras, qui se forme quand le fleuve apporte plus de sédiments que la mer ne peut en emporter. Exemple : le <b>delta du Pô</b>." },
          sea: { label: "Mer", html: "La fin du voyage. L'eau douce du fleuve se mélange à l'eau salée de la mer… et tôt ou tard elle s'évaporera et retombera en pluie sur les monts." }
        }
      }
    },
    {
      type: "quiz",
      title: "Mini-quiz : le voyage du fleuve",
      questions: [
        { type: "mc", q: "Comment s'appelle le point où naît un fleuve ?", options: ["Embouchure", "Source", "Delta"], answer: 1, explain: "Le fleuve naît à la source et finit à l'embouchure." },
        { type: "mc", q: "Où l'eau du fleuve est-elle la plus rapide ?", options: ["En montagne", "En plaine", "À l'embouchure"], answer: 0, explain: "En montagne, la pente est forte et l'eau court vite." },
        { type: "tf", q: "Les méandres sont les grandes courbes que le fleuve fait en plaine.", answer: true, explain: "En plaine, l'eau est lente et le fleuve serpente en formant des méandres." }
      ]
    },
    {
      type: "text",
      title: "Étape 2 : affluents, torrents et bassin versant",
      html: `<ul>
<li>Un <b>affluent</b> est un cours d'eau qui se jette dans un fleuve plus grand. Le Pô a énormément d'affluents : par la gauche (depuis les Alpes) la <b>Doire Baltée</b>, le <b>Tessin</b>, l'<b>Adda</b>, l'<b>Oglio</b>, le <b>Mincio</b> ; par la droite (depuis les Apennins) le <b>Tanaro</b>, la <b>Trebbia</b>, le <b>Taro</b>, le <b>Panaro</b>.</li>
<li>Le point où deux cours d'eau se rejoignent s'appelle un <b>confluent</b>.</li>
<li>Un <b>torrent</b> est un cours d'eau qui peut rester presque à sec en été et qui gonfle soudain après les orages. En Italie, il y en a beaucoup, surtout dans les Apennins et dans le Sud, où il pleut peu en été.</li>
<li>Le <b>ruisseau</b> est un petit cours d'eau.</li>
<li>Le <b>bassin versant</b> est tout le territoire d'où l'eau de pluie finit dans un certain fleuve. Le bassin du Pô couvre environ <b>71 000 km²</b> : presque un quart de l'Italie !</li>
</ul>
<p>La quantité d'eau d'un fleuve change au cours de l'année : on l'appelle le <b>régime</b>. Les fleuves alpins sont plus pleins au printemps et en été, quand fondent la neige et les glaciers ; ceux des Apennins en automne et en hiver, quand il pleut davantage.</p>`
    },
    {
      type: "widget",
      title: "Les parties du fleuve",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#dcfce7"/>
<path d="M0 0 L200 0 L120 120 L0 160 Z" fill="#a8a29e"/>
<path d="M60 20 Q70 10 80 22 Z" fill="#ffffff"/>
<path d="M500 220 L600 200 L600 300 L470 300 Z" fill="#3b82f6"/>
<path d="M70 40 Q100 90 150 120 Q230 150 260 180 Q300 210 360 200 Q420 190 430 230 Q440 260 490 255" stroke="#2563eb" stroke-width="9" fill="none" stroke-linecap="round"/>
<path d="M330 40 Q320 100 285 190" stroke="#60a5fa" stroke-width="6" fill="none"/>
<ellipse cx="200" cy="245" rx="70" ry="30" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
<path d="M240 190 Q230 205 220 218" stroke="#2563eb" stroke-width="5" fill="none"/>
<circle cx="70" cy="40" r="8" fill="#0ea5e9" stroke="#ffffff" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 70, y: 40, label: "Source" },
          { x: 325, y: 70, label: "Affluent" },
          { x: 285, y: 192, label: "Confluent" },
          { x: 420, y: 200, label: "Méandre" },
          { x: 200, y: 245, label: "Lac" },
          { x: 490, y: 255, label: "Embouchure" },
          { x: 90, y: 120, label: "Montagne" }
        ]
      },
      caption: "Touche chaque point et choisis le bon nom."
    },
    {
      type: "text",
      title: "Étape 3 : deux types d'embouchure",
      html: `<p>Tous les fleuves ne finissent pas de la même façon :</p>
<ul>
<li><b>Embouchure en delta</b> : le fleuve se divise en plusieurs bras et forme un triangle de terres nouvelles, parce qu'il apporte beaucoup de sédiments et que la mer (avec peu de marées) ne parvient pas à les emporter. Exemples : le <b>Pô</b>, le <b>Nil</b>, le <b>Danube</b>.</li>
<li><b>Embouchure en estuaire</b> : le fleuve finit par une seule bouche large en forme d'entonnoir, « nettoyée » par les <b>marées</b> qui entrent et sortent. Exemples : la <b>Tamise</b> à Londres, la <b>Seine</b> et la <b>Loire</b> en France, le <b>Río de la Plata</b> en Amérique du Sud.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Delta et estuaire",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<rect x="10" y="10" width="280" height="240" fill="#86efac"/>
<rect x="10" y="170" width="280" height="80" fill="#3b82f6"/>
<path d="M150 10 L150 110" stroke="#2563eb" stroke-width="10"/>
<path d="M150 110 L90 175 M150 110 L130 178 M150 110 L170 178 M150 110 L210 175" stroke="#2563eb" stroke-width="6"/>
<path d="M150 110 L70 170 L230 170 Z" fill="#facc15" opacity="0.45"/>
<text x="150" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">DELTA</text>
<text x="150" y="225" font-size="14" text-anchor="middle" fill="#ffffff">plusieurs bras, triangle</text>
<rect x="310" y="10" width="280" height="240" fill="#86efac"/>
<rect x="310" y="170" width="280" height="80" fill="#3b82f6"/>
<path d="M450 10 L450 90" stroke="#2563eb" stroke-width="10"/>
<path d="M445 90 L380 172 L520 172 L455 90 Z" fill="#3b82f6"/>
<text x="450" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">ESTUAIRE</text>
<text x="450" y="225" font-size="14" text-anchor="middle" fill="#ffffff">une seule bouche en entonnoir</text>
</svg>`,
      caption: "Dans le delta, le fleuve construit de la terre nouvelle ; dans l'estuaire, la mer entre dans le fleuve avec les marées."
    },
    {
      type: "text",
      title: "Étape 4 : les lacs",
      html: `<p>Un <b>lac</b> est une masse d'eau (en général douce) qui remplit une <b>cuvette</b>, un « creux » du terrain. Il n'est pas relié directement à la mer. Il est alimenté par des cours d'eau (les <b>tributaires</b>), par des sources au fond et par la pluie ; souvent, un cours d'eau en sort (l'<b>émissaire</b>).</p>
<p>Les lacs se classent selon la façon dont la cuvette s'est formée :</p>
<ul>
<li>🧊 <b>Glaciaires</b> : creusés par les glaciers pendant les glaciations. Ils sont longs et étroits, comme les grands lacs préalpins : <b>Garde</b>, <b>Majeur</b>, <b>Côme</b>, <b>Iseo</b>, <b>Orta</b>. Les petits lacs alpins sont aussi glaciaires.</li>
<li>🌋 <b>Volcaniques</b> : dans le cratère d'un volcan éteint. Ils sont presque ronds : <b>Bolsena</b>, <b>Bracciano</b>, <b>Vico</b>, <b>Albano</b> (dans le Latium).</li>
<li>🪨 <b>Tectoniques</b> : dans une cuvette créée par les mouvements de l'écorce terrestre, comme le <b>Trasimène</b> en Ombrie.</li>
<li>🏖️ <b>Côtiers</b> : près de la mer, séparés par des bandes de sable, comme <b>Lesina</b> et <b>Varano</b> dans les Pouilles.</li>
<li>🏗️ <b>Artificiels</b> : créés par l'homme avec un <b>barrage</b>, pour avoir de l'eau et produire de l'électricité, comme le lac de <b>Serre-Ponçon</b> dans les Alpes françaises ou celui de <b>Ceresole Reale</b> dans le Piémont.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Quel type de lac est-ce ?",
      widget: "classify",
      caption: "Place chaque lac dans le bon groupe.",
      options: {
        groups: ["🧊 Glaciaire", "🌋 Volcanique", "🏖️ Côtier", "🏗️ Artificiel"],
        items: [
          ["Lac de Garde", 0], ["Lac Majeur", 0], ["Lac de Côme", 0],
          ["Lac de Bolsena", 1], ["Lac de Bracciano", 1], ["Lac d'Albano", 1],
          ["Lac de Lesina", 2], ["Lac de Varano", 2],
          ["Lac de Ceresole Reale (avec barrage)", 3]
        ]
      }
    },
    {
      type: "example",
      title: "Exemple pratique : le voyage du Pô",
      html: `<p>Le <b>Pô</b> est le plus long fleuve d'Italie : <b>652 km</b>.</p>
<ul>
<li>Il naît dans le <b>Piémont</b>, au <b>Pian del Re</b> (environ 2000 m), au pied du <b>Mont Viso</b>.</li>
<li>Il descend vite dans la vallée, puis arrive en plaine et traverse <b>Turin</b>.</li>
<li>Il coule d'Ouest en Est à travers la <b>plaine du Pô</b>, entre le Piémont, la Lombardie, l'Émilie-Romagne et la Vénétie, en passant près de Plaisance, Crémone et Ferrare.</li>
<li>Il reçoit plus de 140 affluents.</li>
<li>Il se jette dans la <b>mer Adriatique</b> par un grand <b>delta</b>, entre la Vénétie et l'Émilie-Romagne, aujourd'hui parc naturel.</li>
</ul>
<p>Après le Pô, les fleuves les plus longs d'Italie sont l'<b>Adige</b> (environ 410 km) et le <b>Tibre</b> (environ 405 km), qui traverse Rome.</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : à quoi nous servent fleuves et lacs ?",
      html: `<ul>
<li>🚰 De l'<b>eau</b> à boire et pour les maisons (après avoir été épurée).</li>
<li>🌾 L'<b>irrigation</b> : des canaux qui amènent l'eau aux champs. La plaine du Pô est pleine de canaux, comme le <b>canal Cavour</b> dans le Piémont.</li>
<li>⚡ L'<b>énergie</b> : les barrages et les centrales hydroélectriques transforment la force de l'eau qui tombe en électricité.</li>
<li>🚢 Les <b>transports</b> : autrefois, bateaux et péniches transportaient des marchandises sur les fleuves ; aujourd'hui encore, de grands navires naviguent sur le Rhin et sur le Danube.</li>
<li>🐟 La <b>pêche</b>, le sport et le tourisme : canoë, voile, baignade dans les lacs.</li>
<li>🏙️ Beaucoup de <b>villes</b> sont nées sur des fleuves : Rome sur le Tibre, Florence sur l'Arno, Turin sur le Pô, Paris sur la Seine, Londres sur la Tamise.</li>
</ul>
<p>Mais les fleuves doivent être <b>respectés</b> : ils peuvent déborder et causer des <b>inondations</b>. C'est pourquoi on ne doit pas construire trop près des digues, et il faut garder les fleuves propres.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Dans le lac Baïkal, il y a un cinquième de l'eau douce des lacs du monde !",
      html: `<p>Le lac <b>Baïkal</b>, en Sibérie (Russie), est le lac le plus <b>profond</b> du monde : <b>1642 mètres</b> ! Il contient environ <b>20 %</b> de toute l'eau douce liquide des lacs et des fleuves de la Terre. C'est aussi l'un des plus anciens : il a environ 25 millions d'années. L'hiver, il gèle et la glace est si épaisse que les voitures roulent dessus.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le plus grand « lac » du monde s'appelle une mer !",
      html: `<p>La <b>mer Caspienne</b>, entre l'Europe et l'Asie, est en réalité le plus grand lac du monde : environ <b>371 000 km²</b>, plus grande que l'Italie (environ 302 000 km²) ! On l'appelle « mer » parce que son eau est un peu <b>salée</b>. Le plus grand lac d'eau douce est le <b>lac Supérieur</b>, entre le Canada et les États-Unis.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le Nil ou l'Amazone ?",
      html: `<p>Le <b>Nil</b> (environ 6650 km) et l'<b>Amazone</b> (environ 6400 km, mais certains chercheurs disent plus) se disputent le titre de plus long fleuve du monde : cela dépend de l'endroit où l'on place la source ! Pour la quantité d'eau, en revanche, il n'y a pas de concours : l'Amazone apporte à la mer environ <b>un cinquième</b> de toute l'eau des fleuves du monde.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre fleuves et lacs",
      intro: "Si les mots sont nombreux, essaie de voir le fleuve autrement.",
      tabs: [
        {
          label: "🌳 Le fleuve comme un arbre",
          html: `<p>Regarde un fleuve d'en haut avec tous ses affluents : on dirait un <b>arbre</b> renversé !</p>
<ul>
<li>les <b>racines</b> et les plus petites brindilles sont les ruisseaux de montagne ;</li>
<li>les <b>branches</b> sont les affluents ;</li>
<li>le <b>tronc</b> est le fleuve principal ;</li>
<li>le point où le tronc touche terre est l'<b>embouchure</b>.</li>
</ul>
<p>Et toute la ramure de l'arbre ? C'est le <b>bassin versant</b>. En anglais, le fleuve avec ses affluents s'appelle justement <i>river system</i>, et les formes en arbre s'appellent <b>dendritiques</b> (du grec <i>déndron</i>, arbre).</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<path d="M300 250 L300 160" stroke="#2563eb" stroke-width="12"/>
<path d="M300 160 Q240 120 180 90 M300 160 Q360 120 420 90 M300 190 Q230 180 160 170 M300 190 Q380 185 450 165" stroke="#2563eb" stroke-width="7" fill="none"/>
<path d="M180 90 Q150 60 120 40 M180 90 Q190 55 200 30 M420 90 Q450 60 480 40 M420 90 Q400 55 390 25 M160 170 Q120 150 90 130 M450 165 Q490 145 520 120" stroke="#60a5fa" stroke-width="4" fill="none"/>
<text x="310" y="245" font-size="15" fill="#1e3a8a" font-weight="bold">embouchure (tronc)</text>
<text x="440" y="200" font-size="15" fill="#1e3a8a" font-weight="bold">affluents (branches)</text>
<text x="60" y="30" font-size="15" fill="#1e3a8a" font-weight="bold">ruisseaux et sources</text>
</svg>`
        },
        {
          label: "🧪 L'expérience du plateau",
          html: `<p>Construis un fleuve miniature :</p>
<ol>
<li>Mets du <b>sable</b> humide dans un plat à four, plus haut d'un côté (la « montagne »).</li>
<li>Pose le plat un peu incliné, avec le côté bas au-dessus d'un évier ou d'une bassine (la « mer »).</li>
<li>Verse doucement de l'eau d'un verre sur la partie haute.</li>
</ol>
<p>Observe : l'eau creuse un <b>sillon</b> (la vallée), se divise et se rejoint (affluents et confluents), en bas elle ralentit et laisse le sable en formant un petit <b>delta</b> ! Si tu fais un trou dans le sable, l'eau le remplit : voilà un <b>lac</b> avec son tributaire et son émissaire.</p>`
        },
        {
          label: "🌍 Les grands fleuves du monde",
          html: `<p>Fais tourner le globe et trouve les embouchures des fleuves les plus célèbres. Remarque que les grandes civilisations anciennes sont nées près des fleuves : les Égyptiens sur le Nil, les Sumériens entre Tigre et Euphrate, les Indiens sur l'Indus, les Chinois sur le fleuve Jaune.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 31.5, lon: 31.0, label: "Nil (~6650 km)", color: "#2563eb" },
              { lat: -0.5, lon: -50.0, label: "Amazone (~6400 km)", color: "#16a34a" },
              { lat: 31.4, lon: 121.9, label: "Yangzi Jiang (~6300 km)", color: "#f97316" },
              { lat: 29.0, lon: -89.3, label: "Mississippi", color: "#a855f7" },
              { lat: 45.2, lon: 29.6, label: "Danube", color: "#0ea5e9" },
              { lat: 44.95, lon: 12.45, label: "Pô (652 km)", color: "#dc2626" },
              { lat: 53.5, lon: 108.0, label: "Lac Baïkal", color: "#06b6d4" },
              { lat: 42.0, lon: 50.5, label: "Mer Caspienne", color: "#06b6d4" }
            ]
          }
        },
        {
          label: "🇬🇧 Les mots en anglais",
          html: `<p>Retourne les cartes : beaucoup de mots anglais ressemblent à des mots français !</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🏞️ river", back: "fleuve, rivière" },
              { front: "💧 spring / source", back: "source" },
              { front: "🌊 mouth", back: "embouchure (la « bouche » du fleuve)" },
              { front: "🔀 tributary", back: "affluent" },
              { front: "〰️ meander", back: "méandre" },
              { front: "🏔️ glacier", back: "glacier" },
              { front: "🛶 lake", back: "lac" },
              { front: "🧱 dam", back: "barrage" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte : pourquoi les fleuves et les lacs sont-ils ainsi ? Touche les nœuds",
      nodes: [
        { id: "ciclo", label: "🌧️ Cycle de l'eau", x: 50, y: 5, color: "#0ea5e9", html: "Évaporation, nuages, pluie et neige.", why: "Le Soleil fait évaporer l'eau des mers ; la vapeur monte, se refroidit et forme les nuages ; puis elle tombe en pluie ou en neige. Que l'eau des fleuves vienne entièrement de la pluie, le Français Pierre Perrault l'a démontré en 1674, en mesurant la pluie et l'eau de la Seine." },
        { id: "gravita", label: "⬇️ Gravité", x: 20, y: 25, color: "#7c3aed", html: "L'eau descend toujours vers le bas.", why: "C'est la même force qui fait tomber les pommes, décrite par Isaac Newton en 1687. Plus le terrain est pentu, plus l'eau accélère : c'est pourquoi en montagne les fleuves sont rapides." },
        { id: "sorgente", label: "💧 Source", x: 80, y: 25, color: "#06b6d4", html: "Là où le fleuve naît.", why: "L'eau de pluie pénètre dans les roches poreuses ou fissurées, coule sous terre et ressort là où elle trouve une couche de roche imperméable qui la bloque." },
        { id: "erosione", label: "⛏️ Érosion", x: 20, y: 50, color: "#b45309", html: "L'eau rapide creuse et transporte des cailloux.", why: "L'eau qui court entraîne cailloux et sable qui frappent le fond comme une lime : en milliers d'années, elle creuse de profondes vallées. Le Grand Canyon a été creusé par le fleuve Colorado en quelques millions d'années." },
        { id: "deposito", label: "🏝️ Dépôt", x: 50, y: 50, color: "#eab308", html: "L'eau lente laisse du sable et du limon.", why: "Plus l'eau est lente, moins elle peut transporter de poids : elle laisse d'abord tomber les cailloux, puis le sable, enfin le limon très fin. Ainsi naissent les plaines alluviales et les deltas." },
        { id: "meandri", label: "〰️ Méandres et delta", x: 80, y: 55, color: "#2563eb", html: "Courbes en plaine, embouchure en bras.", why: "Dans la courbe, l'eau est plus rapide sur la berge extérieure (qui est creusée) et plus lente sur la berge intérieure (où le sable se dépose) : la courbe s'élargit de plus en plus. Le nom vient du fleuve Méandre, en Turquie, célèbre pour ses courbes." },
        { id: "ghiacciai", label: "🧊 Anciens glaciers", x: 25, y: 80, color: "#38bdf8", html: "Pendant les glaciations, ils ont creusé de grandes cuvettes.", why: "Jusqu'à il y a environ 20 000 ans, d'énormes langues de glace descendaient des Alpes jusqu'à la plaine. Elles ont creusé des cuvettes profondes (le fond du lac de Côme descend sous le niveau de la mer !) et laissé des collines de débris, les moraines, qui font office de barrage." },
        { id: "laghi", label: "🛶 Lacs", x: 60, y: 90, color: "#0369a1", html: "Glaciaires, volcaniques, tectoniques, côtiers, artificiels.", why: "Un lac naît partout où il y a une cuvette qui retient l'eau : un cratère, une vallée creusée par la glace, un affaissement de l'écorce, une dune ou un barrage. Tôt ou tard, les fleuves le comblent de sédiments : les lacs aussi, lentement, \"vieillissent\"." }
      ],
      edges: [
        ["ciclo", "sorgente", "alimente la"],
        ["ciclo", "gravita", "l'eau tombe par"],
        ["gravita", "erosione", "eau rapide :"],
        ["erosione", "deposito", "les sédiments finissent dans le"],
        ["deposito", "meandri", "forme"],
        ["sorgente", "meandri", "le fleuve coule jusqu'aux"],
        ["ghiacciai", "laghi", "creusent les cuvettes des"],
        ["erosione", "ghiacciai", "la glace creuse aussi :"]
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Le fleuve naît à la <b>source</b>, coule dans son <b>lit</b> et finit à l'<b>embouchure</b>.</li>
<li>En montagne, il est <b>rapide</b> et creuse des vallées en V ; en plaine, il est <b>lent</b> et forme des <b>méandres</b>.</li>
<li>Les <b>affluents</b> se jettent dans un fleuve plus grand ; le <b>torrent</b> peut rester à sec en été.</li>
<li>L'embouchure peut être en <b>delta</b> (plusieurs bras) ou en <b>estuaire</b> (une bouche en entonnoir).</li>
<li>Le <b>lac</b> remplit une cuvette : il peut être glaciaire, volcanique, tectonique, côtier ou artificiel. Le cours d'eau qui entre est le <b>tributaire</b>, celui qui sort l'<b>émissaire</b>.</li>
<li>Le Pô (652 km) est le plus long fleuve d'Italie ; le lac de Garde est le plus grand lac.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : les lacs",
      questions: [
        { type: "mc", q: "Comment s'appelle le cours d'eau qui sort d'un lac ?", options: ["Tributaire", "Émissaire", "Affluent"], answer: 1, explain: "L'émissaire sort, le tributaire entre." },
        { type: "mc", q: "Les lacs de Bolsena et de Bracciano, presque ronds, sont d'origine…", options: ["glaciaire", "volcanique", "artificielle"], answer: 1, explain: "Ils se trouvent dans les cratères d'anciens volcans du Latium." },
        { type: "mc", q: "Quel est le plus grand lac d'Italie ?", options: ["Lac de Côme", "Lac de Garde", "Lac Trasimène"], answer: 1, explain: "Le lac de Garde, environ 370 km²." }
      ]
    }
  ],
  glossary: [
    { t: "Source", d: "Le point où naît un fleuve." },
    { t: "Embouchure", d: "Le point où un fleuve finit, dans la mer, dans un lac ou dans un autre fleuve." },
    { t: "Lit", d: "Le sillon dans lequel coule l'eau du fleuve." },
    { t: "Digue", d: "Remblai de terre le long du fleuve qui empêche l'eau de sortir." },
    { t: "Affluent", d: "Cours d'eau qui se jette dans un autre cours d'eau." },
    { t: "Confluent", d: "Point où deux cours d'eau se rejoignent." },
    { t: "Torrent", d: "Cours d'eau avec beaucoup d'eau après les pluies et peu ou pas d'eau en été." },
    { t: "Méandre", d: "Grande courbe en forme de S que le fleuve forme en plaine." },
    { t: "Delta", d: "Embouchure divisée en plusieurs bras, en forme de triangle." },
    { t: "Estuaire", d: "Embouchure à un seul bras, large, en forme d'entonnoir." },
    { t: "Bassin versant", d: "Territoire d'où toutes les eaux finissent dans un certain fleuve." },
    { t: "Tributaire / Émissaire", d: "Le cours d'eau qui entre dans un lac / le cours d'eau qui sort d'un lac." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Remets dans l'ordre le voyage du fleuve.", items: ["Source", "Cours supérieur (montagne)", "Cours inférieur (plaine)", "Embouchure"], explain: "Le fleuve naît en montagne et finit à l'embouchure." },
      { type: "mc", q: "D'où vient l'eau des fleuves ?", options: ["De la pluie, de la neige et des glaciers", "Seulement de la mer", "Des robinets"], answer: 0, explain: "C'est l'eau du cycle de l'eau : pluie, neige et glace qui fond." },
      { type: "text", q: "Comment s'appelle un cours d'eau qui se jette dans un autre cours d'eau ?", answer: ["affluent", "un affluent", "l'affluent"], explain: "Il s'appelle affluent ; le point de rencontre est le confluent." },
      { type: "tf", q: "En plaine, l'eau du fleuve est plus rapide qu'en montagne.", answer: false, explain: "En plaine, le terrain est presque plat et l'eau ralentit." },
      { type: "mc", q: "Quel est le plus long fleuve d'Italie ?", options: ["Le Tibre", "L'Arno", "Le Pô"], answer: 2, explain: "Le Pô, 652 km, naît au Viso et se jette dans l'Adriatique." },
      { type: "num", q: "Le Pô mesure 652 km et le Tibre 405 km. De combien de km le Pô est-il plus long ?", answer: 247, tol: 0, unit: "km", explain: "652 − 405 = 247 km." },
      { type: "mc", q: "Une embouchure divisée en plusieurs bras en forme de triangle s'appelle un…", options: ["estuaire", "delta", "méandre"], answer: 1, explain: "Delta, comme la lettre grecque Δ." },
      { type: "mc", q: "Qu'est-ce qu'un torrent ?", options: ["Un cours d'eau qui peut rester presque à sec en été", "Un lac de montagne", "Un fleuve qui n'a pas d'embouchure"], answer: 0, explain: "Les torrents dépendent des pluies : en été, ils peuvent se dessécher." },
      { type: "mc", q: "Les grands lacs du Nord de l'Italie (Garde, Majeur, Côme) sont d'origine…", options: ["volcanique", "glaciaire", "côtière"], answer: 1, explain: "Leurs cuvettes ont été creusées par les glaciers des glaciations." },
      { type: "tf", q: "L'émissaire est le cours d'eau qui sort d'un lac.", answer: true, explain: "Le tributaire entre, l'émissaire sort." },
      { type: "mc", q: "Quel est le lac le plus profond du monde ?", options: ["La mer Caspienne", "Le Baïkal", "Le lac de Garde"], answer: 1, explain: "Le Baïkal, en Sibérie, profond de 1642 mètres." },
      { type: "text", q: "Comment s'appelle la grande courbe en forme de S que le fleuve fait en plaine ?", answer: ["méandre", "le méandre", "méandres", "les méandres"], explain: "Le méandre." }
    ],
    gen: [["sub100", 2]]
  }
});
