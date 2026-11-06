TOPIC('fr', {
  id: 'p3-geo-paesaggi',
  title: `Les paysages`,
  intro: `Regarde autour de toi : tu vois des montagnes, des collines, une grande plaine ou la mer ? Chaque lieu a son <b>paysage</b>. Dans cette leçon, nous allons découvrir comment sont faites la montagne, la colline, la plaine et la mer, et surtout <b>comment elles se sont formées</b>.`,
  minutes: 30,
  sections: [
    {
      type: 'text', title: `Qu'est-ce qu'un paysage ?`,
      html: `<p>Le <b>paysage</b>, c'est tout ce que nous voyons quand nous regardons un lieu : le terrain, l'eau, les plantes, les animaux et aussi les choses construites par les gens.</p>
<ul>
<li>Les <b>éléments naturels</b> sont faits par la nature : montagnes, fleuves, forêts, lacs, la mer.</li>
<li>Les <b>éléments humains</b> (anthropiques) sont faits par l'homme : maisons, routes, ponts, champs cultivés, ports.</li>
</ul>
<p>Quand un paysage n'a presque que des éléments naturels, on parle de <b>paysage naturel</b>. Quand l'homme l'a beaucoup transformé, on parle de <b>paysage humanisé</b>.</p>
<p>Les principaux paysages que nous étudions sont au nombre de quatre : la <b>montagne</b>, la <b>colline</b>, la <b>plaine</b> et la <b>mer</b>.</p>`
    },
    {
      type: '3d', title: `Explore le paysage en 3D`,
      scene: 'terrain',
      caption: `Fais tourner le paysage avec le doigt ou la souris. Touche les étiquettes : la partie s'illumine et l'explication apparaît.`,
      options: {
        features: {
          mountain: { label: `Montagne`, html: `Relief haut de plus de <b>600 mètres</b> au-dessus du niveau de la mer. Elle a des versants raides et souvent rocheux. En Italie : les <b>Alpes</b> au nord et les <b>Apennins</b> tout le long de la péninsule.` },
          peak: { label: `Sommet (cime)`, html: `Le point le plus haut d'une montagne. Le sommet le plus haut d'Italie est le <b>mont Blanc</b> (4805 m), dans les Alpes.` },
          glacier: { label: `Glacier`, html: `Une grande masse de glace qui se forme en haute montagne, là où la neige ne fond jamais complètement. Elle glisse très lentement vers la vallée. Les glaciers sont des <b>réserves d'eau douce</b>.` },
          valley: { label: `Vallée`, html: `L'espace bas entre deux montagnes, où coule d'habitude un fleuve ou un torrent. Les vallées en forme de <b>V</b> sont creusées par les fleuves, celles en forme de <b>U</b> par les glaciers.` },
          hill: { label: `Colline`, html: `Relief plus bas que la montagne : <b>moins de 600 mètres</b>. Elle a des formes douces et arrondies. C'est la forme de terrain la plus répandue en Italie (environ 42 %). Exemples : les collines des <b>Langhe</b> et de la <b>Toscane</b>.` },
          plain: { label: `Plaine`, html: `Territoire <b>plat et bas</b>, sans reliefs. Elle est souvent formée par les débris apportés par les fleuves. La plus grande d'Italie est la <b>plaine du Pô</b> (plaine Padane), créée par le fleuve Pô.` },
          source: { label: `Source`, html: `Le point où naît un fleuve : l'eau sort du sol ou vient de la fonte des neiges et des glaciers. Le Pô naît au <b>mont Viso</b>.` },
          river: { label: `Fleuve`, html: `Un cours d'eau qui coule toujours de la source jusqu'à l'<b>embouchure</b> (mer ou lac). Le plus long fleuve d'Italie est le <b>Pô</b> (652 km).` },
          lake: { label: `Lac`, html: `Une grande cuvette pleine d'eau douce, entourée de terres. Le plus grand lac d'Italie est le <b>lac de Garde</b>.` },
          volcano: { label: `Volcan`, html: `Une montagne spéciale : elle se forme quand le <b>magma</b> (roche fondue) monte de l'intérieur de la Terre et sort à la surface. L'<b>Etna</b>, en Sicile, est le volcan actif le plus haut d'Europe.` },
          sea: { label: `Mer`, html: `Une grande étendue d'eau salée. L'Italie est entourée par la <b>mer Méditerranée</b>, divisée en mer Ligure, Tyrrhénienne, Ionienne et Adriatique.` }
        }
      }
    },
    {
      type: 'text', title: `La montagne`,
      html: `<p>La <b>montagne</b> est un relief qui dépasse <b>600 mètres</b> de hauteur. Plusieurs montagnes proches forment une <b>chaîne de montagnes</b>.</p>
<ul>
<li><b>Sommet</b> : la partie la plus haute.</li>
<li><b>Versants</b> (ou pentes) : les flancs de la montagne.</li>
<li><b>Pied</b> : la partie la plus basse.</li>
<li><b>Vallée</b> : l'espace entre deux montagnes.</li>
<li><b>Col</b> : le point le plus bas pour traverser une chaîne.</li>
</ul>
<p>Plus on monte en montagne, plus il fait <b>froid</b> : en bas, il y a des forêts de feuillus (châtaigniers, hêtres), plus haut des conifères (sapins, mélèzes), puis des prairies (pâturages) et enfin des rochers, de la neige et des glaciers.</p>
<p>En montagne, l'homme pratique l'<b>élevage</b>, le <b>tourisme</b> (ski, randonnées) et produit de l'énergie grâce aux <b>barrages</b>.</p>`
    },
    {
      type: 'svg', title: `Les étages de la montagne`,
      caption: `Plus on monte, plus la température baisse et plus la végétation change.`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#e0f2fe"/>
<polygon points="40,300 300,30 560,300" fill="#78716c"/>
<polygon points="248,84 300,30 352,84" fill="#ffffff"/>
<polygon points="170,164 248,84 352,84 430,164" fill="#a8a29e"/>
<polygon points="130,205 170,164 430,164 470,205" fill="#84cc16"/>
<polygon points="90,250 130,205 470,205 510,250" fill="#166534"/>
<polygon points="40,300 90,250 510,250 560,300" fill="#65a30d"/>
<text x="300" y="72" font-size="15" text-anchor="middle" fill="#1e293b">neige et glace</text>
<text x="300" y="130" font-size="15" text-anchor="middle" fill="#1e293b">rochers</text>
<text x="300" y="191" font-size="15" text-anchor="middle" fill="#1e293b">prairies et pâturages</text>
<text x="300" y="234" font-size="15" text-anchor="middle" fill="#ffffff">conifères (sapins, mélèzes)</text>
<text x="300" y="282" font-size="15" text-anchor="middle" fill="#ffffff">feuillus (hêtres, châtaigniers)</text>
<text x="575" y="40" font-size="14" fill="#0369a1">❄️ froid</text>
<text x="565" y="300" font-size="14" fill="#b45309">☀️ chaud</text>
</svg>`
    },
    {
      type: 'text', title: `La colline`,
      html: `<p>La <b>colline</b> est un relief plus bas que la montagne : elle ne dépasse pas <b>600 mètres</b>. Elle a des sommets arrondis et des pentes douces.</p>
<p>Le climat est doux et le sol est souvent fertile : c'est pourquoi on cultive sur les collines la <b>vigne</b> (pour le raisin et le vin), les <b>oliviers</b>, les arbres fruitiers et les céréales. Sur les collines italiennes, il y a beaucoup de vieux villages, construits en hauteur pour se défendre.</p>
<p>Il existe trois types de collines :</p>
<ul>
<li><b>Morainiques</b> : formées par les débris laissés par les glaciers (près des grands lacs du Nord).</li>
<li><b>Volcaniques</b> : formées par d'anciens volcans éteints (les monts Albains près de Rome).</li>
<li><b>D'érosion</b> : d'anciennes montagnes usées et abaissées par le vent et l'eau.</li>
</ul>`
    },
    {
      type: 'text', title: `La plaine`,
      html: `<p>La <b>plaine</b> est un territoire plat et bas. En Italie, il y a peu de plaines (environ 23 % du territoire), mais beaucoup de gens y vivent.</p>
<p>Les plaines peuvent être :</p>
<ul>
<li><b>Alluviales</b> : formées par les fleuves qui, pendant les crues, déposent du sable et de la terre (la <b>plaine du Pô</b>).</li>
<li><b>Volcaniques</b> : formées par les matériaux des volcans (la <b>plaine de Campanie</b>).</li>
<li><b>Asséchées</b> : autrefois c'étaient des marais, puis l'homme les a asséchés (l'<b>Agro Pontino</b>).</li>
</ul>
<p>En plaine, il est facile de construire des routes, des voies ferrées, des villes et des usines, et de cultiver de grands champs de maïs, de blé et de riz.</p>`
    },
    {
      type: 'example', title: `Exemple pratique : un voyage du mont Blanc à la mer`,
      html: `<p>Imagine que tu fais un voyage de <b>Courmayeur</b> (vallée d'Aoste) jusqu'à <b>Venise</b> :</p>
<ol>
<li>Tu pars au pied du <b>mont Blanc</b> : tu vois des glaciers et des sommets très hauts (montagne).</li>
<li>Tu descends le long de la <b>vallée d'Aoste</b>, creusée par la Doire Baltée (vallée).</li>
<li>Tu arrives dans les collines près d'<b>Ivrée</b>, formées par les débris d'un ancien glacier (collines morainiques).</li>
<li>Tu traverses la grande <b>plaine du Pô</b> : des rizières, des champs de maïs et des villes comme Milan.</li>
<li>Tu arrives à Venise, sur la <b>mer Adriatique</b>.</li>
</ol>
<p>En une seule journée de voyage, tu as vu les quatre paysages !</p>`
    },
    {
      type: 'quiz', title: `Mini-quiz : reconnais le paysage`,
      questions: [
        { type: 'mc', q: `Un relief haut de 1500 mètres est…`, options: [`une colline`, `une montagne`, `une plaine`], answer: 1, explain: `Il dépasse 600 mètres, donc c'est une montagne.` },
        { type: 'tf', q: `La plaine du Pô a été formée surtout par le fleuve Pô.`, answer: true, explain: `C'est une plaine alluviale : le Pô et ses affluents ont déposé du sable et de la terre pendant des milliers d'années.` },
        { type: 'mc', q: `Où cultive-t-on le plus la vigne et les oliviers ?`, options: [`En haute montagne`, `Sur les collines`, `Sur les glaciers`], answer: 1, explain: `Sur les collines, le climat est doux et les pentes sont ensoleillées : parfait pour la vigne et les oliviers.` }
      ]
    },
    {
      type: 'text', title: `La mer`,
      html: `<p>La <b>mer</b> est une grande étendue d'eau <b>salée</b>. L'endroit où la terre rencontre la mer s'appelle la <b>côte</b>.</p>
<p>La côte peut être <b>haute et rocheuse</b> (avec des falaises à pic, comme en Ligurie) ou <b>basse et sableuse</b> (avec de longues plages, comme en Romagne).</p>
<p>La mer est importante pour la <b>pêche</b>, les <b>transports</b> par bateau, le <b>tourisme</b>, et parce qu'elle rend le climat plus doux : en été elle rafraîchit, en hiver elle réchauffe.</p>
<p>Les côtes de l'Italie mesurent environ <b>7500 km</b> !</p>`
    },
    {
      type: 'widget', title: `Jeu : dans quel paysage ?`,
      widget: 'classify',
      caption: `Place chaque élément dans le paysage où on le trouve le plus facilement.`,
      options: {
        groups: [`⛰️ Montagne`, `🌄 Colline`, `🌾 Plaine`, `🌊 Mer`],
        items: [
          [`❄️ glacier`, 0], [`⛷️ piste de ski`, 0], [`🌲 forêt de sapins`, 0],
          [`🍇 vignoble`, 1], [`🫒 oliveraie`, 1], [`🏘️ village sur le sommet arrondi`, 1],
          [`🌽 grands champs de maïs`, 2], [`🛣️ autoroute toute droite sur des kilomètres`, 2], [`🌾 rizières`, 2],
          [`⚓ port`, 3], [`🐟 bateau de pêche`, 3], [`🏖️ plage`, 3]
        ]
      }
    },
    {
      type: 'curiosity', title: `Le savais-tu ? Les Alpes grandissent encore !`,
      html: `<p>Les Alpes se sont formées parce que la plaque africaine pousse contre la plaque européenne. Cette poussée <b>n'est pas terminée</b> : certaines zones des Alpes s'élèvent encore d'environ <b>1 à 2 millimètres par an</b>. Ça paraît très peu, mais en un million d'années, ça fait plus d'un kilomètre ! Pendant ce temps, la pluie, la glace et le vent les usent.</p>`
    },
    {
      type: 'alternatives', title: `D'autres façons de comprendre`,
      intro: `Si les définitions ne te suffisent pas, essaie de comprendre les paysages d'une autre façon.`,
      tabs: [
        {
          label: `✋ Avec les mains`,
          html: `<p>Pose une <b>serviette</b> sur la table et pousse-la des deux côtés vers le centre : des plis se soulèvent ! C'est comme ça que se forment les montagnes : deux « morceaux » de croûte terrestre se poussent et le terrain se plie vers le haut (<b>orogenèse</b>).</p>
<p>Les plis hauts et pointus ressemblent aux <b>jeunes montagnes</b> (les Alpes). Si tu les écrases un peu avec la main, ils deviennent bas et ronds : comme les <b>collines d'érosion</b>, de vieilles montagnes usées par le temps.</p>`
        },
        {
          label: `🏖️ L'expérience du bac à sable`,
          html: `<p>Fais une petite montagne de sable sur un plateau et verse doucement de l'eau sur le sommet avec un arrosoir.</p>
<ul>
<li>L'eau creuse des <b>sillons</b> : ce sont les <b>vallées</b>.</li>
<li>Le sable descend et se dépose en bas en formant une zone plate : c'est une <b>plaine alluviale</b> !</li>
<li>S'il y a un creux, l'eau s'arrête : c'est un <b>lac</b>.</li>
</ul>
<p>En petit, tu as refait ce que les fleuves font en des milliers d'années.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#f8fafc"/>
<rect x="40" y="180" width="520" height="30" fill="#94a3b8"/>
<polygon points="60,180 200,60 340,180" fill="#fbbf24"/>
<path d="M200,70 C210,110 190,140 220,180" stroke="#3b82f6" stroke-width="5" fill="none"/>
<rect x="340" y="168" width="200" height="12" fill="#d97706"/>
<text x="200" y="45" font-size="16" text-anchor="middle" fill="#1e293b">💧 eau sur le sommet</text>
<text x="235" y="135" font-size="15" fill="#1d4ed8">vallée</text>
<text x="440" y="160" font-size="15" text-anchor="middle" fill="#92400e">sable déposé = plaine</text>
</svg>`
        },
        {
          label: `📏 Avec les nombres`,
          html: `<p>Pense à la hauteur comme aux étages d'un immeuble. Un étage mesure environ 3 mètres.</p>
<ul>
<li>Une <b>colline</b> de 300 m, c'est comme un gratte-ciel de <b>100 étages</b>.</li>
<li>La limite colline/montagne (600 m), c'est <b>200 étages</b>.</li>
<li>Le <b>mont Blanc</b> (4805 m) serait un immeuble d'environ <b>1600 étages</b> !</li>
<li>La <b>plaine</b>, c'est le rez-de-chaussée : presque toute plate.</li>
</ul>`,
          scene: 'blocks', options: { mode: 'array', a: 2, b: 8 }
        }
      ]
    },
    {
      type: 'conceptMap', title: `Carte : comment naissent les paysages`,
      nodes: [
        { id: 'terra', label: `Forces de la Terre`, x: 50, y: 8, color: '#a855f7', html: `À l'intérieur et à l'extérieur de la Terre agissent des forces qui construisent et usent le paysage.`, why: `La Terre n'est pas immobile : à l'intérieur, elle est très chaude et la croûte est divisée en grands morceaux (les plaques) qui bougent. À l'extérieur, le soleil, l'eau, la glace et le vent travaillent sans arrêt. Les paysages sont le résultat de cette « lutte » entre les forces qui soulèvent et celles qui abaissent.` },
        { id: 'orogenesi', label: `Orogenèse`, x: 18, y: 32, color: '#ef4444', html: `La naissance des montagnes : deux plaques se heurtent et le terrain se plie et se soulève.`, why: `Les géologues l'ont compris en remarquant que, dans les Alpes, on trouve des fossiles d'animaux marins : ces roches étaient au fond de la mer et elles ont été soulevées ! Les Alpes sont nées de la collision entre l'Afrique et l'Europe, commencée il y a environ 65 millions d'années.` },
        { id: 'vulcanismo', label: `Volcanisme`, x: 50, y: 32, color: '#f97316', html: `Le magma monte et construit des volcans, des collines et des plaines volcaniques.`, why: `Sous la croûte, les roches sont si chaudes qu'elles fondent. Le magma, plus léger, remonte par les fissures. En Italie, il y a beaucoup de volcans justement parce que nous sommes près de la frontière entre des plaques.` },
        { id: 'erosione', label: `Érosion`, x: 82, y: 32, color: '#0ea5e9', html: `L'eau, la glace et le vent usent les roches et emportent les débris.`, why: `On le voit tous les jours : un galet de rivière est lisse parce que l'eau l'a usé. En des millions d'années, ce travail lent abaisse des montagnes entières.` },
        { id: 'montagna', label: `Montagnes`, x: 12, y: 62, color: '#78716c', html: `Des reliefs de plus de 600 m.`, why: `Elles sont jeunes et hautes quand l'orogenèse est récente (les Alpes), plus basses et arrondies quand elles sont anciennes et que l'érosion a travaillé longtemps.` },
        { id: 'collina', label: `Collines`, x: 38, y: 62, color: '#84cc16', html: `Des reliefs de moins de 600 m.`, why: `Ce peuvent être des montagnes abaissées par l'érosion, des volcans éteints ou des tas de débris laissés par les glaciers (collines morainiques).` },
        { id: 'sedimentazione', label: `Sédimentation`, x: 70, y: 62, color: '#eab308', html: `Les débris transportés se déposent là où l'eau ralentit.`, why: `Quand un fleuve arrive en plaine ou à la mer, il ralentit et n'a plus la force de transporter le sable et les galets : il les laisse tomber, couche après couche.` },
        { id: 'pianura', label: `Plaines`, x: 70, y: 88, color: '#22c55e', html: `Des zones plates et basses.`, why: `La plaine du Pô était un golfe de la mer Adriatique : les fleuves l'ont remplie de débris en des millions d'années et l'ont transformée en terre ferme.` },
        { id: 'valle', label: `Vallées`, x: 30, y: 88, color: '#0284c7', html: `Des sillons entre les montagnes.`, why: `Une vallée en V est creusée par un fleuve qui entaille le terrain ; une vallée en U a été élargie par un énorme glacier pendant les glaciations.` }
      ],
      edges: [
        ['terra', 'orogenesi', 'poussée des plaques'], ['terra', 'vulcanismo', 'chaleur interne'], ['terra', 'erosione', 'eau, glace, vent'],
        ['orogenesi', 'montagna', 'soulève'], ['vulcanismo', 'collina', 'construit'], ['erosione', 'collina', 'abaisse les montagnes'],
        ['erosione', 'valle', 'creuse'], ['erosione', 'sedimentazione', 'apporte les débris'], ['sedimentazione', 'pianura', 'forme']
      ]
    },
    {
      type: 'example', title: `Exemple pratique : pourquoi les villes sont-elles en plaine ?`,
      html: `<p>Regarde une carte de l'Italie : <b>Milan, Turin, Bologne</b> sont en plaine. Pourquoi ?</p>
<ul>
<li>Il est facile de construire des maisons et des routes sur un terrain plat.</li>
<li>Il y a des fleuves qui donnent de l'eau pour boire et cultiver.</li>
<li>Le sol alluvial est fertile : on produit beaucoup de nourriture.</li>
</ul>
<p>En montagne, au contraire, les villages sont plus petits : le terrain est raide, il fait froid et les routes sont difficiles. Le paysage décide où et comment vivent les gens !</p>`
    },
    {
      type: 'curiosity', title: `Le savais-tu ? La plaine du Pô était une mer !`,
      html: `<p>Il y a quelques millions d'années, à la place de la plaine du Pô, il y avait un grand <b>golfe de la mer Adriatique</b>. Les fleuves qui descendaient des Alpes et des Apennins l'ont rempli de sable et de boue. Aujourd'hui encore, le delta du Pô <b>avance</b> dans la mer : la ville d'<b>Adria</b>, qui a donné son nom à la mer Adriatique, était un port et se trouve maintenant à environ 20 km de la côte !</p>`
    },
    {
      type: 'quiz', title: `Mini-quiz : comment ils se forment`,
      questions: [
        { type: 'mc', q: `Comment s'appelle la naissance des montagnes ?`, options: [`Érosion`, `Orogenèse`, `Sédimentation`], answer: 1, explain: `Orogenèse vient du grec « oros » = montagne et « genesis » = naissance.` },
        { type: 'mc', q: `Une vallée en forme de U a été creusée par…`, options: [`un fleuve`, `un glacier`, `le vent`], answer: 1, explain: `Les glaciers sont larges et lourds : ils élargissent la vallée et lui donnent la forme d'un U.` },
        { type: 'tf', q: `L'érosion use les roches et abaisse les reliefs.`, answer: true, explain: `L'eau, la glace et le vent usent lentement les roches.` }
      ]
    },
    {
      type: 'remember', title: `À retenir`,
      html: `<ul>
<li><b>Montagne</b> : plus de 600 m · <b>Colline</b> : moins de 600 m · <b>Plaine</b> : plate et basse · <b>Mer</b> : eau salée.</li>
<li>Les montagnes naissent par <b>orogenèse</b>, l'<b>érosion</b> les use, la <b>sédimentation</b> forme les plaines.</li>
<li>L'Italie est composée de 42 % de collines, 35 % de montagnes et 23 % de plaines.</li>
</ul>`
    }
  ],
  glossary: [
    { t: `Paysage`, d: `Tout ce que l'on voit d'un lieu : éléments naturels et construits par l'homme.` },
    { t: `Élément humain (anthropique)`, d: `Élément du paysage construit par l'homme (maisons, routes, champs).` },
    { t: `Orogenèse`, d: `Formation des montagnes par la collision entre des plaques.` },
    { t: `Érosion`, d: `Usure des roches par l'eau, la glace et le vent.` },
    { t: `Sédimentation`, d: `Dépôt de sable et de débris là où l'eau ralentit.` },
    { t: `Plaine alluviale`, d: `Plaine formée par les débris des fleuves.` },
    { t: `Glacier`, d: `Grande masse de glace permanente qui descend lentement vers la vallée.` },
    { t: `Col`, d: `Passage le plus bas pour traverser une chaîne de montagnes.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: 'mc', q: `Quelle est la limite de hauteur entre colline et montagne ?`, options: [`100 m`, `600 m`, `2000 m`], answer: 1, explain: `En dessous de 600 m, c'est une colline ; au-dessus, c'est une montagne.` },
      { type: 'mc', q: `Quelle est la montagne la plus haute d'Italie ?`, options: [`l'Etna`, `le mont Blanc`, `le mont Viso`], answer: 1, explain: `Le mont Blanc, 4805 m, dans les Alpes.` },
      { type: 'tf', q: `En Italie, la forme de terrain la plus répandue est la plaine.`, answer: false, explain: `La plus répandue est la colline (environ 42 %) ; la plaine ne représente que 23 %.` },
      { type: 'text', q: `Comment s'appelle la plus grande plaine d'Italie ?`, answer: [`plaine du po`, `plaine du pô`, `la plaine du pô`, `plaine padane`, `la plaine padane`], explain: `La plaine du Pô (plaine Padane), formée par le Pô.` },
      { type: 'mc', q: `Une plaine formée par les débris des fleuves s'appelle…`, options: [`volcanique`, `alluviale`, `asséchée`], answer: 1, explain: `Alluviale : formée par les alluvions des fleuves.` },
      { type: 'mc', q: `Les collines morainiques sont formées par…`, options: [`d'anciens volcans`, `des débris laissés par les glaciers`, `les vagues de la mer`], answer: 1, explain: `La moraine est le matériau transporté et laissé par le glacier.` },
      { type: 'order', q: `Range de la partie la plus haute à la plus basse de la montagne.`, items: [`neige et glace`, `rochers`, `prairies et pâturages`, `forêts de conifères`, `forêts de feuillus`], explain: `En montant, il fait plus froid : la végétation change jusqu'à disparaître.` },
      { type: 'mc', q: `Lequel est un élément humain ?`, options: [`un fleuve`, `un pont`, `un glacier`], answer: 1, explain: `Le pont est construit par l'homme.` },
      { type: 'tf', q: `La plaine du Pô était autrefois un golfe de la mer.`, answer: true, explain: `Les fleuves l'ont remplie de débris en des millions d'années.` },
      { type: 'mc', q: `L'Etna est…`, options: [`une colline morainique`, `un volcan actif`, `une plaine`], answer: 1, explain: `C'est le volcan actif le plus haut d'Europe, en Sicile.` },
      { type: 'text', q: `Comment s'appelle l'endroit où naît un fleuve ?`, answer: [`source`, `la source`], explain: `La source ; l'endroit où il se termine est l'embouchure.` }
    ]
  }
});
