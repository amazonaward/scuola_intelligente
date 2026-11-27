QBANK("it", "l2-ita-sintassi-periodo", {
  f: [
    { type: "mc", q: "Quante proposizioni ci sono in «Mangio mentre leggo»?", options: ["2", "1", "3", "4"], answer: 0, explain: "Due verbi, due proposizioni: mangio e leggo." },
    { type: "mc", q: "Quale congiunzione è coordinante?", options: ["ma", "perché", "quando", "affinché"], answer: 0, explain: "«Ma» coordina; le altre introducono subordinate." },
    { type: "tf", q: "La proposizione principale ha senso compiuto da sola.", answer: true, explain: "Non dipende da altre proposizioni." },
    { type: "text", q: "Come si chiama la proposizione che dipende da un'altra?", answer: ["subordinata", "dipendente"], explain: "La subordinata completa il senso della reggente." },
    { type: "mc", q: "«Ho studiato, quindi sono tranquillo»: «quindi» introduce una coordinata:", options: ["Conclusiva", "Avversativa", "Disgiuntiva", "Copulativa"], answer: 0, explain: "Indica una conseguenza." }
  ],
  m: [
    { type: "mc", q: "«Dico che hai ragione»: la subordinata è:", options: ["Oggettiva", "Soggettiva", "Finale", "Temporale"], answer: 0, explain: "Risponde alla domanda «che cosa dico?»." },
    { type: "mc", q: "«Quando arriverai, ti chiamo»: la subordinata è:", options: ["Temporale", "Causale", "Concessiva", "Comparativa"], answer: 0, explain: "Indica il tempo." },
    { type: "tf", q: "«Studiando ogni giorno, migliori» ha una subordinata implicita.", answer: true, explain: "Il verbo è al gerundio: modo indefinito." },
    { type: "text", q: "Come si chiama la proposizione introdotta da «che» pronome relativo, come in «il libro che leggo»?", answer: ["relativa", "proposizione relativa"], explain: "La relativa si riferisce a un nome della reggente." },
    { type: "order", q: "Ordina dal periodo ipotetico più reale a quello più irreale.", items: ["Se piove, resto a casa", "Se piovesse, resterei a casa", "Se fosse piovuto, sarei rimasto a casa"], explain: "Realtà, possibilità, irrealtà." }
  ],
  d: [
    { type: "mc", q: "In «Sebbene fosse tardi, continuò a lavorare perché voleva finire» quanti gradi di subordinazione ci sono rispetto alla principale?", options: ["Due subordinate entrambe di 1° grado", "Una di 1° e una di 2° grado", "Nessuna subordinata", "Due coordinate"], answer: 0, explain: "Entrambe (concessiva e causale) dipendono dalla principale «continuò a lavorare»." },
    { type: "mc", q: "Quale frase contiene una consecutiva?", options: ["Era così stanco che si addormentò", "Studio per imparare", "Se studi, passi", "Mentre cammino, penso"], answer: 0, explain: "Così... che indica una conseguenza." },
    { type: "tf", q: "Con «benché» si usa l'indicativo.", answer: false, explain: "Con «benché» si usa il congiuntivo; con «anche se» l'indicativo." },
    { type: "text", q: "Come si chiama la parte del periodo ipotetico introdotta da «se»?", answer: ["protasi"], explain: "L'apodosi esprime la conseguenza." },
    { type: "mc", q: "Quale trasformazione rende implicita «Poiché ho studiato, sono sereno»?", options: ["Avendo studiato, sono sereno", "Siccome studio, sono sereno", "Ho studiato quindi sono sereno", "Se ho studiato, sono sereno"], answer: 0, explain: "Il gerundio composto rende la causale implicita." }
  ]
});
