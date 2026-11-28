QBANK("en", "l2-spa-ser-estar", {
  f: [
    { type: "mc", q: "Yo ___ estudiante.", options: ["soy", "estoy", "hay"], answer: 0, explain: "Job/role → ser." },
    { type: "mc", q: "El libro ___ en la mesa.", options: ["es", "está", "hay"], answer: 1, explain: "Position → estar." },
    { type: "tf", q: "«Hay» is used to say «there is / there are».", answer: true, explain: "It is the impersonal form of haber." },
    { type: "text", q: "How do you say «it's three o'clock»? Write: ___ las tres.", answer: ["son"], explain: "Time is expressed with ser: son las tres." },
    { type: "mc", q: "Mis padres ___ de Italia.", options: ["son", "están", "hay"], answer: 0, explain: "Origin → ser (son)." }
  ],
  m: [
    { type: "mc", q: "Hoy ___ muy cansada.", options: ["soy", "estoy", "hay"], answer: 1, explain: "Temporary state → estoy." },
    { type: "mc", q: "En mi calle ___ una farmacia.", options: ["está", "es", "hay"], answer: 2, explain: "Unspecified thing (una) → hay." },
    { type: "tf", q: "«La fiesta está en mi casa» is the correct form for an event.", answer: false, explain: "For events you use ser: La fiesta es en mi casa." },
    { type: "text", q: "Complete: «Mis amigos ___ jugando al fútbol» (estar, 3rd person plural).", answer: ["están", "estan"], explain: "Estar + gerund." },
    { type: "order", q: "Put in order: «The museum is near the station».", items: ["El museo", "está", "cerca de la estación"], explain: "Position of a known thing → está." }
  ],
  d: [
    { type: "mc", q: "What does «Es muy listo» mean?", options: ["He's all ready", "He's very clever", "He's very tired"], answer: 1, explain: "Ser listo = clever/smart; estar listo = ready." },
    { type: "mc", q: "La manzana todavía ___ verde. (it isn't ripe)", options: ["es", "está", "hay"], answer: 1, explain: "Verde with estar = unripe." },
    { type: "tf", q: "Hay que + infinitive means «you have to / it is necessary to + verb».", answer: true, explain: "Hay que estudiar = you have to study." },
    { type: "text", q: "How do you say «there was» (impersonal) in the imperfecto? Write the form.", answer: ["había", "habia"], explain: "Había (imperfecto of hay)." },
    { type: "mc", q: "¿Dónde ___ tu móvil?", options: ["es", "está", "hay"], answer: 1, explain: "Asking for the position of a known object: está." }
  ]
});
