QBANK("en", "l2-spa-escribir-b1", {
  f: [
    { type: "mc", q: "What is the subject line of an email called in Spanish?", options: ["asunto", "saludo", "firma"], answer: 0, explain: "Asunto = subject." },
    { type: "tf", q: "In Spanish the question mark also goes at the beginning: ¿...?", answer: true, explain: "Yes: ¿Qué haces?" },
    { type: "mc", q: "Which sign-off is informal?", options: ["Un abrazo", "Atentamente", "Cordialmente"], answer: 0, explain: "Un abrazo is used with friends and family." },
    { type: "text", q: "How do you say «also» in Spanish? (one word with an accent)", answer: ["también", "tambien"], explain: "También." },
    { type: "mc", q: "In Spanish the months of the year are written:", options: ["with a capital letter", "in lower case", "always in italics"], answer: 1, explain: "Lower case: enero, febrero..." }
  ],
  m: [
    { type: "mc", q: "Which connective expresses consequence?", options: ["por eso", "pero", "además"], answer: 0, explain: "Por eso = that's why, for this reason." },
    { type: "text", q: "Complete: «¿___ no vienes a la fiesta?» (why, question)", answer: ["por qué", "por que"], explain: "Por qué (question) with an accent." },
    { type: "tf", q: "In a formal email you use «usted».", answer: true, explain: "The formal register uses usted." },
    { type: "mc", q: "Which word is an esdrújula and always has a tilde?", options: ["música", "ciudad", "casa"], answer: 0, explain: "Música is stressed on the third-to-last syllable." },
    { type: "order", q: "Put the formal greeting in order: «Dear Mr López:».", items: ["Estimado", "señor", "López:"], explain: "Estimado señor López:" }
  ],
  d: [
    { type: "mc", q: "Which sentence uses the verb mood correctly?", options: ["Creo que es difícil.", "Creo que sea difícil.", "No creo que es difícil."], answer: 0, explain: "Creo que + indicative; no creo que + subjunctive (sea)." },
    { type: "mc", q: "In a story, «mientras» usually introduces:", options: ["an action in progress (imperfecto)", "a promise (futuro)", "an order"], answer: 0, explain: "Mientras + imperfecto = simultaneous action." },
    { type: "tf", q: "«Sin embargo» means the same as «además».", answer: false, explain: "Sin embargo = however (contrast); además = moreover." },
    { type: "text", q: "How do you say «I'm 16»? Write: ___ 16 años.", answer: ["tengo"], explain: "Tengo 16 años." },
    { type: "mc", q: "Which phrase is a good way to end an email asking a company for something?", options: ["Quedo a la espera de su respuesta.", "Chao y nos vemos.", "Hasta mañana, tío."], answer: 0, explain: "It is formal and appropriate." }
  ]
});
