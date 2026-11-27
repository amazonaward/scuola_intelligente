TOPIC('it', {
  id: "l5-mat-derivate",
  title: "Le derivate",
  intro: "Quanto vale la velocità di un'auto <i>in un istante preciso</i>, quando in un istante non percorre nessuna distanza? Come si trova la pendenza di una curva in un punto? A queste domande rispondono Newton e Leibniz, in modo indipendente, nella seconda metà del Seicento: la <b>derivata</b> misura «quanto velocemente cambia» una grandezza. In questa lezione parti dal <b>rapporto incrementale</b>, ne ricavi il significato geometrico (la tangente) e fisico (la velocità), impari le <b>derivate fondamentali</b> e le <b>regole di derivazione</b> (somma, prodotto, quoziente, composta).",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Dalla velocità media alla velocità istantanea",
      html: `<p>Se un'auto percorre 120 km in 1,5 h, la sua <b>velocità media</b> è 120/1,5 = 80 km/h: è il rapporto tra lo spazio percorso Δs e il tempo impiegato Δt. Ma sul tachimetro leggi la velocità <i>istantanea</i>: come si definisce, se in un istante Δt = 0?</p>
<p>Si prende un intervallo Δt sempre più piccolo attorno all'istante t₀ e si guarda a cosa tende il rapporto Δs/Δt. Esempio: un oggetto cade con s(t) = 5t² (s in metri, t in secondi). Velocità media tra t = 2 e t = 2 + h:</p>
<p style="text-align:center">(5(2 + h)² − 5·2²)/h = (20h + 5h²)/h = <b>20 + 5h</b></p>
<p>Per h → 0 questo valore tende a <b>20 m/s</b>: è la velocità istantanea a t = 2 s. Il passaggio al limite trasforma una velocità <i>media</i> in una velocità <i>istantanea</i>.</p>`
    },
    {
      type: "text",
      title: "Rapporto incrementale e derivata",
      html: `<p>Data f definita in un intorno di x₀, il <b>rapporto incrementale</b> relativo a x₀ e all'incremento h è:</p>
<p style="text-align:center"><b>(f(x₀ + h) − f(x₀)) / h</b></p>
<p>Geometricamente è il <b>coefficiente angolare della retta secante</b> al grafico per i punti (x₀, f(x₀)) e (x₀ + h, f(x₀ + h)). La <b>derivata</b> di f in x₀ è il limite (se esiste finito) del rapporto incrementale per h → 0:</p>
<p style="text-align:center"><b>f′(x₀) = lim<sub>h→0</sub> (f(x₀ + h) − f(x₀)) / h</b></p>
<p>Se il limite esiste finito, f è <b>derivabile</b> in x₀. Notazioni: f′(x), <b>Df(x)</b>, <b>df/dx</b> (di Leibniz), ẋ per la derivata rispetto al tempo (di Newton).</p>
<ul>
<li><b>Significato geometrico</b>: f′(x₀) è il coefficiente angolare della <b>retta tangente</b> al grafico in (x₀, f(x₀)): y − f(x₀) = f′(x₀)(x − x₀).</li>
<li><b>Significato fisico</b>: se s(t) è la posizione, s′(t) = v(t) è la velocità e v′(t) = a(t) l'accelerazione. In generale, f′ è la <b>rapidità di variazione</b> di f.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Dalla secante alla tangente",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="270" x2="570" y2="270" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="270" x2="40" y2="15" stroke="#475569" stroke-width="2"/>
<path d="M 60 250 Q 250 230 330 150 T 540 40" fill="none" stroke="#dc2626" stroke-width="4"/>
<line x1="200" y1="228" x2="560" y2="88" stroke="#2563eb" stroke-width="2" stroke-dasharray="7 5"/>
<line x1="150" y1="248" x2="520" y2="52" stroke="#16a34a" stroke-width="3"/>
<circle cx="280" cy="196" r="6" fill="#1f2937"/>
<circle cx="450" cy="97" r="6" fill="#2563eb"/>
<line x1="280" y1="196" x2="450" y2="196" stroke="#475569" stroke-width="2" stroke-dasharray="4 4"/>
<line x1="450" y1="196" x2="450" y2="97" stroke="#475569" stroke-width="2" stroke-dasharray="4 4"/>
<g font-size="16" fill="#1f2937" font-weight="bold">
<text x="250" y="216">P</text><text x="456" y="90" fill="#2563eb">Q</text>
<text x="345" y="216">h</text><text x="458" y="150">Δy</text>
<text x="350" y="75" fill="#16a34a">tangente</text><text x="360" y="105" fill="#2563eb">secante</text>
</g>
</svg>`,
      caption: "Quando Q si avvicina a P (h → 0), la secante PQ ruota fino a diventare la tangente: il suo coefficiente angolare tende alla derivata."
    },
    {
      type: "example",
      title: "Calcolo di una derivata con la definizione",
      html: `<p>Derivata di f(x) = x² in un punto x qualsiasi:</p>
<p style="text-align:center">((x + h)² − x²)/h = (2xh + h²)/h = 2x + h → <b>2x</b>.</p>
<p>Quindi <b>D(x²) = 2x</b>. In x = 1 la pendenza è 2; la tangente al grafico in (1, 1) è y − 1 = 2(x − 1), cioè <b>y = 2x − 1</b>. In x = 0 la pendenza è 0: la tangente è orizzontale (il vertice della parabola).</p>
<p>Allo stesso modo si trova D(x³) = 3x², e in generale <b>D(xⁿ) = n·xⁿ⁻¹</b>.</p>`
    },
    {
      type: "text",
      title: "Derivate delle funzioni fondamentali",
      html: `<table>
<tr><th>f(x)</th><th>f′(x)</th></tr>
<tr><td>costante k</td><td>0</td></tr>
<tr><td>xⁿ (n reale)</td><td>n·xⁿ⁻¹</td></tr>
<tr><td>√x</td><td>1/(2√x)</td></tr>
<tr><td>sen x</td><td>cos x</td></tr>
<tr><td>cos x</td><td>− sen x</td></tr>
<tr><td>tg x</td><td>1/cos²x = 1 + tg²x</td></tr>
<tr><td>eˣ</td><td>eˣ</td></tr>
<tr><td>aˣ</td><td>aˣ · ln a</td></tr>
<tr><td>ln x</td><td>1/x</td></tr>
<tr><td>arctg x</td><td>1/(1 + x²)</td></tr>
<tr><td>arcsen x</td><td>1/√(1 − x²)</td></tr>
</table>
<p>La funzione esponenziale è quella <i>che è uguale alla sua derivata</i>: è per questo che e è il numero «giusto» in analisi. Si dimostra con il limite notevole (eʰ − 1)/h → 1: D(eˣ) = lim eˣ(eʰ − 1)/h = eˣ. Similmente D(sen x) = cos x discende da sen h/h → 1.</p>`
    },
    {
      type: "widget",
      title: "Abbina funzione e derivata",
      widget: "match",
      options: { pairs: [
        ["x⁵", "5x⁴"],
        ["sen x", "cos x"],
        ["cos x", "− sen x"],
        ["eˣ", "eˣ"],
        ["ln x", "1/x"],
        ["√x", "1/(2√x)"],
        ["tg x", "1/cos²x"]
      ] },
      caption: "Imparale a memoria: sono i mattoni del calcolo differenziale."
    },
    {
      type: "text",
      title: "Le regole di derivazione",
      html: `<p>Per derivare funzioni più complicate si usano le regole (f e g derivabili):</p>
<ul>
<li><b>Linearità</b>: D(k·f) = k·f′; D(f ± g) = f′ ± g′.</li>
<li><b>Prodotto</b>: D(f·g) = f′·g + f·g′.</li>
<li><b>Quoziente</b>: D(f/g) = (f′·g − f·g′)/g² (con g ≠ 0).</li>
<li><b>Funzione composta</b> (<i>regola della catena</i>): D(f(g(x))) = f′(g(x)) · g′(x).</li>
<li><b>Funzione inversa</b>: D(f⁻¹)(y) = 1/f′(x), con y = f(x) (da cui D(ln x) = 1/x e D(arctg x) = 1/(1 + x²)).</li>
<li>Potenza con esponente variabile: D(f(x)^g(x)) = f^g · (g′ ln f + g f′/f), oppure si riscrive come e^(g ln f).</li>
</ul>
<p>La regola della catena si capisce con le velocità: se un ciclista pedala (g) e la sua velocità (f) dipende dai giri, il cambiamento totale è il prodotto dei cambiamenti a catena.</p>`
    },
    {
      type: "example",
      title: "Quattro derivate svolte",
      html: `<ul>
<li><b>Prodotto</b>: D(x·eˣ) = 1·eˣ + x·eˣ = <b>eˣ(1 + x)</b>.</li>
<li><b>Quoziente</b>: D(sen x/x) = (x cos x − sen x)/x².</li>
<li><b>Composta</b>: D(sen(x²)) = cos(x²) · 2x = <b>2x cos(x²)</b>.</li>
<li><b>Composta</b>: D(ln(1 + x²)) = (1/(1 + x²)) · 2x = <b>2x/(1 + x²)</b>.</li>
</ul>
<p><b>Con la tangente.</b> Trova la tangente a f(x) = ln x in x = 1: f′(x) = 1/x ⇒ f′(1) = 1; f(1) = 0; quindi la tangente è <b>y = x − 1</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: derivate",
      questions: [
        { type: "mc", q: "Qual è la derivata di 3x⁴ − 2x + 7?", options: ["12x³ − 2", "12x³ − 2x", "3x³ − 2"], answer: 0, explain: "D(3x⁴) = 12x³, D(−2x) = −2, D(7) = 0." },
        { type: "mc", q: "Qual è la derivata di x² · cos x?", options: ["2x cos x − x² sen x", "2x · (− sen x)", "x² cos x − 2x sen x"], answer: 0, explain: "Regola del prodotto: (x²)′ cos x + x² (cos x)′." },
        { type: "num", q: "Calcola la derivata di f(x) = (x + 1)³ in x = 0.", answer: 3, explain: "f′(x) = 3(x + 1)² ⇒ f′(0) = 3." }
      ]
    },
    {
      type: "text",
      title: "Derivabilità e continuità: i punti di non derivabilità",
      html: `<p><b>Teorema.</b> Se f è derivabile in x₀, allora è <b>continua</b> in x₀. Il viceversa è falso: f(x) = |x| è continua in 0 ma non derivabile.</p>
<p>Si può non essere derivabili in x₀ (pur essendo continui) in tre modi tipici, osservando i limiti del rapporto incrementale (le derivate destra e sinistra):</p>
<ul>
<li><b>Punto angoloso</b>: derivate destra e sinistra finite ma diverse (es. |x| in 0: −1 e +1).</li>
<li><b>Cuspide</b>: derivate destra e sinistra infinite di segno opposto (es. √|x| in 0: −∞ a sinistra e +∞ a destra).</li>
<li><b>Flesso a tangente verticale</b>: derivate entrambe +∞ o entrambe −∞ (es. ∛x in 0).</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Newton e Leibniz: chi ha inventato la derivata?",
      html: `<p>Isaac Newton sviluppò il «metodo delle flussioni» intorno al 1665–66, ma lo pubblicò molto più tardi. Gottfried Wilhelm Leibniz arrivò per conto suo al calcolo differenziale intorno al 1675 e pubblicò per primo (1684), introducendo i simboli <b>dx</b> e <b>dy/dx</b> e il segno ∫, ancora oggi in uso. Ne nacque una lunga polemica sulla priorità. Oggi si riconosce a entrambi il merito.</p>`
    },
    {
      type: "curiosity",
      title: "Quando la derivata decide la corsa",
      html: `<p>I radar della polizia misurano la velocità di un'auto dalla variazione della distanza nel tempo (effetto Doppler), cioè <b>una derivata</b>. Anche l'ABS dei freni, il cruise control e il pilota automatico degli aerei misurano continuamente derivate (velocità, accelerazione) per correggere il comportamento del veicolo.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la derivata",
      intro: "La stessa idea si può vedere in più modi: pendenza, velocità, ingrandimento, approssimazione.",
      tabs: [
        {
          label: "⛰️ La pendenza di una salita",
          html: `<p>Una strada con pendenza del 10 % sale di 10 m ogni 100 m in orizzontale: pendenza = Δy/Δx = 0,1. Su una strada curva la pendenza <i>cambia</i> da punto a punto: la derivata è la pendenza <b>locale</b>, la pendenza della retta che «accarezza» la curva in quel punto. Dove la derivata è positiva la funzione sale, dove è negativa scende, dove è zero il terreno è per un attimo piano (una cima, una valle o un passo).</p>`
        },
        {
          label: "🔍 Zoom: la curva diventa retta",
          html: `<p>Ingrandisci il grafico di una funzione derivabile attorno a un punto: più ingrandisci, più il grafico <b>somiglia a una retta</b>. Quella retta è la tangente, e la sua pendenza è f′. Per questo vicino a x₀ vale l'approssimazione lineare <b>f(x) ≈ f(x₀) + f′(x₀)(x − x₀)</b>: ad esempio √(4,1) ≈ 2 + (1/4)(0,1) = 2,025 (valore vero: 2,02485). In un punto angoloso, invece, anche con lo zoom restano due semirette distinte: non c'è una tangente.</p>`
        },
        {
          label: "📈 Velocità di variazione",
          html: `<p>Una popolazione di batteri è P(t) = 1000·e^(0,3t) (t in ore). La derivata P′(t) = 300·e^(0,3t) = 0,3·P(t) dice quanti batteri nascono <i>per ora</i> in quell'istante: è proporzionale alla popolazione stessa. Dopo 2 ore: P ≈ 1822 e P′ ≈ 547 batteri/ora. La derivata risponde a «quanto velocemente?», qualunque sia la grandezza: costo marginale in economia, tasso di infezione in epidemiologia, corrente elettrica (derivata della carica).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della derivata",
      nodes: [
        { id: "ri", label: "Rapporto incrementale", x: 50, y: 6, color: "#6366f1", html: "(f(x₀+h) − f(x₀))/h: pendenza della secante, velocità media.", why: "È l'idea più semplice: la variazione media di una grandezza in un intervallo. Già usata nel moto uniforme e nelle tangenti di Fermat." },
        { id: "der", label: "Derivata", x: 50, y: 28, color: "#16a34a", html: "Limite del rapporto incrementale per h → 0.", why: "Newton (flussioni) e Leibniz (differenziali) la inventarono per il moto dei pianeti e per le tangenti; Cauchy la definì con i limiti." },
        { id: "geo", label: "Tangente", x: 15, y: 50, color: "#f59e0b", html: "f′(x₀) è il coefficiente angolare della tangente: y − f(x₀) = f′(x₀)(x − x₀).", why: "La tangente è la retta che meglio approssima la curva localmente: la derivata è il «miglior coefficiente lineare»." },
        { id: "fis", label: "Velocità", x: 85, y: 50, color: "#0ea5e9", html: "v = s′, a = v′ = s″.", why: "La meccanica di Newton (F = ma) è un'equazione che mette in relazione una derivata seconda a una forza." },
        { id: "reg", label: "Regole di derivazione", x: 25, y: 76, color: "#a855f7", html: "Somma, prodotto, quoziente, composta, inversa.", why: "Si dimostrano dalla definizione e dai limiti: permettono di derivare qualsiasi funzione elementare senza usare ogni volta il limite." },
        { id: "cont", label: "Derivabilità ⇒ continuità", x: 75, y: 76, color: "#ef4444", html: "Il viceversa è falso: |x| in 0.", why: "Se il rapporto incrementale ha limite finito, la variazione f(x₀+h) − f(x₀) tende a 0. Punti angolosi, cuspidi, flessi verticali sono le eccezioni." },
        { id: "app", label: "Verso lo studio di funzione", x: 50, y: 92, color: "#14b8a6", html: "Il segno di f′ dice dove cresce; f″ la concavità.", why: "Dai teoremi di Fermat, Rolle, Lagrange: la derivata trasforma il comportamento globale in informazione locale." }
      ],
      edges: [
        ["ri", "der", "passando al limite"],
        ["der", "geo", "significato"],
        ["der", "fis", "significato"],
        ["der", "reg", "si calcola con"],
        ["der", "cont", "implica"],
        ["reg", "app", "porta a"],
        ["cont", "app", "porta a"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>f′(x₀) = lim (f(x₀+h) − f(x₀))/h</b>: pendenza della tangente, velocità istantanea.</li>
<li>D(xⁿ) = nxⁿ⁻¹; D(sen) = cos; D(cos) = −sen; D(eˣ) = eˣ; D(ln x) = 1/x.</li>
<li>Prodotto: f′g + fg′. Quoziente: (f′g − fg′)/g². Catena: f′(g(x))·g′(x).</li>
<li>Derivabile ⇒ continua; non viceversa.</li>
<li>Tangente: <b>y = f(x₀) + f′(x₀)(x − x₀)</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: tangenti e significato",
      questions: [
        { type: "num", q: "Qual è il coefficiente angolare della tangente a y = x³ in x = 2?", answer: 12, explain: "f′(x) = 3x², f′(2) = 12." },
        { type: "tf", q: "La funzione f(x) = |x| è derivabile in x = 0.", answer: false, explain: "Le derivate destra e sinistra valgono +1 e −1: punto angoloso." },
        { type: "num", q: "Un oggetto si muove con s(t) = 3t² + 2t (metri e secondi). Qual è la sua velocità a t = 4 s?", answer: 26, unit: "m/s", explain: "v(t) = s′(t) = 6t + 2 ⇒ v(4) = 26." }
      ]
    }
  ],
  glossary: [
    { t: "Rapporto incrementale", d: "(f(x₀ + h) − f(x₀))/h: pendenza della secante." },
    { t: "Derivata", d: "Limite del rapporto incrementale per h → 0; pendenza della tangente." },
    { t: "Derivabile", d: "Funzione per cui il limite del rapporto incrementale esiste finito." },
    { t: "Retta tangente", d: "y = f(x₀) + f′(x₀)(x − x₀)." },
    { t: "Regola della catena", d: "D(f(g(x))) = f′(g(x)) · g′(x)." },
    { t: "Punto angoloso", d: "Punto continuo con derivate destra e sinistra finite ma diverse." },
    { t: "Cuspide", d: "Punto con derivate destra e sinistra infinite di segno opposto." },
    { t: "Derivata seconda", d: "Derivata della derivata: f″; in fisica è l'accelerazione se f è la posizione." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa rappresenta geometricamente f′(x₀)?", options: ["Il coefficiente angolare della tangente nel punto", "L'area sotto la curva", "Il valore f(x₀)"], answer: 0, explain: "È il limite dei coefficienti angolari delle secanti." },
      { type: "num", q: "Calcola f′(2) per f(x) = x² − 3x.", answer: 1, explain: "f′(x) = 2x − 3 ⇒ f′(2) = 1." },
      { type: "mc", q: "Qual è la derivata di sen(3x)?", options: ["3 cos(3x)", "cos(3x)", "− 3 sen(3x)"], answer: 0, explain: "Regola della catena: cos(3x)·3." },
      { type: "mc", q: "Qual è la derivata di x·ln x?", options: ["ln x + 1", "1/x", "ln x"], answer: 0, explain: "1·ln x + x·(1/x) = ln x + 1." },
      { type: "mc", q: "Qual è la derivata di eˣ/x?", options: ["eˣ(x − 1)/x²", "eˣ/x²", "eˣ(1 − x)/x²"], answer: 0, explain: "(eˣ·x − eˣ·1)/x² = eˣ(x − 1)/x²." },
      { type: "text", q: "Qual è l'equazione della tangente a y = x² in x = 1? (scrivi nella forma y = ...)", answer: ["y = 2x - 1", "y=2x-1", "y = 2x − 1", "y=2x−1", "2x-1", "2x - 1", "2x − 1"], explain: "f′(1) = 2, f(1) = 1: y − 1 = 2(x − 1)." },
      { type: "tf", q: "Ogni funzione continua in x₀ è derivabile in x₀.", answer: false, explain: "Controesempio: |x| in 0." },
      { type: "num", q: "Un'auto si muove con s(t) = t³ − 2t (m, s). Qual è la sua accelerazione a t = 2 s in m/s²?", answer: 12, unit: "m/s²", explain: "a = s″ = 6t ⇒ a(2) = 12." },
      { type: "mc", q: "In x = 0 la funzione ∛x ha…", options: ["un flesso a tangente verticale", "un punto angoloso", "un massimo"], answer: 0, explain: "Il rapporto incrementale tende a +∞ da entrambi i lati: tangente verticale." },
      { type: "order", q: "Ordina i passi per scrivere la tangente a y = f(x) in x₀.", items: ["Calcolare f(x₀)", "Calcolare f′(x)", "Calcolare f′(x₀)", "Scrivere y − f(x₀) = f′(x₀)(x − x₀)"], explain: "Il coefficiente angolare è f′(x₀), il punto è (x₀, f(x₀))." }
    ]
  }
});
