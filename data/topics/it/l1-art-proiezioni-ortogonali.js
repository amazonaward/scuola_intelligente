TOPIC('it', {
  id: `l1-art-proiezioni-ortogonali`,
  title: `Disegno: proiezioni ortogonali`,
  intro: `Come fa un ingegnere a spiegare a una fabbrica come costruire un pezzo senza mandare l'oggetto stesso? Lo <b>disegna da più lati</b>, con regole precise, in modo che chiunque nel mondo possa ricostruirlo e misurarlo. Le <b>proiezioni ortogonali</b> sono il linguaggio universale del disegno tecnico: ogni punto, ogni segmento, ogni solido viene "schiacciato" su piani perpendicolari tra loro. Impariamo a leggere e scrivere questo linguaggio. 📐🧊`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Che cos'è una proiezione ortogonale`,
      html: `<p>Proiettare un punto su un piano significa mandare da quel punto una retta (<b>raggio proiettante</b>) fino al piano. Se il raggio è <b>perpendicolare</b> al piano la proiezione è <b>ortogonale</b>. L'immagine che otteniamo è come l'ombra di un oggetto illuminato da una sorgente lontanissima e perpendicolare al piano.</p>
<p>Una sola proiezione non basta: l'ombra di un cubo visto di fronte è un quadrato, ma lo stesso quadrato potrebbe essere l'ombra di un parallelepipedo molto profondo! Per individuare con certezza un oggetto servono <b>almeno due proiezioni su piani perpendicolari</b>, spesso tre.</p>
<p>Il metodo fu sistemato da <b>Gaspard Monge</b> (1746-1818), matematico francese, per progettare le fortificazioni militari. Tenuto segreto per anni, fu poi insegnato alla École Normale (1795) e pubblicato come <i>Géométrie descriptive</i>: è la nascita della <b>geometria descrittiva</b>. Per questo si parla di <b>metodo di Monge</b>.</p>`
    },
    {
      type: `text`, title: `2. I tre piani e il ribaltamento`,
      html: `<p>Immagina l'angolo di una stanza: due pareti e il pavimento si incontrano a 90°. Sono i tre piani di proiezione:</p>
<ul>
<li><b>PV – piano verticale</b> (la parete di fronte): vi si proietta il <b>prospetto</b> (vista frontale, "alzato");</li>
<li><b>PO – piano orizzontale</b> (il pavimento): vi si proietta la <b>pianta</b> (vista dall'alto);</li>
<li><b>PL – piano laterale</b> (la parete di lato): vi si proietta il <b>fianco</b> (vista laterale, di solito da sinistra).</li>
</ul>
<p>Le rette di incontro dei piani sono gli assi del sistema: la <b>linea di terra</b> (PV ∩ PO) e le altre due. Per mettere tutto su un unico foglio piatto si fa il <b>ribaltamento</b>: il PV resta fermo, il PO ruota di 90° attorno alla linea di terra fino a sovrapporsi al PV, e il PL ruota di 90° attorno alla propria linea di terra.</p>
<p>Il risultato è la <b>disposizione standard</b>: il <b>prospetto</b> in alto a sinistra, la <b>pianta</b> <b>sotto</b> il prospetto (stessa larghezza), il <b>fianco</b> <b>a destra</b> del prospetto (stessa altezza). Grazie ai <b>raccordi</b> (linee di richiamo sottili) le tre viste si mettono in corrispondenza.</p>`
    },
    {
      type: `svg`, title: `Le tre viste di un parallelepipedo`,
      caption: `Prospetto (in alto a sinistra), pianta (sotto) e fianco (a destra) di un parallelepipedo 120 × 70 × 80. Le linee sottili sono i richiami: prospetto e pianta hanno la stessa larghezza, prospetto e fianco la stessa altezza.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="30" width="170" height="90" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<rect x="60" y="150" width="170" height="110" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<rect x="270" y="30" width="110" height="90" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<g stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"><line x1="60" y1="120" x2="60" y2="150"/><line x1="230" y1="120" x2="230" y2="150"/><line x1="230" y1="30" x2="270" y2="30"/><line x1="230" y1="120" x2="270" y2="120"/></g>
<line x1="20" y1="135" x2="250" y2="135" stroke="#dc2626" stroke-width="2"/>
<text x="26" y="130" font-size="14" fill="#dc2626">linea di terra</text>
<text x="145" y="80" font-size="17" font-weight="bold" fill="#1e3a8a" text-anchor="middle">PROSPETTO</text>
<text x="145" y="210" font-size="17" font-weight="bold" fill="#166534" text-anchor="middle">PIANTA</text>
<text x="325" y="80" font-size="17" font-weight="bold" fill="#92400e" text-anchor="middle">FIANCO</text>
<text x="145" y="108" font-size="14" fill="#334155" text-anchor="middle">larghezza × altezza</text>
<text x="145" y="232" font-size="14" fill="#334155" text-anchor="middle">larghezza × profondità</text>
<text x="325" y="104" font-size="14" fill="#334155" text-anchor="middle">profondità × altezza</text>
<text x="420" y="60" font-size="15" fill="#1e293b">PV: parete di fronte</text>
<text x="420" y="90" font-size="15" fill="#1e293b">PO: pavimento</text>
<text x="420" y="120" font-size="15" fill="#1e293b">PL: parete di lato</text>
<text x="420" y="180" font-size="15" fill="#334155">ciascuna vista mostra</text>
<text x="420" y="205" font-size="15" fill="#334155">due dimensioni e ne</text>
<text x="420" y="230" font-size="15" fill="#334155">nasconde una</text>
</svg>`
    },
    {
      type: `3d`, title: `Ruota il solido: da dove lo guardi?`,
      scene: `solid`,
      options: { shape: `box`, w: 3, h: 2, d: 2, color: `#3b82f6`, labels: true, shapes: [`box`, `cube`, `prism`, `pyramid`, `cylinder`, `cone`, `sphere`] },
      caption: `Guarda il solido dall'alto (pianta), di fronte (prospetto) e di lato (fianco). Prova poi con piramide, cilindro e cono: quale vista mostra un cerchio? quale un triangolo?`
    },
    {
      type: `quiz`, title: `Mini-quiz: i tre piani`,
      questions: [
        { type: `mc`, q: `Su quale piano si proietta la pianta?`, options: [`PV`, `PO`, `PL`], answer: 1, explain: `La pianta è la vista dall'alto: si proietta sul piano orizzontale (PO).` },
        { type: `mc`, q: `Nella disposizione standard dove si disegna la pianta rispetto al prospetto?`, options: [`Sopra`, `Sotto`, `A destra`], answer: 1, explain: `Dopo il ribaltamento del PO la pianta sta sotto il prospetto, con la stessa larghezza.` },
        { type: `tf`, q: `Una sola proiezione ortogonale basta a determinare un solido.`, answer: false, explain: `Solidi diversi possono avere la stessa proiezione: servono almeno due viste.` }
      ]
    },
    {
      type: `text`, title: `3. Punti e segmenti`,
      html: `<p>Un <b>punto</b> P nello spazio ha tre coordinate (x, y, z). Le sue proiezioni sono: <b>P'</b> sul PO (pianta, indica larghezza e profondità), <b>P''</b> sul PV (prospetto, indica larghezza e quota). Dopo il ribaltamento P' e P'' stanno sulla <b>stessa perpendicolare alla linea di terra</b> (la "linea di richiamo"). La distanza di P'' dalla linea di terra è la <b>quota</b> (altezza di P sul pavimento); la distanza di P' dalla linea di terra è la <b>profondità</b> (distanza di P dalla parete).</p>
<p>Un <b>segmento</b> AB si proietta unendo le proiezioni dei due estremi. Le posizioni notevoli sono:</p>
<ul>
<li><b>parallelo al PO</b> (orizzontale): in pianta è in <b>vera grandezza</b>, in prospetto è parallelo alla linea di terra;</li>
<li><b>parallelo al PV</b>: in prospetto è in vera grandezza;</li>
<li><b>perpendicolare al PO</b> (verticale): in pianta è ridotto a un <b>punto</b>, in prospetto è in vera grandezza ed è perpendicolare alla linea di terra;</li>
<li><b>perpendicolare al PV</b>: in prospetto è un punto, in pianta è in vera grandezza e perpendicolare alla linea di terra;</li>
<li><b>generico</b> (obliquo): in <b>entrambe</b> le proiezioni è più corto del vero, e la vera lunghezza si trova con un procedimento ausiliario.</li>
</ul>
<p>Regola generale: la proiezione ortogonale di un segmento è <b>lunga come il segmento moltiplicato per il coseno</b> dell'angolo con il piano: se è parallelo (0°) il coseno è 1 e non cambia, se è perpendicolare (90°) il coseno è 0 e si riduce a un punto.</p>`
    },
    {
      type: `example`, title: `Esempio: dove si trova la lampada?`,
      html: `<p>Una lampada appesa al soffitto di una stanza è a 2,5 m dal pavimento e a 1,2 m dalla parete di fondo. Come la rappresenti?</p>
<ul>
<li>Il <b>prospetto</b> (PV) mostra la lampada a <b>2,5 m</b> sopra la linea di terra.</li>
<li>La <b>pianta</b> (PO) la mostra a <b>1,2 m</b> sotto la linea di terra (dopo il ribaltamento).</li>
<li>Le due proiezioni stanno sulla stessa verticale (la linea di richiamo).</li>
</ul>
<p>Da due semplici misure si riesce a ritrovare la posizione esatta nello spazio: è il principio dietro le mappe topografiche con le quote e le coordinate dei sistemi GPS.</p>`
    },
    {
      type: `text`, title: `4. Figure piane`,
      html: `<p>Una <b>figura piana</b> (per esempio un quadrato o un cerchio) si proietta ortogonalmente punto per punto. Cosa accade dipende dalla sua <b>giacitura</b>:</p>
<ul>
<li><b>parallela a un piano di proiezione</b>: su quel piano appare in <b>vera forma</b> (stessa forma e dimensioni), sull'altro è ridotta a un <b>segmento</b> (parallelo alla linea di terra);</li>
<li><b>perpendicolare a un piano</b>: su di esso è un <b>segmento</b>;</li>
<li><b>inclinata</b>: in entrambe le proiezioni è <b>deformata</b> (un quadrato diventa un parallelogramma; un cerchio un'<b>ellisse</b>).</li>
</ul>
<p>Esempio: un <b>quadrato di lato 4 cm</b> appoggiato sul pavimento (parallelo al PO) in pianta è un quadrato 4 × 4 cm in vera forma, in prospetto è un segmento orizzontale lungo 4 cm. Se lo alziamo di taglio (perpendicolare al PV) sarà l'opposto.</p>
<p>Un <b>cerchio</b> parallelo al PO si proietta in pianta come cerchio e in prospetto come segmento lungo quanto il diametro. Se è inclinato diventa un'ellisse: il suo asse maggiore resta uguale al diametro.</p>`
    },
    {
      type: `text`, title: `5. I solidi: regole per disegnarli`,
      html: `<p>Per disegnare le proiezioni ortogonali di un solido appoggiato al piano si procede così:</p>
<ol>
<li>Disegna la <b>pianta</b> (la base): è il contorno visto dall'alto.</li>
<li>Traccia da ogni vertice della pianta una <b>linea di richiamo</b> verticale verso l'alto.</li>
<li>Sul prospetto riporta le <b>altezze</b> (quote) dei vertici, partendo dalla linea di terra, e collega i punti.</li>
<li>Per il <b>fianco</b>, usa richiami orizzontali dal prospetto (stesse altezze) e riporta le profondità dalla pianta, ruotandole con una linea a 45° oppure con il compasso.</li>
<li>Ripassa gli <b>spigoli visibili a tratto continuo</b> e gli <b>spigoli nascosti a tratto discontinuo</b> (tratteggio); gli <b>assi di simmetria</b> con linea mista tratto-punto.</li>
</ol>
<p>Alcune viste caratteristiche:</p>
<ul>
<li><b>Cubo</b> (base appoggiata): prospetto e fianco sono quadrati, la pianta pure.</li>
<li><b>Prisma retto</b>: prospetto rettangolo, pianta = poligono di base.</li>
<li><b>Piramide retta</b> a base quadrata: prospetto un <b>triangolo</b>, pianta un quadrato con le <b>diagonali</b> (gli spigoli laterali).</li>
<li><b>Cilindro</b> (asse verticale): prospetto rettangolo, pianta <b>cerchio</b>.</li>
<li><b>Cono</b> (asse verticale): prospetto triangolo isoscele, pianta cerchio con il centro.</li>
<li><b>Sfera</b>: tutte e tre le proiezioni sono <b>cerchi</b> uguali.</li>
</ul>`
    },
    {
      type: `svg`, title: `Pianta e prospetto dei solidi principali`,
      caption: `I solidi di rotazione (cilindro, cono, sfera) hanno almeno una vista circolare: è l'indizio per riconoscerli. La piramide mostra in pianta le diagonali, che sono gli spigoli obliqui visti dall'alto.`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#f8fafc"/><line x1="10" y1="150" x2="590" y2="150" stroke="#dc2626" stroke-width="2"/><text x="14" y="145" font-size="14" fill="#dc2626">linea di terra</text><text x="60" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Cubo</text><rect x="30" y="60" width="60" height="60" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><rect x="30" y="180" width="60" height="60" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="60" y1="122" x2="60" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="180" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Piramide</text><polygon points="145,120 215,120 180,50" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><rect x="145" y="175" width="70" height="70" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="145" y1="175" x2="215" y2="245" stroke="#1e3a8a" stroke-width="1.5"/><line x1="215" y1="175" x2="145" y2="245" stroke="#1e3a8a" stroke-width="1.5"/><line x1="180" y1="122" x2="180" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="300" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Cilindro</text><rect x="270" y="50" width="60" height="70" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="300" cy="210" r="30" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="300" y1="122" x2="300" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="420" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Cono</text><polygon points="385,120 455,120 420,45" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="420" cy="210" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="420" cy="210" r="3" fill="#1e3a8a"/><line x1="420" y1="122" x2="420" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="540" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Sfera</text><circle cx="540" cy="85" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="540" cy="210" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="540" y1="122" x2="540" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="300" y="285" font-size="15" fill="#334155" text-anchor="middle">sopra: prospetto (sul PV) – sotto: pianta (sul PO)</text><text x="300" y="308" font-size="14" fill="#475569" text-anchor="middle">le proiezioni dello stesso punto stanno sulla stessa perpendicolare alla linea di terra</text></svg>`
    },
    {
      type: `example`, title: `Esempio: il bicchiere di carta`,
      html: `<p>Un bicchiere di carta è un <b>tronco di cono</b> con la base minore in basso. Il suo prospetto è un <b>trapezio isoscele</b>; la pianta è fatta da <b>due cerchi concentrici</b> (il bordo grande in alto e il fondo più piccolo). Chi legge solo il prospetto potrebbe pensare a un vaso o a un secchio; la pianta circolare, con due cerchi, dice che è un solido di rotazione. È proprio incrociando le viste che si "ricostruisce" l'oggetto.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… Monge dovette tenere il metodo segreto?`,
      html: `<p>Gaspard Monge inventò il metodo da giovane (circa 1765) mentre lavorava come disegnatore alla scuola militare di Mézières, per calcolare dove posizionare i cannoni senza lunghi calcoli numerici. Fu considerato un <b>segreto militare</b> e rimase riservato per circa trent'anni. Solo dopo la Rivoluzione francese Monge, divenuto ministro e fondatore dell'École polytechnique, poté insegnarlo pubblicamente. Fu anche tra i consiglieri scientifici di Napoleone nella campagna d'Egitto.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… anche i videogiochi e le stampanti 3D ragionano così?`,
      html: `<p>I programmi di modellazione 3D (Blender, CAD) mostrano di default quattro viste: <b>Top</b> (pianta), <b>Front</b> (prospetto), <b>Right/Left</b> (fianco) e una vista 3D. Sono esattamente le proiezioni di Monge! Le stampanti 3D lavorano a "strati": ogni strato è la sezione orizzontale dell'oggetto, cioè una "pianta" a una certa quota.</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul>
<li>Proiezione <b>ortogonale</b>: raggi perpendicolari al piano.</li>
<li>Tre piani: <b>PV</b> (prospetto), <b>PO</b> (pianta), <b>PL</b> (fianco). Dopo il ribaltamento: pianta sotto il prospetto, fianco a destra.</li>
<li>Una figura <b>parallela</b> a un piano appare in <b>vera forma</b> su quel piano; <b>perpendicolare</b> → segmento (o punto, per un segmento).</li>
<li>Spigoli visibili a tratto <b>continuo</b>, nascosti a tratto <b>discontinuo</b>, assi con linea <b>tratto-punto</b>.</li>
<li>Cilindro, cono e sfera hanno una vista <b>circolare</b>.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Le proiezioni ortogonali si capiscono meglio vedendole con mano e occhio.`,
      tabs: [
        {
          label: `🔦 Le ombre`,
          html: `<p>Metti un oggetto davanti a un muro e illuminalo con una lampada molto lontana (o con il sole): l'ombra è la proiezione. Se il muro è perpendicolare ai raggi, l'ombra è <b>ortogonale</b>. Prova con una scatola di cereali: da un lato l'ombra è un rettangolo largo, dall'altro uno stretto, dall'alto un rettangolo diverso. Ognuna è una vista.</p>`
        },
        {
          label: `🧊 Il cubo di vetro`,
          html: `<p>Immagina l'oggetto dentro una scatola di vetro trasparente: guardando dalla faccia davanti, da quella sopra e da quella laterale, vedi le tre viste "disegnate" sul vetro. Aprendo la scatola come una scatola di cartone (cioè <b>ribaltando</b> le facce su un piano) hai esattamente le tre viste disposte come nel foglio.</p>`,
          scene: `solid`,
          options: { shape: `cube`, color: `#60a5fa`, labels: true, shapes: [`cube`, `box`, `pyramid`, `cone`] }
        },
        {
          label: `🇺🇸 Metodo europeo e americano`,
          html: `<p>Nel mondo ci sono due convenzioni:</p>
<ul>
<li><b>Metodo europeo</b> (primo diedro, quello che usiamo in Italia): l'oggetto sta <b>tra l'osservatore e il piano</b>: la pianta va sotto il prospetto, il fianco sinistro a destra.</li>
<li><b>Metodo americano</b> (terzo diedro): il piano sta tra osservatore e oggetto, come un vetro trasparente: la pianta va <b>sopra</b> il prospetto e il fianco sinistro a sinistra.</li>
</ul>
<p>Nelle norme internazionali (ISO) un piccolo simbolo con un cono tagliato indica quale metodo è stato usato nel disegno.</p>`
        },
        {
          label: `🏷️ Riconosci le viste`,
          html: `<p>Abbina ciascun solido alla sua vista dall'alto.</p>`,
          widget: `match`,
          options: { pairs: [[`Cubo`, `Quadrato`], [`Cilindro`, `Cerchio`], [`Piramide a base quadrata`, `Quadrato con diagonali`], [`Cono`, `Cerchio con punto centrale`], [`Sfera`, `Cerchio`]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: le proiezioni ortogonali`,
      nodes: [
        { id: `rapp`, label: `Rappresentare il 3D su un foglio`, x: 50, y: 6, color: `#64748b`, html: `Come ridurre un oggetto tridimensionale a disegni piani senza perdere le misure.`, why: `Un disegno piano perde sempre una dimensione. Si recupera combinando più viste su piani diversi.` },
        { id: `proj`, label: `Proiezione ortogonale`, x: 20, y: 30, color: `#0ea5e9`, html: `Raggi perpendicolari al piano.`, why: `Se il raggio è perpendicolare, un segmento parallelo al piano conserva la lunghezza: per questo il metodo conserva le misure.` },
        { id: `piani`, label: `Tre piani PV, PO, PL`, x: 52, y: 30, color: `#f59e0b`, html: `Parete di fronte, pavimento, parete di lato.`, why: `Servono due piani perpendicolari per fissare un punto: x, y, z sono le coordinate cartesiane di Descartes (1637) applicate alle viste.` },
        { id: `rib`, label: `Ribaltamento`, x: 82, y: 30, color: `#a855f7`, html: `Ruotare i piani fino a stendere tutto sul foglio.`, why: `L'idea geniale di <b>Monge</b> (circa 1765, pubblicata nel 1795-1799): rendere piano uno spazio a tre dimensioni con una rotazione di 90°.` },
        { id: `vera`, label: `Vera grandezza`, x: 22, y: 62, color: `#22c55e`, html: `Un segmento o una figura parallela al piano non si deforma.`, why: `Una proiezione moltiplica le lunghezze per il coseno dell'angolo con il piano: se l'angolo è 0, il coseno è 1.` },
        { id: `solidi`, label: `I solidi`, x: 52, y: 62, color: `#ef4444`, html: `Pianta + prospetto (+ fianco) identificano un solido.`, why: `Ogni vista dà due dimensioni; con due o tre viste si ottengono tutte e tre. Gli spigoli nascosti si tratteggiano per leggere l'interno.` },
        { id: `norma`, label: `Norme e convenzioni`, x: 82, y: 62, color: `#14b8a6`, html: `Linee continue, tratteggiate, tratto-punto; metodo europeo e americano.`, why: `Perché chi disegna a Torino e chi legge a Tokyo capiscano lo stesso disegno servono regole condivise: norme UNI e ISO.` },
        { id: `uso`, label: `Applicazioni`, x: 50, y: 90, color: `#0ea5e9`, html: `Meccanica, architettura, CAD, stampa 3D.`, why: `Ogni pezzo costruito in serie è definito da un disegno quotato in proiezioni ortogonali.` }
      ],
      edges: [
        [`rapp`, `proj`, `metodo`], [`rapp`, `piani`, `usa`], [`piani`, `rib`, `si ottiene`], [`proj`, `vera`, `se parallela`],
        [`rib`, `solidi`, `per`], [`piani`, `solidi`, `disegna`], [`solidi`, `norma`, `rispetta`], [`solidi`, `uso`, `per`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: segmenti e solidi`,
      questions: [
        { type: `mc`, q: `Un segmento perpendicolare al piano orizzontale, in pianta appare come…`, options: [`Un segmento in vera grandezza`, `Un punto`, `Un segmento ridotto a metà`], answer: 1, explain: `Il raggio proiettante coincide con il segmento: la proiezione si riduce a un punto.` },
        { type: `mc`, q: `La pianta di un cono con asse verticale è…`, options: [`Un triangolo`, `Un cerchio con il punto centrale`, `Un rettangolo`], answer: 1, explain: `La base circolare e il vertice proiettato al centro.` },
        { type: `tf`, q: `Il prospetto di una sfera è un cerchio.`, answer: true, explain: `La sfera ha tutte e tre le proiezioni circolari, di raggio uguale al raggio della sfera.` },
        { type: `num`, q: `Un cubo di spigolo 5 cm, appoggiato su una faccia: quanto misura l'area del quadrato del prospetto?`, answer: 25, tol: 0, unit: `cm²`, explain: `Il prospetto è un quadrato in vera forma di lato 5 cm: 5 × 5 = 25 cm².` }
      ]
    }
  ],
  glossary: [
    { t: `Proiezione ortogonale`, d: `Proiezione con raggi perpendicolari al piano di proiezione.` },
    { t: `Pianta`, d: `Vista dall'alto: proiezione sul piano orizzontale (PO).` },
    { t: `Prospetto`, d: `Vista frontale: proiezione sul piano verticale (PV).` },
    { t: `Fianco`, d: `Vista laterale: proiezione sul piano laterale (PL).` },
    { t: `Linea di terra`, d: `Retta d'incontro tra piano verticale e piano orizzontale.` },
    { t: `Ribaltamento`, d: `Rotazione di 90° dei piani per stendere tutte le viste sul foglio.` },
    { t: `Vera grandezza`, d: `Proiezione di un segmento o figura che ne mantiene le dimensioni reali.` },
    { t: `Linea di richiamo`, d: `Linea sottile che mette in corrispondenza le proiezioni dello stesso punto.` },
    { t: `Metodo di Monge`, d: `Sistema di rappresentazione con piani ortogonali ribaltati, ideato da Gaspard Monge.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Chi sistemò il metodo delle proiezioni ortogonali (geometria descrittiva)?`, options: [`Gaspard Monge`, `Filippo Brunelleschi`, `Euclide`], answer: 0, explain: `Monge, matematico francese, pubblicò la Géométrie descriptive (1795-1799).` },
      { type: `mc`, q: `Il prospetto si proietta sul…`, options: [`piano orizzontale`, `piano verticale`, `piano laterale`], answer: 1, explain: `Il prospetto è la vista frontale: PV.` },
      { type: `tf`, q: `Un segmento parallelo al piano di proiezione si proietta in vera grandezza.`, answer: true, explain: `Il segmento e la sua proiezione sono lati opposti di un rettangolo.` },
      { type: `num`, q: `Un segmento verticale di 8 cm: quanto misura la sua proiezione sul piano orizzontale (in cm)?`, answer: 0, tol: 0, unit: `cm`, explain: `È un punto: lunghezza nulla.` },
      { type: `mc`, q: `Come si disegnano gli spigoli nascosti?`, options: [`Tratto continuo spesso`, `Tratto discontinuo`, `Non si disegnano mai`], answer: 1, explain: `Convenzione del disegno tecnico: linea tratteggiata.` },
      { type: `mc`, q: `Un cilindro con asse verticale ha come pianta…`, options: [`un rettangolo`, `un cerchio`, `un triangolo`], answer: 1, explain: `Visto dall'alto si vede la base circolare.` },
      { type: `order`, q: `Metti in ordine i passi per disegnare pianta e prospetto di una piramide.`, items: [`Disegna la pianta della base`, `Traccia le linee di richiamo verticali`, `Riporta le quote nel prospetto`, `Unisci i punti e ripassa`], explain: `Dalla pianta si ricavano le posizioni orizzontali, poi si riportano le altezze.` },
      { type: `tf`, q: `Il prospetto di una piramide retta a base quadrata, visto di fronte, è un triangolo.`, answer: true, explain: `Si vedono la base come segmento e le facce come un triangolo.` },
      { type: `text`, q: `Come si chiama la retta d'intersezione tra piano verticale e piano orizzontale?`, answer: [`linea di terra`, `la linea di terra`], explain: `Linea di terra: dopo il ribaltamento separa prospetto e pianta.` },
      { type: `mc`, q: `Quale solido ha tre proiezioni uguali, tutte cerchi?`, options: [`Sfera`, `Cono`, `Cilindro`], answer: 0, explain: `La sfera è simmetrica in ogni direzione.` }
    ]
  }
});
