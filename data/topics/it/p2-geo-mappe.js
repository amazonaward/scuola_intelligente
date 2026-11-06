TOPIC('it', {
  id: "p2-geo-mappe",
  title: "Piante e mappe",
  intro: "Immagina di essere un <b>uccellino</b> 🐦 che vola sopra la tua classe: che cosa vedresti? Solo i <b>tetti</b>, la <b>parte di sopra</b> dei banchi e delle sedie! Oggi impariamo a <b>vedere dall'alto</b> e a leggere <b>piante</b>, <b>mappe</b> e <b>legende</b> 🗺️.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Tre modi di guardare un oggetto 👀",
      html: `<p>Lo stesso oggetto sembra diverso se lo guardi da punti diversi. Prendi un <b>bicchiere</b> 🥛:</p>
<ul>
<li>👁️ <b>Di fronte</b> (visione frontale): vedi un rettangolo.</li>
<li>↘️ <b>Di sbieco</b> (visione obliqua, un po' dall'alto): vedi il bicchiere e un po' del bordo rotondo.</li>
<li>⬇️ <b>Dall'alto</b> (visione zenitale, «a volo d'uccello»): vedi solo un <b>cerchio</b>!</li>
</ul>
<p>Le <b>piante</b> e le <b>mappe</b> si disegnano sempre <b>dall'alto</b>, come le vedrebbe un uccellino.</p>`
    },
    {
      type: "svg",
      title: "Un tavolo visto in tre modi",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="40" y="110" width="140" height="18" fill="#b45309"/>
<rect x="50" y="128" width="14" height="80" fill="#92400e"/>
<rect x="156" y="128" width="14" height="80" fill="#92400e"/>
<polygon points="250,110 400,110 370,145 220,145" fill="#d97706"/>
<rect x="220" y="145" width="150" height="12" fill="#b45309"/>
<rect x="226" y="157" width="12" height="60" fill="#92400e"/>
<rect x="355" y="157" width="12" height="60" fill="#92400e"/>
<rect x="388" y="125" width="10" height="60" fill="#92400e"/>
<rect x="450" y="90" width="120" height="120" fill="#f59e0b" stroke="#92400e" stroke-width="4"/>
<text x="110" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">di fronte</text>
<text x="300" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">di sbieco</text>
<text x="510" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">dall'alto</text>
<text x="510" y="275" font-size="15" text-anchor="middle" fill="#475569">(come in una pianta)</text>
<text x="300" y="40" font-size="22" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Lo stesso tavolo!</text>
</svg>`,
      caption: "Dall'alto il tavolo diventa un quadrato: le gambe non si vedono più, sono nascoste sotto."
    },
    {
      type: "3d",
      title: "Gira il solido e guardalo dall'alto 🔄",
      scene: "solid",
      options: { shape: "cube", shapes: ["cube", "cylinder", "cone", "pyramid", "sphere"], color: "#38bdf8" },
      caption: "Cambia solido con i pulsanti e ruotalo finché lo vedi proprio da sopra. Il cubo diventa un quadrato, il cilindro e il cono diventano un cerchio, la piramide un quadrato con una X!"
    },
    {
      type: "text",
      title: "Rimpicciolire: la riduzione 🔍",
      html: `<p>Una stanza vera è grande; il foglio è piccolo. Per disegnarla dobbiamo <b>rimpicciolire</b> tutto <b>nello stesso modo</b>. Questo si chiama <b>riduzione in scala</b>.</p>
<p>Un modo facile è usare i <b>quadretti</b> del quaderno:</p>
<p style="font-size:1.1em">📏 <b>1 quadretto = 1 passo</b> (oppure 1 metro)</p>
<p>Se la cattedra è lunga 2 passi, la disegni lunga <b>2 quadretti</b>. Se la classe è lunga 8 passi, la disegni lunga <b>8 quadretti</b>. Così tutto resta <b>proporzionato</b>: le cose grandi restano più grandi, quelle piccole più piccole.</p>`
    },
    {
      type: "widget",
      title: "Disegna la pianta di una stanza sui quadretti",
      widget: "areaGrid",
      options: { w: 6, h: 4, max: 12 },
      caption: "Ogni quadretto è 1 passo. Muovi i cursori: quanti quadretti servono per una stanza lunga 6 passi e larga 4?"
    },
    {
      type: "text",
      title: "Pianta, mappa, carta geografica 🗺️",
      html: `<p>Più lo spazio è grande, più bisogna rimpicciolire. Cambia anche il nome del disegno:</p>
<table>
<tr><th>Nome</th><th>Che cosa mostra</th><th>Esempio</th></tr>
<tr><td>📐 <b>Pianta</b></td><td>uno spazio piccolo, con tanti particolari</td><td>la tua cameretta, la classe, una casa</td></tr>
<tr><td>🗺️ <b>Mappa</b></td><td>uno spazio più grande: strade, piazze, parchi</td><td>il quartiere, il centro della città</td></tr>
<tr><td>🌍 <b>Carta geografica</b></td><td>spazi molto grandi: regioni, Stati, continenti</td><td>la carta dell'Italia, il mappamondo</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: dall'alto",
      questions: [
        { type: "mc", q: "Visto dall'alto, un pallone sembra…", options: ["un quadrato", "un cerchio", "un triangolo"], answer: 1, explain: "La palla da sopra si vede come un cerchio." },
        { type: "mc", q: "Come si chiama il disegno di una stanza vista dall'alto?", options: ["Pianta", "Ritratto", "Fumetto"], answer: 0, explain: "È la pianta." },
        { type: "num", q: "1 quadretto = 1 passo. Un armadio largo 3 passi: quanti quadretti?", answer: 3, tol: 0, unit: "quadretti", explain: "3 passi = 3 quadretti." }
      ]
    },
    {
      type: "text",
      title: "La legenda: il dizionario della mappa 🔑",
      html: `<p>Sulle piante e sulle mappe non si disegna tutto con precisione: si usano dei <b>simboli</b> 🔣 (piccoli disegni, colori, linee).</p>
<p>Per capire che cosa vuol dire ogni simbolo c'è la <b>legenda</b>: un riquadro, di solito in un angolo, che spiega tutti i simboli. È come un piccolo <b>dizionario</b>!</p>
<p>Alcuni colori si usano quasi sempre nello stesso modo:</p>
<ul>
<li>🟦 <b>azzurro</b>: acqua (fiumi, laghi, mare);</li>
<li>🟩 <b>verde</b>: prati, parchi, pianure;</li>
<li>🟫 <b>marrone</b>: montagne e colline;</li>
<li>⬜ <b>grigio</b> o <b>bianco</b>: strade e piazze.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Una mappa con la legenda",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#ffffff"/>
<rect x="10" y="10" width="400" height="300" fill="#bbf7d0" stroke="#0f172a" stroke-width="2"/>
<path d="M10 220 C120 200 200 260 410 230" stroke="#3b82f6" stroke-width="16" fill="none"/>
<rect x="10" y="110" width="400" height="22" fill="#d1d5db"/>
<rect x="190" y="10" width="22" height="300" fill="#d1d5db"/>
<rect x="60" y="40" width="70" height="50" fill="#f87171" stroke="#7f1d1d" stroke-width="2"/>
<rect x="260" y="40" width="50" height="50" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
<circle cx="340" cy="170" r="16" fill="#15803d"/>
<circle cx="370" cy="160" r="16" fill="#15803d"/>
<circle cx="80" cy="165" r="16" fill="#15803d"/>
<rect x="430" y="10" width="160" height="300" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
<text x="510" y="38" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">LEGENDA</text>
<rect x="445" y="60" width="28" height="22" fill="#f87171" stroke="#7f1d1d" stroke-width="2"/>
<text x="482" y="77" font-size="15" fill="#0f172a">scuola</text>
<rect x="445" y="100" width="28" height="22" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
<text x="482" y="117" font-size="15" fill="#0f172a">negozio</text>
<circle cx="459" cy="152" r="12" fill="#15803d"/>
<text x="482" y="157" font-size="15" fill="#0f172a">albero</text>
<rect x="445" y="182" width="28" height="14" fill="#d1d5db"/>
<text x="482" y="195" font-size="15" fill="#0f172a">strada</text>
<rect x="445" y="222" width="28" height="12" fill="#3b82f6"/>
<text x="482" y="234" font-size="15" fill="#0f172a">fiume</text>
<rect x="445" y="258" width="28" height="22" fill="#bbf7d0" stroke="#0f172a" stroke-width="1"/>
<text x="482" y="275" font-size="15" fill="#0f172a">prato</text>
</svg>`,
      caption: "Grazie alla legenda capisci subito dove sono la scuola, il negozio, gli alberi e il fiume."
    },
    {
      type: "widget",
      title: "Abbina il simbolo al significato",
      widget: "match",
      options: {
        pairs: [
          ["🟦 linea azzurra", "fiume"],
          ["🟩 zona verde", "parco o prato"],
          ["🔺 triangolo marrone", "montagna"],
          ["✝️ croce", "chiesa"],
          ["🅿️ P blu", "parcheggio"],
          ["➕ croce verde", "farmacia"]
        ]
      },
      caption: "Sono simboli molto usati sulle mappe vere."
    },
    {
      type: "example",
      title: "Esempio pratico: la pianta della mia classe ✏️",
      html: `<p>Ecco come fa Matteo a disegnare la pianta della sua classe:</p>
<ol>
<li>👣 <b>Misura</b> la classe a passi: 8 passi di lunghezza, 6 di larghezza.</li>
<li>📏 Sul quaderno disegna un rettangolo di <b>8 × 6 quadretti</b>.</li>
<li>🚪 Segna la <b>porta</b> e le <b>finestre</b> sui lati giusti.</li>
<li>🟫 Disegna i <b>banchi</b> come rettangolini, la <b>cattedra</b> come un rettangolo più grande, la <b>lavagna</b> come una linea spessa sul muro.</li>
<li>🔑 Fa la <b>legenda</b>: banco = rettangolino marrone, cattedra = rettangolo blu…</li>
</ol>
<p>Ora un compagno di un'altra classe, guardando la pianta, sa dov'è il banco di Matteo!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la caccia al tesoro 🏴‍☠️",
      html: `<p>La maestra nasconde un tesoro in giardino e dà ai bambini una <b>mappa</b>:</p>
<ul>
<li>🌳 Tre cerchi verdi = i tre alberi.</li>
<li>🟫 Un rettangolo marrone = la panchina.</li>
<li>❌ Una X rossa = il tesoro, tra la panchina e l'albero più grande.</li>
</ul>
<p>I bambini <b>girano la mappa</b> finché i disegni sono messi come le cose vere davanti a loro (si dice <b>orientare la mappa</b>) e… trovano il tesoro! 🎁</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🏛️",
      html: `<p>Più di <b>1800 anni fa</b>, a Roma, fu fatta una pianta gigantesca della città incisa sul <b>marmo</b>: la <b>Forma Urbis</b>. Era larga circa <b>18 metri</b> e alta <b>13</b>, come la facciata di un palazzo, e mostrava ogni casa e ogni stanza! Oggi ne restano solo dei pezzi, e gli archeologi cercano di rimetterli insieme come un puzzle.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🛰️",
      html: `<p>Oggi le mappe si fanno anche con le <b>foto dei satelliti</b>, che girano intorno alla Terra a centinaia di chilometri di altezza e fotografano tutto <b>dall'alto</b>. Le app con le mappe sul telefono usano proprio queste foto: puoi vedere il tetto della tua scuola!</p>`
    },
    {
      type: "3d",
      title: "Dalla realtà alla mappa: il paesaggio 3D",
      scene: "terrain",
      caption: "Ruota il paesaggio e guardalo proprio da sopra: vedrai la montagna come una macchia marrone, il lago e il fiume come forme azzurre, la pianura verde. È così che nasce una carta geografica!",
      options: {
        features: {
          mountain: { label: "Montagna", html: "Sulle carte si colora di <b>marrone</b>: più è scuro, più è alta." },
          hill: { label: "Collina", html: "Sulle carte è di un marrone chiaro o giallo." },
          plain: { label: "Pianura", html: "Sulle carte si colora di <b>verde</b>." },
          river: { label: "Fiume", html: "Sulle carte è una <b>linea azzurra</b> che si allarga verso il mare." },
          lake: { label: "Lago", html: "Sulle carte è una macchia <b>azzurra</b> chiusa." },
          sea: { label: "Mare", html: "Sulle carte è <b>azzurro</b>: più è scuro, più è profondo." }
        }
      }
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le mappe",
      intro: "Le mappe ti sembrano difficili? Prova con questi altri modi.",
      tabs: [
        {
          label: "🧱 Con i mattoncini",
          html: `<p>Costruisci la tua cameretta con i <b>mattoncini</b> o con delle scatoline: un mattoncino lungo per il letto, uno quadrato per il comodino…</p>
<p>Poi mettili su un <b>foglio</b> e <b>ricalca</b> il contorno di ogni mattoncino con la matita. Togli i mattoncini: sul foglio è rimasta la <b>pianta</b> della tua cameretta! È proprio come vederla dall'alto.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 1 }
        },
        {
          label: "🔦 Il gioco delle ombre",
          html: `<p>Al buio, metti una torcia <b>proprio sopra</b> un oggetto (una tazza, un giocattolo). L'<b>ombra</b> sul tavolo è la forma che vedresti dall'alto!</p>
<ul>
<li>☕ la tazza fa un'ombra a cerchio;</li>
<li>📦 una scatola fa un'ombra a rettangolo;</li>
<li>🧸 un orsetto fa un'ombra a macchia.</li>
</ul>
<p>Le piante sono un po' come le «ombre dall'alto» delle cose.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#1e293b"/>
<rect x="270" y="10" width="60" height="30" rx="6" fill="#facc15"/>
<polygon points="280,40 320,40 420,200 180,200" fill="#fef9c3" opacity="0.25"/>
<rect x="265" y="120" width="70" height="60" fill="#60a5fa"/>
<ellipse cx="300" cy="205" rx="45" ry="14" fill="#0f172a"/>
<rect x="0" y="200" width="600" height="40" fill="#78350f"/>
<ellipse cx="300" cy="215" rx="50" ry="12" fill="#1c1917"/>
<text x="480" y="90" font-size="17" fill="#fef9c3" text-anchor="middle">torcia sopra</text>
<text x="480" y="225" font-size="17" fill="#fef9c3" text-anchor="middle">ombra = forma dall'alto</text>
</svg>`
        },
        {
          label: "🌍 Mappe di altri popoli",
          html: `<p>Nel mondo si sono fatte mappe in tanti modi:</p>
<ul>
<li>🐚 Gli abitanti delle <b>Isole Marshall</b> (Oceano Pacifico) costruivano <b>mappe con bastoncini e conchiglie</b>: le conchiglie erano le isole, i bastoncini mostravano come si muovono le onde.</li>
<li>🏺 In <b>Mesopotamia</b> (l'attuale Iraq), circa 2600 anni fa, fu incisa su una tavoletta d'argilla una delle più antiche «mappe del mondo».</li>
<li>📜 La <b>Tavola Peutingeriana</b> è una copia medievale di una mappa romana delle strade: è lunga quasi <b>7 metri</b> e larga solo 34 cm, come un lunghissimo rotolo!</li>
</ul>`
        },
        {
          label: "🧩 Leggi la pianta del parco",
          html: `<p>Guarda la piantina e clicca sui punti: riesci a dire che cos'è ogni cosa, guardando solo la forma vista dall'alto?</p>`,
          widget: "labelDiagram",
          options: {
            svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#bbf7d0"/>
<path d="M0 150 L600 150" stroke="#d6d3d1" stroke-width="26"/>
<ellipse cx="130" cy="70" rx="80" ry="40" fill="#60a5fa"/>
<circle cx="330" cy="70" r="22" fill="#15803d"/>
<circle cx="380" cy="80" r="22" fill="#15803d"/>
<rect x="470" y="210" width="80" height="20" fill="#a16207"/>
<rect x="100" y="210" width="90" height="60" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<circle cx="320" cy="240" r="30" fill="#e5e7eb" stroke="#64748b" stroke-width="4"/>
</svg>`,
            spots: [
              { x: 130, y: 70, label: "Laghetto" },
              { x: 355, y: 75, label: "Alberi" },
              { x: 300, y: 150, label: "Vialetto" },
              { x: 510, y: 220, label: "Panchina" },
              { x: 145, y: 240, label: "Sabbiera" },
              { x: 320, y: 240, label: "Fontana" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle mappe",
      nodes: [
        { id: "alto", label: "Vista dall'alto", x: 50, y: 6, color: "#6366f1", html: "<p>Guardare le cose da sopra, come un uccellino.</p>", why: "<p>Dall'alto si vedono tutte le cose <b>insieme</b> e nella loro posizione vera, senza che una nasconda l'altra. Per questo i cartografi (chi fa le mappe) disegnano sempre dall'alto.</p>" },
        { id: "riduzione", label: "Riduzione in scala", x: 20, y: 30, color: "#f97316", html: "<p>Rimpicciolire tutto nello stesso modo.</p>", why: "<p>Un foglio non può essere grande come una città! Rimpicciolendo tutto <b>con la stessa misura</b> (per esempio 1 quadretto = 1 metro) le forme e le distanze restano giuste.</p>" },
        { id: "simboli", label: "Simboli", x: 50, y: 30, color: "#0ea5e9", html: "<p>Piccoli disegni, colori e linee al posto delle cose vere.</p>", why: "<p>Se disegnassimo ogni casa con tutte le finestre, la mappa sarebbe confusa. I simboli sono <b>semplici</b> e veloci da riconoscere.</p>" },
        { id: "legenda", label: "Legenda", x: 80, y: 30, color: "#a855f7", html: "<p>Il riquadro che spiega i simboli.</p>", why: "<p>La parola viene dal latino <i>legenda</i>, «le cose da leggere». Senza legenda i simboli sarebbero un codice segreto!</p>" },
        { id: "pianta", label: "Pianta", x: 20, y: 62, color: "#16a34a", html: "<p>Spazi piccoli: una stanza, una casa, la scuola.</p>", why: "<p>Si usa poca riduzione, quindi si vedono tanti particolari: porte, finestre, mobili. Gli <b>architetti</b> disegnano le piante prima di costruire una casa.</p>" },
        { id: "mappa", label: "Mappa", x: 50, y: 62, color: "#eab308", html: "<p>Spazi più grandi: il quartiere, la città.</p>", why: "<p>Si rimpicciolisce di più: le case diventano rettangolini e si vedono soprattutto le strade, le piazze e i parchi.</p>" },
        { id: "carta", label: "Carta geografica", x: 80, y: 62, color: "#ef4444", html: "<p>Spazi grandissimi: l'Italia, i continenti.</p>", why: "<p>Si rimpicciolisce tantissimo: una città diventa un puntino. Il geografo greco <b>Tolomeo</b>, circa 1900 anni fa, scrisse come disegnare il mondo con paralleli e meridiani.</p>" },
        { id: "colori", label: "Colori convenzionali", x: 50, y: 92, color: "#14b8a6", html: "<p>Azzurro = acqua, verde = pianura, marrone = montagna.</p>", why: "<p>«Convenzionale» vuol dire <b>deciso tutti insieme</b>. Se tutti usano gli stessi colori, chiunque nel mondo può leggere una carta senza sapere la lingua di chi l'ha fatta.</p>" }
      ],
      edges: [
        ["alto", "riduzione", "poi si fa la"],
        ["alto", "simboli", "si usano"],
        ["simboli", "legenda", "spiegati nella"],
        ["riduzione", "pianta", "poca:"],
        ["riduzione", "mappa", "di più:"],
        ["riduzione", "carta", "tantissima:"],
        ["simboli", "colori", "come i"],
        ["carta", "colori", "usa i"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: la legenda",
      questions: [
        { type: "mc", q: "A che cosa serve la legenda?", options: ["A spiegare i simboli della mappa", "A colorare la mappa", "A misurare la temperatura"], answer: 0, explain: "La legenda è il «dizionario» dei simboli." },
        { type: "mc", q: "Di solito, sulle carte, l'azzurro indica…", options: ["le montagne", "l'acqua", "le strade"], answer: 1, explain: "Azzurro = mari, laghi e fiumi." },
        { type: "tf", q: "Per disegnare il quartiere si usa la stessa riduzione della cameretta.", answer: false, explain: "Il quartiere è più grande: bisogna rimpicciolire di più." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare 📌",
      html: `<ul>
<li>Piante e mappe mostrano i luoghi <b>visti dall'alto</b>.</li>
<li>Per disegnarli si <b>rimpicciolisce</b> tutto nello stesso modo (riduzione in scala).</li>
<li><b>Pianta</b> = spazi piccoli; <b>mappa</b> = spazi più grandi; <b>carta geografica</b> = spazi grandissimi.</li>
<li>I <b>simboli</b> sono spiegati nella <b>legenda</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Pianta", d: "Disegno dall'alto di uno spazio piccolo, come una stanza." },
    { t: "Mappa", d: "Disegno dall'alto di uno spazio più grande, come un quartiere." },
    { t: "Carta geografica", d: "Disegno di territori molto grandi: regioni, Stati, continenti." },
    { t: "Visione zenitale", d: "Guardare dall'alto, proprio da sopra." },
    { t: "Riduzione in scala", d: "Rimpicciolire tutto nello stesso modo per farlo stare sul foglio." },
    { t: "Simbolo", d: "Un piccolo disegno o colore che sta al posto di una cosa vera." },
    { t: "Legenda", d: "Il riquadro che spiega che cosa vogliono dire i simboli." },
    { t: "Cartografo", d: "La persona che disegna le mappe." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Visto dall'alto, un bicchiere sembra…", options: ["un rettangolo", "un cerchio", "una stella"], answer: 1, explain: "Da sopra si vede il bordo rotondo: un cerchio." },
      { type: "mc", q: "Come si chiama la vista «a volo d'uccello», proprio da sopra?", options: ["Frontale", "Zenitale", "Laterale"], answer: 1, explain: "Visione zenitale = dall'alto." },
      { type: "text", q: "Come si chiama il riquadro che spiega i simboli di una mappa?", answer: ["legenda", "la legenda"], explain: "La legenda." },
      { type: "order", q: "Metti in ordine dal disegno di uno spazio più piccolo al più grande.", items: ["Pianta della cameretta", "Mappa del quartiere", "Carta geografica dell'Italia"], explain: "Pianta → mappa → carta geografica." },
      { type: "num", q: "1 quadretto = 1 passo. La classe è lunga 9 passi. Quanti quadretti disegni?", answer: 9, tol: 0, unit: "quadretti", explain: "9 passi = 9 quadretti." },
      { type: "tf", q: "Sulle carte geografiche la pianura è spesso colorata di verde.", answer: true, explain: "Verde = pianura, marrone = montagna, azzurro = acqua." },
      { type: "mc", q: "Visto dall'alto, un letto sembra…", options: ["un rettangolo", "un cerchio", "un triangolo"], answer: 0, explain: "Il letto da sopra è un rettangolo." },
      { type: "mc", q: "Perché si usano i simboli sulle mappe?", options: ["Per renderle più semplici da leggere", "Per nasconderle ai pirati", "Perché i disegni veri sono vietati"], answer: 0, explain: "I simboli sono semplici e veloci da riconoscere." },
      { type: "tf", q: "Rimpicciolire «in scala» vuol dire rimpicciolire ogni cosa in modo diverso.", answer: false, explain: "Tutto va rimpicciolito nello stesso modo, così le proporzioni restano giuste." },
      { type: "order", q: "Metti in ordine i passi per disegnare la pianta della classe.", items: ["Misuro la classe a passi", "Disegno il contorno sui quadretti", "Disegno porte, finestre e banchi", "Faccio la legenda"], explain: "Prima si misura, poi si disegna il contorno, poi l'interno, infine si spiegano i simboli." },
      { type: "mc", q: "Che cos'era la Forma Urbis?", options: ["Una pianta di Roma incisa sul marmo", "Un'app per le mappe", "Una bussola romana"], answer: 0, explain: "Una gigantesca pianta di marmo di Roma antica." }
    ]
  }
});
