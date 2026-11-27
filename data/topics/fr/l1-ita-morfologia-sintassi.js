TOPIC('fr', {
  id: "l1-ita-morfologia-sintassi",
  title: "Étude de la langue : morphologie et syntaxe",
  intro: "Nous parlons notre langue depuis toujours, mais <b>savons-nous comment elle fonctionne</b> ? La grammaire est l'outil qui permet de \"démonter\" la langue pour en comprendre les mécanismes, comme on ouvre une montre. Dans cette leçon, nous révisons et approfondissons la <b>morphologie</b> (les classes grammaticales : quels types de mots nous avons) et la <b>syntaxe</b> de la phrase simple (l'<b>analyse logique</b>, appelée aussi analyse des fonctions : quel rôle joue chaque mot ou groupe de mots dans la phrase).",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Morphologie et syntaxe : deux niveaux d'analyse",
      html: `<p>La grammaire étudie comment la langue est construite et se divise en plusieurs niveaux :</p>
<ul>
<li><b>Phonologie et orthographe</b> : les sons et la façon de les écrire.</li>
<li><b>Morphologie</b> : la <b>forme des mots</b> et leur classement en <b>classes grammaticales</b> (ou natures). Elle étudie comment un mot varie (genre, nombre, personne, temps...).</li>
<li><b>Syntaxe</b> : la façon dont les mots se combinent pour former des <b>phrases simples</b> et des <b>phrases complexes</b>. Elle en étudie l'ordre et les relations.</li>
<li><b>Lexique et sémantique</b> : le sens des mots.</li>
</ul>
<p>Exemple : dans la phrase <i>\"Le chat dort sur le canapé\"</i>, la morphologie dit que <i>chat</i> est un nom masculin singulier et <i>dort</i> un verbe à la troisième personne du singulier du présent ; la syntaxe dit que <i>le chat</i> est le sujet et que <i>sur le canapé</i> indique le lieu où se déroule l'action.</p>`
    },
    {
      type: "text",
      title: "2. Les neuf classes grammaticales",
      html: `<p>Les mots de l'italien (comme ceux du français) se répartissent en <b>neuf classes</b>. Cinq sont <b>variables</b> (elles changent de forme) et quatre sont <b>invariables</b>.</p>
<p><b>Variables</b></p>
<ul>
<li><b>Nom</b> (ou substantif) : désigne des personnes, des animaux, des choses, des idées. Commun/propre, concret/abstrait, simple/dérivé/composé, individuel/collectif.</li>
<li><b>Article</b> : précède le nom et en indique le genre et le nombre. <i>Défini</i> (le, la, les ; en italien il, lo, la, i, gli, le), <i>indéfini</i> (un, une ; en italien un, uno, una), <i>partitif</i> (du, de la ; en italien del, dello, della...).</li>
<li><b>Adjectif</b> : accompagne le nom pour le qualifier (<i>qualificatif</i> : \"un livre intéressant\") ou le déterminer (<i>possessif, démonstratif, indéfini, numéral, interrogatif/exclamatif</i>).</li>
<li><b>Pronom</b> : remplace un nom (<i>personnel, possessif, démonstratif, indéfini, relatif, interrogatif</i>). \"Marco est arrivé : je <b>l'</b>ai vu.\"</li>
<li><b>Verbe</b> : exprime une action, un état ou une manière d'être. Il se conjugue selon la personne, le nombre, le temps, le mode, la voix (active, passive, pronominale).</li>
</ul>
<p><b>Invariables</b></p>
<ul>
<li><b>Adverbe</b> : modifie un verbe, un adjectif ou un autre adverbe (\"il court <b>rapidement</b>\", \"très beau\").</li>
<li><b>Préposition</b> : relie des mots et indique le type de rapport (<i>de, à, dans, en, avec, sur, pour, entre</i> ; en italien <i>di, a, da, in, con, su, per, tra, fra</i>). Quand elle s'unit à l'article, elle devient <i>contractée</i> (en français du, au, des ; en italien les <i>preposizioni articolate</i> del, nella, sul...).</li>
<li><b>Conjonction</b> : unit des mots ou des propositions (<i>et, mais, parce que, si, quand...</i>).</li>
<li><b>Interjection</b> : exprime une émotion soudaine (<i>ah !, zut !, hourra !</i>).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Variable ou invariable ?",
      widget: "classify",
      options: { groups: ["Variables", "Invariables"], items: [["chat (nom)", 0], ["rapide (adjectif)", 0], ["rapidement (adverbe)", 1], ["avec (préposition)", 1], ["manger (verbe)", 0], ["mais (conjonction)", 1], ["la (article)", 0], ["hourra ! (interjection)", 1]] },
      caption: "Classe les mots selon qu'ils changent de forme ou non."
    },
    {
      type: "example",
      title: "Analyse grammaticale d'une phrase",
      html: `<p><i>\"Demain, mes amis arriveront avec un train très rapide.\"</i></p>
<ul>
<li><b>Demain</b> : adverbe (de temps).</li>
<li><b>mes</b> : adjectif (déterminant) possessif, masculin pluriel.</li>
<li><b>amis</b> : nom commun, concret, masculin pluriel.</li>
<li><b>arriveront</b> : verbe intransitif, indicatif futur simple, 3<sup>e</sup> personne du pluriel.</li>
<li><b>avec</b> : préposition.</li>
<li><b>un</b> : article indéfini masculin singulier.</li>
<li><b>train</b> : nom commun, concret, masculin singulier.</li>
<li><b>très rapide</b> : adjectif qualificatif au superlatif absolu (en italien on dirait en un seul mot <i>velocissimo</i>), masculin singulier.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : classes grammaticales",
      questions: [
        { type: "mc", q: "Dans la phrase « Il parle trop bas », le mot « bas » est...", options: ["un nom", "un adverbe", "un adjectif"], answer: 1, explain: "Il modifie le verbe « parle » : c'est un adverbe (de manière)." },
        { type: "mc", q: "Quel mot est une préposition contractée (préposition + article) ?", options: ["du", "de la vie", "parce que", "celui"], answer: 0, explain: "« du » = de + le. Les autres sont un groupe de mots, une conjonction et un pronom." },
        { type: "tf", q: "La conjonction est une classe grammaticale variable.", answer: false, explain: "Les conjonctions, les adverbes, les prépositions et les interjections sont invariables." }
      ]
    },
    {
      type: "text",
      title: "3. La phrase simple et l'analyse logique",
      html: `<p>La <b>phrase</b> est un groupe de mots qui a un sens complet. Si elle ne contient qu'un seul verbe conjugué (un seul prédicat), on parle de <b>phrase simple</b> ou de <b>proposition</b> ; si elle en contient plusieurs, on parle de <b>phrase complexe</b> (analyse de la phrase complexe).</p>
<p>L'<b>analyse logique</b> décompose la phrase simple en ses <b>éléments</b>, chacun avec une fonction précise. Le noyau est formé par :</p>
<ul>
<li>le <b>sujet</b> : celui qui fait l'action ou dont on dit quelque chose. On le trouve avec la question <i>\"Qui est-ce qui...?\"</i>. En italien, il peut être sous-entendu (\"Mangiamo\" = nous mangeons), alors qu'en français le pronom sujet est presque toujours exprimé ;</li>
<li>le <b>prédicat</b> : ce que l'on dit du sujet. Il peut être :
  <ul>
  <li><b>verbal</b> : un verbe qui a un sens complet (\"Le chien <b>court</b>\") ;</li>
  <li><b>nominal</b> : copule (verbe être ou verbe d'état) + <b>attribut du sujet</b> (nom ou adjectif) (\"Le chien <b>est</b> <b>fidèle</b>\").</li>
  </ul></li>
</ul>
<p>Autour du noyau viennent se placer les <b>expansions</b> : l'<b>épithète</b> (en italien <i>attributo</i>), l'<b>apposition</b> et les <b>compléments</b>.</p>`
    },
    {
      type: "svg",
      title: "Anatomie d'une phrase simple",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="35" font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a">Hier Marco a mangé une pomme avec sa grand-mère</text>
<rect x="20" y="60" width="70" height="40" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/><text x="55" y="86" font-size="16" text-anchor="middle" fill="#0f172a">Hier</text>
<rect x="105" y="60" width="90" height="40" rx="8" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="150" y="86" font-size="16" text-anchor="middle" fill="#0f172a">Marco</text>
<rect x="210" y="60" width="140" height="40" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="280" y="86" font-size="16" text-anchor="middle" fill="#0f172a">a mangé</text>
<rect x="365" y="60" width="90" height="40" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="410" y="86" font-size="16" text-anchor="middle" fill="#0f172a">une pomme</text>
<rect x="470" y="60" width="110" height="40" rx="8" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/><text x="525" y="86" font-size="16" text-anchor="middle" fill="#0f172a">avec mamie</text>
<text x="55" y="140" font-size="14" text-anchor="middle" fill="#92400e" font-weight="bold">CC de temps</text>
<text x="150" y="140" font-size="14" text-anchor="middle" fill="#1e3a8a" font-weight="bold">sujet</text>
<text x="280" y="140" font-size="14" text-anchor="middle" fill="#166534" font-weight="bold">prédicat verbal</text>
<text x="410" y="140" font-size="14" text-anchor="middle" fill="#991b1b" font-weight="bold">COD</text>
<text x="525" y="140" font-size="14" text-anchor="middle" fill="#6b21a8" font-weight="bold">CC d'accomp.</text>
<text x="300" y="210" font-size="16" text-anchor="middle" fill="#0f172a">Questions-guides :</text>
<text x="300" y="235" font-size="14" text-anchor="middle" fill="#0f172a">Qui ? (sujet) · Que fait-il ? (prédicat) · Quoi ? (COD)</text>
<text x="300" y="258" font-size="14" text-anchor="middle" fill="#0f172a">Quand ? Où ? Avec qui ? Comment ? Pourquoi ? (compléments indirects)</text>
</svg>`,
      caption: "Chaque partie de la phrase répond à une question : cherche d'abord le prédicat, puis le sujet."
    },
    {
      type: "text",
      title: "4. Épithète, apposition et compléments",
      html: `<p><b>Épithète</b> (en italien <i>attributo</i>) : adjectif qui accompagne directement un nom (\"une <b>belle</b> journée\"). <b>Apposition</b> : nom placé à côté d'un autre pour le préciser (\"Dante, <b>poète</b>\" ; \"le fleuve <b>Pô</b>\").</p>
<p>Les <b>compléments</b> complètent le sens du prédicat. Le <b>complément d'objet direct</b> (COD) répond à <i>\"qui ? quoi ?\"</i> et n'a pas de préposition : \"Je lis <b>un livre</b>\". Les autres sont des <b>compléments indirects</b>, introduits par une préposition :</p>
<table>
<tr><th>Complément</th><th>Répond à</th><th>Exemple</th></tr>
<tr><td>Complément du nom (<i>specificazione</i>)</td><td>de qui ? de quoi ?</td><td>La maison <b>de Luca</b></td></tr>
<tr><td>Complément d'attribution (<i>termine</i>)</td><td>à qui ? à quoi ?</td><td>J'écris <b>à Marta</b></td></tr>
<tr><td>Lieu</td><td>où ? d'où ? par où ?</td><td>J'habite <b>à Turin</b></td></tr>
<tr><td>Temps</td><td>quand ? pendant combien de temps ?</td><td>Je pars <b>demain</b> ; j'étudie <b>pendant deux heures</b></td></tr>
<tr><td>Moyen</td><td>par quel moyen ?</td><td>Je voyage <b>en train</b></td></tr>
<tr><td>Manière</td><td>comment ?</td><td>Il parle <b>avec calme</b></td></tr>
<tr><td>Cause</td><td>pour quelle cause ?</td><td>Je tremble <b>de froid</b></td></tr>
<tr><td>But</td><td>dans quel but ?</td><td>J'étudie <b>pour le passage en classe supérieure</b></td></tr>
<tr><td>Accompagnement</td><td>avec qui ? avec quoi ?</td><td>Je sors <b>avec mes amis</b></td></tr>
<tr><td>Complément d'agent</td><td>par qui ? (avec un verbe passif)</td><td>Le tableau fut peint <b>par Giotto</b></td></tr>
<tr><td>Sujet traité (<i>argomento</i>)</td><td>sur quoi ?</td><td>Un livre <b>sur l'histoire romaine</b></td></tr>
<tr><td>Matière</td><td>en quelle matière ?</td><td>Une bague <b>en or</b></td></tr>
<tr><td>Qualité</td><td>avec quelle caractéristique ?</td><td>Une fille <b>aux cheveux roux</b></td></tr>
</table>
<p>Le même nom peut avoir des fonctions différentes : tout dépend du <b>verbe</b> et de la <b>préposition</b>. Dans \"Le vase <b>de verre</b>\", c'est un complément de matière ; dans \"le vase <b>de Marta</b>\", un complément du nom (appartenance).</p>`
    },
    {
      type: "remember",
      title: "La méthode de l'analyse logique",
      html: `<ol><li>Cherche le <b>prédicat</b> (le verbe, éventuellement avec la copule).</li><li>Trouve le <b>sujet</b> (qui fait l'action ?). À la voix passive, le sujet <i>subit</i> l'action.</li><li>Cherche le <b>complément d'objet direct</b> (sans préposition).</li><li>Pour les compléments indirects, regarde la <b>préposition</b> et pose la <b>bonne question</b>.</li><li>Souviens-toi : la <b>même préposition</b> peut introduire des compléments différents (<i>avec</i> : accompagnement, moyen, manière...). C'est le sens qui compte.</li></ol>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la phrase",
      intro: "Si l'analyse logique te semble une liste à apprendre par cœur, essaie ces points de vue.",
      tabs: [
        { label: "🎬 Le film de la phrase", html: "<p>Imagine la phrase comme une <b>scène de film</b> : le <b>prédicat</b> est l'action, le <b>sujet</b> est l'acteur, le <b>complément d'objet direct</b> est ce que l'action touche directement, et les <b>compléments indirects</b> sont le décor : où, quand, avec qui, pourquoi, comment. Demande-toi \"qui fait quoi ? et où, quand, comment ?\".</p>" },
        { label: "🌳 L'arbre de la phrase", html: "<p>Certaines écoles linguistiques représentent la phrase comme un <b>arbre</b> : le prédicat est le tronc, d'où partent les branches (sujet, objet, compléments), elles-mêmes porteuses de rameaux (épithètes, appositions). La grammaire \"de la valence\" du linguiste français <b>Lucien Tesnière</b> (1893-1954) raisonne ainsi : le verbe est le centre et demande un certain nombre de \"places\" (<i>valences</i>) à remplir. Le verbe <i>donner</i> en demande trois : qui donne, quoi, à qui.</p>", svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><circle cx="300" cy="50" r="38" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="300" y="56" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">donne</text><line x1="270" y1="78" x2="120" y2="170" stroke="#334155" stroke-width="2"/><line x1="300" y1="88" x2="300" y2="170" stroke="#334155" stroke-width="2"/><line x1="330" y1="78" x2="480" y2="170" stroke="#334155" stroke-width="2"/><rect x="60" y="170" width="120" height="44" rx="8" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="120" y="197" font-size="16" text-anchor="middle" fill="#0f172a">Anna (qui)</text><rect x="240" y="170" width="120" height="44" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="300" y="197" font-size="16" text-anchor="middle" fill="#0f172a">un livre (quoi)</text><rect x="420" y="170" width="140" height="44" rx="8" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/><text x="490" y="197" font-size="16" text-anchor="middle" fill="#0f172a">à Luca (à qui)</text><text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">Le verbe \"donner\" a trois valences : sujet, objet, attribution</text></svg>` },
        { label: "🧩 Le test de substitution", html: "<p>Pour trouver la <b>classe grammaticale</b> d'un mot, remplace-le par un mot sûr. Si tu peux mettre <i>\"très\"</i> devant (\"très <b>bien</b>\"), c'est un adverbe ; si tu peux mettre <i>\"le/la\"</i> devant, c'est un nom (\"le <b>bien</b>\"). Le même mot <i>bien</i> change de classe selon la phrase. En grammaire, c'est la <b>fonction</b> qui compte, pas seulement le mot.</p>" }
      ]
    },
    {
      type: "text",
      title: "5. Cas particuliers : passif, pronominal, prédicat nominal",
      html: `<p>Certains verbes changent la structure de la phrase.</p>
<ul>
<li><b>Voix passive</b> : le sujet <i>subit</i> l'action ; celui qui l'accomplit devient <b>complément d'agent</b> : \"Le voleur <b>fut arrêté par les gendarmes</b>\". Phrase active : \"Les gendarmes arrêtèrent le voleur\" (gendarmes = sujet ; voleur = COD).</li>
<li><b>Forme pronominale réfléchie</b> : le sujet et l'objet coïncident (\"Luca <b>se lave</b>\") : <i>se</i> est un pronom complément d'objet direct.</li>
<li><b>Prédicat nominal</b> : \"La Terre <b>est</b> <b>ronde</b>\" ; \"Rome est la capitale\". Le verbe être est ici une copule et n'a pas de sens propre ; autres verbes d'état (copulatifs) : <i>sembler, devenir, paraître, rester</i>.</li>
<li><b>Sujet sous-entendu</b> : en italien, les pronoms personnels sujets sont souvent omis, car la terminaison du verbe indique la personne (\"Vado\" = je vais). En français, au contraire, le pronom sujet est obligatoire.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "L'analyse logique, une invention italienne ?",
      html: `<p>En grande partie, oui : l'<b>analyse logique</b> comme exercice scolaire, avec ce nom et cette longue liste de compléments, est typique de l'école italienne (l'école française l'a pratiquée aussi aux XIX<sup>e</sup> et XX<sup>e</sup> siècles, avant de parler plutôt d'« analyse des fonctions »). Dans d'autres pays, on fait du <i>sentence parsing</i> ou de l'analyse en constituants. Le nom \"logique\" renvoie à l'idée de reconnaître dans la phrase les rapports de pensée entre les mots. Aujourd'hui, les linguistes modernes, comme <b>Noam Chomsky</b> (né en 1928), décrivent la syntaxe avec des modèles en \"arbres\" semblables à celui de la fiche précédente.</p>`
    },
    {
      type: "curiosity",
      title: "Les mots qui changent de métier",
      html: `<p>Beaucoup de mots passent d'une classe à une autre. <i>\"Le beau de l'histoire\"</i> : <i>beau</i>, adjectif, est employé comme nom (il est substantivé). <i>\"Parle bas\"</i> et <i>\"un bas de laine\"</i> : adverbe et nom. C'est pourquoi on dit que la <b>classe grammaticale</b> se décide <b>dans l'usage</b>, et non dans le dictionnaire.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte : grammaire et phrase simple",
      nodes: [
        { id: "gram", label: "Grammaire", x: 50, y: 8, color: "#3b82f6", html: "L'étude des règles selon lesquelles fonctionne une langue.", why: "Depuis les Grecs et les Latins (Denys le Thrace, Priscien), la grammaire décrit les mots et leurs relations. C'est des grammaires antiques que viennent les noms des classes grammaticales." },
        { id: "morf", label: "Morphologie", x: 20, y: 40, color: "#10b981", html: "Étudie la forme et le classement des mots : neuf classes grammaticales.", why: "Les catégories découlent du comportement des mots : certains changent (variables), d'autres non. Le classement permet de prévoir comment on les emploie." },
        { id: "sint", label: "Syntaxe", x: 80, y: 40, color: "#f59e0b", html: "Étudie comment les mots forment des phrases simples et complexes.", why: "Une phrase n'est pas une simple addition de mots : l'ordre et les liens (accords, prépositions) produisent le sens. \"Le chien mord l'homme\" et \"L'homme mord le chien\" ont les mêmes mots et un sens opposé." },
        { id: "log", label: "Analyse logique", x: 80, y: 72, color: "#8b5cf6", html: "Sujet, prédicat, épithète, apposition, complément d'objet direct et compléments indirects.", why: "Elle sert à comprendre qui fait quoi et dans quelles circonstances. Elle aide à écrire des phrases claires et à éviter les ambiguïtés." },
        { id: "parti", label: "Classes grammaticales", x: 20, y: 72, color: "#ef4444", html: "Cinq variables (nom, article, adjectif, pronom, verbe), quatre invariables (adverbe, préposition, conjonction, interjection).", why: "La division entre variables et invariables dépend de la possibilité de flexion, qui en italien (langue issue du latin) est riche pour le verbe et le groupe nominal." }
      ],
      edges: [["gram", "morf", "comprend"], ["gram", "sint", "comprend"], ["sint", "log", "phrase simple"], ["morf", "parti", "classe en"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz : analyse logique",
      questions: [
        { type: "mc", q: "« Le gâteau est délicieux » : « est délicieux » est...", options: ["un prédicat verbal", "un prédicat nominal", "une épithète"], answer: 1, explain: "C'est une copule + un adjectif (attribut du sujet)." },
        { type: "mc", q: "Dans « Je suis parti pour Rome », « pour Rome » est un complément de...", options: ["but", "lieu", "cause"], answer: 1, explain: "Il indique la destination du voyage : complément de lieu (mouvement vers un lieu)." },
        { type: "tf", q: "Dans la phrase « Le livre fut écrit par Manzoni », « Manzoni » est le sujet.", answer: false, explain: "C'est le complément d'agent : le sujet est « le livre »." }
      ]
    }
  ],
  glossary: [
    { t: "Morphologie", d: "Étude de la forme des mots et des classes grammaticales." },
    { t: "Syntaxe", d: "Étude des relations entre les mots dans la phrase simple et la phrase complexe." },
    { t: "Prédicat verbal", d: "Prédicat constitué d'un verbe qui a un sens complet." },
    { t: "Prédicat nominal", d: "Copule (verbe être ou verbe d'état) suivie d'un attribut du sujet." },
    { t: "Complément d'objet direct", d: "Complément sans préposition qui indique sur qui ou sur quoi porte l'action." },
    { t: "Complément indirect", d: "Complément introduit par une préposition." },
    { t: "Apposition", d: "Nom placé à côté d'un autre nom pour le préciser." },
    { t: "Épithète", d: "Adjectif qui se rapporte directement à un nom (en italien, attributo)." },
    { t: "Copule", d: "Verbe être (ou verbe d'état) qui relie le sujet et l'attribut du sujet." },
    { t: "Complément d'agent", d: "Indique par qui l'action est accomplie dans une phrase passive." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Combien y a-t-il de classes grammaticales en italien ?", options: ["sept", "huit", "neuf", "dix"], answer: 2, explain: "Nom, article, adjectif, pronom, verbe, adverbe, préposition, conjonction, interjection." },
      { type: "mc", q: "Quelle classe grammaticale est invariable ?", options: ["Le pronom", "La conjonction", "L'adjectif", "Le verbe"], answer: 1, explain: "Les classes invariables sont l'adverbe, la préposition, la conjonction et l'interjection." },
      { type: "text", q: "Comment appelle-t-on le verbe « être » quand il relie le sujet à l'attribut du sujet ?", answer: ["copule", "la copule", "une copule", "verbe copule"], explain: "Dans « Anna est fatiguée », « est » est une copule." },
      { type: "mc", q: "Dans « Je parle avec calme », « avec calme » est un complément de...", options: ["accompagnement", "moyen", "manière", "cause"], answer: 2, explain: "Il répond à « comment ? » : manière." },
      { type: "tf", q: "Dans la phrase « La mer me plaît », « la mer » est le sujet.", answer: true, explain: "Qu'est-ce qui plaît ? La mer : sujet ; « me » est complément d'attribution." },
      { type: "mc", q: "« La maison de Luca » contient un complément...", options: ["du nom", "d'attribution", "de lieu", "d'agent"], answer: 0, explain: "Il répond à « de qui ? » : complément du nom." },
      { type: "mc", q: "Dans « Dante, poète florentin, écrivit la Comédie », « poète » est...", options: ["une épithète", "une apposition", "un prédicat nominal", "un complément d'objet direct"], answer: 1, explain: "C'est un nom placé à côté de « Dante » pour le préciser : une apposition." },
      { type: "order", q: "Range dans l'ordre conseillé les étapes de l'analyse logique.", items: ["Trouver le prédicat", "Trouver le sujet", "Trouver le complément d'objet direct", "Analyser les compléments indirects"], explain: "On part du verbe, puis du sujet, puis des éléments que le verbe régit, et enfin des compléments indirects." },
      { type: "mc", q: "Dans « Le devoir fut corrigé par le professeur », « par le professeur » est...", options: ["un complément de cause", "un complément d'agent", "le sujet", "un complément de lieu"], answer: 1, explain: "Il indique qui accomplit l'action dans une phrase passive." }
    ]
  }
});
