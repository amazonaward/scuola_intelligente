TOPIC('it', {
  id: "p2-mat-tabelline",
  title: "Le tabelline",
  intro: "Le <b>tabelline</b> sono un super-potere 🦸: ci fanno contare in fretta tante cose tutte uguali. Scopriamo che <b>moltiplicare</b> vuol dire fare un'<b>addizione ripetuta</b>!",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Moltiplicare = sommare tante volte lo stesso numero",
      html: "<p>Hai <b>3 piatti</b> e su ogni piatto ci sono <b>4 biscotti</b> 🍪.</p>" +
        "<p>Puoi contare così: 4 + 4 + 4 = 12.</p>" +
        "<p>Oppure puoi dire: <b>3 volte 4</b>, che si scrive <b>3 × 4 = 12</b>.</p>" +
        "<p>Il segno <b>×</b> si legge «per». I numeri che moltiplichiamo si chiamano <b>fattori</b>, il risultato si chiama <b>prodotto</b>.</p>"
    },
    {
      type: "svg",
      title: "3 × 4 con gli schieramenti",
      svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="600" height="300" fill="#fefce8"/>' +
        '<text x="300" y="40" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">3 righe × 4 colonne = 12</text>' +
        '<g fill="#a16207" stroke="#713f12" stroke-width="2">' +
        '<circle cx="110" cy="100" r="24"/><circle cx="180" cy="100" r="24"/><circle cx="250" cy="100" r="24"/><circle cx="320" cy="100" r="24"/>' +
        '<circle cx="110" cy="170" r="24"/><circle cx="180" cy="170" r="24"/><circle cx="250" cy="170" r="24"/><circle cx="320" cy="170" r="24"/>' +
        '<circle cx="110" cy="240" r="24"/><circle cx="180" cy="240" r="24"/><circle cx="250" cy="240" r="24"/><circle cx="320" cy="240" r="24"/></g>' +
        '<g fill="#fde68a"><circle cx="102" cy="94" r="4"/><circle cx="172" cy="94" r="4"/><circle cx="242" cy="94" r="4"/><circle cx="312" cy="94" r="4"/>' +
        '<circle cx="102" cy="164" r="4"/><circle cx="172" cy="164" r="4"/><circle cx="242" cy="164" r="4"/><circle cx="312" cy="164" r="4"/>' +
        '<circle cx="102" cy="234" r="4"/><circle cx="172" cy="234" r="4"/><circle cx="242" cy="234" r="4"/><circle cx="312" cy="234" r="4"/></g>' +
        '<g font-size="22" fill="#2563eb" font-weight="bold"><text x="370" y="108">4</text><text x="370" y="178">+ 4</text><text x="370" y="248">+ 4</text></g>' +
        '<text x="470" y="178" font-size="34" font-weight="bold" fill="#dc2626">= 12</text>' +
        '</svg>',
      caption: "Uno schieramento: righe e colonne di biscotti. 3 righe da 4 fanno 12."
    },
    {
      type: "example",
      title: "Esempio: le zampe dei cani 🐕",
      html: "<p>Nel parco ci sono <b>5 cani</b>. Ogni cane ha <b>4 zampe</b>.</p>" +
        "<p>Quante zampe in tutto? 4 + 4 + 4 + 4 + 4 = 20, cioè <b>5 × 4 = 20</b> zampe! 🐾</p>"
    },
    {
      type: "text",
      title: "Trucchi per ricordare le tabelline",
      html: "<ul>" +
        "<li><b>× 1</b>: il numero resta uguale. 7 × 1 = 7.</li>" +
        "<li><b>× 0</b>: fa sempre 0! 8 × 0 = 0 (0 piatti = 0 biscotti).</li>" +
        "<li><b>× 2</b>: è il <b>doppio</b>. 6 × 2 = 6 + 6 = 12.</li>" +
        "<li><b>× 5</b>: i risultati finiscono sempre con <b>0</b> o con <b>5</b>: 5, 10, 15, 20…</li>" +
        "<li><b>× 10</b>: aggiungi uno <b>0</b> in fondo. 3 × 10 = 30.</li>" +
        "<li><b>× 9</b>: le cifre del risultato sommate fanno 9! 9 × 3 = 27 → 2 + 7 = 9.</li>" +
        "</ul>"
    },
    {
      type: "remember",
      title: "La proprietà commutativa",
      html: "<p>Se scambi i fattori, il risultato <b>non cambia</b>: <b>3 × 4 = 4 × 3 = 12</b>.</p>" +
        "<p>Così, se sai 3 × 8, sai anche 8 × 3! Le tabelline da imparare diventano la metà. 😄</p>"
    },
    {
      type: "widget",
      title: "La tavola pitagorica",
      widget: "timesTable",
      options: { size: 10 },
      caption: "Tocca una casella: la riga e la colonna si incontrano nel risultato. Guarda: la tavola è uguale dalle due parti della diagonale!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: addizioni ripetute",
      questions: [
        { type: "mc", q: "2 + 2 + 2 + 2 è uguale a…", options: ["2 × 4", "2 × 2", "4 + 2"], answer: 0, explain: "Il 2 è ripetuto 4 volte: 2 × 4 = 8." },
        { type: "num", q: "Quanto fa 5 × 3?", answer: 15, explain: "5 + 5 + 5 = 15." },
        { type: "tf", q: "6 × 0 = 6", answer: false, explain: "Qualsiasi numero per 0 fa 0." }
      ]
    },
    {
      type: "widget",
      title: "Salti sulla retta: la tabellina del 3",
      widget: "numberLine",
      options: { min: 0, max: 30, step: 3, marks: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30] },
      caption: "Fai salti da 3: 3, 6, 9, 12… sono i risultati della tabellina del 3!"
    },
    {
      type: "example",
      title: "Esempio: la spesa al mercato 🥚",
      html: "<p>La nonna compra <b>2 confezioni di uova</b>. In ogni confezione ci sono <b>6 uova</b>.</p>" +
        "<p>Quante uova? <b>2 × 6 = 12</b> uova. Una dozzina! 🥚</p>"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🏛️",
      html: "<p>La tavola delle tabelline si chiama <b>tavola pitagorica</b> in onore di <b>Pitagora</b>, un matematico greco vissuto più di 2500 anni fa.</p>"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? ✋",
      html: "<p>Esiste un trucco con le dita per la tabellina del 9! Apri le mani. Per fare 9 × 4 abbassa il <b>4° dito</b> da sinistra: a sinistra restano <b>3 dita</b> e a destra <b>6 dita</b>. Il risultato è <b>36</b>!</p>"
    },
    {
      type: "3d",
      title: "Le tabelline in 3D 🧊",
      scene: "blocks",
      options: { mode: "array", a: 3, b: 4 },
      caption: "Una moltiplicazione è un rettangolo di cubetti: 3 file da 4 cubetti = 12 cubetti. Cambia i numeri con i cursori e gira il rettangolo: 3 × 4 e 4 × 3 hanno gli stessi cubetti!"
    },
    {
      type: "alternatives",
      title: "Non ti piace il metodo della scuola? Ecco altri modi! 🌍",
      intro: "<p>In ogni parte del mondo i bambini moltiplicano in modo diverso. Non esiste un solo modo giusto: scegli quello che capisci meglio!</p>",
      tabs: [
        {
          label: "🧊 Cubetti 3D",
          html: "<p>Metti i cubetti in <b>file</b>: 3 file da 5 cubetti. Quanti sono in tutto? Conta le file e i cubetti di ogni fila: <b>3 × 5 = 15</b>.</p><p>Muovi i cursori e costruisci tu le tabelline!</p>",
          scene: "blocks",
          options: { mode: "array", a: 3, b: 5 }
        },
        {
          label: "🔄 Gira il rettangolo",
          html: "<p>Disegna 3 righe da 5 quadretti. Ora <b>gira il foglio</b>: diventano 5 righe da 3 quadretti! I quadretti sono sempre <b>15</b>.</p><p>Per questo <b>3 × 5 = 5 × 3</b>. Si chiama <b>proprietà commutativa</b>. Così devi imparare solo metà della tavola pitagorica! 😉</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#f0f9ff"/><g fill="#60a5fa" stroke="#1e3a8a" stroke-width="2"><rect x="40" y="50" width="30" height="30"/><rect x="70" y="50" width="30" height="30"/><rect x="100" y="50" width="30" height="30"/><rect x="130" y="50" width="30" height="30"/><rect x="160" y="50" width="30" height="30"/><rect x="40" y="80" width="30" height="30"/><rect x="70" y="80" width="30" height="30"/><rect x="100" y="80" width="30" height="30"/><rect x="130" y="80" width="30" height="30"/><rect x="160" y="80" width="30" height="30"/><rect x="40" y="110" width="30" height="30"/><rect x="70" y="110" width="30" height="30"/><rect x="100" y="110" width="30" height="30"/><rect x="130" y="110" width="30" height="30"/><rect x="160" y="110" width="30" height="30"/></g><text x="115" y="185" font-size="26" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1e3a8a">3 × 5 = 15</text><text x="300" y="110" font-size="44" text-anchor="middle">🔄</text><g fill="#f472b6" stroke="#831843" stroke-width="2"><rect x="420" y="20" width="30" height="30"/><rect x="450" y="20" width="30" height="30"/><rect x="480" y="20" width="30" height="30"/><rect x="420" y="50" width="30" height="30"/><rect x="450" y="50" width="30" height="30"/><rect x="480" y="50" width="30" height="30"/><rect x="420" y="80" width="30" height="30"/><rect x="450" y="80" width="30" height="30"/><rect x="480" y="80" width="30" height="30"/><rect x="420" y="110" width="30" height="30"/><rect x="450" y="110" width="30" height="30"/><rect x="480" y="110" width="30" height="30"/><rect x="420" y="140" width="30" height="30"/><rect x="450" y="140" width="30" height="30"/><rect x="480" y="140" width="30" height="30"/></g><text x="465" y="215" font-size="26" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#831843">5 × 3 = 15</text></svg>`
        },
        {
          label: "🇯🇵 Le linee giapponesi",
          html: "<p>In <b>Giappone</b> e in <b>Cina</b> molti bambini moltiplicano disegnando <b>linee</b>! Per 12 × 13:</p><ol><li>disegni 1 linea e poi 2 linee (il 12) inclinate da una parte;</li><li>disegni 1 linea e poi 3 linee (il 13) inclinate dall'altra parte;</li><li>conti gli <b>incroci</b> in ogni zona: a sinistra le centinaia, in mezzo le decine, a destra le unità.</li></ol><p>Risultato: 1 | 5 | 6 → <b>156</b>. Guarda l'animazione!</p>",
          widget: "lineMultiply",
          options: { a: 12, b: 13 }
        },
        {
          label: "🇷🇺 Il contadino russo",
          html: "<p>Si racconta che i <b>contadini russi</b> moltiplicassero sapendo fare solo due cose: <b>dimezzare</b> e <b>raddoppiare</b>!</p><ol><li>Scrivi i due numeri in due colonne.</li><li>A sinistra dividi per 2 (senza resto), a destra raddoppi.</li><li>Cancella le righe dove a sinistra c'è un numero <b>pari</b>.</li><li>Somma i numeri rimasti a destra.</li></ol><p>Prova: 8 × 6 = 48.</p>",
          widget: "russianPeasant",
          options: { a: 8, b: 6 }
        },
        {
          label: "🏺 Gli antichi Egizi",
          html: "<p>Più di 3500 anni fa gli <b>Egizi</b> moltiplicavano facendo solo <b>raddoppi</b>! Per 7 × 6:</p><ul><li>1 × 6 = 6</li><li>2 × 6 = 12</li><li>4 × 6 = 24</li></ul><p>Poi scelgono le righe che insieme fanno 7: 1 + 2 + 4 = 7. Sommano 6 + 12 + 24 = <b>42</b>. Ingegnoso, vero?</p>",
          widget: "egyptianMultiply",
          options: { a: 7, b: 6 }
        },
        {
          label: "🔲 La gelosia",
          html: "<p>La <b>moltiplicazione a gelosia</b> usa una griglia con le diagonali, che somiglia alle persiane chiamate «gelosie». Arriva dal mondo <b>arabo</b> e fu usata a <b>Venezia</b> e in tutta Italia nel Medioevo.</p><p>In ogni casella scrivi il risultato di una tabellina (decine sopra la diagonale, unità sotto), poi sommi lungo le diagonali.</p>",
          widget: "lattice",
          options: { a: 23, b: 4 }
        },
        {
          label: "✋ Il trucco del 9",
          html: "<p>Per la tabellina del 9 bastano le mani!</p><ol><li>Apri le mani davanti a te: 10 dita.</li><li>Per fare 9 × 3 abbassa il <b>terzo dito</b> da sinistra.</li><li>Le dita alzate a <b>sinistra</b> del dito abbassato sono le <b>decine</b>: 2.</li><li>Le dita alzate a <b>destra</b> sono le <b>unità</b>: 7.</li></ol><p>9 × 3 = <b>27</b>! Funziona da 9 × 1 a 9 × 10.</p>",
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="220" fill="#fefce8"/><g fill="#fdba74" stroke="#9a3412" stroke-width="2"><rect x="40" y="40" width="34" height="110" rx="17"/><rect x="90" y="40" width="34" height="110" rx="17"/><rect x="140" y="110" width="34" height="40" rx="17" fill="#fca5a5"/><rect x="190" y="40" width="34" height="110" rx="17"/><rect x="240" y="40" width="34" height="110" rx="17"/><rect x="320" y="40" width="34" height="110" rx="17"/><rect x="370" y="40" width="34" height="110" rx="17"/><rect x="420" y="40" width="34" height="110" rx="17"/><rect x="470" y="40" width="34" height="110" rx="17"/><rect x="520" y="40" width="34" height="110" rx="17"/></g><text x="157" y="30" font-size="18" text-anchor="middle" font-family="sans-serif" fill="#b91c1c" font-weight="bold">3°</text><text x="82" y="185" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1e3a8a">2 decine</text><text x="400" y="185" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#166534">7 unità</text><text x="300" y="212" font-size="24" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#111827">9 × 3 = 27</text></svg>`
        },
        {
          label: "🐸 I salti della rana",
          html: "<p>Una rana salta sempre della stessa lunghezza. Se fa salti da <b>4</b>, dopo 5 salti dove arriva? 4, 8, 12, 16, <b>20</b>! Le tabelline sono <b>salti uguali</b> sulla retta dei numeri.</p>",
          widget: "numberLine",
          options: { min: 0, max: 40, step: 4, marks: [20, 40] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa della moltiplicazione 🗺️",
      nodes: [
        { id: "addizione", label: "Addizione", x: 50, y: 6, color: "#22c55e", html: "<p>Sai già fare le addizioni: 3 + 3 + 3 + 3.</p>", why: "<p>L'addizione è la prima operazione: mettere insieme. Tutte le altre operazioni nascono da lei.</p>" },
        { id: "ripetuta", label: "Addizione ripetuta", x: 50, y: 26, color: "#16a34a", html: "<p>Quando aggiungi tante volte <b>lo stesso numero</b>, puoi usare una scorciatoia: la moltiplicazione. 3 + 3 + 3 + 3 = 4 × 3.</p>", why: "<p>Scrivere 3 + 3 + 3 + … cento volte sarebbe lunghissimo! La moltiplicazione è nata per <b>risparmiare fatica</b>.</p>" },
        { id: "moltiplicazione", label: "Moltiplicazione ×", x: 50, y: 46, color: "#3b82f6", html: "<p>4 × 3 = 12. I numeri che moltiplichi si chiamano <b>fattori</b>, il risultato si chiama <b>prodotto</b>.</p>", why: "<p>Il segno × è stato usato per la prima volta da un matematico inglese, <b>William Oughtred</b>, quasi 400 anni fa. Prima si scriveva a parole!</p>" },
        { id: "rettangolo", label: "Rettangolo di quadretti", x: 15, y: 46, color: "#f97316", html: "<p>Ogni moltiplicazione si può disegnare come un <b>rettangolo</b>: 4 righe da 3 quadretti.</p>", why: "<p>Il rettangolo ci fa <b>vedere</b> la moltiplicazione: le righe sono uguali, proprio come gli addendi uguali dell'addizione ripetuta.</p>" },
        { id: "tabelline", label: "Tabelline", x: 85, y: 46, color: "#a855f7", html: "<p>Le <b>tabelline</b> sono le moltiplicazioni da 1 a 10 da sapere a memoria. Insieme formano la <b>tavola pitagorica</b>.</p>", why: "<p>Si chiama «pitagorica» in onore del matematico greco <b>Pitagora</b>, ma le tabelline sono ancora più antiche: in <b>Cina</b> è stata trovata una tavola delle moltiplicazioni scritta su listelli di bambù più di 2300 anni fa!</p>" },
        { id: "commutativa", label: "Si può girare: 3×5 = 5×3", x: 15, y: 75, color: "#ec4899", html: "<p><b>Proprietà commutativa</b>: se scambi i fattori, il prodotto non cambia.</p>", why: "<p>Perché? Prendi il rettangolo 3 × 5 e giralo: diventa 5 × 3, ma i quadretti sono sempre gli stessi! Nessuno li ha aggiunti o tolti.</p>" },
        { id: "zero", label: "× 0 = 0", x: 40, y: 75, color: "#64748b", html: "<p>Qualsiasi numero per <b>0</b> fa <b>0</b>.</p>", why: "<p>5 × 0 vuol dire «5 volte niente»: se hai 5 scatole vuote, quante caramelle hai? Zero!</p>" },
        { id: "uno", label: "× 1 resta uguale", x: 62, y: 75, color: "#0ea5e9", html: "<p>Qualsiasi numero per <b>1</b> resta uguale: 7 × 1 = 7.</p>", why: "<p>7 × 1 vuol dire «il 7 una volta sola»: non cambia niente!</p>" },
        { id: "dieci", label: "× 10: aggiungi uno 0", x: 85, y: 75, color: "#eab308", html: "<p>4 × 10 = 40: si aggiunge uno <b>zero</b>.</p>", why: "<p>Moltiplicare per 10 trasforma ogni unità in una decina: le cifre si spostano di un posto a sinistra e lo zero tiene il posto vuoto delle unità.</p>" },
        { id: "divisione", label: "Divisione", x: 50, y: 95, color: "#ef4444", html: "<p>La <b>divisione</b> è l'operazione contraria: se 4 × 3 = 12, allora 12 : 3 = 4.</p>", why: "<p>Conoscere bene le tabelline ti aiuterà moltissimo con le divisioni: sono la stessa tabella letta al contrario!</p>" }
      ],
      edges: [
        ["addizione", "ripetuta", "con numeri uguali"],
        ["ripetuta", "moltiplicazione", "scorciatoia"],
        ["moltiplicazione", "rettangolo", "si disegna come"],
        ["moltiplicazione", "tabelline", "da 1 a 10"],
        ["rettangolo", "commutativa", "girandolo"],
        ["moltiplicazione", "zero", ""],
        ["moltiplicazione", "uno", ""],
        ["tabelline", "dieci", ""],
        ["moltiplicazione", "divisione", "il contrario"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: tabelline veloci",
      questions: [
        { type: "num", q: "7 × 2 = ?", answer: 14, explain: "Il doppio di 7 è 14." },
        { type: "num", q: "4 × 10 = ?", answer: 40, explain: "Per 10 aggiungi uno zero: 40." },
        { type: "mc", q: "Quale risultato è nella tabellina del 5?", options: ["23", "35", "41"], answer: 1, explain: "35 = 5 × 7; i risultati del 5 finiscono con 0 o 5." }
      ]
    }
  ],
  glossary: [
    { t: "Moltiplicazione", d: "Un'addizione ripetuta dello stesso numero. Si usa il segno ×." },
    { t: "Fattori", d: "I numeri che si moltiplicano." },
    { t: "Prodotto", d: "Il risultato della moltiplicazione." },
    { t: "Schieramento", d: "Oggetti messi in righe e colonne uguali." },
    { t: "Doppio", d: "Un numero preso 2 volte." },
    { t: "Tavola pitagorica", d: "La tabella con tutti i risultati delle tabelline." },
    { t: "Proprietà commutativa", d: "Scambiando i fattori il prodotto non cambia." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "3 × 3 = ?", answer: 9, explain: "3 + 3 + 3 = 9." },
      { type: "num", q: "6 × 5 = ?", answer: 30, explain: "5 + 5 + 5 + 5 + 5 + 5 = 30." },
      { type: "num", q: "8 × 2 = ?", answer: 16, explain: "Il doppio di 8 è 16." },
      { type: "mc", q: "Quale addizione è uguale a 4 × 3?", options: ["4 + 3", "3 + 3 + 3 + 3", "4 + 4 + 4 + 4"], answer: 1, explain: "4 × 3 significa 4 volte il 3." },
      { type: "tf", q: "5 × 2 è uguale a 2 × 5.", answer: true, explain: "Proprietà commutativa: fanno entrambi 10." },
      { type: "num", q: "9 × 1 = ?", answer: 9, explain: "Per 1 il numero resta uguale." },
      { type: "num", q: "Un ragno ha 8 zampe. Quante zampe hanno 3 ragni? 🕷️", answer: 24, explain: "3 × 8 = 24." },
      { type: "mc", q: "Come si chiama il risultato di una moltiplicazione?", options: ["Somma", "Prodotto", "Differenza"], answer: 1, explain: "Il risultato della moltiplicazione è il prodotto." },
      { type: "order", q: "Metti in ordine i risultati della tabellina del 4", items: ["4", "8", "12", "16", "20"], explain: "4, 8, 12, 16, 20: ogni volta + 4." },
      { type: "num", q: "0 × 7 = ?", answer: 0, explain: "Moltiplicare per 0 dà sempre 0." }
    ],
    gen: [["times", 4]]
  }
});
