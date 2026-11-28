TOPIC('it', {
  id: "l3-sci-dna-genetica",
  title: "Il DNA e la genetica",
  intro: "Perché hai gli occhi di un certo colore? Perché da due genitori nascono figli diversi tra loro, ma che si assomigliano? La genetica ha cercato la risposta in due modi complementari: nell'Ottocento <b>Gregor Mendel</b> scoprì le <b>leggi</b> dell'ereditarietà contando piselli, senza sapere che cosa fosse un gene; un secolo dopo <b>Watson e Crick</b> mostrarono la struttura della molecola che li contiene, il <b>DNA</b>. In questa lezione uniamo le due storie: dalle leggi di Mendel alla doppia elica, dalla <b>duplicazione</b> del DNA alla <b>sintesi delle proteine</b>, fino alle mutazioni e alle tecnologie che oggi permettono di leggere e modificare il genoma.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Mendel e i caratteri ereditari",
      html: `<p>Tra il 1856 e il 1863, nell'orto del convento di Brno, il monaco <b>Gregor Mendel</b> incrociò migliaia di piante di pisello (<i>Pisum sativum</i>). Scelse la pianta con cura: è facile da coltivare, si autofeconda ma si può anche incrociare a mano, e presenta caratteri <b>nettamente alternativi</b> (semi lisci o rugosi, gialli o verdi, fiori viola o bianchi, pianta alta o bassa...). Partì da <b>linee pure</b>, che incrociate tra loro per generazioni davano sempre lo stesso carattere. Fu il primo a <b>contare</b> i risultati e a trattarli in modo matematico. Presentò i risultati nel 1865 e li pubblicò nel 1866, ma furono ignorati fino al <b>1900</b>, quando de Vries, Correns e Tschermak li riscoprirono.</p>
<p><b>Parole chiave.</b> Un <b>gene</b> è un tratto di DNA che determina un carattere; le sue forme alternative sono gli <b>alleli</b>. Un individuo diploide ha due alleli per gene (uno da ogni genitore): se sono uguali è <b>omozigote</b> (AA o aa), se diversi <b>eterozigote</b> (Aa). L'allele che si manifesta anche in eterozigosi è <b>dominante</b> (maiuscolo), quello che si manifesta solo in omozigosi è <b>recessivo</b> (minuscolo). Il <b>genotipo</b> è l'insieme degli alleli, il <b>fenotipo</b> è il carattere osservabile.</p>`
    },
    {
      type: "text",
      title: "Le tre leggi di Mendel",
      html: `<ol>
<li><b>Legge della dominanza (uniformità degli ibridi)</b>: incrociando due linee pure diverse per un carattere (AA × aa), tutti i figli della F₁ sono uguali e mostrano il carattere dominante (tutti Aa). Mendel incrociò semi lisci e rugosi: la F₁ aveva solo semi lisci.</li>
<li><b>Legge della segregazione</b>: gli alleli di ogni gene si separano alla formazione dei gameti, e ogni gamete ne riceve <b>uno solo</b>. Incrociando due ibridi (Aa × Aa) nella F₂ ricompare il carattere recessivo, in rapporto <b>3 : 1</b>. Mendel ottenne 5474 semi lisci e 1850 rugosi (2,96 : 1). Genotipi: 1 AA : 2 Aa : 1 aa.</li>
<li><b>Legge dell'assortimento indipendente</b>: gli alleli di geni diversi si distribuiscono nei gameti in modo indipendente. Incrociando due doppi eterozigoti (AaBb × AaBb) si ottiene nella F₂ il rapporto fenotipico <b>9 : 3 : 3 : 1</b>. Mendel ottenne 315 semi lisci gialli, 101 rugosi gialli, 108 lisci verdi, 32 rugosi verdi (su 556), molto vicino a 9 : 3 : 3 : 1.</li>
</ol>
<p>Il <b>quadrato di Punnett</b> è lo strumento per calcolare le combinazioni: sui lati si scrivono i gameti dei due genitori e nelle caselle i genotipi dei figli. Il <b>reincrocio</b> (<i>testcross</i>) serve a scoprire se un individuo dominante è AA o Aa: lo si incrocia con un omozigote recessivo (aa); se tra i figli compare anche solo uno con carattere recessivo, il genitore era Aa.</p>
<p>La terza legge vale soltanto se i geni si trovano su <b>cromosomi diversi</b> (o molto distanti sullo stesso). I geni vicini sullo stesso cromosoma si ereditano insieme, in <b>linkage</b>, a meno di un crossing-over durante la meiosi (T. H. Morgan, mosca <i>Drosophila</i>, 1910-1915).</p>`
    },
    {
      type: "svg",
      title: "Il quadrato di Punnett: Aa × Aa",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="210" y="32" font-size="16" font-weight="bold" fill="#1f2937" text-anchor="middle">Gameti del genitore 1</text>
<text x="60" y="165" font-size="16" font-weight="bold" fill="#1f2937" text-anchor="middle">Gameti</text>
<text x="60" y="185" font-size="16" font-weight="bold" fill="#1f2937" text-anchor="middle">genitore 2</text>
<g font-size="24" font-weight="bold" text-anchor="middle">
<text x="190" y="70" fill="#7c3aed">A</text><text x="290" y="70" fill="#0ea5e9">a</text>
<text x="125" y="130" fill="#7c3aed">A</text><text x="125" y="230" fill="#0ea5e9">a</text>
</g>
<g stroke="#334155" stroke-width="2">
<rect x="145" y="85" width="100" height="100" fill="#ddd6fe"/><rect x="245" y="85" width="100" height="100" fill="#e0f2fe"/>
<rect x="145" y="185" width="100" height="100" fill="#e0f2fe"/><rect x="245" y="185" width="100" height="100" fill="#fecaca"/>
</g>
<g font-size="26" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="195" y="145">AA</text><text x="295" y="145">Aa</text><text x="195" y="245">Aa</text><text x="295" y="245" fill="#b91c1c">aa</text>
</g>
<g font-size="15" fill="#334155">
<text x="375" y="115">25% AA</text><text x="375" y="140">50% Aa</text><text x="375" y="165">25% aa</text>
<text x="375" y="205" font-weight="bold" fill="#047857">Fenotipo dominante: 75%</text>
<text x="375" y="230" font-weight="bold" fill="#b91c1c">Fenotipo recessivo: 25%</text>
<text x="375" y="255" fill="#475569">Rapporto 3 : 1</text>
</g>
</svg>`,
      caption: "Ogni genitore eterozigote produce due tipi di gameti con uguale probabilità: ne derivano le proporzioni 1 : 2 : 1 e 3 : 1."
    },
    {
      type: "example",
      title: "Il rischio di una malattia recessiva",
      html: `<p>La <b>fibrosi cistica</b> è una malattia genetica recessiva (gene CFTR): si manifesta solo in chi è omozigote <i>aa</i>. Due genitori sani possono essere entrambi <b>portatori</b> (Aa). Quale probabilità hanno di avere un figlio malato?</p>
<ul>
<li>Gameti: ciascuno dà A con probabilità ½ e a con probabilità ½.</li>
<li>Figlio aa: ½ · ½ = <b>¼ = 25%</b> a ogni gravidanza. Figlio portatore sano (Aa): 50%. Figlio senza l'allele malato: 25%.</li>
<li>Se un figlio sano ha entrambi i genitori portatori, la probabilità che sia a sua volta portatore è 2/3 (sapendo che non è aa: 2 casi su 3).</li>
</ul>
<p>Ogni gravidanza è un evento indipendente: avere già avuto un figlio malato non cambia la probabilità per il successivo.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Mendel",
      questions: [
        { type: "mc", q: "Incrociando Aa × aa, quale proporzione di figli avrà fenotipo recessivo?", options: ["50%", "25%", "75%", "0%"], answer: 0, explain: "Gameti A, a contro a, a: 2 Aa e 2 aa, cioè metà dei figli." },
        { type: "num", q: "Nell'incrocio di due doppi eterozigoti AaBb × AaBb, quale frazione di figli (in sedicesimi) mostra entrambi i caratteri recessivi?", answer: 1, explain: "Il rapporto 9 : 3 : 3 : 1 ha un solo sedicesimo di doppio recessivo (aabb)." },
        { type: "tf", q: "Un individuo con fenotipo dominante può essere omozigote o eterozigote.", answer: true, explain: "AA e Aa hanno lo stesso fenotipo; il reincrocio con aa permette di distinguerli." }
      ]
    },
    {
      type: "text",
      title: "Oltre Mendel: quando i caratteri non sono così semplici",
      html: `<p>Molti caratteri non seguono la dominanza semplice:</p>
<ul>
<li><b>Dominanza incompleta</b>: l'eterozigote ha un fenotipo intermedio. Nel bocca di leone (e nella <i>Mirabilis jalapa</i>) fiori rossi × bianchi danno fiori rosa; da rosa × rosa si ottiene 1 rosso : 2 rosa : 1 bianco.</li>
<li><b>Codominanza</b>: entrambi gli alleli si esprimono. Nel sistema AB0 dei gruppi sanguigni gli alleli I<sup>A</sup> e I<sup>B</sup> sono codominanti e i<sup>0</sup> è recessivo: il gruppo AB ha entrambi gli antigeni; A può essere I<sup>A</sup>I<sup>A</sup> o I<sup>A</sup>i; 0 è ii. Il gene ha <b>tre alleli</b> (allelia multipla).</li>
<li><b>Caratteri poligenici</b>: dipendono da più geni e dall'ambiente (statura, colore della pelle): variano in modo continuo.</li>
<li><b>Caratteri legati al sesso</b>: i geni sul cromosoma X. Poiché i maschi hanno un solo X (XY), un allele recessivo sull'X (daltonismo, emofilia) si manifesta nel maschio anche con una sola copia; una femmina XX deve averne due. Una madre portatrice (X<sup>D</sup>X<sup>d</sup>) ha il 50% di probabilità di trasmettere l'allele a ogni figlio: i figli maschi hanno il 50% di essere daltonici.</li>
<li><b>Pleiotropia</b> ed <b>epistasi</b>: un gene può influenzare più caratteri, o l'espressione di un gene può dipendere da un altro.</li>
</ul>
<p>Dopo il 1900 si capì dove stava il gene: nel 1902-1903 Sutton e Boveri osservarono che il comportamento dei cromosomi durante la meiosi è lo stesso previsto per i "fattori" di Mendel (<b>teoria cromosomica dell'ereditarietà</b>); Morgan la confermò con le mosche dagli occhi bianchi (1910), un carattere legato all'X.</p>`
    },
    {
      type: "text",
      title: "La molecola dell'ereditarietà: il DNA",
      html: `<p>Che cosa c'è nei cromosomi? Per molti anni si pensò che i geni fossero proteine, più varie e complesse del DNA. Le prove contrarie arrivarono da tre esperimenti:</p>
<ul>
<li><b>Griffith (1928)</b>: batteri innocui, mescolati a batteri patogeni uccisi dal calore, diventavano patogeni: c'è una "sostanza trasformante".</li>
<li><b>Avery, MacLeod e McCarty (1944)</b> mostrarono che la sostanza trasformante è il <b>DNA</b>.</li>
<li><b>Hershey e Chase (1952)</b>: nei virus batteriofagi che infettano un batterio entra il DNA (marcato col fosforo radioattivo), non le proteine (marcate con lo zolfo): il DNA porta l'informazione.</li>
</ul>
<p>Il DNA (acido desossiribonucleico) è un <b>polimero di nucleotidi</b>. Ogni nucleotide ha uno zucchero (<b>desossiribosio</b>), un <b>gruppo fosfato</b> e una <b>base azotata</b>: due purine (adenina A e guanina G, a due anelli) o due pirimidine (citosina C e timina T, a un anello). I nucleotidi si legano zucchero-fosfato a formare uno scheletro, con le basi rivolte all'interno.</p>
<p>Nel 1950 <b>Erwin Chargaff</b> scoprì che in ogni DNA la quantità di A è uguale a quella di T e quella di G a quella di C (nell'uomo circa 30% A, 30% T, 20% G, 20% C). Nel 1952 <b>Rosalind Franklin</b> e Raymond Gosling ottennero la celebre <b>fotografia 51</b>, diffrazione di raggi X che mostrava una struttura elicoidale. Nell'aprile del <b>1953</b> <b>James Watson e Francis Crick</b> pubblicarono su <i>Nature</i> il modello della <b>doppia elica</b> (Nobel 1962 con Maurice Wilkins):</p>
<ul>
<li>due filamenti avvolti attorno a un asse comune, con lo scheletro zucchero-fosfato all'esterno;</li>
<li>le basi stanno all'interno e si appaiano con <b>legami a idrogeno</b> secondo la regola: <b>A–T</b> (due legami) e <b>G–C</b> (tre legami);</li>
<li>i filamenti sono <b>antiparalleli</b> (uno corre 5′→3′, l'altro 3′→5′) e <b>complementari</b>: conoscendone uno si ricava l'altro;</li>
<li>passo di 10 coppie di basi per giro (3,4 nm), diametro 2 nm.</li>
</ul>
<p>Nell'uomo ogni cellula diploide contiene circa 6 miliardi di coppie di basi (3 miliardi per set di cromosomi), per una lunghezza totale di circa due metri, avvolta in 46 cromosomi grazie alle proteine istoniche.</p>`
    },
    {
      type: "3d",
      title: "La doppia elica in 3D",
      scene: "molecule",
      options: (function () {
        var atoms = [], bonds = [], n = 16, cols = { A: '#ef4444', T: '#f59e0b', G: '#22c55e', C: '#3b82f6' };
        var s1 = 'ATGCGTACCTAGGCTA', cmp = { A: 'T', T: 'A', G: 'C', C: 'G' };
        for (var i = 0; i < n; i++) {
          var th = i * Math.PI / 5, y = (i - n / 2) * 0.28;
          var c = Math.cos(th), s = Math.sin(th), b1 = s1[i], b2 = cmp[b1];
          var base = atoms.length;
          atoms.push({ x: c * 1.1, y: y, z: s * 1.1, r: 0.16, color: '#94a3b8' });
          atoms.push({ x: -c * 1.1, y: y, z: -s * 1.1, r: 0.16, color: '#94a3b8' });
          atoms.push({ x: c * 0.4, y: y, z: s * 0.4, r: 0.13, color: cols[b1], label: b1 });
          atoms.push({ x: -c * 0.4, y: y, z: -s * 0.4, r: 0.13, color: cols[b2], label: b2 });
          bonds.push([base, base + 2]); bonds.push([base + 1, base + 3]); bonds.push([base + 2, base + 3]);
          if (i > 0) { bonds.push([base - 4, base]); bonds.push([base - 3, base + 1]); }
        }
        return { atoms: atoms, bonds: bonds };
      })(),
      caption: "Scheletro zucchero-fosfato (grigio) all'esterno, coppie di basi all'interno: A (rosso) con T (arancio), G (verde) con C (blu)."
    },
    {
      type: "text",
      title: "La duplicazione del DNA",
      html: `<p>Prima di ogni divisione cellulare (fase S del ciclo cellulare, vista nella lezione su mitosi e meiosi) il DNA deve essere <b>copiato</b>. Watson e Crick avevano già intuito il meccanismo: aprendo i due filamenti, ciascuno fa da <b>stampo</b> per un nuovo filamento complementare. Il modello è detto <b>semiconservativo</b>: ogni doppia elica figlia ha un filamento vecchio e uno nuovo. Lo dimostrarono <b>Meselson e Stahl nel 1958</b> coltivando batteri in azoto pesante (¹⁵N) e poi in azoto normale e separando il DNA per densità.</p>
<p>I protagonisti sono enzimi:</p>
<ol>
<li>La <b>elicasi</b> apre la doppia elica rompendo i legami a idrogeno: si forma la <b>forcella di replicazione</b>.</li>
<li>La <b>primasi</b> sintetizza un breve innesco di RNA (<i>primer</i>), perché la DNA polimerasi non può partire da zero.</li>
<li>La <b>DNA polimerasi</b> aggiunge nucleotidi seguendo la regola A–T, G–C, <b>sempre in direzione 5′→3′</b>.</li>
<li>Poiché i filamenti sono antiparalleli, uno (<b>filamento veloce</b>, <i>leading</i>) è copiato in modo continuo, l'altro (<b>lento</b>, <i>lagging</i>) a pezzetti, i <b>frammenti di Okazaki</b>, uniti dalla <b>DNA ligasi</b>.</li>
</ol>
<p>La DNA polimerasi ha anche una funzione di <b>correzione di bozze</b>: toglie i nucleotidi sbagliati. Dopo i sistemi di riparazione l'errore finale è di circa uno ogni miliardo di basi copiate. Nei cromosomi eucarioti la copia parte da migliaia di <b>origini di replicazione</b> contemporaneamente, altrimenti il genoma umano richiederebbe settimane.</p>`
    },
    {
      type: "text",
      title: "Dal gene alla proteina: il dogma centrale",
      html: `<p>Un gene è un tratto di DNA che contiene le istruzioni per una proteina (o per un RNA funzionale). Nel 1958 Crick enunciò il <b>dogma centrale</b>: l'informazione scorre <b>DNA → RNA → proteina</b>. La proteina determina la struttura e le funzioni della cellula, ed è ciò che, in definitiva, si osserva come carattere.</p>
<p><b>RNA</b> (acido ribonucleico) differisce dal DNA per tre cose: zucchero <b>ribosio</b>, base <b>uracile (U)</b> al posto della timina, ed è di solito a <b>singolo filamento</b>. Tipi principali: <b>mRNA</b> (messaggero: la copia del gene), <b>tRNA</b> (di trasporto: porta gli amminoacidi), <b>rRNA</b> (ribosomale: parte dei ribosomi).</p>
<p><b>1. Trascrizione</b> (nel nucleo, negli eucarioti). L'<b>RNA polimerasi</b> si lega al <b>promotore</b> del gene, apre l'elica e sintetizza un filamento di mRNA complementare al filamento <b>stampo</b> (A→U, T→A, G→C, C→G). Negli eucarioti il trascritto primario subisce la <b>maturazione</b>: si aggiungono un cappuccio e una coda di poli-A, e con lo <b>splicing</b> si eliminano gli <b>introni</b> e si uniscono gli <b>esoni</b>. L'mRNA maturo esce dal nucleo.</p>
<p><b>2. Traduzione</b> (nel citoplasma, sui ribosomi). Il <b>codice genetico</b> associa a ogni <b>tripletta di basi dell'mRNA (codone)</b> un amminoacido. Con 4 basi in gruppi da 3 ci sono 4³ = <b>64 codoni</b>: <b>61</b> codificano i 20 amminoacidi (il codice è <b>degenerato</b>: più codoni per lo stesso amminoacido), AUG è il codone di <b>inizio</b> (metionina) e UAA, UAG, UGA sono i codoni di <b>stop</b>. Il codice è quasi <b>universale</b>: lo stesso in batteri, piante e uomo. Ogni <b>tRNA</b> porta un amminoacido e ha un <b>anticodone</b> complementare al codone; il ribosoma scorre sull'mRNA, i tRNA si legano uno dopo l'altro e gli amminoacidi vengono uniti da <b>legami peptidici</b> fino al codone di stop. La catena si ripiega nella proteina funzionale.</p>
<p>Il codice fu decifrato negli anni 1961-1966 (Nirenberg, Matthaei, Khorana, Holley; Nobel 1968): il primo codone svelato fu UUU = fenilalanina.</p>`
    },
    {
      type: "svg",
      title: "Dal DNA alla proteina, con un esempio",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="ar2" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#475569"/></marker></defs>
<g font-size="17" font-weight="bold" text-anchor="start">
<text x="20" y="45" fill="#1d4ed8">DNA (stampo)</text>
<text x="20" y="125" fill="#15803d">mRNA</text>
<text x="20" y="205" fill="#b45309">Proteina</text>
</g>
<g font-size="22" font-weight="bold" font-family="monospace" fill="#1d4ed8">
<text x="190" y="48">TAC</text><text x="270" y="48">CGG</text><text x="350" y="48">TTT</text><text x="430" y="48">ACT</text>
</g>
<g font-size="22" font-weight="bold" font-family="monospace" fill="#15803d">
<text x="190" y="128">AUG</text><text x="270" y="128">GCC</text><text x="350" y="128">AAA</text><text x="430" y="128">UGA</text>
</g>
<g font-size="17" font-weight="bold" fill="#b45309">
<text x="188" y="208">Met</text><text x="272" y="208">Ala</text><text x="352" y="208">Lys</text><text x="425" y="208" fill="#b91c1c">STOP</text>
</g>
<g stroke="#475569" stroke-width="3" marker-end="url(#ar2)">
<line x1="105" y1="62" x2="105" y2="95"/><line x1="105" y1="140" x2="105" y2="175"/>
<line x1="210" y1="58" x2="210" y2="95"/><line x1="290" y1="58" x2="290" y2="95"/><line x1="370" y1="58" x2="370" y2="95"/><line x1="450" y1="58" x2="450" y2="95"/>
<line x1="210" y1="138" x2="210" y2="175"/><line x1="290" y1="138" x2="290" y2="175"/><line x1="370" y1="138" x2="370" y2="175"/>
</g>
<text x="125" y="85" font-size="14" fill="#475569">trascrizione</text>
<text x="125" y="165" font-size="14" fill="#475569">traduzione</text>
<text x="300" y="260" font-size="15" fill="#334155" text-anchor="middle">Ogni terna di basi (codone) corrisponde a un amminoacido.</text>
<text x="300" y="282" font-size="15" fill="#334155" text-anchor="middle">UGA non codifica nulla: segnala la fine della catena.</text>
</svg>`,
      caption: "Il filamento stampo TAC-CGG-TTT-ACT dà l'mRNA AUG-GCC-AAA-UGA e il peptide Met-Ala-Lys."
    },
    {
      type: "quiz",
      title: "Mini-quiz: DNA, RNA, proteine",
      questions: [
        { type: "mc", q: "Qual è l'mRNA trascritto dal filamento stampo di DNA 3′-TACGGA-5′?", options: ["5′-AUGCCU-3′", "5′-TACGGA-3′", "5′-ATGCCT-3′", "5′-UACGGA-3′"], answer: 0, explain: "T→A, A→U, C→G, G→C, G→C, A→U: AUGCCU." },
        { type: "num", q: "Quanti nucleotidi servono (escluso lo stop) per codificare una proteina di 100 amminoacidi?", answer: 300, explain: "Ogni amminoacido è codificato da una tripletta: 100 · 3 = 300." },
        { type: "tf", q: "Nella duplicazione del DNA, ogni doppia elica figlia contiene un filamento vecchio e uno nuovo.", answer: true, explain: "È il modello semiconservativo, dimostrato da Meselson e Stahl (1958)." }
      ]
    },
    {
      type: "example",
      title: "Leggere un gene e mutarlo",
      html: `<p>Filamento codificante: 5′-ATG GCC AAA TGA-3′. L'mRNA ha la stessa sequenza con U al posto di T: <b>AUG GCC AAA UGA</b>, quindi Met-Ala-Lys-stop.</p>
<ul>
<li><b>Sostituzione silente</b>: GCC → GCA (ancora Ala).</li>
<li><b>Missenso</b>: AAA → GAA (Lys → Glu): una sola lettera cambia l'amminoacido.</li>
<li><b>Non senso</b>: AAA → UAA (Lys → stop): la proteina finisce un amminoacido prima.</li>
<li><b>Delezione di una base</b> (togliamo la prima A di AAA): AUG GCC AAU GA... la fase di lettura si sposta e i codoni successivi cambiano.</li>
</ul>`
    },
    {
      type: "text",
      title: "Le mutazioni",
      html: `<p>Una <b>mutazione</b> è un cambiamento permanente nella sequenza del DNA. Può nascere da errori di copiatura non riparati o da agenti <b>mutageni</b> (raggi UV, raggi X, alcune sostanze chimiche, il fumo). Si distinguono:</p>
<ul>
<li><b>mutazioni puntiformi</b> (cambiano una base): <b>silente</b> (stesso amminoacido, per via della degenerazione), <b>missenso</b> (amminoacido diverso), <b>non senso</b> (compare un codone di stop e la proteina è troncata);</li>
<li><b>inserzioni e delezioni</b> di una o più basi: se il numero non è multiplo di tre cambia la fase di lettura (<b>frameshift</b>) e quasi tutti gli amminoacidi a valle sono sbagliati;</li>
<li><b>mutazioni cromosomiche</b> (perdite, duplicazioni, inversioni, traslocazioni di pezzi di cromosoma) e <b>genomiche</b> (cambio del numero di cromosomi, come la trisomia 21, o sindrome di Down).</li>
</ul>
<p><b>Un esempio celebre</b>: l'<b>anemia falciforme</b> è dovuta a un solo cambiamento di base nel gene della catena β dell'emoglobina (GAG → GTG nel DNA, cioè GAG → GUG nell'mRNA), per cui l'acido glutammico in sesta posizione diventa valina. Quella sola sostituzione fa aggregare l'emoglobina e deforma i globuli rossi. Gli eterozigoti sono più resistenti alla malaria: ecco perché l'allele è frequente nelle zone dove la malaria è diffusa. La <b>fibrosi cistica</b>, invece, è spesso dovuta alla delezione di 3 basi (ΔF508) che elimina una fenilalanina dalla proteina CFTR.</p>
<p>Le mutazioni nelle cellule somatiche non si trasmettono ai figli, ma possono causare tumori; quelle nei gameti passano alle generazioni successive e sono la materia prima dell'evoluzione, perché creano nuovi alleli.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la genetica",
      intro: "Immagini diverse per gli stessi meccanismi.",
      tabs: [
        { label: "📚 La biblioteca e le ricette", html: "<p>Il genoma è una <b>biblioteca</b> di libri di ricette (i cromosomi), custodita nel nucleo che non esce mai dalla sala di lettura. Un gene è una <b>ricetta</b>. Quando serve, la cellula fa una <b>fotocopia</b> (la trascrizione, l'mRNA) e la porta in cucina (il ribosoma), dove il cuoco (tRNA) legge le istruzioni a gruppi di tre parole (codoni) e assembla gli ingredienti (amminoacidi) nell'ordine scritto. Una mutazione puntiforme è un errore di battitura in una ricetta: cambiare 'sale' in 'sala' può rovinare il piatto (missenso) o non cambiare nulla (silente); saltare una lettera sposta tutte le parole seguenti (frameshift).</p>" },
        { label: "🤐 La cerniera lampo", html: "<p>La duplicazione è una <b>cerniera lampo</b> che si apre: la doppia elica si 'slaccia' per un tratto e ogni lato attira i denti mancanti. A ogni dente A corrisponde un dente T, a ogni G un C, e alla fine hai due cerniere identiche, ognuna con una metà vecchia e una nuova. Il fatto che gli A si appaiano solo con T e i G solo con C è il segreto della <b>fedeltà</b> della copia, scoperta da Watson e Crick proprio guardando come potevano incastrarsi le basi.</p>" },
        { label: "🌳 Albero delle probabilità", html: "<p>Se il quadrato di Punnett non ti convince, usa un albero. Per Aa × Aa: il genitore 1 dà A (½) o a (½); per ognuno, il genitore 2 dà A (½) o a (½). Quattro rami ciascuno di probabilità ¼: AA, Aa, aA, aa. Per due geni indipendenti basta <b>moltiplicare</b>: la probabilità di avere fenotipo recessivo per entrambi, aabb, è ¼ · ¼ = 1/16. È la regola del prodotto, la stessa usata nella lezione di probabilità: Mendel è stato uno dei primi a vedere che l'ereditarietà è un fenomeno statistico.</p>" },
        { label: "🧪 DNA e RNA: un confronto", html: "<p>Sposta ogni caratteristica nel gruppo giusto: lo vedrai subito in tabella.</p>", widget: "classify", options: { groups: ["Solo DNA", "Solo RNA", "Entrambi"], items: [["Desossiribosio", 0], ["Ribosio", 1], ["Timina (T)", 0], ["Uracile (U)", 1], ["Adenina (A)", 2], ["Doppio filamento (di solito)", 0], ["Filamento singolo (di solito)", 1], ["Gruppo fosfato", 2], ["Citosina e guanina", 2]] } }
      ]
    },
    {
      type: "text",
      title: "Leggere e modificare il DNA",
      html: `<p>Capire il DNA ha cambiato la medicina, l'agricoltura e la giustizia.</p>
<ul>
<li><b>PCR</b> (reazione a catena della polimerasi, Kary Mullis, 1983): amplifica milioni di copie di un frammento di DNA in poche ore, con cicli di riscaldamento e raffreddamento. È alla base dei tamponi molecolari per il virus SARS-CoV-2.</li>
<li><b>Impronte genetiche</b> (Alec Jeffreys, 1984): le sequenze ripetute sono diverse da persona a persona (tranne i gemelli identici): usate nelle indagini e nei test di paternità.</li>
<li><b>DNA ricombinante e OGM</b>: dagli anni Settanta, con gli enzimi di restrizione si tagliano e si incollano pezzi di DNA. Nel 1978 si produsse insulina umana in batteri; oggi si coltivano piante con geni inseriti.</li>
<li><b>Progetto Genoma Umano</b> (1990-2003): lettura dell'intera sequenza umana, circa 3 miliardi di basi e circa 20 000 geni che codificano proteine (solo il 1-2% del genoma). Nel 2022 è stata pubblicata la sequenza completa, senza lacune.</li>
<li><b>CRISPR-Cas9</b>: nel 2012 Emmanuelle Charpentier e Jennifer Doudna mostrarono che un sistema di difesa dei batteri può essere usato come 'forbice molecolare' guidata per tagliare il DNA in un punto scelto. Hanno ricevuto il Nobel per la chimica nel 2020. Si studiano terapie per malattie come l'anemia falciforme, ma le modifiche ereditarie sugli embrioni pongono gravi problemi etici.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "I numeri troppo belli di Mendel",
      html: `<p>Qualcuno ha sospettato che i risultati di Mendel fossero 'troppo belli': il matematico e biologo Ronald Fisher (1936) calcolò che i rapporti erano più vicini a 3 : 1 di quanto ci si dovrebbe aspettare dal caso. Tra le ipotesi, un assistente che 'aiutava' il monaco, o la tendenza a ripetere i conteggi quando i numeri non tornavano. Il dibattito non è chiuso, ma la sostanza delle leggi di Mendel è stata confermata mille volte. Un fatto singolare: Mendel scrisse a Nägeli, un botanico famoso, ma non fu preso sul serio; morì nel 1884, senza sapere che il suo lavoro avrebbe fondato una scienza.</p>`
    },
    {
      type: "curiosity",
      title: "Siamo quasi tutti uguali",
      html: `<p>Due persone qualsiasi condividono circa il 99,9% del DNA: le differenze sono soprattutto singoli cambi di base (SNP), in media uno ogni mille basi circa. Condividiamo circa il 98-99% del DNA con gli scimpanzé. Quello che conta non è tanto quanti geni abbiamo, ma <b>come e quando vengono accesi o spenti</b>: è lo studio dell'<b>epigenetica</b> e della regolazione genica. Per esempio le cellule del tuo fegato e quelle di un neurone hanno lo stesso DNA ma usano geni diversi.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: dal carattere alla molecola",
      nodes: [
        { id: "mendel", label: "Leggi di Mendel", x: 15, y: 12, color: "#2563eb", html: "Dominanza, segregazione, assortimento indipendente.", why: "Mendel (1866) dedusse l'esistenza di 'fattori' discreti ereditari dal conteggio dei figli, senza conoscerne la natura. Il suo successo si deve al metodo: linee pure, un carattere alla volta, molti numeri." },
        { id: "cromo", label: "Teoria cromosomica", x: 50, y: 12, color: "#16a34a", html: "I geni stanno sui cromosomi.", why: "La meiosi spiega la segregazione e l'assortimento: i cromosomi omologhi si separano come gli alleli. Sutton, Boveri e Morgan collegarono i fattori di Mendel ai cromosomi." },
        { id: "dna", label: "Struttura del DNA", x: 85, y: 12, color: "#f59e0b", html: "Doppia elica, basi complementari.", why: "Griffith, Avery, Hershey e Chase identificarono nel DNA il materiale genetico; Chargaff, Franklin, Wilkins, Watson e Crick ne svelarono la struttura. La complementarietà A–T e G–C spiega sia la copia sia l'informazione." },
        { id: "dupl", label: "Duplicazione", x: 20, y: 55, color: "#a855f7", html: "Semiconservativa: stampo, polimerasi, ligasi.", why: "La complementarietà permette a ciascun filamento di fare da stampo: il modello fu confermato da Meselson e Stahl. È il fondamento della mitosi: ogni cellula figlia riceve lo stesso genoma." },
        { id: "esp", label: "Espressione genica", x: 55, y: 55, color: "#ef4444", html: "Trascrizione e traduzione.", why: "Il dogma centrale (Crick, 1958) e la decifrazione del codice (1961-66) mostrarono come la sequenza di basi determina la sequenza di amminoacidi e quindi la struttura delle proteine." },
        { id: "mut", label: "Mutazioni", x: 85, y: 55, color: "#0ea5e9", html: "Cambiamenti ereditabili della sequenza.", why: "Cambiando la sequenza di DNA cambia la proteina e quindi il fenotipo: è il ponte tra i geni e le malattie, e tra i geni e l'evoluzione (Darwin non conosceva la fonte della variabilità, la genetica gliela ha data)." },
        { id: "fen", label: "Fenotipo", x: 50, y: 90, color: "#7c3aed", html: "Il carattere osservabile: genotipo + ambiente.", why: "La proteina è l'anello che collega il genotipo al fenotipo: per questo gli alleli dominanti e recessivi di Mendel corrispondono di solito a proteine funzionanti o non funzionanti." }
      ],
      edges: [["mendel", "cromo", "spiegate da"], ["cromo", "dna", "portano il"], ["dna", "dupl", "permette la"], ["dna", "esp", "si legge con la"], ["esp", "fen", "produce il"], ["mut", "esp", "modifica l'"], ["mut", "fen", "cambiano il"]]
    }
  ],
  glossary: [
    { t: "Gene", d: "Tratto di DNA che contiene l'informazione per una proteina o un RNA funzionale." },
    { t: "Allele", d: "Una delle forme alternative di un gene." },
    { t: "Omozigote / eterozigote", d: "Con due alleli uguali / con due alleli diversi per un gene." },
    { t: "Genotipo e fenotipo", d: "L'insieme degli alleli di un individuo / i suoi caratteri osservabili." },
    { t: "Nucleotide", d: "Unità del DNA: zucchero, gruppo fosfato e base azotata." },
    { t: "Complementarietà", d: "Appaiamento A–T (A–U nell'RNA) e G–C tra le basi dei due filamenti." },
    { t: "Replicazione semiconservativa", d: "Ogni doppia elica figlia contiene un filamento originale e uno nuovo." },
    { t: "Trascrizione", d: "Sintesi di mRNA a partire da un filamento di DNA, ad opera dell'RNA polimerasi." },
    { t: "Traduzione", d: "Sintesi di una proteina sui ribosomi, leggendo l'mRNA a gruppi di tre basi." },
    { t: "Codone", d: "Tripletta di basi dell'mRNA che codifica un amminoacido o un segnale di stop." },
    { t: "Mutazione", d: "Cambiamento permanente della sequenza di DNA." },
    { t: "Dogma centrale", d: "L'informazione genetica scorre DNA → RNA → proteina." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Perché Mendel scelse la pianta di pisello?", options: ["Ha caratteri nettamente alternativi e si incrocia facilmente", "È l'unica con cromosomi", "Cresce in una sola stagione", "Non ha mutazioni"], answer: 0, explain: "Il pisello ha caratteri netti (liscio/rugoso, giallo/verde) e permette incroci controllati." },
      { type: "num", q: "Incrociando Aa × Aa, quale percentuale di figli sarà omozigote recessivo aa?", answer: 25, unit: "%", explain: "Il quadrato di Punnett dà 1 AA : 2 Aa : 1 aa, cioè ¼ di aa." },
      { type: "mc", q: "Una madre portatrice sana di daltonismo (XᴰXᵈ) e un padre sano (XᴰY): quale probabilità ha un figlio maschio di essere daltonico?", options: ["50%", "25%", "0%", "100%"], answer: 0, explain: "Il figlio maschio riceve la Y dal padre e una delle due X materne: metà dei maschi riceve Xᵈ." },
      { type: "tf", q: "Nel DNA l'adenina si appaia con la citosina.", answer: false, explain: "A si appaia con T (due legami a idrogeno) e G con C (tre)." },
      { type: "mc", q: "Qual è il filamento complementare di 5′-ATGC-3′?", options: ["3′-TACG-5′", "3′-ATGC-5′", "3′-UACG-5′", "3′-CGTA-5′"], answer: 0, explain: "A–T, T–A, G–C, C–G, con il filamento antiparallelo: 3′-TACG-5′." },
      { type: "mc", q: "Quale enzima unisce i frammenti di Okazaki?", options: ["DNA ligasi", "Elicasi", "Primasi", "RNA polimerasi"], answer: 0, explain: "La DNA ligasi salda i frammenti sul filamento lento." },
      { type: "mc", q: "Quale è l'mRNA trascritto dal filamento stampo 3′-TACCCG-5′?", options: ["5′-AUGGGC-3′", "5′-ATGGGC-3′", "5′-UACCCG-3′", "5′-AUGCCC-3′"], answer: 0, explain: "T→A, A→U, C→G, C→G, C→G, G→C: AUGGGC." },
      { type: "num", q: "Quanti codoni diversi sono possibili con 4 basi in triplette?", answer: 64, explain: "4³ = 64." },
      { type: "mc", q: "Che tipo di mutazione è la sostituzione di una base che crea un codone di stop?", options: ["Non senso", "Silente", "Missenso", "Frameshift"], answer: 0, explain: "Si ottiene una proteina troncata: mutazione non senso." },
      { type: "order", q: "Metti in ordine il percorso dell'informazione genetica.", items: ["DNA", "Trascrizione", "mRNA", "Traduzione", "Proteina"], explain: "DNA → (trascrizione) → mRNA → (traduzione) → proteina." }
    ]
  }
});
