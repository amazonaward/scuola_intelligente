TOPIC('it', {
  id: `m3-tec-assonometria`,
  title: `L'assonometria`,
  intro: `Un foglio è piatto, ma gli oggetti hanno tre dimensioni. Come si disegna un cubo, un mobile o un edificio in modo che si capisca <b>la forma</b> e si possano anche <b>misurare</b> le parti? Con l'<b>assonometria</b>: un metodo di disegno tecnico che rappresenta in un'unica vista larghezza, profondità e altezza. È il linguaggio di progettisti, architetti… e di molti videogiochi! 📐🧊`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. Dalle proiezioni ortogonali all'assonometria`,
      html: `<p>Con le <b>proiezioni ortogonali</b> (che hai già studiato) un oggetto si disegna con <b>tre viste separate</b>: pianta, prospetto, fianco. Sono precise, ma per capire la forma bisogna "montarle" nella testa.</p>
<p>L'<b>assonometria</b> (dal greco <i>áxōn</i> = asse e <i>métron</i> = misura: "misura lungo gli assi") mostra invece l'oggetto <b>in un solo disegno</b>, con tre facce visibili insieme.</p>
<p>È una <b>proiezione parallela</b>: i raggi di proiezione sono tutti paralleli tra loro, come se guardassimo l'oggetto da infinitamente lontano. Conseguenze importanti:</p>
<ul>
<li>le linee <b>parallele</b> nella realtà restano <b>parallele</b> nel disegno;</li>
<li>le misure lungo gli assi si possono <b>leggere con il righello</b> (eventualmente moltiplicate per un coefficiente);</li>
<li>gli oggetti <b>non rimpiccioliscono</b> in lontananza (a differenza della <b>prospettiva</b>).</li>
</ul>`
    },
    {
      type: `text`, title: `2. I tre assi: x, y, z`,
      html: `<p>Ogni assonometria si costruisce su <b>tre assi</b> che partono da un'origine O:</p>
<ul>
<li><b>asse z</b>: sempre <b>verticale</b>, per le <b>altezze</b>;</li>
<li><b>asse x</b>: per le <b>larghezze</b> (lunghezze);</li>
<li><b>asse y</b>: per le <b>profondità</b>.</li>
</ul>
<p>Le diverse assonometrie si distinguono per due cose:</p>
<ol>
<li>gli <b>angoli</b> che gli assi x e y formano con l'orizzontale;</li>
<li>i <b>coefficienti di riduzione</b>: se le misure lungo un asse si riportano vere (×1) o ridotte (per esempio ×½).</li>
</ol>`
    },
    {
      type: `text`, title: `3. I tipi di assonometria`,
      html: `<table>
<tr><th>Tipo</th><th>Angoli degli assi x e y</th><th>Riduzioni</th><th>Uso tipico</th></tr>
<tr><td><b>Isometrica</b></td><td>30° e 30° (i tre assi formano angoli di 120°)</td><td>nessuna: x, y, z in misura vera</td><td>meccanica, oggetti, design</td></tr>
<tr><td><b>Cavaliera</b></td><td>x orizzontale; y a 45° (o 30°, 60°)</td><td>y ridotto a ½ (cavaliera "ridotta")</td><td>oggetti con una faccia importante, schizzi veloci</td></tr>
<tr><td><b>Monometrica (planometrica)</b></td><td>x e y a 30°/60° (o 45°/45°) tra loro a 90°</td><td>nessuna</td><td>architettura, arredamento: la pianta resta vera</td></tr>
</table>
<p><b>Isometrica</b> = "stessa misura": tutti e tre gli assi hanno la stessa scala. Nella teoria la riduzione esatta sarebbe circa 0,82 su tutti gli assi, ma nel disegno tecnico si usa l'<b>isometria unificata</b>, con misure vere: il disegno risulta solo un po' più grande.</p>
<p>Nella <b>cavaliera</b> la faccia frontale è disegnata <b>esattamente com'è</b> (in vera forma): perfetta per oggetti con un davanti complicato, come una ruota dentata o una lettera.</p>
<p>Nella <b>monometrica</b> la <b>pianta</b> è in vera forma, solo ruotata: si disegna la pianta di una casa e poi si "alzano" i muri in verticale.</p>`
    },
    {
      type: `svg`, title: `Lo stesso cubo in tre assonometrie`,
      caption: `Cubo di lato 60: isometrica (assi a 30°), cavaliera (profondità a 45° ridotta a metà), monometrica (pianta ruotata 30°/60°).`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<g stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round">
<polygon points="100,140 152,170 100,200 48,170" fill="#fde68a"/>
<polygon points="48,170 100,200 100,260 48,230" fill="#f59e0b"/>
<polygon points="100,200 152,170 152,230 100,260" fill="#fbbf24"/>
</g>
<text x="100" y="40" font-size="17" font-weight="bold" fill="#92400e" text-anchor="middle">ISOMETRICA</text>
<text x="100" y="62" font-size="13" fill="#334155" text-anchor="middle">30° – 30°, tutto ×1</text>
<g stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round">
<polygon points="250,170 310,170 331,149 271,149" fill="#bfdbfe"/>
<polygon points="310,170 331,149 331,209 310,230" fill="#3b82f6"/>
<rect x="250" y="170" width="60" height="60" fill="#60a5fa"/>
</g>
<text x="290" y="40" font-size="17" font-weight="bold" fill="#1e40af" text-anchor="middle">CAVALIERA</text>
<text x="290" y="62" font-size="13" fill="#334155" text-anchor="middle">y a 45°, ridotto ×½</text>
<g stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round">
<polygon points="490,120 542,150 512,202 460,172" fill="#bbf7d0"/>
<polygon points="460,172 512,202 512,262 460,232" fill="#22c55e"/>
<polygon points="512,202 542,150 542,210 512,262" fill="#4ade80"/>
</g>
<text x="490" y="40" font-size="17" font-weight="bold" fill="#166534" text-anchor="middle">MONOMETRICA</text>
<text x="490" y="62" font-size="13" fill="#334155" text-anchor="middle">pianta 30°/60°, ×1</text>
<line x1="20" y1="290" x2="580" y2="290" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="300" y="312" font-size="13" fill="#475569" text-anchor="middle">le linee parallele restano parallele: nessun punto di fuga</text>
</svg>`
    },
    {
      type: `3d`, title: `Gira il solido e trova la vista isometrica`,
      scene: `solid`,
      options: { shape: `box`, w: 3, h: 2, d: 2, color: `#f59e0b`, labels: true, shapes: [`cube`, `box`, `prism`, `pyramid`, `cylinder`] },
      caption: `Ruota il solido finché vedi tre facce con la stessa "importanza": è il punto di vista dell'isometria. Le dimensioni indicate sono quelle da riportare sugli assi.`
    },
    {
      type: `quiz`, title: `Mini-quiz: riconosci l'assonometria`,
      questions: [
        { type: `mc`, q: `Nell'assonometria isometrica gli assi x e y formano con l'orizzontale un angolo di…`, options: [`45°`, `30°`, `60°`], answer: 1, explain: `Isometrica: x e y a 30°, z verticale; i tre assi sono a 120° l'uno dall'altro.` },
        { type: `mc`, q: `In quale assonometria la faccia frontale è in vera forma?`, options: [`Isometrica`, `Cavaliera`, `Monometrica`], answer: 1, explain: `Nella cavaliera il piano frontale (x-z) è disegnato com'è.` },
        { type: `tf`, q: `In assonometria le linee parallele convergono in un punto di fuga.`, answer: false, explain: `È una proiezione parallela: le parallele restano parallele. Il punto di fuga è della prospettiva.` }
      ]
    },
    {
      type: `text`, title: `4. Come si disegna un parallelepipedo in isometria (passo per passo)`,
      html: `<p>Disegniamo una scatola di <b>4 × 3 × 2 cm</b> (larghezza × profondità × altezza) con squadre da 30°/60° e riga.</p>
<ol>
<li><b>Origine</b>: scegli un punto O in basso al centro del foglio.</li>
<li><b>Assi</b>: da O traccia la verticale (z) e, con la squadra da 30°, due rette a 30° sopra l'orizzontale: verso destra (x) e verso sinistra (y).</li>
<li><b>Misure</b>: sull'asse x riporta 4 cm, sull'asse y 3 cm, sull'asse z 2 cm.</li>
<li><b>Base</b>: dagli estremi traccia le parallele agli assi (parallela a y dal punto su x, parallela a x dal punto su y): ottieni il rombo della base.</li>
<li><b>Spigoli verticali</b>: da ogni vertice visibile della base alza una verticale di 2 cm.</li>
<li><b>Faccia superiore</b>: unisci le cime con parallele agli assi x e y.</li>
<li><b>Ripasso</b>: ripassa con tratto <b>grosso</b> gli spigoli in vista; gli spigoli nascosti si fanno <b>tratteggiati</b> o si omettono; cancella le linee di costruzione.</li>
</ol>
<p>Regola d'oro: <b>si misura solo lungo gli assi</b> (o parallelamente a essi). Le diagonali e i cerchi non sono in vera grandezza!</p>`
    },
    {
      type: `svg`, title: `Le costruzioni passo per passo`,
      caption: `1) assi a 30°; 2) misure sugli assi e base; 3) spigoli verticali e faccia superiore.`,
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fffbeb"/>
<g font-size="16" font-weight="bold" fill="#92400e"><text x="100" y="28" text-anchor="middle">1. Assi</text><text x="300" y="28" text-anchor="middle">2. Base</text><text x="500" y="28" text-anchor="middle">3. Solido</text></g>
<g stroke="#64748b" stroke-width="2"><line x1="100" y1="240" x2="100" y2="60"/><line x1="100" y1="240" x2="185" y2="191"/><line x1="100" y1="240" x2="15" y2="191"/></g>
<text x="108" y="70" font-size="16" fill="#dc2626" font-weight="bold">z</text>
<text x="180" y="185" font-size="16" fill="#dc2626" font-weight="bold">x</text>
<text x="15" y="185" font-size="16" fill="#dc2626" font-weight="bold">y</text>
<path d="M140 240 A40 40 0 0 0 135 220" stroke="#2563eb" stroke-width="2" fill="none"/>
<line x1="100" y1="240" x2="185" y2="240" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="145" y="258" font-size="14" fill="#2563eb">30°</text>
<g stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 3"><line x1="300" y1="250" x2="390" y2="198"/><line x1="300" y1="250" x2="225" y2="207"/><line x1="300" y1="250" x2="300" y2="120"/></g>
<polygon points="300,250 369,210 317,180 248,220" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="345" y="248" font-size="14" fill="#b45309">4 cm</text>
<text x="240" y="250" font-size="14" fill="#b45309">3 cm</text>
<polygon points="500,240 569,200 569,165 500,205" fill="#f59e0b" stroke="#1e293b" stroke-width="3"/>
<polygon points="500,240 448,210 448,175 500,205" fill="#fbbf24" stroke="#1e293b" stroke-width="3"/>
<polygon points="500,205 569,165 517,135 448,175" fill="#fef3c7" stroke="#1e293b" stroke-width="3"/>
<polyline points="448,210 517,170 569,200" fill="none" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="517" y1="170" x2="517" y2="135" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="580" y="190" font-size="14" fill="#1e293b">2 cm</text>
</svg>`
    },
    {
      type: `example`, title: `Esempio pratico: la mensola della cameretta`,
      html: `<p>Vuoi far costruire una mensola di <b>80 × 20 × 2 cm</b>. Con le sole proiezioni ortogonali il falegname capirebbe, ma i tuoi genitori forse no. Disegnandola in <b>isometria</b> in scala 1:10 (8 cm sull'asse x, 2 cm su y, 0,2 cm su z) si vede subito com'è fatta, e si possono scrivere le <b>quote</b> lungo gli spigoli.</p>
<p>Se la mensola ha un intaglio decorativo sul davanti, conviene invece la <b>cavaliera</b>: la faccia frontale resta in vera forma e l'intaglio si disegna facilmente.</p>`
    },
    {
      type: `example`, title: `Esempio pratico: la pianta di casa in monometrica`,
      html: `<p>Hai la pianta della tua camera in scala 1:50. Per mostrarla "arredata":</p>
<ol>
<li>ruoti la pianta di 30° (o 45°) e la ricopi tale e quale: le misure restano vere;</li>
<li>da ogni angolo alzi le pareti in verticale, per esempio 2,70 m ➜ 5,4 cm in scala 1:50;</li>
<li>disegni letto e scrivania come parallelepipedi, sempre alzando le altezze in verticale.</li>
</ol>
<p>Gli architetti usano spesso questa vista "a volo d'uccello", detta anche <b>esploso</b> quando le parti sono separate.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… i videogiochi usano l'assonometria?`,
      html: `<p>Molti giochi di strategia e simulazione (come i classici <i>SimCity 2000</i> o <i>Age of Empires</i>) usano una vista detta "isometrica". In realtà sui pixel si usa quasi sempre una <b>dimetrica 2:1</b>: le linee salgono di 1 pixel ogni 2 in orizzontale (angolo di circa 26,6° invece di 30°), perché così le linee sullo schermo vengono pulite, senza "scalini" irregolari. Come in assonometria, gli oggetti lontani <b>non diventano più piccoli</b>!</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… la Cina disegnava in assonometria secoli fa?`,
      html: `<p>Nei rotoli dipinti cinesi, come il famoso <i>Lungo il fiume durante la festa di Qingming</i> (XII secolo), case e ponti sono disegnati con linee parallele oblique: è una specie di <b>assonometria</b>, che permette di "srotolare" la città senza un punto di vista fisso. In Europa l'isometria fu descritta come metodo scientifico dal professore inglese <b>William Farish</b> nel <b>1822</b>, per disegnare macchine.</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul>
<li>Assonometria = proiezione <b>parallela</b> su tre assi (x larghezza, y profondità, z altezza verticale).</li>
<li><b>Isometrica</b>: x e y a 30°, tutte le misure vere.</li>
<li><b>Cavaliera</b>: faccia frontale vera, profondità a 45° ridotta a ½.</li>
<li><b>Monometrica</b>: pianta vera ruotata (30°/60° o 45°), altezze vere.</li>
<li>Si misura <b>solo parallelamente agli assi</b>; spigoli in vista spessi, nascosti tratteggiati.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `L'assonometria è più facile da vedere che da spiegare. Prova questi approcci.`,
      tabs: [
        {
          label: `🧊 Ruota il cubo 3D`,
          html: `<p>Prendi il cubo e ruotalo in modo che lo <b>spigolo verticale più vicino</b> sia al centro e che tu veda tre facce uguali (sopra, sinistra, destra). Quella è esattamente la vista dell'<b>isometria</b>: nessuna faccia è "più importante" delle altre.</p>`,
          scene: `solid`,
          options: { shape: `cube`, color: `#3b82f6`, labels: true }
        },
        {
          label: `📄 Carta isometrica`,
          html: `<p>In molti Paesi (Regno Unito, Giappone, USA) a scuola si usa la <b>carta isometrica</b>: un foglio di puntini disposti a triangoli. Basta unire i puntini seguendo le tre direzioni (verticale e due a 30°) e il disegno viene da solo, senza squadre!</p>
<p>Prova: un cubo di lato 1 occupa un esagono formato da 6 triangolini.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<g fill="#94a3b8">
<circle cx="100" cy="30" r="3"/><circle cx="100" cy="70" r="3"/><circle cx="100" cy="110" r="3"/><circle cx="100" cy="150" r="3"/><circle cx="100" cy="190" r="3"/><circle cx="100" cy="230" r="3"/>
<circle cx="135" cy="50" r="3"/><circle cx="135" cy="90" r="3"/><circle cx="135" cy="130" r="3"/><circle cx="135" cy="170" r="3"/><circle cx="135" cy="210" r="3"/>
<circle cx="170" cy="30" r="3"/><circle cx="170" cy="70" r="3"/><circle cx="170" cy="110" r="3"/><circle cx="170" cy="150" r="3"/><circle cx="170" cy="190" r="3"/><circle cx="170" cy="230" r="3"/>
<circle cx="205" cy="50" r="3"/><circle cx="205" cy="90" r="3"/><circle cx="205" cy="130" r="3"/><circle cx="205" cy="170" r="3"/><circle cx="205" cy="210" r="3"/>
<circle cx="240" cy="30" r="3"/><circle cx="240" cy="70" r="3"/><circle cx="240" cy="110" r="3"/><circle cx="240" cy="150" r="3"/><circle cx="240" cy="190" r="3"/><circle cx="240" cy="230" r="3"/>
<circle cx="275" cy="50" r="3"/><circle cx="275" cy="90" r="3"/><circle cx="275" cy="130" r="3"/><circle cx="275" cy="170" r="3"/><circle cx="275" cy="210" r="3"/>
<circle cx="65" cy="50" r="3"/><circle cx="65" cy="90" r="3"/><circle cx="65" cy="130" r="3"/><circle cx="65" cy="170" r="3"/><circle cx="65" cy="210" r="3"/>
</g>
<g stroke="#1e293b" stroke-width="3" stroke-linejoin="round">
<polygon points="170,70 240,110 170,150 100,110" fill="#fde68a"/>
<polygon points="100,110 170,150 170,230 100,190" fill="#f59e0b"/>
<polygon points="170,150 240,110 240,190 170,230" fill="#fbbf24"/>
</g>
<text x="440" y="100" font-size="17" fill="#1e293b" text-anchor="middle" font-weight="bold">Unisci i puntini</text>
<text x="440" y="130" font-size="15" fill="#334155" text-anchor="middle">solo in 3 direzioni:</text>
<text x="440" y="160" font-size="15" fill="#334155" text-anchor="middle">| verticale, / e \ a 30°</text>
</svg>`
        },
        {
          label: `🔦 L'ombra al sole`,
          html: `<p>Il Sole è così lontano che i suoi raggi arrivano <b>paralleli</b>. L'ombra di un oggetto sul pavimento è quindi una <b>proiezione parallela</b>, proprio come l'assonometria! Se sposti un cubo di filo di ferro al sole, la sua ombra cambia forma, ma le linee parallele restano sempre parallele.</p>
<p>Con una lampadina vicina, invece, i raggi partono da un punto: l'ombra si allarga, come in <b>prospettiva</b>.</p>`
        },
        {
          label: `🏷️ Nomina gli assi`,
          html: `<p>Tocca i punti del disegno e scegli l'etichetta giusta.</p>`,
          widget: `labelDiagram`,
          options: {
            svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f8fafc"/><g stroke="#1e293b" stroke-width="3"><polygon points="200,90 290,140 200,190 110,140" fill="#bfdbfe"/><polygon points="110,140 200,190 200,270 110,220" fill="#3b82f6"/><polygon points="200,190 290,140 290,220 200,270" fill="#60a5fa"/></g><g stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"><line x1="200" y1="270" x2="200" y2="30"/><line x1="200" y1="270" x2="360" y2="178"/><line x1="200" y1="270" x2="40" y2="178"/></g></svg>`,
            spots: [
              { x: 200, y: 40, label: `Asse z (altezza)` },
              { x: 350, y: 184, label: `Asse x (larghezza)` },
              { x: 50, y: 184, label: `Asse y (profondità)` },
              { x: 200, y: 270, label: `Origine O` },
              { x: 200, y: 140, label: `Faccia superiore` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: l'assonometria`,
      nodes: [
        { id: `rapp`, label: `Rappresentare il 3D`, x: 50, y: 6, color: `#64748b`, html: `Disegnare oggetti tridimensionali su un foglio piatto.`, why: `Ogni disegno su carta perde una dimensione. La <b>geometria descrittiva</b>, fondata da <b>Gaspard Monge</b> (1795), studia come farlo senza perdere informazioni.` },
        { id: `orto`, label: `Proiezioni ortogonali`, x: 15, y: 30, color: `#0ea5e9`, html: `Tre viste separate: pianta, prospetto, fianco.`, why: `Metodo sistematizzato da Monge per le fortificazioni militari francesi: preciso ma poco intuitivo.` },
        { id: `ass`, label: `Assonometria`, x: 50, y: 30, color: `#f59e0b`, html: `Una sola vista con tre assi e misure leggibili.`, why: `Nasce per avere insieme la precisione delle misure e l'immediatezza della forma. L'isometria fu formalizzata da William Farish (Cambridge, 1822).` },
        { id: `prosp`, label: `Prospettiva`, x: 85, y: 30, color: `#a855f7`, html: `Come vede l'occhio: le parallele convergono nei punti di fuga.`, why: `Riscoperta da <b>Filippo Brunelleschi</b> a Firenze verso il 1415 e descritta da Leon Battista Alberti nel 1435. Realistica, ma le misure non si leggono direttamente.` },
        { id: `par`, label: `Proiezione parallela`, x: 50, y: 52, color: `#22c55e`, html: `Raggi tutti paralleli: niente punto di fuga.`, why: `È come guardare da distanza infinita. Una trasformazione parallela conserva il parallelismo e i rapporti tra segmenti paralleli: per questo si può misurare con il righello.` },
        { id: `iso`, label: `Isometrica`, x: 15, y: 78, color: `#ef4444`, html: `x e y a 30°, tutto in misura vera.`, why: `Se guardi un cubo lungo la sua diagonale, i tre spigoli appaiono uguali e a 120° tra loro. Il fattore teorico è √(2/3) ≈ 0,82; si usa 1 per comodità (isometria unificata).` },
        { id: `cav`, label: `Cavaliera`, x: 50, y: 78, color: `#3b82f6`, html: `Faccia frontale vera, profondità a 45° ×½.`, why: `Il nome viene dalla "cavaliera", la collinetta delle fortificazioni da cui si vedeva tutto dall'alto. La riduzione ½ fa sembrare il solido più naturale.` },
        { id: `mono`, label: `Monometrica`, x: 85, y: 78, color: `#16a34a`, html: `Pianta vera ruotata, altezze verticali.`, why: `Molto usata dagli architetti del Novecento (per esempio nel movimento De Stijl e al Bauhaus) perché la pianta resta misurabile e si "alzano" i muri.` }
      ],
      edges: [
        [`rapp`, `orto`, `metodo`], [`rapp`, `ass`, `metodo`], [`rapp`, `prosp`, `metodo`], [`ass`, `par`, `è una`],
        [`par`, `iso`, `tipo`], [`par`, `cav`, `tipo`], [`par`, `mono`, `tipo`], [`orto`, `par`, `anche`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: costruire`,
      questions: [
        { type: `num`, q: `In cavaliera ridotta, una profondità reale di 6 cm si disegna lunga…`, answer: 3, tol: 0, unit: `cm`, explain: `Coefficiente ½: 6 × 0,5 = 3 cm.` },
        { type: `mc`, q: `Come si disegnano gli spigoli nascosti?`, options: [`Con tratto grosso continuo`, `Tratteggiati (o non si disegnano)`, `In rosso`], answer: 1, explain: `Convenzione del disegno tecnico: linee tratteggiate per gli spigoli nascosti.` },
        { type: `tf`, q: `In isometria si può misurare con il righello una diagonale della faccia.`, answer: false, explain: `Si misura solo lungo direzioni parallele agli assi.` }
      ]
    }
  ],
  glossary: [
    { t: `Assonometria`, d: `Metodo di rappresentazione con proiezione parallela su tre assi.` },
    { t: `Assi x, y, z`, d: `Direzioni di larghezza, profondità e altezza (z sempre verticale).` },
    { t: `Isometrica`, d: `Assonometria con assi x e y a 30° e misure vere su tutti gli assi.` },
    { t: `Cavaliera`, d: `Assonometria con faccia frontale in vera forma e profondità obliqua ridotta.` },
    { t: `Monometrica`, d: `Assonometria con pianta in vera forma ruotata e altezze verticali.` },
    { t: `Coefficiente di riduzione`, d: `Numero per cui si moltiplicano le misure lungo un asse (es. ½).` },
    { t: `Prospettiva`, d: `Rappresentazione con punti di fuga, come vede l'occhio.` },
    { t: `Proiezione parallela`, d: `Proiezione con raggi tutti paralleli tra loro.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `"Assonometria" significa…`, options: [`misura lungo gli assi`, `disegno a mano libera`, `vista dall'alto`], answer: 0, explain: `Dal greco áxōn (asse) + métron (misura).` },
      { type: `mc`, q: `L'asse z rappresenta…`, options: [`la profondità`, `l'altezza`, `la larghezza`], answer: 1, explain: `z è sempre verticale: le altezze.` },
      { type: `mc`, q: `In isometria i tre assi formano tra loro angoli di…`, options: [`90°`, `120°`, `45°`], answer: 1, explain: `360° : 3 = 120°.` },
      { type: `num`, q: `Un cubo di lato 5 cm in isometria unificata: quanto è lungo lo spigolo disegnato sull'asse x?`, answer: 5, tol: 0, unit: `cm`, explain: `Nell'isometria unificata le misure sono vere.` },
      { type: `num`, q: `In cavaliera ridotta (½), una scatola profonda 12 cm: lunghezza disegnata sull'asse y?`, answer: 6, tol: 0, unit: `cm`, explain: `12 × ½ = 6 cm.` },
      { type: `tf`, q: `In assonometria gli oggetti lontani si disegnano più piccoli.`, answer: false, explain: `Questo accade in prospettiva, non in assonometria.` },
      { type: `tf`, q: `Nella monometrica la pianta è in vera forma.`, answer: true, explain: `La pianta è solo ruotata (30°/60° o 45°).` },
      { type: `order`, q: `Metti in ordine i passi per disegnare un parallelepipedo in isometria.`, items: [`Fissa l'origine e traccia gli assi`, `Riporta le misure sugli assi`, `Disegna la base con parallele agli assi`, `Alza gli spigoli verticali`, `Chiudi la faccia superiore`, `Ripassa gli spigoli in vista`], explain: `Prima assi e misure, poi base, altezze, faccia superiore e ripasso.` },
      { type: `mc`, q: `Per un oggetto con un davanti molto decorato conviene…`, options: [`la cavaliera`, `l'isometrica`, `la prospettiva centrale`], answer: 0, explain: `La cavaliera mantiene la faccia frontale in vera forma.` },
      { type: `text`, q: `Come si chiama il metodo con punti di fuga, riscoperto da Brunelleschi?`, answer: [`prospettiva`, `la prospettiva`], explain: `La prospettiva, usata dal Rinascimento in poi.` },
      { type: `mc`, q: `Chi descrisse l'isometria come metodo scientifico nel 1822?`, options: [`Leonardo da Vinci`, `William Farish`, `Gaspard Monge`], answer: 1, explain: `William Farish, professore a Cambridge.` }
    ]
  }
});
