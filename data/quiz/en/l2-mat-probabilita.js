QBANK("en", "l2-mat-probabilita", {
  "f": [
    { "type": "num", "q": "A coin is tossed. What is the probability (in %) of getting heads?", "answer": 50, "unit": "%", "explain": "1 favourable outcome out of 2 possible: 1/2 = 50%." },
    { "type": "mc", "q": "An impossible event has probability…", "options": ["0", "1", "0.5"], "answer": 0, "explain": "It never happens: p = 0." },
    { "type": "num", "q": "A dice is rolled. How many possible outcomes are there?", "answer": 6, "unit": "", "explain": "The six faces: 1, 2, 3, 4, 5, 6." },
    { "type": "tf", "q": "The certain event has probability 1.", "answer": true, "explain": "It always happens: p = 1 = 100%." },
    { "type": "num", "q": "A bag has 2 red balls and 8 blue ones. What is the probability (in %) of drawing a red ball?", "answer": 20, "unit": "%", "explain": "2/10 = 20%." }
  ],
  "m": [
    { "type": "num", "q": "A dice is rolled once. What is the probability (in %, whole number) of getting a prime number? (2, 3, 5)", "answer": 50, "unit": "%", "explain": "The primes in {1,…,6} are 2, 3, 5: 3/6 = 50%." },
    { "type": "num", "q": "p(E) = 0.35. What is the probability of the complementary event?", "answer": 0.65, "tol": 0.001, "unit": "", "explain": "1 − 0.35 = 0.65." },
    { "type": "tf", "q": "If an event has probability 0.8, it is more likely to happen than not.", "answer": true, "explain": "The complement has probability 0.2, so it is less likely." },
    { "type": "mc", "q": "I roll two dice: which total is the most likely?", "options": ["2", "7", "12"], "answer": 1, "explain": "7 can be obtained in 6 ways out of 36; 2 and 12 in only one." },
    { "type": "num", "q": "A card is drawn from a 40-card deck. Probability (in %) of drawing an ace or a king?", "answer": 20, "unit": "%", "explain": "4/40 + 4/40 = 8/40 = 20%." }
  ],
  "d": [
    { "type": "num", "q": "Probability (in %) of drawing a king or a heart from a 52-card deck (including the king of hearts)? Round to a whole number.", "answer": 31, "tol": 1, "unit": "%", "explain": "4/52 + 13/52 − 1/52 = 16/52 ≈ 30.8% ≈ 31%." },
    { "type": "num", "q": "A coin is tossed 3 times. Probability (in %) of getting three heads?", "answer": 12.5, "tol": 0.1, "unit": "%", "explain": "(1/2)³ = 1/8 = 12.5%." },
    { "type": "num", "q": "A bag has 4 white balls and 6 black ones. Two balls are drawn without putting the first back. Probability (in %, rounded to a whole number) that both are white?", "answer": 13, "tol": 1, "unit": "%", "explain": "4/10 · 3/9 = 12/90 = 2/15 ≈ 13.3%." },
    { "type": "mc", "q": "What is the probability of getting at least one head in 2 coin tosses?", "options": ["1/2", "3/4", "1"], "answer": 1, "explain": "The complement is 'no heads' (TT) = 1/4; so 1 − 1/4 = 3/4." },
    { "type": "tf", "q": "After 6 heads in a row, the probability of tails on the next toss is greater than 1/2.", "answer": false, "explain": "The tosses are independent: the probability stays 1/2." }
  ]
});
