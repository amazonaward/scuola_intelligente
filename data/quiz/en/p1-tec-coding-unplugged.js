QBANK("en", "p1-tec-coding-unplugged", {
 "f": [
  {
   "type": "mc",
   "q": "Which arrow tells the robot «go forward»?",
   "options": [
    "⬇️",
    "⬆️",
    "⬅️"
   ],
   "answer": 1,
   "explain": "The up arrow ⬆️ means go forward."
  },
  {
   "type": "tf",
   "q": "A robot needs instructions to move.",
   "answer": true,
   "explain": "A robot does not think by itself: it moves only if we give it instructions."
  },
  {
   "type": "mc",
   "q": "The robot must go one square to the right. Which arrow do you use?",
   "options": [
    "⬅️",
    "⬇️",
    "➡️"
   ],
   "answer": 2,
   "explain": "The arrow ➡️ takes the robot to the right."
  },
  {
   "type": "text",
   "q": "The person who writes programs for computers is called a…",
   "answer": [
    "programmer",
    "a programmer",
    "coder",
    "a coder"
   ],
   "explain": "A programmer writes the instructions for the computer."
  },
  {
   "type": "order",
   "q": "Put the algorithm for getting dressed in order.",
   "items": [
    "I put on socks",
    "I put on shoes",
    "I tie the shoes"
   ],
   "explain": "Socks go on before shoes, and you tie the shoes after putting them on."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "The robot is on square 1. It moves 2 squares, then 3 more. Which square does it reach?",
   "answer": 6,
   "explain": "1 + 2 = 3, then 3 + 3 = 6. It reaches square 6."
  },
  {
   "type": "mc",
   "q": "Which program makes the robot take 5 steps forward?",
   "options": [
    "🔁 Repeat 3 times: ⬆️",
    "🔁 Repeat 5 times: ⬆️",
    "⬆️"
   ],
   "answer": 1,
   "explain": "Repeat 5 times ⬆️ makes 5 steps forward."
  },
  {
   "type": "tf",
   "q": "If the robot does not reach the star, there may be a mistake in the program.",
   "answer": true,
   "explain": "A mistake (bug) can send the robot to the wrong place."
  },
  {
   "type": "text",
   "q": "When we find and fix a mistake in a program we do…",
   "answer": [
    "debug",
    "debugging",
    "debug it",
    "debugging it"
   ],
   "explain": "Finding and fixing mistakes is called debugging."
  },
  {
   "type": "order",
   "q": "Put the algorithm for brushing teeth in order.",
   "items": [
    "I put toothpaste on the brush",
    "I brush my teeth",
    "I rinse my mouth",
    "I put the brush away"
   ],
   "explain": "Put on toothpaste, brush, rinse, then put the brush away."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Which program does NOT make the robot take 6 steps forward?",
   "options": [
    "🔁 Repeat 3 times: ⬆️⬆️",
    "🔁 Repeat 6 times: ⬆️",
    "🔁 Repeat 2 times: ⬆️⬆️"
   ],
   "answer": 2,
   "explain": "Repeat 2 times ⬆️⬆️ makes 2 × 2 = 4 steps. The others make 3 × 2 = 6 and 6 × 1 = 6."
  },
  {
   "type": "num",
   "q": "Program: 🔁 Repeat 3 times: ⬆️⬆️ then ➡️. How many ⬆️ steps does the robot take in all?",
   "answer": 6,
   "explain": "Each time it takes 2 ⬆️ steps. 3 × 2 = 6 ⬆️ steps (then ➡️ is a different move).",
   "unit": "steps"
  },
  {
   "type": "tf",
   "q": "If you change the order of the instructions, the robot can take a different path.",
   "answer": true,
   "explain": "Order matters: ⬆️➡️ and ➡️⬆️ take the robot to two different places."
  },
  {
   "type": "text",
   "q": "What is the idea of repeating the same instruction many times called? A…",
   "answer": [
    "loop",
    "a loop",
    "repeat",
    "repetition"
   ],
   "explain": "A loop repeats instructions, so the program is shorter."
  },
  {
   "type": "order",
   "q": "Put the algorithm for crossing the road in order.",
   "items": [
    "I stop on the pavement",
    "I look left and right",
    "I cross at the zebra crossing",
    "I walk on the other pavement"
   ],
   "explain": "First stop, then look, then cross on the zebra crossing and reach the other side."
  }
 ]
});
