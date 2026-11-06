TOPIC('it', {
  id: "m1-sci-cellula",
  title: "La cellula",
  intro: "Tutti gli esseri viventi, da un batterio a una balena, sono fatti di <b>cellule</b>. La cellula è la più piccola unità capace di vivere: si nutre, produce energia, cresce e si riproduce. Entriamo a esplorarla!",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "La teoria cellulare",
      html: `<p>Nel <b>1665</b> lo scienziato inglese <b>Robert Hooke</b> osservò al microscopio una fettina di sughero e vide tante piccole \"stanzette\": le chiamò <b>cellule</b> (dal latino <i>cellula</i>, piccola stanza).</p>
<p>Nell'Ottocento gli scienziati Schleiden, Schwann e Virchow formularono la <b>teoria cellulare</b>:</p>
<ol>
<li>tutti gli esseri viventi sono formati da una o più <b>cellule</b>;</li>
<li>la cellula è l'<b>unità fondamentale</b> della vita: è la più piccola parte che può vivere da sola;</li>
<li>ogni cellula nasce da un'<b>altra cellula</b>, che si divide.</li>
</ol>
<p>Gli organismi formati da una sola cellula si chiamano <b>unicellulari</b> (batteri, amebe, lieviti); quelli formati da tantissime cellule si chiamano <b>pluricellulari</b> (piante, animali, noi!).</p>`
    },
    {
      type: "text",
      title: "Quanto è piccola una cellula?",
      html: `<p>La maggior parte delle cellule misura tra <b>10 e 100 micrometri</b>. Un micrometro (µm) è un millesimo di millimetro!</p>
<p>Per vederle serve il <b>microscopio ottico</b>, che ingrandisce fino a circa 1.000–1.500 volte. Per osservare le parti più piccole si usa il <b>microscopio elettronico</b>, che ingrandisce anche più di 100.000 volte.</p>
<p>Ci sono però eccezioni: il <b>tuorlo dell'uovo</b> di gallina è una sola enorme cellula, e alcune cellule nervose (neuroni) sono lunghe più di un metro!</p>`
    },
    {
      type: "text",
      title: "Le tre parti fondamentali",
      html: `<p>Quasi tutte le cellule hanno tre parti principali:</p>
<ul>
<li><b>Membrana cellulare (o plasmatica)</b>: un sottile \"involucro\" che avvolge la cellula. Decide che cosa entra (nutrienti, acqua, ossigeno) e che cosa esce (rifiuti). È come la <b>porta di casa con un portinaio</b>.</li>
<li><b>Citoplasma</b>: una sostanza gelatinosa, fatta soprattutto di acqua, che riempie la cellula. Dentro galleggiano gli <b>organuli</b>, piccoli \"organi\" della cellula, ognuno con un compito.</li>
<li><b>Nucleo</b>: il \"centro di comando\". Contiene il <b>DNA</b>, le istruzioni per far funzionare la cellula e per costruirne di nuove. Al suo interno c'è il <b>nucleolo</b>, dove si costruiscono i ribosomi.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Dentro la cellula in 3D",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#f472b6", label: "Membrana cellulare" },
          { r: 0.95, color: "#fde68a", label: "Citoplasma" },
          { r: 0.42, color: "#8b5cf6", label: "Nucleo (membrana nucleare)" },
          { r: 0.16, color: "#1e1b4b", label: "Nucleolo" }
        ]
      },
      caption: "Ruota il modello: lo spicchio tagliato mostra la membrana, il citoplasma, il nucleo e il nucleolo al centro."
    },
    {
      type: "text",
      title: "Gli organuli: una piccola città",
      html: `<p>Possiamo immaginare la cellula come una <b>città</b>, dove ogni organulo ha il suo lavoro:</p>
<table>
<tr><th>Organulo</th><th>Che cosa fa</th><th>Nella città è…</th></tr>
<tr><td><b>Nucleo</b></td><td>Contiene il DNA e controlla la cellula</td><td>il municipio</td></tr>
<tr><td><b>Mitocondri</b></td><td>Producono energia con la respirazione cellulare (usano zuccheri e ossigeno)</td><td>la centrale elettrica</td></tr>
<tr><td><b>Ribosomi</b></td><td>Costruiscono le proteine</td><td>le fabbriche</td></tr>
<tr><td><b>Reticolo endoplasmatico</b></td><td>Rete di canali che trasporta le sostanze</td><td>le strade</td></tr>
<tr><td><b>Apparato di Golgi</b></td><td>Prepara, \"impacchetta\" e spedisce le sostanze</td><td>l'ufficio postale</td></tr>
<tr><td><b>Lisosomi</b></td><td>Digeriscono le sostanze e i rifiuti</td><td>i netturbini</td></tr>
<tr><td><b>Vacuoli</b></td><td>Immagazzinano acqua e sostanze</td><td>i magazzini</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Esempio pratico: osservare le cellule della cipolla",
      html: `<p>Con un microscopio scolastico puoi vedere vere cellule vegetali:</p>
<ol>
<li>Taglia una cipolla e stacca con una pinzetta la <b>pellicina trasparente</b> che si trova tra uno strato e l'altro.</li>
<li>Appoggiala su un vetrino con una goccia d'acqua.</li>
<li>Aggiungi una goccia di <b>tintura di iodio</b> (o di blu di metilene) per colorare i nuclei.</li>
<li>Copri con il vetrino copri-oggetto, facendo attenzione a non formare bolle.</li>
<li>Osserva prima con l'ingrandimento più basso, poi con quello più alto.</li>
</ol>
<p>Vedrai tante cellule a forma di <b>mattoncino</b>, ordinate come in un muro, ognuna con un puntino scuro: il <b>nucleo</b>. La forma regolare è dovuta alla <b>parete cellulare</b>.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per immaginare la cellula",
      intro: "La cellula è invisibile a occhio nudo: per capirla aiuta paragonarla a qualcosa che conosci. Scegli il paragone che funziona meglio per te.",
      tabs: [
        {
          label: "🏙️ La cellula come città",
          html: "<table><tr><th>Organulo</th><th>Nella città è…</th><th>Che cosa fa</th></tr><tr><td>Membrana cellulare</td><td>le mura con le porte e la dogana</td><td>decide chi entra e chi esce</td></tr><tr><td>Nucleo</td><td>il municipio con l'archivio</td><td>custodisce il DNA, le «istruzioni» della città</td></tr><tr><td>Mitocondri</td><td>le centrali elettriche</td><td>producono energia dal cibo e dall'ossigeno</td></tr><tr><td>Ribosomi</td><td>le piccole officine</td><td>costruiscono le proteine</td></tr><tr><td>Reticolo endoplasmatico</td><td>le strade e le catene di montaggio</td><td>trasporta e lavora le sostanze</td></tr><tr><td>Apparato di Golgi</td><td>l'ufficio postale</td><td>impacchetta e spedisce</td></tr><tr><td>Lisosomi</td><td>i netturbini</td><td>digeriscono rifiuti e parti vecchie</td></tr><tr><td>Vacuolo</td><td>il serbatoio e il magazzino</td><td>conserva acqua e sostanze</td></tr><tr><td>Cloroplasti (solo piante)</td><td>i pannelli solari</td><td>trasformano la luce in cibo</td></tr><tr><td>Parete cellulare (solo piante)</td><td>le mura di pietra</td><td>danno forma rigida e protezione</td></tr></table>"
        },
        {
          label: "🍪 La fabbrica di biscotti",
          html: "<p>Immagina una fabbrica di biscotti:</p><ul><li>Nell'<b>ufficio del direttore</b> (nucleo) c'è il libro delle ricette (DNA).</li><li>Le ricette vengono copiate e portate ai <b>forni</b> (ribosomi), dove si preparano i biscotti (proteine).</li><li>I biscotti viaggiano sui <b>nastri trasportatori</b> (reticolo endoplasmatico) fino al <b>reparto imballaggi</b> (Golgi), che li confeziona e li spedisce fuori.</li><li>Il <b>generatore</b> (mitocondri) dà corrente a tutta la fabbrica.</li><li>Il <b>cancello con il guardiano</b> (membrana) controlla le merci in entrata e in uscita.</li></ul><p>Se il libro delle ricette ha un errore, i biscotti vengono sbagliati: per questo il DNA è così protetto dentro il nucleo.</p>"
        },
        {
          label: "🔬 Una cellula animale in 3D",
          html: "<p>Ecco un modello 3D: la sfera grande al centro è il <b>nucleo</b> (N), quelle rosse allungate sono i <b>mitocondri</b> (M), le gialle il <b>Golgi</b> (G), le piccole blu i <b>lisosomi</b> (L) e i puntini viola i <b>ribosomi</b>. Ruotala: vedrai che gli organuli stanno sparsi in tutte le direzioni, immersi nel citoplasma.</p>",
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.75, color: "#7c3aed", label: "N" }, { x: 1.3, y: 0.4, z: 0.3, r: 0.3, color: "#ef4444", label: "M" }, { x: -1.2, y: -0.5, z: 0.6, r: 0.3, color: "#ef4444", label: "M" }, { x: 0.3, y: -1.3, z: -0.5, r: 0.3, color: "#ef4444", label: "M" }, { x: -0.4, y: 1.2, z: -0.8, r: 0.3, color: "#ef4444", label: "M" }, { x: 1.0, y: -0.7, z: 1.0, r: 0.35, color: "#f59e0b", label: "G" }, { x: -1.1, y: 0.9, z: 0.7, r: 0.2, color: "#3b82f6", label: "L" }, { x: 0.9, y: 1.0, z: -0.9, r: 0.2, color: "#3b82f6", label: "L" }, { x: 0.6, y: 0.8, z: 0.9, r: 0.08, color: "#a855f7" }, { x: -0.8, y: -0.9, z: -0.6, r: 0.08, color: "#a855f7" }, { x: 1.4, y: -0.2, z: -0.6, r: 0.08, color: "#a855f7" }, { x: -1.4, y: 0.1, z: -0.3, r: 0.08, color: "#a855f7" }, { x: 0.1, y: 0.6, z: 1.4, r: 0.08, color: "#a855f7" }, { x: -0.3, y: -0.7, z: 1.3, r: 0.08, color: "#a855f7" } ], bonds: [] }
        },
        {
          label: "🧽 Il sughero di Hooke",
          html: "<p>Nel 1665 Robert Hooke osservò una fettina sottilissima di <b>sughero</b> con un microscopio costruito da lui. Vide tante piccole celle vuote, come le stanzette dei monaci (in latino <i>cellula</i> = piccola stanza). In realtà vedeva solo le pareti di cellule vegetali morte.</p><p>Puoi rifarlo anche tu con una lente d'ingrandimento forte e un tappo di sughero tagliato sottile: vedrai un reticolo a nido d'ape.</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#fef3c7"/><g fill="#fde68a" stroke="#92400e" stroke-width="4"><polygon points="60,40 100,20 140,40 140,80 100,100 60,80"/><polygon points="140,40 180,20 220,40 220,80 180,100 140,80"/><polygon points="220,40 260,20 300,40 300,80 260,100 220,80"/><polygon points="100,100 140,80 180,100 180,140 140,160 100,140"/><polygon points="180,100 220,80 260,100 260,140 220,160 180,140"/><polygon points="260,100 300,80 340,100 340,140 300,160 260,140"/><polygon points="60,160 100,140 140,160 140,200 100,220 60,200"/><polygon points="140,160 180,140 220,160 220,200 180,220 140,200"/><polygon points="220,160 260,140 300,160 300,200 260,220 220,200"/></g><text x="470" y="100" font-size="20" text-anchor="middle" fill="#78350f" font-weight="bold">Il sughero</text><text x="470" y="130" font-size="18" text-anchor="middle" fill="#78350f">visto al microscopio</text><text x="470" y="160" font-size="18" text-anchor="middle" fill="#78350f">(Hooke, 1665)</text></svg>`
        },
        {
          label: "📏 Quanto è piccola?",
          html: "<p>Una cellula della pelle misura circa <b>30 micrometri</b> (0,03 mm). Ne servirebbero circa <b>30 in fila per fare 1 millimetro</b>.</p><p>Se ingrandissimo una cellula fino a farla grande come la tua <b>aula</b>, il nucleo sarebbe grande come una cattedra e un mitocondrio come un astuccio. Il tuo corpo, ingrandito nello stesso modo, sarebbe alto più di 300 chilometri!</p><p>Nel corpo umano ci sono circa <b>37 mila miliardi</b> di cellule.</p>"
        }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: le parti della cellula",
      questions: [
        { type: "mc", q: "Quale parte della cellula contiene il DNA?", options: ["La membrana", "Il citoplasma", "Il nucleo", "Il vacuolo"], answer: 2, explain: "Il nucleo contiene il DNA, con le istruzioni per la vita della cellula." },
        { type: "mc", q: "Quali organuli producono energia?", options: ["Ribosomi", "Mitocondri", "Lisosomi", "Vacuoli"], answer: 1, explain: "I mitocondri sono le centrali energetiche: fanno la respirazione cellulare." },
        { type: "tf", q: "Gli organismi unicellulari sono formati da una sola cellula.", answer: true, explain: "Per esempio batteri, amebe e lieviti." },
        { type: "text", q: "Come si chiama lo scienziato che nel 1665 chiamò \"cellule\" le stanzette del sughero?", answer: ["hooke", "robert hooke"], explain: "Fu Robert Hooke, osservando il sughero al microscopio." }
      ]
    },
    {
      type: "text",
      title: "Cellula animale e cellula vegetale",
      html: `<p>Le cellule degli animali e quelle delle piante si somigliano, ma hanno alcune differenze importanti.</p>
<p>La <b>cellula vegetale</b> ha in più:</p>
<ul>
<li>la <b>parete cellulare</b>, un rivestimento rigido di <b>cellulosa</b> fuori dalla membrana: dà forma e sostegno (per questo le piante stanno dritte anche senza scheletro);</li>
<li>i <b>cloroplasti</b>, organuli verdi che contengono <b>clorofilla</b> e fanno la <b>fotosintesi</b>: trasformano la luce del Sole, l'acqua e l'anidride carbonica in zuccheri e ossigeno;</li>
<li>un <b>grande vacuolo centrale</b> pieno d'acqua, che tiene la cellula \"gonfia\".</li>
</ul>
<p>La <b>cellula animale</b> non ha parete né cloroplasti, ha una forma più <b>tondeggiante e variabile</b> e vacuoli piccoli.</p>
<table>
<tr><th></th><th>Animale</th><th>Vegetale</th></tr>
<tr><td>Membrana, citoplasma, nucleo</td><td>✔️</td><td>✔️</td></tr>
<tr><td>Mitocondri</td><td>✔️</td><td>✔️</td></tr>
<tr><td>Parete cellulare</td><td>❌</td><td>✔️</td></tr>
<tr><td>Cloroplasti</td><td>❌</td><td>✔️</td></tr>
<tr><td>Grande vacuolo</td><td>❌</td><td>✔️</td></tr>
<tr><td>Forma</td><td>tondeggiante, variabile</td><td>regolare, spesso rettangolare</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "Cellula animale e cellula vegetale a confronto",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#ffffff"/>
<text x="160" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#be185d">Cellula animale</text>
<ellipse cx="160" cy="155" rx="130" ry="105" fill="#fef3c7" stroke="#db2777" stroke-width="4"/>
<circle cx="150" cy="150" r="40" fill="#c4b5fd" stroke="#6d28d9" stroke-width="3"/>
<circle cx="155" cy="145" r="13" fill="#4c1d95"/>
<ellipse cx="230" cy="110" rx="22" ry="11" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
<path d="M214 110 q8 -8 16 0 q8 8 16 0" fill="none" stroke="#c2410c" stroke-width="2"/>
<ellipse cx="90" cy="210" rx="22" ry="11" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
<circle cx="230" cy="200" r="10" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<g fill="#334155"><circle cx="100" cy="110" r="3"/><circle cx="110" cy="100" r="3"/><circle cx="200" cy="230" r="3"/><circle cx="215" cy="160" r="3"/></g>
<text x="480" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#15803d">Cellula vegetale</text>
<rect x="350" y="45" width="260" height="225" rx="8" fill="#dcfce7" stroke="#166534" stroke-width="8"/>
<rect x="360" y="55" width="240" height="205" rx="5" fill="#fefce8" stroke="#db2777" stroke-width="3"/>
<rect x="440" y="95" width="120" height="120" rx="20" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<circle cx="400" cy="100" r="28" fill="#c4b5fd" stroke="#6d28d9" stroke-width="3"/>
<circle cx="403" cy="97" r="9" fill="#4c1d95"/>
<g fill="#22c55e" stroke="#14532d" stroke-width="2">
<ellipse cx="390" cy="200" rx="18" ry="10"/><ellipse cx="580" cy="80" rx="16" ry="9"/><ellipse cx="420" cy="245" rx="16" ry="9"/><ellipse cx="585" cy="235" rx="16" ry="9"/>
</g>
<ellipse cx="530" cy="245" rx="18" ry="9" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
</svg>`,
      caption: "Nella cellula vegetale si notano la parete cellulare (bordo verde spesso), i cloroplasti (verdi) e il grande vacuolo (azzurro)."
    },
    {
      type: "widget",
      title: "Riconosci le parti della cellula vegetale",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<rect width="400" height="300" fill="#ffffff"/>
<rect x="40" y="30" width="320" height="240" rx="10" fill="#dcfce7" stroke="#166534" stroke-width="10"/>
<rect x="52" y="42" width="296" height="216" rx="6" fill="#fefce8" stroke="#db2777" stroke-width="3"/>
<rect x="170" y="80" width="140" height="140" rx="24" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<circle cx="105" cy="95" r="32" fill="#c4b5fd" stroke="#6d28d9" stroke-width="3"/>
<circle cx="108" cy="92" r="10" fill="#4c1d95"/>
<ellipse cx="100" cy="210" rx="22" ry="12" fill="#22c55e" stroke="#14532d" stroke-width="2"/>
<ellipse cx="140" cy="240" rx="20" ry="9" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 44, y: 150, label: "Parete cellulare" },
          { x: 58, y: 60, label: "Membrana cellulare" },
          { x: 105, y: 120, label: "Nucleo" },
          { x: 240, y: 150, label: "Vacuolo" },
          { x: 100, y: 210, label: "Cloroplasto" },
          { x: 140, y: 240, label: "Mitocondrio" },
          { x: 150, y: 160, label: "Citoplasma" }
        ]
      },
      caption: "Clicca su ogni punto e scegli il nome giusto."
    },
    {
      type: "curiosity",
      title: "Quante cellule hai?",
      html: `<p>Il corpo di un adulto è formato da circa <b>30.000 miliardi di cellule</b> (30 seguito da 12 zeri)! E nel nostro intestino vivono ancora più batteri amici.</p>
<p>Le cellule non vivono tutte lo stesso tempo: i <b>globuli rossi</b> vivono circa 120 giorni, le cellule della pelle qualche settimana, mentre molti <b>neuroni</b> del cervello durano tutta la vita. Ogni secondo nel tuo corpo nascono milioni di nuove cellule!</p>`
    },
    {
      type: "curiosity",
      title: "Una cellula per ogni lavoro",
      html: `<p>Negli organismi pluricellulari le cellule sono <b>specializzate</b>: hanno forme diverse a seconda del lavoro.</p>
<ul>
<li>I <b>neuroni</b> hanno lunghi \"fili\" per trasmettere messaggi elettrici.</li>
<li>I <b>globuli rossi</b> sono dischetti schiacciati e senza nucleo, per trasportare più ossigeno.</li>
<li>Le <b>cellule muscolari</b> sono lunghe e possono accorciarsi.</li>
</ul>
<p>Cellule uguali formano un <b>tessuto</b>, tessuti diversi formano un <b>organo</b> (come il cuore), più organi formano un <b>apparato</b>, e gli apparati insieme formano l'<b>organismo</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: perché l'insalata appassisce?",
      html: `<p>Se lasci l'insalata fuori dal frigo diventa molle. Perché?</p>
<p>Le cellule vegetali tengono la pianta \"tesa\" grazie al <b>grande vacuolo pieno d'acqua</b>, che spinge contro la parete cellulare, come l'aria in un pallone.</p>
<p>Quando la foglia perde acqua, i vacuoli si svuotano e le cellule si \"sgonfiano\": la foglia appassisce. Se la metti in acqua fredda per un po', le cellule riassorbono acqua e la foglia torna croccante!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: animale o vegetale?",
      questions: [
        { type: "mc", q: "Quale struttura c'è SOLO nella cellula vegetale?", options: ["Nucleo", "Membrana", "Cloroplasto", "Mitocondrio"], answer: 2, explain: "I cloroplasti, che fanno la fotosintesi, si trovano solo nelle cellule vegetali (e nelle alghe)." },
        { type: "tf", q: "Anche le cellule vegetali hanno i mitocondri.", answer: true, explain: "Sì: anche le piante respirano e producono energia con i mitocondri." },
        { type: "mc", q: "Di che cosa è fatta la parete cellulare delle piante?", options: ["Cellulosa", "Grasso", "Ossa", "Clorofilla"], answer: 0, explain: "La parete è fatta di cellulosa, la stessa sostanza che si usa per fare la carta." }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: come è nata la teoria cellulare",
      nodes: [
        { id: "lenti", label: "Lenti e microscopi", x: 50, y: 6, color: "#64748b", html: "Strumenti che ingrandiscono ciò che l'occhio non vede.", why: "Gli occhialai olandesi verso il 1590 scoprirono che mettendo due lenti in fila l'immagine si ingrandisce molto. Senza questo strumento nessuno avrebbe mai visto una cellula." },
        { id: "hooke", label: "Hooke (1665)", x: 20, y: 24, color: "#f59e0b", html: "Robert Hooke osserva il sughero e chiama «cellule» le stanzette che vede.", why: "Aveva costruito un microscopio composto e pubblicò i suoi disegni nel libro Micrographia. Vedeva però solo le pareti di cellule morte." },
        { id: "leeuwenhoek", label: "Van Leeuwenhoek (1674)", x: 80, y: 24, color: "#ea580c", html: "Antoni van Leeuwenhoek vede per primo cellule vive: batteri, globuli rossi, protozoi in una goccia d'acqua.", why: "Costruiva lenti piccolissime e perfette che ingrandivano fino a circa 270 volte. Chiamò «animaletti» gli esseri viventi microscopici che vedeva muoversi." },
        { id: "schleiden", label: "Schleiden (1838)", x: 20, y: 46, color: "#16a34a", html: "Matthias Schleiden: tutte le piante sono fatte di cellule.", why: "Osservando moltissimi tessuti vegetali al microscopio trovò cellule ovunque: foglie, radici, fusti." },
        { id: "schwann", label: "Schwann (1839)", x: 80, y: 46, color: "#0ea5e9", html: "Theodor Schwann: anche tutti gli animali sono fatti di cellule.", why: "Parlando con Schleiden capì che le strutture che vedeva nei tessuti animali erano simili alle cellule vegetali: quindi la cellula è l'unità comune di tutti i viventi." },
        { id: "virchow", label: "Virchow (1855)", x: 50, y: 64, color: "#dc2626", html: "Rudolf Virchow: ogni cellula nasce da un'altra cellula (omnis cellula e cellula).", why: "Prima molti credevano che la vita potesse nascere dal nulla (generazione spontanea). Virchow, studiando le malattie, vide che le cellule si moltiplicano dividendosi. Pasteur poco dopo dimostrò con gli esperimenti che la generazione spontanea non esiste." },
        { id: "teoria", label: "Teoria cellulare", x: 50, y: 82, color: "#7c3aed", html: "1) Tutti i viventi sono fatti di cellule. 2) La cellula è l'unità più piccola di vita. 3) Ogni cellula deriva da un'altra cellula.", why: "È il risultato di quasi due secoli di osservazioni. È una delle basi della biologia, come la teoria dell'evoluzione." },
        { id: "oggi", label: "Oggi", x: 50, y: 96, color: "#0f766e", html: "Il microscopio elettronico (dal 1931) mostra gli organuli; si studia il DNA nel nucleo.", why: "Il microscopio elettronico usa elettroni invece della luce e ingrandisce fino a milioni di volte: così si sono scoperti ribosomi, reticolo e la struttura dei mitocondri." }
      ],
      edges: [ ["lenti", "hooke", "permettono di vedere"], ["lenti", "leeuwenhoek", "lenti migliori"], ["hooke", "schleiden", "nome cellula"], ["leeuwenhoek", "schwann", "cellule vive"], ["schleiden", "schwann", "confronto piante-animali"], ["schleiden", "teoria", "punto 1"], ["schwann", "teoria", "punti 1 e 2"], ["virchow", "teoria", "punto 3"], ["teoria", "oggi", "si approfondisce"] ]
    }
  ],
  glossary: [
    { t: "Cellula", d: "La più piccola unità vivente." },
    { t: "Membrana cellulare", d: "Involucro sottile che avvolge la cellula e controlla gli scambi con l'esterno." },
    { t: "Citoplasma", d: "Sostanza gelatinosa che riempie la cellula, dove si trovano gli organuli." },
    { t: "Nucleo", d: "Centro di controllo della cellula, contiene il DNA." },
    { t: "DNA", d: "Molecola che contiene le informazioni ereditarie." },
    { t: "Organulo", d: "Struttura della cellula con un compito preciso." },
    { t: "Mitocondrio", d: "Organulo che produce energia con la respirazione cellulare." },
    { t: "Cloroplasto", d: "Organulo verde delle cellule vegetali che fa la fotosintesi." },
    { t: "Parete cellulare", d: "Rivestimento rigido di cellulosa delle cellule vegetali." },
    { t: "Unicellulare", d: "Organismo formato da una sola cellula." },
    { t: "Tessuto", d: "Insieme di cellule uguali che svolgono la stessa funzione." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Secondo la teoria cellulare, ogni cellula…", options: ["nasce dal nulla", "nasce da un'altra cellula", "nasce dal sughero", "vive per sempre"], answer: 1, explain: "Ogni cellula deriva dalla divisione di un'altra cellula." },
      { type: "mc", q: "Quale parte controlla che cosa entra ed esce dalla cellula?", options: ["Il nucleo", "La membrana cellulare", "Il nucleolo", "Il citoplasma"], answer: 1, explain: "La membrana è come un portinaio: seleziona le sostanze." },
      { type: "mc", q: "Quale coppia contiene solo strutture tipiche della cellula vegetale?", options: ["Parete e cloroplasti", "Nucleo e mitocondri", "Membrana e citoplasma", "Ribosomi e lisosomi"], answer: 0, explain: "Parete cellulare e cloroplasti mancano nella cellula animale." },
      { type: "tf", q: "Il tuorlo dell'uovo di gallina è una sola cellula.", answer: true, explain: "È una cellula enorme, piena di sostanze nutritive." },
      { type: "text", q: "Come si chiama il pigmento verde contenuto nei cloroplasti?", answer: ["clorofilla", "la clorofilla"], explain: "La clorofilla cattura la luce del Sole per la fotosintesi." },
      { type: "mc", q: "Che cosa fanno i ribosomi?", options: ["Producono energia", "Costruiscono le proteine", "Digeriscono i rifiuti", "Fanno la fotosintesi"], answer: 1, explain: "I ribosomi sono le fabbriche delle proteine." },
      { type: "order", q: "Metti in ordine dal più semplice al più complesso", items: ["Cellula", "Tessuto", "Organo", "Apparato", "Organismo"], explain: "Cellule → tessuti → organi → apparati → organismo." },
      { type: "tf", q: "Un batterio è un organismo pluricellulare.", answer: false, explain: "I batteri sono unicellulari: formati da una sola cellula." },
      { type: "mc", q: "Quale strumento serve per vedere le cellule?", options: ["Il telescopio", "Il microscopio", "Il termometro", "La lente da sole"], answer: 1, explain: "Le cellule sono microscopiche: serve il microscopio." },
      { type: "num", q: "In che anno Robert Hooke osservò le cellule del sughero?", answer: 1665, tol: 0, explain: "Nel 1665, pubblicandolo nel libro Micrographia." },
      { type: "mc", q: "Perché una foglia di insalata appassisce senz'acqua?", options: ["Perdono il nucleo", "I vacuoli si svuotano", "Si rompono i mitocondri", "La clorofilla diventa gialla"], answer: 1, explain: "Senza acqua i vacuoli si svuotano e le cellule non restano più \"gonfie\"." }
    ]
  }
});
