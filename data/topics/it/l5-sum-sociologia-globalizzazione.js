TOPIC('it', {
  id: "l5-sum-sociologia-globalizzazione",
  title: "Sociologia: globalizzazione e società multiculturale",
  intro: "Guarda l'etichetta della tua maglietta: forse «Made in Bangladesh», con cotone coltivato altrove, un marchio europeo, un prezzo deciso da un'azienda con sede in un altro continente, venduta tramite un sito che si apre in tutto il mondo. Il cellulare in tasca contiene minerali estratti in Africa, è assemblato in Asia e ti fa parlare in tempo reale con un compagno di classe che vive in Argentina. Questa trama di legami si chiama <b>globalizzazione</b>, ed è uno dei temi centrali della sociologia contemporanea. In questa lezione vedrai che cos'è, come l'hanno interpretata studiosi come <b>McLuhan</b>, <b>Robertson</b>, <b>Appadurai</b> e soprattutto <b>Zygmunt Bauman</b> con la sua «<b>modernità liquida</b>», perché produce sia ricchezza sia nuove <b>disuguaglianze</b>, come funzionano le <b>migrazioni</b> e che cosa significa vivere in una <b>società multiculturale</b>. Alla fine saprai usare questi concetti per leggere il presente, tema frequente al colloquio di maturità.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è la globalizzazione",
      html: `<p>Con <b>globalizzazione</b> si intende il processo di crescente <b>interdipendenza</b> economica, politica, culturale e tecnologica tra le società del pianeta: ciò che accade in un luogo ha effetti, in tempi rapidi, in luoghi lontanissimi. Non è un fenomeno del tutto nuovo (pensa alla Via della seta o ai commerci oceanici dopo il 1492), ma dopo il 1945 e soprattutto dopo il <b>1989-1991</b> (caduta del Muro di Berlino e fine dell'Unione Sovietica) ha accelerato. Le cause principali:</p>
<ul>
<li><b>tecnologie di trasporto</b>: il <b>container</b> (la prima nave portacontainer parte da Newark nel <b>1956</b>, idea dell'imprenditore Malcom McLean) ha abbassato enormemente i costi del trasporto; l'aereo ha reso il mondo più piccolo;</li>
<li><b>tecnologie dell'informazione</b>: telefonia mobile, satelliti, <b>Internet</b> e World Wide Web (reso pubblico dal CERN nel 1991) permettono di comunicare e spostare capitali in tempo reale;</li>
<li><b>liberalizzazione degli scambi</b>: dal GATT (1947) si arriva alla <b>Organizzazione mondiale del commercio</b> (WTO, 1995); nel 2001 entra nel WTO anche la Cina;</li>
<li><b>strategie delle imprese multinazionali</b>: <b>delocalizzazione</b> della produzione dove costa meno, <b>catene globali del valore</b>, mercati finanziari integrati.</li>
</ul>
<p>Gli studiosi parlano di <b>compressione spazio-tempo</b> (David Harvey, 1989): le distanze «si accorciano» perché ciò che prima richiedeva settimane ora richiede secondi. Il sociologo canadese <b>Marshall McLuhan</b> aveva già parlato negli anni Sessanta di <b>«villaggio globale»</b>: i media elettronici ci mettono in contatto come se vivessimo in un unico grande villaggio.</p>`
    },
    {
      type: "widget",
      title: "Linea del tempo della globalizzazione",
      widget: "timeline",
      options: { unit: "anni", events: [
        { year: 1947, label: "GATT: accordo sul commercio", icon: "📦" },
        { year: 1956, label: "Prima nave portacontainer", icon: "🚢" },
        { year: 1989, label: "Caduta del Muro di Berlino", icon: "🧱" },
        { year: 1991, label: "World Wide Web pubblico; fine dell'URSS", icon: "🌐" },
        { year: 1995, label: "Nasce il WTO", icon: "🏛️" },
        { year: 2001, label: "La Cina entra nel WTO", icon: "🇨🇳" },
        { year: 2007, label: "Primo iPhone: Internet in tasca", icon: "📱" },
        { year: 2008, label: "Crisi finanziaria globale", icon: "📉" }
      ] },
      caption: "Tre accelerazioni: tecnologia, politica (fine della guerra fredda) e finanza."
    },
    {
      type: "text",
      title: "2. Interpretare la globalizzazione: glocalizzazione e «scapes»",
      html: `<p>La globalizzazione non è un fenomeno solo economico. Alcuni concetti aiutano a leggerla:</p>
<ul>
<li><b>Glocalizzazione</b> (<b>Roland Robertson</b>, anni Novanta): il globale e il locale non si escludono, si <i>intrecciano</i>. Una multinazionale adatta i prodotti ai gusti locali; una cultura locale si apre al mondo reinterpretando ciò che arriva. Esempio: una catena di fast food che in India vende hamburger vegetariani, o la pizza italiana che cambia ingredienti nel mondo.</li>
<li><b>McDonaldizzazione</b> (<b>George Ritzer</b>, 1993): la tendenza a organizzare la società secondo i principi del fast food (efficienza, calcolabilità, prevedibilità, controllo) con il rischio di standardizzare e «disumanizzare».</li>
<li><b>Gli «scapes» di Arjun Appadurai</b> (<i>Modernità in polvere</i>, 1996): la globalizzazione è fatta di flussi che si muovono per vie diverse: di persone (<i>ethnoscapes</i>), di tecnologie (<i>technoscapes</i>), di denaro (<i>financescapes</i>), di immagini e informazioni (<i>mediascapes</i>), di idee politiche (<i>ideoscapes</i>). Non si muovono in modo coordinato, e per questo la globalizzazione è imprevedibile.</li>
<li><b>Sistema-mondo</b> (<b>Immanuel Wallerstein</b>): il mondo è un'unica economia con un <i>centro</i> (Paesi ricchi), una <i>semiperiferia</i> e una <i>periferia</i>, in cui le aree povere forniscono risorse e lavoro a basso costo.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Le rotte globali: dove viaggiano merci, persone e dati",
      scene: "globe",
      options: {
        points: [
          { lat: 31.2, lon: 121.5, label: "Shanghai", color: "#ef4444" },
          { lat: 1.3, lon: 103.8, label: "Singapore", color: "#f59e0b" },
          { lat: 30.0, lon: 31.2, label: "Canale di Suez", color: "#10b981" },
          { lat: 51.9, lon: 4.5, label: "Rotterdam", color: "#3b82f6" },
          { lat: 40.7, lon: -74.0, label: "New York", color: "#8b5cf6" }
        ],
        routes: [{ points: [0, 1, 2, 3, 4], color: "#f97316" }]
      },
      caption: "Una rotta commerciale reale: dal porto di Shanghai a Rotterdam attraverso lo stretto di Singapore e il canale di Suez, poi verso New York. Ruota il globo per seguirla."
    },
    {
      type: "example",
      title: "Il tuo smartphone, una mappa del mondo",
      html: `<p>Pensa al telefono che hai in mano. Il <b>design</b> può essere stato pensato in California, i <b>chip</b> prodotti a Taiwan, i <b>metalli</b> (cobalto, litio, terre rare) estratti in Congo, Cile, Cina, le <b>componenti</b> assemblate in uno stabilimento asiatico con operai a basso salario, il <b>software</b> sviluppato da programmatori in più continenti. Il prezzo che paghi dipende da tutta questa catena. Di chi è la responsabilità se in una miniera lavorano bambini? Dell'azienda che vende il telefono, del fornitore, dello Stato, o anche di chi lo compra? Il dibattito su <b>consumo critico</b> e <b>responsabilità sociale d'impresa</b> parte da qui.</p>`
    },
    {
      type: "quiz",
      title: "Controllo rapido (1)",
      questions: [
        { type: "mc", q: "Che cosa si intende per «glocalizzazione»?", options: ["L'intreccio tra dimensione globale e locale", "La chiusura di una cultura in sé stessa", "L'eliminazione di tutte le lingue", "Un tipo di moneta"], answer: 0, explain: "Robertson sottolinea che i prodotti e le idee globali vengono sempre adattati ai contesti locali." },
        { type: "tf", q: "Il World Wide Web fu reso pubblico dal CERN nel 1991.", answer: true, explain: "Fu l'inizio della diffusione di Internet come rete di pagine collegate." },
        { type: "mc", q: "Chi parlò di «villaggio globale»?", options: ["Marshall McLuhan", "Max Weber", "Karl Marx", "Pierre Bourdieu"], answer: 0, explain: "McLuhan intendeva che i media elettronici ci avvicinano come in un unico villaggio." }
      ]
    },
    {
      type: "text",
      title: "3. Zygmunt Bauman e la modernità liquida",
      html: `<p><b>Zygmunt Bauman</b> (Poznań 1925 – Leeds 2017) è un sociologo polacco di origine ebraica. Combatte nella seconda guerra mondiale, diventa professore a Varsavia, ma nel <b>1968</b>, durante una campagna antisemita del regime, perde la cattedra ed è costretto a lasciare la Polonia. Insegna a Tel Aviv e poi all'Università di Leeds, in Inghilterra. Le sue opere più conosciute sono <b>Dentro la globalizzazione</b> (1998), <b>Modernità liquida</b> (2000), <b>Voglia di comunità</b> (2001), <b>Vite di scarto</b> (2004) e <b>Paura liquida</b> (2006).</p>
<p>L'idea centrale è la metafora della <b>liquidità</b>. I solidi mantengono forma e posizione; i liquidi cambiano forma di continuo. La modernità «solida» (la società industriale del Novecento) aveva istituzioni stabili: lavoro per la vita, famiglia, classe sociale, Stato-nazione. La <b>modernità «liquida»</b> è invece la nostra, dove tutto è <b>precario e mutevole</b>: lavori temporanei, legami che si sciolgono, identità da costruire e rifare di continuo, e responsabilità che passano dalle istituzioni all'<b>individuo</b>. Alcuni concetti collegati:</p>
<ul>
<li><b>Turisti e vagabondi</b>: nel mondo globale ci sono i «turisti», che si muovono liberamente (per scelta, per affari), e i «vagabondi», che sono costretti a spostarsi o a restare dove sono. La libertà di movimento è diventata un fattore di stratificazione sociale.</li>
<li><b>Vite di scarto</b>: la società dei consumi produce «rifiuti» anche umani (disoccupati, migranti, rifugiati), persone considerate superflue.</li>
<li><b>Paura liquida</b>: l'insicurezza e le paure (terrorismo, crisi, criminalità) sono usate dal potere e dai media; chi ha paura chiede protezione e muri.</li>
<li><b>Amore liquido</b> (2003): anche le relazioni personali sono più fragili e provvisorie, perché si temono i legami duraturi che limitano la libertà.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Solido e liquido: due modi di vivere la società",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="20" width="270" height="260" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="3"/>
<text x="155" y="48" font-size="16" font-weight="bold" text-anchor="middle" fill="#1e293b">Modernità solida</text>
<rect x="60" y="130" width="40" height="100" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
<rect x="115" y="100" width="40" height="130" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
<rect x="170" y="130" width="40" height="100" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
<rect x="225" y="160" width="40" height="70" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
<text x="155" y="80" font-size="14" text-anchor="middle" fill="#1e293b">istituzioni stabili</text>
<text x="155" y="256" font-size="14" text-anchor="middle" fill="#1e293b">lavoro fisso, famiglia, Stato</text>
<rect x="310" y="20" width="270" height="260" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<text x="445" y="48" font-size="16" font-weight="bold" text-anchor="middle" fill="#1e293b">Modernità liquida</text>
<path d="M330 150 Q360 110 390 150 T450 150 T510 150 T570 150" fill="none" stroke="#0369a1" stroke-width="5"/>
<path d="M330 185 Q360 145 390 185 T450 185 T510 185 T570 185" fill="none" stroke="#0369a1" stroke-width="5"/>
<path d="M330 220 Q360 180 390 220 T450 220 T510 220 T570 220" fill="none" stroke="#0369a1" stroke-width="5"/>
<text x="445" y="80" font-size="14" text-anchor="middle" fill="#1e293b">tutto cambia forma</text>
<text x="445" y="256" font-size="14" text-anchor="middle" fill="#1e293b">precarietà, legami fragili</text>
</svg>`,
      caption: "La metafora di Bauman: istituzioni solide (blocchi) contro una società che scorre e cambia forma di continuo (onde)."
    },
    {
      type: "text",
      title: "4. Disuguaglianze nel mondo globale",
      html: `<p>La globalizzazione ha ridotto la povertà estrema in molte aree (soprattutto in Cina e in Asia), ma ha anche acuito altre disuguaglianze. Conviene distinguere:</p>
<ul>
<li>disuguaglianze <b>tra Paesi</b> (Nord e Sud del mondo, centro e periferia);</li>
<li>disuguaglianze <b>dentro i Paesi</b> (tra ricchi e poveri, città e campagna, lavoratori qualificati e non);</li>
<li>disuguaglianze <b>di accesso</b> alla tecnologia (<i>digital divide</i>), all'istruzione, alla salute, ai diritti.</li>
</ul>
<p>Per misurare la disuguaglianza dei redditi si usa spesso il <b>coefficiente di Gini</b>: vale 0 se tutti hanno lo stesso reddito e 1 se uno solo possiede tutto. Un'immagine famosa è la <b>«curva dell'elefante»</b> dell'economista <b>Branko Milanovic</b> (con Lakner): mostra che tra il 1988 e il 2008 i redditi sono cresciuti molto per le classi medie dei Paesi emergenti (come Cina e India) e per l'1% più ricco del mondo, mentre sono cresciuti poco per la classe medio-bassa dei Paesi ricchi. Questo spiega parte del malcontento politico in Occidente.</p>
<p>Altri effetti sociali: <b>delocalizzazione</b> e perdita di posti di lavoro industriali in alcuni territori; <b>concorrenza fiscale</b> tra Stati; <b>sfruttamento</b> del lavoro nelle filiere globali; <b>impatto ambientale</b> (emissioni, rifiuti, cambiamento climatico); fenomeni di <b>omologazione culturale</b> ma anche di <b>reazione identitaria</b> (nazionalismi, localismi). Movimenti come quelli «no global» o i forum sociali, e iniziative di <b>commercio equo e solidale</b>, nascono come risposta.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare: la globalizzazione è un processo, non un destino",
      html: `<p>La globalizzazione non ha un solo effetto: porta <b>opportunità</b> (crescita, scambi, diffusione di conoscenze e diritti) e <b>rischi</b> (disuguaglianze, precarietà, crisi che si propagano velocemente, perdita di diversità culturale). Le sue regole (accordi commerciali, tutele del lavoro, ambiente) sono decise dagli esseri umani e possono essere cambiate. Per questo i sociologi parlano di <b>governance globale</b> e di cittadinanza che va oltre i confini nazionali.</p>`
    },
    {
      type: "text",
      title: "5. Migrazioni: perché ci si sposta",
      html: `<p>Le <b>migrazioni</b> sono spostamenti di persone da un luogo all'altro per periodi lunghi. Secondo le stime delle Nazioni Unite, nel 2020 i <b>migranti internazionali</b> erano circa <b>280 milioni</b>, il 3,6% circa della popolazione mondiale: la grande maggioranza delle persone non emigra. I sociologi spiegano le migrazioni con i fattori di <b>espulsione</b> (<i>push</i>: povertà, guerre, persecuzioni, disastri ambientali) e di <b>attrazione</b> (<i>pull</i>: lavoro, salari, sicurezza, reti familiari). Spesso conta la <b>rete migratoria</b>: chi parte sa di poter contare su parenti o connazionali già arrivati.</p>
<p>Distinzioni importanti:</p>
<ul>
<li><b>migrante economico</b>: si sposta per migliorare le proprie condizioni di vita;</li>
<li><b>rifugiato</b>: secondo la <b>Convenzione di Ginevra del 1951</b>, è chi ha fondato timore di essere perseguitato per razza, religione, nazionalità, appartenenza a un gruppo sociale o opinioni politiche, e si trova fuori dal proprio Paese;</li>
<li><b>richiedente asilo</b>: chi ha chiesto protezione e attende la decisione;</li>
<li><b>migrazioni interne</b> (campagna-città, Sud-Nord) e <b>internazionali</b>.</li>
</ul>
<p>L'<b>Italia</b> è stata per un secolo terra di <b>emigrazione</b>: tra il 1876 e il 1976 oltre 20 milioni di italiani partirono verso le Americhe, il Nord Europa, l'Australia. Dagli anni Settanta-Ottanta è diventata anche Paese di <b>immigrazione</b>. Le leggi principali sono la <b>legge Martelli</b> (1990), la <b>Turco-Napolitano</b> (1998) e la <b>Bossi-Fini</b> (2002); la cittadinanza è regolata dalla legge 91 del 1992, fondata soprattutto sullo <i>ius sanguinis</i> (si è cittadini se si nasce da genitori italiani), con acceso dibattito su <i>ius soli</i> (cittadinanza per nascita sul territorio) e <i>ius scholae</i> (per chi ha frequentato la scuola).</p>`
    },
    {
      type: "example",
      title: "Una maglietta, cinque Paesi",
      html: `<p>Una maglietta venduta a 15 euro in un negozio italiano può nascere così: cotone coltivato in India, filato in Turchia, tagliato e cucito in Bangladesh, trasportato in container fino a Rotterdam, distribuito da un'azienda con sede in Spagna. Il lavoratore che la cuce guadagna una frazione minima del prezzo finale; la parte maggiore va a marchio, trasporti e vendita. Il crollo del Rana Plaza, edificio con fabbriche tessili vicino a Dacca (Bangladesh) nel <b>2013</b>, in cui morirono più di mille persone, ha mostrato il lato oscuro di queste catene e ha dato impulso a campagne per la trasparenza e a iniziative come «Fashion Revolution». Collegamento con la lezione: la globalizzazione abbassa i prezzi, ma sposta rischi e responsabilità lontano dagli occhi dei consumatori.</p>`
    },
    {
      type: "decision",
      title: "Tu cosa avresti fatto? Il progetto di un quartiere multiculturale",
      html: `<p>Sei un consigliere comunale. Nel quartiere vicino alla stazione vivono famiglie di molte origini; ci sono tensioni su rumore, negozi, scuola e luoghi di culto. Il sindaco ti chiede di proporre una linea di intervento.</p>`,
      question: "Quale approccio sceglieresti?",
      options: [
        { label: "Assimilazione: chiedere a tutti di adottare lingua e costumi locali, riducendo le espressioni culturali pubbliche", outcome: "Può favorire la coesione linguistica, ma rischia di sembrare una cancellazione delle identità e di generare risentimento." },
        { label: "Separazione: lasciare ogni comunità nei propri spazi, senza interferenze", outcome: "Evita conflitti immediati, ma crea «società parallele» con pochi contatti, diffidenza e meno opportunità." },
        { label: "Interculturalità: spazi comuni, scuola e lavoro condivisi, mediatori culturali, regole uguali per tutti e riconoscimento delle differenze", outcome: "Favorisce il contatto e il riconoscimento reciproco; richiede risorse e tempo, ma è la strada più usata nelle politiche europee di integrazione." }
      ],
      answer: 2,
      explain: "L'ipotesi del contatto (Allport, 1954) mostra che i pregiudizi diminuiscono quando gruppi diversi collaborano su obiettivi comuni, in condizioni di parità."
    },
    {
      type: "text",
      title: "6. Società multiculturale: modelli e concetti",
      html: `<p>Una società è <b>multiculturale</b> quando al suo interno convivono gruppi con lingue, religioni, tradizioni diverse. Gli Stati hanno scelto strade differenti:</p>
<ul>
<li><b>Assimilazione</b>: le minoranze devono adottare la cultura dominante (tradizione repubblicana francese, con la laicità e l'idea di cittadino senza distinzioni di origine).</li>
<li><b>Melting pot</b> («crogiolo»): le culture si fondono in una nuova (immagine usata per gli Stati Uniti, dalla commedia di Israel Zangwill del 1908). Oggi si preferisce l'immagine della <b>salad bowl</b> (insalatiera), in cui gli ingredienti restano riconoscibili.</li>
<li><b>Multiculturalismo</b>: riconosce e tutela le differenze culturali con politiche specifiche (il Canada lo adotta come politica ufficiale nel 1971). Il filosofo <b>Charles Taylor</b> parla di «politica del riconoscimento» (1992), <b>Will Kymlicka</b> dei diritti delle minoranze.</li>
<li><b>Interculturalità</b>: non basta la convivenza di culture parallele, serve il <b>dialogo</b> e lo scambio tra di esse. È l'approccio privilegiato in ambito educativo europeo e italiano.</li>
</ul>
<p>Concetti da distinguere:</p>
<ul>
<li><b>Stereotipo</b>: immagine semplificata e rigida di un gruppo («tutti gli x sono…»).</li>
<li><b>Pregiudizio</b>: giudizio negativo preventivo, spesso emotivo, su un gruppo (<b>Gordon Allport</b>, <i>La natura del pregiudizio</i>, 1954).</li>
<li><b>Discriminazione</b>: comportamento concreto di trattamento sfavorevole.</li>
<li><b>Etnocentrismo</b> (<b>William Sumner</b>, 1906): giudicare le altre culture con i criteri della propria, considerata superiore.</li>
<li><b>Relativismo culturale</b>: ogni cultura va compresa nei propri termini (vedi antropologia); ha però un limite, i <b>diritti umani universali</b>.</li>
</ul>
<p>Anche l'<b>identità</b> è plurale: il premio Nobel <b>Amartya Sen</b> (<i>Identità e violenza</i>, 2006) ricorda che ciascuno di noi appartiene a più gruppi (per nazionalità, lingua, professione, generazione, tifoseria) e che ridurre una persona a una sola appartenenza alimenta la violenza.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la società multiculturale",
      intro: "Tre immagini per distinguere i modelli di convivenza.",
      tabs: [
        { label: "🥗 Frullato o insalata", html: `<p>Il <b>melting pot</b> è un frullato: gli ingredienti si fondono in un unico gusto. La <b>salad bowl</b> è un'insalata: ogni ingrediente resta riconoscibile ma tutti stanno nella stessa ciotola e il sapore finale è dato dall'insieme. L'<b>assimilazione</b> è come dire che la ciotola ha un solo ingrediente. L'<b>interculturalità</b> è un'insalata in cui gli ingredienti si condiscono a vicenda: si scambiano sapori e cambiano un po'.</p>` },
        { label: "🎼 L'orchestra", html: `<p>Una società multiculturale può essere come un'orchestra: strumenti diversi, tutti necessari, ma devono suonare la stessa partitura con regole comuni (la <b>Costituzione</b>, i <b>diritti</b>, la lingua pubblica). Se ognuno suona per conto suo c'è rumore (società parallele); se tutti suonano lo stesso strumento c'è monotonia (assimilazione forzata). L'armonia nasce da differenze coordinate.</p>` },
        { label: "🧭 Contatto e pregiudizio", html: `<p>L'<b>ipotesi del contatto</b> di Allport dice che il contatto tra gruppi riduce il pregiudizio a quattro condizioni: pari status, obiettivi comuni, cooperazione, sostegno delle istituzioni. Una squadra sportiva o un progetto scolastico mista funziona meglio di un incontro formale. Pensa a quanto cambia l'immagine di un compagno quando lo conosci davvero.</p>`, svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="200" fill="#f8fafc"/><circle cx="100" cy="100" r="40" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/><text x="100" y="105" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">Gruppo A</text><circle cx="500" cy="100" r="40" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/><text x="500" y="105" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">Gruppo B</text><rect x="230" y="70" width="140" height="60" rx="8" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/><text x="300" y="97" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">Obiettivo</text><text x="300" y="117" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">comune</text><path d="M142 100 L228 100" stroke="#1e293b" stroke-width="3"/><path d="M458 100 L372 100" stroke="#1e293b" stroke-width="3"/><text x="300" y="175" font-size="14" text-anchor="middle" fill="#1e293b">cooperare su uno scopo comune riduce il pregiudizio</text></svg>` }
      ]
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… gli italiani all'estero",
      html: `<p>Oggi gli italiani iscritti all'<b>AIRE</b> (Anagrafe degli italiani residenti all'estero) sono oltre cinque milioni. Nel Novecento gli emigrati italiani furono spesso oggetto degli stessi pregiudizi che oggi colpiscono altri migranti: nei primi del Novecento negli Stati Uniti erano accusati di essere poco istruiti e inclini al crimine, e nel 1891 a New Orleans undici italiani furono linciati dopo un processo. Ricordare la propria storia di emigrazione è un modo per capire che i meccanismi del pregiudizio non appartengono a un popolo, ma a tutti.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il container ha cambiato il mondo?",
      html: `<p>Prima del container, caricare e scaricare una nave richiedeva molti giorni e centinaia di scaricatori di porto. Con le scatole di metallo standardizzate la stessa operazione si fa in poche ore con gru e pochi addetti, e i costi di trasporto crollano. L'economista Marc Levinson ha scritto un libro intitolato <i>The Box</i> («La scatola», 2006) per dire che questo oggetto banale ha contribuito alla globalizzazione quanto gli accordi internazionali. Le grandi città portuali si sono trasformate: i vecchi moli dei centri storici sono stati abbandonati e i porti si sono spostati in aree vaste e automatizzate.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: globalizzazione e società multiculturale",
      nodes: [
        { id: "glo", label: "Globalizzazione", x: 50, y: 6, color: "#3b82f6", html: "Interdipendenza economica, politica, culturale e tecnologica su scala mondiale.", why: "Nasce da tecnologie (container, Internet), liberalizzazione degli scambi e fine della guerra fredda: dopo il 1989 il mercato diventa davvero mondiale." },
        { id: "int", label: "Interpretazioni", x: 14, y: 42, color: "#10b981", html: "Villaggio globale (McLuhan), glocalizzazione (Robertson), scapes (Appadurai), sistema-mondo (Wallerstein).", why: "Ogni teoria mette l'accento su un aspetto: media, adattamento locale, flussi, rapporti di potere tra aree del mondo." },
        { id: "bau", label: "Bauman: modernità liquida", x: 50, y: 44, color: "#f59e0b", html: "Precarietà, legami fragili, turisti e vagabondi, vite di scarto.", why: "Dopo la crisi delle istituzioni solide del Novecento (fabbrica, Stato, classe) il rischio e la responsabilità passano all'individuo." },
        { id: "dis", label: "Disuguaglianze", x: 86, y: 42, color: "#ef4444", html: "Tra Paesi e dentro i Paesi: Gini, curva dell'elefante, digital divide.", why: "Chi possiede capitali, competenze e mobilità trae maggiore vantaggio dai mercati aperti; altri restano senza strumenti." },
        { id: "mig", label: "Migrazioni", x: 28, y: 82, color: "#8b5cf6", html: "Push e pull, migranti economici e rifugiati (Convenzione di Ginevra 1951).", why: "La differenza di opportunità tra aree del mondo, unita alla facilità di comunicare e viaggiare, genera spostamenti di persone." },
        { id: "mul", label: "Società multiculturale", x: 72, y: 82, color: "#0ea5e9", html: "Assimilazione, melting pot, multiculturalismo, interculturalità.", why: "Dove i flussi migratori si stabilizzano nascono società plurali, che devono bilanciare riconoscimento delle differenze e regole comuni." }
      ],
      edges: [["glo", "int", "teorie"], ["glo", "bau", "effetti sociali"], ["glo", "dis", "effetti economici"], ["glo", "mig", "flussi di persone"], ["mig", "mul", "porta a"], ["dis", "mig", "spinge"]]
    },
    {
      type: "quiz",
      title: "Controllo rapido (2)",
      questions: [
        { type: "mc", q: "Che cosa descrive la metafora della «modernità liquida» di Bauman?", options: ["Una società precaria e mutevole, con legami e istituzioni meno stabili", "Una società fondata sull'acqua", "La società agricola", "La società medievale"], answer: 0, explain: "Contrapposta alla modernità «solida» delle istituzioni stabili del Novecento." },
        { type: "tf", q: "Secondo la Convenzione di Ginevra del 1951 il rifugiato è chi teme fondatamente di essere perseguitato nel proprio Paese.", answer: true, explain: "Per razza, religione, nazionalità, gruppo sociale o opinioni politiche." },
        { type: "mc", q: "Quale modello di convivenza punta soprattutto al dialogo e allo scambio tra culture?", options: ["Interculturalità", "Assimilazione", "Segregazione", "Isolamento"], answer: 0, explain: "Non basta convivere: occorre scambiarsi e riconoscersi." }
      ]
    }
  ],
  glossary: [
    { t: "Globalizzazione", d: "Crescente interdipendenza economica, politica, culturale e tecnologica tra le società del mondo." },
    { t: "Glocalizzazione", d: "Intreccio tra dimensione globale e locale, termine reso noto da Roland Robertson." },
    { t: "Modernità liquida", d: "Immagine di Bauman per la società contemporanea, precaria e in continuo cambiamento." },
    { t: "Delocalizzazione", d: "Trasferimento di attività produttive in Paesi dove i costi sono più bassi." },
    { t: "Coefficiente di Gini", d: "Indice da 0 (uguaglianza perfetta) a 1 (massima disuguaglianza) dei redditi." },
    { t: "Push e pull", d: "Fattori di spinta (guerre, povertà) e di attrazione (lavoro, sicurezza) che spiegano le migrazioni." },
    { t: "Rifugiato", d: "Chi, secondo la Convenzione di Ginevra del 1951, fugge da persecuzioni fondate su razza, religione, nazionalità, gruppo sociale o opinioni politiche." },
    { t: "Ius soli / ius sanguinis", d: "Cittadinanza per nascita sul territorio / per discendenza da genitori cittadini." },
    { t: "Interculturalità", d: "Approccio che promuove dialogo e scambio tra culture diverse nella stessa società." },
    { t: "Etnocentrismo", d: "Tendenza a giudicare le altre culture con i criteri della propria, ritenuta superiore." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale evento del 1989-1991 accelera la globalizzazione?", options: ["Fine della guerra fredda e dissoluzione dell'URSS", "Scoperta dell'America", "Rivoluzione francese", "Prima guerra mondiale"], answer: 0, explain: "L'apertura dei mercati e delle frontiere dell'Est rende l'economia davvero mondiale." },
      { type: "mc", q: "Quale invenzione del 1956 ridusse molto i costi del trasporto marittimo?", options: ["Il container", "La macchina a vapore", "Il telegrafo", "Il motore a razzo"], answer: 0, explain: "La prima nave portacontainer partì nel 1956 grazie a Malcom McLean." },
      { type: "mc", q: "Che cosa sono gli «scapes» di Appadurai?", options: ["I flussi globali di persone, tecnologie, denaro, immagini e idee", "Le montagne più alte", "Le città globali", "I tipi di moneta"], answer: 0, explain: "Ethnoscapes, technoscapes, financescapes, mediascapes e ideoscapes." },
      { type: "tf", q: "Per Bauman nella modernità liquida le identità e i legami sono più stabili che in passato.", answer: false, explain: "Sono invece più precari, perché le istituzioni solide perdono forza." },
      { type: "mc", q: "Che cosa mostra la «curva dell'elefante» di Milanovic?", options: ["Chi ha guadagnato di più e di meno dalla globalizzazione tra il 1988 e il 2008", "Le rotte degli elefanti", "La crescita demografica", "Il debito pubblico"], answer: 0, explain: "I redditi crescono molto per le classi medie dei Paesi emergenti e per l'1% più ricco, poco per la classe medio-bassa dei Paesi ricchi." },
      { type: "mc", q: "Che cosa significano i fattori «push» nelle migrazioni?", options: ["Spinte a lasciare il luogo di origine (guerre, povertà, persecuzioni)", "Attrazioni verso il luogo di arrivo", "Tasse sui viaggi", "Vacanze"], answer: 0, explain: "Si affiancano ai fattori «pull» (lavoro, sicurezza, reti familiari)." },
      { type: "num", q: "In che anno fu firmata la Convenzione di Ginevra sui rifugiati?", answer: 1951, tol: 0, explain: "È il fondamento del diritto internazionale d'asilo." },
      { type: "mc", q: "Chi sostiene che il contatto tra gruppi, a certe condizioni, riduce il pregiudizio?", options: ["Gordon Allport", "Auguste Comte", "Max Weber", "Émile Durkheim"], answer: 0, explain: "La sua «ipotesi del contatto» (1954) richiede pari status, obiettivi comuni e cooperazione." },
      { type: "tf", q: "Il melting pot descrive un modello in cui le culture si fondono in una nuova cultura comune.", answer: true, explain: "L'immagine è stata spesso associata agli Stati Uniti; oggi si preferisce la «salad bowl»." },
      { type: "order", q: "Metti in ordine cronologico", items: ["GATT (1947)", "Prima nave portacontainer (1956)", "Caduta del Muro di Berlino (1989)", "Nascita del WTO (1995)", "Crisi finanziaria globale (2008)"], explain: "Dalle prime regole sul commercio alla crisi che mostrò i rischi dell'interdipendenza." }
    ]
  }
});
