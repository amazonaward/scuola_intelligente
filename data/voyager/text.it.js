VOYAGER_TEXT({
  lang: 'it',
  title: 'Il viaggio delle Voyager',
  intro: `<p>Nel 1977 la NASA lanciò due sonde gemelle, <b>Voyager 1</b> e <b>Voyager 2</b>, per visitare i pianeti giganti del Sistema Solare. Dovevano durare cinque anni. Oggi, quasi mezzo secolo dopo, sono ancora vive e viaggiano nello spazio tra le stelle, più lontano di qualsiasi altro oggetto costruito dall’uomo.</p>
<p>Sulla mappa vedi le loro traiettorie vere, calcolate dalle posizioni dei pianeti. Tocca un evento nella linea del tempo e la mappa salta a quel giorno: puoi seguire le sonde dalla partenza fino a oggi.</p>`,
  probes: {
    v1: `<p><b>Voyager 1</b> partì per seconda (5 settembre 1977) ma, su una traiettoria più veloce, superò presto la gemella. Visitò Giove (1979) e Saturno (1980), poi, dopo il passaggio ravvicinato a Titano, la sua rotta fu piegata fuori dal piano dei pianeti, verso nord. Dal 2012 è nello spazio interstellare ed è l’oggetto umano più lontano: viaggia a circa 17 km al secondo (oltre 60.000 km/h).</p>
<p>Pesa circa 800 kg, ha un’antenna di 3,7 m e produce energia con generatori a plutonio.</p>`,
    v2: `<p><b>Voyager 2</b> partì per prima (20 agosto 1977) su una rotta più lenta. È l’unica sonda che abbia mai visitato <b>tutti e quattro</b> i pianeti giganti: Giove (1979), Saturno (1981), Urano (1986) e Nettuno (1989). Dal 2018 è anch’essa nello spazio interstellare e viaggia a circa 15 km al secondo.</p>
<p>Pesa circa 800 kg, ha un’antenna di 3,7 m e produce energia con generatori a plutonio.</p>`
  },
  events: [
    { date: '1977-08-20', probe: 'v2', icon: '🚀', title: 'Parte Voyager 2',
      html: `<p>Un razzo Titan-Centaur lancia Voyager 2 da Cape Canaveral, in Florida. Anche se è la “numero 2”, parte per prima!</p>
<p>La missione è possibile grazie a una rara fortuna: circa ogni 176 anni Giove, Saturno, Urano e Nettuno si trovano disposti in modo da poter essere visitati uno dopo l’altro con un solo viaggio. Gli scienziati lo chiamarono il <b>Grand Tour</b>.</p>`,
      photo: 'voyager 2 launch' },
    { date: '1977-09-05', probe: 'v1', icon: '🚀', title: 'Parte Voyager 1',
      html: `<p>Sedici giorni dopo la gemella parte anche Voyager 1. Segue una rotta più rapida e diretta verso Giove e Saturno, così arriverà prima di Voyager 2 a entrambi i pianeti.</p>
<p>A bordo, come su Voyager 2, c’è un disco d’oro con i suoni e le immagini della Terra, pensato per chiunque, un giorno, la ritrovi.</p>`,
      photo: 'voyager 1 launch' },
    { date: '1977-09-18', probe: 'v1', icon: '🌍', title: 'La prima foto di Terra e Luna insieme',
      html: `<p>Appena partita, Voyager 1 si volta e scatta una foto in cui la Terra e la Luna compaiono nella stessa immagine, da circa 11 milioni di chilometri. È la prima volta che si vede il nostro pianeta e il suo satellite insieme dallo spazio.</p>`,
      photo: 'voyager 1 earth moon first image' },
    { date: '1979-03-05', probe: 'v1', planet: 'jupiter', icon: '🌋', title: 'Giove: vulcani su Io!',
      html: `<p>Voyager 1 passa a circa 280.000 km da Giove. Pochi giorni dopo, un’ingegnera della NASA, Linda Morabito, nota in una foto di Io una nuvola sopra il bordo della luna: è l’eruzione di un vulcano!</p>
<p>Fu la prima volta che si scoprivano vulcani attivi fuori dalla Terra. Io è la luna più vulcanica del Sistema Solare: Giove la “strizza” con la sua gravità e il suo interno si scalda.</p>`,
      photo: 'voyager io volcano' },
    { date: '1979-03-05', probe: 'v1', planet: 'jupiter', icon: '🌀', title: 'La Grande Macchia Rossa e un anello nascosto',
      html: `<p>Da vicino, la Grande Macchia Rossa si rivela una gigantesca tempesta che ruota e gira in senso antiorario, più larga della Terra e osservata da secoli. Le foto mostrano vortici e correnti attorno a essa.</p>
<p>Voyager 1 scopre anche che Giove ha un anello sottile e debolissimo, impossibile da vedere da Terra, fatto di polvere.</p>`,
      photo: 'voyager jupiter great red spot' },
    { date: '1979-07-09', probe: 'v2', planet: 'jupiter', icon: '🧊', title: 'Giove: la crosta incrinata di Europa',
      html: `<p>Voyager 2 passa a circa 570.000 km da Giove e fotografa le sue lune. Europa appare come una palla di ghiaccio liscia, solcata da lunghe linee scure, come crepe in un guscio d’uovo, e con pochissimi crateri.</p>
<p>Pochi crateri significano superficie giovane. Sotto il ghiaccio potrebbe esserci un oceano di acqua liquida: oggi Europa è uno dei luoghi più interessanti dove cercare la vita.</p>`,
      photo: 'voyager europa jupiter' },
    { date: '1980-11-11', probe: 'v1', planet: 'saturn', icon: '🟠', title: 'Saturno: l’atmosfera spessa di Titano',
      html: `<p>Voyager 1 passa vicino a Titano, la grande luna di Saturno, e scopre che ha un’atmosfera molto più densa di quella terrestre, fatta soprattutto di azoto, come la nostra. Una nebbia arancione nasconde la superficie.</p>
<p>Titano è l’unica luna del Sistema Solare con un’atmosfera così spessa. Le foto non riuscirono a vedere il suolo: ci vollero altre missioni per svelarlo.</p>`,
      photo: 'voyager titan atmosphere' },
    { date: '1980-11-12', probe: 'v1', planet: 'saturn', icon: '🪐', title: 'Saturno: gli anelli sono pieni di dettagli',
      html: `<p>Voyager 1 passa a circa 125.000 km da Saturno e vede che gli anelli non sono pochi cerchi lisci, ma migliaia di anellini sottili, simili ai solchi di un disco. Nell’anello F, sottile e lontano, alcuni tratti sembrano intrecciati come una treccia.</p>
<p>Scopre anche due piccole lune “pastore”, Prometeo e Pandora, che con la loro gravità tengono in ordine l’anello F, come cani che guidano un gregge.</p>`,
      photo: 'voyager saturn rings' },
    { date: '1980-11-12', probe: 'v1', planet: 'saturn', icon: '↗️', title: 'Voyager 1 lascia il piano dei pianeti',
      html: `<p>Il passaggio vicino a Titano era stato scelto apposta, ma ha un prezzo: la gravità di Titano e di Saturno piega la rotta di Voyager 1 verso nord, fuori dal piano su cui girano i pianeti.</p>
<p>Da quel momento non può più visitare Urano e Nettuno, ma il suo viaggio continua verso lo spazio tra le stelle. Fu una scelta: studiare Titano da vicino valeva più di un Grand Tour completo per questa sonda.</p>` },
    { date: '1981-08-26', probe: 'v2', planet: 'saturn', icon: '🪐', title: 'Voyager 2 a Saturno',
      html: `<p>Voyager 2 passa a Saturno circa nove mesi dopo la gemella, con un’altra visione degli anelli e delle lune. Fotografa strutture scure e mutevoli dentro gli anelli, e studia lune come Encelado e Teti.</p>
<p>Dopo il passaggio la piattaforma delle telecamere si blocca per un po’; gli ingegneri la fanno ripartire da Terra e la sonda può continuare verso Urano grazie alla spinta gravitazionale di Saturno.</p>`,
      photo: 'voyager 2 saturn' },
    { date: '1986-01-24', probe: 'v2', planet: 'uranus', icon: '🔵', title: 'Urano: dieci nuove lune e Miranda',
      html: `<p>Voyager 2 è la prima, e finora l’unica, sonda a visitare Urano. Passa a circa 81.000 km dalle nuvole e scopre dieci nuove piccole lune.</p>
<p>La luna Miranda sembra un mosaico fatto di pezzi che non c’entrano tra loro: scogliere altissime, solchi e pianure, come se fosse stata spezzata e rimessa insieme male. Su Miranda c’è una scogliera enorme, alta circa 20 km.</p>`,
      photo: 'voyager miranda' },
    { date: '1986-01-24', probe: 'v2', planet: 'uranus', icon: '🧲', title: 'Urano: campo magnetico storto e anelli',
      html: `<p>Urano è un pianeta “sdraiato” su un fianco. Voyager 2 scopre che il suo campo magnetico è molto inclinato, di circa 60°, rispetto all’asse di rotazione e non passa neppure dal centro del pianeta.</p>
<p>La sonda studia anche gli anelli, scuri e sottili, e ne trova di nuovi. Il pianeta stesso appare azzurro-verde e quasi senza nuvole visibili.</p>`,
      photo: 'voyager uranus' },
    { date: '1989-08-25', probe: 'v2', planet: 'neptune', icon: '🌀', title: 'Nettuno: la Grande Macchia Scura',
      html: `<p>Voyager 2 arriva a Nettuno dopo 12 anni di viaggio e passa a circa 4.900 km dal polo nord. Sul pianeta blu vede una tempesta ovale grande come la Terra, la <b>Grande Macchia Scura</b>.</p>
<p>Misura anche i venti più veloci del Sistema Solare, circa 2000 km/h, nonostante Nettuno sia così lontano dal Sole e ne riceva pochissimo calore. Scopre inoltre nuove lune e anelli a forma di archi.</p>`,
      photo: 'voyager neptune great dark spot' },
    { date: '1989-08-25', probe: 'v2', planet: 'neptune', icon: '🌫️', title: 'Tritone: geyser di azoto',
      html: `<p>Poche ore dopo Nettuno, Voyager 2 sfiora la luna Tritone, a circa 40.000 km. È uno dei posti più freddi mai visitati: circa -235 °C.</p>
<p>Le foto mostrano nuvolette scure che salgono dal suolo: sono geyser di azoto, che escono dal ghiaccio. Tritone gira al contrario rispetto a Nettuno: forse è un oggetto catturato dalla fascia di Kuiper. Voyager 2 è ancora l’unica sonda ad aver visitato Urano e Nettuno.</p>`,
      photo: 'voyager triton' },
    { date: '1990-02-14', probe: 'v1', icon: '🖼️', title: 'Il ritratto di famiglia',
      html: `<p>Mentre lascia il Sistema Solare, Voyager 1 si volta e scatta 60 foto in cui si vedono sei pianeti: Venere, Terra, Giove, Saturno, Urano e Nettuno. Mercurio era troppo vicino al Sole, Marte nel suo bagliore, Plutone troppo piccolo e scuro.</p>
<p>È il “ritratto di famiglia” del Sistema Solare, visto dall’esterno per la prima e finora unica volta.</p>`,
      photo: 'voyager family portrait' },
    { date: '1990-02-14', probe: 'v1', icon: '🔵', title: 'Il Pallido Punto Blu',
      html: `<p>In una di quelle foto, da circa sei miliardi di chilometri, la Terra è un puntino quasi invisibile in un raggio di luce. L’idea di scattarla era dell’astronomo Carl Sagan.</p>
<p>Sagan ne trasse una riflessione famosa: tutta la storia umana, ogni persona, ogni guerra e ogni gioia, è avvenuta su quel minuscolo granello. Per lui era un motivo in più per prenderci cura l’uno dell’altro e della nostra casa.</p>`,
      photo: 'pale blue dot' },
    { date: '1990-02-14', probe: 'v1', icon: '📷', title: 'Le telecamere vengono spente',
      html: `<p>Dopo il ritratto di famiglia le telecamere di Voyager 1 vengono spente per sempre. Non c’era più nulla di vicino da fotografare, e spegnerle risparmiava energia e memoria per gli strumenti che misurano lo spazio attorno alla sonda.</p>
<p>Da allora le Voyager non mandano più foto, ma continuano a misurare campi magnetici, particelle e onde.</p>` },
    { date: '1998-02-17', probe: 'v1', icon: '🏁', title: 'Voyager 1 è l’oggetto umano più lontano',
      html: `<p>Voyager 1 supera Pioneer 10, una sonda lanciata prima di lei, a circa 70 volte la distanza tra Terra e Sole. Da quel giorno è l’oggetto costruito dall’uomo più lontano dalla Terra, e ogni giorno aumenta il suo vantaggio.</p>` },
    { date: '2004-12-16', probe: 'v1', icon: '💨', title: 'Voyager 1 attraversa il fronte d’arresto',
      html: `<p>A circa 94 volte la distanza Terra-Sole, il vento solare, il flusso di particelle che esce dal Sole, rallenta di colpo, come l’acqua quando colpisce il fondo di un lavandino. Questa zona si chiama <b>fronte d’arresto</b> (termination shock).</p>
<p>Voyager 1 è la prima sonda a entrarvi: scopre che la bolla del Sole è più schiacciata del previsto.</p>` },
    { date: '2007-08-30', probe: 'v2', icon: '💨', title: 'Anche Voyager 2 attraversa il fronte d’arresto',
      html: `<p>Voyager 2 attraversa lo stesso confine, a una distanza minore dal Sole. Le due misure insieme mostrano che la bolla non è simmetrica: a sud è più “compressa” che a nord.</p>` },
    { date: '2012-08-25', probe: 'v1', icon: '🌌', title: 'Voyager 1 entra nello spazio interstellare',
      html: `<p>Il 25 agosto 2012 gli strumenti di Voyager 1 misurano un cambiamento improvviso: le particelle del vento solare quasi spariscono, mentre aumentano quelle che vengono dallo spazio tra le stelle.</p>
<p>Gli scienziati ci misero qualche mese a capirlo, ma era successo: Voyager 1 aveva attraversato l’<b>eliopausa</b> ed era diventata il primo oggetto umano nello spazio interstellare.</p>` },
    { date: '2017-11-28', probe: 'v1', icon: '🔥', title: 'I propulsori si riaccendono dopo 37 anni',
      html: `<p>I piccoli razzi che servono a orientare Voyager 1 verso la Terra stavano perdendo efficacia. Gli ingegneri provarono allora quelli di riserva, che non venivano usati dal 1980, quando la sonda era passata da Saturno.</p>
<p>Dopo 37 anni i propulsori funzionarono al primo colpo, con impulsi di soli 10 millisecondi. La missione poté essere allungata di qualche anno.</p>` },
    { date: '2018-11-05', probe: 'v2', icon: '🌌', title: 'Anche Voyager 2 esce dall’eliosfera',
      html: `<p>Voyager 2 attraversa l’eliopausa e raggiunge lo spazio interstellare. Questa volta, diversamente dalla gemella, ha ancora in funzione lo strumento che misura il plasma, quindi gli scienziati possono vedere direttamente il passaggio.</p>
<p>Le due sonde, in direzioni diverse, mostrano che il confine è stabile e ben definito.</p>` },
    { date: '2023-11-14', probe: 'v1', icon: '⚠️', title: 'Voyager 1 comincia a mandare dati senza senso',
      html: `<p>Verso la metà di novembre 2023 Voyager 1 continua a ricevere comandi ma i dati che invia sono una sequenza confusa di zeri e uno. Nessuno riusciva a capire lo stato di salute della sonda.</p>
<p>Il problema era in uno dei computer di bordo, il sistema dei dati di volo, e in particolare in un chip di memoria rovinato dopo 46 anni nello spazio.</p>` },
    { date: '2024-04-20', probe: 'v1', icon: '🛠️', title: 'La riparazione a 24 miliardi di chilometri',
      html: `<p>Gli ingegneri non potevano riparare il chip, così hanno spostato il programma in altre zone libere della memoria, spezzettandolo in parti più piccole. A ogni passo bisognava aspettare ore perché i segnali andassero e tornassero.</p>
<p>Ad aprile 2024 Voyager 1 ricominciò a mandare dati utili sul suo stato, e poco dopo anche i dati scientifici dagli strumenti.</p>` },
    { date: '2025-03-01', probe: 'both', icon: '🔌', title: 'Si spengono gli strumenti per risparmiare energia',
      html: `<p>I generatori a plutonio perdono circa 4 watt all’anno. Per non restare senza corrente, gli ingegneri spengono uno dopo l’altro gli strumenti meno essenziali e i riscaldatori.</p>
<p>Ne restano accesi alcuni su ciascuna sonda. Se tutto va bene, le Voyager potranno parlare ancora fino agli anni Trenta di questo secolo.</p>` },
    { date: '2026-11-15', probe: 'v1', icon: '⏱️', title: 'Un giorno-luce da casa',
      html: `<p>In questi giorni Voyager 1 raggiunge la distanza di circa un giorno-luce: la luce, e con lei i segnali radio, impiega 24 ore per arrivare fin lì. Un messaggio e la sua risposta richiedono quindi quasi due giorni.</p>
<p>Voyager 2 è ancora più vicina, a circa 20 ore-luce. Il viaggio continuerà per sempre, ma la sonda non farà mai ritorno.</p>` }
  ],
  sections: [
    { icon: '📀', title: 'Il Disco d’oro',
      html: `<p>Su ogni Voyager c’è un disco di rame placcato in oro, come un messaggio in bottiglia. Contiene:</p>
<ul>
<li><b>saluti in 55 lingue</b>, dal sumero antico alle lingue moderne, più un saluto dell’ONU e un messaggio del presidente americano Carter;</li>
<li><b>suoni della Terra</b>: onde, vento, tuoni, animali, il canto delle balene, un bacio, la risata di un bambino;</li>
<li><b>circa 90 minuti di musica</b> di tutto il mondo, da Bach e Beethoven a canti tradizionali e rock;</li>
<li><b>115 immagini</b> codificate in segnali, che mostrano la Terra, le persone, le case, il cibo.</li>
</ul>
<p>Sulla copertina ci sono istruzioni disegnate per far suonare il disco e una mappa della posizione del Sole, fatta con le frequenze di 14 <b>pulsar</b>, stelle che lampeggiano con ritmi molto regolari. Più che per gli alieni, è un messaggio per noi stessi.</p>` },
    { icon: '📡', title: 'Come fanno a parlarci ancora',
      html: `<p>Le Voyager non usano pannelli solari, perché il Sole è troppo lontano. Hanno invece generatori a <b>plutonio</b> (RTG) che trasformano in elettricità il calore del plutonio che si decompone lentamente. All’inizio davano circa 470 watt; oggi molto meno, e calano di circa 4 watt l’anno.</p>
<p>Il trasmettitore di bordo usa solo circa <b>23 watt</b>, come una lampadina del frigo. Quando il segnale arriva sulla Terra è debolissimo, miliardi di volte più debole di un orologio digitale. Per captarlo servono le grandi antenne da 70 metri della <b>Deep Space Network</b>, a Goldstone (California), Madrid e Canberra, così che almeno una sia sempre rivolta verso le sonde mentre la Terra gira.</p>
<p>Le sonde rispondono con un’antenna parabolica di 3,7 m, puntata esattamente verso la Terra. La velocità di trasmissione è di circa 160 bit al secondo: migliaia di volte più lenta di una vecchia connessione telefonica.</p>` },
    { icon: '🎯', title: 'Le fionde gravitazionali',
      html: `<p>Un razzo non bastava per arrivare fino a Nettuno. Le Voyager hanno usato la <b>gravità dei pianeti</b>: passando vicino a Giove, una sonda viene attirata, curva e ne esce con più velocità, “rubando” un po’ del suo moto al pianeta, che è così pesante da non accorgersene.</p>
<p>Ogni pianeta era una fionda verso il successivo. Per questo il Grand Tour è stato possibile con una sonda di circa 800 kg e poco carburante: ognuna ha usato Giove, Saturno e così via per cambiare rotta e velocità senza consumare quasi nulla.</p>` },
    { icon: '🫧', title: 'Che cos’è l’eliosfera',
      html: `<p>Il Sole emette in continuazione il <b>vento solare</b>, un flusso di particelle cariche che scorre a centinaia di km al secondo e che gonfia una gigantesca bolla attorno al Sistema Solare: l’<b>eliosfera</b>.</p>
<p>Più lontano il vento rallenta al fronte d’arresto, poi si accumula nell’eliosfera esterna, e infine incontra il gas che c’è tra le stelle. Il bordo, dove il vento solare non spinge più, si chiama <b>eliopausa</b>. Oltre questo limite c’è lo spazio interstellare.</p>
<p>Attenzione: le Voyager hanno lasciato l’eliosfera, ma non il Sistema Solare! La nuvola di Oort, un enorme guscio di comete, comincia a circa 300 anni da loro e finirà tra decine di migliaia di anni.</p>` },
    { icon: '📏', title: 'Quanto sono lontane',
      html: `<p>Voyager 1 è a più di 25 miliardi di chilometri dalla Terra, circa 170 volte la distanza Terra-Sole. Se la Terra fosse a un passo dal Sole, Voyager 1 sarebbe a quasi 170 passi.</p>
<p>La luce impiega circa 8 minuti per arrivare dal Sole, quasi 5 ore e mezza fino a Nettuno e circa un giorno fino a Voyager 1. Un aereo di linea, a 900 km/h, ci metterebbe oltre 3000 anni.</p>
<p>Eppure, nello spazio interstellare queste distanze sono piccole: la stella più vicina, Proxima Centauri, è a 4,2 anni-luce, oltre 1.500 volte più lontana di Voyager 1 oggi.</p>` },
    { icon: '♾️', title: 'E poi?',
      html: `<p>Prima o poi le Voyager smetteranno di parlare, quando l’energia non basterà più. Ma continueranno a viaggiare in silenzio per miliardi di anni, senza nulla che le fermi.</p>
<p>Tra circa 40.000 anni Voyager 1 passerà a circa 1,6 anni-luce dalla stella <b>Gliese 445</b>, mentre Voyager 2 passerà a circa 1,7 anni-luce da <b>Ross 248</b>. Non sono incontri ravvicinati: sono solo i punti più vicini del loro lungo viaggio. Con il disco d’oro a bordo, resteranno una testimonianza di chi siamo.</p>` }
  ],
  quiz: [
    { type: 'mc', q: 'Perché nel 1977 fu possibile il “Grand Tour”?', options: ['Perché i razzi erano molto più potenti', 'Perché i quattro pianeti giganti erano disposti in modo favorevole, cosa che capita ogni circa 176 anni', 'Perché i pianeti erano vicinissimi alla Terra'], answer: 1, explain: 'Giove, Saturno, Urano e Nettuno si allineavano in modo da poter essere visitati uno dopo l’altro, usando la gravità di ciascuno per raggiungere il successivo.' },
    { type: 'tf', q: 'Voyager 2 è partita prima di Voyager 1.', answer: true, explain: 'Voyager 2 è partita il 20 agosto 1977, Voyager 1 il 5 settembre. Ma Voyager 1 ha preso una rotta più veloce e ha raggiunto prima Giove e Saturno.' },
    { type: 'mc', q: 'Quale scoperta fece Voyager 1 sulla luna Io?', options: ['Ha un oceano d’acqua sotto il ghiaccio', 'Ha vulcani attivi', 'Ha un’atmosfera simile alla Terra'], answer: 1, explain: 'Fu la prima scoperta di vulcani attivi fuori dalla Terra.' },
    { type: 'mc', q: 'Quale luna di Giove mostrò una superficie di ghiaccio incrinata e con pochi crateri?', options: ['Europa', 'Io', 'Tritone'], answer: 0, explain: 'Europa, fotografata da Voyager 2 nel 1979, potrebbe avere un oceano sotto il ghiaccio.' },
    { type: 'tf', q: 'Voyager 1 ha visitato anche Urano e Nettuno.', answer: false, explain: 'Dopo Titano, la sua rotta fu piegata fuori dal piano dei pianeti. Urano e Nettuno sono stati visitati solo da Voyager 2.' },
    { type: 'num', q: 'Circa a quale velocità arrivano i venti su Nettuno scoperti da Voyager 2? (km/h)', answer: 2000, tol: 300, unit: 'km/h', explain: 'I venti di Nettuno sono i più veloci del Sistema Solare, circa 2000 km/h.' },
    { type: 'mc', q: 'Che cosa mostra la foto “Pallido Punto Blu”?', options: ['La Terra vista da circa sei miliardi di chilometri', 'Nettuno visto da vicino', 'Il Sole dalla superficie di Giove'], answer: 0, explain: 'La Terra è un puntino minuscolo in un raggio di luce. Carl Sagan ne trasse una famosa riflessione sulla nostra piccolezza e sul valore della nostra casa.' },
    { type: 'order', q: 'Metti in ordine questi eventi', items: ['Partenza delle Voyager (1977)', 'Voyager 2 a Urano (1986)', 'Pallido Punto Blu (1990)', 'Voyager 1 nello spazio interstellare (2012)'], explain: 'Dalla partenza (1977) a Urano (1986), poi la foto della Terra (1990), infine l’uscita dall’eliosfera (2012).' },
    { type: 'mc', q: 'Come producono energia le Voyager?', options: ['Con pannelli solari giganti', 'Con generatori a plutonio', 'Con batterie ricaricabili'], answer: 1, explain: 'I generatori a plutonio (RTG) trasformano il calore in elettricità. Il Sole è troppo lontano per i pannelli solari.' },
    { type: 'mc', q: 'Come si chiama la rete di grandi antenne che comunica con le Voyager?', options: ['Deep Space Network', 'Hubble Network', 'Star Link'], answer: 0, explain: 'La Deep Space Network ha antenne da 70 metri a Goldstone, Madrid e Canberra.' },
    { type: 'tf', q: 'Il Disco d’oro contiene saluti in 55 lingue.', answer: true, explain: 'Contiene anche suoni della Terra, circa 90 minuti di musica e 115 immagini.' },
    { type: 'num', q: 'Circa quanti anni ci vorranno perché Voyager 1 passi vicino alla stella Gliese 445? (anni)', answer: 40000, tol: 5000, unit: 'anni', explain: 'Tra circa 40.000 anni passerà a circa 1,6 anni-luce dalla stella.' }
  ]
});
