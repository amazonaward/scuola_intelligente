TOPIC('it', {
  id: "l4-fis-luce-onda",
  title: "La luce come onda",
  intro: "Nell'ottica geometrica la luce viaggia in raggi rettilinei e basta una riga e un righello per prevedere riflessioni e rifrazioni. Ma se facciamo passare la luce attraverso due fenditure sottilissime compare qualcosa che nessun «raggio» può spiegare: <b>strisce chiare e scure alternate</b>. È la firma di un'<b>onda</b>. In questa lezione ripercorriamo la lunga disputa tra chi vedeva la luce come particelle e chi come onda, studiamo l'<b>esperimento di Young</b>, la <b>diffrazione</b>, i <b>reticoli</b> e i colori delle bolle di sapone, e scopriamo perché Maxwell riconobbe nella luce un'onda elettromagnetica.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Onda o corpuscolo? Una disputa di due secoli",
      html: `<p>Che cos'è la luce? Nel Seicento la risposta divide i più grandi scienziati.</p>
<ul>
<li><b>Isaac Newton</b> (<i>Opticks</i>, 1704) privilegia un modello <b>corpuscolare</b>: la luce è un flusso di minuscole particelle. Spiega bene la propagazione rettilinea e la riflessione, e Newton è così autorevole che la sua idea domina il Settecento.</li>
<li><b>Christiaan Huygens</b> (presentato nel 1678, <i>Traité de la lumière</i>, 1690) propone un modello <b>ondulatorio</b>: ogni punto raggiunto da un fronte d'onda diventa sorgente di onde secondarie sferiche, e il nuovo fronte è l'<b>inviluppo</b> di queste (<b>principio di Huygens</b>). Da qui ricava riflessione e rifrazione.</li>
</ul>
<p>I due modelli fanno una previsione opposta sulla rifrazione: se la luce è un corpuscolo, entrando nell'acqua dovrebbe <b>accelerare</b>; se è un'onda, dovrebbe <b>rallentare</b>. Ma nel Seicento non si sapeva misurare la velocità della luce nell'acqua. Bisognerà aspettare <b>Léon Foucault</b> (1850), che misurò una velocità <b>minore</b> in acqua che in aria: fine del modello corpuscolare newtoniano. Prima ancora, però, i fenomeni di interferenza e diffrazione avevano già dato la vittoria all'onda.</p>
<p>La sintesi arrivò nel 1865 con <b>James Clerk Maxwell</b>: la luce è un'<b>onda elettromagnetica</b>, un campo elettrico e uno magnetico che oscillano perpendicolarmente tra loro e alla direzione di propagazione. Le onde elettromagnetiche furono prodotte in laboratorio da <b>Heinrich Hertz</b> nel 1887-88. Nel XX secolo la storia ebbe un colpo di scena (la luce si comporta anche come flusso di <b>fotoni</b>: Einstein, 1905), ma i fenomeni di questa lezione restano spiegati perfettamente dal modello ondulatorio.</p>`
    },
    {
      type: "widget",
      title: "Cronologia: da Huygens a Maxwell",
      widget: "timeline",
      options: { unit: "anni", events: [
        { year: 1676, label: "Rømer: velocità finita della luce", icon: "⏱️" },
        { year: 1678, label: "Huygens: teoria ondulatoria", icon: "🌊" },
        { year: 1704, label: "Newton: Opticks, corpuscoli", icon: "⚪" },
        { year: 1801, label: "Young: interferenza", icon: "〰️" },
        { year: 1818, label: "Fresnel: teoria della diffrazione", icon: "🔬" },
        { year: 1850, label: "Foucault: luce più lenta in acqua", icon: "💧" },
        { year: 1865, label: "Maxwell: luce = onda e.m.", icon: "⚡" },
        { year: 1905, label: "Einstein: il fotone", icon: "✨" }
      ] },
      caption: "Quasi tre secoli di esperimenti e idee per capire che cos'è la luce."
    },
    {
      type: "text",
      title: "Le grandezze della luce",
      html: `<p>Nel vuoto la luce viaggia alla velocità <b>c = 299 792 458 m/s ≈ 3,00·10<sup>8</sup> m/s</b>, valore esatto per definizione del metro. Per la luce vale ancora <b>c = λ·f</b>. Il nostro occhio rileva le onde con <b>λ da circa 400 nm (violetto) a 700 nm (rosso)</b> (1 nm = 10<sup>-9</sup> m), cioè frequenze da ≈ 4,3·10<sup>14</sup> Hz a ≈ 7,5·10<sup>14</sup> Hz. Fuori da questa finestra ci sono le altre onde elettromagnetiche: infrarossi, microonde, onde radio da un lato; ultravioletti, raggi X, raggi gamma dall'altro.</p>
<p>In un mezzo trasparente la luce è più lenta: l'<b>indice di rifrazione</b> n = c/v è sempre ≥ 1 (aria ≈ 1,0003; acqua ≈ 1,33; vetro ≈ 1,5; diamante ≈ 2,4). Quando la luce entra in un mezzo la <b>frequenza non cambia</b> (la fissa la sorgente), mentre la lunghezza d'onda diventa <b>λ' = λ/n</b>. Il colore dipende dalla frequenza, non dalla lunghezza d'onda: un raggio verde resta verde anche sott'acqua.</p>
<p>La legge di Snell n<sub>1</sub>·sen θ<sub>1</sub> = n<sub>2</sub>·sen θ<sub>2</sub>, già vista nell'ottica geometrica, nasce proprio dal rallentamento dei fronti d'onda nel mezzo più denso, come mostra il principio di Huygens. La <b>dispersione</b> (n dipende leggermente da λ) spiega l'arcobaleno e il prisma.</p>`
    },
    {
      type: "example",
      title: "Frequenza e lunghezza d'onda",
      html: `<p>Luce verde con λ = 550 nm nel vuoto: f = c/λ = 3,00·10<sup>8</sup>/(550·10<sup>-9</sup>) ≈ <b>5,45·10<sup>14</sup> Hz</b>.</p>
<p>Nel vetro con n = 1,5: la frequenza è la stessa, la velocità è v = c/n = 2,0·10<sup>8</sup> m/s e la lunghezza d'onda è λ' = 550/1,5 ≈ <b>367 nm</b>.</p>
<p>La frequenza è così alta (centinaia di terahertz) che nessun rivelatore elettronico riesce a seguire direttamente le oscillazioni: ci accorgiamo della natura ondulatoria solo con effetti come l'interferenza, quando le strutture in gioco sono dell'ordine della lunghezza d'onda, cioè frazioni di micrometro.</p>`
    },
    {
      type: "text",
      title: "L'esperimento di Young: la doppia fenditura",
      html: `<p>Intorno al 1801-1803 il medico e fisico inglese <b>Thomas Young</b> fece passare la luce del Sole, attraverso un piccolo foro e poi attraverso due fenditure vicinissime, su uno schermo. Se la luce fosse composta da corpuscoli, si vedrebbero due strisce luminose. Si osservano invece <b>molte frange chiare e scure alternate</b>: la luce proveniente dalle due fenditure, che si comportano come due sorgenti coerenti (stessa fase), <b>interferisce</b>.</p>
<p>Sia <b>d</b> la distanza tra le fenditure e <b>L</b> la distanza dallo schermo (L ≫ d). In un punto dello schermo, visto sotto l'angolo θ rispetto all'asse, la differenza di cammino tra i due raggi è <b>Δ = d·sen θ</b>. Come per le onde meccaniche:</p>
<ul>
<li><b>frange chiare</b> (massimi): <b>d·sen θ = m·λ</b>, con m = 0, ±1, ±2, … (m è l'<b>ordine</b>; m = 0 è la frangia centrale);</li>
<li><b>frange scure</b> (minimi): <b>d·sen θ = (m + ½)·λ</b>.</li>
</ul>
<p>Per angoli piccoli (sen θ ≈ tg θ ≈ y/L) la posizione della frangia chiara m-esima è y<sub>m</sub> = m·λ·L/d e la distanza tra due frange consecutive (<b>interfrangia</b>) è</p>
<p style="text-align:center"><b>Δy = λ·L / d</b></p>
<p>Fenditure più vicine (d piccolo) o schermo più lontano (L grande) o luce di lunghezza d'onda maggiore danno frange più distanziate. Dalla misura di Δy, L e d Young ricavò per la prima volta la lunghezza d'onda della luce (qualche centinaio di nanometri). Con luce bianca ogni colore ha frange in posizioni diverse: le frange laterali appaiono colorate, con il rosso più lontano dal centro del violetto.</p>`
    },
    {
      type: "svg",
      title: "La geometria dell'esperimento di Young",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#0f172a"/>
<g font-family="sans-serif">
<line x1="150" y1="20" x2="150" y2="125" stroke="#e2e8f0" stroke-width="6"/>
<line x1="150" y1="135" x2="150" y2="165" stroke="#e2e8f0" stroke-width="6"/>
<line x1="150" y1="175" x2="150" y2="280" stroke="#e2e8f0" stroke-width="6"/>
<line x1="500" y1="20" x2="500" y2="280" stroke="#94a3b8" stroke-width="6"/>
<line x1="20" y1="150" x2="150" y2="150" stroke="#fde047" stroke-width="3"/>
<line x1="150" y1="130" x2="500" y2="90" stroke="#fde047" stroke-width="2"/>
<line x1="150" y1="170" x2="500" y2="90" stroke="#fde047" stroke-width="2"/>
<line x1="150" y1="130" x2="500" y2="150" stroke="#fde047" stroke-width="1" stroke-dasharray="5 5"/>
<line x1="150" y1="170" x2="500" y2="150" stroke="#fde047" stroke-width="1" stroke-dasharray="5 5"/>
<circle cx="500" cy="150" r="5" fill="#facc15"/>
<circle cx="500" cy="90" r="5" fill="#f97316"/>
<g stroke="#38bdf8" stroke-width="2"><line x1="120" y1="130" x2="120" y2="170"/><line x1="112" y1="130" x2="128" y2="130"/><line x1="112" y1="170" x2="128" y2="170"/></g>
<text x="60" y="155" font-size="16" fill="#38bdf8" font-weight="bold">d</text>
<line x1="150" y1="262" x2="500" y2="262" stroke="#4ade80" stroke-width="2"/>
<line x1="150" y1="254" x2="150" y2="270" stroke="#4ade80" stroke-width="2"/>
<line x1="500" y1="254" x2="500" y2="270" stroke="#4ade80" stroke-width="2"/>
<text x="325" y="290" font-size="16" fill="#4ade80" text-anchor="middle" font-weight="bold">L</text>
<text x="515" y="150" font-size="14" fill="#fde68a">m = 0 (centro)</text>
<text x="515" y="94" font-size="14" fill="#fdba74">m = 1</text>
<text x="515" y="120" font-size="14" fill="#cbd5e1">schermo</text>
<text x="200" y="55" font-size="15" fill="#e2e8f0">Δ = d · sen θ</text>
<text x="200" y="75" font-size="14" fill="#cbd5e1">massimo se Δ = m·λ</text>
</g>
</svg>`,
      caption: "Dalle due fenditure partono due raggi che percorrono cammini diversi per raggiungere un punto dello schermo; la differenza Δ decide se si rafforzano o si annullano."
    },
    {
      type: "example",
      title: "Quanto sono distanti le frange?",
      html: `<p>Un laser rosso con λ = 650 nm illumina due fenditure con d = 0,25 mm. Lo schermo è a L = 3,0 m. L'interfrangia è</p>
<p style="text-align:center">Δy = λ·L/d = 650·10<sup>-9</sup> × 3,0 / (0,25·10<sup>-3</sup>) = <b>7,8·10<sup>-3</sup> m ≈ 7,8 mm</b>.</p>
<p>La terza frangia chiara (m = 3) si trova a y<sub>3</sub> = 3 × 7,8 ≈ <b>23,4 mm</b> dal centro. Con un laser verde (λ = 532 nm) le frange sarebbero più fitte: Δy = 532·10<sup>-9</sup> × 3,0/(0,25·10<sup>-3</sup>) ≈ 6,4 mm.</p>
<p><b>Problema inverso.</b> Misurando 6,0 mm tra le frange con d = 0,20 mm e L = 2,0 m si ricava λ = Δy·d/L = 6,0·10<sup>-3</sup> × 0,20·10<sup>-3</sup>/2,0 = 6,0·10<sup>-7</sup> m = <b>600 nm</b> (luce arancione).</p>`
    },
    {
      type: "quiz",
      title: "Controlla: Young",
      questions: [
        { type: "mc", q: "Che cosa mostra l'esperimento di Young?", options: ["La luce è composta da corpuscoli", "La luce interferisce, quindi si comporta come un'onda", "La luce non si rifrange", "La luce ha velocità infinita"], answer: 1, explain: "Le frange chiare e scure sono interferenza costruttiva e distruttiva tra le onde provenienti dalle due fenditure." },
        { type: "num", q: "Con λ = 500 nm, d = 0,1 mm e L = 2 m, quanto vale l'interfrangia (in mm)?", answer: 10, tol: 0.1, unit: "mm", explain: "Δy = λ·L/d = 500·10⁻⁹ × 2/(10⁻⁴) = 1,0·10⁻² m = 10 mm." },
        { type: "tf", q: "Avvicinando le due fenditure (d minore), le frange si avvicinano tra loro.", answer: false, explain: "Δy = λL/d: con d minore l'interfrangia aumenta, le frange si allontanano." }
      ]
    },
    {
      type: "decision",
      title: "1801: onda o corpuscolo?",
      html: "<p>Sei un fisico inglese nel 1803. Tutti accettano il modello corpuscolare di Newton, difeso da una tradizione di un secolo. Hai appena osservato che due fasci di luce, sovrapposti, possono produrre <b>zone d'ombra</b> dove prima c'era luce: «luce più luce uguale buio». Un corpuscolo non può cancellarsi con un altro corpuscolo.</p>",
      question: "Come interpreti l'esperimento?",
      options: [
        { label: "Un effetto dell'apparecchio: i bordi delle fenditure deviano i corpuscoli", outcome: "È la tesi dei difensori di Newton, ma non spiega perché le frange si distribuiscano con regolarità matematica dipendente dal colore e dalla distanza tra le fenditure." },
        { label: "La luce è un'onda e le frange sono interferenza", outcome: "È la tesi di Young: spiega quantitativamente posizioni e spaziature delle frange e permette di misurare λ. All'inizio incontrò forti critiche, anche per il peso di Newton." },
        { label: "Rinunciare a spiegare: servono più dati", outcome: "Prudente, ma la scienza avanza proponendo modelli verificabili: quello ondulatorio ne fa previsioni precise e testabili." }
      ],
      answer: 1,
      explain: "Il modello ondulatorio si impose definitivamente dopo il 1818, quando Augustin Fresnel presentò una teoria matematica della diffrazione. Siméon Denis Poisson, che era un sostenitore del modello corpuscolare, ne dedusse come assurda conseguenza che al centro dell'ombra di un disco opaco dovrebbe comparire un punto luminoso. François Arago fece l'esperimento: il punto c'era davvero («macchia di Poisson»)."
    },
    {
      type: "text",
      title: "La diffrazione",
      html: `<p>Quando un'onda incontra un ostacolo o un'apertura di dimensioni confrontabili con la sua lunghezza d'onda, <b>si allarga</b> oltre la zona geometrica: è la <b>diffrazione</b>. Per questo senti una voce dietro l'angolo (λ ≈ 1 m, paragonabile alla porta) ma non vedi chi parla (λ ≈ 5·10<sup>-7</sup> m, tanto più piccola dell'apertura che la luce quasi non si piega).</p>
<p><b>Fenditura singola</b> di larghezza a, illuminata con luce di lunghezza d'onda λ: sullo schermo si forma una frangia centrale molto luminosa e larga, con ai lati frange più deboli. I <b>minimi</b> (scuri) si trovano agli angoli</p>
<p style="text-align:center"><b>a · sen θ = m · λ</b> &nbsp; (m = ±1, ±2, …)</p>
<p>Notare l'inversione rispetto a Young: <b>più la fenditura è stretta, più la luce si apre</b>. Il primo minimo è a sen θ = λ/a: con λ = 500 nm e a = 0,10 mm, sen θ = 5,0·10<sup>-3</sup>, cioè θ = 0,29°; su uno schermo a 2,0 m la frangia centrale è larga 2 × 10 mm = 20 mm. Il fenomeno spiega perché due stelle vicine non si distinguono se il telescopio è troppo piccolo: l'apertura circolare dà una figura di diffrazione (<b>disco di Airy</b>) e il <b>criterio di Rayleigh</b> fissa il minimo angolo risolvibile θ ≈ 1,22·λ/D.</p>
<p>Nell'esperimento di Young reale, ogni fenditura ha una larghezza finita: l'intensità delle frange di interferenza è modulata dalla figura di diffrazione della singola fenditura.</p>`
    },
    {
      type: "text",
      title: "Reticoli, pellicole sottili e polarizzazione",
      html: `<p><b>Reticolo di diffrazione.</b> Se invece di due fenditure se ne usano migliaia equidistanti (passo d = 1/N, con N righe per millimetro), i massimi restano alle stesse condizioni <b>d·sen θ = m·λ</b> ma diventano <b>molto sottili e luminosi</b>. Poiché l'angolo dipende da λ, un reticolo separa i colori meglio di un prisma: è il cuore degli spettrometri, usati per analizzare la luce delle stelle. Il lato inciso di un CD (tracce a passo di 1,6 µm) fa da reticolo e disperde la luce bianca in colori.</p>
<p><b>Pellicole sottili.</b> I colori delle bolle di sapone e delle macchie d'olio sull'acqua nascono dall'interferenza tra la luce riflessa dalla faccia anteriore e da quella posteriore della pellicola. Alla riflessione su un mezzo con indice <b>maggiore</b> l'onda subisce uno sfasamento di mezza lunghezza d'onda (come la corda con estremo fisso). Per una pellicola di spessore t e indice n, nell'aria, la riflessione è <b>massima</b> se 2·n·t = (m + ½)·λ e <b>minima</b> se 2·n·t = m·λ. Il colore cambia con lo spessore e con l'angolo.</p>
<p>Gli <b>strati antiriflesso</b> di lenti e occhiali sfruttano la stessa idea: uno strato di fluoruro di magnesio (n ≈ 1,38) con spessore t = λ/(4n) ≈ 100 nm per λ = 550 nm produce interferenza distruttiva nella luce riflessa, e più luce attraversa la lente.</p>
<p><b>Polarizzazione.</b> Le onde luminose sono <b>trasversali</b>: il campo elettrico oscilla in un piano perpendicolare alla propagazione. La luce naturale ha tutte le direzioni; un filtro polarizzatore ne lascia passare una sola. Se la luce già polarizzata (intensità I<sub>0</sub>) attraversa un secondo polarizzatore ruotato di θ, emerge con <b>I = I<sub>0</sub>·cos²θ</b> (<b>legge di Malus</b>, 1809). Questo fenomeno, impossibile per onde longitudinali come il suono, prova la natura trasversale della luce e permette occhiali polarizzati che riducono i riflessi, schermi LCD e filtri fotografici.</p>`
    },
    {
      type: "example",
      title: "Un reticolo da 500 righe al millimetro",
      html: `<p>Il passo è d = 1 mm/500 = 2,0·10<sup>-3</sup> mm = <b>2,0 µm</b>. Per la luce arancione con λ = 600 nm il massimo del primo ordine è a sen θ<sub>1</sub> = λ/d = 0,30 ⟹ θ<sub>1</sub> ≈ <b>17,5°</b>. Il secondo ordine è a sen θ<sub>2</sub> = 0,60, θ<sub>2</sub> ≈ 36,9°. Il terzo a sen θ<sub>3</sub> = 0,90, θ<sub>3</sub> ≈ 64,2°. Il quarto richiederebbe sen θ = 1,2 &gt; 1: <b>impossibile</b>. Il numero massimo di ordini è dato da m ≤ d/λ = 3,3, quindi 3.</p>
<p>Per un colore blu (λ = 450 nm) θ<sub>1</sub> = arcsen(0,225) ≈ 13°: i colori compaiono ordinati, il rosso più deviato del blu, al contrario del prisma, dove è il blu a deviarsi di più.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: diffrazione e reticoli",
      questions: [
        { type: "tf", q: "Rendere più stretta una fenditura singola allarga la figura di diffrazione.", answer: true, explain: "Dalla condizione a·sen θ = m·λ: con a minore gli angoli dei minimi aumentano." },
        { type: "num", q: "Un reticolo ha 400 righe/mm. Quanto vale il passo d (in µm)?", answer: 2.5, tol: 0.01, unit: "µm", explain: "d = 1 mm/400 = 2,5·10⁻³ mm = 2,5 µm." },
        { type: "mc", q: "Perché si sente una voce dietro un muro ma non si vede chi parla dall'altra parte dell'angolo?", options: ["Il suono è più veloce della luce", "Il suono ha λ grande, paragonabile all'ostacolo, e si diffrange molto; la luce ha λ piccolissima", "La luce non è un'onda", "Il suono è trasversale"], answer: 1, explain: "La diffrazione è rilevante quando λ è confrontabile con le dimensioni dell'apertura o ostacolo: per il suono sì, per la luce quasi mai nella vita quotidiana." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la luce come onda",
      intro: "Se i seni e le differenze di cammino ti confondono, prova un'altra strada.",
      tabs: [
        {
          label: "💧 La vaschetta delle onde",
          html: "<p>Metti due sassolini che toccano l'acqua insieme in uno stagno calmo: da ciascuno partono cerchi concentrici. Dove le creste dei due sistemi si incontrano, l'acqua oscilla di più; dove una cresta incontra un ventre, l'acqua resta ferma: si disegnano <b>linee radiali</b> di acqua mossa e di acqua calma. Le fenditure di Young sono i due sassolini e le frange chiare sono le linee di acqua mossa. L'analogia funziona alla perfezione: infatti Young stesso ricavò l'idea dal comportamento delle onde sull'acqua e del suono.</p>"
        },
        {
          label: "🔗 Abbina fenomeno e formula",
          html: "<p>Collega ogni fenomeno alla sua condizione o relazione.</p>",
          widget: "match",
          options: { pairs: [
            ["Frange chiare di Young", "d·sen θ = m·λ"],
            ["Frange scure di Young", "d·sen θ = (m + ½)·λ"],
            ["Interfrangia", "Δy = λ·L/d"],
            ["Minimi di diffrazione (fenditura singola)", "a·sen θ = m·λ"],
            ["Indice di rifrazione", "n = c/v"],
            ["Legge di Malus", "I = I₀·cos²θ"]
          ] }
        },
        {
          label: "🌈 Disegno: intensità nelle frange",
          html: "<p>Sullo schermo l'intensità oscilla: massimi (chiari) alternati a minimi (scuri), con altezza che decresce ai lati per effetto della diffrazione della singola fenditura.</p>",
          svg: "<svg viewBox='0 0 600 260' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='260' fill='#0f172a'/><g font-family='sans-serif'><line x1='30' y1='200' x2='570' y2='200' stroke='#94a3b8' stroke-width='2'/><path d='M30 200 L 70 200 Q 90 150 110 200 Q 130 170 150 200 Q 170 130 190 200 Q 210 100 230 200 Q 250 60 270 200 L 300 200 L 330 200 Q 350 60 370 200 Q 390 100 410 200 Q 430 130 450 200 Q 470 170 490 200 Q 510 150 530 200 L 570 200' fill='none' stroke='#fde047' stroke-width='3'/><path d='M30 200 L 280 200' stroke='none'/><text x='300' y='30' font-size='15' fill='#e2e8f0' text-anchor='middle' font-weight='bold'>Intensità sullo schermo</text><text x='300' y='225' font-size='14' fill='#cbd5e1' text-anchor='middle'>0</text><text x='300' y='250' font-size='14' fill='#94a3b8' text-anchor='middle'>posizione y sullo schermo</text><text x='110' y='180' font-size='14' fill='#fdba74' text-anchor='middle'>m=−2</text><text x='190' y='180' font-size='14' fill='#fdba74' text-anchor='middle'>m=−1</text><text x='400' y='180' font-size='14' fill='#fdba74' text-anchor='middle'>m=+1</text><text x='490' y='180' font-size='14' fill='#fdba74' text-anchor='middle'>m=+2</text></g></svg>"
        },
        {
          label: "🎶 Analogia con il suono",
          html: "<p>Due altoparlanti che emettono lo stesso tono creano nella stanza zone di suono forte e zone di silenzio: è l'<b>esperimento di Young per il suono</b>. La luce si comporta allo stesso modo, solo con λ di ≈ 500 nm invece di decine di centimetri: ecco perché occorrono fenditure larghe frazioni di millimetro e perché nella vita quotidiana non vediamo l'interferenza della luce di due lampadine (le lampadine non sono <b>coerenti</b>: la fase relativa fluttua milioni di volte al secondo). Il <b>laser</b>, invece, emette luce coerente, e produce frange nitide.</p>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "La macchia di Poisson",
      html: `<p>Nel 1818 l'Académie des sciences di Parigi bandì un concorso sulla diffrazione. Il giovane ingegnere <b>Augustin Fresnel</b> presentò una teoria ondulatoria completa. Nella commissione sedevano diversi sostenitori dell'ottica corpuscolare; <b>Poisson</b> notò che la teoria di Fresnel prediceva una conseguenza che gli sembrava assurda: al centro dell'ombra di un dischetto circolare opaco, dove ci si aspetterebbe il buio più totale, dovrebbe esserci un <b>punto luminoso</b>. <b>François Arago</b> eseguì la prova e trovò il punto, proprio dove previsto. L'obiezione si trasformò nella conferma più clamorosa della teoria ondulatoria.</p>`
    },
    {
      type: "curiosity",
      title: "Il cielo è blu, il tramonto è rosso",
      html: `<p>Anche i colori del cielo dipendono dall'onda: le molecole d'aria <b>diffondono</b> la luce con un'efficienza che cresce molto al diminuire di λ (proporzionale a 1/λ<sup>4</sup>, diffusione di Rayleigh). Il blu (≈ 450 nm) è diffuso circa 5-6 volte più del rosso (≈ 700 nm): il cielo ci appare blu. Al tramonto la luce attraversa uno strato molto più lungo di atmosfera: il blu è quasi tutto diffuso fuori dalla direzione del Sole e restano i toni rossi e arancioni.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Luce = onda elettromagnetica trasversale; <b>c = λ·f</b>; nei mezzi v = c/n e λ' = λ/n, con f invariata. Visibile: 400-700 nm.</li>
<li>Young: massimi <b>d·sen θ = mλ</b>, minimi <b>d·sen θ = (m+½)λ</b>, interfrangia <b>Δy = λL/d</b>.</li>
<li>Diffrazione da fenditura singola: minimi a <b>a·sen θ = mλ</b>; più stretta è l'apertura, più la luce si allarga.</li>
<li>Reticolo: stessi massimi di Young ma molto più sottili, per separare i colori.</li>
<li>Polarizzazione: dimostra che la luce è un'onda <b>trasversale</b>.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa della luce come onda",
      nodes: [
        { id: "modelli", label: "Onda o corpuscolo", x: 15, y: 12, color: "#64748b", html: "Newton (corpuscoli) contro Huygens (onde): due modelli rivali per oltre un secolo.", why: "Servivano esperimenti decisivi: l'interferenza (Young, 1801), la diffrazione (Fresnel, 1818), la velocità minore in acqua (Foucault, 1850). Tutti favorevoli al modello ondulatorio." },
        { id: "maxwell", label: "Onda elettromagnetica", x: 70, y: 10, color: "#2563eb", html: "Campi E e B oscillanti, trasversali, con c ≈ 3,00·10⁸ m/s nel vuoto.", why: "Maxwell (1865) trovò che le sue equazioni prevedevano onde con velocità uguale a quella misurata della luce: ne concluse che la luce è un fenomeno elettromagnetico." },
        { id: "interferenza", label: "Interferenza (Young)", x: 25, y: 48, color: "#16a34a", html: "Frange chiare per d·sen θ = mλ, scure per (m+½)λ; interfrangia λL/d.", why: "Due sorgenti coerenti producono differenze di cammino Δ: la fase relativa decide se le onde si sommano o si sottraggono. Solo le onde si cancellano a vicenda." },
        { id: "diffrazione", label: "Diffrazione", x: 72, y: 48, color: "#f59e0b", html: "Allargamento della luce attraverso aperture dell'ordine di λ; minimi a·sen θ = mλ.", why: "Per il principio di Huygens-Fresnel ogni punto dell'apertura è sorgente di onde secondarie, che interferiscono tra loro dando la figura osservata." },
        { id: "reticolo", label: "Reticoli e spettri", x: 45, y: 82, color: "#8b5cf6", html: "Molte fenditure: massimi nitidi a d·sen θ = mλ, usati per l'analisi spettrale.", why: "Con N fenditure i massimi si restringono di un fattore ~N: servono per separare i colori e riconoscere gli elementi dalle righe spettrali." },
        { id: "polar", label: "Polarizzazione", x: 88, y: 85, color: "#ef4444", html: "La luce è trasversale: I = I₀·cos²θ attraverso un secondo polarizzatore.", why: "Solo un'onda trasversale può avere una direzione di oscillazione privilegiata. Per questo Young (1817) e poi Fresnel (1821) conclusero che la luce è trasversale." }
      ],
      edges: [["modelli", "maxwell", "risolti da"], ["maxwell", "interferenza", "mostra"], ["maxwell", "diffrazione", "mostra"], ["interferenza", "reticolo", "generalizzata a"], ["maxwell", "polar", "implica"]]
    }
  ],
  glossary: [
    { t: "Principio di Huygens", d: "Ogni punto di un fronte d'onda è sorgente di onde secondarie sferiche; il nuovo fronte è il loro inviluppo." },
    { t: "Velocità della luce c", d: "299 792 458 m/s nel vuoto, circa 3,00·10⁸ m/s." },
    { t: "Indice di rifrazione", d: "n = c/v: rapporto tra la velocità della luce nel vuoto e nel mezzo." },
    { t: "Coerenza", d: "Proprietà di sorgenti la cui differenza di fase resta costante nel tempo: necessaria per vedere interferenza." },
    { t: "Interferenza", d: "Sovrapposizione di onde con rafforzamento o indebolimento dell'intensità." },
    { t: "Interfrangia", d: "Distanza tra due frange chiare consecutive: Δy = λL/d." },
    { t: "Diffrazione", d: "Allargamento di un'onda che attraversa un'apertura o aggira un ostacolo di dimensioni confrontabili con λ." },
    { t: "Reticolo di diffrazione", d: "Insieme di molte fenditure equidistanti che separa i colori con massimi nitidi." },
    { t: "Polarizzazione", d: "Selezione di una direzione di oscillazione del campo elettrico di un'onda trasversale." },
    { t: "Dispersione", d: "Dipendenza dell'indice di rifrazione dalla lunghezza d'onda, che separa i colori in un prisma." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Perché l'esperimento di Foucault (1850) fu importante?", options: ["Misurò la massa del fotone", "Mostrò che la luce è più lenta in acqua che in aria, contro il modello corpuscolare di Newton", "Scoprì i raggi X", "Misurò c nel vuoto con precisione assoluta"], answer: 1, explain: "Il modello corpuscolare prevedeva una luce più veloce nell'acqua; la misura di Foucault diede il risultato opposto, in accordo con l'onda." },
      { type: "num", q: "Qual è la frequenza di una luce con λ = 600 nm nel vuoto? (c = 3,0·10⁸ m/s, risposta in 10¹⁴ Hz)", answer: 5, tol: 0.05, unit: "·10¹⁴ Hz", explain: "f = c/λ = 3,0·10⁸/(6,0·10⁻⁷) = 5,0·10¹⁴ Hz." },
      { type: "num", q: "Luce di λ = 600 nm entra nell'acqua (n = 1,33). Qual è la nuova lunghezza d'onda (in nm, circa)?", answer: 451, tol: 2, unit: "nm", explain: "λ' = λ/n = 600/1,33 ≈ 451 nm; la frequenza non cambia." },
      { type: "mc", q: "Nell'esperimento di Young, dove si trova la frangia centrale (m = 0)?", options: ["Sull'asse di simmetria, con luminosità massima", "Sull'asse, ed è scura", "A distanza λ dall'asse", "Dipende dal colore"], answer: 0, explain: "Sull'asse la differenza di cammino è nulla: interferenza costruttiva per qualunque λ." },
      { type: "num", q: "Con d = 0,40 mm, L = 2,0 m e interfrangia 3,0 mm, qual è λ (in nm)?", answer: 600, tol: 6, unit: "nm", explain: "λ = Δy·d/L = 3,0·10⁻³ × 0,40·10⁻³/2,0 = 6,0·10⁻⁷ m = 600 nm." },
      { type: "tf", q: "Con luce bianca, nell'esperimento di Young le frange laterali sono colorate perché ogni λ ha frange in posizioni diverse.", answer: true, explain: "Δy ∝ λ: ogni colore dà una figura con interfrangia diversa; si sovrappongono solo al centro." },
      { type: "mc", q: "In una fenditura singola di larghezza a, il primo minimo di diffrazione si trova a:", options: ["sen θ = λ/(2a)", "sen θ = λ/a", "sen θ = 2λ/a", "sen θ = a/λ"], answer: 1, explain: "Condizione dei minimi: a·sen θ = m·λ con m = 1." },
      { type: "num", q: "Un reticolo ha passo d = 2,0 µm. Per λ = 500 nm, quale è l'angolo del primo ordine (in gradi)?", answer: 14.5, tol: 0.2, unit: "°", explain: "sen θ = λ/d = 0,25 ⟹ θ ≈ 14,5°." },
      { type: "tf", q: "La polarizzazione dimostra che la luce è un'onda longitudinale.", answer: false, explain: "La polarizzazione esiste solo per onde trasversali: la luce è trasversale." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Huygens: teoria ondulatoria", "Newton: Opticks", "Young: interferenza della luce", "Maxwell: luce = onda elettromagnetica"], explain: "1678-1690 (Huygens), 1704 (Newton), 1801 (Young), 1865 (Maxwell)." }
    ]
  }
});
