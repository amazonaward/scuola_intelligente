/* Programma scolastico per anno e materia (testi in italiano = lingua di riferimento).
   Le traduzioni dei titoli stanno in data/i18n/curriculum.<lingua>.js
   Formato voce: [id, titolo, descrizione breve]
   id = <anno>-<materia>-<slug>   anno: p1..p5 (primaria), m1..m3 (secondaria di I grado) */
window.CURRICULUM = {
  years: ['p1', 'p2', 'p3', 'p4', 'p5', 'm1', 'm2', 'm3'],
  subjects: ['ita', 'mat', 'sci', 'sto', 'geo', 'ing', 'tec', 'lat'],
  reference: 'Indicazioni nazionali per il curricolo – D.M. 221 del 9 dicembre 2025 (in vigore dall\'a.s. 2026/27, a partire dalle classi prime)',
  program: {
    p1: {
      ita: [
        ['p1-ita-vocali-consonanti', 'Le vocali e le consonanti', 'Riconoscere i suoni delle lettere e scriverle'],
        ['p1-ita-alfabeto', "L'alfabeto", 'Le 21 lettere italiane in ordine, stampato e corsivo'],
        ['p1-ita-sillabe', 'Le sillabe', 'Dividere le parole in sillabe battendo le mani'],
        ['p1-ita-digrammi', 'Digrammi: CHI, CHE, GHI, GHE, GN, GL, SC', 'Suoni difficili e come si scrivono'],
        ['p1-ita-prime-frasi', 'Le prime frasi', 'Leggere e scrivere semplici frasi'],
        ['p1-ita-maiuscola-punto', 'Maiuscola e punto', 'Dove si mettono la lettera maiuscola e il punto']
      ],
      mat: [
        ['p1-mat-numeri-20', 'I numeri fino a 20', 'Contare, leggere e scrivere i numeri da 0 a 20'],
        ['p1-mat-confronto', 'Maggiore, minore, uguale', 'Confrontare quantità e numeri con >, <, ='],
        ['p1-mat-addizioni-20', 'Le addizioni entro il 20', 'Aggiungere, mettere insieme, contare avanti'],
        ['p1-mat-sottrazioni-20', 'Le sottrazioni entro il 20', 'Togliere, contare indietro, trovare la differenza'],
        ['p1-mat-decine-unita', 'Decine e unità', 'Raggruppare per 10: il valore delle cifre'],
        ['p1-mat-forme', 'Le forme intorno a noi', 'Cerchio, quadrato, triangolo, rettangolo'],
        ['p1-mat-spazio', 'Sopra, sotto, destra, sinistra', 'Orientarsi nello spazio e sul foglio']
      ],
      sci: [
        ['p1-sci-cinque-sensi', 'I cinque sensi', 'Vista, udito, olfatto, gusto e tatto'],
        ['p1-sci-materiali', 'Gli oggetti e i materiali', 'Legno, plastica, metallo, vetro, carta, stoffa'],
        ['p1-sci-stagioni', 'Le stagioni', 'Come cambia la natura durante l\'anno'],
        ['p1-sci-corpo', 'Il mio corpo', 'Le parti del corpo e come prendersene cura']
      ],
      sto: [
        ['p1-sto-prima-dopo', 'Prima, adesso, dopo', 'Mettere in ordine i fatti nel tempo'],
        ['p1-sto-giornata', 'La giornata e la settimana', 'Mattina, pomeriggio, sera, notte; i giorni della settimana'],
        ['p1-sto-mesi', "I mesi e l'anno", 'I 12 mesi e il calendario'],
        ['p1-sto-mia-storia', 'La mia storia', 'Come ero da piccolo e come sono adesso'],
        ['p1-sto-racconti-antichi', 'Racconti dal passato', 'Storie dalla Bibbia, dai miti greci e dall\'Odissea']
      ],
      geo: [
        ['p1-geo-posizioni', 'Le posizioni nello spazio', 'Davanti, dietro, vicino, lontano, dentro, fuori'],
        ['p1-geo-percorsi', 'I percorsi', 'Descrivere e disegnare un percorso'],
        ['p1-geo-spazi-casa-scuola', 'Gli spazi della casa e della scuola', 'Le stanze e a cosa servono']
      ],
      ing: [
        ['p1-ing-hello', 'Hello! Saluti e presentazioni', 'Hello, goodbye, my name is…'],
        ['p1-ing-colours', 'Colours', 'I colori in inglese'],
        ['p1-ing-numbers-10', 'Numbers 1–10', 'Contare fino a 10 in inglese'],
        ['p1-ing-school', 'At school', 'Gli oggetti della scuola']
      ],
      tec: [
        ['p1-tec-oggetti', "Oggetti e materiali", "A cosa servono e di cosa sono fatti"],
        ['p1-tec-coding-unplugged', "Coding senza computer", "Dare istruzioni in ordine"]
      ]
    },
    p2: {
      ita: [
        ['p2-ita-doppie', 'Le doppie', 'Sentire e scrivere le consonanti doppie'],
        ['p2-ita-accento-apostrofo', "L'accento e l'apostrofo", 'Quando si usano e come si scrivono'],
        ['p2-ita-nomi', 'I nomi', 'Nomi comuni e propri, maschili e femminili, singolari e plurali'],
        ['p2-ita-articoli', 'Gli articoli', 'Il, lo, la, i, gli, le, un, uno, una'],
        ['p2-ita-aggettivi', 'Gli aggettivi qualificativi', 'Parole che descrivono le qualità'],
        ['p2-ita-verbi-azioni', 'I verbi: le azioni', 'Riconoscere le azioni nelle frasi'],
        ['p2-ita-racconto', 'Il racconto', 'Inizio, svolgimento e conclusione']
      ],
      mat: [
        ['p2-mat-numeri-100', 'I numeri fino a 100', 'Decine e unità, contare a salti'],
        ['p2-mat-addizioni-colonna', 'Addizioni in colonna', 'Con e senza cambio (riporto)'],
        ['p2-mat-sottrazioni-colonna', 'Sottrazioni in colonna', 'Con e senza prestito'],
        ['p2-mat-tabelline', 'Le tabelline', 'Moltiplicare come addizione ripetuta'],
        ['p2-mat-divisione-intro', 'La divisione: distribuire', 'Dividere in parti uguali'],
        ['p2-mat-problemi', 'I primi problemi', 'Leggere, capire e risolvere'],
        ['p2-mat-misure', 'Misurare', 'Lungo e corto, pesante e leggero; il metro']
      ],
      sci: [
        ['p2-sci-viventi-non-viventi', 'Esseri viventi e non viventi', 'Nascono, crescono, si nutrono, si riproducono, muoiono'],
        ['p2-sci-animali', 'Gli animali', 'Come si muovono, cosa mangiano, dove vivono'],
        ['p2-sci-piante-parti', 'Le parti della pianta', 'Radice, fusto, foglie, fiore, frutto'],
        ['p2-sci-acqua-stati', "L'acqua e i suoi stati", 'Solido, liquido, gassoso']
      ],
      sto: [
        ['p2-sto-orologio', "L'orologio", 'Leggere le ore e i minuti'],
        ['p2-sto-calendario', 'Il calendario', 'Giorni, settimane, mesi, stagioni'],
        ['p2-sto-fonti', 'Le fonti', 'Come facciamo a sapere cosa è successo?'],
        ['p2-sto-cambiamenti', 'Le cose cambiano', 'Persone, oggetti e luoghi nel tempo'],
        ['p2-sto-racconti-italia', 'Storie della nostra Italia', 'L\'Inno di Mameli e i racconti del Risorgimento']
      ],
      geo: [
        ['p2-geo-punti-riferimento', 'I punti di riferimento', 'Orientarsi con ciò che vediamo intorno'],
        ['p2-geo-mappe', 'Piante e mappe', 'Vedere dall\'alto, la legenda'],
        ['p2-geo-quartiere', 'Il quartiere e la città', 'Strade, piazze, servizi']
      ],
      ing: [
        ['p2-ing-animals-colours', 'Animals and colours', 'Gli animali e i colori in inglese'],
        ['p2-ing-family', 'My family', 'I membri della famiglia'],
        ['p2-ing-food', 'Food', 'Cibi e bevande, I like / I don\'t like'],
        ['p2-ing-numbers-20', 'Numbers 1–20', 'Contare fino a 20']
      ],
      tec: [
        ['p2-tec-computer', "Il computer e le sue parti", "Tastiera, mouse, schermo, memoria"],
        ['p2-tec-algoritmi', "Gli algoritmi di tutti i giorni", "Ricette e procedure passo per passo"]
      ]
    },
    p3: {
      ita: [
        ['p3-ita-nomi-approfondimento', 'I nomi: collettivi, composti, alterati', 'Approfondimento sui nomi'],
        ['p3-ita-verbo-essere-avere', 'I verbi essere e avere', 'Coniugazione e uso'],
        ['p3-ita-coniugazioni', 'Le tre coniugazioni', '-are, -ere, -ire; passato, presente, futuro'],
        ['p3-ita-frase-minima', 'La frase minima', 'Soggetto e predicato'],
        ['p3-ita-testo-descrittivo', 'Il testo descrittivo', 'Descrivere persone, animali, luoghi'],
        ['p3-ita-fiaba-favola', 'Fiaba e favola', 'Personaggi, magia e morale']
      ],
      mat: [
        ['p3-mat-numeri-1000', 'I numeri fino a 1000', 'Centinaia, decine, unità'],
        ['p3-mat-moltiplicazioni-colonna', 'Moltiplicazioni in colonna', 'Per una e due cifre'],
        ['p3-mat-divisioni', 'Le divisioni', 'Con il resto e la prova'],
        ['p3-mat-frazioni-intro', 'Le frazioni: introduzione', "Dividere l'intero in parti uguali"],
        ['p3-mat-linee-angoli', 'Linee e angoli', 'Rette, semirette, segmenti, angoli'],
        ['p3-mat-misure-lunghezza', 'Le misure di lunghezza', 'm, dm, cm, mm'],
        ['p3-mat-statistica', 'Indagini e grafici', 'Raccogliere dati e rappresentarli']
      ],
      sci: [
        ['p3-sci-ciclo-acqua', "Il ciclo dell'acqua", 'Evaporazione, condensazione, precipitazione'],
        ['p3-sci-metodo-scientifico', 'Il metodo scientifico', 'Osservare, ipotizzare, sperimentare'],
        ['p3-sci-aria', "L'aria", 'Cos\'è, cosa contiene, perché è importante'],
        ['p3-sci-suolo', 'Il suolo', 'Gli strati del terreno e chi ci vive'],
        ['p3-sci-catene-alimentari', 'Le catene alimentari', 'Produttori, consumatori, decompositori']
      ],
      sto: [
        ['p3-sto-storia-della-terra', 'La storia della Terra', 'Dal Big Bang ai dinosauri'],
        ['p3-sto-linea-tempo', 'La linea del tempo', 'a.C. e d.C., secoli e millenni'],
        ['p3-sto-primi-uomini', 'I primi esseri umani', 'Dagli ominidi all\'Homo sapiens'],
        ['p3-sto-paleolitico', 'Il Paleolitico', 'Caccia, raccolta e scoperta del fuoco'],
        ['p3-sto-neolitico', 'Il Neolitico', 'Agricoltura, allevamento e villaggi'],
        ['p3-sto-eta-metalli', "L'età dei metalli", 'Rame, bronzo e ferro']
      ],
      geo: [
        ['p3-geo-paesaggi', 'I paesaggi', 'Montagna, collina, pianura, mare'],
        ['p3-geo-mare-coste', 'Il mare e le coste', 'Costa, isola, arcipelago, penisola, golfo, stretto…'],
        ['p3-geo-punti-cardinali', 'I punti cardinali', 'Nord, Sud, Est, Ovest; la bussola'],
        ['p3-geo-fiumi-laghi', 'Fiumi e laghi', 'Dalla sorgente alla foce'],
        ['p3-geo-carte', 'Le carte geografiche', 'Scala, simboli, tipi di carte']
      ],
      ing: [
        ['p3-ing-body', 'My body', 'Le parti del corpo'],
        ['p3-ing-clothes', 'Clothes', 'I vestiti e il tempo atmosferico'],
        ['p3-ing-house', 'My house', 'Le stanze e gli arredi; there is / there are'],
        ['p3-ing-can', 'I can…', 'Abilità: can / can\'t']
      ],
      tec: [
        ['p3-tec-coding-blocchi', "Programmare a blocchi", "Sequenze e cicli"],
        ['p3-tec-disegno-misura', "Disegnare e misurare", "Righello, squadra e progetti"]
      ]
    },
    p4: {
      ita: [
        ['p4-ita-pronomi', 'I pronomi', 'Personali, possessivi, dimostrativi'],
        ['p4-ita-modi-verbo', 'I modi del verbo', 'Indicativo, congiuntivo, condizionale, imperativo'],
        ['p4-ita-complementi', 'I complementi', 'Oggetto e principali complementi indiretti'],
        ['p4-ita-testo-narrativo', 'Il testo narrativo', 'Narratore, tempo, luogo, sequenze'],
        ['p4-ita-poesia', 'La poesia', 'Versi, strofe, rime e similitudini'],
        ['p4-ita-riassunto', 'Il riassunto', 'Individuare le informazioni importanti']
      ],
      mat: [
        ['p4-mat-grandi-numeri', 'I grandi numeri', 'Migliaia e milioni'],
        ['p4-mat-frazioni', 'Le frazioni', 'Frazioni proprie, improprie, apparenti ed equivalenti'],
        ['p4-mat-numeri-decimali', 'I numeri decimali', 'Decimi, centesimi, millesimi'],
        ['p4-mat-divisioni-due-cifre', 'Divisioni con due cifre al divisore', 'Strategie e prova'],
        ['p4-mat-poligoni', 'I poligoni', 'Triangoli e quadrilateri'],
        ['p4-mat-perimetro', 'Il perimetro', 'Misurare il contorno delle figure'],
        ['p4-mat-misure', 'Le misure', 'Massa, capacità, valore (euro)']
      ],
      sci: [
        ['p4-sci-piante', 'Le piante e la fotosintesi', 'Come le piante producono il loro cibo'],
        ['p4-sci-classificazione-animali', 'La classificazione degli animali', 'Vertebrati e invertebrati'],
        ['p4-sci-ecosistemi', 'Gli ecosistemi', 'Habitat, equilibri e biodiversità'],
        ['p4-sci-materia', 'La materia', 'Atomi, stati e passaggi di stato'],
        ['p4-sci-calore', 'Calore e temperatura', 'Il termometro e la dilatazione']
      ],
      sto: [
        ['p4-sto-mesopotamia', 'Le civiltà della Mesopotamia', 'Sumeri, Babilonesi, Assiri'],
        ['p4-sto-egizi', 'Gli Egizi', 'Il Nilo, i faraoni, le piramidi e la scrittura'],
        ['p4-sto-indo-cina', "Le civiltà dell'Indo e della Cina", 'Città pianificate e dinastie'],
        ['p4-sto-ebrei-fenici', 'Ebrei e Fenici', 'Il monoteismo e l\'alfabeto'],
        ['p4-sto-cretesi-micenei', 'Cretesi e Micenei', 'Le civiltà del mare Egeo'],
        ['p4-sto-greci', 'La civiltà greca', 'Le polis, Atene e Sparta, miti e Olimpiadi'],
        ['p4-sto-alessandro', 'Alessandro Magno', "L'ellenismo"]
      ],
      geo: [
        ['p4-geo-italia-fisica', "L'Italia fisica", 'Monti, pianure, fiumi, laghi, mari, isole'],
        ['p4-geo-clima', 'Il clima', 'Tempo atmosferico e fasce climatiche'],
        ['p4-geo-settori-economici', "Le attività dell'uomo", 'Settore primario, secondario, terziario'],
        ['p4-geo-italia-politica', "L'Italia politica", 'Stato, regioni, province, comuni']
      ],
      ing: [
        ['p4-ing-daily-routine', 'Daily routine', 'La giornata tipo e le ore'],
        ['p4-ing-present-continuous', 'What are you doing?', 'Present continuous'],
        ['p4-ing-places-town', 'Places in town', 'Luoghi della città e indicazioni'],
        ['p4-ing-animals-habitats', 'Wild animals', 'Animali e habitat']
      ],
      tec: [
        ['p4-tec-condizioni', "Se… allora: le condizioni", "Decidere nel coding"],
        ['p4-tec-internet-sicuro', "Internet in sicurezza", "Navigare, password e privacy"]
      ]
    },
    p5: {
      ita: [
        ['p5-ita-analisi-grammaticale', "L'analisi grammaticale", 'Le nove parti del discorso'],
        ['p5-ita-analisi-logica', "L'analisi logica", 'Soggetto, predicato e complementi'],
        ['p5-ita-verbi-transitivi', 'Verbi transitivi e intransitivi', 'Forma attiva, passiva e riflessiva'],
        ['p5-ita-testo-argomentativo', 'Il testo argomentativo', 'Tesi, argomenti, conclusione'],
        ['p5-ita-testo-regolativo', 'Il testo regolativo', 'Istruzioni e regole'],
        ['p5-ita-lessico', 'Il lessico', 'Sinonimi, contrari, prefissi e suffissi']
      ],
      mat: [
        ['p5-mat-numeri-relativi-intro', 'I numeri relativi', 'Numeri positivi e negativi'],
        ['p5-mat-operazioni-decimali', 'Operazioni con i decimali', 'Le quattro operazioni con la virgola'],
        ['p5-mat-percentuali', 'Le percentuali', 'Sconti, aumenti, grafici a torta'],
        ['p5-mat-potenze-intro', 'Le potenze', 'Base, esponente, potenze di 10'],
        ['p5-mat-perimetro-area', 'Perimetro e area', 'Dei principali poligoni'],
        ['p5-mat-cerchio', 'Il cerchio', 'Circonferenza, raggio, diametro e π'],
        ['p5-mat-solidi-intro', 'I solidi', 'Poliedri e solidi di rotazione'],
        ['p5-mat-probabilita', 'Probabilità e statistica', 'Media, moda, eventi certi e impossibili']
      ],
      sci: [
        ['p5-sci-sistema-solare', 'Il Sistema Solare', 'Il Sole, i pianeti e i loro movimenti'],
        ['p5-sci-corpo-umano', 'Il corpo umano', 'Cellule, tessuti, organi, apparati'],
        ['p5-sci-alimentazione', "L'alimentazione", 'I nutrienti e la piramide alimentare'],
        ['p5-sci-energia', "L'energia", 'Fonti rinnovabili e non rinnovabili'],
        ['p5-sci-luce-suono', 'Luce e suono', 'Come si propagano']
      ],
      sto: [
        ['p5-sto-italici-etruschi', 'Popoli italici ed Etruschi', "L'Italia prima di Roma"],
        ['p5-sto-roma-monarchia-repubblica', 'Roma: monarchia e repubblica', 'Dalla fondazione alle guerre puniche'],
        ['p5-sto-romani', "L'Impero romano", 'Augusto, la vita quotidiana, strade e acquedotti'],
        ['p5-sto-cristianesimo-caduta', 'Cristianesimo e fine dell\'Impero', 'Fino al 476 d.C.'],
        ['p5-sto-regni-romano-barbarici', 'I regni romano-barbarici', 'I popoli germanici in Europa'],
        ['p5-sto-giustiniano-monachesimo', 'Giustiniano e il monachesimo', 'Il diritto romano e le biblioteche dei monasteri'],
        ['p5-sto-espansione-islamica', "L'espansione islamica", 'Maometto e la nascita dell\'Islam']
      ],
      geo: [
        ['p5-geo-regioni-nord', "Le regioni dell'Italia settentrionale", 'Caratteristiche fisiche ed economiche'],
        ['p5-geo-regioni-centro', "Le regioni dell'Italia centrale", 'Caratteristiche fisiche ed economiche'],
        ['p5-geo-regioni-sud-isole', "Le regioni del Sud e delle isole", 'Caratteristiche fisiche ed economiche'],
        ['p5-geo-costituzione', 'La Costituzione e lo Stato', 'Parlamento, Governo, Magistratura'],
        ['p5-geo-unione-europea', "L'Unione Europea", 'Gli Stati membri e le istituzioni']
      ],
      ing: [
        ['p5-ing-past-simple-be', 'Was / were', 'Il passato del verbo essere'],
        ['p5-ing-comparatives', 'Comparatives', 'bigger than, more beautiful than'],
        ['p5-ing-jobs', 'Jobs', 'I mestieri'],
        ['p5-ing-uk', 'The United Kingdom', 'Paesi, capitali e tradizioni']
      ],
      tec: [
        ['p5-tec-dati-binario', "Dati e codice binario", "Come il computer rappresenta le informazioni"],
        ['p5-tec-ia-intro', "Che cos'è l'intelligenza artificiale", "Macchine che imparano dagli esempi"]
      ]
    },
    m1: {
      ita: [
        ['m1-ita-fonologia-ortografia', 'Fonologia e ortografia', 'Suoni, lettere e regole di scrittura'],
        ['m1-ita-morfologia', 'La morfologia', 'Le parti variabili e invariabili del discorso'],
        ['m1-ita-epica', "L'epica", 'Iliade, Odissea, Eneide'],
        ['m1-ita-mito-leggenda', 'Mito e leggenda', 'Racconti delle origini'],
        ['m1-ita-favola-fiaba', 'Favola e fiaba', 'Esopo, Fedro, Perrault, Grimm'],
        ['m1-ita-testo-espressivo', 'Il diario e la lettera', 'Scrivere di sé']
      ],
      mat: [
        ['m1-mat-insiemi', 'Gli insiemi', 'Rappresentazione e operazioni'],
        ['m1-mat-numeri-naturali', 'I numeri naturali e le quattro operazioni', 'Proprietà delle operazioni'],
        ['m1-mat-potenze', 'Le potenze', 'Proprietà e notazione scientifica'],
        ['m1-mat-numeri-primi-mcd-mcm', 'Numeri primi, MCD e mcm', 'Divisibilità e scomposizione in fattori'],
        ['m1-mat-frazioni', 'Le frazioni e le operazioni', 'Semplificare, confrontare, calcolare'],
        ['m1-mat-geometria-base', 'Enti geometrici fondamentali', 'Punto, retta, piano, segmenti, angoli'],
        ['m1-mat-triangoli', 'I triangoli', 'Classificazione e punti notevoli']
      ],
      sci: [
        ['m1-sci-metodo-misura', 'Il metodo scientifico e la misura', 'Grandezze e unità di misura'],
        ['m1-sci-materia-stati', 'La materia e i suoi stati', 'Passaggi di stato e temperatura'],
        ['m1-sci-cellula', 'La cellula', 'L\'unità fondamentale della vita'],
        ['m1-sci-regni-viventi', 'I cinque regni dei viventi', 'Classificare gli esseri viventi'],
        ['m1-sci-piante', 'Le piante', 'Struttura, riproduzione, fotosintesi'],
        ['m1-sci-animali-invertebrati-vertebrati', 'Gli animali', 'Invertebrati e vertebrati']
      ],
      sto: [
        ['m1-sto-bizantini-longobardi', 'Bizantini, Longobardi e monachesimo', "L'Alto Medioevo in Italia"],
        ['m1-sto-islam', "L'Islam e il Mediterraneo", 'Arabi, commerci e cultura'],
        ['m1-sto-carlo-magno-feudalesimo', 'Carlo Magno e il feudalesimo', 'Il Sacro Romano Impero'],
        ['m1-sto-comuni', "L'età dei Comuni", 'Rinascita delle città e dei commerci'],
        ['m1-sto-crociate', 'Le crociate', 'Cause e conseguenze'],
        ['m1-sto-crisi-trecento', 'La crisi del Trecento', 'La peste nera'],
        ['m1-sto-umanesimo-rinascimento', 'Umanesimo e Rinascimento', "L'uomo al centro"],
        ['m1-sto-scoperte-geografiche', 'Le scoperte geografiche', 'Colombo, Vasco da Gama, Magellano'],
        ['m1-sto-riforma', 'Riforma e Controriforma', 'Lutero e il Concilio di Trento'],
        ['m1-sto-guerra-trentanni', "La guerra dei Trent'anni", 'La pace di Vestfalia (1648) e gli Stati europei']
      ],
      geo: [
        ['m1-geo-strumenti', 'Gli strumenti della geografia', 'Carte, coordinate, grafici'],
        ['m1-geo-coordinate', 'Latitudine e longitudine', 'Paralleli, meridiani e fusi orari'],
        ['m1-geo-rilievi-acque', "Rilievi e acque d'Europa e d'Italia", 'Il territorio fisico'],
        ['m1-geo-clima-ambienti', 'Climi e ambienti', 'Le fasce climatiche europee'],
        ['m1-geo-popolazione-citta', 'Popolazione e città', 'Densità, migrazioni, urbanizzazione']
      ],
      ing: [
        ['m1-ing-present-simple', 'Present simple', 'Abitudini e routine'],
        ['m1-ing-possessives', 'Possessive adjectives', 'my, your, his, her…'],
        ['m1-ing-there-is-are', 'There is / there are', 'Descrivere luoghi'],
        ['m1-ing-adverbs-frequency', 'Adverbs of frequency', 'always, usually, sometimes, never']
      ],
      tec: [
        ['m1-tec-disegno-tecnico', "Il disegno tecnico", "Strumenti e costruzioni geometriche"],
        ['m1-tec-materiali', "I materiali", "Legno, carta, metalli, plastiche, riciclo"],
        ['m1-tec-algoritmi-diagrammi', "Algoritmi e diagrammi di flusso", "Rappresentare un procedimento"],
        ['m1-tec-cittadinanza-digitale', "Cittadinanza digitale", "Comunicare online in modo responsabile"]
      ]
    },
    m2: {
      ita: [
        ['m2-ita-analisi-logica', "L'analisi logica", 'Soggetto, predicato e tutti i complementi'],
        ['m2-ita-testo-espositivo', 'Il testo espositivo', 'Informare in modo chiaro'],
        ['m2-ita-generi-narrativi', 'I generi narrativi', 'Giallo, horror, fantascienza, avventura'],
        ['m2-ita-letteratura-origini', 'Letteratura: dalle origini al Cinquecento', 'Dante, Petrarca, Boccaccio'],
        ['m2-ita-poesia', 'La poesia e le figure retoriche', 'Metafora, similitudine, anafora…']
      ],
      mat: [
        ['m2-mat-frazioni-decimali', 'Frazioni e numeri decimali', 'Numeri decimali periodici'],
        ['m2-mat-radici', 'La radice quadrata', 'Quadrati perfetti e approssimazioni'],
        ['m2-mat-rapporti-proporzioni', 'Rapporti e proporzioni', 'Proprietà e calcolo del termine incognito'],
        ['m2-mat-proporzionalita', 'Proporzionalità diretta e inversa', 'Grafici e problemi'],
        ['m2-mat-aree', 'Le aree dei poligoni', 'Formule dirette e inverse'],
        ['m2-mat-pitagora', 'Il teorema di Pitagora', 'Triangoli rettangoli e applicazioni'],
        ['m2-mat-trasformazioni', 'Le trasformazioni geometriche', 'Simmetrie, traslazioni, rotazioni, similitudine']
      ],
      sci: [
        ['m2-sci-chimica', 'Elementi, composti, reazioni', 'Atomi e molecole'],
        ['m2-sci-forze-moto', 'Forze e moto', 'Velocità, accelerazione, leve'],
        ['m2-sci-apparato-circolatorio', "L'apparato circolatorio", 'Cuore, vasi sanguigni e sangue'],
        ['m2-sci-apparato-digerente', "L'apparato digerente", 'Dalla bocca all\'intestino'],
        ['m2-sci-apparato-respiratorio', "L'apparato respiratorio", 'I polmoni e lo scambio dei gas'],
        ['m2-sci-scheletro-muscoli', 'Scheletro e muscoli', 'Il sistema locomotore']
      ],
      sto: [
        ['m2-sto-assolutismo', 'Assolutismo e rivoluzione scientifica', 'Luigi XIV, Galileo e Newton'],
        ['m2-sto-illuminismo', "L'Illuminismo", 'La ragione e i diritti'],
        ['m2-sto-rivoluzioni', 'Le rivoluzioni', 'Americana, francese e industriale'],
        ['m2-sto-napoleone', 'Napoleone', "Dall'ascesa al Congresso di Vienna"],
        ['m2-sto-risorgimento', 'Il Risorgimento', "L'unità d'Italia"],
        ['m2-sto-seconda-rivoluzione-industriale', 'La seconda rivoluzione industriale', 'Imperialismo e società di massa'],
        ['m2-sto-scienza-ottocento', "Le scoperte scientifiche dell'Ottocento", 'Elettricità, medicina, evoluzione']
      ],
      geo: [
        ['m2-geo-europa-unione', "L'Europa e l'Unione Europea", 'Storia e istituzioni'],
        ['m2-geo-europa-occidentale', "L'Europa occidentale", 'Francia, Spagna, Portogallo, Benelux'],
        ['m2-geo-europa-centrale', "L'Europa centrale", 'Germania, Austria, Svizzera, Polonia'],
        ['m2-geo-europa-orientale', "L'Europa orientale", 'Romania, Moldavia, Ucraina, Russia europea'],
        ['m2-geo-europa-mediterranea', "L'Europa mediterranea e balcanica", 'Grecia, Croazia, Balcani'],
        ['m2-geo-europa-nordica', "L'Europa del Nord", 'Paesi scandinavi, Regno Unito, Irlanda']
      ],
      ing: [
        ['m2-ing-past-simple', 'Past simple', 'Verbi regolari e irregolari'],
        ['m2-ing-future', 'Future: will / going to', 'Previsioni e intenzioni'],
        ['m2-ing-countable', 'Countable and uncountable', 'some, any, much, many'],
        ['m2-ing-past-continuous', 'Past continuous', 'Azioni in corso nel passato']
      ],
      tec: [
        ['m2-tec-proiezioni-ortogonali', "Le proiezioni ortogonali", "Disegnare un solido da tre lati"],
        ['m2-tec-programmazione', "Programmare: variabili e cicli", "Dal blocco al codice"],
        ['m2-tec-energia', "L'energia e le centrali", "Come si produce l'elettricità"],
        ['m2-tec-reti', "Le reti e Internet", "Come viaggiano i dati"]
      ],
      lat: [
        ['m2-lat-lettura', "Il latino: leggere e pronunciare", "Alfabeto, pronuncia e prime parole"],
        ['m2-lat-parole-italiano', "Dal latino all'italiano", "L'origine delle nostre parole"],
        ['m2-lat-prima-declinazione', "La prima declinazione", "Rosa, rosae: i casi"]
      ]
    },
    m3: {
      ita: [
        ['m3-ita-analisi-periodo', "L'analisi del periodo", 'Proposizioni principali, coordinate, subordinate'],
        ['m3-ita-testo-argomentativo', 'Il testo argomentativo', 'Sostenere una tesi'],
        ['m3-ita-letteratura-ottocento', "Letteratura dell'Ottocento", 'Foscolo, Leopardi, Manzoni, Verga'],
        ['m3-ita-letteratura-novecento', 'Letteratura del Novecento', 'Pascoli, D\'Annunzio, Ungaretti, Montale'],
        ['m3-ita-romanzo', 'Il romanzo', 'Storico, di formazione, sociale']
      ],
      mat: [
        ['m3-mat-numeri-relativi', 'I numeri relativi', 'Operazioni con i numeri relativi'],
        ['m3-mat-calcolo-letterale', 'Il calcolo letterale', 'Monomi e polinomi'],
        ['m3-mat-equazioni', 'Le equazioni di primo grado', 'Principi di equivalenza'],
        ['m3-mat-piano-cartesiano', 'Il piano cartesiano', 'Rette, funzioni e grafici'],
        ['m3-mat-cerchio', 'Circonferenza e cerchio', 'Lunghezza, area, settori'],
        ['m3-mat-solidi', 'I solidi: superficie e volume', 'Prismi, piramidi, cilindri, coni, sfere'],
        ['m3-mat-probabilita', 'Probabilità e statistica', 'Frequenze e probabilità']
      ],
      sci: [
        ['m3-sci-struttura-terra-vulcani', 'La struttura della Terra, vulcani e terremoti', 'Strati interni e tettonica delle placche'],
        ['m3-sci-universo', "L'Universo", 'Stelle, galassie, Big Bang'],
        ['m3-sci-sistema-nervoso', 'Il sistema nervoso', 'Cervello, nervi e sensi'],
        ['m3-sci-riproduzione-genetica', 'Riproduzione e genetica', 'DNA, Mendel ed ereditarietà'],
        ['m3-sci-elettricita', 'Elettricità e magnetismo', 'Circuiti, corrente, legge di Ohm'],
        ['m3-sci-evoluzione', "L'evoluzione", 'Darwin e la selezione naturale']
      ],
      sto: [
        ['m3-sto-prima-guerra-mondiale', 'La Prima guerra mondiale', '1914–1918'],
        ['m3-sto-totalitarismi', 'I totalitarismi', 'Fascismo, nazismo, comunismo sovietico'],
        ['m3-sto-seconda-guerra-mondiale', 'La Seconda guerra mondiale', '1939–1945, la Shoah e la Resistenza'],
        ['m3-sto-repubblica-italiana', 'La Repubblica italiana', 'La Costituzione e l\'Italia fino agli anni Novanta'],
        ['m3-sto-guerra-fredda', 'La guerra fredda', 'Il mondo diviso in due blocchi'],
        ['m3-sto-decolonizzazione', 'Decolonizzazione e Cina comunista', 'Nuovi Stati e nuove potenze'],
        ['m3-sto-globalizzazione', 'La globalizzazione e la sua crisi', 'Il mondo di oggi']
      ],
      geo: [
        ['m3-geo-pianeta', 'Il pianeta Terra', 'Continenti, oceani, climi'],
        ['m3-geo-globalizzazione', 'La globalizzazione', 'Economia e sviluppo nel mondo'],
        ['m3-geo-asia', "L'Asia", 'Cina, India, Giappone'],
        ['m3-geo-africa', "L'Africa", 'Ambienti, popoli, sfide'],
        ['m3-geo-america', 'Le Americhe', 'Nord, Centro e Sud America'],
        ['m3-geo-oceania', "L'Oceania e le terre polari", 'Australia, Antartide']
      ],
      ing: [
        ['m3-ing-present-perfect', 'Present perfect', 'ever, never, already, yet'],
        ['m3-ing-conditionals', 'Conditionals', 'Zero, first, second conditional'],
        ['m3-ing-passive', 'The passive', 'Forma passiva'],
        ['m3-ing-reported-speech', 'Reported speech', 'Il discorso indiretto']
      ],
      tec: [
        ['m3-tec-assonometria', "L'assonometria", "Disegnare in tre dimensioni"],
        ['m3-tec-elettricita-elettronica', "Elettricità ed elettronica", "Circuiti, componenti, sensori"],
        ['m3-tec-ia-dati', "Intelligenza artificiale e dati", "Come impara una macchina, rischi e opportunità"],
        ['m3-tec-robotica', "Robotica e automazione", "Sensori, attuatori e controllo"]
      ],
      lat: [
        ['m3-lat-casi-funzioni', "I casi e le funzioni logiche", "Il latino e l'analisi logica"],
        ['m3-lat-verbo-sum', "Il verbo sum e le coniugazioni", "Il presente indicativo"],
        ['m3-lat-motti-celebri', "Motti e frasi celebri", "Veni, vidi, vici e altre frasi famose"]
      ]
    }
  },
  /* Generatori di esercizi infiniti collegati agli argomenti (vedi js/generators.js) */
  gen: {
    'p1-mat-numeri-20': ['count20', 'compare20'],
    'p1-mat-confronto': ['compare20'],
    'p1-mat-addizioni-20': ['add20'],
    'p1-mat-sottrazioni-20': ['sub20'],
    'p1-mat-decine-unita': ['tensUnits'],
    'p2-mat-numeri-100': ['tensUnits', 'compare100'],
    'p2-mat-addizioni-colonna': ['add100'],
    'p2-mat-sottrazioni-colonna': ['sub100'],
    'p2-mat-tabelline': ['times'],
    'p2-mat-divisione-intro': ['divExact'],
    'p3-mat-numeri-1000': ['placeValue'],
    'p3-mat-moltiplicazioni-colonna': ['mult2'],
    'p3-mat-divisioni': ['divExact', 'divRem'],
    'p3-mat-frazioni-intro': ['fracOf'],
    'p3-mat-misure-lunghezza': ['lengthConv'],
    'p4-mat-grandi-numeri': ['placeValue'],
    'p4-mat-frazioni': ['fracOf', 'fracEquiv'],
    'p4-mat-numeri-decimali': ['decAdd'],
    'p4-mat-divisioni-due-cifre': ['div2'],
    'p4-mat-perimetro': ['perimRect'],
    'p5-mat-numeri-relativi-intro': ['intAdd'],
    'p5-mat-operazioni-decimali': ['decAdd', 'decMul'],
    'p5-mat-percentuali': ['percent'],
    'p5-mat-potenze-intro': ['power'],
    'p5-mat-perimetro-area': ['perimRect', 'areaRect', 'areaTri'],
    'p5-mat-cerchio': ['circle'],
    'm1-mat-numeri-naturali': ['mult2', 'div2'],
    'm1-mat-potenze': ['power'],
    'm1-mat-numeri-primi-mcd-mcm': ['isPrime', 'gcd', 'lcm'],
    'm1-mat-frazioni': ['fracEquiv', 'fracAdd'],
    'm1-mat-triangoli': ['triAngle'],
    'm2-mat-radici': ['sqrt'],
    'm2-mat-rapporti-proporzioni': ['proportion'],
    'm2-mat-aree': ['areaRect', 'areaTri'],
    'm2-mat-pitagora': ['pythagoras'],
    'm3-mat-numeri-relativi': ['intAdd', 'intMul'],
    'm3-mat-equazioni': ['equation'],
    'm3-mat-cerchio': ['circle'],
    'm3-mat-solidi': ['volCube', 'volBox']
  },
  /* Argomenti con contenuto completo (file in data/topics/<lingua>/<id>.js) */
  full: [
    'p1-mat-numeri-20', 'p1-sci-cinque-sensi',
    'p2-mat-tabelline', 'p2-ing-animals-colours',
    'p3-sto-storia-della-terra', 'p3-sci-ciclo-acqua',
    'p4-mat-frazioni', 'p4-sto-egizi',
    'p5-sci-sistema-solare', 'p5-mat-perimetro-area',
    'm1-mat-numeri-primi-mcd-mcm', 'm1-sci-cellula',
    'm2-mat-pitagora', 'm1-sto-scoperte-geografiche', 'm2-sci-chimica',
    'p3-geo-paesaggi', 'p3-geo-mare-coste',
    'm3-mat-solidi', 'm3-sci-struttura-terra-vulcani'
  ]
};
