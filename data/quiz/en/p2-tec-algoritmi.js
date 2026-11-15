QBANK("en", "p2-tec-algoritmi", {
 "f": [
  {
   "type": "tf",
   "q": "A cooking recipe is an algorithm.",
   "answer": true,
   "explain": "True: it has steps in order to reach a result."
  },
  {
   "type": "mc",
   "q": "Which word tells the robot to do the same thing several times?",
   "options": [
    "Repeat",
    "Sleep",
    "Colour"
   ],
   "answer": 0,
   "explain": "REPEAT is the loop command."
  },
  {
   "type": "mc",
   "q": "How does a robot carry out instructions?",
   "options": [
    "One at a time, in the written order",
    "All together at random",
    "Only the ones he likes"
   ],
   "answer": 0,
   "explain": "The robot follows the steps exactly, one after another."
  },
  {
   "type": "text",
   "q": "What is the Italian card game with arrows for learning algorithms without a computer called? (C…)",
   "answer": [
    "codyroby",
    "cody roby",
    "cody-roby"
   ],
   "explain": "It is called CodyRoby and was invented in Italy."
  },
  {
   "type": "order",
   "q": "Put the steps for making a sandwich in order.",
   "items": [
    "I take two slices of bread",
    "I spread the jam",
    "I close the sandwich",
    "I eat"
   ],
   "explain": "First the bread, then the jam, then you close it and eat."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "The robot is on square 1. It does “forward 3” then “forward 2”. Which square does it reach?",
   "answer": 6,
   "explain": "1 + 3 = 4, then 4 + 2 = 6."
  },
  {
   "type": "mc",
   "q": "Instruction: IF the number is even THEN write E, ELSE write O. What is written for 7?",
   "options": [
    "E",
    "O",
    "7"
   ],
   "answer": 1,
   "explain": "7 is odd, so the other choice is used: O."
  },
  {
   "type": "mc",
   "q": "What does the REPEAT command do in an algorithm?",
   "options": [
    "It repeats the same steps several times",
    "It deletes everything",
    "It switches the robot off"
   ],
   "answer": 0,
   "explain": "A loop avoids writing the same steps many times."
  },
  {
   "type": "tf",
   "q": "A recipe with the steps in the wrong order still gives the same result.",
   "answer": false,
   "explain": "False: the order of the steps changes the result."
  },
  {
   "type": "text",
   "q": "What is the person who writes instructions for the computer or robot called?",
   "answer": [
    "programmer",
    "the programmer",
    "a programmer",
    "coder"
   ],
   "explain": "It is the programmer."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Here is an algorithm for a cake: 1. Put the cake in the oven. 2. Mix the ingredients. 3. Eat. What is the mistake?",
   "options": [
    "Mixing must be done before baking",
    "You cannot eat a cake",
    "The computer is missing"
   ],
   "answer": 0,
   "explain": "Step 2 must come before step 1: order matters."
  },
  {
   "type": "num",
   "q": "REPEAT 3 times: put down 2 red cubes and 1 blue cube. How many cubes do you put down in all?",
   "answer": 9,
   "explain": "Each round: 2 + 1 = 3 cubes. Three rounds: 3 × 3 = 9."
  },
  {
   "type": "mc",
   "q": "IF it rains THEN I take the umbrella ELSE the sunglasses. Monday it rains, Tuesday it is sunny, Wednesday it rains. How many times do I take the umbrella?",
   "options": [
    "1 time",
    "2 times",
    "3 times"
   ],
   "answer": 1,
   "explain": "The umbrella is needed on Monday and Wednesday: 2 times."
  },
  {
   "type": "tf",
   "q": "To make a robot take 10 steps forward, “repeat 10 times: forward” is shorter than writing “forward” 10 times.",
   "answer": true,
   "explain": "True: the loop makes the algorithm shorter and clearer."
  },
  {
   "type": "order",
   "q": "Put the algorithm for packing the school bag in order.",
   "items": [
    "I look at tomorrow's timetable",
    "I put the books for each subject in the bag",
    "I check the pencil case",
    "I put the bag by the door"
   ],
   "explain": "First you look at the timetable, then fill the bag, check it and get it ready to go."
  }
 ]
});
