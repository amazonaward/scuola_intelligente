TOPIC('it', {
  id: "l5-fil-freud",
  title: "Freud e la psicoanalisi",
  intro: "Perché a volte diciamo una parola per un'altra, dimentichiamo proprio l'appuntamento che temiamo, facciamo sogni assurdi? Per <b>Sigmund Freud</b> (1856-1939) non è un caso: dietro la nostra vita cosciente agisce l'<b>inconscio</b>, un mondo di desideri, ricordi e paure che non vogliamo vedere ma che continuano a influenzarci. Medico viennese, Freud inventa la <b>psicoanalisi</b>: una teoria della mente, un metodo di cura (la «cura parlata») e uno strumento per interpretare sogni, arte e società. Insieme a Copernico e a Darwin, ha cambiato il modo in cui l'uomo si vede: l'Io, dice, <b>non è padrone in casa propria</b>.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "1. Il contesto: Vienna fine Ottocento",
      html: `<p><b>Sigmund Freud</b> nasce a Freiberg, in Moravia (oggi Příbor, nella Repubblica Ceca), il <b>6 maggio 1856</b>, da una famiglia ebraica. Cresce a <b>Vienna</b>, capitale dell'impero austro-ungarico, città di straordinaria vivacità culturale (la musica di Mahler, la pittura di Klimt, la letteratura di Schnitzler), dove vivrà quasi tutta la vita. Studia medicina e lavora come <b>neurologo</b>. Dopo un periodo a Parigi (1885-86) alla scuola di <b>Jean-Martin Charcot</b>, che curava l'<b>isteria</b> con l'ipnosi, si convince che molti disturbi nervosi non hanno cause organiche ma <b>psichiche</b>.</p>
<p>Un altro punto di partenza è il lavoro con il medico viennese <b>Josef Breuer</b>, che aveva curato una giovane paziente nota come «<b>Anna O.</b>» (in realtà Bertha Pappenheim) con quella che lei stessa chiamò «<i>talking cure</i>», cura parlata: parlando liberamente dei ricordi collegati ai suoi sintomi, la ragazza ne vedeva scomparire alcuni. Freud e Breuer pubblicano i <i>Studi sull'isteria</i> (<b>1895</b>). Freud abbandona poi l'ipnosi per un metodo nuovo, la <b>libera associazione</b>: il paziente dice tutto quello che gli viene in mente, senza censura, e lo psicoanalista ascolta e interpreta.</p>
<p>La psicoanalisi nasce così, tra la fine dell'Ottocento e l'inizio del Novecento. Nonostante resistenze e scandali, nel 1902 Freud raccoglie a casa sua un gruppo di discepoli (la «Società psicologica del mercoledì»), che diventerà un movimento internazionale. Nel 1938, dopo l'annessione dell'Austria alla Germania nazista, Freud, ormai anziano e malato di cancro, emigra a <b>Londra</b>, dove muore il <b>23 settembre 1939</b>.</p>`
    },
    {
      type: "text",
      title: "2. L'inconscio e la prima topica",
      html: `<p>L'idea che non tutta la mente sia cosciente non è nuova (la ritroviamo in Schopenhauer e in Nietzsche), ma Freud ne fa il centro di una scienza. Nella <b>prima topica</b> (<i>L'interpretazione dei sogni</i>, 1899, datata 1900) divide la mente in tre «luoghi»:</p>
<ul>
<li>il <b>conscio</b>: ciò di cui siamo consapevoli in questo momento;</li>
<li>il <b>preconscio</b>: ciò che non è presente ora ma può diventarlo facilmente (per esempio il tuo numero di telefono, il nome di un amico);</li>
<li>l'<b>inconscio</b>: contenuti (desideri, ricordi, emozioni, soprattutto sessuali e aggressivi) che sono stati <b>rimossi</b> perché dolorosi o inaccettabili. L'inconscio non è inattivo: esercita una pressione continua, che emerge in forme travestite.</li>
</ul>
<p>Il meccanismo che respinge nell'inconscio i contenuti inaccettabili è la <b>rimozione</b>. Ciò che è rimosso <b>non scompare</b>: «ritorna» sotto forma di <b>sintomi</b> (le nevrosi), di <b>sogni</b>, di <b>atti mancati</b> e <b>lapsus</b> (dimenticare un nome, sbagliare una parola, perdere un oggetto) e di <b>motti di spirito</b>. Nella <i>Psicopatologia della vita quotidiana</i> (<b>1901</b>) Freud mostra che questi errori apparentemente casuali hanno un significato.</p>
<p>Un'immagine molto usata è quella dell'<b>iceberg</b>: la parte visibile (coscienza) è piccola, la gran parte (inconscio) sta sotto la superficie. Freud non usò mai propriamente questa immagine, ma rende l'idea.</p>`
    },
    {
      type: "svg",
      title: "La mente come un iceberg",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="100" width="600" height="200" fill="#bfdbfe"/>
<polygon points="300,20 360,100 240,100" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<polygon points="240,100 360,100 440,190 380,270 220,270 160,190" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
<text x="300" y="75" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">CONSCIO</text>
<text x="300" y="135" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">PRECONSCIO</text>
<text x="300" y="215" font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a">INCONSCIO</text>
<text x="300" y="240" font-size="14" text-anchor="middle" fill="#0f172a">desideri, ricordi rimossi</text>
<text x="500" y="105" font-size="14" text-anchor="middle" fill="#1e3a8a">livello dell'acqua</text>
<text x="100" y="60" font-size="15" text-anchor="middle" fill="#334155">visibile</text>
<text x="90" y="220" font-size="15" text-anchor="middle" fill="#1e3a8a">nascosto</text>
</svg>`,
      caption: "La parte cosciente della mente è solo la punta emersa: la maggior parte della vita psichica avviene sotto la superficie."
    },
    {
      type: "text",
      title: "3. I sogni",
      html: `<p>In <i>L'interpretazione dei sogni</i> Freud afferma che il sogno è «la via regia che porta alla conoscenza dell'inconscio». La sua tesi è che ogni sogno è un <b>appagamento, travestito, di un desiderio rimosso</b>. Mentre dormiamo, la censura della coscienza si allenta e i desideri inconsci cercano di emergere; ma per non svegliarci (e per sfuggire alla censura) si travestono. Per questo distingue:</p>
<ul>
<li>il <b>contenuto manifesto</b>: il sogno così come lo ricordiamo e lo raccontiamo (spesso strano, confuso);</li>
<li>il <b>contenuto latente</b>: il significato nascosto, cioè i pensieri e i desideri inconsci che l'analisi permette di scoprire.</li>
</ul>
<p>Il passaggio dal latente al manifesto è opera del <b>lavoro onirico</b>, che usa alcuni meccanismi:</p>
<ol>
<li><b>condensazione</b>: più idee o persone sono fuse in una sola immagine (un volto che è insieme tuo padre e il tuo professore);</li>
<li><b>spostamento</b>: l'emozione si sposta dal contenuto importante a un dettaglio secondario;</li>
<li><b>simbolizzazione</b>: i contenuti sono rappresentati con simboli (Freud ne dà un'interpretazione prevalentemente sessuale, spesso criticata);</li>
<li><b>elaborazione secondaria</b>: la mente ordina il materiale in un racconto più o meno coerente, quando ricorda il sogno.</li>
</ol>
<p>Per interpretare un sogno, l'analista non usa un «dizionario dei simboli», ma chiede al paziente di <b>associare liberamente</b> a ciascun elemento del sogno. Così emerge il significato che quell'elemento ha per <i>quella</i> persona. Oggi le neuroscienze offrono altre spiegazioni del sogno (consolidamento della memoria, attività del cervello durante il sonno REM), ma l'idea che i sogni abbiano un senso personale resta influente nella clinica.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: inconscio e sogni",
      questions: [
        { type: "mc", q: "Che cos'è la rimozione?", options: ["La cancellazione definitiva di un ricordo", "Il meccanismo che respinge nell'inconscio contenuti inaccettabili", "Un sogno"], answer: 1, explain: "Il rimosso non scompare: ritorna in sintomi, sogni, lapsus." },
        { type: "tf", q: "Per Freud il contenuto manifesto è il significato nascosto del sogno.", answer: false, explain: "Il significato nascosto è il contenuto latente; il manifesto è il sogno come lo ricordiamo." },
        { type: "mc", q: "Come si chiama il processo per cui più persone sono fuse in un'unica immagine onirica?", options: ["Spostamento", "Rimozione", "Condensazione"], answer: 2, explain: "È uno dei meccanismi del lavoro onirico." }
      ]
    },
    {
      type: "text",
      title: "4. La seconda topica: Es, Io, Super-io",
      html: `<p>Nel <b>1923</b> (<i>L'Io e l'Es</i>) Freud rivede il suo schema e propone la <b>seconda topica</b>, con tre istanze della personalità:</p>
<ul>
<li>l'<b>Es</b> (in tedesco «esso»: un termine ripreso da Georg Groddeck): è il serbatoio delle <b>pulsioni</b>, istintivo, inconscio, che segue il <b>principio di piacere</b>: vuole soddisfazione immediata, senza badare alla realtà o ai divieti;</li>
<li>il <b>Super-io</b>: è l'<b>interiorizzazione delle norme</b> dei genitori e della società; è la coscienza morale, il giudice interno che approva o punisce con il senso di colpa. In parte è inconscio;</li>
<li>l'<b>Io</b>: è la parte che si confronta con la realtà e segue il <b>principio di realtà</b>. Media tra le richieste dell'Es, i divieti del Super-io e le possibilità del mondo esterno. È il «cavaliere» che cerca di guidare il cavallo (l'Es), ma spesso deve assecondarlo.</li>
</ul>
<p>L'Io è un «povero diavolo» che serve <b>tre padroni</b> e ne subisce le minacce: il mondo esterno, l'Es e il Super-io. Quando la tensione è troppo forte, produce <b>angoscia</b> e mette in atto <b>meccanismi di difesa</b> (studiati poi soprattutto dalla figlia <b>Anna Freud</b>, 1936): <b>rimozione</b>, <b>negazione</b> (rifiutare un fatto), <b>proiezione</b> (attribuire agli altri i propri impulsi), <b>regressione</b> (tornare a comportamenti infantili), <b>razionalizzazione</b> (giustificazioni «logiche»), <b>sublimazione</b> (trasformare un impulso in attività socialmente apprezzate, come l'arte, lo sport, lo studio).</p>
<p>Nello stesso periodo (<i>Al di là del principio di piacere</i>, 1920) Freud introduce anche la contrapposizione tra due grandi pulsioni: <b>Eros</b> (pulsione di vita, che unisce e costruisce) e <b>Thanatos</b> (pulsione di morte, che tende alla distruzione e al ritorno all'inorganico; il nome Thanatos è usato dai suoi seguaci). È una delle idee più discusse e meno accettate della teoria.</p>`
    },
    {
      type: "svg",
      title: "Il conflitto delle istanze",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="40" width="160" height="90" rx="12" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>
<text x="100" y="75" font-size="20" font-weight="bold" text-anchor="middle" fill="#7f1d1d">ES</text>
<text x="100" y="102" font-size="15" text-anchor="middle" fill="#7f1d1d">pulsioni, piacere</text>
<rect x="420" y="40" width="160" height="90" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="500" y="75" font-size="20" font-weight="bold" text-anchor="middle" fill="#1e3a8a">SUPER-IO</text>
<text x="500" y="102" font-size="15" text-anchor="middle" fill="#1e3a8a">norme, coscienza</text>
<rect x="220" y="170" width="160" height="90" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<text x="300" y="205" font-size="20" font-weight="bold" text-anchor="middle" fill="#14532d">IO</text>
<text x="300" y="232" font-size="15" text-anchor="middle" fill="#14532d">realtà, mediazione</text>
<path d="M100 132 L250 168" stroke="#475569" stroke-width="3"/>
<path d="M500 132 L350 168" stroke="#475569" stroke-width="3"/>
<text x="300" y="70" font-size="16" text-anchor="middle" fill="#334155">«voglio subito!»</text>
<text x="300" y="95" font-size="16" text-anchor="middle" fill="#334155">«non devi!»</text>
<text x="300" y="285" font-size="15" text-anchor="middle" fill="#334155">L'Io deve conciliare Es, Super-io e realtà esterna</text>
</svg>`,
      caption: "L'Io è schiacciato tra pulsioni, divieti e realtà."
    },
    {
      type: "text",
      title: "5. La sessualità infantile e il complesso di Edipo",
      html: `<p>La teoria più scandalosa di Freud fu quella della <b>sessualità infantile</b> (<i>Tre saggi sulla teoria sessuale</i>, <b>1905</b>). Freud sostiene che la sessualità non compare all'improvviso con la pubertà, ma ha una storia che comincia nella prima infanzia. Con «sessualità» intende una più ampia ricerca di piacere del corpo, legata a diverse zone, che la <b>libido</b> (l'energia delle pulsioni sessuali) investe in <b>fasi</b>:</p>
<ol>
<li><b>fase orale</b> (circa il primo anno): il piacere è legato alla bocca, alla suzione, al nutrimento;</li>
<li><b>fase anale</b> (circa 1-3 anni): il piacere e il conflitto ruotano intorno al controllo degli sfinteri;</li>
<li><b>fase fallica</b> (circa 3-5 anni): l'interesse si concentra sui genitali e sulle differenze tra i sessi; qui si colloca il <b>complesso di Edipo</b>;</li>
<li><b>periodo di latenza</b> (dai 6 anni alla pubertà): la sessualità rimane in ombra, le energie vanno a scuola e al gioco;</li>
<li><b>fase genitale</b> (dalla pubertà): la sessualità adulta.</li>
</ol>
<p>Il <b>complesso di Edipo</b> (dal mito di Edipo re, che uccide il padre e sposa la madre senza saperlo, tragedia di Sofocle) è, secondo Freud, la situazione in cui il bambino nutre un attaccamento verso il genitore del sesso opposto e rivalità verso quello dello stesso sesso. Normalmente si risolve con l'<b>identificazione</b> con il genitore rivale e con l'interiorizzazione delle norme: nasce così il Super-io. Il termine fu poi esteso, con molte critiche, al caso femminile.</p>
<p>Queste tesi furono molto contestate dai contemporanei e lo sono ancora: gli psicologi dello sviluppo non accettano le fasi come Freud le descrisse. Ma l'idea che le <b>esperienze dell'infanzia</b> e le relazioni con i genitori influenzino profondamente la personalità adulta è oggi un'idea diffusa nella psicologia.</p>`
    },
    {
      type: "decision",
      title: "Un lapsus: caso o messaggio?",
      html: `<p>Un presidente di assemblea apre la seduta dicendo: «Dichiaro <b>chiusa</b> la seduta» invece di «aperta». Un'altra volta una persona, parlando di un collega, dice «il mio capo è un ottimo... dittatore» invece di «direttore». Sembrano semplici errori.</p>`,
      question: "Come li interpretereste?",
      options: [
        { label: "Sono errori casuali di pronuncia, senza significato.", outcome: "È la spiegazione più semplice e spesso quella giusta secondo la psicologia cognitiva: stanchezza, somiglianza dei suoni, distrazione." },
        { label: "Possono rivelare un pensiero inconscio: il presidente non vorrebbe quella seduta, la persona ha una opinione che non confessa.", outcome: "È l'interpretazione di Freud (Psicopatologia della vita quotidiana): l'atto mancato è un compromesso tra l'intenzione cosciente e un desiderio rimosso." },
        { label: "Sono sempre prove di desideri sessuali nascosti.", outcome: "Nemmeno Freud lo sosteneva per ogni lapsus: molti hanno motivazioni diverse (rabbia, ansia, imbarazzo). Questa lettura generalizzata è una caricatura." }
      ],
      answer: 1,
      explain: "Per Freud gli atti mancati sono «formazioni di compromesso»: l'inconscio disturba l'intenzione cosciente. Gli psicologi cognitivi propongono spiegazioni alternative (errori di pianificazione del linguaggio). Un'ottima occasione per mettere alla prova la domanda: una teoria è scientifica se si può smentire?"
    },
    {
      type: "conceptMap",
      title: "Mappa: la psicoanalisi",
      nodes: [
        { id: "isteria", label: "Isteria e cura parlata", x: 50, y: 3, color: "#64748b", html: "Charcot, Breuer, Anna O.", why: "Mostrano che sintomi fisici possono avere cause psichiche." },
        { id: "incons", label: "Inconscio", x: 18, y: 30, color: "#7c3aed", html: "Desideri e ricordi rimossi.", why: "Spiega sintomi, sogni, lapsus." },
        { id: "sogno", label: "Sogni", x: 82, y: 30, color: "#2563eb", html: "Appagamento travestito di un desiderio.", why: "Via regia all'inconscio; manifesto e latente." },
        { id: "topica", label: "Es, Io, Super-io", x: 18, y: 60, color: "#dc2626", html: "Seconda topica (1923).", why: "Descrive il conflitto interno tra pulsioni, norme e realtà." },
        { id: "sess", label: "Sessualità infantile", x: 82, y: 60, color: "#f59e0b", html: "Fasi, libido, Edipo.", why: "Le prime esperienze formano la personalità." },
        { id: "difese", label: "Meccanismi di difesa", x: 50, y: 78, color: "#16a34a", html: "Rimozione, proiezione, sublimazione...", why: "L'Io si protegge dall'angoscia." },
        { id: "terapia", label: "Terapia", x: 50, y: 95, color: "#0891b2", html: "Libera associazione, transfert, interpretazione.", why: "Rendere conscio l'inconscio, dove c'era l'Es, deve subentrare l'Io." }
      ],
      edges: [
        ["isteria", "incons", "porta a"],
        ["incons", "sogno", "si manifesta in"],
        ["incons", "topica", "sviluppata in"],
        ["topica", "difese", "origina"],
        ["sess", "topica", "forma il Super-io"],
        ["difese", "terapia", "analizzate in"]
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la psicoanalisi",
      intro: "Idee complesse: tre immagini per orientarsi.",
      tabs: [
        {
          label: "🐴 Il cavaliere e il cavallo",
          html: `<p>Freud stesso paragona l'Io a un <b>cavaliere</b> che cerca di guidare un <b>cavallo</b> molto più forte di lui (l'Es). Il cavaliere decide la direzione, ma l'energia viene dal cavallo; se vuole andare dove il cavallo non vuole andare, spesso può riuscirci solo se in qualche modo lo asseconda. Il Super-io è come una voce che dal bordo della strada grida «Non devi andare di là!». Un'immagine semplice, ma efficace, del conflitto interno.</p>`
        },
        {
          label: "🏢 L'ufficio del direttore",
          html: `<p>Immagina un'azienda: il direttore (Io) riceve richieste dai clienti (il mondo esterno), dai reparti che vogliono sempre di più (Es) e dal regolamento interno e dall'ispettore (Super-io). Deve decidere ogni giorno quali richieste soddisfare e quali no, sapendo che ogni scelta scontenta qualcuno. Se la pressione è troppa, si ammala o ricorre a trucchi (le difese). L'analogia mostra che l'Io non è un «padrone», ma un mediatore.</p>`
        },
        {
          label: "⏱️ Cronologia",
          html: `<p>Alcune date essenziali:</p>`,
          widget: "timeline",
          options: { events: [ { year: 1856, label: "Nasce a Freiberg", icon: "👶" }, { year: 1895, label: "Studi sull'isteria", icon: "📘" }, { year: 1900, label: "L'interpretazione dei sogni", icon: "🌙" }, { year: 1905, label: "Tre saggi sulla teoria sessuale", icon: "📖" }, { year: 1923, label: "L'Io e l'Es", icon: "🧠" }, { year: 1930, label: "Il disagio della civiltà", icon: "🏙️" }, { year: 1938, label: "Esilio a Londra", icon: "✈️" }, { year: 1939, label: "Muore a Londra", icon: "🕯️" } ], unit: "anni" }
        }
      ]
    },
    {
      type: "widget",
      title: "Chi parla? Es, Io o Super-io",
      widget: "classify",
      options: { groups: ["Es", "Io", "Super-io"], items: [["🍰 «Voglio quella torta, subito!»", 0], ["⏳ «Aspetto la fine della cena, poi la mangio»", 1], ["🚫 «Non devo, è sbagliato e mi sentirei in colpa»", 2], ["😡 «Gliela faccio pagare, ora!»", 0], ["🤝 «Parlo con lui con calma, così risolviamo»", 1], ["⚖️ «Chi si comporta così merita una punizione»", 2]] },
      caption: "Prova ad attribuire ogni frase all'istanza che «parla»."
    },
    {
      type: "text",
      title: "6. La terapia e la cultura",
      html: `<p>La psicoanalisi è anche un metodo di cura. Il paziente (disteso sul lettino, mentre l'analista siede dietro di lui) pratica la <b>libera associazione</b>: dice tutto ciò che gli passa per la mente. L'analista ascolta con «attenzione fluttuante» e <b>interpreta</b> le resistenze, i sogni, i lapsus. Un fenomeno importante è il <b>transfert</b>: il paziente trasferisce sull'analista sentimenti e modelli di relazione vissuti con figure importanti del passato (genitori); analizzarlo permette di capire i conflitti. Lo scopo è rendere conscio il rimosso: «dove era l'Es, deve subentrare l'Io».</p>
<p>Freud applicò la psicoanalisi anche alla <b>cultura</b>. In <i>Totem e tabù</i> (1913) e <i>L'avvenire di un'illusione</i> (1927) interpretò i miti e la religione come proiezioni di desideri infantili (il bisogno di un padre protettivo). In <i>Il disagio della civiltà</i> (<b>1929</b>) sostiene che la civiltà richiede la <b>rinuncia alle pulsioni</b> (sessuali e aggressive) e che questa rinuncia produce infelicità e senso di colpa: un conflitto inevitabile tra la ricerca di felicità dell'individuo e le esigenze della società.</p>
<p>Intorno a lui si formò una scuola internazionale, ma presto nacquero dissidi: <b>Alfred Adler</b> (che pone al centro il senso di inferiorità) e <b>Carl Gustav Jung</b> (che rompe con Freud nel 1913 e elabora una psicologia analitica con l'«inconscio collettivo» e gli «archetipi») fondarono scuole proprie. Altri sviluppi: Melanie Klein, Jacques Lacan, Anna Freud.</p>
<p>Le <b>critiche</b> sono state molte. Il filosofo <b>Karl Popper</b> osservò che la psicoanalisi è difficile da <b>falsificare</b>: qualsiasi comportamento può essere spiegato dalla teoria, quindi non è una scienza in senso stretto (ne parleremo nella lezione sull'epistemologia). Le femministe hanno criticato la visione della sessualità femminile; le neuroscienze hanno offerto nuovi modelli della mente; molti studi hanno messo in dubbio l'efficacia di certe terapie. Ma l'idea che gran parte dei nostri processi mentali sia non cosciente, che l'infanzia sia importante e che parlare faccia bene è entrata nella psicologia moderna.</p>`
    },
    {
      type: "example",
      title: "Un esempio: l'esame dimenticato",
      html: `<p>Marco ha un esame difficile con un professore che teme. La mattina dell'esame dimentica la sveglia, si sveglia tardi e lo perde. Dice: «Che sfortuna, è stato un caso». Freud direbbe che l'<b>atto mancato</b> può nascondere un desiderio inconscio di evitare l'esame, che Marco non può ammettere (sarebbe contrario al suo Super-io, che gli dice che deve studiare e riuscire). L'Io ha trovato un <b>compromesso</b>: il desiderio dell'Es è soddisfatto, ma senza che Marco debba assumersene la responsabilità. Un lettore critico osserverebbe che potrebbe anche trattarsi di semplice stanchezza: ma l'ipotesi di Freud invita a chiedersi se «per caso» sia sempre la risposta giusta.</p>`
    },
    {
      type: "example",
      title: "Un altro esempio: la sublimazione",
      html: `<p>Una ragazza molto arrabbiata per un'ingiustizia subita non sfoga la rabbia aggredendo qualcuno, ma si iscrive a un corso di boxe e inizia a gareggiare; oppure scrive una canzone, o si impegna in un'associazione. Freud chiamerebbe questo meccanismo <b>sublimazione</b>: un impulso aggressivo (o sessuale) viene deviato verso attività socialmente accettate e anche creative. Per Freud gran parte della cultura (arte, scienza, sport) nasce proprio dalla sublimazione delle pulsioni.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che...?",
      html: `<p>Freud amava i <b>sigari</b> (ne fumava venti al giorno) e il suo studio a Vienna, in <b>Berggasse 19</b>, era pieno di antichità greche, egizie e romane: ne possedeva più di duemila. Quando il nazismo prese il potere in Austria (1938), gli amici e la principessa Maria Bonaparte pagarono un riscatto per permettergli di partire con la famiglia per Londra. Le quattro sorelle più anziane di Freud, rimaste a Vienna, morirono nei campi di sterminio. Il suo studio londinese è oggi un museo, con il celebre lettino.</p>`
    },
    {
      type: "curiosity",
      title: "Le tre ferite all'orgoglio dell'uomo",
      html: `<p>Freud scrisse che l'umanità ha subito, nel corso della storia, <b>tre grandi ferite narcisistiche</b>. La prima, di <b>Copernico</b>: la Terra non è al centro dell'universo. La seconda, di <b>Darwin</b>: l'uomo non è un essere a parte, ma discende dagli animali. La terza, sua: <b>l'Io non è padrone in casa propria</b>, perché gran parte della vita psichica è fuori dal controllo della coscienza. Che gli piacesse inserirsi accanto a quei due giganti è un tratto tipico della sua ambizione.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Freud</b> (1856-1939), Vienna: neurologo, fondatore della <b>psicoanalisi</b>. Opere: <i>Studi sull'isteria</i> (1895), <i>L'interpretazione dei sogni</i> (1899-1900), <i>Tre saggi sulla teoria sessuale</i> (1905), <i>L'Io e l'Es</i> (1923), <i>Il disagio della civiltà</i> (1929).</li>
<li><b>Inconscio</b> e <b>rimozione</b>; il rimosso ritorna in sintomi, sogni, lapsus.</li>
<li><b>Sogno</b>: appagamento travestito di un desiderio; contenuto manifesto e latente; condensazione, spostamento.</li>
<li><b>Seconda topica</b>: Es (principio di piacere), Super-io (norme), Io (principio di realtà).</li>
<li><b>Sessualità infantile</b>: fasi orale, anale, fallica, latenza, genitale; <b>complesso di Edipo</b>.</li>
<li><b>Terapia</b>: libera associazione, transfert, interpretazione. <b>Critiche</b>: falsificabilità (Popper), sessismo, neuroscienze.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Freud",
      questions: [
        { type: "mc", q: "Quale istanza segue il principio di realtà?", options: ["L'Io", "L'Es", "Il Super-io"], answer: 0, explain: "L'Io media tra pulsioni, norme e mondo esterno." },
        { type: "tf", q: "Per Freud la sessualità comincia solo con la pubertà.", answer: false, explain: "Freud sostiene l'esistenza di una sessualità infantile, in fasi." },
        { type: "order", q: "Metti in ordine le fasi dello sviluppo secondo Freud.", items: ["Orale", "Anale", "Fallica", "Genitale"], explain: "Con il periodo di latenza che precede la fase genitale." }
      ]
    }
  ],
  glossary: [
    { t: "Inconscio", d: "Parte della mente che contiene desideri e ricordi rimossi, che influenzano la vita senza che ce ne accorgiamo." },
    { t: "Rimozione", d: "Meccanismo che respinge nell'inconscio ciò che è doloroso o inaccettabile." },
    { t: "Atto mancato", d: "Lapsus, dimenticanza o errore che per Freud rivela un contenuto inconscio." },
    { t: "Contenuto manifesto / latente", d: "Il sogno come lo ricordiamo / il suo significato nascosto." },
    { t: "Es", d: "Istanza delle pulsioni, che segue il principio di piacere." },
    { t: "Io", d: "Istanza che media tra Es, Super-io e realtà (principio di realtà)." },
    { t: "Super-io", d: "Istanza delle norme interiorizzate: coscienza morale e senso di colpa." },
    { t: "Libido", d: "Energia delle pulsioni sessuali." },
    { t: "Complesso di Edipo", d: "Attaccamento al genitore del sesso opposto e rivalità verso l'altro, nella fase fallica." },
    { t: "Transfert", d: "Spostamento sull'analista di sentimenti legati a figure del passato." },
    { t: "Sublimazione", d: "Deviazione di un impulso verso attività socialmente apprezzate." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale opera di Freud, pubblicata nel 1899 (data 1900), è dedicata ai sogni?", options: ["Il disagio della civiltà", "L'Io e l'Es", "L'interpretazione dei sogni"], answer: 2, explain: "Per Freud il sogno è la via regia all'inconscio." },
      { type: "mc", q: "Qual è il metodo che Freud usa dopo l'ipnosi?", options: ["Il test a risposta multipla", "La libera associazione", "La terapia farmacologica"], answer: 1, explain: "Il paziente dice ciò che gli viene in mente senza censura." },
      { type: "tf", q: "Il rimosso scompare definitivamente dalla mente.", answer: false, explain: "Ritorna sotto forma di sintomi, sogni, lapsus." },
      { type: "mc", q: "Quale istanza rappresenta le norme interiorizzate dei genitori e della società?", options: ["Il Super-io", "L'Es", "Il preconscio"], answer: 0, explain: "È la coscienza morale." },
      { type: "text", q: "Come si chiama il meccanismo che spinge nell'inconscio un contenuto inaccettabile?", answer: ["rimozione", "la rimozione"], explain: "Alla base della psicoanalisi." },
      { type: "mc", q: "Che cosa descrive il complesso di Edipo?", options: ["La paura della morte", "Attaccamento verso il genitore del sesso opposto e rivalità con l'altro", "Il desiderio di successo"], answer: 1, explain: "Il nome viene dal mito di Edipo, tragedia di Sofocle." },
      { type: "tf", q: "Condensazione e spostamento sono meccanismi del lavoro onirico.", answer: true, explain: "Insieme a simbolizzazione ed elaborazione secondaria." },
      { type: "mc", q: "Chi si separò da Freud nel 1913 fondando la psicologia analitica?", options: ["Alfred Adler", "Jacques Lacan", "Carl Gustav Jung"], answer: 2, explain: "Introdusse l'inconscio collettivo e gli archetipi." },
      { type: "mc", q: "Quale critica fece Popper alla psicoanalisi?", options: ["Che sia difficilmente falsificabile", "Che sia troppo sperimentale", "Che sia troppo recente"], answer: 0, explain: "Una teoria che spiega tutto non può essere smentita." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Studi sull'isteria", "L'interpretazione dei sogni", "Tre saggi sulla teoria sessuale", "L'Io e l'Es"], explain: "1895, 1899-1900, 1905, 1923." }
    ]
  }
});
