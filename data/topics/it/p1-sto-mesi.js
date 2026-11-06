TOPIC('it', {
  id: "p1-sto-mesi",
  title: "I mesi e l'anno",
  intro: "Il tuo compleanno 🎂 arriva una volta l'anno, sempre nello stesso <b>mese</b>. Un anno ha <b>12 mesi</b>: da gennaio a dicembre. Impariamo i loro nomi, quanti giorni hanno, come si legge il <b>calendario</b> 📅 e chi ha inventato tutto questo!",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "I dodici mesi",
      html: `<p>L'anno comincia il <b>1° gennaio</b> e finisce il <b>31 dicembre</b>. I mesi, in ordine, sono:</p>
<ol>
<li>❄️ <b>Gennaio</b></li>
<li>🎭 <b>Febbraio</b></li>
<li>🌱 <b>Marzo</b></li>
<li>🌷 <b>Aprile</b></li>
<li>🌸 <b>Maggio</b></li>
<li>🍓 <b>Giugno</b></li>
<li>🏖️ <b>Luglio</b></li>
<li>🍉 <b>Agosto</b></li>
<li>🎒 <b>Settembre</b></li>
<li>🎃 <b>Ottobre</b></li>
<li>🍂 <b>Novembre</b></li>
<li>🎄 <b>Dicembre</b></li>
</ol>
<p>Un anno ha <b>365 giorni</b>. Ogni 4 anni c'è l'anno <b>bisestile</b>, con <b>366</b> giorni: febbraio ne ha 29 invece di 28!</p>`
    },
    {
      type: "text",
      title: "Quanti giorni ha ogni mese?",
      html: `<p>I mesi non sono tutti lunghi uguali. C'è una <b>filastrocca</b> per ricordarlo:</p>
<p style="font-size:1.15em"><i>«Trenta giorni ha novembre,<br>con april, giugno e settembre.<br>Di ventotto ce n'è uno,<br>tutti gli altri ne han trentuno!»</i></p>
<ul>
<li><b>30 giorni</b>: aprile, giugno, settembre, novembre.</li>
<li><b>28 giorni</b> (29 nei bisestili): febbraio.</li>
<li><b>31 giorni</b>: tutti gli altri 7 mesi.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Il trucco delle nocche 🤜🤛",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<rect x="40" y="110" width="265" height="110" rx="35" fill="#fdba74" stroke="#9a3412" stroke-width="4"/>
<rect x="310" y="110" width="265" height="110" rx="35" fill="#fdba74" stroke="#9a3412" stroke-width="4"/>
<g fill="#fb923c" stroke="#9a3412" stroke-width="3">
<circle cx="70" cy="110" r="22"/><circle cx="140" cy="110" r="22"/><circle cx="210" cy="110" r="22"/><circle cx="280" cy="110" r="22"/>
<circle cx="335" cy="110" r="22"/><circle cx="405" cy="110" r="22"/><circle cx="475" cy="110" r="22"/><circle cx="545" cy="110" r="22"/>
</g>
<g font-size="15" font-weight="bold" text-anchor="middle" fill="#b91c1c">
<text x="70" y="78">GEN</text><text x="140" y="78">MAR</text><text x="210" y="78">MAG</text><text x="280" y="62">LUG</text>
<text x="335" y="78">AGO</text><text x="405" y="78">OTT</text><text x="475" y="78">DIC</text>
<text x="300" y="30" font-size="17">nocca = 31 giorni</text>
</g>
<g font-size="15" font-weight="bold" text-anchor="middle" fill="#1d4ed8">
<text x="105" y="160">FEB</text><text x="175" y="160">APR</text><text x="245" y="160">GIU</text>
<text x="370" y="160">SET</text><text x="440" y="160">NOV</text>
</g>
<text x="300" y="265" font-size="17" text-anchor="middle" fill="#1d4ed8" font-weight="bold">fossetta = 30 giorni (febbraio 28 o 29)</text>
<text x="172" y="245" font-size="15" text-anchor="middle" fill="#7c2d12">1ª mano</text>
<text x="442" y="245" font-size="15" text-anchor="middle" fill="#7c2d12">2ª mano</text>
</svg>`,
      caption: "Chiudi le mani a pugno e conta i mesi su nocche e fossette. Luglio e agosto stanno su due nocche vicine (finisce una mano, inizia l'altra): per questo hanno entrambi 31 giorni!"
    },
    {
      type: "example",
      title: "Esempio: leggo il calendario 📅",
      html: `<p>Un <b>calendario</b> mostra i giorni di ogni mese, divisi in settimane. Per trovare una data:</p>
<ol>
<li>Cerco il <b>mese</b> (per esempio <b>ottobre</b>).</li>
<li>Cerco il <b>numero del giorno</b> (per esempio <b>31</b>).</li>
<li>Guardo in cima alla colonna per sapere <b>che giorno della settimana</b> è.</li>
</ol>
<p>Una data si scrive così: <b>31 ottobre 2026</b>, oppure in breve <b>31/10/2026</b> (giorno / mese / anno). Ottobre è il <b>10°</b> mese, per questo si scrive 10!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: i mesi",
      questions: [
        { type: "num", q: "Quanti mesi ha un anno?", answer: 12, explain: "Da gennaio a dicembre: 12 mesi." },
        { type: "mc", q: "Qual è il primo mese dell'anno?", options: ["Dicembre", "Gennaio", "Settembre"], answer: 1, explain: "L'anno comincia il 1° gennaio." },
        { type: "mc", q: "Quale mese è il più corto?", options: ["Febbraio", "Agosto", "Maggio"], answer: 0, explain: "Febbraio ha 28 giorni (29 negli anni bisestili)." }
      ]
    },
    {
      type: "widget",
      title: "Mesi e stagioni",
      widget: "classify",
      options: {
        groups: ["❄️ Inverno", "🌸 Primavera", "☀️ Estate", "🍂 Autunno"],
        items: [
          ["gennaio", 0],
          ["febbraio", 0],
          ["aprile", 1],
          ["maggio", 1],
          ["luglio", 2],
          ["agosto", 2],
          ["ottobre", 3],
          ["novembre", 3]
        ]
      },
      caption: "In Italia, in quale stagione cade ogni mese? (Marzo, giugno, settembre e dicembre sono a metà: la stagione cambia verso il giorno 21!)"
    },
    {
      type: "text",
      title: "Da dove vengono i nomi dei mesi?",
      html: `<p>I nomi dei mesi vengono dal <b>latino</b>, la lingua degli antichi <b>Romani</b>:</p>
<ul>
<li><b>Gennaio</b> — da <b>Giano</b>, il dio con due facce che guardava avanti e indietro: il dio delle porte e degli inizi.</li>
<li><b>Febbraio</b> — da <i>februa</i>, le feste per «pulire» e purificare.</li>
<li><b>Marzo</b> — da <b>Marte</b>, il dio della guerra.</li>
<li><b>Aprile</b> — forse da «aprire», come i fiori che sbocciano.</li>
<li><b>Maggio</b> — dalla dea <b>Maia</b>. <b>Giugno</b> — dalla dea <b>Giunone</b>.</li>
<li><b>Luglio</b> — da <b>Giulio Cesare</b>! <b>Agosto</b> — dall'imperatore <b>Augusto</b>!</li>
<li><b>Settembre, ottobre, novembre, dicembre</b> — vogliono dire <b>settimo, ottavo, nono, decimo</b>… ma sono il 9°, 10°, 11° e 12° mese! Perché? Perché anticamente l'anno romano <b>cominciava a marzo</b>.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Abbina il mese al suo nome antico",
      widget: "match",
      options: {
        pairs: [
          ["Gennaio", "Giano, dio delle porte 🚪"],
          ["Marzo", "Marte, dio della guerra ⚔️"],
          ["Luglio", "Giulio Cesare 🏛️"],
          ["Agosto", "l'imperatore Augusto 👑"],
          ["Ottobre", "«ottavo» mese 8️⃣"]
        ]
      },
      caption: "Ogni mese porta con sé un pezzetto di storia romana."
    },
    {
      type: "example",
      title: "Esempio: i compleanni della classe 🎂",
      html: `<p>La maestra fa un cartellone con i compleanni:</p>
<ul>
<li>Marco 🎈 — 3 <b>febbraio</b> (inverno)</li>
<li>Giulia 🎈 — 15 <b>maggio</b> (primavera)</li>
<li>Ahmed 🎈 — 22 <b>luglio</b> (estate: si festeggia in vacanza!)</li>
<li>Chiara 🎈 — 30 <b>novembre</b> (autunno)</li>
</ul>
<p>Chi festeggia per primo nell'anno? <b>Marco</b>, perché febbraio viene prima di tutti gli altri mesi della lista!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🗓️",
      html: `<p>Nel <b>1582</b> in Italia e in altri Paesi cattolici successe una cosa stranissima: dopo <b>giovedì 4 ottobre</b> venne <b>venerdì 15 ottobre</b>! Dieci giorni sparirono dal calendario. Fu il papa <b>Gregorio XIII</b> a decidere così, per rimettere il calendario d'accordo con le stagioni. Il nostro calendario, infatti, si chiama <b>gregoriano</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🐸",
      html: `<p>Chi nasce il <b>29 febbraio</b> può festeggiare il «vero» compleanno solo una volta ogni <b>4 anni</b>, negli anni bisestili! Negli altri anni di solito si festeggia il 28 febbraio o il 1° marzo.</p>`
    },
    {
      type: "3d",
      title: "La storia del calendario: la mappa 3D 🗺️",
      scene: "spacetime",
      caption: "La mappa va dall'Italia all'Egitto. Più un fatto è in alto, più è recente. Tocca i fatti: le frecce mostrano come un'idea ha portato alla successiva.",
      options: {
        lat: [28, 47],
        lon: [7, 33],
        years: [-2800, 2000],
        places: [
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 31.2, lon: 29.92, label: "Alessandria d'Egitto" },
          { lat: 29.98, lon: 31.13, label: "Giza" },
          { lat: 39.38, lon: 17.06, label: "Cirò (Calabria)" }
        ],
        events: [
          { id: "egitto", lat: 29.9, lon: 31.2, year: -2700, label: "L'anno egizio di 365 giorni", html: "<p>Gli <b>Egizi</b> usano un anno di <b>365 giorni</b>: 12 mesi di 30 giorni più 5 giorni di festa. Lo usano per prevedere le piene del Nilo.</p>" },
          { id: "romolo", lat: 41.89, lon: 12.49, year: -753, label: "L'anno di Romolo", html: "<p>Secondo la tradizione, il primo re di Roma, <b>Romolo</b>, usa un anno di soli <b>10 mesi</b> che comincia a <b>marzo</b>. Per questo settembre era il «settimo» e dicembre il «decimo»!</p>" },
          { id: "numa", lat: 41.9, lon: 12.47, year: -713, label: "Numa aggiunge 2 mesi", html: "<p>Il re <b>Numa Pompilio</b>, dice la tradizione, aggiunge <b>gennaio</b> e <b>febbraio</b>: ora i mesi sono 12. Ma il calendario va spesso «aggiustato» a mano e fa tanta confusione.</p>", causes: ["romolo"] },
          { id: "cesare", lat: 41.893, lon: 12.485, year: -46, label: "Il calendario di Giulio Cesare", html: "<p><b>Giulio Cesare</b>, con l'aiuto dell'astronomo <b>Sosigene di Alessandria</b>, crea il <b>calendario giuliano</b>: 365 giorni e un giorno in più ogni 4 anni (l'anno bisestile). L'anno nuovo comincia il 1° gennaio.</p>", causes: ["numa", "egitto"] },
          { id: "luglio", lat: 41.88, lon: 12.5, year: -44, label: "Nasce «luglio»", html: "<p>Il mese <i>Quintilis</i> («quinto») viene chiamato <b>Iulius</b> in onore di Giulio Cesare, nato in quel mese: è il nostro <b>luglio</b>.</p>", causes: ["cesare"] },
          { id: "agosto", lat: 41.9, lon: 12.51, year: -8, label: "Nasce «agosto»", html: "<p>Il mese <i>Sextilis</i> («sesto») viene chiamato <b>Augustus</b> in onore dell'imperatore <b>Augusto</b>: è il nostro <b>agosto</b>.</p>", causes: ["luglio"] },
          { id: "lilio", lat: 39.38, lon: 17.06, year: 1570, label: "L'idea di Luigi Lilio", html: "<p>Il calendario giuliano era un pochino troppo lungo: ogni 128 anni circa restava indietro di un giorno rispetto alle stagioni. Il medico e astronomo calabrese <b>Luigi Lilio</b>, nato a Cirò, trova un sistema semplice per correggerlo.</p>", causes: ["cesare"] },
          { id: "gregorio", lat: 41.902, lon: 12.454, year: 1582, label: "Il calendario gregoriano", html: "<p>Il papa <b>Gregorio XIII</b> adotta la proposta di Lilio: si saltano <b>10 giorni</b> (dopo il 4 ottobre 1582 viene il 15 ottobre) e alcuni anni di fine secolo non sono più bisestili. È il calendario che usiamo ancora oggi in quasi tutto il mondo!</p>", causes: ["lilio"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Sei Giulio Cesare, nel 46 a.C.: il calendario è un disastro! 🏛️",
      html: `<p>Il calendario romano è tutto sbagliato: è rimasto <b>indietro di quasi tre mesi</b> rispetto alle stagioni. Le feste della vendemmia cadono quando l'uva non è ancora matura! In Egitto, invece, hai visto un calendario di <b>365 giorni</b> che funziona bene.</p>`,
      question: "Che cosa fai?",
      options: [
        { label: "Lascio tutto così: tanto prima o poi le stagioni torneranno a posto.", outcome: "Il calendario continuerebbe a sbagliare sempre di più: nessuno saprebbe quando seminare o festeggiare." },
        { label: "Allungo una volta sola l'anno per rimetterlo in pari, e poi uso 365 giorni con un giorno in più ogni 4 anni.", outcome: "Ottimo! Così il calendario torna d'accordo con le stagioni e ci resta per secoli." },
        { label: "Faccio un anno di 300 giorni, così è un numero tondo.", outcome: "Il giro della Terra intorno al Sole dura circa 365 giorni e un quarto: con 300 giorni le stagioni scapperebbero via subito!" }
      ],
      answer: 1,
      explain: "Cesare, consigliato dall'astronomo <b>Sosigene di Alessandria</b>, fece proprio così. Per rimettere le cose a posto, l'anno 46 a.C. durò <b>445 giorni</b>: i Romani lo chiamarono «l'anno della confusione»! Dal 45 a.C. partì il <b>calendario giuliano</b>: 365 giorni, e ogni 4 anni un giorno in più (il bisestile). Funzionò così bene che fu usato per più di 1600 anni, finché nel 1582 papa Gregorio XIII lo corresse ancora un pochino."
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>L'anno ha <b>12 mesi</b> e <b>365 giorni</b> (366 nell'anno <b>bisestile</b>, ogni 4 anni).</li>
<li>30 giorni: aprile, giugno, settembre, novembre. Febbraio: 28 (o 29). Gli altri: 31.</li>
<li>Un anno è il tempo che la Terra impiega a fare un giro intorno al Sole.</li>
<li>I nomi dei mesi vengono dal <b>latino</b>; il nostro calendario si chiama <b>gregoriano</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire mesi e anno 🌈",
      intro: "<p>Ogni popolo conta il tempo a modo suo: scopri altri modi!</p>",
      tabs: [
        {
          label: "🪐 Un anno = un giro",
          html: `<p>Guarda la Terra (il terzo pianeta) che gira intorno al Sole: un giro completo è <b>un anno</b>. Dodici mesi sono come <b>12 fette</b> di questo giro. Il pianeta Mercurio, più vicino, fa il giro in soli 88 giorni: lì un anno dura meno di 3 mesi!</p>`,
          scene: "solar",
          options: { labels: true }
        },
        {
          label: "🌙 I calendari della Luna",
          html: `<p>Non tutti usano il nostro calendario!</p>
<ul>
<li>🇨🇳 In <b>Cina</b> il Capodanno tradizionale segue la Luna: cade tra il 21 gennaio e il 20 febbraio, e ogni anno ha un animale (topo, bue, tigre, drago…).</li>
<li>☪️ Il <b>calendario islamico</b> ha 12 mesi lunari, ma solo circa <b>354 giorni</b>: per questo il mese del Ramadan ogni anno arriva circa 11 giorni prima.</li>
<li>✡️ Il <b>calendario ebraico</b> usa la Luna e il Sole insieme: ogni tanto aggiunge un 13° mese!</li>
</ul>
<p>La parola «<b>mese</b>» viene proprio da un'antica parola legata alla <b>Luna</b>: da una Luna piena all'altra passano circa <b>29 giorni e mezzo</b>.</p>`
        },
        {
          label: "🃏 Carte dei mesi",
          html: `<p>Gira le carte: davanti il numero del mese, dietro il suo nome e i suoi giorni. Prova a indovinare prima di girare!</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "1°", back: "Gennaio · 31" }, { front: "2°", back: "Febbraio · 28 o 29" }, { front: "3°", back: "Marzo · 31" },
              { front: "4°", back: "Aprile · 30" }, { front: "5°", back: "Maggio · 31" }, { front: "6°", back: "Giugno · 30" },
              { front: "7°", back: "Luglio · 31" }, { front: "8°", back: "Agosto · 31" }, { front: "9°", back: "Settembre · 30" },
              { front: "10°", back: "Ottobre · 31" }, { front: "11°", back: "Novembre · 30" }, { front: "12°", back: "Dicembre · 31" }
            ]
          }
        },
        {
          label: "📏 La retta dei mesi",
          html: `<p>Metti i mesi su una retta, da 1 (gennaio) a 12 (dicembre). Le tacche segnano il <b>3</b> (marzo, arriva la primavera), il <b>6</b> (giugno, l'estate), il <b>9</b> (settembre, l'autunno) e il <b>12</b> (dicembre, l'inverno): ogni 3 mesi cambia la stagione!</p>`,
          widget: "numberLine",
          options: { min: 1, max: 12, step: 1, marks: [3, 6, 9, 12] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa dell'anno 🗺️",
      nodes: [
        { id: "sole", label: "Il giro intorno al Sole", x: 50, y: 6, color: "#f59e0b", html: "<p>La Terra impiega circa 365 giorni e un quarto per fare un giro intorno al Sole.</p>", why: "<p>Lo misurarono già gli antichi osservando il Sole e le stelle; che sia la Terra a girare lo spiegò <b>Copernico</b> nel 1543.</p>" },
        { id: "anno", label: "L'anno", x: 50, y: 26, color: "#ef4444", html: "<p>365 giorni (366 nel bisestile).</p>", why: "<p>Un giro dura circa 365 giorni <b>e 6 ore</b>: ogni 4 anni le 6 ore fanno un giorno intero, e lo si aggiunge a febbraio.</p>" },
        { id: "stagioni", label: "Le stagioni", x: 15, y: 46, color: "#22c55e", html: "<p>4 stagioni, circa 3 mesi ciascuna.</p>", why: "<p>Il calendario serve soprattutto a sapere quando arrivano le stagioni: i contadini dovevano sapere quando seminare.</p>" },
        { id: "luna", label: "La Luna e i mesi", x: 85, y: 46, color: "#64748b", html: "<p>Da una Luna piena all'altra passano circa 29 giorni e mezzo.</p>", why: "<p>I primi calendari contavano le lune: 12 lune fanno quasi un anno. Per questo l'anno ha 12 mesi.</p>" },
        { id: "mesi", label: "I 12 mesi", x: 50, y: 52, color: "#8b5cf6", html: "<p>Da gennaio a dicembre, di 28-31 giorni.</p>", why: "<p>12 mesi di 30 giorni farebbero 360: i giorni che mancano sono stati distribuiti tra i mesi, che per questo hanno lunghezze diverse.</p>" },
        { id: "romani", label: "I nomi romani", x: 22, y: 74, color: "#a16207", html: "<p>Giano, Marte, Maia, Giunone, Giulio Cesare, Augusto…</p>", why: "<p>Il nostro calendario viene da quello di Roma. Settembre-dicembre significano 7-10 perché l'anno romano più antico iniziava a marzo.</p>" },
        { id: "giuliano", label: "Calendario giuliano", x: 50, y: 78, color: "#0ea5e9", html: "<p>Creato da Giulio Cesare nel 46 a.C.: introduce l'anno bisestile.</p>", why: "<p>Cesare si fece aiutare dall'astronomo <b>Sosigene di Alessandria</b>, che conosceva il calendario egizio di 365 giorni.</p>" },
        { id: "gregoriano", label: "Calendario gregoriano", x: 78, y: 92, color: "#ec4899", html: "<p>Il calendario di oggi, dal 1582.</p>", why: "<p>Il calendario giuliano era un po' troppo lungo (11 minuti all'anno). Su proposta del calabrese <b>Luigi Lilio</b>, papa <b>Gregorio XIII</b> tolse 10 giorni e cambiò la regola dei bisestili di fine secolo.</p>" }
      ],
      edges: [
        ["sole", "anno", "un giro ="],
        ["anno", "stagioni", "contiene le"],
        ["luna", "mesi", "ha dato l'idea dei"],
        ["anno", "mesi", "diviso in"],
        ["mesi", "romani", "nomi dati dai"],
        ["romani", "giuliano", "riformato nel"],
        ["giuliano", "gregoriano", "corretto nel"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: il calendario",
      questions: [
        { type: "mc", q: "Quale mese ha 30 giorni?", options: ["Gennaio", "Aprile", "Agosto"], answer: 1, explain: "«Trenta giorni ha novembre, con april, giugno e settembre»." },
        { type: "tf", q: "Luglio prende il nome da Giulio Cesare.", answer: true, explain: "Sì: in latino Iulius, in onore di Giulio Cesare." },
        { type: "num", q: "Quanti giorni ha un anno bisestile?", answer: 366, explain: "Nell'anno bisestile febbraio ha 29 giorni: in tutto 366." }
      ]
    }
  ],
  glossary: [
    { t: "Mese", d: "Ognuna delle 12 parti dell'anno, di 28-31 giorni." },
    { t: "Anno", d: "Il tempo di un giro della Terra intorno al Sole: 365 giorni." },
    { t: "Anno bisestile", d: "Anno di 366 giorni, con il 29 febbraio; arriva ogni 4 anni." },
    { t: "Calendario", d: "Il modo di contare e organizzare giorni, mesi e anni." },
    { t: "Data", d: "Giorno, mese e anno in cui succede qualcosa (es. 31/10/2026)." },
    { t: "Calendario gregoriano", d: "Il calendario che usiamo oggi, voluto da papa Gregorio XIII nel 1582." },
    { t: "Latino", d: "La lingua degli antichi Romani." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanti mesi ci sono in un anno?", answer: 12, explain: "12 mesi." },
      { type: "order", q: "Metti in ordine questi mesi.", items: ["Gennaio", "Marzo", "Maggio", "Agosto", "Ottobre", "Dicembre"], explain: "Gennaio (1), marzo (3), maggio (5), agosto (8), ottobre (10), dicembre (12)." },
      { type: "mc", q: "Qual è l'ultimo mese dell'anno?", options: ["Novembre", "Dicembre", "Gennaio"], answer: 1, explain: "Dicembre è il 12° e ultimo mese." },
      { type: "mc", q: "Quale mese viene dopo giugno?", options: ["Luglio", "Maggio", "Agosto"], answer: 0, explain: "Dopo giugno viene luglio." },
      { type: "num", q: "Quanti giorni ha di solito febbraio?", answer: 28, explain: "28 giorni, 29 negli anni bisestili." },
      { type: "mc", q: "Quale di questi mesi ha 31 giorni?", options: ["Settembre", "Novembre", "Agosto"], answer: 2, explain: "Agosto ha 31 giorni; settembre e novembre ne hanno 30." },
      { type: "tf", q: "Ogni 4 anni c'è un anno bisestile.", answer: true, explain: "Sì, con un giorno in più a febbraio." },
      { type: "tf", q: "Dicembre vuol dire «decimo» perché l'anno dei Romani antichi cominciava a marzo.", answer: true, explain: "Contando da marzo, dicembre era il decimo mese." },
      { type: "text", q: "Come si chiama il calendario che usiamo oggi?", answer: ["gregoriano", "calendario gregoriano", "il calendario gregoriano"], explain: "È il calendario gregoriano, dal papa Gregorio XIII." },
      { type: "mc", q: "La data 25/12 indica…", options: ["il 25 dicembre", "il 12 maggio", "il 25 febbraio"], answer: 0, explain: "Prima il giorno (25), poi il mese (12 = dicembre)." },
      { type: "mc", q: "Il mese di gennaio prende il nome da…", options: ["Giano, il dio delle porte", "Giove, il re degli dèi", "il gelo"], answer: 0, explain: "Giano era il dio delle porte e degli inizi: l'anno si «apre» con gennaio." }
    ]
  }
});
