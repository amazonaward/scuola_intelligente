QBANK("it", "l2-mat-probabilita", {
  "f": [
    { "type": "num", "q": "Si lancia una moneta. Qual è la probabilità (in %) di ottenere testa?", "answer": 50, "unit": "%", "explain": "1 caso favorevole su 2 possibili: 1/2 = 50 %." },
    { "type": "mc", "q": "Un evento impossibile ha probabilità…", "options": ["0", "1", "0,5"], "answer": 0, "explain": "Non si verifica mai: p = 0." },
    { "type": "num", "q": "Si lancia un dado. Quanti sono i casi possibili?", "answer": 6, "unit": "", "explain": "Le sei facce: 1, 2, 3, 4, 5, 6." },
    { "type": "tf", "q": "L'evento certo ha probabilità 1.", "answer": true, "explain": "Si verifica sempre: p = 1 = 100 %." },
    { "type": "num", "q": "Un'urna ha 2 palline rosse e 8 blu. Qual è la probabilità (in %) di estrarre una pallina rossa?", "answer": 20, "unit": "%", "explain": "2/10 = 20 %." }
  ],
  "m": [
    { "type": "num", "q": "Un dado è lanciato una volta. Qual è la probabilità (in %, intero) che esca un numero primo? (2, 3, 5)", "answer": 50, "unit": "%", "explain": "I primi in {1,…,6} sono 2, 3, 5: 3/6 = 50 %." },
    { "type": "num", "q": "p(E) = 0,35. Quanto vale la probabilità dell'evento contrario?", "answer": 0.65, "tol": 0.001, "unit": "", "explain": "1 − 0,35 = 0,65." },
    { "type": "tf", "q": "Se un evento ha probabilità 0,8, è più probabile che si verifichi che il contrario.", "answer": true, "explain": "Il contrario ha probabilità 0,2, quindi è meno probabile." },
    { "type": "mc", "q": "Lancio due dadi: quale somma è la più probabile?", "options": ["2", "7", "12"], "answer": 1, "explain": "Il 7 si ottiene in 6 modi su 36; il 2 e il 12 solo in uno." },
    { "type": "num", "q": "Da un mazzo di 40 carte si estrae una carta. Probabilità (in %) di estrarre un asso o un re?", "answer": 20, "unit": "%", "explain": "4/40 + 4/40 = 8/40 = 20 %." }
  ],
  "d": [
    { "type": "num", "q": "Probabilità (in %) di estrarre da un mazzo di 52 carte un re o una carta di cuori (re di cuori compreso)? Arrotonda a intero.", "answer": 31, "tol": 1, "unit": "%", "explain": "4/52 + 13/52 − 1/52 = 16/52 ≈ 30,8 % ≈ 31 %." },
    { "type": "num", "q": "Si lancia una moneta 3 volte. Probabilità (in %) di ottenere tre teste?", "answer": 12.5, "tol": 0.1, "unit": "%", "explain": "(1/2)³ = 1/8 = 12,5 %." },
    { "type": "num", "q": "Un'urna ha 4 palline bianche e 6 nere. Si estraggono due palline senza rimettere la prima. Probabilità (in %, arrotondata a intero) che siano entrambe bianche?", "answer": 13, "tol": 1, "unit": "%", "explain": "4/10 · 3/9 = 12/90 = 2/15 ≈ 13,3 %." },
    { "type": "mc", "q": "Qual è la probabilità di ottenere almeno una testa in 2 lanci di moneta?", "options": ["1/2", "3/4", "1"], "answer": 1, "explain": "Il contrario è 'nessuna testa' (CC) = 1/4; quindi 1 − 1/4 = 3/4." },
    { "type": "tf", "q": "Dopo 6 teste consecutive, la probabilità di croce al lancio successivo è maggiore di 1/2.", "answer": false, "explain": "I lanci sono indipendenti: la probabilità resta 1/2." }
  ]
});
