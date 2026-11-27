TOPIC('it', {
  id: "l3-spa-edad-media",
  title: "Il Medioevo spagnolo",
  intro: "Prima di Cervantes e del Siglo de Oro c'è un lungo Medioevo in cui la Spagna è un <b>crocevia di tre culture</b>: cristiana, islamica ed ebraica. In questo mondo di frontiera nascono lo spagnolo letterario, l'epica del <b>Cantar de mio Cid</b>, i versi dei chierici, la prosa di Alfonso X e le ballate anonime del <b>romancero</b>. In questa lezione impari a leggere i testi più antichi (con le loro forme arcaiche), a collocarli nella storia della Reconquista e a riconoscere i generi: <i>¡Bienvenidos a la Edad Media española!</i> ⚔️📜",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Il contesto: una penisola, tre culture",
      html: `<p>Nel <b>711</b> truppe arabo-berbere attraversano lo stretto di Gibilterra e, dopo la battaglia del <i>Guadalete</i>, sconfiggono il regno visigoto. In pochi anni quasi tutta la penisola iberica diventa <b>al-Ándalus</b>. Al nord sopravvivono piccoli nuclei cristiani (Asturie, poi León, Castilla, Navarra, Aragón, Cataluña) da cui parte la <b>Reconquista</b>, un processo lento (con guerre, ma anche alleanze e scambi) che si conclude nel <b>1492</b> con la presa di Granada.</p>
<p>Dal punto di vista culturale la Spagna medievale è unica in Europa:</p>
<ul>
<li><b>cristiani</b>: parlano le lingue romanze (castigliano, catalano, galiziano-portoghese) e usano il latino per la Chiesa e il diritto;</li>
<li><b>musulmani</b>: la lingua colta è l'arabo; Córdoba, Siviglia e Granada sono centri di scienza, medicina e filosofia;</li>
<li><b>ebrei</b> (<i>sefardíes</i>, da <i>Sefarad</i>, nome ebraico della Spagna): medici, traduttori, poeti, spesso mediatori fra i due mondi.</li>
</ul>
<p>Da questo incontro derivano centinaia di parole spagnole di origine araba, spesso con l'articolo <i>al-</i> incorporato: <i>aceite</i> (olio), <i>azúcar</i> (zucchero), <i>almohada</i> (cuscino), <i>alcalde</i> (sindaco), <i>ojalá</i> (da «wa shá llah», «se Dio vuole»). Tutte parole che hai già incontrato in lezioni precedenti, e che ora vedi nella loro storia.</p>`
    },
    {
      type: "3d",
      title: "Spazio e tempo: la Reconquista",
      scene: "spacetime",
      options: {
        lat: [35.5, 44],
        lon: [-10, 4],
        years: [700, 1500],
        places: [
          { lat: 40.4, lon: -3.7, label: "Madrid" },
          { lat: 37.4, lon: -6.0, label: "Sevilla" },
          { lat: 41.7, lon: -2.5, label: "Castilla" }
        ],
        events: [
          { id: "e711", lat: 36.6, lon: -6.0, year: 711, label: "Guadalete", html: "Sconfitta dei Visigoti: inizia la dominazione islamica di al-Ándalus." },
          { id: "e1085", lat: 39.86, lon: -4.02, year: 1085, label: "Toledo cristiana", html: "Alfonso VI di León e Castilla conquista Toledo, antica capitale visigota e grande centro di cultura araba.", causes: ["e711"] },
          { id: "e1094", lat: 39.47, lon: -0.38, year: 1094, label: "Valencia del Cid", html: "Rodrigo Díaz de Vivar, il Cid, conquista Valencia e la governa fino alla morte (1099).", causes: ["e1085"] },
          { id: "e1212", lat: 38.35, lon: -3.6, year: 1212, label: "Las Navas de Tolosa", html: "Grande vittoria dei regni cristiani sugli Almohadi: apre la via alla conquista dell'Andalusia.", causes: ["e1085"] },
          { id: "e1492", lat: 37.18, lon: -3.6, year: 1492, label: "Caduta di Granada", html: "I Re Cattolici, Isabella di Castilla e Ferdinando d'Aragón, conquistano Granada, ultimo regno musulmano (nazarí).", causes: ["e1212"] }
        ]
      },
      caption: "Ruota la mappa: l'altezza è il tempo. Tocca gli eventi e segui le frecce delle cause."
    },
    {
      type: "text",
      title: "2. Le prime tracce dello spagnolo scritto",
      html: `<p>Il castigliano nasce dal <b>latino volgare</b> parlato nel nord della penisola. Le prime tracce scritte sono le <b>Glosas Emilianenses</b> e <b>Silenses</b> (X-XI secolo), note a margine in manoscritti latini dei monasteri di San Millán de la Cogolla e di Silos: il copista annota a margine la parola più comprensibile per chi non capiva bene il latino.</p>
<p>Un'altra tradizione molto antica sono le <b>jarchas</b> (XI secolo): brevi strofe finali di poemi arabi o ebraici (<i>muwashshahat</i>), scritte in <b>mozarabico</b>, il romanzo parlato dai cristiani sotto dominazione islamica. Sono fra le più antiche poesie in lingua romanza d'Europa e hanno quasi sempre voce femminile: una ragazza che si lamenta per l'amato lontano.</p>
<p>Ma è solo nel XIII secolo che il castigliano diventa lingua letteraria e di cultura, grazie a due fattori:</p>
<ul>
<li>l'attività dei <b>clérigos</b> (chierici colti) e dei monasteri;</li>
<li>la politica linguistica di <b>Alfonso X el Sabio</b> (re di Castilla e León dal 1252 al 1284), che a Toledo promuove traduzioni dall'arabo e dal latino e fa scrivere le opere di storia, diritto e astronomia <b>in castigliano</b> invece che in latino.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Mester de juglaría e mester de clerecía",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Due «mesteres» (mestieri) poetici del Medioevo</text>
<rect x="20" y="42" width="270" height="208" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="155" y="70" font-size="17" text-anchor="middle" fill="#92400e" font-weight="bold">Mester de juglaría</text>
<text x="34" y="100" font-size="14" fill="#1e293b">Autori: anonimi, i juglares</text>
<text x="34" y="124" font-size="14" fill="#1e293b">Pubblico: popolo (piazze, corti)</text>
<text x="34" y="148" font-size="14" fill="#1e293b">Trasmissione: orale, cantata</text>
<text x="34" y="172" font-size="14" fill="#1e293b">Versi: irregolari, assonanti</text>
<text x="34" y="196" font-size="14" fill="#1e293b">Temi: gesta di eroi (epica)</text>
<text x="34" y="226" font-size="14" fill="#92400e" font-weight="bold">Es.: Cantar de mio Cid</text>
<rect x="310" y="42" width="270" height="208" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="445" y="70" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Mester de clerecía</text>
<text x="324" y="100" font-size="14" fill="#1e293b">Autori: noti, chierici colti</text>
<text x="324" y="124" font-size="14" fill="#1e293b">Pubblico: lettori / ascoltatori</text>
<text x="324" y="148" font-size="14" fill="#1e293b">Trasmissione: scritta</text>
<text x="324" y="172" font-size="14" fill="#1e293b">Versi: 14 sillabe, rima piena</text>
<text x="324" y="196" font-size="14" fill="#1e293b">Temi: religiosi, morali, saggi</text>
<text x="324" y="226" font-size="14" fill="#1e3a8a" font-weight="bold">Es.: Milagros (Berceo)</text>
<text x="300" y="282" font-size="14" text-anchor="middle" fill="#475569">Il «mester» è il mestiere: due modi di fare poesia, popolare e colto.</text>
</svg>`,
      caption: "Due grandi correnti poetiche medievali: la poesia cantata dai giullari e quella scritta dai chierici."
    },
    {
      type: "text",
      title: "3. El Cantar de mio Cid",
      html: `<p>È il più importante <b>poema epico castigliano</b>, composto intorno al <b>1200</b>. Si è conservato in un unico manoscritto (copiato da un certo <i>Per Abbat</i>, nel 1207 secondo la data del colophon), di circa <b>3700 versi</b> (il numero esatto dipende dall'edizione) mancante di alcune parti.</p>
<p><b>Il protagonista</b> è una persona storica: <b>Rodrigo Díaz de Vivar</b> (c. 1043-1099), nobile di Burgos al servizio dei re di Castilla. Il nome <i>Cid</i> viene dall'arabo <i>sayyid</i> («signore»); l'epiteto <i>Campeador</i> indica il «combattente di battaglie campali». Nel poema il Cid è un eroe generoso e leale al suo re, ma anche un padre di famiglia attento all'onore.</p>
<p><b>Struttura</b>: tre <i>cantares</i>.</p>
<ol>
<li><b>Cantar del destierro</b> (esilio): il re <b>Alfonso VI</b>, ingannato dai nemici del Cid, lo esilia; il Cid parte da Burgos con i suoi vassalli e si guadagna da vivere con le armi. Lascia moglie e figlie al monastero di Cardeña.</li>
<li><b>Cantar de las bodas</b> (nozze): conquista Valencia, si riconcilia con il re e le figlie <b>Elvira e Sol</b> si sposano con gli <i>Infantes de Carrión</i>, nobili vanitosi e codardi.</li>
<li><b>Cantar de la afrenta de Corpes</b>: gli Infantes, umiliati per la loro viltà, maltrattano le mogli e le abbandonano nel bosco di Corpes. Il Cid chiede giustizia in tribunale e dopo un duello (<i>lid</i>) i suoi uomini vincono e l'onore è riparato. Le figlie si risposano con principi di Navarra e Aragón.</li>
</ol>
<p><b>Un verso famoso</b>, detto di Rodrigo che cammina in esilio mentre nessuno osa ospitarlo:</p>
<blockquote><i>¡Dios, qué buen vassallo, si oviesse buen señor!</i></blockquote>
<p>(«Dio, che buon vassallo, se avesse un buon signore!»). Si vede qui l'ideale dell'epoca: il valore dell'eroe si misura nella <b>fedeltà</b> e nel rapporto con il re.</p>
<p><b>Lingua e stile</b>: versi di lunghezza irregolare (in genere 14-16 sillabe) divisi da una pausa (cesura) in due emistichi, con <b>rima assonante</b> (rimano solo le vocali dall'ultima vocale accentata in poi); frequenti <i>epítetos épicos</i> («el que en buen hora nasció»), formule fisse per facilitare la memoria dei cantori e il realismo di numeri, nomi e luoghi veri. Il Cid del poema è molto meno «mitico» di Orlando: non ha poteri soprannaturali, vive di bottini e di ingegno.</p>`
    },
    {
      type: "decision",
      title: "Sei il Cid: esiliato dal re, cosa fai?",
      html: `<p>Siamo intorno al <b>1081</b>. Rodrigo Díaz de Vivar è stato mandato in esilio da re Alfonso VI. Ha con sé poche decine di fedeli, nessuna terra, la sua famiglia da proteggere e un re che non lo vuole più vedere. Il regno è in una fase di frammentazione: i regni musulmani delle <i>taifas</i> sono divisi e si fanno la guerra tra loro.</p>`,
      question: "Tu cosa avresti scelto?",
      options: [
        { label: "Chiedere subito perdono e rimanere in attesa a Burgos", outcome: "Probabilmente il re non avrebbe ceduto subito: con la tua famiglia senza terra e senza reddito i vassalli ti avrebbero abbandonato, e un nobile senza guerra restava senza guadagno." },
        { label: "Mettere la spada al servizio di chi paga, anche di re musulmani, e conquistare un dominio proprio", outcome: "Rischioso ma realistico nell'epoca delle taifas: un capitano di ventura poteva diventare indispensabile. Se vince, può trattare con il suo re da una posizione di forza." },
        { label: "Emigrare e ricominciare lontano dalla penisola", outcome: "Avresti salvato la vita ma perduto onore, vassalli e l'idea stessa di essere un nobile: nel poema l'onore (la <i>honra</i>) è il bene più importante." }
      ],
      answer: 1,
      explain: "Il Cid storico servì a lungo il re musulmano di Zaragoza (la taifa dei Banu Hud) e poi, con un proprio esercito, conquistò Valencia nel 1094, governandola come signore indipendente fino alla morte. Il poema trasforma questa vicenda in un racconto di <b>onore riconquistato</b>: l'eroe non si ribella al re, ma lo serve a distanza fino al perdono, inviandogli parte del bottino."
    },
    {
      type: "example",
      title: "Leggere il castigliano antico",
      html: `<p>Provi a leggere i primi versi del poema (manca il foglio iniziale, per questo il testo comincia a metà scena):</p>
<p><i>De los sos ojos tan fuertemientre llorando,<br>
tornava la cabeça i estávalos catando.</i></p>
<p>Traduzione: «Dai suoi occhi piangendo forte, voltava la testa e stava a guardarli (le case abbandonate)».</p>
<table>
<tr><th>Forma antica</th><th>Spagnolo moderno</th><th>Spiegazione</th></tr>
<tr><td>sos ojos</td><td>sus ojos</td><td>possessivo antico <i>so/sos</i></td></tr>
<tr><td>fuertemientre</td><td>fuertemente</td><td>suffisso <i>-mente</i> con dittongo antico</td></tr>
<tr><td>tornava</td><td>tornaba</td><td>-ava invece di -aba; la «v» era la «u»</td></tr>
<tr><td>i</td><td>allí</td><td>avverbio di luogo antico (come il francese <i>y</i>)</td></tr>
<tr><td>estávalos catando</td><td>los estaba mirando</td><td>pronome <b>dopo</b> il verbo; <i>catar</i> = mirare</td></tr>
</table>
<p>Dal testo si capisce che la grafia non è ancora standardizzata (<i>vassallo / vasallo</i>, <i>oviesse / hubiese</i>): le norme moderne fissate dalla Real Academia arriveranno solo nel Settecento.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: epica e contesto",
      questions: [
        { type: "mc", q: "Che cosa significa «Cid» in origine?", options: ["Cavaliere", "Signore (dall'arabo sayyid)", "Coraggioso"], answer: 1, explain: "Deriva dall'arabo sayyid, «signore»." },
        { type: "tf", q: "Il Cantar de mio Cid è un poema in versi con rima assonante e di lunghezza irregolare.", answer: true, explain: "È tipico del mester de juglaría." },
        { type: "mc", q: "Chi sono gli Infantes de Carrión?", options: ["I fratelli del Cid", "I generi del Cid che lo tradiscono", "I re musulmani di Valencia"], answer: 1, explain: "Sposano Elvira e Sol, poi le abbandonano nel bosco di Corpes." },
        { type: "mc", q: "In che anno inizia la dominazione islamica della penisola?", options: ["711", "1085", "1492"], answer: 0, explain: "711, con la sconfitta visigota al Guadalete." }
      ]
    },
    {
      type: "text",
      title: "4. Dal Cid ai chierici: Gonzalo de Berceo",
      html: `<p>Nel XIII secolo accanto alla poesia dei giullari compare la <b>poesia dotta</b> dei chierici (<b>mester de clerecía</b>). Il suo grande rappresentante è <b>Gonzalo de Berceo</b> (c. 1196 - c. 1264), monaco del monastero di San Millán de la Cogolla, in La Rioja, il primo poeta castigliano di cui conosciamo il nome.</p>
<p>Scrive in <b>cuaderna vía</b>: strofe di <b>quattro versi alessandrini</b> (14 sillabe, divisi in due emistichi di 7) con <b>rima consonante</b> unica (tutti e quattro i versi rimano allo stesso modo). Il suo capolavoro è <b>Milagros de Nuestra Señora</b>, venticinque racconti di miracoli della Vergine, scritti in lingua semplice perché il popolo capisse: lo stesso autore dichiara di scrivere «en román paladino, en qual suele el pueblo fablar con so vezino» (cioè in una lingua comune, come quella con cui si parla con il vicino).</p>
<p>Berceo è importante anche per una ragione storica: usa il castigliano come lingua di cultura già prima di Alfonso X, in un ambito (quello religioso) che prima apparteneva solo al latino.</p>
<p><b>Altri nomi</b> del mester de clerecía: l'anonimo <i>Libro de Alexandre</i> (sull'eroe macedone) e il <i>Libro de Apolonio</i>.</p>`
    },
    {
      type: "text",
      title: "5. Alfonso X el Sabio e la prosa castigliana",
      html: `<p><b>Alfonso X</b> (1221-1284), detto «el Sabio», non fu solo un re ma un organizzatore di cultura. Intorno a lui lavorarono, a <b>Toledo</b>, traduttori cristiani, musulmani ed ebrei (la cosiddetta <i>Escuela de Traductores</i>): trasferivano in latino e in castigliano testi arabi di astronomia, medicina e filosofia, che arrivarono così in tutta Europa.</p>
<p>Sotto la sua direzione furono scritte in castigliano:</p>
<ul>
<li><b>Las Siete Partidas</b>: grande codice di leggi;</li>
<li><b>Estoria de España</b> e <b>General Estoria</b>: storie della Spagna e del mondo;</li>
<li><b>Libros del saber de astronomía</b> e le <i>Tablas alfonsíes</i>: tavole astronomiche usate in Europa per secoli;</li>
<li>le <b>Cantigas de Santa María</b>: oltre quattrocento canti in lingua galego-portoghese, con musica, in onore della Vergine (la lingua lirica dei re castigliani era il galego!).</li>
</ul>
<p>Con Alfonso la prosa castigliana ottiene regole di costruzione e un lessico scientifico: molte parole astratte oggi comuni (<i>cantidad, causa, materia, sustancia</i>) entrano proprio allora, dal latino.</p>`
    },
    {
      type: "text",
      title: "6. Il Trecento: Don Juan Manuel e Juan Ruiz",
      html: `<p>Nel XIV secolo la letteratura si fa più ricca di generi e di voci individuali.</p>
<p><b>Don Juan Manuel</b> (1282-1348), nipote di Alfonso X, nobile e scrittore, firma il <b>Libro de los enxiemplos del Conde Lucanor et de Patronio</b> (<i>El conde Lucanor</i>, 1335). È una raccolta di <b>51 racconti</b> di tipo esemplare: il conte Lucanor chiede un consiglio al fedele consigliere Patronio, che risponde con un <i>exemplo</i> (una storia) seguito da una <b>morale in versi</b>. Esempio celebre: «L'inganno del re nudo» (<i>El rey vestido</i>, tre truffatori vendono un tessuto che solo i «veri figli» vedranno: da qui la storia di Andersen). Il libro ha una struttura fissa che lo rende un modello di prosa narrativa.</p>
<p><b>Juan Ruiz, Arcipreste de Hita</b> (c. 1283 - c. 1350) scrive il <b>Libro de buen amor</b> (versione del 1330, ampliata nel 1343): un'autobiografia fittizia in versi di un arciprete che racconta le sue avventure amorose, intrecciate con favole, parodie religiose, canti e un'esortazione al «buen amor» (l'amore di Dio) contro il «loco amor» (l'amore mondano). È un'opera complessa, ironica, ricca di registri: dal linguaggio sacro a quello popolare. Vi compare Trotaconventos, la mezzana, antenata della Celestina.</p>`
    },
    {
      type: "curiosity",
      title: "Il re nudo è nato in Spagna?",
      html: `<p>Il racconto dell'imperatore che cammina nudo credendo di indossare un vestito invisibile è noto grazie a <b>Hans Christian Andersen</b> (1837), ma Andersen lo prese da una raccolta spagnola. Era l'<i>exemplo XXXII</i> del <b>Conde Lucanor</b> di Don Juan Manuel (1335), a sua volta ispirato a una fonte più antica di origine orientale. Un esempio di come le storie viaggino da una cultura all'altra, esattamente come le parole di origine araba.</p>`
    },
    {
      type: "text",
      title: "7. Il romancero",
      html: `<p>Il <b>romancero</b> è una raccolta di <i>romances</i>, <b>ballate anonime</b> trasmesse oralmente dal XIV-XV secolo (poi raccolte a stampa nel Cinquecento). Un <i>romance</i> è una serie di versi <b>ottosillabi</b> in cui <b>rimano in assonanza solo i versi pari</b> (gli altri restano liberi). Molti nascono da frammenti dell'epica (il Cid, i Sette Infanti di Lara) o da episodi di frontiera con i musulmani; altri da storie francesi (Carlomagno e i Dodici Pari) o da fatti di cronaca.</p>
<p>Esempi celebri:</p>
<ul>
<li><b>Romance del rey moro que perdió Alhama</b> («Paseábase el rey moro por la ciudad de Granada»): il lamento del re di Granada alla notizia della perdita di Alhama (1482);</li>
<li><b>Romance del conde Arnaldos</b> («¡Quién hubiera tal ventura sobre las aguas del mar, como hubo el conde Arnaldos la mañana de San Juan!»): misterioso, con un marinaio il cui canto ferma il mare;</li>
<li><b>Romance del prisionero</b> («Que por mayo era, por mayo, cuando hace la calor»): un prigioniero che non conosce più il giorno dalla notte.</li>
</ul>
<p>I romances hanno un linguaggio <b>diretto e senza spiegazioni</b>: cominciano <i>in medias res</i>, spesso con un dialogo, e finiscono lasciando aperta la storia. Per questo i poeti moderni li amarono: <b>Federico García Lorca</b> scrisse nel 1928 il <i>Romancero gitano</i>, in cui riprende la forma antica per raccontare un mondo nuovo.</p>`
    },
    {
      type: "example",
      title: "Esempio: riconoscere un romance",
      html: `<p>Leggi l'inizio del romance dell'Alhama:</p>
<blockquote><i>Paseábase el rey moro<br>
por la ciudad de Granada,<br>
desde la puerta de Elvira<br>
hasta la de Vivarrambla.</i></blockquote>
<p><b>Metro</b>: versi di otto sillabe (<i>Pa-se-á-ba-se el rey mo-ro</i>: con sinalefa <i>se el</i> si arriva a 8). <b>Rima</b>: i versi pari terminano in <i>Granada / Vivarrambla</i>: le vocali sono <b>a-a</b> (gra<u>na</u>da → a-a; vi<u>ra</u>mbla → a-a); i versi dispari (<i>moro, Elvira</i>) non rimano. <b>Contenuto</b>: l'inizio è diretto, senza introduzione: siamo subito in scena con un personaggio che cammina. Questa è la firma del romance.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per ricordare i generi medievali",
      intro: "Se faticavi a distinguere epica, clerecía e romances, prova una di queste strade.",
      tabs: [
        {
          label: "🎤 Chi canta?",
          html: `<p>Pensa a <b>chi</b> produce il testo. <b>Juglar</b> (giullare): canta nelle piazze e a corte, non scrive; è il mondo del <i>Cantar de mio Cid</i>. <b>Clérigo</b>: monaco o prete, scrive a tavolino per un pubblico che legge o ascolta in chiesa; è il mondo di Berceo. <b>Popolo</b>: tramanda a memoria le ballate che diventano <i>romances</i>. Dietro ogni genere c'è una persona diversa, con un pubblico e un obiettivo diversi.</p>`
        },
        {
          label: "📏 Il metro",
          html: `<p>Riconosci il genere dal <b>numero di sillabe</b> dei versi. <b>Epica</b>: versi irregolari, di 14-16 sillabe circa, assonanti. <b>Clerecía</b>: alessandrini di 14 sillabe, in strofe di quattro, <b>rima consonante</b>, perfettamente regolari. <b>Romance</b>: ottosillabi con assonanza nei pari. Se conti 8 sillabe e senti la stessa vocale ogni due versi, sei davanti a un romance.</p>`
        },
        {
          label: "🎨 Disegno: la linea del tempo",
          html: `<p>Metti sulla linea del tempo: <b>XI sec.</b> jarchas e glosas → <b>c. 1200</b> Cantar de mio Cid → <b>XIII sec.</b> Berceo e Alfonso X → <b>XIV sec.</b> Juan Manuel e Juan Ruiz → <b>XV sec.</b> romancero e Jorge Manrique (1476) → <b>1499</b> La Celestina → <b>1492</b> fine della Reconquista. Ripeti la sequenza a voce fino a saperla senza guardare.</p>`
        }
      ]
    },
    {
      type: "widget",
      title: "Linea del tempo del Medioevo spagnolo",
      widget: "timeline",
      options: {
        unit: "anni",
        events: [
          { year: 711, label: "Battaglia del Guadalete", icon: "⚔️" },
          { year: 1085, label: "Alfonso VI conquista Toledo", icon: "🏰" },
          { year: 1094, label: "Il Cid conquista Valencia", icon: "🛡️" },
          { year: 1207, label: "Data del manoscritto del Cantar de mio Cid (colophon)", icon: "📜" },
          { year: 1252, label: "Inizia il regno di Alfonso X", icon: "👑" },
          { year: 1335, label: "El conde Lucanor", icon: "📖" },
          { year: 1476, label: "Coplas di Jorge Manrique (circa)", icon: "✒️" },
          { year: 1492, label: "Caduta di Granada", icon: "🏁" }
        ]
      },
      caption: "Otto date da sapere: usale per collocare ogni testo."
    },
    {
      type: "text",
      title: "8. Il Quattrocento: Jorge Manrique e La Celestina",
      html: `<p>Alla fine del Medioevo due opere preparano il Rinascimento.</p>
<p><b>Jorge Manrique</b> (c. 1440-1479), poeta e soldato, compone dopo la morte del padre, don Rodrigo, le <b>Coplas por la muerte de su padre</b> (c. 1476). Sono 40 strofe (<i>coplas de pie quebrado</i>: due ottosillabi, un verso di quattro sillabe) sul tema della <b>fugacità della vita</b> e della fama che sopravvive alla morte. Il passo più celebre:</p>
<blockquote><i>Nuestras vidas son los ríos<br>
que van a dar en la mar,<br>
que es el morir;<br>
allí van los señoríos<br>
derechos a se acabar<br>
y consumir.</i></blockquote>
<p>L'immagine è semplice e universale: la vita è come un fiume che finisce nel mare della morte, dove si confondono ricchi e poveri. Il tema classico del <i>ubi sunt?</i> (dove sono i grandi di un tempo?) e del <i>tempus fugit</i> si fonde con la fede cristiana.</p>
<p><b>La Celestina</b> (<i>Comedia de Calisto y Melibea</i>, 1499; <i>Tragicomedia</i> nelle edizioni successive) è opera di <b>Fernando de Rojas</b>, in forma di dialogo (ma troppo lunga per essere recitata). Racconta l'amore fra Calisto e Melibea, favorito dalla mezzana <b>Celestina</b>, vecchia, astuta e avida. Finisce in tragedia per tutti. È un'opera di confine: ha un'impronta medievale (la morale della punizione), ma anche tratti rinascimentali (il realismo dei personaggi e l'importanza dei servitori). Per qualità e fama è considerata, dopo il Don Quijote, la più grande opera della letteratura spagnola.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa del Medioevo spagnolo",
      nodes: [
        { id: "frontera", label: "Una società di frontiera", x: 50, y: 10, color: "#2563eb", html: "Cristiani, musulmani ed ebrei convivono e combattono per otto secoli.", why: "La Reconquista (711-1492) non fu una guerra continua: ci furono lunghi periodi di tregua, alleanze e scambi culturali. Per questo la lingua e la letteratura spagnola assorbirono parole, forme poetiche e temi dal mondo arabo ed ebraico." },
        { id: "epica", label: "Epica: Cantar de mio Cid", x: 15, y: 42, color: "#dc2626", html: "Poema anonimo di c. 3700 versi (c. 1200), in rima assonante.", why: "Nasce dalla tradizione orale dei giullari, che cantavano le imprese dei guerrieri di frontiera. L'eroe è un nobile minore che conquista onore e terre con le sue forze: è lo specchio di una società in guerra." },
        { id: "clerecia", label: "Clerecía: Berceo", x: 50, y: 42, color: "#16a34a", html: "Cuaderna vía: strofe di quattro alessandrini monorimi.", why: "I chierici imitano i modelli latini e francesi (il poema di Alessandro), con un metro regolare per distinguersi dai giullari. Scrivono in volgare per educare il popolo che non capisce il latino." },
        { id: "prosa", label: "Prosa: Alfonso X, Juan Manuel", x: 85, y: 42, color: "#f59e0b", html: "Leggi, storia, scienza e racconti in castigliano.", why: "Il re volle fare del castigliano la lingua del regno e della scienza: tradurre dall'arabo e dal latino a Toledo significò creare un lessico dotto che prima non esisteva." },
        { id: "romancero", label: "Romancero", x: 30, y: 80, color: "#a855f7", html: "Ballate anonime in ottosillabi con assonanza nei versi pari.", why: "Sono frammenti dell'epica che il popolo continuò a cantare; si conservano perché i poeti del Cinquecento le raccolsero e perché i primi stampatori (inizio XVI secolo) le diffusero." },
        { id: "fine", label: "Manrique e Celestina", x: 72, y: 80, color: "#0ea5e9", html: "Coplas (c. 1476) e Comedia de Calisto y Melibea (1499).", why: "Siamo alla vigilia del Rinascimento: il Medioevo non scompare di colpo, ma i temi (la morte, il denaro, l'amore) sono già visti con occhi più realistici e personali." }
      ],
      edges: [
        ["frontera", "epica", "ispira"],
        ["frontera", "prosa", "traduzioni"],
        ["epica", "romancero", "frammenti"],
        ["clerecia", "prosa", "volgare colto"],
        ["romancero", "fine", "tradizione popolare"],
        ["prosa", "fine", "verso il Rinascimento"]
      ]
    },
    {
      type: "widget",
      title: "Collega autore e opera",
      widget: "match",
      options: { pairs: [["Gonzalo de Berceo", "Milagros de Nuestra Señora"], ["Don Juan Manuel", "El conde Lucanor"], ["Juan Ruiz", "Libro de buen amor"], ["Jorge Manrique", "Coplas por la muerte de su padre"], ["Fernando de Rojas", "La Celestina"], ["Alfonso X", "Las Siete Partidas"]] },
      caption: "Sei autori medievali, sei opere: abbinali."
    },
    {
      type: "curiosity",
      title: "Cavallo e spade: Babieca, Tizona e Colada",
      html: `<p>Nella tradizione epica il cavallo del Cid si chiama <b>Babieca</b>, e le sue spade <b>Colada</b> e <b>Tizona</b>. Il Cid storico morì a Valencia nel <b>1099</b>; una leggenda posteriore aggiunge che il suo corpo, messo in sella a Babieca, fece fuggire i nemici che assediavano Valencia: il poema è più sobrio e si chiude con la sua morte, avvenuta nel giorno di Pentecoste. Sulla tomba di Burgos (cattedrale) riposano ancora oggi, secondo la tradizione, il Cid e sua moglie <b>doña Jimena</b>.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>711-1492: Reconquista; in Spagna convivono cristiani, musulmani ed ebrei.</li>
<li><b>Cantar de mio Cid</b> (c. 1200): poema epico anonimo, versi irregolari con rima assonante, tre cantares (destierro, bodas, afrenta de Corpes).</li>
<li><b>Mester de juglaría</b> (popolare, orale) e <b>mester de clerecía</b> (dotto, scritto, cuaderna vía di 14 sillabe).</li>
<li><b>Berceo</b>: Milagros de Nuestra Señora. <b>Alfonso X</b>: prosa castigliana e Escuela de Traductores di Toledo.</li>
<li><b>Juan Manuel</b>: El conde Lucanor (1335). <b>Juan Ruiz</b>: Libro de buen amor.</li>
<li><b>Romancero</b>: ballate anonime in ottosillabi con assonanza nei versi pari.</li>
<li><b>Manrique</b>: Coplas (c. 1476). <b>La Celestina</b> (1499): ponte verso il Rinascimento.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: dal Trecento al Quattrocento",
      questions: [
        { type: "mc", q: "Qual è la forma metrica tipica del romance?", options: ["Ottosillabi con assonanza nei versi pari", "Strofe di quattro alessandrini monorimi", "Sonetti"], answer: 0, explain: "Il romance è una serie di ottosillabi con assonanza nei versi pari." },
        { type: "tf", q: "Il conde Lucanor è una raccolta di racconti esemplari.", answer: true, explain: "51 exemplos, ciascuno con una morale in versi." },
        { type: "text", q: "Come si chiama la strofa di Berceo, formata da quattro alessandrini monorimi?", answer: ["cuaderna vía", "cuaderna via"], explain: "È la cuaderna vía." },
        { type: "mc", q: "Con chi si conclude l'opera «La Celestina»?", options: ["Con una tragedia", "Con un matrimonio felice", "Con una guerra"], answer: 0, explain: "Calisto, Melibea e quasi tutti i personaggi muoiono: è una tragicommedia moralizzante." }
      ]
    }
  ],
  glossary: [
    { t: "Reconquista", d: "Processo di riconquista cristiana della penisola iberica (711-1492)." },
    { t: "Juglar", d: "Giullare: poeta-cantore che recitava poemi epici a memoria." },
    { t: "Mester de clerecía", d: "Poesia colta dei chierici (XIII sec.), in cuaderna vía." },
    { t: "Cuaderna vía", d: "Strofa di 4 versi alessandrini (14 sillabe) con rima consonante unica." },
    { t: "Rima assonante", d: "Rima solo nelle vocali a partire dall'ultima vocale accentata (es. «ramas / montaña»)." },
    { t: "Romance", d: "Ballata in ottosillabi con assonanza nei versi pari." },
    { t: "Exemplo", d: "Breve racconto con intento morale, usato nelle raccolte medievali." },
    { t: "Mozarabico", d: "Romanzo parlato dai cristiani sotto dominazione islamica." },
    { t: "Sefardí", d: "Ebreo della penisola iberica (da Sefarad)." },
    { t: "Pie quebrado", d: "Verso corto (di quattro sillabe) nelle coplas di Manrique." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale fu l'ultimo regno musulmano della penisola, conquistato nel 1492?", options: ["Córdoba", "Granada", "Valencia"], answer: 1, explain: "Granada, regno nazarí, cadde nel 1492 per opera dei Re Cattolici." },
      { type: "mc", q: "Che cosa significa il titolo «Cantar de mio Cid» di per sé?", options: ["Canto del mio signore Cid", "Canto della battaglia di Valencia", "Canto dei re di Castilla"], answer: 0, explain: "«Mio Cid» è «il mio signore», dall'arabo sayyid." },
      { type: "tf", q: "Il Cantar de mio Cid è opera di un autore noto, Gonzalo de Berceo.", answer: false, explain: "È anonimo; Berceo è autore del Milagros de Nuestra Señora." },
      { type: "mc", q: "Dove operava la Escuela de Traductores promossa da Alfonso X?", options: ["Toledo", "Burgos", "Barcelona"], answer: 0, explain: "A Toledo si traducevano testi arabi in latino e in castigliano." },
      { type: "text", q: "Come si chiama il pubblico poeta-cantore che recitava i poemi epici?", answer: ["juglar", "el juglar", "giullare"], explain: "Il juglar (giullare)." },
      { type: "mc", q: "Qual è il tema delle Coplas de Jorge Manrique?", options: ["La brevità della vita e la morte", "La conquista di Valencia", "L'amore fra Calisto e Melibea"], answer: 0, explain: "Il fiume della vita che finisce nel mare della morte." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Battaglia del Guadalete (711)", "Toledo cristiana (1085)", "Las Navas de Tolosa (1212)", "Caduta di Granada (1492)"], explain: "711, 1085, 1212, 1492." },
      { type: "mc", q: "Nel Conde Lucanor il consigliere del conte si chiama:", options: ["Patronio", "Sancho", "Trotaconventos"], answer: 0, explain: "Patronio racconta gli exemplos." },
      { type: "tf", q: "Il «romance» ha rima consonante in tutti i versi.", answer: false, explain: "Ha assonanza solo nei versi pari; gli altri versi non rimano." },
      { type: "mc", q: "Quale di queste parole spagnole deriva dall'arabo?", options: ["azúcar", "mesa", "libro"], answer: 0, explain: "Azúcar viene dall'arabo as-sukkar." }
    ]
  }
});
