QBANK("en", "m1-mat-numeri-primi-mcd-mcm", {
  "f": [
    {
      "type": "mc",
      "q": "Which of these numbers is divisible by 5?",
      "options": [
        "122",
        "135",
        "143"
      ],
      "answer": 1,
      "explain": "A number is divisible by 5 if it ends in 0 or 5: 135."
    },
    {
      "type": "tf",
      "q": "The number 9 is a prime number.",
      "answer": false,
      "explain": "9 = 3 × 3: it has three divisors (1, 3, 9), so it is composite."
    },
    {
      "type": "mc",
      "q": "How many divisors does a prime number have?",
      "options": [
        "Only one",
        "Infinitely many",
        "Exactly two"
      ],
      "answer": 2,
      "explain": "A prime number is divisible only by 1 and by itself: it has exactly two divisors."
    },
    {
      "type": "num",
      "q": "What is the smallest prime number?",
      "answer": 2,
      "explain": "The number 1 is not prime (it has only one divisor). 2 has two divisors, 1 and 2: it is the smallest prime."
    },
    {
      "type": "text",
      "q": "What are numbers greater than 1 with more than two divisors called?",
      "answer": [
        "composite",
        "composite numbers",
        "composite number"
      ],
      "explain": "Numbers with more than two divisors (like 6 or 15) are called composite."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Which of these numbers is divisible by 9?",
      "options": [
        "5,272",
        "5,276",
        "5,274"
      ],
      "answer": 2,
      "explain": "A number is divisible by 9 if the sum of its digits is: 5 + 2 + 7 + 4 = 18."
    },
    {
      "type": "num",
      "q": "How many divisors does the number 36 have?",
      "answer": 9,
      "unit": "divisors",
      "explain": "The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36: 9 in all."
    },
    {
      "type": "mc",
      "q": "If two numbers are coprime, what is their GCD?",
      "options": [
        "0",
        "1",
        "Their product"
      ],
      "answer": 1,
      "explain": "Coprime means the only common divisor is 1: GCD = 1."
    },
    {
      "type": "num",
      "q": "A strip of fabric is 84 cm long and 60 cm wide. You want to cut it into equal squares, as big as possible, with no leftovers. How long is the side of each square?",
      "answer": 12,
      "unit": "cm",
      "explain": "The side must divide both 84 and 60 and be the largest: GCD(84, 60) = 12 cm (84 = 2² × 3 × 7, 60 = 2² × 3 × 5)."
    },
    {
      "type": "tf",
      "q": "Every number divisible by 4 is also divisible by 2.",
      "answer": true,
      "explain": "If a number is a multiple of 4, it is a multiple of 2 × 2, so it is even and divisible by 2."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Three friends run in the park: Anna every 3 days, Bruno every 4 days and Carla every 6 days. Today they all run together. In how many days will all three run together again?",
      "answer": 12,
      "unit": "days",
      "explain": "We need the LCM(3, 4, 6): 3 = 3, 4 = 2², 6 = 2 × 3 → 2² × 3 = 12 days."
    },
    {
      "type": "num",
      "q": "A teacher has 48 pencils, 72 notebooks and 60 erasers. She wants to make as many identical kits as possible, with nothing left over. How many kits can she make?",
      "answer": 12,
      "unit": "kits",
      "explain": "We need the GCD(48, 72, 60): 48 = 2⁴ × 3, 72 = 2³ × 3², 60 = 2² × 3 × 5 → common factors with the smallest exponent: 2² × 3 = 12 kits."
    },
    {
      "type": "mc",
      "q": "One of these prime factorisations is wrong. Which one?",
      "options": [
        "45 = 3 × 15",
        "84 = 2² × 3 × 7",
        "100 = 2² × 5²"
      ],
      "answer": 0,
      "explain": "15 is not a prime number (15 = 3 × 5): the correct factorisation is 45 = 3² × 5."
    },
    {
      "type": "tf",
      "q": "For any two numbers, the product of their GCD and their LCM equals the product of the two numbers.",
      "answer": true,
      "explain": "Example with 12 and 18: GCD = 6, LCM = 36 and 6 × 36 = 216 = 12 × 18."
    },
    {
      "type": "order",
      "q": "Put these in order from the smallest value to the largest.",
      "items": [
        "GCD(9, 16)",
        "LCM(4, 6)",
        "GCD(30, 45)",
        "LCM(4, 5)"
      ],
      "explain": "GCD(9, 16) = 1, LCM(4, 6) = 12, GCD(30, 45) = 15, LCM(4, 5) = 20."
    }
  ]
});
