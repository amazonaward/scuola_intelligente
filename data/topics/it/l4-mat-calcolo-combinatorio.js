TOPIC('it', {
  id: "l4-mat-calcolo-combinatorio",
  title: "Il calcolo combinatorio",
  intro: "Quante password di 4 cifre esistono? In quanti modi si può formare il podio di una gara con 10 atleti? Quante giocate diverse ci sono al SuperEnalotto? Quanti anagrammi ha la tua parola preferita? Il <b>calcolo combinatorio</b> insegna a <b>contare</b> senza elencare: raggruppamenti di oggetti in cui conta o non conta l'<b>ordine</b>, in cui gli oggetti si possono o non si possono <b>ripetere</b>. Sono le basi della <b>probabilità</b> (la lezione successiva), dell'informatica (crittografia, algoritmi) e della statistica. In fondo vedremo anche il <b>binomio di Newton</b> e il <b>triangolo di Tartaglia</b>.",
  minutes: 70,
  sections: [
    {
      type: "text",
      title: "Il principio fondamentale e il fattoriale",
      html: `<p><b>Principio moltiplicativo.</b> Se una scelta si compie in <b>m</b> modi e, per ciascuno di essi, una seconda scelta si compie in <b>n</b> modi, le due scelte successive si compiono in <b>m · n</b> modi. Lo stesso per tre o più scelte. <b>Principio additivo:</b> se due scelte sono alternative (non si fanno entrambe), si <b>sommano</b> le possibilità.</p>
<p><b>Esempio.</b> Un menu ha 3 primi, 4 secondi e 2 dolci: i menu completi sono 3 · 4 · 2 = 24. Una targa italiana (due lettere, tre cifre, due lettere, con 22 lettere utilizzabili: sono escluse I, O, Q, U) può essere formata in 22 · 22 · 10 · 10 · 10 · 22 · 22 = 22⁴ · 10³ = 234 256 000 modi.</p>
<p><b>Fattoriale.</b> Per n ≥ 1, <b>n! = n · (n − 1) · (n − 2) ⋯ 2 · 1</b>; per convenzione <b>0! = 1</b>. Cresce in modo vertiginoso: 5! = 120, 10! = 3 628 800, 20! ≈ 2,4 · 10¹⁸. Utile la relazione n! = n · (n − 1)!.</p>
<p>Tutte le formule seguenti si ricavano dal principio moltiplicativo. Per classificare un problema servono due domande: <b>1)</b> L'<b>ordine</b> è importante (ABC è diverso da BAC)? <b>2)</b> Gli elementi si possono <b>ripetere</b>?</p>`
    },
    {
      type: "text",
      title: "Disposizioni e permutazioni",
      html: `<p>Una <b>disposizione semplice</b> di n oggetti in classe k (k ≤ n) è un raggruppamento <b>ordinato</b> di k oggetti <b>distinti</b> scelti tra gli n. Il primo posto si riempie in n modi, il secondo in n − 1, ..., il k-esimo in n − k + 1:</p>
<p style="text-align:center"><b>D<sub>n,k</sub> = n · (n − 1) ⋯ (n − k + 1) = n! / (n − k)!</b></p>
<p><b>Esempio (podio).</b> In una gara con 10 atleti, i possibili podi (oro, argento, bronzo) sono D<sub>10,3</sub> = 10 · 9 · 8 = <b>720</b>.</p>
<p>Una <b>disposizione con ripetizione</b> di n oggetti in classe k è ordinata e ammette ripetizioni: <b>D'<sub>n,k</sub> = nᵏ</b>. <b>Esempio:</b> le password di 4 cifre sono 10⁴ = 10 000; i numeri binari di 8 bit (byte) sono 2⁸ = 256.</p>
<p>Una <b>permutazione semplice</b> di n oggetti è una disposizione di classe n: i modi di <b>ordinare</b> n oggetti distinti: <b>P<sub>n</sub> = n!</b>. <b>Esempio:</b> 5 persone su una panchina: 5! = 120 modi. Le <b>disposizioni circolari</b> (tavola rotonda, rotazioni equivalenti) sono (n − 1)!.</p>
<p>Una <b>permutazione con ripetizione</b> di n oggetti di cui k₁ uguali tra loro, k₂ uguali tra loro ecc. è <b>n! / (k₁! k₂! ⋯)</b> (si divide per le permutazioni indistinguibili). <b>Esempio (anagrammi).</b> MAMMA: 5 lettere, 3 M e 2 A: 5!/(3! 2!) = 120/12 = <b>10</b> anagrammi. ITALIA: 6!/(2! 2!) = 720/4 = <b>180</b> (I e A ripetute due volte).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: disposizioni e permutazioni",
      questions: [
        { type: "num", q: "In quanti modi 6 persone possono mettersi in fila?", answer: 720, explain: "P₆ = 6! = 720." },
        { type: "num", q: "Quanti codici di 3 lettere (alfabeto di 26 lettere) con ripetizioni sono possibili?", answer: 17576, explain: "26³ = 17 576." },
        { type: "mc", q: "Quanti anagrammi ha la parola CASA?", options: ["12", "24", "6"], answer: 0, explain: "4!/2! = 12 (la A compare due volte)." }
      ]
    },
    {
      type: "text",
      title: "Combinazioni e coefficiente binomiale",
      html: `<p>Una <b>combinazione semplice</b> di n oggetti in classe k è un <b>sottoinsieme</b> di k oggetti tra gli n: l'<b>ordine non conta</b> e non ci sono ripetizioni. Ogni gruppo di k oggetti, ordinato in tutti i modi possibili, genera k! disposizioni: quindi le combinazioni sono le disposizioni divise per k!:</p>
<p style="text-align:center"><b>C<sub>n,k</sub> = D<sub>n,k</sub> / k! = n! / (k! (n − k)!)</b> = <b>(n su k)</b></p>
<p>Il numero C<sub>n,k</sub> si chiama <b>coefficiente binomiale</b> e si indica con il simbolo (n su k). <b>Proprietà</b>:</p>
<ul>
<li><b>(n su 0) = (n su n) = 1</b>; <b>(n su 1) = n</b>.</li>
<li><b>Simmetria</b>: (n su k) = (n su n − k) (scegliere i k oggetti da prendere equivale a scegliere gli n − k da lasciare).</li>
<li><b>Legge di Stifel (Pascal)</b>: (n su k) + (n su k + 1) = (n + 1 su k + 1).</li>
<li>Somma su tutti i k: Σ (n su k) = <b>2ⁿ</b> (numero di sottoinsiemi di un insieme di n elementi).</li>
</ul>
<p><b>Esempi.</b></p>
<ul>
<li>Un comitato di 3 persone scelte tra 8: C<sub>8,3</sub> = 8 · 7 · 6/(3 · 2 · 1) = <b>56</b>.</li>
<li>Una stretta di mano tra ogni coppia di 12 persone: C<sub>12,2</sub> = 66.</li>
<li><b>SuperEnalotto</b>: si scelgono 6 numeri su 90 (l'ordine non conta): C<sub>90,6</sub> = <b>622 614 630</b> possibili sestine: la probabilità di indovinarla con una sola giocata è 1 su 622 614 630.</li>
</ul>
<p>Le <b>combinazioni con ripetizione</b> di n oggetti in classe k (ordine non conta, ripetizioni ammesse) sono C'<sub>n,k</sub> = (n + k − 1 su k). <b>Esempio:</b> scegliere 3 palline di gelato tra 5 gusti (anche ripetendo): (7 su 3) = 35.</p>`
    },
    {
      type: "remember",
      title: "Come scegliere la formula giusta",
      html: `<p><b>Ordine importa?</b> Sì → <b>disposizioni</b> (se usi solo k degli n oggetti) o <b>permutazioni</b> (se usi tutti gli n). No → <b>combinazioni</b>. Poi: <b>ripetizioni ammesse?</b> Sì → formule con ripetizione (nᵏ per le disposizioni). Esempi: il podio (ordine conta, senza ripetizioni): D<sub>n,3</sub>; una squadra da 5 (ordine non conta): C<sub>n,5</sub>; il PIN (ordine conta, ripetizioni sì): nᵏ.</p>`
    },
    {
      type: "svg",
      title: "Il triangolo di Tartaglia",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="20" fill="#1e293b" text-anchor="middle" font-weight="bold">
<text x="300" y="40">1</text>
<text x="270" y="80">1</text><text x="330" y="80">1</text>
<text x="240" y="120">1</text><text x="300" y="120" fill="#dc2626">2</text><text x="360" y="120">1</text>
<text x="210" y="160">1</text><text x="270" y="160" fill="#dc2626">3</text><text x="330" y="160" fill="#dc2626">3</text><text x="390" y="160">1</text>
<text x="180" y="200">1</text><text x="240" y="200">4</text><text x="300" y="200" fill="#2563eb">6</text><text x="360" y="200">4</text><text x="420" y="200">1</text>
<text x="150" y="240">1</text><text x="210" y="240">5</text><text x="270" y="240">10</text><text x="330" y="240">10</text><text x="390" y="240">5</text><text x="450" y="240">1</text>
<text x="120" y="280">1</text><text x="180" y="280">6</text><text x="240" y="280">15</text><text x="300" y="280">20</text><text x="360" y="280">15</text><text x="420" y="280">6</text><text x="480" y="280">1</text>
</g>
<text x="500" y="45" font-size="15" fill="#334155">riga n: i numeri</text>
<text x="500" y="65" font-size="15" fill="#334155">(n su k)</text>
<text x="500" y="105" font-size="15" fill="#334155">Ogni numero è</text>
<text x="500" y="125" font-size="15" fill="#334155">la somma dei</text>
<text x="500" y="145" font-size="15" fill="#334155">due sopra:</text>
<text x="500" y="170" font-size="15" fill="#dc2626">3 + 3 = 6</text>
<text x="500" y="200" font-size="15" fill="#334155">e coincidono</text>
<text x="500" y="220" font-size="15" fill="#334155">con i coefficienti</text>
<text x="500" y="240" font-size="15" fill="#334155">di (a + b)ⁿ</text>
</svg>`,
      caption: "Nella riga n (la prima è la riga 0) i numeri sono i coefficienti binomiali (n su 0), (n su 1), ..., (n su n). Ogni numero interno è la somma dei due soprastanti: è la legge di Stifel."
    },
    {
      type: "text",
      title: "Il binomio di Newton",
      html: `<p>Sviluppare (a + b)ⁿ moltiplicando n volte è lungo. Osserva i primi: (a + b)² = a² + 2ab + b²; (a + b)³ = a³ + 3a²b + 3ab² + b³. I coefficienti sono le righe del triangolo di Tartaglia! La formula generale è il <b>binomio di Newton</b>:</p>
<p style="text-align:center"><b>(a + b)ⁿ = Σ<sub>k=0..n</sub> (n su k) · aⁿ⁻ᵏ · bᵏ</b></p>
<p>Il termine di posto k + 1 è (n su k) aⁿ⁻ᵏ bᵏ. <b>Perché:</b> sviluppando il prodotto di n fattori (a + b), ogni termine nasce scegliendo da ciascun fattore a oppure b: per ottenere aⁿ⁻ᵏ bᵏ bisogna scegliere b in k fattori su n, e ciò si può fare in (n su k) modi. Il calcolo combinatorio spiega l'algebra!</p>
<p><b>Esempi.</b></p>
<ul>
<li>(x + 2)⁴ = x⁴ + 4x³ · 2 + 6x² · 4 + 4x · 8 + 16 = <b>x⁴ + 8x³ + 24x² + 32x + 16</b> (coefficienti 1, 4, 6, 4, 1).</li>
<li>(a − b)ⁿ: basta usare −b al posto di b (i segni si alternano).</li>
<li>Il coefficiente di x³ in (1 + x)¹⁰ è (10 su 3) = 120.</li>
<li>Ponendo a = b = 1 si ha 2ⁿ = Σ (n su k): ritroviamo il numero dei sottoinsiemi.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: le squadre e i gironi",
      html: `<p>In un torneo di calcio a 8 squadre in cui ogni squadra incontra ogni altra una volta (girone all'italiana, solo andata) le partite sono le combinazioni di 8 squadre a 2 a 2: C<sub>8,2</sub> = 28. Con andata e ritorno le partite raddoppiano (56 = D<sub>8,2</sub>, perché adesso conta l'ordine: "A in casa contro B" è diverso da "B in casa contro A"). Se invece 4 squadre su 8 si qualificano ai quarti e l'ordine non importa: C<sub>8,4</sub> = 70 possibili gruppi di qualificate.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: le mani di poker",
      html: `<p>Nel poker si ricevono 5 carte da un mazzo di 52 e l'ordine non conta: le mani possibili sono C<sub>52,5</sub> = 2 598 960. Quante sono le <b>coppie di assi</b> esatte, cioè 2 assi più altre 3 carte non assi? Si scelgono i 2 assi tra i 4: C<sub>4,2</sub> = 6; poi 3 carte tra le 48 non assi: C<sub>48,3</sub> = 17 296; in tutto 6 · 17 296 = 103 776 mani (qui tre carte qualsiasi possono formare anche altre combinazioni, ma contiamo solo quelle con esattamente 2 assi). Sono circa il 4% di tutte le mani. Il <b>colore</b> (5 carte dello stesso seme, comprese le scale) vale 4 · C<sub>13,5</sub> = 4 · 1287 = 5148 mani: una su 505 circa.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Un mazzo di carte è unico",
      html: `<p>Un mazzo di 52 carte si può disporre in 52! ≈ 8,07 · 10⁶⁷ ordini diversi. È un numero così grande che, ogni volta che mescoli bene un mazzo, quasi certamente ottieni una disposizione che nessuno ha mai ottenuto prima nella storia dell'umanità. Anche se tutti gli esseri umani avessero mescolato un mazzo al secondo dalla nascita dell'universo, non si sarebbe esplorata che una frazione minuscola di tutte le possibili disposizioni. Per confronto, gli atomi nell'universo osservabile sono circa 10⁸⁰.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Tartaglia, Pascal e non solo",
      html: `<p>Il triangolo in questione porta il nome di <b>Niccolò Fontana detto Tartaglia</b> (XVI secolo) in Italia e di <b>Blaise Pascal</b> in Francia, che ne studiò sistematicamente le proprietà nel <i>Traité du triangle arithmétique</i> (scritto nel 1654, pubblicato nel 1665) e lo usò per fondare, insieme a Fermat, la probabilità. Era però noto molto prima: in Cina a <b>Yang Hui</b> (XIII secolo), in Persia a <b>al-Karaji</b> e a <b>Omar Khayyam</b> (XI-XII secolo). La formula del binomio con esponente intero era dunque antica; <b>Isaac Newton</b> la generalizzò (1665 circa) a esponenti non interi.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il calcolo combinatorio",
      intro: "Contare è un'arte: ecco tre strategie per non confondere le formule.",
      tabs: [
        {
          label: "🌳 L'albero delle scelte",
          html: `<p>Disegna le scelte come un albero: dalla radice partono tante rami quante sono le scelte del primo posto; da ciascuno partono i rami del secondo posto, e così via. Il numero di foglie è il numero di raggruppamenti. Nel podio con 3 atleti A, B, C: 3 rami per l'oro, 2 per l'argento, 1 per il bronzo → 3 · 2 · 1 = 6 foglie: ABC, ACB, BAC, BCA, CAB, CBA. Se l'ordine non conta, queste 6 foglie coincidono in un solo gruppo {A, B, C}: ecco perché si divide per 3! nelle combinazioni.</p>`
        },
        {
          label: "🧱 Le caselle",
          html: `<p>Disegna k <b>caselle</b> e scrivi in ciascuna quante scelte hai: la targa "due lettere, tre cifre, due lettere" diventa 22 · 22 · 10 · 10 · 10 · 22 · 22. Se gli oggetti non si possono ripetere, le scelte diminuiscono (10 · 9 · 8); se l'ordine non conta, dividi per il numero di modi di ordinare i k oggetti (k!). Questo metodo ti salva dai problemi con vincoli: per esempio le password di 4 cifre che iniziano con 7 sono 1 · 10 · 10 · 10 = 1000; quelle con cifre tutte diverse e che non iniziano con 0: 9 · 9 · 8 · 7 = 4536.</p>`
        },
        {
          label: "🎯 Disposizione o combinazione?",
          html: `<p>Ordine conta (disposizione) o no (combinazione)? Classifica ciascuna situazione.</p>`,
          widget: "classify",
          options: { groups: ["Disposizione (l'ordine conta)", "Combinazione (l'ordine non conta)"], items: [["Il podio di una gara", 0], ["La squadra di 5 giocatori da 12", 1], ["Un PIN di 4 cifre", 0], ["Le 6 carte della mano di poker", 1], ["Presidente e vice di un club", 0], ["Il comitato di 3 persone", 1]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del calcolo combinatorio",
      nodes: [
        { id: "mol", label: "Principio moltiplicativo", x: 50, y: 6, color: "#6366f1", html: "m scelte × n scelte = m · n possibilità.", why: "È la base di tutto: ogni formula del calcolo combinatorio si ricava moltiplicando le scelte indipendenti, che corrispondono a un albero con rami che si ramificano." },
        { id: "fatt", label: "Fattoriale", x: 15, y: 35, color: "#16a34a", html: "n! = n(n − 1)...1; 0! = 1.", why: "Conta gli ordinamenti di n oggetti; la convenzione 0! = 1 rende coerenti le formule (c'è un solo modo di ordinare l'insieme vuoto)." },
        { id: "disp", label: "Disposizioni e permutazioni", x: 85, y: 35, color: "#f59e0b", html: "D(n,k) = n!/(n − k)!; P(n) = n!; con ripetizione nᵏ.", why: "Scelte ordinate: ad ogni posto una scelta in meno (senza ripetizioni), o sempre n (con ripetizioni)." },
        { id: "comb", label: "Combinazioni", x: 50, y: 58, color: "#ef4444", html: "C(n,k) = n!/(k!(n − k)!).", why: "Dividono le disposizioni per k!, cioè per i modi di ordinare ciascun sottoinsieme: contano i sottoinsiemi." },
        { id: "bin", label: "Coefficienti binomiali", x: 15, y: 85, color: "#0ea5e9", html: "Simmetria, Stifel, somma 2ⁿ; triangolo di Tartaglia.", why: "Le proprietà derivano dall'interpretazione come sottoinsiemi: scegliere k oggetti equivale a scartarne n − k." },
        { id: "newton", label: "Binomio di Newton", x: 85, y: 85, color: "#a855f7", html: "(a + b)ⁿ = Σ (n su k) aⁿ⁻ᵏ bᵏ.", why: "Nello sviluppo di n fattori (a + b) il termine aⁿ⁻ᵏ bᵏ si ottiene scegliendo b da k fattori: (n su k) modi. È la prova che algebra e combinatoria sono lo stesso fatto." }
      ],
      edges: [
        ["mol", "fatt", "genera"],
        ["mol", "disp", "genera"],
        ["disp", "comb", "÷ k!"],
        ["comb", "bin", "sono"],
        ["bin", "newton", "coefficienti di"],
        ["fatt", "comb", "usa"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: combinazioni e binomio",
      questions: [
        { type: "num", q: "Quanto vale (6 su 2)?", answer: 15, explain: "6 · 5 / 2 = 15." },
        { type: "num", q: "Quante diagonali ha un poligono convesso di 6 lati? (suggerimento: C(6,2) − 6)", answer: 9, explain: "I segmenti tra due vertici sono C(6,2) = 15; si tolgono i 6 lati: 9 diagonali." },
        { type: "mc", q: "Il coefficiente di a²b² in (a + b)⁴ è…", options: ["6", "4", "8"], answer: 0, explain: "(4 su 2) = 6." }
      ]
    }
  ],
  glossary: [
    { t: "Fattoriale", d: "n! = n(n − 1)...2 · 1, con 0! = 1." },
    { t: "Disposizione", d: "Raggruppamento ordinato di k elementi scelti tra n." },
    { t: "Permutazione", d: "Ordinamento di tutti gli n elementi: n!." },
    { t: "Combinazione", d: "Sottoinsieme di k elementi scelti tra n (l'ordine non conta)." },
    { t: "Coefficiente binomiale", d: "(n su k) = n!/(k!(n − k)!)." },
    { t: "Triangolo di Tartaglia", d: "Tabella triangolare dei coefficienti binomiali, in cui ogni numero è somma dei due soprastanti." },
    { t: "Binomio di Newton", d: "Formula per lo sviluppo di (a + b)ⁿ." },
    { t: "Principio moltiplicativo", d: "Scelte successive indipendenti: i modi si moltiplicano." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanto vale 7!/5!?", answer: 42, explain: "7 · 6 = 42." },
      { type: "num", q: "In quanti modi si possono assegnare oro, argento e bronzo tra 8 atleti?", answer: 336, explain: "D₈,₃ = 8 · 7 · 6 = 336." },
      { type: "num", q: "Quanti sono i gruppi di 3 persone che si possono formare da 10?", answer: 120, explain: "C₁₀,₃ = 10 · 9 · 8/6 = 120." },
      { type: "mc", q: "Quanti anagrammi ha la parola ROMA?", options: ["24", "12", "6"], answer: 0, explain: "Le lettere sono tutte diverse: 4! = 24." },
      { type: "tf", q: "(n su k) = (n su n − k).", answer: true, explain: "Scegliere k oggetti da prendere equivale a scegliere gli n − k da lasciare." },
      { type: "num", q: "Quante diverse password di 3 cifre si possono formare (cifre da 0 a 9, con ripetizioni)?", answer: 1000, explain: "10³ = 1000." },
      { type: "mc", q: "Lo sviluppo di (x + 1)³ è…", options: ["x³ + 3x² + 3x + 1", "x³ + 1", "x³ + 3x + 3 + 1"], answer: 0, explain: "I coefficienti sono 1, 3, 3, 1." },
      { type: "num", q: "Qual è la somma dei coefficienti binomiali (5 su k), per k da 0 a 5?", answer: 32, explain: "1 + 5 + 10 + 10 + 5 + 1 = 32 = 2⁵." },
      { type: "text", q: "Come si chiama il triangolo i cui numeri sono i coefficienti binomiali? (nome italiano)", answer: ["tartaglia", "triangolo di tartaglia", "pascal", "triangolo di pascal"], explain: "È il triangolo di Tartaglia (o di Pascal)." },
      { type: "order", q: "Metti in ordine i passi per risolvere un problema di conteggio.", items: ["Capire che cosa si sta contando", "Chiedersi se l'ordine conta", "Chiedersi se le ripetizioni sono ammesse", "Scegliere la formula adatta", "Calcolare e controllare l'ordine di grandezza"], explain: "Si parte dal problema, si classifica (ordine e ripetizioni), poi si sceglie la formula e si controlla il risultato." }
    ]
  }
});
