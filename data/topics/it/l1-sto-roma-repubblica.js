TOPIC('it', {
  id: "l1-sto-roma-repubblica",
  title: "Roma: dalle origini alla repubblica",
  intro: "Un villaggio di capanne su una collina vicino a un fiume, fondato (secondo la leggenda) nel <b>753 a.C.</b>. Tre secoli dopo era la padrona dell'Italia; due secoli dopo ancora dominava tutto il Mediterraneo. Come fu possibile? In questa lezione seguiamo la nascita di Roma tra mito e archeologia, il governo dei re, la <b>repubblica</b> con le sue istituzioni, la lotta tra patrizi e plebei, la conquista dell'Italia e il duello mortale con <b>Cartagine</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Le origini di Roma: mito e archeologia",
      html: `<p>Secondo la tradizione, <b>Romolo</b> e <b>Remo</b>, gemelli discendenti dell'eroe troiano <b>Enea</b> (fuggito da Troia), allattati da una lupa e allevati da un pastore, fondarono Roma il <b>21 aprile del 753 a.C.</b> Romolo tracciò il solco sul Palatino e uccise Remo che l'aveva scavalcato. Il mito esprime l'idea di una città nata dalla violenza ma anche da una missione divina.</p>
<p>L'archeologia racconta qualcosa di diverso e più interessante: tra il X e l'VIII sec. a.C. sui colli (Palatino, Capitolino, Quirinale...) c'erano <b>villaggi di pastori e contadini latini e sabini</b>. Il luogo era ottimo: un guado sul <b>Tevere</b> (l'isola Tiberina), la strada del sale (via Salaria), colli facili da difendere, vicinanza al mare ma non troppo. Verso la fine dell'VIII-VII sec. a.C. i villaggi si fusero in una città, il Foro (prima palude) fu bonificato con la <b>Cloaca Massima</b>.</p>
<p>Gli storici distinguono perciò <b>leggenda</b> (utile per capire come i Romani si vedevano) e <b>fonti storiche</b> (archeologia, iscrizioni).</p>`
    },
    {
      type: "3d",
      title: "Mappa 3D: l'espansione di Roma",
      scene: "spacetime",
      caption: "La base è la carta dell'Italia e del Mediterraneo occidentale, l'altezza è il tempo (753-146 a.C.). Tocca gli eventi: le frecce collegano cause ed effetti.",
      options: {
        lat: [34, 47],
        lon: [-2, 20],
        years: [-753, -140],
        places: [
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 36.85, lon: 10.32, label: "Cartagine" },
          { lat: 40.47, lon: 17.24, label: "Taranto" },
          { lat: 38.19, lon: 15.55, label: "Messina" }
        ],
        events: [
          { id: "fondazione", lat: 41.89, lon: 12.49, year: -753, label: "Fondazione di Roma", html: "Data tradizionale: 21 aprile 753 a.C. (Romolo).", causes: [] },
          { id: "cacciata", lat: 41.89, lon: 12.49, year: -509, label: "Cacciata dei re", html: "Nel 509 a.C., secondo la tradizione, i Romani scacciano l'ultimo re, Tarquinio il Superbo, e istituiscono la repubblica con due consoli.", causes: ["fondazione"] },
          { id: "secessione", lat: 41.89, lon: 12.5, year: -494, label: "Prima secessione della plebe", html: "I plebei si ritirano sul Monte Sacro: ottengono i tribuni della plebe, con diritto di veto.", causes: ["cacciata"] },
          { id: "dodici", lat: 41.89, lon: 12.49, year: -450, label: "Leggi delle XII tavole", html: "Verso il 450 a.C. le leggi, prima custodite dai patrizi, vengono incise e rese pubbliche: tutti le possono conoscere.", causes: ["secessione"] },
          { id: "veio", lat: 42.02, lon: 12.4, year: -396, label: "Conquista di Veio", html: "Dopo dieci anni di assedio Roma conquista la ricca città etrusca di Veio (Camillo).", causes: ["dodici"] },
          { id: "sannitiche", lat: 41.3, lon: 14.6, year: -321, label: "Guerre sannitiche", html: "Tra il 343 e il 290 a.C. Roma sconfigge i Sanniti dell'Appennino; nel 321 subisce l'umiliazione delle Forche Caudine.", causes: ["veio"] },
          { id: "pirro", lat: 41.13, lon: 14.78, year: -275, label: "Pirro sconfitto a Benevento", html: "Nel 275 a.C. Roma batte Pirro, re dell'Epiro chiamato da Taranto. Nel 272 conquista anche Taranto: tutta l'Italia meridionale è sua.", causes: ["sannitiche"] },
          { id: "messina", lat: 38.19, lon: 15.55, year: -264, label: "Inizio prima guerra punica", html: "Nel 264 a.C. Roma interviene a Messina contro Cartagine: inizia la lotta per la Sicilia.", causes: ["pirro"] },
          { id: "egadi", lat: 37.97, lon: 12.3, year: -241, label: "Battaglia delle Egadi", html: "Nel 241 a.C. la flotta romana vince: la Sicilia diventa la prima provincia romana.", causes: ["messina"] },
          { id: "canne", lat: 41.3, lon: 16.13, year: -216, label: "Canne", html: "Nel 216 a.C. Annibale annienta l'esercito romano: la peggiore sconfitta della storia di Roma, ma i socii italici restano fedeli.", causes: ["egadi"] },
          { id: "zama", lat: 36.0, lon: 9.4, year: -202, label: "Zama", html: "Nel 202 a.C. Scipione sconfigge Annibale in Africa: fine della seconda guerra punica.", causes: ["canne"] },
          { id: "cartagine", lat: 36.85, lon: 10.32, year: -146, label: "Distruzione di Cartagine", html: "Nel 146 a.C., dopo la terza guerra punica, Scipione Emiliano distrugge Cartagine. Nello stesso anno Roma distrugge Corinto.", causes: ["zama"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. La monarchia e gli Etruschi",
      html: `<p>Secondo la tradizione Roma ebbe <b>sette re</b>: Romolo, Numa Pompilio, Tullo Ostilio, Anco Marzio, Tarquinio Prisco, Servio Tullio, Tarquinio il Superbo. Gli ultimi tre erano di origine <b>etrusca</b>. Il re era capo militare, sacerdote e giudice supremo, eletto da un'assemblea e assistito dal <b>Senato</b> (consiglio degli anziani, i <i>patres</i>).</p>
<p>Gli <b>Etruschi</b>, popolo dell'Etruria (Toscana e Lazio settentrionale), organizzati in città-stato (lucumonie), erano abili metallurgisti, navigatori e agricoltori. Dominarono Roma nel VI secolo a.C. portando: <b>urbanizzazione</b> (mura, opere idrauliche, il tempio di Giove sul Campidoglio), l'<b>alfabeto</b> (derivato dal greco), simboli del potere (<b>fasci</b> e <b>scure</b>, toga, sedia curule), giochi gladiatorii e l'arte divinatoria degli aruspici.</p>
<p>Il re <b>Servio Tullio</b> divise la popolazione in classi in base al <b>censo</b> (ricchezza), non solo alla nascita; la società romana era già divisa in <b>patrizi</b> (famiglie nobili, discendenti dei <i>patres</i>) e <b>plebei</b> (tutti gli altri, liberi, spesso contadini e artigiani, senza accesso alle cariche), con i <b>clienti</b> legati ai patrizi da un rapporto di fedeltà (<i>clientela</i>). Nel <b>509 a.C.</b> i patrizi cacciarono l'ultimo re, Tarquinio il Superbo, accusato di tirannide: nacque la <b>repubblica</b> (<i>res publica</i>, «cosa pubblica»). Da allora il titolo di re fu odiato a Roma.</p>`
    },
    {
      type: "svg",
      title: "Le istituzioni della repubblica romana",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<rect x="210" y="15" width="180" height="45" rx="8" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
<text x="300" y="44" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">SENATO (300 membri)</text>
<rect x="20" y="105" width="170" height="60" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="105" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">2 CONSOLI</text>
<text x="105" y="152" font-size="14" text-anchor="middle" fill="#0f172a">eletti, durano 1 anno</text>
<rect x="215" y="105" width="170" height="60" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="300" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">ALTRI MAGISTRATI</text>
<text x="300" y="152" font-size="14" text-anchor="middle" fill="#0f172a">pretori, questori, edili, censori</text>
<rect x="410" y="105" width="170" height="60" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="495" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">TRIBUNI DELLA PLEBE</text>
<text x="495" y="152" font-size="14" text-anchor="middle" fill="#0f172a">hanno il diritto di veto</text>
<rect x="150" y="215" width="300" height="55" rx="8" fill="#bae6fd" stroke="#075985" stroke-width="2"/>
<text x="300" y="240" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">COMIZI (assemblee del popolo)</text>
<text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">eleggono i magistrati e votano le leggi</text>
<path d="M300 60 L300 105 M300 165 L300 215 M105 165 L105 190 L300 215 M495 165 L495 190 L300 215" stroke="#374151" stroke-width="2" fill="none"/>
</svg>`,
      caption: "Schema semplificato: il potere era diviso tra più organi, per evitare che uno solo diventasse re."
    },
    {
      type: "text",
      title: "3. Le istituzioni della repubblica",
      html: `<p>I Romani, dopo l'esperienza dei re, costruirono uno Stato con un sistema di <b>contrappesi</b> (come lo definì più tardi lo storico greco <b>Polibio</b>, che vi vedeva una «costituzione mista»: monarchia, aristocrazia e democrazia insieme).</p>
<ul>
<li><b>Magistrati</b>: cariche elettive, annuali, collegiali (almeno due persone con lo stesso potere, che potevano bloccarsi a vicenda) e gratuite. I due <b>consoli</b> comandano l'esercito e la città; i <b>pretori</b> amministrano la giustizia; i <b>questori</b> le finanze; gli <b>edili</b> la città e i giochi; i <b>censori</b> (ogni 5 anni) fanno il censimento e controllano i costumi. In casi di emergenza si nominava un <b>dittatore</b> per sei mesi al massimo.</li>
<li><b>Senato</b>: circa 300 ex magistrati, a vita; controlla politica estera, finanze e religione. Era il vero centro del potere.</li>
<li><b>Comizi</b>: assemblee del popolo (<i>comizi centuriati</i> per eleggere magistrati superiori e dichiarare guerra, <i>comizi tributi</i> per le leggi), con voto pesato per ricchezza.</li>
<li><b>Cursus honorum</b>: la carriera politica ordinata: questore → edile → pretore → console.</li>
</ul>
<p>Era un sistema pensato per <b>evitare la tirannide</b>, ma non una democrazia: i voti dei ricchi contavano di più, e l'accesso alle alte cariche era per anni riservato ai patrizi, poi alle famiglie ricche. Donne, schiavi e stranieri erano esclusi.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: origini e istituzioni",
      questions: [
        { type: "mc", q: "In quale anno, secondo la tradizione, fu cacciato l'ultimo re di Roma?", options: ["509 a.C.", "753 a.C.", "264 a.C."], answer: 0, explain: "509 a.C., Tarquinio il Superbo." },
        { type: "mc", q: "Quanti consoli c'erano e quanto duravano in carica?", options: ["Due, un anno", "Uno, a vita", "Tre, cinque anni"], answer: 0, explain: "Due consoli annuali: potevano controllarsi a vicenda." },
        { type: "tf", q: "Il Senato romano era composto da ex magistrati.", answer: true, explain: "In carica a vita." },
        { type: "text", q: "Come si chiama la carriera politica ordinata dei magistrati romani?", answer: ["cursus honorum", "il cursus honorum"], explain: "Cursus honorum." }
      ]
    },
    {
      type: "text",
      title: "4. Patrizi e plebei: lo scontro degli ordini",
      html: `<p>Nei primi secoli della repubblica i <b>plebei</b> (che servivano nell'esercito, ma non potevano ricoprire cariche né sposare patrizie) lottarono per ottenere uguaglianza. Fu uno scontro lungo ma quasi senza guerra civile, con lo strumento della <b>secessione</b>: rifiutarsi di combattere e ritirarsi dalla città.</p>
<ul>
<li><b>494 a.C.</b>: prima secessione sul Monte Sacro; i plebei ottengono i <b>tribuni della plebe</b>, magistrati sacri e inviolabili con diritto di <b>veto</b> contro le decisioni dei magistrati.</li>
<li><b>451-450 a.C.</b>: <b>Leggi delle XII tavole</b>, la prima raccolta di leggi scritte, esposte nel Foro: la legge diventa conoscibile, non più monopolio dei patrizi.</li>
<li><b>445 a.C.</b> (Lex Canuleia): sono permessi i matrimoni tra patrizi e plebei.</li>
<li><b>367 a.C.</b> (leggi Licinie-Sestie): uno dei due consoli può essere plebeo; limiti al possesso di terre pubbliche.</li>
<li><b>287 a.C.</b> (Lex Hortensia): i <b>plebisciti</b> (decisioni dell'assemblea della plebe) valgono come leggi per tutti i cittadini.</li>
</ul>
<p>Alla fine nacque una nuova classe dirigente, la <b>nobilitas</b>, formata da patrizi e plebei ricchi che avevano ricoperto cariche. Ma i poveri restavano poveri: i problemi sociali (debiti, terre) tornarono più tardi con i Gracchi.</p>`
    },
    {
      type: "decision",
      title: "Roma, 494 a.C.: la plebe deve ritirarsi sul Monte Sacro?",
      html: `<p>Sei un plebeo, soldato e contadino. Sei oppresso dai debiti: i creditori patrizi possono mettere in catene chi non paga. Le guerre ti tolgono tempo ai campi. Un gruppo di plebei propone di <b>abbandonare la città</b> e accamparsi sul Monte Sacro: senza di loro, Roma non ha un esercito per difendersi dai nemici vicini.</p>`,
      question: "Che cosa fai?",
      options: [
        { label: "Obbedire e continuare a servire: la città ha bisogno di tutti.", outcome: "Eviti lo scontro, ma i patrizi non hanno motivo di cambiare e i debiti restano. La situazione peggiora." },
        { label: "Partecipare alla secessione per chiedere garanzie.", outcome: "Il Senato, spaventato, manda un ambasciatore (Menenio Agrippa, che racconta l'apologo del corpo e delle membra) e concede i tribuni della plebe. Una rivolta senza violenza ottiene una conquista fondamentale." },
        { label: "Chiedere a un generale famoso di prendere il potere e punire i patrizi.", outcome: "Rischi di trovare un tiranno: il pericolo stesso che la repubblica voleva evitare." }
      ],
      answer: 1,
      explain: "La plebe scelse la <b>secessione</b>, una forma di protesta senza armi. Il Senato cedette: nacquero i <b>tribuni della plebe</b>. La storia romana dimostra che anche un gruppo senza potere formale può ottenere diritti se ha un'arma sicura: lo sciopero della propria forza militare."
    },
    {
      type: "text",
      title: "5. La conquista dell'Italia",
      html: `<p>Tra il V e il III sec. a.C. Roma passò da cittadina laziale a padrona della penisola:</p>
<ul>
<li><b>Lazio e Etruria</b>: dopo anni di guerre contro Equi, Volsci e la vicina Veio (conquistata nel <b>396 a.C.</b> da Camillo). Nel <b>390 a.C.</b> i Galli di Brenno saccheggiarono Roma (ma non il Campidoglio, salvato dalle oche, secondo la leggenda).</li>
<li><b>Guerre sannitiche</b> (343-290 a.C.): contro i Sanniti dell'Appennino. Nel 321 a.C. l'esercito romano subì l'umiliazione delle <b>Forche Caudine</b>. Roma vinse imparando: sostituì la falange con la <b>legione manipolare</b>, più flessibile.</li>
<li><b>Guerra latina</b> (340-338 a.C.): Roma sciolse la Lega latina e annesse le città.</li>
<li><b>Pirro e Taranto</b> (280-275 a.C.): Taranto chiama il re dell'Epiro, <b>Pirro</b>, che vince a Eraclea e Ascoli ma con perdite pesantissime («vittoria di Pirro»), poi è sconfitto a Benevento (275 a.C.). Nel 272 Roma prende Taranto: tutta l'Italia meridionale è sua.</li>
</ul>
<p><b>Come governò l'Italia?</b> Con un sistema flessibile: non una sola regola, ma accordi diversi per ogni popolo.</p>
<ul>
<li><b>Cittadinanza</b> piena o <b>senza voto</b> per alcune città vicine;</li>
<li><b>Alleati</b> (<i>socii</i>) che mantenevano autonomia interna ma dovevano fornire soldati;</li>
<li><b>Colonie</b> romane e latine in posizioni strategiche;</li>
<li><b>Strade</b> (via Appia dal 312 a.C.) per spostare le legioni rapidamente.</li>
</ul>
<p>La strategia «<b>divide et impera</b>»: premiare i fedeli, punire i ribelli. Offrì anche una prospettiva: i soci potevano aspirare alla cittadinanza. Così Roma ebbe sempre nuove reclute per le guerre.</p>`
    },
    {
      type: "text",
      title: "6. Roma e Cartagine: le guerre puniche",
      html: `<p>Cartagine, colonia fenicia (814 a.C.), era la potenza marittima e commerciale del Mediterraneo occidentale, con la Sicilia occidentale, la Sardegna e la Spagna meridionale. Roma, padrona dell'Italia, si trovò a confine con lei sullo stretto di Messina. Fu una lotta di oltre un secolo.</p>
<ul>
<li><b>Prima guerra punica</b> (264-241 a.C.): causata dall'intervento a Messina. Roma, senza flotta, ne costruì una, copiando le navi cartaginesi e usando il <b>corvo</b> (passerella con uncino per abbordare). Vittoria navale a Milazzo (260) e alle <b>Egadi</b> (241 a.C.). Cartagine cedette la <b>Sicilia</b>, prima provincia romana; poi anche la Sardegna e la Corsica (238 a.C.).</li>
<li><b>Seconda guerra punica</b> (218-201 a.C.): <b>Annibale</b>, giovane generale cartaginese, parte dalla Spagna, attraversa le Alpi con 37 elefanti e circa 26.000 uomini. Vince al Ticino e alla Trebbia (218), al <b>Trasimeno</b> (217) e a <b>Canne</b> (216 a.C.), dove sconfigge un esercito romano doppio del suo, circondandolo (circa 50.000 morti romani). Ma la maggior parte degli alleati italiani resta fedele a Roma. <b>Fabio Massimo</b>, il «Temporeggiatore», logora Annibale evitando le grandi battaglie. <b>Scipione</b> porta la guerra in Africa e sconfigge Annibale a <b>Zama</b> (202 a.C.), meritandosi il soprannome di «Africano». Cartagine perde la flotta, le colonie e deve pagare un'enorme indennità.</li>
<li><b>Terza guerra punica</b> (149-146 a.C.): <b>Catone il Censore</b> chiudeva ogni discorso con «Carthago delenda est» («Cartagine va distrutta»). Roma assedia e <b>distrugge Cartagine</b> (146 a.C.), con <b>Scipione Emiliano</b>. Il territorio diventa la provincia d'Africa.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: perché Annibale non vinse?",
      html: `<p>Annibale vinse quasi ogni battaglia, eppure perse la guerra. Perché? Prova a ragionare come uno storico:</p>
<ol>
<li><b>Alleati</b>: sperava che gli alleati italiani si ribellassero a Roma: quasi tutti restarono fedeli, perché Roma garantiva loro vantaggi e protezione.</li>
<li><b>Rifornimenti</b>: viveva «sul territorio» senza una base sicura, mentre Roma aveva risorse di uomini quasi illimitate.</li>
<li><b>Mare</b>: Roma controllava il mare e poteva spostare truppe in Spagna e in Africa.</li>
<li><b>Strategia</b>: il contrattacco di Scipione in Africa costrinse Annibale a tornare a Cartagine.</li>
</ol>
<p>Lezione: vincere battaglie non basta, serve una <b>struttura politica e militare</b> capace di resistere alle sconfitte. Roma ne aveva una, grazie al sistema di alleanze.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: leggere la mappa di una strada romana",
      html: `<p>Le strade consolari collegavano Roma alle province: la <b>via Appia</b> (312 a.C.) arrivava fino a Brindisi, la via Aurelia lungo la costa tirrenica, la via Flaminia verso l'Adriatico, la via Emilia (187 a.C.) nella pianura padana. Costruite con strati di pietrisco, sabbia e lastre basaltiche, avevano <b>pietre miliari</b> che indicavano la distanza da Roma. Molte strade moderne seguono ancora quel percorso: la SS 1 Aurelia, l'Appia, la Flaminia. Controlla sulla mappa della tua zona: ci sono nomi di vie romane vicino a te?</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Cincinnato il dittatore contadino",
      html: `<p>Nel <b>458 a.C.</b> Roma era assediata dagli Equi. Il Senato chiamò come dittatore <b>Lucio Quinzio Cincinnato</b>, ex console che coltivava il suo piccolo campo. Lo trovarono con l'aratro in mano. Cincinnato sconfisse i nemici in sedici giorni, poi rinunciò alla carica e tornò al campo. Per i Romani era il modello del cittadino virtuoso che usa il potere solo per servire lo Stato. George Washington fu detto «il Cincinnato d'America» per aver lasciato il comando dopo la guerra d'indipendenza.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le oche del Campidoglio",
      html: `<p>Nel 390 a.C. i Galli di Brenno stavano per sorprendere nottetempo i Romani rifugiati sul Campidoglio, ma le oche sacre a Giunone, svegliate dal rumore, starnazzarono. Il console Manlio si svegliò e respinse l'assalto. Dopo il riscatto, secondo la tradizione, Brenno gettò la sua spada sulla bilancia dell'oro: «Guai ai vinti» (<i>Vae victis</i>). Quanto c'è di storia e quanto di leggenda? I Galli saccheggiarono effettivamente Roma intorno a quell'anno, e il ricordo di quella catastrofe segnò i Romani a lungo.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire Roma repubblicana",
      intro: "Un sistema politico complesso, una conquista graduale: ecco qualche analogia.",
      tabs: [
        {
          label: "🎭 Una squadra senza capitano",
          html: `<p>Immagina una squadra di calcio con <b>due capitani</b> eletti ogni anno, che possono bloccarsi a vicenda, e un <b>consiglio di ex capitani</b> (il Senato) che consiglia e decide sulle questioni più importanti. Ogni stagione si cambia: nessuno resta capitano troppo a lungo. Il tifo, cioè le assemblee, vota i capitani e le regole.</p>
<p>Perché? Per evitare che qualcuno diventi un <b>tiranno</b>. I Romani avevano un terrore quasi religioso della monarchia, dopo l'esperienza di Tarquinio. Il sistema funzionò finché Roma fu piccola: con l'impero e con generali troppo potenti andò in crisi (lo vedremo più avanti).</p>`
        },
        {
          label: "🔗 Il sistema delle alleanze",
          html: `<p>La forza di Roma non era solo il suo esercito, ma la <b>rete di alleati</b>:</p>
<ul>
<li>Cittadini romani (anche senza voto): pagano le tasse, danno soldati.</li>
<li>Latini: diritti privati simili ai romani, fornitori di truppe.</li>
<li>Socii italici: autonomia locale, ma soldati per Roma.</li>
</ul>
<p>Ogni alleato era legato direttamente a Roma, non agli altri alleati: una raggiera, non una lega. In cambio c'era protezione, bottino e la possibilità di ottenere la cittadinanza. Nella seconda guerra punica, dopo Canne, questa rete resse e fece la differenza.</p>`
        },
        {
          label: "🗺️ Gira il globo",
          html: `<p>Ruota il globo e segui le guerre puniche.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Roma", color: "#ef4444" },
              { lat: 36.85, lon: 10.32, label: "Cartagine", color: "#7c3aed" },
              { lat: 37.97, lon: 12.3, label: "Egadi", color: "#f97316" },
              { lat: 37.88, lon: -1.13, label: "Cartagena (Spagna)", color: "#7c3aed" },
              { lat: 45.0, lon: 9.7, label: "Trebbia", color: "#f97316" },
              { lat: 41.3, lon: 16.13, label: "Canne", color: "#f97316" },
              { lat: 36.0, lon: 9.4, label: "Zama", color: "#f97316" }
            ],
            routes: [{ points: [3, 4, 5], color: "#7c3aed" }, { points: [0, 6], color: "#ef4444" }]
          }
        },
        {
          label: "📅 Linea del tempo",
          html: `<p>Scorri le tappe fondamentali di Roma.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: -753, label: "Fondazione (tradizione)", icon: "🐺" },
              { year: -509, label: "Cacciata dei re", icon: "👑" },
              { year: -494, label: "Secessione e tribuni", icon: "✊" },
              { year: -450, label: "XII tavole", icon: "📜" },
              { year: -396, label: "Conquista di Veio", icon: "🏹" },
              { year: -312, label: "Via Appia", icon: "🛣️" },
              { year: -264, label: "Prima punica", icon: "⚓" },
              { year: -216, label: "Canne", icon: "🐘" },
              { year: -202, label: "Zama", icon: "🛡️" },
              { year: -146, label: "Fine di Cartagine", icon: "🔥" }
            ]
          }
        },
        {
          label: "🃏 Carte di ripasso",
          html: `<p>Gira le carte per ripassare.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Patrizi / plebei", back: "Famiglie nobili con tutti i diritti / popolo senza accesso alle cariche (all'inizio)" },
              { front: "Tribuno della plebe", back: "Magistrato inviolabile con diritto di veto (494 a.C.)" },
              { front: "XII tavole", back: "Prime leggi scritte di Roma (451-450 a.C.)" },
              { front: "Socii", back: "Alleati italici che fornivano soldati a Roma" },
              { front: "Canne", back: "216 a.C.: peggiore sconfitta romana, ad opera di Annibale" },
              { front: "Zama", back: "202 a.C.: Scipione sconfigge Annibale" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: perché Roma vinse",
      nodes: [
        { id: "posizione", label: "Posizione e risorse", x: 50, y: 6, color: "#16a34a", html: "Guado sul Tevere, pianura fertile, colli difendibili.", why: "Una posizione centrale nella penisola permise di controllare le vie di terra e di mare. La grande popolazione latina fornì uomini per le legioni." },
        { id: "istituzioni", label: "Istituzioni miste", x: 20, y: 30, color: "#7c3aed", html: "Consoli, Senato, comizi, tribuni.", why: "I contrappesi evitarono sia la tirannide sia l'anarchia. Le decisioni del Senato davano continuità alla politica estera, anche con magistrati annuali." },
        { id: "lotta", label: "Lotta tra ordini", x: 80, y: 30, color: "#ef4444", html: "Dai tribuni (494 a.C.) alla Lex Hortensia (287 a.C.).", why: "I plebei, che combattevano nell'esercito, ottennero diritti in cambio del loro servizio: così si evitò una guerra civile." },
        { id: "esercito", label: "Esercito di cittadini", x: 15, y: 58, color: "#f97316", html: "Legione manipolare, disciplina, strade.", why: "I cittadini-soldati difendevano i propri campi: erano motivati. La legione, flessibile, si adattò ai terreni e ai nemici." },
        { id: "alleanze", label: "Sistema di alleanze", x: 50, y: 58, color: "#0ea5e9", html: "Cittadinanza, socii, colonie.", why: "Roma offriva agli sconfitti uno status e la speranza di una cittadinanza piena: così la loro lealtà rimase salda anche dopo Canne." },
        { id: "mare", label: "Potenza navale", x: 85, y: 58, color: "#eab308", html: "La flotta costruita nella prima guerra punica.", why: "Roma imparò dall'avversario: per sconfiggere Cartagine dovette diventare potenza marittima." },
        { id: "conquista", label: "Dominio del Mediterraneo", x: 50, y: 92, color: "#334155", html: "Sicilia, Spagna, Africa, Macedonia, Grecia.", why: "Dopo Cartagine nessuna potenza poteva competere con Roma: nel II secolo a.C. conquistò il Mediterraneo e dovette affrontare nuovi problemi interni." }
      ],
      edges: [
        ["posizione", "esercito", "alimenta l'"],
        ["istituzioni", "lotta", "si evolvono con la"],
        ["lotta", "esercito", "motiva l'"],
        ["esercito", "alleanze", "si fonda sulle"],
        ["alleanze", "conquista", "permettono la"],
        ["mare", "conquista", "apre la"],
        ["istituzioni", "alleanze", "garantiscono le"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: guerre puniche",
      questions: [
        { type: "mc", q: "Chi sconfisse Annibale a Zama?", options: ["Scipione", "Fabio Massimo", "Pirro"], answer: 0, explain: "Scipione, detto poi l'Africano." },
        { type: "tf", q: "Dopo la battaglia di Canne gli alleati italici abbandonarono in massa Roma.", answer: false, explain: "La maggior parte restò fedele." },
        { type: "text", q: "Come si chiama la prima provincia romana, conquistata con la prima guerra punica?", answer: ["sicilia", "la sicilia"], explain: "La Sicilia." },
        { type: "order", q: "Metti in ordine.", items: ["Prima guerra punica", "Canne", "Zama", "Distruzione di Cartagine"], explain: "264, 216, 202, 146 a.C." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Roma: fondazione tradizionale 753 a.C.; sette re; ultimi tre etruschi; cacciata dei re nel 509 a.C. → <b>repubblica</b>.</li>
<li>Istituzioni: <b>consoli</b> (2, annuali), <b>Senato</b>, <b>comizi</b>, magistrati, <b>tribuni della plebe</b>.</li>
<li>Lotta patrizi-plebei: tribuni (494), XII tavole (450), Licinie-Sestie (367), Lex Hortensia (287).</li>
<li>Conquista dell'Italia: Veio, Sanniti, Pirro (275), Taranto (272); alleati e colonie.</li>
<li>Guerre puniche (264-146 a.C.): Sicilia, Annibale (Canne 216), Zama 202, distruzione di Cartagine 146.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Res publica", d: "«Cosa pubblica»: la repubblica romana." },
    { t: "Patrizi", d: "Famiglie nobili che nei primi secoli detenevano le cariche." },
    { t: "Plebei", d: "Cittadini non nobili, all'inizio esclusi dalle cariche." },
    { t: "Console", d: "Uno dei due magistrati supremi, in carica un anno." },
    { t: "Senato", d: "Consiglio di ex magistrati, centro del potere." },
    { t: "Tribuno della plebe", d: "Magistrato che difendeva i plebei con il diritto di veto." },
    { t: "Dittatore", d: "Magistrato con pieni poteri per sei mesi in caso di emergenza." },
    { t: "Socii", d: "Alleati italici di Roma." },
    { t: "Provincia", d: "Territorio fuori dall'Italia governato da un magistrato romano." },
    { t: "Legione", d: "Unità fondamentale dell'esercito romano." },
    { t: "Carthago delenda est", d: "«Cartagine va distrutta»: motto di Catone." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale evento segna l'inizio della repubblica romana?", options: ["La cacciata di Tarquinio il Superbo (509 a.C.)", "La fondazione di Roma", "La distruzione di Cartagine"], answer: 0, explain: "Secondo la tradizione, 509 a.C." },
      { type: "mc", q: "Quale popolo dominò Roma nel VI secolo a.C.?", options: ["Gli Etruschi", "I Sanniti", "I Galli"], answer: 0, explain: "Gli ultimi tre re erano etruschi." },
      { type: "tf", q: "I consoli erano due e restavano in carica un anno.", answer: true, explain: "Potevano bloccarsi a vicenda." },
      { type: "text", q: "Come si chiama il magistrato dei plebei dotato di diritto di veto?", answer: ["tribuno della plebe", "tribuno", "il tribuno della plebe"], explain: "Il tribuno della plebe." },
      { type: "mc", q: "Che cosa sono le leggi delle XII tavole?", options: ["Le prime leggi scritte romane", "Un trattato con Cartagine", "Una riforma militare"], answer: 0, explain: "Circa 450 a.C." },
      { type: "mc", q: "Quale re cercò di conquistare l'Italia meridionale chiamato da Taranto?", options: ["Pirro", "Annibale", "Brenno"], answer: 0, explain: "Pirro, re dell'Epiro." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Cacciata dei re", "XII tavole", "Conquista di Veio", "Prima guerra punica", "Zama"], explain: "509, 450, 396, 264, 202 a.C." },
      { type: "mc", q: "Perché Annibale non riuscì a sconfiggere Roma pur vincendo a Canne?", options: ["Gli alleati italici restarono fedeli a Roma", "Roma non aveva soldati", "Cartagine non voleva la guerra"], answer: 0, explain: "La rete di alleanze romana resse." },
      { type: "num", q: "In che anno a.C. fu distrutta Cartagine?", answer: 146, tol: 0, explain: "146 a.C." },
      { type: "tf", q: "Roma conquistò l'Italia imponendo a tutti i popoli la stessa condizione giuridica.", answer: false, explain: "Usò condizioni diverse: cittadinanza, alleanza, colonie." },
      { type: "mc", q: "Che cosa fu la prima provincia romana?", options: ["La Sicilia", "L'Egitto", "La Grecia"], answer: 0, explain: "Dopo la prima guerra punica." }
    ]
  }
});
