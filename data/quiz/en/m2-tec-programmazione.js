QBANK("en", "m2-tec-programmazione", {
 "f": [
  {
   "type": "mc",
   "q": "Which Python instruction shows a value on the screen?",
   "options": [
    "print()",
    "input()",
    "range()"
   ],
   "answer": 0,
   "explain": "print() writes to the screen; input() reads from the user; range() generates a sequence of numbers."
  },
  {
   "type": "tf",
   "q": "In Python a text (string) is written between quotation marks.",
   "answer": true,
   "explain": "For example nome = \"Sara\": the quotes show that it is text."
  },
  {
   "type": "mc",
   "q": "What type is the value 3.14?",
   "options": [
    "Integer (int)",
    "Decimal (float)",
    "String (str)"
   ],
   "answer": 1,
   "explain": "A number with a decimal part is a float (written with a point)."
  },
  {
   "type": "text",
   "q": "Which Python keyword do you use for a loop with a known number of repetitions?",
   "answer": [
    "for"
   ],
   "explain": "for repeats a set number of times, usually with range()."
  },
  {
   "type": "tf",
   "q": "A variable name can contain spaces, for example «max points».",
   "answer": false,
   "explain": "False: no spaces in names; you write max_points."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "How many numbers does this print: for i in range(2, 6): print(i)?",
   "answer": 4,
   "tol": 0,
   "explain": "range(2, 6) gives 2, 3, 4, 5: it stops before 6, so 4 numbers."
  },
  {
   "type": "mc",
   "q": "Which line correctly shows the word Ciao on the screen?",
   "options": [
    "print(Ciao)",
    "print(\"Ciao\")",
    "print: Ciao"
   ],
   "answer": 1,
   "explain": "A text goes between quotes inside the parentheses of print()."
  },
  {
   "type": "num",
   "q": "c = 10; while c > 4: c = c - 3. How many times does the loop run?",
   "answer": 2,
   "tol": 0,
   "explain": "c goes 10 → 7 (1st turn) → 4 (2nd turn); 4 > 4 is false and the loop stops: 2 turns."
  },
  {
   "type": "text",
   "q": "What do we call a mistake in a program?",
   "answer": [
    "bug",
    "a bug",
    "the bug"
   ],
   "explain": "Since 1947 mistakes are called «bugs» and fixing them is «debugging»."
  },
  {
   "type": "mc",
   "q": "Which of these variable names is valid in Python?",
   "options": [
    "2punti",
    "punti_max",
    "punti max"
   ],
   "answer": 1,
   "explain": "A name cannot start with a number or contain spaces: punti_max is fine."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "s = 0; for n in range(1, 6): s = s + n * n. What is s at the end?",
   "answer": 55,
   "tol": 0,
   "explain": "The squares are added: 1 + 4 + 9 + 16 + 25 = 55."
  },
  {
   "type": "mc",
   "q": "A program must add 5 numbers typed by the user, but at the end it always shows only the last number. What is the most likely mistake?",
   "options": [
    "It put somma = 0 inside the loop, so it resets at every turn",
    "It used for instead of while",
    "It put print outside the loop"
   ],
   "answer": 0,
   "explain": "If somma = 0 is inside the loop, the accumulator resets at every turn and only the last value is left."
  },
  {
   "type": "tf",
   "q": "x = 5; y = x; x = x + 1. At the end y is still 5.",
   "answer": true,
   "explain": "y copied the value 5 before the change: changing x afterwards does not change y."
  },
  {
   "type": "num",
   "q": "a = 2; for i in range(4): a = a * 2 - 1. What is a at the end?",
   "answer": 17,
   "tol": 0,
   "explain": "Step by step: 2 → 3 → 5 → 9 → 17."
  },
  {
   "type": "order",
   "q": "Put the lines of a countdown 3, 2, 1, Via! in order (the two lines inside the loop are indented).",
   "items": [
    "n = 3",
    "while n > 0:",
    "print(n)",
    "n = n - 1",
    "print(\"Via!\")"
   ],
   "explain": "Start with n = 3, the while repeats print and the decrease, then outside the loop «Via!» is printed."
  }
 ]
});
