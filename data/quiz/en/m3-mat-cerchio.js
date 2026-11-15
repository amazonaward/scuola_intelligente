QBANK("en", "m3-mat-cerchio", {
 "f": [
  {
   "type": "mc",
   "q": "The radius of a circle is the distance between…",
   "options": [
    "the centre and a point on the circle",
    "any two points on the circle",
    "two opposite points on the circle"
   ],
   "answer": 0,
   "explain": "The radius joins the centre to any point on the circle."
  },
  {
   "type": "num",
   "q": "The radius of a wheel is 7 cm. How long is the diameter?",
   "answer": 14,
   "unit": "cm",
   "explain": "The diameter is twice the radius: 7 × 2 = 14 cm."
  },
  {
   "type": "tf",
   "q": "The diameter is twice the radius.",
   "answer": true,
   "explain": "d = 2r: the diameter passes through the centre and joins two opposite points, so it is made of two radii."
  },
  {
   "type": "mc",
   "q": "Which formula gives the circumference of a circle?",
   "options": [
    "πr²",
    "πr",
    "2πr"
   ],
   "answer": 2,
   "explain": "The circumference is C = 2πr (or πd). πr² is the formula for the area of the circle."
  },
  {
   "type": "text",
   "q": "What is the part of a circle between two radii called? (two words)",
   "answer": [
    "circular sector",
    "sector",
    "the circular sector",
    "a sector"
   ],
   "explain": "The part of a circle between two radii is the circular sector, like a slice of cake."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "A pizza has a diameter of 30 cm. How long is its crust, i.e. the circumference? (π = 3.14)",
   "answer": 94.2,
   "tol": 0.05,
   "unit": "cm",
   "explain": "C = π × d = 3.14 × 30 = 94.2 cm."
  },
  {
   "type": "num",
   "q": "What is the area of a circle with radius 6 cm? (π = 3.14)",
   "answer": 113.04,
   "tol": 0.05,
   "unit": "cm²",
   "explain": "A = π × r² = 3.14 × 6² = 3.14 × 36 = 113.04 cm²."
  },
  {
   "type": "mc",
   "q": "A circle has an area of 78.5 cm². What is its radius? (π = 3.14)",
   "options": [
    "10 cm",
    "5 cm",
    "25 cm"
   ],
   "answer": 1,
   "explain": "r² = A ÷ π = 78.5 ÷ 3.14 = 25, so r = √25 = 5 cm."
  },
  {
   "type": "tf",
   "q": "If the radius of a circle doubles, its circumference doubles too.",
   "answer": true,
   "explain": "C = 2πr is proportional to the radius: double radius, double circumference (the area instead becomes four times as big)."
  },
  {
   "type": "mc",
   "q": "An arc of 180° corresponds to…",
   "options": [
    "un quarto della circonferenza",
    "l'intera circonferenza",
    "metà della circonferenza"
   ],
   "answer": 2,
   "explain": "180° is half of 360°, so the arc is a semicircle: half of the circumference."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "A bicycle wheel has a radius of 35 cm. How many metres does it travel in 100 full turns? (π = 3.14)",
   "answer": 219.8,
   "tol": 0.05,
   "unit": "m",
   "explain": "One turn = 2 × 3.14 × 35 = 219.8 cm. In 100 turns: 219.8 × 100 = 21 980 cm = 219.8 m."
  },
  {
   "type": "num",
   "q": "A circular fountain of radius 12 m is surrounded by a path 1 m wide. What is the area of the path? (π = 3.14)",
   "answer": 78.5,
   "tol": 0.05,
   "unit": "m²",
   "explain": "The path is an annulus with R = 13 m and r = 12 m: A = 3.14 × (13² − 12²) = 3.14 × (169 − 144) = 3.14 × 25 = 78.5 m²."
  },
  {
   "type": "mc",
   "q": "A circle has a diameter of 14 cm. A line is 7 cm from its centre. How is the line placed relative to the circle?",
   "options": [
    "secante",
    "esterna",
    "tangente"
   ],
   "answer": 2,
   "explain": "The radius is 14 ÷ 2 = 7 cm. The distance from the centre equals the radius, so the line has exactly one point in common: it is tangent."
  },
  {
   "type": "num",
   "q": "A circular sector has a radius of 10 cm and a central angle of 72°. What is its area? (π = 3.14)",
   "answer": 62.8,
   "tol": 0.05,
   "unit": "cm²",
   "explain": "Area of the circle = 3.14 × 10² = 314 cm². 72° is 72/360 = 1/5 of a full turn, so 314 ÷ 5 = 62.8 cm²."
  },
  {
   "type": "order",
   "q": "Order these circles from the shortest to the longest circumference.",
   "items": [
    "circle with radius 2 cm",
    "circle with diameter 6 cm",
    "circle with radius 4 cm",
    "circle with diameter 10 cm"
   ],
   "explain": "With π = 3.14: radius 2 cm → 12.56 cm; diameter 6 cm → 18.84 cm; radius 4 cm → 25.12 cm; diameter 10 cm → 31.4 cm."
  }
 ]
});
