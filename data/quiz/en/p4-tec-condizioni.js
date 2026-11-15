QBANK("en", "p4-tec-condizioni", {
 "f": [
  {
   "type": "mc",
   "q": "In programs, which word comes after the condition and introduces the action to do when it is true?",
   "options": [
    "if",
    "then",
    "else"
   ],
   "answer": 1,
   "explain": "if = introduces the condition, then = the action done when it is true, else = the action done otherwise."
  },
  {
   "type": "tf",
   "q": "The symbol \">\" means \"greater than\".",
   "answer": true,
   "explain": "True: 7 > 5 is read \"7 is greater than 5\"."
  },
  {
   "type": "mc",
   "q": "An automatic door uses the rule \"IF the sensor sees a person THEN open\". What does the door check?",
   "options": [
    "What time it is",
    "What color the clothes are",
    "Whether there is a person in front"
   ],
   "answer": 2,
   "explain": "The condition is \"does the sensor see a person?\": if it is true, the door opens."
  },
  {
   "type": "tf",
   "q": "If the condition is false, the computer still does the action after THEN.",
   "answer": false,
   "explain": "False: if the condition is false, the action after THEN is skipped."
  },
  {
   "type": "text",
   "q": "What is a value that can change while a program runs, like \"points\" or \"lives\", called?",
   "answer": [
    "variable",
    "a variable",
    "the variable"
   ],
   "explain": "A variable is like a named box where the program keeps a value that can change."
  }
 ],
 "m": [
  {
   "type": "mc",
   "q": "coins = 12. IF coins > 10 THEN say \"Buy the hat\" ELSE say \"Save up\". What does the program say?",
   "options": [
    "Save up",
    "Buy the hat",
    "Both phrases"
   ],
   "answer": 1,
   "explain": "12 > 10 is true, so the action after THEN is carried out."
  },
  {
   "type": "num",
   "q": "points = 8. IF points > 5 THEN points becomes points + 10 ELSE points becomes points − 1. How many points are there at the end?",
   "answer": 18,
   "tol": 0,
   "explain": "8 > 5 is true, so we do points + 10: 8 + 10 = 18."
  },
  {
   "type": "tf",
   "q": "(4 > 2) OR (1 > 9) is true.",
   "answer": true,
   "explain": "True: 4 > 2 is true, and with OR one true condition is enough."
  },
  {
   "type": "mc",
   "q": "IF I am hungry AND the fridge is empty THEN I order pizza. I am hungry, but there is some cheese in the fridge. Do I order pizza?",
   "options": [
    "Yes, I order pizza",
    "No, because the two conditions are not both true",
    "It depends on the day"
   ],
   "answer": 1,
   "explain": "With AND both conditions must be true: the fridge is not empty, so the action is not done."
  },
  {
   "type": "order",
   "q": "Put in order the steps of a program that says \"You won!\" when points go above 10.",
   "items": [
    "Create the variable points",
    "Add 1 to points each time you catch an apple",
    "Check whether points > 10",
    "If it is true, show \"You won!\""
   ],
   "explain": "First the variable is needed, then points change, then the condition is checked, and only if it is true is the message shown."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "A classmate writes: IF it rains THEN take the umbrella ELSE take the umbrella. What is the problem?",
   "options": [
    "The two actions are the same: the condition is useless",
    "The AND operator is missing",
    "\"It rains\" cannot be a condition"
   ],
   "answer": 0,
   "explain": "Whatever the answer is, the program does the same thing: the IF…ELSE choice is useless."
  },
  {
   "type": "tf",
   "q": "(7 > 3) AND NOT (2 > 5) is true.",
   "answer": true,
   "explain": "7 > 3 is true. 2 > 5 is false, and NOT flips it to true. True AND true = true."
  },
  {
   "type": "mc",
   "q": "Rule: IF (it is Saturday OR it is Sunday) AND it is not raining THEN I go to the park. Today is Sunday and it is raining. Do I go to the park?",
   "options": [
    "Yes, because it is Sunday",
    "No, because it is raining",
    "Yes, because it is not Saturday"
   ],
   "answer": 1,
   "explain": "(Saturday OR Sunday) is true, but \"not raining\" is false: with AND both must be true, so I do not go."
  },
  {
   "type": "num",
   "q": "points = 6. First check: IF points > 5 THEN points becomes points × 2. Second check: IF points > 10 THEN points becomes points − 3. How many points are there at the end?",
   "answer": 9,
   "tol": 0,
   "explain": "First check: 6 > 5 is true, so 6 × 2 = 12. Second check: 12 > 10 is true, so 12 − 3 = 9."
  },
  {
   "type": "mc",
   "q": "Thermostat: IF temperature < 20 THEN turn on the boiler ELSE turn it off. The temperature is exactly 20 °C. What does the boiler do?",
   "options": [
    "You cannot tell",
    "It turns on",
    "It stays off"
   ],
   "answer": 2,
   "explain": "20 < 20 is false (20 is not less than 20), so the action after ELSE is carried out: the boiler is off."
  }
 ]
});
