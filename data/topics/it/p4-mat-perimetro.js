TOPIC('it', {
  id: "p4-mat-perimetro",
  title: "Il perimetro",
  intro: "Quanta rete serve per recintare l'orto? Quanto nastro per fare il giro di un regalo? Per rispondere bisogna misurare il <b>contorno</b> delle figure, cioè il loro <b>perimetro</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è il perimetro",
      html: `<p>Il <b>perimetro</b> è la <b>lunghezza del contorno</b> di una figura piana.</p>
<p>La parola viene dal greco: <i>perí</i> = "intorno" e <i>métron</i> = "misura". Perimetro vuol dire proprio "misura del giro intorno".</p>
<p>Per un poligono, il perimetro si trova in un modo semplicissimo:</p>
<p style="font-size:1.2em"><b>Perimetro = somma delle lunghezze di tutti i lati</b></p>
<p>Il perimetro è una <b>lunghezza</b>: si misura in <b>mm, cm, dm, m, km</b>… Si indica di solito con la lettera <b>P</b> (oppure 2p).</p>
<p>⚠️ Prima di sommare, controlla che tutti i lati siano nella <b>stessa unità di misura</b>! Non si possono sommare centimetri e metri.</p>`
    },
    {
      type: "svg",
      title: "La formica che fa il giro",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<polygon points="80,240 120,70 330,50 420,200 260,250" fill="#bbf7d0" stroke="#15803d" stroke-width="6" stroke-dasharray="16 6"/>
<text x="72" y="236" font-size="30">🐜</text>
<text x="80" y="155" font-size="20" fill="#1f2937" font-weight="bold">5 cm</text>
<text x="200" y="45" font-size="20" fill="#1f2937" font-weight="bold">6 cm</text>
<text x="385" y="115" font-size="20" fill="#1f2937" font-weight="bold">4 cm</text>
<text x="350" y="245" font-size="20" fill="#1f2937" font-weight="bold">5 cm</text>
<text x="140" y="270" font-size="20" fill="#1f2937" font-weight="bold">5 cm</text>
<text x="440" y="60" font-size="20" fill="#15803d" font-weight="bold">P = 5 + 6 + 4</text>
<text x="470" y="88" font-size="20" fill="#15803d" font-weight="bold">+ 5 + 5</text>
<text x="470" y="120" font-size="24" fill="#b91c1c" font-weight="bold">= 25 cm</text>
</svg>`,
      caption: "La formica parte da un vertice e cammina lungo tutti i lati fino a tornare al punto di partenza: la strada fatta è il perimetro."
    },
    {
      type: "text",
      title: "Le formule più usate",
      html: `<p>Per alcune figure ci sono delle scorciatoie, perché hanno lati uguali.</p>
<table>
<tr><th>Figura</th><th>Perimetro</th><th>Perché</th></tr>
<tr><td><b>Quadrato</b> (lato l)</td><td>P = l × 4</td><td>4 lati uguali</td></tr>
<tr><td><b>Rettangolo</b> (base b, altezza h)</td><td>P = (b + h) × 2</td><td>2 basi e 2 altezze uguali</td></tr>
<tr><td><b>Triangolo equilatero</b></td><td>P = l × 3</td><td>3 lati uguali</td></tr>
<tr><td><b>Triangolo isoscele</b></td><td>P = base + lato × 2</td><td>2 lati obliqui uguali</td></tr>
<tr><td><b>Rombo</b></td><td>P = l × 4</td><td>4 lati uguali</td></tr>
<tr><td><b>Parallelogramma</b></td><td>P = (a + b) × 2</td><td>lati opposti uguali</td></tr>
<tr><td><b>Poligono regolare</b> di n lati</td><td>P = l × n</td><td>n lati uguali</td></tr>
<tr><td>Poligono qualsiasi</td><td>somma di tutti i lati</td><td>—</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Gioca con il rettangolo",
      widget: "areaGrid",
      options: { w: 6, h: 3, max: 12 },
      caption: "Muovi i cursori: conta i quadretti del contorno e controlla il perimetro. Prova a trovare rettangoli diversi con lo stesso perimetro!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: calcolare il perimetro",
      questions: [
        { type: "num", q: "Un quadrato ha il lato di 7 cm. Qual è il suo perimetro?", answer: 28, unit: "cm", explain: "7 × 4 = 28 cm." },
        { type: "num", q: "Un rettangolo ha base 9 cm e altezza 4 cm. Qual è il perimetro?", answer: 26, unit: "cm", explain: "(9 + 4) × 2 = 13 × 2 = 26 cm." },
        { type: "tf", q: "Il perimetro si misura in metri, centimetri o altre unità di lunghezza.", answer: true, explain: "È una lunghezza: il contorno della figura." }
      ]
    },
    {
      type: "text",
      title: "Problemi al contrario: le formule inverse",
      html: `<p>A volte conosci il perimetro e devi trovare un lato. Si fa l'operazione <b>inversa</b>:</p>
<ul>
<li><b>Quadrato</b>: lato = P : 4. Se P = 36 cm → l = 36 : 4 = <b>9 cm</b>.</li>
<li><b>Triangolo equilatero</b>: lato = P : 3. Se P = 27 m → l = <b>9 m</b>.</li>
<li><b>Rettangolo</b>: base + altezza = P : 2, poi tolgo il lato che conosco. Se P = 30 cm e b = 10 cm → b + h = 15 → h = 15 − 10 = <b>5 cm</b>.</li>
<li><b>Poligono regolare</b>: lato = P : n (n = numero dei lati).</li>
</ul>
<p>Controlla sempre: rifai il calcolo "in avanti" e vedi se torna il perimetro di partenza!</p>`
    },
    {
      type: "svg",
      title: "Stesso perimetro, forme diverse",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#eff6ff"/>
<rect x="30" y="100" width="240" height="40" fill="#93c5fd" stroke="#1e3a8a" stroke-width="4"/>
<text x="150" y="90" font-size="18" text-anchor="middle" fill="#1f2937">6 cm</text>
<text x="290" y="127" font-size="18" fill="#1f2937">1 cm</text>
<text x="150" y="175" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">P = (6+1)×2 = 14 cm</text>
<rect x="380" y="60" width="160" height="120" fill="#fca5a5" stroke="#991b1b" stroke-width="4"/>
<text x="460" y="50" font-size="18" text-anchor="middle" fill="#1f2937">4 cm</text>
<text x="550" y="127" font-size="18" fill="#1f2937">3 cm</text>
<text x="460" y="215" font-size="20" text-anchor="middle" fill="#991b1b" font-weight="bold">P = (4+3)×2 = 14 cm</text>
<text x="300" y="260" font-size="18" text-anchor="middle" fill="#1f2937">Stesso giro di spago… ma dentro c'è più o meno spazio!</text>
</svg>`,
      caption: "Due rettangoli con lo stesso perimetro (14 cm) possono essere molto diversi: il perimetro misura il contorno, non lo spazio interno."
    },
    {
      type: "example",
      title: "Esempio pratico: la recinzione dell'orto",
      html: `<p>Il nonno ha un orto rettangolare lungo <b>12 m</b> e largo <b>8 m</b>. Vuole recintarlo con una rete, lasciando un cancello largo <b>1 m</b>. Quanti metri di rete deve comprare?</p>
<ol>
<li>Perimetro dell'orto: (12 + 8) × 2 = 20 × 2 = <b>40 m</b></li>
<li>Tolgo il cancello: 40 − 1 = <b>39 m</b> di rete</li>
</ol>
<p>Se la rete costa 3 € al metro, spenderà 39 × 3 = <b>117 €</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la cornice e il nastro",
      html: `<p>Sofia vuole incollare un nastro intorno a un suo disegno quadrato con il lato di <b>25 cm</b>. Ha un rotolo di nastro di <b>1 m</b>. Le basta?</p>
<ol>
<li>Perimetro del quadrato: 25 × 4 = <b>100 cm</b></li>
<li>1 m = 100 cm → il nastro basta <b>giusto giusto</b>, senza avanzi! 🎀</li>
</ol>
<p>E per un cartellone triangolare equilatero con il lato di 40 cm? 40 × 3 = 120 cm = 1,2 m: <b>non basta</b>, mancano 20 cm.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il campo da calcio",
      html: `<p>Prima della partita i bambini fanno 2 giri di corsa intorno a un campo da calcetto lungo <b>40 m</b> e largo <b>20 m</b>. Quanti metri corrono?</p>
<ol>
<li>Un giro = perimetro = (40 + 20) × 2 = <b>120 m</b></li>
<li>Due giri = 120 × 2 = <b>240 m</b></li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La costa infinita",
      html: `<p>Quanto è lunga la costa della Gran Bretagna? Dipende dal righello! Misurandola a tratti dritti di 200 km si ottengono circa 2400 km, ma con tratti di 50 km circa 3400 km: più piccolo è lo strumento, più "entri" in ogni insenatura e più la costa si allunga. Il matematico <b>Benoît Mandelbrot</b> studiò questo strano fatto nel 1967: è il "paradosso della linea costiera", da cui nacquero i <b>frattali</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La regina Didone e la pelle di bue",
      html: `<p>Una leggenda racconta che la regina fenicia <b>Didone</b>, arrivata in Africa, chiese tanta terra "quanta ne può contenere una pelle di bue". Tagliò la pelle in strisce sottilissime e con quella lunga corda circondò una collina intera, dove fondò <b>Cartagine</b>. Scelse la forma che con un certo perimetro racchiude più spazio: il <b>cerchio</b> (usando anche la riva del mare come confine)!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Perimetro = <b>somma di tutti i lati</b>. È una lunghezza (cm, m…).</li>
<li>Quadrato: <b>l × 4</b>. Rettangolo: <b>(b + h) × 2</b>. Triangolo equilatero: <b>l × 3</b>. Poligono regolare: <b>l × n</b>.</li>
<li>Formule inverse: lato del quadrato = <b>P : 4</b>; nel rettangolo b + h = <b>P : 2</b>.</li>
<li>Prima di sommare, porta tutti i lati nella <b>stessa unità di misura</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il perimetro",
      intro: "Il perimetro si può toccare, srotolare, camminare. Ecco altre strade per capirlo.",
      tabs: [
        {
          label: "🧵 Lo spago",
          html: `<p>Prendi uno spago e appoggialo bene lungo il bordo di un oggetto (un libro, il banco, un piatto). Fai un segno dove si chiude il giro. Ora <b>srotola</b> lo spago e misuralo con il righello: quella è la misura del perimetro!</p>
<p>Questo trucco funziona anche con le figure curve, come il bordo di un piatto, dove le formule dei poligoni non bastano.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fffbeb"/>
<rect x="40" y="40" width="160" height="110" fill="#fde68a" stroke="#b91c1c" stroke-width="6"/>
<text x="120" y="102" font-size="20" text-anchor="middle" fill="#78350f">libro</text>
<text x="230" y="105" font-size="36" fill="#1f2937">➜</text>
<line x1="290" y1="95" x2="570" y2="95" stroke="#b91c1c" stroke-width="6"/>
<rect x="290" y="115" width="280" height="30" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<g stroke="#0369a1" stroke-width="2">
<line x1="318" y1="115" x2="318" y2="130"/><line x1="346" y1="115" x2="346" y2="130"/><line x1="374" y1="115" x2="374" y2="130"/><line x1="402" y1="115" x2="402" y2="130"/><line x1="430" y1="115" x2="430" y2="135"/><line x1="458" y1="115" x2="458" y2="130"/><line x1="486" y1="115" x2="486" y2="130"/><line x1="514" y1="115" x2="514" y2="130"/><line x1="542" y1="115" x2="542" y2="130"/>
</g>
<text x="430" y="190" font-size="22" text-anchor="middle" fill="#b91c1c" font-weight="bold">lo spago srotolato = perimetro</text>
</svg>`
        },
        {
          label: "📏 Sulla retta dei numeri",
          html: `<p>Immagina di "aprire" il contorno di un rettangolo di base 5 e altezza 3 e di stenderlo su una retta. Fai un salto per ogni lato: <b>5, poi 3, poi 5, poi 3</b>. Dove arrivi? A <b>16</b>: è il perimetro! I salti sono a coppie uguali, per questo si può fare (5 + 3) × 2.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [5, 8, 13, 16] }
        },
        {
          label: "🚶 Contare i passi",
          html: `<p>In Finlandia e in molti Paesi del Nord la matematica si fa spesso <b>all'aperto</b>. Prova in cortile:</p>
<ol>
<li>Cammina lungo il bordo del campo o dell'aiuola e conta i passi.</li>
<li>Misura con il metro quanto è lungo un tuo passo (per esempio 50 cm).</li>
<li>Moltiplica: 80 passi × 50 cm = 4000 cm = <b>40 m</b> di perimetro.</li>
</ol>
<p>Gli antichi Romani misuravano le strade proprio così: <b>mille passi</b> (<i>mille passus</i>) facevano un <b>miglio</b>, circa 1480 m. Il loro "passo" era di due falcate.</p>`
        },
        {
          label: "🟦 Quadretti e stuzzicadenti",
          html: `<p>Disegna una figura sul quaderno a quadretti seguendo le righe. Il perimetro è il numero di <b>lati di quadretto</b> che stanno sul bordo.</p>
<p>Oppure costruisci figure con gli <b>stuzzicadenti</b>, tutti lunghi uguali: il perimetro è il numero di stuzzicadenti usati! Con 12 stuzzicadenti puoi fare un quadrato 3 × 3, un rettangolo 5 × 1, un rettangolo 4 × 2… tutti con perimetro 12, ma grandi in modo diverso.</p>`,
          widget: "areaGrid",
          options: { w: 3, h: 3, max: 10 }
        },
        {
          label: "🏛️ Come i Greci",
          html: `<p>Per i poligoni regolari i Greci notarono che il perimetro è sempre <b>lato × numero dei lati</b>. Il grande <b>Archimede</b> di Siracusa (III secolo a.C.) usò proprio i perimetri dei poligoni regolari con 6, 12, 24, 48 e 96 lati, disegnati dentro e fuori da un cerchio, per calcolare quanto è lunga la circonferenza. Scoprì che il "giro" del cerchio è poco più di <b>3 volte</b> il suo diametro: è il famoso numero π ≈ 3,14!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#faf5ff"/>
<circle cx="150" cy="120" r="90" fill="none" stroke="#7c3aed" stroke-width="4"/>
<polygon points="240,120 195,198 105,198 60,120 105,42 195,42" fill="#ddd6fe" fill-opacity="0.6" stroke="#5b21b6" stroke-width="4"/>
<circle cx="420" cy="120" r="90" fill="none" stroke="#7c3aed" stroke-width="4"/>
<polygon points="510,120 498,165 465,198 420,210 375,198 342,165 330,120 342,75 375,42 420,30 465,42 498,75" fill="#ddd6fe" fill-opacity="0.6" stroke="#5b21b6" stroke-width="3"/>
<text x="150" y="232" font-size="17" text-anchor="middle" fill="#1f2937">6 lati</text>
<text x="420" y="232" font-size="17" text-anchor="middle" fill="#1f2937">12 lati: quasi un cerchio!</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del perimetro: tocca un nodo e scopri il perché",
      nodes: [
        { id: "lunghezza", label: "Misure di lunghezza", x: 50, y: 6, color: "#64748b", html: "Il metro e i suoi multipli e sottomultipli: km, hm, dam, m, dm, cm, mm.", why: "Il metro nacque in Francia nel 1791, durante la Rivoluzione, come la decimilionesima parte della distanza fra Polo Nord ed Equatore. Prima ogni città aveva le sue misure (braccia, piedi, palmi) e i commerci erano un caos." },
        { id: "poligono", label: "Poligono", x: 18, y: 28, color: "#16a34a", html: "Figura piana chiusa da segmenti: i lati.", why: "Siccome il contorno è fatto di segmenti dritti, possiamo misurarli uno per uno con il righello." },
        { id: "perimetro", label: "Perimetro", x: 50, y: 40, color: "#dc2626", html: "La lunghezza del contorno di una figura: somma dei lati.", why: "Dal greco <i>perí</i> (intorno) + <i>métron</i> (misura). Gli agrimensori egizi lo calcolavano dopo ogni piena del Nilo per ridisegnare i confini dei campi e sapere quanto muro o siepe serviva." },
        { id: "somma", label: "Somma dei lati", x: 82, y: 28, color: "#f59e0b", html: "Il metodo che funziona sempre: sommo tutti i lati.", why: "Percorrere il contorno vuol dire percorrere ogni lato una volta sola: la strada totale è la somma dei pezzi." },
        { id: "quadrato", label: "Quadrato: l × 4", x: 15, y: 66, color: "#2563eb", html: "4 lati uguali: P = l × 4.", why: "La moltiplicazione è un'addizione ripetuta: l + l + l + l = l × 4." },
        { id: "rettangolo", label: "Rettangolo: (b + h) × 2", x: 40, y: 72, color: "#0ea5e9", html: "Due basi e due altezze uguali.", why: "I lati opposti del rettangolo sono uguali. Si può fare b × 2 + h × 2, oppure (b + h) × 2: per la <b>proprietà distributiva</b> il risultato è lo stesso." },
        { id: "regolare", label: "Regolare: l × n", x: 65, y: 72, color: "#a855f7", html: "Poligono regolare di n lati: P = l × n.", why: "Tutti i lati sono uguali: si somma n volte la stessa lunghezza. Archimede usò i perimetri dei poligoni regolari per avvicinarsi alla lunghezza del cerchio." },
        { id: "inverse", label: "Formule inverse", x: 88, y: 66, color: "#14b8a6", html: "Dal perimetro trovo il lato: l = P : 4 (quadrato), l = P : n (regolare).", why: "La divisione è l'operazione inversa della moltiplicazione: se l × 4 = P, allora P : 4 = l." },
        { id: "area", label: "Non è l'area!", x: 50, y: 94, color: "#be185d", html: "Il perimetro misura il bordo, l'area misura lo spazio interno.", why: "Figure con lo stesso perimetro possono avere aree diverse. Fra tutti i rettangoli con lo stesso perimetro, il quadrato ha l'area più grande; fra tutte le figure, il cerchio (problema isoperimetrico, già noto ai Greci)." }
      ],
      edges: [
        ["lunghezza", "perimetro", "si misura in"],
        ["poligono", "perimetro", "ha un"],
        ["perimetro", "somma", "si calcola con"],
        ["perimetro", "quadrato", "scorciatoia"],
        ["perimetro", "rettangolo", "scorciatoia"],
        ["perimetro", "regolare", "scorciatoia"],
        ["regolare", "inverse", "al contrario"],
        ["perimetro", "area", "da non confondere con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: formule inverse e problemi",
      questions: [
        { type: "num", q: "Il perimetro di un quadrato è 48 cm. Quanto misura il lato?", answer: 12, unit: "cm", explain: "48 : 4 = 12 cm." },
        { type: "num", q: "Un esagono regolare ha il lato di 5 m. Qual è il perimetro?", answer: 30, unit: "m", explain: "5 × 6 = 30 m." },
        { type: "mc", q: "Un rettangolo ha perimetro 20 cm e base 7 cm. L'altezza è…", options: ["3 cm", "6 cm", "13 cm"], answer: 0, explain: "20 : 2 = 10 (base + altezza); 10 − 7 = 3 cm." }
      ]
    }
  ],
  glossary: [
    { t: "Perimetro", d: "Lunghezza del contorno di una figura piana; nei poligoni è la somma dei lati." },
    { t: "Contorno", d: "La linea che delimita una figura." },
    { t: "Base", d: "Nel rettangolo, il lato su cui la figura \"appoggia\"." },
    { t: "Altezza", d: "Nel rettangolo, il lato perpendicolare alla base." },
    { t: "Formula", d: "Una regola scritta in breve con lettere e simboli, per esempio P = l × 4." },
    { t: "Formula inversa", d: "La regola per trovare un lato partendo dal perimetro." },
    { t: "Unità di misura", d: "La grandezza che si usa come confronto, per esempio il metro." },
    { t: "Isoperimetriche", d: "Figure che hanno lo stesso perimetro." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Il perimetro è…", options: ["lo spazio dentro una figura", "la lunghezza del contorno di una figura", "il numero dei lati"], answer: 1, explain: "Perimetro = misura del giro intorno." },
      { type: "num", q: "Un triangolo ha i lati di 6 cm, 8 cm e 10 cm. Qual è il perimetro?", answer: 24, unit: "cm", explain: "6 + 8 + 10 = 24 cm." },
      { type: "num", q: "Un quadrato ha il lato di 15 m. Qual è il perimetro?", answer: 60, unit: "m", explain: "15 × 4 = 60 m." },
      { type: "num", q: "Un rettangolo ha base 25 cm e altezza 10 cm. Qual è il perimetro?", answer: 70, unit: "cm", explain: "(25 + 10) × 2 = 70 cm." },
      { type: "num", q: "Un triangolo equilatero ha perimetro 36 dm. Quanto misura un lato?", answer: 12, unit: "dm", explain: "36 : 3 = 12 dm." },
      { type: "tf", q: "Due rettangoli con lo stesso perimetro hanno sempre la stessa forma.", answer: false, explain: "Per esempio 6×1 e 4×3 hanno entrambi perimetro 14 ma forme diverse." },
      { type: "mc", q: "Qual è la formula del perimetro del rettangolo?", options: ["b × h", "(b + h) × 2", "l × 4"], answer: 1, explain: "Due basi più due altezze." },
      { type: "num", q: "Un ottagono regolare ha il lato di 4 cm. Qual è il perimetro?", answer: 32, unit: "cm", explain: "4 × 8 = 32 cm." },
      { type: "num", q: "Un rettangolo ha perimetro 50 m e altezza 10 m. Quanto misura la base?", answer: 15, unit: "m", explain: "50 : 2 = 25; 25 − 10 = 15 m." },
      { type: "text", q: "Da quale lingua antica viene la parola \"perimetro\"?", answer: ["greco", "dal greco", "il greco"], explain: "Dal greco perí (intorno) e métron (misura)." },
      { type: "order", q: "Metti in ordine i passi per risolvere: \"Un quadrato ha il lato di 2 m. Quanti cm di nastro servono per fare il giro?\"", items: ["Trasformo il lato: 2 m = 200 cm", "Applico la formula: P = l × 4", "Calcolo 200 × 4 = 800", "Rispondo: servono 800 cm di nastro"], explain: "Prima uniformo le unità, poi applico la formula, calcolo e rispondo." },
      { type: "num", q: "Un rettangolo ha base 1 m e altezza 30 cm. Quanto è il perimetro in cm?", answer: 260, unit: "cm", explain: "1 m = 100 cm; (100 + 30) × 2 = 260 cm." }
    ],
    gen: [["perimRect", 3], ["lengthConv", 1]]
  }
});
