TOPIC('fr', {
  id: "p3-ita-frase-minima",
  title: "La phrase minimale (frase minima)",
  intro: "« Il cane abbaia. » (Le chien aboie.) Quelques mots suffisent pour faire une phrase complète ! 🐕 Aujourd'hui, nous découvrons le <b>sujet</b> et le <b>prédicat</b>, les deux piliers de toute phrase, et nous apprenons à trouver la <b>phrase minimale</b> même à l'intérieur de phrases très longues.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce qu'une phrase ?",
      html: `<p>Une <b>phrase</b> (<i>frase</i>) est un groupe de mots mis en ordre qui a un <b>sens complet</b> : celui qui la lit comprend une information entière.</p>
<ul>
<li>« Il gatto dorme. » (Le chat dort.) ✅ est une phrase : je comprends qui fait quoi.</li>
<li>« Il gatto sul. » ❌ n'est pas une phrase : il manque quelque chose, le sens n'est pas complet.</li>
</ul>
<p>Chaque phrase a un <b>verbe</b>. Le verbe est le cœur de la phrase : sans verbe, il n'y a pas de phrase !</p>`
    },
    {
      type: "text",
      title: "Sujet et prédicat",
      html: `<p>La <b>phrase minimale</b> (ou <b>phrase nucléaire</b>) est la phrase la plus courte possible qui a un sens complet. Elle est formée de deux parties :</p>
<ul>
<li>le <b>sujet</b> (<i>soggetto</i>) 👤 = <b>qui</b> ou <b>qu'est-ce qui</b> fait l'action (ou de qui on parle). On le trouve avec la question : « <b>Qui ?</b> » ou « <b>Qu'est-ce qui ?</b> »</li>
<li>le <b>prédicat</b> (<i>predicato</i>) 🎬 = <b>ce que fait</b> (ou comment est) le sujet. C'est le verbe. On le trouve avec la question : « <b>Que fait-il ?</b> »</li>
</ul>
<p>Exemple : « <b>Marta</b> <b>legge</b>. » (Marta lit.)</p>
<ul>
<li>Que fait-on ? → <b>legge</b> → prédicat</li>
<li>Qui lit ? → <b>Marta</b> → sujet</li>
</ul>
<p><b>Conseil :</b> cherche toujours <b>d'abord le verbe</b> (prédicat), puis pose la question « qui ? » au verbe pour trouver le sujet.</p>`
    },
    {
      type: "svg",
      title: "Le sujet et le prédicat se tiennent par la main",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<rect x="60" y="80" width="200" height="90" rx="20" fill="#3b82f6"/>
<rect x="340" y="80" width="200" height="90" rx="20" fill="#ef4444"/>
<text x="160" y="138" font-size="38" font-weight="bold" text-anchor="middle" fill="#ffffff">Il cane</text>
<text x="440" y="138" font-size="38" font-weight="bold" text-anchor="middle" fill="#ffffff">abbaia.</text>
<path d="M262 125 Q300 95 338 125" stroke="#1f2937" stroke-width="5" fill="none"/>
<text x="160" y="50" font-size="22" font-weight="bold" text-anchor="middle" fill="#1d4ed8">SUJET</text>
<text x="440" y="50" font-size="22" font-weight="bold" text-anchor="middle" fill="#b91c1c">PRÉDICAT</text>
<text x="160" y="205" font-size="20" text-anchor="middle" fill="#1f2937">Qui aboie ?</text>
<text x="440" y="205" font-size="20" text-anchor="middle" fill="#1f2937">Que fait-il ?</text>
<text x="160" y="260" font-size="40" text-anchor="middle">🐕</text>
<text x="440" y="260" font-size="40" text-anchor="middle">🗯️</text>
<text x="300" y="290" font-size="18" text-anchor="middle" fill="#166534">sujet + prédicat = phrase minimale</text>
</svg>`,
      caption: "Dans l'analyse logique, on utilise souvent le bleu pour le sujet et le rouge pour le prédicat."
    },
    {
      type: "text",
      title: "Le sujet et le verbe s'accordent",
      html: `<p>Le prédicat s'<b>accorde</b> avec le sujet : si le sujet est singulier, le verbe est singulier ; s'il est pluriel, le verbe est pluriel.</p>
<ul>
<li>« Il bambino <b>gioca</b>. » → « I bambini <b>giocano</b>. » (L'enfant joue. → Les enfants jouent.)</li>
<li>« Io <b>canto</b>. » → « Noi <b>cantiamo</b>. » (Je chante. → Nous chantons.)</li>
</ul>
<p>Le sujet peut être un <b>nom</b> (Luca, il sole), un <b>pronom</b> (io, tu, lei, noi…) ou même un groupe de mots (« <b>Il mio amico Paolo</b> ride » : mon ami Paolo rit).</p>
<p>Le sujet <b>n'est pas toujours au début</b> : « Arriva <b>il treno</b>. » (Le train arrive.) Qui arrive ? Le train ! C'est pour ça qu'il faut poser la question, pas seulement regarder la place.</p>`
    },
    {
      type: "text",
      title: "Le sujet sous-entendu",
      html: `<p>Parfois le sujet <b>n'est pas écrit</b>, mais on le comprend grâce au verbe. On l'appelle <b>sujet sous-entendu</b> (<i>sottinteso</i>).</p>
<ul>
<li>« <b>Corro</b>. » (Je cours.) → qui court ? <b>io</b> (sous-entendu)</li>
<li>« <b>Mangiate</b> ! » (Mangez !) → qui mange ? <b>voi</b> (sous-entendu)</li>
<li>« Luca è stanco. <b>Dorme</b>. » (Luca est fatigué. Il dort.) → qui dort ? <b>Luca</b> (sous-entendu, dit avant)</li>
</ul>
<p>En italien, on peut le faire parce que la <b>terminaison</b> du verbe dit déjà qui fait l'action : « cant<b>iamo</b> » veut forcément dire « nous ».</p>
<p>Et il y a aussi des phrases <b>sans sujet</b> : « <b>Piove.</b> » (Il pleut.), « <b>Nevica.</b> » (Il neige.), « <b>Tuona.</b> » (Il tonne.) Ces verbes de la météo s'appellent <b>impersonnels</b> : personne ne « fait » la pluie !</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : trouve le sujet et le prédicat",
      questions: [
        { type: "mc", q: "Dans la phrase « Il sole splende » (Le soleil brille), quel est le sujet ?", options: ["Il sole", "splende"], answer: 0, explain: "Qui brille ? Le soleil (il sole)." },
        { type: "mc", q: "Dans la phrase « Volano le rondini » (Les hirondelles volent), quel est le prédicat ?", options: ["le rondini", "volano"], answer: 1, explain: "Le verbe « volano » dit ce que font les hirondelles." },
        { type: "text", q: "« Ridiamo. » (Nous rions.) Quel est le sujet sous-entendu ?", answer: ["noi"], explain: "La terminaison -iamo indique « noi »." },
        { type: "tf", q: "« La maestra con il libro » (La maîtresse avec le livre) est une phrase minimale.", answer: false, explain: "Il manque le verbe (prédicat) : elle n'a pas de sens complet." }
      ]
    },
    {
      type: "text",
      title: "Prédicat verbal et prédicat nominal",
      html: `<p>Le prédicat peut être de deux types :</p>
<ul>
<li><b>Prédicat verbal</b> : un verbe qui indique une action. « Il gatto <b>miagola</b>. » (Le chat miaule.) « Noi <b>abbiamo giocato</b>. » (Nous avons joué.)</li>
<li><b>Prédicat nominal</b> : le verbe <b>essere</b> + un nom ou un adjectif qui dit <b>comment est</b> ou <b>qui est</b> le sujet. « Il cielo <b>è azzurro</b>. » (Le ciel est bleu.) « Luca <b>è un pittore</b>. » (Luca est peintre.)</li>
</ul>
<p>Dans le prédicat nominal, le verbe essere sert de « pont » (on l'appelle <b>copule</b>, c'est-à-dire « lien ») entre le sujet et sa qualité.</p>`
    },
    {
      type: "text",
      title: "De la phrase minimale à la phrase étendue",
      html: `<p>À la phrase minimale, nous pouvons ajouter beaucoup d'informations avec les <b>expansions</b> : elles répondent aux questions <i>quoi ? où ? quand ? comment ? avec qui ? pourquoi ?</i></p>
<p>« Il cane abbaia » → « Il cane <b>di Sara</b> abbaia <b>forte</b> <b>al postino</b> <b>ogni mattina</b>. » (Le chien de Sara aboie fort après le facteur chaque matin.)</p>
<p>Pour trouver la phrase minimale dans une phrase longue, joue au jeu du <b>« enlève, enlève »</b> : enlève les mots un par un tant que la phrase a encore un sens. Ce qui reste et ne peut pas être enlevé, c'est la phrase minimale !</p>`
    },
    {
      type: "svg",
      title: "Le petit train de la phrase",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<line x1="10" y1="200" x2="590" y2="200" stroke="#78716c" stroke-width="6"/>
<rect x="20" y="90" width="150" height="90" rx="12" fill="#3b82f6"/>
<rect x="180" y="90" width="150" height="90" rx="12" fill="#ef4444"/>
<rect x="340" y="110" width="115" height="70" rx="10" fill="#fbbf24"/>
<rect x="465" y="110" width="115" height="70" rx="10" fill="#a3e635"/>
<g fill="#1f2937"><circle cx="55" cy="192" r="14"/><circle cx="135" cy="192" r="14"/><circle cx="215" cy="192" r="14"/><circle cx="295" cy="192" r="14"/><circle cx="370" cy="192" r="12"/><circle cx="425" cy="192" r="12"/><circle cx="495" cy="192" r="12"/><circle cx="550" cy="192" r="12"/></g>
<text x="95" y="130" font-size="22" font-weight="bold" text-anchor="middle" fill="#ffffff">Il cane</text>
<text x="95" y="160" font-size="15" text-anchor="middle" fill="#dbeafe">sujet</text>
<text x="255" y="130" font-size="22" font-weight="bold" text-anchor="middle" fill="#ffffff">abbaia</text>
<text x="255" y="160" font-size="15" text-anchor="middle" fill="#fee2e2">prédicat</text>
<text x="397" y="145" font-size="17" text-anchor="middle" fill="#78350f">al postino</text>
<text x="522" y="145" font-size="17" text-anchor="middle" fill="#365314">ogni mattina</text>
<text x="175" y="60" font-size="20" font-weight="bold" text-anchor="middle" fill="#1f2937">locomotive : PHRASE MINIMALE</text>
<text x="460" y="80" font-size="18" text-anchor="middle" fill="#57534e">wagons : expansions</text>
</svg>`,
      caption: "La phrase minimale est la locomotive : sans elle, le train ne part pas. Les expansions sont des wagons que l'on peut décrocher."
    },
    {
      type: "example",
      title: "Exemple pratique : le jeu « enlève, enlève »",
      html: `<p>Phrase : « Ieri pomeriggio la mia sorellina ha disegnato un drago verde sul quaderno. » (Hier après-midi ma petite sœur a dessiné un dragon vert sur le cahier.)</p>
<ol>
<li>J'enlève « ieri pomeriggio » → « La mia sorellina ha disegnato un drago verde sul quaderno. » Ça a du sens ✅</li>
<li>J'enlève « sul quaderno » → « La mia sorellina ha disegnato un drago verde. » ✅</li>
<li>J'enlève « verde » et « un drago » → « La mia sorellina ha disegnato. » ✅</li>
<li>J'enlève « mia » → « La sorellina ha disegnato. » ✅</li>
<li>Si j'enlève « ha disegnato » ou « la sorellina », la phrase ne tient plus debout ❌</li>
</ol>
<p>Phrase minimale : « <b>La sorellina</b> (sujet) <b>ha disegnato</b> (prédicat). » Remarque : « ha disegnato » est un prédicat fait de <b>deux mots</b>, mais c'est un seul verbe !</p>`
    },
    {
      type: "example",
      title: "Exemple pratique : les titres de journaux et les messages",
      html: `<p>Dans les messages courts, nous utilisons souvent des phrases minimales, parce qu'elles vont droit au but :</p>
<ul>
<li>« <b>Arrivo !</b> » (J'arrive !) → sujet sous-entendu « io », prédicat « arrivo ».</li>
<li>« <b>La partita è finita.</b> » (Le match est fini.) → sujet « la partita », prédicat « è finita ».</li>
<li>« <b>Nevica !</b> » (Il neige !) → phrase sans sujet : verbe impersonnel.</li>
</ul>
<p>Les titres de journaux, eux, n'ont parfois <b>pas de verbe</b> : « Neve sulle Alpi » (Neige sur les Alpes). Dans ce cas, ce ne sont pas de vraies phrases, mais on comprend quand même le verbe (« C'è neve sulle Alpi » : il y a de la neige sur les Alpes).</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Veni, vidi, vici",
      html: `<p>En <b>47 av. J.-C.</b>, Jules César remporta une bataille en quelques jours (à Zéla, dans l'actuelle Turquie) et n'écrivit à Rome que trois mots : « <b>Veni, vidi, vici</b> », c'est-à-dire « Je suis venu, j'ai vu, j'ai vaincu ». Ce sont trois <b>phrases minimales</b> à la suite, chacune avec le sujet sous-entendu « je » ! Le latin aussi, comme l'italien, pouvait sous-entendre le sujet.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? En anglais, c'est « il » qui pleut",
      html: `<p>En italien, nous disons « Piove » sans sujet. En anglais, en revanche, le sujet est obligatoire : on dit « <b>It</b> rains », c'est-à-dire à peu près « Ça pleut ». En allemand « <b>Es</b> regnet », en français « <b>Il</b> pleut ». Et en japonais, l'ordre est différent : le verbe va toujours <b>à la fin</b> de la phrase !</p>`
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Phrase minimale = <b>sujet</b> + <b>prédicat</b> : la phrase la plus courte avec un sens complet.</li>
<li>Je trouve d'abord le <b>verbe</b> (prédicat), puis je demande « <b>qui ?</b> » ou « <b>qu'est-ce qui ?</b> » pour le sujet.</li>
<li>Le sujet peut être <b>sous-entendu</b> (Corro → io).</li>
<li>Les verbes comme piove, nevica n'ont pas de sujet (impersonnels).</li>
<li>Prédicat <b>verbal</b> (action) ou <b>nominal</b> (essere + nom/adjectif).</li>
<li>Les <b>expansions</b> enrichissent la phrase minimale.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la phrase minimale",
      intro: "Si « sujet » et « prédicat » te semblent des mots difficiles, essaie de les voir autrement.",
      tabs: [
        {
          label: "🎬 Le film",
          html: `<p>Imagine que chaque phrase est un petit <b>film</b> :</p>
<ul>
<li>le <b>sujet</b> est l'<b>acteur</b> principal 🎭 : celui qui est sur la scène ;</li>
<li>le <b>prédicat</b> est l'<b>action</b> 🎬 : ce que l'acteur fait ;</li>
<li>les <b>expansions</b> sont le <b>décor</b> : où, quand, avec qui, comment.</li>
</ul>
<p>Sans acteur ou sans action, il n'y a pas de film. Sans décor… c'est un film un peu pauvre, mais c'est toujours un film !</p>`
        },
        {
          label: "🧩 Les petites briques colorées",
          html: `<p>Méthode utilisée dans beaucoup d'écoles (aussi Montessori) : chaque type de mot a une couleur et une forme. Le sujet est une brique <b>bleue</b>, le prédicat <b>rouge</b>. Une brique rouge et une bleue collées suffisent pour faire une phrase. Essaie de construire toi-même : déplace les cubes et pense au nombre de phrases minimales que tu peux former avec 2 sujets × 3 verbes !</p>
<p>Avec 2 sujets (il gatto, la nonna) et 3 prédicats (dorme, canta, salta), tu obtiens 2 × 3 = <b>6 phrases minimales</b> différentes : il gatto dorme, il gatto canta, il gatto salta, la nonna dorme…</p>`,
          scene: "blocks",
          options: { mode: "array", a: 2, b: 3 }
        },
        {
          label: "❓ Les questions magiques",
          html: `<p>Si tu ne trouves pas le sujet, suis cette recette :</p>
<ol>
<li>Souligne en <b>rouge</b> le verbe (le mot qui change si je mets « hier » ou « demain »).</li>
<li>Pose au verbe la question : « <b>Qui</b> + verbe ? » ou « <b>Qu'est-ce qui</b> + verbe ? »</li>
<li>La réponse est le sujet : souligne-le en <b>bleu</b>.</li>
<li>Vérifie : si le sujet est pluriel, le verbe doit l'être aussi.</li>
</ol>
<p>Exemple : « Nel prato corrono due cavalli. » (Dans le pré courent deux chevaux.) Verbe : corrono. Qui court ? <b>Due cavalli</b> ✅</p>`
        },
        {
          label: "🌍 D'autres langues",
          html: `<p>Toutes les langues du monde ont un sujet et un prédicat, mais elles les placent dans des ordres différents :</p>
<table>
<tr><th>Langue</th><th>Phrase</th><th>Ordre</th></tr>
<tr><td>🇮🇹 Italien</td><td>Il gatto mangia il pesce</td><td>Sujet – Verbe – Objet</td></tr>
<tr><td>🇬🇧 Anglais</td><td>The cat eats the fish</td><td>Sujet – Verbe – Objet</td></tr>
<tr><td>🇯🇵 Japonais</td><td>Neko wa sakana o taberu (chat poisson mange)</td><td>Sujet – Objet – Verbe</td></tr>
<tr><td>🏛️ Latin</td><td>Feles piscem edit (chat poisson mange)</td><td>en général avec le verbe à la fin</td></tr>
</table>
<p>En anglais, le sujet ne peut jamais être supprimé : « I run » (je cours), jamais seulement « run ».</p>`
        },
        {
          label: "🔗 Compose les phrases",
          html: `<p>Associe à chaque sujet le prédicat qui a le plus de sens.</p>`,
          widget: "match",
          options: { pairs: [["Il pesce", "nuota"], ["Le api", "ronzano"], ["Il gallo", "canta"], ["La campana", "suona"], ["I fiori", "sbocciano"], ["Il vulcano", "erutta"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de la phrase minimale : touche un nœud et découvre pourquoi",
      nodes: [
        { id: "frase", label: "Phrase", x: 50, y: 6, color: "#2563eb", html: "Groupe de mots avec un sens complet et au moins un verbe.", why: "Le mot vient du grec <i>phrásis</i>, « manière de dire ». Pour les grammairiens, une phrase est une unité de communication : une information complète." },
        { id: "minima", label: "Phrase minimale", x: 50, y: 28, color: "#16a34a", html: "La phrase la plus courte possible : sujet + prédicat.", why: "C'est le « noyau » de la phrase : tout le reste tourne autour. L'idée que chaque phrase a un noyau avec le verbe au centre a été développée par le linguiste français Lucien Tesnière (1959), qui comparait le verbe à un atome qui « attire » les autres mots." },
        { id: "soggetto", label: "Sujet", x: 20, y: 50, color: "#3b82f6", html: "Qui ou ce qui accomplit l'action, ou de qui on parle.", why: "Du latin <i>subiectum</i>, « ce qui est placé dessous » : c'est la base dont on dit quelque chose. Déjà le philosophe grec Aristote (IVe siècle av. J.-C.) distinguait « ce dont on parle » de « ce que l'on en dit »." },
        { id: "predicato", label: "Prédicat", x: 80, y: 50, color: "#ef4444", html: "Ce que fait ou comment est le sujet : c'est le verbe.", why: "Du latin <i>praedicatum</i>, « ce qui est dit » du sujet. Sans prédicat, il n'y a pas d'information : c'est pour ça que c'est la partie indispensable." },
        { id: "sottinteso", label: "Sujet sous-entendu", x: 12, y: 75, color: "#60a5fa", html: "Il n'est pas écrit mais on le comprend : « Corro » (io).", why: "L'italien le permet parce que les terminaisons du verbe changent pour chaque personne et disent donc déjà qui agit. L'anglais et le français, dont les verbes varient moins, doivent toujours écrire le sujet." },
        { id: "accordo", label: "Accord", x: 40, y: 75, color: "#a855f7", html: "Le sujet et le verbe s'accordent en nombre (et en personne).", why: "L'accord est comme une « couture » qui nous fait comprendre quels mots vont ensemble, même quand l'ordre change : « Corrono i cavalli » → corrono est pluriel, donc le sujet est « i cavalli »." },
        { id: "verbale", label: "Prédicat verbal", x: 68, y: 75, color: "#f97316", html: "Un verbe qui exprime une action : canta, ha corso.", why: "On l'appelle ainsi parce que tout le sens est dans le verbe." },
        { id: "nominale", label: "Prédicat nominal", x: 92, y: 75, color: "#ec4899", html: "Essere + nom ou adjectif : « è felice », « è un medico ».", why: "Le sens est dans le nom ou l'adjectif (appelé « nom du prédicat ») ; le verbe essere ne sert que de lien, la <b>copule</b>, du latin <i>copula</i> = lien, chaîne." },
        { id: "espansioni", label: "Expansions", x: 50, y: 94, color: "#eab308", html: "Mots qui ajoutent des informations : où, quand, comment, quoi.", why: "Elles servent à rendre la phrase plus précise. Plus tard, tu découvriras qu'on les appelle des <b>compléments</b>, du latin <i>complere</i>, « remplir, compléter »." }
      ],
      edges: [
        ["frase", "minima", "son noyau est la"],
        ["minima", "soggetto", "contient le"],
        ["minima", "predicato", "contient le"],
        ["soggetto", "sottinteso", "peut être"],
        ["soggetto", "accordo", "fait l'"],
        ["predicato", "accordo", "fait l'"],
        ["predicato", "verbale", "peut être"],
        ["predicato", "nominale", "peut être"],
        ["minima", "espansioni", "s'enrichit avec"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : phrase minimale et expansions",
      questions: [
        { type: "mc", q: "Quelle est la phrase minimale de « Domani i miei cugini partiranno per il mare » ?", options: ["I miei cugini partiranno per il mare", "I cugini partiranno", "Domani partiranno"], answer: 1, explain: "Sujet « i cugini » + prédicat « partiranno » : le reste, ce sont des expansions." },
        { type: "mc", q: "Dans « La torta è buonissima » (Le gâteau est délicieux), le prédicat est…", options: ["verbal", "nominal"], answer: 1, explain: "Essere + adjectif : prédicat nominal." },
        { type: "tf", q: "Dans la phrase « Nevica » (Il neige), il n'y a pas de sujet.", answer: true, explain: "« Nevicare » est un verbe impersonnel : il n'a pas de sujet." }
      ]
    }
  ],
  glossary: [
    { t: "Phrase (frase)", d: "Groupe de mots avec un sens complet qui contient un verbe." },
    { t: "Phrase minimale (nucléaire)", d: "La phrase la plus courte possible : sujet + prédicat." },
    { t: "Sujet", d: "Qui ou ce qui accomplit l'action ou dont on parle. Question : qui ? qu'est-ce qui ?" },
    { t: "Prédicat", d: "Le verbe qui dit ce que fait ou comment est le sujet." },
    { t: "Sujet sous-entendu", d: "Sujet non écrit mais que l'on comprend grâce au verbe (Corro → io)." },
    { t: "Prédicat verbal", d: "Prédicat formé d'un verbe qui exprime une action." },
    { t: "Prédicat nominal", d: "Verbe essere + nom ou adjectif (è bello, è un dottore)." },
    { t: "Copule", d: "Le verbe essere quand il relie le sujet au nom ou à l'adjectif." },
    { t: "Verbe impersonnel", d: "Verbe sans sujet, comme piove, nevica, tuona." },
    { t: "Expansion", d: "Mot ou groupe de mots qui enrichit la phrase minimale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Dans la phrase « Il treno parte » (Le train part), quel est le sujet ?", options: ["Il treno", "parte"], answer: 0, explain: "Qui part ? Le train." },
      { type: "mc", q: "Dans la phrase « Giocano i bambini nel cortile » (Les enfants jouent dans la cour), quel est le sujet ?", options: ["nel cortile", "i bambini", "giocano"], answer: 1, explain: "Qui joue ? Les enfants. Le sujet peut aussi se trouver après le verbe." },
      { type: "tf", q: "Chaque phrase doit avoir un verbe.", answer: true, explain: "Le verbe (prédicat) est indispensable : sans verbe, il n'y a pas de phrase." },
      { type: "text", q: "« Avete vinto ! » (Vous avez gagné !) Quel est le sujet sous-entendu ?", answer: ["voi"], explain: "La terminaison -ete indique « voi »." },
      { type: "mc", q: "Laquelle de ces phrases est une phrase minimale ?", options: ["La mamma di Elena", "La mamma lavora.", "Al mattino presto"], answer: 1, explain: "Elle a un sujet (la mamma) et un prédicat (lavora)." },
      { type: "mc", q: "Dans « Mio nonno è un pescatore » (Mon grand-père est pêcheur), le prédicat est…", options: ["verbal", "nominal"], answer: 1, explain: "È + nom (un pescatore) : prédicat nominal." },
      { type: "mc", q: "Quel est le prédicat dans « Le stelle brillano nel cielo » (Les étoiles brillent dans le ciel) ?", options: ["Le stelle", "brillano", "nel cielo"], answer: 1, explain: "Que font les étoiles ? Elles brillent (brillano)." },
      { type: "tf", q: "Dans « Corrono i cavalli », le verbe est pluriel parce que le sujet est pluriel.", answer: true, explain: "Le sujet et le verbe s'accordent : i cavalli → corrono." },
      { type: "order", q: "Mets les mots dans l'ordre pour former une phrase minimale.", items: ["Il", "gatto", "miagola"], explain: "Sujet (il gatto) + prédicat (miagola)." },
      { type: "mc", q: "Quelle phrase est sans sujet ?", options: ["Tuona.", "Canto.", "Luca dorme."], answer: 0, explain: "« Tuonare » est impersonnel ; dans « Canto », le sujet existe mais il est sous-entendu (io)." },
      { type: "text", q: "Écris le prédicat de la phrase « Ieri Sara ha mangiato una mela ».", answer: ["ha mangiato"], explain: "Le prédicat est le verbe entier : ha mangiato." },
      { type: "mc", q: "Comment s'appellent les mots qui enrichissent la phrase minimale ?", options: ["expansions", "terminaisons", "radicaux"], answer: 0, explain: "Les expansions ajoutent des informations (où, quand, comment…)." }
    ]
  }
});
