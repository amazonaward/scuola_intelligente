TOPIC('it', {
  id: "p5-mat-solidi-intro",
  title: "I solidi",
  intro: "Un dado, una lattina, un cono gelato, un pallone: sono tutti <b>solidi</b>, figure che non stanno piatte su un foglio ma occupano spazio. Impariamo a distinguere i <b>poliedri</b> dai <b>solidi di rotazione</b>, a contare <b>facce, spigoli e vertici</b> e a “aprire” un solido nel suo <b>sviluppo</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Dal piano allo spazio",
      html: `<p>Le figure che hai studiato finora (quadrato, triangolo, cerchio…) sono <b>figure piane</b>: hanno solo <b>due dimensioni</b>, lunghezza e larghezza. Stanno tutte su un foglio.</p>
<p>I <b>solidi</b> hanno <b>tre dimensioni</b>: lunghezza, larghezza e <b>altezza</b> (o profondità). Occupano uno spazio: puoi prenderli in mano, girarli, riempirli.</p>
<p>I solidi geometrici si dividono in due grandi famiglie:</p>
<ul>
<li><b>Poliedri</b>: hanno solo <b>facce piatte</b>, a forma di poligono (es. cubo, piramide). Se li appoggi non rotolano mai.</li>
<li><b>Solidi di rotazione</b> (o "rotondi"): hanno almeno una <b>superficie curva</b> (es. cilindro, cono, sfera). Possono rotolare!</li>
</ul>`
    },
    {
      type: "3d",
      title: "Gira i solidi in 3D",
      scene: "solid",
      options: { shape: "cube", shapes: ["cube", "box", "prism", "pyramid", "cylinder", "cone", "sphere"], labels: true, color: "#60a5fa" },
      caption: "Usa i pulsanti per cambiare solido e ruotalo con il dito o con il mouse. Quali hanno solo facce piatte? Quali hanno superfici curve?"
    },
    {
      type: "text",
      title: "Facce, spigoli e vertici",
      html: `<p>Ogni poliedro ha tre "ingredienti":</p>
<ul>
<li>le <b>facce</b>: i poligoni che lo racchiudono (nel dado sono i 6 quadrati con i puntini);</li>
<li>gli <b>spigoli</b>: i segmenti dove due facce si incontrano (se passi il dito sopra, senti il "bordo");</li>
<li>i <b>vertici</b>: i punti dove si incontrano più spigoli (le "punte").</li>
</ul>
<table>
<tr><th>Poliedro</th><th>Facce</th><th>Spigoli</th><th>Vertici</th></tr>
<tr><td>Cubo</td><td>6</td><td>12</td><td>8</td></tr>
<tr><td>Parallelepipedo</td><td>6</td><td>12</td><td>8</td></tr>
<tr><td>Prisma a base triangolare</td><td>5</td><td>9</td><td>6</td></tr>
<tr><td>Piramide a base quadrata</td><td>5</td><td>8</td><td>5</td></tr>
<tr><td>Piramide a base triangolare (tetraedro)</td><td>4</td><td>6</td><td>4</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Riconosci le parti del cubo",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<polygon points="200,110 380,110 380,290 200,290" fill="#93c5fd" stroke="#1e3a8a" stroke-width="4"/>
<polygon points="200,110 280,40 460,40 380,110" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="4"/>
<polygon points="380,110 460,40 460,220 380,290" fill="#60a5fa" stroke="#1e3a8a" stroke-width="4"/>
<line x1="200" y1="290" x2="280" y2="220" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="8 6"/>
<line x1="280" y1="220" x2="460" y2="220" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="8 6"/>
<line x1="280" y1="220" x2="280" y2="40" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="8 6"/>
<circle cx="460" cy="40" r="8" fill="#dc2626"/>
<line x1="380" y1="110" x2="380" y2="290" stroke="#f97316" stroke-width="8"/>
</svg>`,
        spots: [
          { x: 290, y: 200, label: "Faccia" },
          { x: 380, y: 200, label: "Spigolo" },
          { x: 460, y: 40, label: "Vertice" },
          { x: 370, y: 75, label: "Faccia superiore" },
          { x: 280, y: 130, label: "Spigolo nascosto" }
        ]
      },
      caption: "Tocca ogni punto e scegli il nome giusto. Le linee tratteggiate sono gli spigoli che non si vedono da questa posizione."
    },
    {
      type: "quiz",
      title: "Mini-quiz: poliedri e solidi rotondi",
      questions: [
        { type: "mc", q: "Quale di questi è un poliedro?", options: ["Il pallone", "Il dado", "La lattina"], answer: 1, explain: "Il dado (cubo) ha solo facce piatte: è un poliedro." },
        { type: "num", q: "Quanti spigoli ha un cubo?", answer: 12, explain: "4 sopra, 4 sotto e 4 in verticale: 12." },
        { type: "tf", q: "Il cono è un solido di rotazione.", answer: true, explain: "Ha una superficie curva e si ottiene facendo girare un triangolo rettangolo." }
      ]
    },
    {
      type: "text",
      title: "Prismi e piramidi",
      html: `<p>Due famiglie di poliedri molto importanti:</p>
<ul>
<li><b>Prisma</b>: ha <b>due basi uguali e parallele</b> (una sopra e una sotto) e facce laterali che sono <b>rettangoli</b>. Prende il nome dalla forma della base: prisma triangolare, quadrangolare, pentagonale, esagonale… Il <b>cubo</b> e il <b>parallelepipedo</b> sono prismi particolari.</li>
<li><b>Piramide</b>: ha <b>una sola base</b> e facce laterali che sono <b>triangoli</b> che si incontrano in un punto in alto, il <b>vertice</b> (o apice). Anche lei prende il nome dalla base: piramide triangolare, quadrangolare…</li>
</ul>
<p>Trucco: se un prisma ha la base con <b>n</b> lati, ha <b>n + 2</b> facce. Una piramide con la base di <b>n</b> lati ha <b>n + 1</b> facce.</p>`
    },
    {
      type: "text",
      title: "I solidi di rotazione",
      html: `<p>Perché si chiamano "di rotazione"? Perché si possono ottenere facendo <b>girare una figura piana</b> attorno a una linea (l'<b>asse</b>):</p>
<ul>
<li>un <b>rettangolo</b> che gira attorno a un lato forma un <b>cilindro</b> 🥫;</li>
<li>un <b>triangolo rettangolo</b> che gira attorno a un cateto forma un <b>cono</b> 🍦;</li>
<li>un <b>semicerchio</b> che gira attorno al diametro forma una <b>sfera</b> ⚽.</li>
</ul>
<p>Il cilindro ha 2 basi a forma di cerchio, il cono ne ha 1, la sfera nessuna: è tutta curva!</p>`
    },
    {
      type: "svg",
      title: "Figure che girano e diventano solidi",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<line x1="100" y1="30" x2="100" y2="230" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<rect x="100" y="60" width="60" height="140" fill="#fb923c" stroke="#9a3412" stroke-width="3"/>
<ellipse cx="100" cy="60" rx="60" ry="14" fill="none" stroke="#9a3412" stroke-width="2" stroke-dasharray="5 4"/>
<ellipse cx="100" cy="200" rx="60" ry="14" fill="none" stroke="#9a3412" stroke-width="2" stroke-dasharray="5 4"/>
<path d="M150 30 A40 12 0 1 1 50 30" fill="none" stroke="#dc2626" stroke-width="3"/>
<polygon points="50,24 44,34 58,34" fill="#dc2626"/>
<text x="100" y="265" font-size="20" text-anchor="middle" font-weight="bold">rettangolo → cilindro</text>
<line x1="300" y1="30" x2="300" y2="230" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<polygon points="300,60 300,200 360,200" fill="#a3e635" stroke="#3f6212" stroke-width="3"/>
<ellipse cx="300" cy="200" rx="60" ry="14" fill="none" stroke="#3f6212" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="300" y1="60" x2="240" y2="200" stroke="#3f6212" stroke-width="2" stroke-dasharray="5 4"/>
<text x="300" y="265" font-size="20" text-anchor="middle" font-weight="bold">triangolo → cono</text>
<line x1="500" y1="30" x2="500" y2="230" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<path d="M500 60 A70 70 0 0 1 500 200 Z" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<path d="M500 60 A70 70 0 0 0 500 200" fill="none" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="5 4"/>
<text x="500" y="265" font-size="20" text-anchor="middle" font-weight="bold">semicerchio → sfera</text>
<text x="300" y="292" font-size="16" text-anchor="middle" fill="#dc2626">la linea rossa tratteggiata è l'asse di rotazione</text>
</svg>`,
      caption: "La parte colorata gira attorno all'asse rosso: il contorno tratteggiato mostra il solido che si forma."
    },
    {
      type: "text",
      title: "Lo sviluppo: aprire un solido",
      html: `<p>Se prendi una scatola di cartone e la "scuci" lungo alcuni spigoli, puoi stenderla piatta sul tavolo. La figura piana che ottieni si chiama <b>sviluppo</b> del solido.</p>
<ul>
<li>lo sviluppo del <b>cubo</b> è fatto di <b>6 quadrati</b> uguali (ci sono 11 modi diversi di disegnarlo!);</li>
<li>lo sviluppo del <b>parallelepipedo</b> è fatto di <b>6 rettangoli</b>, uguali a due a due;</li>
<li>lo sviluppo del <b>cilindro</b> è un <b>rettangolo</b> e <b>2 cerchi</b>: il rettangolo è l'etichetta della lattina!</li>
<li>lo sviluppo del <b>cono</b> è un <b>settore circolare</b> (un "ventaglio") e un cerchio.</li>
</ul>
<p>La sfera, invece, <b>non ha uno sviluppo</b> esatto: non si può stendere piatta senza strapparla o deformarla. Per questo le carte geografiche del mondo sono sempre un po' "sbagliate"!</p>`
    },
    {
      type: "svg",
      title: "Lo sviluppo del cubo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<g stroke="#166534" stroke-width="3">
<rect x="110" y="20" width="65" height="65" fill="#86efac"/>
<rect x="45" y="85" width="65" height="65" fill="#4ade80"/>
<rect x="110" y="85" width="65" height="65" fill="#22c55e"/>
<rect x="175" y="85" width="65" height="65" fill="#4ade80"/>
<rect x="240" y="85" width="65" height="65" fill="#86efac"/>
<rect x="110" y="150" width="65" height="65" fill="#bbf7d0"/>
</g>
<text x="142" y="60" font-size="18" text-anchor="middle">sopra</text>
<text x="142" y="124" font-size="18" text-anchor="middle">davanti</text>
<text x="142" y="190" font-size="18" text-anchor="middle">sotto</text>
<text x="272" y="124" font-size="18" text-anchor="middle">dietro</text>
<text x="370" y="110" font-size="40" fill="#166534">→</text>
<polygon points="440,130 520,130 520,210 440,210" fill="#22c55e" stroke="#166534" stroke-width="3"/>
<polygon points="440,130 480,95 560,95 520,130" fill="#86efac" stroke="#166534" stroke-width="3"/>
<polygon points="520,130 560,95 560,175 520,210" fill="#4ade80" stroke="#166534" stroke-width="3"/>
<text x="300" y="270" font-size="20" text-anchor="middle" fill="#14532d">Piega lungo gli spigoli: 6 quadrati diventano un cubo</text>
</svg>`,
      caption: "Uno degli 11 sviluppi possibili del cubo. Prova a disegnarlo, ritagliarlo e chiuderlo con lo scotch!"
    },
    {
      type: "example",
      title: "Esempio pratico: la caccia ai solidi in cucina",
      html: `<p>Apri la dispensa e guarda bene:</p>
<ul>
<li>la scatola dei cereali è un <b>parallelepipedo</b> (6 facce rettangolari);</li>
<li>la lattina dei pelati è un <b>cilindro</b>;</li>
<li>il cono gelato è un <b>cono</b>;</li>
<li>l'arancia è (quasi) una <b>sfera</b>;</li>
<li>la confezione del Toblerone è un <b>prisma a base triangolare</b>;</li>
<li>la bustina del tè a forma di piramide è un <b>tetraedro</b>.</li>
</ul>
<p>Perché le lattine sono cilindri e non cubi? Perché i cilindri resistono meglio alla pressione, si impilano bene e si possono fare rotolare sui nastri della fabbrica!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: quanti cubetti?",
      html: `<p>Il <b>volume</b> di un solido è lo <b>spazio</b> che occupa. Si può misurare contando quanti cubetti uguali ci stanno dentro.</p>
<p>Una scatola è lunga <b>4</b> cubetti, larga <b>3</b> e alta <b>2</b>:</p>
<ul>
<li>uno strato contiene 4 × 3 = <b>12</b> cubetti;</li>
<li>ci sono 2 strati: 12 × 2 = <b>24 cubetti</b>.</li>
</ul>
<p>Se ogni cubetto ha lo spigolo di 1 cm, il volume è <b>24 cm³</b> (centimetri cubi). Prova qui sotto con i cursori!</p>`
    },
    {
      type: "3d",
      title: "Riempi la scatola di cubetti",
      scene: "blocks",
      options: { mode: "volume", a: 4, b: 3, c: 2 },
      caption: "Volume = lunghezza × larghezza × altezza. Cambia le tre misure e conta i cubetti."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? I 5 solidi perfetti",
      html: `<p>Esistono solo <b>5 poliedri regolari</b>, con tutte le facce uguali e regolari: il <b>tetraedro</b> (4 triangoli), il <b>cubo</b> (6 quadrati), l'<b>ottaedro</b> (8 triangoli), il <b>dodecaedro</b> (12 pentagoni) e l'<b>icosaedro</b> (20 triangoli).</p>
<p>Si chiamano anche <b>solidi platonici</b>, dal filosofo greco <b>Platone</b>, che li associava agli elementi: fuoco, terra, aria, universo e acqua. Li trovi nei <b>dadi</b> dei giochi di ruolo: d4, d6, d8, d12, d20!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le api e gli esagoni",
      html: `<p>Le celle dei favi delle api sono <b>prismi a base esagonale</b>. Con questa forma le api riescono a costruire più celle usando meno cera possibile, senza lasciare spazi vuoti. Già il matematico greco Pappo di Alessandria, circa 1700 anni fa, si chiedeva come facessero le api a essere così "brave in geometria"!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>I <b>solidi</b> hanno 3 dimensioni.</li>
<li><b>Poliedri</b>: solo facce piatte (cubo, parallelepipedo, prisma, piramide).</li>
<li><b>Solidi di rotazione</b>: superfici curve (cilindro, cono, sfera).</li>
<li>Nei poliedri contiamo <b>facce</b>, <b>spigoli</b> e <b>vertici</b>.</li>
<li>Lo <b>sviluppo</b> è il solido "aperto" e steso sul piano.</li>
<li>Il <b>volume</b> è lo spazio occupato: si misura in cubetti (cm³).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Poliedro o solido di rotazione?",
      widget: "classify",
      options: {
        groups: ["Poliedri", "Solidi di rotazione"],
        items: [
          ["🎲 dado", 0],
          ["⚽ pallone", 1],
          ["🥫 lattina", 1],
          ["📦 scatola delle scarpe", 0],
          ["🍦 cono gelato", 1],
          ["🔺 piramide di Cheope", 0],
          ["🧱 mattone", 0],
          ["🕯️ candela cilindrica", 1],
          ["🍫 confezione del Toblerone", 0],
          ["🌍 mappamondo", 1]
        ]
      },
      caption: "Trascina o tocca ogni oggetto e mettilo nel gruppo giusto."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i solidi",
      intro: "I solidi si capiscono meglio con le mani che con gli occhi: prova a costruirli, a toccarli o a scoprire una formula segreta.",
      tabs: [
        {
          label: "🍡 Stuzzicadenti e plastilina",
          html: `<p>Costruisci i poliedri con <b>stuzzicadenti</b> (gli spigoli) e <b>palline di plastilina</b> (i vertici):</p>
<ul>
<li>per un cubo ti servono <b>12 stuzzicadenti</b> e <b>8 palline</b>;</li>
<li>per una piramide a base quadrata <b>8 stuzzicadenti</b> e <b>5 palline</b>;</li>
<li>per un tetraedro <b>6 stuzzicadenti</b> e <b>4 palline</b>.</li>
</ul>
<p>Poi conta le "finestre" vuote: sono le <b>facce</b>! Così non sbagli più a contare spigoli e vertici.</p>`
        },
        {
          label: "✨ La formula di Eulero",
          html: `<p>Il grande matematico svizzero <b>Leonhard Euler</b> (Eulero) scoprì nel 1750 una regola magica che vale per tutti i poliedri "normali" (senza buchi):</p>
<p style="font-size:1.3em;text-align:center"><b>Facce + Vertici − Spigoli = 2</b></p>
<ul>
<li>Cubo: 6 + 8 − 12 = <b>2</b> ✔</li>
<li>Piramide quadrata: 5 + 5 − 8 = <b>2</b> ✔</li>
<li>Prisma triangolare: 5 + 6 − 9 = <b>2</b> ✔</li>
</ul>
<p>Usala per controllare se hai contato bene!</p>`
        },
        {
          label: "🔺 Prisma o piramide in 3D",
          html: `<p>Confronta un <b>prisma</b> e una <b>piramide</b> con la stessa base esagonale. Il prisma ha <b>due basi</b> e facce laterali rettangolari; la piramide ha <b>una base</b> e facce triangolari che salgono al vertice. Usa i pulsanti per passare da uno all'altro.</p>`,
          scene: "solid",
          options: { shape: "prism", n: 6, r: 1, h: 1.4, labels: true, color: "#f59e0b", shapes: ["prism", "pyramid"] }
        },
        {
          label: "🙈 Il sacchetto misterioso",
          html: `<p>Gioco per due: metti in un sacchetto alcuni oggetti (un dado, una pallina, un tappo, una gomma, un cono di carta). Il compagno, <b>a occhi chiusi</b>, ne tocca uno e deve dire:</p>
<ul>
<li>ha facce piatte o curve? → poliedro o solido di rotazione;</li>
<li>quante punte (vertici) sente?</li>
<li>quanti bordi (spigoli)?</li>
</ul>
<p>I bambini ciechi imparano la geometria proprio così: con le <b>mani</b>!</p>`
        },
        {
          label: "🌍 Solidi famosi nel mondo",
          html: `<ul>
<li>🇪🇬 Le <b>piramidi</b> di Giza: piramidi a base quadrata.</li>
<li>🇫🇷 La <b>piramide del Louvre</b> a Parigi: di vetro, anche lei a base quadrata.</li>
<li>🇮🇹 La <b>torre di Pisa</b>: un cilindro (inclinato!).</li>
<li>🇧🇪 L'<b>Atomium</b> di Bruxelles: 9 sfere collegate da tubi cilindrici.</li>
<li>🇯🇵 In Giappone si coltivano <b>angurie cubiche</b>, fatte crescere dentro scatole di vetro, perché stanno meglio nei frigoriferi!</li>
</ul>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei solidi: tocca un nodo e scopri il perché",
      nodes: [
        { id: "solido", label: "Solido", x: 50, y: 6, color: "#2563eb", html: "Figura geometrica a tre dimensioni.", why: "Il mondo reale è a 3 dimensioni: ogni oggetto ha lunghezza, larghezza e altezza. La geometria dei solidi fu raccolta da <b>Euclide</b> negli ultimi libri degli <i>Elementi</i> (circa 300 a.C.)." },
        { id: "poliedri", label: "Poliedri", x: 25, y: 28, color: "#16a34a", html: "Solidi con sole facce piatte (poligoni).", why: "Dal greco <i>polýs</i> (molti) + <i>hédra</i> (faccia, sedile): \"dalle molte facce\". Poiché sono fatti di poligoni, si possono studiare con la geometria piana che già conosci." },
        { id: "rotazione", label: "Solidi di rotazione", x: 75, y: 28, color: "#f97316", html: "Solidi con superfici curve: cilindro, cono, sfera.", why: "Si ottengono facendo girare una figura piana attorno a un asse. È così che funziona il <b>tornio</b>, inventato già nell'antichità per fare vasi e oggetti di legno perfettamente rotondi." },
        { id: "fsv", label: "Facce, spigoli, vertici", x: 12, y: 52, color: "#a855f7", html: "Gli elementi di un poliedro.", why: "Le facce sono poligoni; dove due facce si toccano nasce uno spigolo; dove si incontrano almeno tre spigoli nasce un vertice. Non possono esserci meno di 3 facce in un vertice, altrimenti il solido non si chiude." },
        { id: "eulero", label: "F + V − S = 2", x: 12, y: 80, color: "#ec4899", html: "La relazione di Eulero.", why: "Scoperta da <b>Leonhard Euler</b> nel 1750 (anche Cartesio ci era quasi arrivato un secolo prima). Vale per tutti i poliedri senza buchi ed è il punto di partenza di una parte della matematica chiamata topologia." },
        { id: "prismipir", label: "Prismi e piramidi", x: 38, y: 62, color: "#0ea5e9", html: "Prisma: 2 basi uguali e facce rettangolari. Piramide: 1 base e facce triangolari.", why: "Il prisma si ottiene \"trascinando\" un poligono verso l'alto; la piramide unendo tutti i vertici della base a un unico punto. <b>Democrito</b> scoprì che una piramide ha un terzo del volume del prisma con la stessa base e altezza; <b>Eudosso</b> lo dimostrò." },
        { id: "platonici", label: "Solidi platonici", x: 38, y: 90, color: "#14b8a6", html: "I 5 poliedri regolari: tetraedro, cubo, ottaedro, dodecaedro, icosaedro.", why: "Sono solo 5 perché intorno a un vertice la somma degli angoli delle facce deve essere minore di 360°: con triangoli ci stanno 3, 4 o 5 facce, con quadrati 3, con pentagoni 3; con esagoni già 3 × 120° = 360° e il vertice diventa piatto. Euclide lo dimostrò nell'ultimo libro degli <i>Elementi</i>." },
        { id: "sviluppo", label: "Sviluppo", x: 72, y: 58, color: "#84cc16", html: "Il solido aperto e steso su un piano.", why: "Serve per costruire scatole e confezioni. Tutti i poliedri e anche cilindri e coni si possono sviluppare; la sfera no, perché è curva in tutte le direzioni: per questo nessuna carta piana del mondo è perfetta." },
        { id: "volume", label: "Volume", x: 72, y: 86, color: "#64748b", html: "Lo spazio occupato da un solido, misurato in cubetti (cm³, dm³, m³).", why: "Si misura contando quanti cubetti di 1 cm di spigolo ci stanno dentro. 1 dm³ di acqua è proprio 1 litro: il sistema metrico, nato in Francia alla fine del Settecento, collega così volumi e capacità." }
      ],
      edges: [
        ["solido", "poliedri", "facce piatte"],
        ["solido", "rotazione", "superfici curve"],
        ["poliedri", "fsv", "hanno"],
        ["fsv", "eulero", "legati da"],
        ["poliedri", "prismipir", "es."],
        ["prismipir", "platonici", "i più regolari"],
        ["poliedri", "sviluppo", "si aprono nello"],
        ["rotazione", "sviluppo", "cilindro e cono"],
        ["solido", "volume", "occupa un"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: prismi, piramidi e sviluppi",
      questions: [
        { type: "mc", q: "Quale solido ha una sola base e facce laterali triangolari?", options: ["Il prisma", "La piramide", "Il cilindro"], answer: 1, explain: "La piramide ha una base e triangoli che si incontrano nel vertice." },
        { type: "mc", q: "Lo sviluppo di un cilindro è formato da…", options: ["6 quadrati", "un rettangolo e 2 cerchi", "4 triangoli"], answer: 1, explain: "La superficie laterale srotolata è un rettangolo; le due basi sono cerchi." },
        { type: "num", q: "Quanti vertici ha una piramide a base quadrata?", answer: 5, explain: "4 vertici della base + 1 in cima = 5." }
      ]
    }
  ],
  glossary: [
    { t: "Solido", d: "Figura geometrica a tre dimensioni: lunghezza, larghezza, altezza." },
    { t: "Poliedro", d: "Solido delimitato solo da facce piatte a forma di poligono." },
    { t: "Solido di rotazione", d: "Solido ottenuto facendo ruotare una figura piana attorno a un asse; ha superfici curve." },
    { t: "Faccia", d: "Ognuno dei poligoni che delimitano un poliedro." },
    { t: "Spigolo", d: "Segmento in cui si incontrano due facce." },
    { t: "Vertice", d: "Punto in cui si incontrano tre o più spigoli." },
    { t: "Prisma", d: "Poliedro con due basi uguali e parallele e facce laterali rettangolari." },
    { t: "Piramide", d: "Poliedro con una base e facce laterali triangolari che si incontrano nel vertice." },
    { t: "Sviluppo", d: "Figura piana che si ottiene aprendo un solido." },
    { t: "Volume", d: "Spazio occupato da un solido; si misura in cm³, dm³, m³." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quante dimensioni ha un solido?", options: ["2", "3", "4"], answer: 1, explain: "Lunghezza, larghezza e altezza." },
      { type: "mc", q: "Quale di questi oggetti è un solido di rotazione?", options: ["Un mattone", "Un tubo di patatine", "Un dado"], answer: 1, explain: "Il tubo è un cilindro: ha una superficie curva." },
      { type: "num", q: "Quante facce ha un cubo?", answer: 6, explain: "Come un dado: 6 facce quadrate." },
      { type: "num", q: "Quanti vertici ha un cubo?", answer: 8, explain: "4 sopra e 4 sotto." },
      { type: "tf", q: "La sfera ha uno spigolo.", answer: false, explain: "La sfera non ha né spigoli né vertici: è tutta curva." },
      { type: "text", q: "Come si chiama il segmento in cui si incontrano due facce di un poliedro?", answer: ["spigolo", "lo spigolo"], explain: "È lo spigolo." },
      { type: "mc", q: "Facendo ruotare un rettangolo attorno a un suo lato si ottiene…", options: ["un cono", "un cilindro", "una sfera"], answer: 1, explain: "Il rettangolo che gira forma un cilindro." },
      { type: "mc", q: "Quale figura NON può essere lo sviluppo di un cubo?", options: ["6 quadrati a forma di croce", "6 quadrati tutti in fila", "6 quadrati a forma di T"], answer: 1, explain: "Con 6 quadrati in fila, piegandoli, due facce si sovrappongono e due restano scoperte." },
      { type: "tf", q: "Il cubo è un prisma particolare.", answer: true, explain: "Ha due basi quadrate uguali e parallele e facce laterali che sono quadrati (rettangoli particolari)." },
      { type: "num", q: "Una scatola contiene 5 cubetti in lunghezza, 2 in larghezza e 3 in altezza. Quanti cubetti in tutto?", answer: 30, explain: "5 × 2 = 10 cubetti per strato; 10 × 3 = 30." },
      { type: "order", q: "Ordina dal solido con meno facce a quello con più facce.", items: ["Tetraedro (piramide triangolare)", "Piramide a base quadrata", "Cubo", "Prisma a base esagonale"], explain: "4, 5, 6 e 8 facce (6 laterali + 2 basi)." }
    ],
    gen: [["volBox", 2]]
  }
});
