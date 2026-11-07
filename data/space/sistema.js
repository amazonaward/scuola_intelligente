/* Schede della sezione Spazio: Sole, pianeti, pianeti nani, lune, comete.
   Formato in FORMATO.md. Dati arrotondati da NASA/JPL/IAU. */
window.SPACE_OBJECTS = (window.SPACE_OBJECTS || []).concat([
  /* ======================= SOLE ======================= */
  { id: 'sole', cat: 'sun', emoji: '☀️', color: '#fbbf24', body: 'sun', sol: 'sun', r: 696000,
    name: ['Sole', 'Sun', 'Soleil', 'Солнце', 'Soare'], kind: 'Stella nana gialla (tipo G2V)',
    lead: 'La nostra stella: una gigantesca palla di gas caldissimo che ci regala luce e calore.',
    facts: [['Diametro', '1.392.000 km (109 Terre in fila)'], ['Massa', '333.000 volte la Terra'], ['Distanza dalla Terra', '150 milioni di km (la luce impiega 8 min e 20 s)'], ['Temperatura in superficie', 'circa 5.500 °C'], ['Temperatura al centro', 'circa 15 milioni di °C'], ['Età', '4,6 miliardi di anni'], ['Composizione', '≈ 73% idrogeno, 25% elio']],
    html: '<p>Il Sole è una <b>stella</b>, come quelle che vedi di notte: ci sembra così grande e luminoso solo perché è molto più vicino. Da solo contiene il <b>99,8% della massa</b> di tutto il Sistema Solare.</p><p>Nel suo centro avviene la <b>fusione nucleare</b>: ogni secondo circa 600 milioni di tonnellate di idrogeno diventano elio, liberando un\'energia enorme. Quell\'energia impiega migliaia di anni per arrivare in superficie e poi solo 8 minuti per raggiungere noi.</p><p>Sulla superficie ci sono le <b>macchie solari</b>, zone un po\' più "fredde" (circa 3.500 °C) che sembrano scure. Il loro numero sale e scende con un ciclo di circa 11 anni.</p>',
    cur: ['Nel Sole ci starebbero circa 1.300.000 Terre.', 'Non guardare mai il Sole direttamente, nemmeno con un binocolo: rovina gli occhi per sempre!', 'Tra circa 5 miliardi di anni il Sole diventerà una gigante rossa e poi una nana bianca.'],
    quiz: [
      { type: 'mc', q: 'Che cos\'è il Sole?', options: ['Un pianeta', 'Una stella', 'Una cometa'], answer: 1, explain: 'Il Sole è una stella, come quelle che vediamo di notte.' },
      { type: 'mc', q: 'Quanto impiega la luce del Sole ad arrivare sulla Terra?', options: ['8 secondi', '8 minuti', '8 ore'], answer: 1, explain: 'Circa 8 minuti e 20 secondi, viaggiando a 300.000 km al secondo.' },
      { type: 'tf', q: 'Le macchie solari sono zone più fredde del resto della superficie.', answer: true, explain: 'Sono a circa 3.500 °C invece di 5.500 °C, per questo sembrano scure.' }
    ] },

  /* ======================= PIANETI ======================= */
  { id: 'mercurio', cat: 'planet', emoji: '🪨', color: '#a8a29e', body: 'mercury', sol: 'mercury', r: 2440,
    name: ['Mercurio', 'Mercury', 'Mercure', 'Меркурий', 'Mercur'], kind: 'Pianeta roccioso, il più vicino al Sole',
    lead: 'Il pianeta più piccolo e più veloce: fa il giro del Sole in soli 88 giorni.',
    facts: [['Diametro', '4.879 km (circa 2/5 della Terra)'], ['Distanza dal Sole', '58 milioni di km (0,39 UA)'], ['Anno (giro del Sole)', '88 giorni'], ['Giorno (da un mezzogiorno all\'altro)', '176 giorni terrestri'], ['Temperatura', 'da −180 °C di notte a +430 °C di giorno'], ['Lune', 'nessuna']],
    html: '<p>Mercurio è poco più grande della nostra Luna e le assomiglia: è pieno di <b>crateri</b> e quasi non ha atmosfera.</p><p>Senza un\'atmosfera che tenga il calore, di giorno si arriva a 430 °C (abbastanza per fondere il piombo) e di notte si scende a −180 °C. È il pianeta con la differenza di temperatura più grande!</p><p>Si vede a occhio nudo solo poco dopo il tramonto o poco prima dell\'alba, sempre basso vicino all\'orizzonte.</p>',
    cur: ['Su Mercurio un giorno (176 giorni) dura il doppio del suo anno (88 giorni)!', 'Vicino ai poli, in crateri sempre all\'ombra, c\'è ghiaccio d\'acqua.', 'La sonda europea-giapponese BepiColombo, dal nome di uno scienziato italiano, arriverà in orbita nel 2026.'],
    quiz: [
      { type: 'mc', q: 'Quanto dura un anno su Mercurio?', options: ['88 giorni', '365 giorni', '12 anni'], answer: 0, explain: 'Essendo il più vicino al Sole, percorre l\'orbita più corta e più veloce.' },
      { type: 'tf', q: 'Mercurio ha un\'atmosfera densa che lo tiene caldo di notte.', answer: false, explain: 'Quasi non ha atmosfera: per questo di notte si raffredda fino a −180 °C.' },
      { type: 'mc', q: 'A cosa assomiglia Mercurio?', options: ['A Giove', 'Alla Luna', 'Alla Terra'], answer: 1, explain: 'È grigio e coperto di crateri, proprio come la Luna.' }
    ] },
  { id: 'venere', cat: 'planet', emoji: '🌕', color: '#f5c16c', body: 'venus', sol: 'venus', r: 6052,
    name: ['Venere', 'Venus', 'Vénus', 'Венера', 'Venus'], kind: 'Pianeta roccioso con atmosfera densissima',
    lead: 'Il pianeta più caldo del Sistema Solare, nascosto da nuvole di acido solforico.',
    facts: [['Diametro', '12.104 km (quasi come la Terra)'], ['Distanza dal Sole', '108 milioni di km (0,72 UA)'], ['Anno', '225 giorni'], ['Rotazione', '243 giorni, al contrario degli altri pianeti'], ['Temperatura', 'circa 465 °C, giorno e notte'], ['Pressione al suolo', '92 volte quella della Terra'], ['Lune', 'nessuna']],
    html: '<p>Venere è grande quasi come la Terra, ma è un vero inferno: la sua atmosfera è fatta quasi tutta di <b>anidride carbonica</b> e intrappola il calore (è l\'<b>effetto serra</b> più forte che conosciamo). Così fa più caldo che su Mercurio, anche se è più lontana dal Sole.</p><p>È l\'oggetto più luminoso del cielo dopo il Sole e la Luna. La chiamano <b>"stella del mattino"</b> o <b>"stella della sera"</b>, ma è un pianeta!</p><p>Gira su se stessa lentissimamente e al contrario: lì il Sole sorge a ovest e tramonta a est.</p>',
    cur: ['Su Venere un giorno di rotazione (243 giorni) è più lungo del suo anno (225 giorni).', 'Le sonde sovietiche Venera sono riuscite ad atterrare e a mandare foto, ma hanno resistito al massimo un paio d\'ore.', 'Galileo osservò le fasi di Venere nel 1610: fu una prova che i pianeti girano intorno al Sole.'],
    quiz: [
      { type: 'mc', q: 'Perché Venere è più calda di Mercurio?', options: ['È più vicina al Sole', 'Ha un fortissimo effetto serra', 'Ha vulcani accesi ovunque'], answer: 1, explain: 'L\'atmosfera di anidride carbonica intrappola il calore.' },
      { type: 'tf', q: 'La "stella del mattino" in realtà è il pianeta Venere.', answer: true, explain: 'Venere è così luminosa che sembra una stella brillantissima all\'alba o al tramonto.' },
      { type: 'mc', q: 'Su Venere il Sole sorge…', options: ['a est', 'a ovest', 'non sorge mai'], answer: 1, explain: 'Venere ruota al contrario rispetto alla Terra.' }
    ] },
  { id: 'terra', cat: 'planet', emoji: '🌍', color: '#3b82f6', body: 'earth', sol: 'earth', r: 6371,
    name: ['Terra', 'Earth', 'Terre', 'Земля', 'Pământ'], kind: 'Pianeta roccioso, la nostra casa',
    lead: 'L\'unico posto dell\'Universo dove sappiamo che c\'è la vita.',
    facts: [['Diametro', '12.742 km'], ['Distanza dal Sole', '149,6 milioni di km (1 UA)'], ['Anno', '365 giorni e circa 6 ore'], ['Giorno', '24 ore'], ['Inclinazione dell\'asse', '23,4° (per questo ci sono le stagioni)'], ['Temperatura media', 'circa 15 °C'], ['Lune', '1, la Luna']],
    html: '<p>La Terra è il terzo pianeta dal Sole e il più grande dei pianeti rocciosi. Si trova alla distanza giusta perché l\'acqua resti <b>liquida</b>: non troppo vicina (evaporerebbe) e non troppo lontana (gelerebbe). Gli scienziati la chiamano <b>zona abitabile</b>.</p><p>L\'<b>atmosfera</b> ci protegge dai raggi più pericolosi del Sole e da molti piccoli meteoriti, che bruciano diventando stelle cadenti. Il <b>campo magnetico</b> ci ripara dal vento solare e crea le aurore polari.</p><p>Circa il 71% della superficie è coperto da oceani: visto dallo spazio è un "pianeta blu".</p>',
    cur: ['La Terra corre intorno al Sole a circa 107.000 km/h!', 'Ogni anno la Luna si allontana dalla Terra di quasi 4 cm.', 'Le stagioni non dipendono dalla distanza dal Sole, ma dall\'inclinazione dell\'asse terrestre.'],
    quiz: [
      { type: 'mc', q: 'Perché sulla Terra ci sono le stagioni?', options: ['Perché a volte siamo più vicini al Sole', 'Per l\'inclinazione dell\'asse terrestre', 'Per colpa della Luna'], answer: 1, explain: 'L\'asse inclinato di 23,4° fa arrivare la luce più dritta o più obliqua a seconda del periodo.' },
      { type: 'num', q: 'Quante lune ha la Terra?', answer: 1, explain: 'Una sola: la Luna.' },
      { type: 'tf', q: 'Gli oceani coprono circa il 71% della Terra.', answer: true, explain: 'Per questo dallo spazio la Terra appare blu.' }
    ] },
  { id: 'marte', cat: 'planet', emoji: '🔴', color: '#ef4444', body: 'mars', sol: 'mars', r: 3390,
    name: ['Marte', 'Mars', 'Mars', 'Марс', 'Marte'], kind: 'Pianeta roccioso, il "pianeta rosso"',
    lead: 'Un deserto rosso con il vulcano più alto del Sistema Solare e due piccole lune.',
    facts: [['Diametro', '6.779 km (circa metà della Terra)'], ['Distanza dal Sole', '228 milioni di km (1,52 UA)'], ['Anno', '687 giorni'], ['Giorno', '24 ore e 37 minuti'], ['Temperatura media', 'circa −63 °C'], ['Lune', '2: Phobos e Deimos'], ['Vulcano più alto', 'Olympus Mons, circa 22 km']],
    html: '<p>Marte è rosso perché le sue rocce e la sua polvere contengono molto <b>ossido di ferro</b>, cioè ruggine! Ha un\'atmosfera sottilissima, fatta soprattutto di anidride carbonica.</p><p>Ospita <b>Olympus Mons</b>, un vulcano alto circa 22 km (quasi tre volte l\'Everest), e la <b>Valles Marineris</b>, un canyon lungo circa 4.000 km. Ai poli ci sono calotte di ghiaccio.</p><p>Miliardi di anni fa su Marte scorrevano fiumi e c\'erano laghi: i rover come <b>Curiosity</b> e <b>Perseverance</b> cercano tracce di antica vita.</p>',
    cur: ['Un giorno su Marte (si chiama "sol") dura solo 37 minuti più del nostro.', 'Su Marte ci sono tempeste di polvere che possono coprire tutto il pianeta.', 'Nel 2021 il piccolo elicottero Ingenuity è stato il primo a volare su un altro pianeta.'],
    quiz: [
      { type: 'mc', q: 'Perché Marte è rosso?', options: ['È caldissimo', 'Il suo suolo contiene ossido di ferro (ruggine)', 'È coperto di lava'], answer: 1, explain: 'La polvere ricca di ossido di ferro gli dà il colore rosso.' },
      { type: 'text', q: 'Come si chiama il vulcano più alto di Marte?', answer: ['olympus mons', 'olimpo', 'monte olimpo'], explain: 'Olympus Mons, alto circa 22 km.' },
      { type: 'num', q: 'Quante lune ha Marte?', answer: 2, explain: 'Phobos e Deimos, piccole e dalla forma irregolare.' }
    ] },
  { id: 'giove', cat: 'planet', emoji: '🟠', color: '#d6a26b', body: 'jupiter', sol: 'jupiter', r: 69911,
    name: ['Giove', 'Jupiter', 'Jupiter', 'Юпитер', 'Jupiter'], kind: 'Pianeta gigante gassoso, il più grande',
    lead: 'Il gigante del Sistema Solare: dentro ci starebbero più di 1.300 Terre.',
    facts: [['Diametro', '139.820 km (11 Terre)'], ['Massa', '318 volte la Terra'], ['Distanza dal Sole', '778 milioni di km (5,2 UA)'], ['Anno', '11,9 anni'], ['Giorno', '9 ore e 56 minuti (il più corto)'], ['Lune', 'più di 90; le 4 grandi sono Io, Europa, Ganimede, Callisto'], ['Grande Macchia Rossa', 'una tempesta più larga della Terra']],
    html: '<p>Giove è un <b>gigante gassoso</b>: non ha una superficie solida su cui camminare, ma è fatto soprattutto di <b>idrogeno ed elio</b>, come il Sole. Le sue strisce colorate sono nuvole spinte da venti fortissimi.</p><p>La <b>Grande Macchia Rossa</b> è un uragano gigantesco, osservato da più di 150 anni (forse da oltre 300).</p><p>Nel 1610 <b>Galileo Galilei</b> scoprì con il suo cannocchiale le quattro lune maggiori: fu la prova che non tutto gira intorno alla Terra.</p>',
    cur: ['Giove gira su se stesso così veloce che è un po\' schiacciato ai poli.', 'Con la sua gravità fa da "scudo": attira e devia molte comete e asteroidi.', 'Anche Giove ha degli anelli, ma sono sottili e scuri.'],
    quiz: [
      { type: 'mc', q: 'Chi scoprì le 4 lune più grandi di Giove?', options: ['Copernico', 'Galileo Galilei', 'Newton'], answer: 1, explain: 'Galileo le osservò nel 1610 con il cannocchiale: si chiamano "satelliti galileiani".' },
      { type: 'tf', q: 'Su Giove si può atterrare e camminare.', answer: false, explain: 'È un gigante gassoso: non ha una superficie solida.' },
      { type: 'mc', q: 'Che cos\'è la Grande Macchia Rossa?', options: ['Un vulcano', 'Un enorme uragano', 'Un mare di lava'], answer: 1, explain: 'È una tempesta più grande della Terra, che dura da secoli.' }
    ] },
  { id: 'saturno', cat: 'planet', emoji: '🪐', color: '#e8cf8f', body: 'saturn', sol: 'saturn', r: 58232,
    name: ['Saturno', 'Saturn', 'Saturne', 'Сатурн', 'Saturn'], kind: 'Pianeta gigante gassoso con gli anelli',
    lead: 'Il signore degli anelli: così leggero che galleggerebbe in una vasca gigante.',
    facts: [['Diametro', '116.460 km (9 Terre)'], ['Distanza dal Sole', '1,43 miliardi di km (9,5 UA)'], ['Anno', '29,5 anni'], ['Giorno', 'circa 10 ore e 33 minuti'], ['Densità', '0,69 g/cm³, meno dell\'acqua'], ['Anelli', 'larghi circa 280.000 km, spessi spesso meno di 1 km'], ['Lune', 'più di 270 (la più grande è Titano)']],
    html: '<p>Saturno è il secondo pianeta più grande. I suoi famosi <b>anelli</b> sono fatti di miliardi di pezzi di <b>ghiaccio e roccia</b>, da granelli di polvere a blocchi grandi come case.</p><p>Gli anelli sono larghissimi ma sottilissimi: se fossero un foglio di carta, sarebbero comunque più sottili in proporzione! Ogni 15 anni circa li vediamo "di taglio" dalla Terra e quasi spariscono.</p><p>È il pianeta con <b>meno densità</b>: in media è più leggero dell\'acqua.</p>',
    cur: ['Al polo nord di Saturno c\'è una tempesta a forma di esagono, larga più della Terra.', 'La sonda Cassini ha studiato Saturno per 13 anni e nel 2017 si è tuffata dentro il pianeta.', 'Galileo vide gli anelli ma non capì cosa fossero: pensò che Saturno avesse "le orecchie".'],
    quiz: [
      { type: 'mc', q: 'Di cosa sono fatti gli anelli di Saturno?', options: ['Di gas', 'Di pezzi di ghiaccio e roccia', 'Di metallo liquido'], answer: 1, explain: 'Miliardi di frammenti di ghiaccio e roccia girano intorno al pianeta.' },
      { type: 'tf', q: 'Saturno, in media, è meno denso dell\'acqua.', answer: true, explain: 'La sua densità è 0,69 g/cm³, mentre l\'acqua è 1 g/cm³.' },
      { type: 'text', q: 'Come si chiama la luna più grande di Saturno?', answer: ['titano', 'titan'], explain: 'Titano, più grande del pianeta Mercurio.' }
    ] },
  { id: 'urano', cat: 'planet', emoji: '🔵', color: '#7dd3fc', body: 'uranus', sol: 'uranus', r: 25362,
    name: ['Urano', 'Uranus', 'Uranus', 'Уран', 'Uranus'], kind: 'Gigante ghiacciato, rotola sul fianco',
    lead: 'Il pianeta "sdraiato": il suo asse è inclinato di 98 gradi.',
    facts: [['Diametro', '50.724 km (4 Terre)'], ['Distanza dal Sole', '2,87 miliardi di km (19,2 UA)'], ['Anno', '84 anni'], ['Giorno', '17 ore e 14 minuti'], ['Inclinazione dell\'asse', '98°'], ['Temperatura minima', 'circa −224 °C'], ['Lune', '28 conosciute (Titania, Oberon, Miranda…)']],
    html: '<p>Urano è un <b>gigante ghiacciato</b>: sotto le nuvole ci sono acqua, ammoniaca e metano in forma di "ghiacci" caldi e densi. Il <b>metano</b> nell\'atmosfera gli dà il colore azzurro.</p><p>La cosa più strana è che <b>ruota sdraiato</b>, come una palla che rotola. Forse in passato è stato urtato da un corpo grande come la Terra. Così ogni polo ha 42 anni di luce e 42 anni di buio!</p><p>Fu il primo pianeta scoperto con il telescopio, da <b>William Herschel</b> nel 1781.</p>',
    cur: ['Urano ha l\'atmosfera più fredda tra i pianeti: fino a −224 °C.', 'Le sue lune hanno i nomi di personaggi di Shakespeare e di Alexander Pope.', 'Solo una sonda lo ha visitato: Voyager 2, nel 1986.'],
    quiz: [
      { type: 'mc', q: 'Cosa ha di strano Urano?', options: ['Non ha atmosfera', 'Ruota "sdraiato" sul fianco', 'È più caldo del Sole'], answer: 1, explain: 'Il suo asse è inclinato di 98°.' },
      { type: 'mc', q: 'Chi scoprì Urano nel 1781?', options: ['Galileo', 'William Herschel', 'Keplero'], answer: 1, explain: 'William Herschel, con un telescopio costruito da lui.' },
      { type: 'tf', q: 'Il colore azzurro di Urano viene dal metano.', answer: true, explain: 'Il metano assorbe la luce rossa e lascia passare quella blu-verde.' }
    ] },
  { id: 'nettuno', cat: 'planet', emoji: '🔷', color: '#4f6df5', body: 'neptune', sol: 'neptune', r: 24622,
    name: ['Nettuno', 'Neptune', 'Neptune', 'Нептун', 'Neptun'], kind: 'Gigante ghiacciato, il pianeta più lontano',
    lead: 'Un mondo blu e ventoso, scoperto con la matematica prima che con il telescopio.',
    facts: [['Diametro', '49.244 km (quasi 4 Terre)'], ['Distanza dal Sole', '4,5 miliardi di km (30 UA)'], ['Anno', '165 anni'], ['Giorno', '16 ore e 6 minuti'], ['Venti', 'fino a circa 2.100 km/h, i più forti del Sistema Solare'], ['Lune', '16 conosciute (la più grande è Tritone)']],
    html: '<p>Nettuno è l\'ottavo e ultimo pianeta. È blu intenso grazie al <b>metano</b> e ha i <b>venti più veloci</b> del Sistema Solare.</p><p>È stato il primo pianeta trovato con i <b>calcoli</b>: l\'orbita di Urano non era come doveva essere, così il matematico <b>Urbain Le Verrier</b> calcolò dove doveva esserci un altro pianeta. Nel 1846 <b>Johann Galle</b> puntò il telescopio e lo trovò quasi esattamente lì!</p><p>Dalla sua scoperta ha fatto un solo giro completo intorno al Sole, finito nel 2011.</p>',
    cur: ['La luce del Sole impiega circa 4 ore per arrivare su Nettuno.', 'Voyager 2 nel 1989 vide una "Grande Macchia Scura", una tempesta grande quanto la Terra.', 'Tritone, la sua luna maggiore, gira al contrario.'],
    quiz: [
      { type: 'mc', q: 'Come fu scoperto Nettuno?', options: ['Per caso, guardando il cielo', 'Grazie a calcoli matematici', 'Da una sonda spaziale'], answer: 1, explain: 'Le Verrier calcolò la sua posizione, Galle lo trovò nel 1846.' },
      { type: 'num', q: 'Quanti anni dura un anno di Nettuno? (arrotonda)', answer: 165, tol: 2, unit: 'anni', explain: 'Circa 165 anni terrestri.' },
      { type: 'tf', q: 'Nettuno ha venti fortissimi, fino a circa 2.000 km/h.', answer: true, explain: 'Sono i più forti di tutto il Sistema Solare.' }
    ] },

  /* ======================= PIANETI NANI ======================= */
  { id: 'plutone', cat: 'dwarf', emoji: '🤍', color: '#d6b89c', body: 'pluto', sol: 'pluto', r: 1188,
    name: ['Plutone', 'Pluto', 'Pluton', 'Плутон', 'Pluto'], kind: 'Pianeta nano della fascia di Kuiper',
    lead: 'Era il nono pianeta, dal 2006 è un pianeta nano… con un cuore di ghiaccio.',
    facts: [['Diametro', '2.377 km (più piccolo della Luna)'], ['Distanza media dal Sole', '5,9 miliardi di km (39,5 UA)'], ['Anno', '248 anni'], ['Temperatura', 'circa −230 °C'], ['Lune', '5 (la più grande è Caronte)'], ['Scoperta', '1930, Clyde Tombaugh']],
    html: '<p>Plutone fu scoperto nel 1930 e per 76 anni fu considerato il nono pianeta. Poi si scoprì che nella <b>fascia di Kuiper</b>, oltre Nettuno, ci sono tanti corpi simili. Nel 2006 gli astronomi decisero che Plutone è un <b>pianeta nano</b>: non ha "ripulito" la sua orbita dagli altri oggetti.</p><p>Nel 2015 la sonda <b>New Horizons</b> lo fotografò da vicino: ha montagne di ghiaccio d\'acqua e una enorme pianura a forma di <b>cuore</b>, fatta di ghiaccio di azoto.</p>',
    cur: ['Caronte è così grande rispetto a Plutone che i due girano intorno a un punto nello spazio tra loro.', 'Il nome "Pluto" fu proposto da una bambina inglese di 11 anni, Venetia Burney.', 'L\'orbita di Plutone è così allungata che a volte è più vicino al Sole di Nettuno.'],
    quiz: [
      { type: 'tf', q: 'Plutone dal 2006 è considerato un pianeta nano.', answer: true, explain: 'Perché la sua orbita è condivisa con molti altri corpi della fascia di Kuiper.' },
      { type: 'mc', q: 'Quale sonda ha fotografato Plutone da vicino nel 2015?', options: ['Voyager 1', 'New Horizons', 'Cassini'], answer: 1, explain: 'New Horizons ha scoperto il grande "cuore" di ghiaccio.' },
      { type: 'text', q: 'Come si chiama la luna più grande di Plutone?', answer: ['caronte', 'charon'], explain: 'Caronte, grande circa la metà di Plutone.' }
    ] },
  { id: 'cerere', cat: 'dwarf', emoji: '⚪', color: '#9ca3af', body: 'ceres', sol: 'ceres', r: 470,
    name: ['Cerere', 'Ceres', 'Cérès', 'Церера', 'Ceres'], kind: 'Pianeta nano della fascia degli asteroidi',
    lead: 'Il corpo più grande tra Marte e Giove, scoperto da un astronomo italiano.',
    facts: [['Diametro', 'circa 940 km'], ['Distanza dal Sole', '414 milioni di km (2,77 UA)'], ['Anno', '4,6 anni'], ['Scoperta', '1° gennaio 1801, Giuseppe Piazzi (Palermo)'], ['Lune', 'nessuna']],
    html: '<p>Cerere fu il primo oggetto della <b>fascia degli asteroidi</b> a essere scoperto: lo trovò <b>Giuseppe Piazzi</b> dall\'osservatorio di Palermo la prima notte del 1801. Lo chiamò come la dea romana dei raccolti, protettrice della Sicilia.</p><p>È abbastanza grande da essere quasi rotondo, per questo dal 2006 è un <b>pianeta nano</b>. Da solo contiene circa un quarto della massa di tutta la fascia.</p><p>La sonda <b>Dawn</b> nel 2015 scoprì delle macchie bianchissime nel cratere Occator: sono sali lasciati da acqua salata uscita dall\'interno.</p>',
    cur: ['Cerere è il pianeta nano più vicino a noi.', 'Sotto la superficie potrebbe esserci ancora acqua salata liquida.', 'Per un po\' di tempo dopo la scoperta, Cerere fu considerato un pianeta!'],
    quiz: [
      { type: 'mc', q: 'Chi scoprì Cerere?', options: ['Giuseppe Piazzi', 'Galileo Galilei', 'Giovanni Schiaparelli'], answer: 0, explain: 'Piazzi, dall\'osservatorio di Palermo, il 1° gennaio 1801.' },
      { type: 'mc', q: 'Dove si trova Cerere?', options: ['Nella fascia di Kuiper', 'Nella fascia degli asteroidi, tra Marte e Giove', 'Vicino a Mercurio'], answer: 1, explain: 'È il corpo più grande della fascia degli asteroidi.' },
      { type: 'tf', q: 'Le macchie bianche di Cerere sono sale.', answer: true, explain: 'Sono depositi di sali lasciati da acqua salata.' }
    ] },
  { id: 'eris', cat: 'dwarf', emoji: '⚪', color: '#e5e7eb', body: 'eris', sol: 'eris', r: 1163,
    name: ['Eris', 'Eris', 'Éris', 'Эрида', 'Eris'], kind: 'Pianeta nano del disco diffuso',
    lead: 'Il pianeta nano che ha fatto "litigare" gli astronomi su cosa sia un pianeta.',
    facts: [['Diametro', 'circa 2.326 km (quasi come Plutone)'], ['Massa', 'circa il 27% più di Plutone'], ['Distanza dal Sole', 'da 38 a 98 UA (media 68 UA)'], ['Anno', 'circa 559 anni'], ['Lune', '1, Disnomia'], ['Scoperta', '2005 (Brown, Trujillo, Rabinowitz)']],
    html: '<p>Eris fu scoperta nel 2005 ed è grande quasi come Plutone ma <b>più pesante</b>. Gli astronomi si chiesero: se Plutone è un pianeta, allora anche Eris lo è? E tutti gli altri? Nel 2006 decisero di creare la categoria dei <b>pianeti nani</b>.</p><p>Per questo la chiamarono Eris, come la dea greca della discordia. Oggi si trova vicino al punto più lontano della sua orbita, a quasi 100 volte la distanza Terra-Sole.</p>',
    cur: ['Eris è uno degli oggetti più bianchi del Sistema Solare: riflette quasi tutta la luce.', 'La sua luna Disnomia prende il nome dalla figlia di Eris, dea dell\'illegalità.', 'Dalla superficie di Eris, il Sole sembra solo una stella molto brillante.'],
    quiz: [
      { type: 'mc', q: 'Perché si chiama Eris?', options: ['Dalla dea della discordia', 'Dal nome di chi l\'ha scoperta', 'Da una città greca'], answer: 0, explain: 'La sua scoperta fece discutere gli astronomi su cosa sia un pianeta.' },
      { type: 'tf', q: 'Eris ha più massa di Plutone.', answer: true, explain: 'Circa il 27% in più, anche se è leggermente più piccola.' },
      { type: 'num', q: 'In che anno è stata scoperta Eris?', answer: 2005, explain: 'Nel 2005.' }
    ] },
  { id: 'haumea', cat: 'dwarf', emoji: '🥚', color: '#f1f5f9', body: 'haumea', sol: 'haumea', r: 780,
    name: ['Haumea', 'Haumea', 'Hauméa', 'Хаумеа', 'Haumea'], kind: 'Pianeta nano a forma di uovo',
    lead: 'Un pianeta nano che gira così veloce da essere diventato allungato come un pallone da rugby.',
    facts: [['Dimensioni', 'circa 2.100 × 1.700 × 1.100 km'], ['Rotazione', '3,9 ore (una delle più veloci)'], ['Distanza media dal Sole', '43 UA'], ['Anno', 'circa 284 anni'], ['Lune', '2: Hiʻiaka e Namaka'], ['Anello', 'scoperto nel 2017']],
    html: '<p>Haumea si trova nella <b>fascia di Kuiper</b>. Fa un giro su se stessa in meno di 4 ore: è così veloce che si è "stirata" e ha preso la forma di un <b>uovo allungato</b>.</p><p>È coperta di ghiaccio d\'acqua cristallino e nel 2017 si è scoperto che ha anche un <b>anello</b>: è stato il primo anello trovato intorno a un oggetto oltre Nettuno.</p><p>Il suo nome viene dalla dea hawaiana della nascita; le sue lune sono le sue figlie.</p>',
    cur: ['Un giorno su Haumea dura circa 4 ore: meno di una mattina di scuola!', 'Probabilmente un antico scontro le ha dato questa rotazione velocissima.', 'Su Haumea ci sono pezzi di ghiaccio sparsi dallo stesso scontro.'],
    quiz: [
      { type: 'mc', q: 'Che forma ha Haumea?', options: ['Una sfera perfetta', 'Un uovo allungato', 'Un cubo'], answer: 1, explain: 'La rotazione velocissima l\'ha allungata.' },
      { type: 'tf', q: 'Haumea ha un anello.', answer: true, explain: 'È stato scoperto nel 2017.' },
      { type: 'mc', q: 'Quanto dura un giorno su Haumea?', options: ['Circa 4 ore', 'Circa 24 ore', 'Circa 4 giorni'], answer: 0, explain: '3,9 ore: è uno dei corpi grandi che ruotano più velocemente.' }
    ] },
  { id: 'makemake', cat: 'dwarf', emoji: '🟤', color: '#c08457', body: 'makemake', r: 715,
    name: ['Makemake', 'Makemake', 'Makémaké', 'Макемаке', 'Makemake'], kind: 'Pianeta nano della fascia di Kuiper',
    lead: 'Un mondo rossiccio e gelido, scoperto poco dopo Pasqua.',
    facts: [['Diametro', 'circa 1.430 km'], ['Distanza media dal Sole', '45,5 UA'], ['Anno', 'circa 306 anni'], ['Temperatura', 'circa −240 °C'], ['Lune', '1 piccola luna (S/2015 (136472) 1)'], ['Scoperta', '2005']],
    html: '<p>Makemake è uno dei corpi più luminosi della <b>fascia di Kuiper</b>, dopo Plutone. È coperto di ghiaccio di <b>metano</b> ed <b>etano</b>, che gli danno un colore rossiccio.</p><p>Fu scoperto nel 2005 pochi giorni dopo Pasqua: per questo il nome viene da Makemake, il dio creatore del popolo dell\'<b>Isola di Pasqua</b> (Rapa Nui).</p>',
    cur: ['Makemake è così lontano che la luce del Sole ci mette più di 6 ore per arrivarci.', 'Non ha quasi atmosfera.', 'La sua piccola luna è stata vista dal telescopio spaziale Hubble nel 2015.'],
    quiz: [
      { type: 'mc', q: 'Da dove viene il nome Makemake?', options: ['Dall\'Isola di Pasqua', 'Dal Giappone', 'Dall\'antica Roma'], answer: 0, explain: 'È il dio creatore del popolo di Rapa Nui (Isola di Pasqua).' },
      { type: 'tf', q: 'Makemake si trova nella fascia di Kuiper.', answer: true, explain: 'Oltre l\'orbita di Nettuno, come Plutone.' },
      { type: 'mc', q: 'Quale telescopio ha scoperto la sua luna?', options: ['Hubble', 'Galileo', 'Herschel'], answer: 0, explain: 'Il telescopio spaziale Hubble, nel 2015.' }
    ] },

  /* ======================= LUNE ======================= */
  { id: 'luna', cat: 'moon', emoji: '🌙', color: '#d4d4d8', body: 'moon', sol: 'moon', r: 1737,
    name: ['Luna', 'Moon', 'Lune', 'Луна', 'Luna'], kind: 'Satellite naturale della Terra',
    lead: 'Il nostro satellite e l\'unico altro mondo su cui l\'uomo ha camminato.',
    facts: [['Diametro', '3.474 km (circa 1/4 della Terra)'], ['Distanza dalla Terra', '384.400 km in media'], ['Giro intorno alla Terra', '27,3 giorni'], ['Da una Luna piena all\'altra', '29,5 giorni'], ['Gravità', 'circa 1/6 di quella terrestre'], ['Primo sbarco', '20 luglio 1969, Apollo 11']],
    html: '<p>La Luna non ha luce propria: <b>riflette la luce del Sole</b>. Mentre gira intorno alla Terra vediamo illuminata una parte diversa: sono le <b>fasi lunari</b> (Luna nuova, primo quarto, Luna piena, ultimo quarto).</p><p>Ci mostra sempre la <b>stessa faccia</b>, perché impiega lo stesso tempo a girare su se stessa e intorno alla Terra. Le macchie scure si chiamano <b>mari</b>, ma sono pianure di lava solidificata.</p><p>Probabilmente la Luna è nata da un enorme scontro tra la Terra giovane e un pianeta grande come Marte, circa 4,5 miliardi di anni fa.</p>',
    cur: ['Con le missioni Apollo, 12 astronauti hanno camminato sulla Luna tra il 1969 e il 1972.', 'Le impronte degli astronauti sono ancora lì: sulla Luna non c\'è vento.', 'Le maree del mare sono causate soprattutto dalla gravità della Luna.'],
    quiz: [
      { type: 'tf', q: 'La Luna produce la sua luce.', answer: false, explain: 'Riflette la luce del Sole.' },
      { type: 'mc', q: 'Perché vediamo sempre la stessa faccia della Luna?', options: ['Perché non gira su se stessa', 'Perché gira su se stessa nello stesso tempo in cui gira intorno alla Terra', 'Perché l\'altra faccia è buia'], answer: 1, explain: 'Rotazione e rivoluzione durano entrambe 27,3 giorni.' },
      { type: 'num', q: 'In che anno l\'uomo ha camminato per la prima volta sulla Luna?', answer: 1969, explain: 'Il 20 luglio 1969, con Neil Armstrong e Buzz Aldrin.' }
    ] },
  { id: 'io', cat: 'moon', emoji: '🟡', color: '#facc15', body: 'io', sol: 'io', r: 1822,
    name: ['Io', 'Io', 'Io', 'Ио', 'Io'], kind: 'Luna di Giove, la più vulcanica',
    lead: 'Un mondo giallo pizza, con centinaia di vulcani in eruzione.',
    facts: [['Diametro', '3.643 km (poco più della Luna)'], ['Distanza da Giove', '421.700 km'], ['Giro intorno a Giove', '1,8 giorni'], ['Vulcani attivi', 'più di 400'], ['Scoperta', '1610, Galileo Galilei']],
    html: '<p>Io è il corpo con più <b>vulcani attivi</b> di tutto il Sistema Solare. Il suo colore giallo-arancio viene dallo <b>zolfo</b>.</p><p>Perché è così attivo? Giove e le altre lune lo "strizzano" continuamente con la loro gravità, come una pallina antistress: questo attrito scalda l\'interno e fonde le rocce.</p><p>Alcuni pennacchi dei suoi vulcani salgono fino a 400 km di altezza.</p>',
    cur: ['Le eruzioni di Io sono state viste per la prima volta dalla sonda Voyager 1 nel 1979.', 'Il suo vulcano Loki è un lago di lava più grande del Lago di Garda.', 'Io è una delle quattro lune scoperte da Galileo.'],
    quiz: [
      { type: 'mc', q: 'Che cosa rende Io speciale?', options: ['Ha oceani d\'acqua', 'È pieno di vulcani attivi', 'Ha gli anelli'], answer: 1, explain: 'Ha più di 400 vulcani attivi.' },
      { type: 'mc', q: 'Perché l\'interno di Io è caldo?', options: ['Per la gravità di Giove che lo deforma', 'Perché è vicino al Sole', 'Per i fulmini'], answer: 0, explain: 'Le forze di marea di Giove lo deformano e lo scaldano.' },
      { type: 'tf', q: 'Il colore giallo di Io viene dallo zolfo.', answer: true, explain: 'I vulcani spargono zolfo sulla superficie.' }
    ] },
  { id: 'europa', cat: 'moon', emoji: '🧊', color: '#e7dcc8', body: 'europa', sol: 'europa', r: 1561,
    name: ['Europa', 'Europa', 'Europe', 'Европа', 'Europa'], kind: 'Luna di Giove con un oceano nascosto',
    lead: 'Sotto una crosta di ghiaccio nasconde un oceano più grande di tutti quelli della Terra.',
    facts: [['Diametro', '3.122 km (un po\' più piccola della Luna)'], ['Distanza da Giove', '671.000 km'], ['Giro intorno a Giove', '3,6 giorni'], ['Crosta di ghiaccio', 'spessa forse 15–25 km'], ['Scoperta', '1610, Galileo Galilei']],
    html: '<p>Europa è liscia come una palla da biliardo e coperta di <b>ghiaccio</b> attraversato da lunghe righe rossastre: sono crepe dove il ghiaccio si è rotto e riempito.</p><p>Sotto il ghiaccio c\'è quasi certamente un <b>oceano di acqua salata</b> profondo circa 100 km. Contiene forse il doppio dell\'acqua di tutti gli oceani terrestri! Per questo è uno dei posti migliori dove cercare la vita.</p><p>La sonda <b>Europa Clipper</b>, partita nel 2024, arriverà nel 2030 per studiarla.</p>',
    cur: ['Europa ha pochissimi crateri: la sua superficie si rinnova di continuo.', 'Il telescopio Hubble ha visto forse dei getti di vapore uscire dalle crepe.', 'Anche la sonda europea JUICE studierà Europa.'],
    quiz: [
      { type: 'mc', q: 'Cosa c\'è probabilmente sotto il ghiaccio di Europa?', options: ['Lava', 'Un oceano di acqua salata', 'Il vuoto'], answer: 1, explain: 'Un oceano profondo circa 100 km.' },
      { type: 'tf', q: 'Europa è uno dei posti migliori per cercare la vita fuori dalla Terra.', answer: true, explain: 'Perché ha acqua liquida, energia e sostanze chimiche.' },
      { type: 'mc', q: 'Di quale pianeta è una luna Europa?', options: ['Saturno', 'Giove', 'Marte'], answer: 1, explain: 'È una delle quattro lune galileiane di Giove.' }
    ] },
  { id: 'ganimede', cat: 'moon', emoji: '🌑', color: '#a3a091', body: 'ganymede', sol: 'ganymede', r: 2634,
    name: ['Ganimede', 'Ganymede', 'Ganymède', 'Ганимед', 'Ganymede'], kind: 'Luna di Giove, la più grande del Sistema Solare',
    lead: 'Più grande del pianeta Mercurio e con un campo magnetico tutto suo.',
    facts: [['Diametro', '5.268 km (più di Mercurio)'], ['Distanza da Giove', '1.070.000 km'], ['Giro intorno a Giove', '7,2 giorni'], ['Particolarità', 'unica luna con un campo magnetico proprio'], ['Scoperta', '1610, Galileo Galilei']],
    html: '<p>Ganimede è la <b>luna più grande</b> del Sistema Solare: il suo diametro supera quello di Mercurio (ma ha meno massa, perché è fatta per metà di ghiaccio).</p><p>È l\'unica luna che produce un proprio <b>campo magnetico</b>, e ha deboli aurore. Anche lei, sotto la superficie, nasconde probabilmente un oceano salato.</p><p>La sonda europea <b>JUICE</b> nel 2034 entrerà in orbita intorno a Ganimede: sarà la prima sonda a orbitare intorno a una luna diversa dalla nostra.</p>',
    cur: ['Ganimede ha zone chiare piene di solchi e zone scure piene di crateri antichi.', 'Il nome viene da un giovane della mitologia greca, coppiere degli dèi.', 'Se girasse intorno al Sole, la chiameremmo pianeta!'],
    quiz: [
      { type: 'tf', q: 'Ganimede è più grande del pianeta Mercurio.', answer: true, explain: 'Il suo diametro è 5.268 km, quello di Mercurio 4.879 km.' },
      { type: 'mc', q: 'Cosa ha Ganimede che nessun\'altra luna ha?', options: ['Gli anelli', 'Un campo magnetico proprio', 'Vulcani di lava'], answer: 1, explain: 'È l\'unica luna con un campo magnetico generato al suo interno.' },
      { type: 'mc', q: 'Quale sonda andrà in orbita intorno a Ganimede?', options: ['JUICE', 'Apollo', 'Rosetta'], answer: 0, explain: 'JUICE, dell\'Agenzia Spaziale Europea.' }
    ] },
  { id: 'callisto', cat: 'moon', emoji: '🌑', color: '#6b6257', body: 'callisto', sol: 'callisto', r: 2410,
    name: ['Callisto', 'Callisto', 'Callisto', 'Каллисто', 'Callisto'], kind: 'Luna di Giove, piena di crateri',
    lead: 'Una superficie antichissima, coperta di crateri come nessun altro corpo.',
    facts: [['Diametro', '4.821 km (quasi come Mercurio)'], ['Distanza da Giove', '1.883.000 km'], ['Giro intorno a Giove', '16,7 giorni'], ['Età della superficie', 'circa 4 miliardi di anni'], ['Scoperta', '1610, Galileo Galilei']],
    html: '<p>Callisto è la terza luna più grande del Sistema Solare. La sua superficie scura è la più <b>craterizzata</b> che conosciamo: è rimasta quasi uguale per 4 miliardi di anni, perché non ha vulcani né movimenti della crosta.</p><p>Il cratere più grande, <b>Valhalla</b>, è circondato da anelli larghi circa 3.800 km, come le onde di un sasso nello stagno.</p><p>Essendo più lontana da Giove, riceve meno radiazioni: un giorno potrebbe ospitare una base per esplorare Giove.</p>',
    cur: ['Anche Callisto forse nasconde un oceano sotto la crosta.', 'Il nome viene da una ninfa della mitologia greca, trasformata nell\'Orsa Maggiore.', 'Callisto è la più lontana delle quattro lune galileiane.'],
    quiz: [
      { type: 'mc', q: 'Per cosa è famosa Callisto?', options: ['I vulcani', 'I tantissimi crateri', 'Gli anelli'], answer: 1, explain: 'È il corpo più craterizzato del Sistema Solare.' },
      { type: 'tf', q: 'La superficie di Callisto è molto giovane.', answer: false, explain: 'È antichissima: circa 4 miliardi di anni.' },
      { type: 'mc', q: 'Come si chiama il suo cratere più grande?', options: ['Valhalla', 'Olympus', 'Tycho'], answer: 0, explain: 'Valhalla, circondato da grandi anelli concentrici.' }
    ] },
  { id: 'titano', cat: 'moon', emoji: '🟠', color: '#e0a458', body: 'titan', sol: 'titan', r: 2575,
    name: ['Titano', 'Titan', 'Titan', 'Титан', 'Titan'], kind: 'Luna di Saturno con laghi di metano',
    lead: 'L\'unica luna con un\'atmosfera densa, e laghi e fiumi… di metano liquido.',
    facts: [['Diametro', '5.150 km (più di Mercurio)'], ['Distanza da Saturno', '1.222.000 km'], ['Giro intorno a Saturno', '15,9 giorni'], ['Atmosfera', 'soprattutto azoto, 1,5 volte la pressione terrestre'], ['Temperatura', 'circa −180 °C'], ['Scoperta', '1655, Christiaan Huygens']],
    html: '<p>Titano è la seconda luna più grande del Sistema Solare ed è avvolta da una <b>atmosfera arancione</b> più densa della nostra. Fa così freddo che il <b>metano</b> e l\'<b>etano</b> (che da noi sono gas) diventano liquidi: piovono, scorrono nei fiumi e riempiono laghi e mari!</p><p>Nel 2005 la sonda europea <b>Huygens</b> è atterrata su Titano: è l\'atterraggio più lontano mai fatto. Ha fotografato sassi di ghiaccio arrotondati, come i ciottoli di un fiume.</p><p>Nel 2028 partirà <b>Dragonfly</b>, un drone della NASA che volerà nei cieli di Titano.</p>',
    cur: ['Su Titano, con la sua gravità bassa e l\'aria densa, una persona con le ali potrebbe volare sbattendo le braccia!', 'È l\'unico posto oltre la Terra dove sappiamo che ci sono laghi in superficie.', 'Il mare più grande si chiama Kraken Mare.'],
    quiz: [
      { type: 'mc', q: 'Di cosa sono fatti i laghi di Titano?', options: ['Acqua', 'Metano ed etano liquidi', 'Lava'], answer: 1, explain: 'A −180 °C metano ed etano sono liquidi.' },
      { type: 'tf', q: 'Titano ha un\'atmosfera più densa di quella della Terra.', answer: true, explain: 'La pressione al suolo è circa 1,5 volte la nostra.' },
      { type: 'text', q: 'Come si chiamava la sonda atterrata su Titano nel 2005?', answer: ['huygens'], explain: 'Huygens, come l\'astronomo che scoprì Titano nel 1655.' }
    ] },
  { id: 'encelado', cat: 'moon', emoji: '❄️', color: '#f8fafc', body: 'enceladus', sol: 'enceladus', r: 252,
    name: ['Encelado', 'Enceladus', 'Encelade', 'Энцелад', 'Enceladus'], kind: 'Piccola luna di Saturno con geyser',
    lead: 'Una pallina di ghiaccio bianchissima che spruzza acqua nello spazio.',
    facts: [['Diametro', '504 km (circa la distanza in linea d\'aria tra Torino e Roma)'], ['Distanza da Saturno', '238.000 km'], ['Giro intorno a Saturno', '1,4 giorni'], ['Particolarità', 'più di 100 geyser al polo sud'], ['Scoperta', '1789, William Herschel']],
    html: '<p>Encelado è piccolo ma sorprendente. È l\'oggetto <b>più bianco</b> del Sistema Solare: riflette quasi tutta la luce del Sole, perché è coperto di ghiaccio pulito.</p><p>La sonda <b>Cassini</b> ha scoperto che dal polo sud escono <b>getti di vapore e ghiaccio</b> da lunghe crepe chiamate "strisce di tigre". L\'acqua viene da un <b>oceano salato</b> nascosto sotto il ghiaccio.</p><p>Cassini è passata in mezzo ai getti e ha trovato sale, composti del carbonio e idrogeno: ingredienti utili alla vita.</p>',
    cur: ['I getti di Encelado alimentano uno degli anelli di Saturno, l\'anello E.', 'Sulla sua superficie fa circa −200 °C.', 'Nel 2008 Cassini è passata a meno di 50 km dalla sua superficie.'],
    quiz: [
      { type: 'mc', q: 'Cosa esce dal polo sud di Encelado?', options: ['Lava', 'Getti di vapore e ghiaccio', 'Sabbia'], answer: 1, explain: 'Sono geyser alimentati da un oceano sotterraneo.' },
      { type: 'tf', q: 'Encelado è uno degli oggetti più bianchi del Sistema Solare.', answer: true, explain: 'Il ghiaccio pulito riflette quasi tutta la luce.' },
      { type: 'mc', q: 'Quale sonda ha scoperto i getti?', options: ['Cassini', 'Voyager 1', 'Curiosity'], answer: 0, explain: 'La sonda Cassini, nel 2005.' }
    ] },
  { id: 'tritone', cat: 'moon', emoji: '🩵', color: '#cbd5e1', body: 'triton', sol: 'triton', r: 1353,
    name: ['Tritone', 'Triton', 'Triton', 'Тритон', 'Triton'], kind: 'Luna di Nettuno che gira al contrario',
    lead: 'Una luna "rapita": forse veniva dalla fascia di Kuiper ed è stata catturata da Nettuno.',
    facts: [['Diametro', '2.707 km'], ['Distanza da Nettuno', '355.000 km'], ['Giro intorno a Nettuno', '5,9 giorni, in senso contrario'], ['Temperatura', 'circa −235 °C'], ['Scoperta', '1846, William Lassell (17 giorni dopo Nettuno)']],
    html: '<p>Tritone è l\'unica grande luna che gira intorno al suo pianeta <b>al contrario</b> rispetto alla rotazione del pianeta. Per questo gli scienziati pensano che non sia nato lì: era un oggetto della <b>fascia di Kuiper</b>, simile a Plutone, catturato dalla gravità di Nettuno.</p><p>È uno dei posti più freddi mai misurati. Eppure <b>Voyager 2</b> nel 1989 ha visto dei <b>geyser</b> di azoto che lanciano polvere scura fino a 8 km di altezza.</p>',
    cur: ['Tritone si sta lentamente avvicinando a Nettuno: tra miliardi di anni potrebbe spezzarsi e formare un anello.', 'Una parte della sua superficie ricorda la buccia di un melone.', 'Tritone contiene più del 99% della massa di tutte le lune di Nettuno.'],
    quiz: [
      { type: 'tf', q: 'Tritone gira intorno a Nettuno al contrario.', answer: true, explain: 'Ha un\'orbita retrograda: per questo si pensa sia stato catturato.' },
      { type: 'mc', q: 'Da dove viene probabilmente Tritone?', options: ['Dalla fascia di Kuiper', 'Dal Sole', 'Da Marte'], answer: 0, explain: 'Era un corpo simile a Plutone, catturato da Nettuno.' },
      { type: 'mc', q: 'Cosa ha visto Voyager 2 su Tritone?', options: ['Oceani', 'Geyser di azoto', 'Alberi'], answer: 1, explain: 'Getti di azoto con polvere scura.' }
    ] },

  /* ======================= COMETE ======================= */
  { id: 'halley', cat: 'comet', emoji: '☄️', color: '#93c5fd', body: 'comet', r: 5.5,
    name: ['Cometa di Halley', "Halley's Comet", 'Comète de Halley', 'Комета Галлея', 'Cometa Halley'], kind: 'Cometa periodica (1P/Halley)',
    lead: 'La cometa più famosa: torna ogni 76 anni circa. La prossima volta sarà nel 2061.',
    facts: [['Nucleo', 'circa 15 × 8 km'], ['Periodo', 'circa 76 anni'], ['Ultimo passaggio', '1986'], ['Prossimo passaggio', '2061'], ['Orbita', 'da 0,6 UA (dentro l\'orbita di Venere) a 35 UA (oltre Nettuno)']],
    html: '<p>Una cometa è come una <b>palla di neve sporca</b>: ghiaccio, polvere e rocce. Quando si avvicina al Sole il ghiaccio evapora e forma una grande nube, la <b>chioma</b>, e una o due <b>code</b> lunghe milioni di km, che puntano sempre in direzione opposta al Sole.</p><p>L\'astronomo <b>Edmond Halley</b> capì che le comete viste nel 1531, 1607 e 1682 erano la stessa e predisse il suo ritorno nel 1758. Morì prima, ma la cometa tornò davvero: da allora porta il suo nome.</p><p>Nel 1986 la sonda europea <b>Giotto</b> la fotografò da soli 600 km.</p>',
    cur: ['La cometa di Halley appare anche nell\'arazzo di Bayeux, che racconta l\'anno 1066.', 'La sonda Giotto si chiama così per il pittore che, nel 1305, dipinse una cometa come stella di Betlemme a Padova.', 'Le stelle cadenti di ottobre (Orionidi) e di maggio sono briciole della cometa di Halley.'],
    quiz: [
      { type: 'num', q: 'Ogni quanti anni circa torna la cometa di Halley?', answer: 76, tol: 2, unit: 'anni', explain: 'Circa ogni 76 anni (tra 74 e 79).' },
      { type: 'mc', q: 'Da cosa è fatta una cometa?', options: ['Solo roccia', 'Ghiaccio, polvere e roccia', 'Fuoco'], answer: 1, explain: 'È come una palla di neve sporca.' },
      { type: 'tf', q: 'La coda di una cometa punta sempre lontano dal Sole.', answer: true, explain: 'La spingono la luce e il vento solare.' }
    ] },
  { id: 'hale-bopp', cat: 'comet', emoji: '☄️', color: '#bfdbfe', body: 'comet', r: 30,
    name: ['Cometa Hale-Bopp', 'Comet Hale–Bopp', 'Comète Hale-Bopp', 'Комета Хейла — Боппа', 'Cometa Hale-Bopp'], kind: 'Grande cometa (C/1995 O1)',
    lead: 'Una delle comete più luminose del Novecento, visibile a occhio nudo per 18 mesi.',
    facts: [['Nucleo', 'circa 60 km (molto grande)'], ['Scoperta', '23 luglio 1995 (Alan Hale e Thomas Bopp)'], ['Massima luminosità', 'primavera 1997'], ['Periodo', 'circa 2.400 anni'], ['Code', 'due ben visibili: blu (di gas) e bianca (di polvere)']],
    html: '<p>Hale-Bopp fu scoperta nello stesso giorno da due persone diverse, in due stati americani lontani. Aveva un nucleo enorme, forse 60 km, per questo era luminosissima anche lontano dal Sole.</p><p>Nel 1997 milioni di persone la videro a occhio nudo, anche dalle città, con le sue <b>due code</b>: quella <b>blu</b> di gas elettricamente carico, dritta, e quella <b>bianco-gialla</b> di polvere, curva.</p><p>Tornerà tra più di 2.000 anni.</p>',
    cur: ['Rimase visibile a occhio nudo per circa 18 mesi: un record.', 'Thomas Bopp la scoprì con un telescopio prestato da un amico.', 'L\'ultima volta che era passata vicino al Sole, in Egitto si costruivano le piramidi… più o meno!'],
    quiz: [
      { type: 'mc', q: 'Quante code mostrava Hale-Bopp?', options: ['Nessuna', 'Due: una blu e una bianca', 'Dieci'], answer: 1, explain: 'Una coda di gas (blu) e una di polvere (bianca).' },
      { type: 'num', q: 'In che anno Hale-Bopp fu più luminosa?', answer: 1997, explain: 'Nella primavera del 1997.' },
      { type: 'tf', q: 'Hale-Bopp tornerà tra circa 76 anni.', answer: false, explain: 'Il suo periodo è di circa 2.400 anni.' }
    ] },
  { id: '67p', cat: 'comet', emoji: '🦆', color: '#78716c', body: 'comet67p', r: 2,
    name: ['Cometa 67P', 'Comet 67P', 'Comète 67P', 'Комета Чурюмова — Герасименко', 'Cometa 67P'], kind: 'Cometa periodica (67P/Churyumov-Gerasimenko)',
    lead: 'La cometa a forma di paperella su cui è atterrato un robot europeo.',
    facts: [['Nucleo', 'circa 4 km × 3,5 km (due lobi)'], ['Periodo', '6,4 anni'], ['Scoperta', '1969, Klim Churyumov e Svetlana Gerasimenko'], ['Esplorazione', 'sonda Rosetta (2014–2016) e lander Philae'], ['Forma', 'come una paperella di gomma']],
    html: '<p>La cometa 67P è famosa grazie alla missione europea <b>Rosetta</b>, che l\'ha raggiunta nel 2014 dopo un viaggio di 10 anni e l\'ha accompagnata per due anni intorno al Sole.</p><p>Il 12 novembre 2014 il piccolo robot <b>Philae</b> è atterrato sulla sua superficie: per la prima volta l\'umanità si è posata su una cometa! Philae ha rimbalzato due volte ed è finito in un posto in ombra, ma ha fatto in tempo a mandare dati preziosi.</p><p>La sua forma, con due lobi uniti da un "collo", ricorda una <b>paperella</b>.</p>',
    cur: ['La gravità su 67P è debolissima: un salto ti manderebbe nello spazio.', 'Rosetta prende il nome dalla stele di Rosetta, che aiutò a capire i geroglifici.', 'Su 67P sono state trovate molecole organiche, i "mattoni" della chimica della vita.'],
    quiz: [
      { type: 'mc', q: 'Come si chiamava il lander atterrato su 67P?', options: ['Philae', 'Huygens', 'Curiosity'], answer: 0, explain: 'Philae, trasportato dalla sonda Rosetta.' },
      { type: 'mc', q: 'A cosa assomiglia 67P?', options: ['A una palla', 'A una paperella', 'A un cubo'], answer: 1, explain: 'Ha due lobi uniti da un collo.' },
      { type: 'num', q: 'In che anno Philae è atterrato sulla cometa?', answer: 2014, explain: 'Il 12 novembre 2014.' }
    ] },
  { id: 'shoemaker-levy', cat: 'comet', emoji: '💥', color: '#fca5a5', body: 'comet', r: 1,
    name: ['Cometa Shoemaker-Levy 9', 'Comet Shoemaker–Levy 9', 'Comète Shoemaker-Levy 9', 'Комета Шумейкеров — Леви 9', 'Cometa Shoemaker-Levy 9'], kind: 'Cometa caduta su Giove (D/1993 F2)',
    lead: 'La cometa che nel 1994 si è schiantata su Giove, sotto gli occhi di tutti i telescopi.',
    facts: [['Scoperta', 'marzo 1993 (Carolyn e Eugene Shoemaker, David Levy)'], ['Frammenti', '21 pezzi visibili, in fila come le perle di una collana'], ['Impatti', 'dal 16 al 22 luglio 1994'], ['Macchie lasciate', 'alcune più grandi della Terra']],
    html: '<p>Questa cometa era stata <b>catturata da Giove</b> e nel 1992 era passata così vicina al pianeta che la sua gravità l\'aveva <b>spezzata in più di 20 pezzi</b>.</p><p>Nel luglio 1994 i frammenti, uno dopo l\'altro, sono caduti su Giove a 60 km al secondo. Le esplosioni hanno lasciato <b>macchie scure</b> nell\'atmosfera visibili anche con piccoli telescopi per settimane.</p><p>Fu la prima volta che l\'umanità vide uno scontro tra due corpi del Sistema Solare.</p>',
    cur: ['Il frammento più grande (G) liberò un\'energia enorme e lasciò una macchia grande quanto la Terra.', 'Questo evento ha fatto capire quanto è importante sorvegliare gli asteroidi vicini alla Terra.', 'La sonda Galileo, in viaggio verso Giove, vide gli impatti da vicino.'],
    quiz: [
      { type: 'mc', q: 'Dove è caduta la cometa Shoemaker-Levy 9?', options: ['Sulla Terra', 'Su Giove', 'Sul Sole'], answer: 1, explain: 'Su Giove, nel luglio 1994.' },
      { type: 'tf', q: 'Prima di cadere, la cometa si era spezzata in più di 20 pezzi.', answer: true, explain: 'La gravità di Giove l\'aveva frammentata nel 1992.' },
      { type: 'num', q: 'In che anno avvennero gli impatti?', answer: 1994, explain: 'Dal 16 al 22 luglio 1994.' }
    ] }
]);
