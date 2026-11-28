QBANK("en", "l3-mat-successioni", {
  "f": [
    { "type": "num", "q": "What is the next term of the progression 4, 7, 10, 13, …?", "answer": 16, "explain": "The difference is d = 3: 13 + 3 = 16." },
    { "type": "num", "q": "What is the next term of the progression 2, 4, 8, 16, …?", "answer": 32, "explain": "The common ratio is q = 2: 16 · 2 = 32." },
    { "type": "mc", "q": "In an arithmetic progression, what is constant between two consecutive terms?", "options": ["the difference", "the ratio", "the product"], "answer": 0, "explain": "Arithmetic: constant difference d. Geometric: constant ratio q." },
    { "type": "tf", "q": "The sequence of even numbers 2, 4, 6, 8, … is an arithmetic progression.", "answer": true, "explain": "Each term is obtained from the previous one by adding 2: d = 2." },
    { "type": "text", "q": "What is the name of the mathematician from Pisa, author of the Liber abaci (1202), who gave his name to a famous sequence?", "answer": ["fibonacci", "leonardo fibonacci", "leonardo of pisa", "leonardo pisano"], "explain": "Leonardo of Pisa, known as Fibonacci: 1, 1, 2, 3, 5, 8, …" }
  ],
  "m": [
    { "type": "num", "q": "Arithmetic progression with a₁ = 10 and d = 4: what is a₁₁?", "answer": 50, "explain": "a₁₁ = 10 + 10·4 = 50." },
    { "type": "num", "q": "Sum of the first 30 positive natural numbers.", "answer": 465, "explain": "S = 30·31/2 = 465." },
    { "type": "num", "q": "Geometric progression with a₁ = 81 and q = 1/3: what is a₄?", "answer": 3, "explain": "a₄ = 81 · (1/3)³ = 81/27 = 3." },
    { "type": "mc", "q": "The series 1 + 1/3 + 1/9 + 1/27 + … equals…", "options": ["3/2", "2", "3"], "answer": 0, "explain": "S = 1/(1 − 1/3) = 3/2." },
    { "type": "tf", "q": "Capital earning compound interest grows according to a geometric progression.", "answer": true, "explain": "Every year it is multiplied by (1 + rate): a constant ratio, that is, a geometric progression." }
  ],
  "d": [
    { "type": "num", "q": "How many terms does the arithmetic progression 5, 8, 11, …, 98 have?", "answer": 32, "explain": "98 = 5 + (n − 1)·3 → n − 1 = 31 → n = 32." },
    { "type": "num", "q": "Sum of the first 8 terms of the geometric progression 3, 6, 12, …", "answer": 765, "explain": "S₈ = 3(2⁸ − 1)/(2 − 1) = 3·255 = 765." },
    { "type": "mc", "q": "In proving 1 + 3 + 5 + … + (2n − 1) = n² by induction, the step from n to n + 1 uses the fact that…", "options": ["n² + (2n + 1) = (n + 1)²", "n² + 2n = (n + 1)²", "n² + n = (n + 1)²"], "answer": 0, "explain": "The new odd term is 2(n + 1) − 1 = 2n + 1, and n² + 2n + 1 = (n + 1)²." },
    { "type": "num", "q": "Write 0.444… as a fraction: give the numerator of the fraction in its lowest terms.", "answer": 4, "explain": "0.444… = (4/10)/(1 − 1/10) = (4/10)/(9/10) = 4/9: the numerator is 4." },
    { "type": "tf", "q": "If aₙ₊₁ − aₙ is always positive, the sequence is decreasing.", "answer": false, "explain": "A positive difference means aₙ₊₁ &gt; aₙ: the sequence is increasing." }
  ]
});
