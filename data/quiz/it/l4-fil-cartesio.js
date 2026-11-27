QBANK("it", "l4-fil-cartesio", {
  f: [
    { type: "mc", q: "Qual è la frase più famosa di Cartesio?", options: ["Sapere è potere", "Penso, dunque sono", "Conosci te stesso"], answer: 1, explain: "Cogito, ergo sum." },
    { type: "tf", q: "Cartesio considerava la matematica il modello di conoscenza certa.", answer: true, explain: "La sua evidenza ispira le quattro regole del metodo." },
    { type: "mc", q: "Come si chiama la corrente che pone la ragione come fonte principale di conoscenza?", options: ["Empirismo", "Razionalismo", "Scetticismo"], answer: 1, explain: "Razionalismo, di cui Cartesio è il capostipite." },
    { type: "text", q: "In quale lingua Cartesio scrisse il Discorso sul metodo?", answer: ["francese", "in francese"], explain: "In francese, perché fosse letto anche da chi non conosceva il latino." },
    { type: "mc", q: "Che cosa significa «res cogitans»?", options: ["Cosa pensante", "Cosa estesa", "Cosa infinita"], answer: 0, explain: "La mente come sostanza pensante." }
  ],
  m: [
    { type: "mc", q: "Quale di questi non è uno dei tre gradi del dubbio?", options: ["I sensi", "Il sogno", "L'autorità della Chiesa"], answer: 2, explain: "I gradi sono: sensi, sogno, genio maligno." },
    { type: "mc", q: "Perché il cogito resiste anche al genio maligno?", options: ["Perché per essere ingannato devo esistere", "Perché il genio non esiste", "Perché i sensi non ingannano"], answer: 0, explain: "Ogni inganno presuppone un soggetto ingannato." },
    { type: "tf", q: "Le idee fattizie sono quelle innate.", answer: false, explain: "Le fattizie sono costruite dalla fantasia; le innate sono presenti fin dalla nascita." },
    { type: "mc", q: "Qual è l'attributo essenziale della materia per Cartesio?", options: ["Il peso", "L'estensione", "Il colore"], answer: 1, explain: "La res extensa è definita dall'estensione." },
    { type: "num", q: "Quante sono le regole del metodo nel Discorso?", answer: 4, tol: 0, explain: "Evidenza, analisi, sintesi, enumerazione." }
  ],
  d: [
    { type: "mc", q: "Che funzione ha Dio nel sistema cartesiano?", options: ["Garantisce che le idee chiare e distinte siano vere", "Sostituisce il cogito", "Prova la ghiandola pineale"], answer: 0, explain: "Dio non è ingannatore e fonda la verità." },
    { type: "mc", q: "Chi rivolse a Cartesio l'obiezione sull'interazione tra mente e corpo nella corrispondenza?", options: ["Elisabetta di Boemia", "Cristina di Svezia", "Maria de' Medici"], answer: 0, explain: "La principessa Elisabetta chiese come potesse l'anima muovere il corpo." },
    { type: "tf", q: "Il cogito è un sillogismo con premessa maggiore «chi pensa esiste».", answer: false, explain: "Cartesio lo presenta come intuizione immediata, non come deduzione." },
    { type: "mc", q: "Che cosa dimostra l'esempio del pezzo di cera?", options: ["Che i corpi sono conosciuti dall'intelletto più che dai sensi", "Che la cera è la sostanza di tutte le cose", "Che i sensi non cambiano mai"], answer: 0, explain: "Le qualità sensibili mutano, ma l'intelletto riconosce la cera come la stessa." },
    { type: "mc", q: "Perché la prova «ontologica» di Dio ricorda Anselmo?", options: ["Deduce l'esistenza di Dio dalla sua stessa perfezione", "Parte dai fenomeni naturali", "Si basa sui sensi"], answer: 0, explain: "Se l'esistenza è una perfezione, Dio perfettissimo non può non esistere." }
  ]
});
