QBANK("it", "l2-spa-mundo-hispano", {
  f: [
    { type: "mc", q: "Qual è la capitale della Spagna?", options: ["Barcelona", "Madrid", "Sevilla"], answer: 1, explain: "Madrid." },
    { type: "tf", q: "Lo spagnolo è parlato in molti paesi dell'America Latina.", answer: true, explain: "È lingua ufficiale in quasi tutti i paesi latinoamericani, tranne Brasile e Haiti." },
    { type: "mc", q: "In quale paese si trova Machu Picchu?", options: ["Perú", "España", "Cuba"], answer: 0, explain: "In Perù, vicino a Cusco." },
    { type: "text", q: "Qual è la capitale del Messico? (in spagnolo)", answer: ["ciudad de méxico", "ciudad de mexico", "méxico d.f.", "mexico df"], explain: "Ciudad de México." },
    { type: "mc", q: "Il flamenco è tipico di:", options: ["Andalucía", "Patagonia", "Caribe"], answer: 0, explain: "Il flamenco nasce in Andalusia." }
  ],
  m: [
    { type: "mc", q: "«Ordenador» in America Latina si dice di solito:", options: ["computadora", "jugo", "carro"], answer: 0, explain: "Ordenador in Spagna, computadora in America." },
    { type: "tf", q: "In Argentina si usa spesso «vos» al posto di «tú».", answer: true, explain: "È il voseo." },
    { type: "mc", q: "La capitale della Colombia è:", options: ["Bogotá", "Quito", "Caracas"], answer: 0, explain: "Bogotá." },
    { type: "text", q: "Come si chiama la grande festa messicana del 1-2 novembre? (tre parole)", answer: ["día de muertos", "dia de muertos"], explain: "Día de Muertos." },
    { type: "order", q: "Ordina da nord a sud: Cuba, Colombia, Perù, Argentina.", items: ["Cuba", "Colombia", "Perú", "Argentina"], explain: "Cuba (Caraibi), Colombia, Perù, Argentina." }
  ],
  d: [
    { type: "mc", q: "La Real Academia Española fu fondata nel:", options: ["1492", "1713", "1812"], answer: 1, explain: "1713." },
    { type: "tf", q: "In Paraguay il guaraní è lingua co-ufficiale insieme allo spagnolo.", answer: true, explain: "Sì, dalla Costituzione del 1992." },
    { type: "mc", q: "Quale parola italiana viene dal náhuatl tramite lo spagnolo?", options: ["cioccolato", "pasta", "caffè"], answer: 0, explain: "Cioccolato < chocolate < náhuatl." },
    { type: "mc", q: "La capitale costituzionale della Bolivia è:", options: ["La Paz", "Sucre", "Santa Cruz"], answer: 1, explain: "Sucre; La Paz è la sede del governo." },
    { type: "text", q: "Come si dice «autobus» in Spagna? (una parola, con accento)", answer: ["autobús", "autobus"], explain: "Autobús (in America: colectivo, micro, guagua...)." }
  ]
});
