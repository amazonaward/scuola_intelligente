QBANK("it", "l2-sci-mitosi-meiosi", {
  f: [
    { type: "mc", q: "Quale processo produce due cellule figlie identiche alla cellula madre?", options: ["Mitosi", "Meiosi", "Fecondazione"], answer: 0, explain: "La mitosi conserva il numero di cromosomi e produce cloni." },
    { type: "tf", q: "I gameti umani hanno 46 cromosomi.", answer: false, explain: "I gameti sono aploidi, con 23 cromosomi; 46 è il numero delle cellule somatiche." },
    { type: "text", q: "Come si chiamano le due copie identiche di un cromosoma duplicato?", answer: ["cromatidi fratelli", "cromatidi", "cromatidi gemelli"], explain: "Sono unite al centromero fino all'anafase." },
    { type: "mc", q: "La meiosi serve a produrre...", options: ["Cellule della pelle", "Gameti", "Globuli rossi"], answer: 1, explain: "La meiosi avviene nelle gonadi e produce uova e spermatozoi." },
    { type: "tf", q: "Nelle cellule animali la citodieresi avviene per strozzamento della cellula.", answer: true, explain: "Un anello contrattile forma un solco che separa le due cellule figlie." }
  ],
  m: [
    { type: "mc", q: "In quale fase del ciclo cellulare la cellula duplica il DNA?", options: ["G1", "S", "M"], answer: 1, explain: "La fase S è la fase di sintesi del DNA." },
    { type: "num", q: "Partendo da una cellula, quante cellule si hanno dopo 5 mitosi consecutive?", answer: 32, explain: "2⁵ = 32." },
    { type: "mc", q: "Cosa succede in anafase mitotica?", options: ["I cromatidi fratelli si separano verso i poli", "Gli omologhi si appaiano", "Si forma l'involucro nucleare"], answer: 0, explain: "I centromeri si dividono e ogni cromatidio diventa un cromosoma indipendente." },
    { type: "tf", q: "Il crossing-over aumenta la variabilità genetica.", answer: true, explain: "Scambiando segmenti tra omologhi crea nuove combinazioni di alleli." },
    { type: "order", q: "Ordina le tappe del ciclo cellulare.", items: ["G1", "S", "G2", "Mitosi"], explain: "Crescita, replicazione del DNA, preparazione e infine divisione." }
  ],
  d: [
    { type: "num", q: "Quanti cromosomi ha ciascuna cellula figlia dopo la meiosi I di una cellula umana (cromosomi contati come centromeri)?", answer: 23, explain: "La meiosi I è riduzionale: si separano gli omologhi e si passa da 46 a 23 cromosomi (ancora duplicati)." },
    { type: "num", q: "Un organismo ha 2n = 10. Quante combinazioni di cromosomi possono avere i suoi gameti (solo assortimento indipendente)?", answer: 32, explain: "n = 5, quindi 2⁵ = 32." },
    { type: "mc", q: "Una cellula in metafase II contiene 23 cromosomi duplicati. Quante molecole di DNA (cromatidi) ci sono in totale?", options: ["23", "46", "92"], answer: 1, explain: "Ogni cromosoma duplicato ha 2 cromatidi: 23 × 2 = 46." },
    { type: "mc", q: "Perché un neurone maturo non produce nuovi neuroni per mitosi?", options: ["Perché è uscito dal ciclo ed è in fase G0", "Perché non ha DNA", "Perché ha un solo cromosoma"], answer: 0, explain: "I neuroni maturi sono cellule post-mitotiche, ferme in G0." },
    { type: "tf", q: "La non-disgiunzione in meiosi II può produrre gameti con un cromosoma in più o in meno.", answer: true, explain: "Se i cromatidi fratelli non si separano, un gamete riceve due copie e un altro nessuna." }
  ]
});
