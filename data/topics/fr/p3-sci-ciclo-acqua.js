TOPIC('fr', {
  id: "p3-sci-ciclo-acqua",
  title: "Le cycle de l'eau",
  intro: "L'eau de la Terre ne s'épuise jamais : elle voyage sans arrêt entre la mer, le ciel et la terre. Ce voyage sans fin s'appelle le <b>cycle de l'eau</b>.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "L'eau change de forme",
      html: `<p>On peut trouver l'eau dans <b>trois états</b> :</p>
<ul>
<li><b>Solide</b> : la glace, la neige, la grêle. Elle a une forme propre.</li>
<li><b>Liquide</b> : l'eau du robinet, des rivières et de la mer. Elle prend la forme du récipient.</li>
<li><b>Gazeux</b> : la vapeur d'eau. Elle est invisible et se répand dans l'air.</li>
</ul>
<p>C'est la <b>chaleur</b> qui change l'état de l'eau : quand on chauffe, la glace fond et l'eau s'évapore ; quand on refroidit, la vapeur redevient liquide et l'eau gèle.</p>`
    },
    {
      type: "3d",
      title: "Comment est faite une goutte d'eau ?",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0, z: 0, r: 0.6, color: "#ef4444", label: "O (oxygène)" },
          { x: 0.75, y: -0.55, z: 0, r: 0.38, color: "#f8fafc", label: "H (hydrogène)" },
          { x: -0.75, y: -0.55, z: 0, r: 0.38, color: "#f8fafc", label: "H (hydrogène)" }
        ],
        bonds: [[0, 1], [0, 2]]
      },
      caption: "Chaque goutte d'eau est faite de milliards de minuscules molécules H₂O : un atome d'oxygène et deux d'hydrogène. Fais-la tourner !"
    },
    {
      type: "text",
      title: "Les étapes du voyage",
      html: `<ol>
<li><b>Évaporation</b> : le Soleil chauffe l'eau des mers, des lacs et des rivières. Une partie devient de la <b>vapeur</b> et monte dans le ciel. Les plantes aussi « transpirent » de la vapeur par leurs feuilles (<b>transpiration</b>).</li>
<li><b>Condensation</b> : en altitude, il fait froid. La vapeur se refroidit et se transforme en toutes petites gouttelettes : les <b>nuages</b> naissent.</li>
<li><b>Précipitations</b> : les gouttelettes se rassemblent, deviennent lourdes et tombent sous forme de <b>pluie</b>, ou de <b>neige</b> ou de <b>grêle</b> s'il fait très froid.</li>
<li><b>Ruissellement et infiltration</b> : l'eau tombée coule dans les rivières jusqu'à la mer, ou pénètre dans le sol et forme les <b>nappes phréatiques</b> souterraines.</li>
</ol>
<p>Puis le Soleil chauffe de nouveau l'eau… et le cycle recommence !</p>`
    },
    {
      type: "svg",
      title: "Le cycle de l'eau",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#e0f2fe"/>
<circle cx="540" cy="55" r="35" fill="#facc15"/>
<path d="M0 230 L170 110 L300 230z" fill="#78716c"/>
<path d="M140 132 L170 110 L200 132 L185 140 L170 128 L155 140z" fill="#ffffff"/>
<rect y="230" width="600" height="90" fill="#65a30d"/>
<path d="M330 320 L330 250 Q450 225 600 245 L600 320z" fill="#2563eb"/>
<path d="M200 200 Q240 240 330 255" stroke="#3b82f6" stroke-width="10" fill="none"/>
<ellipse cx="190" cy="65" rx="70" ry="28" fill="#94a3b8"/>
<ellipse cx="240" cy="55" rx="55" ry="25" fill="#cbd5e1"/>
<path d="M150 100 l-6 16 M180 100 l-6 16 M210 100 l-6 16 M240 100 l-6 16" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/>
<path d="M470 235 Q480 180 460 130 M500 235 Q510 180 490 130 M530 235 Q540 180 520 130" stroke="#ffffff" stroke-width="4" stroke-dasharray="6 6" fill="none"/>
<path d="M440 110 Q360 60 310 60" stroke="#475569" stroke-width="4" fill="none" marker-end="url(#f)"/>
<defs><marker id="f" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#475569"/></marker></defs>
<text x="500" y="290" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">1 Évaporation</text>
<text x="380" y="45" font-size="18" fill="#1e293b" text-anchor="middle" font-weight="bold">2 Condensation</text>
<text x="80" y="150" font-size="18" fill="#1e3a8a" text-anchor="middle" font-weight="bold">3 Précipitations</text>
<text x="230" y="290" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">4 Ruissellement</text>
</svg>`,
      caption: "Le Soleil fait évaporer l'eau de la mer, la vapeur forme les nuages, la pluie tombe sur les montagnes et les rivières la ramènent à la mer."
    },
    {
      type: "widget",
      title: "Trouve les étapes du cycle",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e0f2fe"/>
<circle cx="540" cy="50" r="30" fill="#facc15"/>
<path d="M0 220 L160 100 L290 220z" fill="#78716c"/>
<rect y="220" width="600" height="80" fill="#65a30d"/>
<path d="M330 300 L330 240 Q450 215 600 235 L600 300z" fill="#2563eb"/>
<path d="M190 195 Q240 235 330 245" stroke="#3b82f6" stroke-width="10" fill="none"/>
<ellipse cx="200" cy="60" rx="70" ry="28" fill="#94a3b8"/>
<path d="M160 95 l-6 16 M190 95 l-6 16 M220 95 l-6 16" stroke="#2563eb" stroke-width="4"/>
<path d="M480 225 Q490 170 470 120 M510 225 Q520 170 500 120" stroke="#ffffff" stroke-width="4" stroke-dasharray="6 6" fill="none"/>
</svg>`,
        spots: [
          { x: 490, y: 170, label: "Évaporation" },
          { x: 200, y: 60, label: "Condensation (nuage)" },
          { x: 190, y: 105, label: "Précipitations" },
          { x: 260, y: 228, label: "Ruissellement (rivière)" },
          { x: 470, y: 270, label: "Mer" }
        ]
      },
      caption: "Clique sur chaque point et choisis le bon nom."
    },
    {
      type: "quiz",
      title: "Mini-quiz : les étapes",
      questions: [
        { type: "mc", q: "Comment s'appelle le passage de l'eau de l'état liquide à la vapeur ?", options: ["Condensation", "Évaporation", "Solidification"], answer: 1, explain: "Quand l'eau chauffe et devient de la vapeur, on parle d'évaporation." },
        { type: "mc", q: "De quoi sont faits les nuages ?", options: ["De fumée", "De coton", "De gouttelettes d'eau ou de cristaux de glace"], answer: 2, explain: "Les nuages sont des millions de toutes petites gouttelettes (ou de petits cristaux de glace)." },
        { type: "tf", q: "Le moteur du cycle de l'eau, c'est le Soleil.", answer: true, explain: "C'est la chaleur du Soleil qui fait évaporer l'eau et fait démarrer le cycle." }
      ]
    },
    {
      type: "example",
      title: "Exemple pratique : le cycle dans la cuisine",
      html: `<p>Quand maman ou papa font bouillir l'eau pour les pâtes :</p>
<ul>
<li>de la casserole sort de la <b>vapeur</b> (évaporation) ;</li>
<li>si on met un couvercle, plein de <b>gouttelettes</b> se forment dessous (condensation) ;</li>
<li>les gouttelettes grossissent et <b>retombent</b> dans la casserole (précipitations) !</li>
</ul>
<p>La casserole est comme un petit cycle de l'eau. ⚠️ Fais cette observation seulement avec un adulte : la vapeur brûle !</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : un cycle de l'eau dans un sachet",
      html: `<p>Il te faut : un sachet en plastique transparent qui se ferme, un peu d'eau colorée en bleu, du ruban adhésif.</p>
<ol>
<li>Mets un doigt d'eau dans le sachet et ferme-le bien.</li>
<li>Colle-le avec le ruban sur une fenêtre au soleil.</li>
<li>Après quelques heures, tu verras des gouttelettes en haut (les « nuages ») qui glissent ensuite vers le bas (la « pluie »).</li>
</ol>
<p>L'eau ne sort jamais du sachet : exactement comme l'eau de la Terre !</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>L'eau que tu bois aujourd'hui pourrait être la même que celle que buvaient les dinosaures ! L'eau circule sur la Terre depuis des milliards d'années et sa quantité reste presque toujours la même.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ?",
      html: `<p>Environ <b>97 %</b> de l'eau de la Terre est salée (mers et océans). Seulement 3 % est douce, et la plus grande partie est gelée aux pôles et sur les montagnes. C'est pour ça qu'il ne faut pas la gaspiller !</p>`
    },
    {
      type: "widget",
      title: "Solide, liquide ou gazeux ?",
      widget: "classify",
      options: {
        groups: ["🧊 Solide", "💧 Liquide", "💨 Gazeux"],
        items: [
          ["❄️ neige", 0],
          ["🧊 glaçon", 0],
          ["🌨️ grêle", 0],
          ["🌧️ pluie", 1],
          ["🏞️ eau de la rivière", 1],
          ["🚿 eau de la douche", 1],
          ["♨️ vapeur de la casserole", 2],
          ["🌫️ vapeur d'eau dans l'air", 2]
        ]
      },
      caption: "Mets chaque exemple dans le bon groupe."
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<p>Le cycle de l'eau a 4 étapes : <b>évaporation → condensation → précipitations → ruissellement/infiltration</b>. Le moteur, c'est le <b>Soleil</b>. L'eau ne se crée pas et ne s'épuise pas : elle <b>circule</b>.</p>`
    },
    {
      type: "3d",
      title: "Le cycle de l'eau dans un paysage 3D",
      scene: "terrain",
      caption: "Fais tourner le paysage et touche ses parties : découvre le rôle de chacune dans le voyage de l'eau.",
      options: {
        features: {
          sea: { label: "Mer", html: "La mer contient presque toute l'eau de la Terre (environ 97 %). Le Soleil la chauffe et l'eau <b>s'évapore</b> : c'est ici que commence une grande partie du cycle. Le sel, lui, reste dans la mer : c'est pour ça que la pluie est douce !" },
          mountain: { label: "Montagne", html: "L'air humide qui vient de la mer bute contre les montagnes et doit monter. En montant, il se refroidit, la vapeur <b>se condense</b> et des nuages se forment : voilà pourquoi il pleut et il neige souvent en montagne." },
          glacier: { label: "Glacier", html: "Sur les sommets les plus hauts, la neige s'accumule et devient de la glace. Le glacier est une <b>réserve d'eau</b> : en été, il fond petit à petit et alimente les torrents et les rivières. Ici, l'eau peut rester immobile pendant des milliers d'années !" },
          source: { label: "Source", html: "L'eau de pluie pénètre dans le sol (<b>infiltration</b>), coule sous terre puis ressort par une source. C'est souvent une eau fraîche et propre, filtrée par les roches." },
          river: { label: "Rivière", html: "La rivière recueille l'eau de pluie, des sources et des glaciers et la ramène vers la mer : c'est le <b>ruissellement</b>, la dernière partie du cycle." },
          lake: { label: "Lac", html: "Le lac est une cuvette pleine d'eau douce. L'eau s'évapore aussi du lac, et le lac peut servir de « réservoir » pour les rivières." },
          delta: { label: "Embouchure en delta", html: "La rivière arrive à la mer et se divise en plusieurs bras : l'eau douce retourne dans la mer et le cycle peut recommencer." }
        }
      }
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre",
      intro: "Si le schéma avec les flèches ne te suffit pas, essaie l'une de ces façons : une histoire, une expérience, une « casserole géante » ou les particules vues de près.",
      tabs: [
        {
          label: "💧 Le voyage de Goutte",
          html: `<p>Salut ! Je m'appelle <b>Goutte</b> et je vis dans la mer. Un matin, le Soleil me chauffe tellement que je deviens très légère : je suis devenue de la <b>vapeur</b> et je monte dans le ciel, invisible. ☀️</p>
<p>Là-haut, il fait froid ! Je me serre avec d'autres gouttelettes autour d'un grain de poussière : ensemble, nous formons un <b>nuage</b>. ☁️</p>
<p>Le vent nous emmène au-dessus des montagnes. Nous devenons si nombreuses et si lourdes que nous tombons : c'est la <b>pluie</b> ! 🌧️ Moi, je tombe sur un pré, je me glisse dans la terre et je coule sous le sol jusqu'à une <b>source</b>.</p>
<p>Puis je saute dans le torrent, je cours dans la <b>rivière</b>… et après quelques semaines, me revoilà dans la mer. Mon voyage ne finit jamais ! 🔄</p>`
        },
        {
          label: "🧪 Expérience à la maison",
          html: `<p>Tu peux créer un petit cycle de l'eau dans la cuisine, <b>avec l'aide d'un adulte</b> :</p>
<ol>
<li>Mets un peu d'eau dans une casserole et chauffe-la (la plaque de cuisson joue le rôle du <b>Soleil</b>).</li>
<li>Un adulte tient au-dessus de la casserole un couvercle froid avec des glaçons dessus (c'est le <b>ciel froid</b>).</li>
<li>Regarde sous le couvercle : des gouttelettes se forment (<b>condensation</b>) puis retombent dans la casserole (<b>pluie</b>) !</li>
</ol>
<p><b>Version sans feu :</b> mets un peu d'eau dans un sachet en plastique transparent bien fermé et colle-le sur une fenêtre au soleil. Après quelques heures, tu verras des gouttelettes sur les parois qui glissent vers le bas.</p>`
        },
        {
          label: "🍲 La casserole géante",
          html: `<p>Imagine la Terre comme une <b>casserole géante avec un couvercle</b> :</p>
<ul>
<li>le <b>Soleil</b> est la plaque qui chauffe ;</li>
<li>la <b>mer</b> est l'eau dans la casserole ;</li>
<li>l'<b>air froid en altitude</b> est le couvercle, où la vapeur redevient de l'eau ;</li>
<li>les gouttes qui retombent sont la <b>pluie</b>.</li>
</ul>
<p>La différence ? La casserole de la Terre n'est jamais fermée à clé : l'eau peut s'arrêter dans les glaciers, dans les lacs, sous terre ou à l'intérieur des plantes et des animaux (et même à l'intérieur de toi !).</p>`
        },
        {
          label: "🔬 Les particules de près",
          html: `<p>L'eau est faite de minuscules particules (des molécules). Quand la température change, leur façon de bouger change :</p>
<ul>
<li><b>Glace</b> : les molécules sont serrées et immobiles à leur place, comme des enfants assis en rang.</li>
<li><b>Eau liquide</b> : les molécules glissent les unes à côté des autres, comme des enfants qui jouent dans la cour.</li>
<li><b>Vapeur</b> : les molécules courent libres et loin les unes des autres, comme des enfants qui s'échappent dans un pré immense.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="20" width="180" height="180" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="210" y="20" width="180" height="180" rx="12" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="410" y="20" width="180" height="180" rx="12" fill="#f1f5f9" stroke="#1d4ed8" stroke-width="3"/>
<g fill="#2563eb">
<circle cx="45" cy="55" r="12"/><circle cx="80" cy="55" r="12"/><circle cx="115" cy="55" r="12"/><circle cx="150" cy="55" r="12"/>
<circle cx="45" cy="95" r="12"/><circle cx="80" cy="95" r="12"/><circle cx="115" cy="95" r="12"/><circle cx="150" cy="95" r="12"/>
<circle cx="45" cy="135" r="12"/><circle cx="80" cy="135" r="12"/><circle cx="115" cy="135" r="12"/><circle cx="150" cy="135" r="12"/>
<circle cx="45" cy="175" r="12"/><circle cx="80" cy="175" r="12"/><circle cx="115" cy="175" r="12"/><circle cx="150" cy="175" r="12"/>
<circle cx="240" cy="120" r="12"/><circle cx="268" cy="140" r="12"/><circle cx="300" cy="118" r="12"/><circle cx="330" cy="145" r="12"/><circle cx="360" cy="125" r="12"/>
<circle cx="250" cy="170" r="12"/><circle cx="285" cy="175" r="12"/><circle cx="318" cy="172" r="12"/><circle cx="352" cy="175" r="12"/><circle cx="290" cy="90" r="12"/>
<circle cx="440" cy="50" r="12"/><circle cx="545" cy="70" r="12"/><circle cx="490" cy="120" r="12"/><circle cx="430" cy="170" r="12"/><circle cx="560" cy="165" r="12"/>
</g>
<text x="100" y="235" font-size="20" text-anchor="middle" fill="#1e3a8a">🧊 Solide</text>
<text x="300" y="235" font-size="20" text-anchor="middle" fill="#1e3a8a">💧 Liquide</text>
<text x="500" y="235" font-size="20" text-anchor="middle" fill="#1e3a8a">♨️ Gazeux</text>
</svg>`
        },
        {
          label: "⚛️ La molécule en 3D",
          html: `<p>Voici une molécule d'eau : un atome d'<b>oxygène</b> (rouge) et deux d'<b>hydrogène</b> (blancs). On l'écrit <b>H₂O</b>. Fais-la tourner avec le doigt : elle a la forme d'un petit « V », comme une tête avec deux grandes oreilles rondes !</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 0, z: 0, r: 0.55, color: "#ef4444", label: "O" },
              { x: 0.75, y: 0.58, z: 0, r: 0.35, color: "#e5e7eb", label: "H" },
              { x: -0.75, y: 0.58, z: 0, r: 0.35, color: "#e5e7eb", label: "H" }
            ],
            bonds: [[0, 1], [0, 2]]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte du cycle de l'eau : touche les nœuds et découvre le pourquoi",
      nodes: [
        { id: "sole", label: "Soleil ☀️", x: 50, y: 6, color: "#f59e0b", html: "Le Soleil donne l'énergie (la chaleur) qui fait tourner tout le cycle.", why: "Sans la chaleur du Soleil, l'eau ne s'évaporerait pas : tout le cycle est comme un moteur qui fonctionne à l'énergie solaire. Même le vent, qui déplace les nuages, naît parce que le Soleil chauffe la Terre différemment d'un endroit à l'autre." },
        { id: "evaporazione", label: "Évaporation", x: 18, y: 30, color: "#f97316", html: "L'eau liquide se transforme en vapeur invisible.", why: "Les molécules d'eau bougent tout le temps. Quand elles sont chauffées, les plus rapides arrivent à « sauter » hors de la surface et s'envolent dans l'air. C'est pour ça que le linge étendu sèche plus vite au soleil et au vent." },
        { id: "condensazione", label: "Condensation", x: 50, y: 32, color: "#64748b", html: "La vapeur se refroidit et redevient des gouttelettes : les nuages naissent.", why: "Plus on monte, plus l'air est froid. La vapeur refroidie s'accroche à de minuscules grains de poussière ou de sel et forme des gouttelettes. Les nuages ne tombent pas parce que les gouttelettes sont toutes petites (il en faut environ un million pour faire une seule goutte de pluie !) et que les courants d'air les maintiennent en l'air." },
        { id: "precipitazione", label: "Précipitations", x: 82, y: 30, color: "#3b82f6", html: "La pluie, la neige ou la grêle qui tombent sur le sol.", why: "Les gouttelettes dans le nuage se heurtent et se rassemblent : quand elles deviennent trop lourdes, les courants ne peuvent plus les porter et elles tombent. S'il fait très froid, elles tombent sous forme de neige ou de grêle." },
        { id: "infiltrazione", label: "Infiltration", x: 80, y: 62, color: "#92400e", html: "Une partie de l'eau pénètre dans le sol et forme les nappes souterraines.", why: "Le sol est plein de petits espaces entre les grains, comme une éponge. L'eau s'y glisse, est filtrée par les roches et peut ressortir par les sources après des jours ou des années." },
        { id: "scorrimento", label: "Ruissellement", x: 50, y: 72, color: "#0ea5e9", html: "Les ruisseaux et les rivières ramènent l'eau à la mer.", why: "L'eau descend toujours vers le bas à cause de la gravité. En 1674, le Français <b>Pierre Perrault</b> mesura la pluie tombée près de la Seine et découvrit qu'elle suffisait (et même plus !) à alimenter le fleuve : ce fut la première preuve que les rivières naissent de la pluie." },
        { id: "mare", label: "Mers et océans", x: 18, y: 72, color: "#1d4ed8", html: "Le grand réservoir : il contient environ 97 % de toute l'eau de la Terre.", why: "Quelques années après Perrault, l'astronome anglais <b>Edmond Halley</b> calcula combien d'eau s'évapore de la mer Méditerranée et vit que c'est autant que ce qu'apportent les fleuves : ainsi la mer ne déborde pas et ne se vide pas." },
        { id: "piante", label: "Plantes", x: 50, y: 94, color: "#16a34a", html: "Les plantes absorbent l'eau avec leurs racines et la rejettent sous forme de vapeur par leurs feuilles (transpiration).", why: "Les feuilles ont de minuscules ouvertures, les stomates, par où sort la vapeur d'eau. Une grande forêt comme l'Amazonie renvoie dans le ciel tant d'eau qu'elle « fabrique » une partie de sa propre pluie." }
      ],
      edges: [
        ["sole", "evaporazione", "chauffe et provoque"],
        ["evaporazione", "condensazione", "la vapeur monte →"],
        ["condensazione", "precipitazione", "gouttes lourdes →"],
        ["precipitazione", "infiltrazione", "dans le sol"],
        ["precipitazione", "scorrimento", "en surface"],
        ["infiltrazione", "scorrimento", "sources"],
        ["scorrimento", "mare", "retourne à la"],
        ["mare", "evaporazione", "recommence"],
        ["piante", "evaporazione", "transpiration"],
        ["infiltrazione", "piante", "racines"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : l'eau dans tous ses états",
      questions: [
        { type: "tf", q: "La glace, c'est de l'eau à l'état solide.", answer: true, explain: "La glace est de l'eau solide." },
        { type: "mc", q: "Où va l'eau qui pénètre dans le sol ?", options: ["Elle disparaît", "Elle forme les nappes phréatiques souterraines", "Elle retourne tout de suite dans les nuages"], answer: 1, explain: "L'eau s'infiltre et forme des réserves souterraines appelées nappes." },
        { type: "num", q: "Combien d'étapes principales a le cycle de l'eau ?", answer: 4, explain: "Évaporation, condensation, précipitations, ruissellement." }
      ]
    }
  ],
  glossary: [
    { t: "Évaporation", d: "Passage de l'eau de l'état liquide à la vapeur, grâce à la chaleur." },
    { t: "Condensation", d: "Passage de la vapeur en gouttelettes d'eau liquide, à cause du froid." },
    { t: "Précipitations", d: "Chute de l'eau des nuages : pluie, neige, grêle." },
    { t: "Infiltration", d: "L'eau qui pénètre dans le sol." },
    { t: "Nappe phréatique", d: "Réserve d'eau sous terre." },
    { t: "Transpiration", d: "La vapeur d'eau que les plantes rejettent par leurs feuilles." },
    { t: "Vapeur d'eau", d: "Eau à l'état gazeux, invisible." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qu'est-ce qui fait démarrer le cycle de l'eau ?", options: ["Le vent", "La chaleur du Soleil", "La Lune"], answer: 1, explain: "La chaleur du Soleil fait évaporer l'eau." },
      { type: "order", q: "Range dans l'ordre les étapes du cycle de l'eau.", items: ["Évaporation", "Condensation", "Précipitations", "Ruissellement vers la mer"], explain: "L'eau s'évapore, forme des nuages, tombe et retourne à la mer." },
      { type: "tf", q: "La quantité d'eau sur la Terre diminue chaque jour parce que nous la buvons.", answer: false, explain: "L'eau circule sans arrêt : elle retourne toujours dans le cycle." },
      { type: "mc", q: "Comment s'appelle l'eau qui tombe en boulettes de glace ?", options: ["Neige", "Grêle", "Rosée"], answer: 1, explain: "La grêle est faite de boulettes de glace." },
      { type: "text", q: "Comment s'appelle le passage de la vapeur aux gouttelettes ?", answer: ["condensation", "la condensation"], explain: "Cela s'appelle la condensation." },
      { type: "mc", q: "Quelle part de l'eau de la Terre est salée ?", options: ["Environ 3 %", "Environ la moitié", "Environ 97 %"], answer: 2, explain: "Environ 97 % de l'eau se trouve dans les mers et les océans." },
      { type: "tf", q: "Les plantes aussi rejettent de la vapeur d'eau.", answer: true, explain: "Cela s'appelle la transpiration." },
      { type: "mc", q: "La vapeur qui sort de la casserole qui bout, c'est de l'eau à l'état…", options: ["solide", "liquide", "gazeux"], answer: 2, explain: "La vapeur, c'est de l'eau gazeuse." },
      { type: "mc", q: "De quels atomes est faite une molécule d'eau ?", options: ["2 d'hydrogène et 1 d'oxygène", "1 de carbone et 2 d'oxygène", "Seulement de l'oxygène"], answer: 0, explain: "H₂O : deux atomes d'hydrogène et un d'oxygène." },
      { type: "tf", q: "Les nuages se forment parce qu'en altitude l'air est plus froid.", answer: true, explain: "Le froid fait condenser la vapeur en gouttelettes." }
    ]
  }
});
