QBANK("en", "m1-mat-insiemi", {
  "f": [
    {
      "type": "mc",
      "q": "Which symbol is read «belongs to»?",
      "options": [
        "∉",
        "∈",
        "⊂"
      ],
      "answer": 1,
      "explain": "The symbol ∈ says that an element belongs to a set, for example 4 ∈ {2, 4, 6}."
    },
    {
      "type": "tf",
      "q": "{1, 2, 3} and {3, 2, 1} are the same set.",
      "answer": true,
      "explain": "In a set the order of the elements does not matter."
    },
    {
      "type": "num",
      "q": "How many elements does the set A = { 2, 4, 6, 8, 10 } have?",
      "answer": 5,
      "explain": "Just count them: 2, 4, 6, 8, 10 are 5 elements, so |A| = 5."
    },
    {
      "type": "mc",
      "q": "Which symbol stands for the union of two sets?",
      "options": [
        "∩",
        "∪",
        "−"
      ],
      "answer": 1,
      "explain": "∪ is the union (all the elements of both sets); ∩ is the intersection."
    },
    {
      "type": "text",
      "q": "What is the number of elements of a set called?",
      "answer": [
        "cardinality",
        "the cardinality",
        "cardinal number"
      ],
      "explain": "The number of elements of a set is called its cardinality, written |A|."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "A = { x | x is an even natural number less than 9 }. Which listing is correct?",
      "options": [
        "{ 2, 4, 6, 8 }",
        "{ 0, 2, 4, 6, 8 }",
        "{ 2, 4, 6, 8, 10 }"
      ],
      "answer": 1,
      "explain": "0 is an even natural number and 10 is not less than 9: A = { 0, 2, 4, 6, 8 }."
    },
    {
      "type": "num",
      "q": "A is the set of even numbers from 1 to 20 and B the set of multiples of 5 from 1 to 20. How many elements does A ∩ B have?",
      "answer": 2,
      "explain": "The evens are 2, 4, …, 20; the multiples of 5 are 5, 10, 15, 20. They share 10 and 20: 2 elements."
    },
    {
      "type": "mc",
      "q": "If A = { 1, 2, 3, 4 } and B = { 2, 4 }, which relation is correct?",
      "options": [
        "A ⊂ B",
        "B ⊂ A",
        "B ∈ A"
      ],
      "answer": 1,
      "explain": "Every element of B (2 and 4) is also in A, so B is a subset of A: B ⊂ A."
    },
    {
      "type": "tf",
      "q": "If A ∩ B = ∅, then the number of elements of A ∪ B is |A| + |B|.",
      "answer": true,
      "explain": "If there are no common elements, no element is counted twice: you just add."
    },
    {
      "type": "num",
      "q": "U = { 1, 2, 3, …, 12 } and A is the set of divisors of 12. How many elements does the complement of A in U have?",
      "answer": 6,
      "explain": "The divisors of 12 are 1, 2, 3, 4, 6, 12: that is 6. The complement has 12 − 6 = 6 elements (5, 7, 8, 9, 10, 11)."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "In a group of 40 tourists, 25 speak English, 20 speak French and 8 speak neither language. How many tourists speak both languages?",
      "answer": 13,
      "explain": "Those who speak at least one: 40 − 8 = 32. From |A ∪ B| = |A| + |B| − |A ∩ B|: 32 = 25 + 20 − x, so x = 45 − 32 = 13."
    },
    {
      "type": "num",
      "q": "The Cartesian product A × B contains 35 pairs and A has 5 elements. How many elements does B have?",
      "answer": 7,
      "explain": "The pairs are |A| × |B|: 5 × |B| = 35, so |B| = 35 ÷ 5 = 7."
    },
    {
      "type": "mc",
      "q": "|A| = 12, |A ∪ B| = 20 and |A ∩ B| = 5. What is |B| ?",
      "options": [
        "3",
        "13",
        "15"
      ],
      "answer": 1,
      "explain": "|A ∪ B| = |A| + |B| − |A ∩ B| → 20 = 12 + |B| − 5 → |B| = 20 − 12 + 5 = 13."
    },
    {
      "type": "tf",
      "q": "The differences A − B and B − A are always equal.",
      "answer": false,
      "explain": "They are equal only in special cases. With A = { 1, 2 } and B = { 2, 3 }: A − B = { 1 } but B − A = { 3 }."
    },
    {
      "type": "order",
      "q": "Order these sets from smallest to largest by number of elements.",
      "items": [
        "The natural numbers greater than 5 and less than 6",
        "{ a, b, a, b }",
        "The days of a week",
        "The natural numbers less than 10"
      ],
      "explain": "The first set is empty (0 elements), then { a, b } (2), the days of the week (7) and finally 0, 1, …, 9 (10 elements)."
    }
  ]
});
