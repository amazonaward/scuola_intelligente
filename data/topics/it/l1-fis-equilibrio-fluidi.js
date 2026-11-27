TOPIC('it', {
  id: "l1-fis-equilibrio-fluidi",
  title: "L'equilibrio dei fluidi",
  intro: "Perché le orecchie fanno male quando ci si tuffa in profondità? Perché una nave di acciaio galleggia e uno spillo affonda? Come fa una piccola pressione del piede sul pedale a fermare un'auto di una tonnellata? Le risposte stanno nella <b>pressione</b> e in tre leggi che portano i nomi di grandi scienziati: <b>Pascal</b>, <b>Stevino</b> e <b>Archimede</b>. In questa lezione studiamo i fluidi, cioè liquidi e gas, quando sono <b>fermi</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Che cos'è la pressione",
      html: `<p>Camminare sulla neve fresca con gli scarponi ti fa sprofondare, con gli sci no. Il peso è lo stesso, ma cambia la <b>superficie</b> su cui si distribuisce. Per descrivere questo effetto si usa la <b>pressione</b>:</p>
<p style="text-align:center"><b>p = F / S</b></p>
<p>dove F è la forza <b>perpendicolare</b> alla superficie e S l'area su cui agisce. Nel Sistema Internazionale l'unità è il <b>pascal</b> (Pa): 1 Pa = 1 N/m². È una pressione piccolissima (un foglio di carta appoggiato su un tavolo esercita circa 1 Pa!), per questo si usano spesso:</p>
<ul>
<li>l'<b>ettopascal</b> (hPa) = 100 Pa, usato nelle previsioni del tempo;</li>
<li>l'<b>atmosfera</b> (atm): 1 atm = 101 325 Pa ≈ 1013 hPa, la pressione media dell'aria a livello del mare;</li>
<li>il <b>bar</b>: 1 bar = 100 000 Pa (la pressione degli pneumatici si misura in bar);</li>
<li>il <b>millimetro di mercurio</b> (mmHg): 1 atm = 760 mmHg.</li>
</ul>
<p>Esempio: un chiodo e un martello. La stessa forza di 100 N, applicata sulla testa del chiodo (circa 1 cm² = 0,0001 m²) dà p = 100/0,0001 = 1 000 000 Pa, ma sulla punta (0,01 mm² = 10<sup>−8</sup> m²) dà p = 10 000 000 000 Pa: ecco perché la punta penetra nel legno.</p>`
    },
    {
      type: "example",
      title: "Esempio: tacco a spillo contro scarpone",
      html: `<p>Una persona di 60 kg (P = 588 N) sta in piedi su un tacco a spillo di area 1 cm² (0,0001 m²), oppure su due scarponi, ciascuno con area di suola 200 cm² (0,02 m²).</p>
<ol>
<li>Tacco a spillo (tutto il peso su un tacco): p = 588 / 0,0001 = <b>5 880 000 Pa</b> (circa 58 atm!).</li>
<li>Scarponi (due suole, S totale = 0,04 m²): p = 588 / 0,04 = <b>14 700 Pa</b> (circa 0,15 atm).</li>
</ol>
<p>Il tacco ha una pressione quasi 400 volte maggiore: per questo può bucare un pavimento di legno, mentre gli scarponi no. È anche il motivo per cui gli sci, le racchette da neve e i cingoli dei trattori distribuiscono il peso su aree grandi.</p>`
    },
    {
      type: "text",
      title: "Il principio di Pascal e il torchio idraulico",
      html: `<p>I liquidi sono (praticamente) <b>incomprimibili</b> e trasmettono la pressione in ogni direzione. Blaise Pascal (1623-1662) lo enunciò così:</p>
<p style="text-align:center"><b>Una pressione esercitata su un punto di un fluido in equilibrio si trasmette inalterata a ogni altro punto del fluido e alle pareti del recipiente.</b></p>
<p>Applicazione: il <b>torchio idraulico</b>. Due pistoni di area diversa, S<sub>1</sub> (piccola) e S<sub>2</sub> (grande), sono collegati da un liquido. Se spingiamo il piccolo con F<sub>1</sub>, la pressione p = F<sub>1</sub>/S<sub>1</sub> si trasmette al grande, che esercita F<sub>2</sub> = p·S<sub>2</sub>:</p>
<p style="text-align:center"><b>F<sub>1</sub> / S<sub>1</sub> = F<sub>2</sub> / S<sub>2</sub></b></p>
<p>Se S<sub>2</sub> è 100 volte S<sub>1</sub>, la forza si moltiplica per 100. Ma attenzione: il liquido non si crea né si distrugge, quindi il pistone piccolo deve spostarsi di <b>100 volte di più</b> di quello grande. Il lavoro (forza × spostamento) è lo stesso: come per la leva, non si guadagna energia, si scambia forza con spostamento.</p>
<p>Il principio di Pascal è alla base dei freni idraulici delle auto, dei sollevatori dei garage, delle presse e dei bracci degli escavatori.</p>`
    },
    {
      type: "svg",
      title: "Il torchio idraulico",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<path d="M90 120 L90 230 L510 230 L510 100 L420 100 L420 190 L180 190 L180 120 Z" fill="#7dd3fc" stroke="#0369a1" stroke-width="3"/>
<rect x="95" y="100" width="80" height="18" fill="#64748b"/>
<rect x="125" y="60" width="20" height="40" fill="#64748b"/>
<line x1="135" y1="20" x2="135" y2="56" stroke="#16a34a" stroke-width="5"/>
<polygon points="135,58 126,42 144,42" fill="#16a34a"/>
<text x="150" y="35" font-size="18" fill="#15803d" font-weight="bold">F1 (piccola)</text>
<text x="135" y="260" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">S1</text>
<rect x="425" y="78" width="130" height="18" fill="#64748b"/>
<rect x="470" y="40" width="40" height="38" fill="#64748b"/>
<rect x="445" y="14" width="90" height="26" rx="4" fill="#ef4444"/>
<text x="490" y="33" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">carico</text>
<line x1="590" y1="40" x2="590" y2="92" stroke="#16a34a" stroke-width="5"/>
<polygon points="590,38 582,54 598,54" fill="#16a34a"/>
<text x="480" y="260" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">S2 (grande)</text>
<text x="300" y="215" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">stessa pressione ovunque</text>
<text x="300" y="130" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">F1 / S1 = F2 / S2</text>
</svg>`,
      caption: "La pressione p = F/S è la stessa nei due pistoni. Se S2 = 20·S1, allora F2 = 20·F1, ma il pistone piccolo scende di una distanza 20 volte maggiore."
    },
    {
      type: "quiz",
      title: "Mini-quiz: pressione e Pascal",
      questions: [
        { type: "num", q: "Una forza di 200 N agisce perpendicolarmente su una superficie di 0,5 m². Quale pressione (in Pa)?", answer: 400, unit: "Pa", explain: "p = F/S = 200 / 0,5 = 400 Pa." },
        { type: "num", q: "In un torchio idraulico il pistone piccolo ha area 4 cm² e il grande 100 cm². Se sul piccolo si esercita 50 N, quanta forza (in N) si ottiene sul grande?", answer: 1250, unit: "N", explain: "F2 = F1·S2/S1 = 50 × 100/4 = 1250 N." },
        { type: "tf", q: "Il torchio idraulico fa risparmiare anche lavoro, oltre che forza.", answer: false, explain: "Il lavoro resta lo stesso: la forza si moltiplica, ma lo spostamento del pistone grande è proporzionalmente minore." }
      ]
    },
    {
      type: "text",
      title: "La legge di Stevino",
      html: `<p>In un liquido fermo la pressione <b>aumenta con la profondità</b>: a ogni punto sottostante si aggiunge il peso della colonna di liquido sovrastante. Simon Stevino (1548-1620), matematico e ingegnere fiammingo, formulò la legge:</p>
<p style="text-align:center"><b>p = p<sub>0</sub> + ρ · g · h</b></p>
<ul>
<li>p<sub>0</sub> è la pressione sulla superficie (di solito la pressione atmosferica);</li>
<li>ρ è la <b>densità</b> del liquido (acqua: circa 1000 kg/m³);</li>
<li>g = 9,8 m/s²;</li>
<li>h è la <b>profondità</b>.</li>
</ul>
<p>Dalla formula si ricava che:</p>
<ul>
<li>la pressione dipende <b>solo dalla profondità</b> e dalla densità, non dalla forma del recipiente né dalla quantità d'acqua (il \"paradosso idrostatico\");</li>
<li>tutti i punti alla stessa profondità hanno la stessa pressione: la superficie libera di un liquido è <b>orizzontale</b>;</li>
<li>nei <b>vasi comunicanti</b> un liquido omogeneo raggiunge lo stesso livello in tutti i rami; se i liquidi sono diversi, le altezze sono <b>inversamente proporzionali</b> alle densità (ρ<sub>1</sub>h<sub>1</sub> = ρ<sub>2</sub>h<sub>2</sub>).</li>
</ul>
<p>Ogni <b>10 m</b> di profondità in acqua la pressione aumenta di circa <b>1 atm</b> (ρgh = 1000·9,8·10 ≈ 98 000 Pa). A 30 m un sub ha dunque una pressione totale di circa 4 atm: 1 dell'aria più 3 dell'acqua.</p>`
    },
    {
      type: "example",
      title: "Esempio: la pressione in una piscina e in fondo al mare",
      html: `<p>Calcoliamo la pressione <b>dovuta all'acqua</b> a diverse profondità (ρ = 1000 kg/m³, g = 9,8 m/s²):</p>
<ul>
<li>3 m (fondo di una piscina profonda): ρgh = 1000 × 9,8 × 3 = 29 400 Pa, circa 0,3 atm;</li>
<li>40 m (limite per un'immersione ricreativa profonda): 392 000 Pa, circa 3,9 atm di sola acqua, circa 4,9 atm in totale;</li>
<li>circa 10 900 m (fossa delle Marianne, nel punto più profondo): circa 1100 atm: su ogni centimetro quadrato grava un peso di oltre una tonnellata.</li>
</ul>
<p>Per questo i sommergibili hanno scafi resistenti e i batiscafi sono sfere di spesso acciaio o titanio: la sfera distribuisce meglio la pressione. Sul nostro timpano, a soli 2 m di profondità, la differenza di pressione è già sensibile (circa 0,2 atm) e ci fa \"sentire\" l'orecchio.</p>`
    },
    {
      type: "svg",
      title: "La pressione cresce con la profondità",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="40" width="260" height="230" fill="#7dd3fc" stroke="#0369a1" stroke-width="3"/>
<line x1="60" y1="40" x2="320" y2="40" stroke="#0369a1" stroke-width="4"/>
<text x="190" y="30" font-size="16" text-anchor="middle" fill="#0369a1" font-weight="bold">superficie: p0</text>
<g stroke="#1e3a8a" stroke-width="3" fill="#1e3a8a">
<line x1="150" y1="90" x2="205" y2="90"/><polygon points="210,90 198,84 198,96"/>
<line x1="150" y1="170" x2="225" y2="170"/><polygon points="230,170 218,164 218,176"/>
<line x1="150" y1="250" x2="245" y2="250"/><polygon points="250,250 238,244 238,256"/>
</g>
<text x="75" y="95" font-size="16" fill="#1f2937">h = 5 m</text>
<text x="75" y="175" font-size="16" fill="#1f2937">h = 15 m</text>
<text x="75" y="255" font-size="16" fill="#1f2937">h = 25 m</text>
<text x="360" y="95" font-size="17" fill="#1f2937">p = 1 + 0,5 = 1,5 atm</text>
<text x="360" y="175" font-size="17" fill="#1f2937">p = 1 + 1,5 = 2,5 atm</text>
<text x="360" y="255" font-size="17" fill="#1f2937">p = 1 + 2,5 = 3,5 atm</text>
<text x="360" y="50" font-size="16" fill="#475569">freccia più lunga = pressione maggiore</text>
</svg>`,
      caption: "Ogni 10 m di acqua aggiungono circa 1 atm. Le frecce mostrano che la pressione agisce perpendicolarmente alle pareti e cresce scendendo."
    },
    {
      type: "text",
      title: "La pressione atmosferica e Torricelli",
      html: `<p>Anche l'aria ha un peso: sopra ogni metro quadrato di superficie terrestre c'è una colonna d'aria alta decine di km che pesa circa 100 000 N. Per questo la pressione atmosferica a livello del mare è circa <b>1 atm = 101 325 Pa</b>.</p>
<p>Nel <b>1643</b> Evangelista Torricelli, allievo di Galileo, riempì di mercurio un tubo di vetro lungo circa un metro, chiuso a un'estremità, e lo capovolse in una vaschetta di mercurio. Il mercurio scese fino a stabilizzarsi a circa <b>760 mm</b> sopra il livello della vaschetta, lasciando in cima uno spazio vuoto (il \"vuoto torricelliano\"). Era la pressione dell'aria che sorreggeva la colonna: era nato il <b>barometro</b>. Il mercurio è 13,6 volte più denso dell'acqua: con l'acqua la colonna sarebbe alta oltre 10 m (circa 10,3 m).</p>
<p>Intorno al 1654 Otto von Guericke dimostrò la forza della pressione atmosferica con gli <b>emisferi di Magdeburgo</b>: dopo aver tolto l'aria da due emisferi di rame, due squadre di cavalli non riuscirono a separarli. In quota la pressione scende: a circa 5500 m è circa la metà di quella a livello del mare, ed è per questo che in montagna l'acqua bolle a meno di 100 °C e le confezioni di patatine si gonfiano in aereo.</p>`
    },
    {
      type: "text",
      title: "Il principio di Archimede",
      html: `<p>Perché un sasso pesa meno in acqua e un pallone è difficile da tenere sotto? Perché ogni corpo immerso in un fluido riceve una spinta verso l'alto, che Archimede di Siracusa (III secolo a.C.) formulò così:</p>
<p style="text-align:center"><b>Un corpo immerso in un fluido riceve una spinta verso l'alto uguale al peso del fluido spostato.</b></p>
<p style="text-align:center"><b>F<sub>A</sub> = ρ<sub>fluido</sub> · V<sub>immerso</sub> · g</b></p>
<p>Perché nasce? Per la legge di Stevino la pressione sulla faccia inferiore del corpo (più profonda) è maggiore di quella sulla faccia superiore: la differenza dà una forza netta verso l'alto, che dipende solo dal volume di fluido spostato.</p>
<p>Quando un corpo di densità ρ<sub>c</sub> è lasciato libero in un fluido di densità ρ<sub>f</sub> si confrontano il peso (ρ<sub>c</sub> V g) e la spinta (ρ<sub>f</sub> V g):</p>
<ul>
<li>ρ<sub>c</sub> &gt; ρ<sub>f</sub>: il peso vince, il corpo <b>affonda</b>;</li>
<li>ρ<sub>c</sub> = ρ<sub>f</sub>: equilibrio in qualunque punto, il corpo resta <b>sospeso</b> (come un sommergibile in assetto);</li>
<li>ρ<sub>c</sub> &lt; ρ<sub>f</sub>: la spinta vince, il corpo sale e <b>galleggia</b>. In equilibrio, la parte immersa soddisfa ρ<sub>f</sub> V<sub>imm</sub> = ρ<sub>c</sub> V, cioè V<sub>imm</sub>/V = ρ<sub>c</sub>/ρ<sub>f</sub>.</li>
</ul>
<p>Un blocco di ghiaccio (ρ = 917 kg/m³) in acqua dolce (1000 kg/m³) ha circa il <b>92%</b> del volume sommerso: la \"punta dell'iceberg\" è davvero piccola. In acqua di mare (circa 1025 kg/m³) emerge un po' di più (circa 10%).</p>`
    },
    {
      type: "example",
      title: "Esempio: come pesa un sasso in acqua?",
      html: `<p>Un sasso di volume 2 dm³ (0,002 m³) e densità 2700 kg/m³ è appeso a un dinamometro.</p>
<ol>
<li>Massa: m = 2700 × 0,002 = 5,4 kg; peso in aria: P = 5,4 × 9,8 ≈ <b>52,9 N</b>.</li>
<li>Immerso completamente in acqua: spinta F<sub>A</sub> = 1000 × 0,002 × 9,8 = <b>19,6 N</b>.</li>
<li>Il dinamometro segna il <b>peso apparente</b>: 52,9 − 19,6 ≈ <b>33,3 N</b>.</li>
</ol>
<p>Il sasso \"pesa\" circa il 37% in meno. È il motivo per cui in piscina riesci a sollevare un amico: il suo peso apparente in acqua è una piccola frazione di quello reale.</p>`
    },
    {
      type: "curiosity",
      title: "\"Eureka!\" e la corona del re",
      html: `<p>Secondo il racconto dell'architetto romano Vitruvio, il tiranno di Siracusa Gerone II aveva consegnato dell'oro a un orafo per una corona e sospettava che fosse stato mescolato con argento. Archimede doveva scoprire l'inganno senza danneggiarla. Mentre entrava in una vasca da bagno notò che l'acqua traboccava e capì che poteva misurare il <b>volume</b> della corona dall'acqua spostata; confrontando la sua densità con quella dell'oro avrebbe scoperto la frode. Corse nudo per strada gridando \"Eureka!\" (\"ho trovato!\"). Gli storici sono incerti sui dettagli della storia (alcuni pensano che usasse una bilancia idrostatica), ma il metodo basato sulla densità funziona tuttora per riconoscere i materiali.</p>`
    },
    {
      type: "curiosity",
      title: "Perché una nave d'acciaio galleggia?",
      html: `<p>L'acciaio ha densità circa 7800 kg/m³, quasi otto volte quella dell'acqua: un pezzo pieno affonda. Ma uno scafo è <b>cavo</b>: contiene molta aria. Conta la <b>densità media</b> dell'intero oggetto (scafo + aria + carico). Se questa è minore di quella dell'acqua, la nave galleggia. Quando la nave viene caricata, affonda un po' di più, spostando più acqua e aumentando la spinta, finché la spinta eguaglia il peso totale: per questo sulle fiancate si disegnano le \"linee di carico\" (il marchio Plimsoll). Se si apre una falla e l'acqua prende il posto dell'aria, la densità media supera quella dell'acqua e la nave affonda.</p>`
    },
    {
      type: "widget",
      title: "Galleggia o affonda in acqua dolce?",
      widget: "classify",
      options: { groups: ["Galleggia", "Affonda"], items: [
        ["🧊 ghiaccio (917 kg/m³)", 0],
        ["🪵 legno di pino (circa 500 kg/m³)", 0],
        ["🫒 olio d'oliva (circa 920 kg/m³)", 0],
        ["🪨 sasso (circa 2700 kg/m³)", 1],
        ["🔩 ferro pieno (7870 kg/m³)", 1],
        ["🥇 oro (19 300 kg/m³)", 1],
        ["🎈 polistirolo (circa 30 kg/m³)", 0],
        ["⚓ piombo (11 340 kg/m³)", 1]
      ] },
      caption: "Confronta la densità del corpo con quella dell'acqua (1000 kg/m³)."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire spinta e pressione",
      intro: "Archimede e Stevino non sono intuitivi quanto sembrano. Ecco altre strade.",
      tabs: [
        {
          label: "📦 Il fluido che si sposta",
          html: `<p>Immagina di togliere il sasso dall'acqua e di sostituirlo con una \"bolla di acqua\" della stessa forma. Quella bolla starebbe ferma, in equilibrio con l'acqua intorno: quindi la spinta sull'acqua della bolla è esattamente uguale al suo peso. Ora rimetti il sasso: l'acqua intorno non \"sa\" cosa c'è dentro la forma, quindi spinge allo stesso modo. <b>La spinta è il peso dell'acqua che il corpo ha scalzato</b>. Questo ragionamento (tipico di Archimede) spiega anche perché la forma non conta, ma solo il volume spostato.</p>`
        },
        {
          label: "🥤 Il torchio con le siringhe",
          html: `<p>Prendi due siringhe di diametro diverso, collegate da un tubicino pieno d'acqua. Se spingi la più piccola con poca forza, quella grande si muove con più forza, ma <b>di poco</b>: per spostare di 1 cm lo stantuffo grande (diametro doppio, area 4 volte maggiore) devi spingere di 4 cm quello piccolo. Ottieni 4 volte la forza, ma devi fare 4 volte la strada. Si può fare l'esperimento a casa, ed è un modo facile per \"sentire\" il principio di Pascal.</p>`
        },
        {
          label: "🏔️ La colonna d'acqua",
          html: `<p>Pensa a una torre di mattoni: il mattone di fondo regge il peso di tutti quelli sopra. Così nell'acqua: a profondità h sopra ogni cm² c'è una colonna d'acqua alta h. Il suo peso è: volume (S·h) × densità × g. Dividendo per S ottieni p = ρ g h. Non importa se sopra c'è una piscina o un lago enorme: conta l'<b>altezza</b> della colonna.</p>`
        },
        {
          label: "📏 Misurare il livello",
          html: `<p>Il \"paradosso idrostatico\" dice che il fondo di un vaso largo in basso e stretto in alto ha la stessa pressione di uno cilindrico, se l'altezza del liquido è la stessa. Nei vasi comunicanti il liquido si porta alla stessa quota, perché solo così la pressione al fondo è uguale in ogni ramo.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'equilibrio dei fluidi",
      nodes: [
        { id: "fluidi", label: "Fluidi in equilibrio", x: 50, y: 6, color: "#64748b", html: "Liquidi e gas fermi: non hanno forma propria, si adattano al recipiente.", why: "La loro statica (idrostatica) nasce nell'antichità con Archimede e fu rilanciata nel Seicento da Stevino, Torricelli e Pascal, quando la scienza sperimentale cominciò a misurare la pressione dell'aria." },
        { id: "pressione", label: "Pressione p = F/S", x: 20, y: 28, color: "#2563eb", html: "Forza perpendicolare per unità di superficie, in pascal.", why: "L'unità porta il nome di Blaise Pascal. Il concetto serve perché nei fluidi la forza non è applicata in un punto ma distribuita su tutta la superficie." },
        { id: "pascal", label: "Principio di Pascal", x: 12, y: 54, color: "#16a34a", html: "La pressione si trasmette uguale in tutto il fluido.", why: "Pascal lo formulò nel 1647-1654, dopo gli esperimenti di Torricelli. Deriva dal fatto che un fluido in equilibrio non può sostenere forze tangenziali: la forza sulle pareti è sempre perpendicolare." },
        { id: "stevino", label: "Legge di Stevino", x: 40, y: 54, color: "#f59e0b", html: "p = p0 + ρgh: la pressione cresce con la profondità.", why: "Stevino (1586) la ricavò ragionando sull'equilibrio di una porzione di liquido: sulla sua faccia inferiore deve agire la pressione che regge il peso di tutta la colonna sovrastante." },
        { id: "torchio", label: "Torchio idraulico", x: 8, y: 80, color: "#22c55e", html: "F1/S1 = F2/S2: moltiplica la forza.", why: "Applicazione tecnica di Pascal (fine Settecento, Bramah). Non crea energia: la forza guadagnata si paga in spostamento." },
        { id: "atmosfera", label: "Pressione atmosferica", x: 60, y: 28, color: "#0ea5e9", html: "Il peso dell'aria: circa 1 atm a livello del mare.", why: "Torricelli (1643) la misurò con il barometro a mercurio: la colonna è alta 760 mm perché ρ_Hg g h è uguale alla pressione dell'aria." },
        { id: "archimede", label: "Spinta di Archimede", x: 75, y: 54, color: "#9333ea", html: "FA = ρ V g, verso l'alto.", why: "Deriva dalla legge di Stevino: sotto il corpo la pressione è maggiore che sopra. Archimede la enunciò nel trattato Sui corpi galleggianti (III sec. a.C.)." },
        { id: "galleggiamento", label: "Galleggiamento", x: 70, y: 82, color: "#ef4444", html: "Dipende dal confronto tra densità del corpo e del fluido.", why: "Se il peso supera la spinta il corpo affonda, altrimenti sale finché la spinta sulla parte immersa uguaglia il peso. Una nave galleggia per la sua densità media." }
      ],
      edges: [["fluidi", "pressione", "si misura con"], ["pressione", "pascal", "si trasmette"], ["pressione", "stevino", "aumenta con h"], ["pascal", "torchio", "applicazione"], ["stevino", "atmosfera", "colonna d'aria"], ["stevino", "archimede", "da cui deriva"], ["archimede", "galleggiamento", "spiega"]]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Pressione</b>: p = F/S (pascal, 1 Pa = 1 N/m²). 1 atm = 101 325 Pa = 760 mmHg.</li>
<li><b>Pascal</b>: la pressione si trasmette uguale in tutto il fluido. Torchio: F1/S1 = F2/S2.</li>
<li><b>Stevino</b>: p = p0 + ρ g h. Ogni 10 m di acqua: +1 atm.</li>
<li><b>Archimede</b>: F<sub>A</sub> = ρ<sub>fluido</sub> · V<sub>immerso</sub> · g = peso del fluido spostato.</li>
<li>Galleggia se la densità <b>media</b> del corpo è minore di quella del fluido.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Stevino e Archimede",
      questions: [
        { type: "num", q: "Quale pressione (in Pa) esercita l'acqua (ρ = 1000 kg/m³, g = 10 m/s²) a 5 m di profondità, escludendo l'atmosfera?", answer: 50000, tol: 0, unit: "Pa", explain: "p = ρ g h = 1000 × 10 × 5 = 50 000 Pa." },
        { type: "num", q: "Un cubo di 10 cm di lato è completamente immerso in acqua (ρ = 1000 kg/m³, g = 10 m/s²). Quanto vale la spinta di Archimede (in N)?", answer: 10, unit: "N", explain: "V = 0,001 m³; F = 1000 × 0,001 × 10 = 10 N." },
        { type: "mc", q: "Un corpo di densità 800 kg/m³ messo in acqua…", options: ["affonda", "galleggia con l'80% immerso", "galleggia con il 20% immerso"], answer: 1, explain: "La frazione immersa è ρc/ρf = 800/1000 = 0,8, cioè l'80%." },
        { type: "tf", q: "La pressione in un liquido fermo dipende dalla forma del recipiente.", answer: false, explain: "Dipende solo dalla profondità e dalla densità (legge di Stevino)." }
      ]
    }
  ],
  glossary: [
    { t: "Pressione", d: "Rapporto tra la forza perpendicolare e la superficie su cui agisce: p = F/S." },
    { t: "Pascal", d: "Unità di pressione del Sistema Internazionale: 1 Pa = 1 N/m²." },
    { t: "Atmosfera", d: "Unità di pressione: 1 atm = 101 325 Pa, pressione media dell'aria a livello del mare." },
    { t: "Principio di Pascal", d: "La pressione su un punto di un fluido in equilibrio si trasmette inalterata in tutto il fluido." },
    { t: "Torchio idraulico", d: "Macchina con due pistoni di area diversa che moltiplica la forza grazie al principio di Pascal." },
    { t: "Legge di Stevino", d: "p = p0 + ρgh: la pressione in un liquido cresce linearmente con la profondità." },
    { t: "Densità", d: "Rapporto tra massa e volume: ρ = m/V." },
    { t: "Vasi comunicanti", d: "Recipienti collegati nei quali un liquido omogeneo raggiunge lo stesso livello." },
    { t: "Spinta di Archimede", d: "Forza verso l'alto su un corpo immerso, uguale al peso del fluido spostato." },
    { t: "Barometro", d: "Strumento che misura la pressione atmosferica; il primo fu inventato da Torricelli nel 1643." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Una forza di 600 N è distribuita uniformemente su 0,3 m². Quale pressione (in Pa)?", answer: 2000, unit: "Pa", explain: "p = F/S = 600/0,3 = 2000 Pa." },
      { type: "mc", q: "Quanti pascal sono circa 1 atm?", options: ["1000 Pa", "101 325 Pa", "760 Pa"], answer: 1, explain: "1 atm = 101 325 Pa, cioè 760 mmHg." },
      { type: "num", q: "In un torchio idraulico il pistone piccolo ha area 5 cm², quello grande 200 cm². Con quale forza (in N) si deve spingere il piccolo per sollevare un carico che richiede 4000 N sul grande?", answer: 100, unit: "N", explain: "F1 = F2·S1/S2 = 4000 × 5/200 = 100 N." },
      { type: "tf", q: "Nel torchio idraulico lo spostamento del pistone grande è maggiore di quello del piccolo.", answer: false, explain: "Il volume di liquido spostato è lo stesso: il pistone grande, avendo area maggiore, si sposta di meno." },
      { type: "num", q: "Qual è la pressione dell'acqua (ρ = 1000 kg/m³, g = 9,8 m/s²) a 20 m di profondità, escludendo l'atmosfera, in Pa?", answer: 196000, tol: 100, unit: "Pa", explain: "p = ρ g h = 1000 × 9,8 × 20 = 196 000 Pa, circa 2 atm." },
      { type: "mc", q: "Chi misurò per primo la pressione atmosferica con un tubo di mercurio?", options: ["Archimede", "Torricelli", "Newton"], answer: 1, explain: "Evangelista Torricelli, nel 1643: il mercurio si fermò a circa 760 mm." },
      { type: "tf", q: "Un corpo di densità maggiore di quella dell'acqua non può mai galleggiare, nemmeno se è cavo.", answer: false, explain: "Conta la densità media: una nave d'acciaio cava ha densità media minore di quella dell'acqua." },
      { type: "num", q: "Un oggetto di volume 0,005 m³ è completamente immerso in acqua (ρ = 1000 kg/m³, g = 10 m/s²). Quanto vale la spinta (in N)?", answer: 50, unit: "N", explain: "FA = ρ V g = 1000 × 0,005 × 10 = 50 N." },
      { type: "order", q: "Metti in ordine i passi per capire se un corpo galleggia.", items: ["Misurare massa e volume del corpo", "Calcolare la densità del corpo (m/V)", "Confrontarla con la densità del fluido", "Concludere: galleggia se è minore, affonda se è maggiore"], explain: "Si confrontano le densità: il corpo galleggia se la sua densità media è minore di quella del fluido." },
      { type: "mc", q: "Perché la pressione aumenta scendendo in un lago?", options: ["Perché l'acqua è più fredda", "Perché sopra c'è il peso della colonna d'acqua", "Perché la gravità aumenta"], answer: 1, explain: "Ogni strato deve sostenere il peso dell'acqua sovrastante, come previsto da Stevino." },
      { type: "text", q: "Come si chiama il grido attribuito ad Archimede quando scoprì il metodo per misurare il volume della corona?", answer: ["eureka", "heureka"], explain: "\"Eureka!\", dal greco \"ho trovato\"." }
    ]
  }
});
