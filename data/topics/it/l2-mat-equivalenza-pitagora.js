TOPIC('it', {
  id: "l2-mat-equivalenza-pitagora",
  title: "Equivalenza e teoremi di Euclide e Pitagora",
  intro: "Un rettangolo e un triangolo possono avere forme diversissime e occupare lo <b>stesso spazio</b>. Quando due figure hanno la stessa estensione si dicono <b>equivalenti</b>. Da questa idea, che hai già usato per calcolare le aree, nasce il teorema più famoso della matematica, quello di <b>Pitagora</b>, insieme ai due teoremi di <b>Euclide</b> sul triangolo rettangolo. Vedrai non solo come si usano, ma anche <b>perché</b> sono veri.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Figure equivalenti",
      html: `<p>Due figure piane si dicono <b>congruenti</b> se si possono sovrapporre esattamente. Si dicono <b>equivalenti</b> se hanno la <b>stessa estensione</b>, cioè la stessa area, anche se hanno forme diverse. Due figure congruenti sono sempre equivalenti, ma non viceversa: un quadrato di lato 4 cm e un rettangolo di 8 cm × 2 cm hanno entrambi area 16 cm², però non sono sovrapponibili.</p>
<p>L'equivalenza è una relazione di equivalenza (riflessiva, simmetrica, transitiva) e gode di due proprietà utili:</p>
<ul>
<li>somme di figure equivalenti <b>(senza punti interni in comune)</b> sono equivalenti;</li>
<li>differenze di figure equivalenti sono equivalenti.</li>
</ul>
<p>È la tecnica della <b>scomposizione e ricomposizione</b>: si taglia una figura in pezzi e li si rimonta in un'altra figura. Per questo, per confrontare le aree, non servono formule: bastano forbici e fantasia. Il paradosso apparente è che si possono confrontare le aree senza misurarle.</p>`
    },
    {
      type: "text",
      title: "Aree dei poligoni: tutto parte dal rettangolo",
      html: `<p>Dal rettangolo si ricavano tutte le altre formule con l'equivalenza:</p>
<ul>
<li><b>Rettangolo</b>: A = base × altezza.</li>
<li><b>Parallelogramma</b>: è equivalente a un rettangolo con la <b>stessa base e la stessa altezza</b> (si sposta il triangolino di sinistra a destra). A = b × h.</li>
<li><b>Triangolo</b>: è la <b>metà</b> di un parallelogramma con la stessa base e la stessa altezza. A = b × h / 2. Tutti i triangoli con la stessa base e la stessa altezza sono equivalenti, anche se hanno forma diversa: basta far scorrere il vertice su una parallela alla base.</li>
<li><b>Trapezio</b>: A = (B + b) × h / 2 (si unisce a un secondo trapezio uguale e ribaltato, ottenendo un parallelogramma di base B + b).</li>
<li><b>Rombo</b>: A = (D × d) / 2.</li>
<li><b>Poligono circoscritto a una circonferenza</b>: A = p × r (semiperimetro per raggio).</li>
</ul>
<p>Ricorda: due figure possono avere area uguale ma perimetri diversi, e viceversa. A parità di perimetro, tra tutti i rettangoli il quadrato ha area massima.</p>`
    },
    {
      type: "svg",
      title: "Il triangolo che scivola",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="60" x2="570" y2="60" stroke="#6366f1" stroke-width="3" stroke-dasharray="9 7"/>
<line x1="60" y1="240" x2="360" y2="240" stroke="#1f2937" stroke-width="4"/>
<polygon points="60,240 360,240 150,60" fill="#bbf7d0" fill-opacity="0.55" stroke="#166534" stroke-width="3"/>
<polygon points="60,240 360,240 300,60" fill="#fed7aa" fill-opacity="0.55" stroke="#c2410c" stroke-width="3"/>
<polygon points="60,240 360,240 480,60" fill="#bfdbfe" fill-opacity="0.55" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="150" cy="60" r="7" fill="#166534"/><circle cx="300" cy="60" r="7" fill="#c2410c"/><circle cx="480" cy="60" r="7" fill="#1d4ed8"/>
<line x1="150" y1="60" x2="150" y2="240" stroke="#6b7280" stroke-width="2" stroke-dasharray="5 5"/>
<text x="458" y="150" font-size="16" fill="#1f2937">stessa base b</text>
<text x="458" y="178" font-size="16" fill="#1f2937">stessa altezza h</text>
<text x="458" y="214" font-size="16" fill="#166534" font-weight="bold">tre triangoli diversi,</text>
<text x="458" y="236" font-size="16" fill="#166534" font-weight="bold">stessa area b·h/2</text>
<text x="40" y="42" font-size="16" fill="#4338ca">Il vertice può scorrere su questa retta parallela alla base</text>
</svg>`,
      caption: "Se il vertice si muove su una parallela alla base, l'altezza non cambia: tutti i triangoli ottenuti sono equivalenti."
    },
    {
      type: "remember",
      title: "Il triangolo rettangolo e i suoi elementi",
      html: `<p>In un triangolo rettangolo i lati che formano l'angolo retto sono i <b>cateti</b> (a, b); il lato opposto all'angolo retto è l'<b>ipotenusa</b> (c): è sempre il lato maggiore. Se tracci l'<b>altezza h</b> relativa all'ipotenusa, essa la divide in due segmenti, le <b>proiezioni dei cateti</b> sull'ipotenusa: <b>p</b> è la proiezione del cateto a e <b>q</b> è quella del cateto b. Si ha c = p + q.</p>
<p>Un teorema è un'implicazione: <b>diretto</b> ("se H allora T") e <b>inverso</b> ("se T allora H"). Il teorema di Pitagora vale anche al contrario.</p>`
    },
    {
      type: "text",
      title: "Il teorema di Pitagora",
      html: `<p><b>Enunciato geometrico</b>: in un triangolo rettangolo, il quadrato costruito sull'ipotenusa è equivalente alla somma dei quadrati costruiti sui due cateti.</p>
<p><b>Formula</b>: se a e b sono i cateti e c l'ipotenusa, <b>a² + b² = c²</b>. Da qui:</p>
<ul>
<li>c = √(a² + b²)</li>
<li>a = √(c² − b²) e b = √(c² − a²)</li>
</ul>
<p><b>Teorema inverso</b>: se in un triangolo il quadrato di un lato è uguale alla somma dei quadrati degli altri due, il triangolo è <b>rettangolo</b> e quel lato è l'ipotenusa. È la base della <b>corda a nodi</b> usata dagli agrimensori: una corda con 12 nodi equidistanti, piegata a triangolo di lati 3, 4 e 5 unità, dà un angolo retto perfetto (infatti 3² + 4² = 9 + 16 = 25 = 5²).</p>
<p>Le <b>terne pitagoriche</b> sono terne di numeri interi che soddisfano a² + b² = c²: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25), e tutti i loro multipli, come (6, 8, 10) o (9, 12, 15).</p>
<p><b>Due triangoli rettangoli da sapere a memoria</b>:</p>
<ul>
<li>Il <b>triangolo rettangolo isoscele</b> (45°-45°-90°): la diagonale d di un quadrato di lato l vale <b>d = l · √2</b>.</li>
<li>La <b>metà di un triangolo equilatero</b> (30°-60°-90°): il cateto minore è metà dell'ipotenusa, quello maggiore vale (ipotenusa · √3) / 2. L'altezza di un triangolo equilatero di lato l è <b>h = l · √3 / 2</b>.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Gioca con il teorema di Pitagora",
      widget: "pythagoras",
      options: {},
      caption: "Cambia i cateti con i cursori: l'area del quadrato sull'ipotenusa è sempre la somma delle aree dei due quadrati sui cateti."
    },
    {
      type: "example",
      title: "Esempi: la scala e lo schermo",
      html: `<p><b>La scala</b>. Una scala lunga 5 m è appoggiata a una parete con il piede a 3 m dal muro. A che altezza arriva? La scala è l'ipotenusa, la distanza dal muro è un cateto: l'altezza è √(5² − 3²) = √(25 − 9) = √16 = <b>4 m</b>.</p>
<p><b>Lo schermo</b>. Quando si dice che un televisore è da "55 pollici" si indica la <b>diagonale</b>. Uno schermo largo 48 cm e alto 36 cm ha diagonale √(48² + 36²) = √(2304 + 1296) = √3600 = <b>60 cm</b>: è una terna 3-4-5 moltiplicata per 12.</p>
<p><b>La diagonale di una stanza</b>. Una stanza è lunga 8 m, larga 6 m e alta 3 m. La diagonale del pavimento è √(64 + 36) = 10 m; la più lunga asta che entra nella stanza ha lunghezza √(10² + 3²) = √109 ≈ 10,44 m (il teorema vale anche nello spazio!).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Pitagora",
      questions: [
        { type: "num", q: "I cateti di un triangolo rettangolo misurano 9 cm e 12 cm. Quanto misura l'ipotenusa?", answer: 15, unit: "cm", explain: "√(81 + 144) = √225 = 15 cm (terna 3-4-5 per 3)." },
        { type: "num", q: "L'ipotenusa di un triangolo rettangolo è 17 cm e un cateto 8 cm. Quanto misura l'altro cateto?", answer: 15, unit: "cm", explain: "√(17² − 8²) = √(289 − 64) = √225 = 15 cm (terna 8-15-17)." },
        { type: "tf", q: "Un triangolo con lati 6, 8 e 11 cm è rettangolo.", answer: false, explain: "6² + 8² = 100, mentre 11² = 121: non vale il teorema inverso." },
        { type: "mc", q: "Quanto vale la diagonale di un quadrato di lato 10 cm?", options: ["10√2 cm ≈ 14,1 cm", "20 cm", "10√3 cm"], answer: 0, explain: "d = l·√2 = 10√2 ≈ 14,14 cm." }
      ]
    },
    {
      type: "text",
      title: "I due teoremi di Euclide",
      html: `<p>Euclide dimostra il teorema di Pitagora (Elementi I.47) con un ragionamento sull'equivalenza. Dalla sua tecnica si ricavano due teoremi sul triangolo rettangolo, riferiti all'altezza h sull'ipotenusa e alle proiezioni p e q dei cateti.</p>
<p><b>Primo teorema di Euclide</b>: in un triangolo rettangolo, il quadrato costruito su un cateto è equivalente al rettangolo che ha per dimensioni l'ipotenusa e la proiezione di quel cateto sull'ipotenusa.</p>
<p style="text-align:center"><b>a² = c · p &nbsp;&nbsp;&nbsp; b² = c · q</b></p>
<p>In parole: <b>un cateto è medio proporzionale tra l'ipotenusa e la sua proiezione</b>: c : a = a : p.</p>
<p><b>Secondo teorema di Euclide</b>: il quadrato costruito sull'altezza relativa all'ipotenusa è equivalente al rettangolo che ha per dimensioni le due proiezioni dei cateti.</p>
<p style="text-align:center"><b>h² = p · q</b></p>
<p>L'altezza è <b>medio proporzionale</b> tra le proiezioni: p : h = h : q.</p>
<p><b>Dai teoremi di Euclide a Pitagora</b>: sommando a² = c·p e b² = c·q si ha a² + b² = c·(p + q) = c·c = c². Pitagora è quindi una conseguenza del primo teorema di Euclide. L'altezza vale anche h = (a · b) / c (si ottiene dall'area calcolata in due modi: a·b/2 = c·h/2).</p>`
    },
    {
      type: "svg",
      title: "Il triangolo rettangolo e le sue proiezioni",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="40,250 400,250 144,87" fill="#e0e7ff" stroke="#4338ca" stroke-width="4"/>
<line x1="144" y1="87" x2="144" y2="250" stroke="#dc2626" stroke-width="4" stroke-dasharray="8 6"/>
<rect x="144" y="236" width="14" height="14" fill="none" stroke="#dc2626" stroke-width="3"/>
<circle cx="40" cy="250" r="6" fill="#1f2937"/><circle cx="400" cy="250" r="6" fill="#1f2937"/><circle cx="144" cy="87" r="6" fill="#1f2937"/><circle cx="144" cy="250" r="6" fill="#dc2626"/>
<text x="22" y="276" font-size="16" fill="#1f2937">B</text>
<text x="404" y="276" font-size="16" fill="#1f2937">C</text>
<text x="136" y="75" font-size="16" fill="#1f2937">A (angolo retto)</text>
<text x="136" y="274" font-size="16" fill="#dc2626">H</text>
<text x="76" y="272" font-size="16" fill="#166534" font-weight="bold">p</text>
<text x="262" y="272" font-size="16" fill="#c2410c" font-weight="bold">q</text>
<text x="150" y="190" font-size="16" fill="#dc2626" font-weight="bold">h</text>
<text x="58" y="168" font-size="16" fill="#4338ca" font-weight="bold">cateto a</text>
<text x="290" y="170" font-size="16" fill="#4338ca" font-weight="bold">cateto b</text>
<text x="210" y="236" font-size="16" fill="#1f2937">ipotenusa c = p + q</text>
<text x="430" y="90" font-size="16" fill="#1f2937">1° Euclide:</text>
<text x="430" y="115" font-size="16" fill="#166534" font-weight="bold">a² = c · p</text>
<text x="430" y="140" font-size="16" fill="#c2410c" font-weight="bold">b² = c · q</text>
<text x="430" y="180" font-size="16" fill="#1f2937">2° Euclide:</text>
<text x="430" y="205" font-size="16" fill="#dc2626" font-weight="bold">h² = p · q</text>
<text x="430" y="245" font-size="16" fill="#1f2937">Pitagora: a² + b² = c²</text>
</svg>`,
      caption: "Nello schema, p è la proiezione del cateto a (AB) sull'ipotenusa e q quella del cateto b (AC)."
    },
    {
      type: "example",
      title: "Esempio numerico con i teoremi di Euclide",
      html: `<p>Un triangolo rettangolo ha le proiezioni dei cateti sull'ipotenusa p = 4 cm e q = 9 cm. Calcola tutti gli elementi.</p>
<ul>
<li>Ipotenusa: c = p + q = 13 cm.</li>
<li>Altezza (2° Euclide): h = √(p · q) = √36 = <b>6 cm</b>.</li>
<li>Cateto a (1° Euclide): a = √(c · p) = √(13 · 4) = √52 = 2√13 ≈ 7,21 cm.</li>
<li>Cateto b: b = √(c · q) = √(13 · 9) = √117 = 3√13 ≈ 10,82 cm.</li>
<li>Verifica con Pitagora: a² + b² = 52 + 117 = 169 = 13². ✓</li>
<li>Area: c · h / 2 = 13 · 6 / 2 = <b>39 cm²</b> (e anche a · b / 2 = (2√13 · 3√13) / 2 = 6 · 13 / 2 = 39: i due calcoli coincidono).</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Prima di Pitagora",
      html: `<p>Il teorema porta il nome di <b>Pitagora di Samo</b> (VI secolo a.C.), ma la relazione era già conosciuta da altri popoli. La tavoletta babilonese <b>Plimpton 322</b> (circa 1800 a.C.) elenca terne pitagoriche molto grandi, come (119, 120, 169). In India, i <i>Sulba Sutra</i> descrivono regole per costruire altari con triangoli rettangoli, in Cina il <i>Zhou Bi Suan Jing</i> mostra la dimostrazione con quadrati. Probabilmente i Greci furono i primi a dimostrarlo in modo generale: la matematica greca non si accontentava di sapere che funziona, voleva sapere <b>perché</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il presidente matematico e il lato impossibile",
      html: `<p>Il teorema ha centinaia di dimostrazioni diverse. Una fu pubblicata nel 1876 da <b>James A. Garfield</b>, allora membro del Congresso degli Stati Uniti e poi ventesimo presidente: usava un trapezio formato da tre triangoli rettangoli.</p>
<p>Il teorema ha anche generato una crisi. La diagonale di un quadrato di lato 1 vale √2, e <b>√2 non è un rapporto di numeri interi</b> (è irrazionale). Secondo la tradizione, questa scoperta turbò i pitagorici, che credevano che tutto fosse numero intero o rapporto di interi: era la scoperta delle <b>grandezze incommensurabili</b>.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per vedere il teorema di Pitagora",
      intro: "Non devi fidarti della formula: puoi vederla con gli occhi, tagliando e incollando.",
      tabs: [
        {
          label: "🇨🇳 Dimostrazione cinese (quadrato inclinato)",
          html: `<p>Prendi un quadrato di lato <b>a + b</b>. Dentro, disponi <b>4 triangoli rettangoli uguali</b> (cateti a e b) in due modi diversi. Nel primo modo i triangoli lasciano libero un quadrato di lato <b>c</b> inclinato. Nel secondo modo i triangoli lasciano due quadrati liberi, di lato <b>a</b> e di lato <b>b</b>. L'area del quadrato grande è la stessa nei due casi e i quattro triangoli sono gli stessi: quello che resta deve essere uguale. Quindi <b>c² = a² + b²</b>. Nessun calcolo: è solo riarrangiamento!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="30" y="30" width="200" height="200" fill="#fef9c3" stroke="#1f2937" stroke-width="3"/>
<polygon points="30,30 98,30 30,162" fill="#a5b4fc" stroke="#1f2937" stroke-width="2"/>
<polygon points="230,30 230,98 98,30" fill="#a5b4fc" stroke="#1f2937" stroke-width="2"/>
<polygon points="230,230 162,230 230,98" fill="#a5b4fc" stroke="#1f2937" stroke-width="2"/>
<polygon points="30,230 30,162 162,230" fill="#a5b4fc" stroke="#1f2937" stroke-width="2"/>
<polygon points="98,30 230,98 162,230 30,162" fill="#fde68a" stroke="#b45309" stroke-width="3" fill-opacity="0.6"/>
<text x="95" y="140" font-size="16" fill="#92400e" font-weight="bold">c²</text>
<rect x="330" y="30" width="200" height="200" fill="#fef9c3" stroke="#1f2937" stroke-width="3"/>
<rect x="330" y="30" width="68" height="68" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<rect x="398" y="98" width="132" height="132" fill="#fed7aa" stroke="#c2410c" stroke-width="3"/>
<text x="352" y="72" font-size="16" fill="#166534" font-weight="bold">b²</text>
<text x="446" y="168" font-size="16" fill="#c2410c" font-weight="bold">a²</text>
<text x="70" y="262" font-size="16" fill="#1f2937">Quadrato di lato a + b: 4 triangoli + c²</text>
<text x="300" y="286" font-size="16" fill="#1f2937">Stessi 4 triangoli + a² + b²  →  c² = a² + b²</text>
</svg>`
        },
        {
          label: "🧩 Con i quadretti",
          html: `<p>Su carta a quadretti disegna un triangolo rettangolo con i cateti di 3 e 4 quadretti. Costruisci sui lati i tre quadrati e conta: quello sul cateto di 3 contiene 9 quadretti, quello sul cateto di 4 ne contiene 16, e quello sull'ipotenusa ne contiene <b>25</b> (lato 5): 9 + 16 = 25. Prova poi con 5 e 12: 25 + 144 = 169 = 13². Se i tre numeri non formano una terna pitagorica, l'ipotenusa non è un numero intero e i quadretti dell'ipotenusa non si contano più "a occhio": ma l'uguaglianza delle aree vale lo stesso.</p>`
        },
        {
          label: "🧵 La corda dei 12 nodi",
          html: `<p>Come tracciavano gli angoli retti i costruttori (e gli antichi egizi, secondo la tradizione degli <i>arpedonapti</i>, i "tenditori di corda")? Con una corda con <b>12 nodi</b> equidistanti. La piegavano a triangolo di lati 3, 4 e 5 segmenti: l'angolo tra i lati di 3 e 4 è <b>retto</b>. Il teorema inverso garantisce che vada sempre così: se i lati verificano 3² + 4² = 5², il triangolo è rettangolo. Ancora oggi i muratori usano la "regola del 3-4-5" per squadrare le fondamenta.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: equivalenza, Euclide, Pitagora",
      nodes: [
        { id: "equi", label: "Equivalenza", x: 50, y: 6, color: "#6366f1", html: "Stessa estensione, anche con forme diverse.", why: "Gli antichi non avevano numeri per misurare tutte le aree (le grandezze incommensurabili li mettevano in crisi): confrontavano le figure con tagli e ricomposizioni, senza numeri." },
        { id: "aree", label: "Formule delle aree", x: 20, y: 30, color: "#f59e0b", html: "Rettangolo, parallelogramma, triangolo, trapezio.", why: "Ogni formula deriva dal rettangolo con una scomposizione: parallelogramma = rettangolo, triangolo = metà parallelogramma." },
        { id: "rett", label: "Triangolo rettangolo", x: 80, y: 30, color: "#16a34a", html: "Cateti, ipotenusa, altezza, proiezioni.", why: "È il 'mattone' della trigonometria e del calcolo delle distanze: ogni triangolo si divide in triangoli rettangoli con un'altezza." },
        { id: "euc", label: "Teoremi di Euclide", x: 50, y: 52, color: "#a855f7", html: "a² = c·p, b² = c·q, h² = p·q.", why: "Euclide li ricava con l'equivalenza di quadrati e rettangoli (libro I e VI). Si dimostrano anche con la similitudine dei tre triangoli ABC, HBA, HAC: lo vedrai nella lezione successiva." },
        { id: "pit", label: "Teorema di Pitagora", x: 20, y: 76, color: "#ef4444", html: "a² + b² = c².", why: "Nei Babilonesi era una ricetta numerica, in Euclide (I.47) diventa teorema con dimostrazione: i quadrati non sono numeri, ma figure." },
        { id: "inv", label: "Teorema inverso", x: 80, y: 76, color: "#0ea5e9", html: "Se a² + b² = c², il triangolo è rettangolo.", why: "Permette di riconoscere un angolo retto con sole misure di lunghezza: la corda a nodi, la squadratura dei muri." },
        { id: "irr", label: "Irrazionali", x: 50, y: 92, color: "#14b8a6", html: "√2 non è frazione.", why: "Pitagora applicato al quadrato unitario produce la diagonale √2. La sua irrazionalità, scoperta dai pitagorici, mostrò che i numeri razionali non bastano per misurare la geometria." }
      ],
      edges: [
        ["equi", "aree", "permette"],
        ["aree", "euc", "usate in"],
        ["rett", "euc", "ha"],
        ["euc", "pit", "implica"],
        ["pit", "inv", "si inverte"],
        ["pit", "irr", "porta a"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: Euclide",
      questions: [
        { type: "num", q: "In un triangolo rettangolo l'ipotenusa misura 25 cm e la proiezione di un cateto su di essa 9 cm. Quanto misura quel cateto?", answer: 15, unit: "cm", explain: "Primo teorema di Euclide: a² = c · p = 25 · 9 = 225, quindi a = 15 cm." },
        { type: "num", q: "Le proiezioni dei cateti sull'ipotenusa misurano 2 cm e 8 cm. Quanto è alta l'altezza relativa all'ipotenusa?", answer: 4, unit: "cm", explain: "Secondo teorema di Euclide: h² = p · q = 16, quindi h = 4 cm." },
        { type: "tf", q: "Due triangoli con la stessa base e la stessa altezza hanno sempre la stessa area.", answer: true, explain: "Area = base × altezza / 2: se base e altezza sono uguali, lo sono anche le aree (sono equivalenti)." }
      ]
    }
  ],
  glossary: [
    { t: "Figure equivalenti", d: "Figure che hanno la stessa area (estensione), anche se di forma diversa." },
    { t: "Congruenti", d: "Figure sovrapponibili esattamente con un movimento rigido." },
    { t: "Cateto", d: "Ciascuno dei due lati di un triangolo rettangolo che formano l'angolo retto." },
    { t: "Ipotenusa", d: "Il lato opposto all'angolo retto: il più lungo del triangolo rettangolo." },
    { t: "Proiezione di un cateto", d: "Segmento dell'ipotenusa compreso tra il vertice e il piede dell'altezza relativa all'ipotenusa." },
    { t: "Teorema di Pitagora", d: "In un triangolo rettangolo a² + b² = c²." },
    { t: "Terna pitagorica", d: "Tre numeri interi che soddisfano a² + b² = c², come (3, 4, 5)." },
    { t: "Medio proporzionale", d: "Il numero x tale che a : x = x : b, cioè x = √(a·b)." },
    { t: "Teoremi di Euclide", d: "In un triangolo rettangolo: a² = c·p, b² = c·q (primo) e h² = p·q (secondo)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Due figure sono equivalenti quando…", options: ["Sono sovrapponibili", "Hanno la stessa area", "Hanno lo stesso perimetro"], answer: 1, explain: "Equivalenti = stessa estensione (area), anche con forma diversa." },
      { type: "num", q: "Un triangolo ha base 10 cm e altezza 6 cm. Quanto vale la sua area?", answer: 30, unit: "cm²", explain: "A = b · h / 2 = 10 · 6 / 2 = 30 cm²." },
      { type: "num", q: "I cateti di un triangolo rettangolo misurano 5 cm e 12 cm. Quanto misura l'ipotenusa?", answer: 13, unit: "cm", explain: "√(25 + 144) = √169 = 13 cm." },
      { type: "tf", q: "In un triangolo di lati 7, 24 e 25 cm l'angolo opposto al lato di 25 cm è retto.", answer: true, explain: "7² + 24² = 49 + 576 = 625 = 25²: per il teorema inverso è rettangolo." },
      { type: "num", q: "La diagonale di un quadrato misura 12√2 cm. Quanto misura il lato?", answer: 12, unit: "cm", explain: "d = l√2, quindi l = d/√2 = 12 cm." },
      { type: "mc", q: "Il primo teorema di Euclide afferma che…", options: ["h² = p · q", "a² = c · p", "a + b = c"], answer: 1, explain: "Il quadrato di un cateto è uguale al prodotto dell'ipotenusa per la proiezione del cateto." },
      { type: "num", q: "In un triangolo rettangolo le proiezioni dei cateti sull'ipotenusa sono 3 cm e 12 cm. Quanto misura l'altezza relativa all'ipotenusa?", answer: 6, unit: "cm", explain: "h = √(3 · 12) = √36 = 6 cm." },
      { type: "num", q: "Un triangolo equilatero ha lato 10 cm. Quanto vale la sua altezza, arrotondata a 1 cifra decimale? (√3 ≈ 1,732)", answer: 8.7, tol: 0.1, unit: "cm", explain: "h = l · √3 / 2 = 10 · 1,732 / 2 ≈ 8,66 ≈ 8,7 cm." },
      { type: "text", q: "Come si chiama il lato di un triangolo rettangolo opposto all'angolo retto?", answer: ["ipotenusa", "l'ipotenusa"], explain: "L'ipotenusa è il lato maggiore del triangolo rettangolo." },
      { type: "order", q: "Metti in ordine i passi per trovare l'altezza di una parete raggiunta da una scala.", items: ["Riconosci il triangolo rettangolo (scala = ipotenusa)", "Scrivi c² = a² + b²", "Isola il cateto: a = √(c² − b²)", "Calcola il valore numerico"], explain: "Si individua il triangolo, si applica Pitagora, si risolve per il cateto incognito e si calcola." }
    ]
  }
});
