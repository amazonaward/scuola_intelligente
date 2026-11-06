TOPIC('it', {
  id: "m2-mat-aree",
  title: "Le aree dei poligoni",
  intro: "Quante piastrelle servono per il pavimento? Quanta vernice per una parete? Quanto prato per un campo da calcio? Per rispondere serve l'<b>area</b>. Scopriamo da dove vengono le formule di rettangolo, quadrato, parallelogramma, triangolo, rombo, trapezio e poligoni regolari, e come usarle anche «al contrario» con le <b>formule inverse</b>.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Superficie, area ed equiestensione",
      html: `<p>La <b>superficie</b> è la parte di piano racchiusa da un poligono; l'<b>area</b> è la <b>misura</b> della superficie, cioè quante volte contiene un quadratino scelto come unità.</p>
<p>L'unità di misura principale è il <b>metro quadrato (m²)</b>: un quadrato di lato 1 m. Ogni unità è <b>100 volte</b> più grande della successiva:</p>
<p style="text-align:center"><b>km² → hm² → dam² → m² → dm² → cm² → mm²</b> &nbsp; (× 100 a ogni passo verso destra)</p>
<p>Esempio: 1 m² = 100 dm² = 10 000 cm². In agricoltura si usano l'<b>ettaro</b> (ha = 1 hm² = 10 000 m²) e l'<b>ara</b> (a = 100 m²).</p>
<p>Due figure sono <b>equiestese</b> (o equivalenti) se hanno la <b>stessa area</b>, anche se hanno forme diverse. Due figure formate dagli stessi pezzi messi in modo diverso (<b>equiscomponibili</b>) sono sempre equiestese: è l'idea su cui si basano tutte le formule!</p>`
    },
    {
      type: "text",
      title: "Rettangolo e quadrato",
      html: `<p><b>Rettangolo</b>: dentro un rettangolo di base 5 cm e altezza 3 cm stanno 3 file di 5 quadretti da 1 cm²: 5 × 3 = 15 cm².</p>
<p style="text-align:center;font-size:1.15em"><b>A = b × h</b> &nbsp;&nbsp; formule inverse: <b>b = A : h</b> &nbsp; <b>h = A : b</b></p>
<p><b>Quadrato</b>: è un rettangolo con base e altezza uguali.</p>
<p style="text-align:center;font-size:1.15em"><b>A = l × l = l²</b> &nbsp;&nbsp; formula inversa: <b>l = √A</b></p>
<p>Il quadrato si può anche vedere come un rombo: <b>A = d² : 2</b> (d = diagonale), e quindi <b>d = √(2 × A)</b>.</p>`
    },
    {
      type: "widget",
      title: "Area del rettangolo sui quadretti",
      widget: "areaGrid",
      options: { w: 5, h: 3, max: 12 },
      caption: "Cambia base e altezza e conta i quadretti: l'area è sempre base × altezza."
    },
    {
      type: "text",
      title: "Parallelogramma e triangolo",
      html: `<p><b>Parallelogramma</b>: se tagli il triangolo a sinistra e lo sposti a destra, ottieni un <b>rettangolo</b> con la stessa base e la stessa altezza (sono equiscomponibili):</p>
<p style="text-align:center;font-size:1.15em"><b>A = b × h</b> &nbsp;&nbsp; <b>b = A : h</b> &nbsp; <b>h = A : b</b></p>
<p><b>Triangolo</b>: due triangoli uguali, accostati, formano un parallelogramma. Quindi il triangolo è <b>metà</b> del parallelogramma con stessa base e altezza:</p>
<p style="text-align:center;font-size:1.15em"><b>A = (b × h) : 2</b> &nbsp;&nbsp; <b>b = (2 × A) : h</b> &nbsp; <b>h = (2 × A) : b</b></p>
<p>Nel <b>triangolo rettangolo</b> i due cateti sono base e altezza: A = (c₁ × c₂) : 2. Ricorda: l'altezza è sempre <b>perpendicolare</b> alla base e può anche cadere <b>fuori</b> dal triangolo (triangoli ottusangoli).</p>`
    },
    {
      type: "svg",
      title: "Dal parallelogramma al rettangolo, dal triangolo al parallelogramma",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<polygon points="40,130 100,40 260,40 200,130" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<polygon points="40,130 100,40 100,130" fill="#f97316" stroke="#92400e" stroke-width="3"/>
<line x1="100" y1="40" x2="100" y2="130" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/>
<text x="150" y="155" font-size="15" text-anchor="middle" fill="#78350f">base b</text>
<text x="108" y="95" font-size="15" fill="#dc2626">h</text>
<text x="290" y="95" font-size="34" fill="#1f2937">→</text>
<rect x="340" y="40" width="160" height="90" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<polygon points="440,130 500,40 500,130" fill="#f97316" stroke="#92400e" stroke-width="3"/>
<text x="420" y="155" font-size="15" text-anchor="middle" fill="#78350f">rettangolo b × h</text>
<polygon points="60,270 140,180 220,270" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<text x="140" y="292" font-size="15" text-anchor="middle" fill="#1e3a8a">triangolo</text>
<text x="290" y="235" font-size="34" fill="#1f2937">→</text>
<polygon points="340,270 420,180 500,270" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<polygon points="420,180 580,180 500,270" fill="#a5b4fc" stroke="#1e3a8a" stroke-width="3"/>
<text x="460" y="292" font-size="15" text-anchor="middle" fill="#1e3a8a">2 triangoli = parallelogramma</text>
</svg>`,
      caption: "Spostando un pezzo il parallelogramma diventa un rettangolo; raddoppiando un triangolo si ottiene un parallelogramma."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le prime formule",
      questions: [
        { type: "num", q: "Un rettangolo ha base 12 cm e altezza 7 cm. Area?", answer: 84, unit: "cm²", explain: "12 × 7 = 84 cm²." },
        { type: "num", q: "Un triangolo ha area 30 cm² e base 10 cm. Quanto misura l'altezza?", answer: 6, unit: "cm", explain: "h = 2 × 30 : 10 = 6 cm." },
        { type: "num", q: "Quanti cm² sono 3 dm²?", answer: 300, unit: "cm²", explain: "1 dm² = 100 cm² → 3 × 100 = 300 cm²." }
      ]
    },
    {
      type: "text",
      title: "Rombo e trapezio",
      html: `<p><b>Rombo</b>: è contenuto in un rettangolo che ha come lati le due diagonali, e ne occupa esattamente la <b>metà</b>:</p>
<p style="text-align:center;font-size:1.15em"><b>A = (D × d) : 2</b> &nbsp;&nbsp; <b>D = (2 × A) : d</b> &nbsp; <b>d = (2 × A) : D</b></p>
<p>Il rombo è anche un parallelogramma, quindi vale pure A = lato × altezza. (La formula con le diagonali vale per ogni quadrilatero con le diagonali perpendicolari, come l'<b>aquilone</b>/deltoide.)</p>
<p><b>Trapezio</b>: due trapezi uguali, uno capovolto, formano un parallelogramma con base (B + b) e altezza h:</p>
<p style="text-align:center;font-size:1.15em"><b>A = (B + b) × h : 2</b> &nbsp;&nbsp; <b>h = (2 × A) : (B + b)</b> &nbsp; <b>B + b = (2 × A) : h</b></p>`
    },
    {
      type: "svg",
      title: "Rombo e trapezio raddoppiato",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdfa"/>
<rect x="30" y="40" width="220" height="160" fill="#ccfbf1" stroke="#0f766e" stroke-width="2" stroke-dasharray="8 5"/>
<polygon points="140,40 250,120 140,200 30,120" fill="#14b8a6" stroke="#0f766e" stroke-width="3"/>
<line x1="30" y1="120" x2="250" y2="120" stroke="#fff" stroke-width="3"/>
<line x1="140" y1="40" x2="140" y2="200" stroke="#fff" stroke-width="3"/>
<text x="200" y="113" font-size="16" fill="#fff" font-weight="bold">D</text>
<text x="146" y="70" font-size="16" fill="#fff" font-weight="bold">d</text>
<text x="140" y="230" font-size="16" text-anchor="middle" fill="#134e4a" font-weight="bold">rombo = metà del rettangolo D × d</text>
<polygon points="270,200 310,90 410,90 440,200" fill="#a78bfa" stroke="#5b21b6" stroke-width="3"/>
<polygon points="410,90 580,90 540,200 440,200" fill="#ddd6fe" stroke="#5b21b6" stroke-width="3"/>
<text x="360" y="82" font-size="15" text-anchor="middle" fill="#4c1d95">b</text>
<text x="355" y="220" font-size="15" text-anchor="middle" fill="#4c1d95">B</text>
<text x="495" y="82" font-size="15" text-anchor="middle" fill="#4c1d95">B</text>
<text x="490" y="220" font-size="15" text-anchor="middle" fill="#4c1d95">b</text>
<text x="425" y="250" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">2 trapezi = parallelogramma</text>
<text x="425" y="272" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">di base B + b</text>
</svg>`,
      caption: "Il rombo occupa metà del rettangolo costruito sulle diagonali; due trapezi uguali formano un parallelogramma."
    },
    {
      type: "text",
      title: "Poligoni regolari e poligoni qualsiasi",
      html: `<p>Un <b>poligono regolare</b> (lati e angoli tutti uguali) si può dividere in tanti <b>triangoli uguali</b> con il vertice nel centro. L'altezza di ciascun triangolo è l'<b>apotema</b> (a), il raggio della circonferenza inscritta.</p>
<p style="text-align:center;font-size:1.15em"><b>A = (2p × a) : 2 = p × a</b> &nbsp; (2p = perimetro, p = semiperimetro)</p>
<p>Formule inverse: <b>a = (2 × A) : 2p</b> &nbsp; <b>2p = (2 × A) : a</b>.</p>
<p>In ogni poligono regolare il rapporto apotema/lato è un <b>numero fisso</b> (f): a = l × f.</p>
<table>
<tr><th>Poligono</th><td>Triangolo equilatero</td><td>Quadrato</td><td>Pentagono</td><td>Esagono</td><td>Ottagono</td></tr>
<tr><th>f (a = l·f)</th><td>0,289</td><td>0,5</td><td>0,688</td><td>0,866</td><td>1,207</td></tr>
</table>
<p><b>Poligoni irregolari</b>: si <b>scompongono</b> in figure note (rettangoli, triangoli, trapezi) e si sommano le aree; oppure si calcola l'area di una figura più grande e si <b>sottraggono</b> i pezzi in più.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: piastrellare la cucina",
      html: `<p>Una cucina rettangolare misura <b>4,5 m × 3,2 m</b>. Le piastrelle sono quadrate, di lato <b>40 cm</b>, e una scatola ne contiene 10. Quante scatole servono?</p>
<ol>
<li>Area pavimento: 4,5 × 3,2 = <b>14,4 m²</b>.</li>
<li>Area di una piastrella: 0,4 × 0,4 = <b>0,16 m²</b>.</li>
<li>Numero di piastrelle: 14,4 : 0,16 = <b>90</b>.</li>
<li>Scatole: 90 : 10 = <b>9</b> (in realtà se ne compra una in più per i tagli e gli scarti!).</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio pratico: un terreno irregolare",
      html: `<p>Un orto ha la forma di un <b>trapezio rettangolo</b> con basi 18 m e 12 m e altezza 10 m. Dentro c'è una vasca quadrata di lato 2 m che non va coltivata.</p>
<ol>
<li>Area del trapezio: (18 + 12) × 10 : 2 = <b>150 m²</b>.</li>
<li>Area della vasca: 2² = <b>4 m²</b>.</li>
<li>Area coltivabile: 150 − 4 = <b>146 m²</b>.</li>
</ol>
<p>Se un sacco di concime basta per 25 m², servono 146 : 25 = 5,84 → <b>6 sacchi</b>.</p>
<p><b>Formula inversa</b>: e se sapessimo che l'orto è di 150 m² con basi 18 e 12 m, l'altezza sarebbe h = 2 × 150 : (18 + 12) = 300 : 30 = <b>10 m</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le aree sul Nilo",
      html: `<p>La parola <b>geometria</b> significa «misura della terra». Secondo lo storico greco <b>Erodoto</b> nacque in Egitto: ogni anno le piene del <b>Nilo</b> cancellavano i confini dei campi e gli «stenditori di corde» dovevano rimisurarli per calcolare le tasse. Il <b>papiro di Rhind</b> (circa 1650 a.C.) contiene problemi sull'area di triangoli, trapezi e perfino del cerchio.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La formula di Pick",
      html: `<p>Nel <b>1899</b> il matematico austriaco <b>Georg Pick</b> scoprì una formula sorprendente per i poligoni con i vertici sui punti di una quadrettatura: <b>A = I + B/2 − 1</b>, dove <b>I</b> è il numero di punti <b>interni</b> e <b>B</b> il numero di punti sul <b>bordo</b>. Basta contare i puntini! Prova su un quadrato 2 × 2: I = 1, B = 8 → A = 1 + 4 − 1 = 4 ✓.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le aree",
      intro: "Le formule si possono scoprire tagliando, spostando e ricomponendo. Ecco qualche strada diversa.",
      tabs: [
        {
          label: "✂️ Taglia e ricomponi (Cina)",
          html: `<p>Nell'antica Cina il testo <b>«I nove capitoli sull'arte matematica»</b> (circa II–I secolo a.C.) e il commentatore <b>Liu Hui</b> (III secolo) usavano il <b>principio «dentro-fuori»</b> (<i>chu ru xiang bu</i>): una figura si taglia in pezzi che si spostano per formare un rettangolo. L'area non cambia, perché i pezzi sono gli stessi! È proprio quello che facciamo con parallelogramma, triangolo e trapezio.</p>`
        },
        {
          label: "🧩 Il tangram",
          html: `<p>Il <b>tangram</b> è un rompicapo cinese: un quadrato tagliato in <b>7 pezzi</b> (5 triangoli, 1 quadrato, 1 parallelogramma). Con gli stessi 7 pezzi puoi fare un gatto, una barca, una casa… e tutte queste figure hanno <b>la stessa area</b> del quadrato iniziale: sono <b>equiscomponibili</b>, quindi equiestese.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#ffffff"/>
<polygon points="40,20 260,20 150,130" fill="#ef4444" stroke="#fff" stroke-width="3"/>
<polygon points="40,20 150,130 40,240" fill="#3b82f6" stroke="#fff" stroke-width="3"/>
<polygon points="260,20 260,130 205,75" fill="#facc15" stroke="#fff" stroke-width="3"/>
<polygon points="205,75 260,130 205,185 150,130" fill="#22c55e" stroke="#fff" stroke-width="3"/>
<polygon points="150,130 205,185 95,185" fill="#a855f7" stroke="#fff" stroke-width="3"/>
<polygon points="260,130 260,240 150,240" fill="#f97316" stroke="#fff" stroke-width="3"/>
<polygon points="40,240 95,185 205,185 150,240" fill="#14b8a6" stroke="#fff" stroke-width="3"/>
<text x="300" y="70" font-size="18" fill="#1f2937" font-weight="bold">7 pezzi, 1 quadrato</text>
<text x="300" y="110" font-size="16" fill="#334155">2 triangoli grandi = 1/2</text>
<text x="300" y="138" font-size="16" fill="#334155">1 triangolo medio = 1/8</text>
<text x="300" y="166" font-size="16" fill="#334155">2 triangoli piccoli = 1/8</text>
<text x="300" y="194" font-size="16" fill="#334155">1 quadratino = 1/8</text>
<text x="300" y="222" font-size="16" fill="#334155">1 parallelogramma = 1/8</text>
<text x="300" y="256" font-size="16" fill="#be185d" font-weight="bold">Totale = 1 quadrato intero</text>
</svg>`
        },
        {
          label: "🧊 Cubetti in 3D",
          html: `<p>L'area del rettangolo è il numero di quadretti in file e colonne: qui ne vedi <b>4 × 6 = 24</b> (pensa alla faccia superiore dei cubetti). Cambia i cursori: base e altezza si moltiplicano sempre. E se metti un altro strato di cubetti sopra? Passi dall'<b>area</b> al <b>volume</b>!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 4, b: 6 }
        },
        {
          label: "🔺 Il prisma esagonale",
          html: `<p>Ruota il prisma: la sua base è un <b>esagono regolare</b>. Se lo guardi dall'alto vedi che l'esagono si divide in <b>6 triangoli equilateri</b> uguali, con il vertice nel centro. L'altezza di ognuno è l'<b>apotema</b>: ecco perché A = perimetro × apotema : 2 (6 triangoli × lato × apotema : 2).</p>`,
          scene: "solid",
          options: { shape: "prism", n: 6, r: 1, h: 0.6, color: "#f59e0b", labels: true }
        },
        {
          label: "🃏 Formule a memoria",
          html: `<p>Abbina ogni figura alla sua formula.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Rettangolo", "b × h"],
              ["Quadrato", "l²"],
              ["Triangolo", "b × h : 2"],
              ["Rombo", "D × d : 2"],
              ["Trapezio", "(B + b) × h : 2"],
              ["Poligono regolare", "2p × a : 2"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle aree",
      nodes: [
        { id: "area", label: "Area", x: 50, y: 6, color: "#0f172a", html: "Misura della superficie in unità quadrate.", why: "Misurare un'area significa contare quante unità quadrate ci stanno dentro. Il sistema metrico decimale, con il m², nasce in Francia nel <b>1795</b>; in Italia è obbligatorio dal 1861." },
        { id: "equi", label: "Equiestensione", x: 50, y: 24, color: "#7c3aed", html: "Figure diverse con la stessa area.", why: "Si basa su un'idea che Euclide pone tra le «nozioni comuni»: <i>cose che si sovrappongono sono uguali</i> e <i>il tutto è maggiore della parte</i>. Se si spostano i pezzi senza perderne, l'area resta uguale." },
        { id: "rett", label: "Rettangolo", x: 18, y: 42, color: "#2563eb", html: "A = b × h.", why: "È la figura «base» perché si riempie esattamente con file di quadretti: b quadretti per h file. Tutte le altre formule si ricavano trasformando le figure in rettangoli." },
        { id: "parall", label: "Parallelogramma", x: 42, y: 50, color: "#0891b2", html: "A = b × h.", why: "Tagliando un triangolo da un lato e spostandolo dall'altro diventa un rettangolo con la stessa base e altezza (Euclide, Elementi I, 35: parallelogrammi sulla stessa base e tra le stesse parallele sono equivalenti)." },
        { id: "tri", label: "Triangolo", x: 66, y: 46, color: "#16a34a", html: "A = b × h : 2.", why: "Due triangoli uguali formano un parallelogramma (Euclide I, 41). Per questo compare il «: 2». Ogni poligono si può dividere in triangoli: per questo il triangolo è il «mattone» della geometria." },
        { id: "rombo", label: "Rombo", x: 84, y: 66, color: "#db2777", html: "A = D × d : 2.", why: "Le diagonali sono perpendicolari e dividono il rombo in 4 triangoli rettangoli uguali; il rettangolo costruito sulle diagonali ne contiene 8." },
        { id: "trap", label: "Trapezio", x: 60, y: 76, color: "#ca8a04", html: "A = (B + b) × h : 2.", why: "Due trapezi uguali, uno capovolto, formano un parallelogramma di base B + b. Questa formula era già nota agli <b>Egizi</b> e ai <b>Babilonesi</b> per misurare i campi." },
        { id: "reg", label: "Poligoni regolari", x: 30, y: 76, color: "#ea580c", html: "A = 2p × a : 2; a = l × f.", why: "Si dividono in n triangoli uguali con altezza l'apotema. Il numero fisso f dipende solo dalla forma (dagli angoli), non dalla grandezza: è una conseguenza della <b>similitudine</b>." },
        { id: "inv", label: "Formule inverse", x: 18, y: 94, color: "#64748b", html: "Ricavare un lato o un'altezza dall'area.", why: "Si ottengono «disfacendo» le operazioni nell'ordine opposto: se A = b × h : 2, allora 2A = b × h e h = 2A : b. È lo stesso ragionamento delle equazioni, che studierai in terza media." }
      ],
      edges: [
        ["area", "equi", "si confronta con"],
        ["equi", "rett", "riporta a"],
        ["rett", "parall", "taglia e sposta"],
        ["parall", "tri", "metà"],
        ["tri", "rombo", "4 triangoli"],
        ["parall", "trap", "metà di 2 trapezi"],
        ["tri", "reg", "n triangoli"],
        ["rett", "inv", "si usano al contrario"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: rombo, trapezio, poligoni",
      questions: [
        { type: "num", q: "Un rombo ha le diagonali di 16 cm e 10 cm. Area?", answer: 80, unit: "cm²", explain: "16 × 10 : 2 = 80 cm²." },
        { type: "num", q: "Un trapezio ha basi 9 cm e 5 cm e altezza 4 cm. Area?", answer: 28, unit: "cm²", explain: "(9 + 5) × 4 : 2 = 28 cm²." },
        { type: "num", q: "Un esagono regolare ha perimetro 60 cm e apotema 8,66 cm. Area?", answer: 259.8, tol: 0.1, unit: "cm²", explain: "60 × 8,66 : 2 = 259,8 cm²." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<table>
<tr><th>Figura</th><th>Area</th><th>Formule inverse</th></tr>
<tr><td>Rettangolo / parallelogramma</td><td>b × h</td><td>b = A : h; h = A : b</td></tr>
<tr><td>Quadrato</td><td>l² (oppure d² : 2)</td><td>l = √A</td></tr>
<tr><td>Triangolo</td><td>b × h : 2</td><td>b = 2A : h; h = 2A : b</td></tr>
<tr><td>Rombo</td><td>D × d : 2</td><td>D = 2A : d; d = 2A : D</td></tr>
<tr><td>Trapezio</td><td>(B + b) × h : 2</td><td>h = 2A : (B + b); B + b = 2A : h</td></tr>
<tr><td>Poligono regolare</td><td>2p × a : 2</td><td>a = 2A : 2p; 2p = 2A : a</td></tr>
</table>`
    }
  ],
  glossary: [
    { t: "Superficie", d: "La parte di piano racchiusa da una figura." },
    { t: "Area", d: "La misura di una superficie." },
    { t: "Equiestese", d: "Figure che hanno la stessa area." },
    { t: "Equiscomponibili", d: "Figure formate dagli stessi pezzi disposti diversamente." },
    { t: "Altezza", d: "Segmento perpendicolare alla base condotto dal vertice opposto (o dal lato opposto)." },
    { t: "Apotema", d: "Distanza dal centro di un poligono regolare a un suo lato; raggio della circonferenza inscritta." },
    { t: "Numero fisso", d: "Rapporto costante tra apotema e lato di un poligono regolare." },
    { t: "Formula inversa", d: "Formula che ricava un elemento (base, altezza…) conoscendo l'area." },
    { t: "Ettaro", d: "Unità di superficie agraria pari a 10 000 m²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Un quadrato ha lato 9 cm. Area?", answer: 81, unit: "cm²", explain: "9² = 81 cm²." },
      { type: "num", q: "Un quadrato ha area 144 m². Quanto misura il lato?", answer: 12, unit: "m", explain: "√144 = 12 m." },
      { type: "num", q: "Un parallelogramma ha area 96 cm² e altezza 8 cm. Quanto misura la base?", answer: 12, unit: "cm", explain: "b = 96 : 8 = 12 cm." },
      { type: "num", q: "Un triangolo rettangolo ha i cateti di 6 cm e 8 cm. Area?", answer: 24, unit: "cm²", explain: "6 × 8 : 2 = 24 cm²." },
      { type: "num", q: "Un rombo ha area 60 cm² e una diagonale di 12 cm. Quanto misura l'altra diagonale?", answer: 10, unit: "cm", explain: "d = 2 × 60 : 12 = 10 cm." },
      { type: "num", q: "Un trapezio ha area 50 cm² e altezza 5 cm. Quanto vale la somma delle basi?", answer: 20, unit: "cm", explain: "B + b = 2 × 50 : 5 = 20 cm." },
      { type: "mc", q: "Quante volte un m² è più grande di un dm²?", options: ["10", "100", "1000"], answer: 1, explain: "Le unità di superficie vanno di 100 in 100." },
      { type: "tf", q: "Due figure equiscomponibili hanno sempre la stessa area.", answer: true, explain: "Sono fatte degli stessi pezzi: l'area è la stessa." },
      { type: "tf", q: "Raddoppiando il lato di un quadrato, l'area raddoppia.", answer: false, explain: "L'area diventa 4 volte più grande: (2l)² = 4l²." },
      { type: "mc", q: "Un ettaro equivale a…", options: ["100 m²", "1000 m²", "10 000 m²"], answer: 2, explain: "1 ha = 1 hm² = 10 000 m²." },
      { type: "num", q: "Un quadrato ha lato 10 cm. Calcola l'apotema con il numero fisso 0,5.", answer: 5, unit: "cm", explain: "a = 10 × 0,5 = 5 cm (metà lato)." },
      { type: "order", q: "Ordina le figure dall'area più piccola alla più grande: tutte hanno base 6 e altezza 4 (per il trapezio la base minore è 2).", items: ["Triangolo", "Trapezio", "Rettangolo"], explain: "6×4:2 = 12; (6+2)×4:2 = 16; 6×4 = 24." }
    ],
    gen: [["areaRect", 2], ["areaTri", 2]]
  }
});
