TOPIC('it', {
  id: "p1-tec-coding-unplugged",
  title: "Coding senza computer",
  intro: "I computer e i robot sono bravissimi… ma fanno <b>solo quello che gli diciamo</b>! 🤖 Per farli funzionare bisogna dare <b>istruzioni chiare</b> e <b>nell'ordine giusto</b>. Questo si chiama <b>coding</b>. E la cosa bella è che si può imparare <b>senza computer</b>, con il corpo, le frecce e un po' di fantasia! ➡️⬆️",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Che cos'è un'istruzione?",
      html: `<p>Un'<b>istruzione</b> è un ordine preciso che dice <b>cosa fare</b>: «Fai un passo avanti», «Gira a destra», «Batti le mani».</p>
<p>Tante istruzioni messe in fila formano una <b>sequenza</b>. Se la sequenza serve a risolvere un problema, si chiama <b>algoritmo</b>.</p>
<p>👉 Anche tu usi gli algoritmi ogni giorno senza saperlo! Per lavarti i denti:</p>
<ol>
<li>Prendo lo spazzolino 🪥</li>
<li>Metto il dentifricio</li>
<li>Spazzolo i denti</li>
<li>Sciacquo la bocca 💧</li>
<li>Lavo e metto a posto lo spazzolino</li>
</ol>
<p>Se metti il dentifricio <b>dopo</b> aver spazzolato… non funziona! L'<b>ordine</b> è importantissimo.</p>`
    },
    {
      type: "svg",
      title: "Il robot sulla scacchiera",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#f1f5f9"/>
<g stroke="#334155" stroke-width="2">
<rect x="30" y="30" width="65" height="65" fill="#ffffff"/><rect x="95" y="30" width="65" height="65" fill="#e2e8f0"/><rect x="160" y="30" width="65" height="65" fill="#ffffff"/><rect x="225" y="30" width="65" height="65" fill="#e2e8f0"/>
<rect x="30" y="95" width="65" height="65" fill="#e2e8f0"/><rect x="95" y="95" width="65" height="65" fill="#ffffff"/><rect x="160" y="95" width="65" height="65" fill="#e2e8f0"/><rect x="225" y="95" width="65" height="65" fill="#ffffff"/>
<rect x="30" y="160" width="65" height="65" fill="#ffffff"/><rect x="95" y="160" width="65" height="65" fill="#e2e8f0"/><rect x="160" y="160" width="65" height="65" fill="#ffffff"/><rect x="225" y="160" width="65" height="65" fill="#e2e8f0"/>
<rect x="30" y="225" width="65" height="65" fill="#e2e8f0"/><rect x="95" y="225" width="65" height="65" fill="#ffffff"/><rect x="160" y="225" width="65" height="65" fill="#e2e8f0"/><rect x="225" y="225" width="65" height="65" fill="#ffffff"/>
</g>
<text x="62" y="272" font-size="40" text-anchor="middle">🤖</text>
<text x="257" y="77" font-size="40" text-anchor="middle">⭐</text>
<text x="192" y="207" font-size="38" text-anchor="middle">🪨</text>
<path d="M62 245 V60 M62 60 H240" stroke="#ef4444" stroke-width="5" fill="none" stroke-dasharray="10 6"/>
<text x="440" y="60" font-size="22" text-anchor="middle" fill="#0f172a" font-weight="bold">Programma:</text>
<text x="440" y="100" font-size="26" text-anchor="middle" fill="#b91c1c">⬆️ ⬆️ ⬆️</text>
<text x="440" y="140" font-size="26" text-anchor="middle" fill="#b91c1c">➡️ ➡️ ➡️</text>
<text x="440" y="190" font-size="18" text-anchor="middle" fill="#166534">Il robot arriva alla stella!</text>
<text x="440" y="225" font-size="18" text-anchor="middle" fill="#334155">e non sbatte contro il sasso 🪨</text>
<text x="440" y="275" font-size="16" text-anchor="middle" fill="#64748b">1 freccia = 1 casella</text>
</svg>`,
      caption: "Il robot parte in basso a sinistra. Con 3 passi in su e 3 a destra raggiunge la stella ⭐, evitando il sasso."
    },
    {
      type: "remember",
      title: "Le regole del buon programmatore",
      html: `<p>1️⃣ Le istruzioni devono essere <b>chiare</b>: «vai di là» ❌ — «fai 2 passi avanti» ✅</p>
<p>2️⃣ Devono essere <b>in ordine</b>: prima, poi, dopo, infine.</p>
<p>3️⃣ Il robot <b>non pensa</b>: fa esattamente quello che c'è scritto, anche se è sbagliato!</p>
<p>4️⃣ Se qualcosa non va, c'è un <b>bug</b> (un errore): lo cerchiamo e lo correggiamo. Sbagliare fa parte del gioco! 🐞</p>`
    },
    {
      type: "widget",
      title: "Gioco: le frecce del robot",
      widget: "match",
      options: { pairs: [["⬆️", "un passo avanti (su)"], ["⬇️", "un passo indietro (giù)"], ["➡️", "un passo a destra"], ["⬅️", "un passo a sinistra"], ["🔁", "ripeti"], ["🛑", "fermati"]] },
      caption: "Ogni simbolo è un comando. Abbinalo al suo significato."
    },
    {
      type: "quiz",
      title: "Mini-quiz: istruzioni in ordine",
      questions: [
        { type: "order", q: "Metti in ordine l'algoritmo per lavarsi le mani:", items: ["Apro l'acqua 🚰", "Metto il sapone 🧼", "Strofino bene le mani", "Sciacquo", "Mi asciugo 🧻"], explain: "Prima si bagnano le mani, poi sapone, strofinare, sciacquare e asciugare." },
        { type: "tf", q: "Un robot capisce l'istruzione «vai un po' di là».", answer: false, explain: "Il robot ha bisogno di istruzioni precise: quanti passi e in che direzione." },
        { type: "mc", q: "Un errore in un programma si chiama…", options: ["bug", "byte", "bus"], answer: 0, explain: "Bug, che in inglese vuol dire «insetto»." }
      ]
    },
    {
      type: "example",
      title: "Esempio: il gioco del robot umano 🧍➡️🤖",
      html: `<p>In palestra o in cortile disegnate una griglia di quadrati per terra con il gesso (o usate le piastrelle).</p>
<ol>
<li>Un bambino fa il <b>robot</b> 🤖 e si mette sulla casella di partenza.</li>
<li>Un compagno fa il <b>programmatore</b> 🧑‍💻 e scrive su un foglio le frecce per raggiungere il tesoro 💎.</li>
<li>Il programmatore legge le frecce una alla volta e il robot esegue.</li>
<li>Il robot arriva al tesoro? 🎉 Se no, cercate il <b>bug</b> insieme e correggete!</li>
</ol>
<p>Poi scambiatevi i ruoli.</p>`
    },
    {
      type: "example",
      title: "Esempio: il panino del papà-robot 🥪",
      html: `<p>Un gioco famoso nelle scuole di tutto il mondo: chiedi a un adulto di fare il <b>robot</b> che prepara un panino, seguendo <b>esattamente</b> le tue istruzioni.</p>
<p>🧒 «Metti la marmellata sul pane!»<br>🤖 (il papà appoggia il barattolo chiuso sopra il pane 😂)</p>
<p>Il robot non sa che deve <b>aprire</b> il barattolo e usare il <b>coltello</b>! Devi dirgli tutto:</p>
<p>«Apri il barattolo. Prendi il coltello. Infila il coltello nella marmellata. Spalma la marmellata sulla fetta di pane.» ✅</p>
<p>Ecco perché i programmatori devono essere <b>molto precisi</b>.</p>`
    },
    {
      type: "text",
      title: "Ripetere: il ciclo 🔁",
      html: `<p>Se il robot deve fare 5 passi avanti, possiamo scrivere: ⬆️ ⬆️ ⬆️ ⬆️ ⬆️</p>
<p>Ma è più veloce dire: <b>🔁 ripeti 5 volte: ⬆️</b></p>
<p>Questo si chiama <b>ciclo</b> (in inglese <i>loop</i>). Anche le canzoni hanno i cicli: il ritornello si ripete!</p>
<p>💃 Prova questa danza-programma: <b>ripeti 3 volte</b> [batti le mani 👏, salta 🦘, gira su te stesso 🔄].</p>`
    },
    {
      type: "widget",
      title: "Gioco: istruzione chiara o confusa?",
      widget: "classify",
      options: {
        groups: ["✅ Chiara (il robot capisce)", "❌ Confusa (il robot non capisce)"],
        items: [["fai 3 passi avanti", 0], ["gira a destra", 0], ["ripeti 2 volte: salta", 0], ["prendi la palla rossa", 0], ["vai un po' di là", 1], ["fai qualcosa di bello", 1], ["cammina finché ti va", 1], ["prendi quella cosa", 1]]
      },
      caption: "Un robot ha bisogno di istruzioni precise. Quali capisce e quali no?"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il primo «bug» era una vera falena? 🦋",
      html: `<p>Nel <b>1947</b>, negli Stati Uniti, un enorme computer chiamato <b>Harvard Mark II</b> si bloccò. Gli scienziati del gruppo di <b>Grace Hopper</b> cercarono il problema e trovarono… una <b>falena</b> rimasta incastrata tra i circuiti! La attaccarono sul quaderno con lo scotch e scrissero: «primo caso di <b>bug</b> (insetto) trovato». Da allora gli errori nei programmi si chiamano <b>bug</b> 🐞, e correggerli si dice <b>debug</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… la prima programmatrice era una donna, 180 anni fa? 👩‍💻",
      html: `<p>Nel <b>1843</b>, in Inghilterra, <b>Ada Lovelace</b> scrisse le istruzioni per una macchina calcolatrice inventata dal suo amico Charles Babbage, la «macchina analitica». La macchina non fu mai costruita, ma le istruzioni di Ada sono considerate il <b>primo programma</b> della storia! Ada immaginava già che un giorno le macchine avrebbero potuto comporre anche musica. 🎶</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per imparare il coding",
      intro: "<p>Il coding si può imparare in tanti modi diversi. Prova quello che ti piace di più!</p>",
      tabs: [
        {
          label: "🇮🇹 CodyRoby",
          html: `<p><b>CodyRoby</b> è un gioco di carte inventato in Italia, all'Università di Urbino, dal professor <b>Alessandro Bogliolo</b>, per la «Settimana del codice» (CodeWeek).</p>
<p>Ogni carta è un comando: 🟨 <b>vai avanti</b>, 🟥 <b>gira a destra</b>, 🟦 <b>gira a sinistra</b>. Su una scacchiera, i giocatori mettono in fila le carte per guidare Roby il robot fino al traguardo!</p>`
        },
        {
          label: "🐝 Il robot ape",
          html: `<p>In tantissime scuole del mondo (soprattutto in Inghilterra, dove è nata) si usa <b>Bee-Bot</b>, un robottino a forma di <b>ape</b> 🐝.</p>
<p>Sulla schiena ha dei tasti con le frecce: premi ⬆️ ⬆️ ➡️ ⬆️ e poi <b>GO</b>, e l'ape si muove sul tappeto seguendo il tuo programma. Ogni passo è lungo 15 cm!</p>`
        },
        {
          label: "🍳 La ricetta",
          html: `<p>Una <b>ricetta</b> è proprio un algoritmo! Ha gli <b>ingredienti</b> (cosa ti serve) e i <b>passi</b> in ordine (cosa fare).</p>
<p>🥤 <b>Algoritmo del frullato di banana:</b><br>1. Sbuccia la banana 🍌<br>2. Tagliala a pezzetti (con un adulto!)<br>3. Mettila nel frullatore con il latte 🥛<br>4. Frulla per 30 secondi<br>5. Versa nel bicchiere e bevi! 😋</p>
<p>Se fai il passo 4 prima del passo 3… frulli il vuoto!</p>`
        },
        {
          label: "🎨 Pixel art",
          html: `<p>Anche disegnare può essere coding! Sul quaderno a quadretti segui il codice riga per riga: <b>⬜ = lascia bianco</b>, <b>🟥 = colora</b>.</p>
<p>Riga 1: ⬜🟥⬜🟥⬜<br>Riga 2: 🟥🟥🟥🟥🟥<br>Riga 3: ⬜🟥🟥🟥⬜<br>Riga 4: ⬜⬜🟥⬜⬜</p>
<p>Cosa viene fuori? Un <b>cuore</b>! ❤️ Le immagini sullo schermo del computer sono fatte proprio così, con tanti quadratini chiamati <b>pixel</b>.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#ffffff"/>
<g stroke="#94a3b8" stroke-width="2">
<rect x="200" y="20" width="40" height="40" fill="#ffffff"/><rect x="240" y="20" width="40" height="40" fill="#ef4444"/><rect x="280" y="20" width="40" height="40" fill="#ffffff"/><rect x="320" y="20" width="40" height="40" fill="#ef4444"/><rect x="360" y="20" width="40" height="40" fill="#ffffff"/>
<rect x="200" y="60" width="40" height="40" fill="#ef4444"/><rect x="240" y="60" width="40" height="40" fill="#ef4444"/><rect x="280" y="60" width="40" height="40" fill="#ef4444"/><rect x="320" y="60" width="40" height="40" fill="#ef4444"/><rect x="360" y="60" width="40" height="40" fill="#ef4444"/>
<rect x="200" y="100" width="40" height="40" fill="#ffffff"/><rect x="240" y="100" width="40" height="40" fill="#ef4444"/><rect x="280" y="100" width="40" height="40" fill="#ef4444"/><rect x="320" y="100" width="40" height="40" fill="#ef4444"/><rect x="360" y="100" width="40" height="40" fill="#ffffff"/>
<rect x="200" y="140" width="40" height="40" fill="#ffffff"/><rect x="240" y="140" width="40" height="40" fill="#ffffff"/><rect x="280" y="140" width="40" height="40" fill="#ef4444"/><rect x="320" y="140" width="40" height="40" fill="#ffffff"/><rect x="360" y="140" width="40" height="40" fill="#ffffff"/>
</g>
<text x="300" y="220" font-size="20" text-anchor="middle" fill="#b91c1c" font-weight="bold">4 righe di codice = un cuore di pixel</text>
</svg>`
        },
        {
          label: "🧊 Il robot nel 3D",
          html: `<p>Immagina che ogni cubetto sia una casella della scacchiera del robot. Ci sono 4 file da 4 caselle: <b>16 caselle</b>. Gira la scacchiera e prova a inventare un percorso dall'angolo vicino a te fino all'angolo opposto: quante frecce servono?</p>`,
          scene: "blocks",
          options: { mode: "array", a: 4, b: 4 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del coding",
      nodes: [
        { id: "coding", label: "Coding", x: 50, y: 8, color: "#8b5cf6", html: "<p>Dare istruzioni a una macchina in un linguaggio che capisce.</p>", why: "<p>I computer sono fatti di circuiti che sanno solo eseguire comandi semplicissimi. Il coding è il modo con cui le persone dicono loro cosa fare.</p>" },
        { id: "istr", label: "Istruzione", x: 18, y: 30, color: "#22c55e", html: "<p>Un comando preciso: «un passo avanti».</p>", why: "<p>Le macchine non sanno indovinare: per questo ogni istruzione deve avere un solo significato possibile.</p>" },
        { id: "seq", label: "Sequenza", x: 50, y: 34, color: "#3b82f6", html: "<p>Istruzioni messe in fila, nell'ordine giusto.</p>", why: "<p>Il computer esegue un'istruzione alla volta, dalla prima all'ultima. Cambiando l'ordine, cambia il risultato.</p>" },
        { id: "algo", label: "Algoritmo", x: 82, y: 30, color: "#f97316", html: "<p>Una sequenza che risolve un problema.</p>", why: "<p>La parola viene dal nome di <b>al-Khwarizmi</b>, un matematico persiano vissuto a Baghdad più di 1100 anni fa, che scrisse libri su come fare i calcoli passo dopo passo.</p>" },
        { id: "ciclo", label: "Ciclo (loop) 🔁", x: 22, y: 64, color: "#eab308", html: "<p>Ripeti più volte le stesse istruzioni.</p>", why: "<p>Serve per non scrivere mille volte la stessa cosa. Le macchine possono ripetere senza mai stancarsi.</p>" },
        { id: "bug", label: "Bug 🐞", x: 50, y: 66, color: "#ef4444", html: "<p>Un errore nel programma.</p>", why: "<p>Il nome si diffuse dopo che, nel 1947, il gruppo di Grace Hopper trovò una falena nel computer Harvard Mark II. Correggere un errore si dice «debug».</p>" },
        { id: "robot", label: "Robot e computer", x: 80, y: 64, color: "#14b8a6", html: "<p>Le macchine che eseguono i programmi.</p>", why: "<p>La parola «robot» è stata inventata nel 1920 dallo scrittore ceco Karel Čapek: viene da <i>robota</i>, che vuol dire «lavoro faticoso».</p>" },
        { id: "ada", label: "Ada Lovelace", x: 35, y: 92, color: "#ec4899", html: "<p>La prima programmatrice (1843).</p>", why: "<p>Scrisse un algoritmo per la macchina analitica di Charles Babbage, più di 100 anni prima dei computer elettronici.</p>" },
        { id: "unplugged", label: "Unplugged", x: 68, y: 92, color: "#64748b", html: "<p>Coding senza computer: con il corpo, le carte, le frecce.</p>", why: "<p>«Unplugged» vuol dire «scollegato dalla presa». Il pensiero del programmatore (pensiero computazionale) si allena anche senza schermi.</p>" }
      ],
      edges: [
        ["coding", "istr", "usa"], ["coding", "seq", ""], ["coding", "algo", ""], ["istr", "seq", "in fila formano"], ["seq", "algo", "se risolve un problema"], ["seq", "ciclo", "si ripete con"], ["seq", "bug", "può avere"], ["algo", "robot", "eseguito da"], ["robot", "ada", ""], ["ciclo", "unplugged", ""], ["bug", "unplugged", ""]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: frecce e cicli",
      questions: [
        { type: "num", q: "🔁 Ripeti 4 volte: ⬆️. Quanti passi fa il robot?", answer: 4, explain: "Il ciclo ripete la freccia 4 volte: 4 passi." },
        { type: "mc", q: "Nel disegno, quale programma porta il robot alla stella?", options: ["⬆️⬆️⬆️ ➡️➡️➡️", "➡️➡️ ⬆️", "⬇️⬇️⬇️"], answer: 0, explain: "3 passi su e 3 a destra." },
        { type: "tf", q: "Un algoritmo è una sequenza di istruzioni per risolvere un problema.", answer: true, explain: "Esatto, come una ricetta!" }
      ]
    }
  ],
  glossary: [
    { t: "Coding", d: "Scrivere istruzioni che una macchina può eseguire." },
    { t: "Istruzione", d: "Un comando chiaro e preciso." },
    { t: "Sequenza", d: "Istruzioni messe in fila nell'ordine giusto." },
    { t: "Algoritmo", d: "Una sequenza di istruzioni che risolve un problema." },
    { t: "Ciclo (loop)", d: "Istruzioni ripetute più volte." },
    { t: "Bug", d: "Un errore nel programma." },
    { t: "Debug", d: "Trovare e correggere gli errori." },
    { t: "Unplugged", d: "Senza computer, «scollegato»." },
    { t: "Pixel", d: "Quadratino di colore che forma le immagini sullo schermo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Un algoritmo è…", options: ["un tipo di robot", "una sequenza di istruzioni per risolvere un problema", "un gioco con la palla"], answer: 1, explain: "Come una ricetta: passi in ordine." },
      { type: "tf", q: "Il robot fa esattamente quello che gli diciamo, anche se è sbagliato.", answer: true, explain: "Il robot non pensa: esegue." },
      { type: "order", q: "Metti in ordine l'algoritmo per piantare un seme:", items: ["Metto la terra nel vaso 🪴", "Faccio un buchino con il dito", "Metto il seme nel buchino 🌱", "Copro con la terra", "Annaffio 💧"], explain: "Ogni passo prepara il successivo." },
      { type: "mc", q: "Quale istruzione è chiara per un robot?", options: ["vai di là", "fai 2 passi avanti", "fai qualcosa"], answer: 1, explain: "Dice quanti passi e in che direzione." },
      { type: "num", q: "Il programma è ➡️➡️➡️⬆️⬆️. Quanti passi fa il robot in tutto?", answer: 5, explain: "3 + 2 = 5 passi." },
      { type: "text", q: "Come si chiama un errore in un programma?", answer: ["bug", "un bug"], explain: "Bug = insetto: ricordi la falena del 1947?" },
      { type: "mc", q: "🔁 «Ripeti 3 volte: salta» è…", options: ["un ciclo", "un bug", "un pixel"], answer: 0, explain: "Ripetere istruzioni è un ciclo (loop)." },
      { type: "mc", q: "Chi è considerata la prima programmatrice della storia?", options: ["Ada Lovelace", "Grace Hopper", "Marie Curie"], answer: 0, explain: "Ada Lovelace, nel 1843." },
      { type: "tf", q: "Per fare coding serve per forza un computer.", answer: false, explain: "Si può fare anche unplugged: con il corpo, le carte, le frecce." },
      { type: "mc", q: "Il robot è su una casella e deve andare 2 caselle a sinistra. Programma giusto:", options: ["➡️➡️", "⬅️⬅️", "⬆️⬆️"], answer: 1, explain: "Due frecce verso sinistra." },
      { type: "order", q: "Metti in ordine il lavoro del programmatore:", items: ["scrivo le istruzioni", "il robot le esegue", "controllo se arriva giusto", "se c'è un bug, lo correggo"], explain: "Scrivere, provare, controllare, correggere: è il ciclo del programmatore." }
    ]
  }
});
