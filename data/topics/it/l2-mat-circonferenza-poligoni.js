TOPIC('it', {
  id: "l2-mat-circonferenza-poligoni",
  title: "Circonferenza e poligoni",
  intro: "La circonferenza è la curva più perfetta che esista: ogni suo punto è alla stessa distanza dal centro. Dalle ruote ai CD, dalle lenti alle orbite, è ovunque. In questa lezione scopri le sue proprietà geometriche: <b>corde, tangenti, angoli al centro e alla circonferenza</b>, e il rapporto speciale che la lega ai <b>poligoni inscritti e circoscritti</b>. Un risultato su tutti: l'angolo alla circonferenza è <b>la metà</b> dell'angolo al centro che insiste sullo stesso arco.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Circonferenza e cerchio: il lessico",
      html: `<p>La <b>circonferenza</b> è il luogo dei punti del piano che hanno distanza fissa <b>r</b> (il <b>raggio</b>) da un punto fisso <b>O</b>, il <b>centro</b>. Il <b>cerchio</b> è la circonferenza insieme alla parte di piano che racchiude. È l'ultimo dei tre postulati "costruttivi" di Euclide: dati un centro e un raggio, si può descrivere un cerchio.</p>
<ul>
<li><b>Corda</b>: segmento che unisce due punti della circonferenza. La corda massima passa per il centro e si chiama <b>diametro</b> (d = 2r).</li>
<li><b>Arco</b>: porzione di circonferenza compresa tra due suoi punti. Una corda determina due archi; il diametro li rende uguali (due <b>semicirconferenze</b>).</li>
<li><b>Angolo al centro</b>: ha il vertice nel centro O e i lati che passano per gli estremi dell'arco: <i>insiste</i> su quell'arco.</li>
<li><b>Angolo alla circonferenza</b> (o <b>inscritto</b>): ha il vertice <i>sulla</i> circonferenza e i lati che sono corde (o una corda e una tangente).</li>
<li><b>Settore circolare</b> e <b>segmento circolare</b>: parti di cerchio delimitate rispettivamente da due raggi e un arco, o da una corda e un arco.</li>
</ul>
<p>Due archi, due corde o due angoli al centro nella <b>stessa circonferenza</b> (o in circonferenze congruenti) si corrispondono: ad archi congruenti corrispondono corde congruenti e angoli al centro congruenti, e viceversa.</p>`
    },
    {
      type: "text",
      title: "Corde, diametri e tangenti",
      html: `<p>Alcune proprietà fondamentali, che si dimostrano con la congruenza dei triangoli:</p>
<ul>
<li>Il <b>diametro</b> è la corda più lunga. Una corda <i>non passante per il centro</i> è tanto più lunga quanto più è vicina al centro.</li>
<li>Il diametro perpendicolare a una corda la divide a metà (e divide a metà anche gli archi). Di conseguenza <b>l'asse di una corda passa per il centro</b>: per trovare il centro di un cerchio disegnato basta tracciare gli assi di due corde, il centro è la loro intersezione.</li>
<li>Una retta e una circonferenza possono essere <b>secanti</b> (due punti in comune), <b>tangenti</b> (uno solo) o <b>esterne</b> (nessuno). Il tipo si capisce confrontando la distanza d della retta dal centro con il raggio r: d &lt; r secante, d = r tangente, d &gt; r esterna.</li>
<li><b>La tangente è perpendicolare al raggio</b> nel punto di tangenza.</li>
<li>Da un punto P <b>esterno</b> alla circonferenza partono <b>due tangenti</b>, e i due segmenti di tangente PA e PB sono <b>congruenti</b>. La retta PO è bisettrice dell'angolo APB.</li>
</ul>
<p>Anche due circonferenze possono stare in posizioni diverse: esterne, tangenti esternamente, secanti, tangenti internamente, una interna all'altra. Si distinguono confrontando la distanza dei centri con la somma e la differenza dei raggi.</p>`
    },
    {
      type: "svg",
      title: "La tangente e le due tangenti da un punto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="100" cy="150" r="80" fill="#e0e7ff" stroke="#4338ca" stroke-width="4"/>
<line x1="100" y1="150" x2="131" y2="76" stroke="#1f2937" stroke-width="3"/>
<line x1="100" y1="150" x2="131" y2="224" stroke="#1f2937" stroke-width="3"/>
<line x1="308" y1="150" x2="131" y2="76" stroke="#dc2626" stroke-width="4"/>
<line x1="308" y1="150" x2="131" y2="224" stroke="#dc2626" stroke-width="4"/>
<line x1="100" y1="150" x2="308" y2="150" stroke="#9ca3af" stroke-width="2" stroke-dasharray="7 6"/>
<circle cx="100" cy="150" r="5" fill="#1f2937"/><circle cx="308" cy="150" r="6" fill="#1f2937"/>
<circle cx="131" cy="76" r="6" fill="#dc2626"/><circle cx="131" cy="224" r="6" fill="#dc2626"/>
<text x="76" y="172" font-size="18" fill="#1f2937" font-weight="bold">O</text>
<text x="318" y="156" font-size="18" fill="#1f2937" font-weight="bold">P</text>
<text x="136" y="68" font-size="18" fill="#b91c1c" font-weight="bold">A</text>
<text x="136" y="248" font-size="18" fill="#b91c1c" font-weight="bold">B</text>
<text x="380" y="80" font-size="16" fill="#1f2937">OA ⟂ PA e OB ⟂ PB</text>
<text x="380" y="115" font-size="16" fill="#b91c1c">PA = PB (tangenti congruenti)</text>
<text x="380" y="165" font-size="16" fill="#1f2937">Esempio: r = 5, OP = 13</text>
<text x="380" y="195" font-size="16" fill="#166534" font-weight="bold">PA² = 13² − 5² = 144</text>
<text x="380" y="225" font-size="16" fill="#166534" font-weight="bold">PA = PB = 12</text>
</svg>`,
      caption: "Il triangolo OAP è rettangolo in A (raggio ⟂ tangente): con Pitagora si calcola la lunghezza della tangente."
    },
    {
      type: "remember",
      title: "Angolo al centro e angolo alla circonferenza",
      html: `<p><b>Teorema.</b> Ogni angolo alla circonferenza è la <b>metà</b> dell'angolo al centro che insiste sullo stesso arco.</p>
<p>Conseguenze importanti:</p>
<ul>
<li>Tutti gli angoli alla circonferenza che insistono sullo <b>stesso arco</b> sono <b>congruenti</b> tra loro (qualunque sia la posizione del vertice sull'arco opposto).</li>
<li>Un angolo alla circonferenza che insiste su una <b>semicirconferenza</b> è <b>retto</b>: il suo angolo al centro è piatto (180°), la metà è 90°. È il <b>teorema di Talete sulla semicirconferenza</b>.</li>
<li>Se il triangolo ABC è inscritto in una semicirconferenza di diametro AB, allora è <b>rettangolo</b> in C. Vale anche il viceversa: il centro della circonferenza circoscritta a un triangolo rettangolo è il <b>punto medio dell'ipotenusa</b>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Perché la metà?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="170" cy="150" r="120" fill="#ecfdf5" stroke="#166534" stroke-width="4"/>
<line x1="170" y1="150" x2="57" y2="191" stroke="#4338ca" stroke-width="4"/>
<line x1="170" y1="150" x2="283" y2="191" stroke="#4338ca" stroke-width="4"/>
<line x1="170" y1="30" x2="57" y2="191" stroke="#ea580c" stroke-width="4"/>
<line x1="170" y1="30" x2="283" y2="191" stroke="#ea580c" stroke-width="4"/>
<circle cx="170" cy="150" r="5" fill="#1f2937"/>
<circle cx="170" cy="30" r="6" fill="#ea580c"/><circle cx="57" cy="191" r="6" fill="#1f2937"/><circle cx="283" cy="191" r="6" fill="#1f2937"/>
<text x="180" y="146" font-size="16" fill="#4338ca" font-weight="bold">140°</text>
<text x="176" y="62" font-size="16" fill="#c2410c" font-weight="bold">70°</text>
<text x="176" y="26" font-size="16" fill="#1f2937">P</text>
<text x="28" y="212" font-size="16" fill="#1f2937">B</text>
<text x="290" y="212" font-size="16" fill="#1f2937">C</text>
<text x="156" y="170" font-size="16" fill="#1f2937">O</text>
<circle cx="460" cy="200" r="110" fill="#fef9c3" stroke="#a16207" stroke-width="4"/>
<line x1="350" y1="200" x2="570" y2="200" stroke="#1f2937" stroke-width="4"/>
<line x1="350" y1="200" x2="515" y2="105" stroke="#dc2626" stroke-width="4"/>
<line x1="570" y1="200" x2="515" y2="105" stroke="#dc2626" stroke-width="4"/>
<circle cx="350" cy="200" r="6" fill="#1f2937"/><circle cx="570" cy="200" r="6" fill="#1f2937"/><circle cx="515" cy="105" r="6" fill="#dc2626"/>
<rect x="499" y="116" width="14" height="14" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="330" y="222" font-size="16" fill="#1f2937">A</text>
<text x="574" y="222" font-size="16" fill="#1f2937">B</text>
<text x="522" y="98" font-size="16" fill="#1f2937">C</text>
<text x="412" y="250" font-size="16" fill="#a16207" font-weight="bold">AB diametro → 90°</text>
</svg>`,
      caption: "A sinistra: angolo al centro 140° e angolo alla circonferenza 70° sullo stesso arco BC. A destra: l'angolo che insiste su un diametro è sempre retto."
    },
    {
      type: "example",
      title: "Come si dimostra (idea)",
      html: `<p>Prendi un angolo alla circonferenza BPC in cui il centro O sta all'interno e traccia il raggio OP. I triangoli OPB e OPC sono <b>isosceli</b> (due lati sono raggi). Prolunga PO oltre O: l'angolo esterno del triangolo OPB, compreso tra OB e il prolungamento di PO, è uguale alla somma dei due angoli alla base, che sono uguali tra loro. Esso vale quindi <b>il doppio</b> dell'angolo OPB. Lo stesso accade dall'altra parte, con COP e OPC. Sommando i due pezzi: <b>BOC = 2 · BPC</b>.</p>
<p>Esempio numerico: l'angolo al centro BOC misura 140°. Qualunque punto P preso sull'arco "grande" vede BC sotto un angolo di 70°. Se sposti P lungo l'arco, l'angolo non cambia: è la base degli strumenti che misurano gli angoli e della costruzione degli <b>archi capaci</b> usati in topografia.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: circonferenza e angoli",
      questions: [
        { type: "num", q: "Un angolo al centro di una circonferenza misura 100°. Quanto misura l'angolo alla circonferenza che insiste sullo stesso arco?", answer: 50, unit: "°", explain: "L'angolo alla circonferenza è la metà di quello al centro: 100° / 2 = 50°." },
        { type: "mc", q: "Un triangolo è inscritto in una semicirconferenza con un lato coincidente con il diametro. Che triangolo è?", options: ["Equilatero", "Rettangolo", "Ottusangolo"], answer: 1, explain: "L'angolo opposto al diametro è alla circonferenza su una semicirconferenza, quindi vale 90°." },
        { type: "tf", q: "La tangente a una circonferenza in un punto è perpendicolare al raggio che termina in quel punto.", answer: true, explain: "È la proprietà fondamentale della tangente: il raggio nel punto di tangenza è perpendicolare ad essa." },
        { type: "num", q: "Da un punto P si tracciano le tangenti a una circonferenza di raggio 6 cm. La distanza di P dal centro è 10 cm. Quanto è lunga ciascuna tangente PA?", answer: 8, unit: "cm", explain: "OAP è rettangolo in A: PA = √(10² − 6²) = √64 = 8 cm." }
      ]
    },
    {
      type: "text",
      title: "Poligoni inscritti e circoscritti",
      html: `<p>Un poligono è <b>inscritto</b> in una circonferenza se tutti i suoi vertici stanno sulla circonferenza; la circonferenza si dice allora <b>circoscritta</b> al poligono. Un poligono è <b>circoscritto</b> a una circonferenza se tutti i suoi lati sono tangenti ad essa; la circonferenza è <b>inscritta</b> nel poligono.</p>
<p><b>Triangoli</b>: ogni triangolo è sempre sia inscrivibile sia circoscrivibile.</p>
<ul>
<li>La circonferenza circoscritta ha centro nel <b>circocentro</b>, intersezione degli <b>assi dei lati</b> (ogni punto dell'asse è equidistante dagli estremi del lato). Il circocentro è interno al triangolo se è acutangolo, sul punto medio dell'ipotenusa se è rettangolo, esterno se è ottusangolo.</li>
<li>La circonferenza inscritta ha centro nell'<b>incentro</b>, intersezione delle <b>bisettrici</b> (ogni punto della bisettrice è equidistante dai lati dell'angolo). Il raggio è la distanza dell'incentro dai lati.</li>
</ul>
<p><b>Quadrilateri</b>: non tutti si possono inscrivere o circoscrivere.</p>
<ul>
<li>Un quadrilatero è <b>inscrivibile</b> in una circonferenza se e solo se gli <b>angoli opposti sono supplementari</b> (somma 180°). Quindi sono inscrivibili il quadrato, il rettangolo, il trapezio isoscele; non è inscrivibile un rombo che non sia quadrato, né un parallelogramma generico.</li>
<li>Un quadrilatero è <b>circoscrivibile</b> a una circonferenza se e solo se la <b>somma di due lati opposti è uguale alla somma degli altri due</b> (teorema di Pitot). Sono circoscrivibili il quadrato, il rombo, il deltoide; non il rettangolo non quadrato.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Inscrivibile, circoscrivibile, entrambi o nessuno?",
      widget: "classify",
      options: { groups: ["Inscrivibile", "Circoscrivibile", "Entrambi", "Nessuno dei due"], items: [
        ["Quadrato", 2],
        ["Rettangolo (non quadrato)", 0],
        ["Rombo (non quadrato)", 1],
        ["Trapezio isoscele", 0],
        ["Parallelogramma generico", 3],
        ["Triangolo qualsiasi", 2],
        ["Deltoide", 1]
      ] },
      caption: "Ricorda: inscrivibile = angoli opposti supplementari; circoscrivibile = somme dei lati opposti uguali. Un trapezio isoscele è inscrivibile ma, in generale, non circoscrivibile."
    },
    {
      type: "example",
      title: "Esempi: due calcoli con i quadrilateri",
      html: `<p><b>1.</b> Il quadrilatero ABCD è inscritto in una circonferenza e l'angolo in A misura 72°. Allora l'angolo opposto C vale 180° − 72° = <b>108°</b>. Se l'angolo in B misura 95°, l'angolo in D vale 180° − 95° = 85°.</p>
<p><b>2.</b> Un quadrilatero circoscritto a una circonferenza ha tre lati consecutivi di 7 cm, 9 cm e 10 cm. Per Pitot: somma dei lati opposti uguale, quindi AB + CD = BC + DA. Con AB = 7, BC = 9, CD = 10 il quarto lato è DA = 7 + 10 − 9 = <b>8 cm</b>. Il perimetro è 34 cm.</p>
<p><b>Dalla vita reale</b>: se vuoi ritagliare la ruota più grande possibile da una tavola a forma di triangolo, il suo centro è l'incentro e il raggio la distanza dai lati. Se invece vuoi piantare un palo equidistante da tre alberi, lo metti nel circocentro del triangolo formato dagli alberi.</p>`
    },
    {
      type: "text",
      title: "Poligoni regolari",
      html: `<p>Un poligono è <b>regolare</b> se ha tutti i lati e tutti gli angoli congruenti. Tutti i poligoni regolari sono <b>sia inscrivibili sia circoscrivibili</b>, e le due circonferenze hanno lo <b>stesso centro</b>, detto <b>centro del poligono</b>.</p>
<ul>
<li>Il <b>raggio</b> R della circonferenza circoscritta unisce il centro a un vertice.</li>
<li>L'<b>apotema</b> a è il raggio della circonferenza inscritta: unisce il centro al punto medio di un lato ed è perpendicolare ad esso.</li>
<li>L'angolo al centro che insiste su un lato misura 360° / n; l'angolo interno misura 180° · (n − 2) / n (esagono: 120°).</li>
<li>L'<b>area</b> di un poligono regolare è A = <b>(perimetro × apotema) / 2</b>: si divide in n triangoli isosceli congruenti di base il lato e altezza l'apotema. La formula vale in generale per ogni poligono circoscritto a una circonferenza, con il raggio al posto dell'apotema.</li>
</ul>
<p><b>Tre numeri fissi</b> (rapporto apotema / lato):</p>
<ul>
<li>Triangolo equilatero: a = l · √3 / 6 e R = l · √3 / 3 (R = 2a).</li>
<li>Quadrato: a = l / 2 e R = l · √2 / 2.</li>
<li>Esagono regolare: a = l · √3 / 2 e <b>R = l</b>: il lato dell'esagono regolare è uguale al raggio. Perché? Il triangolo formato da due raggi e un lato ha l'angolo al centro di 60° ed è isoscele: quindi è equilatero.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Archimede e il numero π",
      html: `<p>Il rapporto tra la lunghezza della circonferenza e il suo diametro è sempre lo stesso numero, <b>π (pi greco)</b> ≈ 3,14159. Circa nel III secolo a.C. <b>Archimede</b> lo calcolò <b>intrappolando</b> la circonferenza tra un poligono regolare inscritto e uno circoscritto, raddoppiando i lati fino a 96. Trovò che 223/71 &lt; π &lt; 22/7, cioè tra 3,1408 e 3,1429. Il perimetro della circonferenza è maggiore di quello del poligono inscritto e minore di quello del circoscritto: più lati ha il poligono, più la "gabbia" si stringe. È l'idea che sta alla base del calcolo infinitesimale che incontrerai al triennio.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il pentagono e la costruzione di Gauss",
      html: `<p>Con riga e compasso, Euclide sapeva inscrivere in una circonferenza il triangolo, il quadrato, il pentagono e l'esagono regolari. Per oltre duemila anni nessuno trovò altri poligoni regolari costruibili. Nel 1796, a soli 18 anni, <b>Carl Friedrich Gauss</b> dimostrò che si può costruire anche il <b>poligono regolare di 17 lati</b>: ne fu così orgoglioso che, secondo la tradizione, desiderò un ettadecagono sulla sua lapide. Stabilì poi esattamente quali poligoni regolari sono costruibili: per esempio il poligono di 7 o di 9 lati non lo è.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la circonferenza",
      intro: "Se i teoremi sembrano astratti, prova a vederli da un'altra angolazione.",
      tabs: [
        {
          label: "🧭 Il cerchio come luogo",
          html: `<p>Pensa alla circonferenza come a una <b>regola</b> più che a una forma: "tutti i punti a distanza r da O". Se tieni una corda tesa con un piolo al centro e un gessetto all'altra estremità, disegni una circonferenza (è il modo in cui i giardinieri tracciano le aiuole rotonde). Da questa definizione discendono tutte le proprietà: i raggi sono tutti uguali, quindi i triangoli con due lati raggi sono isosceli, e <b>da lì nascono le uguaglianze di angoli</b> che usi nelle dimostrazioni.</p>`
        },
        {
          label: "🎯 L'angolo da cui si vede",
          html: `<p><b>Un'immagine dell'angolo alla circonferenza</b>: immagina una corda BC come lo "schermo di un cinema" e una persona P seduta sulla circonferenza dalla parte opposta. Se P si sposta lungo l'arco, vede lo schermo sempre sotto lo <b>stesso angolo</b> (70° nell'esempio). Se si siede dentro la circonferenza lo vede più grande, se esce lo vede più piccolo. Per questo gli stadi circolari e le sale a semicerchio danno a tutti la stessa visuale sull'orizzonte della scena.</p>`
        },
        {
          label: "⬡ L'esagono: sei triangoli equilateri",
          html: `<p>Disegna una circonferenza di raggio R e, senza cambiare l'apertura del compasso, "cammina" sei volte lungo la circonferenza: torni esattamente al punto di partenza. I sei punti sono i vertici di un esagono regolare, perché ciascuno dei sei triangoli con il centro ha due lati uguali a R e l'angolo di 60°: è equilatero, quindi anche il lato dell'esagono vale R. Il fiore che si disegna a compasso (il "fiore della vita") nasce da questa costruzione.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="200" cy="150" r="100" fill="#fef9c3" stroke="#a16207" stroke-width="3"/>
<polygon points="300,150 250,236.6 150,236.6 100,150 150,63.4 250,63.4" fill="#bbf7d0" stroke="#166534" stroke-width="4"/>
<line x1="200" y1="150" x2="300" y2="150" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="250" y2="236.6" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="150" y2="236.6" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="100" y2="150" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="150" y2="63.4" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="250" y2="63.4" stroke="#4338ca" stroke-width="3"/>
<circle cx="200" cy="150" r="5" fill="#1f2937"/>
<text x="360" y="110" font-size="16" fill="#1f2937">6 triangoli equilateri</text>
<text x="360" y="140" font-size="16" fill="#4338ca">lato = raggio R</text>
<text x="360" y="170" font-size="16" fill="#1f2937">angolo al centro = 60°</text>
<text x="360" y="200" font-size="16" fill="#166534" font-weight="bold">perimetro = 6R</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: circonferenza e poligoni",
      nodes: [
        { id: "circ", label: "Circonferenza", x: 50, y: 6, color: "#6366f1", html: "Luogo dei punti a distanza r dal centro.", why: "È la figura 'costruibile' per eccellenza: il terzo postulato di Euclide dice che dati un centro e un raggio si può tracciare. Tutte le sue proprietà derivano dal fatto che i raggi sono uguali." },
        { id: "tang", label: "Tangenti", x: 15, y: 30, color: "#f59e0b", html: "Tangente ⟂ raggio; due tangenti da un punto esterno sono congruenti.", why: "La tangente è la retta con un solo punto in comune: è la posizione limite di una secante quando i due punti si avvicinano. Questa idea porterà alla derivata." },
        { id: "ang", label: "Angolo al centro / alla circonferenza", x: 70, y: 30, color: "#a855f7", html: "L'angolo inscritto è metà dell'angolo al centro sullo stesso arco.", why: "Si dimostra scomponendo in triangoli isosceli (due lati raggi) e usando l'angolo esterno. Gli Elementi di Euclide lo trattano nel libro III." },
        { id: "semi", label: "Semicirconferenza → 90°", x: 85, y: 58, color: "#ef4444", html: "Un triangolo con un lato diametro e il vertice sulla circonferenza è rettangolo.", why: "Caso particolare in cui l'angolo al centro è piatto (180°). Attribuito a Talete, è la chiave per costruire tangenti e per trovare il centro di una circonferenza." },
        { id: "ins", label: "Inscritti e circoscritti", x: 30, y: 58, color: "#16a34a", html: "Triangoli sempre; quadrilateri solo con condizioni.", why: "Il circocentro (assi) e l'incentro (bisettrici) nascono dal luogo dei punti equidistanti da due punti o da due rette. Nei quadrilateri servono 4 punti sulla stessa circonferenza: troppo per un'ipotesi generica." },
        { id: "reg", label: "Poligoni regolari", x: 50, y: 85, color: "#0ea5e9", html: "Inscrivibili e circoscrivibili, con centro comune; area = perimetro × apotema / 2.", why: "La simmetria totale fa coincidere circocentro e incentro. Con n lati sempre più numerosi il poligono si avvicina alla circonferenza: è il metodo di Archimede per π." }
      ],
      edges: [
        ["circ", "tang", "ha"],
        ["circ", "ang", "ha"],
        ["ang", "semi", "caso con 180°"],
        ["circ", "ins", "si combina con"],
        ["ins", "reg", "caso più simmetrico"],
        ["semi", "ins", "usato per"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: poligoni inscritti e regolari",
      questions: [
        { type: "tf", q: "Un parallelogramma non rettangolo può essere inscritto in una circonferenza.", answer: false, explain: "Un parallelogramma ha angoli opposti uguali: sarebbero supplementari solo se tutti valgono 90°, cioè se è un rettangolo." },
        { type: "num", q: "Un esagono regolare ha il lato di 8 cm. Quanto misura il raggio della circonferenza circoscritta?", answer: 8, unit: "cm", explain: "Nell'esagono regolare il raggio è uguale al lato." },
        { type: "num", q: "Un poligono regolare ha perimetro 60 cm e apotema 8 cm. Quanto vale la sua area?", answer: 240, unit: "cm²", explain: "A = perimetro × apotema / 2 = 60 × 8 / 2 = 240 cm²." },
        { type: "mc", q: "Dove si trova il centro della circonferenza circoscritta a un triangolo rettangolo?", options: ["Nel vertice dell'angolo retto", "Nel punto medio dell'ipotenusa", "Nel baricentro"], answer: 1, explain: "L'ipotenusa è un diametro (angolo retto inscritto su una semicirconferenza): il centro è il suo punto medio." }
      ]
    }
  ],
  glossary: [
    { t: "Circonferenza", d: "Luogo dei punti del piano equidistanti da un punto detto centro." },
    { t: "Corda e diametro", d: "La corda unisce due punti della circonferenza; il diametro è la corda che passa per il centro." },
    { t: "Angolo al centro", d: "Angolo con il vertice nel centro della circonferenza." },
    { t: "Angolo alla circonferenza", d: "Angolo con il vertice sulla circonferenza; è la metà dell'angolo al centro che insiste sullo stesso arco." },
    { t: "Tangente", d: "Retta con un solo punto in comune con la circonferenza; è perpendicolare al raggio nel punto di tangenza." },
    { t: "Secante", d: "Retta che interseca la circonferenza in due punti." },
    { t: "Poligono inscritto", d: "Poligono con tutti i vertici sulla circonferenza." },
    { t: "Poligono circoscritto", d: "Poligono con tutti i lati tangenti alla circonferenza." },
    { t: "Circocentro e incentro", d: "Centri delle circonferenze circoscritta (assi dei lati) e inscritta (bisettrici) in un triangolo." },
    { t: "Apotema", d: "Raggio della circonferenza inscritta in un poligono regolare, perpendicolare a un lato." },
    { t: "Poligono regolare", d: "Poligono con tutti i lati e tutti gli angoli congruenti." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è il rapporto tra un angolo alla circonferenza e l'angolo al centro che insiste sullo stesso arco?", options: ["Sono uguali", "L'angolo alla circonferenza è la metà", "L'angolo alla circonferenza è il doppio"], answer: 1, explain: "Il teorema afferma che l'angolo alla circonferenza è la metà dell'angolo al centro corrispondente." },
      { type: "num", q: "L'angolo al centro BOC misura 112°. Quanto misura l'angolo alla circonferenza che insiste su BC?", answer: 56, unit: "°", explain: "112° / 2 = 56°." },
      { type: "tf", q: "La tangente a una circonferenza in un punto è parallela al raggio in quel punto.", answer: false, explain: "È perpendicolare al raggio nel punto di tangenza." },
      { type: "num", q: "Una circonferenza ha raggio 9 cm. Da un punto P a distanza 15 cm dal centro partono due tangenti. Quanto è lunga ciascuna?", answer: 12, unit: "cm", explain: "PA = √(15² − 9²) = √144 = 12 cm." },
      { type: "mc", q: "Quale quadrilatero è sempre inscrivibile in una circonferenza?", options: ["Il rombo", "Il rettangolo", "Il parallelogramma qualsiasi"], answer: 1, explain: "Il rettangolo ha angoli opposti di 90° + 90° = 180°: sono supplementari." },
      { type: "num", q: "Un quadrilatero inscritto ABCD ha l'angolo B di 64°. Quanto misura l'angolo opposto D?", answer: 116, unit: "°", explain: "Gli angoli opposti di un quadrilatero inscritto sono supplementari: 180° − 64° = 116°." },
      { type: "text", q: "Come si chiama il punto in cui si incontrano le bisettrici di un triangolo, centro della circonferenza inscritta?", answer: ["incentro", "l'incentro"], explain: "L'incentro è equidistante dai tre lati: è il centro della circonferenza inscritta." },
      { type: "mc", q: "Un quadrilatero ha lati consecutivi 5, 8, 9 e 6 cm (nell'ordine). È circoscrivibile a una circonferenza?", options: ["Sì: 5 + 9 = 8 + 6", "No: 5 + 9 ≠ 8 + 6", "Sì, perché ha 4 lati"], answer: 0, explain: "Teorema di Pitot: lati opposti 5 e 9, e 8 e 6; 5 + 9 = 14 = 8 + 6, quindi è circoscrivibile." },
      { type: "order", q: "Metti in ordine i passi per trovare il centro di una circonferenza disegnata.", items: ["Traccia due corde non parallele", "Disegna l'asse di ciascuna corda", "Individua l'intersezione degli assi", "Quel punto è il centro"], explain: "Gli assi delle corde passano per il centro: il loro punto d'incontro è il centro." },
      { type: "num", q: "Un esagono regolare ha il lato di 10 cm. Quanto vale il suo perimetro?", answer: 60, unit: "cm", explain: "6 lati da 10 cm: 6 × 10 = 60 cm." }
    ]
  }
});
