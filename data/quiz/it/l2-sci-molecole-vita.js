QBANK("it", "l2-sci-molecole-vita", {
  f: [
    { type: "mc", q: "Quale molecola è il principale solvente nei viventi?", options: ["Acqua", "Glucosio", "Olio"], answer: 0, explain: "L'acqua è il solvente della vita." },
    { type: "mc", q: "Il glucosio appartiene ai...", options: ["Lipidi", "Carboidrati", "Proteine"], answer: 1, explain: "È un monosaccaride." },
    { type: "tf", q: "Gli oli sono solubili in acqua.", answer: false, explain: "I lipidi sono apolari e non si sciolgono in acqua." },
    { type: "text", q: "Come si chiamano i «mattoni» che formano le proteine?", answer: ["amminoacidi", "gli amminoacidi", "aminoacidi", "amminoacido"], explain: "Le proteine sono catene di amminoacidi." },
    { type: "mc", q: "Il DNA ha forma di...", options: ["Singola catena a zig-zag", "Doppia elica", "Anello singolo"], answer: 1, explain: "Watson e Crick (1953) proposero la doppia elica." }
  ],
  m: [
    { type: "tf", q: "Nel DNA la timina si appaia con l'adenina.", answer: true, explain: "A–T (2 legami a idrogeno)." },
    { type: "mc", q: "Quale di questi è un polisaccaride vegetale di riserva?", options: ["Glicogeno", "Amido", "Colesterolo", "Emoglobina"], answer: 1, explain: "L'amido è la riserva delle piante; il glicogeno è quella degli animali." },
    { type: "mc", q: "Quale funzione hanno gli enzimi?", options: ["Immagazzinano energia", "Accelerano le reazioni chimiche", "Formano le membrane", "Trasportano i grassi"], answer: 1, explain: "Gli enzimi sono catalizzatori biologici, di natura proteica." },
    { type: "num", q: "Quante kcal si ricavano da 20 g di carboidrati (4 kcal/g)?", answer: 80, tol: 0.5, unit: "kcal", explain: "20 · 4 = 80 kcal." },
    { type: "mc", q: "Quale molecola forma lo strato di base delle membrane cellulari?", options: ["Fosfolipidi", "Amido", "DNA", "Cellulosa"], answer: 0, explain: "Il doppio strato di fosfolipidi è la base della membrana." }
  ],
  d: [
    { type: "tf", q: "Una sequenza di DNA è ATTGC: il filamento complementare è TAACG.", answer: true, explain: "A→T, T→A, T→A, G→C, C→G." },
    { type: "mc", q: "Quale coppia di molecole ha formula (C₆H₁₂O₆) uguale ma struttura diversa?", options: ["Glucosio e fruttosio", "Saccarosio e lattosio", "Amido e cellulosa", "Glicerolo e colesterolo"], answer: 0, explain: "Glucosio e fruttosio sono isomeri: stessa formula, atomi disposti diversamente." },
    { type: "mc", q: "Quale reazione libera acqua unendo due monomeri?", options: ["Idrolisi", "Condensazione", "Ossidazione", "Neutralizzazione"], answer: 1, explain: "La condensazione (sintesi per disidratazione) forma il legame e libera H₂O." },
    { type: "tf", q: "Il calore può denaturare una proteina senza rompere i suoi legami peptidici.", answer: true, explain: "La denaturazione altera le strutture secondaria e terziaria, non la sequenza degli amminoacidi." },
    { type: "num", q: "Quante coppie di basi ci sono in un tratto di DNA a doppio filamento con 300 nucleotidi totali?", answer: 150, tol: 0.5, unit: "coppie", explain: "Ogni coppia è formata da 2 nucleotidi: 300/2 = 150." }
  ]
});
