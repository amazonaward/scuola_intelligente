TOPIC('it', {
  id: "l2-mat-equazioni-secondo-grado",
  title: "Equazioni di secondo grado",
  intro: "Un pallone lanciato in alto, l'area di un campo da calcio di cui conosci il perimetro, il prezzo ottimale per massimizzare un guadagno: in tutte queste situazioni l'incognita compare <b>al quadrato</b>. Le <b>equazioni di secondo grado</b> sono tra i problemi più antichi della matematica (già i Babilonesi le risolvevano) e hanno una formula risolutiva potente e compatta. Impareremo a usarla, a capire il ruolo del <b>discriminante</b> (il numero che decide quante soluzioni ci sono), a legare le soluzioni ai coefficienti e a <b>scomporre</b> i trinomi.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Forma normale e primi casi",
      html: `<p>Un'equazione di <b>secondo grado</b> (o quadratica) in x, ridotta a <b>forma normale</b>, è:</p>
<p style="text-align:center"><b>ax² + bx + c = 0 &nbsp;&nbsp; con a ≠ 0</b></p>
<p>a, b, c sono i <b>coefficienti</b> (a quello di x², b quello di x, c il <b>termine noto</b>). Se fosse a = 0 l'equazione sarebbe di primo grado. Le <b>soluzioni</b> (o radici) sono i valori di x che la rendono vera; ce ne sono al massimo due.</p>
<p>Se b o c (o entrambi) sono nulli, l'equazione è <b>incompleta</b> e si risolve senza formula:</p>
<ul>
<li><b>Pura</b> (b = 0): ax² + c = 0 → x² = −c/a. Se −c/a &gt; 0 le soluzioni sono <b>x = ±√(−c/a)</b>; se −c/a &lt; 0 non ci sono soluzioni reali. Es.: 3x² − 12 = 0 → x² = 4 → x = ±2.</li>
<li><b>Spuria</b> (c = 0): ax² + bx = 0 → <b>x(ax + b) = 0</b> (raccoglimento) → x = 0 oppure x = −b/a. Si usa la <b>legge di annullamento del prodotto</b>: un prodotto è zero se e solo se lo è almeno un fattore. Es.: x² − 7x = 0 → x(x − 7) = 0 → x = 0 o x = 7. Una soluzione è sempre 0!</li>
<li><b>Monomia</b> (b = c = 0): ax² = 0 → <b>x = 0</b> (doppia).</li>
</ul>
<p>⚠️ Errore classico: nella spuria x² = 7x non dividere per x (perderesti x = 0): porta tutto a sinistra e raccogli.</p>`
    },
    {
      type: "text",
      title: "La formula risolutiva e il discriminante",
      html: `<p>Per l'equazione completa ax² + bx + c = 0 si usa la <b>formula risolutiva</b>:</p>
<p style="text-align:center"><b>x = (−b ± √Δ) / (2a) &nbsp;&nbsp; con &nbsp; Δ = b² − 4ac</b></p>
<p>Il numero <b>Δ</b> (delta, o <b>discriminante</b>) decide quante soluzioni reali ci sono:</p>
<ul>
<li><b>Δ &gt; 0</b>: <b>due soluzioni reali distinte</b> x₁ = (−b − √Δ)/(2a) e x₂ = (−b + √Δ)/(2a).</li>
<li><b>Δ = 0</b>: <b>due soluzioni reali coincidenti</b> (una soluzione doppia): x = −b/(2a).</li>
<li><b>Δ &lt; 0</b>: <b>nessuna soluzione reale</b>, perché non esiste la radice quadrata di un numero negativo.</li>
</ul>
<p><b>Esempi.</b></p>
<ul>
<li>x² − 5x + 6 = 0: Δ = 25 − 24 = 1 → x = (5 ± 1)/2 → <b>x = 2 oppure x = 3</b>.</li>
<li>x² − 4x + 4 = 0: Δ = 16 − 16 = 0 → <b>x = 2</b> (doppia).</li>
<li>x² + x + 1 = 0: Δ = 1 − 4 = −3 &lt; 0 → <b>nessuna soluzione reale</b>.</li>
<li>2x² − 3x − 2 = 0: Δ = 9 + 16 = 25 → x = (3 ± 5)/4 → <b>x = 2 oppure x = −1/2</b>.</li>
</ul>
<p><b>Formula ridotta</b>: se b è pari, b = 2k (cioè k = b/2), conviene usare Δ/4 = k² − ac e <b>x = (−k ± √(Δ/4))/a</b>. Es.: x² − 6x − 7 = 0: k = −3, Δ/4 = 9 + 7 = 16 → x = 3 ± 4 → <b>x = 7 oppure x = −1</b>.</p>`
    },
    {
      type: "svg",
      title: "Il discriminante e la parabola",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="100" y="26" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">Δ &gt; 0</text>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#9a3412" font-weight="bold">Δ = 0</text>
<text x="500" y="26" font-size="16" text-anchor="middle" fill="#991b1b" font-weight="bold">Δ &lt; 0</text>
<line x1="10" y1="140" x2="190" y2="140" stroke="#475569" stroke-width="2"/>
<path d="M20 70 Q100 270 180 70" fill="none" stroke="#2563eb" stroke-width="4"/>
<circle cx="56" cy="140" r="7" fill="#16a34a"/>
<circle cx="144" cy="140" r="7" fill="#16a34a"/>
<text x="100" y="220" font-size="16" text-anchor="middle" fill="#166534">2 soluzioni</text>
<line x1="210" y1="170" x2="390" y2="170" stroke="#475569" stroke-width="2"/>
<path d="M220 70 Q300 270 380 70" fill="none" stroke="#2563eb" stroke-width="4"/>
<circle cx="300" cy="170" r="7" fill="#ea580c"/>
<text x="300" y="220" font-size="16" text-anchor="middle" fill="#9a3412">1 soluzione (doppia)</text>
<line x1="410" y1="200" x2="590" y2="200" stroke="#475569" stroke-width="2"/>
<path d="M420 70 Q500 270 580 70" fill="none" stroke="#2563eb" stroke-width="4"/>
<text x="500" y="240" font-size="16" text-anchor="middle" fill="#991b1b">nessuna soluzione reale</text>
<text x="300" y="282" font-size="14" text-anchor="middle" fill="#334155">Le soluzioni sono i punti dove la parabola y = ax² + bx + c incontra l'asse x</text>
</svg>`,
      caption: "Il grafico di y = ax² + bx + c è una parabola: le soluzioni dell'equazione sono le ascisse dei punti in cui tocca l'asse x."
    },
    {
      type: "remember",
      title: "Il metodo",
      html: `<ol>
<li>Porta l'equazione in <b>forma normale</b> ax² + bx + c = 0 (con a &gt; 0 se possibile).</li>
<li>Se è <b>incompleta</b>, usa il raccoglimento o la radice (pura / spuria).</li>
<li>Se è completa, calcola <b>Δ = b² − 4ac</b> (o Δ/4 se b è pari).</li>
<li>Guarda il segno: Δ &lt; 0 nessuna soluzione reale; Δ = 0 una doppia; Δ &gt; 0 due distinte.</li>
<li>Applica la formula e semplifica.</li>
<li><b>Verifica</b>: sostituisci le soluzioni, oppure controlla somma e prodotto (vedi dopo).</li>
</ol>`
    },
    {
      type: "widget",
      title: "Quante soluzioni ha?",
      widget: "classify",
      options: { groups: ["Due soluzioni distinte", "Una soluzione doppia", "Nessuna soluzione reale"], items: [
        ["x² − 5x + 6 = 0", 0],
        ["x² − 4x + 4 = 0", 1],
        ["x² + 2x + 5 = 0", 2],
        ["2x² − x − 1 = 0", 0],
        ["x² + 6x + 9 = 0", 1],
        ["x² + x + 1 = 0", 2],
        ["x² − 3 = 0", 0]
      ] },
      caption: "Calcola Δ = b² − 4ac e guardane il segno: ti dice quante soluzioni reali ci sono."
    },
    {
      type: "example",
      title: "Esempio pratico: il campo rettangolare",
      html: `<p>Un campo rettangolare ha perimetro 28 m e area 48 m². Quali sono le sue dimensioni?</p>
<ul>
<li>Semiperimetro: base + altezza = 14. Sia x la base: l'altezza è 14 − x.</li>
<li>Area: x(14 − x) = 48 → 14x − x² = 48 → <b>x² − 14x + 48 = 0</b>.</li>
<li>Δ/4 = 49 − 48 = 1 → x = 7 ± 1 → x = 6 oppure x = 8.</li>
<li>Le due soluzioni corrispondono allo stesso rettangolo (6 × 8 oppure 8 × 6). Verifica: perimetro 2(6 + 8) = 28 ✔️, area 48 ✔️.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: il pallone lanciato",
      html: `<p>Un pallone è lanciato verso l'alto da terra a 20 m/s. Con g ≈ 10 m/s², l'altezza dopo t secondi è, in modello semplificato, h(t) = 20t − 5t². Dopo quanto tempo torna a terra?</p>
<ul>
<li>Torna a terra quando h = 0: 20t − 5t² = 0 → 5t(4 − t) = 0 (equazione <b>spuria</b>).</li>
<li>t = 0 (il lancio) oppure <b>t = 4 s</b> (l'atterraggio).</li>
<li>Per simmetria della parabola il punto più alto è a metà, t = 2 s, con h(2) = 40 − 20 = <b>20 m</b>.</li>
<li>Quando il pallone è a 15 m? 20t − 5t² = 15 → t² − 4t + 3 = 0 → t = 1 oppure t = 3: passa per i 15 m <b>due volte</b>, salendo e scendendo.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: formula e discriminante",
      questions: [
        { type: "num", q: "Calcola il discriminante di x² − 6x + 5 = 0.", answer: 16, explain: "Δ = 36 − 20 = 16." },
        { type: "mc", q: "L'equazione x² + 4 = 0 ha…", options: ["x = ±2", "nessuna soluzione reale", "x = 0"], answer: 1, explain: "x² = −4 è impossibile in ℝ: un quadrato non può essere negativo." },
        { type: "mc", q: "Le soluzioni di x² − 7x = 0 sono…", options: ["0 e 7", "solo 7", "±7"], answer: 0, explain: "x(x − 7) = 0 → x = 0 oppure x = 7." }
      ]
    },
    {
      type: "text",
      title: "Relazioni tra radici e coefficienti",
      html: `<p>Se l'equazione ax² + bx + c = 0 ha radici x₁ e x₂ (reali, con Δ ≥ 0), la formula risolutiva mostra due relazioni sorprendenti (<b>formule di Viète</b>):</p>
<p style="text-align:center"><b>somma: x₁ + x₂ = −b/a &nbsp;&nbsp;&nbsp;&nbsp; prodotto: x₁ · x₂ = c/a</b></p>
<p><b>Perché?</b> Sommando (−b − √Δ)/(2a) + (−b + √Δ)/(2a) i radicali si annullano e resta −2b/(2a) = −b/a. Moltiplicando si ottiene (b² − Δ)/(4a²) = 4ac/(4a²) = c/a.</p>
<p><b>Usi pratici.</b></p>
<ul>
<li><b>Controllare</b> le soluzioni senza sostituirle: x² − 5x + 6 = 0 ha somma 5 e prodotto 6; infatti 2 + 3 = 5 e 2 · 3 = 6.</li>
<li><b>Risolvere a mente</b> equazioni con a = 1: cerca due numeri di cui conosci somma s = −b e prodotto p = c. x² − 7x + 12 = 0: due numeri con somma 7 e prodotto 12 → <b>3 e 4</b>.</li>
<li><b>Costruire un'equazione</b> con due radici date: <b>x² − s·x + p = 0</b>. Radici 2 e −5: s = −3, p = −10 → x² + 3x − 10 = 0.</li>
<li><b>Dedurre il segno delle radici</b>: se p &lt; 0 le radici hanno segni opposti; se p &gt; 0 e s &gt; 0 sono entrambe positive; se p &gt; 0 e s &lt; 0 entrambe negative.</li>
</ul>
<p><b>Scomposizione del trinomio.</b> Se Δ ≥ 0, <b>ax² + bx + c = a(x − x₁)(x − x₂)</b>. Es.: 2x² − 3x − 2 = 2(x − 2)(x + 1/2) = (x − 2)(2x + 1). Se Δ &lt; 0 il trinomio <b>non si scompone</b> (in ℝ): si dice irriducibile.</p>`
    },
    {
      type: "example",
      title: "Esempio: equazioni con parametro e fratte",
      html: `<p><b>Con parametro.</b> Per quali valori di k l'equazione x² − 4x + k = 0 ha due soluzioni reali distinte? Serve Δ &gt; 0: 16 − 4k &gt; 0 → <b>k &lt; 4</b>. Con k = 4 una soluzione doppia (x = 2); con k &gt; 4 nessuna.</p>
<p><b>Fratta.</b> 1/(x − 1) + 1/x = 3/2. CE: x ≠ 0, x ≠ 1. m.c.m. = 2x(x − 1): 2x + 2(x − 1) = 3x(x − 1) → 4x − 2 = 3x² − 3x → 3x² − 7x + 2 = 0. Δ = 49 − 24 = 25 → x = (7 ± 5)/6 → x = 2 oppure x = 1/3. Entrambe rispettano le CE: <b>soluzioni accettabili</b>.</p>
<p>Come sempre, nelle equazioni fratte si controllano le condizioni di esistenza alla fine.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Quattromila anni di quadratiche",
      html: `<p>Su tavolette d'argilla babilonesi risalenti a circa <b>4000 anni fa</b> compaiono problemi che si traducono in equazioni di secondo grado (aree di rettangoli con dato il semiperimetro, come il nostro esempio del campo) con procedimenti equivalenti alla formula. Nel IX secolo <b>al-Khwārizmī</b> le classificò e le risolse con costruzioni geometriche (il <b>completamento del quadrato</b>); i simboli moderni arrivarono molto dopo, con <b>Viète</b> e <b>Descartes</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? E il terzo, il quarto, il quinto grado?",
      html: `<p>Per le equazioni di terzo grado una formula fu trovata nel Cinquecento (Scipione del Ferro, Niccolò Tartaglia, Gerolamo Cardano), poco dopo per quelle di quarto grado (Lodovico Ferrari). Per il <b>quinto grado</b>, invece, nel 1824 il norvegese <b>Niels Henrik Abel</b> (dopo un tentativo di Paolo Ruffini) dimostrò che <b>non esiste una formula generale con radicali</b>. Perfino il celebre <b>rapporto aureo</b> φ è soluzione di una quadratica: x² − x − 1 = 0, con Δ = 5 e φ = (1 + √5)/2 ≈ 1,618.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per risolvere",
      intro: "La formula è un mezzo potente, ma non l'unico. Ecco metodi storici e visivi che aiutano a capire da dove viene.",
      tabs: [
        {
          label: "🟦 Completare il quadrato",
          html: `<p>È il metodo di al-Khwārizmī, e da esso si ricava la formula. Prendi <b>x² + 6x = 16</b>: immagina un quadrato di lato x e due rettangoli 3 × x affiancati; per farne un quadrato più grande manca un quadratino 3 × 3 = 9. Aggiungo 9 a entrambi i membri: <b>x² + 6x + 9 = 25</b>, cioè <b>(x + 3)² = 25</b>. Quindi x + 3 = ±5 → <b>x = 2 oppure x = −8</b>. Lo stesso passaggio con coefficienti generali (dividi per a, aggiungi (b/2a)² a entrambi i membri) porta alla formula risolutiva.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><rect x="60" y="50" width="120" height="120" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/><text x="120" y="118" font-size="18" text-anchor="middle" fill="#1d4ed8" font-weight="bold">x²</text><rect x="180" y="50" width="60" height="120" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/><text x="210" y="118" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">3x</text><rect x="60" y="170" width="120" height="60" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/><text x="120" y="206" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">3x</text><rect x="180" y="170" width="60" height="60" fill="#fecaca" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/><text x="210" y="206" font-size="16" text-anchor="middle" fill="#991b1b" font-weight="bold">9</text><text x="270" y="110" font-size="16" fill="#334155">x² + 6x = 16</text><text x="270" y="140" font-size="16" fill="#334155">+ 9 per completare</text><text x="270" y="170" font-size="16" fill="#334155">(x + 3)² = 25</text><text x="270" y="200" font-size="16" fill="#334155" font-weight="bold">x = 2 oppure x = −8</text></svg>`
        },
        {
          label: "🔍 Somma e prodotto",
          html: `<p>Per x² + bx + c = 0 con coefficiente 1, cerca due numeri che <b>moltiplicati</b> diano c e <b>sommati</b> diano −b. Esempio: x² − 8x + 15 = 0. Coppie con prodotto 15: (1, 15), (3, 5). Con somma 8: <b>3 e 5</b>. Quindi x = 3 oppure x = 5. È la scomposizione in (x − 3)(x − 5) = 0 e la legge di annullamento del prodotto. Funziona con numeri interi piccoli; altrimenti si usa la formula.</p>`
        },
        {
          label: "📈 Con la parabola",
          html: `<p>Disegna y = x² − 4x + 3. È una parabola che incontra l'asse x in x = 1 e x = 3: sono le soluzioni di x² − 4x + 3 = 0. Il <b>vertice</b> sta a metà tra le due radici, in x = −b/(2a) = 2, dove y = −1 (il minimo). Δ &gt; 0: la parabola taglia l'asse; Δ = 0: lo sfiora nel vertice; Δ &lt; 0: non lo tocca. Se a &lt; 0 la parabola "guarda in giù" ma le soluzioni restano i punti sull'asse x.</p>`,
          widget: "numberLine",
          options: { min: -2, max: 6, step: 1, marks: [1, 3, 2] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle equazioni di secondo grado",
      nodes: [
        { id: "eq", label: "ax² + bx + c = 0", x: 50, y: 6, color: "#6366f1", html: "Equazione di secondo grado (a ≠ 0).", why: "Nasce da problemi di aree e di moti, già nell'antica Babilonia; l'incognita compare al quadrato." },
        { id: "inc", label: "Incomplete", x: 15, y: 30, color: "#16a34a", html: "Pura (b = 0), spuria (c = 0), monomia (b = c = 0).", why: "Si risolvono con la radice o con il raccoglimento e la legge di annullamento del prodotto." },
        { id: "delta", label: "Discriminante Δ", x: 50, y: 32, color: "#f59e0b", html: "Δ = b² − 4ac: decide il numero di soluzioni.", why: "È il numero sotto la radice nella formula: non si può estrarre la radice di un negativo (in ℝ), quindi con Δ &lt; 0 non ci sono soluzioni reali." },
        { id: "formula", label: "Formula risolutiva", x: 85, y: 30, color: "#a855f7", html: "x = (−b ± √Δ)/(2a).", why: "Deriva dal completamento del quadrato su ax² + bx + c, metodo geometrico di al-Khwārizmī." },
        { id: "viete", label: "Somma e prodotto", x: 20, y: 58, color: "#0ea5e9", html: "x₁ + x₂ = −b/a; x₁x₂ = c/a.", why: "Segue dalla formula (i radicali si annullano nella somma e si ottiene una differenza di quadrati nel prodotto); è l'idea di Viète." },
        { id: "scomp", label: "Scomposizione", x: 80, y: 58, color: "#ef4444", html: "ax² + bx + c = a(x − x₁)(x − x₂).", why: "Se x₁ è radice, (x − x₁) è un fattore: teorema di Ruffini sulle radici dei polinomi." },
        { id: "para", label: "Parabola", x: 50, y: 78, color: "#14b8a6", html: "y = ax² + bx + c: le soluzioni sono le intersezioni con l'asse x.", why: "Collega l'algebra alla geometria analitica: Δ dice se la parabola taglia, tocca o non raggiunge l'asse x." },
        { id: "prob", label: "Problemi", x: 50, y: 94, color: "#22c55e", html: "Aree, moti, ottimizzazione: due soluzioni, spesso una sola accettabile.", why: "Il contesto può scartare una soluzione (lunghezze negative, tempi prima dell'inizio)." }
      ],
      edges: [
        ["eq", "inc", "se b o c nulli"],
        ["eq", "delta", "si studia con"],
        ["delta", "formula", "entra in"],
        ["formula", "viete", "implica"],
        ["viete", "scomp", "porta a"],
        ["delta", "para", "si vede in"],
        ["prob", "eq", "si traducono in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: radici e scomposizione",
      questions: [
        { type: "num", q: "In x² − 9x + 14 = 0 qual è la somma delle radici?", answer: 9, explain: "x₁ + x₂ = −b/a = 9 (le radici sono 2 e 7)." },
        { type: "mc", q: "Il trinomio x² − 5x + 6 si scompone in…", options: ["(x − 2)(x − 3)", "(x + 2)(x + 3)", "(x − 1)(x − 6)"], answer: 0, explain: "Le radici sono 2 e 3: (x − 2)(x − 3)." },
        { type: "tf", q: "Un'equazione di secondo grado con c = 0 ha sempre la soluzione x = 0.", answer: true, explain: "ax² + bx = x(ax + b) = 0: una radice è 0 e l'altra è −b/a." }
      ]
    }
  ],
  glossary: [
    { t: "Equazione di secondo grado", d: "Equazione riducibile a ax² + bx + c = 0 con a ≠ 0." },
    { t: "Discriminante", d: "Il numero Δ = b² − 4ac che stabilisce quante soluzioni reali ha l'equazione." },
    { t: "Radici (soluzioni)", d: "Valori di x che rendono vera l'equazione." },
    { t: "Equazione pura", d: "ax² + c = 0, senza termine in x." },
    { t: "Equazione spuria", d: "ax² + bx = 0, senza termine noto." },
    { t: "Legge di annullamento del prodotto", d: "Un prodotto è zero se e solo se almeno un fattore è zero." },
    { t: "Formula ridotta", d: "Formula con Δ/4 usabile quando b è pari." },
    { t: "Relazioni di Viète", d: "x₁ + x₂ = −b/a e x₁·x₂ = c/a." },
    { t: "Parabola", d: "Curva grafico di y = ax² + bx + c." },
    { t: "Completamento del quadrato", d: "Trasformazione di x² + bx in un quadrato di binomio aggiungendo (b/2)²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Le soluzioni di x² − 5x + 4 = 0 sono…", options: ["1 e 4", "−1 e −4", "2 e 3"], answer: 0, explain: "Δ = 25 − 16 = 9 → x = (5 ± 3)/2 = 4 oppure 1." },
      { type: "num", q: "Calcola Δ per 2x² + 3x − 2 = 0.", answer: 25, explain: "Δ = 9 − 4·2·(−2) = 25." },
      { type: "mc", q: "L'equazione x² + 2x + 5 = 0 ha…", options: ["due soluzioni reali", "una soluzione doppia", "nessuna soluzione reale"], answer: 2, explain: "Δ = 4 − 20 = −16 &lt; 0." },
      { type: "mc", q: "Le soluzioni di 4x² − 16 = 0 sono…", options: ["x = ±2", "x = 4", "x = ±4"], answer: 0, explain: "x² = 4 → x = ±2." },
      { type: "mc", q: "Le soluzioni di x² − 3x = 0 sono…", options: ["0 e 3", "3 e −3", "solo 3"], answer: 0, explain: "x(x − 3) = 0 → x = 0 o x = 3." },
      { type: "num", q: "In 2x² − 8x + 6 = 0 qual è il prodotto delle radici?", answer: 3, explain: "x₁x₂ = c/a = 6/2 = 3 (le radici sono 1 e 3)." },
      { type: "num", q: "Due numeri hanno somma 11 e prodotto 24. Quale è il maggiore?", answer: 8, explain: "x² − 11x + 24 = 0 → 3 e 8." },
      { type: "tf", q: "Se Δ = 0 l'equazione di secondo grado non ha soluzioni.", answer: false, explain: "Con Δ = 0 c'è una soluzione doppia x = −b/(2a)." },
      { type: "num", q: "Per quale valore di k l'equazione x² − 6x + k = 0 ha una soluzione doppia?", answer: 9, explain: "Δ = 36 − 4k = 0 → k = 9 (x = 3)." },
      { type: "order", q: "Metti in ordine i passi per risolvere un'equazione completa.", items: ["Portare in forma normale ax² + bx + c = 0", "Calcolare Δ = b² − 4ac", "Studiare il segno di Δ", "Applicare x = (−b ± √Δ)/(2a)", "Verificare con somma e prodotto"], explain: "La forma normale e il segno di Δ vengono prima della formula; il controllo chiude." }
    ]
  }
});
