QBANK("it", "l4-lat-sintassi-periodo", {
  f: [
    { type: "mc", q: "Qual è il modo dell'interrogativa indiretta latina?", options: ["congiuntivo", "indicativo", "infinito"], answer: 0, explain: "Sempre il congiuntivo." },
    { type: "mc", q: "Come si traduce 'Quaero quid facias'?", options: ["Chiedo che cosa fai", "Chiedo che cosa faccio", "Chiedo chi sei"], answer: 0, explain: "Interrogativa indiretta con il congiuntivo." },
    { type: "tf", q: "Il periodo ipotetico della realtà ha l'indicativo in protasi e apodosi.", answer: true, explain: "Si hoc dicis, erras." },
    { type: "text", q: "Quale congiunzione significa 'se' nelle interrogative indirette sì/no? (3 lettere)", answer: ["num"], explain: "Num = se." },
    { type: "mc", q: "Qual è la particella delle volitive negative?", options: ["ne", "ut non", "quin"], answer: 0, explain: "Ne + congiuntivo." }
  ],
  m: [
    { type: "mc", q: "'Timeo ne veniat' significa:", options: ["temo che venga", "temo che non venga", "spero che venga"], answer: 0, explain: "Ne = che." },
    { type: "mc", q: "Quale verbo di comando vuole l'accusativo con infinito?", options: ["iubeo", "impero", "rogo"], answer: 0, explain: "Iubeo, veto, sino, patior." },
    { type: "tf", q: "'Si hoc diceres, errares' esprime irrealtà nel passato.", answer: false, explain: "È irrealtà nel presente (imperfetto); il passato richiede il piuccheperfetto." },
    { type: "mc", q: "Traduci: 'Imperavit ut domi maneret'.", options: ["Ordinò di restare a casa", "Ordina di restare a casa", "Chiese se restasse a casa"], answer: 0, explain: "Volitiva con consecutio storica: imperfetto." },
    { type: "text", q: "Come si chiama la parte condizionale (introdotta da si) del periodo ipotetico?", answer: ["protasi", "la protasi"], explain: "Protasi; la conseguenza è l'apodosi." }
  ],
  d: [
    { type: "mc", q: "Quale costrutto regge 'accidit'?", options: ["ut + congiuntivo (dichiarativa)", "ne + congiuntivo", "quin + congiuntivo"], answer: 0, explain: "Verbi di avvenimento reggono ut / ut non." },
    { type: "mc", q: "Traduci: 'Nescio utrum veniat an maneat'.", options: ["Non so se venga o resti", "Non so se è venuto", "Non so chi venga"], answer: 0, explain: "Utrum...an introduce l'interrogativa disgiuntiva." },
    { type: "tf", q: "Con 'quod' dichiarativo si usa l'indicativo per un fatto reale.", answer: true, explain: "Gratum est quod venisti." },
    { type: "mc", q: "Come si traduce 'Quaesivi quid fecisses'?", options: ["Chiesi che cosa avevi fatto", "Chiesi che cosa avresti fatto", "Chiedo che cosa hai fatto"], answer: 0, explain: "Piuccheperfetto dopo reggente storico = anteriorità." },
    { type: "order", q: "Ordina dal più reale al meno reale.", items: ["si dicis, erras", "si dicas, erres", "si diceres, errares", "si dixisses, erravisses"], explain: "Realtà, possibilità, irrealtà presente, irrealtà passata." }
  ]
});
