QBANK("en", "m2-mat-trasformazioni", {
 "f": [
  {
   "type": "mc",
   "q": "Which transformation “flips” a shape like a mirror would?",
   "options": [
    "Translation",
    "Rotation",
    "Reflection (axial symmetry)"
   ],
   "answer": 2,
   "explain": "Axial symmetry reflects the shape across a line, the axis, like a mirror."
  },
  {
   "type": "tf",
   "q": "A translation preserves the shape and size of a figure.",
   "answer": true,
   "explain": "It is an isometry: it moves the shape without deforming or enlarging it."
  },
  {
   "type": "num",
   "q": "How many axes of symmetry does a rectangle that is not a square have?",
   "answer": 2,
   "explain": "It has 2 axes: one vertical and one horizontal, through the midpoints of opposite sides. The diagonals are not axes."
  },
  {
   "type": "text",
   "q": "What is the point that stays fixed in a rotation called?",
   "answer": [
    "center",
    "centre",
    "center of rotation",
    "centre of rotation",
    "the center",
    "the centre"
   ],
   "explain": "It is the centre of rotation: the shape turns around this point."
  },
  {
   "type": "mc",
   "q": "Which transformation changes the size of a figure?",
   "options": [
    "Translation",
    "Rotation",
    "Dilation (homothety)"
   ],
   "answer": 2,
   "explain": "Only the dilation enlarges or reduces; translation and rotation are isometries."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "The point A(3; −2) is translated by the vector v(−5; 6). What is the y-coordinate of A'?",
   "answer": 4,
   "explain": "y' = −2 + 6 = 4 (and x' = 3 − 5 = −2, so A'(−2; 4))."
  },
  {
   "type": "mc",
   "q": "What is the reflection of P(−4; 7) across the y-axis?",
   "options": [
    "(4; −7)",
    "(4; 7)",
    "(−4; −7)"
   ],
   "answer": 1,
   "explain": "Across the y-axis the x-coordinate changes sign and the y-coordinate stays the same: (4; 7)."
  },
  {
   "type": "num",
   "q": "The point B(4; −9) is transformed by the central symmetry about the origin. What is the y-coordinate of B'?",
   "answer": 9,
   "explain": "In the symmetry about the origin both coordinates change sign: B'(−4; 9)."
  },
  {
   "type": "num",
   "q": "A real car is 4 m long. Its model is similar, with similarity ratio 1/25. How many centimetres long is the model?",
   "answer": 16,
   "unit": "cm",
   "explain": "4 m = 400 cm; 400 ÷ 25 = 16 cm."
  },
  {
   "type": "tf",
   "q": "In an axial symmetry each point and its image are at the same distance from the axis.",
   "answer": true,
   "explain": "The axis is the perpendicular bisector of the segment joining P and P': it is perpendicular to it and passes through its midpoint."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Two similar figures have areas of 20 cm² and 45 cm². What is the similarity ratio of the large figure to the small one?",
   "answer": 1.5,
   "explain": "Areas scale as k²: k² = 45 ÷ 20 = 2.25, so k = √2.25 = 1.5."
  },
  {
   "type": "mc",
   "q": "First the translation by vector v(2; 3) is applied, then the one by w(−5; 1). The result equals a translation by the vector…",
   "options": [
    "(7; 2)",
    "(−3; −4)",
    "(−3; 4)"
   ],
   "answer": 2,
   "explain": "Add the components: (2 + (−5); 3 + 1) = (−3; 4)."
  },
  {
   "type": "mc",
   "q": "Luke says: “Rotating (3; 1) by 90° (counter-clockwise) about the origin gives (1; 3).” What is the mistake?",
   "options": [
    "He only swapped the coordinates, but the rotation sends (x; y) to (−y; x), that is (−1; 3).",
    "A 90° rotation does not change the coordinates.",
    "The point goes to (−3; −1)."
   ],
   "answer": 0,
   "explain": "Swapping the coordinates is a reflection across the line y = x, not a 90° rotation."
  },
  {
   "type": "num",
   "q": "The point P(2; 3) is first reflected across the x-axis and then translated by the vector (1; −2). What is the y-coordinate of the final point?",
   "answer": -5,
   "explain": "Reflected: (2; −3). Translated: (2 + 1; −3 − 2) = (3; −5). The y-coordinate is −5."
  },
  {
   "type": "order",
   "q": "Order the shapes from the fewest to the most axes of symmetry.",
   "items": [
    "Scalene triangle",
    "Rhombus (not a square)",
    "Regular pentagon",
    "Regular hexagon"
   ],
   "explain": "Axes: scalene 0, rhombus 2 (the diagonals), regular pentagon 5, regular hexagon 6."
  }
 ]
});
