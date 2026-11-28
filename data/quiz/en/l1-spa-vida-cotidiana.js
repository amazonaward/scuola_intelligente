QBANK("en", "l1-spa-vida-cotidiana", {
  f: [
    { type: "mc", q: "How do you say «grandmother» in Spanish?", options: ["la tía", "la abuela", "la prima"], answer: 1, explain: "Abuela = grandmother; tía = aunt; prima = cousin." },
    { type: "text", q: "How do you say «pencil case» in Spanish?", answer: ["estuche", "el estuche"], explain: "El estuche = pencil case." },
    { type: "tf", q: "In Spanish you can also say «la mi casa» for «my house».", answer: false, explain: "The possessive takes no article: mi casa." },
    { type: "mc", q: "Son las dos ___.", options: ["y media", "menos media", "de media"], answer: 0, explain: "Half past two: son las dos y media." },
    { type: "mc", q: "Yo ___ a las siete (levantarse).", options: ["me levanto", "te levantas", "se levanta"], answer: 0, explain: "The reflexive pronoun matching yo is me." }
  ],
  m: [
    { type: "mc", q: "El sofá ___ en el salón.", options: ["hay", "está", "tiene"], answer: 1, explain: "A known object and its location: estar." },
    { type: "text", q: "How do you say «next to»?", answer: ["al lado de"], explain: "Al lado de = next to." },
    { type: "tf", q: "In Spain «el colegio» only means university.", answer: false, explain: "It's a school; university is universidad." },
    { type: "mc", q: "Nosotros ___ a las once (acostarse).", options: ["nos acostamos", "nos acuestamos", "se acostamos"], answer: 0, explain: "Nosotros doesn't change its stem: nos acostamos." },
    { type: "order", q: "Put in order: «I wake up at a quarter to seven».", items: ["Me despierto", "a las siete", "menos cuarto"], explain: "Me despierto a las siete menos cuarto." }
  ],
  d: [
    { type: "mc", q: "How do you say «I wash my hands»?", options: ["Me lavo mis manos", "Me lavo las manos", "Lavo las manos"], answer: 1, explain: "With parts of the body you use the article." },
    { type: "mc", q: "«Suspender un examen» means:", options: ["To suspend the exam", "To fail the exam", "To postpone the exam"], answer: 1, explain: "Suspender = to fail." },
    { type: "tf", q: "«La estantería» is the piece of furniture that holds books.", answer: true, explain: "La librería is the bookshop." },
    { type: "text", q: "Complete with the reflexive pronoun: Ellos ___ duchan.", answer: ["se"], explain: "3rd person plural: se duchan." },
    { type: "mc", q: "Which sentence uses ser correctly?", options: ["Mi madre es en casa", "Mi madre es profesora", "Mi madre es leyendo"], answer: 1, explain: "Jobs are expressed with ser; location and actions in progress with estar." }
  ]
});
