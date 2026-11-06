TOPIC('it', {
  id: "p2-tec-computer",
  title: "Il computer e le sue parti",
  intro: "Il <b>computer</b> 💻 è una macchina che <b>riceve</b> informazioni, le <b>elabora</b> (ci lavora sopra) e ci <b>dà</b> un risultato. Oggi scopriamo le sue parti: <b>tastiera</b> ⌨️, <b>mouse</b> 🖱️, <b>schermo</b> 🖥️ e <b>memoria</b> 🧠… e come lavorano insieme!",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Che cosa fa un computer? 🤔",
      html: `<p>Il computer lavora sempre in <b>tre passi</b>:</p>
<ol>
<li>📥 <b>ENTRATA</b> (in inglese <i>input</i>): noi gli diamo delle informazioni, per esempio scriviamo con la tastiera.</li>
<li>⚙️ <b>ELABORAZIONE</b>: il computer «pensa» e lavora sulle informazioni, velocissimo.</li>
<li>📤 <b>USCITA</b> (in inglese <i>output</i>): il computer ci mostra il risultato, per esempio sullo schermo.</li>
</ol>
<p>È come quando la maestra ti fa una domanda 👂 (entrata), tu pensi 🤔 (elaborazione) e rispondi 🗣️ (uscita)!</p>`
    },
    {
      type: "text",
      title: "Le parti per dare informazioni (entrata) 📥",
      html: `<ul>
<li>⌨️ <b>Tastiera</b>: ha tanti tasti con lettere, numeri e simboli. Serve per <b>scrivere</b>.</li>
<li>🖱️ <b>Mouse</b>: si muove sul tavolo e fa muovere la <b>freccia</b> sullo schermo. Con il <b>clic</b> scegliamo le cose.</li>
<li>👆 <b>Touchpad</b> e <b>schermo touch</b>: si toccano con il dito, come sul tablet.</li>
<li>🎤 <b>Microfono</b>: fa entrare la nostra <b>voce</b>.</li>
<li>📷 <b>Webcam</b>: una piccola telecamera che fa entrare le <b>immagini</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "Le parti che ci danno il risultato (uscita) 📤",
      html: `<ul>
<li>🖥️ <b>Schermo</b> (o <b>monitor</b>): ci fa <b>vedere</b> scritte, disegni e video.</li>
<li>🔊 <b>Casse</b> e <b>cuffie</b> 🎧: ci fanno <b>sentire</b> suoni e musica.</li>
<li>🖨️ <b>Stampante</b>: mette su <b>carta</b> quello che c'è sullo schermo.</li>
</ul>`
    },
    {
      type: "text",
      title: "Il cervello e la memoria 🧠",
      html: `<p>Dentro il computer, nascosti nella scatola (o sotto la tastiera, nel portatile), ci sono le parti più importanti:</p>
<ul>
<li>⚙️ Il <b>processore</b> (CPU): è il <b>cervello</b>. Fa i calcoli, miliardi in un secondo!</li>
<li>📝 La <b>memoria RAM</b>: è la memoria <b>«per adesso»</b>. Ricorda quello che stai facendo ora. Quando spegni il computer, si <b>cancella</b>.</li>
<li>💾 Il <b>disco</b> (o memoria di archivio): è la memoria <b>«per sempre»</b>. Conserva i disegni, le foto e i giochi anche quando il computer è spento.</li>
</ul>
<p>Per questo è importante <b>salvare</b> 💾 il lavoro: salvare vuol dire spostarlo dalla memoria «per adesso» a quella «per sempre»!</p>`
    },
    {
      type: "svg",
      title: "Le parti del computer",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f1f5f9"/>
<rect x="170" y="20" width="260" height="170" rx="12" fill="#1e293b"/>
<rect x="185" y="35" width="230" height="140" rx="4" fill="#38bdf8"/>
<circle cx="300" cy="28" r="4" fill="#94a3b8"/>
<rect x="285" y="190" width="30" height="30" fill="#475569"/>
<rect x="240" y="218" width="120" height="10" rx="4" fill="#475569"/>
<rect x="150" y="245" width="270" height="55" rx="8" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
<rect x="165" y="256" width="240" height="10" rx="2" fill="#94a3b8"/>
<rect x="165" y="272" width="240" height="10" rx="2" fill="#94a3b8"/>
<rect x="220" y="287" width="130" height="8" rx="2" fill="#94a3b8"/>
<ellipse cx="480" cy="270" rx="25" ry="35" fill="#e2e8f0" stroke="#475569" stroke-width="3"/>
<line x1="480" y1="235" x2="480" y2="262" stroke="#475569" stroke-width="2"/>
<rect x="30" y="60" width="90" height="200" rx="8" fill="#334155"/>
<circle cx="75" cy="90" r="8" fill="#22c55e"/>
<rect x="45" y="120" width="60" height="8" fill="#64748b"/>
<rect x="470" y="70" width="50" height="80" rx="10" fill="#0f172a"/>
<circle cx="495" cy="100" r="15" fill="#475569"/>
<circle cx="495" cy="133" r="9" fill="#475569"/>
<text x="300" y="110" font-size="22" text-anchor="middle" fill="#0f172a" font-weight="bold">SCHERMO</text>
<text x="285" y="315" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">tastiera</text>
<text x="545" y="310" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">mouse</text>
<text x="75" y="285" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">unità centrale</text>
<text x="75" y="160" font-size="13" text-anchor="middle" fill="#ffffff">CPU</text>
<text x="75" y="180" font-size="13" text-anchor="middle" fill="#ffffff">memoria</text>
<text x="545" y="60" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">cassa</text>
</svg>`,
      caption: "Un computer fisso (desktop): l'unità centrale contiene il processore (CPU) e la memoria."
    },
    {
      type: "widget",
      title: "Entrata o uscita?",
      widget: "classify",
      options: {
        groups: ["📥 Entrata (input)", "📤 Uscita (output)"],
        items: [
          ["⌨️ tastiera", 0],
          ["🖱️ mouse", 0],
          ["🎤 microfono", 0],
          ["📷 webcam", 0],
          ["🖥️ schermo", 1],
          ["🖨️ stampante", 1],
          ["🔊 casse", 1],
          ["🎧 cuffie", 1]
        ]
      },
      caption: "Le parti di entrata fanno ENTRARE le informazioni nel computer; quelle di uscita le fanno USCIRE verso di noi."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le parti",
      questions: [
        { type: "mc", q: "Con che cosa scrivi le lettere al computer?", options: ["Con la tastiera", "Con la stampante", "Con le casse"], answer: 0, explain: "La tastiera serve per scrivere." },
        { type: "mc", q: "Qual è il «cervello» del computer?", options: ["Lo schermo", "Il processore (CPU)", "Il mouse"], answer: 1, explain: "Il processore fa tutti i calcoli." },
        { type: "tf", q: "La stampante è una parte di uscita.", answer: true, explain: "Fa uscire il lavoro su carta." }
      ]
    },
    {
      type: "3d",
      title: "Il computer in 3D: tutto è collegato al processore",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0, z: 0, r: 0.55, color: "#f59e0b", label: "Processore (CPU)" },
          { x: -1.6, y: 0.9, z: 0, r: 0.35, color: "#22c55e", label: "Tastiera" },
          { x: -1.6, y: -0.9, z: 0.3, r: 0.35, color: "#22c55e", label: "Mouse" },
          { x: -1.1, y: 0, z: 1.4, r: 0.3, color: "#22c55e", label: "Microfono" },
          { x: 1.6, y: 0.9, z: 0, r: 0.4, color: "#3b82f6", label: "Schermo" },
          { x: 1.6, y: -0.9, z: 0.3, r: 0.32, color: "#3b82f6", label: "Stampante" },
          { x: 1.1, y: 0, z: 1.4, r: 0.3, color: "#3b82f6", label: "Casse" },
          { x: 0, y: 1.5, z: -0.8, r: 0.35, color: "#a855f7", label: "RAM (memoria per adesso)" },
          { x: 0, y: -1.5, z: -0.8, r: 0.38, color: "#ec4899", label: "Disco (memoria per sempre)" }
        ],
        bonds: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [7, 8]]
      },
      caption: "Ruota il modello. Verde = entrata, blu = uscita, viola e rosa = memorie. Al centro, in arancione, il processore che comanda tutto."
    },
    {
      type: "example",
      title: "Esempio pratico: scrivo e stampo un biglietto 💌",
      html: `<p>Giulia vuole fare un biglietto per la festa della mamma:</p>
<ol>
<li>⌨️ Scrive «Ti voglio bene, mamma!» con la <b>tastiera</b>. → <i>entrata</i></li>
<li>🖱️ Con il <b>mouse</b> sceglie un colore rosso e un cuore. → <i>entrata</i></li>
<li>⚙️ Il <b>processore</b> mette insieme lettere, colori e disegni. → <i>elaborazione</i></li>
<li>🖥️ Giulia vede il biglietto sullo <b>schermo</b>. → <i>uscita</i></li>
<li>💾 Clicca su <b>Salva</b>, così il biglietto va nel <b>disco</b>.</li>
<li>🖨️ Lo <b>stampa</b> su carta. → <i>uscita</i> 🎉</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio pratico: accendere e spegnere bene 🔌",
      html: `<p>Il computer va trattato con cura. Ecco le regole d'oro:</p>
<ul>
<li>🔘 Per accendere premi il <b>pulsante di accensione</b> e aspetta che sia pronto.</li>
<li>💾 Prima di chiudere, <b>salva</b> il lavoro.</li>
<li>⏻ Per spegnere usa il comando <b>Spegni</b> sullo schermo: non staccare la spina!</li>
<li>🥤 Niente bevande vicino alla tastiera.</li>
<li>🪑 Siediti con la schiena dritta, lo schermo davanti agli occhi, e fai una <b>pausa</b> ogni tanto per riposare gli occhi 👀.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Trova le parti del computer",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e0f2fe"/>
<rect x="150" y="30" width="260" height="160" rx="10" fill="#1e293b"/>
<rect x="163" y="43" width="234" height="134" rx="4" fill="#a7f3d0"/>
<rect x="265" y="190" width="30" height="25" fill="#475569"/>
<rect x="150" y="235" width="250" height="50" rx="8" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
<ellipse cx="460" cy="260" rx="22" ry="30" fill="#f8fafc" stroke="#475569" stroke-width="3"/>
<rect x="30" y="80" width="80" height="190" rx="8" fill="#334155"/>
<rect x="470" y="40" width="100" height="70" rx="8" fill="#f8fafc" stroke="#475569" stroke-width="3"/>
<rect x="490" y="25" width="60" height="18" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="268" y="8" width="24" height="14" rx="4" fill="#0f172a"/>
</svg>`,
        spots: [
          { x: 280, y: 110, label: "Schermo" },
          { x: 275, y: 260, label: "Tastiera" },
          { x: 460, y: 260, label: "Mouse" },
          { x: 70, y: 175, label: "Unità centrale" },
          { x: 520, y: 75, label: "Stampante" },
          { x: 280, y: 15, label: "Webcam" }
        ]
      },
      caption: "Clicca ogni punto e scegli il nome giusto."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🐘",
      html: `<p>Uno dei primi computer, l'<b>ENIAC</b>, fu acceso negli Stati Uniti nel <b>1946</b>. Pesava circa <b>27 tonnellate</b> (come 4 elefanti!) e occupava una stanza di circa 170 metri quadrati, grande come tre aule di scuola. Eppure faceva meno calcoli dello smartphone che hai in casa!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🇮🇹",
      html: `<p>Uno dei primi <b>computer da scrivania</b> della storia è <b>italiano</b>! Si chiamava <b>Programma 101</b> ed è stato costruito dall'<b>Olivetti</b> di Ivrea, in Piemonte, e presentato a New York nel <b>1965</b>. Lo usò anche la NASA, l'agenzia spaziale americana. E il primo <b>mouse</b>, inventato da Douglas Engelbart nel 1964, era una scatolina di <b>legno</b> con due rotelle! 🖱️</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il computer",
      intro: "Il computer ti sembra misterioso? Prova a immaginarlo in un altro modo!",
      tabs: [
        {
          label: "👩‍🍳 Il computer è una cucina",
          html: `<p>Immagina un <b>cuoco</b> in cucina:</p>
<ul>
<li>👩‍🍳 il <b>cuoco</b> è il <b>processore</b>: lavora e prepara;</li>
<li>🍽️ il <b>tavolo da lavoro</b> è la <b>RAM</b>: ci metti sopra solo quello che stai usando adesso. Quando chiudi la cucina, il tavolo viene sparecchiato;</li>
<li>🗄️ la <b>dispensa</b> è il <b>disco</b>: lì conservi tutto, anche per mesi;</li>
<li>📝 le <b>ordinazioni</b> dei clienti sono l'<b>entrata</b> (tastiera, mouse);</li>
<li>🍝 il <b>piatto pronto</b> è l'<b>uscita</b> (schermo, stampante).</li>
</ul>
<p>Più grande è il tavolo (RAM), più cose il cuoco può preparare insieme!</p>`
        },
        {
          label: "🧍 Il computer è come il corpo",
          html: `<p>Anche il nostro corpo funziona con <b>entrata → elaborazione → uscita</b>!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<circle cx="300" cy="70" r="45" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>
<circle cx="283" cy="62" r="6" fill="#0f172a"/>
<circle cx="317" cy="62" r="6" fill="#0f172a"/>
<path d="M285 90 Q300 102 315 90" stroke="#7c2d12" stroke-width="4" fill="none"/>
<rect x="265" y="118" width="70" height="100" rx="12" fill="#60a5fa"/>
<text x="120" y="50" font-size="16" text-anchor="middle" fill="#15803d" font-weight="bold">occhi = webcam</text>
<text x="120" y="80" font-size="16" text-anchor="middle" fill="#15803d" font-weight="bold">orecchie = microfono</text>
<text x="120" y="110" font-size="16" text-anchor="middle" fill="#15803d" font-weight="bold">dita = tastiera</text>
<text x="300" y="245" font-size="16" text-anchor="middle" fill="#b45309" font-weight="bold">cervello = processore + memoria</text>
<text x="480" y="60" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">bocca = casse</text>
<text x="480" y="90" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">mano che disegna</text>
<text x="480" y="112" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">= stampante</text>
<text x="120" y="150" font-size="18" text-anchor="middle" fill="#15803d">ENTRATA</text>
<text x="480" y="150" font-size="18" text-anchor="middle" fill="#1d4ed8">USCITA</text>
</svg>`
        },
        {
          label: "💡 Il linguaggio delle lampadine",
          html: `<p>Il computer, dentro, capisce solo <b>due cose</b>: corrente <b>accesa</b> (1) o <b>spenta</b> (0). Come una fila di lampadine!</p>
<p>Con tante lampadine accese e spente si possono scrivere numeri, lettere, colori. Ogni lampadina si chiama <b>bit</b>. Con 8 lampadine (8 bit = 1 <b>byte</b>) si può scrivere una lettera.</p>
<p>Prova: muovi i cubetti qui sotto. Ogni cubetto è un'informazione che il computer tiene in memoria: la memoria è come un enorme magazzino di cubetti accesi e spenti!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 8, b: 4 }
        },
        {
          label: "🎮 Gioco: chi fa che cosa?",
          html: `<p>Abbina ogni parte al suo lavoro.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Tastiera", "scrivere"],
              ["Mouse", "muovere la freccia e cliccare"],
              ["Schermo", "vedere"],
              ["Casse", "sentire"],
              ["Processore", "fare i calcoli"],
              ["Disco", "conservare per sempre"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: come funziona il computer",
      nodes: [
        { id: "computer", label: "Computer", x: 50, y: 6, color: "#6366f1", html: "<p>Una macchina che riceve, elabora e restituisce informazioni.</p>", why: "<p>La parola viene dall'inglese <i>to compute</i>, «calcolare», che viene dal latino <i>computare</i>. All'inizio i computer servivano solo a fare calcoli difficilissimi, per esempio per la scienza.</p>" },
        { id: "input", label: "Entrata (input)", x: 15, y: 32, color: "#22c55e", html: "<p>Tastiera, mouse, microfono, webcam, touch.</p>", why: "<p>Il computer non sa niente da solo: ha bisogno che qualcuno gli dia informazioni. La <b>tastiera</b> viene dalle vecchie macchine da scrivere dell'Ottocento: per questo le lettere sono in ordine «QWERTY» e non alfabetico.</p>" },
        { id: "cpu", label: "Processore (CPU)", x: 50, y: 32, color: "#f59e0b", html: "<p>Il cervello che fa i calcoli.</p>", why: "<p>È fatto di miliardi di minuscoli interruttori chiamati <b>transistor</b>, inventati nel 1947. Il primo microprocessore, del 1971, fu progettato anche da un italiano: <b>Federico Faggin</b>.</p>" },
        { id: "output", label: "Uscita (output)", x: 85, y: 32, color: "#3b82f6", html: "<p>Schermo, casse, cuffie, stampante.</p>", why: "<p>Il risultato del lavoro deve tornare a noi in una forma che i nostri sensi capiscono: immagini per gli occhi, suoni per le orecchie, fogli da toccare.</p>" },
        { id: "ram", label: "RAM", x: 30, y: 62, color: "#a855f7", html: "<p>Memoria «per adesso»: si cancella quando spegni.</p>", why: "<p>La RAM è velocissima ma ha bisogno di corrente elettrica per ricordare: senza corrente, gli interruttori dentro di lei tornano tutti spenti.</p>" },
        { id: "disco", label: "Disco", x: 70, y: 62, color: "#ec4899", html: "<p>Memoria «per sempre»: conserva i file anche da spento.</p>", why: "<p>Il disco salva le informazioni in modo che restino anche senza corrente: una volta su dischi magnetici che giravano, oggi spesso su chip speciali (SSD), come nelle chiavette USB.</p>" },
        { id: "salvare", label: "Salvare", x: 50, y: 82, color: "#14b8a6", html: "<p>Spostare il lavoro dalla RAM al disco.</p>", why: "<p>Se non salvi e la corrente salta, tutto quello che era solo nella RAM si perde. Per questo il simbolo di «salva» è un vecchio <b>dischetto</b> 💾.</p>" },
        { id: "bit", label: "Bit: 0 e 1", x: 50, y: 97, color: "#64748b", html: "<p>Il computer capisce solo acceso (1) e spento (0).</p>", why: "<p>Con solo due simboli si può scrivere qualsiasi numero: lo dimostrò il matematico tedesco <b>Leibniz</b> già nel 1703, molto prima che esistessero i computer.</p>" }
      ],
      edges: [
        ["computer", "input", "riceve dall'"],
        ["computer", "cpu", "elabora con il"],
        ["computer", "output", "restituisce con l'"],
        ["input", "cpu", "→"],
        ["cpu", "output", "→"],
        ["cpu", "ram", "usa la"],
        ["ram", "salvare", "con il comando"],
        ["salvare", "disco", "va nel"],
        ["cpu", "bit", "lavora con i"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: la memoria",
      questions: [
        { type: "mc", q: "Quale memoria si cancella quando spegni il computer?", options: ["La RAM", "Il disco", "Nessuna"], answer: 0, explain: "La RAM è la memoria «per adesso»." },
        { type: "tf", q: "Se salvo il disegno, lo ritrovo anche domani.", answer: true, explain: "Salvando, il disegno va nel disco, la memoria «per sempre»." },
        { type: "order", q: "Metti in ordine come lavora il computer.", items: ["Entrata", "Elaborazione", "Uscita"], explain: "Prima riceve, poi elabora, poi dà il risultato." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare 📌",
      html: `<ul>
<li>Il computer lavora in 3 passi: <b>entrata → elaborazione → uscita</b>.</li>
<li>Entrata: <b>tastiera, mouse, microfono, webcam</b>.</li>
<li>Uscita: <b>schermo, casse, stampante</b>.</li>
<li>Il <b>processore</b> è il cervello; la <b>RAM</b> è la memoria «per adesso», il <b>disco</b> quella «per sempre».</li>
<li>Ricorda di <b>salvare</b> e di spegnere con il comando giusto!</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Computer", d: "Macchina che riceve informazioni, le elabora e dà un risultato." },
    { t: "Tastiera", d: "Parte di entrata con i tasti per scrivere." },
    { t: "Mouse", d: "Parte di entrata che muove la freccia sullo schermo." },
    { t: "Schermo (monitor)", d: "Parte di uscita che mostra immagini e scritte." },
    { t: "Processore (CPU)", d: "Il «cervello» del computer, che fa i calcoli." },
    { t: "RAM", d: "Memoria veloce che si cancella quando si spegne il computer." },
    { t: "Disco", d: "Memoria che conserva i file anche a computer spento." },
    { t: "Input / Output", d: "Entrata / uscita delle informazioni." },
    { t: "Salvare", d: "Conservare il lavoro nella memoria «per sempre»." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di queste è una parte di ENTRATA?", options: ["Stampante", "Mouse", "Casse"], answer: 1, explain: "Il mouse fa entrare nel computer i nostri comandi." },
      { type: "mc", q: "Quale di queste è una parte di USCITA?", options: ["Schermo", "Tastiera", "Microfono"], answer: 0, explain: "Lo schermo ci mostra il risultato." },
      { type: "text", q: "Come si chiama il «cervello» del computer?", answer: ["processore", "cpu", "il processore", "la cpu"], explain: "Il processore, o CPU." },
      { type: "order", q: "Metti in ordine i 3 passi del computer.", items: ["Entrata (input)", "Elaborazione", "Uscita (output)"], explain: "Riceve, elabora, restituisce." },
      { type: "tf", q: "La RAM conserva i file anche a computer spento.", answer: false, explain: "La RAM si cancella; è il disco che conserva i file." },
      { type: "mc", q: "Che cosa devi fare prima di chiudere un disegno?", options: ["Salvarlo", "Staccare la spina", "Spegnere lo schermo"], answer: 0, explain: "Salvando lo ritrovi la volta dopo." },
      { type: "mc", q: "Con che cosa senti la musica del computer?", options: ["Con la webcam", "Con le casse o le cuffie", "Con il mouse"], answer: 1, explain: "Casse e cuffie sono parti di uscita per i suoni." },
      { type: "tf", q: "Il microfono fa entrare la voce nel computer.", answer: true, explain: "È una parte di entrata." },
      { type: "mc", q: "Come si spegne correttamente il computer?", options: ["Staccando la spina", "Con il comando Spegni", "Chiudendo lo schermo con forza"], answer: 1, explain: "Il comando Spegni chiude tutto con ordine." },
      { type: "text", q: "Come si chiama la parte con i tasti per scrivere?", answer: ["tastiera", "la tastiera"], explain: "La tastiera." },
      { type: "mc", q: "Come si chiamava il computer da scrivania italiano del 1965?", options: ["Programma 101", "ENIAC", "Super Mario"], answer: 0, explain: "Il Programma 101 dell'Olivetti." }
    ]
  }
});
