TOPIC('it', {
  id: "l3-mat-equazioni-disequazioni",
  title: "Equazioni e disequazioni di grado superiore",
  intro: "Quanto deve costare un biglietto perché il concerto non vada in perdita? In che intervallo di tempo un drone vola sopra i 20 metri di quota? Quasi sempre la risposta non è <i>un</i> numero, ma <b>un insieme di valori</b>: una disequazione. Dopo quelle di primo grado, ora affrontiamo le <b>disequazioni di secondo grado</b> (con la parabola come strumento), quelle <b>fratte</b>, quelle con il <b>valore assoluto</b> e quelle <b>irrazionali</b>, e vediamo come abbassare il grado di equazioni di grado superiore (<b>biquadratiche</b>, scomposizione, Ruffini).",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Che cosa cambia rispetto al primo grado",
      html: `<p>Nel biennio hai risolto equazioni di secondo grado e disequazioni di primo grado. Ricordiamo l'essenziale: una <b>disequazione</b> è una disuguaglianza con un'incognita; il suo <b>insieme delle soluzioni</b> (S) è di solito un intervallo, o un'unione di intervalli. Si possono sommare quantità a entrambi i membri; si può moltiplicare o dividere per un numero positivo; ma <b>moltiplicando o dividendo per un numero negativo si inverte il verso</b>.</p>
<p>Il problema del secondo grado è che il segno di un'espressione come x² − 5x + 6 <b>cambia</b> a seconda di x: non basta più "isolare la x". Serve uno strumento che dica <b>dove</b> l'espressione è positiva, negativa o nulla. Questo strumento è lo <b>studio del segno</b>, e per il trinomio di secondo grado è il grafico della <b>parabola</b>.</p>
<p>Idea guida di tutta la lezione: ogni disequazione, anche complicata, si riduce a <b>studiare il segno di un prodotto o di un quoziente di fattori semplici</b> (di primo o secondo grado), e poi a unire le informazioni su una retta dei numeri.</p>`
    },
    {
      type: "text",
      title: "Disequazioni di secondo grado: la parabola ci dice il segno",
      html: `<p>Consideriamo ax² + bx + c &gt; 0 (oppure &lt;, ≥, ≤), con a &gt; 0 (se a &lt; 0 si moltiplica per −1 invertendo il verso). Il grafico di y = ax² + bx + c è una parabola <b>con la concavità verso l'alto</b>. Le soluzioni dipendono dal discriminante <b>Δ = b² − 4ac</b>:</p>
<ul>
<li><b>Δ &gt; 0</b>: due radici reali x₁ &lt; x₂. La parabola sta <b>sotto l'asse x tra le radici</b> e sopra fuori: ax² + bx + c &gt; 0 per <b>x &lt; x₁ ∨ x &gt; x₂</b> (valori <i>esterni</i>); &lt; 0 per <b>x₁ &lt; x &lt; x₂</b> (valori <i>interni</i>).</li>
<li><b>Δ = 0</b>: una radice doppia x₀ (la parabola è tangente all'asse x). Il trinomio è ≥ 0 sempre e vale 0 solo in x₀: "&gt; 0" per <b>x ≠ x₀</b>; "≥ 0" per ogni x; "&lt; 0" <b>impossibile</b>; "≤ 0" solo per <b>x = x₀</b>.</li>
<li><b>Δ &lt; 0</b>: nessuna radice, la parabola sta tutta sopra l'asse: "&gt; 0" e "≥ 0" sono vere <b>per ogni x</b> (S = ℝ), "&lt; 0" e "≤ 0" sono <b>impossibili</b> (S = ∅).</li>
</ul>
<p><b>Esempio 1.</b> x² − 5x + 6 &gt; 0. Le radici sono x = 2 e x = 3 (perché (x − 2)(x − 3) = x² − 5x + 6). Il verso è "&gt;" quindi valori esterni: <b>x &lt; 2 ∨ x &gt; 3</b>. Per x = 0 il trinomio vale 6 &gt; 0 ✔️; per x = 2,5 vale −0,25 &lt; 0 (infatti 2,5 è tra le radici).</p>
<p><b>Esempio 2.</b> x² − 4x + 4 ≤ 0, cioè (x − 2)² ≤ 0: un quadrato non è mai negativo, quindi solo <b>x = 2</b>.</p>
<p><b>Esempio 3.</b> x² + 1 &lt; 0 oppure 2x² − 3x + 5 &gt; 0: Δ = 9 − 40 &lt; 0 e a &gt; 0, quindi la seconda è vera per ogni x (S = ℝ) e la prima è impossibile (S = ∅).</p>`
    },
    {
      type: "svg",
      title: "La parabola e il segno del trinomio",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="150" x2="590" y2="150" stroke="#475569" stroke-width="2"/>
<polyline points="104,34 123,53 142,71 162,88 181,102 200,115 219,126 239,136 258,143 277,149 296,154 316,156 335,157 354,156 373,154 393,149 412,143 431,136 450,126 470,115 489,102 508,88 527,71 547,53 566,34" fill="none" stroke="#7c3aed" stroke-width="4"/>
<circle cx="280" cy="150" r="7" fill="#dc2626"/>
<circle cx="390" cy="150" r="7" fill="#dc2626"/>
<text x="280" y="176" font-size="16" fill="#991b1b" font-weight="bold" text-anchor="middle">x = 2</text>
<text x="390" y="176" font-size="16" fill="#991b1b" font-weight="bold" text-anchor="middle">x = 3</text>
<text x="150" y="120" font-size="18" fill="#166534" font-weight="bold" text-anchor="middle">+</text>
<text x="335" y="132" font-size="18" fill="#b91c1c" font-weight="bold" text-anchor="middle">−</text>
<text x="525" y="120" font-size="18" fill="#166534" font-weight="bold" text-anchor="middle">+</text>
<text x="300" y="215" font-size="16" fill="#334155" text-anchor="middle">y = x² − 5x + 6   (Δ = 1 &gt; 0, a &gt; 0)</text>
<text x="300" y="245" font-size="16" fill="#1d4ed8" text-anchor="middle">&gt; 0 se x &lt; 2 oppure x &gt; 3  (esterni)</text>
<text x="300" y="272" font-size="16" fill="#9a3412" text-anchor="middle">&lt; 0 se 2 &lt; x &lt; 3  (interni)</text>
</svg>`,
      caption: "Dove la parabola sta sopra l'asse x il trinomio è positivo, dove sta sotto è negativo; nelle radici vale zero."
    },
    {
      type: "remember",
      title: "Schema veloce (a &gt; 0, Δ &gt; 0, radici x₁ &lt; x₂)",
      html: `<ul>
<li><b>&gt; 0</b>: x &lt; x₁ ∨ x &gt; x₂ (esterni, estremi esclusi).</li>
<li><b>≥ 0</b>: x ≤ x₁ ∨ x ≥ x₂ (esterni, estremi inclusi).</li>
<li><b>&lt; 0</b>: x₁ &lt; x &lt; x₂ (interni).</li>
<li><b>≤ 0</b>: x₁ ≤ x ≤ x₂ (interni, estremi inclusi).</li>
</ul>
<p>Regola pratica: "<i>discorde</i> → interni, <i>concorde</i> → esterni": se il verso della disequazione è <b>opposto</b> al segno di a si prendono i valori <b>interni</b>, se è <b>uguale</b> i valori <b>esterni</b>. Disegna sempre la parabola: è più sicuro che imparare a memoria.</p>`
    },
    {
      type: "widget",
      title: "Provalo sulla retta dei numeri",
      widget: "numberLine",
      options: { min: -2, max: 6, step: 1, marks: [2, 3] },
      caption: "Segna sulla retta le radici 2 e 3 di x² − 5x + 6: la retta resta divisa in tre zone (a sinistra di 2, tra 2 e 3, a destra di 3) e il segno del trinomio è + − + ."
    },
    {
      type: "text",
      title: "Disequazioni di grado superiore e disequazioni fratte: il metodo dei segni",
      html: `<p>Per le disequazioni di grado superiore al secondo o per quelle fratte si usa il <b>metodo dei segni</b> (o "tabella dei segni"):</p>
<ol>
<li>Porta tutto a un membro, in modo da avere <b>espressione ⋚ 0</b> (per le fratte riduci a un'unica frazione N(x)/D(x)).</li>
<li><b>Scomponi</b> numeratore e denominatore in fattori di primo e secondo grado (raccoglimento, prodotti notevoli, trinomio, Ruffini).</li>
<li>Per ogni fattore studia <b>dove è positivo</b> (&gt; 0) e annotalo su una retta numerata; i fattori sempre positivi (Δ &lt; 0, a &gt; 0) si possono ignorare.</li>
<li>Applica la <b>regola dei segni</b> al prodotto/quoziente, e scegli le zone con il segno richiesto.</li>
<li>Nelle fratte: i valori che annullano il <b>denominatore</b> sono <b>sempre esclusi</b> (non si può dividere per zero), anche se la disequazione è "≥".</li>
</ol>
<p><b>Esempio (fratta).</b> (x − 1)/(x + 2) ≥ 0. N ≥ 0 per x ≥ 1; D &gt; 0 per x &gt; −2. Segni: per x &lt; −2 numeratore −, denominatore − → quoziente +; tra −2 e 1: − / + = −; per x &gt; 1: +. Il quoziente è ≥ 0 per <b>x &lt; −2 ∨ x ≥ 1</b> (−2 escluso: annulla il denominatore; 1 incluso: annulla il numeratore).</p>
<p><b>Attenzione all'errore classico</b>: non si deve "togliere il denominatore" moltiplicando per D(x), perché D(x) può essere negativo (e allora il verso si invertirebbe!). Con il metodo dei segni si evita il problema.</p>
<p><b>Esempio (terzo grado).</b> x³ − 2x² − 5x + 6 &gt; 0. Si prova x = 1: 1 − 2 − 5 + 6 = 0 ✔️, quindi (x − 1) è un fattore. Con Ruffini (vedi sotto) si ottiene (x − 1)(x² − x − 6) = (x − 1)(x − 3)(x + 2). Radici −2, 1, 3. Segno del prodotto (a &gt; 0, grado dispari): − per x &lt; −2, + tra −2 e 1, − tra 1 e 3, + per x &gt; 3. Soluzione: <b>−2 &lt; x &lt; 1 ∨ x &gt; 3</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il concerto in perdita o in guadagno",
      html: `<p>Un'associazione organizza un concerto. Se il biglietto costa x euro, i biglietti venduti sono (200 − 5x), e le spese fisse sono 600 €. Il guadagno è G(x) = x(200 − 5x) − 600 = −5x² + 200x − 600. Per quali prezzi si guadagna?</p>
<p>Servono G(x) &gt; 0, cioè −5x² + 200x − 600 &gt; 0 → dividendo per −5 (verso invertito): x² − 40x + 120 &lt; 0. Δ/4 = 400 − 120 = 280, quindi x = 20 ± √280 ≈ 20 ± 16,73, cioè tra circa <b>3,27 €</b> e <b>36,73 €</b> (valori interni, perché il verso è "&lt;" e a &gt; 0). Sotto 3,27 € non si recuperano le spese; sopra 36,73 € si vendono troppo pochi biglietti. Il guadagno massimo si ha al vertice, x = 20 €: G = 20·100 − 600 = 1400 €. Vedi: la disequazione di secondo grado descrive bene un compromesso tra prezzo e quantità.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: secondo grado e fratte",
      questions: [
        { type: "mc", q: "Qual è l'insieme delle soluzioni di x² − 9 &lt; 0?", options: ["x &lt; −3 ∨ x &gt; 3", "−3 &lt; x &lt; 3", "x &lt; 3"], answer: 1, explain: "Radici ±3, verso opposto al segno di a (a &gt; 0, \"&lt;\"): valori interni, −3 &lt; x &lt; 3." },
        { type: "tf", q: "La disequazione x² − 6x + 9 &gt; 0 è verificata per ogni numero reale.", answer: false, explain: "Equivale a (x − 3)² &gt; 0: vera per ogni x tranne x = 3, dove il quadrato vale 0." },
        { type: "mc", q: "Nella disequazione (x + 1)/(x − 4) &lt; 0, il valore x = 4…", options: ["è soluzione", "non è soluzione, perché annulla il denominatore", "è soluzione solo se si inverte il verso"], answer: 1, explain: "Il denominatore non può essere zero: x = 4 è escluso sempre." }
      ]
    },
    {
      type: "text",
      title: "Equazioni e disequazioni con il valore assoluto",
      html: `<p>Il <b>valore assoluto</b> di un numero è la sua distanza da 0: |x| = x se x ≥ 0, |x| = −x se x &lt; 0. Più in generale |x − a| è la <b>distanza</b> tra x e a sulla retta numerica: questa lettura geometrica risolve tanti casi in un attimo.</p>
<ul>
<li><b>|A| = k</b> (k &gt; 0) ⟺ A = k ∨ A = −k. Se k &lt; 0 è impossibile.</li>
<li><b>|A| &lt; k</b> (k &gt; 0) ⟺ −k &lt; A &lt; k (distanza piccola: dentro). Se k ≤ 0 è impossibile.</li>
<li><b>|A| &gt; k</b> (k &gt; 0) ⟺ A &lt; −k ∨ A &gt; k (distanza grande: fuori). Se k &lt; 0 è sempre vera.</li>
<li><b>|A| = |B|</b> ⟺ A = B ∨ A = −B (oppure A² = B²).</li>
<li><b>|A| &lt; B</b> ⟺ −B &lt; A &lt; B (e questo richiede B &gt; 0); <b>|A| &gt; B</b> ⟺ (B &lt; 0) ∨ (A &lt; −B ∨ A &gt; B).</li>
</ul>
<p><b>Esempio 1.</b> |2x − 1| = 5 → 2x − 1 = 5 ∨ 2x − 1 = −5 → x = 3 ∨ x = −2.</p>
<p><b>Esempio 2.</b> |x − 3| &lt; 5 → −5 &lt; x − 3 &lt; 5 → <b>−2 &lt; x &lt; 8</b>: i numeri a distanza minore di 5 da 3.</p>
<p><b>Esempio 3.</b> |x − 1| &gt; 2 → x − 1 &lt; −2 ∨ x − 1 &gt; 2 → <b>x &lt; −1 ∨ x &gt; 3</b>.</p>
<p><b>Caso con più valori assoluti</b>: |x − 1| + |x + 2| = 5. Si "spezza" la retta nei punti in cui si annullano gli argomenti (x = 1 e x = −2) e si risolve in ogni zona togliendo i moduli col segno giusto. Per x ≥ 1: (x − 1) + (x + 2) = 5 → 2x = 4 → x = 2 ✔️ (≥ 1). Per −2 ≤ x &lt; 1: −(x − 1) + (x + 2) = 3 ≠ 5: nessuna soluzione. Per x &lt; −2: −(x − 1) − (x + 2) = −2x − 1 = 5 → x = −3 ✔️. Soluzioni <b>x = −3 ∨ x = 2</b>. Lettura geometrica: i punti la cui somma delle distanze da 1 e da −2 è 5.</p>`
    },
    {
      type: "text",
      title: "Disequazioni irrazionali",
      html: `<p>Le disequazioni con radici quadrate (indice pari) richiedono due cautele: il <b>radicando deve essere ≥ 0</b> (condizione di esistenza), e <b>elevando al quadrato</b> si può mantenere l'equivalenza solo se i due membri sono non negativi. Due schemi fondamentali (indice 2):</p>
<ul>
<li><b>√A &lt; B</b> ⟺ sistema { A ≥ 0 , B &gt; 0 , A &lt; B² }.</li>
<li><b>√A &gt; B</b> ⟺ unione di due sistemi: { B &lt; 0 , A ≥ 0 } ∪ { B ≥ 0 , A &gt; B² }. (Se B è negativo la radice, che è ≥ 0, è automaticamente maggiore.)</li>
</ul>
<p><b>Esempio 1.</b> √(x + 2) &lt; x. Condizioni: x + 2 ≥ 0 → x ≥ −2; x &gt; 0; x + 2 &lt; x² → x² − x − 2 &gt; 0 → x &lt; −1 ∨ x &gt; 2. Mettendo insieme: <b>x &gt; 2</b>. Controllo: x = 3 → √5 ≈ 2,24 &lt; 3 ✔️; x = 1 → √3 ≈ 1,73 non è &lt; 1.</p>
<p><b>Esempio 2.</b> √(x + 2) &gt; x. Primo sistema: x &lt; 0 e x ≥ −2 → −2 ≤ x &lt; 0. Secondo sistema: x ≥ 0 e x + 2 &gt; x² → x² − x − 2 &lt; 0 → −1 &lt; x &lt; 2 → 0 ≤ x &lt; 2. Unione: <b>−2 ≤ x &lt; 2</b>.</p>
<p><b>Equazioni irrazionali</b>: √(2x + 3) = x. Condizioni: x ≥ 0 (la radice è non negativa) e 2x + 3 ≥ 0. Elevando: 2x + 3 = x² → x² − 2x − 3 = 0 → x = 3 ∨ x = −1. Si scarta x = −1 perché non soddisfa x ≥ 0 (√1 = 1 ≠ −1): <b>x = 3</b> (√9 = 3 ✔️). Le soluzioni "estranee" nascono perché elevando al quadrato si perde il segno: <b>si verificano sempre</b>.</p>`
    },
    {
      type: "svg",
      title: "Valore assoluto come distanza",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="120" x2="570" y2="120" stroke="#475569" stroke-width="3"/>
<line x1="150" y1="108" x2="150" y2="132" stroke="#475569" stroke-width="3"/>
<line x1="270" y1="108" x2="270" y2="132" stroke="#475569" stroke-width="3"/>
<line x1="450" y1="108" x2="450" y2="132" stroke="#475569" stroke-width="3"/>
<rect x="150" y="112" width="300" height="16" fill="#22c55e" opacity="0.55"/>
<circle cx="150" cy="120" r="8" fill="#ffffff" stroke="#166534" stroke-width="3"/>
<circle cx="450" cy="120" r="8" fill="#ffffff" stroke="#166534" stroke-width="3"/>
<circle cx="300" cy="120" r="7" fill="#2563eb"/>
<text x="150" y="155" font-size="16" fill="#1e293b" text-anchor="middle">−2</text>
<text x="300" y="155" font-size="16" fill="#1d4ed8" text-anchor="middle" font-weight="bold">3</text>
<text x="450" y="155" font-size="16" fill="#1e293b" text-anchor="middle">8</text>
<text x="225" y="95" font-size="16" fill="#9a3412" text-anchor="middle">distanza 5</text>
<text x="375" y="95" font-size="16" fill="#9a3412" text-anchor="middle">distanza 5</text>
<text x="300" y="215" font-size="18" fill="#166534" text-anchor="middle" font-weight="bold">|x − 3| &lt; 5  ⟺  −2 &lt; x &lt; 8</text>
<text x="300" y="250" font-size="16" fill="#334155" text-anchor="middle">i punti a distanza minore di 5 da 3</text>
</svg>`,
      caption: "Il valore assoluto |x − a| è la distanza di x da a: la disequazione |x − 3| < 5 chiede tutti i punti entro 5 unità da 3."
    },
    {
      type: "text",
      title: "Equazioni di grado superiore: biquadratiche, scomposizione, Ruffini",
      html: `<p>Per le equazioni di grado &gt; 2 non esiste una formula semplice (per il 3° e 4° grado esistono formule risolutive, scoperte nel Cinquecento dai matematici italiani, ma sono complicate; per il 5° grado, nell'Ottocento, Abel e Galois dimostrarono che <b>non esiste</b> una formula con le sole radici). Si ricorre quindi a tre strategie:</p>
<ol>
<li><b>Scomposizione</b> in fattori e <b>legge di annullamento del prodotto</b>: A·B = 0 ⟺ A = 0 ∨ B = 0. Es.: x³ − 4x = x(x − 2)(x + 2) = 0 → x = 0, ±2.</li>
<li><b>Equazioni binomie</b> (xⁿ = k) e <b>trinomie</b>, in particolare le <b>biquadratiche</b> ax⁴ + bx² + c = 0: si pone <b>t = x²</b> e si risolve at² + bt + c = 0, poi si risolve x² = t per ogni t ≥ 0 (se t &lt; 0, nessuna soluzione reale).</li>
<li><b>Teorema del resto e regola di Ruffini</b>: un polinomio P(x) è divisibile per (x − a) ⟺ P(a) = 0. Se i coefficienti sono interi, le radici razionali p/q hanno p che divide il termine noto e q che divide il coefficiente direttivo: si provano i divisori.</li>
</ol>
<p><b>Esempio biquadratica.</b> x⁴ − 5x² + 4 = 0. Con t = x²: t² − 5t + 4 = 0 → t = 1 ∨ t = 4. Quindi x² = 1 → x = ±1; x² = 4 → x = ±2. Quattro soluzioni: <b>−2, −1, 1, 2</b>. Per x⁴ + x² + 1 = 0 invece t = (−1 ± √(−3))/2 non è reale: nessuna soluzione.</p>
<p><b>Esempio Ruffini.</b> Dividiamo x³ − 2x² − 5x + 6 per (x − 1): si scrivono i coefficienti 1, −2, −5, 6 e si "abbassa" l'1; poi ad ogni passo si moltiplica per 1 e si somma: 1 → 1·1 + (−2) = −1 → (−1)·1 + (−5) = −6 → (−6)·1 + 6 = 0 (il resto è zero ✔️). Quoziente: x² − x − 6.</p>
<p>Le <b>disequazioni di grado superiore</b> si trattano allo stesso modo: si scompone, e poi si usa il metodo dei segni. Una biquadratica come x⁴ − 5x² + 4 &gt; 0 si scompone in (x² − 1)(x² − 4) = (x − 1)(x + 1)(x − 2)(x + 2) &gt; 0 → <b>x &lt; −2 ∨ −1 &lt; x &lt; 1 ∨ x &gt; 2</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la scatola senza coperchio",
      html: `<p>Da un foglio di cartone quadrato di lato 12 cm si ritagliano quattro quadratini di lato x agli angoli e si piegano i lati per ottenere una scatola senza coperchio. Il volume è V(x) = x(12 − 2x)² (con 0 &lt; x &lt; 6). Per quali x il volume è almeno 128 cm³?</p>
<p>Sviluppando: V = x(144 − 48x + 4x²) = 4x³ − 48x² + 144x. La condizione V ≥ 128 diventa 4x³ − 48x² + 144x − 128 ≥ 0, cioè x³ − 12x² + 36x − 32 ≥ 0. Si prova x = 2: 8 − 48 + 72 − 32 = 0 ✔️. Ruffini: quoziente x² − 10x + 16 = (x − 2)(x − 8). Quindi (x − 2)²(x − 8) ≥ 0. Il fattore (x − 2)² è ≥ 0, quindi serve x − 8 ≥ 0 oppure x = 2: ma con x &lt; 6 resta solo <b>x = 2</b>, dove V = 2·8² = 128 cm³. Significa che 128 è proprio il <b>massimo</b> volume possibile! (Il massimo si ha davvero per x = 2 cm.) Un'informazione notevole, ottenuta solo con la scomposizione.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Tartaglia, Cardano e la sfida del terzo grado",
      html: `<p>La formula risolutiva delle equazioni di terzo grado fu trovata nel Cinquecento in Italia. <b>Scipione del Ferro</b> (Bologna) la scoprì per un caso particolare, <b>Niccolò Tartaglia</b> la riscoprì nel 1535 in una sfida pubblica, e <b>Gerolamo Cardano</b> la pubblicò nel 1545 nell'<i>Ars Magna</i>, insieme al metodo per il quarto grado, trovato dal suo allievo <b>Ludovico Ferrari</b>. Fu l'inizio di una disputa sulla paternità. Nel trattare quelle formule comparvero per la prima volta radici di numeri negativi, da cui nacquero i numeri complessi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Tolleranze e valore assoluto",
      html: `<p>Nell'industria il valore assoluto serve per le <b>tolleranze</b>: se una vite deve misurare 8 mm con errore massimo 0,05 mm, la condizione è |d − 8| ≤ 0,05, cioè 7,95 ≤ d ≤ 8,05. Lo stesso modello descrive l'errore di una misura, la precisione di un sensore o la distanza massima accettabile da un bersaglio. Nell'analisi matematica che studierai in quinta, i <b>limiti</b> sono definiti proprio con disequazioni con valore assoluto.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le disequazioni",
      intro: "Se il metodo dei segni ti sembra una ricetta, ecco tre modi per vedere perché funziona.",
      tabs: [
        {
          label: "📈 Il grafico",
          html: `<p>Risolvere <b>f(x) &gt; 0</b> significa chiedere: "per quali x il <b>grafico</b> sta sopra l'asse x?". Risolvere <b>f(x) &gt; g(x)</b>: "dove il grafico di f sta sopra quello di g?". Disegna la parabola y = x² − 5x + 6 e la retta y = 0: le zone in cui la parabola è sopra l'asse sono i due rami esterni. Se non vuoi fare i conti, disegna a mano libera il grafico "qualitativo": basta conoscere le radici e se la parabola guarda in su o in giù.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="30" y1="160" x2="570" y2="160" stroke="#475569" stroke-width="2"/><path d="M 100 30 Q 300 330 500 30" fill="none" stroke="#7c3aed" stroke-width="4"/><rect x="30" y="150" width="190" height="20" fill="#22c55e" opacity="0.5"/><rect x="380" y="150" width="190" height="20" fill="#22c55e" opacity="0.5"/><text x="300" y="60" font-size="16" fill="#334155" text-anchor="middle">le parti verdi: dove y &gt; 0</text><text x="125" y="200" font-size="16" fill="#166534" font-weight="bold" text-anchor="middle">x &lt; x₁</text><text x="475" y="200" font-size="16" fill="#166534" font-weight="bold" text-anchor="middle">x &gt; x₂</text></svg>`
        },
        {
          label: "🌡️ Il termometro dei segni",
          html: `<p>Pensa a ogni fattore come a un <b>interruttore</b> che cambia stato (da − a +) in un punto preciso: la sua radice. Il prodotto cambia segno ogni volta che si attraversa una radice di <b>molteplicità dispari</b> e <b>non</b> cambia segno attraversando una radice doppia (il fattore (x − 2)² è sempre ≥ 0). Così basta mettere in fila le radici dalla più piccola alla più grande e alternare + e − partendo dall'estrema destra, dove il segno è quello del coefficiente di grado massimo.</p>`
        },
        {
          label: "🧮 Il valore assoluto come distanza",
          html: `<p>Leggi |x − a| come "<b>distanza tra x e a</b>". Allora |x − 3| &lt; 5 vuol dire "x dista meno di 5 da 3": un intervallo centrato in 3 di raggio 5, cioè (−2; 8). E |x − 1| + |x + 2| è la <b>somma delle distanze</b> di x da 1 e da −2. Con questa immagine molte soluzioni si "vedono" senza fare calcoli: la somma delle distanze da due punti non può mai essere minore della distanza tra i due punti, qui 3.</p>`,
          widget: "numberLine",
          options: { min: -5, max: 8, step: 1, marks: [3, -2, 8] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di equazioni e disequazioni",
      nodes: [
        { id: "segno", label: "Studio del segno", x: 50, y: 8, color: "#6366f1", html: "Dire dove un'espressione è positiva, negativa o nulla.", why: "Una disequazione chiede un segno; la continuità delle funzioni polinomiali fa sì che il segno cambi solo attraversando una radice." },
        { id: "par", label: "Parabola e Δ", x: 18, y: 32, color: "#a855f7", html: "Il segno di ax² + bx + c dipende da Δ e dalla concavità.", why: "Completando il quadrato, ax² + bx + c = a[(x + b/2a)² − Δ/4a²]: il segno dipende da Δ e dal segno di a." },
        { id: "frat", label: "Fratte e prodotti", x: 82, y: 32, color: "#f59e0b", html: "Tabella dei segni di numeratore e denominatore.", why: "Un quoziente ha lo stesso segno del prodotto; ma il denominatore non può annullarsi: i suoi zeri si escludono." },
        { id: "abs", label: "Valore assoluto", x: 18, y: 62, color: "#16a34a", html: "|A| &lt; k e |A| &gt; k diventano sistemi o unioni.", why: "È la distanza dallo zero: la definizione per casi (x ≥ 0 o x &lt; 0) spiega ogni regola." },
        { id: "irr", label: "Radici e irrazionali", x: 82, y: 62, color: "#ef4444", html: "Condizioni di esistenza + elevamento al quadrato con cautela.", why: "Una radice quadrata è per definizione ≥ 0; elevare al quadrato è equivalente solo se i due membri sono non negativi: da qui le condizioni." },
        { id: "grad", label: "Grado superiore", x: 50, y: 88, color: "#0ea5e9", html: "Scomposizione, Ruffini, biquadratiche.", why: "Il teorema fondamentale dell'algebra (Gauss, 1799) garantisce che un polinomio di grado n si scompone in n fattori di primo grado complessi; nei reali in fattori di grado ≤ 2." }
      ],
      edges: [
        ["segno", "par", "grado 2"],
        ["segno", "frat", "quozienti"],
        ["segno", "abs", "si spezza in casi"],
        ["segno", "irr", "con condizioni"],
        ["par", "grad", "si generalizza"],
        ["frat", "grad", "si scompone"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: valore assoluto e irrazionali",
      questions: [
        { type: "mc", q: "Le soluzioni di |x − 1| &gt; 2 sono…", options: ["−1 &lt; x &lt; 3", "x &lt; −1 ∨ x &gt; 3", "x &gt; 3"], answer: 1, explain: "|A| &gt; k → A &lt; −k ∨ A &gt; k: x − 1 &lt; −2 ∨ x − 1 &gt; 2." },
        { type: "num", q: "Risolvi √(2x + 3) = x: quante soluzioni accettabili ci sono?", answer: 1, explain: "Si trovano x = 3 e x = −1, ma −1 non verifica x ≥ 0. Resta solo x = 3." },
        { type: "tf", q: "Elevando al quadrato entrambi i membri di un'equazione irrazionale si ottiene sempre un'equazione equivalente.", answer: false, explain: "Può introdurre soluzioni estranee (ad esempio x = −1 sopra). Si deve verificare il segno o sostituire." }
      ]
    }
  ],
  glossary: [
    { t: "Disequazione", d: "Disuguaglianza tra due espressioni con un'incognita; le sue soluzioni formano un insieme di valori." },
    { t: "Discriminante (Δ)", d: "Il numero b² − 4ac: ne dipende il numero delle radici reali di un'equazione di secondo grado." },
    { t: "Valori interni / esterni", d: "Soluzioni comprese tra le radici (interni) o fuori dall'intervallo delle radici (esterni)." },
    { t: "Tabella dei segni", d: "Schema che riporta il segno di ciascun fattore e del loro prodotto o quoziente." },
    { t: "Valore assoluto", d: "|x| è la distanza di x da 0: x se x ≥ 0, −x se x &lt; 0." },
    { t: "Biquadratica", d: "Equazione del tipo ax⁴ + bx² + c = 0, che si riduce al secondo grado con t = x²." },
    { t: "Regola di Ruffini", d: "Metodo rapido per dividere un polinomio per (x − a)." },
    { t: "Teorema del resto", d: "Il resto della divisione di P(x) per (x − a) è P(a)." },
    { t: "Soluzione estranea", d: "Valore trovato risolvendo ma che non verifica l'equazione iniziale, per esempio dopo aver elevato al quadrato." },
    { t: "Condizione di esistenza", d: "Insieme dei valori per cui un'espressione ha significato (radicandi ≥ 0, denominatori ≠ 0)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Risolvi x² − 7x + 10 &lt; 0.", options: ["2 &lt; x &lt; 5", "x &lt; 2 ∨ x &gt; 5", "x &lt; 5"], answer: 0, explain: "Radici 2 e 5; verso \"&lt;\" con a &gt; 0: valori interni." },
      { type: "mc", q: "Risolvi x² + 4 &gt; 0.", options: ["Nessuna soluzione", "x &gt; 0", "Ogni numero reale"], answer: 2, explain: "x² ≥ 0, quindi x² + 4 ≥ 4 &gt; 0 per ogni x." },
      { type: "tf", q: "La disequazione (x − 2)² ≤ 0 ha come unica soluzione x = 2.", answer: true, explain: "Un quadrato è ≥ 0; è ≤ 0 solo se è 0, cioè x = 2." },
      { type: "mc", q: "Risolvi (x − 1)/(x + 2) &gt; 0.", options: ["x &lt; −2 ∨ x &gt; 1", "−2 &lt; x &lt; 1", "x &gt; 1"], answer: 0, explain: "Numeratore e denominatore devono avere lo stesso segno: zeri −2 e 1, valori esterni." },
      { type: "mc", q: "Risolvi |x − 3| &lt; 5.", options: ["x &lt; −2 ∨ x &gt; 8", "−2 &lt; x &lt; 8", "x &lt; 8"], answer: 1, explain: "−5 &lt; x − 3 &lt; 5 → −2 &lt; x &lt; 8." },
      { type: "num", q: "Quante soluzioni reali ha x⁴ − 5x² + 4 = 0?", answer: 4, explain: "t = x² vale 1 o 4, quindi x = ±1, ±2: quattro soluzioni." },
      { type: "mc", q: "Risolvi √(x + 2) &lt; x.", options: ["x &gt; 2", "x &gt; 0", "−2 ≤ x &lt; 2"], answer: 0, explain: "Condizioni: x ≥ −2, x &gt; 0, x + 2 &lt; x² (x &lt; −1 ∨ x &gt; 2): resta x &gt; 2." },
      { type: "num", q: "Qual è la più piccola radice positiva di x³ − 2x² − 5x + 6 = 0? (Prova i divisori di 6)", answer: 1, explain: "P(1) = 1 − 2 − 5 + 6 = 0. Le radici sono −2, 1, 3: la più piccola positiva è 1." },
      { type: "order", q: "Metti in ordine i passi per risolvere una disequazione fratta.", items: ["Portare tutto a un membro e ridurre a un'unica frazione ⋚ 0", "Scomporre numeratore e denominatore", "Studiare il segno di ogni fattore", "Applicare la regola dei segni e scegliere le zone richieste", "Escludere i valori che annullano il denominatore"], explain: "Si riduce, si scompone, si studiano i segni, si legge la soluzione e si escludono gli zeri del denominatore." },
      { type: "text", q: "Come si chiama il metodo per dividere un polinomio per (x − a) usando solo i coefficienti? (cognome del matematico)", answer: ["ruffini", "regola di ruffini", "paolo ruffini"], explain: "È la regola di Paolo Ruffini (1765–1822), matematico italiano." }
    ]
  }
});
