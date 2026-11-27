TOPIC('it', {
  id: "l5-sum-ricerca-sociale",
  title: "La ricerca nelle scienze umane",
  intro: "«Il 70% dei ragazzi dorme meno di otto ore.» «Chi usa molto i social è più triste.» «Nelle famiglie con più libri i figli vanno meglio a scuola.» Ogni giorno ti arrivano frasi come queste, presentate come verità scientifiche. Ma da dove vengono quei numeri? Chi ha chiesto a chi? Quante persone? Con quali domande? Le scienze umane (sociologia, psicologia, antropologia, pedagogia) non possono mettere un essere umano sotto un microscopio come si fa con un batterio, e per questo hanno sviluppato metodi propri. In questa lezione vedi come si costruisce una <b>ricerca</b>, la differenza tra metodi <b>quantitativi</b> (questionari, statistiche, campioni) e <b>qualitativi</b> (interviste, osservazione partecipante, storie di vita), come si evitano gli errori più comuni (campioni sbagliati, domande che orientano, confondere correlazione e causa) e quali <b>regole etiche</b> proteggono le persone studiate. È la lezione che ti serve per leggere con occhio critico un sondaggio e per impostare il tuo lavoro per la prova di maturità.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Perché serve un metodo",
      html: `<p>Il <b>senso comune</b> è ricco di idee ovvie, ma spesso contraddittorie («chi si somiglia si piglia» / «gli opposti si attraggono»). La ricerca scientifica in campo umano serve a <b>controllare</b> le idee con i dati, riducendo il peso dei pregiudizi del ricercatore. Un esempio storico: <b>Émile Durkheim</b>, nel <i>Suicidio</i> (1897), invece di spiegare il suicidio con la psicologia individuale confronta i <b>tassi</b> di suicidio in diversi Paesi e gruppi (cattolici, protestanti, ebrei, sposati e celibi) e mostra che dipendono dal grado di integrazione sociale. È un caso fondativo di ricerca <b>quantitativa</b>: dalla statistica si scoprono regolarità sociali che il singolo non vede.</p>
<p>Le scienze umane però hanno difficoltà particolari:</p>
<ul>
<li>l'oggetto dello studio <b>risponde</b>: le persone sanno di essere osservate e possono cambiare comportamento;</li>
<li>il ricercatore <b>fa parte</b> della società che studia, e porta valori e pregiudizi;</li>
<li>le variabili sono moltissime e difficili da isolare: raramente si possono fare esperimenti con gruppi di controllo;</li>
<li>le persone non possono essere trattate come oggetti: ci sono limiti <b>etici</b>.</li>
</ul>
<p>Per questo si parla di <b>due grandi approcci</b>, che spesso si integrano: il <b>quantitativo</b> (misurare e contare per cercare regolarità generali) e il <b>qualitativo</b> (comprendere significati, motivazioni, contesti). Max Weber, nel pensiero sociologico, chiama questa seconda strada <b>comprensione</b> (<i>Verstehen</i>): capire il senso che i soggetti danno alle proprie azioni.</p>`
    },
    {
      type: "svg",
      title: "Le fasi di una ricerca",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="30" width="165" height="75" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="102" y="58" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">1. Domanda e</text>
<text x="102" y="78" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">ipotesi</text>
<rect x="217" y="30" width="165" height="75" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<text x="300" y="58" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">2. Disegno:</text>
<text x="300" y="78" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">metodo e campione</text>
<rect x="415" y="30" width="165" height="75" rx="10" fill="#fef9c3" stroke="#a16207" stroke-width="3"/>
<text x="497" y="58" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">3. Raccolta</text>
<text x="497" y="78" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">dei dati</text>
<rect x="415" y="185" width="165" height="75" rx="10" fill="#fce7f3" stroke="#be185d" stroke-width="3"/>
<text x="497" y="213" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">4. Analisi</text>
<text x="497" y="233" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">dei dati</text>
<rect x="217" y="185" width="165" height="75" rx="10" fill="#ede9fe" stroke="#6d28d9" stroke-width="3"/>
<text x="300" y="213" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">5. Interpretazione</text>
<text x="300" y="233" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">e conclusioni</text>
<rect x="20" y="185" width="165" height="75" rx="10" fill="#fed7aa" stroke="#c2410c" stroke-width="3"/>
<text x="102" y="213" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">6. Nuove</text>
<text x="102" y="233" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">domande</text>
<path d="M187 67 L215 67" stroke="#1e293b" stroke-width="3"/>
<path d="M384 67 L413 67" stroke="#1e293b" stroke-width="3"/>
<path d="M497 107 L497 183" stroke="#1e293b" stroke-width="3"/>
<path d="M413 222 L384 222" stroke="#1e293b" stroke-width="3"/>
<path d="M215 222 L187 222" stroke="#1e293b" stroke-width="3"/>
<path d="M102 183 L102 107" stroke="#1e293b" stroke-width="3"/>
</svg>`,
      caption: "La ricerca è un ciclo: i risultati generano nuove domande."
    },
    {
      type: "text",
      title: "2. Dalla domanda ai dati: ipotesi, variabili, operazionalizzazione",
      html: `<p>Una ricerca comincia da una <b>domanda</b> precisa («Gli studenti che dormono meno vanno peggio a scuola?»). Si formula una <b>ipotesi</b>, cioè una risposta provvisoria da controllare: «Gli studenti che dormono meno di sette ore hanno voti più bassi». Poi si definiscono:</p>
<ul>
<li><b>Unità di analisi</b>: chi o che cosa si studia (studenti, famiglie, classi, comuni).</li>
<li><b>Variabili</b>: caratteristiche che possono assumere valori diversi (ore di sonno, voto, genere, titolo di studio dei genitori). Si distinguono la variabile <b>indipendente</b> (la presunta causa) e la <b>dipendente</b> (l'effetto).</li>
<li><b>Operazionalizzazione</b>: trasformare un concetto astratto (come «benessere» o «integrazione») in qualcosa di osservabile e misurabile (per esempio il numero di amici, il punteggio su una scala di soddisfazione).</li>
<li><b>Tipi di variabili</b>: <b>nominali</b> (categorie senza ordine: città di nascita), <b>ordinali</b> (con ordine ma distanze non misurabili: «poco, abbastanza, molto»), <b>cardinali</b> (numeriche con distanze uguali: età, reddito).</li>
</ul>
<p>Due criteri di qualità:</p>
<ul>
<li><b>Validità</b>: lo strumento misura davvero ciò che intende misurare? Un test di velocità di lettura non misura l'intelligenza.</li>
<li><b>Affidabilità</b> (o fedeltà): ripetendo la misura nelle stesse condizioni si ottiene lo stesso risultato? Una bilancia che segna ogni volta un peso diverso non è affidabile.</li>
</ul>`
    },
    {
      type: "text",
      title: "3. Il metodo quantitativo: questionari, campioni, statistica",
      html: `<p>La ricerca <b>quantitativa</b> usa numeri e statistica. Lo strumento più diffuso è il <b>questionario</b> (o sondaggio): un insieme di domande poste a molte persone nello stesso modo. Si usano:</p>
<ul>
<li><b>domande chiuse</b> (con risposte predefinite, facili da contare) e <b>aperte</b> (risposta libera, più ricca ma difficile da classificare);</li>
<li><b>scale di atteggiamento</b>, come la <b>scala Likert</b> (da Rensis Likert, 1932): «Quanto sei d'accordo? 1 = per nulla, 5 = del tutto»;</li>
<li>attenzione al <b>formulare le domande</b>: evitare quelle che orientano la risposta («Non pensa anche lei che…?»), le doppie («Sei soddisfatto della scuola e dei professori?»), i termini ambigui.</li>
</ul>
<p>Raramente si può intervistare tutta la <b>popolazione</b> (l'insieme che interessa): si estrae un <b>campione</b>. Perché sia <b>rappresentativo</b> deve essere scelto bene:</p>
<ul>
<li><b>Campionamento probabilistico</b>: ogni elemento ha una probabilità nota di essere scelto (estrazione casuale semplice, <b>stratificato</b> per gruppi come età e genere, <b>a grappoli</b>). Permette di stimare l'errore.</li>
<li><b>Campionamento non probabilistico</b> (a quote, di convenienza, a valanga): più facile ma non permette di quantificare l'errore.</li>
</ul>
<p>Un esempio di <b>errore di campionamento</b> celebre: nel 1936 la rivista americana <i>Literary Digest</i> inviò milioni di cartoline (circa 2,4 milioni di risposte) e predisse la vittoria dello sfidante repubblicano Landon su Roosevelt; vinse Roosevelt con un enorme margine. Il campione era numeroso ma <b>distorto</b>: tratto da elenchi telefonici e di proprietari di auto, cioè persone più ricche. George Gallup, con un campione molto più piccolo ma scelto meglio, azzeccò il risultato. Lezione: conta più <b>come</b> si sceglie il campione che quanto è grande.</p>
<p>Il <b>margine d'errore</b> di un sondaggio con campione casuale di <i>n</i> persone è, in modo approssimato e nel caso peggiore, circa <b>1/√n</b> (al livello di confidenza del 95%, esattamente 0,98/√n): con 400 persone circa ±5 punti percentuali, con 1000 circa ±3 punti, con 2500 circa ±2 punti. Raddoppiare la precisione richiede quadruplicare il campione.</p>`
    },
    {
      type: "example",
      title: "Leggere un sondaggio: un caso pratico",
      html: `<p>Un sito pubblica: «Il 62% degli studenti italiani è favorevole al voto a 16 anni. Sondaggio con 800 risposte». Prima di crederci chiediti: <b>chi</b> ha risposto? Se il sondaggio era online, solo chi frequenta il sito e ha voglia di rispondere (campione <i>autoselezionato</i>, non rappresentativo). <b>Come</b> era formulata la domanda? <b>Quando</b> è stato fatto? Con 800 risposte casuali il margine d'errore sarebbe circa ±3,5 punti, quindi il 62% potrebbe essere tra il 58,5% e il 65,5%. Senza queste informazioni, il numero è solo un'impressione, non un dato.</p>`
    },
    {
      type: "widget",
      title: "Metodo quantitativo o qualitativo?",
      widget: "classify",
      options: { groups: ["Quantitativo", "Qualitativo"], items: [
        ["Questionario a 1000 persone con risposte chiuse", 0],
        ["Intervista in profondità a 15 insegnanti", 1],
        ["Osservazione partecipante in un quartiere per un anno", 1],
        ["Analisi statistica dei dati del censimento", 0],
        ["Focus group con genitori di studenti", 1],
        ["Confronto tra tassi di abbandono scolastico nelle regioni", 0]
      ] },
      caption: "Il primo approccio cerca regolarità misurabili, il secondo comprende significati e contesti."
    },
    {
      type: "quiz",
      title: "Controllo rapido (1)",
      questions: [
        { type: "mc", q: "Che cos'è un campione rappresentativo?", options: ["Un sottoinsieme che riproduce le caratteristiche della popolazione", "Il gruppo più numeroso possibile", "Gli amici del ricercatore", "Chi risponde volontariamente online"], answer: 0, explain: "La rappresentatività dipende da come il campione è scelto, non solo dalla sua dimensione." },
        { type: "tf", q: "Una scala Likert chiede di esprimere il grado di accordo con un'affermazione.", answer: true, explain: "Per esempio da 1 (per nulla d'accordo) a 5 (del tutto d'accordo)." },
        { type: "mc", q: "Che cosa significa che uno strumento è «valido»?", options: ["Misura davvero ciò che intende misurare", "Dà sempre lo stesso risultato", "È molto costoso", "È facile da usare"], answer: 0, explain: "La coerenza dei risultati si chiama affidabilità." }
      ]
    },
    {
      type: "text",
      title: "4. Il metodo qualitativo: osservazione, interviste, storie di vita",
      html: `<p>La ricerca <b>qualitativa</b> studia pochi casi in profondità, per capire <b>significati</b>, <b>motivazioni</b> e <b>contesti</b> che i numeri non catturano. Gli strumenti principali:</p>
<ul>
<li><b>Osservazione partecipante</b>: il ricercatore vive per un tempo lungo nel contesto che studia e ne condivide la vita. Il modello è <b>Bronisław Malinowski</b> con i Trobriandesi (1914-1918), da cui <i>Argonauti del Pacifico occidentale</i> (1922). In sociologia, un classico è <i>Street Corner Society</i> di <b>William F. Whyte</b> (1943), sulle bande giovanili di un quartiere italoamericano di Boston.</li>
<li><b>Intervista</b>: <b>strutturata</b> (domande fisse, come un questionario orale), <b>semi-strutturata</b> (una traccia di temi con libertà di approfondire), <b>non strutturata</b> o narrativa (conversazione libera guidata da poche domande).</li>
<li><b>Focus group</b>: discussione guidata tra 6-10 persone su un tema; mostra come le opinioni si formano e si confrontano nel gruppo.</li>
<li><b>Storie di vita</b> e analisi di documenti (lettere, diari, giornali, social): un classico è <i>Il contadino polacco in Europa e in America</i> di <b>Thomas e Znaniecki</b> (1918-1920), basato su lettere di emigranti.</li>
<li><b>Etnografia</b>: descrizione dettagliata della vita di un gruppo, che unisce osservazione, interviste e documenti. Il termine <b>descrizione densa</b> (<i>thick description</i>) è di <b>Clifford Geertz</b>.</li>
<li><b>Scuola di Chicago</b> (anni Venti-Trenta): sociologi come Robert Park studiano la città come «laboratorio sociale», con interviste, osservazione e mappe.</li>
</ul>
<p>I limiti: i risultati sono <b>difficilmente generalizzabili</b> (pochi casi), dipendono dall'interpretazione del ricercatore e richiedono molto tempo. I vantaggi: profondità, scoperta di aspetti imprevisti, voce diretta dei soggetti. Per aumentare l'affidabilità si usa la <b>triangolazione</b>: combinare più metodi, fonti o osservatori sullo stesso problema (per esempio un questionario <i>e</i> alcune interviste).</p>`
    },
    {
      type: "remember",
      title: "Da ricordare: quantità e qualità non sono nemiche",
      html: `<p>Il metodo quantitativo risponde bene a «<b>quanto</b>» e «<b>quanti</b>»; il qualitativo a «<b>come</b>» e «<b>perché</b>». Molte ricerche moderne usano <b>metodi misti</b>: prima interviste per capire quali domande fare, poi un questionario per misurare quanto le risposte sono diffuse, poi altre interviste per spiegare i risultati inattesi. Nel documento di maturità, citare entrambi gli approcci mostra una buona padronanza.</p>`
    },
    {
      type: "text",
      title: "5. Errori tipici e come riconoscerli",
      html: `<p>Alcuni errori ricorrono continuamente nelle ricerche (e nelle notizie):</p>
<ul>
<li><b>Correlazione e causalità</b>: due fenomeni che variano insieme (correlazione) non sono necessariamente uno causa dell'altro. Classico: in estate aumentano sia i gelati venduti sia gli annegamenti, ma i gelati non fanno annegare: c'è una terza variabile (il caldo) che li influenza entrambi. Si parla di <b>correlazione spuria</b> o variabile confondente.</li>
<li><b>Effetto Hawthorne</b>: nelle ricerche condotte tra il 1924 e il 1932 alla Western Electric di Hawthorne (Chicago) si osservò che la produttività cresceva a prescindere dalle condizioni di lavoro: gli operai reagivano soprattutto al <i>fatto di essere osservati</i> (interpretazione discussa dagli storici, ma il termine è rimasto).</li>
<li><b>Effetto Pigmalione</b> (<b>Rosenthal e Jacobson</b>, 1968): le aspettative dell'insegnante possono influenzare i risultati degli alunni. Nell'esperimento, a un gruppo scelto a caso fu detto che i bambini avrebbero avuto «uno sprint di crescita» intellettuale: alla fine alcuni migliorarono di più.</li>
<li><b>Desiderabilità sociale</b>: gli intervistati rispondono ciò che pare «giusto» invece di ciò che pensano.</li>
<li><b>Bias di conferma</b>: il ricercatore cerca solo dati che confermano la propria ipotesi.</li>
<li><b>Generalizzazioni indebite</b>: dall'analisi di un gruppo particolare a tutta la popolazione.</li>
</ul>
<p>Per difendersi servono: <b>gruppi di controllo</b>, campioni casuali, <b>replicazione</b> (altri ricercatori ripetono lo studio), trasparenza sui metodi, <b>revisione tra pari</b> (<i>peer review</i>).</p>`
    },
    {
      type: "example",
      title: "Una ricerca di classe in tre mosse",
      html: `<p>Vuoi capire quanto tempo i tuoi compagni dedicano ai compiti. <b>Mossa 1</b>: definisci la domanda e l'indicatore (minuti di studio a casa in un giorno tipico, non «impegno»). <b>Mossa 2</b>: costruisci un breve questionario anonimo con domande chiare e raccogli le risposte da un campione di classi diverse. <b>Mossa 3</b>: calcola media e mediana (la mediana non si lascia influenzare da pochi valori estremi) e fai tre o quattro interviste per capire <i>perché</i> alcuni studenti studiano molto e altri poco. Con tre mosse hai usato un metodo quantitativo, uno qualitativo e la triangolazione.</p>`
    },
    {
      type: "decision",
      title: "Tu cosa avresti fatto? Lo studio sull'uso dei social",
      html: `<p>Vuoi studiare, per un progetto scolastico, se gli studenti che usano molto i social dormono meno. Hai a disposizione tre modi di procedere.</p>`,
      question: "Quale scelta ti sembra più solida dal punto di vista del metodo?",
      options: [
        { label: "Chiedere ai tuoi amici più stretti di rispondere a un questionario", outcome: "È un campione di convenienza: facile, ma molto probabilmente non rappresentativo. I risultati non si possono generalizzare." },
        { label: "Pubblicare un sondaggio sul tuo profilo e contare chi risponde", outcome: "È un campione autoselezionato: risponde chi ne ha voglia e ti segue. Spesso porta a distorsioni forti." },
        { label: "Prendere casualmente un campione di classi della scuola, usare le stesse domande chiare per tutti, garantire l'anonimato e completare con alcune interviste per capire le ragioni", outcome: "È la scelta migliore: campionamento controllato, strumento standard, tutela della privacy, integrazione quantitativo-qualitativa." }
      ],
      answer: 2,
      explain: "La qualità di una ricerca dipende dal campione, dallo strumento e dal rispetto delle persone coinvolte. Anche così, una correlazione trovata non dimostra una causa."
    },
    {
      type: "text",
      title: "6. L'etica della ricerca",
      html: `<p>Studiare esseri umani comporta responsabilità. Dopo gli orrori degli esperimenti medici nazisti, il <b>Codice di Norimberga</b> (1947) stabilì che la partecipazione a esperimenti richiede il <b>consenso volontario</b> della persona; la <b>Dichiarazione di Helsinki</b> (1964) ha ampliato questi principi alla ricerca biomedica. Oggi nelle scienze umane valgono principi analoghi:</p>
<ul>
<li><b>consenso informato</b>: i partecipanti sanno di che cosa si tratta, come saranno usati i dati e possono ritirarsi;</li>
<li><b>anonimato e riservatezza</b>: i dati non devono permettere di identificare le persone, anche in applicazione del <b>GDPR</b> (regolamento europeo sulla protezione dei dati, in vigore dal 2018);</li>
<li><b>non maleficenza</b>: non causare danni fisici o psicologici;</li>
<li><b>trasparenza</b> sui metodi e sui finanziamenti;</li>
<li>cautela con i <b>minori</b> e le persone fragili (il consenso dei genitori);</li>
<li><b>comitati etici</b> che valutano preventivamente le ricerche.</li>
</ul>
<p>Due casi famosi mostrano perché: l'<b>esperimento di Milgram</b> (1961-1963, Yale), in cui persone comuni somministravano a un «allievo» (un attore) scosse elettriche simulate sempre più forti su ordine di un'autorità, rivelò quanto sia diffusa l'obbedienza, ma fece soffrire molto i partecipanti. L'<b>esperimento della prigione di Stanford</b> (1971, Zimbardo), che assegnava a studenti ruoli di guardie e prigionieri, fu interrotto in pochi giorni e oggi è molto criticato per carenze di metodo e di etica. Dopo questi casi sono state introdotte regole più severe.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la ricerca",
      intro: "Tre immagini per fissare metodi, campioni e causalità.",
      tabs: [
        { label: "🍲 La zuppa", html: `<p>Per capire se una zuppa è salata non serve mangiarla tutta: basta un cucchiaio, ma <b>dopo aver mescolato bene</b>. Il <b>campione</b> è il cucchiaio, la <b>popolazione</b> la pentola. Se assaggi la superficie senza mescolare (campione distorto), la risposta sarà sbagliata anche se hai assaggiato molte volte. Il <b>campionamento casuale</b> è il modo di «mescolare la zuppa».</p>` },
        { label: "📷 Foto o film", html: `<p>La ricerca quantitativa è come una <b>fotografia a larga inquadratura</b>: mostra molti elementi, ma poco dettaglio sui singoli. La qualitativa è come un <b>film</b> su pochi personaggi, ricco di sfumature ma che non rappresenta tutti. Un buon lavoro unisce panorama e primo piano: prima si capisce dove guardare, poi si guarda da vicino.</p>`, svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="200" fill="#f8fafc"/><rect x="40" y="30" width="230" height="130" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/><g fill="#1d4ed8"><circle cx="70" cy="60" r="5"/><circle cx="100" cy="85" r="5"/><circle cx="130" cy="55" r="5"/><circle cx="160" cy="100" r="5"/><circle cx="190" cy="70" r="5"/><circle cx="220" cy="120" r="5"/><circle cx="90" cy="130" r="5"/><circle cx="240" cy="55" r="5"/><circle cx="140" cy="135" r="5"/></g><text x="155" y="185" font-size="14" text-anchor="middle" fill="#1e293b">quantitativo: molti casi</text><rect x="330" y="30" width="230" height="130" rx="8" fill="#fef9c3" stroke="#a16207" stroke-width="3"/><circle cx="445" cy="95" r="45" fill="#fde68a" stroke="#a16207" stroke-width="3"/><circle cx="445" cy="95" r="18" fill="#a16207"/><text x="445" y="185" font-size="14" text-anchor="middle" fill="#1e293b">qualitativo: pochi casi, in profondità</text></svg>` },
        { label: "🔗 Causa o coincidenza?", html: `<p>Se noti che i giorni in cui ti porti l'ombrello è più probabile che piova, non è l'ombrello a far piovere: sono <b>entrambi</b> effetti delle nuvole. Prima di dire «A causa B», chiediti: (1) <b>A viene prima di B?</b> (2) c'è una <b>terza variabile</b> che influenza entrambi? (3) potrebbe essere B a causare A (causalità inversa)? (4) è solo <b>coincidenza</b>? Gli esperimenti con gruppo di controllo e assegnazione casuale sono il modo più forte per rispondere.</p>` }
      ]
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il «paradosso del pilota»?",
      html: `<p>Nella seconda guerra mondiale gli statistici studiarono i bombardieri tornati alla base, segnando dove c'erano più fori di proiettile, per decidere dove rinforzare la corazza. Il matematico <b>Abraham Wald</b> osservò che bisognava rinforzare proprio le parti <b>senza</b> fori: gli aerei colpiti lì non erano tornati! È un esempio di <b>bias di sopravvivenza</b>: si guarda solo ciò che è sopravvissuto alla selezione. Lo stesso errore si ha quando si studiano solo le persone di successo per capire «il segreto del successo», ignorando quelle che hanno fatto le stesse scelte e sono fallite.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… anche la tua scuola fa ricerca?",
      html: `<p>In Italia l'<b>INVALSI</b> (Istituto nazionale per la valutazione del sistema educativo di istruzione e di formazione) somministra ogni anno prove standardizzate a milioni di studenti (italiano, matematica, inglese) e le usa per studiare le disuguaglianze tra territori e scuole. L'<b>ISTAT</b> raccoglie dati sociali (il censimento, le indagini sulle famiglie). A livello internazionale l'<b>OCSE</b> conduce l'indagine <b>PISA</b> sulle competenze dei quindicenni, ripetuta ogni tre anni dal 2000. Sono grandi ricerche quantitative: anche il tuo compito in classe contribuisce a una statistica.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: la ricerca nelle scienze umane",
      nodes: [
        { id: "ric", label: "Ricerca sociale", x: 50, y: 6, color: "#3b82f6", html: "Insieme di metodi per studiare in modo controllato fenomeni umani e sociali.", why: "Serve a passare dal senso comune a conoscenze verificate, riducendo pregiudizi e impressioni." },
        { id: "qua", label: "Quantitativo", x: 14, y: 42, color: "#10b981", html: "Questionari, statistica, campioni: misura e confronta.", why: "Nasce con Durkheim e la statistica sociale: le regolarità si vedono solo su molti casi." },
        { id: "qual", label: "Qualitativo", x: 50, y: 45, color: "#f59e0b", html: "Osservazione partecipante, interviste, focus group, storie di vita.", why: "Nasce con l'antropologia (Malinowski) e la Scuola di Chicago: per capire una cultura bisogna viverci e ascoltare i suoi membri." },
        { id: "cam", label: "Campione e misura", x: 86, y: 42, color: "#ef4444", html: "Popolazione, campione, variabili, validità, affidabilità, margine d'errore.", why: "Un campione mal scelto distorce i risultati (Literary Digest, 1936) più di quanto un campione grande li corregga." },
        { id: "err", label: "Errori e bias", x: 28, y: 82, color: "#8b5cf6", html: "Correlazione e causa, effetto Hawthorne, Pigmalione, desiderabilità sociale, bias di sopravvivenza.", why: "Il ricercatore e i soggetti influenzano la ricerca: la scienza richiede di conoscere questi effetti per controllarli." },
        { id: "eti", label: "Etica", x: 72, y: 82, color: "#0ea5e9", html: "Consenso informato, anonimato, non maleficenza, comitati etici.", why: "Nasce dalle violazioni del Novecento (Norimberga) e da esperimenti discussi come quello di Milgram." }
      ],
      edges: [["ric", "qua", "approccio"], ["ric", "qual", "approccio"], ["qua", "cam", "usa"], ["ric", "err", "attenzione a"], ["ric", "eti", "vincolata da"], ["qua", "qual", "si integrano"]]
    },
    {
      type: "quiz",
      title: "Controllo rapido (2)",
      questions: [
        { type: "mc", q: "Che cosa è l'effetto Pigmalione?", options: ["Le aspettative dell'insegnante influenzano i risultati degli alunni", "Il bisogno di dormire", "Una legge sulla stampa", "Un'illusione ottica"], answer: 0, explain: "Studiato da Rosenthal e Jacobson nel 1968." },
        { type: "tf", q: "Una correlazione tra due variabili dimostra sempre che una è causa dell'altra.", answer: false, explain: "Può esserci una terza variabile o una coincidenza." },
        { type: "mc", q: "Quale studioso è associato all'osservazione partecipante tra i Trobriandesi?", options: ["Malinowski", "Durkheim", "Weber", "Likert"], answer: 0, explain: "Visse tra loro dal 1914 al 1918 e scrisse Argonauti del Pacifico occidentale." }
      ]
    }
  ],
  glossary: [
    { t: "Popolazione e campione", d: "L'insieme che interessa studiare e il sottoinsieme effettivamente osservato." },
    { t: "Variabile", d: "Caratteristica che può assumere valori diversi (età, voto, reddito)." },
    { t: "Operazionalizzazione", d: "Trasformazione di un concetto astratto in indicatori osservabili e misurabili." },
    { t: "Validità e affidabilità", d: "Lo strumento misura ciò che intende misurare / dà risultati coerenti se ripetuto." },
    { t: "Scala Likert", d: "Scala di atteggiamento (per esempio da 1 a 5) per misurare il grado di accordo." },
    { t: "Osservazione partecipante", d: "Il ricercatore vive nel contesto studiato condividendone la vita (Malinowski)." },
    { t: "Triangolazione", d: "Uso di più metodi, fonti o ricercatori sullo stesso problema." },
    { t: "Correlazione spuria", d: "Relazione tra due variabili dovuta a una terza variabile o al caso, non a causalità." },
    { t: "Consenso informato", d: "Accordo libero del partecipante dopo aver ricevuto informazioni complete sulla ricerca." },
    { t: "Bias di sopravvivenza", d: "Errore di considerare solo i casi che hanno superato una selezione, ignorando gli altri." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Perché Durkheim è considerato un modello di ricerca quantitativa?", options: ["Nel Suicidio confrontò tassi statistici di gruppi diversi per spiegare un fenomeno sociale", "Perché intervistò un solo suicida", "Perché scrisse un romanzo", "Perché non usava dati"], answer: 0, explain: "Mostrò che i tassi di suicidio dipendono dall'integrazione sociale." },
      { type: "mc", q: "Qual è la differenza tra variabile indipendente e dipendente?", options: ["La prima è la presunta causa, la seconda l'effetto", "La prima è più importante", "Sono la stessa cosa", "La seconda è sempre numerica"], answer: 0, explain: "Per esempio le ore di sonno (indipendente) e il voto (dipendente)." },
      { type: "mc", q: "Perché il sondaggio del Literary Digest nel 1936 sbagliò, pur con milioni di risposte?", options: ["Il campione era distorto verso persone più ricche", "Perché non c'erano elettori", "Perché i giornali non lo pubblicarono", "Perché usava domande aperte"], answer: 0, explain: "Non conta solo la dimensione del campione, ma come viene scelto." },
      { type: "num", q: "Qual è, in punti percentuali, il margine d'errore approssimato (1/√n) di un sondaggio casuale su 400 persone?", answer: 5, tol: 0.5, explain: "1/√400 = 1/20 = 5%; al 95% di confidenza è circa 4,9 punti." },
      { type: "tf", q: "Un campione autoselezionato (chi risponde volontariamente a un sondaggio online) è generalmente rappresentativo della popolazione.", answer: false, explain: "Risponde chi ha interesse e accesso: il campione è distorto." },
      { type: "mc", q: "Quale metodo prevede di vivere a lungo nel contesto studiato?", options: ["Osservazione partecipante", "Questionario telefonico", "Analisi del censimento", "Sondaggio online"], answer: 0, explain: "È tipico di antropologia ed etnografia." },
      { type: "mc", q: "Che cos'è l'effetto Hawthorne?", options: ["Cambiamento del comportamento perché ci si sa osservati", "Il malessere degli operai", "Un tipo di campione", "Una legge sul lavoro"], answer: 0, explain: "Emerso dalle ricerche alla Western Electric di Hawthorne tra 1924 e 1932." },
      { type: "mc", q: "Quale principio etico richiede che i partecipanti siano informati e possano ritirarsi?", options: ["Consenso informato", "Triangolazione", "Operazionalizzazione", "Randomizzazione"], answer: 0, explain: "Fu affermato dal Codice di Norimberga (1947) e ripreso da molti codici etici." },
      { type: "tf", q: "Il metodo qualitativo permette facilmente di generalizzare i risultati a tutta la popolazione.", answer: false, explain: "Studia pochi casi in profondità: offre ricchezza di significati ma generalizzabilità limitata." },
      { type: "order", q: "Metti in ordine le fasi di una ricerca", items: ["Formulare la domanda e l'ipotesi", "Scegliere metodo e campione", "Raccogliere i dati", "Analizzare i dati", "Interpretare e trarre conclusioni"], explain: "Il ciclo poi riparte con nuove domande." }
    ]
  }
});
