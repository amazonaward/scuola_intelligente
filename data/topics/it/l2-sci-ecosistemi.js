TOPIC('it', {
  id: "l2-sci-ecosistemi",
  title: "Gli ecosistemi",
  intro: "Un lupo, un bosco, un lago, una scogliera di corallo: nessun essere vivente vive da solo. Ogni organismo dipende da altri organismi e dall'ambiente che lo circonda: luce, acqua, suolo, temperatura. Lo studio di queste relazioni si chiama <b>ecologia</b>. In questa lezione scopriamo come è organizzato un <b>ecosistema</b>, chi mangia chi, come circolano l'<b>energia</b> e la <b>materia</b> (i <b>cicli biogeochimici</b>) e perché la <b>biodiversità</b> è così importante, e così minacciata.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Che cos'è l'ecologia: i livelli di organizzazione",
      html: `<p>Il termine <b>ecologia</b> (dal greco <i>oikos</i>, casa, e <i>logos</i>, discorso) fu coniato nel <b>1866</b> dal biologo tedesco <b>Ernst Haeckel</b>. L'ecologia studia le relazioni tra gli organismi e il loro ambiente, a livelli di complessità crescente:</p>
<ul>
<li><b>Individuo</b>: un singolo organismo;</li>
<li><b>Popolazione</b>: individui della stessa specie che vivono nella stessa area (i cervi di un bosco);</li>
<li><b>Comunità</b> (o biocenosi): tutte le popolazioni di specie diverse che vivono in una stessa area;</li>
<li><b>Ecosistema</b>: la comunità più l'ambiente fisico (non vivente) con cui interagisce, in un sistema che scambia energia e materia (termine di Arthur Tansley, 1935);</li>
<li><b>Bioma</b>: grande insieme di ecosistemi con clima e vegetazione simili (tundra, taiga, foresta pluviale, savana, deserto);</li>
<li><b>Biosfera</b>: l'insieme di tutti gli ecosistemi della Terra, cioè la parte del pianeta in cui c'è vita (dai fondali oceanici a circa 10 km di profondità fino ad alcuni km nell'atmosfera).</li>
</ul>
<p>Un ecosistema ha due componenti:</p>
<ul>
<li>fattori <b>abiotici</b> (non viventi): luce, temperatura, acqua, pH, salinità, composizione del suolo, vento;</li>
<li>fattori <b>biotici</b> (viventi): gli organismi e le loro interazioni (predazione, competizione ecc.).</li>
</ul>
<p>Ogni specie vive in un <b>habitat</b> (il luogo con le sue condizioni, "l'indirizzo") e ha una <b>nicchia ecologica</b> ("la professione"): l'insieme di tutte le risorse che usa e del modo in cui vive (che cosa mangia, quando è attiva, dove si ripara). Secondo il <b>principio di esclusione competitiva</b> di <b>Gause</b> (1934, con esperimenti su due specie di <i>Paramecium</i>), due specie con la stessa nicchia non possono coesistere a lungo nello stesso luogo: o una prevale, o si differenziano (come i fringuelli con becchi diversi).</p>`
    },
    {
      type: "3d",
      title: "La biosfera a strati (schema)",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#60a5fa", label: "Atmosfera (vita nei primi km)" },
        { r: 0.92, color: "#22c55e", label: "Biosfera (suolo, acque, organismi)" },
        { r: 0.85, color: "#a16207", label: "Crosta terrestre" },
        { r: 0.55, color: "#f97316", label: "Mantello" },
        { r: 0.25, color: "#ef4444", label: "Nucleo" }
      ] },
      caption: "La biosfera è uno strato sottilissimo, spesso poche decine di km rispetto ai circa 6370 km del raggio terrestre."
    },
    {
      type: "text",
      title: "Chi fa che cosa: i ruoli nell'ecosistema",
      html: `<p>Ogni organismo ha un ruolo nel flusso di energia:</p>
<ul>
<li><b>Produttori</b> (autotrofi): ricavano materia organica da sostanze inorganiche. Le piante, le alghe e i cianobatteri usano la <b>fotosintesi</b> (energia della luce); nei camini idrotermali del fondo oceanico alcuni batteri sfruttano energia chimica (<b>chemiosintesi</b>), senza luce.</li>
<li><b>Consumatori</b> (eterotrofi): si nutrono di altri organismi. <b>Primari</b> (erbivori), <b>secondari</b> (carnivori che mangiano erbivori), <b>terziari</b> (predatori all'apice). Gli <b>onnivori</b> occupano più livelli.</li>
<li><b>Decompositori</b> (funghi e batteri): demoliscono i resti e le escrezioni, restituendo sali minerali al suolo. I <b>detritivori</b> (lombrichi, millepiedi) spezzettano la materia morta, facilitandone la decomposizione.</li>
</ul>
<p>Le relazioni di nutrimento formano <b>catene alimentari</b>: erba → cavalletta → rana → serpente → aquila. In natura però ogni specie ha più prede e più predatori, quindi le catene si intrecciano in <b>reti alimentari</b>. Il <b>livello trofico</b> è la posizione che un organismo occupa nella catena (produttore = livello 1, erbivoro = livello 2 ecc.).</p>
<p>Altri tipi di relazioni tra specie:</p>
<table>
<tr><th>Relazione</th><th>Effetto sulle due specie</th><th>Esempio</th></tr>
<tr><td>Predazione</td><td>+ / −</td><td>leone e zebra</td></tr>
<tr><td>Competizione</td><td>− / −</td><td>due specie di uccelli che si contendono gli stessi semi</td></tr>
<tr><td>Parassitismo</td><td>+ / − (il parassita vive a spese dell'ospite)</td><td>zecca e cane, tenia e uomo</td></tr>
<tr><td>Mutualismo</td><td>+ / +</td><td>api e fiori; licheni (alga o cianobatterio + fungo); batteri <i>Rhizobium</i> nelle radici delle leguminose</td></tr>
<tr><td>Commensalismo</td><td>+ / 0</td><td>remore che si attaccano agli squali per spostarsi e mangiarne gli avanzi</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Chi è produttore, consumatore o decompositore?",
      widget: "classify",
      options: { groups: ["Produttore", "Consumatore", "Decompositore"], items: [
        ["Quercia", 0],
        ["Cervo", 1],
        ["Lupo", 1],
        ["Fungo del sottobosco", 2],
        ["Alga marina", 0],
        ["Lombrico", 2],
        ["Cianobatterio", 0],
        ["Zooplancton", 1],
        ["Batteri del suolo", 2]
      ] },
      caption: "Il lombrico è un detritivore: nello schema semplice lo mettiamo con i decompositori. Chi non fa fotosintesi né chemiosintesi non è mai un produttore."
    },
    {
      type: "svg",
      title: "Una rete alimentare di prateria",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<defs><marker id="ar" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker></defs>
<g font-size="15" font-weight="bold" text-anchor="middle">
<rect x="20" y="230" width="120" height="44" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="80" y="258" fill="#14532d">Erba</text>
<rect x="190" y="230" width="120" height="44" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="250" y="258" fill="#14532d">Semi</text>
<rect x="20" y="140" width="120" height="44" rx="10" fill="#fde68a" stroke="#b45309" stroke-width="2"/><text x="80" y="168" fill="#78350f">Cavalletta</text>
<rect x="190" y="140" width="120" height="44" rx="10" fill="#fde68a" stroke="#b45309" stroke-width="2"/><text x="250" y="168" fill="#78350f">Topo</text>
<rect x="100" y="55" width="120" height="44" rx="10" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/><text x="160" y="83" fill="#7f1d1d">Rana</text>
<rect x="360" y="140" width="120" height="44" rx="10" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/><text x="420" y="168" fill="#7f1d1d">Serpente</text>
<rect x="400" y="30" width="120" height="44" rx="10" fill="#e9d5ff" stroke="#7e22ce" stroke-width="2"/><text x="460" y="58" fill="#581c87">Aquila</text>
<rect x="400" y="235" width="170" height="44" rx="10" fill="#e7e5e4" stroke="#57534e" stroke-width="2"/><text x="485" y="263" fill="#292524">Decompositori</text>
</g>
<g stroke="#334155" stroke-width="3" fill="none" marker-end="url(#ar)">
<line x1="80" y1="230" x2="80" y2="188"/><line x1="250" y1="230" x2="250" y2="188"/><line x1="100" y1="230" x2="230" y2="188"/>
<line x1="80" y1="140" x2="140" y2="103"/><line x1="250" y1="140" x2="190" y2="103"/>
<line x1="210" y1="75" x2="395" y2="55"/><line x1="320" y1="150" x2="365" y2="155"/><line x1="440" y1="140" x2="455" y2="78"/><line x1="220" y1="85" x2="370" y2="143"/>
</g>
<g stroke="#a8a29e" stroke-width="2" stroke-dasharray="5 5" fill="none"><path d="M460 30 C560 60 560 200 520 232"/></g>
<text x="300" y="20" font-size="14" fill="#475569" text-anchor="middle">Le frecce vanno da chi viene mangiato a chi mangia (energia)</text>
</svg>`,
      caption: "Nella rete, l'aquila mangia sia serpenti sia rane; i decompositori ricevono i resti da tutti i livelli (linea tratteggiata)."
    },
    {
      type: "text",
      title: "Il flusso dell'energia e le piramidi ecologiche",
      html: `<p>Il Sole è la fonte di quasi tutta l'energia della biosfera. Le piante ne fissano meno dell'1% di quella che arriva sulle foglie (parte viene riflessa, parte serve a evaporare l'acqua). Questa energia passa lungo la catena, ma <b>a ogni passaggio la maggior parte si perde</b>: viene usata dall'organismo per vivere (respirazione cellulare, movimento, mantenimento della temperatura) e dissipata come <b>calore</b>, in parte resta in parti non mangiate (ossa, peli, radici). In media solo il <b>10% circa</b> dell'energia di un livello trofico passa al successivo (<b>regola del 10%</b>, formulata da Raymond Lindeman nel 1942; il valore reale varia dal 5% al 20%).</p>
<p>Conseguenze:</p>
<ul>
<li>le catene alimentari hanno <b>pochi anelli</b> (di solito 3-5): non c'è abbastanza energia per sostenere più livelli;</li>
<li>i predatori all'apice sono <b>pochi e rari</b>;</li>
<li>l'energia <b>scorre a senso unico</b> (dal Sole, ai viventi, al calore), mentre la <b>materia si ricicla</b>.</li>
</ul>
<p>Le <b>piramidi ecologiche</b> rappresentano visivamente i livelli trofici: piramidi di <b>energia</b> (sempre a forma di piramide), di <b>biomassa</b> (massa totale degli organismi) e di <b>numeri</b> (può essere rovesciata: un albero ospita migliaia di insetti).</p>`
    },
    {
      type: "example",
      title: "Calcolo: quanta energia arriva al leone?",
      html: `<p>In una savana supponiamo, per semplicità, che i produttori (erba) fissino <b>20 000 kcal</b> in un anno su una data superficie. Applichiamo la regola del 10%:</p>
<table>
<tr><th>Livello</th><th>Organismi</th><th>Energia disponibile</th></tr>
<tr><td>1 - Produttori</td><td>erba</td><td>20 000 kcal</td></tr>
<tr><td>2 - Consumatori primari</td><td>zebre, gazzelle</td><td>2000 kcal</td></tr>
<tr><td>3 - Consumatori secondari</td><td>leoni</td><td>200 kcal</td></tr>
<tr><td>4 - Consumatori terziari</td><td>(se esistesse un predatore dei leoni)</td><td>20 kcal</td></tr>
</table>
<p>Ogni livello ha il 10% del precedente: bastano 4 passaggi per ridurre l'energia a un millesimo. Ecco perché in un campo di grano si possono nutrire più persone che con la carne ricavata dalla stessa superficie coltivata a mangime: mangiare i produttori (livello 1) è energeticamente più efficiente che passare per un erbivoro (livello 2). Per ottenere 1 kg di carne bovina servono in media diversi kg di mangime (6-10 kg o più, a seconda dei metodi di calcolo).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: reti alimentari ed energia",
      questions: [
        { type: "mc", q: "Quale quota di energia passa in media da un livello trofico al successivo?", options: ["Circa il 90%", "Circa il 10%", "Circa l'1%"], answer: 1, explain: "È la regola del 10%: il resto è dissipato come calore o non utilizzato." },
        { type: "mc", q: "Il mutualismo è una relazione in cui...", options: ["entrambe le specie traggono vantaggio", "una specie danneggia l'altra", "una specie vive a spese dell'altra senza danni"], answer: 0, explain: "È una relazione +/+: per esempio api e fiori." },
        { type: "tf", q: "L'energia circola nell'ecosistema in modo ciclico, come la materia.", answer: false, explain: "L'energia ha un flusso unidirezionale (Sole → organismi → calore); la materia, invece, si ricicla." }
      ]
    },
    {
      type: "text",
      title: "I cicli biogeochimici: la materia si ricicla",
      html: `<p>Gli elementi chimici di cui siamo fatti (carbonio, azoto, fosforo, idrogeno, ossigeno, zolfo...) sono in quantità limitata: non arrivano da fuori, quindi devono essere <b>riciclati</b>. I <b>cicli biogeochimici</b> descrivono il loro percorso tra gli organismi (parte "bio"), l'atmosfera, le acque e le rocce (parte "geo"). L'acqua ha già il suo ciclo (lezione sull'idrosfera). Vediamo gli altri.</p>
<p><b>Ciclo del carbonio.</b> Il carbonio è l'elemento-base di tutte le molecole organiche.</p>
<ul>
<li>I produttori assorbono <b>CO₂</b> dall'atmosfera con la <b>fotosintesi</b> (6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂) e lo incorporano nella materia organica;</li>
<li>i consumatori lo ricevono con il cibo; tutti gli organismi lo restituiscono come CO₂ con la <b>respirazione cellulare</b>; i decompositori lo liberano dai resti;</li>
<li>una parte è sottratta al ciclo per tempi lunghissimi: sotto forma di <b>combustibili fossili</b> (carbone, petrolio, gas, formati da resti organici sepolti per milioni di anni) e di rocce calcaree (CaCO₃ dai gusci marini);</li>
<li>gli oceani assorbono CO₂ dall'atmosfera (circa un quarto di quella emessa dall'uomo), e ciò causa l'acidificazione dell'acqua.</li>
</ul>
<p>Bruciando i combustibili fossili, l'uomo rimette in circolo in pochi decenni carbonio accumulato in milioni di anni: la CO₂ atmosferica è salita da circa <b>280 ppm</b> (parti per milione) prima della rivoluzione industriale a oltre <b>420 ppm</b> oggi, intensificando l'effetto serra.</p>
<p><b>Ciclo dell'azoto.</b> L'azoto è presente nelle proteine e negli acidi nucleici. L'atmosfera è fatta per il <b>78%</b> di azoto (N₂), ma la maggior parte degli organismi non può usarlo in questa forma, perché il triplo legame N≡N è fortissimo.</p>
<ol>
<li><b>Fissazione</b>: alcuni batteri (<i>Rhizobium</i> nei noduli delle radici di fagioli, piselli, trifoglio; cianobatteri) trasformano N₂ in ammoniaca (NH₃/NH₄⁺); anche i fulmini e l'industria (processo <b>Haber-Bosch</b>, sviluppato tra il 1909 e il 1913, che produce i fertilizzanti) ne fissano;</li>
<li><b>Nitrificazione</b>: batteri del suolo ossidano l'ammonio a nitriti (NO₂⁻) e poi nitrati (NO₃⁻);</li>
<li><b>Assimilazione</b>: le piante assorbono nitrati e ammonio e producono proteine; gli animali le ottengono mangiandole;</li>
<li><b>Ammonificazione</b>: i decompositori trasformano l'azoto organico in ammonio;</li>
<li><b>Denitrificazione</b>: altri batteri riducono i nitrati a N₂, che torna all'atmosfera.</li>
</ol>
<p><b>Ciclo del fosforo.</b> Serve per DNA, ATP, membrane, ossa. A differenza degli altri non ha una fase gassosa importante: dalle rocce (fosfati) viene liberato lentamente dall'erosione, passa nel suolo e nelle acque, entra nelle piante e poi negli animali, e infine ritorna ai sedimenti (processo lentissimo, milioni di anni). Per questo è spesso un <b>fattore limitante</b> e viene aggiunto ai terreni con i fertilizzanti.</p>
<p>Fertilizzanti e detersivi ricchi di fosfati e nitrati, che arrivano nei laghi e nei mari, causano l'<b>eutrofizzazione</b>: le alghe crescono in modo eccessivo ("fioriture"), alla loro morte i batteri decompositori consumano l'ossigeno disciolto e i pesci muoiono per mancanza di ossigeno. Un caso noto è il mare Adriatico, negli anni Ottanta.</p>`
    },
    {
      type: "svg",
      title: "Il ciclo del carbonio",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<defs><marker id="ac" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1e293b"/></marker></defs>
<rect x="190" y="20" width="220" height="56" rx="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="300" y="55" font-size="17" font-weight="bold" fill="#1e3a8a" text-anchor="middle">CO₂ nell'atmosfera</text>
<rect x="30" y="140" width="150" height="56" rx="14" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="105" y="174" font-size="17" font-weight="bold" fill="#14532d" text-anchor="middle">Piante</text>
<rect x="420" y="140" width="150" height="56" rx="14" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="495" y="174" font-size="17" font-weight="bold" fill="#78350f" text-anchor="middle">Animali</text>
<rect x="200" y="235" width="200" height="50" rx="14" fill="#e7e5e4" stroke="#57534e" stroke-width="3"/>
<text x="300" y="266" font-size="16" font-weight="bold" fill="#292524" text-anchor="middle">Suolo e fossili</text>
<g stroke="#1e293b" stroke-width="3" fill="none" marker-end="url(#ac)">
<path d="M230 78 C180 100 140 120 120 138"/>
<path d="M170 140 C190 110 230 90 250 80"/>
<path d="M170 180 C300 150 330 150 418 170"/>
<path d="M440 138 C420 100 380 90 360 80"/>
<path d="M120 198 C130 220 160 240 198 255"/>
<path d="M480 198 C470 230 430 250 402 262"/>
<path d="M300 233 C300 180 300 130 300 80" stroke-dasharray="6 5"/>
</g>
<text x="95" y="105" font-size="14" font-weight="bold" fill="#166534">fotosintesi</text>
<text x="200" y="130" font-size="14" fill="#1e293b">respirazione</text>
<text x="270" y="150" font-size="14" fill="#1e293b">cibo</text>
<text x="455" y="105" font-size="14" fill="#1e293b">respirazione</text>
<text x="312" y="200" font-size="14" fill="#7c2d12">combustione e decomposizione</text>
</svg>`,
      caption: "Il carbonio passa dall'atmosfera ai produttori con la fotosintesi e torna in atmosfera con respirazione, decomposizione e combustione."
    },
    {
      type: "widget",
      title: "Quale processo? Il ciclo dell'azoto",
      widget: "match",
      options: { pairs: [
        ["Fissazione", "N₂ → ammoniaca, ad opera di batteri come Rhizobium"],
        ["Nitrificazione", "Ammonio → nitriti → nitrati"],
        ["Assimilazione", "Le piante assorbono nitrati per costruire proteine"],
        ["Ammonificazione", "I decompositori restituiscono ammonio dai resti organici"],
        ["Denitrificazione", "I nitrati tornano ad azoto gassoso N₂"]
      ] },
      caption: "Abbina ogni tappa al suo significato."
    },
    {
      type: "text",
      title: "Dinamica delle popolazioni e successione ecologica",
      html: `<p>Il numero di individui di una popolazione dipende da nascite, morti, immigrazione ed emigrazione. In condizioni ideali la crescita è <b>esponenziale</b> (curva a J: la popolazione si raddoppia a intervalli regolari). Ma le risorse sono limitate, quindi la crescita rallenta e si ferma alla <b>capacità portante</b> (K) dell'ambiente: la crescita diventa <b>logistica</b> (curva a S). I <b>fattori limitanti</b> sono <b>dipendenti dalla densità</b> (competizione, predatori, malattie, che pesano di più quando la popolazione è numerosa) o <b>indipendenti</b> (siccità, incendi, gelate).</p>
<p>Le comunità cambiano nel tempo secondo la <b>successione ecologica</b>. Nella <b>successione primaria</b> si parte da un ambiente senza suolo (lava solidificata, roccia lasciata da un ghiacciaio): arrivano per primi i <b>pionieri</b> (licheni, muschi) che producono suolo; poi erbe, arbusti, alberi, fino alla <b>comunità climax</b>, relativamente stabile. Nella <b>successione secondaria</b> si riparte da un suolo già esistente dopo un disturbo (un incendio, un campo abbandonato), ed è più rapida. Un esempio di successione primaria si è osservato sull'isola vulcanica di <b>Surtsey</b> (Islanda), nata da un'eruzione sottomarina nel 1963: in pochi decenni è stata colonizzata da muschi, piante, insetti e uccelli marini.</p>`
    },
    {
      type: "text",
      title: "La biodiversità e la sua crisi",
      html: `<p>La <b>biodiversità</b> è la varietà della vita a tre livelli: <b>genetica</b> (diversità degli alleli all'interno di una specie), di <b>specie</b> (il numero di specie diverse) e di <b>ecosistemi</b>. Non è distribuita in modo uniforme: aumenta dai poli all'equatore, e le foreste pluviali tropicali, che coprono meno del 7% della superficie terrestre, ospitano oltre la metà delle specie conosciute. Esistono alcuni <b>hotspot di biodiversità</b>, come il bacino del Mediterraneo, con tante specie endemiche (che vivono solo lì).</p>
<p>Perché è importante? Fornisce <b>servizi ecosistemici</b>: impollinazione (circa tre quarti delle colture alimentari dipendono almeno in parte dagli impollinatori), depurazione dell'acqua, fertilità del suolo, regolazione del clima, materie prime, farmaci (l'aspirina deriva dalla corteccia del salice, la penicillina da una muffa); oltre a un valore estetico e culturale. Una comunità ricca è inoltre più <b>resiliente</b>: se una specie scompare, altre possono svolgere il suo ruolo.</p>
<p>Alcune specie hanno un ruolo sproporzionato rispetto alla loro abbondanza: le <b>specie chiave</b>. Il biologo <b>Robert Paine</b> nel 1966 tolse la stella marina <i>Pisaster</i> da tratti di costa rocciosa: i mitili, suoi alimenti, prevalsero e la varietà di specie si ridusse da 15 a circa 8. Un altro esempio è la reintroduzione dei <b>lupi</b> nel Parco di Yellowstone nel 1995: i cervi, controllati e più mobili, hanno smesso di brucare le rive, la vegetazione si è ripresa e con essa castori, uccelli e persino la forma dei fiumi (la "cascata trofica").</p>
<p>Le estinzioni sono un fatto naturale, ma il ritmo attuale è da <b>100 a 1000 volte</b> superiore a quello di fondo, secondo molte stime. Si parla di <b>sesta estinzione di massa</b>. Le cause principali:</p>
<ul>
<li><b>perdita e frammentazione degli habitat</b> (deforestazione, urbanizzazione, agricoltura intensiva);</li>
<li><b>specie invasive</b> introdotte dall'uomo (il gambero della Louisiana, lo scoiattolo grigio che sostituisce quello rosso in Italia e Gran Bretagna);</li>
<li><b>sovrasfruttamento</b> (pesca e caccia eccessive);</li>
<li><b>inquinamento</b> (pesticidi, plastica, eutrofizzazione);</li>
<li><b>cambiamenti climatici</b> (sbiancamento dei coralli, cambiamenti degli areali).</li>
</ul>
<p>L'organizzazione <b>IUCN</b> pubblica la <b>Lista Rossa</b> delle specie minacciate, con categorie dal "minor preoccupazione" a "in pericolo critico" fino a "estinta".</p>`
    },
    {
      type: "example",
      title: "Il DDT e la biomagnificazione",
      html: `<p>Alcune sostanze (DDT, PCB, mercurio) non si degradano e si accumulano nei tessuti grassi. Procedendo lungo la catena alimentare la loro concentrazione <b>aumenta</b> a ogni livello, perché ogni predatore mangia molti individui del livello precedente: è la <b>biomagnificazione</b>. Un esempio schematico (valori indicativi, in parti per milione):</p>
<table>
<tr><th>Livello</th><th>Concentrazione di DDT</th></tr>
<tr><td>Acqua</td><td>0,000003 ppm</td></tr>
<tr><td>Plancton</td><td>0,04 ppm</td></tr>
<tr><td>Pesci piccoli</td><td>0,5 ppm</td></tr>
<tr><td>Pesci predatori</td><td>2 ppm</td></tr>
<tr><td>Uccelli ittiofagi (aquila pescatrice)</td><td>25 ppm</td></tr>
</table>
<p>Tra l'acqua e gli uccelli il DDT si concentra di <b>milioni di volte</b>. Nei rapaci il DDT riduceva lo spessore del guscio delle uova, che si rompevano. Nel 1962 <b>Rachel Carson</b>, nel libro <i>Primavera silenziosa</i>, denunciò gli effetti dei pesticidi: il libro contribuì al divieto del DDT negli Stati Uniti nel 1972 e alla nascita dei movimenti ambientalisti. Le popolazioni di aquila di mare testabianca e di falco pellegrino si sono poi riprese.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire gli ecosistemi",
      intro: "Se i cicli e le reti ti sembrano schemi da memorizzare, prova queste immagini.",
      tabs: [
        {
          label: "🏪 L'ecosistema come economia",
          html: `<p>I produttori sono come le <b>fabbriche</b> che creano ricchezza (materia organica) da energia e materie prime. I consumatori sono i <b>clienti</b>. I decompositori sono i <b>riciclatori</b>: senza di loro la città sarebbe sepolta dai rifiuti e le materie prime finirebbero. L'energia solare è come l'elettricità, che arriva dall'esterno e non si ricicla; il carbonio e l'azoto sono come i metalli, che invece si riutilizzano all'infinito. Una crisi economica può essere devastante, così come la scomparsa di una specie chiave.</p>`
        },
        {
          label: "🍰 La torta dell'energia",
          html: `<p>Hai una torta da 100 fette (energia solare fissata). Le mangi tutte? No, te ne arrivano solo 10 (l'erbivoro), le altre 90 sono usate per vivere o bruciate per muoversi. Poi il carnivoro riceve 1 fetta sola, e un secondo carnivoro ne avrebbe appena 0,1. Dopo 4-5 passaggi la torta è finita: ecco perché una catena non può essere lunga. È anche il motivo per cui ogni tonno (all'apice) è molto più raro delle sardine.</p>`
        },
        {
          label: "🔄 Un diagramma del ciclo dell'azoto",
          html: `<p>Un modo semplice per ricordare il ciclo: <b>N₂ → NH₄⁺ → NO₂⁻ → NO₃⁻ → proteine → NH₄⁺ → N₂</b>. Le tre frecce centrali sono fatte da batteri diversi. Ogni anello è una "squadra" di microbi specializzata, e l'assenza di una di esse blocca il ciclo.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><defs><marker id="an" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1e293b"/></marker></defs><g font-size="16" font-weight="bold" text-anchor="middle"><rect x="20" y="40" width="110" height="50" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="75" y="72" fill="#1e3a8a">N₂ (aria)</text><rect x="170" y="40" width="110" height="50" rx="10" fill="#fde68a" stroke="#b45309" stroke-width="2"/><text x="225" y="72" fill="#78350f">NH₄⁺</text><rect x="320" y="40" width="110" height="50" rx="10" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/><text x="375" y="72" fill="#7c2d12">NO₂⁻</text><rect x="470" y="40" width="110" height="50" rx="10" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/><text x="525" y="72" fill="#7f1d1d">NO₃⁻</text><rect x="400" y="200" width="170" height="50" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="485" y="232" fill="#14532d">Proteine (piante)</text></g><g stroke="#1e293b" stroke-width="3" marker-end="url(#an)" fill="none"><line x1="132" y1="65" x2="168" y2="65"/><line x1="282" y1="65" x2="318" y2="65"/><line x1="432" y1="65" x2="468" y2="65"/><line x1="525" y1="92" x2="510" y2="198"/><path d="M400 225 C250 240 225 180 225 92"/><path d="M510 40 C510 10 75 10 75 38"/></g><g font-size="14" fill="#475569"><text x="150" y="110" text-anchor="middle">fissazione</text><text x="300" y="110" text-anchor="middle">nitrificazione</text><text x="450" y="110" text-anchor="middle">nitrificazione</text><text x="300" y="20" text-anchor="middle">denitrificazione</text><text x="350" y="260" text-anchor="middle">ammonificazione</text><text x="545" y="165" text-anchor="start">assimilazione</text></g></svg>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Le foreste che si parlano",
      html: `<p>Sotto il suolo di un bosco, le radici di molti alberi sono collegate da <b>reti di ife di funghi micorrizici</b>: una simbiosi mutualistica in cui il fungo ottiene zuccheri dall'albero, e aiuta le radici ad assorbire acqua e minerali (soprattutto fosforo e azoto). La ricercatrice Suzanne Simard negli anni Novanta mostrò che il carbonio può passare da un albero all'altro attraverso questa rete. La stampa le ha chiamate "wood wide web"; i meccanismi e l'importanza di questi scambi sono ancora oggetto di studio e discussione fra gli scienziati, ma la simbiosi micorrizica è ormai comprovata per oltre l'80% delle piante terrestri.</p>`
    },
    {
      type: "curiosity",
      title: "Il più grande organismo del mondo",
      html: `<p>Nelle foreste dell'Oregon (Stati Uniti) il fungo <i>Armillaria ostoyae</i> occupa, con il suo micelio sotterraneo, circa 9 km² (parecchie centinaia di campi da calcio) e ha un'età stimata in oltre 2000 anni. Se è davvero un unico individuo, è il più grande organismo conosciuto in superficie. Un altro "organismo" gigantesco è il bosco di pioppi tremuli <i>Pando</i> nello Utah, un clone con migliaia di tronchi collegati dalle stesse radici, che pesa circa 6000 tonnellate. Sono la prova che i confini tra "individuo" ed "ecosistema" non sono sempre netti.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa degli ecosistemi: tocca i nodi e scopri il perché",
      nodes: [
        { id: "eco", label: "Ecosistema", x: 50, y: 6, color: "#3b82f6", html: "Comunità + ambiente fisico, con flussi di energia e materia.", why: "Arthur Tansley (1935) introdusse il termine per sottolineare che gli organismi e il loro ambiente formano un solo sistema fisico. Eugene Odum, con il manuale Fundamentals of Ecology (1953), rese l'idea la base dell'ecologia moderna." },
        { id: "energia", label: "Flusso di energia", x: 18, y: 32, color: "#f59e0b", html: "Sole → produttori → consumatori → calore. Regola del 10%.", why: "Lindeman (1942), studiando il lago Cedar Bog in Minnesota, mostrò che a ogni passaggio si perde circa il 90% dell'energia, e lo spiegò con le leggi della termodinamica: nessuna trasformazione di energia è efficiente al 100%." },
        { id: "cicli", label: "Cicli biogeochimici", x: 82, y: 32, color: "#22c55e", html: "Carbonio, azoto, fosforo: la materia si ricicla.", why: "La materia sulla Terra è un sistema chiuso: gli atomi non si creano né si distruggono (Lavoisier, 1789). Per questo ogni atomo di carbonio del tuo corpo è stato in passato in un'atmosfera, in una pianta, magari in un altro animale." },
        { id: "reti", label: "Reti alimentari", x: 18, y: 60, color: "#ef4444", html: "Chi mangia chi: catene intrecciate.", why: "Charles Elton nel 1927 introdusse le catene alimentari e le piramidi dei numeri; le reti descrivono meglio la realtà e mostrano perché togliere una specie può provocare effetti a catena." },
        { id: "biodiv", label: "Biodiversità", x: 82, y: 60, color: "#a855f7", html: "Varietà di geni, specie ed ecosistemi.", why: "Il termine fu reso popolare nel 1986 al Forum sulla biodiversità di Washington; la Convenzione sulla Diversità Biologica (Rio de Janeiro, 1992) la riconosce come un bene comune. Una comunità varia è più stabile e resiliente." },
        { id: "uomo", label: "Impatto umano", x: 50, y: 82, color: "#14b8a6", html: "Perdita di habitat, inquinamento, clima, specie invasive.", why: "L'uomo preleva già una frazione notevole della produttività primaria del pianeta e ha modificato più del 70% delle terre emerse libere dai ghiacci. Capire gli ecosistemi serve a trovare soluzioni (aree protette, agricoltura sostenibile, rinaturalizzazione)." },
        { id: "chiave", label: "Specie chiave", x: 50, y: 48, color: "#06b6d4", html: "Specie che hanno un effetto enorme rispetto alla loro abbondanza.", why: "Paine (1966) con le stelle marine e la reintroduzione dei lupi a Yellowstone (1995) mostrano che i predatori all'apice possono determinare la struttura di tutta la comunità." }
      ],
      edges: [
        ["eco", "energia", "ha un"],
        ["eco", "cicli", "ha dei"],
        ["energia", "reti", "scorre in"],
        ["cicli", "biodiv", "sostengono"],
        ["reti", "chiave", "ha delle"],
        ["biodiv", "uomo", "minacciata da"],
        ["chiave", "biodiv", "mantengono"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul><li>Ecosistema = comunità + ambiente abiotico. Livelli: individuo, popolazione, comunità, ecosistema, bioma, biosfera.</li><li>Energia: flusso a senso unico, con perdite del 90% a ogni livello trofico. Materia: cicli (C, N, P).</li><li>Relazioni: predazione (+/−), competizione (−/−), parassitismo (+/−), mutualismo (+/+), commensalismo (+/0).</li><li>Minacce alla biodiversità: habitat, specie invasive, sovrasfruttamento, inquinamento, clima.</li></ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: cicli e biodiversità",
      questions: [
        { type: "mc", q: "Quali organismi riportano al suolo i sali minerali dai resti di piante e animali?", options: ["Produttori", "Decompositori", "Consumatori terziari"], answer: 1, explain: "Funghi e batteri decompositori mineralizzano la materia organica." },
        { type: "mc", q: "Quale processo trasforma l'azoto atmosferico in ammoniaca?", options: ["Fissazione", "Nitrificazione", "Denitrificazione"], answer: 0, explain: "La fissazione è fatta soprattutto da batteri come Rhizobium e da cianobatteri." },
        { type: "tf", q: "Il ciclo del fosforo ha un'importante fase atmosferica gassosa.", answer: false, explain: "Il fosforo circola soprattutto tra rocce, suolo, acqua e organismi." }
      ]
    }
  ],
  glossary: [
    { t: "Ecosistema", d: "Insieme di una comunità di organismi e dell'ambiente fisico in cui vive." },
    { t: "Habitat", d: "Il luogo in cui vive una specie, con le sue condizioni." },
    { t: "Nicchia ecologica", d: "Insieme delle risorse e del modo di vivere di una specie." },
    { t: "Produttore", d: "Organismo autotrofo che fabbrica materia organica da sostanze inorganiche." },
    { t: "Decompositore", d: "Organismo (funghi, batteri) che demolisce i resti organici." },
    { t: "Livello trofico", d: "Posizione di un organismo nella catena alimentare." },
    { t: "Regola del 10%", d: "In media solo il 10% dell'energia passa da un livello trofico al successivo." },
    { t: "Mutualismo", d: "Relazione tra due specie da cui entrambe traggono vantaggio." },
    { t: "Ciclo biogeochimico", d: "Percorso di un elemento tra viventi, atmosfera, acque e rocce." },
    { t: "Eutrofizzazione", d: "Eccesso di nutrienti in un'acqua che provoca fioriture di alghe e carenza di ossigeno." },
    { t: "Biodiversità", d: "Varietà di geni, specie ed ecosistemi." },
    { t: "Biomagnificazione", d: "Aumento della concentrazione di una sostanza persistente lungo la catena alimentare." },
    { t: "Specie chiave", d: "Specie con un effetto sull'ecosistema molto maggiore della sua abbondanza." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Chi coniò il termine ecologia nel 1866?", options: ["Ernst Haeckel", "Charles Darwin", "Carl Linneo"], answer: 0, explain: "Haeckel formò la parola dal greco oikos (casa)." },
      { type: "tf", q: "Un ecosistema comprende sia gli esseri viventi sia l'ambiente fisico.", answer: true, explain: "Biotico e abiotico formano un unico sistema." },
      { type: "num", q: "I produttori hanno 50 000 kcal. Quante kcal, in media, arrivano ai consumatori secondari (livello 3) con la regola del 10%?", answer: 500, unit: "kcal", explain: "50 000 → 5000 (primari) → 500 (secondari)." },
      { type: "mc", q: "Il rapporto tra un'ape e un fiore è un esempio di...", options: ["parassitismo", "mutualismo", "competizione"], answer: 1, explain: "L'ape ottiene nettare, il fiore viene impollinato." },
      { type: "order", q: "Ordina la catena alimentare dal produttore all'apice.", items: ["Erba", "Cavalletta", "Rana", "Serpente"], explain: "Produttore, consumatore primario, secondario, terziario." },
      { type: "mc", q: "Perché le catene alimentari sono raramente più lunghe di 4-5 anelli?", options: ["Per mancanza di spazio", "Perché a ogni livello si perde circa il 90% dell'energia", "Perché i predatori si estinguono"], answer: 1, explain: "Dopo pochi passaggi l'energia disponibile è troppo poca per sostenere altri livelli." },
      { type: "text", q: "Come si chiama l'eccesso di nutrienti (nitrati e fosfati) in un lago che provoca fioriture di alghe?", answer: ["eutrofizzazione", "l'eutrofizzazione"], explain: "Alla morte delle alghe i decompositori consumano l'ossigeno e i pesci muoiono." },
      { type: "tf", q: "La materia circola in cicli, mentre l'energia ha un flusso a senso unico.", answer: true, explain: "L'energia solare arriva, passa lungo la catena e si disperde come calore; gli atomi, invece, si riciclano." },
      { type: "mc", q: "Quale processo restituisce all'atmosfera il carbonio degli organismi?", options: ["Respirazione e decomposizione", "Fissazione dell'azoto", "Eutrofizzazione"], answer: 0, explain: "Respirazione, decomposizione e combustione liberano CO₂." },
      { type: "mc", q: "Perché la scomparsa di una specie chiave è così grave?", options: ["Perché ha un effetto sproporzionato sulla struttura della comunità", "Perché è sempre la più numerosa", "Perché non ha predatori"], answer: 0, explain: "Come la stella marina Pisaster o il lupo a Yellowstone, influenza molte altre specie." }
    ]
  }
});
