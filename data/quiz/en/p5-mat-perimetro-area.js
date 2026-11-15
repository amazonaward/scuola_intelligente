QBANK("en", "p5-mat-perimetro-area", {
  "f": [
    {
      "type": "num",
      "q": "A pentagon has sides of 3 cm, 4 cm, 4 cm, 5 cm and 6 cm. What is its perimeter?",
      "answer": 22,
      "unit": "cm",
      "explain": "Add all the sides: 3 + 4 + 4 + 5 + 6 = 22 cm."
    },
    {
      "type": "tf",
      "q": "To find the perimeter of a polygon you add up the lengths of all its sides.",
      "answer": true,
      "explain": "True: the perimeter is the length of the whole outline, that is, the sum of all the sides."
    },
    {
      "type": "mc",
      "q": "Which of these figures has the perimeter P = side × 4?",
      "options": [
        "Equilateral triangle",
        "Rhombus",
        "Trapezium"
      ],
      "answer": 1,
      "explain": "A rhombus has 4 equal sides, so P = side × 4. The equilateral triangle has 3 equal sides."
    },
    {
      "type": "num",
      "q": "A rectangle is made of 3 rows with 6 squares of 1 cm² in each. What is its area in cm²?",
      "answer": 18,
      "unit": "cm²",
      "explain": "Count the squares: 3 × 6 = 18 squares of 1 cm², that is 18 cm²."
    },
    {
      "type": "text",
      "q": "What is the segment called that is perpendicular to the base and is used to find the area of a triangle or a parallelogram?",
      "answer": [
        "height",
        "the height",
        "altitude",
        "the altitude"
      ],
      "explain": "It is the height (h): it goes from a vertex to the base, forming a right angle."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "A rectangular vegetable garden is 12 m long and 8 m wide. How many metres of fencing are needed to go all the way around it?",
      "answer": 40,
      "unit": "m",
      "explain": "Perimeter: (12 + 8) × 2 = 20 × 2 = 40 m."
    },
    {
      "type": "num",
      "q": "A rectangular wall 3 m high and 7 m wide is to be painted. One litre of paint covers 6 m². How many litres are needed?",
      "answer": 3.5,
      "tol": 0.01,
      "unit": "L",
      "explain": "Area: 3 × 7 = 21 m². Litres: 21 : 6 = 3.5 L."
    },
    {
      "type": "mc",
      "q": "A parallelogram has a base of 9 cm and a height of 4 cm. What is its area?",
      "options": [
        "18 cm²",
        "36 cm²",
        "13 cm²"
      ],
      "answer": 1,
      "explain": "A = b × h = 9 × 4 = 36 cm². (You don't divide by 2: that is only for the triangle.)"
    },
    {
      "type": "tf",
      "q": "A 6 cm × 2 cm rectangle has the same area as a 4 cm × 3 cm rectangle.",
      "answer": true,
      "explain": "True: 6 × 2 = 12 cm² and 4 × 3 = 12 cm². They have the same area but different perimeters (16 cm and 14 cm)."
    },
    {
      "type": "num",
      "q": "A square has a perimeter of 20 cm. What is its area?",
      "answer": 25,
      "unit": "cm²",
      "explain": "Side: 20 : 4 = 5 cm. Area: 5 × 5 = 25 cm²."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "A garden is made of two separate rectangular areas: one of 10 m × 6 m and one of 4 m × 3 m. What is the total area in m²?",
      "answer": 72,
      "unit": "m²",
      "explain": "First area: 10 × 6 = 60 m². Second area: 4 × 3 = 12 m². Total: 60 + 12 = 72 m²."
    },
    {
      "type": "mc",
      "q": "A rectangular room of 6 m × 4 m is to be covered with square tiles with 50 cm sides. How many tiles are needed?",
      "options": [
        "48",
        "96",
        "24",
        "192"
      ],
      "answer": 1,
      "explain": "Along 6 m there are 12 tiles (600 : 50), along 4 m there are 8 (400 : 50): 12 × 8 = 96. Or: 24 m² : 0.25 m² = 96."
    },
    {
      "type": "tf",
      "q": "If you double the side of a square, its area also doubles.",
      "answer": false,
      "explain": "False: the area becomes 4 times bigger. For example with a 3 cm side the area is 9 cm², with a 6 cm side it is 36 cm²."
    },
    {
      "type": "num",
      "q": "A rectangle has a base of 1.2 m and a height of 80 cm. What is its perimeter in centimetres?",
      "answer": 400,
      "unit": "cm",
      "explain": "Convert: 1.2 m = 120 cm. Perimeter: (120 + 80) × 2 = 200 × 2 = 400 cm."
    },
    {
      "type": "order",
      "q": "Order the figures from the smallest area to the largest.",
      "items": [
        "Triangle: base 6 cm, height 3 cm",
        "Rectangle: 3 cm × 4 cm",
        "Parallelogram: base 5 cm, height 3 cm",
        "Rhombus: diagonals 8 cm and 5 cm",
        "Square: side 5 cm"
      ],
      "explain": "Triangle 6 × 3 : 2 = 9 cm²; rectangle 3 × 4 = 12 cm²; parallelogram 5 × 3 = 15 cm²; rhombus 8 × 5 : 2 = 20 cm²; square 5 × 5 = 25 cm²."
    }
  ]
});
