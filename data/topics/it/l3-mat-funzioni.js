TOPIC('it', {
  id: "l3-mat-funzioni",
  title: "Le funzioni",
  intro: "Ogni volta che il navigatore calcola il tempo di viaggio dalla distanza, che un'app trasforma il tuo voto in una media, o che la bolletta dipende dai consumi, c'è una <b>funzione</b>: una regola che a ogni valore in ingresso associa <b>uno e un solo</b> valore in uscita. In questa lezione definiamo le funzioni con rigore, impariamo a trovare <b>dominio</b> e <b>immagine</b>, distinguiamo funzioni <b>iniettive, suriettive, biettive</b>, e costruiamo funzioni <b>inverse</b> e <b>composte</b>. È il linguaggio comune di tutta l'analisi che studierai fino alla maturità.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Che cos'è una funzione",
      html: `<p>Una <b>funzione</b> da un insieme A a un insieme B è una legge f che associa a <b>ogni</b> elemento x di A <b>uno e un solo</b> elemento y di B. Si scrive <b>f: A → B</b> e y = f(x), e si dice che y è l'<b>immagine</b> di x e x una <b>controimmagine</b> di y.</p>
<ul>
<li><b>A</b> è il <b>dominio</b> (insieme di partenza, o insieme di definizione); <b>B</b> è il <b>codominio</b> (insieme di arrivo).</li>
<li>L'<b>immagine</b> (o insieme immagine) di f è il sottoinsieme di B formato dai valori <b>effettivamente</b> assunti: Im(f) = { f(x) : x ∈ A }. Può essere più piccola del codominio.</li>
<li>Il <b>grafico</b> di f è l'insieme delle coppie (x, f(x)) nel piano cartesiano.</li>
</ul>
<p>Le due condizioni sono entrambe essenziali: <b>ogni</b> elemento del dominio deve avere un'immagine (nessuno rimane "scollegato"), e ne deve avere <b>una sola</b>. Dal punto di vista grafico: una curva è il grafico di una funzione di x se ogni <b>retta verticale</b> la incontra <b>al più una volta</b> (test della retta verticale). Perciò una circonferenza x² + y² = 1 <b>non</b> è il grafico di una funzione y = f(x): la retta x = 0 la incontra in (0, 1) e (0, −1).</p>
<p>Le funzioni numeriche (A, B ⊆ ℝ) si danno spesso con una <b>formula</b>, come f(x) = 2x + 3; ma si possono dare anche con una <b>tabella</b>, un <b>grafico</b>, una <b>descrizione a parole</b> o con una <b>definizione a tratti</b>, come il valore assoluto f(x) = |x| = x se x ≥ 0, −x se x &lt; 0.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la tariffa telefonica",
      html: `<p>Un gestore applica 5 € al mese più 0,10 € per ogni GB consumato, con un tetto massimo di 15 € al mese. Il costo mensile C in funzione dei GB (g ≥ 0) è una funzione <b>definita a tratti</b>: C(g) = 5 + 0,1g per 0 ≤ g ≤ 100, e C(g) = 15 per g &gt; 100. Dominio: [0, +∞). Immagine: [5, 15] (il costo minimo è 5 € a 0 GB, il massimo 15 € dopo 100 GB). Qualunque g ha <b>un solo</b> costo, ma costi uguali (15 €) corrispondono a infiniti valori di g: la funzione <b>non è iniettiva</b> (lo vedremo tra poco).</p>`
    },
    {
      type: "text",
      title: "Il dominio di una funzione numerica",
      html: `<p>Quando una funzione è data solo con la formula, per <b>dominio</b> (o <b>campo di esistenza</b>) si intende l'insieme dei numeri reali per cui la formula ha senso. Le condizioni da controllare, per ora, sono tre:</p>
<ul>
<li><b>Denominatore ≠ 0</b>: non si divide per zero. Per f(x) = 1/(x − 3): x ≠ 3, cioè D = ℝ \\ {3}.</li>
<li><b>Radicando ≥ 0</b> per le radici di indice pari: per f(x) = √(x − 1): x ≥ 1, cioè D = [1, +∞). Le radici di indice dispari (∛x) esistono per ogni x.</li>
<li><b>Argomento &gt; 0</b> del logaritmo (e base positiva ≠ 1) e altre condizioni (tangente, arcoseno...) che incontrerai più avanti.</li>
</ul>
<p>Se compaiono più condizioni, si mettono a <b>sistema</b>. Esempi:</p>
<ul>
<li>f(x) = √(x − 1)/(x − 3): { x − 1 ≥ 0 ; x − 3 ≠ 0 } → x ≥ 1 ∧ x ≠ 3, cioè D = [1, 3) ∪ (3, +∞).</li>
<li>f(x) = 1/√(4 − x²): serve 4 − x² &gt; 0 (radicando ≥ 0 e denominatore ≠ 0 insieme) → −2 &lt; x &lt; 2, D = (−2, 2). Qui si usa la disequazione di secondo grado!</li>
<li>f(x) = √(x² − 5x + 6) : x² − 5x + 6 ≥ 0 → x ≤ 2 ∨ x ≥ 3.</li>
</ul>
<p>Per determinare l'<b>immagine</b> si possono usare il grafico, la risoluzione dell'equazione y = f(x) rispetto a x (i valori di y per cui ha soluzione nel dominio), oppure ragionamenti diretti (un quadrato è ≥ 0; √ ≥ 0...). Esempio: f(x) = x² + 1 ha immagine [1, +∞); f(x) = 2x + 3 ha immagine ℝ.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: dominio",
      questions: [
        { type: "mc", q: "Qual è il dominio di f(x) = √(x + 4)?", options: ["x ≥ −4", "x &gt; −4", "x ≥ 4"], answer: 0, explain: "Serve x + 4 ≥ 0, cioè x ≥ −4." },
        { type: "mc", q: "Qual è il dominio di f(x) = (x + 1)/(x² − 9)?", options: ["x ≠ 3", "x ≠ 3 e x ≠ −3", "x ≠ −1"], answer: 1, explain: "Il denominatore si annulla per x = ±3, che vanno esclusi." },
        { type: "tf", q: "Il grafico di una circonferenza è il grafico di una funzione y = f(x).", answer: false, explain: "Per quasi ogni x ci sono due valori di y: non c'è un'unica immagine." }
      ]
    },
    {
      type: "svg",
      title: "Funzioni iniettive, suriettive, biettive: i diagrammi a frecce",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#334155" stroke-width="2" fill="none">
<ellipse cx="60" cy="130" rx="32" ry="75"/><ellipse cx="160" cy="130" rx="32" ry="75"/>
<ellipse cx="260" cy="130" rx="32" ry="75"/><ellipse cx="360" cy="130" rx="32" ry="75"/>
<ellipse cx="460" cy="130" rx="32" ry="75"/><ellipse cx="560" cy="130" rx="32" ry="75"/>
</g>
<g fill="#1e293b">
<circle cx="60" cy="90" r="5"/><circle cx="60" cy="130" r="5"/><circle cx="60" cy="170" r="5"/>
<circle cx="160" cy="80" r="5"/><circle cx="160" cy="130" r="5"/><circle cx="160" cy="180" r="5"/>
<circle cx="260" cy="90" r="5"/><circle cx="260" cy="130" r="5"/><circle cx="260" cy="170" r="5"/>
<circle cx="360" cy="110" r="5"/><circle cx="360" cy="150" r="5"/>
<circle cx="460" cy="90" r="5"/><circle cx="460" cy="130" r="5"/><circle cx="460" cy="170" r="5"/>
<circle cx="560" cy="90" r="5"/><circle cx="560" cy="130" r="5"/><circle cx="560" cy="170" r="5"/>
</g>
<g stroke="#16a34a" stroke-width="3">
<line x1="60" y1="90" x2="160" y2="80"/><line x1="60" y1="130" x2="160" y2="130"/><line x1="60" y1="170" x2="160" y2="180"/>
</g>
<g stroke="#2563eb" stroke-width="3">
<line x1="260" y1="90" x2="360" y2="110"/><line x1="260" y1="130" x2="360" y2="110"/><line x1="260" y1="170" x2="360" y2="150"/>
</g>
<g stroke="#ea580c" stroke-width="3">
<line x1="460" y1="90" x2="560" y2="90"/><line x1="460" y1="130" x2="560" y2="90"/><line x1="460" y1="170" x2="560" y2="130"/>
</g>
<text x="110" y="240" font-size="16" fill="#166534" text-anchor="middle" font-weight="bold">biettiva</text>
<text x="110" y="262" font-size="14" fill="#334155" text-anchor="middle">1 a 1, nessun avanzo</text>
<text x="310" y="240" font-size="16" fill="#1d4ed8" text-anchor="middle" font-weight="bold">suriettiva</text>
<text x="310" y="262" font-size="14" fill="#334155" text-anchor="middle">tutti raggiunti, non iniettiva</text>
<text x="510" y="240" font-size="16" fill="#9a3412" text-anchor="middle" font-weight="bold">né l'una né l'altra</text>
<text x="510" y="262" font-size="14" fill="#334155" text-anchor="middle">avanza un punto, e due frecce</text>
<text x="510" y="280" font-size="14" fill="#334155" text-anchor="middle">arrivano allo stesso</text>
</svg>`,
      caption: "Ogni coppia di ovali è dominio (a sinistra) e codominio (a destra); una freccia unisce x a f(x). Nel terzo caso un punto d'arrivo non è raggiunto e due punti di partenza hanno la stessa immagine."
    },
    {
      type: "text",
      title: "Iniettive, suriettive, biettive",
      html: `<p>Data f: A → B:</p>
<ul>
<li><b>Iniettiva</b>: elementi <b>diversi</b> hanno immagini <b>diverse</b>. In formule: x₁ ≠ x₂ ⟹ f(x₁) ≠ f(x₂); equivalentemente f(x₁) = f(x₂) ⟹ x₁ = x₂. Ogni elemento di B ha <b>al più una</b> controimmagine. <i>Test grafico</i>: ogni retta <b>orizzontale</b> incontra il grafico <b>al più una volta</b>.</li>
<li><b>Suriettiva</b>: <b>ogni</b> elemento di B è immagine di <b>almeno un</b> elemento di A, cioè Im(f) = B. <i>Test grafico</i>: ogni retta orizzontale y = k, con k nel codominio, incontra il grafico <b>almeno una volta</b>.</li>
<li><b>Biettiva</b> (o biunivoca): iniettiva <b>e</b> suriettiva. Ogni elemento di B ha <b>esattamente una</b> controimmagine. Solo le funzioni biettive si possono invertire.</li>
</ul>
<p>Attenzione: iniettività e suriettività dipendono <b>da dominio e codominio</b>, non solo dalla formula. La stessa formula f(x) = x² può essere:</p>
<ul>
<li>f: ℝ → ℝ: <b>né iniettiva né suriettiva</b> (f(2) = f(−2); nessun x dà −1);</li>
<li>f: ℝ → [0, +∞): <b>suriettiva</b> ma non iniettiva;</li>
<li>f: [0, +∞) → ℝ: <b>iniettiva</b> ma non suriettiva;</li>
<li>f: [0, +∞) → [0, +∞): <b>biettiva</b>.</li>
</ul>
<p><b>Esempio</b>: f(x) = 2x + 3 da ℝ in ℝ è biettiva: da 2x₁ + 3 = 2x₂ + 3 segue x₁ = x₂ (iniettiva), e per ogni y si ha x = (y − 3)/2 (suriettiva).</p>
<p><b>Insiemi finiti</b>: se A ha k elementi e B ne ha n, le funzioni da A a B sono <b>nᵏ</b>; quelle iniettive (possibili se k ≤ n) sono n(n − 1)...(n − k + 1). Se k = n, una funzione è iniettiva se e solo se è suriettiva se e solo se è biettiva (e ce ne sono n!).</p>`
    },
    {
      type: "text",
      title: "Monotonia, parità e altre proprietà",
      html: `<p>Altre proprietà utili per descrivere una funzione:</p>
<ul>
<li><b>Crescente</b> (in senso stretto) in un intervallo: x₁ &lt; x₂ ⟹ f(x₁) &lt; f(x₂). <b>Decrescente</b>: x₁ &lt; x₂ ⟹ f(x₁) &gt; f(x₂). Una funzione <b>strettamente monotona</b> è sempre iniettiva (per il test della retta orizzontale).</li>
<li><b>Pari</b>: f(−x) = f(x) per ogni x del dominio (dominio simmetrico); il grafico è <b>simmetrico rispetto all'asse y</b>. Es.: x², |x|, cos x.</li>
<li><b>Dispari</b>: f(−x) = −f(x); il grafico è <b>simmetrico rispetto all'origine</b>. Es.: x, x³, sin x.</li>
<li><b>Periodica</b> di periodo T: f(x + T) = f(x) per ogni x (le funzioni goniometriche, per esempio).</li>
<li><b>Zeri</b>: i valori di x per cui f(x) = 0 (intersezioni con l'asse x); <b>segno</b>: dove f(x) &gt; 0 o &lt; 0 (disequazioni!).</li>
</ul>
<p>Esempio: f(x) = x³ − x. Si ha f(−x) = −x³ + x = −f(x): è dispari. Zeri: x(x − 1)(x + 1) = 0 → −1, 0, 1. Segno: positiva per −1 &lt; x &lt; 0 e per x &gt; 1.</p>`
    },
    {
      type: "svg",
      title: "La funzione inversa: simmetria rispetto alla bisettrice",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="90" y1="250" x2="420" y2="250" stroke="#475569" stroke-width="2"/>
<line x1="100" y1="260" x2="100" y2="30" stroke="#475569" stroke-width="2"/>
<line x1="100" y1="250" x2="285" y2="65" stroke="#94a3b8" stroke-width="2" stroke-dasharray="7 5"/>
<polyline points="100,250 109,230 118,222 127,215 136,210 145,205 154,201 163,197 172,193 181,190 190,186 199,183 208,180 217,177 226,175 235,172 244,170 253,167 262,165 271,162 280,160" fill="none" stroke="#2563eb" stroke-width="4"/>
<polyline points="100,250 104,250 109,248 114,246 118,243 122,239 127,234 132,228 136,221 140,214 145,205 150,196 154,185 158,174 163,162 168,149 172,135 176,120 181,104 186,88 190,70" fill="none" stroke="#ea580c" stroke-width="4"/>
<circle cx="280" cy="160" r="6" fill="#2563eb"/>
<circle cx="190" cy="70" r="6" fill="#ea580c"/>
<text x="290" y="168" font-size="16" fill="#1d4ed8" font-weight="bold">(4; 2)</text>
<text x="200" y="68" font-size="16" fill="#9a3412" font-weight="bold">(2; 4)</text>
<text x="300" y="62" font-size="16" fill="#475569">y = x</text>
<text x="300" y="206" font-size="16" fill="#1d4ed8" font-weight="bold">f(x) = √x</text>
<text x="440" y="110" font-size="16" fill="#9a3412" font-weight="bold">f⁻¹(x) = x²  (x ≥ 0)</text>
<text x="440" y="140" font-size="14" fill="#334155">(x, y) ↔ (y, x):</text>
<text x="440" y="160" font-size="14" fill="#334155">scambio di ascisse e</text>
<text x="440" y="180" font-size="14" fill="#334155">ordinate</text>
</svg>`,
      caption: "I grafici di √x e di x² (per x ≥ 0) sono simmetrici rispetto alla retta y = x: ogni punto (a, b) del primo corrisponde a (b, a) del secondo."
    },
    {
      type: "text",
      title: "La funzione inversa",
      html: `<p>Se f: A → B è <b>biettiva</b>, a ogni y di B corrisponde <b>un solo</b> x di A con f(x) = y: la regola "y ↦ x" è una funzione di B in A, detta <b>funzione inversa</b> e indicata con <b>f⁻¹</b> (attenzione: f⁻¹ <i>non</i> è 1/f!). Valgono:</p>
<ul>
<li><b>f⁻¹(f(x)) = x</b> per ogni x di A e <b>f(f⁻¹(y)) = y</b> per ogni y di B: l'inversa "annulla" la funzione.</li>
<li>Dominio di f⁻¹ = codominio (= immagine) di f, e viceversa.</li>
<li>Il grafico di f⁻¹ è il simmetrico di quello di f rispetto alla <b>bisettrice y = x</b> (perché (a, b) sul grafico di f ⟺ (b, a) sul grafico di f⁻¹).</li>
</ul>
<p><b>Come si calcola.</b> (1) Si controlla che f sia biettiva (eventualmente restringendo dominio e codominio). (2) Si scrive y = f(x) e si <b>ricava x in funzione di y</b>. (3) Si scambiano i nomi delle variabili (x ↔ y).</p>
<p><b>Esempio 1.</b> f(x) = 2x + 3: y = 2x + 3 → x = (y − 3)/2 → <b>f⁻¹(x) = (x − 3)/2</b>.</p>
<p><b>Esempio 2.</b> f(x) = (x + 1)/(x − 2) con dominio ℝ \\ {2}. Da y(x − 2) = x + 1 → xy − 2y = x + 1 → x(y − 1) = 2y + 1 → x = (2y + 1)/(y − 1) (possibile se y ≠ 1). Quindi l'immagine è ℝ \\ {1} e <b>f⁻¹(x) = (2x + 1)/(x − 1)</b>, da ℝ \\ {1} a ℝ \\ {2}.</p>
<p><b>Esempio 3: restrizione.</b> f(x) = x² non è invertibile su ℝ. Ma su [0, +∞) lo è, con inversa <b>√x</b>. Su (−∞, 0] l'inversa sarebbe −√x. Per questo le "funzioni inverse" delle potenze pari richiedono di scegliere un ramo.</p>
<p><b>Esempio 4: esponenziali e logaritmi</b> (anticipo): f(x) = 2ˣ da ℝ a (0, +∞) è biettiva e la sua inversa è log₂ x: "il logaritmo è l'inverso dell'esponenziale".</p>`
    },
    {
      type: "text",
      title: "La composizione di funzioni",
      html: `<p>Date f: A → B e g: B → C (o più in generale con l'immagine di f contenuta nel dominio di g), la <b>funzione composta</b> g ∘ f ("g dopo f") è la funzione da A a C definita da <b>(g ∘ f)(x) = g(f(x))</b>: prima si applica f, poi g all'uscita di f.</p>
<ul>
<li>La composizione <b>non è commutativa</b>: in generale g ∘ f ≠ f ∘ g.</li>
<li>È <b>associativa</b>: h ∘ (g ∘ f) = (h ∘ g) ∘ f.</li>
<li>La <b>funzione identità</b> id(x) = x è l'elemento neutro: f ∘ id = id ∘ f = f. Se f è biettiva, f⁻¹ ∘ f = id e f ∘ f⁻¹ = id.</li>
<li>Il <b>dominio</b> di g ∘ f è l'insieme degli x del dominio di f tali che f(x) appartiene al dominio di g.</li>
</ul>
<p><b>Esempio.</b> f(x) = x + 1, g(x) = x². (g ∘ f)(x) = g(x + 1) = (x + 1)²; (f ∘ g)(x) = f(x²) = x² + 1. Per x = 3 si ottiene 16 contro 10: l'ordine conta! (Come mettersi le calze e poi le scarpe: l'ordine inverso non è la stessa cosa.)</p>
<p><b>Esempio con dominio.</b> f(x) = x − 4, g(x) = √x. (g ∘ f)(x) = √(x − 4), definita solo per x ≥ 4, anche se f è definita ovunque. Invece (f ∘ g)(x) = √x − 4 è definita per x ≥ 0.</p>
<p><b>Scomporre.</b> Saper riconoscere una funzione come composta serve per capirne la struttura: h(x) = √(3x − 5) = g(f(x)) con f(x) = 3x − 5 e g(x) = √x; h(x) = (x² + 1)³ = g(f(x)) con f(x) = x² + 1, g(x) = x³ (la "regola della catena" per le derivate, che incontrerai in quarta e quinta, parte proprio da questa decomposizione).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: dalla temperatura al ghiaccio... e ritorno",
      html: `<p>Il passaggio da gradi Celsius a Fahrenheit è F(c) = 1,8c + 32, funzione biettiva da ℝ a ℝ. La sua inversa è C(f) = (f − 32)/1,8 (da Fahrenheit a Celsius). Verifica: 25 °C → F = 45 + 32 = 77 °F; poi (77 − 32)/1,8 = 25 ✔️. Se poi un termostato converte la temperatura in Kelvin K(c) = c + 273,15, la composizione K ∘ C converte direttamente da Fahrenheit a Kelvin: (K ∘ C)(f) = (f − 32)/1,8 + 273,15. Ecco perché in un software le conversioni si "concatenano": ogni passaggio è una funzione e il risultato è la loro composta. Nota: nel convertire non conta solo la formula, anche l'inversa serve a tornare indietro, e per questo è bene che le conversioni siano <b>biettive</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la ricerca sul telefono",
      html: `<p>Pensa alla rubrica dello smartphone: la regola che associa a ogni persona il suo numero principale è una funzione (ogni persona ha un solo numero principale). È <b>iniettiva</b> se due persone diverse non hanno mai lo stesso numero (se due amici condividono il numero di casa, non lo è). Se esistono numeri non assegnati a nessuno, non è suriettiva rispetto all'insieme di tutti i numeri possibili. L'<b>inversa</b> ("data un numero, chi è?") esiste solo se la funzione è biettiva: per questo l'identificazione del chiamante funziona bene con numeri univoci. Lo stesso accade con i codici fiscali, le matricole e gli ID: sono pensati per essere <b>funzioni iniettive</b> dalle persone ai codici.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La storia del concetto di funzione",
      html: `<p>La parola <i>funzione</i> fu usata da <b>Leibniz</b> alla fine del Seicento, ma il concetto era legato a formule e curve. La notazione <b>f(x)</b> si deve a <b>Eulero</b> (metà del Settecento). La definizione moderna, in cui la funzione è una <i>corrispondenza arbitraria</i> e non per forza una formula, si consolida nell'Ottocento con <b>Dirichlet</b> (1837); già nel 1829 egli aveva proposto come esempio la funzione che vale 1 sui razionali e 0 sugli irrazionali, impossibile da disegnare! Oggi, nella teoria degli insiemi, una funzione è semplicemente un insieme di coppie ordinate.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il principio dei cassetti",
      html: `<p>Se metti 11 calzini in 10 cassetti, almeno un cassetto ne contiene due. È il <b>principio dei cassetti</b> (o delle "piccionaie") di Dirichlet: <b>nessuna funzione da un insieme di 11 elementi a uno di 10 può essere iniettiva</b>. Segue una conseguenza sorprendente: in una metropoli di alcuni milioni di abitanti ci sono sicuramente due persone con lo stesso numero di capelli, perché nessuno ne ha più di qualche centinaio di migliaia (la funzione abitante → numero di capelli non può essere iniettiva). La matematica discreta è piena di argomenti di questo tipo.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le funzioni",
      intro: "La parola \"funzione\" può sembrare astratta. Ecco tre modi concreti per vederla.",
      tabs: [
        {
          label: "🏭 La macchina",
          html: `<p>Immagina una <b>macchina</b> con una bocca d'ingresso e una d'uscita: metti x, esce f(x). La macchina deve essere <b>deterministica</b>: lo stesso ingresso dà sempre la stessa uscita (altrimenti non è una funzione). La composizione g ∘ f è mettere due macchine in <b>serie</b>: l'uscita della prima entra nella seconda. L'inversa è la macchina che "gira al contrario", e si può costruire solo se la macchina non "schiaccia" due ingressi diversi sulla stessa uscita (iniettività) e se ogni uscita possibile è ottenibile (suriettività).</p>`
        },
        {
          label: "📊 La tabella e il grafico",
          html: `<p>Una funzione può essere solo una <b>tabella</b>: x = 1, 2, 3, 4 → y = 2, 4, 6, 8. Il <b>grafico</b> la dispone nel piano: se i punti stanno su una retta, è y = 2x. L'<b>inversa</b> si ottiene <b>scambiando le colonne</b> della tabella: x = 2, 4, 6, 8 → y = 1, 2, 3, 4, cioè y = x/2. Graficamente, scambiare le colonne = specchiare rispetto alla bisettrice.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="60" y1="260" x2="320" y2="260" stroke="#475569" stroke-width="2"/><line x1="70" y1="270" x2="70" y2="30" stroke="#475569" stroke-width="2"/><line x1="70" y1="260" x2="290" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="7 5"/><line x1="70" y1="260" x2="220" y2="40" stroke="#2563eb" stroke-width="4"/><line x1="70" y1="260" x2="290" y2="150" stroke="#ea580c" stroke-width="4"/><text x="226" y="48" font-size="16" fill="#1d4ed8" font-weight="bold">y = 2x</text><text x="295" y="152" font-size="16" fill="#9a3412" font-weight="bold">y = x/2</text><text x="300" y="38" font-size="16" fill="#475569">y = x</text><text x="350" y="100" font-size="16" fill="#334155">x:  1  2  3  4</text><text x="350" y="125" font-size="16" fill="#1d4ed8">f:  2  4  6  8</text><text x="350" y="165" font-size="16" fill="#334155">x:  2  4  6  8</text><text x="350" y="190" font-size="16" fill="#9a3412">f⁻¹: 1  2  3  4</text></svg>`
        },
        {
          label: "🧩 Gli insiemi di punti e frecce",
          html: `<p>Disegna due "sacchi" di punti e collega ogni punto di A con <b>una sola freccia</b> a un punto di B. <b>Iniettiva</b> = a ogni punto di B arriva <b>al massimo una freccia</b>. <b>Suriettiva</b> = a ogni punto di B arriva <b>almeno una freccia</b>. <b>Biettiva</b> = esattamente una: puoi invertire tutte le frecce e ottieni ancora una funzione. Prova tu: può una funzione da A (3 elementi) a B (3 elementi) essere iniettiva ma non suriettiva? <i>No</i>: con insiemi finiti che hanno lo stesso numero di elementi le due proprietà coincidono.</p>`,
          widget: "classify",
          options: { groups: ["Iniettiva", "Non iniettiva"], items: [["f(x) = 2x + 1 su ℝ", 0], ["f(x) = x² su ℝ", 1], ["f(x) = x³ su ℝ", 0], ["f(x) = |x| su ℝ", 1], ["f(x) = √x su [0, +∞)", 0]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle funzioni",
      nodes: [
        { id: "def", label: "Funzione", x: 50, y: 6, color: "#6366f1", html: "Una legge che associa a ogni x del dominio uno e un solo y del codominio.", why: "Dirichlet (1837) la rese una corrispondenza qualsiasi; nel Novecento diventa un insieme di coppie ordinate, fondamento di tutta la matematica." },
        { id: "dom", label: "Dominio e immagine", x: 18, y: 30, color: "#16a34a", html: "Dove la formula ha senso e quali valori assume.", why: "Servono le condizioni di esistenza: denominatori ≠ 0, radicandi pari ≥ 0 (e argomenti dei logaritmi &gt; 0)." },
        { id: "tipi", label: "Iniettiva, suriettiva, biettiva", x: 82, y: 30, color: "#f59e0b", html: "Come si comportano le frecce tra A e B.", why: "È la nozione che permette di confrontare la \"grandezza\" degli insiemi (Cantor): due insiemi hanno lo stesso numero di elementi se c'è una biezione." },
        { id: "inv", label: "Funzione inversa", x: 82, y: 62, color: "#ef4444", html: "Esiste solo se f è biettiva; il grafico si specchia su y = x.", why: "Risolvere un'equazione y = f(x) significa proprio trovare le controimmagini: se una sola, l'inversa esiste." },
        { id: "comp", label: "Composizione", x: 18, y: 62, color: "#0ea5e9", html: "g ∘ f: prima f, poi g; non commutativa.", why: "Descrive i processi a più fasi; l'inversa è definita da f⁻¹ ∘ f = id." },
        { id: "prop", label: "Proprietà (monotonia, parità, zeri)", x: 50, y: 88, color: "#a855f7", html: "Descrivono la forma del grafico.", why: "Strumenti dell'analisi: la monotonia stretta implica l'iniettività, e quindi l'invertibilità." }
      ],
      edges: [
        ["def", "dom", "ha"],
        ["def", "tipi", "classifica"],
        ["tipi", "inv", "biettiva ⇒"],
        ["def", "comp", "si compongono"],
        ["comp", "inv", "f⁻¹∘f = id"],
        ["dom", "prop", "studio di"],
        ["inv", "prop", "monotona ⇒ invertibile"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: inversa e composta",
      questions: [
        { type: "mc", q: "L'inversa di f(x) = 3x − 6 è…", options: ["(x + 6)/3", "(x − 6)/3", "1/(3x − 6)"], answer: 0, explain: "y = 3x − 6 → x = (y + 6)/3; scambiando i nomi: (x + 6)/3." },
        { type: "num", q: "Se f(x) = x + 1 e g(x) = x², quanto vale (g ∘ f)(2)?", answer: 9, explain: "(g ∘ f)(2) = g(f(2)) = g(3) = 9." },
        { type: "tf", q: "La funzione f(x) = x² da ℝ in ℝ è invertibile.", answer: false, explain: "Non è iniettiva: f(2) = f(−2) = 4. Si può invertire solo su [0, +∞) o su (−∞, 0]." }
      ]
    }
  ],
  glossary: [
    { t: "Funzione", d: "Legge che associa a ogni elemento del dominio uno e un solo elemento del codominio." },
    { t: "Dominio", d: "Insieme degli elementi su cui la funzione è definita." },
    { t: "Codominio", d: "Insieme in cui la funzione prende i valori." },
    { t: "Immagine", d: "Insieme dei valori effettivamente assunti dalla funzione." },
    { t: "Funzione iniettiva", d: "Elementi diversi hanno immagini diverse." },
    { t: "Funzione suriettiva", d: "Ogni elemento del codominio è immagine di almeno un elemento del dominio." },
    { t: "Funzione biettiva", d: "Iniettiva e suriettiva: corrispondenza biunivoca." },
    { t: "Funzione inversa", d: "La funzione f⁻¹ che a f(x) fa corrispondere x; esiste se f è biettiva." },
    { t: "Funzione composta", d: "g ∘ f, definita da (g ∘ f)(x) = g(f(x))." },
    { t: "Funzione pari / dispari", d: "Pari: f(−x) = f(x); dispari: f(−x) = −f(x)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Il dominio di f(x) = √(x − 1)/(x − 3) è…", options: ["[1, 3) ∪ (3, +∞)", "[1, +∞)", "ℝ \\ {3}"], answer: 0, explain: "Servono x ≥ 1 (radicando) e x ≠ 3 (denominatore)." },
      { type: "mc", q: "Il dominio di f(x) = 1/√(4 − x²) è…", options: ["[−2, 2]", "(−2, 2)", "ℝ \\ {2}"], answer: 1, explain: "Il radicando deve essere strettamente positivo: 4 − x² &gt; 0 → −2 &lt; x &lt; 2." },
      { type: "tf", q: "Una retta verticale può intersecare il grafico di una funzione y = f(x) in due punti.", answer: false, explain: "Altrimenti a uno stesso x corrisponderebbero due valori di y." },
      { type: "mc", q: "La funzione f(x) = x² da ℝ a [0, +∞) è…", options: ["biettiva", "suriettiva ma non iniettiva", "iniettiva ma non suriettiva"], answer: 1, explain: "Ogni y ≥ 0 è raggiunta (suriettiva), ma f(2) = f(−2) (non iniettiva)." },
      { type: "mc", q: "La funzione inversa di f(x) = 2x + 3 è…", options: ["(x − 3)/2", "2x − 3", "1/(2x + 3)"], answer: 0, explain: "x = (y − 3)/2 e poi si scambiano i nomi." },
      { type: "num", q: "Se f(x) = x − 4 e g(x) = x², quanto vale (f ∘ g)(3)?", answer: 5, explain: "g(3) = 9; f(9) = 5." },
      { type: "mc", q: "Quale funzione è dispari?", options: ["x²", "x³ − x", "|x|"], answer: 1, explain: "f(−x) = −x³ + x = −f(x)." },
      { type: "num", q: "Quante funzioni ci sono da un insieme di 2 elementi a uno di 3 elementi?", answer: 9, explain: "3² = 9: ciascuno dei 2 elementi ha 3 possibili immagini." },
      { type: "order", q: "Metti in ordine i passi per trovare la funzione inversa.", items: ["Verificare che f sia biettiva (restringendo se serve)", "Scrivere y = f(x)", "Ricavare x in funzione di y", "Scambiare i nomi delle variabili", "Controllare con f⁻¹(f(x)) = x"], explain: "Si controlla l'invertibilità, si ricava x, si scambiano x e y e si verifica." },
      { type: "text", q: "Come si chiama l'asse di simmetria rispetto al quale i grafici di f e f⁻¹ sono simmetrici? (equazione)", answer: ["y = x", "y=x", "bisettrice", "la bisettrice", "bisettrice del primo e terzo quadrante"], explain: "Il grafico dell'inversa si ottiene riflettendo il grafico di f rispetto alla retta y = x." }
    ]
  }
});
