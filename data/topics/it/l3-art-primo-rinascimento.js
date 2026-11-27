TOPIC('it', {
  id: `l3-art-primo-rinascimento`,
  title: `Il primo Rinascimento a Firenze`,
  intro: `Firenze, primi decenni del Quattrocento. Una città di banchieri e di mercanti, governata di fatto dalla famiglia Medici, diventa il laboratorio di una rivoluzione: gli artisti riscoprono l'antichità classica, studiano la natura e inventano un metodo matematico per rappresentare lo spazio, la <b>prospettiva</b>. Un architetto, <b>Brunelleschi</b>, copre con una cupola gigantesca la cattedrale; uno scultore, <b>Donatello</b>, fa rinascere il nudo e il monumento equestre; un pittore morto a ventisei anni, <b>Masaccio</b>, dipinge figure con un peso reale in uno spazio reale. Nasce il modo di vedere che chiamiamo "moderno". 🏛️🎨`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Perché proprio Firenze?`,
      html: `<p>La parola <b>Rinascimento</b> si deve a <b>Giorgio Vasari</b>, che nelle <i>Vite</i> (1550) parla di "rinascita" delle arti dopo secoli di "maniera barbara": Giotto aveva cominciato la risalita, gli artisti del Quattrocento la compiono guardando agli antichi. Oggi sappiamo che il Medioevo non fu "buio", ma l'idea di una <b>rinascita dell'antico</b> è davvero il cuore di questo periodo.</p>
<p>Perché a Firenze? Le ragioni sono molte e si intrecciano:</p>
<ul>
<li><b>Ricchezza</b>: banche e industria della lana e della seta fanno di Firenze una delle città più ricche d'Europa; il fiorino d'oro è una moneta internazionale;</li>
<li><b>Committenti</b>: le corporazioni (le Arti) finanziano opere pubbliche, e dal 1434 la famiglia <b>Medici</b>, con <b>Cosimo il Vecchio</b>, orienta il gusto della città e protegge artisti e letterati;</li>
<li><b>Umanesimo</b>: intellettuali come Petrarca, Salutati, Bruni riscoprono i testi latini e greci e mettono al centro l'<b>uomo</b> e la sua capacità di conoscere e costruire;</li>
<li><b>Concorrenza civica</b>: le città si sfidano a colpi di monumenti, e a Firenze i concorsi pubblici (come quello del 1401 per la porta del Battistero) fanno emergere i talenti.</li>
</ul>`
    },
    {
      type: `text`, title: `2. Brunelleschi e la cupola di Santa Maria del Fiore`,
      html: `<p><b>Filippo Brunelleschi</b> (Firenze, 1377 - 1446), nato come orafo, perse nel 1401 il concorso per la porta del Battistero contro <b>Lorenzo Ghiberti</b> e si dedicò all'architettura, studiando gli edifici antichi a Roma. Il suo capolavoro è la <b>cupola</b> della cattedrale di <b>Santa Maria del Fiore</b>, il Duomo di Firenze.</p>
<p>Il problema: la cattedrale, iniziata nel 1296 su progetto di Arnolfo di Cambio, aveva una grande apertura ottagonale (circa <b>45 m</b> di diametro) ancora da coprire. Per una cupola così grande era impensabile costruire una gigantesca <b>centina</b> (armatura) di legno: non c'era abbastanza legname né una struttura capace di reggerla. Brunelleschi vinse il concorso del <b>1418</b> con una soluzione audace; i lavori partirono nel 1420 e la cupola fu chiusa nel 1436 (consacrazione di papa Eugenio IV, 25 marzo 1436).</p>
<p>Le idee chiave:</p>
<ul>
<li><b>doppia calotta</b>: una cupola interna più spessa e una esterna più leggera, con un'intercapedine in cui salgono le scale; alleggerisce e protegge dall'umidità;</li>
<li><b>profilo a sesto acuto</b> (archiacuto): la curva a punta spinge meno lateralmente di una semisfera;</li>
<li><b>mattoni a spina di pesce</b>: disposti in modo da formare anelli orizzontali che si autosostengono mentre la cupola cresce, riducendo il bisogno di armature;</li>
<li><b>catene</b> di pietra e di legno che circondano la cupola e ne contrastano la tendenza ad aprirsi;</li>
<li><b>macchine di cantiere</b>, come un grande argano con inversione di marcia mosso da buoi, per sollevare i materiali.</li>
</ul>
<p>La <b>lanterna</b> che la corona, disegnata da Brunelleschi, fu realizzata dopo la sua morte e completata intorno al 1461.</p>`
    },
    {
      type: `svg`, title: `La doppia calotta`,
      caption: `Sezione schematica: una calotta interna spessa, una esterna più sottile e, in mezzo, l'intercapedine con le scale. In alto la lanterna.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#fff7ed"/><path d="M130 260 L130 200 Q130 60 300 40 Q470 60 470 200 L470 260" fill="none" stroke="#9a3412" stroke-width="8"/><path d="M165 260 L165 205 Q165 100 300 82 Q435 100 435 205 L435 260" fill="none" stroke="#c2410c" stroke-width="8"/><rect x="288" y="12" width="24" height="30" fill="#fed7aa" stroke="#9a3412" stroke-width="3"/><polygon points="300,0 292,12 308,12" fill="#9a3412"/><line x1="130" y1="262" x2="470" y2="262" stroke="#44403c" stroke-width="5"/><path d="M148 235 L156 220 L148 205 L156 190" fill="none" stroke="#1d4ed8" stroke-width="3"/><text x="300" y="150" font-size="16" fill="#7c2d12" text-anchor="middle">intercapedine (scale)</text><text x="300" y="285" font-size="14" fill="#44403c" text-anchor="middle">diametro circa 45 m</text><text x="40" y="120" font-size="14" fill="#9a3412">calotta esterna</text><text x="190" y="135" font-size="14" fill="#c2410c">calotta interna</text><text x="330" y="22" font-size="14" fill="#7c2d12">lanterna</text></svg>`
    },
    {
      type: `example`, title: `Esempio: come si costruisce un arco senza impalcatura?`,
      html: `<p>Prova a immaginare un igloo: i blocchi di ghiaccio si posano in anelli orizzontali, ognuno più stretto del precedente, e ogni anello, una volta chiuso, sta in piedi da solo. La cupola di Brunelleschi funziona con lo stesso principio: ogni anello di mattoni, chiuso, è stabile e fa da base al successivo, senza dover sostenere tutto l'insieme con un'armatura di legno. Brunelleschi non scoprì un principio nuovo (le cupole romane, come quella del Pantheon, lo conoscevano) ma lo adattò, con calcolo e inventiva, a una scala mai tentata dal Medioevo. Per questo la cupola è un <b>simbolo</b> del Rinascimento: l'antico, rivisto con la ragione e la tecnica.</p>`
    },
    {
      type: `decision`, title: `1418: come coprire il Duomo?`,
      html: `<p>L'Opera del Duomo di Firenze indice un concorso. Il tamburo ottagonale è pronto, ma l'apertura è larghissima e nessuno sa come chiuderla. Sei nel comitato di giudici.</p>`,
      question: `Quale progetto scegli?`,
      options: [
        { label: `Una cupola costruita su un'enorme centina di legno`, outcome: `Il metodo tradizionale: sicuro sulla carta, ma servirebbero quantità di legname gigantesche e una struttura essa stessa instabile. Troppo costosa e rischiosa.` },
        { label: `Una cupola a doppia calotta che si sostiene da sola mentre sale`, outcome: `È la proposta di Brunelleschi: poco legno, anelli di mattoni autoportanti, catene per contrastare la spinta. Audace, ma calcolata.` },
        { label: `Rinunciare alla cupola e coprire con un tetto piano`, outcome: `Evita il rischio, ma lascerebbe incompiuta la cattedrale e deluderebbe l'orgoglio della città.` }
      ],
      answer: 1,
      explain: `L'Opera del Duomo scelse il progetto di Brunelleschi (con Ghiberti affiancato come capomaestro). I lavori durarono sedici anni e la cupola, chiusa nel 1436, è ancora oggi la più grande cupola in muratura mai costruita.`
    },
    {
      type: `text`, title: `3. La prospettiva`,
      html: `<p>L'invenzione che cambia la pittura è la <b>prospettiva lineare</b> (o "centrale"), messa a punto da Brunelleschi intorno al <b>1415-1420</b>. La tradizione racconta che dipinse su una tavoletta il Battistero visto dalla porta del Duomo, praticò un foro nel dipinto e lo fece guardare riflesso in uno specchio: l'immagine dipinta coincideva con la realtà. La regola: le rette parallele che si allontanano dall'osservatore <b>convergono</b> in un punto, il <b>punto di fuga</b>, posto sulla linea dell'orizzonte; gli oggetti diventano più piccoli in proporzione alla distanza.</p>
<p>La teoria fu scritta da <b>Leon Battista Alberti</b> nel trattato <i>De pictura</i> (latino, 1435; versione in volgare, 1436), che definisce il quadro come una <b>"finestra aperta"</b> sul mondo. Con la prospettiva la pittura diventa una scienza, basata sulla geometria: le figure si dispongono in uno spazio misurabile e coerente. (Nell'ultima lezione del programma di disegno vedrai come si costruisce.)</p>
<p>Anche l'architettura si fonda su <b>proporzioni</b> e moduli ripetuti: nell'<b>Ospedale degli Innocenti</b> (iniziato nel 1419), il portico ha archi a tutto sesto su colonne corinzie, e ogni campata è un cubo perfetto, ripetuto come un'unità di misura. Ordine, chiarezza, armonia: è il linguaggio degli antichi, reinterpretato.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: Brunelleschi e la prospettiva`,
      questions: [
        { type: `mc`, q: `Quale caratteristica ha la cupola di Santa Maria del Fiore?`, options: [`Doppia calotta`, `Calotta unica in legno`, `Pianta circolare`], answer: 0, explain: `Una calotta interna e una esterna con un'intercapedine.` },
        { type: `tf`, q: `Il punto di fuga della prospettiva si trova sulla linea dell'orizzonte.`, answer: true, explain: `Le rette perpendicolari al quadro convergono in un punto dell'orizzonte.` },
        { type: `mc`, q: `Chi scrisse il primo trattato sulla pittura in prospettiva (De pictura)?`, options: [`Leon Battista Alberti`, `Giorgio Vasari`, `Cosimo de' Medici`], answer: 0, explain: `Alberti, nel 1435-1436.` }
      ]
    },
    {
      type: `example`, title: `Esempio: leggere la prospettiva in un'immagine`,
      html: `<p>Guarda una foto di una strada con i binari del tram: i due binari, paralleli nella realtà, sembrano incontrarsi lontano, all'altezza dei tuoi occhi. Quel punto è il punto di fuga e la linea su cui sta è l'orizzonte. Nella Trinità di Masaccio i cassettoni della volta a botte convergono verso un punto situato circa all'altezza dello sguardo di chi sta in piedi davanti all'affresco: per questo la cappella dipinta sembra davvero scavare il muro.</p>`
    },
    {
      type: `text`, title: `4. Donatello: la scultura rinasce`,
      html: `<p><b>Donatello</b> (Donato di Niccolò di Betto Bardi, Firenze 1386 - 1466) è il più grande scultore del secolo. Studia gli antichi ma li supera in espressività.</p>
<ul>
<li><b>San Giorgio</b> (circa 1415-1417, per una nicchia di Orsanmichele): un giovane cavaliere in piedi, saldo sulle gambe, lo sguardo fiero. Sul basamento il rilievo di <b>San Giorgio e la principessa</b> è eseguito a <b>rilievo schiacciato</b> (stiacciato): uno spessore di pochi millimetri che crea profondità con la prospettiva;</li>
<li><b>David</b> in bronzo (databile intorno al 1440, con datazioni discusse): è il primo <b>nudo a tutto tondo</b> dall'antichità. Un ragazzo con un cappello, un piede sulla testa mozzata di Golia, in posa rilassata e insieme sensuale;</li>
<li><b>Monumento equestre al Gattamelata</b> (Padova, 1447-1453 circa): il condottiero Erasmo da Narni, a cavallo, in bronzo; è il primo grande monumento equestre dall'epoca di Marco Aurelio;</li>
<li><b>Maddalena penitente</b> (legno, tarda): un corpo scarnificato dal digiuno, di forte espressività.</li>
</ul>`
    },
    {
      type: `text`, title: `5. Masaccio: la pittura con peso e spazio`,
      html: `<p><b>Masaccio</b> (Tommaso di ser Giovanni, San Giovanni Valdarno 1401 - Roma 1428) morì a soli ventisei anni, ma cambiò la pittura. Prende da Giotto il volume e lo unisce alla prospettiva di Brunelleschi e alla scultura di Donatello. Le sue figure hanno peso, proiettano <b>ombre coerenti</b> con una sola fonte di luce, e stanno in uno spazio costruito.</p>
<ul>
<li><b>Trinità</b> (Santa Maria Novella, Firenze, circa 1426-1428): un affresco che sembra aprire una cappella nel muro, con una volta a botte a cassettoni in prospettiva rigorosa. In alto Dio Padre sorregge la croce, sotto i committenti inginocchiati fuori dalla cappella, e in basso un sarcofago con uno scheletro e la scritta "Io fui già quel che voi siete e quel che son voi anche sarete";</li>
<li><b>Cappella Brancacci</b> (Santa Maria del Carmine, Firenze, circa 1424-1427, con Masolino): la <b>Cacciata dei progenitori dall'Eden</b>, con Adamo ed Eva nudi, il corpo piegato dalla vergogna e dal dolore, e il <b>Tributo</b>, dove gli apostoli sono disposti come in un gruppo di persone vere, sotto una luce naturale.</li>
</ul>`
    },
    {
      type: `widget`, title: `Cronologia del primo Rinascimento`,
      widget: `timeline`,
      options: { events: [ { year: 1401, label: `Concorso per la porta del Battistero`, icon: `🚪` }, { year: 1418, label: `Concorso per la cupola`, icon: `⛪` }, { year: 1419, label: `Inizia l'Ospedale degli Innocenti`, icon: `🏛️` }, { year: 1426, label: `Masaccio dipinge la Trinità (c. 1426-28)`, icon: `🎨` }, { year: 1434, label: `Cosimo de' Medici al potere`, icon: `🏦` }, { year: 1435, label: `Alberti scrive De pictura`, icon: `📖` }, { year: 1436, label: `Cupola chiusa e consacrata`, icon: `⛪` }, { year: 1453, label: `Gattamelata (c. 1447-53)`, icon: `🐎` } ], unit: `anni` },
      caption: `Tutte le date sono d.C.`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… due porte sono state un'Olimpiade dell'arte?`,
      html: `<p>Nel 1401 l'Arte di Calimala bandì un concorso per la seconda porta di bronzo del Battistero: dovevano fare la formella del <b>Sacrificio di Isacco</b>. Parteciparono sette artisti e si disputarono la vittoria Ghiberti e Brunelleschi; vinse <b>Ghiberti</b> (le formelle di Ghiberti e di Brunelleschi si vedono oggi al Bargello). Ghiberti lavorò poi alla terza porta, la <b>Porta del Paradiso</b> (1425-1452): Michelangelo, secondo Vasari, avrebbe detto che era tanto bella da essere degna di stare alle porte del Paradiso.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… il metodo di Brunelleschi fa ancora discutere?`,
      html: `<p>Brunelleschi non lasciò un trattato né disegni dettagliati del suo metodo, e gli studiosi continuano a discutere su come esattamente i mattoni siano stati disposti e quali macchine usasse. Sappiamo che inventò anche strumenti per il cantiere, come un grande argano con inversione di marcia mosso dai buoi. Una cupola così ardita richiese attenzione continua: è un monumento che ancora oggi viene misurato e monitorato dagli ingegneri.</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul><li><b>Firenze</b>: ricchezza, Medici (Cosimo dal 1434), umanesimo; "Rinascimento" è termine di Vasari.</li><li><b>Brunelleschi</b>: cupola (concorso 1418, chiusa 1436), prospettiva, Ospedale degli Innocenti (1419).</li><li><b>Donatello</b>: San Giorgio, David bronzo, Gattamelata; <b>Masaccio</b>: Trinità, Brancacci. <b>Alberti</b>: De pictura (1435).</li></ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `La prospettiva e il Rinascimento si capiscono anche con analogie e con le mani.`,
      tabs: [
        {
          label: `🪟 Il quadro come finestra`,
          html: `<p>Alberti dice di immaginare il quadro come una <b>finestra aperta</b>. Guarda un corridoio dritto, con le piastrelle del pavimento: le linee dei bordi sembrano avvicinarsi sempre di più, fino a incontrarsi in un punto all'orizzonte. Per disegnarlo sul vetro basta ricalcare quello che vedi: il quadro in prospettiva è proprio quel ricalco, fatto con la geometria invece che con la matita sul vetro.</p>`
        },
        {
          label: `🧩 Chi ha fatto cosa?`,
          html: `<p>Classifica le opere nelle tre arti.</p>`,
          widget: `classify`,
          options: { groups: [`Architettura`, `Scultura`, `Pittura`], items: [[`Cupola del Duomo`, 0], [`Ospedale degli Innocenti`, 0], [`David di bronzo`, 1], [`Gattamelata`, 1], [`San Giorgio`, 1], [`Trinità`, 2], [`Cacciata dall'Eden`, 2]] }
        },
        {
          label: `🔗 Abbina`,
          html: `<p>Collega ogni artista alla sua opera.</p>`,
          widget: `match`,
          options: { pairs: [[`Brunelleschi`, `Cupola di Santa Maria del Fiore`], [`Donatello`, `Gattamelata`], [`Masaccio`, `Trinità`], [`Ghiberti`, `Porta del Paradiso`], [`Alberti`, `De pictura`]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: il primo Rinascimento`,
      nodes: [
        { id: `fir`, label: `Firenze 1400`, x: 50, y: 6, color: `#64748b`, html: `Città di banchieri, mercanti e corporazioni.`, why: `Ricchezza e orgoglio civico portano a finanziare grandi opere e a sfidarsi nei concorsi.` },
        { id: `ant`, label: `Antico e umanesimo`, x: 16, y: 30, color: `#f59e0b`, html: `Riscoperta di Roma e della Grecia.`, why: `Gli umanisti mettono l'uomo al centro; gli artisti studiano rovine e statue per ritrovare regole e proporzioni.` },
        { id: `pro`, label: `Prospettiva`, x: 50, y: 32, color: `#0ea5e9`, html: `Rappresentazione matematica dello spazio.`, why: `Brunelleschi la ricava dalla geometria; Alberti la teorizza. Lo spazio diventa misurabile.` },
        { id: `nat`, label: `Studio della natura`, x: 84, y: 30, color: `#22c55e`, html: `Anatomia, luce, ombre.`, why: `Per rendere vivo un corpo bisogna osservarlo: nasce la ricerca anatomica degli artisti.` },
        { id: `bru`, label: `Brunelleschi`, x: 14, y: 62, color: `#ef4444`, html: `Cupola, Innocenti, prospettiva.`, why: `Fonde calcolo, tecnica e linguaggio classico.` },
        { id: `don`, label: `Donatello`, x: 50, y: 66, color: `#a855f7`, html: `San Giorgio, David, Gattamelata.`, why: `Riporta il nudo e il monumento equestre dopo mille anni.` },
        { id: `mas`, label: `Masaccio`, x: 84, y: 62, color: `#14b8a6`, html: `Trinità, Brancacci.`, why: `Applica prospettiva e volume alla pittura: figure con peso.` },
        { id: `leg`, label: `Eredità`, x: 50, y: 92, color: `#3b82f6`, html: `Leonardo, Michelangelo, Raffaello.`, why: `Il Quattrocento fiorentino prepara il Rinascimento maturo.` }
      ],
      edges: [[`fir`, `ant`, `cultura`], [`fir`, `pro`, `ricerca`], [`fir`, `nat`, `osservazione`], [`ant`, `bru`, `modello`], [`pro`, `bru`, `invenzione`], [`pro`, `mas`, `applica`], [`nat`, `don`, `espressione`], [`bru`, `leg`, `eredità`], [`don`, `leg`, `eredità`], [`mas`, `leg`, `eredità`]]
    },
    {
      type: `quiz`, title: `Mini-quiz: scultura e pittura`,
      questions: [
        { type: `mc`, q: `Quale opera di Donatello è il primo nudo a tutto tondo dall'antichità?`, options: [`David in bronzo`, `Gattamelata`, `Maddalena penitente`], answer: 0, explain: `Il David in bronzo, intorno al 1440.` },
        { type: `mc`, q: `Dove si trova l'affresco della Trinità di Masaccio?`, options: [`Santa Maria Novella, Firenze`, `Cappella degli Scrovegni, Padova`, `Duomo di Siena`], answer: 0, explain: `Nella chiesa di Santa Maria Novella.` },
        { type: `tf`, q: `Masaccio visse fino a tarda età e dipinse per quarant'anni.`, answer: false, explain: `Morì a Roma nel 1428, a ventisei anni.` }
      ]
    }
  ],
  glossary: [
    { t: `Rinascimento`, d: `Periodo dei secoli XV-XVI, caratterizzato dalla riscoperta dell'antico e dal ruolo centrale dell'uomo.` },
    { t: `Umanesimo`, d: `Movimento culturale che studia i classici e mette al centro l'uomo.` },
    { t: `Prospettiva lineare`, d: `Metodo geometrico per rappresentare lo spazio su una superficie piana.` },
    { t: `Punto di fuga`, d: `Punto dell'orizzonte in cui convergono le rette parallele che si allontanano.` },
    { t: `Centina`, d: `Armatura provvisoria di legno che sostiene un arco o una volta durante la costruzione.` },
    { t: `Doppia calotta`, d: `Cupola formata da due gusci, uno interno e uno esterno.` },
    { t: `Lanterna`, d: `Piccolo elemento a finestre che corona una cupola.` },
    { t: `Rilievo schiacciato`, d: `Rilievo di spessore minimo che suggerisce profondità con la prospettiva (stiacciato).` },
    { t: `Tutto tondo`, d: `Scultura visibile da ogni lato, non legata a una parete.` },
    { t: `Medici`, d: `Famiglia di banchieri che governò di fatto Firenze dal 1434.` },
    { t: `Trinità`, d: `Soggetto cristiano di Dio Padre, Figlio e Spirito Santo.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quale architetto progettò la cupola di Santa Maria del Fiore?`, options: [`Brunelleschi`, `Alberti`, `Arnolfo di Cambio`], answer: 0, explain: `Brunelleschi, vincitore del concorso del 1418.` },
      { type: `mc`, q: `Che cosa significa l'espressione di Alberti "quadro come finestra aperta"?`, options: [`Il dipinto è una veduta sul mondo costruita con la prospettiva`, `Il quadro deve contenere finestre`, `Il quadro si apre come un'anta`], answer: 0, explain: `La superficie dipinta funziona come una finestra sullo spazio.` },
      { type: `tf`, q: `Il concorso del 1401 per la porta del Battistero fu vinto da Brunelleschi.`, answer: false, explain: `Lo vinse Lorenzo Ghiberti.` },
      { type: `num`, q: `In che anno fu chiusa la cupola del Duomo di Firenze?`, answer: 1436, tol: 0, explain: `Nel 1436, consacrata il 25 marzo da Eugenio IV.` },
      { type: `text`, q: `Come si chiama il rilievo di spessore minimo usato da Donatello?`, answer: [`stiacciato`, `rilievo schiacciato`, `schiacciato`], explain: `Rilievo schiacciato o stiacciato.` },
      { type: `order`, q: `Ordina cronologicamente.`, items: [`Concorso per la porta del Battistero`, `Concorso per la cupola`, `Cupola chiusa`, `Gattamelata (inizio)`], explain: `1401; 1418; 1436; circa 1447.` },
      { type: `mc`, q: `Quale opera di Masaccio mostra una cappella in prospettiva con uno scheletro sul sarcofago?`, options: [`Trinità`, `Tributo`, `Cacciata dall'Eden`], answer: 0, explain: `La Trinità di Santa Maria Novella.` },
      { type: `mc`, q: `Chi fu il capostipite dei Medici che governò Firenze dal 1434?`, options: [`Cosimo il Vecchio`, `Lorenzo il Magnifico`, `Piero il Gottoso`], answer: 0, explain: `Cosimo il Vecchio (Lorenzo era suo nipote).` },
      { type: `tf`, q: `Il Gattamelata di Donatello è il primo grande monumento equestre in bronzo dopo l'antichità.`, answer: true, explain: `Si trova a Padova, eseguito circa nel 1447-1453.` },
      { type: `mc`, q: `Perché la cupola di Brunelleschi è costruita senza una grande centina di legno?`, options: [`Anelli di mattoni a spina di pesce che si autosostengono`, `Perché è in legno`, `Perché è molto piccola`], answer: 0, explain: `Ogni anello chiuso è stabile e sostiene il successivo.` }
    ]
  }
});
