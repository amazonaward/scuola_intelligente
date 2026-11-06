TOPIC('it', {
  id: "p1-sci-cinque-sensi",
  title: "I cinque sensi",
  intro: "Come facciamo a sapere che il gelato è freddo 🍦, che il sole è luminoso ☀️ o che la mamma ci sta chiamando? Grazie ai <b>cinque sensi</b>! Sono come cinque «finestre» che il nostro corpo apre sul mondo.",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Cosa sono i sensi?",
      html: "<p>I <b>sensi</b> ci aiutano a conoscere tutto quello che c'è intorno a noi.</p>" +
        "<p>Ogni senso ha il suo <b>organo</b>, cioè la parte del corpo che lavora per lui:</p>" +
        "<ul><li>👀 <b>Vista</b> → gli <b>occhi</b>: vediamo colori, forme, luce.</li>" +
        "<li>👂 <b>Udito</b> → le <b>orecchie</b>: sentiamo suoni e rumori.</li>" +
        "<li>👃 <b>Olfatto</b> → il <b>naso</b>: sentiamo gli odori e i profumi.</li>" +
        "<li>👅 <b>Gusto</b> → la <b>lingua</b>: sentiamo i sapori.</li>" +
        "<li>✋ <b>Tatto</b> → la <b>pelle</b>: sentiamo caldo, freddo, morbido, ruvido.</li></ul>" +
        "<p>Tutte le informazioni arrivano al <b>cervello</b> 🧠, che le capisce.</p>"
    },
    {
      type: "svg",
      title: "I sensi e i loro organi",
      svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="600" height="320" fill="#f0f9ff"/>' +
        '<circle cx="300" cy="150" r="95" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>' +
        '<path d="M210 120 Q300 30 390 120" fill="#7c2d12"/>' +
        '<ellipse cx="265" cy="135" rx="14" ry="10" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="265" cy="135" r="6" fill="#1e3a8a"/>' +
        '<ellipse cx="335" cy="135" rx="14" ry="10" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="335" cy="135" r="6" fill="#1e3a8a"/>' +
        '<path d="M300 145 L290 175 L305 178" fill="none" stroke="#c2410c" stroke-width="3"/>' +
        '<path d="M270 200 Q300 225 330 200" fill="#ef4444" stroke="#991b1b" stroke-width="3"/>' +
        '<ellipse cx="203" cy="155" rx="12" ry="22" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>' +
        '<ellipse cx="397" cy="155" rx="12" ry="22" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>' +
        '<g font-size="20" font-weight="bold">' +
        '<line x1="250" y1="130" x2="90" y2="60" stroke="#2563eb" stroke-width="2"/><text x="20" y="55" fill="#2563eb">👀 VISTA</text>' +
        '<line x1="410" y1="155" x2="480" y2="70" stroke="#9333ea" stroke-width="2"/><text x="455" y="60" fill="#9333ea">👂 UDITO</text>' +
        '<line x1="295" y1="170" x2="110" y2="200" stroke="#16a34a" stroke-width="2"/><text x="10" y="210" fill="#16a34a">👃 OLFATTO</text>' +
        '<line x1="320" y1="210" x2="470" y2="250" stroke="#dc2626" stroke-width="2"/><text x="455" y="275" fill="#dc2626">👅 GUSTO</text>' +
        '<text x="230" y="300" fill="#ea580c">✋ TATTO: tutta la pelle!</text>' +
        '</g></svg>',
      caption: "Ogni senso ha il suo organo. Il tatto è dappertutto: su tutta la pelle!"
    },
    {
      type: "widget",
      title: "Trova l'organo giusto",
      widget: "labelDiagram",
      options: {
        svg: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="400" height="300" fill="#fffbeb"/>' +
          '<circle cx="200" cy="140" r="100" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>' +
          '<path d="M105 110 Q200 10 295 110" fill="#713f12"/>' +
          '<circle cx="160" cy="125" r="12" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="160" cy="125" r="6" fill="#1e3a8a"/>' +
          '<circle cx="240" cy="125" r="12" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="240" cy="125" r="6" fill="#1e3a8a"/>' +
          '<path d="M200 135 L188 170 L205 172" fill="none" stroke="#c2410c" stroke-width="3"/>' +
          '<path d="M165 200 Q200 230 235 200 Z" fill="#7f1d1d"/><ellipse cx="200" cy="212" rx="18" ry="9" fill="#f87171"/>' +
          '<ellipse cx="98" cy="145" rx="12" ry="24" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>' +
          '<ellipse cx="302" cy="145" rx="12" ry="24" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>' +
          '</svg>',
        spots: [
          { x: 160, y: 125, label: "Occhio – vista" },
          { x: 302, y: 145, label: "Orecchio – udito" },
          { x: 195, y: 160, label: "Naso – olfatto" },
          { x: 200, y: 212, label: "Lingua – gusto" },
          { x: 250, y: 75, label: "Pelle – tatto" }
        ]
      },
      caption: "Clicca su ogni punto e scegli il nome giusto."
    },
    {
      type: "example",
      title: "Esempio: a merenda con i 5 sensi 🍊",
      html: "<p>Prendi un'arancia e usa tutti i sensi:</p>" +
        "<ul><li>👀 La guardi: è <b>arancione</b> e <b>tonda</b>.</li>" +
        "<li>✋ La tocchi: la buccia è un po' <b>ruvida</b>.</li>" +
        "<li>👃 La annusi: ha un <b>profumo</b> fresco.</li>" +
        "<li>👂 La sbucci: senti un piccolo <b>«crac»</b>.</li>" +
        "<li>👅 La assaggi: è <b>dolce</b> e un po' <b>aspra</b>.</li></ul>"
    },
    {
      type: "quiz",
      title: "Mini-quiz: chi fa cosa?",
      questions: [
        { type: "mc", q: "Con quale organo senti la musica? 🎵", options: ["Occhi", "Orecchie", "Naso"], answer: 1, explain: "La musica è un suono: la sentiamo con le orecchie (udito)." },
        { type: "mc", q: "Con quale senso capisci che il cuscino è morbido?", options: ["Tatto", "Gusto", "Vista"], answer: 0, explain: "Morbido o duro lo sentiamo toccando: è il tatto." },
        { type: "tf", q: "Il naso serve per sentire gli odori.", answer: true, explain: "Sì! L'olfatto funziona con il naso." }
      ]
    },
    {
      type: "text",
      title: "Gusto e tatto: tante sensazioni",
      html: "<p>La lingua riconosce sapori diversi: <b>dolce</b> 🍬, <b>salato</b> 🥨, <b>aspro</b> 🍋, <b>amaro</b> ☕ e <b>umami</b> (il gusto «saporito», come il parmigiano 🧀).</p>" +
        "<p>Con la pelle sentiamo se una cosa è <b>calda</b> 🔥 o <b>fredda</b> ❄️, <b>liscia</b> o <b>ruvida</b>, <b>morbida</b> o <b>dura</b>, e anche se qualcosa ci fa <b>male</b>.</p>"
    },
    {
      type: "widget",
      title: "Gioco: quale senso uso?",
      widget: "classify",
      options: {
        groups: ["👀 Vista", "👂 Udito", "👅 Gusto"],
        items: [
          ["🌈 i colori dell'arcobaleno", 0],
          ["🐶 il cane che abbaia", 1],
          ["🍋 il limone aspro", 2],
          ["⭐ le stelle di notte", 0],
          ["🔔 il campanello", 1],
          ["🍯 il miele dolce", 2],
          ["🥁 il tamburo", 1],
          ["🧂 la patatina salata", 2]
        ]
      },
      caption: "Metti ogni cosa nel gruppo del senso giusto."
    },
    {
      type: "remember",
      title: "Proteggiamo i nostri sensi",
      html: "<ul><li>Non guardare mai il sole direttamente 🕶️.</li>" +
        "<li>Non ascoltare la musica troppo forte 🔊.</li>" +
        "<li>Non mettere oggetti nel naso e nelle orecchie.</li>" +
        "<li>Lava sempre le mani e i denti 🪥.</li></ul>"
    },
    {
      type: "example",
      title: "Esempio: i sensi ci proteggono 🚒",
      html: "<p>Se senti <b>odore di bruciato</b> 👃, capisci che c'è qualcosa sul fuoco. Se senti la <b>sirena</b> dei pompieri 👂, ti sposti. Se tocchi una pentola e la senti <b>calda</b> ✋, togli subito la mano. I sensi sono i nostri <b>guardiani</b>!</p>"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🐕",
      html: "<p>Il <b>cane</b> ha un olfatto fortissimo: sente gli odori molto, molto meglio di noi. Per questo i cani aiutano i soccorritori a ritrovare le persone!</p>"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 👃👅",
      html: "<p>Quando hai il raffreddore il cibo sembra non avere sapore. Succede perché <b>gusto e olfatto lavorano insieme</b>: se il naso è chiuso, la lingua da sola capisce meno!</p>"
    },
    {
      type: "3d",
      title: "Dentro l'occhio in 3D 👁️",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#f8fafc", label: "Sclera (il bianco dell'occhio)" },
        { r: 0.93, color: "#7c2d12", label: "Coroide (porta il sangue)" },
        { r: 0.87, color: "#f472b6", label: "Retina (vede la luce)" },
        { r: 0.82, color: "#bae6fd", label: "Corpo vitreo (gelatina trasparente)" }
      ] },
      caption: "L'occhio è una pallina grande più o meno come una biglia grossa. Abbiamo tagliato uno spicchio per guardare dentro. Sul davanti (qui non si vede) ci sono la pupilla, il buco nero da cui entra la luce, e l'iride, la parte colorata."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i sensi 🌈",
      intro: "<p>I sensi si capiscono meglio provandoli! Scegli un modo.</p>",
      tabs: [
        {
          label: "📬 Il cervello postino",
          html: "<p>Immagina il corpo come una città. Gli <b>organi di senso</b> (occhi, orecchie, naso, lingua, pelle) sono le <b>cassette della posta</b>: ricevono le notizie dal mondo.</p><p>I <b>nervi</b> sono i <b>postini</b>: corrono velocissimi a portare i messaggi al <b>cervello</b>, che è il capo e decide: «È caldo, togli la mano!»</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#f5f3ff"/><ellipse cx="480" cy="110" rx="90" ry="70" fill="#f9a8d4" stroke="#9d174d" stroke-width="3"/><text x="480" y="118" font-size="24" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#831843">🧠 Cervello</text><g font-size="34" text-anchor="middle"><text x="60" y="50">👁️</text><text x="60" y="100">👂</text><text x="60" y="150">👃</text><text x="60" y="200">👅</text><text x="140" y="225">✋</text></g><g stroke="#7c3aed" stroke-width="3" stroke-dasharray="8 6" fill="none"><path d="M90 40 Q250 30 390 90"/><path d="M90 90 Q250 90 390 105"/><path d="M90 140 Q250 140 390 120"/><path d="M90 190 Q250 180 395 135"/><path d="M165 215 Q300 220 410 150"/></g><text x="250" y="120" font-size="30" text-anchor="middle">🏃‍♂️📩</text><text x="240" y="160" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#5b21b6">i nervi portano i messaggi</text></svg>`
        },
        {
          label: "🧪 Esperimento: naso tappato",
          html: "<p>Prova con un adulto: chiudi gli occhi e <b>tappati il naso</b>. Fatti dare un pezzetto di mela e uno di patata cruda. Riesci a capire quale è quale?</p><p>È difficilissimo! Perché il <b>gusto</b> e l'<b>olfatto</b> lavorano in squadra: gran parte del «sapore» lo sente il naso.</p><p>Per questo, quando hai il raffreddore, il cibo sembra non sapere di niente.</p>"
        },
        {
          label: "🎵 Il suono che trema",
          html: "<p>Metti la mano sulla gola e di' «Aaaa»: senti un <b>tremolio</b>? Il suono è fatto di <b>vibrazioni</b> che viaggiano nell'aria fino alle tue orecchie.</p><p>Prova anche con un elastico tirato: pizzicalo, trema e suona! Più trema veloce, più il suono è acuto.</p>"
        },
        {
          label: "🐾 I super-sensi degli animali",
          html: "<p>Confrontiamo i nostri sensi con quelli degli animali:</p><ul><li>🐶 Il <b>cane</b> sente gli odori migliaia di volte meglio di noi.</li><li>🦅 L'<b>aquila</b> vede un coniglio da lontanissimo.</li><li>🦇 Il <b>pipistrello</b> «vede» con le orecchie: manda dei suoni e ascolta l'eco.</li><li>🐍 Alcuni <b>serpenti</b> sentono il calore degli animali vicini.</li></ul><p>Ogni animale ha i sensi che gli servono per vivere nel suo ambiente.</p>"
        },
        {
          label: "👂 Perché due?",
          html: "<p>Chiudi un occhio e prova a toccare con il dito la punta di una matita tenuta da un amico: è più difficile! Con <b>due occhi</b> capiamo quanto lontane sono le cose: vediamo in <b>3D</b>.</p><p>Anche le <b>due orecchie</b> servono: il suono arriva prima all'orecchio più vicino, e così il cervello capisce da dove viene.</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa dei sensi 🗺️",
      nodes: [
        { id: "mondo", label: "Il mondo intorno", x: 50, y: 6, color: "#f59e0b", html: "<p>Luci, suoni, profumi, sapori, cose calde o fredde: il mondo ci manda tantissime informazioni.</p>", why: "<p>Per sopravvivere ogni essere vivente deve capire cosa c'è intorno: trovare il cibo, scappare dai pericoli, riconoscere gli amici.</p>" },
        { id: "vista", label: "Vista – occhi", x: 10, y: 35, color: "#3b82f6", html: "<p>Gli <b>occhi</b> ricevono la <b>luce</b> e ci fanno vedere forme, colori e movimenti.</p>", why: "<p>Al buio non vediamo perché senza luce non arriva niente agli occhi. La luce entra dalla pupilla e arriva alla retina, in fondo all'occhio.</p>" },
        { id: "udito", label: "Udito – orecchie", x: 30, y: 35, color: "#8b5cf6", html: "<p>Le <b>orecchie</b> raccolgono i <b>suoni</b>.</p>", why: "<p>I suoni sono vibrazioni dell'aria. Dentro l'orecchio c'è il timpano, una pellicina che vibra come la pelle di un tamburo.</p>" },
        { id: "olfatto", label: "Olfatto – naso", x: 50, y: 35, color: "#22c55e", html: "<p>Il <b>naso</b> sente gli <b>odori</b>.</p>", why: "<p>Gli odori sono particelle piccolissime che volano nell'aria. Quando respiri entrano nel naso e lui le riconosce.</p>" },
        { id: "gusto", label: "Gusto – lingua", x: 70, y: 35, color: "#ef4444", html: "<p>La <b>lingua</b> riconosce i <b>sapori</b>: dolce, salato, aspro, amaro.</p>", why: "<p>Sulla lingua ci sono le papille gustative. Il gusto ci aiuta a capire se un cibo è buono o se è andato a male.</p>" },
        { id: "tatto", label: "Tatto – pelle", x: 90, y: 35, color: "#f97316", html: "<p>La <b>pelle</b> sente il caldo, il freddo, il morbido, il ruvido e il dolore.</p>", why: "<p>La pelle copre tutto il corpo: è il nostro organo più grande! Il dolore è utile perché ci avvisa di un pericolo.</p>" },
        { id: "nervi", label: "I nervi", x: 50, y: 65, color: "#a855f7", html: "<p>I <b>nervi</b> sono come fili che portano i messaggi dagli organi di senso al cervello.</p>", why: "<p>I messaggi viaggiano velocissimi: per questo togli subito la mano se tocchi una cosa che scotta.</p>" },
        { id: "cervello", label: "Il cervello", x: 50, y: 90, color: "#ec4899", html: "<p>Il <b>cervello</b> riceve tutti i messaggi, li capisce e decide cosa fare.</p>", why: "<p>Gli occhi ricevono la luce, ma è il cervello che «vede»: mette insieme le informazioni e ci dice cosa stiamo guardando.</p>" }
      ],
      edges: [
        ["mondo", "vista", "luce"],
        ["mondo", "udito", "suoni"],
        ["mondo", "olfatto", "odori"],
        ["mondo", "gusto", "sapori"],
        ["mondo", "tatto", "contatto"],
        ["vista", "nervi", ""],
        ["udito", "nervi", ""],
        ["olfatto", "nervi", ""],
        ["gusto", "nervi", ""],
        ["tatto", "nervi", ""],
        ["olfatto", "gusto", "in squadra"],
        ["nervi", "cervello", "portano i messaggi"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: sapori e sensazioni",
      questions: [
        { type: "mc", q: "Che sapore ha il limone? 🍋", options: ["Dolce", "Aspro", "Salato"], answer: 1, explain: "Il limone è aspro." },
        { type: "tf", q: "Il tatto funziona solo con le mani.", answer: false, explain: "No: il tatto funziona con tutta la pelle del corpo." },
        { type: "mc", q: "Quale animale ha un olfatto fortissimo?", options: ["Il cane", "Il pesce rosso", "La farfalla"], answer: 0, explain: "Il cane sente gli odori molto meglio di noi." }
      ]
    }
  ],
  glossary: [
    { t: "Senso", d: "Una capacità del corpo che ci fa conoscere il mondo." },
    { t: "Organo di senso", d: "La parte del corpo che lavora per un senso (occhi, orecchie, naso, lingua, pelle)." },
    { t: "Vista", d: "Il senso che usa gli occhi." },
    { t: "Udito", d: "Il senso che usa le orecchie." },
    { t: "Olfatto", d: "Il senso che usa il naso." },
    { t: "Gusto", d: "Il senso che usa la lingua." },
    { t: "Tatto", d: "Il senso che usa la pelle." },
    { t: "Cervello", d: "La parte del corpo che riceve e capisce i messaggi dei sensi." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanti sono i sensi?", answer: 5, explain: "Vista, udito, olfatto, gusto e tatto: 5." },
      { type: "mc", q: "Con quale organo vedi i colori?", options: ["Orecchie", "Occhi", "Lingua"], answer: 1, explain: "La vista funziona con gli occhi." },
      { type: "mc", q: "Senti il profumo dei fiori 🌸 con…", options: ["il naso", "la lingua", "la pelle"], answer: 0, explain: "Gli odori si sentono con il naso." },
      { type: "mc", q: "Il gelato è freddo ❄️. Quale senso te lo dice?", options: ["Udito", "Tatto", "Vista"], answer: 1, explain: "Caldo e freddo si sentono con la pelle: è il tatto." },
      { type: "tf", q: "La lingua serve per il gusto.", answer: true, explain: "Sì, la lingua riconosce i sapori." },
      { type: "tf", q: "Si può guardare il sole senza problemi.", answer: false, explain: "No! Il sole fa male agli occhi." },
      { type: "mc", q: "Che sapore ha lo zucchero?", options: ["Amaro", "Salato", "Dolce"], answer: 2, explain: "Lo zucchero è dolce." },
      { type: "text", q: "Come si chiama il senso che usa le orecchie?", answer: ["udito", "l'udito", "l udito"], explain: "È l'udito." },
      { type: "mc", q: "Chi riceve i messaggi dei sensi?", options: ["Il cuore", "Il cervello", "La pancia"], answer: 1, explain: "I messaggi dei sensi arrivano al cervello." },
      { type: "tf", q: "Con il raffreddore il cibo sembra avere meno sapore.", answer: true, explain: "Vero: gusto e olfatto lavorano insieme." }
    ]
  }
});
