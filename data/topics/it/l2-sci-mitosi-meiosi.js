TOPIC('it', {
  id: "l2-sci-mitosi-meiosi",
  title: "Mitosi e meiosi",
  intro: "Un neonato è nato da una sola cellula, lo zigote. Oggi, da adulto, ha decine di migliaia di miliardi di cellule, e continua a produrne milioni ogni secondo per rimpiazzare quelle vecchie. Come fa una cellula a diventare due, senza perdere nemmeno un'informazione genetica? E come fanno due genitori a produrre un figlio che non è identico a nessuno dei due? Le risposte sono la <b>mitosi</b>, che produce copie identiche, e la <b>meiosi</b>, che produce i gameti, ogni volta diversi. Insieme al <b>ciclo cellulare</b>, sono il tema di questa lezione.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Cromosomi, DNA e numero cromosomico",
      html: `<p>Il DNA di una cellula eucariote è diviso in molecole lineari avvolte attorno a proteine (<i>istoni</i>): la <b>cromatina</b>. Nel momento della divisione la cromatina si condensa fino a formare i <b>cromosomi</b>, visibili al microscopio ottico. Un cromosoma duplicato è composto da due <b>cromatidi fratelli</b>, copie identiche unite in un punto detto <b>centromero</b>.</p>
<p>Nella specie umana ogni cellula del corpo (cellula <b>somatica</b>) ha <b>46 cromosomi</b>, organizzati in <b>23 coppie di cromosomi omologhi</b>: per ogni coppia, un cromosoma viene dal padre e uno dalla madre. Gli omologhi hanno la stessa forma e gli stessi geni (anche se con eventuali versioni, o <b>alleli</b>, differenti). Ventidue coppie sono <b>autosomi</b>, la ventitreesima è la coppia dei <b>cromosomi sessuali</b>: XX nella donna, XY nell'uomo.</p>
<ul>
<li>Una cellula con le coppie complete è <b>diploide</b> (<b>2n</b>): nell'uomo 2n = 46.</li>
<li>I <b>gameti</b> (cellula uovo e spermatozoo) hanno un solo cromosoma per coppia: sono <b>aploidi</b> (<b>n</b>): nell'uomo n = 23.</li>
<li>La fecondazione unisce due gameti: n + n = 2n e il numero originale viene ripristinato.</li>
</ul>
<p>Il numero di cromosomi è caratteristico di ogni specie, ma non dice quanto sia "evoluto" un organismo: lo scimpanzé ha 48 cromosomi, il cane 78, il pisello 14, il riso 24, un carassio 100 circa, una specie di formica australiana (<i>Myrmecia pilosula</i>) solo 2 (e i maschi 1).</p>`
    },
    {
      type: "text",
      title: "Il ciclo cellulare",
      html: `<p>Una cellula che si divide percorre un percorso ciclico: il <b>ciclo cellulare</b>. Si divide in due grandi periodi:</p>
<ul>
<li><b>Interfase</b>: è il periodo di crescita e di preparazione (occupa di solito il 90% del ciclo, circa 22-23 ore su 24 in una cellula umana in coltura). Comprende:
<ul>
<li><b>G1</b> (Gap 1): la cellula cresce, svolge le sue funzioni, produce proteine e organuli;</li>
<li><b>S</b> (sintesi): il DNA viene <b>replicato</b>; alla fine ogni cromosoma è composto da due cromatidi fratelli. Il centrosoma si duplica;</li>
<li><b>G2</b> (Gap 2): ulteriore crescita, controllo della replicazione, preparazione alla divisione.</li>
</ul></li>
<li><b>Fase M</b> (mitosi + citodieresi): divisione del nucleo e poi del citoplasma, circa un'ora.</li>
</ul>
<p>Alcune cellule escono dal ciclo e restano in una fase <b>G0</b> di quiescenza: i neuroni maturi e le cellule muscolari non si dividono più, altre (come quelle del fegato) possono rientrare nel ciclo se serve una riparazione.</p>
<p>Il ciclo è sorvegliato da <b>punti di controllo</b> (checkpoint), soprattutto alla fine di G1, in G2 e in metafase, dove proteine come le <b>cicline</b> e le <b>chinasi ciclina-dipendenti</b> (Cdk) decidono se procedere: "il DNA è integro? è stato copiato per intero? i cromosomi sono tutti attaccati al fuso?". Se il DNA è danneggiato, la proteina <b>p53</b> blocca il ciclo o attiva la morte cellulare programmata (<b>apoptosi</b>). Se questi controlli falliscono la cellula può diventare tumorale.</p>`
    },
    {
      type: "svg",
      title: "Il ciclo cellulare",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="300" cy="150" r="110" fill="none" stroke="#cbd5e1" stroke-width="40"/>
<path d="M300 40 A110 110 0 0 1 395 205" fill="none" stroke="#22c55e" stroke-width="40"/>
<path d="M395 205 A110 110 0 0 1 220 240" fill="none" stroke="#f59e0b" stroke-width="40"/>
<path d="M220 240 A110 110 0 0 1 190 85" fill="none" stroke="#3b82f6" stroke-width="40"/>
<path d="M190 85 A110 110 0 0 1 300 40" fill="none" stroke="#ef4444" stroke-width="40"/>
<text x="300" y="150" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">Ciclo</text>
<text x="300" y="172" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">cellulare</text>
<text x="450" y="95" font-size="16" font-weight="bold" fill="#166534">G1: crescita</text>
<text x="440" y="250" font-size="16" font-weight="bold" fill="#92400e">S: replicazione DNA</text>
<text x="60" y="230" font-size="16" font-weight="bold" fill="#1e40af">G2: preparazione</text>
<text x="60" y="55" font-size="16" font-weight="bold" fill="#991b1b">M: divisione</text>
<text x="300" y="285" font-size="14" fill="#475569" text-anchor="middle">G1 + S + G2 = interfase (la maggior parte del tempo)</text>
</svg>`,
      caption: "Il ciclo di una cellula: G1, S e G2 formano l'interfase; la fase M (mitosi e citodieresi) è breve."
    },
    {
      type: "text",
      title: "La mitosi in cinque tappe",
      html: `<p>La <b>mitosi</b> (termine introdotto da Walther Flemming nel 1882 dal greco <i>mitos</i>, filo) distribuisce i cromosomi duplicati in due nuclei identici. Una cellula 2n produce due cellule 2n, geneticamente uguali alla madre.</p>
<ol>
<li><b>Profase</b>: la cromatina si condensa in cromosomi (ciascuno con due cromatidi fratelli); il nucleolo scompare; i centrosomi si spostano ai poli e dai centrioli si forma il <b>fuso mitotico</b> di microtubuli. In <b>prometafase</b> l'involucro nucleare si frammenta e i microtubuli si attaccano ai cromosomi nei <b>cinetocori</b> (strutture proteiche del centromero).</li>
<li><b>Metafase</b>: i cromosomi si allineano sul piano equatoriale della cellula (<b>piastra metafasica</b>). È il momento migliore per contare e fotografare i cromosomi (il <b>cariotipo</b>).</li>
<li><b>Anafase</b>: i centromeri si dividono e i cromatidi fratelli, adesso cromosomi a tutti gli effetti, vengono trascinati verso i poli opposti dall'accorciamento dei microtubuli. Ogni polo riceve un set completo.</li>
<li><b>Telofase</b>: i cromosomi si decondensano, ricompaiono l'involucro nucleare e i nucleoli: due nuclei figli.</li>
<li><b>Citodieresi</b> (non è una fase della mitosi, ma la accompagna): il citoplasma si divide. Nelle cellule animali un <b>anello contrattile</b> di actina e miosina forma un solco di strozzamento; nelle cellule vegetali la parete impedisce la strozzatura e si forma una <b>piastra cellulare</b> a metà della cellula, che diventa la nuova parete.</li>
</ol>
<p>Il risultato: <b>due cellule figlie con lo stesso numero di cromosomi e lo stesso DNA della madre</b>.</p>`
    },
    {
      type: "svg",
      title: "Le fasi della mitosi (cellula con 2n = 4)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g fill="#fff" stroke="#475569" stroke-width="3"><circle cx="70" cy="130" r="55"/><circle cx="195" cy="130" r="55"/><circle cx="320" cy="130" r="55"/><circle cx="445" cy="130" r="55"/></g>
<ellipse cx="540" cy="130" rx="55" ry="45" fill="#fff" stroke="#475569" stroke-width="3"/>
<g stroke-width="6" stroke-linecap="round" fill="none">
<path d="M45 115 l10 15 M60 110 l10 18" stroke="#dc2626"/><path d="M70 140 l12 -10 M88 148 l14 -8" stroke="#2563eb"/>
<line x1="170" y1="110" x2="190" y2="125" stroke="#dc2626"/><line x1="190" y1="110" x2="170" y2="125" stroke="#dc2626"/><line x1="210" y1="140" x2="225" y2="155" stroke="#2563eb"/><line x1="225" y1="140" x2="210" y2="155" stroke="#2563eb"/>
<line x1="320" y1="85" x2="320" y2="175" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4"/>
<path d="M305 100 l30 0 M305 125 l30 0" stroke="#dc2626"/><path d="M305 150 l30 0 M305 170 l30 0" stroke="#2563eb"/>
<path d="M425 90 l12 -8 M452 90 l-12 -8 M425 170 l12 8 M452 170 l-12 8" stroke="#dc2626"/><path d="M428 110 l10 -8 M450 110 l-10 -8 M428 150 l10 8 M450 150 l-10 8" stroke="#2563eb"/>
<circle cx="520" cy="130" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="3"/><circle cx="560" cy="130" r="16" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
<line x1="540" y1="87" x2="540" y2="173" stroke="#475569" stroke-width="4" stroke-dasharray="3 3"/>
</g>
<text x="70" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Profase</text>
<text x="195" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Prometafase</text>
<text x="320" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Metafase</text>
<text x="445" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Anafase</text>
<text x="540" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Telofase</text>
<text x="300" y="265" font-size="14" fill="#475569" text-anchor="middle">Rosso e blu: due coppie di cromosomi omologhi (una coppia di grandi, una di piccoli)</text>
</svg>`,
      caption: "In metafase i cromosomi sono sul piano equatoriale; in anafase i cromatidi fratelli si separano verso i poli opposti."
    },
    {
      type: "widget",
      title: "Che cosa succede in ogni fase?",
      widget: "match",
      options: { pairs: [
        ["Profase", "La cromatina si condensa in cromosomi, si forma il fuso"],
        ["Metafase", "I cromosomi si allineano sul piano equatoriale"],
        ["Anafase", "I cromatidi fratelli si separano verso i poli"],
        ["Telofase", "Si riformano gli involucri nucleari"],
        ["Citodieresi", "Il citoplasma si divide in due cellule"],
        ["Fase S", "Il DNA viene replicato"]
      ] },
      caption: "Abbina ogni fase alla sua descrizione."
    },
    {
      type: "example",
      title: "Contare le cellule: la crescita esponenziale",
      html: `<p>A ogni mitosi il numero di cellule raddoppia. Da una sola cellula, dopo <i>n</i> divisioni, se ne hanno <b>2ⁿ</b>:</p>
<ul>
<li>dopo 10 divisioni: 2¹⁰ = <b>1024</b>;</li>
<li>dopo 20: 2²⁰ ≈ <b>un milione</b>;</li>
<li>dopo 30: 2³⁰ ≈ <b>un miliardo</b>.</li>
</ul>
<p>Con una divisione ogni 24 ore, dopo 30 giorni da una cellula se ne avrebbero più di un miliardo. Se tutte le divisioni fossero senza freni il corpo sarebbe fuori controllo: ecco perché l'organismo regola il ciclo con tanti freni. Un tumore nasce proprio da cellule che hanno perso i freni (mutazioni nei geni che regolano il ciclo, come <i>p53</i>) e continuano a dividersi. Un batterio come <i>Escherichia coli</i>, con una divisione ogni 20 minuti, in 10 ore compie 30 generazioni: da 1 cellula ne nascerebbero oltre un miliardo.</p>`
    },
    {
      type: "text",
      title: "La riproduzione asessuata",
      html: `<p>Quando un organismo si riproduce per sola mitosi (o per divisione cellulare semplice) senza fusione di gameti, si ha <b>riproduzione asessuata</b>: i figli sono <b>cloni</b> del genitore, geneticamente identici (salvo mutazioni). È veloce e richiede un solo individuo, ma non produce variabilità.</p>
<ul>
<li><b>Scissione binaria</b>: nei batteri (senza mitosi, con duplicazione del cromosoma circolare) e in protisti come l'ameba e il paramecio.</li>
<li><b>Gemmazione</b>: una "gemma" cresce sul genitore e poi si stacca (idra, lieviti).</li>
<li><b>Frammentazione e rigenerazione</b>: un frammento può dare un individuo intero (planarie, stelle marine).</li>
<li><b>Riproduzione vegetativa</b> nelle piante: stoloni (fragola), bulbi, tuberi (patata), talee.</li>
<li><b>Partenogenesi</b>: sviluppo di un uovo non fecondato (api maschio, alcune lucertole e insetti).</li>
</ul>
<p>La <b>riproduzione sessuata</b>, invece, unisce il materiale genetico di due genitori tramite i gameti. Costa di più (bisogna trovare un partner) ma produce <b>variabilità</b>, che dà alla specie maggiori possibilità di adattarsi quando l'ambiente cambia: parassiti e malattie, per esempio, faticano a "specializzarsi" su genomi sempre nuovi.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: ciclo e mitosi",
      questions: [
        { type: "mc", q: "In quale fase dell'interfase il DNA viene replicato?", options: ["G1", "S", "G2"], answer: 1, explain: "S sta per sintesi: si forma la copia di tutto il DNA." },
        { type: "num", q: "Una cellula umana somatica entra in mitosi. Quanti cromosomi avrà ciascuna cellula figlia?", answer: 46, explain: "La mitosi mantiene il numero cromosomico: 2n = 46." },
        { type: "tf", q: "In anafase si separano i cromosomi omologhi.", answer: false, explain: "In anafase mitotica si separano i cromatidi fratelli; gli omologhi si separano in anafase I della meiosi." }
      ]
    },
    {
      type: "text",
      title: "La meiosi: dimezzare per poi ricombinare",
      html: `<p>La <b>meiosi</b> avviene negli organi riproduttivi (testicoli e ovaie) e trasforma una cellula diploide (2n) in <b>quattro cellule aploidi</b> (n), ognuna diversa dalle altre. Prevede <b>una sola replicazione del DNA</b>, seguita da <b>due divisioni consecutive</b>: meiosi I e meiosi II.</p>
<p><b>Meiosi I</b> (divisione riduzionale: da 2n a n):</p>
<ul>
<li><b>Profase I</b>: gli omologhi si appaiano strettamente (<b>sinapsi</b>) formando <b>tetradi</b> (4 cromatidi). Tra cromatidi non fratelli avviene il <b>crossing-over</b>: si scambiano segmenti di DNA nei punti detti <b>chiasmi</b>. Ogni cromosoma diventa un mosaico di materiale materno e paterno.</li>
<li><b>Metafase I</b>: le <b>coppie</b> di omologhi si allineano sul piano equatoriale. L'orientamento di ciascuna coppia verso un polo o l'altro è casuale: è l'<b>assortimento indipendente</b>.</li>
<li><b>Anafase I</b>: si separano gli <b>omologhi</b> (non i cromatidi!), ciascuno ancora composto da due cromatidi.</li>
<li><b>Telofase I</b> e citodieresi: due cellule aploidi (n), con cromosomi ancora duplicati.</li>
</ul>
<p><b>Meiosi II</b> (divisione equazionale, simile a una mitosi, senza nuova replicazione): in anafase II si separano i <b>cromatidi fratelli</b>. Risultato finale: <b>4 cellule aploidi</b> con cromosomi singoli.</p>
<p>Nell'uomo la <b>spermatogenesi</b> produce quattro spermatozoi da ogni cellula; l'<b>oogenesi</b> produce un solo ovulo grande (gli altri tre prodotti, i globuli polari, sono piccoli e si degradano), perché l'uovo deve contenere le riserve per lo sviluppo iniziale dell'embrione. L'oogenesi comincia prima della nascita e si ferma in profase I, riprendendo anche decenni dopo, alla pubertà e con l'ovulazione.</p>`
    },
    {
      type: "svg",
      title: "Mitosi e meiosi a confronto (cellula 2n = 4)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="25" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">MITOSI</text>
<text x="450" y="25" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">MEIOSI</text>
<line x1="300" y1="10" x2="300" y2="290" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 5"/>
<circle cx="150" cy="75" r="30" fill="#fff" stroke="#475569" stroke-width="3"/>
<text x="150" y="82" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">2n</text>
<path d="M150 108 L150 135" stroke="#475569" stroke-width="3"/><text x="170" y="125" font-size="14" fill="#475569">1 divisione</text>
<circle cx="105" cy="170" r="28" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/><circle cx="195" cy="170" r="28" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="105" y="176" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">2n</text><text x="195" y="176" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">2n</text>
<text x="150" y="235" font-size="14" fill="#1e293b" text-anchor="middle">2 cellule identiche</text>
<text x="150" y="260" font-size="14" fill="#1e293b" text-anchor="middle">crescita, riparazione, clonazione</text>
<circle cx="450" cy="75" r="30" fill="#fff" stroke="#475569" stroke-width="3"/>
<text x="450" y="82" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">2n</text>
<path d="M450 108 L450 125" stroke="#475569" stroke-width="3"/>
<circle cx="400" cy="145" r="20" fill="#fef3c7" stroke="#b45309" stroke-width="3"/><circle cx="500" cy="145" r="20" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<text x="400" y="151" font-size="14" font-weight="bold" fill="#92400e" text-anchor="middle">n</text><text x="500" y="151" font-size="14" font-weight="bold" fill="#92400e" text-anchor="middle">n</text>
<g fill="#dcfce7" stroke="#15803d" stroke-width="3"><circle cx="370" cy="200" r="17"/><circle cx="430" cy="200" r="17"/><circle cx="470" cy="200" r="17"/><circle cx="530" cy="200" r="17"/></g>
<g font-size="14" font-weight="bold" fill="#166534" text-anchor="middle"><text x="370" y="206">n</text><text x="430" y="206">n</text><text x="470" y="206">n</text><text x="530" y="206">n</text></g>
<text x="450" y="245" font-size="14" fill="#1e293b" text-anchor="middle">2 divisioni, 4 cellule diverse</text>
<text x="450" y="268" font-size="14" fill="#1e293b" text-anchor="middle">produzione dei gameti</text>
</svg>`,
      caption: "La mitosi conserva il numero di cromosomi; la meiosi lo dimezza e produce cellule geneticamente diverse."
    },
    {
      type: "text",
      title: "Perché la meiosi crea variabilità",
      html: `<p>Ci sono tre meccanismi che, uno sull'altro, rendono praticamente irripetibile ogni individuo (tranne i gemelli monozigoti):</p>
<ol>
<li><b>Crossing-over</b> in profase I: rimescola i geni all'interno di ogni coppia di omologhi (di solito 1-3 scambi per coppia);</li>
<li><b>Assortimento indipendente</b> dei cromosomi in metafase I: con <i>n</i> coppie sono possibili 2ⁿ combinazioni. Per l'uomo 2²³ = <b>8 388 608</b> gameti diversi, anche senza contare il crossing-over;</li>
<li><b>Fecondazione casuale</b>: quale spermatozoo incontra quale uovo? Le combinazioni possibili sono (2²³)² ≈ <b>70 000 miliardi</b> (7 × 10¹³), prima ancora del crossing-over.</li>
</ol>
<p>Senza la meiosi il numero di cromosomi raddoppierebbe a ogni generazione: la meiosi li dimezza perché la fecondazione li ripristini.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: meiosi e variabilità",
      questions: [
        { type: "mc", q: "Quante divisioni cellulari comprende la meiosi?", options: ["Una", "Due", "Quattro"], answer: 1, explain: "Meiosi I (riduzionale) e meiosi II (equazionale)." },
        { type: "num", q: "Quanti gameti diversi può produrre una cellula con n = 4, solo per assortimento indipendente?", answer: 16, explain: "2⁴ = 16." },
        { type: "tf", q: "La fecondazione ripristina il numero diploide di cromosomi.", answer: true, explain: "n + n = 2n: i due gameti aploidi formano lo zigote diploide." }
      ]
    },
    {
      type: "example",
      title: "Errori nella meiosi: quando i cromosomi non si separano",
      html: `<p>A volte gli omologhi (in anafase I) o i cromatidi (in anafase II) non si separano: è la <b>non-disgiunzione</b>. Il risultato sono gameti con un cromosoma in più o in meno; se partecipano alla fecondazione si hanno <b>aneuploidie</b>:</p>
<ul>
<li><b>Sindrome di Down</b>: trisomia del cromosoma 21 (47 cromosomi). Fu descritta nel 1866 da Langdon Down; nel 1959 <b>Jérôme Lejeune</b> scoprì la causa cromosomica. La probabilità aumenta con l'età materna: circa 1 su 1500 a 20 anni, 1 su 100 a 40;</li>
<li><b>Sindrome di Turner</b>: una donna con un solo X (45, X);</li>
<li><b>Sindrome di Klinefelter</b>: maschio con cromosomi XXY (47).</li>
</ul>
<p>Moltissime altre aneuploidie sono incompatibili con la vita e provocano aborti spontanei precoci. Si possono individuare con il <b>cariotipo</b>, cioè la fotografia ordinata dei cromosomi in metafase.</p>`
    },
    {
      type: "widget",
      title: "Mitosi o meiosi?",
      widget: "classify",
      options: { groups: ["Mitosi", "Meiosi", "Entrambe"], items: [
        ["Produce cellule geneticamente identiche", 0],
        ["Produce i gameti", 1],
        ["Include la replicazione del DNA prima di iniziare", 2],
        ["Avviene il crossing-over", 1],
        ["Due divisioni consecutive", 1],
        ["Serve per la crescita e la riparazione dei tessuti", 0],
        ["Si formano i fusi di microtubuli", 2],
        ["Le cellule figlie sono aploidi", 1]
      ] },
      caption: "Entrambe partono da una duplicazione del DNA e usano il fuso, ma gli esiti sono molto diversi."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire mitosi e meiosi",
      intro: "Queste due divisioni si confondono facilmente: ecco tre altri modi per distinguerle.",
      tabs: [
        {
          label: "🧦 Le calze: coppie e fotocopie",
          html: `<p>Immagina di avere 23 paia di calze (coppie di omologhi: una da papà, una da mamma). Prima della divisione ne fai una <b>fotocopia</b> di ciascuna (replicazione). <b>Mitosi</b>: dividi in due scatole, ognuna con 23 paia complete, come l'originale. <b>Meiosi</b>: in due tempi: prima separi le coppie (da ogni paio una calza per scatola, scelta a caso), poi separi le fotocopie: in tutto 4 scatole, ciascuna con 23 calze, ogni volta diverse. In più, durante il passaggio, scambi dei pezzi tra calze di un paio (crossing-over).</p>`
        },
        {
          label: "🃏 Il mazzo di carte",
          html: `<p>Hai un mazzo composto da due mazzi uniti da 23 carte ciascuno (23 dal padre, 23 dalla madre). Per fare un gamete, <b>peschi una carta per ogni coppia</b>, lanciando una moneta: ogni gamete è una mano di 23 carte. Quante mani diverse? 2 scelte per ognuna delle 23 coppie: 2²³ ≈ 8,4 milioni. Se il figlio riceve due mani (una da ciascun genitore), ci sono circa 70 000 miliardi di combinazioni possibili.</p>`
        },
        {
          label: "🎯 Tabella riassuntiva",
          html: `<table>
<tr><th></th><th>Mitosi</th><th>Meiosi</th></tr>
<tr><td>Cellule dove avviene</td><td>somatiche</td><td>germinali (gonadi)</td></tr>
<tr><td>Numero di divisioni</td><td>1</td><td>2</td></tr>
<tr><td>Cellule prodotte</td><td>2</td><td>4</td></tr>
<tr><td>Numero cromosomico</td><td>resta 2n</td><td>da 2n a n</td></tr>
<tr><td>Cellule figlie</td><td>identiche alla madre</td><td>diverse tra loro</td></tr>
<tr><td>Crossing-over</td><td>no</td><td>sì (profase I)</td></tr>
<tr><td>Funzione</td><td>crescita, riparazione, riproduzione asessuata</td><td>riproduzione sessuata</td></tr>
</table>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Le cellule HeLa: la cellula immortale",
      html: `<p>Nel 1951 una donna statunitense, <b>Henrietta Lacks</b>, morì di cancro al collo dell'utero. Dalle cellule del suo tumore, prelevate a sua insaputa, si ottenne la prima linea cellulare umana capace di dividersi indefinitamente in laboratorio: le <b>cellule HeLa</b>. Perdono i normali "freni" del ciclo cellulare e non invecchiano. Sono state usate per sviluppare il vaccino contro la poliomielite, per studiare il cancro e i virus, per lo studio dei farmaci. La vicenda ha aperto un grande dibattito etico sul consenso informato dei pazienti, e la famiglia Lacks ha oggi voce nelle decisioni sull'uso dei dati genetici.</p>`
    },
    {
      type: "curiosity",
      title: "Il telomero e il numero di divisioni",
      html: `<p>Le cellule umane normali coltivate in laboratorio si dividono al massimo circa 50-60 volte (il <b>limite di Hayflick</b>, 1961). La ragione è nei <b>telomeri</b>, sequenze ripetute alle estremità dei cromosomi che si accorciano a ogni replicazione, come i puntali dei lacci delle scarpe. Quando diventano troppo corti, la cellula smette di dividersi. Le cellule staminali, le cellule germinali e quelle tumorali usano un enzima, la <b>telomerasi</b>, per ricostruirli. Per le scoperte sui telomeri Blackburn, Greider e Szostak ricevettero il premio Nobel nel 2009.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa della divisione cellulare: tocca i nodi e scopri il perché",
      nodes: [
        { id: "ciclo", label: "Ciclo cellulare", x: 50, y: 6, color: "#3b82f6", html: "Interfase (G1, S, G2) e fase M.", why: "Il ciclo cellulare è regolato da cicline e Cdk, scoperte da Hartwell, Nurse e Hunt (Nobel 2001) studiando lieviti e uova di riccio di mare. Un sistema così fondamentale è rimasto praticamente uguale in tutti gli eucarioti." },
        { id: "mitosi", label: "Mitosi", x: 20, y: 34, color: "#22c55e", html: "Una divisione, due cellule identiche.", why: "Flemming (1882) la osservò colorando le cellule di salamandra: i fili di cromatina scomparivano e riapparivano a metà. Così capì che il nucleo non si limita a dividersi in due, ma ripartisce con precisione i fili." },
        { id: "meiosi", label: "Meiosi", x: 80, y: 34, color: "#a855f7", html: "Due divisioni, quattro gameti aploidi.", why: "Oscar Hertwig (1876) osservò la fecondazione nel riccio di mare; da lì si intuì che i gameti devono avere metà dei cromosomi, altrimenti il numero raddoppierebbe a ogni generazione. Van Beneden (1883) lo confermò nell'Ascaris, e Weismann ne dedusse nel 1887 la necessità di una divisione riduzionale." },
        { id: "crossing", label: "Crossing-over", x: 80, y: 62, color: "#f59e0b", html: "Scambio di segmenti tra omologhi.", why: "Thomas Hunt Morgan e il suo gruppo (1910-1915), studiando il moscerino Drosophila, intuirono che i geni sono disposti in fila sui cromosomi e che gli scambi tra omologhi ne rimescolano le combinazioni; da qui nacquero le prime mappe geniche." },
        { id: "asex", label: "Riproduzione asessuata", x: 20, y: 62, color: "#14b8a6", html: "Cloni per mitosi.", why: "Funziona bene in un ambiente stabile ed è molto rapida; ha però il rischio di una popolazione tutta uguale, vulnerabile a un singolo parassita." },
        { id: "var", label: "Variabilità", x: 50, y: 82, color: "#ef4444", html: "Gameti sempre diversi grazie a crossing-over, assortimento e fecondazione.", why: "Senza variabilità non esiste evoluzione per selezione naturale: Darwin la osservava ma non ne conosceva la causa, che fu chiarita solo con la genetica del Novecento." },
        { id: "err", label: "Errori e cancro", x: 50, y: 52, color: "#06b6d4", html: "Non-disgiunzione, perdita del controllo del ciclo.", why: "Lejeune (1959) scoprì che la sindrome di Down dipende da un cromosoma 21 in più; Boveri nel 1914 propose che i tumori derivino da cromosomi anomali, un'idea confermata decenni dopo." }
      ],
      edges: [
        ["ciclo", "mitosi", "termina con"],
        ["ciclo", "meiosi", "prepara"],
        ["meiosi", "crossing", "include"],
        ["mitosi", "asex", "è alla base"],
        ["crossing", "var", "produce"],
        ["meiosi", "var", "produce"],
        ["mitosi", "err", "se sregolata"],
        ["meiosi", "err", "se sbagliata"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul><li>Ciclo cellulare: G1 → S (replica il DNA) → G2 → M.</li><li>Mitosi: profase, metafase, anafase, telofase; 2 cellule 2n identiche.</li><li>Meiosi: 2 divisioni, 4 cellule n diverse; crossing-over in profase I; si separano gli omologhi in anafase I e i cromatidi in anafase II.</li><li>Uomo: 2n = 46, n = 23. Gameti possibili: 2²³ ≈ 8,4 milioni.</li></ul>`
    }
  ],
  glossary: [
    { t: "Cromosoma", d: "Struttura che contiene una molecola di DNA associata a proteine, visibile durante la divisione." },
    { t: "Cromatidi fratelli", d: "Le due copie identiche di un cromosoma duplicato, unite al centromero." },
    { t: "Omologhi", d: "Coppia di cromosomi con gli stessi geni, uno materno e uno paterno." },
    { t: "Diploide (2n)", d: "Cellula con due serie di cromosomi." },
    { t: "Aploide (n)", d: "Cellula con una sola serie di cromosomi, come i gameti." },
    { t: "Interfase", d: "Periodo del ciclo cellulare tra due divisioni (G1, S, G2)." },
    { t: "Mitosi", d: "Divisione del nucleo che produce due cellule identiche alla cellula madre." },
    { t: "Meiosi", d: "Doppia divisione che produce quattro cellule aploidi." },
    { t: "Crossing-over", d: "Scambio di segmenti di DNA tra cromosomi omologhi in profase I." },
    { t: "Gamete", d: "Cellula sessuale aploide (uovo o spermatozoo)." },
    { t: "Citodieresi", d: "Divisione del citoplasma al termine della mitosi o della meiosi." },
    { t: "Non-disgiunzione", d: "Mancata separazione dei cromosomi, causa di aneuploidie." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanti cromosomi ha uno spermatozoo umano?", answer: 23, explain: "I gameti sono aploidi: n = 23." },
      { type: "mc", q: "In quale fase della mitosi i cromosomi si allineano sul piano equatoriale?", options: ["Profase", "Metafase", "Telofase"], answer: 1, explain: "La metafase è la fase dell'allineamento sulla piastra metafasica." },
      { type: "tf", q: "Al termine della mitosi le cellule figlie sono geneticamente identiche alla cellula madre.", answer: true, explain: "La mitosi distribuisce copie identiche del DNA." },
      { type: "mc", q: "Il crossing-over avviene...", options: ["in anafase mitotica", "in profase I della meiosi", "in telofase II"], answer: 1, explain: "Gli omologhi appaiati si scambiano segmenti di DNA in profase I." },
      { type: "num", q: "Quanti gameti diversi può produrre un organismo con n = 3 (2n = 6), considerando solo l'assortimento indipendente?", answer: 8, explain: "2ⁿ = 2³ = 8." },
      { type: "mc", q: "Quante cellule aploidi si ottengono da una meiosi completa?", options: ["2", "4", "8"], answer: 1, explain: "Due divisioni successive dopo una sola replicazione producono 4 cellule." },
      { type: "text", q: "Come si chiama la fase del ciclo cellulare in cui viene replicato il DNA? (una lettera)", answer: ["s", "fase s"], explain: "È la fase S, di sintesi del DNA." },
      { type: "order", q: "Metti in ordine le fasi della mitosi.", items: ["Profase", "Metafase", "Anafase", "Telofase"], explain: "Condensazione, allineamento, separazione dei cromatidi, ricostituzione dei nuclei." },
      { type: "mc", q: "Che cosa causa la sindrome di Down?", options: ["Una trisomia del cromosoma 21", "La mancanza del cromosoma X", "Un'infezione virale"], answer: 0, explain: "Una non-disgiunzione porta a tre copie del cromosoma 21 (47 cromosomi)." },
      { type: "tf", q: "In anafase I della meiosi si separano i cromatidi fratelli.", answer: false, explain: "In anafase I si separano gli omologhi; i cromatidi fratelli si separano in anafase II." }
    ]
  }
});
