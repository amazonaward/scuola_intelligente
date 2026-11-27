TOPIC('it', {
  id: "l5-mat-teoremi-calcolo",
  title: "I teoremi del calcolo differenziale",
  intro: "La derivata è uno strumento <i>locale</i>, ma i teoremi che la riguardano permettono di trarre conclusioni <b>globali</b>: se un'auto percorre 100 km in un'ora, in almeno un istante ha viaggiato a 100 km/h; se una funzione ha derivata positiva, cresce. In questa lezione incontri i teoremi di <b>Fermat, Rolle, Lagrange</b> e (in breve) <b>Cauchy</b>, la <b>regola di de l'Hôpital</b> per risolvere le forme indeterminate, e il metodo per trovare <b>massimi, minimi e flessi</b> con la derivata prima e seconda.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Massimi e minimi: il teorema di Fermat",
      html: `<p>Un punto x₀ è di <b>massimo relativo</b> (o locale) se f(x₀) ≥ f(x) per tutti gli x in un intorno di x₀; di <b>minimo relativo</b> se f(x₀) ≤ f(x). Sono <b>assoluti</b> se la disuguaglianza vale su tutto il dominio. Massimi e minimi si dicono <b>estremi</b> o punti di estremo.</p>
<p style="text-align:center"><b>Teorema di Fermat.</b> Se f è derivabile in x₀ interno al dominio e x₀ è un punto di estremo relativo, allora <b>f′(x₀) = 0</b>.</p>
<p>Intuizione: in cima a una collina la tangente è orizzontale. Attenzione: vale <b>solo</b> in una direzione. Se f′(x₀) = 0 il punto è detto <b>stazionario</b> ma può non essere né massimo né minimo: f(x) = x³ in 0 ha f′(0) = 0 ma cresce sempre (è un flesso a tangente orizzontale). Inoltre i massimi/minimi possono trovarsi in punti dove f non è derivabile (come il minimo di |x| in 0) o agli estremi dell'intervallo.</p>`
    },
    {
      type: "text",
      title: "Il teorema di Rolle",
      html: `<p style="text-align:center"><b>Teorema di Rolle.</b> Se f è continua in [a, b], derivabile in (a, b) e f(a) = f(b), allora esiste almeno un c ∈ (a, b) tale che <b>f′(c) = 0</b>.</p>
<p><b>Perché.</b> Per Weierstrass f ha massimo e minimo in [a, b]. Se massimo e minimo coincidono, f è costante e f′ = 0 ovunque. Altrimenti almeno uno dei due è assunto in un punto interno c, e per Fermat f′(c) = 0.</p>
<p>Fu enunciato da <b>Michel Rolle</b> (1691), matematico francese, per i polinomi. <b>Esempio.</b> f(x) = x² − 4x + 3 su [1, 3]: f(1) = f(3) = 0; f′(x) = 2x − 4 si annulla in c = 2 ∈ (1, 3).</p>
<p><b>Uso tipico</b>: contare gli zeri. Se f′ non ha zeri in un intervallo, f ha al più uno zero lì (altrimenti per Rolle due zeri imporrebbero uno zero di f′).</p>`
    },
    {
      type: "text",
      title: "Il teorema di Lagrange (valor medio)",
      html: `<p style="text-align:center"><b>Teorema di Lagrange.</b> Se f è continua in [a, b] e derivabile in (a, b), allora esiste c ∈ (a, b) tale che<br><b>f′(c) = (f(b) − f(a)) / (b − a)</b>.</p>
<p>Significato geometrico: esiste un punto in cui la tangente è <b>parallela alla secante</b> per gli estremi. Significato fisico: in un tratto c'è un istante in cui la velocità istantanea è uguale alla velocità media. Rolle ne è il caso particolare f(a) = f(b).</p>
<p><b>Conseguenze importanti</b>:</p>
<ul>
<li>Se f′ = 0 in un intervallo, f è costante.</li>
<li>Se f′ &gt; 0 in un intervallo, f è <b>strettamente crescente</b>; se f′ &lt; 0, strettamente decrescente.</li>
<li>Due funzioni con la stessa derivata differiscono per una costante (è la base degli integrali).</li>
</ul>
<p><b>Teorema di Cauchy</b>: se f e g sono continue in [a, b] e derivabili in (a, b), con g′ ≠ 0, esiste c con (f(b) − f(a))/(g(b) − g(a)) = f′(c)/g′(c). Serve a dimostrare de l'Hôpital.</p>`
    },
    {
      type: "svg",
      title: "Rolle e Lagrange",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#475569" stroke-width="2"><line x1="10" y1="250" x2="290" y2="250"/><line x1="310" y1="250" x2="590" y2="250"/></g>
<path d="M 40 250 Q 150 60 260 250" fill="none" stroke="#dc2626" stroke-width="4"/>
<line x1="100" y1="95" x2="200" y2="95" stroke="#16a34a" stroke-width="4"/>
<line x1="40" y1="250" x2="260" y2="250" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 5"/>
<circle cx="150" cy="95" r="6" fill="#16a34a"/>
<text x="75" y="35" font-size="16" fill="#1f2937" font-weight="bold">Rolle: f(a) = f(b)</text>
<text x="105" y="80" font-size="15" fill="#16a34a" font-weight="bold">tangente orizzontale</text>
<path d="M 330 230 Q 420 250 470 150 T 570 60" fill="none" stroke="#dc2626" stroke-width="4"/>
<line x1="330" y1="230" x2="570" y2="60" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="410" y1="260" x2="530" y2="175" stroke="#16a34a" stroke-width="4"/>
<circle cx="470" cy="150" r="6" fill="#16a34a"/>
<text x="345" y="35" font-size="16" fill="#1f2937" font-weight="bold">Lagrange</text>
<text x="400" y="278" font-size="15" fill="#16a34a" font-weight="bold">tangente ∥ secante</text>
<text x="335" y="120" font-size="15" fill="#2563eb">secante</text>
</svg>`,
      caption: "Rolle: se gli estremi hanno la stessa altezza c'è una tangente orizzontale. Lagrange: c'è una tangente parallela alla corda."
    },
    {
      type: "example",
      title: "Il tutor e la multa",
      html: `<p>Un autovelox «tutor» misura il tempo impiegato da un'auto a percorrere un tratto di autostrada tra due portali. Un'auto passa al km 100 alle 10:00 e al km 120 alle 10:10 (10 minuti = 1/6 h). Velocità media = 20/(1/6) = 120 km/h. Il limite è 110 km/h.</p>
<p>Per il teorema di Lagrange, la funzione posizione s(t) è continua e derivabile, quindi esiste almeno un istante in cui la velocità istantanea s′(c) = 120 km/h: l'auto ha <b>sicuramente</b> superato il limite, anche se nessun autovelox l'ha vista in quell'istante. È proprio il principio su cui si basano i tutor.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Rolle e Lagrange",
      questions: [
        { type: "num", q: "Trova il punto c del teorema di Rolle per f(x) = x² − 6x + 5 su [1, 5].", answer: 3, explain: "f(1) = f(5) = 0; f′(x) = 2x − 6 = 0 ⇒ c = 3." },
        { type: "num", q: "Per f(x) = x² su [0, 2], trova c del teorema di Lagrange.", answer: 1, explain: "(4 − 0)/(2 − 0) = 2 = f′(c) = 2c ⇒ c = 1." },
        { type: "tf", q: "Se f′(x₀) = 0 allora x₀ è un punto di massimo o minimo.", answer: false, explain: "Controesempio: f(x) = x³ in 0 (flesso a tangente orizzontale)." }
      ]
    },
    {
      type: "text",
      title: "Il teorema di de l'Hôpital",
      html: `<p>Per risolvere le forme indeterminate 0/0 e ∞/∞ spesso si deriva numeratore e denominatore:</p>
<p style="text-align:center"><b>Se f e g sono derivabili vicino a x₀, g′ ≠ 0, il limite f/g è di forma 0/0 oppure ∞/∞ e lim f′/g′ = L (finito o infinito), allora lim f/g = L.</b></p>
<p>Il teorema, attribuito a <b>Guillaume de l'Hôpital</b> (1696; il risultato è in realtà di Johann Bernoulli), si dimostra con Cauchy.</p>
<p><b>Esempi</b>:</p>
<ul>
<li>lim<sub>x→0</sub> sen x/x → (cos x)/1 = 1. (Ma attenzione: per dimostrare D(sen x) = cos x si è già usato quel limite notevole!)</li>
<li>lim<sub>x→0</sub> (eˣ − 1 − x)/x² → (eˣ − 1)/(2x) → eˣ/2 = <b>1/2</b> (si applica due volte).</li>
<li>lim<sub>x→+∞</sub> ln x/x → (1/x)/1 = 0: il logaritmo cresce più lentamente di x.</li>
<li>lim<sub>x→+∞</sub> x²/eˣ → 2x/eˣ → 2/eˣ = 0: l'esponenziale batte ogni potenza.</li>
</ul>
<p>Le altre forme (0·∞, ∞ − ∞, 1^∞…) si riconducono a 0/0 o ∞/∞ con trasformazioni algebriche o con il logaritmo. <b>Attenzione</b>: se f′/g′ non ha limite, il teorema non dice nulla.</p>`
    },
    {
      type: "text",
      title: "Crescenza, decrescenza e punti stazionari",
      html: `<p>Il segno di f′ determina la monotonia (da Lagrange). Per trovare i massimi e minimi relativi di f:</p>
<ol>
<li>Calcola f′ e trova i punti in cui <b>f′ = 0</b> o <b>non esiste</b> (punti critici).</li>
<li>Studia il segno di f′: f′ &gt; 0 f cresce; f′ &lt; 0 f decresce.</li>
<li>Se f′ passa da + a − in x₀ ⇒ <b>massimo relativo</b>; da − a + ⇒ <b>minimo relativo</b>; se non cambia segno ⇒ né l'uno né l'altro.</li>
</ol>
<p>In alternativa, con la derivata seconda: se f′(x₀) = 0 e <b>f″(x₀) &gt; 0</b> ⇒ minimo; <b>f″(x₀) &lt; 0</b> ⇒ massimo; se f″(x₀) = 0 il test non decide (guarda il segno di f′ o le derivate successive).</p>
<p><b>Esempio.</b> f(x) = x³ − 3x. f′ = 3x² − 3 = 3(x − 1)(x + 1): positiva per x &lt; −1 e x &gt; 1, negativa in (−1, 1). Massimo relativo in x = −1 (f = 2), minimo in x = 1 (f = −2).</p>`
    },
    {
      type: "text",
      title: "Concavità e flessi",
      html: `<p>La derivata seconda descrive come cambia la pendenza:</p>
<ul>
<li><b>f″ &gt; 0</b>: f′ cresce ⇒ il grafico è <b>convesso</b> (concavità verso l'alto, ∪).</li>
<li><b>f″ &lt; 0</b>: f′ decresce ⇒ il grafico è <b>concavo</b> (verso il basso, ∩).</li>
<li>Un <b>punto di flesso</b> è dove la concavità cambia: lì f″ = 0 (e cambia segno). Se la tangente è orizzontale è un flesso orizzontale.</li>
</ul>
<p><b>Esempio.</b> f(x) = x³ − 3x: f″ = 6x: concava per x &lt; 0, convessa per x &gt; 0; flesso in x = 0, dove f = 0 e la tangente ha coefficiente f′(0) = −3.</p>
<p>Si noti: f″(x₀) = 0 è condizione <b>necessaria</b> per il flesso, non sufficiente (f(x) = x⁴ ha f″(0) = 0 ma in 0 c'è un minimo).</p>`
    },
    {
      type: "widget",
      title: "Quale informazione dà la derivata?",
      widget: "classify",
      options: { groups: ["Dice la monotonia", "Dice la concavità"], items: [
        ["f′ > 0", 0],
        ["f′ < 0", 0],
        ["f″ > 0 (convessa)", 1],
        ["f″ < 0 (concava)", 1],
        ["f′ cambia da + a −: massimo", 0],
        ["f″ cambia segno: flesso", 1]
      ] },
      caption: "Prima derivata: salita o discesa. Seconda derivata: curva verso l'alto o verso il basso."
    },
    {
      type: "example",
      title: "Un limite con de l'Hôpital",
      html: `<p>Calcola lim<sub>x→0</sub> (1 − cos x)/x². È 0/0. Deriviamo: (sen x)/(2x), ancora 0/0; deriviamo di nuovo: (cos x)/2 → <b>1/2</b>, in accordo con il limite notevole.</p>
<p>Calcola lim<sub>x→0⁺</sub> x·ln x (forma 0·∞). Riscriviamo come ln x/(1/x), forma ∞/∞. De l'Hôpital: (1/x)/(−1/x²) = <b>−x</b> → 0. Quindi x ln x → 0: la potenza «vince» sul logaritmo.</p>`
    },
    {
      type: "curiosity",
      title: "Una regola rubata?",
      html: `<p>La regola di de l'Hôpital porta il nome del marchese Guillaume de l'Hôpital, che nel 1696 pubblicò il primo manuale di calcolo differenziale (<i>Analyse des infiniment petits</i>). Il marchese aveva pagato Johann Bernoulli per avere lezioni private e il permesso di usarne i risultati: la regola è dunque di Bernoulli. La prova arrivò solo dopo la morte di entrambi, quando le lettere furono ritrovate.</p>`
    },
    {
      type: "curiosity",
      title: "Fermat e la luce",
      html: `<p>Pierre de Fermat, magistrato a Tolosa, enunciò attorno al 1636 il suo metodo per trovare massimi e minimi (che precorre la derivata). Applicò poi l'idea alla luce: tra due punti la luce segue il percorso che rende <b>minimo il tempo</b> (principio di Fermat). Da lì si ricavano la legge della riflessione e quella di rifrazione.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i teoremi",
      intro: "Tre immagini quotidiane per i teoremi più importanti.",
      tabs: [
        {
          label: "🚗 Velocità media e istantanea",
          html: `<p>Lagrange si sente con il tachimetro: se in 2 ore fai 180 km, la tua media è 90 km/h. Sulla strada potresti essere andato sempre a 90, oppure aver accelerato e rallentato: ma <b>non puoi essere sempre sotto 90 né sempre sopra</b>. Per passare da sotto a sopra (o viceversa) devi in qualche istante toccare esattamente 90 km/h. Questo vale per qualunque grandezza che varia con continuità: l'altezza di un bambino, il prezzo di un titolo, la temperatura.</p>`
        },
        {
          label: "🎢 Le montagne russe",
          html: `<p>Sulla salita di una montagna russa la derivata prima è positiva; in cima si annulla e diventa negativa (Fermat/Rolle: in cima la tangente è orizzontale). La derivata seconda spiega le sensazioni: dove la pista è convessa (concavità verso l'alto, f″ &gt; 0) sei «schiacciato nel sedile»; dove è concava (f″ &lt; 0) senti di «staccarti». Il flesso è il punto in cui si passa dall'una all'altra.</p>`
        },
        {
          label: "📐 La corda e la tangente",
          html: `<p>Disegna una curva liscia e la corda che unisce due suoi punti A e B. Sposta una retta parallela alla corda dall'esterno verso la curva, fino a toccarla: il punto di contatto è quello del teorema di Lagrange, perché lì la tangente ha la stessa inclinazione della corda. Se la corda è orizzontale (A e B alla stessa altezza) hai Rolle.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei teoremi",
      nodes: [
        { id: "fer", label: "Fermat", x: 50, y: 6, color: "#6366f1", html: "Estremo interno e derivabile ⇒ f′ = 0.", why: "Fermat (1636) cercava massimi e minimi con «adequazione»: in cima la curva è piatta." },
        { id: "rol", label: "Rolle", x: 22, y: 28, color: "#16a34a", html: "f(a) = f(b) ⇒ esiste c con f′(c) = 0.", why: "Si ottiene da Weierstrass (esiste un estremo) più Fermat (lì la derivata si annulla)." },
        { id: "lag", label: "Lagrange", x: 78, y: 28, color: "#f59e0b", html: "Esiste c con f′(c) = (f(b) − f(a))/(b − a).", why: "È Rolle «inclinato»: si applica Rolle alla funzione f(x) meno la retta per i due estremi." },
        { id: "mono", label: "Monotonia", x: 85, y: 55, color: "#0ea5e9", html: "f′ > 0 ⇒ crescente; f′ < 0 ⇒ decrescente.", why: "Da Lagrange: f(b) − f(a) = f′(c)(b − a) ha lo stesso segno di f′(c)." },
        { id: "cau", label: "Cauchy", x: 20, y: 55, color: "#a855f7", html: "(f(b) − f(a))/(g(b) − g(a)) = f′(c)/g′(c).", why: "Generalizza Lagrange a due funzioni; è lo strumento per dimostrare de l'Hôpital." },
        { id: "hop", label: "De l'Hôpital", x: 50, y: 62, color: "#ef4444", html: "lim f/g = lim f′/g′ nelle forme 0/0 e ∞/∞.", why: "Nasce dalle lezioni di Johann Bernoulli al marchese de l'Hôpital (1696)." },
        { id: "est", label: "Massimi, minimi, flessi", x: 50, y: 90, color: "#14b8a6", html: "Segno di f′ e f″: monotonia e concavità.", why: "Servono a tracciare il grafico e a risolvere problemi di ottimizzazione." }
      ],
      edges: [
        ["fer", "rol", "porta a"],
        ["rol", "lag", "si generalizza in"],
        ["lag", "mono", "implica"],
        ["lag", "cau", "si estende a"],
        ["cau", "hop", "dimostra"],
        ["mono", "est", "usata in"],
        ["hop", "est", "supporta"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Fermat</b>: estremo interno e derivabile ⇒ f′ = 0 (non vale il viceversa).</li>
<li><b>Rolle</b>: continua, derivabile, f(a) = f(b) ⇒ ∃c: f′(c) = 0.</li>
<li><b>Lagrange</b>: ∃c: f′(c) = (f(b) − f(a))/(b − a). Conseguenza: f′ &gt; 0 ⇒ crescente.</li>
<li><b>De l'Hôpital</b>: 0/0 o ∞/∞, se esiste lim f′/g′ allora lim f/g = lim f′/g′.</li>
<li>Estremi: segno di f′ (da + a − massimo). Flessi: f″ cambia segno. f″ &gt; 0 convessa, f″ &lt; 0 concava.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: estremi, flessi, de l'Hôpital",
      questions: [
        { type: "mc", q: "f(x) = x³ − 12x ha un massimo relativo in…", options: ["x = −2", "x = 2", "x = 0"], answer: 0, explain: "f′ = 3x² − 12 = 3(x − 2)(x + 2). f′ passa da + a − in −2: massimo." },
        { type: "num", q: "Calcola lim x→0 (eˣ − 1)/sen x con de l'Hôpital.", answer: 1, explain: "eˣ/cos x → 1." },
        { type: "num", q: "Per f(x) = x³ − 6x² + 9x, in quale x si trova il flesso?", answer: 2, explain: "f″ = 6x − 12 = 0 ⇒ x = 2, e cambia segno." }
      ]
    }
  ],
  glossary: [
    { t: "Massimo / minimo relativo", d: "Punto in cui f vale più / meno che in tutti i punti di un suo intorno." },
    { t: "Punto stazionario", d: "Punto in cui la derivata prima si annulla." },
    { t: "Teorema di Fermat", d: "Se x₀ è estremo relativo interno e f è derivabile, allora f′(x₀) = 0." },
    { t: "Teorema di Rolle", d: "Continua e derivabile con f(a) = f(b) ⇒ esiste c con f′(c) = 0." },
    { t: "Teorema di Lagrange", d: "Esiste c con f′(c) = (f(b) − f(a))/(b − a)." },
    { t: "Regola di de l'Hôpital", d: "Nelle forme 0/0 e ∞/∞, lim f/g = lim f′/g′ se quest'ultimo esiste." },
    { t: "Concavità / convessità", d: "Convessa: f″ > 0 (verso l'alto); concava: f″ < 0 (verso il basso)." },
    { t: "Punto di flesso", d: "Punto in cui la concavità cambia." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "tf", q: "Se f′(x₀) = 0, allora x₀ è sempre un punto di estremo relativo.", answer: false, explain: "Controesempio: f(x) = x³ in 0." },
      { type: "num", q: "Trova c di Rolle per f(x) = x(x − 4) su [0, 4].", answer: 2, explain: "f′ = 2x − 4 = 0 ⇒ c = 2." },
      { type: "num", q: "Trova c di Lagrange per f(x) = x³ su [0, 3] e approssima a due decimali (c = √3).", answer: 1.73, tol: 0.01, explain: "(27 − 0)/3 = 9 = 3c² ⇒ c² = 3 ⇒ c = √3 ≈ 1,73." },
      { type: "mc", q: "Se f′ > 0 in tutto un intervallo, f è…", options: ["strettamente crescente", "strettamente decrescente", "costante"], answer: 0, explain: "Conseguenza del teorema di Lagrange." },
      { type: "num", q: "Calcola lim x→0 (sen x − x)/x³ con de l'Hôpital (tre volte). Risposta decimale.", answer: -0.1667, tol: 0.001, explain: "(cos x − 1)/(3x²) → (−sen x)/(6x) → (−cos x)/6 → −1/6." },
      { type: "num", q: "Calcola lim x→+∞ x²/eˣ.", answer: 0, explain: "Due applicazioni: 2x/eˣ → 2/eˣ → 0." },
      { type: "mc", q: "Se f″(x₀) > 0 e f′(x₀) = 0, in x₀ c'è…", options: ["un minimo relativo", "un massimo relativo", "un flesso"], answer: 0, explain: "Concavità verso l'alto: minimo." },
      { type: "mc", q: "f(x) = x⁴ in x = 0 ha f″(0) = 0. In 0 c'è…", options: ["un minimo", "un flesso", "un massimo"], answer: 0, explain: "f′ passa da − a +: minimo, non flesso. f″ = 0 non è sufficiente per il flesso." },
      { type: "text", q: "Come si chiama il tipo di punto in cui cambia la concavità?", answer: ["flesso", "punto di flesso", "il flesso"], explain: "Punto di flesso." },
      { type: "order", q: "Ordina i passi per trovare gli estremi relativi di una funzione.", items: ["Calcolare f′", "Trovare dove f′ = 0 o non esiste", "Studiare il segno di f′", "Stabilire se è massimo o minimo dal cambio di segno"], explain: "Alternativa: usare il segno di f″ nei punti stazionari." }
    ]
  }
});
