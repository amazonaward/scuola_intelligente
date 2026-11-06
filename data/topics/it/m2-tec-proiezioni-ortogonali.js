TOPIC('it', {
  id: "m2-tec-proiezioni-ortogonali",
  title: "Le proiezioni ortogonali",
  intro: "Come si spiega a un falegname, a un meccanico o a una stampante 3D com'è fatto un oggetto <b>tridimensionale</b> usando solo un foglio <b>piatto</b>? Con le <b>proiezioni ortogonali</b>: lo stesso oggetto disegnato <b>visto da davanti, dall'alto e di lato</b>, con regole precise che tutti i tecnici del mondo capiscono.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Che cosa sono",
      html: `<p><b>Proiettare</b> significa «gettare avanti»: immagina di proiettare l'ombra di un oggetto su una parete. Nella proiezione <b>ortogonale</b> i raggi di proiezione sono <b>paralleli</b> tra loro e <b>perpendicolari</b> (cioè a 90°, «ortogonali») al piano su cui disegniamo.</p>
<p>Il risultato è un disegno in cui le facce parallele al piano appaiono in <b>vera forma e vera grandezza</b> (in scala): niente prospettiva, niente deformazioni. Per questo si possono <b>misurare</b>.</p>
<p>Una sola vista però non basta: un cubo e un cilindro, visti di fronte, possono sembrare entrambi un quadrato! Per questo si usano <b>tre piani</b> perpendicolari tra loro, che formano un angolo come quello di una stanza (il <b>triedro</b>):</p>
<ul>
<li><b>P.V. – piano verticale</b>: riceve la <b>vista frontale</b> (o <b>prospetto</b>);</li>
<li><b>P.O. – piano orizzontale</b>: riceve la <b>vista dall'alto</b> (o <b>pianta</b>);</li>
<li><b>P.L. – piano laterale</b>: riceve la <b>vista laterale</b> (o <b>fianco</b>, <b>profilo</b>).</li>
</ul>
<p>La retta in cui si incontrano P.V. e P.O. si chiama <b>linea di terra</b> (L.T.).</p>`
    },
    {
      type: "widget",
      title: "Riconosci i piani del triedro",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<polygon points="120,30 420,30 420,190 120,190" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<polygon points="120,190 420,190 350,300 50,300" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<polygon points="420,30 420,190 350,300 350,140" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<line x1="120" y1="190" x2="420" y2="190" stroke="#dc2626" stroke-width="5"/>
<polygon points="200,210 270,210 270,250 200,250" fill="#fb923c" stroke="#9a3412" stroke-width="2"/>
<polygon points="200,210 270,210 290,180 220,180" fill="#fdba74" stroke="#9a3412" stroke-width="2"/>
<polygon points="270,210 290,180 290,220 270,250" fill="#ea580c" stroke="#9a3412" stroke-width="2"/>
<text x="500" y="80" font-size="16" fill="#334155">tocca i cerchi</text>
<text x="500" y="100" font-size="16" fill="#334155">e scegli il nome</text>
</svg>`,
        spots: [
          { x: 260, y: 100, label: "Piano verticale (P.V.)" },
          { x: 130, y: 270, label: "Piano orizzontale (P.O.)" },
          { x: 385, y: 160, label: "Piano laterale (P.L.)" },
          { x: 160, y: 190, label: "Linea di terra (L.T.)" },
          { x: 240, y: 230, label: "Oggetto da rappresentare" }
        ]
      },
      caption: "I tre piani formano un angolo come le pareti e il pavimento di una stanza. L'oggetto si mette nell'angolo e si «proietta» su ciascun piano."
    },
    {
      type: "text",
      title: "Il metodo passo per passo",
      html: `<ol>
<li><b>Osserva l'oggetto</b> e scegli la faccia più significativa come <b>vista frontale</b> (quella che mostra meglio la forma).</li>
<li>Disegna con la matita leggera la <b>linea di terra</b> orizzontale e una linea verticale: dividono il foglio in quattro quadranti.</li>
<li>Nel quadrante <b>in alto a sinistra</b> disegna la <b>vista frontale</b> (P.V.), misurando larghezza e altezza.</li>
<li><b>Sotto</b> la vista frontale disegna la <b>vista dall'alto</b> (P.O.): larghezza (uguale a quella del prospetto, la riporti con linee verticali) e profondità.</li>
<li><b>A destra</b> della vista frontale disegna la <b>vista laterale sinistra</b> (P.L.): altezza (la riporti con linee orizzontali) e profondità.</li>
<li>Per riportare la <b>profondità</b> dalla pianta al fianco usa una linea a <b>45°</b> nel quadrante in basso a destra (oppure il compasso): le linee orizzontali della pianta la toccano e «girano» diventando verticali.</li>
<li><b>Ripassa</b> gli spigoli in vista con linea continua grossa; gli spigoli <b>nascosti</b> con linea tratteggiata; gli <b>assi</b> di simmetria con linea mista (tratto-punto).</li>
</ol>
<p>Questo è il <b>metodo europeo</b> (detto anche «del primo diedro», norma ISO metodo E).</p>`
    },
    {
      type: "svg",
      title: "Le tre viste di un gradino (metodo europeo)",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#ffffff"/>
<line x1="20" y1="150" x2="380" y2="150" stroke="#dc2626" stroke-width="2"/>
<line x1="220" y1="20" x2="220" y2="300" stroke="#dc2626" stroke-width="2"/>
<line x1="220" y1="150" x2="330" y2="260" stroke="#64748b" stroke-width="2"/>
<g stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4">
<line x1="60" y1="130" x2="60" y2="170"/>
<line x1="120" y1="130" x2="120" y2="170"/>
<line x1="180" y1="130" x2="180" y2="170"/>
<line x1="180" y1="50" x2="240" y2="50"/>
<line x1="180" y1="90" x2="240" y2="90"/>
<line x1="180" y1="170" x2="240" y2="170"/>
<line x1="180" y1="230" x2="300" y2="230"/>
<line x1="240" y1="150" x2="240" y2="170"/>
<line x1="300" y1="130" x2="300" y2="230"/>
</g>
<polygon points="60,50 120,50 120,90 180,90 180,130 60,130" fill="#bfdbfe" stroke="#0f172a" stroke-width="4"/>
<rect x="60" y="170" width="120" height="60" fill="#bbf7d0" stroke="#0f172a" stroke-width="4"/>
<line x1="120" y1="170" x2="120" y2="230" stroke="#0f172a" stroke-width="4"/>
<rect x="240" y="50" width="60" height="80" fill="#fde68a" stroke="#0f172a" stroke-width="4"/>
<line x1="240" y1="90" x2="300" y2="90" stroke="#0f172a" stroke-width="3" stroke-dasharray="8 5"/>
<text x="120" y="40" font-size="15" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Vista frontale (P.V.)</text>
<text x="120" y="255" font-size="15" font-weight="bold" fill="#15803d" text-anchor="middle">Vista dall'alto (P.O.)</text>
<text x="270" y="40" font-size="15" font-weight="bold" fill="#b45309" text-anchor="middle">Vista sinistra (P.L.)</text>
<text x="300" y="285" font-size="14" fill="#475569" text-anchor="middle">linea a 45°</text>
<polygon points="410,140 455,140 455,170 500,170 500,200 410,200" fill="#bfdbfe" stroke="#0f172a" stroke-width="2"/>
<polygon points="410,140 455,140 491,112 446,112" fill="#93c5fd" stroke="#0f172a" stroke-width="2"/>
<polygon points="455,140 491,112 491,142 455,170" fill="#60a5fa" stroke="#0f172a" stroke-width="2"/>
<polygon points="455,170 500,170 536,142 491,142" fill="#93c5fd" stroke="#0f172a" stroke-width="2"/>
<polygon points="500,170 536,142 536,172 500,200" fill="#60a5fa" stroke="#0f172a" stroke-width="2"/>
<text x="480" y="255" font-size="15" fill="#0f172a" text-anchor="middle">l'oggetto (gradino)</text>
<text x="300" y="310" font-size="14" fill="#0f172a" text-anchor="middle">tratteggio = spigolo nascosto</text>
</svg>`,
      caption: "La vista dall'alto sta sotto il prospetto, la vista laterale sinistra sta alla sua destra. Nella vista laterale lo spigolo del gradino è nascosto dietro il blocco alto: per questo è tratteggiato."
    },
    {
      type: "3d",
      title: "Gira il solido e immagina le tre viste",
      scene: "solid",
      options: { shape: "box", w: 3, h: 1.5, d: 2, color: "#60a5fa", labels: true, shapes: ["box", "cube", "prism", "cylinder", "pyramid", "cone"] },
      caption: "Ruota il solido finché lo vedi esattamente di fronte, poi dall'alto, poi di lato: quello che vedi in ciascun caso è una proiezione ortogonale. Prova a cambiare solido."
    },
    {
      type: "quiz",
      title: "Mini-quiz: i piani e le viste",
      questions: [
        { type: "mc", q: "Nel metodo europeo, dove si disegna la vista dall'alto?", options: ["Sopra la vista frontale", "Sotto la vista frontale", "A sinistra della vista frontale"], answer: 1, explain: "Nel metodo europeo (primo diedro) la pianta sta sotto il prospetto." },
        { type: "mc", q: "Come si disegna uno spigolo nascosto?", options: ["Linea continua grossa", "Linea tratteggiata", "Linea tratto-punto"], answer: 1, explain: "Gli spigoli nascosti si rappresentano con una linea tratteggiata." },
        { type: "tf", q: "Nella proiezione ortogonale i raggi di proiezione sono perpendicolari al piano.", answer: true, explain: "Ortogonale significa proprio «ad angolo retto»." }
      ]
    },
    {
      type: "example",
      title: "Esempio pratico: il parallelepipedo",
      html: `<p>Un parallelepipedo (come un mattone) misura <b>8 cm</b> di lunghezza, <b>5 cm</b> di profondità e <b>3 cm</b> di altezza.</p>
<ul>
<li><b>Vista frontale</b>: rettangolo largo 8 cm e alto 3 cm.</li>
<li><b>Vista dall'alto</b>: rettangolo largo 8 cm e profondo 5 cm, disegnato sotto il primo.</li>
<li><b>Vista laterale</b>: rettangolo profondo 5 cm e alto 3 cm, a destra del primo.</li>
</ul>
<p>Osserva: ogni misura compare in <b>due viste</b>. La larghezza (8) è nel prospetto e nella pianta, l'altezza (3) nel prospetto e nel fianco, la profondità (5) nella pianta e nel fianco. È il «controllo» che ti dice se hai disegnato bene!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: cilindro e piramide",
      html: `<ul>
<li><b>Cilindro in piedi</b> (diametro 4 cm, altezza 6 cm): vista frontale = <b>rettangolo</b> 4 × 6 con l'asse verticale tratto-punto; vista laterale = stesso rettangolo; vista dall'alto = <b>cerchio</b> di diametro 4 cm con due assi a croce.</li>
<li><b>Piramide a base quadrata</b> (lato 5 cm, altezza 6 cm): vista frontale e laterale = <b>triangoli</b> isosceli con base 5 e altezza 6; vista dall'alto = <b>quadrato</b> 5 × 5 con le due <b>diagonali</b>, che sono gli spigoli che salgono al vertice.</li>
</ul>
<p>Due viste uguali (rettangolo, rettangolo) non bastano a capire se l'oggetto è un cilindro o un parallelepipedo: serve la terza!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il segreto militare di Monge",
      html: `<p>Il metodo delle proiezioni su piani perpendicolari fu messo a punto dal matematico francese <b>Gaspard Monge</b> (1746–1818), quando era un giovane disegnatore della scuola militare di Mézières. Con il suo metodo si potevano progettare le <b>fortificazioni</b> molto più velocemente che con i calcoli.</p>
<p>Era considerato così utile che per anni l'esercito francese lo tenne <b>segreto</b>! Solo dopo la Rivoluzione Monge poté insegnarlo pubblicamente, e nel 1799 uscì il suo libro <i>Géométrie descriptive</i> (geometria descrittiva).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Europa contro America",
      html: `<p>Negli <b>Stati Uniti</b> e in Canada si usa un altro metodo, detto «americano» o del <b>terzo diedro</b>: la vista dall'alto si mette <b>sopra</b> il prospetto e la vista da destra a <b>destra</b>. Le viste sono le stesse, cambia solo la loro posizione sul foglio.</p>
<p>Per evitare errori, nel cartiglio dei disegni tecnici si mette un simbolo: un <b>tronco di cono</b> visto di fronte e di lato. Dalla posizione dei due disegni si capisce subito quale metodo è stato usato. Un errore può costare caro: un pezzo prodotto «a specchio» non si monta!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Proiezione ortogonale: raggi paralleli e perpendicolari al piano → vera forma, nessuna prospettiva.</li>
<li>Tre piani: <b>P.V.</b> (vista frontale), <b>P.O.</b> (vista dall'alto), <b>P.L.</b> (vista laterale).</li>
<li>Metodo europeo: pianta <b>sotto</b> il prospetto, fianco sinistro <b>a destra</b> del prospetto.</li>
<li>Larghezza, altezza e profondità compaiono ciascuna in due viste: riportale con linee di richiamo e linea a 45°.</li>
<li>Linee: continua grossa = in vista; tratteggiata = nascosta; tratto-punto = assi.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le proiezioni",
      intro: "Le proiezioni ortogonali si capiscono meglio con le mani e con gli occhi. Ecco alcuni modi diversi per «vederle».",
      tabs: [
        {
          label: "📦 La scatola che si apre",
          html: `<p>Prendi una scatola da scarpe senza coperchio e metti dentro un oggetto (un dado, un tappo, un pezzo di LEGO). Immagina di disegnare su ogni parete <b>l'ombra</b> dell'oggetto vista da davanti, dall'alto e di lato.</p>
<p>Ora <b>apri la scatola</b> e stendila sul tavolo: la parete di fondo resta ferma (P.V.), il fondo si ribalta <b>in giù</b> (P.O. sotto) e la parete laterale si ribalta <b>di lato</b> (P.L. a destra). Ecco perché le viste stanno proprio in quelle posizioni!</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fefce8"/>
<rect x="150" y="20" width="160" height="120" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="150" y="140" width="160" height="110" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<rect x="310" y="20" width="110" height="120" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="230" y="85" font-size="20" font-weight="bold" fill="#1e3a8a" text-anchor="middle">P.V.</text>
<text x="230" y="200" font-size="20" font-weight="bold" fill="#14532d" text-anchor="middle">P.O.</text>
<text x="365" y="85" font-size="20" font-weight="bold" fill="#78350f" text-anchor="middle">P.L.</text>
<path d="M120 60 Q 90 160 140 220" fill="none" stroke="#dc2626" stroke-width="3"/>
<polygon points="140,220 128,206 146,204" fill="#dc2626"/>
<text x="20" y="150" font-size="16" fill="#b91c1c">il fondo</text>
<text x="20" y="170" font-size="16" fill="#b91c1c">si ribalta giù</text>
<path d="M430 30 Q 500 20 520 90" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="440" y="130" font-size="16" fill="#b91c1c">la parete</text>
<text x="440" y="150" font-size="16" fill="#b91c1c">si apre di lato</text>
</svg>`
        },
        {
          label: "🔦 Ombre al sole",
          html: `<p>Il <b>Sole</b> è così lontano che i suoi raggi arrivano praticamente <b>paralleli</b>. A mezzogiorno d'estate, quando il Sole è alto, l'ombra di un oggetto su un pavimento è quasi la sua <b>vista dall'alto</b>.</p>
<p>Una torcia vicina invece fa raggi che si allargano: l'ombra diventa più grande dell'oggetto. Questa è la <b>proiezione centrale</b>, quella della prospettiva e della fotografia. La proiezione ortogonale è come un «sole perfetto» che illumina sempre a 90° rispetto al piano.</p>`
        },
        {
          label: "🇺🇸 Il metodo americano",
          html: `<p>Nel metodo americano (terzo diedro) immagini che il piano sia <b>tra te e l'oggetto</b>, come un vetro su cui ricalchi quello che vedi. Allora:</p>
<ul>
<li>la vista dall'alto si disegna <b>sopra</b> il prospetto;</li>
<li>la vista da destra si disegna <b>a destra</b>.</li>
</ul>
<p>Nel metodo europeo invece l'oggetto sta <b>tra te e il piano</b> e ne proietti «l'ombra» dietro. Le figure sono identiche: cambia solo la loro sistemazione sul foglio. A molti ragazzi il metodo americano sembra più intuitivo: «disegno quello che vedo dove lo vedo».</p>`
        },
        {
          label: "🧊 Gira il solido 3D",
          html: `<p>Scegli un solido, guardalo esattamente di fronte, poi dall'alto, poi di lato. Disegna su un foglio quello che vedi in ciascuna posizione: hai fatto le tre proiezioni!</p>`,
          scene: "solid",
          options: { shape: "cylinder", r: 1, h: 2, color: "#f97316", labels: true, shapes: ["cylinder", "cone", "pyramid", "prism", "box"] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle proiezioni ortogonali",
      nodes: [
        { id: "geomdesc", label: "Geometria descrittiva", x: 50, y: 7, color: "#7c3aed", html: "La parte della geometria che rappresenta oggetti 3D su un foglio 2D in modo esatto.", why: "Fu sistemata da Gaspard Monge alla fine del 1700. Prima di lui architetti e scalpellini usavano già piante e alzati (lo facevano i Romani e i costruttori delle cattedrali), ma senza un metodo matematico unico." },
        { id: "proiezione", label: "Proiezione ortogonale", x: 50, y: 28, color: "#2563eb", html: "Raggi paralleli tra loro e perpendicolari al piano di proiezione.", why: "Se i raggi sono perpendicolari, ogni segmento parallelo al piano conserva la sua lunghezza: per questo il disegno si può misurare. È la stessa idea dell'ombra con il sole (raggi paralleli)." },
        { id: "triedro", label: "Triedro (3 piani)", x: 50, y: 48, color: "#0ea5e9", html: "P.V., P.O. e P.L., perpendicolari tra loro come pareti e pavimento.", why: "Lo spazio ha tre dimensioni (larghezza, altezza, profondità): ogni vista ne mostra due, quindi con tre viste ogni dimensione è rappresentata almeno due volte." },
        { id: "pv", label: "Vista frontale", x: 15, y: 66, color: "#3b82f6", html: "Sul piano verticale: mostra larghezza e altezza.", why: "Si sceglie la faccia che descrive meglio l'oggetto: è il «ritratto» principale da cui dipendono le altre viste." },
        { id: "po", label: "Vista dall'alto", x: 38, y: 82, color: "#16a34a", html: "Sul piano orizzontale: mostra larghezza e profondità.", why: "È la «pianta», la stessa che si usa per le case e le città: l'idea di guardare dall'alto è antichissima (piante di città già nell'antica Mesopotamia)." },
        { id: "pl", label: "Vista laterale", x: 62, y: 82, color: "#f59e0b", html: "Sul piano laterale: mostra profondità e altezza.", why: "Serve a togliere i dubbi che le prime due viste lasciano: per esempio fra un cilindro e un prisma." },
        { id: "linee", label: "Tipi di linea", x: 85, y: 66, color: "#ef4444", html: "Continua grossa (in vista), tratteggiata (nascosta), tratto-punto (assi).", why: "Le norme tecniche (UNI in Italia, ISO nel mondo) fissano i tipi di linea così che chiunque, in qualunque Paese, legga il disegno allo stesso modo." },
        { id: "metodi", label: "Metodo europeo e americano", x: 85, y: 92, color: "#64748b", html: "Europeo (primo diedro): pianta sotto. Americano (terzo diedro): pianta sopra.", why: "Dipende da dove si immagina il piano: dietro l'oggetto (europeo, come un'ombra) o davanti (americano, come un vetro). Entrambi sono ammessi dalla norma ISO 128, purché indicati con il simbolo." },
        { id: "monge", label: "Gaspard Monge", x: 15, y: 92, color: "#a855f7", html: "Matematico francese (1746–1818), padre della geometria descrittiva.", why: "Lavorando sulle fortificazioni a Mézières inventò un metodo grafico rapido. Il suo libro <i>Géométrie descriptive</i> (1799) fu la base dell'insegnamento del disegno tecnico nelle scuole di ingegneria." }
      ],
      edges: [
        ["geomdesc", "proiezione", "usa"],
        ["proiezione", "triedro", "su"],
        ["triedro", "pv", "dà"],
        ["triedro", "po", "dà"],
        ["triedro", "pl", "dà"],
        ["proiezione", "linee", "si disegna con"],
        ["triedro", "metodi", "si dispone con"],
        ["monge", "geomdesc", "fondò"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: leggere le viste",
      questions: [
        { type: "mc", q: "Un oggetto ha vista frontale = rettangolo, vista laterale = rettangolo, vista dall'alto = cerchio. Che cos'è?", options: ["Un cono", "Un cilindro in piedi", "Una sfera"], answer: 1, explain: "Solo il cilindro in piedi ha pianta circolare e prospetti rettangolari." },
        { type: "num", q: "Un parallelepipedo misura 6 × 4 × 2 cm (lunghezza × profondità × altezza). Quanti cm² è l'area della sua vista dall'alto?", answer: 24, unit: "cm²", explain: "Dall'alto si vedono lunghezza e profondità: 6 × 4 = 24 cm²." },
        { type: "tf", q: "La profondità di un oggetto compare nella vista frontale.", answer: false, explain: "La vista frontale mostra larghezza e altezza; la profondità compare in pianta e nel fianco." }
      ]
    }
  ],
  glossary: [
    { t: "Proiezione ortogonale", d: "Rappresentazione con raggi paralleli perpendicolari al piano: le misure restano vere." },
    { t: "Triedro", d: "I tre piani perpendicolari P.V., P.O. e P.L. su cui si proietta l'oggetto." },
    { t: "Prospetto", d: "Vista frontale, sul piano verticale." },
    { t: "Pianta", d: "Vista dall'alto, sul piano orizzontale." },
    { t: "Fianco (profilo)", d: "Vista laterale, sul piano laterale." },
    { t: "Linea di terra", d: "Retta in cui si incontrano il piano verticale e quello orizzontale." },
    { t: "Linee di richiamo", d: "Linee sottili che riportano le misure da una vista all'altra." },
    { t: "Linea a 45°", d: "Retta che serve a trasferire la profondità dalla pianta al fianco." },
    { t: "Spigolo nascosto", d: "Spigolo che non si vede da quel punto di vista: si disegna tratteggiato." },
    { t: "Geometria descrittiva", d: "Scienza che rappresenta oggetti 3D in 2D in modo esatto, fondata da Gaspard Monge." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa significa «ortogonale»?", options: ["Obliquo", "Perpendicolare, ad angolo retto", "Curvo"], answer: 1, explain: "Ortogonale = perpendicolare (dal greco orthós, «diritto», e gonía, «angolo»)." },
      { type: "mc", q: "Su quale piano si proietta la vista frontale?", options: ["Piano orizzontale", "Piano verticale", "Piano laterale"], answer: 1, explain: "La vista frontale (prospetto) sta sul piano verticale." },
      { type: "mc", q: "Nel metodo europeo la vista laterale sinistra si disegna…", options: ["a destra del prospetto", "a sinistra del prospetto", "sopra il prospetto"], answer: 0, explain: "Nel primo diedro la vista da sinistra va a destra della vista frontale." },
      { type: "tf", q: "Gli assi di simmetria si disegnano con la linea tratto-punto.", answer: true, explain: "Linea mista fine tratto-punto = assi e linee di centro." },
      { type: "num", q: "Un cubo ha lo spigolo di 5 cm. Quanti cm² è l'area della sua vista frontale?", answer: 25, unit: "cm²", explain: "La vista frontale di un cubo è un quadrato 5 × 5 = 25 cm²." },
      { type: "mc", q: "Qual è la vista dall'alto di una piramide a base quadrata?", options: ["Un triangolo", "Un quadrato con le diagonali", "Un cerchio"], answer: 1, explain: "Dall'alto si vede la base quadrata e i quattro spigoli che salgono al vertice, cioè le diagonali." },
      { type: "text", q: "Come si chiama la retta in cui si incontrano P.V. e P.O.? (linea di …)", answer: ["terra", "linea di terra"], explain: "È la linea di terra (L.T.)." },
      { type: "mc", q: "A cosa serve la linea a 45°?", options: ["A disegnare la prospettiva", "A trasferire la profondità dalla pianta al fianco", "A indicare gli spigoli nascosti"], answer: 1, explain: "Le linee di richiamo orizzontali della pianta si «girano» sulla retta a 45° e diventano verticali nel fianco." },
      { type: "order", q: "Metti in ordine le fasi del disegno.", items: ["Scegliere la vista frontale", "Tracciare linea di terra e assi", "Disegnare il prospetto", "Riportare le misure e disegnare pianta e fianco", "Ripassare le linee secondo il loro tipo"], explain: "Prima la scelta e la costruzione, poi le viste, infine la ripassatura." },
      { type: "text", q: "Cognome del matematico francese che fondò la geometria descrittiva.", answer: ["monge", "gaspard monge"], explain: "Gaspard Monge (1746–1818)." },
      { type: "tf", q: "Nel metodo americano la pianta si disegna sopra la vista frontale.", answer: true, explain: "Nel terzo diedro la vista dall'alto va sopra." },
      { type: "num", q: "Un parallelepipedo è lungo 10 cm, profondo 4 cm e alto 3 cm. Quanto è largo (in cm) il rettangolo della vista laterale?", answer: 4, unit: "cm", explain: "La vista laterale mostra profondità (4 cm) e altezza (3 cm): la sua larghezza è la profondità, 4 cm." }
    ],
    gen: [["areaRect", 2]]
  }
});
