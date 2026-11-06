TOPIC('it', {
  id: "p1-sto-giornata",
  title: "La giornata e la settimana",
  intro: "Il sole sorge 🌅, la giornata passa, arriva la sera 🌇 e poi la notte 🌙. E dopo sette giorni… ricomincia la settimana! Scopriamo le <b>parti del giorno</b>, i <b>giorni della settimana</b> e da dove vengono i loro nomi.",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Le parti della giornata",
      html: `<p>Un <b>giorno</b> intero dura <b>24 ore</b>. Lo dividiamo in parti:</p>
<ul>
<li>🌅 <b>Mattina</b> — il sole sorge, ci svegliamo, facciamo colazione e andiamo a scuola.</li>
<li>☀️ <b>Mezzogiorno</b> — il sole è più alto nel cielo: è ora di pranzo!</li>
<li>🌤️ <b>Pomeriggio</b> — giochiamo, facciamo i compiti, facciamo sport.</li>
<li>🌇 <b>Sera</b> — il sole tramonta, si cena tutti insieme.</li>
<li>🌙 <b>Notte</b> — è buio, ci sono la luna e le stelle: si dorme!</li>
</ul>
<p>Il giorno e la notte arrivano perché la <b>Terra gira su sé stessa</b>, come una trottola: un giro intero dura proprio <b>un giorno</b>.</p>`
    },
    {
      type: "svg",
      title: "La ruota del giorno",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<path d="M300 160 L300 20 A140 140 0 0 1 440 160 Z" fill="#fde68a"/>
<path d="M300 160 L440 160 A140 140 0 0 1 300 300 Z" fill="#fdba74"/>
<path d="M300 160 L300 300 A140 140 0 0 1 160 160 Z" fill="#1e3a8a"/>
<path d="M300 160 L160 160 A140 140 0 0 1 300 20 Z" fill="#7dd3fc"/>
<circle cx="300" cy="160" r="140" fill="none" stroke="#334155" stroke-width="4"/>
<circle cx="300" cy="160" r="10" fill="#334155"/>
<g font-size="34" text-anchor="middle"><text x="225" y="100">🌅</text><text x="375" y="100">☀️</text><text x="375" y="240">🌇</text><text x="225" y="240">🌙</text></g>
<g font-size="18" font-weight="bold" text-anchor="middle">
<text x="225" y="128" fill="#0c4a6e">MATTINA</text>
<text x="375" y="128" fill="#78350f">POMERIGGIO</text>
<text x="375" y="268" fill="#7c2d12">SERA</text>
<text x="225" y="268" fill="#ffffff">NOTTE</text>
</g>
<text x="520" y="80" font-size="16" text-anchor="middle" fill="#334155">e poi</text>
<text x="520" y="100" font-size="16" text-anchor="middle" fill="#334155">ricomincia!</text>
<text x="520" y="135" font-size="32" text-anchor="middle">🔄</text>
<text x="300" y="14" font-size="14" text-anchor="middle" fill="#334155">mezzogiorno</text>
</svg>`,
      caption: "Dopo la notte torna la mattina: la giornata è un ciclo che si ripete."
    },
    {
      type: "example",
      title: "Esempio: la giornata di Sofia 👧",
      html: `<ul>
<li>🌅 <b>Mattina</b>: alle 7 Sofia si sveglia, fa colazione e va a scuola.</li>
<li>☀️ <b>Mezzogiorno</b>: pranza in mensa con i compagni.</li>
<li>🌤️ <b>Pomeriggio</b>: va in piscina 🏊 e poi fa i compiti.</li>
<li>🌇 <b>Sera</b>: cena con mamma e papà e legge una storia.</li>
<li>🌙 <b>Notte</b>: dorme fino al mattino dopo.</li>
</ul>
<p>E tu? Racconta la tua giornata con le stesse parole!</p>`
    },
    {
      type: "widget",
      title: "In quale parte del giorno?",
      widget: "classify",
      options: {
        groups: ["🌅 Mattina", "🌤️ Pomeriggio", "🌇 Sera", "🌙 Notte"],
        items: [
          ["⏰ suona la sveglia", 0],
          ["🥣 colazione", 0],
          ["⚽ allenamento dopo pranzo", 1],
          ["🧃 merenda delle 16", 1],
          ["🍝 cena", 2],
          ["🌇 il sole tramonta", 2],
          ["😴 dormire nel letto", 3],
          ["⭐ le stelle brillano", 3]
        ]
      },
      caption: "Metti ogni attività nella sua parte della giornata."
    },
    {
      type: "quiz",
      title: "Mini-quiz: la giornata",
      questions: [
        { type: "num", q: "Quante ore dura un giorno intero?", answer: 24, explain: "Un giorno, notte compresa, dura 24 ore." },
        { type: "mc", q: "Quando tramonta il sole?", options: ["Di mattina", "Di sera", "A mezzogiorno"], answer: 1, explain: "Il sole tramonta la sera." },
        { type: "order", q: "Metti in ordine le parti del giorno.", items: ["Mattina", "Pomeriggio", "Sera", "Notte"], explain: "Mattina, pomeriggio, sera, notte." }
      ]
    },
    {
      type: "text",
      title: "I sette giorni della settimana",
      html: `<p>Sette giorni insieme formano una <b>settimana</b>. Eccoli in ordine:</p>
<ol>
<li>🌙 <b>Lunedì</b> — il giorno della <b>Luna</b></li>
<li>🔴 <b>Martedì</b> — il giorno di <b>Marte</b></li>
<li>☿️ <b>Mercoledì</b> — il giorno di <b>Mercurio</b></li>
<li>⚡ <b>Giovedì</b> — il giorno di <b>Giove</b></li>
<li>💗 <b>Venerdì</b> — il giorno di <b>Venere</b></li>
<li>🕯️ <b>Sabato</b> — dalla parola ebraica <b>shabbat</b>, «riposo»</li>
<li>⛪ <b>Domenica</b> — dal latino <b>dies Dominica</b>, «giorno del Signore»</li>
</ol>
<p>Poi si ricomincia dal lunedì! I giorni dal lunedì al venerdì sono <b>feriali</b> (si va a scuola e al lavoro), il sabato e la domenica formano il <b>fine settimana</b>.</p>`
    },
    {
      type: "widget",
      title: "Gira le carte dei giorni",
      widget: "flashcards",
      options: {
        cards: [
          { front: "1° Lunedì", back: "🌙 giorno della Luna" },
          { front: "2° Martedì", back: "🔴 giorno di Marte" },
          { front: "3° Mercoledì", back: "☿️ giorno di Mercurio" },
          { front: "4° Giovedì", back: "⚡ giorno di Giove" },
          { front: "5° Venerdì", back: "💗 giorno di Venere" },
          { front: "6° Sabato", back: "🕯️ shabbat: riposo" },
          { front: "7° Domenica", back: "⛪ giorno del Signore" }
        ]
      },
      caption: "Davanti c'è il giorno, dietro da dove viene il suo nome."
    },
    {
      type: "example",
      title: "Esempio: ieri, oggi, domani 📅",
      html: `<p>Se <b>oggi</b> è <b>mercoledì</b>:</p>
<ul>
<li>⏪ <b>ieri</b> era <b>martedì</b> (il giorno prima);</li>
<li>⏺️ <b>oggi</b> è <b>mercoledì</b>;</li>
<li>⏩ <b>domani</b> sarà <b>giovedì</b> (il giorno dopo).</li>
</ul>
<p>E dopodomani? Venerdì! Si va avanti di un giorno alla volta.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🪐",
      html: `<p>Perché la settimana ha proprio <b>7 giorni</b>? Gli antichi popoli guardavano il cielo e vedevano <b>7 «astri» che si muovono</b>: il Sole, la Luna, Marte, Mercurio, Giove, Venere e Saturno. Ogni giorno era dedicato a uno di loro!</p>
<p>In italiano il Sole e Saturno sono stati sostituiti da domenica e sabato. Ma in inglese si dice ancora <b>Sunday</b> («giorno del Sole») e <b>Saturday</b> («giorno di Saturno»)!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🌏",
      html: `<p>Mentre tu fai colazione in Italia, in <b>Giappone</b> è già pomeriggio e in <b>America</b> è ancora notte fonda! Il Sole non illumina tutta la Terra insieme: per questo nel mondo ci sono orari diversi, i <b>fusi orari</b>.</p>`
    },
    {
      type: "3d",
      title: "Come abbiamo imparato a misurare il giorno: la mappa 3D ⏳",
      scene: "spacetime",
      caption: "La mappa va dall'Europa al Medio Oriente. Più un fatto è in alto, più è recente. Tocca i fatti per scoprire chi ha inventato le ore, i minuti e la settimana.",
      options: {
        lat: [24, 52],
        lon: [-5, 48],
        years: [-2500, 2000],
        places: [
          { lat: 32.54, lon: 44.42, label: "Babilonia" },
          { lat: 25.7, lon: 32.64, label: "Tebe (Egitto)" },
          { lat: 31.78, lon: 35.22, label: "Gerusalemme" },
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 45.46, lon: 9.19, label: "Milano" },
          { lat: 51.48, lon: 0.0, label: "Greenwich (Londra)" }
        ],
        events: [
          { id: "babilonia", lat: 32.54, lon: 44.42, year: -2000, label: "Contare a 60", html: "<p>In Mesopotamia (oggi Iraq) i <b>Babilonesi</b> contano a gruppi di <b>60</b>. Da loro viene l'idea che un'ora abbia 60 minuti e un minuto 60 secondi! Osservano anche i 7 astri che si muovono nel cielo.</p>" },
          { id: "egitto", lat: 25.7, lon: 32.64, year: -1500, label: "12 ore di giorno, 12 di notte", html: "<p>Gli <b>Egizi</b> dividono il giorno in <b>12 parti</b> e la notte in altre <b>12</b>: in tutto <b>24 ore</b>! Di giorno usano le <b>meridiane</b> (l'ombra di un bastone) e di notte gli orologi ad acqua.</p>" },
          { id: "shabbat", lat: 31.78, lon: 35.22, year: -600, label: "Il sabato di riposo", html: "<p>Già da molti secoli il popolo <b>ebraico</b> riposa ogni <b>settimo giorno</b>, lo <b>shabbat</b>, come racconta la Bibbia nella storia della Creazione. Da shabbat viene la nostra parola <b>sabato</b>.</p>" },
          { id: "romani", lat: 41.9, lon: 12.5, year: 100, label: "La settimana dei pianeti", html: "<p>Nell'Impero romano si diffonde la settimana di 7 giorni dedicati agli astri: <i>dies Lunae</i> (Luna), <i>dies Martis</i> (Marte), <i>dies Mercurii</i>, <i>dies Iovis</i> (Giove), <i>dies Veneris</i>… Da qui lunedì, martedì, mercoledì, giovedì, venerdì!</p>", causes: ["babilonia", "shabbat"] },
          { id: "costantino", lat: 41.89, lon: 12.48, year: 321, label: "La domenica di riposo", html: "<p>L'imperatore <b>Costantino</b> stabilisce che la domenica sia un giorno di <b>riposo</b> per tutti nelle città. Per i cristiani è il «giorno del Signore», in latino <i>dies Dominica</i>: domenica!</p>", causes: ["romani"] },
          { id: "orologio", lat: 45.46, lon: 9.19, year: 1336, label: "Orologio pubblico a Milano", html: "<p>Sul campanile della chiesa di San Gottardo a <b>Milano</b> c'è un orologio meccanico che batte le ore con una campana: uno dei primi orologi pubblici d'Europa. Ora tutta la città sente che ora è!</p>", causes: ["egitto"] },
          { id: "greenwich", lat: 51.48, lon: 0.0, year: 1884, label: "I fusi orari", html: "<p>Con i treni e il telegrafo serve un orario uguale per tutti. Nel 1884 si decide che il meridiano di <b>Greenwich</b>, a Londra, sia il punto di partenza per contare le ore di tutto il mondo: nascono i <b>fusi orari</b>.</p>", causes: ["orologio"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Sei un monaco nel Medioevo: come sai quando pregare di notte? 🕯️",
      html: `<p>Nel tuo monastero si prega in ore precise, anche di <b>notte</b>. Di giorno guardi l'ombra della <b>meridiana</b>… ma di notte il sole non c'è! E gli orologi meccanici non sono ancora stati inventati.</p>`,
      question: "Che cosa usi per sapere che ore sono di notte?",
      options: [
        { label: "Guardo la meridiana con una lanterna.", outcome: "La meridiana funziona solo con l'ombra del Sole: di notte non segna niente!" },
        { label: "Uso una candela con delle tacche, una clessidra o un orologio ad acqua, e guardo le stelle.", outcome: "Ottima idea! La candela si consuma sempre alla stessa velocità: ogni tacca è un pezzo di notte. L'acqua che gocciola e le stelle che girano nel cielo aiutano anche loro." },
        { label: "Aspetto che canti il gallo.", outcome: "Il gallo canta soprattutto verso l'alba: per le preghiere di metà notte arriveresti in ritardo!" }
      ],
      answer: 1,
      explain: "Nei monasteri del Medioevo si usavano <b>candele graduate</b>, <b>clessidre</b>, <b>orologi ad acqua</b> e l'osservazione delle <b>stelle</b>. Proprio il bisogno di misurare bene le ore, anche di notte, spinse a inventare, alla fine del 1200, i primi <b>orologi meccanici</b>, che suonavano una campana: per questo in molte lingue la parola «orologio» è legata alla campana (in inglese <i>clock</i> viene da una parola latina che vuol dire campana)."
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il giorno dura <b>24 ore</b>: mattina, mezzogiorno, pomeriggio, sera, notte.</li>
<li>Giorno e notte ci sono perché la <b>Terra gira su sé stessa</b>.</li>
<li>La settimana ha <b>7 giorni</b>: lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica.</li>
<li><b>Ieri</b> è il giorno prima, <b>oggi</b> è adesso, <b>domani</b> è il giorno dopo.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire giorni e settimane 🌈",
      intro: "<p>Prova un altro modo per ricordare!</p>",
      tabs: [
        {
          label: "🌍 Giorno e notte in 3D",
          html: `<p>Gira il globo: la Terra è una palla e il Sole può illuminare <b>solo metà</b> alla volta. Dove arriva la luce è <b>giorno</b>, dall'altra parte è <b>notte</b>. Quando a Roma è mezzogiorno, a Tokyo è sera e a New York è mattina presto!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Roma: 12:00 ☀️", color: "#f59e0b" },
              { lat: 35.68, lon: 139.69, label: "Tokyo: 20:00 🌇", color: "#a855f7" },
              { lat: 40.71, lon: -74.0, label: "New York: 6:00 🌅", color: "#3b82f6" }
            ]
          }
        },
        {
          label: "🇬🇧 In inglese e in altre lingue",
          html: `<p>I nomi dei giorni raccontano storie in tutte le lingue!</p>
<ul>
<li>🇬🇧 <b>Monday</b> = giorno della Luna (Moon), <b>Sunday</b> = giorno del Sole (Sun), <b>Saturday</b> = giorno di Saturno.</li>
<li>🇵🇹 In <b>portoghese</b> i giorni si contano: <i>segunda-feira</i> (lunedì, «secondo giorno»), <i>terça-feira</i> («terzo»)… perché la domenica era il primo!</li>
<li>🇯🇵 In <b>giapponese</b> i giorni hanno i nomi di Luna, fuoco, acqua, legno, oro, terra e Sole.</li>
</ul>`,
          widget: "match",
          options: { pairs: [["🌙 Monday", "lunedì"], ["☀️ Sunday", "domenica"], ["🪐 Saturday", "sabato"], ["🇵🇹 segunda-feira", "lunedì"]] }
        },
        {
          label: "✋ Le dita della settimana",
          html: `<p>Una mano ha 5 dita: sono i <b>5 giorni di scuola</b>, dal lunedì (pollice) al venerdì (mignolo). Poi aggiungi i <b>2 pollici</b> dell'altra mano per il fine settimana: sabato e domenica. In tutto <b>5 + 2 = 7</b>!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fef9c3"/>
<g fill="#fdba74" stroke="#9a3412" stroke-width="3">
<rect x="40" y="40" width="40" height="110" rx="18"/><rect x="90" y="25" width="40" height="125" rx="18"/><rect x="140" y="20" width="40" height="130" rx="18"/><rect x="190" y="30" width="40" height="120" rx="18"/><rect x="240" y="55" width="40" height="95" rx="18"/>
<rect x="400" y="40" width="40" height="110" rx="18"/><rect x="460" y="40" width="40" height="110" rx="18"/>
</g>
<g font-size="15" font-weight="bold" text-anchor="middle" fill="#7c2d12">
<text x="60" y="180">lun</text><text x="110" y="180">mar</text><text x="160" y="180">mer</text><text x="210" y="180">gio</text><text x="260" y="180">ven</text>
<text x="420" y="180">sab</text><text x="480" y="180">dom</text>
</g>
<text x="160" y="210" font-size="16" text-anchor="middle" fill="#1e3a8a">5 giorni di scuola</text>
<text x="450" y="210" font-size="16" text-anchor="middle" fill="#1e3a8a">fine settimana</text>
</svg>`
        },
        {
          label: "🔄 Come una giostra",
          html: `<p>La settimana è come una <b>giostra</b>: i giorni girano sempre nello stesso ordine e, dopo la domenica, torna il lunedì. Conta i giorni con la retta: dopo 7 salti sei di nuovo allo stesso giorno della settimana!</p>`,
          widget: "numberLine",
          options: { min: 0, max: 14, step: 1, marks: [7, 14] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa del giorno e della settimana 🗺️",
      nodes: [
        { id: "terra", label: "La Terra gira", x: 50, y: 6, color: "#3b82f6", html: "<p>La Terra ruota su sé stessa come una trottola.</p>", why: "<p>Per molto tempo si pensava che fosse il Sole a girare intorno alla Terra. <b>Copernico</b> (1543) e <b>Galileo</b> mostrarono che è la Terra a muoversi; nel 1851 <b>Léon Foucault</b> lo dimostrò a Parigi con un grande pendolo.</p>" },
        { id: "giorno", label: "Giorno e notte", x: 25, y: 28, color: "#f59e0b", html: "<p>La metà illuminata dal Sole ha il giorno, l'altra metà la notte.</p>", why: "<p>Un giro completo della Terra dura circa <b>24 ore</b>: per questo il giorno intero dura 24 ore.</p>" },
        { id: "parti", label: "Le parti del giorno", x: 15, y: 55, color: "#f97316", html: "<p>Mattina, mezzogiorno, pomeriggio, sera, notte.</p>", why: "<p>Le riconosciamo dalla posizione del Sole: sorge a est al mattino, è più alto a mezzogiorno, tramonta a ovest la sera.</p>" },
        { id: "ore", label: "Ore e minuti", x: 40, y: 55, color: "#ef4444", html: "<p>24 ore in un giorno, 60 minuti in un'ora.</p>", why: "<p>Le 24 ore vengono dagli <b>Egizi</b> (12 di giorno + 12 di notte); i 60 minuti dai <b>Babilonesi</b>, che contavano a gruppi di 60.</p>" },
        { id: "luna", label: "La Luna e il 7", x: 75, y: 28, color: "#64748b", html: "<p>La Luna cambia forma (fasi) in circa 4 settimane.</p>", why: "<p>Ogni fase della Luna (nuova, primo quarto, piena, ultimo quarto) dura circa <b>7 giorni</b>: forse anche per questo la settimana ha 7 giorni.</p>" },
        { id: "settimana", label: "La settimana", x: 70, y: 55, color: "#8b5cf6", html: "<p>7 giorni che si ripetono sempre.</p>", why: "<p>Viene dai popoli antichi del Medio Oriente: i Babilonesi con i 7 astri e gli Ebrei con lo shabbat; i Romani la diffusero in tutta Europa.</p>" },
        { id: "nomi", label: "I nomi dei giorni", x: 88, y: 80, color: "#ec4899", html: "<p>Luna, Marte, Mercurio, Giove, Venere, sabato, domenica.</p>", why: "<p>I primi cinque vengono dai nomi latini degli astri; sabato dall'ebraico <i>shabbat</i>; domenica dal latino <i>dies Dominica</i>.</p>" },
        { id: "orologio", label: "Orologio e calendario", x: 45, y: 88, color: "#14b8a6", html: "<p>Strumenti per misurare e organizzare il tempo.</p>", why: "<p>Prima meridiane e orologi ad acqua, poi orologi meccanici (dalla fine del 1200), oggi orologi atomici precisissimi!</p>" }
      ],
      edges: [
        ["terra", "giorno", "crea"],
        ["giorno", "parti", "diviso in"],
        ["giorno", "ore", "diviso in"],
        ["ore", "orologio", "misurate dall'"],
        ["luna", "settimana", "fasi di 7 giorni"],
        ["settimana", "nomi", "ha i suoi"],
        ["giorno", "settimana", "7 giorni ="],
        ["settimana", "orologio", "sul calendario"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: la settimana",
      questions: [
        { type: "num", q: "Quanti giorni ha una settimana?", answer: 7, explain: "La settimana ha 7 giorni." },
        { type: "mc", q: "Che giorno viene dopo il giovedì?", options: ["Mercoledì", "Venerdì", "Domenica"], answer: 1, explain: "Dopo il giovedì viene il venerdì." },
        { type: "mc", q: "Il lunedì prende il nome da…", options: ["la Luna", "il lupo", "la luce"], answer: 0, explain: "Lunedì = giorno della Luna." }
      ]
    }
  ],
  glossary: [
    { t: "Giorno", d: "Il tempo di un giro completo della Terra su sé stessa: 24 ore." },
    { t: "Ora", d: "Ognuna delle 24 parti del giorno; dura 60 minuti." },
    { t: "Settimana", d: "Gruppo di 7 giorni che si ripete." },
    { t: "Ieri", d: "Il giorno prima di oggi." },
    { t: "Domani", d: "Il giorno dopo oggi." },
    { t: "Fine settimana", d: "Il sabato e la domenica." },
    { t: "Meridiana", d: "Orologio che segna l'ora con l'ombra del Sole." },
    { t: "Fuso orario", d: "Zona del mondo che ha la stessa ora." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Metti in ordine i giorni della settimana.", items: ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"], explain: "Lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica." },
      { type: "num", q: "Quanti giorni ha la settimana?", answer: 7, explain: "7 giorni." },
      { type: "mc", q: "Se oggi è martedì, domani sarà…", options: ["lunedì", "mercoledì", "venerdì"], answer: 1, explain: "Il giorno dopo martedì è mercoledì." },
      { type: "mc", q: "Se oggi è sabato, ieri era…", options: ["venerdì", "domenica", "giovedì"], answer: 0, explain: "Il giorno prima di sabato è venerdì." },
      { type: "mc", q: "In quale parte del giorno si dorme?", options: ["Pomeriggio", "Notte", "Mattina"], answer: 1, explain: "Di notte si dorme." },
      { type: "tf", q: "Giorno e notte ci sono perché la Terra gira su sé stessa.", answer: true, explain: "Sì: la parte rivolta verso il Sole ha il giorno." },
      { type: "tf", q: "Il fine settimana è formato da lunedì e martedì.", answer: false, explain: "Il fine settimana è sabato e domenica." },
      { type: "text", q: "Quale giorno prende il nome da Giove?", answer: ["giovedì", "giovedi", "il giovedì"], explain: "Giovedì = giorno di Giove." },
      { type: "num", q: "Quante ore dura un giorno intero?", answer: 24, explain: "24 ore." },
      { type: "mc", q: "La parola «sabato» viene da shabbat, che vuol dire…", options: ["festa", "riposo", "sole"], answer: 1, explain: "Shabbat in ebraico vuol dire riposo." },
      { type: "mc", q: "Quale strumento antico segnava l'ora con l'ombra del Sole?", options: ["La meridiana", "La clessidra", "Il telefono"], answer: 0, explain: "La meridiana usa l'ombra del Sole." }
    ]
  }
});
