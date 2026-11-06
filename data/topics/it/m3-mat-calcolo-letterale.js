TOPIC('it', {
  id: "m3-mat-calcolo-letterale",
  title: "Il calcolo letterale",
  intro: "Che cosa hanno in comune la formula dell'area del rettangolo (A = b × h), il prezzo di 3 quaderni e una regola che vale per tutti i numeri? Usano le <b>lettere</b> al posto dei numeri. Con il <b>calcolo letterale</b> impariamo a fare operazioni con <b>monomi</b> e <b>polinomi</b>: è la porta d'ingresso dell'algebra.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Perché usare le lettere",
      html: `<p>Una <b>lettera</b> in matematica rappresenta un <b>numero qualsiasi</b> (una <b>variabile</b>) oppure un numero che non conosciamo ancora (un'<b>incognita</b>). Serve a:</p>
<ul>
<li><b>generalizzare</b> una regola: "la somma di un numero e del suo opposto è 0" → <b>a + (−a) = 0</b>;</li>
<li>scrivere <b>formule</b>: perimetro del quadrato <b>P = 4l</b>; area del cerchio <b>A = πr²</b>;</li>
<li><b>tradurre</b> problemi: "il doppio di un numero aumentato di 5" → <b>2x + 5</b>.</li>
</ul>
<p>Un'espressione con numeri e lettere si chiama <b>espressione letterale</b>. Se sostituisci alle lettere dei numeri puoi calcolarne il <b>valore</b>: per x = 3, 2x + 5 = 2·3 + 5 = 11.</p>
<p>Convenzioni: il segno × tra numero e lettera si omette (2·x = <b>2x</b>), e si scrive prima il numero e poi le lettere in ordine alfabetico (<b>3ab²</b>, non b²3a).</p>`
    },
    {
      type: "text",
      title: "I monomi",
      html: `<p>Un <b>monomio</b> è un'espressione letterale in cui ci sono <b>solo moltiplicazioni</b> tra numeri e lettere (con esponenti naturali). Esempi: <b>5x²</b>, <b>−3ab</b>, <b>¾y</b>, <b>7</b>.</p>
<ul>
<li><b>Coefficiente</b>: la parte numerica, con il segno (in −3ab è −3). Se non c'è scritto, è 1 (x²y = 1·x²y).</li>
<li><b>Parte letterale</b>: le lettere con i loro esponenti (in −3ab è ab).</li>
<li><b>Grado</b>: la <b>somma degli esponenti</b> delle lettere. 5x²y³ ha grado 2 + 3 = <b>5</b>. Un numero da solo ha grado 0.</li>
</ul>
<p>Due monomi sono:</p>
<ul>
<li><b>simili</b> se hanno la <b>stessa parte letterale</b>: 4x²y e −7x²y;</li>
<li><b>uguali</b> se sono simili e hanno lo stesso coefficiente;</li>
<li><b>opposti</b> se sono simili e hanno coefficienti opposti: 3ab e −3ab.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Anatomia di un monomio",
      svg: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="260" fill="#f0fdf4"/>
<text x="320" y="130" font-size="78" text-anchor="middle" font-family="serif"><tspan fill="#dc2626">−5</tspan><tspan fill="#2563eb">a</tspan><tspan fill="#2563eb" font-size="42" dy="-34">3</tspan><tspan fill="#2563eb" dy="34">b</tspan><tspan fill="#2563eb" font-size="42" dy="-34">2</tspan></text>
<path d="M210 150 L210 175 L270 175 L270 150" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="240" y="205" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">coefficiente</text>
<text x="240" y="228" font-size="15" text-anchor="middle" fill="#dc2626">(numero con segno)</text>
<path d="M285 150 L285 175 L440 175 L440 150" fill="none" stroke="#2563eb" stroke-width="3"/>
<text x="362" y="205" font-size="18" text-anchor="middle" fill="#2563eb" font-weight="bold">parte letterale</text>
<text x="362" y="228" font-size="15" text-anchor="middle" fill="#2563eb">a³b²</text>
<rect x="470" y="40" width="150" height="80" rx="10" fill="#a855f7"/>
<text x="545" y="72" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">grado</text>
<text x="545" y="100" font-size="20" text-anchor="middle" fill="#fff">3 + 2 = 5</text>
<text x="545" y="150" font-size="14" text-anchor="middle" fill="#6b21a8">grado rispetto ad a: 3</text>
<text x="545" y="170" font-size="14" text-anchor="middle" fill="#6b21a8">grado rispetto a b: 2</text>
</svg>`,
      caption: "Ogni monomio ha un coefficiente, una parte letterale e un grado."
    },
    {
      type: "text",
      title: "Operazioni con i monomi",
      html: `<ul>
<li><b>Somma algebrica</b>: si possono sommare <b>solo monomi simili</b>. Si sommano i coefficienti e si lascia la parte letterale: 3x² + 5x² − x² = <b>7x²</b>. Se non sono simili la somma resta indicata: 2a + 3b non si può semplificare (non è un monomio, è un <b>polinomio</b>).</li>
<li><b>Moltiplicazione</b>: si moltiplicano i coefficienti e si moltiplicano le lettere <b>sommando gli esponenti</b> delle lettere uguali: (2a²b)·(−3ab³) = <b>−6a³b⁴</b>.</li>
<li><b>Divisione</b>: si dividono i coefficienti e si <b>sottraggono gli esponenti</b>: (12x⁵y²) : (4x²y) = <b>3x³y</b>. (Il risultato è un monomio solo se ogni esponente del divisore non supera quello del dividendo.)</li>
<li><b>Potenza</b>: si eleva il coefficiente e si <b>moltiplicano gli esponenti</b>: (−2a³b)² = <b>4a⁶b²</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: monomi",
      questions: [
        { type: "num", q: "Qual è il grado del monomio 7x³y⁴z?", answer: 8, explain: "3 + 4 + 1 = 8 (z ha esponente 1)." },
        { type: "mc", q: "Quale monomio è simile a −2ab²?", options: ["5a²b", "9ab²", "−2ab"], answer: 1, explain: "Ha la stessa parte letterale ab²." },
        { type: "mc", q: "(3x²)·(4x³) = ?", options: ["12x⁵", "12x⁶", "7x⁵"], answer: 0, explain: "3·4 = 12; x²·x³ = x⁵ (si sommano gli esponenti)." }
      ]
    },
    {
      type: "text",
      title: "I polinomi e le loro operazioni",
      html: `<p>Un <b>polinomio</b> è la <b>somma algebrica di monomi</b> non simili tra loro (dopo averlo "ridotto"). Con 2 termini è un <b>binomio</b> (a + b), con 3 un <b>trinomio</b> (x² + 2x + 1).</p>
<ul>
<li><b>Riduzione</b>: si sommano i monomi simili: 3x + 2y − x + 5y = <b>2x + 7y</b>.</li>
<li><b>Grado</b> del polinomio: il grado <b>maggiore</b> tra i suoi monomi. x³ + 4x² − 1 ha grado 3.</li>
<li><b>Ordinare</b>: si scrivono i termini secondo le potenze decrescenti di una lettera.</li>
<li><b>Somma/differenza</b> di polinomi: si tolgono le parentesi (attento al − che cambia i segni!) e si riduce: (2x + 3) − (x − 5) = 2x + 3 − x + 5 = <b>x + 8</b>.</li>
<li><b>Monomio × polinomio</b>: proprietà <b>distributiva</b>: 3a(2a − 4) = <b>6a² − 12a</b>.</li>
<li><b>Polinomio × polinomio</b>: ogni termine del primo per ogni termine del secondo: (x + 2)(x + 3) = x² + 3x + 2x + 6 = <b>x² + 5x + 6</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "I prodotti notevoli",
      html: `<p>Alcuni prodotti si incontrano così spesso che conviene ricordarli a memoria:</p>
<ul>
<li><b>Quadrato di un binomio</b>: (a + b)² = <b>a² + 2ab + b²</b> &nbsp;&nbsp; (a − b)² = <b>a² − 2ab + b²</b></li>
<li><b>Somma per differenza</b>: (a + b)(a − b) = <b>a² − b²</b></li>
</ul>
<p>⚠️ Errore classico: (a + b)² <b>non</b> è a² + b²! Manca il "doppio prodotto" 2ab. Verifica con i numeri: (3 + 2)² = 25, ma 3² + 2² = 13.</p>
<p>Trucco di calcolo mentale: 21 × 19 = (20 + 1)(20 − 1) = 400 − 1 = <b>399</b>.</p>`
    },
    {
      type: "svg",
      title: "Il quadrato del binomio, visto con le aree",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#fff7ed"/>
<rect x="60" y="40" width="180" height="180" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="240" y="40" width="80" height="180" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<rect x="60" y="220" width="180" height="80" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<rect x="240" y="220" width="80" height="80" fill="#f87171" stroke="#991b1b" stroke-width="3"/>
<text x="150" y="140" font-size="34" text-anchor="middle" fill="#fff" font-weight="bold">a²</text>
<text x="280" y="140" font-size="26" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="150" y="270" font-size="26" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="280" y="270" font-size="26" text-anchor="middle" fill="#fff" font-weight="bold">b²</text>
<text x="150" y="30" font-size="20" text-anchor="middle" fill="#1f2937">a</text>
<text x="280" y="30" font-size="20" text-anchor="middle" fill="#1f2937">b</text>
<text x="40" y="135" font-size="20" text-anchor="middle" fill="#1f2937">a</text>
<text x="40" y="265" font-size="20" text-anchor="middle" fill="#1f2937">b</text>
<text x="480" y="130" font-size="26" text-anchor="middle" fill="#1f2937" font-weight="bold">(a + b)² =</text>
<text x="480" y="175" font-size="26" text-anchor="middle" fill="#1f2937"><tspan fill="#2563eb">a²</tspan> + <tspan fill="#b45309">2ab</tspan> + <tspan fill="#dc2626">b²</tspan></text>
<text x="480" y="230" font-size="16" text-anchor="middle" fill="#78350f">i due rettangoli gialli</text>
<text x="480" y="252" font-size="16" text-anchor="middle" fill="#78350f">sono il "doppio prodotto"</text>
</svg>`,
      caption: "Un quadrato di lato a + b si divide in un quadrato a², un quadrato b² e due rettangoli ab. Lo sapevano già i Greci: è la proposizione II.4 degli Elementi di Euclide."
    },
    {
      type: "example",
      title: "Esempio pratico: dal problema all'espressione",
      html: `<p>Al bar un cornetto costa <b>c</b> euro e un cappuccino <b>p</b> euro. Una classe ordina 12 cornetti e 9 cappuccini; i professori 3 cornetti e 4 cappuccini.</p>
<ul>
<li>Spesa della classe: <b>12c + 9p</b></li>
<li>Spesa dei professori: <b>3c + 4p</b></li>
<li>Spesa totale: (12c + 9p) + (3c + 4p) = <b>15c + 13p</b> (si sommano i monomi simili: cornetti con cornetti, cappuccini con cappuccini!)</li>
<li>Se c = 1,20 € e p = 1,50 €: 15·1,20 + 13·1,50 = 18 + 19,50 = <b>37,50 €</b>.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: l'aiuola con il bordo",
      html: `<p>Un'aiuola quadrata ha lato <b>x</b> metri. Si aggiunge un bordo di ghiaia largo 1 m tutto intorno: il nuovo quadrato ha lato <b>x + 2</b>.</p>
<ul>
<li>Area totale: (x + 2)² = <b>x² + 4x + 4</b></li>
<li>Area della ghiaia = area totale − area dell'aiuola = x² + 4x + 4 − x² = <b>4x + 4</b></li>
<li>Se x = 5 m: ghiaia = 4·5 + 4 = <b>24 m²</b>. Verifica: 7² − 5² = 49 − 25 = 24 ✔️</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Chi ha inventato le lettere in matematica",
      html: `<p>Per secoli i problemi si scrivevano <b>a parole</b> (algebra "retorica"). Il greco <b>Diofanto</b> (III secolo d.C.) usò le prime abbreviazioni. Il francese <b>François Viète</b>, nel 1591, ebbe l'idea di usare le lettere sistematicamente: vocali per le incognite, consonanti per i numeri noti. Fu poi <b>Cartesio</b>, nella <i>Geometria</i> del 1637, a scegliere le ultime lettere dell'alfabeto (<b>x, y, z</b>) per le incognite e le prime (<b>a, b, c</b>) per i numeri noti: la convenzione che usiamo ancora oggi!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il nome \"algebra\"",
      html: `<p>La parola <b>algebra</b> viene dall'arabo <i>al-jabr</i>, "rimettere a posto, ricomporre" (lo stesso termine indicava chi aggiustava le ossa rotte!). È nel titolo del libro del matematico persiano <b>al-Khwārizmī</b>, scritto a Baghdad verso l'820 d.C. Dal suo nome deriva anche la parola <b>algoritmo</b>.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Monomio: solo prodotti. Grado = somma degli esponenti.</li>
<li>Si sommano <b>solo i monomi simili</b> (stessa parte letterale).</li>
<li>Prodotto: esponenti si <b>sommano</b>; quoziente: si <b>sottraggono</b>; potenza: si <b>moltiplicano</b>.</li>
<li>(a + b)² = a² + 2ab + b²; &nbsp;(a + b)(a − b) = a² − b².</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il calcolo letterale",
      intro: "Le lettere ti confondono? Prova a vederle come oggetti, come aree o come blocchi da costruire.",
      tabs: [
        {
          label: "🍎 Mele e pere",
          html: `<p>Immagina che <b>x</b> sia una mela 🍎 e <b>y</b> una pera 🍐.</p>
<ul>
<li>3x + 2x = 🍎🍎🍎 + 🍎🍎 = <b>5x</b> (5 mele).</li>
<li>3x + 2y = 🍎🍎🍎 + 🍐🍐: non posso dire "5 meleperte"! Resta <b>3x + 2y</b>. Ecco perché si sommano solo i monomi <b>simili</b>.</li>
<li>Ma attenzione: x e x² sono oggetti diversi (una mela e una cassetta quadrata di mele), quindi x + x² <b>non</b> fa 2x³!</li>
</ul>
<p>L'analogia funziona per somme e sottrazioni; per le moltiplicazioni meglio usare le aree (scheda successiva).</p>`
        },
        {
          label: "🇺🇸 Algebra tiles: le aree",
          html: `<p>Negli Stati Uniti si usano le <b>algebra tiles</b>: un quadrato grande = x², un rettangolo = x, un quadratino = 1.</p>
<p>Moltiplicare due polinomi significa costruire un <b>rettangolo</b> con quei lati e contare le tessere. (x + 2)(x + 3):</p>
<ul><li>1 quadrato x², 5 rettangoli x (2 + 3), 6 quadratini → <b>x² + 5x + 6</b>.</li></ul>
<p>Nella figura: base x + 3, altezza x + 2. Conta le tessere di ogni colore!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="40" width="150" height="150" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<text x="135" y="125" font-size="30" text-anchor="middle" fill="#fff" font-weight="bold">x²</text>
<g fill="#4ade80" stroke="#166534" stroke-width="3">
<rect x="210" y="40" width="40" height="150"/><rect x="250" y="40" width="40" height="150"/><rect x="290" y="40" width="40" height="150"/>
<rect x="60" y="190" width="150" height="40"/><rect x="60" y="230" width="150" height="40"/>
</g>
<g fill="#facc15" stroke="#854d0e" stroke-width="3">
<rect x="210" y="190" width="40" height="40"/><rect x="250" y="190" width="40" height="40"/><rect x="290" y="190" width="40" height="40"/>
<rect x="210" y="230" width="40" height="40"/><rect x="250" y="230" width="40" height="40"/><rect x="290" y="230" width="40" height="40"/>
</g>
<text x="135" y="30" font-size="18" text-anchor="middle">x</text><text x="270" y="30" font-size="18" text-anchor="middle">+ 3</text>
<text x="40" y="120" font-size="18" text-anchor="middle">x</text><text x="40" y="235" font-size="18" text-anchor="middle">+2</text>
<text x="460" y="110" font-size="22" text-anchor="middle" fill="#1e3a8a">1 × x²</text>
<text x="460" y="150" font-size="22" text-anchor="middle" fill="#166534">5 × x</text>
<text x="460" y="190" font-size="22" text-anchor="middle" fill="#854d0e">6 × 1</text>
<text x="460" y="240" font-size="22" text-anchor="middle" fill="#1f2937" font-weight="bold">x² + 5x + 6</text>
</svg>`
        },
        {
          label: "🧊 Monomi in 3D",
          html: `<p>Un monomio di <b>grado 3</b> come <b>abc</b> è il <b>volume</b> di una scatola con spigoli a, b, c. Un monomio di grado 2 (ab) è un'area, uno di grado 1 (a) una lunghezza. Ecco perché "grado" e "dimensioni" sono collegati!</p>
<p>Cambia le misure: se a = 4, b = 3, c = 2 il volume è 4·3·2 = 24 cubetti. Se raddoppi solo a, il volume raddoppia; se raddoppi tutti e tre, diventa 2³ = 8 volte più grande: (2a)(2b)(2c) = 8abc.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 2 }
        },
        {
          label: "📐 Il rettangolo che cresce",
          html: `<p>Un rettangolo di base <b>b</b> e altezza <b>h</b> ha area <b>bh</b> e perimetro <b>2b + 2h</b>: due polinomi! Usa il widget: aumenta la base di 1. L'area aumenta di <b>h</b> (una colonna di quadretti) e il perimetro di <b>2</b>. In lettere: (b + 1)h = bh + h.</p>`,
          widget: "areaGrid",
          options: { w: 5, h: 3, max: 12 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del calcolo letterale",
      nodes: [
        { id: "lettere", label: "Lettere al posto dei numeri", x: 50, y: 6, color: "#64748b", html: "Variabili e incognite che rappresentano numeri.", why: "Dall'algebra 'retorica' a parole (Babilonesi, al-Khwārizmī) si passò a quella 'sincopata' (Diofanto) e poi 'simbolica' con Viète (1591) e Cartesio (1637). Le lettere permettono di scrivere regole valide per tutti i numeri." },
        { id: "monomio", label: "Monomio", x: 25, y: 28, color: "#2563eb", html: "Prodotto di un coefficiente e di lettere con esponenti naturali.", why: "Dal greco <i>mónos</i>, \"uno solo\", e <i>nómos</i>, \"parte\": un termine solo. È il 'mattoncino' di tutte le espressioni algebriche." },
        { id: "polinomio", label: "Polinomio", x: 75, y: 28, color: "#16a34a", html: "Somma algebrica di monomi.", why: "Dal greco <i>polýs</i>, \"molti\": molti termini. Ogni numero scritto in base 10 è in fondo un polinomio: 345 = 3·10² + 4·10 + 5." },
        { id: "grado", label: "Grado", x: 10, y: 52, color: "#a855f7", html: "Somma degli esponenti (monomio) o grado massimo (polinomio).", why: "Collega l'algebra alla geometria: grado 1 = lunghezza, 2 = area, 3 = volume. I Greci infatti chiamavano 'quadrato' x² e 'cubo' x³." },
        { id: "simili", label: "Monomi simili", x: 38, y: 52, color: "#f59e0b", html: "Stessa parte letterale: si possono sommare.", why: "È la proprietà distributiva al contrario: 3x + 5x = (3 + 5)x = 8x. Se le parti letterali sono diverse, non c'è un fattore comune da raccogliere." },
        { id: "potenze", label: "Proprietà delle potenze", x: 62, y: 52, color: "#ef4444", html: "aᵐ·aⁿ = aᵐ⁺ⁿ; aᵐ:aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ.", why: "Derivano dalla definizione di potenza come moltiplicazione ripetuta: a²·a³ = (a·a)·(a·a·a) = a⁵. Le usava già Nicolas Chuquet nel 1484; la notazione con l'esponente in alto si deve a Cartesio." },
        { id: "distributiva", label: "Proprietà distributiva", x: 88, y: 52, color: "#0ea5e9", html: "a(b + c) = ab + ac: per moltiplicare i polinomi.", why: "È una proprietà dei numeri che si vede bene con le aree: un rettangolo di base b + c e altezza a si divide in due rettangoli ab e ac." },
        { id: "notevoli", label: "Prodotti notevoli", x: 75, y: 80, color: "#14b8a6", html: "(a + b)² = a² + 2ab + b²; (a + b)(a − b) = a² − b².", why: "Euclide li dimostrò con le figure negli Elementi (libro II, circa 300 a.C.), senza lettere algebriche: per lui erano proprietà di quadrati e rettangoli." },
        { id: "equazioni", label: "Verso le equazioni", x: 30, y: 85, color: "#7c3aed", html: "Il calcolo letterale serve a risolvere equazioni e a usare le formule.", why: "Per trovare un'incognita bisogna saper semplificare le espressioni: è il passo successivo dell'algebra." }
      ],
      edges: [
        ["lettere", "monomio", "formano"],
        ["monomio", "polinomio", "sommati danno"],
        ["monomio", "grado", "ha un"],
        ["monomio", "simili", "possono essere"],
        ["monomio", "potenze", "si moltiplicano con"],
        ["polinomio", "distributiva", "si moltiplicano con"],
        ["distributiva", "notevoli", "casi speciali"],
        ["polinomio", "equazioni", "servono per"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: polinomi",
      questions: [
        { type: "mc", q: "Riduci: 4a + 3b − a + 2b", options: ["3a + 5b", "8ab", "5a + 5b"], answer: 0, explain: "4a − a = 3a; 3b + 2b = 5b." },
        { type: "mc", q: "(x + 5)² = ?", options: ["x² + 25", "x² + 10x + 25", "x² + 5x + 25"], answer: 1, explain: "Quadrato del binomio: x² + 2·5·x + 25." },
        { type: "num", q: "Quanto fa 31 × 29 usando la somma per differenza?", answer: 899, explain: "(30 + 1)(30 − 1) = 900 − 1 = 899." }
      ]
    }
  ],
  glossary: [
    { t: "Espressione letterale", d: "Espressione con numeri e lettere legati da operazioni." },
    { t: "Monomio", d: "Espressione letterale con sole moltiplicazioni tra numeri e lettere." },
    { t: "Coefficiente", d: "La parte numerica di un monomio, con il segno." },
    { t: "Parte letterale", d: "Le lettere di un monomio con i loro esponenti." },
    { t: "Grado", d: "Somma degli esponenti delle lettere di un monomio; per un polinomio, il grado massimo dei suoi termini." },
    { t: "Monomi simili", d: "Monomi con la stessa parte letterale." },
    { t: "Polinomio", d: "Somma algebrica di monomi (binomio: 2 termini; trinomio: 3)." },
    { t: "Prodotti notevoli", d: "Prodotti con risultato noto, come il quadrato del binomio e la somma per differenza." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è il coefficiente di −x²y?", options: ["1", "−1", "2"], answer: 1, explain: "Quando c'è solo il segno meno, il coefficiente è −1." },
      { type: "num", q: "Grado del polinomio 3x⁴ − 2x²y³ + 5", answer: 5, explain: "I gradi dei termini sono 4, 5 e 0: il massimo è 5." },
      { type: "mc", q: "5ab − 8ab = ?", options: ["−3ab", "3ab", "−3a²b²"], answer: 0, explain: "Monomi simili: 5 − 8 = −3." },
      { type: "mc", q: "(−2x³)·(5x²y) = ?", options: ["−10x⁵y", "10x⁶y", "3x⁵y"], answer: 0, explain: "−2·5 = −10; x³·x² = x⁵; y resta." },
      { type: "mc", q: "(18a⁶b³) : (6a²b) = ?", options: ["3a³b³", "3a⁴b²", "12a⁴b²"], answer: 1, explain: "18 : 6 = 3; a⁶⁻² = a⁴; b³⁻¹ = b²." },
      { type: "mc", q: "(3a²)³ = ?", options: ["9a⁵", "27a⁶", "27a⁵"], answer: 1, explain: "3³ = 27; (a²)³ = a⁶." },
      { type: "tf", q: "(a + b)² = a² + b²", answer: false, explain: "Manca il doppio prodotto: (a + b)² = a² + 2ab + b²." },
      { type: "mc", q: "(x + 4)(x − 4) = ?", options: ["x² − 16", "x² + 16", "x² − 8x − 16"], answer: 0, explain: "Somma per differenza: x² − 4² = x² − 16." },
      { type: "num", q: "Calcola il valore di 2x² − 3x + 1 per x = 3.", answer: 10, explain: "2·9 − 9 + 1 = 18 − 9 + 1 = 10." },
      { type: "mc", q: "Il triplo di un numero diminuito di 7 si scrive…", options: ["3(x − 7)", "3x − 7", "x³ − 7"], answer: 1, explain: "Prima il triplo (3x), poi si toglie 7." },
      { type: "mc", q: "2a(3a − 5) = ?", options: ["6a² − 10a", "6a − 10", "5a² − 10a"], answer: 0, explain: "Proprietà distributiva: 2a·3a − 2a·5." },
      { type: "text", q: "Come si chiama un polinomio formato da due termini?", answer: ["binomio", "un binomio"], explain: "Binomio (bi = due)." }
    ],
    gen: [["power", 2]]
  }
});
