QBANK("ru", "l1-lat-terza-declinazione", {
  f: [
    { type: "mc", q: "Каков родительный падеж ед. числа от \"rex\"?", options: ["regis", "regi", "regem"], answer: 0, explain: "Родительный падеж на -is определяет 3-е склонение: regis." },
    { type: "tf", q: "В 3-м склонении именительный падеж ед. числа всегда имеет одно и то же окончание.", answer: false, explain: "Он меняется (rex, civis, nomen, mare…), поэтому его учат вместе с родительным падежом." },
    { type: "text", q: "Напиши винительный падеж ед. числа от \"civis\".", answer: ["civem"], explain: "Основа civ- + -em." },
    { type: "mc", q: "Каково мн. число от \"nomen\"?", options: ["nomines", "nomina", "nomini"], answer: 1, explain: "У существительных среднего рода мн. число на -a." },
    { type: "mc", q: "\"Leges\" может быть…", options: ["только родительным падежом ед. числа", "именительным, звательным или винительным падежом мн. числа от lex", "дательным падежом мн. числа"], answer: 1, explain: "-es: именительный, звательный и винительный падеж мн. числа; (но это и будущее время от lego, 2-е лицо ед. числа)." }
  ],
  m: [
    { type: "text", q: "Напиши родительный падеж мн. числа от \"miles, militis\".", answer: ["militum"], explain: "Неравносложное: -um." },
    { type: "mc", q: "Каков родительный падеж мн. числа от \"hostis, hostis\"?", options: ["hostum", "hostium", "hostibus"], answer: 1, explain: "Равносложное имя с основой на -i: -ium." },
    { type: "text", q: "Напиши дательный падеж мн. числа от \"navis\".", answer: ["navibus"], explain: "-ibus для дательного падежа и аблатива мн. числа." },
    { type: "mc", q: "Как перевести \"Rex militibus pecuniam dat\"?", options: ["Царь даёт воинам деньги", "Воины дают царю деньги", "Царь даёт воинов деньгам"], answer: 0, explain: "Rex подлежащее; militibus дательный падеж мн. числа; pecuniam винительный падеж." },
    { type: "mc", q: "Каков аблатив ед. числа от \"mare\"?", options: ["mare", "mari", "mares"], answer: 1, explain: "У существительных среднего рода на -e аблатив ед. числа на -i: mari." }
  ],
  d: [
    { type: "text", q: "Напиши родительный падеж мн. числа от \"urbs, urbis\".", answer: ["urbium"], explain: "Односложное слово с двумя согласными (rb): -ium." },
    { type: "mc", q: "У какого имени родительный падеж мн. числа \"patrum\"?", options: ["pater", "pars", "pes"], answer: 0, explain: "Pater, mater, frater, canis и iuvenis исключения: -um (у pars partium; у pes pedum)." },
    { type: "mc", q: "Каков именительный падеж мн. числа от \"mare\"?", options: ["mares", "maria", "mara"], answer: 1, explain: "Средний род на -e: мн. число на -ia (maria), родительный падеж мн. числа marium." },
    { type: "mc", q: "У какой группы средний род мн. числа на -ia?", options: ["Существительные среднего рода на -e, -al, -ar", "Существительные среднего рода на -us", "Существительные среднего рода на -men"], answer: 0, explain: "Mare ➜ maria; animal ➜ animalia; а вот tempus ➜ tempora, nomen ➜ nomina." },
    { type: "mc", q: "Каков аблатив мн. числа от \"flumen, fluminis\"?", options: ["fluminibus", "fluminum", "flumina"], answer: 0, explain: "Дательный падеж и аблатив мн. числа: -ibus." }
  ]
});
