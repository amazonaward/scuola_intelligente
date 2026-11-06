TOPIC('it', {
  id: "m3-mat-equazioni",
  title: "Le equazioni di primo grado",
  intro: "\"Penso un numero, lo moltiplico per 3, aggiungo 5 e ottengo 26: che numero ho pensato?\" Per rispondere serve un'<b>equazione</b>. Impariamo a risolvere le equazioni di primo grado con i due <b>principi di equivalenza</b>, come se fossero una bilancia in equilibrio, e a usarle per risolvere problemi.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Identità ed equazioni",
      html: `<p>Un'<b>uguaglianza</b> tra due espressioni letterali può essere:</p>
<ul>
<li>un'<b>identità</b>, se è vera <b>per qualsiasi valore</b> delle lettere: 2(x + 3) = 2x + 6 è sempre vera;</li>
<li>un'<b>equazione</b>, se è vera <b>solo per alcuni valori</b> (o per nessuno): x + 3 = 10 è vera solo se x = 7.</li>
</ul>
<p>In un'equazione:</p>
<ul>
<li>la lettera è l'<b>incognita</b> (di solito x);</li>
<li>ciò che sta a sinistra dell'uguale è il <b>primo membro</b>, ciò che sta a destra il <b>secondo membro</b>;</li>
<li>il valore che rende vera l'uguaglianza è la <b>soluzione</b> (o radice);</li>
<li>un'equazione è di <b>primo grado</b> se l'incognita compare con esponente massimo 1 (niente x², x³…).</li>
</ul>
<p>Due equazioni sono <b>equivalenti</b> se hanno le stesse soluzioni: x + 3 = 10 e x = 7 sono equivalenti. Risolvere un'equazione significa trasformarla in equazioni equivalenti sempre più semplici, fino ad arrivare a <b>x = numero</b>.</p>`
    },
    {
      type: "svg",
      title: "L'equazione è una bilancia",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f0f9ff"/>
<polygon points="320,260 290,290 350,290" fill="#475569"/>
<rect x="315" y="110" width="10" height="150" fill="#475569"/>
<rect x="90" y="105" width="460" height="10" rx="5" fill="#334155"/>
<line x1="150" y1="115" x2="150" y2="170" stroke="#334155" stroke-width="3"/>
<line x1="490" y1="115" x2="490" y2="170" stroke="#334155" stroke-width="3"/>
<path d="M70 170 L230 170 L210 195 L90 195 Z" fill="#94a3b8"/>
<path d="M410 170 L570 170 L550 195 L430 195 Z" fill="#94a3b8"/>
<rect x="85" y="120" width="44" height="50" rx="6" fill="#a855f7"/><text x="107" y="153" font-size="22" text-anchor="middle" fill="#fff" font-weight="bold">x</text>
<rect x="133" y="120" width="44" height="50" rx="6" fill="#a855f7"/><text x="155" y="153" font-size="22" text-anchor="middle" fill="#fff" font-weight="bold">x</text>
<circle cx="195" cy="155" r="14" fill="#f59e0b"/><text x="195" y="161" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<circle cx="215" cy="140" r="14" fill="#f59e0b"/><text x="215" y="146" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<circle cx="195" cy="127" r="14" fill="#f59e0b"/><text x="195" y="133" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<g fill="#f59e0b"><circle cx="430" cy="155" r="14"/><circle cx="460" cy="155" r="14"/><circle cx="490" cy="155" r="14"/><circle cx="520" cy="155" r="14"/><circle cx="550" cy="155" r="14"/><circle cx="445" cy="128" r="14"/><circle cx="475" cy="128" r="14"/><circle cx="505" cy="128" r="14"/><circle cx="535" cy="128" r="14"/><circle cx="490" cy="101" r="14"/><circle cx="460" cy="101" r="14"/></g>
<text x="150" y="235" font-size="26" text-anchor="middle" fill="#1f2937" font-weight="bold">2x + 3</text>
<text x="320" y="60" font-size="34" text-anchor="middle" fill="#1f2937" font-weight="bold">=</text>
<text x="490" y="235" font-size="26" text-anchor="middle" fill="#1f2937" font-weight="bold">11</text>
<text x="320" y="30" font-size="17" text-anchor="middle" fill="#0369a1">Togli 3 da entrambi i piatti, poi dividi a metà: x = 4</text>
</svg>`,
      caption: "Qualunque cosa fai su un piatto, devi farla anche sull'altro: così la bilancia resta in equilibrio."
    },
    {
      type: "text",
      title: "Il primo principio di equivalenza",
      html: `<p><b>Aggiungendo o sottraendo</b> a entrambi i membri lo <b>stesso numero</b> (o la stessa espressione), si ottiene un'equazione equivalente.</p>
<p>Esempio: x + 5 = 12 → sottraggo 5 da entrambi i membri: x + 5 − 5 = 12 − 5 → <b>x = 7</b>.</p>
<p>Conseguenze pratiche:</p>
<ul>
<li><b>Regola del trasporto</b>: un termine si può <b>spostare</b> da un membro all'altro <b>cambiandogli il segno</b>. 3x − 4 = 2x + 6 → 3x − 2x = 6 + 4 → x = 10.</li>
<li><b>Regola di cancellazione</b>: due termini <b>uguali</b> nei due membri si possono cancellare. x + 7 = 2 + 7 → x = 2.</li>
</ul>`
    },
    {
      type: "text",
      title: "Il secondo principio di equivalenza",
      html: `<p><b>Moltiplicando o dividendo</b> entrambi i membri per lo <b>stesso numero diverso da zero</b>, si ottiene un'equazione equivalente.</p>
<p>Esempio: 4x = 28 → divido entrambi i membri per 4: <b>x = 7</b>.</p>
<p>Conseguenze pratiche:</p>
<ul>
<li><b>Cambiare tutti i segni</b> (moltiplicare per −1): −3x = −12 → 3x = 12 → x = 4.</li>
<li><b>Eliminare i denominatori</b>: si moltiplica tutto per il m.c.m. dei denominatori. x/2 + x/3 = 5 → (×6) → 3x + 2x = 30 → 5x = 30 → x = 6.</li>
<li><b>Semplificare</b>: se tutti i termini hanno un divisore comune, si divide: 6x + 9 = 15 → (:3) → 2x + 3 = 5.</li>
</ul>
<p>⚠️ Perché "diverso da zero"? Moltiplicando per 0 qualsiasi equazione diventa 0 = 0, e si perdono tutte le informazioni!</p>`
    },
    {
      type: "remember",
      title: "Il metodo in 6 passi",
      html: `<ol>
<li>Togli le <b>parentesi</b> (proprietà distributiva).</li>
<li>Elimina i <b>denominatori</b> (moltiplica per il m.c.m.).</li>
<li><b>Trasporta</b>: termini con la x al primo membro, numeri al secondo (cambiando segno!).</li>
<li><b>Riduci</b> i termini simili: arrivi alla <b>forma normale</b> ax = b.</li>
<li><b>Dividi</b> per il coefficiente della x: x = b/a.</li>
<li><b>Verifica</b>: sostituisci la soluzione nell'equazione iniziale.</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio guidato",
      html: `<p>Risolvi: <b>3(x − 2) + 4 = x + 10</b></p>
<ol>
<li>Parentesi: 3x − 6 + 4 = x + 10</li>
<li>Trasporto: 3x − x = 10 + 6 − 4</li>
<li>Riduzione: 2x = 12</li>
<li>Divisione per 2: <b>x = 6</b></li>
<li>Verifica: 3(6 − 2) + 4 = 12 + 4 = 16; 6 + 10 = 16 ✔️</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: principi di equivalenza",
      questions: [
        { type: "num", q: "Risolvi: x − 9 = 4", answer: 13, explain: "Trasporto il −9: x = 4 + 9 = 13." },
        { type: "num", q: "Risolvi: 5x = −35", answer: -7, explain: "Divido per 5: x = −7." },
        { type: "tf", q: "Si possono moltiplicare entrambi i membri per 0.", answer: false, explain: "Il secondo principio vale solo per numeri diversi da zero." }
      ]
    },
    {
      type: "text",
      title: "Determinate, impossibili, indeterminate",
      html: `<p>Quando arrivi alla forma normale <b>ax = b</b>:</p>
<table>
<tr><th>Caso</th><th>Esempio</th><th>Soluzioni</th></tr>
<tr><td>a ≠ 0 → <b>determinata</b></td><td>4x = 12</td><td>una sola: x = 3</td></tr>
<tr><td>a = 0, b ≠ 0 → <b>impossibile</b></td><td>0x = 5</td><td>nessuna: nessun numero per 0 dà 5</td></tr>
<tr><td>a = 0, b = 0 → <b>indeterminata</b></td><td>0x = 0</td><td>infinite: è un'identità</td></tr>
</table>
<p>Esempio impossibile: x + 3 = x + 5 → 0x = 2. Esempio indeterminato: 2(x + 1) = 2x + 2 → 0x = 0.</p>`
    },
    {
      type: "widget",
      title: "Classifica le equazioni",
      widget: "classify",
      options: { groups: ["Determinata", "Impossibile", "Indeterminata"], items: [
        ["3x = 12", 0],
        ["0x = 7", 1],
        ["0x = 0", 2],
        ["x + 1 = x + 4", 1],
        ["2x + 2 = 2(x + 1)", 2],
        ["5x − 1 = 9", 0],
        ["4(x − 1) = 4x", 1],
        ["x/2 = 3", 0]
      ] },
      caption: "Riduci a forma normale ax = b e guarda a e b."
    },
    {
      type: "example",
      title: "Esempio pratico: il problema dei biglietti",
      html: `<p>Una classe va al museo. Il biglietto intero costa <b>8 €</b>, quello ridotto per studenti <b>5 €</b>. Ci sono 2 insegnanti (intero) e si spendono in tutto <b>131 €</b>. Quanti sono gli studenti?</p>
<ol>
<li><b>Incognita</b>: x = numero di studenti.</li>
<li><b>Equazione</b>: 5x + 2·8 = 131 → 5x + 16 = 131</li>
<li><b>Risoluzione</b>: 5x = 115 → x = <b>23</b> studenti.</li>
<li><b>Verifica</b>: 23·5 + 16 = 115 + 16 = 131 ✔️ (e 23 è un numero intero positivo, quindi accettabile).</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio pratico: l'età",
      html: `<p>Marco ha 3 volte l'età di sua figlia Sofia. Tra 12 anni avrà il doppio dell'età di Sofia. Quanti anni hanno?</p>
<ul>
<li>Età di Sofia = x; età di Marco = 3x.</li>
<li>Tra 12 anni: 3x + 12 = 2(x + 12)</li>
<li>3x + 12 = 2x + 24 → x = <b>12</b>. Sofia ha 12 anni, Marco <b>36</b>.</li>
<li>Verifica: tra 12 anni 48 e 24, e 48 = 2·24 ✔️</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il segno \"=\"",
      html: `<p>Il segno <b>=</b> fu inventato dal medico e matematico gallese <b>Robert Recorde</b> nel 1557, nel libro <i>The Whetstone of Witte</i>. Scrisse che aveva scelto due linee parallele della stessa lunghezza "perché nessuna coppia di cose può essere più uguale". Prima di lui si scriveva per esteso "è uguale a" (in latino <i>aequales</i>, abbreviato "ae").</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? L'epitaffio di Diofanto",
      html: `<p>Un antico indovinello greco racconta la vita del matematico <b>Diofanto</b>: "La sua infanzia durò 1/6 della vita; dopo 1/12 gli crebbe la barba; dopo 1/7 si sposò; 5 anni dopo nacque un figlio, che visse metà degli anni del padre; il padre morì 4 anni dopo il figlio." Equazione: x/6 + x/12 + x/7 + 5 + x/2 + 4 = x → <b>x = 84</b>. E già nel <b>papiro di Rhind</b> (Egitto, circa 1650 a.C.) ci sono problemi "aha" che sono vere equazioni di primo grado: "una quantità e il suo settimo fanno 19".</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per risolvere le equazioni",
      intro: "Il trasporto con cambio di segno ti sembra una magia? Ecco da dove viene, con metodi usati in altri Paesi.",
      tabs: [
        {
          label: "⚖️ La bilancia",
          html: `<p>Pensa all'equazione come a una <b>bilancia a due piatti</b> in equilibrio. Le x sono sacchetti misteriosi tutti dello stesso peso, i numeri sono pesetti da 1.</p>
<ul>
<li>Puoi <b>togliere lo stesso peso</b> da entrambi i piatti (1° principio).</li>
<li>Puoi <b>dividere a metà</b> entrambi i piatti (2° principio).</li>
</ul>
<p>"Trasportare cambiando segno" è solo una scorciatoia: togliere 3 pesetti da entrambi i piatti fa sparire il +3 a sinistra e compare un −3 a destra!</p>
<p>3x + 2 = x + 10 → tolgo x da entrambi → 2x + 2 = 10 → tolgo 2 → 2x = 8 → divido a metà → <b>x = 4</b>.</p>`
        },
        {
          label: "🇸🇬 Il bar model di Singapore",
          html: `<p>A Singapore, uno dei Paesi con i risultati migliori in matematica, si risolvono i problemi con le <b>barre</b> prima ancora di usare le lettere.</p>
<p>"Luca ha 3 volte le figurine di Anna; insieme ne hanno 48." Disegna una barra per Anna e 3 barre uguali per Luca: in tutto <b>4 barre = 48</b>, quindi una barra = 12. Anna ha 12 figurine, Luca 36. In algebra: x + 3x = 48 → 4x = 48 → x = 12.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<text x="20" y="60" font-size="20" fill="#1f2937" font-weight="bold">Anna</text>
<rect x="110" y="35" width="100" height="40" fill="#f472b6" stroke="#9d174d" stroke-width="3"/>
<text x="160" y="62" font-size="18" text-anchor="middle" fill="#fff">x</text>
<text x="20" y="130" font-size="20" fill="#1f2937" font-weight="bold">Luca</text>
<rect x="110" y="105" width="100" height="40" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="210" y="105" width="100" height="40" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="310" y="105" width="100" height="40" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<text x="160" y="132" font-size="18" text-anchor="middle" fill="#fff">x</text><text x="260" y="132" font-size="18" text-anchor="middle" fill="#fff">x</text><text x="360" y="132" font-size="18" text-anchor="middle" fill="#fff">x</text>
<path d="M430 35 Q450 90 430 145" fill="none" stroke="#1f2937" stroke-width="3"/>
<text x="460" y="97" font-size="24" fill="#1f2937" font-weight="bold">48</text>
<text x="300" y="195" font-size="20" text-anchor="middle" fill="#166534" font-weight="bold">4 barre = 48 → 1 barra = 12</text>
</svg>`
        },
        {
          label: "🇬🇧 La macchina al contrario",
          html: `<p>Nelle scuole inglesi si usano le <b>function machines</b>: l'incognita entra in una macchina che fa delle operazioni.</p>
<p>x → <b>× 3</b> → <b>+ 5</b> → 26</p>
<p>Per trovare x, fai girare la macchina <b>al contrario</b>, con le operazioni <b>inverse</b> e in ordine inverso:</p>
<p>26 → <b>− 5</b> → 21 → <b>: 3</b> → <b>7</b>. Quindi x = 7.</p>
<p>È esattamente quello che fai con i principi di equivalenza: per "disfare" un +5 sottrai 5, per disfare un ×3 dividi per 3. È come togliersi i vestiti: l'ultima cosa che hai messo (il giubbotto) è la prima che togli!</p>`
        },
        {
          label: "🐸 Sulla retta",
          html: `<p>Risolvi <b>x + 7 = 3</b> sulla retta: da quale numero devo partire per arrivare a 3 facendo un salto di +7? Parti da 3 e torna indietro di 7: arrivi a <b>−4</b>. Quindi x = −4. Prova con il widget: metti la partenza a 3 e il salto a 7, poi premi "−".</p>`,
          widget: "numberLine",
          options: { min: -10, max: 10, step: 7, start: 3 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle equazioni di primo grado",
      nodes: [
        { id: "uguaglianza", label: "Uguaglianza", x: 50, y: 6, color: "#64748b", html: "Due espressioni collegate dal segno =.", why: "Il segno = fu introdotto da Robert Recorde nel 1557. Un'uguaglianza tra espressioni letterali può essere sempre vera o vera solo a volte." },
        { id: "identita", label: "Identità", x: 20, y: 26, color: "#94a3b8", html: "Uguaglianza vera per ogni valore delle lettere.", why: "Nasce dalle proprietà delle operazioni (es. la distributiva): le formule del calcolo letterale sono identità." },
        { id: "equazione", label: "Equazione", x: 70, y: 26, color: "#2563eb", html: "Uguaglianza vera solo per certi valori dell'incognita.", why: "Dal latino <i>aequatio</i>, 'rendere uguale'. Problemi di questo tipo si trovano già nel papiro di Rhind (circa 1650 a.C.) e nelle tavolette babilonesi." },
        { id: "principio1", label: "1° principio", x: 45, y: 50, color: "#16a34a", html: "Si può aggiungere o togliere la stessa quantità a entrambi i membri.", why: "Corrisponde all'<i>al-jabr</i> e all'<i>al-muqābala</i> di al-Khwārizmī (circa 820 d.C.): 'rimettere a posto' i termini sottratti e 'bilanciare' quelli uguali." },
        { id: "principio2", label: "2° principio", x: 80, y: 50, color: "#f59e0b", html: "Si possono moltiplicare o dividere i membri per lo stesso numero ≠ 0.", why: "Se due quantità sono uguali, lo restano anche il loro doppio, la loro metà… È uno degli assiomi ('nozioni comuni') di Euclide. Lo zero è escluso perché la divisione per zero non ha senso." },
        { id: "trasporto", label: "Regola del trasporto", x: 20, y: 70, color: "#22c55e", html: "Un termine passa all'altro membro cambiando segno.", why: "È una scorciatoia del 1° principio: sommare l'opposto a entrambi i membri fa 'sparire' il termine da una parte e 'comparire' con segno opposto dall'altra." },
        { id: "forma", label: "Forma normale ax = b", x: 60, y: 72, color: "#a855f7", html: "Il punto d'arrivo dopo le trasformazioni.", why: "Ogni equazione di primo grado si può ridurre a questa forma; da qui si vede subito se è determinata, impossibile o indeterminata." },
        { id: "casi", label: "Determinata / impossibile / indeterminata", x: 60, y: 92, color: "#ef4444", html: "Una soluzione / nessuna / infinite.", why: "Dipende da a e b: se a ≠ 0 posso dividere; se a = 0 il primo membro vale sempre 0, quindi tutto dipende da b." },
        { id: "problemi", label: "Problemi", x: 20, y: 92, color: "#0ea5e9", html: "Tradurre una situazione reale in equazione.", why: "È il motivo per cui le equazioni sono nate: dividere eredità, calcolare tasse, prezzi, distanze. Il Liber Abaci di Fibonacci (1202) è pieno di problemi commerciali risolti così." }
      ],
      edges: [
        ["uguaglianza", "identita", "sempre vera"],
        ["uguaglianza", "equazione", "vera a volte"],
        ["equazione", "principio1", "si trasforma con"],
        ["equazione", "principio2", "si trasforma con"],
        ["principio1", "trasporto", "scorciatoia"],
        ["principio1", "forma", "porta a"],
        ["principio2", "forma", "porta a"],
        ["forma", "casi", "decide"],
        ["problemi", "equazione", "si traducono in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: risolvi e verifica",
      questions: [
        { type: "num", q: "Risolvi: 7x − 4 = 3x + 20", answer: 6, explain: "7x − 3x = 20 + 4 → 4x = 24 → x = 6." },
        { type: "num", q: "Risolvi: x/3 + 2 = 6", answer: 12, explain: "x/3 = 4 → x = 12." },
        { type: "mc", q: "L'equazione 2(x + 3) = 2x + 1 è…", options: ["determinata", "impossibile", "indeterminata"], answer: 1, explain: "2x + 6 = 2x + 1 → 0x = −5: impossibile." }
      ]
    }
  ],
  glossary: [
    { t: "Equazione", d: "Uguaglianza tra due espressioni verificata solo per alcuni valori dell'incognita." },
    { t: "Identità", d: "Uguaglianza vera per qualsiasi valore delle lettere." },
    { t: "Incognita", d: "La lettera di cui si cerca il valore." },
    { t: "Membri", d: "Le due espressioni a sinistra (primo) e a destra (secondo) dell'uguale." },
    { t: "Soluzione (radice)", d: "Il valore dell'incognita che rende vera l'equazione." },
    { t: "Equazioni equivalenti", d: "Equazioni che hanno le stesse soluzioni." },
    { t: "Principi di equivalenza", d: "Regole che trasformano un'equazione in una equivalente." },
    { t: "Forma normale", d: "La forma ax = b di un'equazione di primo grado." },
    { t: "Verifica", d: "Controllo della soluzione sostituendola nell'equazione." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di queste è un'identità?", options: ["x + 2 = 5", "3(x + 1) = 3x + 3", "2x = 0"], answer: 1, explain: "È vera per ogni x grazie alla proprietà distributiva." },
      { type: "num", q: "Risolvi: 4x + 7 = 31", answer: 6, explain: "4x = 24 → x = 6." },
      { type: "num", q: "Risolvi: 2(x − 5) = x + 3", answer: 13, explain: "2x − 10 = x + 3 → x = 13." },
      { type: "num", q: "Risolvi: −3x + 2 = 14", answer: -4, explain: "−3x = 12 → x = −4." },
      { type: "num", q: "Risolvi: x/4 − 1 = x/6", answer: 12, explain: "Moltiplico per 12: 3x − 12 = 2x → x = 12." },
      { type: "tf", q: "Con il primo principio si può sottrarre lo stesso numero da entrambi i membri.", answer: true, explain: "È proprio l'enunciato del primo principio." },
      { type: "mc", q: "Un'equazione che si riduce a 0x = 0 è…", options: ["impossibile", "determinata", "indeterminata"], answer: 2, explain: "Ogni numero la soddisfa: infinite soluzioni." },
      { type: "order", q: "Metti in ordine i passi per risolvere un'equazione.", items: ["Togliere le parentesi", "Eliminare i denominatori", "Trasportare i termini", "Ridurre a forma ax = b", "Dividere per il coefficiente", "Verificare"], explain: "È il metodo standard in 6 passi." },
      { type: "num", q: "La somma di tre numeri consecutivi è 72. Qual è il più piccolo?", answer: 23, explain: "x + (x + 1) + (x + 2) = 72 → 3x + 3 = 72 → x = 23." },
      { type: "num", q: "Il perimetro di un rettangolo è 50 cm; la base supera l'altezza di 7 cm. Quanto misura l'altezza?", answer: 9, unit: "cm", explain: "2(h + 7) + 2h = 50 → 4h + 14 = 50 → h = 9." },
      { type: "mc", q: "Per eliminare i denominatori in x/2 + x/5 = 7 si moltiplica tutto per…", options: ["7", "10", "2"], answer: 1, explain: "Il m.c.m. di 2 e 5 è 10." },
      { type: "text", q: "Chi inventò il segno \"=\" nel 1557?", answer: ["robert recorde", "recorde"], explain: "Il gallese Robert Recorde." }
    ],
    gen: [["equation", 3]]
  }
});
