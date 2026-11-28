TOPIC('it', {
  id: `l3-lat-gerundio-gerundivo`,
  title: `Gerundio, gerundivo e perifrastiche`,
  intro: `Nella lezione sul participio hai incontrato il participio futuro e hai intravisto il gerundivo (<i>Carthago delenda est</i>). Ora li studiamo a fondo. Il latino non ha un gerundio come il nostro "amando" per tutti i casi, e per dire "da fare" o "doveroso" usa una forma verbale speciale, il <b>gerundivo</b>. Due strutture sembrano gemelle ma non lo sono: il <b>gerundio</b> è un <i>sostantivo verbale</i> (si declina come un neutro), il <b>gerundivo</b> è un <i>aggettivo verbale</i> (concorda con un nome). Capire la differenza ti permette di tradurre in un colpo solo frasi che sembrano ostiche e di riconoscere le due <b>perifrastiche</b> (attiva e passiva), che esprimono intenzione e obbligo. 🏺`,
  minutes: 55,
  sections: [
    {
      type: `text`, title: `1. Il gerundio: un infinito che si declina`,
      html: `<p>L'infinito latino ha solo il nominativo (e l'accusativo): per i casi obliqui il latino usa il <b>gerundio</b>, che completa l'infinito come "sostituto" nei casi mancanti. Si forma con il <b>tema del presente + -ndi, -ndo, -ndum, -ndo</b>:</p>
<table>
<tr><th>Caso</th><th>1ª (amo)</th><th>2ª (moneo)</th><th>3ª (rego)</th><th>3ª -io (capio)</th><th>4ª (audio)</th></tr>
<tr><td>Nominativo</td><td colspan="5">manca: si usa l'infinito (<i>amare</i>)</td></tr>
<tr><td>Genitivo</td><td>amandi</td><td>monendi</td><td>regendi</td><td>capiendi</td><td>audiendi</td></tr>
<tr><td>Dativo</td><td>amando</td><td>monendo</td><td>regendo</td><td>capiendo</td><td>audiendo</td></tr>
<tr><td>Accusativo</td><td>amandum</td><td>monendum</td><td>regendum</td><td>capiendum</td><td>audiendum</td></tr>
<tr><td>Ablativo</td><td>amando</td><td>monendo</td><td>regendo</td><td>capiendo</td><td>audiendo</td></tr>
</table>
<p>Si declina come un <b>neutro singolare della seconda declinazione</b> (<i>bellum</i>) e il caso <b>accusativo</b> si trova <b>solo con preposizioni</b> (<i>ad, inter, ob, in</i>, ...). Valori e traduzioni:</p>
<ul>
<li><b>genitivo</b>: <i>ars bene vivendi</i> "l'arte del vivere bene"; <i>cupidus videndi</i> "desideroso di vedere";</li>
<li><b>dativo</b>: raro: <i>aptus natando</i> "adatto al nuoto";</li>
<li><b>accusativo</b>: <i>ad pugnandum</i> "per combattere" (finale);</li>
<li><b>ablativo</b>: <i>docendo discimus</i> "insegnando impariamo" (strumentale/modale).</li>
</ul>
<p>Il proverbio <b>"Gutta cavat lapidem, non vi, sed saepe cadendo"</b> (di Ovidio, <i>Epistulae ex Ponto</i> IV, 10, 5, è solo <i>gutta cavat lapidem</i>; il resto è un'aggiunta medievale) contiene un gerundio ablativo: "la goccia scava la pietra non con la forza, ma cadendo spesso".</p>`
    },
    {
      type: `text`, title: `2. Il gerundivo: un aggettivo che "deve essere fatto"`,
      html: `<p>Il <b>gerundivo</b> ha la stessa forma del gerundio, ma si declina come un aggettivo di prima classe: <b>-ndus, -nda, -ndum</b> (<i>amandus, -a, -um</i>). È un aggettivo verbale <b>passivo</b>, con due valori:</p>
<ul>
<li><b>necessità / obbligo</b> ("che deve essere…, da…"): <i>liber legendus</i> "libro da leggere";</li>
<li><b>valore finale o di collegamento al gerundio</b> quando sostituisce il gerundio transitivo.</li>
</ul>
<p>Il gerundivo ha anche la forma sostantivata <b>neutra</b>: <i>agendum</i> "ciò che si deve fare" (in italiano: "agenda", "referendum" "ciò che deve essere riferito", "addenda").</p>`
    },
    {
      type: `remember`, title: `Il gerundio si "converte" in gerundivo`,
      html: `<p><b>Regola d'oro</b>: se il verbo è <b>transitivo</b> e ha un complemento oggetto, di solito il latino <b>non usa il gerundio con l'oggetto all'accusativo</b>, ma <b>trasforma</b> l'oggetto nel nome a cui si accorda un gerundivo.</p>
<ul>
<li><i>ad capiendum urbem</i> ✗ ➜ <b><i>ad urbem capiendam</i></b> ✓ "per prendere la città";</li>
<li><i>causa pacem petendi</i> ✗ ➜ <b><i>causa pacis petendae</i></b> ✓ "per chiedere la pace";</li>
<li><i>consilium hostes superandi</i> ✗ ➜ <b><i>consilium hostium superandorum</i></b> ✓ "il piano di vincere i nemici".</li>
</ul>
<p>Il gerundio <b>tiene</b> il suo oggetto quando l'oggetto è un <b>pronome neutro o un aggettivo neutro</b> (<i>ars multa sciendi</i>, <i>studium aliquid agendi</i>), oppure quando il verbo è intransitivo (<i>ad pugnandum</i>). Il significato è identico: cambia solo la struttura.</p>`
    },
    {
      type: `svg`, title: `Dal gerundio al gerundivo`,
      caption: `Il nome oggetto "entra" nel caso della costruzione e il verbo si trasforma in aggettivo concordato.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfdf5"/>
<text x="300" y="30" font-size="20" font-weight="bold" fill="#065f46" text-anchor="middle">GERUNDIO ➜ GERUNDIVO</text>
<rect x="30" y="55" width="250" height="90" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<text x="155" y="82" font-size="15" font-weight="bold" fill="#991b1b" text-anchor="middle">Con gerundio (evitato)</text>
<text x="155" y="108" font-size="17" fill="#1e293b" text-anchor="middle">ad capi<tspan font-weight="bold" fill="#dc2626">endum</tspan> urbem</text>
<text x="155" y="130" font-size="14" fill="#334155" text-anchor="middle">verbo + oggetto accusativo</text>
<rect x="320" y="55" width="250" height="90" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="3"/>
<text x="445" y="82" font-size="15" font-weight="bold" fill="#166534" text-anchor="middle">Con gerundivo (usato)</text>
<text x="445" y="108" font-size="17" fill="#1e293b" text-anchor="middle">ad urbem <tspan font-weight="bold" fill="#16a34a">capiendam</tspan></text>
<text x="445" y="130" font-size="14" fill="#334155" text-anchor="middle">nome + aggettivo concordati</text>
<line x1="285" y1="100" x2="315" y2="100" stroke="#475569" stroke-width="4"/>
<polygon points="315,100 303,92 303,108" fill="#475569"/>
<text x="300" y="195" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">ad urbem capiendam</text>
<text x="300" y="220" font-size="15" fill="#334155" text-anchor="middle">urbem (acc. fem.) + capiendam (gerundivo, acc. fem.)</text>
<text x="300" y="252" font-size="15" fill="#065f46" text-anchor="middle">Il nome resta nello stesso caso, il gerundivo concorda</text>
<text x="300" y="276" font-size="14" fill="#334155" text-anchor="middle">Traduzione: "per prendere la città"</text>
</svg>`
    },
    {
      type: `example`, title: `Gerundio e gerundivo in frase`,
      html: `<ol>
<li><i>Legendi studium est utile.</i> "Il desiderio di leggere è utile." (gerundio genitivo, intransitivo senza oggetto espresso)</li>
<li><i>Caesar legatos ad pacem petendam misit.</i> "Cesare mandò ambasciatori a chiedere la pace." (gerundivo: pacem petendam; acc. con <i>ad</i>, finale)</li>
<li><i>Cives hortandi sunt ad pacem servandam.</i> "I cittadini devono essere esortati a mantenere la pace."</li>
<li><i>Hostes nuntios pacis petendae causa miserunt.</i> "I nemici inviarono messaggeri per chiedere la pace." (causa + genitivo = finale)</li>
<li><i>Ars bene vivendi difficilis est.</i> "L'arte del vivere bene è difficile."</li>
<li><i>Oratores dicendo oratores fiunt.</i> "Parlando si diventa oratori." (gerundio ablativo)</li>
</ol>`
    },
    {
      type: `quiz`, title: `Mini-quiz: gerundio e gerundivo`,
      questions: [
        { type: `text`, q: `Scrivi il genitivo del gerundio di "audio".`, answer: [`audiendi`], explain: `4ª coniugazione: tema aud- + -iendi.` },
        { type: `mc`, q: `Quale frase è corretta?`, options: [`ad urbem capiendam`, `ad capiendum urbem`, `ad urbs capienda`], answer: 0, explain: `Con oggetto si usa il gerundivo concordato.` },
        { type: `tf`, q: `Il gerundio ha il caso nominativo.`, answer: false, explain: `Per il nominativo si usa l'infinito.` },
        { type: `mc`, q: `Come si traduce "docendo discimus"?`, options: [`insegnando impariamo`, `dobbiamo insegnare`, `impariamo a insegnare`], answer: 0, explain: `Gerundio ablativo con valore strumentale.` }
      ]
    },
    {
      type: `text`, title: `3. La perifrastica passiva: l'obbligo`,
      html: `<p>La <b>perifrastica passiva</b> è formata dal <b>gerundivo + sum</b> e indica <b>obbligo o necessità</b> ("deve essere…"). L'agente (chi deve fare) va al <b>dativo d'agente</b>:</p>
<ul>
<li><i>Liber a me legendus est.</i> ➜ preferibile <i>Liber mihi legendus est.</i> "Devo leggere il libro" (letteralmente "il libro è da leggere da me").</li>
<li><i>Carthago delenda est.</i> "Cartagine deve essere distrutta." (Catone il Censore, ripetuto in senato fino al 149 a.C., prima della terza guerra punica; la formula tradizionale è <i>Ceterum censeo Carthaginem esse delendam</i> "Per il resto, ritengo che Cartagine debba essere distrutta").</li>
<li><i>Nunc est bibendum, nunc pede libero pulsanda tellus.</i> "Ora si deve bere, ora si deve battere la terra con piede libero." (Orazio, <i>Odi</i> I, 37, dopo la vittoria su Cleopatra)</li>
</ul>
<table>
<tr><th>Struttura</th><th>Esempio</th><th>Traduzione</th></tr>
<tr><td>personale (verbo transitivo)</td><td><i>Epistula scribenda est</i></td><td>la lettera deve essere scritta / bisogna scrivere la lettera</td></tr>
<tr><td>con agente</td><td><i>Epistula mihi scribenda est</i></td><td>devo scrivere la lettera</td></tr>
<tr><td>impersonale (verbo intransitivo)</td><td><i>Pugnandum est</i></td><td>si deve combattere</td></tr>
<tr><td>impersonale con agente</td><td><i>Nobis pugnandum est</i></td><td>dobbiamo combattere</td></tr>
</table>
<p>Con i verbi <b>intransitivi</b> (come <i>pugno, venio, pareo</i>) la perifrastica è <b>impersonale</b>: gerundivo neutro singolare + <i>est</i>. Con i verbi che reggono il dativo l'agente è sentito come ambiguo; in quel caso si usa <i>a</i> + ablativo: <i>Civibus a te consulendum est</i> "Devi provvedere ai cittadini".</p>`
    },
    {
      type: `text`, title: `4. La perifrastica attiva: l'intenzione`,
      html: `<p>La <b>perifrastica attiva</b> si forma con il <b>participio futuro + sum</b> (<i>amaturus sum</i>) ed esprime <b>intenzione, imminenza, destino</b>: "sto per, ho intenzione di".</p>
<ul>
<li><i>Hannibal Romam oppugnaturus erat.</i> "Annibale stava per assalire Roma."</li>
<li><i>Caesar in Britanniam transiturus est.</i> "Cesare ha intenzione di passare in Britannia."</li>
<li><i>Moriturus sum.</i> "Sto per morire."</li>
</ul>
<p>I tempi si formano coniugando <i>sum</i>: presente (<i>sum</i>), imperfetto (<i>eram</i>), futuro (<i>ero</i>), perfetto (<i>fui</i>). A differenza di quella passiva, la perifrastica attiva esprime <b>solo la volontà o l'imminenza</b>, mai l'obbligo morale. Per tradurla in italiano usa "stare per", "essere sul punto di", "avere intenzione di".</p>
<p>Il participio futuro con <i>sum</i> compare anche nell'<b>infinito futuro</b> (<i>amaturum esse</i>), nell'<b>ablativo assoluto</b> (rarissimo) e come <b>finale</b> con verbi di movimento (<i>Legati venerunt pacem petituri</i>).</p>`
    },
    {
      type: `example`, title: `Perifrastiche in frase`,
      html: `<ol>
<li><i>Consuli de re publica cogitandum est.</i> "Il console deve pensare alla repubblica." (impersonale con dativo d'agente)</li>
<li><i>Naves ad Italiam navigaturae erant.</i> "Le navi stavano per salpare verso l'Italia." (attiva)</li>
<li><i>Omnia nobis sunt facienda.</i> "Dobbiamo fare tutto." (personale: <i>omnia</i> è soggetto)</li>
<li><i>Mihi loquendum est, vobis tacendum.</i> "Io devo parlare, voi dovete tacere." (due impersonali)</li>
</ol>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… "Carthago delenda est" non è esattamente di Catone?`,
      html: `<p>Plutarco (<i>Vita di Catone</i>) e Plinio il Vecchio raccontano che Catone concludeva ogni discorso in senato con la richiesta di distruggere Cartagine; Plutarco ricorda anche il gesto dei fichi freschi mostrati al senato per ricordare quanto fosse vicina la rivale. Ma la formula con <b>"Carthago delenda est"</b> (o, completa, <i>"Ceterum censeo Carthaginem esse delendam"</i>) è una <b>ricostruzione</b> tardiva: l'originale esatto non ci è arrivato. Nel 146 a.C., dopo la terza guerra punica, Scipione Emiliano distrusse la città. Un esempio di perifrastica passiva diventato <b>slogan politico</b>.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… in italiano restano molti gerundivi?`,
      html: `<p>Molte parole italiane colte vengono da gerundivi latini: <b>laureando</b> (<i>laureandus</i>, "da laureare"), <b>dottorando</b>, e soprattutto <b>agenda</b> (<i>agenda</i>, "cose da fare"), <b>memorandum</b> ("da ricordare"), <b>referendum</b> ("da riferire"), <b>addendum</b>, <b>corrigenda</b>, <b>legenda</b> ("cose da leggere"), <b>propaganda</b> (dal latino moderno <i>de propaganda fide</i>, "per la fede da propagare"). Dentro ogni parola c'è un obbligo: ciò che "deve essere fatto, letto, detto".</p>`
    },
    {
      type: `widget`, title: `Gioco: che forma è?`,
      widget: `classify`,
      options: {
        groups: [`Gerundio`, `Gerundivo`, `Perifrastica`],
        items: [
          [`ars bene vivendi`, 0], [`docendo discimus`, 0], [`cupidus videndi`, 0],
          [`ad urbem capiendam`, 1], [`pacis petendae causa`, 1], [`liber legendus`, 1],
          [`Carthago delenda est`, 2], [`Hannibal oppugnaturus erat`, 2], [`Nobis pugnandum est`, 2]
        ]
      },
      caption: `Classifica le espressioni: gerundio (sostantivo verbale), gerundivo (aggettivo), perifrastica (con sum).`
    },
    {
      type: `alternatives`, title: `Altri modi per capire`,
      intro: `Se la differenza ti sfugge, prova una di queste vie.`,
      tabs: [
        {
          label: `🔬 Il test del nome`,
          html: `<p>Hai trovato una forma in <i>-ndi/-ndo/-ndum</i>? Cerca un <b>nome concordato</b> (stesso genere, numero e caso). Se c'è (<i>ad urbem capiendam</i>) è gerundivo; se non c'è un nome concordato (<i>docendo</i>) e la forma è neutra singolare, è gerundio.</p>`
        },
        {
          label: `🇮🇹 Il parallelo con l'italiano`,
          html: `<p>Il gerundio latino corrisponde all'<b>infinito sostantivato italiano</b>: "il leggere", "il vivere" (<i>ars bene vivendi</i> = "l'arte del vivere bene"). Il gerundivo corrisponde a espressioni come "da leggere", "da fare", "da evitare": <i>liber legendus</i> = "un libro da leggere". Per le perifrastiche, tradotte "deve essere" o "si deve": la traduzione più naturale in italiano è spesso un <b>verbo dovere</b>.</p>`
        },
        {
          label: `🧩 Smontare la frase`,
          html: `<p>Prendi <i>Carthago delenda est</i>. 1) Soggetto: <i>Carthago</i> (nom. fem.). 2) <i>delenda</i> concorda (nom. fem.). 3) <i>est</i> è il verbo: gerundivo + sum = perifrastica passiva. 4) Traduci: "Cartagine è da distruggere / deve essere distrutta". Per una frase impersonale (<i>pugnandum est</i>) non c'è soggetto: usa "si deve".</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: forme in -ndus`,
      nodes: [
        { id: `ndo`, label: `Forme in -nd-`, x: 50, y: 8, color: `#a855f7`, html: `Gerundio e gerundivo condividono il suffisso -nd-.`, why: `Il suffisso -nd- è di origine antichissima: forma sia nomi astratti sia aggettivi che indicano ciò che "deve essere". Il latino lo ha esteso a tutti i verbi.` },
        { id: `ger`, label: `Gerundio`, x: 20, y: 42, color: `#f59e0b`, html: `Sostantivo verbale neutro, 4 casi (gen, dat, acc con prep., abl).`, why: `Completa l'infinito, che non ha casi obliqui: il latino non poteva dire "di amare" con l'infinito, quindi inventa amandi. Ecco perché esiste solo dove l'infinito non basta.` },
        { id: `gerv`, label: `Gerundivo`, x: 50, y: 42, color: `#16a34a`, html: `Aggettivo verbale passivo: -ndus, -a, -um.`, why: `Essendo un aggettivo, concorda con un nome: sostituisce il gerundio quando c'è un oggetto diretto per evitare un oggetto "dentro" un sostantivo verbale.` },
        { id: `attiva`, label: `Perifrastica attiva`, x: 22, y: 78, color: `#3b82f6`, html: `Participio futuro + sum: sto per, ho intenzione di.`, why: `Nasce dalla volontà di esprimere il futuro prossimo con un tempo composto: come l'italiano "sto per partire".` },
        { id: `passiva`, label: `Perifrastica passiva`, x: 80, y: 78, color: `#ef4444`, html: `Gerundivo + sum: obbligo; agente al dativo.`, why: `Il valore di obbligo deriva dal significato del suffisso -ndus: "che sta per essere fatto, che deve essere fatto". Il dativo d'agente indica chi ha l'interesse o il dovere.` }
      ],
      edges: [
        [`ndo`, `ger`, ``], [`ndo`, `gerv`, ``], [`gerv`, `passiva`, `+ sum`], [`gerv`, `ger`, `sostituisce`], [`attiva`, `passiva`, `contrario`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: perifrastiche`,
      questions: [
        { type: `mc`, q: `"Hannibal Romam oppugnaturus erat" significa…`, options: [`Annibale stava per attaccare Roma`, `Annibale doveva attaccare Roma`, `Annibale fu attaccato da Roma`], answer: 0, explain: `Perifrastica attiva: intenzione/imminenza.` },
        { type: `mc`, q: `"Nobis pugnandum est" significa…`, options: [`dobbiamo combattere`, `stiamo per combattere`, `combattiamo`], answer: 0, explain: `Perifrastica passiva impersonale con dativo d'agente.` },
        { type: `tf`, q: `In "Carthago delenda est" delenda è un participio perfetto.`, answer: false, explain: `È un gerundivo: -ndus.` },
        { type: `text`, q: `Come si dice in latino "da chiamare" (gerundivo di appello, nominativo maschile)?`, answer: [`appellandus`], explain: `Appello, appellare ➜ appellandus.` }
      ]
    }
  ],
  glossary: [
    { t: `Gerundio`, d: `Sostantivo verbale neutro singolare in -ndi, -ndo, -ndum, -ndo; sostituisce i casi mancanti dell'infinito.` },
    { t: `Gerundivo`, d: `Aggettivo verbale passivo in -ndus, -a, -um: valore di necessità.` },
    { t: `Perifrastica attiva`, d: `Participio futuro + sum: intenzione o imminenza.` },
    { t: `Perifrastica passiva`, d: `Gerundivo + sum: obbligo, necessità.` },
    { t: `Dativo d'agente`, d: `Dativo che indica chi deve compiere l'azione nella perifrastica passiva.` },
    { t: `Costrutto impersonale`, d: `Perifrastica passiva con verbo intransitivo: gerundivo neutro + est.` },
    { t: `Attrazione del gerundio`, d: `Trasformazione del gerundio con oggetto in gerundivo concordato col nome.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `text`, q: `Scrivi l'ablativo del gerundio di "rego".`, answer: [`regendo`], explain: `Rego ➜ regendo (3ª coniugazione, tema reg- + -endo).` },
      { type: `mc`, q: `Qual è la costruzione corretta per "per prendere la città"?`, options: [`ad urbem capiendam`, `ad capiendum urbem`, `ad capiendam urbs`], answer: 0, explain: `Gerundivo concordato con urbem.` },
      { type: `mc`, q: `Come si traduce "Epistula mihi scribenda est"?`, options: [`devo scrivere la lettera`, `la lettera mi scrive`, `sto per scrivere la lettera`], answer: 0, explain: `Perifrastica passiva con dativo d'agente.` },
      { type: `mc`, q: `Quale tra queste è una perifrastica attiva?`, options: [`moriturus sum`, `moriendum est`, `mortuus est`], answer: 0, explain: `Participio futuro + sum.` },
      { type: `tf`, q: `Il gerundio si declina come un neutro singolare.`, answer: true, explain: `Segue la seconda declinazione neutra, senza nominativo.` },
      { type: `mc`, q: `"Pacis petendae causa" ha valore…`, options: [`finale`, `temporale`, `concessivo`], answer: 0, explain: `Causa + genitivo di gerundivo = finale.` },
      { type: `mc`, q: `"Pugnandum est" è…`, options: [`perifrastica passiva impersonale`, `perifrastica attiva`, `ablativo assoluto`], answer: 0, explain: `Verbo intransitivo, gerundivo neutro + est.` },
      { type: `text`, q: `Chi disse (secondo Plutarco) "Carthago delenda est"? (un cognome)`, answer: [`catone`, `catone il censore`, `marco porcio catone`], explain: `Catone il Censore, prima della terza guerra punica.` },
      { type: `mc`, q: `"Gutta cavat lapidem, non vi sed saepe cadendo": cadendo è…`, options: [`gerundio ablativo`, `gerundivo`, `participio presente`], answer: 0, explain: `Gerundio ablativo con valore strumentale.` },
      { type: `order`, q: `Metti in ordine i passi per riconoscere una perifrastica passiva.`, items: [`Trovare una forma in -ndus, -nda, -ndum`, `Verificare la presenza di sum`, `Individuare il dativo d'agente`, `Tradurre con "deve essere / si deve"`], explain: `Forma, sum, agente, resa italiana.` }
    ]
  }
});
