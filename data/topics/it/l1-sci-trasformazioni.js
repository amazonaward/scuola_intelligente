TOPIC('it', {
  id: "l1-sci-trasformazioni",
  title: "Trasformazioni fisiche e chimiche",
  intro: "Un cubetto di ghiaccio che si scioglie e un chiodo che arrugginisce sono due cambiamenti, ma profondamente diversi: nel primo la sostanza resta acqua, nel secondo il ferro si trasforma in qualcosa di nuovo. Capire questa differenza è il primo passo per fare chimica. In questa lezione studiamo i <b>passaggi di stato</b>, leggiamo una <b>curva di riscaldamento</b> e scopriamo come si riconosce e si scrive una <b>reazione chimica</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Trasformazioni fisiche e chimiche",
      html: `<p>Una <b>trasformazione fisica</b> cambia l'aspetto o lo stato della materia, ma <b>non</b> la natura delle sostanze: la composizione delle particelle resta la stessa. Esempi: fusione del ghiaccio, evaporazione dell'acqua, scioglimento dello zucchero nel tè, rottura di un bicchiere. Spesso sono <b>reversibili</b>.</p>
<p>In una <b>trasformazione chimica</b> (o <b>reazione chimica</b>) le sostanze di partenza, i <b>reagenti</b>, si trasformano in sostanze nuove, i <b>prodotti</b>, con proprietà diverse. Gli atomi non sono né creati né distrutti: si riorganizzano, rompendo e formando legami. Esempi: combustione del metano, ruggine, cottura di un uovo, fotosintesi.</p>
<p>Come si riconosce una reazione chimica? Spesso (non sempre) si osserva:</p>
<ul>
<li>sviluppo di <b>gas</b> (bollicine, effervescenza);</li>
<li>formazione di un <b>precipitato</b> (solido che compare in una soluzione limpida);</li>
<li><b>cambio di colore</b> non dovuto a una semplice diluizione;</li>
<li>produzione o assorbimento di <b>calore</b> o <b>luce</b>.</li>
</ul>
<p>Questi sono solo indizi: l'acqua che bolle sviluppa bolle e assorbe calore ma è una trasformazione fisica. La prova decisiva è che dopo ci sono <b>sostanze nuove</b>.</p>`
    },
    {
      type: "widget",
      title: "Fisica o chimica?",
      widget: "classify",
      options: { groups: ["Trasformazione fisica", "Trasformazione chimica"], items: [
        ["Il burro si scioglie in padella", 0],
        ["Un chiodo di ferro arrugginisce", 1],
        ["Il latte diventa yogurt", 1],
        ["L'acqua bolle in pentola", 0],
        ["Una candela brucia", 1],
        ["Si taglia un foglio di carta", 0],
        ["Una mela morsa diventa marrone", 1],
        ["Il sale si scioglie nell'acqua", 0],
        ["Una compressa effervescente nel bicchiere", 1],
        ["La naftalina sublima", 0]
      ] },
      caption: "Nella candela la cera fonde (fisica) ma poi brucia (chimica): una stessa scena può contenere entrambe."
    },
    {
      type: "text",
      title: "I passaggi di stato",
      html: `<p>Il cambiamento di stato di una sostanza è una trasformazione fisica. Ogni passaggio ha un nome:</p>
<table>
<tr><th>Passaggio</th><th>Da → a</th><th>Calore</th></tr>
<tr><td><b>Fusione</b></td><td>solido → liquido</td><td>assorbito</td></tr>
<tr><td><b>Solidificazione</b></td><td>liquido → solido</td><td>ceduto</td></tr>
<tr><td><b>Evaporazione</b> / <b>ebollizione</b></td><td>liquido → aeriforme</td><td>assorbito</td></tr>
<tr><td><b>Condensazione</b></td><td>aeriforme → liquido</td><td>ceduto</td></tr>
<tr><td><b>Sublimazione</b></td><td>solido → aeriforme</td><td>assorbito</td></tr>
<tr><td><b>Brinamento</b> (o deposizione)</td><td>aeriforme → solido</td><td>ceduto</td></tr>
</table>
<p>L'<b>evaporazione</b> avviene solo sulla superficie e a qualsiasi temperatura (il bucato si asciuga anche a 15 °C); l'<b>ebollizione</b> avviene in tutto il liquido, quando la pressione di vapore eguaglia la pressione esterna, a una temperatura precisa. Per questo in alta montagna, dove la pressione è minore, l'acqua bolle sotto i 100 °C (a circa 3000 m intorno a 90 °C) e la pasta cuoce più lentamente. Nella pentola a pressione accade il contrario.</p>`
    },
    {
      type: "svg",
      title: "La curva di riscaldamento dell'acqua",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f8fafc"/>
<line x1="70" y1="20" x2="70" y2="270" stroke="#1f2937" stroke-width="2"/>
<line x1="70" y1="270" x2="620" y2="270" stroke="#1f2937" stroke-width="2"/>
<text x="20" y="150" font-size="15" fill="#1f2937" transform="rotate(-90 20 150)" text-anchor="middle">Temperatura (°C)</text>
<text x="350" y="305" font-size="15" fill="#1f2937" text-anchor="middle">Calore fornito nel tempo</text>
<line x1="62" y1="200" x2="70" y2="200" stroke="#1f2937" stroke-width="2"/><text x="56" y="205" font-size="14" text-anchor="end" fill="#1f2937">0</text>
<line x1="62" y1="70" x2="70" y2="70" stroke="#1f2937" stroke-width="2"/><text x="56" y="75" font-size="14" text-anchor="end" fill="#1f2937">100</text>
<line x1="70" y1="200" x2="620" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
<line x1="70" y1="70" x2="620" y2="70" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
<polyline points="70,250 150,200 250,200 400,70 520,70 600,25" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="110" y="240" font-size="14" fill="#0369a1" font-weight="bold" text-anchor="middle">ghiaccio</text>
<text x="200" y="185" font-size="14" fill="#0369a1" font-weight="bold" text-anchor="middle">fusione</text>
<text x="330" y="150" font-size="14" fill="#15803d" font-weight="bold" text-anchor="middle">acqua liquida</text>
<text x="460" y="55" font-size="14" fill="#b45309" font-weight="bold" text-anchor="middle">ebollizione</text>
<text x="570" y="70" font-size="14" fill="#b45309" font-weight="bold" text-anchor="middle" dy="30">vapore</text>
</svg>`,
      caption: "Durante i due tratti orizzontali (fusione a 0 °C ed ebollizione a 100 °C) la temperatura non cambia: il calore fornito serve a rompere i legami tra le molecole, non ad accelerarle."
    },
    {
      type: "text",
      title: "Leggere la curva di riscaldamento",
      html: `<p>Se riscaldi con una fiamma costante un blocco di ghiaccio e misuri la temperatura nel tempo, ottieni una curva a tratti:</p>
<ol>
<li><b>Tratti inclinati</b>: il calore aumenta l'energia cinetica delle particelle e quindi la temperatura. Quanto calore serve dipende dal <b>calore specifico</b> (acqua liquida: 4,18 J/(g·°C); ghiaccio circa 2,1 J/(g·°C)).</li>
<li><b>Soste (tratti orizzontali)</b>: durante il passaggio di stato la temperatura resta costante. Il calore fornito serve a vincere le forze tra le particelle: è il <b>calore latente</b>.</li>
</ol>
<p>Per l'acqua: calore latente di fusione ≈ <b>334 J/g</b>; calore latente di vaporizzazione ≈ <b>2260 J/g</b>. Evaporare l'acqua richiede quasi sette volte l'energia necessaria per fonderla.</p>
<p>La formula del calore scambiato senza cambio di stato è <b>Q = m · c · ΔT</b>; con cambio di stato è <b>Q = m · L</b>.</p>`
    },
    {
      type: "example",
      title: "Quanto calore serve?",
      html: `<p>Quanto calore serve per scaldare <b>200 g di acqua da 20 °C a 70 °C</b>?</p>
<ol>
<li>Q = m · c · ΔT = 200 g × 4,18 J/(g·°C) × (70 − 20) °C</li>
<li>Q = 200 × 4,18 × 50 = <b>41 800 J ≈ 41,8 kJ</b>.</li>
</ol>
<p>Ora: quanto per far evaporare 100 g di acqua già a 100 °C? Q = m · L = 100 × 2260 = <b>226 000 J</b>. Per questo il sudore è un ottimo "condizionatore": evaporando sottrae molto calore al corpo.</p>`
    },
    {
      type: "curiosity",
      title: "Perché il sale scioglie il ghiaccio sulle strade",
      html: `<p>Una soluzione di acqua e sale congela a una temperatura <b>più bassa</b> di 0 °C: si chiama <b>abbassamento crioscopico</b>. Una soluzione satura di NaCl congela a circa −21 °C. Spargere sale sulle strade ghiacciate non scalda il ghiaccio: ne abbassa il punto di fusione, e infatti a temperature molto inferiori a −10 °C il sale diventa poco efficace. Allo stesso modo, in un miscuglio di acqua e sale l'ebollizione avviene appena sopra i 100 °C (<b>innalzamento ebullioscopico</b>).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: stati e curve",
      questions: [
        { type: "mc", q: "Il passaggio da solido ad aeriforme si chiama…", options: ["fusione", "sublimazione", "condensazione"], answer: 1, explain: "Sublimazione: avviene per esempio con la naftalina e con il ghiaccio secco (CO₂ solida)." },
        { type: "tf", q: "Durante la fusione del ghiaccio la temperatura sale.", answer: false, explain: "Resta a 0 °C finché tutto il ghiaccio non è fuso: il calore serve a cambiare stato." },
        { type: "num", q: "Quanto calore serve per fondere 50 g di ghiaccio a 0 °C (L = 334 J/g)?", answer: 16700, unit: "J", explain: "Q = m · L = 50 × 334 = 16 700 J." }
      ]
    },
    {
      type: "text",
      title: "La reazione chimica e la sua equazione",
      html: `<p>Una reazione chimica si descrive con un'<b>equazione chimica</b>: a sinistra i <b>reagenti</b>, a destra i <b>prodotti</b>, collegati da una freccia. Per esempio la combustione del metano:</p>
<p><b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b></p>
<p>I numeri davanti alle formule sono i <b>coefficienti stechiometrici</b>; quelli in basso (indici) indicano quanti atomi ci sono in una molecola e non si possono cambiare. L'equazione deve essere <b>bilanciata</b>: gli atomi di ogni elemento devono essere in numero uguale a sinistra e a destra, perché in una reazione la massa si conserva (legge di Lavoisier, che vedremo).</p>
<p>Controllo per il metano: a sinistra 1 C, 4 H, 4 O; a destra 1 C, 4 H (2×2), 4 O (2 + 2×1). Bilanciata.</p>
<p>Come bilanciare, passo dopo passo:</p>
<ol>
<li>scrivi le formule corrette di reagenti e prodotti;</li>
<li>conta gli atomi di ogni elemento da una parte e dall'altra;</li>
<li>aggiungi coefficienti davanti alle formule (mai cambiare gli indici), cominciando dagli elementi che compaiono in meno sostanze, lasciando per ultimo l'ossigeno o l'idrogeno;</li>
<li>riconta e semplifica i coefficienti.</li>
</ol>`
    },
    {
      type: "example",
      title: "Bilanciare la sintesi dell'acqua",
      html: `<p>Reazione grezza: <b>H₂ + O₂ → H₂O</b>. Gli atomi di O non sono pari (2 contro 1).</p>
<ol>
<li>Metto 2 davanti a H₂O: H₂ + O₂ → 2 H₂O. Ora O: 2 = 2 ✔️ ma H: 2 a sinistra, 4 a destra.</li>
<li>Metto 2 davanti a H₂: <b>2 H₂ + O₂ → 2 H₂O</b>. H: 4 = 4 ✔️.</li>
</ol>
<p>Si legge: due molecole di idrogeno reagiscono con una di ossigeno e danno due molecole d'acqua. Il rapporto 2 : 1 : 2 vale anche per i volumi dei gas (a pari condizioni): idea che porterà alla teoria di Avogadro.</p>`
    },
    {
      type: "widget",
      title: "Il laboratorio di chimica",
      widget: "chemLab",
      options: {},
      caption: "Scegli i reagenti, mettili nel becher e osserva la reazione bilanciata, la massa prima e dopo e il reagente limitante."
    },
    {
      type: "alternatives",
      title: "Altri modi per vedere una reazione",
      intro: "Se bilanciare ti sembra un trucco da algebra, prova a guardarlo in questi modi.",
      tabs: [
        {
          label: "🧱 I mattoncini LEGO",
          html: `<p>Gli atomi sono mattoncini: una reazione non ne crea né ne distrugge, li <b>riassembla</b>. Per fare 2 molecole d'acqua servono 4 mattoncini H e 2 mattoncini O. Se hai solo molecole di H₂ e O₂, devi contare i mattoncini e usare un numero di "pezzi" che dia lo stesso totale prima e dopo: è tutto il senso dei coefficienti.</p>`,
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" }, { x: -0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" } ], bonds: [[0,1],[0,2]] }
        },
        {
          label: "🍳 Ricetta di cucina",
          html: `<p>Un'equazione chimica è una <b>ricetta</b>: "1 uovo + 100 g di farina → 1 frittella" si scala a 2 uova e 200 g di farina. Anche CH₄ + 2 O₂ → CO₂ + 2 H₂O dice che per ogni molecola di metano servono due molecole di ossigeno; per 10 molecole di metano ne servono 20. Il <b>reagente limitante</b> è l'ingrediente che finisce per primo e ferma la produzione.</p>`
        },
        {
          label: "⚖️ La bilancia",
          html: `<p>Come un'equazione algebrica, anche un'equazione chimica è una bilancia: ciò che hai a sinistra deve pesare quanto ciò che hai a destra, atomo per atomo. È la stessa idea, in forma intuitiva, che fece scoprire la conservazione della massa: se la pesata di una reazione "non torna", hai dimenticato di pesare un gas.</p>`
        }
      ]
    },
    {
      type: "text",
      title: "Reazioni esotermiche ed endotermiche",
      html: `<p>Ogni reazione scambia energia con l'ambiente, di solito come calore:</p>
<ul>
<li><b>esotermica</b>: libera calore (combustioni, esplosioni, neutralizzazioni; l'ossidazione del ferro nelle scaldamani);</li>
<li><b>endotermica</b>: assorbe calore (fotosintesi, la cottura di un uovo, le "ghiaccio istantaneo" delle confezioni di primo soccorso).</li>
</ul>
<p>Per partire, molte reazioni hanno bisogno di una piccola quantità di energia, l'<b>energia di attivazione</b>: un fiammifero deve essere sfregato, ma poi la combustione continua da sola. Un <b>catalizzatore</b> abbassa l'energia di attivazione e accelera la reazione senza consumarsi (come i catalizzatori nelle marmitte delle auto o gli enzimi nel nostro corpo).</p>`
    },
    {
      type: "curiosity",
      title: "Il ghiaccio secco e il punto triplo",
      html: `<p>Il cosiddetto <b>ghiaccio secco</b> è anidride carbonica solida: a pressione atmosferica non fonde, <b>sublima</b> direttamente a −78,5 °C, senza lasciare pozzanghere (per questo è usato per conservare i gelati e per le nebbie dei palcoscenici). La CO₂ può essere liquida solo sopra circa 5,2 atmosfere. Ogni sostanza ha un <b>punto triplo</b>, un'unica combinazione di temperatura e pressione in cui solido, liquido e aeriforme coesistono: per l'acqua è a 0,01 °C, ed è stato usato fino al 2019 per definire il kelvin.</p>`
    },
    {
      type: "remember",
      title: "Riepilogo lampo",
      html: `<ul>
<li>Fisica: cambia lo <b>stato o la forma</b>; le sostanze restano le stesse.</li>
<li>Chimica: compaiono <b>sostanze nuove</b>; gli atomi si riorganizzano.</li>
<li>Durante i passaggi di stato di una sostanza pura la <b>temperatura è costante</b>.</li>
<li>Q = m · c · ΔT (riscaldamento), Q = m · L (cambio di stato).</li>
<li>Un'equazione chimica deve essere <b>bilanciata</b>.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa delle trasformazioni: tocca i nodi e scopri il perché",
      nodes: [
        { id: "trasf", label: "Trasformazioni", x: 50, y: 6, color: "#a855f7", html: "Cambiamenti della materia: fisici o chimici.", why: "Gli alchimisti pensavano che ogni cambiamento trasformasse la sostanza stessa; solo con la chimica moderna (Lavoisier, 1780-90) si capì che bisognava distinguere ciò che cambia lo stato da ciò che crea nuove sostanze." },
        { id: "fisica", label: "Fisiche", x: 22, y: 30, color: "#3b82f6", html: "Passaggi di stato, scioglimenti, rotture.", why: "Non cambiano le molecole, ma solo la loro disposizione e il loro movimento: per questo sono in genere reversibili con un cambio di temperatura o pressione." },
        { id: "chimica", label: "Chimiche (reazioni)", x: 78, y: 30, color: "#ef4444", html: "Reagenti → prodotti.", why: "Si rompono i legami dei reagenti e se ne formano di nuovi. Nel 1808 <b>Dalton</b> spiegò che le reazioni sono una ridistribuzione di atomi, che restano gli stessi: da qui nasce il bilanciamento." },
        { id: "stato", label: "Passaggi di stato", x: 10, y: 58, color: "#0ea5e9", html: "Fusione, evaporazione, sublimazione…", why: "Dipendono da temperatura e pressione: il diagramma di stato di una sostanza mostra le regioni in cui è solida, liquida o gassosa, e il <b>punto triplo</b> in cui coesistono (acqua: 0,01 °C e circa 611 Pa)." },
        { id: "latente", label: "Calore latente", x: 30, y: 82, color: "#f59e0b", html: "Calore scambiato senza variare la temperatura.", why: "Lo scoprì lo scozzese <b>Joseph Black</b> verso il 1760: scaldando ghiaccio che fonde, il termometro non si muoveva ma il calore veniva comunque assorbito, e lo chiamò \"calore nascosto\"." },
        { id: "equazione", label: "Equazione chimica", x: 70, y: 58, color: "#22c55e", html: "Descrive reagenti e prodotti con coefficienti.", why: "Il simbolismo di formule come H₂O fu sistemato da <b>Berzelius</b> (1813-14), che introdusse le lettere come simboli degli elementi." },
        { id: "bilancio", label: "Bilanciamento", x: 70, y: 82, color: "#14b8a6", html: "Stesso numero di atomi prima e dopo.", why: "Conseguenza diretta della <b>conservazione della massa</b> di Lavoisier (1789): in un sistema chiuso la massa totale non cambia." },
        { id: "energia", label: "Energia della reazione", x: 92, y: 80, color: "#f97316", html: "Esotermica o endotermica.", why: "Rompere legami richiede energia, formarli ne libera: il bilancio tra le due determina se la reazione scalda o raffredda." }
      ],
      edges: [
        ["trasf", "fisica", "può essere"],
        ["trasf", "chimica", "può essere"],
        ["fisica", "stato", "esempio"],
        ["stato", "latente", "richiede"],
        ["chimica", "equazione", "si descrive con"],
        ["equazione", "bilancio", "deve avere"],
        ["chimica", "energia", "scambia"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: reazioni",
      questions: [
        { type: "mc", q: "In una reazione chimica…", options: ["gli atomi si trasformano in atomi di altri elementi", "gli atomi si riorganizzano formando sostanze nuove", "la massa totale diminuisce"], answer: 1, explain: "Gli atomi si conservano; cambiano i legami tra loro." },
        { type: "mc", q: "Qual è il coefficiente corretto: __ Al + __ O₂ → __ Al₂O₃ ?", options: ["2, 3, 1", "4, 3, 2", "2, 2, 2"], answer: 1, explain: "4 Al + 3 O₂ → 2 Al₂O₃: 4 Al e 6 O per lato." },
        { type: "tf", q: "Un catalizzatore si consuma durante la reazione.", answer: false, explain: "Accelera la reazione abbassando l'energia di attivazione ma alla fine si ritrova invariato." }
      ]
    }
  ],
  glossary: [
    { t: "Trasformazione fisica", d: "Cambiamento che non modifica la natura delle sostanze." },
    { t: "Reazione chimica", d: "Trasformazione in cui da reagenti si formano prodotti diversi." },
    { t: "Reagente", d: "Sostanza che si consuma in una reazione." },
    { t: "Prodotto", d: "Sostanza che si forma in una reazione." },
    { t: "Fusione", d: "Passaggio da solido a liquido." },
    { t: "Sublimazione", d: "Passaggio diretto da solido ad aeriforme." },
    { t: "Calore latente", d: "Calore scambiato durante un passaggio di stato senza variazione di temperatura." },
    { t: "Calore specifico", d: "Energia necessaria per aumentare di 1 °C la temperatura di 1 g di sostanza." },
    { t: "Equazione chimica", d: "Rappresentazione di una reazione con formule e coefficienti." },
    { t: "Reazione esotermica", d: "Reazione che cede calore all'ambiente." },
    { t: "Catalizzatore", d: "Sostanza che accelera una reazione senza consumarsi." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale tra queste è una trasformazione chimica?", options: ["La fusione del ghiaccio", "La combustione del legno", "La evaporazione dell'acqua"], answer: 1, explain: "Dalla combustione si formano cenere, anidride carbonica e vapore: sostanze nuove." },
      { type: "tf", q: "L'evaporazione avviene solo a 100 °C.", answer: false, explain: "L'evaporazione avviene a qualunque temperatura dalla superficie; a 100 °C (a livello del mare) c'è ebollizione." },
      { type: "mc", q: "Come si chiama il passaggio da aeriforme a solido?", options: ["Brinamento", "Condensazione", "Fusione"], answer: 0, explain: "È il brinamento (o deposizione): la brina si forma così." },
      { type: "num", q: "Quanto calore serve per scaldare 100 g di acqua di 30 °C? (c = 4,18 J/g·°C)", answer: 12540, unit: "J", explain: "Q = 100 × 4,18 × 30 = 12 540 J." },
      { type: "mc", q: "Nel grafico di riscaldamento, i tratti orizzontali corrispondono a…", options: ["un aumento di temperatura", "un passaggio di stato", "una reazione chimica"], answer: 1, explain: "La temperatura resta costante durante il cambiamento di stato." },
      { type: "num", q: "Nell'equazione 2 H₂ + O₂ → 2 H₂O, quanti atomi di idrogeno ci sono in totale a destra?", answer: 4, explain: "2 molecole × 2 atomi = 4." },
      { type: "tf", q: "In una reazione bilanciata il numero di atomi di ogni elemento è uguale tra reagenti e prodotti.", answer: true, explain: "È la conservazione della massa." },
      { type: "mc", q: "Una reazione che assorbe calore è detta…", options: ["esotermica", "endotermica", "catalitica"], answer: 1, explain: "Endotermica: sottrae calore all'ambiente, che si raffredda." },
      { type: "order", q: "Metti in ordine i passaggi dell'acqua riscaldando un cubetto di ghiaccio a −10 °C fino a 120 °C.", items: ["Riscaldamento del ghiaccio", "Fusione a 0 °C", "Riscaldamento dell'acqua liquida", "Ebollizione a 100 °C", "Riscaldamento del vapore"], explain: "Ogni tratto inclinato (riscaldamento) è seguito da una sosta (passaggio di stato)." },
      { type: "text", q: "Come si chiama la sostanza che accelera una reazione senza consumarsi?", answer: ["catalizzatore", "il catalizzatore"], explain: "I catalizzatori abbassano l'energia di attivazione; gli enzimi sono catalizzatori biologici." }
    ]
  }
});
