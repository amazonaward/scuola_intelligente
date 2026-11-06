TOPIC('it', {
  id: "p1-mat-forme",
  title: "Le forme intorno a noi",
  intro: "Guardati intorno: la ruota della bici è un <b>cerchio</b> 🚲, la finestra è un <b>quadrato</b> o un <b>rettangolo</b> 🪟, la fetta di pizza è un <b>triangolo</b> 🍕. Le forme sono dappertutto! Impariamo a riconoscerle e a dare loro un nome.",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Le quattro forme più famose",
      html: `<p>Oggi conosciamo <b>quattro forme</b>. Si chiamano <b>figure piane</b> perché sono piatte, come un disegno sul foglio.</p>
<ul>
<li>⚪ Il <b>cerchio</b> è rotondo. Non ha punte e non ha lati dritti.</li>
<li>🔺 Il <b>triangolo</b> ha <b>3 lati</b> dritti e <b>3 punte</b>.</li>
<li>🟥 Il <b>quadrato</b> ha <b>4 lati</b> tutti <b>uguali</b> e <b>4 punte</b>.</li>
<li>▬ Il <b>rettangolo</b> ha <b>4 lati</b>: 2 lunghi e 2 corti. Ha <b>4 punte</b>.</li>
</ul>
<p>I bordi dritti si chiamano <b>lati</b>. Le punte si chiamano <b>vertici</b>.</p>`
    },
    {
      type: "svg",
      title: "Ecco le forme",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<circle cx="80" cy="120" r="60" fill="#facc15" stroke="#a16207" stroke-width="4"/>
<polygon points="230,60 290,180 170,180" fill="#f87171" stroke="#991b1b" stroke-width="4"/>
<rect x="330" y="60" width="120" height="120" fill="#60a5fa" stroke="#1e3a8a" stroke-width="4"/>
<rect x="470" y="85" width="120" height="70" fill="#4ade80" stroke="#166534" stroke-width="4"/>
<circle cx="230" cy="60" r="7" fill="#111827"/>
<circle cx="290" cy="180" r="7" fill="#111827"/>
<circle cx="170" cy="180" r="7" fill="#111827"/>
<text x="80" y="220" font-size="20" text-anchor="middle" font-weight="bold" fill="#a16207">CERCHIO</text>
<text x="80" y="245" font-size="15" text-anchor="middle" fill="#374151">nessun lato</text>
<text x="230" y="220" font-size="20" text-anchor="middle" font-weight="bold" fill="#991b1b">TRIANGOLO</text>
<text x="230" y="245" font-size="15" text-anchor="middle" fill="#374151">3 lati, 3 vertici</text>
<text x="390" y="220" font-size="20" text-anchor="middle" font-weight="bold" fill="#1e3a8a">QUADRATO</text>
<text x="390" y="245" font-size="15" text-anchor="middle" fill="#374151">4 lati uguali</text>
<text x="530" y="220" font-size="20" text-anchor="middle" font-weight="bold" fill="#166534">RETTANGOLO</text>
<text x="530" y="245" font-size="15" text-anchor="middle" fill="#374151">2 lunghi, 2 corti</text>
<text x="300" y="285" font-size="15" text-anchor="middle" fill="#111827">I pallini neri sul triangolo sono i suoi 3 vertici</text>
</svg>`,
      caption: "Conta i lati e le punte (vertici) di ogni forma."
    },
    {
      type: "text",
      title: "Come riconosco una forma? Passo per passo",
      html: `<ol>
<li>👀 <b>Guardo il bordo</b>: è tutto tondo? Allora è un <b>cerchio</b>.</li>
<li>☝️ Se ha bordi dritti, <b>conto i lati</b> con il dito.</li>
<li>3 lati? È un <b>triangolo</b>.</li>
<li>4 lati? Guardo se sono <b>tutti uguali</b>: sì → <b>quadrato</b>; no, 2 lunghi e 2 corti → <b>rettangolo</b>.</li>
</ol>
<p>Attenzione: se giri un quadrato, resta sempre un quadrato! Anche se sembra un "rombo" 🔷, ha ancora 4 lati uguali.</p>`
    },
    {
      type: "example",
      title: "Esempio: caccia alle forme in cucina 🍽️",
      html: `<ul>
<li>🍪 Il biscotto rotondo e il piatto → <b>cerchio</b></li>
<li>🧀 Il toast tagliato in diagonale e la fetta di pizza → <b>triangolo</b></li>
<li>🧇 La piastrella e la fetta di formaggio da toast → <b>quadrato</b></li>
<li>🍫 La tavoletta di cioccolato e la porta del frigo → <b>rettangolo</b></li>
</ul>
<p>Prova anche tu: quante forme trovi a casa tua?</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: riconosci le forme",
      questions: [
        { type: "mc", q: "Quanti lati ha il triangolo? 🔺", options: ["2", "3", "4"], answer: 1, explain: "Il triangolo ha 3 lati e 3 vertici: «tri» vuol dire tre." },
        { type: "mc", q: "Quale forma ha la ruota della bicicletta? 🚲", options: ["Quadrato", "Cerchio", "Triangolo"], answer: 1, explain: "La ruota è rotonda: è un cerchio. Se fosse quadrata non potrebbe rotolare!" },
        { type: "tf", q: "Il quadrato ha 4 lati tutti uguali.", answer: true, explain: "Sì: è proprio questo che lo distingue dal rettangolo." }
      ]
    },
    {
      type: "widget",
      title: "Metti ogni oggetto nella forma giusta",
      widget: "classify",
      options: {
        groups: ["⚪ Cerchio", "🔺 Triangolo", "🟥 Quadrato", "▬ Rettangolo"],
        items: [
          ["🪙 moneta", 0],
          ["🕐 orologio da muro", 0],
          ["🍕 fetta di pizza", 1],
          ["⚠️ cartello di pericolo", 1],
          ["🎲 faccia del dado", 2],
          ["🧇 piastrella", 2],
          ["🚪 porta", 3],
          ["📱 telefono", 3],
          ["🍪 biscotto tondo", 0],
          ["📖 libro", 3]
        ]
      },
      caption: "Trascina o tocca ogni oggetto e scegli la forma che gli assomiglia di più."
    },
    {
      type: "widget",
      title: "La casetta delle forme",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#e0f2fe"/>
<circle cx="520" cy="60" r="38" fill="#fde047" stroke="#ca8a04" stroke-width="4"/>
<polygon points="300,30 470,130 130,130" fill="#ef4444" stroke="#7f1d1d" stroke-width="4"/>
<rect x="150" y="130" width="300" height="160" fill="#fef3c7" stroke="#92400e" stroke-width="4"/>
<rect x="190" y="160" width="70" height="70" fill="#93c5fd" stroke="#1e3a8a" stroke-width="4"/>
<rect x="330" y="190" width="70" height="100" fill="#a16207" stroke="#451a03" stroke-width="4"/>
<rect x="0" y="290" width="600" height="30" fill="#22c55e"/>
</svg>`,
        spots: [
          { x: 520, y: 60, label: "Cerchio (sole)" },
          { x: 300, y: 95, label: "Triangolo (tetto)" },
          { x: 225, y: 195, label: "Quadrato (finestra)" },
          { x: 365, y: 240, label: "Rettangolo (porta)" }
        ]
      },
      caption: "Tocca ogni punto e scegli il nome della forma."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🐝",
      html: `<p>Le <b>api</b> costruiscono le celle del favo con <b>6 lati</b>: è una forma che si chiama <b>esagono</b>. Gli esagoni stanno vicini vicini senza lasciare buchi e usano pochissima cera!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🛑",
      html: `<p>Il cartello di <b>STOP</b> ha <b>8 lati</b> (è un <b>ottagono</b>). È l'unico cartello con questa forma: così un autista lo riconosce anche da dietro o quando è coperto di neve!</p>
<p>E i cartelli di <b>pericolo</b> sono <b>triangoli</b>, quelli di <b>divieto</b> sono <b>cerchi</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio: disegna un robot con le forme 🤖",
      html: `<ol>
<li>La <b>testa</b>: un quadrato.</li>
<li>Gli <b>occhi</b>: due cerchi.</li>
<li>Il <b>corpo</b>: un rettangolo grande.</li>
<li>Le <b>braccia</b> e le <b>gambe</b>: 4 rettangoli sottili.</li>
<li>Il <b>cappello</b>: un triangolo!</li>
</ol>
<p>Con 4 forme sole puoi disegnare quasi tutto: case, treni, gatti, razzi 🚀.</p>`
    },
    {
      type: "3d",
      title: "Le forme diventano solide 🧊",
      scene: "solid",
      options: { shape: "cube", color: "#60a5fa", labels: false, shapes: ["cube", "pyramid", "cylinder", "sphere", "box"] },
      caption: "Il cerchio, il quadrato e il triangolo sono piatti. Ma se li «gonfi» diventano solidi: il cubo ha 6 facce quadrate, il cilindro ha 2 cerchi, la piramide ha triangoli. Premi i pulsanti e girali!"
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>⚪ <b>Cerchio</b>: tondo, nessun lato.</li>
<li>🔺 <b>Triangolo</b>: 3 lati, 3 vertici.</li>
<li>🟥 <b>Quadrato</b>: 4 lati uguali, 4 vertici.</li>
<li>▬ <b>Rettangolo</b>: 4 lati (2 lunghi e 2 corti), 4 vertici.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le forme 🌈",
      intro: "<p>Se non ti è ancora chiaro, prova uno di questi modi.</p>",
      tabs: [
        {
          label: "🇨🇳 Il tangram cinese",
          html: `<p>In <b>Cina</b> i bambini giocano da secoli con il <b>tangram</b>: un quadrato tagliato in <b>7 pezzi</b> (5 triangoli, 1 quadrato e 1 parallelogramma). Con gli stessi pezzi si possono fare gatti, case, barche…</p>
<p>Ritaglia un quadrato di cartone come nel disegno e prova!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<polygon points="30,30 270,30 150,150" fill="#ef4444" stroke="#111827" stroke-width="3"/>
<polygon points="30,30 150,150 30,270" fill="#f59e0b" stroke="#111827" stroke-width="3"/>
<polygon points="270,150 270,270 150,270" fill="#3b82f6" stroke="#111827" stroke-width="3"/>
<polygon points="150,150 210,90 210,210" fill="#22c55e" stroke="#111827" stroke-width="3"/>
<polygon points="30,270 90,210 150,270" fill="#ec4899" stroke="#111827" stroke-width="3"/>
<polygon points="150,150 210,210 150,270 90,210" fill="#a855f7" stroke="#111827" stroke-width="3"/>
<polygon points="210,90 270,30 270,150 210,210" fill="#14b8a6" stroke="#111827" stroke-width="3"/>
<text x="430" y="120" font-size="22" text-anchor="middle" font-weight="bold" fill="#7c2d12">Tangram</text>
<text x="430" y="155" font-size="17" text-anchor="middle" fill="#374151">un quadrato in 7 pezzi</text>
<text x="430" y="185" font-size="17" text-anchor="middle" fill="#374151">5 triangoli, 1 quadrato</text>
<text x="430" y="212" font-size="17" text-anchor="middle" fill="#374151">e 1 parallelogramma</text>
</svg>`
        },
        {
          label: "🖐️ Con il corpo",
          html: `<p>Prova a fare le forme con le mani e con il corpo:</p>
<ul>
<li>⚪ Unisci pollici e indici curvi: è un <b>cerchio</b>.</li>
<li>🔺 Unisci pollici e indici dritti: è un <b>triangolo</b>!</li>
<li>🟥 In 4 bambini, sdraiati per terra: siete i 4 lati di un <b>quadrato</b>.</li>
<li>▬ Due bambini alti e due piccoli? Fate un <b>rettangolo</b>: i lati lunghi e quelli corti.</li>
</ul>
<p>Puoi anche camminare sul bordo di un tappeto e contare quante volte giri: ogni giro è un <b>vertice</b>.</p>`
        },
        {
          label: "🧊 Gira i solidi in 3D",
          html: `<p>Le forme piatte sono le <b>facce</b> dei solidi. Gira la piramide: vedi i <b>triangoli</b> sui lati e il <b>quadrato</b> sotto?</p>`,
          scene: "solid",
          options: { shape: "pyramid", n: 4, r: 1.2, h: 1.3, color: "#f87171", labels: true, shapes: ["pyramid", "cube", "cylinder"] }
        },
        {
          label: "🔢 Conta con le dita",
          html: `<p>Un trucco per non confondersi: <b>il nome dice il numero</b>!</p>
<ul>
<li><b>TRI</b>-angolo → <b>3</b> angoli (come <b>tri</b>ciclo, 3 ruote 🚲).</li>
<li><b>QUADR</b>-ato → <b>4</b> lati (come le 4 zampe di un tavolo).</li>
</ul>
<p>Appoggia il dito su una punta e conta ogni volta che "giri l'angolo".</p>`,
          widget: "counter",
          options: { emoji: "📐", max: 8 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa delle forme 🗺️",
      nodes: [
        { id: "punto", label: "Il punto", x: 50, y: 6, color: "#111827", html: "<p>Il <b>punto</b> è il segno più piccolo che puoi fare con la matita.</p>", why: "<p>Più di 2000 anni fa il matematico greco <b>Euclide</b> scrisse un libro famosissimo, gli <i>Elementi</i>, che comincia proprio dal punto: «ciò che non ha parti».</p>" },
        { id: "linea", label: "La linea", x: 50, y: 24, color: "#6b7280", html: "<p>Se muovi la matita, il punto lascia una <b>linea</b>: può essere <b>dritta</b> o <b>curva</b>.</p>", why: "<p>Una linea è come la strada fatta da un punto che cammina. Le linee dritte le facciamo bene con il righello.</p>" },
        { id: "chiusa", label: "Linea chiusa", x: 50, y: 42, color: "#8b5cf6", html: "<p>Se la linea torna al punto di partenza, è <b>chiusa</b>: dentro c'è una forma!</p>", why: "<p>Una linea chiusa divide il foglio in due parti: <b>dentro</b> e <b>fuori</b>. Il dentro è la figura.</p>" },
        { id: "cerchio", label: "Cerchio", x: 12, y: 66, color: "#eab308", html: "<p>Linea chiusa <b>tutta curva</b>: ogni punto del bordo è alla stessa distanza dal centro.</p>", why: "<p>Si disegna con il <b>compasso</b> o con uno spago legato a una matita. Per questo le ruote, che sono cerchi, girano senza saltare: il centro resta sempre alla stessa altezza.</p>" },
        { id: "lati", label: "Lati e vertici", x: 62, y: 62, color: "#0ea5e9", html: "<p>Se la linea chiusa è fatta di pezzi <b>dritti</b>, i pezzi sono i <b>lati</b> e le punte i <b>vertici</b>.</p>", why: "<p>Queste forme si chiamano <b>poligoni</b>, dal greco «tanti angoli». Lati e vertici sono sempre lo stesso numero!</p>" },
        { id: "triangolo", label: "Triangolo", x: 35, y: 90, color: "#ef4444", html: "<p>3 lati e 3 vertici.</p>", why: "<p>È il poligono con meno lati possibile: con 2 bastoncini non chiudi niente! È anche la forma più <b>rigida</b>: per questo si usa nei ponti e nelle gru.</p>" },
        { id: "quadrato", label: "Quadrato", x: 62, y: 90, color: "#3b82f6", html: "<p>4 lati uguali e 4 angoli uguali (angoli retti, «a L»).</p>", why: "<p>È un rettangolo speciale: un rettangolo con tutti i lati della stessa lunghezza.</p>" },
        { id: "rettangolo", label: "Rettangolo", x: 88, y: 80, color: "#22c55e", html: "<p>4 lati, a due a due uguali, e 4 angoli retti.</p>", why: "<p>Porte, libri, schermi sono rettangoli perché gli angoli retti si incastrano bene: i mattoni e le piastrelle stanno vicini senza buchi.</p>" },
        { id: "solidi", label: "Solidi", x: 88, y: 30, color: "#f97316", html: "<p>Il cubo, la piramide, il cilindro: forme «piene» che puoi prendere in mano.</p>", why: "<p>Le facce dei solidi sono figure piane: il cubo ha 6 quadrati, il cilindro 2 cerchi.</p>" }
      ],
      edges: [
        ["punto", "linea", "si muove"],
        ["linea", "chiusa", "si chiude"],
        ["chiusa", "cerchio", "tutta curva"],
        ["chiusa", "lati", "pezzi dritti"],
        ["lati", "triangolo", "3"],
        ["lati", "quadrato", "4 uguali"],
        ["lati", "rettangolo", "4 a coppie"],
        ["rettangolo", "quadrato", "caso speciale"],
        ["lati", "solidi", "facce dei"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: lati e vertici",
      questions: [
        { type: "num", q: "Quanti vertici (punte) ha un quadrato?", answer: 4, explain: "Il quadrato ha 4 lati e 4 vertici." },
        { type: "mc", q: "Una forma ha 4 lati: 2 lunghi e 2 corti. Che cos'è?", options: ["Un quadrato", "Un rettangolo", "Un cerchio"], answer: 1, explain: "Se i lati non sono tutti uguali ma lunghi e corti, è un rettangolo." },
        { type: "tf", q: "Il cerchio ha 1 lato dritto.", answer: false, explain: "Il cerchio è tutto curvo: non ha lati dritti e non ha vertici." }
      ]
    }
  ],
  glossary: [
    { t: "Figura piana", d: "Una forma piatta, che si può disegnare sul foglio." },
    { t: "Lato", d: "Ogni bordo dritto di una figura." },
    { t: "Vertice", d: "La punta dove si incontrano due lati." },
    { t: "Cerchio", d: "Figura tutta rotonda, senza lati e senza vertici." },
    { t: "Triangolo", d: "Figura con 3 lati e 3 vertici." },
    { t: "Quadrato", d: "Figura con 4 lati tutti uguali." },
    { t: "Rettangolo", d: "Figura con 4 lati: 2 lunghi e 2 corti." },
    { t: "Solido", d: "Una forma «piena», come un cubo o una palla." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanti lati ha un triangolo?", answer: 3, explain: "Il triangolo ha 3 lati." },
      { type: "num", q: "Quanti lati ha un rettangolo?", answer: 4, explain: "Il rettangolo ha 4 lati: 2 lunghi e 2 corti." },
      { type: "mc", q: "Quale forma non ha vertici?", options: ["Quadrato", "Cerchio", "Triangolo"], answer: 1, explain: "Il cerchio è tutto curvo: non ha punte." },
      { type: "mc", q: "La faccia di un dado 🎲 è…", options: ["un quadrato", "un triangolo", "un cerchio"], answer: 0, explain: "Il dado è un cubo: ogni faccia è un quadrato." },
      { type: "mc", q: "Una porta 🚪 ha la forma di…", options: ["cerchio", "rettangolo", "triangolo"], answer: 1, explain: "La porta è più alta che larga: è un rettangolo." },
      { type: "tf", q: "Se giro un quadrato, diventa un triangolo.", answer: false, explain: "Girando una forma non cambia il numero dei lati: resta un quadrato." },
      { type: "tf", q: "Il cartello di pericolo ⚠️ è un triangolo.", answer: true, explain: "Sì, i cartelli di pericolo sono triangoli." },
      { type: "text", q: "Come si chiama la forma rotonda, come una moneta?", answer: ["cerchio", "il cerchio"], explain: "È il cerchio." },
      { type: "text", q: "Come si chiamano le punte di una figura?", answer: ["vertici", "i vertici", "vertice"], explain: "Le punte si chiamano vertici." },
      { type: "order", q: "Metti in ordine dalla forma con meno lati a quella con più lati.", items: ["Cerchio (0 lati dritti)", "Triangolo (3 lati)", "Quadrato (4 lati)", "Stop (8 lati)"], explain: "0, 3, 4, 8: il cerchio non ha lati dritti, lo stop è un ottagono." },
      { type: "mc", q: "Quale forma è più rigida e si usa nei ponti?", options: ["Il cerchio", "Il triangolo", "Il rettangolo"], answer: 1, explain: "Il triangolo non si deforma se lo spingi: per questo si usa nelle costruzioni." }
    ]
  }
});
