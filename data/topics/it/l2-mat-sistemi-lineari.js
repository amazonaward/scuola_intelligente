TOPIC('it', {
  id: "l2-mat-sistemi-lineari",
  title: "Sistemi lineari",
  intro: "Un cinema ha venduto 120 biglietti, in parte interi e in parte ridotti, incassando 840 €: quanti ne ha venduti di ciascun tipo? Qui le incognite sono <b>due</b> e una sola equazione non basta: servono <b>due condizioni insieme</b>. Un <b>sistema lineare</b> è proprio questo: più equazioni di primo grado da soddisfare contemporaneamente. Impariamo i quattro metodi classici (<b>sostituzione, confronto, riduzione, Cramer</b>), vediamo cosa significano sul piano e come usarli per risolvere problemi reali.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Che cos'è un sistema lineare",
      html: `<p>Un'equazione lineare in due incognite, come <b>x + y = 5</b>, ha <b>infinite soluzioni</b> (le coppie (0,5), (1,4), (2,3)…). Se però chiediamo che valga <i>anche</i> <b>x − y = 1</b>, solo una coppia le soddisfa entrambe: (3, 2). Mettere insieme più equazioni da verificare contemporaneamente significa scrivere un <b>sistema</b>, con una graffa a sinistra:</p>
<p style="text-align:center"><b>{ x + y = 5 ; x − y = 1 }</b></p>
<p>Una <b>soluzione</b> del sistema è una coppia (x, y) che rende vere <b>tutte</b> le equazioni. Si dice che il sistema è <b>lineare</b> perché tutte le equazioni sono di primo grado, e <b>2 × 2</b> se ha due equazioni e due incognite.</p>
<p>La <b>forma normale</b> (o canonica) è:</p>
<p style="text-align:center"><b>{ a x + b y = c ; a′ x + b′ y = c′ }</b></p>
<p>Prima di risolvere si portano le equazioni in questa forma: incognite a sinistra, termini noti a destra.</p>
<p>Un sistema può essere:</p>
<ul>
<li><b>determinato</b>: ha <b>una sola</b> soluzione;</li>
<li><b>impossibile</b>: non ne ha nessuna;</li>
<li><b>indeterminato</b>: ne ha <b>infinite</b>.</li>
</ul>
<p>Due sistemi con le stesse soluzioni si dicono <b>equivalenti</b>: i metodi che seguono trasformano il sistema in uno equivalente più semplice.</p>`
    },
    {
      type: "svg",
      title: "Che cosa significa geometricamente",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="20" y1="200" x2="580" y2="200" stroke="#475569" stroke-width="2"/>
<line x1="200" y1="10" x2="200" y2="290" stroke="#475569" stroke-width="2"/>
<line x1="200" y1="25" x2="325" y2="275" stroke="#2563eb" stroke-width="4"/>
<line x1="175" y1="275" x2="350" y2="100" stroke="#ea580c" stroke-width="4"/>
<circle cx="275" cy="175" r="8" fill="#16a34a"/>
<text x="290" y="160" font-size="16" fill="#166534" font-weight="bold">(3, 1)</text>
<text x="210" y="30" font-size="16" fill="#1d4ed8" font-weight="bold">2x + y = 7</text>
<text x="360" y="105" font-size="16" fill="#9a3412" font-weight="bold">x − y = 2</text>
<text x="420" y="200" font-size="16" fill="#334155" dy="-8">x</text>
<text x="210" y="22" font-size="16" fill="#334155" dx="-30">y</text>
<text x="420" y="260" font-size="16" fill="#334155">Ogni equazione è una retta;</text>
<text x="420" y="280" font-size="16" fill="#334155">la soluzione è il loro incrocio.</text>
</svg>`,
      caption: "Ogni equazione lineare in x e y è una retta del piano. Il sistema { 2x + y = 7 ; x − y = 2 } è risolto dal punto in cui le due rette si incontrano."
    },
    {
      type: "remember",
      title: "I tre casi e le rette",
      html: `<ul>
<li><b>Determinato</b>: le rette sono <b>incidenti</b> (si incontrano in un solo punto).</li>
<li><b>Impossibile</b>: le rette sono <b>parallele distinte</b> (non si incontrano mai).</li>
<li><b>Indeterminato</b>: le rette sono <b>coincidenti</b> (hanno tutti i punti in comune).</li>
</ul>
<p>Esempi: { x + y = 3 ; 2x + 2y = 8 } è impossibile (la seconda è x + y = 4, parallela alla prima); { x + y = 3 ; 2x + 2y = 6 } è indeterminato (la seconda è la prima raddoppiata).</p>`
    },
    {
      type: "text",
      title: "Metodo di sostituzione",
      html: `<p>L'idea: <b>ricavare</b> un'incognita da un'equazione e <b>sostituirla</b> nell'altra, che resta così con una sola incognita.</p>
<ol>
<li>Scegli l'equazione e l'incognita più comode (quella con coefficiente 1 o −1).</li>
<li>Ricava l'incognita in funzione dell'altra.</li>
<li>Sostituisci nell'<b>altra</b> equazione e risolvi l'equazione di primo grado ottenuta.</li>
<li>Riporta il valore trovato nell'espressione del passo 2 per trovare la seconda incognita.</li>
<li>Verifica nelle due equazioni di partenza.</li>
</ol>
<p><b>Esempio</b>: { x − 2y = 1 ; 3x − y = 8 }.</p>
<ul>
<li>Dalla prima: x = 2y + 1.</li>
<li>Nella seconda: 3(2y + 1) − y = 8 → 6y + 3 − y = 8 → 5y = 5 → y = 1.</li>
<li>x = 2·1 + 1 = 3. Soluzione <b>(3, 1)</b>.</li>
<li>Verifica: 3 − 2 = 1 ✔️; 9 − 1 = 8 ✔️.</li>
</ul>
<p>Se arrivi a un'uguaglianza falsa (per esempio 0 = 5) il sistema è <b>impossibile</b>; se arrivi a una sempre vera (0 = 0) è <b>indeterminato</b>.</p>`
    },
    {
      type: "text",
      title: "Metodo del confronto",
      html: `<p>Se <b>la stessa incognita</b> è già isolata (o facilmente isolabile) in <b>entrambe</b> le equazioni, si <b>uguagliano</b> le due espressioni: ciò che è uguale a una stessa cosa è uguale tra loro.</p>
<p><b>Esempio</b>: { y = 2x − 1 ; y = x + 2 }. Le due espressioni di y devono coincidere: 2x − 1 = x + 2 → x = 3, e poi y = 3 + 2 = 5. Soluzione <b>(3, 5)</b>.</p>
<p>Il confronto è in realtà una sostituzione "senza fatica": è comodo quando il sistema è già scritto in forma esplicita y = mx + q (equazioni di rette).</p>`
    },
    {
      type: "text",
      title: "Metodo di riduzione (o di addizione e sottrazione)",
      html: `<p>L'idea: <b>sommare o sottrarre</b> le due equazioni membro a membro per far <b>sparire</b> un'incognita. Funziona perché sommando uguaglianze si ottiene un'uguaglianza.</p>
<ol>
<li>Moltiplica le equazioni per numeri opportuni in modo che una delle incognite abbia <b>coefficienti opposti</b> (si somma) o <b>uguali</b> (si sottrae).</li>
<li>Somma o sottrai membro a membro: resta un'equazione in una sola incognita.</li>
<li>Risolvila, poi ripeti il procedimento per l'altra incognita (oppure sostituisci).</li>
</ol>
<p><b>Esempio</b>: { 3x + 2y = 12 ; 2x − 3y = −5 }.</p>
<ul>
<li>Per eliminare y: moltiplico la prima per 3 e la seconda per 2 → { 9x + 6y = 36 ; 4x − 6y = −10 }.</li>
<li>Sommo: 13x = 26 → <b>x = 2</b>.</li>
<li>Sostituisco nella prima: 6 + 2y = 12 → y = 3. Soluzione <b>(2, 3)</b>.</li>
<li>Verifica: 6 + 6 = 12 ✔️; 4 − 9 = −5 ✔️.</li>
</ul>
<p>È il metodo più usato quando i coefficienti non sono 1, e quello da cui nascono i metodi per risolvere sistemi con molte equazioni.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: i tre metodi",
      questions: [
        { type: "num", q: "Risolvi { x + y = 9 ; x − y = 3 } e dai il valore di x.", answer: 6, explain: "Sommando: 2x = 12, quindi x = 6 (e y = 3)." },
        { type: "mc", q: "Sommando membro a membro { 2x + 3y = 7 ; 4x − 3y = 5 } si ottiene…", options: ["6x = 12", "6x + 6y = 12", "2x = 2"], answer: 0, explain: "Le y si annullano (3y − 3y = 0): 6x = 12." },
        { type: "tf", q: "Se nella sostituzione si arriva a 0 = 5, il sistema è indeterminato.", answer: false, explain: "0 = 5 è falsa: il sistema è impossibile. Indeterminato se si arriva a 0 = 0." }
      ]
    },
    {
      type: "widget",
      title: "Determinato, impossibile o indeterminato?",
      widget: "classify",
      options: { groups: ["Determinato", "Impossibile", "Indeterminato"], items: [
        ["x + y = 4 ; x − y = 2", 0],
        ["x + y = 3 ; 2x + 2y = 8", 1],
        ["x + y = 3 ; 2x + 2y = 6", 2],
        ["y = 2x ; y = 2x + 5", 1],
        ["y = 3x − 1 ; 2y = 6x − 2", 2],
        ["2x + y = 5 ; x − y = 1", 0]
      ] },
      caption: "Suggerimento: guarda se una equazione è un multiplo dell'altra (stesso rapporto tra i coefficienti)."
    },
    {
      type: "text",
      title: "Metodo di Cramer (con i determinanti)",
      html: `<p>Il metodo di Cramer dà la soluzione con una <b>formula</b>, senza passaggi intermedi. Per il sistema { ax + by = c ; a′x + b′y = c′ } si definisce il <b>determinante</b> della matrice dei coefficienti:</p>
<p style="text-align:center"><b>D = a b′ − a′ b</b></p>
<p>e i determinanti che si ottengono sostituendo la colonna dei termini noti al posto di quella di x o di y:</p>
<p style="text-align:center"><b>Dₓ = c b′ − c′ b &nbsp;&nbsp;&nbsp; D<sub>y</sub> = a c′ − a′ c</b></p>
<ul>
<li>Se <b>D ≠ 0</b>: sistema <b>determinato</b>, con <b>x = Dₓ / D</b> e <b>y = D<sub>y</sub> / D</b>.</li>
<li>Se <b>D = 0</b> e Dₓ ≠ 0 o D<sub>y</sub> ≠ 0: sistema <b>impossibile</b>.</li>
<li>Se <b>D = Dₓ = D<sub>y</sub> = 0</b>: sistema <b>indeterminato</b> (o con equazioni nulle).</li>
</ul>
<p><b>Esempio</b>, lo stesso di prima: { 3x + 2y = 12 ; 2x − 3y = −5 }.</p>
<ul>
<li>D = 3·(−3) − 2·2 = −9 − 4 = −13</li>
<li>Dₓ = 12·(−3) − 2·(−5) = −36 + 10 = −26 → x = −26/−13 = <b>2</b></li>
<li>D<sub>y</sub> = 3·(−5) − 12·2 = −15 − 24 = −39 → y = −39/−13 = <b>3</b></li>
</ul>
<p>Ottieni (2, 3), come con la riduzione. Il determinante D ha un significato geometrico: se D = 0 le rette hanno la stessa pendenza (sono parallele o coincidenti).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: i biglietti del cinema",
      html: `<p>Un cinema ha venduto 120 biglietti, alcuni a 8 € (interi) e altri a 5 € (ridotti), incassando 840 €. Quanti biglietti di ciascun tipo?</p>
<ul>
<li>Incognite: x = biglietti interi, y = ridotti.</li>
<li>Sistema: { x + y = 120 ; 8x + 5y = 840 }.</li>
<li>Sostituzione: y = 120 − x → 8x + 5(120 − x) = 840 → 3x + 600 = 840 → x = 80, y = 40.</li>
<li>Verifica: 80 + 40 = 120 ✔️; 640 + 200 = 840 ✔️.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: velocità e correnti",
      html: `<p>Una barca percorre 24 km a favore di corrente in 2 ore e gli stessi 24 km controcorrente in 3 ore. Quali sono la velocità della barca in acqua ferma e quella della corrente?</p>
<ul>
<li>x = velocità della barca, y = velocità della corrente (km/h).</li>
<li>A favore: x + y = 24/2 = 12. Controcorrente: x − y = 24/3 = 8.</li>
<li>Sommando: 2x = 20 → x = 10 km/h; poi y = 2 km/h.</li>
<li>Verifica: 12 · 2 = 24 ✔️; 8 · 3 = 24 ✔️.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Come risolvere un problema con un sistema",
      html: `<ol>
<li><b>Leggi</b> e individua le due grandezze incognite; chiamale x e y, con l'unità di misura.</li>
<li><b>Traduci</b> ogni condizione del testo in un'equazione.</li>
<li><b>Risolvi</b> con il metodo più comodo.</li>
<li><b>Controlla</b> che la soluzione abbia senso (niente persone negative o frazionarie, ecc.).</li>
<li><b>Verifica</b> con il testo e scrivi la risposta in parole.</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? I Nove capitoli",
      html: `<p>Il testo cinese <b>I nove capitoli dell'arte matematica</b> (<i>Jiuzhang suanshu</i>), compilato circa duemila anni fa, risolve sistemi lineari con più incognite disponendo i coefficienti in una <b>tabella</b> e facendo sparire le incognite una dopo l'altra: è, in sostanza, il metodo di riduzione che in Occidente si chiamerà "eliminazione di Gauss", dal matematico tedesco Carl Friedrich Gauss (1777–1855), che lo usò e lo sistemò molti secoli dopo.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Gabriel Cramer",
      html: `<p>La regola che porta il suo nome fu pubblicata dallo svizzero <b>Gabriel Cramer</b> (1704–1752) nel 1750 nel libro <i>Introduction à l'analyse des lignes courbes algébriques</i>. Oggi i sistemi lineari si risolvono al computer, e problemi con <b>milioni di incognite</b> (previsioni meteo, simulazione di ponti e aerei, grafica 3D, motori di ricerca) si riducono proprio a enormi sistemi lineari.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per vedere un sistema",
      intro: "Il calcolo è un modo. Ecco altre tre strade per capire cosa sta succedendo.",
      tabs: [
        {
          label: "⚖️ La bilancia",
          html: `<p>Immagina due bilance in equilibrio, con pesi incogniti: ogni equazione è una bilancia. Se in una pesa x + y = 12 e nell'altra x − y = 8, sovrapponendole (sommando i piatti) la y si annulla: due volte x pesa 20, quindi x = 10. Sommare equazioni = "versare" una bilancia sull'altra, e la riduzione diventa un gesto concreto.</p>`
        },
        {
          label: "📈 Il grafico",
          html: `<p>Ogni equazione è una retta: scrivi y in funzione di x e disegnala per due punti. La soluzione è l'<b>incrocio</b>. Se le rette sono parallele non si incrociano (impossibile), se coincidono hanno tutti i punti in comune (indeterminato). Il grafico dà una stima visiva e un controllo veloce, anche se le coordinate esatte si trovano con i metodi algebrici.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="20" y1="150" x2="580" y2="150" stroke="#475569" stroke-width="2"/><line x1="300" y1="10" x2="300" y2="290" stroke="#475569" stroke-width="2"/><line x1="60" y1="260" x2="320" y2="40" stroke="#2563eb" stroke-width="4"/><line x1="60" y1="60" x2="320" y2="260" stroke="#ea580c" stroke-width="4"/><circle cx="191" cy="150" r="8" fill="#16a34a"/><text x="330" y="55" font-size="16" fill="#1d4ed8" font-weight="bold">Incidenti: una soluzione</text><text x="330" y="250" font-size="16" fill="#9a3412" font-weight="bold">Parallele: nessuna</text></svg>`
        },
        {
          label: "🔢 Tentativi guidati",
          html: `<p>Per piccoli numeri, anche una <b>tabella di tentativi</b> funziona: nel problema del cinema, se i biglietti interi sono 60, i ridotti sono 60 e l'incasso è 480 + 300 = 780 (poco); con 80 interi e 40 ridotti si arriva a 840. Ogni tentativo sposta l'incasso di 3 € per ogni biglietto che passa da ridotto a intero. Gli egizi e i babilonesi risolvevano così le prime questioni di questo tipo, ma i metodi algebrici sono più veloci e più generali.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 120, step: 10, marks: [60, 80] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei sistemi lineari",
      nodes: [
        { id: "sis", label: "Sistema lineare", x: 50, y: 6, color: "#6366f1", html: "Più equazioni di primo grado da soddisfare insieme.", why: "Serve quando un problema ha più incognite e più condizioni: una sola equazione non basta a determinarle." },
        { id: "sost", label: "Sostituzione", x: 15, y: 30, color: "#16a34a", html: "Ricava un'incognita e sostituiscila nell'altra equazione.", why: "Riduce un problema a due incognite a uno con una sola, già risolto con le equazioni di primo grado." },
        { id: "conf", label: "Confronto", x: 50, y: 30, color: "#f59e0b", html: "Uguaglia le due espressioni della stessa incognita.", why: "Se due cose sono uguali a una terza, sono uguali tra loro: proprietà transitiva dell'uguaglianza." },
        { id: "rid", label: "Riduzione", x: 85, y: 30, color: "#a855f7", html: "Somma o sottrai le equazioni per eliminare un'incognita.", why: "Sommando due uguaglianze membro a membro si ottiene ancora un'uguaglianza (1° principio di equivalenza)." },
        { id: "cram", label: "Cramer", x: 50, y: 56, color: "#0ea5e9", html: "x = Dₓ/D, y = D_y/D se D ≠ 0.", why: "Si ottiene applicando la riduzione ai coefficienti generici a, b, c, a′, b′, c′: è la 'soluzione in formula' del sistema." },
        { id: "casi", label: "Tre casi", x: 15, y: 80, color: "#ef4444", html: "Determinato, impossibile, indeterminato.", why: "Dipendono da D: se D ≠ 0 una soluzione; se D = 0 rette parallele (nessuna) o coincidenti (infinite)." },
        { id: "geo", label: "Rette sul piano", x: 85, y: 80, color: "#14b8a6", html: "Ogni equazione è una retta; la soluzione è l'incrocio.", why: "Unisce algebra e geometria, idea di Cartesio e Fermat nel Seicento: equazioni come figure." },
        { id: "prob", label: "Problemi", x: 50, y: 92, color: "#22c55e", html: "Si traducono le condizioni in equazioni e si interpreta il risultato.", why: "La modellizzazione è la competenza chiave: dal testo al sistema, e ritorno al contesto con un controllo di senso." }
      ],
      edges: [
        ["sis", "sost", "si risolve con"],
        ["sis", "conf", "si risolve con"],
        ["sis", "rid", "si risolve con"],
        ["rid", "cram", "generalizzato in"],
        ["cram", "casi", "decide"],
        ["casi", "geo", "visto come"],
        ["prob", "sis", "si traducono in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: Cramer e problemi",
      questions: [
        { type: "num", q: "Calcola il determinante D di { 2x + 3y = 5 ; x + 4y = 6 }.", answer: 5, explain: "D = 2·4 − 1·3 = 8 − 3 = 5." },
        { type: "mc", q: "Se D = 0 e Dₓ ≠ 0, il sistema è…", options: ["determinato", "impossibile", "indeterminato"], answer: 1, explain: "D = 0 significa rette con la stessa pendenza; se Dₓ ≠ 0 non coincidono: sono parallele distinte, quindi impossibile." },
        { type: "num", q: "Due numeri hanno somma 25 e differenza 7. Qual è il maggiore?", answer: 16, explain: "{ x + y = 25 ; x − y = 7 } → 2x = 32 → x = 16 (l'altro è 9)." }
      ]
    }
  ],
  glossary: [
    { t: "Sistema lineare", d: "Insieme di equazioni di primo grado in cui si cercano valori che le verifichino tutte insieme." },
    { t: "Soluzione del sistema", d: "Coppia (o n-upla) di valori che rende vere tutte le equazioni." },
    { t: "Sistema determinato", d: "Ha una sola soluzione: le rette si incontrano in un punto." },
    { t: "Sistema impossibile", d: "Non ha soluzioni: le rette sono parallele distinte." },
    { t: "Sistema indeterminato", d: "Ha infinite soluzioni: le rette coincidono." },
    { t: "Forma normale", d: "ax + by = c, con le incognite a sinistra e il termine noto a destra." },
    { t: "Sostituzione", d: "Metodo: si ricava un'incognita e la si sostituisce nell'altra equazione." },
    { t: "Riduzione", d: "Metodo: si sommano o sottraggono le equazioni per eliminare un'incognita." },
    { t: "Determinante", d: "Numero D = ab′ − a′b che decide se il sistema 2×2 ha una sola soluzione." },
    { t: "Sistemi equivalenti", d: "Sistemi con le stesse soluzioni." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Risolvi { x + y = 10 ; x − y = 4 }.", options: ["(7, 3)", "(6, 4)", "(5, 5)"], answer: 0, explain: "Sommando: 2x = 14 → x = 7, y = 3." },
      { type: "num", q: "Risolvi { y = 2x − 3 ; y = x + 1 } e dai il valore di x.", answer: 4, explain: "Confronto: 2x − 3 = x + 1 → x = 4 (e y = 5)." },
      { type: "num", q: "Risolvi { 2x + y = 11 ; x − y = 1 } e dai il valore di y.", answer: 3, explain: "Sommando: 3x = 12 → x = 4; y = 4 − 1 = 3." },
      { type: "mc", q: "Il sistema { x + 2y = 4 ; 3x + 6y = 5 } è…", options: ["determinato", "impossibile", "indeterminato"], answer: 1, explain: "La seconda equazione dà x + 2y = 5/3, parallela a x + 2y = 4 ma diversa: nessuna soluzione." },
      { type: "mc", q: "Il sistema { 2x − y = 3 ; 4x − 2y = 6 } è…", options: ["determinato", "impossibile", "indeterminato"], answer: 2, explain: "La seconda equazione è il doppio della prima: le rette coincidono e le soluzioni sono infinite." },
      { type: "num", q: "Con la regola di Cramer, calcola D per { 3x + 2y = 12 ; 2x − 3y = −5 }.", answer: -13, explain: "D = 3·(−3) − 2·2 = −13." },
      { type: "num", q: "Un parcheggio ha 50 veicoli, tra auto (4 ruote) e moto (2 ruote), per 160 ruote totali. Quante sono le auto?", answer: 30, explain: "{ a + m = 50 ; 4a + 2m = 160 } → 2a = 60 → a = 30 (e m = 20)." },
      { type: "tf", q: "Un sistema lineare 2×2 può avere esattamente due soluzioni.", answer: false, explain: "Due rette hanno 0, 1 o infiniti punti in comune: mai esattamente due." },
      { type: "order", q: "Metti in ordine i passi del metodo di sostituzione.", items: ["Ricavare un'incognita da un'equazione", "Sostituirla nell'altra equazione", "Risolvere l'equazione in una sola incognita", "Calcolare l'altra incognita", "Verificare nelle equazioni di partenza"], explain: "Si riduce il sistema a una sola incognita, poi si risale alla seconda e si verifica." },
      { type: "text", q: "Come si chiamava lo svizzero che pubblicò nel 1750 la regola di risoluzione con i determinanti?", answer: ["cramer", "gabriel cramer"], explain: "Gabriel Cramer (1704–1752)." }
    ]
  }
});
