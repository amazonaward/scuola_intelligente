TOPIC('it', {
  id: "l4-sto-rivoluzione-industriale",
  title: "La rivoluzione industriale",
  intro: "Per millenni la maggior parte degli esseri umani ha vissuto di agricoltura e artigianato, usando la forza di braccia, animali, acqua e vento. Tra la seconda metà del Settecento e l'Ottocento, in <b>Gran Bretagna</b>, questo mondo cambia: le <b>macchine</b> sostituiscono il lavoro manuale, il <b>carbone</b> e il <b>vapore</b> forniscono energia in quantità mai viste, le <b>fabbriche</b> sostituiscono le botteghe, le città esplodono e nascono due nuove classi sociali, la borghesia industriale e il proletariato operaio. È la <b>rivoluzione industriale</b>, forse il cambiamento più profondo della storia dopo la rivoluzione agricola del Neolitico. In questa lezione scoprirai perché è nata proprio in Inghilterra, come funzionano le invenzioni chiave e quali sono stati i costi umani e sociali.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "1. Perché in Inghilterra? Le condizioni preliminari",
      html: `<p>Gli storici parlano di una «rivoluzione» perché il ritmo di crescita cambia, ma il processo è graduale e dura decenni. Perché comincia in Gran Bretagna verso il 1760-1780? Si combinano diversi fattori:</p>
<ul>
<li><b>Rivoluzione agricola</b>: con la rotazione delle colture (rotazione di Norfolk: grano, rape, orzo, trifoglio), la selezione degli animali e le <b>enclosures</b> (recinzione dei campi comuni, che i grandi proprietari trasformano in aziende private), la produttività cresce e servono meno braccia nei campi. Molti contadini, privati delle terre comuni, si trasferiscono in città e diventano manodopera a basso costo.</li>
<li><b>Aumento della popolazione</b>: meno carestie ed epidemie, più domanda di beni.</li>
<li><b>Risorse naturali</b>: giacimenti di <b>carbone</b> e ferro vicini fra loro e alla costa; fiumi e canali navigabili.</li>
<li><b>Capitali e commercio</b>: la ricchezza accumulata con i commerci coloniali (inclusa la tratta degli schiavi) e con il sistema bancario è disponibile per investimenti. Il mercato coloniale offre la materia prima (cotone) e assorbe i prodotti finiti.</li>
<li><b>Istituzioni favorevoli</b>: dopo il 1689 il Parlamento protegge la proprietà e i contratti; i brevetti tutelano gli inventori; non ci sono dazi interni; la mentalità pratica e la cultura scientifica sono diffuse.</li>
</ul>
<p>Nessun singolo fattore basta: è l'intreccio tra agricoltura, commercio, istituzioni, carbone e tecnologia a rendere possibile il decollo.</p>`
    },
    {
      type: "text",
      title: "2. Il cotone e il vapore: le invenzioni chiave",
      html: `<p>Il settore trainante è il <b>tessile</b>, in particolare il cotone. Una serie di invenzioni rende prima la filatura, poi la tessitura, sempre più meccanizzate:</p>
<ul>
<li><b>John Kay</b>, navetta volante (1733): il telaio diventa più rapido e richiede più filo.</li>
<li><b>James Hargreaves</b>, <i>spinning jenny</i> (1764): una macchina che fila più fili insieme.</li>
<li><b>Richard Arkwright</b>, <i>water frame</i> (1769): filatoio mosso da una ruota idraulica; è all'origine della fabbrica moderna.</li>
<li><b>Samuel Crompton</b>, <i>mule</i> (1779): unisce le due macchine, filo sottile e resistente.</li>
<li><b>Edmund Cartwright</b>, telaio meccanico (1785).</li>
</ul>
<p>Ma le macchine hanno bisogno di energia. L'inglese <b>Thomas Newcomen</b> aveva costruito nel 1712 una macchina a vapore per pompare l'acqua dalle miniere; <b>James Watt</b>, scozzese, la perfeziona (brevetto del 1769, con il condensatore separato) e, in società con <b>Matthew Boulton</b>, la rende utilizzabile per muovere ruote e macchine in ogni luogo, senza più dipendere dai corsi d'acqua. Così le fabbriche si spostano nelle città e vicino al carbone.</p>
<p>Nella <b>siderurgia</b>, <b>Abraham Darby</b> fonde il ferro con il coke (carbone depurato, 1709) e <b>Henry Cort</b> brevetta nel 1784 il puddellaggio, che produce ferro lavorabile in grandi quantità. Il ferro costruisce macchine, ponti (Ironbridge, 1779) e rotaie.</p>`
    },
    {
      type: "svg",
      title: "Come funziona la macchina a vapore",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="30" y="170" width="120" height="100" rx="8" fill="#fed7aa" stroke="#9a3412" stroke-width="2"/>
<text x="90" y="205" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Caldaia</text>
<text x="90" y="228" font-size="14" text-anchor="middle" fill="#0f172a">acqua + carbone</text>
<text x="90" y="248" font-size="14" text-anchor="middle" fill="#0f172a">= vapore</text>
<line x1="150" y1="200" x2="230" y2="150" stroke="#475569" stroke-width="5"/>
<text x="180" y="165" font-size="14" fill="#0f172a">vapore</text>
<rect x="230" y="80" width="90" height="140" rx="6" fill="#bae6fd" stroke="#075985" stroke-width="2"/>
<text x="275" y="110" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Cilindro</text>
<rect x="245" y="130" width="60" height="16" fill="#334155"/>
<line x1="275" y1="146" x2="275" y2="40" stroke="#334155" stroke-width="6"/>
<text x="275" y="30" font-size="14" text-anchor="middle" fill="#0f172a">pistone (su e giù)</text>
<line x1="275" y1="46" x2="400" y2="46" stroke="#334155" stroke-width="6"/>
<circle cx="440" cy="110" r="55" fill="#e9d5ff" stroke="#6b21a8" stroke-width="3"/>
<text x="440" y="106" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">Volano</text>
<text x="440" y="126" font-size="14" text-anchor="middle" fill="#0f172a">ruota</text>
<line x1="495" y1="110" x2="560" y2="110" stroke="#334155" stroke-width="6"/>
<text x="540" y="140" font-size="14" text-anchor="middle" fill="#0f172a">alla macchina</text>
<rect x="260" y="230" width="140" height="48" rx="6" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="330" y="250" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">Condensatore (Watt)</text>
<text x="330" y="268" font-size="14" text-anchor="middle" fill="#0f172a">raffredda il vapore</text>
</svg>`,
      caption: "Il calore del carbone diventa movimento: il vapore spinge il pistone, il volano trasforma il moto in rotazione."
    },
    {
      type: "example",
      title: "Quanto vale un chilo di cotone?",
      html: `<p>Verso il 1760 una filatrice a mano impiegava circa 50.000 ore per filare 100 libbre di cotone; con le macchine di Crompton (1790) bastavano circa 300 ore: cifre indicative, che mostrano comunque una <b>riduzione enorme</b> del tempo di lavoro. Il prezzo del tessuto crolla, il cotone diventa abbordabile anche per i poveri, e le esportazioni britanniche inondano il mondo. Nel frattempo gli artigiani indiani che producevano a mano tessuti di cotone di pregio sono messi fuori mercato: la rivoluzione industriale arricchisce alcuni e impoverisce altri.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: invenzioni e cause",
      questions: [
        { type: "mc", q: "Chi perfezionò la macchina a vapore con il condensatore separato?", options: ["James Watt", "Richard Arkwright", "George Stephenson"], answer: 0, explain: "Watt, brevetto del 1769." },
        { type: "tf", q: "Le enclosures privatizzarono i campi comuni e spinsero molti contadini verso le città.", answer: true, explain: "Fornirono manodopera alle fabbriche." },
        { type: "text", q: "Come si chiama il combustibile fossile che alimentava le macchine a vapore?", answer: ["carbone", "il carbone", "carbon fossile"], explain: "Il carbone, abbondante in Inghilterra." }
      ]
    },
    {
      type: "text",
      title: "3. Trasporti e fabbrica",
      html: `<p>Più si produce, più servono mezzi per trasportare merci e materie prime. Prima si scavano <b>canali</b>, poi si costruiscono <b>strade</b> migliori e infine le <b>ferrovie</b>:</p>
<ul>
<li>1807: <b>Robert Fulton</b> avvia negli Stati Uniti il servizio di battelli a vapore sul fiume Hudson.</li>
<li>1825: prima linea ferroviaria pubblica per merci e passeggeri, <b>Stockton-Darlington</b>, con la locomotiva di <b>George Stephenson</b>.</li>
<li>1829: la <i>Rocket</i> di Stephenson vince il concorso di Rainhill; nel <b>1830</b> si inaugura la <b>Liverpool-Manchester</b>, tutta a trazione a vapore.</li>
</ul>
<p>La ferrovia riduce i tempi (un viaggio di giorni diventa di ore), abbassa i costi, unifica i mercati e perfino i fusi orari locali, spingendo a standardizzare l'ora. In Italia la prima linea è la <b>Napoli-Portici</b> (1839).</p>
<p>La <b>fabbrica</b> cambia il lavoro. Nella bottega artigiana l'artigiano decide i tempi e fa l'oggetto dall'inizio alla fine; in fabbrica ci sono macchine costose e un padrone che ne vuole la massima resa: orari fissi (12-14 ore al giorno), disciplina, <b>divisione del lavoro</b> (ciascuno fa solo una piccola operazione, ripetuta). Adam Smith aveva descritto il caso di una fabbrica di spilli: dieci operai specializzati possono produrre decine di volte più spilli che dieci artigiani generici.</p>`
    },
    {
      type: "3d",
      title: "Mappa 3D: l'Inghilterra industriale",
      scene: "spacetime",
      caption: "Altezza = tempo (1709-1830). Tocca gli eventi per vedere cause ed effetti.",
      options: {
        lat: [50, 57],
        lon: [-5, 2],
        years: [1700, 1835],
        places: [
          { lat: 53.48, lon: -2.24, label: "Manchester" },
          { lat: 53.41, lon: -2.99, label: "Liverpool" },
          { lat: 52.48, lon: -1.9, label: "Birmingham" },
          { lat: 51.5, lon: -0.12, label: "Londra" },
          { lat: 54.52, lon: -1.55, label: "Darlington" }
        ],
        events: [
          { id: "darby", lat: 52.63, lon: -2.49, year: 1709, label: "Ferro al coke", html: "Abraham Darby fonde il ferro con il coke a Coalbrookdale.", causes: [] },
          { id: "newcomen", lat: 52.5, lon: -2.08, year: 1712, label: "Macchina di Newcomen", html: "Pompa l'acqua dalle miniere.", causes: [] },
          { id: "jenny", lat: 53.6, lon: -2.3, year: 1764, label: "Spinning jenny", html: "Hargreaves: più fili per volta.", causes: [] },
          { id: "arkwright", lat: 53.1, lon: -1.5, year: 1769, label: "Water frame", html: "Arkwright e la fabbrica di Cromford (1771).", causes: ["jenny"] },
          { id: "watt", lat: 52.48, lon: -1.9, year: 1769, label: "Macchina di Watt", html: "Condensatore separato; società Boulton & Watt a Birmingham.", causes: ["newcomen"] },
          { id: "mule", lat: 53.58, lon: -2.43, year: 1779, label: "Mule di Crompton", html: "Filo sottile e resistente.", causes: ["arkwright"] },
          { id: "cartw", lat: 52.8, lon: -1.0, year: 1785, label: "Telaio meccanico", html: "Cartwright: la tessitura si meccanizza.", causes: ["mule", "watt"] },
          { id: "luddi", lat: 52.95, lon: -1.15, year: 1811, label: "Luddisti", html: "Operai distruggono telai nelle Midlands e nel Nord.", causes: ["cartw"] },
          { id: "stock", lat: 54.52, lon: -1.55, year: 1825, label: "Stockton-Darlington", html: "Prima ferrovia pubblica.", causes: ["watt"] },
          { id: "lm", lat: 53.45, lon: -2.6, year: 1830, label: "Liverpool-Manchester", html: "Ferrovia interamente a vapore.", causes: ["stock"] }
        ]
      }
    },
    {
      type: "text",
      title: "4. Una nuova società: borghesia, proletariato, città",
      html: `<p>La rivoluzione industriale trasforma la società:</p>
<ul>
<li><b>Borghesia industriale</b>: imprenditori e capitalisti che possiedono macchine e capitali; nel secolo XIX ottengono peso politico crescente.</li>
<li><b>Proletariato</b>: operai che possiedono solo la propria forza lavoro e la vendono in cambio di un salario. Orari lunghi, salari bassi, lavoro di <b>donne e bambini</b> (anche di 6-7 anni), infortuni frequenti, nessuna tutela.</li>
<li><b>Urbanizzazione</b>: città come Manchester, Birmingham e Leeds crescono in pochi decenni, con quartieri operai affollati, malsani, senza fognature. Nel 1845 <b>Friedrich Engels</b> descrive queste condizioni nel libro <i>La condizione della classe operaia in Inghilterra</i>.</li>
</ul>
<p>Le risposte non tardano:</p>
<ul>
<li><b>Luddismo</b> (1811-1812): gruppi di operai distruggono i telai, accusati di togliere il lavoro, dal nome del leggendario Ned Ludd. Lo Stato reprime duramente (la distruzione di macchine diventa reato punibile con la morte).</li>
<li><b>Associazioni operaie</b>: le <i>trade unions</i>, vietate dai Combination Acts del 1799-1800, sono legalizzate nel 1824-25. Seguono il <b>cartismo</b> (dal 1838, Carta del popolo, richiesta del suffragio universale maschile) e la nascita del movimento socialista.</li>
<li><b>Leggi sociali</b>: il Factory Act del 1833 vieta il lavoro ai bambini sotto i 9 anni nelle fabbriche tessili e limita l'orario dei ragazzi; nel 1842 si vieta il lavoro di donne e bambini nelle miniere.</li>
<li><b>Socialismo</b>: Karl Marx e Friedrich Engels nel <i>Manifesto del partito comunista</i> (1848) leggono la storia come lotta di classe e vedono nel proletariato il soggetto del cambiamento.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la rivoluzione industriale",
      intro: "Una tabella prima/dopo, una catena causa-effetto e una linea del tempo.",
      tabs: [
        {
          label: "📊 Prima e dopo",
          html: `<table>
<tr><th></th><th>Prima (società preindustriale)</th><th>Dopo (società industriale)</th></tr>
<tr><td>Energia</td><td>Muscoli, acqua, vento, legna</td><td>Carbone e vapore</td></tr>
<tr><td>Lavoro</td><td>Campi e botteghe, ritmi delle stagioni</td><td>Fabbrica, orari fissi</td></tr>
<tr><td>Dove si vive</td><td>Villaggi (80% in campagna)</td><td>Città industriali</td></tr>
<tr><td>Classi</td><td>Nobili, clero, contadini, artigiani</td><td>Borghesia industriale, proletariato</td></tr>
<tr><td>Trasporti</td><td>Carri, barche</td><td>Ferrovia, battello a vapore</td></tr>
</table>`
        },
        {
          label: "🔗 La catena delle cause",
          html: `<p>Un modo semplice di ricordare come si innescano i processi: un'invenzione ne richiede un'altra.</p>
<ul>
<li>La navetta volante rende il tessere più veloce, quindi servono più fili.</li>
<li>La <i>jenny</i> e il <i>water frame</i> aumentano il filo; ora è la tessitura a restare indietro.</li>
<li>Il telaio meccanico richiede energia, quindi la macchina a vapore.</li>
<li>Il vapore richiede carbone, quindi miniere più profonde, che richiedono pompe a vapore.</li>
<li>Più produzione richiede più trasporti, quindi ferrovie, che richiedono ferro, quindi altre miniere.</li>
</ul>
<p>È un circolo che si autoalimenta: un cambiamento in un settore crea un «collo di bottiglia» che spinge a innovare nel successivo.</p>`
        },
        {
          label: "📅 Linea del tempo",
          html: `<p>Dalle prime invenzioni alla ferrovia.</p>`,
          widget: "timeline",
          options: { events: [
            { year: 1712, label: "Macchina di Newcomen", icon: "⚙️" },
            { year: 1733, label: "Navetta volante", icon: "🧵" },
            { year: 1764, label: "Spinning jenny", icon: "🧶" },
            { year: 1769, label: "Macchina di Watt", icon: "💨" },
            { year: 1785, label: "Telaio meccanico", icon: "🏭" },
            { year: 1811, label: "Luddisti", icon: "🔨" },
            { year: 1825, label: "Prima ferrovia pubblica", icon: "🚂" },
            { year: 1833, label: "Factory Act", icon: "📜" }
          ], unit: "anni" }
        }
      ]
    },
    {
      type: "curiosity",
      title: "Il cavallo vapore",
      html: `<p>James Watt, per vendere le sue macchine ai proprietari delle miniere che usavano i cavalli, introdusse un'unità di misura: il <b>cavallo vapore</b> (horsepower). Ancora oggi la potenza dei motori si indica in cavalli (CV), mentre l'unità del Sistema Internazionale si chiama <b>watt</b>, in onore dell'inventore: 1 CV equivale a circa 735 watt.</p>`
    },
    {
      type: "example",
      title: "Una giornata in filanda",
      html: `<p>Immagina di avere dieci anni e di lavorare in una filanda di Manchester nel 1820: sveglia prima dell'alba, dodici ore tra rumore e polvere di cotone, una breve pausa per il pane, la sorveglianza del caposquadra con la frusta o le multe. Il tuo salario è una frazione di quello del padre. Per questo i primi riformatori (il filantropo Robert Owen, il Parlamento con il Factory Act del 1833) battono sul tema dell'<b>infanzia</b>: per la prima volta lo Stato interviene a limitare ciò che un datore di lavoro può chiedere.</p>`
    },
    {
      type: "decision",
      title: "1811: cosa fai se sei un operaio tessile?",
      html: `<p>Sei un tessitore a mano nelle Midlands. Con l'arrivo dei telai meccanici il tuo salario si è dimezzato e molti colleghi hanno perso il lavoro. Alcuni compagni ti propongono di distruggere di notte i telai di una fabbrica; la legge punisce duramente chi lo fa. Il padrone dice che le macchine servono a competere con l'estero.</p>`,
      question: "Cosa decidi?",
      options: [
        { label: "Mi unisco ai luddisti e distruggo le macchine.", outcome: "È ciò che fecero molti operai nel 1811-12. La repressione fu durissima: il Parlamento rese la distruzione dei telai reato capitale e furono impiegati migliaia di soldati; diversi luddisti furono impiccati o deportati." },
        { label: "Mi organizzo con altri in un'associazione operaia.", outcome: "Era vietato dai Combination Acts, ma si fece comunque in segreto. Dopo il 1824-25 le trade unions furono legali e ottennero lentamente salari più alti e orari ridotti." },
        { label: "Emigro in città o all'estero per cercare un altro lavoro.", outcome: "Migliaia di persone emigrarono verso le fabbriche, le città e le colonie (America, Australia)." }
      ],
      answer: 1,
      explain: "Nel lungo periodo fu l'organizzazione collettiva (sindacati, partiti, leggi sociali) a migliorare le condizioni, non la distruzione delle macchine: il problema non era la macchina in sé ma come ne venivano distribuiti vantaggi e costi."
    },
    {
      type: "text",
      title: "5. La seconda rivoluzione industriale e la diffusione",
      html: `<p>Dopo la Gran Bretagna, l'industrializzazione raggiunge il <b>Belgio</b>, la <b>Francia</b>, la <b>Germania</b> e gli <b>Stati Uniti</b> (soprattutto dopo il 1830-1850), poi Italia (dal 1880-90), Russia e Giappone. Dal 1870 circa si parla di <b>seconda rivoluzione industriale</b>, basata su:</p>
<ul>
<li><b>acciaio</b> (procedimento Bessemer, 1856), chimica, <b>elettricità</b> (dinamo, lampadina di Edison 1879), <b>petrolio</b> e motore a scoppio;</li>
<li><b>grandi imprese</b>, società per azioni, banche e concentrazioni industriali (cartelli, trust);</li>
<li><b>organizzazione scientifica del lavoro</b>, che porterà al taylorismo e alla catena di montaggio.</li>
</ul>
<p>Il passaggio produce anche tensioni internazionali: la competizione per materie prime e mercati contribuirà all'imperialismo coloniale.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: cause ed effetti della rivoluzione industriale",
      nodes: [
        { id: "agric", label: "Rivoluzione agricola", x: 20, y: 4, color: "#16a34a", html: "Rotazioni, enclosures, più cibo.", why: "Più produttività e meno braccia nei campi: nascono la manodopera e la domanda di beni industriali." },
        { id: "carbone", label: "Carbone e vapore", x: 52, y: 4, color: "#475569", html: "Energia a basso costo e non legata ai fiumi.", why: "L'Inghilterra ha carbone abbondante: il vapore permette di mettere le fabbriche dove servono." },
        { id: "capitali", label: "Capitali e mercati", x: 84, y: 4, color: "#f59e0b", html: "Commercio coloniale e banche.", why: "Il commercio atlantico ha accumulato ricchezza e creato mercati per i prodotti inglesi." },
        { id: "invenz", label: "Invenzioni tessili", x: 35, y: 38, color: "#0ea5e9", html: "Jenny, water frame, mule, telaio meccanico.", why: "Ogni invenzione rimuove un collo di bottiglia e ne crea un altro." },
        { id: "fabbrica", label: "Fabbrica", x: 70, y: 38, color: "#7c3aed", html: "Macchine, orari, divisione del lavoro.", why: "Per ammortizzare macchine costose bisogna usarle al massimo e controllare i lavoratori." },
        { id: "classi", label: "Nuove classi", x: 20, y: 72, color: "#ef4444", html: "Borghesia e proletariato.", why: "Chi possiede i mezzi di produzione e chi vende solo il proprio lavoro hanno interessi diversi: nasce la questione sociale." },
        { id: "lotte", label: "Lotte e riforme", x: 52, y: 78, color: "#b91c1c", html: "Luddismo, sindacati, Factory Act, socialismo.", why: "Le sofferenze e le ingiustizie spingono a organizzarsi e a chiedere leggi." },
        { id: "mondo", label: "Industrializzazione nel mondo", x: 84, y: 72, color: "#14b8a6", html: "Belgio, Francia, Germania, USA; seconda rivoluzione.", why: "I paesi che non industrializzano restano indietro: la tecnica diventa strumento di potenza." }
      ],
      edges: [["agric", "invenz", "libera lavoratori"], ["carbone", "fabbrica", "alimenta"], ["capitali", "invenz", "finanziano"], ["invenz", "fabbrica", "porta a"], ["fabbrica", "classi", "crea"], ["classi", "lotte", "scatenano"], ["fabbrica", "mondo", "si diffonde"]]
    },
    {
      type: "curiosity",
      title: "Un mondo accelerato",
      html: `<p>Tra il 1750 e il 1850 la produzione di ferro in Gran Bretagna cresce di molte volte e l'importazione di cotone grezzo aumenta di un fattore enorme. Per la prima volta nella storia il reddito medio per abitante comincia a crescere in modo continuo: prima della rivoluzione industriale un contadino del 1800 viveva più o meno come uno del 1300; oggi il confronto è impossibile.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Dove e quando</b>: Gran Bretagna, 1760-1830 circa; poi Europa e Stati Uniti.</li>
<li><b>Cause</b>: rivoluzione agricola, carbone, capitali, mercati coloniali, istituzioni favorevoli.</li>
<li><b>Invenzioni</b>: jenny (1764), water frame (1769), macchina di Watt (1769), telaio meccanico (1785), ferrovia (1825-30).</li>
<li><b>Conseguenze</b>: fabbrica, urbanizzazione, borghesia e proletariato, questione sociale, luddismo, sindacati, leggi sociali.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: società",
      questions: [
        { type: "mc", q: "Chi furono i luddisti?", options: ["Operai che distruggevano le macchine", "Imprenditori inglesi", "Inventori dei telai"], answer: 0, explain: "Il movimento fu attivo soprattutto nel 1811-12." },
        { type: "tf", q: "Il Factory Act del 1833 vietò il lavoro ai bambini sotto i 9 anni nelle fabbriche tessili.", answer: true, explain: "Fu una delle prime leggi sociali." },
        { type: "num", q: "In che anno fu inaugurata la ferrovia Liverpool-Manchester?", answer: 1830, tol: 0, explain: "Fu la prima ferrovia interamente a vapore." }
      ]
    }
  ],
  glossary: [
    { t: "Enclosures", d: "Recinzione e privatizzazione dei campi comuni in Inghilterra." },
    { t: "Fabbrica", d: "Luogo in cui molte persone lavorano con macchine sotto una direzione unica." },
    { t: "Proletariato", d: "Classe di chi non possiede mezzi di produzione e vive di salario." },
    { t: "Borghesia industriale", d: "Classe degli imprenditori proprietari di fabbriche e capitali." },
    { t: "Luddismo", d: "Movimento di operai che distruggeva le macchine (1811-12)." },
    { t: "Trade union", d: "Sindacato di lavoratori." },
    { t: "Divisione del lavoro", d: "Scomposizione di un lavoro in operazioni semplici affidate a lavoratori diversi." },
    { t: "Cartismo", d: "Movimento operaio inglese (dal 1838) per il suffragio universale maschile." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Perché la rivoluzione industriale iniziò in Gran Bretagna?", options: ["Per l'intreccio di agricoltura, carbone, capitali, commerci e istituzioni favorevoli", "Per l'assenza di guerre", "Per la mancanza di città"], answer: 0, explain: "Nessun fattore da solo basta: conta la combinazione." },
      { type: "text", q: "Chi perfezionò la macchina a vapore con il condensatore separato?", answer: ["watt", "james watt"], explain: "James Watt, in società con Boulton." },
      { type: "tf", q: "Le enclosures aumentarono i contadini indipendenti sulle terre comuni.", answer: false, explain: "Privatizzarono le terre comuni e spinsero molti contadini verso le città." },
      { type: "num", q: "In che anno uscì il «Manifesto del partito comunista»?", answer: 1848, tol: 0, explain: "Di Marx ed Engels." },
      { type: "mc", q: "Quale fu la prima ferrovia italiana?", options: ["Napoli-Portici (1839)", "Milano-Monza (1840)", "Torino-Genova (1853)"], answer: 0, explain: "Fu inaugurata nel Regno delle Due Sicilie nel 1839." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Spinning jenny", "Macchina di Watt", "Telaio meccanico", "Ferrovia Stockton-Darlington", "Factory Act"], explain: "1764, 1769, 1785, 1825, 1833." },
      { type: "mc", q: "Che cosa descrisse Engels nel 1845?", options: ["La condizione della classe operaia in Inghilterra", "La nascita della borghesia", "Le tecniche di filatura"], answer: 0, explain: "Fu un'indagine diretta su Manchester." },
      { type: "tf", q: "La seconda rivoluzione industriale si basò su elettricità, petrolio, acciaio e chimica.", answer: true, explain: "Dal 1870 circa." },
      { type: "mc", q: "Qual era l'obiettivo del cartismo?", options: ["Il suffragio universale maschile", "La distruzione delle macchine", "La monarchia assoluta"], answer: 0, explain: "La Carta del popolo (1838) chiedeva anche voto segreto e parlamenti annuali." }
    ]
  }
});
