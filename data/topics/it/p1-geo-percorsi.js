TOPIC('it', {
  id: "p1-geo-percorsi",
  title: "I percorsi",
  intro: "Ogni mattina fai un viaggio: da casa a scuola! 🏠➡️🏫 La strada che fai si chiama <b>percorso</b>. Oggi impariamo a <b>descriverlo</b> con le parole, a <b>disegnarlo</b> con le frecce e a <b>seguirlo</b> come un esploratore. 🧭",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Che cos'è un percorso?",
      html: `<p>Un <b>percorso</b> è la strada che fai per andare da un posto a un altro.</p>
<ul>
<li>🟢 Ha una <b>partenza</b>: il posto da cui parti.</li>
<li>🏁 Ha un <b>arrivo</b>: il posto dove vuoi andare.</li>
<li>➡️ In mezzo ci sono i <b>passi</b> e i <b>cambi di direzione</b>: vai avanti, giri a destra, giri a sinistra.</li>
<li>🌳 Lungo la strada vedi dei <b>punti di riferimento</b>: un albero, un negozio, una fontana. Ti aiutano a non perderti!</li>
</ul>
<p>Un percorso può essere <b>aperto</b> (partenza e arrivo sono in posti diversi) oppure <b>chiuso</b> (torni al punto di partenza, come il giro del cortile).</p>`
    },
    {
      type: "svg",
      title: "Il percorso di Leo da casa a scuola",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#dcfce7"/>
<rect x="60" y="250" width="440" height="30" fill="#d6d3d1"/>
<rect x="470" y="60" width="30" height="220" fill="#d6d3d1"/>
<rect x="470" y="60" width="90" height="30" fill="#d6d3d1"/>
<path d="M90 265 L470 265" stroke="#ef4444" stroke-width="6" stroke-dasharray="14 8" fill="none"/>
<path d="M485 265 L485 75 L540 75" stroke="#ef4444" stroke-width="6" stroke-dasharray="14 8" fill="none"/>
<text x="60" y="240" font-size="44">🏠</text>
<text x="40" y="310" font-size="16" fill="#166534" font-weight="bold">PARTENZA</text>
<text x="535" y="55" font-size="44">🏫</text>
<text x="520" y="120" font-size="16" fill="#1d4ed8" font-weight="bold">ARRIVO 🏁</text>
<text x="260" y="235" font-size="40">🌳</text>
<text x="250" y="200" font-size="15" fill="#166534">albero grande</text>
<text x="400" y="170" font-size="36">⛲</text>
<text x="350" y="140" font-size="15" fill="#0369a1">fontana</text>
<text x="490" y="290" font-size="15" fill="#b91c1c" font-weight="bold">gira a sinistra ↰</text>
<text x="160" y="40" font-size="20" fill="#0f172a" font-weight="bold">Avanti dritto → poi gira → poi a destra</text>
</svg>`,
      caption: "Leo esce di casa, va dritto fino all'angolo passando davanti all'albero grande, gira a sinistra, passa vicino alla fontana, poi gira a destra e arriva a scuola."
    },
    {
      type: "remember",
      title: "Per descrivere un percorso servono 3 cose",
      html: `<p>1️⃣ <b>Da dove parto</b> e <b>dove arrivo</b>.</p>
<p>2️⃣ Le <b>direzioni</b>: avanti ⬆️, indietro ⬇️, a destra ➡️, a sinistra ⬅️.</p>
<p>3️⃣ I <b>punti di riferimento</b> lungo la strada: «quando vedi la fontana, gira a destra».</p>
<p>E le istruzioni vanno dette <b>in ordine</b>: prima, poi, dopo, infine!</p>`
    },
    {
      type: "widget",
      title: "Gioco: frecce e parole",
      widget: "match",
      options: { pairs: [["⬆️", "vai avanti"], ["⬇️", "torna indietro"], ["➡️", "gira a destra"], ["⬅️", "gira a sinistra"], ["🏁", "arrivo"], ["🟢", "partenza"]] },
      caption: "Ogni freccia è un'istruzione. Abbina la freccia alle parole giuste."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le parti del percorso",
      questions: [
        { type: "mc", q: "Il posto da cui parto si chiama…", options: ["arrivo", "partenza", "ostacolo"], answer: 1, explain: "La partenza è il punto di inizio del percorso." },
        { type: "tf", q: "In un percorso chiuso torno al punto di partenza.", answer: true, explain: "Come quando fai il giro del cortile e torni dove eri." },
        { type: "mc", q: "La fontana lungo la strada è…", options: ["un punto di riferimento", "la partenza", "una freccia"], answer: 0, explain: "È una cosa che si vede bene e ci aiuta a non perderci." }
      ]
    },
    {
      type: "example",
      title: "Esempio: in palestra 🤸",
      html: `<p>Il maestro prepara un percorso:</p>
<ol>
<li>🟢 Parti dalla linea blu.</li>
<li>🐍 Fai lo slalom tra i 4 coni.</li>
<li>⭕ Salta dentro i 3 cerchi.</li>
<li>🪜 Passa <b>sotto</b> la panca.</li>
<li>🏁 Arriva al materasso rosso.</li>
</ol>
<p>Se scambi l'ordine… il percorso non è più quello giusto! Per questo usiamo <b>prima, poi, dopo, infine</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio: disegnare sul quadretto ✏️",
      html: `<p>Sul quaderno a quadretti puoi disegnare un percorso con un codice di frecce. Un quadretto = un passo.</p>
<p>Parti dal pallino e segui: <b>→ → → ↑ ↑ → →</b></p>
<p>Hai fatto 3 passi a destra, 2 in su e altri 2 a destra. Che figura viene? Una <b>scala</b>! 🪜</p>
<p>Ora inventa tu un codice e fallo seguire a un compagno: arriverà nello stesso punto?</p>`
    },
    {
      type: "svg",
      title: "Il percorso sul quadretto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#ffffff"/>
<g stroke="#bfdbfe" stroke-width="2">
<path d="M60 20 V280 M100 20 V280 M140 20 V280 M180 20 V280 M220 20 V280 M260 20 V280 M300 20 V280 M340 20 V280 M380 20 V280"/>
<path d="M60 20 H380 M60 60 H380 M60 100 H380 M60 140 H380 M60 180 H380 M60 220 H380 M60 260 H380"/>
</g>
<path d="M100 220 H220 V140 H300" stroke="#ef4444" stroke-width="6" fill="none"/>
<circle cx="100" cy="220" r="10" fill="#22c55e"/>
<text x="300" y="132" font-size="28" text-anchor="middle">🏁</text>
<text x="400" y="80" font-size="22" fill="#0f172a" font-weight="bold">Codice:</text>
<text x="400" y="120" font-size="28" fill="#b91c1c">→ → →</text>
<text x="400" y="160" font-size="28" fill="#b91c1c">↑ ↑</text>
<text x="400" y="200" font-size="28" fill="#b91c1c">→ →</text>
<text x="400" y="250" font-size="18" fill="#166534">🟢 = partenza</text>
</svg>`,
      caption: "Un quadretto = un passo. 3 passi a destra, 2 su, 2 a destra: ecco il percorso!"
    },
    {
      type: "3d",
      title: "Un percorso nella natura 🏞️",
      scene: "terrain",
      options: {
        features: {
          plain: { label: "Pianura (partenza)", html: "Partiamo dalla pianura, dove il terreno è piatto e si cammina facilmente. 🟢" },
          river: { label: "Fiume", html: "Per attraversare il fiume dobbiamo cercare un <b>ponte</b>: è un punto di riferimento importante! 🌉" },
          hill: { label: "Collina", html: "Saliamo sulla collina: la strada fa le curve, come un serpente. 🐍" },
          lake: { label: "Lago", html: "Giriamo intorno al lago: è un ottimo punto di riferimento, si vede da lontano. 🦆" },
          mountain: { label: "Montagna (arrivo)", html: "Arriviamo in montagna! 🏁 Da quassù vediamo tutto il percorso fatto." }
        }
      },
      caption: "Ruota il paesaggio e tocca le parti nell'ordine del percorso: pianura → fiume → collina → lago → montagna."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… Pollicino usava i sassolini? 🪨",
      html: `<p>Nella fiaba di <b>Pollicino</b>, scritta da Charles Perrault più di 300 anni fa (nel 1697), il bambino lascia cadere dei <b>sassolini bianchi</b> lungo la strada nel bosco. Al ritorno li segue e ritrova la casa! La volta dopo usa le briciole di pane… ma gli uccellini se le mangiano. 🐦 Morale: i punti di riferimento devono essere <b>stabili</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… le api spiegano il percorso ballando? 🐝",
      html: `<p>Quando un'ape trova dei fiori, torna all'alveare e fa una <b>danza</b>: muovendo l'addome indica alle altre api <b>la direzione</b> e <b>quanto sono lontani</b> i fiori. Lo ha scoperto lo scienziato <b>Karl von Frisch</b>, che per questo ha vinto il premio Nobel nel 1973.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i percorsi",
      intro: "<p>Un percorso si può dire, disegnare, ballare… Scegli il modo che ti piace di più!</p>",
      tabs: [
        {
          label: "🤖 Fai il robot",
          html: `<p>Gioca in due: uno fa il <b>robot</b> 🤖 e chiude gli occhi, l'altro è il <b>programmatore</b> e dà i comandi:</p>
<p>«2 passi avanti. Gira a destra. 3 passi avanti. Stop!»</p>
<p>Il robot fa <b>solo</b> quello che gli dici. Se sbatte contro la sedia… il programmatore deve correggere le istruzioni!</p>`
        },
        {
          label: "🇸🇪 Orienteering",
          html: `<p>In <b>Svezia</b> e in Norvegia i bambini fanno l'<b>orienteering</b>: corrono nel bosco con una mappa e una bussola e devono trovare delle <b>lanterne</b> bianche e arancioni nascoste. 🟧⬜ Vince chi le trova tutte, nell'ordine giusto, nel minor tempo.</p>
<p>Puoi farlo anche tu in giardino: nascondi 5 oggetti e disegna una mappa per trovarli!</p>`
        },
        {
          label: "📱 Come il navigatore",
          html: `<p>Il navigatore della macchina parla come un bravo descrittore di percorsi:</p>
<p>🗣️ «Tra 100 metri, gira a destra.» «Alla rotonda, prendi la seconda uscita.» «Sei arrivato a destinazione.»</p>
<p>Prova a fare il «navigatore» per la tua famiglia sulla strada di casa!</p>`
        },
        {
          label: "🔀 Metti in ordine",
          html: `<p>Un percorso è una <b>sequenza</b>: conta l'ordine. Abbina ogni parola al momento giusto.</p>`,
          widget: "match",
          options: { pairs: [["Prima", "esco di casa 🏠"], ["Poi", "attraverso sulle strisce 🚸"], ["Dopo", "passo davanti al panificio 🥖"], ["Infine", "entro a scuola 🏫"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del percorso",
      nodes: [
        { id: "perc", label: "Percorso", x: 50, y: 8, color: "#ef4444", html: "<p>La strada da un posto a un altro.</p>", why: "<p>Da sempre gli esseri umani si spostano per cercare cibo, acqua e casa. Ricordare la strada era importantissimo per sopravvivere!</p>" },
        { id: "part", label: "Partenza", x: 15, y: 32, color: "#22c55e", html: "<p>Il punto da cui inizio.</p>", why: "<p>Senza sapere da dove parti, nessuna istruzione funziona: anche il navigatore prima cerca <b>dove sei</b>.</p>" },
        { id: "arr", label: "Arrivo", x: 85, y: 32, color: "#3b82f6", html: "<p>Il punto dove voglio andare.</p>", why: "<p>È lo scopo del percorso. Si chiama anche <b>meta</b> o <b>destinazione</b>.</p>" },
        { id: "dir", label: "Direzioni", x: 30, y: 60, color: "#f97316", html: "<p>Avanti, indietro, destra, sinistra.</p>", why: "<p>Sono le parole della posizione usate per muoversi. Più avanti imparerai anche i <b>punti cardinali</b> (nord, sud, est, ovest), che non cambiano quando ti giri.</p>" },
        { id: "rif", label: "Punti di riferimento", x: 70, y: 60, color: "#a855f7", html: "<p>Cose ben visibili lungo la strada.</p>", why: "<p>Il nostro cervello ricorda meglio le immagini (un albero, una fontana) che i numeri. Anche gli antichi marinai si orientavano con i fari e le montagne.</p>" },
        { id: "ordine", label: "Ordine (sequenza)", x: 50, y: 78, color: "#eab308", html: "<p>Prima, poi, dopo, infine.</p>", why: "<p>Se cambi l'ordine dei passi arrivi in un posto diverso. È la stessa idea del <b>coding</b>: istruzioni una dopo l'altra.</p>" },
        { id: "mappa", label: "Disegno e mappa", x: 20, y: 94, color: "#14b8a6", html: "<p>Il percorso disegnato visto dall'alto.</p>", why: "<p>Le mappe più antiche furono incise su pietra e argilla migliaia di anni fa: servivano a ricordare e raccontare la strada.</p>" },
        { id: "codice", label: "Codice di frecce", x: 80, y: 94, color: "#ec4899", html: "<p>→ → ↑ : il percorso scritto con simboli.</p>", why: "<p>Le frecce sono un linguaggio che capiscono tutti, in ogni Paese. Anche i robot a pavimento (come Bee-Bot) si programmano così.</p>" }
      ],
      edges: [
        ["perc", "part", "inizia"], ["perc", "arr", "finisce"], ["part", "dir", ""], ["arr", "rif", ""], ["dir", "ordine", "in"], ["rif", "ordine", ""], ["ordine", "mappa", "si disegna"], ["ordine", "codice", "si scrive"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: segui le frecce",
      questions: [
        { type: "mc", q: "La freccia ⬅️ vuol dire…", options: ["gira a destra", "gira a sinistra", "vai avanti"], answer: 1, explain: "La freccia punta a sinistra." },
        { type: "num", q: "Codice: → → → ↑ ↑ → →. Quanti passi fai in tutto?", answer: 7, explain: "3 + 2 + 2 = 7 passi." },
        { type: "order", q: "Metti in ordine il percorso di Leo:", items: ["Esce di casa", "Passa davanti all'albero", "Gira a sinistra", "Passa vicino alla fontana", "Arriva a scuola"], explain: "È l'ordine che si vede nel disegno: partenza → albero → svolta → fontana → arrivo." }
      ]
    }
  ],
  glossary: [
    { t: "Percorso", d: "La strada per andare da un posto a un altro." },
    { t: "Partenza", d: "Il punto da cui comincia il percorso." },
    { t: "Arrivo", d: "Il punto dove finisce il percorso (meta)." },
    { t: "Percorso aperto", d: "Partenza e arrivo sono in posti diversi." },
    { t: "Percorso chiuso", d: "Si torna al punto di partenza." },
    { t: "Punto di riferimento", d: "Una cosa ben visibile che aiuta a orientarsi." },
    { t: "Direzione", d: "Da che parte si va: avanti, indietro, destra, sinistra." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Un percorso è…", options: ["la strada da un posto a un altro", "un tipo di albero", "un gioco con la palla"], answer: 0, explain: "Il percorso è la strada che facciamo." },
      { type: "mc", q: "Il posto dove finisce il percorso si chiama…", options: ["partenza", "arrivo", "freccia"], answer: 1, explain: "L'arrivo, o meta." },
      { type: "tf", q: "Nel percorso chiuso arrivo in un posto diverso da quello di partenza.", answer: false, explain: "No: nel percorso chiuso torno al punto di partenza." },
      { type: "mc", q: "Quale è un buon punto di riferimento?", options: ["una nuvola", "una grande fontana", "un gatto che passa"], answer: 1, explain: "La fontana sta sempre lì; nuvole e gatti si spostano!" },
      { type: "mc", q: "La freccia ➡️ vuol dire…", options: ["gira a destra", "torna indietro", "fermati"], answer: 0, explain: "Punta a destra." },
      { type: "num", q: "Fai 4 passi avanti e poi 3 passi avanti. Quanti passi hai fatto?", answer: 7, explain: "4 + 3 = 7 passi." },
      { type: "order", q: "Metti in ordine queste parole del percorso:", items: ["prima", "poi", "dopo", "infine"], explain: "Prima → poi → dopo → infine." },
      { type: "tf", q: "Se cambio l'ordine delle istruzioni, posso arrivare in un posto sbagliato.", answer: true, explain: "L'ordine è importante, come nel coding!" },
      { type: "text", q: "Come si chiama il bambino della fiaba che lasciava i sassolini?", answer: ["pollicino"], explain: "Pollicino, nella fiaba di Charles Perrault." },
      { type: "mc", q: "Perché le briciole di Pollicino non hanno funzionato?", options: ["Erano troppo grandi", "Gli uccellini le hanno mangiate", "Erano invisibili"], answer: 1, explain: "Un buon punto di riferimento deve restare al suo posto." },
      { type: "mc", q: "Il codice ↑ ↑ → vuol dire…", options: ["2 passi su e 1 a destra", "1 passo su e 2 a destra", "3 passi a sinistra"], answer: 0, explain: "Due frecce in su, una a destra." }
    ]
  }
});
