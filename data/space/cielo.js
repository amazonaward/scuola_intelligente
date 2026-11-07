/* Schede della sezione Spazio: stelle, nebulose e ammassi, galassie, buchi neri.
   Formato in FORMATO.md. Valori arrotondati (ESA/NASA/ESO, cataloghi Hipparcos e Gaia).
   Per le stelle lontane distanze e dimensioni sono incerte: si indica sempre "circa". */
window.SPACE_OBJECTS = (window.SPACE_OBJECTS || []).concat([
  /* ======================= STELLE ======================= */
  { id: 'sirio', cat: 'star', emoji: '✨', star: 'sirio', rs: 1.71, temp: 9940,
    name: ['Sirio', 'Sirius', 'Sirius', 'Сириус', 'Sirius', 'Sirius'], kind: 'Stella bianca di sequenza principale (A1V) + nana bianca',
    lead: 'La stella più brillante del cielo notturno, nella costellazione del Cane Maggiore.',
    facts: [['Distanza', '8,6 anni luce'], ['Tipo', 'A1V, bianca'], ['Temperatura', 'circa 9.940 K (≈ 9.670 °C)'], ['Raggio', '1,7 volte il Sole'], ['Luminosità', '25 volte il Sole'], ['Compagna', 'Sirio B, una nana bianca grande come la Terra']],
    html: '<p>Sirio è la stella più luminosa del cielo notturno. Il suo nome viene dal greco e significa <b>"ardente"</b>. In inverno la trovi seguendo verso sinistra in basso la cintura di Orione.</p><p>In realtà è una <b>stella doppia</b>: accanto a Sirio A gira <b>Sirio B</b>, una <b>nana bianca</b>, cioè il nucleo spento di una stella morta. È grande come la Terra ma pesa quanto il Sole: un cucchiaino del suo materiale peserebbe tonnellate!</p>',
    cur: ['Gli antichi Egizi aspettavano la comparsa di Sirio all\'alba: annunciava la piena del Nilo.', 'Le "giornate canicolari" d\'estate prendono il nome da Sirio, la "stella del cane".', 'Quando è bassa sull\'orizzonte scintilla di tanti colori.'],
    quiz: [
      { type: 'mc', q: 'In quale costellazione si trova Sirio?', options: ['Orsa Maggiore', 'Cane Maggiore', 'Leone'], answer: 1, explain: 'Sirio è la stella alfa del Cane Maggiore.' },
      { type: 'tf', q: 'Sirio è la stella più brillante del cielo notturno.', answer: true, explain: 'Ha magnitudine −1,46.' },
      { type: 'mc', q: 'Che cos\'è Sirio B?', options: ['Un pianeta', 'Una nana bianca', 'Una cometa'], answer: 1, explain: 'Il nucleo caldissimo e compatto di una stella che ha finito il combustibile.' }
    ] },
  { id: 'alfa-centauri', cat: 'star', emoji: '⭐', star: 'alfa-centauri', rs: 1.22, temp: 5790,
    name: ['Alfa Centauri', 'Alpha Centauri', 'Alpha du Centaure', 'Альфа Центавра', 'Alfa Centauri', 'Alpha Centauri'], kind: 'Sistema di tre stelle, il più vicino al Sole',
    lead: 'Il sistema stellare più vicino a noi: tre stelle a poco più di 4 anni luce.',
    facts: [['Distanza', '4,37 anni luce (A e B), 4,24 (Proxima)'], ['Alfa Centauri A', 'tipo G2V come il Sole, 1,2 volte più grande'], ['Alfa Centauri B', 'tipo K1V, arancione, un po\' più piccola del Sole'], ['Giro di A e B', 'circa 80 anni'], ['Visibilità', 'cielo australe, non si vede dall\'Italia']],
    html: '<p>A occhio nudo sembra una sola stella, la terza più brillante del cielo. Con un telescopio si vede che è formata da <b>due stelle gemelle del Sole</b>, A e B, che si girano intorno in circa 80 anni. Un po\' più lontano gira una terza piccola stella rossa: <b>Proxima</b>.</p><p>La sua luce, che vediamo oggi, è partita più di 4 anni fa. Con le astronavi di oggi ci vorrebbero decine di migliaia di anni per arrivarci!</p>',
    cur: ['Alfa Centauri si trova nella costellazione del Centauro, vicino alla Croce del Sud.', 'Insieme a Hadar fa da "puntatore" per trovare la Croce del Sud.', 'Da Alfa Centauri il nostro Sole si vedrebbe come una stella brillante nella costellazione di Cassiopea.'],
    quiz: [
      { type: 'num', q: 'Quante stelle formano il sistema di Alfa Centauri?', answer: 3, explain: 'Alfa Centauri A, B e Proxima.' },
      { type: 'tf', q: 'Alfa Centauri si vede benissimo dall\'Italia.', answer: false, explain: 'È nel cielo australe: è sempre sotto l\'orizzonte per chi vive in Italia.' },
      { type: 'mc', q: 'Quanto è lontana Alfa Centauri?', options: ['4,4 anni luce', '44 anni luce', '4.400 anni luce'], answer: 0, explain: 'Circa 4,37 anni luce.' }
    ] },
  { id: 'proxima', cat: 'star', emoji: '🔴', star: 'proxima', rs: 0.154, temp: 3040,
    name: ['Proxima Centauri', 'Proxima Centauri', 'Proxima du Centaure', 'Проксима Центавра', 'Proxima Centauri', 'Proxima Centauri'], kind: 'Nana rossa (M5.5V), la stella più vicina al Sole',
    lead: 'La stella più vicina a noi dopo il Sole… ma è troppo debole per vederla a occhio nudo.',
    facts: [['Distanza', '4,24 anni luce (40.000 miliardi di km)'], ['Tipo', 'M5.5V, nana rossa'], ['Temperatura', 'circa 3.040 K'], ['Raggio', '0,15 volte il Sole (poco più di Giove)'], ['Luminosità', 'meno di 1/500 del Sole'], ['Pianeti', 'almeno 2, tra cui Proxima b (2016)']],
    html: '<p>Proxima vuol dire <b>"la più vicina"</b>. È una <b>nana rossa</b>: una stella piccola, fredda e poco luminosa, il tipo di stella più comune nella nostra galassia.</p><p>Intorno a lei gira <b>Proxima b</b>, un pianeta poco più grande della Terra nella <b>zona abitabile</b>, dove l\'acqua potrebbe essere liquida. Però Proxima lancia spesso brillamenti fortissimi, che renderebbero difficile la vita.</p>',
    cur: ['Le nane rosse "bruciano" lentissimo: Proxima vivrà migliaia di miliardi di anni.', 'Proxima gira intorno ad Alfa Centauri A e B in circa 550.000 anni.', 'Un raggio di luce ci mette 4 anni e 3 mesi ad arrivare da Proxima.'],
    quiz: [
      { type: 'mc', q: 'Che tipo di stella è Proxima?', options: ['Gigante blu', 'Nana rossa', 'Supergigante'], answer: 1, explain: 'Piccola, fredda e poco luminosa.' },
      { type: 'tf', q: 'Proxima si vede a occhio nudo.', answer: false, explain: 'È di magnitudine 11: serve un telescopio.' },
      { type: 'text', q: 'Come si chiama il pianeta di Proxima nella zona abitabile?', answer: ['proxima b'], explain: 'Proxima b, scoperto nel 2016.' }
    ] },
  { id: 'barnard', cat: 'star', emoji: '🔴', star: 'barnard', rs: 0.19, temp: 3200,
    name: ['Stella di Barnard', "Barnard's Star", 'Étoile de Barnard', 'Звезда Барнарда', 'Steaua lui Barnard', 'Barnards Stern'], kind: 'Nana rossa (M4V)',
    lead: 'La stella singola più vicina al Sole e quella che si sposta più veloce nel cielo.',
    facts: [['Distanza', '5,96 anni luce'], ['Tipo', 'M4V, nana rossa'], ['Temperatura', 'circa 3.200 K'], ['Raggio', '0,19 volte il Sole'], ['Moto nel cielo', '10,3 secondi d\'arco all\'anno (il record)'], ['Età', 'forse 10 miliardi di anni']],
    html: '<p>Nel 1916 l\'astronomo <b>Edward Barnard</b> si accorse che questa debole stella si muoveva nel cielo più di ogni altra: in 180 anni percorre una distanza pari alla larghezza della Luna piena. Succede perché è vicina e viaggia veloce.</p><p>È molto più vecchia del Sole. Tra circa 10.000 anni sarà a meno di 4 anni luce: per un po\' diventerà la stella più vicina a noi!</p>',
    cur: ['Si trova nella costellazione dell\'Ofiuco.', 'Per decenni si è creduto che avesse dei pianeti, poi si è scoperto che era un errore… ma nel 2024–2025 sono stati trovati davvero piccoli pianeti rocciosi.', 'Non si vede a occhio nudo: ha magnitudine 9,5.'],
    quiz: [
      { type: 'mc', q: 'Per cosa è famosa la Stella di Barnard?', options: ['È la più luminosa', 'Si sposta nel cielo più veloce di tutte', 'È la più grande'], answer: 1, explain: 'Ha il moto proprio più grande conosciuto.' },
      { type: 'tf', q: 'La Stella di Barnard è più vecchia del Sole.', answer: true, explain: 'Ha forse 10 miliardi di anni, il Sole 4,6.' },
      { type: 'mc', q: 'Che tipo di stella è?', options: ['Nana rossa', 'Gigante gialla', 'Nana bianca'], answer: 0, explain: 'Una nana rossa di tipo M4.' }
    ] },
  { id: 'betelgeuse', cat: 'star', emoji: '🔴', star: 'betelgeuse', rs: 760, temp: 3600,
    name: ['Betelgeuse', 'Betelgeuse', 'Bételgeuse', 'Бетельгейзе', 'Betelgeuse', 'Betelgeuse'], kind: 'Supergigante rossa (M1-2 Ia)',
    lead: 'Una stella così gigante che, al posto del Sole, arriverebbe oltre l\'orbita di Marte.',
    facts: [['Distanza', 'circa 550 anni luce (incerta, tra 500 e 700)'], ['Tipo', 'M1-2 Ia, supergigante rossa'], ['Temperatura', 'circa 3.600 K'], ['Raggio', 'circa 760 volte il Sole'], ['Luminosità', 'circa 100.000 volte il Sole'], ['Massa', 'circa 15–20 volte il Sole'], ['Costellazione', 'Orione (la spalla)']],
    html: '<p>Betelgeuse è la stella rossa della <b>spalla di Orione</b>. È una <b>supergigante rossa</b>: una stella vecchia che si è gonfiata enormemente. Se fosse al posto del Sole, inghiottirebbe Mercurio, Venere, la Terra e Marte!</p><p>Tra il 2019 e il 2020 la sua luce si è abbassata moltissimo (il <b>"Grande Affievolimento"</b>): era una nube di polvere espulsa dalla stella. Betelgeuse finirà la sua vita esplodendo come <b>supernova</b>, forse entro 100.000 anni: per settimane sarà visibile anche di giorno!</p>',
    cur: ['Il suo nome viene dall\'arabo e significa più o meno "la mano del gigante".', 'È così grande che il telescopio Hubble ne ha fotografato il disco, non solo un puntino.', 'Quando esploderà non sarà pericolosa per noi: è troppo lontana.'],
    quiz: [
      { type: 'mc', q: 'Se Betelgeuse fosse al posto del Sole, fin dove arriverebbe?', options: ['All\'orbita di Mercurio', 'Oltre l\'orbita di Marte', 'Solo fino alla Luna'], answer: 1, explain: 'Il suo raggio è circa 760 volte quello del Sole.' },
      { type: 'mc', q: 'Come finirà Betelgeuse?', options: ['Come nana rossa', 'Esplodendo come supernova', 'Diventando un pianeta'], answer: 1, explain: 'Le stelle così grandi esplodono come supernove.' },
      { type: 'tf', q: 'Betelgeuse è nella costellazione di Orione.', answer: true, explain: 'È la sua spalla, la stella rossa in alto a sinistra.' }
    ] },
  { id: 'rigel', cat: 'star', emoji: '💎', star: 'rigel', rs: 79, temp: 12100,
    name: ['Rigel', 'Rigel', 'Rigel', 'Ригель', 'Rigel', 'Rigel'], kind: 'Supergigante blu (B8 Ia)',
    lead: 'Il piede luminoso di Orione: una supergigante blu-bianca decine di migliaia di volte più luminosa del Sole.',
    facts: [['Distanza', 'circa 860 anni luce'], ['Tipo', 'B8 Ia, supergigante blu'], ['Temperatura', 'circa 12.100 K'], ['Raggio', 'circa 79 volte il Sole'], ['Luminosità', 'circa 100.000 volte il Sole'], ['Costellazione', 'Orione (il piede)']],
    html: '<p>Rigel è la stella più brillante di Orione e la settima del cielo. È una <b>supergigante blu</b>: molto più calda del Sole, per questo la sua luce è bianco-azzurra.</p><p>Il colore delle stelle dice la loro <b>temperatura</b>: le rosse come Betelgeuse sono le più "fredde", le blu come Rigel le più calde. Guarda Orione in una notte d\'inverno: vedrai entrambi i colori!</p>',
    cur: ['Il nome viene dall\'arabo "rijl", che significa "piede".', 'Rigel ha almeno tre stelle compagne più piccole.', 'Anche Rigel, un giorno, potrebbe esplodere come supernova.'],
    quiz: [
      { type: 'mc', q: 'Di che colore è Rigel?', options: ['Rossa', 'Bianco-azzurra', 'Verde'], answer: 1, explain: 'È una supergigante blu, molto calda.' },
      { type: 'tf', q: 'Le stelle blu sono più calde di quelle rosse.', answer: true, explain: 'Il colore indica la temperatura: blu = più calda.' },
      { type: 'mc', q: 'Quale parte di Orione è Rigel?', options: ['La spalla', 'Il piede', 'La spada'], answer: 1, explain: 'Rigel significa proprio "piede".' }
    ] },
  { id: 'vega', cat: 'star', emoji: '💠', star: 'vega', rs: 2.5, temp: 9600,
    name: ['Vega', 'Vega', 'Véga', 'Вега', 'Vega', 'Vega'], kind: 'Stella bianca di sequenza principale (A0V)',
    lead: 'La stella azzurrina delle sere d\'estate: tra 12.000 anni sarà la nostra stella polare.',
    facts: [['Distanza', '25 anni luce'], ['Tipo', 'A0V, bianco-azzurra'], ['Temperatura', 'circa 9.600 K'], ['Raggio', 'circa 2,5 volte il Sole'], ['Luminosità', 'circa 40 volte il Sole'], ['Costellazione', 'Lira']],
    html: '<p>Vega è la stella più brillante della costellazione della <b>Lira</b> e d\'estate brilla quasi sopra la nostra testa. Insieme a <b>Deneb</b> e <b>Altair</b> forma il <b>Triangolo estivo</b>.</p><p>L\'asse della Terra si muove lentamente come una trottola (si chiama <b>precessione</b>) e fa un giro in circa 26.000 anni. Per questo verso l\'anno 13.700 sarà Vega a indicare il nord, al posto della Stella Polare.</p><p>Gira velocissima su se stessa: è un po\' schiacciata ai poli.</p>',
    cur: ['Vega è stata la prima stella, dopo il Sole, a essere fotografata (nel 1850).', 'Intorno a Vega c\'è un disco di polvere, forse dove si formano pianeti.', 'Per gli astronomi Vega è il "punto zero" della scala delle magnitudini.'],
    quiz: [
      { type: 'mc', q: 'Con quali stelle Vega forma il Triangolo estivo?', options: ['Sirio e Rigel', 'Deneb e Altair', 'Polare e Arturo'], answer: 1, explain: 'Vega, Deneb e Altair: il Triangolo estivo.' },
      { type: 'tf', q: 'Tra migliaia di anni Vega diventerà la stella polare.', answer: true, explain: 'A causa della precessione dell\'asse terrestre.' },
      { type: 'mc', q: 'In che costellazione si trova Vega?', options: ['Lira', 'Cigno', 'Aquila'], answer: 0, explain: 'È la stella alfa della Lira.' }
    ] },
  { id: 'polare', cat: 'star', emoji: '🧭', star: 'polare', rs: 46, temp: 6000,
    name: ['Stella Polare', 'Polaris', 'Étoile polaire', 'Полярная звезда', 'Steaua Polară', 'Polarstern'], kind: 'Supergigante gialla variabile (F7 Ib)',
    lead: 'Non è la più brillante, ma è la più utile: indica sempre il nord.',
    facts: [['Distanza', 'circa 430 anni luce'], ['Tipo', 'F7 Ib, supergigante gialla (variabile cefeide)'], ['Temperatura', 'circa 6.000 K'], ['Raggio', 'circa 46 volte il Sole'], ['Luminosità', 'circa 1.300 volte il Sole'], ['Costellazione', 'Orsa Minore (la punta del timone)']],
    html: '<p>La Stella Polare si trova quasi esattamente sopra il <b>Polo Nord</b> della Terra. Mentre la Terra gira, tutte le stelle sembrano ruotare intorno a lei, mentre lei resta (quasi) ferma. Per questo da sempre i viaggiatori la usano per trovare il <b>nord</b>.</p><p>Per trovarla: cerca il <b>Grande Carro</b> (Orsa Maggiore), prendi le due stelle in fondo al carro (Merak e Dubhe) e prolunga la linea circa 5 volte.</p><p>La sua altezza sull\'orizzonte è uguale alla tua <b>latitudine</b>: da Torino è alta circa 45°.</p>',
    cur: ['È solo circa la 48ª stella più brillante del cielo.', 'In realtà è un sistema di tre stelle.', 'Dall\'emisfero sud non si vede mai.'],
    quiz: [
      { type: 'mc', q: 'Perché la Stella Polare è importante?', options: ['È la più luminosa', 'Indica il nord', 'È la più vicina'], answer: 1, explain: 'Si trova quasi sopra il Polo Nord.' },
      { type: 'tf', q: 'La Stella Polare è la stella più brillante del cielo.', answer: false, explain: 'È circa la 48ª: la più brillante è Sirio.' },
      { type: 'mc', q: 'Da Torino (latitudine 45°) quanto è alta la Polare sull\'orizzonte?', options: ['Circa 10°', 'Circa 45°', 'Circa 90°'], answer: 1, explain: 'L\'altezza della Polare è uguale alla latitudine.' }
    ] },
  { id: 'aldebaran', cat: 'star', emoji: '🟠', star: 'aldebaran', rs: 44, temp: 3900,
    name: ['Aldebaran', 'Aldebaran', 'Aldébaran', 'Альдебаран', 'Aldebaran', 'Aldebaran'], kind: 'Gigante arancione (K5 III)',
    lead: 'L\'occhio rosso-arancio del Toro, che "segue" le Pleiadi nel cielo.',
    facts: [['Distanza', 'circa 65 anni luce'], ['Tipo', 'K5 III, gigante arancione'], ['Temperatura', 'circa 3.900 K'], ['Raggio', 'circa 44 volte il Sole'], ['Luminosità', 'circa 440 volte il Sole'], ['Costellazione', 'Toro']],
    html: '<p>Aldebaran è l\'occhio della costellazione del <b>Toro</b>. Il suo nome in arabo vuol dire <b>"colui che segue"</b>, perché sorge dopo l\'ammasso delle <b>Pleiadi</b> e sembra inseguirle.</p><p>Sembra far parte dell\'ammasso delle <b>Iadi</b> (la "V" del muso del Toro), ma in realtà è a metà strada: le Iadi sono a circa 150 anni luce.</p><p>È una <b>gigante</b>: ha finito l\'idrogeno nel centro e si è gonfiata. Anche il Sole un giorno diventerà così.</p>',
    cur: ['La sonda Pioneer 10 viaggia in direzione di Aldebaran: arriverà nei suoi dintorni tra circa 2 milioni di anni.', 'A volte la Luna passa davanti ad Aldebaran e la nasconde: si chiama occultazione.', 'Aldebaran è circa la 14ª stella più brillante del cielo.'],
    quiz: [
      { type: 'mc', q: 'In che costellazione si trova Aldebaran?', options: ['Toro', 'Leone', 'Scorpione'], answer: 0, explain: 'È l\'occhio del Toro.' },
      { type: 'mc', q: 'Cosa significa il suo nome?', options: ['La più bella', 'Colui che segue', 'Il re'], answer: 1, explain: 'Sembra seguire le Pleiadi nel cielo.' },
      { type: 'tf', q: 'Aldebaran fa davvero parte dell\'ammasso delle Iadi.', answer: false, explain: 'È più vicina a noi: si trova solo sulla stessa linea di vista.' }
    ] },
  { id: 'antares', cat: 'star', emoji: '🔴', star: 'antares', rs: 680, temp: 3600,
    name: ['Antares', 'Antares', 'Antarès', 'Антарес', 'Antares', 'Antares'], kind: 'Supergigante rossa (M1.5 Iab)',
    lead: 'Il cuore rosso dello Scorpione, la "rivale di Marte".',
    facts: [['Distanza', 'circa 550 anni luce'], ['Tipo', 'M1.5 Iab, supergigante rossa'], ['Temperatura', 'circa 3.600 K'], ['Raggio', 'circa 680 volte il Sole'], ['Luminosità', 'circa 75.000 volte il Sole'], ['Costellazione', 'Scorpione']],
    html: '<p>Antares è il <b>cuore dello Scorpione</b>, una costellazione bassa sull\'orizzonte sud nelle sere d\'estate. Il nome significa <b>"rivale di Marte"</b> (anti-Ares), perché ha lo stesso colore rosso del pianeta.</p><p>Come Betelgeuse è una <b>supergigante rossa</b>: al posto del Sole arriverebbe oltre l\'orbita di Marte. Ha una piccola compagna blu, Antares B.</p>',
    cur: ['Antares a volte viene "visitata" da Marte nel cielo: i due rivali rossi si avvicinano.', 'Finirà la sua vita come supernova.', 'Antares si trova vicino all\'eclittica, la strada del Sole e dei pianeti nel cielo.'],
    quiz: [
      { type: 'mc', q: 'Cosa significa "Antares"?', options: ['Stella del nord', 'Rivale di Marte', 'Occhio del drago'], answer: 1, explain: 'Anti-Ares: Ares è il nome greco di Marte.' },
      { type: 'mc', q: 'Di quale costellazione è il cuore?', options: ['Scorpione', 'Orione', 'Cigno'], answer: 0, explain: 'È la stella alfa dello Scorpione.' },
      { type: 'tf', q: 'Antares è una nana rossa.', answer: false, explain: 'È una supergigante rossa, enorme.' }
    ] },
  { id: 'deneb', cat: 'star', emoji: '🤍', star: 'deneb', rs: 200, temp: 8500,
    name: ['Deneb', 'Deneb', 'Deneb', 'Денеб', 'Deneb', 'Deneb'], kind: 'Supergigante bianca (A2 Ia)',
    lead: 'Una delle stelle più luminose che conosciamo: la coda del Cigno.',
    facts: [['Distanza', 'circa 2.600 anni luce (molto incerta)'], ['Tipo', 'A2 Ia, supergigante bianca'], ['Temperatura', 'circa 8.500 K'], ['Raggio', 'circa 200 volte il Sole'], ['Luminosità', 'circa 200.000 volte il Sole'], ['Costellazione', 'Cigno']],
    html: '<p>Deneb, che in arabo vuol dire <b>"coda"</b>, è la coda del <b>Cigno</b> (chiamato anche Croce del Nord). È uno dei tre vertici del <b>Triangolo estivo</b>.</p><p>Ci sembra brillante come Vega, ma è <b>100 volte più lontana</b>! Vuol dire che emette una quantità di luce enorme: è una delle stelle più luminose della nostra galassia visibili a occhio nudo.</p><p>La luce che vediamo stasera è partita quando a Roma c\'erano ancora i re, circa 2.600 anni fa.</p>',
    cur: ['Se Deneb fosse vicina come Sirio, brillerebbe quasi come la Luna piena.', 'Tra circa 8.000 anni sarà vicina al polo nord celeste.', 'Il Cigno vola proprio lungo la Via Lattea.'],
    quiz: [
      { type: 'mc', q: 'Cosa significa "Deneb"?', options: ['Coda', 'Testa', 'Ala'], answer: 0, explain: 'È la coda del Cigno.' },
      { type: 'tf', q: 'Deneb è molto più lontana di Vega, ma ci appare luminosa quasi uguale.', answer: true, explain: 'Perché emette moltissima più luce.' },
      { type: 'mc', q: 'Quale figura formano Deneb, Vega e Altair?', options: ['Il Grande Carro', 'Il Triangolo estivo', 'La Croce del Sud'], answer: 1, explain: 'Il Triangolo estivo, ben visibile d\'estate.' }
    ] },
  { id: 'arturo', cat: 'star', emoji: '🟠', star: 'arturo', rs: 25, temp: 4290,
    name: ['Arturo', 'Arcturus', 'Arcturus', 'Арктур', 'Arcturus', 'Arktur'], kind: 'Gigante arancione (K1.5 III)',
    lead: 'La stella più brillante dell\'emisfero celeste nord, color arancio.',
    facts: [['Distanza', '36,7 anni luce'], ['Tipo', 'K1.5 III, gigante arancione'], ['Temperatura', 'circa 4.290 K'], ['Raggio', 'circa 25 volte il Sole'], ['Luminosità', 'circa 170 volte il Sole'], ['Costellazione', 'Boote']],
    html: '<p>Arturo è la stella più brillante del <b>Boote</b> (il Bovaro) e del cielo a nord dell\'equatore celeste. Per trovarla, segui la curva del timone del Grande Carro: "<b>segui l\'arco fino ad Arturo</b>".</p><p>Il nome significa <b>"guardiano dell\'Orsa"</b>, perché sembra seguire l\'Orsa Maggiore nel cielo. È una gigante arancione, più vecchia del Sole.</p>',
    cur: ['Nel 1933 la luce di Arturo, catturata da un telescopio, accese le luci dell\'Esposizione di Chicago: si pensava fosse partita durante l\'esposizione del 1893.', 'Arturo si muove velocemente rispetto alle stelle vicine.', 'Primavera è il periodo migliore per vederla alta in cielo la sera.'],
    quiz: [
      { type: 'mc', q: 'Come si trova Arturo?', options: ['Seguendo la curva del timone del Grande Carro', 'Seguendo la cintura di Orione', 'Guardando sotto la Croce del Sud'], answer: 0, explain: '"Segui l\'arco fino ad Arturo."' },
      { type: 'mc', q: 'Di che colore è Arturo?', options: ['Blu', 'Arancione', 'Verde'], answer: 1, explain: 'È una gigante arancione.' },
      { type: 'tf', q: 'Arturo è più vicina della stella Deneb.', answer: true, explain: '36,7 anni luce contro circa 2.600.' }
    ] },
  { id: 'canopo', cat: 'star', emoji: '🤍', star: 'canopo', rs: 71, temp: 7400,
    name: ['Canopo', 'Canopus', 'Canopus', 'Канопус', 'Canopus', 'Canopus'], kind: 'Gigante bianco-gialla (A9 II)',
    lead: 'La seconda stella più brillante del cielo, guida delle sonde spaziali.',
    facts: [['Distanza', 'circa 310 anni luce'], ['Tipo', 'A9 II, gigante luminosa'], ['Temperatura', 'circa 7.400 K'], ['Raggio', 'circa 71 volte il Sole'], ['Luminosità', 'circa 10.000 volte il Sole'], ['Costellazione', 'Carena']],
    html: '<p>Canopo è la seconda stella più brillante del cielo notturno, dopo Sirio. Si trova nella <b>Carena</b>, la chiglia dell\'antica nave Argo.</p><p>È così luminosa e lontana dall\'eclittica che molte <b>sonde spaziali</b> la usano come punto di riferimento per orientarsi, con dei sensori chiamati "star tracker".</p><p>Dall\'Italia è difficile vederla: dal sud della Sicilia si alza appena sopra l\'orizzonte.</p>',
    cur: ['Canopo prende il nome dal timoniere della nave di Menelao, nella mitologia greca.', 'In Australia e in Sud America è alta nel cielo d\'estate (cioè nel nostro inverno).', 'Da Torino non sorge mai.'],
    quiz: [
      { type: 'mc', q: 'Canopo è la … stella più brillante del cielo notturno.', options: ['prima', 'seconda', 'decima'], answer: 1, explain: 'Dopo Sirio.' },
      { type: 'tf', q: 'Canopo si vede alta nel cielo di Torino.', answer: false, explain: 'Da Torino non sorge mai: è troppo a sud.' },
      { type: 'mc', q: 'Per cosa la usano le sonde spaziali?', options: ['Per fare rifornimento', 'Per orientarsi', 'Per comunicare'], answer: 1, explain: 'È un ottimo punto di riferimento.' }
    ] },
  { id: 'altair', cat: 'star', emoji: '⚪', star: 'altair', rs: 1.8, temp: 7700,
    name: ['Altair', 'Altair', 'Altaïr', 'Альтаир', 'Altair', 'Altair'], kind: 'Stella bianca di sequenza principale (A7V)',
    lead: 'Una stella vicina che gira su se stessa in meno di 9 ore ed è tutta schiacciata.',
    facts: [['Distanza', '16,7 anni luce'], ['Tipo', 'A7V, bianca'], ['Temperatura', 'circa 7.700 K (più calda ai poli)'], ['Raggio', 'circa 1,8 volte il Sole (2 all\'equatore)'], ['Rotazione', 'circa 9 ore (il Sole impiega circa 27 giorni)'], ['Costellazione', 'Aquila']],
    html: '<p>Altair è la stella più brillante dell\'<b>Aquila</b> ed è uno dei vertici del <b>Triangolo estivo</b>. È una delle stelle brillanti più vicine a noi.</p><p>Gira così veloce che è <b>schiacciata</b>: il suo diametro all\'equatore è circa il 20% più grande di quello tra i poli. Nel 2007 gli astronomi sono riusciti a fare una "foto" della sua superficie unendo più telescopi.</p>',
    cur: ['In Giappone Altair e Vega sono due innamorati separati dalla Via Lattea: la festa di Tanabata li celebra il 7 luglio.', 'Il nome viene dall\'arabo "an-nasr at-tair", "l\'aquila che vola".', 'Ai poli di Altair fa più caldo che all\'equatore.'],
    quiz: [
      { type: 'tf', q: 'Altair è schiacciata perché gira molto velocemente.', answer: true, explain: 'Ruota in circa 9 ore.' },
      { type: 'mc', q: 'In che costellazione si trova Altair?', options: ['Aquila', 'Leone', 'Toro'], answer: 0, explain: 'È la stella alfa dell\'Aquila.' },
      { type: 'mc', q: 'Altair, Vega e Deneb formano…', options: ['il Triangolo estivo', 'la Croce del Sud', 'il Grande Carro'], answer: 0, explain: 'Il Triangolo estivo.' }
    ] },
  { id: 'trappist1', cat: 'star', emoji: '🔴', star: 'trappist1', rs: 0.12, temp: 2570,
    name: ['TRAPPIST-1', 'TRAPPIST-1', 'TRAPPIST-1', 'TRAPPIST-1', 'TRAPPIST-1', 'TRAPPIST-1'], kind: 'Nana rossa ultrafredda (M8V) con 7 pianeti',
    lead: 'Una stellina poco più grande di Giove con ben sette pianeti grandi come la Terra.',
    facts: [['Distanza', 'circa 40 anni luce'], ['Tipo', 'M8V, nana rossa ultrafredda'], ['Temperatura', 'circa 2.570 K'], ['Raggio', '0,12 volte il Sole (poco più di Giove)'], ['Pianeti', '7, rocciosi, da b a h'], ['Costellazione', 'Acquario']],
    html: '<p>Nel 2017 gli astronomi hanno annunciato che intorno a questa piccola stella girano <b>sette pianeti rocciosi</b>, simili per grandezza alla Terra. Sono tutti vicinissimi alla stella: l\'anno del pianeta più lontano dura meno di 19 giorni!</p><p>Tre o quattro sono nella <b>zona abitabile</b>. Il telescopio spaziale <b>James Webb</b> li sta studiando per capire se hanno un\'atmosfera.</p><p>Il nome viene dal piccolo telescopio belga TRAPPIST, in Cile, che ha scoperto i primi pianeti nel 2016.</p>',
    cur: ['Dalla superficie di un pianeta di TRAPPIST-1 si vedrebbero gli altri grandi come la Luna nel cielo.', 'L\'intero sistema starebbe dentro l\'orbita di Mercurio.', 'La stella vivrà migliaia di miliardi di anni.'],
    quiz: [
      { type: 'num', q: 'Quanti pianeti ha TRAPPIST-1?', answer: 7, explain: 'Sette pianeti rocciosi.' },
      { type: 'tf', q: 'TRAPPIST-1 è più grande del Sole.', answer: false, explain: 'È poco più grande di Giove.' },
      { type: 'mc', q: 'Quale telescopio studia le atmosfere dei suoi pianeti?', options: ['James Webb', 'Galileo', 'Hubble del 1900'], answer: 0, explain: 'Il telescopio spaziale James Webb.' }
    ] },

  /* ======================= NEBULOSE E AMMASSI ======================= */
  { id: 'orione-nebulosa', cat: 'nebula', emoji: '🌸', body: 'neb-orion', dly: 24, distLy: 1344, sky: ['05 35 17', '-05 23 28'],
    name: ['Nebulosa di Orione (M42)', 'Orion Nebula (M42)', 'Nébuleuse d\'Orion (M42)', 'Туманность Ориона (M42)', 'Nebuloasa Orion (M42)', 'Orionnebel (M42)'], kind: 'Nebulosa a emissione, nursery di stelle',
    lead: 'Una culla di stelle che puoi vedere a occhio nudo nella spada di Orione.',
    facts: [['Distanza', 'circa 1.340 anni luce'], ['Diametro', 'circa 24 anni luce'], ['Stelle giovani', 'circa 2.000, con il "Trapezio" al centro'], ['Età delle stelle', 'meno di 1–2 milioni di anni'], ['Dove guardare', 'sotto la cintura di Orione, nella "spada"']],
    html: '<p>Una <b>nebulosa</b> è una nube enorme di <b>gas e polvere</b>. Nella Nebulosa di Orione il gas si sta raccogliendo e sta formando <b>nuove stelle</b>: è come una nursery cosmica!</p><p>Al centro ci sono quattro stelle giovani e caldissime, il <b>Trapezio</b>, che illuminano il gas facendolo brillare di rosso e verde-azzurro. Il telescopio Hubble ha visto anche dischi di polvere intorno alle stelline: lì potrebbero nascere pianeti.</p>',
    cur: ['Anche il Sole è nato 4,6 miliardi di anni fa in una nebulosa come questa.', 'Con un binocolo si vede come una macchiolina nebbiosa.', 'È la regione di formazione stellare grande più vicina a noi.'],
    quiz: [
      { type: 'mc', q: 'Che cos\'è una nebulosa?', options: ['Una stella morta', 'Una nube di gas e polvere', 'Un pianeta gassoso'], answer: 1, explain: 'Una nube di gas e polvere nello spazio.' },
      { type: 'tf', q: 'Nella Nebulosa di Orione nascono nuove stelle.', answer: true, explain: 'È una vera nursery di stelle.' },
      { type: 'mc', q: 'Come si chiamano le quattro stelle al suo centro?', options: ['Il Trapezio', 'Il Carro', 'La Croce'], answer: 0, explain: 'Il Trapezio, che illumina tutta la nebulosa.' }
    ] },
  { id: 'granchio', cat: 'nebula', emoji: '🦀', body: 'neb-crab', dly: 11, distLy: 6500, sky: ['05 34 32', '+22 00 52'],
    name: ['Nebulosa del Granchio (M1)', 'Crab Nebula (M1)', 'Nébuleuse du Crabe (M1)', 'Крабовидная туманность (M1)', 'Nebuloasa Crabului (M1)', 'Krebsnebel (M1)'], kind: 'Resto di supernova con pulsar',
    lead: 'Ciò che resta di una stella esplosa nel 1054, vista dagli astronomi cinesi.',
    facts: [['Distanza', 'circa 6.500 anni luce'], ['Diametro', 'circa 11 anni luce, e si allarga ancora'], ['Esplosione vista', 'anno 1054'], ['Al centro', 'una pulsar che gira 30 volte al secondo'], ['Costellazione', 'Toro']],
    html: '<p>Nel <b>1054</b> gli astronomi cinesi videro apparire una "stella ospite" così luminosa da essere visibile <b>di giorno</b> per 23 giorni. Era una <b>supernova</b>: l\'esplosione di una stella gigante.</p><p>Oggi al suo posto c\'è la Nebulosa del Granchio, una nube di filamenti che si allarga a 1.500 km al secondo. Al centro resta una <b>stella di neutroni</b> grande come una città, che gira <b>30 volte al secondo</b> e lancia fasci di radiazione come un faro: è una <b>pulsar</b>.</p>',
    cur: ['È il primo oggetto del catalogo di Charles Messier (M1), del 1758.', 'Un cucchiaino di stella di neutroni peserebbe quanto una montagna.', 'Il nome "Granchio" viene da un disegno del 1844 di Lord Rosse.'],
    quiz: [
      { type: 'num', q: 'In che anno fu vista l\'esplosione che ha creato la Nebulosa del Granchio?', answer: 1054, explain: 'Nel 1054, dagli astronomi cinesi.' },
      { type: 'mc', q: 'Cosa c\'è al centro della nebulosa?', options: ['Un pianeta', 'Una pulsar', 'Una cometa'], answer: 1, explain: 'Una stella di neutroni che gira 30 volte al secondo.' },
      { type: 'tf', q: 'La Nebulosa del Granchio è il resto di una supernova.', answer: true, explain: 'È ciò che resta di una stella esplosa.' }
    ] },
  { id: 'pilastri', cat: 'nebula', emoji: '🏛️', body: 'neb-pillars', dly: 5, distLy: 6500, sky: ['18 18 48', '-13 49 00'],
    name: ['Pilastri della Creazione', 'Pillars of Creation', 'Piliers de la création', 'Столпы Творения', 'Stâlpii Creației', 'Säulen der Schöpfung'], kind: 'Colonne di gas nella Nebulosa Aquila (M16)',
    lead: 'Tre torri di gas e polvere alte anni luce, dove nascono nuove stelle.',
    facts: [['Distanza', 'circa 6.500 anni luce'], ['Altezza della colonna più alta', 'circa 4–5 anni luce'], ['Nebulosa', 'Aquila (M16), costellazione del Serpente'], ['Foto famose', 'Hubble 1995 e 2014, James Webb 2022']],
    html: '<p>I <b>Pilastri della Creazione</b> sono tre colonne di gas freddo e polvere dentro la <b>Nebulosa Aquila</b>. La foto del telescopio Hubble del 1995 è una delle immagini più famose della storia.</p><p>Dentro i pilastri il gas si condensa e forma <b>nuove stelle</b>. Ma le stelle giovani e caldissime vicine li stanno lentamente "erodendo" con la loro luce, come il vento scava le rocce.</p><p>Nel 2022 il telescopio <b>James Webb</b> li ha fotografati in infrarosso, vedendo attraverso la polvere tante stelle appena nate.</p>',
    cur: ['La colonna più alta è lunga circa 40.000 miliardi di km: dalla base alla cima ci metteresti 4–5 anni viaggiando alla velocità della luce.', 'Le "dita" in cima ai pilastri contengono stelle in formazione.', 'Il nome viene da una frase di un famoso discorso del 1857.'],
    quiz: [
      { type: 'mc', q: 'Dentro quale nebulosa si trovano i Pilastri della Creazione?', options: ['Nebulosa Aquila (M16)', 'Nebulosa del Granchio', 'Nebulosa di Orione'], answer: 0, explain: 'Nella Nebulosa Aquila, M16.' },
      { type: 'tf', q: 'Nei Pilastri della Creazione nascono nuove stelle.', answer: true, explain: 'Il gas si condensa e forma stelle.' },
      { type: 'mc', q: 'Quale telescopio li ha fotografati per primo nel 1995?', options: ['Hubble', 'James Webb', 'Galileo'], answer: 0, explain: 'Hubble, nel 1995. Webb nel 2022.' }
    ] },
  { id: 'anello', cat: 'nebula', emoji: '💍', body: 'neb-ring', dly: 1.3, distLy: 2300, sky: ['18 53 35', '+33 01 45'],
    name: ['Nebulosa ad Anello (M57)', 'Ring Nebula (M57)', 'Nébuleuse de la Lyre (M57)', 'Туманность Кольцо (M57)', 'Nebuloasa Inelară (M57)', 'Ringnebel (M57)'], kind: 'Nebulosa planetaria',
    lead: 'Un anello di gas soffiato via da una stella morente: il futuro del nostro Sole.',
    facts: [['Distanza', 'circa 2.300 anni luce'], ['Diametro', 'circa 1,3 anni luce'], ['Età', 'circa 4.000 anni'], ['Al centro', 'una nana bianca caldissima'], ['Costellazione', 'Lira, tra Sheliak e Sulafat']],
    html: '<p>Una <b>nebulosa planetaria</b> non ha niente a che fare con i pianeti: nel 1700 al telescopio sembravano dischetti come i pianeti, e il nome è rimasto.</p><p>Quando una stella come il Sole invecchia, si gonfia e poi <b>soffia via i suoi strati esterni</b>, che formano un guscio di gas colorato. Al centro rimane il nucleo, una <b>nana bianca</b>. Questo succederà anche al Sole, tra circa 5 miliardi di anni.</p>',
    cur: ['Si vede con un piccolo telescopio come una "ciambellina" grigia.', 'In realtà ha la forma di una botte o di un tubo, che noi vediamo dall\'alto.', 'I colori indicano gas diversi: azzurro per l\'ossigeno, rosso per idrogeno e azoto.'],
    quiz: [
      { type: 'mc', q: 'Cosa resta al centro di una nebulosa planetaria?', options: ['Un pianeta', 'Una nana bianca', 'Un buco nero'], answer: 1, explain: 'Il nucleo della stella diventa una nana bianca.' },
      { type: 'tf', q: 'Anche il Sole un giorno formerà una nebulosa planetaria.', answer: true, explain: 'Tra circa 5 miliardi di anni.' },
      { type: 'tf', q: 'Le nebulose planetarie sono fatte di pianeti.', answer: false, explain: 'Il nome è storico: sono gusci di gas.' }
    ] },
  { id: 'pleiadi', cat: 'nebula', emoji: '💫', body: 'pleiades', dly: 86, distLy: 444, sky: ['03 47 24', '+24 07 00'],
    name: ['Pleiadi (M45)', 'Pleiades (M45)', 'Pléiades (M45)', 'Плеяды (M45)', 'Pleiadele (M45)', 'Plejaden (M45)'], kind: 'Ammasso aperto di stelle giovani',
    lead: 'Le "Sette Sorelle": un gruppo di stelle azzurre e giovani nella costellazione del Toro.',
    facts: [['Distanza', 'circa 444 anni luce'], ['Stelle', 'più di 1.000; a occhio nudo se ne vedono 6–7'], ['Età', 'circa 100 milioni di anni'], ['Stella più brillante', 'Alcione'], ['Costellazione', 'Toro'], ['Diametro', 'circa 86 anni luce']],
    html: '<p>Le Pleiadi sono un <b>ammasso aperto</b>: un gruppo di stelle nate insieme dalla stessa nube di gas. Sono giovani (circa 100 milioni di anni, quando sulla Terra c\'erano i dinosauri!) e caldissime, per questo sono <b>azzurre</b>.</p><p>Nelle foto si vede una nebbiolina blu intorno alle stelle: è polvere che l\'ammasso sta attraversando e che riflette la loro luce.</p><p>Nella mitologia greca erano le sette figlie di Atlante e Pleione.</p>',
    cur: ['In Giappone le Pleiadi si chiamano Subaru: il logo della casa automobilistica è proprio l\'ammasso.', 'Molti popoli usavano le Pleiadi come calendario per seminare e raccogliere.', 'Prova a contarle: chi ha una vista molto buona ne vede più di 7!'],
    quiz: [
      { type: 'mc', q: 'Che cosa sono le Pleiadi?', options: ['Una galassia', 'Un ammasso di stelle', 'Una cometa'], answer: 1, explain: 'Un ammasso aperto di stelle giovani.' },
      { type: 'mc', q: 'Come si chiamano in Giappone?', options: ['Subaru', 'Toyota', 'Honda'], answer: 0, explain: 'Subaru: il logo dell\'auto mostra l\'ammasso.' },
      { type: 'tf', q: 'Le Pleiadi sono stelle molto vecchie e rosse.', answer: false, explain: 'Sono giovani, calde e azzurre.' }
    ] },

  /* ======================= GALASSIE ======================= */
  { id: 'via-lattea', cat: 'galaxy', emoji: '🌌', body: 'gal-mw', dly: 100000, lg: 'mw',
    name: ['Via Lattea', 'Milky Way', 'Voie lactée', 'Млечный Путь', 'Calea Lactee', 'Milchstraße'], kind: 'Galassia a spirale barrata, la nostra',
    lead: 'La nostra galassia: tra 100 e 400 miliardi di stelle, e una di queste è il Sole.',
    facts: [['Diametro', 'circa 100.000 anni luce'], ['Stelle', 'tra 100 e 400 miliardi'], ['Distanza del Sole dal centro', 'circa 26.000 anni luce'], ['Un giro del Sole intorno al centro', 'circa 230 milioni di anni'], ['Al centro', 'il buco nero Sagittarius A*'], ['Età', 'circa 13 miliardi di anni']],
    html: '<p>Quella striscia chiara che attraversa il cielo nelle notti buie, lontano dalle luci, è la <b>Via Lattea</b>: è la nostra galassia vista <b>dall\'interno</b>. Noi siamo dentro il disco, quindi lo vediamo come una fascia.</p><p>Vista da fuori sarebbe una grande <b>spirale barrata</b>: un nucleo allungato (la barra) con dei bracci che si avvolgono. Il Sole si trova in un piccolo braccio, il <b>Braccio di Orione</b>, a metà strada tra il centro e il bordo.</p><p>Galileo, nel 1610, fu il primo a vedere con il cannocchiale che la Via Lattea è fatta di innumerevoli stelle.</p>',
    cur: ['Il Sole viaggia intorno al centro della galassia a circa 230 km al secondo.', 'Dall\'ultimo giro completo del Sole, sulla Terra sono comparsi e scomparsi i dinosauri.', 'In greco "latte" si dice "gala": da qui la parola galassia!'],
    quiz: [
      { type: 'mc', q: 'Che forma ha la Via Lattea?', options: ['Ellittica', 'Spirale barrata', 'Irregolare'], answer: 1, explain: 'È una spirale con una barra centrale.' },
      { type: 'mc', q: 'In quale braccio si trova il Sole?', options: ['Braccio di Orione', 'Braccio del Cigno', 'Al centro'], answer: 0, explain: 'Nel piccolo Braccio di Orione.' },
      { type: 'tf', q: 'La striscia della Via Lattea nel cielo è la nostra galassia vista dall\'interno.', answer: true, explain: 'Siamo dentro il disco, che vediamo come una fascia.' }
    ] },
  { id: 'andromeda', cat: 'galaxy', emoji: '🌀', body: 'gal-m31', dly: 152000, distLy: 2500000, lg: 'm31', sky: ['00 42 44', '+41 16 09'],
    name: ['Galassia di Andromeda (M31)', 'Andromeda Galaxy (M31)', 'Galaxie d\'Andromède (M31)', 'Галактика Андромеды (M31)', 'Galaxia Andromeda (M31)', 'Andromedagalaxie (M31)'], kind: 'Galassia a spirale',
    lead: 'La grande galassia più vicina: la sua luce ha viaggiato 2,5 milioni di anni per arrivare ai tuoi occhi.',
    facts: [['Distanza', 'circa 2,5 milioni di anni luce'], ['Diametro', 'circa 150.000 anni luce'], ['Stelle', 'circa 1.000 miliardi'], ['Velocità', 'si avvicina a noi a circa 110 km/s'], ['Costellazione', 'Andromeda']],
    html: '<p>Andromeda è la <b>galassia grande più vicina</b> a noi ed è l\'oggetto più lontano che si può vedere facilmente a occhio nudo, come una macchiolina allungata in un cielo buio d\'autunno.</p><p>Fino al 1923 molti pensavano che fosse una nebulosa dentro la Via Lattea. Poi <b>Edwin Hubble</b> misurò la sua distanza e dimostrò che era un\'altra galassia: l\'Universo diventò di colpo enormemente più grande!</p><p>Andromeda e la Via Lattea si stanno avvicinando: tra circa 4–5 miliardi di anni potrebbero scontrarsi e fondersi (studi recenti dicono che non è sicuro).</p>',
    cur: ['Quando la luce che vedi stasera è partita da Andromeda, sulla Terra vivevano i primi esseri umani.', 'Ha almeno una dozzina di galassie satelliti, tra cui M32 e M110.', 'Anche se si scontrassero, le stelle non si urterebbero quasi mai: sono lontanissime tra loro.'],
    quiz: [
      { type: 'mc', q: 'Quanto è lontana Andromeda?', options: ['2,5 milioni di anni luce', '2.500 anni luce', '25 anni luce'], answer: 0, explain: 'Circa 2,5 milioni di anni luce.' },
      { type: 'mc', q: 'Chi dimostrò che Andromeda è un\'altra galassia?', options: ['Edwin Hubble', 'Galileo Galilei', 'Isaac Newton'], answer: 0, explain: 'Edwin Hubble, nel 1923.' },
      { type: 'tf', q: 'Andromeda si sta avvicinando alla Via Lattea.', answer: true, explain: 'A circa 110 km al secondo.' }
    ] },
  { id: 'triangolo', cat: 'galaxy', emoji: '🌀', body: 'gal-m33', dly: 60000, distLy: 2730000, lg: 'm33', sky: ['01 33 51', '+30 39 37'],
    name: ['Galassia del Triangolo (M33)', 'Triangulum Galaxy (M33)', 'Galaxie du Triangle (M33)', 'Галактика Треугольника (M33)', 'Galaxia Triunghiului (M33)', 'Dreiecksgalaxie (M33)'], kind: 'Galassia a spirale',
    lead: 'La terza galassia più grande del Gruppo Locale, una spirale vista quasi di fronte.',
    facts: [['Distanza', 'circa 2,7 milioni di anni luce'], ['Diametro', 'circa 60.000 anni luce'], ['Stelle', 'circa 40 miliardi'], ['Costellazione', 'Triangolo']],
    html: '<p>La Galassia del Triangolo è una spirale più piccola della nostra e la vediamo quasi <b>di fronte</b>, così si notano bene i suoi bracci pieni di nebulose rosa dove nascono stelle.</p><p>Con un cielo perfettamente buio, chi ha una vista eccellente riesce a vederla a occhio nudo: sarebbe l\'oggetto più lontano visibile senza strumenti.</p><p>Forse è una "compagna" di Andromeda e gira intorno a lei.</p>',
    cur: ['Contiene NGC 604, una delle più grandi nebulose conosciute: larga circa 1.500 anni luce.', 'Non ha un buco nero supermassiccio al centro (o, se c\'è, è piccolo).', 'Charles Messier la mise nel suo catalogo nel 1764.'],
    quiz: [
      { type: 'tf', q: 'La Galassia del Triangolo è più grande della Via Lattea.', answer: false, explain: 'È più piccola: circa 60.000 anni luce.' },
      { type: 'mc', q: 'Di quale gruppo di galassie fa parte?', options: ['Gruppo Locale', 'Ammasso della Vergine', 'Ammasso di Coma'], answer: 0, explain: 'Del Gruppo Locale, come la Via Lattea e Andromeda.' },
      { type: 'mc', q: 'Come la vediamo?', options: ['Di taglio', 'Quasi di fronte', 'Non si vede'], answer: 1, explain: 'Quasi di fronte: i bracci si vedono bene.' }
    ] },
  { id: 'grande-nube', cat: 'galaxy', emoji: '☁️', body: 'gal-lmc', dly: 32000, distLy: 160000, lg: 'lmc', sky: ['05 23 35', '-69 45 22'],
    name: ['Grande Nube di Magellano', 'Large Magellanic Cloud', 'Grand Nuage de Magellan', 'Большое Магелланово Облако', 'Norul Mare al lui Magellan', 'Große Magellansche Wolke'], kind: 'Galassia satellite della Via Lattea',
    lead: 'Una piccola galassia compagna della nostra, ben visibile nel cielo dell\'emisfero sud.',
    facts: [['Distanza', 'circa 160.000 anni luce'], ['Diametro', 'circa 32.000 anni luce'], ['Stelle', 'circa 30 miliardi'], ['Tipo', 'spirale di Magellano (irregolare con una barra)'], ['Visibile da', 'emisfero sud']],
    html: '<p>Dall\'emisfero sud, in una notte buia, si vedono due nuvolette chiare staccate dalla Via Lattea: sono le <b>Nubi di Magellano</b>, due piccole galassie che girano intorno alla nostra.</p><p>Prendono il nome da <b>Ferdinando Magellano</b>, perché furono descritte dai marinai della sua spedizione intorno al mondo (1519–1522), ma i popoli del sud le conoscevano da sempre.</p><p>Nel <b>1987</b> nella Grande Nube è esplosa una <b>supernova</b> (SN 1987A), la più vicina vista dai tempi dei telescopi.</p>',
    cur: ['Contiene la Nebulosa Tarantola, la regione di formazione stellare più attiva del Gruppo Locale.', 'Tra circa 2 miliardi di anni potrebbe scontrarsi con la Via Lattea.', 'Già nel 964 l\'astronomo persiano al-Sufi la descrisse.'],
    quiz: [
      { type: 'mc', q: 'Da chi prendono il nome le Nubi di Magellano?', options: ['Da un esploratore', 'Da un pianeta', 'Da un re'], answer: 0, explain: 'Dall\'esploratore Ferdinando Magellano.' },
      { type: 'num', q: 'In che anno è esplosa la supernova SN 1987A?', answer: 1987, explain: 'Nel 1987, nella Grande Nube di Magellano.' },
      { type: 'tf', q: 'La Grande Nube di Magellano gira intorno alla Via Lattea.', answer: true, explain: 'È una galassia satellite.' }
    ] },
  { id: 'piccola-nube', cat: 'galaxy', emoji: '☁️', body: 'gal-smc', dly: 19000, distLy: 200000, lg: 'smc', sky: ['00 52 44', '-72 49 43'],
    name: ['Piccola Nube di Magellano', 'Small Magellanic Cloud', 'Petit Nuage de Magellan', 'Малое Магелланово Облако', 'Norul Mic al lui Magellan', 'Kleine Magellansche Wolke'], kind: 'Galassia nana irregolare',
    lead: 'La sorella minore della Grande Nube, a circa 200.000 anni luce.',
    facts: [['Distanza', 'circa 200.000 anni luce'], ['Diametro', 'circa 19.000 anni luce'], ['Stelle', 'qualche centinaio di milioni'], ['Visibile da', 'emisfero sud (costellazione del Tucano)']],
    html: '<p>La Piccola Nube di Magellano è una <b>galassia nana irregolare</b>: non ha una forma precisa, perché la gravità della Via Lattea e della Grande Nube la stanno "tirando" da tutte le parti.</p><p>Fra le due Nubi c\'è un <b>ponte di gas</b> che le collega. Studiando le stelle variabili della Piccola Nube, nel 1912 l\'astronoma <b>Henrietta Leavitt</b> scoprì un metodo per misurare le distanze nell\'Universo.</p>',
    cur: ['Il metodo di Henrietta Leavitt permise a Hubble di misurare la distanza di Andromeda.', 'Vicino a lei nel cielo si vede il grande ammasso globulare 47 Tucanae, che però appartiene alla Via Lattea.', 'Si vede a occhio nudo, come una nuvoletta.'],
    quiz: [
      { type: 'mc', q: 'Che tipo di galassia è la Piccola Nube?', options: ['Spirale gigante', 'Nana irregolare', 'Ellittica gigante'], answer: 1, explain: 'Una galassia nana irregolare.' },
      { type: 'mc', q: 'Quale astronoma la studiò per misurare le distanze?', options: ['Henrietta Leavitt', 'Marie Curie', 'Margherita Hack'], answer: 0, explain: 'Henrietta Leavitt, nel 1912, con le stelle cefeidi.' },
      { type: 'tf', q: 'La Piccola Nube si vede bene da Torino.', answer: false, explain: 'Si vede solo dall\'emisfero sud.' }
    ] },
  { id: 'vortice', cat: 'galaxy', emoji: '🌀', body: 'gal-m51', dly: 76000, distLy: 31000000, sky: ['13 29 53', '+47 11 43'],
    name: ['Galassia Vortice (M51)', 'Whirlpool Galaxy (M51)', 'Galaxie du Tourbillon (M51)', 'Галактика Водоворот (M51)', 'Galaxia Vârtej (M51)', 'Whirlpool-Galaxie (M51)'], kind: 'Galassia a spirale con una compagna',
    lead: 'Una spirale perfetta che sta "giocando" con una galassia più piccola.',
    facts: [['Distanza', 'circa 31 milioni di anni luce'], ['Diametro', 'circa 76.000 anni luce'], ['Compagna', 'NGC 5195'], ['Costellazione', 'Cani da Caccia (vicino al timone del Grande Carro)']],
    html: '<p>La Galassia Vortice è una delle spirali più belle del cielo: la vediamo <b>di fronte</b> e i suoi due bracci sono nitidissimi.</p><p>Fu la prima galassia in cui si vide la forma a spirale, disegnata da <b>Lord Rosse</b> nel 1845 con un telescopio gigante. All\'estremità di un braccio c\'è una galassia più piccola, <b>NGC 5195</b>: passandole vicino, con la sua gravità ha reso i bracci così evidenti.</p>',
    cur: ['Si trova vicino ad Alkaid, l\'ultima stella del timone del Grande Carro.', 'Nei bracci nascono tantissime stelle, a causa dell\'incontro con la compagna.', 'In essa sono state viste diverse supernove negli ultimi anni.'],
    quiz: [
      { type: 'tf', q: 'La Galassia Vortice fu la prima in cui si vide la forma a spirale.', answer: true, explain: 'Lord Rosse la disegnò nel 1845.' },
      { type: 'mc', q: 'Come si chiama la sua galassia compagna?', options: ['NGC 5195', 'M31', 'M87'], answer: 0, explain: 'NGC 5195, attaccata a un braccio.' },
      { type: 'mc', q: 'Quanto è lontana?', options: ['31 anni luce', 'circa 31 milioni di anni luce', '31 miliardi di anni luce'], answer: 1, explain: 'Circa 31 milioni di anni luce.' }
    ] },
  { id: 'sombrero', cat: 'galaxy', emoji: '👒', body: 'gal-m104', dly: 50000, distLy: 31000000, sky: ['12 39 59', '-11 37 23'],
    name: ['Galassia Sombrero (M104)', 'Sombrero Galaxy (M104)', 'Galaxie du Sombrero (M104)', 'Галактика Сомбреро (M104)', 'Galaxia Sombrero (M104)', 'Sombrerogalaxie (M104)'], kind: 'Galassia a spirale vista quasi di taglio',
    lead: 'Una galassia che sembra un cappello messicano, con una banda scura di polvere.',
    facts: [['Distanza', 'circa 30 milioni di anni luce'], ['Diametro', 'circa 50.000 anni luce'], ['Al centro', 'un buco nero di circa 1 miliardo di masse solari'], ['Ammassi globulari', 'circa 2.000'], ['Costellazione', 'Vergine']],
    html: '<p>La vediamo quasi <b>di taglio</b>: per questo sembra un <b>sombrero</b>, il cappello messicano a tesa larga. Il rigonfiamento centrale (il <b>bulge</b>) è grande e luminoso, e davanti passa una <b>fascia scura di polvere</b>.</p><p>Intorno ha circa 2.000 <b>ammassi globulari</b>, grandi palle di stelle antichissime: molti più della nostra galassia, che ne ha circa 150.</p>',
    cur: ['Il telescopio James Webb in infrarosso l\'ha vista come un anello liscio, quasi una ciambella.', 'Il suo buco nero centrale è circa 250 volte più massiccio del nostro Sagittarius A*.', 'Con un piccolo telescopio si vede la banda di polvere.'],
    quiz: [
      { type: 'mc', q: 'Perché si chiama Sombrero?', options: ['È nel Messico', 'Sembra un cappello messicano', 'L\'ha scoperta un messicano'], answer: 1, explain: 'Vista di taglio sembra un cappello a tesa larga.' },
      { type: 'tf', q: 'La Galassia Sombrero ha più ammassi globulari della Via Lattea.', answer: true, explain: 'Circa 2.000 contro circa 150.' },
      { type: 'mc', q: 'Cos\'è la striscia scura che la attraversa?', options: ['Polvere', 'Un buco', 'Un pianeta'], answer: 0, explain: 'Una banda di polvere nel disco.' }
    ] },

  /* ======================= BUCHI NERI ======================= */
  { id: 'sagittarius-a', cat: 'blackhole', emoji: '🕳️', body: 'bh-sgra', massSun: 4.3e6, distLy: 26000, sky: ['17 45 40', '-29 00 28'],
    name: ['Sagittarius A*', 'Sagittarius A*', 'Sagittarius A*', 'Стрелец A*', 'Săgetătorul A*', 'Sagittarius A*'], kind: 'Buco nero supermassiccio al centro della Via Lattea',
    lead: 'Il buco nero gigante al centro della nostra galassia: pesa come 4 milioni di Soli.',
    facts: [['Distanza', 'circa 26.000 anni luce'], ['Massa', 'circa 4,3 milioni di volte il Sole'], ['Orizzonte degli eventi', 'diametro circa 25 milioni di km (starebbe dentro l\'orbita di Mercurio)'], ['Prima immagine', '12 maggio 2022, Event Horizon Telescope'], ['Costellazione', 'Sagittario']],
    html: '<p>Un <b>buco nero</b> è un posto dove la materia è così concentrata che la gravità non lascia uscire <b>niente, nemmeno la luce</b>. Il confine da cui non si torna indietro si chiama <b>orizzonte degli eventi</b>.</p><p>Al centro della Via Lattea gli astronomi hanno visto delle stelle girare velocissime intorno a un punto invisibile: per farle girare così serve una massa di <b>4 milioni di Soli</b> in uno spazio piccolissimo. Per questa scoperta <b>Reinhard Genzel</b> e <b>Andrea Ghez</b> hanno vinto il Nobel per la fisica nel 2020.</p><p>Nel 2022 l\'<b>Event Horizon Telescope</b>, una rete di radiotelescopi in tutto il mondo, ha mostrato la sua "ombra" circondata da un anello di gas luminoso.</p>',
    cur: ['La stella S2 gira intorno a Sagittarius A* in 16 anni, arrivando a quasi 8.000 km al secondo.', 'Rispetto ad altri buchi neri giganti è piuttosto "tranquillo": mangia poco gas.', 'Siamo al sicuro: è a 26.000 anni luce da noi.'],
    quiz: [
      { type: 'tf', q: 'Dall\'orizzonte degli eventi di un buco nero non può uscire nemmeno la luce.', answer: true, explain: 'Per questo si chiama "nero".' },
      { type: 'mc', q: 'Dove si trova Sagittarius A*?', options: ['Al centro della Via Lattea', 'Vicino a Giove', 'In Andromeda'], answer: 0, explain: 'Nel centro della nostra galassia.' },
      { type: 'mc', q: 'Come hanno capito che c\'è un buco nero?', options: ['Lo hanno toccato', 'Osservando stelle che girano velocissime intorno a un punto invisibile', 'Lo ha detto una sonda'], answer: 1, explain: 'Le orbite delle stelle rivelano la massa nascosta.' }
    ] },
  { id: 'm87', cat: 'blackhole', emoji: '🕳️', body: 'bh-m87', massSun: 6.5e9, distLy: 55000000, sky: ['12 30 49', '+12 23 28'],
    name: ['M87*', 'M87*', 'M87*', 'M87*', 'M87*', 'M87*'], kind: 'Buco nero supermassiccio nella galassia M87',
    lead: 'Il primo buco nero mai "fotografato": pesa 6,5 miliardi di Soli.',
    facts: [['Distanza', 'circa 55 milioni di anni luce'], ['Massa', 'circa 6,5 miliardi di volte il Sole'], ['Orizzonte degli eventi', 'più grande dell\'intero Sistema Solare fino a Plutone'], ['Prima immagine', '10 aprile 2019, Event Horizon Telescope'], ['Getto', 'un getto di particelle lungo circa 5.000 anni luce']],
    html: '<p>Il 10 aprile 2019 è stata mostrata la <b>prima immagine di un buco nero</b>: un anello arancione intorno a un centro scuro. È M87*, al centro della galassia gigante <b>M87</b>, nella costellazione della Vergine.</p><p>Per fotografarlo serviva un telescopio grande come la Terra! Gli scienziati hanno collegato radiotelescopi in tutto il pianeta, dall\'Europa alle Hawaii fino al Polo Sud: l\'<b>Event Horizon Telescope</b>.</p><p>M87* lancia anche un enorme <b>getto</b> di particelle quasi alla velocità della luce, visibile persino con telescopi amatoriali molto grandi.</p>',
    cur: ['Le misure dell\'immagine sono arrivate in hard disk spediti in aereo: erano troppi dati per internet!', 'Il suo orizzonte degli eventi è largo circa 38 miliardi di km.', 'M87 è la galassia più grande dell\'ammasso della Vergine.'],
    quiz: [
      { type: 'num', q: 'In che anno è stata mostrata la prima immagine di un buco nero?', answer: 2019, explain: 'Il 10 aprile 2019.' },
      { type: 'mc', q: 'Cos\'è l\'Event Horizon Telescope?', options: ['Un telescopio nello spazio', 'Una rete di radiotelescopi in tutto il mondo', 'Un cannocchiale da giardino'], answer: 1, explain: 'Telescopi collegati insieme, come un telescopio grande come la Terra.' },
      { type: 'tf', q: 'M87* è più leggero di Sagittarius A*.', answer: false, explain: 'È circa 1.500 volte più massiccio.' }
    ] },
  { id: 'cygnus-x1', cat: 'blackhole', emoji: '🕳️', body: 'bh-x1', massSun: 21, distLy: 7200, sky: ['19 58 21.7', '+35 12 06'],
    name: ['Cygnus X-1', 'Cygnus X-1', 'Cygnus X-1', 'Лебедь X-1', 'Cygnus X-1', 'Cygnus X-1'], kind: 'Buco nero stellare con una stella compagna',
    lead: 'Il primo buco nero scoperto: "succhia" gas da una stella supergigante blu.',
    facts: [['Distanza', 'circa 7.200 anni luce'], ['Massa', 'circa 21 volte il Sole'], ['Orizzonte degli eventi', 'diametro circa 120 km'], ['Compagna', 'supergigante blu HDE 226868'], ['Giro della coppia', '5,6 giorni'], ['Costellazione', 'Cigno']],
    html: '<p>Cygnus X-1 è un <b>buco nero stellare</b>: è nato dal collasso di una stella molto grande. Negli anni \'70 fu il <b>primo oggetto</b> che gli astronomi riconobbero come un buco nero.</p><p>Gira insieme a una stella gigante blu e le "ruba" gas. Il gas forma un <b>disco</b> che, cadendo a spirale, si scalda a milioni di gradi ed emette <b>raggi X</b>: per questo si chiama "X-1", la prima sorgente X del Cigno.</p>',
    cur: ['Nel 1974 Stephen Hawking scommise con l\'amico Kip Thorne che Cygnus X-1 NON fosse un buco nero… e nel 1990 ammise di aver perso!', 'I raggi X non passano l\'atmosfera: lo si è scoperto con razzi e satelliti.', 'Si trova vicino alla stella Sadr, nel collo del Cigno.'],
    quiz: [
      { type: 'mc', q: 'Perché Cygnus X-1 emette raggi X?', options: ['Il gas che cade si scalda moltissimo', 'Il buco nero è una lampadina', 'Per i fulmini'], answer: 0, explain: 'Il gas nel disco raggiunge milioni di gradi.' },
      { type: 'tf', q: 'Hawking scommise che Cygnus X-1 non fosse un buco nero, e perse.', answer: true, explain: 'Ammise la sconfitta nel 1990.' },
      { type: 'mc', q: 'Che tipo di buco nero è?', options: ['Supermassiccio', 'Stellare', 'Primordiale'], answer: 1, explain: 'Nato dal collasso di una stella.' }
    ] },
  { id: 'gaia-bh1', cat: 'blackhole', emoji: '🕳️', body: 'bh-dormant', massSun: 9.6, distLy: 1560, sky: ['17 28 41.1', '-00 34 52'],
    name: ['Gaia BH1', 'Gaia BH1', 'Gaia BH1', 'Gaia BH1', 'Gaia BH1', 'Gaia BH1'], kind: 'Buco nero "dormiente", il più vicino conosciuto',
    lead: 'Il buco nero più vicino che conosciamo, trovato perché fa "ballare" una stella simile al Sole.',
    facts: [['Distanza', 'circa 1.560 anni luce'], ['Massa', 'circa 10 volte il Sole'], ['Compagna', 'una stella simile al Sole, che gli gira intorno in 186 giorni'], ['Scoperta', '2022, grazie al satellite europeo Gaia'], ['Costellazione', 'Ofiuco']],
    html: '<p>Non tutti i buchi neri brillano di raggi X. Gaia BH1 è <b>"dormiente"</b>: non sta mangiando gas, quindi è completamente invisibile.</p><p>Il satellite <b>Gaia</b>, che misura con precisione incredibile le posizioni di quasi 2 miliardi di stelle, ha notato una stella che si muove avanti e indietro come se ballasse con un compagno invisibile. Calcolando la sua orbita, si è capito che il compagno pesa circa 10 Soli ma non emette luce: un buco nero!</p>',
    cur: ['Nella Via Lattea potrebbero esserci circa 100 milioni di buchi neri stellari, quasi tutti invisibili.', 'Nel 2024 Gaia ha trovato anche Gaia BH3, di circa 33 masse solari.', 'Il satellite Gaia misura angoli così piccoli come una moneta vista sulla Luna.'],
    quiz: [
      { type: 'mc', q: 'Come è stato scoperto Gaia BH1?', options: ['Dai suoi raggi X', 'Dal movimento di una stella che gli gira intorno', 'Da una foto diretta'], answer: 1, explain: 'La stella compagna "balla" intorno a un oggetto invisibile.' },
      { type: 'tf', q: 'Gaia BH1 è il buco nero più vicino conosciuto.', answer: true, explain: 'A circa 1.560 anni luce.' },
      { type: 'mc', q: 'Cosa vuol dire che è "dormiente"?', options: ['Non mangia gas e non emette luce', 'È spento per sempre', 'Dorme di notte'], answer: 0, explain: 'Senza gas che cade, non brilla.' }
    ] }
]);
