TOPIC('it', {
  id: "l1-mat-equazioni-primo-grado",
  title: "Equazioni di primo grado",
  intro: "Quanti minuti di telefono rendono conveniente un abbonamento rispetto a un altro? Quando si incontrano due treni che partono da città diverse? Sono domande con un'<b>incognita</b>, e la risposta passa da un'<b>equazione</b>. Alle medie hai imparato le equazioni numeriche; ora le consolidiamo con i <b>principi di equivalenza</b> usati con rigore, aggiungiamo le <b>equazioni fratte</b> (con le condizioni di esistenza) e impariamo a trasformare i problemi reali in equazioni.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Equazioni e principi di equivalenza",
      html: `<p>Un'<b>equazione</b> è un'uguaglianza tra due espressioni che contiene almeno un'<b>incognita</b> ed è vera solo per certi valori di essa (le <b>soluzioni</b> o radici). È di <b>primo grado</b> se, dopo averla ridotta, l'incognita compare con esponente 1.</p>
<p>Due equazioni sono <b>equivalenti</b> se hanno le stesse soluzioni. Risolvere significa passare, con trasformazioni sicure, a equazioni equivalenti sempre più semplici:</p>
<ul>
<li><b>1° principio</b>: sommando o sottraendo a entrambi i membri la <b>stessa espressione</b> si ottiene un'equazione equivalente. (Da qui la regola del trasporto: un termine passa all'altro membro cambiando segno.)</li>
<li><b>2° principio</b>: moltiplicando o dividendo entrambi i membri per lo stesso numero <b>diverso da zero</b> si ottiene un'equazione equivalente.</li>
</ul>
<p>⚠️ Attenzione al 2° principio con le <b>espressioni contenenti x</b>: se dividi per x, perdi la possibilità che x = 0 sia soluzione; se moltiplichi per (x − 2) puoi introdurre la "soluzione" x = 2 che non c'era. Con le espressioni in x non si può moltiplicare o dividere alla leggera: per questo le equazioni fratte richiedono le CE.</p>
<p>Ridotta a <b>forma normale ax = b</b>, l'equazione è: <b>determinata</b> se a ≠ 0 (x = b/a), <b>impossibile</b> se a = 0 e b ≠ 0, <b>indeterminata</b> se a = 0 e b = 0.</p>`
    },
    {
      type: "remember",
      title: "Il metodo per le equazioni intere",
      html: `<ol>
<li>Elimina le <b>parentesi</b> (distributiva).</li>
<li>Se ci sono <b>denominatori numerici</b>, moltiplica tutto per il loro m.c.m.</li>
<li><b>Trasporta</b>: termini con x a sinistra, numeri a destra.</li>
<li><b>Riduci</b>: ottieni ax = b.</li>
<li><b>Dividi</b> per a, se a ≠ 0.</li>
<li><b>Verifica</b> sostituendo nell'equazione di partenza.</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio guidato: equazione con frazioni numeriche",
      html: `<p>Risolvi <b>(2x − 1)/3 − (x + 2)/2 = 1</b>.</p>
<ol>
<li>m.c.m.(3, 2) = 6: moltiplico tutto per 6 → 2(2x − 1) − 3(x + 2) = 6</li>
<li>Parentesi (attenzione al segno meno!): 4x − 2 − 3x − 6 = 6</li>
<li>Riduco: x − 8 = 6 → <b>x = 14</b></li>
<li>Verifica: (28 − 1)/3 − (14 + 2)/2 = 9 − 8 = 1 ✔️</li>
</ol>`
    },
    {
      type: "svg",
      title: "La soluzione è un incrocio",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="260" x2="560" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="260" x2="40" y2="30" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="187" x2="540" y2="113" stroke="#2563eb" stroke-width="4"/>
<line x1="40" y1="260" x2="540" y2="40" stroke="#ea580c" stroke-width="4"/>
<line x1="290" y1="150" x2="290" y2="260" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/>
<circle cx="290" cy="150" r="8" fill="#16a34a"/>
<text x="290" y="282" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">100 minuti</text>
<text x="300" y="140" font-size="16" fill="#166534" font-weight="bold">uguale costo: 15 €</text>
<text x="400" y="85" font-size="16" fill="#9a3412" font-weight="bold">Piano B: 0,15 · m</text>
<text x="330" y="215" font-size="16" fill="#1d4ed8" font-weight="bold">Piano A: 10 + 0,05 · m</text>
<text x="50" y="24" font-size="16" fill="#334155">Costo (€)</text>
<text x="545" y="282" font-size="16" fill="#334155" text-anchor="end">minuti al mese</text>
</svg>`,
      caption: "L'equazione 10 + 0,05m = 0,15m si risolve cercando il punto in cui le due rette si incontrano."
    },
    {
      type: "example",
      title: "Esempio pratico: quale abbonamento conviene?",
      html: `<p>Il piano <b>A</b> costa 10 € al mese più 0,05 € al minuto; il piano <b>B</b> non ha canone ma costa 0,15 € al minuto. Da quanti minuti conviene A?</p>
<ul>
<li>Incognita: m = minuti al mese.</li>
<li>Costi uguali: 10 + 0,05m = 0,15m → 10 = 0,10m → <b>m = 100</b>.</li>
<li>Interpretazione: sotto i 100 minuti conviene B, sopra conviene A. La soluzione dell'equazione è il punto di "pareggio" (<i>break-even</i>), concetto usato in economia da ogni azienda.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: l'incontro dei treni",
      html: `<p>Due stazioni distano 360 km. Alle 9:00 un treno parte dalla prima a 80 km/h e un altro dalla seconda verso la prima a 100 km/h. Quando si incontrano?</p>
<ul>
<li>Incognita: t = ore trascorse. Spazi percorsi: 80t e 100t, e insieme coprono 360 km.</li>
<li>Equazione: 80t + 100t = 360 → 180t = 360 → <b>t = 2 ore</b>: si incontrano alle 11:00, a 160 km dalla prima stazione.</li>
<li>Verifica: 160 + 200 = 360 ✔️</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: equazioni intere",
      questions: [
        { type: "num", q: "Risolvi: 3x − 7 = 11", answer: 6, explain: "3x = 18, quindi x = 6." },
        { type: "num", q: "Risolvi: x/4 + 1 = 4", answer: 12, explain: "x/4 = 3, quindi x = 12." },
        { type: "tf", q: "Per risolvere un'equazione si può sempre dividere entrambi i membri per x.", answer: false, explain: "Se x = 0 la divisione non è lecita e si può perdere la soluzione x = 0: ad esempio x² = 3x." }
      ]
    },
    {
      type: "text",
      title: "Equazioni fratte: le condizioni di esistenza",
      html: `<p>Un'equazione è <b>fratta</b> quando l'incognita compare al denominatore. Il percorso cambia perché bisogna escludere i valori che annullano un denominatore:</p>
<ol>
<li><b>Scomponi</b> i denominatori.</li>
<li>Scrivi le <b>CE</b>: denominatori ≠ 0.</li>
<li>Calcola il m.c.m. e <b>moltiplica entrambi i membri</b> per esso (è lecito perché, con le CE, il m.c.m. non è zero): i denominatori spariscono.</li>
<li>Risolvi l'equazione intera ottenuta.</li>
<li><b>Confronta con le CE</b>: la soluzione è <b>accettabile</b> solo se non viola le CE; altrimenti va scartata.</li>
</ol>
<p><b>Esempio 1</b>: 1/(x − 1) + 1/(x + 1) = 4/(x² − 1). CE: x ≠ ±1. Moltiplico per (x − 1)(x + 1): (x + 1) + (x − 1) = 4 → 2x = 4 → <b>x = 2</b>, accettabile.</p>
<p><b>Esempio 2</b>: x/(x − 3) = 3/(x − 3). CE: x ≠ 3. Moltiplico per (x − 3): x = 3. Ma x = 3 viola le CE! La soluzione non è accettabile: l'equazione è <b>impossibile</b>.</p>
<p><b>Esempio 3</b>: x/(x − 2) = 2/(x − 2) + 1. CE: x ≠ 2. Moltiplico per (x − 2): x = 2 + x − 2 → x = x: identità. Sono soluzioni <b>tutti i numeri tranne 2</b>.</p>`
    },
    {
      type: "widget",
      title: "Quante soluzioni ha?",
      widget: "classify",
      options: { groups: ["Una soluzione", "Impossibile", "Indeterminata"], items: [
        ["3x − 5 = 2x + 1", 0],
        ["2(x + 1) = 2x + 3", 1],
        ["4x − 4 = 4(x − 1)", 2],
        ["x/(x − 3) = 3/(x − 3)", 1],
        ["x/2 + x/3 = 5", 0],
        ["x/(x − 2) = 2/(x − 2) + 1", 2],
        ["5 − x = x − 5", 0]
      ] },
      caption: "Riduci a ax = b e, nelle fratte, ricorda di controllare le CE."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La parola \"algebra\"",
      html: `<p>La parola <b>algebra</b> viene dall'arabo <i>al-jabr</i>, "ricomposizione", ed è nel titolo del trattato che il matematico persiano <b>Muhammad ibn Mūsā al-Khwārizmī</b> scrisse a Baghdad intorno all'820 d.C. Il suo nome latinizzato, <i>Algoritmi</i>, ha dato la parola <b>algoritmo</b>. Al-jabr indicava il trasferimento di un termine sottratto all'altro membro; <i>al-muqābala</i> ("bilanciamento") la riduzione dei termini simili: sono i nostri due principi di equivalenza, ma senza simboli, tutto a parole!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Chi inventò le lettere?",
      html: `<p>Per secoli le equazioni furono scritte a parole. Il francese <b>François Viète</b> (1540–1603) fu il primo a usare sistematicamente lettere per le quantità, anche per i dati noti. <b>René Descartes</b> nel Seicento fissò l'uso, che conosciamo oggi, di x, y, z per le incognite e a, b, c per i valori noti, mentre il segno = è del gallese <b>Robert Recorde</b> (1557).</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per risolvere un'equazione",
      intro: "Il metodo meccanico funziona, ma capire perché funziona è un'altra cosa. Ecco metodi storici e visivi.",
      tabs: [
        {
          label: "🕌 Al-jabr e al-muqābala",
          html: `<p>Al-Khwārizmī risolveva ragionando su "cose" (<i>shay</i>, la nostra x) e numeri. Esempio, nei nostri simboli: <b>5x − 3 = 2x + 9</b>.</p>
<ul>
<li><b>al-jabr</b> ("ricomporre"): il −3 rende il membro "incompleto"; aggiungo 3 da entrambe le parti: 5x = 2x + 12.</li>
<li><b>al-muqābala</b> ("confrontare"): tolgo 2x da entrambe le parti: 3x = 12.</li>
<li>Divido: <b>x = 4</b>.</li>
</ul>
<p>Sono esattamente il trasporto dei termini e la riduzione che fai tu, ma raccontati come "ristabilire" e "pareggiare" una situazione di equilibrio.</p>`
        },
        {
          label: "🏺 Falsa posizione (Egitto)",
          html: `<p>Gli scribi egizi risolvevano il problema "una quantità e il suo settimo fanno 19" (x + x/7 = 19) con il metodo della <b>falsa posizione</b>: scegli un valore comodo (7), calcola il risultato (7 + 1 = 8) e correggilo in proporzione.</p>
<ul>
<li>Provo x = 7: 7 + 1 = 8, ma devo ottenere 19.</li>
<li>Fattore di correzione: 19/8. Quindi x = 7 · 19/8 = <b>133/8</b>.</li>
<li>Verifica: 133/8 + 19/8 = 152/8 = 19 ✔️</li>
</ul>
<p>Funziona perché in un'equazione ax = b il risultato è <b>proporzionale</b> a x: raddoppiando x raddoppia il risultato. È il metodo "del tentativo e della correzione", ancora usato oggi (con altro nome) negli algoritmi numerici.</p>`
        },
        {
          label: "📈 Con il grafico",
          html: `<p>Ogni membro di un'equazione di primo grado è una <b>retta</b> se lo guardi come funzione di x. Risolvere l'equazione significa trovare per quale x le due rette hanno lo <b>stesso valore</b>, cioè dove si incrociano (come nel grafico dei piani telefonici). Se le rette sono parallele non si incontrano mai: equazione <b>impossibile</b>; se sono la stessa retta si incontrano ovunque: equazione <b>indeterminata</b>.</p>`
        },
        {
          label: "🔁 Operazioni inverse",
          html: `<p>Se l'incognita compare una sola volta, puoi "srotolare" la sequenza di operazioni al contrario. 3x − 7 = 11 significa: parto da x, moltiplico per 3, tolgo 7, ottengo 11. Percorro la strada a ritroso con le operazioni inverse: 11 + 7 = 18, poi 18 : 3 = 6. Quindi <b>x = 6</b>.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [6, 11, 18] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle equazioni di primo grado",
      nodes: [
        { id: "eq", label: "Equazione", x: 50, y: 6, color: "#6366f1", html: "Uguaglianza vera solo per alcuni valori dell'incognita.", why: "Esprime in forma matematica un problema: 'trova il valore che soddisfa questa condizione'. Se ne trovano esempi già nel papiro di Rhind e nelle tavolette babilonesi." },
        { id: "p1", label: "1° principio", x: 20, y: 28, color: "#16a34a", html: "Si somma o si sottrae la stessa espressione a entrambi i membri.", why: "Se due quantità sono uguali, aggiungendo la stessa quantità restano uguali: una delle 'nozioni comuni' di Euclide. È l'al-jabr di al-Khwārizmī." },
        { id: "p2", label: "2° principio", x: 80, y: 28, color: "#f59e0b", html: "Si moltiplica o divide per lo stesso numero ≠ 0.", why: "Moltiplicare per 0 cancella ogni informazione; con espressioni in x, moltiplicare può introdurre soluzioni estranee, dividere può perderne." },
        { id: "forma", label: "Forma normale ax = b", x: 50, y: 50, color: "#a855f7", html: "Il risultato delle trasformazioni.", why: "Da qui, con il caso a ≠ 0 / a = 0, si classifica ogni equazione di primo grado." },
        { id: "casi", label: "Tre casi", x: 20, y: 72, color: "#ef4444", html: "Determinata, impossibile, indeterminata.", why: "Geometricamente: rette incidenti, parallele distinte, coincidenti." },
        { id: "fratte", label: "Equazioni fratte", x: 80, y: 62, color: "#0ea5e9", html: "L'incognita compare al denominatore: servono le CE.", why: "Dividere per zero è impossibile, quindi i valori che annullano un denominatore vanno esclusi prima di risolvere." },
        { id: "acc", label: "Accettabilità", x: 80, y: 88, color: "#14b8a6", html: "Una soluzione che viola le CE va scartata.", why: "Moltiplicando per il m.c.m. si ottiene un'equazione che può avere soluzioni 'estranee' all'equazione originale." },
        { id: "probl", label: "Problemi", x: 40, y: 92, color: "#22c55e", html: "Scegliere l'incognita, tradurre, risolvere, interpretare.", why: "Il passaggio fondamentale è la modellizzazione: dal linguaggio naturale al linguaggio algebrico, con Viète e Descartes." }
      ],
      edges: [
        ["eq", "p1", "si trasforma con"],
        ["eq", "p2", "si trasforma con"],
        ["p1", "forma", "porta a"],
        ["p2", "forma", "porta a"],
        ["forma", "casi", "decide"],
        ["eq", "fratte", "se x al denominatore"],
        ["fratte", "acc", "controllo finale"],
        ["probl", "eq", "si traducono in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: fratte e problemi",
      questions: [
        { type: "mc", q: "L'equazione x/(x − 3) = 3/(x − 3) ha come soluzioni…", options: ["x = 3", "nessuna soluzione", "tutti i numeri"], answer: 1, explain: "Si ottiene x = 3, ma x = 3 annulla il denominatore: soluzione non accettabile, quindi l'equazione è impossibile." },
        { type: "num", q: "Risolvi: 2/(x + 1) = 1", answer: 1, explain: "Con x ≠ −1: 2 = x + 1, quindi x = 1." },
        { type: "num", q: "Il triplo di un numero diminuito di 4 è 26. Qual è il numero?", answer: 10, explain: "3x − 4 = 26 → 3x = 30 → x = 10." }
      ]
    }
  ],
  glossary: [
    { t: "Equazione", d: "Uguaglianza tra espressioni verificata solo per alcuni valori dell'incognita." },
    { t: "Soluzione (radice)", d: "Valore dell'incognita che rende vera l'equazione." },
    { t: "Equazioni equivalenti", d: "Equazioni con le stesse soluzioni." },
    { t: "Principi di equivalenza", d: "Regole (somma/sottrazione e moltiplicazione/divisione per un numero ≠ 0) che trasformano un'equazione in una equivalente." },
    { t: "Forma normale", d: "La forma ax = b a cui si riduce un'equazione di primo grado." },
    { t: "Equazione fratta", d: "Equazione con l'incognita al denominatore." },
    { t: "Condizioni di esistenza", d: "Valori dell'incognita da escludere perché annullano un denominatore." },
    { t: "Soluzione accettabile", d: "Soluzione che rispetta le condizioni di esistenza." },
    { t: "Break-even", d: "Punto di pareggio in cui due costi, o costi e ricavi, sono uguali." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Risolvi: 5(x − 2) − 3 = 2x + 8", answer: 7, explain: "5x − 13 = 2x + 8 → 3x = 21 → x = 7." },
      { type: "num", q: "Risolvi: (2x − 1)/3 − (x + 2)/2 = 1", answer: 14, explain: "Moltiplicando per 6: 4x − 2 − 3x − 6 = 6 → x = 14." },
      { type: "mc", q: "L'equazione 3(x − 1) + 2 = 3x − 1 è…", options: ["determinata", "impossibile", "indeterminata"], answer: 2, explain: "3x − 1 = 3x − 1: si riduce a 0x = 0, quindi infinite soluzioni." },
      { type: "mc", q: "L'equazione x/(x − 4) = 4/(x − 4) ha…", options: ["la soluzione x = 4", "nessuna soluzione accettabile", "infinite soluzioni"], answer: 1, explain: "Con CE x ≠ 4, moltiplicando per (x − 4) si ottiene x = 4, che viola le CE: l'equazione è impossibile." },
      { type: "num", q: "Risolvi: 1/(x − 1) + 1/(x + 1) = 4/(x² − 1)", answer: 2, explain: "CE x ≠ ±1; 2x = 4 → x = 2, accettabile." },
      { type: "tf", q: "Moltiplicare entrambi i membri per un'espressione contenente x è sempre una trasformazione equivalente.", answer: false, explain: "Se l'espressione può annullarsi, si possono introdurre soluzioni estranee: per questo si controllano le CE." },
      { type: "num", q: "Due treni partono nello stesso istante da due stazioni distanti 450 km e si muovono uno verso l'altro a 70 km/h e 80 km/h. Dopo quante ore si incontrano?", answer: 3, unit: "h", explain: "(70 + 80)t = 450 → t = 3." },
      { type: "order", q: "Metti in ordine i passi per un'equazione fratta.", items: ["Scomporre i denominatori", "Scrivere le CE", "Moltiplicare per il m.c.m.", "Risolvere l'equazione intera", "Controllare la soluzione con le CE"], explain: "Le CE vanno scritte prima, il controllo dell'accettabilità chiude il procedimento." },
      { type: "text", q: "Come si chiamava il matematico persiano da cui derivano le parole \"algebra\" e \"algoritmo\"?", answer: ["al-khwarizmi", "al khwarizmi", "khwarizmi", "alkhwarizmi", "al-khwarizmi", "al khuwarizmi", "al-khuwarizmi"], explain: "Al-Khwārizmī (IX secolo): al-jabr nel titolo della sua opera, il suo nome latinizzato dà 'algoritmo'." },
      { type: "num", q: "Piano A: 12 € fissi + 0,04 €/min. Piano B: 0,10 €/min. Per quanti minuti i due piani costano uguale?", answer: 200, unit: "min", explain: "12 + 0,04m = 0,10m → 12 = 0,06m → m = 200." }
    ]
  }
});
