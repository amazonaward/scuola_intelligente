TOPIC('it', {
  id: "l5-sum-media-comunicazione",
  title: "Media e comunicazione di massa",
  intro: "La sera del 30 ottobre 1938 la radio americana trasmette un dramma di Orson Welles tratto dalla <i>Guerra dei mondi</i>: un notiziario simulato annuncia l'invasione dei marziani nel New Jersey. Per decenni si è raccontato che milioni di ascoltatori si siano dati al panico. Oggi sappiamo che la storia fu in gran parte gonfiata dai giornali, concorrenti della radio: ma resta una domanda enorme, che la sociologia si pone da un secolo. <b>I media ci dicono che cosa pensare?</b> Oppure ognuno interpreta come vuole? In questa lezione percorri la storia dei mezzi di comunicazione, dalla stampa ai social, e le principali teorie dei media (dall'«ago ipodermico» al «flusso a due stadi», da <b>McLuhan</b> all'<b>agenda setting</b>), per capire come informazione, potere e vita quotidiana si intrecciano, e come difenderti da <b>fake news</b> e <b>bolle di filtro</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Che cosa sono i media",
      html: `<p>La <b>comunicazione</b> è il processo con cui un emittente trasmette un messaggio a un ricevente attraverso un canale e un codice. Quando il canale è tecnico e raggiunge molte persone insieme, si parla di <b>comunicazione di massa</b> e di <b>mass media</b>: stampa, cinema, radio, televisione, oggi Internet e social network. Ne derivano caratteristiche particolari:</p>
<ul>
<li>il pubblico è <b>vasto, disperso ed eterogeneo</b>;</li>
<li>la comunicazione è spesso <b>unidirezionale</b>: l'emittente è un'organizzazione (giornale, rete televisiva) e il ricevente può rispondere poco;</li>
<li>i contenuti sono prodotti da <b>industrie</b>, con vincoli economici e di pubblicità;</li>
<li>i media sono anche <b>agenti di socializzazione</b>: insieme a famiglia e scuola contribuiscono a formare valori e abitudini.</li>
</ul>
<p>Con Internet e i social si passa dai media «<b>uno a molti</b>» ai media «<b>molti a molti</b>»: chiunque può produrre e diffondere contenuti, il pubblico diventa anche autore (si parla di <b>prosumer</b>, produttore e consumatore, termine di Alvin Toffler, 1980). Nella Costituzione italiana l'<b>art. 21</b> tutela la libertà di manifestazione del pensiero «con la parola, lo scritto e ogni altro mezzo di diffusione», e afferma che la stampa non può essere soggetta ad autorizzazioni o censure.</p>`
    },
    {
      type: "widget",
      title: "Le grandi tappe dei media",
      widget: "timeline",
      options: { unit: "anni", events: [
        { year: 1455, label: "Gutenberg stampa la Bibbia", icon: "📖" },
        { year: 1844, label: "Primo telegrafo di Morse", icon: "📡" },
        { year: 1895, label: "Cinema dei Lumière; primi esperimenti radio di Marconi", icon: "🎬" },
        { year: 1938, label: "La guerra dei mondi alla radio", icon: "📻" },
        { year: 1954, label: "Inizio regolare delle trasmissioni TV della Rai", icon: "📺" },
        { year: 1991, label: "Il World Wide Web diventa pubblico", icon: "🌐" },
        { year: 2004, label: "Nasce Facebook", icon: "👥" },
        { year: 2007, label: "Primo iPhone", icon: "📱" }
      ] },
      caption: "Ogni nuovo medium accorcia i tempi e allarga il pubblico: dalla stampa ai social network."
    },
    {
      type: "text",
      title: "2. Dall'ago ipodermico al flusso a due stadi",
      html: `<p>Le prime teorie nascono tra le due guerre mondiali, quando radio e propaganda dimostrano un enorme potere. Il politologo <b>Harold Lasswell</b> studia la propaganda della prima guerra mondiale (1927) e formula la domanda classica: <i>chi dice che cosa, con quale canale, a chi, con quale effetto?</i></p>
<ul>
<li><b>Teoria dell'«ago ipodermico»</b> (o «proiettile magico»): i media «iniettano» messaggi nel pubblico, visto come passivo e indifeso, e producono effetti diretti e immediati. Era l'idea dominante dopo la propaganda di guerra e il caso <i>La guerra dei mondi</i>.</li>
<li><b>Flusso a due stadi</b> (<i>two-step flow</i>): dalle ricerche di <b>Paul Lazarsfeld</b> sulle campagne elettorali (<i>The People's Choice</i>, 1944) e di <b>Elihu Katz</b> e Lazarsfeld (<i>Personal Influence</i>, 1955) emerge che i messaggi dei media non colpiscono direttamente: passano attraverso i <b>leader d'opinione</b>, persone del proprio ambiente che li selezionano, li commentano e influenzano gli altri. Le <b>relazioni sociali</b> filtrano gli effetti.</li>
<li><b>Usi e gratificazioni</b> (Katz, Blumler, Gurevitch, anni Settanta): non chiedersi «che cosa fanno i media alla gente» ma «<b>che cosa fa la gente con i media</b>»: ci si informa, ci si distrae, si cerca compagnia, si costruisce identità. Il pubblico è attivo.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Due modelli: ago ipodermico e flusso a due stadi",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="30" font-size="16" font-weight="bold" text-anchor="middle" fill="#1e293b">Ago ipodermico</text>
<text x="450" y="30" font-size="16" font-weight="bold" text-anchor="middle" fill="#1e293b">Flusso a due stadi</text>
<line x1="300" y1="45" x2="300" y2="285" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 6"/>
<rect x="105" y="55" width="90" height="40" rx="8" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/>
<text x="150" y="81" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">Media</text>
<g fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2">
<circle cx="50" cy="220" r="16"/><circle cx="100" cy="220" r="16"/><circle cx="150" cy="220" r="16"/><circle cx="200" cy="220" r="16"/><circle cx="250" cy="220" r="16"/>
</g>
<g stroke="#b91c1c" stroke-width="2">
<line x1="140" y1="97" x2="55" y2="202"/><line x1="145" y1="97" x2="100" y2="202"/><line x1="150" y1="97" x2="150" y2="202"/><line x1="155" y1="97" x2="200" y2="202"/><line x1="160" y1="97" x2="245" y2="202"/>
</g>
<text x="150" y="270" font-size="14" text-anchor="middle" fill="#1e293b">effetto diretto sul pubblico</text>
<rect x="405" y="55" width="90" height="40" rx="8" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/>
<text x="450" y="81" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">Media</text>
<circle cx="450" cy="150" r="22" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<text x="450" y="155" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">LO</text>
<line x1="450" y1="97" x2="450" y2="126" stroke="#b91c1c" stroke-width="2"/>
<g fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2">
<circle cx="360" cy="220" r="16"/><circle cx="420" cy="220" r="16"/><circle cx="480" cy="220" r="16"/><circle cx="540" cy="220" r="16"/>
</g>
<g stroke="#a16207" stroke-width="2">
<line x1="440" y1="170" x2="366" y2="204"/><line x1="445" y1="172" x2="420" y2="204"/><line x1="455" y1="172" x2="480" y2="204"/><line x1="460" y1="170" x2="534" y2="204"/>
</g>
<text x="450" y="270" font-size="14" text-anchor="middle" fill="#1e293b">LO = leader d'opinione</text>
</svg>`,
      caption: "Nel secondo modello gli effetti dei media passano attraverso persone reali che interpretano e rilanciano i messaggi."
    },
    {
      type: "example",
      title: "Chi ti influenza davvero?",
      html: `<p>Pensa all'ultima serie che hai guardato o all'ultima canzone che hai ascoltato. L'hai scoperta da una pubblicità, o perché un amico, un creator che segui, un fratello più grande te l'ha consigliata? Se la risposta è «da una persona che stimo», sei un esempio di <b>flusso a due stadi</b>. Oggi gli <b>influencer</b> sono i nuovi leader d'opinione: le aziende lo sanno e pagano per sfruttarne la fiducia. Le piattaforme poi usano <b>algoritmi</b> che osservano ciò che guardi e ti propongono contenuti simili: un nuovo «secondo stadio» automatico, che non si conosce di persona.</p>`
    },
    {
      type: "quiz",
      title: "Controllo rapido (1)",
      questions: [
        { type: "mc", q: "Secondo la teoria del flusso a due stadi, come arrivano gli effetti dei media?", options: ["Attraverso i leader d'opinione che interpretano i messaggi", "Direttamente e senza filtri", "Solo attraverso la pubblicità", "Non arrivano mai"], answer: 0, explain: "Lazarsfeld e Katz mostrarono il ruolo delle relazioni sociali nel filtrare i messaggi." },
        { type: "tf", q: "La teoria dell'ago ipodermico considera il pubblico passivo e indifeso.", answer: true, explain: "I media «inietterebbero» messaggi con effetti diretti." },
        { type: "mc", q: "Che cosa significa «prosumer»?", options: ["Produttore e consumatore insieme", "Professionista del mercato", "Giornalista professionista", "Consumatore passivo"], answer: 0, explain: "Con i social il pubblico produce anche contenuti." }
      ]
    },
    {
      type: "text",
      title: "3. Industria culturale, McLuhan, agenda setting",
      html: `<p>Altre teorie spostano l'attenzione dal singolo messaggio al <b>sistema</b> dei media.</p>
<ul>
<li><b>Industria culturale</b> (<b>Theodor Adorno</b> e <b>Max Horkheimer</b>, <i>Dialettica dell'illuminismo</i>, 1947, scuola di Francoforte): cinema, radio, musica popolare sono prodotti in serie come merci, standardizzati, per addormentare lo spirito critico e confermare l'ordine esistente. Una visione molto critica, nata dall'esperienza del nazismo e della propaganda.</li>
<li><b>Apocalittici e integrati</b> (<b>Umberto Eco</b>, 1964): gli «apocalittici» temono la cultura di massa come decadenza; gli «integrati» ne celebrano acriticamente i vantaggi. Eco propone un terzo atteggiamento: studiare criticamente ciò che i media producono, senza demonizzarli né esaltarli.</li>
<li><b>«Il medium è il messaggio»</b> (<b>Marshall McLuhan</b>, <i>Gli strumenti del comunicare</i>, 1964): ciò che conta non è solo il contenuto, ma la <i>forma</i> del mezzo, che cambia il nostro modo di pensare e vivere. La stampa ha favorito il pensiero lineare e individuale; i media elettronici ci riportano a un «villaggio globale». Distingue <b>media caldi</b> (ad alta definizione, richiedono poca partecipazione, come la radio) e <b>freddi</b> (a bassa definizione, richiedono più partecipazione, come la televisione di allora).</li>
<li><b>Agenda setting</b> (<b>Maxwell McCombs</b> e <b>Donald Shaw</b>, 1972): i media non dicono <i>che cosa</i> pensare, ma <b>intorno a quali temi</b> pensare. Studiando le elezioni presidenziali americane del 1968 a Chapel Hill, mostrarono che i temi più trattati dai media erano gli stessi che gli elettori ritenevano importanti.</li>
<li><b>Gatekeeping</b>: giornalisti e redazioni agiscono come «guardiani del cancello»: decidono quali notizie passano e quali no, secondo criteri di <b>notiziabilità</b> (novità, vicinanza, conflitto, personaggi famosi).</li>
<li><b>Coltivazione</b> (<b>George Gerbner</b>): vedere molta televisione modella la percezione della realtà. Chi guarda molta TV tende a ritenere il mondo più pericoloso di quanto sia (<i>mean world syndrome</i>).</li>
<li><b>Società dello spettacolo</b> (<b>Guy Debord</b>, 1967): la realtà si riduce a rappresentazione, e le relazioni sociali sono mediate da immagini.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Abbina studioso e idea",
      widget: "match",
      options: { pairs: [
        ["McLuhan", "Il medium è il messaggio"],
        ["McCombs e Shaw", "Agenda setting"],
        ["Adorno e Horkheimer", "Industria culturale"],
        ["Lazarsfeld e Katz", "Flusso a due stadi"],
        ["Gerbner", "Coltivazione"],
        ["Debord", "Società dello spettacolo"]
      ] },
      caption: "Ogni teoria illumina un aspetto: effetti, forma del mezzo, potere economico, ruolo del pubblico."
    },
    {
      type: "remember",
      title: "Da ricordare: i media non sono «specchi» della realtà",
      html: `<p>Ogni notizia è una <b>costruzione</b>: qualcuno sceglie che cosa raccontare (gatekeeping), con quale titolo, quale foto, quanto spazio (<b>framing</b>, cioè «cornice» interpretativa). Questo non significa che siano tutte «bugie»: significa che bisogna chiedersi <b>chi parla, a quale scopo, con quale fonte</b>. I media possono essere strumento di democrazia (il «cane da guardia» del potere) o di propaganda. Per questo la sociologia insiste sull'<b>alfabetizzazione mediatica</b> (<i>media literacy</i>): sapere leggere criticamente i messaggi.</p>`
    },
    {
      type: "text",
      title: "4. I media in Italia: dalla Rai ai social",
      html: `<p>In Italia i <b>quotidiani</b> hanno avuto una circolazione relativamente bassa rispetto ad altri Paesi europei, a causa dell'alto analfabetismo storico. La <b>radio</b> si diffonde negli anni Venti-Trenta (la Rai nasce, con questo nome, nel 1944, dopo l'Eiar). Il <b>3 gennaio 1954</b> iniziano le trasmissioni regolari della <b>televisione</b> della Rai. La TV ha un enorme effetto unificante: un Paese di dialetti impara la lingua italiana comune anche tramite lo schermo. Un esempio famoso è la trasmissione <i>Non è mai troppo tardi</i> (1960-1968), con il maestro <b>Alberto Manzi</b>, che insegnava a leggere e scrivere agli adulti analfabeti: si stima che abbia aiutato circa un milione e mezzo di persone a ottenere la licenza elementare.</p>
<p>Altre tappe:</p>
<ul>
<li>anni Settanta: la <b>Corte costituzionale</b> apre alle emittenti locali private; negli anni Ottanta nascono i network commerciali (Fininvest, poi Mediaset), con il <b>duopolio</b> Rai-Mediaset;</li>
<li>la <b>legge Mammì</b> (223 del 1990) regola il sistema radiotelevisivo; nel 1997 nasce l'<b>AGCOM</b> (Autorità per le garanzie nelle comunicazioni);</li>
<li>dagli anni Duemila: Internet, banda larga, <b>social network</b> e smartphone; la TV generalista perde pubblico giovane a favore di piattaforme di <b>streaming</b>; molte persone si informano più sui social che sui giornali;</li>
<li>il <b>giornalismo</b> è regolato in Italia dalla legge 69 del 1963, che istituisce l'<b>Ordine dei giornalisti</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "5. Social network, algoritmi e disinformazione",
      html: `<p>I social network hanno cambiato tre cose: <b>chi</b> parla (chiunque), <b>come</b> si diffonde (condivisioni virali) e <b>che cosa</b> vediamo (selezionato dagli algoritmi). Il sociologo spagnolo <b>Manuel Castells</b> parla di <b>società in rete</b> (1996). Alcuni concetti chiave:</p>
<ul>
<li><b>Bolla di filtro</b> (<i>filter bubble</i>, <b>Eli Pariser</b>, 2011): gli algoritmi, per tenerci sulla piattaforma, ci mostrano ciò che ci piace e conferma le nostre idee, e ci isolano da punti di vista diversi.</li>
<li><b>Camera dell'eco</b> (<i>echo chamber</i>): gruppi in cui le stesse opinioni rimbalzano e si rafforzano; chi la pensa diversamente è escluso. Può portare a <b>polarizzazione</b>.</li>
<li><b>Disinformazione</b> (informazioni false diffuse intenzionalmente) e <b>misinformazione</b> (falsità condivise in buona fede); le <b>fake news</b> sono un caso particolare. Nel 2016 il dizionario Oxford ha scelto come parola dell'anno <i>post-truth</i> («post-verità»). Uno studio pubblicato sulla rivista <i>Science</i> nel 2018 (Vosoughi, Roy, Aral) ha mostrato che su Twitter le notizie false si diffondevano più velocemente e più ampiamente di quelle vere, soprattutto per opera degli utenti, non dei bot.</li>
<li><b>Deepfake</b>: video o audio falsi creati con l'intelligenza artificiale, molto realistici.</li>
<li><b>Cyberbullismo</b>: bullismo online, regolato in Italia dalla legge 71 del 2017.</li>
<li><b>Economia dell'attenzione</b>: i servizi gratuiti guadagnano con la pubblicità e con i dati; il tuo tempo e la tua attenzione sono la «merce».</li>
</ul>
<p>Anche i lati positivi sono rilevanti: accesso a informazioni, mobilitazioni civili (dalle «primavere arabe» del 2011 a molti movimenti giovanili), creatività, nuove forme di comunità. Come in ogni epoca, i media amplificano ciò che le persone ne fanno.</p>`
    },
    {
      type: "example",
      title: "Una notizia, tre titoli",
      html: `<p>Immagina che un Comune riduca di 10.000 euro il fondo per le biblioteche. Un giornale titola: «Tagli alla cultura: il Comune chiude le porte ai libri». Un altro: «Bilancio, il Comune razionalizza le spese: ritocco minimo per le biblioteche». Un terzo: «Il sindaco spiega: nessuna biblioteca chiude». Tutti riportano lo stesso fatto, ma con cornici diverse: ciascuna orienta le emozioni e il giudizio. Il primo parla di perdita, il secondo di efficienza, il terzo di rassicurazione. Confrontare titoli diversi sulla stessa notizia è uno degli esercizi migliori per allenare il senso critico: riconoscere il <b>framing</b>.</p>`
    },
    {
      type: "decision",
      title: "Tu cosa avresti fatto? Una notizia che sembra incredibile",
      html: `<p>Sul gruppo di classe arriva un post: «Il Comune ha deciso di chiudere la tua scuola dal prossimo mese! Condividi subito!». Il post è accompagnato da una foto e da molti commenti arrabbiati. Non c'è alcun link a fonti ufficiali.</p>`,
      question: "Che cosa fai?",
      options: [
        { label: "Condivido subito: se è vero è urgente", outcome: "Rischi di diffondere una falsità. Le notizie che suscitano rabbia o paura si diffondono più in fretta, ed è questo che le rende efficaci." },
        { label: "Ignoro, non mi riguarda", outcome: "Eviti di diffondere un falso, ma se la notizia è vera perdi l'occasione di informarti e partecipare." },
        { label: "Verifico: cerco il comunicato ufficiale del Comune o della scuola, controllo chi ha scritto il post e la data, e solo dopo decido", outcome: "È il comportamento più responsabile: controllare la fonte, la data, le prove, magari con un sito di fact-checking." }
      ],
      answer: 2,
      explain: "Le regole di base dell'alfabetizzazione mediatica sono: fermarsi, controllare fonte e data, cercare conferme indipendenti, e non condividere finché non si è sicuri."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i media",
      intro: "Tre immagini per distinguere effetti, filtri e bolle.",
      tabs: [
        { label: "🔦 Il riflettore", html: `<p>L'<b>agenda setting</b> funziona come un riflettore in un teatro buio: non ti dice che cosa pensare degli attori, ma decide chi illuminare. Ciò che sta nell'ombra, per te, quasi non esiste. Quando un tema è sulle prime pagine per una settimana, la gente pensa che sia il problema numero uno; quando il riflettore si sposta, il tema scompare, anche se il problema esiste ancora.</p>` },
        { label: "🫧 Bolla e camera dell'eco", html: `<p>La <b>bolla di filtro</b> è come una stanza con le pareti che mostrano solo ciò che hai già guardato; la <b>camera dell'eco</b> è una stanza in cui tutti dicono le stesse cose e gridi una frase e ti torna indietro. In entrambi i casi senti sempre le stesse idee, e ti sembra che il mondo la pensi così. Uscirne richiede di cercare di proposito fonti diverse e di leggere anche chi non la pensa come te.</p>`, svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="200" fill="#f8fafc"/><circle cx="150" cy="100" r="80" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/><circle cx="125" cy="90" r="12" fill="#1d4ed8"/><circle cx="170" cy="85" r="12" fill="#1d4ed8"/><circle cx="150" cy="125" r="12" fill="#1d4ed8"/><text x="150" y="190" font-size="14" text-anchor="middle" fill="#1e293b">tutti la pensano come te</text><circle cx="450" cy="100" r="80" fill="#fef9c3" stroke="#a16207" stroke-width="3" stroke-dasharray="8 4"/><circle cx="420" cy="90" r="12" fill="#1d4ed8"/><circle cx="470" cy="85" r="12" fill="#b91c1c"/><circle cx="450" cy="125" r="12" fill="#15803d"/><text x="450" y="190" font-size="14" text-anchor="middle" fill="#1e293b">punti di vista diversi</text></svg>` },
        { label: "🔍 La checklist del fact-checker", html: `<p>Cinque domande da farti davanti a una notizia: <b>1. Chi l'ha scritta?</b> (autore e testata identificabili?) <b>2. Qual è la fonte?</b> (documenti, dati, testimoni verificabili?) <b>3. Quando è stata scritta?</b> (a volte vecchie notizie tornano in circolazione) <b>4. Altri la riportano?</b> (agenzie, testate autorevoli) <b>5. Che emozione vuole suscitare?</b> (se vuole farti arrabbiare, sospetta). Esistono servizi di fact-checking (verifica dei fatti) a cui puoi rivolgerti.</p>` }
      ]
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… maestro Manzi e la televisione educativa",
      html: `<p>Alberto Manzi, maestro elementare e poi naturalista, conduceva <i>Non è mai troppo tardi</i> con una lavagna, carboncini e tanta pazienza. Aveva anche viaggiato più volte in America Latina per insegnare ai contadini analfabeti, e la televisione diventò per lui una scuola per chi non aveva potuto frequentarla. La trasmissione andò in onda dal 1960 al 1968: ancor prima della scuola media unica, la TV faceva scuola di massa. Un esempio di come un medium possa essere strumento di uguaglianza, non solo di intrattenimento.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… la guerra dei mondi fu davvero un panico di massa?",
      html: `<p>Lo studioso <b>Hadley Cantril</b> pubblicò nel 1940 uno studio sul panico provocato dalla trasmissione di Welles, e per anni la storia fu presa come prova dell'ago ipodermico. Studi successivi (per esempio quelli di Jefferson Pooley e Michael Socolow) mostrano che l'ascolto fu limitato (la maggior parte degli americani ascoltava un'altra trasmissione) e che il «panico» fu gonfiato dai giornali, concorrenti della radio. È una lezione di metodo: anche le teorie dei media vanno verificate con dati e non solo con aneddoti.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: media e comunicazione di massa",
      nodes: [
        { id: "med", label: "Mass media", x: 50, y: 6, color: "#3b82f6", html: "Stampa, radio, TV, Internet: comunicazione tecnica rivolta a un pubblico vasto.", why: "Nascono con la società di massa: alfabetizzazione, urbanizzazione e industria permettono pubblici enormi." },
        { id: "eff", label: "Teorie degli effetti", x: 14, y: 42, color: "#10b981", html: "Ago ipodermico, flusso a due stadi, usi e gratificazioni, coltivazione, agenda setting.", why: "Le prime teorie nascono dopo la propaganda di guerra; poi la ricerca empirica mostra che il pubblico è attivo e le relazioni sociali filtrano i messaggi." },
        { id: "cri", label: "Teorie critiche", x: 50, y: 45, color: "#f59e0b", html: "Industria culturale (Adorno e Horkheimer), società dello spettacolo (Debord), apocalittici e integrati (Eco).", why: "Nascono dall'esperienza dei totalitarismi e dalla paura che la cultura di massa addormenti la critica." },
        { id: "mcl", label: "McLuhan", x: 86, y: 42, color: "#ef4444", html: "Il medium è il messaggio; villaggio globale.", why: "Sposta l'attenzione dal contenuto alla forma del mezzo, che cambia percezione e relazioni." },
        { id: "soc", label: "Social e algoritmi", x: 28, y: 82, color: "#8b5cf6", html: "Bolle di filtro, camere dell'eco, fake news, economia dell'attenzione.", why: "Le piattaforme guadagnano tenendoti connesso: gli algoritmi privilegiano contenuti che suscitano emozioni." },
        { id: "lit", label: "Media literacy", x: 72, y: 82, color: "#0ea5e9", html: "Saper leggere criticamente i messaggi: fonte, data, prove, intenti.", why: "In un mondo in cui chiunque pubblica, il controllo non viene più solo dai giornalisti ma anche dai cittadini." }
      ],
      edges: [["med", "eff", "studiano gli effetti"], ["med", "cri", "criticano il sistema"], ["med", "mcl", "forma del mezzo"], ["med", "soc", "evoluzione digitale"], ["soc", "lit", "richiede"], ["cri", "soc", "si rinnova"]]
    },
    {
      type: "quiz",
      title: "Controllo rapido (2)",
      questions: [
        { type: "mc", q: "Che cosa sostiene l'agenda setting?", options: ["I media influenzano i temi su cui il pubblico pensa", "I media dicono cosa pensare su ogni tema", "I media non hanno effetti", "Il pubblico decide i temi dei media"], answer: 0, explain: "Non dicono che cosa pensare, ma intorno a quali temi." },
        { type: "tf", q: "La bolla di filtro è prodotta dagli algoritmi che ci mostrano ciò che ci piace.", answer: true, explain: "Così rischiamo di vedere solo punti di vista simili al nostro." },
        { type: "mc", q: "In che anno iniziarono le trasmissioni regolari della televisione Rai?", options: ["1954", "1926", "1960", "1980"], answer: 0, explain: "Il 3 gennaio 1954." }
      ]
    }
  ],
  glossary: [
    { t: "Mass media", d: "Mezzi di comunicazione tecnici che raggiungono un pubblico vasto e disperso." },
    { t: "Ago ipodermico", d: "Teoria per cui i media «iniettano» messaggi in un pubblico passivo con effetti diretti." },
    { t: "Flusso a due stadi", d: "I messaggi dei media passano attraverso i leader d'opinione prima di arrivare al pubblico." },
    { t: "Agenda setting", d: "I media stabiliscono i temi su cui il pubblico pensa, non le opinioni su di essi." },
    { t: "Industria culturale", d: "Termine di Adorno e Horkheimer: la cultura prodotta in serie come merce." },
    { t: "Gatekeeping", d: "Selezione delle notizie da parte di giornalisti e redazioni." },
    { t: "Bolla di filtro", d: "Isolamento da punti di vista diversi causato dalla personalizzazione algoritmica." },
    { t: "Camera dell'eco", d: "Gruppo in cui le stesse opinioni si rafforzano rimbalzando tra i membri." },
    { t: "Disinformazione", d: "Diffusione intenzionale di informazioni false." },
    { t: "Media literacy", d: "Alfabetizzazione mediatica: capacità di leggere e valutare criticamente i messaggi." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale teoria sostiene che i media producono effetti diretti su un pubblico passivo?", options: ["Ago ipodermico", "Flusso a due stadi", "Usi e gratificazioni", "Agenda setting"], answer: 0, explain: "È la teoria più antica, successiva alla propaganda della prima guerra mondiale." },
      { type: "mc", q: "Che cosa mostrarono Lazarsfeld e Katz?", options: ["Il ruolo dei leader d'opinione nel filtrare i messaggi", "L'inutilità dei media", "Il potere assoluto della radio", "La fine dei giornali"], answer: 0, explain: "Le relazioni sociali mediano gli effetti dei media." },
      { type: "mc", q: "Che cosa significa «il medium è il messaggio»?", options: ["La forma del mezzo cambia il nostro modo di pensare più del contenuto specifico", "Il messaggio è sempre falso", "Solo la TV ha messaggi", "Il contenuto non conta nulla"], answer: 0, explain: "McLuhan sottolinea il ruolo del mezzo come ambiente che trasforma la percezione." },
      { type: "mc", q: "Qual è la differenza tra bolla di filtro e camera dell'eco?", options: ["La prima è prodotta dagli algoritmi, la seconda dall'interazione tra persone con opinioni simili", "Sono identiche", "La bolla riguarda solo la TV", "La camera dell'eco è un luogo fisico"], answer: 0, explain: "Spesso si combinano, rafforzando la polarizzazione." },
      { type: "num", q: "In che anno iniziò il servizio televisivo regolare della Rai?", answer: 1954, tol: 0, explain: "Il 3 gennaio 1954." },
      { type: "tf", q: "Secondo Gerbner, chi guarda molta televisione tende a ritenere il mondo più pericoloso di quanto sia.", answer: true, explain: "È l'idea della coltivazione e della «sindrome del mondo cattivo»." },
      { type: "mc", q: "Che cosa è il gatekeeping?", options: ["La selezione delle notizie da parte dei giornalisti", "La sorveglianza dei confini", "Un tipo di pubblicità", "Una legge sulla stampa"], answer: 0, explain: "Chi lavora nei media è un «guardiano del cancello» che decide che cosa passa." },
      { type: "mc", q: "Quale trasmissione di Alberto Manzi aiutò molti adulti a ottenere la licenza elementare?", options: ["Non è mai troppo tardi", "Lascia o raddoppia?", "Carosello", "Rischiatutto"], answer: 0, explain: "Andò in onda sulla Rai dal 1960 al 1968." },
      { type: "tf", q: "La disinformazione è la diffusione volontaria di informazioni false.", answer: true, explain: "La misinformazione è invece la falsità condivisa in buona fede." },
      { type: "order", q: "Metti in ordine cronologico", items: ["Stampa di Gutenberg", "Cinema dei Lumière", "La guerra dei mondi alla radio", "Televisione Rai regolare", "Nascita di Facebook"], explain: "Dal 1455 al 2004: ogni medium accelera e allarga la diffusione." }
    ]
  }
});
