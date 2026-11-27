TOPIC('it', {
  id: "l1-sci-materia-miscugli",
  title: "La materia: sostanze e miscugli",
  intro: "Tutto ciò che ci circonda, dall'aria che respiri allo schermo che stai guardando, è <b>materia</b>: ha una massa e occupa uno spazio. Ma la materia non è tutta uguale: l'acqua del rubinetto, l'oro di un anello e la sabbia sulla spiaggia sono cose molto diverse. In questa lezione impariamo a classificarla (<b>stati di aggregazione</b>, <b>sostanze pure</b> e <b>miscugli</b>) e a separare ciò che la natura ha mescolato, come fa ogni giorno un laboratorio chimico.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Che cos'è la materia",
      html: `<p>La <b>materia</b> è tutto ciò che ha <b>massa</b> e occupa un <b>volume</b>. L'aria, che non vediamo, è materia: un pallone gonfio pesa più di uno sgonfio.</p>
<p>Le grandezze fisiche di un corpo si dividono in due famiglie:</p>
<ul>
<li><b>proprietà estensive</b>: dipendono dalla quantità di materia (massa, volume);</li>
<li><b>proprietà intensive</b>: non dipendono dalla quantità, ma caratterizzano la sostanza (densità, temperatura di fusione, temperatura di ebollizione, colore).</li>
</ul>
<p>Una proprietà intensiva molto usata è la <b>densità</b>: d = m / V. Si misura in g/cm³ (o kg/m³). L'acqua a 4 °C ha densità 1,00 g/cm³; il ferro circa 7,9 g/cm³; l'oro circa 19,3 g/cm³. Se due oggetti sono fatti dello stesso materiale hanno la stessa densità, anche se uno è grande e l'altro piccolo.</p>
<p>Ricorda la differenza tra <b>massa</b> (quantità di materia, in kg, uguale ovunque) e <b>peso</b> (forza con cui la gravità attira il corpo, in newton: sulla Luna è circa 1/6 di quello sulla Terra).</p>`
    },
    {
      type: "example",
      title: "Galleggia o affonda? Il calcolo della densità",
      html: `<p>Un cubetto di materiale sconosciuto ha massa <b>54 g</b> e volume <b>20 cm³</b>. Qual è la densità? Galleggia in acqua?</p>
<ol>
<li>d = m / V = 54 g / 20 cm³ = <b>2,7 g/cm³</b> (è la densità dell'alluminio).</li>
<li>L'acqua ha densità 1 g/cm³: un corpo con densità maggiore <b>affonda</b>, uno con densità minore <b>galleggia</b>.</li>
<li>2,7 &gt; 1: il cubetto affonda.</li>
</ol>
<p>Una nave di ferro galleggia perché è cava: la sua densità <i>media</i> (acciaio + aria interna) è minore di quella dell'acqua.</p>`
    },
    {
      type: "text",
      title: "I tre stati di aggregazione",
      html: `<p>A seconda di temperatura e pressione, la stessa sostanza può presentarsi in tre stati principali. Per distinguerli guardiamo <b>forma</b> e <b>volume</b> e, a livello microscopico, come si muovono le particelle (atomi, molecole o ioni).</p>
<table>
<tr><th>Stato</th><th>Forma</th><th>Volume</th><th>Particelle</th></tr>
<tr><td><b>Solido</b></td><td>propria</td><td>proprio</td><td>vicinissime, in posizioni fisse (vibrano soltanto); ordinate nei solidi cristallini</td></tr>
<tr><td><b>Liquido</b></td><td>del recipiente</td><td>proprio</td><td>vicine ma libere di scorrere le une sulle altre</td></tr>
<tr><td><b>Aeriforme</b> (gas o vapore)</td><td>del recipiente</td><td>quello del recipiente</td><td>molto distanti, in moto rapido e disordinato</td></tr>
</table>
<p>Il modello <b>cinetico-molecolare</b> spiega tutto con due idee: le particelle sono sempre in movimento, e la loro <b>energia cinetica media</b> cresce con la temperatura. Un gas è comprimibile perché tra le particelle c'è quasi solo vuoto; un liquido no, perché sono già a contatto.</p>`
    },
    {
      type: "svg",
      title: "Le particelle nei tre stati",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<rect x="15" y="40" width="190" height="190" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<rect x="225" y="40" width="190" height="190" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<rect x="435" y="40" width="190" height="190" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<g fill="#0369a1">
<circle cx="45" cy="70" r="12"/><circle cx="75" cy="70" r="12"/><circle cx="105" cy="70" r="12"/><circle cx="135" cy="70" r="12"/><circle cx="165" cy="70" r="12"/>
<circle cx="45" cy="100" r="12"/><circle cx="75" cy="100" r="12"/><circle cx="105" cy="100" r="12"/><circle cx="135" cy="100" r="12"/><circle cx="165" cy="100" r="12"/>
<circle cx="45" cy="130" r="12"/><circle cx="75" cy="130" r="12"/><circle cx="105" cy="130" r="12"/><circle cx="135" cy="130" r="12"/><circle cx="165" cy="130" r="12"/>
<circle cx="45" cy="160" r="12"/><circle cx="75" cy="160" r="12"/><circle cx="105" cy="160" r="12"/><circle cx="135" cy="160" r="12"/><circle cx="165" cy="160" r="12"/>
<circle cx="45" cy="190" r="12"/><circle cx="75" cy="190" r="12"/><circle cx="105" cy="190" r="12"/><circle cx="135" cy="190" r="12"/><circle cx="165" cy="190" r="12"/>
</g>
<g fill="#15803d">
<circle cx="250" cy="170" r="12"/><circle cx="276" cy="196" r="12"/><circle cx="302" cy="170" r="12"/><circle cx="330" cy="200" r="12"/><circle cx="358" cy="178" r="12"/><circle cx="386" cy="200" r="12"/>
<circle cx="262" cy="144" r="12"/><circle cx="292" cy="120" r="12"/><circle cx="330" cy="150" r="12"/><circle cx="364" cy="128" r="12"/><circle cx="392" cy="152" r="12"/><circle cx="318" cy="118" r="12"/>
</g>
<g fill="#b45309">
<circle cx="470" cy="75" r="12"/><circle cx="560" cy="62" r="12"/><circle cx="600" cy="120" r="12"/><circle cx="520" cy="130" r="12"/><circle cx="465" cy="180" r="12"/><circle cx="585" cy="195" r="12"/><circle cx="530" cy="205" r="12"/>
</g>
<g stroke="#b45309" stroke-width="2"><line x1="470" y1="75" x2="500" y2="95"/><line x1="560" y1="62" x2="535" y2="45"/><line x1="585" y1="195" x2="560" y2="215"/></g>
<text x="110" y="30" font-size="20" text-anchor="middle" fill="#0c4a6e" font-weight="bold">SOLIDO</text>
<text x="320" y="30" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">LIQUIDO</text>
<text x="530" y="30" font-size="20" text-anchor="middle" fill="#78350f" font-weight="bold">AERIFORME</text>
<text x="110" y="256" font-size="15" text-anchor="middle" fill="#1f2937">ordinate e vicine</text>
<text x="320" y="256" font-size="15" text-anchor="middle" fill="#1f2937">vicine ma disordinate</text>
<text x="530" y="256" font-size="15" text-anchor="middle" fill="#1f2937">lontane e veloci</text>
<text x="320" y="287" font-size="15" text-anchor="middle" fill="#334155">Le linee indicano il moto delle particelle del gas</text>
</svg>`,
      caption: "Stessa sostanza, tre organizzazioni delle particelle: cambiano le distanze e la libertà di movimento."
    },
    {
      type: "curiosity",
      title: "Il quarto stato: il plasma",
      html: `<p>Oltre il 99% della materia visibile dell'Universo non è né solida, né liquida, né gassosa: è <b>plasma</b>, un gas così caldo che gli atomi perdono gli elettroni e diventano ioni liberi di muoversi. Plasma sono il Sole e le stelle, i fulmini, le aurore polari e le lampade al neon. Esiste anche un quinto stato, il <b>condensato di Bose-Einstein</b>, osservato nel 1995 raffreddando atomi a pochi miliardesimi di grado sopra lo zero assoluto.</p>`
    },
    {
      type: "text",
      title: "Sostanze pure e miscugli",
      html: `<p>Una <b>sostanza pura</b> ha composizione definita e proprietà intensive costanti (per esempio una precisa temperatura di ebollizione). Può essere:</p>
<ul>
<li><b>elemento</b>: formato da un solo tipo di atomi (ossigeno O₂, ferro Fe, oro Au);</li>
<li><b>composto</b>: formato da atomi di elementi diversi in rapporto fisso (acqua H₂O, sale da cucina NaCl); si può scomporre solo con reazioni chimiche.</li>
</ul>
<p>Un <b>miscuglio</b> è formato da due o più sostanze (i <b>componenti</b>) mescolate senza reagire, in proporzioni <b>variabili</b>. Ogni componente conserva le sue proprietà e si può separare con metodi <b>fisici</b>.</p>
<ul>
<li><b>Omogeneo</b> (<b>soluzione</b>): ha un'unica fase, aspetto uniforme anche al microscopio ottico. Esempi: acqua e sale, aria, bronzo (lega di rame e stagno), aceto.</li>
<li><b>Eterogeneo</b>: ha due o più fasi distinguibili. Esempi: acqua e sabbia (sospensione), olio e acqua (emulsione se agitata), granito, nebbia (liquido in gas), fumo (solido in gas).</li>
</ul>
<p>Una <b>fase</b> è una porzione di materia con proprietà uniformi. L'acqua con tre cubetti di ghiaccio è un sistema a <b>due fasi</b> pur essendo una sola sostanza: attenzione, fase e sostanza non sono la stessa cosa.</p>`
    },
    {
      type: "widget",
      title: "Classifica la materia",
      widget: "classify",
      options: { groups: ["Sostanza pura", "Miscuglio omogeneo", "Miscuglio eterogeneo"], items: [
        ["Oro 24 carati", 0],
        ["Acqua distillata", 0],
        ["Aria pulita", 1],
        ["Acqua e zucchero sciolto", 1],
        ["Acqua e sabbia", 2],
        ["Granito", 2],
        ["Ossigeno", 0],
        ["Bronzo", 1],
        ["Latte", 2],
        ["Olio e acqua", 2]
      ] },
      caption: "Il latte sembra uniforme, ma al microscopio ha goccioline di grasso sospese in acqua: è una emulsione, quindi eterogeneo."
    },
    {
      type: "remember",
      title: "Sostanza pura o miscuglio? Un test pratico",
      html: `<p>Una sostanza pura, durante un passaggio di stato, mantiene la <b>temperatura costante</b> (l'acqua pura bolle a 100 °C a livello del mare e resta a 100 °C finché c'è liquido). Un miscuglio cambia temperatura durante il passaggio di stato: l'acqua salata inizia a bollire poco sopra 100 °C e la temperatura sale man mano che l'acqua evapora e la soluzione si concentra. Questa è la differenza che rende possibile riconoscerli in laboratorio.</p>`
    },
    {
      type: "text",
      title: "Le soluzioni e la concentrazione",
      html: `<p>In una <b>soluzione</b> il componente in quantità minore è il <b>soluto</b>, quello in quantità maggiore il <b>solvente</b>. Il solvente più importante è l'acqua.</p>
<p>La <b>concentrazione</b> dice quanto soluto c'è. Le espressioni più usate:</p>
<ul>
<li><b>percentuale in massa</b> (% m/m) = (massa soluto / massa soluzione) × 100;</li>
<li><b>percentuale in volume</b> (% V/V), usata per l'alcol nelle bevande;</li>
<li><b>massa/volume</b> (g/L).</li>
</ul>
<p>A una data temperatura il solvente può sciogliere una quantità massima di soluto: la <b>solubilità</b>. Oltre quel limite la soluzione è <b>satura</b> e il soluto in eccesso resta sul fondo. In genere la solubilità dei solidi cresce con la temperatura; quella dei <b>gas</b> diminuisce (per questo una bibita calda perde subito la sua anidride carbonica).</p>`
    },
    {
      type: "example",
      title: "Quanto sale c'è?",
      html: `<p>Sciogli <b>30 g</b> di sale in <b>220 g</b> di acqua. Qual è la percentuale in massa?</p>
<ol>
<li>Massa della soluzione: 30 + 220 = 250 g.</li>
<li>% m/m = 30 / 250 × 100 = <b>12%</b>.</li>
</ol>
<p>Per confronto, l'acqua del mare ha mediamente circa il <b>3,5%</b> di sali disciolti (cioè circa 35 g per kg), mentre il Mar Morto ne ha oltre il 30%: per questo vi si galleggia facilmente, perché la densità dell'acqua è molto aumentata.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: classificare e calcolare",
      questions: [
        { type: "mc", q: "Quale di queste è una sostanza pura?", options: ["Acqua di mare", "Acqua distillata", "Aria", "Latte"], answer: 1, explain: "L'acqua distillata è formata solo da H₂O. Le altre sono miscugli." },
        { type: "num", q: "Un oggetto ha massa 120 g e volume 15 cm³. Qual è la sua densità?", answer: 8, unit: "g/cm³", explain: "d = m/V = 120/15 = 8 g/cm³." },
        { type: "tf", q: "In un miscuglio i componenti perdono le proprie proprietà.", answer: false, explain: "Nei miscugli i componenti conservano le proprietà: si possono separare con metodi fisici." }
      ]
    },
    {
      type: "text",
      title: "Come si separano i miscugli",
      html: `<p>Poiché nei miscugli le sostanze non hanno reagito, si separano con <b>metodi fisici</b>, che sfruttano una differenza di proprietà. Si sceglie il metodo in base al tipo di miscuglio.</p>
<table>
<tr><th>Metodo</th><th>Miscuglio</th><th>Proprietà sfruttata</th></tr>
<tr><td><b>Filtrazione</b></td><td>solido insolubile + liquido (acqua e sabbia)</td><td>dimensioni delle particelle</td></tr>
<tr><td><b>Decantazione</b></td><td>solido + liquido, o due liquidi immiscibili (olio e acqua, con imbuto separatore)</td><td>densità</td></tr>
<tr><td><b>Centrifugazione</b></td><td>sospensioni fini (sangue: plasma e globuli)</td><td>densità, accelerata dalla rotazione</td></tr>
<tr><td><b>Setacciatura</b></td><td>solidi di granulometria diversa (sabbia e ghiaia)</td><td>dimensioni</td></tr>
<tr><td><b>Separazione magnetica</b></td><td>ferro + altri solidi</td><td>magnetismo</td></tr>
<tr><td><b>Evaporazione</b></td><td>soluto solido + solvente (sale e acqua)</td><td>volatilità</td></tr>
<tr><td><b>Distillazione</b></td><td>liquidi miscibili o soluzioni (acqua e alcol)</td><td>temperatura di ebollizione</td></tr>
<tr><td><b>Cromatografia</b></td><td>miscugli di sostanze coloranti o complesse</td><td>diversa affinità per una fase fissa e una mobile</td></tr>
<tr><td><b>Estrazione con solvente</b></td><td>soluto sciolto in un solvente</td><td>solubilità in un altro solvente</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Abbina il metodo al miscuglio",
      widget: "match",
      options: { pairs: [
        ["Acqua e sabbia", "Filtrazione"],
        ["Olio e acqua", "Decantazione (imbuto separatore)"],
        ["Sale sciolto in acqua", "Evaporazione"],
        ["Acqua ed etanolo", "Distillazione"],
        ["Limatura di ferro e zolfo", "Magnete"],
        ["Pigmenti di un inchiostro", "Cromatografia"],
        ["Plasma e globuli del sangue", "Centrifugazione"]
      ] },
      caption: "Trova per ogni miscuglio la proprietà che lo rende separabile."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la distillazione",
      intro: "La distillazione si basa su una differenza di temperatura di ebollizione. Se non ti è chiara, prova con queste immagini.",
      tabs: [
        {
          label: "🔬 Lo schema dell'apparecchio",
          html: `<p>Si scalda il miscuglio nel pallone: il componente con il punto di ebollizione più basso (per esempio l'etanolo, 78 °C, rispetto all'acqua, 100 °C) evapora per primo. Il vapore sale, passa nel <b>refrigerante</b> (un tubo raffreddato da acqua fredda che scorre intorno) e <b>condensa</b>: il liquido puro cade nel recipiente di raccolta, detto <b>distillato</b>.</p>`,
          svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<circle cx="110" cy="190" r="60" fill="#e0f2fe" stroke="#334155" stroke-width="3"/>
<path d="M56 205 A60 60 0 0 0 164 205 Z" fill="#7dd3fc"/>
<rect x="100" y="95" width="20" height="45" fill="#e0f2fe" stroke="#334155" stroke-width="3"/>
<rect x="60" y="255" width="100" height="20" rx="4" fill="#f59e0b"/>
<text x="110" y="270" font-size="14" text-anchor="middle" fill="#1f2937">fornello</text>
<line x1="110" y1="95" x2="250" y2="95" stroke="#334155" stroke-width="3"/>
<line x1="250" y1="95" x2="470" y2="160" stroke="#334155" stroke-width="3"/>
<rect x="300" y="100" width="130" height="38" transform="rotate(16 365 119)" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<text x="365" y="75" font-size="16" text-anchor="middle" fill="#0369a1" font-weight="bold">refrigerante</text>
<path d="M470 160 L470 215" stroke="#334155" stroke-width="3"/>
<path d="M440 220 L500 220 L492 280 L448 280 Z" fill="#dcfce7" stroke="#334155" stroke-width="3"/>
<text x="470" y="298" font-size="14" text-anchor="middle" fill="#14532d">distillato</text>
<text x="110" y="75" font-size="14" text-anchor="middle" fill="#7c2d12">vapore sale</text>
<text x="560" y="150" font-size="14" text-anchor="middle" fill="#0369a1">acqua fredda</text>
</svg>`
        },
        {
          label: "☕ L'analogia della moka",
          html: `<p>Nella moka scaldi l'acqua: il vapore spinge il liquido in alto, attraverso il filtro. Anche nel distillatore il calore trasferisce una sostanza dal liquido al vapore, ma qui poi il vapore si <b>raffredda e torna liquido</b>: lo vedi ogni volta che il vapore di una pentola condensa sul coperchio e sgocciola. La distillazione è esattamente questo, fatto in modo controllato.</p>`
        },
        {
          label: "🧪 Una gara di velocità",
          html: `<p>Immagina due corridori: l'etanolo è il più veloce a diventare vapore, l'acqua è più lenta. Se scaldi con cura e fermi la corsa al momento giusto, nel recipiente di raccolta arrivano quasi solo i veloci. Poiché la separazione non è mai perfetta al primo tentativo, nell'industria si usa la <b>distillazione frazionata</b> (colonne con molti "piani"), che equivale a ripetere la gara molte volte: così si ottengono dal petrolio benzina, gasolio, cherosene e altri prodotti.</p>`
        }
      ]
    },
    {
      type: "example",
      title: "Problema: separare sabbia, sale e limatura di ferro",
      html: `<p>Hai un miscuglio di <b>sabbia, sale e limatura di ferro</b>. Come ottieni i tre componenti puri?</p>
<ol>
<li><b>Magnete</b>: attira la limatura di ferro, che si toglie a secco.</li>
<li><b>Acqua</b>: si aggiunge acqua e si mescola; il sale si scioglie, la sabbia no.</li>
<li><b>Filtrazione</b>: la sabbia resta sul filtro (e si fa asciugare).</li>
<li><b>Evaporazione</b> del filtrato: l'acqua se ne va, il sale cristallizza.</li>
</ol>
<p>L'ordine conta: se aggiungessi acqua prima del magnete, il ferro potrebbe arrugginire. Pensare al "piano di separazione" è un ragionamento tipico della chimica analitica.</p>`
    },
    {
      type: "curiosity",
      title: "Le saline e la cromatografia",
      html: `<p>Il sale da cucina si ottiene ancora oggi, in molte saline italiane come Trapani o Cervia, per <b>evaporazione</b> dell'acqua di mare in vasche poco profonde, scaldata da sole e vento. Quanto alla cromatografia, il nome significa "scrittura con i colori": fu usata dal botanico russo <b>Michail Cvet</b> intorno al 1900 per separare i pigmenti delle foglie. Oggi è lo strumento con cui si cercano doping, farmaci e inquinanti. Puoi provarla a casa: una striscia di carta da filtro, un puntino di pennarello nero lavabile e un po' d'acqua che sale per capillarità separano i colori mescolati.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa della materia: tocca i nodi e scopri il perché",
      nodes: [
        { id: "materia", label: "Materia", x: 50, y: 6, color: "#a855f7", html: "Tutto ciò che ha massa e volume.", why: "La definizione risale ai filosofi greci: <b>Democrito</b> (V sec. a.C.) immaginò la materia fatta di atomi indivisibili, <b>Aristotele</b> di quattro elementi continui. Solo nel 1800 la teoria atomica di <b>Dalton</b> la rese scientifica." },
        { id: "stati", label: "Stati di aggregazione", x: 18, y: 28, color: "#3b82f6", html: "Solido, liquido, aeriforme.", why: "Si spiegano con il <b>modello cinetico-molecolare</b>, sviluppato nell'Ottocento da Clausius, Maxwell e Boltzmann: a variare con la temperatura è l'energia di movimento delle particelle e l'intensità delle forze che le tengono unite." },
        { id: "pura", label: "Sostanze pure", x: 50, y: 32, color: "#22c55e", html: "Elementi e composti con composizione definita.", why: "Il concetto di composizione definita nasce dalla <b>legge di Proust</b> (1799): un composto contiene sempre gli stessi elementi nelle stesse proporzioni di massa." },
        { id: "miscugli", label: "Miscugli", x: 82, y: 28, color: "#f97316", html: "Più sostanze mescolate, proporzioni variabili.", why: "Se le sostanze non reagissero tra loro e le proporzioni fossero fisse non avremmo miscugli ma composti: per questo i miscugli si distinguono dalla possibilità di variare le quantità e di separare i componenti con metodi fisici." },
        { id: "omo", label: "Omogenei (soluzioni)", x: 68, y: 56, color: "#0ea5e9", html: "Una sola fase: aria, bronzo, acqua e sale.", why: "Le particelle di soluto sono disperse a livello di singole molecole o ioni, troppo piccole per essere viste o per essere trattenute da un filtro: per questo servono distillazione o evaporazione." },
        { id: "etero", label: "Eterogenei", x: 92, y: 56, color: "#ef4444", html: "Più fasi visibili: acqua e sabbia, granito.", why: "Le particelle disperse sono grandi o aggregate, quindi più dense o più grandi del mezzo: si separano per decantazione, filtrazione o setacciatura." },
        { id: "metodi", label: "Metodi di separazione", x: 76, y: 82, color: "#14b8a6", html: "Filtrazione, distillazione, cromatografia…", why: "Ogni metodo sfrutta una proprietà <b>intensiva</b> diversa tra i componenti (densità, temperatura di ebollizione, solubilità, dimensione): è questa la ragione per cui la scelta dipende dal miscuglio." },
        { id: "densita", label: "Densità", x: 28, y: 62, color: "#eab308", html: "d = m/V, proprietà intensiva.", why: "Si dice che <b>Archimede</b> (III sec. a.C.) scoprì il principio della spinta idrostatica proprio mentre cercava un modo per verificare se la corona di Gerone fosse d'oro puro, confrontando la densità senza rovinare l'oggetto." }
      ],
      edges: [
        ["materia", "stati", "si presenta in"],
        ["materia", "pura", "si classifica in"],
        ["materia", "miscugli", "si classifica in"],
        ["miscugli", "omo", "può essere"],
        ["miscugli", "etero", "può essere"],
        ["omo", "metodi", "si separa con"],
        ["etero", "metodi", "si separa con"],
        ["pura", "densita", "ha una propria"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: separazioni",
      questions: [
        { type: "mc", q: "Per separare olio e acqua si usa…", options: ["la distillazione", "l'imbuto separatore (decantazione)", "il magnete"], answer: 1, explain: "I due liquidi non si mescolano e hanno densità diversa: l'olio, meno denso, sta sopra." },
        { type: "mc", q: "L'aria è…", options: ["una sostanza pura", "un miscuglio omogeneo di gas", "un miscuglio eterogeneo"], answer: 1, explain: "È una miscela di azoto (78%), ossigeno (21%) e altri gas: una sola fase." },
        { type: "tf", q: "Durante l'ebollizione di una sostanza pura la temperatura resta costante.", answer: true, explain: "Il calore fornito serve a cambiare stato, non ad alzare la temperatura." }
      ]
    }
  ],
  glossary: [
    { t: "Materia", d: "Tutto ciò che ha massa e occupa un volume." },
    { t: "Densità", d: "Rapporto tra massa e volume di un corpo: d = m/V." },
    { t: "Proprietà intensiva", d: "Proprietà che non dipende dalla quantità di materia (densità, temperatura di ebollizione)." },
    { t: "Stato di aggregazione", d: "Modo in cui sono organizzate le particelle: solido, liquido, aeriforme." },
    { t: "Sostanza pura", d: "Materia di composizione definita: un elemento o un composto." },
    { t: "Miscuglio", d: "Insieme di più sostanze non combinate chimicamente, in proporzioni variabili." },
    { t: "Fase", d: "Porzione di materia con proprietà uniformi, separata dal resto da una superficie." },
    { t: "Soluzione", d: "Miscuglio omogeneo di soluto in un solvente." },
    { t: "Solubilità", d: "Quantità massima di soluto che si scioglie in una quantità di solvente a una data temperatura." },
    { t: "Distillazione", d: "Separazione di liquidi basata sulla diversa temperatura di ebollizione." },
    { t: "Cromatografia", d: "Tecnica di separazione basata sulla diversa affinità dei componenti per una fase fissa e una mobile." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale proprietà NON dipende dalla quantità di materia?", options: ["Massa", "Volume", "Densità"], answer: 2, explain: "La densità è una proprietà intensiva: è la stessa per un grammo e per un chilo dello stesso materiale." },
      { type: "num", q: "Un blocco ha massa 540 g e volume 200 cm³. Qual è la sua densità?", answer: 2.7, tol: 0.01, unit: "g/cm³", explain: "d = 540/200 = 2,7 g/cm³." },
      { type: "mc", q: "In quale stato le particelle sono molto distanti e in moto rapido e disordinato?", options: ["Solido", "Liquido", "Aeriforme"], answer: 2, explain: "Nei gas le forze tra le particelle sono trascurabili e il volume è quello del recipiente." },
      { type: "tf", q: "Il bronzo, lega di rame e stagno, è un miscuglio omogeneo.", answer: true, explain: "Ha una sola fase e proporzioni variabili tra i componenti." },
      { type: "tf", q: "Un miscuglio ha sempre una temperatura di ebollizione costante.", answer: false, explain: "Solo le sostanze pure hanno temperatura costante durante il passaggio di stato." },
      { type: "mc", q: "Per ottenere acqua potabile dall'acqua del mare, sfruttando la diversa volatilità, si usa…", options: ["la filtrazione", "la distillazione", "la setacciatura"], answer: 1, explain: "L'acqua evapora e poi condensa, lasciando i sali: è il principio dei dissalatori termici." },
      { type: "num", q: "Sciogli 15 g di zucchero in 135 g di acqua. Qual è la % m/m?", answer: 10, unit: "%", explain: "15 / (15 + 135) × 100 = 10%." },
      { type: "order", q: "Metti in ordine i passaggi per separare sabbia, sale e ferro.", items: ["Passare il magnete", "Aggiungere acqua e mescolare", "Filtrare", "Far evaporare il filtrato"], explain: "Prima si toglie il ferro a secco, poi si scioglie il sale, si filtra la sabbia e infine si recupera il sale." },
      { type: "text", q: "Come si chiama il componente in quantità maggiore di una soluzione?", answer: ["solvente", "il solvente"], explain: "Il solvente è il componente prevalente; il soluto è quello che si scioglie." },
      { type: "mc", q: "Una sospensione di globuli rossi nel plasma si separa con…", options: ["la centrifugazione", "l'evaporazione", "la cromatografia"], answer: 0, explain: "La rotazione veloce accentua la differenza di densità e i globuli si depositano sul fondo." }
    ]
  }
});
