TOPIC('it', {
  id: "p1-sto-mia-storia",
  title: "La mia storia",
  intro: "Ti ricordi di quando eri piccolissimo? 👶 Probabilmente no! Eppure anche tu hai una <b>storia</b>: sei nato, hai imparato a camminare, a parlare, a mangiare da solo… Per scoprirla dobbiamo fare come gli <b>storici</b>: cercare gli <b>indizi</b> 🔎, cioè le <b>fonti</b>.",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Come ero e come sono",
      html: `<p>Da quando sei nato sei cambiato tantissimo:</p>
<ul>
<li>👶 <b>Appena nato</b>: dormivi quasi tutto il giorno, bevevi solo latte, non avevi denti.</li>
<li>🧸 <b>Verso 1 anno</b>: hai fatto i <b>primi passi</b> e detto le <b>prime parole</b> («mamma», «papà», «pappa»…).</li>
<li>🎨 <b>Verso 3 anni</b>: sei andato alla scuola dell'infanzia, parlavi tanto, giocavi con gli amici.</li>
<li>🎒 <b>Adesso, a 6 anni</b>: vai in prima, impari a leggere e scrivere, e forse ti cade il primo <b>dentino da latte</b>!</li>
</ul>
<p>Sei cresciuto in <b>altezza</b> e in <b>peso</b>, ma soprattutto hai imparato <b>tante cose nuove</b>.</p>`
    },
    {
      type: "svg",
      title: "La linea della mia vita",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fdf4ff"/>
<line x1="40" y1="170" x2="570" y2="170" stroke="#7e22ce" stroke-width="6" stroke-linecap="round"/>
<path d="M555 160 L572 170 L555 180" fill="#7e22ce"/>
<g fill="#ffffff" stroke="#7e22ce" stroke-width="4">
<circle cx="60" cy="170" r="10"/><circle cx="145" cy="170" r="10"/><circle cx="230" cy="170" r="10"/><circle cx="315" cy="170" r="10"/><circle cx="400" cy="170" r="10"/><circle cx="485" cy="170" r="10"/>
</g>
<g font-size="17" font-weight="bold" text-anchor="middle" fill="#581c87">
<text x="60" y="205">0</text><text x="145" y="205">1</text><text x="230" y="205">2</text><text x="315" y="205">3</text><text x="400" y="205">5</text><text x="485" y="205">6</text>
</g>
<g font-size="34" text-anchor="middle">
<text x="60" y="140">👶</text><text x="145" y="140">🚶</text><text x="230" y="140">🗣️</text><text x="315" y="140">🎨</text><text x="400" y="140">🚲</text><text x="485" y="140">🎒</text>
</g>
<g font-size="14" text-anchor="middle" fill="#374151">
<text x="60" y="95">nasco</text><text x="145" y="95">primi passi</text><text x="230" y="95">tante parole</text><text x="315" y="95">scuola infanzia</text><text x="400" y="95">bici!</text><text x="485" y="95">prima elementare</text>
</g>
<text x="300" y="240" font-size="16" text-anchor="middle" fill="#581c87">anni di età →</text>
</svg>`,
      caption: "Una linea del tempo personale: a sinistra il passato, a destra il presente. Disegna la tua con le tue tappe!"
    },
    {
      type: "text",
      title: "Le fonti: gli indizi del passato",
      html: `<p>Tu non ricordi quando eri neonato. Come fai a saperlo? Con le <b>fonti</b>! Una fonte è <b>qualsiasi cosa che ci racconta il passato</b>. Ci sono 4 tipi di fonti:</p>
<ul>
<li>🗣️ <b>Orali</b>: i <b>racconti</b> di mamma, papà, nonni. «Da piccolo piangevi sempre quando ti lavavamo i capelli!»</li>
<li>📝 <b>Scritte</b>: il <b>certificato di nascita</b>, il libretto delle vaccinazioni, un biglietto di auguri, il diario della scuola dell'infanzia.</li>
<li>🧸 <b>Materiali</b> (gli oggetti): il primo <b>ciuccio</b>, le <b>scarpine</b>, il peluche preferito, un dentino da latte.</li>
<li>📷 <b>Visive</b> (le immagini): le <b>fotografie</b>, i video, i tuoi primi disegni.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Che tipo di fonte è?",
      widget: "classify",
      options: {
        groups: ["🗣️ Orale", "📝 Scritta", "🧸 Materiale", "📷 Visiva"],
        items: [
          ["il nonno racconta il giorno in cui sei nato", 0],
          ["la mamma ricorda la tua prima parola", 0],
          ["📄 certificato di nascita", 1],
          ["💌 biglietto di auguri del 1° compleanno", 1],
          ["🍼 il biberon", 2],
          ["👟 le prime scarpine", 2],
          ["📷 foto del battesimo o della festa di nascita", 3],
          ["🖍️ il tuo primo disegno", 3]
        ]
      },
      caption: "Metti ogni fonte nel gruppo giusto."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le fonti",
      questions: [
        { type: "mc", q: "Il racconto della nonna è una fonte…", options: ["orale", "materiale", "scritta"], answer: 0, explain: "Le parole raccontate a voce sono fonti orali." },
        { type: "mc", q: "Le tue prime scarpine sono una fonte…", options: ["visiva", "materiale", "orale"], answer: 1, explain: "Gli oggetti sono fonti materiali." },
        { type: "tf", q: "Una fotografia è una fonte visiva.", answer: true, explain: "Sì: le immagini sono fonti visive." }
      ]
    },
    {
      type: "example",
      title: "Esempio: la scatola dei ricordi di Leo 📦",
      html: `<p>Leo apre con la mamma la sua <b>scatola dei ricordi</b>. Dentro trova:</p>
<ul>
<li>🍼 un ciuccio azzurro → «Lo usavi fino a 2 anni!»</li>
<li>📷 una foto in ospedale → Leo appena nato, piccolissimo, pesava 3 chili e mezzo.</li>
<li>🦷 un dentino in una scatolina → il suo primo dente caduto, a 6 anni.</li>
<li>📄 il <b>braccialetto</b> dell'ospedale con la <b>data di nascita</b>.</li>
</ul>
<p>Mettendo insieme tutti gli indizi, Leo può raccontare la sua storia, proprio come uno storico!</p>`
    },
    {
      type: "example",
      title: "Esempio: intervista a un adulto 🎤",
      html: `<p>Fai un'<b>intervista</b> a un adulto della tua famiglia. Ecco alcune domande:</p>
<ol>
<li>In che giorno e in che città sono nato?</li>
<li>Quanto pesavo?</li>
<li>Quando ho fatto i primi passi?</li>
<li>Qual è stata la mia prima parola?</li>
<li>Qual era il mio gioco preferito?</li>
</ol>
<p>Scrivi o disegna le risposte: hai appena raccolto delle <b>fonti orali</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🦷",
      html: `<p>I bambini hanno <b>20 denti da latte</b>. Verso i <b>6 anni</b> cominciano a cadere, perché sotto stanno spingendo i <b>denti definitivi</b>, più grandi e forti. Da grande ne avrai circa <b>32</b>!</p>
<p>In Italia si dice che il dentino lo porti la <b>Fatina dei denti</b>; in Spagna e in America Latina invece arriva il <b>Topolino</b> (Ratoncito Pérez)! 🐭</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 👶",
      html: `<p>Un neonato ha un'ottima memoria per una cosa: riconosce la <b>voce della mamma</b> già appena nato, perché l'ha sentita per mesi quando era nella pancia! Però da grandi non ricordiamo quasi niente dei nostri primi 2-3 anni: per questo servono le fonti.</p>`
    },
    {
      type: "3d",
      title: "I bambini nella storia: la mappa 3D 🗺️",
      scene: "spacetime",
      caption: "Anche i bambini del passato hanno lasciato delle fonti! La mappa è l'Europa: più un fatto sta in alto, più è recente. Tocca i fatti per scoprirli.",
      options: {
        lat: [37, 52],
        lon: [-3, 18],
        years: [0, 2000],
        places: [
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 40.75, lon: 14.49, label: "Pompei" },
          { lat: 48.86, lon: 2.35, label: "Parigi" }
        ],
        events: [
          { id: "bulla", lat: 41.9, lon: 12.5, year: 30, label: "La bulla dei bambini romani", html: "<p>I bambini dell'antica Roma portavano al collo la <b>bulla</b>, un ciondolo rotondo che li proteggeva. Gli archeologi ne hanno trovate tante: sono <b>fonti materiali</b>! I bambini romani giocavano con le <b>noci</b>, le bambole e i cerchi.</p>" },
          { id: "pompei", lat: 40.75, lon: 14.49, year: 79, label: "Disegni di bambini a Pompei", html: "<p>Quando il Vesuvio coprì Pompei, rimasero intatti anche i muri delle case. Lì gli archeologi hanno trovato dei <b>disegnini</b> fatti in basso, all'altezza di un bambino: omini e animali disegnati da bimbi di quasi 2000 anni fa. Sono <b>fonti visive</b>!</p>", causes: ["bulla"] },
          { id: "foto", lat: 48.86, lon: 2.35, year: 1839, label: "Nasce la fotografia", html: "<p>A Parigi viene presentata la <b>fotografia</b> di Louis Daguerre. Da allora possiamo vedere com'erano davvero i bambini del passato. Le prime foto però richiedevano di stare fermi a lungo: per questo nelle foto antiche nessuno sorride!</p>" },
          { id: "scuola", lat: 41.89, lon: 12.49, year: 1877, label: "Scuola per tutti in Italia", html: "<p>Una legge italiana (la legge Coppino) rende la scuola elementare <b>obbligatoria</b> per i primi anni: tutti i bambini devono imparare a leggere, scrivere e contare. Le <b>pagelle</b> e i quaderni di quegli anni sono <b>fonti scritte</b>.</p>" },
          { id: "montessori", lat: 41.9, lon: 12.52, year: 1907, label: "La Casa dei Bambini", html: "<p>Nel quartiere di San Lorenzo a Roma, la dottoressa <b>Maria Montessori</b> apre la prima <b>Casa dei Bambini</b>: i bambini imparano facendo, con materiali pensati per le loro mani. Il suo metodo oggi è usato in tutto il mondo.</p>", causes: ["scuola"] },
          { id: "diritti", lat: 41.895, lon: 12.48, year: 1991, label: "I diritti dei bambini", html: "<p>L'Italia approva la <b>Convenzione ONU sui diritti dell'infanzia</b>, scritta nel 1989: ogni bambino ha diritto a un nome, a una famiglia, alla salute, alla scuola, al gioco e a essere protetto. Il tuo <b>nome</b> e il tuo <b>certificato di nascita</b> sono proprio uno di questi diritti!</p>", causes: ["montessori"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Detective della tua storia 🕵️",
      html: `<p>La maestra chiede: «Quando hai fatto i tuoi <b>primi passi</b>?». Tu non te lo ricordi proprio! Come fai a scoprirlo?</p>`,
      question: "Che cosa fai?",
      options: [
        { label: "Me lo invento: dico «a 3 mesi», tanto nessuno lo sa.", outcome: "Uno storico non inventa mai! E poi a 3 mesi nessun bambino cammina: i neonati non riescono ancora nemmeno a stare seduti." },
        { label: "Chiedo ai miei genitori e guardo le foto e i video di quando ero piccolo.", outcome: "Bravissimo! Usi una fonte orale (il racconto) e una fonte visiva (le foto), e controlli che dicano la stessa cosa." },
        { label: "Guardo quanto sono alto adesso.", outcome: "L'altezza di oggi non dice quando hai cominciato a camminare: serve una fonte che venga da quel periodo." }
      ],
      answer: 1,
      explain: "Gli storici lavorano proprio così: <b>non inventano</b>, ma cercano le <b>fonti</b> e le <b>confrontano</b>. Se la mamma dice «hai camminato a 1 anno» e c'è un video della festa del primo compleanno in cui cammini, le due fonti si confermano a vicenda! Più fonti diverse dicono la stessa cosa, più siamo sicuri."
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Ognuno di noi ha una <b>storia personale</b>, dalla nascita ad oggi.</li>
<li>Per conoscere il passato usiamo le <b>fonti</b>: orali, scritte, materiali, visive.</li>
<li>Possiamo mettere le tappe della nostra vita su una <b>linea del tempo</b>.</li>
<li>Lo storico <b>non inventa</b>: cerca e confronta le fonti.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la mia storia 🌈",
      intro: "<p>Scegli il modo che ti piace di più.</p>",
      tabs: [
        {
          label: "📏 La retta degli anni",
          html: `<p>Ogni salto sulla retta è <b>un anno</b> della tua vita. Lo 0 è il giorno in cui sei nato, il 6 è adesso. Le tacche segnano i primi passi (1) e la prima elementare (6). Quanti salti hai fatto finora?</p>`,
          widget: "numberLine",
          options: { min: 0, max: 10, step: 1, marks: [1, 6] }
        },
        {
          label: "🌳 L'albero della famiglia",
          html: `<p>La tua storia comincia… prima di te! I tuoi genitori e i tuoi nonni hanno le loro storie. Si possono disegnare su un <b>albero genealogico</b>: tu sei il tronco… o meglio, il frutto più giovane!</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#f0fdf4"/>
<g stroke="#78350f" stroke-width="4">
<line x1="300" y1="230" x2="300" y2="190"/><line x1="300" y1="190" x2="180" y2="150"/><line x1="300" y1="190" x2="420" y2="150"/>
<line x1="180" y1="150" x2="110" y2="80"/><line x1="180" y1="150" x2="250" y2="80"/><line x1="420" y1="150" x2="350" y2="80"/><line x1="420" y1="150" x2="490" y2="80"/>
</g>
<g fill="#bbf7d0" stroke="#15803d" stroke-width="3">
<rect x="245" y="225" width="110" height="40" rx="12"/>
<rect x="125" y="130" width="110" height="40" rx="12"/><rect x="365" y="130" width="110" height="40" rx="12"/>
<rect x="55" y="45" width="110" height="40" rx="12"/><rect x="195" y="45" width="110" height="40" rx="12"/><rect x="295" y="45" width="110" height="40" rx="12"/><rect x="435" y="45" width="110" height="40" rx="12"/>
</g>
<g font-size="17" font-weight="bold" text-anchor="middle" fill="#14532d">
<text x="300" y="251">IO 🧒</text>
<text x="180" y="156">mamma</text><text x="420" y="156">papà</text>
<text x="110" y="71">nonna</text><text x="250" y="71">nonno</text><text x="350" y="71">nonna</text><text x="490" y="71">nonno</text>
</g>
<text x="300" y="25" font-size="15" text-anchor="middle" fill="#166534">più in alto = più indietro nel tempo</text>
</svg>`
        },
        {
          label: "🇰🇷 Come si festeggia nel mondo",
          html: `<p>In ogni Paese si festeggiano le tappe della vita dei bambini in modo diverso:</p>
<ul>
<li>🇰🇷 In <b>Corea</b>, al primo compleanno (il <b>doljanchi</b>), davanti al bimbo si mettono tanti oggetti: un libro, una matita, del filo, dei soldi… Si dice che quello che sceglie racconti il suo futuro!</li>
<li>🇨🇳 In <b>Cina</b> molte famiglie fanno una festa quando il neonato compie <b>100 giorni</b>.</li>
<li>🇯🇵 In <b>Giappone</b>, il 15 novembre, i bambini di 3, 5 e 7 anni vanno al tempio vestiti a festa (<b>Shichi-Go-San</b>, «sette-cinque-tre»).</li>
</ul>
<p>E nella tua famiglia, come si festeggiano i compleanni?</p>`
        },
        {
          label: "🕵️ Il gioco del detective",
          html: `<p>Uno storico è come un <b>detective</b>: trova gli indizi e ricostruisce cosa è successo. Abbina ogni indizio a quello che ci racconta!</p>`,
          widget: "match",
          options: { pairs: [["👟 scarpine minuscole", "i miei piedi erano piccolissimi"], ["📄 certificato di nascita", "il giorno in cui sono nato"], ["📷 foto con la torta e 1 candelina", "il mio primo compleanno"], ["🦷 dentino in una scatolina", "il primo dente caduto"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa della mia storia 🗺️",
      nodes: [
        { id: "io", label: "Io e la mia storia", x: 50, y: 6, color: "#f59e0b", html: "<p>Tutto quello che mi è successo da quando sono nato.</p>", why: "<p>Ogni persona ha una storia unica: anche due gemelli vivono esperienze diverse!</p>" },
        { id: "crescita", label: "Crescere e cambiare", x: 20, y: 28, color: "#22c55e", html: "<p>Cresco in altezza e imparo cose nuove.</p>", why: "<p>Il corpo dei bambini cresce grazie al cibo, al sonno e al movimento. Il cervello impara di più quando gioca e fa esperienze.</p>" },
        { id: "memoria", label: "I ricordi", x: 50, y: 28, color: "#8b5cf6", html: "<p>Quello che ricordo da solo.</p>", why: "<p>I ricordi dei primi 2-3 anni di solito si perdono: gli scienziati lo chiamano «amnesia infantile». Per questo servono gli altri e le fonti.</p>" },
        { id: "fonti", label: "Le fonti", x: 80, y: 28, color: "#ef4444", html: "<p>Tutte le tracce che raccontano il passato.</p>", why: "<p>Gli storici hanno deciso di chiamarle «fonti» perché, come l'acqua da una fonte, da lì «scorrono» le informazioni sul passato.</p>" },
        { id: "orali", label: "Orali", x: 60, y: 55, color: "#0ea5e9", html: "<p>Racconti a voce.</p>", why: "<p>Prima che si inventasse la scrittura (circa 5000 anni fa), la storia si tramandava solo a voce, di nonno in nipote.</p>" },
        { id: "scritte", label: "Scritte", x: 78, y: 55, color: "#a16207", html: "<p>Documenti, lettere, diari.</p>", why: "<p>Il certificato di nascita esiste perché lo Stato registra ogni bambino che nasce: è anche un tuo <b>diritto</b> avere un nome registrato.</p>" },
        { id: "materiali", label: "Materiali", x: 95, y: 72, color: "#64748b", html: "<p>Oggetti: giochi, vestiti, ciuccio.</p>", why: "<p>Gli archeologi studiano proprio gli oggetti per conoscere i popoli antichi che non hanno lasciato scritti.</p>" },
        { id: "visive", label: "Visive", x: 78, y: 88, color: "#ec4899", html: "<p>Foto, video, disegni.</p>", why: "<p>La fotografia esiste dal 1839; prima, per ricordare un volto, c'erano solo i ritratti dipinti, che pochi potevano permettersi.</p>" },
        { id: "linea", label: "Linea del tempo", x: 30, y: 72, color: "#14b8a6", html: "<p>Metto in ordine le tappe della mia vita.</p>", why: "<p>Mettendo i fatti in ordine, capisco cosa è successo prima e cosa dopo, e quanto tempo è passato.</p>" },
        { id: "storico", label: "Fare lo storico", x: 30, y: 92, color: "#a855f7", html: "<p>Cercare, confrontare e mettere in ordine le fonti.</p>", why: "<p>Lo storico non inventa: se due fonti diverse dicono la stessa cosa, possiamo fidarci di più.</p>" }
      ],
      edges: [
        ["io", "crescita", ""],
        ["io", "memoria", "ricordo poco"],
        ["memoria", "fonti", "servono le"],
        ["fonti", "orali", ""],
        ["fonti", "scritte", ""],
        ["fonti", "materiali", ""],
        ["fonti", "visive", ""],
        ["crescita", "linea", "tappe sulla"],
        ["linea", "storico", ""],
        ["orali", "storico", "si confrontano"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: la mia linea del tempo",
      questions: [
        { type: "order", q: "Metti in ordine le tappe della vita di un bambino.", items: ["Nasce", "Fa i primi passi", "Va alla scuola dell'infanzia", "Va in prima elementare"], explain: "Nascita, primi passi (circa 1 anno), scuola dell'infanzia (3 anni), prima elementare (6 anni)." },
        { type: "num", q: "Quanti denti da latte hanno i bambini?", answer: 20, explain: "I denti da latte sono 20." },
        { type: "mc", q: "Verso quanti anni, di solito, si fanno i primi passi?", options: ["1 anno", "5 anni", "3 mesi"], answer: 0, explain: "Di solito intorno al primo compleanno." }
      ]
    }
  ],
  glossary: [
    { t: "Storia personale", d: "Il racconto della vita di una persona, dalla nascita ad oggi." },
    { t: "Fonte", d: "Qualsiasi traccia che ci dà informazioni sul passato." },
    { t: "Fonte orale", d: "Un racconto fatto a voce." },
    { t: "Fonte scritta", d: "Un documento scritto: certificato, lettera, diario." },
    { t: "Fonte materiale", d: "Un oggetto del passato." },
    { t: "Fonte visiva", d: "Un'immagine: foto, video, disegno." },
    { t: "Linea del tempo", d: "Una riga su cui si mettono in ordine i fatti." },
    { t: "Albero genealogico", d: "Disegno che mostra i membri di una famiglia: genitori, nonni, bisnonni." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cos'è una fonte?", options: ["Una traccia che ci racconta il passato", "Un gioco nuovo", "Un tipo di dolce"], answer: 0, explain: "Una fonte è qualsiasi traccia che ci dà informazioni sul passato." },
      { type: "mc", q: "Il certificato di nascita è una fonte…", options: ["scritta", "orale", "materiale"], answer: 0, explain: "È un documento scritto." },
      { type: "mc", q: "Il ciuccio che usavi da piccolo è una fonte…", options: ["visiva", "materiale", "scritta"], answer: 1, explain: "È un oggetto: fonte materiale." },
      { type: "mc", q: "Il video del tuo primo compleanno è una fonte…", options: ["visiva", "orale", "scritta"], answer: 0, explain: "Immagini e video sono fonti visive." },
      { type: "tf", q: "Il racconto del nonno è una fonte orale.", answer: true, explain: "Sì, è un racconto a voce." },
      { type: "tf", q: "Uno storico può inventare quello che non sa.", answer: false, explain: "No: lo storico cerca e confronta le fonti, non inventa." },
      { type: "num", q: "Quanti tipi di fonti abbiamo studiato?", answer: 4, explain: "Orali, scritte, materiali e visive: 4." },
      { type: "order", q: "Metti in ordine dalla più antica alla più recente.", items: ["Bevo il latte nel biberon", "Faccio i primi passi", "Gioco alla scuola dell'infanzia", "Imparo a leggere in prima"], explain: "Dalla nascita fino ad oggi." },
      { type: "text", q: "Come si chiamano i primi denti dei bambini?", answer: ["denti da latte", "da latte", "dentini da latte"], explain: "Sono i denti da latte." },
      { type: "mc", q: "Chi aprì la prima Casa dei Bambini a Roma nel 1907?", options: ["Maria Montessori", "Giulio Cesare", "Galileo Galilei"], answer: 0, explain: "Fu la dottoressa Maria Montessori." },
      { type: "mc", q: "Per sapere quando hai detto la prima parola, la cosa migliore è…", options: ["inventarlo", "chiedere ai genitori e controllare foto o video", "guardarsi allo specchio"], answer: 1, explain: "Si usano e si confrontano più fonti." }
    ]
  }
});
