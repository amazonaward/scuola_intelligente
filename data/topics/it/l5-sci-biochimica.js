TOPIC('it', {
  id: "l5-sci-biochimica",
  title: "Biochimica e metabolismo",
  intro: "Ogni secondo, nel tuo corpo, avvengono miliardi di reazioni chimiche: mentre leggi, i tuoi neuroni consumano glucosio, i mitocondri producono ATP, gli enzimi tagliano e ricuciono molecole. La <b>biochimica</b> è la chimica della vita: studia le molecole dei viventi (carboidrati, lipidi, proteine, acidi nucleici), gli <b>enzimi</b> che accelerano le reazioni e il <b>metabolismo</b>, cioè il modo in cui le cellule ricavano energia dal cibo (<b>respirazione cellulare</b>) o dalla luce (<b>fotosintesi</b>) e la usano per costruire e mantenere se stesse. Capirai perché una banana ti dà energia, perché la febbre alta è pericolosa e perché senza le piante non ci sarebbe ossigeno.",
  minutes: 65,
  sections: [
    {
      type: "text",
      title: "Le quattro famiglie di biomolecole",
      html: `<p>I viventi sono fatti soprattutto di C, H, O, N, P e S. Quasi tutta la loro massa secca è costituita da quattro famiglie di <b>macromolecole</b>, quasi sempre <b>polimeri</b> di piccoli monomeri (richiama la lezione sui gruppi funzionali e i polimeri):</p>
<table>
<tr><th>Famiglia</th><th>Monomero</th><th>Legame</th><th>Funzioni principali</th></tr>
<tr><td><b>Carboidrati</b></td><td>monosaccaridi (glucosio, fruttosio)</td><td>glicosidico</td><td>energia pronta (glucosio, amido, glicogeno), struttura (cellulosa, chitina)</td></tr>
<tr><td><b>Lipidi</b></td><td>acidi grassi + glicerolo (non sono veri polimeri)</td><td>estere</td><td>riserva di energia (trigliceridi), membrane (fosfolipidi), ormoni steroidei</td></tr>
<tr><td><b>Proteine</b></td><td>20 amminoacidi</td><td>peptidico (ammidico)</td><td>enzimi, struttura, trasporto (emoglobina), difesa (anticorpi), movimento</td></tr>
<tr><td><b>Acidi nucleici</b></td><td>nucleotidi</td><td>fosfodiesterico</td><td>informazione genetica (DNA), sintesi proteica (RNA)</td></tr>
</table>
<p>Il <b>glucosio</b> C₆H₁₂O₆ è lo zucchero chiave: l'<b>amido</b> (riserva delle piante) e il <b>glicogeno</b> (riserva degli animali, nel fegato e nei muscoli) sono polimeri dello stesso glucosio legati in modi diversi, mentre la <b>cellulosa</b>, il materiale delle pareti vegetali, ha legami che l'uomo non sa digerire (la sua fibra serve però alla digestione). I <b>trigliceridi</b> (grassi e oli) immagazzinano più del doppio dell'energia a parità di massa rispetto a zuccheri e proteine (circa 9 kcal/g contro 4 kcal/g) perché sono molecole molto più \"ridotte\", cioè con molti legami C-H.</p>
<p>Le <b>proteine</b> sono catene di amminoacidi che si ripiegano in una forma tridimensionale precisa: struttura <b>primaria</b> (la sequenza), <b>secondaria</b> (α-eliche e foglietti β, tenuti da legami a idrogeno), <b>terziaria</b> (ripiegamento complessivo di una catena), <b>quaternaria</b> (più catene insieme, come i quattro nell'emoglobina). La forma determina la funzione: se il calore o un acido la distrugge (<b>denaturazione</b>), la proteina smette di funzionare, come l'albume che diventa bianco in padella.</p>`
    },
    {
      type: "text",
      title: "Gli enzimi: catalizzatori biologici",
      html: `<p>Molte reazioni della vita sarebbero troppo lente alla temperatura del corpo (37 °C). Gli <b>enzimi</b>, quasi tutti proteine (alcuni sono molecole di RNA, i ribozimi), le accelerano anche di milioni di volte senza consumarsi. Come ogni catalizzatore, abbassano l'<b>energia di attivazione</b> (E<sub>a</sub>): offrono un percorso alternativo, con una \"collina\" più bassa da scavalcare. Non cambiano però l'equilibrio né il ΔG della reazione: la rendono solo più rapida.</p>
<p><b>Come funzionano.</b> L'enzima ha una tasca, il <b>sito attivo</b>, in cui si inserisce il <b>substrato</b> formando il complesso enzima-substrato; la reazione avviene e i <b>prodotti</b> escono, lasciando l'enzima libero di ripartire: E + S ⇌ ES → E + P. Emil Fischer propose nel 1894 il modello \"<b>chiave-serratura</b>\" (forma del sito rigida e complementare al substrato); nel 1958 Daniel Koshland propose l'<b>adattamento indotto</b>: il sito attivo si modella attorno al substrato, come un guanto che si adatta alla mano. Gli enzimi sono <b>specifici</b>: la lattasi scinde solo il lattosio, e chi non la produce a sufficienza è intollerante al lattosio.</p>
<p><b>Cosa ne influenza l'attività.</b></p>
<ul>
<li><b>Concentrazione di substrato</b>: la velocità aumenta e poi raggiunge un massimo di saturazione (cinetica di Michaelis-Menten, 1913), quando tutti gli enzimi sono occupati;</li>
<li><b>Temperatura</b>: con il calore la velocità cresce, ma oltre un valore ottimale (circa 37 °C per l'uomo) la proteina si denatura e l'attività crolla. La febbre molto alta è pericolosa anche per questo;</li>
<li><b>pH</b>: ogni enzima ha un pH ottimale: la pepsina dello stomaco lavora a pH 2 circa, la tripsina dell'intestino a pH 8;</li>
<li><b>Inibitori</b>: <b>competitivi</b> (assomigliano al substrato e occupano il sito attivo) e <b>non competitivi</b> (si legano altrove e deformano l'enzima). Molti farmaci e veleni sono inibitori enzimatici: l'aspirina inibisce le cicloossigenasi, la penicillina blocca un enzima per la parete batterica;</li>
<li><b>Cofattori e coenzimi</b>: ioni metallici o molecole organiche (molte vitamine) necessarie all'attività.</li>
</ul>
<p>Gli enzimi sono anche regolati dalla cellula: nella <b>retroazione negativa</b> (feedback) il prodotto finale di una via metabolica inibisce un enzima iniziale, così la cellula non spreca energia producendo più del necessario.</p>`
    },
    {
      type: "svg",
      title: "L'enzima abbassa la collina",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="260" x2="580" y2="260" stroke="#334155" stroke-width="3"/>
<line x1="60" y1="260" x2="60" y2="30" stroke="#334155" stroke-width="3"/>
<text x="20" y="150" font-size="15" font-weight="bold" fill="#111827" transform="rotate(-90 20 150)" text-anchor="middle">Energia</text>
<text x="320" y="288" font-size="15" font-weight="bold" fill="#111827" text-anchor="middle">Decorso della reazione</text>
<path d="M70 180 C150 180 190 50 280 50 C360 50 400 220 560 220" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M70 180 C150 180 190 115 280 115 C360 115 400 220 560 220" fill="none" stroke="#16a34a" stroke-width="4" stroke-dasharray="9 6"/>
<text x="110" y="168" font-size="15" font-weight="bold" fill="#111827">Substrato</text>
<text x="470" y="210" font-size="15" font-weight="bold" fill="#111827">Prodotti</text>
<line x1="300" y1="52" x2="300" y2="112" stroke="#7c3aed" stroke-width="3"/>
<text x="318" y="88" font-size="14" font-weight="bold" fill="#7c3aed">Ea risparmiata</text>
<text x="380" y="40" font-size="15" font-weight="bold" fill="#dc2626">senza enzima</text>
<text x="400" y="132" font-size="15" font-weight="bold" fill="#16a34a">con enzima</text>
</svg>`,
      caption: "L'enzima non cambia il punto di partenza né quello di arrivo: abbassa soltanto la barriera da superare (energia di attivazione)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: biomolecole ed enzimi",
      questions: [
        { type: "mc", q: "Che cosa abbassa un enzima?", options: ["L'energia di attivazione", "Il ΔG della reazione", "La temperatura del corpo", "La concentrazione dei prodotti"], answer: 0, explain: "L'enzima è un catalizzatore: riduce l'energia di attivazione senza modificare equilibrio o ΔG." },
        { type: "tf", q: "Un enzima denaturato dal calore non funziona più perché ha perso la sua forma tridimensionale.", answer: true, explain: "La funzione dipende dalla struttura: se il sito attivo si deforma, il substrato non si incastra più." },
        { type: "mc", q: "Il legame che unisce gli amminoacidi in una proteina è...", options: ["peptidico", "glicosidico", "estereo", "ionico"], answer: 0, explain: "Il legame peptidico è un legame ammidico tra il carbossile di un amminoacido e l'amminogruppo del successivo." },
        { type: "text", q: "Come si chiama la regione dell'enzima in cui si lega il substrato?", answer: ["sito attivo", "il sito attivo"], explain: "Il sito attivo è la tasca in cui il substrato si inserisce e viene trasformato." }
      ]
    },
    {
      type: "text",
      title: "Metabolismo, ATP e coenzimi",
      html: `<p>Il <b>metabolismo</b> è l'insieme di tutte le reazioni chimiche di un organismo. Si divide in:</p>
<ul>
<li><b>catabolismo</b>: demolizione di molecole grandi in molecole piccole, con <b>rilascio</b> di energia (respirazione, digestione);</li>
<li><b>anabolismo</b>: costruzione di molecole complesse da quelle semplici, con <b>consumo</b> di energia (fotosintesi, sintesi proteica).</li>
</ul>
<p>Le due parti sono collegate dall'<b>ATP</b> (adenosina trifosfato), la \"moneta energetica\" della cellula: un nucleotide con tre gruppi fosfato. L'idrolisi dell'ultimo fosfato, ATP + H₂O → ADP + Pᵢ, libera circa 30 kJ/mol (in condizioni standard, ma nella cellula anche di più) e permette alle reazioni che ne hanno bisogno di avvenire: contrazione muscolare, trasporto attivo, sintesi di molecole. Un adulto ne ricicla in un giorno una massa pari al proprio peso corporeo, perché la cellula contiene solo piccole scorte e rigenera l'ATP in continuazione da ADP e fosfato.</p>
<p>Nelle reazioni redox del metabolismo gli elettroni sono trasportati da <b>coenzimi</b>: <b>NAD⁺/NADH</b> e <b>FAD/FADH₂</b> nella demolizione, <b>NADP⁺/NADPH</b> nelle sintesi (fotosintesi). Sono come \"camioncini\" che portano elettroni e idrogeno da una tappa all'altra (richiama le ossidoriduzioni di quarto anno: NAD⁺ è l'ossidante, NADH il riducente).</p>`
    },
    {
      type: "text",
      title: "La respirazione cellulare",
      html: `<p>La respirazione cellulare ossida il glucosio, in presenza di ossigeno, per ricavarne ATP:</p>
<p style="text-align:center"><b>C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energia</b> (ΔG° circa −2870 kJ/mol; parte finisce in ATP, il resto è calore)</p>
<p>È la stessa reazione di una combustione, ma avviene a tappe, con enzimi, in modo che l'energia venga captata a piccole dosi nell'ATP invece di perdersi in una fiamma. Ci sono tre grandi fasi:</p>
<p><b>1. Glicolisi</b> (nel <b>citoplasma</b>, non richiede ossigeno). Una molecola di glucosio (6 C) è scissa in due di <b>piruvato</b> (3 C) attraverso dieci reazioni. Bilancio netto: <b>2 ATP</b> e <b>2 NADH</b> per glucosio (se ne consumano 2 e se ne producono 4).</p>
<p><b>2. Ciclo di Krebs</b> (o ciclo dell'acido citrico), nella <b>matrice mitocondriale</b>. Il piruvato viene prima trasformato in acetil-CoA (2 C), con perdita di CO₂ e produzione di NADH. L'acetil-CoA entra nel ciclo (scoperto da Hans Krebs nel 1937), in cui viene completamente ossidato a CO₂. Per ogni glucosio (cioè per due giri) si ottengono in tutto: 6 CO₂ (con la tappa precedente), circa <b>2 ATP</b> (o GTP), 8 NADH + 2 FADH₂ dal ciclo e dalla decarbossilazione del piruvato.</p>
<p><b>3. Catena di trasporto degli elettroni e fosforilazione ossidativa</b>, nella <b>membrana mitocondriale interna</b> (le creste). NADH e FADH₂ cedono gli elettroni a una serie di complessi proteici; l'energia degli elettroni è usata per <b>pompare protoni (H⁺)</b> dalla matrice allo spazio intermembrana, creando un gradiente. I protoni tornano indietro attraverso l'<b>ATP sintasi</b>, un enzima-turbina, che a ogni giro fabbrica ATP: è la <b>chemiosmosi</b> proposta da Peter Mitchell nel 1961 (Nobel 1978). L'<b>ossigeno</b> è l'accettore finale degli elettroni: si riduce ad <b>acqua</b>.</p>
<p><b>Resa.</b> Per ogni glucosio si producono circa <b>30-32 ATP</b> (i vecchi libri riportavano 36-38; la stima attuale tiene conto del costo del trasporto di fosfato e di NADH tra i compartimenti). Quasi tutto l'ATP viene dalla fase 3, dove entra in gioco l'ossigeno: per questo la vita complessa è aerobica. Il cianuro blocca proprio uno dei complessi della catena (la citocromo ossidasi): la cellula non riesce più a usare l'ossigeno e va incontro a morte rapida.</p>`
    },
    {
      type: "svg",
      title: "Dove avviene la respirazione cellulare",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="15" y="40" width="560" height="245" rx="20" fill="#ecfeff" stroke="#0e7490" stroke-width="2" stroke-dasharray="6 5"/>
<text x="30" y="30" font-size="15" font-weight="bold" fill="#0e7490">Cellula</text>
<rect x="40" y="75" width="150" height="85" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="115" y="100" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Glicolisi</text>
<text x="115" y="122" font-size="14" fill="#111827" text-anchor="middle">citoplasma</text>
<text x="115" y="144" font-size="14" fill="#111827" text-anchor="middle">+2 ATP</text>
<ellipse cx="400" cy="200" rx="165" ry="78" fill="#fef9c3" stroke="#a16207" stroke-width="3"/>
<text x="400" y="138" font-size="15" font-weight="bold" fill="#713f12" text-anchor="middle">Mitocondrio</text>
<rect x="260" y="150" width="130" height="70" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<text x="325" y="177" font-size="15" font-weight="bold" fill="#14532d" text-anchor="middle">Krebs</text>
<text x="325" y="200" font-size="14" fill="#111827" text-anchor="middle">matrice, CO₂</text>
<rect x="410" y="150" width="130" height="70" rx="12" fill="#fee2e2" stroke="#b91c1c" stroke-width="3"/>
<text x="475" y="173" font-size="15" font-weight="bold" fill="#7f1d1d" text-anchor="middle">Catena resp.</text>
<text x="475" y="196" font-size="14" fill="#111827" text-anchor="middle">O₂ → H₂O</text>
<text x="475" y="213" font-size="14" font-weight="bold" fill="#111827" text-anchor="middle">~26-28 ATP</text>
<line x1="190" y1="118" x2="258" y2="178" stroke="#475569" stroke-width="3"/>
<polygon points="258,178 246,176 252,167" fill="#475569"/>
<text x="207" y="165" font-size="14" fill="#475569">piruvato</text>
<line x1="392" y1="185" x2="408" y2="185" stroke="#475569" stroke-width="3"/>
<text x="75" y="55" font-size="14" font-weight="bold" fill="#111827">Glucosio</text>
<line x1="115" y1="60" x2="115" y2="73" stroke="#475569" stroke-width="3"/>
<text x="300" y="272" font-size="14" fill="#111827" text-anchor="middle">NADH e FADH₂ portano gli elettroni alla catena respiratoria</text>
</svg>`,
      caption: "Schema semplificato: tre tappe in tre luoghi diversi. La catena respiratoria produce la maggior parte dell'ATP."
    },
    {
      type: "text",
      title: "Senza ossigeno: la fermentazione",
      html: `<p>Se manca l'ossigeno, la glicolisi può continuare ma il NADH prodotto si accumulerebbe e bloccherebbe tutto. La cellula allora lo rigenera in NAD⁺ riducendo il piruvato: è la <b>fermentazione</b>, che dà solo i <b>2 ATP</b> della glicolisi (molto meno della respirazione).</p>
<ul>
<li><b>Fermentazione lattica</b>: piruvato → <b>lattato</b> (acido lattico). Avviene nei muscoli sotto sforzo intenso, quando l'ossigeno non basta, e nei batteri lattici dello yogurt e dei formaggi. Il lattato viene poi riutilizzato dal fegato.</li>
<li><b>Fermentazione alcolica</b>: piruvato → <b>etanolo + CO₂</b>, operata dai lieviti (<i>Saccharomyces cerevisiae</i>). Fa fermentare il vino e la birra, e lievitare il pane: la CO₂ fa gonfiare l'impasto, mentre l'alcol evapora in cottura.</li>
</ul>
<p>Louis Pasteur (1857-1860) dimostrò che la fermentazione è dovuta a microrganismi viventi; Eduard Buchner nel 1897 vide che anche un estratto di lievito senza cellule vive fermenta: l'inizio dello studio degli enzimi (Nobel 1907).</p>`
    },
    {
      type: "text",
      title: "La fotosintesi clorofilliana",
      html: `<p>La <b>fotosintesi</b> è il processo inverso, in apparenza, della respirazione: usa l'energia della luce per costruire zuccheri da CO₂ e acqua.</p>
<p style="text-align:center"><b>6 CO₂ + 6 H₂O + energia luminosa → C₆H₁₂O₆ + 6 O₂</b></p>
<p>Avviene nei <b>cloroplasti</b> di piante, alghe e (in forma diversa) nei cianobatteri. Il pigmento principale è la <b>clorofilla</b>, che assorbe soprattutto luce rossa e blu e riflette la verde (per questo le foglie sono verdi). Il processo è diviso in due fasi:</p>
<p><b>1. Fase luminosa</b> (nelle membrane dei <b>tilacoidi</b>, impilati nei grana). La luce eccita la clorofilla nei fotosistemi (II e I); l'energia serve a <b>scindere l'acqua</b> (fotolisi: 2 H₂O → O₂ + 4 H⁺ + 4 e⁻), e l'<b>ossigeno</b> è un sottoprodotto che si libera nell'atmosfera. Gli elettroni percorrono una catena di trasporto, analoga a quella mitocondriale, e creano un gradiente di H⁺ usato dall'ATP sintasi per produrre <b>ATP</b>; alla fine gli elettroni riducono NADP⁺ a <b>NADPH</b>.</p>
<p><b>2. Fase oscura o ciclo di Calvin-Benson</b> (nello <b>stroma</b>, il liquido del cloroplasto). Non dipende direttamente dalla luce ma utilizza ATP e NADPH prodotti nella fase luminosa. L'enzima <b>RuBisCO</b>, probabilmente la proteina più abbondante sulla Terra, fissa la CO₂ sul ribulosio bisfosfato (5 C); dopo una serie di tappe si ottiene gliceraldeide-3-fosfato (G3P), da cui la pianta costruisce glucosio, amido e cellulosa. Per sintetizzare una molecola di glucosio servono 6 CO₂, 18 ATP e 12 NADPH.</p>
<p><b>Confronto.</b> Respirazione: nei mitocondri, ossida il glucosio, consuma O₂ e produce CO₂ e ATP (catabolica, esoergonica). Fotosintesi: nei cloroplasti, riduce la CO₂, consuma H₂O e produce O₂ e glucosio (anabolica, endoergonica). I prodotti dell'una sono i reagenti dell'altra: insieme chiudono il <b>ciclo del carbonio</b> e dell'ossigeno nella biosfera. Anche le piante respirano (di notte e sempre) ma di giorno la fotosintesi prevale.</p>
<p><b>Le piante C₄ e CAM</b> (mais, canna da zucchero, cactus) hanno adattamenti per ridurre le perdite d'acqua e sprecare meno energia in climi caldi.</p>`
    },
    {
      type: "widget",
      title: "Dove avviene cosa?",
      widget: "match",
      options: {
        pairs: [
          ["Glicolisi", "Citoplasma"],
          ["Ciclo di Krebs", "Matrice mitocondriale"],
          ["Catena respiratoria", "Membrana mitocondriale interna"],
          ["Fase luminosa", "Tilacoidi"],
          ["Ciclo di Calvin", "Stroma del cloroplasto"],
          ["Fermentazione alcolica", "Lieviti (citoplasma)"]
        ]
      },
      caption: "Ricordare il luogo aiuta a ricordare la reazione: ogni processo ha il suo compartimento."
    },
    {
      type: "example",
      title: "Perché dopo uno scatto ti vengono i crampi e il fiatone?",
      html: `<p>Durante uno sprint i muscoli consumano ATP più in fretta di quanto il sangue riesca a portare ossigeno. Le fibre ricorrono in parte alla <b>fermentazione lattica</b>: producono ATP rapidamente (2 per glucosio) ma accumulano lattato e ioni H⁺, e il pH locale cala. Dopo lo sforzo respiri forte per un po': è il cosiddetto \"debito di ossigeno\" (consumo di ossigeno post-esercizio) con cui ripristini le riserve di ATP e della creatina fosfato, e il fegato trasforma il lattato in glucosio. In una corsa lunga e lenta invece prevale la respirazione aerobica, che rende molto di più (30-32 ATP) e può usare anche gli acidi grassi come combustibile.</p>`
    },
    {
      type: "example",
      title: "Il pane, lo yogurt e il vino: il metabolismo in cucina",
      html: `<p>Il <b>pane</b> lievita perché i lieviti fermentano gli zuccheri dell'impasto producendo CO₂ (bolle) ed etanolo (che evapora nel forno). Lo <b>yogurt</b> nasce dai batteri lattici (<i>Lactobacillus</i>, <i>Streptococcus thermophilus</i>) che fermentano il lattosio del latte in acido lattico: il pH cala, le proteine del latte coagulano e il latte diventa acido e denso. Il <b>vino</b> si forma dalla fermentazione alcolica degli zuccheri dell'uva. Lasciato aperto, può proseguire con <i>Acetobacter</i> che ossida l'etanolo ad acido acetico: aceto. Tutta la gastronomia è biochimica applicata.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: respirazione e fotosintesi",
      questions: [
        { type: "mc", q: "Dove avviene la maggior parte della produzione di ATP nella respirazione cellulare?", options: ["Nella membrana mitocondriale interna", "Nel citoplasma", "Nel nucleo", "Nel ribosoma"], answer: 0, explain: "La catena di trasporto degli elettroni e l'ATP sintasi si trovano nelle creste mitocondriali." },
        { type: "num", q: "Quanti ATP netti produce la sola glicolisi per ogni molecola di glucosio?", answer: 2, tol: 0, explain: "Se ne spendono 2 e se ne formano 4: bilancio netto 2 ATP (più 2 NADH)." },
        { type: "tf", q: "L'ossigeno rilasciato nella fotosintesi proviene dalla scissione dell'acqua.", answer: true, explain: "Nella fotolisi dell'acqua si libera O₂; il carbonio della CO₂ finisce nel glucosio." },
        { type: "mc", q: "Qual è l'accettore finale degli elettroni nella catena respiratoria aerobica?", options: ["L'ossigeno, che diventa acqua", "Il glucosio", "Il NAD⁺", "L'anidride carbonica"], answer: 0, explain: "L'O₂ si riduce a H₂O: senza ossigeno la catena si blocca." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il metabolismo",
      intro: "Il metabolismo è un groviglio di reazioni: prova a guardarlo da un'altra parte.",
      tabs: [
        { label: "🏭 La città e la sua economia", html: "<p>La cellula è una città. Il <b>glucosio</b> è il carburante in arrivo, il <b>mitocondrio</b> è la centrale elettrica, l'<b>ATP</b> è la moneta con cui si paga ogni servizio, i <b>coenzimi</b> sono i furgoni che trasportano elettroni, gli <b>enzimi</b> sono gli operai specializzati (ognuno fa un lavoro solo). La <b>fotosintesi</b> è la fabbrica che produce il cibo usando energia solare; la <b>respirazione</b> è il modo di \"incassare\" quel cibo in ATP. Quando la città non ha ossigeno, passa al \"piano B\" (fermentazione) che rende poco.</p>" },
        { label: "💧 La diga e la turbina", html: "<p>Nei mitocondri gli elettroni, passando di complesso in complesso, <b>pompano protoni</b> da una parte all'altra della membrana, come una pompa che riempie un bacino d'acqua dietro a una diga. I protoni accumulati vogliono tornare indietro e possono farlo solo attraverso l'<b>ATP sintasi</b>: la loro corrente fa girare questa microscopica turbina, che a ogni giro fabbrica ATP. Lo stesso schema, quasi identico, si ritrova nei cloroplasti e nei batteri.</p>" },
        { label: "🔄 Un grande riciclo", html: "<p>Gli atomi di carbonio di un panino sono stati CO₂ nell'aria, poi sono entrati nel grano grazie alla fotosintesi (con l'acqua e la luce), poi si sono trasformati in amido e infine, nel tuo corpo, tornano CO₂ che espiri. Il <b>ciclo del carbonio</b> è un riciclo continuo: la fotosintesi e la respirazione sono i due lati di uno stesso circuito, alimentato dalla luce del Sole.</p>" }
      ]
    },
    {
      type: "curiosity",
      title: "Il cianuro, il lievito e la vita senza ossigeno",
      html: `<p>Il <b>cianuro</b> è un veleno fulmineo perché si lega alla citocromo c ossidasi, l'ultimo complesso della catena respiratoria: gli elettroni non possono più arrivare all'ossigeno e le cellule restano senza ATP, anche se il sangue è ricco di O₂. Al contrario, molti organismi vivono bene <b>senza ossigeno</b>: i batteri anaerobi del terreno, o i lieviti, che in assenza di ossigeno fermentano e crescono. Si pensa che le prime forme di vita fossero anaerobiche e che l'ossigeno atmosferico sia stato prodotto dai cianobatteri fotosintetici circa 2,4 miliardi di anni fa (la \"Grande Ossidazione\"), che per molte forme di vita fu una catastrofe, e per altre l'opportunità di sfruttare la respirazione aerobica.</p>`
    },
    {
      type: "curiosity",
      title: "Quanta energia consuma il cervello?",
      html: `<p>Il cervello pesa circa il 2% del corpo ma consuma circa il <b>20% dell'energia</b> a riposo, quasi tutta sotto forma di glucosio ossidato. Un neurone non ha riserve: serve un apporto continuo di glucosio e ossigeno. Ecco perché alcuni minuti senza ossigeno al cervello danneggiano i tessuti e un abbassamento improvviso della glicemia può far svenire. Lo zucchero non \"dà energia\" per magia: è il combustibile che mitocondri e catena respiratoria trasformano in ATP.</p>`
    },
    {
      type: "remember",
      title: "Le idee da portare via",
      html: `<ul>
<li>Quattro famiglie di biomolecole: carboidrati, lipidi, proteine, acidi nucleici. La <b>forma</b> della proteina decide la sua funzione.</li>
<li>Gli <b>enzimi</b> abbassano l'energia di attivazione; sono specifici e sensibili a T e pH.</li>
<li>ATP = moneta energetica. Glicolisi (citoplasma, +2 ATP) → Krebs (matrice) → catena respiratoria (creste, ~26-28 ATP, O₂ → H₂O). Totale circa 30-32 ATP.</li>
<li>Senza O₂: fermentazione (lattica, alcolica), solo 2 ATP.</li>
<li>Fotosintesi: fase luminosa (tilacoidi: ATP, NADPH, O₂ dall'acqua) + ciclo di Calvin (stroma: CO₂ → zuccheri).</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa del metabolismo",
      nodes: [
        { id: "bio", label: "Biomolecole", x: 15, y: 15, color: "#7c3aed", html: "Carboidrati, lipidi, proteine, acidi nucleici.", why: "Sono costruite dalle stesse reazioni di condensazione e dagli stessi gruppi funzionali della chimica organica: nel 1828 Wöhler fece cadere la barriera tra chimica organica e della vita, e la biochimica nacque come disciplina nel primo Novecento." },
        { id: "enz", label: "Enzimi", x: 50, y: 10, color: "#ef4444", html: "Catalizzatori proteici specifici.", why: "Senza enzimi le reazioni sarebbero troppo lente a 37 °C. Sumner nel 1926 cristallizzò un enzima (l'ureasi) dimostrando che sono proteine." },
        { id: "atp", label: "ATP", x: 85, y: 20, color: "#f59e0b", html: "Moneta energetica universale.", why: "Fritz Lipmann (1941) capì che l'ATP è l'anello tra reazioni che liberano energia e reazioni che ne consumano: tutte le forme di vita lo usano, segno di un'origine comune." },
        { id: "resp", label: "Respirazione cellulare", x: 25, y: 55, color: "#0ea5e9", html: "Glicolisi, Krebs, catena respiratoria.", why: "Il glucosio è un composto ridotto con molta energia chimica; ossidandolo gradualmente con O₂ la cellula ne cattura circa un terzo nell'ATP. Mitchell (1961) spiegò con la chemiosmosi come il gradiente di protoni la produce." },
        { id: "ferm", label: "Fermentazione", x: 10, y: 85, color: "#16a34a", html: "Piano B senza ossigeno.", why: "È la via più antica, quando l'atmosfera non aveva ossigeno. Pasteur (1860) la collegò ai microbi: la vita 'senza aria'." },
        { id: "foto", label: "Fotosintesi", x: 75, y: 60, color: "#22c55e", html: "Luce + CO₂ + H₂O → glucosio + O₂.", why: "Cattura l'energia del Sole in legami chimici. Calvin e Benson (anni Cinquanta) tracciarono il percorso del carbonio con il ¹⁴C; Calvin ebbe il Nobel nel 1961." },
        { id: "eco", label: "Ciclo del carbonio", x: 55, y: 90, color: "#0f766e", html: "Fotosintesi e respirazione si compensano.", why: "I prodotti di un processo sono i reagenti dell'altro: è una delle ragioni per cui l'uso massiccio di combustibili fossili (carbonio sottratto da milioni di anni al ciclo) altera l'atmosfera." }
      ],
      edges: [["bio", "enz", "sono prodotte e trasformate da"], ["enz", "atp", "usano e producono"], ["resp", "atp", "dà"], ["foto", "atp", "usa"], ["resp", "ferm", "senza O₂ diventa"], ["foto", "resp", "fornisce il glucosio a"], ["resp", "eco", "restituisce CO₂ a"], ["foto", "eco", "prende CO₂ dal"]]
    }
  ],
  glossary: [
    { t: "Enzima", d: "Proteina (o RNA) che catalizza una reazione biologica abbassandone l'energia di attivazione." },
    { t: "Sito attivo", d: "Tasca dell'enzima dove si lega il substrato e avviene la reazione." },
    { t: "Denaturazione", d: "Perdita della struttura tridimensionale di una proteina (per calore, pH...), con perdita di funzione." },
    { t: "Catabolismo / Anabolismo", d: "Demolizione di molecole con rilascio di energia / costruzione di molecole con consumo di energia." },
    { t: "ATP", d: "Adenosina trifosfato, la molecola che trasferisce energia chimica nelle cellule." },
    { t: "NAD⁺ / NADH", d: "Coenzima che trasporta elettroni (forma ossidata e ridotta) nel catabolismo." },
    { t: "Glicolisi", d: "Scissione del glucosio in due piruvati nel citoplasma, con guadagno netto di 2 ATP." },
    { t: "Ciclo di Krebs", d: "Serie di reazioni nella matrice mitocondriale che ossidano l'acetil-CoA a CO₂ producendo NADH, FADH₂ e ATP." },
    { t: "Chemiosmosi", d: "Produzione di ATP sfruttando il gradiente di protoni attraverso l'ATP sintasi." },
    { t: "Fermentazione", d: "Via anaerobica che rigenera il NAD⁺ riducendo il piruvato (lattato o etanolo)." },
    { t: "Clorofilla", d: "Pigmento verde che assorbe la luce nella fotosintesi." },
    { t: "Ciclo di Calvin", d: "Fase della fotosintesi nello stroma in cui la CO₂ viene fissata e trasformata in zuccheri." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale affermazione sugli enzimi è corretta?", options: ["Abbassano l'energia di attivazione e non si consumano", "Si consumano nella reazione", "Modificano l'equilibrio della reazione", "Sono sempre lipidi"], answer: 0, explain: "Sono catalizzatori: accelerano la reazione senza consumarsi e senza cambiare l'equilibrio." },
      { type: "tf", q: "La pepsina funziona meglio a pH acido rispetto alla tripsina.", answer: true, explain: "La pepsina agisce nello stomaco (pH circa 2), la tripsina nell'intestino (pH circa 8): ogni enzima ha il suo pH ottimale." },
      { type: "mc", q: "In quale organello avviene il ciclo di Krebs?", options: ["Mitocondrio (matrice)", "Cloroplasto", "Nucleo", "Reticolo endoplasmatico"], answer: 0, explain: "Il ciclo di Krebs si svolge nella matrice mitocondriale." },
      { type: "num", q: "Quanti ATP netti si ottengono dalla glicolisi di una molecola di glucosio?", answer: 2, tol: 0, explain: "4 prodotti meno 2 spesi nella fase di investimento: 2 ATP netti." },
      { type: "mc", q: "Qual è il prodotto della fermentazione alcolica oltre all'etanolo?", options: ["CO₂", "O₂", "Acido lattico", "Glucosio"], answer: 0, explain: "Il piruvato perde CO₂ (diventa acetaldeide) e poi viene ridotto a etanolo." },
      { type: "mc", q: "Da dove proviene l'ossigeno prodotto dalla fotosintesi?", options: ["Dall'acqua", "Dalla CO₂", "Dal glucosio", "Dall'ATP"], answer: 0, explain: "L'ossigeno deriva dalla fotolisi dell'acqua nella fase luminosa." },
      { type: "mc", q: "Dove avviene il ciclo di Calvin?", options: ["Nello stroma del cloroplasto", "Nei tilacoidi", "Nel citoplasma", "Nella matrice mitocondriale"], answer: 0, explain: "Nello stroma, dove l'enzima RuBisCO fissa la CO₂ usando ATP e NADPH della fase luminosa." },
      { type: "tf", q: "La fermentazione produce molto più ATP della respirazione aerobica.", answer: false, explain: "Produce solo i 2 ATP della glicolisi, contro circa 30-32 della respirazione." },
      { type: "text", q: "Come si chiama l'enzima che sfrutta il flusso di protoni per sintetizzare ATP?", answer: ["atp sintasi", "l'atp sintasi", "atp-sintasi", "sintasi"], explain: "L'ATP sintasi è una turbina molecolare mossa dal ritorno dei protoni attraverso la membrana." },
      { type: "order", q: "Metti in ordine le tappe della respirazione cellulare aerobica.", items: ["Glicolisi", "Formazione di acetil-CoA", "Ciclo di Krebs", "Catena respiratoria e ATP sintasi"], explain: "Glucosio → piruvato (citoplasma) → acetil-CoA → Krebs (matrice) → catena respiratoria (creste)." }
    ]
  }
});
