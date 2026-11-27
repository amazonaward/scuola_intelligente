TOPIC('it', {
  id: `l2-art-assonometria`,
  title: `Disegno: l'assonometria`,
  intro: `Le proiezioni ortogonali sono precise ma "fredde": servono tre disegni per vedere un oggetto. Spesso invece vuoi un'immagine <b>unica</b>, che si legga a colpo d'occhio: il disegno di montaggio di un mobile, la scatola nei manuali dei videogiochi da tavolo, lo schema di una stanza. Questo è il compito dell'<b>assonometria</b>: rappresentare in un solo disegno le <b>tre dimensioni</b>, con regole che permettono ancora di <b>misurare</b>. Le tre varianti che studierai: <b>isometrica</b>, <b>cavaliera</b> e <b>monometrica</b>. 📦✏️`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. Che cos'è un'assonometria`,
      html: `<p>La parola viene dal greco: <i>áxon</i> (asse) + <i>métron</i> (misura): "misura sugli assi". Si fissa nello spazio una <b>terna di assi cartesiani</b> (<b>x</b>, <b>y</b>, <b>z</b>) legata all'oggetto, e si proiettano oggetto e assi con <b>raggi paralleli</b> su un unico piano, il <b>piano del quadro</b>. Poiché le tre direzioni sono rappresentate nello stesso disegno, le lunghezze si possono <b>misurare lungo gli assi</b>, usando dei <b>coefficienti di riduzione</b> (le lunghezze lungo gli assi si accorciano di un fattore noto).</p>
<p>Ricordi le <b>proiezioni ortogonali</b> (Monge, tre viste separate)? Lì il piano di proiezione è parallelo a una faccia dell'oggetto, e ogni vista mostra una faccia in vera forma. Qui, invece, il piano del quadro è <b>inclinato</b> rispetto agli assi (oppure si proietta obliquamente), così si vedono <b>insieme</b> più facce.</p>
<p>Si distinguono due famiglie:</p>
<ul>
<li><b>assonometria ortogonale</b>: i raggi proiettanti sono <b>perpendicolari</b> al piano del quadro (esempio: <b>isometrica</b>);</li>
<li><b>assonometria obliqua</b>: i raggi proiettanti sono <b>inclinati</b> rispetto al piano del quadro (esempio: <b>cavaliera</b>, monometrica).</li>
</ul>
<p>Caratteristica di tutte: <b>le rette parallele restano parallele</b> (le linee non "convergono" come nella prospettiva: l'oggetto non diventa più piccolo con la distanza). Questo le rende molto adatte al disegno tecnico, ma meno "realistiche" della prospettiva.</p>`
    },
    {
      type: `text`, title: `2. L'assonometria isometrica`,
      html: `<p>"Isometrica" significa "<b>di misura uguale</b>" (greco <i>ísos</i>, uguale): i tre assi sono ugualmente inclinati rispetto al piano del quadro, e quindi i <b>tre coefficienti di riduzione sono uguali</b>.</p>
<ul>
<li>Gli assi formano tra loro <b>angoli di 120°</b>: <b>z</b> è <b>verticale</b>, <b>x</b> e <b>y</b> scendono a <b>30°</b> rispetto all'orizzontale (a sinistra e a destra);</li>
<li>Il <b>coefficiente di riduzione</b> teorico è √(2/3) ≈ <b>0,816</b> su ogni asse. Per semplicità si usa quasi sempre l'<b>isometria semplificata</b>: si riportano le misure <b>in scala reale (coefficiente 1)</b>; il disegno risulta ingrandito di circa il 22%, ma le proporzioni sono corrette;</li>
<li>Tutti gli spigoli paralleli agli assi si disegnano con linee a <b>30°</b> (a destra o a sinistra) oppure verticali: si usa la squadra a 30°-60° (come sul foglio isometrico a puntini o a quadretti triangolari);</li>
<li>Un <b>cerchio</b> posto su una faccia dell'oggetto si trasforma in un'<b>ellisse</b> (nella proiezione teorica il rapporto tra asse minore e maggiore è 1/√3 ≈ 0,577).</li>
</ul>
<p>Gli <b>angoli retti</b> (quelli dello spigolo di un cubo) diventano angoli di 120° o 60°: per questo l'immagine ha le tipiche forme "a rombo". Le <b>lunghezze non parallele agli assi</b> (ad esempio la diagonale di una faccia) <b>non si possono misurare direttamente</b>: bisogna costruirle punto per punto con le coordinate.</p>`
    },
    {
      type: `svg`, title: `Cubo in isometrica e in cavaliera`,
      caption: `A sinistra il cubo in isometrica: tre facce visibili, tutte deformate in rombi, con gli spigoli verticali e quelli a 30°. A destra in cavaliera: la faccia frontale è un quadrato vero, la profondità è disegnata a 45° e ridotta a metà.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#ecfeff"/><polygon points="150,150 236.6,100 150,50 63.4,100" fill="#a5f3fc" stroke="#164e63" stroke-width="3" stroke-linejoin="round"/><polygon points="150,250 63.4,200 63.4,100 150,150" fill="#67e8f9" stroke="#164e63" stroke-width="3" stroke-linejoin="round"/><polygon points="150,250 236.6,200 236.6,100 150,150" fill="#22d3ee" stroke="#164e63" stroke-width="3" stroke-linejoin="round"/><text x="150" y="28" font-size="16" font-weight="bold" fill="#164e63" text-anchor="middle">ISOMETRICA</text><text x="150" y="278" font-size="14" fill="#164e63" text-anchor="middle">angoli di 120°, assi a 30°</text><text x="215" y="170" font-size="14" fill="#164e63">30°</text><polygon points="350,150 450,150 485.4,114.6 385.4,114.6" fill="#fde68a" stroke="#78350f" stroke-width="3" stroke-linejoin="round"/><rect x="350" y="150" width="100" height="100" fill="#fcd34d" stroke="#78350f" stroke-width="3"/><polygon points="450,150 485.4,114.6 485.4,214.6 450,250" fill="#f59e0b" stroke="#78350f" stroke-width="3" stroke-linejoin="round"/><text x="420" y="28" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">CAVALIERA</text><text x="420" y="278" font-size="14" fill="#78350f" text-anchor="middle">fronte in vera forma, y a 45°</text><text x="400" y="205" font-size="14" fill="#78350f" text-anchor="middle">quadrato vero</text><text x="520" y="170" font-size="14" fill="#78350f">1/2</text></svg>`
    },
    {
      type: `example`, title: `Esempio: una scatola 8 × 6 × 4 in isometrica`,
      html: `<p>Una scatola di <b>larghezza 8 cm</b> (asse x), <b>profondità 6 cm</b> (asse y) e <b>altezza 4 cm</b> (asse z), disegnata in isometrica semplificata in <b>scala 1:1</b>:</p>
<ol>
<li>Fissa un punto <b>O</b> (lo spigolo più in basso e più vicino a te) e traccia da lì tre rette: una <b>verticale</b> (z) e due a <b>30°</b> sull'orizzontale, una verso sinistra e una verso destra.</li>
<li>Riporta sulla retta di sinistra <b>8 cm</b> (x), su quella di destra <b>6 cm</b> (y), sulla verticale <b>4 cm</b> (z).</li>
<li>Da ciascun estremo traccia le <b>parallele</b> agli altri due assi, completando le tre facce visibili (due facce laterali e il coperchio).</li>
<li>Completa gli spigoli rimanenti; se vuoi, tratteggia quelli nascosti.</li>
</ol>
<p>Controllo: nel disegno ogni spigolo parallelo a un asse ha la sua lunghezza vera (nella versione semplificata), quindi puoi misurare direttamente con il righello; ma la diagonale del coperchio, che nella realtà vale √(8² + 6²) = <b>10 cm</b>, nel disegno <b>non</b> misura 10 cm.</p>`
    },
    {
      type: `text`, title: `3. L'assonometria cavaliera`,
      html: `<p>Il nome deriva dal "<b>cavaliere</b>", il rialzo artificiale usato nelle fortificazioni: i disegnatori militari dovevano rappresentare bastioni e torri in un solo disegno, e inventarono questo metodo (XVI-XVII secolo), molto più semplice della prospettiva. Si tratta di una <b>proiezione obliqua</b>:</p>
<ul>
<li>Il <b>piano del quadro</b> è parallelo al piano frontale (xz): le <b>facce frontali</b> si vedono in <b>vera forma e vera grandezza</b>;</li>
<li><b>x</b> è orizzontale, <b>z</b> è verticale (angolo di 90° tra loro); l'asse della <b>profondità y</b> è inclinato di <b>45°</b> (talvolta 30° o 60°) e viene <b>accorciato a metà</b> (coefficiente <b>1/2</b>), altrimenti l'oggetto sembrerebbe troppo lungo e deformato;</li>
<li>i <b>cerchi</b> sul piano frontale restano <b>cerchi</b>; quelli sugli altri piani diventano ellissi;</li>
<li>È <b>molto semplice da tracciare</b> con una squadra a 45° e un compasso.</li>
</ul>
<p>Svantaggio: l'immagine è un po' "sproporzionata" (sembra che l'oggetto sia "tirato" verso destra). È adatta quando una faccia (di solito la più complessa: ad esempio la fronte di una casa o di un motore) deve essere vista in vera forma.</p>`
    },
    {
      type: `example`, title: `Esempio: la stessa scatola in cavaliera`,
      html: `<p>Scatola 8 × 6 × 4 cm (x, y, z).</p>
<ol>
<li>Disegna la <b>faccia frontale</b> in vera forma: rettangolo di <b>8 × 4 cm</b>.</li>
<li>Da ogni vertice traccia un segmento a <b>45°</b> verso destra e in alto; la profondità vale 6 cm ma si riduce di metà: <b>3 cm</b> sul disegno.</li>
<li>Collega gli estremi dei segmenti: ottieni il rettangolo posteriore (8 × 4 cm), che puoi tracciare tratteggiato per le parti nascoste.</li>
<li>Completa la faccia superiore (parallelogramma) e quella laterale destra.</li>
</ol>
<p>Nota che le due facce non frontali sono <b>parallelogrammi</b>, non rettangoli: gli angoli di 90° nello spazio, nel disegno, diventano di 45° e 135°. Lo spigolo di profondità proiettato appare con un'inclinazione di 45° e una lunghezza di 3 cm (le componenti orizzontale e verticale sono 3·cos45° ≈ 2,1 cm ciascuna).</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: isometrica e cavaliera`,
      questions: [
        { type: `mc`, q: `Quanto misurano gli angoli tra gli assi nell'assonometria isometrica?`, options: [`120°`, `90°`, `45°`], answer: 0, explain: `Tre assi equidistanti: 360° / 3 = 120°.` },
        { type: `mc`, q: `Nella cavaliera quale faccia si vede in vera forma?`, options: [`La faccia frontale`, `La faccia superiore`, `Nessuna`], answer: 0, explain: `Il piano del quadro è parallelo al piano frontale.` },
        { type: `tf`, q: `In assonometria le rette parallele nello spazio restano parallele nel disegno.`, answer: true, explain: `A differenza della prospettiva centrale.` }
      ]
    },
    {
      type: `svg`, title: `I tre sistemi di assi`,
      caption: `Isometrica: x e y a 30° sotto l'orizzontale, z verticale. Cavaliera: x orizzontale, z verticale, y a 45° ridotto a 1/2. Monometrica: piano orizzontale in vera forma (assi x e y a 90°, ruotati di 30° e 60°), z verticale.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#fdf2f8"/><line x1="100" y1="170" x2="100" y2="60" stroke="#be185d" stroke-width="4"/><line x1="100" y1="170" x2="4.7" y2="225" stroke="#be185d" stroke-width="4"/><line x1="100" y1="170" x2="195.3" y2="225" stroke="#be185d" stroke-width="4"/><text x="108" y="64" font-size="16" font-weight="bold" fill="#831843">z</text><text x="14" y="215" font-size="16" font-weight="bold" fill="#831843">x</text><text x="185" y="215" font-size="16" font-weight="bold" fill="#831843">y</text><text x="100" y="28" font-size="16" font-weight="bold" fill="#831843" text-anchor="middle">ISOMETRICA</text><text x="100" y="270" font-size="14" fill="#831843" text-anchor="middle">120° tra gli assi</text><line x1="300" y1="200" x2="300" y2="90" stroke="#be185d" stroke-width="4"/><line x1="300" y1="200" x2="410" y2="200" stroke="#be185d" stroke-width="4"/><line x1="300" y1="200" x2="338.9" y2="161.1" stroke="#be185d" stroke-width="4"/><text x="308" y="94" font-size="16" font-weight="bold" fill="#831843">z</text><text x="404" y="222" font-size="16" font-weight="bold" fill="#831843">x</text><text x="344" y="156" font-size="16" font-weight="bold" fill="#831843">y</text><text x="330" y="28" font-size="16" font-weight="bold" fill="#831843" text-anchor="middle">CAVALIERA</text><text x="350" y="270" font-size="14" fill="#831843" text-anchor="middle">y a 45°, coefficiente 1/2</text><line x1="500" y1="210" x2="500" y2="100" stroke="#be185d" stroke-width="4"/><line x1="500" y1="210" x2="595" y2="155" stroke="#be185d" stroke-width="4"/><line x1="500" y1="210" x2="445" y2="115" stroke="#be185d" stroke-width="4"/><text x="508" y="104" font-size="16" font-weight="bold" fill="#831843">z</text><text x="578" y="150" font-size="16" font-weight="bold" fill="#831843">x</text><text x="440" y="110" font-size="16" font-weight="bold" fill="#831843">y</text><text x="500" y="28" font-size="16" font-weight="bold" fill="#831843" text-anchor="middle">MONOMETRICA</text><text x="505" y="270" font-size="14" fill="#831843" text-anchor="middle">x ⟂ y, base in vera forma</text></svg>`
    },
    {
      type: `text`, title: `4. L'assonometria monometrica`,
      html: `<p>Il prefisso "mono-" (una sola misura) indica che <b>i tre assi hanno lo stesso coefficiente di riduzione (1)</b>: le misure vanno riportate sempre in scala reale, senza accorciamenti. Nella forma più usata a scuola il <b>piano orizzontale</b> (xy) è visto <b>in vera forma</b>: gli assi <b>x</b> e <b>y</b> formano <b>90°</b> e sono ruotati sul foglio (tipicamente di 30° e 60°, oppure di 45°), mentre l'asse <b>z</b> resta <b>verticale</b>. In pratica si disegna prima la <b>pianta</b> ruotata e poi si "alzano" i muri in verticale: è come guardare una pianta dall'alto, ma con le altezze in elevazione. (Alcuni libri la chiamano anche assonometria <i>planometrica</i> o "militare"; i testi possono variare nei dettagli: segui le convenzioni del tuo libro di testo.)</p>
<p>È molto usata in <b>architettura</b> e in <b>interior design</b> perché:</p>
<ul>
<li>la <b>pianta</b> del locale (che l'architetto già possiede) si ruota e si copia senza deformarla;</li>
<li>basta poi <b>innalzare</b> le pareti con altezze in vera lunghezza;</li>
<li>le <b>distanze orizzontali</b> sono misurabili in ogni direzione.</li>
</ul>
<p>Lo svantaggio: le facce verticali sono deformate (parallelogrammi) e la sensazione di realtà è inferiore. Molti <b>videogiochi isometrici</b> (città, strategia) e le <b>mappe dei giochi da tavolo</b> usano proprio queste proiezioni per mostrare una zona dall'alto con una sensazione di profondità senza dover calcolare la prospettiva.</p>`
    },
    {
      type: `3d`, title: `Come vedi un solido da un punto "isometrico"?`,
      scene: `blocks`,
      options: { mode: `volume`, a: 4, b: 3, c: 2 },
      caption: `Ruota il parallelepipedo di cubetti fino a vedere tre facce con la stessa inclinazione: è la vista isometrica. I cursori cambiano larghezza, profondità e altezza.`
    },
    {
      type: `text`, title: `5. Quale assonometria scegliere?`,
      html: `<table>
<tr><th></th><th>Isometrica</th><th>Cavaliera</th><th>Monometrica</th></tr>
<tr><td><b>Tipo</b></td><td>ortogonale</td><td>obliqua</td><td>obliqua (base in vera forma)</td></tr>
<tr><td><b>Angoli tra gli assi</b></td><td>120° ciascuno</td><td>x ⟂ z (90°), y a 45°</td><td>x ⟂ y (90°), z verticale</td></tr>
<tr><td><b>Coefficienti</b></td><td>uguali (0,816 teorico, 1 semplificato)</td><td>x, z = 1; y = 1/2</td><td>uguali (1)</td></tr>
<tr><td><b>Faccia in vera forma</b></td><td>nessuna</td><td>quella frontale</td><td>quella orizzontale</td></tr>
<tr><td><b>Si usa per</b></td><td>oggetti, macchine, istruzioni di montaggio</td><td>facciate, pezzi con una faccia complessa</td><td>piante di edifici e arredamento</td></tr>
</table>
<p>Regola pratica: scegli la <b>faccia più complessa</b> (con cerchi, curve, dettagli) e mettila <b>parallela al quadro</b> in cavaliera o monometrica; scegli l'<b>isometrica</b> quando le tre direzioni hanno lo stesso peso e vuoi un'immagine equilibrata.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… M. C. Escher e i videogiochi isometrici?`,
      html: `<p>L'artista olandese <b>M. C. Escher</b> (1898-1972) usò la vista isometrica nei suoi "mondi impossibili" (<i>Relatività</i>, 1953; <i>Salita e discesa</i>, 1960): in assonometria le parallele non convergono, e questo permette di disegnare scale che salgono sempre e ritornano al punto di partenza, ingannando l'occhio. La stessa vista, dagli anni Ottanta, è stata usata nei videogiochi: <i>Zaxxon</i> (1982), <i>Q*bert</i> (1982) e poi giochi di città come <i>SimCity 2000</i> (1993): è facile da programmare (nessun calcolo di prospettiva) e fa leggere bene lo spazio. Oggi il termine "isometric art" indica un genere grafico molto popolare.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… l'ellisse isometrica è uno "schiacciamento" del cerchio?`,
      html: `<p>Un cerchio visto da un punto "isometrico" appare come un'ellisse con il rapporto tra gli assi pari a 1/√3 ≈ 0,577: cioè l'asse minore è circa il 58% di quello maggiore. Questo accade perché il cerchio, inclinato di circa 54,7° (l'angolo tra il piano del quadro e il piano del cerchio, cioè arccos(1/√3)), viene "schiacciato" nella direzione dell'inclinazione. In pratica, per disegnarla a mano si costruisce un rombo (il quadrato circoscritto in isometrica) e si inscrive l'ellisse tangente ai punti medi dei lati con un'approssimazione ad archi di cerchio detta "<b>ovale</b>".</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul><li><b>Assonometria</b>: un solo disegno per tre dimensioni; rette parallele restano parallele.</li><li><b>Isometrica</b>: assi a 120°, x e y a 30°, coefficienti uguali; nessuna faccia in vera forma.</li><li><b>Cavaliera</b>: faccia frontale in vera forma, y a 45° con coefficiente 1/2.</li><li><b>Monometrica</b>: pianta in vera forma, z verticale, coefficienti uguali.</li></ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `L'assonometria si capisce meglio con oggetti reali e con il confronto con altri metodi.`,
      tabs: [
        {
          label: `📦 La scatola di cartone`,
          html: `<p>Prendi una scatola e appoggiala sul tavolo. Guardala da lontano e da una posizione in cui vedi <b>tre facce con la stessa inclinazione</b>: è la vista isometrica; da vicino le linee convergono (prospettiva), da lontano diventano quasi parallele. L'assonometria è la prospettiva "da infinitamente lontano": i raggi sono paralleli, come quelli del Sole.</p>`
        },
        {
          label: `🧩 Associa metodo e caratteristica`,
          html: `<p>Collega ogni metodo alla sua caratteristica.</p>`,
          widget: `classify`,
          options: { groups: [`Isometrica`, `Cavaliera`, `Monometrica`], items: [[`Assi a 120°`, 0], [`Faccia frontale in vera forma`, 1], [`Asse y ridotto a 1/2`, 1], [`Pianta ruotata in vera forma`, 2], [`Tutti e tre i coefficienti uguali (ortogonale)`, 0], [`Angolo di 45° per la profondità`, 1], [`Usata per piante di edifici`, 2]] }
        },
        {
          label: `🧱 Con i cubetti 3D`,
          html: `<p>Costruisci un parallelepipedo con i cubetti: con i cursori puoi cambiare larghezza, profondità e altezza. Poi ruota la scena e conta quanti cubetti vedi su ogni faccia.</p>`,
          scene: `blocks`,
          options: { mode: `volume`, a: 3, b: 3, c: 3 }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: l'assonometria`,
      nodes: [
        { id: `ass`, label: `Assonometria`, x: 50, y: 6, color: `#64748b`, html: `Un disegno solo per tre dimensioni.`, why: `Si proiettano oggetto e assi con raggi paralleli su un piano: si mantiene la possibilità di misurare.` },
        { id: `ort`, label: `Ortogonale`, x: 20, y: 28, color: `#f59e0b`, html: `Raggi perpendicolari al quadro.`, why: `Piano inclinato in modo uguale rispetto ai tre assi dà l'isometria.` },
        { id: `obl`, label: `Obliqua`, x: 80, y: 28, color: `#a855f7`, html: `Raggi inclinati.`, why: `Se il piano del quadro è parallelo a una faccia, quella faccia resta in vera forma.` },
        { id: `iso`, label: `Isometrica`, x: 12, y: 58, color: `#ef4444`, html: `120° tra gli assi.`, why: `Coefficienti uguali: nessuna direzione è privilegiata, immagine equilibrata.` },
        { id: `cav`, label: `Cavaliera`, x: 55, y: 62, color: `#22c55e`, html: `Fronte in vera forma, y a 45°, 1/2.`, why: `Nata nel disegno delle fortificazioni: semplice con squadra a 45° e compasso.` },
        { id: `mon`, label: `Monometrica`, x: 88, y: 62, color: `#14b8a6`, html: `Pianta in vera forma, z verticale.`, why: `Per l'architettura: la pianta si ruota e si innalza.` },
        { id: `pro`, label: `Prospettiva`, x: 50, y: 90, color: `#3b82f6`, html: `Rette parallele convergono.`, why: `L'assonometria è un caso limite: punto di vista all'infinito, nessuna convergenza.` }
      ],
      edges: [[`ass`, `ort`, `tipo`], [`ass`, `obl`, `tipo`], [`ort`, `iso`, `caso`], [`obl`, `cav`, `caso`], [`obl`, `mon`, `caso`], [`iso`, `pro`, `confronto`], [`cav`, `pro`, `confronto`]]
    },
    {
      type: `quiz`, title: `Mini-quiz: scegliere il metodo`,
      questions: [
        { type: `mc`, q: `Quale metodo useresti per mostrare la pianta di un appartamento "alzata" in tre dimensioni?`, options: [`Monometrica`, `Isometrica`, `Prospettiva con tre punti di fuga`], answer: 0, explain: `La monometrica mantiene la pianta in vera forma.` },
        { type: `num`, q: `In cavaliera con coefficiente 1/2, una profondità reale di 10 cm viene disegnata lunga quanti cm?`, answer: 5, tol: 0, unit: `cm`, explain: `10 × 1/2 = 5 cm.` },
        { type: `tf`, q: `Nell'isometrica tutte le facce del cubo sono rombi.`, answer: true, explain: `I quadrati vengono deformati in rombi con angoli di 60° e 120°.` }
      ]
    }
  ],
  glossary: [
    { t: `Assonometria`, d: `Rappresentazione di un oggetto tridimensionale in un solo disegno, con proiezione parallela su un piano del quadro.` },
    { t: `Piano del quadro`, d: `Piano su cui si proietta l'oggetto.` },
    { t: `Coefficiente di riduzione`, d: `Rapporto tra la lunghezza disegnata e quella reale lungo un asse.` },
    { t: `Isometrica`, d: `Assonometria ortogonale con tre assi a 120° e uguali coefficienti.` },
    { t: `Cavaliera`, d: `Assonometria obliqua con faccia frontale in vera forma e asse di profondità a 45°, ridotto a metà.` },
    { t: `Monometrica`, d: `Assonometria con tre coefficienti uguali e piano orizzontale in vera forma (nell'uso scolastico).` },
    { t: `Raggi proiettanti`, d: `Rette che uniscono i punti dell'oggetto alla loro proiezione sul quadro.` },
    { t: `Vera forma`, d: `Figura rappresentata senza deformazioni, perché parallela al piano del quadro.` },
    { t: `Ovale isometrico`, d: `Costruzione approssimata, ad archi di cerchio, dell'ellisse isometrica.` },
    { t: `Proiezione parallela`, d: `Proiezione con tutti i raggi paralleli (centro all'infinito).` },
    { t: `Terna di assi`, d: `Tre assi x, y, z legati all'oggetto.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Che cosa significa "isometrica"?`, options: [`Di misura uguale`, `Di forma uguale`, `A tre punti di fuga`], answer: 0, explain: `Dal greco ísos, uguale, e métron, misura.` },
      { type: `num`, q: `Quanti gradi formano tra loro gli assi dell'assonometria isometrica?`, answer: 120, tol: 0, unit: `°`, explain: `120° ciascuno.` },
      { type: `mc`, q: `Qual è il coefficiente di riduzione dell'asse della profondità nella cavaliera più usata?`, options: [`1/2`, `1`, `2`], answer: 0, explain: `La profondità è dimezzata, altrimenti l'immagine sembra troppo allungata.` },
      { type: `tf`, q: `In assonometria le rette parallele convergono in un punto di fuga.`, answer: false, explain: `Restano parallele: è proiezione parallela.` },
      { type: `mc`, q: `In cavaliera, quale faccia dell'oggetto si vede in vera forma?`, options: [`La frontale`, `La laterale destra`, `La superiore`], answer: 0, explain: `È parallela al piano del quadro.` },
      { type: `text`, q: `Come si chiama il piano su cui si proietta l'oggetto in assonometria?`, answer: [`piano del quadro`, `quadro`, `il piano del quadro`], explain: `Piano del quadro.` },
      { type: `mc`, q: `Quale conseguenza ha l'isometria sul cerchio?`, options: [`Diventa un'ellisse`, `Resta un cerchio`, `Diventa un quadrato`], answer: 0, explain: `Un cerchio su un piano inclinato appare come un'ellisse.` },
      { type: `num`, q: `Quanti cm si disegnano in cavaliera (coefficiente 1/2) per una profondità reale di 12 cm?`, answer: 6, tol: 0, unit: `cm`, explain: `12 × 1/2 = 6 cm.` },
      { type: `tf`, q: `L'assonometria permette di misurare le lunghezze parallele agli assi con un coefficiente noto.`, answer: true, explain: `È il principio del metodo.` },
      { type: `mc`, q: `Quale metodo ruota la pianta in vera forma e innalza le pareti in verticale?`, options: [`Monometrica`, `Isometrica`, `Prospettiva`], answer: 0, explain: `La monometrica mantiene in vera forma il piano orizzontale.` }
    ]
  }
});
