TOPIC('it', {
  id: "m1-mat-triangoli",
  title: "I triangoli",
  intro: "Il <b>triangolo</b> è il poligono più semplice: solo 3 lati e 3 angoli. Eppure è la figura più \"forte\" della geometria: è rigido, non si deforma, e per questo lo trovi nei ponti, nelle gru e nei tetti. Scopriamo come si classifica, perché i suoi angoli fanno sempre 180° e quali sono i suoi <b>punti notevoli</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è un triangolo",
      html: `<p>Un <b>triangolo</b> è un poligono con <b>3 lati</b>, <b>3 vertici</b> e <b>3 angoli interni</b>. Si indica con le lettere dei vertici: triangolo <b>ABC</b>.</p>
<ul>
<li>I lati opposti ai vertici A, B, C si indicano spesso con le minuscole <b>a, b, c</b>.</li>
<li>Gli angoli interni si indicano con <b>α, β, γ</b> (o Â, B̂, Ĉ).</li>
<li>Il <b>perimetro</b> è la somma dei lati: 2p = a + b + c.</li>
</ul>
<p><b>Disuguaglianza triangolare.</b> Non tutte le terne di segmenti formano un triangolo! Ogni lato deve essere <b>minore della somma</b> degli altri due (e maggiore della loro differenza).</p>
<p>Con 3, 4 e 5 cm il triangolo si costruisce (5 &lt; 3 + 4). Con 2, 3 e 7 cm no: 7 è più lungo di 2 + 3 = 5 e i due lati corti non riescono a "chiudersi".</p>`
    },
    {
      type: "text",
      title: "2. La somma degli angoli interni è 180°",
      html: `<p>In <b>ogni</b> triangolo, grande o piccolo, la somma degli angoli interni è sempre <b>180°</b>, cioè un angolo piatto:</p>
<p style="text-align:center"><b>α + β + γ = 180°</b></p>
<p><b>Perché?</b> Disegna per il vertice C la retta <b>parallela</b> al lato AB. Intorno a C si forma un angolo piatto diviso in tre parti: quella centrale è γ, e le due laterali sono congruenti ad α e a β (sono angoli <i>alterni interni</i> tra rette parallele). Quindi α + β + γ = un angolo piatto = 180°. È il teorema 32 del primo libro degli <b>Elementi</b> di Euclide.</p>
<p><b>Conseguenze utili:</b></p>
<ul>
<li>se conosci due angoli, trovi il terzo: γ = 180° − α − β;</li>
<li>un triangolo può avere al massimo <b>un</b> angolo retto o ottuso;</li>
<li>l'<b>angolo esterno</b> (formato da un lato e dal prolungamento di un altro) è uguale alla <b>somma dei due angoli interni non adiacenti</b>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "La dimostrazione con la parallela",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<line x1="40" y1="60" x2="560" y2="60" stroke="#16a34a" stroke-width="3" stroke-dasharray="10 6"/>
<polygon points="110,250 500,250 330,60" fill="#fde68a" stroke="#111827" stroke-width="4"/>
<path d="M160 250 A50 50 0 0 0 147 220" stroke="#dc2626" stroke-width="5" fill="none"/>
<path d="M450 250 A50 50 0 0 1 468 214" stroke="#2563eb" stroke-width="5" fill="none"/>
<path d="M310 82 A30 30 0 0 0 350 83" stroke="#9333ea" stroke-width="5" fill="none"/>
<path d="M290 60 A40 40 0 0 0 300 87" stroke="#dc2626" stroke-width="5" fill="none"/>
<path d="M370 60 A40 40 0 0 1 356 89" stroke="#2563eb" stroke-width="5" fill="none"/>
<text x="175" y="238" font-size="22" fill="#dc2626" font-weight="bold">α</text>
<text x="420" y="238" font-size="22" fill="#2563eb" font-weight="bold">β</text>
<text x="322" y="115" font-size="22" fill="#9333ea" font-weight="bold">γ</text>
<text x="262" y="88" font-size="22" fill="#dc2626" font-weight="bold">α</text>
<text x="380" y="88" font-size="22" fill="#2563eb" font-weight="bold">β</text>
<text x="95" y="275" font-size="18" font-weight="bold">A</text>
<text x="505" y="275" font-size="18" font-weight="bold">B</text>
<text x="322" y="48" font-size="18" font-weight="bold">C</text>
<text x="60" y="40" font-size="16" fill="#16a34a">retta parallela ad AB passante per C</text>
<text x="300" y="295" font-size="18" text-anchor="middle" fill="#111827">α + γ + β = angolo piatto = 180°</text>
</svg>`,
      caption: "In alto, intorno a C, i tre angoli α, γ, β formano un angolo piatto."
    },
    {
      type: "example",
      title: "Esempio pratico: trovare l'angolo mancante",
      html: `<p><b>1.</b> Un triangolo ha α = 48° e β = 67°. Allora γ = 180° − 48° − 67° = <b>65°</b>.</p>
<p><b>2.</b> In un triangolo <b>isoscele</b> l'angolo al vertice misura 40°. Gli angoli alla base sono uguali: (180° − 40°) : 2 = <b>70°</b> ciascuno.</p>
<p><b>3.</b> In un triangolo <b>rettangolo</b> un angolo acuto è 35°. L'altro è 90° − 35° = <b>55°</b>: i due angoli acuti di un triangolo rettangolo sono sempre <b>complementari</b>.</p>
<p><b>4.</b> Angolo esterno: se due angoli interni sono 50° e 60°, l'angolo esterno al terzo vertice è 50° + 60° = <b>110°</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: lati e angoli",
      questions: [
        { type: "num", q: "Due angoli di un triangolo misurano 72° e 38°. Quanto misura il terzo?", answer: 70, unit: "°", explain: "180° − 72° − 38° = 70°." },
        { type: "tf", q: "Con segmenti lunghi 4 cm, 5 cm e 10 cm si può costruire un triangolo.", answer: false, explain: "10 è maggiore di 4 + 5 = 9: la disuguaglianza triangolare non è rispettata." },
        { type: "mc", q: "Quanti angoli ottusi può avere al massimo un triangolo?", options: ["0", "1", "2", "3"], answer: 1, explain: "Due angoli ottusi supererebbero già 180°." }
      ]
    },
    {
      type: "text",
      title: "3. Classificare i triangoli",
      html: `<p><b>Rispetto ai lati</b>:</p>
<ul>
<li><b>equilatero</b>: 3 lati congruenti, e anche 3 angoli congruenti di <b>60°</b>;</li>
<li><b>isoscele</b>: 2 lati congruenti (i <b>lati obliqui</b>); il terzo è la <b>base</b>. Gli angoli alla base sono congruenti;</li>
<li><b>scaleno</b>: 3 lati diversi e 3 angoli diversi.</li>
</ul>
<p><b>Rispetto agli angoli</b>:</p>
<ul>
<li><b>acutangolo</b>: 3 angoli acuti;</li>
<li><b>rettangolo</b>: un angolo retto. I lati che lo formano sono i <b>cateti</b>, il lato opposto è l'<b>ipotenusa</b> (sempre il lato più lungo);</li>
<li><b>ottusangolo</b>: un angolo ottuso.</li>
</ul>
<p>Le due classificazioni si combinano: esiste il triangolo <b>rettangolo isoscele</b> (angoli 90°, 45°, 45°: metà di un quadrato), lo <b>scaleno ottusangolo</b>, e così via. Ma un equilatero è sempre acutangolo!</p>`
    },
    {
      type: "svg",
      title: "La famiglia dei triangoli",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0f9ff"/>
<text x="300" y="24" font-size="18" text-anchor="middle" font-weight="bold" fill="#0f172a">Rispetto ai lati</text>
<polygon points="40,140 160,140 100,36" fill="#fca5a5" stroke="#991b1b" stroke-width="3"/>
<text x="100" y="164" font-size="16" text-anchor="middle" font-weight="bold">equilatero</text>
<polygon points="240,140 360,140 300,40" fill="#fde047" stroke="#854d0e" stroke-width="3"/>
<line x1="264" y1="92" x2="276" y2="86" stroke="#854d0e" stroke-width="3"/>
<line x1="324" y1="86" x2="336" y2="92" stroke="#854d0e" stroke-width="3"/>
<text x="300" y="164" font-size="16" text-anchor="middle" font-weight="bold">isoscele</text>
<polygon points="420,140 580,140 460,50" fill="#86efac" stroke="#166534" stroke-width="3"/>
<text x="500" y="164" font-size="16" text-anchor="middle" font-weight="bold">scaleno</text>
<text x="300" y="194" font-size="18" text-anchor="middle" font-weight="bold" fill="#0f172a">Rispetto agli angoli</text>
<polygon points="40,295 170,295 120,215" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>
<text x="105" y="315" font-size="16" text-anchor="middle" font-weight="bold">acutangolo</text>
<polygon points="250,295 360,295 250,210" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3"/>
<rect x="250" y="279" width="16" height="16" fill="none" stroke="#1e3a8a" stroke-width="2"/>
<text x="300" y="315" font-size="16" text-anchor="middle" font-weight="bold">rettangolo</text>
<polygon points="420,295 580,295 450,250" fill="#fdba74" stroke="#9a3412" stroke-width="3"/>
<text x="500" y="315" font-size="16" text-anchor="middle" font-weight="bold">ottusangolo</text>
</svg>`,
      caption: "I trattini sui lati indicano i lati congruenti; il quadratino indica l'angolo retto."
    },
    {
      type: "widget",
      title: "Che triangolo è?",
      widget: "classify",
      options: {
        groups: ["Acutangolo", "Rettangolo", "Ottusangolo"],
        items: [
          ["60°, 60°, 60°", 0], ["90°, 45°, 45°", 1], ["120°, 30°, 30°", 2], ["70°, 60°, 50°", 0],
          ["90°, 30°, 60°", 1], ["100°, 50°, 30°", 2], ["80°, 80°, 20°", 0], ["lati 3, 4, 5 cm", 1], ["un angolo di 95°", 2]
        ]
      },
      caption: "Il triangolo con lati 3, 4, 5 è rettangolo perché 3² + 4² = 5² (lo vedrai con Pitagora)."
    },
    {
      type: "text",
      title: "4. Altezze, mediane, bisettrici, assi",
      html: `<p>In ogni triangolo si possono tracciare 4 tipi di segmenti o rette speciali, <b>tre per tipo</b>. Le tre linee di ogni tipo si incontrano sempre in <b>un solo punto</b>: sono i <b>punti notevoli</b>.</p>
<table>
<tr><th>Linea</th><th>Che cos'è</th><th>Punto notevole</th></tr>
<tr><td><b>Altezza</b></td><td>segmento perpendicolare dal vertice al lato opposto (o al suo prolungamento)</td><td><b>Ortocentro</b></td></tr>
<tr><td><b>Mediana</b></td><td>segmento dal vertice al <b>punto medio</b> del lato opposto</td><td><b>Baricentro</b>: divide ogni mediana in due parti, una doppia dell'altra (2 : 1)</td></tr>
<tr><td><b>Bisettrice</b></td><td>semiretta che divide un angolo in due angoli congruenti</td><td><b>Incentro</b>: centro del cerchio <b>inscritto</b></td></tr>
<tr><td><b>Asse</b></td><td>retta perpendicolare a un lato nel suo punto medio</td><td><b>Circocentro</b>: centro del cerchio <b>circoscritto</b></td></tr>
</table>
<p><b>Dove cadono?</b> Baricentro e incentro sono sempre <b>interni</b>. Ortocentro e circocentro sono interni nell'acutangolo; nel rettangolo l'ortocentro è nel vertice dell'angolo retto e il circocentro nel punto medio dell'ipotenusa; nell'ottusangolo sono <b>esterni</b>.</p>
<p>Nel triangolo <b>equilatero</b> i quattro punti notevoli <b>coincidono</b>.</p>`
    },
    {
      type: "widget",
      title: "Riconosci le linee del triangolo",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<polygon points="60,280 540,280 220,40" fill="#e0f2fe" stroke="#0f172a" stroke-width="4"/>
<line x1="220" y1="40" x2="220" y2="280" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 5"/>
<rect x="220" y="264" width="16" height="16" fill="none" stroke="#dc2626" stroke-width="2"/>
<line x1="540" y1="280" x2="140" y2="160" stroke="#16a34a" stroke-width="3"/>
<circle cx="140" cy="160" r="6" fill="#16a34a"/>
<circle cx="300" cy="280" r="6" fill="#9333ea"/>
<text x="40" y="300" font-size="18" font-weight="bold">A</text>
<text x="548" y="300" font-size="18" font-weight="bold">B</text>
<text x="212" y="30" font-size="18" font-weight="bold">C</text>
</svg>`,
        spots: [
          { x: 220, y: 170, label: "Altezza" },
          { x: 340, y: 220, label: "Mediana" },
          { x: 140, y: 160, label: "Punto medio di AC" },
          { x: 220, y: 272, label: "Angolo retto" },
          { x: 300, y: 280, label: "Base AB" }
        ]
      },
      caption: "L'altezza forma un angolo retto con la base; la mediana arriva nel punto medio del lato opposto."
    },
    {
      type: "example",
      title: "Esempio pratico: il baricentro e il perimetro",
      html: `<p><b>Baricentro in equilibrio.</b> Ritaglia un triangolo di cartone, traccia due mediane e trova il loro punto d'incontro: il <b>baricentro</b>. Appoggialo sulla punta di una matita: il triangolo resta in <b>equilibrio</b>! Il baricentro è infatti il "centro di massa" della figura.</p>
<p>Se una mediana è lunga 12 cm, il baricentro la divide in <b>8 cm</b> (dalla parte del vertice) e <b>4 cm</b> (dalla parte del lato).</p>
<p><b>Perimetro.</b> Un triangolo isoscele ha la base di 10 cm e i lati obliqui di 13 cm: 2p = 10 + 13 + 13 = <b>36 cm</b>. Un equilatero con perimetro 27 cm ha lati di 27 : 3 = <b>9 cm</b>.</p>`
    },
    {
      type: "3d",
      title: "Triangoli nello spazio: il tetraedro",
      scene: "solid",
      options: { shape: "pyramid", n: 3, r: 1.2, h: 1.6, color: "#f97316", labels: true, shapes: ["pyramid", "prism"] },
      caption: "Una piramide a base triangolare ha 4 facce, tutte triangoli. Il prisma triangolare ha due basi triangolari: lo trovi nelle tende da campeggio e nei prismi che scompongono la luce."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il triangolo non si deforma?",
      html: `<p>Prendi 4 bastoncini uniti agli angoli con dei fermacampioni: il quadrato si schiaccia facilmente e diventa un rombo. Con 3 bastoncini invece il triangolo <b>non si muove</b>: tre lati determinano un solo triangolo (è il terzo criterio di congruenza).</p>
<p>Per questo i triangoli sono ovunque nelle <b>strutture</b>: la <b>Torre Eiffel</b>, le gru, i tralicci dell'alta tensione, i ponti in ferro, le capriate dei tetti e perfino i telai delle biciclette sono fatti di triangoli.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… sulla Terra i triangoli \"barano\"?",
      html: `<p>La regola dei 180° vale sul <b>piano</b>. Su una sfera no! Parti dal Polo Nord, scendi fino all'equatore, percorri un quarto di equatore e torna al Polo: hai disegnato un triangolo con <b>tre angoli retti</b>, cioè 270°!</p>
<p>Il grande matematico <b>Carl Friedrich Gauss</b>, nei primi dell'Ottocento, misurò un enorme triangolo tra tre montagne tedesche (Brocken, Hohehagen e Inselsberg) per controllare se lo spazio fosse davvero "piatto". Trovò 180°, entro gli errori di misura.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i triangoli",
      intro: "Se la dimostrazione con le parallele non ti convince, prova con le mani, con il corpo o con la tecnologia.",
      tabs: [
        {
          label: "✂️ Strappa gli angoli",
          html: `<p>Il metodo più usato nelle scuole di tutto il mondo per <b>vedere</b> i 180°:</p>
<ol>
<li>disegna un triangolo qualsiasi su un foglio e colora i tre angoli di colori diversi;</li>
<li>ritaglialo e <b>strappa</b> i tre angoli;</li>
<li>accostali con i vertici nello stesso punto: formano sempre una <b>linea dritta</b>, cioè un angolo piatto!</li>
</ol>
<p>Prova con triangoli diversi: funziona sempre.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fdf4ff"/>
<polygon points="30,180 230,180 150,40" fill="#ffffff" stroke="#111827" stroke-width="3"/>
<path d="M30 180 L70 180 A40 40 0 0 0 64 160 Z" fill="#ef4444"/>
<path d="M230 180 L190 180 A40 40 0 0 1 210 145 Z" fill="#3b82f6"/>
<path d="M150 40 L132 72 A36 36 0 0 0 170 75 Z" fill="#22c55e"/>
<text x="280" y="120" font-size="30" fill="#111827">→</text>
<line x1="330" y1="160" x2="580" y2="160" stroke="#111827" stroke-width="3"/>
<path d="M455 160 L525 160 A70 70 0 0 0 516 125 Z" fill="#ef4444"/>
<path d="M455 160 L516 125 A70 70 0 0 0 420 99 Z" fill="#22c55e"/>
<path d="M455 160 L420 99 A70 70 0 0 0 385 160 Z" fill="#3b82f6"/>
<text x="455" y="200" font-size="18" text-anchor="middle" font-weight="bold">i tre angoli = 180°</text>
</svg>`
        },
        {
          label: "🚶 Cammina sul triangolo",
          html: `<p>Disegna un grande triangolo in cortile con il gesso. Parti da un vertice guardando lungo un lato, cammina fino al vertice successivo e <b>gira</b> per guardare lungo il lato nuovo. Fai lo stesso agli altri vertici, finché torni a guardare nella direzione di partenza.</p>
<p>Hai fatto un <b>giro completo</b>: 360°. Le tre "girate" sono gli <b>angoli esterni</b>, quindi la loro somma è 360°. Ogni angolo esterno + il suo interno = 180°: 3 × 180° − 360° = <b>180°</b> per gli angoli interni. Questo metodo piace molto nei Paesi anglosassoni ed è alla base della programmazione con la "tartaruga" (Logo, Scratch).</p>`
        },
        {
          label: "📐 Il triangolo rettangolo interattivo",
          html: `<p>Muovi i cursori dei cateti: il triangolo cambia forma, ma resta sempre <b>rettangolo</b>. Osserva che l'<b>ipotenusa</b> è sempre il lato più lungo e che i due angoli acuti sono complementari. I quadrati sui lati ti preparano al teorema di Pitagora che studierai in seconda media.</p>`,
          widget: "pythagoras",
          options: { a: 3, b: 4 }
        },
        {
          label: "🏗️ Analogia: il triangolo ingegnere",
          html: `<p>Pensa ai triangoli come agli <b>ingegneri</b> della geometria. Un rettangolo di cartone sotto un peso si piega; se ci aggiungi una <b>diagonale</b>, diventa due triangoli e smette di piegarsi.</p>
<p>Il geometra usa i triangoli anche per <b>misurare</b> distanze che non si possono raggiungere (fiumi, montagne): è la <b>triangolazione</b>, con cui sono state disegnate le carte geografiche di tutta Europa. E il GPS del telefono calcola la tua posizione con un principio simile, la trilaterazione.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei triangoli: tocca e scopri il perché",
      nodes: [
        { id: "tri", label: "Triangolo", x: 50, y: 6, color: "#f97316", html: "Poligono con 3 lati, 3 vertici, 3 angoli.", why: "È il poligono con il minor numero di lati possibile: con 2 segmenti non si chiude una figura. Ogni altro poligono si può dividere in triangoli con le diagonali." },
        { id: "disug", label: "Disuguaglianza triangolare", x: 16, y: 26, color: "#ef4444", html: "Ogni lato è minore della somma degli altri due.", why: "La via dritta è la più breve: andare da A a B passando per C è sempre più lungo che andare dritti. Euclide lo dimostra nella proposizione 20 del primo libro." },
        { id: "somma", label: "Somma angoli = 180°", x: 50, y: 30, color: "#a855f7", html: "α + β + γ = 180° in ogni triangolo del piano.", why: "Deriva dal quinto postulato di Euclide (quello delle parallele): tracciando la parallela a un lato per il vertice opposto, i tre angoli si ricompongono in un angolo piatto." },
        { id: "rigido", label: "Rigidità", x: 84, y: 26, color: "#64748b", html: "Il triangolo non si deforma se i lati sono fissi.", why: "Tre lati determinano un solo triangolo (criterio di congruenza LLL). Per questo gli ingegneri costruiscono travature reticolari fatte di triangoli." },
        { id: "lati", label: "Classifica per lati", x: 25, y: 54, color: "#eab308", html: "Equilatero, isoscele, scaleno.", why: "Se due lati sono uguali, anche gli angoli opposti lo sono (teorema del triangolo isoscele, detto nel Medioevo pons asinorum, il \"ponte degli asini\", perché metteva in difficoltà gli studenti)." },
        { id: "angoli", label: "Classifica per angoli", x: 75, y: 54, color: "#3b82f6", html: "Acutangolo, rettangolo, ottusangolo.", why: "Poiché la somma è 180°, al massimo un angolo può essere retto o ottuso: gli altri due devono dividersi ciò che resta." },
        { id: "punti", label: "Punti notevoli", x: 50, y: 74, color: "#16a34a", html: "Ortocentro, baricentro, incentro, circocentro.", why: "Le tre altezze, mediane, bisettrici o assi si incontrano sempre in un solo punto: è un fatto dimostrabile, non una coincidenza. Gli antichi Greci conoscevano già baricentro, incentro e circocentro." },
        { id: "eulero", label: "Retta di Eulero", x: 25, y: 94, color: "#14b8a6", html: "Ortocentro, baricentro e circocentro stanno sempre sulla stessa retta.", why: "Lo scoprì il matematico svizzero Leonhard Euler (Eulero) nel 1765. Il baricentro sta sempre a 1/3 della distanza tra circocentro e ortocentro." },
        { id: "pitagora", label: "Verso Pitagora", x: 75, y: 94, color: "#ec4899", html: "Nel triangolo rettangolo: a² + b² = c².", why: "Lo studierai in seconda media. Babilonesi e Cinesi lo conoscevano già; la tradizione attribuisce la prima dimostrazione a Pitagora (VI secolo a.C.)." }
      ],
      edges: [
        ["tri", "disug", "esiste se"],
        ["tri", "somma", "proprietà"],
        ["tri", "rigido", "proprietà"],
        ["tri", "lati", "si classifica"],
        ["tri", "angoli", "si classifica"],
        ["somma", "angoli", "limita"],
        ["tri", "punti", "ha"],
        ["punti", "eulero", "allineati sulla"],
        ["angoli", "pitagora", "se rettangolo"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: classificazione e punti notevoli",
      questions: [
        { type: "mc", q: "Come si chiama il punto d'incontro delle mediane?", options: ["Ortocentro", "Baricentro", "Incentro", "Circocentro"], answer: 1, explain: "Le mediane si incontrano nel baricentro." },
        { type: "mc", q: "Un triangolo con angoli 90°, 45°, 45° è…", options: ["rettangolo scaleno", "rettangolo isoscele", "equilatero", "ottusangolo"], answer: 1, explain: "Ha un angolo retto e due angoli (e quindi due lati) uguali." },
        { type: "num", q: "In un triangolo isoscele l'angolo al vertice è 50°. Quanto misura ciascun angolo alla base?", answer: 65, unit: "°", explain: "(180° − 50°) : 2 = 65°." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Ogni lato è <b>minore della somma</b> degli altri due.</li>
<li>La somma degli angoli interni è <b>180°</b>; l'angolo esterno = somma dei due interni non adiacenti.</li>
<li>Lati: <b>equilatero, isoscele, scaleno</b>. Angoli: <b>acutangolo, rettangolo, ottusangolo</b>.</li>
<li>Altezze → <b>ortocentro</b>; mediane → <b>baricentro</b> (2:1); bisettrici → <b>incentro</b>; assi → <b>circocentro</b>.</li>
<li>Il triangolo è <b>rigido</b>: per questo si usa nelle costruzioni.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Triangolo", d: "Poligono con tre lati e tre angoli." },
    { t: "Disuguaglianza triangolare", d: "Ogni lato è minore della somma degli altri due." },
    { t: "Angolo esterno", d: "Angolo tra un lato e il prolungamento del lato consecutivo." },
    { t: "Cateti", d: "I due lati che formano l'angolo retto in un triangolo rettangolo." },
    { t: "Ipotenusa", d: "Il lato opposto all'angolo retto; è il più lungo." },
    { t: "Altezza", d: "Segmento perpendicolare condotto da un vertice al lato opposto." },
    { t: "Mediana", d: "Segmento che unisce un vertice al punto medio del lato opposto." },
    { t: "Bisettrice", d: "Semiretta che divide un angolo in due parti congruenti." },
    { t: "Asse di un segmento", d: "Retta perpendicolare al segmento nel suo punto medio." },
    { t: "Baricentro", d: "Punto d'incontro delle mediane; punto di equilibrio del triangolo." },
    { t: "Ortocentro, incentro, circocentro", d: "Punti d'incontro di altezze, bisettrici e assi." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Due angoli di un triangolo misurano 55° e 85°. Quanto misura il terzo?", answer: 40, unit: "°", explain: "180° − 55° − 85° = 40°." },
      { type: "mc", q: "Con quale terna di segmenti si può costruire un triangolo?", options: ["2, 3, 6 cm", "3, 4, 8 cm", "5, 6, 9 cm", "1, 1, 3 cm"], answer: 2, explain: "9 < 5 + 6 = 11: è l'unica terna che rispetta la disuguaglianza triangolare." },
      { type: "tf", q: "Un triangolo equilatero ha tutti gli angoli di 60°.", answer: true, explain: "Tre angoli uguali: 180° : 3 = 60°." },
      { type: "mc", q: "In un triangolo rettangolo, il lato opposto all'angolo retto si chiama…", options: ["cateto", "base", "ipotenusa", "mediana"], answer: 2, explain: "È l'ipotenusa, il lato più lungo." },
      { type: "text", q: "Come si chiama il punto d'incontro delle tre altezze?", answer: ["ortocentro", "l'ortocentro"], explain: "Le altezze si incontrano nell'ortocentro." },
      { type: "mc", q: "Il centro del cerchio inscritto in un triangolo è…", options: ["il baricentro", "l'incentro", "il circocentro", "l'ortocentro"], answer: 1, explain: "L'incentro, intersezione delle bisettrici, è equidistante dai tre lati." },
      { type: "num", q: "Un angolo acuto di un triangolo rettangolo misura 28°. Quanto misura l'altro angolo acuto?", answer: 62, unit: "°", explain: "Gli angoli acuti di un triangolo rettangolo sono complementari: 90° − 28° = 62°." },
      { type: "num", q: "Due angoli interni misurano 45° e 70°. Quanto misura l'angolo esterno adiacente al terzo angolo?", answer: 115, unit: "°", explain: "L'angolo esterno è la somma dei due interni non adiacenti: 45° + 70° = 115°." },
      { type: "num", q: "Una mediana è lunga 18 cm. Quanto misura la parte compresa tra il vertice e il baricentro?", answer: 12, unit: "cm", explain: "Il baricentro divide la mediana in rapporto 2:1: 18 : 3 × 2 = 12 cm." },
      { type: "tf", q: "In un triangolo ottusangolo l'ortocentro si trova fuori dal triangolo.", answer: true, explain: "Due altezze cadono sui prolungamenti dei lati, quindi l'ortocentro è esterno." },
      { type: "num", q: "Un triangolo isoscele ha base 12 cm e lato obliquo 10 cm. Quanto misura il perimetro?", answer: 32, unit: "cm", explain: "12 + 10 + 10 = 32 cm." },
      { type: "order", q: "Metti in ordine i passi per trovare il baricentro.", items: ["Trova il punto medio di un lato", "Uniscilo al vertice opposto (mediana)", "Ripeti con un altro lato", "Il punto d'incontro delle mediane è il baricentro"], explain: "Bastano due mediane: la terza passa per lo stesso punto." }
    ],
    gen: [["triAngle", 3]]
  }
});
