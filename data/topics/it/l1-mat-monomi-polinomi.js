TOPIC('it', {
  id: "l1-mat-monomi-polinomi",
  title: "Monomi e polinomi",
  intro: "Quanto vale l'area di un giardino quadrato di lato <i>a</i> a cui allunghiamo ogni lato di <i>b</i> metri? E se vogliamo scriverlo una volta per tutte, per qualunque a e b? Il <b>calcolo letterale</b> permette di usare le lettere al posto dei numeri per scrivere regole generali. Impariamo il suo \"alfabeto\" (<b>monomi</b>), le sue \"parole\" (<b>polinomi</b>) e alcune \"formule magiche\" che fanno risparmiare ore di conti: i <b>prodotti notevoli</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Perché usare le lettere",
      html: `<p>Un'<b>espressione letterale</b> contiene numeri, lettere e operazioni. Le lettere indicano numeri qualsiasi (variabili) e permettono di enunciare una regola valida per infiniti casi. Per esempio:</p>
<ul>
<li>il perimetro di un rettangolo di base b e altezza h è 2b + 2h, per <i>qualsiasi</i> rettangolo;</li>
<li>un numero pari qualsiasi si scrive 2n, un dispari 2n + 1 (n ∈ ℤ), tre numeri consecutivi n, n + 1, n + 2.</li>
</ul>
<p>Il <b>valore numerico</b> di un'espressione si trova sostituendo alle lettere dei numeri: per 3a − 2b con a = 4 e b = −1 si ottiene 3·4 − 2·(−1) = 14.</p>
<p>Le lettere seguono le stesse proprietà dei numeri (commutativa, associativa, distributiva); per questo il calcolo letterale non ha \"regole nuove\", ma è un'<b>estensione</b> dell'aritmetica. Fu il matematico francese François Viète (1540-1603) a introdurre l'uso sistematico delle lettere, e Cartesio a stabilire la convenzione moderna: le prime lettere (a, b, c…) per i valori noti, le ultime (x, y, z) per le incognite.</p>`
    },
    {
      type: "text",
      title: "I monomi",
      html: `<p>Un <b>monomio</b> è un'espressione letterale in cui compaiono solo <b>moltiplicazioni</b> (e potenze con esponente naturale) tra numeri e lettere. Esempi: 5a²b, −x, 3/4 xy³, 7. Non sono monomi: a + b (somma), 1/x (lettera al denominatore), √x.</p>
<p>In un monomio in <b>forma normale</b> (ridotto) distinguiamo:</p>
<ul>
<li>il <b>coefficiente</b>: il fattore numerico (nel monomio −3x²y è −3; in xy è 1);</li>
<li>la <b>parte letterale</b>: le lettere con i loro esponenti (x²y);</li>
<li>il <b>grado complessivo</b>: la somma degli esponenti (x²y ha grado 3);</li>
<li>il <b>grado rispetto a una lettera</b>: l'esponente di quella lettera (x²y ha grado 2 rispetto a x e 1 rispetto a y).</li>
</ul>
<p>Due monomi sono <b>simili</b> se hanno la <b>stessa parte letterale</b> (coefficienti qualsiasi): 3x²y, −5x²y e (1/2)yx² sono simili. Sono <b>opposti</b> se simili con coefficienti opposti (4ab e −4ab). Un monomio con coefficiente 0 è il monomio nullo (grado indefinito); un numero non nullo è un monomio di grado 0.</p>
<p><b>Operazioni</b>:</p>
<ul>
<li><b>Somma algebrica</b>: <i>solo</i> tra monomi simili: si sommano i coefficienti e si lascia invariata la parte letterale. 5x²y − 8x²y + x²y = −2x²y. Monomi non simili restano come somma indicata (3x + 2y non si riduce).</li>
<li><b>Prodotto</b>: si moltiplicano i coefficienti e si sommano gli esponenti delle stesse lettere: (3a²b)·(−2ab³) = −6a³b⁴.</li>
<li><b>Potenza</b>: (−2x²y)³ = (−2)³·x⁶·y³ = −8x⁶y³.</li>
<li><b>Quoziente</b>: si dividono i coefficienti e si sottraggono gli esponenti: 12a⁵b² : (−4a²b) = −3a³b. Il risultato è un monomio solo se ogni lettera del divisore compare con esponente non maggiore nel dividendo (altrimenti la divisione dà una frazione algebrica).</li>
<li><b>MCD e mcm</b>: il MCD ha le lettere <i>comuni</i> con l'esponente <i>minore</i> e il MCD dei coefficienti; il mcm ha tutte le lettere con l'esponente <i>maggiore</i> e il mcm dei coefficienti. Per 12a³b e 18a²b²: MCD = 6a²b, mcm = 36a³b².</li>
</ul>`
    },
    {
      type: "widget",
      title: "Simile o no?",
      widget: "classify",
      options: { groups: ["Simile a 3x²y", "Non simile a 3x²y"], items: [
        ["−5x²y", 0], ["x²y", 0], ["7yx²", 0], ["(2/3)x²y", 0],
        ["3xy²", 1], ["3x²", 1], ["2x²y²", 1], ["3x + y", 1], ["4xy", 1]
      ] },
      caption: "Contano le lettere e i loro esponenti, non i coefficienti né l'ordine delle lettere (7yx² = 7x²y)."
    },
    {
      type: "example",
      title: "Esempio: ridurre un'espressione con monomi",
      html: `<p>Semplifica: <b>2a²b · (−3ab²) − 5a³b³ + (4a⁶b⁶) : (2a³b³)</b></p>
<ol>
<li>Primo prodotto: 2·(−3) = −6; a²·a = a³; b·b² = b³ → −6a³b³.</li>
<li>Quoziente: 4 : 2 = 2; a⁶ : a³ = a³; b⁶ : b³ = b³ → 2a³b³.</li>
<li>Somma dei monomi simili (tutti a³b³): −6 − 5 + 2 = −9 → <b>−9a³b³</b>.</li>
</ol>
<p>Controllo con a = 1, b = 1: 2·(−3) − 5 + 4/2 = −6 − 5 + 2 = −9 ✔. Sostituire valori semplici è un modo veloce per verificare un risultato (non lo dimostra del tutto, ma scopre molti errori).</p>`
    },
    {
      type: "text",
      title: "I polinomi",
      html: `<p>Un <b>polinomio</b> è una <b>somma algebrica di monomi</b>. I monomi che lo compongono si chiamano <b>termini</b>. Un polinomio con due termini si chiama <b>binomio</b>, con tre <b>trinomio</b>. Per esempio 3x²y − 5xy + 7 è un trinomio.</p>
<p>Il polinomio è in <b>forma normale</b> (ridotto) quando non contiene monomi simili (che vanno sommati) né operazioni da eseguire. Si definiscono:</p>
<ul>
<li><b>grado del polinomio</b>: il massimo dei gradi dei suoi termini (3x²y − 5xy + 7 ha grado 3);</li>
<li><b>grado rispetto a una lettera</b>: il massimo esponente di quella lettera (in x²y: grado 2 in x);</li>
<li><b>ordinato</b> secondo le potenze decrescenti (o crescenti) di una lettera;</li>
<li><b>completo</b> rispetto a una lettera, se compaiono tutte le potenze da 0 al grado (x³ − 2x² + x − 5 è completo; x³ + 4 non lo è);</li>
<li><b>omogeneo</b>, se tutti i termini hanno lo stesso grado (a² + 3ab − b² è omogeneo di grado 2);</li>
<li><b>termine noto</b>: il termine di grado 0, privo di lettere.</li>
</ul>
<p>Due polinomi sono <b>uguali</b> se, ridotti in forma normale, hanno gli stessi termini. Un polinomio si dice <b>identicamente nullo</b> se, ridotto, è 0.</p>
<p>In un polinomio in una variabile, P(x) = aₙxⁿ + … + a₁x + a₀, il <b>valore numerico</b> P(k) si calcola sostituendo x = k. Se P(k) = 0, k è uno <b>zero</b> del polinomio (una soluzione dell'equazione P(x) = 0): è il punto di collegamento con le equazioni.</p>`
    },
    {
      type: "text",
      title: "Operazioni tra polinomi",
      html: `<p><b>Somma e differenza</b>: si tolgono le parentesi (cambiando i segni se c'è un meno davanti) e si riducono i termini simili.</p>
<p>(3x² − 2x + 1) − (x² − 5x − 4) = 3x² − 2x + 1 − x² + 5x + 4 = <b>2x² + 3x + 5</b>.</p>
<p><b>Prodotto di un monomio per un polinomio</b> (proprietà distributiva): 2x · (3x² − x + 4) = 6x³ − 2x² + 8x.</p>
<p><b>Prodotto di due polinomi</b>: si moltiplica <b>ogni termine del primo per ogni termine del secondo</b>, poi si riducono i simili.</p>
<p>(x + 3)(2x − 5) = 2x² − 5x + 6x − 15 = <b>2x² + x − 15</b>.</p>
<p>Il grado del prodotto è la <b>somma</b> dei gradi (con coefficienti non nulli): 1 + 1 = 2. Il numero di prodotti parziali da fare è il prodotto del numero dei termini: 2 × 2 = 4.</p>
<p><b>Quoziente di un polinomio per un monomio</b>: si divide ogni termine: (6x³ − 9x² + 3x) : (3x) = 2x² − 3x + 1.</p>
<p>La <b>divisione tra due polinomi</b> è più complessa: dati A(x) (dividendo) e B(x) (divisore, non nullo) esistono due polinomi Q(x) (quoziente) e R(x) (resto), con grado di R minore del grado di B, tali che <b>A = B · Q + R</b>. Se R = 0 il polinomio è <b>divisibile</b>. Il procedimento (analogo alla divisione tra numeri in colonna) e la regola di Ruffini si vedranno nella lezione sulla scomposizione.</p>`
    },
    {
      type: "example",
      title: "Esempio: l'area di un giardino che si allarga",
      html: `<p>Un giardino rettangolare ha lati x e x + 4 metri. Allarghi ogni lato di 2 m. Di quanto aumenta l'area?</p>
<ol>
<li>Area iniziale: x(x + 4) = x² + 4x.</li>
<li>Nuovi lati: (x + 2) e (x + 6). Area: (x + 2)(x + 6) = x² + 6x + 2x + 12 = x² + 8x + 12.</li>
<li>Aumento: (x² + 8x + 12) − (x² + 4x) = <b>4x + 12</b> m².</li>
</ol>
<p>Per x = 10 m: giardino iniziale 10 × 14 = 140 m²; nuovo 12 × 16 = 192 m²; aumento 52 m². Verifica: 4·10 + 12 = 52 ✔. Una sola formula descrive tutti i giardini possibili: è la forza del calcolo letterale.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: monomi e polinomi",
      questions: [
        { type: "mc", q: "Qual è il grado complessivo del monomio −7a²b³c?", options: ["3", "6", "7"], answer: 1, explain: "Si sommano gli esponenti: 2 + 3 + 1 = 6." },
        { type: "num", q: "Calcola il coefficiente del monomio (−2x²y)·(3xy³) · (1/6).", answer: -1, explain: "(−2)·3·(1/6) = −1: il monomio è −x³y⁴." },
        { type: "num", q: "Il polinomio 5x³ − 2x + x⁴ − 7 ha grado…", answer: 4, explain: "Il termine di grado massimo è x⁴." },
        { type: "num", q: "Quanti termini ha il prodotto non ridotto (a + b + c)(x + y) prima di ridurre i simili?", answer: 6, explain: "Ogni termine del primo (3) per ogni termine del secondo (2): 3 × 2 = 6." }
      ]
    },
    {
      type: "svg",
      title: "(a + b)² non è a² + b²",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="30" width="170" height="170" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="230" y="30" width="70" height="170" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="60" y="200" width="170" height="70" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="230" y="200" width="70" height="70" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="145" y="122" font-size="26" text-anchor="middle" fill="#1e3a8a" font-weight="bold">a²</text>
<text x="265" y="122" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="145" y="242" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="265" y="242" font-size="22" text-anchor="middle" fill="#14532d" font-weight="bold">b²</text>
<text x="145" y="22" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">a</text>
<text x="265" y="22" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">b</text>
<text x="40" y="120" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">a</text>
<text x="40" y="240" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">b</text>
<text x="330" y="100" font-size="20" fill="#1f2937" font-weight="bold">(a + b)² = a² + 2ab + b²</text>
<text x="330" y="140" font-size="17" fill="#475569">Il quadrato grande si spezza in:</text>
<text x="330" y="168" font-size="17" fill="#1d4ed8">un quadrato di lato a (a²),</text>
<text x="330" y="194" font-size="17" fill="#15803d">un quadrato di lato b (b²),</text>
<text x="330" y="220" font-size="17" fill="#b45309">e due rettangoli a × b (2ab).</text>
</svg>`,
      caption: "Il \"doppio prodotto\" 2ab è proprio l'area dei due rettangoli che avanzano: dimenticarlo è l'errore più comune."
    },
    {
      type: "text",
      title: "I prodotti notevoli",
      html: `<p>Alcuni prodotti tra polinomi compaiono così spesso che conviene ricordare il risultato:</p>
<table>
<tr><th>Nome</th><th>Formula</th></tr>
<tr><td><b>Quadrato di un binomio</b></td><td>(a + b)² = a² + 2ab + b² &nbsp;&nbsp; (a − b)² = a² − 2ab + b²</td></tr>
<tr><td><b>Somma per differenza</b></td><td>(a + b)(a − b) = a² − b²</td></tr>
<tr><td><b>Quadrato di un trinomio</b></td><td>(a + b + c)² = a² + b² + c² + 2ab + 2ac + 2bc</td></tr>
<tr><td><b>Cubo di un binomio</b></td><td>(a + b)³ = a³ + 3a²b + 3ab² + b³ &nbsp;&nbsp; (a − b)³ = a³ − 3a²b + 3ab² − b³</td></tr>
<tr><td><b>Somma e differenza di cubi (da scomporre)</b></td><td>(a + b)(a² − ab + b²) = a³ + b³ &nbsp;&nbsp; (a − b)(a² + ab + b²) = a³ − b³</td></tr>
</table>
<p>Il quadrato di un binomio si ricorda con la frase: \"il quadrato del primo, più il doppio prodotto, più il quadrato del secondo\". Il segno del doppio prodotto è quello del binomio; gli altri due termini sono sempre positivi.</p>
<p>Esempi:</p>
<ul>
<li>(2x + 3y)² = 4x² + 12xy + 9y²;</li>
<li>(5a − 1)² = 25a² − 10a + 1;</li>
<li>(3x + 2)(3x − 2) = 9x² − 4;</li>
<li>(x − 2)³ = x³ − 6x² + 12x − 8.</li>
</ul>
<p><b>Per il calcolo mentale</b>: 51² = (50 + 1)² = 2500 + 100 + 1 = 2601; 49 · 51 = (50 − 1)(50 + 1) = 2500 − 1 = 2499; 99² = (100 − 1)² = 10 000 − 200 + 1 = 9801.</p>
<p><b>Coefficienti delle potenze di un binomio</b>: (a + b)ⁿ ha come coefficienti la riga n del <b>triangolo di Tartaglia</b> (detto in Francia di Pascal; in Cina di Yang Hui): ogni numero è la somma dei due sopra di lui.</p>
<p style="text-align:center;font-family:monospace;line-height:1.6">1<br>1&nbsp;&nbsp;1<br>1&nbsp;&nbsp;2&nbsp;&nbsp;1<br>1&nbsp;&nbsp;3&nbsp;&nbsp;3&nbsp;&nbsp;1<br>1&nbsp;&nbsp;4&nbsp;&nbsp;6&nbsp;&nbsp;4&nbsp;&nbsp;1<br>1&nbsp;&nbsp;5&nbsp;&nbsp;10&nbsp;&nbsp;10&nbsp;&nbsp;5&nbsp;&nbsp;1</p>
<p>Quindi (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴ e (a + b)⁵ = a⁵ + 5a⁴b + 10a³b² + 10a²b³ + 5ab⁴ + b⁵.</p>`
    },
    {
      type: "example",
      title: "Esempio: da un errore a una dimostrazione",
      html: `<p>Un errore classicissimo: (x + 3)² = x² + 9. Per x = 2 darebbe 4 + 9 = 13, ma (2 + 3)² = 25. Lo stesso calcolo con la formula giusta: x² + 6x + 9 = 4 + 12 + 9 = 25 ✔.</p>
<p>Il calcolo letterale serve anche a <b>dimostrare</b>. Per esempio: la differenza dei quadrati di due numeri consecutivi n e n + 1 è sempre dispari.</p>
<ol>
<li>(n + 1)² − n² = n² + 2n + 1 − n² = 2n + 1.</li>
<li>2n + 1 è, per definizione, un numero dispari. ∎</li>
</ol>
<p>Verifica: 5² − 4² = 25 − 16 = 9, che è dispari. Ma ora sappiamo che accade per <i>tutti</i> i numeri consecutivi, non solo per quelli provati.</p>`
    },
    {
      type: "curiosity",
      title: "Al-Khwarizmi e il \"completamento del quadrato\"",
      html: `<p>Il matematico persiano Muhammad ibn Musa al-Khwarizmi (circa 780-850), che lavorava alla Casa della Saggezza a Baghdad, scrisse intorno all'820 il trattato <i>al-Kitab al-mukhtasar fi hisab al-jabr wa-l-muqabala</i> (\"Il compendio sul calcolo per completamento e bilanciamento\"). Dalla parola <i>al-jabr</i> deriva la parola <b>algebra</b>, e dal suo nome la parola <b>algoritmo</b>. Al-Khwarizmi risolveva le equazioni di secondo grado con figure geometriche, aggiungendo un quadratino mancante per \"completare\" un quadrato: era esattamente il quadrato di binomio (a + b)² = a² + 2ab + b² letto in senso geometrico. Anche Euclide, nel Libro II degli <i>Elementi</i> (circa 300 a.C.), dimostra con figure l'identità del quadrato di un binomio.</p>`
    },
    {
      type: "curiosity",
      title: "Perché \"monomio\" e \"polinomio\"?",
      html: `<p>Le parole vengono dal greco: <i>monos</i> (uno solo), <i>polys</i> (molti) e dal latino <i>nomen</i> (nome, termine). Dunque \"monomio\" = \"un solo termine\", \"polinomio\" = \"molti termini\", \"binomio\" = \"due termini\". Il termine <i>polinomio</i> è stato diffuso nell'Europa del Cinquecento, nel periodo in cui matematici italiani come Cardano, Tartaglia e Ferrari scoprirono le formule risolutive per le equazioni di terzo e quarto grado. Una gara tra Tartaglia e Antonio Maria Fior nel 1535 sulle equazioni di terzo grado è una delle sfide matematiche più famose della storia.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per moltiplicare i polinomi",
      intro: "Moltiplicare ogni termine per ogni termine è facile da dire ma facile da sbagliare. Ecco metodi alternativi, usati in altri Paesi.",
      tabs: [
        {
          label: "🔲 Il metodo della tabella (box)",
          html: `<p>Molti insegnanti nei Paesi anglosassoni usano la <b>tabella delle aree</b>: scrivi i termini di un polinomio sulle righe, quelli dell'altro sulle colonne, e riempi ogni cella con il prodotto. Poi sommi le celle simili.</p>
<p>(x + 3)(2x − 5):</p>
<table>
<tr><th></th><th>2x</th><th>−5</th></tr>
<tr><th>x</th><td>2x²</td><td>−5x</td></tr>
<tr><th>+3</th><td>6x</td><td>−15</td></tr>
</table>
<p>Somma: 2x² + (−5x + 6x) − 15 = <b>2x² + x − 15</b>. Il metodo evita di saltare i prodotti e rende evidente perché i prodotti parziali sono tanti quanti righe × colonne.</p>`
        },
        {
          label: "📐 Il quadrato disegnato",
          html: `<p>Disegna un quadrato di lato a + b e dividilo come in figura: l'area totale (a + b)² è la somma delle quattro regioni a², ab, ab, b². Questa prova geometrica era nota già a Euclide. Con il widget qui sotto costruisci un quadrato 5 × 5: è (3 + 2)², e si spezza in 3² + 3·2 + 2·3 + 2² = 9 + 6 + 6 + 4 = 25 quadretti.</p>`,
          widget: "areaGrid",
          options: { w: 5, h: 5, max: 12 }
        },
        {
          label: "🧊 Il cubo di un binomio",
          html: `<p>(a + b)³ è il volume di un cubo di lato a + b. Con a = 3 e b = 2 il cubo di lato 5 contiene 125 cubetti, che si dividono in: un cubo grande a³ = 27, tre lastre a²b (3·9·2 = 54), tre barre ab² (3·3·4 = 36) e un cubetto b³ = 8. Totale: 27 + 54 + 36 + 8 = 125 ✔. Ruota il modello 3D e conta i cubetti.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 5, b: 5, c: 5 }
        },
        {
          label: "🔢 Con i numeri (spezzare e moltiplicare)",
          html: `<p>Il prodotto di polinomi è un'estensione della moltiplicazione in colonna. Pensa a 23 × 14: è (2·10 + 3)(1·10 + 4). Il prodotto (2x + 3)(x + 4) con x = 10 dà esattamente lo stesso calcolo: 2x² + 11x + 12 → 200 + 110 + 12 = 322. Il polinomio è come un \"numero in base x\", e moltiplicare polinomi è come moltiplicare in colonna, senza portare i riporti.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del calcolo letterale",
      nodes: [
        { id: "letterale", label: "Calcolo letterale", x: 50, y: 6, color: "#64748b", html: "Usare le lettere al posto dei numeri.", why: "Viète (1591) introdusse le lettere per indicare numeri qualsiasi, passando dall'algebra dei casi singoli a quella delle regole generali. Cartesio (1637) fissò la convenzione moderna." },
        { id: "monomio", label: "Monomio", x: 20, y: 28, color: "#2563eb", html: "Coefficiente × parte letterale; grado = somma esponenti.", why: "È l'\"atomo\" del calcolo letterale. Per sommare serve la similitudine (stessa parte letterale), perché le lettere stanno per numeri diversi e non si possono \"mescolare\"." },
        { id: "polinomio", label: "Polinomio", x: 80, y: 28, color: "#16a34a", html: "Somma algebrica di monomi.", why: "Funzioni come aree e volumi sono polinomi nelle misure dei lati. In seguito sarà il modo di approssimare qualsiasi funzione (polinomi di Taylor)." },
        { id: "proprieta", label: "Proprietà delle operazioni", x: 50, y: 50, color: "#f59e0b", html: "Commutativa, associativa, distributiva.", why: "Sono le stesse di ℤ e ℚ: ogni formula letterale vale perché vale per i numeri. Per questo (a + b)² si può sempre espandere come (a + b)(a + b)." },
        { id: "prodotto", label: "Prodotto di polinomi", x: 18, y: 68, color: "#9333ea", html: "Ogni termine per ogni termine.", why: "È la distributiva applicata due volte: (a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd." },
        { id: "notevoli", label: "Prodotti notevoli", x: 55, y: 80, color: "#ef4444", html: "Quadrato di binomio, somma per differenza, cubo.", why: "Si dimostrano con la distributiva e si leggono con figure geometriche (Euclide, Libro II; al-Khwarizmi). Servono per semplificare calcoli e per scomporre." },
        { id: "tartaglia", label: "Triangolo di Tartaglia", x: 85, y: 62, color: "#0ea5e9", html: "Coefficienti di (a + b)ⁿ.", why: "Ogni coefficiente conta in quanti modi si sceglie a o b da ciascuna parentesi: è un coefficiente binomiale, e ogni numero è la somma dei due sopra perché (a + b)ⁿ = (a + b)(a + b)ⁿ⁻¹." },
        { id: "applicazioni", label: "Dimostrazioni e problemi", x: 82, y: 92, color: "#22c55e", html: "Verità generali, aree, volumi, equazioni.", why: "Con le lettere si dimostra che un'affermazione vale per tutti i numeri. È il passo che separa la matematica dall'aritmetica." }
      ],
      edges: [["letterale", "monomio", "mattoni"], ["letterale", "polinomio", "composti da"], ["monomio", "polinomio", "somma di"], ["proprieta", "prodotto", "garantisce"], ["polinomio", "prodotto", "operazione"], ["prodotto", "notevoli", "casi frequenti"], ["notevoli", "tartaglia", "generalizzati da"], ["notevoli", "applicazioni", "usati in"]]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Monomio = numero × lettere. Si <b>sommano</b> solo monomi simili; nel <b>prodotto</b> si <b>sommano</b> gli esponenti, nel <b>quoziente</b> si <b>sottraggono</b>.</li>
<li>Grado del polinomio = grado massimo dei suoi termini; grado del prodotto = somma dei gradi.</li>
<li>(a ± b)² = a² ± 2ab + b² — <b>non</b> a² ± b².</li>
<li>(a + b)(a − b) = a² − b² (la differenza dei quadrati).</li>
<li>(a ± b)³ = a³ ± 3a²b + 3ab² ± b³; coefficienti dal triangolo di Tartaglia.</li>
<li>Per controllare un risultato, sostituisci valori semplici alle lettere.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: prodotti notevoli",
      questions: [
        { type: "num", q: "Calcola con un prodotto notevole: 103 · 97.", answer: 9991, explain: "(100 + 3)(100 − 3) = 100² − 3² = 10 000 − 9 = 9991." },
        { type: "mc", q: "Quale espressione è uguale a (x − 4)²?", options: ["x² − 16", "x² − 8x + 16", "x² + 8x + 16"], answer: 1, explain: "Quadrato del primo, meno il doppio prodotto (2·x·4 = 8x), più il quadrato del secondo (16)." },
        { type: "mc", q: "Qual è il coefficiente di a²b nello sviluppo di (a + b)³?", options: ["1", "3", "6"], answer: 1, explain: "(a + b)³ = a³ + 3a²b + 3ab² + b³: la riga 1-3-3-1 del triangolo di Tartaglia." },
        { type: "tf", q: "(x + y)² è sempre uguale a x² + y².", answer: false, explain: "Manca il doppio prodotto 2xy: l'uguaglianza vale solo se xy = 0." }
      ]
    }
  ],
  glossary: [
    { t: "Monomio", d: "Espressione letterale con soli prodotti tra numeri e lettere (con esponenti naturali)." },
    { t: "Coefficiente", d: "La parte numerica di un monomio." },
    { t: "Parte letterale", d: "L'insieme delle lettere con i loro esponenti in un monomio." },
    { t: "Monomi simili", d: "Monomi con la stessa parte letterale." },
    { t: "Grado di un monomio", d: "Somma degli esponenti delle lettere (grado complessivo)." },
    { t: "Polinomio", d: "Somma algebrica di monomi." },
    { t: "Forma normale", d: "Scrittura di un polinomio senza termini simili né operazioni da eseguire." },
    { t: "Polinomio omogeneo", d: "Polinomio i cui termini hanno tutti lo stesso grado." },
    { t: "Prodotto notevole", d: "Prodotto tra polinomi con un risultato di forma standard, come (a + b)²." },
    { t: "Triangolo di Tartaglia", d: "Tabella dei coefficienti binomiali; la riga n dà i coefficienti di (a + b)ⁿ." },
    { t: "Zero di un polinomio", d: "Valore k della variabile per cui P(k) = 0." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale dei seguenti non è un monomio?", options: ["−5x²y", "3/x", "(2/3)ab"], answer: 1, explain: "Una lettera al denominatore non è ammessa nei monomi: 3/x è una frazione algebrica." },
      { type: "num", q: "Qual è il grado complessivo di 4a³b²c?", answer: 6, explain: "3 + 2 + 1 = 6." },
      { type: "mc", q: "Riduci: 7x²y − 3xy² + 2x²y − xy²", options: ["9x²y − 4xy²", "9x²y + 4xy²", "5x²y − 2xy²"], answer: 0, explain: "Simili: x²y: 7 + 2 = 9; xy²: −3 − 1 = −4." },
      { type: "mc", q: "Quanto vale (−2a²b)³?", options: ["−8a⁶b³", "−6a⁶b³", "8a⁵b³"], answer: 0, explain: "(−2)³ = −8; (a²)³ = a⁶; b³." },
      { type: "num", q: "Calcola il valore numerico di 3x² − 2x + 1 per x = −2.", answer: 17, explain: "3·4 − 2·(−2) + 1 = 12 + 4 + 1 = 17." },
      { type: "mc", q: "Sviluppa (x + 3)(x − 5).", options: ["x² − 2x − 15", "x² + 2x − 15", "x² − 15"], answer: 0, explain: "x² − 5x + 3x − 15 = x² − 2x − 15." },
      { type: "mc", q: "Sviluppa (2a − 3b)².", options: ["4a² − 9b²", "4a² − 12ab + 9b²", "4a² + 12ab + 9b²"], answer: 1, explain: "(2a)² − 2·2a·3b + (3b)² = 4a² − 12ab + 9b²." },
      { type: "num", q: "Calcola con un prodotto notevole: 62². Dai il risultato.", answer: 3844, explain: "(60 + 2)² = 3600 + 240 + 4 = 3844." },
      { type: "tf", q: "(a + b)(a − b) = a² − 2ab + b².", answer: false, explain: "Somma per differenza dà a² − b²: i doppi prodotti si cancellano." },
      { type: "order", q: "Metti in ordine i passi per moltiplicare (x + 2)(3x − 1).", items: ["Moltiplicare x per 3x e per −1", "Moltiplicare 2 per 3x e per −1", "Scrivere tutti i prodotti: 3x² − x + 6x − 2", "Ridurre i termini simili", "Risultato: 3x² + 5x − 2"], explain: "Ogni termine per ogni termine, poi si sommano i simili: −x + 6x = 5x." },
      { type: "text", q: "Come si chiama il triangolo numerico (chiamato in Francia \"di Pascal\") che dà i coefficienti di (a + b)ⁿ?", answer: ["triangolo di tartaglia", "tartaglia", "il triangolo di tartaglia"], explain: "In Italia lo chiamiamo triangolo di Tartaglia." }
    ]
  }
});
