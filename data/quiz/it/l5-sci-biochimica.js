QBANK("it", "l5-sci-biochimica", {
  f: [
    { type: "mc", q: "Qual è la molecola che fornisce energia immediata alle cellule?", options: ["ATP", "DNA", "Cellulosa", "Emoglobina"], answer: 0, explain: "L'ATP è la moneta energetica della cellula." },
    { type: "tf", q: "Gli enzimi sono per la maggior parte proteine.", answer: true, explain: "Quasi tutti gli enzimi sono proteine (alcuni sono molecole di RNA)." },
    { type: "mc", q: "Quale gas assorbono le piante nella fotosintesi?", options: ["Anidride carbonica", "Ossigeno", "Azoto", "Metano"], answer: 0, explain: "Assorbono CO₂ e producono glucosio e ossigeno." },
    { type: "text", q: "Come si chiama il pigmento verde che cattura la luce nella fotosintesi?", answer: ["clorofilla", "la clorofilla"], explain: "La clorofilla assorbe luce rossa e blu e riflette la verde." },
    { type: "mc", q: "Dove avviene la glicolisi?", options: ["Nel citoplasma", "Nel nucleo", "Nel mitocondrio", "Nel cloroplasto"], answer: 0, explain: "La glicolisi avviene nel citoplasma e non richiede ossigeno." }
  ],
  m: [
    { type: "mc", q: "Quale prodotto si forma nei muscoli durante la fermentazione lattica?", options: ["Lattato", "Etanolo", "Acetone", "Glucosio"], answer: 0, explain: "Il piruvato viene ridotto a lattato (acido lattico)." },
    { type: "num", q: "Quante molecole di CO₂ sono prodotte dall'ossidazione completa di una molecola di glucosio?", answer: 6, tol: 0, explain: "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O: sei atomi di carbonio, sei CO₂." },
    { type: "tf", q: "Se la temperatura sale molto oltre l'ottimo, un enzima può denaturarsi e smettere di funzionare.", answer: true, explain: "Il calore rompe i legami deboli che mantengono la struttura tridimensionale e il sito attivo perde la forma." },
    { type: "mc", q: "In quale parte del cloroplasto avviene la fase luminosa?", options: ["Nelle membrane dei tilacoidi", "Nello stroma", "Nella parete cellulare", "Nel nucleo"], answer: 0, explain: "I fotosistemi e la catena di trasporto sono nelle membrane dei tilacoidi." },
    { type: "mc", q: "Qual è la funzione dell'ossigeno nella respirazione cellulare?", options: ["Accettore finale di elettroni", "Fonte di carbonio", "Produrre glucosio", "Rompere il DNA"], answer: 0, explain: "L'ossigeno riceve gli elettroni della catena respiratoria e si riduce ad acqua." }
  ],
  d: [
    { type: "mc", q: "Perché i grassi forniscono più energia per grammo degli zuccheri?", options: ["Sono più ridotti: hanno più legami C-H da ossidare", "Contengono più ossigeno", "Sono più solubili", "Sono polimeri del glucosio"], answer: 0, explain: "Hanno molti legami C-H e poco ossigeno: l'ossidazione libera più energia (circa 9 kcal/g contro 4 kcal/g)." },
    { type: "tf", q: "Un inibitore competitivo si lega al sito attivo, in competizione con il substrato.", answer: true, explain: "Assomiglia al substrato e occupa il sito attivo; aumentando il substrato l'inibizione si riduce." },
    { type: "num", q: "Quanti ATP si ottengono, in teoria, circa per glucosio nella respirazione completa secondo i valori attuali (valore minimo dell'intervallo)?", answer: 30, tol: 0, explain: "Le stime attuali indicano 30-32 ATP per glucosio, meno dei vecchi 36-38." },
    { type: "mc", q: "Che cosa produce la fase luminosa della fotosintesi e consuma il ciclo di Calvin?", options: ["ATP e NADPH", "Glucosio e O₂", "CO₂ e H₂O", "DNA e RNA"], answer: 0, explain: "Il ciclo di Calvin usa ATP e NADPH prodotti nella fase luminosa per ridurre la CO₂ a zuccheri." },
    { type: "mc", q: "Perché il cianuro è tanto tossico?", options: ["Blocca la citocromo ossidasi della catena respiratoria", "Distrugge il DNA", "Denatura l'emoglobina a 37 °C", "Inibisce la glicolisi"], answer: 0, explain: "Impedisce il passaggio finale degli elettroni all'ossigeno: la cellula non può più produrre ATP aerobicamente." }
  ]
});
