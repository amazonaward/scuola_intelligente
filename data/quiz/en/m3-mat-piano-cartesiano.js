QBANK("en", "m3-mat-piano-cartesiano", {
 "f": [
  {
   "type": "mc",
   "q": "What is the horizontal axis of the Cartesian plane called?",
   "options": [
    "y-axis (ordinates)",
    "origin",
    "x-axis (abscissas)"
   ],
   "answer": 2,
   "explain": "The horizontal axis is the x-axis, also called the axis of abscissas; the vertical one is the y-axis."
  },
  {
   "type": "tf",
   "q": "The origin of the Cartesian plane has coordinates (0; 0).",
   "answer": true,
   "explain": "The origin is the point where the axes cross: both x and y are 0."
  },
  {
   "type": "mc",
   "q": "In which quadrant is the point P(−3; −6)?",
   "options": [
    "primo",
    "secondo",
    "terzo",
    "quarto"
   ],
   "answer": 2,
   "explain": "With x negative and y negative, the point lies in the third quadrant (bottom left)."
  },
  {
   "type": "num",
   "q": "What is the ordinate (y-coordinate) of the point A(3; 8)?",
   "answer": 8,
   "explain": "Coordinates are written (abscissa; ordinate): the ordinate is the second one, i.e. 8."
  },
  {
   "type": "text",
   "q": "What is the point where the two Cartesian axes meet called?",
   "answer": [
    "origin",
    "the origin"
   ],
   "explain": "The point where the axes cross, with coordinates (0; 0), is called the origin."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Find the distance between the points A(2; −1) and B(2; 7).",
   "answer": 8,
   "explain": "The points have the same x-coordinate, so they lie on a vertical line: distance = 7 − (−1) = 8."
  },
  {
   "type": "mc",
   "q": "What is the midpoint of the segment with endpoints A(0; 6) and B(8; −2)?",
   "options": [
    "(4; 4)",
    "(4; 2)",
    "(8; 4)"
   ],
   "answer": 1,
   "explain": "Average the coordinates: x = (0 + 8) ÷ 2 = 4; y = (6 − 2) ÷ 2 = 2. Midpoint (4; 2)."
  },
  {
   "type": "mc",
   "q": "Which of these lines passes through the origin?",
   "options": [
    "y = 2x + 1",
    "y = −3x",
    "y = x − 4"
   ],
   "answer": 1,
   "explain": "A line passes through the origin if it has no constant term: y = −3x. With x = 0 we get y = 0."
  },
  {
   "type": "num",
   "q": "What is the slope of the line through A(0; 1) and B(4; −7)?",
   "answer": -2,
   "explain": "m = (y₂ − y₁) ÷ (x₂ − x₁) = (−7 − 1) ÷ (4 − 0) = −8 ÷ 4 = −2."
  },
  {
   "type": "tf",
   "q": "The point (2; 5) lies on the line y = 2x + 3.",
   "answer": false,
   "explain": "False: for x = 2 we get y = 2 · 2 + 3 = 7, not 5. The point does not satisfy the equation."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Find the area of the triangle with vertices A(1; 1), B(7; 1) and C(4; 6).",
   "answer": 15,
   "unit": "square units",
   "explain": "The base AB is horizontal and measures 7 − 1 = 6. The height is the distance of C from the line y = 1: 6 − 1 = 5. Area = 6 × 5 ÷ 2 = 15."
  },
  {
   "type": "num",
   "q": "Find the distance between A(−3; −2) and B(5; 4).",
   "answer": 10,
   "explain": "Differences: Δx = 5 − (−3) = 8 and Δy = 4 − (−2) = 6. By Pythagoras: √(8² + 6²) = √100 = 10."
  },
  {
   "type": "mc",
   "q": "At which points does the line y = 2x − 6 meet the x-axis and the y-axis?",
   "options": [
    "(−3; 0) e (0; 6)",
    "(6; 0) e (0; −3)",
    "(3; 0) e (0; −6)",
    "(0; 3) e (−6; 0)"
   ],
   "answer": 2,
   "explain": "x-axis: set y = 0, so 2x = 6 and x = 3, point (3; 0). y-axis: set x = 0, so y = −6, point (0; −6)."
  },
  {
   "type": "tf",
   "q": "The lines y = 2x + 1 and y = −x/2 + 3 are perpendicular.",
   "answer": true,
   "explain": "Two lines are perpendicular if the product of their slopes is −1: 2 × (−1/2) = −1."
  },
  {
   "type": "order",
   "q": "Order these points by distance from the origin, from nearest to farthest.",
   "items": [
    "A(0; 3)",
    "B(3; 4)",
    "C(−6; 8)",
    "D(5; −12)"
   ],
   "explain": "Distances from O: A = 3; B = √(9 + 16) = 5; C = √(36 + 64) = 10; D = √(25 + 144) = 13."
  }
 ]
});
