TOPIC('it', {
  id: "l3-fil-aristotele",
  title: "Aristotele",
  intro: "Se Platone guarda verso l'alto, al mondo delle idee, <b>Aristotele</b> (che nel famoso affresco di Raffaello gli sta accanto e indica la terra) guarda il mondo che ci circonda: piante, animali, città, costituzioni, poemi. Fu il primo grande <b>enciclopedista</b>: inventò la <b>logica</b>, studiò la fisica, la biologia, la politica, l'etica, la poesia. Per secoli fu chiamato semplicemente «il Filosofo». In questa lezione scopri come costruì un sistema in cui le idee non stanno in un altro mondo, ma <b>dentro</b> le cose.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Vita e opere",
      html: `<p><b>Aristotele</b> nacque a <b>Stagira</b> (Calcidica) nel 384 a.C.; il padre era medico alla corte macedone. A 17 anni arrivò ad Atene ed entrò nell'<b>Accademia</b> di Platone, dove rimase circa vent'anni, fino alla morte del maestro (348/347 a.C.). Poi viaggiò (Asso, Lesbo, dove studiò la biologia marina) e fu chiamato dal re Filippo a Pella per essere <b>precettore del giovane Alessandro</b> (il futuro Alessandro Magno). Nel <b>335 a.C.</b> tornò ad Atene e fondò una scuola propria, il <b>Liceo</b> (dal tempio di Apollo Lykeios), detta anche scuola <i>peripatetica</i> dal «passeggiare» (<i>peripatéo</i>) durante le lezioni. Dopo la morte di Alessandro (323 a.C.), per l'ostilità antimacedone, lasciò Atene e si ritirò a Calcide, in Eubea, dove morì nel <b>322 a.C.</b></p>
<p>Dei suoi dialoghi giovanili, di stile letterario, ci restano frammenti; abbiamo invece gli scritti «<b>acroamatici</b>», cioè le lezioni e gli appunti per la scuola, ordinati poi da editori: <i>Organon</i> (logica), <i>Fisica</i>, <i>Metafisica</i>, <i>Etica Nicomachea</i>, <i>Politica</i>, <i>Poetica</i>, <i>Retorica</i>, <i>Dell'anima</i>, trattati di zoologia.</p>`
    },
    {
      type: "decision",
      title: "335 a.C.: restare all'Accademia o fondare il Liceo?",
      html: `<p>Sei Aristotele, tornato ad Atene dopo anni di viaggi e di insegnamento ad Alessandro. L'Accademia è ora guidata da altri e continua la tradizione platonica, con molta matematica e teoria delle idee. Tu hai invece raccolto dati sulle specie animali, sulle costituzioni delle città (ne studierai 158) e pensi che la conoscenza parta dall'osservazione.</p>`,
      question: "Che cosa scegli?",
      options: [
        { label: "Torno nell'Accademia e continuo la ricerca di Platone.", outcome: "Resteresti nella tradizione, ma sarebbe difficile portare avanti la tua critica alle idee separate." },
        { label: "Fondo una scuola mia, con biblioteca e ricerche sul campo.", outcome: "È la scelta di Aristotele: il Liceo diventa un centro di ricerca empirica e di sapere enciclopedico." },
        { label: "Lascio la filosofia e mi dedico alla medicina.", outcome: "Il padre era medico, e la biologia lo interessa molto: ma non avresti costruito il sistema che ha influenzato secoli." }
      ],
      answer: 1,
      explain: "Nel 335 a.C. Aristotele fondò il Liceo: tra i primi centri organizzati di ricerca collettiva, con raccolte di dati, biblioteca e specializzazioni. L'Accademia continuò accanto, con orientamento più matematico e platonico."
    },
    {
      type: "text",
      title: "2. La critica alle idee e la sostanza",
      html: `<p>Aristotele critica il maestro (la formula «amico di Platone, ma più amico della verità» è attribuita a lui in forma tarda, ma rende l'idea): se le idee esistono in un mondo separato, come spiegano le cose di quaggiù? Non basta dire che le cose «partecipano» alle idee: è una metafora, non una spiegazione. E raddoppiare il mondo non aiuta, perché serve poi spiegare il rapporto tra i due (l'argomento del «terzo uomo»).</p>
<p>Per Aristotele le <b>forme</b> non esistono separate: sono <b>nelle cose</b>. La realtà fondamentale è la <b>sostanza</b> (<i>ousía</i>): l'individuo concreto, come questo cavallo o questo uomo. Ogni sostanza è un <b>sinolo</b> (<i>sýnolon</i>, «insieme») di due principi:</p>
<ul>
<li><b>materia</b> (<i>hýle</i>): ciò di cui la cosa è fatta;</li>
<li><b>forma</b> (<i>morphé</i>): ciò che la cosa è, la sua essenza e struttura.</li>
</ul>
<p>Una statua è bronzo (materia) con una certa figura (forma): in una statua di Atena, il bronzo potrebbe avere altre forme; la figura non esiste senza bronzo. Allo stesso modo, il corpo è la materia e l'anima è la forma di un essere vivente: per Aristotele l'anima non è un'entità separata, ma il principio di organizzazione del corpo (con una questione aperta sull'intelletto).</p>
<p>Le <b>categorie</b> (nell'<i>Organon</i>) sono i modi in cui si dice l'essere: sostanza, quantità, qualità, relazione, luogo, tempo, e altre, fino a dieci.</p>`
    },
    {
      type: "text",
      title: "3. Atto, potenza e le quattro cause",
      html: `<p>Come si spiega il <b>divenire</b>, che aveva fatto tanto discutere Eraclito e Parmenide? Con la coppia <b>potenza e atto</b>:</p>
<ul>
<li><b>potenza</b> (<i>dýnamis</i>): la capacità di diventare qualcosa (il seme è «in potenza» albero);</li>
<li><b>atto</b> (<i>enérgeia</i>): la realizzazione di quella capacità (l'albero è l'atto del seme).</li>
</ul>
<p>Il cambiamento è passaggio dalla potenza all'atto: non nasce dal nulla né dal non essere assoluto, ma da qualcosa che già c'era in potenza. Così Aristotele risolve il problema di Parmenide.</p>
<p>Per spiegare qualunque cosa, bisogna indicarne le <b>quattro cause</b>:</p>
<table>
<tr><th>Causa</th><th>Domanda</th><th>Esempio: una statua</th></tr>
<tr><td><b>Materiale</b></td><td>Di che cosa è fatta?</td><td>il bronzo</td></tr>
<tr><td><b>Formale</b></td><td>Che cosa è?</td><td>la figura (Atena)</td></tr>
<tr><td><b>Efficiente</b></td><td>Chi o che cosa la produce?</td><td>lo scultore</td></tr>
<tr><td><b>Finale</b></td><td>A che scopo?</td><td>onorare la dea, ornare il tempio</td></tr>
</table>
<p>In natura domina la <b>causa finale</b>: Aristotele ha una visione <b>teleologica</b> (da <i>télos</i>, «fine»): ogni essere tende alla propria realizzazione; il seme tende a diventare albero. È un punto su cui la scienza moderna avrebbe cambiato strada.</p>`
    },
    {
      type: "svg",
      title: "Le quattro cause",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#7c2d12">Una statua, quattro perché</text>
<rect x="20" y="55" width="260" height="95" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="150" y="85" font-size="16" font-weight="bold" text-anchor="middle" fill="#78350f">Materiale</text>
<text x="150" y="115" font-size="15" text-anchor="middle" fill="#0f172a">il bronzo</text>
<rect x="320" y="55" width="260" height="95" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="450" y="85" font-size="16" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Formale</text>
<text x="450" y="115" font-size="15" text-anchor="middle" fill="#0f172a">la figura di Atena</text>
<rect x="20" y="170" width="260" height="95" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="150" y="200" font-size="16" font-weight="bold" text-anchor="middle" fill="#14532d">Efficiente</text>
<text x="150" y="230" font-size="15" text-anchor="middle" fill="#0f172a">lo scultore al lavoro</text>
<rect x="320" y="170" width="260" height="95" rx="10" fill="#fae8ff" stroke="#a21caf" stroke-width="2"/>
<text x="450" y="200" font-size="16" font-weight="bold" text-anchor="middle" fill="#701a75">Finale</text>
<text x="450" y="230" font-size="15" text-anchor="middle" fill="#0f172a">onorare la dea</text>
</svg>`,
      caption: "Per spiegare una cosa, Aristotele chiede tutti e quattro i perché."
    },
    {
      type: "quiz",
      title: "Mini-quiz: sostanza e cause",
      questions: [
        { type: "mc", q: "Che cos'è il sinolo?", options: ["L'unione di materia e forma", "Il mondo delle idee", "Una forma di governo"], answer: 0, explain: "Ogni sostanza concreta è un sinolo di materia e forma." },
        { type: "tf", q: "Per Aristotele le forme esistono in un mondo separato dalle cose.", answer: false, explain: "Esistono nelle cose: questa è la sua critica a Platone." },
        { type: "text", q: "Come si chiama la causa «a che scopo» di una cosa?", answer: ["finale", "causa finale", "la finale"], explain: "La causa finale (télos)." }
      ]
    },
    {
      type: "example",
      title: "Esempio: potenza e atto in cucina",
      html: `<p>Farina, uova e zucchero sono una torta <b>in potenza</b>; il pasticciere è la causa efficiente, la ricetta la forma, il piacere di chi mangia la causa finale. La torta cotta è l'<b>atto</b>. Ma anche la torta è in potenza qualcos'altro (per esempio briciole): ogni atto è potenza rispetto a un atto successivo, finché si arriva all'atto puro.</p>`
    },
    {
      type: "text",
      title: "4. Logica e metafisica",
      html: `<p>Aristotele fonda la <b>logica</b> come strumento (<i>órganon</i>) di ogni scienza. Studia le forme corrette del ragionamento. Il cuore è il <b>sillogismo</b>: un argomento in cui, date due premesse, segue necessariamente una conclusione. L'esempio classico:</p>
<p style="text-align:center"><i>Tutti gli uomini sono mortali.<br>Socrate è un uomo.<br>Dunque Socrate è mortale.</i></p>
<p>Il sillogismo funziona grazie ai <b>termini medi</b> (qui «uomo»), che collegano soggetto e predicato. Aristotele formula anche i principi di ogni ragionamento: il <b>principio di non contraddizione</b> (la stessa cosa non può, nello stesso tempo e sotto lo stesso aspetto, essere e non essere) e il principio del terzo escluso.</p>
<p>La <b>metafisica</b> (il termine nasce dall'ordinamento dei suoi scritti, «dopo la fisica») è la «scienza dell'essere in quanto essere» o <i>filosofia prima</i>. L'essere «si dice in molti modi», ma tutti riferiti alla <b>sostanza</b>. Vi si studia anche la causa suprema del movimento.</p>
<p>Tutto ciò che si muove è mosso da altro; per non risalire all'infinito, Aristotele pone un <b>Motore immobile</b>: puro atto, senza materia, eterno, che muove il cosmo non spingendolo ma <b>attirandolo come ciò che è amato</b> (causa finale). La sua attività è «pensiero di pensiero» (<i>nóesis noéseos</i>). Per Aristotele è il fondamento dell'ordine cosmico; non è il Dio creatore e personale delle religioni monoteiste.</p>`
    },
    {
      type: "text",
      title: "5. Fisica e cosmologia",
      html: `<p>Per Aristotele la natura (<i>physis</i>) è l'insieme degli enti che hanno in sé il principio del proprio movimento. Il «movimento» (<i>kínesis</i>) è ogni cambiamento: di luogo, di quantità, di qualità, di sostanza. Il cosmo, finito e <b>geocentrico</b>, ha due regioni:</p>
<ul>
<li><b>mondo sublunare</b> (dalla Luna in giù): terra, acqua, aria, fuoco; qui c'è generazione e corruzione. Ogni elemento ha un <b>luogo naturale</b>: i corpi pesanti scendono verso il centro, il fuoco sale;</li>
<li><b>mondo celeste</b>: sfere cristalline concentriche, fatte di un quinto elemento, l'<b>etere</b> (<i>quintessenza</i>), incorruttibile, con moto circolare eterno.</li>
</ul>
<p>Questa fisica fu dominante fino a Galileo (XVII secolo). Aristotele fu anche un osservatore attento in <b>biologia</b>: classificò centinaia di specie animali e descrisse, per esempio, lo sviluppo dell'embrione del pulcino.</p>`
    },
    {
      type: "text",
      title: "6. Etica: la felicità e il giusto mezzo",
      html: `<p>Nell'<i>Etica Nicomachea</i> (dedicata al figlio Nicomaco, o al padre) Aristotele si chiede: qual è il <b>fine</b> dell'azione umana? Il bene supremo, che tutti cercano per sé e non in vista di altro, è la <b>felicità</b> (<i>eudaimonía</i>). Non è piacere o ricchezza, ma <b>attività dell'anima secondo virtù</b>: realizzare la funzione propria dell'uomo, che è la <b>ragione</b>. Servono anche beni esteriori (salute, amici, una certa agiatezza): «una rondine non fa primavera».</p>
<p>Le virtù sono di due tipi:</p>
<ul>
<li><b>dianoetiche</b> (intellettuali): sapienza, intelligenza, e la <b>saggezza pratica</b> (<i>phrónesis</i>), che sa scegliere ciò che è giusto in ogni situazione;</li>
<li><b>etiche</b> (del carattere): coraggio, temperanza, generosità, giustizia. Si acquisiscono con l'<b>abitudine</b> (<i>éthos</i>): si diventa coraggiosi compiendo atti coraggiosi.</li>
</ul>
<p>Ogni virtù etica è un <b>giusto mezzo</b> (<i>mesótes</i>) tra due vizi, uno per eccesso e uno per difetto. Non una media aritmetica, ma ciò che è giusto «per noi», in rapporto alla situazione.</p>
<table>
<tr><th>Difetto</th><th>Virtù</th><th>Eccesso</th></tr>
<tr><td>Viltà</td><td><b>Coraggio</b></td><td>Temerarietà</td></tr>
<tr><td>Insensibilità</td><td><b>Temperanza</b></td><td>Intemperanza</td></tr>
<tr><td>Avarizia</td><td><b>Generosità</b></td><td>Prodigalità</td></tr>
</table>
<p>Contro Socrate (per cui bastava conoscere il bene), Aristotele osserva che si può sapere cosa è bene e non farlo (<i>akrasía</i>, debolezza della volontà): occorre educare il carattere. La forma più alta di vita è quella <b>contemplativa</b> (<i>theoría</i>), l'esercizio dell'intelletto.</p>`
    },
    {
      type: "example",
      title: "Esempio: il giusto mezzo allo stadio",
      html: `<p>Il tuo compagno di squadra viene aggredito da un avversario più grosso. Se scappi per paura sei <b>vile</b>; se ti lanci a pugni senza pensare sei <b>temerario</b>; se intervieni per difenderlo con prudenza, chiamando l'arbitro e mettendoti di mezzo, agisci con <b>coraggio</b>. Non c'è una formula: dipende dalla situazione e solo la saggezza pratica la riconosce. Per questo la virtù si impara con l'esperienza, come si impara a suonare: suonando.</p>`
    },
    {
      type: "text",
      title: "7. Politica e poetica",
      html: `<p>«L'uomo è per natura un <b>animale politico</b>» (<i>zôon politikón</i>): nasce per vivere in comunità. La <b>polis</b> precede l'individuo come il tutto precede la parte, perché solo in essa si raggiunge una vita buona. Aristotele studia 158 costituzioni di città greche (ci è giunta quella di Atene). Classifica i governi in base a chi governa (uno, pochi, molti) e al fine (bene comune o interesse di chi governa):</p>
<table>
<tr><th>Governa</th><th>Forma buona</th><th>Forma degenerata</th></tr>
<tr><td>Uno</td><td>Monarchia</td><td>Tirannide</td></tr>
<tr><td>Pochi</td><td>Aristocrazia</td><td>Oligarchia</td></tr>
<tr><td>Molti</td><td>Politìa</td><td>Democrazia (demagogica)</td></tr>
</table>
<p>La migliore in pratica è, per lui, una <b>politìa</b> con un forte ceto medio, che evita gli estremi dei troppo ricchi e dei troppo poveri. Contrariamente a Platone difende la proprietà privata e la famiglia. Giustificò però la schiavitù «naturale» e l'inferiorità della donna: limiti della sua epoca che non vanno ignorati.</p>
<p>Nella <i>Poetica</i>, analizzando la <b>tragedia</b>, la definisce imitazione di un'azione seria che, suscitando pietà e paura, produce la <b>catarsi</b> (purificazione) di tali emozioni.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: il sistema aristotelico",
      nodes: [
        { id: "critica", label: "Critica a Platone", x: 50, y: 5, color: "#ef4444", html: "Le forme non sono separate dalle cose.", why: "Aristotele vuole spiegare il mondo concreto, non raddoppiarlo: il punto di partenza è l'esperienza." },
        { id: "sostanza", label: "Sostanza (sinolo)", x: 20, y: 32, color: "#7c3aed", html: "Materia + forma.", why: "È la realtà concreta e individuale: le idee diventano forme immanenti alle cose." },
        { id: "attopot", label: "Atto e potenza", x: 80, y: 32, color: "#0ea5e9", html: "Il divenire come realizzazione.", why: "Risponde a Parmenide: il cambiamento non viene dal nulla, ma da una possibilità già presente (potenza)." },
        { id: "cause", label: "Quattro cause", x: 12, y: 62, color: "#16a34a", html: "Materiale, formale, efficiente, finale.", why: "Per conoscere veramente bisogna rispondere a tutti i «perché»; domina la causa finale (teleologia)." },
        { id: "motore", label: "Motore immobile", x: 50, y: 62, color: "#f59e0b", html: "Puro atto, pensiero di pensiero.", why: "Per evitare un regresso all'infinito delle cause del moto serve un primo motore, che muove come oggetto d'amore." },
        { id: "etica", label: "Etica e politica", x: 88, y: 62, color: "#14b8a6", html: "Felicità, giusto mezzo, animale politico.", why: "L'uomo, come ogni ente, ha una funzione (la ragione) e un fine (eudaimonía), che si realizza nella polis." }
      ],
      edges: [
        ["critica", "sostanza", "propone"],
        ["sostanza", "attopot", "spiega il moto"],
        ["sostanza", "cause", "analizza"],
        ["attopot", "motore", "culmina"],
        ["attopot", "etica", "applica"]
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire Aristotele",
      intro: "Prova a vedere gli stessi concetti da altre prospettive.",
      tabs: [
        {
          label: "🌰 Il seme e la quercia",
          html: `<p>La ghianda è una quercia <b>in potenza</b>: ha già dentro di sé il progetto (forma), ma non è ancora quercia. La crescita è il passaggio all'<b>atto</b>. La causa finale è la quercia adulta, che «spiega» perché la ghianda cresce come cresce. Per Aristotele la natura è ordinata così: non a caso, ma verso un fine.</p>`
        },
        {
          label: "⚖️ Platone e Aristotele",
          html: `<table>
<tr><th></th><th>Platone</th><th>Aristotele</th></tr>
<tr><td>Idee/forme</td><td>separate, nel mondo intelligibile</td><td>immanenti alle cose</td></tr>
<tr><td>Conoscenza</td><td>reminiscenza</td><td>parte dall'esperienza sensibile</td></tr>
<tr><td>Anima</td><td>immortale, separabile</td><td>forma del corpo</td></tr>
<tr><td>Politica</td><td>governano i filosofi, comunanza dei beni</td><td>politìa, proprietà privata</td></tr>
<tr><td>Metodo</td><td>dialettica, matematica</td><td>osservazione, classificazione, logica</td></tr>
</table>`
        },
        {
          label: "🃏 Flashcard",
          html: `<p>Ripassa i concetti.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "Sinolo", back: "Unione di materia e forma" },
            { front: "Potenza", back: "Capacità di diventare qualcosa" },
            { front: "Atto", back: "Realizzazione della potenza" },
            { front: "Eudaimonia", back: "Felicità come attività secondo virtù" },
            { front: "Phronesis", back: "Saggezza pratica" },
            { front: "Catarsi", back: "Purificazione delle emozioni attraverso la tragedia" }
          ] }
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lo sapevi che...?",
      html: `<p>Nel Medioevo molti testi di Aristotele, perduti in Occidente, furono conservati e commentati dai filosofi arabi (<b>Avicenna</b>, <b>Averroè</b>) e poi ritradotti in latino: la loro scoperta fu decisiva per la filosofia scolastica e per Tommaso d'Aquino. Dante lo chiama «il maestro di color che sanno» (<i>Inferno</i>, IV).</p>`
    },
    {
      type: "curiosity",
      title: "Un errore che durò duemila anni",
      html: `<p>Aristotele riteneva che i corpi più pesanti cadano più in fretta. Per secoli fu ripetuto, finché Galileo (con esperimenti e ragionamenti, e non, probabilmente, dalla torre di Pisa) mostrò che nel vuoto cadono tutti allo stesso modo. Sbagliare in fisica non toglie nulla alla grandezza del metodo che Aristotele inaugurò: osservare, classificare, argomentare.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Aristotele (Stagira 384 - Calcide 322 a.C.): allievo di Platone, precettore di Alessandro, fondatore del <b>Liceo</b> (335 a.C.).</li>
<li><b>Sostanza</b> = sinolo di materia e forma; <b>atto e potenza</b> spiegano il divenire; <b>quattro cause</b>.</li>
<li><b>Logica</b>: sillogismo; principio di non contraddizione. <b>Metafisica</b>: Motore immobile.</li>
<li><b>Etica</b>: felicità come attività secondo virtù, <b>giusto mezzo</b>.</li>
<li><b>Politica</b>: uomo animale politico; monarchia, aristocrazia, politìa e loro degenerazioni.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: etica e politica",
      questions: [
        { type: "mc", q: "Che cos'è la virtù etica per Aristotele?", options: ["Un giusto mezzo tra eccesso e difetto", "La conoscenza del bene", "L'obbedienza alle leggi"], answer: 0, explain: "Es.: il coraggio sta tra viltà e temerarietà." },
        { type: "tf", q: "Per Aristotele l'uomo è un animale politico.", answer: true, explain: "Realizza la sua natura nella polis." },
        { type: "order", q: "Metti in ordine di tempo.", items: ["Nascita di Aristotele", "Ingresso nell'Accademia", "Precettore di Alessandro", "Fondazione del Liceo"], explain: "384, 367, 343 circa, 335 a.C." }
      ]
    }
  ],
  glossary: [
    { t: "Sinolo", d: "L'unione concreta di materia e forma che costituisce ogni sostanza." },
    { t: "Atto e potenza", d: "Realizzazione e possibilità: il divenire è passaggio dalla potenza all'atto." },
    { t: "Sillogismo", d: "Ragionamento di due premesse e una conclusione che ne discende necessariamente." },
    { t: "Teleologia", d: "Spiegazione dei fenomeni tramite il fine (télos)." },
    { t: "Motore immobile", d: "Causa prima del moto del cosmo, puro atto." },
    { t: "Eudaimonia", d: "Felicità come attività secondo virtù." },
    { t: "Phronesis", d: "Saggezza pratica, che sceglie l'azione giusta nel caso concreto." },
    { t: "Catarsi", d: "Purificazione delle passioni (pietà e paura) per mezzo della tragedia." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale è la critica principale di Aristotele a Platone?", options: ["Le forme non esistono separate dalle cose", "L'anima è immortale", "Lo Stato deve avere filosofi"], answer: 0, explain: "Le forme sono immanenti alle cose." },
      { type: "mc", q: "Che cosa spiega il divenire secondo Aristotele?", options: ["Il passaggio dalla potenza all'atto", "Il caso", "L'azione degli dèi"], answer: 0, explain: "Il cambiamento è realizzazione di una possibilità." },
      { type: "tf", q: "La causa finale risponde alla domanda «a che scopo?».", answer: true, explain: "È il fine (télos)." },
      { type: "text", q: "Come si chiama la scuola fondata da Aristotele ad Atene?", answer: ["liceo", "il liceo"], explain: "Il Liceo, nel 335 a.C." },
      { type: "mc", q: "Che cosa è il Motore immobile?", options: ["Puro atto, causa del movimento come oggetto d'amore", "Un artigiano divino che crea il mondo", "L'anima del mondo"], answer: 0, explain: "Muove senza essere mosso." },
      { type: "mc", q: "Qual è il fine dell'azione umana per Aristotele?", options: ["La felicità (eudaimonía)", "Il piacere", "Il potere"], answer: 0, explain: "L'attività dell'anima secondo virtù." },
      { type: "mc", q: "Qual è la virtù tra viltà e temerarietà?", options: ["Il coraggio", "La temperanza", "La giustizia"], answer: 0, explain: "È il giusto mezzo." },
      { type: "tf", q: "Per Aristotele i corpi celesti sono fatti di un quinto elemento, l'etere.", answer: true, explain: "Incorruttibile, con moto circolare." },
      { type: "mc", q: "Quale forma di governo buona è governata dai molti?", options: ["Politìa", "Oligarchia", "Tirannide"], answer: 0, explain: "La democrazia è la sua forma degenerata." },
      { type: "mc", q: "Qual è il sillogismo corretto?", options: ["Tutti gli uomini sono mortali; Socrate è uomo; Socrate è mortale", "Alcuni uomini sono greci; Socrate è greco; Socrate è un uomo", "Socrate è uomo; Socrate è greco; tutti sono greci"], answer: 0, explain: "La conclusione segue necessariamente dalle premesse." }
    ]
  }
});
