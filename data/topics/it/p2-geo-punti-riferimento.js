TOPIC('it', {
  id: "p2-geo-punti-riferimento",
  title: "I punti di riferimento",
  intro: "Come fai a non perderti quando vai a scuola o al parco? 🤔 Usi i <b>punti di riferimento</b>: cose che vedi intorno a te e che ti aiutano a capire <b>dove sei</b> e <b>dove andare</b>. Oggi impariamo a <b>orientarci</b> 🧭.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Che cos'è un punto di riferimento? 📍",
      html: `<p>Un <b>punto di riferimento</b> è qualcosa che si vede bene e che <b>non si sposta</b>.</p>
<p>Per esempio, per andare dalla nonna: <i>«Passo davanti alla <b>fontana</b> ⛲, giro vicino alla <b>farmacia</b> ➕ e la casa è quella con il <b>portone verde</b> 🟩.»</i></p>
<p>Un buon punto di riferimento è:</p>
<ul>
<li>👀 <b>facile da vedere</b> (grande, colorato, alto);</li>
<li>🧱 <b>fisso</b>: resta sempre lì;</li>
<li>⭐ <b>speciale</b>: non ce ne sono tanti uguali vicino.</li>
</ul>
<p><b>Orientarsi</b> vuol dire capire dove ci si trova e quale strada prendere.</p>`
    },
    {
      type: "text",
      title: "Fissi o mobili? 🌳🚗",
      html: `<p>Attenzione: non tutte le cose vanno bene come punti di riferimento!</p>
<table>
<tr><th>✅ Fissi (vanno bene)</th><th>❌ Mobili (non vanno bene)</th></tr>
<tr><td>⛪ una chiesa</td><td>🚗 un'automobile parcheggiata</td></tr>
<tr><td>🌳 un grande albero</td><td>🐕 un cane che dorme</td></tr>
<tr><td>⛲ una fontana</td><td>🚌 l'autobus</td></tr>
<tr><td>🏔️ una montagna</td><td>☁️ una nuvola</td></tr>
<tr><td>🏫 la scuola</td><td>🧑 un signore seduto sulla panchina</td></tr>
</table>
<p>Se dico <i>«Gira dove c'è la macchina rossa»</i> e la macchina se ne va… mi perdo! 😵</p>`
    },
    {
      type: "widget",
      title: "Gioco: fisso o mobile?",
      widget: "classify",
      options: {
        groups: ["🧱 Fisso: buon punto di riferimento", "🚶 Mobile: non va bene"],
        items: [
          ["⛪ campanile", 0],
          ["🚲 bicicletta", 1],
          ["🌉 ponte", 0],
          ["🐈 gatto", 1],
          ["🏰 castello", 0],
          ["🚚 camion", 1],
          ["🗼 torre", 0],
          ["🎈 palloncino", 1],
          ["🚦 semaforo", 0]
        ]
      },
      caption: "Metti ogni cosa nel gruppo giusto."
    },
    {
      type: "text",
      title: "Le parole per orientarsi ↔️↕️",
      html: `<p>Per spiegare dove si trova una cosa usiamo le <b>parole della posizione</b>. Dipendono da <b>chi guarda</b>!</p>
<ul>
<li>⬆️⬇️ <b>sopra</b> / <b>sotto</b>: il quadro è <i>sopra</i> la lavagna.</li>
<li>➡️⬅️ <b>davanti</b> / <b>dietro</b>: il giardino è <i>dietro</i> la scuola.</li>
<li>👈👉 <b>a sinistra</b> / <b>a destra</b>: la porta è <i>alla mia destra</i>.</li>
<li>🤏📏 <b>vicino</b> / <b>lontano</b>: il bar è <i>vicino</i> a casa.</li>
<li>🎯 <b>in mezzo</b> / <b>tra</b>: la panchina è <i>tra</i> due alberi.</li>
</ul>
<p>💡 <b>Trucco per la destra:</b> la mano destra è di solito quella con cui scrivi (se sei mancino, è l'altra!). Molti bambini mettono un braccialetto sul polso destro.</p>`
    },
    {
      type: "svg",
      title: "Dove si trova? Guarda il disegno",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#bae6fd"/>
<rect y="230" width="600" height="90" fill="#86efac"/>
<rect x="230" y="110" width="150" height="120" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<polygon points="220,110 305,50 390,110" fill="#b91c1c"/>
<rect x="290" y="170" width="35" height="60" fill="#7c2d12"/>
<text x="305" y="150" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">SCUOLA</text>
<rect x="95" y="160" width="16" height="70" fill="#78350f"/>
<circle cx="103" cy="140" r="40" fill="#16a34a"/>
<text x="103" y="265" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">albero</text>
<circle cx="490" cy="215" r="28" fill="#93c5fd" stroke="#1e40af" stroke-width="3"/>
<rect x="484" y="170" width="12" height="30" fill="#64748b"/>
<text x="490" y="265" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">fontana</text>
<circle cx="520" cy="50" r="28" fill="#facc15"/>
<text x="520" y="100" font-size="16" text-anchor="middle" fill="#92400e" font-weight="bold">sole</text>
<rect x="400" y="280" width="60" height="22" rx="5" fill="#a16207"/>
<text x="430" y="297" font-size="13" text-anchor="middle" fill="#ffffff">panchina</text>
<text x="160" y="300" font-size="17" text-anchor="middle" fill="#0f172a">L'albero è a SINISTRA della scuola</text>
</svg>`,
      caption: "Guardando il disegno: l'albero è a sinistra della scuola, la fontana a destra, il sole sopra la fontana."
    },
    {
      type: "quiz",
      title: "Mini-quiz: guarda il disegno",
      questions: [
        { type: "mc", q: "Nel disegno, che cosa c'è a destra della scuola?", options: ["L'albero", "La fontana", "Niente"], answer: 1, explain: "La fontana è a destra della scuola." },
        { type: "tf", q: "Un'auto parcheggiata è un buon punto di riferimento.", answer: false, explain: "Le auto si spostano: non è un punto fisso." },
        { type: "mc", q: "Quale parola è il contrario di «vicino»?", options: ["sotto", "lontano", "dietro"], answer: 1, explain: "Vicino ↔ lontano." }
      ]
    },
    {
      type: "text",
      title: "Il Sole: un punto di riferimento nel cielo ☀️",
      html: `<p>Anche il cielo ci aiuta a orientarci!</p>
<ul>
<li>🌅 La mattina il Sole <b>sorge</b> (spunta) da una parte che si chiama <b>EST</b>.</li>
<li>🌞 A mezzogiorno è alto verso il <b>SUD</b>.</li>
<li>🌇 La sera <b>tramonta</b> dalla parte opposta, a <b>OVEST</b>.</li>
<li>🧊 Dietro di noi, quando guardiamo il Sole di mezzogiorno, c'è il <b>NORD</b>.</li>
</ul>
<p>Nord, Sud, Est e Ovest sono i <b>punti cardinali</b>. Sono uguali per tutti, in tutto il mondo: per questo sono più precisi di «destra» e «sinistra».</p>
<p>🧭 La <b>bussola</b> ha un ago calamitato che indica sempre il <b>Nord</b>.</p>`
    },
    {
      type: "svg",
      title: "La rosa dei venti",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fefce8"/>
<circle cx="300" cy="160" r="120" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<polygon points="300,45 318,160 300,175 282,160" fill="#dc2626"/>
<polygon points="300,275 318,160 300,145 282,160" fill="#1e3a8a"/>
<polygon points="185,160 300,142 315,160 300,178" fill="#64748b"/>
<polygon points="415,160 300,142 285,160 300,178" fill="#f59e0b"/>
<circle cx="300" cy="160" r="8" fill="#0f172a"/>
<text x="300" y="30" font-size="22" text-anchor="middle" fill="#dc2626" font-weight="bold">N - Nord</text>
<text x="300" y="305" font-size="22" text-anchor="middle" fill="#1e3a8a" font-weight="bold">S - Sud</text>
<text x="490" y="168" font-size="22" text-anchor="middle" fill="#b45309" font-weight="bold">E - Est</text>
<text x="105" y="168" font-size="22" text-anchor="middle" fill="#475569" font-weight="bold">O - Ovest</text>
<text x="530" y="210" font-size="15" text-anchor="middle" fill="#b45309">il Sole sorge</text>
<text x="80" y="210" font-size="15" text-anchor="middle" fill="#475569">il Sole tramonta</text>
</svg>`,
      caption: "La rosa dei venti mostra i 4 punti cardinali. L'ago rosso della bussola punta al Nord."
    },
    {
      type: "example",
      title: "Esempio pratico: la strada per la scuola 🎒",
      html: `<p>Sara descrive la sua strada usando i punti di riferimento:</p>
<ol>
<li>🏠 Esco di casa e vado verso il <b>panificio</b> 🥖.</li>
<li>➡️ Al panificio giro <b>a destra</b>.</li>
<li>⛲ Cammino dritto fino alla <b>fontana</b> della piazza.</li>
<li>⬅️ Alla fontana giro <b>a sinistra</b>.</li>
<li>🏫 La scuola è <b>davanti</b> a me, accanto alla <b>chiesa</b> ⛪.</li>
</ol>
<p>Prova anche tu: scrivi la strada da casa tua a scuola con almeno <b>3 punti di riferimento</b>!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: perso al parco giochi 🎠",
      html: `<p>Luca si è allontanato dalla mamma e non la vede più. Che cosa fa?</p>
<ul>
<li>😮‍💨 Si ferma e respira.</li>
<li>👀 Cerca un <b>punto di riferimento</b> che conosce: lo <b>scivolo giallo</b> grande, vicino a dove si erano seduti.</li>
<li>🚶 Torna verso lo scivolo e aspetta lì.</li>
</ul>
<p>💡 Un consiglio: quando arrivi in un posto nuovo, scegli con i tuoi genitori un <b>punto d'incontro</b> facile da vedere («ci vediamo sotto l'orologio grande»).</p>`
    },
    {
      type: "3d",
      title: "I punti di riferimento della natura 🏞️",
      scene: "terrain",
      caption: "Ruota il paesaggio e tocca le parti: sono punti di riferimento naturali, grandi e fissi.",
      options: {
        features: {
          mountain: { label: "Montagna", html: "Si vede da lontanissimo e non si sposta mai: un punto di riferimento perfetto. Chi vive a Torino, per esempio, vede le Alpi e il Monviso." },
          peak: { label: "Vetta", html: "La punta della montagna. Gli escursionisti la usano per capire in che direzione camminare." },
          river: { label: "Fiume", html: "Seguendo un fiume si arriva al mare o a un lago. Molte città sono nate lungo i fiumi: «abito di qua o di là dal fiume»." },
          lake: { label: "Lago", html: "Una grande distesa d'acqua dolce ferma: facile da riconoscere anche dall'alto." },
          hill: { label: "Collina", html: "Più bassa della montagna. Spesso sulle colline c'è un castello o una chiesa che si vede da lontano." },
          valley: { label: "Valle", html: "La parte bassa tra due montagne. Spesso c'è un fiume e passa la strada principale." },
          sea: { label: "Mare", html: "Sulla costa il mare è un ottimo riferimento: «la spiaggia è da quella parte»." }
        }
      }
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🗿",
      html: `<p>Nel Grande Nord del Canada, dove c'è solo neve e ghiaccio e tutto sembra uguale, il popolo <b>Inuit</b> costruisce gli <b>inukshuk</b>: mucchi di pietre a forma di persona. Servono come <b>punti di riferimento</b> per indicare la strada, un buon posto per pescare o un pericolo.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🐝",
      html: `<p>Anche gli animali usano i punti di riferimento! Le <b>api</b> ricordano alberi e case per tornare all'alveare e usano il <b>Sole</b> come bussola. I <b>piccioni viaggiatori</b> sanno tornare a casa da centinaia di chilometri, aiutandosi con il Sole, con il campo magnetico della Terra e con fiumi e strade che vedono dall'alto.</p>`
    },
    {
      type: "widget",
      title: "Trova i punti di riferimento sulla piantina",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#dcfce7"/>
<rect x="0" y="130" width="600" height="40" fill="#9ca3af"/>
<rect x="280" y="0" width="40" height="300" fill="#9ca3af"/>
<rect x="60" y="40" width="120" height="70" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<rect x="400" y="30" width="80" height="80" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<circle cx="440" cy="70" r="12" fill="#92400e"/>
<circle cx="300" cy="150" r="22" fill="#60a5fa" stroke="#1e40af" stroke-width="3"/>
<circle cx="120" cy="230" r="35" fill="#16a34a"/>
<rect x="400" y="200" width="120" height="70" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>
</svg>`,
        spots: [
          { x: 120, y: 75, label: "Scuola" },
          { x: 440, y: 70, label: "Chiesa con il campanile" },
          { x: 300, y: 150, label: "Fontana" },
          { x: 120, y: 230, label: "Albero grande" },
          { x: 460, y: 235, label: "Biblioteca" }
        ]
      },
      caption: "Clicca su ogni punto e scegli il nome. La fontana è proprio all'incrocio delle due strade!"
    },
    {
      type: "alternatives",
      title: "Altri modi per orientarsi",
      intro: "Nel mondo le persone si orientano in tanti modi diversi. Prova a scoprirli!",
      tabs: [
        {
          label: "🌊 I navigatori polinesiani",
          html: `<p>Nell'Oceano Pacifico, migliaia di anni fa, i <b>Polinesiani</b> viaggiavano da un'isola all'altra in canoa, per migliaia di chilometri, <b>senza bussola né mappe</b>!</p>
<ul>
<li>⭐ Di notte guardavano le <b>stelle</b>: ognuna sorge in un punto preciso dell'orizzonte.</li>
<li>🌊 Sentivano la forma delle <b>onde</b> sotto la canoa.</li>
<li>🐦 Seguivano gli <b>uccelli</b> marini, che la sera tornano verso terra.</li>
<li>☁️ Cercavano le <b>nuvole</b> ferme sopra le isole.</li>
</ul>
<p>Per loro le stelle, le onde e gli uccelli erano punti di riferimento!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -17.5, lon: -149.6, label: "Tahiti", color: "#f97316" },
              { lat: 19.6, lon: -155.5, label: "Hawaii", color: "#ef4444" },
              { lat: -41, lon: 174, label: "Nuova Zelanda", color: "#22c55e" },
              { lat: -27.1, lon: -109.4, label: "Isola di Pasqua", color: "#a855f7" }
            ],
            routes: [{ points: [0, 1], color: "#0ea5e9" }, { points: [0, 2], color: "#0ea5e9" }, { points: [0, 3], color: "#0ea5e9" }]
          }
        },
        {
          label: "🎶 Le «vie dei canti» australiane",
          html: `<p>I popoli <b>aborigeni</b> dell'Australia hanno le <b>songlines</b>, le «vie dei canti»: lunghe canzoni che descrivono, uno dopo l'altro, i punti di riferimento del viaggio (una roccia, una pozza d'acqua, una collina).</p>
<p>Cantando la canzone si ricorda la strada! 🎵 È un po' come se tu inventassi una filastrocca: <i>«Dal fornaio giro a destra, la fontana fa la festa, poi a sinistra c'è la chiesa…»</i></p>`
        },
        {
          label: "🤖 Come il navigatore dell'auto",
          html: `<p>Il <b>navigatore</b> (GPS) dei telefoni e delle auto parla proprio con i punti di riferimento: <i>«Tra 200 metri, alla rotonda, prendi la seconda uscita»</i>.</p>
<p>Sa dove sei grazie ai <b>satelliti</b> che girano intorno alla Terra 🛰️: il telefono riceve i loro segnali e calcola la sua posizione. Ma anche il navigatore ha bisogno di una <b>mappa</b> e di parole come destra, sinistra, dritto.</p>`
        },
        {
          label: "🧍 Il gioco del corpo",
          html: `<p>Mettiti in piedi in mezzo alla stanza. 🧍</p>
<ol>
<li>Indica con la mano destra la <b>porta</b>.</li>
<li>Girati: adesso la porta è <b>dietro</b> di te!</li>
<li>Girati ancora di un quarto: ora è a <b>sinistra</b>?</li>
</ol>
<p>Hai scoperto che <b>destra, sinistra, davanti e dietro cambiano</b> se tu ti giri, ma la porta resta sempre lì. Per questo i punti di riferimento fissi sono così utili!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f1f5f9"/>
<circle cx="300" cy="80" r="26" fill="#fcd9b6" stroke="#92400e" stroke-width="2"/>
<rect x="278" y="108" width="44" height="70" rx="8" fill="#3b82f6"/>
<line x1="230" y1="130" x2="278" y2="125" stroke="#334155" stroke-width="8"/>
<line x1="322" y1="125" x2="370" y2="130" stroke="#334155" stroke-width="8"/>
<text x="160" y="140" font-size="20" text-anchor="middle" fill="#b91c1c" font-weight="bold">SINISTRA</text>
<text x="450" y="140" font-size="20" text-anchor="middle" fill="#15803d" font-weight="bold">DESTRA</text>
<text x="300" y="30" font-size="20" text-anchor="middle" fill="#0f172a" font-weight="bold">DAVANTI (verso di te)</text>
<text x="300" y="208" font-size="16" text-anchor="middle" fill="#475569">Il bambino ti guarda: la sua destra è dalla tua sinistra!</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: come ci orientiamo",
      nodes: [
        { id: "orientarsi", label: "Orientarsi", x: 50, y: 6, color: "#6366f1", html: "<p>Capire dove siamo e dove andare.</p>", why: "<p>La parola viene da <b>Oriente</b>, cioè l'Est, dove sorge il Sole. Una volta le carte geografiche e le chiese si disegnavano e costruivano «guardando a Oriente»: orientarsi voleva dire proprio trovare l'Est.</p>" },
        { id: "riferimento", label: "Punti di riferimento", x: 25, y: 30, color: "#f97316", html: "<p>Cose fisse e ben visibili: una chiesa, un albero, una fontana.</p>", why: "<p>Il nostro cervello ricorda meglio le <b>immagini</b> delle parole. Nel cervello c'è una parte, l'<b>ippocampo</b>, che crea una specie di «mappa» dei luoghi: gli scienziati che l'hanno scoperta hanno vinto il premio Nobel nel 2014.</p>" },
        { id: "posizione", label: "Parole della posizione", x: 75, y: 30, color: "#0ea5e9", html: "<p>Sopra, sotto, davanti, dietro, destra, sinistra, vicino, lontano.</p>", why: "<p>Queste parole dipendono da <b>chi guarda</b>: la tua destra è la sinistra di chi ti sta di fronte. Per questo sono comode ma possono confondere.</p>" },
        { id: "fissi", label: "Fissi e mobili", x: 10, y: 55, color: "#16a34a", html: "<p>Solo le cose che non si spostano sono buoni riferimenti.</p>", why: "<p>Un riferimento deve essere sempre nello stesso posto, altrimenti la descrizione della strada non funziona più la volta dopo.</p>" },
        { id: "sole", label: "Il Sole", x: 45, y: 55, color: "#eab308", html: "<p>Sorge a est e tramonta a ovest.</p>", why: "<p>Il Sole sembra muoversi nel cielo, ma in realtà è la <b>Terra che gira</b> su sé stessa da ovest verso est, una volta al giorno. Per questo vediamo il Sole spuntare sempre dalla parte dell'est.</p>" },
        { id: "cardinali", label: "Punti cardinali", x: 75, y: 72, color: "#ef4444", html: "<p>Nord, Sud, Est, Ovest.</p>", why: "<p>Sono uguali per tutti, in tutto il mondo, perché dipendono dalla Terra e non da noi. Si chiamano «cardinali» dal latino <i>cardo</i>, cardine: sono i «cardini» su cui gira l'orientamento.</p>" },
        { id: "bussola", label: "La bussola", x: 45, y: 92, color: "#a855f7", html: "<p>Strumento con un ago che indica il Nord.</p>", why: "<p>La Terra è come un'enorme <b>calamita</b>: l'ago magnetico si gira verso il Nord. La bussola fu inventata in <b>Cina</b> e arrivò in Europa nel Medioevo; i marinai di <b>Amalfi</b> la usavano molto.</p>" },
        { id: "mappe", label: "Mappe", x: 15, y: 85, color: "#14b8a6", html: "<p>Disegni dei luoghi visti dall'alto.</p>", why: "<p>Su una mappa i punti di riferimento sono disegnati con dei <b>simboli</b>: così chiunque può trovare la strada anche in un posto mai visto.</p>" }
      ],
      edges: [
        ["orientarsi", "riferimento", "con i"],
        ["orientarsi", "posizione", "con le"],
        ["riferimento", "fissi", "devono essere"],
        ["orientarsi", "sole", "anche col"],
        ["sole", "cardinali", "indica i"],
        ["cardinali", "bussola", "trovati con la"],
        ["riferimento", "mappe", "disegnati sulle"],
        ["posizione", "cardinali", "più precisi:"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: il Sole e la bussola",
      questions: [
        { type: "mc", q: "Da che parte sorge il Sole?", options: ["Nord", "Est", "Ovest"], answer: 1, explain: "Il Sole sorge a Est." },
        { type: "mc", q: "Dove punta l'ago della bussola?", options: ["Verso il Nord", "Verso il Sole", "Verso casa"], answer: 0, explain: "L'ago calamitato indica sempre il Nord." },
        { type: "num", q: "Quanti sono i punti cardinali?", answer: 4, tol: 0, explain: "Nord, Sud, Est e Ovest." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare 📌",
      html: `<ul>
<li>Un <b>punto di riferimento</b> è una cosa <b>fissa</b> e <b>facile da vedere</b>.</li>
<li>Le parole della posizione (destra, sinistra, davanti, dietro…) <b>cambiano</b> se ci giriamo.</li>
<li>Il Sole sorge a <b>Est</b> e tramonta a <b>Ovest</b>.</li>
<li>I <b>punti cardinali</b> sono Nord, Sud, Est, Ovest; la <b>bussola</b> indica il Nord.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Punto di riferimento", d: "Una cosa fissa e ben visibile che ci aiuta a orientarci." },
    { t: "Orientarsi", d: "Capire dove ci si trova e quale direzione prendere." },
    { t: "Fisso", d: "Che non si sposta mai." },
    { t: "Mobile", d: "Che si può spostare o si muove da solo." },
    { t: "Punti cardinali", d: "Nord, Sud, Est, Ovest: le direzioni uguali per tutti." },
    { t: "Bussola", d: "Strumento con un ago magnetico che indica il Nord." },
    { t: "Rosa dei venti", d: "Disegno a stella che mostra i punti cardinali." },
    { t: "Percorso", d: "La strada che si fa per andare da un posto a un altro." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è il miglior punto di riferimento?", options: ["🐕 Un cane", "⛪ Un campanile", "☁️ Una nuvola"], answer: 1, explain: "Il campanile è fisso e si vede da lontano." },
      { type: "tf", q: "Un punto di riferimento deve essere fisso.", answer: true, explain: "Se si sposta, non ci aiuta più a trovare la strada." },
      { type: "mc", q: "Il contrario di «sopra» è…", options: ["sotto", "dietro", "lontano"], answer: 0, explain: "Sopra ↔ sotto." },
      { type: "mc", q: "Il Sole tramonta a…", options: ["Est", "Ovest", "Nord"], answer: 1, explain: "Sorge a Est e tramonta a Ovest." },
      { type: "text", q: "Come si chiama lo strumento che indica il Nord?", answer: ["bussola", "la bussola"], explain: "La bussola, con il suo ago calamitato." },
      { type: "order", q: "Metti in ordine il percorso di Sara: casa → … → scuola.", items: ["Esco di casa", "Al panificio giro a destra", "Arrivo alla fontana", "Giro a sinistra", "Entro a scuola"], explain: "È l'ordine della strada descritta nell'esempio." },
      { type: "tf", q: "Se mi giro, la mia destra e la mia sinistra cambiano rispetto alle cose intorno.", answer: true, explain: "Destra e sinistra dipendono da come sono girato io." },
      { type: "mc", q: "Una persona è di fronte a te e alza la sua mano destra. Da che parte la vedi?", options: ["Alla mia destra", "Alla mia sinistra", "Sopra di me"], answer: 1, explain: "Chi ti sta di fronte è girato al contrario: la sua destra è dalla tua sinistra." },
      { type: "num", q: "Quanti punti cardinali ci sono?", answer: 4, tol: 0, explain: "Nord, Sud, Est, Ovest." },
      { type: "mc", q: "Che cosa costruiscono gli Inuit per indicare la strada?", options: ["Gli inukshuk, mucchi di pietre", "Dei semafori", "Delle torri di ghiaccio"], answer: 0, explain: "Gli inukshuk sono punti di riferimento di pietra." },
      { type: "text", q: "Il punto cardinale opposto al Nord è il…", answer: ["sud"], explain: "Nord ↔ Sud, Est ↔ Ovest." }
    ]
  }
});
