TOPIC('it', {
  id: "p3-mat-moltiplicazioni-colonna",
  title: "Moltiplicazioni in colonna",
  intro: "Conosci le tabelline? Allora sei pronto per moltiplicare anche i numeri grandi! ✖️ Impariamo la <b>moltiplicazione in colonna</b> con una cifra e con due cifre, il <b>riporto</b>, la <b>prova</b>… e scopriamo come moltiplicano in Giappone, in Russia e com'era al tempo degli Egizi.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Ripassiamo: che cos'è la moltiplicazione",
      html: `<p>La <b>moltiplicazione</b> è un'<b>addizione ripetuta</b> di numeri uguali: 4 × 3 = 4 + 4 + 4 = 12.</p>
<ul>
<li>I numeri che si moltiplicano si chiamano <b>fattori</b> (il primo si chiama anche <b>moltiplicando</b>, il secondo <b>moltiplicatore</b>).</li>
<li>Il risultato si chiama <b>prodotto</b>.</li>
</ul>
<p>Proprietà utili:</p>
<ul>
<li><b>Commutativa</b>: cambiando l'ordine dei fattori il prodotto non cambia: 4 × 3 = 3 × 4.</li>
<li><b>Distributiva</b>: posso «spezzare» un fattore: 23 × 4 = (20 × 4) + (3 × 4) = 80 + 12 = 92. È proprio il segreto della moltiplicazione in colonna!</li>
<li>Moltiplicare per <b>10</b>: si aggiunge uno <b>zero</b> alla fine: 34 × 10 = 340. Ogni cifra si sposta di un posto a sinistra (le unità diventano decine…).</li>
</ul>`
    },
    {
      type: "3d",
      title: "La moltiplicazione è un rettangolo",
      scene: "blocks",
      options: { mode: "array", a: 3, b: 4 },
      caption: "3 file da 4 cubetti = 12 cubetti. Gira il rettangolo: diventa 4 file da 3, ma i cubetti sono sempre 12 (proprietà commutativa). Usa i cursori per cambiare i fattori."
    },
    {
      type: "text",
      title: "In colonna con una cifra al moltiplicatore",
      html: `<p>Calcoliamo <b>247 × 3</b>. Si incolonnano i numeri e si moltiplica <b>partendo dalle unità</b>, da destra verso sinistra:</p>
<ol>
<li><b>Unità</b>: 3 × 7 = 21 → scrivo <b>1</b> nelle unità e porto <b>2</b> decine (il <b>riporto</b>) sopra le decine.</li>
<li><b>Decine</b>: 3 × 4 = 12, più il riporto 2 = 14 → scrivo <b>4</b> e porto <b>1</b> sopra le centinaia.</li>
<li><b>Centinaia</b>: 3 × 2 = 6, più il riporto 1 = <b>7</b> → scrivo 7.</li>
</ol>
<p>Risultato: 247 × 3 = <b>741</b>.</p>
<p><b>Attenzione:</b> il riporto si <b>aggiunge dopo</b> aver moltiplicato, non prima! (3 × 4 + 2, non 3 × 6.)</p>`
    },
    {
      type: "svg",
      title: "247 × 3 passo dopo passo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<g font-size="20" font-weight="bold" fill="#8b5cf6" text-anchor="middle"><text x="110" y="30">h</text></g>
<g font-size="20" font-weight="bold" fill="#3b82f6" text-anchor="middle"><text x="160" y="30">da</text></g>
<g font-size="20" font-weight="bold" fill="#22c55e" text-anchor="middle"><text x="210" y="30">u</text></g>
<text x="110" y="62" font-size="22" font-weight="bold" fill="#dc2626" text-anchor="middle">1</text>
<text x="160" y="62" font-size="22" font-weight="bold" fill="#dc2626" text-anchor="middle">2</text>
<g font-size="44" font-family="monospace" text-anchor="middle" fill="#1f2937">
<text x="110" y="110">2</text><text x="160" y="110">4</text><text x="210" y="110">7</text>
<text x="60" y="165">×</text><text x="210" y="165">3</text>
</g>
<line x1="40" y1="182" x2="240" y2="182" stroke="#1f2937" stroke-width="4"/>
<g font-size="44" font-family="monospace" text-anchor="middle" font-weight="bold" fill="#b45309">
<text x="110" y="235">7</text><text x="160" y="235">4</text><text x="210" y="235">1</text>
</g>
<g font-size="20" fill="#1f2937">
<text x="290" y="80">① 3 × 7 = 21 → scrivo 1, riporto 2</text>
<text x="290" y="135">② 3 × 4 = 12, + 2 = 14</text>
<text x="320" y="160">→ scrivo 4, riporto 1</text>
<text x="290" y="215">③ 3 × 2 = 6, + 1 = 7</text>
</g>
<text x="300" y="285" font-size="18" text-anchor="middle" fill="#dc2626">I numeri rossi piccoli sono i riporti.</text>
</svg>`,
      caption: "Si parte sempre dalle unità; i riporti si scrivono piccoli sopra la colonna successiva."
    },
    {
      type: "quiz",
      title: "Mini-quiz: con una cifra",
      questions: [
        { type: "num", q: "Quanto fa 132 × 3?", answer: 396, explain: "3 × 2 = 6; 3 × 3 = 9; 3 × 1 = 3 → 396 (nessun riporto)." },
        { type: "num", q: "Quanto fa 58 × 4?", answer: 232, explain: "4 × 8 = 32, scrivo 2 e riporto 3; 4 × 5 = 20 + 3 = 23 → 232." },
        { type: "mc", q: "In 46 × 7, dopo aver fatto 7 × 6 = 42, quanto riporto?", options: ["2", "4", "42"], answer: 1, explain: "Scrivo 2 nelle unità e riporto 4 decine." }
      ]
    },
    {
      type: "text",
      title: "In colonna con due cifre al moltiplicatore",
      html: `<p>Calcoliamo <b>34 × 12</b>. Il moltiplicatore 12 = <b>1 decina e 2 unità</b>, quindi facciamo <b>due moltiplicazioni</b> e poi le sommiamo:</p>
<ol>
<li><b>Prima riga</b> – moltiplico per le <b>unità</b> (2): 34 × 2 = <b>68</b>.</li>
<li><b>Seconda riga</b> – moltiplico per le <b>decine</b> (1, che vale 10): prima scrivo uno <b>0</b> (oppure un trattino «–») al posto delle unità, perché sto moltiplicando per 10; poi 34 × 1 = 34 → la riga diventa <b>340</b>.</li>
<li><b>Somma</b> le due righe (i <b>prodotti parziali</b>): 68 + 340 = <b>408</b>.</li>
</ol>
<p>Perché lo zero? Perché 34 × 12 = 34 × 2 + 34 × <b>10</b>. La seconda riga è 34 × 10 = 340, non 34!</p>`
    },
    {
      type: "svg",
      title: "34 × 12: i due prodotti parziali",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#eff6ff"/>
<g font-size="40" font-family="monospace" text-anchor="middle" fill="#1f2937">
<text x="160" y="55">3</text><text x="200" y="55">4</text>
<text x="70" y="105">×</text><text x="160" y="105">1</text><text x="200" y="105">2</text>
</g>
<line x1="60" y1="120" x2="230" y2="120" stroke="#1f2937" stroke-width="4"/>
<g font-size="40" font-family="monospace" text-anchor="middle" fill="#2563eb">
<text x="160" y="170">6</text><text x="200" y="170">8</text>
</g>
<g font-size="40" font-family="monospace" text-anchor="middle" fill="#16a34a">
<text x="120" y="220">3</text><text x="160" y="220">4</text>
</g>
<text x="200" y="220" font-size="40" font-family="monospace" text-anchor="middle" fill="#dc2626">0</text>
<line x1="60" y1="235" x2="230" y2="235" stroke="#1f2937" stroke-width="4"/>
<text x="70" y="200" font-size="34" text-anchor="middle" fill="#1f2937">+</text>
<g font-size="40" font-family="monospace" text-anchor="middle" font-weight="bold" fill="#b45309">
<text x="120" y="285">4</text><text x="160" y="285">0</text><text x="200" y="285">8</text>
</g>
<g font-size="20">
<text x="270" y="170" fill="#2563eb">← 34 × 2 unità = 68</text>
<text x="270" y="210" fill="#16a34a">← 34 × 1 decina = 340</text>
<text x="290" y="236" fill="#dc2626">(lo 0 rosso: × 10)</text>
<text x="270" y="285" fill="#b45309">← somma: 68 + 340 = 408</text>
</g>
</svg>`,
      caption: "Ogni cifra del moltiplicatore dà una riga. La riga delle decine si sposta di un posto a sinistra."
    },
    {
      type: "text",
      title: "Un esempio con i riporti e la prova",
      html: `<p><b>56 × 23</b>:</p>
<ol>
<li>56 × <b>3</b>: 3 × 6 = 18 (scrivo 8, riporto 1); 3 × 5 = 15 + 1 = 16 → <b>168</b>.</li>
<li>56 × <b>2</b> decine: scrivo 0; 2 × 6 = 12 (scrivo 2, riporto 1); 2 × 5 = 10 + 1 = 11 → <b>1120</b>.</li>
<li>168 + 1120 = <b>1288</b>.</li>
</ol>
<p><b>Consiglio:</b> quando passi alla seconda riga, <b>cancella i riporti</b> della prima, così non li confondi!</p>
<p><b>La prova</b>: grazie alla proprietà commutativa, puoi rifare il calcolo scambiando i fattori: 23 × 56 deve dare ancora 1288. Puoi anche fare una <b>stima</b>: 56 × 23 è circa 60 × 20 = 1200, quindi 1288 è un risultato ragionevole. Se ti fosse uscito 128 o 12 880, avresti capito subito che c'era un errore!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la gita della scuola",
      html: `<p>Per la gita partono <b>4 pullman</b>. Ogni pullman ha <b>54 posti</b>. Quanti bambini possono partire al massimo?</p>
<p>54 × 4: 4 × 4 = 16 (scrivo 6, riporto 1); 4 × 5 = 20 + 1 = 21 → <b>216 bambini</b>.</p>
<p>Il biglietto per il museo costa <b>12 €</b> a bambino. Se partono 216 bambini, quanto si spende?</p>
<p>216 × 12: 216 × 2 = 432; 216 × 10 = 2160; 432 + 2160 = <b>2592 €</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: le uova in negozio",
      html: `<p>Un negoziante riceve <b>18 cartoni</b> di uova. In ogni cartone ci sono <b>6 file da 5 uova</b>, cioè 30 uova. Quante uova in tutto?</p>
<p>Prima ogni cartone: 6 × 5 = 30. Poi tutti i cartoni: 30 × 18.</p>
<p>In colonna: 30 × 8 = 240; 30 × 1 decina = 300; 240 + 300 = <b>540 uova</b>.</p>
<p>Trucco: 30 × 18 = 3 × 18 × 10 = 54 × 10 = 540. Stesso risultato!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Chi ha inventato il segno ×",
      html: `<p>Il segno <b>×</b> fu usato per la prima volta in un libro stampato dal matematico inglese <b>William Oughtred</b>, nel <b>1631</b>. Al grande matematico tedesco Leibniz non piaceva, perché si confondeva con la lettera x, e preferiva il <b>puntino</b> (3 · 4). Ancora oggi in molti Paesi, e alle medie, si usano tutti e due!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La moltiplicazione «a gelosia»",
      html: `<p>Nell'Italia del Quattrocento si moltiplicava con un metodo a griglia chiamato «<b>per gelosia</b>», perché la griglia somiglia alle grate delle finestre (le «gelosie») da cui si poteva guardare fuori senza essere visti. Si trova nell'<b>Aritmetica di Treviso</b> (1478), uno dei primi libri di matematica stampati in Europa. Era arrivato dal mondo arabo e indiano.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Si comincia sempre dalle <b>unità</b>, da destra verso sinistra.</li>
<li>Il <b>riporto</b> si aggiunge <b>dopo</b> aver moltiplicato.</li>
<li>Con due cifre: una riga per le unità, una riga per le decine con lo <b>0</b> (o il trattino) al posto delle unità.</li>
<li>Alla fine si <b>sommano</b> i prodotti parziali.</li>
<li>Prova: scambia i fattori (proprietà commutativa) o fai una stima.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per moltiplicare",
      intro: "Il metodo in colonna non è l'unico! Nel mondo e nella storia si è moltiplicato in tanti modi. Prova quello che ti piace di più: tutti danno lo stesso risultato.",
      tabs: [
        {
          label: "🇯🇵 Metodo delle linee",
          html: `<p>In Giappone e in Cina si insegna anche a moltiplicare <b>disegnando linee</b>. Per 23 × 12: disegni 2 linee e 3 linee in una direzione (per 23) e 1 linea e 2 linee nell'altra direzione (per 12). Poi <b>conti gli incroci</b> in ogni zona: a sinistra le centinaia, al centro le decine, a destra le unità. 2 | 7 | 6 → <b>276</b>.</p>`,
          widget: "lineMultiply",
          options: { a: 23, b: 12 }
        },
        {
          label: "🕌 A gelosia (griglia)",
          html: `<p>Disegni una griglia con una casella per ogni coppia di cifre, tagliata in diagonale. In ogni casella scrivi il prodotto (decine sopra, unità sotto). Poi sommi lungo le diagonali, da destra. Niente riporti mentre moltiplichi! 47 × 36 = <b>1692</b>.</p>`,
          widget: "lattice",
          options: { a: 47, b: 36 }
        },
        {
          label: "🇷🇺 Il contadino russo",
          html: `<p>Basta saper <b>dimezzare</b> e <b>raddoppiare</b>! Scrivi i due numeri in colonna: a sinistra dimezzi (ignorando il resto), a destra raddoppi. Poi <b>cancelli</b> le righe dove a sinistra c'è un numero <b>pari</b> e sommi quello che resta a destra. 37 × 24 = <b>888</b>.</p>`,
          widget: "russianPeasant",
          options: { a: 37, b: 24 }
        },
        {
          label: "𓂀 Come gli Egizi",
          html: `<p>Gli scribi egizi, più di 3500 anni fa, moltiplicavano solo <b>raddoppiando</b>: 21, 42, 84, 168… Poi sceglievano i raddoppi giusti e li sommavano. Per 13 × 21: 13 = 1 + 4 + 8, quindi 21 + 84 + 168 = <b>273</b>.</p>`,
          widget: "egyptianMultiply",
          options: { a: 13, b: 21 }
        },
        {
          label: "🟦 Il rettangolo spezzato",
          html: `<p>Molti insegnanti in Inghilterra e negli Stati Uniti usano il «<b>box method</b>»: si spezzano i numeri in decine e unità e si disegna un rettangolo diviso in pezzi.</p>
<p>34 × 12 → (30 + 4) × (10 + 2): quattro rettangoli 300, 40, 60, 8. Somma: 300 + 40 + 60 + 8 = <b>408</b>. È esattamente quello che fa la colonna, ma si vede!</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#ffffff"/>
<text x="210" y="30" font-size="22" font-weight="bold" text-anchor="middle" fill="#1d4ed8">30</text>
<text x="400" y="30" font-size="22" font-weight="bold" text-anchor="middle" fill="#1d4ed8">4</text>
<text x="45" y="125" font-size="22" font-weight="bold" text-anchor="middle" fill="#15803d">10</text>
<text x="45" y="225" font-size="22" font-weight="bold" text-anchor="middle" fill="#15803d">2</text>
<rect x="80" y="45" width="260" height="150" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<rect x="340" y="45" width="120" height="150" fill="#fde68a" stroke="#1e3a8a" stroke-width="3"/>
<rect x="80" y="195" width="260" height="60" fill="#bbf7d0" stroke="#1e3a8a" stroke-width="3"/>
<rect x="340" y="195" width="120" height="60" fill="#fecaca" stroke="#1e3a8a" stroke-width="3"/>
<text x="210" y="128" font-size="30" font-weight="bold" text-anchor="middle" fill="#1e3a8a">300</text>
<text x="400" y="128" font-size="30" font-weight="bold" text-anchor="middle" fill="#78350f">40</text>
<text x="210" y="234" font-size="26" font-weight="bold" text-anchor="middle" fill="#14532d">60</text>
<text x="400" y="234" font-size="26" font-weight="bold" text-anchor="middle" fill="#7f1d1d">8</text>
<text x="530" y="130" font-size="22" text-anchor="middle" fill="#1f2937">= 408</text>
</svg>`
        },
        {
          label: "🧊 Cubetti 3D",
          html: `<p>Una moltiplicazione è un rettangolo di cubetti: 12 file da 4 = 48. Muovi i cursori e osserva: se raddoppi un fattore, il rettangolo diventa il doppio. Spezzando il rettangolo in due pezzi (10 file + 2 file) vedi le due righe della moltiplicazione in colonna!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 12, b: 4, max: 12 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della moltiplicazione in colonna: tocca un nodo e scopri il perché",
      nodes: [
        { id: "addizione", label: "Addizione ripetuta", x: 50, y: 6, color: "#2563eb", html: "4 × 3 = 4 + 4 + 4.", why: "La moltiplicazione nasce come scorciatoia: invece di sommare tante volte lo stesso numero, si usa un'operazione sola. Gli Egizi e i Babilonesi la usavano già 4000 anni fa per calcolare raccolti e terreni." },
        { id: "tabelline", label: "Tabelline", x: 18, y: 26, color: "#f59e0b", html: "I prodotti da 1 × 1 a 10 × 10.", why: "Sono i «mattoni» di ogni calcolo: ogni moltiplicazione in colonna è fatta di tante piccole tabelline. La tavola si chiama «pitagorica» in onore di Pitagora, anche se tavole simili esistevano già a Babilonia." },
        { id: "posizione", label: "Valore posizionale", x: 82, y: 26, color: "#8b5cf6", html: "Ogni cifra vale u, da o h a seconda del posto.", why: "Il metodo in colonna funziona solo grazie al sistema posizionale indo-arabo con lo zero, portato in Europa da Fibonacci nel 1202: con i numeri romani era quasi impossibile!" },
        { id: "distributiva", label: "Proprietà distributiva", x: 50, y: 45, color: "#16a34a", html: "34 × 12 = 34 × 10 + 34 × 2.", why: "È il vero «perché» della colonna: spezzo un fattore in decine e unità, moltiplico i pezzi e poi sommo. Ogni riga della colonna è uno di questi pezzi." },
        { id: "riporto", label: "Riporto", x: 18, y: 62, color: "#dc2626", html: "Le decine in più che passano alla colonna a sinistra.", why: "Se un prodotto supera 9, in una casella non ci sta: 10 unità diventano 1 decina e «salgono» al posto successivo. È il cambio del sistema decimale." },
        { id: "zero", label: "Lo zero (o trattino)", x: 82, y: 62, color: "#64748b", html: "Nella seconda riga si mette uno 0 sotto le unità.", why: "Quando moltiplico per la cifra delle decine sto moltiplicando per 10, 20, 30…: il risultato deve spostarsi di un posto a sinistra. Lo 0 tiene vuoto il posto delle unità." },
        { id: "parziali", label: "Prodotti parziali", x: 50, y: 74, color: "#0ea5e9", html: "Le righe che poi si sommano: 68 e 340.", why: "Sono i pezzi della proprietà distributiva scritti uno sotto l'altro, già incolonnati per essere sommati." },
        { id: "commutativa", label: "Proprietà commutativa e prova", x: 22, y: 90, color: "#a855f7", html: "a × b = b × a: rifaccio il calcolo scambiando i fattori.", why: "Un rettangolo di 3 × 4 cubetti girato diventa 4 × 3: i cubetti restano gli stessi. Per questo scambiare i fattori è un ottimo controllo." },
        { id: "altri", label: "Altri metodi", x: 78, y: 90, color: "#ec4899", html: "Linee giapponesi, gelosia, contadino russo, Egizi.", why: "Tutti usano le stesse idee (raddoppio, distributiva, valore posizionale) in modo diverso. Il metodo in colonna si è diffuso in Europa perché è veloce da scrivere su carta e occupa poco spazio." }
      ],
      edges: [
        ["addizione", "tabelline", "si memorizza nelle"],
        ["addizione", "posizione", "con numeri grandi usa il"],
        ["tabelline", "distributiva", "+"],
        ["posizione", "distributiva", "+"],
        ["distributiva", "riporto", "richiede il"],
        ["distributiva", "zero", "per le decine serve lo"],
        ["distributiva", "parziali", "produce i"],
        ["parziali", "commutativa", "si controlla con la"],
        ["parziali", "altri", "si possono fare anche con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: con due cifre",
      questions: [
        { type: "num", q: "Quanto fa 23 × 13?", answer: 299, explain: "23 × 3 = 69; 23 × 10 = 230; 69 + 230 = 299." },
        { type: "mc", q: "In 45 × 21, la seconda riga (per le decine) è…", options: ["90", "900", "45"], answer: 1, explain: "45 × 2 decine = 45 × 20 = 900." },
        { type: "tf", q: "Nella seconda riga si scrive uno 0 al posto delle unità perché si moltiplica per le decine.", answer: true, explain: "Moltiplicare per 10, 20, 30… sposta tutto di un posto a sinistra." }
      ]
    }
  ],
  glossary: [
    { t: "Moltiplicazione", d: "Operazione che corrisponde a un'addizione ripetuta di numeri uguali." },
    { t: "Fattori", d: "I numeri che si moltiplicano." },
    { t: "Prodotto", d: "Il risultato della moltiplicazione." },
    { t: "Riporto", d: "Le decine (o centinaia) che si spostano nella colonna di sinistra quando un prodotto supera 9." },
    { t: "Prodotto parziale", d: "Ciascuna riga ottenuta moltiplicando per una cifra del moltiplicatore." },
    { t: "Proprietà commutativa", d: "Cambiando l'ordine dei fattori il prodotto non cambia." },
    { t: "Proprietà distributiva", d: "Si può spezzare un fattore e moltiplicare le parti: 23 × 4 = 20 × 4 + 3 × 4." },
    { t: "Stima", d: "Calcolo approssimato per controllare se il risultato è ragionevole." },
    { t: "Prova", d: "Controllo del risultato, per esempio scambiando i fattori." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanto fa 213 × 3?", answer: 639, explain: "3 × 3 = 9; 3 × 1 = 3; 3 × 2 = 6 → 639." },
      { type: "num", q: "Quanto fa 125 × 4?", answer: 500, explain: "4 × 5 = 20 (0, riporto 2); 4 × 2 = 8 + 2 = 10 (0, riporto 1); 4 × 1 = 4 + 1 = 5 → 500." },
      { type: "num", q: "Quanto fa 27 × 14?", answer: 378, explain: "27 × 4 = 108; 27 × 10 = 270; 108 + 270 = 378." },
      { type: "mc", q: "Da quale cifra si comincia a moltiplicare in colonna?", options: ["dalle centinaia", "dalle unità", "dalle decine"], answer: 1, explain: "Si parte dalle unità, da destra verso sinistra." },
      { type: "tf", q: "Il riporto si aggiunge prima di moltiplicare.", answer: false, explain: "Prima si moltiplica, poi si aggiunge il riporto." },
      { type: "num", q: "Quanto fa 64 × 10?", answer: 640, explain: "Moltiplicando per 10 si aggiunge uno zero." },
      { type: "mc", q: "Quale calcolo serve per controllare 36 × 15 = 540?", options: ["15 × 36", "36 + 15", "540 − 36"], answer: 0, explain: "Proprietà commutativa: scambiando i fattori il prodotto deve essere uguale." },
      { type: "order", q: "Metti in ordine i passaggi di 34 × 12.", items: ["34 × 2 = 68", "scrivo 0 sotto le unità", "34 × 1 = 34 → 340", "68 + 340 = 408"], explain: "Prima le unità, poi le decine con lo zero, infine la somma." },
      { type: "num", q: "Un pullman ha 52 posti. Quanti posti ci sono in 6 pullman?", answer: 312, explain: "52 × 6: 6 × 2 = 12 (2, riporto 1); 6 × 5 = 30 + 1 = 31 → 312." },
      { type: "mc", q: "Una stima di 48 × 21 è circa…", options: ["100", "1000", "10 000"], answer: 1, explain: "48 è circa 50, 21 circa 20: 50 × 20 = 1000. Il risultato esatto è 1008." },
      { type: "num", q: "Quanto fa 45 × 21?", answer: 945, explain: "45 × 1 = 45; 45 × 20 = 900; 45 + 900 = 945." }
    ],
    gen: [["mult2", 3]]
  }
});
