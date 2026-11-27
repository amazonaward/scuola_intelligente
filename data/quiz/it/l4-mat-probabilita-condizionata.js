QBANK("it", "l4-mat-probabilita-condizionata", {
  f: [
    { type: "num", q: "Si lancia una moneta due volte. Qual è la probabilità di due teste? (risposta decimale)", answer: 0.25, tol: 0.001, explain: "I lanci sono indipendenti: 1/2 · 1/2 = 1/4." },
    { type: "tf", q: "In due lanci consecutivi di un dado, il secondo risultato dipende dal primo.", answer: false, explain: "I lanci sono indipendenti: il dado non ha memoria." },
    { type: "mc", q: "Con quale simbolo si indica la probabilità di A sapendo che B è avvenuto?", options: ["P(A | B)", "P(A ∩ B)", "P(A ∪ B)"], answer: 0, explain: "La barra verticale si legge «dato»." },
    { type: "num", q: "Con un dado, qual è la probabilità di avere 2 sapendo che il numero è pari? (risposta decimale, due cifre)", answer: 0.33, tol: 0.01, explain: "I casi pari sono 2, 4, 6: 1/3." },
    { type: "text", q: "Come si chiama il teorema che permette di passare da P(B | A) a P(A | B)?", answer: ["bayes", "teorema di bayes"], explain: "È il teorema di Bayes." }
  ],
  m: [
    { type: "num", q: "Un'urna ha 3 palline rosse e 2 blu. Si estraggono due palline senza reinserimento. Qual è la probabilità che siano entrambe rosse? (risposta decimale)", answer: 0.3, tol: 0.001, explain: "3/5 · 2/4 = 6/20 = 0,3." },
    { type: "mc", q: "Se A e B sono indipendenti con P(A) = 0,3 e P(B) = 0,6, quanto vale P(A ∩ B)?", options: ["0,18", "0,9", "0,3"], answer: 0, explain: "0,3 · 0,6 = 0,18." },
    { type: "tf", q: "Se la roulette ha dato rosso 6 volte di fila, la prossima giocata ha più probabilità di dare nero.", answer: false, explain: "I lanci sono indipendenti: la probabilità non cambia (errore del giocatore)." },
    { type: "num", q: "In una classe il 60% degli studenti ha uno smartphone e il 40% ha anche un tablet. Qual è la probabilità di avere il tablet, sapendo di avere lo smartphone? (risposta decimale, due cifre)", answer: 0.67, tol: 0.01, explain: "P = 0,40/0,60 ≈ 0,67." },
    { type: "mc", q: "Due eventi A e B incompatibili, entrambi con probabilità positiva, sono…", options: ["dipendenti", "indipendenti", "equivalenti"], answer: 0, explain: "P(A ∩ B) = 0 ≠ P(A)P(B): sono dipendenti." }
  ],
  d: [
    { type: "num", q: "Una malattia colpisce l'1% della popolazione. Un test ha sensibilità 100% e il 4% di falsi positivi. Su 10 000 persone, quanti sono i positivi attesi?", answer: 496, explain: "100 malati positivi + 4% di 9900 = 396 falsi positivi: 496." },
    { type: "mc", q: "Nell'esempio precedente, la probabilità di essere malato dato un test positivo è circa…", options: ["20%", "100%", "4%"], answer: 0, explain: "100/496 ≈ 0,20." },
    { type: "tf", q: "Nel problema di Monty Hall, se i concorrenti scelgono a caso tra le due porte rimaste, vincono nel 50% dei casi.", answer: true, explain: "Scegliendo a caso tra le due porte si vince in media (2/3 + 1/3)/2 = 1/2: la strategia migliore è sempre cambiare (2/3)." },
    { type: "num", q: "Tre fabbriche producono il 50%, 30% e 20% dei pezzi con difetti rispettivamente 1%, 2%, 5%. Qual è la percentuale di pezzi difettosi in totale?", answer: 2.1, tol: 0.01, unit: "%", explain: "0,5 · 0,01 + 0,3 · 0,02 + 0,2 · 0,05 = 0,005 + 0,006 + 0,010 = 0,021." },
    { type: "num", q: "Estraendo 3 carte senza reinserimento da un mazzo di 40, qual è la probabilità che siano tutti e tre assi? (in 1/N, dimmi N)", answer: 2470, explain: "4/40 · 3/39 · 2/38 = 1/2470." }
  ]
});
