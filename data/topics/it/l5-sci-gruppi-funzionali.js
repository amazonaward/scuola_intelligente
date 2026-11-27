TOPIC('it', {
  id: "l5-sci-gruppi-funzionali",
  title: "I gruppi funzionali",
  intro: "L'etanolo del vino, l'acetone dello struccante, l'aceto, la banana, l'odore del pesce vecchio, il nylon dei collant: sono molecole diverse, ma tutte costruite su uno scheletro di carbonio. Ciò che ne decide il carattere è un piccolo \"gruppo di atomi\" attaccato allo scheletro: il <b>gruppo funzionale</b>. Chi conosce i gruppi funzionali può prevedere come una molecola si scioglie, se è acida o basica, come reagisce e che odore ha. In questa lezione incontriamo <b>alcoli, aldeidi, chetoni, acidi carbossilici, esteri, ammine e ammidi</b> e vediamo come, collegando migliaia di piccole molecole, si ottengono i <b>polimeri</b>: plastiche, fibre, ma anche le proteine.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Che cos'è un gruppo funzionale",
      html: `<p>Un <b>gruppo funzionale</b> è un atomo o un insieme di atomi, con una struttura precisa, che conferisce a una molecola le sue <b>proprietà chimiche caratteristiche</b>. Molecole diverse con lo stesso gruppo reagiscono in modo simile: tutti gli alcoli, per esempio, si comportano in modo analogo, che siano piccoli come il metanolo o grandi come il colesterolo. La chimica organica si studia quindi per <b>famiglie</b>, e non una molecola per volta.</p>
<p>Una molecola si può immaginare come <b>R-G</b>: R è lo scheletro idrocarburico (poco reattivo, apolare) e G è il gruppo funzionale (la parte \"attiva\", spesso polare). La presenza di atomi molto elettronegativi (O, N) rende polare il legame con il carbonio e crea siti dove le reazioni possono avvenire.</p>
<p>Nella nomenclatura IUPAC il gruppo funzionale principale determina il <b>suffisso</b> del nome e va numerato con il numero più basso possibile.</p>
<table>
<tr><th>Famiglia</th><th>Gruppo</th><th>Suffisso</th><th>Esempio</th></tr>
<tr><td>Alcol</td><td>-OH legato a C sp³</td><td>-olo</td><td>etanolo CH₃CH₂OH</td></tr>
<tr><td>Etere</td><td>-O- tra due C</td><td>(etere di...)</td><td>etere dietilico</td></tr>
<tr><td>Aldeide</td><td>-CHO (carbonile a fine catena)</td><td>-ale</td><td>etanale CH₃CHO</td></tr>
<tr><td>Chetone</td><td>>C=O (carbonile interno)</td><td>-one</td><td>propanone CH₃COCH₃</td></tr>
<tr><td>Acido carbossilico</td><td>-COOH</td><td>acido ...-oico</td><td>acido etanoico CH₃COOH</td></tr>
<tr><td>Estere</td><td>-COO-</td><td>...-ato di ...-ile</td><td>etanoato di etile</td></tr>
<tr><td>Ammina</td><td>-NH₂ (o -NHR, -NR₂)</td><td>-ammina</td><td>metilammina CH₃NH₂</td></tr>
<tr><td>Ammide</td><td>-CONH₂</td><td>-ammide</td><td>etanammide CH₃CONH₂</td></tr>
</table>`
    },
    {
      type: "text",
      title: "Gli alcoli (e fenoli, eteri)",
      html: `<p>Gli <b>alcoli</b> contengono il gruppo <b>idrossile -OH</b> legato a un carbonio sp³. Il nome si forma sostituendo la -o finale dell'alcano con <b>-olo</b>, indicando la posizione: metanolo CH₃OH, etanolo CH₃CH₂OH, 1-propanolo, 2-propanolo (alcol isopropilico). Si classificano in <b>primari, secondari e terziari</b> a seconda che il carbonio con l'-OH sia legato a uno, due o tre altri carboni (nel metanolo: zero).</p>
<p><b>Proprietà.</b> Il gruppo -OH forma <b>legami a idrogeno</b> tra le molecole. Per questo gli alcoli bollono molto più in alto degli alcani di massa simile: etano −89 °C, metanolo 65 °C, etanolo 78 °C. I primi alcoli (fino a 3 C) sono miscibili con l'acqua in ogni proporzione; con catene più lunghe prevale la parte apolare e la solubilità cala. Gli alcoli sono acidi debolissimi (molto meno dell'acqua).</p>
<p><b>Reazioni.</b> Un alcol primario può <b>ossidarsi</b> ad aldeide e poi ad acido carbossilico; un alcol secondario si ossida a chetone; uno terziario non si ossida facilmente (non ha un H sul carbonio con l'-OH). Per disidratazione con acidi forti e calore un alcol dà un alchene. L'<b>etanolo</b> si ottiene per fermentazione alcolica degli zuccheri da parte dei lieviti: C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂. Il <b>glicerolo</b> (propan-1,2,3-triolo) ha tre -OH, il <b>metanolo</b> è invece tossico (può causare cecità e morte).</p>
<p>Nei <b>fenoli</b> l'-OH è legato direttamente a un anello benzenico: sono più acidi degli alcoli (il fenolo fu usato da Lister come primo antisettico chirurgico nel 1867). Negli <b>eteri</b> R-O-R' un ossigeno unisce due carboni: non formano legami a idrogeno tra loro, quindi bollono molto più in basso degli alcoli isomeri (etere dimetilico −24 °C contro etanolo 78 °C); l'etere dietilico fu uno dei primi anestetici (1846).</p>`
    },
    {
      type: "3d",
      title: "La molecola dell'etanolo in 3D",
      scene: "molecule",
      options: {
        atoms: [
          { x: -1.0, y: 0, z: 0, r: 0.4, color: "#334155", label: "C" },
          { x: 0.4, y: 0, z: 0, r: 0.4, color: "#334155", label: "C" },
          { x: 1.1, y: 1.2, z: 0, r: 0.42, color: "#ef4444", label: "O" },
          { x: 1.9, y: 1.2, z: 0, r: 0.25, color: "#e2e8f0", label: "H" },
          { x: -1.4, y: 0.9, z: 0.3, r: 0.25, color: "#e2e8f0", label: "H" },
          { x: -1.4, y: -0.5, z: 0.8, r: 0.25, color: "#e2e8f0", label: "H" },
          { x: -1.4, y: -0.5, z: -0.8, r: 0.25, color: "#e2e8f0", label: "H" },
          { x: 0.8, y: -0.5, z: 0.8, r: 0.25, color: "#e2e8f0", label: "H" },
          { x: 0.8, y: -0.5, z: -0.8, r: 0.25, color: "#e2e8f0", label: "H" }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [0, 4], [0, 5], [0, 6], [1, 7], [1, 8]]
      },
      caption: "Etanolo CH₃CH₂OH: la parte a sinistra (CH₃CH₂-) è apolare, il gruppo -OH a destra (con l'ossigeno rosso) è polare e forma legami a idrogeno. È una molecola un po' \"anfibia\": si scioglie sia in acqua sia in molti solventi organici. Disegno schematico."
    },
    {
      type: "text",
      title: "Aldeidi e chetoni: il gruppo carbonile",
      html: `<p>Il <b>carbonile C=O</b> è un doppio legame tra carbonio e ossigeno, molto <b>polarizzato</b> (l'ossigeno è più elettronegativo): il carbonio ha una parziale carica positiva e l'ossigeno una negativa.</p>
<ul>
<li>Nelle <b>aldeidi</b> il carbonile è <b>all'estremità</b> della catena, legato ad almeno un H (-CHO). Nome: suffisso <b>-ale</b>: metanale (formaldeide, in soluzione acquosa \"formalina\", conservante e disinfettante), etanale (acetaldeide, presente nella sbornia).</li>
<li>Nei <b>chetoni</b> il carbonile è <b>interno</b>, tra due carboni. Nome: suffisso <b>-one</b>: propanone (<b>acetone</b>, solvente dello smalto per unghie), butanone.</li>
</ul>
<p>Hanno punti di ebollizione intermedi tra alcani e alcoli (l'acetone bolle a 56 °C): sono polari ma non formano legami a idrogeno tra di loro. Quelli più piccoli sono solubili in acqua. Spesso hanno odori caratteristici: la vanillina e il benzaldeide (mandorla amara) sono aldeidi aromatiche.</p>
<p><b>Reattività.</b> Il carbonio positivo viene attaccato da specie con un doppietto di elettroni (<b>addizione nucleofila</b>). Una differenza fondamentale: le <b>aldeidi si ossidano facilmente</b> ad acidi carbossilici, i <b>chetoni no</b>. Questo permette di distinguerli: il <b>reattivo di Tollens</b> (ione argento) si riduce ad argento metallico formando lo \"specchio d'argento\" con le aldeidi; il reattivo di Fehling dà un precipitato rosso di Cu₂O. Per riduzione (con LiAlH₄ o NaBH₄), le aldeidi danno alcoli primari e i chetoni alcoli secondari: la riduzione è l'inverso dell'ossidazione.</p>
<p>Nei carboidrati il carbonile è protagonista: il glucosio è un'aldeide (aldoso) e il fruttosio un chetone (chetoso).</p>`
    },
    {
      type: "svg",
      title: "La scala dell'ossidazione del carbonio",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="ar" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker></defs>
<text x="300" y="26" font-size="17" font-weight="bold" fill="#111827" text-anchor="middle">Da alcol primario ad acido: due ossidazioni di fila</text>
<rect x="15" y="60" width="120" height="70" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="75" y="88" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Alcol</text>
<text x="75" y="112" font-size="15" fill="#111827" text-anchor="middle">CH₃CH₂OH</text>
<rect x="240" y="60" width="120" height="70" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="300" y="88" font-size="15" font-weight="bold" fill="#14532d" text-anchor="middle">Aldeide</text>
<text x="300" y="112" font-size="15" fill="#111827" text-anchor="middle">CH₃CHO</text>
<rect x="465" y="60" width="120" height="70" rx="10" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>
<text x="525" y="88" font-size="15" font-weight="bold" fill="#7f1d1d" text-anchor="middle">Acido</text>
<text x="525" y="112" font-size="15" fill="#111827" text-anchor="middle">CH₃COOH</text>
<line x1="138" y1="95" x2="237" y2="95" stroke="#475569" stroke-width="3" marker-end="url(#ar)"/>
<line x1="363" y1="95" x2="462" y2="95" stroke="#475569" stroke-width="3" marker-end="url(#ar)"/>
<text x="188" y="84" font-size="14" fill="#475569" text-anchor="middle">- 2H</text>
<text x="413" y="84" font-size="14" fill="#475569" text-anchor="middle">+ O</text>
<text x="300" y="165" font-size="15" fill="#111827" text-anchor="middle">numero di ossidazione del carbonio funzionale: −1 → +1 → +3</text>
<rect x="30" y="195" width="260" height="85" rx="10" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
<text x="160" y="222" font-size="15" font-weight="bold" fill="#111827" text-anchor="middle">Alcol secondario</text>
<text x="160" y="246" font-size="15" fill="#111827" text-anchor="middle">si ossida a chetone</text>
<text x="160" y="266" font-size="15" fill="#111827" text-anchor="middle">e si ferma lì</text>
<rect x="310" y="195" width="260" height="85" rx="10" fill="#f3e8ff" stroke="#7e22ce" stroke-width="2"/>
<text x="440" y="222" font-size="15" font-weight="bold" fill="#111827" text-anchor="middle">Alcol terziario</text>
<text x="440" y="246" font-size="15" fill="#111827" text-anchor="middle">non si ossida</text>
<text x="440" y="266" font-size="15" fill="#111827" text-anchor="middle">(nessun H sul C-OH)</text>
</svg>`,
      caption: "Il vino lasciato all'aria si trasforma in aceto proprio così: i batteri Acetobacter ossidano l'etanolo ad acido acetico."
    },
    {
      type: "quiz",
      title: "Mini-quiz: alcoli, aldeidi, chetoni",
      questions: [
        { type: "mc", q: "Perché l'etanolo bolle a 78 °C mentre l'etere dimetilico (stessa formula C₂H₆O) bolle a −24 °C?", options: ["L'etanolo forma legami a idrogeno tra le molecole", "L'etanolo ha massa maggiore", "L'etere è ionico", "L'etanolo è più apolare"], answer: 0, explain: "Il gruppo -OH dell'alcol crea legami a idrogeno intermolecolari; l'etere non ha idrogeno legato a O e non ne forma." },
        { type: "tf", q: "Un chetone si ossida facilmente ad acido carbossilico come un'aldeide.", answer: false, explain: "Il chetone non ha un H legato al carbonile: l'ossidazione richiederebbe di rompere legami C-C, quindi in condizioni blande non avviene." },
        { type: "text", q: "Come si chiama il chetone più semplice (CH₃COCH₃), usato come solvente per lo smalto?", answer: ["acetone", "propanone", "l'acetone", "il propanone"], explain: "Il propanone, noto come acetone." },
        { type: "mc", q: "Qual è il prodotto dell'ossidazione di un alcol secondario?", options: ["Un chetone", "Un'aldeide", "Un acido carbossilico", "Un estere"], answer: 0, explain: "Un alcol secondario perde due idrogeni e diventa chetone; poi non si ossida ulteriormente." }
      ]
    },
    {
      type: "text",
      title: "Acidi carbossilici ed esteri",
      html: `<p>Il gruppo <b>carbossile -COOH</b> unisce un carbonile e un idrossile sullo stesso carbonio. Gli <b>acidi carbossilici</b> si chiamano \"acido ...-<b>oico</b>\": acido metanoico (formico, il veleno delle formiche e dell'ortica), acido etanoico (<b>acetico</b>, l'aceto contiene il 5-6% circa), acido butanoico (odore del burro rancido), acido benzoico (conservante). Gli acidi con la catena lunga (palmitico, stearico, oleico) sono gli <b>acidi grassi</b>, componenti dei grassi e dei sali (saponi).</p>
<p>Sono <b>acidi deboli</b> (pKₐ dell'acido acetico 4,76): in acqua si dissociano solo in piccola parte, R-COOH ⇌ R-COO⁻ + H⁺. Lo ione carbossilato è stabilizzato dalla delocalizzazione della carica sui due ossigeni, ed è per questo che gli acidi carbossilici sono molto più acidi degli alcoli. Formano <b>dimeri</b> tramite doppio legame a idrogeno, e bollono a temperature alte (l'acido acetico a 118 °C, l'acido puro congela a 16,6 °C: per questo si chiama \"glaciale\").</p>
<p><b>Esterificazione.</b> Un acido carbossilico e un alcol, con un catalizzatore acido, formano un <b>estere</b> e acqua:</p>
<p style="text-align:center">CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O<br><span style="font-size:0.9em">acido acetico + etanolo ⇌ etanoato di etile (acetato di etile) + acqua</span></p>
<p>È una reazione di <b>condensazione</b> (due molecole si uniscono perdendo acqua) e <b>reversibile</b>: la reazione inversa, con acqua, è l'<b>idrolisi</b> dell'estere. Con una base (NaOH) l'idrolisi è completa e si chiama <b>saponificazione</b>: dai grassi (trigliceridi, esteri del glicerolo con tre acidi grassi) si ottengono glicerolo e <b>sali degli acidi grassi, cioè il sapone</b>.</p>
<p>Gli esteri a basso peso molecolare sono liquidi volatili, <b>profumati</b>: l'etanoato di 3-metilbutile (acetato di isoamile) sa di banana, il butanoato di etile di ananas. Sono usati come aromi e solventi (l'acetato di etile come solvente per vernici).</p>`
    },
    {
      type: "text",
      title: "Ammine e ammidi",
      html: `<p>Le <b>ammine</b> si possono vedere come derivati dell'ammoniaca NH₃ in cui uno, due o tre H sono sostituiti da gruppi alchilici o arilici: <b>primarie</b> (R-NH₂), <b>secondarie</b> (R₂NH), <b>terziarie</b> (R₃N). Il nome termina in <b>-ammina</b>: metilammina, etilammina, anilina (fenilammina).</p>
<p>L'azoto ha un <b>doppietto elettronico libero</b> che può catturare un protone: le ammine sono <b>basi deboli</b> (come l'ammoniaca): R-NH₂ + H⁺ → R-NH₃⁺. Nei sali di ammonio così ottenuti, molto solubili, vengono spesso trasformati i farmaci per renderli solubili in acqua. Le ammine di piccola massa hanno odore penetrante di pesce (la trimetilammina è responsabile dell'odore del pesce vecchio: per questo il limone, acido, sul pesce ne riduce l'odore trasformando le ammine in sali non volatili). Molte molecole biologiche contengono ammine: la <b>dopamina</b>, la <b>serotonina</b>, l'<b>adrenalina</b>, la <b>nicotina</b> e la <b>caffeina</b> (alcaloidi e neurotrasmettitori), oltre agli <b>amminoacidi</b>.</p>
<p>Le <b>ammidi</b> derivano da un acido carbossilico e un'ammina (o ammoniaca): R-CO-NH-R'. Il doppietto dell'azoto è delocalizzato verso il carbonile, perciò le ammidi <b>non sono basiche</b> e sono planari e rigide. Il <b>legame peptidico</b> che unisce gli amminoacidi nelle proteine è proprio un legame ammidico: ogni proteina è, in pratica, una lunghissima catena di ammidi.</p>`
    },
    {
      type: "widget",
      title: "Riconosci la famiglia",
      widget: "classify",
      options: {
        groups: ["Alcol", "Aldeide / chetone", "Acido carbossilico", "Ammina"],
        items: [
          ["CH₃CH₂OH", 0],
          ["CH₃CH₂CH₂OH", 0],
          ["CH₃CHO", 1],
          ["CH₃COCH₃", 1],
          ["CH₃COOH", 2],
          ["HCOOH", 2],
          ["CH₃NH₂", 3],
          ["C₂H₅NH₂", 3]
        ]
      },
      caption: "Cerca il gruppo: -OH (alcol), C=O (aldeide o chetone), -COOH (acido), -NH₂ (ammina)."
    },
    {
      type: "example",
      title: "Perché l'aspirina e il paracetamolo sono diversi: leggere i gruppi funzionali",
      html: `<p>L'<b>acido acetilsalicilico</b> (aspirina) contiene un anello aromatico, un gruppo <b>carbossilico</b> -COOH e un gruppo <b>estere</b> (l'acetile). L'umidità può idrolizzare l'estere: per questo una vecchia aspirina odora di aceto (acido acetico liberato). Il <b>paracetamolo</b> ha invece un anello aromatico con un gruppo <b>fenolico</b> (-OH) e un gruppo <b>ammidico</b>. Con un solo sguardo ai gruppi funzionali capiamo quindi se una molecola è acida o neutra, se si idrolizza facilmente (esteri, ammidi) e come potrebbe interagire con le proteine del corpo. È lo stesso ragionamento che usano i chimici farmaceutici per progettare nuovi medicinali.</p>`
    },
    {
      type: "example",
      title: "Il sapone: una molecola con due anime",
      html: `<p>Un sapone è il sale di un acido grasso, per esempio lo stearato di sodio: ha una lunga coda <b>apolare</b> (idrocarburica) e una testa <b>ionica</b> (-COO⁻ Na⁺). In acqua le molecole formano <b>micelle</b>: le code si raccolgono verso l'interno, intorno a una goccia di grasso, e le teste, rivolte all'esterno, restano in contatto con l'acqua. Così lo sporco grasso viene \"inglobato\" e portato via dal risciacquo. Lo stesso principio è usato dai detersivi sintetici e, nelle cellule, dai fosfolipidi della membrana.</p>`
    },
    {
      type: "text",
      title: "I polimeri: molecole giganti",
      html: `<p>Un <b>polimero</b> è una macromolecola formata dalla ripetizione di tante unità più piccole, i <b>monomeri</b> (dal greco: \"molte parti\"). Il numero di unità ripetute è il <b>grado di polimerizzazione</b>, anche di migliaia. Le catene lunghe si attorcigliano e si attraggono tra loro: da qui la resistenza e la flessibilità delle materie plastiche.</p>
<p><b>Polimerizzazione per addizione.</b> I monomeri hanno un doppio legame C=C che si apre e si lega agli altri: nessuna molecola viene persa.</p>
<ul>
<li><b>polietilene</b> (PE) dall'etene: sacchetti, bottiglie, tubi;</li>
<li><b>polipropilene</b> (PP) dal propene: contenitori, tappi, fibre;</li>
<li><b>polivinilcloruro</b> (PVC) dal cloruro di vinile (cloroetene): tubi, infissi, pavimenti;</li>
<li><b>polistirene</b> (PS) dallo stirene: vaschette e polistirolo;</li>
<li><b>politetrafluoroetilene</b> (PTFE, teflon) dal tetrafluoroetene: scoperto per caso da Roy Plunkett nel 1938, rivestimento delle padelle antiaderenti.</li>
</ul>
<p><b>Polimerizzazione per condensazione.</b> I monomeri hanno <b>due gruppi funzionali</b> che reagiscono tra loro liberando una piccola molecola (di solito acqua).</p>
<ul>
<li><b>poliesteri</b>, come il <b>PET</b> (polietilentereftalato) delle bottiglie, da glicole etilenico (un diolo) e acido tereftalico (un diacido): gruppi -OH + -COOH → legame estere;</li>
<li><b>poliammidi</b>, come il <b>nylon 6,6</b>, da esametilendiammina e acido adipico (un diacido a 6 C): gruppi -NH₂ + -COOH → legame ammidico. Fu inventato da Wallace Carothers (DuPont) nel 1935 ed è sul mercato dal 1938-39 (le calze di nylon!).</li>
</ul>
<p>I polimeri <b>naturali</b> seguono le stesse regole: le <b>proteine</b> sono poliammidi di amminoacidi, la <b>cellulosa</b> e l'<b>amido</b> sono polimeri del glucosio, il <b>DNA</b> un polimero di nucleotidi, la <b>gomma naturale</b> un polimero dell'isoprene. La prima plastica completamente sintetica fu la <b>bachelite</b> (Leo Baekeland, 1907).</p>
<p><b>Termoplastici e termoindurenti.</b> I polimeri <b>termoplastici</b> (PE, PP, PVC, PET) si ammorbidiscono con il calore e si possono rifondere e riciclare; i <b>termoindurenti</b> (bachelite, resine epossidiche) formano reticoli tridimensionali con legami tra le catene: una volta induriti non si fondono più.</p>`
    },
    {
      type: "svg",
      title: "Dal monomero al polimero",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="17" font-weight="bold" fill="#111827" text-anchor="middle">Polimerizzazione dell'etene (addizione)</text>
<g font-size="20" font-weight="bold" fill="#111827">
<text x="30" y="90">n  CH₂=CH₂</text>
</g>
<line x1="165" y1="82" x2="235" y2="82" stroke="#475569" stroke-width="3"/>
<polygon points="235,74 251,82 235,90" fill="#475569"/>
<text x="200" y="68" font-size="14" fill="#475569" text-anchor="middle">catalizzatore</text>
<text x="270" y="90" font-size="20" font-weight="bold" fill="#111827">[ -CH₂-CH₂- ]</text>
<text x="460" y="98" font-size="16" font-weight="bold" fill="#111827">n</text>
<text x="100" y="125" font-size="15" fill="#475569" text-anchor="middle">monomero (etene)</text>
<text x="400" y="125" font-size="15" fill="#475569" text-anchor="middle">polimero (polietilene)</text>
<text x="300" y="165" font-size="16" font-weight="bold" fill="#111827" text-anchor="middle">Una catena di migliaia di unità</text>
<g stroke="#0369a1" stroke-width="4" fill="none" stroke-linejoin="round">
<polyline points="30,230 60,200 90,230 120,200 150,230 180,200 210,230 240,200 270,230 300,200 330,230 360,200 390,230 420,200 450,230 480,200 510,230 540,200 570,230"/>
</g>
<g fill="#0ea5e9">
<circle cx="60" cy="200" r="6"/><circle cx="120" cy="200" r="6"/><circle cx="180" cy="200" r="6"/><circle cx="240" cy="200" r="6"/><circle cx="300" cy="200" r="6"/><circle cx="360" cy="200" r="6"/><circle cx="420" cy="200" r="6"/><circle cx="480" cy="200" r="6"/><circle cx="540" cy="200" r="6"/>
</g>
<text x="300" y="275" font-size="15" fill="#475569" text-anchor="middle">Nel disegno solo lo scheletro di C: ogni vertice porta due H</text>
</svg>`,
      caption: "Il doppio legame si apre e ogni molecola si lega alla successiva: da un gas (etene) si ottiene un solido (polietilene)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: acidi, esteri, polimeri",
      questions: [
        { type: "mc", q: "Quali gruppi funzionali reagiscono nella formazione di un estere?", options: ["-COOH e -OH", "-NH₂ e -COOH", "-CHO e -OH", "-OH e -NH₂"], answer: 0, explain: "Acido carbossilico + alcol → estere + acqua." },
        { type: "tf", q: "Le ammine sono basi deboli perché l'azoto ha un doppietto elettronico libero.", answer: true, explain: "Il doppietto può legare un H⁺: R-NH₂ + H⁺ → R-NH₃⁺." },
        { type: "mc", q: "Il nylon 6,6 è...", options: ["una poliammide, ottenuta per condensazione", "un poliestere", "un polimero d'addizione dell'etene", "un polimero naturale"], answer: 0, explain: "Si forma da una diammina e un diacido, con legami ammidici e perdita di acqua." },
        { type: "text", q: "Come si chiama la reazione di un estere con NaOH che dà glicerolo e sapone?", answer: ["saponificazione", "la saponificazione"], explain: "È l'idrolisi basica dei grassi (trigliceridi): dà glicerolo e sali degli acidi grassi, i saponi." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i gruppi funzionali",
      intro: "Se le famiglie ti sembrano troppe, prova queste immagini.",
      tabs: [
        { label: "🎒 Gli accessori di una persona", html: "<p>Lo scheletro di carbonio è come una persona: sempre simile. Il <b>gruppo funzionale</b> è l'accessorio che ne decide il comportamento: con la divisa da cuoco cucina, con quella da pompiere spegne gli incendi. Allo stesso modo, l'<b>-OH</b> rende solubile e capace di legami a idrogeno, il <b>-COOH</b> rende acida, il <b>-NH₂</b> rende basica, il <b>C=O</b> rende reattiva. Cambi l'accessorio, cambia il mestiere della molecola.</p>" },
        { label: "🔗 Le catene di perline (polimeri)", html: "<p>Un polimero è una collana di perline tutte uguali (i monomeri). La collana di polietilene ha perline semplici; il <b>nylon</b> è una collana in cui si alternano due tipi di perline (diammina e diacido) unite da un anello (il legame ammidico). Una proteina è una collana con venti tipi di perline diverse. Intrecciando le collane tra loro si ottengono fibre e tessuti.</p>" },
        { label: "🧪 L'etanolo in 3D", html: "<p>Ruota la molecola: la parte \"coda\" CH₃CH₂- è come un pezzo di benzina (apolare), la \"testa\" -OH è come un pezzo d'acqua (polare). Per questo l'etanolo si scioglie in entrambi, e per questo il gel disinfettante riesce a sciogliere i grassi della membrana dei batteri.</p>", scene: "molecule", options: { atoms: [ { x: -1.0, y: 0, z: 0, r: 0.4, color: "#334155", label: "C" }, { x: 0.4, y: 0, z: 0, r: 0.4, color: "#334155", label: "C" }, { x: 1.1, y: 1.2, z: 0, r: 0.42, color: "#ef4444", label: "O" }, { x: 1.9, y: 1.2, z: 0, r: 0.25, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [1, 2], [2, 3]] } }
      ]
    },
    {
      type: "curiosity",
      title: "Lo specchio d'argento e il profumo della vaniglia",
      html: `<p>Mescolando in una provetta pulita il reattivo di Tollens con un'aldeide e scaldando dolcemente, l'argento che si deposita sulle pareti forma un vero <b>specchio</b>: l'aldeide si ossida ad acido, gli ioni Ag⁺ si riducono ad Ag metallico. Questa reazione si usava, in passato, per produrre gli specchi. Il profumo della <b>vaniglia</b> è dovuto alla <b>vanillina</b>, una molecola con tre gruppi funzionali sullo stesso anello benzenico: un'aldeide, un fenolo e un etere. Basta un cambiamento di gruppo, per esempio trasformare l'aldeide in alcol, e l'odore sparisce.</p>`
    },
    {
      type: "curiosity",
      title: "La plastica: quanto dura, quanto si ricicla",
      html: `<p>I polimeri di sintesi hanno una caratteristica: la natura non ha enzimi per demolire molti di questi legami, quindi una bottiglia di plastica può durare centinaia di anni. Per riciclarle meglio, le plastiche portano un numero in un triangolo: <b>1 = PET</b>, <b>2 = HDPE</b> (polietilene ad alta densità), <b>3 = PVC</b>, <b>4 = LDPE</b>, <b>5 = PP</b>, <b>6 = PS</b>. Il PET, essendo un poliestere, può essere \"smontato\" per idrolisi e ricostruito: da 25-30 bottiglie in PET riciclato si può ottenere un pile. Le bioplastiche, come l'acido polilattico (PLA), sono invece poliesteri derivati dall'amido del mais e in condizioni industriali sono biodegradabili.</p>`
    },
    {
      type: "remember",
      title: "Le idee da portare via",
      html: `<ul>
<li><b>-OH</b> alcol (-olo), <b>-CHO</b> aldeide (-ale), <b>>C=O</b> chetone (-one), <b>-COOH</b> acido (-oico), <b>-COO-</b> estere, <b>-NH₂</b> ammina, <b>-CONH-</b> ammide.</li>
<li>Alcol primario → aldeide → acido; secondario → chetone; terziario non si ossida.</li>
<li>Acido + alcol ⇌ estere + acqua (condensazione); estere + NaOH → sapone (saponificazione).</li>
<li>Ammine: basi deboli; ammidi: non basiche, legame peptidico.</li>
<li><b>Polimeri</b>: addizione (PE, PP, PVC) o condensazione (PET, nylon); i polimeri naturali seguono le stesse regole.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa dei gruppi funzionali",
      nodes: [
        { id: "gf", label: "Gruppo funzionale", x: 50, y: 8, color: "#7c3aed", html: "Atomi che danno alla molecola le sue proprietà e reazioni caratteristiche.", why: "Gli studi di Gerhardt e Laurent a metà dell'Ottocento (teoria dei tipi) e poi la teoria della struttura di Kekulé e Couper mostrarono che sono i gruppi di atomi, e non la sola formula, a decidere il comportamento di una sostanza." },
        { id: "oh", label: "Alcoli", x: 15, y: 40, color: "#2563eb", html: "-OH: legami a idrogeno, si ossidano.", why: "L'ossigeno è molto elettronegativo: il legame O-H è polare e l'H è parzialmente positivo, quindi può legarsi all'O di un'altra molecola. Per questo gli alcoli bollono molto più degli alcani." },
        { id: "co", label: "Carbonile", x: 40, y: 50, color: "#16a34a", html: "C=O in aldeidi e chetoni.", why: "Il doppio legame C=O è polarizzato: il carbonio, con carica parziale positiva, è un bersaglio per le specie ricche di elettroni (nucleofili). È la base di quasi tutte le reazioni di sintesi organica." },
        { id: "ac", label: "Acidi e derivati", x: 65, y: 40, color: "#dc2626", html: "-COOH, esteri, ammidi.", why: "Lo ione carbossilato è stabilizzato dalla risonanza (carica distribuita su due ossigeni): è questo il motivo per cui gli acidi carbossilici cedono H⁺ molto più degli alcoli." },
        { id: "am", label: "Ammine", x: 88, y: 50, color: "#f59e0b", html: "-NH₂: basi deboli, base di molti farmaci.", why: "L'azoto ha un doppietto libero (come in NH₃) che accetta H⁺: la base di Brønsted-Lowry. Gli amminoacidi hanno insieme gruppo amminico e carbossilico." },
        { id: "pol", label: "Polimeri", x: 50, y: 88, color: "#0ea5e9", html: "Catene di monomeri: plastiche e biomolecole.", why: "Staudinger propose nel 1920 che i polimeri fossero vere macromolecole legate da legami covalenti (Nobel 1953). Dopo l'invenzione del nylon (Carothers, 1935) l'industria dei materiali sintetici è nata." }
      ],
      edges: [["gf", "oh", "alcoli"], ["gf", "co", "carbonile"], ["gf", "ac", "acidi"], ["gf", "am", "ammine"], ["oh", "co", "ossidazione"], ["co", "ac", "ossidazione"], ["ac", "pol", "condensazione"], ["am", "pol", "condensazione"]]
    }
  ],
  glossary: [
    { t: "Gruppo funzionale", d: "Atomo o gruppo di atomi che determina le proprietà chimiche caratteristiche di una famiglia di composti." },
    { t: "Alcol", d: "Composto con un gruppo -OH legato a un carbonio sp³ (suffisso -olo)." },
    { t: "Carbonile", d: "Gruppo C=O presente in aldeidi e chetoni." },
    { t: "Aldeide / Chetone", d: "Composti con carbonile terminale (aldeide, -ale) o interno (chetone, -one)." },
    { t: "Acido carbossilico", d: "Composto con gruppo -COOH, acido debole (suffisso -oico)." },
    { t: "Estere", d: "Derivato di un acido e di un alcol con perdita di acqua: R-COO-R'." },
    { t: "Saponificazione", d: "Idrolisi basica di un grasso che dà glicerolo e sapone." },
    { t: "Ammina", d: "Derivato dell'ammoniaca con uno o più H sostituiti da gruppi organici; base debole." },
    { t: "Ammide", d: "Composto R-CO-NH-: lega gli amminoacidi nelle proteine (legame peptidico)." },
    { t: "Polimero", d: "Macromolecola formata dalla ripetizione di molte unità (monomeri)." },
    { t: "Polimerizzazione per addizione", d: "I monomeri con doppio legame si uniscono senza perdere atomi (PE, PVC)." },
    { t: "Polimerizzazione per condensazione", d: "I monomeri con due gruppi funzionali si uniscono eliminando piccole molecole come l'acqua (PET, nylon)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è il gruppo funzionale degli acidi carbossilici?", options: ["-COOH", "-OH", "-CHO", "-NH₂"], answer: 0, explain: "Il carbossile -COOH unisce un carbonile e un ossidrile sullo stesso carbonio." },
      { type: "mc", q: "Qual è il nome del composto CH₃CH₂CH₂OH?", options: ["1-propanolo", "propanale", "propanone", "acido propanoico"], answer: 0, explain: "Ha tre carboni e un -OH sul primo: 1-propanolo, un alcol primario." },
      { type: "tf", q: "L'ossidazione di un alcol primario può portare prima ad aldeide e poi ad acido carbossilico.", answer: true, explain: "R-CH₂OH → R-CHO → R-COOH: ogni passaggio è un'ossidazione del carbonio funzionale." },
      { type: "mc", q: "Con quale reattivo si distinguono aldeidi e chetoni?", options: ["Tollens (specchio d'argento)", "Acqua di bromo", "Fenolftaleina", "Cloruro di sodio"], answer: 0, explain: "Le aldeidi riducono lo ione Ag⁺ ad Ag metallico, i chetoni no." },
      { type: "mc", q: "Il prodotto di CH₃COOH + CH₃OH (con catalisi acida) è...", options: ["etanoato di metile + acqua", "acido metanoico", "etere dimetilico", "propanone"], answer: 0, explain: "Si forma l'estere CH₃COOCH₃ (etanoato o acetato di metile) con perdita di acqua." },
      { type: "mc", q: "Perché le ammine hanno carattere basico?", options: ["L'azoto ha un doppietto libero che lega H⁺", "Contengono -OH", "Sono sali", "Hanno un gruppo carbossilico"], answer: 0, explain: "Come l'ammoniaca, accettano un protone tramite il doppietto dell'azoto." },
      { type: "tf", q: "Il legame peptidico tra amminoacidi è un legame ammidico.", answer: true, explain: "Il gruppo -COOH di un amminoacido reagisce con il -NH₂ del successivo formando un'ammide." },
      { type: "mc", q: "Quale polimero si ottiene per addizione dal cloruro di vinile?", options: ["PVC", "PET", "Nylon", "Cellulosa"], answer: 0, explain: "Il polivinilcloruro: il doppio legame del monomero si apre e le unità si legano in catena." },
      { type: "text", q: "Come si chiama la reazione in cui un estere con NaOH produce glicerolo e sapone?", answer: ["saponificazione", "la saponificazione"], explain: "Idrolisi basica dei trigliceridi: glicerolo + sali degli acidi grassi." },
      { type: "order", q: "Ordina per punto di ebollizione crescente, a parità di circa 2-3 carboni.", items: ["etere dimetilico (−24 °C)", "etanale (20 °C)", "etanolo (78 °C)", "acido acetico (118 °C)"], explain: "L'etere non forma legami a idrogeno, l'aldeide solo dipolo-dipolo, l'alcol forma legami a idrogeno, l'acido forma dimeri con doppi legami a idrogeno." }
    ]
  }
});
