TOPIC('it', {
  id: "l3-fil-nascita-presocratici",
  title: "La nascita della filosofia e i presocratici",
  intro: "Perché il tuono scoppia? Per i Greci arcaici la risposta era semplice: Zeus è in collera. Poi, intorno al VI secolo a.C., a <b>Mileto</b> qualcuno cominciò a rispondere in un altro modo: cercando <b>cause naturali</b>, spiegabili con la ragione e discutibili da tutti. Nasceva la <b>filosofia</b> («amore per la sapienza»). In questa lezione conosci i primi pensatori, i cosiddetti <b>presocratici</b>, e il problema che li ossessiona: <i>di che cosa è fatta la realtà e come mai tutto cambia?</i>",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Dal mito al logos",
      html: `<p>Prima della filosofia, i Greci spiegavano il mondo con il <b>mito</b>: racconti sugli dèi (in Omero ed Esiodo) che danno una ragione a fenomeni e usanze. Il mito non è «stupido»: è un racconto che orienta, ma si accetta per tradizione e non si discute.</p>
<p>Il passaggio al <b>logos</b> («discorso», «ragione») avviene nelle colonie greche dell'Asia Minore e dell'Italia meridionale. Perché proprio lì? Alcune condizioni favorevoli (che gli storici indicano come ipotesi plausibili):</p>
<ul>
<li><b>commerci e contatti</b> con Egitto e Oriente: conoscenze di astronomia e geometria a confronto;</li>
<li>una religione <b>senza libro sacro e senza casta sacerdotale</b> che imponesse dogmi;</li>
<li>la vita della <b>polis</b>: le leggi si discutono in pubblico, anche le idee si possono discutere;</li>
<li>una società di mercanti e artigiani con tempo libero e curiosità (scholé).</li>
</ul>
<p>I filosofi cercano l'<b>archè</b> (<i>arché</i>): il «principio», ciò da cui tutto proviene e in cui tutto ritorna, e che resta sotto il cambiamento. È una domanda sull'unità nella molteplicità. Di questi pensatori ci restano pochi <b>frammenti</b> e testimonianze di autori successivi (soprattutto Aristotele): per questo ogni ricostruzione ha qualche margine di incertezza.</p>`
    },
    {
      type: "decision",
      title: "Mileto, VI secolo a.C.: perché è scoppiato il temporale?",
      html: `<p>Sei un giovane mercante di Mileto. Dal porto vedi arrivare un temporale violento che affonda una barca. Tutti dicono: «Gli dèi sono irati». Ma un tuo amico, che ha viaggiato in Egitto e ha osservato le piene del Nilo, ti dice: «Forse c'è una causa naturale che possiamo studiare».</p>`,
      question: "Quale strada scegli per capire il fenomeno?",
      options: [
        { label: "Faccio un sacrificio e mi affido alla tradizione.", outcome: "Rassicura la comunità, ma non spiega nulla: la prossima volta il temporale sarà ugualmente imprevedibile." },
        { label: "Osservo i fenomeni, cerco regolarità e propongo una spiegazione che altri possano criticare.", outcome: "È la mossa dei primi filosofi: una spiegazione che si basa su cause del mondo stesso e che può essere discussa e corretta." },
        { label: "Rinuncio: il mondo è troppo misterioso.", outcome: "È comprensibile, ma blocca la ricerca. I Greci erano convinti che il mondo avesse un ordine (kosmos) conoscibile." }
      ],
      answer: 1,
      explain: "La novità dei primi filosofi non fu l'assenza di errori (molte loro spiegazioni oggi ci paiono ingenue), ma il metodo: spiegare la natura con la natura e affidare le tesi alla discussione razionale."
    },
    {
      type: "text",
      title: "2. I fisici ionici: Talete, Anassimandro, Anassimene",
      html: `<p>A <b>Mileto</b>, città ionica sulla costa dell'attuale Turchia, nasce la scuola detta <b>ionica</b> o milesia.</p>
<ul>
<li><b>Talete</b> (circa 624-546 a.C.): considerato il primo filosofo. Per lui il principio è l'<b>acqua</b> (lo riferisce Aristotele). Anche matematico e astronomo: secondo la tradizione previde l'eclissi del 585 a.C.</li>
<li><b>Anassimandro</b> (circa 610-546 a.C.): il principio è l'<b><i>àpeiron</i></b>, l'«illimitato», una realtà indeterminata e infinita da cui nascono per separazione gli opposti (caldo e freddo, secco e umido). È il primo a usare il termine «archè» in questo senso, secondo la tradizione.</li>
<li><b>Anassimene</b> (VI secolo a.C.): il principio è l'<b>aria</b>, che per rarefazione diventa fuoco e per condensazione vento, nuvole, acqua, terra, pietra. Spiega i cambiamenti con un processo naturale: la quantità diventa qualità.</li>
</ul>
<p>Perché scelgono principi così diversi? Perché ciascuno prova a rispondere a un problema: come da <i>una</i> sostanza possono nascere <i>molte</i> cose? Anassimandro nota che se il principio fosse uno degli elementi (per esempio l'acqua), dovrebbe annullare il suo opposto (il fuoco): serve dunque qualcosa di indeterminato, che non sia uno dei contrari.</p>`
    },
    {
      type: "3d",
      title: "Mappa 3D: dove nasce la filosofia",
      scene: "spacetime",
      caption: "Base: Mediterraneo orientale e Italia meridionale; altezza: il tempo (VI-V secolo a.C.). Tocca gli eventi per leggere cause ed effetti. Le date sono approssimative.",
      options: {
        lat: [34, 44],
        lon: [10, 32],
        years: [-650, -350],
        places: [
          { lat: 37.5, lon: 27.3, label: "Mileto" },
          { lat: 37.9, lon: 27.3, label: "Efeso" },
          { lat: 39.1, lon: 17.1, label: "Crotone" },
          { lat: 40.2, lon: 15.2, label: "Elea" },
          { lat: 40.9, lon: 25.0, label: "Abdera" },
          { lat: 38.0, lon: 23.7, label: "Atene" }
        ],
        events: [
          { id: "e1", lat: 37.5, lon: 27.3, year: -585, label: "Talete e l'acqua", html: "A Mileto Talete propone che tutto derivi dall'acqua: la prima spiegazione della natura attraverso un principio naturale." },
          { id: "e2", lat: 37.5, lon: 27.3, year: -550, label: "Anassimandro: l'àpeiron", html: "Il principio diventa l'illimitato, da cui si separano gli opposti.", causes: ["e1"] },
          { id: "e3", lat: 39.1, lon: 17.1, year: -530, label: "Pitagora a Crotone", html: "Pitagora, originario di Samo, fonda a Crotone una comunità filosofica e religiosa: il principio è il numero.", causes: ["e1"] },
          { id: "e4", lat: 37.9, lon: 27.3, year: -500, label: "Eraclito a Efeso", html: "Per Eraclito tutto scorre e il fuoco è simbolo del divenire.", causes: ["e2"] },
          { id: "e5", lat: 40.2, lon: 15.2, year: -480, label: "Parmenide a Elea", html: "Parmenide afferma che l'essere è immobile e il divenire è apparenza.", causes: ["e3", "e4"] },
          { id: "e6", lat: 40.9, lon: 25.0, year: -430, label: "Democrito e gli atomi", html: "A partire da Leucippo, Democrito spiega tutto con atomi e vuoto.", causes: ["e5"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. Pitagora e i numeri",
      html: `<p><b>Pitagora</b> (nato a Samo nel VI secolo a.C., attivo a Crotone) fondò una comunità, in parte scuola e in parte setta religiosa, con regole di vita, studio e anche segretezza. Le informazioni su di lui sono mescolate a leggende: per questo si parla di <b>pitagorici</b> piuttosto che di dottrine certe di Pitagora in persona.</p>
<p>La tesi caratteristica: <b>«tutto è numero»</b>. Osservarono che i suoni armonici corrispondono a rapporti numerici semplici (un'ottava corrisponde al rapporto 2:1, la quinta al 3:2, la quarta al 4:3): se persino la musica ha una struttura matematica, forse anche il cosmo è ordinato dai numeri. Il mondo è dunque un <b>cosmo</b>, termine che significa «ordine». Studiarono la matematica come via di purificazione dell'anima, credendo anche nella <b>metempsicosi</b> (trasmigrazione delle anime).</p>
<p>Al teorema che porta il suo nome (in un triangolo rettangolo il quadrato dell'ipotenusa è uguale alla somma dei quadrati dei cateti) la tradizione lega la scuola pitagorica, ma la proprietà era già nota a babilonesi e altri; i pitagorici ne diedero probabilmente una dimostrazione.</p>`
    },
    {
      type: "svg",
      title: "Armonia e rapporti",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#1e1b4b">Le corde pitagoriche</text>
<line x1="60" y1="80" x2="540" y2="80" stroke="#7c3aed" stroke-width="6"/>
<text x="560" y="86" font-size="14" fill="#1e1b4b">1</text>
<line x1="60" y1="140" x2="300" y2="140" stroke="#0ea5e9" stroke-width="6"/>
<text x="320" y="146" font-size="14" fill="#1e1b4b">1/2 : ottava (2:1)</text>
<line x1="60" y1="190" x2="380" y2="190" stroke="#16a34a" stroke-width="6"/>
<text x="400" y="196" font-size="14" fill="#1e1b4b">2/3 : quinta (3:2)</text>
<line x1="60" y1="240" x2="420" y2="240" stroke="#f59e0b" stroke-width="6"/>
<text x="440" y="246" font-size="14" fill="#1e1b4b">3/4 : quarta (4:3)</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#334155">Corde con lunghezze in rapporto semplice danno suoni consonanti.</text>
</svg>`,
      caption: "L'armonia musicale ha una base matematica: da qui l'idea che il cosmo sia un ordine numerico."
    },
    {
      type: "quiz",
      title: "Mini-quiz: i primi passi",
      questions: [
        { type: "mc", q: "Che cosa si intende per «archè»?", options: ["Il principio originario di tutte le cose", "Una divinità greca", "Un genere di poesia"], answer: 0, explain: "L'archè è ciò da cui tutto proviene e in cui tutto ritorna." },
        { type: "tf", q: "Anassimene indicò come principio l'aria.", answer: true, explain: "Per rarefazione e condensazione l'aria diventa le altre cose." },
        { type: "text", q: "Come si chiama il principio indicato da Anassimandro («l'illimitato»)?", answer: ["apeiron", "àpeiron", "l'apeiron"], explain: "L'àpeiron." }
      ]
    },
    {
      type: "text",
      title: "4. Eraclito: tutto scorre",
      html: `<p><b>Eraclito di Efeso</b> (circa 540-480 a.C.), detto «l'oscuro» per il suo stile enigmatico, ci è giunto in frammenti. Il suo tema è il <b>divenire</b>: la realtà è in continuo cambiamento. A lui si attribuisce la formula <i>panta rhei</i> («tutto scorre»), che però è un riassunto tardo del suo pensiero, non una citazione diretta; più vicino ai frammenti è il celebre paragone del <b>fiume</b>: non si può entrare due volte nello stesso fiume, perché altre acque scorrono sempre.</p>
<p>Il cambiamento però non è caos. Dietro c'è il <b><i>logos</i></b>, una legge razionale comune che governa il tutto. La realtà è fatta di <b>contrari</b> in tensione (giorno e notte, vita e morte, caldo e freddo), che si trasformano l'uno nell'altro: questa lotta è l'<b>armonia</b> nascosta del mondo, simile a quella dell'arco e della lira, tesi in direzioni opposte. Il simbolo del principio è il <b>fuoco</b>, che vive consumando e trasformando.</p>`
    },
    {
      type: "example",
      title: "Un esempio dalla vita: una squadra e un fiume",
      html: `<p>Una squadra di calcio resta «la stessa squadra» per decenni, ma i giocatori cambiano, l'allenatore cambia, perfino lo stadio può cambiare. Come il fiume di Eraclito: ciò che resta non è la materia ma la <b>forma</b>, l'identità nel flusso. Anche il tuo corpo rinnova continuamente le sue cellule, eppure sei sempre «tu». Eraclito invita a vedere l'unità nella trasformazione, non a negare il cambiamento.</p>`
    },
    {
      type: "text",
      title: "5. Parmenide: l'essere e il non essere",
      html: `<p><b>Parmenide di Elea</b> (circa 515-450 a.C.), colonia greca in Italia meridionale, risponde in modo opposto. Nel suo poema in esametri distingue due strade:</p>
<ul>
<li>la via della <b>verità</b> (<i>alétheia</i>): «l'essere è e non può non essere; il non essere non è e non può essere»;</li>
<li>la via dell'<b>opinione</b> (<i>dóxa</i>): quella dei mortali, che credono nel divenire e nella molteplicità.</li>
</ul>
<p>Da una tesi apparentemente ovvia, quella per cui «ciò che è, è», Parmenide trae conclusioni radicali con un ragionamento deduttivo. Se esiste solo l'essere, e il non essere non esiste, allora l'essere <b>non nasce</b> (dovrebbe nascere dal non essere, che non è), <b>non muore</b>, è <b>uno, immobile, continuo, eterno</b> e simile a una sfera compatta. Nascita, morte, movimento e pluralità sono dunque <b>apparenze</b> dei sensi, non verità della ragione. Per la prima volta il <b>pensiero argomentativo</b> prevale sull'esperienza: è l'inizio dell'<b>ontologia</b>, lo studio dell'essere in quanto essere.</p>
<p>Il suo discepolo <b>Zenone</b> difese Parmenide con paradossi contro il movimento. Nel più celebre, <b>Achille e la tartaruga</b>, Achille non raggiungerà mai la tartaruga perché, quando arriva dove lei era, lei è già un po' più avanti. Il paradosso mostrò i problemi dell'infinito (risolti poi con la matematica).</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: il problema dell'essere e del divenire",
      nodes: [
        { id: "arche", label: "Archè", x: 50, y: 6, color: "#7c3aed", html: "Il principio unico che spiega la molteplicità delle cose.", why: "Nasce dalla convinzione che il mondo sia ordinato (kosmos) e che dietro la varietà dei fenomeni ci sia qualcosa di unitario conoscibile con la ragione." },
        { id: "ioni", label: "Fisici ionici", x: 18, y: 32, color: "#0ea5e9", html: "Talete (acqua), Anassimandro (àpeiron), Anassimene (aria).", why: "Cercano un principio materiale: sono i primi a spiegare la natura senza ricorrere agli dèi, aprendo la strada alla scienza." },
        { id: "pita", label: "Pitagorici", x: 50, y: 34, color: "#16a34a", html: "Il numero come struttura del cosmo.", why: "Scoprono che l'armonia musicale è esprimibile con rapporti: il principio è la forma, non la materia." },
        { id: "eraclito", label: "Eraclito", x: 82, y: 32, color: "#f59e0b", html: "Divenire, contrari, logos, fuoco.", why: "Parte dall'esperienza: tutto muta. Per non cadere nel caos introduce il logos, la legge che tiene insieme i contrari." },
        { id: "parmenide", label: "Parmenide", x: 30, y: 62, color: "#ef4444", html: "L'essere è, il non essere non è: l'essere è immobile.", why: "Rende rigoroso il pensiero: se non si può pensare il non essere, nascita e movimento diventano impensabili. Pone il problema che i filosofi successivi cercheranno di risolvere." },
        { id: "pluralisti", label: "Pluralisti e atomisti", x: 72, y: 62, color: "#14b8a6", html: "Empedocle, Anassagora, Democrito.", why: "Cercano una via di mezzo: molti principi eterni (radici, semi, atomi) che si uniscono e si separano, così il cambiamento è possibile senza nascere dal nulla." }
      ],
      edges: [
        ["arche", "ioni", "risposta materiale"],
        ["arche", "pita", "risposta formale"],
        ["arche", "eraclito", "divenire"],
        ["eraclito", "parmenide", "obiezione"],
        ["parmenide", "pluralisti", "sfida raccolta"]
      ]
    },
    {
      type: "text",
      title: "6. I pluralisti e Democrito",
      html: `<p>Dopo Parmenide la domanda è: come salvare il cambiamento senza ammettere che qualcosa nasca dal nulla? I <b>pluralisti</b> rispondono con più principi eterni che si combinano.</p>
<ul>
<li><b>Empedocle</b> di Agrigento (V secolo a.C.): quattro «radici» eterne, <b>terra, acqua, aria, fuoco</b>, uniti da <b>Amore</b> (<i>Philía</i>) e separati da <b>Odio</b> (<i>Neîkos</i>).</li>
<li><b>Anassagora</b> di Clazomene: infiniti «semi» e una <b>Mente</b> (<i>Nous</i>) che ordina il cosmo. Visse ad Atene, maestro di Pericle.</li>
<li><b>Leucippo e Democrito</b> (Abdera, V-IV secolo a.C.): l'<b>atomismo</b>. La realtà è fatta di <b>atomi</b> (<i>átomos</i>, «indivisibili»), particelle eterne, invisibili, identiche per materia ma diverse per forma, ordine e posizione, che si muovono nel <b>vuoto</b>. Il vuoto è «non essere» che esiste in un certo senso (un correttivo a Parmenide), così il movimento diventa possibile. Tutto avviene per <b>necessità</b> meccanica, senza finalità né dèi che intervengano.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per ricordare",
      intro: "Se i nomi si confondono, prova una di queste strade.",
      tabs: [
        {
          label: "🌊 Analogia: il fiume e la roccia",
          html: `<p>Eraclito è il fiume: tutto scorre. Parmenide è la roccia: ciò che è, è e non cambia. Democrito prova un compromesso: una sabbia fatta di granelli eterni (atomi) che si mescolano continuamente. La roccia sono i granelli, il fiume è il loro movimento.</p>`
        },
        {
          label: "📋 Tabella dei principi",
          html: `<table>
<tr><th>Filosofo</th><th>Principio</th></tr>
<tr><td>Talete</td><td>acqua</td></tr>
<tr><td>Anassimandro</td><td>àpeiron</td></tr>
<tr><td>Anassimene</td><td>aria</td></tr>
<tr><td>Pitagorici</td><td>numero</td></tr>
<tr><td>Eraclito</td><td>fuoco / logos</td></tr>
<tr><td>Parmenide</td><td>essere uno e immobile</td></tr>
<tr><td>Empedocle</td><td>quattro radici</td></tr>
<tr><td>Democrito</td><td>atomi e vuoto</td></tr>
</table>`
        },
        {
          label: "⏳ Linea del tempo",
          html: `<p>Date approssimative: la datazione dei presocratici è spesso incerta.</p>`,
          widget: "timeline",
          options: { events: [
            { year: -585, label: "Talete (eclissi)", icon: "🌑" },
            { year: -530, label: "Pitagora a Crotone", icon: "🔺" },
            { year: -500, label: "Eraclito", icon: "🔥" },
            { year: -470, label: "Parmenide", icon: "⚪" },
            { year: -440, label: "Empedocle", icon: "⚖️" },
            { year: -420, label: "Democrito", icon: "⚛️" }
          ], unit: "anni" }
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lo sapevi che...?",
      html: `<p>La parola «<b>atomo</b>» di Democrito non ha niente a che fare con gli atomi della chimica moderna: i suoi erano indivisibili per definizione e si distinguevano per forma, mentre gli atomi di oggi hanno una struttura (protoni, neutroni, elettroni). Però l'idea di fondo, che la materia sia fatta di piccole parti in movimento in uno spazio vuoto, tornerà con la scienza moderna.</p>`
    },
    {
      type: "curiosity",
      title: "Il filosofo e l'eclissi",
      html: `<p>Una famosa aneddotica su Talete racconta che, mentre osservava le stelle, cadde in un pozzo, e una serva tracia lo prese in giro perché voleva conoscere il cielo senza vedere ciò che aveva ai piedi. Platone riporta l'aneddoto nel <i>Teeteto</i>. Aristotele, al contrario, racconta che Talete, prevedendo un'ottima raccolta di olive, prese in affitto tutti i frantoi per dimostrare che i filosofi, se volessero, potrebbero arricchirsi.</p>`
    },
    {
      type: "example",
      title: "Un esempio: spiegare un arcobaleno",
      html: `<p>Oggi sappiamo che l'arcobaleno nasce dalla rifrazione della luce nelle gocce d'acqua. Nel mito greco era invece legato alla messaggera degli dèi, Iride. Il passaggio dal mito al logos è proprio questo: invece di chiedere «<i>chi</i> lo ha mandato?», si chiede «<i>come</i> e <i>da quali cause</i> si produce?». Anche quando la risposta iniziale è sbagliata, il metodo permette di correggerla.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>La filosofia nasce nel VI secolo a.C. con il passaggio dal <b>mito al logos</b>.</li>
<li><b>Archè</b>: il principio di tutte le cose. Talete: acqua; Anassimandro: àpeiron; Anassimene: aria.</li>
<li><b>Pitagorici</b>: tutto è numero e armonia.</li>
<li><b>Eraclito</b>: divenire e logos; <b>Parmenide</b>: l'essere è immobile e il non essere non è.</li>
<li><b>Democrito</b>: atomi e vuoto, spiegazione meccanica.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: essere e divenire",
      questions: [
        { type: "mc", q: "Chi sosteneva che l'essere è immobile e il divenire è apparenza?", options: ["Parmenide", "Eraclito", "Talete"], answer: 0, explain: "È la tesi di Parmenide." },
        { type: "tf", q: "Per Democrito la realtà è fatta di atomi che si muovono nel vuoto.", answer: true, explain: "Atomi e vuoto sono i principi dell'atomismo." },
        { type: "order", q: "Metti in ordine cronologico approssimativo.", items: ["Talete", "Pitagora", "Eraclito", "Democrito"], explain: "Dal VI al V-IV secolo a.C." }
      ]
    }
  ],
  glossary: [
    { t: "Archè", d: "Il principio originario da cui tutte le cose derivano." },
    { t: "Logos", d: "Parola, discorso, ragione; per Eraclito la legge razionale che governa il cosmo." },
    { t: "Cosmo", d: "Il mondo inteso come ordine, in greco «ordine, bellezza»." },
    { t: "Àpeiron", d: "L'«illimitato» di Anassimandro, principio indeterminato." },
    { t: "Divenire", d: "Il cambiamento continuo delle cose." },
    { t: "Ontologia", d: "Lo studio dell'essere in quanto essere, nata con Parmenide." },
    { t: "Atomo", d: "Per Democrito, particella indivisibile ed eterna di cui è fatta la realtà." },
    { t: "Metempsicosi", d: "Trasmigrazione dell'anima da un corpo all'altro, creduta dai pitagorici." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa cercano i primi filosofi con la nozione di archè?", options: ["Il principio unitario di tutte le cose", "Il nome degli dèi", "Una legge scritta per la polis"], answer: 0, explain: "Cercano ciò da cui tutto nasce e in cui tutto ritorna." },
      { type: "mc", q: "Quale principio indicò Talete?", options: ["L'acqua", "Il fuoco", "L'aria"], answer: 0, explain: "Secondo Aristotele, l'acqua." },
      { type: "tf", q: "Per i pitagorici i rapporti numerici spiegano l'armonia musicale e l'ordine del cosmo.", answer: true, explain: "Da qui l'idea che «tutto è numero»." },
      { type: "text", q: "Come si chiama la legge razionale che per Eraclito governa il divenire?", answer: ["logos", "il logos"], explain: "Il logos." },
      { type: "mc", q: "Quale conclusione trae Parmenide dalla tesi che il non essere non è?", options: ["L'essere non nasce, non muore ed è immobile", "Tutto cambia in continuazione", "La realtà è fatta di numeri"], answer: 0, explain: "Nascita, morte e movimento richiederebbero il non essere." },
      { type: "mc", q: "In che cosa Democrito si differenzia da Parmenide?", options: ["Ammette il vuoto, così il movimento è possibile", "Nega l'esistenza degli atomi", "Identifica l'essere con l'acqua"], answer: 0, explain: "Il vuoto permette ai molti atomi di muoversi." },
      { type: "order", q: "Metti in ordine di tempo (approssimativo).", items: ["Talete", "Anassimandro", "Eraclito", "Democrito"], explain: "VI secolo: Talete e Anassimandro; V secolo: Eraclito e Democrito." },
      { type: "tf", q: "Zenone cercò di difendere Parmenide mostrando paradossi sul movimento.", answer: true, explain: "Achille e la tartaruga è il più famoso." },
      { type: "mc", q: "Quali sono le quattro radici di Empedocle?", options: ["Terra, acqua, aria, fuoco", "Atomi, vuoto, numero, logos", "Mente, caos, ordine, tempo"], answer: 0, explain: "Unite da Amore e separate da Odio." }
    ]
  }
});
