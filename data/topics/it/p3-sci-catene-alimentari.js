TOPIC('it', {
  id: "p3-sci-catene-alimentari",
  title: "Le catene alimentari",
  intro: `In natura tutti mangiano qualcuno… o qualcosa! L'erba è mangiata dal coniglio, il coniglio dalla volpe. Questi passaggi formano una <b>catena alimentare</b>. Scopriamo chi sono i <b>produttori</b>, i <b>consumatori</b> e i <b>decompositori</b>, e perché ognuno è importante.`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Chi mangia chi?",
      html: `<p>Ogni essere vivente ha bisogno di <b>energia</b> per crescere, muoversi e vivere. Questa energia arriva dal <b>cibo</b>.</p>
<p>Se mettiamo in fila chi mangia chi, otteniamo una <b>catena alimentare</b>. Ecco un esempio in un prato:</p>
<p style="font-size:1.2em">🌿 erba → 🐰 coniglio → 🦊 volpe</p>
<p>La freccia si legge <b>"è mangiato da"</b>: l'erba è mangiata dal coniglio, il coniglio è mangiato dalla volpe. La freccia mostra la strada che fa l'energia.</p>`
    },
    {
      type: "text",
      title: "Passo 1: i produttori",
      html: `<p>All'inizio di <b>ogni</b> catena alimentare c'è sempre una <b>pianta</b> (o un'alga). Le piante sono i <b>produttori</b>: il loro cibo se lo <b>fabbricano da sole</b>!</p>
<ul>
<li>Prendono la <b>luce del Sole</b> con le foglie verdi;</li>
<li>prendono l'<b>acqua</b> e i sali minerali dal terreno con le radici;</li>
<li>prendono l'<b>anidride carbonica</b> dall'aria;</li>
<li>con tutto questo producono <b>zuccheri</b> (il loro cibo) e liberano <b>ossigeno</b>.</li>
</ul>
<p>Questo "lavoro" si chiama <b>fotosintesi</b>, che vuol dire "mettere insieme con la luce".</p>`
    },
    {
      type: "text",
      title: "Passo 2: i consumatori",
      html: `<p>Gli animali non sanno fabbricare il cibo: devono <b>mangiare</b> piante o altri animali. Per questo si chiamano <b>consumatori</b>.</p>
<ul>
<li><b>Erbivori</b> (consumatori primari): mangiano solo vegetali. Esempi: coniglio, mucca, cavalletta, bruco, cervo.</li>
<li><b>Carnivori</b> (consumatori secondari e terziari): mangiano altri animali. Esempi: volpe, lupo, aquila, ragno, leone.</li>
<li><b>Onnivori</b>: mangiano sia vegetali sia animali. Esempi: orso, cinghiale, riccio, gallina… e anche noi esseri umani!</li>
</ul>
<p>Il carnivoro che sta in cima e non viene mangiato da nessun altro animale si chiama <b>superpredatore</b> (per esempio l'aquila reale o l'orca).</p>`
    },
    {
      type: "text",
      title: "Passo 3: i decompositori",
      html: `<p>Che cosa succede alle foglie cadute, agli animali morti, alla cacca degli animali? Ci pensano i <b>decompositori</b>: <b>funghi</b>, <b>batteri</b> e piccoli animali come <b>lombrichi</b>.</p>
<p>Mangiano i resti e li "smontano" in pezzettini piccolissimi: i <b>sali minerali</b>. Questi tornano nel terreno e le radici delle piante li riassorbono.</p>
<p>Così la catena diventa un <b>cerchio</b>: niente si spreca! I decompositori sono i <b>"netturbini"</b> e i <b>"riciclatori"</b> della natura.</p>`
    },
    {
      type: "svg",
      title: "Il cerchio della vita in un prato",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="fa" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker></defs>
<rect width="600" height="340" fill="#ecfccb"/>
<circle cx="545" cy="45" r="30" fill="#facc15"/>
<text x="545" y="95" font-size="14" text-anchor="middle" fill="#92400e">Sole</text>
<path d="M515 60 L420 100" stroke="#f59e0b" stroke-width="4" stroke-dasharray="8 6" marker-end="url(#fa)"/>
<rect x="330" y="105" width="130" height="60" rx="14" fill="#22c55e"/>
<text x="395" y="132" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">🌿 Erba</text>
<text x="395" y="153" font-size="13" text-anchor="middle" fill="#ffffff">PRODUTTORE</text>
<rect x="60" y="105" width="150" height="60" rx="14" fill="#f97316"/>
<text x="135" y="132" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">🐰 Coniglio</text>
<text x="135" y="153" font-size="13" text-anchor="middle" fill="#ffffff">ERBIVORO</text>
<rect x="60" y="235" width="150" height="60" rx="14" fill="#dc2626"/>
<text x="135" y="262" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">🦊 Volpe</text>
<text x="135" y="283" font-size="13" text-anchor="middle" fill="#ffffff">CARNIVORO</text>
<rect x="320" y="235" width="160" height="60" rx="14" fill="#92400e"/>
<text x="400" y="262" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">🍄🪱 Funghi, vermi</text>
<text x="400" y="283" font-size="13" text-anchor="middle" fill="#ffffff">DECOMPOSITORI</text>
<path d="M328 135 L216 135" stroke="#334155" stroke-width="4" marker-end="url(#fa)"/>
<path d="M135 167 L135 229" stroke="#334155" stroke-width="4" marker-end="url(#fa)"/>
<path d="M212 265 L314 265" stroke="#334155" stroke-width="4" marker-end="url(#fa)"/>
<path d="M400 233 L400 171" stroke="#334155" stroke-width="4" marker-end="url(#fa)"/>
<text x="272" y="125" font-size="13" text-anchor="middle" fill="#334155">è mangiata da</text>
<text x="70" y="205" font-size="13" fill="#334155">è mangiato da</text>
<text x="262" y="255" font-size="13" text-anchor="middle" fill="#334155">quando muore</text>
<text x="490" y="205" font-size="13" text-anchor="middle" fill="#334155">sali minerali</text>
<text x="490" y="222" font-size="13" text-anchor="middle" fill="#334155">nel terreno</text>
</svg>`,
      caption: "Le frecce mostrano il viaggio dell'energia e della materia: dal Sole alle piante, agli animali, ai decompositori e di nuovo alle piante."
    },
    {
      type: "quiz",
      title: "Mini-quiz: produttori e consumatori",
      questions: [
        { type: "mc", q: "Chi c'è sempre all'inizio di una catena alimentare?", options: ["Un carnivoro", "Una pianta (un produttore)", "Un fungo"], answer: 1, explain: "Le piante fabbricano il cibo con la luce del Sole: sono i produttori, il primo anello." },
        { type: "mc", q: "La mucca mangia solo erba. È un…", options: ["erbivoro", "carnivoro", "decompositore"], answer: 0, explain: "Chi mangia solo vegetali è un erbivoro (consumatore primario)." },
        { type: "tf", q: "I funghi e i lombrichi sono decompositori.", answer: true, explain: "Trasformano i resti di piante e animali in sali minerali per il terreno." }
      ]
    },
    {
      type: "widget",
      title: "Gioco: in che gruppo va?",
      widget: "classify",
      caption: "Metti ogni essere vivente nel gruppo giusto.",
      options: {
        groups: ["🌿 Produttori", "🐰 Erbivori", "🦊 Carnivori", "🐻 Onnivori", "🍄 Decompositori"],
        items: [
          ["🌳 quercia", 0], ["🌾 grano", 0], ["🟢 alga", 0],
          ["🐄 mucca", 1], ["🐛 bruco", 1], ["🦌 cervo", 1],
          ["🐺 lupo", 2], ["🦅 aquila", 2], ["🕷️ ragno", 2],
          ["🐻 orso", 3], ["🐗 cinghiale", 3],
          ["🍄 fungo", 4], ["🪱 lombrico", 4]
        ]
      }
    },
    {
      type: "svg",
      title: "La piramide dell'energia",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<polygon points="300,20 350,85 250,85" fill="#dc2626"/>
<polygon points="250,85 350,85 400,150 200,150" fill="#f97316"/>
<polygon points="200,150 400,150 450,215 150,215" fill="#facc15"/>
<polygon points="150,215 450,215 500,280 100,280" fill="#22c55e"/>
<text x="300" y="75" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">🦅</text>
<text x="300" y="125" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">🐍 serpenti</text>
<text x="300" y="190" font-size="15" text-anchor="middle" fill="#78350f" font-weight="bold">🐭 topi</text>
<text x="300" y="255" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">🌾 piante e semi</text>
<text x="515" y="60" font-size="14" fill="#991b1b">pochissimi</text>
<text x="525" y="270" font-size="14" fill="#166534">tantissimi</text>
<text x="20" y="60" font-size="14" fill="#334155">1 kg</text>
<text x="20" y="125" font-size="14" fill="#334155">10 kg</text>
<text x="20" y="190" font-size="14" fill="#334155">100 kg</text>
<text x="20" y="255" font-size="14" fill="#334155">1000 kg</text>
<text x="300" y="308" font-size="14" text-anchor="middle" fill="#334155">A ogni gradino passa solo circa 1/10 dell'energia</text>
</svg>`,
      caption: "Per far crescere 1 kg di aquila servono tanti serpenti, tantissimi topi e una montagna di piante (numeri arrotondati)."
    },
    {
      type: "text",
      title: "Perché in cima ci sono pochi animali?",
      html: `<p>Quando un animale mangia, usa quasi tutta l'energia del cibo per <b>vivere</b>: respirare, correre, scaldarsi. Solo una piccola parte (circa <b>un decimo</b>) diventa il suo corpo e passa a chi lo mangerà.</p>
<p>Per questo le piante sono tantissime, gli erbivori un po' meno, i carnivori pochi e i superpredatori pochissimi. Disegnando questi numeri a gradini si ottiene una <b>piramide alimentare</b> (o piramide ecologica).</p>`
    },
    {
      type: "3d",
      title: "La piramide alimentare in 3D",
      scene: "solid",
      options: { shape: "pyramid", n: 4, r: 1.2, h: 1.3, color: "#22c55e", labels: false },
      caption: "Immagina la piramide divisa in 4 piani: la base larga sono le piante, la punta stretta i superpredatori. Ruotala e pensa: quanti \"mattoni\" di erba servono per tenere su la punta?"
    },
    {
      type: "text",
      title: "Le reti alimentari",
      html: `<p>In natura le cose sono più intrecciate. Il coniglio è mangiato dalla volpe, ma anche dall'aquila e dal lupo. La volpe mangia conigli, ma anche topi, uova e frutti. Le tante catene si incrociano e formano una <b>rete alimentare</b>, come una ragnatela.</p>
<p>Se un anello sparisce, tutta la rete ne risente. Per esempio: se si eliminano tutte le volpi, i conigli aumentano troppo, mangiano tutta l'erba… e alla fine anche i conigli restano senza cibo.</p>`
    },
    {
      type: "widget",
      title: "Costruisci la catena: chi viene dopo?",
      widget: "match",
      options: {
        pairs: [
          ["🌾 grano", "🐭 topo"],
          ["🐭 topo", "🐍 serpente"],
          ["🍃 foglia di gelso", "🐛 baco da seta"],
          ["🦗 cavalletta", "🐸 rana"],
          ["🟢 alghe del mare", "🦐 piccoli crostacei"],
          ["🦐 krill", "🐋 balenottera"]
        ]
      },
      caption: "Abbina ogni essere vivente a chi lo mangia (l'anello successivo della catena)."
    },
    {
      type: "example",
      title: "Esempio pratico: una catena nel mare",
      html: `<p>Anche nel mare il primo anello è un produttore: il <b>fitoplancton</b>, alghe minuscole che galleggiano e fanno la fotosintesi.</p>
<p style="font-size:1.1em">🟢 fitoplancton → 🦐 zooplancton (piccoli crostacei) → 🐟 acciuga → 🐟 tonno → 🦈 squalo</p>
<p>Il fitoplancton produce anche <b>circa metà dell'ossigeno</b> che respiriamo sulla Terra!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la catena nel tuo piatto",
      html: `<p>Anche tu fai parte di catene alimentari. Pensa alla merenda:</p>
<ul>
<li>🌾 grano → 🍞 pane → 🧒 <b>tu</b>: sei un consumatore primario (mangi un vegetale).</li>
<li>🌱 erba → 🐄 mucca → 🥛 latte → 🧒 <b>tu</b>: sei un consumatore secondario.</li>
</ul>
<p>E la buccia della mela che finisce nel <b>compost</b>? Lì lombrichi, funghi e batteri la trasformano in terriccio buono per l'orto: i decompositori al lavoro in giardino!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… l'animale più grande mangia tra i più piccoli?",
      html: `<p>La <b>balenottera azzurra</b>, lunga fino a circa 30 metri, è l'animale più grande mai esistito. Eppure mangia soprattutto <b>krill</b>, gamberetti lunghi pochi centimetri! Ne filtra diverse tonnellate al giorno, aprendo la bocca e trattenendoli con i fanoni, come un enorme colino.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… esistono piante \"carnivore\"?",
      html: `<p>La <b>dionea</b> (o pigliamosche) ha foglie a forma di trappola che si chiudono di scatto quando un insetto le tocca. Anche in Italia vivono piante carnivore, come la <b>drosera</b> nelle torbiere di montagna. Però anche loro fanno la fotosintesi: gli insetti servono solo come "integratore" di sali minerali, perché vivono in terreni poveri.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… nel parco di Yellowstone i lupi hanno salvato i fiumi?",
      html: `<p>Negli Stati Uniti, nel parco di Yellowstone, i lupi erano stati eliminati. I cervi aumentarono moltissimo e mangiarono i giovani alberi lungo i fiumi. Nel <b>1995</b> i lupi furono riportati nel parco: i cervi diminuirono e cambiarono abitudini, gli alberi poterono ricrescere in molte zone e tornarono uccelli e castori. Un solo anello può cambiare tutta la rete!</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la catena alimentare",
      intro: "Se le frecce ti confondono, prova uno di questi modi diversi di vedere la stessa idea.",
      tabs: [
        {
          label: "🔋 Come le pile",
          html: `<p>Immagina l'energia come una <b>batteria</b>. Il Sole ricarica le piante. Il coniglio mangia l'erba e prende la sua carica, ma ne consuma quasi tutta per saltare e scaldarsi. Alla volpe arriva solo un pezzettino di carica.</p>
<p>Ecco perché la freccia va <b>da chi è mangiato a chi mangia</b>: segue la carica che passa di mano in mano, come in una staffetta.</p>`
        },
        {
          label: "🇬🇧 Come lo dicono in inglese",
          html: `<p>Nelle scuole inglesi si parla di <b>food chain</b> (catena) e <b>food web</b> (rete, ragnatela). I ruoli si chiamano:</p>
<ul>
<li><b>Producer</b> = produttore (chi produce);</li>
<li><b>Consumer</b> = consumatore (chi consuma);</li>
<li><b>Decomposer</b> = decompositore;</li>
<li><b>Predator</b> e <b>prey</b> = predatore e preda.</li>
</ul>
<p>In molte scuole americane si fa un gioco: ogni bambino ha un cartellino (erba, coniglio, volpe…) e si legano tra loro con un <b>gomitolo di lana</b>. Alla fine si vede una vera ragnatela! Se uno lascia andare il filo, tutta la rete si allenta.</p>`
        },
        {
          label: "🧩 Gioco di abbinamento",
          html: `<p>Abbina ogni parola alla sua definizione semplice.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Produttore", "Si fa il cibo con la luce"],
              ["Erbivoro", "Mangia solo vegetali"],
              ["Carnivoro", "Mangia altri animali"],
              ["Onnivoro", "Mangia di tutto"],
              ["Decompositore", "Ricicla i resti in sali minerali"]
            ]
          }
        },
        {
          label: "🌍 Catene in tutto il mondo",
          html: `<p>Ogni ambiente della Terra ha le sue catene. Gira il globo:</p>
<ul>
<li><b>Savana africana</b>: erba → zebra → leone.</li>
<li><b>Artide</b>: alghe → krill e pesci → foca → orso polare.</li>
<li><b>Australia</b>: foglie di eucalipto → koala (che mangia quasi solo quelle!).</li>
<li><b>Alpi</b>: erba → camoscio → aquila reale.</li>
<li><b>Amazzonia</b>: frutti → scimmia → giaguaro.</li>
</ul>`,
          scene: "globe",
          options: {
            points: [
              { lat: -2.3, lon: 34.8, label: "Savana: erba → zebra → leone", color: "#f59e0b" },
              { lat: 78, lon: 16, label: "Artide: krill → foca → orso polare", color: "#0ea5e9" },
              { lat: -27, lon: 152, label: "Australia: eucalipto → koala", color: "#22c55e" },
              { lat: 46.5, lon: 10.5, label: "Alpi: erba → camoscio → aquila", color: "#a855f7" },
              { lat: -3.5, lon: -62, label: "Amazzonia: frutti → scimmia → giaguaro", color: "#16a34a" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: da dove viene l'energia? Tocca i nodi",
      nodes: [
        { id: "sole", label: "☀️ Il Sole", x: 50, y: 6, color: "#f59e0b", html: "La fonte di quasi tutta l'energia sulla Terra.", why: "Nel Sole l'idrogeno si trasforma in elio e libera una quantità enorme di energia, che arriva a noi come luce e calore in circa 8 minuti. Senza Sole le piante non potrebbero produrre cibo e tutte le catene si fermerebbero." },
        { id: "foto", label: "Fotosintesi", x: 20, y: 24, color: "#84cc16", html: "Le piante usano luce, acqua e anidride carbonica per fare zuccheri e ossigeno.", why: "Fu scoperta un passo alla volta: nel 1779 il medico olandese Jan Ingenhousz dimostrò che le piante liberano ossigeno solo alla luce. La parte verde delle foglie, la clorofilla, cattura la luce." },
        { id: "prod", label: "🌿 Produttori", x: 50, y: 30, color: "#22c55e", html: "Piante e alghe: il primo anello di ogni catena.", why: "Sono gli unici che sanno trasformare la luce in cibo. Per questo si chiamano \"autotrofi\", dal greco \"che si nutrono da sé\"." },
        { id: "erb", label: "🐰 Erbivori", x: 30, y: 52, color: "#f97316", html: "Consumatori primari: mangiano i produttori.", why: "Hanno denti piatti per macinare e un intestino lungo, perché i vegetali sono difficili da digerire. La mucca ha addirittura uno stomaco diviso in 4 parti!" },
        { id: "carn", label: "🦊 Carnivori", x: 55, y: 70, color: "#dc2626", html: "Consumatori secondari e terziari: mangiano altri animali.", why: "Hanno denti appuntiti (canini) per afferrare la preda e sensi molto sviluppati per cacciare. Tengono sotto controllo il numero degli erbivori." },
        { id: "super", label: "🦅 Superpredatori", x: 85, y: 55, color: "#7f1d1d", html: "Stanno in cima: nessun animale li caccia da adulti.", why: "Sono pochi perché a ogni gradino si perde circa il 90% dell'energia. Questa regola del \"10 per cento\" fu descritta dall'ecologo americano Raymond Lindeman nel 1942." },
        { id: "dec", label: "🍄 Decompositori", x: 25, y: 88, color: "#92400e", html: "Funghi, batteri e lombrichi riciclano i resti.", why: "I batteri furono visti per la prima volta nel 1676 da Antoni van Leeuwenhoek con un microscopio fatto da lui. Senza decompositori il mondo sarebbe sommerso di foglie e resti, e il terreno perderebbe i sali minerali." },
        { id: "rete", label: "🕸️ Rete alimentare", x: 80, y: 88, color: "#6366f1", html: "Tante catene intrecciate in un ambiente.", why: "Ogni animale mangia più cose ed è mangiato da più predatori. La parola \"ecosistema\", per indicare l'insieme di viventi e ambiente, fu inventata nel 1935 dal botanico inglese Arthur Tansley." }
      ],
      edges: [
        ["sole", "foto", "luce per la"],
        ["foto", "prod", "nutre i"],
        ["prod", "erb", "mangiati dagli"],
        ["erb", "carn", "mangiati dai"],
        ["carn", "super", "mangiati dai"],
        ["carn", "dec", "resti ai"],
        ["dec", "prod", "sali minerali ai"],
        ["carn", "rete", "si intrecciano in una"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Una <b>catena alimentare</b> mostra chi mangia chi; la freccia significa "è mangiato da".</li>
<li>All'inizio ci sono i <b>produttori</b> (piante e alghe), che fanno il cibo con la luce del Sole.</li>
<li>I <b>consumatori</b> possono essere <b>erbivori</b>, <b>carnivori</b> o <b>onnivori</b>.</li>
<li>I <b>decompositori</b> riciclano i resti e restituiscono i sali minerali al terreno.</li>
<li>Tante catene intrecciate formano una <b>rete alimentare</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: la rete della vita",
      questions: [
        { type: "order", q: "Metti in ordine la catena alimentare del mare.", items: ["Fitoplancton", "Zooplancton", "Acciuga", "Tonno"], explain: "Si parte dal produttore (fitoplancton) e si sale fino al predatore più grande." },
        { type: "mc", q: "Se in un bosco sparissero tutte le volpi, che cosa succederebbe ai conigli all'inizio?", options: ["Diminuirebbero", "Aumenterebbero", "Non cambierebbe niente"], answer: 1, explain: "Senza il loro predatore i conigli aumenterebbero, poi mangerebbero troppa erba." },
        { type: "tf", q: "In cima alla piramide alimentare ci sono più animali che alla base.", answer: false, explain: "È il contrario: alla base ci sono tantissimi produttori, in cima pochissimi predatori." }
      ]
    }
  ],
  glossary: [
    { t: "Catena alimentare", d: "Sequenza di esseri viventi in cui ognuno è cibo per il successivo." },
    { t: "Rete alimentare", d: "Insieme di tante catene alimentari intrecciate in un ambiente." },
    { t: "Produttore", d: "Pianta o alga che fabbrica il proprio cibo con la luce del Sole." },
    { t: "Fotosintesi", d: "Processo con cui le piante usano luce, acqua e anidride carbonica per produrre zuccheri e ossigeno." },
    { t: "Consumatore", d: "Animale che si nutre di altri esseri viventi." },
    { t: "Erbivoro", d: "Animale che mangia solo vegetali." },
    { t: "Carnivoro", d: "Animale che mangia altri animali." },
    { t: "Onnivoro", d: "Animale che mangia sia vegetali sia animali." },
    { t: "Decompositore", d: "Fungo, batterio o piccolo animale che trasforma i resti in sali minerali." },
    { t: "Superpredatore", d: "Animale in cima alla catena, che da adulto non ha nemici naturali." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa indica la freccia in una catena alimentare (erba → coniglio)?", options: ["\"mangia\"", "\"è mangiato da\"", "\"è amico di\""], answer: 1, explain: "Si legge \"l'erba è mangiata dal coniglio\": la freccia segue il percorso dell'energia." },
      { type: "mc", q: "Di che cosa hanno bisogno le piante per fare la fotosintesi?", options: ["Luce, acqua e anidride carbonica", "Carne e ossigeno", "Solo terra"], answer: 0, explain: "Con luce, acqua e anidride carbonica le piante producono zuccheri e liberano ossigeno." },
      { type: "text", q: "Come si chiamano gli esseri viventi che fabbricano da soli il loro cibo?", answer: ["produttori", "i produttori", "produttore"], explain: "Sono i produttori: piante e alghe." },
      { type: "mc", q: "Quale di questi animali è un onnivoro?", options: ["Il cervo", "L'orso", "L'aquila"], answer: 1, explain: "L'orso mangia frutti, radici, miele, pesci e piccoli animali." },
      { type: "tf", q: "I funghi sono decompositori.", answer: true, explain: "Molti funghi si nutrono di foglie e legno morti e li trasformano in sali minerali." },
      { type: "order", q: "Metti in ordine la catena alimentare.", items: ["🌾 grano", "🐭 topo", "🐍 serpente", "🦅 aquila"], explain: "Grano (produttore) → topo (erbivoro) → serpente (carnivoro) → aquila (superpredatore)." },
      { type: "mc", q: "Il lupo, che mangia cervi e lepri, è un…", options: ["produttore", "erbivoro", "carnivoro"], answer: 2, explain: "Mangia altri animali, quindi è un carnivoro." },
      { type: "tf", q: "Una catena alimentare può iniziare con un animale carnivoro.", answer: false, explain: "Ogni catena inizia con un produttore (pianta o alga), perché solo loro trasformano la luce in cibo." },
      { type: "mc", q: "Perché in cima alla piramide alimentare ci sono pochi animali?", options: ["Perché a ogni passaggio si perde gran parte dell'energia", "Perché i predatori sono pigri", "Perché mangiano solo erba"], answer: 0, explain: "Solo circa 1/10 dell'energia passa da un gradino al successivo, quindi ne resta poca per chi sta in cima." },
      { type: "mc", q: "Qual è il produttore nella catena del mare?", options: ["Il tonno", "Il fitoplancton", "Lo squalo"], answer: 1, explain: "Il fitoplancton è fatto di alghe microscopiche che fanno la fotosintesi." },
      { type: "text", q: "Come si chiama l'insieme di tante catene alimentari intrecciate?", answer: ["rete alimentare", "la rete alimentare", "rete", "una rete alimentare"], explain: "Si chiama rete alimentare, perché assomiglia a una ragnatela." },
      { type: "mc", q: "Che cosa succede ai sali minerali prodotti dai decompositori?", options: ["Spariscono", "Vengono riassorbiti dalle radici delle piante", "Diventano luce"], answer: 1, explain: "Tornano nel terreno e le piante li riutilizzano: così il cerchio si chiude." }
    ]
  }
});
