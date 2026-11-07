TOPIC('it', {
  id: "p3-mat-linee-angoli",
  title: "Linee e angoli",
  intro: "Guardati intorno: i binari del treno 🚆, gli spigoli del banco, le lancette dell'orologio 🕒… sono tutti fatti di <b>linee</b> e <b>angoli</b>! Impariamo a riconoscere rette, semirette e segmenti, e a dare un nome agli angoli.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Tanti tipi di linee",
      html: `<p>Una <b>linea</b> è il segno che lascia la punta della matita quando si muove sul foglio. Ci sono linee:</p>
<ul>
<li><b>curve</b> 〰️: cambiano direzione dolcemente, come un'onda;</li>
<li><b>rette</b> ➖: vanno sempre dritte nella stessa direzione;</li>
<li><b>spezzate</b> ⚡: fatte di pezzi dritti che cambiano direzione di colpo;</li>
<li><b>miste</b>: un po' curve e un po' dritte.</li>
</ul>
<p>Una linea può essere <b>aperta</b> (gli estremi non si toccano) o <b>chiusa</b> (finisce dove è cominciata, come il bordo di un cerchio ⭕). Una linea chiusa divide il foglio in una <b>regione interna</b> e una <b>regione esterna</b>.</p>`
    },
    {
      type: "text",
      title: "Retta, semiretta e segmento",
      html: `<p>Le linee dritte hanno tre "cugini" importanti:</p>
<ul>
<li><b>Retta</b> ↔️: non ha né inizio né fine, continua <b>all'infinito</b> in tutte e due le direzioni. Sul foglio ne disegniamo solo un pezzo.</li>
<li><b>Semiretta</b> •→: ha un <b>punto di inizio</b> (l'<b>origine</b>) e poi continua all'infinito da una parte sola, come il raggio di una torcia 🔦.</li>
<li><b>Segmento</b> •—•: ha un <b>inizio</b> e una <b>fine</b> (due <b>estremi</b>). È l'unico che si può <b>misurare</b> col righello! 📏</li>
</ul>
<p>I punti si indicano con le <b>lettere maiuscole</b>: il segmento da A a B si chiama <b>AB</b>.</p>`
    },
    {
      type: "svg",
      title: "Retta, semiretta, segmento",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="fr" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#2563eb"/></marker><marker id="fl" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto-start-reverse"><path d="M0 0 L12 6 L0 12 z" fill="#2563eb"/></marker><marker id="fg" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#16a34a"/></marker></defs>
<line x1="60" y1="60" x2="540" y2="60" stroke="#2563eb" stroke-width="5" marker-start="url(#fl)" marker-end="url(#fr)"/>
<text x="300" y="95" font-size="22" fill="#1d4ed8" text-anchor="middle" font-weight="bold">RETTA: senza inizio né fine</text>
<line x1="80" y1="150" x2="540" y2="150" stroke="#16a34a" stroke-width="5" marker-end="url(#fg)"/>
<circle cx="80" cy="150" r="9" fill="#16a34a"/>
<text x="70" y="135" font-size="20" fill="#166534" font-weight="bold">O</text>
<text x="300" y="185" font-size="22" fill="#166534" text-anchor="middle" font-weight="bold">SEMIRETTA: un'origine, poi all'infinito</text>
<line x1="150" y1="240" x2="450" y2="240" stroke="#dc2626" stroke-width="5"/>
<circle cx="150" cy="240" r="9" fill="#dc2626"/><circle cx="450" cy="240" r="9" fill="#dc2626"/>
<text x="140" y="225" font-size="20" fill="#991b1b" font-weight="bold">A</text>
<text x="445" y="225" font-size="20" fill="#991b1b" font-weight="bold">B</text>
<text x="300" y="280" font-size="22" fill="#991b1b" text-anchor="middle" font-weight="bold">SEGMENTO AB: due estremi, si misura</text>
</svg>`,
      caption: "Le frecce indicano che la linea continua all'infinito; i pallini sono i punti dove inizia o finisce."
    },
    {
      type: "text",
      title: "Come stanno le rette: posizione",
      html: `<p>Rispetto al foglio (o al pavimento) una retta può essere:</p>
<ul>
<li><b>orizzontale</b> ➖ come l'orizzonte del mare;</li>
<li><b>verticale</b> | come un filo a piombo o un palo della luce;</li>
<li><b>obliqua</b> ⟋ cioè inclinata, come uno scivolo 🛝.</li>
</ul>
<p>Due rette, una rispetto all'altra, possono essere:</p>
<ul>
<li><b>parallele</b> ⏸: non si incontrano mai, restano sempre alla stessa distanza, come i <b>binari</b>;</li>
<li><b>incidenti</b> ✖️: si incontrano in un punto;</li>
<li><b>perpendicolari</b> ➕: sono incidenti e formano <b>4 angoli retti</b>, come le righe di un quaderno a quadretti.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Cerca le rette parallele e perpendicolari in un cubo",
      scene: "solid",
      options: { shape: "cube", color: "#60a5fa", labels: true },
      caption: "Gira il cubo: gli spigoli che stanno \"uno di fianco all'altro\" senza toccarsi sono paralleli; quelli che si incontrano in un vertice formano angoli retti, cioè sono perpendicolari."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le linee",
      questions: [
        { type: "mc", q: "Quale linea ha due estremi e si può misurare?", options: ["La retta", "La semiretta", "Il segmento"], answer: 2, explain: "Il segmento ha un inizio e una fine: si può misurare con il righello." },
        { type: "mc", q: "I binari del treno sono…", options: ["paralleli", "perpendicolari", "incidenti"], answer: 0, explain: "Non si incontrano mai e restano alla stessa distanza: paralleli." },
        { type: "tf", q: "Una retta ha un punto di inizio chiamato origine.", answer: false, explain: "La retta non ha né inizio né fine. È la semiretta che ha un'origine." }
      ]
    },
    {
      type: "text",
      title: "Che cos'è un angolo",
      html: `<p>Se da uno stesso punto partono <b>due semirette</b>, dividono il foglio in due parti. Ognuna di queste parti è un <b>angolo</b>.</p>
<ul>
<li>il punto da cui partono si chiama <b>vertice</b>;</li>
<li>le due semirette si chiamano <b>lati</b> dell'angolo;</li>
<li>la "apertura" tra i lati è l'<b>ampiezza</b>.</li>
</ul>
<p>⚠️ L'ampiezza <b>non dipende dalla lunghezza</b> dei lati che disegni, ma solo da <b>quanto sono aperti</b>! Un angolo con lati lunghi non è più "grande" di uno con lati corti, se l'apertura è uguale.</p>
<p>L'ampiezza si misura in <b>gradi</b> (°) con il <b>goniometro</b>.</p>`
    },
    {
      type: "text",
      title: "I nomi degli angoli",
      html: `<table>
<tr><th>Angolo</th><th>Com'è</th><th>Gradi</th></tr>
<tr><td>📐 <b>Retto</b></td><td>come l'angolo di un foglio; i lati sono perpendicolari</td><td>90°</td></tr>
<tr><td>🔺 <b>Acuto</b></td><td>più chiuso di un retto</td><td>meno di 90°</td></tr>
<tr><td>🔓 <b>Ottuso</b></td><td>più aperto di un retto ma meno di un piatto</td><td>tra 90° e 180°</td></tr>
<tr><td>➖ <b>Piatto</b></td><td>i lati formano una linea dritta</td><td>180° (= 2 retti)</td></tr>
<tr><td>🔄 <b>Giro</b></td><td>un lato fa il giro completo e torna sull'altro</td><td>360° (= 4 retti)</td></tr>
</table>
<p>Trucco: per capire se un angolo è retto, appoggia l'<b>angolo di un foglio</b> o di una squadra: se combacia, è retto!</p>`
    },
    {
      type: "svg",
      title: "Acuto, retto, ottuso, piatto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<g stroke-width="5" stroke-linecap="round">
<line x1="30" y1="200" x2="140" y2="200" stroke="#1f2937"/><line x1="30" y1="200" x2="120" y2="110" stroke="#1f2937"/>
<line x1="180" y1="200" x2="280" y2="200" stroke="#1f2937"/><line x1="180" y1="200" x2="180" y2="100" stroke="#1f2937"/>
<line x1="350" y1="200" x2="440" y2="200" stroke="#1f2937"/><line x1="350" y1="200" x2="290" y2="120" stroke="#1f2937"/>
<line x1="460" y1="200" x2="590" y2="200" stroke="#1f2937"/>
</g>
<path d="M70 200 A40 40 0 0 0 58 172" fill="none" stroke="#16a34a" stroke-width="4"/>
<rect x="180" y="170" width="30" height="30" fill="none" stroke="#2563eb" stroke-width="4"/>
<path d="M390 200 A40 40 0 0 0 326 168" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M565 200 A40 40 0 0 0 485 200" fill="none" stroke="#7c3aed" stroke-width="4"/>
<circle cx="525" cy="200" r="7" fill="#7c3aed"/>
<text x="85" y="245" font-size="22" fill="#16a34a" text-anchor="middle" font-weight="bold">acuto</text>
<text x="85" y="272" font-size="18" fill="#16a34a" text-anchor="middle">&lt; 90°</text>
<text x="230" y="245" font-size="22" fill="#2563eb" text-anchor="middle" font-weight="bold">retto</text>
<text x="230" y="272" font-size="18" fill="#2563eb" text-anchor="middle">90°</text>
<text x="370" y="245" font-size="22" fill="#dc2626" text-anchor="middle" font-weight="bold">ottuso</text>
<text x="370" y="272" font-size="18" fill="#dc2626" text-anchor="middle">tra 90° e 180°</text>
<text x="525" y="245" font-size="22" fill="#7c3aed" text-anchor="middle" font-weight="bold">piatto</text>
<text x="525" y="272" font-size="18" fill="#7c3aed" text-anchor="middle">180°</text>
<text x="300" y="40" font-size="22" fill="#1f2937" text-anchor="middle">l'arco colorato mostra l'ampiezza</text>
</svg>`,
      caption: "Il quadratino blu è il simbolo dell'angolo retto."
    },
    {
      type: "widget",
      title: "Che angolo è?",
      widget: "classify",
      options: {
        groups: ["Acuto", "Retto", "Ottuso"],
        items: [
          ["📄 l'angolo di un foglio", 1],
          ["🍕 la punta di una fetta di pizza", 0],
          ["🕒 le lancette alle 3:00", 1],
          ["🕐 le lancette all'1:00", 0],
          ["🕔 le lancette alle 5:00", 2],
          ["💻 lo schermo del computer aperto molto", 2],
          ["🪟 l'angolo di una finestra", 1],
          ["✂️ forbici appena aperte", 0]
        ]
      },
      caption: "Trascina ogni oggetto nel gruppo giusto."
    },
    {
      type: "example",
      title: "Esempio pratico: l'orologio",
      html: `<p>Le lancette dell'orologio sono due semirette con lo stesso vertice: il perno al centro! ⏰</p>
<ul>
<li>Alle <b>3:00</b> formano un angolo <b>retto</b> (90°).</li>
<li>Alle <b>2:00</b> formano un angolo <b>acuto</b> (60°).</li>
<li>Alle <b>4:00</b> formano un angolo <b>ottuso</b> (120°).</li>
<li>Alle <b>6:00</b> formano un angolo <b>piatto</b> (180°).</li>
</ul>
<p>In un'ora la lancetta dei minuti fa un <b>giro completo</b>: 360°!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la caccia alle linee a scuola",
      html: `<p>Fai una caccia al tesoro geometrica in classe! 🔍</p>
<ul>
<li><b>Rette parallele</b>: i lati lunghi della lavagna, le righe del quaderno.</li>
<li><b>Rette perpendicolari</b>: lo spigolo del muro che incontra il pavimento, le righe e le colonne dei quadretti.</li>
<li><b>Segmenti</b>: il bordo della gomma, la matita.</li>
<li><b>Angoli retti</b>: gli angoli del banco, della porta, del libro.</li>
<li><b>Angoli acuti</b>: la punta della matita temperata ✏️.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Il giro completo misura <b>360 gradi</b> grazie agli antichi <b>Babilonesi</b>, che contavano in base 60. Forse lo scelsero perché l'anno dura circa 360 giorni e perché 360 si può dividere esattamente per tantissimi numeri: 2, 3, 4, 5, 6, 8, 9, 10, 12…</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Il matematico greco <b>Euclide</b>, circa 2300 anni fa, scrisse un libro famosissimo, gli <b>Elementi</b>, in cui definiva il punto come <i>"ciò che non ha parti"</i> e la linea come <i>"lunghezza senza larghezza"</i>. Per secoli è stato il libro di geometria più studiato al mondo! 📜</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Retta: infinita da tutte e due le parti. Semiretta: ha un'origine. Segmento: ha due estremi.</li>
<li>Parallele: non si incontrano mai. Perpendicolari: si incontrano formando angoli retti.</li>
<li>Angolo = due semirette con la stessa origine (vertice).</li>
<li>Acuto &lt; 90° · Retto = 90° · Ottuso tra 90° e 180° · Piatto = 180° · Giro = 360°.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire linee e angoli",
      intro: "La geometria si capisce meglio muovendosi e toccando. Prova una di queste strade!",
      tabs: [
        {
          label: "🙆 Con le braccia",
          html: `<p>Alzati in piedi! Il tuo corpo può fare gli angoli:</p>
<ul>
<li>un braccio in alto e uno di lato → angolo <b>retto</b> 🙋;</li>
<li>braccia aperte in linea dritta → angolo <b>piatto</b> 🤸;</li>
<li>braccia quasi chiuse sopra la testa → angolo <b>acuto</b>;</li>
<li>una giravolta completa su te stesso → angolo <b>giro</b>! 🔄</li>
</ul>
<p>La tua spalla è il <b>vertice</b>, le braccia sono i <b>lati</b>.</p>`
        },
        {
          label: "🕒 Con l'orologio",
          html: `<p>Pensa alla lancetta dei minuti che parte dalle 12. Ogni 5 minuti gira di <b>30°</b>.</p>
<ul>
<li>Dopo 15 minuti → <b>90°</b>, un angolo retto (un quarto di giro).</li>
<li>Dopo 30 minuti → <b>180°</b>, angolo piatto (mezzo giro).</li>
<li>Dopo 60 minuti → <b>360°</b>, angolo giro (giro intero).</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#eff6ff"/>
<circle cx="130" cy="130" r="100" fill="#ffffff" stroke="#1f2937" stroke-width="5"/>
<path d="M130 130 L130 30 A100 100 0 0 1 230 130 Z" fill="#93c5fd" opacity="0.8"/>
<line x1="130" y1="130" x2="130" y2="45" stroke="#1f2937" stroke-width="6" stroke-linecap="round"/>
<line x1="130" y1="130" x2="215" y2="130" stroke="#dc2626" stroke-width="6" stroke-linecap="round"/>
<circle cx="130" cy="130" r="8" fill="#1f2937"/>
<text x="130" y="25" font-size="18" text-anchor="middle">12</text>
<text x="245" y="136" font-size="18">3</text>
<text x="300" y="80" font-size="24" fill="#1d4ed8" font-weight="bold">15 minuti</text>
<text x="300" y="120" font-size="24" fill="#1f2937">= 1/4 di giro</text>
<text x="300" y="160" font-size="24" fill="#dc2626" font-weight="bold">= 90° (retto)</text>
</svg>`
        },
        {
          label: "🧊 Nei solidi 3D",
          html: `<p>Anche gli oggetti hanno linee e angoli! In questa <b>scatola</b> (parallelepipedo):</p>
<ul>
<li>gli <b>spigoli</b> sono segmenti;</li>
<li>gli spigoli che si incontrano formano angoli <b>retti</b>;</li>
<li>gli spigoli opposti di una faccia sono <b>paralleli</b>.</li>
</ul>
<p>Cambia solido con i pulsanti: la piramide ha anche angoli <b>acuti</b>!</p>`,
          scene: "solid",
          options: { shape: "box", w: 3, h: 2, d: 1.5, color: "#fbbf24", labels: true, shapes: ["box", "cube", "pyramid"] }
        },
        {
          label: "🗺️ Analogia delle strade",
          html: `<p>Pensa alle strade di una città:</p>
<ul>
<li>due vie che corrono una accanto all'altra senza mai incrociarsi sono <b>parallele</b>;</li>
<li>un <b>incrocio</b> è dove due strade <b>incidenti</b> si incontrano;</li>
<li>se l'incrocio forma una croce "perfetta" ➕, le strade sono <b>perpendicolari</b>.</li>
</ul>
<p>A New York, a Torino e a Barcellona molte strade sono costruite così, a <b>scacchiera</b>: tutte parallele o perpendicolari!</p>`
        },
        {
          label: "🔤 Le lettere dell'alfabeto",
          html: `<p>Anche le lettere maiuscole nascondono linee e angoli!</p>
<ul>
<li><b>L</b> e <b>T</b>: angoli <b>retti</b>, segmenti perpendicolari.</li>
<li><b>V</b> e <b>A</b>: angoli <b>acuti</b>.</li>
<li><b>H</b>, <b>=</b>: segmenti <b>paralleli</b>.</li>
<li><b>X</b>: segmenti <b>incidenti</b>.</li>
<li><b>O</b>, <b>C</b>, <b>S</b>: linee <b>curve</b>; la O è una linea <b>chiusa</b>!</li>
</ul>
<p>Prova a scrivere il tuo nome e cerca gli angoli! ✍️</p>`
        },
        {
          "label": "𓂀 La squadra e il filo a piombo degli Egizi",
          "html": "<p>Gli antichi <b>Egizi</b> costruivano piramidi e templi enormi con muri perfettamente dritti. Come facevano senza strumenti elettronici? In una tomba del villaggio degli operai di <b>Deir el-Medina</b>, quello di <b>Sennedjem</b>, che lavorava alle tombe dei faraoni più di 3000 anni fa, sono stati trovati i suoi attrezzi: una <b>squadra</b> e una <b>livella a forma di A</b> con un <b>filo a piombo</b>.</p><ul><li>Il <b>filo a piombo</b> è un filo con un peso: il peso tira giù il filo, che diventa sempre <b>verticale</b>.</li><li>La livella ad A: quando il filo passa esattamente sulla <b>tacca centrale</b>, la base della A è <b>orizzontale</b>.</li><li>La <b>squadra</b> serve per controllare gli <b>angoli retti</b>.</li></ul><p>🎯 <b>Costruisci il tuo filo a piombo</b>: lega una gomma a uno spago e tienilo fermo. Il filo è verticale. Appoggia una squadra al filo: il lato di sotto è orizzontale. Verticale e orizzontale sono <b>perpendicolari</b>: formano un angolo retto! Ora controlla: lo stipite della porta è verticale? Il banco è orizzontale?</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/><polyline points=\"150,260 300,40 450,260\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"12\" stroke-linejoin=\"round\"/><line x1=\"205\" y1=\"180\" x2=\"395\" y2=\"180\" stroke=\"#92400e\" stroke-width=\"10\"/><line x1=\"300\" y1=\"40\" x2=\"300\" y2=\"215\" stroke=\"#1e293b\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"222\" r=\"10\" fill=\"#475569\" stroke=\"none\" stroke-width=\"2\"/><line x1=\"300\" y1=\"172\" x2=\"300\" y2=\"188\" stroke=\"#dc2626\" stroke-width=\"4\"/><line x1=\"110\" y1=\"266\" x2=\"490\" y2=\"266\" stroke=\"#16a34a\" stroke-width=\"4\"/><text x=\"320\" y=\"120\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">filo a piombo</text><text x=\"320\" y=\"140\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">(verticale)</text><text x=\"410\" y=\"288\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">base orizzontale</text><text x=\"330\" y=\"200\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#dc2626\">tacca centrale</text><polyline points=\"30,40 30,130 120,130\" fill=\"none\" stroke=\"#a16207\" stroke-width=\"12\"/><text x=\"30\" y=\"160\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#a16207\" font-weight=\"bold\">squadra</text><rect x=\"30\" y=\"112\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/></svg>"
        },
        {
          "label": "🇯🇵 L'angolo retto con l'origami (Giappone)",
          "html": "<p>In <b>Giappone</b> l'<b>origami</b>, l'arte di piegare la carta, si fa anche a scuola. Con due pieghe puoi costruire un <b>angolo retto</b> perfetto, anche partendo da un pezzo di carta con il bordo tutto storto!</p><ol><li>Prendi un pezzo di carta qualsiasi e piegalo a metà, dove vuoi. Il bordo della piega è una <b>linea retta</b>.</li><li>Ora piega di nuovo facendo <b>combaciare la piega con sé stessa</b> (un pezzo di piega sopra l'altro).</li><li>Apri il foglio: le due pieghe si incrociano e formano <b>4 angoli retti</b>! Le due pieghe sono <b>perpendicolari</b>.</li><li>Richiudi e piega ancora a metà l'angolo retto: ottieni un angolo <b>acuto</b> (metà di un angolo retto).</li></ol><p>🎯 Usa il tuo «angolo retto di carta» come strumento: appoggialo agli angoli del libro, della lavagna, della finestra. Se l'angolo è più piccolo è <b>acuto</b>, se è più grande è <b>ottuso</b>.</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di linee e angoli: tocca un nodo e scopri il perché",
      nodes: [
        { id: "punto", label: "Punto", x: 50, y: 6, color: "#64748b", html: "Il più piccolo \"posto\" della geometria: non ha dimensioni. Si indica con una lettera maiuscola.", why: "Euclide, nel libro <i>Elementi</i> (circa 300 a.C.), lo definì \"ciò che non ha parti\". È un'idea: il pallino della matita è solo un modo per vederlo." },
        { id: "linea", label: "Linea", x: 50, y: 24, color: "#0ea5e9", html: "Curva, retta, spezzata o mista; aperta o chiusa.", why: "Per Euclide è \"lunghezza senza larghezza\". Puoi immaginarla come il cammino di un punto che si muove." },
        { id: "retta", label: "Retta", x: 18, y: 42, color: "#2563eb", html: "Linea dritta senza inizio né fine.", why: "Uno dei postulati di Euclide dice che per due punti passa una e una sola retta: per questo un righello basta per disegnarla." },
        { id: "semi", label: "Semiretta", x: 50, y: 48, color: "#16a34a", html: "Una retta tagliata in un punto: ha un'origine.", why: "Se scegli un punto su una retta, la dividi in due semirette: \"semi\" vuol dire \"metà\"." },
        { id: "seg", label: "Segmento", x: 82, y: 42, color: "#dc2626", html: "Il pezzo di retta tra due punti: si può misurare.", why: "La parola viene dal latino <i>secare</i>, \"tagliare\": è un pezzo tagliato dalla retta. È la linea più corta tra due punti." },
        { id: "pos", label: "Parallele e perpendicolari", x: 18, y: 72, color: "#f59e0b", html: "Parallele: mai incontrarsi. Perpendicolari: incontrarsi ad angolo retto.", why: "Il quinto postulato di Euclide riguarda proprio le parallele. Per 2000 anni i matematici cercarono di dimostrarlo; nell'Ottocento si scoprì che esistono anche geometrie diverse, dove le \"rette\" sono curve, come sulla superficie di una sfera." },
        { id: "angolo", label: "Angolo", x: 60, y: 72, color: "#a855f7", html: "Parte di piano tra due semirette con la stessa origine (vertice).", why: "Viene dal latino <i>angulus</i>, \"angolo, curva\". Conta solo l'apertura, non la lunghezza dei lati." },
        { id: "gradi", label: "Gradi e tipi di angolo", x: 60, y: 93, color: "#ec4899", html: "Acuto, retto (90°), ottuso, piatto (180°), giro (360°).", why: "I Babilonesi divisero il giro in 360 parti perché contavano in base 60 e perché 360 si divide per tantissimi numeri. Lo strumento per misurare è il goniometro, dal greco <i>gonia</i> = angolo." }
      ],
      edges: [
        ["punto", "linea", "si muove e traccia"],
        ["linea", "retta", "se è dritta"],
        ["retta", "semi", "tagliata in un punto"],
        ["retta", "seg", "tagliata in due punti"],
        ["retta", "pos", "due rette possono essere"],
        ["semi", "angolo", "due con la stessa origine"],
        ["angolo", "gradi", "si misura in"],
        ["pos", "gradi", "perpendicolari = 90°"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: gli angoli",
      questions: [
        { type: "mc", q: "Un angolo di 120° è…", options: ["acuto", "retto", "ottuso"], answer: 2, explain: "È più di 90° e meno di 180°: ottuso." },
        { type: "num", q: "Quanti gradi misura un angolo piatto?", answer: 180, unit: "°", explain: "Un angolo piatto è come due angoli retti: 90° + 90° = 180°." },
        { type: "tf", q: "Se allungo i lati di un angolo, l'angolo diventa più ampio.", answer: false, explain: "L'ampiezza dipende solo dall'apertura dei lati, non dalla loro lunghezza." }
      ]
    }
  ],
  glossary: [
    { t: "Retta", d: "Linea dritta senza inizio né fine." },
    { t: "Semiretta", d: "Parte di retta con un'origine, infinita da una parte." },
    { t: "Segmento", d: "Parte di retta compresa tra due punti (estremi); si può misurare." },
    { t: "Rette parallele", d: "Rette che non si incontrano mai." },
    { t: "Rette incidenti", d: "Rette che si incontrano in un punto." },
    { t: "Rette perpendicolari", d: "Rette incidenti che formano quattro angoli retti." },
    { t: "Angolo", d: "Parte di piano compresa tra due semirette con la stessa origine." },
    { t: "Vertice", d: "Il punto da cui partono i lati di un angolo." },
    { t: "Angolo retto", d: "Angolo di 90°, come l'angolo di un foglio." },
    { t: "Goniometro", d: "Strumento per misurare l'ampiezza degli angoli in gradi." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale linea non ha né inizio né fine?", options: ["Segmento", "Retta", "Semiretta"], answer: 1, explain: "La retta continua all'infinito da tutte e due le parti." },
      { type: "mc", q: "Come si chiama il punto di inizio di una semiretta?", options: ["Origine", "Estremo finale", "Lato"], answer: 0, explain: "La semiretta parte dall'origine." },
      { type: "tf", q: "Due rette parallele prima o poi si incontrano.", answer: false, explain: "Le rette parallele non si incontrano mai." },
      { type: "mc", q: "Due rette che si incontrano formando 4 angoli retti sono…", options: ["parallele", "perpendicolari", "oblique"], answer: 1, explain: "Sono perpendicolari." },
      { type: "num", q: "Quanti gradi misura un angolo retto?", answer: 90, unit: "°", explain: "L'angolo retto misura 90°." },
      { type: "mc", q: "Un angolo di 45° è…", options: ["acuto", "ottuso", "piatto"], answer: 0, explain: "È minore di 90°: acuto." },
      { type: "text", q: "Come si chiama il punto da cui partono i lati di un angolo?", answer: ["vertice", "il vertice"], explain: "È il vertice." },
      { type: "num", q: "Quanti angoli retti formano un angolo giro?", answer: 4, explain: "4 × 90° = 360°." },
      { type: "mc", q: "Alle 6:00 le lancette dell'orologio formano un angolo…", options: ["retto", "acuto", "piatto"], answer: 2, explain: "Una punta il 12 e l'altra il 6: sono in linea dritta, angolo piatto." },
      { type: "order", q: "Ordina gli angoli dal più chiuso al più aperto.", items: ["acuto", "retto", "ottuso", "piatto", "giro"], explain: "Acuto < 90° < ottuso < 180° (piatto) < 360° (giro)." },
      { type: "tf", q: "Il segmento è l'unica di queste linee che si può misurare col righello.", answer: true, explain: "Retta e semiretta sono infinite; il segmento ha due estremi." }
    ]
  }
});
