TOPIC('it', {
  id: "p4-sto-egizi",
  title: "Gli Egizi",
  intro: "Più di 5000 anni fa, lungo il fiume <b>Nilo</b>, nacque una delle civiltà più famose della storia: quella degli <b>antichi Egizi</b>, con i loro faraoni, le piramidi, le mummie e i geroglifici.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Il Nilo, un dono prezioso",
      html: `<p>L'Egitto si trova nel Nord-Est dell'Africa ed è quasi tutto <b>deserto</b>. Ma è attraversato dal <b>Nilo</b>, uno dei fiumi più lunghi del mondo (circa 6650 km).</p>
<p>Ogni anno, in estate, il Nilo <b>straripava</b> (inondazione). Quando l'acqua si ritirava, sui campi restava il <b>limo</b>, un fango nero molto fertile. Lì gli Egizi coltivavano <b>grano, orzo, lino e papiro</b>.</p>
<p>Per questo lo storico greco Erodoto scrisse che l'Egitto era <b>"un dono del Nilo"</b>.</p>
<p>Gli Egizi impararono a costruire <b>canali</b> e <b>dighe</b> e inventarono lo <b>shaduf</b>, una specie di altalena con un secchio per sollevare l'acqua dal fiume.</p>`
    },
    {
      type: "svg",
      title: "La valle del Nilo",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fcd34d"/>
<rect width="600" height="40" fill="#60a5fa"/>
<text x="300" y="28" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">Mar Mediterraneo</text>
<path d="M300 320 C290 260 320 220 300 170 C285 130 310 100 300 70 L250 40 L350 40 L300 70" fill="#22c55e"/>
<path d="M300 320 C290 260 320 220 300 170 C285 130 310 100 300 70" stroke="#2563eb" stroke-width="10" fill="none"/>
<path d="M300 70 L262 42 M300 70 L338 42" stroke="#2563eb" stroke-width="6"/>
<path d="M300 320 C270 260 340 220 280 170 C260 130 330 100 300 70" stroke="#16a34a" stroke-width="40" stroke-opacity="0.35" fill="none"/>
<polygon points="200,150 225,110 250,150" fill="#d97706" stroke="#92400e" stroke-width="2"/>
<polygon points="170,160 190,128 210,160" fill="#d97706" stroke="#92400e" stroke-width="2"/>
<text x="210" y="178" font-size="16" fill="#78350f" text-anchor="middle">Piramidi di Giza</text>
<text x="300" y="62" font-size="15" fill="#14532d" text-anchor="middle">Delta</text>
<text x="380" y="240" font-size="20" fill="#1e3a8a" font-weight="bold">Nilo</text>
<text x="490" y="170" font-size="22" fill="#92400e" text-anchor="middle">Deserto</text>
<text x="100" y="270" font-size="22" fill="#92400e" text-anchor="middle">Deserto</text>
<text x="420" y="300" font-size="16" fill="#14532d">striscia verde = terra fertile</text>
</svg>`,
      caption: "Gli Egizi vivevano lungo la stretta striscia verde intorno al Nilo; tutto intorno c'era il deserto."
    },
    {
      type: "text",
      title: "Il faraone e la società",
      html: `<p>Intorno al <b>3100 a.C.</b> il re Narmer (detto anche Menes) unì l'Alto e il Basso Egitto in un solo regno. Il re si chiamava <b>faraone</b>.</p>
<p>Il faraone era considerato un <b>dio in terra</b>: comandava l'esercito, faceva le leggi e possedeva tutte le terre. La società era come una <b>piramide</b>:</p>
<ul>
<li>in cima il <b>faraone</b>;</li>
<li>poi i <b>sacerdoti</b>, i <b>nobili</b> e i <b>funzionari</b>;</li>
<li>gli <b>scribi</b>, che sapevano leggere e scrivere e tenevano i conti;</li>
<li>i <b>soldati</b>, gli <b>artigiani</b> e i <b>mercanti</b>;</li>
<li>alla base i <b>contadini</b>, i più numerosi, e gli <b>schiavi</b>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "La piramide sociale",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<polygon points="300,20 345,80 255,80" fill="#facc15" stroke="#78350f" stroke-width="2"/>
<polygon points="255,80 345,80 390,140 210,140" fill="#fb923c" stroke="#78350f" stroke-width="2"/>
<polygon points="210,140 390,140 435,200 165,200" fill="#f87171" stroke="#78350f" stroke-width="2"/>
<polygon points="165,200 435,200 480,270 120,270" fill="#a3e635" stroke="#78350f" stroke-width="2"/>
<text x="300" y="70" font-size="15" text-anchor="middle" font-weight="bold">Faraone</text>
<text x="300" y="117" font-size="15" text-anchor="middle" font-weight="bold">Sacerdoti, nobili, scribi</text>
<text x="300" y="177" font-size="15" text-anchor="middle" font-weight="bold">Soldati, artigiani, mercanti</text>
<text x="300" y="242" font-size="15" text-anchor="middle" font-weight="bold">Contadini e schiavi</text>
<text x="520" y="60" font-size="14" fill="#78350f">pochi</text>
<text x="520" y="80" font-size="14" fill="#78350f">e potenti</text>
<text x="500" y="250" font-size="14" fill="#78350f">tanti</text>
</svg>`,
      caption: "Più si scende, più le persone sono numerose ma meno potenti."
    },
    {
      type: "quiz",
      title: "Mini-quiz: il Nilo e il faraone",
      questions: [
        { type: "mc", q: "Perché il Nilo era così importante?", options: ["Perché era salato", "Perché le sue piene lasciavano il limo fertile", "Perché portava l'oro"], answer: 1, explain: "Il limo rendeva fertili i campi in mezzo al deserto." },
        { type: "text", q: "Come si chiamava il re degli Egizi?", answer: ["faraone", "il faraone"], explain: "Il re era il faraone." },
        { type: "tf", q: "I contadini erano il gruppo più numeroso.", answer: true, explain: "La maggior parte degli Egizi lavorava nei campi." }
      ]
    },
    {
      type: "text",
      title: "Le piramidi",
      html: `<p>Le <b>piramidi</b> erano le <b>tombe</b> dei faraoni. La più grande è la <b>piramide di Cheope</b> a Giza, costruita intorno al <b>2560 a.C.</b>: era alta circa <b>146 metri</b> (come un palazzo di 45 piani!) ed è fatta di più di <b>2 milioni di blocchi</b> di pietra.</p>
<p>Gli operai erano lavoratori pagati e organizzati in squadre, non schiavi come si credeva un tempo. Spostavano i blocchi con slitte di legno, rampe e funi, bagnando la sabbia per farli scivolare meglio.</p>
<p>Vicino alle piramidi di Giza c'è la <b>Sfinge</b>: un enorme leone con la testa umana.</p>`
    },
    {
      type: "3d",
      title: "Una piramide in 3D",
      scene: "solid",
      options: { shape: "pyramid", n: 4, r: 1.2, h: 1.1, color: "#e0b25a", labels: true },
      caption: "Le piramidi egizie hanno la base quadrata e 4 facce triangolari. Ruotala per vederla da tutti i lati."
    },
    {
      type: "text",
      title: "La vita dopo la morte e le mummie",
      html: `<p>Gli Egizi credevano che dopo la morte ci fosse un'altra vita. Per viverla bisognava <b>conservare il corpo</b>: per questo lo <b>mummificavano</b>.</p>
<ol>
<li>Si toglievano gli organi interni, che venivano messi nei <b>vasi canopi</b>.</li>
<li>Il corpo veniva coperto di <b>natron</b>, un sale che lo asciugava, per circa 40 giorni.</li>
<li>Poi veniva unto di oli profumati e avvolto in lunghe bende di lino.</li>
<li>Tutto il lavoro durava circa <b>70 giorni</b>. La mummia veniva messa nel <b>sarcofago</b>.</li>
</ol>
<p>Nella tomba si mettevano cibo, gioielli, mobili e statuine di servitori (gli <b>ushabti</b>) per la vita nell'aldilà.</p>`
    },
    {
      type: "text",
      title: "La scrittura: i geroglifici",
      html: `<p>Gli Egizi inventarono una scrittura fatta di disegni: i <b>geroglifici</b> (significa "segni sacri"). Alcuni segni indicavano oggetti, altri suoni.</p>
<p>Scrivevano sul <b>papiro</b>, una specie di carta fatta con una pianta che cresceva sulle rive del Nilo, usando pennelli di giunco e inchiostro.</p>
<p>Per secoli nessuno riuscì più a leggere i geroglifici. Nel <b>1799</b> fu trovata la <b>Stele di Rosetta</b>, con lo stesso testo scritto in geroglifico, in demotico e in greco. Grazie a lei, nel <b>1822</b> il francese <b>Jean-François Champollion</b> riuscì a decifrarli.</p>`
    },
    {
      type: "widget",
      title: "Abbina il segno al significato",
      widget: "match",
      options: {
        pairs: [
          ["👁️ occhio", "Occhio di Horus: protezione"],
          ["☥ ankh", "Simbolo della vita"],
          ["🪲 scarabeo", "Rinascita del Sole"],
          ["🦅 falco", "Il dio Horus"],
          ["☀️ disco solare", "Il dio Ra"]
        ]
      },
      caption: "Molti simboli egizi avevano un significato religioso."
    },
    {
      type: "widget",
      title: "Le parti della piramide",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fde68a"/>
<polygon points="300,30 540,270 60,270" fill="#e0b25a" stroke="#78350f" stroke-width="3"/>
<path d="M300 270 L300 200 L250 160 L250 120 L330 120" stroke="#78350f" stroke-width="5" fill="none"/>
<rect x="320" y="105" width="50" height="30" fill="#78350f"/>
<rect x="280" y="190" width="40" height="25" fill="#a16207"/>
<rect x="0" y="270" width="600" height="30" fill="#d97706"/>
</svg>`,
        spots: [
          { x: 300, y: 40, label: "Vertice" },
          { x: 345, y: 120, label: "Camera del re" },
          { x: 300, y: 202, label: "Camera della regina" },
          { x: 250, y: 140, label: "Grande galleria" },
          { x: 120, y: 260, label: "Base quadrata" }
        ]
      },
      caption: "Clicca ogni punto e scegli il nome giusto (schema semplificato della piramide di Cheope)."
    },
    {
      type: "example",
      title: "Esempio pratico: il calendario egizio",
      html: `<p>Gli Egizi osservavano il cielo e il fiume per sapere quando seminare. Il loro anno aveva <b>365 giorni</b>: 12 mesi di 30 giorni più 5 giorni di festa.</p>
<p>Era diviso in <b>3 stagioni</b> legate al Nilo: <b>Inondazione</b> (Akhet), <b>Semina</b> (Peret) e <b>Raccolto</b> (Shemu). Anche noi oggi usiamo un anno di 365 giorni!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: scrivi il tuo nome in geroglifico",
      html: `<p>Ad alcuni geroglifici corrisponde un suono, come una lettera. Ecco alcuni esempi (semplificati):</p>
<table>
<tr><td><b>A</b> 🦅 avvoltoio</td><td><b>B</b> 🦶 piede</td><td><b>M</b> 🦉 gufo</td></tr>
<tr><td><b>N</b> 🌊 acqua</td><td><b>R</b> 👄 bocca</td><td><b>S</b> 🧵 stoffa piegata</td></tr>
</table>
<p>Prova a scrivere "MARA": 🦉🦅👄🦅. Gli Egizi poi chiudevano i nomi dei faraoni in un ovale chiamato <b>cartiglio</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Nel <b>1922</b> l'archeologo Howard Carter scoprì la tomba del giovane faraone <b>Tutankhamon</b>, quasi intatta, con più di 5000 oggetti preziosi, tra cui la famosa maschera d'oro. Tutankhamon era diventato faraone a circa 9 anni!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Gli Egizi mummificavano anche gli animali: gatti, coccodrilli, uccelli. Il <b>gatto</b> era sacro alla dea Bastet, e chi faceva del male a un gatto veniva punito severamente!</p>`
    },
    {
      type: "widget",
      title: "La linea del tempo degli Egizi",
      widget: "timeline",
      options: {
        unit: "anni",
        events: [
          { year: -3100, label: "Narmer unifica l'Egitto", icon: "👑" },
          { year: -2560, label: "Piramide di Cheope", icon: "🔺" },
          { year: -1332, label: "Tutankhamon faraone", icon: "🎭" },
          { year: -1279, label: "Regno di Ramses II", icon: "🏛️" },
          { year: -30, label: "Morte di Cleopatra: l'Egitto diventa romano", icon: "🐍" },
          { year: 1822, label: "Champollion decifra i geroglifici", icon: "📜" }
        ]
      },
      caption: "Gli anni prima della nascita di Cristo si indicano con a.C."
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>La civiltà egizia nacque lungo il <b>Nilo</b>, che con le piene rendeva fertile la terra.</li>
<li>Il re era il <b>faraone</b>, considerato un dio.</li>
<li>Le <b>piramidi</b> erano tombe; i corpi venivano <b>mummificati</b>.</li>
<li>Scrivevano in <b>geroglifici</b> sul <b>papiro</b>.</li>
</ul>`
    },
    {
      type: "3d",
      title: "La mappa 3D spazio-tempo dell'antico Egitto",
      scene: "spacetime",
      caption: "Il Nilo scorre da sud (Assuan) a nord (il Mediterraneo). Più un evento è in alto, più è recente. Tocca gli eventi: le frecce collegano le cause agli effetti.",
      options: {
        lat: [21.5, 32],
        lon: [28, 35],
        years: [-3200, 0],
        places: [
          { lat: 31.2, lon: 29.92, label: "Alessandria" },
          { lat: 29.85, lon: 31.25, label: "Menfi" },
          { lat: 25.7, lon: 32.64, label: "Tebe (Luxor)" },
          { lat: 24.09, lon: 32.9, label: "Assuan" },
          { lat: 31.9, lon: 32.0, label: "Mar Mediterraneo" },
          { lat: 26.5, lon: 34.3, label: "Mar Rosso" }
        ],
        events: [
          { id: "narmer", lat: 26.18, lon: 31.92, year: -3100, label: "Narmer unisce l'Egitto", html: "Il re <b>Narmer</b> (forse lo stesso chiamato Menes) unisce l'Alto Egitto (il sud) e il Basso Egitto (il nord, il delta). Nasce il primo grande Stato della storia, guidato dal <b>faraone</b>. Ad Abido si trovano le tombe dei primi re." },
          { id: "djoser", lat: 29.87, lon: 31.22, year: -2650, label: "Piramide a gradoni", html: "A Saqqara l'architetto <b>Imhotep</b> costruisce per il faraone Djoser la prima grande costruzione tutta in pietra: una piramide fatta di 6 \"gradini\", uno sopra l'altro.", causes: ["narmer"] },
          { id: "cheope", lat: 29.98, lon: 31.13, year: -2560, label: "Grande Piramide di Cheope", html: "A Giza viene completata la piramide di <b>Cheope</b>: alta in origine circa 146 metri, con oltre 2 milioni di blocchi di pietra. Per quasi 4000 anni sarà la costruzione più alta del mondo.", causes: ["djoser"] },
          { id: "sfinge", lat: 29.975, lon: 31.138, year: -2500, label: "La Sfinge", html: "Accanto alle piramidi viene scolpita la <b>Grande Sfinge</b>: corpo di leone e testa di faraone (probabilmente Chefren), lunga circa 73 metri.", causes: ["cheope"] },
          { id: "tebe", lat: 25.7, lon: 32.64, year: -2040, label: "Medio Regno: Tebe capitale", html: "Dopo un periodo di disordini, il faraone <b>Mentuhotep II</b> riunisce il Paese. <b>Tebe</b> diventa una città importantissima, con il grande tempio di Karnak dedicato al dio Amon.", causes: ["narmer"] },
          { id: "valle", lat: 25.74, lon: 32.6, year: -1500, label: "Valle dei Re", html: "Nel Nuovo Regno i faraoni smettono di costruire piramidi e si fanno seppellire in tombe nascoste scavate nella roccia, nella <b>Valle dei Re</b>, per proteggerle dai ladri.", causes: ["tebe", "cheope"] },
          { id: "tutankhamon", lat: 25.74, lon: 32.61, year: -1323, label: "Tutankhamon", html: "Muore giovanissimo il faraone <b>Tutankhamon</b>. La sua tomba resterà quasi intatta fino al 1922, quando l'archeologo Howard Carter la scoprirà piena di tesori, compresa la famosa maschera d'oro.", causes: ["valle"] },
          { id: "abusimbel", lat: 22.34, lon: 31.63, year: -1264, label: "Abu Simbel", html: "Il faraone <b>Ramses II</b> fa scolpire nella montagna i templi di Abu Simbel, con quattro statue giganti di sé stesso alte circa 20 metri, per mostrare la sua potenza ai confini del regno.", causes: ["valle"] },
          { id: "alessandria", lat: 31.2, lon: 29.92, year: -331, label: "Alessandro fonda Alessandria", html: "<b>Alessandro Magno</b> conquista l'Egitto e fonda Alessandria. Dopo di lui regnano i Tolomei, re di origine greca: la città diventa famosa per la sua Biblioteca e per il Faro.", causes: ["narmer"] },
          { id: "rosetta", lat: 31.4, lon: 30.42, year: -196, label: "La Stele di Rosetta", html: "Viene scolpito un decreto in tre scritture: <b>geroglifico</b>, <b>demotico</b> e <b>greco</b>. Ritrovata nel 1799 vicino alla città di Rashid (Rosetta), permetterà a Jean-François <b>Champollion</b> di decifrare i geroglifici nel 1822.", causes: ["alessandria"] },
          { id: "cleopatra", lat: 31.21, lon: 29.9, year: -30, label: "Cleopatra e Roma", html: "Muore <b>Cleopatra</b>, l'ultima regina d'Egitto. Ottaviano (il futuro imperatore Augusto) conquista il Paese: l'Egitto diventa una provincia romana e il suo grano sfama Roma.", causes: ["alessandria"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Sei il capo di un villaggio, 5000 anni fa: dove vi stabilite?",
      html: `<p>Il tuo popolo vive di caccia e di qualche raccolto, ma il clima sta diventando più secco e il deserto avanza. Devi scegliere dove fermarvi per sempre.</p>
<p>Ogni anno, d'estate, il <b>Nilo</b> si gonfia e allaga le terre vicine per alcune settimane; quando l'acqua si ritira lascia un fango nero.</p>`,
      question: "Dove porti il tuo villaggio?",
      options: [
        { label: "Nel deserto, lontano dal fiume: lì le piene non ci raggiungono.", outcome: "Sareste al sicuro dall'acqua… ma senza acqua! Nel deserto non si coltiva quasi niente e ogni secchio d'acqua va portato da lontano." },
        { label: "Sulle rive del Nilo, nella zona che si allaga: useremo le piene.", outcome: "Rischioso? Le piene arrivano ogni anno quasi nello stesso periodo, quindi si possono prevedere. Il fango che lasciano, il limo, è un concime naturale: si possono fare due raccolti e avanzare cibo." },
        { label: "Sulla costa del Mar Rosso, per pescare.", outcome: "Il pesce c'è, ma l'acqua del mare è salata: non si può bere né usare per i campi. E la costa del Mar Rosso è circondata da deserti e montagne." }
      ],
      answer: 1,
      explain: "Gli antichi Egiziani scelsero il Nilo: chiamavano la terra nera del limo <b>Kemet</b>, \"la terra nera\", e il deserto \"la terra rossa\". Le piene regolari permettevano raccolti abbondanti; il cibo che avanzava manteneva scribi, artigiani, sacerdoti e operai. Il fiume era anche un'autostrada: si scendeva verso nord con la corrente e si risaliva a sud con le vele, grazie al vento che soffia da nord. Per prevedere le piene inventarono un calendario di 365 giorni. Lo storico greco Erodoto scrisse che l'Egitto è \"un dono del Nilo\"."
    },
    {
      type: "decision",
      title: "Sei un faraone del Nuovo Regno: costruisci ancora una piramide?",
      html: `<p>Le piramidi di Giza sono famose in tutto il mondo. Però costano anni di lavoro di migliaia di persone e, si dice, quasi tutte sono già state <b>svuotate dai ladri</b>: una montagna di pietra in mezzo al deserto dice a tutti \"qui c'è un tesoro\".</p>`,
      question: "Come ti fai seppellire?",
      options: [
        { label: "Con una piramide ancora più grande: tutti devono vedere quanto sono potente!", outcome: "Grande fama… ma i ladri sapranno subito dove cercare. E servirebbero enormi quantità di pietre, cibo e lavoratori." },
        { label: "In una tomba nascosta, scavata nella roccia di una valle sorvegliata.", outcome: "Meno spettacolare, ma molto più difficile da trovare e da proteggere con le guardie. Per mostrare la tua grandezza puoi costruire templi enormi, separati dalla tomba." },
        { label: "Sepolto in mezzo alla città, dentro al palazzo.", outcome: "Per gli Egiziani i morti andavano sepolti a ovest del Nilo, dove tramonta il Sole: la città dei vivi stava a est, quella dei morti a ovest." }
      ],
      answer: 1,
      explain: "I faraoni del Nuovo Regno (dal 1550 a.C. circa) scelsero la <b>Valle dei Re</b>, vicino a Tebe, sulla riva ovest del Nilo: tombe scavate nella roccia, con ingressi nascosti, sorvegliate da guardie e costruite da un villaggio di operai specializzati (Deir el-Medina). La loro grandezza la mostravano con templi giganteschi come Karnak e Abu Simbel. Neppure questo fermò del tutto i ladri: quasi tutte le tombe furono saccheggiate. Quella di Tutankhamon si salvò perché l'ingresso finì sepolto sotto i detriti di una tomba scavata dopo."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire gli Egizi",
      intro: "Gli Egizi si possono capire anche facendo, costruendo e giocando: prova questi altri punti di vista.",
      tabs: [
        {
          label: "🏗️ Come la costruivano?",
          html: `<p>Nessuno ci ha lasciato le istruzioni complete, ma gli archeologi hanno trovato molti indizi:</p>
<ul>
<li>i blocchi venivano tagliati nelle <b>cave</b> con scalpelli di rame, cunei e martelli di pietra dura;</li>
<li>le pietre più pregiate arrivavano in <b>barca sul Nilo</b>, anche da Assuan, a quasi 900 km;</li>
<li>i blocchi venivano trascinati su <b>slitte di legno</b>: un dipinto egizio mostra un operaio che versa acqua sulla sabbia davanti alla slitta, per farla scivolare meglio;</li>
<li>per salire si usavano <b>rampe</b> di mattoni e terra (dritte, a zig-zag o a spirale: gli studiosi discutono ancora!).</li>
</ul>
<p>Non erano schiavi: erano soprattutto <b>operai pagati</b> con pane, birra e cipolle, e contadini che lavoravano quando i campi erano allagati.</p>`
        },
        {
          label: "🔤 Il codice dei geroglifici",
          html: `<p>Pensa ai geroglifici come agli <b>emoji</b>, ma molto più complicati! Un segno può valere in tre modi:</p>
<ul>
<li>come <b>disegno</b> dell'oggetto (un sole disegnato = \"sole\");</li>
<li>come <b>suono</b> (una bocca = il suono \"r\"), come le nostre lettere;</li>
<li>come <b>aiuto</b> per capire il significato, senza leggersi.</li>
</ul>
<p>I nomi dei faraoni erano chiusi in un ovale, il <b>cartiglio</b>. Champollion partì proprio da lì: confrontò il nome greco di Tolomeo e di Cleopatra sulla Stele di Rosetta con i segni dentro i cartigli e scoprì i suoni delle lettere.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="220" fill="#fef3c7"/>
<rect x="60" y="40" width="480" height="110" rx="55" fill="none" stroke="#92400e" stroke-width="6"/>
<line x1="545" y1="60" x2="545" y2="130" stroke="#92400e" stroke-width="6"/>
<rect x="110" y="70" width="40" height="40" fill="#1d4ed8"/>
<path d="M200,110 L230,65 L260,110 Z" fill="#b45309"/>
<ellipse cx="320" cy="90" rx="30" ry="18" fill="#dc2626"/>
<path d="M380,110 Q400,60 420,110" fill="none" stroke="#065f46" stroke-width="8"/>
<circle cx="480" cy="90" r="20" fill="#f59e0b"/>
<text x="300" y="190" font-size="20" text-anchor="middle" fill="#78350f">Un cartiglio (inventato): i segni dentro l'ovale formano il nome del faraone</text>
</svg>`
        },
        {
          label: "🌍 Il Nilo sul globo",
          html: `<p>Il Nilo è uno dei fiumi più lunghi del mondo (circa 6.650 km). Nasce nel cuore dell'Africa e scorre verso <b>nord</b> fino al Mediterraneo, attraversando il deserto: senza di lui l'Egitto sarebbe quasi tutto sabbia. Gira il globo e segui il suo percorso.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -1.0, lon: 33.0, label: "Lago Vittoria", color: "#0ea5e9" },
              { lat: 15.6, lon: 32.5, label: "Khartum", color: "#f97316" },
              { lat: 24.09, lon: 32.9, label: "Assuan", color: "#f97316" },
              { lat: 25.7, lon: 32.64, label: "Tebe", color: "#ef4444" },
              { lat: 29.98, lon: 31.13, label: "Giza", color: "#ef4444" },
              { lat: 31.2, lon: 29.92, label: "Alessandria", color: "#a855f7" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5], color: "#2563eb" }]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della civiltà egizia: tocca i nodi e scopri il perché",
      nodes: [
        { id: "nilo", label: "Il Nilo", x: 50, y: 6, color: "#2563eb", html: "Il grande fiume che attraversa l'Egitto da sud a nord.", why: "In un Paese quasi tutto deserto, il Nilo era l'unica fonte sicura d'acqua: tutta la civiltà egizia è nata lungo una striscia verde larga pochi chilometri ai suoi lati." },
        { id: "piene", label: "Piene e limo", x: 20, y: 26, color: "#0ea5e9", html: "Ogni estate il fiume si gonfiava e allagava i campi, lasciando un fango fertile.", why: "Le piogge estive sugli altopiani dell'Etiopia gonfiavano il Nilo Azzurro. Oggi le piene non ci sono più: dal 1970 la grande diga di Assuan trattiene l'acqua nel lago Nasser." },
        { id: "agricoltura", label: "Agricoltura", x: 20, y: 50, color: "#16a34a", html: "Grano, orzo, lino, verdure: i campi lungo il fiume davano raccolti abbondanti.", why: "Il limo è un concime naturale. Con i canali e lo <b>shaduf</b> (una specie di altalena con un secchio) gli Egiziani portavano l'acqua anche ai campi più lontani." },
        { id: "faraone", label: "Il faraone", x: 50, y: 40, color: "#f59e0b", html: "Il re dell'Egitto, considerato figlio degli dèi.", why: "Per costruire canali, conservare il grano nei magazzini e distribuirlo negli anni di magra serviva qualcuno che organizzasse tutto. Il faraone, aiutato da funzionari e sacerdoti, aveva questo potere; e per sembrare indiscutibile si presentava come un dio in terra." },
        { id: "scribi", label: "Scribi e scrittura", x: 80, y: 26, color: "#a855f7", html: "Gli scribi sapevano scrivere i geroglifici e fare i conti.", why: "Per contare il grano, misurare i campi dopo le piene e raccogliere le tasse servivano registri precisi. La scrittura nacque anche per questo, intorno al 3200 a.C., e si scriveva su fogli di <b>papiro</b>, una pianta che cresce lungo il Nilo." },
        { id: "calendario", label: "Calendario e geometria", x: 80, y: 50, color: "#14b8a6", html: "Un anno di 365 giorni diviso in 3 stagioni; misure precise dei campi.", why: "Gli Egiziani notarono che la piena arrivava quando la stella Sirio tornava a vedersi all'alba: così crearono un calendario per prevederla. E poiché le piene cancellavano i confini dei campi, impararono a rimisurarli: la parola \"geometria\" vuol dire proprio \"misura della terra\"." },
        { id: "religione", label: "Religione e aldilà", x: 35, y: 72, color: "#ef4444", html: "Molti dèi (Ra, Osiride, Iside, Anubi…) e la fede in una vita dopo la morte.", why: "Il Sole che \"rinasce\" ogni mattina e i campi che rinascono dopo ogni piena facevano pensare che anche la vita potesse ricominciare dopo la morte." },
        { id: "mummie", label: "Mummificazione", x: 15, y: 92, color: "#92400e", html: "Il corpo veniva conservato con il sale natron e bende di lino.", why: "Secondo gli Egiziani lo spirito aveva bisogno del corpo per vivere nell'aldilà, quindi il corpo andava conservato per sempre. Il clima secco del deserto aiutava." },
        { id: "piramidi", label: "Piramidi e templi", x: 60, y: 92, color: "#d97706", html: "Tombe e templi giganteschi di pietra.", why: "Servivano a proteggere il corpo e i tesori del faraone per l'eternità e a mostrare la sua potenza. Si potevano costruire solo grazie al cibo che avanzava dall'agricoltura, che manteneva migliaia di operai." }
      ],
      edges: [
        ["nilo", "piene", "provoca le"],
        ["piene", "agricoltura", "rendono fertile"],
        ["piene", "calendario", "da prevedere →"],
        ["agricoltura", "faraone", "cibo da organizzare"],
        ["faraone", "scribi", "comanda gli"],
        ["scribi", "calendario", "registrano"],
        ["faraone", "religione", "figlio degli dèi"],
        ["religione", "mummie", "porta alla"],
        ["religione", "piramidi", "porta alle"],
        ["agricoltura", "piramidi", "mantiene gli operai delle"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: piramidi, mummie e scrittura",
      questions: [
        { type: "mc", q: "A che cosa servivano le piramidi?", options: ["Erano case dei contadini", "Erano tombe dei faraoni", "Erano magazzini di grano"], answer: 1, explain: "Le piramidi erano le tombe dei faraoni." },
        { type: "mc", q: "Su che cosa scrivevano gli Egizi?", options: ["Sul papiro", "Sulla carta di riso", "Sul computer"], answer: 0, explain: "Il papiro era fatto con una pianta del Nilo." },
        { type: "tf", q: "La Stele di Rosetta ha aiutato a leggere i geroglifici.", answer: true, explain: "Conteneva lo stesso testo anche in greco." }
      ]
    }
  ],
  glossary: [
    { t: "Faraone", d: "Il re dell'antico Egitto, considerato un dio." },
    { t: "Limo", d: "Fango fertile lasciato dal Nilo dopo le piene." },
    { t: "Piramide", d: "Grande tomba di pietra a base quadrata dei faraoni." },
    { t: "Mummia", d: "Corpo conservato con sali, oli e bende." },
    { t: "Sarcofago", d: "Cassa in cui veniva deposta la mummia." },
    { t: "Geroglifici", d: "La scrittura per immagini degli Egizi." },
    { t: "Papiro", d: "Pianta del Nilo e foglio per scrivere fatto con essa." },
    { t: "Scriba", d: "Funzionario che sapeva leggere, scrivere e fare i conti." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In quale continente si trova l'Egitto?", options: ["Asia", "Africa", "Europa"], answer: 1, explain: "L'Egitto è nel Nord-Est dell'Africa." },
      { type: "mc", q: "Che cosa lasciava il Nilo sui campi dopo le piene?", options: ["Sabbia", "Sale", "Limo fertile"], answer: 2, explain: "Il limo rendeva la terra fertile." },
      { type: "text", q: "Come si chiama la scrittura degli Egizi?", answer: ["geroglifici", "i geroglifici", "geroglifico"], explain: "I geroglifici." },
      { type: "tf", q: "Il faraone era considerato un dio in terra.", answer: true, explain: "Sì, il faraone aveva un potere religioso e politico." },
      { type: "mc", q: "Chi sapeva leggere, scrivere e tenere i conti?", options: ["I contadini", "Gli scribi", "I soldati"], answer: 1, explain: "Gli scribi." },
      { type: "order", q: "Metti in ordine le tappe della mummificazione.", items: ["Si tolgono gli organi interni", "Il corpo si asciuga con il natron", "Si avvolge il corpo nelle bende", "Si mette la mummia nel sarcofago"], explain: "Prima si tolgono gli organi, poi si asciuga, si benda e si mette nel sarcofago." },
      { type: "mc", q: "Qual è la piramide più grande di Giza?", options: ["Di Cheope", "Di Tutankhamon", "Di Cleopatra"], answer: 0, explain: "La piramide di Cheope, alta in origine circa 146 m." },
      { type: "tf", q: "La tomba di Tutankhamon è stata scoperta nel 1922.", answer: true, explain: "La scoprì Howard Carter nel 1922." },
      { type: "mc", q: "Chi decifrò i geroglifici?", options: ["Erodoto", "Champollion", "Ramses II"], answer: 1, explain: "Jean-François Champollion, nel 1822." },
      { type: "num", q: "Quanti giorni aveva l'anno egizio?", answer: 365, explain: "12 mesi da 30 giorni + 5 giorni di festa = 365." }
    ]
  }
});
