TOPIC('it', {
  id: "p1-mat-numeri-20",
  title: "I numeri fino a 20",
  intro: "I numeri sono dappertutto! 🔢 Sulle porte delle case, sull'orologio, sulle torte di compleanno 🎂. Oggi impariamo a <b>contare</b>, <b>leggere</b> e <b>scrivere</b> i numeri da 0 a 20.",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Contiamo insieme da 0 a 10",
      html: "<p>Contare vuol dire dire i numeri <b>uno dopo l'altro</b>, senza saltarne nessuno.</p>" +
        "<p>Tocca ogni oggetto con il dito e di' un numero: 1, 2, 3… L'ultimo numero che dici ti dice <b>quanti sono</b>!</p>" +
        "<table><tr><th>Cifra</th><th>Si legge</th><th>Quanti</th></tr>" +
        "<tr><td>0</td><td>zero</td><td>niente</td></tr>" +
        "<tr><td>1</td><td>uno</td><td>🍎</td></tr>" +
        "<tr><td>2</td><td>due</td><td>🍎🍎</td></tr>" +
        "<tr><td>3</td><td>tre</td><td>🍎🍎🍎</td></tr>" +
        "<tr><td>4</td><td>quattro</td><td>🍎🍎🍎🍎</td></tr>" +
        "<tr><td>5</td><td>cinque</td><td>🍎🍎🍎🍎🍎</td></tr>" +
        "<tr><td>6</td><td>sei</td><td>🍎🍎🍎🍎🍎🍎</td></tr>" +
        "<tr><td>7</td><td>sette</td><td>🍎🍎🍎🍎🍎🍎🍎</td></tr>" +
        "<tr><td>8</td><td>otto</td><td>🍎🍎🍎🍎🍎🍎🍎🍎</td></tr>" +
        "<tr><td>9</td><td>nove</td><td>🍎🍎🍎🍎🍎🍎🍎🍎🍎</td></tr>" +
        "<tr><td>10</td><td>dieci</td><td>🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎</td></tr></table>" +
        "<p><b>Zero</b> (0) vuol dire che non c'è niente: il piatto è vuoto! 🍽️</p>"
    },
    {
      type: "widget",
      title: "Prova tu: conta le mele",
      widget: "counter",
      options: { emoji: "🍎", max: 20 },
      caption: "Aggiungi e togli le mele. Conta ad alta voce ogni volta che ne aggiungi una!"
    },
    {
      type: "text",
      title: "Il magico numero 10: la decina",
      html: "<p>Abbiamo <b>10 dita</b> nelle mani ✋✋. Per questo il 10 è un numero speciale.</p>" +
        "<p>Quando abbiamo 10 oggetti possiamo legarli insieme in un mazzetto: si chiama <b>decina</b> (da).</p>" +
        "<p>Gli oggetti sciolti, che non riescono a fare un mazzetto, si chiamano <b>unità</b> (u).</p>" +
        "<ul><li>11 = 1 decina e 1 unità</li><li>15 = 1 decina e 5 unità</li><li>20 = 2 decine e 0 unità</li></ul>"
    },
    {
      type: "svg",
      title: "Decine e unità",
      svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="0" y="0" width="600" height="300" fill="#fff8e7"/>' +
        '<text x="300" y="40" font-size="28" text-anchor="middle" fill="#333" font-weight="bold">14 = 1 decina + 4 unità</text>' +
        '<rect x="40" y="70" width="230" height="190" rx="18" fill="#dbeafe" stroke="#3b82f6" stroke-width="4"/>' +
        '<text x="155" y="100" font-size="22" text-anchor="middle" fill="#1d4ed8" font-weight="bold">1 decina</text>' +
        '<g fill="#ef4444"><circle cx="75" cy="140" r="16"/><circle cx="115" cy="140" r="16"/><circle cx="155" cy="140" r="16"/><circle cx="195" cy="140" r="16"/><circle cx="235" cy="140" r="16"/>' +
        '<circle cx="75" cy="190" r="16"/><circle cx="115" cy="190" r="16"/><circle cx="155" cy="190" r="16"/><circle cx="195" cy="190" r="16"/><circle cx="235" cy="190" r="16"/></g>' +
        '<text x="155" y="245" font-size="20" text-anchor="middle" fill="#1d4ed8">10 palline</text>' +
        '<text x="305" y="180" font-size="48" text-anchor="middle" fill="#333" font-weight="bold">+</text>' +
        '<rect x="340" y="70" width="220" height="190" rx="18" fill="#dcfce7" stroke="#22c55e" stroke-width="4"/>' +
        '<text x="450" y="100" font-size="22" text-anchor="middle" fill="#15803d" font-weight="bold">4 unità</text>' +
        '<g fill="#f59e0b"><circle cx="390" cy="165" r="16"/><circle cx="430" cy="165" r="16"/><circle cx="470" cy="165" r="16"/><circle cx="510" cy="165" r="16"/></g>' +
        '<text x="450" y="245" font-size="20" text-anchor="middle" fill="#15803d">4 palline sciolte</text>' +
        '</svg>',
      caption: "Dieci palline fanno una decina. Le altre sono unità."
    },
    {
      type: "widget",
      title: "L'abaco",
      widget: "abacus",
      options: { columns: ["da", "u"], value: 13 },
      caption: "Ogni pallina sull'asta delle decine vale 10. Ogni pallina sull'asta delle unità vale 1. Prova a fare 17!"
    },
    {
      type: "example",
      title: "Esempio: la festa di compleanno 🎂",
      html: "<p>Luca compie 7 anni. Sulla torta ci sono <b>7 candeline</b>: 🕯️🕯️🕯️🕯️🕯️🕯️🕯️.</p>" +
        "<p>Arrivano 12 amici. 12 è <b>1 decina e 2 unità</b>: tanti quanti le dita di due mani più altre due!</p>"
    },
    {
      type: "quiz",
      title: "Mini-quiz: contare",
      questions: [
        { type: "num", q: "Quante stelle ci sono? ⭐⭐⭐⭐⭐⭐", answer: 6, explain: "Contiamo: 1, 2, 3, 4, 5, 6. Sono 6 stelle." },
        { type: "mc", q: "Come si scrive il numero «nove»?", options: ["6", "9", "19"], answer: 1, explain: "Nove si scrive 9." },
        { type: "tf", q: "Zero vuol dire «niente».", answer: true, explain: "Giusto! 0 significa che non c'è nessun oggetto." }
      ]
    },
    {
      type: "text",
      title: "Da 11 a 20",
      html: "<p>Dopo il 10 i numeri continuano. Ascolta bene i nomi:</p>" +
        "<ul><li>11 undici · 12 dodici · 13 tredici · 14 quattordici · 15 quindici · 16 sedici</li>" +
        "<li>17 diciassette · 18 diciotto · 19 diciannove · 20 venti</li></ul>" +
        "<p>Attenzione! Da 11 a 16 si dice prima l'unità e poi «-dici» (<b>un</b>-dici, <b>do</b>-dici…). " +
        "Da 17 a 19 invece si dice prima «dici-» (dicia-<b>ssette</b>, dici-<b>otto</b>, dician-<b>nove</b>).</p>"
    },
    {
      type: "widget",
      title: "La retta dei numeri",
      widget: "numberLine",
      options: { min: 0, max: 20, step: 1, marks: [10, 20] },
      caption: "Sulla retta i numeri sono in fila. Andando a destra diventano più grandi, a sinistra più piccoli."
    },
    {
      type: "remember",
      title: "Prima e dopo",
      html: "<p>Il numero che viene <b>dopo</b> è sempre <b>1 in più</b>: dopo il 7 viene l'8.</p>" +
        "<p>Il numero che viene <b>prima</b> è sempre <b>1 in meno</b>: prima del 7 viene il 6.</p>" +
        "<p>Se un numero sta più a destra sulla retta, è <b>maggiore</b> (&gt;). Se sta più a sinistra, è <b>minore</b> (&lt;).</p>"
    },
    {
      type: "example",
      title: "Esempio: in fila per la merenda 🥪",
      html: "<p>Siamo in fila: Anna è la numero 4, Marco è il numero 5 e Sara è la numero 6.</p>" +
        "<p>Chi viene <b>prima</b> di Marco? Anna (4). Chi viene <b>dopo</b>? Sara (6). " +
        "Marco sta <b>tra</b> il 4 e il 6!</p>"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? ✋",
      html: "<p>Contiamo a gruppi di 10 proprio perché abbiamo <b>10 dita</b>! Gli uomini antichi contavano sulle mani, e così è nato il nostro modo di scrivere i numeri.</p>"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🐞",
      html: "<p>Le cifre sono solo <b>dieci</b>: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Con queste dieci cifre si possono scrivere <b>tutti</b> i numeri del mondo, anche quelli grandissimi!</p>"
    },
    {
      type: "3d",
      title: "I numeri con i cubetti 3D 🧊",
      scene: "blocks",
      options: { mode: "base10", value: 14 },
      caption: "Ogni cubetto è 1 unità. 10 cubetti messi in fila diventano 1 barretta: 1 decina! Sposta il cursore e guarda come cambia il numero. Trascina per girare i cubetti."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i numeri 🌈",
      intro: "<p>Non c'è un solo modo per contare! Bambini di tutto il mondo usano strumenti diversi. Prova quello che ti piace di più.</p>",
      tabs: [
        {
          label: "✋ Con le dita",
          html: "<p>Le mani sono la prima calcolatrice della storia! Hai <b>10 dita</b>: quando le hai alzate tutte hai fatto <b>1 decina</b>.</p><p>Per arrivare a 20 ti serve un amico: le sue 10 dita sono la <b>seconda decina</b>. 10 + 10 = 20!</p><p>Prova: alza 10 dita, poi chiedi al compagno di alzarne 4. Quante sono? <b>14</b> = 1 decina e 4 unità.</p>",
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="220" fill="#fff7ed"/><g fill="#fdba74" stroke="#c2410c" stroke-width="2"><rect x="40" y="100" width="110" height="80" rx="30"/><rect x="45" y="40" width="18" height="70" rx="9"/><rect x="68" y="30" width="18" height="80" rx="9"/><rect x="91" y="28" width="18" height="82" rx="9"/><rect x="114" y="36" width="18" height="74" rx="9"/><rect x="140" y="95" width="45" height="18" rx="9" transform="rotate(-30 140 104)"/><rect x="200" y="100" width="110" height="80" rx="30"/><rect x="215" y="36" width="18" height="74" rx="9"/><rect x="238" y="28" width="18" height="82" rx="9"/><rect x="261" y="30" width="18" height="80" rx="9"/><rect x="284" y="40" width="18" height="70" rx="9"/><rect x="170" y="95" width="45" height="18" rx="9" transform="rotate(30 215 104)"/></g><text x="175" y="210" font-size="20" text-anchor="middle" fill="#9a3412" font-family="sans-serif" font-weight="bold">10 dita = 1 decina</text><g fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"><rect x="400" y="100" width="110" height="80" rx="30"/><rect x="405" y="40" width="18" height="70" rx="9"/><rect x="428" y="30" width="18" height="80" rx="9"/><rect x="451" y="28" width="18" height="82" rx="9"/><rect x="474" y="36" width="18" height="74" rx="9"/><rect x="500" y="120" width="40" height="18" rx="9"/></g><text x="470" y="210" font-size="20" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif" font-weight="bold">+ 4 = 14</text></svg>`
        },
        {
          label: "🇯🇵 Il soroban giapponese",
          html: "<p>In Giappone i bambini imparano a contare con il <b>soroban</b>, un abaco speciale. In ogni asta c'è <b>1 pallina in alto che vale 5</b> e <b>4 palline in basso che valgono 1</b>.</p><p>Per fare 7: abbassi la pallina del 5 e alzi 2 palline da 1 → 5 + 2 = <b>7</b>. Così si vedono i numeri a colpo d'occhio, senza contare una a una!</p><p>Molti bambini giapponesi diventano così bravi che poi contano con un <b>soroban immaginario</b> nella testa.</p>",
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#fefce8"/><rect x="150" y="20" width="300" height="220" rx="12" fill="#92400e"/><rect x="165" y="35" width="270" height="190" fill="#fde68a"/><rect x="165" y="95" width="270" height="8" fill="#92400e"/><g stroke="#78350f" stroke-width="4"><line x1="230" y1="35" x2="230" y2="225"/><line x1="370" y1="35" x2="370" y2="225"/></g><g fill="#dc2626" stroke="#7f1d1d" stroke-width="2"><ellipse cx="230" cy="55" rx="30" ry="13"/><ellipse cx="230" cy="125" rx="30" ry="13"/><ellipse cx="230" cy="168" rx="30" ry="13"/><ellipse cx="230" cy="190" rx="30" ry="13"/><ellipse cx="230" cy="212" rx="30" ry="13"/><ellipse cx="370" cy="85" rx="30" ry="13"/><ellipse cx="370" cy="118" rx="30" ry="13"/><ellipse cx="370" cy="141" rx="30" ry="13"/><ellipse cx="370" cy="190" rx="30" ry="13"/><ellipse cx="370" cy="212" rx="30" ry="13"/></g><text x="230" y="252" font-size="18" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">decine: 1</text><text x="370" y="252" font-size="18" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">unità: 5+2=7</text><text x="75" y="70" font-size="16" font-family="sans-serif" fill="#1f2937">vale 5 ⬆</text><text x="75" y="160" font-size="16" font-family="sans-serif" fill="#1f2937">valgono 1 ⬇</text><text x="525" y="135" font-size="34" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#dc2626">17</text></svg>`
        },
        {
          label: "🧊 Cubetti in 3D",
          html: "<p>Costruisci il numero con i cubetti: le <b>barrette</b> sono le decine, i <b>cubetti sciolti</b> sono le unità. Muovi il cursore e gira il modello col dito.</p>",
          scene: "blocks",
          options: { mode: "base10", value: 17 }
        },
        {
          label: "📏 La retta dei numeri",
          html: "<p>Immagina i numeri come le <b>caselle di un gioco dell'oca</b>: più vai avanti, più il numero è grande. Fai dei salti e guarda dove arrivi!</p>",
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [10, 20] }
        },
        {
          label: "🎲 Vedere senza contare",
          html: "<p>Guarda i puntini dei <b>dadi</b> e delle <b>tessere del domino</b>: riconosci 5 o 6 subito, senza contare uno a uno! Il nostro cervello vede i <b>gruppetti</b>.</p><p>Per esempio 8 = un gruppo da 5 + un gruppo da 3.</p>",
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="200" fill="#f0fdf4"/><g><rect x="40" y="40" width="120" height="120" rx="18" fill="#fff" stroke="#166534" stroke-width="4"/><g fill="#166534"><circle cx="70" cy="70" r="11"/><circle cx="130" cy="70" r="11"/><circle cx="100" cy="100" r="11"/><circle cx="70" cy="130" r="11"/><circle cx="130" cy="130" r="11"/></g><text x="100" y="190" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#166534">5</text></g><g><rect x="200" y="40" width="120" height="120" rx="18" fill="#fff" stroke="#166534" stroke-width="4"/><g fill="#166534"><circle cx="230" cy="70" r="11"/><circle cx="290" cy="70" r="11"/><circle cx="230" cy="100" r="11"/><circle cx="290" cy="100" r="11"/><circle cx="230" cy="130" r="11"/><circle cx="290" cy="130" r="11"/></g><text x="260" y="190" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#166534">6</text></g><text x="345" y="110" font-size="30" font-family="sans-serif" fill="#166534">→</text><g><rect x="390" y="40" width="190" height="120" rx="18" fill="#fff" stroke="#166534" stroke-width="4"/><line x1="485" y1="45" x2="485" y2="155" stroke="#166534" stroke-width="3"/><g fill="#166534"><circle cx="415" cy="70" r="10"/><circle cx="460" cy="70" r="10"/><circle cx="437" cy="100" r="10"/><circle cx="415" cy="130" r="10"/><circle cx="460" cy="130" r="10"/><circle cx="510" cy="70" r="10"/><circle cx="532" cy="100" r="10"/><circle cx="555" cy="130" r="10"/></g><text x="485" y="190" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#166534">5 + 3 = 8</text></g></svg>`
        },
        {
          label: "🇨🇳 Contare a stanghette",
          html: "<p>Per tenere il conto (per esempio dei punti in una partita) si fanno delle <b>stanghette</b>. In Italia facciamo 4 righe e la quinta le attraversa: un mazzetto da 5.</p><p>In <b>Cina e in Giappone</b> invece si scrive, un tratto alla volta, il carattere <b>正</b>, che ha proprio 5 tratti! Due caratteri 正 = 10 = 1 decina.</p>",
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="200" fill="#eff6ff"/><g stroke="#1e3a8a" stroke-width="6" stroke-linecap="round"><line x1="60" y1="50" x2="60" y2="130"/><line x1="85" y1="50" x2="85" y2="130"/><line x1="110" y1="50" x2="110" y2="130"/><line x1="135" y1="50" x2="135" y2="130"/><line x1="45" y1="120" x2="150" y2="60"/><line x1="190" y1="50" x2="190" y2="130"/><line x1="215" y1="50" x2="215" y2="130"/><line x1="240" y1="50" x2="240" y2="130"/><line x1="265" y1="50" x2="265" y2="130"/><line x1="175" y1="120" x2="280" y2="60"/></g><text x="165" y="175" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1e3a8a">5 + 5 = 10 🇮🇹</text><text x="380" y="130" font-size="80" text-anchor="middle" fill="#b91c1c">正</text><text x="490" y="130" font-size="80" text-anchor="middle" fill="#b91c1c">正</text><text x="435" y="175" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#b91c1c">5 + 5 = 10 🇨🇳</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa dei numeri 🗺️",
      nodes: [
        { id: "quantita", label: "Quante cose?", x: 50, y: 8, color: "#f97316", html: "<p>Tutto comincia da una domanda: <b>quante cose ci sono?</b> Contare vuol dire dare un numero a una quantità.</p>", why: "<p>Gli esseri umani contano da moltissimo tempo. In Africa è stato trovato un osso con tante tacche, l'<b>osso di Ishango</b>, vecchio più di 20 000 anni: forse qualcuno teneva il conto dei giorni o degli animali!</p>" },
        { id: "cifre", label: "Le cifre 0-9", x: 20, y: 35, color: "#3b82f6", html: "<p>Le <b>cifre</b> sono 10 simboli: 0 1 2 3 4 5 6 7 8 9. Con loro scriviamo tutti i numeri del mondo.</p>", why: "<p>Le chiamiamo «cifre arabe», ma sono nate in <b>India</b>. Gli Arabi le hanno portate fino a noi e un matematico di Pisa, <b>Fibonacci</b>, le ha fatte conoscere in Italia più di 800 anni fa. Prima si usavano i numeri romani (I, V, X), molto più scomodi per fare i conti!</p>" },
        { id: "zero", label: "Lo zero", x: 8, y: 62, color: "#64748b", html: "<p><b>0</b> vuol dire «niente». Ma è importantissimo: in 10 e 20 lo zero ci dice che non ci sono unità.</p>", why: "<p>Per migliaia di anni le persone non avevano un simbolo per il niente! Lo zero come numero è stato inventato in <b>India</b>: un matematico di nome Brahmagupta scrisse le sue regole circa 1400 anni fa.</p>" },
        { id: "unita", label: "Unità", x: 40, y: 62, color: "#22c55e", html: "<p>Un'<b>unità</b> è una cosa sola: 1 mela, 1 cubetto, 1 dito.</p>", why: "<p>Si parte sempre dall'uno: ogni numero si costruisce aggiungendo 1 al numero prima. È il segreto del contare: 1, poi 1 in più, poi ancora 1 in più…</p>" },
        { id: "decina", label: "Decina", x: 65, y: 40, color: "#a855f7", html: "<p>Quando hai <b>10 unità</b>, le metti insieme in un gruppo: è <b>1 decina</b>.</p>", why: "<p>Perché proprio 10? Perché abbiamo <b>10 dita</b>! Non tutti però contavano così: i <b>Maya</b> contavano a gruppi di 20 (dita delle mani e dei piedi) e gli antichi <b>Babilonesi</b> a gruppi di 60. Ecco perché un'ora ha 60 minuti!</p>" },
        { id: "posizione", label: "Il posto conta!", x: 70, y: 70, color: "#ec4899", html: "<p>In <b>14</b> la cifra 1 vale una decina e la cifra 4 vale 4 unità. La stessa cifra vale di più se sta più a sinistra.</p>", why: "<p>È un'idea geniale nata in India: con soli 10 simboli e il loro <b>posto</b> possiamo scrivere numeri piccolissimi e grandissimi. Con i numeri romani invece servivano tanti simboli diversi.</p>" },
        { id: "ordine", label: "Prima e dopo", x: 88, y: 20, color: "#0ea5e9", html: "<p>I numeri sono in <b>fila</b>: dopo il 7 viene l'8, prima del 7 c'è il 6.</p>", why: "<p>Ogni numero è il precedente <b>+ 1</b>. Per questo la fila dei numeri non finisce mai: puoi sempre aggiungere 1!</p>" },
        { id: "confronto", label: "Più grande, più piccolo", x: 90, y: 55, color: "#eab308", html: "<p>Un numero è <b>più grande</b> se sta più avanti nella fila: 18 è più grande di 12.</p>", why: "<p>Confrontiamo prima le decine, poi le unità: 18 e 12 hanno 1 decina tutti e due, ma 8 unità sono più di 2.</p>" }
      ],
      edges: [
        ["quantita", "cifre", "si scrive con"],
        ["cifre", "zero", "la più speciale"],
        ["quantita", "unita", "si conta a"],
        ["unita", "decina", "10 fanno 1"],
        ["decina", "posizione", "dipende dal"],
        ["zero", "posizione", "tiene il posto"],
        ["quantita", "ordine", "in fila"],
        ["ordine", "confronto", "serve per"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: prima, dopo, più grande",
      questions: [
        { type: "num", q: "Che numero viene dopo il 14?", answer: 15, explain: "Dopo viene sempre 1 in più: 14 + 1 = 15." },
        { type: "num", q: "Che numero viene prima del 20?", answer: 19, explain: "Prima viene sempre 1 in meno: 19." },
        { type: "mc", q: "Qual è il numero più grande?", options: ["12", "18", "8"], answer: 1, explain: "18 sta più a destra sulla retta dei numeri." }
      ]
    }
  ],
  glossary: [
    { t: "Numero", d: "Dice quante cose ci sono." },
    { t: "Cifra", d: "Uno dei 10 segni (da 0 a 9) che usiamo per scrivere i numeri." },
    { t: "Unità", d: "Un oggetto da solo. Vale 1." },
    { t: "Decina", d: "Un gruppo di 10 unità." },
    { t: "Maggiore (>)", d: "Più grande." },
    { t: "Minore (<)", d: "Più piccolo." },
    { t: "Retta dei numeri", d: "Una linea dove i numeri sono messi in fila dal più piccolo al più grande." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quante macchinine ci sono? 🚗🚗🚗🚗🚗🚗🚗🚗", answer: 8, explain: "Contando una alla volta arriviamo a 8." },
      { type: "mc", q: "Come si scrive «sedici»?", options: ["61", "16", "6"], answer: 1, explain: "Sedici è 1 decina e 6 unità: 16." },
      { type: "mc", q: "Quante decine ci sono in 20?", options: ["1", "2", "0"], answer: 1, explain: "20 = 2 decine e 0 unità." },
      { type: "num", q: "1 decina e 3 unità fanno…", answer: 13, explain: "10 + 3 = 13." },
      { type: "tf", q: "Il 9 è maggiore del 19.", answer: false, explain: "No: 19 è più grande di 9, perché ha anche una decina." },
      { type: "num", q: "Che numero c'è tra 11 e 13?", answer: 12, explain: "11, 12, 13: in mezzo c'è il 12." },
      { type: "order", q: "Metti in ordine dal più piccolo al più grande", items: ["3", "8", "11", "17"], explain: "3 < 8 < 11 < 17." },
      { type: "text", q: "Scrivi in lettere il numero 10.", answer: ["dieci"], explain: "10 si scrive «dieci»." },
      { type: "mc", q: "Quale gruppo ha 5 oggetti?", options: ["🐟🐟🐟🐟", "🐟🐟🐟🐟🐟", "🐟🐟🐟🐟🐟🐟"], answer: 1, explain: "Contiamo: il secondo gruppo ha 5 pesci." },
      { type: "tf", q: "Con 10 dita possiamo fare una decina.", answer: true, explain: "Esatto! 10 unità fanno 1 decina." }
    ],
    gen: [["count20", 2], ["compare20", 2]]
  }
});
