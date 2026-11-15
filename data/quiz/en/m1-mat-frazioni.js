QBANK("en", "m1-mat-frazioni", {
  "f": [
    {
      "type": "mc",
      "q": "In the fraction 5/8, which number is the denominator?",
      "options": [
        "5",
        "8",
        "13"
      ],
      "answer": 1,
      "explain": "The denominator is the bottom number: it tells into how many equal parts the whole is divided."
    },
    {
      "type": "tf",
      "q": "The fraction 7/7 is equal to 1.",
      "answer": true,
      "explain": "7 ÷ 7 = 1: it is an apparent fraction."
    },
    {
      "type": "mc",
      "q": "Which of these fractions is proper?",
      "options": [
        "9/5",
        "6/6",
        "4/9"
      ],
      "answer": 2,
      "explain": "A fraction is proper if the numerator is smaller than the denominator: 4 &lt; 9."
    },
    {
      "type": "num",
      "q": "How much is 3/4 of 20?",
      "answer": 15,
      "explain": "20 ÷ 4 = 5; 5 × 3 = 15."
    },
    {
      "type": "text",
      "q": "What is a fraction called when its numerator is bigger than its denominator (and not a multiple)?",
      "answer": [
        "improper",
        "improper fraction",
        "an improper fraction"
      ],
      "explain": "A fraction whose numerator is bigger than its denominator is worth more than one whole: it is an improper fraction."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Which fraction is equivalent to 3/5?",
      "options": [
        "9/20",
        "6/15",
        "6/10"
      ],
      "answer": 2,
      "explain": "Multiplying numerator and denominator by 2 gives 6/10."
    },
    {
      "type": "mc",
      "q": "How do you write 17/5 as a mixed number?",
      "options": [
        "2 and 3/5",
        "3 and 2/5",
        "3 and 1/5"
      ],
      "answer": 1,
      "explain": "17 ÷ 5 = 3 remainder 2, so 3 wholes and 2/5."
    },
    {
      "type": "num",
      "q": "A cyclist has covered 2/3 of a 90 km race. How many kilometres has he covered?",
      "answer": 60,
      "unit": "km",
      "explain": "90 ÷ 3 = 30; 30 × 2 = 60 km."
    },
    {
      "type": "mc",
      "q": "What is 2/3 × 9/4?",
      "options": [
        "3/2",
        "11/7",
        "6/7"
      ],
      "answer": 0,
      "explain": "Multiply numerators and denominators: 18/12; dividing by 6 gives 3/2."
    },
    {
      "type": "tf",
      "q": "Between 3/5 and 2/3 the bigger fraction is 3/5.",
      "answer": false,
      "explain": "With common denominator 15: 3/5 = 9/15 and 2/3 = 10/15. So 2/3 is bigger."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "A tailor has 36 m of fabric. She uses 1/4 of it for a dress and 1/3 for a curtain. How many metres of fabric are left?",
      "answer": 15,
      "unit": "m",
      "explain": "Dress: 36 ÷ 4 = 9 m. Curtain: 36 ÷ 3 = 12 m. Used 9 + 12 = 21 m; left 36 − 21 = 15 m."
    },
    {
      "type": "mc",
      "q": "What is the value of the expression 1/2 + 1/3 × 3/4 ?",
      "options": [
        "5/7",
        "5/8",
        "3/4"
      ],
      "answer": 2,
      "explain": "Multiplication first: 1/3 × 3/4 = 1/4. Then 1/2 + 1/4 = 2/4 + 1/4 = 3/4."
    },
    {
      "type": "tf",
      "q": "Marco says: «To add 2/3 + 4/5 I add numerators and denominators and get 6/8». His reasoning is correct.",
      "answer": false,
      "explain": "It is wrong: you need a common denominator (15): 10/15 + 12/15 = 22/15."
    },
    {
      "type": "num",
      "q": "A bottle that is 3/5 full holds 1.2 litres of water. How many litres does it hold when completely full?",
      "answer": 2,
      "tol": 0.01,
      "unit": "L",
      "explain": "Inverse problem: 1.2 ÷ 3 = 0.4 litres for 1/5; 0.4 × 5 = 2 litres."
    },
    {
      "type": "order",
      "q": "Put the steps for calculating 1/4 + 2/3 in order.",
      "items": [
        "Find the lcm of the denominators: 12",
        "Convert the fractions: 3/12 and 8/12",
        "Add the numerators: 11/12",
        "Check whether it can be simplified"
      ],
      "explain": "First the common denominator (lcm), then equivalent fractions, then the sum, and finally simplification."
    }
  ]
});
