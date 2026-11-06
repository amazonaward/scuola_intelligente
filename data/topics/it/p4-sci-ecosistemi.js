TOPIC('it', {
  id: "p4-sci-ecosistemi",
  title: "Gli ecosistemi",
  intro: "Uno stagno, un bosco, un prato, persino una pozzanghera: ovunque esseri viventi e ambiente formano una \"squadra\" in cui ognuno ha il suo ruolo. Questa squadra si chiama <b>ecosistema</b>. Scopriamo chi mangia chi, come si mantiene l'equilibrio e perché la <b>biodiversità</b> è un tesoro.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Ambiente, habitat ed ecosistema",
      html: `<p>Un <b>ecosistema</b> è un ambiente con tutti gli esseri viventi che ci abitano e le relazioni fra loro. È formato da due parti:</p>
<ul>
<li><b>Componenti biotiche</b> (dal greco <i>bíos</i> = vita): tutti gli esseri <b>viventi</b>: piante, animali, funghi, batteri.</li>
<li><b>Componenti abiotiche</b> (non viventi): <b>luce</b>, <b>acqua</b>, <b>aria</b>, <b>suolo</b>, <b>rocce</b>, <b>temperatura</b>, clima.</li>
</ul>
<p>Le due parti si influenzano sempre: senza acqua le piante seccano; le radici delle piante trattengono il suolo; gli animali con i loro escrementi lo concimano.</p>
<p>L'<b>habitat</b> è il luogo preciso dove vive una certa specie, la sua "casa": l'habitat della trota è il torrente di montagna con acqua fresca e pulita; quello dello scoiattolo è il bosco con alberi alti.</p>
<p>Tutti gli individui della stessa specie che vivono in un luogo formano una <b>popolazione</b> (es. tutte le rane dello stagno). Tutte le popolazioni insieme formano una <b>comunità</b>.</p>
<p>Ecosistemi possono essere enormi (un oceano, una foresta) o piccolissimi (un tronco che marcisce, una pozza fra gli scogli).</p>`
    },
    {
      type: "widget",
      title: "Biotico o abiotico?",
      widget: "classify",
      options: {
        groups: ["Biotico (vivente)", "Abiotico (non vivente)"],
        items: [
          ["🐸 rana", 0],
          ["🌿 ninfea", 0],
          ["🍄 fungo", 0],
          ["🦠 batteri del suolo", 0],
          ["💧 acqua", 1],
          ["☀️ luce", 1],
          ["🪨 sasso", 1],
          ["🌡️ temperatura", 1],
          ["🐟 pesce", 0],
          ["💨 vento", 1]
        ]
      },
      caption: "In ogni ecosistema ci sono sia parti viventi sia non viventi."
    },
    {
      type: "text",
      title: "Chi mangia chi: le catene alimentari",
      html: `<p>In ogni ecosistema l'energia passa da un essere vivente all'altro attraverso il cibo. Questo percorso si chiama <b>catena alimentare</b>. Ci sono tre ruoli:</p>
<ol>
<li><b>Produttori</b> 🌿: le <b>piante</b> (e le alghe). Con la fotosintesi producono il cibo da sole, usando la luce del Sole. Sono il primo anello di ogni catena.</li>
<li><b>Consumatori</b>: si nutrono di altri esseri viventi.
<ul>
<li><b>primari</b> = <b>erbivori</b>, mangiano le piante (coniglio, cavalletta, mucca);</li>
<li><b>secondari</b> = carnivori che mangiano gli erbivori (volpe, rana);</li>
<li><b>terziari</b> = carnivori che mangiano altri carnivori (aquila, lupo). Quelli in cima, che nessuno caccia, si chiamano <b>superpredatori</b>.</li>
<li>Gli <b>onnivori</b> mangiano sia piante sia animali (orso, cinghiale, uomo).</li>
</ul></li>
<li><b>Decompositori</b> 🍄: <b>funghi</b> e <b>batteri</b> (aiutati da lombrichi e insetti) "smontano" foglie secche, animali morti ed escrementi e li trasformano in <b>sali minerali</b>, che tornano nel terreno e nutrono di nuovo le piante. Sono gli "spazzini" e i "riciclatori" della natura.</li>
</ol>
<p>Le frecce di una catena alimentare vanno <b>da chi è mangiato a chi mangia</b>: indicano dove va l'energia. Esempio: 🌾 erba → 🦗 cavalletta → 🐸 rana → 🐍 biscia → 🦅 falco.</p>`
    },
    {
      type: "svg",
      title: "Una catena alimentare del prato",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f0fdf4"/>
<circle cx="600" cy="40" r="28" fill="#facc15"/>
<text x="600" y="90" font-size="14" text-anchor="middle" fill="#a16207">energia</text>
<g font-size="44" text-anchor="middle"><text x="60" y="150">🌾</text><text x="185" y="150">🦗</text><text x="310" y="150">🐸</text><text x="435" y="150">🐍</text><text x="560" y="150">🦅</text></g>
<g stroke="#15803d" stroke-width="4" fill="#15803d"><line x1="90" y1="135" x2="150" y2="135"/><polygon points="150,127 164,135 150,143"/><line x1="215" y1="135" x2="275" y2="135"/><polygon points="275,127 289,135 275,143"/><line x1="340" y1="135" x2="400" y2="135"/><polygon points="400,127 414,135 400,143"/><line x1="465" y1="135" x2="525" y2="135"/><polygon points="525,127 539,135 525,143"/></g>
<g font-size="15" text-anchor="middle" fill="#1f2937"><text x="60" y="185">produttore</text><text x="185" y="185">consumatore</text><text x="185" y="203">primario</text><text x="310" y="185">consumatore</text><text x="310" y="203">secondario</text><text x="435" y="185">consumatore</text><text x="435" y="203">terziario</text><text x="560" y="185">super-</text><text x="560" y="203">predatore</text></g>
<rect x="120" y="230" width="400" height="50" rx="14" fill="#a16207"/>
<text x="320" y="262" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">🍄 decompositori: tutto torna al suolo 🦠</text>
<path d="M560 210 C560 245 540 255 520 255" stroke="#a16207" stroke-width="3" fill="none"/>
<path d="M120 255 C80 255 60 230 60 200" stroke="#a16207" stroke-width="3" fill="none"/>
</svg>`,
      caption: "La freccia vuol dire \"è mangiato da\". I decompositori chiudono il cerchio: riportano i sali minerali alle piante."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le catene alimentari",
      questions: [
        { type: "mc", q: "Chi sono i produttori in un ecosistema?", options: ["Gli erbivori", "Le piante", "I funghi"], answer: 1, explain: "Le piante producono il cibo con la fotosintesi." },
        { type: "order", q: "Metti in ordine la catena alimentare dello stagno.", items: ["🌿 Alghe", "🦐 Piccoli crostacei", "🐟 Pesciolino", "🐦 Airone"], explain: "Le alghe sono i produttori, poi l'erbivoro, poi i carnivori." },
        { type: "tf", q: "Funghi e batteri decompositori trasformano i resti in sali minerali per le piante.", answer: true, explain: "Così la materia viene riciclata." }
      ]
    },
    {
      type: "text",
      title: "Reti alimentari e piramide",
      html: `<p>In natura le catene non sono mai isolate: la rana mangia cavallette ma anche mosche; la volpe mangia conigli, topi e frutta. Tante catene intrecciate formano una <b>rete alimentare</b>.</p>
<p>Quando si passa da un anello all'altro, gran parte dell'energia si "perde" (serve per muoversi, respirare, scaldarsi). In media solo circa il <b>10%</b> passa all'anello successivo. Per questo:</p>
<ul>
<li>servono <b>moltissime piante</b> per nutrire un po' di erbivori;</li>
<li>e servono tanti erbivori per nutrire <b>pochi carnivori</b>.</li>
</ul>
<p>Si disegna come una <b>piramide ecologica</b>: in basso i produttori (tantissimi), in cima i superpredatori (pochissimi). Per questo in un bosco ci sono milioni di foglie, migliaia di insetti… e solo pochi lupi o aquile.</p>`
    },
    {
      type: "svg",
      title: "La piramide ecologica",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<polygon points="300,20 350,80 250,80" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/>
<polygon points="250,80 350,80 400,140 200,140" fill="#f97316" stroke="#7c2d12" stroke-width="2"/>
<polygon points="200,140 400,140 450,200 150,200" fill="#facc15" stroke="#713f12" stroke-width="2"/>
<polygon points="150,200 450,200 500,270 100,270" fill="#4ade80" stroke="#14532d" stroke-width="2"/>
<text x="300" y="72" font-size="22" text-anchor="middle">🦅</text>
<text x="300" y="120" font-size="16" text-anchor="middle" font-weight="bold">🦊 carnivori</text>
<text x="300" y="178" font-size="16" text-anchor="middle" font-weight="bold">🐇 erbivori</text>
<text x="300" y="243" font-size="16" text-anchor="middle" font-weight="bold">🌿 produttori</text>
<text x="490" y="60" font-size="15" fill="#7f1d1d">pochi individui</text>
<text x="510" y="250" font-size="15" fill="#14532d">tantissimi</text>
<text x="20" y="150" font-size="15" fill="#1f2937">solo ~10%</text>
<text x="20" y="170" font-size="15" fill="#1f2937">dell'energia</text>
<text x="20" y="190" font-size="15" fill="#1f2937">sale di un piano ⬆</text>
</svg>`,
      caption: "Ogni piano riceve circa un decimo dell'energia di quello sotto: per questo la piramide si stringe verso l'alto."
    },
    {
      type: "3d",
      title: "Esplora gli ecosistemi del paesaggio",
      scene: "terrain",
      options: {
        features: {
          mountain: { label: "Bosco di montagna", html: "Abeti, larici, faggi. Vivono cervi, caprioli, scoiattoli, picchi, gufi e in alcune zone d'Italia di nuovo il <b>lupo</b>. Le radici degli alberi trattengono il terreno e proteggono dalle frane." },
          glacier: { label: "Alta montagna", html: "Poco ossigeno, freddo e vento. Licheni e piccoli fiori come la stella alpina; animali come stambecco, camoscio, marmotta e aquila reale. Molti animali hanno il pelo o le piume che d'inverno diventano bianchi (ermellino, pernice bianca)." },
          lake: { label: "Lago e stagno", html: "Ecosistema d'acqua dolce: alghe e ninfee (produttori), larve di insetti, rane, pesci, aironi, libellule. Se l'acqua si riempie di concimi, le alghe crescono troppo e tolgono ossigeno ai pesci." },
          river: { label: "Fiume", html: "L'acqua scorre e porta ossigeno. Trote nelle acque fredde vicino alla sorgente, carpe e lucci più in basso; sulle rive pioppi e salici. Il martin pescatore si tuffa per catturare i pesciolini." },
          plain: { label: "Prato e campi", html: "Erbe e fiori, insetti impollinatori (api, farfalle), lombrichi, talpe, lepri, rondini, volpi. I campi coltivati sono ecosistemi modificati dall'uomo, con meno specie." },
          sea: { label: "Mare", html: "Il fitoplancton (alghe microscopiche) è il produttore principale; poi zooplancton, pesci, delfini, squali. Nel Mediterraneo la <b>posidonia</b>, una pianta marina, forma praterie dove nascono e si nascondono moltissimi pesci." },
          lagoon: { label: "Laguna e zone umide", html: "Acqua bassa, un po' salata. Paradiso degli uccelli: fenicotteri, garzette, cavalieri d'Italia. Esempi: la laguna di Venezia, il delta del Po." }
        }
      },
      caption: "Tocca una parte del paesaggio: ogni ambiente è un ecosistema diverso, con i suoi produttori, consumatori e decompositori."
    },
    {
      type: "text",
      title: "L'equilibrio e la biodiversità",
      html: `<p>In un ecosistema sano il numero di prede e di predatori resta più o meno stabile: è l'<b>equilibrio naturale</b>. Se le prede aumentano, i predatori hanno più cibo e aumentano anche loro; poi, mangiando più prede, le fanno diminuire… e così via.</p>
<p>Se si toglie o si aggiunge una specie, l'equilibrio può rompersi:</p>
<ul>
<li>senza predatori, gli erbivori aumentano troppo e mangiano tutte le piante giovani;</li>
<li>una <b>specie aliena</b> (portata da un altro continente) può non avere nemici e diffondersi troppo, come lo <b>scoiattolo grigio</b> americano che in Italia sta sostituendo lo scoiattolo rosso, o il <b>gambero rosso della Louisiana</b> nei nostri fossi.</li>
</ul>
<p>La <b>biodiversità</b> è la varietà della vita: il numero di specie diverse e le differenze fra loro. Più un ecosistema è vario, più è <b>forte</b>: se una specie ha problemi, altre possono prendere il suo posto nella rete.</p>
<p><b>Minacce</b>: distruzione degli habitat (cemento, disboscamento), inquinamento, caccia e pesca eccessive, specie aliene, cambiamento climatico.</p>
<p><b>Cosa possiamo fare</b>: proteggere gli habitat con parchi e riserve, non buttare rifiuti, non liberare in natura animali esotici, piantare fiori per gli impollinatori, sprecare meno.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: i lupi di Yellowstone",
      html: `<p>Nel parco di <b>Yellowstone</b> (Stati Uniti) i lupi erano stati eliminati dall'uomo negli anni '20. Senza predatori, i <b>cervi wapiti</b> aumentarono moltissimo e mangiarono i giovani salici e pioppi lungo i fiumi.</p>
<p>Nel <b>1995</b> i lupi furono riportati nel parco. I cervi cambiarono abitudini, evitando alcune zone dove era più facile essere cacciati; in diversi punti salici e pioppi sono ricresciuti, e con loro sono aumentati uccelli e castori.</p>
<p>Gli scienziati discutono ancora quanto di questo cambiamento sia merito dei lupi (contano anche orsi, clima e cacciatori), ma l'esempio mostra bene che in un ecosistema <b>tutto è collegato</b>: una sola specie può influenzare molte altre.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: l'ecosistema nel barattolo",
      html: `<p>Puoi costruire un piccolo ecosistema in classe, il <b>terrario</b>:</p>
<ol>
<li>In un grande barattolo di vetro metti sul fondo sassolini (drenaggio), poi terriccio.</li>
<li>Pianta muschio e piccole piantine; aggiungi un pezzetto di legno e foglie secche.</li>
<li>Annaffia poco e chiudi il coperchio. Mettilo alla luce, ma non al sole diretto.</li>
</ol>
<p>Osserva per settimane: l'acqua evapora, si condensa sul vetro e ricade come pioggia; le piante fanno la fotosintesi; muffe e batteri decompongono le foglie. È un ecosistema quasi chiuso! Il botanico inglese David Latimer ne chiuse uno in una damigiana nel 1960: le piante sono cresciute per decenni, aprendolo per annaffiare una sola volta, nel 1972.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Un cucchiaino di terra è affollatissimo",
      html: `<p>In un solo cucchiaino di terra di bosco vivono <b>miliardi di batteri</b> e chilometri di sottilissimi filamenti di funghi. Molti di questi funghi si collegano alle radici degli alberi e si scambiano acqua e sostanze con loro: gli scienziati la chiamano scherzosamente la "<b>wood wide web</b>", l'internet del bosco.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le api e un terzo del nostro cibo",
      html: `<p>Circa <b>tre colture alimentari su quattro</b> nel mondo dipendono almeno in parte dagli insetti impollinatori, soprattutto le api: mele, ciliegie, mandorle, pomodori, zucchine, caffè, cacao… Senza api avremmo un cibo molto più povero. Per questo il <b>20 maggio</b> è la Giornata mondiale delle api.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il primo parco nazionale italiano",
      html: `<p>All'inizio dell'Ottocento lo <b>stambecco</b> era quasi scomparso dalle Alpi: ne restava forse un centinaio, solo nelle valli del Gran Paradiso. Fu protetto prima come riserva di caccia del re (1856) e poi dal <b>Parco Nazionale del Gran Paradiso</b>, fra Piemonte e Valle d'Aosta, il primo parco nazionale italiano, nato nel <b>1922</b>. Oggi gli stambecchi delle Alpi sono decine di migliaia, e quasi tutti discendono da quelli del Gran Paradiso!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Ecosistema</b> = esseri viventi (biotico) + ambiente non vivente (abiotico) + relazioni.</li>
<li><b>Habitat</b> = la "casa" di una specie. <b>Popolazione</b> = individui della stessa specie; <b>comunità</b> = tutte le popolazioni.</li>
<li>Catena alimentare: <b>produttori → consumatori (primari, secondari, terziari) → decompositori</b>.</li>
<li>Piramide ecologica: solo circa il 10% dell'energia passa al livello successivo.</li>
<li><b>Biodiversità</b> = varietà della vita; rende gli ecosistemi più forti. Va protetta.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire gli ecosistemi",
      intro: "Un ecosistema è come una squadra, una città, una ragnatela. Ecco altre strade per capirlo.",
      tabs: [
        {
          label: "🏙️ Come una città",
          html: `<p>Pensa all'ecosistema come a una <b>città</b>:</p>
<ul>
<li>i <b>produttori</b> (piante) sono i <b>contadini e i fornai</b>: fanno il cibo per tutti;</li>
<li>i <b>consumatori</b> sono gli <b>abitanti</b> che comprano e mangiano;</li>
<li>i <b>decompositori</b> sono gli <b>operatori ecologici</b> e il centro di <b>riciclo</b>: senza di loro la città sarebbe sommersa dai rifiuti!</li>
<li>il Sole è la <b>centrale elettrica</b> che dà energia a tutto;</li>
<li>acqua, aria e suolo sono le <b>strade e gli acquedotti</b>.</li>
</ul>
<p>Se sciopera una categoria, tutta la città ne soffre: proprio come in natura.</p>`
        },
        {
          label: "🕸️ La ragnatela (gioco del gomitolo)",
          html: `<p>Un gioco che si fa nelle scuole di tutto il mondo: ogni bambino interpreta un elemento (sole, erba, coniglio, volpe, fungo, acqua…). Ci si passa un <b>gomitolo di lana</b> tenendo il filo ogni volta che due elementi sono collegati ("il coniglio mangia l'erba"). Alla fine c'è una vera <b>rete</b>.</p>
<p>Ora l'insegnante "toglie" un elemento (per esempio le api perché c'è un pesticida): quel bambino tira il filo, e <b>tutti</b> quelli collegati lo sentono tirare. È la prova che in una rete alimentare ogni specie conta!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fdf4ff"/>
<g stroke="#a21caf" stroke-width="2.5">
<line x1="300" y1="40" x2="120" y2="110"/><line x1="300" y1="40" x2="480" y2="110"/><line x1="120" y1="110" x2="200" y2="210"/><line x1="480" y1="110" x2="400" y2="210"/><line x1="120" y1="110" x2="480" y2="110"/><line x1="200" y1="210" x2="400" y2="210"/><line x1="300" y1="40" x2="200" y2="210"/><line x1="300" y1="40" x2="400" y2="210"/><line x1="120" y1="110" x2="400" y2="210"/>
</g>
<g font-size="34" text-anchor="middle"><text x="300" y="52">☀️</text><text x="120" y="122">🌿</text><text x="480" y="122">🐝</text><text x="200" y="222">🐇</text><text x="400" y="222">🦊</text></g>
<text x="300" y="250" font-size="16" text-anchor="middle" fill="#701a75">tira un filo e si muove tutta la rete</text>
</svg>`
        },
        {
          label: "🔗 Abbina chi mangia chi",
          html: `<p>Collega ogni animale al suo cibo principale. Poi chiediti: è erbivoro, carnivoro o onnivoro?</p>`,
          widget: "match",
          options: {
            pairs: [
              ["🐨 koala", "foglie di eucalipto"],
              ["🐼 panda gigante", "bambù"],
              ["🦉 civetta", "topi e insetti"],
              ["🐋 balenottera azzurra", "krill (piccoli crostacei)"],
              ["🐞 coccinella", "afidi (pidocchi delle piante)"],
              ["🐻 orso bruno", "bacche, radici, pesci e insetti"]
            ]
          }
        },
        {
          label: "🌍 Gli ecosistemi del mondo (3D)",
          html: `<p>Sulla Terra ci sono grandi ecosistemi chiamati <b>biomi</b>, che dipendono soprattutto dal clima: la <b>foresta pluviale</b> (calda e piovosa, la più ricca di specie), il <b>deserto</b>, la <b>savana</b>, la <b>taiga</b> (foresta di conifere del Nord), la <b>tundra</b> (gelata), la <b>barriera corallina</b>. Gira il globo e trovali.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -3, lon: -60, label: "Foresta amazzonica", color: "#16a34a" },
              { lat: 23, lon: 13, label: "Deserto del Sahara", color: "#eab308" },
              { lat: -2, lon: 35, label: "Savana del Serengeti", color: "#f97316" },
              { lat: 60, lon: 100, label: "Taiga siberiana", color: "#15803d" },
              { lat: 70, lon: -100, label: "Tundra artica", color: "#93c5fd" },
              { lat: -18, lon: 147, label: "Grande Barriera Corallina", color: "#ec4899" },
              { lat: 39, lon: 16, label: "Macchia mediterranea", color: "#84cc16" }
            ]
          }
        },
        {
          label: "🧮 Contare l'energia",
          html: `<p>Facciamo i conti con la "regola del 10%". Immagina che le piante di un prato catturino <b>10 000</b> unità di energia dal Sole.</p>
<ul>
<li>Gli erbivori (cavallette) ne ricevono circa 10 000 : 10 = <b>1000</b>;</li>
<li>i carnivori (rane) circa 1000 : 10 = <b>100</b>;</li>
<li>i superpredatori (bisce, falchi) circa 100 : 10 = <b>10</b>.</li>
</ul>
<p>Ecco perché le catene alimentari hanno di solito solo <b>4 o 5 anelli</b>: dopo, l'energia rimasta è troppo poca!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'ecosistema: tocca un nodo e scopri il perché",
      nodes: [
        { id: "ecosistema", label: "Ecosistema", x: 50, y: 8, color: "#16a34a", html: "Ambiente + esseri viventi + le loro relazioni.", why: "La parola fu inventata nel 1935 dal botanico inglese <b>Arthur Tansley</b>, per dire che viventi e non viventi formano un unico \"sistema\". La scienza che li studia, l'<b>ecologia</b> (dal greco <i>oîkos</i> = casa), fu chiamata così dal tedesco Ernst Haeckel nel 1866." },
        { id: "abiotico", label: "Componenti abiotiche", x: 15, y: 28, color: "#0ea5e9", html: "Luce, acqua, aria, suolo, temperatura.", why: "Decidono chi può vivere in un luogo: un cactus non sopravvive nella tundra, una trota non vive in acqua calda e povera di ossigeno." },
        { id: "biotico", label: "Componenti biotiche", x: 85, y: 28, color: "#22c55e", html: "Tutti gli esseri viventi dell'ecosistema.", why: "Si organizzano in popolazioni (una specie) e comunità (tutte le specie). Ogni specie ha la sua \"professione\" nell'ecosistema, che gli ecologi chiamano <b>nicchia ecologica</b>." },
        { id: "sole", label: "Sole", x: 15, y: 52, color: "#eab308", html: "La fonte di energia di quasi tutti gli ecosistemi.", why: "Le piante catturano solo circa l'1% della luce che le colpisce, ma basta per nutrire quasi tutta la vita sulla Terra. (Fanno eccezione alcuni ecosistemi degli abissi, che usano l'energia chimica delle sorgenti calde sottomarine, scoperti nel 1977.)" },
        { id: "produttori", label: "Produttori", x: 40, y: 52, color: "#15803d", html: "Piante e alghe: fanno il cibo con la fotosintesi.", why: "Sono gli unici che trasformano la luce in cibo: per questo ogni catena alimentare comincia da loro." },
        { id: "consumatori", label: "Consumatori", x: 65, y: 52, color: "#f97316", html: "Erbivori, carnivori, onnivori.", why: "Sono eterotrofi: devono mangiare altri esseri viventi. Ad ogni passaggio perdono gran parte dell'energia: la regola del 10% fu descritta dall'ecologo americano <b>Raymond Lindeman</b> nel 1942 studiando un lago." },
        { id: "decompositori", label: "Decompositori", x: 88, y: 52, color: "#a16207", html: "Funghi e batteri che riciclano i resti.", why: "Senza di loro foglie e animali morti si accumulerebbero e i sali minerali non tornerebbero al suolo. In natura non esistono \"rifiuti\": tutto viene riciclato." },
        { id: "equilibrio", label: "Equilibrio", x: 35, y: 84, color: "#7c3aed", html: "Prede e predatori si regolano a vicenda.", why: "Il matematico italiano <b>Vito Volterra</b> (1926), studiando i pesci dell'Adriatico su richiesta del genero biologo Umberto D'Ancona, e l'americano Alfred Lotka scoprirono le equazioni che descrivono come prede e predatori aumentano e diminuiscono a turno." },
        { id: "biodiversita", label: "Biodiversità", x: 70, y: 84, color: "#db2777", html: "La varietà della vita in un ambiente.", why: "Più specie ci sono, più la rete alimentare ha \"fili di ricambio\". Il termine si diffuse dal 1986–88 grazie al biologo <b>Edward O. Wilson</b>. Nel 2022 l'Italia ha inserito la tutela della biodiversità e degli ecosistemi nell'articolo 9 della Costituzione." }
      ],
      edges: [
        ["ecosistema", "abiotico", "è fatto di"],
        ["ecosistema", "biotico", "è fatto di"],
        ["abiotico", "sole", "comprende"],
        ["sole", "produttori", "energia"],
        ["biotico", "produttori", "ruolo"],
        ["produttori", "consumatori", "cibo"],
        ["consumatori", "decompositori", "resti"],
        ["decompositori", "produttori", "sali minerali"],
        ["consumatori", "equilibrio", "prede e predatori"],
        ["biotico", "biodiversita", "varietà"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: equilibrio e biodiversità",
      questions: [
        { type: "mc", q: "Che cosa può succedere se in un bosco scompaiono tutti i predatori?", options: ["Niente", "Gli erbivori aumentano troppo e mangiano le piante giovani", "Le piante crescono di più"], answer: 1, explain: "Senza chi li caccia, gli erbivori si moltiplicano e consumano la vegetazione." },
        { type: "tf", q: "Un ecosistema con tante specie diverse è più forte di uno con poche specie.", answer: true, explain: "La biodiversità dà \"ricambi\" alla rete alimentare." },
        { type: "mc", q: "Lo scoiattolo grigio americano in Italia è…", options: ["una specie aliena", "un decompositore", "un produttore"], answer: 0, explain: "È arrivato da un altro continente e compete con lo scoiattolo rosso." }
      ]
    }
  ],
  glossary: [
    { t: "Ecosistema", d: "Insieme di esseri viventi, ambiente non vivente e relazioni fra loro." },
    { t: "Habitat", d: "Il luogo in cui vive una certa specie." },
    { t: "Biotico", d: "Che riguarda gli esseri viventi." },
    { t: "Abiotico", d: "Che riguarda l'ambiente non vivente: luce, acqua, suolo, temperatura." },
    { t: "Popolazione", d: "Individui della stessa specie che vivono nello stesso luogo." },
    { t: "Catena alimentare", d: "Sequenza di esseri viventi in cui ognuno è cibo per il successivo." },
    { t: "Rete alimentare", d: "Insieme di catene alimentari intrecciate." },
    { t: "Produttori", d: "Organismi che fabbricano il proprio cibo con la fotosintesi." },
    { t: "Consumatori", d: "Organismi che si nutrono di altri esseri viventi." },
    { t: "Decompositori", d: "Funghi e batteri che trasformano i resti in sali minerali." },
    { t: "Biodiversità", d: "La varietà delle forme di vita." },
    { t: "Specie aliena", d: "Specie portata dall'uomo in un ambiente dove prima non viveva." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di questi è un elemento abiotico?", options: ["Il fungo", "La luce del Sole", "Il lombrico"], answer: 1, explain: "La luce non è un essere vivente." },
      { type: "text", q: "Come si chiama il luogo in cui vive una certa specie?", answer: ["habitat", "l'habitat", "l habitat"], explain: "L'habitat." },
      { type: "mc", q: "Il coniglio, che mangia erba, è un…", options: ["produttore", "consumatore primario", "decompositore"], answer: 1, explain: "Erbivoro = consumatore primario." },
      { type: "order", q: "Metti in ordine la catena alimentare.", items: ["🌾 Grano", "🐭 Topo", "🐍 Serpente", "🦅 Aquila"], explain: "Produttore → erbivoro → carnivoro → superpredatore." },
      { type: "tf", q: "Nella catena alimentare la freccia va da chi mangia a chi è mangiato.", answer: false, explain: "Va da chi è mangiato a chi mangia: segue il percorso dell'energia." },
      { type: "mc", q: "Qual è il compito dei decompositori?", options: ["Produrre ossigeno", "Riciclare i resti in sali minerali", "Cacciare gli erbivori"], answer: 1, explain: "Funghi e batteri riportano i sali minerali nel suolo." },
      { type: "num", q: "Se le piante di un prato hanno 5000 unità di energia, quante ne arrivano circa agli erbivori (regola del 10%)?", answer: 500, explain: "5000 : 10 = 500." },
      { type: "mc", q: "Perché in un bosco ci sono pochi lupi e tantissimi alberi?", options: ["Perché i lupi sono pigri", "Perché a ogni livello della piramide si perde gran parte dell'energia", "Perché gli alberi mangiano i lupi"], answer: 1, explain: "Servono tante piante per pochi erbivori e tanti erbivori per pochi carnivori." },
      { type: "tf", q: "L'orso, che mangia bacche e pesci, è un onnivoro.", answer: true, explain: "Mangia sia vegetali sia animali." },
      { type: "text", q: "Come si chiama la varietà di forme di vita in un ambiente?", answer: ["biodiversità", "biodiversita", "la biodiversità"], explain: "La biodiversità." },
      { type: "mc", q: "Quale azione aiuta la biodiversità?", options: ["Liberare nel laghetto una tartaruga esotica", "Piantare fiori per le api", "Tagliare tutte le siepi"], answer: 1, explain: "I fiori nutrono gli impollinatori; liberare specie esotiche danneggia l'ecosistema." }
    ]
  }
});
