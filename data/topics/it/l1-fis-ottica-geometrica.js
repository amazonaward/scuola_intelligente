TOPIC('it', {
  id: "l1-fis-ottica-geometrica",
  title: "Ottica geometrica",
  intro: "Perché una cannuccia in un bicchiere sembra spezzata? Come fa un microscopio a ingrandire una cellula e un occhiale a correggere la miopia? Perché le fibre ottiche portano internet nelle nostre case? Per rispondere non serve sapere che cos'è la luce nel profondo: basta descrivere il suo cammino con delle <b>linee rette</b>, i <b>raggi luminosi</b>, e due leggi semplicissime, <b>riflessione</b> e <b>rifrazione</b>. È l'<b>ottica geometrica</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "La luce e i raggi",
      html: `<p>Una <b>sorgente luminosa</b> emette luce (il Sole, una lampadina, uno schermo); un <b>corpo illuminato</b> la rimanda verso i nostri occhi (la Luna, un libro). In un <b>mezzo omogeneo e trasparente</b> (aria, acqua, vetro) la luce si propaga in <b>linea retta</b>: questa è la base dell'ottica geometrica. Il suo cammino si rappresenta con un <b>raggio luminoso</b>, una semplice linea orientata; un insieme di raggi forma un <b>fascio</b> (parallelo, divergente o convergente).</p>
<p>La luce si propaga anche nel <b>vuoto</b> alla velocità</p>
<p style="text-align:center"><b>c = 299 792 458 m/s ≈ 3,00 × 10<sup>8</sup> m/s</b></p>
<p>Il Sole è a circa 150 milioni di km: la sua luce impiega circa 8 minuti e 20 secondi ad arrivare sulla Terra. Il <b>anno luce</b> è la distanza percorsa dalla luce in un anno (circa 9,46 × 10<sup>12</sup> km).</p>
<p>Dalla propagazione rettilinea nascono le <b>ombre</b>: dietro un ostacolo opaco illuminato da una sorgente puntiforme c'è una zona buia netta (<b>ombra</b>); se la sorgente è estesa compare anche una zona di <b>penombra</b>, illuminata solo in parte. Le <b>eclissi</b> sono ombre e penombre astronomiche: nell'eclissi di Sole la Luna proietta la sua ombra sulla Terra; in quella di Luna è la Terra a oscurare la Luna.</p>
<p>Un corpo può essere <b>trasparente</b> (lascia passare la luce), <b>traslucido</b> (la diffonde) o <b>opaco</b> (la assorbe o la riflette). Quando un raggio arriva su una superficie che separa due mezzi, in generale una parte viene <b>riflessa</b>, una parte <b>rifratta</b> e una parte <b>assorbita</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio: misurare l'altezza di un albero con l'ombra",
      html: `<p>Alle 15 un paletto alto 1,5 m proietta un'ombra di 2 m; l'ombra dell'albero è lunga 14 m. I raggi del Sole (molto lontano) sono praticamente paralleli, quindi i due triangoli formati da oggetto, ombra e raggio sono simili:</p>
<ol>
<li>altezza albero / ombra albero = altezza paletto / ombra paletto</li>
<li>h / 14 = 1,5 / 2</li>
<li>h = 14 × 0,75 = <b>10,5 m</b></li>
</ol>
<p>Con questo metodo, basato sulla propagazione rettilinea, già Talete (VI secolo a.C.), secondo la tradizione, misurò l'altezza delle piramidi.</p>`
    },
    {
      type: "text",
      title: "La riflessione e gli specchi piani",
      html: `<p>Quando un raggio colpisce una superficie liscia (uno specchio, l'acqua ferma, un metallo lucido) viene rimandato indietro: è la <b>riflessione</b>. Si misurano gli angoli rispetto alla <b>normale</b>, la perpendicolare alla superficie nel punto d'incidenza.</p>
<p><b>Leggi della riflessione</b>:</p>
<ol>
<li>il raggio incidente, il raggio riflesso e la normale giacciono <b>sullo stesso piano</b>;</li>
<li>l'<b>angolo di riflessione è uguale all'angolo di incidenza</b>: θ<sub>r</sub> = θ<sub>i</sub>.</li>
</ol>
<p>Se la superficie è liscia si ha <b>riflessione speculare</b> (i raggi paralleli restano paralleli); se è scabra, i raggi sono rimandati in tutte le direzioni: <b>diffusione</b>. È grazie alla diffusione che vediamo gli oggetti da ogni posizione, anche se non sono specchi.</p>
<p><b>Specchio piano.</b> L'immagine di un oggetto è:</p>
<ul>
<li><b>virtuale</b> (dietro lo specchio: i raggi non passano davvero di là, ma sembrano provenire da lì);</li>
<li><b>diritta</b> e delle <b>stesse dimensioni</b>;</li>
<li><b>simmetrica</b> rispetto allo specchio: l'immagine sta alla stessa distanza dietro lo specchio a cui sta l'oggetto davanti. Per questo destra e sinistra appaiono scambiate (la tua mano destra diventa la sinistra dell'immagine).</li>
</ul>
<p>Per vederti interamente in uno specchio piano basta che sia alto <b>metà</b> della tua altezza e che il bordo inferiore sia a metà altezza degli occhi dal pavimento.</p>`
    },
    {
      type: "svg",
      title: "Riflessione e rifrazione",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="150" fill="#f0f9ff"/>
<rect y="150" width="600" height="150" fill="#bae6fd"/>
<line x1="0" y1="150" x2="600" y2="150" stroke="#0369a1" stroke-width="3"/>
<line x1="300" y1="20" x2="300" y2="280" stroke="#64748b" stroke-width="2" stroke-dasharray="8 6"/>
<text x="308" y="35" font-size="16" fill="#475569">normale</text>
<line x1="130" y1="50" x2="300" y2="150" stroke="#f59e0b" stroke-width="4"/>
<polygon points="300,150 284,130 274,142" fill="#f59e0b"/>
<line x1="300" y1="150" x2="470" y2="50" stroke="#ef4444" stroke-width="4"/>
<polygon points="470,50 450,52 460,66" fill="#ef4444"/>
<line x1="300" y1="150" x2="390" y2="270" stroke="#16a34a" stroke-width="4"/>
<polygon points="390,270 380,252 368,262" fill="#16a34a"/>
<text x="95" y="45" font-size="17" fill="#b45309" font-weight="bold">raggio incidente</text>
<text x="445" y="38" font-size="17" fill="#b91c1c" font-weight="bold">riflesso</text>
<text x="400" y="275" font-size="17" fill="#15803d" font-weight="bold">rifratto</text>
<text x="215" y="120" font-size="17" fill="#1f2937" font-weight="bold">θi</text>
<text x="345" y="120" font-size="17" fill="#1f2937" font-weight="bold">θr = θi</text>
<text x="335" y="205" font-size="17" fill="#1f2937" font-weight="bold">θ2</text>
<text x="20" y="100" font-size="18" fill="#0c4a6e" font-weight="bold">aria (n1 = 1)</text>
<text x="20" y="190" font-size="18" fill="#0c4a6e" font-weight="bold">acqua (n2 = 1,33)</text>
</svg>`,
      caption: "Un raggio che passa dall'aria all'acqua si divide: una parte è riflessa con θr = θi, una parte entra nell'acqua avvicinandosi alla normale (θ2 < θi)."
    },
    {
      type: "text",
      title: "La rifrazione e la legge di Snell",
      html: `<p>Quando la luce passa da un mezzo a un altro, <b>cambia velocità</b> e, se arriva obliqua, <b>cambia direzione</b>: è la <b>rifrazione</b>. Ogni mezzo trasparente è descritto dal suo <b>indice di rifrazione</b>:</p>
<p style="text-align:center"><b>n = c / v</b></p>
<p>dove v è la velocità della luce in quel mezzo (quindi n ≥ 1 sempre). Valori tipici: aria circa 1,000; acqua 1,33; vetro comune circa 1,5; diamante 2,42.</p>
<p><b>Legge di Snell</b> (o di Snell-Cartesio), formulata dall'olandese Willebrord Snell intorno al 1621 e resa nota da Descartes:</p>
<p style="text-align:center"><b>n<sub>1</sub> · sin θ<sub>1</sub> = n<sub>2</sub> · sin θ<sub>2</sub></b></p>
<p>con gli angoli misurati rispetto alla normale. Conseguenze:</p>
<ul>
<li>passando a un mezzo con n <b>maggiore</b> (più \"denso otticamente\", es. aria → acqua) il raggio <b>si avvicina alla normale</b>;</li>
<li>passando a un mezzo con n <b>minore</b> (acqua → aria) il raggio <b>si allontana dalla normale</b>;</li>
<li>un raggio perpendicolare alla superficie (θ<sub>1</sub> = 0) non devia.</li>
</ul>
<p>La rifrazione spiega perché la cannuccia in un bicchiere sembra spezzata, perché una piscina appare meno profonda di quanto è e perché il Sole al tramonto appare schiacciato: l'atmosfera ha un indice di rifrazione che aumenta verso il basso e curva i raggi.</p>`
    },
    {
      type: "example",
      title: "Esempio: dall'aria all'acqua",
      html: `<p>Un raggio colpisce la superficie di una piscina con un angolo di incidenza di 45°. A quale angolo prosegue nell'acqua (n = 1,33)?</p>
<ol>
<li>1,00 · sin 45° = 1,33 · sin θ<sub>2</sub></li>
<li>sin θ<sub>2</sub> = 0,7071 / 1,33 ≈ 0,532</li>
<li>θ<sub>2</sub> ≈ <b>32°</b></li>
</ol>
<p>Il raggio si è avvicinato alla normale (da 45° a 32°). Per questo un pesce visto dall'alto sembra più vicino alla superficie di quanto sia davvero, e un pescatore con una fiocina deve mirare più in basso di dove lo vede.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: riflessione e rifrazione",
      questions: [
        { type: "num", q: "Un raggio incide su uno specchio con un angolo di 35° rispetto alla normale. Quanto vale l'angolo tra il raggio incidente e quello riflesso?", answer: 70, unit: "°", explain: "θr = θi = 35°, quindi tra i due raggi ci sono 35° + 35° = 70°." },
        { type: "mc", q: "Un raggio passa dall'aria al vetro (n = 1,5) con incidenza obliqua. Il raggio rifratto…", options: ["si allontana dalla normale", "si avvicina alla normale", "non cambia direzione"], answer: 1, explain: "Passando a un mezzo con indice maggiore si avvicina alla normale: sin θ2 = sin θ1 / 1,5 < sin θ1." },
        { type: "num", q: "In un materiale la luce viaggia a 2,0 × 10^8 m/s. Quanto vale l'indice di rifrazione (c = 3,0 × 10^8 m/s)?", answer: 1.5, tol: 0.01, explain: "n = c/v = 3,0 × 10^8 / 2,0 × 10^8 = 1,5." }
      ]
    },
    {
      type: "text",
      title: "La riflessione totale e le fibre ottiche",
      html: `<p>Quando la luce passa da un mezzo con n maggiore a uno con n minore (per esempio da acqua ad aria), il raggio si allontana dalla normale. Aumentando l'angolo d'incidenza si arriva a un <b>angolo limite</b> θ<sub>L</sub> per cui il raggio rifratto \"striscia\" lungo la superficie (θ<sub>2</sub> = 90°):</p>
<p style="text-align:center"><b>sin θ<sub>L</sub> = n<sub>2</sub> / n<sub>1</sub></b> (con n<sub>2</sub> &lt; n<sub>1</sub>)</p>
<p>Oltre questo angolo non c'è più raggio rifratto: tutta la luce viene riflessa. È la <b>riflessione totale</b>. Per acqua-aria θ<sub>L</sub> = arcsin(1/1,33) ≈ 48,8°; per vetro-aria (n = 1,5) ≈ 41,8°. Questa è la ragione dei riflessi \"argentati\" che vedi guardando verso l'alto la superficie dell'acqua da sott'acqua, e del brillio del diamante (θ<sub>L</sub> ≈ 24,4°, molto piccolo: la luce rimbalza dentro la pietra prima di uscire).</p>
<p>Le <b>fibre ottiche</b> sono fili sottilissimi di vetro: la luce, entrando dentro con un'inclinazione piccola, subisce continue riflessioni totali sulle pareti e viaggia anche per centinaia di km seguendo le curve. Trasportano gran parte del traffico internet e sono usate in medicina (endoscopi).</p>`
    },
    {
      type: "text",
      title: "Specchi sferici",
      html: `<p>Uno <b>specchio sferico</b> è una calotta di sfera di raggio R. Ha un <b>centro di curvatura</b> C, un <b>vertice</b> V e un <b>asse ottico</b> (la retta CV). Per raggi vicini all'asse (condizione di Gauss) quelli paralleli all'asse si incontrano in un punto, il <b>fuoco</b> F, a distanza</p>
<p style="text-align:center"><b>f = R / 2</b></p>
<ul>
<li>Specchio <b>concavo</b> (riflette sulla parte interna, come un cucchiaio): <b>converge</b> i raggi, fuoco reale; con f &gt; 0. Si usa nei fari, nelle parabole, nei telescopi riflettori e negli specchi per il trucco;</li>
<li>Specchio <b>convesso</b> (riflette sulla parte esterna): <b>diverge</b> i raggi, fuoco virtuale (f &lt; 0). Dà sempre un'immagine virtuale, diritta e rimpicciolita, con un campo visivo ampio: è lo specchio dei retrovisori e dei parcheggi.</li>
</ul>
<p>Detti <b>p</b> la distanza dell'oggetto dallo specchio e <b>q</b> quella dell'immagine, vale l'<b>equazione dei punti coniugati</b>:</p>
<p style="text-align:center"><b>1/p + 1/q = 1/f</b></p>
<p>e l'<b>ingrandimento</b> G = −q/p (G &lt; 0: immagine capovolta; |G| &gt; 1: ingrandita). Per lo specchio concavo, se l'oggetto è oltre il centro C l'immagine è reale, capovolta e rimpicciolita; tra C e F reale, capovolta e ingrandita; tra F e V virtuale, diritta e ingrandita (come lo specchio per la barba).</p>`
    },
    {
      type: "example",
      title: "Esempio: l'immagine in uno specchio concavo",
      html: `<p>Uno specchio concavo ha raggio di curvatura R = 40 cm. Una candela è a p = 60 cm dal vertice. Dove si forma l'immagine?</p>
<ol>
<li>Fuoco: f = R/2 = 20 cm.</li>
<li>1/q = 1/f − 1/p = 1/20 − 1/60 = 3/60 − 1/60 = 2/60 = 1/30 → <b>q = 30 cm</b> (positivo: immagine reale, davanti allo specchio).</li>
<li>Ingrandimento: G = −q/p = −30/60 = <b>−0,5</b>: immagine capovolta e grande la metà.</li>
</ol>
<p>Se avviciniamo la candela a p = 10 cm (tra F e V): 1/q = 1/20 − 1/10 = −1/20 → q = −20 cm (virtuale, dietro lo specchio), G = −(−20)/10 = +2: diritta e doppia. È ciò che vedi nello specchio da trucco.</p>`
    },
    {
      type: "text",
      title: "Le lenti sottili",
      html: `<p>Una <b>lente</b> è un pezzo di materiale trasparente (vetro o plastica) limitato da superfici curve; i raggi si deviano due volte per rifrazione, entrando e uscendo. Per una <b>lente sottile</b> valgono le stesse relazioni degli specchi:</p>
<p style="text-align:center"><b>1/p + 1/q = 1/f &nbsp;&nbsp;&nbsp; G = −q/p</b></p>
<ul>
<li><b>Lente convergente</b> (più spessa al centro, f &gt; 0): i raggi paralleli all'asse convergono nel fuoco. Se l'oggetto è oltre il fuoco dà un'immagine reale e capovolta (come la macchina fotografica, il proiettore, il nostro occhio); se è tra lente e fuoco dà un'immagine virtuale, diritta e ingrandita: è la <b>lente d'ingrandimento</b>;</li>
<li><b>Lente divergente</b> (più sottile al centro, f &lt; 0): i raggi si allargano; l'immagine è sempre virtuale, diritta e rimpicciolita.</li>
</ul>
<p>Il <b>potere diottrico</b> di una lente si misura in <b>diottrie</b> (D): P = 1/f con f in metri. Una lente con f = 50 cm = 0,5 m ha P = +2 D; una con f = −25 cm ha P = −4 D. Più è alta la potenza, più la lente devia i raggi.</p>
<p><b>Occhio e occhiali.</b> Nell'occhio la cornea e il cristallino formano sulla retina un'immagine reale e capovolta (il cervello la raddrizza). Nella <b>miopia</b> l'immagine di un oggetto lontano si forma <b>prima</b> della retina (occhio troppo lungo): si corregge con una lente <b>divergente</b> (diottrie negative). Nell'<b>ipermetropia</b> si forma <b>dopo</b> la retina: si corregge con una lente <b>convergente</b> (diottrie positive). Anche la presbiopia, tipica dopo i 45 anni, si corregge con lenti convergenti.</p>`
    },
    {
      type: "widget",
      title: "Specchio o lente, convergente o divergente?",
      widget: "classify",
      options: { groups: ["Converge i raggi", "Diverge i raggi"], items: [
        ["🪞 specchio concavo", 0],
        ["🔍 lente d'ingrandimento (convergente)", 0],
        ["👓 lente per la miopia", 1],
        ["🚗 specchietto retrovisore (convesso)", 1],
        ["👓 lente per l'ipermetropia", 0],
        ["🔭 specchio principale di un telescopio riflettore", 0],
        ["🪞 specchio di sorveglianza nei negozi (convesso)", 1],
        ["📷 obiettivo di una macchina fotografica (insieme convergente)", 0]
      ] },
      caption: "Ricorda: concavo e convergente fanno convergere i raggi (f > 0); convesso e divergente li fanno divergere (f < 0)."
    },
    {
      type: "curiosity",
      title: "Alhazen e il primo libro di ottica",
      html: `<p>L'ottica come scienza sperimentale nasce nel mondo islamico. <b>Ibn al-Haytham</b> (latinizzato Alhazen, circa 965-1040), nato a Bassora e attivo al Cairo, scrisse tra il 1011 e il 1021 il <i>Libro dell'ottica</i>. Dimostrò con esperimenti, usando la camera oscura, che vediamo perché la luce <b>entra</b> nell'occhio da un oggetto, e non perché l'occhio \"emette\" raggi, come credevano molti filosofi greci. Il suo metodo, fatto di ipotesi verificate da esperimenti ripetibili, è considerato un precursore del metodo scientifico moderno. Tradotto in latino, il suo libro influenzò Roger Bacon, Keplero e Leonardo.</p>`
    },
    {
      type: "curiosity",
      title: "Miraggi e il Sole \"in anticipo\"",
      html: `<p>Sulle strade d'estate vediamo a volte delle \"pozze d'acqua\" che spariscono quando ci avviciniamo: è un <b>miraggio</b>. L'asfalto bollente scalda l'aria a contatto, che ha un indice di rifrazione minore dell'aria sovrastante: i raggi del cielo si incurvano verso l'alto prima di arrivare ai nostri occhi, e vediamo una porzione di cielo \"per terra\", che sembra acqua. Anche il tramonto è un effetto di rifrazione: quando il Sole appare appena toccare l'orizzonte, in realtà è già sotto di circa mezzo grado, e la sua immagine è un po' schiacciata perché l'atmosfera curva i raggi.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la rifrazione",
      intro: "Perché la luce si piega quando cambia mezzo? Tre immagini diverse, che portano alla stessa legge.",
      tabs: [
        {
          label: "🏖️ Il bagnino di Fermat",
          html: `<p>Un bagnino deve raggiungere un nuotatore in mare partendo dalla spiaggia. Sulla sabbia corre veloce, in acqua nuota più lentamente. Il percorso più rapido <b>non è la retta</b>: conviene correre un po' più a lungo sulla sabbia e nuotare meno in acqua. Pierre de Fermat (1601-1665) capì che la luce fa lo stesso: tra due punti sceglie il cammino che richiede il <b>tempo minimo</b> (<b>principio di Fermat</b>). Da questo principio si deduce sia la riflessione sia la legge di Snell, e spiega perché la luce si piega verso la normale quando rallenta (entrando in un mezzo con n maggiore).</p>`
        },
        {
          label: "🛒 Il carrello sul prato",
          html: `<p>Un carrello con le ruote affiancate arriva obliquo dall'asfalto liscio a un prato erboso. La ruota che tocca per prima l'erba rallenta, mentre l'altra continua veloce: il carrello <b>gira</b> verso la ruota lenta e cambia direzione. Allo stesso modo un fronte di luce che entra obliquo in un mezzo più lento ruota. Questa analogia è molto simile a quella usata da Huygens e dai sostenitori della teoria ondulatoria della luce nel Seicento.</p>`
        },
        {
          label: "✏️ Come si traccia un raggio nelle lenti",
          html: `<p>Per costruire l'immagine di un oggetto in una lente convergente bastano due raggi \"speciali\" che partono dalla punta della freccia:</p>
<ol>
<li>il raggio <b>parallelo</b> all'asse: dopo la lente passa per il <b>fuoco</b>;</li>
<li>il raggio che passa per il <b>centro</b> della lente: non devia.</li>
</ol>
<p>Dove si incontrano (o i loro prolungamenti) si forma la punta dell'immagine.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<line x1="20" y1="150" x2="580" y2="150" stroke="#64748b" stroke-width="2"/>
<path d="M300 40 Q320 150 300 260 Q280 150 300 40 Z" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/>
<circle cx="210" cy="150" r="5" fill="#111827"/><text x="203" y="178" font-size="16" fill="#111827" font-weight="bold">F</text>
<circle cx="390" cy="150" r="5" fill="#111827"/><text x="383" y="178" font-size="16" fill="#111827" font-weight="bold">F'</text>
<line x1="100" y1="150" x2="100" y2="100" stroke="#16a34a" stroke-width="5"/>
<polygon points="100,95 93,110 107,110" fill="#16a34a"/>
<text x="60" y="130" font-size="16" fill="#15803d" font-weight="bold">oggetto</text>
<line x1="100" y1="100" x2="300" y2="100" stroke="#f59e0b" stroke-width="3"/>
<line x1="300" y1="100" x2="490" y2="205" stroke="#f59e0b" stroke-width="3"/>
<line x1="100" y1="100" x2="490" y2="198" stroke="#ef4444" stroke-width="3"/>
<line x1="490" y1="150" x2="490" y2="200" stroke="#dc2626" stroke-width="5"/>
<polygon points="490,205 483,190 497,190" fill="#dc2626"/>
<text x="500" y="232" font-size="16" fill="#b91c1c" font-weight="bold">immagine reale e capovolta</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'ottica geometrica",
      nodes: [
        { id: "luce", label: "Raggi luminosi", x: 50, y: 6, color: "#64748b", html: "Modello: la luce si propaga in linea retta in un mezzo omogeneo.", why: "È un modello approssimato, valido quando gli oggetti sono molto più grandi della lunghezza d'onda della luce (circa mezzo millesimo di mm). Quando non è così intervengono diffrazione e interferenza." },
        { id: "ombre", label: "Ombre ed eclissi", x: 15, y: 25, color: "#94a3b8", html: "Zone non raggiunte dalla luce dietro un ostacolo.", why: "Sono la prova più semplice della propagazione rettilinea: già gli antichi Greci misurarono con ombre e geometria dimensioni della Terra (Eratostene) e distanze astronomiche." },
        { id: "riflessione", label: "Riflessione", x: 50, y: 28, color: "#ef4444", html: "θr = θi, raggi nello stesso piano.", why: "Deriva dal principio di Fermat: il cammino riflesso più breve è quello con angoli uguali. Euclide e Erone la conoscevano già." },
        { id: "rifrazione", label: "Rifrazione", x: 82, y: 28, color: "#16a34a", html: "n1 sin θ1 = n2 sin θ2.", why: "La luce rallenta nei mezzi con n maggiore (n = c/v). Snell (1621) e Descartes la formularono; Fermat la dedusse dal principio del tempo minimo (1662)." },
        { id: "specchi", label: "Specchi", x: 28, y: 55, color: "#f59e0b", html: "Piani e sferici: 1/p + 1/q = 1/f.", why: "Nello specchio sferico il fuoco sta a R/2 perché per raggi vicini all'asse la geometria del cerchio fa convergere i raggi riflessi a metà strada fra vertice e centro." },
        { id: "riftot", label: "Riflessione totale", x: 82, y: 55, color: "#0ea5e9", html: "Oltre l'angolo limite sin θL = n2/n1 non c'è raggio rifratto.", why: "È la legge di Snell portata al limite: se sin θ2 dovrebbe superare 1, non esiste soluzione e tutta la luce viene riflessa. Rende possibili le fibre ottiche." },
        { id: "lenti", label: "Lenti", x: 62, y: 78, color: "#9333ea", html: "Convergenti e divergenti, potere in diottrie.", why: "Una lente è una sequenza di due rifrazioni su superfici curve; la forma fa deviare di più i raggi lontani dal centro, così da farli convergere in un punto." },
        { id: "occhio", label: "Occhio e strumenti", x: 30, y: 92, color: "#22c55e", html: "Occhiali, microscopio, telescopio, macchina fotografica.", why: "Tutti combinano lenti o specchi. Il telescopio fu perfezionato da Galileo nel 1609; Keplero capì nel 1604 il funzionamento ottico dell'occhio e come correggere i difetti." }
      ],
      edges: [["luce", "ombre", "prova"], ["luce", "riflessione", "su superfici"], ["luce", "rifrazione", "tra mezzi"], ["riflessione", "specchi", "applicazione"], ["rifrazione", "riftot", "caso limite"], ["rifrazione", "lenti", "applicazione"], ["lenti", "occhio", "strumenti"], ["specchi", "occhio", "strumenti"]]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>La luce si propaga in linea retta; nel vuoto c = 3,00 × 10<sup>8</sup> m/s.</li>
<li><b>Riflessione</b>: θ<sub>r</sub> = θ<sub>i</sub>. Lo specchio piano dà un'immagine virtuale, diritta, simmetrica.</li>
<li><b>Rifrazione</b>: n = c/v; n<sub>1</sub> sin θ<sub>1</sub> = n<sub>2</sub> sin θ<sub>2</sub>. Verso n maggiore ci si avvicina alla normale.</li>
<li><b>Riflessione totale</b> se n<sub>1</sub> &gt; n<sub>2</sub> e θ &gt; θ<sub>L</sub>, con sin θ<sub>L</sub> = n<sub>2</sub>/n<sub>1</sub>.</li>
<li>Specchi e lenti sottili: <b>1/p + 1/q = 1/f</b>, G = −q/p; specchio sferico f = R/2; potenza P = 1/f (diottrie).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: specchi e lenti",
      questions: [
        { type: "num", q: "Una lente convergente ha distanza focale 10 cm. Un oggetto è a 30 cm. A quale distanza (in cm) si forma l'immagine?", answer: 15, unit: "cm", explain: "1/q = 1/10 − 1/30 = 2/30, quindi q = 15 cm." },
        { type: "num", q: "Quanti diottrie ha una lente convergente con distanza focale di 25 cm?", answer: 4, unit: "D", explain: "P = 1/f = 1/0,25 m = 4 D." },
        { type: "mc", q: "Quale lente corregge la miopia?", options: ["Convergente", "Divergente", "Piana"], answer: 1, explain: "Nell'occhio miope l'immagine si forma prima della retina: serve una lente divergente per spostarla indietro." },
        { type: "tf", q: "Lo specchio convesso dà sempre un'immagine virtuale, diritta e rimpicciolita.", answer: true, explain: "Per qualunque posizione dell'oggetto: è per questo che si usa nei retrovisori, con un campo visivo ampio." }
      ]
    }
  ],
  glossary: [
    { t: "Raggio luminoso", d: "Linea orientata che rappresenta il cammino della luce." },
    { t: "Normale", d: "Retta perpendicolare a una superficie nel punto in cui arriva un raggio." },
    { t: "Riflessione", d: "Ritorno della luce nello stesso mezzo dopo l'urto con una superficie: θr = θi." },
    { t: "Rifrazione", d: "Cambio di direzione della luce quando passa da un mezzo a un altro." },
    { t: "Indice di rifrazione", d: "n = c/v: rapporto tra la velocità della luce nel vuoto e quella nel mezzo." },
    { t: "Angolo limite", d: "Angolo di incidenza oltre il quale si ha riflessione totale: sin θL = n2/n1." },
    { t: "Fuoco", d: "Punto in cui convergono i raggi paralleli all'asse dopo uno specchio o una lente." },
    { t: "Distanza focale", d: "Distanza tra fuoco e specchio o lente: f = R/2 per gli specchi sferici." },
    { t: "Immagine reale / virtuale", d: "Reale: formata da raggi che si incontrano davvero. Virtuale: formata dai prolungamenti dei raggi." },
    { t: "Diottria", d: "Unità del potere di una lente: 1 D = 1 m⁻¹." },
    { t: "Fibra ottica", d: "Filo di vetro nel quale la luce viaggia per riflessione totale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è l'ipotesi alla base dell'ottica geometrica?", options: ["La luce si propaga in linea retta in un mezzo omogeneo", "La luce è fatta di sole onde", "La luce si ferma sugli specchi"], answer: 0, explain: "Il modello dei raggi rettilinei descrive molto bene la formazione di ombre, specchi e lenti." },
      { type: "num", q: "Un raggio incide su uno specchio piano con un angolo di 28° rispetto alla normale. Quanto vale l'angolo di riflessione?", answer: 28, unit: "°", explain: "Per la legge della riflessione θr = θi = 28°." },
      { type: "num", q: "La luce in un liquido viaggia a 2,25 × 10^8 m/s. Calcola l'indice di rifrazione (c = 3,0 × 10^8 m/s). Arrotonda a due decimali.", answer: 1.33, tol: 0.01, explain: "n = c/v = 3,0/2,25 = 1,33: è l'acqua." },
      { type: "tf", q: "Passando dall'acqua all'aria un raggio obliquo si avvicina alla normale.", answer: false, explain: "Passando a un mezzo con n minore (aria) il raggio si allontana dalla normale." },
      { type: "num", q: "Un raggio passa dall'aria (n = 1) al vetro (n = 1,5) con incidenza di 30°. Quanto vale sin θ2 (arrotonda a due decimali)?", answer: 0.33, tol: 0.01, explain: "sin θ2 = sin 30° / 1,5 = 0,5/1,5 ≈ 0,33, cioè θ2 ≈ 19,5°." },
      { type: "mc", q: "Perché una fibra ottica trasporta la luce senza disperderla?", options: ["Perché è in metallo", "Per riflessione totale sulle pareti interne", "Perché la luce si ferma nel vetro"], answer: 1, explain: "Dentro la fibra la luce incide sulle pareti con angoli superiori all'angolo limite: si riflette totalmente e prosegue." },
      { type: "num", q: "Uno specchio concavo ha raggio di curvatura di 60 cm. Quale distanza focale (in cm)?", answer: 30, unit: "cm", explain: "f = R/2 = 30 cm." },
      { type: "num", q: "Una lente ha f = 20 cm e un oggetto è posto a 60 cm. Calcola la distanza dell'immagine (in cm).", answer: 30, unit: "cm", explain: "1/q = 1/20 − 1/60 = 2/60, quindi q = 30 cm; G = −0,5." },
      { type: "tf", q: "Una lente d'ingrandimento è una lente convergente con l'oggetto tra lente e fuoco.", answer: true, explain: "In questo caso l'immagine è virtuale, diritta e ingrandita." },
      { type: "order", q: "Metti in ordine i passi per costruire graficamente l'immagine in una lente convergente.", items: ["Disegnare asse ottico, lente e fuochi", "Disegnare l'oggetto e un raggio parallelo all'asse", "Far passare il raggio per il fuoco dopo la lente", "Disegnare il raggio per il centro della lente", "Trovare l'intersezione: lì si forma l'immagine"], explain: "Bastano due raggi speciali: dove si incontrano si trova la punta dell'immagine." },
      { type: "text", q: "Come si chiama il fenomeno per cui un raggio, oltre un certo angolo, non esce più dal mezzo ma viene tutto rimandato indietro?", answer: ["riflessione totale", "la riflessione totale"], explain: "È la riflessione totale, che avviene oltre l'angolo limite." }
    ]
  }
});
