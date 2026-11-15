QBANK("en", "p5-mat-operazioni-decimali", {
  "f": [
    {
      "type": "num",
      "q": "What is 6.4 + 2.3?",
      "answer": 8.7,
      "tol": 0.001,
      "explain": "Decimal point under decimal point: 6.4 + 2.3 = 8.7."
    },
    {
      "type": "mc",
      "q": "What is 4.5 × 10?",
      "options": [
        "0.45",
        "45",
        "450"
      ],
      "answer": 1,
      "explain": "Multiplying by 10 moves the decimal point 1 place to the right: 4.5 × 10 = 45."
    },
    {
      "type": "tf",
      "q": "To divide 7.5 by 10 you move the decimal point one place to the left.",
      "answer": true,
      "explain": "True: 7.5 : 10 = 0.75. Dividing by 10 makes the number 10 times smaller."
    },
    {
      "type": "num",
      "q": "What is 12.9 − 4.4?",
      "answer": 8.5,
      "tol": 0.001,
      "explain": "12.9 − 4.4 = 8.5."
    },
    {
      "type": "text",
      "q": "What is the first digit after the decimal point called? (one word, plural)",
      "answer": [
        "tenths",
        "the tenths",
        "tenth",
        "the tenth"
      ],
      "explain": "The first digit after the decimal point shows the tenths (1/10); then come the hundredths and the thousandths."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "A pack of pasta costs €1.35. How much do 4 packs cost?",
      "answer": 5.4,
      "tol": 0.001,
      "unit": "€",
      "explain": "1.35 × 4 = €5.40."
    },
    {
      "type": "num",
      "q": "What is 4.5 × 2.2?",
      "answer": 9.9,
      "tol": 0.001,
      "explain": "45 × 22 = 990. There are 1 + 1 = 2 decimal places, so 9.90 = 9.9."
    },
    {
      "type": "mc",
      "q": "What is 27.6 : 6?",
      "options": [
        "0.46",
        "46",
        "4.6"
      ],
      "answer": 2,
      "explain": "27 : 6 = 4 remainder 3; bring down the 6 and put the decimal point: 36 : 6 = 6. Result 4.6. Check: 4.6 × 6 = 27.6."
    },
    {
      "type": "tf",
      "q": "Dividing a number by 0.1 gives a smaller number.",
      "answer": false,
      "explain": "False: dividing by 0.1 is the same as multiplying by 10, so the number gets bigger. For example 3 : 0.1 = 30."
    },
    {
      "type": "num",
      "q": "With €20 you buy 3 ice creams at €4.50 each. How many euros of change do you get?",
      "answer": 6.5,
      "tol": 0.001,
      "unit": "€",
      "explain": "Cost: 4.50 × 3 = €13.50. Change: 20 − 13.50 = €6.50."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "A rope 15.6 m long is cut into pieces of 0.6 m each. How many pieces do you get?",
      "answer": 26,
      "explain": "15.6 : 0.6 = 156 : 6 = 26 pieces (I multiplied both numbers by 10)."
    },
    {
      "type": "mc",
      "q": "Which of these calculations is wrong?",
      "options": [
        "3.2 × 10 = 32",
        "0.45 × 100 = 45",
        "6.5 : 100 = 6.05"
      ],
      "answer": 2,
      "explain": "6.5 : 100 = 0.065: the decimal point moves 2 places to the left. The other two are correct."
    },
    {
      "type": "tf",
      "q": "If you buy 3 kg of apples at €2.40 per kg and 2 kg of pears at €3.10 per kg, you spend less than €14.",
      "answer": true,
      "explain": "Apples: 2.40 × 3 = €7.20. Pears: 3.10 × 2 = €6.20. Total €13.40, which is less than €14."
    },
    {
      "type": "num",
      "q": "You have €50. You buy 2.5 kg of oranges at €1.80 per kg and a loaf of bread for €2.30. How many euros are left?",
      "answer": 43.2,
      "tol": 0.001,
      "unit": "€",
      "explain": "Oranges: 2.5 × 1.80 = €4.50. Total spent: 4.50 + 2.30 = €6.80. Left: 50 − 6.80 = €43.20."
    },
    {
      "type": "order",
      "q": "Order the results from the smallest to the largest.",
      "items": [
        "6.3 : 100",
        "0.4 × 0.2",
        "0.9 : 3",
        "0.5 + 0.15",
        "2.5 × 0.4"
      ],
      "explain": "6.3 : 100 = 0.063; 0.4 × 0.2 = 0.08; 0.9 : 3 = 0.3; 0.5 + 0.15 = 0.65; 2.5 × 0.4 = 1."
    }
  ]
});
