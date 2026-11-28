QBANK("ro", "l1-spa-gustar", {
  f: [
    { type: "mc", q: "Cum se spune «îmi place înghețata»?", options: ["Me gusta el helado", "Me gustan el helado", "Yo gusto el helado"], answer: 0, explain: "Înghețata este singular: me gusta." },
    { type: "mc", q: "Me ___ los perros.", options: ["gusta", "gustan", "gustas"], answer: 1, explain: "Perros este plural: gustan." },
    { type: "tf", q: "Pronumele «me» din «me gusta» este obligatoriu.", answer: true, explain: "Pronumele indirect nu se poate omite; «a mí», da." },
    { type: "text", q: "Cum se spune «îți place» (ție) cu lucru singular? Scrie: te ___.", answer: ["gusta", "te gusta"], explain: "Te gusta." },
    { type: "mc", q: "«Me encanta» înseamnă:", options: ["Nu-mi place", "Ador", "Mi-e foame"], answer: 1, explain: "Encantar = a adora." }
  ],
  m: [
    { type: "mc", q: "A nosotros ___ viajar.", options: ["nos gusta", "nos gustan", "les gusta"], answer: 0, explain: "Nos + infinitiv = nos gusta." },
    { type: "text", q: "Răspunde: «No me gusta madrugar». – A mí ___.", answer: ["tampoco", "a mí tampoco"], explain: "Propoziție negativă → tampoco." },
    { type: "tf", q: "În «Me gustan nadar» este o greșeală.", answer: true, explain: "Cu infinitiv: me gusta nadar." },
    { type: "mc", q: "Cum se spune «mă dor picioarele»?", options: ["Me duele los pies", "Me duelen los pies", "Me dolen los pies"], answer: 1, explain: "Doler: o → ue, plural: duelen." },
    { type: "order", q: "Pune în ordine: «Martei îi place mult fotbalul».", items: ["A Marta", "le gusta", "mucho", "el fútbol"], explain: "A Marta le gusta mucho el fútbol." }
  ],
  d: [
    { type: "mc", q: "¿Ves a Laura? – Sí, ___ veo.", options: ["la", "le", "lo"], answer: 0, explain: "Laura: direct feminin → la." },
    { type: "mc", q: "Doy el libro a mi madre. → ___ doy.", options: ["Le lo", "Se lo", "Lo le"], answer: 1, explain: "Le + lo → se lo." },
    { type: "tf", q: "«Prefiero el té que el café» este construcția standard.", answer: false, explain: "Se folosește a: Prefiero el té al café." },
    { type: "text", q: "Cum se spune «cu mine» în spaniolă? (un cuvânt)", answer: ["conmigo"], explain: "Conmigo (nu con mí)." },
    { type: "mc", q: "«Me apetece un helado» înseamnă:", options: ["Am chef de o înghețată", "Mă pofticește înghețata pe care o mănânc", "Nu-mi place înghețata"], answer: 0, explain: "Apetecer = a avea chef." }
  ]
});
