TOPIC('it', {
  id: "l5-mat-studio-funzione",
  title: "Lo studio di funzione",
  intro: "Come si disegna il grafico di una funzione senza calcolare centinaia di punti? Con tutto ciò che hai imparato: <b>dominio, simmetrie, segno, limiti e asintoti, derivata prima, derivata seconda</b>. Lo studio di funzione è il momento in cui limiti, continuità e derivate lavorano insieme per ricostruire la forma di una curva. Il secondo grande uso della derivata sono i <b>problemi di ottimizzazione</b>: trovare la forma più economica di una scatola, il percorso più rapido, il prezzo che massimizza il guadagno.",
  minutes: 65,
  sections: [
    {
      type: "text",
      title: "Lo schema dello studio di funzione",
      html: `<p>Per tracciare il grafico di y = f(x) si procede con un metodo, passo dopo passo:</p>
<ol>
<li><b>Dominio</b>: dove f è definita (denominatori ≠ 0; radici di indice pari con radicando ≥ 0; logaritmi con argomento &gt; 0).</li>
<li><b>Simmetrie e periodicità</b>: f pari (f(−x) = f(x), simmetria rispetto all'asse y), dispari (f(−x) = −f(x), simmetria rispetto all'origine), periodica.</li>
<li><b>Intersezioni con gli assi</b>: con l'asse y, f(0); con l'asse x, f(x) = 0.</li>
<li><b>Segno</b>: dove f &gt; 0 (grafico sopra l'asse x) e dove f &lt; 0.</li>
<li><b>Limiti agli estremi del dominio</b> e <b>asintoti</b> (verticali, orizzontali, obliqui).</li>
<li><b>Derivata prima</b>: segno ⇒ crescenza/decrescenza; punti stazionari; massimi e minimi; punti di non derivabilità.</li>
<li><b>Derivata seconda</b>: segno ⇒ concavità; flessi.</li>
<li><b>Grafico</b>: si riportano tutte le informazioni e si collega con una curva regolare.</li>
</ol>
<p>Non sempre servono tutti i punti (per funzioni semplici si può saltare qualcosa), ma seguire l'ordine evita errori e dà la certezza di non dimenticare nulla.</p>`
    },
    {
      type: "example",
      title: "Esempio completo: f(x) = x/(x² + 1)",
      html: `<ol>
<li><b>Dominio</b>: x² + 1 &gt; 0 sempre ⇒ <b>R</b>.</li>
<li><b>Simmetria</b>: f(−x) = −x/(x² + 1) = −f(x) ⇒ <b>dispari</b> (simmetrica rispetto all'origine): basta studiare x ≥ 0.</li>
<li><b>Intersezioni</b>: f(0) = 0; f(x) = 0 solo per x = 0. Passa per l'origine.</li>
<li><b>Segno</b>: f &gt; 0 per x &gt; 0, f &lt; 0 per x &lt; 0.</li>
<li><b>Limiti</b>: lim<sub>x→±∞</sub> x/(x² + 1) = 0 (grado numeratore &lt; denominatore): <b>asintoto orizzontale y = 0</b>. Non ci sono asintoti verticali.</li>
<li><b>f′</b> = (1·(x² + 1) − x·2x)/(x² + 1)² = <b>(1 − x²)/(x² + 1)²</b>. f′ &gt; 0 per −1 &lt; x &lt; 1; f′ &lt; 0 altrove. Quindi: minimo in x = −1 con f = −1/2; massimo in x = 1 con f = 1/2.</li>
<li><b>f″</b> = <b>2x(x² − 3)/(x² + 1)³</b>. Si annulla in x = 0 e x = ±√3, dove cambia segno: flessi in (0, 0) e in (±√3, ±√3/4) ≈ (±1,73; ±0,43).</li>
</ol>`
    },
    {
      type: "svg",
      title: "Il grafico di x/(x² + 1)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="150" x2="580" y2="150" stroke="#475569" stroke-width="2"/>
<line x1="300" y1="15" x2="300" y2="285" stroke="#475569" stroke-width="2"/>
<g stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"><line x1="200" y1="40" x2="200" y2="260"/><line x1="400" y1="40" x2="400" y2="260"/></g>
<path d="M 40 175 C 90 190 150 230 200 250 C 240 265 270 200 300 150 C 330 100 360 35 400 50 C 450 70 510 110 560 125" fill="none" stroke="#dc2626" stroke-width="4"/>
<circle cx="400" cy="50" r="7" fill="#16a34a"/><circle cx="200" cy="250" r="7" fill="#2563eb"/><circle cx="300" cy="150" r="7" fill="#f59e0b"/>
<g font-size="16" font-weight="bold" fill="#1f2937">
<text x="410" y="45" fill="#16a34a">max (1; 1/2)</text>
<text x="70" y="270" fill="#2563eb">min (−1; −1/2)</text>
<text x="310" y="175" fill="#b45309">flesso O</text>
<text x="420" y="145" fill="#475569">y = 0 (asintoto)</text>
</g>
</svg>`,
      caption: "Grafico qualitativo (non in scala) di f(x) = x/(x² + 1): dispari, con massimo e minimo in x = ±1 e asintoto y = 0."
    },
    {
      type: "text",
      title: "Funzioni razionali con asintoti: f(x) = x²/(x − 1)",
      html: `<p>Un secondo esempio con asintoti verticale e obliquo.</p>
<ul>
<li><b>Dominio</b>: x ≠ 1. Nessuna simmetria. Interseca gli assi solo in O(0, 0).</li>
<li><b>Segno</b>: x² ≥ 0 quindi il segno è quello di x − 1: f &gt; 0 per x &gt; 1, f &lt; 0 per x &lt; 1 (con x ≠ 0).</li>
<li><b>Limiti</b>: lim<sub>x→1⁻</sub> = −∞, lim<sub>x→1⁺</sub> = +∞ ⇒ <b>asintoto verticale x = 1</b>. Per x → ±∞ f(x)/x → 1 e f(x) − x = (x² − x² + x)/(x − 1) = x/(x − 1) → 1 ⇒ <b>asintoto obliquo y = x + 1</b> (dividendo: x²/(x − 1) = x + 1 + 1/(x − 1)).</li>
<li><b>f′</b> = (2x(x − 1) − x²)/(x − 1)² = x(x − 2)/(x − 1)². f′ &gt; 0 per x &lt; 0 e x &gt; 2: <b>massimo relativo</b> in (0, 0), <b>minimo relativo</b> in (2, 4).</li>
<li><b>f″</b> = 2/(x − 1)³: positiva per x &gt; 1 (convessa), negativa per x &lt; 1 (concava). Nessun flesso (in x = 1 non è definita).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: lo schema",
      questions: [
        { type: "mc", q: "Qual è il dominio di f(x) = ln(x − 2)/(x − 5)?", options: ["x > 2 e x ≠ 5", "x > 2", "x ≠ 5"], answer: 0, explain: "Il logaritmo richiede x − 2 > 0; il denominatore non deve annullarsi." },
        { type: "mc", q: "f(x) = x⁴ − 3x² è…", options: ["pari", "dispari", "né pari né dispari"], answer: 0, explain: "f(−x) = f(x): solo potenze pari." },
        { type: "num", q: "Qual è l'asintoto orizzontale di f(x) = (2x + 1)/(x − 3)? (scrivi il valore di y)", answer: 2, explain: "Stesso grado: rapporto dei coefficienti direttivi, 2/1 = 2." }
      ]
    },
    {
      type: "widget",
      title: "Quali informazioni ci danno i vari passi?",
      widget: "match",
      options: { pairs: [
        ["Dominio", "dove f esiste"],
        ["Limiti agli estremi", "asintoti"],
        ["Segno di f′", "crescenza e decrescenza"],
        ["f′(x) = 0", "possibili massimi e minimi"],
        ["Segno di f″", "concavità"],
        ["Cambio di segno di f″", "flessi"]
      ] },
      caption: "Ogni passo dello studio aggiunge un pezzo del grafico."
    },
    {
      type: "text",
      title: "Problemi di ottimizzazione",
      html: `<p>Molti problemi della vita reale chiedono di rendere <b>massima</b> o <b>minima</b> una quantità (area, costo, tempo, profitto). Il metodo è sempre lo stesso:</p>
<ol>
<li><b>Scegli la variabile</b> x e traduci il problema in una funzione f(x) da massimizzare/minimizzare, esprimendo tutto con una sola variabile.</li>
<li><b>Determina il dominio</b> della variabile (vincoli del problema: lunghezze positive, ecc.).</li>
<li><b>Calcola f′(x)</b> e trova i punti in cui si annulla.</li>
<li><b>Verifica</b> che il punto sia davvero di massimo/minimo (segno di f′ o f″) e confronta con gli estremi del dominio (Weierstrass).</li>
<li><b>Rispondi</b> in termini del problema, con unità di misura.</li>
</ol>`
    },
    {
      type: "example",
      title: "Il recinto del contadino",
      html: `<p>Un contadino ha 200 m di rete per recintare un campo rettangolare, con un lato appoggiato a un fiume (che non richiede rete). Quali dimensioni massimizzano l'area?</p>
<ul>
<li>Siano x i due lati perpendicolari al fiume; il lato parallelo vale 200 − 2x. Dominio: 0 &lt; x &lt; 100.</li>
<li>Area: A(x) = x(200 − 2x) = 200x − 2x².</li>
<li>A′(x) = 200 − 4x = 0 ⇒ x = 50. A″ = −4 &lt; 0 ⇒ massimo.</li>
<li>Dimensioni: 50 m × 100 m, area <b>5 000 m²</b>. Il lato lungo, parallelo al fiume, è il doppio dell'altro.</li>
</ul>`
    },
    {
      type: "example",
      title: "La lattina di alluminio",
      html: `<p>Una lattina cilindrica deve contenere 1 litro (1 dm³). Quali dimensioni usano meno alluminio (minima superficie)?</p>
<ul>
<li>Volume V = πr²h = 1 ⇒ h = 1/(πr²). Superficie totale S = 2πr² + 2πrh = 2πr² + 2/r.</li>
<li>S′(r) = 4πr − 2/r² = 0 ⇒ r³ = 1/(2π) ⇒ r = ∛(1/(2π)) ≈ 0,542 dm = 5,4 cm.</li>
<li>Allora h = 1/(πr²) = 2r ≈ 10,8 cm: il <b>diametro è uguale all'altezza</b>. S′ passa da − a +: è un minimo.</li>
</ul>
<p>Le lattine reali sono un po' più alte: contano anche stabilità, impilabilità, presa in mano e il costo delle saldature.</p>`
    },
    {
      type: "curiosity",
      title: "La soluzione del problema della regina Didone",
      html: `<p>La leggenda narra che Didone, fondatrice di Cartagine, ottenne tanta terra quanta ne poteva contenere una pelle di bue: tagliandola a strisce sottilissime recintò una vasta area. Il problema «tra tutte le figure di perimetro dato, quale ha area massima?» ha soluzione il <b>cerchio</b>: è il celebre <i>problema isoperimetrico</i>. Con le derivate si dimostra facilmente per i rettangoli: il rettangolo di area massima con perimetro dato è il quadrato.</p>`
    },
    {
      type: "curiosity",
      title: "Le api e l'ottimizzazione",
      html: `<p>Le celle dei favi hanno forma esagonale: tra le tassellazioni del piano con celle uguali, l'esagono è quella che, a parità di area, ha il perimetro minimo (la «congettura del favo», dimostrata da Thomas Hales nel 1999). La natura risolve spesso problemi di ottimo: fisica e biologia usano il calcolo differenziale per spiegarlo.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per studiare una funzione",
      intro: "Il metodo standard non è l'unico: ecco tre modi per «vedere» una funzione.",
      tabs: [
        {
          label: "🗺️ Come una mappa topografica",
          html: `<p>Immagina il grafico come un sentiero di montagna visto di lato. Il <b>dominio</b> è la parte di sentiero percorribile; gli <b>asintoti verticali</b> sono dirupi; la <b>derivata prima</b> ti dice se sali o scendi; i punti dove si annulla sono vette e fondovalle (o brevi tratti piani); la <b>derivata seconda</b> ti dice se la salita si fa più ripida o più dolce. Studiare una funzione è un po' fare una guida escursionistica.</p>`
        },
        {
          label: "💻 Con un software di grafici",
          html: `<p>Con GeoGebra o Desmos puoi tracciare subito il grafico di f. Usare il software per <b>verificare</b> il tuo studio è un ottimo modo di imparare: se il grafico non coincide con le tue deduzioni, hai sbagliato un passo. Attenzione: la macchina mostra l'immagine, ma non <i>dimostra</i> nulla. Per sapere se in x = 2 c'è davvero un minimo servono i calcoli, e per un esame (o per un'applicazione ingegneristica) la dimostrazione è ciò che conta.</p>`
        },
        {
          label: "🔁 Trasformazioni di grafici",
          html: `<p>Spesso il grafico di una funzione è ottenuto da uno noto con <b>trasformazioni</b>: y = f(x) + k trasla in verticale; y = f(x − h) trasla in orizzontale; y = −f(x) riflette rispetto all'asse x; y = |f(x)| ribalta le parti negative; y = f(|x|) rende pari la funzione. Esempio: y = 1/(x − 2) + 3 è l'iperbole y = 1/x spostata di 2 a destra e 3 in alto, con asintoti x = 2 e y = 3, senza fare alcuno studio completo.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dello studio di funzione",
      nodes: [
        { id: "dom", label: "Dominio e simmetrie", x: 50, y: 6, color: "#6366f1", html: "Dove esiste f; pari, dispari, periodica.", why: "Restringe il lavoro: una funzione dispari basta studiarla per x ≥ 0 e poi simmetrizzare." },
        { id: "seg", label: "Intersezioni e segno", x: 18, y: 28, color: "#16a34a", html: "Zeri e dove f è positiva o negativa.", why: "Dall'algebra di equazioni e disequazioni: fissa le zone del piano dove il grafico può stare." },
        { id: "lim", label: "Limiti e asintoti", x: 82, y: 28, color: "#f59e0b", html: "Comportamento agli estremi del dominio.", why: "Vengono dal calcolo dei limiti: dicono come il grafico si «chiude» agli estremi e vicino ai punti non definiti." },
        { id: "d1", label: "Derivata prima", x: 22, y: 55, color: "#0ea5e9", html: "Crescenza e decrescenza; massimi, minimi.", why: "Dal teorema di Lagrange: il segno di f′ determina la monotonia; da Fermat: gli estremi sono dove f′ = 0 (o non esiste)." },
        { id: "d2", label: "Derivata seconda", x: 78, y: 55, color: "#a855f7", html: "Concavità e flessi.", why: "f″ misura come cambia la pendenza: positiva ⇒ la curva si «apre» verso l'alto." },
        { id: "graf", label: "Grafico", x: 50, y: 74, color: "#ef4444", html: "Sintesi di tutte le informazioni.", why: "Il grafico è il «riassunto visivo»: se le informazioni sono incoerenti, c'è un errore." },
        { id: "ott", label: "Ottimizzazione", x: 50, y: 92, color: "#14b8a6", html: "Massimi e minimi in problemi concreti.", why: "Da Fermat e Weierstrass: se la funzione è continua su un intervallo chiuso l'ottimo esiste ed è tra i punti critici e gli estremi." }
      ],
      edges: [
        ["dom", "seg", "poi"],
        ["dom", "lim", "poi"],
        ["seg", "d1", "poi"],
        ["lim", "d2", "poi"],
        ["d1", "graf", "contribuisce a"],
        ["d2", "graf", "contribuisce a"],
        ["graf", "ott", "applica a"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Ordine: dominio, simmetrie, intersezioni e segno, limiti/asintoti, f′, f″, grafico.</li>
<li>Asintoto obliquo: m = lim f(x)/x, q = lim (f(x) − mx).</li>
<li>f′ &gt; 0 cresce; f′ &lt; 0 decresce. f″ &gt; 0 convessa; f″ &lt; 0 concava.</li>
<li>Ottimizzazione: una sola variabile, dominio, f′ = 0, verifica, risposta con unità di misura.</li>
<li>Si confrontano sempre i valori anche agli estremi del dominio (Weierstrass).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: ottimizzazione",
      questions: [
        { type: "num", q: "Tra tutti i rettangoli di perimetro 40 cm, qual è il lato del rettangolo di area massima (in cm)?", answer: 10, unit: "cm", explain: "x(20 − x) è massima per x = 10: è un quadrato di lato 10 cm." },
        { type: "num", q: "Due numeri hanno somma 12. Qual è il massimo del loro prodotto?", answer: 36, explain: "x(12 − x) = −x² + 12x, massimo in x = 6: 36." },
        { type: "tf", q: "Per trovare un massimo bisogna confrontare anche i valori agli estremi dell'intervallo.", answer: true, explain: "Il massimo assoluto può trovarsi agli estremi, non solo dove f′ = 0." }
      ]
    }
  ],
  glossary: [
    { t: "Dominio", d: "Insieme dei valori di x per cui f è definita." },
    { t: "Funzione pari / dispari", d: "f(−x) = f(x) (simmetria rispetto all'asse y) / f(−x) = −f(x) (simmetria rispetto all'origine)." },
    { t: "Asintoto", d: "Retta a cui il grafico si avvicina indefinitamente: verticale, orizzontale o obliquo." },
    { t: "Punto stazionario", d: "Punto in cui f′ = 0." },
    { t: "Flesso", d: "Punto in cui il grafico cambia concavità." },
    { t: "Ottimizzazione", d: "Ricerca del massimo o minimo di una grandezza in un problema concreto." },
    { t: "Problema isoperimetrico", d: "Tra le figure di dato perimetro, trovare quella di area massima: è il cerchio." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è il dominio di f(x) = √(x − 1)/(x − 3)?", options: ["x ≥ 1, x ≠ 3", "x > 1", "x ≠ 3"], answer: 0, explain: "Radicando ≥ 0 e denominatore ≠ 0." },
      { type: "mc", q: "f(x) = x³ − x è…", options: ["dispari", "pari", "né pari né dispari"], answer: 0, explain: "f(−x) = −x³ + x = −f(x)." },
      { type: "num", q: "Qual è l'asintoto verticale (valore di x) di f(x) = 3/(x + 4)?", answer: -4, explain: "Il denominatore si annulla in x = −4." },
      { type: "text", q: "Qual è l'asintoto obliquo di f(x) = (x² + 1)/x? (scrivi y = ...)", answer: ["y = x", "y=x", "x"], explain: "f(x) = x + 1/x; la differenza tende a 0." },
      { type: "num", q: "Per f(x) = x/(x² + 1), qual è il valore massimo di f?", answer: 0.5, tol: 0.001, explain: "Massimo in x = 1: f(1) = 1/2." },
      { type: "mc", q: "Se f″ cambia segno in x₀ (e f è continua), x₀ è…", options: ["un punto di flesso", "un massimo", "un minimo"], answer: 0, explain: "È la definizione di flesso." },
      { type: "num", q: "Un rettangolo ha perimetro 60 m. Quale area massima può avere?", answer: 225, unit: "m²", explain: "Lati x e 30 − x: area massima per x = 15, cioè 15 · 15 = 225." },
      { type: "mc", q: "Una funzione ha f′ > 0 e f″ < 0 in un intervallo. Il grafico…", options: ["cresce, volgendo la concavità verso il basso", "decresce, concavità verso l'alto", "cresce, concavità verso l'alto"], answer: 0, explain: "f′ > 0: cresce; f″ < 0: concava (verso il basso)." },
      { type: "tf", q: "Un massimo assoluto di una funzione continua su [a, b] può trovarsi in a o in b.", answer: true, explain: "Lì può non valere f′ = 0: va sempre controllato." },
      { type: "order", q: "Ordina i passi di un problema di ottimizzazione.", items: ["Esprimere la grandezza con una sola variabile", "Stabilire il dominio", "Calcolare la derivata e porla uguale a zero", "Verificare massimo/minimo e rispondere"], explain: "Poi si confrontano anche gli estremi del dominio." }
    ]
  }
});
