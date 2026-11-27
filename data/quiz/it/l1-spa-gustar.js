QBANK("it", "l1-spa-gustar", {
  f: [
    { type: "mc", q: "Come si dice «mi piace il gelato»?", options: ["Me gusta el helado", "Me gustan el helado", "Yo gusto el helado"], answer: 0, explain: "Gelato è singolare: me gusta." },
    { type: "mc", q: "Me ___ los perros.", options: ["gusta", "gustan", "gustas"], answer: 1, explain: "Perros è plurale: gustan." },
    { type: "tf", q: "Il pronome «me» in «me gusta» è obbligatorio.", answer: true, explain: "Il pronome indiretto non si può omettere; «a mí» sì." },
    { type: "text", q: "Come si dice «ti piace» (a te) con la cosa singolare? Scrivi: te ___.", answer: ["gusta", "te gusta"], explain: "Te gusta." },
    { type: "mc", q: "«Me encanta» significa:", options: ["Non mi piace", "Adoro", "Ho fame"], answer: 1, explain: "Encantar = adorare." }
  ],
  m: [
    { type: "mc", q: "A nosotros ___ viajar.", options: ["nos gusta", "nos gustan", "les gusta"], answer: 0, explain: "Nos + infinito = nos gusta." },
    { type: "text", q: "Rispondi: «No me gusta madrugar». – A mí ___.", answer: ["tampoco", "a mí tampoco"], explain: "Frase negativa → tampoco." },
    { type: "tf", q: "In «Me gustan nadar» c'è un errore.", answer: true, explain: "Con infinito: me gusta nadar." },
    { type: "mc", q: "Come si dice «mi fanno male i piedi»?", options: ["Me duele los pies", "Me duelen los pies", "Me dolen los pies"], answer: 1, explain: "Doler: o → ue, plurale: duelen." },
    { type: "order", q: "Ordina: «A Marta piace molto il calcio».", items: ["A Marta", "le gusta", "mucho", "el fútbol"], explain: "A Marta le gusta mucho el fútbol." }
  ],
  d: [
    { type: "mc", q: "¿Ves a Laura? – Sí, ___ veo.", options: ["la", "le", "lo"], answer: 0, explain: "Laura: diretto femminile → la." },
    { type: "mc", q: "Doy el libro a mi madre. → ___ doy.", options: ["Le lo", "Se lo", "Lo le"], answer: 1, explain: "Le + lo → se lo." },
    { type: "tf", q: "«Prefiero el té que el café» è la costruzione standard.", answer: false, explain: "Si usa a: Prefiero el té al café." },
    { type: "text", q: "Come si dice «con me» in spagnolo? (una parola)", answer: ["conmigo"], explain: "Conmigo (non con mí)." },
    { type: "mc", q: "«Me apetece un helado» significa:", options: ["Ho voglia di un gelato", "Mi appetisce il gelato che mangio", "Non mi piace il gelato"], answer: 0, explain: "Apetecer = avere voglia." }
  ]
});
