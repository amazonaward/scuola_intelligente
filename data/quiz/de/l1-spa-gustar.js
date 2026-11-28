QBANK("de", "l1-spa-gustar", {
  f: [
    { type: "mc", q: "Wie sagt man «mir gefällt das Eis»?", options: ["Me gusta el helado", "Me gustan el helado", "Yo gusto el helado"], answer: 0, explain: "Helado ist Singular: me gusta." },
    { type: "mc", q: "Me ___ los perros.", options: ["gusta", "gustan", "gustas"], answer: 1, explain: "Perros ist Plural: gustan." },
    { type: "tf", q: "Das Pronomen «me» in «me gusta» ist Pflicht.", answer: true, explain: "Das indirekte Pronomen darf man nicht weglassen; «a mí» schon." },
    { type: "text", q: "Wie sagt man «dir gefällt» (a ti) mit der Sache im Singular? Schreibe: te ___.", answer: ["gusta", "te gusta"], explain: "Te gusta." },
    { type: "mc", q: "«Me encanta» bedeutet:", options: ["Es gefällt mir nicht", "Ich liebe es", "Ich habe Hunger"], answer: 1, explain: "Encantar = lieben." }
  ],
  m: [
    { type: "mc", q: "A nosotros ___ viajar.", options: ["nos gusta", "nos gustan", "les gusta"], answer: 0, explain: "Nos + Infinitiv = nos gusta." },
    { type: "text", q: "Antworte: «No me gusta madrugar». – A mí ___.", answer: ["tampoco", "a mí tampoco"], explain: "Verneinter Satz → tampoco." },
    { type: "tf", q: "In «Me gustan nadar» steckt ein Fehler.", answer: true, explain: "Bei einem Infinitiv: me gusta nadar." },
    { type: "mc", q: "Wie sagt man «meine Füße tun weh»?", options: ["Me duele los pies", "Me duelen los pies", "Me dolen los pies"], answer: 1, explain: "Doler: o → ue, Plural: duelen." },
    { type: "order", q: "Bringe in die richtige Reihenfolge: «Marta gefällt Fußball sehr».", items: ["A Marta", "le gusta", "mucho", "el fútbol"], explain: "A Marta le gusta mucho el fútbol." }
  ],
  d: [
    { type: "mc", q: "¿Ves a Laura? – Sí, ___ veo.", options: ["la", "le", "lo"], answer: 0, explain: "Laura: direktes Objekt, feminin → la." },
    { type: "mc", q: "Doy el libro a mi madre. → ___ doy.", options: ["Le lo", "Se lo", "Lo le"], answer: 1, explain: "Le + lo → se lo." },
    { type: "tf", q: "«Prefiero el té que el café» ist die Standardkonstruktion.", answer: false, explain: "Man verwendet a: Prefiero el té al café." },
    { type: "text", q: "Wie sagt man «mit mir» auf Spanisch? (ein Wort)", answer: ["conmigo"], explain: "Conmigo (nicht con mí)." },
    { type: "mc", q: "«Me apetece un helado» bedeutet:", options: ["Ich habe Lust auf ein Eis", "Das Eis, das ich esse, schmeckt mir", "Ich mag kein Eis"], answer: 0, explain: "Apetecer = Lust haben." }
  ]
});
