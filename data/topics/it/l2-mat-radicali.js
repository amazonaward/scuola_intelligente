TOPIC('it', {
  id: "l2-mat-radicali",
  title: "Numeri reali e radicali",
  intro: "Disegna un quadrato di lato 1 e traccia la diagonale: quanto è lunga? Nessuna frazione riesce a misurarla esattamente. Fu una delle scoperte più sconvolgenti della matematica greca: esistono lunghezze che non sono rapporti di numeri interi. Per descriverle servono i <b>numeri irrazionali</b> e i <b>radicali</b>. In questa lezione completiamo l'insieme dei <b>numeri reali</b>, impariamo a calcolare con le radici (semplificare, moltiplicare, sommare) e a <b>razionalizzare</b> le frazioni con radici al denominatore.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Dai razionali ai reali",
      html: `<p>Negli anni scorsi hai incontrato <b>ℕ</b> (naturali), <b>ℤ</b> (interi) e <b>ℚ</b> (razionali: frazioni a/b con b ≠ 0, che hanno scrittura decimale <b>finita o periodica</b>). Ma non bastano. Il numero che elevato al quadrato dà 2, √2, <b>non è razionale</b>: la sua scrittura decimale è infinita e <b>non periodica</b>: 1,41421356237…</p>
<p>I numeri con scrittura decimale illimitata e non periodica si chiamano <b>irrazionali</b> (ℚᶜ o 𝕀). L'unione di razionali e irrazionali forma l'insieme dei <b>numeri reali ℝ</b>. I reali si possono mettere in corrispondenza uno a uno con i punti di una <b>retta</b>: ogni punto è un numero e ogni numero è un punto, senza buchi. Per questo si parla di <b>retta reale</b>.</p>
<p>Esempi di irrazionali: √2, √3, √5, il rapporto aureo φ = (1 + √5)/2 ≈ 1,618, e i celebri <b>π</b> ≈ 3,14159… (rapporto tra circonferenza e diametro) ed <b>e</b> ≈ 2,71828… (base dei logaritmi naturali). Attenzione: √4 = 2 e √(9/25) = 3/5 sono radici di numeri razionali, ma sono razionali!</p>
<p>Le <b>approssimazioni</b> servono nei calcoli pratici: √2 ≈ 1,41 per difetto (a meno di un centesimo) e ≈ 1,42 per eccesso. Per un irrazionale si può sempre dare una <b>approssimazione per difetto e per eccesso</b> con la precisione che si vuole.</p>`
    },
    {
      type: "svg",
      title: "La diagonale del quadrato di lato 1",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="30" width="150" height="150" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<line x1="60" y1="180" x2="210" y2="30" stroke="#ea580c" stroke-width="4"/>
<text x="135" y="205" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">1</text>
<text x="40" y="110" font-size="16" text-anchor="end" fill="#1d4ed8" font-weight="bold">1</text>
<text x="150" y="95" font-size="16" fill="#9a3412" font-weight="bold">d = √2</text>
<text x="240" y="60" font-size="16" fill="#334155">d² = 1² + 1² = 2</text>
<text x="240" y="90" font-size="16" fill="#334155">d ≈ 1,41421356…</text>
<text x="240" y="120" font-size="16" fill="#334155">decimali infiniti e non periodici</text>
<line x1="40" y1="260" x2="560" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="252" x2="60" y2="268" stroke="#475569" stroke-width="2"/>
<line x1="272" y1="252" x2="272" y2="268" stroke="#475569" stroke-width="2"/>
<line x1="272" y1="260" x2="272" y2="260" stroke="#ea580c"/>
<line x1="60" y1="260" x2="272" y2="260" stroke="#ea580c" stroke-width="5"/>
<circle cx="272" cy="260" r="7" fill="#ea580c"/>
<text x="60" y="288" font-size="16" text-anchor="middle" fill="#334155">0</text>
<text x="272" y="288" font-size="16" text-anchor="middle" fill="#9a3412" font-weight="bold">√2</text>
<text x="132" y="248" font-size="14" text-anchor="middle" fill="#9a3412">si riporta con il compasso</text>
</svg>`,
      caption: "Con il teorema di Pitagora la diagonale del quadrato di lato 1 misura √2; riportata con il compasso sulla retta fissa il punto del numero √2."
    },
    {
      type: "text",
      title: "Perché √2 non è razionale",
      html: `<p>La dimostrazione, già nota ai greci, è un capolavoro di ragionamento <b>per assurdo</b>:</p>
<ol>
<li>Supponiamo che √2 = a/b con a e b interi, la frazione <b>ridotta ai minimi termini</b> (a e b senza fattori comuni).</li>
<li>Elevando al quadrato: 2 = a²/b², cioè <b>a² = 2b²</b>. Quindi a² è pari, e di conseguenza <b>a è pari</b> (il quadrato di un dispari è dispari): a = 2k.</li>
<li>Sostituendo: 4k² = 2b² → <b>b² = 2k²</b>, quindi anche <b>b è pari</b>.</li>
<li>Ma allora a e b sono entrambi pari: la frazione non era ridotta ai minimi termini. <b>Contraddizione.</b> Dunque √2 non è razionale.</li>
</ol>
<p>Lo stesso ragionamento mostra che √n è irrazionale ogni volta che n non è un quadrato perfetto.</p>`
    },
    {
      type: "text",
      title: "Definizione di radice n-esima",
      html: `<p>La <b>radice n-esima</b> di un numero reale a, scritta ⁿ√a, è il numero che elevato a n dà a. Occorre distinguere:</p>
<ul>
<li><b>Indice n pari</b> (radice quadrata, quarta…): il radicando deve essere <b>a ≥ 0</b>, e ⁿ√a è per definizione il valore <b>non negativo</b>. Quindi √9 = 3 (e non ±3; le soluzioni di x² = 9 sono ±3, ma il simbolo √9 indica solo 3). Inoltre √(a²) = <b>|a|</b>: √((−5)²) = √25 = 5, non −5.</li>
<li><b>Indice n dispari</b> (radice cubica…): il radicando può essere <b>qualunque</b> numero reale, e il segno si conserva: ³√(−8) = −2.</li>
</ul>
<p>Per le <b>condizioni di esistenza</b> di un'espressione con radicali: con indice pari il radicando deve essere ≥ 0 (con indice pari al denominatore, &gt; 0); con indice dispari non c'è limitazione. Esempio: √(x − 3) esiste per x ≥ 3; 1/√(x − 3) per x &gt; 3.</p>
<p>Un <b>radicale</b> è un'espressione ⁿ√a; due radicali si dicono <b>simili</b> se hanno lo stesso indice e lo stesso radicando, e differiscono solo per il coefficiente (es. 3√2 e 5√2).</p>`
    },
    {
      type: "remember",
      title: "Le proprietà dei radicali (a, b ≥ 0)",
      html: `<ul>
<li><b>Proprietà invariantiva</b>: ⁿ√(aᵐ) = ⁿᵏ√(aᵐᵏ). Es. ⁴√4 = √2 (si semplifica per 2: ⁴√(2²) = √2).</li>
<li><b>Prodotto</b>: ⁿ√a · ⁿ√b = ⁿ√(a·b) (stesso indice).</li>
<li><b>Quoziente</b>: ⁿ√a : ⁿ√b = ⁿ√(a : b), con b ≠ 0.</li>
<li><b>Potenza</b>: (ⁿ√a)ᵐ = ⁿ√(aᵐ).</li>
<li><b>Radice di radice</b>: ᵐ√(ⁿ√a) = ᵐⁿ√a.</li>
<li><b>Trasporto fuori radice</b>: √(a²b) = a√b (se a ≥ 0). <b>Dentro radice</b>: a√b = √(a²b).</li>
</ul>
<p>⚠️ La somma <b>non</b> si semplifica: √(a + b) ≠ √a + √b. Esempio: √(9 + 16) = 5, mentre 3 + 4 = 7.</p>`
    },
    {
      type: "example",
      title: "Esempio guidato: semplificare",
      html: `<p>Semplifica <b>√72</b> e <b>³√54</b>.</p>
<ul>
<li>√72: scompongo 72 = 2³ · 3² = 2 · 2² · 3² → √72 = <b>6√2</b> (porto fuori 2 e 3: 2·3 = 6).</li>
<li>³√54: 54 = 2 · 3³ → ³√54 = <b>3·³√2</b> (porto fuori il 3 con esponente 3).</li>
</ul>
<p>Regola: scomponi in fattori primi e porta fuori i fattori il cui esponente è <b>almeno uguale all'indice</b>: ogni gruppo da n fattori uguali sotto ⁿ√ esce come 1 fattore.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: radici e numeri reali",
      questions: [
        { type: "mc", q: "Quale di questi numeri è irrazionale?", options: ["√49", "√50", "√(1/4)"], answer: 1, explain: "√49 = 7 e √(1/4) = 1/2 sono razionali; 50 non è un quadrato perfetto, quindi √50 è irrazionale." },
        { type: "num", q: "Quanto vale √((−7)²)?", answer: 7, explain: "√(a²) = |a|: √49 = 7." },
        { type: "mc", q: "Per quali x esiste √(x − 3)?", options: ["x &gt; 3", "x ≥ 3", "per ogni x"], answer: 1, explain: "Il radicando deve essere ≥ 0: x − 3 ≥ 0 → x ≥ 3." }
      ]
    },
    {
      type: "text",
      title: "Operazioni con i radicali",
      html: `<p><b>Somma e differenza.</b> Si possono sommare <b>solo i radicali simili</b>, sommando i coefficienti, come i monomi simili. Spesso occorre prima <b>semplificare</b>.</p>
<p>Esempio: √8 + √18 − √2 = 2√2 + 3√2 − √2 = <b>4√2</b>.</p>
<p><b>Prodotto e quoziente.</b> Se gli indici sono uguali: √6 · √3 = √18 = 3√2; √20 : √5 = √4 = 2. Se gli indici sono diversi si <b>riducono allo stesso indice</b> (con il m.c.m. degli indici): √2 · ³√2 = ⁶√(2³) · ⁶√(2²) = ⁶√32.</p>
<p><b>Potenza e radice di radice.</b> (³√2)² = ³√4; √(³√5) = ⁶√5.</p>
<p><b>Prodotti notevoli con i radicali.</b> Valgono tutti i prodotti notevoli: (√a + √b)(√a − √b) = a − b, e (√a ± √b)² = a + b ± 2√(ab). Esempi: (√3 + √2)(√3 − √2) = 3 − 2 = <b>1</b>; (√5 + 1)² = 5 + 1 + 2√5 = <b>6 + 2√5</b>.</p>
<p><b>Confronto.</b> Per confrontare due radicali con indici diversi si riducono allo stesso indice: √3 e ³√5 → ⁶√27 e ⁶√25 → √3 &gt; ³√5.</p>`
    },
    {
      type: "text",
      title: "Razionalizzare il denominatore",
      html: `<p><b>Razionalizzare</b> una frazione significa trasformarla in una equivalente <b>senza radici al denominatore</b>. È utile per confrontare valori e per i calcoli (storicamente, dividere per un numero come 1,41421… a mano era penoso, ora lo fa il computer, ma la tecnica resta preziosa algebricamente).</p>
<p><b>Caso 1: denominatore monomio.</b> Moltiplica numeratore e denominatore per la radice che compare:</p>
<p style="text-align:center">3/√5 = 3√5 / (√5·√5) = <b>3√5 / 5</b></p>
<p>Con radice di indice n, si moltiplica per il radicale che completa l'esponente a n: 1/³√2 = ³√4 / (³√2·³√4) = <b>³√4 / 2</b>.</p>
<p><b>Caso 2: denominatore binomio con radice quadrata.</b> Si moltiplica per il <b>coniugato</b> (stessi termini, segno opposto), così il denominatore diventa una differenza di quadrati: (a − b)(a + b) = a² − b².</p>
<p>2/(√5 − 1) = 2(√5 + 1) / ((√5 − 1)(√5 + 1)) = 2(√5 + 1)/(5 − 1) = <b>(√5 + 1)/2</b></p>
<p>1/(√3 + √2) = (√3 − √2) / (3 − 2) = <b>√3 − √2</b></p>`
    },
    {
      type: "example",
      title: "Esempio: la diagonale del foglio A4",
      html: `<p>I fogli del formato <b>A</b> (A4, A3…) hanno il lato lungo uguale a <b>√2</b> volte il lato corto. Se il lato corto è s, il lungo è s√2. Piegando il foglio a metà si ottiene un rettangolo con lato corto s√2/2 e lato lungo s, e il rapporto è s : (s√2/2) = 2/√2 = <b>√2</b>: la piega conserva la forma, quindi i formati A sono tutti <b>simili</b> tra loro.</p>
<p>Se il lato corto dell'A4 è 21 cm, il lungo è 21√2 ≈ 29,7 cm: infatti l'A4 misura 21 × 29,7 cm. Razionalizzando il rapporto corto/lungo si ottiene 1/√2 = <b>√2/2 ≈ 0,707</b>.</p>`
    },
    {
      type: "widget",
      title: "Il teorema di Pitagora e i radicali",
      widget: "pythagoras",
      options: {},
      caption: "Prova cateti 1 e 1: l'ipotenusa è √2. Con cateti 1 e 2 è √5. Con 3 e 4 è 5, razionale: solo certe terne danno numeri interi."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il segreto pitagorico",
      html: `<p>Secondo la tradizione, la scoperta dell'<b>incommensurabilità</b> della diagonale del quadrato con il suo lato sconvolse la scuola pitagorica, convinta che "tutto è numero" inteso come rapporto di interi. Una leggenda, tramandata da fonti antiche e di cui gli storici dubitano nei dettagli, attribuisce la scoperta a <b>Ippaso di Metaponto</b>, che per averla divulgata sarebbe stato punito. Resta però il fatto storico: i matematici greci scoprirono che esistono grandezze <i>incommensurabili</i>, e questo portò Euclide a un trattamento rigoroso delle proporzioni nei suoi <i>Elementi</i>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? π non è razionale",
      html: `<p>Che π fosse irrazionale fu dimostrato nel 1761 da <b>Johann Heinrich Lambert</b>; che <b>e</b> lo fosse, già da <b>Eulero</b> nel 1737. Nel 1882 <b>Ferdinand von Lindemann</b> mostrò che π è anche <b>trascendente</b> (non è soluzione di nessuna equazione polinomiale a coefficienti interi), il che chiuse il millenario problema della <b>quadratura del cerchio</b>: costruire con riga e compasso un quadrato di area uguale a quella di un cerchio dato è impossibile.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i radicali",
      intro: "Un radicale non è solo un simbolo da manipolare: ecco alcuni modi per vederlo.",
      tabs: [
        {
          label: "📐 Come lato di un quadrato",
          html: `<p>√a è <b>il lato di un quadrato di area a</b>. Così √2 è il lato di un quadrato di area 2: raddoppiando l'area di un quadrato di lato 1 il lato non raddoppia, ma cresce di un fattore √2 ≈ 1,41. In generale, se l'area si moltiplica per k il lato si moltiplica per √k. Semplificare √72 = 6√2 significa che un quadrato di area 72 ha il lato 6 volte più lungo di un quadrato di area 2 (infatti 6² · 2 = 72).</p>`
        },
        {
          label: "🔢 Approssimazione a mano",
          html: `<p>Per stimare √2 si può procedere per <b>intervalli</b> (metodo di bisezione): 1² = 1 &lt; 2 &lt; 4 = 2²; quindi 1 &lt; √2 &lt; 2. Provo 1,5: 2,25 &gt; 2 → 1 &lt; √2 &lt; 1,5; provo 1,4: 1,96 &lt; 2 → 1,4 &lt; √2 &lt; 1,5; provo 1,41: 1,9881; 1,42: 2,0164 → <b>1,41 &lt; √2 &lt; 1,42</b>. Ogni passo guadagna una cifra decimale. I Babilonesi (tavoletta YBC 7289, circa 1800–1600 a.C.) conoscevano per √2 un valore di circa 1,41421, molto preciso.</p>`
        },
        {
          label: "🔼 Come potenza frazionaria",
          html: `<p>Si può scrivere ⁿ√a = a<sup>1/n</sup>, e in generale ⁿ√(aᵐ) = a<sup>m/n</sup>. Così le proprietà dei radicali diventano le proprietà delle potenze che già conosci: √a · √a = a^(1/2)·a^(1/2) = a^1 = a; la radice di radice è (a^(1/n))^(1/m) = a^(1/(nm)). Questa notazione, usata sistematicamente da Newton, semplifica i calcoli e permette di definire le potenze con esponente reale, base dei logaritmi e delle funzioni esponenziali.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei numeri reali e dei radicali",
      nodes: [
        { id: "Q", label: "Numeri razionali ℚ", x: 18, y: 8, color: "#16a34a", html: "Frazioni a/b: decimali finiti o periodici.", why: "Nascono per poter dividere e misurare con precisione, ma non bastano a misurare ogni lunghezza." },
        { id: "irr", label: "Irrazionali", x: 82, y: 8, color: "#f59e0b", html: "Decimali illimitati non periodici: √2, π, e…", why: "La diagonale del quadrato non è commensurabile con il lato: scoperta greca, dimostrabile per assurdo." },
        { id: "R", label: "Numeri reali ℝ", x: 50, y: 30, color: "#6366f1", html: "L'unione di razionali e irrazionali: tutti i punti della retta.", why: "La corrispondenza tra numeri e punti della retta rende ℝ il fondamento dell'analisi." },
        { id: "rad", label: "Radicali", x: 20, y: 55, color: "#a855f7", html: "ⁿ√a: il numero che elevato a n dà a.", why: "Sono l'operazione inversa della potenza; con indice pari c'è la condizione di esistenza a ≥ 0." },
        { id: "prop", label: "Proprietà", x: 50, y: 62, color: "#0ea5e9", html: "Prodotto, quoziente, potenza, invariantiva.", why: "Derivano dalle proprietà delle potenze: ⁿ√a = a^(1/n)." },
        { id: "op", label: "Operazioni", x: 80, y: 55, color: "#ef4444", html: "Semplificare, sommare radicali simili, moltiplicare, razionalizzare.", why: "Rendere i risultati in forma standard permette di confrontarli e di verificare uguaglianze." },
        { id: "raz", label: "Razionalizzazione", x: 80, y: 85, color: "#14b8a6", html: "Eliminare le radici dal denominatore, con il coniugato se è un binomio.", why: "Si basa sul prodotto notevole (a − b)(a + b) = a² − b², che 'cancella' le radici quadrate." },
        { id: "geo", label: "Geometria", x: 20, y: 85, color: "#22c55e", html: "Le radici misurano diagonali, altezze, apotemi.", why: "Il teorema di Pitagora produce naturalmente radicali: da qui nacque la scoperta degli irrazionali." }
      ],
      edges: [
        ["Q", "R", "si completa in"],
        ["irr", "R", "si completa in"],
        ["R", "rad", "ammette"],
        ["rad", "prop", "obbedisce a"],
        ["prop", "op", "permette"],
        ["op", "raz", "include"],
        ["geo", "irr", "li fa scoprire"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: calcoli",
      questions: [
        { type: "mc", q: "√12 è uguale a…", options: ["2√3", "3√2", "6"], answer: 0, explain: "12 = 2² · 3 → √12 = 2√3." },
        { type: "mc", q: "Razionalizzando 6/√3 si ottiene…", options: ["2√3", "6√3", "√3/2"], answer: 0, explain: "6√3/3 = 2√3." },
        { type: "num", q: "Calcola (√7 + √3)(√7 − √3).", answer: 4, explain: "Differenza di quadrati: 7 − 3 = 4." }
      ]
    }
  ],
  glossary: [
    { t: "Numero irrazionale", d: "Numero con scrittura decimale illimitata e non periodica; non si può scrivere come frazione." },
    { t: "Numeri reali", d: "Insieme ℝ formato da razionali e irrazionali: corrisponde a tutti i punti della retta." },
    { t: "Radice n-esima", d: "ⁿ√a è il numero che elevato a n dà a." },
    { t: "Radicando", d: "Il numero o l'espressione sotto il segno di radice." },
    { t: "Indice", d: "Il numero n che indica la radice (2 per la quadrata, 3 per la cubica…)." },
    { t: "Radicali simili", d: "Radicali con stesso indice e stesso radicando: si sommano come i monomi simili." },
    { t: "Proprietà invariantiva", d: "Moltiplicando o dividendo indice ed esponente del radicando per lo stesso numero il radicale non cambia." },
    { t: "Razionalizzazione", d: "Trasformazione di una frazione in una equivalente senza radicali al denominatore." },
    { t: "Coniugato", d: "Il binomio con gli stessi termini ma segno opposto in mezzo: √a + √b e √a − √b." },
    { t: "Assurdo (per)", d: "Dimostrazione che parte dal contrario della tesi e arriva a una contraddizione." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale numero è irrazionale?", options: ["√81", "√8", "0,333…"], answer: 1, explain: "√81 = 9 e 0,333… = 1/3 sono razionali; √8 = 2√2 è irrazionale." },
      { type: "mc", q: "√75 è uguale a…", options: ["5√3", "3√5", "15√5"], answer: 0, explain: "75 = 5² · 3, quindi √75 = 5√3." },
      { type: "num", q: "Calcola 3√2 + 5√2 − √2 e dai il coefficiente di √2.", answer: 7, explain: "(3 + 5 − 1)√2 = 7√2." },
      { type: "mc", q: "Il valore di √(a²) per a = −4 è…", options: ["−4", "4", "non esiste"], answer: 1, explain: "√(a²) = |a| = 4." },
      { type: "mc", q: "Razionalizza 4/(√5 − 1).", options: ["√5 + 1", "(√5 + 1)/4", "4(√5 − 1)"], answer: 0, explain: "4(√5 + 1)/(5 − 1) = √5 + 1." },
      { type: "num", q: "Calcola (√5 + 2)(√5 − 2).", answer: 1, explain: "5 − 4 = 1." },
      { type: "tf", q: "√(a + b) = √a + √b per ogni a, b ≥ 0.", answer: false, explain: "√(9 + 16) = 5, ma √9 + √16 = 7." },
      { type: "mc", q: "L'espressione √(2x − 6) ha significato per…", options: ["x ≥ 3", "x &gt; 6", "ogni x"], answer: 0, explain: "2x − 6 ≥ 0 → x ≥ 3." },
      { type: "order", q: "Metti in ordine i passi della dimostrazione che √2 è irrazionale.", items: ["Si suppone √2 = a/b con frazione ridotta", "Si ottiene a² = 2b², quindi a è pari", "Si ottiene che anche b è pari", "Contraddizione con la riduzione ai minimi termini"], explain: "Il ragionamento per assurdo porta a due numeri pari in una frazione che doveva essere ridotta." },
      { type: "text", q: "Come si chiama il binomio √a − √b rispetto a √a + √b, usato per razionalizzare?", answer: ["coniugato", "il coniugato", "binomio coniugato"], explain: "Il coniugato: moltiplicando si ottiene a − b." }
    ]
  }
});
