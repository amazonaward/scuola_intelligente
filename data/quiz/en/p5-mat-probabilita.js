QBANK("en", "p5-mat-probabilita", {
  "f": [
    {
      "type": "mc",
      "q": "What is the mode of a set of data?",
      "options": [
        "The value that appears most often",
        "The value in the middle",
        "The sum of all the values"
      ],
      "answer": 0,
      "explain": "The mode is the value with the highest frequency, that is, the one that repeats most times."
    },
    {
      "type": "tf",
      "q": "When rolling an ordinary 6-sided die, getting a number greater than 6 is an impossible event.",
      "answer": true,
      "explain": "True: the die has only the numbers 1 to 6, so a number greater than 6 can never come up."
    },
    {
      "type": "num",
      "q": "What is the mean (average) of 2, 8 and 11?",
      "answer": 7,
      "explain": "Sum: 2 + 8 + 11 = 21. Divide by 3 values: 21 : 3 = 7."
    },
    {
      "type": "mc",
      "q": "Which of these events is certain?",
      "options": [
        "Rolling a die gives a 6",
        "Rolling a die gives a number less than 7",
        "Flipping a coin gives heads"
      ],
      "answer": 1,
      "explain": "A die has only the numbers 1 to 6, so a number less than 7 always comes up: it is a certain event."
    },
    {
      "type": "text",
      "q": "What is the number of times an answer appears in a survey called?",
      "answer": [
        "frequency",
        "the frequency"
      ],
      "explain": "It is called frequency: for example, if 6 pupils choose football, the frequency of football is 6."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Marco got these marks: 6, 7, 9, 10. What is his mean mark?",
      "answer": 8,
      "explain": "Sum: 6 + 7 + 9 + 10 = 32. Mean: 32 : 4 = 8."
    },
    {
      "type": "num",
      "q": "What is the median of 8, 3, 12, 5, 9, 7?",
      "answer": 7.5,
      "tol": 0.01,
      "explain": "In order: 3, 5, 7, 8, 9, 12. There are 6 values (an even number): the median is the mean of the two middle ones, (7 + 8) : 2 = 7.5."
    },
    {
      "type": "mc",
      "q": "When rolling a die, what is the probability of getting a number greater than 4?",
      "options": [
        "1/2",
        "1/3",
        "1/6"
      ],
      "answer": 1,
      "explain": "There are 2 favourable cases (5 and 6) out of 6 possible: 2/6 = 1/3."
    },
    {
      "type": "tf",
      "q": "A bag holds 3 red balls and 1 blue ball. Drawing a red one is more likely than drawing the blue one.",
      "answer": true,
      "explain": "True: the probability of drawing a red one is 3/4, that of drawing the blue one is 1/4."
    },
    {
      "type": "num",
      "q": "The heights of four friends are 138 cm, 142 cm, 150 cm and 145 cm. What is the range?",
      "answer": 12,
      "unit": "cm",
      "explain": "Range = highest value − lowest value = 150 − 138 = 12 cm."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Giulia got 6, 7 and 9 in her first three tests. What mark must she get in the fourth to have a mean of 8?",
      "answer": 10,
      "explain": "To have a mean of 8 over 4 tests she needs 8 × 4 = 32 points. So far she has 6 + 7 + 9 = 22. She needs 32 − 22 = 10."
    },
    {
      "type": "mc",
      "q": "In a village 4 people earn €1000 a month and one person earns €11,000. Which index describes the «typical» income best?",
      "options": [
        "The mean (€3000)",
        "The median (€1000)",
        "The sum (€15,000)"
      ],
      "answer": 1,
      "explain": "One very high value pushes the mean up to €3000, which looks like almost nobody. The median (€1000) describes the typical situation better."
    },
    {
      "type": "tf",
      "q": "A bag holds 3 red, 2 blue and 5 green balls. The probability of NOT drawing a green one is 1/2.",
      "answer": true,
      "explain": "The non-green balls are 3 + 2 = 5 out of 10 in total: 5/10 = 1/2."
    },
    {
      "type": "num",
      "q": "A bag holds 5 red balls and 15 blue balls. What is the probability of drawing a red one, expressed as a percentage?",
      "answer": 25,
      "unit": "%",
      "explain": "Favourable cases 5 out of 20 possible: 5/20 = 1/4 = 25/100 = 25%."
    },
    {
      "type": "order",
      "q": "Put the steps for finding the median of an EVEN number of values in order.",
      "items": [
        "I put the values in increasing order",
        "I find the two middle values",
        "I add the two middle values",
        "I divide the sum by 2"
      ],
      "explain": "With an even number of values there is no single middle one: you order the data, take the two middle ones and find their mean."
    }
  ]
});
