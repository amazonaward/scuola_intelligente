TOPIC('it', {
  id: "l1-sto-grecia-polis",
  title: "La Grecia delle poleis",
  intro: "Un territorio di montagne e isole, senza grandi fiumi né pianure, dove nessuno riuscì mai a unire tutti sotto un solo re. Eppure da qui sono nati la <b>democrazia</b>, la filosofia, il teatro, le Olimpiadi. Come? Con un'invenzione tutta greca: la <b>polis</b>, una città che è anche uno Stato e una comunità di cittadini. In questa lezione partiamo dalle civiltà dell'età del bronzo, i Minoici e i Micenei, e arriviamo ai due modelli opposti di <b>Sparta</b> e <b>Atene</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Il territorio greco e perché è importante",
      html: `<p>La Grecia è fatta di <b>penisole, isole e montagne</b>: circa l'80% del territorio è montuoso, le pianure coltivabili sono piccole e separate. Questo ha tre effetti decisivi:</p>
<ul>
<li><b>Frammentazione politica</b>: ogni valle o isola sviluppa una comunità autonoma; è difficile unirle in un solo regno.</li>
<li><b>Povertà di terra</b>: i raccolti sono limitati (grano poco, olio e vino molto): si cerca altrove cibo e commercio.</li>
<li><b>Vocazione marittima</b>: nessun punto della Grecia è lontano dal mare; il Mediterraneo è la strada. Come disse Platone, i Greci vivono «intorno al mare come rane intorno a uno stagno».</li>
</ul>
<p>I Greci chiamavano se stessi <b>Elleni</b> e il loro paese <b>Ellade</b>; si sentivano un unico popolo per lingua, religione (gli stessi dèi dell'Olimpo), feste panelleniche (<b>Olimpiadi</b>, dal <b>776 a.C.</b>) e santuari (Delfi, con l'oracolo di Apollo). Chi non parlava greco era <i>bárbaros</i>.</p>`
    },
    {
      type: "text",
      title: "2. Minoici e Micenei: la Grecia del bronzo",
      html: `<p><b>Civiltà minoica</b> (Creta, circa 2000-1450 a.C.): prende il nome dal mitico re Minosse. Ricchi <b>palazzi</b> come quello di <b>Cnosso</b>, senza mura difensive (segno di potenza marittima), affreschi vivaci con delfini, tori, giovani acrobati. Scrivevano con la <b>Lineare A</b>, ancora non decifrata. La loro potenza declinò dopo l'eruzione del vulcano di <b>Thera</b> (Santorini, circa 1600 a.C.) e la conquista da parte dei Micenei.</p>
<p><b>Civiltà micenea</b> (Grecia continentale, circa 1600-1100 a.C.): da <b>Micene</b> nel Peloponneso. Erano <b>Greci</b> di lingua indoeuropea, arrivati nel II millennio a.C. dal nord. Costruivano <b>cittadelle fortificate</b> (con massi enormi, le «mura ciclopiche», e la Porta dei Leoni), tombe a tholos con tesori d'oro (maschera di «Agamennone»). Scrivevano in <b>Lineare B</b>, decifrata nel 1952 da <b>Michael Ventris</b>: è greco antico, e ci dà inventari di palazzo. Alla fine del II millennio a.C. (circa 1200-1100) la civiltà micenea crollò, nel quadro della crisi generale del Mediterraneo (invasioni, terremoti, guerre).</p>
<p>Il ricordo di quell'età sopravvive nei poemi di <b>Omero</b> (<i>Iliade</i> e <i>Odissea</i>, scritti forse nell'VIII sec. a.C.): guerra di Troia (circa 1200 a.C.), re Agamennone, Achille, Ulisse. Sono racconti letterari, non cronache, ma contengono ricordi veri.</p>`
    },
    {
      type: "3d",
      title: "Mappa 3D: dalla Grecia micenea alle colonie",
      scene: "spacetime",
      caption: "La base è la carta della Grecia e dell'Egeo, l'altezza è il tempo (1700-500 a.C.). Tocca gli eventi: le frecce collegano cause ed effetti.",
      options: {
        lat: [34, 41],
        lon: [20, 30],
        years: [-1700, -500],
        places: [
          { lat: 37.97, lon: 23.72, label: "Atene" },
          { lat: 37.08, lon: 22.43, label: "Sparta" },
          { lat: 37.73, lon: 22.76, label: "Micene" },
          { lat: 35.3, lon: 25.16, label: "Cnosso" }
        ],
        events: [
          { id: "cnosso", lat: 35.3, lon: 25.16, year: -1700, label: "Palazzo di Cnosso", html: "Il grande palazzo di Creta è centro amministrativo e religioso della civiltà minoica.", causes: [] },
          { id: "micene", lat: 37.73, lon: 22.76, year: -1500, label: "Micene", html: "I Micenei, Greci continentali, dominano il Peloponneso e conquistano Creta intorno al 1450 a.C.", causes: ["cnosso"] },
          { id: "crollo", lat: 37.73, lon: 22.76, year: -1150, label: "Crollo dei palazzi", html: "Circa 1200-1100 a.C. i palazzi micenei vengono distrutti. Seguono secoli di declino: il «Medioevo ellenico» o età oscura.", causes: ["micene"] },
          { id: "olimpiadi", lat: 37.64, lon: 21.63, year: -776, label: "Prime Olimpiadi", html: "Nel 776 a.C. (data tradizionale) si svolgono ad Olimpia i primi giochi panellenici in onore di Zeus: si usavano per datare gli eventi.", causes: ["crollo"] },
          { id: "polis", lat: 37.97, lon: 23.72, year: -800, label: "Nascita delle poleis", html: "Intorno all'VIII sec. a.C. i villaggi si uniscono in città-stato (poleis), con acropoli, agorà e assemblea dei cittadini.", causes: ["crollo"] },
          { id: "cuma", lat: 40.85, lon: 14.05, year: -750, label: "Cuma: prima colonia in Italia", html: "Intorno al 750 a.C. sbarcano in Campania coloni da Calcide ed Eretria: comincia la Magna Grecia.", causes: ["polis"] },
          { id: "siracusa", lat: 37.07, lon: 15.29, year: -733, label: "Siracusa", html: "Nel 733 a.C. coloni di Corinto fondano Siracusa, che diventerà la più potente città greca d'Occidente.", causes: ["polis"] },
          { id: "solone", lat: 37.97, lon: 23.72, year: -594, label: "Riforme di Solone", html: "Ad Atene Solone cancella i debiti e la schiavitù per debiti, divide i cittadini per reddito e dà a tutti accesso all'assemblea.", causes: ["polis"] },
          { id: "clistene", lat: 37.97, lon: 23.72, year: -508, label: "Riforme di Clistene", html: "Nel 508-507 a.C. Clistene riorganizza i cittadini in 10 tribù miste e crea la Bulè dei 500: è l'inizio della democrazia ateniese.", causes: ["solone"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. Che cos'è una polis",
      html: `<p>Dopo il crollo micenese, tra il IX e l'VIII sec. a.C. i villaggi greci si riuniscono in <b>poleis</b> (singolare <i>polis</i>): comunità autonome con propri leggi, esercito, moneta e dèi protettori. Non è semplicemente una città: è uno <b>Stato</b> in miniatura.</p>
<ul>
<li><b>Acropoli</b> («città alta»): collina fortificata con i templi, rifugio in caso di attacco.</li>
<li><b>Agorà</b>: piazza centrale per il mercato e le assemblee; cuore della vita pubblica.</li>
<li><b>Chora</b>: la campagna intorno, con i campi dei cittadini.</li>
<li><b>Cittadini</b>: soltanto i maschi adulti nati da cittadini partecipano alla vita politica. Donne, schiavi e stranieri (<i>meteci</i>) ne sono esclusi.</li>
<li>Dimensioni: da qualche migliaio di abitanti a poche decine di migliaia (Atene e Siracusa le più grandi). Così tutti potevano conoscersi e partecipare direttamente.</li>
</ul>
<p>Le poleis erano rivali e spesso in guerra, ma si sentivano parte di un'unica cultura. Le forme di governo cambiano nel tempo: <b>monarchia → aristocrazia (oligarchia) → tirannide → democrazia</b>. Il <b>tiranno</b> è chi prende il potere con la forza (spesso con l'appoggio dei poveri) e governa fuori dalle regole; non aveva necessariamente il significato negativo di oggi.</p>`
    },
    {
      type: "svg",
      title: "Come è fatta una polis",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfccb"/>
<rect x="0" y="230" width="600" height="70" fill="#bfdbfe"/>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#1e3a8a">mare: porto e commerci</text>
<path d="M200 220 L250 90 L350 90 L400 220 Z" fill="#d6d3d1" stroke="#44403c" stroke-width="3"/>
<rect x="265" y="55" width="70" height="35" fill="#fafaf9" stroke="#44403c" stroke-width="2"/>
<polygon points="260,55 300,30 340,55" fill="#fecaca" stroke="#7f1d1d" stroke-width="2"/>
<text x="300" y="75" font-size="14" text-anchor="middle" fill="#0f172a">tempio</text>
<text x="300" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">ACROPOLI</text>
<rect x="215" y="150" width="170" height="60" fill="#fef9c3" stroke="#a16207" stroke-width="2"/>
<text x="300" y="185" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">AGORÀ</text>
<g fill="#fde68a" stroke="#92400e" stroke-width="2"><rect x="60" y="170" width="50" height="40"/><rect x="120" y="180" width="50" height="30"/><rect x="430" y="170" width="50" height="40"/><rect x="490" y="180" width="50" height="30"/></g>
<text x="115" y="160" font-size="14" text-anchor="middle" fill="#0f172a">case</text>
<text x="490" y="160" font-size="14" text-anchor="middle" fill="#0f172a">case</text>
<text x="85" y="40" font-size="14" fill="#14532d">campi e villaggi (chora)</text>
<text x="400" y="40" font-size="14" fill="#14532d">campi e villaggi (chora)</text>
</svg>`,
      caption: "Schema ideale di una polis: acropoli con i templi, agorà al centro, case, campagna e porto."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le origini",
      questions: [
        { type: "mc", q: "Quale scrittura dei Micenei è stata decifrata nel 1952?", options: ["Lineare A", "Lineare B", "Geroglifico"], answer: 1, explain: "La Lineare B, da Michael Ventris: è greco." },
        { type: "mc", q: "Che cosa era l'agorà?", options: ["La piazza centrale della polis", "La collina fortificata", "Un tempio"], answer: 0, explain: "Piazza del mercato e delle assemblee." },
        { type: "tf", q: "La Grecia antica era uno Stato unito sotto un solo re.", answer: false, explain: "Era divisa in molte poleis indipendenti." }
      ]
    },
    {
      type: "text",
      title: "4. La colonizzazione greca (VIII-VI sec. a.C.)",
      html: `<p>Tra l'VIII e il VI sec. a.C. molte poleis mandarono gruppi di cittadini a fondare <b>colonie</b> lungo le coste del Mediterraneo e del Mar Nero. Ogni colonia (<i>apoikia</i>, «casa lontana») era una polis <b>indipendente</b>, legata alla città madre (<i>metropoli</i>) da rapporti religiosi e affettivi.</p>
<p><b>Perché?</b></p>
<ul>
<li><b>Sovrappopolazione e scarsità di terra</b>: i figli minori dei contadini non avevano campi;</li>
<li><b>Commerci</b>: servivano scali per metalli e grano;</li>
<li><b>Lotte politiche</b>: gli sconfitti spesso andavano via;</li>
<li><b>Spirito d'avventura</b> e curiosità.</li>
</ul>
<p>Prima di partire, i coloni consultavano l'<b>oracolo di Delfi</b>. Il capo della spedizione si chiamava <i>ecista</i>.</p>
<p><b>Dove?</b> A occidente: <b>Magna Grecia</b> (Sud Italia) e <b>Sicilia</b>: Cuma, Napoli, Taranto (Sparta, circa 706 a.C.), Sibari, Crotone, Reggio, Siracusa (Corinto, 733 a.C.), Agrigento, Naxos. In Francia <b>Massalia</b> (Marsiglia, circa 600 a.C.), in Spagna Emporion; a oriente, sul Mar Nero e nell'Ellesponto (Bisanzio, circa 660 a.C.).</p>
<p><b>Conseguenze</b>: più commerci e ricchezza; nascita di una <b>classe di mercanti</b> che chiede potere; diffusione della cultura greca (e dell'alfabeto) tra i popoli italici e l'incontro con gli Etruschi e i Romani; nasce il senso di un'identità comune <b>greca</b> di fronte ai barbari.</p>`
    },
    {
      type: "text",
      title: "5. Sparta: lo Stato-caserma",
      html: `<p><b>Sparta</b>, nella pianura della Laconia (Peloponneso), conquistò i vicini Messeni con una lunga guerra (VIII-VII sec. a.C.) e li ridusse a <b>iloti</b>, servi collettivi dello Stato che lavoravano la terra. Per tenerli sottomessi, i Greci di Sparta scelsero di diventare un popolo di soldati.</p>
<ul>
<li><b>Tre classi</b>: gli <b>Spartiati</b> (cittadini a pieno titolo, pochi, guerrieri), i <b>perieci</b> (liberi senza diritti politici, artigiani e commercianti) e gli <b>iloti</b>.</li>
<li><b>Governo misto</b>, attribuito al leggendario <b>Licurgo</b>: due <b>re</b> (diarchia) con poteri soprattutto militari; la <b>gerusìa</b>, consiglio di 28 anziani sopra i 60 anni più i due re; l'<b>apella</b>, assemblea di tutti gli Spartiati che approvava o respingeva le proposte per acclamazione; i cinque <b>efori</b>, magistrati eletti ogni anno che sorvegliavano i re.</li>
<li><b>Agoghé</b> («educazione»): a 7 anni i maschi lasciavano la famiglia per essere allevati dallo Stato: disciplina, fame, resistenza al dolore, addestramento. Fino ai 30 anni vivevano in caserma.</li>
<li><b>Donne</b>: avevano più libertà e rispetto che altrove in Grecia (attività fisica, gestione dei beni), ma il loro compito era generare guerrieri.</li>
<li>Sparta aveva la <b>falange</b> più forte: soldati con scudo (<i>hoplon</i>) e lancia, in file compatte. Nel V sec. aveva circa 8000 Spartiati.</li>
</ul>
<p>Sparta rimase chiusa e conservatrice, e poco incline all'arte; la sua forza militare ne fece la guida della <b>Lega peloponnesiaca</b>.</p>`
    },
    {
      type: "text",
      title: "6. Atene: dalla aristocrazia alla democrazia",
      html: `<p><b>Atene</b>, nell'Attica, era più grande e con più mare. Il suo percorso politico fu graduale, passo dopo passo:</p>
<ul>
<li><b>Aristocrazia</b>: il potere era dei grandi proprietari (<i>eupatridi</i>), che eleggevano i nove <b>arconti</b>. I piccoli contadini indebitati rischiavano di diventare schiavi.</li>
<li><b>Dracone</b> (621 a.C.): mette per iscritto le leggi: severissime («draconiane») ma ora conosciute da tutti.</li>
<li><b>Solone</b> (594 a.C.): cancella i debiti (<i>seisachtheia</i>, «scuotimento dei pesi») e vieta la schiavitù per debiti; divide i cittadini in <b>quattro classi per reddito</b>: l'accesso alle cariche dipende dalla ricchezza e non dalla nascita; istituisce un consiglio di 400 e un tribunale popolare.</li>
<li><b>Pisistrato</b> (561-527 a.C.): tiranno popolare, protegge i contadini, costruisce opere pubbliche e feste (le Grandi Dionisie).</li>
<li><b>Clistene</b> (508-507 a.C.): suddivide la popolazione in <b>10 tribù miste</b> (non più legate a famiglie nobili) e crea la <b>Bulè dei 500</b>, che prepara le leggi. Introduce l'<b>ostracismo</b>: ogni anno i cittadini possono votare scrivendo su un coccio il nome di un uomo pericoloso, che viene esiliato per 10 anni senza processo.</li>
</ul>
<p>Con Clistene nasce la <b>democrazia</b> («potere del popolo»): le decisioni più importanti spettano all'<b>Ecclesia</b> (assemblea di tutti i cittadini maschi adulti, che si riuniva sulla collina della Pnice) e la maggior parte delle cariche è <b>assegnata per sorteggio</b>.</p>`
    },
    {
      type: "widget",
      title: "Sparta o Atene?",
      widget: "classify",
      options: {
        groups: ["🛡️ Sparta", "🏛️ Atene"],
        items: [
          ["Due re e cinque efori", 0],
          ["Assemblea di tutti i cittadini (Ecclesia)", 1],
          ["Agoghé, educazione militare dai 7 anni", 0],
          ["Ostracismo", 1],
          ["Iloti che lavorano la terra", 0],
          ["Riforme di Solone e Clistene", 1],
          ["Gerusìa di 28 anziani", 0],
          ["Forte flotta commerciale e militare", 1]
        ]
      },
      caption: "Tocca un'espressione e poi la polis giusta."
    },
    {
      type: "decision",
      title: "Atene, 508 a.C.: chi deve decidere?",
      html: `<p>Dopo la caduta dei tiranni, Atene è in lotta tra famiglie nobili. Sei <b>Clistene</b>, un aristocratico che vuole evitare la guerra civile e il ritorno di un tiranno. Quasi tutti i poteri sono ancora in mano a poche famiglie. Gli altri cittadini, specie i contadini e gli artigiani, chiedono di contare di più.</p>`,
      question: "Che soluzione proponi?",
      options: [
        { label: "Rafforzare il potere delle grandi famiglie, in modo che governino con decisione.", outcome: "Le famiglie restano in lotta, e i cittadini esclusi appoggiano un nuovo tiranno: il rischio di guerra civile resta alto." },
        { label: "Dare a tutti i cittadini maschi un posto nell'assemblea e nei consigli, riorganizzando le tribù.", outcome: "I cittadini si sentono responsabili dello Stato e lo difendono: sarà la forza di Atene nelle guerre persiane. Il prezzo: la maggior parte della popolazione (donne, schiavi, meteci) resta esclusa." },
        { label: "Affidare tutto a un re che governi per tutti.", outcome: "Si torna alla monarchia, ma gli Ateniesi ne avevano già abbandonato l'idea secoli prima: sarebbe stata una scelta contro la tendenza dei tempi." }
      ],
      answer: 1,
      explain: "Clistene scelse la strada della <b>partecipazione ampia</b>: il potere passò dall'aristocrazia di nascita all'insieme dei cittadini maschi. Fu la nascita della democrazia ateniese, che toccherà il culmine con Pericle."
    },
    {
      type: "example",
      title: "Esempio pratico: un cittadino ateniese al lavoro",
      html: `<p>Immagina di essere <b>Nicia</b>, contadino ateniese di 30 anni. La tua giornata:</p>
<ol>
<li>Al mattino lavori l'orto e gli ulivi, aiutato da uno schiavo.</li>
<li>Ogni dieci giorni circa, ti rechi alla <b>Pnice</b> per l'<b>assemblea</b>: voti per alzata di mano sulla guerra, le tasse, le leggi.</li>
<li>Se sei sorteggiato, sei per un anno membro della <b>Bulè</b> o <b>giurato</b> nei tribunali popolari (con una piccola paga per non rimetterci).</li>
<li>In caso di guerra sei un <b>oplita</b> e combatti con il tuo scudo.</li>
</ol>
<p>Sei coinvolto direttamente nelle decisioni, a differenza di oggi, in cui eleggiamo rappresentanti: la democrazia ateniese era <b>diretta</b>. Ma tua moglie, i tuoi schiavi e il vicino meteco non possono votare.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: i nomi delle forme di governo",
      html: `<p>Le parole politiche che usiamo oggi sono greche:</p>
<ul>
<li><b>monarchia</b>: governo di uno solo (<i>mónos</i> + <i>archía</i>);</li>
<li><b>aristocrazia</b>: governo dei migliori (<i>áristoi</i>);</li>
<li><b>oligarchia</b>: governo di pochi (<i>olígoi</i>);</li>
<li><b>democrazia</b>: potere del popolo (<i>dêmos</i> + <i>krátos</i>);</li>
<li><b>tirannide</b>: potere di chi ha preso con la forza il comando.</li>
</ul>
<p>Prova a classificare così lo Stato in cui vivi: chi decide? Quanti cittadini possono votare? Come vengono scelti i governanti? Le stesse domande poste dai Greci servono ancora oggi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? I 300 delle Termopili",
      html: `<p>Nel <b>480 a.C.</b> il re spartano <b>Leonida</b> resistette per tre giorni al passo delle Termopili con 300 Spartiati e alcune migliaia di altri Greci contro l'immenso esercito persiano. In realtà gli alleati greci erano circa 7000; i 300 Spartiati furono il nucleo del gruppo. Quando fu aggirato, Leonida rimandò indietro la maggior parte degli alleati e rimase a combattere con i suoi fino alla morte. Vedremo nella prossima lezione il contesto di queste guerre.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il voto con il coccio",
      html: `<p>Il nome «ostracismo» deriva da <i>óstrakon</i>, il coccio di ceramica su cui i cittadini scrivevano il nome da esiliare. Gli archeologi ne hanno trovati più di diecimila nell'agorà di Atene. Alcuni, con il nome di <b>Temistocle</b>, furono preparati in anticipo da avversari politici, già scritti con la stessa mano: una prova che anche allora si faceva propaganda elettorale! Dopo i dieci anni di esilio, l'ostracizzato poteva tornare e riprendersi tutti i diritti.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire Sparta e Atene",
      intro: "Due città, due scelte opposte. Ecco alcune analogie per tenerle a mente.",
      tabs: [
        {
          label: "🏫 Due scuole a confronto",
          html: `<p>Immagina due scuole con regole opposte.</p>
<ul>
<li><b>Scuola Sparta</b>: disciplina ferrea, divisa, orari militari, pochi insegnanti decidono tutto, tutti uguali, niente arte. Funziona nelle emergenze, poco nel cambiare.</li>
<li><b>Scuola Atene</b>: assemblea di classe che discute e vota, tutte le materie, sport, teatro, sperimentazione. Più confusione e lentezza, ma creatività e innovazione.</li>
</ul>
<p>Sparta scelse la <b>sicurezza e l'ordine</b>, Atene la <b>partecipazione e la libertà</b>. Nessuna delle due era perfetta: entrambe escludevano la maggioranza (donne, schiavi, stranieri).</p>`
        },
        {
          label: "📊 Chi governa?",
          html: `<table>
<tr><th></th><th>Sparta</th><th>Atene</th></tr>
<tr><td>Capi</td><td>2 re + 5 efori</td><td>9 arconti, strateghi, Bulè</td></tr>
<tr><td>Assemblea</td><td>Apella (acclamazione)</td><td>Ecclesia (voto, discussione)</td></tr>
<tr><td>Economia</td><td>Agricola, con iloti</td><td>Commercio, artigianato, flotta</td></tr>
<tr><td>Esercito</td><td>Falange di Spartiati</td><td>Opliti e poi flotta di trireme</td></tr>
<tr><td>Cultura</td><td>Disciplina e silenzio</td><td>Teatro, filosofia, arte</td></tr>
<tr><td>Esclusi</td><td>Iloti, perieci, donne</td><td>Schiavi, meteci, donne</td></tr>
</table>`
        },
        {
          label: "🗺️ Gira il globo",
          html: `<p>Ruota il globo: le poleis e le colonie greche da Marsiglia al Mar Nero.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 37.97, lon: 23.72, label: "Atene", color: "#2563eb" },
              { lat: 37.08, lon: 22.43, label: "Sparta", color: "#ef4444" },
              { lat: 37.07, lon: 15.29, label: "Siracusa", color: "#f97316" },
              { lat: 40.85, lon: 14.05, label: "Cuma", color: "#f97316" },
              { lat: 40.47, lon: 17.24, label: "Taranto", color: "#f97316" },
              { lat: 43.3, lon: 5.37, label: "Marsiglia", color: "#f97316" },
              { lat: 41.01, lon: 28.98, label: "Bisanzio", color: "#f97316" }
            ],
            routes: [{ points: [0, 2, 3], color: "#f97316" }, { points: [0, 6], color: "#f97316" }]
          }
        },
        {
          label: "📅 Linea del tempo",
          html: `<p>Scorri le tappe principali, dai Micenei a Clistene.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: -2000, label: "Palazzi minoici", icon: "🐂" },
              { year: -1600, label: "Micene", icon: "🛡️" },
              { year: -1200, label: "Guerra di Troia (tradizione)", icon: "🐴" },
              { year: -776, label: "Prime Olimpiadi", icon: "🥇" },
              { year: -733, label: "Siracusa", icon: "⚓" },
              { year: -621, label: "Dracone", icon: "📜" },
              { year: -594, label: "Solone", icon: "⚖️" },
              { year: -508, label: "Clistene", icon: "🗳️" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della Grecia delle poleis",
      nodes: [
        { id: "geo", label: "Territorio frammentato", x: 50, y: 6, color: "#16a34a", html: "Montagne, isole, piccole pianure.", why: "La geografia impedisce l'unificazione: ogni comunità si organizza da sola e impara a governarsi. Il mare spinge a commerciare e colonizzare." },
        { id: "polis", label: "Polis", x: 20, y: 32, color: "#2563eb", html: "Città-stato con acropoli, agorà e cittadini.", why: "Comunità piccole in cui i cittadini si conoscono e partecipano: è il terreno su cui nasce l'idea di cittadinanza." },
        { id: "colonie", label: "Colonizzazione", x: 82, y: 32, color: "#f97316", html: "Colonie dal Mar Nero alla Spagna.", why: "Poca terra, troppi abitanti e voglia di commerci spinsero a fondare nuove poleis. La cultura greca si diffonde, nasce l'idea di essere Elleni di fronte ai barbari." },
        { id: "sparta", label: "Sparta", x: 20, y: 62, color: "#ef4444", html: "Oligarchia militare con iloti.", why: "Dovendo controllare un numero enorme di iloti, Sparta scelse la disciplina militare permanente; ciò la rese forte ma rigida e poco creativa." },
        { id: "atene", label: "Atene", x: 80, y: 62, color: "#7c3aed", html: "Dalla aristocrazia alla democrazia (Solone, Clistene).", why: "Le tensioni tra ricchi e poveri (debiti, schiavitù) resero necessarie riforme. Allargare i diritti rese più forte la polis e dà identità comune ai cittadini." },
        { id: "democrazia", label: "Democrazia", x: 50, y: 85, color: "#0ea5e9", html: "Potere del demos: assemblea, sorteggio, ostracismo.", why: "È diretta e riservata a pochi (uomini adulti nati ateniesi), ma è la prima volta che si prova a far decidere alla comunità. Influenzerà le democrazie moderne." },
        { id: "panellenismo", label: "Identità greca", x: 50, y: 50, color: "#eab308", html: "Lingua, dèi, Olimpiadi, oracolo di Delfi.", why: "Pur divise, le poleis condividevano una cultura: questo le unì per resistere ai Persiani." }
      ],
      edges: [
        ["geo", "polis", "genera la"],
        ["geo", "colonie", "spinge alle"],
        ["polis", "sparta", "modello"],
        ["polis", "atene", "modello"],
        ["atene", "democrazia", "sviluppa la"],
        ["colonie", "panellenismo", "rafforzano l'"],
        ["panellenismo", "democrazia", "condivide valori con la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: Sparta e Atene",
      questions: [
        { type: "mc", q: "Come si chiamavano i servi di Sparta?", options: ["Iloti", "Meteci", "Efori"], answer: 0, explain: "Gli iloti lavoravano la terra per gli Spartiati." },
        { type: "mc", q: "Chi fondò, secondo la tradizione, le leggi di Sparta?", options: ["Licurgo", "Solone", "Clistene"], answer: 0, explain: "Il leggendario Licurgo." },
        { type: "tf", q: "Solone vietò la schiavitù per debiti.", answer: true, explain: "Cancellò i debiti e liberò chi era stato ridotto in schiavitù." },
        { type: "mc", q: "Che cos'era l'ostracismo?", options: ["Esilio di 10 anni votato su un coccio", "Una pena di morte", "Un tipo di tassa"], answer: 0, explain: "Si scriveva su un coccio il nome di chi si voleva esiliare." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Minoici (Creta, Lineare A) e Micenei (Micene, Lineare B, crollo circa 1200-1100 a.C.).</li>
<li><b>Polis</b>: città-stato con acropoli, agorà, cittadini maschi adulti; mai unificate.</li>
<li><b>Colonizzazione</b> (VIII-VI sec. a.C.): Magna Grecia, Siracusa (733), Marsiglia; cause: terra scarsa e commerci.</li>
<li><b>Sparta</b>: oligarchia militare, due re, efori, iloti, agoghé. <b>Atene</b>: dall'aristocrazia alla democrazia con Dracone, Solone, Pisistrato, Clistene (508 a.C.).</li>
<li>Olimpiadi dal 776 a.C.; oracolo di Delfi; lingua e dèi comuni.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Polis", d: "Città-stato greca, comunità autonoma di cittadini." },
    { t: "Acropoli", d: "Parte alta e fortificata della polis con i templi." },
    { t: "Agorà", d: "Piazza centrale della polis, luogo di mercato e di assemblea." },
    { t: "Magna Grecia", d: "Le colonie greche dell'Italia meridionale." },
    { t: "Ilota", d: "Servo dello Stato spartano." },
    { t: "Eforo", d: "Magistrato spartano che controllava i re." },
    { t: "Agoghé", d: "Educazione militare dei giovani spartani." },
    { t: "Ecclesia", d: "Assemblea dei cittadini ateniesi." },
    { t: "Ostracismo", d: "Esilio di dieci anni votato dall'assemblea." },
    { t: "Meteco", d: "Straniero residente ad Atene, senza diritti politici." },
    { t: "Tiranno", d: "Chi prende il potere con la forza, fuori dalle regole." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Perché la Grecia non si unificò in un solo Stato?", options: ["Per il territorio frammentato tra monti e isole", "Perché mancava l'acqua", "Perché non aveva dèi"], answer: 0, explain: "Il territorio favorì comunità autonome." },
      { type: "mc", q: "Chi decifrò la Lineare B?", options: ["Michael Ventris", "Howard Carter", "Champollion"], answer: 0, explain: "Nel 1952; scoprì che era greco antico." },
      { type: "tf", q: "Una colonia greca era sottomessa alla madrepatria come una provincia.", answer: false, explain: "Era una polis indipendente, legata alla metropoli da rapporti religiosi e affettivi." },
      { type: "text", q: "Come si chiama la parte alta e fortificata di una polis con i templi?", answer: ["acropoli", "l'acropoli"], explain: "L'acropoli." },
      { type: "mc", q: "Quale città greca fondò Siracusa (733 a.C.)?", options: ["Corinto", "Sparta", "Atene"], answer: 0, explain: "Coloni di Corinto." },
      { type: "mc", q: "Quale riforma di Clistene creò la base della democrazia?", options: ["Dieci tribù miste e Bulè dei 500", "Abolizione degli schiavi", "Tirannide popolare"], answer: 0, explain: "Superò le divisioni tra famiglie nobili." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Prime Olimpiadi", "Dracone", "Solone", "Pisistrato tiranno", "Clistene"], explain: "776, 621, 594, 561, 508 a.C." },
      { type: "mc", q: "Chi erano gli efori a Sparta?", options: ["Cinque magistrati eletti che sorvegliavano i re", "Sacerdoti dell'oracolo", "Guerrieri scelti"], answer: 0, explain: "Controllavano i re e guidavano la politica." },
      { type: "num", q: "In che anno a.C. si tennero, secondo la tradizione, le prime Olimpiadi?", answer: 776, tol: 0, explain: "776 a.C." },
      { type: "tf", q: "Ad Atene le donne e gli schiavi partecipavano all'assemblea.", answer: false, explain: "Solo i maschi adulti cittadini votavano." },
      { type: "mc", q: "Perché Sparta aveva un'organizzazione così militarizzata?", options: ["Per controllare un gran numero di iloti", "Per conquistare l'Asia", "Per difendersi dai Romani"], answer: 0, explain: "Pochi Spartiati dovevano dominare molti iloti." }
    ]
  }
});
