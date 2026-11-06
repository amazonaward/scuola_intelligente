TOPIC('it', {
  id: "p3-tec-coding-blocchi",
  title: "Programmare a blocchi",
  intro: "Un computer è velocissimo, ma da solo non sa fare niente: qualcuno deve dirgli <b>che cosa fare</b>, passo dopo passo. Questo si chiama <b>programmare</b> (coding). Oggi impariamo a farlo con i <b>blocchi colorati</b>, come in Scratch, e scopriamo due idee fondamentali: la <b>sequenza</b> e il <b>ciclo</b>. 🧩🤖",
  minutes: 30,
  sections: [
    {
      type: "text", title: "Passo 1: che cos'è un algoritmo?",
      html: `<p>Un <b>algoritmo</b> è un elenco di <b>istruzioni</b> chiare, in un ordine preciso, per risolvere un problema o fare qualcosa.</p>
<p>Anche tu usi algoritmi ogni giorno! Per esempio, per lavarti i denti:</p>
<ol><li>prendi lo spazzolino;</li><li>metti il dentifricio;</li><li>spazzola i denti;</li><li>sciacqua la bocca;</li><li>lava lo spazzolino.</li></ol>
<p>Un <b>programma</b> è un algoritmo scritto in una lingua che il computer capisce: un <b>linguaggio di programmazione</b>.</p>
<p>⚠️ Il computer è un esecutore <b>preciso ma senza fantasia</b>: fa esattamente quello che scrivi, né più né meno. Se dimentichi un passo, non lo indovina!</p>`
    },
    {
      type: "text", title: "Passo 2: i blocchi",
      html: `<p>Nei linguaggi <b>a blocchi</b> (come <b>Scratch</b> o <b>Code.org</b>) non serve scrivere: le istruzioni sono <b>mattoncini colorati</b> che si incastrano come pezzi di un puzzle. 🧩</p>
<ul>
<li>🟨 <b>Eventi</b> (giallo): <i>quando si clicca la bandiera verde</i> → il programma parte.</li>
<li>🟦 <b>Movimento</b> (blu): <i>fai 10 passi</i>, <i>ruota di 90 gradi</i>.</li>
<li>🟪 <b>Aspetto</b> (viola): <i>dì "Ciao!"</i>, <i>cambia costume</i>.</li>
<li>🟧 <b>Controllo</b> (arancione): <i>ripeti 4 volte</i>, <i>attendi 1 secondo</i>.</li>
</ul>
<p>Se due blocchi non possono stare insieme, <b>non si incastrano</b>: così è difficile sbagliare a "scrivere".</p>`
    },
    {
      type: "svg", title: "Un programma a blocchi: il quadrato",
      caption: "A sinistra: la sequenza lunga (8 blocchi). A destra: lo stesso programma con un ciclo «ripeti 4 volte» (3 blocchi dentro). Il risultato è lo stesso quadrato!",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#f8fafc"/>
<text x="110" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">SEQUENZA</text>
<rect x="20" y="32" width="180" height="26" rx="10" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="30" y="51" font-size="14" fill="#422006">quando si clicca 🏁</text>
<rect x="20" y="60" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="77" font-size="14" fill="#ffffff">fai 100 passi</text>
<rect x="20" y="86" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="103" font-size="14" fill="#ffffff">ruota ↻ di 90 gradi</text>
<rect x="20" y="112" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="129" font-size="14" fill="#ffffff">fai 100 passi</text>
<rect x="20" y="138" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="155" font-size="14" fill="#ffffff">ruota ↻ di 90 gradi</text>
<rect x="20" y="164" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="181" font-size="14" fill="#ffffff">fai 100 passi</text>
<rect x="20" y="190" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="207" font-size="14" fill="#ffffff">ruota ↻ di 90 gradi</text>
<rect x="20" y="216" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="233" font-size="14" fill="#ffffff">fai 100 passi</text>
<rect x="20" y="242" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="259" font-size="14" fill="#ffffff">ruota ↻ di 90 gradi</text>
<text x="315" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">CICLO</text>
<rect x="225" y="32" width="180" height="26" rx="10" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="235" y="51" font-size="14" fill="#422006">quando si clicca 🏁</text>
<path d="M225,60 L405,60 L405,86 L250,86 L250,140 L405,140 L405,162 L225,162 Z" fill="#f97316"/>
<text x="235" y="78" font-size="14" fill="#ffffff" font-weight="bold">ripeti 4 volte</text>
<rect x="250" y="88" width="150" height="24" rx="4" fill="#3b82f6"/>
<text x="258" y="105" font-size="14" fill="#ffffff">fai 100 passi</text>
<rect x="250" y="114" width="150" height="24" rx="4" fill="#3b82f6"/>
<text x="258" y="131" font-size="14" fill="#ffffff">ruota ↻ di 90 gradi</text>
<text x="315" y="200" font-size="15" text-anchor="middle" fill="#15803d" font-weight="bold">3 blocchi invece di 8!</text>
<text x="510" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">RISULTATO</text>
<rect x="450" y="60" width="120" height="120" fill="none" stroke="#7c3aed" stroke-width="5"/>
<text x="510" y="58" font-size="22" text-anchor="middle">🐱</text>
<text x="510" y="215" font-size="15" text-anchor="middle" fill="#0f172a">4 lati uguali</text>
<text x="510" y="235" font-size="15" text-anchor="middle" fill="#0f172a">4 angoli di 90°</text>
</svg>`
    },
    {
      type: "remember", title: "Sequenza e ciclo",
      html: `<ul>
<li><b>Sequenza</b>: le istruzioni vengono eseguite <b>una dopo l'altra</b>, dall'alto verso il basso. L'<b>ordine</b> conta! Prima le calze, poi le scarpe. 🧦👟</li>
<li><b>Ciclo</b> (loop): un blocco che fa <b>ripetere</b> le istruzioni che ha dentro un certo numero di volte (<i>ripeti 4 volte</i>) o all'infinito (<i>per sempre</i>).</li>
</ul>
<p>Quando vedi delle istruzioni che si ripetono uguali, chiediti: <b>posso usare un ciclo?</b> Il programma diventa più corto, più facile da leggere e da correggere.</p>`
    },
    {
      type: "example", title: "Esempio pratico: il robot nel labirinto",
      html: `<p>Un robot 🤖 deve arrivare alla mela 🍎. Conosce solo tre istruzioni: <b>⬆️ avanti di 1 casella</b>, <b>↪️ gira a sinistra</b>, <b>↩️ gira a destra</b>.</p>
<p>La mela è 3 caselle davanti, poi 2 caselle a destra. Il programma è:</p>
<p>⬆️ ⬆️ ⬆️ ↩️ ⬆️ ⬆️</p>
<p>Con i cicli diventa: <b>ripeti 3 volte</b> [⬆️] → ↩️ → <b>ripeti 2 volte</b> [⬆️].</p>
<p>Se scrivi per sbaglio ↪️ invece di ↩️, il robot va a sinistra e sbatte contro il muro: hai trovato un <b>bug</b> (errore)! Correggerlo si dice fare <b>debug</b>. 🐞🔧</p>`
    },
    {
      type: "svg", title: "Il percorso del robot",
      caption: "Segui le frecce: 3 caselle in avanti, una curva a destra, 2 caselle avanti. Ecco la mela!",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#ecfeff"/>
<g stroke="#94a3b8" stroke-width="2" fill="#ffffff">
<rect x="150" y="20" width="60" height="60"/><rect x="210" y="20" width="60" height="60"/><rect x="270" y="20" width="60" height="60"/><rect x="330" y="20" width="60" height="60"/>
<rect x="150" y="80" width="60" height="60"/><rect x="210" y="80" width="60" height="60"/><rect x="270" y="80" width="60" height="60"/><rect x="330" y="80" width="60" height="60"/>
<rect x="150" y="140" width="60" height="60"/><rect x="210" y="140" width="60" height="60"/><rect x="270" y="140" width="60" height="60"/><rect x="330" y="140" width="60" height="60"/>
<rect x="150" y="200" width="60" height="60"/><rect x="210" y="200" width="60" height="60"/><rect x="270" y="200" width="60" height="60"/><rect x="330" y="200" width="60" height="60"/>
</g>
<rect x="210" y="80" width="60" height="60" fill="#475569"/>
<rect x="270" y="140" width="60" height="60" fill="#475569"/>
<path d="M180,230 L180,50 L300,50" stroke="#16a34a" stroke-width="6" fill="none" stroke-dasharray="10 6"/>
<text x="180" y="245" font-size="34" text-anchor="middle">🤖</text>
<text x="300" y="62" font-size="34" text-anchor="middle">🍎</text>
<text x="460" y="70" font-size="18" font-weight="bold" fill="#0f172a">⬆️ ⬆️ ⬆️</text>
<text x="460" y="110" font-size="18" font-weight="bold" fill="#0f172a">↩️ destra</text>
<text x="460" y="150" font-size="18" font-weight="bold" fill="#0f172a">⬆️ ⬆️</text>
<text x="460" y="200" font-size="15" fill="#475569">grigio = muro</text>
</svg>`
    },
    {
      type: "quiz", title: "Mini-quiz: sequenze",
      questions: [
        { type: "mc", q: "Un elenco di istruzioni chiare e ordinate per risolvere un problema è…", options: ["un algoritmo", "un disegno", "un computer"], answer: 0, explain: "Algoritmo = istruzioni in ordine." },
        { type: "order", q: "Metti in ordine la sequenza per vestirti i piedi.", items: ["metti le calze", "metti le scarpe", "allaccia le stringhe"], explain: "In una sequenza l'ordine conta: prima le calze, poi le scarpe!" },
        { type: "tf", q: "Il computer indovina da solo le istruzioni che ci siamo dimenticati.", answer: false, explain: "Il computer esegue solo ciò che è scritto: se manca un passo, non lo fa." }
      ]
    },
    {
      type: "3d", title: "Un ciclo è come una moltiplicazione",
      scene: "blocks",
      options: { mode: "array", a: 4, b: 3 },
      caption: "«Ripeti 4 volte: metti 3 cubetti» → 4 file da 3 = 12 cubetti. Muovi i cursori e pensa: quante volte ripeto? Quanti cubetti metto ogni volta?"
    },
    {
      type: "example", title: "Esempio pratico: la festa del gatto di Scratch",
      html: `<p>Vuoi che il gatto 🐱 balli. Ecco il programma:</p>
<ul>
<li>🟨 quando si clicca la bandiera verde</li>
<li>🟧 <b>ripeti 10 volte</b>:
<ul><li>🟦 fai 10 passi</li><li>🟪 cambia costume</li><li>🟧 attendi 0,2 secondi</li><li>🟦 fai -10 passi (torna indietro)</li></ul></li>
<li>🟪 dì "Che bella festa!" per 2 secondi</li>
</ul>
<p>Quante volte cambia costume il gatto? <b>10</b>, una per ogni giro del ciclo. Quanti passi fa in tutto in avanti? 10 × 10 = <b>100</b>.</p>`
    },
    {
      type: "widget", title: "Gioco: sequenza o ciclo?",
      widget: "classify",
      caption: "Queste attività sono una sequenza di passi diversi, o lo stesso passo ripetuto tante volte (ciclo)?",
      options: {
        groups: ["➡️ Sequenza (passi diversi)", "🔁 Ciclo (ripetere)"],
        items: [["Preparare un panino", 0], ["Lavarsi i denti", 0], ["Accendere il computer e aprire Scratch", 0], ["Vestirsi per uscire", 0], ["Saltare la corda 20 volte", 1], ["Le lancette che girano", 1], ["Salire 15 gradini", 1], ["Il ritornello di una canzone", 1], ["Le stagioni ogni anno", 1]]
      }
    },
    {
      type: "widget", title: "Abbina il blocco a cosa fa",
      widget: "match",
      options: { pairs: [["quando si clicca 🏁", "fa partire il programma"], ["fai 10 passi", "sposta il personaggio"], ["ruota di 90°", "fa girare il personaggio"], ["ripeti 4 volte", "ripete i blocchi che ha dentro"], ["per sempre", "ripete senza fermarsi mai"], ["attendi 1 secondo", "fa una pausa"]] }
    },
    {
      type: "curiosity", title: "Lo sapevi che… la prima programmatrice era una donna dell'Ottocento?",
      html: `<p>Nel <b>1843</b> la matematica inglese <b>Ada Lovelace</b> scrisse le istruzioni per far calcolare dei numeri speciali alla "Macchina analitica" inventata da Charles Babbage. La macchina non fu mai costruita, ma quelle istruzioni sono considerate il <b>primo programma</b> della storia! Ada aveva già capito l'idea del <b>ciclo</b>: ripetere più volte le stesse operazioni.</p>
<p>Ancora prima, nel <b>1804</b>, il francese Joseph-Marie Jacquard inventò un telaio che tesseva disegni seguendo delle <b>schede perforate</b>: una specie di programma per stoffe!</p>`
    },
    {
      type: "curiosity", title: "Lo sapevi che… il primo «bug» era un insetto vero?",
      html: `<p>In inglese <b>bug</b> vuol dire "insetto". Nel <b>1947</b>, all'Università di Harvard, un computer gigante chiamato Mark II si bloccò. I tecnici aprirono la macchina e trovarono… una <b>falena</b> incastrata tra i contatti! 🦋 La attaccarono con lo scotch sul registro scrivendo "primo caso di bug trovato davvero". Il foglio esiste ancora, in un museo di Washington.</p>
<p>Gli ingegneri chiamavano "bug" i guasti già da prima, ma da allora la storia della falena è diventata famosissima, raccontata spesso dalla programmatrice <b>Grace Hopper</b>.</p>`
    },
    {
      type: "alternatives", title: "Altri modi per capirlo",
      intro: "Se i blocchi sullo schermo non ti convincono, prova a programmare in un altro modo.",
      tabs: [
        {
          label: "🃏 Coding unplugged (senza computer)",
          html: `<p>In Italia è nato <b>CodyRoby</b>, un gioco di carte inventato all'Università di Urbino per imparare il coding <b>senza computer</b>. Le carte hanno tre frecce: <b>avanti</b>, <b>gira a sinistra</b>, <b>gira a destra</b>.</p>
<ol><li>Disegna una scacchiera per terra con il gesso o con lo scotch.</li>
<li>Un bambino fa il <b>robot</b>, un altro il <b>programmatore</b>.</li>
<li>Il programmatore mette in fila le carte; il robot le esegue <b>alla lettera</b>, senza pensare.</li>
<li>Se il robot non arriva al traguardo, cercate insieme il bug!</li></ol>`
        },
        {
          label: "🧁 La ricetta",
          html: `<p>Una <b>ricetta</b> è un algoritmo per la cucina:</p>
<ul><li><b>Sequenza</b>: rompi le uova → aggiungi lo zucchero → mescola → aggiungi la farina → inforna.</li>
<li><b>Ciclo</b>: "<i>mescola finché</i> l'impasto è liscio", "<i>ripeti per ogni</i> pirottino: versa un cucchiaio di impasto".</li></ul>
<p>Se scambi l'ordine (inforni prima di mescolare 😱) il risultato è un disastro: proprio come in un programma!</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="200" fill="#fff7ed"/>
<text x="60" y="80" font-size="44" text-anchor="middle">🥚</text>
<text x="60" y="125" font-size="15" text-anchor="middle" fill="#0f172a">1. uova</text>
<text x="120" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="180" y="80" font-size="44" text-anchor="middle">🍚</text>
<text x="180" y="125" font-size="15" text-anchor="middle" fill="#0f172a">2. zucchero</text>
<text x="240" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="300" y="80" font-size="44" text-anchor="middle">🥣</text>
<text x="300" y="125" font-size="15" text-anchor="middle" fill="#0f172a">3. mescola</text>
<path d="M270,140 Q300,180 330,140" stroke="#7c3aed" stroke-width="4" fill="none"/>
<text x="300" y="190" font-size="15" text-anchor="middle" fill="#7c3aed" font-weight="bold">🔁 finché è liscio</text>
<text x="360" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="420" y="80" font-size="44" text-anchor="middle">🌾</text>
<text x="420" y="125" font-size="15" text-anchor="middle" fill="#0f172a">4. farina</text>
<text x="480" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="540" y="80" font-size="44" text-anchor="middle">🧁</text>
<text x="540" y="125" font-size="15" text-anchor="middle" fill="#0f172a">5. inforna</text>
</svg>`
        },
        {
          label: "🎵 Il ritornello",
          html: `<p>Le canzoni sono piene di <b>cicli</b>! Nei libri di musica, invece di riscrivere tutto, si usa il segno di <b>ritornello</b> 𝄆 … 𝄇: vuol dire "<b>ripeti</b> questa parte".</p>
<p>È esattamente come il blocco "ripeti 2 volte". I musicisti usano i cicli da secoli, molto prima dei computer! Prova a battere le mani: <b>ripeti 4 volte</b> [👏 👏 🦶].</p>`
        },
        {
          label: "🧊 Cicli con i cubetti 3D",
          html: `<p>Ogni giro del ciclo aggiunge una fila di cubetti. Cambia i numeri: con <b>5 giri da 2</b> quanti cubetti hai? E con 2 giri da 5? Il risultato è lo stesso (10), ma il programma è diverso!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 5, b: 2 }
        }
      ]
    },
    {
      type: "conceptMap", title: "Mappa: le idee del coding",
      nodes: [
        { id: "problema", label: "Un problema", x: 50, y: 6, color: "#ef4444", html: "Qualcosa da fare o da risolvere: disegnare un quadrato, portare il robot alla mela.", why: "Programmare comincia sempre da una domanda: che cosa voglio ottenere? Poi si divide il problema grande in pezzi più piccoli, che è il cuore del \"pensiero computazionale\"." },
        { id: "algoritmo", label: "Algoritmo", x: 50, y: 28, color: "#f97316", html: "Istruzioni chiare, finite, in ordine.", why: "La parola viene dal nome del matematico persiano <b>al-Khwarizmi</b> (IX secolo), che scrisse a Baghdad un libro su come fare i calcoli passo dopo passo. In latino il suo nome divenne \"Algorismus\"." },
        { id: "sequenza", label: "Sequenza", x: 18, y: 52, color: "#3b82f6", html: "Istruzioni eseguite una dopo l'altra.", why: "Il computer ha un solo \"esecutore\" principale che legge un'istruzione alla volta, dall'alto in basso: per questo l'ordine è fondamentale." },
        { id: "ciclo", label: "Ciclo (ripeti)", x: 50, y: 52, color: "#a855f7", html: "Ripetere istruzioni più volte.", why: "I computer sono bravissimi a ripetere senza stancarsi né sbagliare. Ada Lovelace nel 1843 già descriveva come far ripetere un gruppo di operazioni alla Macchina analitica." },
        { id: "evento", label: "Evento", x: 82, y: 52, color: "#eab308", html: "Ciò che fa partire il programma (clic sulla bandiera, un tasto).", why: "I programmi moderni \"aspettano\" che succeda qualcosa: un clic, un tocco sullo schermo. Per questo in Scratch ogni programma comincia con un blocco giallo a forma di cappello." },
        { id: "blocchi", label: "Linguaggio a blocchi", x: 25, y: 78, color: "#0ea5e9", html: "Istruzioni come mattoncini che si incastrano.", why: "Scratch è stato creato al MIT di Boston dal gruppo di Mitchel Resnick e pubblicato nel 2007. Si ispira al linguaggio Logo di Seymour Papert (anni '60), quello della tartaruga che disegna. I blocchi evitano gli errori di scrittura." },
        { id: "bug", label: "Bug e debug", x: 75, y: 78, color: "#16a34a", html: "L'errore e la sua correzione.", why: "Sbagliare è normale anche per i programmatori esperti! Si prova il programma, si guarda dove il risultato è diverso da quello atteso e si corregge: si impara proprio così." },
        { id: "computer", label: "Il computer esegue", x: 50, y: 95, color: "#475569", html: "Esegue le istruzioni alla lettera, velocissimo.", why: "Un computer moderno esegue miliardi di istruzioni al secondo, ma solo quelle che gli diamo: non ha intenzioni né fantasia. L'intelligenza del programma viene da chi lo scrive." }
      ],
      edges: [
        ["problema", "algoritmo", "si risolve con"], ["algoritmo", "sequenza", "ha"], ["algoritmo", "ciclo", "ha"], ["algoritmo", "evento", "parte con"],
        ["sequenza", "blocchi", "si scrive con"], ["ciclo", "blocchi", "si scrive con"], ["blocchi", "computer", "comanda"], ["computer", "bug", "se sbaglio"], ["bug", "algoritmo", "correggo"]
      ]
    },
    {
      type: "quiz", title: "Mini-quiz: i cicli",
      questions: [
        { type: "num", q: "«Ripeti 5 volte: salta 2 volte». Quanti salti fai in tutto?", answer: 10, tol: 0, explain: "5 giri × 2 salti = 10 salti." },
        { type: "mc", q: "Per disegnare un quadrato con un ciclo scrivo…", options: ["ripeti 4 volte: avanti, ruota di 90°", "ripeti 3 volte: avanti, ruota di 90°", "ripeti 4 volte: avanti"], answer: 0, explain: "Il quadrato ha 4 lati e 4 angoli retti (90°)." },
        { type: "tf", q: "Un errore in un programma si chiama bug.", answer: true, explain: "Bug = errore; debug = correggerlo." }
      ]
    }
  ],
  glossary: [
    { t: "Coding / programmare", d: "Scrivere istruzioni che un computer o un robot può eseguire." },
    { t: "Algoritmo", d: "Elenco di istruzioni chiare e ordinate per risolvere un problema." },
    { t: "Istruzione", d: "Un singolo comando: \"fai 10 passi\", \"gira a destra\"." },
    { t: "Programma", d: "Un algoritmo scritto in un linguaggio che il computer capisce." },
    { t: "Sequenza", d: "Istruzioni eseguite una dopo l'altra, in ordine." },
    { t: "Ciclo (loop)", d: "Blocco che fa ripetere le istruzioni che contiene." },
    { t: "Evento", d: "Ciò che fa partire il programma, come il clic sulla bandiera verde." },
    { t: "Bug", d: "Errore in un programma." },
    { t: "Debug", d: "Trovare e correggere gli errori." },
    { t: "Scratch", d: "Linguaggio di programmazione a blocchi creato al MIT nel 2007." },
    { t: "Unplugged", d: "Attività di coding fatte senza computer, con carte, gesso o il proprio corpo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cos'è un algoritmo?", options: ["Un elenco di istruzioni ordinate per risolvere un problema", "Un tipo di computer", "Un gioco con la palla"], answer: 0, explain: "Algoritmo = istruzioni chiare in ordine." },
      { type: "mc", q: "In una sequenza le istruzioni vengono eseguite…", options: ["tutte insieme", "una dopo l'altra, in ordine", "in ordine casuale"], answer: 1, explain: "Una dopo l'altra, dall'alto verso il basso." },
      { type: "mc", q: "A che cosa serve un ciclo?", options: ["A ripetere delle istruzioni", "A spegnere il computer", "A cambiare colore ai blocchi"], answer: 0, explain: "Il ciclo ripete i blocchi che ha dentro." },
      { type: "num", q: "«Ripeti 3 volte: fai 4 passi». Quanti passi fa il personaggio in tutto?", answer: 12, tol: 0, unit: "passi", explain: "3 × 4 = 12 passi." },
      { type: "num", q: "Per disegnare un triangolo con lati uguali uso «ripeti … volte: avanti, ruota». Quante volte?", answer: 3, tol: 0, explain: "Il triangolo ha 3 lati: ripeti 3 volte." },
      { type: "text", q: "Come si chiama un errore in un programma?", answer: ["bug", "un bug", "baco"], explain: "Bug (in italiano a volte «baco»)." },
      { type: "tf", q: "Nei linguaggi a blocchi le istruzioni si incastrano come pezzi di un puzzle.", answer: true, explain: "I blocchi che non possono stare insieme non si incastrano." },
      { type: "tf", q: "In un programma l'ordine delle istruzioni non è importante.", answer: false, explain: "L'ordine è fondamentale: prima le calze, poi le scarpe!" },
      { type: "order", q: "Metti in ordine il programma per far dire «Ciao» al gatto dopo che si clicca la bandiera.", items: ["quando si clicca la bandiera verde", "fai 10 passi", "dì «Ciao!» per 2 secondi"], explain: "Il blocco evento (bandiera) va sempre in cima." },
      { type: "mc", q: "Quale blocco fa partire il programma in Scratch?", options: ["ripeti 10 volte", "quando si clicca la bandiera verde", "ruota di 90 gradi"], answer: 1, explain: "È un blocco evento, giallo, a forma di cappello." },
      { type: "mc", q: "Chi scrisse nel 1843 quello che è considerato il primo programma della storia?", options: ["Ada Lovelace", "Leonardo da Vinci", "Galileo Galilei"], answer: 0, explain: "Ada Lovelace, per la Macchina analitica di Babbage." },
      { type: "mc", q: "Il robot deve andare avanti 4 caselle. Qual è il programma più corto?", options: ["avanti, avanti, avanti, avanti", "ripeti 4 volte: avanti", "ripeti 2 volte: avanti"], answer: 1, explain: "Il ciclo «ripeti 4 volte» fa lo stesso lavoro con meno blocchi." }
    ]
  }
});
