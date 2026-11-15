QBANK("en", "m2-mat-pitagora", {
 "f": [
  {
   "type": "mc",
   "q": "How large is the right angle of a right triangle?",
   "options": [
    "60°",
    "90°",
    "45°"
   ],
   "answer": 1,
   "explain": "A right angle always measures 90°."
  },
  {
   "type": "num",
   "q": "The legs of a right triangle measure 3 cm and 4 cm. How long is the hypotenuse?",
   "answer": 5,
   "unit": "cm",
   "explain": "3² + 4² = 9 + 16 = 25 and √25 = 5."
  },
  {
   "type": "tf",
   "q": "In a right triangle the hypotenuse is always longer than each leg.",
   "answer": true,
   "explain": "Since c² = a² + b², c² is greater than both a² and b²: the hypotenuse is the longest side."
  },
  {
   "type": "mc",
   "q": "How many legs does a right triangle have?",
   "options": [
    "1",
    "2",
    "3"
   ],
   "answer": 1,
   "explain": "It has two legs (the sides forming the right angle) and one hypotenuse."
  },
  {
   "type": "text",
   "q": "What is a triangle with a 90° angle called?",
   "answer": [
    "right triangle",
    "right-angled triangle",
    "right angled triangle",
    "right"
   ],
   "explain": "It is a right triangle: Pythagoras' theorem works only for these triangles."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "A kite is on a taut string 25 m long. On the ground, the point under the kite is 7 m from the child. How high is the kite flying (ignore the child's height)?",
   "answer": 24,
   "unit": "m",
   "explain": "h² = 25² − 7² = 625 − 49 = 576, so h = √576 = 24 m."
  },
  {
   "type": "num",
   "q": "A rectangular play area measures 24 m × 18 m. How long is its diagonal?",
   "answer": 30,
   "unit": "m",
   "explain": "d² = 24² + 18² = 576 + 324 = 900, so d = √900 = 30 m."
  },
  {
   "type": "mc",
   "q": "An isosceles triangle has a base of 16 cm and slanted sides of 10 cm. How long is its height?",
   "options": [
    "8 cm",
    "4 cm",
    "6 cm"
   ],
   "answer": 2,
   "explain": "The height splits the base in half (8 cm): h² = 10² − 8² = 100 − 64 = 36, so h = 6 cm."
  },
  {
   "type": "tf",
   "q": "A triangle with sides 7 cm, 24 cm and 25 cm is a right triangle.",
   "answer": true,
   "explain": "7² + 24² = 49 + 576 = 625 = 25²: Pythagoras' relation holds, so it is a right triangle."
  },
  {
   "type": "num",
   "q": "A tablet has a rectangular screen with a diagonal of 17 cm and a width of 15 cm. How tall is the screen?",
   "answer": 8,
   "unit": "cm",
   "explain": "h² = 17² − 15² = 289 − 225 = 64, so h = √64 = 8 cm."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "A rhombus has a side of 13 cm and one diagonal of 24 cm. What is its area?",
   "answer": 120,
   "unit": "cm²",
   "explain": "The diagonals meet at 90° and bisect each other: half diagonal = 12; the other half = √(13² − 12²) = √25 = 5, so that diagonal is 10. Area = 24 × 10 ÷ 2 = 120 cm²."
  },
  {
   "type": "num",
   "q": "An ant starts from a point, walks 8 m east, then 9 m north and finally another 6 m north. How far is it, in a straight line, from the starting point?",
   "answer": 17,
   "unit": "m",
   "explain": "Northwards it has walked 9 + 6 = 15 m. Distance = √(8² + 15²) = √(64 + 225) = √289 = 17 m."
  },
  {
   "type": "mc",
   "q": "Sarah computes the hypotenuse of a triangle with legs 5 cm and 12 cm and gets 17 cm. What is the mistake?",
   "options": [
    "She added the legs instead of adding their squares and taking the root.",
    "She confused the hypotenuse with a leg.",
    "There is no mistake: 17 is correct."
   ],
   "answer": 0,
   "explain": "The correct result is √(5² + 12²) = √169 = 13 cm. 5 + 12 = 17 would just be the sum of the legs."
  },
  {
   "type": "tf",
   "q": "If I double the length of all three sides of a right triangle, the new triangle is still a right triangle.",
   "answer": true,
   "explain": "(2a)² + (2b)² = 4(a² + b²) = 4c² = (2c)²: Pythagoras' relation still holds (the triangles are similar)."
  },
  {
   "type": "order",
   "q": "Order the right triangles from the shortest to the longest hypotenuse (the legs are given).",
   "items": [
    "Legs 3 and 4",
    "Legs 6 and 8",
    "Legs 5 and 12",
    "Legs 7 and 24"
   ],
   "explain": "Hypotenuses: 5, 10, 13 and 25."
  }
 ]
});
