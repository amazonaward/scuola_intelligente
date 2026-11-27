TOPIC('it', {
  id: "l2-mat-piano-cartesiano-retta",
  title: "Piano cartesiano e retta",
  intro: "Come fa il navigatore a dirti quanti chilometri mancano, o la mappa a indicarti un punto con due numeri? Perché un videogioco sa dove si trova il tuo personaggio? Dietro c'è un'idea geniale del Seicento: <b>descrivere i punti con i numeri e le figure con le equazioni</b>. In questa lezione usiamo il <b>piano cartesiano</b> per calcolare distanze e punti medi, e scopriamo l'<b>equazione della retta</b>, i suoi elementi (coefficiente angolare e intercetta) e quando due rette sono <b>parallele</b> o <b>perpendicolari</b>.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Il piano cartesiano",
      html: `<p>Un <b>sistema di riferimento cartesiano ortogonale</b> è formato da due rette perpendicolari, gli <b>assi</b>: l'<b>asse x</b> (orizzontale, delle ascisse) e l'<b>asse y</b> (verticale, delle ordinate), che si incontrano nell'<b>origine</b> O(0, 0), con la stessa unità di misura su entrambi. Ogni punto P del piano è individuato da una <b>coppia ordinata</b> (x, y): l'<b>ascissa</b> x è la distanza con segno dall'asse y, l'<b>ordinata</b> y quella dall'asse x. Gli assi dividono il piano in quattro <b>quadranti</b>: I (x &gt; 0, y &gt; 0), II (x &lt; 0, y &gt; 0), III (x &lt; 0, y &lt; 0), IV (x &gt; 0, y &lt; 0).</p>
<p>Alcuni fatti utili: i punti dell'asse x hanno y = 0; quelli dell'asse y hanno x = 0. Il <b>simmetrico</b> di P(a, b) rispetto all'asse x è (a, −b), rispetto all'asse y è (−a, b), rispetto all'origine è (−a, −b).</p>
<p>Il passaggio essenziale è questo: <b>una figura geometrica diventa un insieme di punti le cui coordinate soddisfano un'equazione</b>. La geometria si traduce in algebra, e viceversa: è la <b>geometria analitica</b>.</p>`
    },
    {
      type: "svg",
      title: "Distanza e punto medio",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="250" x2="400" y2="250" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="20" x2="60" y2="280" stroke="#475569" stroke-width="2"/>
<line x1="110" y1="200" x2="310" y2="50" stroke="#ea580c" stroke-width="4"/>
<line x1="110" y1="200" x2="310" y2="200" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 5"/>
<line x1="310" y1="200" x2="310" y2="50" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 5"/>
<circle cx="110" cy="200" r="7" fill="#16a34a"/>
<circle cx="310" cy="50" r="7" fill="#16a34a"/>
<circle cx="210" cy="125" r="7" fill="#dc2626"/>
<text x="90" y="222" font-size="16" fill="#166534" font-weight="bold">A(1, 1)</text>
<text x="320" y="55" font-size="16" fill="#166534" font-weight="bold">B(5, 4)</text>
<text x="222" y="118" font-size="16" fill="#991b1b" font-weight="bold">M(3; 2,5)</text>
<text x="210" y="222" font-size="16" fill="#1d4ed8" text-anchor="middle">Δx = 4</text>
<text x="322" y="130" font-size="16" fill="#1d4ed8">Δy = 3</text>
<text x="150" y="130" font-size="16" fill="#9a3412" font-weight="bold" text-anchor="end">AB = 5</text>
<text x="420" y="90" font-size="16" fill="#334155">AB = √(Δx² + Δy²)</text>
<text x="420" y="120" font-size="16" fill="#334155">= √(16 + 9) = 5</text>
<text x="420" y="170" font-size="16" fill="#334155">M = ((x₁+x₂)/2 ; (y₁+y₂)/2)</text>
</svg>`,
      caption: "La distanza tra due punti è l'ipotenusa di un triangolo rettangolo costruito con le differenze delle coordinate (teorema di Pitagora)."
    },
    {
      type: "remember",
      title: "Distanza e punto medio",
      html: `<ul>
<li><b>Distanza</b> tra A(x₁, y₁) e B(x₂, y₂): <b>AB = √[(x₂ − x₁)² + (y₂ − y₁)²]</b>. Se i punti hanno la stessa y (segmento orizzontale) la distanza è |x₂ − x₁|; se hanno la stessa x, è |y₂ − y₁|.</li>
<li><b>Punto medio</b> di AB: <b>M = ( (x₁ + x₂)/2 ; (y₁ + y₂)/2 )</b>: la media delle ascisse e la media delle ordinate.</li>
</ul>
<p>Esempio: A(1, 2) e B(7, 10): AB = √(36 + 64) = √100 = <b>10</b>; M = (4, 6).</p>`
    },
    {
      type: "widget",
      title: "Pitagora in azione",
      widget: "pythagoras",
      options: {},
      caption: "Sposta i cursori su 3 e 4: l'ipotenusa è 5, come la distanza tra A(1,1) e B(5,4). La formula della distanza è il teorema di Pitagora applicato a Δx e Δy."
    },
    {
      type: "text",
      title: "Equazione della retta",
      html: `<p>Ogni retta del piano ha un'equazione di primo grado in x e y. La forma <b>implicita</b> è <b>ax + by + c = 0</b> (a e b non entrambi nulli). Se b ≠ 0 si ricava la forma <b>esplicita</b>:</p>
<p style="text-align:center"><b>y = m x + q</b></p>
<ul>
<li><b>m</b> è il <b>coefficiente angolare</b> (pendenza): di quanto sale (o scende) y quando x aumenta di 1.</li>
<li><b>q</b> è l'<b>intercetta</b>: l'ordinata del punto in cui la retta taglia l'asse y, cioè (0, q).</li>
</ul>
<p>Casi particolari:</p>
<ul>
<li>Retta <b>orizzontale</b> (parallela all'asse x): <b>y = k</b> (m = 0). L'asse x è y = 0.</li>
<li>Retta <b>verticale</b> (parallela all'asse y): <b>x = k</b>: <b>non ha</b> coefficiente angolare (non si scrive in forma esplicita). L'asse y è x = 0.</li>
<li>Retta per l'origine: <b>y = mx</b> (q = 0), che esprime una <b>proporzionalità diretta</b>.</li>
<li>Bisettrici dei quadranti: y = x (I e III) e y = −x (II e IV).</li>
</ul>
<p>Per disegnare una retta bastano <b>due punti</b>: di solito le intersezioni con gli assi (ponendo x = 0 e poi y = 0). Un punto appartiene alla retta se e solo se le sue coordinate <b>verificano l'equazione</b>: il punto (2, 5) sta su y = 3x − 1 perché 3·2 − 1 = 5.</p>`
    },
    {
      type: "text",
      title: "Calcolare la retta: per due punti, per un punto",
      html: `<p>Il <b>coefficiente angolare</b> della retta per A(x₁, y₁) e B(x₂, y₂), con x₁ ≠ x₂, è il rapporto tra la variazione di y e quella di x:</p>
<p style="text-align:center"><b>m = (y₂ − y₁)/(x₂ − x₁)</b></p>
<p>Se m &gt; 0 la retta <b>sale</b> (da sinistra a destra); se m &lt; 0 <b>scende</b>; se m = 0 è orizzontale; più |m| è grande, più la retta è ripida.</p>
<ul>
<li><b>Retta per un punto P(x₀, y₀) con coefficiente angolare m</b>: <b>y − y₀ = m(x − x₀)</b>.</li>
<li><b>Retta per due punti</b>: si calcola m e poi si usa la formula precedente (oppure <b>(y − y₁)/(y₂ − y₁) = (x − x₁)/(x₂ − x₁)</b>).</li>
</ul>
<p><b>Esempio</b>: retta per A(1, 2) e B(3, 8). m = (8 − 2)/(3 − 1) = 3. Retta per A: y − 2 = 3(x − 1) → <b>y = 3x − 1</b>. Verifica con B: 3·3 − 1 = 8 ✔️.</p>
<p><b>Intersezione di due rette</b>: si risolve il <b>sistema</b> formato dalle loro equazioni (lezione precedente!). Es. y = x + 1 e y = −2x + 7: x + 1 = −2x + 7 → x = 2, y = 3: si incontrano in (2, 3). Se non c'è soluzione le rette sono parallele; se ce ne sono infinite coincidono.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la tariffa del taxi",
      html: `<p>Un taxi applica uno scatto di 4 € e poi 1,20 € per ogni chilometro. Il costo y per x km è <b>y = 1,2x + 4</b>: una retta con <b>m = 1,2</b> (€ per km: la velocità con cui cresce il costo) e <b>q = 4</b> (lo scatto iniziale, il costo a distanza 0). Con 15 km: y = 18 + 4 = 22 €. Quanti km con 40 €? 1,2x = 36 → x = 30 km.</p>
<p>Un altro taxi ha scatto 2 € e 1,40 €/km: y = 1,4x + 2. Dove costano uguale? Intersezione: 1,2x + 4 = 1,4x + 2 → 2 = 0,2x → x = 10 km (costo 16 €). Sotto 10 km conviene il secondo, sopra il primo.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il drone e la stazione di ricarica",
      html: `<p>Su una mappa in metri un drone si trova in D(2, 3) e la stazione di ricarica in S(14, 8). Quanto deve volare in linea retta? E a metà strada, dove si trova?</p>
<ul>
<li>Δx = 14 − 2 = 12 e Δy = 8 − 3 = 5.</li>
<li>Distanza: √(12² + 5²) = √169 = <b>13 m</b> (una terna pitagorica: 5-12-13).</li>
<li>Punto medio: ((2 + 14)/2 ; (3 + 8)/2) = <b>(8; 5,5)</b>.</li>
<li>La traiettoria è sulla retta con m = 5/12: y − 3 = (5/12)(x − 2).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: distanza e retta",
      questions: [
        { type: "num", q: "Calcola la distanza tra O(0, 0) e P(6, 8).", answer: 10, explain: "√(36 + 64) = √100 = 10." },
        { type: "num", q: "Qual è il coefficiente angolare della retta per A(0, 1) e B(2, 7)?", answer: 3, explain: "m = (7 − 1)/(2 − 0) = 3." },
        { type: "mc", q: "Qual è l'equazione della retta verticale che passa per (4, 9)?", options: ["y = 9", "x = 4", "y = 4x"], answer: 1, explain: "Una retta verticale ha equazione x = costante: x = 4." }
      ]
    },
    {
      type: "text",
      title: "Rette parallele e perpendicolari",
      html: `<p>Date due rette non verticali r: y = mx + q e r′: y = m′x + q′:</p>
<ul>
<li><b>parallele</b> (r ∥ r′) se e solo se hanno lo <b>stesso coefficiente angolare</b>: <b>m = m′</b> (se anche q = q′ coincidono);</li>
<li><b>perpendicolari</b> (r ⊥ r′) se e solo se <b>m · m′ = −1</b>, cioè <b>m′ = −1/m</b> (coefficienti angolari "antireciproci").</li>
</ul>
<p>Se una retta è orizzontale (m = 0), le sue perpendicolari sono le verticali x = k.</p>
<p><b>Esempio 1.</b> Retta per P(0, 5) parallela a y = 2x + 1: stessa m = 2 → <b>y = 2x + 5</b>.</p>
<p><b>Esempio 2.</b> Retta per P(4, 1) perpendicolare a y = 2x + 1: m′ = −1/2, y − 1 = −½(x − 4) → <b>y = −x/2 + 3</b>.</p>
<p><b>Esempio 3: asse di un segmento</b>. L'asse di AB è la retta perpendicolare ad AB passante per il suo punto medio; i suoi punti sono tutti equidistanti da A e da B. Per A(1, 1) e B(5, 4): m<sub>AB</sub> = 3/4; M(3; 2,5); asse con m = −4/3: y − 2,5 = −(4/3)(x − 3) → <b>y = −(4/3)x + 6,5</b>.</p>
<p><b>Distanza punto–retta</b> (formula utile): la distanza di P(x₀, y₀) dalla retta ax + by + c = 0 è <b>d = |ax₀ + by₀ + c| / √(a² + b²)</b>. Es.: distanza di O dalla retta 3x + 4y − 10 = 0: |−10|/5 = <b>2</b>.</p>`
    },
    {
      type: "svg",
      title: "Parallele e perpendicolari",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="20" y1="150" x2="580" y2="150" stroke="#cbd5e1" stroke-width="1"/>
<line x1="300" y1="10" x2="300" y2="290" stroke="#cbd5e1" stroke-width="1"/>
<line x1="60" y1="260" x2="340" y2="40" stroke="#2563eb" stroke-width="4"/>
<line x1="120" y1="285" x2="400" y2="65" stroke="#2563eb" stroke-width="4" stroke-dasharray="10 6"/>
<line x1="240" y1="30" x2="470" y2="270" stroke="#ea580c" stroke-width="4" transform="rotate(0)"/>
<text x="30" y="30" font-size="16" fill="#1d4ed8" font-weight="bold">r ∥ r′: stessa pendenza (m = m′)</text>
<text x="330" y="288" font-size="16" fill="#9a3412" font-weight="bold">s ⊥ r: m · m′ = −1</text>
<text x="400" y="45" font-size="14" fill="#334155">(linea piena e tratteggiata:</text>
<text x="400" y="62" font-size="14" fill="#334155">parallele)</text>
</svg>`,
      caption: "Due rette con la stessa pendenza sono parallele; se il prodotto delle pendenze è −1 si incontrano ad angolo retto."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Cartesio e la mosca",
      html: `<p>Il piano cartesiano prende il nome da <b>René Descartes</b>, latinizzato in <i>Cartesius</i>, che nel 1637 pubblicò <i>La Géométrie</i>, appendice al <i>Discorso sul metodo</i>. Nello stesso periodo il francese <b>Pierre de Fermat</b> sviluppava idee simili. Un aneddoto, di cui non si hanno prove certe, racconta che Cartesio ebbe l'idea guardando una mosca sul soffitto della camera: per descrivere dove si trovava bastava dire a che distanza era da due pareti. Vero o no, è proprio così che funzionano le coordinate!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Coordinate ovunque",
      html: `<p>Le <b>coordinate geografiche</b> (latitudine e longitudine) sono un sistema di riferimento sulla sfera; il <b>GPS</b> calcola la tua posizione con la distanza da vari satelliti, usando la stessa idea di distanza tra punti in uno spazio con coordinate (in 3D la formula ha un termine in più, Δz²). Anche ogni pixel dello schermo ha coordinate (x, y), e un videogioco calcola distanze e collisioni con le formule di questa lezione.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la retta",
      intro: "Il coefficiente angolare e la perpendicolarità non sono formule da imparare a memoria: ecco tre modi per vederli.",
      tabs: [
        {
          label: "⛰️ La pendenza di una strada",
          html: `<p>Il <b>coefficiente angolare</b> è la <b>pendenza</b>, come i cartelli stradali: "10%" significa che in 100 m in orizzontale si sale di 10 m, cioè m = 0,10. Una scala a chiocciola ha pendenza diversa da quella di una rampa per carrozzine (circa 8%, cioè m ≈ 0,08). Salita = m positivo, discesa = m negativo, strada piana = m = 0, parete verticale = nessun m (non si può dividere per Δx = 0).</p>`
        },
        {
          label: "🔄 Rotazione di 90°",
          html: `<p>Una retta con pendenza m ha direzione (1, m): per ogni passo di 1 verso destra si sale di m. Ruotando questa direzione di <b>90° in senso antiorario</b> il vettore (a, b) diventa (−b, a): (1, m) → (−m, 1), cioè la direzione di una retta con pendenza 1/(−m) = <b>−1/m</b>. Ecco spiegato perché per le perpendicolari m · m′ = −1: è l'effetto della rotazione di un angolo retto.</p>`,
          widget: "numberLine",
          options: { min: -4, max: 4, step: 1, marks: [2, -2] }
        },
        {
          label: "📋 Tabella di punti",
          html: `<p>Per disegnare y = 2x − 1 costruisci una tabella: x = −1, 0, 1, 2 → y = −3, −1, 1, 3. Noti che ogni volta che x cresce di 1, y cresce di <b>2</b>: la differenza costante è proprio m. Per questo la retta è il grafico delle situazioni a crescita <b>costante</b> (compensi a ore, bollette con costo fisso e variabile, distanza a velocità costante).</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="20" y1="150" x2="580" y2="150" stroke="#475569" stroke-width="2"/><line x1="300" y1="10" x2="300" y2="290" stroke="#475569" stroke-width="2"/><line x1="140" y1="280" x2="440" y2="20" stroke="#2563eb" stroke-width="4"/><circle cx="300" cy="200" r="7" fill="#16a34a"/><text x="312" y="222" font-size="16" fill="#166534" font-weight="bold">(0, −1): q</text><text x="340" y="120" font-size="16" fill="#1d4ed8" font-weight="bold">y = 2x − 1  (m = 2)</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della geometria analitica della retta",
      nodes: [
        { id: "piano", label: "Piano cartesiano", x: 50, y: 6, color: "#6366f1", html: "Due assi ortogonali; ogni punto è una coppia (x, y).", why: "Descartes e Fermat (Seicento) uniscono geometria e algebra: le figure si studiano con le equazioni." },
        { id: "dist", label: "Distanza", x: 18, y: 28, color: "#16a34a", html: "AB = √(Δx² + Δy²).", why: "È il teorema di Pitagora sul triangolo rettangolo con cateti Δx e Δy, quindi segue dalla geometria euclidea." },
        { id: "med", label: "Punto medio", x: 82, y: 28, color: "#f59e0b", html: "Medie delle coordinate.", why: "Il punto medio sta a metà in orizzontale e in verticale: ogni coordinata è la media delle due." },
        { id: "retta", label: "Equazione della retta", x: 50, y: 50, color: "#a855f7", html: "ax + by + c = 0, oppure y = mx + q.", why: "I punti allineati hanno una variazione costante di y per ogni variazione di x: da qui un'equazione di primo grado." },
        { id: "m", label: "Coefficiente angolare", x: 18, y: 75, color: "#ef4444", html: "m = Δy/Δx: la pendenza.", why: "Triangoli rettangoli simili costruiti sulla retta hanno lo stesso rapporto cateto verticale/orizzontale: per questo m è costante (Talete e similitudine)." },
        { id: "par", label: "Parallele e perpendicolari", x: 82, y: 75, color: "#0ea5e9", html: "m = m′ parallele; m·m′ = −1 perpendicolari.", why: "Parallele = stessa inclinazione. Perpendicolari = direzione ruotata di 90°, che manda m in −1/m." },
        { id: "sist", label: "Sistemi e intersezioni", x: 50, y: 92, color: "#14b8a6", html: "L'intersezione tra due rette si trova risolvendo un sistema lineare.", why: "Un punto sta su entrambe le rette solo se le sue coordinate soddisfano entrambe le equazioni." }
      ],
      edges: [
        ["piano", "dist", "misura con"],
        ["piano", "med", "calcola"],
        ["piano", "retta", "contiene"],
        ["retta", "m", "ha"],
        ["m", "par", "confronta"],
        ["retta", "sist", "si incontrano con"],
        ["par", "sist", "caso senza soluzione"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: parallele e perpendicolari",
      questions: [
        { type: "mc", q: "La retta perpendicolare a y = 4x − 3 ha coefficiente angolare…", options: ["4", "−4", "−1/4"], answer: 2, explain: "m·m′ = −1 → m′ = −1/4." },
        { type: "mc", q: "La retta per (0, 1) parallela a y = 3x + 5 è…", options: ["y = 3x + 1", "y = −3x + 1", "y = x/3 + 1"], answer: 0, explain: "Stesso m = 3 e passaggio per (0, 1): q = 1." },
        { type: "tf", q: "Le rette y = 2x e y = −x/2 sono perpendicolari.", answer: true, explain: "2 · (−1/2) = −1." }
      ]
    }
  ],
  glossary: [
    { t: "Ascissa", d: "La coordinata x di un punto: distanza con segno dall'asse y." },
    { t: "Ordinata", d: "La coordinata y di un punto: distanza con segno dall'asse x." },
    { t: "Quadrante", d: "Ciascuna delle quattro regioni in cui gli assi dividono il piano." },
    { t: "Punto medio", d: "Il punto di un segmento equidistante dagli estremi: coordinate pari alle medie." },
    { t: "Coefficiente angolare", d: "Numero m della retta y = mx + q: indica la pendenza." },
    { t: "Intercetta", d: "Il termine q di y = mx + q: ordinata del punto in cui la retta taglia l'asse y." },
    { t: "Rette parallele", d: "Rette non verticali con lo stesso coefficiente angolare." },
    { t: "Rette perpendicolari", d: "Rette il cui prodotto dei coefficienti angolari è −1." },
    { t: "Asse di un segmento", d: "Retta perpendicolare al segmento nel suo punto medio: luogo dei punti equidistanti dagli estremi." },
    { t: "Forma implicita", d: "L'equazione della retta scritta come ax + by + c = 0." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Calcola la distanza tra A(−1, 2) e B(2, 6).", answer: 5, explain: "√(3² + 4²) = 5." },
      { type: "mc", q: "Il punto medio di A(2, −4) e B(8, 6) è…", options: ["(5, 1)", "(10, 2)", "(3, 5)"], answer: 0, explain: "((2 + 8)/2 ; (−4 + 6)/2) = (5, 1)." },
      { type: "num", q: "Coefficiente angolare della retta per A(1, 5) e B(4, −1).", answer: -2, explain: "m = (−1 − 5)/(4 − 1) = −2." },
      { type: "mc", q: "La retta per (2, 3) con m = 2 è…", options: ["y = 2x − 1", "y = 2x + 3", "y = −2x + 7"], answer: 0, explain: "y − 3 = 2(x − 2) → y = 2x − 1." },
      { type: "mc", q: "Quale retta è parallela a 2x + y − 3 = 0?", options: ["y = −2x + 5", "y = 2x + 5", "y = x/2 + 1"], answer: 0, explain: "2x + y − 3 = 0 → y = −2x + 3: m = −2, come y = −2x + 5." },
      { type: "mc", q: "Quale retta è perpendicolare a y = 3x + 1?", options: ["y = 3x − 5", "y = −x/3 + 2", "y = −3x"], answer: 1, explain: "Serve m′ = −1/3." },
      { type: "num", q: "Dove si incontrano y = x + 1 e y = −2x + 7? Dai l'ascissa.", answer: 2, explain: "x + 1 = −2x + 7 → x = 2 (il punto è (2, 3))." },
      { type: "tf", q: "La retta x = 5 ha coefficiente angolare 0.", answer: false, explain: "x = 5 è verticale: non ha coefficiente angolare. Quella con m = 0 è orizzontale, y = k." },
      { type: "order", q: "Metti in ordine i passi per scrivere la retta per due punti.", items: ["Calcolare m = (y₂ − y₁)/(x₂ − x₁)", "Scegliere uno dei due punti", "Scrivere y − y₁ = m(x − x₁)", "Ricavare y e semplificare", "Verificare con l'altro punto"], explain: "Prima la pendenza, poi la formula per un punto e la verifica." },
      { type: "text", q: "Come si chiama il filosofo e matematico francese (nome latinizzato Cartesius) a cui si deve il piano cartesiano? (cognome)", answer: ["cartesio", "descartes", "renato cartesio", "rene descartes", "cartesius"], explain: "René Descartes (Cartesio), La Géométrie, 1637." }
    ]
  }
});
