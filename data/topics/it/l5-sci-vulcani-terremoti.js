TOPIC('it', {
  id: "l5-sci-vulcani-terremoti",
  title: "Vulcani e terremoti",
  intro: "Il 24 agosto del 79 d.C. il Vesuvio seppellì Pompei, Ercolano e Stabia; il 28 dicembre 1908 un terremoto e il successivo maremoto distrussero Messina e Reggio Calabria; nel 2016 una lunga sequenza di scosse ha colpito Amatrice e Norcia. L'Italia è uno dei Paesi più esposti d'Europa a questi fenomeni, e non per caso: sta sul bordo dove due placche si scontrano. In questa lezione capiamo <b>che cosa è un vulcano</b> e perché alcuni eruttano con calma e altri con violenza, <b>che cosa è un terremoto</b> e come si misurano magnitudo e intensità, e infine perché non si può parlare di \"rischio\" senza parlare anche di prevenzione. Ti servono le conoscenze della lezione sulla tettonica delle placche.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Come è fatto un vulcano",
      html: `<p>Un <b>vulcano</b> è una struttura geologica da cui fuoriescono materiali fusi, solidi e gassosi provenienti dall'interno della Terra. Il materiale fuso sotto la superficie si chiama <b>magma</b>; quando esce e si raffredda all'aperto si chiama <b>lava</b>. Le parti principali sono:</p>
<ul>
<li>la <b>camera magmatica</b>: serbatoio sotterraneo (a qualche km di profondità) dove si raccoglie il magma, più leggero delle rocce circostanti;</li>
<li>il <b>camino</b> (condotto): canale attraverso cui il magma risale;</li>
<li>il <b>cratere</b>: apertura sulla sommità; la <b>bocca eruttiva</b> può anche essere laterale (<b>crateri avventizi</b> o fratture);</li>
<li>il <b>cono vulcanico</b>: la montagna formata dall'accumulo di lava e materiali solidi nelle eruzioni.</li>
</ul>
<p>Quando la camera si svuota e il tetto crolla, si forma un'ampia depressione detta <b>caldera</b>. Un vulcano <b>attivo</b> ha eruttato in tempi storici o dà segni di attività; <b>quiescente</b> è un vulcano che non erutta da molto ma potrebbe riattivarsi; <b>spento</b> è uno che non è più alimentato.</p>
<p><b>Perché il magma sale?</b> È meno denso delle rocce intorno, e contiene gas disciolti (soprattutto vapore acqueo, anidride carbonica, anidride solforosa) che, salendo la pressione cala, si liberano e si espandono, esattamente come le bolle di CO₂ in una bottiglia di bibita gassata appena aperta. Più il magma è ricco di gas, più l'eruzione è violenta.</p>`
    },
    {
      type: "3d",
      title: "Un paesaggio vulcanico in 3D",
      scene: "terrain",
      options: {
        features: {
          volcano: { label: "Vulcano", html: "Montagna formata dall'accumulo di lave e materiali piroclastici attorno a un condotto da cui risale il magma. In cima c'è il <b>cratere</b>." },
          mountain: { label: "Rilievo montuoso", html: "I vulcani spesso si trovano lungo catene montuose o archi insulari, dove le placche convergono." },
          coast: { label: "Costa", html: "Molti vulcani italiani sono vicini al mare (Vesuvio, Etna, Stromboli): lo rendono fertile ma anche molto popolato e a rischio." },
          plain: { label: "Pianura fertile", html: "I suoli vulcanici sono ricchi di minerali: per questo alle falde dei vulcani si coltiva e si vive da millenni, nonostante il rischio." },
          sea: { label: "Mare", html: "Esistono anche vulcani sottomarini (come il Marsili, nel Tirreno meridionale, uno dei maggiori d'Europa)." }
        }
      },
      caption: "Tocca il vulcano e le altre parti del paesaggio per leggere la spiegazione."
    },
    {
      type: "text",
      title: "Perché alcune eruzioni sono tranquille e altre catastrofiche",
      html: `<p>Il comportamento dipende soprattutto dalla <b>composizione del magma</b>, e in particolare dal contenuto di <b>silice (SiO₂)</b>, che ne determina la <b>viscosità</b> (la \"densità\" con cui scorre) e la facilità con cui i gas riescono a sfuggire.</p>
<table>
<tr><th></th><th>Magma basico (basaltico)</th><th>Magma acido (riolitico, trachitico)</th></tr>
<tr><td>Silice</td><td>circa 45-52%</td><td>oltre 65%</td></tr>
<tr><td>Viscosità</td><td>bassa: scorre facilmente</td><td>alta: denso, quasi \"pastoso\"</td></tr>
<tr><td>Gas</td><td>sfuggono facilmente</td><td>restano intrappolati e aumentano la pressione</td></tr>
<tr><td>Eruzione</td><td><b>effusiva</b>: colate di lava, fontane di lava</td><td><b>esplosiva</b>: ceneri, lapilli, nubi ardenti</td></tr>
<tr><td>Tipo di vulcano</td><td>a scudo (basso e largo)</td><td>strato-vulcano (cono ripido), caldere</td></tr>
<tr><td>Dove</td><td>dorsali, punti caldi (Hawaii)</td><td>zone di subduzione (Vesuvio, Fuji)</td></tr>
</table>
<p>I tipi classici di eruzione prendono il nome da vulcani:</p>
<ul>
<li><b>Hawaiana</b>: lave fluidissime in fontane e fiumi; poco pericolosa per le persone (Kīlauea, Mauna Loa);</li>
<li><b>Stromboliana</b>: esplosioni moderate e regolari, ogni 10-20 minuti circa, con lancio di brandelli di lava (Stromboli, \"faro del Mediterraneo\"); </li>
<li><b>Vulcaniana</b>: esplosioni forti con ceneri e bombe, perché un tappo di lava solidificata chiude il condotto (Vulcano);</li>
<li><b>Pliniana</b>: colonna eruttiva altissima (decine di km) che poi collassa; dal nome di Plinio il Giovane, che descrisse l'eruzione del Vesuvio del 79 d.C. (Vesuvio, Pinatubo);</li>
<li><b>Peleana</b>: nubi ardenti molto dense che scendono lungo i fianchi (Monte Pelée, Martinica, 1902, circa 28 000 morti a Saint-Pierre).</li>
</ul>
<p><b>I prodotti dell'eruzione</b>:</p>
<ul>
<li><b>lava</b> (colate, cuscini sotto il mare);</li>
<li><b>piroclasti</b> (\"frammenti di fuoco\"): <b>ceneri</b> (&lt; 2 mm), <b>lapilli</b> (2-64 mm), <b>bombe</b> e blocchi (&gt; 64 mm);</li>
<li><b>gas</b>: vapore, CO₂, SO₂, H₂S;</li>
<li><b>flussi piroclastici</b> (nubi ardenti): miscele di gas, cenere e frammenti a 300-800 °C che scendono a velocità anche di oltre 100 km/h: sono il fenomeno più mortale (distrussero Ercolano nel 79 d.C.).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Sezione di un vulcano a strato",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<polygon points="40,260 560,260 560,300 40,300" fill="#a16207"/>
<polygon points="110,260 260,110 340,110 490,260" fill="#78350f" stroke="#451a03" stroke-width="3"/>
<polygon points="260,110 275,90 325,90 340,110 315,118 285,118" fill="#9a3412"/>
<rect x="288" y="118" width="24" height="115" fill="#ef4444"/>
<ellipse cx="300" cy="255" rx="85" ry="30" fill="#dc2626" stroke="#7f1d1d" stroke-width="3"/>
<polygon points="285,100 300,45 315,100" fill="#94a3b8" opacity="0.7"/>
<circle cx="280" cy="40" r="18" fill="#cbd5e1" opacity="0.8"/>
<circle cx="325" cy="30" r="24" fill="#cbd5e1" opacity="0.8"/>
<circle cx="360" cy="45" r="16" fill="#cbd5e1" opacity="0.8"/>
<line x1="430" y1="220" x2="400" y2="190" stroke="#111827" stroke-width="2"/>
<line x1="395" y1="195" x2="365" y2="150" stroke="#ef4444" stroke-width="5"/>
<text x="20" y="75" font-size="15" font-weight="bold" fill="#111827">Nube di cenere e gas</text>
<line x1="150" y1="80" x2="270" y2="60" stroke="#111827" stroke-width="2"/>
<text x="20" y="150" font-size="15" font-weight="bold" fill="#111827">Cono (strati di lava</text>
<text x="20" y="168" font-size="15" font-weight="bold" fill="#111827">e piroclasti)</text>
<line x1="150" y1="175" x2="210" y2="185" stroke="#111827" stroke-width="2"/>
<text x="360" y="86" font-size="15" font-weight="bold" fill="#111827">Cratere</text>
<text x="440" y="238" font-size="15" font-weight="bold" fill="#111827">Colata laterale</text>
<text x="330" y="190" font-size="15" font-weight="bold" fill="#ffffff">Camino</text>
<text x="300" y="260" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">Camera magmatica</text>
</svg>`,
      caption: "Il magma risale dalla camera magmatica lungo il camino e, a seconda di viscosità e gas, esce come lava o esplode in una nube di ceneri."
    },
    {
      type: "quiz",
      title: "Mini-quiz: vulcani",
      questions: [
        { type: "mc", q: "Qual è la differenza tra magma e lava?", options: ["Il magma è sotto la superficie, la lava è quella emessa all'esterno", "Sono la stessa cosa", "La lava è un gas", "Il magma è solido"], answer: 0, explain: "Il materiale fuso sotterraneo è magma; quando esce in superficie e scorre o si solidifica prende il nome di lava." },
        { type: "mc", q: "Quale magma dà eruzioni più esplosive?", options: ["Quello ricco di silice, viscoso", "Quello povero di silice, fluido", "Quello senza gas", "Quello basaltico delle Hawaii"], answer: 0, explain: "Il magma viscoso intrappola i gas, la pressione sale e alla fine l'eruzione è violenta." },
        { type: "tf", q: "Il flusso piroclastico è un fenomeno di scarsa pericolosità.", answer: false, explain: "Le nubi ardenti viaggiano a oltre 100 km/h con temperature di centinaia di gradi: sono la prima causa di morte per eruzioni esplosive." },
        { type: "mc", q: "Come si chiamano i frammenti solidi lanciati dal vulcano più piccoli di 2 mm?", options: ["Ceneri", "Lapilli", "Bombe", "Colate"], answer: 0, explain: "Piroclasti: ceneri (< 2 mm), lapilli (2-64 mm), bombe e blocchi (> 64 mm)." }
      ]
    },
    {
      type: "text",
      title: "I vulcani italiani",
      html: `<p>In Italia ci sono più vulcani attivi che in qualsiasi altro Paese europeo continentale, in conseguenza della subduzione sotto il Tirreno (vedi tettonica). I principali:</p>
<ul>
<li><b>Vesuvio</b> (Campania): stratovulcano alto circa 1281 m, tra i più pericolosi del mondo perché è circondato da oltre 600 000 abitanti nella \"zona rossa\" (comuni in cui il piano di emergenza prevede l'evacuazione preventiva). Eruzione pliniana del <b>79 d.C.</b>: seppellì Pompei con ceneri e lapilli, Ercolano con flussi piroclastici, e uccise Plinio il Vecchio; ne scrisse il nipote, Plinio il Giovane, in due lettere a Tacito. Ultima eruzione: <b>1944</b>. Oggi è quiescente.</li>
<li><b>Campi Flegrei</b> (Napoli): ampia <b>caldera</b> (circa 12-15 km di diametro) con molti piccoli crateri, la cui forma attuale risale all'enorme eruzione dell'Ignimbrite Campana (circa 39 000 anni fa). Ultima eruzione: <b>Monte Nuovo</b> nel <b>1538</b>. È famoso per il <b>bradisismo</b>, il lento innalzamento e abbassamento del suolo (Pozzuoli si è sollevata di diversi metri dagli anni Cinquanta ad oggi e la sismicità è aumentata), ed è sotto stretta sorveglianza.</li>
<li><b>Etna</b> (Sicilia): il più alto vulcano attivo d'Europa (circa 3300 m, l'altezza cambia con le eruzioni), a scudo-strato, con eruzioni frequenti, spesso effusive e con fontane di lava, a volte con ceneri che chiudono l'aeroporto di Catania. Un esempio di vulcano \"amico\": fertile e molto abitato.</li>
<li><b>Stromboli</b> (Eolie): in attività quasi continua da oltre 1500 anni, con le esplosioni regolari che gli danno il nome al tipo di eruzione; <b>Vulcano</b> (ultima eruzione 1888-90), <b>Lipari</b> e le altre isole Eolie.</li>
<li><b>Ischia</b>, <b>Colli Albani</b> (Lazio), <b>Pantelleria</b> e <b>Marsili</b> (grande vulcano sottomarino nel Tirreno, circa 3000 m dal fondo).</li>
</ul>
<p>La <b>Sardegna</b>, invece, non ha vulcani attivi: è un vecchio frammento di crosta, lontano dai margini di placca.</p>`
    },
    {
      type: "text",
      title: "Che cos'è un terremoto",
      html: `<p>Un <b>terremoto</b> (o sisma) è un'improvvisa vibrazione del suolo causata dal rilascio di energia accumulata nelle rocce. Il meccanismo è descritto dalla teoria del <b>rimbalzo elastico</b>, formulata da Harry Reid dopo il terremoto di San Francisco del 1906: le placche si muovono lentamente, ma lungo una <b>faglia</b> (frattura della crosta) l'attrito le blocca; le rocce si deformano accumulando energia elastica, come un elastico che si tende, finché la resistenza è superata e la faglia scorre di colpo, liberando l'energia in forma di onde sismiche.</p>
<ul>
<li>Il punto in profondità in cui si genera il terremoto è l'<b>ipocentro</b> (o fuoco); il punto in superficie sulla verticale dell'ipocentro è l'<b>epicentro</b>, dove gli effetti sono di solito maggiori.</li>
<li>Un terremoto è <b>superficiale</b> se l'ipocentro è a meno di 70 km, <b>intermedio</b> fino a 300 km, <b>profondo</b> oltre (fino a circa 700 km nelle zone di subduzione). In Italia la maggior parte sono superficiali (pochi km di profondità), il che li rende più distruttivi.</li>
<li>Di solito una scossa principale è preceduta da <b>foreshock</b> e seguita da molte <b>repliche</b> (aftershock), che continuano per settimane.</li>
</ul>
<p><b>Le onde sismiche.</b> Dall'ipocentro partono onde <b>P</b> (primarie, le più rapide) e <b>S</b> (secondarie, più lente), che viaggiano all'interno della Terra. Quando arrivano in superficie generano le <b>onde superficiali</b> (di Love e di Rayleigh), le più lente ma le più distruttive. Poiché P ed S viaggiano a velocità diverse, la differenza tra gli istanti di arrivo, registrati dal <b>sismografo</b>, dice quanto è distante il terremoto; con le registrazioni di almeno <b>tre stazioni</b> si trova l'epicentro per triangolazione (si traccia un cerchio attorno ad ogni stazione con raggio pari alla distanza: dove i cerchi si incontrano c'è l'epicentro). I sismogrammi registrano il segnale in funzione del tempo.</p>
<p>Dove avvengono? Circa il 90% dell'energia sismica mondiale si libera ai margini delle placche, soprattutto lungo la <b>cintura di fuoco del Pacifico</b> (Giappone, Cile, Alaska, Indonesia...), la fascia mediterraneo-asiatica (Italia, Turchia, Iran, Himalaya) e le dorsali oceaniche.</p>`
    },
    {
      type: "svg",
      title: "Ipocentro ed epicentro",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="80" width="600" height="220" fill="#a16207" opacity="0.4"/>
<line x1="0" y1="80" x2="600" y2="80" stroke="#7c2d12" stroke-width="4"/>
<line x1="170" y1="280" x2="430" y2="150" stroke="#111827" stroke-width="5"/>
<text x="130" y="272" font-size="15" font-weight="bold" fill="#111827">faglia</text>
<circle cx="300" cy="215" r="10" fill="#ef4444"/>
<text x="318" y="222" font-size="15" font-weight="bold" fill="#7f1d1d">Ipocentro</text>
<circle cx="300" cy="215" r="28" fill="none" stroke="#ef4444" stroke-width="2"/>
<circle cx="300" cy="215" r="55" fill="none" stroke="#ef4444" stroke-width="2"/>
<circle cx="300" cy="215" r="90" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="300" y1="205" x2="300" y2="85" stroke="#111827" stroke-width="2" stroke-dasharray="5 4"/>
<circle cx="300" cy="80" r="9" fill="#f59e0b" stroke="#111827" stroke-width="2"/>
<text x="318" y="62" font-size="15" font-weight="bold" fill="#111827">Epicentro</text>
<line x1="320" y1="195" x2="430" y2="105" stroke="#2563eb" stroke-width="3"/>
<text x="420" y="130" font-size="14" font-weight="bold" fill="#1d4ed8">onde P e S</text>
<text x="450" y="60" font-size="14" fill="#111827">onde superficiali</text>
<path d="M440 76 q10 -14 20 0 t20 0 t20 0 t20 0" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="20" y="40" font-size="16" font-weight="bold" fill="#111827">Profondità dell'ipocentro</text>
<line x1="90" y1="86" x2="90" y2="212" stroke="#475569" stroke-width="2"/>
<polygon points="90,212 85,200 95,200" fill="#475569"/>
<polygon points="90,86 85,98 95,98" fill="#475569"/>
</svg>`,
      caption: "L'energia parte dall'ipocentro in tutte le direzioni; sull'epicentro, che gli è sulla verticale, il suolo trema di più."
    },
    {
      type: "text",
      title: "Magnitudo e intensità: due scale diverse",
      html: `<p>Per descrivere un terremoto servono due tipi di misura, che non vanno confusi:</p>
<p><b>Magnitudo</b> (la \"forza\" del terremoto alla sorgente). Misura l'<b>energia rilasciata</b>, ed è un unico numero per terremoto, ricavato dai sismogrammi. La prima scala fu quella di <b>Charles Richter</b> (1935, California); oggi si usa la <b>magnitudo momento (Mw)</b>, valida anche per i terremoti più forti. È una scala <b>logaritmica</b>: ogni aumento di <b>1</b> di magnitudo corrisponde a un'ampiezza delle onde <b>10 volte</b> maggiore e a un'energia circa <b>32 volte</b> maggiore (10<sup>1,5</sup>). Quindi un sisma di magnitudo 7 libera circa 1000 volte l'energia di uno di magnitudo 5 (32 × 32 ≈ 1000). Il più forte mai registrato è il terremoto del Cile del 1960 (Mw 9,5). Sotto 3-4 le scosse sono in genere avvertite solo dagli strumenti o leggermente; sopra 6 possono causare gravi danni.</p>
<p><b>Intensità</b> (gli <b>effetti</b> sulle cose e le persone in un luogo). Si valuta osservando danni e percezione, in una scala a gradi: la <b>scala Mercalli-Cancani-Sieberg (MCS)</b> ha 12 gradi (I = non avvertito, VI = danni leggeri, X = distruzioni gravi, XII = distruzione totale). L'intensità <b>varia da luogo a luogo</b>: è massima vicino all'epicentro e diminuisce con la distanza; dipende anche dal tipo di terreno (i terreni soffici amplificano le vibrazioni) e dalla qualità degli edifici.</p>
<p>Un'analogia: la magnitudo è come la <b>potenza di una lampadina</b> (una sola, intrinseca); l'intensità è la <b>luce</b> che arriva in un punto della stanza (diversa vicino o lontano dalla lampadina).</p>`
    },
    {
      type: "widget",
      title: "Magnitudo o intensità?",
      widget: "classify",
      options: {
        groups: ["Magnitudo", "Intensità"],
        items: [
          ["Un solo valore per ogni terremoto", 0],
          ["Misura l'energia rilasciata", 0],
          ["Scala logaritmica (Richter, Mw)", 0],
          ["Dipende dal luogo e dalla distanza", 1],
          ["Valuta i danni (scala Mercalli, 12 gradi)", 1],
          ["Dipende dalla qualità degli edifici", 1]
        ]
      },
      caption: "La magnitudo descrive la sorgente, l'intensità gli effetti."
    },
    {
      type: "example",
      title: "Quanto più forte è un terremoto di magnitudo 6,5 rispetto a uno di 5,5?",
      html: `<p>La differenza è 1 unità. Quindi l'ampiezza delle onde è <b>10 volte</b> maggiore e l'energia circa <b>32 volte</b> maggiore. Se invece confronti magnitudo 7 con magnitudo 5 la differenza è 2: ampiezza 10² = 100 volte, energia circa 32² ≈ <b>1000 volte</b>. Il terremoto dell'Aquila del 2009 (Mw 6,1) e quello del Cile del 1960 (Mw 9,5) differiscono di 3,4 unità: l'energia è circa 32<sup>3,4</sup> ≈ 130 000 volte maggiore (circa 10<sup>5,1</sup>). Questo spiega perché pochissimi terremoti enormi rilasciano gran parte di tutta l'energia sismica.</p>`
    },
    {
      type: "text",
      title: "I terremoti in Italia",
      html: `<p>L'Italia ha una sismicità elevata e <b>frequente</b>: circa 16 000-20 000 scosse all'anno (la maggior parte troppo deboli per essere avvertite) e un terremoto distruttivo, di magnitudo superiore a 5,5, ogni pochi anni. Le zone più colpite sono l'<b>Appennino</b> (in distensione), l'<b>Arco alpino orientale</b> (Friuli), la <b>Calabria</b> e la <b>Sicilia</b>. Alcuni eventi storici:</p>
<ul>
<li><b>Messina e Reggio Calabria, 28 dicembre 1908</b>: Mw circa 7,1, seguito da un maremoto; è il più catastrofico evento sismico del Paese, con circa 80 000 vittime (le stime variano);</li>
<li><b>Friuli, 6 maggio 1976</b> (Mw 6,4): circa 990 morti; la ricostruzione \"dov'era, com'era\" è un modello;</li>
<li><b>Irpinia, 23 novembre 1980</b> (Mw 6,9): circa 2900 morti;</li>
<li><b>Umbria-Marche, 1997</b>; <b>L'Aquila, 6 aprile 2009</b> (Mw 6,1): circa 309 morti;</li>
<li><b>Emilia, maggio 2012</b> (Mw circa 6,0 e 5,8, il 20 e 29 maggio): danni a capannoni, chiese e torri;</li>
<li><b>Amatrice-Norcia, 24 agosto 2016</b> (Mw 6,0) e <b>30 ottobre 2016</b> (Mw 6,5): circa 300 vittime il 24 agosto.</li>
</ul>
<p><b>Previsione e prevenzione.</b> I terremoti <b>non si possono prevedere</b>, cioè non si può dire con precisione quando, dove e di quanta magnitudo sarà il prossimo. Si può però fare <b>previsione probabilistica</b>: la mappa della pericolosità sismica indica dove e con che probabilità ci si possono aspettare scosse di una certa intensità in un certo numero di anni (il territorio italiano è diviso in quattro zone sismiche). E si può soprattutto fare <b>prevenzione</b>.</p>
<p>Il <b>rischio sismico</b> è il prodotto di tre fattori:</p>
<p style="text-align:center"><b>Rischio = Pericolosità × Vulnerabilità × Esposizione</b></p>
<ul>
<li><b>Pericolosità</b>: probabilità che in una zona avvenga un terremoto di una certa forza (dipende dalla geologia: non si può cambiare);</li>
<li><b>Vulnerabilità</b>: quanto sono facilmente danneggiabili edifici e infrastrutture (si può ridurre con costruzioni antisismiche e adeguamento dei vecchi edifici);</li>
<li><b>Esposizione</b>: quante persone, beni e valore storico-artistico sono presenti nell'area.</li>
</ul>
<p>L'Italia ha pericolosità medio-alta, ma vulnerabilità ed esposizione molto alte, a causa di un patrimonio edilizio antico (molti edifici sono precedenti alle norme antisismiche) e di centri storici densi: a parità di magnitudo, un terremoto in Italia causa spesso più danni che in Paesi come il Giappone o la California, dove le norme edilizie sono molto più severe e rispettate. Un terremoto è un evento naturale, la <b>catastrofe</b> è in gran parte prodotta dall'uomo.</p>`
    },
    {
      type: "example",
      title: "La sera in cui il mare si ritira",
      html: `<p>Sei in vacanza su una spiaggia del Sud-Est asiatico. All'improvviso il mare si ritira per centinaia di metri, lasciando in secca pesci e barche. Molti curiosi scendono a guardare: è l'errore fatale compiuto nel 2004 in molte località. Chi conosceva il segnale (una scossa forte, il ritiro anomalo del mare) è corso in alto, verso l'interno, e si è salvato: una bambina inglese di dieci anni, Tilly Smith, aveva imparato a scuola che cosa significa il ritiro del mare e fece evacuare la spiaggia di Maikhao, in Thailandia. L'educazione al rischio salva davvero vite: una regola semplice (\"se senti una forte scossa vicino alla costa, vai subito in alto, senza aspettare\") vale più di mille strumenti.</p>`
    },
    {
      type: "widget",
      title: "Gli eventi che hanno segnato l'Italia",
      widget: "timeline",
      options: {
        unit: "anni",
        events: [
          { year: 79, label: "Eruzione del Vesuvio: Pompei ed Ercolano", icon: "🌋" },
          { year: 1538, label: "Eruzione di Monte Nuovo (Campi Flegrei)", icon: "🌋" },
          { year: 1908, label: "Terremoto e maremoto di Messina e Reggio", icon: "🌊" },
          { year: 1944, label: "Ultima eruzione del Vesuvio", icon: "🌋" },
          { year: 1976, label: "Terremoto del Friuli", icon: "🏚️" },
          { year: 1980, label: "Terremoto dell'Irpinia", icon: "🏚️" },
          { year: 2009, label: "Terremoto dell'Aquila", icon: "🏚️" },
          { year: 2016, label: "Terremoti di Amatrice e Norcia", icon: "🏚️" }
        ]
      },
      caption: "Una storia lunga: il territorio italiano è attivo da sempre, ma la memoria delle persone dura poche generazioni."
    },
    {
      type: "quiz",
      title: "Mini-quiz: terremoti e rischio",
      questions: [
        { type: "num", q: "Di quanto aumenta circa l'energia (in volte) per un aumento di magnitudo di 2?", answer: 1000, tol: 50, explain: "32 × 32 ≈ 1000." },
        { type: "mc", q: "Se in un luogo i danni sono molto gravi (X grado Mercalli), si sta misurando...", options: ["L'intensità", "La magnitudo", "L'ipocentro", "La profondità"], answer: 0, explain: "I gradi della scala Mercalli descrivono gli effetti, cioè l'intensità." },
        { type: "tf", q: "Un terremoto superficiale è in genere più distruttivo di uno profondo della stessa magnitudo.", answer: true, explain: "Più l'ipocentro è vicino alla superficie, meno l'energia si disperde prima di arrivare alle costruzioni." },
        { type: "mc", q: "Quale onda arriva per prima a un sismografo?", options: ["P", "S", "Superficiale", "Tutte insieme"], answer: 0, explain: "Le onde P sono le più veloci (da cui il nome \"primarie\")." }
      ]
    },
    {
      type: "text",
      title: "Gli tsunami e come difendersi",
      html: `<p>Un <b>maremoto o tsunami</b> (parola giapponese: \"onda del porto\") è una serie di onde marine di enorme lunghezza d'onda provocate da uno spostamento improvviso di grandi masse d'acqua, di solito da un forte terremoto sottomarino (con scorrimento verticale del fondale), ma anche da frane sottomarine o eruzioni. In mare aperto un'onda è alta meno di un metro ma lunghissima e velocissima (fino a 800 km/h come un aereo); avvicinandosi alla costa, l'acqua si fa bassa, l'onda rallenta e <b>si alza</b>, anche di decine di metri. A volte il primo segnale è il <b>ritiro del mare</b>: in questo caso occorre allontanarsi subito verso l'alto. Gli tsunami più gravi: Oceano Indiano, 26 dicembre 2004 (Mw 9,1, oltre 200 000 vittime) e Giappone, 11 marzo 2011 (Mw 9,0-9,1, tsunami con circa 18 000 vittime e l'incidente nucleare di Fukushima). Anche il Mediterraneo li ha conosciuti (Messina 1908).</p>
<p><b>Che cosa fare in caso di terremoto.</b> Se sei in un edificio: ripararti sotto un tavolo robusto o vicino a una parete portante o a un architrave, lontano da finestre, mobili e oggetti che possono cadere; non usare l'ascensore; non correre sulle scale durante la scossa. Dopo la scossa, esci con calma e raggiungi uno spazio aperto lontano da edifici, cavi e cornicioni. All'aperto, resta lontano da edifici, alberi e linee elettriche. Ogni scuola ha un <b>piano di evacuazione</b> e punti di raccolta: le esercitazioni servono proprio a questo. Conoscere le regole riduce il panico e i danni.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire vulcani e terremoti",
      intro: "Fenomeni difficili da vedere dal vivo: prova queste immagini.",
      tabs: [
        { label: "🥤 La bottiglia gassata", html: "<p>Un magma ricco di gas è come una bottiglia di spumante agitata. Se il magma è <b>fluido</b> (poca silice) i gas escono dolcemente, come quando apri una bottiglia di acqua frizzante piano: l'eruzione è tranquilla. Se è <b>viscoso</b> (molta silice), i gas non riescono a sfuggire, la pressione sale e alla fine il tappo salta: eruzione esplosiva. Esattamente come con una bibita molto gassata, scossa, e poi aperta.</p>" },
        { label: "📏 L'elastico e il righello", html: "<p>Premi un righello di plastica contro il bordo del tavolo e piegalo: accumula energia elastica. Quando la resistenza si vince, il righello scatta di colpo e vibra. Una <b>faglia</b> fa lo stesso: le rocce si deformano per anni, secoli o millenni, e il terremoto è lo scatto. La stessa idea del rimbalzo elastico di Reid (1906).</p>" },
        { label: "💡 La lampadina", html: "<p>La <b>magnitudo</b> è la potenza della lampadina: un unico numero (60 W, 100 W). L'<b>intensità</b> è quanta luce vedi in un punto della stanza: forte sotto la lampadina, debole all'angolo. Per un terremoto: magnitudo = energia alla sorgente; intensità = quanto lo senti e quanti danni fa in un luogo, in un edificio, su un tipo di suolo.</p>" },
        { label: "🧭 La bussola delle onde", html: "<p>Le onde P viaggiano più veloci delle S, come in una gara tra un ciclista veloce e uno lento: più lunga è la corsa, più grande diventa il distacco all'arrivo. Misurando il ritardo tra P e S su un sismografo si ricava la distanza dell'epicentro. Con tre stazioni si tracciano tre cerchi e l'epicentro è dove si incontrano: è la stessa idea del GPS.</p>" }
      ]
    },
    {
      type: "curiosity",
      title: "Pompei: la fotografia di un'ora",
      html: `<p>Pompei è un tesoro per gli archeologi perché fu sepolta in poche ore da circa 3 metri di lapilli e ceneri caduti per il crollo della colonna pliniana, e poi da flussi piroclastici. Dei corpi delle vittime, rimasti avvolti nella cenere indurita, restano i vuoti: nel 1863 Giuseppe Fiorelli ebbe l'idea di versarvi del gesso liquido, ottenendo i celebri <b>calchi</b> con le posizioni esatte in cui le persone morirono. Secondo la tradizione (basata su una lettera di Plinio il Giovane) l'eruzione iniziò il 24 agosto; ma nel 2018 a Pompei è stata trovata un'iscrizione a carboncino datata al sedicesimo giorno prima delle calende di novembre (il 17 ottobre), il che farebbe pensare a un'eruzione avvenuta più tardi, in autunno. Una piccola correzione che mostra come la storia si riscriva con nuove scoperte.</p>`
    },
    {
      type: "curiosity",
      title: "L'eruzione che cambiò il clima",
      html: `<p>Il 10 aprile 1815 esplose il vulcano indonesiano <b>Tambora</b>, la più grande eruzione storica. Milioni di tonnellate di anidride solforosa e ceneri raggiunsero la stratosfera e schermarono la luce solare. Il 1816 è passato alla storia come \"<b>l'anno senza estate</b>\": in Europa e in Nord America raccolti perduti, neve a giugno, carestie. Quell'estate fredda e piovosa, trascorsa sul lago di Ginevra, ispirò a Mary Shelley il romanzo <i>Frankenstein</i>. Anche il Pinatubo, nelle Filippine (1991), abbassò di circa 0,5 °C la temperatura media globale per un paio d'anni. Un'eruzione enorme è una \"finestra\" sul legame tra Terra solida e atmosfera: lo riprenderemo nella lezione sul clima.</p>`
    },
    {
      type: "remember",
      title: "Le idee da portare via",
      html: `<ul>
<li><b>Magma</b> (sotto) → <b>lava</b> (fuori). Magma fluido e povero di silice: eruzioni effusive; magma viscoso e ricco di silice: eruzioni esplosive (piroclasti, flussi piroclastici).</li>
<li>Vulcani italiani: Vesuvio, Campi Flegrei, Etna, Stromboli, Vulcano, Marsili...</li>
<li><b>Terremoto</b>: rilascio improvviso di energia lungo una faglia (rimbalzo elastico); ipocentro (in profondità), epicentro (in superficie); onde P, S, superficiali.</li>
<li><b>Magnitudo</b> = energia, scala logaritmica (+1 = 32 volte l'energia); <b>intensità</b> = effetti (scala Mercalli, 12 gradi).</li>
<li><b>Rischio = pericolosità × vulnerabilità × esposizione</b>: i terremoti non si prevedono, ma si possono prevenire i danni.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa di vulcani e terremoti",
      nodes: [
        { id: "pl", label: "Tettonica delle placche", x: 50, y: 6, color: "#7c3aed", html: "I movimenti delle placche sono la causa di fondo.", why: "La mappa di vulcani e terremoti del mondo disegna i margini delle placche: fu uno degli argomenti che nel dopoguerra convinsero la comunità scientifica della teoria (Benioff, 1950s, mostrò i terremoti sempre più profondi lungo le zone di subduzione)." },
        { id: "mag", label: "Magma e gas", x: 18, y: 38, color: "#ef4444", html: "Silice, viscosità e gas decidono lo stile eruttivo.", why: "È la fisica della bibita gassata: i gas disciolti si espandono quando la pressione cala; se il magma è viscoso restano intrappolati e l'espansione diventa un'esplosione." },
        { id: "vul", label: "Vulcani", x: 20, y: 75, color: "#f59e0b", html: "Effusivi o esplosivi; prodotti: lava, piroclasti, gas.", why: "Dove una placca subduce, la fusione parziale del mantello produce magmi ricchi di silice ed esplosivi; dove la crosta si allontana (dorsali), magmi basaltici e fluidi." },
        { id: "fag", label: "Faglie e rimbalzo elastico", x: 80, y: 38, color: "#0ea5e9", html: "Accumulo e rilascio improvviso di energia.", why: "Reid (1910), studiando il terremoto di San Francisco del 1906, vide che le due parti della faglia di Sant'Andrea si erano spostate di alcuni metri: la deformazione si accumula lentamente e si libera di colpo." },
        { id: "sis", label: "Terremoti e onde sismiche", x: 78, y: 75, color: "#16a34a", html: "Ipocentro, epicentro, magnitudo, intensità.", why: "Le onde sismiche sono sia il modo in cui il terremoto fa danni, sia lo strumento con cui conosciamo l'interno della Terra e localizziamo i sismi." },
        { id: "risc", label: "Rischio e prevenzione", x: 50, y: 92, color: "#0f766e", html: "Pericolosità × vulnerabilità × esposizione.", why: "Non si può impedire un terremoto o un'eruzione, ma si può ridurre la vulnerabilità (edifici sicuri) e l'esposizione (pianificazione, piani di emergenza, educazione): è dove la scienza incontra la società." }
      ],
      edges: [["pl", "mag", "genera"], ["mag", "vul", "alimenta i"], ["pl", "fag", "carica le"], ["fag", "sis", "rilasciano"], ["vul", "risc", "e"], ["sis", "risc", "pongono il"]]
    }
  ],
  glossary: [
    { t: "Magma / Lava", d: "Roccia fusa sotto la superficie (magma) o emessa all'esterno (lava)." },
    { t: "Camera magmatica", d: "Serbatoio sotterraneo di magma sotto il vulcano." },
    { t: "Caldera", d: "Ampia depressione formata dal crollo del tetto di una camera magmatica svuotata." },
    { t: "Piroclasti", d: "Frammenti solidi lanciati nell'eruzione: ceneri, lapilli, bombe." },
    { t: "Flusso piroclastico", d: "Nube ardente di gas e frammenti che scende rapidamente lungo i fianchi del vulcano." },
    { t: "Bradisismo", d: "Lento innalzamento e abbassamento del suolo per variazioni nel sottosuolo (Campi Flegrei)." },
    { t: "Faglia", d: "Frattura della crosta lungo la quale due blocchi di roccia si spostano." },
    { t: "Ipocentro / Epicentro", d: "Punto in profondità in cui nasce il terremoto / punto sulla superficie sulla sua verticale." },
    { t: "Magnitudo", d: "Misura logaritmica dell'energia rilasciata da un terremoto alla sorgente (Richter, Mw)." },
    { t: "Intensità", d: "Misura degli effetti di un terremoto in un luogo (scala Mercalli-Cancani-Sieberg, 12 gradi)." },
    { t: "Tsunami", d: "Serie di onde marine generate da uno spostamento improvviso di grandi masse d'acqua." },
    { t: "Rischio sismico", d: "Prodotto di pericolosità, vulnerabilità ed esposizione." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale caratteristica del magma rende un'eruzione esplosiva?", options: ["Alta viscosità e molti gas intrappolati", "Bassa viscosità", "Assenza di silice", "Temperatura bassa"], answer: 0, explain: "Un magma viscoso, ricco di silice, trattiene i gas che aumentano la pressione fino all'esplosione." },
      { type: "mc", q: "Qual è il più alto vulcano attivo d'Europa?", options: ["Etna", "Vesuvio", "Stromboli", "Campi Flegrei"], answer: 0, explain: "L'Etna, in Sicilia, supera i 3300 m." },
      { type: "tf", q: "L'epicentro è il punto in profondità in cui ha origine il terremoto.", answer: false, explain: "Quello è l'ipocentro; l'epicentro è il punto in superficie sulla sua verticale." },
      { type: "mc", q: "Di quanto aumenta circa l'energia rilasciata quando la magnitudo cresce di 1?", options: ["Circa 32 volte", "10 volte", "2 volte", "Di una unità"], answer: 0, explain: "L'ampiezza aumenta di 10 volte e l'energia di circa 10^1,5 ≈ 32 volte." },
      { type: "num", q: "Quante volte è maggiore l'ampiezza delle onde di un terremoto di magnitudo 7 rispetto a uno di magnitudo 5?", answer: 100, tol: 0, explain: "La differenza è 2 unità: 10² = 100 volte l'ampiezza (l'energia è circa 1000 volte maggiore)." },
      { type: "mc", q: "Quale scala misura gli effetti di un terremoto sulle cose e sulle persone?", options: ["Scala Mercalli (intensità)", "Scala Richter (magnitudo)", "Scala Kelvin", "Scala Beaufort"], answer: 0, explain: "La Mercalli-Cancani-Sieberg ha 12 gradi e dipende dal luogo." },
      { type: "tf", q: "Oggi è possibile prevedere con precisione data e luogo del prossimo terremoto.", answer: false, explain: "Non esiste un metodo affidabile: si può calcolare la pericolosità probabilistica e fare prevenzione." },
      { type: "mc", q: "Quale fattore del rischio sismico possiamo ridurre con le costruzioni antisismiche?", options: ["La vulnerabilità", "La pericolosità", "La magnitudo", "La profondità"], answer: 0, explain: "Edifici adeguati si danneggiano meno: si riduce la vulnerabilità." },
      { type: "text", q: "Come si chiama la depressione ampia formata dal crollo del tetto di una camera magmatica svuotata?", answer: ["caldera", "la caldera"], explain: "Esempio: i Campi Flegrei sono una grande caldera." },
      { type: "order", q: "Metti in ordine cronologico questi eventi.", items: ["Eruzione del Vesuvio (79 d.C.)", "Terremoto di Messina (1908)", "Terremoto dell'Irpinia (1980)", "Terremoto dell'Aquila (2009)"], explain: "79 d.C., 1908, 1980, 2009." }
    ]
  }
});
