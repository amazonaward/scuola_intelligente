QBANK("it", "l2-spa-escribir-b1", {
  f: [
    { type: "mc", q: "Come si chiama l'oggetto di una mail in spagnolo?", options: ["asunto", "saludo", "firma"], answer: 0, explain: "Asunto = oggetto." },
    { type: "tf", q: "In spagnolo il punto interrogativo si mette anche all'inizio: ¿...?", answer: true, explain: "Sì: ¿Qué haces?" },
    { type: "mc", q: "Quale congedo è informale?", options: ["Un abrazo", "Atentamente", "Cordialmente"], answer: 0, explain: "Un abrazo si usa con amici e familiari." },
    { type: "text", q: "Come si dice «anche» in spagnolo? (una parola con accento)", answer: ["también", "tambien"], explain: "También." },
    { type: "mc", q: "I mesi dell'anno in spagnolo si scrivono:", options: ["con la maiuscola", "con la minuscola", "sempre in corsivo"], answer: 1, explain: "Minuscolo: enero, febrero..." }
  ],
  m: [
    { type: "mc", q: "Quale connettore esprime conseguenza?", options: ["por eso", "pero", "además"], answer: 0, explain: "Por eso = per questo motivo." },
    { type: "text", q: "Completa: «¿___ no vienes a la fiesta?» (perché, domanda)", answer: ["por qué", "por que"], explain: "Por qué (domanda) con accento." },
    { type: "tf", q: "In una mail formale si usa «usted».", answer: true, explain: "Il registro formale usa usted." },
    { type: "mc", q: "Quale parola è sdrucciola e porta sempre la tilde?", options: ["música", "ciudad", "casa"], answer: 0, explain: "Música ha accento sulla terzultima." },
    { type: "order", q: "Ordina il saluto formale: «Gentile signor López:».", items: ["Estimado", "señor", "López:"], explain: "Estimado señor López:" }
  ],
  d: [
    { type: "mc", q: "Quale frase usa correttamente il modo verbale?", options: ["Creo que es difícil.", "Creo que sea difícil.", "No creo que es difícil."], answer: 0, explain: "Creo que + indicativo; no creo que + congiuntivo (sea)." },
    { type: "mc", q: "In un racconto, «mientras» introduce di solito:", options: ["un'azione in corso (imperfecto)", "una promessa (futuro)", "un ordine"], answer: 0, explain: "Mientras + imperfecto = azione contemporanea." },
    { type: "tf", q: "«Sin embargo» ha lo stesso valore di «además».", answer: false, explain: "Sin embargo = tuttavia (contrasto); además = inoltre." },
    { type: "text", q: "Come si dice «ho 16 anni»? Scrivi: ___ 16 años.", answer: ["tengo"], explain: "Tengo 16 años." },
    { type: "mc", q: "Quale formula chiude bene una mail di richiesta a un'azienda?", options: ["Quedo a la espera de su respuesta.", "Chao y nos vemos.", "Hasta mañana, tío."], answer: 0, explain: "È formale e adeguata." }
  ]
});
