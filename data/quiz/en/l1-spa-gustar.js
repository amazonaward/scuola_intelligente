QBANK("en", "l1-spa-gustar", {
  f: [
    { type: "mc", q: "How do you say «I like ice cream»?", options: ["Me gusta el helado", "Me gustan el helado", "Yo gusto el helado"], answer: 0, explain: "Ice cream is singular: me gusta." },
    { type: "mc", q: "Me ___ los perros.", options: ["gusta", "gustan", "gustas"], answer: 1, explain: "Perros is plural: gustan." },
    { type: "tf", q: "The pronoun «me» in «me gusta» is compulsory.", answer: true, explain: "The indirect pronoun can't be left out; «a mí» can." },
    { type: "text", q: "How do you say «you like» (tú) with a singular thing? Write: te ___.", answer: ["gusta", "te gusta"], explain: "Te gusta." },
    { type: "mc", q: "«Me encanta» means:", options: ["I don't like it", "I love it", "I'm hungry"], answer: 1, explain: "Encantar = to love." }
  ],
  m: [
    { type: "mc", q: "A nosotros ___ viajar.", options: ["nos gusta", "nos gustan", "les gusta"], answer: 0, explain: "Nos + infinitive = nos gusta." },
    { type: "text", q: "Reply to «No me gusta madrugar». – A mí ___.", answer: ["tampoco", "a mí tampoco"], explain: "Negative statement → tampoco." },
    { type: "tf", q: "There's a mistake in «Me gustan nadar».", answer: true, explain: "With an infinitive: me gusta nadar." },
    { type: "mc", q: "How do you say «my feet hurt»?", options: ["Me duele los pies", "Me duelen los pies", "Me dolen los pies"], answer: 1, explain: "Doler: o → ue, plural: duelen." },
    { type: "order", q: "Put in order: «Marta really likes football».", items: ["A Marta", "le gusta", "mucho", "el fútbol"], explain: "A Marta le gusta mucho el fútbol." }
  ],
  d: [
    { type: "mc", q: "¿Ves a Laura? – Sí, ___ veo.", options: ["la", "le", "lo"], answer: 0, explain: "Laura: feminine direct object → la." },
    { type: "mc", q: "Doy el libro a mi madre. → ___ doy.", options: ["Le lo", "Se lo", "Lo le"], answer: 1, explain: "Le + lo → se lo." },
    { type: "tf", q: "«Prefiero el té que el café» is the standard construction.", answer: false, explain: "You use a: Prefiero el té al café." },
    { type: "text", q: "How do you say «with me» in Spanish? (one word)", answer: ["conmigo"], explain: "Conmigo (not con mí)." },
    { type: "mc", q: "«Me apetece un helado» means:", options: ["I feel like an ice cream", "The ice cream I'm eating is appetising", "I don't like ice cream"], answer: 0, explain: "Apetecer = to feel like." }
  ]
});
