TOPIC('it', {
  id: "p4-tec-condizioni",
  title: "Se… allora: le condizioni",
  intro: "<i>Se piove, allora prendo l'ombrello. ☔ Altrimenti prendo il cappellino. 🧢</i> Ogni giorno prendi tantissime decisioni così, senza accorgertene. Anche i computer, i videogiochi e i robot decidono con le <b>condizioni</b>: <b>SE</b> qualcosa è vero, <b>ALLORA</b> fanno un'azione, <b>ALTRIMENTI</b> ne fanno un'altra. Scopriamo come si \"insegna a decidere\" a una macchina!",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è una condizione",
      html: `<p>Una <b>condizione</b> è una domanda a cui si può rispondere solo <b>SÌ</b> o <b>NO</b>, cioè <b>VERO</b> o <b>FALSO</b>.</p>
<ul>
<li>"Piove?" → sì / no ✅</li>
<li>"Il semaforo è rosso?" → sì / no ✅</li>
<li>"Il punteggio è maggiore di 100?" → sì / no ✅</li>
<li>"Che ore sono?" → ❌ <b>non</b> è una condizione: la risposta non è sì o no!</li>
</ul>
<p>Il computer controlla la condizione e, a seconda della risposta, sceglie <b>quale strada</b> seguire nel programma. Questa scelta si chiama <b>selezione</b> o <b>istruzione condizionale</b>.</p>`
    },
    {
      type: "text",
      title: "2. SE… ALLORA (if… then)",
      html: `<p>La forma più semplice è:</p>
<p style="font-size:1.2em">🟨 <b>SE</b> <i>condizione</i> <b>ALLORA</b> <i>azione</i></p>
<p>Se la condizione è <b>vera</b>, il computer fa l'azione. Se è <b>falsa</b>, la salta e va avanti.</p>
<ul>
<li>SE la batteria è sotto il 20% ALLORA mostra "Batteria scarica" 🔋</li>
<li>SE il gatto tocca il pesce ALLORA aggiungi 1 punto 🐱🐟</li>
<li>SE fa buio ALLORA accendi i lampioni 💡</li>
</ul>
<p>In inglese, la lingua dei programmatori, <b>SE</b> si dice <b>if</b> e <b>ALLORA</b> si dice <b>then</b>.</p>`
    },
    {
      type: "text",
      title: "3. SE… ALLORA… ALTRIMENTI (if… else)",
      html: `<p>Spesso vogliamo fare una cosa se la condizione è vera e <b>un'altra</b> se è falsa:</p>
<p style="font-size:1.2em">🟨 <b>SE</b> <i>condizione</i> <b>ALLORA</b> <i>azione A</i> <b>ALTRIMENTI</b> <i>azione B</i></p>
<ul>
<li>SE la risposta è giusta ALLORA dì "Bravo!" 🎉 ALTRIMENTI dì "Riprova!" 🔁</li>
<li>SE il semaforo è verde ALLORA attraversa 🚶 ALTRIMENTI aspetta ✋</li>
</ul>
<p><b>Altrimenti</b> in inglese si dice <b>else</b>. Con l'altrimenti il programma fa <b>sempre</b> una delle due azioni, <b>mai tutte e due</b>, e <b>mai nessuna</b>.</p>`
    },
    {
      type: "svg",
      title: "Il diagramma di flusso: il rombo delle decisioni",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<ellipse cx="300" cy="35" rx="70" ry="24" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="300" y="42" font-size="18" font-weight="bold" fill="#14532d" text-anchor="middle">INIZIO</text>
<line x1="300" y1="59" x2="300" y2="85" stroke="#1e293b" stroke-width="3"/>
<polygon points="300,85 410,145 300,205 190,145" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="300" y="140" font-size="18" font-weight="bold" fill="#78350f" text-anchor="middle">Piove?</text>
<text x="300" y="162" font-size="14" fill="#78350f" text-anchor="middle">(condizione)</text>
<line x1="190" y1="145" x2="110" y2="145" stroke="#1e293b" stroke-width="3"/>
<line x1="110" y1="145" x2="110" y2="225" stroke="#1e293b" stroke-width="3"/>
<line x1="410" y1="145" x2="490" y2="145" stroke="#1e293b" stroke-width="3"/>
<line x1="490" y1="145" x2="490" y2="225" stroke="#1e293b" stroke-width="3"/>
<text x="150" y="135" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">SÌ</text>
<text x="450" y="135" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">NO</text>
<rect x="30" y="225" width="160" height="50" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<text x="110" y="256" font-size="17" fill="#1e3a8a" text-anchor="middle">Prendi l'ombrello ☔</text>
<rect x="410" y="225" width="160" height="50" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<text x="490" y="256" font-size="17" fill="#1e3a8a" text-anchor="middle">Prendi il cappello 🧢</text>
<line x1="110" y1="275" x2="110" y2="305" stroke="#1e293b" stroke-width="3"/>
<line x1="490" y1="275" x2="490" y2="305" stroke="#1e293b" stroke-width="3"/>
<line x1="110" y1="305" x2="490" y2="305" stroke="#1e293b" stroke-width="3"/>
<text x="300" y="330" font-size="16" fill="#334155" text-anchor="middle">poi si va avanti: esci di casa 🚪</text>
</svg>`,
      caption: "Nei diagrammi di flusso la condizione si disegna in un rombo: ha un'entrata e due uscite, SÌ (vero) e NO (falso)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: riconoscere le condizioni",
      questions: [
        { type: "mc", q: "Quale di queste è una condizione?", options: ["Di che colore è il cielo?", "Il punteggio è maggiore di 10?", "Quanti anni hai?"], answer: 1, explain: "Una condizione ha solo due risposte: vero o falso. «Il punteggio è maggiore di 10?» → sì o no." },
        { type: "mc", q: "In un diagramma di flusso la condizione si disegna dentro…", options: ["un rettangolo", "un rombo", "un ovale"], answer: 1, explain: "Il rombo è il simbolo della decisione, con due uscite (sì / no)." },
        { type: "tf", q: "Con SE… ALLORA… ALTRIMENTI il programma può eseguire tutte e due le azioni insieme.", answer: false, explain: "Ne esegue sempre e solo una: quella del SÌ oppure quella del NO." },
        { type: "mc", q: "Come si dice «altrimenti» nei linguaggi di programmazione?", options: ["then", "if", "else"], answer: 2, explain: "if = se, then = allora, else = altrimenti." }
      ]
    },
    {
      type: "text",
      title: "4. Confronti: maggiore, minore, uguale",
      html: `<p>Molte condizioni <b>confrontano dei numeri</b>. Si usano i simboli che conosci dalla matematica:</p>
<table>
<tr><th>Simbolo</th><th>Significa</th><th>Esempio</th><th>Vero o falso?</th></tr>
<tr><td><b>&gt;</b></td><td>maggiore di</td><td>punti &gt; 100 (con punti = 120)</td><td>✅ vero</td></tr>
<tr><td><b>&lt;</b></td><td>minore di</td><td>vite &lt; 1 (con vite = 3)</td><td>❌ falso</td></tr>
<tr><td><b>=</b></td><td>uguale a</td><td>età = 9 (con età = 9)</td><td>✅ vero</td></tr>
</table>
<p>I valori come "punti", "vite", "età" che possono cambiare durante il gioco si chiamano <b>variabili</b>: sono come scatole con un'etichetta dentro cui il computer tiene un numero.</p>`
    },
    {
      type: "text",
      title: "5. Condizioni composte: E, O, NON",
      html: `<p>A volte servono più condizioni insieme. Si collegano con tre paroline magiche, gli <b>operatori logici</b>:</p>
<ul>
<li>🤝 <b>E</b> (and): vero solo se <b>tutte e due</b> le condizioni sono vere.<br><i>SE ho finito i compiti <b>E</b> non piove ALLORA vado al parco.</i></li>
<li>🔀 <b>O</b> (or): vero se <b>almeno una</b> condizione è vera.<br><i>SE è sabato <b>O</b> è domenica ALLORA niente scuola.</i></li>
<li>🔄 <b>NON</b> (not): <b>rovescia</b> la risposta: il vero diventa falso e il falso diventa vero.<br><i>SE <b>NON</b> ho la merenda ALLORA la compro.</i></li>
</ul>
<p>Si possono anche mettere condizioni <b>una dentro l'altra</b> (condizioni annidate): SE è estate ALLORA (SE c'è il sole ALLORA vado al mare ALTRIMENTI vado in piscina).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il gioco in Scratch",
      html: `<p>In <b>Scratch</b> i blocchi delle condizioni sono arancioni (categoria <i>Controllo</i>) e hanno uno spazio a forma di esagono dove si incastra la condizione.</p>
<p>Programma del gatto che raccoglie le mele 🍎:</p>
<p style="font-family:monospace;background:#fff7ed;padding:8px;border-radius:8px">
quando si clicca sulla bandiera verde<br>
per sempre<br>
&nbsp;&nbsp;<b>se</b> &lt;sta toccando Mela?&gt; <b>allora</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;cambia punti di 1<br>
&nbsp;&nbsp;&nbsp;&nbsp;fai il suono "pop"<br>
&nbsp;&nbsp;<b>se</b> &lt;punti = 10&gt; <b>allora</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;dire "Hai vinto!" 🏆<br>
&nbsp;&nbsp;&nbsp;&nbsp;ferma tutto
</p>
<p>Nota: la condizione viene controllata <b>di continuo</b> perché sta dentro un ciclo "per sempre". Senza ciclo verrebbe controllata una volta sola, all'inizio!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: le condizioni intorno a te",
      html: `<p>Le macchine di tutti i giorni sono piene di SE… ALLORA:</p>
<ul>
<li>🚪 <b>Porta automatica</b> del supermercato: SE il sensore vede una persona ALLORA apri ALTRIMENTI chiudi.</li>
<li>🌡️ <b>Termostato</b> del riscaldamento: SE la temperatura &lt; 20 °C ALLORA accendi la caldaia ALTRIMENTI spegnila.</li>
<li>🚗 <b>Sensore di parcheggio</b>: SE l'ostacolo è a meno di 30 cm ALLORA suona più veloce.</li>
<li>📱 <b>Telefono</b>: SE il codice è giusto ALLORA sblocca ALTRIMENTI dopo 5 errori blocca per un po'.</li>
<li>🌿 <b>Irrigazione del giardino</b>: SE sono le 7 E il terreno è secco ALLORA apri l'acqua.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Vero o falso? Prova tu",
      widget: "classify",
      options: {
        groups: ["✅ VERO", "❌ FALSO"],
        items: [
          ["7 > 5", 0],
          ["3 > 8", 1],
          ["10 = 10", 0],
          ["4 < 2", 1],
          ["(2 < 5) E (6 > 1)", 0],
          ["(2 > 5) E (6 > 1)", 1],
          ["(2 > 5) O (6 > 1)", 0],
          ["(1 > 3) O (0 > 9)", 1],
          ["NON (3 = 3)", 1],
          ["NON (5 < 1)", 0]
        ]
      },
      caption: "Tocca ogni condizione e mettila nella scatola giusta. Ricorda: E vuole tutte vere, O ne vuole almeno una, NON rovescia."
    },
    {
      type: "decision",
      title: "Programma il robot aspirapolvere",
      html: "Stai programmando un robot aspirapolvere 🤖. Ha un sensore davanti che dice se c'è un <b>ostacolo</b> (un muro, la gamba del tavolo, il gatto…). Il robot deve pulire tutta la stanza senza restare incastrato.",
      question: "Quale regola scriveresti?",
      options: [
        { label: "SE c'è un ostacolo ALLORA fermati per sempre.", outcome: "Il robot si blocca al primo muro e non pulisce più niente: la stanza resta sporca!" },
        { label: "SE c'è un ostacolo ALLORA gira di un po' ALTRIMENTI vai avanti (e ripeti per sempre).", outcome: "Il robot evita gli ostacoli, cambia direzione e continua a pulire: funziona!" },
        { label: "Vai sempre avanti, senza condizioni.", outcome: "Il robot sbatte contro il muro e continua a spingere: le ruote girano a vuoto." }
      ],
      answer: 1,
      explain: "I primi robot aspirapolvere per la casa (come quelli venduti dai primi anni 2000) usavano proprio regole semplici di questo tipo: SE urto qualcosa ALLORA giro e riparto, il tutto dentro un ciclo che si ripete. Servono una <b>condizione</b> (c'è un ostacolo?), le <b>due strade</b> (gira / vai avanti) e un <b>ciclo</b> che ripete il controllo. Oggi molti robot usano anche mappe e telecamere, ma dentro ci sono sempre tantissimi SE… ALLORA."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? George Boole e il vero/falso",
      html: `<p>Nel <b>1854</b> il matematico inglese <b>George Boole</b> pubblicò un libro, <i>Le leggi del pensiero</i>, in cui trattava VERO e FALSO come se fossero numeri: <b>1</b> e <b>0</b>. Inventò un'algebra con le operazioni E, O, NON.</p>
<p>Ai suoi tempi sembrava solo un gioco da matematici. Quasi un secolo dopo, gli ingegneri capirono che i circuiti elettrici funzionano allo stesso modo (corrente sì = 1, corrente no = 0): oggi ogni computer e smartphone \"ragiona\" con l'<b>algebra di Boole</b>. In suo onore, nei linguaggi di programmazione i valori vero/falso si chiamano <b>booleani</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? I librigame",
      html: `<p>Esistono libri in cui sei tu a decidere come va la storia: alla fine di una pagina leggi <i>«Se vuoi entrare nella caverna vai a pagina 42, altrimenti vai a pagina 17»</i>. Si chiamano <b>librigame</b> (in inglese <i>gamebooks</i>) e sono diventati famosi negli anni '80.</p>
<p>Un librogame è proprio un <b>programma fatto di SE… ALTRIMENTI</b>, e il lettore fa da computer! Anche i videogiochi con le storie a bivi funzionano così.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Una <b>condizione</b> è una domanda con risposta <b>vero</b> o <b>falso</b>.</li>
<li><b>SE … ALLORA</b> (if … then): l'azione si fa solo se la condizione è vera.</li>
<li><b>SE … ALLORA … ALTRIMENTI</b> (if … else): si fa sempre una delle due azioni.</li>
<li>Confronti: <b>&gt;</b> maggiore, <b>&lt;</b> minore, <b>=</b> uguale.</li>
<li><b>E</b> = tutte vere; <b>O</b> = almeno una vera; <b>NON</b> = rovescia.</li>
<li>Nei diagrammi di flusso la condizione è un <b>rombo</b> con due uscite.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le condizioni",
      intro: "La stessa idea si può scrivere e vedere in tanti modi: a blocchi, in un vero linguaggio di programmazione, come un bivio nel bosco, come i semafori delle regole del gioco o come un gioco di abbinamenti.",
      tabs: [
        {
          label: "🧩 A blocchi (Scratch)",
          html: `<p>In Scratch (creato al <b>MIT</b> di Boston e pubblicato nel 2007) il blocco <b>se… allora… altrimenti</b> è come una <b>bocca a forma di C</b> doppia: dentro la prima bocca metti i blocchi del SÌ, dentro la seconda quelli del NO. La condizione ha la forma di un <b>esagono</b>: solo i blocchi esagonali (che danno vero o falso) ci si incastrano!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<path d="M60 20 H420 V70 H120 V120 H420 V150 H120 V200 H420 V240 H60 Z" fill="#f59e0b" stroke="#b45309" stroke-width="3"/>
<text x="80" y="52" font-size="20" font-weight="bold" fill="#ffffff">se</text>
<polygon points="120,32 140,22 330,22 350,32 330,62 140,62" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
<text x="235" y="50" font-size="17" fill="#ffffff" text-anchor="middle" font-weight="bold">sta toccando Mela?</text>
<text x="360" y="52" font-size="20" font-weight="bold" fill="#ffffff">allora</text>
<rect x="130" y="80" width="230" height="32" rx="6" fill="#a855f7"/>
<text x="245" y="102" font-size="17" fill="#ffffff" text-anchor="middle">dire "Gnam!" 🍎</text>
<text x="80" y="142" font-size="20" font-weight="bold" fill="#ffffff">altrimenti</text>
<rect x="130" y="160" width="230" height="32" rx="6" fill="#3b82f6"/>
<text x="245" y="182" font-size="17" fill="#ffffff" text-anchor="middle">fai 10 passi 🐾</text>
<text x="440" y="100" font-size="16" fill="#15803d" font-weight="bold">← se VERO</text>
<text x="440" y="182" font-size="16" fill="#b91c1c" font-weight="bold">← se FALSO</text>
</svg>`
        },
        {
          label: "🐍 Come i veri programmatori",
          html: `<p>Più avanti scriverai i programmi con le parole. Ecco la stessa idea in <b>Python</b>, uno dei linguaggi più usati al mondo (anche per l'intelligenza artificiale):</p>
<p style="font-family:monospace;background:#0f172a;color:#e2e8f0;padding:10px;border-radius:8px">
punti = 12<br>
<span style="color:#f472b6">if</span> punti &gt; 10:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("Hai vinto!")<br>
<span style="color:#f472b6">else</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("Continua a giocare")
</p>
<p>Le righe spostate a destra (rientro) sono quelle che stanno "dentro" la condizione, proprio come i blocchi dentro la bocca del blocco Scratch. Questo programma scrive <b>"Hai vinto!"</b> perché 12 &gt; 10 è vero.</p>`
        },
        {
          label: "🌲 Il bivio nel bosco",
          html: `<p>Immagina di camminare su un sentiero e arrivare a un <b>bivio</b> con un cartello: <i>"Hai la torcia? SÌ → sentiero della grotta. NO → sentiero del lago."</i></p>
<p>Non puoi prendere tutti e due i sentieri, e non puoi restare fermo: <b>devi sceglierne uno</b> in base alla risposta. Un programma è un bosco pieno di bivi: il computer arriva a ogni bivio, legge il cartello (la condizione) e prende una strada.</p>
<p>E se il cartello dice solo <i>"Hai sete? SÌ → passa dalla fontana"</i>? Allora se rispondi NO prosegui dritto: è il caso del <b>SE… ALLORA senza ALTRIMENTI</b>.</p>`
        },
        {
          label: "🚦 Le regole dei giochi",
          html: `<p>Tutti i giochi da tavolo sono pieni di condizioni, anche quelli di altri Paesi:</p>
<ul>
<li>🎲 <b>Gioco dell'oca</b>: SE arrivi sulla casella del pozzo ALLORA stai fermo finché non arriva un altro giocatore.</li>
<li>🐍 <b>Serpenti e scale</b> (nato in India, si chiamava <i>Moksha Patam</i>): SE finisci su una scala ALLORA sali, SE finisci sulla testa di un serpente ALLORA scendi.</li>
<li>🃏 <b>UNO</b>: SE la carta ha lo stesso colore O lo stesso numero ALLORA puoi giocarla ALTRIMENTI peschi.</li>
</ul>
<p>Prova: scrivi con SE… ALLORA… ALTRIMENTI le regole del tuo gioco preferito!</p>`
        },
        {
          label: "🎮 Abbina condizione e azione",
          html: `<p>Ogni macchina ha la sua regola. Abbina la condizione (SE…) all'azione giusta (ALLORA…).</p>`,
          widget: "match",
          options: {
            pairs: [
              ["SE fa buio", "accendi i lampioni"],
              ["SE la temperatura è sotto 20 °C", "accendi il riscaldamento"],
              ["SE il sensore vede una persona", "apri la porta"],
              ["SE la batteria è sotto il 20%", "mostra «Batteria scarica»"],
              ["SE il robot urta un ostacolo", "gira e riparti"],
              ["SE il codice è sbagliato", "non sbloccare"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle condizioni: tocca un nodo",
      nodes: [
        { id: "algoritmo", label: "Algoritmo", x: 50, y: 6, color: "#2563eb", html: "Una sequenza di istruzioni precise per risolvere un problema.", why: "Il nome viene da <b>al-Khwarizmi</b>, matematico persiano vissuto a Baghdad intorno all'anno 800, i cui libri fecero conoscere in Europa i numeri indo-arabi e i metodi di calcolo." },
        { id: "condizione", label: "Condizione", x: 50, y: 30, color: "#f59e0b", html: "Una domanda con risposta vero o falso.", why: "Un computer non sa \"pensare\" come noi: sa solo controllare se una cosa è vera o falsa, milioni di volte al secondo. Per questo ogni decisione va trasformata in domande sì/no." },
        { id: "booleani", label: "Vero / Falso (booleani)", x: 18, y: 30, color: "#a855f7", html: "I due soli valori possibili di una condizione: vero (1) e falso (0).", why: "Li studiò <b>George Boole</b> nel 1854. Nel 1937 <b>Claude Shannon</b> mostrò che gli interruttori dei circuiti elettrici seguono le regole di Boole: da qui sono nati i computer digitali." },
        { id: "ifthen", label: "SE… ALLORA", x: 30, y: 58, color: "#16a34a", html: "if … then: l'azione si fa solo se la condizione è vera.", why: "È l'idea della <b>selezione</b>: insieme a <b>sequenza</b> (istruzioni una dopo l'altra) e <b>ripetizione</b> (cicli) è uno dei tre mattoni con cui, come dimostrarono Böhm e Jacopini nel 1966, si può costruire qualsiasi programma." },
        { id: "else", label: "ALTRIMENTI", x: 30, y: 84, color: "#ef4444", html: "else: la strada da seguire quando la condizione è falsa.", why: "Serve per non lasciare il programma \"senza risposta\": con if… else il computer fa sempre esattamente una delle due cose." },
        { id: "confronti", label: "Confronti > < =", x: 70, y: 58, color: "#0ea5e9", html: "Condizioni che confrontano numeri o variabili.", why: "Sono gli stessi simboli della matematica. Il simbolo &gt; e &lt; fu introdotto dal matematico inglese Thomas Harriot (pubblicato nel 1631); il segno = lo inventò Robert Recorde nel 1557, \"perché niente è più uguale di due linee parallele\"." },
        { id: "logici", label: "E · O · NON", x: 82, y: 30, color: "#db2777", html: "Operatori logici per unire o rovesciare le condizioni.", why: "Vengono dalla logica dei filosofi greci (Aristotele) e furono trasformati in calcoli da Boole. Nei circuiti si chiamano <i>porte logiche</i> AND, OR, NOT: dentro un processore ce ne sono miliardi." },
        { id: "rombo", label: "Diagramma di flusso", x: 70, y: 84, color: "#64748b", html: "Disegno del programma: la condizione è un rombo con uscite SÌ e NO.", why: "I diagrammi di flusso furono usati in informatica dagli anni '40 (Goldstine e von Neumann, 1947) per progettare i programmi prima di scriverli; i simboli furono poi standardizzati. Servono a vedere tutte le strade possibili." }
      ],
      edges: [
        ["algoritmo", "condizione", "decide con"],
        ["condizione", "booleani", "vale"],
        ["condizione", "ifthen", "si usa in"],
        ["ifthen", "else", "+ strada del NO"],
        ["condizione", "confronti", "spesso è un"],
        ["condizione", "logici", "si combina con"],
        ["ifthen", "rombo", "si disegna con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: segui il programma",
      questions: [
        { type: "mc", q: "punti = 7. SE punti > 5 ALLORA dire «Bene» ALTRIMENTI dire «Dai!». Che cosa dice?", options: ["Bene", "Dai!", "Niente"], answer: 0, explain: "7 > 5 è vero, quindi si segue la strada del SÌ: «Bene»." },
        { type: "mc", q: "SE è sabato O è domenica ALLORA niente scuola. Oggi è domenica. C'è scuola?", options: ["Sì", "No"], answer: 1, explain: "Con O basta una condizione vera: è domenica, quindi niente scuola." },
        { type: "tf", q: "(3 > 1) E (2 > 5) è vero.", answer: false, explain: "Con E servono tutte e due vere: 2 > 5 è falso, quindi tutto è falso." },
        { type: "mc", q: "NON (vero) è uguale a…", options: ["vero", "falso"], answer: 1, explain: "NON rovescia il valore." }
      ]
    }
  ],
  glossary: [
    { t: "Condizione", d: "Domanda che ha come risposta solo vero o falso." },
    { t: "Istruzione condizionale (selezione)", d: "Parte del programma che sceglie che cosa fare in base a una condizione." },
    { t: "if / then / else", d: "Se / allora / altrimenti, nei linguaggi di programmazione." },
    { t: "Variabile", d: "Una «scatola» con un nome che contiene un valore che può cambiare (punti, vite…)." },
    { t: "Operatori di confronto", d: "Simboli > (maggiore), < (minore), = (uguale)." },
    { t: "Operatori logici", d: "E (and), O (or), NON (not): uniscono o rovesciano condizioni." },
    { t: "Booleano", d: "Valore che può essere solo vero o falso, dal nome di George Boole." },
    { t: "Diagramma di flusso", d: "Disegno di un algoritmo: le decisioni sono rombi con uscite SÌ/NO." },
    { t: "Sensore", d: "Dispositivo che misura qualcosa (luce, temperatura, distanza) e fornisce dati alle condizioni." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Una condizione può avere come risposta…", options: ["qualsiasi numero", "solo vero o falso", "solo parole"], answer: 1, explain: "Una condizione è vera o falsa." },
      { type: "mc", q: "Come si dice «se» in inglese nei programmi?", options: ["then", "if", "else"], answer: 1, explain: "if = se." },
      { type: "mc", q: "vite = 0. SE vite = 0 ALLORA «Game over» ALTRIMENTI «Continua». Che cosa appare?", options: ["Game over", "Continua"], answer: 0, explain: "vite = 0 è vero → Game over." },
      { type: "mc", q: "età = 8. SE età > 10 ALLORA «Puoi salire» ALTRIMENTI «Sei troppo piccolo». Che cosa appare?", options: ["Puoi salire", "Sei troppo piccolo"], answer: 1, explain: "8 > 10 è falso → si segue ALTRIMENTI." },
      { type: "tf", q: "Con l'operatore O basta che una sola condizione sia vera.", answer: true, explain: "O è vero se almeno una condizione è vera." },
      { type: "tf", q: "(5 = 5) E (1 < 4) è vero.", answer: true, explain: "Tutte e due sono vere, quindi E dà vero." },
      { type: "tf", q: "Nei diagrammi di flusso la decisione si disegna in un cerchio.", answer: false, explain: "Si disegna in un rombo." },
      { type: "text", q: "Come si chiama, nei programmi, la parola che significa «altrimenti»?", answer: ["else"], explain: "else = altrimenti." },
      { type: "num", q: "punti = 4. SE punti < 5 ALLORA aggiungi 10 ai punti. Quanti punti ci sono alla fine?", answer: 14, explain: "4 < 5 è vero, quindi 4 + 10 = 14." },
      { type: "num", q: "x = 9. SE x > 5 E x < 8 ALLORA x diventa 0 ALTRIMENTI x diventa 1. Quanto vale x alla fine?", answer: 1, explain: "9 > 5 è vero ma 9 < 8 è falso: con E il risultato è falso, quindi x diventa 1." },
      { type: "mc", q: "Quale oggetto usa la regola «SE la temperatura è bassa ALLORA accendi»?", options: ["il termostato", "il libro", "la matita"], answer: 0, explain: "Il termostato misura la temperatura e accende o spegne il riscaldamento." },
      { type: "order", q: "Metti in ordine come lavora un programma con una condizione.", items: ["arriva alla condizione", "controlla se è vera o falsa", "sceglie la strada SÌ o NO", "esegue le azioni di quella strada", "continua con il resto del programma"], explain: "Il computer controlla, sceglie una strada, esegue e poi prosegue." }
    ]
  }
});
