QBANK("it", "l2-sci-membrana-trasporti", {
  f: [
    { type: "mc", q: "Di che cosa è fatta principalmente la membrana plasmatica?", options: ["Doppio strato di fosfolipidi con proteine", "Cellulosa", "Solo proteine"], answer: 0, explain: "È un doppio strato di fosfolipidi in cui sono inserite proteine." },
    { type: "tf", q: "La diffusione semplice avviene sempre dalla zona più concentrata a quella meno concentrata.", answer: true, explain: "Segue il gradiente di concentrazione, senza consumo di energia." },
    { type: "text", q: "Come si chiama la diffusione dell'acqua attraverso una membrana semipermeabile?", answer: ["osmosi", "l'osmosi"], explain: "L'osmosi è il movimento dell'acqua verso la soluzione più concentrata." },
    { type: "mc", q: "Quale molecola fornisce l'energia per il trasporto attivo?", options: ["ATP", "DNA", "Colesterolo"], answer: 0, explain: "L'ATP è la moneta energetica della cellula." },
    { type: "tf", q: "Nell'esocitosi il contenuto di una vescicola viene rilasciato fuori dalla cellula.", answer: true, explain: "La vescicola si fonde con la membrana e libera il contenuto all'esterno." }
  ],
  m: [
    { type: "mc", q: "Una soluzione con più soluti di un'altra si dice...", options: ["ipotonica", "ipertonica", "isotonica"], answer: 1, explain: "Ipertonica significa più concentrata di soluti." },
    { type: "mc", q: "Che cosa succede a un globulo rosso in una soluzione salina molto concentrata?", options: ["Si gonfia", "Si raggrinza per perdita di acqua", "Scoppia"], answer: 1, explain: "L'ambiente è ipertonico: l'acqua esce e la cellula subisce la crenazione." },
    { type: "num", q: "Un litro di soluzione fisiologica contiene 9 g di sale. Quanti grammi in 250 mL?", answer: 2.25, tol: 0.01, unit: "g", explain: "9 × 0,25 = 2,25 g." },
    { type: "mc", q: "Quale di queste molecole attraversa più facilmente il doppio strato lipidico?", options: ["Ossigeno", "Ione sodio", "Glucosio"], answer: 0, explain: "L'ossigeno è piccolo e apolare; ioni e glucosio richiedono proteine." },
    { type: "tf", q: "Il glucosio entra in molte cellule per diffusione facilitata attraverso trasportatori.", answer: true, explain: "È una molecola polare e grande: usa un carrier, senza ATP, secondo gradiente." }
  ],
  d: [
    { type: "mc", q: "Perché la pompa Na⁺/K⁺ è importante per i neuroni?", options: ["Mantiene i gradienti ionici su cui si basa l'impulso nervoso", "Produce ATP", "Digerisce le proteine"], answer: 0, explain: "Il gradiente di Na⁺ e K⁺ genera il potenziale di membrana necessario ai segnali nervosi." },
    { type: "num", q: "In 10 cicli della pompa sodio-potassio, quanti ioni in totale (Na⁺ + K⁺) vengono trasportati?", answer: 50, explain: "Ogni ciclo sposta 3 Na⁺ + 2 K⁺ = 5 ioni; 10 cicli = 50 ioni." },
    { type: "mc", q: "Una pianta annaffiata con acqua molto salata appassisce. Perché?", options: ["Il terreno è ipertonico e le radici perdono acqua per osmosi", "Il sale è tossico solo per la fotosintesi", "Il sale blocca la luce"], answer: 0, explain: "L'acqua tende a uscire dalle radici verso il terreno più concentrato." },
    { type: "tf", q: "La pressione osmotica di una soluzione aumenta se aumenta la concentrazione dei soluti.", answer: true, explain: "È proporzionale alla concentrazione dei soluti (legge di van 't Hoff)." },
    { type: "mc", q: "Quale coppia associa correttamente processo e caratteristica?", options: ["Endocitosi - consuma ATP e forma vescicole", "Osmosi - consuma ATP", "Diffusione semplice - richiede pompe"], answer: 0, explain: "L'endocitosi richiede energia; osmosi e diffusione semplice sono passive." }
  ]
});
