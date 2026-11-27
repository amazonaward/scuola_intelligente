QBANK("it", "l2-ita-testo-argomentativo", {
  f: [
    { type: "mc", q: "Come si chiama l'idea principale che si vuole dimostrare?", options: ["Tesi", "Titolo", "Esempio", "Didascalia"], answer: 0, explain: "La tesi è l'affermazione centrale del testo." },
    { type: "tf", q: "Gli argomenti servono a sostenere la tesi.", answer: true, explain: "Sono le ragioni che la rendono credibile." },
    { type: "mc", q: "Quale parte chiude il testo?", options: ["Conclusione", "Introduzione", "Antitesi", "Premessa"], answer: 0, explain: "La conclusione ricapitola la tesi." },
    { type: "text", q: "Come si chiama la tesi contraria a quella dell'autore?", answer: ["antitesi"], explain: "L'antitesi viene presentata per poi essere confutata." },
    { type: "mc", q: "Quale connettivo introduce un argomento aggiuntivo?", options: ["Inoltre", "Tuttavia", "Dunque", "Mentre"], answer: 0, explain: "«Inoltre» aggiunge." }
  ],
  m: [
    { type: "mc", q: "«Secondo molti esperti, dormire poco riduce la concentrazione» è un argomento:", options: ["Di autorità", "Di analogia", "Narrativo", "Poetico"], answer: 0, explain: "Si richiama l'opinione di esperti competenti." },
    { type: "tf", q: "Un testo argomentativo non deve mai considerare l'opinione contraria.", answer: false, explain: "Considerarla e confutarla rende il testo più solido." },
    { type: "mc", q: "Chi scrisse la Retorica che parla di logos, ethos e pathos?", options: ["Aristotele", "Platone", "Cicerone", "Seneca"], answer: 0, explain: "Aristotele studiò i modi della persuasione." },
    { type: "text", q: "Come si chiama il ragionamento deduttivo con due premesse e una conclusione?", answer: ["sillogismo"], explain: "Es.: Tutti gli uomini sono mortali; Socrate è un uomo; Socrate è mortale." },
    { type: "order", q: "Ordina le parti.", items: ["Problema", "Tesi", "Argomenti", "Conclusione"], explain: "Il testo va dal problema alla conclusione." }
  ],
  d: [
    { type: "mc", q: "«O sei con noi o sei contro di noi» è una:", options: ["Falsa alternativa", "Confutazione", "Analogia", "Tesi"], answer: 0, explain: "Riduce a due le possibilità, ignorando le altre." },
    { type: "mc", q: "Quale tecnica deforma la tesi dell'avversario per sconfiggerla più facilmente?", options: ["Uomo di paglia", "Sillogismo", "Climax", "Esempio"], answer: 0, explain: "Si attacca una versione caricaturale della tesi." },
    { type: "tf", q: "Se due eventi avvengono uno dopo l'altro, il primo è sempre la causa del secondo.", answer: false, explain: "È la fallacia post hoc: la successione non prova la causalità." },
    { type: "mc", q: "Perché una frase prudente («alcuni studi suggeriscono...») può essere più convincente?", options: ["Perché è più onesta e meno attaccabile", "Perché è più lunga", "Perché evita gli argomenti", "Perché è emotiva"], answer: 0, explain: "Evita generalizzazioni indebite e rafforza la credibilità." },
    { type: "text", q: "Come si chiama la fallacia «Lo fanno tutti, quindi è giusto»?", answer: ["appello alla maggioranza", "ad populum"], explain: "Il numero di persone non basta a provare la verità o la correttezza." }
  ]
});
