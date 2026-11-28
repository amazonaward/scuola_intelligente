QBANK("fr", "l1-spa-gustar", {
  f: [
    { type: "mc", q: "Comment dit-on « j'aime la glace » ?", options: ["Me gusta el helado", "Me gustan el helado", "Yo gusto el helado"], answer: 0, explain: "Helado est au singulier : me gusta." },
    { type: "mc", q: "Me ___ los perros.", options: ["gusta", "gustan", "gustas"], answer: 1, explain: "Perros est au pluriel : gustan." },
    { type: "tf", q: "Le pronom « me » dans « me gusta » est obligatoire.", answer: true, explain: "Le pronom indirect ne peut pas être omis ; « a mí », si." },
    { type: "text", q: "Comment dit-on « ça te plaît » avec une chose au singulier ? Écris : te ___.", answer: ["gusta", "te gusta"], explain: "Te gusta." },
    { type: "mc", q: "« Me encanta » signifie :", options: ["Je n'aime pas", "J'adore", "J'ai faim"], answer: 1, explain: "Encantar = adorer." }
  ],
  m: [
    { type: "mc", q: "A nosotros ___ viajar.", options: ["nos gusta", "nos gustan", "les gusta"], answer: 0, explain: "Nos + infinitif = nos gusta." },
    { type: "text", q: "Réponds : « No me gusta madrugar ». – A mí ___.", answer: ["tampoco", "a mí tampoco"], explain: "Phrase négative → tampoco." },
    { type: "tf", q: "Dans « Me gustan nadar », il y a une erreur.", answer: true, explain: "Avec un infinitif : me gusta nadar." },
    { type: "mc", q: "Comment dit-on « j'ai mal aux pieds » ?", options: ["Me duele los pies", "Me duelen los pies", "Me dolen los pies"], answer: 1, explain: "Doler : o → ue, au pluriel : duelen." },
    { type: "order", q: "Remets dans l'ordre : « Marta aime beaucoup le football ».", items: ["A Marta", "le gusta", "mucho", "el fútbol"], explain: "A Marta le gusta mucho el fútbol." }
  ],
  d: [
    { type: "mc", q: "¿Ves a Laura? – Sí, ___ veo.", options: ["la", "le", "lo"], answer: 0, explain: "Laura : complément direct féminin → la." },
    { type: "mc", q: "Doy el libro a mi madre. → ___ doy.", options: ["Le lo", "Se lo", "Lo le"], answer: 1, explain: "Le + lo → se lo." },
    { type: "tf", q: "« Prefiero el té que el café » est la construction correcte.", answer: false, explain: "On utilise a : Prefiero el té al café." },
    { type: "text", q: "Comment dit-on « avec moi » en espagnol ? (un seul mot)", answer: ["conmigo"], explain: "Conmigo (et non con mí)." },
    { type: "mc", q: "« Me apetece un helado » signifie :", options: ["J'ai envie d'une glace", "La glace me donne de l'appétit", "Je n'aime pas la glace"], answer: 0, explain: "Apetecer = avoir envie de." }
  ]
});
