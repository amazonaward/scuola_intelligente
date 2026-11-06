TOPIC('it', {
  id: "p2-tec-algoritmi",
  title: "Gli algoritmi di tutti i giorni",
  intro: "Sai che ogni mattina segui degli <b>algoritmi</b>? 🪥 Lavarsi i denti, preparare lo zaino 🎒, fare una torta 🎂… Un <b>algoritmo</b> è una lista di <b>istruzioni in ordine</b> per arrivare a un risultato. I computer e i robot 🤖 funzionano proprio così!",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Che cos'è un algoritmo? 📝",
      html: `<p>Un <b>algoritmo</b> è una <b>sequenza di istruzioni</b> (passi) che, seguita dall'inizio alla fine, risolve un problema.</p>
<p>Un buon algoritmo è:</p>
<ul>
<li>🔢 <b>ordinato</b>: i passi sono in fila, uno dopo l'altro;</li>
<li>🎯 <b>preciso</b>: ogni istruzione si capisce senza dubbi;</li>
<li>🏁 <b>finito</b>: prima o poi arriva alla fine.</li>
</ul>
<p>Esempio: <b>lavarsi le mani</b> 🧼</p>
<ol>
<li>Apri l'acqua 🚰</li>
<li>Bagna le mani</li>
<li>Metti il sapone 🧼</li>
<li>Strofina per 20 secondi</li>
<li>Sciacqua</li>
<li>Chiudi l'acqua</li>
<li>Asciuga le mani 🧻</li>
</ol>`
    },
    {
      type: "text",
      title: "L'ordine è importante! 🔀",
      html: `<p>Se cambi l'ordine dei passi, il risultato può diventare… un disastro! 😱</p>
<table>
<tr><th>✅ Ordine giusto</th><th>❌ Ordine sbagliato</th></tr>
<tr><td>1. Metto le calze 🧦<br>2. Metto le scarpe 👟</td><td>1. Metto le scarpe 👟<br>2. Metto le calze 🧦<br><i>…le calze sopra le scarpe?!</i></td></tr>
<tr><td>1. Apro l'ombrello ☂️<br>2. Esco sotto la pioggia</td><td>1. Esco sotto la pioggia<br>2. Apro l'ombrello<br><i>…sono già bagnato!</i></td></tr>
</table>
<p>Un computer esegue le istruzioni <b>esattamente</b> nell'ordine in cui le scrivi: non si accorge se c'è un errore!</p>`
    },
    {
      type: "svg",
      title: "L'algoritmo della torta 🎂",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fff7ed"/>
<rect x="200" y="10" width="200" height="40" rx="20" fill="#22c55e"/>
<text x="300" y="37" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">INIZIO</text>
<line x1="300" y1="50" x2="300" y2="65" stroke="#334155" stroke-width="3"/>
<polygon points="293,62 307,62 300,70" fill="#334155"/>
<rect x="160" y="70" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="95" font-size="16" text-anchor="middle" fill="#713f12">1. Rompi 3 uova nella ciotola</text>
<line x1="300" y1="108" x2="300" y2="120" stroke="#334155" stroke-width="3"/>
<polygon points="293,117 307,117 300,125" fill="#334155"/>
<rect x="160" y="125" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="150" font-size="16" text-anchor="middle" fill="#713f12">2. Aggiungi zucchero e farina</text>
<line x1="300" y1="163" x2="300" y2="175" stroke="#334155" stroke-width="3"/>
<polygon points="293,172 307,172 300,180" fill="#334155"/>
<rect x="160" y="180" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="205" font-size="16" text-anchor="middle" fill="#713f12">3. Mescola bene</text>
<line x1="300" y1="218" x2="300" y2="230" stroke="#334155" stroke-width="3"/>
<polygon points="293,227 307,227 300,235" fill="#334155"/>
<rect x="160" y="235" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="260" font-size="16" text-anchor="middle" fill="#713f12">4. Cuoci in forno 30 minuti</text>
<line x1="300" y1="273" x2="300" y2="280" stroke="#334155" stroke-width="3"/>
<rect x="200" y="280" width="200" height="36" rx="18" fill="#ef4444"/>
<text x="300" y="304" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">FINE: torta!</text>
<text x="80" y="160" font-size="50" text-anchor="middle">🥚</text>
<text x="520" y="200" font-size="50" text-anchor="middle">🎂</text>
</svg>`,
      caption: "Un algoritmo si può disegnare come un diagramma: si parte da INIZIO, si seguono le frecce e si arriva a FINE."
    },
    {
      type: "quiz",
      title: "Mini-quiz: in ordine!",
      questions: [
        { type: "order", q: "Metti in ordine: lavarsi i denti 🪥", items: ["Prendo lo spazzolino", "Metto il dentifricio", "Spazzolo i denti", "Sciacquo la bocca"], explain: "Prima si prepara lo spazzolino, poi si lava, poi si sciacqua." },
        { type: "tf", q: "In un algoritmo l'ordine dei passi non conta.", answer: false, explain: "L'ordine conta moltissimo: calze prima delle scarpe!" },
        { type: "mc", q: "Un algoritmo è…", options: ["una lista di istruzioni in ordine", "un tipo di animale", "un gioco a carte"], answer: 0, explain: "È una sequenza ordinata di istruzioni." }
      ]
    },
    {
      type: "text",
      title: "Istruzioni precise per un robot 🤖",
      html: `<p>Un robot non è furbo come te: fa <b>solo</b> quello che gli dici, <b>parola per parola</b>.</p>
<p>Se dici al robot «<i>Prepara la merenda</i>», lui non sa da dove cominciare! 🤷 Devi spiegare ogni passo:</p>
<ol>
<li>Apri l'armadietto.</li>
<li>Prendi il pane.</li>
<li>Prendi il coltello per spalmare.</li>
<li>Spalma la marmellata sul pane.</li>
</ol>
<p>Per muovere un robot su una scacchiera si usano frecce semplici:</p>
<p style="font-size:1.2em">⬆️ <b>avanti di 1</b> &nbsp; ↪️ <b>gira a destra</b> &nbsp; ↩️ <b>gira a sinistra</b></p>
<p>Scrivere istruzioni per un computer o un robot si chiama <b>programmare</b> (o fare <b>coding</b>).</p>`
    },
    {
      type: "svg",
      title: "Aiuta il robot a raggiungere la mela 🍎",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<g stroke="#94a3b8" stroke-width="2" fill="#e0f2fe">
<rect x="40" y="20" width="70" height="70"/><rect x="110" y="20" width="70" height="70"/><rect x="180" y="20" width="70" height="70"/><rect x="250" y="20" width="70" height="70"/>
<rect x="40" y="90" width="70" height="70"/><rect x="110" y="90" width="70" height="70"/><rect x="180" y="90" width="70" height="70"/><rect x="250" y="90" width="70" height="70"/>
<rect x="40" y="160" width="70" height="70"/><rect x="110" y="160" width="70" height="70"/><rect x="180" y="160" width="70" height="70"/><rect x="250" y="160" width="70" height="70"/>
<rect x="40" y="230" width="70" height="70"/><rect x="110" y="230" width="70" height="70"/><rect x="180" y="230" width="70" height="70"/><rect x="250" y="230" width="70" height="70"/>
</g>
<rect x="55" y="245" width="40" height="40" rx="8" fill="#64748b"/>
<circle cx="68" cy="260" r="5" fill="#facc15"/>
<circle cx="82" cy="260" r="5" fill="#facc15"/>
<rect x="66" y="272" width="18" height="4" fill="#facc15"/>
<circle cx="285" cy="55" r="20" fill="#ef4444"/>
<rect x="283" y="30" width="4" height="10" fill="#78350f"/>
<path d="M75 245 L75 125 L285 125 L285 80" stroke="#f97316" stroke-width="6" fill="none" stroke-dasharray="10 6"/>
<text x="460" y="60" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">Il programma:</text>
<text x="460" y="95" font-size="17" text-anchor="middle" fill="#0f172a">avanti, avanti</text>
<text x="460" y="125" font-size="17" text-anchor="middle" fill="#0f172a">gira a destra</text>
<text x="460" y="155" font-size="17" text-anchor="middle" fill="#0f172a">avanti, avanti, avanti</text>
<text x="460" y="185" font-size="17" text-anchor="middle" fill="#0f172a">gira a sinistra</text>
<text x="460" y="215" font-size="17" text-anchor="middle" fill="#0f172a">avanti</text>
<text x="460" y="260" font-size="18" text-anchor="middle" fill="#15803d" font-weight="bold">Mela raggiunta!</text>
</svg>`,
      caption: "Il robot parte in basso a sinistra guardando in su. Segui il percorso arancione con il dito e controlla ogni istruzione."
    },
    {
      type: "widget",
      title: "Istruzione precisa o confusa?",
      widget: "classify",
      options: {
        groups: ["🎯 Precisa: il robot capisce", "🤷 Confusa: il robot non capisce"],
        items: [
          ["Fai 2 passi avanti", 0],
          ["Vai un po' più in là", 1],
          ["Gira a destra", 0],
          ["Fai una cosa bella", 1],
          ["Prendi la palla rossa", 0],
          ["Sistema tutto", 1],
          ["Ripeti 3 volte: salta", 0],
          ["Fai come vuoi", 1]
        ]
      },
      caption: "Un'istruzione è precisa quando dice esattamente che cosa fare, quanto e quale cosa."
    },
    {
      type: "text",
      title: "Due trucchi degli algoritmi: RIPETI e SE 🔁❓",
      html: `<p><b>🔁 RIPETI (ciclo)</b><br>Invece di scrivere «avanti, avanti, avanti, avanti», scrivo: <b>«ripeti 4 volte: avanti»</b>. Più corto e più chiaro!</p>
<p>Esempio: per salire le scale 🪜 → <i>ripeti finché non arrivi in cima: sali un gradino</i>.</p>
<p><b>❓ SE… ALLORA… ALTRIMENTI (condizione)</b><br>A volte bisogna scegliere:</p>
<p>☔ <i><b>SE</b> piove, <b>ALLORA</b> prendo l'ombrello, <b>ALTRIMENTI</b> prendo il cappellino.</i></p>
<p>🚦 <i><b>SE</b> il semaforo è verde, <b>ALLORA</b> attraverso, <b>ALTRIMENTI</b> aspetto.</i></p>
<p>Con <b>sequenze</b>, <b>cicli</b> e <b>condizioni</b> si possono costruire tutti i programmi del mondo, anche i videogiochi! 🎮</p>`
    },
    {
      type: "3d",
      title: "RIPETI con i cubetti 🧊",
      scene: "blocks",
      options: { mode: "array", a: 3, b: 4 },
      caption: "L'algoritmo è: «RIPETI 3 volte: metti una fila di 4 cubetti». Muovi i cursori per cambiare quante volte ripetere e quanti cubetti mettere ogni volta. Quanti cubetti in tutto?"
    },
    {
      type: "example",
      title: "Esempio pratico: lo zaino per la scuola 🎒",
      html: `<p>Ogni sera Tommaso segue il suo algoritmo:</p>
<ol>
<li>📅 Guarda l'orario di domani.</li>
<li>🔁 <b>Ripeti</b> per ogni materia: metti nello zaino il libro e il quaderno.</li>
<li>✏️ Controlla l'astuccio.</li>
<li>❓ <b>Se</b> domani c'è educazione fisica, <b>allora</b> prepara le scarpe da ginnastica 👟.</li>
<li>🚪 Metti lo zaino vicino alla porta.</li>
</ol>
<p>Ci sono una <b>sequenza</b>, un <b>ciclo</b> (ripeti) e una <b>condizione</b> (se)! Così non dimentica niente.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il gioco del robot umano 🧍‍♂️🤖",
      html: `<p>In classe si gioca a coppie: uno fa il <b>programmatore</b>, l'altro il <b>robot</b>.</p>
<ul>
<li>Il programmatore scrive su un foglio le frecce per portare il robot dal banco alla lavagna: ⬆️⬆️↪️⬆️⬆️⬆️</li>
<li>Il robot esegue <b>solo</b> quello che c'è scritto, senza pensare.</li>
<li>Se il robot sbatte contro una sedia… c'è un <b>errore</b> nel programma! Si chiama <b>bug</b> 🐞.</li>
<li>Il programmatore trova l'errore e lo corregge: si chiama <b>debug</b>.</li>
</ul>
<p>Sbagliare va benissimo: anche i programmatori più bravi trovano e correggono errori ogni giorno!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 📜",
      html: `<p>La parola <b>algoritmo</b> viene dal nome di un grande matematico, <b>al-Khwarizmi</b>, che visse circa <b>1200 anni fa</b> a <b>Baghdad</b> (oggi in Iraq). Scrisse un libro per spiegare come fare i calcoli con i numeri che usiamo ancora oggi, 0 1 2 3… Quando il libro fu tradotto in latino, il suo nome diventò «Algoritmi»!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🦋",
      html: `<p>Perché un errore nei programmi si chiama <b>bug</b> (in inglese «insetto»)? Nel <b>1947</b>, negli Stati Uniti, un computer gigante si guastò: dentro gli scienziati del gruppo di <b>Grace Hopper</b> trovarono una <b>falena</b> rimasta incastrata! La attaccarono al loro quaderno con lo scotch, scrivendo che avevano trovato il primo «bug» vero. Il quaderno con la falena si trova ancora in un museo!</p>`
    },
    {
      type: "widget",
      title: "La storia degli algoritmi",
      widget: "timeline",
      options: {
        unit: "anni",
        events: [
          { year: -300, label: "Euclide scrive un algoritmo per i numeri", icon: "📐" },
          { year: 825, label: "Al-Khwarizmi a Baghdad", icon: "📜" },
          { year: 1843, label: "Ada Lovelace scrive il primo programma", icon: "👩‍💻" },
          { year: 1947, label: "Il primo «bug»: una falena!", icon: "🦋" },
          { year: 2007, label: "Nasce Scratch, il coding a blocchi", icon: "🐱" },
          { year: 2013, label: "Prima Europe Code Week", icon: "🇪🇺" }
        ]
      },
      caption: "Gli algoritmi esistono da molto prima dei computer!"
    },
    {
      type: "alternatives",
      title: "Altri modi per capire gli algoritmi",
      intro: "Gli algoritmi si possono imparare anche senza computer: con il corpo, con la musica, con le carte!",
      tabs: [
        {
          label: "🃏 CodyRoby, il gioco italiano",
          html: `<p><b>CodyRoby</b> è un gioco di carte inventato in <b>Italia</b> dal professor <b>Alessandro Bogliolo</b> dell'Università di Urbino per la <b>Code Week</b>.</p>
<ul>
<li>Ci sono carte con <b>tre frecce</b>: ⬆️ avanti, ↩️ gira a sinistra, ↪️ gira a destra.</li>
<li>Su una scacchiera disegnata per terra o su un foglio, un bambino (o una pedina) è il robot <b>Roby</b>.</li>
<li>Si mettono le carte in fila per fare il <b>programma</b>, poi Roby lo esegue.</li>
</ul>
<p>Si gioca senza schermi: si chiama <b>coding unplugged</b> («programmare senza spina») 🔌.</p>`
        },
        {
          label: "💃 La danza è un algoritmo",
          html: `<p>Ogni balletto è un algoritmo! Prova questo:</p>
<p>🎵 <b>RIPETI 2 volte:</b><br>👏 batti le mani<br>🦶 batti il piede destro<br>🔄 gira su te stesso<br><b>FINE RIPETI</b><br>🙌 alza le braccia!</p>
<p>Anche le <b>canzoni</b> funzionano così: il <b>ritornello</b> è un ciclo che si ripete. Anche i balli di gruppo e i giochi con le mani (come «batti batti le manine») sono algoritmi!</p>`
        },
        {
          label: "🔢 Saltelli sulla retta",
          html: `<p>Ecco un algoritmo con i numeri: <b>parti da 0. RIPETI 5 volte: salta avanti di 3.</b> Dove arrivi?</p>
<p>Prova sulla retta qui sotto: 0 → 3 → 6 → 9 → 12 → <b>15</b>. È la tabellina del 3! Le tabelline sono algoritmi che ripetono un'addizione.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [3, 6, 9, 12, 15] }
        },
        {
          label: "🍝 Ricette nel mondo",
          html: `<p>Le <b>ricette</b> sono gli algoritmi più antichi e più amati del mondo!</p>
<ul>
<li>🇮🇹 La <b>pasta al pomodoro</b>: ingredienti (= i dati) + passi in ordine (= le istruzioni).</li>
<li>🇯🇵 Gli <b>origami</b> giapponesi: istruzioni precise per piegare la carta, passo dopo passo, fino a una gru di carta 🦢.</li>
<li>🧶 I <b>ferri da maglia</b>: «ripeti 20 volte: un punto diritto, un punto rovescio» è proprio un ciclo!</li>
</ul>
<p>Una tavoletta di argilla di <b>Babilonia</b> di circa 3700 anni fa contiene ricette scritte: alcune delle più antiche del mondo.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa degli algoritmi",
      nodes: [
        { id: "algoritmo", label: "Algoritmo", x: 50, y: 6, color: "#6366f1", html: "<p>Una sequenza di istruzioni ordinate, precise e finite per risolvere un problema.</p>", why: "<p>Il nome viene da <b>al-Khwarizmi</b>, matematico di Baghdad del IX secolo. Ma il primo algoritmo famoso è ancora più antico: quello di <b>Euclide</b> (circa 300 a.C.) per trovare il più grande divisore comune di due numeri.</p>" },
        { id: "sequenza", label: "Sequenza", x: 18, y: 32, color: "#22c55e", html: "<p>I passi uno dopo l'altro, in ordine.</p>", why: "<p>Molte azioni dipendono da quelle prima: non puoi cuocere la torta se non hai mescolato gli ingredienti. Per questo l'ordine è importante.</p>" },
        { id: "ciclo", label: "Ciclo (RIPETI)", x: 50, y: 32, color: "#f59e0b", html: "<p>Ripetere le stesse istruzioni più volte.</p>", why: "<p>Le macchine sono bravissime a ripetere senza stancarsi. Con un ciclo un programma corto può fare tantissimo lavoro: il computer ripete milioni di volte senza annoiarsi!</p>" },
        { id: "condizione", label: "Condizione (SE)", x: 82, y: 32, color: "#ef4444", html: "<p>Scegliere che cosa fare in base a una situazione.</p>", why: "<p>Il mondo cambia (piove, non piove) e il programma deve adattarsi. Con il <b>SE</b> il computer controlla se una cosa è vera o falsa e poi decide.</p>" },
        { id: "preciso", label: "Istruzioni precise", x: 18, y: 62, color: "#0ea5e9", html: "<p>Ogni istruzione deve essere chiara, senza dubbi.</p>", why: "<p>Il computer non sa «indovinare» quello che vogliamo: esegue alla lettera. Per questo i linguaggi di programmazione hanno regole molto rigide.</p>" },
        { id: "programma", label: "Programma", x: 50, y: 62, color: "#a855f7", html: "<p>Un algoritmo scritto in una lingua che il computer capisce.</p>", why: "<p>La prima persona a scrivere un programma fu <b>Ada Lovelace</b>, nel <b>1843</b>, per una macchina calcolatrice ideata da Charles Babbage che non fu mai finita. Per questo è ricordata come la prima programmatrice della storia.</p>" },
        { id: "bug", label: "Bug e debug", x: 82, y: 62, color: "#64748b", html: "<p>Bug = errore. Debug = trovare e correggere l'errore.</p>", why: "<p>Nel 1947 il gruppo di Grace Hopper trovò una vera falena dentro un computer. Da allora «bug» è il nome di tutti gli errori nei programmi.</p>" },
        { id: "coding", label: "Coding", x: 50, y: 92, color: "#14b8a6", html: "<p>Imparare a programmare, anche giocando, con o senza computer.</p>", why: "<p>Il coding insegna a dividere un problema grande in pezzi piccoli: questo modo di ragionare si chiama <b>pensiero computazionale</b>. Le Indicazioni nazionali lo prevedono già dalla scuola primaria.</p>" }
      ],
      edges: [
        ["algoritmo", "sequenza", "è fatto di"],
        ["algoritmo", "ciclo", "può usare"],
        ["algoritmo", "condizione", "può usare"],
        ["sequenza", "preciso", "di"],
        ["algoritmo", "programma", "scritto per il PC ="],
        ["programma", "bug", "può avere"],
        ["programma", "coding", "si impara col"],
        ["ciclo", "programma", "dentro il"],
        ["condizione", "programma", "dentro il"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: ripeti e se",
      questions: [
        { type: "mc", q: "«Ripeti 3 volte: salta». Quanti salti fai?", options: ["1", "3", "6"], answer: 1, explain: "Il ciclo ripete il salto 3 volte." },
        { type: "mc", q: "«SE piove ALLORA prendo l'ombrello». Oggi c'è il sole. Prendo l'ombrello?", options: ["Sì", "No"], answer: 1, explain: "La condizione «piove» è falsa, quindi non prendo l'ombrello." },
        { type: "text", q: "Come si chiama in inglese un errore in un programma?", answer: ["bug", "un bug"], explain: "Bug, come l'insetto trovato nel 1947!" }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare 📌",
      html: `<ul>
<li>Un <b>algoritmo</b> è una lista di istruzioni <b>ordinate</b>, <b>precise</b> e <b>finite</b>.</li>
<li>Le ricette e le routine di ogni giorno sono algoritmi.</li>
<li>🔁 <b>Ripeti</b> = ciclo; ❓ <b>Se… allora… altrimenti</b> = condizione.</li>
<li>Un algoritmo scritto per il computer è un <b>programma</b>; un errore è un <b>bug</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Algoritmo", d: "Sequenza ordinata di istruzioni precise per risolvere un problema." },
    { t: "Istruzione", d: "Un singolo passo che dice che cosa fare." },
    { t: "Sequenza", d: "Passi messi in ordine, uno dopo l'altro." },
    { t: "Ciclo", d: "Istruzioni che si ripetono più volte (RIPETI)." },
    { t: "Condizione", d: "Una scelta: SE succede una cosa ALLORA fai questo, ALTRIMENTI quello." },
    { t: "Programma", d: "Un algoritmo scritto in un linguaggio che il computer capisce." },
    { t: "Coding", d: "Programmare; anche giocando, senza computer." },
    { t: "Bug", d: "Un errore in un programma." },
    { t: "Debug", d: "Trovare e correggere gli errori." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cos'è un algoritmo?", options: ["Una sequenza di istruzioni in ordine", "Un disegno a caso", "Un tipo di computer"], answer: 0, explain: "Istruzioni ordinate, precise e finite." },
      { type: "order", q: "Metti in ordine: vestirsi per uscire.", items: ["Metto le calze", "Metto le scarpe", "Allaccio le scarpe", "Esco di casa"], explain: "Le calze vanno prima delle scarpe!" },
      { type: "order", q: "Metti in ordine: preparare un tè.", items: ["Scaldo l'acqua", "Verso l'acqua nella tazza", "Metto la bustina", "Aspetto qualche minuto", "Tolgo la bustina e bevo"], explain: "Ogni passo dipende da quello prima." },
      { type: "tf", q: "Un robot capisce l'istruzione «Fai una cosa bella».", answer: false, explain: "È un'istruzione confusa: il robot ha bisogno di istruzioni precise." },
      { type: "mc", q: "Quale istruzione è PRECISA?", options: ["Vai di là", "Fai 3 passi avanti", "Muoviti un po'"], answer: 1, explain: "Dice esattamente che cosa fare e quanto." },
      { type: "num", q: "«Ripeti 4 volte: metti 2 caramelle nel sacchetto». Quante caramelle ci sono alla fine?", answer: 8, tol: 0, unit: "caramelle", explain: "4 volte 2 = 8." },
      { type: "mc", q: "«SE il semaforo è rosso ALLORA mi fermo ALTRIMENTI attraverso». Il semaforo è verde: che cosa faccio?", options: ["Mi fermo", "Attraverso", "Torno a casa"], answer: 1, explain: "La condizione «rosso» è falsa: vale ALTRIMENTI." },
      { type: "text", q: "Come si chiama trovare e correggere gli errori di un programma?", answer: ["debug", "debugging", "il debug"], explain: "Debug: togliere i bug." },
      { type: "mc", q: "Da dove viene la parola «algoritmo»?", options: ["Dal nome di un matematico di Baghdad", "Da un robot giapponese", "Da un videogioco"], answer: 0, explain: "Dal nome di al-Khwarizmi." },
      { type: "tf", q: "Si può fare coding anche senza computer.", answer: true, explain: "Si chiama coding unplugged: con carte, frecce, giochi." },
      { type: "num", q: "Parti da 0 e «ripeti 5 volte: salta avanti di 2». A che numero arrivi?", answer: 10, tol: 0, explain: "0 → 2 → 4 → 6 → 8 → 10." },
      { type: "mc", q: "Chi è considerata la prima programmatrice della storia?", options: ["Ada Lovelace", "Cleopatra", "Grace Kelly"], answer: 0, explain: "Ada Lovelace scrisse il primo programma nel 1843." }
    ]
  }
});
