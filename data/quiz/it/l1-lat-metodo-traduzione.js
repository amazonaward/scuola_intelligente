QBANK("it", "l1-lat-metodo-traduzione", {
  f: [
    { type: "mc", q: "Dove si trova di solito il verbo in una frase latina?", options: ["In fondo", "All'inizio", "Dopo il soggetto"], answer: 0, explain: "L'ordine abituale è soggetto – complementi – oggetto – verbo." },
    { type: "tf", q: "In latino esistono gli articoli determinativi.", answer: false, explain: "Non ci sono articoli: si aggiungono in italiano." },
    { type: "mc", q: "Come si traduce \"et\"?", options: ["e", "ma", "o"], answer: 0, explain: "Et = e; sed = ma; aut = o." },
    { type: "mc", q: "Che cosa si cerca sul vocabolario?", options: ["La forma che compare nella frase", "Il lemma (nominativo o infinito)", "L'ultima lettera"], answer: 1, explain: "Si cerca il lemma, risalendo dalla desinenza." },
    { type: "mc", q: "Il soggetto di una frase latina è al caso…", options: ["nominativo", "accusativo", "ablativo"], answer: 0, explain: "Nominativo, concordato con il verbo." }
  ],
  m: [
    { type: "mc", q: "Traduci: \"Puella rosam amat\".", options: ["La ragazza ama la rosa", "La rosa ama la ragazza", "Le ragazze amano le rose"], answer: 0, explain: "Puella nom. sing.; rosam acc. sing.; amat 3ª sing." },
    { type: "text", q: "Qual è il lemma di \"servorum\"? (nominativo singolare)", answer: ["servus"], explain: "-orum = gen. plur. 2ª declinazione: servus, -i." },
    { type: "mc", q: "\"Nam\" si traduce…", options: ["dunque", "infatti", "anche"], answer: 1, explain: "Nam = infatti, in effetti; igitur = dunque; etiam = anche." },
    { type: "mc", q: "\"Pueri puellaeque\" significa…", options: ["i ragazzi e le ragazze", "il ragazzo della ragazza", "le ragazze dei ragazzi"], answer: 0, explain: "-que = e." },
    { type: "tf", q: "Il verbo di modo finito indica quante proposizioni ci sono in un periodo.", answer: true, explain: "Ogni verbo di modo finito regge una proposizione." }
  ],
  d: [
    { type: "mc", q: "Traduci: \"Servi a dominis vocantur\".", options: ["I servi sono chiamati dai padroni", "I servi chiamano i padroni", "I padroni sono chiamati dai servi"], answer: 0, explain: "Vocantur passivo; a dominis = agente." },
    { type: "mc", q: "In \"Reges milites vocant\" quale parola è il soggetto?", options: ["milites", "reges", "vocant"], answer: 1, explain: "Reges e milites hanno la stessa forma al plurale; il significato (i re chiamano i soldati) e l'ordine più naturale indicano reges come soggetto." },
    { type: "mc", q: "\"Nautae cum magna cura navigabant\": \"cum magna cura\" è…", options: ["compagnia", "modo", "mezzo"], answer: 1, explain: "Cum + ablativo astratto: modo (con grande cura)." },
    { type: "text", q: "Qual è il lemma di \"hostibus\"? (nominativo singolare)", answer: ["hostis"], explain: "-ibus: dat./abl. plurale di 3ª; hostis, hostis." },
    { type: "mc", q: "Perché \"leges\" può avere due analisi?", options: ["È sia nome (le leggi) sia verbo (tu leggerai)", "È un errore", "Solo per il neutro"], answer: 0, explain: "Leges = nominativo/accusativo plurale di lex oppure 2ª sing. del futuro di lego." }
  ]
});
