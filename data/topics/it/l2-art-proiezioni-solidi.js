TOPIC('it', {
  id: `l2-art-proiezioni-solidi`,
  title: `Disegno: sezioni e solidi`,
  intro: `Un ingegnere deve far costruire un pezzo che non esiste ancora; un chirurgo guarda una TAC, che è una pila di "fette" del corpo; un panettiere taglia una pagnotta per vedere come è cresciuta. Disegnare i <b>solidi</b> in proiezioni ortogonali, <b>tagliarli</b> con un piano (<b>sezioni</b>) e <b>aprirli</b> sul foglio (<b>sviluppi</b>) è la grammatica del disegno tecnico. Qui riprendi le proiezioni del primo anno e le applichi ai solidi veri: prismi, piramidi, cilindri, coni, sfere. ✏️📐`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Ripasso: le tre viste`,
      html: `<p>Nelle <b>proiezioni ortogonali</b> (metodo di <b>Gaspard Monge</b>, 1746-1818, matematico francese, che ne fece la "geometria descrittiva") si proietta ogni punto dell'oggetto con raggi <b>perpendicolari</b> su piani:</p>
<ul>
<li><b>PV</b> (piano verticale): vista frontale, o <b>prospetto</b>;</li>
<li><b>PO</b> (piano orizzontale): vista dall'alto, o <b>pianta</b>;</li>
<li><b>PL</b> (piano laterale): vista da destra o da sinistra, o <b>profilo</b>.</li>
</ul>
<p>Dopo aver proiettato, si <b>ribalta</b> il PO di 90° intorno alla <b>linea di terra</b> (LT, intersezione di PV e PO) per metterlo nello stesso foglio. Le viste restano <b>allineate</b>: i punti corrispondenti stanno sulla stessa <b>linea di richiamo</b> (perpendicolare a LT).</p>
<p>Regole di disegno da ricordare: gli spigoli visibili si tracciano a <b>linea continua</b>; quelli <b>nascosti</b> dietro altri elementi, a <b>tratteggio</b>; gli assi di simmetria a <b>tratto-punto</b> (linea d'asse).</p>`
    },
    {
      type: `text`, title: `2. Proiettare un solido`,
      html: `<p>Il caso più semplice: il solido <b>appoggia sul PO</b> (la base è sul piano orizzontale) e ha l'asse perpendicolare al PO. Allora:</p>
<ul>
<li><b>Prisma retto</b> (a base poligonale): la pianta è il <b>poligono di base</b> (in vera forma); il prospetto è un <b>rettangolo</b> alto come il solido (con tante linee verticali quanti sono gli spigoli visti);</li>
<li><b>Piramide retta</b>: la pianta è il poligono di base con le <b>linee dallo spigolo apicale</b> ai vertici (spigoli laterali); il prospetto è un <b>triangolo</b>;</li>
<li><b>Cilindro retto</b>: pianta = <b>cerchio</b>; prospetto = <b>rettangolo</b>;</li>
<li><b>Cono retto</b>: pianta = <b>cerchio</b> con il vertice al centro; prospetto = <b>triangolo isoscele</b>;</li>
<li><b>Sfera</b>: tutte e tre le viste sono <b>cerchi</b> di raggio uguale.</li>
</ul>
<p>L'<b>altezza</b> del solido si legge sul prospetto, la <b>profondità</b> sulla pianta, la <b>larghezza</b> su entrambe: il disegno tecnico "ripete" le misure comuni in viste diverse, e questo permette di controllare gli errori.</p>`
    },
    {
      type: `svg`, title: `Prisma, piramide e cono in proiezioni`,
      caption: `Sopra la linea di terra (LT) il prospetto, sotto la pianta ribaltata. Le viste sono allineate verticalmente.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f0fdf4"/><line x1="20" y1="150" x2="580" y2="150" stroke="#166534" stroke-width="3"/><text x="25" y="170" font-size="14" font-weight="bold" fill="#166534">LT</text><rect x="70" y="50" width="80" height="100" fill="#bbf7d0" stroke="#14532d" stroke-width="3"/><rect x="70" y="150" width="80" height="70" fill="#dcfce7" stroke="#14532d" stroke-width="3"/><line x1="110" y1="40" x2="110" y2="225" stroke="#166534" stroke-width="1.5" stroke-dasharray="6 4"/><text x="110" y="36" font-size="14" font-weight="bold" fill="#14532d" text-anchor="middle">PRISMA</text><text x="110" y="245" font-size="14" fill="#14532d" text-anchor="middle">base = pianta</text><polygon points="270,150 350,150 310,50" fill="#bbf7d0" stroke="#14532d" stroke-width="3"/><rect x="270" y="150" width="80" height="80" fill="#dcfce7" stroke="#14532d" stroke-width="3"/><line x1="270" y1="150" x2="350" y2="230" stroke="#14532d" stroke-width="2"/><line x1="350" y1="150" x2="270" y2="230" stroke="#14532d" stroke-width="2"/><text x="310" y="36" font-size="14" font-weight="bold" fill="#14532d" text-anchor="middle">PIRAMIDE</text><text x="310" y="250" font-size="14" fill="#14532d" text-anchor="middle">spigoli verso l\'apice</text><polygon points="470,150 550,150 510,50" fill="#bbf7d0" stroke="#14532d" stroke-width="3"/><circle cx="510" cy="190" r="40" fill="#dcfce7" stroke="#14532d" stroke-width="3"/><circle cx="510" cy="190" r="3" fill="#14532d"/><text x="510" y="36" font-size="14" font-weight="bold" fill="#14532d" text-anchor="middle">CONO</text><text x="510" y="250" font-size="14" fill="#14532d" text-anchor="middle">cerchio</text><text x="315" y="285" font-size="14" fill="#334155" text-anchor="middle">sopra: prospetto (PV) · sotto: pianta (PO)</text></svg>`
    },
    {
      type: `3d`, title: `Ruota il solido: da che parte lo guardi?`,
      scene: `solid`,
      options: { shape: `pyramid`, n: 4, r: 1.3, h: 2, color: `#22c55e`, labels: true, shapes: [`cube`, `box`, `prism`, `pyramid`, `cylinder`, `cone`, `sphere`] },
      caption: `Guarda ogni solido dall'alto (pianta) e di fronte (prospetto) e verifica le forme: la sfera dà sempre cerchi, il cilindro un cerchio e un rettangolo, la piramide un quadrato con diagonali e un triangolo.`
    },
    {
      type: `example`, title: `Esempio: disegnare una piramide quadrangolare`,
      html: `<p>Piramide retta di <b>base quadrata di lato 6 cm</b> e <b>altezza 8 cm</b>, appoggiata sul PO. Come procedi?</p>
<ol>
<li>Traccia la <b>linea di terra</b>.</li>
<li><b>Pianta</b> (sotto LT): disegna un quadrato di 6 × 6 cm; traccia le due diagonali: si incontrano al centro, dove si proietta il vertice.</li>
<li><b>Prospetto</b> (sopra LT): con i richiami verticali dai vertici del quadrato, individua la base di 6 cm sulla LT; il vertice sta sul richiamo del centro, a <b>8 cm di altezza</b>. Collega i due estremi della base al vertice: ottieni un triangolo isoscele.</li>
<li>L'<b>apotema</b> (altezza di una faccia) si trova con il teorema di Pitagora: √(8² + 3²) = √73 ≈ <b>8,5 cm</b>; lo spigolo laterale, √(8² + (3√2)²) = √(64 + 18) = √82 ≈ <b>9,1 cm</b>: nelle proiezioni normali non si vedono in vera grandezza perché non sono paralleli ai piani. Per vederli occorre una vista ausiliaria (cambiamento di piano) o una rotazione.</li>
</ol>`
    },
    {
      type: `quiz`, title: `Mini-quiz: viste dei solidi`,
      questions: [
        { type: `mc`, q: `Quale forma ha la pianta di un cono retto appoggiato sul PO?`, options: [`Un cerchio`, `Un triangolo`, `Un'ellisse`], answer: 0, explain: `La base è un cerchio, parallela al PO, e quindi in vera forma.` },
        { type: `mc`, q: `Quale solido ha tutte e tre le viste uguali (cerchi)?`, options: [`La sfera`, `Il cilindro`, `Il cubo`], answer: 0, explain: `La sfera è simmetrica rispetto a ogni piano.` },
        { type: `tf`, q: `Gli spigoli nascosti si disegnano con linea tratteggiata.`, answer: true, explain: `Per convenzione.` }
      ]
    },
    {
      type: `text`, title: `3. Le sezioni`,
      html: `<p>Una <b>sezione</b> si ottiene "tagliando" il solido con un <b>piano secante</b>: la figura che ne risulta (l'intersezione del piano con la superficie del solido) è la <b>figura di sezione</b>. Dopo il taglio si può togliere una parte e mostrare l'interno: è lo stesso principio di una sezione architettonica o di una TAC.</p>
<p>La figura di sezione dipende dalla <b>posizione del piano</b>:</p>
<ul>
<li>piano <b>parallelo alla base</b> di un prisma o di un cilindro: figura <b>uguale alla base</b>; in una piramide o in un cono: figura <b>simile alla base</b>, più piccola;</li>
<li>piano <b>perpendicolare alla base</b> e passante per l'asse di un cilindro: <b>rettangolo</b>; di un cono: <b>triangolo isoscele</b>;</li>
<li>piano <b>obliquo</b> a un cilindro: <b>ellisse</b>;</li>
<li><b>sfera</b>: qualunque piano la taglia in un <b>cerchio</b> (massimo se passa per il centro);</li>
<li><b>cubo</b>: piano parallelo a una faccia → quadrato; piano per due spigoli opposti (sezione diagonale) → rettangolo di lati <i>a</i> e <i>a</i>√2; piano per tre vertici adiacenti a uno stesso vertice → <b>triangolo equilatero</b>; piano per i punti medi di sei spigoli → <b>esagono regolare</b>.</li>
</ul>
<p>Per ottenere la <b>vera forma</b> della sezione (che nelle proiezioni normali appare deformata se il piano è inclinato) si <b>ribalta</b> il piano secante su uno dei piani di proiezione, oppure si usa una vista ausiliaria, perpendicolare al piano di taglio.</p>`
    },
    {
      type: `svg`, title: `Le sezioni del cono: le coniche`,
      caption: `Tagliando un cono con piani diversi si ottengono: cerchio (piano parallelo alla base), ellisse (piano obliquo che taglia tutte le generatrici), parabola (piano parallelo a una generatrice), iperbole (piano parallelo all'asse).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#fef3c7"/><polygon points="300,30 180,220 420,220" fill="#fde68a" stroke="#78350f" stroke-width="3"/><ellipse cx="300" cy="220" rx="120" ry="18" fill="#fcd34d" stroke="#78350f" stroke-width="3"/><line x1="233" y1="130" x2="367" y2="130" stroke="#2563eb" stroke-width="4"/><line x1="216" y1="163" x2="348" y2="106" stroke="#16a34a" stroke-width="4"/><line x1="253" y1="105" x2="322" y2="214" stroke="#dc2626" stroke-width="4"/><line x1="330" y1="78" x2="330" y2="220" stroke="#7c3aed" stroke-width="4"/><text x="300" y="20" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">un cono, quattro tagli</text><text x="150" y="134" font-size="14" font-weight="bold" fill="#1d4ed8" text-anchor="middle">cerchio</text><text x="470" y="90" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">ellisse (obliquo)</text><line x1="400" y1="95" x2="350" y2="106" stroke="#15803d" stroke-width="1.5"/><text x="215" y="80" font-size="14" font-weight="bold" fill="#b91c1c" text-anchor="middle">parabola</text><line x1="245" y1="86" x2="262" y2="112" stroke="#b91c1c" stroke-width="1.5"/><text x="400" y="190" font-size="14" font-weight="bold" fill="#6d28d9" text-anchor="middle">iperbole</text><line x1="356" y1="184" x2="332" y2="170" stroke="#6d28d9" stroke-width="1.5"/><line x1="200" y1="128" x2="233" y2="130" stroke="#1d4ed8" stroke-width="1.5"/><line x1="430" y1="125" x2="368" y2="130" stroke="#15803d" stroke-width="1.5" opacity="0"/></svg>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… le coniche descrivono i pianeti?`,
      html: `<p>Le <b>coniche</b> furono studiate nel III-II sec. a.C. da <b>Apollonio di Perga</b>, che diede loro i nomi di ellisse, parabola e iperbole. Per quasi 1800 anni sembrarono pura geometria. Poi nel Seicento <b>Keplero</b> scoprì che i pianeti si muovono su <b>ellissi</b> con il Sole in un fuoco; <b>Galileo</b> che un proiettile lanciato descrive (senza aria) una <b>parabola</b>; e <b>Newton</b> che le comete possono seguire una parabola o un'<b>iperbole</b>. Anche le <b>antenne paraboliche</b> e i fari delle auto usano la parabola per concentrare o dirigere i raggi.</p>`
    },
    {
      type: `text`, title: `4. Gli sviluppi dei solidi`,
      html: `<p>Lo <b>sviluppo</b> di un solido è la figura piana che si ottiene "aprendo" e stendendo la superficie su un foglio: se la ritagli e la pieghi, ricostruisci il solido. È fondamentale per costruire scatole, imballaggi, tende, lampade (carpenteria, cartotecnica).</p>
<ul>
<li><b>Cubo</b>: sei quadrati; esistono <b>11</b> sviluppi diversi (la famosa "croce" è solo uno);</li>
<li><b>Prisma retto</b>: due poligoni di base + <b>rettangoli</b> laterali affiancati, di base uguale ai lati del poligono e altezza uguale a quella del prisma;</li>
<li><b>Piramide retta</b>: il poligono di base + tanti <b>triangoli isosceli</b> quanti sono i lati;</li>
<li><b>Cilindro retto</b>: due cerchi + un <b>rettangolo</b> con lati 2πr (circonferenza di base) e h (altezza);</li>
<li><b>Cono retto</b>: un cerchio + un <b>settore circolare</b> di raggio uguale all'<b>apotema</b> <i>a</i> (generatrice) del cono e con arco lungo quanto la circonferenza di base: <b>l'angolo al centro</b> misura <b>360° · r / a</b>;</li>
<li><b>Sfera</b>: non è sviluppabile! Non si può appiattire senza stirarla o strapparla: per questo ogni mappa del mondo è deformata (vedi la proiezione di Mercatore).</li>
</ul>
<p>Un solido è <b>sviluppabile</b> se la sua superficie può essere distesa su un piano <b>senza deformarla</b>; la superficie laterale di prismi, cilindri, piramidi e coni lo è, quella della sfera no.</p>`
    },
    {
      type: `svg`, title: `Lo sviluppo del cono`,
      caption: `Un cono con raggio di base r = 3 e apotema a = 5 si sviluppa in un settore circolare di raggio 5 e angolo 360° × 3 / 5 = 216°, più il cerchio di base.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#faf5ff"/><polygon points="100,50 40,200 160,200" fill="#e9d5ff" stroke="#581c87" stroke-width="3"/><ellipse cx="100" cy="200" rx="60" ry="15" fill="#d8b4fe" stroke="#581c87" stroke-width="3"/><text x="100" y="270" font-size="14" fill="#581c87" text-anchor="middle">cono: r = 3, a = 5</text><text x="55" y="120" font-size="14" font-weight="bold" fill="#581c87" text-anchor="end">a</text><path d="M400 80 L257.3 33.6 A150 150 0 1 0 542.7 33.6 Z" fill="#e9d5ff" stroke="#581c87" stroke-width="3"/><line x1="400" y1="80" x2="400" y2="230" stroke="#7e22ce" stroke-width="2" stroke-dasharray="6 4"/><text x="412" y="150" font-size="14" fill="#581c87">a = 5</text><path d="M330 100 A60 60 0 0 0 470 100" fill="none" stroke="#dc2626" stroke-width="3"/><text x="400" y="190" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">216°</text><text x="400" y="270" font-size="14" fill="#581c87" text-anchor="middle">settore circolare (superficie laterale)</text><circle cx="555" cy="260" r="26" fill="#d8b4fe" stroke="#581c87" stroke-width="3"/><text x="555" y="266" font-size="14" fill="#581c87" text-anchor="middle">r=3</text></svg>`
    },
    {
      type: `example`, title: `Esempio: quanto cartoncino per una lampada a cono?`,
      html: `<p>Un paralume a forma di <b>cono</b> (senza il fondo) ha raggio di base <b>r = 12 cm</b> e apotema <b>a = 20 cm</b>.</p>
<ol>
<li>Altezza: h = √(20² − 12²) = √(400 − 144) = √256 = <b>16 cm</b> (terna pitagorica 12-16-20).</li>
<li>Sviluppo: settore circolare di raggio 20 cm; angolo al centro = 360° × 12 / 20 = <b>216°</b>.</li>
<li>Lunghezza dell'arco = circonferenza di base = 2π · 12 ≈ <b>75,4 cm</b>.</li>
<li>Superficie laterale: S = π · r · a = π · 12 · 20 ≈ <b>754 cm²</b> (circa 0,075 m²): servirà un cartoncino un po' più grande, per i margini di incollaggio.</li>
</ol>
<p>Per un <b>cilindro</b> di raggio 2 e altezza 5, invece, l'area laterale è il rettangolo 2π·2 × 5 = 20π ≈ <b>62,8 cm²</b>.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: sezioni e sviluppi`,
      questions: [
        { type: `mc`, q: `Quale figura si ottiene tagliando una sfera con un piano qualsiasi?`, options: [`Un cerchio`, `Un'ellisse`, `Un quadrato`], answer: 0, explain: `Qualsiasi sezione piana della sfera è un cerchio.` },
        { type: `num`, q: `Un cono ha raggio di base 4 e apotema 8. Quanto misura l'angolo al centro del settore (in gradi)?`, answer: 180, tol: 0, unit: `°`, explain: `360 × 4 / 8 = 180°: un semicerchio.` },
        { type: `tf`, q: `Il piano di taglio parallelo a una generatrice del cono dà una parabola.`, answer: true, explain: `È una delle quattro coniche.` }
      ]
    },
    {
      type: `curiosity`, title: `Lo sapevi che… la sfera non si può "srotolare"?`,
      html: `<p>Una sfera non è sviluppabile: lo dimostrò <b>Gauss</b> nell'Ottocento con il suo "<i>Theorema Egregium</i>" (1827): la curvatura di una superficie non cambia se la si piega senza stirarla. Il cilindro e il cono hanno curvatura gaussiana nulla (come il foglio piano); la sfera ha curvatura positiva. Questo è il motivo per cui ogni carta geografica su un foglio piano distorce aree, distanze o forme, e per cui un pallone si fa cucendo insieme pezzi di forma speciale.</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul><li>Solido sul PO: prisma → poligono + rettangolo; piramide → poligono con diagonali + triangolo; cilindro → cerchio + rettangolo; cono → cerchio + triangolo; sfera → cerchi.</li><li>Sezioni: la figura dipende dal piano; il cono dà le <b>coniche</b> (cerchio, ellisse, parabola, iperbole).</li><li>Sviluppi: cono → settore con angolo 360°·r/a; cilindro → rettangolo 2πr × h; la sfera non si sviluppa.</li></ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Sezioni e sviluppi si capiscono meglio con oggetti comuni e con un po' di manualità.`,
      tabs: [
        {
          label: `🥖 In cucina`,
          html: `<p>Taglia una carota in tre modi: <b>orizzontale</b> (dischi: cerchi), <b>in obliquo</b> (ovali: ellissi), <b>per lungo</b> (rettangolo). Fai lo stesso con un salame (cilindro). Un cono gelato diviso a metà con un taglio verticale mostra il triangolo; con un taglio orizzontale, un cerchio. Provare con un oggetto vero è il modo migliore di "vedere" le sezioni.</p>`
        },
        {
          label: `✂️ Ritaglia e piega`,
          html: `<p>Disegna su carta un settore circolare di raggio 10 cm e angolo 216°, ritaglialo e incolla i due lati: ottieni un cono con raggio di base 6 cm (circonferenza = 2π·6 ≈ 37,7 cm, pari all'arco 2π·10·216/360 ≈ 37,7 cm). Con un rettangolo di 6,28 × 4 cm, arrotolato, hai un cilindro di raggio 1 cm e altezza 4 cm. Con la carta si capisce perché la superficie laterale è un rettangolo o un settore.</p>`
        },
        {
          label: `🧩 Associa solido e vista`,
          html: `<p>Collega ogni solido alla sua pianta e al suo prospetto.</p>`,
          widget: `match`,
          options: { pairs: [[`Cilindro retto (pianta, prospetto)`, `Cerchio e rettangolo`], [`Cono retto (pianta, prospetto)`, `Cerchio e triangolo`], [`Piramide quadrata (pianta, prospetto)`, `Quadrato con diagonali e triangolo`], [`Prisma quadrangolare (pianta, prospetto)`, `Quadrato e rettangolo`], [`Sfera (pianta, prospetto)`, `Cerchio e cerchio`]] }
        },
        {
          label: `🧩 Sviluppabile o no?`,
          html: `<p>Classifica le superfici.</p>`,
          widget: `classify`,
          options: { groups: [`Sviluppabile`, `Non sviluppabile`], items: [[`Cilindro`, 0], [`Cono`, 0], [`Cubo`, 0], [`Sfera`, 1], [`Prisma`, 0], [`Superficie di un pallone`, 1]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: sezioni e sviluppi`,
      nodes: [
        { id: `sol`, label: `Solidi`, x: 50, y: 6, color: `#64748b`, html: `Prismi, piramidi, cilindri, coni, sfere.`, why: `Quasi tutti gli oggetti reali sono combinazioni di questi solidi semplici.` },
        { id: `po`, label: `Proiezioni ortogonali`, x: 18, y: 28, color: `#f59e0b`, html: `PV, PO, PL con ribaltamento.`, why: `Monge (1795-1799) le sistematizzò per la progettazione militare delle fortificazioni.` },
        { id: `sez`, label: `Sezioni`, x: 50, y: 28, color: `#0ea5e9`, html: `Piano secante e figura di sezione.`, why: `Per mostrare l'interno di un oggetto e la sua struttura: serve a progettare e a capire.` },
        { id: `svi`, label: `Sviluppi`, x: 82, y: 28, color: `#a855f7`, html: `Superficie stesa sul piano.`, why: `Per costruire oggetti con lamiera, cartone, stoffa: la geometria diventa un modello di taglio.` },
        { id: `con`, label: `Coniche`, x: 40, y: 58, color: `#ef4444`, html: `Cerchio, ellisse, parabola, iperbole.`, why: `Apollonio le descrisse; Keplero e Newton le ritrovarono nei moti dei pianeti.` },
        { id: `vf`, label: `Vera forma`, x: 14, y: 62, color: `#22c55e`, html: `Ribaltamento del piano.`, why: `Un piano inclinato proietta figure deformate: per misurare occorre ribaltarlo.` },
        { id: `dev`, label: `Superfici sviluppabili`, x: 78, y: 62, color: `#14b8a6`, html: `Cilindro e cono sì, sfera no.`, why: `Gauss: la curvatura non cambia piegando; la sfera ha curvatura positiva.` },
        { id: `app`, label: `Applicazioni`, x: 50, y: 90, color: `#3b82f6`, html: `Carpenteria, CAD, TAC, imballaggi.`, why: `Dalla carta al computer: i programmi di modellazione 3D usano le stesse idee.` }
      ],
      edges: [[`sol`, `po`, `si rappresentano`], [`sol`, `sez`, `si tagliano`], [`sol`, `svi`, `si aprono`], [`sez`, `con`, `cono`], [`po`, `vf`, `ribalta`], [`svi`, `dev`, `limite`], [`con`, `app`, `usi`], [`dev`, `app`, `usi`]]
    }
  ],
  glossary: [
    { t: `Proiezione ortogonale`, d: `Proiezione con raggi perpendicolari al piano di proiezione.` },
    { t: `Linea di terra (LT)`, d: `Intersezione tra piano verticale e piano orizzontale.` },
    { t: `Piano secante`, d: `Piano che taglia un solido.` },
    { t: `Sezione`, d: `Figura che nasce dall'intersezione di un solido con un piano.` },
    { t: `Vera forma`, d: `Figura in grandezza e forma reali, quando il piano è parallelo al piano di proiezione.` },
    { t: `Sviluppo`, d: `Figura piana ottenuta aprendo la superficie di un solido.` },
    { t: `Apotema (del cono)`, d: `Segmento che unisce il vertice con un punto della circonferenza di base (generatrice).` },
    { t: `Settore circolare`, d: `Parte di cerchio compresa tra due raggi e un arco.` },
    { t: `Conica`, d: `Curva ottenuta tagliando un cono con un piano: cerchio, ellisse, parabola, iperbole.` },
    { t: `Generatrice`, d: `Segmento che, ruotando, genera la superficie del cono o del cilindro.` },
    { t: `Superficie sviluppabile`, d: `Superficie che si può stendere su un piano senza deformarla.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quale forma ha il prospetto di un cilindro retto appoggiato sul PO?`, options: [`Un rettangolo`, `Un cerchio`, `Un triangolo`], answer: 0, explain: `Largo come il diametro, alto come il cilindro.` },
      { type: `mc`, q: `Quale forma ha la pianta di una piramide retta a base quadrata?`, options: [`Un quadrato con le diagonali`, `Un triangolo`, `Un cerchio`], answer: 0, explain: `La base in vera forma, con gli spigoli laterali che convergono al centro.` },
      { type: `tf`, q: `Una sezione di sfera è sempre un cerchio.`, answer: true, explain: `Qualunque piano la taglia in un cerchio.` },
      { type: `mc`, q: `Quale conica nasce da un piano parallelo a una generatrice del cono?`, options: [`Parabola`, `Ellisse`, `Cerchio`], answer: 0, explain: `Il cerchio nasce con piano parallelo alla base; l'ellisse con piano obliquo.` },
      { type: `num`, q: `Un cono ha r = 6 e a = 10. Quanti gradi misura l'angolo al centro del suo settore circolare?`, answer: 216, tol: 0, unit: `°`, explain: `360 × 6 / 10 = 216°.` },
      { type: `num`, q: `Un cilindro ha r = 3 cm e h = 10 cm. Quanto misura (in cm) la base del rettangolo di sviluppo, cioè la circonferenza? (arrotonda all'intero)`, answer: 19, tol: 0.5, unit: `cm`, explain: `2π × 3 ≈ 18,85 cm ≈ 19 cm.` },
      { type: `mc`, q: `Quanti sviluppi distinti ha il cubo?`, options: [`11`, `6`, `4`], answer: 0, explain: `Il cubo ha 11 sviluppi diversi.` },
      { type: `tf`, q: `La sfera può essere sviluppata su un piano senza deformazioni.`, answer: false, explain: `Non è una superficie sviluppabile.` },
      { type: `text`, q: `Come si chiama la linea in cui si incontrano il piano verticale e il piano orizzontale?`, answer: [`linea di terra`, `lt`, `la linea di terra`], explain: `Linea di terra (LT).` },
      { type: `order`, q: `Ordina i passi per disegnare un solido in proiezioni.`, items: [`Tracciare la linea di terra`, `Disegnare la pianta in vera forma`, `Tracciare i richiami verticali`, `Disegnare il prospetto con le altezze`, `Tratteggiare gli spigoli nascosti`], explain: `Dalla LT alle viste, e infine le convenzioni di linea.` }
    ]
  }
});
