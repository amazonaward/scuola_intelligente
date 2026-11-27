QBANK("it", "l3-mat-successioni", {
  "f": [
    { "type": "num", "q": "Qual è il termine successivo della progressione 4, 7, 10, 13, …?", "answer": 16, "explain": "La differenza è d = 3: 13 + 3 = 16." },
    { "type": "num", "q": "Qual è il termine successivo della progressione 2, 4, 8, 16, …?", "answer": 32, "explain": "La ragione è q = 2: 16 · 2 = 32." },
    { "type": "mc", "q": "In una progressione aritmetica, tra due termini consecutivi è costante…", "options": ["la differenza", "il rapporto", "il prodotto"], "answer": 0, "explain": "Aritmetica: differenza costante d. Geometrica: rapporto costante q." },
    { "type": "tf", "q": "La successione dei numeri pari 2, 4, 6, 8, … è una progressione aritmetica.", "answer": true, "explain": "Ogni termine si ottiene dal precedente sommando 2: d = 2." },
    { "type": "text", "q": "Come si chiama il matematico pisano autore del Liber abaci (1202) che diede il nome a una celebre successione?", "answer": ["fibonacci", "leonardo fibonacci", "leonardo pisano"], "explain": "Leonardo Pisano, detto Fibonacci: 1, 1, 2, 3, 5, 8, …" }
  ],
  "m": [
    { "type": "num", "q": "Progressione aritmetica con a₁ = 10 e d = 4: quanto vale a₁₁?", "answer": 50, "explain": "a₁₁ = 10 + 10·4 = 50." },
    { "type": "num", "q": "Somma dei primi 30 numeri naturali positivi.", "answer": 465, "explain": "S = 30·31/2 = 465." },
    { "type": "num", "q": "Progressione geometrica con a₁ = 81 e q = 1/3: quanto vale a₄?", "answer": 3, "explain": "a₄ = 81 · (1/3)³ = 81/27 = 3." },
    { "type": "mc", "q": "La serie 1 + 1/3 + 1/9 + 1/27 + … vale…", "options": ["3/2", "2", "3"], "answer": 0, "explain": "S = 1/(1 − 1/3) = 3/2." },
    { "type": "tf", "q": "Un capitale con interesse composto cresce secondo una progressione geometrica.", "answer": true, "explain": "Ogni anno si moltiplica per (1 + tasso): rapporto costante, cioè progressione geometrica." }
  ],
  "d": [
    { "type": "num", "q": "Quanti termini ha la progressione aritmetica 5, 8, 11, …, 98?", "answer": 32, "explain": "98 = 5 + (n − 1)·3 → n − 1 = 31 → n = 32." },
    { "type": "num", "q": "Somma dei primi 8 termini della progressione geometrica 3, 6, 12, …", "answer": 765, "explain": "S₈ = 3(2⁸ − 1)/(2 − 1) = 3·255 = 765." },
    { "type": "mc", "q": "Nell'induzione, per dimostrare 1 + 3 + 5 + … + (2n − 1) = n², il passo da n a n + 1 usa che…", "options": ["n² + (2n + 1) = (n + 1)²", "n² + 2n = (n + 1)²", "n² + n = (n + 1)²"], "answer": 0, "explain": "Il nuovo termine dispari è 2(n + 1) − 1 = 2n + 1, e n² + 2n + 1 = (n + 1)²." },
    { "type": "num", "q": "Scrivi 0,444… come frazione: dai il valore del numeratore della frazione ridotta ai minimi termini.", "answer": 4, "explain": "0,444… = (4/10)/(1 − 1/10) = (4/10)/(9/10) = 4/9: il numeratore è 4." },
    { "type": "tf", "q": "Se aₙ₊₁ − aₙ è sempre positivo, la successione è decrescente.", "answer": false, "explain": "Differenza positiva significa aₙ₊₁ &gt; aₙ: la successione è crescente." }
  ]
});
