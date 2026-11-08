TOPIC('fr', {
  id: `m3-lat-motti-celebri`,
  title: `Devises et phrases latines célèbres`,
  intro: `<i>Veni, vidi, vici. Carpe diem. Alea iacta est.</i> Ce sont des phrases vieilles de plus de deux mille ans, mais on les entend encore dans les films, sur les tatouages, dans les armoiries des villes et des équipes de football. Découvrons <b>qui</b> les a dites ou écrites, <b>quand</b>, ce qu'elles <b>signifient vraiment</b> et comment les <b>analyser</b> avec la grammaire latine que tu connais. 🏛️💬`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. Pourquoi les phrases latines sont-elles si célèbres ?`,
      html: `<p>Le latin a été pendant des siècles la langue de Rome, puis de l'<b>Église</b>, des <b>universités</b>, de la <b>science</b> et du <b>droit</b> dans toute l'Europe : jusqu'au XVIIIe siècle, les livres de science et de philosophie s'écrivaient souvent en latin. C'est pour cela que beaucoup de phrases sont devenues un patrimoine commun.</p>
<p>Les phrases latines « fonctionnent » bien comme devises parce que le latin est :</p>
<ul>
<li><b>bref</b> : sans articles et souvent sans pronoms, il suffit de peu de mots (<i>Veni, vidi, vici</i> = 3 mots, en italien 6 : « Sono venuto, ho visto, ho vinto ») ;</li>
<li><b>musical</b> : il aime les allitérations (les mêmes sons au début : <b>v</b>eni, <b>v</b>idi, <b>v</b>ici) et les rythmes ;</li>
<li><b>solennel</b> : il donne à la phrase un air ancien et d'autorité.</li>
</ul>
<p>Ces phrases se répartissent en <b>citations</b> (phrases dites ou écrites par un auteur précis), <b>proverbes</b> (sagesse populaire, souvent sans auteur) et <b>devises</b> (phrases choisies comme « programme » par une personne, une famille, une ville, une école).</p>`
    },
    {
      type: `text`, title: `2. Les phrases de Jules César`,
      html: `<ul>
<li><b>Alea iacta est</b> = « Le dé est jeté ». Selon l'historien Suétone, César la prononça le <b>10 janvier 49 av. J.-C.</b> en traversant avec ses troupes le fleuve <b>Rubicon</b>, frontière qu'un général ne pouvait pas franchir en armes. C'était le début de la guerre civile. L'historien grec Plutarque raconte qu'il la dit en grec, en citant le poète comique Ménandre. Aujourd'hui on l'emploie quand on prend une décision dont on ne peut pas revenir (comme « franchir le Rubicon »).</li>
<li><b>Veni, vidi, vici</b> = « Je suis venu, j'ai vu, j'ai vaincu ». César l'écrivit en <b>47 av. J.-C.</b> pour annoncer à Rome la victoire très rapide de <b>Zéla</b> (aujourd'hui en Turquie) contre le roi Pharnace du Pont. Suétone raconte qu'elle était écrite sur une pancarte portée pendant son triomphe.</li>
<li><b>Tu quoque, Brute, fili mi !</b> = « Toi aussi, Brutus, mon fils ! ». Selon la tradition, ce furent les dernières paroles de César, tué le <b>15 mars 44 av. J.-C.</b> (les Ides de mars). En réalité, Suétone rapporte une phrase en <b>grec</b> (<i>kai sy, teknon</i> = toi aussi, mon enfant) et ajoute que d'autres disent que César mourut <b>sans rien dire</b>. La version latine la plus célèbre est celle de Shakespeare : <i>Et tu, Brute?</i></li>
</ul>`
    },
    {
      type: `3d`, title: `Les phrases célèbres dans l'espace et dans le temps`,
      scene: `spacetime`,
      options: {
        lat: [35, 55], lon: [-5, 40], years: [-250, 1700],
        places: [
          { lat: 41.9, lon: 12.5, label: `Rome` },
          { lat: 44.1, lon: 12.4, label: `Rubicon` },
          { lat: 40.3, lon: 35.9, label: `Zéla` },
          { lat: 41.49, lon: 13.81, label: `Mont-Cassin` },
          { lat: 52.16, lon: 4.49, label: `Leyde` }
        ],
        events: [
          { id: `plauto`, lat: 41.9, lon: 12.5, year: -211, label: `Plaute : "lupus est homo homini"`, html: `Dans la comédie <i>Asinaria</i> (vers 211 av. J.-C.), Plaute écrit que l'homme est un loup pour l'homme quand il ne le connaît pas. En 1600, le philosophe anglais Thomas Hobbes rendra célèbre la forme <i>homo homini lupus</i>.` },
          { id: `rubi`, lat: 44.1, lon: 12.4, year: -49, label: `Alea iacta est`, html: `10 janvier 49 av. J.-C. : César traverse le Rubicon avec une légion, défiant le Sénat. Commence la guerre civile contre Pompée.` },
          { id: `zela`, lat: 40.3, lon: 35.9, year: -47, label: `Veni, vidi, vici`, html: `Août 47 av. J.-C. : en une bataille de quelques heures, César défait Pharnace II du Pont et l'annonce en trois mots seulement.`, causes: [`rubi`] },
          { id: `idi`, lat: 41.9, lon: 12.5, year: -44, label: `Tu quoque, Brute`, html: `15 mars 44 av. J.-C. : César, désormais dictateur à vie, est tué au Sénat par un groupe de conjurés, dont Brutus.`, causes: [`rubi`, `zela`] },
          { id: `orazio`, lat: 41.9, lon: 12.5, year: -23, label: `Horace : carpe diem`, html: `Le poète Horace publie les trois premiers livres des <i>Odes</i>. Dans l'ode 1,11, il invite Leuconoé à « cueillir l'instant ». C'est l'époque d'Auguste, après des années de guerres civiles.`, causes: [`idi`] },
          { id: `giov`, lat: 41.9, lon: 12.5, year: 120, label: `Juvénal : mens sana in corpore sano`, html: `Dans la <i>Satire X</i> (début du IIe siècle apr. J.-C.), Juvénal dit qu'il faudrait ne demander aux dieux qu'un esprit sain dans un corps sain. À la même époque, il moque le peuple qui ne veut que <i>panem et circenses</i>.` },
          { id: `bene`, lat: 41.49, lon: 13.81, year: 529, label: `Benoît : ora et labora`, html: `Vers 529, saint Benoît fonde le monastère du Mont-Cassin. Sa Règle organise la journée entre prière et travail : d'ici vient la devise bénédictine <i>ora et labora</i> (qui, comme formule, se répandit plus tard).` },
          { id: `gali`, lat: 41.9, lon: 12.5, year: 1633, label: `Galilée : « Eppur si muove »`, html: `Galilée est jugé à Rome et contraint d'abjurer la théorie de Copernic. La phrase « Eppur si muove » est probablement une légende née après sa mort.` },
          { id: `cart`, lat: 52.16, lon: 4.49, year: 1637, label: `Descartes : cogito, ergo sum`, html: `À Leyde paraît le <i>Discours de la méthode</i> de Descartes : « Je pense, donc je suis ». La version latine <i>cogito, ergo sum</i> apparaît dans les <i>Principia philosophiae</i> (1644). Après la condamnation de Galilée, Descartes avait renoncé à publier son traité <i>Le Monde</i>.`, causes: [`gali`] }
        ]
      },
      caption: `La base est la carte, la hauteur est le temps. Touche un événement pour lire l'histoire de la phrase ; les flèches relient les causes et les effets.`
    },
    {
      type: `decision`, title: `49 av. J.-C. : César devant le Rubicon`,
      html: `<p>Tu es <b>Jules César</b>. Tu as conquis la Gaule en huit ans de guerre et tes soldats t'adorent. À Rome, cependant, le Sénat, dirigé par tes adversaires et par Pompée, t'ordonne de <b>dissoudre l'armée</b> et de revenir en simple citoyen : sans la protection de ta charge, tu risques un procès et la fin de ta carrière politique.</p>
<p>Tu es sur la rive du <b>Rubicon</b>, le petit cours d'eau qui marque la frontière de l'Italie : la loi interdit à un général de le traverser avec ses troupes.</p>`,
      question: `Qu'aurais-tu fait ?`,
      options: [
        { label: `Obéir : dissoudre l'armée et rentrer seul à Rome`, outcome: `Tu aurais respecté la loi et évité la guerre civile, mais tes ennemis t'auraient probablement jugé et écarté de la politique, peut-être exilé.` },
        { label: `Traverser le fleuve avec la légion`, outcome: `Tu deviens un rebelle contre l'État : une guerre civile s'ouvre dans toute la Méditerranée. Si tu gagnes, tu auras un pouvoir immense ; si tu perds, la mort.` },
        { label: `Rester à la frontière et négocier encore avec le Sénat`, outcome: `César avait en effet proposé des compromis (par exemple que Pompée aussi abandonne son armée), mais le Sénat les avait rejetés. Attendre aurait donné du temps à ses ennemis pour s'organiser.` }
      ],
      answer: 1,
      explain: `César franchit le Rubicon le 10 janvier 49 av. J.-C., en prononçant (selon Suétone) « alea iacta est ». Pompée et de nombreux sénateurs fuirent Rome ; César gagna la guerre civile (bataille de Pharsale, 48 av. J.-C.) et devint dictateur. Son pouvoir personnel inquiéta cependant de nombreux sénateurs, qui le tuèrent en 44 av. J.-C. Son choix marqua la fin de la République romaine : quelques années plus tard, son fils adoptif Octave devint le premier empereur, Auguste.`
    },
    {
      type: `quiz`, title: `Mini-quiz : les phrases de César`,
      questions: [
        { type: `mc`, q: `« Alea iacta est » se rapporte à…`, options: [`la victoire de Zéla`, `la traversée du Rubicon`, `la mort de César`], answer: 1, explain: `49 av. J.-C., début de la guerre civile.` },
        { type: `mc`, q: `Que signifie « Veni, vidi, vici » ?`, options: [`Je suis venu, j'ai vu, j'ai vaincu`, `Viens, vois, vaincs`, `Je vois, je viens, je vis`], answer: 0, explain: `Trois parfaits de la 1re personne du singulier.` },
        { type: `num`, q: `En quelle année av. J.-C. Jules César fut-il tué ? (écris seulement le nombre)`, answer: 44, tol: 0, explain: `Aux Ides de mars (15 mars) de l'an 44 av. J.-C.` }
      ]
    },
    {
      type: `text`, title: `3. Poètes et écrivains : la sagesse pour la vie`,
      html: `<table>
<tr><th>Phrase</th><th>Signification</th><th>Auteur et œuvre</th></tr>
<tr><td><b>Carpe diem</b> (quam minimum credula postero)</td><td>Cueille le jour (en te fiant le moins possible au lendemain)</td><td>Horace, <i>Odes</i> 1,11 (23 av. J.-C.)</td></tr>
<tr><td><b>Mens sana in corpore sano</b></td><td>Esprit sain dans un corps sain</td><td>Juvénal, <i>Satires</i> X</td></tr>
<tr><td><b>Panem et circenses</b></td><td>Du pain et des jeux du cirque : ce que le peuple demande pour rester tranquille</td><td>Juvénal, <i>Satires</i> X</td></tr>
<tr><td><b>Audentes fortuna iuvat</b></td><td>La fortune aide les audacieux</td><td>Virgile, <i>Énéide</i> X, 284</td></tr>
<tr><td><b>Omnia vincit amor</b></td><td>L'amour vainc tout</td><td>Virgile, <i>Bucoliques</i> X, 69</td></tr>
<tr><td><b>Homo sum, humani nihil a me alienum puto</b></td><td>Je suis un homme : rien de ce qui est humain ne m'est étranger</td><td>Térence, <i>Heautontimorumenos</i> (163 av. J.-C.)</td></tr>
<tr><td><b>Festina lente</b></td><td>Hâte-toi lentement</td><td>devise d'Auguste (rapportée par Suétone, en grec)</td></tr>
<tr><td><b>Si vis pacem, para bellum</b></td><td>Si tu veux la paix, prépare la guerre</td><td>adaptation de Végèce (IVe-Ve s. apr. J.-C.)</td></tr>
</table>
<p>⚠️ Attention au sens réel : <i>Mens sana in corpore sano</i> pour Juvénal n'était <b>pas</b> une invitation à faire du sport, mais un conseil sur ce qu'il faut demander aux dieux dans les prières (plutôt que richesses et pouvoir). <i>Carpe diem</i> ne veut pas dire « fais tout ce que tu veux », mais « vis bien le présent, car l'avenir est incertain ».</p>`
    },
    {
      type: `text`, title: `4. Proverbes, droit, science : les phrases de tous les jours`,
      html: `<ul>
<li><b>Verba volant, scripta manent</b> = les paroles volent, les écrits restent (proverbe médiéval).</li>
<li><b>Errare humanum est, perseverare autem diabolicum</b> = se tromper est humain, persévérer (dans l'erreur) est diabolique (médiéval, inspiré de Sénèque et de saint Augustin).</li>
<li><b>Repetita iuvant</b> = les choses répétées aident (la devise parfaite pour qui étudie !).</li>
<li><b>Dura lex, sed lex</b> = la loi est dure, mais c'est la loi.</li>
<li><b>Per aspera ad astra</b> = à travers les difficultés jusqu'aux étoiles.</li>
<li><b>Ora et labora</b> = prie et travaille (devise des moines bénédictins).</li>
<li><b>Cogito, ergo sum</b> = je pense, donc je suis (Descartes).</li>
<li><b>Memento mori</b> = souviens-toi que tu dois mourir (invitation à l'humilité).</li>
</ul>
<p>Et dans la vie quotidienne : <i>ad hoc</i> (exprès, pour cela), <i>alter ego</i> (un autre moi-même), <i>lapsus</i> (étourderie), <i>ultimatum</i>, <i>gratis</i> (de <i>gratiis</i> = par grâce, sans payer), <i>bis</i> (deux fois), <i>post scriptum</i> (P.-S.), <i>et cetera</i> (etc.).</p>`
    },
    {
      type: `widget`, title: `Associe la phrase au sens`,
      widget: `match`,
      options: { pairs: [
        [`Carpe diem`, `Cueille l'instant`],
        [`Alea iacta est`, `Le dé est jeté`],
        [`Verba volant, scripta manent`, `Les paroles volent, les écrits restent`],
        [`Mens sana in corpore sano`, `Esprit sain dans un corps sain`],
        [`Audentes fortuna iuvat`, `La fortune aide les audacieux`],
        [`Festina lente`, `Hâte-toi lentement`],
        [`Repetita iuvant`, `Répéter aide`]
      ] },
      caption: `Essaie sans regarder les tableaux !`
    },
    {
      type: `text`, title: `5. Analysons les phrases avec la grammaire`,
      html: `<p>Maintenant que tu connais les cas et les verbes, tu peux « démonter » les devises :</p>
<ul>
<li><b>Carpe diem</b> : <i>carpe</i> = impératif de <i>carpo, carpis, carpĕre</i> (3e conjug. : cueillir) ; <i>diem</i> = accusatif singulier de <i>dies</i> (5e déclinaison) ➜ complément d'objet : « cueille le jour ».</li>
<li><b>Veni, vidi, vici</b> : trois <b>parfaits</b> (1re pers. sing.) de <i>venio</i> (4e), <i>video</i> (2e), <i>vinco</i> (3e). Aucun pronom, aucune conjonction (cela s'appelle l'<b>asyndète</b>) : l'effet est la rapidité, exactement comme la bataille !</li>
<li><b>Verba volant, scripta manent</b> : <i>verba</i> (les paroles) et <i>scripta</i> (les écrits) sont des nominatifs pluriels neutres ➜ sujets ; <i>volant</i> (1re conjug.) et <i>manent</i> (2e conjug.) sont des présents de la 3e personne du pluriel.</li>
<li><b>Audentes fortuna iuvat</b> : <i>fortuna</i> = nominatif (sujet, 1re décl.) ; <i>audentes</i> = accusatif pluriel (les audacieux, objet) ; <i>iuvat</i> = il aide (1re conjug.). Le sujet se place au milieu : en latin l'ordre est libre !</li>
<li><b>Cogito, ergo sum</b> : <i>cogito</i> = je pense (1re conjug.), <i>ergo</i> = donc, <i>sum</i> = je suis (le verbe que tu as déjà étudié !).</li>
</ul>`
    },
    {
      type: `svg`, title: `Démonter « Audentes fortuna iuvat »`,
      caption: `La désinence indique la fonction : le sujet « fortuna » est au milieu, mais reste le sujet.`,
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fffbeb"/>
<rect x="30" y="40" width="200" height="70" rx="12" fill="#3b82f6"/>
<rect x="250" y="40" width="160" height="70" rx="12" fill="#ef4444"/>
<rect x="430" y="40" width="140" height="70" rx="12" fill="#334155"/>
<text x="130" y="85" font-size="28" fill="#fff" text-anchor="middle" font-weight="bold">audent<tspan fill="#fde047">es</tspan></text>
<text x="330" y="85" font-size="28" fill="#fff" text-anchor="middle" font-weight="bold">fortun<tspan fill="#fde047">a</tspan></text>
<text x="500" y="85" font-size="28" fill="#fff" text-anchor="middle" font-weight="bold">iuva<tspan fill="#fde047">t</tspan></text>
<text x="130" y="140" font-size="15" fill="#1d4ed8" text-anchor="middle" font-weight="bold">ACCUSATIF PLURIEL</text>
<text x="330" y="140" font-size="15" fill="#b91c1c" text-anchor="middle" font-weight="bold">NOMINATIF</text>
<text x="500" y="140" font-size="15" fill="#334155" text-anchor="middle" font-weight="bold">3e SING. PRÉSENT</text>
<text x="130" y="165" font-size="15" fill="#334155" text-anchor="middle">complément d'objet</text>
<text x="330" y="165" font-size="15" fill="#334155" text-anchor="middle">sujet</text>
<text x="500" y="165" font-size="15" fill="#334155" text-anchor="middle">prédicat</text>
<path d="M130 180 C 130 230, 470 210, 470 235" stroke="#3b82f6" stroke-width="3" fill="none"/>
<path d="M330 180 C 330 210, 130 210, 130 235" stroke="#ef4444" stroke-width="3" fill="none"/>
<path d="M500 180 C 500 210, 300 215, 300 235" stroke="#334155" stroke-width="3" fill="none"/>
<text x="300" y="265" font-size="20" fill="#0f172a" text-anchor="middle" font-weight="bold">La fortune   aide   les audacieux</text>
</svg>`
    },
    {
      type: `example`, title: `Exemple pratique : les devises autour de nous`,
      html: `<ul>
<li>Les armoiries de la ville de <b>Paris</b> : <i>Fluctuat nec mergitur</i> = elle est battue par les flots mais ne sombre pas.</li>
<li>Les <b>Jeux olympiques</b> : <i>Citius, altius, fortius</i> = plus vite, plus haut, plus fort (proposé par Pierre de Coubertin en 1894 ; depuis 2021 s'ajoute <i>communiter</i>, « ensemble »).</li>
<li>Les <b>États-Unis</b> : <i>E pluribus unum</i> = de plusieurs, un seul (les États qui forment une seule nation), inscrit sur les pièces de monnaie.</li>
<li>L'<b>Union européenne</b> : <i>In varietate concordia</i> = unis dans la diversité.</li>
<li>La marque de sport <b>ASICS</b> est l'acronyme de <i>Anima sana in corpore sano</i> !</li>
</ul>`
    },
    {
      type: `example`, title: `Exemple pratique : utiliser une devise dans une rédaction`,
      html: `<p>Une citation latine, bien utilisée, rend un texte argumentatif plus efficace. Par exemple, dans une rédaction sur l'importance de l'étude :</p>
<p><i>« Comme disaient les Romains, <b>repetita iuvant</b> : relire un peu chaque jour est plus utile que d'étudier tout la veille de l'interrogation. »</i></p>
<p>Règles d'or : écris la phrase en <b>italique</b> (ou entre guillemets), <b>traduis-la</b> ou explique-la juste après, et assure-toi d'en connaître le <b>sens réel</b> (et l'auteur, s'il y en a un).</p>`
    },
    {
      type: `curiosity`, title: `Le saviez-vous ? Beaucoup de phrases « de César » ne sont pas vraiment de lui ?`,
      html: `<p><i>Alea iacta est</i> était un proverbe grec que César (selon Plutarque) cita d'après le poète comique Ménandre. <i>Tu quoque, Brute</i> est une invention postérieure : les sources anciennes parlent d'une phrase en grec ou du silence. Et l'ordre de Suétone est en réalité <i>iacta alea est</i> ! De même, « <i>Eppur si muove</i> » de Galilée apparaît pour la première fois dans un tableau et un livre écrits plus de cent ans après le procès. Morale : toujours vérifier les sources, même pour les citations célèbres !</p>`
    },
    {
      type: `curiosity`, title: `Le saviez-vous ? Les serments des médecins et le football parlent latin ?`,
      html: `<p>Le principe des médecins <i>Primum non nocere</i> (avant tout, ne pas nuire) s'inspire du serment d'Hippocrate. De nombreuses équipes de football anglaises ont des devises latines : <b>Tottenham</b> a <i>Audere est facere</i> (oser, c'est faire) et <b>Everton</b> <i>Nil satis nisi optimum</i> (seul le meilleur suffit). Et la devise de l'État du Kansas (États-Unis) est justement <i>Ad astra per aspera</i> !</p>`
    },
    {
      type: `remember`, title: `À retenir`,
      html: `<ul>
<li>César : <b>Alea iacta est</b> (Rubicon, 49 av. J.-C.), <b>Veni, vidi, vici</b> (Zéla, 47 av. J.-C.) ; <b>Tu quoque, Brute</b> relève de la tradition (44 av. J.-C.).</li>
<li>Horace : <b>Carpe diem</b>. Juvénal : <b>Mens sana in corpore sano</b>, <b>Panem et circenses</b>. Virgile : <b>Audentes fortuna iuvat</b>.</li>
<li>Avant d'utiliser une citation : <b>sens réel</b>, <b>auteur</b>, <b>contexte</b>.</li>
<li>Les phrases s'analysent comme toute phrase latine : verbe, sujet (nominatif), objet (accusatif)…</li>
</ul>`
    },
    {
      type: `alternatives`, title: `D'autres façons de les apprendre`,
      intro: `Les phrases latines se retiennent mieux si tu les relies à des images, à des histoires et aux langues que tu connais.`,
      tabs: [
        {
          label: `🃏 Fiches`,
          html: `<p>Lis la devise latine, essaie de la traduire, puis retourne la carte.</p>`,
          widget: `flashcards`,
          options: { cards: [
            { front: `Veni, vidi, vici`, back: `Je suis venu, j'ai vu, j'ai vaincu (César, 47 av. J.-C.)` },
            { front: `Carpe diem`, back: `Cueille le jour (Horace)` },
            { front: `Panem et circenses`, back: `Du pain et des jeux du cirque (Juvénal)` },
            { front: `Per aspera ad astra`, back: `À travers les difficultés jusqu'aux étoiles` },
            { front: `Cogito, ergo sum`, back: `Je pense, donc je suis (Descartes)` },
            { front: `Dura lex, sed lex`, back: `La loi est dure, mais c'est la loi` },
            { front: `Memento mori`, back: `Souviens-toi que tu dois mourir` },
            { front: `E pluribus unum`, back: `De plusieurs, un (devise des États-Unis)` }
          ] }
        },
        {
          label: `🖼️ La bande dessinée mentale`,
          html: `<p>Associe à chaque phrase une image drôle et précise : la mémoire retient mieux les images que les mots.</p>
<ul>
<li>🎲 <b>Alea iacta est</b> : César qui lance un dé géant dans un fleuve.</li>
<li>🍞🎪 <b>Panem et circenses</b> : un énorme sandwich assis dans les gradins du Circus Maximus.</li>
<li>🐢🏃 <b>Festina lente</b> : une tortue avec des chaussures de course.</li>
<li>🧠💪 <b>Mens sana in corpore sano</b> : un cerveau qui fait des haltères.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#e0f2fe"/>
<path d="M0 150 Q 150 120 300 150 T 600 150 L600 220 L0 220 Z" fill="#38bdf8"/>
<rect x="250" y="70" width="80" height="80" rx="10" fill="#ffffff" stroke="#0f172a" stroke-width="4" transform="rotate(-15 290 110)"/>
<circle cx="270" cy="95" r="7" fill="#0f172a"/><circle cx="305" cy="115" r="7" fill="#0f172a"/><circle cx="285" cy="130" r="7" fill="#0f172a"/>
<text x="110" y="120" font-size="64" text-anchor="middle">🤴</text>
<text x="300" y="40" font-size="22" fill="#0f172a" text-anchor="middle" font-weight="bold">ALEA IACTA EST !</text>
<text x="470" y="140" font-size="18" fill="#075985" font-weight="bold">Rubicon</text>
<text x="300" y="205" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="bold">49 av. J.-C. – le dé est jeté : on ne revient pas en arrière</text>
</svg>`
        },
        {
          label: `🌍 Phrases sœurs dans d'autres langues`,
          html: `<p>Beaucoup de langues ont des proverbes au même sens que les devises latines :</p>
<ul>
<li><i>Festina lente</i> ➜ 🇮🇹 « Chi va piano va sano e va lontano » (qui va doucement va sûrement et loin) ; 🇬🇧 <i>More haste, less speed</i> ; 🇯🇵 <i>Isogaba maware</i> (si tu es pressé, fais le détour).</li>
<li><i>Repetita iuvant</i> ➜ 🇬🇧 <i>Practice makes perfect</i> ; 🇷🇺 <i>Повторение — мать учения</i> (la répétition est la mère de l'étude).</li>
<li><i>Audentes fortuna iuvat</i> ➜ 🇬🇧 <i>Fortune favours the bold</i> ; 🇫🇷 <i>La fortune sourit aux audacieux</i>.</li>
<li><i>Verba volant…</i> ➜ 🇮🇹 « Carta canta » (l'écrit reste).</li>
</ul>`
        },
        {
          label: `⏳ Frise chronologique`,
          html: `<p>Mets les phrases dans l'ordre chronologique : à quelle époque est née chacune ?</p>`,
          widget: `timeline`,
          options: { events: [
            { year: -211, label: `Plaute : lupus est homo homini`, icon: `🐺` },
            { year: -49, label: `Alea iacta est`, icon: `🎲` },
            { year: -47, label: `Veni, vidi, vici`, icon: `⚔️` },
            { year: -23, label: `Horace : Carpe diem`, icon: `🌹` },
            { year: 120, label: `Juvénal : Mens sana…`, icon: `🧠` },
            { year: 1644, label: `Descartes : Cogito, ergo sum`, icon: `💭` },
            { year: 1894, label: `Citius, altius, fortius`, icon: `🏅` }
          ], unit: `ans` }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Carte : d'où viennent les phrases latines`,
      nodes: [
        { id: `lat`, label: `Latin`, x: 50, y: 6, color: `#64748b`, html: `Langue de Rome, puis langue commune de la culture européenne.`, why: `Après la fin de l'Empire d'Occident (476 apr. J.-C.), le latin resta la langue de l'Église, des écoles et des universités (Bologne, 1088) et de la science jusqu'au XVIIIe siècle : Newton écrivit en latin les <i>Principia</i> (1687).` },
        { id: `stor`, label: `Historiens`, x: 15, y: 30, color: `#ef4444`, html: `Suétone, Plutarque : transmettent les phrases des puissants.`, why: `Suétone écrivit les <i>Vies des douze Césars</i> vers 121 apr. J.-C., plus de 150 ans après César, à partir d'archives et de récits : c'est pour cela que certaines phrases sont incertaines.` },
        { id: `cesare`, label: `Jules César`, x: 15, y: 58, color: `#dc2626`, html: `Alea iacta est, Veni vidi vici.`, why: `César était aussi un grand écrivain (<i>La Guerre des Gaules</i>), célèbre pour son style sobre et clair : les phrases courtes et percutantes étaient sa « signature ».` },
        { id: `poeti`, label: `Poètes`, x: 50, y: 30, color: `#a855f7`, html: `Horace, Virgile, Juvénal, Térence.`, why: `La poésie latine utilise le rythme des syllabes longues et brèves (métrique) : les vers courts et rythmés se retiennent facilement, et beaucoup de phrases sont des morceaux de vers.` },
        { id: `orazio`, label: `Carpe diem`, x: 40, y: 58, color: `#c084fc`, html: `Horace, Odes 1,11.`, why: `Horace suivait la philosophie d'<b>Épicure</b> : pour être heureux, il faut savourer avec mesure le présent, sans angoisse pour un avenir que nous ne contrôlons pas.` },
        { id: `giov`, label: `Mens sana…`, x: 62, y: 58, color: `#9333ea`, html: `Juvénal, Satire X.`, why: `Juvénal écrivait des <b>satires</b>, critiques mordantes de la société romaine : la phrase était une invitation à désirer des choses simples, et non la richesse et le pouvoir.` },
        { id: `med`, label: `Moyen Âge et Église`, x: 85, y: 30, color: `#0ea5e9`, html: `Ora et labora, Errare humanum est, Verba volant…`, why: `Dans les monastères et les universités, le latin était la langue de tous les jours : de nouveaux proverbes, brefs et rimés, facile à mémoriser, sont nés.` },
        { id: `oggi`, label: `Devises d'aujourd'hui`, x: 50, y: 88, color: `#22c55e`, html: `Jeux olympiques, États, villes, équipes, écoles.`, why: `Le latin n'appartient plus à une seule nation : il est donc « neutre » et solennel, parfait pour les devises d'institutions internationales, comme l'UE ou les Jeux olympiques.` }
      ],
      edges: [
        [`lat`, `stor`, `sources`], [`lat`, `poeti`, `sources`], [`lat`, `med`, `continue`], [`stor`, `cesare`, `racontent`],
        [`poeti`, `orazio`, `Horace`], [`poeti`, `giov`, `Juvénal`], [`med`, `oggi`, `héritage`], [`cesare`, `oggi`, `toujours cité`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz : auteurs et sens`,
      questions: [
        { type: `mc`, q: `Qui a écrit « Carpe diem » ?`, options: [`Virgile`, `Horace`, `César`], answer: 1, explain: `Horace, Odes 1,11.` },
        { type: `tf`, q: `Pour Juvénal, « Mens sana in corpore sano » était une invitation à faire du sport.`, answer: false, explain: `C'était un conseil sur ce qu'il faut demander aux dieux : la santé du corps et de l'esprit plutôt que la richesse et le pouvoir.` },
        { type: `text`, q: `Complète : « Verba volant, scripta ___ ».`, answer: [`manent`], explain: `Les paroles volent, les écrits restent.` }
      ]
    }
  ],
  glossary: [
    { t: `Devise`, d: `Phrase brève qui exprime un idéal ou un programme (d'une personne, d'une ville, d'une institution).` },
    { t: `Citation`, d: `Phrase reprise d'un auteur ou d'une œuvre précise.` },
    { t: `Proverbe`, d: `Phrase de sagesse populaire, en général sans auteur.` },
    { t: `Asyndète`, d: `Énumération de mots sans conjonctions : veni, vidi, vici.` },
    { t: `Allitération`, d: `Répétition des mêmes sons au début de mots proches.` },
    { t: `Rubicon`, d: `Fleuve de la Romagne, frontière de l'Italie romaine franchie par César en 49 av. J.-C.` },
    { t: `Ides de mars`, d: `Le 15 mars dans le calendrier romain : jour de l'assassinat de César (44 av. J.-C.).` },
    { t: `Satire`, d: `Genre littéraire qui critique avec ironie les défauts de la société.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `« Veni, vidi, vici » annonçait la victoire de César à…`, options: [`Pharsale`, `Zéla`, `Alésia`], answer: 1, explain: `Zéla, 47 av. J.-C., contre Pharnace du Pont.` },
      { type: `mc`, q: `« Alea iacta est » signifie…`, options: [`Le dé est jeté`, `Le sort est contraire`, `Le fleuve est large`], answer: 0, explain: `Alea = dé, iacta est = a été jeté.` },
      { type: `num`, q: `En quelle année av. J.-C. César traversa-t-il le Rubicon ?`, answer: 49, tol: 0, explain: `Le 10 janvier 49 av. J.-C.` },
      { type: `order`, q: `Mets dans l'ordre chronologique.`, items: [`Alea iacta est (Rubicon)`, `Veni, vidi, vici (Zéla)`, `Mort de César aux Ides de mars`, `Horace publie les Odes (Carpe diem)`, `Descartes : Cogito, ergo sum`], explain: `49 av. J.-C., 47 av. J.-C., 44 av. J.-C., 23 av. J.-C., 1637/1644 apr. J.-C.` },
      { type: `mc`, q: `« Panem et circenses » critique…`, options: [`un peuple qui se contente de nourriture et de spectacles`, `les boulangers romains`, `les courses de chevaux`], answer: 0, explain: `Juvénal accuse le peuple de ne plus s'intéresser à la politique.` },
      { type: `text`, q: `Traduis « Carpe diem ».`, answer: [`cueille le jour`, `cueille l'instant`, `saisis le jour`, `saisis l'instant`, `profite du jour`], explain: `carpe = cueille (impératif), diem = le jour (accusatif).` },
      { type: `mc`, q: `Dans « Carpe diem », « diem » est…`, options: [`nominatif, sujet`, `accusatif, complément d'objet`, `ablatif, temps`], answer: 1, explain: `Accusatif singulier de dies (5e déclinaison).` },
      { type: `tf`, q: `« Tu quoque, Brute, fili mi » est avec certitude la phrase prononcée par César.`, answer: false, explain: `Suétone rapporte une phrase en grec ou le silence ; la version latine est traditionnelle.` },
      { type: `mc`, q: `« Cogito, ergo sum » est de…`, options: [`Cicéron`, `Descartes`, `Galilée`], answer: 1, explain: `Le philosophe français René Descartes, XVIIe siècle.` },
      { type: `mc`, q: `Quelle devise appartient aux Jeux olympiques ?`, options: [`E pluribus unum`, `Citius, altius, fortius`, `Fluctuat nec mergitur`], answer: 1, explain: `Plus vite, plus haut, plus fort (depuis 2021 + communiter).` },
      { type: `text`, q: `Complète la devise de Virgile : « Audentes fortuna ___ » (aide).`, answer: [`iuvat`, `juvat`], explain: `iuvat = il aide (3e pers. sing., 1re conjugaison).` },
      { type: `mc`, q: `« Festina lente » signifie…`, options: [`Fais la fête lentement`, `Hâte-toi lentement`, `Le lent gagne la fête`], answer: 1, explain: `Agir avec rapidité mais sans précipitation imprudente : devise d'Auguste.` }
    ]
  }
});
