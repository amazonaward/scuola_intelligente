TOPIC('it', {
  id: "l2-geo-americhe",
  title: "Le Americhe",
  intro: "Dall'Alaska alla Terra del Fuoco, le Americhe si estendono per oltre 14.000 km lungo i meridiani: un continente (o due, a seconda di come si contano) dove convivono la prima potenza economica del mondo, megalopoli e foreste tropicali, popoli indigeni millenari e società nate dalle migrazioni. Capiamo come ambienti e storia coloniale spiegano le differenze tra America anglosassone e America Latina.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Un continente allungato: ambienti e rilievi",
      html: `<p>Le Americhe misurano circa <b>42,5 milioni di km²</b> (circa il 28% delle terre emerse) e ospitano circa <b>1 miliardo</b> di abitanti (oltre il 12% dell'umanità). Si dividono tradizionalmente in <b>America del Nord</b> (Canada, Stati Uniti, Messico, Groenlandia), <b>America centrale</b> con i Caraibi, e <b>America del Sud</b>. Il Canale di Panama (inaugurato nel 1914) taglia l'istmo che le unisce, riducendo di oltre 10.000 km la rotta tra Atlantico e Pacifico.</p>
<p>L'andamento nord-sud fa sì che si attraversino tutte le fasce climatiche: dalla tundra e ghiacci artici, ai climi temperati, alle foreste tropicali, fino alla Patagonia fredda e ventosa.</p>
<ul>
<li><b>Sistema montuoso occidentale</b>: una lunga «spina dorsale» formata dalle <b>Montagne Rocciose</b> (Nord America), dalla Sierra Madre (Messico) e dalle <b>Ande</b> (circa 7000 km, la più lunga catena continentale del mondo; la vetta più alta è l'<b>Aconcagua</b>, 6961 m, in Argentina). È una zona di vulcani e terremoti, sul bordo della Cintura di fuoco del Pacifico.</li>
<li><b>Pianure interne</b>: le Grandi Pianure (Great Plains) del Nord America, il bacino del <b>Mississippi-Missouri</b>, la pianura amazzonica e le pampas argentine. Sono tra le aree agricole più fertili del mondo (grano, mais, soia, allevamento).</li>
<li><b>Fiumi e laghi</b>: Rio delle <b>Amazzoni</b> (il fiume con la maggiore portata del mondo, circa un quinto dell'acqua dolce che sfocia in mare), Mississippi-Missouri, Paraná-Río de la Plata, <b>Grandi Laghi</b> (Superiore, Michigan, Huron, Erie, Ontario) tra Canada e USA, il lago Titicaca sulle Ande.</li>
<li><b>Foresta amazzonica</b>: circa 5,5-6 milioni di km² (circa 60% in Brasile), la più vasta foresta pluviale del pianeta, regolatrice del clima e di acqua; ospita circa il 10% delle specie conosciute.</li>
<li><b>Fenomeni climatici estremi</b>: uragani nei Caraibi e nel Golfo del Messico (estate-autunno), tornado nelle Grandi Pianure («Tornado Alley»), El Niño, che ogni pochi anni riscalda l'oceano Pacifico e cambia il clima del continente.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Sul globo: luoghi e città delle Americhe",
      scene: "globe",
      options: {
        points: [
          { lat: 38.9, lon: -77.0, label: "Washington D.C. (USA)", color: "#2563eb" },
          { lat: 40.7, lon: -74.0, label: "New York", color: "#2563eb" },
          { lat: 37.8, lon: -122.4, label: "Silicon Valley / San Francisco", color: "#7c3aed" },
          { lat: 45.4, lon: -75.7, label: "Ottawa (Canada)", color: "#dc2626" },
          { lat: 19.4, lon: -99.1, label: "Città del Messico", color: "#16a34a" },
          { lat: 9.0, lon: -79.5, label: "Canale di Panama", color: "#f59e0b" },
          { lat: -3.1, lon: -60.0, label: "Manaus (Amazzonia)", color: "#0ea5e9" },
          { lat: -15.8, lon: -47.9, label: "Brasilia", color: "#16a34a" },
          { lat: -34.6, lon: -58.4, label: "Buenos Aires", color: "#ec4899" },
          { lat: -33.4, lon: -70.7, label: "Santiago del Cile", color: "#a16207" },
          { lat: -32.65, lon: -70.0, label: "Aconcagua (6961 m)", color: "#6b7280" }
        ],
        routes: [
          { points: [1, 0, 4, 5, 6], color: "#2563eb" },
          { points: [8, 9], color: "#ec4899" }
        ]
      },
      caption: "L'asse nord-sud delle Americhe: dal Nord ricco e industriale all'America Latina, dalle Montagne Rocciose alle Ande."
    },
    {
      type: "text",
      title: "2. Dalle civiltà precolombiane alle indipendenze",
      html: `<p>Prima dell'arrivo degli europei le Americhe erano abitate da una grande varietà di popoli: gli <b>Aztechi</b> (Messico, capitale Tenochtitlán, oggi Città del Messico), i <b>Maya</b> (Yucatán e America centrale, con calendario e scrittura), gli <b>Inca</b> (Ande, capitale Cuzco, con un impero di decine di migliaia di km di strade), insieme a decine di popoli nelle foreste e nelle pianure. Il 12 ottobre <b>1492</b> Cristoforo Colombo toccò le isole caraibiche, aprendo un'epoca di conquiste (Cortés in Messico 1519-1521, Pizarro in Perù dal 1532), di violenza, schiavitù e devastazione demografica: malattie come vaiolo e morbillo, sconosciute nel continente, uccisero la maggior parte degli abitanti nei secoli successivi.</p>
<p>Con il Trattato di <b>Tordesillas</b> (1494) Spagna e Portogallo si spartirono le terre «scoperte»: da qui il fatto che in America Latina si parlino <b>spagnolo</b> (quasi ovunque) e <b>portoghese</b> (Brasile). Nel Nord America si insediarono soprattutto inglesi e francesi. Per lavorare nelle piantagioni (zucchero, cotone, tabacco) furono portati con la forza milioni di africani: da qui la forte componente di origine africana in Brasile, Caraibi e USA.</p>
<ul>
<li><b>Stati Uniti</b>: il 4 luglio <b>1776</b> le Tredici colonie britanniche dichiararono l'indipendenza; la Costituzione è del <b>1787</b>. Nell'Ottocento il Paese si espanse verso Ovest (acquisto della Louisiana nel 1803, guerra con il Messico 1846-48), con la sottrazione delle terre ai nativi americani. La schiavitù fu abolita con la <b>guerra civile</b> (1861-1865). Dal 1900 divenne potenza industriale e dopo il 1945 superpotenza.</li>
<li><b>America Latina</b>: Haiti fu la prima a diventare indipendente (1804, dopo una rivolta di schiavi); le guerre di liberazione guidate da <b>Simón Bolívar</b> e <b>José de San Martín</b> portarono all'indipendenza di gran parte dei territori spagnoli (1810-1825); il Brasile si staccò dal Portogallo nel 1822. L'unità sognata da Bolívar però non si realizzò: nacquero molti Stati.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Tordesillas: due imperi si dividono il nuovo mondo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<text x="300" y="26" font-size="17" font-weight="bold" text-anchor="middle" fill="#111827">Il Trattato di Tordesillas (1494), schema semplificato</text>
<rect x="60" y="50" width="480" height="190" rx="10" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<polygon points="95,80 200,70 250,130 230,220 150,230 110,170" fill="#fcd34d" stroke="#92400e" stroke-width="2"/>
<polygon points="330,70 420,60 460,130 420,210 350,220 330,140" fill="#86efac" stroke="#166534" stroke-width="2"/>
<line x1="290" y1="45" x2="290" y2="245" stroke="#dc2626" stroke-width="4" stroke-dasharray="10 6"/>
<text x="150" y="150" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Spagna</text>
<text x="150" y="170" font-size="14" text-anchor="middle" fill="#111827">a ovest</text>
<text x="395" y="140" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Portogallo</text>
<text x="395" y="160" font-size="14" text-anchor="middle" fill="#111827">a est</text>
<text x="300" y="270" font-size="14" text-anchor="middle" fill="#475569">Linea a 370 leghe a ovest di Capo Verde: da qui il Brasile portoghese</text>
<text x="300" y="290" font-size="14" text-anchor="middle" fill="#475569">e l'America spagnola per il resto.</text>
</svg>`,
      caption: "Lo schema non è in scala: la linea passa all'incirca nei pressi dell'odierna foce del Rio delle Amazzoni, lasciando al Portogallo la parte orientale del Sud America."
    },
    {
      type: "quiz",
      title: "Mini-quiz: ambiente e storia",
      questions: [
        { type: "mc", q: "Qual è la catena montuosa più lunga delle Americhe?", options: ["Le Ande", "Le Appalachi", "Le Montagne Rocciose"], answer: 0, explain: "Le Ande si estendono per circa 7000 km lungo la costa occidentale del Sud America." },
        { type: "mc", q: "Perché in Brasile si parla portoghese?", options: ["Perché il Trattato di Tordesillas assegnò quelle terre al Portogallo", "Perché fu colonia spagnola", "Perché lo parlavano gli Inca"], answer: 0, explain: "Il Brasile fu una colonia portoghese fino al 1822." },
        { type: "tf", q: "Gli Stati Uniti dichiararono l'indipendenza nel 1776.", answer: true, explain: "Il 4 luglio 1776." }
      ]
    },
    {
      type: "text",
      title: "3. Gli Stati Uniti e il Canada",
      html: `<p>Gli <b>Stati Uniti</b> (50 Stati, circa 9,8 milioni di km², circa <b>335 milioni</b> di abitanti, capitale Washington D.C.) sono la prima potenza economica del mondo: il PIL supera i 27.000 miliardi di dollari (oltre un quarto del PIL mondiale). Hanno una struttura <b>federale</b> e una Costituzione tra le più antiche in vigore. Ambienti vari: coste, Appalachi, Grandi Pianure, Deserti del Sud-Ovest, Montagne Rocciose, coste del Pacifico, Alaska e Hawaii.</p>
<ul>
<li><b>Una società nata dall'immigrazione</b>: dall'Ottocento arrivarono milioni di europei (ricordati a Ellis Island), poi asiatici e latinoamericani. I <b>cittadini ispanici</b> sono oggi quasi il 20% della popolazione e la minoranza più numerosa; gli afroamericani circa il 13%. Il movimento per i <b>diritti civili</b> (anni Cinquanta e Sessanta, con Martin Luther King) ha abolito legalmente la segregazione, ma le disuguaglianze razziali ed economiche rimangono.</li>
<li><b>Economia</b>: leader nell'alta tecnologia (<b>Silicon Valley</b> in California), finanza (Wall Street a New York), cinema (Hollywood), agricoltura meccanizzata (la «cintura» del mais e della soia), energia (petrolio e gas, anche da scisto). Il Nord-Est e i Grandi Laghi, già cuore industriale (la «Rust Belt», cintura della ruggine), si sono riconvertiti; la «Sun Belt» del Sud-Ovest cresce rapidamente.</li>
<li><b>Città e territorio</b>: società urbana, con grandi aree metropolitane (New York, Los Angeles, Chicago) e uso estensivo dell'automobile; il Paese è molto esposto a uragani (costa del Golfo), tornado e incendi (California).</li>
<li><b>Ruolo mondiale</b>: dopo il 1945 ha guidato l'Occidente (Piano Marshall, NATO, Bretton Woods); il dollaro è la principale valuta di riserva; il «soft power» di cinema, musica, università e tecnologia è enorme. Al tempo stesso crescono la polarizzazione politica e le disuguaglianze.</li>
</ul>
<p>Il <b>Canada</b> (9,98 milioni di km², secondo Stato più esteso del mondo ma con soli circa <b>40 milioni</b> di abitanti, concentrati vicino al confine sud) è una democrazia federale e monarchia costituzionale, bilingue (inglese e francese; il Québec è francofono), ricca di risorse (petrolio delle sabbie bituminose, foreste, minerali, acqua) e di accoglienza dei migranti. Il <b>Messico</b> (circa 128 milioni di abitanti) è già a metà strada tra le due Americhe: ha un forte legame economico con gli USA grazie al trattato di libero scambio <b>NAFTA</b> (1994), sostituito nel 2020 dall'<b>USMCA</b>.</p>`
    },
    {
      type: "text",
      title: "4. L'America Latina: grandi risorse, grandi disuguaglianze",
      html: `<p>Con America Latina si indica la parte del continente (Messico, America centrale, Caraibi e America del Sud) dove si parlano lingue di origine latina: spagnolo, portoghese, francese (Haiti, Guyana francese). Ha circa <b>650 milioni</b> di abitanti, tra culture indigene (Quechua, Aymara, Maya, Guaraní), europee, africane e miste (<i>mestizos</i>).</p>
<ul>
<li><b>Urbanizzazione precoce</b>: oltre l'80% degli abitanti vive in città, tra le percentuali più alte del mondo: San Paolo, Città del Messico, Buenos Aires, Lima, Bogotà, Rio de Janeiro. Le metropoli presentano contrasti estremi: quartieri ricchi e grandi baraccopoli (<b>favelas</b> in Brasile, <i>villas miseria</i> in Argentina).</li>
<li><b>Disuguaglianze</b>: l'America Latina è la regione più diseguale del mondo per distribuzione del reddito (alti valori dell'indice di Gini). Le cause: la struttura coloniale (grandi proprietà, i <i>latifondi</i>), l'accesso limitato a istruzione e terra, economie basate su pochi prodotti.</li>
<li><b>Economie di esportazione</b>: <b>Brasile</b> (circa 213 milioni di abitanti, soia, caffè, carne, minerali di ferro; è la maggiore economia della regione), <b>Cile</b> (primo produttore di rame e grande produttore di litio), <b>Argentina</b> (cereali, carne, vino), <b>Bolivia</b> (litio, gas), <b>Venezuela</b> (grandi riserve di petrolio), <b>Colombia</b> (caffè, petrolio), <b>Messico</b> (manifattura per l'export, petrolio).</li>
<li><b>Politica</b>: dopo una fase di dittature militari (anni Sessanta-Ottanta: Cile di Pinochet, Argentina con la giunta militare, Brasile) quasi tutti i Paesi sono tornati alla democrazia, ma restano fragilità, instabilità politica e violenza legata al narcotraffico (in alcuni Paesi i più alti tassi di omicidi del mondo). Esistono organizzazioni di integrazione: <b>Mercosur</b> (1991), Comunità andina, <b>CELAC</b> e l'<b>OSA</b> (Organizzazione degli Stati americani, 1948).</li>
<li><b>Ambiente</b>: la <b>deforestazione</b> dell'Amazzonia (per allevamento, soia, miniere illegali) minaccia biodiversità e clima: la foresta assorbe grandi quantità di CO₂, ma in alcune zone rischia di diventare una savana oltre un punto di non ritorno.</li>
<li><b>Popoli indigeni</b>: circa 50 milioni di persone (nell'intera America Latina), sempre più riconosciuti da Costituzioni e movimenti, ma spesso penalizzati da povertà e conflitti sulle terre.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Attività: Nord o Sud?",
      widget: "classify",
      options: {
        groups: ["America anglosassone (USA, Canada)", "America Latina"],
        items: [
          ["🏙️ Wall Street", 0],
          ["🌳 Foresta amazzonica", 1],
          ["🏔️ Ande", 1],
          ["🏔️ Montagne Rocciose", 0],
          ["🌎 Mercosur", 1],
          ["🗽 Ellis Island", 0],
          ["⛏️ Miniere di rame del Cile", 1],
          ["🎬 Hollywood", 0]
        ]
      },
      caption: "La divisione è anche storica: colonizzazione inglese e francese al Nord, spagnola e portoghese al Sud."
    },
    {
      type: "example",
      title: "La soia che attraversa l'oceano",
      html: `<p>Una fattoria nel Mato Grosso (Brasile) produce soia su centinaia di ettari: viene caricata in camion e navi e arriva ai porti della Cina o dell'Europa per diventare mangime per maiali e polli. Il Brasile è il primo esportatore mondiale di soia. Ma questa agricoltura ha un costo ambientale: gran parte dei campi nasce da terreni che erano savana (il Cerrado) o foresta. È l'esempio di come la dieta di un altro continente cambi il paesaggio di un Paese lontano: una <b>catena globale</b> collega il campo, il porto e il nostro piatto.</p>`
    },
    {
      type: "example",
      title: "Il Canale di Panama",
      html: `<p>Il Canale di Panama (aperto nel 1914, ampliato nel 2016) è lungo circa 80 km e collega l'Atlantico al Pacifico con un sistema di chiuse. Evita alle navi il giro di Capo Horn: una nave da New York a San Francisco risparmia circa 15.000 km. Da qui passa circa il 5% del commercio marittimo mondiale. La siccità del 2023-2024, legata anche a El Niño, ha ridotto il livello del lago Gatún (che alimenta il canale) e limitato i transiti: un esempio di come clima e commercio globale siano collegati.</p>`
    },
    {
      type: "curiosity",
      title: "Perché «America»?",
      html: `<p>Il nome deriva da <b>Amerigo Vespucci</b>, navigatore fiorentino, che per primo sostenne (1501-1502) che le terre scoperte a ovest fossero un «nuovo mondo» e non l'Asia. Nel 1507 il cartografo tedesco <b>Martin Waldseemüller</b> stampò una carta in cui il nuovo continente era chiamato «America» in suo onore. Colombo morì nel 1506 convinto di essere arrivato in Asia.</p>`
    },
    {
      type: "curiosity",
      title: "Il fiume più portatore d'acqua del mondo",
      html: `<p>Il Rio delle Amazzoni scarica nell'Atlantico circa 200.000 m³ di acqua al secondo, più di qualunque altro fiume. La sua foce è larga oltre 300 km: l'acqua dolce si spinge nell'oceano per decine di chilometri. Nel suo bacino vive circa 1 specie su 10 di quelle note sulla Terra.</p>`
    },
    {
      type: "decision",
      title: "Sviluppare l'Amazzonia o proteggerla?",
      html: `<p>Sei il governatore di uno Stato dell'Amazzonia brasiliana. Sulle terre della foresta si potrebbe allevare bestiame e coltivare soia, portando lavoro e ricchezza immediati a una regione povera. Ma la deforestazione riduce la biodiversità, intacca le piogge e libera carbonio nell'atmosfera; gli indigeni vivono nella foresta da millenni.</p>`,
      question: "Tu cosa faresti?",
      options: [
        { label: "Autorizzare il disboscamento su larga scala", outcome: "Ricchezza veloce e occupazione, ma con perdita irreversibile di foresta, clima e popoli, e rischio di crisi idrica: studi mostrano che la riduzione di oltre il 20-25% della foresta potrebbe spingerla verso un punto di non ritorno." },
        { label: "Proteggere la foresta e incentivare attività sostenibili (agroforestazione, raccolta di noci, turismo, pagamenti per servizi ambientali)", outcome: "Protegge clima e biodiversità e dà reddito a molte comunità, ma richiede finanziamenti, controlli e accordi internazionali; i risultati sono più lenti." },
        { label: "Non fare nulla e lasciare tutto com'è", outcome: "Senza controlli le attività illegali (miniere, disboscamento) si espandono comunque: la mancata governance equivale a una scelta." }
      ],
      answer: 1,
      explain: "Non c'è soluzione senza compromessi, ma la strada più condivisa da scienziati e molti governi è proteggere la foresta e creare alternative economiche. Fra il 2004 e il 2012 il Brasile ridusse la deforestazione di oltre l'80% con controlli e incentivi, dimostrando che si può."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le Americhe",
      intro: "Per non perdersi in un continente così esteso, prova prospettive diverse.",
      tabs: [
        {
          label: "🌐 Le tre Americhe sulla mappa",
          html: `<p>Ritaglia mentalmente la mappa in tre pezzi: <b>Nord</b> (grandi spazi, due Stati enormi e un Messico), <b>centro</b> (istmo e Caraibi, piccoli Stati e isole, attraversati da uragani), <b>Sud</b> (un grande Paese, il Brasile, che da solo copre quasi metà della superficie del continente e circa la metà della popolazione). Notare che la maggior parte dell'America del Sud è <b>a est</b> rispetto alla costa orientale degli Stati Uniti: New York e Lima sono quasi sullo stesso meridiano.</p>`
        },
        {
          label: "🏔️ L'altezza conta",
          html: `<p>Nelle Ande il clima dipende dall'altitudine più che dalla latitudine: <b>piani altitudinali</b> tropicali. In basso (<i>tierra caliente</i>) si coltivano banane e canna da zucchero; a 1000-2000 m (<i>tierra templada</i>) caffè e mais; più su (<i>tierra fría</i>) patate e cereali; oltre i 3500 m solo pascoli di lama e alpaca (<i>puna</i>); sopra i 4800 m neve e ghiacci. La patata e il mais, nati nelle Ande e in Messico, sono arrivati in Europa dopo Colombo e hanno cambiato l'alimentazione del mondo.</p>`
        },
        {
          label: "📊 Disuguaglianza e reddito",
          html: `<p>L'indice di Gini misura da 0 (tutti hanno lo stesso reddito) a 1 (uno solo ha tutto). Valori indicativi: Danimarca circa 0,28; Italia circa 0,33; Stati Uniti circa 0,40; Brasile circa 0,52; Colombia circa 0,53. Anche se l'America Latina non è più povera dell'Asia o dell'Africa, è dove la distanza tra il decimo più ricco e il più povero della popolazione è maggiore.</p>`,
          svg: `<svg viewBox="0 0 500 230" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="230" fill="#fefce8"/><text x="250" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#111827">Indice di Gini (valori indicativi)</text><text x="20" y="62" font-size="15" fill="#111827">Danimarca</text><rect x="130" y="45" width="140" height="24" fill="#16a34a"/><text x="278" y="62" font-size="15" fill="#111827">0,28</text><text x="20" y="102" font-size="15" fill="#111827">Italia</text><rect x="130" y="85" width="165" height="24" fill="#f59e0b"/><text x="303" y="102" font-size="15" fill="#111827">0,33</text><text x="20" y="142" font-size="15" fill="#111827">USA</text><rect x="130" y="125" width="200" height="24" fill="#f97316"/><text x="338" y="142" font-size="15" fill="#111827">0,40</text><text x="20" y="182" font-size="15" fill="#111827">Brasile</text><rect x="130" y="165" width="260" height="24" fill="#dc2626"/><text x="398" y="182" font-size="15" fill="#111827">0,52</text><text x="20" y="215" font-size="14" fill="#475569">Barre proporzionali al valore (0-1 su larghezza 500).</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: perché le Americhe sono così",
      nodes: [
        { id: "ambiente", label: "Ambienti", x: 15, y: 8, color: "#16a34a", html: "Ande, pianure, Amazzonia, Grandi Laghi.", why: "L'asse nord-sud, con le grandi catene a Ovest e le pianure a Est, determina fiumi e climi: dalle ricche pianure agricole del Nord alla foresta pluviale. La geografia facilita l'agricoltura intensiva ma anche la difficoltà di collegamento." },
        { id: "colonizzazione", label: "Colonizzazione europea", x: 50, y: 8, color: "#a855f7", html: "Spagna, Portogallo, Inghilterra, Francia.", why: "I modelli coloniali differirono: al Nord famiglie di coloni con piccola proprietà e istituzioni di autogoverno; al Sud grandi proprietà, risorse minerarie e lavoro forzato indigeno e africano. Questa diversità iniziale ha lasciato istituzioni molto differenti." },
        { id: "popoli", label: "Popoli e migrazioni", x: 85, y: 8, color: "#f59e0b", html: "Indigeni, europei, africani, asiatici.", why: "Dal 1492 il continente è stato rimodellato da sterminio, schiavitù e migrazioni (europee, africane, asiatiche), fino alle migrazioni recenti dall'America Latina verso gli USA." },
        { id: "usa", label: "Superpotenza USA", x: 20, y: 48, color: "#2563eb", html: "Economia, tecnologia, finanza, forza militare.", why: "Grandi risorse e territorio, istituzioni stabili e immigrazione hanno alimentato una crescita lunga; le due guerre mondiali hanno poi consegnato agli USA la leadership dell'Occidente." },
        { id: "latina", label: "America Latina", x: 80, y: 48, color: "#dc2626", html: "Risorse, urbanizzazione, disuguaglianze.", why: "L'economia fondata sull'esportazione di materie prime (argento, zucchero, caffè, rame, soia) ha lasciato forti disparità e dipendenza dai prezzi mondiali; le dittature e i debiti hanno rallentato lo sviluppo." },
        { id: "ambientale", label: "Questione ambientale", x: 50, y: 70, color: "#0ea5e9", html: "Amazzonia, clima, acqua.", why: "La foresta amazzonica è una regolatrice del clima globale: la sua tutela interessa tutto il pianeta, ma la responsabilità e i costi ricadono soprattutto su Paesi ancora in sviluppo." },
        { id: "legami", label: "Integrazione e rapporti", x: 50, y: 95, color: "#14b8a6", html: "USMCA, Mercosur, OSA, CELAC.", why: "L'idea di unità americana nasce con Bolívar, ma le integrazioni sono parziali: vince il commercio con USA e Cina più che tra i Paesi della regione stessa." }
      ],
      edges: [
        ["ambiente", "colonizzazione", "attira"],
        ["colonizzazione", "popoli", "mescola"],
        ["colonizzazione", "usa", "forma"],
        ["colonizzazione", "latina", "forma"],
        ["latina", "ambientale", "include"],
        ["usa", "legami", "guida"],
        ["latina", "legami", "cerca"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Americhe: circa 42,5 milioni di km², circa 1 miliardo di abitanti; Ande (7000 km, Aconcagua 6961 m), Rocciose, Amazzonia, Mississippi-Missouri.</li>
<li><b>1492</b> Colombo; <b>1494</b> Tordesillas; <b>1776</b> indipendenza USA; <b>1810-1825</b> indipendenze latinoamericane; <b>1822</b> Brasile.</li>
<li>USA: prima potenza mondiale, circa 335 milioni di abitanti, immigrazione, Silicon Valley, Costituzione 1787.</li>
<li>America Latina: urbanizzata, ricca di risorse, la regione più diseguale; Mercosur (1991); deforestazione amazzonica.</li>
<li>USMCA (2020) ha sostituito il NAFTA (1994).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz finale",
      questions: [
        { type: "mc", q: "Qual è il maggiore Stato dell'America Latina per popolazione ed estensione?", options: ["Brasile", "Argentina", "Messico"], answer: 0, explain: "Il Brasile ha circa 213 milioni di abitanti e 8,5 milioni di km²." },
        { type: "tf", q: "Il NAFTA è stato sostituito dall'USMCA nel 2020.", answer: true, explain: "L'accordo tra USA, Canada e Messico è stato rinegoziato." },
        { type: "text", q: "Come si chiama il canale che collega Atlantico e Pacifico in America centrale?", answer: ["canale di panama", "panama", "il canale di panama"], explain: "Il Canale di Panama fu inaugurato nel 1914." }
      ]
    }
  ],
  glossary: [
    { t: "Ande", d: "Catena montuosa lunga circa 7000 km lungo la costa occidentale del Sud America." },
    { t: "Trattato di Tordesillas", d: "Accordo del 1494 con cui Spagna e Portogallo si divisero le terre extraeuropee." },
    { t: "Latifondo", d: "Grande proprietà agricola, tipica dell'America Latina coloniale." },
    { t: "Favela", d: "Quartiere povero e densamente popolato, tipico delle città brasiliane." },
    { t: "Mercosur", d: "Mercato comune del Sud America nato nel 1991 (Argentina, Brasile, Paraguay, Uruguay)." },
    { t: "Indice di Gini", d: "Misura della disuguaglianza dei redditi, da 0 (uguaglianza) a 1 (massima disuguaglianza)." },
    { t: "Deforestazione", d: "Taglio e distruzione di foreste, spesso per far posto ad agricoltura e allevamento." },
    { t: "El Niño", d: "Fenomeno di riscaldamento periodico dell'oceano Pacifico che altera il clima." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale popolo precolombiano aveva come capitale Cuzco?", options: ["Gli Inca", "Gli Aztechi", "I Maya"], answer: 0, explain: "L'impero Inca dominava le Ande, con capitale Cuzco in Perù." },
      { type: "num", q: "In che anno gli Stati Uniti dichiararono l'indipendenza?", answer: 1776, tol: 0, explain: "Il 4 luglio 1776." },
      { type: "mc", q: "Che cosa stabilì il Trattato di Tordesillas?", options: ["La spartizione delle terre extraeuropee tra Spagna e Portogallo", "La fine della schiavitù", "L'indipendenza del Brasile"], answer: 0, explain: "Fu firmato nel 1494." },
      { type: "tf", q: "L'America Latina è la regione del mondo con le maggiori disuguaglianze di reddito.", answer: true, explain: "Gli indici di Gini sono tra i più alti del pianeta, per ragioni storiche e strutturali." },
      { type: "mc", q: "Quale fiume ha la maggiore portata d'acqua al mondo?", options: ["Rio delle Amazzoni", "Mississippi", "Nilo"], answer: 0, explain: "L'Amazzoni scarica circa 200.000 m³ al secondo." },
      { type: "text", q: "Come si chiama l'organizzazione di libero scambio tra USA, Canada e Messico entrata in vigore nel 2020?", answer: ["usmca", "t-mec", "cusma"], explain: "L'USMCA ha sostituito il NAFTA." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Colombo arriva ai Caraibi (1492)", "Dichiarazione di indipendenza USA (1776)", "Indipendenza del Brasile (1822)", "Apertura del Canale di Panama (1914)"], explain: "Quattro tappe della storia delle Americhe." },
      { type: "mc", q: "Qual è la principale minaccia alla foresta amazzonica?", options: ["La deforestazione per allevamento, agricoltura e miniere", "Il troppo freddo", "L'eccesso di fiumi"], answer: 0, explain: "La deforestazione minaccia biodiversità e clima." },
      { type: "mc", q: "Che cosa sono i latifondi?", options: ["Grandi proprietà agricole concentrate nelle mani di pochi", "Piccoli orti cittadini", "Fiumi sotterranei"], answer: 0, explain: "Sono un'eredità coloniale e una causa storica della disuguaglianza." },
      { type: "tf", q: "Il Canada è il secondo Stato più esteso del mondo.", answer: true, explain: "Ha circa 9,98 milioni di km², ma solo circa 40 milioni di abitanti." }
    ]
  }
});
