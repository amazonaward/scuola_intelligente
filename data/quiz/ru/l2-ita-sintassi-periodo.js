QBANK("ru", "l2-ita-sintassi-periodo", {
  f: [
    { type: "mc", q: "Сколько предложений в «Mangio mentre leggo» («Ем, пока читаю»)?", options: ["2", "1", "3", "4"], answer: 0, explain: "Два глагола, два предложения: mangio и leggo." },
    { type: "mc", q: "Какой союз сочинительный?", options: ["ma", "perché", "quando", "affinché"], answer: 0, explain: "«Ma» сочиняет; остальные вводят придаточные." },
    { type: "tf", q: "Главное предложение имеет законченный смысл само по себе.", answer: true, explain: "Оно не зависит от других предложений." },
    { type: "text", q: "Как называется предложение, зависящее от другого?", answer: ["придаточное", "подчинённое", "зависимое", "subordinata", "dipendente"], explain: "Придаточное дополняет смысл главного (reggente)." },
    { type: "mc", q: "«Ho studiato, quindi sono tranquillo» («Я учился, поэтому спокоен»): «quindi» вводит сочинённое предложение:", options: ["Заключительное", "Противительное", "Разделительное", "Соединительное"], answer: 0, explain: "Указывает на следствие." }
  ],
  m: [
    { type: "mc", q: "«Dico che hai ragione» («Говорю, что ты прав»): придаточное —", options: ["Объектное (oggettiva)", "Субъектное (soggettiva)", "Целевое (finale)", "Временное (temporale)"], answer: 0, explain: "Отвечает на вопрос «что я говорю?»." },
    { type: "mc", q: "«Quando arriverai, ti chiamo» («Когда приедешь, я позвоню»): придаточное —", options: ["Временное (temporale)", "Причинное (causale)", "Уступительное (concessiva)", "Сравнительное (comparativa)"], answer: 0, explain: "Указывает время." },
    { type: "tf", q: "«Studiando ogni giorno, migliori» («Занимаясь каждый день, ты совершенствуешься») содержит неявное придаточное.", answer: true, explain: "Глагол в герундии: неличная форма." },
    { type: "text", q: "Как называется предложение, вводимое «che» как относительным местоимением, как в «il libro che leggo» («книга, которую я читаю»)?", answer: ["относительное", "относительное придаточное", "relativa", "proposizione relativa"], explain: "Относительное предложение относится к существительному главного." },
    { type: "order", q: "Расставь условные предложения от наиболее реального к наиболее нереальному.", items: ["Se piove, resto a casa", "Se piovesse, resterei a casa", "Se fosse piovuto, sarei rimasto a casa"], explain: "Реальность, возможность, нереальность." }
  ],
  d: [
    { type: "mc", q: "В «Sebbene fosse tardi, continuò a lavorare perché voleva finire» («Хотя было поздно, он продолжал работать, потому что хотел закончить») сколько степеней подчинения относительно главного?", options: ["Два придаточных, оба 1-й степени", "Одно 1-й и одно 2-й степени", "Ни одного придаточного", "Два сочинённых"], answer: 0, explain: "Оба (уступительное и причинное) зависят от главного «continuò a lavorare»." },
    { type: "mc", q: "В какой фразе есть следственное придаточное?", options: ["Era così stanco che si addormentò", "Studio per imparare", "Se studi, passi", "Mentre cammino, penso"], answer: 0, explain: "Così... che указывает на следствие." },
    { type: "tf", q: "С «benché» используется изъявительное наклонение.", answer: false, explain: "С «benché» используется congiuntivo (сослагательное); с «anche se» — изъявительное." },
    { type: "text", q: "Как называется часть условного предложения, вводимая «se»?", answer: ["протасис", "protasi"], explain: "Аподосис выражает следствие." },
    { type: "mc", q: "Какое преобразование делает неявным «Poiché ho studiato, sono sereno» («Поскольку я учился, я спокоен»)?", options: ["Avendo studiato, sono sereno", "Siccome studio, sono sereno", "Ho studiato quindi sono sereno", "Se ho studiato, sono sereno"], answer: 0, explain: "Сложный герундий делает причинное придаточное неявным." }
  ]
});
