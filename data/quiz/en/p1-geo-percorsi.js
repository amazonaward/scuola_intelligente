QBANK("en", "p1-geo-percorsi", {
 "f": [
  {
   "type": "mc",
   "q": "Which arrow means \"go forward\"?",
   "options": [
    "⬇️",
    "⬅️",
    "⬆️"
   ],
   "answer": 2,
   "explain": "The up arrow ⬆️ means go forward."
  },
  {
   "type": "tf",
   "q": "Every route has a start and an end.",
   "answer": true,
   "explain": "Yes: you start from one place and arrive at another."
  },
  {
   "type": "mc",
   "q": "Which animal shows the way by dancing?",
   "options": [
    "The cat",
    "The bee",
    "The frog"
   ],
   "answer": 1,
   "explain": "The bee does a dance and tells the others where the flowers are."
  },
  {
   "type": "text",
   "q": "What is the opposite of \"forward\"?",
   "answer": [
    "backward",
    "backwards",
    "back"
   ],
   "explain": "Forward ↔ backward."
  },
  {
   "type": "num",
   "q": "Code: → → ↑ ↑ ↑. How many steps do you take up (↑)?",
   "answer": 3,
   "explain": "There are 3 arrows ↑, so 3 steps up."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Start at the dot: 3 steps right, 4 steps up, 2 steps left. How many steps in all?",
   "answer": 9,
   "unit": "steps",
   "explain": "3 + 4 + 2 = 9 steps."
  },
  {
   "type": "mc",
   "q": "The code → → ↓ means…",
   "options": [
    "1 step right and 2 down",
    "2 steps right and 1 down",
    "3 steps left"
   ],
   "answer": 1,
   "explain": "Two arrows right and one pointing down."
  },
  {
   "type": "mc",
   "q": "Mum says: \"First the traffic light, then the pharmacy, finally the school.\" What do you find right before the school?",
   "options": [
    "The traffic light",
    "The pharmacy",
    "The park"
   ],
   "answer": 1,
   "explain": "The order is: traffic light, pharmacy, school. Right before the school is the pharmacy."
  },
  {
   "type": "tf",
   "q": "In orienteering, children use a map and a compass to find the lanterns.",
   "answer": true,
   "explain": "True: they run through the woods and look for the lanterns in the right order."
  },
  {
   "type": "order",
   "q": "Put Sara's morning in order, from first to last.",
   "items": [
    "I wake up",
    "I get dressed",
    "I have breakfast",
    "I leave the house"
   ],
   "explain": "First, then, after, finally: things happen in order."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Start at the dot and do: ↑ ↑ ↑ ↓. By how many squares are you higher than the start?",
   "answer": 2,
   "unit": "squares",
   "explain": "Three steps up and one down: 3 − 1 = 2 squares."
  },
  {
   "type": "tf",
   "q": "Two robots start from the same place. The first does: forward, forward, turn right, forward. The second does: forward, turn right, forward, forward. They end up in the same place.",
   "answer": false,
   "explain": "False: they have the same commands but in a different order, so they end up in two different places."
  },
  {
   "type": "mc",
   "q": "Which of these is a closed route?",
   "options": [
    "Home → school",
    "Home → park → shop → home",
    "Home → grandma's house"
   ],
   "answer": 1,
   "explain": "In a closed route you come back to the start: home, park, shop, home again."
  },
  {
   "type": "num",
   "q": "A robot does: forward ×3, turn right, forward ×2, turn left, forward ×1. How many steps forward does it take in all?",
   "answer": 6,
   "unit": "steps",
   "explain": "Count only the forward steps: 3 + 2 + 1 = 6. Turns are not steps."
  },
  {
   "type": "order",
   "q": "Put the orienteering in the woods in order.",
   "items": [
    "I take the map and the compass",
    "I run through the woods",
    "I find the lanterns in the right order",
    "I reach the finish"
   ],
   "explain": "First you get ready, then run, then find the lanterns and finally arrive."
  }
 ]
});
