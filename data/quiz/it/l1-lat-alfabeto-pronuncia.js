QBANK("it", "l1-lat-alfabeto-pronuncia", {
  f: [
    { type: "mc", q: "Quale lettera NON esiste nell'alfabeto latino classico?", options: ["H", "J", "X"], answer: 1, explain: "La J (come la U e la W) non esiste: la I e la V facevano il doppio lavoro." },
    { type: "tf", q: "Nelle parole latine di due sillabe l'accento cade sulla prima.", answer: true, explain: "Cade sempre sulla penultima, che in una parola di due sillabe è la prima: ròsa, sèrvus." },
    { type: "mc", q: "Quale di questi è un dittongo latino?", options: ["ae", "ao", "ie"], answer: 0, explain: "I dittonghi più comuni sono ae, oe e au." },
    { type: "text", q: "Quante lettere ha l'alfabeto latino classico? (numero)", answer: ["23", "ventitré", "ventitre"], explain: "A B C D E F G H I K L M N O P Q R S T V X Y Z: ventitré lettere." },
    { type: "mc", q: "Come si legge la lettera H in latino nella pronuncia scolastica?", options: ["Come una h inglese aspirata", "Resta muta", "Come una c dura"], answer: 1, explain: "Nella lettura scolastica la h è muta: homo si legge òmo." }
  ],
  m: [
    { type: "mc", q: "Con la pronuncia scolastica, come si legge \"Cicero\"?", options: ["Kìkero", "Cìcero (come \"cena\")", "Sìsero"], answer: 1, explain: "Scolastica: c dolce davanti a e, i: Cìcero. La classica darebbe Kìkero." },
    { type: "text", q: "Dividi in sillabe \"terra\" (con i trattini).", answer: ["ter-ra"], explain: "Due consonanti uguali tra due vocali si dividono: ter-ra." },
    { type: "mc", q: "Qual è l'accento di \"regina\"?", options: ["règina", "regìna", "reginà"], answer: 1, explain: "Re-gi-na: la penultima gi è lunga (gī), quindi regìna." },
    { type: "tf", q: "In una parola latina di tre sillabe l'accento può cadere sull'ultima.", answer: false, explain: "L'ultima sillaba delle parole polisillabiche non porta mai l'accento." },
    { type: "mc", q: "Una sillaba con vocale breve seguita da due consonanti è…", options: ["breve", "lunga per posizione", "muta"], answer: 1, explain: "È lunga per posizione, come gis- in magìster." }
  ],
  d: [
    { type: "mc", q: "Perché \"filia\" si accenta fìlia (sulla terzultima)?", options: ["Perché la penultima li è breve (vocale davanti a vocale)", "Perché è femminile", "Perché finisce in -a"], answer: 0, explain: "Fi-li-a: la i seguita da una vocale è breve, quindi l'accento sale alla terzultima." },
    { type: "mc", q: "Come si legge \"Veni, vidi, vici\" con la pronuncia classica?", options: ["Vèni, vìdi, vìci", "Wèni, wìdi, wìki", "Vèni, vìdi, vìki"], answer: 1, explain: "Classica: v = /w/ e c sempre /k/." },
    { type: "text", q: "Quale parola è accentata sulla terzultima: \"dominus\" o \"magister\"? (una parola)", answer: ["dominus"], explain: "Do-mi-nus: la penultima mi è breve, quindi dòminus. Magìster ha la penultima lunga per posizione." },
    { type: "mc", q: "Che differenza c'è tra \"mălum\" e \"mālum\"?", options: ["Nessuna: sono due grafie", "La quantità della vocale: il male / la mela", "Solo l'accento"], answer: 1, explain: "La quantità distingue le parole: mălum = il male; mālum = la mela." },
    { type: "tf", q: "In \"poëta\" la sequenza \"oe\" è un dittongo e la parola ha due sillabe.", answer: false, explain: "Con la dieresi le vocali sono staccate: po-ë-ta, tre sillabe." }
  ]
});
