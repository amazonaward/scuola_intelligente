QBANK("en", "m1-tec-algoritmi-diagrammi", {
 "f": [
  {
   "type": "mc",
   "q": "What do the arrows in a flowchart show?",
   "options": [
    "An error",
    "A decision",
    "The next step, i.e. the flow of the algorithm"
   ],
   "answer": 2,
   "explain": "Arrows connect the blocks and show the order in which the steps are carried out."
  },
  {
   "type": "tf",
   "q": "A flowchart has only one Start block.",
   "answer": true,
   "explain": "True: the algorithm begins at a single point, while it may have more than one End."
  },
  {
   "type": "text",
   "q": "What is the one who carries out an algorithm, whether a person or a machine, called?",
   "answer": [
    "executor",
    "the executor",
    "processor",
    "the processor",
    "agent"
   ],
   "explain": "The executor does exactly what is written: a computer is a very fast executor but with no imagination."
  },
  {
   "type": "mc",
   "q": "Which of these instructions is NOT ambiguous?",
   "options": [
    "Add a bit of salt",
    "Add 5 g of salt",
    "Add salt to taste",
    "Add a nice handful of salt"
   ],
   "answer": 1,
   "explain": "Only «5 g» gives a precise quantity that can be understood in only one way."
  },
  {
   "type": "tf",
   "q": "A good algorithm must work only for one particular case, not for all cases of the same kind.",
   "answer": false,
   "explain": "False: it must be general, i.e. valid for all cases of the same kind."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Use Euclid's algorithm: what is the GCD of 56 and 24?",
   "answer": 8,
   "explain": "56 ÷ 24 leaves remainder 8; 24 ÷ 8 leaves remainder 0. The last non-zero remainder is 8, so GCD(56, 24) = 8."
  },
  {
   "type": "mc",
   "q": "In Scratch, which block corresponds to the selection structure (the diamond of the flowchart)?",
   "options": [
    "«repeat 10 times»",
    "«if … then … else»",
    "the blocks snapped one under the other"
   ],
   "answer": 1,
   "explain": "The «if … then … else» block chooses between two paths, like the diamond."
  },
  {
   "type": "order",
   "q": "Put the steps of the «even or odd» algorithm in order.",
   "items": [
    "Start",
    "Read the number N",
    "Compute the remainder of N ÷ 2",
    "If the remainder is 0 write «even», otherwise write «odd»",
    "End"
   ],
   "explain": "First the input is read, then the remainder of the division is processed, then the result is shown."
  },
  {
   "type": "tf",
   "q": "Every Scratch program can be turned into a flowchart, and vice versa.",
   "answer": true,
   "explain": "True: sequence, selection and iteration are found both in the blocks and in the flowchart symbols."
  },
  {
   "type": "num",
   "q": "An algorithm does: X ← 5; then repeats 3 times «X ← X + 2»; finally writes X. What number does it write?",
   "answer": 11,
   "explain": "Starting from 5: 7, 9, 11. After 3 repetitions X is 5 + 3 × 2 = 11."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Which of these algorithms contains an infinite loop?",
   "options": [
    "X ← 10; while X > 0 repeat X ← X − 1",
    "X ← 1; while X > 0 repeat X ← X + 1",
    "Repeat 5 times «write hello»",
    "If X > 0 write «hello»"
   ],
   "answer": 1,
   "explain": "In the second one X always grows and stays above 0: the exit condition never becomes true."
  },
  {
   "type": "mc",
   "q": "A tea algorithm says «While the water is not boiling, wait», but it forgot the step «Turn on the kettle». Which property is violated?",
   "options": [
    "General",
    "Unambiguous",
    "Executable",
    "Finite"
   ],
   "answer": 3,
   "explain": "Without turning on the kettle the water never boils: the waiting never ends and the algorithm is not finite."
  },
  {
   "type": "tf",
   "q": "In a flowchart, an iteration is drawn with an arrow that goes back to an earlier block.",
   "answer": true,
   "explain": "True: the backward arrow makes the steps repeat as long as the condition requires."
  },
  {
   "type": "text",
   "q": "What is the description of an algorithm called that is written with sentences similar to a programming language, but without strict rules?",
   "answer": [
    "pseudocode",
    "pseudo-code",
    "pseudo code",
    "the pseudocode"
   ],
   "explain": "Pseudocode sits halfway between natural language and real code."
  },
  {
   "type": "num",
   "q": "An algorithm does: S ← 0; N ← 4; while N > 0 repeats «S ← S + N; N ← N − 1»; finally writes S. What number does it write?",
   "answer": 10,
   "explain": "S = 4 + 3 + 2 + 1 = 10: at each loop N is added and N goes down by 1, until N reaches 0."
  }
 ]
});
