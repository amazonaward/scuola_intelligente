TOPIC('it', {
  id: "l1-mat-scomposizione",
  title: "Scomposizione dei polinomi",
  intro: "Come un numero come 84 si può scrivere come 2·2·3·7, anche un polinomio si può spezzare in un <b>prodotto di fattori</b> più semplici. <b>Scomporre</b> è il contrario di sviluppare: è lo strumento che renderà possibili le frazioni algebriche, le equazioni di grado superiore al primo e quasi tutta l'algebra dei prossimi anni. In questa lezione vediamo le tecniche fondamentali: raccoglimento, prodotti notevoli, trinomio speciale e regola di Ruffini.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Che cosa significa scomporre",
      html: `<p><b>Scomporre</b> un polinomio significa scriverlo come <b>prodotto di polinomi</b> di grado minore (i <b>fattori</b>). È l'operazione inversa della moltiplicazione:</p>
<p style="text-align:center"><b>(x + 2)(x + 3) = x² + 5x + 6</b><br>sviluppare →<br>← scomporre</p>
<p>Un polinomio che non si può più spezzare in fattori di grado minore (con coefficienti razionali) si dice <b>irriducibile</b>, come i numeri primi: x + 1 e x² + 1 sono irriducibili. Scomporre "fino in fondo" significa fermarsi solo quando tutti i fattori sono irriducibili.</p>
<p>A che serve? Un prodotto è <b>zero</b> solo se un fattore è zero (legge di annullamento del prodotto), quindi scomposto un polinomio si vedono subito i valori che lo annullano; inoltre i fattori comuni si possono <b>semplificare</b> nelle frazioni. Scomporre è la chiave di tutto.</p>`
    },
    {
      type: "text",
      title: "1) Il raccoglimento totale",
      html: `<p>È l'applicazione "al contrario" della proprietà distributiva: a·b + a·c = <b>a(b + c)</b>. Si cerca il <b>massimo comune divisore</b> (MCD) di tutti i termini: coefficiente numerico più grande che li divide tutti, e lettere comuni con l'<b>esponente più piccolo</b>.</p>
<p>Esempio: <b>6x³ − 9x² + 3x</b>. Il MCD dei coefficienti 6, 9, 3 è 3; la lettera x compare in tutti con esponente minimo 1. Quindi:</p>
<p style="text-align:center">6x³ − 9x² + 3x = <b>3x(2x² − 3x + 1)</b></p>
<p>Verifica: moltiplica 3x per ogni termine della parentesi e ritrovi l'originale. Attenzione: se un termine coincide col MCD, nella parentesi resta <b>1</b> (non zero!): 3x : 3x = 1.</p>
<p><b>Raccoglimento parziale</b>: con quattro termini si raccoglie a gruppi, sperando che resti lo stesso fattore tra parentesi:</p>
<p style="text-align:center">ax + ay + bx + by = a(x + y) + b(x + y) = <b>(x + y)(a + b)</b></p>`
    },
    {
      type: "svg",
      title: "Scomporre è ricostruire un rettangolo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="50" width="160" height="150" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="220" y="50" width="90" height="150" fill="#86efac" stroke="#166534" stroke-width="3"/>
<rect x="60" y="200" width="160" height="60" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<rect x="220" y="200" width="90" height="60" fill="#fca5a5" stroke="#991b1b" stroke-width="3"/>
<text x="140" y="132" font-size="26" text-anchor="middle" fill="#1e1b4b" font-weight="bold">x²</text>
<text x="265" y="132" font-size="22" text-anchor="middle" fill="#14532d" font-weight="bold">3x</text>
<text x="140" y="238" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">2x</text>
<text x="265" y="238" font-size="22" text-anchor="middle" fill="#7f1d1d" font-weight="bold">6</text>
<text x="140" y="38" font-size="18" text-anchor="middle" fill="#334155">x</text>
<text x="265" y="38" font-size="18" text-anchor="middle" fill="#334155">3</text>
<text x="42" y="130" font-size="18" text-anchor="middle" fill="#334155">x</text>
<text x="42" y="237" font-size="18" text-anchor="middle" fill="#334155">2</text>
<text x="340" y="100" font-size="18" fill="#1f2937" font-weight="bold">Area totale:</text>
<text x="340" y="130" font-size="18" fill="#1f2937">x² + 3x + 2x + 6 = x² + 5x + 6</text>
<text x="340" y="170" font-size="18" fill="#1f2937" font-weight="bold">Lati: (x + 3) e (x + 2)</text>
<text x="340" y="210" font-size="20" fill="#4338ca" font-weight="bold">x² + 5x + 6 = (x + 2)(x + 3)</text>
</svg>`,
      caption: "Un polinomio di secondo grado come area: scomporlo significa trovare le misure dei lati del rettangolo."
    },
    {
      type: "text",
      title: "2) Scomposizione con i prodotti notevoli",
      html: `<p>Leggendo "al contrario" i prodotti notevoli si ottengono le scomposizioni più utili:</p>
<table>
<tr><th>Polinomio</th><th>Scomposizione</th><th>Nome</th></tr>
<tr><td>A² − B²</td><td>(A + B)(A − B)</td><td>differenza di quadrati</td></tr>
<tr><td>A² + 2AB + B²</td><td>(A + B)²</td><td>quadrato di binomio</td></tr>
<tr><td>A² − 2AB + B²</td><td>(A − B)²</td><td>quadrato di binomio</td></tr>
<tr><td>A³ + 3A²B + 3AB² + B³</td><td>(A + B)³</td><td>cubo di binomio</td></tr>
<tr><td>A³ + B³</td><td>(A + B)(A² − AB + B²)</td><td>somma di cubi</td></tr>
<tr><td>A³ − B³</td><td>(A − B)(A² + AB + B²)</td><td>differenza di cubi</td></tr>
</table>
<p><b>Esempi.</b></p>
<ul>
<li>4x² − 25 = (2x)² − 5² = <b>(2x + 5)(2x − 5)</b></li>
<li>9x² + 12x + 4: i quadrati sono (3x)² e 2²; il doppio prodotto 2·3x·2 = 12x ✔ → <b>(3x + 2)²</b></li>
<li>x⁴ − 16 = (x²)² − 4² = (x² + 4)(x² − 4) = <b>(x² + 4)(x + 2)(x − 2)</b>: il fattore x² + 4 è irriducibile, ma x² − 4 si può scomporre ancora!</li>
<li>x³ + 8 = x³ + 2³ = <b>(x + 2)(x² − 2x + 4)</b></li>
</ul>
<p>⚠️ La <b>somma</b> di due quadrati (x² + 9) <b>non</b> si scompone: (x + 3)² dà x² + 6x + 9, non x² + 9.</p>`
    },
    {
      type: "example",
      title: "Calcolo mentale con la differenza di quadrati",
      html: `<p>Quanto fa <b>99 × 101</b> senza calcolatrice? Scrivi 99 = 100 − 1 e 101 = 100 + 1: è (a − b)(a + b) = a² − b².</p>
<p>99 × 101 = 100² − 1² = 10 000 − 1 = <b>9 999</b>.</p>
<p>Allo stesso modo 48 × 52 = (50 − 2)(50 + 2) = 2 500 − 4 = <b>2 496</b>. Un'identità algebrica che diventa un trucco da campioni di calcolo mentale.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: raccoglimento e prodotti notevoli",
      questions: [
        { type: "num", q: "6x + 12 = 6(x + ?). Che numero va al posto del punto interrogativo?", answer: 2, explain: "12 : 6 = 2, quindi 6x + 12 = 6(x + 2)." },
        { type: "mc", q: "Come si scompone x² − 49?", options: ["(x − 7)²", "(x + 7)(x − 7)", "(x + 49)(x − 1)"], answer: 1, explain: "È una differenza di quadrati: x² − 7² = (x + 7)(x − 7)." },
        { type: "tf", q: "x² + 9 = (x + 3)².", answer: false, explain: "(x + 3)² = x² + 6x + 9: manca il doppio prodotto. La somma di quadrati x² + 9 è irriducibile." }
      ]
    },
    {
      type: "text",
      title: "3) Il trinomio speciale x² + sx + p",
      html: `<p>Un trinomio di secondo grado con coefficiente 1 davanti a x² si scompone, quando possibile, cercando <b>due numeri m e n</b> tali che:</p>
<p style="text-align:center">m + n = s (coefficiente di x) &nbsp;&nbsp; e &nbsp;&nbsp; m · n = p (termine noto)</p>
<p>Allora <b>x² + sx + p = (x + m)(x + n)</b>. Il perché è semplice: (x + m)(x + n) = x² + (m + n)x + m·n.</p>
<p><b>Esempio 1</b>: x² − 5x + 6. Cerco due numeri con prodotto 6 e somma −5: sono −2 e −3. Quindi <b>(x − 2)(x − 3)</b>.</p>
<p><b>Esempio 2</b>: x² + x − 12. Prodotto −12 (segni opposti), somma +1: coppie di fattori di 12: (1,12), (2,6), (3,4); quella con differenza 1 è 3 e 4, e il più grande deve essere positivo: +4 e −3. Quindi <b>(x + 4)(x − 3)</b>.</p>
<p><b>Trucco dei segni</b>: se p &gt; 0 i due numeri hanno lo stesso segno (quello di s); se p &lt; 0 hanno segno opposto e il maggiore in valore assoluto ha il segno di s. Se non esistono numeri interi adatti, il trinomio è (di solito) irriducibile.</p>`
    },
    {
      type: "widget",
      title: "Quale tecnica uso?",
      widget: "classify",
      options: { groups: ["Raccoglimento", "Differenza di quadrati", "Trinomio speciale", "Quadrato di binomio"], items: [
        ["6x² + 9x", 0],
        ["x² − 36", 1],
        ["x² + 5x + 6", 2],
        ["4x² + 12x + 9", 3],
        ["4a² − 9b²", 1],
        ["x² − x − 12", 2],
        ["9x² − 6x + 1", 3],
        ["ab + ac", 0]
      ] },
      caption: "Prima di calcolare, riconosci la forma: è metà del lavoro."
    },
    {
      type: "text",
      title: "4) La regola di Ruffini",
      html: `<p>Per polinomi di grado 3 o superiore senza una forma "speciale" si usa il <b>teorema di Ruffini</b>:</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>Un polinomio P(x) è divisibile per (x − a) se e solo se P(a) = 0.</b></p>
<p>Quindi basta trovare un numero <b>a</b> che annulla il polinomio: allora (x − a) è un fattore. Per un polinomio a coefficienti interi con coefficiente direttivo 1, i candidati interi sono i <b>divisori del termine noto</b> (con tutti e due i segni).</p>
<p><b>Esempio</b>: P(x) = x³ − 2x² − 5x + 6. Termine noto 6, divisori ±1, ±2, ±3, ±6.</p>
<ul>
<li>P(1) = 1 − 2 − 5 + 6 = 0 ✔ → (x − 1) è un fattore.</li>
<li>Divisione con la <b>regola di Ruffini</b>: scrivo i coefficienti 1, −2, −5, 6; abbasso l'1; moltiplico per a = 1 e sommo in colonna: 1 → (−2 + 1) = −1 → (−5 − 1) = −6 → (6 − 6) = 0 (resto zero ✔).</li>
<li>Il quoziente ha coefficienti 1, −1, −6: x² − x − 6.</li>
<li>Questo è un trinomio speciale: somma −1, prodotto −6 → −3 e +2: (x − 3)(x + 2).</li>
</ul>
<p>Risultato: <b>x³ − 2x² − 5x + 6 = (x − 1)(x − 3)(x + 2)</b>. Le radici (1, 3, −2) sono proprio i valori che annullano il polinomio.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Paolo Ruffini",
      html: `<p><b>Paolo Ruffini</b> (1765–1822) era un medico e matematico italiano, nato a Valentano e vissuto a Modena. Mise a punto il metodo di divisione che porta il suo nome all'inizio dell'Ottocento, ma è ancora più famoso per aver tentato, già nel 1799, di dimostrare che l'equazione generale di <b>quinto grado non si risolve con radicali</b>: la dimostrazione era incompleta, ma aprì la strada ad Abel e poi a Galois, che chiusero la questione. Una regola da ragazzi di prima superiore, quindi, nasce da una storia di matematica grande.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il giardino con l'aiuola",
      html: `<p>Un giardino quadrato di lato x metri ha al centro un'aiuola quadrata di lato 3 m. L'area di erba è x² − 9. Scomponendo: <b>(x + 3)(x − 3)</b>. Significa che puoi pensare l'erba come un rettangolo di lati (x + 3) e (x − 3). Per x = 13 m: 16 · 10 = 160 m², lo stesso di 169 − 9 = 160 m², ma con un conto più rapido.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Fermat e i numeri grandi",
      html: `<p>Il matematico francese <b>Pierre de Fermat</b> (1601–1665) usò la differenza di quadrati per scomporre numeri interi: se un numero N si scrive come a² − b², allora N = (a + b)(a − b). Il suo metodo funziona bene quando i due fattori sono vicini. Anche la sicurezza di molti sistemi di crittografia moderni si basa sul fatto che scomporre numeri enormi in fattori primi è difficilissimo.</p>`
    },
    {
      type: "remember",
      title: "La strategia: in che ordine provare",
      html: `<ol>
<li><b>Raccoglimento totale</b>: c'è un fattore comune a tutti i termini? Raccoglilo sempre per primo.</li>
<li>Conta i termini: <b>2</b> → differenza di quadrati o di cubi; <b>3</b> → quadrato di binomio o trinomio speciale; <b>4</b> → raccoglimento parziale o cubo di binomio.</li>
<li>Se non si riconosce alcuna forma e il grado è ≥ 3: <b>Ruffini</b>.</li>
<li><b>Controlla</b> se qualche fattore si può scomporre ancora (come x² − 4).</li>
<li><b>Verifica</b> moltiplicando i fattori: devi ritrovare il polinomio di partenza.</li>
</ol>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la scomposizione",
      intro: "Se la scomposizione sembra una collezione di formule da imparare a memoria, prova queste altre strade.",
      tabs: [
        {
          label: "📐 Con le aree",
          html: `<p>La differenza di quadrati si "vede". Prendi un quadrato di lato <b>a</b> e togli un quadratino di lato <b>b</b> in un angolo: resta una "L" di area <b>a² − b²</b>. Taglia la L e riassembla i pezzi: diventa un <b>rettangolo</b> di lati <b>(a + b)</b> e <b>(a − b)</b>. Stessa area, quindi <b>a² − b² = (a + b)(a − b)</b>.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="30" y="60" width="160" height="160" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="130" y="60" width="60" height="60" fill="#ffffff" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/>
<text x="160" y="97" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">b²</text>
<text x="80" y="150" font-size="20" text-anchor="middle" fill="#1e1b4b" font-weight="bold">a² − b²</text>
<text x="110" y="248" font-size="18" text-anchor="middle" fill="#334155">lato a</text>
<text x="270" y="150" font-size="34" text-anchor="middle" fill="#334155" font-weight="bold">→</text>
<rect x="330" y="90" width="160" height="100" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="490" y="90" width="60" height="100" fill="#fdba74" stroke="#9a3412" stroke-width="3"/>
<text x="410" y="145" font-size="18" text-anchor="middle" fill="#1e1b4b" font-weight="bold">a · (a − b)</text>
<text x="520" y="145" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">b·(a−b)</text>
<text x="440" y="75" font-size="18" text-anchor="middle" fill="#334155">base a + b</text>
<text x="440" y="220" font-size="18" text-anchor="middle" fill="#334155">altezza a − b</text>
</svg>`
        },
        {
          label: "🇨🇳 La croce (cross multiplication)",
          html: `<p>In Cina si usa da secoli la <b>moltiplicazione in croce</b> (十字相乘) per il trinomio. Scrivi i due numeri m e n in una "X" e controlla due cose:</p>
<ul>
<li><b>in verticale</b> (prodotto m·n) devi ottenere il termine noto;</li>
<li><b>in diagonale</b> (somma m + n) devi ottenere il coefficiente di x.</li>
</ul>
<p>Per x² − 5x + 6: prodotto 6, somma −5. Provi (−1, −6): somma −7 ✗. Provi (−2, −3): somma −5 ✔. Quindi (x − 2)(x − 3). Negli Stati Uniti lo stesso gioco si chiama <i>diamond problem</i>. Stessa idea, nomi diversi: ricerca di due numeri con dato prodotto e data somma.</p>`
        },
        {
          label: "🔢 Come i numeri primi",
          html: `<p>84 = 2 · 2 · 3 · 7 si ottiene dividendo per numeri primi finché si può. I polinomi si comportano allo stesso modo: i "mattoni" sono i polinomi irriducibili.</p>
<p>x² − 1 = (x − 1)(x + 1) è come 15 = 3 · 5. E come 15 si può scrivere in un solo modo come prodotto di primi (a meno dell'ordine), anche un polinomio ha una <b>scomposizione unica</b> in fattori irriducibili. Il raccoglimento corrisponde a cercare il MCD, la scomposizione completa alla fattorizzazione in primi: stessa struttura, in un altro mondo.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della scomposizione",
      nodes: [
        { id: "scomp", label: "Scomposizione", x: 50, y: 6, color: "#6366f1", html: "Scrivere un polinomio come prodotto di fattori irriducibili.", why: "Serve perché un prodotto si annulla solo se un fattore è zero: così si risolvono le equazioni e si semplificano le frazioni algebriche." },
        { id: "distrib", label: "Proprietà distributiva", x: 15, y: 30, color: "#64748b", html: "a(b + c) = ab + ac.", why: "È l'assioma da cui nasce tutto: letta da destra a sinistra è il raccoglimento. Ogni scomposizione è una moltiplicazione letta al contrario." },
        { id: "racc", label: "Raccoglimento", x: 15, y: 55, color: "#16a34a", html: "Si estrae il MCD dei termini.", why: "Estende al calcolo letterale l'idea del MCD tra numeri: si estrae ciò che è comune a tutti i termini." },
        { id: "notevoli", label: "Prodotti notevoli", x: 50, y: 32, color: "#f59e0b", html: "Quadrato di binomio, differenza di quadrati, cubi.", why: "Sono identità che si ottengono moltiplicando. Già Euclide (Elementi, libro II) dimostrava con aree e rettangoli il quadrato di una somma." },
        { id: "trin", label: "Trinomio speciale", x: 50, y: 58, color: "#a855f7", html: "x² + sx + p = (x + m)(x + n).", why: "Nasce dallo sviluppo (x + m)(x + n) = x² + (m + n)x + mn: le relazioni tra somma e prodotto delle radici." },
        { id: "ruff", label: "Teorema di Ruffini", x: 85, y: 40, color: "#ef4444", html: "P(a) = 0 ⟺ (x − a) divide P(x).", why: "Se dividi P(x) per (x − a) ottieni un quoziente Q e un resto R costante: P(x) = (x − a)Q(x) + R. Ponendo x = a si ha P(a) = R, quindi il resto è zero esattamente quando P(a) = 0." },
        { id: "irr", label: "Fattori irriducibili", x: 50, y: 88, color: "#0ea5e9", html: "Fattori che non si possono spezzare ulteriormente.", why: "Sono i 'numeri primi' dei polinomi: come per i numeri, la scomposizione completa è unica a meno dell'ordine." },
        { id: "uso", label: "Equazioni e frazioni", x: 85, y: 78, color: "#14b8a6", html: "Applicazioni: risolvere equazioni, semplificare frazioni algebriche.", why: "Nelle frazioni si semplificano solo i fattori, non i termini: per questo bisogna scomporre prima." }
      ],
      edges: [
        ["distrib", "racc", "letta al contrario"],
        ["notevoli", "scomp", "si riconoscono"],
        ["racc", "scomp", "primo tentativo"],
        ["trin", "scomp", "per trinomi"],
        ["ruff", "scomp", "grado ≥ 3"],
        ["scomp", "irr", "fino a"],
        ["irr", "uso", "serve a"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: trinomio e Ruffini",
      questions: [
        { type: "num", q: "x² − 7x + 10 = (x − 2)(x − k). Quanto vale k?", answer: 5, explain: "Servono due numeri con somma −7 e prodotto 10: −2 e −5." },
        { type: "num", q: "Dato P(x) = x³ − 7x + 6, quanto vale P(1)?", answer: 0, explain: "1 − 7 + 6 = 0: quindi (x − 1) divide P(x)." },
        { type: "mc", q: "Quale di questi polinomi è divisibile per (x − 2)?", options: ["x³ − 8", "x³ + 8", "x² + 4"], answer: 0, explain: "Per x = 2: 2³ − 8 = 0. Infatti x³ − 8 = (x − 2)(x² + 2x + 4)." }
      ]
    }
  ],
  glossary: [
    { t: "Scomposizione", d: "Scrittura di un polinomio come prodotto di fattori di grado minore." },
    { t: "Fattore", d: "Ciascuno dei polinomi che si moltiplicano in un prodotto." },
    { t: "Polinomio irriducibile", d: "Polinomio che non si può scrivere come prodotto di polinomi di grado minore." },
    { t: "Raccoglimento totale", d: "Estrazione del massimo comune divisore da tutti i termini." },
    { t: "Raccoglimento parziale", d: "Raccoglimento a gruppi di termini, seguito da un raccoglimento di un fattore comune." },
    { t: "Differenza di quadrati", d: "A² − B² = (A + B)(A − B)." },
    { t: "Trinomio speciale", d: "Trinomio x² + sx + p, scomponibile in (x + m)(x + n) con m + n = s e m·n = p." },
    { t: "Teorema di Ruffini", d: "P(x) è divisibile per (x − a) se e solo se P(a) = 0." },
    { t: "Radice", d: "Valore della variabile che annulla il polinomio." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è il raccoglimento totale di 4x²y − 6xy²?", options: ["2xy(2x − 3y)", "4xy(x − y)", "2x²y²(2 − 3)"], answer: 0, explain: "MCD dei coefficienti 4 e 6 è 2; le lettere comuni con esponente minimo sono x e y. 4x²y : 2xy = 2x; 6xy² : 2xy = 3y." },
      { type: "mc", q: "La scomposizione di 9x² + 12x + 4 è…", options: ["(3x + 2)²", "(9x + 4)²", "(3x + 4)(3x + 1)"], answer: 0, explain: "(3x)² + 2·3x·2 + 2² = (3x + 2)²." },
      { type: "num", q: "x² − 3x − 10 = (x + 2)(x − k). Trova k.", answer: 5, explain: "Somma −3, prodotto −10: i numeri sono +2 e −5." },
      { type: "num", q: "Calcola a mente 98 × 102 usando la differenza di quadrati.", answer: 9996, explain: "(100 − 2)(100 + 2) = 100² − 2² = 10 000 − 4 = 9 996." },
      { type: "tf", q: "Se P(3) = 0, allora (x − 3) è un fattore di P(x).", answer: true, explain: "È il teorema di Ruffini." },
      { type: "order", q: "Metti in ordine la strategia di scomposizione.", items: ["Raccoglimento totale", "Riconoscere prodotti notevoli o trinomio speciale", "Raccoglimento parziale o Ruffini", "Controllare che i fattori siano irriducibili", "Verificare moltiplicando"], explain: "Si parte sempre dal raccoglimento totale e si finisce con la verifica." },
      { type: "text", q: "Quale matematico italiano dà il nome a una regola per dividere un polinomio per x − a?", answer: ["ruffini", "paolo ruffini"], explain: "Paolo Ruffini (1765–1822)." },
      { type: "num", q: "Scomponi 2x³ − 8x = 2x(x − 2)(x + 2) e calcola il valore per x = 3.", answer: 30, explain: "2·3·1·5 = 30. Direttamente: 2·27 − 24 = 30." },
      { type: "mc", q: "La scomposizione completa di x⁴ − 1 è…", options: ["(x² + 1)(x + 1)(x − 1)", "(x² − 1)²", "(x + 1)⁴"], answer: 0, explain: "x⁴ − 1 = (x² + 1)(x² − 1) = (x² + 1)(x + 1)(x − 1); x² + 1 è irriducibile." },
      { type: "mc", q: "Perché la scomposizione è utile per semplificare le frazioni algebriche?", options: ["Perché si possono semplificare solo i fattori, non i termini di una somma", "Perché rende i polinomi più lunghi", "Perché elimina le lettere"], answer: 0, explain: "Si semplificano solo i fattori comuni di numeratore e denominatore." }
    ]
  }
});
