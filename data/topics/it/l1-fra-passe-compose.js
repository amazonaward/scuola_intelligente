TOPIC('it', {
  id: "l1-fra-passe-compose",
  title: "Il passé composé",
  intro: "\"Hier, j'<b>ai mangé</b> une crêpe, puis je <b>suis allée</b> au cinéma avec mes amis.\" Per raccontare ciò che è <b>successo</b> in francese si usa quasi sempre il <b>passé composé</b>: un tempo formato da un <b>ausiliare</b> (<i>avoir</i> o <i>être</i>) più il <b>participio passato</b>. È molto simile al nostro passato prossimo, con un'attenzione in più: quale ausiliare scegliere e quando <b>accordare</b> il participio. 📅",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Come si forma: ausiliare + participio passato",
      html: `<p>Formula: <b>soggetto + avoir (o être) al presente + participio passato</b>.</p>
<table>
<tr><th>Pronome</th><th>Con AVOIR (manger)</th><th>Con ÊTRE (aller)</th></tr>
<tr><td>je</td><td>j'<b>ai</b> mangé</td><td>je <b>suis</b> allé(e)</td></tr>
<tr><td>tu</td><td>tu <b>as</b> mangé</td><td>tu <b>es</b> allé(e)</td></tr>
<tr><td>il / elle / on</td><td>il <b>a</b> mangé</td><td>il <b>est</b> allé / elle <b>est</b> allée</td></tr>
<tr><td>nous</td><td>nous <b>avons</b> mangé</td><td>nous <b>sommes</b> allé(e)s</td></tr>
<tr><td>vous</td><td>vous <b>avez</b> mangé</td><td>vous <b>êtes</b> allé(e)(s)</td></tr>
<tr><td>ils / elles</td><td>ils <b>ont</b> mangé</td><td>ils <b>sont</b> allés / elles <b>sont</b> allées</td></tr>
</table>
<p>Il passé composé corrisponde al nostro <b>passato prossimo</b> (<i>ho mangiato</i>), ma in francese serve anche per ciò che in italiano potremmo dire al <b>passato remoto</b> (<i>mangiai</i>): nel parlato il passato remoto francese (passé simple) non si usa più.</p>
<p>Si usa per <b>azioni concluse</b> in un momento preciso del passato: <i>Hier, j'ai visité le musée. L'année dernière, nous avons voyagé en Espagne.</i></p>
<p>Parole spia: <b>hier, avant-hier, ce matin, la semaine dernière, l'année dernière, il y a deux jours, lundi dernier, déjà, enfin</b>.</p>`
    },
    {
      type: "text",
      title: "2. Il participio passato",
      html: `<p><b>Verbi regolari</b>:</p>
<table>
<tr><th>Infinito</th><th>Participio</th><th>Esempio</th></tr>
<tr><td>-<b>er</b> → <b>é</b></td><td>parler → parl<b>é</b></td><td>J'ai parlé italien.</td></tr>
<tr><td>-<b>ir</b> → <b>i</b></td><td>finir → fin<b>i</b></td><td>Il a fini ses devoirs.</td></tr>
<tr><td>-<b>re</b> → <b>u</b></td><td>vendre → vend<b>u</b></td><td>Nous avons vendu la maison.</td></tr>
</table>
<p><b>Participi irregolari</b> da imparare (i più frequenti):</p>
<table>
<tr><td>avoir → <b>eu</b> [y]</td><td>être → <b>été</b></td><td>faire → <b>fait</b></td><td>prendre → <b>pris</b></td></tr>
<tr><td>voir → <b>vu</b></td><td>boire → <b>bu</b></td><td>lire → <b>lu</b></td><td>écrire → <b>écrit</b></td></tr>
<tr><td>dire → <b>dit</b></td><td>mettre → <b>mis</b></td><td>vouloir → <b>voulu</b></td><td>pouvoir → <b>pu</b></td></tr>
<tr><td>savoir → <b>su</b></td><td>devoir → <b>dû</b></td><td>venir → <b>venu</b></td><td>ouvrir → <b>ouvert</b></td></tr>
<tr><td>comprendre → <b>compris</b></td><td>apprendre → <b>appris</b></td><td>naître → <b>né</b></td><td>mourir → <b>mort</b></td></tr>
</table>
<p>⚠️ Il participio <b>-é</b> si pronuncia [e] come l'infinito: <i>parler</i> e <i>parlé</i> suonano uguali! Per scegliere si può sostituire con <i>vendre/vendu</i>: se puoi dire \"vendre\" è un infinito, se puoi dire \"vendu\" è un participio.</p>`
    },
    {
      type: "svg",
      title: "Avoir o être? Il percorso di scelta",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="215" y="15" width="170" height="45" rx="12" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
<text x="300" y="43" font-size="15" text-anchor="middle" fill="#1e293b" font-weight="bold">Quale ausiliare?</text>
<line x1="260" y1="60" x2="160" y2="105" stroke="#64748b" stroke-width="2"/>
<line x1="340" y1="60" x2="440" y2="105" stroke="#64748b" stroke-width="2"/>
<rect x="50" y="105" width="220" height="45" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<text x="160" y="125" font-size="15" text-anchor="middle" fill="#1e3a8a" font-weight="bold">AVOIR (la maggioranza)</text>
<text x="160" y="143" font-size="14" text-anchor="middle" fill="#1e3a8a">j'ai mangé, il a fini</text>
<rect x="330" y="105" width="220" height="45" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<text x="440" y="125" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">ÊTRE (16 verbi + riflessivi)</text>
<text x="440" y="143" font-size="14" text-anchor="middle" fill="#14532d">je suis allé, elle s'est levée</text>
<text x="160" y="185" font-size="14" text-anchor="middle" fill="#1e3a8a">il participio NON cambia</text>
<text x="160" y="205" font-size="14" text-anchor="middle" fill="#1e3a8a">(di solito)</text>
<text x="440" y="185" font-size="14" text-anchor="middle" fill="#14532d">il participio CONCORDA</text>
<text x="440" y="205" font-size="14" text-anchor="middle" fill="#14532d">con il soggetto</text>
<rect x="50" y="225" width="500" height="60" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="300" y="250" font-size="14" text-anchor="middle" fill="#78350f" font-weight="bold">Verbi con être: aller, venir, arriver, partir, entrer, sortir, monter,</text>
<text x="300" y="270" font-size="14" text-anchor="middle" fill="#78350f" font-weight="bold">descendre, rester, tomber, naître, mourir, retourner, devenir, rentrer...</text>
</svg>`,
      caption: "La maggioranza dei verbi usa avoir; solo circa 16 verbi di movimento/cambiamento e tutti i riflessivi usano être."
    },
    {
      type: "remember",
      title: "Verbi con être: la lista da ricordare",
      html: `<p>Sono verbi di <b>movimento</b> o di <b>cambiamento di stato</b>. Una formula mnemonica è <b>\"DR & MRS VANDERTRAMP\"</b> (iniziali: Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir). Aggiungi <i>passer</i> (in alcuni casi), e <b>tutti i verbi riflessivi</b>.</p>
<p>Esempi: <i>Je suis arrivé à midi. Elle est partie hier. Nous sommes restés à la maison. Ils sont tombés.</i></p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: ausiliare e participio",
      questions: [
        { type: "mc", q: "Hier, j'___ (manger) une pizza.", options: ["ai mangé", "suis mangé", "ai mangée"], answer: 0, explain: "Manger → avoir + mangé." },
        { type: "mc", q: "Elle ___ à Paris l'année dernière. (aller)", options: ["a allé", "est allée", "est allé"], answer: 1, explain: "Aller + être; il participio concorda con elle: allée." },
        { type: "tf", q: "Il participio passato di \"prendre\" è \"prendu\".", answer: false, explain: "È irregolare: pris." },
        { type: "text", q: "Scrivi il participio passato di \"faire\".", answer: ["fait"], explain: "Faire → fait." }
      ]
    },
    {
      type: "text",
      title: "3. L'accordo del participio con être",
      html: `<p>Con <b>être</b> il participio concorda in <b>genere e numero</b> con il <b>soggetto</b>, come un aggettivo:</p>
<table>
<tr><th></th><th>Maschile</th><th>Femminile</th></tr>
<tr><td>Singolare</td><td>Il est allé</td><td>Elle est allé<b>e</b></td></tr>
<tr><td>Plurale</td><td>Ils sont allé<b>s</b></td><td>Elles sont allé<b>es</b></td></tr>
</table>
<ul>
<li>Se il gruppo è <b>misto</b> (maschi e femmine) → maschile plurale: <i>Paul et Marie sont arrivés.</i></li>
<li><b>Je / tu</b> si accorda col sesso della persona: <i>Je suis allé</i> (maschio), <i>Je suis allée</i> (femmina).</li>
<li><b>Nous</b> e <b>vous</b> di cortesia: <i>Nous sommes partis</i> (gruppo maschile o misto); <i>Madame, vous êtes arrivée</i> (singolare).</li>
<li>Nel <b>parlato</b> l'accordo non si sente (<i>allé / allée</i> si dicono uguali): conta solo nello scritto. Fanno eccezione i participi che finiscono per consonante muta al maschile: <i>il est mort</i> [mɔʁ] / <i>elle est morte</i> [mɔʁt]; <i>il a pris</i> / <i>la phrase écrite</i> (écrit [ekʁi] / écrite [ekʁit]).</li>
</ul>
<p><b>Con avoir</b> il participio <b>non si accorda</b> con il soggetto: <i>Elles ont mangé</i> (non <s>mangées</s>). C'è però una regola in più per il pronome oggetto <b>davanti al verbo</b> (<i>la pomme que j'ai mangée</i>) che vedrai più avanti.</p>
<p><b>Verbi riflessivi</b>: sempre con <b>être</b>, e il participio concorda di solito con il soggetto:</p>
<table>
<tr><td>Je <b>me suis</b> levé(e)</td><td>Nous <b>nous sommes</b> levé(e)s</td></tr>
<tr><td>Tu <b>t'es</b> levé(e)</td><td>Vous <b>vous êtes</b> levé(e)(s)</td></tr>
<tr><td>Il <b>s'est</b> levé / Elle <b>s'est</b> levée</td><td>Ils <b>se sont</b> levés / Elles <b>se sont</b> levées</td></tr>
</table>`
    },
    {
      type: "text",
      title: "4. Negazione e domande al passé composé",
      html: `<p><b>Negazione</b>: <i>ne</i> e <i>pas</i> circondano l'<b>ausiliare</b>, non il participio.</p>
<table>
<tr><th>Affermativa</th><th>Negativa</th></tr>
<tr><td>J'ai mangé.</td><td>Je <b>n'</b>ai <b>pas</b> mangé.</td></tr>
<tr><td>Elle est venue.</td><td>Elle <b>n'</b>est <b>pas</b> venue.</td></tr>
<tr><td>Nous avons vu quelqu'un.</td><td>Nous <b>n'</b>avons vu <b>personne</b>. (personne dopo il participio)</td></tr>
<tr><td>Il a tout compris.</td><td>Il <b>n'</b>a <b>rien</b> compris.</td></tr>
<tr><td>Ils ont déjà mangé.</td><td>Ils <b>n'</b>ont <b>pas encore</b> mangé.</td></tr>
</table>
<p><b>Domande</b>:</p>
<ul>
<li>Intonazione: <i>Tu as mangé ?</i></li>
<li>Est-ce que: <i>Est-ce que tu as mangé ?</i></li>
<li>Inversione dell'ausiliare: <i>As-tu mangé ? Est-elle partie ? Avez-vous compris ?</i></li>
<li>Con parola interrogativa: <i>Où as-tu mangé ? Quand est-ce que vous êtes arrivés ? Pourquoi a-t-elle pleuré ?</i></li>
</ul>
<p><b>Avverbi brevi</b> (déjà, encore, bien, mal, trop, beaucoup, souvent, toujours) si mettono di solito <b>tra ausiliare e participio</b>: <i>J'ai déjà mangé. Il a beaucoup travaillé. Nous avons bien dormi.</i></p>`
    },
    {
      type: "example",
      title: "Esempio pratico: raccontare il weekend a un'amica",
      html: `<p>💬 <b>Camille</b> : Alors, tu as passé un bon week-end ?</p>
<p>💬 <b>Giulia</b> : Oui, très bon ! Samedi matin, je <b>me suis levée</b> tard, j'<b>ai pris</b> mon petit-déjeuner, puis je <b>suis allée</b> au marché avec ma mère. L'après-midi, nous <b>avons visité</b> le musée. Le soir, j'<b>ai vu</b> un film avec mes cousins. On <b>a beaucoup ri</b> !</p>
<p>💬 <b>Camille</b> : Et dimanche ? Tu <b>as travaillé</b> ?</p>
<p>💬 <b>Giulia</b> : Non, je <b>n'ai pas fait</b> mes devoirs ! Je <b>suis restée</b> à la maison, j'<b>ai lu</b> un livre et j'<b>ai écouté</b> de la musique.</p>
<p>Verbi con avoir: <i>prendre, visiter, voir, rire, travailler, faire, lire, écouter</i>; con être: <i>se lever, aller, rester</i> (participio femminile perché parla Giulia).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: una cartolina dalle vacanze",
      html: `<p>✉️ <i>Chère Maman, nous <b>sommes arrivés</b> à Nice hier soir. Le voyage <b>a duré</b> six heures, mais Papa <b>n'a pas été</b> fatigué ! Ce matin, nous <b>avons nagé</b> dans la mer, puis nous <b>avons déjeuné</b> sur la plage. Léa <b>a perdu</b> ses lunettes, mais un monsieur les <b>a trouvées</b> et nous les <b>a rendues</b>. L'après-midi, Tom et moi <b>sommes allés</b> au port. Nous <b>avons acheté</b> des glaces. À bientôt ! Bises, Sophie</i></p>
<p>Notare l'accordo: <i>Léa a perdu</i> (con avoir, nessun accordo); <i>nous sommes arrivés</i> (être, soggetto plurale maschile/misto); <i>les lunettes … les a trouvées</i> (pronome oggetto davanti: accordo con avoir, come vedrai in seguito).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… esiste anche il passé simple?",
      html: `<p>In francese esiste un tempo passato chiamato <b>passé simple</b> (<i>il mangea, ils allèrent</i>), usato solo nei <b>romanzi e nei testi storici</b>: nel parlato è completamente scomparso. Quando leggi <i>Le Petit Prince</i> o <i>Les Misérables</i> lo incontri di continuo. Per ora basta il <b>passé composé</b>: nella lingua di tutti i giorni (e nei temi del biennio) è l'unico passato \"narrativo\" che serve.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… avoir significa \"possedere\"?",
      html: `<p>Il passé composé nasce da un'idea molto concreta: <i>j'ai mangé</i> era in origine \"io <b>ho</b> (possiedo) il pasto <b>mangiato</b>\". Il verbo <i>avoir</i> da verbo di possesso è diventato un semplice ausiliare. Per questo il participio, con <i>avoir</i>, si accorda con il complemento oggetto <b>se questo sta prima</b>: <i>la pomme que j'ai mangée</i> (\"ho la mela mangiata\"). Una traccia di questo antico significato è rimasta anche in italiano: <i>ho una lettera scritta</i> / <i>ho scritto una lettera</i>.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per padroneggiare il passé composé",
      intro: "Prova uno di questi metodi se i participi e gli ausiliari ti confondono.",
      tabs: [
        {
          label: "🇮🇹 Confronto con l'italiano",
          html: `<p>La buona notizia: la scelta dell'ausiliare in francese segue quasi sempre quella dell'italiano.</p>
<table>
<tr><th>Italiano</th><th>Francese</th></tr>
<tr><td><b>Ho</b> mangiato</td><td>J'<b>ai</b> mangé</td></tr>
<tr><td><b>Sono</b> andato / andata</td><td>Je <b>suis</b> allé / allée</td></tr>
<tr><td><b>Mi sono</b> alzato</td><td>Je <b>me suis</b> levé</td></tr>
<tr><td><b>Ho</b> dormito</td><td>J'<b>ai</b> dormi</td></tr>
</table>
<p>Se non sei sicuro, pensati in italiano: se dici \"sono\", probabilmente in francese è <i>être</i>. Ma controlla: in francese i verbi di tempo atmosferico usano avoir (<i>il a plu, il a neigé</i>), mentre l'italiano ammette anche essere (<i>è piovuto</i>).</p>`
        },
        {
          label: "🏠 La casa di Mme Vandertramp",
          html: `<p>Immagina una casa con 16 stanze e ognuna è un verbo con <b>être</b>: la parola <b>DR & MRS VANDERTRAMP</b> riunisce le iniziali. Ogni lettera ricorda un verbo: <b>D</b>evenir, <b>R</b>evenir, <b>M</b>onter, <b>R</b>ester, <b>S</b>ortir, <b>V</b>enir, <b>A</b>ller, <b>N</b>aître, <b>D</b>escendre, <b>E</b>ntrer, <b>R</b>entrer, <b>T</b>omber, <b>R</b>etourner, <b>A</b>rriver, <b>M</b>ourir, <b>P</b>artir. Recitala ad alta voce ogni giorno, in cinque giorni la sai.</p>`
        },
        {
          label: "🧩 Gioco: avoir o être?",
          html: `<p>Classifica questi verbi in base all'ausiliare del passé composé:</p>`,
          widget: "classify",
          options: {
            groups: ["Avoir", "Être"],
            items: [["manger", 0], ["finir", 0], ["voir", 0], ["faire", 0], ["prendre", 0], ["aller", 1], ["venir", 1], ["arriver", 1], ["partir", 1], ["rester", 1], ["tomber", 1], ["se lever", 1]]
          }
        },
        {
          label: "🎴 Carte: participi irregolari",
          html: `<p>Prova a ricordare il participio:</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "avoir", back: "eu" },
              { front: "être", back: "été" },
              { front: "faire", back: "fait" },
              { front: "prendre", back: "pris" },
              { front: "voir", back: "vu" },
              { front: "boire", back: "bu" },
              { front: "lire", back: "lu" },
              { front: "écrire", back: "écrit" },
              { front: "mettre", back: "mis" },
              { front: "venir", back: "venu" }
            ]
          }
        }
      ]
    },
    {
      type: "widget",
      title: "Abbina il passato alla traduzione",
      widget: "match",
      options: {
        pairs: [
          ["J'ai fini mes devoirs.", "Ho finito i compiti."],
          ["Elle est partie hier.", "È partita ieri."],
          ["Nous avons vu un film.", "Abbiamo visto un film."],
          ["Ils sont arrivés tard.", "Sono arrivati tardi."],
          ["Tu as pris le bus ?", "Hai preso l'autobus?"],
          ["Je ne suis pas sorti.", "Non sono uscito."]
        ]
      },
      caption: "Nota come ausiliare e participio si dividano: Je n'ai pas mangé."
    },
    {
      type: "conceptMap",
      title: "Mappa del passé composé: tocca i nodi per scoprire il perché",
      nodes: [
        { id: "pc", label: "Passé composé", x: 50, y: 6, color: "#2563eb", html: "ausiliare + participio passato.", why: "Nasce dal latino volgare: <i>habeo factum</i> (\"ho fatto\" = ho una cosa fatta). Il verbo <i>habere</i> da verbo di possesso è diventato ausiliare. Lo stesso è accaduto in italiano (ho fatto) e in inglese (have done)." },
        { id: "aux", label: "Avoir / être", x: 18, y: 38, color: "#16a34a", html: "avoir (la maggioranza), être (movimento + riflessivi).", why: "Con i verbi di movimento il latino volgare usava <i>esse</i> perché lo stato \"sono arrivato\" descrive una condizione, non un'azione su un oggetto. Il francese e l'italiano hanno conservato questa distinzione." },
        { id: "part", label: "Participio", x: 50, y: 38, color: "#d97706", html: "-é / -i / -u, più irregolari.", why: "Dal latino: <i>-atum</i> → é, <i>-itum</i> → i, <i>-utum</i> → u. I participi irregolari (fait, pris, vu, mis) derivano da forme latine forti (<i>factum, prehensum, visum, missum</i>)." },
        { id: "acc", label: "Accordo", x: 82, y: 38, color: "#a855f7", html: "con être: concorda col soggetto.", why: "Con <i>être</i> il participio è un vero aggettivo e concorda col soggetto, come \"é stata\" in italiano. Con <i>avoir</i> concorda solo con il complemento oggetto messo davanti al verbo (<i>la pomme que j'ai mangée</i>)." },
        { id: "neg", label: "Negazione", x: 28, y: 72, color: "#dc2626", html: "ne + ausiliare + pas + participio.", why: "La negazione circonda il verbo coniugato (qui l'ausiliare) perché è l'ausiliare a portare le marche di persona e tempo; il participio resta \"intero\" alla fine." },
        { id: "time", label: "Parole spia", x: 72, y: 72, color: "#14b8a6", html: "hier, la semaine dernière, il y a… ", why: "I complementi di tempo precisi (ieri, la scorsa settimana) segnalano un'azione conclusa. Il francese le usa col passé composé; per le descrizioni e le abitudini c'è l'imparfait, che vedrai in seguito." }
      ],
      edges: [
        ["pc", "aux", "formato da"],
        ["pc", "part", "formato da"],
        ["aux", "acc", "être: accorda"],
        ["part", "acc", "-é, -es…"],
        ["pc", "neg", "ne … pas"],
        ["pc", "time", "usato con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: negazione, accordo e riflessivi",
      questions: [
        { type: "mc", q: "Marie ___ (partir) hier.", options: ["est parti", "est partie", "a parti"], answer: 1, explain: "Partir con être, soggetto femminile: partie." },
        { type: "mc", q: "Nous ___ pas ___ (manger).", options: ["n'avons / mangé", "ne sommes / mangé", "n'avons / mangeons"], answer: 0, explain: "Ne + avoir + pas + participio: nous n'avons pas mangé." },
        { type: "tf", q: "Con il verbo riflessivo si usa l'ausiliare avoir.", answer: false, explain: "I riflessivi usano sempre être: je me suis levé." },
        { type: "text", q: "Scrivi il participio di \"voir\".", answer: ["vu"], explain: "Voir → vu." }
      ]
    }
  ],
  glossary: [
    { t: "Passé composé", d: "Tempo del passato formato da avoir/être + participio passato." },
    { t: "Auxiliaire", d: "Verbo ausiliare: avoir o être." },
    { t: "Participe passé", d: "Forma verbale del passato: -é, -i, -u o irregolare." },
    { t: "Accord du participe", d: "Concordanza del participio con il soggetto (con être)." },
    { t: "Verbe pronominal", d: "Verbo riflessivo: se lever, se coucher; usa être nel passé composé." },
    { t: "Hier / avant-hier", d: "Ieri / l'altro ieri: parole spia del passé composé." },
    { t: "Déjà / pas encore", d: "Già / non ancora: avverbi che stanno tra ausiliare e participio." },
    { t: "Passé simple", d: "Tempo letterario, usato solo nei libri; non si usa nel parlato." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Hier, nous ___ au cinéma. (aller)", options: ["avons allé", "sommes allés", "sommes allé"], answer: 1, explain: "Aller con être; soggetto plurale: allés." },
      { type: "mc", q: "Il ___ ses devoirs. (finir)", options: ["a fini", "est fini", "a finis"], answer: 0, explain: "Finir con avoir e participio in -i." },
      { type: "tf", q: "Il participio passato di \"prendre\" è \"pris\".", answer: true, explain: "Prendre → pris." },
      { type: "text", q: "Scrivi la forma negativa: \"J'ai mangé\" → Je n'___ pas mangé. (verbo avoir)", answer: ["ai"], explain: "Je n'ai pas mangé." },
      { type: "mc", q: "Elles ___ levées à six heures.", options: ["se sont", "ont", "sont"], answer: 0, explain: "Riflessivo: se sont levées." },
      { type: "order", q: "Metti in ordine: Elle / est / arrivée / hier", items: ["Elle", "est", "arrivée", "hier"], explain: "Soggetto + ausiliare + participio + complemento di tempo." },
      { type: "mc", q: "Quale forma è corretta per \"Hai capito?\" con inversione?", options: ["As-tu compris ?", "Tu a compris ?", "Comprends-tu a ?"], answer: 0, explain: "Inversione dell'ausiliare: As-tu compris ?" },
      { type: "tf", q: "Con avoir il participio concorda sempre con il soggetto.", answer: false, explain: "Con avoir di solito non si accorda: elles ont mangé." },
      { type: "mc", q: "Il participio di \"boire\" è…", options: ["bu", "boit", "bois"], answer: 0, explain: "Boire → bu." },
      { type: "text", q: "Come si dice \"ieri\" in francese?", answer: ["hier"], explain: "Hier = ieri; avant-hier = l'altro ieri." }
    ]
  }
});
