TOPIC('it', {
  id: "m2-mat-frazioni-decimali",
  title: "Frazioni e numeri decimali",
  intro: "Ogni frazione è una <b>divisione</b> che aspetta di essere fatta. Se la esegui ottieni un <b>numero decimale</b>: a volte finisce (3/4 = 0,75), a volte continua all'infinito ripetendo le stesse cifre (1/3 = 0,333…). Scopriamo <b>quando</b> succede, <b>perché</b> e come tornare indietro dal decimale alla frazione con la <b>frazione generatrice</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Dalla frazione al numero decimale",
      html: `<p>La linea di frazione significa <b>«diviso»</b>: <b>a/b = a : b</b>.</p>
<p>Per trasformare una frazione in numero decimale basta eseguire la divisione del numeratore per il denominatore:</p>
<ul>
<li>3/4 = 3 : 4 = <b>0,75</b> → la divisione <b>finisce</b> (resto 0): numero <b>decimale limitato</b> (o finito);</li>
<li>1/3 = 1 : 3 = 0,3333… → il resto non diventa mai 0 e le cifre si ripetono: numero <b>decimale illimitato periodico</b>.</li>
</ul>
<p>Le cifre che si ripetono formano il <b>periodo</b>, che si scrive con una lineetta sopra o tra parentesi: 0,333… = <b>0,(3)</b> = 0,3̅.</p>`
    },
    {
      type: "text",
      title: "Tre tipi di numeri decimali",
      html: `<table>
<tr><th>Tipo</th><th>Esempio</th><th>Com'è fatto</th></tr>
<tr><td><b>Decimale limitato</b></td><td>7/8 = 0,875</td><td>un numero finito di cifre dopo la virgola</td></tr>
<tr><td><b>Periodico semplice</b></td><td>2/3 = 0,(6)<br>5/11 = 0,(45)</td><td>il periodo comincia <b>subito</b> dopo la virgola</td></tr>
<tr><td><b>Periodico misto</b></td><td>1/6 = 0,1(6)<br>7/12 = 0,58(3)</td><td>tra la virgola e il periodo ci sono cifre che non si ripetono: l'<b>antiperiodo</b></td></tr>
</table>
<p>In un numero come <b>2,1(36)</b>: <b>2</b> è la parte intera, <b>1</b> è l'antiperiodo, <b>36</b> è il periodo.</p>`
    },
    {
      type: "remember",
      title: "La regola del denominatore",
      html: `<p>Prima di fare la divisione puoi già <b>prevedere</b> il tipo di decimale! Riduci la frazione ai minimi termini e scomponi il denominatore in fattori primi:</p>
<ul>
<li>solo fattori <b>2</b> e/o <b>5</b> → <b>decimale limitato</b> (es. 3/20, perché 20 = 2² × 5);</li>
<li><b>nessun</b> fattore 2 o 5 → <b>periodico semplice</b> (es. 4/7, 5/9, 2/33);</li>
<li>fattori 2 e/o 5 <b>insieme</b> ad altri → <b>periodico misto</b> (es. 5/6, perché 6 = 2 × 3).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Perché 2 e 5?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<rect x="30" y="30" width="250" height="110" rx="14" fill="#16a34a"/>
<text x="155" y="65" font-size="20" fill="#fff" text-anchor="middle" font-weight="bold">10 = 2 × 5</text>
<text x="155" y="95" font-size="16" fill="#dcfce7" text-anchor="middle">le potenze di 10 contengono</text>
<text x="155" y="118" font-size="16" fill="#dcfce7" text-anchor="middle">solo i fattori 2 e 5</text>
<rect x="320" y="30" width="250" height="110" rx="14" fill="#2563eb"/>
<text x="445" y="62" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">3/20 = 15/100</text>
<text x="445" y="92" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">= 0,15 ✓</text>
<text x="445" y="120" font-size="14" fill="#dbeafe" text-anchor="middle">20 = 2²×5 → basta ×5</text>
<rect x="30" y="165" width="540" height="110" rx="14" fill="#dc2626"/>
<text x="300" y="200" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">1/3 = ?/10 = ?/100 = ?/1000…</text>
<text x="300" y="232" font-size="16" fill="#fee2e2" text-anchor="middle">nessuna potenza di 10 è divisibile per 3:</text>
<text x="300" y="258" font-size="16" fill="#fee2e2" text-anchor="middle">la divisione non finisce mai → 0,333…</text>
</svg>`,
      caption: "Una frazione è un decimale limitato solo se si può trasformare in una frazione decimale (con denominatore 10, 100, 1000…)."
    },
    {
      type: "example",
      title: "Esempio pratico: la divisione che si ripete",
      html: `<p>Calcoliamo <b>1/7</b> con la divisione in colonna e osserviamo i <b>resti</b>:</p>
<p>10 : 7 = 1 resto <b>3</b> → 30 : 7 = 4 resto <b>2</b> → 20 : 7 = 2 resto <b>6</b> → 60 : 7 = 8 resto <b>4</b> → 40 : 7 = 5 resto <b>5</b> → 50 : 7 = 7 resto <b>1</b> → si ricomincia da 10!</p>
<p>Risultato: <b>1/7 = 0,(142857)</b>, periodo di 6 cifre.</p>
<p><b>Perché si ripete?</b> Dividendo per 7 i resti possibili sono solo 1, 2, 3, 4, 5, 6: al massimo dopo 6 passi un resto deve ripresentarsi, e da lì le cifre si ripetono uguali. In generale, dividendo per <i>n</i> il periodo è lungo <b>al massimo n − 1</b> cifre.</p>`
    },
    {
      type: "widget",
      title: "Frazione e decimale",
      widget: "fractionPie",
      options: { n: 3, d: 8 },
      caption: "Muovi i cursori: per ogni frazione prova a calcolare il decimale. 3/8 = 0,375. Quali denominatori danno decimali limitati?"
    },
    {
      type: "quiz",
      title: "Mini-quiz: che decimale è?",
      questions: [
        { type: "mc", q: "7/25 è un numero…", options: ["decimale limitato", "periodico semplice", "periodico misto"], answer: 0, explain: "25 = 5²: solo fattori 5, quindi decimale limitato (7/25 = 0,28)." },
        { type: "mc", q: "5/6 è un numero…", options: ["decimale limitato", "periodico semplice", "periodico misto"], answer: 2, explain: "6 = 2 × 3: c'è il 2 insieme al 3 → periodico misto (0,8(3))." },
        { type: "num", q: "Quanto fa 3/8 come numero decimale?", answer: 0.375, tol: 0.0001, explain: "3 : 8 = 0,375." }
      ]
    },
    {
      type: "text",
      title: "Dal decimale alla frazione: la frazione generatrice",
      html: `<p>La <b>frazione generatrice</b> è la frazione che, divisa, «genera» quel numero decimale.</p>
<p><b>1. Decimale limitato</b>: al numeratore il numero senza virgola, al denominatore 1 seguito da tanti zeri quante sono le cifre decimali. Poi semplifica.<br>
0,75 = 75/100 = <b>3/4</b> &nbsp;&nbsp; 2,4 = 24/10 = <b>12/5</b></p>
<p><b>2. Periodico semplice</b>: al numeratore il numero senza virgola <b>meno</b> la parte intera; al denominatore tanti <b>9</b> quante sono le cifre del periodo.<br>
0,(3) = 3/9 = <b>1/3</b> &nbsp;&nbsp; 1,(27) = (127 − 1)/99 = 126/99 = <b>14/11</b></p>
<p><b>3. Periodico misto</b>: al numeratore il numero senza virgola <b>meno</b> il numero formato da parte intera e antiperiodo; al denominatore tanti <b>9</b> quante le cifre del periodo seguiti da tanti <b>0</b> quante le cifre dell'antiperiodo.<br>
0,1(6) = (16 − 1)/90 = 15/90 = <b>1/6</b> &nbsp;&nbsp; 2,3(5) = (235 − 23)/90 = 212/90 = <b>106/45</b></p>`
    },
    {
      type: "example",
      title: "Esempio pratico: perché proprio i 9?",
      html: `<p>Prendiamo <b>x = 0,(45)</b> = 0,454545…</p>
<ol>
<li>Il periodo ha 2 cifre: moltiplico per 100 → <b>100x = 45,4545…</b></li>
<li>Sottraggo x: 100x − x = 45,4545… − 0,4545… → <b>99x = 45</b> (la parte infinita si cancella!)</li>
<li>Quindi x = 45/99 = <b>5/11</b>.</li>
</ol>
<p>Ecco da dove vengono i <b>9</b>: 100 − 1 = 99. Con un periodo di 3 cifre si moltiplica per 1000 e si ottiene 999.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: lo scontrino e i soldi",
      html: `<p>Tre amici devono dividere un conto di <b>10 €</b>. Ognuno dovrebbe pagare 10/3 € = <b>3,(3) €</b> = 3,333… €.</p>
<p>Ma i centesimi non si possono dividere all'infinito! Si <b>arrotonda</b>: due amici pagano 3,33 € e uno 3,34 € (3,33 + 3,33 + 3,34 = 10,00 €).</p>
<p>Con <b>4 amici</b> invece: 10/4 = 2,5 € precisi, perché 4 = 2² ha solo il fattore 2!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 0,999… = 1",
      html: `<p>Il numero <b>0,(9)</b> = 0,9999… è esattamente uguale a <b>1</b>! Con la regola della frazione generatrice: 0,(9) = 9/9 = 1. Oppure: 1/3 = 0,(3); moltiplica per 3: 3/3 = 0,(9), ma 3/3 = 1. Per questo il periodo 9 non si usa: si scrive direttamente il numero arrotondato (2,4(9) = 2,5).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Chi inventò la virgola",
      html: `<p>I numeri decimali furono diffusi in Europa dal matematico fiammingo <b>Simon Stevin</b> nel libretto <i>De Thiende</i> («Il decimo», <b>1585</b>), ma lui li scriveva con cerchietti numerati sopra le cifre. Il separatore con il punto fu reso popolare da <b>John Napier</b> (Nepero) nel 1617. Ancora oggi i Paesi anglosassoni usano il <b>punto</b> (3.14) e l'Italia e gran parte d'Europa la <b>virgola</b> (3,14).</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i decimali periodici",
      intro: "Se la regola dei 9 e degli 0 ti sembra magia, ecco altre strade.",
      tabs: [
        {
          label: "🧊 Cento cubetti",
          html: `<p>Ecco un quadrato di <b>10 × 10 = 100</b> cubetti: tutto il blocco vale <b>1</b>. Una fila di 10 cubetti vale <b>0,1</b> (un decimo); un cubetto vale <b>0,01</b> (un centesimo).</p>
<p>Prova: 3/4 del blocco = 75 cubetti = <b>0,75</b>. Ma 1/3 del blocco? 100 cubetti non si dividono in 3 parti uguali: 33 cubetti a testa e ne avanza 1, che dovresti tagliare in pezzetti sempre più piccoli… all'infinito: 0,333…</p>`,
          scene: "blocks",
          options: { mode: "array", a: 10, b: 10 }
        },
        {
          label: "📏 La retta che zooma",
          html: `<p>Immagina di cercare 1/3 sulla retta con una <b>lente d'ingrandimento</b>:</p>
<ul>
<li>tra 0 e 1, divisa in decimi, 1/3 sta tra 0,3 e 0,4;</li>
<li>zoomi tra 0,3 e 0,4 divisi in centesimi: sta tra 0,33 e 0,34;</li>
<li>zoomi ancora: tra 0,333 e 0,334…</li>
</ul>
<p>Ogni volta 1/3 cade <b>nella stessa posizione</b> (circa a un terzo dell'intervallo): per questo esce sempre la cifra <b>3</b>. Non arriverai mai esattamente su una tacca!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eef2ff"/>
<line x1="40" y1="60" x2="560" y2="60" stroke="#1e1b4b" stroke-width="4"/>
<line x1="40" y1="48" x2="40" y2="72" stroke="#1e1b4b" stroke-width="3"/><line x1="560" y1="48" x2="560" y2="72" stroke="#1e1b4b" stroke-width="3"/>
<line x1="196" y1="50" x2="196" y2="70" stroke="#1e1b4b" stroke-width="3"/><line x1="248" y1="50" x2="248" y2="70" stroke="#1e1b4b" stroke-width="3"/>
<circle cx="213" cy="60" r="7" fill="#dc2626"/>
<text x="40" y="35" font-size="16" text-anchor="middle">0</text><text x="560" y="35" font-size="16" text-anchor="middle">1</text>
<text x="196" y="95" font-size="15" text-anchor="middle">0,3</text><text x="248" y="95" font-size="15" text-anchor="middle">0,4</text>
<line x1="196" y1="70" x2="40" y2="140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/><line x1="248" y1="70" x2="560" y2="140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="40" y1="150" x2="560" y2="150" stroke="#1e1b4b" stroke-width="4"/>
<line x1="196" y1="140" x2="196" y2="160" stroke="#1e1b4b" stroke-width="3"/><line x1="248" y1="140" x2="248" y2="160" stroke="#1e1b4b" stroke-width="3"/>
<circle cx="213" cy="150" r="7" fill="#dc2626"/>
<text x="40" y="185" font-size="15" text-anchor="middle">0,3</text><text x="560" y="185" font-size="15" text-anchor="middle">0,4</text>
<text x="196" y="185" font-size="15" text-anchor="middle">0,33</text><text x="252" y="185" font-size="15" text-anchor="middle">0,34</text>
<line x1="196" y1="160" x2="40" y2="230" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/><line x1="248" y1="160" x2="560" y2="230" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="40" y1="240" x2="560" y2="240" stroke="#1e1b4b" stroke-width="4"/>
<line x1="196" y1="230" x2="196" y2="250" stroke="#1e1b4b" stroke-width="3"/><line x1="248" y1="230" x2="248" y2="250" stroke="#1e1b4b" stroke-width="3"/>
<circle cx="213" cy="240" r="7" fill="#dc2626"/>
<text x="40" y="275" font-size="15" text-anchor="middle">0,33</text><text x="560" y="275" font-size="15" text-anchor="middle">0,34</text>
<text x="196" y="275" font-size="15" text-anchor="middle">0,333</text><text x="256" y="275" font-size="15" text-anchor="middle">0,334</text>
<text x="420" y="110" font-size="16" fill="#dc2626" font-weight="bold">● = 1/3</text>
</svg>`
        },
        {
          label: "🇬🇧 Il metodo inglese con l'algebra",
          html: `<p>Nei Paesi anglosassoni (e in molte scuole del mondo) non si impara la «regola dei 9 e degli 0», ma il trucco algebrico «<b>moltiplica e sottrai</b>»:</p>
<p>x = 0,1666… → 10x = 1,666… e 100x = 16,666…<br>100x − 10x = 16,666… − 1,666… → <b>90x = 15</b> → x = 15/90 = 1/6.</p>
<p>Si sposta la virgola in modo che le code infinite siano <b>uguali</b>, e sottraendo spariscono. La regola italiana è solo questa idea già «impacchettata»!</p>`
        },
        {
          label: "🎡 Il giro dei resti",
          html: `<p>Pensa alla divisione per 7 come a una <b>ruota panoramica</b> con 6 cabine (i resti possibili 1–6). Ogni passo della divisione ti sposta su una cabina: 1 → 3 → 2 → 6 → 4 → 5 → di nuovo 1. Quando torni alla cabina di partenza il giro ricomincia e le cifre si ripetono. Se invece arrivi alla cabina «0», sei sceso: la divisione è finita (decimale limitato).</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<circle cx="300" cy="150" r="110" fill="none" stroke="#9a3412" stroke-width="5"/>
<circle cx="300" cy="40" r="28" fill="#f97316"/><text x="300" y="47" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<circle cx="395" cy="95" r="28" fill="#fb923c"/><text x="395" y="102" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">3</text>
<circle cx="395" cy="205" r="28" fill="#f97316"/><text x="395" y="212" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">2</text>
<circle cx="300" cy="260" r="28" fill="#fb923c"/><text x="300" y="267" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">6</text>
<circle cx="205" cy="205" r="28" fill="#f97316"/><text x="205" y="212" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">4</text>
<circle cx="205" cy="95" r="28" fill="#fb923c"/><text x="205" y="102" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">5</text>
<text x="300" y="145" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">resti di 1 : 7</text>
<text x="300" y="170" font-size="16" text-anchor="middle" fill="#7c2d12">cifre: 1 4 2 8 5 7</text>
<text x="500" y="60" font-size="15" fill="#7c2d12">giro completo</text>
<text x="500" y="80" font-size="15" fill="#7c2d12">= periodo</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: frazioni e decimali",
      nodes: [
        { id: "fraz", label: "Frazione a/b", x: 50, y: 6, color: "#2563eb", html: "Un quoziente tra due numeri interi.", why: "La frazione è nata per dividere quantità; la scrittura «a/b» indica proprio la divisione a : b. Ogni frazione è un <b>numero razionale</b> (da <i>ratio</i>, «rapporto»)." },
        { id: "div", label: "Divisione", x: 50, y: 26, color: "#7c3aed", html: "Numeratore : denominatore.", why: "Eseguendo la divisione in colonna con i decimali si continua aggiungendo zeri al resto. È il metodo indiano-arabo arrivato in Europa con Fibonacci (1202)." },
        { id: "lim", label: "Decimale limitato", x: 16, y: 50, color: "#16a34a", html: "Finisce dopo un numero finito di cifre: 0,75.", why: "Succede se il denominatore (ridotto) ha solo fattori 2 e 5, perché allora la frazione si può scrivere con denominatore 10, 100, 1000… e 10 = 2 × 5." },
        { id: "sempl", label: "Periodico semplice", x: 50, y: 52, color: "#ea580c", html: "Il periodo inizia subito: 0,(3).", why: "Succede quando il denominatore non ha né 2 né 5. I resti si ripetono per forza, perché sono in numero finito (meno del divisore): è il <b>principio dei cassetti</b>." },
        { id: "misto", label: "Periodico misto", x: 84, y: 50, color: "#dc2626", html: "C'è un antiperiodo: 0,1(6).", why: "Il denominatore contiene 2 o 5 insieme ad altri fattori: la parte «2 e 5» produce l'antiperiodo, gli altri fattori il periodo." },
        { id: "gen", label: "Frazione generatrice", x: 50, y: 76, color: "#0d9488", html: "La frazione da cui nasce un decimale.", why: "Si dimostra con l'algebra: si moltiplica il numero per una potenza di 10 e si sottrae, così la parte periodica infinita si cancella e restano i 9 (es. 100x − x = 99x)." },
        { id: "irr", label: "Numeri irrazionali", x: 84, y: 82, color: "#64748b", html: "Decimali illimitati NON periodici: √2, π.", why: "Non sono frazioni: non hanno frazione generatrice. I Pitagorici scoprirono nel V secolo a.C. che la diagonale del quadrato (√2) non è un rapporto di interi: fu uno shock!" },
        { id: "stevin", label: "Notazione decimale", x: 16, y: 82, color: "#ca8a04", html: "Scrivere i numeri con la virgola.", why: "Già i matematici arabi (al-Kashi, XV secolo) usavano frazioni decimali; in Europa le diffuse <b>Simon Stevin</b> nel 1585, per semplificare i calcoli di mercanti e ingegneri." }
      ],
      edges: [
        ["fraz", "div", "significa"],
        ["div", "lim", "resto 0"],
        ["div", "sempl", "resti che si ripetono"],
        ["div", "misto", "antiperiodo + periodo"],
        ["sempl", "gen", "si torna con"],
        ["misto", "gen", "si torna con"],
        ["misto", "irr", "diversi da"],
        ["lim", "stevin", "si scrive con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: frazione generatrice",
      questions: [
        { type: "mc", q: "La frazione generatrice di 0,(7) è…", options: ["7/10", "7/9", "7/99"], answer: 1, explain: "Periodo di una cifra: 7/9." },
        { type: "mc", q: "La frazione generatrice di 0,1(6) è…", options: ["16/90 = 8/45", "15/90 = 1/6", "16/99"], answer: 1, explain: "(16 − 1)/90 = 15/90 = 1/6." },
        { type: "num", q: "0,25 = 1/?", answer: 4, explain: "0,25 = 25/100 = 1/4." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>a/b = a : b. Il decimale può essere <b>limitato</b>, <b>periodico semplice</b>, <b>periodico misto</b>.</li>
<li>Denominatore con solo 2 e 5 → limitato; senza 2 e 5 → semplice; misto → misto.</li>
<li>Generatrice: numeratore = numero senza virgola − (parte intera e antiperiodo); denominatore = un <b>9</b> per ogni cifra del periodo e uno <b>0</b> per ogni cifra dell'antiperiodo.</li>
<li>Semplifica sempre il risultato!</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Numero decimale limitato", d: "Numero con un numero finito di cifre dopo la virgola." },
    { t: "Numero periodico", d: "Numero decimale illimitato in cui un gruppo di cifre si ripete all'infinito." },
    { t: "Periodo", d: "Il gruppo di cifre che si ripete." },
    { t: "Antiperiodo", d: "Le cifre decimali tra la virgola e il periodo, che non si ripetono." },
    { t: "Frazione generatrice", d: "La frazione che, eseguendo la divisione, genera un numero decimale." },
    { t: "Frazione decimale", d: "Frazione con denominatore 10, 100, 1000…" },
    { t: "Numero razionale", d: "Numero che si può scrivere come frazione di due interi." },
    { t: "Numero irrazionale", d: "Decimale illimitato non periodico, che non è una frazione (es. π, √2)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Scrivi 7/20 come numero decimale.", answer: 0.35, tol: 0.0001, explain: "7/20 = 35/100 = 0,35." },
      { type: "mc", q: "Quale frazione dà un decimale periodico semplice?", options: ["3/8", "2/9", "1/6"], answer: 1, explain: "9 = 3²: nessun 2 o 5 → periodico semplice (0,(2))." },
      { type: "mc", q: "In 3,4(12) l'antiperiodo è…", options: ["3", "4", "12"], answer: 1, explain: "3 parte intera, 4 antiperiodo, 12 periodo." },
      { type: "tf", q: "1/40 è un numero decimale limitato.", answer: true, explain: "40 = 2³ × 5: solo 2 e 5 → limitato (0,025)." },
      { type: "mc", q: "La frazione generatrice di 0,(12) è…", options: ["12/100", "12/99 = 4/33", "12/90"], answer: 1, explain: "Due cifre di periodo → 99: 12/99 = 4/33." },
      { type: "mc", q: "La frazione generatrice di 1,2(3) è…", options: ["(123 − 12)/90 = 37/30", "123/99", "(123 − 1)/99"], answer: 0, explain: "Numero senza virgola 123 meno parte intera+antiperiodo 12; denominatore 90." },
      { type: "num", q: "Quante cifre ha il periodo di 1/7?", answer: 6, explain: "1/7 = 0,(142857)." },
      { type: "tf", q: "0,(9) è uguale a 1.", answer: true, explain: "0,(9) = 9/9 = 1." },
      { type: "num", q: "Trasforma 0,6 in frazione ridotta: 3/?", answer: 5, explain: "0,6 = 6/10 = 3/5." },
      { type: "order", q: "Ordina dal più piccolo al più grande.", items: ["0,3", "1/3", "0,34", "0,(4)"], explain: "0,3 < 0,333… < 0,34 < 0,444…" },
      { type: "mc", q: "π = 3,14159… è…", options: ["periodico semplice", "decimale limitato", "irrazionale (non periodico)"], answer: 2, explain: "π è illimitato e non periodico: non è una frazione." }
    ],
    gen: [["fracEquiv", 2], ["decAdd", 1]]
  }
});
