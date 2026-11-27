QBANK("it", "l2-lat-pronomi", {
  f: [
    { type: "mc", q: "Qual è l'accusativo di \"tu\"?", options: ["te", "tibi", "tui"], answer: 0, explain: "Tu, tui, tibi, te, te." },
    { type: "text", q: "Come si dice \"con me\" in latino?", answer: ["mecum"], explain: "Cum si posticipa e si fonde: mecum." },
    { type: "mc", q: "Quale pronome significa \"quello\" (lontano)?", options: ["hic", "iste", "ille"], answer: 2, explain: "Hic = questo; iste = codesto; ille = quello." },
    { type: "tf", q: "\"Nemo\" significa \"nessuno\".", answer: true, explain: "Nemo, neminem, nemini… Indefinito che significa nessuno." },
    { type: "text", q: "Scrivi il nominativo singolare femminile del relativo.", answer: ["quae"], explain: "Qui, quae, quod." }
  ],
  m: [
    { type: "text", q: "Scrivi il genitivo singolare di \"is, ea, id\".", answer: ["eius"], explain: "Eius per tutti i generi." },
    { type: "mc", q: "Come si traduce \"Caesar suos milites laudat\"?", options: ["Cesare loda i suoi (propri) soldati", "Cesare loda i soldati di un altro", "I soldati lodano Cesare"], answer: 0, explain: "Suos riflessivo: appartiene al soggetto." },
    { type: "mc", q: "Come si traduce \"si quis venit\"?", options: ["se qualcuno viene", "se nessuno viene", "chi viene"], answer: 0, explain: "Dopo si, aliquis diventa quis." },
    { type: "text", q: "Scrivi il genitivo singolare di \"totus\".", answer: ["totius"], explain: "Totus è uno dei nove aggettivi di unus nauta: gen. -ius." },
    { type: "mc", q: "Qual è il neutro del pronome interrogativo \"quis\"?", options: ["quod", "quid", "quae"], answer: 1, explain: "Quis (m./f.), quid (n.)." }
  ],
  d: [
    { type: "text", q: "Scrivi l'accusativo singolare maschile di \"idem\".", answer: ["eundem"], explain: "Eum + dem ➜ eundem." },
    { type: "mc", q: "Qual è la differenza tra \"ipse\" e \"idem\"?", options: ["ipse = in persona; idem = lo stesso", "ipse = lo stesso; idem = in persona", "sono sinonimi"], answer: 0, explain: "Ipse rafforza, idem indica identità." },
    { type: "mc", q: "In \"Puella, cuius pater venit, laeta est\" \"cuius\" è…", options: ["genitivo", "dativo", "nominativo"], answer: 0, explain: "Cuius = il cui padre." },
    { type: "text", q: "Scrivi il genitivo plurale femminile di \"qui, quae, quod\".", answer: ["quarum"], explain: "Quorum, quarum, quorum." },
    { type: "mc", q: "Che cosa significa \"nesso relativo\"?", options: ["relativo all'inizio della frase con valore di dimostrativo", "relativo con il congiuntivo", "relativo senza antecedente"], answer: 0, explain: "Es.: quae cum ita sint = e poiché le cose stanno così." }
  ]
});
