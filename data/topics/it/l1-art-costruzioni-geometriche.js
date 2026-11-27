TOPIC('it', {
  id: `l1-art-costruzioni-geometriche`,
  title: `Disegno: costruzioni geometriche`,
  intro: `Prima di disegnare una casa, una macchina o un logo bisogna saper tracciare con precisione <b>rette perpendicolari, parallele, angoli e poligoni</b>. Gli strumenti sono pochi: <b>riga, squadre e compasso</b>. Le costruzioni geometriche sono la grammatica del disegno tecnico: ogni passaggio ha una ragione matematica, e ogni errore si vede subito. Impariamo a "ragionare con il compasso", come facevano i geometri greci! 📐✏️`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Gli strumenti e le regole del gioco`,
      html: `<p>La geometria euclidea classica ammette solo due strumenti: la <b>riga non graduata</b> (per tracciare rette) e il <b>compasso</b> (per tracciare circonferenze e riportare distanze). Nel disegno tecnico si usano anche le <b>squadre</b> e il <b>goniometro</b>, che velocizzano il lavoro, ma restano fondamentali le costruzioni "con riga e compasso".</p>
<ul>
<li><b>Matite</b>: dura (H, 2H) per le linee di costruzione sottili e leggere; più morbida (HB, B) per ripassare il disegno finito.</li>
<li><b>Squadre</b>: la squadra da <b>45°</b> (triangolo rettangolo isoscele) e quella da <b>30°/60°</b> (metà di un triangolo equilatero). Con una squadra appoggiata alla riga si tracciano perpendicolari e parallele; combinando le due squadre si ottengono anche angoli di 15°, 75°, 105°.</li>
<li><b>Compasso</b>: si punta il perno nel centro e si fa ruotare la mina. Regola d'oro: <b>non cambiare mai l'apertura</b> finché la costruzione non lo richiede.</li>
</ul>
<p>Convenzioni: i punti si indicano con lettere <b>maiuscole</b> (A, B, C), le rette con lettere minuscole (r, s), gli archi di costruzione si lasciano <b>visibili e sottili</b>: chi guarda deve poter "leggere" il tuo ragionamento. Il disegno finito si ripassa con tratto marcato.</p>`
    },
    {
      type: `text`, title: `2. Asse di un segmento e punto medio`,
      html: `<p>L'<b>asse</b> di un segmento AB è la retta perpendicolare ad AB che passa per il suo punto medio. È anche l'insieme dei punti <b>equidistanti</b> da A e da B: per questo funziona la costruzione.</p>
<ol>
<li>Punta il compasso in <b>A</b> con apertura <b>maggiore della metà di AB</b> e traccia un arco sopra e sotto il segmento.</li>
<li>Senza cambiare apertura, punta in <b>B</b> e traccia due archi che incrociano i precedenti nei punti <b>C</b> e <b>D</b>.</li>
<li>Congiungi C e D: la retta CD è l'<b>asse</b>; il punto M in cui taglia AB è il <b>punto medio</b>.</li>
</ol>
<p>Perché funziona: C e D sono a uguale distanza da A e da B (stesso raggio), quindi stanno entrambi sull'asse; due punti bastano a determinare la retta. I quattro lati AC, BC, AD, BD sono uguali, e ACBD è un <b>rombo</b>: le diagonali di un rombo sono perpendicolari e si tagliano a metà.</p>`
    },
    {
      type: `svg`, title: `L'asse di un segmento, passo dopo passo`,
      caption: `Due archi con lo stesso raggio, centrati in A e in B, si incontrano in C e D: la retta CD è perpendicolare ad AB e passa per il punto medio M.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="150" x2="340" y2="150" stroke="#1e293b" stroke-width="3"/>
<path d="M200 52 A140 140 0 0 1 200 248" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M200 52 A140 140 0 0 0 200 248" fill="none" stroke="#dc2626" stroke-width="2"/>
<line x1="200" y1="30" x2="200" y2="270" stroke="#16a34a" stroke-width="3" stroke-dasharray="8 4"/>
<g fill="#1e293b"><circle cx="100" cy="150" r="5"/><circle cx="300" cy="150" r="5"/><circle cx="200" cy="52" r="5"/><circle cx="200" cy="248" r="5"/><circle cx="200" cy="150" r="5" fill="#16a34a"/></g>
<g font-size="18" font-weight="bold" fill="#1e293b"><text x="82" y="140">A</text><text x="308" y="140">B</text><text x="210" y="50">C</text><text x="210" y="266">D</text><text x="210" y="142" fill="#16a34a">M</text></g>
<text x="400" y="100" font-size="16" fill="#2563eb">arco centrato in A</text>
<text x="400" y="130" font-size="16" fill="#dc2626">arco centrato in B</text>
<text x="400" y="160" font-size="16" fill="#16a34a">asse CD (perpendicolare)</text>
<text x="400" y="200" font-size="15" fill="#334155">stesso raggio: AC = BC = AD = BD</text>
</svg>`
    },
    {
      type: `text`, title: `3. Perpendicolari e parallele`,
      html: `<p><b>Perpendicolare a una retta r passante per un punto P</b></p>
<ul>
<li><b>P su r</b>: con centro in P traccia un arco che taglia r in due punti X e Y; costruisci poi l'asse del segmento XY (è la perpendicolare cercata, passa per P).</li>
<li><b>P fuori da r</b>: con centro in P traccia un arco che tagli r in X e Y; da X e da Y, con la stessa apertura, traccia due archi che si incontrano in Q; la retta PQ è la perpendicolare.</li>
<li><b>Con le squadre</b>: appoggia un cateto della squadra alla retta, fai scorrere finché l'altro cateto passa per P e traccia.</li>
</ul>
<p><b>Parallela a una retta r passante per un punto P</b></p>
<ul>
<li><b>Con due squadre</b>: appoggia l'ipotenusa (o un cateto) di una squadra a r, la seconda squadra fa da "guida" appoggiata alla prima; fai scorrere la prima fino a P e traccia. È il metodo più usato al tavolo da disegno.</li>
<li><b>Con il compasso (rombo)</b>: scegli su r un punto A; con centro in A e raggio AP traccia un arco che taglia r in B; con lo stesso raggio e centro in B e in P traccia due archi che si incontrano in Q (dalla parte di P). APQB è un rombo, quindi PQ è parallela a r.</li>
<li><b>Con due perpendicolari</b>: due rette perpendicolari alla stessa retta r sono parallele tra loro.</li>
</ul>
<p>Un caso importante è quello delle <b>rette parallele a distanza data d</b>: costruisci una perpendicolare a r, riporta sopra di essa la distanza d e traccia da lì la perpendicolare alla perpendicolare.</p>`
    },
    {
      type: `example`, title: `Esempio pratico: il bordo di un quaderno e una cornice`,
      html: `<p>Vuoi disegnare una cornice larga <b>1,5 cm</b> attorno a un rettangolo. Basta tracciare quattro <b>parallele ai lati a distanza 1,5 cm</b>: per ognuna costruisci una perpendicolare, riporta con il compasso 1,5 cm e traccia la parallela con le squadre. Gli angoli restano a 90° perché parallele a lati perpendicolari sono a loro volta perpendicolari. È il procedimento che usa un grafico per i margini di una pagina.</p>`
    },
    {
      type: `text`, title: `4. La bisettrice di un angolo e la divisione di un segmento`,
      html: `<p><b>Bisettrice</b> (la semiretta che divide l'angolo in due angoli uguali), dato l'angolo di vertice V:</p>
<ol>
<li>Con centro in V traccia un arco che taglia i due lati in A e B.</li>
<li>Con centro in A e poi in B, con la stessa apertura, traccia due archi che si incontrano in E.</li>
<li>La semiretta VE è la bisettrice. Funziona perché VAEB è un rombo (o un deltoide) e la diagonale di un rombo divide a metà gli angoli.</li>
</ol>
<p>Con la bisettrice puoi costruire angoli di <b>45°</b> (bisettrice di 90°), <b>30°</b> (bisettrice di 60°), <b>15°</b>, <b>22,5°</b> e così via. L'angolo di <b>60°</b> si ottiene da un triangolo equilatero (compasso con la stessa apertura per tre lati); quello di <b>90°</b> con la perpendicolare.</p>
<p><b>Dividere un segmento in n parti uguali</b> (teorema di Talete): per dividere AB in 5 parti:</p>
<ol>
<li>Da A traccia una semiretta qualsiasi, non allineata con AB.</li>
<li>Con un'apertura qualsiasi del compasso riporta su di essa <b>5 segmenti uguali</b> consecutivi: A1, A2, … A5.</li>
<li>Congiungi A5 con B e traccia da A4, A3, A2, A1 le <b>parallele ad A5B</b>: dividono AB in 5 parti uguali.</li>
</ol>
<p>Il motivo: un fascio di rette parallele taglia due trasversali in segmenti proporzionali (Talete). Se i segmenti su una trasversale sono uguali, lo sono anche sull'altra.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: i primi strumenti`,
      questions: [
        { type: `mc`, q: `Quale proprietà hanno tutti i punti dell'asse di un segmento AB?`, options: [`Sono equidistanti da A e da B`, `Sono alla stessa distanza dal punto A soltanto`, `Sono allineati con A e B`], answer: 0, explain: `L'asse è il luogo dei punti equidistanti dagli estremi: per questo si costruisce con due archi di uguale raggio.` },
        { type: `num`, q: `Quanti gradi misura la bisettrice di un angolo retto rispetto a ciascun lato?`, answer: 45, tol: 0, unit: `°`, explain: `90° : 2 = 45°.` },
        { type: `tf`, q: `Per dividere un segmento in 7 parti uguali basta riportare 7 segmenti uguali su una semiretta ausiliaria e tracciare parallele.`, answer: true, explain: `È l'applicazione del teorema di Talete: le parallele tagliano il segmento in parti uguali.` }
      ]
    },
    {
      type: `text`, title: `5. Poligoni regolari inscritti in una circonferenza`,
      html: `<p>Un <b>poligono regolare</b> ha tutti i lati e tutti gli angoli uguali. Inscritto in una circonferenza di raggio r, ha i vertici sulla circonferenza: la circonferenza viene divisa in <b>n archi uguali</b>, ciascuno di 360°/n.</p>
<ul>
<li><b>Triangolo equilatero</b>: dividi la circonferenza in 3 parti (archi di 120°) oppure costruisci i tre lati uguali. Il lato è l = r√3 ≈ 1,732 r.</li>
<li><b>Quadrato</b>: traccia due diametri perpendicolari: le loro estremità sono i 4 vertici. Il lato è l = r√2 ≈ 1,414 r.</li>
<li><b>Esagono regolare</b>: il <b>lato è uguale al raggio</b> (l = r). Con la stessa apertura del compasso riporti 6 volte sulla circonferenza e torni esattamente al punto di partenza. Congiungendo un vertice sì e uno no ottieni il <b>triangolo equilatero</b>.</li>
<li><b>Ottagono</b>: parti dal quadrato e trovi i punti medi degli archi (bisettrici); il numero di lati raddoppia: 4 → 8 → 16.</li>
<li><b>Pentagono</b>: più complicato, il lato è legato alla <b>sezione aurea</b>. Si ottiene con una costruzione che usa il punto medio di un raggio (vedi sotto).</li>
<li><b>Decagono</b>: il lato è la parte aurea del raggio; raddoppiando il decagono si hanno 20 lati.</li>
</ul>
<p>L'esagono è il più semplice perché 360° : 6 = 60°, e il triangolo formato da due raggi e un lato è <b>equilatero</b>. Ecco perché l'esagono compare dappertutto in natura: celle delle api, cristalli di neve, struttura del grafene.</p>`
    },
    {
      type: `svg`, title: `L'esagono regolare con il compasso`,
      caption: `Si traccia la circonferenza di raggio r; senza cambiare apertura si riporta il raggio sulla circonferenza 6 volte. Uniti, i 6 punti formano l'esagono. Sei triangoli equilateri riempiono l'esagono.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="170" cy="150" r="110" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 4"/>
<polygon points="280,150 225,245.3 115,245.3 60,150 115,54.7 225,54.7" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3" stroke-linejoin="round"/>
<g stroke="#1e3a8a" stroke-width="1.5"><line x1="170" y1="150" x2="280" y2="150"/><line x1="170" y1="150" x2="225" y2="245.3"/><line x1="170" y1="150" x2="115" y2="245.3"/><line x1="170" y1="150" x2="60" y2="150"/><line x1="170" y1="150" x2="115" y2="54.7"/><line x1="170" y1="150" x2="225" y2="54.7"/></g>
<g fill="#dc2626"><circle cx="280" cy="150" r="5"/><circle cx="225" cy="245.3" r="5"/><circle cx="115" cy="245.3" r="5"/><circle cx="60" cy="150" r="5"/><circle cx="115" cy="54.7" r="5"/><circle cx="225" cy="54.7" r="5"/></g>
<circle cx="170" cy="150" r="5" fill="#1e293b"/>
<text x="180" y="170" font-size="16" fill="#1e293b">O</text>
<text x="222" y="142" font-size="16" fill="#92400e" font-weight="bold">r</text>
<polygon points="450,150 490,81 570,81 610,150 570,219 490,219" fill="none"/>
<text x="330" y="60" font-size="17" font-weight="bold" fill="#1e3a8a">Esagono regolare</text>
<text x="330" y="95" font-size="16" fill="#334155">lato = raggio (l = r)</text>
<text x="330" y="125" font-size="16" fill="#334155">angolo al centro = 60°</text>
<text x="330" y="155" font-size="16" fill="#334155">angolo interno = 120°</text>
<text x="330" y="185" font-size="16" fill="#334155">6 triangoli equilateri</text>
<text x="330" y="225" font-size="16" fill="#334155">tracciato un vertice sì e uno no:</text>
<text x="330" y="250" font-size="16" fill="#334155">triangolo equilatero inscritto</text>
</svg>`
    },
    {
      type: `3d`, title: `Il prisma esagonale: una costruzione che prende volume`,
      scene: `solid`,
      options: { shape: `prism`, n: 6, r: 1, h: 1.6, color: `#3b82f6`, labels: true, shapes: [`prism`, `pyramid`, `cube`, `cylinder`] },
      caption: `La base di questo prisma è l'esagono che hai appena costruito. Contando facce, spigoli e vertici trovi che F + V - E = 2 (formula di Eulero). Una sezione orizzontale riproduce la tua costruzione.`
    },
    {
      type: `text`, title: `6. Un poligono qualsiasi: metodo generale e pentagono`,
      html: `<p><b>Altri poligoni</b>: per qualsiasi n si può dividere la circonferenza con il goniometro in archi di 360°/n (per esempio 40° per l'ennagono). Con riga e compasso, invece, sono esatti solo alcuni poligoni: quelli ottenuti raddoppiando i lati (4, 8, 16; 6, 12; 5, 10, 20) più il triangolo e il 17-gono. Per gli altri (7, 9, 11…) si usano metodi approssimati.</p>
<p><b>Pentagono regolare inscritto</b> in una circonferenza di centro O (costruzione classica):</p>
<ol>
<li>Traccia due diametri perpendicolari: AB orizzontale e CD verticale.</li>
<li>Trova il punto medio M del raggio OB.</li>
<li>Con centro in M e raggio MC (da M all'estremo C del diametro verticale) traccia un arco che taglia il diametro AB in N, sul lato opposto a B.</li>
<li>Il segmento CN è il <b>lato del pentagono</b>. Con quella apertura riporta 5 volte sulla circonferenza partendo da C.</li>
</ol>
<p>Il rapporto tra diagonale e lato del pentagono è <b>(1+√5)/2 ≈ 1,618</b>, il <b>numero aureo φ</b>. I pitagorici adottarono il pentagramma (stella a cinque punte) come simbolo segreto.</p>`
    },
    {
      type: `example`, title: `Esempio pratico: il logo con la stella`,
      html: `<p>Vuoi disegnare una stella a cinque punte per un logo. Costruisci il pentagono regolare nella circonferenza e poi unisci ogni vertice con il secondo successivo: ottieni un <b>pentagramma</b> perfetto. Se lo facessi "a occhio" ti verrebbe sbilenco; con il compasso, le punte sono tutte uguali perché la circonferenza è divisa in 5 archi da 72°.</p>
<p>Lo stesso vale per un orologio: i 12 numeri sono ai vertici di un dodecagono regolare, distanti 30°. Si ottiene dall'esagono, bisecando gli archi.</p>`
    },
    {
      type: `text`, title: `7. Tangenti e raccordi`,
      html: `<p>Una <b>tangente</b> a una circonferenza tocca la curva in un solo punto, il <b>punto di tangenza</b>, ed è <b>perpendicolare al raggio</b> che arriva in quel punto. Questa proprietà è la chiave di tutti i raccordi.</p>
<p>Un <b>raccordo</b> è un arco di circonferenza che collega "dolcemente" due linee (due rette, o una retta e una curva) senza spigoli. Lo si vede nelle strade, nei binari, nei bordi arrotondati dei mobili e dei telefoni.</p>
<p><b>Raccordo di due rette incidenti con un arco di raggio r</b>:</p>
<ol>
<li>Traccia due rette <b>parallele</b> a ciascuna delle due date, a distanza <b>r</b> (dalla parte interna dell'angolo).</li>
<li>Il loro punto d'incontro <b>C</b> è il <b>centro dell'arco</b>: è a distanza r da entrambe le rette.</li>
<li>Dal centro C traccia le <b>perpendicolari</b> alle due rette: i piedi T₁ e T₂ sono i <b>punti di tangenza</b>.</li>
<li>Con centro in C e raggio r traccia l'arco da T₁ a T₂. Ripassa a tratto marcato <b>solo</b> le parti di retta fino a T₁ e T₂ e l'arco.</li>
</ol>
<p><b>Raccordo tra retta e circonferenza</b>, o tra due circonferenze: il centro dell'arco si trova a distanza r dalla retta e a distanza (R + r) (raccordo esterno) oppure (R − r) (raccordo interno) dal centro della circonferenza. Il punto di tangenza sta sempre sulla <b>retta che unisce i centri</b>.</p>`
    },
    {
      type: `svg`, title: `Raccordo di due rette perpendicolari`,
      caption: `Il centro C è a distanza r da entrambe le rette; T1 e T2 sono i punti di tangenza e l'arco li unisce con continuità. Le rette tratteggiate sono le parallele ausiliarie.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#94a3b8" stroke-width="2" stroke-dasharray="7 5"><line x1="120" y1="240" x2="120" y2="40"/><line x1="120" y1="240" x2="520" y2="240"/></g>
<g stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 4"><line x1="200" y1="40" x2="200" y2="270"/><line x1="90" y1="160" x2="520" y2="160"/></g>
<g stroke="#1e293b" stroke-width="4" stroke-linecap="round" fill="none"><path d="M120 40 L120 160 A80 80 0 0 0 200 240 L520 240"/></g>
<g stroke="#16a34a" stroke-width="2"><line x1="200" y1="160" x2="120" y2="160"/><line x1="200" y1="160" x2="200" y2="240"/></g>
<g fill="#dc2626"><circle cx="200" cy="160" r="6"/><circle cx="120" cy="160" r="5"/><circle cx="200" cy="240" r="5"/></g>
<g font-size="17" font-weight="bold" fill="#1e293b"><text x="208" y="152">C</text><text x="70" y="156">T1</text><text x="208" y="262">T2</text></g>
<text x="240" y="200" font-size="16" fill="#16a34a">r</text>
<text x="150" y="190" font-size="16" fill="#16a34a">r</text>
<text x="320" y="110" font-size="16" fill="#334155">1) parallele a distanza r</text>
<text x="320" y="135" font-size="16" fill="#334155">2) il loro incrocio è il centro C</text>
<text x="320" y="190" font-size="16" fill="#334155">3) perpendicolari: punti T1 e T2</text>
<text x="320" y="215" font-size="16" fill="#334155">4) arco con centro C e raggio r</text>
</svg>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… Euclide ha scritto le regole 2300 anni fa?`,
      html: `<p>I <i>Elementi</i> di <b>Euclide</b> (Alessandria d'Egitto, circa 300 a.C.) iniziano con la costruzione di un triangolo equilatero su un segmento dato: usa proprio due circonferenze come quelle dell'asse. Per oltre duemila anni si è discusso quali costruzioni fossero possibili con la sola riga e il compasso. Solo nell'Ottocento si dimostrò che con quegli strumenti <b>non si possono</b> risolvere tre problemi famosi: <b>trisecare un angolo qualsiasi</b>, <b>duplicare il cubo</b> e <b>quadrare il cerchio</b>. Il giovane <b>Carl Friedrich Gauss</b> nel 1796, a 19 anni, scoprì invece che si può costruire il poligono regolare di <b>17 lati</b>: ne fu tanto orgoglioso da volerlo inciso sulla sua tomba.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… le api "disegnano" esagoni?`,
      html: `<p>Le celle dei favi sono <b>esagoni regolari</b>. Tra le forme che coprono il piano senza lasciare buchi (triangolo equilatero, quadrato, esagono) l'esagono è quella con <b>il minor perimetro a parità di area</b>: serve meno cera per costruire le pareti. Già Pappo di Alessandria (IV secolo d.C.) lo aveva notato; la dimostrazione matematica completa, la "congettura del favo", è stata data da Thomas Hales nel 1999.</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul>
<li><b>Asse</b> di un segmento: archi di uguale raggio da A e da B; la retta per le intersezioni è perpendicolare e passa per il punto medio.</li>
<li><b>Bisettrice</b>: arco dal vertice, due archi uguali dai punti trovati sui lati.</li>
<li><b>Talete</b> per dividere un segmento in parti uguali, con una semiretta e parallele.</li>
<li><b>Esagono</b>: lato = raggio; <b>quadrato</b>: due diametri perpendicolari; <b>pentagono</b>: lato legato alla sezione aurea.</li>
<li><b>Raccordo</b>: centro a distanza r da entrambe le linee; punti di tangenza sulle perpendicolari dal centro.</li>
<li>Le linee di costruzione si lasciano <b>sottili e visibili</b>, il risultato si ripassa a <b>tratto marcato</b>.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Se il compasso ti sembra un rito misterioso, prova a guardare le stesse costruzioni da altre strade.`,
      tabs: [
        {
          label: `🧠 Il perché: i luoghi geometrici`,
          html: `<p>Ogni costruzione è la risposta a una domanda del tipo "<b>dove sono tutti i punti che…?</b>" (luogo geometrico).</p>
<ul>
<li>I punti a distanza <i>r</i> da O → <b>circonferenza</b>.</li>
<li>I punti equidistanti da A e B → <b>asse</b> del segmento.</li>
<li>I punti equidistanti da due rette incidenti → <b>bisettrice</b>.</li>
<li>I punti a distanza <i>r</i> da una retta → due <b>rette parallele</b>.</li>
</ul>
<p>Il compasso serve a ottenere distanze uguali, la riga a collegare i punti. Un raccordo è l'incrocio di due luoghi: <b>centro = (parallela a r) ∩ (parallela a r)</b>.</p>`
        },
        {
          label: `✂️ Con la carta piegata (origami)`,
          html: `<p>Un foglio di carta è uno strumento da geometra! Piega un foglio facendo coincidere due punti A e B: la <b>piega</b> è l'asse del segmento AB. Piega facendo coincidere due lati di un angolo: la piega è la <b>bisettrice</b>. Piegando in due un quadrato in diagonale ottieni un angolo di 45°.</p>
<p>L'origami permette anche di <b>trisecare un angolo</b> e duplicare il cubo, cose impossibili con riga e compasso: nel 1980 lo mostrò <b>Hisashi Abe</b>, giapponese.</p>`
        },
        {
          label: `💻 Come fa il computer (CAD)`,
          html: `<p>Nei programmi di disegno (CAD, Illustrator, Inkscape) i comandi come "<i>Offset</i>" (parallela a distanza data), "<i>Fillet</i>" (raccordo) e "<i>Polygon</i>" (poligono regolare) eseguono automaticamente queste costruzioni: <b>Offset</b> traccia le parallele a distanza r e <b>Fillet</b> cerca il centro dell'arco come incrocio delle parallele. Capire il procedimento ti fa usare il software senza andare a tentativi.</p>`
        },
        {
          label: `🏷️ Riconosci i punti`,
          html: `<p>Nell'asse di un segmento, clicca un punto e assegna il nome giusto.</p>`,
          widget: `labelDiagram`,
          options: {
            svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f8fafc"/><line x1="40" y1="150" x2="360" y2="150" stroke="#1e293b" stroke-width="3"/><path d="M200 35 A130 130 0 0 1 200 265" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M200 35 A130 130 0 0 0 200 265" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="280" stroke="#16a34a" stroke-width="3" stroke-dasharray="8 4"/><g fill="#1e293b"><circle cx="100" cy="150" r="5"/><circle cx="300" cy="150" r="5"/><circle cx="200" cy="35" r="5"/><circle cx="200" cy="265" r="5"/><circle cx="200" cy="150" r="5"/></g></svg>`,
            spots: [
              { x: 100, y: 150, label: `Estremo A` },
              { x: 300, y: 150, label: `Estremo B` },
              { x: 200, y: 150, label: `Punto medio M` },
              { x: 200, y: 35, label: `Intersezione degli archi (C)` },
              { x: 200, y: 22, label: `Asse del segmento` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: le costruzioni geometriche`,
      nodes: [
        { id: `eucl`, label: `Riga e compasso`, x: 50, y: 6, color: `#64748b`, html: `Due strumenti: retta e circonferenza.`, why: `I postulati di <b>Euclide</b> (Elementi, circa 300 a.C.) ammettono solo "tracciare una retta tra due punti" e "descrivere un cerchio con dato centro e raggio". Tutto il resto si deve costruire.` },
        { id: `asse`, label: `Asse e perpendicolari`, x: 18, y: 32, color: `#2563eb`, html: `Asse del segmento, perpendicolari, punto medio.`, why: `Dall'equidistanza: due circonferenze di uguale raggio si incontrano nei due punti equidistanti dai centri (rombo con diagonali perpendicolari).` },
        { id: `bis`, label: `Bisettrice`, x: 50, y: 32, color: `#f59e0b`, html: `Dividere un angolo a metà: 45°, 30°, 15°…`, why: `Si usa un rombo: la diagonale divide a metà gli angoli. Con la bisettrice si dimezza il numero dei lati dei poligoni.` },
        { id: `tal`, label: `Talete e proporzioni`, x: 82, y: 32, color: `#a855f7`, html: `Divisione di un segmento in parti uguali.`, why: `<b>Talete di Mileto</b> (VI sec. a.C.): un fascio di parallele determina su due trasversali segmenti proporzionali. Da qui deriva anche la similitudine.` },
        { id: `pol`, label: `Poligoni regolari`, x: 30, y: 62, color: `#ef4444`, html: `Triangolo, quadrato, esagono, pentagono, ottagono…`, why: `Dividere la circonferenza in n archi uguali. Gauss (1801) dimostrò che il poligono regolare di n lati è costruibile con riga e compasso se n è prodotto di una potenza di 2 e di primi di Fermat distinti (3, 5, 17, 257, 65537).` },
        { id: `tan`, label: `Tangenti e raccordi`, x: 70, y: 62, color: `#16a34a`, html: `Archi che uniscono linee senza spigoli.`, why: `La tangente è perpendicolare al raggio nel punto di contatto. Il centro del raccordo è il punto che sta alla distanza r da entrambe le linee: intersezione di due luoghi geometrici.` },
        { id: `app`, label: `Applicazioni`, x: 50, y: 90, color: `#0ea5e9`, html: `Architettura, meccanica, design, grafica, CAD.`, why: `Dal rosone gotico (archi tracciati con il compasso) alle strade (curve di raccordo) ai pezzi meccanici con spigoli smussati, tutto parte da queste costruzioni.` }
      ],
      edges: [
        [`eucl`, `asse`, `genera`], [`eucl`, `bis`, `genera`], [`eucl`, `tal`, `usa`], [`asse`, `pol`, `serve a`], [`bis`, `pol`, `raddoppia lati`],
        [`tal`, `pol`, `generalizza`], [`asse`, `tan`, `perpendicolari`], [`pol`, `app`, `per`], [`tan`, `app`, `per`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: poligoni e raccordi`,
      questions: [
        { type: `mc`, q: `Quanto è lungo il lato di un esagono regolare inscritto in una circonferenza di raggio 4 cm?`, options: [`2 cm`, `4 cm`, `8 cm`], answer: 1, explain: `Nell'esagono regolare il lato è uguale al raggio: l = r = 4 cm.` },
        { type: `mc`, q: `Dove si trova il centro di un arco di raccordo tra due rette incidenti?`, options: [`Nel punto in cui le due rette si incontrano`, `All'incrocio delle parallele alle due rette, a distanza r`, `Sul punto medio tra le due rette`], answer: 1, explain: `Il centro deve distare r da entrambe le rette: è l'intersezione delle due parallele a distanza r.` },
        { type: `tf`, q: `Una tangente a una circonferenza è perpendicolare al raggio nel punto di tangenza.`, answer: true, explain: `È la proprietà fondamentale delle tangenti, alla base dei raccordi.` },
        { type: `num`, q: `Quanti gradi misura l'angolo al centro di un ottagono regolare?`, answer: 45, tol: 0, unit: `°`, explain: `360° : 8 = 45°.` }
      ]
    }
  ],
  glossary: [
    { t: `Asse di un segmento`, d: `Retta perpendicolare al segmento nel suo punto medio; luogo dei punti equidistanti dagli estremi.` },
    { t: `Bisettrice`, d: `Semiretta che divide un angolo in due angoli uguali.` },
    { t: `Perpendicolare`, d: `Retta che con un'altra forma un angolo di 90°.` },
    { t: `Parallele`, d: `Rette di uno stesso piano che non si incontrano mai.` },
    { t: `Poligono regolare`, d: `Poligono con lati e angoli tutti uguali; è inscrivibile in una circonferenza.` },
    { t: `Tangente`, d: `Retta che tocca una circonferenza in un solo punto, perpendicolare al raggio.` },
    { t: `Raccordo`, d: `Arco di circonferenza che unisce senza spigoli due linee, tangente a entrambe.` },
    { t: `Luogo geometrico`, d: `Insieme di tutti i punti che hanno una stessa proprietà.` },
    { t: `Sezione aurea`, d: `Rapporto φ = (1+√5)/2 ≈ 1,618, legato al pentagono regolare.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Per costruire l'asse di AB, l'apertura del compasso deve essere…`, options: [`minore della metà di AB`, `maggiore della metà di AB`, `esattamente AB`], answer: 1, explain: `Se fosse minore o uguale alla metà, gli archi non si incontrerebbero (o si toccherebbero soltanto): serve più della metà.` },
      { type: `tf`, q: `L'asse di un segmento passa per il suo punto medio.`, answer: true, explain: `È perpendicolare al segmento proprio nel punto medio M.` },
      { type: `num`, q: `Quanto misura ciascun angolo interno di un esagono regolare?`, answer: 120, tol: 0, unit: `°`, explain: `Somma angoli interni (6−2)·180° = 720°; 720° : 6 = 120°.` },
      { type: `mc`, q: `Con la squadra da 30°/60° e quella da 45° appoggiate insieme si può ottenere un angolo di…`, options: [`15°`, `20°`, `25°`], answer: 0, explain: `45° − 30° = 15°; si ottiene anche 75° (45° + 30°).` },
      { type: `num`, q: `In un raccordo di raggio r = 3 cm tra due rette perpendicolari, a che distanza dal vertice (misurata lungo ciascuna retta) si trovano i punti di tangenza?`, answer: 3, tol: 0, unit: `cm`, explain: `Il centro è a 3 cm da ciascuna retta; i punti di tangenza stanno a 3 cm dal vertice lungo ciascuna retta (il quadrato di lato r).` },
      { type: `order`, q: `Metti in ordine i passi per la bisettrice di un angolo.`, items: [`Arco con centro nel vertice: taglia i lati in A e B`, `Arco con centro in A`, `Stesso raggio, arco con centro in B: incrocio E`, `Traccia la semiretta dal vertice a E`], explain: `Prima i punti sui lati, poi due archi uguali che si incontrano, infine la semiretta.` },
      { type: `text`, q: `Come si chiama il teorema usato per dividere un segmento in parti uguali con le parallele?`, answer: [`talete`, `teorema di talete`, `di talete`], explain: `Il teorema di Talete: un fascio di rette parallele determina segmenti proporzionali sulle trasversali.` },
      { type: `mc`, q: `Quale poligono regolare ha il lato uguale al raggio della circonferenza circoscritta?`, options: [`Quadrato`, `Pentagono`, `Esagono`], answer: 2, explain: `L'angolo al centro è 60° e il triangolo con due raggi e un lato è equilatero.` },
      { type: `tf`, q: `Il punto di tangenza di un raccordo si trova sulla perpendicolare alla retta condotta dal centro dell'arco.`, answer: true, explain: `Il raggio nel punto di tangenza è perpendicolare alla tangente, quindi il piede della perpendicolare dal centro è il punto di tangenza.` },
      { type: `mc`, q: `Quale matita si usa per le linee di costruzione?`, options: [`Dura (H) e leggera`, `Morbida (B) e molto marcata`, `Pennarello`], answer: 0, explain: `Le linee di costruzione devono essere sottili; il disegno finito si ripassa con un tratto più marcato.` }
    ]
  }
});
