TOPIC('it', {
  id: "l5-mat-continuita",
  title: "Le funzioni continue",
  intro: "Intuitivamente una funzione è <b>continua</b> se si può disegnare il suo grafico «senza staccare la penna dal foglio». Il limite permette di rendere precisa questa idea e di dimostrare teoremi potenti: se la temperatura passa da −5 °C a +10 °C senza salti, in qualche istante vale esattamente 0 °C; una funzione continua su un intervallo chiuso ha sempre un massimo e un minimo. In questa lezione vedi la definizione, la classificazione dei <b>punti di discontinuità</b>, i grandi teoremi (<b>zeri, valori intermedi, Weierstrass</b>) e il loro uso per risolvere equazioni e trovare asintoti.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Che cosa vuol dire «continua»",
      html: `<p>Una funzione f è <b>continua in x₀</b> (punto del dominio) se:</p>
<p style="text-align:center"><b>lim<sub>x→x₀</sub> f(x) = f(x₀)</b></p>
<p>Questa sola uguaglianza racchiude tre richieste: (1) f è definita in x₀; (2) il limite in x₀ esiste ed è finito; (3) i due valori coincidono. Una funzione è continua <b>in un intervallo</b> se lo è in ogni suo punto.</p>
<p>Sono continue nel loro dominio tutte le funzioni elementari: polinomi, funzioni razionali (dove il denominatore non si annulla), radici, esponenziali, logaritmi, seno, coseno, tangente (dove definita). Somma, prodotto, quoziente (con denominatore ≠ 0) e <b>composizione</b> di funzioni continue sono continue.</p>
<p>Per questo, con le funzioni continue, calcolare un limite è semplice: <b>basta sostituire</b>. Per esempio lim<sub>x→π</sub> (x·cos x) = π · (−1) = −π.</p>`
    },
    {
      type: "text",
      title: "I punti di discontinuità",
      html: `<p>Se una funzione non è continua in un punto x₀ (in cui è definita in un intorno bucato), si parla di <b>punto di discontinuità</b>. Si classificano in tre specie:</p>
<ul>
<li><b>Prima specie (salto)</b>: esistono finiti i limiti destro e sinistro, ma sono diversi. Il «salto» è la differenza tra i due. Es.: f(x) = |x|/x in 0 (limiti −1 e +1, salto 2).</li>
<li><b>Seconda specie</b>: almeno uno dei limiti laterali è infinito oppure non esiste. Es.: 1/x in 0 (limiti ±∞); sen(1/x) in 0 (oscilla senza limite).</li>
<li><b>Terza specie (eliminabile)</b>: il limite esiste finito, ma f non è definita in x₀ oppure f(x₀) ≠ lim. Basta ridefinire f(x₀) = limite per «riparare» la funzione. Es.: (x² − 1)/(x − 1) in x = 1: limite 2, ma f(1) non esiste; ponendo f(1) = 2 si ottiene x + 1.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Le tre specie di discontinuità",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#475569" stroke-width="2">
<line x1="10" y1="200" x2="190" y2="200"/><line x1="100" y1="60" x2="100" y2="250"/>
<line x1="210" y1="200" x2="390" y2="200"/><line x1="300" y1="60" x2="300" y2="250"/>
<line x1="410" y1="200" x2="590" y2="200"/><line x1="500" y1="60" x2="500" y2="250"/>
</g>
<g fill="none" stroke="#dc2626" stroke-width="4">
<path d="M 20 220 L 100 200"/>
<path d="M 100 130 L 180 100"/>
<path d="M 220 230 Q 280 215 295 90"/>
<path d="M 305 250 Q 320 190 380 175"/>
<path d="M 420 220 L 580 140"/>
</g>
<circle cx="100" cy="200" r="6" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<circle cx="100" cy="130" r="6" fill="#dc2626" stroke="#dc2626" stroke-width="3"/>
<circle cx="500" cy="180" r="6" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<circle cx="500" cy="240" r="6" fill="#dc2626" stroke="#dc2626" stroke-width="3"/>
<line x1="300" y1="60" x2="300" y2="250" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 5"/>
<g font-size="16" fill="#1f2937" font-weight="bold" text-anchor="middle">
<text x="100" y="35">1ª specie</text><text x="300" y="35">2ª specie</text><text x="500" y="35">3ª specie</text>
</g>
<g font-size="14" fill="#1f2937" text-anchor="middle">
<text x="100" y="280">salto</text><text x="300" y="280">limite infinito</text><text x="500" y="280">buco eliminabile</text>
</g>
</svg>`,
      caption: "Salto, infinito, buco: il «tipo» di rottura del grafico decide la specie del punto di discontinuità."
    },
    {
      type: "widget",
      title: "Classifica le discontinuità",
      widget: "classify",
      options: { groups: ["1ª specie (salto)", "2ª specie", "3ª specie (eliminabile)"], items: [
        ["|x|/x in x = 0", 0],
        ["1/x in x = 0", 1],
        ["(x² − 4)/(x − 2) in x = 2", 2],
        ["1/x² in x = 0", 1],
        ["sen x / x in x = 0", 2],
        ["parte intera di x in x = 3", 0],
        ["tg x in x = π/2", 1]
      ] },
      caption: "Guarda i limiti destro e sinistro: finiti e diversi (1ª), infiniti o inesistenti (2ª), finiti e uguali ma f non coincide (3ª)."
    },
    {
      type: "example",
      title: "Discontinuità di una funzione definita a tratti",
      html: `<p>Per quali valori di <b>k</b> la funzione f(x) = x² + k per x ≤ 1, f(x) = 3x − 1 per x &gt; 1 è continua in x = 1?</p>
<p>Limite sinistro: lim<sub>x→1⁻</sub> (x² + k) = 1 + k = f(1). Limite destro: lim<sub>x→1⁺</sub> (3x − 1) = 2. Per la continuità devono coincidere: 1 + k = 2, quindi <b>k = 1</b>. Per ogni altro k c'è un salto di ampiezza |2 − (1 + k)| = |1 − k|.</p>
<p>Questo tipo di problema si incontra anche in fisica e ingegneria: ad esempio una tariffa telefonica o una tassa a scaglioni è definita a tratti, e si vuole evitare «salti» ingiusti sulle soglie.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: continuità",
      questions: [
        { type: "mc", q: "f(x) = (x² − 9)/(x − 3) in x = 3 presenta…", options: ["discontinuità eliminabile", "un salto", "un asintoto verticale"], answer: 0, explain: "Il limite vale 6 (finito) ma f(3) non è definita: terza specie." },
        { type: "num", q: "Per quale k la funzione f(x) = 2x + k per x < 0, f(x) = 5 per x ≥ 0 è continua in 0?", answer: 5, explain: "Il limite sinistro è k, e deve valere f(0) = 5." },
        { type: "tf", q: "Ogni funzione derivabile in un punto è continua in quel punto.", answer: true, explain: "È un teorema della prossima lezione: la derivabilità implica la continuità, non viceversa." }
      ]
    },
    {
      type: "text",
      title: "Il teorema degli zeri (Bolzano)",
      html: `<p>Il primo grande teorema: se una funzione continua cambia segno, deve passare per lo zero.</p>
<p style="text-align:center"><b>Teorema degli zeri.</b> Se f è continua in [a, b] e f(a) · f(b) &lt; 0, allora esiste almeno un c ∈ (a, b) tale che f(c) = 0.</p>
<p>Fu dimostrato da <b>Bernard Bolzano</b> nel 1817. Non dice quanti zeri ci siano né dove, ma garantisce l'<b>esistenza</b>. Con il metodo di bisezione (dividi l'intervallo a metà e tieni la metà in cui f cambia segno) si può anche <i>trovare</i> lo zero con la precisione voluta.</p>
<p><b>Esempio.</b> L'equazione x³ + x − 1 = 0 ha una soluzione in (0, 1)? f(x) = x³ + x − 1 è continua, f(0) = −1 &lt; 0 e f(1) = 1 &gt; 0: sì, c'è almeno una radice. Dimezzando: f(0,5) = −0,375 &lt; 0 ⇒ la radice è in (0,5; 1); f(0,75) ≈ 0,172 &gt; 0 ⇒ in (0,5; 0,75)… la radice è circa 0,682.</p>`
    },
    {
      type: "text",
      title: "Valori intermedi e Weierstrass",
      html: `<p><b>Teorema dei valori intermedi.</b> Se f è continua in [a, b], allora assume <i>tutti</i> i valori compresi tra f(a) e f(b). (Si ottiene dagli zeri applicandolo a f(x) − k.) L'immagine di un intervallo mediante una funzione continua è un intervallo.</p>
<p><b>Teorema di Weierstrass.</b> Se f è continua in un intervallo <b>chiuso e limitato</b> [a, b], allora f ha in [a, b] un <b>massimo</b> e un <b>minimo assoluti</b>.</p>
<p>Le ipotesi sono tutte necessarie:</p>
<ul>
<li>f(x) = 1/x su (0, 1] è continua ma non ha massimo (intervallo non chiuso).</li>
<li>f(x) = x su (0, 1) non ha né massimo né minimo.</li>
<li>f(x) = x su [0, +∞) non ha massimo (intervallo non limitato).</li>
<li>f(x) = x per x &lt; 1, f(1) = 0 su [0, 1] non ha massimo (non continua).</li>
</ul>`
    },
    {
      type: "example",
      title: "Due applicazioni quotidiane",
      html: `<p><b>Il tavolo che balla.</b> Un tavolo a 4 gambe appoggiato su un terreno irregolare ma senza gradini può sempre essere ruotato in modo da non ballare, a patto che il suolo sia continuo: nel ruotarlo di 90° una differenza d'altezza continua cambia segno, e per il teorema degli zeri si annulla in un angolo.</p>
<p><b>Le stesse temperature.</b> Sulla Terra esistono sempre due punti antipodali (opposti su un diametro) con la stessa temperatura: la funzione «differenza di temperatura tra due punti opposti» è continua lungo un cerchio massimo e cambia segno quando si scambiano i punti (da D a −D), dunque si annulla. È una conseguenza del teorema di Borsuk-Ulam e, in versione semplice, di quello degli zeri.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Per molto tempo si pensò che ogni funzione continua dovesse essere «liscia» quasi ovunque. Nel 1872 <b>Weierstrass</b> presentò una funzione continua in <b>ogni</b> punto ma <b>derivabile in nessuno</b>: un grafico senza salti ma tutto «spigoli». Oggi quelle curve sono alla base dei frattali e dei modelli del moto browniano.</p>`
    },
    {
      type: "curiosity",
      title: "Il pomeriggio di Bolzano",
      html: `<p>Bernard Bolzano (1781–1848) era un sacerdote e filosofo di Praga. Nel suo lavoro del 1817 dimostrò il teorema degli zeri usando un'idea di completezza dei numeri reali (il «sup» di un insieme limitato esiste), che oggi consideriamo fondamentale. Sospettato per le sue idee, fu rimosso dalla cattedra: il suo lavoro rimase poco noto fino a quando Weierstrass lo riscoprì.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la continuità",
      intro: "La continuità si può vedere in modi diversi, tutti equivalenti.",
      tabs: [
        {
          label: "✏️ La penna sul foglio",
          html: `<p>Il modo più semplice: una funzione è continua su un intervallo se puoi disegnare il suo grafico <b>senza sollevare la penna</b>. I salti sono penne sollevate, gli asintoti verticali sono «fughe all'infinito», i buchi eliminabili sono punti mancanti. Attenzione: è una guida, non una definizione. Per funzioni strane (come sen(1/x) prolungata) il disegno non è affidabile; serve il limite.</p>`
        },
        {
          label: "🌡️ Il termometro",
          html: `<p>Se la temperatura passa con continuità da −3 °C alle 6 del mattino a +12 °C alle 14, <b>deve</b> passare per ogni valore intermedio, e in particolare per 0 °C. È il teorema dei valori intermedi. Non si può «saltare» da −1 °C a +1 °C senza toccare tutti i valori in mezzo. In una situazione fisica reale la continuità è quasi una legge di natura: ecco perché le funzioni continue modellano così bene grandezze come temperatura, posizione, pressione.</p>`
        },
        {
          label: "🔲 Bisezione passo passo",
          html: `<p>Per cercare una radice di f(x) = x³ − 2 (cioè ∛2) in [1, 2]: f(1) = −1 &lt; 0, f(2) = 6 &gt; 0. Si prende il punto medio 1,5: f(1,5) = 1,375 &gt; 0 ⇒ la radice è in [1; 1,5]. Poi 1,25: f = −0,047 &lt; 0 ⇒ in [1,25; 1,5]. Poi 1,375: f = 0,6 &gt; 0 ⇒ in [1,25; 1,375]. Ogni passo dimezza l'incertezza: dopo 10 passi l'errore è minore di 1/1000. È come i calcolatori risolvono molte equazioni.</p>`,
          widget: "numberLine",
          options: { min: 1, max: 2, step: 0.05, marks: [1.25, 1.26, 1.375, 1.5] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della continuità",
      nodes: [
        { id: "def", label: "Definizione", x: 50, y: 6, color: "#6366f1", html: "lim f(x) = f(x₀): f definita, limite finito e uguale al valore.", why: "Nasce dall'idea di «non staccare la penna», resa precisa grazie al limite (Cauchy, 1821)." },
        { id: "alg", label: "Algebra e composizione", x: 18, y: 28, color: "#16a34a", html: "Somma, prodotto, quoziente e composizione di continue sono continue.", why: "Seguono dalle regole dei limiti: si costruisce così la continuità di tutte le funzioni elementari." },
        { id: "disc", label: "Discontinuità", x: 82, y: 28, color: "#ef4444", html: "1ª specie (salto), 2ª (infinito/inesistente), 3ª (eliminabile).", why: "Si classificano guardando i limiti destro e sinistro: sono i diversi modi in cui la condizione di continuità può fallire." },
        { id: "zeri", label: "Zeri (Bolzano)", x: 25, y: 55, color: "#f59e0b", html: "Cambio di segno ⇒ esiste uno zero.", why: "Bolzano (1817) lo dimostrò sfruttando la completezza di R: senza buchi sulla retta numerica, nessuna funzione continua può «saltare» lo zero." },
        { id: "int", label: "Valori intermedi", x: 52, y: 62, color: "#0ea5e9", html: "f assume tutti i valori tra f(a) e f(b).", why: "Si deduce dagli zeri applicandoli a f(x) − k. Dice che l'immagine di un intervallo è un intervallo." },
        { id: "wei", label: "Weierstrass", x: 80, y: 55, color: "#a855f7", html: "Su [a, b] chiuso e limitato esistono massimo e minimo assoluti.", why: "Dipende dalla compattezza di [a, b]; è il fondamento dei problemi di ottimizzazione." },
        { id: "app", label: "Applicazioni", x: 50, y: 88, color: "#14b8a6", html: "Bisezione, ottimizzazione, esistenza di soluzioni.", why: "Prima di cercare una soluzione serve sapere che esiste: questi teoremi lo garantiscono." }
      ],
      edges: [
        ["def", "alg", "si conserva con"],
        ["def", "disc", "non vale in"],
        ["def", "zeri", "implica"],
        ["zeri", "int", "generalizza in"],
        ["def", "wei", "su [a,b] implica"],
        ["int", "app", "usati in"],
        ["wei", "app", "usati in"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Continua in x₀: <b>lim f(x) = f(x₀)</b>.</li>
<li>Discontinuità: 1ª specie (limiti laterali finiti e diversi), 2ª (infinito o inesistente), 3ª (eliminabile).</li>
<li><b>Zeri</b>: f continua su [a, b] e f(a)·f(b) &lt; 0 ⇒ c'è uno zero in (a, b).</li>
<li><b>Valori intermedi</b>: f assume tutti i valori tra f(a) e f(b).</li>
<li><b>Weierstrass</b>: continua su [a, b] ⇒ massimo e minimo assoluti. Tutte le ipotesi servono.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: i teoremi",
      questions: [
        { type: "mc", q: "f(x) = x³ + x − 1 in [0, 1]: quale teorema garantisce una radice?", options: ["Teorema degli zeri", "Weierstrass", "De l'Hôpital"], answer: 0, explain: "f è continua, f(0) = −1 e f(1) = 1 hanno segni opposti." },
        { type: "tf", q: "La funzione f(x) = 1/x ha un massimo sull'intervallo (0, 1].", answer: false, explain: "L'intervallo non è chiuso: f cresce senza limite per x → 0⁺. Non vale Weierstrass." },
        { type: "num", q: "Una funzione continua su [0, 4] ha f(0) = −2 e f(4) = 6. Qual è il numero intero più grande, minore di 6, che sicuramente assume?", answer: 5, explain: "Per i valori intermedi assume tutti i valori in [−2, 6], quindi anche 5." }
      ]
    }
  ],
  glossary: [
    { t: "Funzione continua", d: "f è continua in x₀ se lim f(x) = f(x₀)." },
    { t: "Discontinuità di prima specie", d: "I limiti destro e sinistro esistono finiti ma sono diversi (salto)." },
    { t: "Discontinuità di seconda specie", d: "Almeno un limite laterale è infinito o non esiste." },
    { t: "Discontinuità eliminabile", d: "Il limite esiste finito ma f(x₀) non esiste o è diverso." },
    { t: "Teorema degli zeri", d: "Se f è continua in [a, b] e f(a)f(b) < 0, esiste c con f(c) = 0." },
    { t: "Teorema dei valori intermedi", d: "Una continua su un intervallo assume tutti i valori tra due suoi valori." },
    { t: "Teorema di Weierstrass", d: "Una continua su un intervallo chiuso e limitato ha massimo e minimo assoluti." },
    { t: "Metodo di bisezione", d: "Algoritmo che dimezza l'intervallo contenente la radice usando il cambio di segno." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale condizione NON fa parte della continuità di f in x₀?", options: ["f è derivabile in x₀", "f è definita in x₀", "il limite in x₀ esiste finito"], answer: 0, explain: "La derivabilità è più forte e non è richiesta dalla continuità." },
      { type: "num", q: "Per quale k è continua in x = 2 la funzione f(x) = x + k per x ≤ 2 e f(x) = x² per x > 2?", answer: 2, explain: "Limite sinistro 2 + k, limite destro 4: 2 + k = 4, k = 2." },
      { type: "mc", q: "f(x) = |x|/x in x = 0 ha…", options: ["discontinuità di 1ª specie", "discontinuità di 2ª specie", "discontinuità eliminabile"], answer: 0, explain: "I limiti laterali sono −1 e +1: finiti e diversi." },
      { type: "mc", q: "f(x) = 1/(x − 1) in x = 1 ha…", options: ["discontinuità di 2ª specie", "un salto", "una discontinuità eliminabile"], answer: 0, explain: "I limiti laterali sono −∞ e +∞: seconda specie." },
      { type: "tf", q: "Se f è continua in [a, b] e f(a) · f(b) > 0, allora non ha zeri in (a, b).", answer: false, explain: "Il teorema dà solo una condizione sufficiente: ad esempio x² − 0,25 ha due zeri in [−1, 1] anche se f(−1) · f(1) > 0." },
      { type: "mc", q: "Quale ipotesi manca perché f(x) = x abbia massimo sull'intervallo (0, 1)?", options: ["L'intervallo è aperto: non c'è massimo", "f non è continua", "L'intervallo non è limitato"], answer: 0, explain: "Weierstrass richiede [a, b] chiuso e limitato." },
      { type: "num", q: "La funzione (x² − 4)/(x − 2) in x = 2 ha un limite finito: quanto vale?", answer: 4, explain: "(x − 2)(x + 2)/(x − 2) = x + 2 → 4." },
      { type: "tf", q: "Un polinomio di grado dispari ha sempre almeno uno zero reale.", answer: true, explain: "Agli estremi il polinomio assume segni opposti (±∞): per il teorema degli zeri si annulla." },
      { type: "text", q: "Come si chiama il metodo che dimezza l'intervallo cercando lo zero con il cambio di segno?", answer: ["bisezione", "metodo di bisezione", "dicotomia"], explain: "È il metodo di bisezione, conseguenza del teorema degli zeri." },
      { type: "order", q: "Ordina i passi del metodo di bisezione.", items: ["Scegliere [a, b] con f(a)f(b) < 0", "Calcolare il punto medio m", "Studiare il segno di f(m)", "Tenere la metà in cui f cambia segno e ripetere"], explain: "Ogni ripetizione dimezza l'incertezza sulla posizione dello zero." }
    ]
  }
});
