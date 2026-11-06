TOPIC('it', {
  id: 'p3-geo-mare-coste',
  title: `Il mare e le coste`,
  intro: `Dove la terra incontra il mare nascono tante forme diverse: isole, golfi, penisole, stretti… Hanno nomi un po' difficili, ma oggi impariamo a riconoscerle <b>girando un paesaggio in 3D</b> e cercandole sulla carta dell'Italia e del mondo.`,
  minutes: 30,
  sections: [
    {
      type: 'text', title: `Che cos'è la costa?`,
      html: `<p>La <b>costa</b> è la striscia di terra che tocca il mare. La linea precisa dove l'acqua incontra la terra si chiama <b>linea di costa</b>.</p>
<ul>
<li><b>Costa alta</b> (rocciosa): la terra finisce con pareti ripide, le <b>scogliere</b>. Il mare è subito profondo. Esempio: le Cinque Terre in Liguria, la Costiera Amalfitana.</li>
<li><b>Costa bassa</b> (sabbiosa): la terra scende piano piano nel mare e forma lunghe <b>spiagge</b>. Esempio: la riviera romagnola.</li>
</ul>
<p>Il mare lavora sempre sulla costa: le <b>onde</b> consumano le rocce (erosione) e portano sabbia da un posto all'altro (deposito).</p>`
    },
    {
      type: '3d', title: `Il paesaggio della costa in 3D`,
      scene: 'terrain',
      caption: `Ruota il paesaggio e tocca ogni etichetta: la parte si illumina. Prova a trovarle tutte e 13!`,
      options: {
        features: {
          sea: { label: `Mare`, html: `Grande distesa di acqua salata. L'Italia è bagnata dal Mar Mediterraneo.` },
          coast: { label: `Costa`, html: `La striscia di terra che confina con il mare. Può essere <b>alta</b> (scogliere) o <b>bassa</b> (spiagge).` },
          beach: { label: `Spiaggia`, html: `Tratto di costa bassa coperto di sabbia o ciottoli, portati dalle onde e dai fiumi.` },
          island: { label: `Isola`, html: `Terra circondata <b>da ogni parte</b> dall'acqua. La più grande d'Italia (e del Mediterraneo) è la <b>Sicilia</b>.` },
          archipelago: { label: `Arcipelago`, html: `Un <b>gruppo di isole</b> vicine tra loro. Esempi: le <b>Isole Eolie</b>, l'Arcipelago Toscano, la Maddalena.` },
          peninsula: { label: `Penisola`, html: `Terra circondata dall'acqua <b>su tre lati</b> e unita alla terraferma dal quarto. L'<b>Italia</b> è una penisola a forma di stivale!` },
          cape: { label: `Capo (promontorio)`, html: `Una punta di terra che entra nel mare. Se è alta e rocciosa si chiama anche <b>promontorio</b>, come il Gargano (lo "sperone" dello stivale).` },
          gulf: { label: `Golfo`, html: `Una <b>grande</b> insenatura: il mare entra nella terra formando un'ampia curva. Esempio: il <b>Golfo di Napoli</b>.` },
          bay: { label: `Baia`, html: `Un'insenatura <b>piccola</b>, come un golfo in miniatura, spesso riparata dal vento: ottima per le barche.` },
          isthmus: { label: `Istmo`, html: `Una <b>striscia stretta di terra</b> che unisce due terre più grandi e separa due mari. Esempi: l'Istmo di <b>Corinto</b> in Grecia, l'Istmo di <b>Panama</b>.` },
          strait: { label: `Stretto`, html: `Un <b>passaggio stretto di mare</b> tra due terre, che collega due mari. Il contrario dell'istmo! Esempio: lo <b>Stretto di Messina</b> tra Sicilia e Calabria.` },
          lagoon: { label: `Laguna`, html: `Uno specchio d'acqua salata poco profondo, separato dal mare da strisce di sabbia (lidi). Esempio: la <b>Laguna di Venezia</b>.` },
          delta: { label: `Delta`, html: `La foce di un fiume che si divide in tanti rami, a forma di triangolo, perché il fiume deposita molti detriti. Il nome viene dalla lettera greca Δ. Esempio: il <b>delta del Po</b>.` }
        }
      }
    },
    {
      type: 'svg', title: `Isola, penisola, istmo, stretto: le differenze`,
      caption: `Guarda bene dove c'è l'acqua (azzurro) e dove c'è la terra (verde).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#7dd3fc"/>
<g>
<ellipse cx="80" cy="120" rx="50" ry="35" fill="#4ade80" stroke="#166534" stroke-width="2"/>
<text x="80" y="200" font-size="17" text-anchor="middle" fill="#0c4a6e" font-weight="bold">ISOLA</text>
<text x="80" y="222" font-size="13" text-anchor="middle" fill="#0c4a6e">acqua tutto intorno</text>
</g>
<g>
<rect x="160" y="20" width="130" height="50" fill="#4ade80"/>
<path d="M200,70 L250,70 L240,150 L210,150 Z" fill="#4ade80" stroke="#166534" stroke-width="2"/>
<text x="225" y="200" font-size="17" text-anchor="middle" fill="#0c4a6e" font-weight="bold">PENISOLA</text>
<text x="225" y="222" font-size="13" text-anchor="middle" fill="#0c4a6e">acqua su 3 lati</text>
</g>
<g>
<circle cx="345" cy="70" r="35" fill="#4ade80"/>
<rect x="337" y="100" width="16" height="45" fill="#4ade80" stroke="#166534" stroke-width="2"/>
<circle cx="345" cy="170" r="30" fill="#4ade80"/>
<text x="345" y="235" font-size="17" text-anchor="middle" fill="#0c4a6e" font-weight="bold">ISTMO</text>
<text x="345" y="257" font-size="13" text-anchor="middle" fill="#0c4a6e">terra stretta tra due mari</text>
</g>
<g>
<rect x="430" y="40" width="65" height="130" fill="#4ade80"/>
<rect x="520" y="40" width="65" height="130" fill="#4ade80"/>
<rect x="495" y="40" width="25" height="130" fill="#0284c7"/>
<text x="508" y="200" font-size="17" text-anchor="middle" fill="#0c4a6e" font-weight="bold">STRETTO</text>
<text x="508" y="222" font-size="13" text-anchor="middle" fill="#0c4a6e">mare stretto tra due terre</text>
</g>
</svg>`
    },
    {
      type: 'remember', title: `Coppie di "contrari"`,
      html: `<ul>
<li><b>Istmo ↔ Stretto</b>: l'istmo è terra stretta tra due acque; lo stretto è acqua stretta tra due terre.</li>
<li><b>Capo ↔ Golfo</b>: il capo è terra che entra nel mare; il golfo è mare che entra nella terra.</li>
<li><b>Isola ↔ Lago</b>: l'isola è terra circondata dall'acqua; il lago è acqua circondata dalla terra.</li>
</ul>`
    },
    {
      type: 'example', title: `Esempio pratico: l'Italia è un catalogo di forme!`,
      html: `<p>Prendi una cartina dell'Italia e cerca:</p>
<ul>
<li>La <b>penisola</b>: tutta l'Italia a forma di stivale.</li>
<li>Le <b>isole</b> maggiori: <b>Sicilia</b> e <b>Sardegna</b>.</li>
<li>Un <b>arcipelago</b>: le <b>Eolie</b> (Lipari, Vulcano, Stromboli, Salina, Panarea, Filicudi, Alicudi).</li>
<li>Un <b>golfo</b>: Golfo di Napoli, Golfo di Taranto (sotto lo stivale).</li>
<li>Un <b>promontorio</b>: il Gargano, lo "sperone".</li>
<li>Uno <b>stretto</b>: lo Stretto di Messina, largo solo circa 3 km nel punto più stretto.</li>
<li>Una <b>laguna</b>: la Laguna di Venezia. Un <b>delta</b>: il delta del Po.</li>
</ul>`
    },
    {
      type: '3d', title: `Trova gli esempi veri sul globo`,
      scene: 'globe',
      caption: `Ruota il globo: i punti arancioni sono esempi reali di isole, stretti, istmi, golfi, lagune e delta.`,
      options: {
        points: [
          { lat: 37.6, lon: 14.0, label: `Sicilia (isola)` },
          { lat: 38.5, lon: 14.95, label: `Eolie (arcipelago)` },
          { lat: 42.5, lon: 12.8, label: `Penisola italiana` },
          { lat: 40.75, lon: 14.2, label: `Golfo di Napoli` },
          { lat: 38.2, lon: 15.6, label: `Stretto di Messina` },
          { lat: 41.8, lon: 15.95, label: `Gargano (promontorio)` },
          { lat: 45.4, lon: 12.33, label: `Laguna di Venezia` },
          { lat: 44.95, lon: 12.45, label: `Delta del Po` },
          { lat: 37.93, lon: 22.98, label: `Istmo di Corinto` },
          { lat: 9.1, lon: -79.7, label: `Istmo di Panama` },
          { lat: 35.95, lon: -5.6, label: `Stretto di Gibilterra` }
        ]
      }
    },
    {
      type: 'quiz', title: `Mini-quiz: isola o penisola?`,
      questions: [
        { type: 'mc', q: `Una terra circondata dall'acqua da tutte le parti è…`, options: [`una penisola`, `un'isola`, `un istmo`], answer: 1, explain: `L'isola ha acqua tutto intorno.` },
        { type: 'mc', q: `Un gruppo di isole vicine si chiama…`, options: [`arcipelago`, `golfo`, `delta`], answer: 0, explain: `Arcipelago, come le Eolie.` },
        { type: 'tf', q: `L'Italia è una penisola.`, answer: true, explain: `È circondata dal mare su tre lati e unita all'Europa a nord.` }
      ]
    },
    {
      type: 'widget', title: `Gioco: abbina la forma alla definizione`,
      widget: 'match',
      options: {
        pairs: [
          [`Isola`, `Terra con acqua tutto intorno`],
          [`Penisola`, `Terra con acqua su tre lati`],
          [`Istmo`, `Striscia di terra tra due mari`],
          [`Stretto`, `Braccio di mare tra due terre`],
          [`Golfo`, `Grande insenatura di mare`],
          [`Capo`, `Punta di terra nel mare`],
          [`Laguna`, `Acqua bassa separata dal mare da lidi`],
          [`Delta`, `Foce di un fiume a tanti rami`]
        ]
      }
    },
    {
      type: 'widget', title: `Gioco: terra o acqua?`,
      widget: 'classify',
      caption: `Alcune forme sono "pezzi di terra", altre sono "pezzi di acqua". Mettile nel gruppo giusto.`,
      options: {
        groups: [`🟩 È fatto di terra`, `🟦 È fatto di acqua`],
        items: [
          [`isola`, 0], [`penisola`, 0], [`istmo`, 0], [`capo`, 0], [`promontorio`, 0],
          [`stretto`, 1], [`golfo`, 1], [`baia`, 1], [`laguna`, 1], [`lago`, 1]
        ]
      }
    },
    {
      type: 'curiosity', title: `Lo sapevi che… a Venezia le case stanno su milioni di pali?`,
      html: `<p>Venezia è costruita su più di 100 isolette nella <b>laguna</b>. Il terreno è fango morbido, così i veneziani hanno piantato nel fondo <b>milioni di pali di legno</b>, uno accanto all'altro, e sopra hanno costruito le case. Sott'acqua, senza aria, il legno non marcisce: alcuni pali sono lì da più di mille anni!</p>`
    },
    {
      type: 'curiosity', title: `Lo sapevi che… le Eolie sono vulcani?`,
      html: `<p>Le isole dell'arcipelago delle <b>Eolie</b> sono le cime di vulcani che spuntano dal mare. <b>Stromboli</b> è attivo da migliaia di anni e lancia lapilli ogni pochi minuti: gli antichi marinai lo chiamavano "il faro del Mediterraneo" perché di notte si vedeva brillare da lontano.</p>`
    },
    {
      type: 'alternatives', title: `Altri modi per capirlo`,
      intro: `Se fai confusione tra tutte queste parole, prova questi trucchi.`,
      tabs: [
        {
          label: `🛁 Nella vasca da bagno`,
          html: `<p>Riempi un po' la vasca (o una bacinella) e metti dentro oggetti diversi:</p>
<ul>
<li>Una <b>spugna</b> che galleggia lontano dai bordi: è un'<b>isola</b>.</li>
<li>Tante spugnette vicine: un <b>arcipelago</b>.</li>
<li>Il tuo <b>braccio</b> appoggiato al bordo che entra nell'acqua: una <b>penisola</b>; la punta delle dita è il <b>capo</b>.</li>
<li>Lo spazio d'acqua tra due dita aperte: uno <b>stretto</b>.</li>
</ul>`
        },
        {
          label: `🔤 Dalle parole`,
          html: `<p>Molti nomi vengono dal latino e dal greco e contengono già la spiegazione:</p>
<ul>
<li><b>Penisola</b> = dal latino <i>paene insula</i>, "<b>quasi</b> isola".</li>
<li><b>Arcipelago</b> = dal greco, "mare principale": era il nome del Mar Egeo, pieno di isole.</li>
<li><b>Delta</b> = la lettera greca <b>Δ</b>, triangolo, come la forma della foce.</li>
<li><b>Capo</b> = "testa": la testa della terra che sporge nel mare.</li>
</ul>`
        },
        {
          label: `🗺️ Il disegno dall'alto`,
          html: `<p>Disegna dall'alto con due colori: <b>verde</b> la terra, <b>azzurro</b> l'acqua. Poi chiediti: <i>chi circonda chi?</i></p>
<ul>
<li>Verde circondato da azzurro → isola.</li>
<li>Azzurro circondato da verde → lago.</li>
<li>Striscia sottile verde → istmo. Striscia sottile azzurra → stretto.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="290" height="220" fill="#7dd3fc"/>
<ellipse cx="145" cy="105" rx="80" ry="55" fill="#4ade80"/>
<text x="145" y="112" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">ISOLA</text>
<rect x="310" y="0" width="290" height="220" fill="#4ade80"/>
<ellipse cx="455" cy="105" rx="80" ry="55" fill="#38bdf8"/>
<text x="455" y="112" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">LAGO</text>
</svg>`
        }
      ]
    },
    {
      type: 'conceptMap', title: `Mappa: come nascono le forme della costa`,
      nodes: [
        { id: 'mare', label: `Mare e terra`, x: 50, y: 8, color: '#0ea5e9', html: `Dove si incontrano, nascono le forme costiere.`, why: `La linea di costa non è mai ferma: il mare la consuma o la allunga, il livello del mare sale e scende, i fiumi portano detriti. Le forme che vediamo sono una "fotografia" di questo lavoro continuo.` },
        { id: 'onde', label: `Erosione delle onde`, x: 18, y: 35, color: '#ef4444', html: `Le onde consumano le rocce.`, why: `Ogni onda colpisce la roccia con forza e lancia sabbia e sassi come piccoli martelli. Le rocce tenere si consumano prima di quelle dure: così nascono golfi (dove la roccia era tenera) e capi (dove era dura).` },
        { id: 'deposito', label: `Deposito di sabbia`, x: 50, y: 35, color: '#eab308', html: `Fiumi e correnti portano e lasciano sabbia.`, why: `Quando l'acqua rallenta non riesce più a trasportare la sabbia e la lascia cadere. Così si formano spiagge, lidi, lagune e delta.` },
        { id: 'livello', label: `Livello del mare e vulcani`, x: 82, y: 35, color: '#a855f7', html: `Il mare sale e scende, i vulcani creano nuove terre.`, why: `Durante l'ultima glaciazione (circa 20.000 anni fa) il mare era più basso di oltre 100 metri: molte isole di oggi erano colline unite alla terraferma. Quando i ghiacci si sono sciolti, il mare è salito e le ha circondate.` },
        { id: 'golfo', label: `Golfi e capi`, x: 12, y: 68, color: '#f97316', html: `Insenature e punte di terra.`, why: `Nascono dall'erosione diversa: le rocce tenere arretrano (golfo), quelle dure resistono e sporgono (capo).` },
        { id: 'spiaggia', label: `Spiagge e lagune`, x: 40, y: 68, color: '#facc15', html: `Coste basse e sabbiose.`, why: `La sabbia depositata forma lunghi lidi; se un lido chiude un tratto di mare, dietro si forma una laguna, come a Venezia.` },
        { id: 'delta', label: `Delta`, x: 62, y: 88, color: '#22c55e', html: `Foce a tanti rami.`, why: `Si forma quando il fiume porta più detriti di quanti il mare riesca a portare via: la foce avanza e il fiume si divide in rami.` },
        { id: 'isola', label: `Isole e arcipelaghi`, x: 85, y: 68, color: '#16a34a', html: `Terre circondate dal mare.`, why: `Possono essere pezzi di continente staccati dal mare che sale (come la Sardegna), oppure cime di vulcani nati dal fondo del mare (come le Eolie).` }
      ],
      edges: [
        ['mare', 'onde', 'consuma'], ['mare', 'deposito', 'porta'], ['mare', 'livello', 'cambia'],
        ['onde', 'golfo', 'scava'], ['deposito', 'spiaggia', 'forma'], ['deposito', 'delta', 'forma'], ['livello', 'isola', 'separa / crea']
      ]
    },
    {
      type: 'example', title: `Esempio pratico: perché le navi passano dagli stretti e dai canali?`,
      html: `<p>Una nave che va da Genova a Venezia potrebbe fare il giro intorno alla Sicilia, ma passando dallo <b>Stretto di Messina</b> risparmia molti chilometri.</p>
<p>A volte l'uomo ha addirittura <b>tagliato un istmo</b> per creare un canale: il <b>Canale di Corinto</b> (1893) taglia l'istmo di Corinto, e il <b>Canale di Panama</b> (1914) unisce l'Oceano Atlantico e il Pacifico. Prima, le navi dovevano girare intorno a tutto il Sud America!</p>`
    },
    {
      type: 'quiz', title: `Mini-quiz: le forme dell'acqua`,
      questions: [
        { type: 'mc', q: `Lo Stretto di Messina separa…`, options: [`Sardegna e Corsica`, `Sicilia e Calabria`, `Italia e Grecia`], answer: 1, explain: `Separa la Sicilia dalla Calabria e unisce Tirreno e Ionio.` },
        { type: 'mc', q: `Un'insenatura piccola e riparata è…`, options: [`una baia`, `un capo`, `un istmo`], answer: 0, explain: `La baia è come un piccolo golfo.` },
        { type: 'tf', q: `Il delta prende il nome da una lettera greca.`, answer: true, explain: `La lettera Δ, a forma di triangolo.` }
      ]
    }
  ],
  glossary: [
    { t: `Costa`, d: `Striscia di terra che confina con il mare; può essere alta o bassa.` },
    { t: `Isola`, d: `Terra circondata dall'acqua da ogni parte.` },
    { t: `Arcipelago`, d: `Gruppo di isole vicine.` },
    { t: `Penisola`, d: `Terra circondata dall'acqua su tre lati.` },
    { t: `Capo / promontorio`, d: `Punta di terra che sporge nel mare (il promontorio è alto).` },
    { t: `Golfo`, d: `Ampia insenatura di mare.` },
    { t: `Baia`, d: `Piccola insenatura riparata.` },
    { t: `Istmo`, d: `Striscia stretta di terra che unisce due terre e separa due mari.` },
    { t: `Stretto`, d: `Braccio stretto di mare che separa due terre e unisce due mari.` },
    { t: `Laguna`, d: `Acqua salata bassa separata dal mare da cordoni di sabbia.` },
    { t: `Delta`, d: `Foce di un fiume divisa in più rami a forma di triangolo.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: 'mc', q: `Una terra circondata dall'acqua su tre lati è…`, options: [`un'isola`, `una penisola`, `un golfo`], answer: 1, explain: `Penisola = "quasi isola".` },
      { type: 'mc', q: `Qual è l'isola più grande del Mediterraneo?`, options: [`Sardegna`, `Sicilia`, `Corsica`], answer: 1, explain: `La Sicilia, circa 25.700 km².` },
      { type: 'mc', q: `La striscia di terra che unisce due terre e separa due mari è…`, options: [`uno stretto`, `un istmo`, `una laguna`], answer: 1, explain: `L'istmo, come quello di Panama.` },
      { type: 'tf', q: `Uno stretto è un passaggio di mare tra due terre.`, answer: true, explain: `Esempio: Stretto di Messina, Stretto di Gibilterra.` },
      { type: 'text', q: `Come si chiama un gruppo di isole vicine?`, answer: [`arcipelago`, `un arcipelago`], explain: `Arcipelago, come le Eolie.` },
      { type: 'mc', q: `Una costa con scogliere ripide è…`, options: [`una costa alta`, `una costa bassa`, `un delta`], answer: 0, explain: `La costa alta è rocciosa e ripida.` },
      { type: 'mc', q: `Venezia sorge in…`, options: [`un delta`, `una laguna`, `uno stretto`], answer: 1, explain: `La Laguna di Venezia, separata dal mare da lidi di sabbia.` },
      { type: 'mc', q: `Il Gargano è…`, options: [`un promontorio`, `un arcipelago`, `una laguna`], answer: 0, explain: `È lo "sperone" dello stivale: un promontorio.` },
      { type: 'tf', q: `Il golfo è terra che entra nel mare.`, answer: false, explain: `È il contrario: il golfo è mare che entra nella terra. La terra che entra nel mare è il capo.` },
      { type: 'mc', q: `Il delta del Po si trova sul mare…`, options: [`Tirreno`, `Adriatico`, `Ionio`], answer: 1, explain: `Il Po sfocia nell'Adriatico, tra Veneto ed Emilia-Romagna.` },
      { type: 'mc', q: `Perché si forma un delta?`, options: [`Perché il fiume deposita molti detriti alla foce`, `Perché le onde scavano la roccia`, `Perché c'è un vulcano`], answer: 0, explain: `I detriti si accumulano e il fiume si divide in tanti rami.` }
    ]
  }
});
