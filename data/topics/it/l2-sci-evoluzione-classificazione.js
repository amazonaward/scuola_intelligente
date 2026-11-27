TOPIC('it', {
  id: "l2-sci-evoluzione-classificazione",
  title: "Evoluzione e classificazione",
  intro: "Sulla Terra vivono oggi qualche milione di specie descritte e probabilmente molte altre ancora ignote, e tutte discendono da antenati comuni. Come nascono nuove specie? E come possiamo mettere ordine in tanta varietà? In terza media hai incontrato Darwin e la selezione naturale: qui li riprendiamo in modo più rigoroso, con la <b>genetica delle popolazioni</b> e la <b>sintesi moderna</b>, e poi vediamo come i biologi <b>classificano</b> i viventi in domini e regni, seguendo la loro parentela evolutiva.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Richiamo: Darwin e la selezione naturale",
      html: `<p>Nel <b>1859</b> Charles Darwin, in <i>L'origine delle specie</i> (e indipendentemente Alfred Russel Wallace), propose che le specie cambiano nel tempo e discendono da antenati comuni, e che il meccanismo principale è la <b>selezione naturale</b>. Si regge su quattro osservazioni:</p>
<ol>
<li>gli individui di una popolazione <b>variano</b> tra loro;</li>
<li>molte variazioni sono <b>ereditabili</b>;</li>
<li>nascono più individui di quanti l'ambiente possa sostenerne: c'è <b>competizione</b> per le risorse;</li>
<li>gli individui con caratteri più vantaggiosi in quell'ambiente <b>sopravvivono e si riproducono di più</b>: questi caratteri diventano più frequenti nelle generazioni successive.</li>
</ol>
<p>Darwin non conosceva l'origine della variabilità né le leggi dell'ereditarietà (gli studi di Mendel, 1866, rimasero ignorati fino al 1900). La <b>teoria sintetica dell'evoluzione</b> (o sintesi moderna, anni 1930-1940, con Fisher, Haldane, Wright, Dobzhansky, Mayr, Simpson) li ha uniti: <b>evoluzione = cambiamento delle frequenze alleliche in una popolazione nel corso delle generazioni</b>. Attenzione: evolve la <b>popolazione</b>, non il singolo individuo, e la selezione non ha uno scopo né "progetta": premia ciò che, <i>in quel momento e in quell'ambiente</i>, funziona meglio.</p>`
    },
    {
      type: "text",
      title: "Le sorgenti della variabilità e i fattori evolutivi",
      html: `<p>Il <b>pool genico</b> di una popolazione è l'insieme di tutti gli alleli presenti. La sua composizione può cambiare per cinque motivi principali:</p>
<ul>
<li><b>Mutazioni</b>: cambiamenti casuali del DNA (sostituzioni di una base, inserzioni, delezioni). Sono la fonte primaria dei nuovi alleli. Sono <b>casuali rispetto alle necessità</b>: l'ambiente non "chiede" la mutazione, ma ne sceglie, tra quelle presenti, alcune. Nell'uomo si stima una trentina di nuove mutazioni per genoma a ogni generazione.</li>
<li><b>Ricombinazione sessuale</b> (crossing-over, assortimento indipendente, fecondazione): rimescola gli alleli esistenti.</li>
<li><b>Selezione naturale</b>: sopravvivenza e riproduzione differenziale. L'unità che conta è la <b>fitness</b> (successo riproduttivo): quanti figli fertili lascia un individuo.</li>
<li><b>Deriva genetica</b>: variazioni casuali delle frequenze alleliche per puro caso, importanti soprattutto nelle popolazioni piccole. Casi tipici sono l'<b>effetto del collo di bottiglia</b> (popolazione ridotta drasticamente da un disastro, come i ghepardi, molto uniformi geneticamente) e l'<b>effetto del fondatore</b> (pochi individui colonizzano un'isola).</li>
<li><b>Flusso genico</b>: migrazione di individui e quindi di alleli tra popolazioni; tende a rendere le popolazioni più simili.</li>
</ul>
<p>La selezione naturale può avere tre andamenti:</p>
<table>
<tr><th>Tipo</th><th>Che cosa favorisce</th><th>Esempio</th></tr>
<tr><td><b>Direzionale</b></td><td>un estremo del carattere</td><td>resistenza ai pesticidi o agli antibiotici; becchi più grandi nei fringuelli delle Galápagos in anni di siccità (Peter e Rosemary Grant)</td></tr>
<tr><td><b>Stabilizzante</b></td><td>i valori intermedi</td><td>il peso alla nascita dei neonati: troppo piccoli o troppo grandi hanno più rischi</td></tr>
<tr><td><b>Divergente (disruptiva)</b></td><td>entrambi gli estremi</td><td>becchi grandi o piccoli ma non medi in alcuni uccelli africani con semi duri e teneri</td></tr>
</table>
<p>Esiste anche la <b>selezione sessuale</b>: caratteri come la coda del pavone o le corna dei cervi si diffondono perché aumentano il successo nell'accoppiamento, anche se riducono la sopravvivenza.</p>`
    },
    {
      type: "example",
      title: "Hardy-Weinberg: misurare l'evoluzione con la matematica",
      html: `<p>Nel 1908 il matematico <b>Godfrey Hardy</b> e il medico <b>Wilhelm Weinberg</b>, indipendentemente, dimostrarono un principio importante. In una popolazione grande, con accoppiamenti casuali, senza mutazioni, migrazione né selezione, le frequenze degli alleli restano costanti. Se per un gene con due alleli, <b>A</b> (frequenza <i>p</i>) e <b>a</b> (frequenza <i>q</i>), vale p + q = 1, le frequenze dei genotipi sono:</p>
<p style="text-align:center"><b>p² (AA) + 2pq (Aa) + q² (aa) = 1</b></p>
<p>Se i valori osservati si discostano da questi, vuol dire che una delle condizioni non vale e la popolazione <b>sta evolvendo</b>.</p>
<p><b>Applicazione.</b> La fibrosi cistica è una malattia recessiva (aa) che in Europa colpisce circa 1 persona su 2500.</p>
<ol>
<li>q² = 1/2500 = 0,0004, quindi q = √0,0004 = <b>0,02</b>;</li>
<li>p = 1 − 0,02 = <b>0,98</b>;</li>
<li>portatori sani (Aa): 2pq = 2 × 0,98 × 0,02 ≈ <b>0,039</b>, cioè circa il <b>4%</b>, una persona su 25.</li>
</ol>
<p>Quasi tutti gli alleli "a" sono nascosti negli eterozigoti sani: per questo un allele recessivo dannoso scompare molto lentamente.</p>`
    },
    {
      type: "example",
      title: "Leggere un nome scientifico",
      html: `<p>Il nome binomiale ti dice già chi è parente di chi. <i>Panthera leo</i> (leone) e <i>Panthera tigris</i> (tigre) condividono il genere <i>Panthera</i>: sono più vicini tra loro che al gatto domestico, <i>Felis catus</i>, che appartiene a un altro genere (ma alla stessa famiglia, Felidae). Il lupo <i>Canis lupus</i> e il cane <i>Canis lupus familiaris</i> sono addirittura la stessa specie (il cane è una sottospecie domestica), e infatti si incrociano con prole fertile; la volpe rossa, <i>Vulpes vulpes</i>, è nella stessa famiglia (Canidae) ma in un altro genere, e non si incrocia con il cane. Riconoscere il genere aiuta a capire il grado di parentela molto più dei nomi comuni: la balena, per esempio, è un mammifero, mentre il cavalluccio marino è un pesce, nonostante l'aspetto e il nome.</p>`
    },
    {
      type: "decision",
      title: "Antibiotici: che cosa succede se smetti la cura a metà?",
      html: `<p>Un paziente ha un'infezione batterica. Dopo 3 giorni di antibiotico, che doveva durare 7, si sente meglio e pensa di smettere.</p>`,
      question: "Dal punto di vista evolutivo, che cosa può succedere?",
      options: [
        { label: "Niente: i batteri rimasti sono comunque morti.", outcome: "No: sopravvivono proprio quelli un po' meno sensibili al farmaco." },
        { label: "Sopravvivono i batteri meno sensibili, che si riproducono e trasmettono la resistenza.", outcome: "È la selezione naturale in azione: l'antibiotico elimina i batteri sensibili, lasciando quelli con mutazioni che danno resistenza." },
        { label: "Gli antibiotici fanno mutare i batteri e li rendono resistenti.", outcome: "No: le mutazioni di resistenza sono casuali e preesistono; il farmaco non le provoca, ma le seleziona." }
      ],
      answer: 1,
      explain: "I batteri si riproducono in pochi minuti-ore: un singolo individuo con una mutazione di resistenza, che prima era irrilevante, in presenza del farmaco ha un enorme vantaggio e discendenti numerosi. Per questo gli antibiotici vanno presi solo se prescritti e per tutta la durata indicata; la resistenza antimicrobica è una delle grandi emergenze sanitarie globali."
    },
    {
      type: "quiz",
      title: "Mini-quiz: i meccanismi dell'evoluzione",
      questions: [
        { type: "mc", q: "Che cosa evolve, secondo la teoria sintetica?", options: ["Il singolo individuo", "La popolazione, tramite cambiamento delle frequenze alleliche", "La specie intera in modo coordinato"], answer: 1, explain: "Gli individui non cambiano il proprio DNA per adattarsi: cambia la composizione genetica della popolazione." },
        { type: "num", q: "In una popolazione in equilibrio di Hardy-Weinberg, q = 0,1. Quanto vale p?", answer: 0.9, tol: 0.001, explain: "p + q = 1, quindi p = 0,9." },
        { type: "tf", q: "La deriva genetica ha effetti più forti nelle popolazioni piccole.", answer: true, explain: "Nel caso, le oscillazioni delle frequenze pesano molto di più se pochi individui si riproducono." }
      ]
    },
    {
      type: "text",
      title: "Che cos'è una specie, e come ne nascono di nuove",
      html: `<p>Secondo il <b>concetto biologico di specie</b> di <b>Ernst Mayr</b> (1942), una specie è un insieme di popolazioni naturali che possono incrociarsi tra loro e produrre prole <b>fertile</b>, e sono riproduttivamente isolate da altre popolazioni. È un concetto utile per animali ma non per batteri o organismi che si riproducono per via asessuata, né per i fossili, per cui si usano altri criteri (morfologia, DNA).</p>
<p>Una nuova specie nasce con la <b>speciazione</b>, cioè quando due popolazioni sviluppano un <b>isolamento riproduttivo</b>:</p>
<ul>
<li><b>Speciazione allopatrica</b> (da "altra patria"): una barriera geografica (un braccio di mare, una catena montuosa, un fiume che cambia corso) separa una popolazione in due. Non scambiandosi più alleli, accumulano mutazioni diverse e subiscono selezioni diverse (e deriva). Se tornano a incontrarsi, non si incrociano più. È il modo più comune; esempio classico: i <b>fringuelli di Darwin</b> delle Galápagos, discendenti di un'unica specie arrivata dal continente, con becchi diversi per cibi diversi, e i ciclidi dei laghi africani.</li>
<li><b>Speciazione simpatrica</b>: la nuova specie nasce nello stesso territorio, senza barriere. Nelle piante è frequente per <b>poliploidia</b> (errori di meiosi che producono gameti con numero doppio di cromosomi: il grano tenero è esaploide, 6n = 42) o per specializzazione ecologica.</li>
</ul>
<p>Le <b>barriere riproduttive</b> possono essere <b>prezigotiche</b> (impediscono la formazione dello zigote: riti di corteggiamento diversi, periodi di fioritura diversi, organi genitali incompatibili) o <b>postzigotiche</b> (l'ibrido nasce ma non sopravvive o è sterile: il <b>mulo</b>, ibrido di asina e cavallo, ha 63 cromosomi e non può produrre gameti normali).</p>
<p>Altri due fenomeni importanti: l'<b>evoluzione convergente</b> (specie lontane sviluppano caratteri simili perché sottoposte a pressioni simili: le ali di insetti, uccelli e pipistrelli, o la forma idrodinamica di squali e delfini) e la <b>radiazione adattativa</b> (da un antenato derivano molte specie che occupano nicchie diverse: i mammiferi dopo l'estinzione dei dinosauri, 66 milioni di anni fa).</p>`
    },
    {
      type: "widget",
      title: "La storia della vita sulla Terra (scala logaritmica)",
      widget: "timeline",
      options: { scale: "log", unit: "anni", events: [
        { year: -4540000000, label: "Formazione della Terra", icon: "🌍" },
        { year: -3800000000, label: "Prime cellule (procarioti)", icon: "🦠" },
        { year: -2400000000, label: "Fotosintesi ossigenica: ossigeno nell'atmosfera", icon: "🫧" },
        { year: -1800000000, label: "Prime cellule eucariote", icon: "🔬" },
        { year: -541000000, label: "Esplosione cambriana", icon: "🦐" },
        { year: -375000000, label: "Vertebrati verso la terraferma", icon: "🐟" },
        { year: -252000000, label: "Estinzione di fine Permiano", icon: "🌋" },
        { year: -66000000, label: "Estinzione dei dinosauri non aviani", icon: "☄️" },
        { year: -300000, label: "Homo sapiens", icon: "🧑" }
      ] },
      caption: "Sulla scala logaritmica ogni tacca corrisponde a un fattore 10: così vediamo insieme miliardi e migliaia di anni."
    },
    {
      type: "text",
      title: "Classificare i viventi: da Linneo ai domini",
      html: `<p>Mettere ordine tra milioni di specie è il compito della <b>sistematica</b> (o tassonomia). Il padre della tassonomia moderna è lo svedese <b>Carl von Linné (Linneo)</b>, che nel <i>Systema Naturae</i> (prima edizione 1735, decima edizione 1758 per gli animali) introdusse due idee fondamentali.</p>
<ul>
<li><b>Nomenclatura binomiale</b>: ogni specie ha un nome latino di due parti, <b>genere</b> (maiuscolo) + <b>epiteto specifico</b> (minuscolo), in corsivo: <i>Homo sapiens</i>, <i>Canis lupus</i> (lupo), <i>Canis lupus familiaris</i> (cane domestico), <i>Quercus robur</i> (farnia). Evita le ambiguità dei nomi volgari (che cambiano da lingua a lingua e persino da regione a regione).</li>
<li><b>Gerarchia di categorie annidate (taxa)</b>: dal più ampio al più specifico: <b>dominio, regno, phylum (tipo), classe, ordine, famiglia, genere, specie</b>. Ogni gruppo contiene gruppi più piccoli, come scatole cinesi.</li>
</ul>
<p><b>Esempio: la classificazione dell'uomo.</b> Dominio Eukarya → regno Animalia → phylum Chordata → classe Mammalia → ordine Primates → famiglia Hominidae → genere <i>Homo</i> → specie <i>Homo sapiens</i>.</p>
<p>Linneo classificava in base alla <b>somiglianza</b> osservabile. Dopo Darwin la classificazione ha un criterio più profondo: deve rispecchiare la <b>parentela evolutiva</b> (<b>filogenesi</b>). Il tedesco <b>Willi Hennig</b> (anni Cinquanta) fondò la <b>cladistica</b>: i gruppi validi sono i <b>cladi</b> o gruppi <b>monofiletici</b>, formati da un antenato e <b>tutti</b> i suoi discendenti. Si costruiscono alberi (<b>cladogrammi</b>) basandosi sui <b>caratteri derivati condivisi</b> (omologie) e, oggi, soprattutto sul confronto delle sequenze di DNA e proteine. Una conseguenza sorprendente: gli uccelli sono dinosauri teropodi, quindi i "rettili" tradizionali non sono un gruppo monofiletico; i coccodrilli sono più vicini agli uccelli che alle lucertole.</p>`
    },
    {
      type: "svg",
      title: "Un albero filogenetico semplificato dei vertebrati",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#334155" stroke-width="4" fill="none">
<line x1="40" y1="150" x2="140" y2="150"/>
<line x1="140" y1="60" x2="140" y2="240"/>
<line x1="140" y1="60" x2="400" y2="60"/>
<line x1="140" y1="240" x2="190" y2="240"/>
<line x1="190" y1="150" x2="190" y2="240"/>
<line x1="190" y1="150" x2="250" y2="150"/>
<line x1="250" y1="110" x2="250" y2="190"/>
<line x1="250" y1="110" x2="400" y2="110"/>
<line x1="250" y1="190" x2="320" y2="190"/>
<line x1="320" y1="160" x2="320" y2="220"/>
<line x1="320" y1="160" x2="400" y2="160"/>
<line x1="320" y1="220" x2="400" y2="220"/>
<line x1="190" y1="270" x2="400" y2="270"/>
<line x1="190" y1="240" x2="190" y2="270"/>
</g>
<g font-size="16" font-weight="bold" fill="#0f172a">
<text x="410" y="66">Pesci cartilaginei (squali)</text>
<text x="410" y="116">Pesci ossei (trota)</text>
<text x="410" y="166">Anfibi (rana)</text>
<text x="410" y="226">Rettili e uccelli</text>
<text x="410" y="276">Mammiferi</text>
</g>
<g fill="#ef4444"><circle cx="140" cy="150" r="7"/><circle cx="190" cy="240" r="7"/><circle cx="250" cy="190" r="7"/><circle cx="320" cy="190" r="7"/></g>
<text x="20" y="30" font-size="14" fill="#475569">Ogni nodo (cerchio rosso) è un antenato comune.</text>
<text x="20" y="290" font-size="14" fill="#475569">Struttura semplificata: i rami non sono in scala temporale.</text>
</svg>`,
      caption: "Albero semplificato: i nodi sono antenati comuni, non ci sono 'specie più evolute', ma gruppi imparentati in gradi diversi."
    },
    {
      type: "text",
      title: "I domini e i regni della vita",
      html: `<p>Nel <b>1969</b> <b>Robert Whittaker</b> propose cinque regni: Monera, Protisti, Funghi, Piante, Animali. Nel <b>1977</b> <b>Carl Woese</b>, confrontando l'RNA ribosomiale, mostrò che i procarioti comprendono due linee evolutive molto diverse: nacque così il sistema dei <b>tre domini</b>:</p>
<table>
<tr><th>Dominio</th><th>Caratteristiche</th><th>Esempi</th></tr>
<tr><td><b>Bacteria</b></td><td>procarioti unicellulari, parete di peptidoglicano</td><td><i>Escherichia coli</i>, cianobatteri, streptococchi</td></tr>
<tr><td><b>Archaea</b></td><td>procarioti con membrane e geni più simili agli eucarioti; spesso in ambienti estremi (sorgenti calde, saline, anaerobi)</td><td>metanogeni, <i>Halobacterium</i></td></tr>
<tr><td><b>Eukarya</b></td><td>cellule con nucleo e organuli</td><td>protisti, funghi, piante, animali</td></tr>
</table>
<p>All'interno degli <b>Eucarioti</b> si distinguono:</p>
<ul>
<li><b>Protisti</b>: gruppo eterogeneo e non monofiletico di eucarioti per lo più unicellulari (amebe, paramecio, alghe unicellulari, plasmodio della malaria). Alcuni sono autotrofi, altri eterotrofi.</li>
<li><b>Funghi</b>: eucarioti <b>eterotrofi per assorbimento</b> (secernono enzimi e assorbono i nutrienti), con parete di <b>chitina</b>; organizzati in <b>ife</b> che formano il <b>micelio</b>; lieviti, muffe, funghi con cappello. Sono più vicini agli animali che alle piante.</li>
<li><b>Piante</b>: pluricellulari, <b>autotrofe</b> (fotosintesi), con parete di cellulosa: muschi, felci, gimnosperme (conifere, a semi nudi), angiosperme (piante con fiore e frutto).</li>
<li><b>Animali</b>: pluricellulari, <b>eterotrofi per ingestione</b>, senza parete, per lo più mobili; spugne, cnidari, vermi, molluschi, artropodi (il gruppo più numeroso: oltre l'80% delle specie animali descritte), echinodermi, cordati (inclusi i vertebrati).</li>
</ul>
<p>Si stima che le specie descritte siano circa 2 milioni; quelle esistenti potrebbero essere 8-10 milioni (o molte di più se si contano i microrganismi). I <b>virus</b> non rientrano nei domini perché non sono cellule.</p>`
    },
    {
      type: "widget",
      title: "A quale regno appartiene?",
      widget: "classify",
      options: { groups: ["Animali", "Piante", "Funghi", "Batteri/Archei", "Protisti"], items: [
        ["Lievito di birra", 2],
        ["Paramecio", 4],
        ["Abete", 1],
        ["Medusa", 0],
        ["Escherichia coli", 3],
        ["Fungo porcino", 2],
        ["Alga verde unicellulare (Chlamydomonas)", 4],
        ["Felce", 1],
        ["Ragno", 0],
        ["Metanogeno delle paludi", 3]
      ] },
      caption: "Ricorda: un fungo non è una pianta (non fa fotosintesi e ha parete di chitina) e una medusa è un animale."
    },
    {
      type: "3d",
      title: "Tutti i viventi sono imparentati: una molecola in comune",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0, z: 0, r: 0.45, color: "#ef4444", label: "ATP: ossigeno" },
          { x: 0.9, y: 0.4, z: 0, r: 0.4, color: "#f59e0b", label: "fosfato" },
          { x: 1.8, y: 0.1, z: 0.3, r: 0.4, color: "#f59e0b", label: "fosfato" },
          { x: 2.7, y: 0.5, z: 0, r: 0.4, color: "#f59e0b", label: "fosfato" },
          { x: -0.9, y: -0.4, z: 0, r: 0.45, color: "#3b82f6", label: "adenina" }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [0, 4]]
      },
      caption: "Lo schema di ATP (adenosina trifosfato) è uguale in batteri, funghi, piante e animali: un indizio di antenato comune."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire evoluzione e classificazione",
      intro: "Due idee spesso difficili: l'antenato comune e il fatto che l'evoluzione non ha uno scopo.",
      tabs: [
        {
          label: "🌳 L'albero e i cugini",
          html: `<p>Pensa all'albero genealogico della tua famiglia. Tu e tuo cugino avete nonni in comune, ma non siete discendenti uno dell'altro. Allo stesso modo, <b>l'uomo non discende dallo scimpanzé</b>: i due condividono un antenato comune, vissuto circa 6-7 milioni di anni fa, da cui poi le due linee si sono separate. Per questo una domanda come "Perché ci sono ancora le scimmie, se discendiamo da loro?" non ha senso: le scimmie attuali sono i nostri "cugini", non i nostri antenati.</p>`
        },
        {
          label: "🏔️ Il paesaggio delle opportunità",
          html: `<p>Immagina un paesaggio con colline: ogni punto è una combinazione genetica e la quota rappresenta la fitness. Le popolazioni si spostano "in salita" per selezione naturale ma si fermano sulla prima collina che incontrano, anche se ce ne fosse una più alta: l'evoluzione procede per modifiche piccole e graduali, non può "tornare indietro e riprogettare". Per questo ci sono "difetti" come il nervo laringeo ricorrente della giraffa, che fa un giro di diversi metri dal cervello al torace e torna alla laringe: è l'eredità di un antenato con il collo corto.</p>`
        },
        {
          label: "📊 Il gioco dei colori",
          html: `<p>Prendi 100 fagioli: 50 rossi e 50 bianchi, sparsi su un tavolo a macchie rosse. Un uccello (tu, a occhi chiusi) ne mangia 10 per volta scegliendo i più visibili, cioè i bianchi. Dopo 5 "cacce" restano molti più rossi. Ogni volta i rossi rimasti si "riproducono" raddoppiando. Dopo alcune generazioni la popolazione è quasi tutta rossa, anche se nessun fagiolo ha mai "voluto" cambiare colore: ha vinto chi era meno visibile. È la selezione naturale in miniatura, e in classe si può fare davvero con fagioli e fogli colorati.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lo studio più lungo dell'evoluzione",
      html: `<p>Dal 1988 il biologo <b>Richard Lenski</b> coltiva 12 popolazioni di <i>Escherichia coli</i> in laboratorio, trasferendole ogni giorno in un terreno fresco con poco glucosio e citrato. Dopo oltre 70 000 generazioni tutte le popolazioni sono diventate più veloci a crescere. In una di esse, intorno alla generazione 31 500, è comparsa una novità importante: i batteri hanno cominciato a nutrirsi del <b>citrato</b>, cosa impossibile per <i>E. coli</i> in condizioni aerobiche. È la dimostrazione, in tempo reale, che mutazioni casuali e selezione producono novità.</p>`
    },
    {
      type: "curiosity",
      title: "Fossili viventi e pezzi mancanti",
      html: `<p>Il <b>celacanto</b>, un pesce lobato che si credeva estinto da 66 milioni di anni, fu pescato vivo nel 1938 al largo del Sudafrica. <i>Tiktaalik</i>, scoperto nel 2004 in Canada da Neil Shubin e collaboratori (circa 375 milioni di anni), ha branchie e squame come un pesce, ma anche collo mobile e ossa nelle pinne simili ad arti: un esempio di <b>forma di transizione</b> tra pesci e tetrapodi. Se ne conoscono molte altre: <i>Archaeopteryx</i> (circa 150 milioni di anni), con denti e coda da rettile ma anche penne, o le balene primitive come <i>Pakicetus</i> con zampe e le caratteristiche dei mammiferi terrestri.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa dell'evoluzione: tocca i nodi e scopri il perché",
      nodes: [
        { id: "darwin", label: "Selezione naturale", x: 50, y: 6, color: "#3b82f6", html: "Variabilità, ereditarietà, lotta per le risorse, successo riproduttivo differenziale.", why: "Darwin e Wallace nel 1858 presentarono insieme la teoria alla Linnean Society. Fu ispirata anche dal saggio di Malthus sulla popolazione (le popolazioni crescono più delle risorse) e dalla selezione artificiale degli allevatori di piccioni." },
        { id: "gen", label: "Genetica", x: 18, y: 32, color: "#22c55e", html: "Mutazioni e ricombinazione generano variabilità.", why: "Nel Novecento la riscoperta di Mendel (1900) e la teoria sintetica spiegarono la causa della variabilità: Dobzhansky riassunse nel 1973 che «nulla in biologia ha senso se non alla luce dell'evoluzione»." },
        { id: "hw", label: "Hardy-Weinberg", x: 82, y: 32, color: "#a855f7", html: "Modello di equilibrio per le frequenze alleliche.", why: "Fornisce l'ipotesi nulla: se una popolazione si discosta dall'equilibrio, sappiamo che sta agendo qualche fattore (selezione, deriva, migrazione, mutazione, accoppiamento non casuale)." },
        { id: "spec", label: "Speciazione", x: 82, y: 60, color: "#f59e0b", html: "Isolamento riproduttivo e nascita di nuove specie.", why: "Mayr (1942) basò il concetto di specie sull'isolamento riproduttivo e studiò le popolazioni isolate dalle isole del Pacifico. Le Galápagos e i laghi africani sono veri laboratori naturali di speciazione." },
        { id: "filo", label: "Filogenesi", x: 18, y: 60, color: "#ef4444", html: "Albero delle parentele tra i viventi.", why: "Darwin disegnò il primo schizzo di albero nel 1837 con la frase «I think». Oggi alberi molto più dettagliati si costruiscono confrontando le sequenze del DNA di migliaia di specie." },
        { id: "tass", label: "Classificazione", x: 50, y: 82, color: "#14b8a6", html: "Nomenclatura binomiale e gruppi gerarchici.", why: "Linneo creò un sistema pratico, indipendente da ogni teoria evolutiva (era fissista); dopo Darwin lo stesso schema è stato reinterpretato come un riflesso della discendenza comune, e oggi si cerca che i gruppi siano monofiletici." },
        { id: "prove", label: "Prove", x: 50, y: 40, color: "#06b6d4", html: "Fossili, anatomia comparata, embriologia, DNA, biogeografia.", why: "Tutti i viventi usano lo stesso codice genetico (con piccole varianti), un fatto difficile da spiegare senza un antenato comune. Il confronto del DNA tra uomo e scimpanzé indica una somiglianza di circa il 98-99% nelle sequenze allineabili." }
      ],
      edges: [
        ["gen", "darwin", "spiega la variabilità"],
        ["darwin", "spec", "porta a"],
        ["hw", "gen", "misura i cambiamenti"],
        ["spec", "filo", "genera i rami"],
        ["filo", "tass", "guida"],
        ["prove", "darwin", "sostengono"],
        ["prove", "filo", "ricostruiscono"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: classificazione",
      questions: [
        { type: "mc", q: "Quale ordine è corretto, dal più ampio al più specifico?", options: ["Genere, famiglia, ordine, classe", "Classe, ordine, famiglia, genere", "Ordine, classe, genere, famiglia"], answer: 1, explain: "Dominio, regno, phylum, classe, ordine, famiglia, genere, specie." },
        { type: "text", q: "Quale studioso introdusse la nomenclatura binomiale?", answer: ["linneo", "carl linneo", "linné", "carl von linné", "carlo linneo"], explain: "Linneo la usò nel Systema Naturae (1735-1758)." },
        { type: "tf", q: "I funghi sono più vicini evolutivamente agli animali che alle piante.", answer: true, explain: "Lo mostrano le analisi del DNA: funghi e animali condividono un antenato comune più recente di quello con le piante." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul><li>Evoluzione = cambiamento delle frequenze alleliche in una popolazione. Fattori: mutazioni, selezione, deriva, flusso genico, ricombinazione.</li><li>Hardy-Weinberg: p + q = 1; p² + 2pq + q² = 1.</li><li>Speciazione = isolamento riproduttivo (allopatrica o simpatrica).</li><li>Tre domini: Bacteria, Archaea, Eukarya. Eucarioti: protisti, funghi, piante, animali.</li><li>Specie: nome binomiale in corsivo (<i>Homo sapiens</i>).</li></ul>`
    }
  ],
  glossary: [
    { t: "Selezione naturale", d: "Sopravvivenza e riproduzione differenziale degli individui meglio adattati." },
    { t: "Pool genico", d: "Insieme di tutti gli alleli presenti in una popolazione." },
    { t: "Deriva genetica", d: "Variazione casuale delle frequenze alleliche, più forte nelle popolazioni piccole." },
    { t: "Fitness", d: "Capacità di un individuo di lasciare discendenti fertili." },
    { t: "Speciazione", d: "Processo di formazione di nuove specie." },
    { t: "Isolamento riproduttivo", d: "Impossibilità di incrocio fertile tra popolazioni diverse." },
    { t: "Omologia", d: "Somiglianza dovuta a un antenato comune." },
    { t: "Filogenesi", d: "Storia evolutiva e parentele dei gruppi di organismi." },
    { t: "Gruppo monofiletico (clade)", d: "Gruppo formato da un antenato e da tutti i suoi discendenti." },
    { t: "Nomenclatura binomiale", d: "Sistema che dà a ogni specie un nome di due parti: genere e epiteto specifico." },
    { t: "Dominio", d: "Categoria più ampia della classificazione: Bacteria, Archaea, Eukarya." },
    { t: "Evoluzione convergente", d: "Sviluppo di caratteri simili in gruppi non imparentati per pressioni selettive simili." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Le mutazioni sono...", options: ["causate dall'esigenza di adattarsi", "casuali rispetto alle necessità dell'organismo", "possibili solo nei batteri"], answer: 1, explain: "Le mutazioni sono casuali: l'ambiente seleziona poi tra quelle già esistenti." },
      { type: "num", q: "Una malattia recessiva colpisce 1 persona su 10 000 (q² = 0,0001). Quanto vale q?", answer: 0.01, tol: 0.0005, explain: "q = √0,0001 = 0,01." },
      { type: "mc", q: "Una barriera geografica che divide una popolazione favorisce la...", options: ["speciazione allopatrica", "speciazione simpatrica", "deriva genetica nulla"], answer: 0, explain: "L'isolamento geografico interrompe il flusso genico e permette alle popolazioni di divergere." },
      { type: "tf", q: "L'uomo discende dallo scimpanzé.", answer: false, explain: "Condividiamo con lo scimpanzé un antenato comune: sono due linee parallele." },
      { type: "text", q: "Come si chiama il sistema di Linneo che assegna a ogni specie un nome di due parti (genere + specie)?", answer: ["nomenclatura binomiale", "binomiale", "binomio"], explain: "Es. Canis lupus per il lupo." },
      { type: "mc", q: "In quale dominio si trovano i procarioti che vivono spesso in ambienti estremi e hanno geni simili agli eucarioti?", options: ["Bacteria", "Archaea", "Eukarya"], answer: 1, explain: "Gli Archei, distinti dai Batteri da Woese nel 1977." },
      { type: "order", q: "Ordina le categorie sistematiche dalla più ampia alla più specifica.", items: ["Dominio", "Regno", "Classe", "Famiglia", "Specie"], explain: "Dominio → regno → phylum → classe → ordine → famiglia → genere → specie." },
      { type: "tf", q: "I funghi sono piante senza clorofilla.", answer: false, explain: "Sono un regno a parte: eterotrofi per assorbimento, con parete di chitina, più imparentati con gli animali." },
      { type: "mc", q: "Le ali di un uccello e le ali di un insetto sono...", options: ["omologhe", "analoghe", "identiche per origine"], answer: 1, explain: "Hanno la stessa funzione ma origine diversa: sono un caso di evoluzione convergente." },
      { type: "mc", q: "Perché la resistenza ai farmaci è un esempio di selezione naturale?", options: ["Il farmaco provoca la mutazione voluta", "Il farmaco elimina i sensibili e favorisce i resistenti già presenti", "I batteri decidono di cambiare"], answer: 1, explain: "Il farmaco funziona da fattore selettivo su una variabilità preesistente." }
    ]
  }
});
