QBANK("ru", "l1-spa-gustar", {
  f: [
    { type: "mc", q: "Как сказать «мне нравится мороженое»?", options: ["Me gusta el helado", "Me gustan el helado", "Yo gusto el helado"], answer: 0, explain: "Мороженое — единственное число: me gusta." },
    { type: "mc", q: "Me ___ los perros.", options: ["gusta", "gustan", "gustas"], answer: 1, explain: "Perros — множественное число: gustan." },
    { type: "tf", q: "Местоимение «me» в «me gusta» обязательно.", answer: true, explain: "Косвенное местоимение нельзя опускать; «a mí» — можно." },
    { type: "text", q: "Как сказать «тебе нравится» (с предметом в ед. числе)? Напиши: te ___.", answer: ["gusta", "te gusta"], explain: "Te gusta." },
    { type: "mc", q: "«Me encanta» значит:", options: ["Мне не нравится", "Обожаю", "Я голоден"], answer: 1, explain: "Encantar = обожать." }
  ],
  m: [
    { type: "mc", q: "A nosotros ___ viajar.", options: ["nos gusta", "nos gustan", "les gusta"], answer: 0, explain: "Nos + инфинитив = nos gusta." },
    { type: "text", q: "Ответь: «No me gusta madrugar». – A mí ___.", answer: ["tampoco", "a mí tampoco"], explain: "Отрицательная фраза → tampoco." },
    { type: "tf", q: "В «Me gustan nadar» есть ошибка.", answer: true, explain: "С инфинитивом: me gusta nadar." },
    { type: "mc", q: "Как сказать «у меня болят ноги»?", options: ["Me duele los pies", "Me duelen los pies", "Me dolen los pies"], answer: 1, explain: "Doler: o → ue, множественное число: duelen." },
    { type: "order", q: "Расставь по порядку: «Марте очень нравится футбол».", items: ["A Marta", "le gusta", "mucho", "el fútbol"], explain: "A Marta le gusta mucho el fútbol." }
  ],
  d: [
    { type: "mc", q: "¿Ves a Laura? – Sí, ___ veo.", options: ["la", "le", "lo"], answer: 0, explain: "Laura: прямое дополнение женского рода → la." },
    { type: "mc", q: "Doy el libro a mi madre. → ___ doy.", options: ["Le lo", "Se lo", "Lo le"], answer: 1, explain: "Le + lo → se lo." },
    { type: "tf", q: "«Prefiero el té que el café» — стандартная конструкция.", answer: false, explain: "Используется a: Prefiero el té al café." },
    { type: "text", q: "Как по-испански «со мной»? (одно слово)", answer: ["conmigo"], explain: "Conmigo (а не con mí)." },
    { type: "mc", q: "«Me apetece un helado» значит:", options: ["Мне хочется мороженого", "Мне аппетитно мороженое, которое я ем", "Мне не нравится мороженое"], answer: 0, explain: "Apetecer = хотеться." }
  ]
});
