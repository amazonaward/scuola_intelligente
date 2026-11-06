TOPIC('it', {
  id: "m3-sci-riproduzione-genetica",
  title: "Riproduzione e genetica",
  intro: "Perché assomigli ai tuoi genitori ma non sei identico a loro? Perché due fratelli possono avere occhi di colore diverso? La risposta è scritta in una lunghissima molecola presente in ogni tua cellula: il <b>DNA</b>. In questa lezione vedremo come si riproducono gli esseri viventi, come funziona la riproduzione umana e come si ereditano i caratteri, dagli esperimenti di <b>Mendel</b> fino alla doppia elica.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Due modi di riprodursi",
      html: `<p>Tutti i viventi si riproducono, cioè generano nuovi individui della stessa specie. Ci sono due strategie:</p>
<table>
<tr><th>Riproduzione asessuata</th><th>Riproduzione sessuata</th></tr>
<tr><td>Basta <b>un solo genitore</b>. I figli sono <b>copie identiche</b> (cloni).</td><td>Servono <b>due genitori</b>, che producono cellule speciali, i <b>gameti</b>. I figli sono <b>diversi</b> dai genitori e tra loro.</td></tr>
<tr><td>Esempi: <b>scissione</b> dei batteri; <b>gemmazione</b> dell'idra e del lievito; <b>frammentazione</b> della stella marina; nelle piante <b>talee</b>, <b>tuberi</b> (patata), <b>stoloni</b> (fragola).</td><td>Esempi: quasi tutti gli animali e le piante con fiori. La <b>fecondazione</b> è l'unione di un gamete maschile e di uno femminile, che forma lo <b>zigote</b>.</td></tr>
<tr><td>✅ veloce, non serve un partner<br>❌ nessuna varietà: una malattia può colpire tutti</td><td>✅ grande <b>variabilità</b>: alcuni individui possono adattarsi a cambiamenti dell'ambiente<br>❌ più lenta e \"costosa\"</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Asessuata o sessuata?",
      widget: "classify",
      options: {
        groups: ["🧬 Asessuata (un genitore, cloni)", "💞 Sessuata (due gameti)"],
        items: [
          ["🦠 Un batterio che si divide in due", 0],
          ["🌱 Una talea di geranio che mette radici", 0],
          ["🐸 Le uova di rana fecondate", 1],
          ["🍓 Una fragola che produce stoloni", 0],
          ["🌸 Un fiore impollinato da un'ape", 1],
          ["⭐ Un braccio di stella marina che ricresce un corpo", 0],
          ["🐣 La nascita di un pulcino", 1],
          ["🍞 Il lievito che forma gemme", 0]
        ]
      },
      caption: "Tocca un esempio e poi il gruppo giusto."
    },
    {
      type: "text",
      title: "2. Cromosomi, mitosi e meiosi",
      html: `<p>Nel <b>nucleo</b> di ogni cellula il DNA è avvolto in strutture chiamate <b>cromosomi</b>. Le cellule umane ne hanno <b>46</b>, cioè <b>23 coppie</b>: in ogni coppia un cromosoma viene dalla madre e uno dal padre. 22 coppie sono uguali nei maschi e nelle femmine (<b>autosomi</b>); la 23ª è quella dei <b>cromosomi sessuali</b>: <b>XX</b> nelle femmine, <b>XY</b> nei maschi.</p>
<p>Le cellule si dividono in due modi:</p>
<ul>
<li><b>Mitosi</b>: da 1 cellula nascono <b>2 cellule identiche</b>, con 46 cromosomi ciascuna. Serve per crescere e riparare i tessuti (una ferita che si chiude).</li>
<li><b>Meiosi</b>: avviene solo negli organi riproduttivi. Da 1 cellula nascono <b>4 gameti</b> con <b>metà dei cromosomi</b>: 23. Durante la meiosi i cromosomi si scambiano pezzi (<b>crossing-over</b>): così ogni gamete è unico.</li>
</ul>
<p>Alla fecondazione: 23 (spermatozoo) + 23 (ovulo) = <b>46</b> cromosomi nello zigote. Il sesso dipende dallo spermatozoo: se porta una X nasce una femmina (XX), se porta una Y un maschio (XY). La probabilità è circa 1/2.</p>`
    },
    {
      type: "3d",
      title: "Dentro la cellula: dove si trova il DNA",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#86efac", label: "Membrana cellulare" },
          { r: 0.97, color: "#dcfce7", label: "Citoplasma (con i ribosomi, dove si fanno le proteine)" },
          { r: 0.45, color: "#a78bfa", label: "Membrana nucleare" },
          { r: 0.42, color: "#7c3aed", label: "Nucleo: 46 cromosomi di DNA" },
          { r: 0.12, color: "#f472b6", label: "Nucleolo" }
        ]
      },
      caption: "Il DNA di una sola cellula umana, srotolato, sarebbe lungo circa 2 metri, ma sta in un nucleo di pochi millesimi di millimetro."
    },
    {
      type: "text",
      title: "3. La riproduzione umana",
      html: `<p>Con la <b>pubertà</b> (in genere tra i 9 e i 14 anni, prima nelle ragazze) il corpo cambia sotto l'effetto degli <b>ormoni sessuali</b> e gli organi riproduttivi diventano capaci di produrre gameti.</p>
<p><b>Apparato riproduttore maschile</b>: i <b>testicoli</b> producono gli <b>spermatozoi</b> (dalla pubertà in poi, milioni ogni giorno) e l'ormone <b>testosterone</b>. Gli spermatozoi percorrono i dotti deferenti, si mescolano ai liquidi prodotti da vescicole seminali e prostata (formando lo sperma) ed escono dal <b>pene</b> attraverso l'uretra.</p>
<p><b>Apparato riproduttore femminile</b>: le <b>ovaie</b> contengono gli <b>ovuli</b> (già presenti dalla nascita) e producono <b>estrogeni</b> e <b>progesterone</b>. Circa una volta al mese un ovulo maturo viene liberato (<b>ovulazione</b>) e passa nella <b>tuba di Falloppio</b>. L'<b>utero</b> prepara una parete ricca di vasi sanguigni; se non avviene la fecondazione, questa parete si stacca: è la <b>mestruazione</b>. Il <b>ciclo mestruale</b> dura in media circa 28 giorni.</p>
<p><b>Dalla fecondazione alla nascita</b>:</p>
<ol>
<li>la <b>fecondazione</b> avviene nella tuba: uno spermatozoo entra nell'ovulo → <b>zigote</b>;</li>
<li>lo zigote si divide per mitosi e dopo circa una settimana si <b>impianta</b> nella parete dell'utero: è l'<b>embrione</b>;</li>
<li>si formano la <b>placenta</b> e il <b>cordone ombelicale</b>, che portano ossigeno e nutrienti dalla madre;</li>
<li>dal terzo mese si parla di <b>feto</b>: tutti gli organi sono abbozzati e crescono;</li>
<li>dopo circa <b>9 mesi</b> (40 settimane contate dall'ultima mestruazione) avviene il <b>parto</b>.</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: riproduzione e cromosomi",
      questions: [
        { type: "num", q: "Quanti cromosomi ha un gamete umano?", answer: 23, explain: "I gameti hanno metà dei cromosomi: 23." },
        { type: "mc", q: "A che cosa serve la mitosi?", options: ["A produrre i gameti", "A crescere e riparare i tessuti", "A cambiare il DNA"], answer: 1, explain: "La mitosi produce cellule identiche per crescita e riparazione." },
        { type: "mc", q: "Dove avviene di solito la fecondazione nella donna?", options: ["Nell'ovaia", "Nella tuba di Falloppio", "Nella placenta"], answer: 1, explain: "Lo spermatozoo incontra l'ovulo nella tuba." },
        { type: "tf", q: "Il sesso del bambino dipende dal cromosoma (X o Y) portato dallo spermatozoo.", answer: true, explain: "L'ovulo porta sempre una X; lo spermatozoo X o Y." }
      ]
    },
    {
      type: "text",
      title: "4. Il DNA, la molecola della vita",
      html: `<p>Il <b>DNA</b> (acido desossiribonucleico) è una lunga molecola a forma di <b>doppia elica</b>, come una scala a chiocciola:</p>
<ul>
<li>i due \"corrimano\" sono fatti di zucchero e fosfato;</li>
<li>i \"gradini\" sono coppie di <b>basi azotate</b>: <b>A</b> (adenina), <b>T</b> (timina), <b>G</b> (guanina), <b>C</b> (citosina). Si appaiano sempre allo stesso modo: <b>A con T</b> e <b>G con C</b>.</li>
</ul>
<p>La sequenza delle basi è un <b>codice</b>, come le lettere di un libro. Un <b>gene</b> è un tratto di DNA che contiene le istruzioni per costruire una <b>proteina</b> (per esempio l'emoglobina del sangue o il pigmento degli occhi). Le basi si leggono a gruppi di tre (<b>triplette</b>): ogni tripletta indica un mattoncino della proteina, un amminoacido.</p>
<p>Il DNA umano ha circa <b>3 miliardi di coppie di basi</b> e circa <b>20.000 geni</b>. Stampato, riempirebbe circa 200 volumi di elenco telefonico! Il <b>Progetto Genoma Umano</b> lo ha letto quasi tutto nel <b>2003</b>.</p>
<p>Poiché A sta con T e G con C, ogni filamento è lo \"stampo\" dell'altro: quando la cellula si divide, la doppia elica si apre e ogni metà ricostruisce quella mancante. Così il DNA si <b>copia</b>.</p>`
    },
    {
      type: "3d",
      title: "La doppia elica in 3D",
      scene: "molecule",
      options: {"atoms":[{"x":1,"y":-1.8,"z":0,"r":0.17,"color":"#64748b"},{"x":0.38,"y":-1.8,"z":0,"r":0.2,"color":"#ef4444","label":"A"},{"x":-0.38,"y":-1.8,"z":0,"r":0.2,"color":"#f59e0b","label":"T"},{"x":-1,"y":-1.8,"z":0,"r":0.17,"color":"#64748b"},{"x":0.81,"y":-1.4,"z":0.59,"r":0.17,"color":"#64748b"},{"x":0.31,"y":-1.4,"z":0.22,"r":0.2,"color":"#f59e0b","label":"T"},{"x":-0.31,"y":-1.4,"z":-0.22,"r":0.2,"color":"#ef4444","label":"A"},{"x":-0.81,"y":-1.4,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":0.31,"y":-1,"z":0.95,"r":0.17,"color":"#64748b"},{"x":0.12,"y":-1,"z":0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":-0.12,"y":-1,"z":-0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":-0.31,"y":-1,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":-0.6,"z":0.95,"r":0.17,"color":"#64748b"},{"x":-0.12,"y":-0.6,"z":0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":0.12,"y":-0.6,"z":-0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":0.31,"y":-0.6,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":-0.81,"y":-0.2,"z":0.59,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":-0.2,"z":0.22,"r":0.2,"color":"#22c55e","label":"G"},{"x":0.31,"y":-0.2,"z":-0.22,"r":0.2,"color":"#3b82f6","label":"C"},{"x":0.81,"y":-0.2,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":-1,"y":0.2,"z":0,"r":0.17,"color":"#64748b"},{"x":-0.38,"y":0.2,"z":0,"r":0.2,"color":"#f59e0b","label":"T"},{"x":0.38,"y":0.2,"z":0,"r":0.2,"color":"#ef4444","label":"A"},{"x":1,"y":0.2,"z":0,"r":0.17,"color":"#64748b"},{"x":-0.81,"y":0.6,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":0.6,"z":-0.22,"r":0.2,"color":"#ef4444","label":"A"},{"x":0.31,"y":0.6,"z":0.22,"r":0.2,"color":"#f59e0b","label":"T"},{"x":0.81,"y":0.6,"z":0.59,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":1,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":-0.12,"y":1,"z":-0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":0.12,"y":1,"z":0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":0.31,"y":1,"z":0.95,"r":0.17,"color":"#64748b"},{"x":0.31,"y":1.4,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":0.12,"y":1.4,"z":-0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":-0.12,"y":1.4,"z":0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":-0.31,"y":1.4,"z":0.95,"r":0.17,"color":"#64748b"},{"x":0.81,"y":1.8,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":0.31,"y":1.8,"z":-0.22,"r":0.2,"color":"#ef4444","label":"A"},{"x":-0.31,"y":1.8,"z":0.22,"r":0.2,"color":"#f59e0b","label":"T"},{"x":-0.81,"y":1.8,"z":0.59,"r":0.17,"color":"#64748b"}],"bonds":[[0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[0,4],[3,7],[8,9],[9,10],[10,11],[4,8],[7,11],[12,13],[13,14],[14,15],[8,12],[11,15],[16,17],[17,18],[18,19],[12,16],[15,19],[20,21],[21,22],[22,23],[16,20],[19,23],[24,25],[25,26],[26,27],[20,24],[23,27],[28,29],[29,30],[30,31],[24,28],[27,31],[32,33],[33,34],[34,35],[28,32],[31,35],[36,37],[37,38],[38,39],[32,36],[35,39]]},
      caption: "Modello semplificato di 10 gradini di DNA: i corrimano grigi sono zucchero-fosfato; le palline colorate sono le basi. Ruota l'elica e controlla: A (rosso) sta sempre con T (arancione), G (verde) con C (blu). Un giro completo dell'elica ha circa 10 gradini."
    },
    {
      type: "example",
      title: "Esempio pratico: completa il filamento",
      html: `<p>Un filamento di DNA ha la sequenza: <b>A T G C C A T</b>.</p>
<p>Il filamento complementare si scrive sostituendo A↔T e G↔C: <b>T A C G G T A</b>.</p>
<p>È esattamente quello che fa la cellula prima di dividersi. Prova tu: qual è il complementare di <b>G G A T C</b>? (Risposta: C C T A G.)</p>
<p>La stessa logica si usa nella <b>prova del DNA</b> della polizia scientifica e nei test di paternità: si confrontano tratti di DNA che variano molto da persona a persona.</p>`
    },
    {
      type: "text",
      title: "5. Mendel e le leggi dell'ereditarietà",
      html: `<p><b>Gregor Mendel</b> era un monaco agostiniano che viveva nel monastero di Brno (oggi in Repubblica Ceca). Tra il 1856 e il 1863 coltivò circa <b>28.000 piante di pisello</b>, studiando 7 caratteri (colore e forma del seme, colore del fiore, altezza della pianta…). Pubblicò i risultati nel <b>1866</b>, ma nessuno li capì fino al <b>1900</b>, quando furono riscoperti.</p>
<p>Oggi usiamo queste parole:</p>
<ul>
<li><b>allele</b>: ogni versione di un gene (es. \"seme giallo\" G e \"seme verde\" g). Ognuno di noi ha <b>2 alleli</b> per ogni gene, uno per genitore;</li>
<li><b>dominante</b> (lettera maiuscola): si manifesta anche se presente una sola volta; <b>recessivo</b> (minuscola): si manifesta solo se presente due volte;</li>
<li><b>omozigote</b>: due alleli uguali (GG o gg); <b>eterozigote</b>: diversi (Gg);</li>
<li><b>genotipo</b>: gli alleli posseduti; <b>fenotipo</b>: il carattere visibile.</li>
</ul>
<p><b>Le tre leggi di Mendel</b>:</p>
<ol>
<li><b>Dominanza</b> (uniformità): incrociando piante pure gialle (GG) e verdi (gg), tutti i figli (F1) sono Gg, cioè <b>gialli</b>.</li>
<li><b>Segregazione</b>: incrociando tra loro i figli Gg, i nipoti (F2) sono GG, Gg, gG, gg → <b>3 gialli : 1 verde</b>. Il carattere verde \"nascosto\" ricompare!</li>
<li><b>Assortimento indipendente</b>: caratteri diversi (colore e forma del seme) si ereditano in modo indipendente → in F2 proporzioni <b>9 : 3 : 3 : 1</b>.</li>
</ol>`
    },
    {
      type: "svg",
      title: "Il quadrato di Punnett: Gg × Gg",
      svg: `<svg viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="330" fill="#f7fee7"/>
<text x="300" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#14532d">Gameti del padre →</text>
<text x="40" y="195" font-size="18" text-anchor="middle" font-weight="bold" fill="#14532d" transform="rotate(-90 40 195)">Gameti della madre →</text>
<rect x="200" y="45" width="120" height="50" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<rect x="320" y="45" width="120" height="50" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="260" y="78" font-size="24" text-anchor="middle" font-weight="bold">G</text>
<text x="380" y="78" font-size="24" text-anchor="middle" font-weight="bold">g</text>
<rect x="80" y="95" width="120" height="100" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<rect x="80" y="195" width="120" height="100" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="140" y="153" font-size="24" text-anchor="middle" font-weight="bold">G</text>
<text x="140" y="253" font-size="24" text-anchor="middle" font-weight="bold">g</text>
<rect x="200" y="95" width="120" height="100" fill="#fef9c3" stroke="#166534" stroke-width="2"/>
<rect x="320" y="95" width="120" height="100" fill="#fef9c3" stroke="#166534" stroke-width="2"/>
<rect x="200" y="195" width="120" height="100" fill="#fef9c3" stroke="#166534" stroke-width="2"/>
<rect x="320" y="195" width="120" height="100" fill="#dcfce7" stroke="#166534" stroke-width="2"/>
<circle cx="260" cy="130" r="22" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<circle cx="380" cy="130" r="22" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<circle cx="260" cy="230" r="22" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<circle cx="380" cy="230" r="22" fill="#22c55e" stroke="#166534" stroke-width="2"/>
<text x="260" y="178" font-size="20" text-anchor="middle">GG</text>
<text x="380" y="178" font-size="20" text-anchor="middle">Gg</text>
<text x="260" y="278" font-size="20" text-anchor="middle">Gg</text>
<text x="380" y="278" font-size="20" text-anchor="middle">gg</text>
<text x="460" y="150" font-size="16" fill="#713f12">3 gialli</text>
<text x="460" y="172" font-size="16" fill="#713f12">(GG, Gg, Gg)</text>
<text x="460" y="240" font-size="16" fill="#14532d">1 verde (gg)</text>
<text x="300" y="320" font-size="15" text-anchor="middle" fill="#334155">Ogni casella ha probabilità 1/4: giallo 3/4 = 75%, verde 1/4 = 25%</text>
</svg>`,
      caption: "Il quadrato di Punnett (inventato da Reginald Punnett nel 1905) combina tutti i gameti possibili dei due genitori."
    },
    {
      type: "example",
      title: "Esempio pratico: i gruppi sanguigni",
      html: `<p>Il gruppo sanguigno AB0 dipende da un gene con 3 alleli: <b>A</b> e <b>B</b> sono entrambi dominanti su <b>0</b>, e tra loro sono <b>codominanti</b> (se ci sono tutti e due si vedono entrambi: gruppo AB).</p>
<p>Mamma di gruppo A con genotipo <b>A0</b>, papà di gruppo B con genotipo <b>B0</b>. Gameti della mamma: A o 0; del papà: B o 0. Il quadrato di Punnett dà:</p>
<table><tr><th></th><th>B</th><th>0</th></tr>
<tr><th>A</th><td>AB → gruppo <b>AB</b></td><td>A0 → gruppo <b>A</b></td></tr>
<tr><th>0</th><td>B0 → gruppo <b>B</b></td><td>00 → gruppo <b>0</b></td></tr></table>
<p>Ogni figlio ha <b>1/4</b> di probabilità per ciascun gruppo: in questa famiglia i figli potrebbero avere tutti e quattro i gruppi diversi! Conoscere il gruppo sanguigno è fondamentale per le <b>trasfusioni</b>: per questo donare il sangue (da maggiorenni) è così importante.</p>`
    },
    {
      type: "text",
      title: "6. Mutazioni e malattie genetiche",
      html: `<p>Una <b>mutazione</b> è un cambiamento nel DNA. Può nascere da un errore durante la copiatura oppure essere causata da <b>agenti mutageni</b>: raggi ultravioletti del Sole, radiazioni, alcune sostanze chimiche come quelle del <b>fumo di sigaretta</b>. Molte mutazioni non hanno effetti; alcune sono dannose; poche sono vantaggiose e sono il \"motore\" dell'evoluzione.</p>
<ul>
<li><b>Malattie recessive</b>, come la <b>fibrosi cistica</b>: si manifestano solo se si ricevono due alleli mutati. Chi ne ha uno solo è un <b>portatore sano</b>: in Italia circa 1 persona su 25–30.</li>
<li><b>Caratteri legati al cromosoma X</b>, come il <b>daltonismo</b> (difficoltà a distinguere rosso e verde): colpisce circa l'8% dei maschi e meno dell'1% delle femmine. I maschi hanno una sola X: se è mutata, il carattere si manifesta; le femmine ne hanno due, e la seconda di solito \"compensa\".</li>
<li><b>Variazioni nel numero di cromosomi</b>: nella <b>sindrome di Down</b> c'è un cromosoma 21 in più (47 cromosomi). Lo scoprì il medico francese Jérôme Lejeune nel 1959. Le persone con sindrome di Down studiano, lavorano, fanno sport e hanno, come tutti, talenti e caratteri diversi.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Abbina la parola al significato",
      widget: "match",
      options: {
        pairs: [
          ["Allele", "Una versione di un gene"],
          ["Genotipo", "Gli alleli che possiedi (es. Gg)"],
          ["Fenotipo", "Il carattere che si vede (es. giallo)"],
          ["Omozigote", "Due alleli uguali"],
          ["Eterozigote", "Due alleli diversi"],
          ["Recessivo", "Si vede solo se presente due volte"]
        ]
      },
      caption: "Il vocabolario della genetica: abbina ogni termine."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La foto che svelò la doppia elica",
      html: `<p>Nel 1953 <b>James Watson</b> e <b>Francis Crick</b> pubblicarono il modello a doppia elica del DNA. Ci riuscirono anche grazie a una fotografia ai raggi X, la famosa <b>\"Foto 51\"</b>, ottenuta da <b>Rosalind Franklin</b> e dal suo studente Raymond Gosling. Nel 1962 Watson, Crick e Maurice Wilkins ricevettero il Nobel; Franklin era morta nel 1958, a soli 37 anni, e il suo contributo è stato riconosciuto pienamente solo molto più tardi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Gemelli e forbici molecolari",
      html: `<p>I <b>gemelli identici</b> (monozigoti) nascono da un unico zigote che si divide in due: hanno lo stesso DNA, ma non le stesse impronte digitali! I gemelli <b>non identici</b> nascono da due ovuli fecondati da due spermatozoi diversi: si assomigliano come due fratelli qualsiasi.</p>
<p>Nel 2012 <b>Jennifer Doudna</b> ed <b>Emmanuelle Charpentier</b> hanno sviluppato <b>CRISPR</b>, una \"forbice\" molecolare che taglia il DNA in un punto preciso: è usata nella ricerca per curare malattie genetiche. Hanno vinto il Nobel per la chimica nel 2020.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la genetica",
      intro: "La genetica si capisce meglio quando si \"vede\". Prova uno di questi punti di vista.",
      tabs: [
        {
          label: "📖 Il DNA come un libro di ricette",
          html: `<p>Immagina il DNA come un enorme <b>ricettario</b> conservato in cucina (il nucleo):</p>
<ul>
<li>le <b>lettere</b> sono le 4 basi A, T, G, C;</li>
<li>le <b>parole</b> di 3 lettere (triplette) indicano un ingrediente (un amminoacido);</li>
<li>una <b>ricetta</b> è un gene: dice come preparare un piatto, cioè una proteina;</li>
<li>i <b>capitoli</b> sono i cromosomi: 46 volumi, in 23 coppie (una copia dalla mamma, una dal papà);</li>
<li>una <b>mutazione</b> è un errore di stampa: a volte non cambia nulla, a volte rovina il piatto, a volte ne inventa uno nuovo e buonissimo.</li>
</ul>
<p>Se di una ricetta hai due versioni (due alleli) e una è \"più forte\", in tavola arriva quella: è la <b>dominanza</b>.</p>`
        },
        {
          label: "🇺🇸 Metodo \"a rami\" (forked-line)",
          html: `<p>Nelle scuole statunitensi, per gli incroci con <b>due caratteri</b> invece di un quadrato di 16 caselle si usa il <b>metodo a rami</b>: si calcola ogni carattere separatamente e poi si moltiplicano le probabilità (perché i caratteri sono indipendenti, terza legge di Mendel).</p>
<p>Incrocio GgLl × GgLl (G = giallo, L = liscio):</p>
<ul>
<li>colore: 3/4 giallo, 1/4 verde;</li>
<li>forma: 3/4 liscio, 1/4 rugoso.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<text x="80" y="80" font-size="17" text-anchor="middle" font-weight="bold" fill="#a16207">3/4 giallo</text>
<text x="80" y="200" font-size="17" text-anchor="middle" font-weight="bold" fill="#15803d">1/4 verde</text>
<line x1="135" y1="75" x2="230" y2="45" stroke="#334155" stroke-width="3"/>
<line x1="135" y1="75" x2="230" y2="110" stroke="#334155" stroke-width="3"/>
<line x1="135" y1="195" x2="230" y2="165" stroke="#334155" stroke-width="3"/>
<line x1="135" y1="195" x2="230" y2="230" stroke="#334155" stroke-width="3"/>
<text x="240" y="50" font-size="16" fill="#0f172a">3/4 liscio</text>
<text x="240" y="115" font-size="16" fill="#0f172a">1/4 rugoso</text>
<text x="240" y="170" font-size="16" fill="#0f172a">3/4 liscio</text>
<text x="240" y="235" font-size="16" fill="#0f172a">1/4 rugoso</text>
<text x="360" y="50" font-size="16" fill="#0f172a">→ giallo liscio = <tspan font-weight="bold">9/16</tspan></text>
<text x="360" y="115" font-size="16" fill="#0f172a">→ giallo rugoso = <tspan font-weight="bold">3/16</tspan></text>
<text x="360" y="170" font-size="16" fill="#0f172a">→ verde liscio = <tspan font-weight="bold">3/16</tspan></text>
<text x="360" y="235" font-size="16" fill="#0f172a">→ verde rugoso = <tspan font-weight="bold">1/16</tspan></text>
</svg>`
        },
        {
          label: "🧬 La doppia elica da ruotare",
          html: `<p>Ruota l'elica e osserva le coppie di basi: è come una cerniera lampo attorcigliata. Quando la cellula si divide, la cerniera si apre e ogni metà si richiude con basi nuove: A chiama T, G chiama C. Così si ottengono due copie identiche.</p>`,
          scene: "molecule",
          options: {"atoms":[{"x":1,"y":-1.8,"z":0,"r":0.17,"color":"#64748b"},{"x":0.38,"y":-1.8,"z":0,"r":0.2,"color":"#ef4444","label":"A"},{"x":-0.38,"y":-1.8,"z":0,"r":0.2,"color":"#f59e0b","label":"T"},{"x":-1,"y":-1.8,"z":0,"r":0.17,"color":"#64748b"},{"x":0.81,"y":-1.4,"z":0.59,"r":0.17,"color":"#64748b"},{"x":0.31,"y":-1.4,"z":0.22,"r":0.2,"color":"#f59e0b","label":"T"},{"x":-0.31,"y":-1.4,"z":-0.22,"r":0.2,"color":"#ef4444","label":"A"},{"x":-0.81,"y":-1.4,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":0.31,"y":-1,"z":0.95,"r":0.17,"color":"#64748b"},{"x":0.12,"y":-1,"z":0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":-0.12,"y":-1,"z":-0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":-0.31,"y":-1,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":-0.6,"z":0.95,"r":0.17,"color":"#64748b"},{"x":-0.12,"y":-0.6,"z":0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":0.12,"y":-0.6,"z":-0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":0.31,"y":-0.6,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":-0.81,"y":-0.2,"z":0.59,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":-0.2,"z":0.22,"r":0.2,"color":"#22c55e","label":"G"},{"x":0.31,"y":-0.2,"z":-0.22,"r":0.2,"color":"#3b82f6","label":"C"},{"x":0.81,"y":-0.2,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":-1,"y":0.2,"z":0,"r":0.17,"color":"#64748b"},{"x":-0.38,"y":0.2,"z":0,"r":0.2,"color":"#f59e0b","label":"T"},{"x":0.38,"y":0.2,"z":0,"r":0.2,"color":"#ef4444","label":"A"},{"x":1,"y":0.2,"z":0,"r":0.17,"color":"#64748b"},{"x":-0.81,"y":0.6,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":0.6,"z":-0.22,"r":0.2,"color":"#ef4444","label":"A"},{"x":0.31,"y":0.6,"z":0.22,"r":0.2,"color":"#f59e0b","label":"T"},{"x":0.81,"y":0.6,"z":0.59,"r":0.17,"color":"#64748b"},{"x":-0.31,"y":1,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":-0.12,"y":1,"z":-0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":0.12,"y":1,"z":0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":0.31,"y":1,"z":0.95,"r":0.17,"color":"#64748b"},{"x":0.31,"y":1.4,"z":-0.95,"r":0.17,"color":"#64748b"},{"x":0.12,"y":1.4,"z":-0.36,"r":0.2,"color":"#22c55e","label":"G"},{"x":-0.12,"y":1.4,"z":0.36,"r":0.2,"color":"#3b82f6","label":"C"},{"x":-0.31,"y":1.4,"z":0.95,"r":0.17,"color":"#64748b"},{"x":0.81,"y":1.8,"z":-0.59,"r":0.17,"color":"#64748b"},{"x":0.31,"y":1.8,"z":-0.22,"r":0.2,"color":"#ef4444","label":"A"},{"x":-0.31,"y":1.8,"z":0.22,"r":0.2,"color":"#f59e0b","label":"T"},{"x":-0.81,"y":1.8,"z":0.59,"r":0.17,"color":"#64748b"}],"bonds":[[0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[0,4],[3,7],[8,9],[9,10],[10,11],[4,8],[7,11],[12,13],[13,14],[14,15],[8,12],[11,15],[16,17],[17,18],[18,19],[12,16],[15,19],[20,21],[21,22],[22,23],[16,20],[19,23],[24,25],[25,26],[26,27],[20,24],[23,27],[28,29],[29,30],[30,31],[24,28],[27,31],[32,33],[33,34],[34,35],[28,32],[31,35],[36,37],[37,38],[38,39],[32,36],[35,39]]}
        },
        {
          label: "🎲 Con i dadi e le monete",
          html: `<p>Fai un esperimento: due compagni sono i genitori <b>Gg</b>. Ognuno lancia una moneta: <b>testa = G</b>, <b>croce = g</b>. Le due monete insieme danno il genotipo del \"figlio\". Ripetete 40 volte e contate: otterrete circa 10 GG, 20 Gg e 10 gg, cioè circa <b>30 gialli e 10 verdi (3:1)</b>. È esattamente ciò che vide Mendel: l'ereditarietà segue le leggi della <b>probabilità</b>, perché ogni gamete riceve a caso uno dei due alleli.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della genetica: tocca i nodi e scopri il perché",
      nodes: [
        { id: "riproduzione", label: "Riproduzione", x: 50, y: 6, color: "#ec4899", html: "Asessuata (un genitore, cloni) o sessuata (due gameti, variabilità).", why: "La riproduzione sessuata, comparsa più di un miliardo di anni fa, mescola i geni a ogni generazione: la variabilità aiuta le specie a sopravvivere ai cambiamenti e alle malattie." },
        { id: "meiosi", label: "Meiosi e gameti", x: 20, y: 28, color: "#f97316", html: "Divisione che produce 4 gameti con 23 cromosomi.", why: "Se i gameti avessero 46 cromosomi, a ogni generazione il numero raddoppierebbe. La meiosi fu osservata per la prima volta da Oscar Hertwig nel 1876 nelle uova di riccio di mare." },
        { id: "cromosomi", label: "Cromosomi", x: 80, y: 28, color: "#a855f7", html: "46 nell'uomo, in 23 coppie; XX o XY.", why: "Furono visti al microscopio nell'Ottocento; nel 1902 Walter Sutton e Theodor Boveri capirono che si comportano proprio come i \"fattori\" di Mendel. Il numero esatto, 46, fu contato solo nel 1956 (Tjio e Levan)." },
        { id: "mendel", label: "Leggi di Mendel", x: 20, y: 55, color: "#16a34a", html: "Dominanza, segregazione, assortimento indipendente.", why: "<b>Gregor Mendel</b> le ricavò dai piselli contando migliaia di semi e usando la matematica (pubblicate nel 1866). Furono riscoperte nel 1900 da de Vries, Correns e Tschermak." },
        { id: "dna", label: "DNA", x: 80, y: 55, color: "#2563eb", html: "La molecola a doppia elica che contiene le informazioni ereditarie.", why: "Isolato da Friedrich Miescher nel 1869; Avery nel 1944 dimostrò che è il materiale genetico; la struttura fu scoperta nel 1953 da <b>Watson e Crick</b> grazie alle immagini di <b>Rosalind Franklin</b>." },
        { id: "gene", label: "Geni e alleli", x: 50, y: 45, color: "#0ea5e9", html: "Tratti di DNA con le istruzioni per una proteina; le versioni si chiamano alleli.", why: "La parola \"gene\" fu inventata nel 1909 dal danese Wilhelm Johannsen. Gli alleli esistono perché nel tempo le mutazioni hanno creato versioni diverse dello stesso gene." },
        { id: "fenotipo", label: "Fenotipo", x: 50, y: 75, color: "#facc15", html: "I caratteri visibili, frutto di genotipo e ambiente.", why: "Le proteine costruite dai geni determinano colore, forma e funzioni; ma anche l'ambiente conta: l'altezza dipende dai geni e dall'alimentazione." },
        { id: "mutazioni", label: "Mutazioni", x: 82, y: 85, color: "#ef4444", html: "Cambiamenti nella sequenza del DNA.", why: "La copiatura del DNA è precisissima ma non perfetta, e UV, radiazioni e sostanze chimiche possono danneggiarlo. Senza mutazioni non ci sarebbero alleli nuovi né evoluzione." },
        { id: "biotech", label: "Biotecnologie", x: 18, y: 88, color: "#64748b", html: "Test genetici, insulina prodotta da batteri, CRISPR.", why: "Conoscendo il codice si può leggere e modificare il DNA: dal 1982 l'insulina per i diabetici è prodotta da batteri modificati; nel 2012 è nato CRISPR. Usi e limiti si decidono anche con la <b>bioetica</b>." }
      ],
      edges: [
        ["riproduzione", "meiosi", "sessuata usa la"],
        ["meiosi", "cromosomi", "dimezza i"],
        ["cromosomi", "dna", "sono fatti di"],
        ["dna", "gene", "contiene i"],
        ["mendel", "gene", "scoprì i \"fattori\" ="],
        ["gene", "fenotipo", "determinano il"],
        ["dna", "mutazioni", "può subire"],
        ["mutazioni", "gene", "creano nuovi alleli"],
        ["dna", "biotech", "è letto e modificato dalle"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: DNA e Mendel",
      questions: [
        { type: "text", q: "Con quale base si appaia sempre la G?", answer: ["c", "citosina", "la citosina"], explain: "G (guanina) si appaia con C (citosina)." },
        { type: "mc", q: "Incrociando Gg × Gg, che probabilità ha un figlio di essere gg?", options: ["0", "1/4", "1/2", "3/4"], answer: 1, explain: "Una casella su quattro del quadrato di Punnett." },
        { type: "tf", q: "Un individuo Gg ha il seme verde.", answer: false, explain: "G (giallo) è dominante: il fenotipo è giallo." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Riproduzione <b>asessuata</b> = cloni; <b>sessuata</b> = gameti + fecondazione = variabilità.</li>
<li>Cellule umane: <b>46 cromosomi</b> (23 coppie); gameti: <b>23</b>. Mitosi → 2 cellule uguali; meiosi → 4 gameti.</li>
<li>DNA: doppia elica; basi <b>A–T</b> e <b>G–C</b>; un <b>gene</b> = istruzioni per una proteina.</li>
<li>Mendel: dominanza, segregazione (3:1), assortimento indipendente (9:3:3:1).</li>
<li>Genotipo = alleli; fenotipo = carattere visibile.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Gamete", d: "Cellula riproduttiva con metà dei cromosomi: spermatozoo o ovulo." },
    { t: "Zigote", d: "La prima cellula del nuovo individuo, nata dalla fecondazione." },
    { t: "Cromosoma", d: "Struttura del nucleo formata da DNA avvolto su proteine." },
    { t: "Mitosi", d: "Divisione cellulare che produce due cellule identiche." },
    { t: "Meiosi", d: "Divisione che produce quattro gameti con metà dei cromosomi." },
    { t: "DNA", d: "Acido desossiribonucleico: la molecola che contiene l'informazione genetica." },
    { t: "Gene", d: "Tratto di DNA che contiene le istruzioni per una proteina." },
    { t: "Allele", d: "Ognuna delle forme alternative di un gene." },
    { t: "Dominante / recessivo", d: "Allele che si manifesta sempre / solo in doppia copia." },
    { t: "Genotipo", d: "L'insieme degli alleli di un individuo." },
    { t: "Fenotipo", d: "L'insieme dei caratteri osservabili." },
    { t: "Mutazione", d: "Cambiamento nella sequenza del DNA." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di questi è un esempio di riproduzione asessuata?", options: ["La fecondazione di un ovulo", "La talea di una pianta", "L'impollinazione di un fiore"], answer: 1, explain: "Dalla talea nasce una pianta identica alla madre." },
      { type: "num", q: "Quanti cromosomi ha una cellula della pelle umana?", answer: 46, explain: "Le cellule del corpo hanno 46 cromosomi (23 coppie)." },
      { type: "mc", q: "La meiosi produce…", options: ["2 cellule identiche con 46 cromosomi", "4 gameti con 23 cromosomi", "1 zigote"], answer: 1, explain: "La meiosi produce 4 gameti aploidi." },
      { type: "text", q: "Scrivi il filamento complementare di ATTGC.", answer: ["taacg"], explain: "A↔T, G↔C: TAACG." },
      { type: "tf", q: "Il DNA ha la forma di una doppia elica.", answer: true, explain: "Come una scala a chiocciola." },
      { type: "mc", q: "Chi scoprì le leggi dell'ereditarietà studiando i piselli?", options: ["Charles Darwin", "Gregor Mendel", "Francis Crick"], answer: 1, explain: "Gregor Mendel, pubblicazione del 1866." },
      { type: "mc", q: "Incrociando GG × gg, i figli sono…", options: ["tutti Gg (gialli)", "metà gialli e metà verdi", "tutti gg (verdi)"], answer: 0, explain: "Prima legge: uniformità della F1." },
      { type: "mc", q: "Nell'incrocio Gg × Gg, che rapporto tra gialli e verdi ci si aspetta?", options: ["1:1", "3:1", "9:3:3:1"], answer: 1, explain: "Seconda legge: 3 gialli e 1 verde." },
      { type: "mc", q: "Mamma A0 e papà B0: quale gruppo sanguigno NON può avere un figlio?", options: ["AB", "0", "Nessuno: sono tutti possibili"], answer: 2, explain: "Il quadrato dà AB, A, B e 0, ciascuno con probabilità 1/4." },
      { type: "tf", q: "Il daltonismo è più frequente nei maschi perché hanno un solo cromosoma X.", answer: true, explain: "Con una sola X, un allele mutato basta a manifestare il carattere." },
      { type: "order", q: "Metti in ordine le tappe dello sviluppo.", items: ["Fecondazione", "Zigote", "Embrione impiantato nell'utero", "Feto", "Parto"], explain: "Dallo zigote all'embrione, poi al feto e alla nascita." },
      { type: "text", q: "Come si chiama il carattere visibile di un individuo (opposto al genotipo)?", answer: ["fenotipo", "il fenotipo"], explain: "Il fenotipo." }
    ]
  }
});
