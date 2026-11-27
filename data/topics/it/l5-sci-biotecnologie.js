TOPIC('it', {
  id: "l5-sci-biotecnologie",
  title: "Le biotecnologie",
  intro: "Il lievito che fa il pane è una biotecnologia vecchia di millenni; l'insulina prodotta da un batterio, il test PCR che rileva un virus in poche ore, una pianta resistente agli insetti, un gene \"corretto\" con le forbici molecolari CRISPR sono biotecnologie modernissime. Dagli anni Settanta del Novecento siamo in grado di <b>leggere, tagliare, copiare e riscrivere il DNA</b>. In questa lezione vediamo come funzionano gli strumenti di base (enzimi di restrizione, plasmidi, PCR, elettroforesi, sequenziamento, CRISPR), a cosa servono in medicina, agricoltura e giustizia e quali domande etiche pongono. Per capirla ti serve ricordare come è fatto il DNA e come si esprime un gene (lezione di terzo anno).",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Che cosa sono le biotecnologie",
      html: `<p>Le <b>biotecnologie</b> sono l'uso di organismi viventi, di cellule o di loro componenti (enzimi, DNA) per ottenere prodotti e servizi utili. Si distinguono due epoche:</p>
<ul>
<li><b>biotecnologie tradizionali</b>: da millenni si sfruttano batteri, lieviti e muffe per pane, vino, birra, yogurt e formaggi, e si selezionano piante e animali con gli incroci (<b>selezione artificiale</b>);</li>
<li><b>biotecnologie moderne</b>: dagli anni Settanta si interviene direttamente sul <b>materiale genetico</b>, spostando geni da un organismo a un altro con la tecnica del <b>DNA ricombinante</b>.</li>
</ul>
<p>Il collegamento è la <b>universalità del codice genetico</b>: quasi tutti i viventi usano lo stesso codice (stessa tripletta, stesso amminoacido), perciò un gene umano inserito in un batterio può essere letto dal batterio e produrre la proteina umana. È questa la scoperta che ha reso possibile tutto il resto.</p>
<p>Spesso si usa un codice a colori: biotecnologie <b>rosse</b> (medicina e farmaci), <b>verdi</b> (agricoltura), <b>bianche</b> (industria: enzimi, bioplastiche, biocarburanti), <b>blu</b> (ambiente marino), <b>grigie</b> (ambiente e bonifiche).</p>`
    },
    {
      type: "text",
      title: "Il DNA ricombinante: forbici, colla e navette",
      html: `<p>Nel <b>1973</b> Stanley Cohen e Herbert Boyer (con Paul Berg e altri) misero insieme tre scoperte e crearono il primo DNA ricombinante, cioè un DNA formato da pezzi di origine diversa. Gli strumenti sono:</p>
<ul>
<li><b>Enzimi di restrizione</b> (le \"forbici\"): enzimi dei batteri, che li usano contro i virus, e che tagliano il DNA in <b>sequenze specifiche</b> (di solito palindrome di 4-8 basi). Werner Arber, Hamilton Smith e Daniel Nathans ricevettero per queste scoperte il Nobel nel 1978. Per esempio, <b>EcoRI</b> (da <i>E. coli</i>) riconosce GAATTC e taglia tra G e A, lasciando due code a singolo filamento \"appiccicose\" (<b>estremità coesive</b>). Se si tagliano due DNA diversi con lo stesso enzima, i frammenti possono riappaiarsi tra loro.</li>
<li><b>DNA ligasi</b> (la \"colla\"): sigilla i legami fosfodiesterici e salda i frammenti.</li>
<li><b>Vettori</b> (le \"navette\"): molecole che trasportano il gene dentro una cellula. Il più usato è il <b>plasmide</b>, una piccola molecola circolare di DNA dei batteri, che si replica indipendentemente e spesso porta un gene di <b>resistenza a un antibiotico</b>. Si usano anche virus modificati (fagi, adenovirus, lentivirus) e cromosomi artificiali.</li>
</ul>
<p><b>I passaggi del clonaggio di un gene.</b></p>
<ol>
<li>Si isola il <b>gene d'interesse</b> (per esempio quello dell'insulina umana) e lo si taglia con un enzima di restrizione.</li>
<li>Si taglia con lo stesso enzima il <b>plasmide</b> e si uniscono i due pezzi con la ligasi: nasce un <b>plasmide ricombinante</b>.</li>
<li>Con la <b>trasformazione</b> il plasmide viene fatto entrare in batteri (di solito <i>Escherichia coli</i>), per esempio con uno shock termico o un impulso elettrico.</li>
<li><b>Selezione</b>: i batteri si fanno crescere su un terreno con l'antibiotico; sopravvivono solo quelli che hanno ricevuto il plasmide (resistenza). Con un secondo marcatore si distinguono i batteri con il gene inserito.</li>
<li>I batteri si dividono rapidamente (anche ogni 20 minuti): si ottengono milioni di <b>cloni</b> e si produce la proteina in grandi <b>fermentatori</b> o si estraggono molte copie del gene.</li>
</ol>
<p>Nel <b>1982</b> negli Stati Uniti fu approvata l'<b>insulina umana ricombinante</b> (Humulin), il primo farmaco prodotto con questa tecnica. Prima si estraeva dal pancreas di maiali e bovini. Oggi con la stessa strategia si producono l'ormone della crescita, il fattore VIII per l'emofilia, vaccini (epatite B) e anticorpi monoclonali.</p>`
    },
    {
      type: "svg",
      title: "Il clonaggio di un gene in un plasmide",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="a2" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker></defs>
<text x="300" y="24" font-size="17" font-weight="bold" fill="#111827" text-anchor="middle">DNA ricombinante in 3 passi</text>
<circle cx="90" cy="110" r="45" fill="none" stroke="#2563eb" stroke-width="8"/>
<text x="90" y="116" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">plasmide</text>
<rect x="125" y="100" width="60" height="22" fill="#f8fafc"/>
<rect x="170" y="215" width="130" height="26" rx="6" fill="#ef4444"/>
<text x="235" y="233" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">gene (umano)</text>
<text x="90" y="180" font-size="14" fill="#111827" text-anchor="middle">1. si taglia con lo</text>
<text x="90" y="198" font-size="14" fill="#111827" text-anchor="middle">stesso enzima</text>
<line x1="150" y1="110" x2="228" y2="110" stroke="#475569" stroke-width="3" marker-end="url(#a2)"/>
<circle cx="300" cy="110" r="45" fill="none" stroke="#2563eb" stroke-width="8"/>
<path d="M300 65 A45 45 0 0 1 345 110" fill="none" stroke="#ef4444" stroke-width="8"/>
<text x="300" y="116" font-size="14" font-weight="bold" fill="#111827" text-anchor="middle">ricombinante</text>
<text x="300" y="180" font-size="14" fill="#111827" text-anchor="middle">2. la ligasi unisce</text>
<text x="300" y="198" font-size="14" fill="#111827" text-anchor="middle">gene e plasmide</text>
<line x1="360" y1="110" x2="428" y2="110" stroke="#475569" stroke-width="3" marker-end="url(#a2)"/>
<ellipse cx="510" cy="110" rx="62" ry="38" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<circle cx="510" cy="110" r="18" fill="none" stroke="#2563eb" stroke-width="5"/>
<text x="510" y="62" font-size="14" font-weight="bold" fill="#14532d" text-anchor="middle">batterio</text>
<text x="510" y="180" font-size="14" fill="#111827" text-anchor="middle">3. il batterio lo</text>
<text x="510" y="198" font-size="14" fill="#111827" text-anchor="middle">assume e si moltiplica</text>
<text x="300" y="274" font-size="15" font-weight="bold" fill="#7c3aed" text-anchor="middle">Un batterio → milioni di cloni che producono la proteina</text>
</svg>`,
      caption: "Schema semplificato: il batterio legge il gene umano grazie al codice genetico universale e produce la proteina (per esempio l'insulina)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: DNA ricombinante",
      questions: [
        { type: "mc", q: "Qual è la funzione degli enzimi di restrizione?", options: ["Tagliare il DNA in sequenze specifiche", "Copiare il DNA", "Unire i frammenti di DNA", "Sintetizzare le proteine"], answer: 0, explain: "Sono le \"forbici molecolari\": riconoscono sequenze precise (spesso palindrome) e tagliano il DNA lì." },
        { type: "mc", q: "Perché un gene umano può funzionare in un batterio?", options: ["Il codice genetico è praticamente universale", "Il batterio ha cromosomi umani", "I batteri sono vertebrati", "Il gene si trasforma in RNA batterico da solo"], answer: 0, explain: "La stessa tripletta codifica lo stesso amminoacido in quasi tutti i viventi: il batterio \"legge\" il gene umano." },
        { type: "tf", q: "I plasmidi con un gene di resistenza a un antibiotico permettono di selezionare i batteri trasformati.", answer: true, explain: "Sul terreno con antibiotico sopravvivono e formano colonie solo i batteri che hanno acquisito il plasmide." },
        { type: "text", q: "Come si chiama l'enzima che salda i frammenti di DNA?", answer: ["ligasi", "dna ligasi", "la ligasi", "la dna ligasi"], explain: "La DNA ligasi forma i legami fosfodiesterici tra i frammenti, come una \"colla\"." }
      ]
    },
    {
      type: "text",
      title: "La PCR: fotocopiare il DNA",
      html: `<p>Per studiare un frammento di DNA servono molte copie. La <b>reazione a catena della polimerasi (PCR)</b>, inventata da <b>Kary Mullis</b> nel 1983 (Nobel per la chimica 1993), permette di <b>amplificare</b> una regione scelta di DNA in poche ore, partendo anche da una singola molecola: una goccia di sangue, un capello, un tampone.</p>
<p><b>Ingredienti</b>: il DNA stampo; due brevi <b>primer</b> (inneschi di circa 18-25 basi) complementari alle estremità della regione da copiare; i quattro <b>nucleotidi</b> (dNTP); una <b>DNA polimerasi termoresistente</b> (la <b>Taq</b>, estratta dal batterio <i>Thermus aquaticus</i> che vive nelle sorgenti calde di Yellowstone) e un tampone, tutto in una provetta in un <b>termociclatore</b>. Ogni ciclo (30 secondi - qualche minuto) ha tre tappe a temperatura diversa:</p>
<ol>
<li><b>Denaturazione</b> (circa 94-95 °C): il calore rompe i legami a idrogeno e separa i due filamenti di DNA.</li>
<li><b>Appaiamento (annealing)</b> (circa 50-65 °C): i primer si legano alle sequenze complementari sui singoli filamenti.</li>
<li><b>Estensione</b> (circa 72 °C): la polimerasi allunga i primer copiando il filamento.</li>
</ol>
<p>A ogni ciclo il numero di copie <b>raddoppia</b>: dopo n cicli si hanno circa <b>2ⁿ</b> copie (una crescita esponenziale). Dopo 30 cicli, da una molecola ne derivano circa un miliardo (2³⁰ ≈ 1,07 · 10⁹). La specificità dei primer garantisce che si amplifichi solo la regione voluta.</p>
<p><b>Applicazioni</b>: diagnosi di infezioni (il tampone molecolare per SARS-CoV-2 usa la RT-PCR, in cui l'RNA virale viene prima trasformato in DNA); diagnosi di malattie genetiche; identificazione di OGM negli alimenti; analisi del DNA antico (anche di mammut e di Neanderthal); medicina legale.</p>`
    },
    {
      type: "widget",
      title: "I tre passi della PCR",
      widget: "match",
      options: {
        pairs: [
          ["Denaturazione", "94-95 °C: i filamenti si separano"],
          ["Appaiamento", "50-65 °C: i primer si legano"],
          ["Estensione", "72 °C: la Taq allunga i primer"],
          ["Dopo 10 cicli", "circa 1000 copie (2¹⁰ = 1024)"],
          ["Taq polimerasi", "enzima da Thermus aquaticus"]
        ]
      },
      caption: "La PCR è un ciclo ripetuto 25-35 volte: temperatura alta, media, di lavoro."
    },
    {
      type: "text",
      title: "Leggere il DNA: elettroforesi, impronta genetica e sequenziamento",
      html: `<p>L'<b>elettroforesi su gel</b> separa i frammenti di DNA in base alla lunghezza. Il DNA, a causa dei gruppi fosfato, ha carica <b>negativa</b>: in un campo elettrico migra verso il polo positivo. Il gel di agarosio fa da \"setaccio\": i frammenti <b>piccoli corrono più veloci e arrivano più lontano</b>, quelli grandi restano indietro. Colorando il DNA (con un colorante fluorescente) si osservano le bande e si confrontano con un campione di misura noto.</p>
<p>La <b>impronta genetica (DNA fingerprinting)</b>, ideata da <b>Alec Jeffreys</b> nel 1984-85, sfrutta il fatto che il DNA di ciascuno di noi, tranne i gemelli identici, differisce in regioni a ripetizione (<b>STR</b>, brevi sequenze ripetute). Si amplificano con la PCR alcune regioni e si confronta il profilo: la probabilità che due persone non imparentate abbiano lo stesso profilo completo è infinitesimale. È usato per identificazione di criminali e vittime, test di paternità, studio delle migrazioni umane.</p>
<p>Il <b>sequenziamento</b> legge l'ordine delle basi. Frederick Sanger sviluppò nel 1977 un metodo con nucleotidi \"terminatori di catena\" (Nobel 1980, il suo secondo). Il <b>Progetto Genoma Umano</b>, avviato nel 1990 e dichiarato sostanzialmente completo nel 2003, ha letto i circa 3 miliardi di coppie di basi del genoma umano (circa 20 000 geni che codificano proteine) con un costo di circa tre miliardi di dollari. Oggi i sequenziatori di nuova generazione leggono un intero genoma in poche ore a un costo di poche centinaia di dollari, e nel 2022 è stato pubblicato il primo genoma umano veramente completo (progetto T2T).</p>`
    },
    {
      type: "text",
      title: "CRISPR-Cas9: le forbici programmabili",
      html: `<p>Nel <b>2012</b> <b>Jennifer Doudna</b> ed <b>Emmanuelle Charpentier</b> hanno mostrato come usare un sistema di difesa dei batteri contro i virus per <b>modificare il DNA con grande precisione</b>; per questo hanno ricevuto il <b>Nobel per la chimica 2020</b>. Nei batteri, il sistema <b>CRISPR</b> (brevi ripetizioni palindromiche regolarmente intervallate) conserva frammenti del DNA dei virus incontrati, come un \"archivio di foto segnaletiche\", e l'enzima <b>Cas9</b> taglia il DNA di quei virus quando li incontra di nuovo.</p>
<p><b>Come funziona nell'uso in laboratorio.</b></p>
<ol>
<li>Si costruisce un breve <b>RNA guida</b> (sgRNA, circa 20 basi) con la sequenza complementare al gene bersaglio.</li>
<li>La guida porta l'enzima <b>Cas9</b> sul punto esatto del genoma; Cas9 richiede vicino al bersaglio una breve sequenza chiamata <b>PAM</b>.</li>
<li>Cas9 fa un <b>taglio a doppio filamento</b> nel DNA.</li>
<li>La cellula ripara il danno: per riparazione rapida e imprecisa (NHEJ), che spesso <b>inattiva il gene</b> (knock-out) con piccole inserzioni o delezioni; oppure, se si fornisce uno stampo di DNA, per ricombinazione omologa (HDR), che permette di <b>correggere o inserire</b> una sequenza voluta.</li>
</ol>
<p>È più semplice, economica e rapida delle tecniche precedenti: basta cambiare la sequenza della guida per cambiare bersaglio. Esistono varianti più recenti (<i>base editing</i>, <i>prime editing</i>) che modificano una singola lettera senza tagliare entrambi i filamenti.</p>
<p><b>Limiti e rischi</b>: possibili tagli in punti non voluti (<b>effetti off-target</b>), difficoltà di portare gli strumenti nelle cellule giuste dell'organismo, mosaicismo, effetti a lungo termine non noti. Il primo trattamento con CRISPR approvato (Casgevy, nel Regno Unito a novembre 2023 e poi negli Stati Uniti) cura la <b>anemia falciforme</b> e la <b>beta-talassemia</b> modificando le cellule staminali del sangue del paziente fuori dal corpo, che poi gli vengono reinfuse: è una <b>terapia genica somatica</b>, che riguarda solo il paziente.</p>`
    },
    {
      type: "decision",
      title: "Modificare i geni di un embrione: tu cosa avresti deciso?",
      html: "<p>Una coppia in cui il padre è sieropositivo vorrebbe avere figli protetti dall'HIV. Un ricercatore propone di modificare con CRISPR il gene <i>CCR5</i> (il recettore che il virus usa per entrare nelle cellule) in embrioni umani, e poi di impiantarli. La modifica sarebbe <b>ereditaria</b>: passerebbe ai discendenti. Esistono già farmaci e tecniche che permettono a un padre sieropositivo curato di avere figli sani senza modificare gli embrioni. Si tratta di una tecnica ancora poco sicura (effetti off-target, mosaicismo).</p>",
      question: "Che cosa dovrebbe fare la comunità scientifica?",
      options: [
        { label: "Procedere subito: se può proteggere dai virus, è giusto farlo", outcome: "Il vantaggio ottenibile è piccolo (esistono alternative sicure) mentre i rischi sono grandi e ricadrebbero su persone che non possono acconsentire, i figli e i loro discendenti." },
        { label: "Permettere la ricerca in laboratorio ma vietare l'impiego clinico finché la tecnica non è sicura e la società ne ha discusso", outcome: "Permette di capire la tecnica e di migliorarla senza esporre persone reali a rischi inaccettabili; garantisce un dibattito pubblico su che cosa sia accettabile, curare o 'potenziare'." },
        { label: "Vietare ogni ricerca sul DNA degli embrioni umani per sempre", outcome: "Eviterebbe gli abusi ma bloccherebbe anche ricerche utili per capire le malattie genetiche e lo sviluppo embrionale, che oggi si fanno in condizioni strettamente controllate." }
      ],
      answer: 1,
      explain: "Nel novembre 2018 il biofisico cinese He Jiankui annunciò la nascita di due gemelle con il gene CCR5 modificato. La comunità scientifica lo condannò quasi unanimemente: la tecnica non era sicura, il consenso informato era dubbio e la necessità medica quasi nulla. Fu condannato in Cina nel 2019 a tre anni di carcere. Da allora il consenso internazionale è che la modifica ereditaria (della linea germinale) non vada usata a scopi clinici finché non sia sicura e socialmente accettata. In molti Paesi, tra cui l'Italia (Convenzione di Oviedo), è vietata."
    },
    {
      type: "text",
      title: "Gli OGM e le biotecnologie in agricoltura",
      html: `<p>Un <b>OGM</b> (organismo geneticamente modificato) è un organismo il cui materiale genetico è stato modificato con tecniche di ingegneria genetica in modo che non avviene in natura per incrocio. Se il gene proviene da un'altra specie, si parla di organismo <b>transgenico</b>; se la modifica è fatta con CRISPR senza DNA estraneo, si parla di <b>genome editing</b> (regolato in UE in modo discusso e in evoluzione).</p>
<ul>
<li><b>Mais Bt</b>: contiene un gene del batterio <i>Bacillus thuringiensis</i> per una proteina tossica per certi insetti (la piralide); si riduce l'uso di insetticidi.</li>
<li><b>Soia e colza tolleranti a un erbicida</b> (glifosato), per semplificare il diserbo.</li>
<li><b>Riso dorato</b>: arricchito di β-carotene (precursore della vitamina A) per combattere la carenza di vitamina A che causa cecità infantile nei Paesi poveri.</li>
<li>Il primo alimento OGM in commercio fu il pomodoro <b>Flavr Savr</b> (1994), maturazione ritardata.</li>
<li>Papaya resistente al virus, che salvò la produzione delle Hawaii.</li>
</ul>
<p>Per ottenere una pianta transgenica si usa spesso <b>Agrobacterium tumefaciens</b>, un batterio che naturalmente trasferisce un suo DNA (plasmide Ti) alle cellule vegetali: i ricercatori sostituiscono i suoi geni con quello voluto.</p>
<p><b>Rischi e dibattito.</b> I dubbi riguardano la possibile <b>trasmissione dei geni</b> alle specie selvatiche, la comparsa di <b>insetti ed erbe infestanti resistenti</b>, l'effetto sulla biodiversità, la dipendenza degli agricoltori dalle multinazionali che detengono i brevetti. Le principali autorità scientifiche (come l'EFSA in Europa e l'OMS) non hanno trovato prove che gli OGM approvati siano più pericolosi per la salute dei corrispettivi convenzionali, ma ogni nuovo OGM viene valutato caso per caso. In UE ogni OGM va autorizzato e deve essere <b>etichettato</b>; in Italia la coltivazione di OGM è di fatto vietata, ma importiamo soia e mais OGM per i mangimi.</p>`
    },
    {
      type: "text",
      title: "Applicazioni mediche: dai vaccini alle terapie cellulari",
      html: `<p><b>Farmaci ricombinanti.</b> Insulina, ormone della crescita, eritropoietina, interferoni, fattori della coagulazione e <b>anticorpi monoclonali</b> (prodotti da cloni di cellule, usati contro tumori, malattie autoimmuni e infezioni).</p>
<p><b>Vaccini.</b> Oltre a quelli tradizionali (virus attenuati o inattivati), ci sono i vaccini a <b>subunità</b> (per esempio quello contro l'epatite B, con una proteina prodotta in lievito) e quelli a <b>mRNA</b>: iniettano l'istruzione per far produrre alle nostre cellule la proteina Spike del coronavirus, che allena il sistema immunitario senza usare il virus. Katalin Karikó e Drew Weissman hanno ricevuto il Nobel per la medicina nel 2023 per aver reso possibile questa tecnologia (modificando i nucleosidi dell'RNA per evitare reazioni infiammatorie). L'mRNA <b>non entra nel nucleo e non modifica il DNA</b>, e viene degradato dopo qualche giorno.</p>
<p><b>Terapia genica.</b> Si introduce una copia funzionante di un gene nelle cellule del paziente (spesso con un virus reso innocuo come vettore) per curare una malattia genetica: esistono terapie approvate per alcune forme di immunodeficienza, atrofia muscolare spinale, emofilia, distrofia retinica. Le terapie CAR-T modificano i linfociti T del paziente perché riconoscano e distruggano alcune cellule tumorali.</p>
<p><b>Cellule staminali.</b> Sono cellule non specializzate che possono dividersi e dare altri tipi cellulari. Nel 2006 <b>Shinya Yamanaka</b> riprogrammò cellule adulte della pelle in cellule simili alle staminali embrionali (le <b>iPS</b>, cellule staminali pluripotenti indotte), con il Nobel nel 2012 insieme a John Gurdon. Questo permette di ottenere cellule specifiche del paziente evitando di usare embrioni.</p>
<p><b>Clonazione.</b> La pecora <b>Dolly</b> (nata nel 1996 a Edimburgo, presso il Roslin Institute, con il gruppo di Ian Wilmut) fu il primo mammifero clonato da una cellula adulta con trasferimento nucleare: il nucleo di una cellula di mammella fu inserito in un ovulo privato del proprio nucleo. Questa clonazione \"riproduttiva\" funziona ma con bassa efficienza; è vietata sull'uomo.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le biotecnologie",
      intro: "Se i dettagli ti sembrano astratti, prova queste analogie.",
      tabs: [
        { label: "✂️ Un editor di testo", html: "<p>Il genoma è un libro di 3 miliardi di lettere. Gli <b>enzimi di restrizione</b> sono forbici che tagliano a una certa parola, la <b>ligasi</b> la colla, la <b>PCR</b> una fotocopiatrice che moltiplica solo la pagina che vuoi, il <b>sequenziamento</b> la lettura, <b>CRISPR</b> la funzione \"trova e sostituisci\": una guida (RNA) cerca la frase esatta e Cas9 la taglia. Cambiare una parola senza cambiare il senso del libro è difficile: ecco perché la correzione dei geni richiede cautela.</p>" },
        { label: "📈 La crescita esponenziale", html: "<p>Il segreto della PCR è il <b>raddoppio</b>: 1, 2, 4, 8, 16... Come la leggenda del chicco di riso sulla scacchiera. Dopo 10 cicli sono circa mille copie, dopo 20 circa un milione, dopo 30 circa un miliardo. Basta una molecola di partenza e mezz'ora di cicli. Per questo la PCR è così sensibile: e così soggetta a contaminazioni, perché anche una sola molecola estranea può essere amplificata.</p>" },
        { label: "🐦 La staffetta del gene", html: "<p>Immagina il batterio come una piccola fabbrica che legge qualsiasi istruzione scritta nel codice universale. Gli diamo una pagina nuova (il gene dell'insulina) dentro un plasmide e la fabbrica comincia a stampare insulina; poi si moltiplica e ci sono milioni di fabbriche. Il batterio non \"diventa umano\": produce soltanto una proteina in più.</p>" }
      ]
    },
    {
      type: "example",
      title: "Come si risolve un caso con il DNA",
      html: `<p>In una scena del crimine si trovano tracce di sangue. Si estrae il DNA, si amplificano con la PCR 15-20 regioni STR e si separano i frammenti per lunghezza (elettroforesi capillare): ogni persona ha un \"codice a barre\" con due valori per ogni regione (uno ereditato dal padre e uno dalla madre). Si confronta il profilo con quello del sospettato e con una banca dati. Se tutti i valori coincidono, la probabilità che il campione appartenga a un'altra persona a caso è dell'ordine di una su miliardi. Se invece il profilo non coincide, il sospettato è escluso con certezza: il DNA ha scagionato molti condannati ingiustamente. Lo stesso metodo permette di identificare i resti delle vittime di disastri e di fare test di paternità: ogni figlio ha in ciascuna regione un valore dalla madre e uno dal padre.</p>`
    },
    {
      type: "example",
      title: "Un test in provetta: come si decide se un campione ha il virus",
      html: `<p>Un tampone naso-faringeo viene inserito in un liquido che rompe le particelle virali e libera l'RNA. Una <b>trascrittasi inversa</b> lo converte in DNA complementare (cDNA), poi la PCR amplifica una regione specifica del genoma virale usando primer specifici e una sonda fluorescente: a ogni ciclo, se c'è il bersaglio, la fluorescenza aumenta. Se la fluorescenza supera una soglia dopo un certo numero di cicli (<b>Ct</b>), il test è positivo; un Ct basso (poche decine di cicli) indica molta carica virale. Il test fornisce una risposta in 2-4 ore con grande sensibilità, ben maggiore di quella dei test rapidi antigenici.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: PCR, CRISPR, OGM",
      questions: [
        { type: "num", q: "Quante copie si ottengono, in teoria, da una molecola di DNA dopo 5 cicli di PCR?", answer: 32, tol: 0, explain: "A ogni ciclo il numero raddoppia: 2⁵ = 32." },
        { type: "mc", q: "Nel sistema CRISPR-Cas9 che cosa guida l'enzima fino al punto giusto del DNA?", options: ["Un RNA guida complementare al bersaglio", "Un plasmide", "Un primer di DNA", "Un antibiotico"], answer: 0, explain: "L'RNA guida (sgRNA) si appaia alla sequenza bersaglio e porta Cas9 a tagliare lì." },
        { type: "tf", q: "Nell'elettroforesi su gel i frammenti di DNA più piccoli migrano più lontano.", answer: true, explain: "Il gel è un setaccio: i frammenti piccoli lo attraversano più facilmente di quelli grandi." },
        { type: "mc", q: "Il mais Bt contiene un gene proveniente da...", options: ["Bacillus thuringiensis", "Escherichia coli", "Un virus", "Un insetto"], answer: 0, explain: "Il gene produce una proteina che uccide certi insetti parassiti del mais, riducendo l'uso di insetticidi." }
      ]
    },
    {
      type: "curiosity",
      title: "Il batterio delle sorgenti calde che ha cambiato la medicina",
      html: `<p>Nel 1983 Kary Mullis ebbe l'idea della PCR, ma c'era un problema: la DNA polimerasi normale si distruggeva a ogni ciclo a 95 °C e andava ripristinata a mano. La soluzione fu trovata in un batterio, <i>Thermus aquaticus</i>, scoperto negli anni Sessanta da Thomas Brock nelle sorgenti termali del Parco di Yellowstone, che vive a circa 70 °C e ha enzimi che resistono al calore. La <b>Taq polimerasi</b> permise di automatizzare la PCR, e il suo uso ha prodotto una delle rivoluzioni più grandi della biologia. Un buon esempio di come la ricerca di base, curiosa e apparentemente inutile, possa avere conseguenze enormi.</p>`
    },
    {
      type: "curiosity",
      title: "Le biotecnologie non sono solo \"alta tecnologia\"",
      html: `<p>La tecnica di <b>selezione artificiale</b> ha cambiato profondamente gli organismi: il mais deriva dal teosinte, una pianta selvatica del Messico con pochi chicchi duri; i cani discendono dai lupi; il cavolo, i broccoli, i cavolfiori e i cavolini di Bruxelles sono tutti la stessa specie (<i>Brassica oleracea</i>) selezionata in direzioni diverse. Anche il grano duro italiano con cui si fa la pasta, \"Creso\", fu ottenuto nel 1974 irradiando semi con radiazioni per provocare mutazioni casuali e selezionare quelle utili. Questi metodi non sono regolamentati come gli OGM, ma modificano il genoma in modo meno preciso. La differenza con l'ingegneria genetica è la precisione e la velocità, non il fatto di intervenire sul DNA.</p>`
    },
    {
      type: "remember",
      title: "Le idee da portare via",
      html: `<ul>
<li><b>DNA ricombinante</b>: enzimi di restrizione (tagliano), ligasi (salda), plasmide (vettore), batterio (fabbrica); funziona grazie al codice genetico universale.</li>
<li><b>PCR</b>: amplifica il DNA, 3 passi (95 °C / 50-65 °C / 72 °C) × 30 cicli; copie = 2ⁿ.</li>
<li><b>Elettroforesi</b>: separa per lunghezza (DNA negativo, i piccoli corrono di più). <b>STR</b> → impronta genetica.</li>
<li><b>CRISPR-Cas9</b>: RNA guida + Cas9 = taglio mirato; terapia somatica sì, germinale discussa.</li>
<li><b>OGM</b>: vantaggi (meno pesticidi, nutrizione) e dubbi (ambiente, brevetti): valutazione caso per caso.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa delle biotecnologie",
      nodes: [
        { id: "dna", label: "DNA e codice genetico", x: 50, y: 8, color: "#7c3aed", html: "Doppia elica, codice universale.", why: "Watson e Crick (1953) descrissero la doppia elica; il codice fu decifrato negli anni Sessanta (Nirenberg, Khorana). Il fatto che sia universale è il motivo per cui un gene si può spostare da una specie all'altra." },
        { id: "rec", label: "DNA ricombinante", x: 20, y: 40, color: "#ef4444", html: "Taglia, incolla, clona.", why: "La scoperta degli enzimi di restrizione (Arber, Smith, Nathans) e dei plasmidi nei primi anni Settanta rese possibile la tecnica; Cohen e Boyer la applicarono nel 1973." },
        { id: "pcr", label: "PCR e sequenziamento", x: 50, y: 50, color: "#0ea5e9", html: "Amplificare e leggere il DNA.", why: "Con la PCR (Mullis, 1983) e il sequenziamento (Sanger, 1977) si può copiare e leggere qualsiasi gene: sono il fondamento della genomica e della diagnostica moderna." },
        { id: "crispr", label: "CRISPR-Cas9", x: 82, y: 40, color: "#16a34a", html: "Editing mirato del genoma.", why: "Nasce dallo studio di un meccanismo di difesa dei batteri contro i virus: la ricerca di base ha dato uno strumento universale (Doudna e Charpentier, 2012)." },
        { id: "app", label: "Applicazioni", x: 30, y: 85, color: "#f59e0b", html: "Farmaci, vaccini, OGM, forense, terapie.", why: "Sono la ragione per cui questi strumenti sono stati sviluppati: curare malattie genetiche, produrre cibo e farmaci, identificare persone." },
        { id: "etica", label: "Bioetica e regole", x: 72, y: 85, color: "#0f766e", html: "Sicurezza, consenso, equità, ambiente.", why: "Fin dalla conferenza di Asilomar (1975) i biologi si interrogano sui rischi e propongono regole: il potere di modificare la vita richiede responsabilità, trasparenza e un dibattito pubblico." }
      ],
      edges: [["dna", "rec", "si sposta con"], ["dna", "pcr", "si legge e copia con"], ["dna", "crispr", "si modifica con"], ["rec", "app", "produce"], ["pcr", "app", "permette"], ["crispr", "app", "apre"], ["app", "etica", "solleva"], ["crispr", "etica", "è al centro della"]]
    }
  ],
  glossary: [
    { t: "Biotecnologia", d: "Uso di organismi viventi, cellule o loro componenti per produrre beni o servizi." },
    { t: "DNA ricombinante", d: "DNA formato unendo frammenti provenienti da organismi diversi." },
    { t: "Enzima di restrizione", d: "Enzima che taglia il DNA in una sequenza specifica." },
    { t: "Plasmide", d: "Piccola molecola circolare di DNA dei batteri, usata come vettore di geni." },
    { t: "Clonaggio", d: "Produzione di molte copie identiche di un gene (o di un organismo)." },
    { t: "PCR", d: "Reazione a catena della polimerasi: tecnica che amplifica una regione di DNA con cicli di temperatura." },
    { t: "Primer", d: "Breve frammento di DNA che innesca la sintesi in PCR, complementare a una sequenza bersaglio." },
    { t: "Elettroforesi", d: "Tecnica che separa molecole cariche in un campo elettrico, usata per il DNA su gel." },
    { t: "STR", d: "Brevi sequenze di DNA ripetute, variabili tra le persone, usate per l'impronta genetica." },
    { t: "CRISPR-Cas9", d: "Sistema con RNA guida ed enzima Cas9 per tagliare e modificare il DNA in punti scelti." },
    { t: "OGM", d: "Organismo il cui genoma è stato modificato con tecniche di ingegneria genetica." },
    { t: "Terapia genica", d: "Cura che introduce o corregge geni nelle cellule di un paziente." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale coppia di strumenti serve per inserire un gene in un plasmide?", options: ["Enzima di restrizione e DNA ligasi", "Primer e Taq polimerasi", "Cas9 e antibiotico", "Gel e coloranti"], answer: 0, explain: "L'enzima di restrizione taglia il plasmide e il gene; la ligasi li salda." },
      { type: "tf", q: "Un gene umano può essere letto da un batterio perché il codice genetico è praticamente universale.", answer: true, explain: "Stesse triplette, stessi amminoacidi: il batterio costruisce la proteina umana." },
      { type: "num", q: "Quante copie si ottengono in teoria da una molecola dopo 10 cicli di PCR?", answer: 1024, tol: 0, explain: "2¹⁰ = 1024." },
      { type: "mc", q: "A che cosa serve la Taq polimerasi?", options: ["Resiste alle alte temperature e sintetizza il DNA in PCR", "Taglia il DNA", "Riconosce i virus", "Salda i frammenti"], answer: 0, explain: "Viene da un batterio termofilo e non si denatura nel passaggio a 95 °C." },
      { type: "mc", q: "Nell'elettroforesi su gel il DNA migra verso...", options: ["il polo positivo", "il polo negativo", "nessun polo", "il centro del gel"], answer: 0, explain: "Il DNA è carico negativamente per i gruppi fosfato." },
      { type: "mc", q: "Che cos'è l'RNA guida nel sistema CRISPR-Cas9?", options: ["Una sequenza complementare al bersaglio che porta Cas9 al punto giusto", "Un antibiotico", "Un tipo di plasmide", "Un virus"], answer: 0, explain: "L'RNA guida si appaia al DNA bersaglio e porta Cas9 a tagliarlo." },
      { type: "tf", q: "La terapia genica somatica modifica anche i gameti e passa ai figli del paziente.", answer: false, explain: "La terapia somatica riguarda le cellule del corpo del paziente e non è ereditaria; solo la modifica della linea germinale lo sarebbe." },
      { type: "mc", q: "Il mais Bt produce una proteina insetticida perché ha ricevuto un gene da...", options: ["Bacillus thuringiensis", "Un topo", "Lievito", "Un virus influenzale"], answer: 0, explain: "È un esempio di organismo transgenico: il gene batterico conferisce resistenza a certi insetti." },
      { type: "text", q: "Come si chiama la tecnica che amplifica una regione di DNA con cicli di temperatura (sigla di tre lettere)?", answer: ["pcr", "la pcr"], explain: "PCR, reazione a catena della polimerasi, inventata da Kary Mullis nel 1983." },
      { type: "order", q: "Metti in ordine le tre tappe di un ciclo di PCR.", items: ["Denaturazione (circa 95 °C)", "Appaiamento dei primer (circa 55 °C)", "Estensione (circa 72 °C)"], explain: "Prima si separano i filamenti, poi si legano i primer, infine la polimerasi li allunga." }
    ]
  }
});
