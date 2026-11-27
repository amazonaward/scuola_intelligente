TOPIC('it', {
  id: "l3-mat-parabola",
  title: "La parabola",
  intro: "L'arco di un getto d'acqua, il canestro di un tiro da tre, i cavi di un ponte sospeso, l'antenna satellitare sul tetto: tutti disegnano una <b>parabola</b>. Già conosci y = ax² + bx + c come grafico di una funzione; ora la guardiamo con gli occhi della geometria analitica, come <b>luogo di punti</b> equidistanti da un punto (il <b>fuoco</b>) e da una retta (la <b>direttrice</b>). Impariamo a trovare vertice, asse, fuoco e direttrice, a scrivere l'equazione dai dati, a studiare le <b>intersezioni con le rette</b> e le <b>tangenti</b>.",
  minutes: 65,
  sections: [
    {
      type: "text",
      title: "La parabola come luogo geometrico",
      html: `<p>Una <b>parabola</b> è il luogo dei punti del piano <b>equidistanti</b> da un punto fisso F, il <b>fuoco</b>, e da una retta fissa d, la <b>direttrice</b> (con F non appartenente a d). La retta passante per il fuoco e perpendicolare alla direttrice è l'<b>asse</b> di simmetria; il punto dell'asse a metà tra F e la direttrice è il <b>vertice</b> V (il punto della parabola più vicino alla direttrice).</p>
<p>Traduciamo in coordinate. Prendiamo il fuoco F(0, p) e la direttrice y = −p (con p &gt; 0). Un punto P(x, y) appartiene alla parabola se PF = distanza di P dalla direttrice: √(x² + (y − p)²) = |y + p|. Elevando al quadrato: x² + y² − 2py + p² = y² + 2py + p² → x² = 4py, cioè</p>
<p style="text-align:center"><b>y = x²/(4p)</b></p>
<p>Quindi y = ax² ha fuoco F(0, 1/(4a)) e direttrice y = −1/(4a): <b>il coefficiente a determina quanto "stretta" è la parabola</b>. Una parabola con a grande è più stretta (il fuoco è vicino al vertice), con a piccolo è più larga.</p>`
    },
    {
      type: "svg",
      title: "Fuoco, direttrice e vertice",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="230" x2="570" y2="230" stroke="#cbd5e1" stroke-width="1"/>
<line x1="300" y1="10" x2="300" y2="290" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="60" y1="280" x2="540" y2="280" stroke="#ea580c" stroke-width="3"/>
<polyline points="100,30 112,54 125,77 138,98 150,118 162,135 175,152 188,167 200,180 212,192 225,202 238,210 250,218 262,223 275,227 288,229 300,230 312,229 325,227 338,223 350,218 362,210 375,202 388,192 400,180 412,167 425,152 438,135 450,118 462,98 475,77 488,54 500,30" fill="none" stroke="#7c3aed" stroke-width="4"/>
<line x1="300" y1="180" x2="400" y2="180" stroke="#16a34a" stroke-width="3"/>
<line x1="400" y1="180" x2="400" y2="280" stroke="#16a34a" stroke-width="3"/>
<circle cx="300" cy="180" r="7" fill="#dc2626"/>
<circle cx="300" cy="230" r="6" fill="#1d4ed8"/>
<circle cx="400" cy="180" r="6" fill="#16a34a"/>
<text x="260" y="176" font-size="16" fill="#991b1b" font-weight="bold" text-anchor="end">F(0, 1)</text>
<text x="260" y="248" font-size="16" fill="#1d4ed8" font-weight="bold" text-anchor="end">V(0, 0)</text>
<text x="412" y="170" font-size="16" fill="#166534" font-weight="bold">P</text>
<text x="350" y="172" font-size="14" fill="#166534" text-anchor="middle">PF = 2</text>
<text x="412" y="235" font-size="14" fill="#166534">PH = 2</text>
<text x="70" y="270" font-size="16" fill="#9a3412" font-weight="bold">direttrice y = −1</text>
<text x="330" y="20" font-size="16" fill="#334155">asse: x = 0     parabola y = x²/4</text>
</svg>`,
      caption: "Per ogni punto P della parabola y = x²/4, la distanza dal fuoco F è uguale alla distanza dalla direttrice (PF = PH)."
    },
    {
      type: "text",
      title: "L'equazione y = ax² + bx + c: tutti gli elementi",
      html: `<p>Una parabola con <b>asse verticale</b> (parallelo all'asse y) ha equazione <b>y = ax² + bx + c</b>, con a ≠ 0. Il discriminante è Δ = b² − 4ac. Ecco gli elementi:</p>
<ul>
<li><b>Concavità</b>: verso l'alto se a &gt; 0, verso il basso se a &lt; 0.</li>
<li><b>Vertice</b>: <b>V(−b/(2a) ; −Δ/(4a))</b>.</li>
<li><b>Asse di simmetria</b>: <b>x = −b/(2a)</b> (se ci sono due radici, è la retta a metà tra loro).</li>
<li><b>Fuoco</b>: <b>F(−b/(2a) ; (1 − Δ)/(4a))</b>.</li>
<li><b>Direttrice</b>: <b>y = −(1 + Δ)/(4a)</b>.</li>
<li><b>Intersezione con l'asse y</b>: (0, c). <b>Intersezioni con l'asse x</b>: le radici di ax² + bx + c = 0 (se Δ ≥ 0).</li>
</ul>
<p>Per ricordare le formule: il vertice si trova <b>completando il quadrato</b>: y = a(x + b/2a)² − Δ/4a. Fuoco e direttrice sono simmetrici rispetto al vertice a distanza <b>1/(4|a|)</b>: dal vertice, il fuoco sta a 1/(4a) "dentro" la concavità.</p>
<p><b>Esempio completo.</b> y = x² − 4x + 3 (a = 1, b = −4, c = 3, Δ = 16 − 12 = 4).</p>
<ul>
<li>Asse: x = 2. Vertice: V(2, −1).</li>
<li>Fuoco: F(2 ; (1 − 4)/4) = <b>(2 ; −3/4)</b>. Direttrice: y = −(1 + 4)/4 = <b>−5/4</b>.</li>
<li>Controllo: V è a 1/4 sia da F (−1 → −0,75) sia dalla direttrice (−1 → −1,25) ✔️.</li>
<li>Intersezioni: con l'asse y in (0, 3); con l'asse x: x² − 4x + 3 = 0 → x = 1 e x = 3 → (1, 0) e (3, 0).</li>
</ul>
<p><b>Parabola con asse orizzontale</b>: x = ay² + by + c. Si scambiano i ruoli di x e y: vertice V(−Δ/(4a) ; −b/(2a)), asse y = −b/(2a), fuoco F((1 − Δ)/(4a) ; −b/(2a)), direttrice x = −(1 + Δ)/(4a). Non è il grafico di una funzione y = f(x), ma lo è di x = g(y).</p>`
    },
    {
      type: "remember",
      title: "Come disegnare una parabola in cinque mosse",
      html: `<ol>
<li>Concavità dal segno di a.</li>
<li>Vertice V(−b/2a ; −Δ/4a).</li>
<li>Intersezione con l'asse y: (0, c) e il suo simmetrico rispetto all'asse.</li>
<li>Intersezioni con l'asse x (se Δ ≥ 0).</li>
<li>Qualche punto in più (tabella) e disegno a mano libera, <b>simmetrico</b> rispetto all'asse.</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: elementi della parabola",
      questions: [
        { type: "mc", q: "Il vertice di y = x² − 6x + 5 è…", options: ["(3, −4)", "(−3, 4)", "(6, 5)"], answer: 0, explain: "x = −b/2a = 3; y = 9 − 18 + 5 = −4." },
        { type: "num", q: "Qual è l'ordinata del fuoco della parabola y = x²? (risposta in decimale)", answer: 0.25, tol: 0.001, explain: "Con a = 1: F(0, 1/(4a)) = (0; 0,25)." },
        { type: "tf", q: "La parabola y = −2x² + 3 ha la concavità verso l'alto.", answer: false, explain: "a = −2 &lt; 0: concavità verso il basso." }
      ]
    },
    {
      type: "text",
      title: "Come scrivere l'equazione di una parabola",
      html: `<p>La parabola y = ax² + bx + c ha <b>3 parametri</b> (a, b, c): servono perciò <b>3 condizioni</b> indipendenti per determinarla. Esempi tipici:</p>
<ul>
<li><b>Passaggio per tre punti</b>: si sostituiscono le coordinate in y = ax² + bx + c e si risolve il sistema 3×3. Es.: A(0, 3), B(1, 0), C(3, 0): da A c = 3; da B a + b + 3 = 0; da C 9a + 3b + 3 = 0 → 3a + b + 1 = 0. Sottraendo: 2a − 2 = 0 → a = 1, b = −4: <b>y = x² − 4x + 3</b>.</li>
<li><b>Vertice e un punto</b>: si usa la forma <b>y = a(x − x_V)² + y_V</b> e si ricava a. Es.: V(1, 2) e passaggio per (3, 10): 10 = a·4 + 2 → a = 2: y = 2(x − 1)² + 2 = 2x² − 4x + 4.</li>
<li><b>Intersezioni con l'asse x e un punto</b>: la forma <b>y = a(x − x₁)(x − x₂)</b>. Es.: radici 1 e 5, passaggio per (0, 10): 10 = a·5 → a = 2: y = 2(x − 1)(x − 5) = 2x² − 12x + 10.</li>
<li><b>Fuoco e direttrice</b>: si impone PF = distanza dalla direttrice. Es.: F(0, 1), d: y = −1 → x² = 4y (già visto).</li>
<li><b>Vertice e fuoco</b> (o direttrice): si ricava a = 1/(4·distanza con segno).</li>
</ul>
<p><b>Parabola per due punti con asse dato</b> o altre condizioni (tangente a una retta, passaggio per un punto con una certa pendenza): si ricorre ai fasci di parabole, ma il principio è sempre: ogni parametro libero richiede una condizione.</p>`
    },
    {
      type: "text",
      title: "Posizione di una retta rispetto a una parabola",
      html: `<p>Per sapere come una retta r e la parabola γ si incontrano, si mette a <b>sistema</b> le loro equazioni: { y = ax² + bx + c ; y = mx + q }. Sostituendo: ax² + (b − m)x + (c − q) = 0, un'equazione di secondo grado con discriminante Δ′:</p>
<ul>
<li><b>Δ′ &gt; 0</b>: la retta è <b>secante</b> (due punti di intersezione);</li>
<li><b>Δ′ = 0</b>: la retta è <b>tangente</b> (un solo punto, con molteplicità doppia);</li>
<li><b>Δ′ &lt; 0</b>: la retta è <b>esterna</b> (nessun punto).</li>
</ul>
<p>Attenzione: le rette <b>parallele all'asse</b> della parabola (verticali, per l'asse y) incontrano la parabola in un solo punto <b>senza essere tangenti</b>: il sistema si riduce a un'equazione di primo grado. La condizione Δ′ = 0 vale solo per le rette non parallele all'asse.</p>
<p><b>Esempio.</b> Parabola y = x² − 4x + 3 e retta y = x − 3. x² − 4x + 3 = x − 3 → x² − 5x + 6 = 0 → Δ′ = 1 &gt; 0, x = 2 e x = 3: punti (2, −1) e (3, 0). Retta secante.</p>
<p><b>Esempio (tangente).</b> Retta y = −4x + 3: x² − 4x + 3 = −4x + 3 → x² = 0 → Δ′ = 0, x = 0, punto (0, 3): la retta y = −4x + 3 è <b>tangente</b> alla parabola in (0, 3).</p>`
    },
    {
      type: "text",
      title: "Rette tangenti alla parabola",
      html: `<p>La <b>tangente</b> a una parabola in un suo punto P è la retta che ha con la parabola <b>solo il punto P in comune</b> (con molteplicità doppia) e che sta tutta da una parte rispetto alla curva. Tre problemi tipici:</p>
<p><b>1. Tangente in un punto P(x₀, y₀) della parabola.</b> Si usa il fascio per P: y − y₀ = m(x − x₀), si mette a sistema con la parabola e si impone Δ′ = 0 (che dà m). Per y = x² − 4x + 3 e P(0, 3): y − 3 = mx; x² − 4x + 3 = mx + 3 → x² − (4 + m)x = 0 → Δ′ = (4 + m)² = 0 → m = −4: <b>y = −4x + 3</b>.</p>
<p><b>Formula pronta</b> (da conoscere): la tangente alla parabola y = ax² + bx + c nel suo punto di ascissa x₀ ha coefficiente angolare <b>m = 2ax₀ + b</b>. (Qui con a = 1, b = −4, x₀ = 0: m = −4 ✔️. Questa formula si spiega con la <b>derivata</b>, che studierai in quarta.)</p>
<p><b>2. Tangenti da un punto esterno P(x₀, y₀).</b> Fascio per P e Δ′ = 0 → equazione in m: ci sono <b>due</b> tangenti se P è esterno alla parabola (cioè "fuori" dalla concavità), una se P appartiene alla parabola, nessuna se è interno. Esempio: da P(2, −5) alla parabola y = x² − 4x + 3: la retta è y = m(x − 2) − 5. x² − 4x + 3 = mx − 2m − 5 → x² − (4 + m)x + (8 + 2m) = 0 → Δ′ = (4 + m)² − 4(8 + 2m) = m² − 16 = 0 → m = ±4. Le tangenti: <b>y = 4x − 13</b> e <b>y = −4x + 3</b>. I punti di tangenza: per m = −4, x = 0 → (0, 3); per m = 4, x² − 8x + 16 = 0 → x = 4 → (4, 3). Verifica: sono simmetrici rispetto all'asse x = 2 ✔️.</p>
<p><b>3. Tangente con una pendenza data m.</b> Si usa il fascio improprio y = mx + k e si impone Δ′ = 0 per ricavare k. Per y = x² − 4x + 3 e m = 2: x² − 4x + 3 = 2x + k → x² − 6x + (3 − k) = 0 → Δ′ = 36 − 4(3 − k) = 0 → 24 + 4k = 0 → k = −6: <b>y = 2x − 6</b>, tangente in x = 3 (infatti 2·3 − 4 = 2 ✔️).</p>`
    },
    {
      type: "svg",
      title: "Le due tangenti da un punto esterno",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="120" x2="570" y2="120" stroke="#cbd5e1" stroke-width="1"/>
<line x1="300" y1="10" x2="300" y2="290" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
<path d="M 130 20 Q 300 330 470 20" fill="none" stroke="#7c3aed" stroke-width="4"/>
<line x1="140" y1="80" x2="300" y2="280" stroke="#2563eb" stroke-width="3"/>
<line x1="460" y1="80" x2="300" y2="280" stroke="#2563eb" stroke-width="3"/>
<circle cx="300" cy="280" r="7" fill="#dc2626"/>
<circle cx="188" cy="140" r="6" fill="#16a34a"/>
<circle cx="412" cy="140" r="6" fill="#16a34a"/>
<text x="318" y="285" font-size="16" fill="#991b1b" font-weight="bold">P (esterno)</text>
<text x="40" y="170" font-size="16" fill="#166534" font-weight="bold">punto di tangenza</text>
<text x="420" y="170" font-size="16" fill="#166534" font-weight="bold">punto di tangenza</text>
<text x="300" y="40" font-size="16" fill="#334155" text-anchor="middle">Da un punto esterno partono due tangenti</text>
</svg>`,
      caption: "Da un punto esterno alla parabola (cioè dal lato opposto alla concavità) si possono tracciare due tangenti; una sola se il punto è sulla parabola; nessuna se è interno."
    },
    {
      type: "example",
      title: "Esempio pratico: il tiro a canestro",
      html: `<p>Un giocatore lancia la palla da un'altezza di 2 m; la traiettoria, in metri, è y = −0,1x² + 0,9x + 2 (x è la distanza orizzontale dal punto di tiro). Il canestro è a 3,05 m di altezza. A che distanza la palla raggiunge quell'altezza?</p>
<ul>
<li>−0,1x² + 0,9x + 2 = 3,05 → −0,1x² + 0,9x − 1,05 = 0 → x² − 9x + 10,5 = 0 → x = (9 ± √(81 − 42))/2 = (9 ± 6,245)/2 ≈ 1,38 oppure 7,62. La palla passa a 3,05 m di altezza <b>due volte</b>: prima in salita (a 1,38 m) e poi in discesa (a 7,62 m): il canestro dev'essere a circa 7,6 m per un tiro "a scendere".</li>
<li>Il punto più alto è il <b>vertice</b>: x = 0,9/0,2 = 4,5 m; y = −0,1·20,25 + 4,05 + 2 = 4,025 m (circa 4 m).</li>
</ul>
<p>Con la fisica di quarta e quinta scoprirai che la traiettoria di un proiettile (senza resistenza dell'aria) è una parabola: lo dimostrò Galileo nei <i>Discorsi e dimostrazioni matematiche intorno a due nuove scienze</i> (1638).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la parabola dei cavi di un ponte",
      html: `<p>I cavi principali di un ponte sospeso, con carico uniformemente distribuito sull'impalcato, assumono forma parabolica. Supponiamo che le due torri siano alte 40 m e distanti 200 m, e che il punto più basso del cavo sia a 10 m dal suolo, a metà campata. Mettendo l'origine nel punto più basso, il cavo ha equazione y = ax²; in x = 100 (metà campata) la quota rispetto al punto più basso è 30 m: 30 = a · 10000 → a = 0,003, y = 0,003x². Il <b>fuoco</b> ha ordinata 1/(4a) ≈ 83,3 m sopra il vertice, quindi molto più in alto delle torri. A 50 m dal centro il cavo è a 0,003·2500 = 7,5 m sopra il punto più basso, cioè a 17,5 m dal suolo.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il nome e Apollonio",
      html: `<p>Il nome <b>parabola</b> fu dato da <b>Apollonio di Perga</b> (circa 262 – 190 a.C.) nel suo trattato sulle <i>Coniche</i>: dal greco <i>parabolé</i>, "confronto", "applicazione". Apollonio definì parabola, ellisse e iperbole come sezioni di un cono con un piano: la parabola si ottiene con un piano <b>parallelo a una generatrice</b> del cono. Il fatto che la stessa curva sia anche il luogo dei punti equidistanti da fuoco e direttrice è una proprietà notevole che si dimostra con le sfere di Dandelin (inizio Ottocento).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La proprietà del fuoco",
      html: `<p>Un raggio di luce (o un'onda radio) <b>parallelo all'asse</b> che colpisce una superficie a forma di parabola si riflette passando per il <b>fuoco</b> (e viceversa). È il motivo per cui le <b>antenne paraboliche</b> raccolgono il segnale nel ricevitore posto nel fuoco, e i <b>fari delle auto</b> e le <b>torce</b> hanno uno specchio parabolico con la lampadina nel fuoco: i raggi escono tutti paralleli, a fascio. Anche i telescopi riflettori e i forni solari sfruttano la stessa proprietà.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la parabola",
      intro: "Tre modi diversi di guardare la stessa curva, per vederla come qualcosa di più di una formula.",
      tabs: [
        {
          label: "🧵 Costruirla con filo e squadra",
          html: `<p>Puoi disegnare una parabola con una <b>squadra</b> e un <b>filo</b>: fissa un capo del filo (lungo quanto il lato verticale della squadra) nel fuoco F e l'altro all'estremo della squadra; fai scorrere la squadra lungo la direttrice tenendo il filo teso contro il lato verticale con la matita. La matita traccia la parabola, perché per ogni suo punto la distanza dal fuoco (tratto di filo) è uguale a quella dalla direttrice (tratto di squadra): è la definizione geometrica fatta con le mani.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="60" y1="270" x2="540" y2="270" stroke="#ea580c" stroke-width="4"/><line x1="360" y1="270" x2="360" y2="60" stroke="#2563eb" stroke-width="5"/><circle cx="300" cy="180" r="7" fill="#dc2626"/><line x1="300" y1="180" x2="360" y2="110" stroke="#16a34a" stroke-width="3"/><circle cx="360" cy="110" r="6" fill="#111827"/><text x="285" y="175" font-size="16" fill="#991b1b" font-weight="bold" text-anchor="end">F</text><text x="372" y="115" font-size="16" fill="#166534" font-weight="bold">P</text><text x="372" y="205" font-size="16" fill="#1d4ed8" font-weight="bold">squadra</text><text x="70" y="255" font-size="16" fill="#9a3412" font-weight="bold">direttrice</text><text x="40" y="60" font-size="16" fill="#334155">filo: F → P → squadra</text></svg>`
        },
        {
          label: "✂️ Il cono tagliato",
          html: `<p>Prendi un cono di luce (una torcia che illumina un muro): il bordo della zona illuminata è un cerchio se il muro è perpendicolare all'asse, un'<b>ellisse</b> se lo inclini un po', una <b>parabola</b> quando il muro è <b>parallelo a una generatrice</b> (un raggio sul bordo del cono), un ramo di <b>iperbole</b> se lo inclini ancora. Le coniche sono dunque la stessa famiglia, al variare dell'inclinazione. Nella prossima lezione di analitica vedrai ellisse e iperbole.</p>`
        },
        {
          label: "📋 Ricostruire punto per punto",
          html: `<p>Per y = x²: x = 0, 1, 2, 3 → y = 0, 1, 4, 9. Le <b>differenze</b> successive sono 1, 3, 5 (dispari!), e le seconde differenze sono costanti (2): è la firma di una funzione di secondo grado. Così si riconosce una parabola in una tabella di dati: se la crescita non è costante ma <b>le differenze delle differenze lo sono</b>, il fenomeno è quadratico (caduta libera: s = ½gt², con g ≈ 9,8 m/s²).</p>`,
          widget: "flashcards",
          options: { cards: [{ front: "Vertice di y = ax² + bx + c", back: "(−b/2a ; −Δ/4a)" }, { front: "Asse di simmetria", back: "x = −b/2a" }, { front: "Fuoco", back: "(−b/2a ; (1 − Δ)/4a)" }, { front: "Direttrice", back: "y = −(1 + Δ)/4a" }, { front: "Tangente: condizione", back: "Δ′ = 0 nel sistema retta–parabola" }] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della parabola",
      nodes: [
        { id: "luogo", label: "Luogo geometrico", x: 50, y: 6, color: "#6366f1", html: "Punti equidistanti da fuoco e direttrice.", why: "È la definizione di Apollonio rivista con le coordinate: PF = d(P, direttrice) dà x² = 4py." },
        { id: "eq", label: "y = ax² + bx + c", x: 18, y: 30, color: "#16a34a", html: "Equazione con asse verticale.", why: "Si ottiene dal luogo con una traslazione e un cambio di scala: a = 1/(4p)." },
        { id: "elem", label: "Vertice, asse, fuoco, direttrice", x: 82, y: 30, color: "#f59e0b", html: "Formule in a, b, Δ.", why: "Il vertice si trova completando il quadrato; fuoco e direttrice sono simmetrici rispetto al vertice a distanza 1/4|a|." },
        { id: "retta", label: "Retta e parabola", x: 18, y: 62, color: "#ef4444", html: "Sistema di secondo grado: Δ′ &gt; 0 secante, = 0 tangente, &lt; 0 esterna.", why: "Il discriminante dell'equazione risolvente conta i punti comuni." },
        { id: "tang", label: "Tangenti", x: 82, y: 62, color: "#0ea5e9", html: "In un punto, da un punto esterno, con pendenza data.", why: "Tangente = secante con due punti coincidenti, quindi Δ′ = 0: idea che porterà alla derivata (Newton, Leibniz)." },
        { id: "app", label: "Applicazioni", x: 50, y: 88, color: "#a855f7", html: "Proiettili, ponti, antenne, fari, ottimizzazione.", why: "La riflessione nel fuoco e la caduta dei gravi (Galileo) sono le due ragioni fisiche per cui la parabola è ovunque." }
      ],
      edges: [
        ["luogo", "eq", "in coordinate"],
        ["eq", "elem", "dà"],
        ["eq", "retta", "con una retta"],
        ["retta", "tang", "caso Δ′ = 0"],
        ["elem", "app", "si usa in"],
        ["tang", "app", "si usa in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: rette e parabola",
      questions: [
        { type: "mc", q: "La retta y = −1 rispetto alla parabola y = x²:", options: ["è secante", "è tangente", "è esterna"], answer: 2, explain: "x² = −1 non ha soluzioni reali: Δ′ &lt; 0, retta esterna." },
        { type: "mc", q: "La retta y = 2x − 1 rispetto alla parabola y = x² è…", options: ["tangente in (1, 1)", "secante", "esterna"], answer: 0, explain: "x² = 2x − 1 → (x − 1)² = 0: Δ′ = 0, tangente in (1, 1)." },
        { type: "num", q: "Quante tangenti si possono condurre da un punto esterno a una parabola?", answer: 2, explain: "Due: la condizione Δ′ = 0 dà un'equazione di secondo grado in m con due soluzioni." }
      ]
    }
  ],
  glossary: [
    { t: "Parabola", d: "Luogo dei punti equidistanti da un punto (fuoco) e da una retta (direttrice)." },
    { t: "Fuoco", d: "Punto fisso F nella definizione della parabola." },
    { t: "Direttrice", d: "Retta fissa nella definizione della parabola." },
    { t: "Vertice", d: "Punto della parabola sull'asse di simmetria, il più vicino alla direttrice." },
    { t: "Asse di simmetria", d: "Retta per il fuoco, perpendicolare alla direttrice: la parabola è simmetrica rispetto ad essa." },
    { t: "Concavità", d: "Verso in cui la parabola \"si apre\": determinato dal segno di a." },
    { t: "Discriminante", d: "Δ = b² − 4ac: determina il numero di intersezioni con l'asse x." },
    { t: "Retta tangente", d: "Retta che ha un solo punto in comune con la parabola (discriminante nullo) senza attraversarla." },
    { t: "Retta secante", d: "Retta che incontra la parabola in due punti." },
    { t: "Conica", d: "Curva ottenuta sezionando un cono con un piano: parabola, ellisse, iperbole (e circonferenza)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Il vertice di y = −x² + 4x − 3 è…", options: ["(2, 1)", "(−2, 1)", "(2, −1)"], answer: 0, explain: "x = −b/2a = 2; y = −4 + 8 − 3 = 1." },
      { type: "mc", q: "La concavità di y = −3x² + x è…", options: ["verso l'alto", "verso il basso", "dipende da x"], answer: 1, explain: "a = −3 &lt; 0." },
      { type: "num", q: "Quanto vale il fuoco (ordinata) di y = x²/4?", answer: 1, explain: "a = 1/4, quindi 1/(4a) = 1: F(0, 1)." },
      { type: "mc", q: "La direttrice di y = x²/4 è…", options: ["y = 1", "y = −1", "x = −1"], answer: 1, explain: "È simmetrica del fuoco rispetto al vertice: y = −1." },
      { type: "num", q: "Per quale valore di x la parabola y = x² − 6x + 5 ha il vertice?", answer: 3, explain: "x = −b/2a = 6/2 = 3." },
      { type: "mc", q: "La retta y = 2x − 1 e la parabola y = x² hanno…", options: ["due punti in comune", "un solo punto in comune (tangenza)", "nessun punto in comune"], answer: 1, explain: "x² − 2x + 1 = 0 → Δ′ = 0: tangente in (1, 1)." },
      { type: "num", q: "Quanti punti di intersezione ha la parabola y = x² − 4x + 3 con l'asse x?", answer: 2, explain: "Δ = 4 &gt; 0: radici 1 e 3." },
      { type: "mc", q: "Qual è la parabola con vertice V(1, 2) e passante per (3, 10)?", options: ["y = 2x² − 4x + 4", "y = x² − 2x + 3", "y = 2x² + 2"], answer: 0, explain: "y = a(x − 1)² + 2; da 10 = 4a + 2 si ha a = 2 → 2x² − 4x + 4." },
      { type: "order", q: "Metti in ordine i passi per trovare le tangenti da un punto esterno P.", items: ["Scrivere il fascio di rette per P", "Mettere a sistema retta e parabola", "Scrivere l'equazione risolvente di secondo grado", "Imporre Δ′ = 0", "Ricavare le due pendenze m"], explain: "Si usa il fascio, si risolve per sostituzione e la condizione di tangenza Δ′ = 0 dà m." },
      { type: "text", q: "Come si chiama l'antico matematico greco che diede il nome alla parabola nel suo trattato sulle coniche? (cognome o nome)", answer: ["apollonio", "apollonio di perga", "apollonio da perga"], explain: "Apollonio di Perga (circa 262–190 a.C.) nelle Coniche." }
    ]
  }
});
