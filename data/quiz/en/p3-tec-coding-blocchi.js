QBANK("en", "p3-tec-coding-blocchi", {
  "f": [
    {
      "type": "mc",
      "q": "In Scratch, what colour are the Motion blocks (like «move 10 steps»)?",
      "options": [
        "Blue",
        "Yellow",
        "Purple"
      ],
      "answer": 0,
      "explain": "Motion blocks are blue. Events are yellow, Looks purple, Control orange."
    },
    {
      "type": "tf",
      "q": "The computer does exactly what is written in the program.",
      "answer": true,
      "explain": "True: the computer is a precise executor without imagination."
    },
    {
      "type": "mc",
      "q": "What does the block «wait 1 second» do?",
      "options": [
        "It starts the program",
        "It turns the character",
        "It makes a pause"
      ],
      "answer": 2,
      "explain": "Wait makes a pause for a certain time."
    },
    {
      "type": "text",
      "q": "What is the name of the colourful block programming tool made at MIT, with the orange cat?",
      "answer": [
        "scratch"
      ],
      "explain": "It is called Scratch and was made at MIT in Boston."
    },
    {
      "type": "mc",
      "q": "In 1947 engineers found the first real «bug» in the Mark II computer. What animal was it?",
      "options": [
        "An ant",
        "A moth",
        "A spider"
      ],
      "answer": 1,
      "explain": "A moth was stuck between the contacts. «Bug» in English means insect."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "A program says: «repeat 6 times: switch costume, wait 0.5 seconds». How many seconds of waiting are there in total?",
      "answer": 3,
      "unit": "seconds",
      "explain": "6 loops × 0.5 seconds = 3 seconds."
    },
    {
      "type": "mc",
      "q": "The robot must move forward 2 squares, turn left and move forward 4 squares. Which program is right?",
      "options": [
        "repeat 4 times [forward]; turn left; repeat 2 times [forward]",
        "repeat 2 times [forward]; turn left; repeat 4 times [forward]",
        "repeat 6 times [forward]; turn left"
      ],
      "answer": 1,
      "explain": "First 2 steps forward, then the left turn, then 4 steps forward. Order matters!"
    },
    {
      "type": "tf",
      "q": "In the «repeat 4 times» block, the instructions inside are carried out only once.",
      "answer": false,
      "explain": "False: the instructions inside the loop are repeated 4 times."
    },
    {
      "type": "order",
      "q": "A recipe is an algorithm. Put the steps of the cake in order.",
      "items": [
        "Break the eggs",
        "Add the sugar",
        "Mix",
        "Put it in the oven"
      ],
      "explain": "If you bake before mixing, the result is a disaster: in a sequence, order matters."
    },
    {
      "type": "text",
      "q": "What is the job of finding and fixing a mistake in a program called? (de…)",
      "answer": [
        "debug",
        "debugging",
        "to debug",
        "debug it"
      ],
      "explain": "It is called debugging: you test the program, look for the mistake and fix it."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "A loop says: «repeat 5 times: add 3 cubes, remove 1 cube». How many cubes are left at the end?",
      "answer": 10,
      "unit": "cubes",
      "explain": "Each loop adds 3 − 1 = 2 cubes. After 5 loops: 5 × 2 = 10 cubes."
    },
    {
      "type": "mc",
      "q": "Marta wants to draw a square and writes: «repeat 3 times: move 10 steps, turn 90°». What does she draw?",
      "options": [
        "A complete square",
        "Three sides of a square: the shape stays open",
        "A triangle"
      ],
      "answer": 1,
      "explain": "A square has 4 sides, so you need repeat 4 times. With 3 loops the drawing is unfinished. It is a bug to fix!"
    },
    {
      "type": "mc",
      "q": "Which of these activities is NOT a loop, but a sequence of different steps?",
      "options": [
        "Skipping rope 20 times",
        "The chorus of a song",
        "Turning on the computer and opening Scratch"
      ],
      "answer": 2,
      "explain": "Turning on the computer and opening Scratch are two different steps, one after the other. The others repeat the same thing."
    },
    {
      "type": "tf",
      "q": "The program «repeat 4 times: forward 1 square» makes the robot move just like 4 «forward 1 square» blocks placed one after another.",
      "answer": true,
      "explain": "True: the result is the same, but with the loop the program is shorter and easier to fix."
    },
    {
      "type": "order",
      "q": "Put the steps for fixing a bug in order.",
      "items": [
        "Run the program and look at the result",
        "Find where the result is different from what you wanted",
        "Fix the wrong instruction",
        "Test the program again"
      ],
      "explain": "You test, find where it goes wrong, fix it and test again: this is how you learn to program."
    }
  ]
});
