QBANK("en", "p5-mat-cerchio", {
  "f": [
    {
      "type": "mc",
      "q": "What is the point called that is at the same distance from all points of the circle's edge (circumference)?",
      "options": [
        "arc",
        "centre",
        "sector"
      ],
      "answer": 1,
      "explain": "The centre is where you put the compass point: all points of the circumference are at the same distance from it."
    },
    {
      "type": "tf",
      "q": "The diameter is twice as long as the radius.",
      "answer": true,
      "explain": "True: d = r × 2. The diameter is made of two radii placed end to end."
    },
    {
      "type": "num",
      "q": "A wheel has a radius of 8 cm. What is its diameter?",
      "answer": 16,
      "unit": "cm",
      "explain": "d = r × 2 = 8 × 2 = 16 cm."
    },
    {
      "type": "mc",
      "q": "A segment joining any two points of the circumference is called a…",
      "options": [
        "arc",
        "sector",
        "chord"
      ],
      "answer": 2,
      "explain": "A segment joining two points of the circumference is a chord. An arc, instead, is a piece of the circumference."
    },
    {
      "type": "text",
      "q": "Which tool do you use to draw a circle?",
      "answer": [
        "compass",
        "a compass",
        "compasses",
        "a pair of compasses",
        "pair of compasses",
        "the compass"
      ],
      "explain": "You use a compass: the point stays still at the centre and the pencil turns around it."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "A pizza has a diameter of 30 cm. How long is its circumference (the crust edge)? (π = 3.14)",
      "answer": 94.2,
      "unit": "cm",
      "explain": "C = d × 3.14 = 30 × 3.14 = 94.2 cm."
    },
    {
      "type": "mc",
      "q": "A circle has a radius of 4 dm. Which calculation gives the length of the circumference?",
      "options": [
        "4 × 3.14",
        "4 × 2 × 3.14",
        "4 × 4 × 3.14"
      ],
      "answer": 1,
      "explain": "C = r × 2 × 3.14. The last calculation (r × r × 3.14) would give the area, not the edge."
    },
    {
      "type": "num",
      "q": "A bicycle wheel has a diameter of 70 cm. How many metres does the bike travel in 10 full turns of the wheel? (π = 3.14)",
      "answer": 21.98,
      "tol": 0.01,
      "unit": "m",
      "explain": "One turn: 70 × 3.14 = 219.8 cm. 10 turns: 2198 cm = 21.98 m."
    },
    {
      "type": "tf",
      "q": "If the radius of a circle doubles, its circumference also doubles.",
      "answer": true,
      "explain": "True: C = r × 2 × 3.14, so if r becomes twice as big, C becomes twice as big too."
    },
    {
      "type": "num",
      "q": "A circumference measures 62.8 cm. What is its radius? (π = 3.14)",
      "answer": 10,
      "unit": "cm",
      "explain": "Diameter: 62.8 : 3.14 = 20 cm. Radius: 20 : 2 = 10 cm."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "A round track has a diameter of 80 m. Marco runs 3 laps along its edge. How many metres does he run? (π = 3.14)",
      "answer": 753.6,
      "tol": 0.01,
      "unit": "m",
      "explain": "One lap: 80 × 3.14 = 251.2 m. Three laps: 251.2 × 3 = 753.6 m."
    },
    {
      "type": "mc",
      "q": "In one full turn a wheel travels 157 cm. What is its diameter? (π = 3.14)",
      "options": [
        "25 cm",
        "50 cm",
        "78.5 cm",
        "100 cm"
      ],
      "answer": 1,
      "explain": "d = C : 3.14 = 157 : 3.14 = 50 cm. Careful: 25 cm would be the radius."
    },
    {
      "type": "tf",
      "q": "60 cm of ribbon is enough to go all the way around a round table-top with a diameter of 20 cm.",
      "answer": false,
      "explain": "False: the circumference is 20 × 3.14 = 62.8 cm, which is more than 60 cm."
    },
    {
      "type": "num",
      "q": "A pizza has a diameter of 40 cm. What is its area? (A = r × r × 3.14)",
      "answer": 1256,
      "tol": 0.01,
      "unit": "cm²",
      "explain": "Radius: 40 : 2 = 20 cm. Area: 20 × 20 × 3.14 = 400 × 3.14 = 1256 cm²."
    },
    {
      "type": "order",
      "q": "Order from the shortest circumference to the longest. (π = 3.14)",
      "items": [
        "Diameter 10 cm",
        "Radius 7 cm",
        "Diameter 20 cm",
        "Radius 15 cm"
      ],
      "explain": "Diameter 10 → 31.4 cm; radius 7 (d = 14) → 43.96 cm; diameter 20 → 62.8 cm; radius 15 (d = 30) → 94.2 cm."
    }
  ]
});
