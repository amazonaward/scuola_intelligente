TOPIC('it', {
  id: "p3-sci-metodo-scientifico",
  title: "Il metodo scientifico",
  intro: "Perché le foglie in autunno cambiano colore? 🍂 Perché il ghiaccio galleggia? Gli scienziati rispondono alle domande seguendo dei passi precisi: il <b>metodo scientifico</b>. Impariamo a <b>osservare, fare ipotesi e sperimentare</b> come veri scienziati!",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è il metodo scientifico",
      html: `<p>Il <b>metodo scientifico</b> è un modo ordinato per scoprire come funziona il mondo. Non basta dire <i>"secondo me è così"</i>: bisogna <b>provarlo</b> con un esperimento!</p>
<p>Lo ha reso famoso lo scienziato italiano <b>Galileo Galilei</b> (Pisa, 1564 – Arcetri, 1642). Galileo diceva che per capire la natura servono le <b>\"sensate esperienze\"</b> (cioè osservare e sperimentare) e le <b>\"necessarie dimostrazioni\"</b> (cioè ragionare e misurare).</p>`
    },
    {
      type: "text",
      title: "I passi del metodo",
      html: `<ol>
<li>👀 <b>Osservazione</b>: guardo con attenzione un fenomeno usando i sensi e gli strumenti. <i>"La piantina sul davanzale è piegata verso la finestra."</i></li>
<li>❓ <b>Domanda</b> (il problema): <i>"Perché si piega così?"</i></li>
<li>💡 <b>Ipotesi</b>: provo a dare una risposta possibile. <i>"Forse la pianta cresce verso la luce."</i></li>
<li>🧪 <b>Esperimento</b>: preparo una prova per vedere se l'ipotesi è giusta. Metto due piantine uguali: una vicino alla luce che arriva da un lato, una al buio dentro una scatola con un solo buco.</li>
<li>📋 <b>Raccolta dei dati</b>: ogni giorno osservo, misuro, disegno e scrivo.</li>
<li>✅ <b>Conclusione</b>: l'ipotesi era giusta (<b>confermata</b>) o sbagliata (<b>smentita</b>)? Se è sbagliata… non è un fallimento! Si fa una <b>nuova ipotesi</b> e si riprova.</li>
</ol>
<p>Alla fine si <b>comunicano</b> i risultati, così altri scienziati possono ripetere l'esperimento e controllare.</p>`
    },
    {
      type: "svg",
      title: "Il ciclo del metodo scientifico",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0f9ff"/>
<defs><marker id="m" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker></defs>
<g stroke="#475569" stroke-width="3" fill="none" marker-end="url(#m)">
<path d="M220 60 L360 60"/><path d="M470 85 L500 130"/><path d="M500 195 L470 240"/><path d="M360 265 L240 265"/><path d="M125 240 L95 195"/><path d="M95 130 L125 85"/>
</g>
<g stroke-width="3">
<rect x="110" y="35" width="110" height="50" rx="14" fill="#fde68a" stroke="#b45309"/>
<rect x="365" y="35" width="120" height="50" rx="14" fill="#fecaca" stroke="#b91c1c"/>
<rect x="450" y="135" width="140" height="55" rx="14" fill="#bbf7d0" stroke="#15803d"/>
<rect x="355" y="240" width="140" height="50" rx="14" fill="#bfdbfe" stroke="#1d4ed8"/>
<rect x="110" y="240" width="130" height="50" rx="14" fill="#e9d5ff" stroke="#7e22ce"/>
<rect x="10" y="135" width="150" height="55" rx="14" fill="#fed7aa" stroke="#c2410c"/>
</g>
<g font-size="17" text-anchor="middle" font-weight="bold" fill="#1f2937">
<text x="165" y="66">👀 Osservo</text>
<text x="425" y="66">❓ Domanda</text>
<text x="520" y="168">💡 Ipotesi</text>
<text x="425" y="271">🧪 Esperimento</text>
<text x="175" y="271">📋 Dati</text>
<text x="85" y="168">✅ Conclusione</text>
</g>
<text x="300" y="150" font-size="18" fill="#0f172a" text-anchor="middle">Se l'ipotesi è sbagliata,</text>
<text x="300" y="175" font-size="18" fill="#0f172a" text-anchor="middle">si ricomincia con una nuova!</text>
</svg>`,
      caption: "Il metodo scientifico è un cerchio: ogni conclusione può far nascere nuove domande."
    },
    {
      type: "quiz",
      title: "Mini-quiz: i passi",
      questions: [
        { type: "mc", q: "\"Forse il ghiaccio si scioglie prima al sole che all'ombra.\" Questa frase è…", options: ["un'osservazione", "un'ipotesi", "una conclusione"], answer: 1, explain: "È una possibile risposta da verificare: un'ipotesi." },
        { type: "mc", q: "Quale scienziato italiano rese famoso il metodo scientifico?", options: ["Galileo Galilei", "Cristoforo Colombo", "Leonardo Fibonacci"], answer: 0, explain: "Galileo Galilei, vissuto tra il 1564 e il 1642." },
        { type: "tf", q: "Se un'ipotesi è smentita, l'esperimento è stato inutile.", answer: false, explain: "Anche scoprire che un'ipotesi è sbagliata è un risultato importante: ci fa cercare un'altra spiegazione." }
      ]
    },
    {
      type: "text",
      title: "La regola d'oro: cambiare una cosa sola",
      html: `<p>Un esperimento è <b>corretto</b> (gli scienziati dicono \"controllato\") se si cambia <b>una sola cosa alla volta</b>. Tutto il resto deve restare <b>uguale</b>.</p>
<p>Esempio: voglio sapere se i semi hanno bisogno di <b>acqua</b> per germogliare 🌱.</p>
<ul>
<li>Vasetto A: cotone + 5 fagioli + <b>acqua</b>.</li>
<li>Vasetto B: cotone + 5 fagioli + <b>niente acqua</b>.</li>
<li>Stessa temperatura, stessa luce, stessi fagioli, stessi vasetti.</li>
</ul>
<p>Se cambiassi anche la luce, non saprei più se la differenza dipende dall'acqua o dalla luce! 🤔</p>
<p>Inoltre è meglio usare <b>più semi</b> e <b>ripetere</b> la prova: un solo seme potrebbe essere \"difettoso\".</p>`
    },
    {
      type: "decision",
      title: "Quale esperimento è giusto?",
      html: "Sofia vuole scoprire se le piante crescono di più con la luce. Ha due piantine di basilico uguali.",
      question: "Quale esperimento dovrebbe fare?",
      options: [
        { label: "Una al sole con molta acqua, l'altra al buio senza acqua", outcome: "Non va bene: cambia due cose insieme (luce e acqua). Se la pianta al buio muore, non si sa se è colpa del buio o della sete." },
        { label: "Una al sole e una al buio, tutte e due con la stessa acqua", outcome: "Perfetto! Cambia solo la luce: ogni differenza dipenderà dalla luce." },
        { label: "Tutte e due al sole, una con il vaso rosso e una con il vaso blu", outcome: "Così non si studia la luce: le due piantine ricevono la stessa luce e cambia solo il colore del vaso." }
      ],
      answer: 1,
      explain: "In un esperimento corretto si cambia una sola variabile (la luce) e si tiene tutto il resto uguale (acqua, terra, vaso, tipo di pianta). Dopo una settimana Sofia vedrà che la piantina al buio è diventata gialla e allungata: senza luce le piante non riescono a fare la fotosintesi e a produrre la clorofilla verde."
    },
    {
      type: "text",
      title: "Gli strumenti dello scienziato",
      html: `<p>I nostri <b>cinque sensi</b> sono i primi strumenti, ma a volte ingannano (l'acqua tiepida sembra calda se hai le mani fredde!). Per questo si usano strumenti che <b>misurano</b>:</p>
<ul>
<li>🌡️ <b>termometro</b> – temperatura</li>
<li>⚖️ <b>bilancia</b> – peso (massa)</li>
<li>📏 <b>righello</b> e metro – lunghezza</li>
<li>⏱️ <b>cronometro</b> – tempo</li>
<li>🔍 <b>lente d'ingrandimento</b> e <b>microscopio</b> – cose piccolissime</li>
<li>🔭 <b>cannocchiale</b> – cose lontanissime</li>
<li>📓 <b>quaderno di laboratorio</b> – per scrivere tutto!</li>
</ul>`
    },
    {
      type: "widget",
      title: "Osservazione, ipotesi o conclusione?",
      widget: "classify",
      options: {
        groups: ["Osservazione", "Ipotesi", "Conclusione"],
        items: [
          ["🍂 Le foglie dell'albero sono gialle", 0],
          ["💭 Forse il sale fa sciogliere il ghiaccio più in fretta", 1],
          ["📋 Dopo 3 prove, il ghiaccio con il sale si è sciolto sempre prima", 2],
          ["🐌 La lumaca lascia una scia lucida", 0],
          ["💭 Secondo me la candela si spegne perché finisce l'aria", 1],
          ["📋 I fagioli senza acqua non sono germogliati: l'acqua serve", 2]
        ]
      },
      caption: "Metti ogni frase nella casella giusta."
    },
    {
      type: "example",
      title: "Esempio pratico: quale carta assorbe di più?",
      html: `<p><b>Domanda</b>: quale carta assorbe più acqua: tovagliolo, carta da cucina o foglio del quaderno?</p>
<p><b>Ipotesi</b>: la carta da cucina, perché è spessa e morbida.</p>
<p><b>Esperimento</b>: taglio 3 strisce <b>della stessa misura</b>, immergo la punta di ognuna in un bicchiere con <b>la stessa quantità</b> di acqua colorata, aspetto <b>5 minuti</b> per tutte.</p>
<p><b>Dati</b>: misuro col righello quanto è salita l'acqua.</p>
<table><tr><th>Carta</th><th>Acqua salita</th></tr><tr><td>Carta da cucina</td><td>7 cm</td></tr><tr><td>Tovagliolo</td><td>5 cm</td></tr><tr><td>Quaderno</td><td>1 cm</td></tr></table>
<p><b>Conclusione</b>: l'ipotesi è confermata! 🎉 (Ricorda: i tuoi numeri potrebbero essere diversi, dipende dalla carta.)</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la candela sotto il bicchiere",
      html: `<p><b>Osservazione</b>: se copro una candela accesa con un bicchiere, dopo poco si spegne. 🕯️ (Fallo solo con un adulto!)</p>
<p><b>Ipotesi</b>: la fiamma ha bisogno di qualcosa che c'è nell'aria e che sotto il bicchiere finisce.</p>
<p><b>Esperimento</b>: provo con un bicchiere piccolo e con un barattolo grande, misurando il tempo col cronometro.</p>
<p><b>Dati</b>: sotto il bicchiere piccolo si spegne dopo pochi secondi, sotto il barattolo grande dura di più.</p>
<p><b>Conclusione</b>: più aria c'è, più a lungo brucia la candela. Gli scienziati hanno scoperto che serve l'<b>ossigeno</b>, uno dei gas dell'aria.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Per più di 1900 anni tutti hanno creduto ad <b>Aristotele</b>, che diceva che gli oggetti pesanti cadono più veloci di quelli leggeri. <b>Galileo</b> volle verificarlo facendo rotolare delle sfere lungo piani inclinati e misurando il tempo. Scoprì che, senza l'aria che frena, <b>tutti gli oggetti cadono con la stessa velocità</b>! Nel 1971 l'astronauta <b>David Scott</b> lo provò sulla Luna, dove non c'è aria: un martello e una piuma toccarono il suolo insieme. 🪶🔨</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Alcune grandi scoperte sono nate da un \"errore\" osservato bene! Nel <b>1928 Alexander Fleming</b> trovò una muffa cresciuta per sbaglio su un piattino del suo laboratorio: intorno a quella muffa i batteri non crescevano. Invece di buttare tutto, si chiese <b>perché</b>… e scoprì la <b>penicillina</b>, il primo antibiotico, che ha salvato milioni di vite. 🧫</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Osservazione → domanda → ipotesi → esperimento → dati → conclusione.</li>
<li>Un'ipotesi è una <b>risposta possibile</b> che va verificata.</li>
<li>Nell'esperimento si cambia <b>una sola cosa</b> alla volta.</li>
<li>Si misura, si scrive tutto e si <b>ripete</b> la prova.</li>
<li>Un'ipotesi smentita è comunque una scoperta!</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il metodo scientifico",
      intro: "Il metodo scientifico lo usi già tutti i giorni, anche senza saperlo! Ecco alcuni modi per riconoscerlo.",
      tabs: [
        {
          label: "🕵️ Il detective",
          html: `<p>Uno scienziato lavora come un <b>detective</b>:</p>
<ul>
<li>trova <b>indizi</b> (osservazione);</li>
<li>pensa a un <b>sospettato</b> (ipotesi);</li>
<li>cerca le <b>prove</b> (esperimento);</li>
<li>decide se il sospettato è colpevole o innocente (conclusione).</li>
</ul>
<p>Se le prove dicono \"innocente\", il detective non si arrabbia: cerca un altro sospettato!</p>`
        },
        {
          label: "🍳 In cucina",
          html: `<p>Hai mai fatto i biscotti? 🍪 Se vengono troppo duri, <b>osservi</b> il problema; fai un'<b>ipotesi</b> (\"forse sono rimasti troppo nel forno\"); la volta dopo cambi <b>solo il tempo</b> di cottura (esperimento); assaggi (dati); e capisci se avevi ragione (conclusione).</p>
<p>Se avessi cambiato anche la farina e lo zucchero, non sapresti più qual era il problema!</p>`
        },
        {
          label: "🔭 Come Galileo",
          html: `<p>Nel <b>1609</b> Galileo costruì un cannocchiale e lo puntò verso il cielo. Nel gennaio del <b>1610</b> vide quattro puntini vicino a Giove che ogni notte cambiavano posizione. <b>Osservò</b> per molte notti, disegnò tutto e arrivò alla <b>conclusione</b>: sono <b>lune</b> che girano intorno a Giove! Era una prova che non tutto gira intorno alla Terra.</p>
<p>Esplora il Sistema Solare in 3D e cerca Giove.</p>`,
          scene: "solar",
          options: { labels: true }
        },
        {
          label: "📅 La storia della scienza",
          html: `<p>Il metodo scientifico è stato costruito poco a poco da tante persone, in tanti Paesi. Scorri la linea del tempo!</p>`,
          widget: "timeline",
          options: {
            events: [
              { year: -350, label: "Aristotele osserva e classifica gli animali", icon: "🐟" },
              { year: 1021, label: "Alhazen (Ibn al-Haytham) studia la luce con esperimenti", icon: "💡" },
              { year: 1610, label: "Galileo scopre le lune di Giove", icon: "🔭" },
              { year: 1668, label: "Francesco Redi: le mosche non nascono dalla carne marcia", icon: "🪰" },
              { year: 1928, label: "Fleming scopre la penicillina", icon: "🧫" },
              { year: 1971, label: "Martello e piuma cadono insieme sulla Luna", icon: "🌕" }
            ],
            unit: "anni"
          }
        },
        {
          label: "🪰 L'esperimento di Redi",
          html: `<p>Un tempo si credeva che i vermi nascessero da soli dalla carne andata a male. Nel <b>1668</b> il medico toscano <b>Francesco Redi</b> fece un esperimento perfetto:</p>
<ul>
<li>barattolo A: carne <b>aperto</b> → dopo qualche giorno, vermi (larve di mosca);</li>
<li>barattolo B: carne <b>coperta da una garza</b> → l'aria passa, le mosche no → <b>nessun verme</b> sulla carne!</li>
</ul>
<p>Cambiava <b>una sola cosa</b>: se le mosche potevano toccare la carne. Conclusione: i vermi nascono dalle <b>uova delle mosche</b>.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<rect x="80" y="80" width="140" height="140" rx="12" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<ellipse cx="150" cy="190" rx="50" ry="20" fill="#dc2626"/>
<text x="120" y="60" font-size="28">🪰</text><text x="170" y="185" font-size="22">🐛</text>
<text x="150" y="250" font-size="20" text-anchor="middle" font-weight="bold" fill="#0369a1">A: aperto</text>
<rect x="380" y="80" width="140" height="140" rx="12" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<path d="M375 80 L525 80" stroke="#a3a3a3" stroke-width="10" stroke-dasharray="4 3"/>
<ellipse cx="450" cy="190" rx="50" ry="20" fill="#dc2626"/>
<text x="430" y="55" font-size="28">🪰</text>
<text x="450" y="250" font-size="20" text-anchor="middle" font-weight="bold" fill="#0369a1">B: con la garza</text>
<text x="300" y="150" font-size="22" text-anchor="middle" fill="#1f2937">vs</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del metodo scientifico: tocca un nodo e scopri il perché",
      nodes: [
        { id: "oss", label: "Osservazione", x: 50, y: 6, color: "#f59e0b", html: "Guardare con attenzione usando i sensi e gli strumenti.", why: "Tutta la scienza parte dalla curiosità per ciò che vediamo. Galileo la chiamava \"sensata esperienza\"." },
        { id: "dom", label: "Domanda", x: 82, y: 22, color: "#ef4444", html: "Il problema da risolvere: perché? come? cosa succede se…?", why: "Una buona domanda deve poter essere verificata con una prova: \"il sale scioglie il ghiaccio?\" sì; \"qual è il colore più bello?\" no, è un gusto personale." },
        { id: "ipo", label: "Ipotesi", x: 82, y: 50, color: "#16a34a", html: "Una possibile risposta da mettere alla prova.", why: "Dal greco <i>hypóthesis</i>, \"ciò che si mette sotto\", cioè alla base di un ragionamento. Un'ipotesi scientifica deve poter essere smentita da un esperimento." },
        { id: "esp", label: "Esperimento", x: 60, y: 72, color: "#2563eb", html: "Una prova preparata con cura per verificare l'ipotesi.", why: "Galileo capì che non basta ragionare: bisogna interrogare la natura con prove ripetibili. Per questo si cambia una sola variabile e si tiene tutto il resto uguale." },
        { id: "var", label: "Una cosa alla volta", x: 88, y: 88, color: "#0ea5e9", html: "In un esperimento si cambia un solo fattore.", why: "Se cambiassi due cose insieme, non potresti sapere quale delle due ha causato il risultato. È l'idea dell'esperimento \"controllato\", usata già da Francesco Redi nel 1668." },
        { id: "dati", label: "Dati e misure", x: 30, y: 72, color: "#a855f7", html: "Ciò che si osserva e si misura durante l'esperimento.", why: "I sensi possono ingannare; gli strumenti (termometro, bilancia, cronometro) danno numeri che chiunque può controllare." },
        { id: "concl", label: "Conclusione", x: 18, y: 45, color: "#14b8a6", html: "L'ipotesi è confermata o smentita.", why: "Se è smentita si torna all'ipotesi. Se è confermata molte volte, da tanti scienziati diversi, può diventare una legge o una teoria." },
        { id: "galileo", label: "Galileo Galilei", x: 18, y: 15, color: "#64748b", html: "Scienziato pisano (1564–1642), padre del metodo scientifico moderno.", why: "Univa esperimenti e matematica: \"il libro della natura è scritto in lingua matematica\", scrisse nel <i>Saggiatore</i> (1623)." }
      ],
      edges: [
        ["oss", "dom", "fa nascere una"],
        ["dom", "ipo", "si risponde con un'"],
        ["ipo", "esp", "si verifica con un"],
        ["esp", "var", "regola d'oro"],
        ["esp", "dati", "produce"],
        ["dati", "concl", "portano alla"],
        ["concl", "oss", "nuove domande"],
        ["galileo", "oss", "\"sensate esperienze\""]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: esperimenti corretti",
      questions: [
        { type: "tf", q: "In un buon esperimento si cambiano più cose insieme per fare prima.", answer: false, explain: "Si cambia una sola cosa alla volta, altrimenti non si capisce cosa ha causato il risultato." },
        { type: "mc", q: "Quale strumento usi per misurare la temperatura dell'acqua?", options: ["bilancia", "termometro", "cronometro"], answer: 1, explain: "Il termometro misura la temperatura." },
        { type: "mc", q: "Perché è meglio ripetere un esperimento più volte?", options: ["Per essere sicuri che il risultato non sia un caso", "Perché è divertente", "Non serve ripeterlo"], answer: 0, explain: "Ripetendo si controlla che il risultato sia sempre lo stesso e non dipenda da un errore o dal caso." }
      ]
    }
  ],
  glossary: [
    { t: "Metodo scientifico", d: "Procedimento ordinato per studiare la natura con osservazioni ed esperimenti." },
    { t: "Osservazione", d: "Guardare con attenzione un fenomeno con i sensi e gli strumenti." },
    { t: "Ipotesi", d: "Possibile risposta a una domanda, da verificare." },
    { t: "Esperimento", d: "Prova preparata per verificare un'ipotesi." },
    { t: "Variabile", d: "La cosa che si cambia in un esperimento (una sola alla volta)." },
    { t: "Dati", d: "Le informazioni raccolte osservando e misurando." },
    { t: "Conclusione", d: "Il risultato finale: l'ipotesi è confermata o smentita." },
    { t: "Fenomeno", d: "Qualsiasi fatto che accade in natura e che si può osservare." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Metti in ordine i passi del metodo scientifico.", items: ["Osservazione", "Domanda", "Ipotesi", "Esperimento", "Raccolta dei dati", "Conclusione"], explain: "Si osserva, ci si chiede perché, si ipotizza, si sperimenta, si raccolgono i dati e si conclude." },
      { type: "text", q: "Come si chiama la possibile risposta a una domanda scientifica, da verificare con un esperimento?", answer: ["ipotesi", "l'ipotesi", "un'ipotesi"], explain: "È l'ipotesi." },
      { type: "mc", q: "In quale secolo visse Galileo Galilei?", options: ["Nel 1200 (XIII secolo)", "Tra il 1500 e il 1600 (XVI–XVII secolo)", "Nel 1900 (XX secolo)"], answer: 1, explain: "Galileo nacque nel 1564 e morì nel 1642." },
      { type: "tf", q: "I nostri sensi a volte possono ingannarci: per questo usiamo strumenti di misura.", answer: true, explain: "Termometro, bilancia, righello danno misure precise e controllabili." },
      { type: "mc", q: "Voglio sapere se il sale fa sciogliere il ghiaccio più in fretta. Cosa cambio tra i due cubetti?", options: ["Solo la presenza del sale", "Il sale e la grandezza del cubetto", "Il sale e il posto dove li metto"], answer: 0, explain: "Cambia solo il sale; grandezza e posto devono restare uguali." },
      { type: "mc", q: "\"Il fagiolo con l'acqua è germogliato, quello senza no.\" Questa frase è…", options: ["un'ipotesi", "un dato/risultato", "una domanda"], answer: 1, explain: "Descrive ciò che si è osservato nell'esperimento." },
      { type: "tf", q: "Un'ipotesi smentita è un fallimento e non serve a niente.", answer: false, explain: "Anche sapere che un'ipotesi è sbagliata è una scoperta: si passa a una nuova ipotesi." },
      { type: "mc", q: "Cosa scoprì Galileo nel 1610 con il cannocchiale?", options: ["Le lune di Giove", "La penicillina", "L'elettricità"], answer: 0, explain: "Vide quattro lune che giravano intorno a Giove." },
      { type: "text", q: "Quale strumento usi per misurare il tempo di un esperimento?", answer: ["cronometro", "il cronometro", "orologio", "timer"], explain: "Il cronometro misura il tempo." },
      { type: "mc", q: "Nell'esperimento di Redi, perché un barattolo era coperto con la garza?", options: ["Per non far entrare le mosche ma lasciar passare l'aria", "Per tenere la carne al caldo", "Per decorarlo"], answer: 0, explain: "Così cambiava una sola cosa: se le mosche potevano toccare la carne." },
      { type: "tf", q: "Dopo l'esperimento è giusto comunicare i risultati perché altri possano ripeterlo.", answer: true, explain: "La scienza funziona perché i risultati vengono controllati da altre persone." }
    ]
  }
});
