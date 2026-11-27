/* Programma scolastico per anno e materia (testi in italiano = lingua di riferimento).
   Le traduzioni dei titoli stanno in data/i18n/curriculum.<lingua>.js
   Formato voce: [id, titolo, descrizione breve]
   id = <anno>-<materia>-<slug>   anno: p1..p5 (primaria), m1..m3 (secondaria di I grado), l1..l5 (liceo scientifico)
   Licei: Indicazioni nazionali per i licei, D.M. 211 del 7 ottobre 2010 */
window.CURRICULUM = {
  years: ['p1', 'p2', 'p3', 'p4', 'p5', 'm1', 'm2', 'm3', 'l1', 'l2', 'l3', 'l4', 'l5'],
  subjects: ['ita', 'mat', 'fis', 'sci', 'sto', 'geo', 'fil', 'sum', 'dir', 'ing', 'fra', 'spa', 'ted', 'tec', 'lat', 'grc', 'art'],
  reference: 'Indicazioni nazionali per il curricolo – D.M. 221 del 9 dicembre 2025 (in vigore dall\'a.s. 2026/27, a partire dalle classi prime)',
  /* Indirizzi del liceo: materie di ogni indirizzo per anno (anni l1..l5) */
  tracks: {
    scientifico: { l1: ['ita', 'mat', 'fis', 'sci', 'sto', 'geo', 'ing', 'lat', 'art'], l2: ['ita', 'mat', 'fis', 'sci', 'sto', 'geo', 'ing', 'lat', 'art'], l3: ['ita', 'mat', 'fis', 'sci', 'sto', 'fil', 'ing', 'lat', 'art'], l4: ['ita', 'mat', 'fis', 'sci', 'sto', 'fil', 'ing', 'lat', 'art'], l5: ['ita', 'mat', 'fis', 'sci', 'sto', 'fil', 'ing', 'lat', 'art'] },
    classico: { l1: ['ita', 'mat', 'sci', 'sto', 'geo', 'ing', 'lat', 'grc'], l2: ['ita', 'mat', 'sci', 'sto', 'geo', 'ing', 'lat', 'grc'], l3: ['ita', 'mat', 'fis', 'sci', 'sto', 'fil', 'ing', 'lat', 'grc', 'art'], l4: ['ita', 'mat', 'fis', 'sci', 'sto', 'fil', 'ing', 'lat', 'grc', 'art'], l5: ['ita', 'mat', 'fis', 'sci', 'sto', 'fil', 'ing', 'lat', 'grc', 'art'] },
    linguistico: { l1: ['ita', 'mat', 'sci', 'sto', 'geo', 'ing', 'lat', 'fra', 'spa', 'ted'], l2: ['ita', 'mat', 'sci', 'sto', 'geo', 'ing', 'lat', 'fra', 'spa', 'ted'], l3: ['ita', 'mat', 'fis', 'sci', 'sto', 'fil', 'ing', 'fra', 'spa', 'ted', 'art'], l4: ['ita', 'mat', 'fis', 'sci', 'sto', 'fil', 'ing', 'fra', 'spa', 'ted', 'art'], l5: ['ita', 'mat', 'fis', 'sci', 'sto', 'fil', 'ing', 'fra', 'spa', 'ted', 'art'] },
    umane: { l1: ['ita', 'mat', 'sci', 'sto', 'geo', 'ing', 'lat', 'sum', 'dir'], l2: ['ita', 'mat', 'sci', 'sto', 'geo', 'ing', 'lat', 'sum', 'dir'], l3: ['ita', 'mat', 'fis', 'sci', 'sto', 'fil', 'ing', 'lat', 'sum', 'art'], l4: ['ita', 'mat', 'fis', 'sci', 'sto', 'fil', 'ing', 'lat', 'sum', 'art'], l5: ['ita', 'mat', 'fis', 'sci', 'sto', 'fil', 'ing', 'lat', 'sum', 'art'] }
  },
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
        ['m2-sci-chimica', 'Chimica: elementi, composti, reazioni', 'Atomi, molecole e laboratorio di chimica online'],
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
    },
    l1: {
      ita: [
        ['l1-ita-comunicazione-registri', "Comunicazione e registri linguistici", "Emittente, destinatario, codice, contesto; lingua formale e informale"],
        ['l1-ita-morfologia-sintassi', "Riflessione sulla lingua: morfologia e sintassi", "Parti del discorso e analisi logica della frase semplice"],
        ['l1-ita-testo-narrativo', "Il testo narrativo", "Fabula e intreccio, narratore, punto di vista, personaggi, tempo e spazio"],
        ['l1-ita-generi-narrativi', "Racconto e romanzo: i generi", "Novella, racconto fantastico, giallo, fantascienza, romanzo storico"],
        ['l1-ita-epica-omero', "L'epica classica: Iliade e Odissea", "Omero, la questione omerica, eroi e valori del mondo greco"],
        ['l1-ita-eneide', "L'Eneide di Virgilio", "Enea, il viaggio da Troia al Lazio, l'epica al servizio di Roma"],
        ['l1-ita-riassunto-espositivo', "Riassunto, parafrasi e testo espositivo", "Capire, sintetizzare e spiegare un testo con ordine"]
      ],
      mat: [
        ['l1-mat-insiemi-logica', "Insiemi e logica", "Operazioni tra insiemi, proposizioni, connettivi e quantificatori"],
        ['l1-mat-insiemi-numerici', "Numeri naturali, interi e razionali", "Proprietà delle operazioni, potenze, frazioni e numeri decimali periodici"],
        ['l1-mat-monomi-polinomi', "Monomi e polinomi", "Calcolo letterale: operazioni, grado e prodotti notevoli"],
        ['l1-mat-scomposizione', "Scomposizione dei polinomi", "Raccoglimento, prodotti notevoli, trinomio speciale, Ruffini"],
        ['l1-mat-frazioni-algebriche', "Frazioni algebriche", "Condizioni di esistenza, semplificazione e operazioni"],
        ['l1-mat-equazioni-primo-grado', "Equazioni di primo grado", "Principi di equivalenza, equazioni intere e fratte, problemi"],
        ['l1-mat-geometria-euclidea', "Geometria euclidea: assiomi e triangoli", "Enti primitivi, postulati, criteri di congruenza dei triangoli"],
        ['l1-mat-parallelismo', "Rette parallele e quadrilateri", "Il quinto postulato, angoli tra parallele, parallelogrammi e trapezi"],
        ['l1-mat-statistica', "Statistica descrittiva", "Raccolta dati, frequenze, grafici, media, mediana, moda e varianza"]
      ],
      fis: [
        ['l1-fis-grandezze-misure', "Grandezze fisiche e Sistema Internazionale", "Unità di misura, multipli, notazione scientifica, ordini di grandezza"],
        ['l1-fis-errori-misura', "La misura e gli errori", "Strumenti, sensibilità, errore assoluto e relativo, cifre significative"],
        ['l1-fis-vettori-forze', "Vettori e forze", "Somma di vettori, forza peso, forza elastica (legge di Hooke), attrito"],
        ['l1-fis-equilibrio-solidi', "L'equilibrio dei solidi", "Equilibrio del punto materiale, piano inclinato, momento di una forza, leve"],
        ['l1-fis-equilibrio-fluidi', "L'equilibrio dei fluidi", "Pressione, principio di Pascal, legge di Stevino, spinta di Archimede"],
        ['l1-fis-ottica-geometrica', "Ottica geometrica", "Raggi luminosi, riflessione, rifrazione, specchi e lenti"]
      ],
      sci: [
        ['l1-sci-materia-miscugli', "La materia: sostanze e miscugli", "Stati di aggregazione, miscugli omogenei ed eterogenei, metodi di separazione"],
        ['l1-sci-trasformazioni', "Trasformazioni fisiche e chimiche", "Passaggi di stato, curve di riscaldamento, reazioni chimiche"],
        ['l1-sci-leggi-ponderali', "Le leggi ponderali e la teoria atomica", "Lavoisier, Proust, Dalton: atomi, elementi e composti"],
        ['l1-sci-terra-sistema-solare', "La Terra nel Sistema Solare", "Sole, pianeti, leggi di Keplero, forma e dimensioni della Terra"],
        ['l1-sci-moti-terra', "I moti della Terra e della Luna", "Rotazione, rivoluzione, stagioni, fusi orari, fasi lunari ed eclissi"],
        ['l1-sci-idrosfera', "L'idrosfera", "Ciclo dell'acqua, oceani, correnti, fiumi, laghi e ghiacciai"],
        ['l1-sci-atmosfera', "L'atmosfera e il tempo meteorologico", "Strati, pressione, venti, umidità, nuvole e precipitazioni"]
      ],
      sto: [
        ['l1-sto-preistoria', "Preistoria e rivoluzione neolitica", "Evoluzione umana, agricoltura, allevamento e primi villaggi"],
        ['l1-sto-mesopotamia-egitto', "Mesopotamia ed Egitto", "Le prime città, la scrittura, il codice di Hammurabi, i faraoni"],
        ['l1-sto-ebrei-fenici', "Ebrei, Fenici e popoli del Mediterraneo", "Monoteismo, commerci, colonie e alfabeto"],
        ['l1-sto-grecia-polis', "La Grecia delle poleis", "Civiltà minoica e micenea, colonizzazione, Sparta e Atene"],
        ['l1-sto-guerre-persiane-pericle', "Guerre persiane ed età di Pericle", "Maratona, Salamina, la democrazia ateniese e la guerra del Peloponneso"],
        ['l1-sto-alessandro-ellenismo', "Alessandro Magno e l'Ellenismo", "Il regno di Macedonia, l'impero di Alessandro e i regni ellenistici"],
        ['l1-sto-roma-repubblica', "Roma: dalle origini alla repubblica", "Monarchia, istituzioni repubblicane, conquista dell'Italia, guerre puniche"]
      ],
      geo: [
        ['l1-geo-strumenti', "Gli strumenti della geografia", "Carte, scale, coordinate, GIS, dati e grafici"],
        ['l1-geo-clima-ambienti', "Climi e ambienti della Terra", "Fattori del clima, biomi e cambiamento climatico"],
        ['l1-geo-popolazione', "La popolazione mondiale", "Demografia, transizione demografica, distribuzione e densità"],
        ['l1-geo-migrazioni', "Le migrazioni", "Cause, rotte e conseguenze dei movimenti di popolazione"],
        ['l1-geo-citta', "Città e urbanizzazione", "Metropoli, megalopoli, città sostenibili"],
        ['l1-geo-risorse-sostenibilita', "Risorse e sviluppo sostenibile", "Acqua, energia, cibo e l'Agenda 2030"]
      ],
      ing: [
        ['l1-ing-present-tenses', "Present simple and continuous", "Routines, actions in progress and stative verbs"],
        ['l1-ing-past-tenses', "Past simple and past continuous", "Telling stories in the past, used to"],
        ['l1-ing-future-forms', "Future forms", "Will, be going to, present continuous for arrangements"],
        ['l1-ing-modal-verbs', "Modal verbs", "Can, could, must, have to, should, may, might"],
        ['l1-ing-describing', "Describing people and places", "Adjectives, comparatives and superlatives"],
        ['l1-ing-writing-emails', "Writing emails and messages", "Formal and informal emails, B1 level"]
      ],
      lat: [
        ['l1-lat-alfabeto-pronuncia', "Alfabeto, pronuncia e accento", "Come si legge il latino: quantità delle sillabe e legge della penultima"],
        ['l1-lat-prima-seconda-declinazione', "Prima e seconda declinazione", "I casi, le desinenze e la loro funzione"],
        ['l1-lat-indicativo-coniugazioni', "L'indicativo delle quattro coniugazioni", "Presente, imperfetto e futuro attivi e passivi; il verbo sum"],
        ['l1-lat-aggettivi-prima-classe', "Gli aggettivi della prima classe", "Concordanza, aggettivi possessivi e pronominali"],
        ['l1-lat-complementi', "I principali complementi", "Luogo, tempo, mezzo, modo, causa, compagnia, agente"],
        ['l1-lat-terza-declinazione', "La terza declinazione", "I tre gruppi e le parole più usate"],
        ['l1-lat-metodo-traduzione', "Il metodo di traduzione", "Usare il vocabolario, trovare il verbo, ricostruire la frase"]
      ],
      art: [
        ['l1-art-costruzioni-geometriche', "Disegno: costruzioni geometriche", "Perpendicolari, parallele, poligoni regolari, raccordi"],
        ['l1-art-proiezioni-ortogonali', "Disegno: proiezioni ortogonali", "Punti, segmenti, figure piane e solidi sui tre piani"],
        ['l1-art-preistoria', "L'arte della preistoria", "Pitture rupestri, veneri, megaliti e Stonehenge"],
        ['l1-art-mesopotamia-egitto', "Arte mesopotamica ed egizia", "Ziggurat, piramidi, templi, pittura e scultura"],
        ['l1-art-creta-micene', "Arte cretese e micenea", "Palazzo di Cnosso, Porta dei Leoni, maschera di Agamennone"],
        ['l1-art-grecia-templi', "La Grecia: il tempio e gli ordini", "Dorico, ionico e corinzio; il Partenone"],
        ['l1-art-grecia-scultura', "La scultura greca", "Kouroi, Mirone, Policleto, Fidia, Prassitele, l'Ellenismo"]
      ],
      grc: [
        ['l1-grc-alfabeto', "Alfabeto, spiriti e accenti", "Leggere e scrivere il greco antico: lettere, dittonghi, spiriti, accenti"],
        ['l1-grc-articolo-prima-declinazione', "L'articolo e la prima declinazione", "I casi del greco, l'articolo, i nomi femminili e maschili in -α e -η"],
        ['l1-grc-seconda-declinazione', "La seconda declinazione", "Nomi in -ος e -ον, aggettivi della prima classe"],
        ['l1-grc-presente-indicativo', "Il presente dei verbi in -ω", "Indicativo, imperativo, infinito attivo e medio-passivo; il verbo εἰμί"],
        ['l1-grc-imperfetto-aumento', "L'imperfetto e l'aumento", "Aumento sillabico e temporale, verbi composti"],
        ['l1-grc-verbi-contratti', "I verbi contratti", "Verbi in -άω, -έω, -όω e le regole di contrazione"],
        ['l1-grc-metodo-traduzione', "Tradurre dal greco", "Il vocabolario, le particelle, μέν… δέ, l'ordine delle parole"]
      ],
      fra: [
        ['l1-fra-se-presenter', "Se présenter: saluti e presentazioni", "Pronuncia, articoli, verbi être e avoir"],
        ['l1-fra-present', "Il presente dei verbi", "Verbi in -er, -ir, -re e irregolari frequenti"],
        ['l1-fra-quotidien', "La vita quotidiana", "Famiglia, casa, scuola, orari e routine"],
        ['l1-fra-negation-questions', "Negazione e domande", "Ne… pas, est-ce que, inversione, parole interrogative"],
        ['l1-fra-passe-compose', "Il passé composé", "Raccontare al passato con avoir ed être"]
      ],
      spa: [
        ['l1-spa-presentarse', "Presentarse: saluti e presentazioni", "Pronuncia, articoli, ser e estar"],
        ['l1-spa-presente', "Il presente indicativo", "Verbi regolari, irregolari e con dittongo"],
        ['l1-spa-vida-cotidiana', "La vida cotidiana", "Famiglia, casa, scuola e verbi riflessivi"],
        ['l1-spa-gustar', "Gustar e i verbi di preferenza", "Mi gusta, me encanta, pronomi complemento"],
        ['l1-spa-preterito-perfecto', "Il pretérito perfecto", "Raccontare esperienze recenti"]
      ],
      ted: [
        ['l1-ted-sich-vorstellen', "Sich vorstellen: saluti e presentazioni", "Pronuncia, sein e haben, pronomi personali"],
        ['l1-ted-praesens', "Il presente e l'ordine delle parole", "Verbi regolari e irregolari, il verbo al secondo posto"],
        ['l1-ted-artikel-kasus', "Articoli, nominativo e accusativo", "Der, die, das; ein, kein; i casi"],
        ['l1-ted-alltag', "Alltag: la vita di ogni giorno", "Orari, famiglia, scuola, verbi separabili"],
        ['l1-ted-modalverben', "I verbi modali", "Können, müssen, wollen, dürfen, sollen, mögen"]
      ],
      sum: [
        ['l1-sum-psicologia-intro', "Che cos'è la psicologia", "Oggetto, metodi e scuole della psicologia"],
        ['l1-sum-percezione-attenzione', "Percezione e attenzione", "Come il cervello costruisce ciò che vediamo; la Gestalt e le illusioni"],
        ['l1-sum-memoria-apprendimento', "Memoria e apprendimento", "Tipi di memoria, condizionamento, imparare a imparare"],
        ['l1-sum-metodo-studio', "Il metodo di studio", "Motivazione, organizzazione, mappe e strategie"],
        ['l1-sum-educazione-antica', "L'educazione nel mondo antico", "Egitto, Israele, Sparta e Atene: come si educavano i giovani"],
        ['l1-sum-educazione-roma', "L'educazione a Roma", "La famiglia, la scuola, Cicerone e Quintiliano"]
      ],
      dir: [
        ['l1-dir-norma-giuridica', "La norma giuridica e le fonti del diritto", "Caratteri delle norme, gerarchia delle fonti"],
        ['l1-dir-persone-diritti', "Persone, capacità e diritti", "Soggetti del diritto, capacità giuridica e d'agire"],
        ['l1-dir-stato', "Lo Stato e le sue forme", "Popolo, territorio, sovranità; forme di Stato e di governo"],
        ['l1-dir-costituzione-principi', "La Costituzione: principi fondamentali", "Storia della Costituzione, articoli 1-12, diritti e doveri"],
        ['l1-dir-economia-bisogni', "Economia: bisogni, beni e servizi", "Il problema economico, scarsità, scelte"],
        ['l1-dir-sistemi-economici', "I sistemi economici", "Famiglie, imprese, Stato; liberismo, collettivismo, economia mista"]
      ]
    },
    l2: {
      ita: [
        ['l2-ita-promessi-sposi', "I Promessi sposi", "Manzoni, il romanzo storico, i personaggi e la Provvidenza"],
        ['l2-ita-testo-poetico', "Il testo poetico", "Verso, metrica, rima, strofe e forme poetiche"],
        ['l2-ita-figure-retoriche', "Le figure retoriche", "Similitudine, metafora, anafora, allitterazione, ossimoro e altre"],
        ['l2-ita-teatro', "Il testo teatrale", "Tragedia e commedia, struttura del dramma, dal teatro greco a oggi"],
        ['l2-ita-sintassi-periodo', "Sintassi del periodo", "Coordinazione e subordinazione, tipi di proposizioni"],
        ['l2-ita-testo-argomentativo', "Il testo argomentativo", "Tesi, argomenti, antitesi, confutazione e conclusione"],
        ['l2-ita-origini-letteratura', "Le origini della letteratura italiana", "Dal latino al volgare, Cantico delle creature, Scuola siciliana"]
      ],
      mat: [
        ['l2-mat-disequazioni-primo-grado', "Disequazioni di primo grado", "Disequazioni intere, fratte e sistemi di disequazioni"],
        ['l2-mat-sistemi-lineari', "Sistemi lineari", "Metodi di sostituzione, confronto, riduzione e Cramer"],
        ['l2-mat-radicali', "Numeri reali e radicali", "Irrazionali, proprietà dei radicali, razionalizzazione"],
        ['l2-mat-piano-cartesiano-retta', "Piano cartesiano e retta", "Distanza, punto medio, equazione della retta, parallelismo e perpendicolarità"],
        ['l2-mat-equazioni-secondo-grado', "Equazioni di secondo grado", "Formula risolutiva, discriminante, relazioni tra radici e coefficienti"],
        ['l2-mat-circonferenza-poligoni', "Circonferenza e poligoni", "Angoli al centro e alla circonferenza, poligoni inscritti e circoscritti"],
        ['l2-mat-equivalenza-pitagora', "Equivalenza e teoremi di Euclide e Pitagora", "Figure equivalenti, aree e dimostrazioni"],
        ['l2-mat-similitudine', "Similitudine e teorema di Talete", "Triangoli simili, criteri di similitudine, proporzioni"],
        ['l2-mat-probabilita', "Introduzione alla probabilità", "Eventi, probabilità classica, frequentista e somma di eventi"]
      ],
      fis: [
        ['l2-fis-moto-rettilineo', "Il moto rettilineo uniforme", "Posizione, velocità, legge oraria e grafici spazio-tempo"],
        ['l2-fis-moto-accelerato', "Il moto uniformemente accelerato", "Accelerazione, caduta libera, grafici velocità-tempo"],
        ['l2-fis-moti-piano', "I moti nel piano", "Moto parabolico, moto circolare uniforme, moto armonico"],
        ['l2-fis-principi-dinamica', "I principi della dinamica", "Inerzia, F = ma, azione e reazione; Galileo e Newton"],
        ['l2-fis-lavoro-energia', "Lavoro ed energia", "Lavoro, potenza, energia cinetica e potenziale, conservazione dell'energia"],
        ['l2-fis-temperatura-calore', "Temperatura e calore", "Termometri, dilatazione termica, calore specifico, propagazione del calore"]
      ],
      sci: [
        ['l2-sci-mole', "La mole e le formule chimiche", "Massa atomica, numero di Avogadro, composizione percentuale"],
        ['l2-sci-molecole-vita', "Le molecole della vita", "Acqua, carboidrati, lipidi, proteine e acidi nucleici"],
        ['l2-sci-cellula', "La cellula", "Procariote ed eucariote, animale e vegetale, organuli"],
        ['l2-sci-membrana-trasporti', "Membrana e trasporti cellulari", "Diffusione, osmosi, trasporto attivo, endocitosi"],
        ['l2-sci-mitosi-meiosi', "Mitosi e meiosi", "Ciclo cellulare, riproduzione asessuata e sessuata"],
        ['l2-sci-evoluzione-classificazione', "Evoluzione e classificazione", "Darwin, selezione naturale, i regni dei viventi"],
        ['l2-sci-ecosistemi', "Gli ecosistemi", "Catene alimentari, cicli biogeochimici, biodiversità"]
      ],
      sto: [
        ['l2-sto-crisi-repubblica', "La crisi della repubblica romana", "Gracchi, Mario e Silla, Pompeo, Cesare"],
        ['l2-sto-augusto-impero', "Augusto e l'impero", "Il principato, la pax romana, le dinastie imperiali"],
        ['l2-sto-cristianesimo', "Il cristianesimo e l'impero", "Diffusione, persecuzioni, Costantino e Teodosio"],
        ['l2-sto-crisi-caduta', "Crisi e caduta dell'impero d'Occidente", "Crisi del III secolo, Diocleziano, invasioni, 476 d.C."],
        ['l2-sto-regni-bizantini', "Regni romano-barbarici e Bisanzio", "Ostrogoti, Longobardi, Giustiniano e il Corpus iuris"],
        ['l2-sto-islam', "La nascita dell'Islam", "Maometto, il Corano, l'espansione araba"],
        ['l2-sto-carlo-magno-feudalesimo', "Carlo Magno e il feudalesimo", "Il Sacro Romano Impero, vassalli, curtis e signorie"]
      ],
      geo: [
        ['l2-geo-europa-ue', "L'Europa e l'Unione europea", "Territorio, popoli, istituzioni europee e cittadinanza"],
        ['l2-geo-italia-mondo', "L'Italia nel mondo", "Economia, territorio, squilibri e ruolo internazionale"],
        ['l2-geo-asia', "L'Asia", "Cina, India, Giappone e Medio Oriente"],
        ['l2-geo-africa', "L'Africa", "Ambienti, popoli, risorse e sfide dello sviluppo"],
        ['l2-geo-americhe', "Le Americhe", "Stati Uniti, America Latina, ambienti e società"],
        ['l2-geo-globalizzazione', "Globalizzazione e organizzazioni internazionali", "ONU, commercio mondiale, disuguaglianze e diritti"]
      ],
      ing: [
        ['l2-ing-present-perfect', "Present perfect", "Present perfect simple and continuous vs past simple"],
        ['l2-ing-conditionals', "Conditionals", "Zero, first, second and third conditional"],
        ['l2-ing-passive', "The passive voice", "Passive forms in all tenses, have something done"],
        ['l2-ing-relative-clauses', "Relative clauses", "Who, which, that, whose, where; defining and non-defining"],
        ['l2-ing-reported-speech', "Reported speech", "Reporting statements, questions and commands"],
        ['l2-ing-essay-writing', "Writing essays and reviews", "Paragraphs, linkers and opinion essays, B1+ level"]
      ],
      lat: [
        ['l2-lat-terza-aggettivi-seconda', "Aggettivi della seconda classe", "Aggettivi a tre, due e una uscita; comparativi e superlativi"],
        ['l2-lat-quarta-quinta', "Quarta e quinta declinazione", "Manus, res, dies e le parole più usate"],
        ['l2-lat-pronomi', "I pronomi", "Personali, dimostrativi, relativi, interrogativi e indefiniti"],
        ['l2-lat-perfetto', "Il sistema del perfetto", "Perfetto, piuccheperfetto e futuro anteriore"],
        ['l2-lat-participio-ablativo', "Participio e ablativo assoluto", "Participio presente, perfetto e futuro"],
        ['l2-lat-congiuntivo-finali', "Congiuntivo, finali e consecutive", "Il congiuntivo e le proposizioni con ut e ne"],
        ['l2-lat-cum-infinitive', "Cum narrativo e infinitive", "La consecutio temporum e l'accusativo con l'infinito"]
      ],
      art: [
        ['l2-art-roma', "L'arte romana", "Arco, volta, cupola; Pantheon, Colosseo, ritratto e rilievo storico"],
        ['l2-art-paleocristiana-bizantina', "Arte paleocristiana e bizantina", "Basiliche, catacombe, mosaici di Ravenna"],
        ['l2-art-romanico', "Il Romanico", "Sant'Ambrogio, Duomo di Modena, Wiligelmo, Pisa"],
        ['l2-art-gotico', "Il Gotico", "Cattedrali, vetrate, Giotto e la pittura del Trecento"],
        ['l2-art-proiezioni-solidi', "Disegno: sezioni e solidi", "Proiezioni ortogonali di solidi, sezioni e sviluppi"],
        ['l2-art-assonometria', "Disegno: l'assonometria", "Assonometria isometrica, cavaliera e monometrica"]
      ],
      grc: [
        ['l2-grc-terza-declinazione', "La terza declinazione", "Temi in consonante e in vocale, nomi irregolari"],
        ['l2-grc-aggettivi-comparativi', "Aggettivi della seconda classe, comparativi e superlativi", "Aggettivi a due e tre uscite, gradi dell'aggettivo"],
        ['l2-grc-pronomi', "I pronomi", "Personali, dimostrativi, relativi, interrogativi e indefiniti"],
        ['l2-grc-verbi-mi', "I verbi in -μι", "Δίδωμι, τίθημι, ἵστημι e gli altri verbi atematici"],
        ['l2-grc-futuro-aoristo', "Futuro e aoristo", "Aoristo sigmatico, forte e passivo; il valore aspettuale"],
        ['l2-grc-participio', "Il participio", "Participio attributivo, sostantivato, congiunto e genitivo assoluto"],
        ['l2-grc-congiuntivo-ottativo', "Congiuntivo e ottativo", "I modi del greco e le proposizioni finali"]
      ],
      fra: [
        ['l2-fra-imparfait', "L'imparfait e il racconto", "Imparfait e passé composé a confronto"],
        ['l2-fra-futur-conditionnel', "Futuro e condizionale", "Fare progetti, chiedere con cortesia, ipotesi"],
        ['l2-fra-pronoms', "I pronomi complemento", "Pronomi diretti, indiretti, y ed en"],
        ['l2-fra-france-francophonie', "La Francia e la francofonia", "Regioni, città e paesi dove si parla francese"],
        ['l2-fra-ecrire-b1', "Scrivere in francese (B1)", "Lettere, mail, brevi testi e opinioni"]
      ],
      spa: [
        ['l2-spa-indefinido', "Il pretérito indefinido e l'imperfecto", "Raccontare storie al passato"],
        ['l2-spa-futuro-condicional', "Futuro e condicional", "Progetti, previsioni, consigli"],
        ['l2-spa-ser-estar', "Ser, estar e hay", "Usi a confronto e espressioni frequenti"],
        ['l2-spa-mundo-hispano', "Il mondo ispanico", "Spagna e America Latina: paesi, città, culture"],
        ['l2-spa-escribir-b1', "Scrivere in spagnolo (B1)", "Mail, racconti brevi e opinioni"]
      ],
      ted: [
        ['l2-ted-perfekt', "Il Perfekt", "Raccontare al passato con haben e sein"],
        ['l2-ted-dativ-praepositionen', "Il dativo e le preposizioni", "Preposizioni con dativo, accusativo e miste"],
        ['l2-ted-nebensaetze', "Le frasi secondarie", "Weil, dass, wenn, ob: il verbo in fondo"],
        ['l2-ted-deutschland', "I paesi di lingua tedesca", "Germania, Austria, Svizzera: geografia e cultura"],
        ['l2-ted-schreiben-b1', "Scrivere in tedesco (A2-B1)", "Mail, descrizioni e brevi testi"]
      ],
      sum: [
        ['l2-sum-comunicazione', "La comunicazione", "Verbale e non verbale, assiomi della comunicazione, i media"],
        ['l2-sum-psicologia-sociale', "Psicologia sociale", "Gruppi, pregiudizi, stereotipi, conformismo"],
        ['l2-sum-emozioni-motivazione', "Emozioni e motivazione", "Che cosa sono, a cosa servono, la piramide di Maslow"],
        ['l2-sum-intelligenza', "L'intelligenza", "Teorie, test, intelligenze multiple di Gardner"],
        ['l2-sum-educazione-cristiana', "L'educazione cristiana e i monasteri", "Agostino, Benedetto da Norcia, le scuole monastiche"],
        ['l2-sum-medioevo-universita', "Educazione nel Medioevo", "Carlo Magno, la cavalleria, le università"]
      ],
      dir: [
        ['l2-dir-parlamento', "Il Parlamento", "Camera e Senato, come nasce una legge"],
        ['l2-dir-governo-presidente', "Governo e Presidente della Repubblica", "Formazione del governo, poteri del Presidente"],
        ['l2-dir-magistratura-corte', "Magistratura e Corte costituzionale", "La giustizia e il controllo delle leggi"],
        ['l2-dir-ue-onu', "Unione europea e organizzazioni internazionali", "Istituzioni europee, ONU, diritti umani"],
        ['l2-dir-mercato', "Il mercato e i prezzi", "Domanda, offerta, concorrenza e monopolio"],
        ['l2-dir-moneta-pil', "Moneta, inflazione e PIL", "Banche, BCE, misurare la ricchezza di un paese"]
      ]
    },
    l3: {
      ita: [
        ['l3-ita-stilnovo', "Il Dolce Stil Novo", "Guinizzelli, Cavalcanti e la donna angelo"],
        ['l3-ita-dante', "Dante Alighieri", "Vita, Vita nova, Convivio, De vulgari eloquentia"],
        ['l3-ita-inferno', "La Divina Commedia: l'Inferno", "Struttura, viaggio, canti principali e contrappasso"],
        ['l3-ita-petrarca', "Francesco Petrarca", "Il Canzoniere, il dissidio interiore, il petrarchismo"],
        ['l3-ita-boccaccio', "Giovanni Boccaccio", "Il Decameron: cornice, novelle, fortuna e ingegno"],
        ['l3-ita-umanesimo-rinascimento', "Umanesimo e Rinascimento", "Riscoperta dei classici, Lorenzo il Magnifico, la corte"],
        ['l3-ita-ariosto', "Ludovico Ariosto", "L'Orlando furioso: inchiesta, ironia e follia"],
        ['l3-ita-machiavelli', "Niccolò Machiavelli", "Il Principe: virtù, fortuna e politica moderna"],
        ['l3-ita-tasso', "Torquato Tasso", "La Gerusalemme liberata e l'inquietudine del tardo Cinquecento"]
      ],
      mat: [
        ['l3-mat-equazioni-disequazioni', "Equazioni e disequazioni di grado superiore", "Disequazioni di secondo grado, fratte, con valore assoluto e irrazionali"],
        ['l3-mat-funzioni', "Le funzioni", "Dominio, immagine, funzioni iniettive, suriettive, inverse e composte"],
        ['l3-mat-retta-analitica', "Geometria analitica: la retta", "Fasci di rette, distanza punto-retta, luoghi geometrici"],
        ['l3-mat-parabola', "La parabola", "Equazione, vertice, fuoco, direttrice, rette tangenti"],
        ['l3-mat-circonferenza', "La circonferenza nel piano cartesiano", "Equazione, posizioni reciproche, tangenti"],
        ['l3-mat-ellisse-iperbole', "Ellisse e iperbole", "Le coniche: equazioni, fuochi, eccentricità, asintoti"],
        ['l3-mat-successioni', "Successioni e progressioni", "Principio di induzione, progressioni aritmetiche e geometriche"],
        ['l3-mat-statistica-bivariata', "Statistica bivariata", "Correlazione, retta di regressione, dati e modelli"]
      ],
      fis: [
        ['l3-fis-quantita-moto-urti', "Quantità di moto e urti", "Impulso, conservazione della quantità di moto, urti elastici e anelastici"],
        ['l3-fis-moto-rotatorio', "Il moto rotatorio", "Momento d'inerzia, momento angolare e sua conservazione"],
        ['l3-fis-gravitazione', "La gravitazione universale", "Leggi di Keplero, legge di Newton, satelliti, campo gravitazionale"],
        ['l3-fis-fluidodinamica', "La dinamica dei fluidi", "Portata, equazione di continuità, teorema di Bernoulli, viscosità"],
        ['l3-fis-gas-perfetti', "I gas e la teoria cinetica", "Leggi dei gas, equazione di stato, temperatura ed energia delle molecole"],
        ['l3-fis-primo-principio', "Il primo principio della termodinamica", "Energia interna, lavoro, calore, trasformazioni termodinamiche"],
        ['l3-fis-secondo-principio', "Il secondo principio e l'entropia", "Macchine termiche, rendimento, ciclo di Carnot, entropia"]
      ],
      sci: [
        ['l3-sci-modelli-atomici', "Modelli atomici e configurazione elettronica", "Da Thomson a Bohr, orbitali, numeri quantici"],
        ['l3-sci-tavola-periodica', "La tavola periodica", "Gruppi, periodi, proprietà periodiche degli elementi"],
        ['l3-sci-legami-chimici', "I legami chimici", "Legame ionico, covalente e metallico; forma delle molecole (VSEPR)"],
        ['l3-sci-nomenclatura', "La nomenclatura chimica", "Ossidi, idrossidi, acidi e sali: nomi IUPAC e tradizionali"],
        ['l3-sci-reazioni-stechiometria', "Reazioni chimiche e stechiometria", "Bilanciamento, reagente limitante, resa, soluzioni"],
        ['l3-sci-dna-genetica', "Il DNA e la genetica", "Mendel, struttura del DNA, duplicazione, sintesi proteica"],
        ['l3-sci-corpo-umano', "Il corpo umano: organizzazione", "Tessuti, organi, apparati e omeostasi"]
      ],
      sto: [
        ['l3-sto-comuni-impero-papato', "Comuni, impero e papato", "Rinascita dopo il Mille, lotta per le investiture, Federico Barbarossa"],
        ['l3-sto-crisi-trecento', "La crisi del Trecento", "Peste nera, carestie, rivolte, scisma d'Occidente"],
        ['l3-sto-monarchie-nazionali', "Le monarchie nazionali", "Francia, Inghilterra, Spagna; la guerra dei Cent'anni"],
        ['l3-sto-signorie-rinascimento', "Signorie e Rinascimento in Italia", "Medici, Sforza, la politica dell'equilibrio"],
        ['l3-sto-scoperte-geografiche', "Le scoperte geografiche", "Colombo, i Portoghesi, la conquista dell'America"],
        ['l3-sto-riforma-controriforma', "Riforma e Controriforma", "Lutero, Calvino, Enrico VIII, il Concilio di Trento"],
        ['l3-sto-carlo-v-filippo-ii', "Carlo V e Filippo II", "L'impero su cui non tramonta il sole, guerre di religione"],
        ['l3-sto-seicento', "Il Seicento", "Guerra dei Trent'anni, rivoluzioni inglesi, crisi e cambiamenti"]
      ],
      fil: [
        ['l3-fil-nascita-presocratici', "La nascita della filosofia e i presocratici", "Talete, Pitagora, Eraclito, Parmenide, Democrito"],
        ['l3-fil-sofisti-socrate', "I sofisti e Socrate", "Protagora, Gorgia, il dialogo, l'ironia e la maieutica"],
        ['l3-fil-platone', "Platone", "Teoria delle idee, mito della caverna, anima e Stato ideale"],
        ['l3-fil-aristotele', "Aristotele", "Logica, metafisica, fisica, etica e politica"],
        ['l3-fil-ellenismo', "Le filosofie ellenistiche", "Stoici, epicurei e scettici: come vivere felici"],
        ['l3-fil-agostino', "Agostino d'Ippona", "Fede e ragione, il tempo, la città di Dio"],
        ['l3-fil-scolastica-tommaso', "La Scolastica e Tommaso d'Aquino", "Le prove dell'esistenza di Dio, Ockham e il rasoio"]
      ],
      ing: [
        ['l3-ing-middle-ages-chaucer', "The Middle Ages and Chaucer", "Anglo-Saxons, Beowulf, The Canterbury Tales"],
        ['l3-ing-renaissance', "The English Renaissance", "The Tudors, Elizabeth I, the sonnet"],
        ['l3-ing-shakespeare', "William Shakespeare", "The theatre, Romeo and Juliet, Hamlet, Macbeth"],
        ['l3-ing-mixed-tenses', "Grammar review: tenses (B2)", "Narrative tenses, future perfect and future continuous"],
        ['l3-ing-linking-words', "Linking words and text organisation", "Contrast, cause, consequence, addition"],
        ['l3-ing-speaking-b2', "Speaking and listening (B2)", "Expressing opinions, discussing, presenting a topic"]
      ],
      lat: [
        ['l3-lat-sintassi-casi', "La sintassi dei casi", "Nominativo, genitivo, dativo, accusativo e ablativo: costrutti particolari"],
        ['l3-lat-gerundio-gerundivo', "Gerundio, gerundivo e perifrastiche", "La perifrastica attiva e passiva"],
        ['l3-lat-origini-teatro', "Le origini della letteratura latina e il teatro", "Livio Andronico, Ennio, Plauto e Terenzio"],
        ['l3-lat-catullo', "Catullo", "I neoteroi, i carmi per Lesbia, odi et amo"],
        ['l3-lat-cesare', "Giulio Cesare", "De bello Gallico, De bello civili: la storia scritta da un protagonista"],
        ['l3-lat-sallustio', "Sallustio", "La congiura di Catilina e la guerra giugurtina"],
        ['l3-lat-cicerone', "Cicerone", "Orazioni, opere filosofiche e lettere"]
      ],
      art: [
        ['l3-art-primo-rinascimento', "Il primo Rinascimento a Firenze", "Brunelleschi, Donatello, Masaccio e la prospettiva"],
        ['l3-art-quattrocento', "Il Quattrocento in Italia", "Piero della Francesca, Botticelli, Mantegna, Antonello"],
        ['l3-art-leonardo', "Leonardo da Vinci", "Sfumato, Cenacolo, Gioconda, i disegni e le invenzioni"],
        ['l3-art-michelangelo', "Michelangelo", "David, Cappella Sistina, Pietà, cupola di San Pietro"],
        ['l3-art-raffaello', "Raffaello", "Le Stanze vaticane, Scuola di Atene, Madonne"],
        ['l3-art-venezia', "Il Rinascimento a Venezia", "Giorgione, Tiziano, Tintoretto, Palladio"],
        ['l3-art-prospettiva', "Disegno: la prospettiva", "Prospettiva centrale e accidentale di figure e solidi"]
      ],
      grc: [
        ['l3-grc-perfetto-sintassi', "Il perfetto e la sintassi del periodo", "Perfetto, piuccheperfetto, proposizioni dichiarative e causali"],
        ['l3-grc-omero', "Omero e l'epica", "Iliade e Odissea in lingua originale, la lingua omerica"],
        ['l3-grc-esiodo', "Esiodo", "Teogonia, Le opere e i giorni"],
        ['l3-grc-lirica-arcaica', "La lirica arcaica", "Archiloco, Saffo, Alceo, Anacreonte"],
        ['l3-grc-lirica-corale', "La lirica corale", "Alcmane, Simonide, Pindaro e Bacchilide"],
        ['l3-grc-erodoto', "Erodoto e la storiografia", "Le Storie, le guerre persiane, il padre della storia"]
      ],
      fra: [
        ['l3-fra-moyen-age', "Il Medioevo francese", "La Chanson de Roland, il romanzo cortese, Villon"],
        ['l3-fra-renaissance', "Il Rinascimento in Francia", "Rabelais, Ronsard, Montaigne"],
        ['l3-fra-classicisme', "Il Seicento classico", "Corneille, Racine, Molière, La Fontaine"],
        ['l3-fra-subjonctif', "Il congiuntivo (B1-B2)", "Subjonctif présent: quando e come si usa"],
        ['l3-fra-analyse-texte', "Analizzare un testo letterario", "Lessico e metodo per commentare in francese"]
      ],
      spa: [
        ['l3-spa-edad-media', "Il Medioevo spagnolo", "El Cantar de mio Cid, il romancero"],
        ['l3-spa-siglo-de-oro', "Il Siglo de Oro", "Lazarillo de Tormes, Garcilaso, Lope de Vega"],
        ['l3-spa-cervantes', "Cervantes e il Don Quijote", "Il primo romanzo moderno"],
        ['l3-spa-subjuntivo', "Il congiuntivo (B1-B2)", "Presente de subjuntivo e i suoi usi"],
        ['l3-spa-analisis-texto', "Analizzare un testo letterario", "Lessico e metodo per commentare in spagnolo"]
      ],
      ted: [
        ['l3-ted-mittelalter', "Il Medioevo tedesco", "Il Nibelungenlied, i Minnesänger"],
        ['l3-ted-aufklaerung', "Illuminismo e Sturm und Drang", "Lessing, il giovane Goethe e Schiller"],
        ['l3-ted-praeteritum', "Il Präteritum e il genitivo", "Raccontare per iscritto, i casi completi"],
        ['l3-ted-passiv', "Il passivo e le relative", "Werden + participio, pronomi relativi"],
        ['l3-ted-textanalyse', "Analizzare un testo letterario", "Lessico e metodo per commentare in tedesco"]
      ],
      sum: [
        ['l3-sum-antropologia-cultura', "Antropologia: il concetto di cultura", "Cultura, etnocentrismo, relativismo culturale"],
        ['l3-sum-antropologia-metodi', "Il lavoro sul campo", "Osservazione partecipante, Malinowski, l'etnografia"],
        ['l3-sum-sociologia-nascita', "La nascita della sociologia", "Comte, Durkheim e il fatto sociale"],
        ['l3-sum-psicologia-sviluppo', "Psicologia dello sviluppo", "Piaget, Vygotskij, le fasi della crescita"],
        ['l3-sum-umanesimo-comenio', "Pedagogia: dall'Umanesimo a Comenio", "Vittorino da Feltre, Erasmo, la Didactica magna"],
        ['l3-sum-controriforma-gesuiti', "Educazione tra Riforma e Controriforma", "Lutero, la Ratio studiorum dei gesuiti, Locke"]
      ]
    },
    l4: {
      ita: [
        ['l4-ita-purgatorio', "La Divina Commedia: il Purgatorio", "Struttura, penitenti, canti principali"],
        ['l4-ita-barocco-galileo', "Il Barocco e Galileo", "Marino e la meraviglia, la prosa scientifica di Galileo"],
        ['l4-ita-goldoni', "Carlo Goldoni", "La riforma del teatro, La locandiera"],
        ['l4-ita-illuminismo-parini', "L'Illuminismo e Parini", "Il Caffè, Beccaria, Il Giorno"],
        ['l4-ita-alfieri', "Vittorio Alfieri", "Le tragedie e il titanismo"],
        ['l4-ita-foscolo', "Ugo Foscolo", "Ultime lettere di Jacopo Ortis, sonetti, Dei sepolcri"],
        ['l4-ita-romanticismo', "Neoclassicismo e Romanticismo", "Il dibattito classici-romantici in Italia e in Europa"],
        ['l4-ita-manzoni', "Alessandro Manzoni", "Odi, tragedie, poetica del vero e I Promessi sposi"]
      ],
      mat: [
        ['l4-mat-goniometria', "Le funzioni goniometriche", "Radianti, seno, coseno, tangente, grafici e formule"],
        ['l4-mat-equazioni-goniometriche', "Equazioni e disequazioni goniometriche", "Equazioni elementari, lineari e omogenee"],
        ['l4-mat-trigonometria', "La trigonometria", "Triangoli rettangoli, teorema dei seni e del coseno"],
        ['l4-mat-esponenziali-logaritmi', "Esponenziali e logaritmi", "Funzioni, proprietà, equazioni e disequazioni"],
        ['l4-mat-numeri-complessi', "I numeri complessi", "Forma algebrica, trigonometrica ed esponenziale"],
        ['l4-mat-geometria-spazio', "Geometria nello spazio", "Rette e piani, poliedri, solidi di rotazione, aree e volumi"],
        ['l4-mat-calcolo-combinatorio', "Il calcolo combinatorio", "Disposizioni, permutazioni, combinazioni, binomio di Newton"],
        ['l4-mat-probabilita-condizionata', "Probabilità condizionata e Bayes", "Eventi dipendenti e indipendenti, teorema di Bayes"]
      ],
      fis: [
        ['l4-fis-onde-meccaniche', "Le onde meccaniche", "Lunghezza d'onda, frequenza, interferenza, onde stazionarie"],
        ['l4-fis-suono', "Il suono", "Intensità, altezza, timbro, effetto Doppler"],
        ['l4-fis-luce-onda', "La luce come onda", "Interferenza, diffrazione, esperimento di Young"],
        ['l4-fis-carica-campo-elettrico', "Carica e campo elettrico", "Legge di Coulomb, campo elettrico, teorema di Gauss"],
        ['l4-fis-potenziale-condensatori', "Potenziale elettrico e condensatori", "Energia potenziale elettrica, differenza di potenziale, capacità"],
        ['l4-fis-corrente-circuiti', "Corrente elettrica e circuiti", "Leggi di Ohm, resistenze in serie e parallelo, leggi di Kirchhoff, effetto Joule"]
      ],
      sci: [
        ['l4-sci-soluzioni-proprieta', "Le soluzioni", "Concentrazione, solubilità, proprietà colligative"],
        ['l4-sci-cinetica-equilibrio', "Cinetica ed equilibrio chimico", "Velocità di reazione, catalizzatori, principio di Le Châtelier"],
        ['l4-sci-acidi-basi', "Acidi e basi", "Teorie di Arrhenius e Brønsted-Lowry, pH, titolazioni, tamponi"],
        ['l4-sci-redox', "Ossidoriduzioni ed elettrochimica", "Numero di ossidazione, pile, elettrolisi"],
        ['l4-sci-apparati-umani', "Anatomia e fisiologia umana", "Apparati digerente, respiratorio, circolatorio ed escretore"],
        ['l4-sci-sistema-immunitario', "Il sistema immunitario", "Difese innate e adattative, vaccini, anticorpi"],
        ['l4-sci-sistema-nervoso-endocrino', "Sistema nervoso ed endocrino", "Neuroni, sinapsi, cervello, ormoni"]
      ],
      sto: [
        ['l4-sto-assolutismo', "L'età dell'assolutismo", "Luigi XIV, l'Inghilterra parlamentare, guerre di successione"],
        ['l4-sto-illuminismo-riforme', "Illuminismo e riforme", "I philosophes, il dispotismo illuminato"],
        ['l4-sto-rivoluzione-industriale', "La rivoluzione industriale", "Macchina a vapore, fabbrica, nuove classi sociali"],
        ['l4-sto-rivoluzione-americana', "La rivoluzione americana", "Dalle colonie agli Stati Uniti, la Costituzione"],
        ['l4-sto-rivoluzione-francese', "La rivoluzione francese", "1789, i diritti dell'uomo, il Terrore"],
        ['l4-sto-napoleone', "L'età napoleonica", "Ascesa, impero, codice civile, caduta"],
        ['l4-sto-restaurazione-moti', "Restaurazione e moti liberali", "Congresso di Vienna, 1820-21, 1830, 1848"],
        ['l4-sto-risorgimento', "Il Risorgimento e l'Unità d'Italia", "Mazzini, Cavour, Garibaldi, 1861 e i problemi dell'Italia unita"]
      ],
      fil: [
        ['l4-fil-rivoluzione-scientifica', "La rivoluzione scientifica", "Copernico, Bacone, Galileo e il metodo sperimentale"],
        ['l4-fil-cartesio', "Cartesio", "Il dubbio metodico, cogito ergo sum, res cogitans e res extensa"],
        ['l4-fil-spinoza-leibniz', "Spinoza e Leibniz", "Deus sive natura, le monadi, il migliore dei mondi possibili"],
        ['l4-fil-hobbes-locke', "Hobbes, Locke e il pensiero politico", "Stato di natura, contratto sociale, liberalismo"],
        ['l4-fil-empirismo-hume', "Empirismo: Locke, Berkeley, Hume", "Esperienza, idee, causalità e scetticismo"],
        ['l4-fil-kant', "Kant", "Critica della ragion pura, imperativo categorico, il giudizio"],
        ['l4-fil-idealismo-hegel', "Idealismo e Hegel", "Fichte, Schelling, la dialettica e lo spirito"]
      ],
      ing: [
        ['l4-ing-restoration-novel', "The rise of the novel", "Defoe, Swift, Richardson and the 18th century"],
        ['l4-ing-romantic-poetry', "Romantic poetry", "Blake, Wordsworth, Coleridge, Byron, Shelley, Keats"],
        ['l4-ing-gothic-novel', "The Gothic novel", "Mary Shelley's Frankenstein, Jane Austen and the novel of manners"],
        ['l4-ing-victorian-age', "The Victorian Age", "Dickens, the Brontë sisters, Stevenson, Wilde"],
        ['l4-ing-advanced-grammar', "Advanced grammar (B2)", "Wish, if only, modals of deduction, inversion"],
        ['l4-ing-argumentative-writing', "Argumentative writing", "Essays, reports and articles at B2 level"]
      ],
      lat: [
        ['l4-lat-lucrezio', "Lucrezio", "Il De rerum natura e l'epicureismo"],
        ['l4-lat-virgilio', "Virgilio", "Bucoliche, Georgiche ed Eneide"],
        ['l4-lat-orazio', "Orazio", "Satire, Odi, carpe diem e aurea mediocritas"],
        ['l4-lat-elegia-ovidio', "L'elegia e Ovidio", "Tibullo, Properzio, Amores e Metamorfosi"],
        ['l4-lat-livio', "Tito Livio", "Ab urbe condita: la storia di Roma come esempio"],
        ['l4-lat-sintassi-periodo', "La sintassi del periodo", "Proposizioni completive, interrogative indirette, periodo ipotetico"]
      ],
      art: [
        ['l4-art-manierismo', "Il Manierismo", "Pontormo, Rosso Fiorentino, Giulio Romano"],
        ['l4-art-barocco', "Il Barocco", "Caravaggio, Bernini, Borromini, Annibale Carracci"],
        ['l4-art-settecento', "Il Settecento: Rococò e Vedutismo", "Tiepolo, Canaletto, la reggia di Caserta"],
        ['l4-art-neoclassicismo', "Il Neoclassicismo", "Canova, David, l'architettura neoclassica"],
        ['l4-art-romanticismo', "Il Romanticismo", "Goya, Friedrich, Turner, Géricault, Delacroix, Hayez"],
        ['l4-art-realismo-impressionismo', "Realismo e Impressionismo", "Courbet, Macchiaioli, Manet, Monet, Renoir, Degas"]
      ],
      grc: [
        ['l4-grc-teatro-eschilo', "La tragedia ed Eschilo", "Origini del teatro, l'Orestea"],
        ['l4-grc-sofocle', "Sofocle", "Edipo re, Antigone: legge e coscienza"],
        ['l4-grc-euripide', "Euripide", "Medea, Le Baccanti, la crisi dell'eroe"],
        ['l4-grc-aristofane', "Aristofane e la commedia", "Le Nuvole, Lisistrata, la satira politica"],
        ['l4-grc-tucidide', "Tucidide", "La guerra del Peloponneso e il metodo storico"],
        ['l4-grc-oratoria', "L'oratoria", "Lisia, Isocrate, Demostene"]
      ],
      fra: [
        ['l4-fra-lumieres', "L'Illuminismo", "Montesquieu, Voltaire, Rousseau, l'Encyclopédie"],
        ['l4-fra-romantisme', "Il Romanticismo", "Chateaubriand, Lamartine, Victor Hugo"],
        ['l4-fra-realisme', "Realismo e Naturalismo", "Balzac, Stendhal, Flaubert, Zola"],
        ['l4-fra-baudelaire', "Baudelaire e i poeti maledetti", "Les Fleurs du mal, Verlaine, Rimbaud"],
        ['l4-fra-argumenter-b2', "Argomentare in francese (B2)", "Saggio breve, dibattito, connettivi"]
      ],
      spa: [
        ['l4-spa-barroco', "Il Barocco", "Góngora, Quevedo, Calderón de la Barca"],
        ['l4-spa-ilustracion-romanticismo', "Illuminismo e Romanticismo", "Moratín, Larra, Bécquer, Espronceda"],
        ['l4-spa-realismo', "Il Realismo", "Galdós, Clarín, La Regenta"],
        ['l4-spa-modernismo', "Il Modernismo", "Rubén Darío e la nuova poesia"],
        ['l4-spa-argumentar-b2', "Argomentare in spagnolo (B2)", "Saggio breve, dibattito, connettivi"]
      ],
      ted: [
        ['l4-ted-klassik', "Il Classicismo di Weimar", "Goethe, Faust, Schiller"],
        ['l4-ted-romantik', "Il Romanticismo", "Novalis, i fratelli Grimm, Eichendorff"],
        ['l4-ted-realismus', "Realismo e Heine", "Heine, Fontane, Büchner"],
        ['l4-ted-konjunktiv', "Il Konjunktiv II", "Desideri, ipotesi e cortesia"],
        ['l4-ted-argumentieren-b2', "Argomentare in tedesco (B1-B2)", "Saggio breve, dibattito, connettivi"]
      ],
      sum: [
        ['l4-sum-rousseau-pestalozzi', "Rousseau, Pestalozzi e Froebel", "L'Emilio, l'educazione naturale, i giardini d'infanzia"],
        ['l4-sum-pedagogia-ottocento', "La pedagogia dell'Ottocento", "Aporti, la scuola italiana dopo l'Unità, il positivismo"],
        ['l4-sum-sociologia-classici', "I classici della sociologia", "Marx, Weber, Simmel, Pareto"],
        ['l4-sum-antropologia-religione', "Antropologia: religione, mito, rito", "Il sacro, i riti di passaggio, il pensiero magico"],
        ['l4-sum-antropologia-parentela', "Parentela, famiglia e potere", "Sistemi di parentela, Lévi-Strauss, economie tradizionali"],
        ['l4-sum-psicologia-personalita', "Psicologia della personalità", "Freud, le teorie dei tratti, l'identità in adolescenza"]
      ]
    },
    l5: {
      ita: [
        ['l5-ita-leopardi', "Giacomo Leopardi", "Canti, Operette morali, pessimismo e social catena"],
        ['l5-ita-verga-verismo', "Verga e il Verismo", "Naturalismo e Verismo, I Malavoglia, Mastro-don Gesualdo"],
        ['l5-ita-pascoli-dannunzio', "Decadentismo: Pascoli e D'Annunzio", "Il fanciullino, Myricae, l'estetismo, Alcyone"],
        ['l5-ita-pirandello', "Luigi Pirandello", "Umorismo, Il fu Mattia Pascal, Uno, nessuno e centomila, il teatro"],
        ['l5-ita-svevo', "Italo Svevo", "La coscienza di Zeno e l'inetto"],
        ['l5-ita-ungaretti', "Giuseppe Ungaretti", "L'Allegria e la poesia della guerra"],
        ['l5-ita-montale-saba', "Montale e Saba", "Ossi di seppia, il male di vivere, il Canzoniere di Saba"],
        ['l5-ita-paradiso', "La Divina Commedia: il Paradiso", "Struttura, beati, canti principali"],
        ['l5-ita-secondo-novecento', "Il secondo Novecento", "Neorealismo, Calvino, Primo Levi, Pasolini, Morante"]
      ],
      mat: [
        ['l5-mat-limiti', "I limiti", "Definizione, calcolo, forme indeterminate, limiti notevoli"],
        ['l5-mat-continuita', "Le funzioni continue", "Teoremi sulle funzioni continue, punti di discontinuità, asintoti"],
        ['l5-mat-derivate', "Le derivate", "Significato geometrico e fisico, regole di derivazione"],
        ['l5-mat-teoremi-calcolo', "I teoremi del calcolo differenziale", "Rolle, Lagrange, de l'Hôpital; massimi, minimi e flessi"],
        ['l5-mat-studio-funzione', "Lo studio di funzione", "Dal dominio al grafico completo; problemi di ottimizzazione"],
        ['l5-mat-integrali', "Gli integrali", "Integrale indefinito e definito, teorema fondamentale, aree e volumi"],
        ['l5-mat-equazioni-differenziali', "Equazioni differenziali", "Equazioni del primo ordine e applicazioni alla fisica"],
        ['l5-mat-distribuzioni-probabilita', "Distribuzioni di probabilità", "Variabili casuali, distribuzione binomiale, di Poisson e normale"]
      ],
      fis: [
        ['l5-fis-campo-magnetico', "Il campo magnetico", "Magneti, forza di Lorentz, campo generato da correnti, motore elettrico"],
        ['l5-fis-induzione', "L'induzione elettromagnetica", "Legge di Faraday-Neumann-Lenz, alternatore, trasformatore"],
        ['l5-fis-maxwell-onde-em', "Equazioni di Maxwell e onde elettromagnetiche", "Lo spettro elettromagnetico, luce e radio"],
        ['l5-fis-relativita', "La relatività ristretta", "Postulati di Einstein, dilatazione del tempo, E = mc²"],
        ['l5-fis-quantistica', "La fisica quantistica", "Corpo nero, effetto fotoelettrico, dualismo onda-particella, indeterminazione"],
        ['l5-fis-nucleare-particelle', "Fisica nucleare e particelle", "Radioattività, fissione, fusione, il Modello Standard"]
      ],
      sci: [
        ['l5-sci-chimica-organica', "La chimica organica", "Il carbonio, idrocarburi, isomeria"],
        ['l5-sci-gruppi-funzionali', "I gruppi funzionali", "Alcoli, aldeidi, chetoni, acidi carbossilici, ammine, polimeri"],
        ['l5-sci-biochimica', "Biochimica e metabolismo", "Biomolecole, enzimi, respirazione cellulare, fotosintesi"],
        ['l5-sci-biotecnologie', "Le biotecnologie", "DNA ricombinante, PCR, CRISPR, OGM, applicazioni mediche"],
        ['l5-sci-tettonica', "La tettonica delle placche", "Struttura interna della Terra, deriva dei continenti, margini"],
        ['l5-sci-vulcani-terremoti', "Vulcani e terremoti", "Fenomeni vulcanici e sismici, rischio in Italia"],
        ['l5-sci-clima-atmosfera', "Atmosfera, clima e cambiamenti climatici", "Effetto serra, modelli climatici, sostenibilità"]
      ],
      sto: [
        ['l5-sto-imperialismo', "Seconda rivoluzione industriale e imperialismo", "Società di massa, colonialismo, Belle Époque"],
        ['l5-sto-eta-giolittiana', "L'età giolittiana", "Riforme, questione meridionale, guerra di Libia"],
        ['l5-sto-prima-guerra', "La Prima guerra mondiale", "Cause, guerra di trincea, l'Italia in guerra, i trattati di pace"],
        ['l5-sto-rivoluzione-russa', "La rivoluzione russa e l'URSS", "Lenin, Stalin, totalitarismo sovietico"],
        ['l5-sto-fascismo', "Il fascismo", "Dalla crisi del dopoguerra alla dittatura di Mussolini"],
        ['l5-sto-crisi-nazismo', "La crisi del 1929 e il nazismo", "Grande depressione, New Deal, Hitler e il Terzo Reich"],
        ['l5-sto-seconda-guerra-shoah', "La Seconda guerra mondiale e la Shoah", "Il conflitto, la Resistenza, lo sterminio degli ebrei"],
        ['l5-sto-guerra-fredda', "La guerra fredda", "Blocchi contrapposti, decolonizzazione, crollo del muro di Berlino"],
        ['l5-sto-italia-repubblicana', "L'Italia repubblicana e la Costituzione", "1946, la Costituzione, miracolo economico, anni di piombo"],
        ['l5-sto-mondo-contemporaneo', "Il mondo contemporaneo", "Globalizzazione, Unione europea, nuove sfide del XXI secolo"]
      ],
      fil: [
        ['l5-fil-schopenhauer-kierkegaard', "Schopenhauer e Kierkegaard", "La volontà, il dolore, l'esistenza e la scelta"],
        ['l5-fil-marx', "Marx", "Materialismo storico, lavoro, alienazione, il Capitale"],
        ['l5-fil-positivismo', "Il positivismo", "Comte, la fiducia nella scienza, l'evoluzionismo"],
        ['l5-fil-nietzsche', "Nietzsche", "Apollineo e dionisiaco, la morte di Dio, l'oltreuomo"],
        ['l5-fil-freud', "Freud e la psicoanalisi", "L'inconscio, i sogni, Es, Io e Super-io"],
        ['l5-fil-epistemologia', "Filosofia della scienza nel Novecento", "Circolo di Vienna, Popper e la falsificabilità, Kuhn"],
        ['l5-fil-esistenzialismo', "Esistenzialismo e fenomenologia", "Husserl, Heidegger, Sartre"],
        ['l5-fil-filosofia-politica', "Filosofia politica contemporanea", "Arendt, Rawls, etica e responsabilità"]
      ],
      ing: [
        ['l5-ing-modernism', "Modernism", "Joyce, Woolf, Eliot and the stream of consciousness"],
        ['l5-ing-war-poets', "The War Poets", "Owen, Sassoon, Brooke and the First World War"],
        ['l5-ing-dystopian-novel', "The dystopian novel", "Orwell, Huxley and the totalitarian nightmare"],
        ['l5-ing-theatre-absurd', "The Theatre of the Absurd", "Beckett, Waiting for Godot"],
        ['l5-ing-contemporary', "Contemporary literature in English", "Post-colonial voices and today's authors"],
        ['l5-ing-exam-skills', "Exam skills (B2-C1)", "Text analysis, essay and oral exam preparation"]
      ],
      lat: [
        ['l5-lat-seneca', "Seneca", "Dialoghi, Lettere a Lucilio, tragedie: il tempo e la saggezza"],
        ['l5-lat-lucano-petronio', "Lucano e Petronio", "La Pharsalia e il Satyricon"],
        ['l5-lat-quintiliano-marziale', "Quintiliano, Marziale e Giovenale", "L'oratore ideale, l'epigramma, la satira"],
        ['l5-lat-tacito', "Tacito", "Agricola, Germania, Annales e Historiae"],
        ['l5-lat-apuleio', "Apuleio", "Le Metamorfosi e la favola di Amore e Psiche"],
        ['l5-lat-letteratura-cristiana', "La letteratura cristiana", "Agostino e le Confessioni, Girolamo e la Vulgata"]
      ],
      art: [
        ['l5-art-postimpressionismo', "Il Postimpressionismo", "Cézanne, Seurat, Van Gogh, Gauguin, Toulouse-Lautrec"],
        ['l5-art-art-nouveau', "Art Nouveau e Secessione", "Klimt, Gaudí, Munch e l'architettura del ferro"],
        ['l5-art-avanguardie', "Le avanguardie storiche", "Espressionismo, Cubismo (Picasso) e Futurismo (Boccioni)"],
        ['l5-art-astrattismo-dada', "Astrattismo, Dada e Surrealismo", "Kandinskij, Mondrian, Duchamp, Magritte, Dalí, de Chirico"],
        ['l5-art-architettura-moderna', "L'architettura moderna", "Bauhaus, Le Corbusier, Wright, il razionalismo"],
        ['l5-art-contemporanea', "L'arte contemporanea", "Pop Art, informale, arte concettuale e street art"]
      ],
      grc: [
        ['l5-grc-platone-greco', "Platone in lingua originale", "Apologia, Simposio, Repubblica: leggere i dialoghi"],
        ['l5-grc-menandro', "Menandro e la commedia nuova", "Il Dyskolos e la vita quotidiana"],
        ['l5-grc-ellenismo-poesia', "La poesia ellenistica", "Callimaco, Teocrito, Apollonio Rodio, l'epigramma"],
        ['l5-grc-polibio-plutarco', "Polibio e Plutarco", "La storia universale e le Vite parallele"],
        ['l5-grc-seconda-sofistica', "Seconda sofistica e romanzo", "Luciano, il romanzo greco"],
        ['l5-grc-nuovo-testamento', "Il Nuovo Testamento e i Padri", "Il greco della koinè, i Vangeli"]
      ],
      fra: [
        ['l5-fra-proust', "Proust e il romanzo del Novecento", "À la recherche du temps perdu, la memoria"],
        ['l5-fra-surrealisme', "Avanguardie e Surrealismo", "Apollinaire, Breton"],
        ['l5-fra-existentialisme', "Esistenzialismo e assurdo", "Sartre, Camus, Beckett, Ionesco"],
        ['l5-fra-francophonie-litterature', "Letterature francofone", "Senghor, Césaire e le voci dal mondo"],
        ['l5-fra-esame', "Verso l'esame (B2)", "Analisi del testo, saggio e colloquio in francese"]
      ],
      spa: [
        ['l5-spa-generacion-98-27', "Generazione del '98 e del '27", "Unamuno, Machado, García Lorca"],
        ['l5-spa-guerra-civil', "Guerra civile e dopoguerra", "Cela, la letteratura dell'esilio"],
        ['l5-spa-boom', "Il boom latinoamericano", "García Márquez, Cortázar, Vargas Llosa, Borges"],
        ['l5-spa-contemporanea', "Letteratura contemporanea in spagnolo", "Neruda, Allende, gli autori di oggi"],
        ['l5-spa-examen', "Verso l'esame (B2)", "Analisi del testo, saggio e colloquio in spagnolo"]
      ],
      ted: [
        ['l5-ted-jahrhundertwende', "La letteratura di inizio Novecento", "Thomas Mann, Rilke, Schnitzler"],
        ['l5-ted-kafka', "Franz Kafka", "La metamorfosi, Il processo"],
        ['l5-ted-expressionismus-brecht', "Espressionismo e Brecht", "Il teatro epico, la letteratura e il nazismo"],
        ['l5-ted-nachkriegszeit', "Dopoguerra e Germania divisa", "Böll, Grass, la letteratura della DDR, la riunificazione"],
        ['l5-ted-pruefung', "Verso l'esame (B1-B2)", "Analisi del testo, saggio e colloquio in tedesco"]
      ],
      sum: [
        ['l5-sum-attivismo-dewey', "L'attivismo pedagogico e Dewey", "Le scuole nuove, imparare facendo"],
        ['l5-sum-montessori', "Maria Montessori", "Il metodo, la Casa dei bambini, i materiali"],
        ['l5-sum-pedagogia-novecento', "Pedagogia del Novecento", "Don Milani, Freire, Bruner, educazione inclusiva"],
        ['l5-sum-sociologia-globalizzazione', "Sociologia: globalizzazione e società multiculturale", "Bauman, migrazioni, disuguaglianze"],
        ['l5-sum-welfare-lavoro', "Welfare, lavoro e politiche sociali", "Lo Stato sociale, il terzo settore"],
        ['l5-sum-media-comunicazione', "Media e comunicazione di massa", "Dalla televisione ai social network"],
        ['l5-sum-ricerca-sociale', "La ricerca nelle scienze umane", "Metodi quantitativi e qualitativi, questionari e interviste"]
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
    'p1-ita-vocali-consonanti', 'p1-ita-alfabeto', 'p1-ita-sillabe', 'p1-ita-digrammi',
    'p1-ita-prime-frasi', 'p1-ita-maiuscola-punto', 'p1-mat-numeri-20', 'p1-mat-confronto',
    'p1-mat-addizioni-20', 'p1-mat-sottrazioni-20', 'p1-mat-decine-unita', 'p1-mat-forme',
    'p1-mat-spazio', 'p1-sci-cinque-sensi', 'p1-sci-materiali', 'p1-sci-stagioni',
    'p1-sci-corpo', 'p1-sto-prima-dopo', 'p1-sto-giornata', 'p1-sto-mesi',
    'p1-sto-mia-storia', 'p1-sto-racconti-antichi', 'p1-geo-posizioni', 'p1-geo-percorsi',
    'p1-geo-spazi-casa-scuola', 'p1-ing-hello', 'p1-ing-colours', 'p1-ing-numbers-10',
    'p1-ing-school', 'p1-tec-oggetti', 'p1-tec-coding-unplugged', 'p2-ita-doppie',
    'p2-ita-accento-apostrofo', 'p2-ita-nomi', 'p2-ita-articoli', 'p2-ita-aggettivi',
    'p2-ita-verbi-azioni', 'p2-ita-racconto', 'p2-mat-numeri-100', 'p2-mat-addizioni-colonna',
    'p2-mat-sottrazioni-colonna', 'p2-mat-tabelline', 'p2-mat-divisione-intro', 'p2-mat-problemi',
    'p2-mat-misure', 'p2-sci-viventi-non-viventi', 'p2-sci-animali', 'p2-sci-piante-parti',
    'p2-sci-acqua-stati', 'p2-sto-orologio', 'p2-sto-calendario', 'p2-sto-fonti',
    'p2-sto-cambiamenti', 'p2-sto-racconti-italia', 'p2-geo-punti-riferimento', 'p2-geo-mappe',
    'p2-geo-quartiere', 'p2-ing-animals-colours', 'p2-ing-family', 'p2-ing-food',
    'p2-ing-numbers-20', 'p2-tec-computer', 'p2-tec-algoritmi', 'p3-ita-nomi-approfondimento',
    'p3-ita-verbo-essere-avere', 'p3-ita-coniugazioni', 'p3-ita-frase-minima', 'p3-ita-testo-descrittivo',
    'p3-ita-fiaba-favola', 'p3-mat-numeri-1000', 'p3-mat-moltiplicazioni-colonna', 'p3-mat-divisioni',
    'p3-mat-frazioni-intro', 'p3-mat-linee-angoli', 'p3-mat-misure-lunghezza', 'p3-mat-statistica',
    'p3-sci-ciclo-acqua', 'p3-sci-metodo-scientifico', 'p3-sci-aria', 'p3-sci-suolo',
    'p3-sci-catene-alimentari', 'p3-sto-storia-della-terra', 'p3-sto-linea-tempo', 'p3-sto-primi-uomini',
    'p3-sto-paleolitico', 'p3-sto-neolitico', 'p3-sto-eta-metalli', 'p3-geo-paesaggi',
    'p3-geo-mare-coste', 'p3-geo-punti-cardinali', 'p3-geo-fiumi-laghi', 'p3-geo-carte',
    'p3-ing-body', 'p3-ing-clothes', 'p3-ing-house', 'p3-ing-can',
    'p3-tec-coding-blocchi', 'p3-tec-disegno-misura', 'p4-ita-pronomi', 'p4-ita-modi-verbo',
    'p4-ita-complementi', 'p4-ita-testo-narrativo', 'p4-ita-poesia', 'p4-ita-riassunto',
    'p4-mat-grandi-numeri', 'p4-mat-frazioni', 'p4-mat-numeri-decimali', 'p4-mat-divisioni-due-cifre',
    'p4-mat-poligoni', 'p4-mat-perimetro', 'p4-mat-misure', 'p4-sci-piante',
    'p4-sci-classificazione-animali', 'p4-sci-ecosistemi', 'p4-sci-materia', 'p4-sci-calore',
    'p4-sto-mesopotamia', 'p4-sto-egizi', 'p4-sto-indo-cina', 'p4-sto-ebrei-fenici',
    'p4-sto-cretesi-micenei', 'p4-sto-greci', 'p4-sto-alessandro', 'p4-geo-italia-fisica',
    'p4-geo-clima', 'p4-geo-settori-economici', 'p4-geo-italia-politica', 'p4-ing-daily-routine',
    'p4-ing-present-continuous', 'p4-ing-places-town', 'p4-ing-animals-habitats', 'p4-tec-condizioni',
    'p4-tec-internet-sicuro', 'p5-ita-analisi-grammaticale', 'p5-ita-analisi-logica', 'p5-ita-verbi-transitivi',
    'p5-ita-testo-argomentativo', 'p5-ita-testo-regolativo', 'p5-ita-lessico', 'p5-mat-numeri-relativi-intro',
    'p5-mat-operazioni-decimali', 'p5-mat-percentuali', 'p5-mat-potenze-intro', 'p5-mat-perimetro-area',
    'p5-mat-cerchio', 'p5-mat-solidi-intro', 'p5-mat-probabilita', 'p5-sci-sistema-solare',
    'p5-sci-corpo-umano', 'p5-sci-alimentazione', 'p5-sci-energia', 'p5-sci-luce-suono',
    'p5-sto-italici-etruschi', 'p5-sto-roma-monarchia-repubblica', 'p5-sto-romani', 'p5-sto-cristianesimo-caduta',
    'p5-sto-regni-romano-barbarici', 'p5-sto-giustiniano-monachesimo', 'p5-sto-espansione-islamica', 'p5-geo-regioni-nord',
    'p5-geo-regioni-centro', 'p5-geo-regioni-sud-isole', 'p5-geo-costituzione', 'p5-geo-unione-europea',
    'p5-ing-past-simple-be', 'p5-ing-comparatives', 'p5-ing-jobs', 'p5-ing-uk',
    'p5-tec-dati-binario', 'p5-tec-ia-intro', 'm1-ita-fonologia-ortografia', 'm1-ita-morfologia',
    'm1-ita-epica', 'm1-ita-mito-leggenda', 'm1-ita-favola-fiaba', 'm1-ita-testo-espressivo',
    'm1-mat-insiemi', 'm1-mat-numeri-naturali', 'm1-mat-potenze', 'm1-mat-numeri-primi-mcd-mcm',
    'm1-mat-frazioni', 'm1-mat-geometria-base', 'm1-mat-triangoli', 'm1-sci-metodo-misura',
    'm1-sci-materia-stati', 'm1-sci-cellula', 'm1-sci-regni-viventi', 'm1-sci-piante',
    'm1-sci-animali-invertebrati-vertebrati', 'm1-sto-bizantini-longobardi', 'm1-sto-islam', 'm1-sto-carlo-magno-feudalesimo',
    'm1-sto-comuni', 'm1-sto-crociate', 'm1-sto-crisi-trecento', 'm1-sto-umanesimo-rinascimento',
    'm1-sto-scoperte-geografiche', 'm1-sto-riforma', 'm1-sto-guerra-trentanni', 'm1-geo-strumenti',
    'm1-geo-coordinate', 'm1-geo-rilievi-acque', 'm1-geo-clima-ambienti', 'm1-geo-popolazione-citta',
    'm1-ing-present-simple', 'm1-ing-possessives', 'm1-ing-there-is-are', 'm1-ing-adverbs-frequency',
    'm1-tec-disegno-tecnico', 'm1-tec-materiali', 'm1-tec-algoritmi-diagrammi', 'm1-tec-cittadinanza-digitale',
    'm2-ita-analisi-logica', 'm2-ita-testo-espositivo', 'm2-ita-generi-narrativi', 'm2-ita-letteratura-origini',
    'm2-ita-poesia', 'm2-mat-frazioni-decimali', 'm2-mat-radici', 'm2-mat-rapporti-proporzioni',
    'm2-mat-proporzionalita', 'm2-mat-aree', 'm2-mat-pitagora', 'm2-mat-trasformazioni',
    'm2-sci-chimica', 'm2-sci-forze-moto', 'm2-sci-apparato-circolatorio', 'm2-sci-apparato-digerente',
    'm2-sci-apparato-respiratorio', 'm2-sci-scheletro-muscoli', 'm2-sto-assolutismo', 'm2-sto-illuminismo',
    'm2-sto-rivoluzioni', 'm2-sto-napoleone', 'm2-sto-risorgimento', 'm2-sto-seconda-rivoluzione-industriale',
    'm2-sto-scienza-ottocento', 'm2-geo-europa-unione', 'm2-geo-europa-occidentale', 'm2-geo-europa-centrale',
    'm2-geo-europa-orientale', 'm2-geo-europa-mediterranea', 'm2-geo-europa-nordica', 'm2-ing-past-simple',
    'm2-ing-future', 'm2-ing-countable', 'm2-ing-past-continuous', 'm2-tec-proiezioni-ortogonali',
    'm2-tec-programmazione', 'm2-tec-energia', 'm2-tec-reti', 'm2-lat-lettura',
    'm2-lat-parole-italiano', 'm2-lat-prima-declinazione', 'm3-ita-analisi-periodo', 'm3-ita-testo-argomentativo',
    'm3-ita-letteratura-ottocento', 'm3-ita-letteratura-novecento', 'm3-ita-romanzo', 'm3-mat-numeri-relativi',
    'm3-mat-calcolo-letterale', 'm3-mat-equazioni', 'm3-mat-piano-cartesiano', 'm3-mat-cerchio',
    'm3-mat-solidi', 'm3-mat-probabilita', 'm3-sci-struttura-terra-vulcani', 'm3-sci-universo',
    'm3-sci-sistema-nervoso', 'm3-sci-riproduzione-genetica', 'm3-sci-elettricita', 'm3-sci-evoluzione',
    'm3-sto-prima-guerra-mondiale', 'm3-sto-totalitarismi', 'm3-sto-seconda-guerra-mondiale', 'm3-sto-repubblica-italiana',
    'm3-sto-guerra-fredda', 'm3-sto-decolonizzazione', 'm3-sto-globalizzazione', 'm3-geo-pianeta',
    'm3-geo-globalizzazione', 'm3-geo-asia', 'm3-geo-africa', 'm3-geo-america',
    'm3-geo-oceania', 'm3-ing-present-perfect', 'm3-ing-conditionals', 'm3-ing-passive',
    'm3-ing-reported-speech', 'm3-tec-assonometria', 'm3-tec-elettricita-elettronica', 'm3-tec-ia-dati',
    'm3-tec-robotica', 'm3-lat-casi-funzioni', 'm3-lat-verbo-sum', 'm3-lat-motti-celebri',
    'l1-ita-comunicazione-registri', 'l1-ita-morfologia-sintassi', 'l1-ita-testo-narrativo', 'l1-ita-generi-narrativi',
    'l1-ita-epica-omero', 'l1-ita-eneide', 'l1-ita-riassunto-espositivo', 'l1-mat-insiemi-logica',
    'l1-mat-insiemi-numerici', 'l1-mat-monomi-polinomi', 'l1-mat-scomposizione', 'l1-mat-frazioni-algebriche',
    'l1-mat-equazioni-primo-grado', 'l1-mat-geometria-euclidea', 'l1-mat-parallelismo', 'l1-mat-statistica',
    'l1-fis-grandezze-misure', 'l1-fis-errori-misura', 'l1-fis-vettori-forze', 'l1-fis-equilibrio-solidi',
    'l1-fis-equilibrio-fluidi', 'l1-fis-ottica-geometrica', 'l1-sci-materia-miscugli', 'l1-sci-trasformazioni',
    'l1-sci-leggi-ponderali', 'l1-sci-terra-sistema-solare', 'l1-sci-moti-terra', 'l1-sci-idrosfera',
    'l1-sci-atmosfera', 'l1-sto-preistoria', 'l1-sto-mesopotamia-egitto', 'l1-sto-ebrei-fenici',
    'l1-sto-grecia-polis', 'l1-sto-guerre-persiane-pericle', 'l1-sto-alessandro-ellenismo', 'l1-sto-roma-repubblica',
    'l1-geo-strumenti', 'l1-geo-clima-ambienti', 'l1-geo-popolazione', 'l1-geo-migrazioni',
    'l1-geo-citta', 'l1-geo-risorse-sostenibilita', 'l1-sum-psicologia-intro', 'l1-sum-percezione-attenzione',
    'l1-sum-memoria-apprendimento', 'l1-sum-metodo-studio', 'l1-sum-educazione-antica', 'l1-sum-educazione-roma',
    'l1-dir-norma-giuridica', 'l1-dir-persone-diritti', 'l1-dir-stato', 'l1-dir-costituzione-principi',
    'l1-dir-economia-bisogni', 'l1-dir-sistemi-economici', 'l1-ing-present-tenses', 'l1-ing-past-tenses',
    'l1-ing-future-forms', 'l1-ing-modal-verbs', 'l1-ing-describing', 'l1-ing-writing-emails',
    'l1-fra-se-presenter', 'l1-fra-present', 'l1-fra-quotidien', 'l1-fra-negation-questions',
    'l1-fra-passe-compose', 'l1-spa-presentarse', 'l1-spa-presente', 'l1-spa-vida-cotidiana',
    'l1-spa-gustar', 'l1-spa-preterito-perfecto', 'l1-ted-sich-vorstellen', 'l1-ted-praesens',
    'l1-ted-artikel-kasus', 'l1-ted-alltag', 'l1-ted-modalverben', 'l1-lat-alfabeto-pronuncia',
    'l1-lat-prima-seconda-declinazione', 'l1-lat-indicativo-coniugazioni', 'l1-lat-aggettivi-prima-classe', 'l1-lat-complementi',
    'l1-lat-terza-declinazione', 'l1-lat-metodo-traduzione', 'l1-grc-alfabeto', 'l1-grc-articolo-prima-declinazione',
    'l1-grc-seconda-declinazione', 'l1-grc-presente-indicativo', 'l1-grc-imperfetto-aumento', 'l1-grc-verbi-contratti',
    'l1-grc-metodo-traduzione', 'l1-art-costruzioni-geometriche', 'l1-art-proiezioni-ortogonali', 'l1-art-preistoria',
    'l1-art-mesopotamia-egitto', 'l1-art-creta-micene', 'l1-art-grecia-templi', 'l1-art-grecia-scultura',
    'l2-ita-promessi-sposi', 'l2-ita-testo-poetico', 'l2-ita-figure-retoriche', 'l2-ita-teatro',
    'l2-ita-sintassi-periodo', 'l2-ita-testo-argomentativo', 'l2-ita-origini-letteratura', 'l2-mat-disequazioni-primo-grado',
    'l2-mat-sistemi-lineari', 'l2-mat-radicali', 'l2-mat-piano-cartesiano-retta', 'l2-mat-equazioni-secondo-grado',
    'l2-mat-circonferenza-poligoni', 'l2-mat-equivalenza-pitagora', 'l2-mat-similitudine', 'l2-mat-probabilita',
    'l2-fis-moto-rettilineo', 'l2-fis-moto-accelerato', 'l2-fis-moti-piano', 'l2-fis-principi-dinamica',
    'l2-fis-lavoro-energia', 'l2-fis-temperatura-calore', 'l2-sci-mole', 'l2-sci-molecole-vita',
    'l2-sci-cellula', 'l2-sci-membrana-trasporti', 'l2-sci-mitosi-meiosi', 'l2-sci-evoluzione-classificazione',
    'l2-sci-ecosistemi', 'l2-sto-crisi-repubblica', 'l2-sto-augusto-impero', 'l2-sto-cristianesimo',
    'l2-sto-crisi-caduta', 'l2-sto-regni-bizantini', 'l2-sto-islam', 'l2-sto-carlo-magno-feudalesimo',
    'l2-geo-europa-ue', 'l2-geo-italia-mondo', 'l2-geo-asia', 'l2-geo-africa',
    'l2-geo-americhe', 'l2-geo-globalizzazione', 'l2-sum-comunicazione', 'l2-sum-psicologia-sociale',
    'l2-sum-emozioni-motivazione', 'l2-sum-intelligenza', 'l2-sum-educazione-cristiana', 'l2-sum-medioevo-universita',
    'l2-dir-parlamento', 'l2-dir-governo-presidente', 'l2-dir-magistratura-corte', 'l2-dir-ue-onu',
    'l2-dir-mercato', 'l2-dir-moneta-pil', 'l2-ing-present-perfect', 'l2-ing-conditionals',
    'l2-ing-passive', 'l2-ing-relative-clauses', 'l2-ing-reported-speech', 'l2-ing-essay-writing',
    'l2-fra-imparfait', 'l2-fra-futur-conditionnel', 'l2-fra-pronoms', 'l2-fra-france-francophonie',
    'l2-fra-ecrire-b1', 'l2-spa-indefinido', 'l2-spa-futuro-condicional', 'l2-spa-ser-estar',
    'l2-spa-mundo-hispano', 'l2-spa-escribir-b1', 'l2-ted-perfekt', 'l2-ted-dativ-praepositionen',
    'l2-ted-nebensaetze', 'l2-ted-deutschland', 'l2-ted-schreiben-b1', 'l2-lat-terza-aggettivi-seconda',
    'l2-lat-quarta-quinta', 'l2-lat-pronomi', 'l2-lat-perfetto', 'l2-lat-participio-ablativo',
    'l2-lat-congiuntivo-finali', 'l2-lat-cum-infinitive', 'l2-grc-terza-declinazione', 'l2-grc-aggettivi-comparativi',
    'l2-grc-pronomi', 'l2-grc-verbi-mi', 'l2-grc-futuro-aoristo', 'l2-grc-participio',
    'l2-grc-congiuntivo-ottativo', 'l2-art-roma', 'l2-art-paleocristiana-bizantina', 'l2-art-romanico',
    'l2-art-gotico', 'l2-art-proiezioni-solidi', 'l2-art-assonometria', 'l3-ita-stilnovo',
    'l3-ita-dante', 'l3-ita-inferno', 'l3-ita-petrarca', 'l3-ita-boccaccio',
    'l3-ita-umanesimo-rinascimento', 'l3-ita-ariosto', 'l3-ita-machiavelli', 'l3-ita-tasso',
    'l3-mat-equazioni-disequazioni', 'l3-mat-funzioni', 'l3-mat-retta-analitica', 'l3-mat-parabola',
    'l3-mat-circonferenza', 'l3-mat-ellisse-iperbole', 'l3-mat-successioni', 'l3-mat-statistica-bivariata',
    'l3-fis-quantita-moto-urti', 'l3-fis-moto-rotatorio', 'l3-fis-gravitazione', 'l3-fis-fluidodinamica',
    'l3-fis-gas-perfetti', 'l3-fis-primo-principio', 'l3-fis-secondo-principio', 'l3-sci-modelli-atomici',
    'l3-sci-tavola-periodica', 'l3-sci-legami-chimici', 'l3-sci-nomenclatura', 'l3-sci-reazioni-stechiometria',
    'l3-sci-dna-genetica', 'l3-sci-corpo-umano', 'l3-sto-comuni-impero-papato', 'l3-sto-crisi-trecento',
    'l3-sto-monarchie-nazionali', 'l3-sto-signorie-rinascimento', 'l3-sto-scoperte-geografiche', 'l3-sto-riforma-controriforma',
    'l3-sto-carlo-v-filippo-ii', 'l3-sto-seicento', 'l3-fil-nascita-presocratici', 'l3-fil-sofisti-socrate',
    'l3-fil-platone', 'l3-fil-aristotele', 'l3-fil-ellenismo', 'l3-fil-agostino',
    'l3-fil-scolastica-tommaso', 'l3-sum-antropologia-cultura', 'l3-sum-antropologia-metodi', 'l3-sum-sociologia-nascita',
    'l3-sum-psicologia-sviluppo', 'l3-sum-umanesimo-comenio', 'l3-sum-controriforma-gesuiti', 'l3-ing-middle-ages-chaucer',
    'l3-ing-renaissance', 'l3-ing-shakespeare', 'l3-ing-mixed-tenses', 'l3-ing-linking-words',
    'l3-ing-speaking-b2', 'l3-fra-moyen-age', 'l3-fra-renaissance', 'l3-fra-classicisme',
    'l3-fra-subjonctif', 'l3-fra-analyse-texte', 'l3-spa-edad-media', 'l3-spa-siglo-de-oro',
    'l3-spa-cervantes', 'l3-spa-subjuntivo', 'l3-spa-analisis-texto', 'l3-ted-mittelalter',
    'l3-ted-aufklaerung', 'l3-ted-praeteritum', 'l3-ted-passiv', 'l3-ted-textanalyse',
    'l3-lat-sintassi-casi', 'l3-lat-gerundio-gerundivo', 'l3-lat-origini-teatro', 'l3-lat-catullo',
    'l3-lat-cesare', 'l3-lat-sallustio', 'l3-lat-cicerone', 'l3-grc-perfetto-sintassi',
    'l3-grc-omero', 'l3-grc-esiodo', 'l3-grc-lirica-arcaica', 'l3-grc-lirica-corale',
    'l3-grc-erodoto', 'l3-art-primo-rinascimento', 'l3-art-quattrocento', 'l3-art-leonardo',
    'l3-art-michelangelo', 'l3-art-raffaello', 'l3-art-venezia', 'l3-art-prospettiva',
    'l4-ita-purgatorio', 'l4-ita-barocco-galileo', 'l4-ita-goldoni', 'l4-ita-illuminismo-parini',
    'l4-ita-alfieri', 'l4-ita-foscolo', 'l4-ita-romanticismo', 'l4-ita-manzoni',
    'l4-mat-goniometria', 'l4-mat-equazioni-goniometriche', 'l4-mat-trigonometria', 'l4-mat-esponenziali-logaritmi',
    'l4-mat-numeri-complessi', 'l4-mat-geometria-spazio', 'l4-mat-calcolo-combinatorio', 'l4-mat-probabilita-condizionata',
    'l4-fis-onde-meccaniche', 'l4-fis-suono', 'l4-fis-luce-onda', 'l4-fis-carica-campo-elettrico',
    'l4-fis-potenziale-condensatori', 'l4-fis-corrente-circuiti', 'l4-sci-soluzioni-proprieta', 'l4-sci-cinetica-equilibrio',
    'l4-sci-acidi-basi', 'l4-sci-redox', 'l4-sci-apparati-umani', 'l4-sci-sistema-immunitario',
    'l4-sci-sistema-nervoso-endocrino', 'l4-sto-assolutismo', 'l4-sto-illuminismo-riforme', 'l4-sto-rivoluzione-industriale',
    'l4-sto-rivoluzione-americana', 'l4-sto-rivoluzione-francese', 'l4-sto-napoleone', 'l4-sto-restaurazione-moti',
    'l4-sto-risorgimento', 'l4-fil-rivoluzione-scientifica', 'l4-fil-cartesio', 'l4-fil-spinoza-leibniz',
    'l4-fil-hobbes-locke', 'l4-fil-empirismo-hume', 'l4-fil-kant', 'l4-fil-idealismo-hegel',
    'l4-sum-rousseau-pestalozzi', 'l4-sum-pedagogia-ottocento', 'l4-sum-sociologia-classici', 'l4-sum-antropologia-religione',
    'l4-sum-antropologia-parentela', 'l4-sum-psicologia-personalita', 'l4-ing-restoration-novel', 'l4-ing-romantic-poetry',
    'l4-ing-gothic-novel', 'l4-ing-victorian-age', 'l4-ing-advanced-grammar', 'l4-ing-argumentative-writing',
    'l4-fra-lumieres', 'l4-fra-romantisme', 'l4-fra-realisme', 'l4-fra-baudelaire',
    'l4-fra-argumenter-b2', 'l4-spa-barroco', 'l4-spa-ilustracion-romanticismo', 'l4-spa-realismo',
    'l4-spa-modernismo', 'l4-spa-argumentar-b2', 'l4-ted-klassik', 'l4-ted-romantik',
    'l4-ted-realismus', 'l4-ted-konjunktiv', 'l4-ted-argumentieren-b2', 'l4-lat-lucrezio',
    'l4-lat-virgilio', 'l4-lat-orazio', 'l4-lat-elegia-ovidio', 'l4-lat-livio',
    'l4-lat-sintassi-periodo', 'l4-grc-teatro-eschilo', 'l4-grc-sofocle', 'l4-grc-euripide',
    'l4-grc-aristofane', 'l4-grc-tucidide', 'l4-grc-oratoria', 'l4-art-manierismo',
    'l4-art-barocco', 'l4-art-settecento', 'l4-art-neoclassicismo', 'l4-art-romanticismo',
    'l4-art-realismo-impressionismo', 'l5-mat-limiti', 'l5-mat-continuita', 'l5-mat-derivate',
    'l5-mat-teoremi-calcolo', 'l5-mat-studio-funzione', 'l5-mat-integrali', 'l5-mat-equazioni-differenziali',
    'l5-mat-distribuzioni-probabilita', 'l5-fis-campo-magnetico', 'l5-fis-induzione', 'l5-fis-maxwell-onde-em',
    'l5-fis-relativita', 'l5-fis-quantistica', 'l5-fis-nucleare-particelle', 'l5-ing-modernism',
    'l5-ing-war-poets', 'l5-ing-dystopian-novel', 'l5-ing-theatre-absurd', 'l5-ing-contemporary',
    'l5-ing-exam-skills'
  ]
};
