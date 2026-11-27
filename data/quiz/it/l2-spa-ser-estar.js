QBANK("it", "l2-spa-ser-estar", {
  f: [
    { type: "mc", q: "Yo ___ estudiante.", options: ["soy", "estoy", "hay"], answer: 0, explain: "Professione/ruolo → ser." },
    { type: "mc", q: "El libro ___ en la mesa.", options: ["es", "está", "hay"], answer: 1, explain: "Posizione → estar." },
    { type: "tf", q: "«Hay» si usa per dire «c'è / ci sono».", answer: true, explain: "È la forma impersonale di haber." },
    { type: "text", q: "Come si dice «sono le tre»? Scrivi: ___ las tres.", answer: ["son"], explain: "L'ora si dice con ser: son las tres." },
    { type: "mc", q: "Mis padres ___ de Italia.", options: ["son", "están", "hay"], answer: 0, explain: "Origine → ser (son)." }
  ],
  m: [
    { type: "mc", q: "Hoy ___ muy cansada.", options: ["soy", "estoy", "hay"], answer: 1, explain: "Stato temporaneo → estoy." },
    { type: "mc", q: "En mi calle ___ una farmacia.", options: ["está", "es", "hay"], answer: 2, explain: "Cosa indefinita (una) → hay." },
    { type: "tf", q: "«La fiesta está en mi casa» è la forma corretta per un evento.", answer: false, explain: "Per gli eventi si usa ser: La fiesta es en mi casa." },
    { type: "text", q: "Completa: «Mis amigos ___ jugando al fútbol» (estar, 3ª plurale).", answer: ["están", "estan"], explain: "Estar + gerundio." },
    { type: "order", q: "Ordina: «Il museo è vicino alla stazione».", items: ["El museo", "está", "cerca de la estación"], explain: "Posizione di cosa nota → está." }
  ],
  d: [
    { type: "mc", q: "Qué significa «Es muy listo»?", options: ["È molto pronto", "È molto furbo", "È molto stanco"], answer: 1, explain: "Ser listo = furbo/intelligente; estar listo = pronto." },
    { type: "mc", q: "La manzana todavía ___ verde. (non è matura)", options: ["es", "está", "hay"], answer: 1, explain: "Verde con estar = acerbo." },
    { type: "tf", q: "Hay que + infinito significa «bisogna + infinito».", answer: true, explain: "Hay que estudiar = bisogna studiare." },
    { type: "text", q: "Come si dice «c'era» (impersonale) all'imperfecto? Scrivi la forma.", answer: ["había", "habia"], explain: "Había (imperfecto di hay)." },
    { type: "mc", q: "¿Dónde ___ tu móvil?", options: ["es", "está", "hay"], answer: 1, explain: "Chiedo la posizione di un oggetto noto: está." }
  ]
});
