TOPIC('it', {
  id: "m1-mat-numeri-naturali",
  title: "I numeri naturali e le quattro operazioni",
  intro: "I <b>numeri naturali</b> sono i numeri per contare: 0, 1, 2, 3… Alle medie impariamo a guardarli come un vero <b>insieme</b> (ℕ), a conoscere bene il <b>sistema decimale posizionale</b> e a usare le <b>proprietà</b> delle quattro operazioni per calcolare più velocemente e risolvere le <b>espressioni</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "L'insieme ℕ e la retta dei numeri",
      html: `<p>L'insieme dei numeri naturali si indica con <b>ℕ</b>: ℕ = { 0, 1, 2, 3, 4, … }.</p>
<ul>
<li>Ha un <b>primo</b> elemento, lo <b>0</b>, ma <b>non ha un ultimo</b>: è infinito. Ogni numero n ha un <b>successivo</b> n + 1.</li>
<li>Ogni numero (tranne lo 0) ha un <b>precedente</b> n − 1.</li>
<li>È un insieme <b>ordinato</b>: dati due numeri diversi, uno è sempre minore dell'altro (simboli <b>&lt;</b>, <b>&gt;</b>, <b>=</b>).</li>
<li>È <b>discreto</b>: tra due naturali consecutivi (es. 4 e 5) non c'è nessun altro naturale.</li>
</ul>
<p>I numeri naturali si possono rappresentare sulla <b>semiretta orientata</b>: si fissa un punto per lo 0 (l'<b>origine</b>), un verso (la freccia) e un'<b>unità di misura</b> (un segmento sempre uguale). Ogni numero corrisponde a un punto.</p>`
    },
    {
      type: "widget",
      title: "La semiretta dei numeri naturali",
      widget: "numberLine",
      options: { min: 0, max: 20, step: 1, marks: [7, 15] },
      caption: "Fai i salti: da 7 a 15 quanti passi ci sono? È la sottrazione 15 − 7 = 8!"
    },
    {
      type: "text",
      title: "Il sistema decimale posizionale",
      html: `<p>Il nostro sistema di numerazione è:</p>
<ul>
<li><b>decimale</b>: usa 10 cifre (0, 1, 2, … 9) e ogni 10 unità di un ordine formano 1 unità dell'ordine superiore (10 unità = 1 decina, 10 decine = 1 centinaio…);</li>
<li><b>posizionale</b>: il valore di una cifra dipende dalla sua <b>posizione</b>. In <b>333</b> le tre cifre sono uguali ma valgono 300, 30 e 3!</li>
</ul>
<p>Le cifre si raggruppano in <b>classi</b> di tre: unità semplici, migliaia, milioni, miliardi. Si legge da sinistra e si separano le classi con un punto (o uno spazio): <b>4.507.230</b> = quattro milioni cinquecentosettemila duecentotrenta.</p>
<p><b>Forma polinomiale</b>: 4.507 = 4 × 1000 + 5 × 100 + 0 × 10 + 7 × 1.</p>
<p>Il <b>valore</b> di una cifra cambia con la posizione, e lo <b>zero</b> è fondamentale: indica che quella posizione è vuota (407 ≠ 47).</p>`
    },
    {
      type: "3d",
      title: "Il valore posizionale con i cubetti",
      scene: "blocks",
      options: { mode: "base10", value: 245 },
      caption: "Una lastra = 1 centinaio (10 × 10 cubetti), un'asta = 1 decina, un cubetto = 1 unità. 245 = 2 centinaia + 4 decine + 5 unità. Cambia il numero con il cursore."
    },
    {
      type: "text",
      title: "Le quattro operazioni e i loro termini",
      html: `<table>
<tr><th>Operazione</th><th>Termini</th><th>Risultato</th><th>Esempio</th></tr>
<tr><td><b>Addizione</b> +</td><td>addendi</td><td>somma</td><td>12 + 8 = 20</td></tr>
<tr><td><b>Sottrazione</b> −</td><td>minuendo, sottraendo</td><td>differenza (o resto)</td><td>20 − 8 = 12</td></tr>
<tr><td><b>Moltiplicazione</b> ×</td><td>fattori</td><td>prodotto</td><td>6 × 4 = 24</td></tr>
<tr><td><b>Divisione</b> :</td><td>dividendo, divisore</td><td>quoziente (e resto)</td><td>24 : 4 = 6</td></tr>
</table>
<p>Sottrazione e divisione sono le operazioni <b>inverse</b> di addizione e moltiplicazione: 20 − 8 = 12 perché 12 + 8 = 20; 24 : 4 = 6 perché 6 × 4 = 24.</p>
<p><b>In ℕ non sempre si può fare tutto</b>:</p>
<ul>
<li>addizione e moltiplicazione danno <b>sempre</b> un numero naturale: si dice che sono operazioni <b>interne</b> in ℕ;</li>
<li>la sottrazione si può fare solo se il minuendo è ≥ del sottraendo (3 − 5 non dà un naturale);</li>
<li>la divisione esatta si può fare solo se il dividendo è un <b>multiplo</b> del divisore; altrimenti c'è un <b>resto</b>: 25 : 4 = 6 resto 1, cioè 25 = 4 × 6 + 1.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Lo zero e l'uno: numeri speciali",
      html: `<ul>
<li><b>0 è l'elemento neutro dell'addizione</b>: a + 0 = a. Anche a − 0 = a.</li>
<li><b>1 è l'elemento neutro della moltiplicazione</b>: a × 1 = a. Anche a : 1 = a.</li>
<li><b>0 è l'elemento assorbente della moltiplicazione</b>: a × 0 = 0 (legge di annullamento del prodotto: se un prodotto vale 0, almeno un fattore è 0).</li>
<li><b>0 : a = 0</b> (con a ≠ 0): zero caramelle divise tra 5 amici = 0 caramelle ciascuno.</li>
<li><b>a : 0 è impossibile</b>: nessun numero moltiplicato per 0 dà a.</li>
<li><b>0 : 0 è indeterminato</b>: qualsiasi numero moltiplicato per 0 dà 0, quindi non c'è un'unica risposta.</li>
</ul>`
    },
    {
      type: "text",
      title: "Le proprietà delle operazioni",
      html: `<p>Le proprietà sono «regole del gioco» sempre vere, che servono a <b>calcolare a mente</b> più velocemente.</p>
<ul>
<li><b>Commutativa</b> (addizione e moltiplicazione): cambiando l'ordine dei termini il risultato non cambia.<br>7 + 25 = 25 + 7 &nbsp;&nbsp; 4 × 9 = 9 × 4</li>
<li><b>Associativa</b> (addizione e moltiplicazione): si possono sostituire due o più termini con il loro risultato.<br>17 + 8 + 2 = 17 + (8 + 2) = 17 + 10 = 27 &nbsp;&nbsp; 25 × 7 × 4 = (25 × 4) × 7 = 700</li>
<li><b>Dissociativa</b>: si può scomporre un termine in una somma (o un prodotto).<br>48 + 7 = 48 + 2 + 5 = 55 &nbsp;&nbsp; 15 × 6 = 15 × 2 × 3 = 30 × 3 = 90</li>
<li><b>Distributiva</b> della moltiplicazione rispetto all'addizione (e alla sottrazione):<br>7 × 12 = 7 × (10 + 2) = 70 + 14 = 84 &nbsp;&nbsp; 9 × 98 = 9 × (100 − 2) = 900 − 18 = 882</li>
<li><b>Invariantiva della sottrazione</b>: aggiungendo o togliendo lo stesso numero a minuendo e sottraendo la differenza non cambia.<br>83 − 29 = (83 + 1) − (29 + 1) = 84 − 30 = 54</li>
<li><b>Invariantiva della divisione</b>: moltiplicando o dividendo dividendo e divisore per lo stesso numero (≠ 0) il quoziente non cambia.<br>350 : 50 = 35 : 5 = 7 &nbsp;&nbsp; 140 : 5 = 280 : 10 = 28</li>
</ul>
<p>Attenzione: sottrazione e divisione <b>non</b> sono commutative (8 − 3 ≠ 3 − 8) né associative ((24 : 4) : 2 = 3, ma 24 : (4 : 2) = 12).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: calcolo veloce al supermercato",
      html: `<p>Compri <b>4</b> confezioni di succhi da <b>€ 2,99</b>... ragioniamo in centesimi: 299 centesimi.</p>
<p>4 × 299 = 4 × (300 − 1) = 1200 − 4 = <b>1196</b> centesimi = <b>€ 11,96</b> (proprietà distributiva).</p>
<p>Poi paghi con <b>€ 20</b>: 2000 − 1196 = ? Con l'invariantiva aggiungo 4 a entrambi: 2004 − 1200 = <b>804</b> centesimi = <b>€ 8,04</b> di resto.</p>
<p>Infine dividi la spesa di <b>€ 36</b> tra <b>4</b> amici, usando l'invariantiva della divisione: 36 : 4 = 18 : 2 = <b>€ 9</b> a testa.</p>
<p>Niente calcolatrice: solo proprietà!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: proprietà",
      questions: [
        { type: "mc", q: "Quale proprietà è usata in 25 × 13 × 4 = (25 × 4) × 13?", options: ["Distributiva", "Commutativa e associativa", "Invariantiva", "Dissociativa"], answer: 1, explain: "Si scambia l'ordine (commutativa) e si raggruppano 25 × 4 = 100 (associativa)." },
        { type: "num", q: "Calcola a mente con la distributiva: 6 × 102 = ?", answer: 612, tol: 0, explain: "6 × 100 + 6 × 2 = 600 + 12 = 612." },
        { type: "tf", q: "La sottrazione gode della proprietà commutativa.", answer: false, explain: "10 − 4 = 6, ma 4 − 10 non è nemmeno un numero naturale." },
        { type: "mc", q: "Quanto fa 7 : 0?", options: ["0", "7", "1", "È impossibile"], answer: 3, explain: "Nessun numero moltiplicato per 0 dà 7: la divisione per zero è impossibile." }
      ]
    },
    {
      type: "text",
      title: "Le espressioni: l'ordine delle operazioni",
      html: `<p>Un'<b>espressione</b> è una serie di operazioni da eseguire. Per avere tutti lo stesso risultato si segue un ordine preciso:</p>
<ol>
<li>prima si risolvono le <b>parentesi</b>: tonde ( ), poi quadre [ ], poi graffe { };</li>
<li>dentro le parentesi (e fuori) si fanno prima <b>moltiplicazioni e divisioni</b>, nell'ordine in cui compaiono da sinistra a destra;</li>
<li>poi <b>addizioni e sottrazioni</b>, da sinistra a destra.</li>
</ol>
<p>Esempio: <b>{ 30 − [ 4 × (7 − 2) + 3 ] } : 7</b></p>
<ul>
<li>tonde: 7 − 2 = 5 → { 30 − [ 4 × 5 + 3 ] } : 7</li>
<li>quadre: 4 × 5 + 3 = 20 + 3 = 23 → { 30 − 23 } : 7</li>
<li>graffe: 30 − 23 = 7 → 7 : 7 = <b>1</b></li>
</ul>
<p>Errore tipico: in 2 + 3 × 4 fare prima 2 + 3 = 5 e poi × 4 = 20. Sbagliato! Prima la moltiplicazione: 2 + 12 = <b>14</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: dal problema all'espressione",
      html: `<p><b>Problema</b>: la classe 1ª A va in gita. Il pullman costa € 450 e l'ingresso al museo € 6 a persona. Gli alunni sono 22 e gli accompagnatori 3 (che pagano anche l'ingresso). Gli insegnanti dividono la spesa totale tra i soli <b>alunni</b>. Quanto paga ogni alunno?</p>
<p><b>Espressione</b>: [ 450 + 6 × (22 + 3) ] : 22</p>
<ul>
<li>(22 + 3) = 25 persone</li>
<li>6 × 25 = 150 € di ingressi</li>
<li>450 + 150 = 600 € in tutto</li>
<li>600 : 22 = 27 con resto 6 → ogni alunno paga € 27 e restano € 6 da coprire (oppure si arrotonda: 22 × 28 = 616 €, avanzano 16 € per la merenda!).</li>
</ul>
<p>Scrivere un'espressione unica aiuta a vedere tutta la struttura del problema.</p>`
    },
    {
      type: "curiosity",
      title: "Lo zero: un'invenzione indiana",
      html: `<p>Gli antichi Romani non avevano lo zero e usavano un sistema <b>non posizionale</b>: in MMXXVI la M vale sempre 1000 dovunque sia. Fare una moltiplicazione con i numeri romani era un incubo: si usava l'abaco!</p>
<p>Le cifre che usiamo e lo <b>zero</b> come numero nacquero in <b>India</b>: il matematico <b>Brahmagupta</b> nel <b>628 d.C.</b> scrisse le prime regole per calcolare con lo zero. Gli Arabi le diffusero (per questo le chiamiamo «cifre arabe»), e in Europa le portò <b>Leonardo Fibonacci</b> da Pisa con il <i>Liber abaci</i> nel <b>1202</b>. La parola «zero» viene dall'arabo <i>ṣifr</i>, «vuoto», da cui anche «cifra»!</p>`
    },
    {
      type: "curiosity",
      title: "Il piccolo Gauss e la somma da 1 a 100",
      html: `<p>Si racconta che, intorno al 1785, il maestro di <b>Carl Friedrich Gauss</b>, che aveva circa 8 anni, chiese alla classe di sommare tutti i numeri da 1 a 100, per tenerla occupata. Gauss rispose dopo pochi secondi: <b>5050</b>!</p>
<p>Il suo trucco usa la proprietà commutativa e associativa: 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101… Ci sono 50 coppie che valgono 101: 50 × 101 = <b>5050</b>.</p>
<p>Prova tu: quanto fa la somma da 1 a 20? (10 coppie da 21 = 210)</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per moltiplicare",
      intro: "In giro per il mondo e nella storia si moltiplica in tanti modi diversi. Tutti funzionano grazie alla proprietà distributiva!",
      tabs: [
        {
          label: "🇯🇵 Metodo delle linee",
          html: "<p>In Giappone e in Cina si insegna a moltiplicare disegnando linee: le decine di un fattore in una direzione, le unità nell'altra. Si contano i punti d'incrocio in ogni zona: sono centinaia, decine e unità. Guarda l'animazione.</p>",
          widget: "lineMultiply",
          options: { a: 23, b: 12 }
        },
        {
          label: "🇷🇺 Il contadino russo",
          html: "<p>Un metodo antichissimo, usato dai contadini russi: si <b>dimezza</b> un numero e si <b>raddoppia</b> l'altro; si cancellano le righe in cui il numero dimezzato è pari, e si sommano quelli rimasti. Funziona perché, in fondo, scrive il numero in base 2!</p>",
          widget: "russianPeasant",
          options: { a: 37, b: 24 }
        },
        {
          label: "🏺 Metodo egizio",
          html: "<p>Gli Egizi, 4.000 anni fa (papiro di Rhind), moltiplicavano solo per <b>raddoppi</b>: 1, 2, 4, 8, 16… volte il numero, e poi sommavano le righe giuste. È la proprietà distributiva: 13 × 21 = (8 + 4 + 1) × 21.</p>",
          widget: "egyptianMultiply",
          options: { a: 13, b: 21 }
        },
        {
          label: "🔢 A gelosia (Fibonacci)",
          html: "<p>Il metodo a gelosia (si chiama così perché la griglia ricorda le grate delle finestre, dette «gelosie») arrivò in Europa con Fibonacci dal mondo arabo. Ogni casella contiene un prodotto di due cifre e si sommano le diagonali.</p>",
          widget: "lattice",
          options: { a: 47, b: 36 }
        },
        {
          label: "🧊 La distributiva con i cubetti",
          html: "<p>Un rettangolo di 7 × 12 cubetti si può spezzare in un rettangolo 7 × 10 e uno 7 × 2: 70 + 14 = 84. È proprio la proprietà distributiva, vista in 3D. Prova a cambiare le misure.</p>",
          scene: "blocks",
          options: { mode: "array", a: 7, b: 12 }
        }
      ]
    },
    {
      type: "widget",
      title: "Riconosci la proprietà",
      widget: "match",
      options: { pairs: [["5 + 9 = 9 + 5", "commutativa"], ["(6 + 4) + 7 = 6 + (4 + 7)", "associativa"], ["8 × 15 = 8 × 10 + 8 × 5", "distributiva"], ["90 − 38 = 92 − 40", "invariantiva della sottrazione"], ["600 : 30 = 60 : 3", "invariantiva della divisione"], ["a × 1 = a", "elemento neutro"], ["a × 0 = 0", "elemento assorbente"]] },
      caption: "Collega ogni uguaglianza alla proprietà che usa."
    },
    {
      type: "quiz",
      title: "Mini-quiz: espressioni",
      questions: [
        { type: "num", q: "Quanto fa 5 + 3 × 4?", answer: 17, tol: 0, explain: "Prima la moltiplicazione: 3 × 4 = 12; poi 5 + 12 = 17." },
        { type: "num", q: "Quanto fa (5 + 3) × 4?", answer: 32, tol: 0, explain: "Prima la parentesi: 8 × 4 = 32." },
        { type: "num", q: "Risolvi: [ 20 − (3 + 2) × 3 ] × 2", answer: 10, tol: 0, explain: "(3 + 2) = 5; 5 × 3 = 15; 20 − 15 = 5; 5 × 2 = 10." },
        { type: "mc", q: "In 48 : 6 × 2 qual è il risultato corretto?", options: ["4", "16", "8", "96"], answer: 1, explain: "Moltiplicazioni e divisioni si fanno da sinistra a destra: 48 : 6 = 8; 8 × 2 = 16." }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: perché le operazioni funzionano così",
      nodes: [
        { id: "contare", label: "Contare", x: 50, y: 5, color: "#64748b", html: "Associare un numero a ogni oggetto: 1, 2, 3…", why: "L'osso di Ishango (Congo, circa 20.000 anni fa) ha delle tacche che forse servivano a contare: il bisogno di contare è antichissimo." },
        { id: "naturali", label: "Insieme ℕ", x: 50, y: 20, color: "#2563eb", html: "0, 1, 2, 3… ordinato, infinito, discreto.", why: "Giuseppe Peano, matematico di Cuneo, nel 1889 descrisse ℕ con cinque assiomi: c'è lo 0, ogni numero ha un successivo, numeri diversi hanno successivi diversi, 0 non è successivo di nessuno, vale il principio di induzione." },
        { id: "posizionale", label: "Sistema posizionale", x: 15, y: 34, color: "#0ea5e9", html: "10 cifre, il valore dipende dalla posizione.", why: "Usiamo la base 10 probabilmente perché abbiamo 10 dita. Lo zero indiano (Brahmagupta, 628) rese possibile il sistema; Fibonacci lo portò in Europa nel 1202." },
        { id: "addizione", label: "Addizione", x: 35, y: 42, color: "#16a34a", html: "Unire quantità; elemento neutro 0.", why: "Peano la definisce con il «successivo»: a + 1 è il successivo di a, a + 2 il successivo del successivo… Da qui derivano commutativa e associativa." },
        { id: "moltiplicazione", label: "Moltiplicazione", x: 65, y: 42, color: "#ea580c", html: "Addizione ripetuta; elemento neutro 1, assorbente 0.", why: "3 × 4 = 4 + 4 + 4. Disegnata come rettangolo di 3 righe e 4 colonne, si vede che girandolo (4 × 3) il numero di quadretti non cambia: ecco la commutativa." },
        { id: "inverse", label: "Sottrazione e divisione", x: 85, y: 30, color: "#dc2626", html: "Operazioni inverse; non sempre possibili in ℕ.", why: "Per rendere sempre possibile la sottrazione i matematici hanno inventato i numeri negativi (ℤ); per la divisione, le frazioni (ℚ)." },
        { id: "distributiva", label: "Distributiva", x: 50, y: 62, color: "#9333ea", html: "a × (b + c) = a × b + a × c.", why: "Un rettangolo di lato a e (b + c) si divide in due rettangoli a × b e a × c. È la base di tutti gli algoritmi di moltiplicazione in colonna." },
        { id: "invariantive", label: "Proprietà invariantive", x: 85, y: 62, color: "#db2777", html: "Sottrazione: + o − lo stesso numero; divisione: × o : lo stesso numero.", why: "Sottrazione: se due persone invecchiano di un anno, la loro differenza d'età non cambia. Divisione: è lo stesso principio delle frazioni equivalenti." },
        { id: "espressioni", label: "Espressioni", x: 30, y: 84, color: "#f59e0b", html: "Parentesi, poi × e :, poi + e −.", why: "È una convenzione condivisa dai matematici (stabilita tra Seicento e Ottocento) perché tutti ottengano lo stesso risultato; la moltiplicazione «lega di più» perché è un'addizione abbreviata." },
        { id: "calcolomentale", label: "Calcolo veloce", x: 70, y: 86, color: "#0f766e", html: "Proprietà usate per calcolare a mente.", why: "I metodi di altri Paesi (linee giapponesi, contadino russo, egizio, gelosia) sono tutti modi diversi di applicare la proprietà distributiva." }
      ],
      edges: [["contare", "naturali", "nasce"], ["naturali", "posizionale", "si scrive con"], ["naturali", "addizione", "operazione"], ["addizione", "moltiplicazione", "ripetuta"], ["addizione", "inverse", "inversa"], ["moltiplicazione", "inverse", "inversa"], ["moltiplicazione", "distributiva", "rispetto alla +"], ["inverse", "invariantive", "godono di"], ["distributiva", "calcolomentale", "permette"], ["addizione", "espressioni", "ordine"], ["moltiplicazione", "espressioni", "ordine"]]
    }
  ],
  glossary: [
    { t: "Numeri naturali (ℕ)", d: "I numeri 0, 1, 2, 3… usati per contare." },
    { t: "Sistema posizionale", d: "Sistema in cui il valore di una cifra dipende dalla sua posizione." },
    { t: "Addendi / somma", d: "Termini e risultato dell'addizione." },
    { t: "Minuendo, sottraendo, differenza", d: "Termini e risultato della sottrazione." },
    { t: "Fattori / prodotto", d: "Termini e risultato della moltiplicazione." },
    { t: "Dividendo, divisore, quoziente", d: "Termini e risultato della divisione." },
    { t: "Elemento neutro", d: "Numero che, in un'operazione, lascia invariato l'altro termine (0 per +, 1 per ×)." },
    { t: "Elemento assorbente", d: "Lo 0 nella moltiplicazione: qualsiasi numero per 0 dà 0." },
    { t: "Proprietà distributiva", d: "a × (b + c) = a × b + a × c." },
    { t: "Espressione", d: "Sequenza di operazioni da eseguire in un ordine stabilito." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "tf", q: "L'insieme dei numeri naturali ha un ultimo elemento.", answer: false, explain: "Ogni numero ha un successivo: ℕ è infinito." },
      { type: "mc", q: "Nel numero 3.582.104 la cifra 8 vale…", options: ["8", "8.000", "80.000", "800.000"], answer: 2, explain: "È nella posizione delle decine di migliaia: 80.000." },
      { type: "mc", q: "Come si chiama il risultato della divisione?", options: ["Prodotto", "Differenza", "Quoziente", "Somma"], answer: 2, explain: "Dividendo : divisore = quoziente." },
      { type: "num", q: "Calcola con l'invariantiva: 1.000 − 397 = ?", answer: 603, tol: 0, explain: "Aggiungo 3 a entrambi: 1.003 − 400 = 603." },
      { type: "num", q: "Calcola con la distributiva: 15 × 99 = ?", answer: 1485, tol: 0, explain: "15 × 100 − 15 = 1500 − 15 = 1485." },
      { type: "mc", q: "Quale uguaglianza mostra la proprietà associativa?", options: ["3 + 7 = 7 + 3", "(2 × 5) × 9 = 2 × (5 × 9)", "4 × (3 + 2) = 12 + 8", "40 : 8 = 20 : 4"], answer: 1, explain: "I fattori vengono raggruppati in modo diverso, il prodotto non cambia." },
      { type: "num", q: "Risolvi: 36 : (2 + 7) × 5 − 4", answer: 16, tol: 0, explain: "(2 + 7) = 9; 36 : 9 = 4; 4 × 5 = 20; 20 − 4 = 16." },
      { type: "num", q: "Risolvi: { 50 − [ 3 × (4 + 6) − 5 ] } : 5", answer: 5, tol: 0, explain: "(4 + 6) = 10; 3 × 10 − 5 = 25; 50 − 25 = 25; 25 : 5 = 5." },
      { type: "tf", q: "0 : 8 = 0", answer: true, explain: "Infatti 0 × 8 = 0. È invece impossibile 8 : 0." },
      { type: "num", q: "Quanto fa la somma di tutti i numeri da 1 a 10 (trucco di Gauss)?", answer: 55, tol: 0, explain: "5 coppie da 11: 5 × 11 = 55." },
      { type: "order", q: "Metti in ordine i passi per risolvere un'espressione", items: ["Parentesi tonde", "Parentesi quadre", "Parentesi graffe", "Fuori dalle parentesi: × e :", "Fuori dalle parentesi: + e −"], explain: "Dall'interno verso l'esterno; dentro ogni livello prima × e :, poi + e −." },
      { type: "mc", q: "Chi portò in Europa le cifre indo-arabiche con il Liber abaci (1202)?", options: ["Pitagora", "Leonardo Fibonacci", "Galileo", "Euclide"], answer: 1, explain: "Leonardo Pisano, detto Fibonacci." }
    ],
    gen: [["mult2", 1], ["div2", 1]]
  }
});
