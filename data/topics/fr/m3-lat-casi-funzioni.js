TOPIC('fr', {
  id: `m3-lat-casi-funzioni`,
  title: `Les cas et les fonctions logiques`,
  intro: `En italien, on comprend qui fait quoi grâce à l'<b>ordre des mots</b> et aux <b>prépositions</b> : « Il cane morde l'uomo » est bien différent de « L'uomo morde il cane » ! Le latin, lui, l'indique par la <b>fin du mot</b>, la <b>désinence</b>. Chaque désinence correspond à un <b>cas</b>, et chaque cas à une <b>fonction logique</b>. C'est pourquoi l'<b>analyse logique</b> que tu fais en italien est la clé pour comprendre le latin. 🏛️📜`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. Le latin est une langue « à désinences »`,
      html: `<p>Un mot latin variable a deux parties :</p>
<ul>
<li>le <b>thème</b> (la partie qui ne change pas et porte le sens) : <i>ros-</i> = rose ;</li>
<li>la <b>désinence</b> (la partie finale qui change) : <i>-a, -ae, -am, -is…</i> et qui indique la <b>fonction</b> du mot dans la phrase, le <b>nombre</b> (singulier/pluriel) et souvent le <b>genre</b>.</li>
</ul>
<p>Regarde ces deux phrases :</p>
<p><i>Puell<b>a</b> ros<b>am</b> amat.</i> = La jeune fille aime la rose.<br>
<i>Ros<b>am</b> puell<b>a</b> amat.</i> = La jeune fille aime la rose (même sens !).</p>
<p>Même en changeant l'ordre, <i>puella</i> avec la désinence <b>-a</b> reste le sujet, et <i>rosam</i> avec <b>-am</b> reste le complément d'objet. En latin, l'ordre des mots est <b>libre</b> (même si la position la plus courante place le verbe à la fin).</p>
<p>L'ensemble de toutes les formes d'un nom s'appelle la <b>déclinaison</b> ; « décliner » un nom signifie énumérer ses cas.</p>`
    },
    {
      type: `text`, title: `2. Les six cas et leurs fonctions`,
      html: `<table>
<tr><th>Cas</th><th>Fonction logique principale</th><th>Question</th><th>Exemple (1re décl.)</th></tr>
<tr><td><b>Nominatif</b></td><td>sujet, nom du prédicat</td><td>qui ? que ? (fait l'action)</td><td><i>puella</i> = la jeune fille</td></tr>
<tr><td><b>Génitif</b></td><td>complément de détermination</td><td>de qui ? de quoi ?</td><td><i>puellae</i> = de la jeune fille</td></tr>
<tr><td><b>Datif</b></td><td>complément d'attribution</td><td>à qui ? à quoi ?</td><td><i>puellae</i> = à la jeune fille</td></tr>
<tr><td><b>Accusatif</b></td><td>complément d'objet direct (et mouvement vers un lieu avec <i>in, ad</i>)</td><td>qui ? que ? (subit)</td><td><i>puellam</i> = la jeune fille</td></tr>
<tr><td><b>Vocatif</b></td><td>complément d'interpellation</td><td>(on appelle quelqu'un)</td><td><i>puella!</i> = ô jeune fille !</td></tr>
<tr><td><b>Ablatif</b></td><td>de nombreux compléments indirects : moyen, manière, cause, accompagnement (<i>cum</i>), lieu où l'on est (<i>in</i>), temps…</td><td>avec quoi ? comment ? où ? quand ?</td><td><i>puellā</i> = avec/par la jeune fille</td></tr>
</table>
<p>Les noms des cas viennent du latin : <i>nominativus</i> (qui nomme), <i>genetivus</i> (de l'origine), <i>dativus</i> (de <i>dare</i>), <i>accusativus</i>, <i>vocativus</i> (de <i>vocare</i> = appeler), <i>ablativus</i> (de <i>auferre</i> = emporter, parce qu'il indiquait aussi l'éloignement).</p>`
    },
    {
      type: `svg`, title: `Une phrase, quatre cas`,
      caption: `Puella nautae rosam dat = La jeune fille donne une rose au marin. Chaque couleur est une fonction logique, indiquée par la désinence.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<rect x="20" y="40" width="140" height="70" rx="12" fill="#ef4444"/>
<rect x="170" y="40" width="140" height="70" rx="12" fill="#22c55e"/>
<rect x="320" y="40" width="140" height="70" rx="12" fill="#3b82f6"/>
<rect x="470" y="40" width="110" height="70" rx="12" fill="#64748b"/>
<text x="90" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">puell<tspan fill="#fde047">a</tspan></text>
<text x="240" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">naut<tspan fill="#fde047">ae</tspan></text>
<text x="390" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">ros<tspan fill="#fde047">am</tspan></text>
<text x="525" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">dat</text>
<text x="90" y="140" font-size="15" fill="#b91c1c" text-anchor="middle" font-weight="bold">NOMINATIF</text>
<text x="240" y="140" font-size="15" fill="#15803d" text-anchor="middle" font-weight="bold">DATIF</text>
<text x="390" y="140" font-size="15" fill="#1d4ed8" text-anchor="middle" font-weight="bold">ACCUSATIF</text>
<text x="525" y="140" font-size="15" fill="#334155" text-anchor="middle" font-weight="bold">VERBE</text>
<text x="90" y="165" font-size="14" fill="#334155" text-anchor="middle">sujet</text>
<text x="240" y="165" font-size="14" fill="#334155" text-anchor="middle">c. d'attribution</text>
<text x="390" y="165" font-size="14" fill="#334155" text-anchor="middle">COD</text>
<text x="525" y="165" font-size="14" fill="#334155" text-anchor="middle">prédicat</text>
<text x="90" y="200" font-size="18" fill="#0f172a" text-anchor="middle">la jeune fille</text>
<text x="240" y="200" font-size="18" fill="#0f172a" text-anchor="middle">au marin</text>
<text x="390" y="200" font-size="18" fill="#0f172a" text-anchor="middle">une rose</text>
<text x="525" y="200" font-size="18" fill="#0f172a" text-anchor="middle">donne</text>
<text x="300" y="250" font-size="17" fill="#854d0e" text-anchor="middle">La désinence (en jaune) indique le cas, même si tu déplaces les mots :</text>
<text x="300" y="278" font-size="17" fill="#854d0e" text-anchor="middle" font-style="italic">Nautae rosam puella dat. = même sens !</text>
</svg>`
    },
    {
      type: `text`, title: `3. La première déclinaison : rosa, rosae`,
      html: `<p>Les noms de la <b>première déclinaison</b> se terminent au nominatif singulier en <b>-a</b> et au génitif singulier en <b>-ae</b>. Ils sont presque tous <b>féminins</b> (<i>rosa, puella, silva</i> = forêt, <i>terra, aqua, insula</i> = île), mais quelques noms de métiers masculins sont de la première : <i>nauta</i> (marin), <i>agricola</i> (paysan), <i>poeta</i>, <i>incola</i> (habitant).</p>
<table>
<tr><th>Cas</th><th>Singulier</th><th>Pluriel</th></tr>
<tr><td>Nominatif</td><td>ros<b>a</b> – la rose</td><td>ros<b>ae</b> – les roses</td></tr>
<tr><td>Génitif</td><td>ros<b>ae</b> – de la rose</td><td>ros<b>arum</b> – des roses</td></tr>
<tr><td>Datif</td><td>ros<b>ae</b> – à la rose</td><td>ros<b>is</b> – aux roses</td></tr>
<tr><td>Accusatif</td><td>ros<b>am</b> – la rose</td><td>ros<b>as</b> – les roses</td></tr>
<tr><td>Vocatif</td><td>ros<b>a</b> – ô rose</td><td>ros<b>ae</b> – ô roses</td></tr>
<tr><td>Ablatif</td><td>ros<b>ā</b> – avec la rose</td><td>ros<b>is</b> – avec les roses</td></tr>
</table>
<p>Attention aux formes identiques : <b>rosae</b> peut être génitif singulier, datif singulier, nominatif ou vocatif pluriel ! Le sens se comprend grâce au <b>contexte</b> et au verbe (singulier ou pluriel). Le latin n'a pas d'<b>article</b> : <i>rosa</i> = la rose / une rose.</p>
<p>Il y a au total <b>cinq</b> déclinaisons, reconnaissables au <b>génitif singulier</b> : 1re -ae (<i>rosa, rosae</i>), 2e -i (<i>dominus, domini</i>), 3e -is (<i>rex, regis</i>), 4e -us (<i>manus, manus</i>), 5e -ei (<i>dies, diei</i>). C'est pourquoi on trouve toujours le nominatif et le génitif dans le dictionnaire.</p>`
    },
    {
      type: `widget`, title: `Fiches : décline rosa`,
      widget: `flashcards`,
      options: { cards: [
        { front: `nominatif singulier`, back: `rosa – la rose (sujet)` },
        { front: `génitif singulier`, back: `rosae – de la rose` },
        { front: `datif singulier`, back: `rosae – à la rose` },
        { front: `accusatif singulier`, back: `rosam – la rose (objet)` },
        { front: `ablatif singulier`, back: `rosā – avec la rose` },
        { front: `génitif pluriel`, back: `rosarum – des roses` },
        { front: `datif/ablatif pluriel`, back: `rosis – aux roses / avec les roses` },
        { front: `accusatif pluriel`, back: `rosas – les roses (objet)` }
      ] },
      caption: `Répète la déclinaison à voix haute comme une comptine : rosa, rosae, rosae, rosam, rosa, rosā…`
    },
    {
      type: `quiz`, title: `Mini-quiz : cas et désinences`,
      questions: [
        { type: `mc`, q: `Quel cas exprime le complément d'objet ?`, options: [`Nominatif`, `Accusatif`, `Datif`], answer: 1, explain: `L'accusatif est le cas du complément d'objet.` },
        { type: `mc`, q: `"Silvarum" est…`, options: [`génitif pluriel`, `accusatif singulier`, `ablatif pluriel`], answer: 0, explain: `-arum est la désinence du génitif pluriel : « des forêts ».` },
        { type: `tf`, q: `Le latin possède un article défini.`, answer: false, explain: `Le latin n'a pas d'articles : rosa = la rose ou une rose.` }
      ]
    },
    {
      type: `text`, title: `4. De l'analyse logique à la traduction : la méthode`,
      html: `<p>Pour traduire une phrase latine, on procède comme un détective :</p>
<ol>
<li><b>Trouve le verbe</b> (en général à la fin) : sa désinence indique la personne et le nombre du sujet (<i>dat</i> = il/elle donne).</li>
<li><b>Trouve le sujet</b> : un nominatif accordé avec le verbe (singulier si le verbe est au singulier).</li>
<li><b>Trouve le complément d'objet</b> : un accusatif (si le verbe est transitif).</li>
<li><b>Analyse les autres cas</b> : génitif (de…), datif (à…), ablatif (avec, par, dans…).</li>
<li><b>Choisis le sens</b> juste dans le dictionnaire et <b>réordonne</b> en français.</li>
</ol>
<p>Exemple : <i>Agricola cum filiā in silvā ambulat.</i></p>
<ul>
<li><i>ambulat</i> : verbe, 3e personne singulier = il se promène ;</li>
<li><i>agricola</i> : nominatif singulier = le paysan (sujet) ;</li>
<li><i>cum filiā</i> : <i>cum</i> + ablatif = accompagnement ➜ avec la fille ;</li>
<li><i>in silvā</i> : <i>in</i> + ablatif = lieu où l'on est ➜ dans la forêt.</li>
</ul>
<p>➜ <b>Le paysan se promène avec sa fille dans la forêt.</b></p>
<p>⚠️ <i>in</i> + <b>ablatif</b> = lieu où l'on est (<i>in silvā</i> = dans la forêt) ; <i>in</i> + <b>accusatif</b> = mouvement vers un lieu (<i>in silvam</i> = vers / dans la forêt).</p>`
    },
    {
      type: `widget`, title: `Jeu : dans quel cas est le mot en majuscules ?`,
      widget: `classify`,
      options: {
        groups: [`Nominatif`, `Génitif`, `Datif`, `Accusatif`, `Ablatif`],
        items: [
          [`PUELLA cantat (la jeune fille chante)`, 0],
          [`NAUTAE navigant (les marins naviguent)`, 0],
          [`ira DEAE (la colère de la déesse)`, 1],
          [`insula NAUTARUM (l'île des marins)`, 1],
          [`poetae ROSAS do (je donne des roses au poète)`, 3],
          [`AGRICOLAE pecuniam do (je donne de l'argent au paysan)`, 2],
          [`magistra DISCIPULIS narrat (la maîtresse raconte aux élèves)`, 2],
          [`AQUAM porto (je porte l'eau)`, 3],
          [`in SILVĀ (dans la forêt)`, 4],
          [`cum FILIĀ (avec la fille)`, 4]
        ]
      },
      caption: `Raisonne d'abord en français : est-ce le sujet, un complément de détermination, d'attribution, d'objet ou un autre complément ?`
    },
    {
      type: `example`, title: `Exemple pratique : traduire une inscription`,
      html: `<p>Sur une tablette romaine imaginaire, tu lis : <i>Incolae insulae deae aras parant.</i></p>
<ol>
<li><i>parant</i> = ils préparent (3e pers. pluriel) ➜ le sujet est au pluriel.</li>
<li><i>incolae</i> : nominatif pluriel = les habitants (sujet).</li>
<li><i>insulae</i> : génitif singulier = de l'île (détermination, se rattache à <i>incolae</i>).</li>
<li><i>deae</i> : datif singulier = à la déesse (attribution).</li>
<li><i>aras</i> : accusatif pluriel = les autels (objet).</li>
</ol>
<p>➜ <b>Les habitants de l'île préparent les autels pour la déesse.</b> Tu as remarqué ? <i>insulae</i> et <i>deae</i> ont la même désinence, mais des fonctions différentes : c'est le sens de la phrase qui décide.</p>`
    },
    {
      type: `example`, title: `Exemple pratique : les cas cachés dans l'italien`,
      html: `<p>L'italien a perdu les cas dans les noms, mais il les a conservés dans les <b>pronoms personnels</b> :</p>
<ul>
<li><b>io</b> parlo (sujet = nominatif, du latin <i>ego</i>) ;</li>
<li>Luca <b>mi</b> vede / vede <b>me</b> (objet = accusatif, du latin <i>me</i>) ;</li>
<li>Luca <b>mi</b> dà un libro = donne un livre <b>à moi</b> (attribution = datif, du latin <i>mihi</i>).</li>
</ul>
<p>La même chose avec <b>egli/lui/gli/lo</b>, <b>chi/cui</b>. De plus, presque tous les noms italiens viennent de l'<b>accusatif</b> latin : <i>rosam</i> ➜ rosa, <i>montem</i> ➜ monte, <i>lupum</i> ➜ lupo (le -m final ne se prononçait déjà plus à l'époque impériale dans la langue parlée).</p>`
    },
    {
      type: `curiosity`, title: `Le saviez-vous ? De nombreuses langues vivantes ont encore des cas ?`,
      html: `<p>L'<b>allemand</b> en a 4 (Nominativ, Genitiv, Dativ, Akkusativ), le <b>russe</b> 6, le <b>polonais</b> 7, le <b>roumain</b> conserve le génitif-datif et le vocatif, le <b>grec moderne</b> 4. Le <b>finnois</b> en a environ 15 et le <b>hongrois</b> plus de 18 ! Le latin en avait 6 (plus un petit reste d'un septième, le <b>locatif</b> : <i>Romae</i> = à Rome, <i>domi</i> = à la maison).</p>`
    },
    {
      type: `curiosity`, title: `Le saviez-vous ? Nous utilisons des cas latins sans le savoir ?`,
      html: `<p>Beaucoup d'expressions latines que nous employons sont à un cas précis : <i>curriculum <b>vitae</b></i> (génitif : « course <b>de la vie</b> »), <i>aqua <b>vitae</b></i>, <i>terra <b>incognita</b></i> (nominatif), <i>ad <b>hoc</b></i> (accusatif : « pour cela »), <i>in <b>extremis</b></i> (ablatif pluriel : « aux derniers moments »), <i>a <b>priori</b></i> (ablatif), <i>pro <b>forma</b></i> (ablatif). Et le nom de la langue <i>latina</i> vient du <b>Latium</b> (<i>Latium</i>).</p>`
    },
    {
      type: `remember`, title: `À retenir`,
      html: `<ul>
<li><b>Désinence</b> = indique le <b>cas</b> (fonction logique) et le <b>nombre</b>.</li>
<li>Nominatif = sujet ; Génitif = de… ; Datif = à… ; Accusatif = objet ; Vocatif = ô… ! ; Ablatif = avec, par, dans (compléments indirects).</li>
<li>Première déclinaison : <b>rosa, rosae</b> (gén. -ae), presque tous féminins.</li>
<li>Pour traduire : verbe ➜ sujet ➜ objet ➜ autres compléments ➜ réordonner.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `D'autres façons de le comprendre`,
      intro: `Si les cas te semblent un mur, essaie de les regarder d'un autre côté.`,
      tabs: [
        {
          label: `🏷️ Les étiquettes sur les mots`,
          html: `<p>Imagine que chaque mot latin porte une <b>étiquette</b> accrochée à la fin, comme l'étiquette d'une valise : <i>-a</i> = « je suis le sujet », <i>-am</i> = « je suis l'objet », <i>-ae</i> (avec un verbe comme <i>dare</i>) = « je suis celle à qui l'on donne ».</p>
<p>En italien, en revanche, les mots n'ont pas d'étiquettes : leur rôle dépend de la <b>place</b> où ils se trouvent, comme les joueurs d'une équipe qui comptent pour leur <b>position</b> sur le terrain. En latin, chaque joueur a le <b>maillot avec son rôle</b> écrit dessus : il peut se mettre où il veut, on reconnaît toujours le gardien !</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0f9ff"/>
<g font-size="22" font-weight="bold" text-anchor="middle">
<rect x="30" y="50" width="160" height="60" rx="10" fill="#fff" stroke="#0f172a" stroke-width="3"/><text x="110" y="88" fill="#0f172a">ros</text>
<rect x="210" y="50" width="160" height="60" rx="10" fill="#fff" stroke="#0f172a" stroke-width="3"/><text x="290" y="88" fill="#0f172a">puell</text>
<rect x="390" y="50" width="160" height="60" rx="10" fill="#fff" stroke="#0f172a" stroke-width="3"/><text x="470" y="88" fill="#0f172a">am</text>
</g>
<polygon points="150,110 190,110 190,150 170,165 150,150" fill="#3b82f6"/>
<text x="170" y="140" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">am</text>
<polygon points="330,110 370,110 370,150 350,165 330,150" fill="#ef4444"/>
<text x="350" y="140" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">a</text>
<polygon points="510,110 550,110 550,150 530,165 510,150" fill="#64748b"/>
<text x="530" y="140" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">-at</text>
<text x="110" y="195" font-size="15" fill="#1d4ed8" text-anchor="middle">étiquette : OBJET</text>
<text x="290" y="195" font-size="15" fill="#b91c1c" text-anchor="middle">étiquette : SUJET</text>
<text x="470" y="195" font-size="15" fill="#334155" text-anchor="middle">verbe : am-at (il aime)</text>
<text x="300" y="30" font-size="17" fill="#0f172a" text-anchor="middle" font-weight="bold">Rosam puella amat = La jeune fille aime la rose</text>
</svg>`
        },
        {
          label: `🇩🇪 Comme en allemand et en russe`,
          html: `<p>Si tu étudies ou entends l'allemand, tu connais déjà les cas ! Mais là, ce sont surtout les <b>articles</b> qui les portent :</p>
<ul>
<li><b>Der</b> Hund beißt <b>den</b> Mann = Le chien mord l'homme (der = nominatif, den = accusatif).</li>
<li><b>Den</b> Mann beißt <b>der</b> Hund = même sens, ordre différent !</li>
</ul>
<p>En <b>russe</b>, comme en latin, c'est la fin du nom qui change : <i>мам<b>а</b></i> (maman, sujet) ➜ <i>вижу мам<b>у</b></i> (je vois la maman, objet). Les élèves russes, roumains ou polonais trouvent les cas latins bien plus naturels que les Italiens !</p>`
        },
        {
          label: `🧩 Associe cas et question`,
          html: `<p>Chaque cas répond à une question de l'analyse logique. Relie les paires.</p>`,
          widget: `match`,
          options: { pairs: [
            [`Nominatif`, `Qui accomplit l'action ?`],
            [`Génitif`, `De qui ? De quoi ?`],
            [`Datif`, `À qui ? À quoi ?`],
            [`Accusatif`, `Qui/quoi subit l'action ?`],
            [`Vocatif`, `Qui suis-je en train d'appeler ?`],
            [`Ablatif`, `Avec quoi ? Où ? Comment ? Quand ?`]
          ] }
        },
        {
          label: `🎨 Les couleurs de l'analyse logique`,
          html: `<p>Un truc utilisé dans beaucoup d'écoles : attribue à chaque fonction logique une <b>couleur fixe</b>, en italien et en latin.</p>
<ul>
<li>🔴 rouge = sujet (nominatif)</li>
<li>⚫ noir = verbe</li>
<li>🔵 bleu = complément d'objet (accusatif)</li>
<li>🟢 vert = attribution (datif)</li>
<li>🟡 jaune = détermination (génitif)</li>
<li>🟣 violet = autres compléments (ablatif)</li>
</ul>
<p>Colorie la phrase italienne, puis la phrase latine : les mots changent de place, mais les couleurs restent les mêmes !</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : cas et fonctions`,
      nodes: [
        { id: `flex`, label: `Langue flexionnelle`, x: 50, y: 6, color: `#64748b`, html: `Les mots changent de terminaison pour exprimer la fonction.`, why: `Le latin hérite des cas de l'<b>indo-européen</b>, la langue mère reconstituée dont dérivent aussi le grec, le sanskrit, les langues germaniques et slaves. L'indo-européen avait probablement 8 cas.` },
        { id: `des`, label: `Désinence`, x: 25, y: 26, color: `#eab308`, html: `La partie finale qui change.`, why: `Du latin <i>desinere</i> = finir, terminer. Elle se rattache au thème du mot, qui porte le sens.` },
        { id: `decl`, label: `5 déclinaisons`, x: 75, y: 26, color: `#a855f7`, html: `Groupes de noms aux mêmes désinences ; on les reconnaît au génitif singulier.`, why: `La classification en cinq déclinaisons vient des grammairiens antiques et médiévaux (comme Priscien, VIe s.) : le génitif est le cas où les différences se voient le mieux.` },
        { id: `nom`, label: `Nominatif`, x: 10, y: 52, color: `#ef4444`, html: `Sujet et nom du prédicat.`, why: `C'est la forme par laquelle on « nomme » la chose (<i>nominare</i>) : c'est pourquoi c'est la première forme du dictionnaire.` },
        { id: `gen`, label: `Génitif`, x: 28, y: 72, color: `#f59e0b`, html: `Détermination : de qui ?`, why: `Le nom vient d'une erreur de traduction : le grec <i>genikḗ</i> signifiait « du genre, de la catégorie », mais les Romains le rendirent par <i>genetivus</i>, « de la naissance, de l'origine ».` },
        { id: `dat`, label: `Datif`, x: 48, y: 52, color: `#22c55e`, html: `Attribution : à qui ?`, why: `De <i>dare</i> : c'est le cas de celui qui reçoit quelque chose. Nos « mi », « ti », « gli » en italien en sont les héritiers.` },
        { id: `acc`, label: `Accusatif`, x: 68, y: 72, color: `#3b82f6`, html: `Complément d'objet ; avec <i>in, ad</i> mouvement vers un lieu.`, why: `Là aussi, une erreur de traduction : le grec <i>aitiatikḗ</i> (de ce qui est causé, de l'effet) fut confondu avec <i>aitiáomai</i> (accuser) et devint <i>accusativus</i>.` },
        { id: `abl`, label: `Ablatif`, x: 88, y: 52, color: `#7c3aed`, html: `Moyen, manière, cause, accompagnement, lieu, temps.`, why: `Le grec ne l'avait pas : selon la tradition, le nom remonte à Jules César, auteur d'un traité de grammaire (<i>ablativus</i>, de <i>auferre</i>, emporter). En latin, il a « absorbé » trois anciens cas indo-européens : l'ablatif, l'instrumental et le locatif.` },
        { id: `ital`, label: `Héritage en italien`, x: 50, y: 92, color: `#0ea5e9`, html: `Pronoms (io/me/mi) et noms dérivés de l'accusatif.`, why: `Dans le latin parlé, les désinences finales s'affaiblirent (le -m ne se prononçait plus, les voyelles se confondaient) : on utilisa alors les prépositions et un ordre fixe des mots, comme en italien.` }
      ],
      edges: [
        [`flex`, `des`, `utilise`], [`flex`, `decl`, `organise`], [`des`, `nom`, `cas`], [`des`, `gen`, `cas`], [`des`, `dat`, `cas`], [`des`, `acc`, `cas`], [`des`, `abl`, `cas`],
        [`acc`, `ital`, `d'où les noms`], [`dat`, `ital`, `pronoms`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : traduis`,
      questions: [
        { type: `mc`, q: `"Poeta puellis fabulam narrat" signifie…`, options: [`La jeune fille raconte une fable au poète.`, `Le poète raconte une fable aux jeunes filles.`, `Les jeunes filles racontent les fables du poète.`], answer: 1, explain: `poeta = nom. (sujet), puellis = dat. pl. (aux jeunes filles), fabulam = acc. (objet).` },
        { type: `text`, q: `Comment dit-on en latin « dans la forêt » (in + ablatif de silva) ?`, answer: [`in silva`, `in silvā`], explain: `Lieu où l'on est : in + ablatif ➜ in silvā.` },
        { type: `tf`, q: `« Rosam puella amat » et « Puella rosam amat » ont le même sens.`, answer: true, explain: `Les désinences -a (sujet) et -am (objet) ne changent pas.` }
      ]
    }
  ],
  glossary: [
    { t: `Cas`, d: `Forme que prend un mot pour exprimer sa fonction logique.` },
    { t: `Désinence`, d: `Terminaison variable qui indique le cas et le nombre.` },
    { t: `Thème`, d: `Partie invariable du mot, qui porte le sens.` },
    { t: `Déclinaison`, d: `Ensemble des formes d'un nom ; en latin, il y a cinq groupes.` },
    { t: `Nominatif`, d: `Cas du sujet et du nom du prédicat.` },
    { t: `Génitif`, d: `Cas du complément de détermination.` },
    { t: `Datif`, d: `Cas du complément d'attribution.` },
    { t: `Accusatif`, d: `Cas du complément d'objet.` },
    { t: `Vocatif`, d: `Cas pour appeler quelqu'un.` },
    { t: `Ablatif`, d: `Cas de nombreux compléments indirects (moyen, manière, lieu, temps…).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `En latin, la fonction logique d'un nom se comprend surtout par…`, options: [`l'ordre des mots`, `la désinence`, `l'article`], answer: 1, explain: `La désinence indique le cas.` },
      { type: `mc`, q: `Le cas du complément d'attribution est…`, options: [`le génitif`, `le datif`, `l'ablatif`], answer: 1, explain: `Datif = à qui ? à quoi ?` },
      { type: `mc`, q: `"Rosarum" est…`, options: [`génitif pluriel`, `datif singulier`, `accusatif pluriel`], answer: 0, explain: `-arum = génitif pluriel (des roses).` },
      { type: `num`, q: `Combien le latin a-t-il de cas (sans compter le locatif) ?`, answer: 6, tol: 0, explain: `Nominatif, génitif, datif, accusatif, vocatif, ablatif.` },
      { type: `num`, q: `Combien y a-t-il de déclinaisons latines ?`, answer: 5, tol: 0, explain: `On les reconnaît au génitif singulier : -ae, -i, -is, -us, -ei.` },
      { type: `text`, q: `Écris l'accusatif singulier de « puella ».`, answer: [`puellam`], explain: `1re déclinaison : -am ➜ puellam.` },
      { type: `text`, q: `Écris le génitif singulier de « rosa ».`, answer: [`rosae`], explain: `1re déclinaison : génitif singulier en -ae.` },
      { type: `tf`, q: `« Nauta » est un nom masculin de la première déclinaison.`, answer: true, explain: `Les noms de métiers masculins comme nauta, agricola, poeta sont de la 1re déclinaison.` },
      { type: `tf`, q: `« In silvam » indique le lieu où l'on est.`, answer: false, explain: `In + accusatif = mouvement vers un lieu (vers la forêt) ; le lieu où l'on est se dit in + ablatif.` },
      { type: `order`, q: `Mets dans l'ordre les étapes pour traduire une phrase latine.`, items: [`Trouve le verbe`, `Trouve le sujet au nominatif`, `Trouve le complément d'objet à l'accusatif`, `Analyse les autres compléments`, `Réordonne en français`], explain: `Partir du verbe aide à comprendre qui est le sujet.` },
      { type: `mc`, q: `« Agricolae filiae rosas dant » signifie…`, options: [`Les paysans donnent les roses à la fille.`, `La fille donne les roses aux paysans.`, `Le paysan donne la rose aux filles.`], answer: 0, explain: `dant est au pluriel ➜ agricolae nom. pl. ; filiae dat. sing. ; rosas acc. pl.` },
      { type: `mc`, q: `De quel cas latin viennent presque tous les noms italiens ?`, options: [`Nominatif`, `Accusatif`, `Vocatif`], answer: 1, explain: `rosam ➜ rosa, montem ➜ monte, lupum ➜ lupo.` }
    ]
  }
});
