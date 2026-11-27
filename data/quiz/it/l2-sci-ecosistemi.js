QBANK("it", "l2-sci-ecosistemi", {
  f: [
    { type: "mc", q: "Chi sono i produttori in un ecosistema?", options: ["Organismi che fanno fotosintesi o chemiosintesi", "Animali carnivori", "Funghi decompositori"], answer: 0, explain: "I produttori sono autotrofi e fabbricano materia organica." },
    { type: "tf", q: "I decompositori sono funghi e batteri.", answer: true, explain: "Demoliscono i resti organici restituendo sali minerali al suolo." },
    { type: "text", q: "Come si chiama l'insieme di tutti gli ecosistemi della Terra?", answer: ["biosfera", "la biosfera"], explain: "È la parte del pianeta in cui c'è vita." },
    { type: "mc", q: "Un erbivoro è un consumatore...", options: ["primario", "secondario", "terziario"], answer: 0, explain: "Si nutre direttamente dei produttori." },
    { type: "tf", q: "Il Sole è la fonte di energia di quasi tutti gli ecosistemi.", answer: true, explain: "Eccezioni sono gli ecosistemi alimentati dalla chemiosintesi, come i camini idrotermali." }
  ],
  m: [
    { type: "num", q: "Con la regola del 10%, se i produttori hanno 10 000 kcal, quante kcal ha il livello dei consumatori secondari?", answer: 100, unit: "kcal", explain: "10 000 → 1000 (primari) → 100 (secondari)." },
    { type: "mc", q: "Quale relazione fa bene a una specie e non ha effetto sull'altra?", options: ["Commensalismo", "Mutualismo", "Parassitismo"], answer: 0, explain: "Il commensalismo è una relazione +/0." },
    { type: "mc", q: "In quale forma le piante assorbono principalmente l'azoto?", options: ["Nitrati e ammonio", "N₂ dell'aria", "Ossido di carbonio"], answer: 0, explain: "Non possono usare direttamente l'N₂ atmosferico." },
    { type: "tf", q: "La combustione di petrolio e carbone aumenta la CO₂ atmosferica.", answer: true, explain: "Restituisce all'atmosfera carbonio accumulato per milioni di anni." },
    { type: "order", q: "Ordina i livelli di organizzazione dal più piccolo al più grande.", items: ["Individuo", "Popolazione", "Comunità", "Ecosistema"], explain: "Poi seguono bioma e biosfera." }
  ],
  d: [
    { type: "mc", q: "Una specie introdotta dall'uomo che prolifera e danneggia le specie autoctone si dice...", options: ["invasiva", "endemica", "chiave"], answer: 0, explain: "Le specie invasive sono una delle cause principali della perdita di biodiversità." },
    { type: "num", q: "Nella piramide dell'energia, 40 000 kcal di produttori quante kcal lasciano ai consumatori terziari (livello 4)?", answer: 40, unit: "kcal", explain: "40 000 → 4000 → 400 → 40." },
    { type: "mc", q: "Perché la concentrazione di DDT è maggiore nei rapaci che nel plancton?", options: ["Per la biomagnificazione: la sostanza persistente si accumula lungo la catena", "Perché i rapaci producono DDT", "Perché i rapaci vivono più a lungo senza mangiare"], answer: 0, explain: "Ogni predatore mangia molti individui del livello inferiore e ne accumula le sostanze non degradabili." },
    { type: "tf", q: "Secondo il principio di esclusione competitiva, due specie con la stessa nicchia ecologica possono coesistere a lungo.", answer: false, explain: "Una finisce per prevalere sull'altra, oppure le due specie si differenziano." },
    { type: "mc", q: "Perché una popolazione non cresce all'infinito in modo esponenziale?", options: ["Per la capacità portante dell'ambiente (risorse limitate)", "Perché i genitori smettono di riprodursi", "Perché le mutazioni la bloccano"], answer: 0, explain: "La crescita diventa logistica e si stabilizza attorno a K." }
  ]
});
