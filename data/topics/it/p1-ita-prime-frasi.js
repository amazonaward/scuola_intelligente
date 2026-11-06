TOPIC('it', {
  id: "p1-ita-prime-frasi",
  title: "Le prime frasi",
  intro: "Con le parole possiamo costruire le <b>frasi</b> 🧱, come con i mattoncini! Una frase dice <b>chi</b> fa <b>che cosa</b>. Impariamo a leggerle e a scriverle.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Parola o frase?",
      html: `<p>Una <b>parola</b> da sola dice una cosa: <b>cane</b> 🐶.</p>
<p>Una <b>frase</b> è un gruppo di parole che, messe in fila, <b>raccontano qualcosa che si capisce</b>:</p>
<p style="font-size:1.3em">🐶 <b>Il cane corre.</b></p>
<p>Ora sappiamo <b>chi</b> (il cane) e <b>che cosa fa</b> (corre)!</p>
<p>Una frase si capisce da sola: ha un <b>senso compiuto</b>, cioè è "finita", non lascia a metà.</p>`
    },
    {
      type: "svg",
      title: "Il trenino della frase",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#f0f9ff"/>
<line x1="20" y1="215" x2="580" y2="215" stroke="#475569" stroke-width="6"/>
<rect x="30" y="110" width="150" height="90" rx="12" fill="#f87171" stroke="#7f1d1d" stroke-width="4"/>
<rect x="200" y="110" width="150" height="90" rx="12" fill="#60a5fa" stroke="#1e3a8a" stroke-width="4"/>
<rect x="370" y="110" width="150" height="90" rx="12" fill="#4ade80" stroke="#14532d" stroke-width="4"/>
<circle cx="530" cy="185" r="12" fill="#1f2937"/>
<g fill="#334155"><circle cx="70" cy="210" r="16"/><circle cx="140" cy="210" r="16"/><circle cx="240" cy="210" r="16"/><circle cx="310" cy="210" r="16"/><circle cx="410" cy="210" r="16"/><circle cx="480" cy="210" r="16"/></g>
<text x="105" y="165" font-size="34" font-weight="bold" fill="#fff" text-anchor="middle">Il</text>
<text x="275" y="165" font-size="34" font-weight="bold" fill="#fff" text-anchor="middle">gatto</text>
<text x="445" y="165" font-size="34" font-weight="bold" fill="#fff" text-anchor="middle">dorme</text>
<text x="555" y="160" font-size="20" fill="#1f2937">punto</text>
<text x="105" y="85" font-size="18" fill="#7f1d1d" text-anchor="middle">maiuscola!</text>
<text x="360" y="60" font-size="22" font-weight="bold" fill="#0c4a6e" text-anchor="middle">CHI? il gatto · CHE COSA FA? dorme 😴</text>
<text x="300" y="260" font-size="18" fill="#334155" text-anchor="middle">Ogni vagone è una parola. Il treno parte con la maiuscola e si ferma al punto.</text>
</svg>`,
      caption: "Le parole sono vagoni: in fila e nell'ordine giusto formano una frase."
    },
    {
      type: "text",
      title: "Le due domande magiche: CHI? e CHE COSA FA?",
      html: `<p>Per costruire una frase rispondi a due domande:</p>
<ol>
<li><b>CHI?</b> 👤 → di chi parliamo? <i>La mamma</i>, <i>Luca</i>, <i>il sole</i>…</li>
<li><b>CHE COSA FA?</b> 🏃 → che cosa succede? <i>canta</i>, <i>gioca</i>, <i>splende</i>…</li>
</ol>
<p>Mettile insieme: <b>La mamma canta.</b> 🎤 &nbsp; <b>Luca gioca.</b> ⚽ &nbsp; <b>Il sole splende.</b> ☀️</p>
<p>Poi puoi <b>allungare</b> la frase con altre informazioni:</p>
<ul>
<li><b>Dove?</b> → Luca gioca <b>in giardino</b>.</li>
<li><b>Con chi?</b> → Luca gioca in giardino <b>con Sara</b>.</li>
<li><b>Quando?</b> → <b>Oggi</b> Luca gioca in giardino con Sara.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Gioco: chi fa che cosa?",
      widget: "match",
      options: { pairs: [["🐦 L'uccellino", "vola."], ["🐟 Il pesce", "nuota."], ["🐶 Il cane", "abbaia."], ["🌸 Il fiore", "sboccia."], ["👶 Il bambino", "dorme."]] },
      caption: "Abbina il CHI con il CHE COSA FA: ottieni una frase!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: è una frase?",
      questions: [
        { type: "tf", q: "\"Il gatto mangia.\" è una frase.", answer: true, explain: "Dice chi (il gatto) e che cosa fa (mangia): ha senso compiuto." },
        { type: "tf", q: "\"Il gatto la.\" è una frase.", answer: false, explain: "Non si capisce che cosa fa il gatto: non ha senso compiuto." },
        { type: "mc", q: "Nella frase \"La rana salta.\" chi è che fa qualcosa?", options: ["salta", "la rana", "il punto"], answer: 1, explain: "Chi? La rana. Che cosa fa? Salta." }
      ]
    },
    {
      type: "text",
      title: "L'ordine delle parole è importante",
      html: `<p>Le stesse parole messe in disordine non fanno una frase:</p>
<p>❌ <i>corre il prato nel cane.</i></p>
<p>✅ <b>Il cane corre nel prato.</b> 🐕🌿</p>
<p>A volte cambiare l'ordine <b>cambia il significato</b>:</p>
<ul>
<li>🐱➡️🐭 <b>Il gatto insegue il topo.</b></li>
<li>🐭➡️🐱 <b>Il topo insegue il gatto.</b> (che coraggio!)</li>
</ul>
<p>E ricorda: la frase comincia con la <b>lettera maiuscola</b> e finisce con il <b>punto</b>.</p>`
    },
    {
      type: "svg",
      title: "Chi insegue chi?",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<text x="40" y="80" font-size="60">🐱</text>
<text x="190" y="75" font-size="40" fill="#ea580c">➜</text>
<text x="260" y="80" font-size="44">🐭</text>
<text x="350" y="70" font-size="22" fill="#1f2937">Il gatto insegue il topo.</text>
<text x="40" y="200" font-size="44">🐭</text>
<text x="120" y="195" font-size="40" fill="#ea580c">➜</text>
<text x="190" y="205" font-size="60">🐱</text>
<text x="350" y="190" font-size="22" fill="#1f2937">Il topo insegue il gatto.</text>
<line x1="20" y1="125" x2="580" y2="125" stroke="#d97706" stroke-width="3" stroke-dasharray="10 8"/>
<text x="300" y="245" font-size="18" fill="#92400e" text-anchor="middle">Stesse parole, ordine diverso: storia diversa!</text>
</svg>`,
      caption: "Chi viene prima del verbo è chi fa l'azione."
    },
    {
      type: "example",
      title: "Esempio: una frase da un disegno",
      html: `<p>Guarda il disegno: 🧒⚽🌳</p>
<ol>
<li><b>Chi?</b> → Il bambino</li>
<li><b>Che cosa fa?</b> → calcia la palla</li>
<li><b>Dove?</b> → vicino all'albero</li>
</ol>
<p>Frase: <b>Il bambino calcia la palla vicino all'albero.</b></p>
<p>Prova con 👵📖🛋️: <i>La nonna legge un libro sul divano.</i></p>`
    },
    {
      type: "example",
      title: "Esempio: la frase che cresce",
      html: `<p>Una frase può diventare sempre più lunga, come un fiore che cresce 🌱→🌷:</p>
<ul>
<li><b>Anna mangia.</b></li>
<li><b>Anna mangia una mela.</b> 🍎</li>
<li><b>Anna mangia una mela rossa.</b></li>
<li><b>A merenda Anna mangia una mela rossa.</b></li>
</ul>
<p>Tutte sono frasi giuste! La prima è la <b>frase minima</b>: chi + che cosa fa.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Una frase può essere fatta anche da <b>una sola parola</b>! "<b>Piove.</b>" 🌧️ è una frase completa: si capisce benissimo che cosa succede.</p>
<p>Anche "<b>Corro!</b>" è una frase: il "chi" (io) è nascosto dentro la parola.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Una delle frasi più antiche scritte in italiano ha più di <b>1000 anni</b>! È del <b>960</b> e viene da Capua, in Campania. Si chiama <b>Placito Capuano</b> e comincia così:</p>
<p><i>"Sao ko kelle terre…"</i></p>
<p>Vuol dire "So che quelle terre…": un testimone in tribunale spiegava a chi appartenevano dei campi. Riesci a riconoscere qualche parola?</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>La <b>frase</b> è un gruppo di parole in ordine che ha un <b>senso compiuto</b>.</li>
<li>Risponde a <b>CHI?</b> e <b>CHE COSA FA?</b></li>
<li>Comincia con la <b>maiuscola</b> e finisce con il <b>punto</b>.</li>
<li>Si può <b>allungare</b> rispondendo a dove? quando? con chi?</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per costruire le frasi",
      intro: "Se costruire frasi ti sembra difficile, prova con i colori, con le carte, con le frasi in disordine o scopri come fanno in altre lingue!",
      tabs: [
        {
          label: "🎨 Frasi a colori",
          html: `<p>Dai un <b>colore</b> a ogni pezzo della frase:</p>
<ul>
<li><span style="color:#dc2626"><b>ROSSO</b></span> = CHI? 👤</li>
<li><span style="color:#2563eb"><b>BLU</b></span> = CHE COSA FA? 🏃</li>
<li><span style="color:#16a34a"><b>VERDE</b></span> = DOVE? QUANDO? 📍</li>
</ul>
<p style="font-size:1.2em"><span style="color:#dc2626"><b>La mucca</b></span> <span style="color:#2563eb"><b>mangia</b></span> <span style="color:#16a34a"><b>nel prato</b></span>. 🐄</p>
<p style="font-size:1.2em"><span style="color:#dc2626"><b>Il papà</b></span> <span style="color:#2563eb"><b>cucina</b></span> <span style="color:#16a34a"><b>la sera</b></span>. 👨‍🍳</p>
<p>Una frase giusta ha <b>sempre</b> almeno il rosso e il blu!</p>`
        },
        {
          label: "🃏 Carte-frase",
          html: `<p>Davanti c'è un disegno: prova a dire una frase. Poi gira la carta e confronta!</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "🐸💦", back: "La rana salta nello stagno." },
            { front: "👧🎨", back: "La bambina disegna." },
            { front: "🐝🌻", back: "L'ape vola sul fiore." },
            { front: "👨‍🚒🔥", back: "Il pompiere spegne il fuoco." },
            { front: "🐔🥚", back: "La gallina fa l'uovo." },
            { front: "🌙⭐", back: "La luna brilla nel cielo." }
          ] }
        },
        {
          label: "🗂️ Frase o non frase?",
          html: `<p>Metti ogni gruppo di parole nel cesto giusto: ha senso compiuto oppure no?</p>`,
          widget: "classify",
          options: {
            groups: ["✅ È una frase", "❌ Non è una frase"],
            items: [["Il sole splende.", 0], ["sole il splende", 1], ["Marta ride.", 0], ["la di con", 1], ["Il treno parte.", 0], ["Il cane", 1], ["Nevica.", 0], ["mangia la mela il", 1]]
          }
        },
        {
          label: "🌍 In altre lingue",
          html: `<p>Non tutte le lingue mettono le parole nello stesso ordine!</p>
<ul>
<li>🇮🇹 Italiano: <b>Il gatto</b> <b>mangia</b> <b>il pesce</b>. (chi – fa – che cosa)</li>
<li>🇬🇧 Inglese: <b>The cat</b> <b>eats</b> <b>the fish</b>. (uguale all'italiano!)</li>
<li>🇯🇵 Giapponese: <b>Neko ga</b> <b>sakana o</b> <b>taberu</b>. → "Il gatto il pesce mangia": il verbo va <b>alla fine</b>!</li>
<li>🏛️ Latino (la lingua degli antichi Romani): <b>Feles piscem edit</b> → anche qui spesso il verbo stava in fondo.</li>
</ul>
<p>In italiano l'ordine più comune è: <b>chi → che cosa fa → il resto</b>.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della frase: tocca un nodo e scopri il perché",
      nodes: [
        { id: "parole", label: "Parole", x: 50, y: 8, color: "#64748b", html: "I mattoncini della lingua: cane, corre, prato.", why: "Le parole da sole nominano le cose, ma per raccontare servono parole collegate tra loro." },
        { id: "frase", label: "Frase", x: 50, y: 32, color: "#2563eb", html: "Gruppo di parole in ordine con senso compiuto.", why: "Quando parliamo vogliamo dire 'chi fa che cosa': la frase è il modo più piccolo per raccontare un fatto." },
        { id: "chi", label: "CHI?", x: 18, y: 55, color: "#dc2626", html: "Chi fa l'azione o di chi si parla: il cane, Luca, io.", why: "A scuola, più avanti, lo chiamerai <b>soggetto</b>: viene dal latino e vuol dire 'ciò che sta sotto', la base della frase." },
        { id: "cosafa", label: "CHE COSA FA?", x: 82, y: 55, color: "#2563eb", html: "L'azione: corre, mangia, dorme.", why: "Più avanti lo chiamerai <b>predicato</b> (o verbo): è la parola più importante, senza verbo di solito non c'è frase." },
        { id: "senso", label: "Senso compiuto", x: 50, y: 58, color: "#16a34a", html: "La frase si capisce da sola, non resta a metà.", why: "Chi ascolta deve capire il messaggio senza dover indovinare: per questo servono almeno chi e che cosa fa." },
        { id: "ordine", label: "Ordine", x: 18, y: 85, color: "#ca8a04", html: "In italiano di solito: chi → che cosa fa → il resto.", why: "L'ordine aiuta a capire chi fa l'azione: 'il gatto insegue il topo' è diverso da 'il topo insegue il gatto'. Altre lingue, come il giapponese, mettono il verbo alla fine." },
        { id: "espansioni", label: "Allungare la frase", x: 50, y: 88, color: "#7c3aed", html: "Si aggiungono informazioni: dove? quando? con chi?", why: "Più avanti queste parti si chiameranno <b>complementi</b>: 'completano' la frase." },
        { id: "segni", label: "Maiuscola e punto", x: 82, y: 85, color: "#0e7490", html: "La frase inizia con la maiuscola e finisce con il punto.", why: "Sono come il semaforo verde e rosso: dicono a chi legge dove comincia e dove finisce un'idea." }
      ],
      edges: [
        ["parole", "frase", "in ordine formano"],
        ["frase", "chi", "risponde a"],
        ["frase", "cosafa", "risponde a"],
        ["frase", "senso", "deve avere"],
        ["chi", "ordine", "di solito prima"],
        ["frase", "espansioni", "si può"],
        ["frase", "segni", "si scrive con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: ordina le frasi",
      questions: [
        { type: "order", q: "Metti in ordine le parole per formare una frase.", items: ["Il", "pesce", "nuota", "nel", "mare."], explain: "Il pesce nuota nel mare. 🐟" },
        { type: "mc", q: "Nella frase \"Marco disegna un drago.\" che cosa fa Marco?", options: ["un drago", "disegna", "Marco"], answer: 1, explain: "Che cosa fa? Disegna." },
        { type: "tf", q: "\"Piove.\" è una frase anche se ha una sola parola.", answer: true, explain: "Si capisce benissimo: ha senso compiuto." }
      ]
    }
  ],
  glossary: [
    { t: "Parola", d: "Gruppo di lettere che ha un significato: cane, sole, corre." },
    { t: "Frase", d: "Gruppo di parole in ordine che ha un senso compiuto." },
    { t: "Senso compiuto", d: "Quando una frase si capisce da sola, senza restare a metà." },
    { t: "Chi?", d: "La domanda per trovare chi fa l'azione (più avanti: soggetto)." },
    { t: "Che cosa fa?", d: "La domanda per trovare l'azione (più avanti: predicato, verbo)." },
    { t: "Frase minima", d: "La frase più corta possibile: chi + che cosa fa. Es. Anna mangia." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "tf", q: "\"La bambina canta.\" è una frase.", answer: true, explain: "Chi? la bambina. Che cosa fa? canta." },
      { type: "tf", q: "\"il con la\" è una frase.", answer: false, explain: "Non si capisce niente: non ha senso compiuto." },
      { type: "mc", q: "Nella frase \"Il cavallo galoppa.\" chi fa l'azione?", options: ["galoppa", "il cavallo", "nessuno"], answer: 1, explain: "Chi? Il cavallo." },
      { type: "mc", q: "Nella frase \"La nonna cucina la torta.\" che cosa fa la nonna?", options: ["cucina", "la torta", "la nonna"], answer: 0, explain: "Che cosa fa? Cucina." },
      { type: "order", q: "Metti in ordine le parole.", items: ["Il", "sole", "scalda", "la", "terra."], explain: "Il sole scalda la terra. ☀️" },
      { type: "order", q: "Metti in ordine le parole.", items: ["La", "mamma", "legge", "una", "favola."], explain: "La mamma legge una favola. 📖" },
      { type: "mc", q: "Quale frase è scritta bene?", options: ["il cane abbaia", "Il cane abbaia.", "il cane abbaia."], answer: 1, explain: "Maiuscola all'inizio e punto alla fine." },
      { type: "mc", q: "Quale parte allunga la frase \"Luca gioca\" dicendo DOVE?", options: ["con Sara", "oggi", "in cortile"], answer: 2, explain: "Dove? In cortile." },
      { type: "text", q: "Completa la frase con un'azione: Il pesce … nel mare. (nuota)", answer: ["nuota"], explain: "Il pesce nuota nel mare." },
      { type: "tf", q: "\"Il gatto insegue il topo\" e \"Il topo insegue il gatto\" vogliono dire la stessa cosa.", answer: false, explain: "Cambia chi insegue: l'ordine cambia il significato." },
      { type: "mc", q: "Che cosa serve almeno in una frase?", options: ["Chi e che cosa fa", "Solo i colori", "Tante parole lunghe"], answer: 0, explain: "La frase minima è chi + che cosa fa." }
    ]
  }
});
