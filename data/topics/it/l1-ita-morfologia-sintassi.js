TOPIC('it', {
  id: "l1-ita-morfologia-sintassi",
  title: "Riflessione sulla lingua: morfologia e sintassi",
  intro: "Parliamo italiano da sempre, ma <b>sappiamo come funziona</b>? La grammatica è lo strumento con cui la lingua viene \"smontata\" per capirne i meccanismi, come si apre un orologio. In questa lezione ripassiamo e approfondiamo la <b>morfologia</b> (le parti del discorso: che tipo di parole abbiamo) e la <b>sintassi</b> della frase semplice (<b>analisi logica</b>: che funzione ha ogni parola o gruppo di parole nella frase).",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Morfologia e sintassi: due livelli di analisi",
      html: `<p>La grammatica studia come è fatta la lingua e si divide in livelli:</p>
<ul>
<li><b>Fonologia e ortografia</b>: i suoni e come si scrivono.</li>
<li><b>Morfologia</b>: la <b>forma delle parole</b> e la loro classificazione in <b>parti del discorso</b>. Studia come una parola cambia (genere, numero, persona, tempo...).</li>
<li><b>Sintassi</b>: come le parole si combinano per formare <b>frasi</b> e <b>periodi</b>. Ne studia l'ordine e le relazioni.</li>
<li><b>Lessico e semantica</b>: il significato delle parole.</li>
</ul>
<p>Esempio: nella frase <i>\"Il gatto dorme sul divano\"</i>, la morfologia dice che <i>gatto</i> è un nome maschile singolare, <i>dorme</i> un verbo alla terza persona singolare del presente; la sintassi dice che <i>il gatto</i> è il soggetto e <i>sul divano</i> indica il luogo in cui avviene l'azione.</p>`
    },
    {
      type: "text",
      title: "2. Le nove parti del discorso",
      html: `<p>Le parole italiane si dividono in <b>nove categorie</b>. Cinque sono <b>variabili</b> (cambiano forma) e quattro <b>invariabili</b>.</p>
<p><b>Variabili</b></p>
<ul>
<li><b>Nome</b> (o sostantivo): designa persone, animali, cose, idee. Comune/proprio, concreto/astratto, primitivo/derivato/alterato/composto, individuale/collettivo.</li>
<li><b>Articolo</b>: precede il nome e ne indica genere e numero. <i>Determinativo</i> (il, lo, la, i, gli, le), <i>indeterminativo</i> (un, uno, una), <i>partitivo</i> (del, dello, della...).</li>
<li><b>Aggettivo</b>: si accompagna al nome per qualificarlo (<i>qualificativo</i>: \"un libro interessante\") o determinarlo (<i>possessivo, dimostrativo, indefinito, numerale, interrogativo/esclamativo</i>).</li>
<li><b>Pronome</b>: sostituisce un nome (<i>personale, possessivo, dimostrativo, indefinito, relativo, interrogativo</i>). \"Marco è arrivato: <b>lo</b> ho visto.\"</li>
<li><b>Verbo</b>: indica azione, stato o modo di essere. Si coniuga per persona, numero, tempo, modo, forma (attiva, passiva, riflessiva).</li>
</ul>
<p><b>Invariabili</b></p>
<ul>
<li><b>Avverbio</b>: modifica un verbo, un aggettivo o un altro avverbio (\"corre <b>velocemente</b>\", \"molto bello\").</li>
<li><b>Preposizione</b>: collega parole e indica il tipo di rapporto (<i>di, a, da, in, con, su, per, tra, fra</i>). Quando si unisce all'articolo diventa <i>articolata</i> (del, nella, sul...).</li>
<li><b>Congiunzione</b>: unisce parole o frasi (<i>e, ma, perché, se, quando...</i>).</li>
<li><b>Interiezione</b>: esprime un'emozione improvvisa (<i>ah!, uffa!, evviva!</i>).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Variabile o invariabile?",
      widget: "classify",
      options: { groups: ["Variabili", "Invariabili"], items: [["gatto (nome)", 0], ["veloce (aggettivo)", 0], ["rapidamente (avverbio)", 1], ["con (preposizione)", 1], ["mangiare (verbo)", 0], ["ma (congiunzione)", 1], ["la (articolo)", 0], ["evviva! (interiezione)", 1]] },
      caption: "Classifica le parole in base al fatto che cambino o no forma."
    },
    {
      type: "example",
      title: "Analisi grammaticale di una frase",
      html: `<p><i>\"Domani i miei amici arriveranno con un treno velocissimo.\"</i></p>
<ul>
<li><b>Domani</b>: avverbio (di tempo).</li>
<li><b>i</b>: articolo determinativo maschile plurale.</li>
<li><b>miei</b>: aggettivo possessivo, maschile plurale.</li>
<li><b>amici</b>: nome comune, concreto, maschile plurale.</li>
<li><b>arriveranno</b>: verbo intransitivo, indicativo futuro semplice, 3ª persona plurale.</li>
<li><b>con</b>: preposizione semplice.</li>
<li><b>un</b>: articolo indeterminativo maschile singolare.</li>
<li><b>treno</b>: nome comune, concreto, maschile singolare.</li>
<li><b>velocissimo</b>: aggettivo qualificativo, superlativo assoluto, maschile singolare.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: parti del discorso",
      questions: [
        { type: "mc", q: "Nella frase 'Parla troppo piano', la parola 'piano' è...", options: ["un nome", "un avverbio", "un aggettivo"], answer: 1, explain: "Modifica il verbo 'parla': è un avverbio (modo)." },
        { type: "mc", q: "Quale parola è una preposizione articolata?", options: ["della", "dalla vita", "perché", "quello"], answer: 0, explain: "'della' = di + la. Le altre sono gruppi di parole, una congiunzione e un pronome/aggettivo." },
        { type: "tf", q: "La congiunzione è una parte variabile del discorso.", answer: false, explain: "Congiunzioni, avverbi, preposizioni e interiezioni sono invariabili." }
      ]
    },
    {
      type: "text",
      title: "3. La frase semplice e l'analisi logica",
      html: `<p>La <b>frase</b> è un gruppo di parole con senso compiuto. Se contiene un solo verbo (un solo predicato) si dice <b>frase semplice</b> o <b>proposizione</b>; se ne contiene più di uno si parla di <b>periodo</b> (analisi del periodo).</p>
<p>L'<b>analisi logica</b> scompone la frase semplice nei suoi <b>elementi</b>, ciascuno con una funzione precisa. Il nucleo è formato da:</p>
<ul>
<li><b>Soggetto</b>: chi compie l'azione o di chi si dice qualcosa. Si trova con la domanda <i>\"Chi è che...?\"</i>. Può essere sottinteso (\"Mangiamo\" = noi).</li>
<li><b>Predicato</b>: ciò che si dice del soggetto. Può essere:
  <ul>
  <li><b>verbale</b>: è un verbo di senso compiuto (\"Il cane <b>corre</b>\");</li>
  <li><b>nominale</b>: copula (verbo essere o simile) + <b>nome del predicato</b> (nome o aggettivo) (\"Il cane <b>è</b> <b>fedele</b>\").</li>
  </ul></li>
</ul>
<p>Attorno al nucleo si dispongono le <b>espansioni</b>: <b>attributo</b>, <b>apposizione</b> e i <b>complementi</b>.</p>`
    },
    {
      type: "svg",
      title: "Anatomia di una frase semplice",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="35" font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a">Ieri Marco ha mangiato una mela con la nonna</text>
<rect x="20" y="60" width="70" height="40" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/><text x="55" y="86" font-size="16" text-anchor="middle" fill="#0f172a">Ieri</text>
<rect x="105" y="60" width="90" height="40" rx="8" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="150" y="86" font-size="16" text-anchor="middle" fill="#0f172a">Marco</text>
<rect x="210" y="60" width="140" height="40" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="280" y="86" font-size="16" text-anchor="middle" fill="#0f172a">ha mangiato</text>
<rect x="365" y="60" width="90" height="40" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="410" y="86" font-size="16" text-anchor="middle" fill="#0f172a">una mela</text>
<rect x="470" y="60" width="110" height="40" rx="8" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/><text x="525" y="86" font-size="16" text-anchor="middle" fill="#0f172a">con la nonna</text>
<text x="55" y="140" font-size="14" text-anchor="middle" fill="#92400e" font-weight="bold">compl. di tempo</text>
<text x="150" y="140" font-size="14" text-anchor="middle" fill="#1e3a8a" font-weight="bold">soggetto</text>
<text x="280" y="140" font-size="14" text-anchor="middle" fill="#166534" font-weight="bold">predicato verbale</text>
<text x="410" y="140" font-size="14" text-anchor="middle" fill="#991b1b" font-weight="bold">compl. oggetto</text>
<text x="525" y="140" font-size="14" text-anchor="middle" fill="#6b21a8" font-weight="bold">compl. di compagnia</text>
<text x="300" y="210" font-size="16" text-anchor="middle" fill="#0f172a">Domande-guida:</text>
<text x="300" y="235" font-size="14" text-anchor="middle" fill="#0f172a">Chi? (soggetto) · Che cosa fa? (predicato) · Che cosa? (oggetto)</text>
<text x="300" y="258" font-size="14" text-anchor="middle" fill="#0f172a">Quando? Dove? Con chi? Come? Perché? (complementi indiretti)</text>
</svg>`,
      caption: "Ogni parte della frase risponde a una domanda: trova prima il predicato, poi il soggetto."
    },
    {
      type: "text",
      title: "4. Attributo, apposizione e complementi",
      html: `<p><b>Attributo</b>: aggettivo che accompagna un nome (\"una <b>bella</b> giornata\"). <b>Apposizione</b>: un nome che si affianca a un altro per specificarlo (\"Dante, <b>poeta</b>\"; \"il fiume <b>Po</b>\").</p>
<p>I <b>complementi</b> completano il significato del predicato. Il <b>complemento oggetto</b> (diretto) risponde a <i>\"chi? che cosa?\"</i> e non ha preposizione: \"Leggo <b>un libro</b>\". Gli altri sono <b>complementi indiretti</b>, introdotti da una preposizione:</p>
<table>
<tr><th>Complemento</th><th>Risponde a</th><th>Esempio</th></tr>
<tr><td>Specificazione</td><td>di chi? di che cosa?</td><td>La casa <b>di Luca</b></td></tr>
<tr><td>Termine</td><td>a chi? a che cosa?</td><td>Scrivo <b>a Marta</b></td></tr>
<tr><td>Luogo</td><td>dove? da dove? per dove?</td><td>Vivo <b>a Torino</b></td></tr>
<tr><td>Tempo</td><td>quando? per quanto tempo?</td><td>Parto <b>domani</b>; studio <b>per due ore</b></td></tr>
<tr><td>Mezzo</td><td>con che mezzo?</td><td>Viaggio <b>in treno</b></td></tr>
<tr><td>Modo</td><td>come?</td><td>Parla <b>con calma</b></td></tr>
<tr><td>Causa</td><td>per quale causa?</td><td>Tremo <b>per il freddo</b></td></tr>
<tr><td>Fine (scopo)</td><td>per quale scopo?</td><td>Studio <b>per la promozione</b></td></tr>
<tr><td>Compagnia / unione</td><td>con chi? con che cosa?</td><td>Esco <b>con gli amici</b></td></tr>
<tr><td>Agente / causa efficiente</td><td>da chi? (con verbo passivo)</td><td>Il quadro fu dipinto <b>da Giotto</b></td></tr>
<tr><td>Argomento</td><td>su che cosa?</td><td>Un libro <b>sulla storia romana</b></td></tr>
<tr><td>Materia</td><td>di che materiale?</td><td>Un anello <b>d'oro</b></td></tr>
<tr><td>Qualità</td><td>con quale caratteristica?</td><td>Una ragazza <b>dai capelli rossi</b></td></tr>
</table>
<p>Lo stesso nome può avere funzioni diverse: dipende dal <b>verbo</b> e dalla <b>preposizione</b>. In \"Il vaso <b>di vetro</b>\" è materia; in \"il vaso <b>di Marta</b>\" è specificazione.</p>`
    },
    {
      type: "remember",
      title: "Il metodo dell'analisi logica",
      html: `<ol><li>Cerca il <b>predicato</b> (il verbo, eventualmente con copula).</li><li>Trova il <b>soggetto</b> (chi fa l'azione?). Nel passivo il soggetto <i>subisce</i> l'azione.</li><li>Cerca il <b>complemento oggetto</b> (senza preposizione).</li><li>Per i complementi indiretti, guarda la <b>preposizione</b> e fai la <b>domanda giusta</b>.</li><li>Ricorda: la <b>stessa preposizione</b> può introdurre complementi diversi (<i>con</i>: compagnia, mezzo, modo...). Conta il senso.</li></ol>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la frase",
      intro: "Se l'analisi logica sembra un elenco da imparare a memoria, prova questi punti di vista.",
      tabs: [
        { label: "🎬 Il film della frase", html: "<p>Immagina la frase come una <b>scena di un film</b>: il <b>predicato</b> è l'azione, il <b>soggetto</b> è l'attore, il <b>complemento oggetto</b> è ciò che l'azione tocca direttamente, e i <b>complementi indiretti</b> sono lo sfondo: dove, quando, con chi, perché, come. Chiediti \"chi fa cosa? e dove, quando, come?\".</p>" },
        { label: "🌳 L'albero della frase", html: "<p>Alcune scuole linguistiche rappresentano la frase come un <b>albero</b>: il predicato è il tronco, da cui partono i rami (soggetto, oggetto, complementi), a loro volta con ramoscelli (attributi, apposizioni). La grammatica \"valenziale\" di <b>Lucien Tesnière</b> (1893-1954) ragiona così: il verbo è il centro e chiede un certo numero di \"posti\" (<i>valenze</i>) da riempire. Il verbo <i>dare</i> ne chiede tre: chi dà, che cosa, a chi.</p>", svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><circle cx="300" cy="50" r="38" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="300" y="56" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">dà</text><line x1="270" y1="78" x2="120" y2="170" stroke="#334155" stroke-width="2"/><line x1="300" y1="88" x2="300" y2="170" stroke="#334155" stroke-width="2"/><line x1="330" y1="78" x2="480" y2="170" stroke="#334155" stroke-width="2"/><rect x="60" y="170" width="120" height="44" rx="8" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="120" y="197" font-size="16" text-anchor="middle" fill="#0f172a">Anna (chi)</text><rect x="240" y="170" width="120" height="44" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="300" y="197" font-size="16" text-anchor="middle" fill="#0f172a">un libro (che cosa)</text><rect x="420" y="170" width="140" height="44" rx="8" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/><text x="490" y="197" font-size="16" text-anchor="middle" fill="#0f172a">a Luca (a chi)</text><text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">Il verbo \"dare\" ha tre valenze: soggetto, oggetto, termine</text></svg>` },
        { label: "🧩 Il test della sostituzione", html: "<p>Per capire la <b>parte del discorso</b> di una parola, sostituiscila con una parola certa. Se puoi mettere <i>\"molto\"</i> davanti (\"molto <b>bene</b>\"), è un avverbio; se puoi mettere <i>\"il/la\"</i> davanti, è un nome (\"il <b>bene</b>\"). Lo stesso termine <i>bene</i> cambia categoria a seconda della frase. In grammatica conta la <b>funzione</b>, non solo la parola.</p>" }
      ]
    },
    {
      type: "text",
      title: "5. Casi particolari: passivo, riflessivo, predicato nominale",
      html: `<p>Alcuni verbi cambiano la struttura della frase.</p>
<ul>
<li><b>Forma passiva</b>: il soggetto <i>subisce</i> l'azione; chi la compie diventa <b>complemento d'agente</b>: \"Il ladro <b>fu arrestato dai carabinieri</b>\". Frase attiva: \"I carabinieri arrestarono il ladro\" (carabinieri = soggetto; ladro = compl. oggetto).</li>
<li><b>Forma riflessiva</b>: soggetto e oggetto coincidono (\"Luca <b>si lava</b>\"): <i>si</i> è un pronome complemento oggetto.</li>
<li><b>Predicato nominale</b>: \"La Terra <b>è</b> <b>rotonda</b>\"; \"Roma è la capitale\". Il verbo essere qui è copula e non ha significato proprio; altri verbi copulativi: <i>sembrare, diventare, parere, restare</i>.</li>
<li><b>Soggetto sottinteso</b>: in italiano i pronomi personali soggetto si omettono spesso, perché la desinenza verbale indica la persona (\"Vado\" = io vado).</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "L'analisi logica è un'invenzione italiana?",
      html: `<p>In larga parte sì: l'<b>analisi logica</b> come esercizio scolastico, con questo nome e questo elenco di complementi, è tipica della scuola italiana. In altri Paesi si fa <i>sentence parsing</i> o analisi in costituenti. Il nome \"logica\" richiama l'idea di riconoscere nella frase i rapporti di pensiero tra le parole. Oggi i linguisti moderni, come <b>Noam Chomsky</b> (nato nel 1928), descrivono la sintassi con modelli a \"alberi\" simili a quello della scheda precedente.</p>`
    },
    {
      type: "curiosity",
      title: "Le parole che cambiano mestiere",
      html: `<p>Molte parole passano da una categoria all'altra. <i>\"Il bello della vita\"</i>: <i>bello</i>, aggettivo, è sostantivato. <i>\"Cammina piano\"</i> e <i>\"un piano di studi\"</i>: avverbio e nome. Per questo si dice che la <b>categoria grammaticale</b> si decide <b>nell'uso</b>, non nel dizionario.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: grammatica e frase semplice",
      nodes: [
        { id: "gram", label: "Grammatica", x: 50, y: 8, color: "#3b82f6", html: "Lo studio delle regole con cui funziona una lingua.", why: "Dai Greci e dai Latini (Dionisio Trace, Prisciano) la grammatica descrive le parole e le loro relazioni. Dalle grammatiche antiche derivano i nomi delle parti del discorso." },
        { id: "morf", label: "Morfologia", x: 20, y: 40, color: "#10b981", html: "Studia la forma e la classificazione delle parole: nove parti del discorso.", why: "Le categorie derivano dal comportamento delle parole: alcune cambiano (variabili), altre no. La classificazione serve a prevedere come si usano." },
        { id: "sint", label: "Sintassi", x: 80, y: 40, color: "#f59e0b", html: "Studia come le parole formano frasi e periodi.", why: "Una frase non è una somma di parole: l'ordine e i legami (accordi, preposizioni) producono il significato. \"Il cane morde l'uomo\" e \"L'uomo morde il cane\" hanno parole uguali e senso opposto." },
        { id: "log", label: "Analisi logica", x: 80, y: 72, color: "#8b5cf6", html: "Soggetto, predicato, attributo, apposizione, complemento oggetto e complementi indiretti.", why: "Serve a capire chi fa cosa e in quali circostanze. Aiuta a scrivere frasi chiare e a evitare ambiguità." },
        { id: "parti", label: "Parti del discorso", x: 20, y: 72, color: "#ef4444", html: "Cinque variabili (nome, articolo, aggettivo, pronome, verbo), quattro invariabili (avverbio, preposizione, congiunzione, interiezione).", why: "La divisione in variabili e invariabili dipende dalla possibilità di flessione, che nell'italiano (lingua derivata dal latino) è ricca nel verbo e nel gruppo nominale." }
      ],
      edges: [["gram", "morf", "comprende"], ["gram", "sint", "comprende"], ["sint", "log", "frase semplice"], ["morf", "parti", "classifica in"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz: analisi logica",
      questions: [
        { type: "mc", q: "'La torta è squisita': 'è squisita' è...", options: ["predicato verbale", "predicato nominale", "attributo"], answer: 1, explain: "È copula + aggettivo (nome del predicato)." },
        { type: "mc", q: "In 'Sono partito per Roma', 'per Roma' è complemento di...", options: ["fine", "luogo", "causa"], answer: 1, explain: "Indica la meta del viaggio: complemento di moto a luogo." },
        { type: "tf", q: "Nella frase 'Il libro fu scritto da Manzoni', 'Manzoni' è soggetto.", answer: false, explain: "È complemento d'agente: il soggetto è 'il libro'." }
      ]
    }
  ],
  glossary: [
    { t: "Morfologia", d: "Studio della forma delle parole e delle parti del discorso." },
    { t: "Sintassi", d: "Studio delle relazioni tra le parole nella frase e nel periodo." },
    { t: "Predicato verbale", d: "Predicato costituito da un verbo di significato compiuto." },
    { t: "Predicato nominale", d: "Copula (verbo essere o simile) più nome del predicato." },
    { t: "Complemento oggetto", d: "Complemento diretto, senza preposizione, che indica su chi o su che cosa ricade l'azione." },
    { t: "Complemento indiretto", d: "Complemento introdotto da una preposizione." },
    { t: "Apposizione", d: "Nome che si affianca a un altro nome per precisarlo." },
    { t: "Attributo", d: "Aggettivo riferito direttamente a un nome." },
    { t: "Copula", d: "Verbo essere (o simile) che lega soggetto e nome del predicato." },
    { t: "Complemento d'agente", d: "Indica da chi è compiuta l'azione in una frase passiva." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quante sono le parti del discorso in italiano?", options: ["sette", "otto", "nove", "dieci"], answer: 2, explain: "Nome, articolo, aggettivo, pronome, verbo, avverbio, preposizione, congiunzione, interiezione." },
      { type: "mc", q: "Quale parte del discorso è invariabile?", options: ["Pronome", "Congiunzione", "Aggettivo", "Verbo"], answer: 1, explain: "Le invariabili sono avverbio, preposizione, congiunzione e interiezione." },
      { type: "text", q: "Come si chiama il verbo 'essere' quando lega il soggetto al nome del predicato?", answer: ["copula", "la copula"], explain: "In 'Anna è stanca', 'è' è copula." },
      { type: "mc", q: "In 'Parlo con calma', 'con calma' è complemento di...", options: ["compagnia", "mezzo", "modo", "causa"], answer: 2, explain: "Risponde a 'come?': modo." },
      { type: "tf", q: "Nella frase 'Mi piace il mare', 'il mare' è il soggetto.", answer: true, explain: "Chi piace? Il mare: soggetto; 'mi' è complemento di termine." },
      { type: "mc", q: "'La casa di Luca' contiene un complemento di...", options: ["specificazione", "termine", "luogo", "agente"], answer: 0, explain: "Risponde a 'di chi?': specificazione." },
      { type: "mc", q: "In 'Dante, poeta fiorentino, scrisse la Commedia', 'poeta' è...", options: ["attributo", "apposizione", "predicato nominale", "complemento oggetto"], answer: 1, explain: "È un nome che si affianca a 'Dante' per precisarlo: apposizione." },
      { type: "order", q: "Metti nell'ordine consigliato i passi dell'analisi logica.", items: ["Trovare il predicato", "Trovare il soggetto", "Trovare il complemento oggetto", "Analizzare i complementi indiretti"], explain: "Si parte dal verbo, poi dal soggetto, poi dagli elementi che il verbo regge, infine dai complementi indiretti." },
      { type: "mc", q: "In 'Il compito fu corretto dal professore', 'dal professore' è...", options: ["complemento di causa", "complemento d'agente", "soggetto", "complemento di luogo"], answer: 1, explain: "Indica chi compie l'azione in una frase passiva." }
    ]
  }
});
