TOPIC('it', {
  id: "l3-sum-antropologia-metodi",
  title: "Il lavoro sul campo",
  intro: "Per molto tempo gli studiosi che scrivevano dei «popoli lontani» non si erano mai mossi dalla loro biblioteca. Poi, tra Ottocento e Novecento, qualcuno decise di <b>andare a vivere</b> con le persone che voleva studiare. Il risultato fu un metodo nuovo, l'<b>osservazione partecipante</b>, e un genere di scrittura, l'<b>etnografia</b>. In questa lezione segui <b>Bronislaw Malinowski</b> alle isole Trobriand e il suo «Kula», incontri altri grandi etnografi (Boas, Evans-Pritchard, Mead, Geertz, de Martino), impari come si lavora sul campo (diario, informatori, interviste), che cosa significano <i>emic</i> ed <i>etic</i> e quali problemi etici pone questa disciplina.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Gli antropologi «da poltrona»",
      html: `<p>Nell'Ottocento chi scriveva di popoli extraeuropei lavorava di solito come i filologi: leggeva i resoconti di <b>viaggiatori, missionari, funzionari coloniali, commercianti</b> e li confrontava. Gli studiosi che lavoravano così furono ironicamente chiamati «antropologi da poltrona» (<i>armchair anthropologists</i>). Il caso più celebre è lo scozzese <b>James Frazer</b> (1854-1941), autore del <i>Ramo d'oro</i> (1890), una gigantesca raccolta di miti e riti di tutto il mondo: scrisse pagine bellissime senza quasi mai incontrare di persona i popoli che descriveva.</p>
<p>Il limite di questo metodo è evidente: i resoconti dipendono da chi li ha scritti, spesso con pregiudizi o per brevi incontri; le usanze, poi, vengono estratte dal contesto e confrontate come «reperti» in un museo. Per capire <b>che cosa significa</b> un rito per chi lo pratica, serve vederlo accadere, nella vita quotidiana, e parlare con le persone nella loro lingua.</p>
<p>Ci furono precursori. Nel <b>1898</b> un gruppo di studiosi dell'Università di Cambridge (Alfred Haddon, William Rivers, Charles Seligman) partecipò a una spedizione nello Stretto di Torres, tra Australia e Nuova Guinea, usando per la prima volta metodi di indagine più sistematici (per esempio la raccolta delle <b>genealogie</b>). E <b>Franz Boas</b> già nel 1883-84 aveva vissuto tra gli Inuit dell'isola di Baffin. Ma fu soprattutto un polacco, a cavallo della Prima guerra mondiale, a trasformare il lavoro sul campo nel marchio dell'antropologia moderna.</p>`
    },
    {
      type: "text",
      title: "2. Malinowski alle isole Trobriand",
      html: `<p><b>Bronislaw Malinowski</b> (Cracovia 1884 - New Haven 1942) si era laureato in fisica e filosofia, poi si appassionò all'antropologia leggendo proprio Frazer. Si trasferì a Londra (London School of Economics). Nel <b>1914</b> partì per l'Australia e la Nuova Guinea; allo scoppio della Prima guerra mondiale, essendo cittadino dell'Impero austro-ungarico (nemico dell'Inghilterra), non poté tornare in Europa ma ottenne di restare nei territori britannici.</p>
<p>Questa circostanza, in apparenza sfortunata, diventò la sua fortuna scientifica. Tra il <b>1915 e il 1918</b>, in due periodi, visse per circa due anni nelle <b>isole Trobriand</b> (oggi in Papua Nuova Guinea). Imparò la lingua locale, piantò la sua tenda in mezzo al villaggio, e invece di lavorare solo con interpreti e informatori portati alla missione, <b>visse con gli abitanti</b>, partecipando alle attività quotidiane. Nel <b>1922</b> pubblicò <i>Argonauti del Pacifico occidentale</i>, il testo che molti considerano la nascita dell'etnografia moderna.</p>
<p>Nell'introduzione Malinowski scrive che lo scopo dell'etnografo è «cogliere il punto di vista dell'indigeno, il suo rapporto con la vita, rendersi conto della sua visione del suo mondo». Elencò tre ambiti da documentare: lo <b>scheletro</b> della vita sociale (regole, istituzioni, che si ricavano con tabelle e censimenti), gli <b>«imponderabili della vita reale»</b> (il modo di mangiare, di parlare, di lavorare, l'umore, i comportamenti quotidiani, che si colgono solo osservando a lungo) e il <b>corpus di espressioni</b> (racconti, formule, proverbi, detti nella lingua originale).</p>`
    },
    {
      type: "widget",
      title: "Le tappe del lavoro sul campo",
      widget: "timeline",
      options: {
        unit: "anno",
        events: [
          { year: 1883, label: "Boas tra gli Inuit di Baffin", icon: "🧊" },
          { year: 1890, label: "Frazer, Il ramo d'oro", icon: "📚" },
          { year: 1898, label: "Spedizione di Cambridge nello Stretto di Torres", icon: "⛵" },
          { year: 1915, label: "Malinowski alle Trobriand", icon: "🏝️" },
          { year: 1922, label: "Argonauti del Pacifico occidentale", icon: "📖" },
          { year: 1925, label: "Mead a Samoa", icon: "🌺" },
          { year: 1937, label: "Evans-Pritchard, gli Azande", icon: "🔮" },
          { year: 1961, label: "De Martino, La terra del rimorso", icon: "💃" },
          { year: 1973, label: "Geertz, Interpretazione di culture", icon: "🧩" },
          { year: 1986, label: "Writing Culture", icon: "✍️" }
        ]
      },
      caption: "Scorri la linea del tempo: dai pionieri del campo alla riflessione critica sulla scrittura etnografica."
    },
    {
      type: "svg",
      title: "Il Kula: lo scambio che unisce le isole",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e0f2fe"/>
<circle cx="300" cy="150" r="100" fill="none" stroke="#0369a1" stroke-width="3" stroke-dasharray="4 6"/>
<circle cx="300" cy="50" r="22" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<circle cx="400" cy="150" r="22" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<circle cx="300" cy="250" r="22" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<circle cx="200" cy="150" r="22" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<path d="M330 62 C375 80 395 105 398 118" fill="none" stroke="#dc2626" stroke-width="4"/>
<polygon points="398,126 390,114 406,114" fill="#dc2626"/>
<path d="M395 178 C390 205 360 235 330 245" fill="none" stroke="#dc2626" stroke-width="4"/>
<polygon points="322,248 334,238 336,254" fill="#dc2626"/>
<path d="M270 245 C235 235 210 205 205 178" fill="none" stroke="#dc2626" stroke-width="4"/>
<polygon points="205,170 197,182 213,182" fill="#dc2626"/>
<path d="M205 120 C210 95 235 70 270 58" fill="none" stroke="#dc2626" stroke-width="4"/>
<polygon points="278,56 266,50 266,66" fill="#dc2626"/>
<text x="300" y="155" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Kula</text>
<text x="300" y="175" font-size="14" text-anchor="middle" fill="#0f172a">anello di scambio</text>
<text x="300" y="20" font-size="14" text-anchor="middle" fill="#0f172a">collane rosse (soulava): senso orario</text>
<text x="300" y="290" font-size="14" text-anchor="middle" fill="#0f172a">bracciali bianchi (mwali): senso antiorario</text>
</svg>`,
      caption: "Schema semplificato del Kula: due tipi di oggetti prestigiosi viaggiano in direzioni opposte lungo un anello di isole, passando da un partner all'altro."
    },
    {
      type: "text",
      title: "3. Il Kula: perché scambiare oggetti che non servono a niente?",
      html: `<p>Il caso che rese celebre Malinowski è il <b>Kula</b>. Gli abitanti di un anello di isole nella Melanesia intraprendono con le canoe lunghi e pericolosi viaggi per scambiare due tipi di oggetti di conchiglia: <b>collane</b> rosse (<i>soulava</i>) che circolano in senso orario e <b>bracciali</b> bianchi (<i>mwali</i>) che circolano in senso antiorario. Questi oggetti non vengono indossati se non in rare occasioni, non servono a niente di pratico, e nessuno può tenerli per sempre: ogni partner li riceve, li custodisce per un po' e poi li passa al successivo.</p>
<p>Per un osservatore «razionale» che ragiona in termini di profitto, sembrava assurdo. Malinowski capì che il Kula <b>non è commercio</b> ma una rete di <b>relazioni di fiducia, reputazione e prestigio</b> tra partner: avere un buon nome nel Kula significa essere rispettati. Intorno allo scambio rituale si svolgono, inoltre, scambi pratici di cibo e di beni (il commercio vero e proprio), la costruzione delle canoe, la magia per il viaggio. La lezione è generale: un comportamento che sembra irrazionale è spesso <b>razionale in un altro sistema di significati</b>; capirlo richiede anni di presenza.</p>
<p>Questo approccio, chiamato <b>funzionalismo</b>, sosteneva che ogni istituzione di una società (un rito, un mito, uno scambio) <b>svolge una funzione</b> per i bisogni individuali e collettivi. Oggi molti antropologi lo considerano troppo rigido, ma l'invito a studiare le istituzioni <b>nel loro insieme</b> resta fondamentale.</p>`
    },
    {
      type: "remember",
      title: "L'osservazione partecipante",
      html: `<p>L'<b>osservazione partecipante</b> è il metodo centrale dell'antropologia: il ricercatore vive per un periodo lungo (spesso mesi o anni) nella comunità che studia, ne impara la lingua, <b>osserva</b> e allo stesso tempo <b>partecipa</b> alla vita quotidiana. Il risultato scritto si chiama <b>etnografia</b> (dal greco <i>éthnos</i> «popolo» e <i>gráphein</i> «scrivere»).</p>`
    },
    {
      type: "text",
      title: "4. Come si lavora sul campo",
      html: `<p>Il lavoro sul campo (<i>fieldwork</i>) è un processo con più fasi e strumenti:</p>
<ul>
<li><b>Preparazione</b>: studio della letteratura, della lingua, della storia della regione; ottenere i permessi e, dove serve, l'accordo della comunità.</li>
<li><b>Ingresso nel campo</b>: spesso la fase più difficile. Il ricercatore è uno «straniero» e deve guadagnarsi fiducia, trovare un posto in cui vivere, a volte un <b>«portinaio»</b> (<i>gatekeeper</i>) che lo introduca.</li>
<li><b>Informatori chiave</b>: persone della comunità che conoscono bene le tradizioni e spiegano al ricercatore il significato di ciò che vede. Il loro punto di vista è prezioso ma <b>mai neutrale</b>: bisogna incrociare più voci.</li>
<li><b>Osservazione e note</b>: il ricercatore annota quasi tutto in un <b>diario di campo</b> (cosa ha visto, chi c'era, cosa è stato detto), distinguendo i fatti dalle interpretazioni.</li>
<li><b>Interviste</b> (libere, semi-strutturate, storie di vita) e raccolta di documenti, <b>genealogie</b> (introdotte da Rivers: per capire la parentela), mappe del villaggio, censimenti.</li>
<li><b>Analisi e scrittura</b>: dopo il ritorno si organizzano i dati, si confrontano con la teoria, si scrive l'etnografia.</li>
</ul>
<p>Un concetto utile è la distinzione tra <b>prospettiva emica</b> ed <b>etica</b>, ispirata al linguista <b>Kenneth Pike</b> (1954, dalle parole <i>phonemic</i> e <i>phonetic</i>). La prospettiva <b>emic</b> è il punto di vista di chi vive nella cultura (che cosa significa per loro, con le loro categorie); la prospettiva <b>etic</b> è quella dell'osservatore esterno, che usa categorie scientifiche confrontabili tra culture. Un buon etnografo cerca di <b>partire dall'emic</b> e poi di tradurlo in concetti etic comprensibili anche ai lettori.</p>`
    },
    {
      type: "quiz",
      title: "Controllo rapido (1)",
      questions: [
        { type: "mc", q: "Che cosa significa «antropologo da poltrona»?", options: ["Uno studioso che lavora sui resoconti altrui senza fare ricerca sul campo", "Uno studioso che studia il comfort", "Un antropologo anziano", "Uno studioso che vive con i popoli che studia"], answer: 0, explain: "Frazer ne è l'esempio tipico: scrisse Il ramo d'oro senza lavoro sul campo." },
        { type: "tf", q: "Malinowski pubblicò «Argonauti del Pacifico occidentale» nel 1922.", answer: true, explain: "Il libro nasce dalla ricerca nelle isole Trobriand (1915-1918)." },
        { type: "mc", q: "Che cos'è la prospettiva «emic»?", options: ["Il punto di vista di chi vive dentro la cultura studiata", "Il punto di vista dello scienziato esterno", "Una tecnica statistica", "Un tipo di intervista"], answer: 0, explain: "Emic = categorie dei membri della cultura; etic = categorie dell'osservatore." }
      ]
    },
    {
      type: "example",
      title: "Geertz e il combattimento dei galli a Bali",
      html: `<p>Nel <b>1958</b> Clifford Geertz e la moglie Hildred arrivarono in un villaggio di Bali (Indonesia). Per settimane gli abitanti li trattarono come se fossero invisibili: erano stranieri, forse spie. Il <b>combattimento dei galli</b> era illegale e un giorno la polizia fece irruzione in un incontro. Geertz e la moglie, anziché restare a guardare, <b>scapparono insieme alla folla</b> e si rifugiarono in un cortile di una casa, dove finsero di sorseggiare il tè. Quando la polizia passò, il padrone di casa, che li aveva appena visti correre con tutti gli altri, li difese. Da quel momento furono <b>accettati</b>: erano diventati «uno di loro» perché avevano condiviso un rischio.</p>
<p>Geertz usò quell'esperienza per scrivere un saggio, <i>Deep Play: Notes on the Balinese Cockfight</i> (1972), in cui mostra che il combattimento dei galli non è un semplice gioco d'azzardo, ma una sorta di «testo» in cui i balinesi leggono e mettono in scena <b>status, rivalità e onore</b>. L'episodio mostra una regola del lavoro sul campo: la fiducia non si ottiene per decreto, ma partecipando.</p>`
    },
    {
      type: "text",
      title: "5. Altri grandi etnografi",
      html: `<ul>
<li><b>Edward E. Evans-Pritchard</b> (1902-1973), inglese. Studiò gli <b>Azande</b> del Sudan meridionale (<i>Stregoneria, oracoli e magia tra gli Azande</i>, 1937): mostrò che credere nella stregoneria non è «irrazionale», perché dentro quel sistema di credenze spiega i casi sfortunati (per esempio perché il granaio crolla proprio quando qualcuno ci sta sotto). Studiò poi i <b>Nuer</b> (1940), pastori che vivono in una società senza Stato.</li>
<li><b>Margaret Mead</b> (1901-1978), allieva di Boas, condusse ricerche a Samoa (1925-26), in Nuova Guinea e a Bali. Era interessata a come le società educano bambini e adolescenti e a come definiscono i ruoli di genere.</li>
<li><b>Ernesto de Martino</b> (1908-1965), italiano, studiò il Meridione. In <i>La terra del rimorso</i> (1961) descrisse con una équipe interdisciplinare, nel 1959, il <b>tarantismo</b> del Salento: rituale di guarigione, con musica e danza, delle donne che si credevano morse dalla tarantola. Mostrò che l'antropologia si può fare anche «a casa nostra» e che i riti hanno una funzione psicologica e culturale (ritrovare un equilibrio dopo una crisi).</li>
<li><b>Clifford Geertz</b> (1926-2006), che abbiamo visto, sostenne che l'etnografia consiste nell'<b>interpretare significati</b> con la «descrizione densa».</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il diario segreto di Malinowski?",
      html: `<p>Nel <b>1967</b>, venticinque anni dopo la sua morte, la vedova pubblicò il suo diario personale del periodo delle Trobriand (<i>A Diary in the Strict Sense of the Term</i>). Vi si leggeva un uomo nervoso, insofferente, a tratti annoiato dagli isolani e pieno di dubbi: molto lontano dall'immagine di osservatore sereno e imparziale che emergeva dagli Argonauti. Il diario scatenò un grande dibattito: l'etnografia non è mai «neutra», perché il ricercatore è una persona con emozioni e pregiudizi, e questo va riconosciuto.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il lavoro sul campo",
      intro: "Il metodo etnografico è sorprendentemente simile a esperienze che conosci.",
      tabs: [
        { label: "🏫 Il primo giorno in una nuova scuola", html: `<p>Ricordi come ti sei sentito il primo giorno in una scuola nuova? Non sapevi chi sedeva dove, quali battute facevano ridere, quali professori erano severi. Per settimane hai <b>osservato</b>, hai fatto domande a un compagno gentile (il tuo «informatore»), hai commesso errori e hai imparato le regole non scritte. Ecco l'osservazione partecipante in miniatura: l'etnografo fa la stessa cosa ma in modo sistematico, e annotando tutto.</p>` },
        { label: "✈️ Il viaggio di scambio", html: `<p>Un viaggio in cui sei in hotel e visiti i monumenti è come il lavoro «da poltrona»: vedi la superficie. Un soggiorno di un mese presso una famiglia, mangiando con loro e andando con loro a fare la spesa, è più vicino all'etnografia. Sperimenti gli imponderabili della vita quotidiana, cose che nessuna guida turistica descrive.</p>` },
        { label: "🔍 L'indagine giornalistica", html: `<p>Un reporter che racconta una guerra dalla redazione usa fonti di seconda mano; uno che vive per mesi in zona vede ciò che sfugge alle notizie ufficiali. Anche l'etnografo lavora sul campo, ma con una differenza: resta più a lungo e cerca di capire le categorie dei locali (emic) prima di spiegarle con le proprie (etic).</p>` }
      ]
    },
    {
      type: "text",
      title: "6. Problemi etici e critiche",
      html: `<p>Negli ultimi decenni l'antropologia ha riflettuto sui propri limiti.</p>
<ul>
<li><b>Il legame con il colonialismo.</b> Molti primi etnografi lavoravano in territori controllati dalle potenze coloniali e a volte i loro studi servivano agli amministratori. Oggi si discute di <b>decolonizzare</b> la disciplina, dando voce agli studiosi e alle comunità locali.</li>
<li><b>Autorità e scrittura.</b> Il volume collettivo <i>Writing Culture</i> (1986, a cura di James Clifford e George Marcus) sostenne che l'etnografia è anche un <b>genere letterario</b>: chi scrive decide che cosa mostrare e come, e finisce per «rappresentare» gli altri a modo suo. Da qui l'attenzione alla <b>riflessività</b> (dichiarare la propria posizione) e alle ricerche condotte <b>insieme</b> alle comunità.</li>
<li><b>Etica della ricerca.</b> Si richiede il <b>consenso informato</b> (le persone devono sapere chi è il ricercatore e perché è lì), la <b>tutela della privacy</b> (si usano pseudonimi), l'impegno a <b>non danneggiare</b> i soggetti, il rispetto di ciò che la comunità non vuole divulgare (riti sacri, per esempio).</li>
<li><b>Il rischio di «andare nativo»</b> (<i>going native</i>): identificarsi tanto da perdere lo sguardo critico. La soluzione è l'equilibrio tra <b>coinvolgimento e distanza</b>.</li>
</ul>
<p>Oggi il «campo» non è più solo un villaggio remoto: gli antropologi studiano ospedali, laboratori scientifici, fabbriche, stazioni, comunità di migranti, <b>comunità online</b>. Il metodo (stare, osservare, ascoltare, interpretare) resta lo stesso.</p>`
    },
    {
      type: "decision",
      title: "Che cosa avresti fatto al posto di Malinowski?",
      html: `<p>È il <b>1914</b>: sei un giovane studioso polacco in Australia e scoppia la guerra. Le autorità britanniche ti considerano «straniero nemico» ma ti concedono di restare nei territori coloniali e di fare ricerca. Hai davanti un'occasione e un rischio: puoi sfruttare il tempo forzato lontano da casa.</p>`,
      question: "Come organizzi la ricerca?",
      options: [
        { label: "Mi stabilisco in una città coloniale e interrogo gli informatori della missione", outcome: "È comodo e sicuro, ma ti basi su racconti di seconda mano e perdi il quotidiano; è il metodo dei predecessori." },
        { label: "Vado in un'isola, imparo la lingua e vivo nel villaggio", outcome: "È la scelta di Malinowski: faticosa, ma ti dà accesso agli «imponderabili della vita reale» e alla visione del mondo degli abitanti." },
        { label: "Faccio brevi visite di pochi giorni a molti villaggi diversi", outcome: "Ottieni un quadro ampio ma superficiale: ti sfugge il senso delle relazioni, che emerge solo con la permanenza lunga." }
      ],
      answer: 1,
      explain: "Malinowski scelse di vivere due anni alle Trobriand, imparando la lingua e partecipando alla vita del villaggio. Da quell'esperienza nacque il modello di etnografia che ha dominato l'antropologia del Novecento."
    },
    {
      type: "example",
      title: "Una giornata da etnografo (a scuola)",
      html: `<p>Immagina di dover fare una piccola etnografia della tua classe. Per due settimane ti siedi in fondo e annoti: chi parla con chi durante l'intervallo, quali parole ricorrono (il gergo del gruppo), quali regole nessuno ha mai scritto (dove ci si siede, chi può prendere in giro chi), che cosa succede quando arriva un supplente. Poi chiedi a due compagni di spiegarti <b>perché</b> fanno certe cose (informatori) e confronti le loro risposte con ciò che hai visto. Scoprirai che molte regole «ovvie» non lo sono per niente: è l'esercizio di <b>rendere strano il familiare</b>, che è l'altra faccia di rendere familiare lo strano.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… l'etnografia è anche in rete?",
      html: `<p>Dagli anni Duemila esiste l'<b>etnografia digitale</b> (o «netnografia»): antropologi che studiano forum, videogiochi online, social network, comunità di fan. Il «campo» è uno spazio virtuale, ma valgono le stesse regole: partecipare, osservare a lungo, chiedere il consenso e proteggere l'identità delle persone.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: il lavoro sul campo",
      nodes: [
        { id: "etn", label: "Etnografia", x: 50, y: 6, color: "#3b82f6", html: "Descrizione scritta di una cultura basata sulla ricerca sul campo.", why: "Nasce dall'insoddisfazione per i resoconti di seconda mano: per capire il significato di un'usanza bisogna osservarla nel contesto e ascoltare chi la pratica." },
        { id: "mal", label: "Malinowski", x: 14, y: 42, color: "#10b981", html: "Trobriand, 1915-18; Argonauti del Pacifico occidentale (1922).", why: "Costretto alla permanenza dalla guerra, trasformò il soggiorno lungo e la conoscenza della lingua in un metodo; la sua influenza dura ancora." },
        { id: "osp", label: "Osservazione partecipante", x: 38, y: 42, color: "#f59e0b", html: "Vivere con la comunità osservando e partecipando.", why: "Permette di cogliere gli «imponderabili della vita reale» e il punto di vista degli abitanti, che non emergono in un'intervista breve." },
        { id: "emi", label: "Emic / etic", x: 62, y: 42, color: "#ef4444", html: "Punto di vista interno ed esterno.", why: "Nasce dall'esigenza di tradurre il senso vissuto in concetti confrontabili senza tradirlo; ispirata alla linguistica di Pike (1954)." },
        { id: "int", label: "Interpretazione", x: 86, y: 42, color: "#8b5cf6", html: "Geertz: descrizione densa dei significati.", why: "Dopo gli anni Settanta si afferma l'idea che l'etnografia sia un'interpretazione di segni, non una scienza di leggi." },
        { id: "eti", label: "Etica e critica", x: 50, y: 78, color: "#0ea5e9", html: "Consenso informato, colonialismo, riflessività (Writing Culture, 1986).", why: "L'antropologia riflette su se stessa: ogni rappresentazione degli altri è un atto di potere e richiede responsabilità." }
      ],
      edges: [["etn", "mal", "fondata da"], ["etn", "osp", "metodo"], ["osp", "emi", "distingue"], ["etn", "int", "sviluppi"], ["etn", "eti", "si interroga su"]]
    },
    {
      type: "quiz",
      title: "Controllo rapido (2)",
      questions: [
        { type: "mc", q: "Che cosa sono gli «imponderabili della vita reale» per Malinowski?", options: ["I fatti quotidiani (abitudini, umore, modi di lavorare) che si colgono solo con l'osservazione prolungata", "Le leggi scritte di una società", "I miti e le leggende", "I dati dei censimenti"], answer: 0, explain: "Sono la parte non codificata della vita sociale, impossibile da ricavare con interviste rapide." },
        { type: "mc", q: "Che cos'è il Kula?", options: ["Un anello di scambio rituale di collane e bracciali tra isole della Melanesia", "Un tipo di canoa", "Una divinità", "Una lingua locale"], answer: 0, explain: "Non è commercio ma una rete di relazioni e prestigio." },
        { type: "tf", q: "Con «Writing Culture» (1986) si sostenne che l'etnografia è anche un genere di scrittura e quindi non è mai neutrale.", answer: true, explain: "Da qui l'attenzione alla riflessività e alla collaborazione con le comunità." }
      ]
    }
  ],
  glossary: [
    { t: "Etnografia", d: "Descrizione scritta di una cultura basata sulla ricerca sul campo." },
    { t: "Osservazione partecipante", d: "Metodo in cui il ricercatore vive nella comunità, osservando e partecipando alla vita quotidiana." },
    { t: "Informatore chiave", d: "Persona della comunità che spiega al ricercatore usi e significati." },
    { t: "Diario di campo", d: "Quaderno in cui il ricercatore annota osservazioni, conversazioni e riflessioni." },
    { t: "Emic / etic", d: "Punto di vista interno alla cultura / punto di vista esterno dello scienziato." },
    { t: "Kula", d: "Sistema di scambio rituale di collane e bracciali di conchiglia tra isole della Melanesia, descritto da Malinowski." },
    { t: "Funzionalismo", d: "Approccio per cui ogni istituzione sociale svolge una funzione per i bisogni della comunità." },
    { t: "Consenso informato", d: "Accordo delle persone studiate, che sanno chi è il ricercatore e a quale scopo lavora." },
    { t: "Riflessività", d: "Consapevolezza del ricercatore del proprio ruolo e dei propri pregiudizi." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Chi è considerato il fondatore dell'etnografia moderna grazie alla ricerca alle isole Trobriand?", options: ["Bronislaw Malinowski", "James Frazer", "Franz Boas", "Émile Durkheim"], answer: 0, explain: "Con Argonauti del Pacifico occidentale (1922) rese il lavoro sul campo il criterio dell'antropologia." },
      { type: "tf", q: "James Frazer scrisse «Il ramo d'oro» dopo anni di vita tra i popoli descritti.", answer: false, explain: "Lavorava su fonti di seconda mano: è il tipico «antropologo da poltrona»." },
      { type: "mc", q: "Perché Malinowski rimase alle Trobriand per due anni?", options: ["Perché la Prima guerra mondiale gli impedì di tornare in Europa", "Perché era un missionario", "Perché lavorava per un museo", "Perché non conosceva l'inglese"], answer: 0, explain: "Cittadino dell'Impero austro-ungarico, rimase nei territori britannici." },
      { type: "mc", q: "Nel Kula le collane rosse circolano...", options: ["In senso orario", "In senso antiorario", "Nello stesso verso dei bracciali", "Solo all'interno dell'isola"], answer: 0, explain: "Le collane in senso orario, i bracciali bianchi in senso antiorario." },
      { type: "mc", q: "Che cosa mostrò Evans-Pritchard studiando gli Azande?", options: ["Che la credenza nella stregoneria ha una logica coerente nel suo sistema di spiegazioni", "Che gli Azande erano privi di cultura", "Che la magia è sempre efficace", "Che la stregoneria è un'invenzione europea"], answer: 0, explain: "Credere nella stregoneria spiegava gli eventi sfortunati in modo coerente e non era irrazionale." },
      { type: "text", q: "Come si chiama il metodo in cui il ricercatore vive nella comunità che studia?", answer: ["osservazione partecipante", "l'osservazione partecipante"], explain: "È il metodo centrale dell'antropologia." },
      { type: "mc", q: "Che cosa descrive de Martino ne «La terra del rimorso» (1961)?", options: ["Il tarantismo del Salento", "I riti degli Aborigeni australiani", "Il Kula", "La vita dei Nuer"], answer: 0, explain: "Il rituale di guarigione con musica e danza in Puglia, studiato da un'équipe nel 1959." },
      { type: "mc", q: "Come si definisce la prospettiva «etic»?", options: ["Il punto di vista dell'osservatore esterno con categorie scientifiche confrontabili", "Il punto di vista degli abitanti", "Un metodo statistico", "La traduzione letterale delle parole"], answer: 0, explain: "È contrapposta alla prospettiva emic, interna alla cultura." },
      { type: "tf", q: "Il consenso informato è uno dei principi dell'etica della ricerca etnografica.", answer: true, explain: "Le persone devono sapere chi è il ricercatore e perché è presente." },
      { type: "order", q: "Metti in ordine cronologico", items: ["Boas tra gli Inuit (1883-84)", "Spedizione di Cambridge nello Stretto di Torres (1898)", "Malinowski alle Trobriand (1915-18)", "Evans-Pritchard sugli Azande (1937)", "Writing Culture (1986)"], explain: "Dalla ricerca pionieristica alla riflessione critica sull'etnografia." }
    ]
  }
});
